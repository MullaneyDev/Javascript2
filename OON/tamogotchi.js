import chalk from "chalk";
import inquirer from "inquirer";

class Owner {
  constructor(ownerName) {
    this.ownerName = ownerName;
  }
}

class Tamogotchi extends Owner {
  constructor(name) {
    super(newOwner.ownerName);
    // this.ownerName = newOwner.ownerName
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

class Dinosaur extends Tamogotchi {
  constructor(name) {
    super();
    this.name = name;

    this.happy = "roaring in delight";
  }

  playFetch() {
    this.health += 10;
    this.hunger -= 10;
    console.log(`${this.name} is happy`);
  }
  walks() {
    console.log(`Taking ${this.name} for a walk, they ${this.happy}`);
    this.health += 10;
    return this;
  }
}

class Octopus extends Tamogotchi {
  constructor(name) {
    super();
    this.name = name;
    this.happy = "flails their tentacles in excitement";
  }

  playHideAndSeek() {
    this.health += 10;
    this.hunger -= 10;
    console.log(`${this.name} is happy`);
  }
  swims() {
    console.log(`Taking ${this.name} for a swim, they ${this.happy}`);
    this.health += 10;
    return this;
  }
}

class Unicorn extends Tamogotchi {
  constructor(name) {
    super(name);
    this.name = name;
    this.happy = "horn glows in delight";
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
const petChoices = ["Dinosaur", "Octopus", "Unicorn"];

const questions = [
  {
    name: "getName",
    type: "input",
    message: "Hi, Whats your name?",
  },
];

const ownerQuestions = await inquirer.prompt(questions);
const newOwner = new Owner(ownerQuestions.getName);

const pet = async () => {
  const askPet = await inquirer.prompt([
    {
      name: "petType",
      type: "list",
      message: "What type of pet would you like?",
      choices: petChoices,
    },
    {
      name: "petName",
      type: "input",
      message: "what would you like to call your new pet?",
    },
  ]);
  if (askPet.petType == "Dinosaur") {
    const newPet = new Dinosaur(askPet.petName);
     console.log("");
    console.log(
      `You are ${ownerQuestions.getName} and you would like a ${askPet.petType} called ${askPet.petName}`
    );
    console.log("");
    return;
  } else if (askPet.petType == "Octopus") {
    const newPet = new Octopus(askPet.petName);
     console.log("");
    console.log(
      `You are ${ownerQuestions.getName} and you would like a ${askPet.petType} called ${askPet.petName}`
    );
    console.log("");
    return;
  } else if (askPet.petType == "Unicorn") {
    const newPet = new Unicorn(askPet.petName);
     console.log("");
    console.log(
      `You are ${ownerQuestions.getName} and you would like a ${askPet.petType} called ${askPet.petName}`
    );
    console.log("");
    return;
  }
  pet();
};
const standardOptions = ["Give food", "Give drink", "See Stats", "Exit"];
pet();

const actions = async () => {
  const askActions = await inquirer.prompt([
    {
      name: "getAction",
      type: "list",
      message: "What would you like to do?",
      choices: standardOptions,
    },
  ]);
  if (askActions.getAction == "Give food") {
    newPet.eats();
  } else if (askActions.getAction == "Give drink") {
    newPet.drinks();
  } else if (askActions.getAction == "See Stats") {
    newPet.stats();
  } else if (askActions.getAction == "Exit") {
    console.log("Thanks for playing");
    return;
  }
  actions();
};

// actions();
