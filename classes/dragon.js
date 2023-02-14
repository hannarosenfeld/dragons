class Dragon {
  constructor(name , color) {
    this.name = name;
    this.color = color;
  }

  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }

  static getDragons(...dragons) {
    return dragons.map(dragon => dragon.name);
  }
}

let test = new Dragon("puff", "pink");

console.log(test)
console.log(Dragon.getDragons([test]))
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
