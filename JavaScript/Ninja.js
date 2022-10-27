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


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();

ninja1.drinkSake();
ninja1.showStats();