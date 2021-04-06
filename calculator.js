window.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let value = { amount: 20000, years: 8, rate: 2.8 };

  let loanAmount = document.getElementById("loan-amount");
  loanAmount.value = value.amount;

  let termInYears = document.getElementById("loan-years");
  termInYears.value = value.years;

  let yearlyRate = document.getElementById("loan-rate");
  yearlyRate.value = value.rate;

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let uiValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(uiValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let monthlyRate = values.rate;
  let monthlyEquation = monthlyRate / 100 / 12;
  let n = Math.floor(values.years * 12);
  return (
    (monthlyEquation * values.amount) /
    (1 - Math.pow(1 + monthlyEquation, -n))
  ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyUI = document.getElementById("monthly-payment");
  monthlyUI.innerText = "$" + monthly;
}
