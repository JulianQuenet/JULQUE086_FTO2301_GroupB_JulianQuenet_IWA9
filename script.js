const salary = 4000;
const lodging = "apartment";
const size = "large";
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change the syntax below (not the values or key names)

/**
 * Object contains all expense i.e. food, transport, taxes and rent
 */
const expenses = {
  food: 51.7501,
  transport: 10.2,
  tax: {
    734: "3%",
    234: "20%",
    913: "12%",
    415: "38%",
    502: "42%",
  },
  rent: {
    none: 0,
    "small-room": 200,
    "large-room": 300,
    "small-apartment": 400,
    "large-apartment": 800,
    "small-house": 1200,
    "large-house": 2400,
  },
};

// You can change below however you want

if (hourOfDay === 00 && minuteOfDay === 00) {
  const taxAsDecimal = parseInt(expenses.tax[913]) / 100; //Converts the string to number in order to be /100
  const startingAfterTax = salary - taxAsDecimal * salary;
  const type = `${size}-${lodging}`; //Interpolates the size & lodging with a "-" in-between
  const balance =
    startingAfterTax - expenses.transport - expenses.food - expenses.rent[type];
  console.log("R", balance.toFixed(2));
} else {
  console.log("Balances are only calculated at 00.00 (Midnight)");
}










// const salary = 4000;
// const lodging = 'apartment'
// const size = 'large'

// Only change the syntax below (not the values or key names)

// const expenses = {
//     food: 51.7501,
//     transport:  10.2,
// }

// const tax = {
//     734: '3%',
//     234: '20%',
//     913: '12%',
//     415: '38%',
//     502: '42%',
// }

// const rent = {
//     none: 0,
//     'small-room': 200,
//     'large-room': 300,
//     'small-apartment': 400,
//     'large-apartment': 800,
//     'small-house': 1200,
//     'large-house': 2400,
// }

// You can change below however you want

// const taxAsDecimal = tax.913 / 100
// const startingAfterTax = salary * 1 - taxAsDecimal
// const type = lodging + size
// const balance = expenses(transport) - expenses(food) - expenses(rent.type)
// console.log(balance)
