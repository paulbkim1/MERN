class Ninja {
    constructor(name, speed){
        this.name = name;
        this.health = 3;
        this.speed = speed;
        this.strength = 3;
    }

    sayName(){
        console.log(this.name);
        return this;
    }

    showStats(){
        console.log(`Name = ${this.name}, Health = ${this.health}, Speed = ${this.speed}, Strength = ${this.strength}`)
        return this;
    }

    drinkSake(){
        this.health += 10
        return this;
    }
}

class Sensei extends Ninja {
    constructor(name){
        super(name, 10)
        this.health = 200;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        this.drinkSake()
        console.log("This is a wise message")
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();

ninja1.drinkSake();
ninja1.showStats();

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();