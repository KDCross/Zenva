//Challenge

let player = {
  health: 100,
  fun: 0,
  eat: function(food){
    if(food == "apple"){
      this.health += 10;
    }
    else if(food == "candy"){
      console.log("eat candy");
      this.health -= 5;
      this.fun += 5;
    }
  },
  play: function(){
    console.log("play");
    this.fun += 10;
  }
};
console.log(player);

player.eat("apple");
console.log(player);

player.eat("candy");
console.log(player);

player.play();
console.log(player);