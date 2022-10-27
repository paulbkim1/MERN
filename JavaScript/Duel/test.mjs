import { Card, Unit, Effect } from "./cards.js"

const unitCard1 = new Card("Red Belt Ninja", 3, 3, 4);

const effectCard1 = new Effect("Hard Algo", 2, "increase target's resilience by 3", "resilience", 3);

effectCard1.playEffect(unitCard1);

console.log(card.displayCard());