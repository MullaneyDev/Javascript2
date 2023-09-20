import chalk from "chalk";
import inquirer from "inquirer";

class CoffeeShop {
  constructor(location) {
    this.location = location;
    this.name = "CostBucks";
    this.receiptHead =
      "***************************\n*                         *\n*         Receipt         *\n*                         *\n***************************\n";
    this.menu = {
      "Americano": {
        price: 2.5,
        listDisplay: "Americano             £2.50\n",
      },
      "Cappucino": {
        price: 3,
        listDisplay: "Cappucino             £3.00\n",
      },
      "Latte": {
        price: 3,
        listDisplay: "Latte                 £3.00\n",
      },
      "Flat white": {
        price: 2.75,
        listDisplay: "Flat white            £2.75\n",
      },
      Mocha: {
        price: 3.25,
        listDisplay: "Mocha                 £3.25\n",
      },
      "Toast with jam": {
        price: 1.5,
        listDisplay: "Toast with jam        £1.50\n",
      },
      "Croissant": {
        price: 2,
        listDisplay: "Croissant             £2.00\n",
      },
      "Pancakes with syrup": {
        price: 3.5,
        listDisplay: "Pancakes with syrup   £3.50\n",
      },
    };
  }
}



const Oxton = new CoffeeShop("Oxton");


let menuChoices = Object.keys(Oxton.menu)
menuChoices.push("-- Go To Checkout --")
// console.log (menuChoices)


class Customer extends CoffeeShop {
  constructor(customerName, money) {
    super(Oxton);
    this.customerName = customerName;
    this.money = money;
    this.order = []
    this.total = 0
  }

  orderItems(orderItems) {
    let totalCost = 0;
    let orderString = "";
    orderItems.forEach((orderItems) => {
      let price = this.menu[orderItems].price;
      totalCost += price;
      orderString += this.menu[orderItems].listDisplay;
    });
    if (totalCost > this.money) {
      console.log(
        chalk.red(`Sorry ${this.customerName}, you do not have enough money`)
      );
      return;
    }
    console.log(
      chalk.bgWhiteBright(
        `${this.receiptHead}\nWelcome to CostBucks ${
          Oxton.location
        }.\n\nYour order is :\n${orderString}\nTotal cost =         £${totalCost.toFixed(
          2
        )}\n\n   Please visit us again!`
      )
    );
    this.money -= totalCost;
    console.log(
      chalk.green(
        `\n${this.customerName}, you have £${this.money.toFixed(
          2
        )} left to spend`
      )
    );
  }

  calculateTotal() {
      console.log("");
      console.log(
        `Thanks ${nameResponse.getName}, your order is:`
      );
      console.log("");
    for (let orderedItem of this.order) {
      console.log(`${orderedItem}.....£${this.menu[orderedItem].price.toFixed(2)}`)
      this.total += this.menu[orderedItem].price
    }
    console.log("")
    console.log(`Your total comes to £${this.total.toFixed(2)}`)

      if (this.total > this.money) {
        console.log(chalk.red(`Sorry ${nameResponse.getName} you don't appear to have enough money`))
  } else {
    let change = (this.money - this.total)
    console.log("")
    console.log(`Your change is £${change.toFixed(2)}`)
    console.log(chalk.green(`Thanks for your order ${nameResponse.getName}, please come again!`))
  }
  }
  set updateOrder (newItem) {
    this.order.push(newItem)
  }


}

const Matt = new Customer("Matt", 5);
const Albie = new Customer("Albie", 15);

Matt.orderItems(["Americano", "Cappucino", "Latte"]);
console.log("");

Albie.orderItems(["Americano", "Cappucino", "Latte"]);
console.log("")

console.log (chalk.bgCyan("Addition of inquirer"))
console.log("")
const questions = [
  {
    name: "getName",
    message: "Hi, Can I take your name?",
    type: "input",
  },
  {
    name: "getBudget",
    message: "What is your budget?",
    type: "number"
  }
];

const nameResponse = await inquirer.prompt(questions);

const newCustomer = new Customer(nameResponse.getName, nameResponse.getBudget)

const askForOrder = async () => {


  const takeOrder = await inquirer.prompt([
    {
    name: "getOrder",
    message: "What would you like to order?",
    type: "list",
    choices: menuChoices
    }
  ])
  if (takeOrder.getOrder === "-- Go To Checkout --") {
    newCustomer.calculateTotal()
    return
  } else {
    newCustomer.updateOrder = takeOrder.getOrder
  }
  askForOrder()
}


askForOrder()