class Person {
  constructor(firstName, lastName, age, job) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.job = job;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(name) {
    const names = name.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
  }

  talks() {
    console.log(
      `Hi, my name is ${this.firstName}, I am ${this.age} and my job is ${this.job}`
    );
    return this; //allows to chain functions
  }

  work() {
    console.log(`I am going to work as a ${this.job}`);
    return this;
  }
}

const Matt = new Person("Matt", "Mullaney", 33, "Programmer");

Matt.talks().work();

const Ashlea = new Person("Ashlea", "Howarth", 25, "Teaching assistant");

Ashlea.work().talks();

let person = new Person("Dave", "Jones", 35, "Cook"); // creates a new person
person.firstName = "Will Smith"; // resets the name and sets them as first name and last name
console.log(person.fullName); // gets the full name

// Class inheritance

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hunger = 100;
  }
  drinks() {
    this.health += 5;
    return this;
  }
  eats() {
    this.health += 5;
    this.hunger += 10;
    console.log(`${this.name}'s health is ${this.health}`);
    return this;
  }
  stats() {
    return console.table({
      Name: this.name,
      Health: this.health,
      Hunger: this.hunger,
    });
  }
}

class Dog extends Animal {
  constructor(name, happy) {
    super(name);
    this.happy = happy;
  }

  playBall() {
    this.health += 10;
    this.hunger -= 10;
    console.log(`${this.name} is happy`);
  }
  walks() {
    console.log(`Taking ${this.name} for a walk, they are ${this.happy}`);
    this.health += 10;
    return this;
  }
}

const pip = new Dog("Pippin", "wagging tail");
pip.stats();

class Cat extends Animal {
  constructor(name, content) {
    super(name);
    this.content = content;
  }

  playWool() {
    this.health += 10;
    this.hunger -= 10;
    console.log(`${this.name} is happy`);
  }

  naps() {
    console.log(
      `${this.name} is taking a lovely nap, they are ${this.content}`
    );
    this.health += 10;
    return this;
  }
}

const smudge = new Cat("Smudge", "purring");
smudge.stats(); //prints stats for the new cat smudge
smudge.playWool(); // executes the playWool function
smudge.stats(); // prints stats for smudge with updated values from the playWool function
smudge.eats(); // executes the eats function
smudge.stats(); // prints stats with updated values