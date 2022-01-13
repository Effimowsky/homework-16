// Homework-1
function isEvenOrOdd(num) {
  if (num % 2 == 0) {
    return "false";
  } else {
    return "true";
  }
}
console.log(isEvenOrOdd(28));

// Homework-2
function getCurrencySymbolFromCode(currency) {
  if (currency === "USD") {
    console.log("$");
  } else if (currency === "EUR") {
    console.log("€");
  } else if (currency === "GEL") {
    console.log("ლ");
  } else if ((currency !== "USD", currency !== "EUR", currency !== "GEL")) {
    console.log(currency);
  }
}
getCurrencySymbolFromCode("EUR");

// Homework-3
function LowCase(text) {
  let UpperCase = text.toLowerCase();
  console.log(UpperCase);
}
LowCase("MY NAME IS JOHN");

// Homework-4
const array = [28, 45, 36, 18, 33, 59, 76, 14, 87, 1, 9, 5, 11, 64];
const evens = array.filter(function (number) {
  return number % 2 === 0;
});

console.log(evens);

// Homework-5
const persons = [
  { name: "Guga", age: 22 },
  { name: "Elene", age: 22 },
  { name: "Gurami", age: 22 },
  { name: "Maka", age: 22 },
];
const findPerson = persons.find((me) => {
  return me.name === "Elene";
});
console.log(findPerson);
