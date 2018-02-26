// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
  return customerName;
}
console.log(upperCaseCustomerName());

function setBestCustomer(){
  var bestCustomer = 'not bob';
  return bestCustomer;
}
console.log("Best customer: " + bestCustomer);
console.log("Run setBestCustomer: " + setBestCustomer);
console.log("Best customer: " + bestCustomer);

function overwriteBestCustomer(){
  bestCustomer = 'maybe bob';
  return bestCustomer;
}

console.log("Best customer: " + bestCustomer);
console.log("Run overwriteBestCustomer: " + overwriteBestCustomer);
console.log("Best customer: " + bestCustomer);
