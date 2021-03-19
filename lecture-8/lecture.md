# Lecture 8

### Introduction

Object Oriented Programming (OOP) and Functionnal Programming (FP) are programming paradigms. Roughly speaking, following a programming paradigm is writing code compliant with a specific set of rules. For example, organizing the code into units would be called OOP, avoiding side effects would be called FP.

**OOP Pros:**

- Objects and methods are very readable and understandable.

- OOP utilizes an imperative style, in which code reads like a straight-forward set of instructions as a computer would read it.

**OOP Cons:**

- OOP commonly depends upon shareable state. The unfortunate result of so many objects and methods existing within the same state and being accessed in an entirely undetermined order can lead the pre-discussed concept of “race conditions”.

**FP Pros:**

- Utilizing pure functions, leads to reliable functions with no side effects that accomplish and return exactly what you expect them to.

- FP utilizes a more declarative style, which focuses more on what to do and less about how it’s being done. This places the emphasis on performance and optimization, leaving the door to refactor without completely reworking your code.

**FP Cons:**

- Functional programming is a newer paradigm. It’s much easier to find documentation and information on the OOP approach.

- Similar to one of OOP’s strengths, functional programming can lack readability at times. Sometimes functions can become very verbose and become difficult to follow comparatively to the object-oriented style.

You saw a simple example of this in the Person object and createPerson function we discussed earlier.

### Interfaces

```js
function CoffeeMachine(power) {
  this.waterAmount = 0; 

  alert( 'Coffee machine with power: ' + power + ' watt created');
}

// create
var coffeeMachine = new CoffeeMachine(100);

// add water
coffeeMachine.waterAmount = 200;
```

###### Private and Public methods
```js
function CoffeeMachine(power) {

  this.waterAmount = 0;

  // private method
  function getBoilTime() {
    return 1000;
  }

  // private method
  function onReady() {
    alert( 'Кофе готов!' );
  }

  // public method
  this.run = function() {
    setTimeout(onReady, getBoilTime());
  };
}


var coffeeMachine = new CoffeeMachine(100);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();
```

###### Access to object from internal methods
```js
function CoffeeMachine(power) {
  this.waterAmount = 0;
  var WATER_HEAT_CAPACITY = 4200;

  function getBoilTime() {
    return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  function onReady() {
    alert( 'Coffee ready!' );
  }

  this.run = function() {
    // usding call
    setTimeout(onReady, getBoilTime.call(this));
  };
}
var coffeeMachine = new CoffeeMachine(100000);
coffeeMachine.waterAmount = 200;
coffeeMachine.run();
``` 

or

```js
function CoffeeMachine(power) {
  this.waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  var getBoilTime = function() {
    return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }.bind(this);

  function onReady() {
    alert( 'Coffee ready!' );
  }

  this.run = function() {
    setTimeout(onReady, getBoilTime());
  };
}
var coffeeMachine = new CoffeeMachine(100000);
coffeeMachine.waterAmount = 200;
coffeeMachine.run();
```

###### Using `this` as closure
```js
function CoffeeMachine(power) {
  this.waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  // this as closure
  var self = this;

  function getBoilTime() {
      return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

  function onReady() {
    alert( 'Coffee ready!' );
  }

  this.run = function() {
    setTimeout(onReady, getBoilTime());
  };

}

var coffeeMachine = new CoffeeMachine(100000);
coffeeMachine.waterAmount = 200;
coffeeMachine.run();
```
self now needs correct getters and setters to work correctly ;)


### Functional OOP

```js
function Machine() {
  var enabled = false;

  this.enable = function() {
    enabled = true;
  };

  this.disable = function() {
    enabled = false;
  };
}
```

```js
function CoffeeMachine(power) {
  Machine.call(this); // отнаследовать

  var waterAmount = 0;

  this.setWaterAmount = function(amount) {
    waterAmount = amount;
  };

}

var coffeeMachine = new CoffeeMachine(10000);

coffeeMachine.enable();
coffeeMachine.setWaterAmount(100);
coffeeMachine.disable();
```


```js
showFullName.call(user, 'firstName', 'surname'); // arguments listed
showFullName.apply(user, ['firstName', 'surname']); // arguments as array
```

access to parents properties
```js
function Machine() {
  var enabled = false;

  this.enable = function() {
    enabled = true;
  };

  this.disable = function() {
    enabled = false;
  };
}

function CoffeeMachine(power) {
  Machine.call(this);

  this.enable();

  alert( enabled ); // ERROR!
}

var coffeeMachine = new CoffeeMachine(10000);
```


```js
function Machine() {
  this._enabled = false; // -> var enabled

  this.enable = function() {
    this._enabled = true;
  };

  this.disable = function() {
    this._enabled = false;
  };
}

function CoffeeMachine(power) {
  Machine.call(this);

  this.enable();

  alert( this._enabled ); // -> true
}

var coffeeMachine = new CoffeeMachine(10000);
```

