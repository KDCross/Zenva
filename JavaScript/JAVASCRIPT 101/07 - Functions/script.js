//1 hour = 60 minutes
function hourToMinutes(hours) {
  let result = hours * 60;
  return result;
}

let a = hourToMinutes(10);
let b = hourToMinutes(20);

//console.log(a);
//console.log(b);

let dayToHours = function (days) {
  return days * 24;
};

let c = dayToHours(1);
let d = dayToHours(3);

//console.log(c);
//console.log(d);

//Variables Declaration

let balance = 100;
let stock = 50;
let price = 5;

console.log(balance);
console.log(stock);

//1. check if we have stock
//2. reduce stock, increase balance.

function sellItem(quantity){
    if (quantity <= stock) {
        //reduce stock
        stock -= quantity;
        //balance increase
        balance += price * quantity;
        console.log(
          "Purchase completed.",
          "New balance",
          balance,
          "New stock level",
          stock
        );
      } else {
        console.log("Not enough stock");
      }
}

sellItem(10);
sellItem(10);
sellItem(10);
sellItem(10);
sellItem(10);
sellItem(10);
