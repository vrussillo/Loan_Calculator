it("should calculate the monthly rate correctly", function () {
  // ...
  let values = {
    amount: 20000,
    years: 8,
    rate: 2.8,
  };
  expect(calculateMonthlyPayment(values)).toEqual("130.44");
});

it("should return a result with 2 decimal places", function () {
  let values = {
    amount: 2486,
    years: 5,
    rate: 2.8,
  };
  expect(calculateMonthlyPayment(values)).toEqual("131.00");
});

it("should handle terribly high interest rates", function () {
  let values = {
    amount: 1000,
    years: 50,
    rate: 99,
  };
  expect(calculateMonthlyPayment(values)).toEqual("82.50");
});
