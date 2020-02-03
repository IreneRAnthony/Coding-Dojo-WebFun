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
    this.punch = function(ninja){
        ninja.health -= 5;
        console.log(ninja.name + " was punched by " + this.name + " and lost 5 Health!");
    }
    this.kick = function(ninja){
       var attackPower = 15 * privateStrength;
       ninja.health -= attackPower;
       console.log(ninja.name + " was kicked by " + this.name + " and lost " + attackPower + " Health!")
    }
}

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.kick(redNinja);