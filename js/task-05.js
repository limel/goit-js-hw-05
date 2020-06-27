class Car {
  static getSpecs(car) {
    return console.log(
      `max speed: ${car.maxSpeed}, speed: ${car.speed}, turn on: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`,
    );
  }

  constructor({ maxSpeed = 0, price = 0 }) {
    this.maxSpeed = maxSpeed;
    this.$price = price;
    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
  }

  get price() {
    return this.$price;
  }

  set price(newPrice) {
    this.$price = newPrice;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed += value;
    }
  }

  decelerate(value) {
    if (this.speed - value >= 0) {
      this.speed -= value;
    }
  }

  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
