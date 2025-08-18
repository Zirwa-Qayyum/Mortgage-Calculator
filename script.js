
window.onload = function () {
 
  const amount = document.querySelector(".fifth input");
  const years = document.querySelector(".sixth input");
  const rate = document.querySelector(".eight input");
  const repaymentRadio = document.getElementById("repayment");
  const interestRadio = document.getElementById("interest");
  const calculateBtn = document.querySelector(".end");
  const resultBox = document.querySelector(".final");
  const clearBtn = document.querySelector(".second span");

  const repaymentBox = repaymentRadio.parentElement;
  const interestBox = interestRadio.parentElement;

  function updateRadioColors() {
    if (repaymentRadio.checked) {
      repaymentBox.style.backgroundColor = "burlywood";
      interestBox.style.backgroundColor = "#f9f9f9";
    } else if (interestRadio.checked) {
      interestBox.style.backgroundColor = "burlywood";
      repaymentBox.style.backgroundColor = "#f9f9f9";
    }
  }

  repaymentRadio.addEventListener("click", updateRadioColors);
  interestRadio.addEventListener("click", updateRadioColors);

  // Calculate button click
  calculateBtn.addEventListener("click", function () {
    const loan = parseFloat(amount.value);
    const time = parseFloat(years.value);
    const interest = parseFloat(rate.value);
    const months = time * 12;

    if (!loan || !time || !interest) {
      resultBox.innerHTML = "<p>Please fill in all fields.</p>";
      return;
    }

    let monthly = 0;

    if (repaymentRadio.checked) {
      const monthlyRate = interest / 100 / 12;
      monthly = (loan * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
    } else if (interestRadio.checked) {
      monthly = (loan * (interest / 100)) / 12;
    } else {
      resultBox.innerHTML = "<p>Please select mortgage type.</p>";
      return;
    }

    resultBox.innerHTML = `
      <p>Monthly Payment:</p>
      <h2 style="color:white;">€${monthly.toFixed(2)}</h2>
    `;
  });

  // Clear All button click
  clearBtn.addEventListener("click", function () {
    amount.value = "";
    years.value = "";
    rate.value = "";
    repaymentRadio.checked = false;
    interestRadio.checked = false;
    repaymentBox.style.backgroundColor = "#f9f9f9";
    interestBox.style.backgroundColor = "#f9f9f9";
    resultBox.innerHTML = `
      <p>Complete the form and click "Calculate Repayments"</p>
      <p>to see what your monthly repayments would be</p>
    `;
  });
};
