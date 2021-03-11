# Lecture 6

### Arrays

```js
var fruits = ["Banana", "Apple", "Orange"];
// or
var fruits = new Array("Banana", "Apple", "Orange");
```

**Arrays to strings methods:**

- `fruits.toString()` - join all arrays items with comma spliter
- `fruits.join('|')` - join all array items with custom spliter

**Adding and removing methods:**

- `fruits.pop()` - remove last item from an array
- `fruits.shift()` - remove first item from an array
- `fruits.push('Mango')` - adds a new item to an arrays end
- `fruits.unshift('Lemon')` - adds a new item to ad arrays start

**Working with array items:**

- `fruits[0]` - by index
- `fruits.length` - get count of array items
- `delete fruits[0]` - replace array item with `undefined`
- `fruits.splice(<where_add>, <how_many_remove>, <**items>)` / `fruits.splice(1, 2, 'Kiwi', 'Lemon')` - used for add or remove items from array

**Operating arrays:**

- `fruits.slice(2, 3)` - create a new array with items starting from custom index and finish on the other custom index
- `fruits.concat(['Kiwi', 'Lemon'])` - merge array with another array2

**Sorting arrays:**

- `fruits.sort()` - sorting array of items
- `fruits.sort(<compare_function>)` - e.g. `function(a, b){return a - b}` for ASC sorting or `function(a, b){return b - a}` for DESC
- `fruits.reverse()` - reverse sorting array of items

**Arrays iteration methods:**

- `fruits.forEach(<callback_function>)` - runs callback function once for each array item, which accept item value, item index and the full array
- `fruits.map(<map_function>)` - creates a new array by running function(value, index, array) on each array element
- `fruits.filter(<filter_function>)` - create a new array with items that passes condition of filter function(value, index, array)
- `fruits.reduce(<reduce_function>)` - runs a function(value from previous run, value, index, array) on each array item to produce a single value
- `fruits.reduceRight()` - the same as `reduce` but works from right to left.
- `fruits.every()` - method to check if all array items pass the conditional function(value, index, array)
- `fruits.some()` - method to check if any array item pass the conditional function(value, index, array)
- `fruits.indexOf()` - method find item in array and return his index
- `fruits.lastIndexOf()` - the same as `indexOf` but from right to left
- `fruits.find(<conditional_function>)` - return the first array item that passes conditional function
- `fruits.findIndex(<conditional_function>)` - return the first array item index that passes conditional function

### Functions

Functions are objects that:

- Can be created dynamically at runtime
- Can be assigned to variables
- Can be passes as arguments and be returned by other functions
- Can have their own properties and methods

###### Syntax

```js
function sayHello() {
  console.log("Hello world!");
}

sayHello();
```

```js
// never declare a function like this
var add = new Function("a, b", "return a + b");

add(2, 3);
```

###### Variables

You can declare as many **local** variables as you want in your function body. They will be accessible only inside function scope.

```js
function sayHello() {
  var name = "John";
  console.log("Hello, " + name);
}

sayHello();

console.log(name);
```

You can also read & write global variables which declared outside of function body.

```js
var name = "John";

function sayHello() {
  console.log("Hello, " + name);
  name = "Vasya";
}

sayHello();
console.log(name);
```

###### Arguments

You can define which arguments you function will accept. This arguments will be copiend into function scope local variables. Also you can use arguments with the default values.

```js
function sayHello(name = "John") {
  console.log("Hello, " + name);
}

sayHello();
sayHello("Vasya");
```

###### Hoisting

**Hoisting** - mechanism where variables and functions declarations are moved to the top of their scrope before exectuion.

![Lifecycle](./lifecycle.jpg ":size=300x500")

```js
function hoist() {
  a = 20;
  var b = 100;
}

hoist();

console.log(a);
console.log(b);
```

###### Function expression

```js
var f = function () {
  // body
};
```

###### Function expression vs Function declaration

|                             | Function expression              | Function declaration |
| --------------------------- | -------------------------------- | -------------------- |
| Creation time               | When runtime reach this function | Before runtime       |
| Callable before declaration | No                               | Yes                  |

###### Anonymous functions

**Anonymous function** - function expression which is not stored in variable.

```js
function() {
  // body
}
```

###### Callback pattern

Function are objects, so we can passed them as arguments to other functions.

