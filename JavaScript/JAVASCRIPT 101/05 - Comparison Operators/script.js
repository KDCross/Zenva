let item = "window";

if (item != "engine") {
  console.log("not an engine");
}

let score = 5;

if (score >= 60) {
  console.log("pass");
} else if (score < 10) {
  console.log("meet the teacher");
}

let isEngine = item == "engine";
console.log(isEngine);

//Challenge Givens
let balance = 100;
let itemPrice = 10;

//1. Check Balance
if(balance >= itemPrice){
    canBuy = true;
}
else{
    canBuy = false;
}

//2. If they buy, update balance
if (canBuy == true){
    balance -= itemPrice;
    let didBuy = "Thank you for your purchase!"
    let displayBalance = "Your new balance is:"
    console.log(didBuy);
    console.log(displayBalance);
    console.log(balance);
}
else {
    let didBuy = "I'm sorry, but you cannot afford this."
    let displayBalance = "Your balance is:"
    console.log(didBuy);
    console.log(displayBalance);
    console.log(balance);
}