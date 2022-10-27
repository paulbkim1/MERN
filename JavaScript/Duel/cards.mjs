export class Card {
    constructor(name = "", cost = 0) {
        this.name = name;
        this.cost = cost;
    }

    displayCard() {
        let output = 
        "********************/n" +
        "name: " + this.name + "\n"
        + "cost: " + this.cost + "\n";
        return output;
    }
}


export class Unit extends Card{
    constructor(name= "", cost= 0, power= 0, resilience= 0){
        super(name, cost)
        this.power = power;
        this.resilience = resilience;
    }

    alterAttributes(effectCard) {
        if(effectCard.stat === "resilience") {
            
        }
    }

    displayCard(){
        let output = super.displayCard();
        output += "power: " + this.power + "\n" +
        "resilience: " + this.resilience;
        return output;
    }
}


export class Effect extends Card{
    constructor(name= "", cost= 0, text= "", stat= "", magnitude= 0){
        super(name, cost)
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    playEffect(unitCard) {
        if (this.stat === "resilience") {
            unitCard.resilience += this.magnitude;
        }
        if (this.stat === "power") {
            unitCard.power += this.magnitude;
        }
    }

    displayCard(){
        let output = super.displayCard();
        output += "text: " + this.text +
        "\n" + "stat: " + this.stat + "\n" +
        "magnitude: " + this.magnitude;
        return output;
    }
}