```js
function sayHello(callback) {
  console.log("Hello!");
  callback();
}

function reply() {
  console.log("Hey!");
}

sayHello(reply);
```

### Objects

###### Declaration

```js
let obj = new Object();
let obj2 = {};
```

###### Access object property

```js
let obj = {
  firstName: "John",
  lastName: "Smith",
};

console.log(obj.firstName);
console.log(obj["firstName"]);
```

###### Check if object has a property

```js
let obj = {
  firstName: "John",
  lastName: "Smith",
};

// using 'in'
if ("firstName" in obj) {
  console.log("With first name");
} else {
  console.log("Without first name");
}

// equal to undefined
if (obj.firstName !== undefined) {
  console.log("With first name");
} else {
  console.log("Without first name");
}
```

###### Loop through object properties

```js
for (let key in obj) {
  let value = obj[key];
  console.log(key, value);
}
```

###### Loop ordering

```js
let obj = {
  3: "Third",
  2: "Second",
  1: "First",
};

for (let key in obj) {
  console.log(key, obj[key]);
}
```

###### Objects in memory

Browser engine will create a `structure` for each objects type and store only values.

```js
let people = [
  {
    firstName: "John",
    lastName: "Smith",
    age: 23,
  },
  {
    firstName: "Vasya",
    lastName: "Pupkin",
    age: 25,
  },
  {
    firstName: "Ivan",
    lastName: "Ivanov",
    age: 27,
  },
];

/* Will produce the next structure in memory
 * <structure: <string> firstName, <string> lastName, <number> age>
 */
```

Storing the same object in different variables will fill only one memory cell.

```js
// variables flow
let a = "Just a regular string"; // will be saved to a memory cell "A"
let b = a; // will be saved to a memory cell "B"

// objects flow
let obj = {
  firstName: "John",
  lastName: "Smith",
}; // will be saved to a memory cell "A"

let obj2 = obj; // will use memory cell "A"
```

> If name not numeric string, than you can loop properties as you define them. If name is a number or numeric string then this properties will be sorted.

If you still need to store the same object, you need to create a copy of it. You can use the next ways to do that:

- `Object.assign()`
- spread operator
- `JSON.parse()` and `JSON.stringify()`
- `for ... in ...`

###### Transfrom objects

- `toString`
- `valueOf`

String transformation with `toString`:

```js
let obj = {
  firstName: "John",
  lastName: "Smith",
};

alert(obj); // [object Object]

let obj2 = {
  firstName: "John",
  lastName: "Smith",
  toString: function () {
    return this.firstName + " " + this.lastName;
  },
};

alert(obj2); // John Smith
```

Numeric transformation with `valueOf`:

```js
let obj = {
  number: 12,
  valueOf: function () {
    return this.number + 1;
  },
  toString: function () {
    return this.number;
  },
};

alert(+obj);
delete obj.valueOf;
alert(+obj);
```

###### Property descriptors

```js
Object.defineProperty(obj, property, descriptor);
```

**Descriptor** - object, which can configure property behavior.

- **value**, property value. (`undefined`)
- **writable**, define if property can be changed. (`false`)
- **configurable**, define, if property can be removed. (`false`)
- **enumerable**, define if property can be used in `for ... in ...` and in `Object.keys()` (`false`)
- **get**, return property value. (`undefined`)
- **set**, set property value. (`undefined`)

Conflicts:

- get/set & writable
- get/set & value

###### Getters & Setters

```js
let obj = {
  firstName: "John",
  lastName: "Smith",
};

Object.defineProperty(obj, "fullName", {
  get: function () {
    return this.firstName + " " + this.lastName;
  },
  set: function (val) {
    let splittedVal = val.split();
    this.firstName = splittedVal[0];
    this.lastName = splittedVal[1];
  },
});

console.log(obj.fullName);
obj.fullName = "Vasya Pupkin";
console.log(obj.fullName);
```

###### Object creation via constructor

```js
function Man(fullName) {
  let splittedFullName = fullName.split();
  this.firstName = splittedFullName[0];
  this.lastName = splittedFullName[1];

  this.sayHello = function () {
    console.log("Hello. I'm ", this.firstName);
  };
}

let man = new Man("John Smith");
let man2 = new Man("Vasya Pupkin");
console.log(man);
console.log(man2);
man.sayHello();
```
