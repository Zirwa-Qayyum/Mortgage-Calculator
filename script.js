function calculateMortgage() {
    const inputs = document.querySelectorAll('input[type="text"]');
    const loanAmount = parseFloat(inputs[0].value);
    const loanTermYears = parseFloat(inputs[1].value);
    const interestRate = parseFloat(inputs[2].value);

    // Get selected mortgage type
    const repaymentType = document.getElementById('repayment').checked;
    const interestOnlyType = document.getElementById('interest').checked;

    // Validate input
    if (isNaN(loanAmount) || isNaN(loanTermYears) || isNaN(interestRate)) {
        alert('Please enter valid numeric values.');
        return;
    }
    if (!repaymentType && !interestOnlyType) {
        alert('Please select a mortgage type.');
        return;
    }

    const monthlyRate = interestRate / 100 / 12;
    const totalMonths = loanTermYears * 12;
    let monthlyPayment = 0;
    let totalRepayment = 0;

    if (repaymentType) {
        // Repayment mortgage formula
        const factor = Math.pow(1 + monthlyRate, totalMonths);
        monthlyPayment = loanAmount * monthlyRate * factor / (factor - 1);
        totalRepayment = monthlyPayment * totalMonths;
    } else if (interestOnlyType) {
        // Interest-only mortgage
        monthlyPayment = loanAmount * monthlyRate;
        totalRepayment = monthlyPayment * totalMonths;
    }

    // Update results in the output section
    const monthlyDisplay = document.querySelector('.last');
    const totalDisplay = document.querySelector('.you');

    monthlyDisplay.innerHTML = `<i class="fa-solid fa-euro-sign"></i> ${monthlyPayment.toFixed(2)}`;
    totalDisplay.innerHTML = `<i class="fa-solid fa-euro-sign"></i> ${totalRepayment.toFixed(2)}`;
    

}
document.querySelector('.end').addEventListener('click', calculateMortgage);
