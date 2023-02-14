function sendSignal(){
  console.log("HELP!");
}

let i = 0;

while(i < 1000){
  sendSignal();
  i++; //this increments by 1, same as i += 1 or i = i + 1
}

let result = 0;

let j = 1;

while(j <= 10){
  result += j;
  console.log(result);
  j++;
}