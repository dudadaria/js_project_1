"use strict";

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  percentDiscount(percent) {
    const discount = this.price * (1 - percent / 100);
    console.log('Цена со скидкой ' + discount);
  }
}

class Product1 extends Product {
  constructor(name, price) {
    super(name, price)
  }

  make25PercentDiscount() {
    super.percentDiscount(25);
  }
  make50PercentDiscount() {
    super.percentDiscount(50);
  }
}

const obk = new Product1('яблоко', 100)
obk.make25PercentDiscount()
obk.make50PercentDiscount()
console.log(obk)