if we want to extend some inherited property

```js
function CoffeeMachine(params) {
  Machine.apply(this, arguments);

  var parentProtected = this._protectedProperty;
  this._protectedProperty = function(args) {
    parentProtected.apply(this, args); // (*)
    // ...
  };
}
```

### Prototype OOP

###### Property proto
*except IE10 -* 
```js
var animal = {
  eats: true
};
var rabbit = {
  jumps: true
};

rabbit.__proto__ = animal;

alert( rabbit.jumps ); // true
alert( rabbit.eats ); // true
```

###### Method hasOwnProperty
```js
var animal = {
  eats: true
};

var rabbit = {
  jumps: true,
  __proto__: animal
};

for (var key in rabbit) {
  alert( key + " = " + rabbit[key] ); // `eats` and `jumps`
}
```
with `hasOwnProperty` check
```js
alert( rabbit.hasOwnProperty('jumps') ); // true
alert( rabbit.hasOwnProperty('eats') ); // false
```
check only own object 
```js
var animal = {
  eats: true
};

var rabbit = {
  jumps: true,
  __proto__: animal
};

for (var key in rabbit) {
  if (!rabbit.hasOwnProperty(key)) continue; // пропустить "не свои" свойства
  alert( key + " = " + rabbit[key] ); // выводит только "jumps"
}
```

###### `.prototype` method
```js
var animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
  this.__proto__ = animal;
}

var rabbit = new Rabbit("Кроль");

alert( rabbit.eats ); //true from prototype
```

crossbrowser solution
```js
var animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

var rabbit = new Rabbit("Кроль"); //  rabbit.__proto__ == animal

alert( rabbit.eats ); // true
```

###### `instanceof`
```js
function Rabbit() {}

var rabbit = new Rabbit();

alert( rabbit instanceof Rabbit ); // true
```

###### Inheritance
```js
function Animal(name) {
  this.name = name;
  this.speed = 0;
}

Animal.prototype.stop = function() {
  this.speed = 0;
  alert( this.name + ' stay' );
}

Animal.prototype.run = function(speed) {
  this.speed += speed;
  alert( this.name + ' runs, speed ' + this.speed );
};

function Rabbit(name) {
  this.name = name;
  this.speed = 0;
}

Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

Rabbit.prototype.jump = function() {
  this.speed++;
  alert( this.name + ' jumps, speed ' + this.speed );
}
```

## ES6 Classes

Animal class
```js
class Animal {
  static isAnimal = true;
  constructor(isRunning = false, isEating = false, isSleeping = false) {
    this.isRunning = isRunning;
    this.isEating = isEating;
    this.isSleeping = isSleeping;
  }

  run(bool) {
    this.isRunning = bool;
  }

  eat(bool) {
    this.isEating = bool;
  }

  sleep(bool) {
    this.isSleeping = bool;
  }

  state() {
    console.log(`Animal is:
    - ${this.isRunning ? '' : 'not '}running
    - ${this.isEating ? '' : 'not '}eating
    - ${this.isSleeping ? '' : 'not '}sleeping
    `);
  }

  static identify() {
    console.log(`Animal: ${this.isAnimal}`);
  }
  // private fields
  // #eat = false;

  // constructor(){}

  // getEat = () => {
  //   return this.#eat;
  // }

  // setEat = (bool) => {
  //   this.#eat = bool;
  // }
}

// const animal = new Animal(true);
// animal.state();
// Animal.identify();

// private fields
// console.log(animal.getEat());
// animal.setEat(true);
// console.log(animal.getEat());
// console.log(animal.#eat);

module.exports = { Animal };
```

Dawg class
```js
const { Animal } = require('./lecture2-OOP-Animal');

// inheritance
// polymorphism
class Dawg extends Animal {
  static isDawg = true;
  constructor(isBarking = false) {
    super();
    this.isBarking = isBarking;
  }

  // polymorphism
  state() {
    // super.state();
    console.log(`Dawg is:
    - ${this.isRunning ? '' : 'not '}running
    - ${this.isEating ? '' : 'not '}eating
    - ${this.isSleeping ? '' : 'not '}sleeping
    - ${this.isBarking ? '' : 'not '}barking
    `);
  }

  static identify() {
    super.identify();
    console.log(`Dawg: ${this.isDawg}`);
  }
}

// --- step 1 --- see that there is no barking, bruh ;(
const dawg = new Dawg(false);
dawg.state();
Dawg.identify();

```

Abstract class
```js
class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new TypeError('Cannot construct Abstract instances directly');
    }
  }
}

// const a = new Abstract(); // new.target is Abstract, so it throws
// const b = new Derived(); // new.target is Derived, so no error
module.exports = { Abstract };

```