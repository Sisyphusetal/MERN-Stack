class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 90;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.table(this);
        //OR
        console.log(Object.entries(this))
        //OR manually console.log each constructor attribute
        //However, in game terms, console.table is the neatest and most appropriate way
    }

    drinkSake() {
        this.health += 10;
        console.log(this.health);
    }
}

const ninja = new Ninja('Kurt');

ninja.sayName();
ninja.showStats();
ninja.drinkSake();