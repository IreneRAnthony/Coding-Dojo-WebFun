class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        var speed = 3;
        var strength = 3;
    }
    sayName(){
        console.log("My ninja name is " + this.name + "!");
    }
    showStats(){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
    }
    drinkSake(){
        health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name){
        super(name);
        var health = 200;
        var speed = 10;
        var strength = 10;
        var wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
