class CoffeeShop {
  constructor(location) {
    this.location = location;
    this.name = "CostBucks";
    this.receiptHead =
      "***************************\n*                         *\n*         Receipt         *\n*                         *\n***************************\n";
    this.menu = {
      Americano: {
        price: 2.5,
        listDisplay: "Americano             £2.50\n",
      },
      Cappucino: {
        price: 3,
        listDisplay: "Cappucino             £3.00\n",
      },
      Latte: {
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
      Croissant: {
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

class Customer extends CoffeeShop {
  constructor(customerName, money) {
    super(Oxton);
    this.customerName = customerName;
    this.money = money;
  }

  order(order) {
    let total = 0;
    let orderString = "";
    order.forEach((order) => {
      let price = this.menu[order].price;
      total += price;
      orderString += this.menu[order].listDisplay;
    });
    if (total > this.money) {
      console.log(`Sorry ${this.customerName}, you do not have enough money`);
      return;
    }
    console.log(
      `${Oxton.receiptHead}\nWelcome to CostBucks ${
        Oxton.location
      }.\n\nYour order is :\n${orderString}\nTotal cost =         £${total.toFixed(
        2
      )}\n\n   Please visit us again!`
    );
    this.money -= total;
    console.log(`\nYou have £${this.money.toFixed(2)} left to spend`);
  }
}

const Matt = new Customer("Matt", 5);
const Albie = new Customer("Albie", 15);

Matt.order(["Americano", "Cappucino", "Latte"]);
console.log("");
Albie.order(["Americano", "Cappucino", "Latte"]);
