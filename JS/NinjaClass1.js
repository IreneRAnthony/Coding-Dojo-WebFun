function Ninja(name){
    this.name = name;
    var health = 100;
    var privateSpeed = 3;
    var privateStrength = 3;

    this.sayName = function(){
        console.log("My ninja name is " + this.name + "!");
    }
    this.showStats = function(){
        console.log("Name: " + this.name + ", Health: " + health + ", Speed: " + privateSpeed + ", Strength: " + privateStrength);
    }
    this.drinkSake = function(){
        health += 10;
    }
}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();
