class Vehicle {
  constructor(public color: string) {}
  protected drive(): void {
    console.log('Driving');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  drive(): void {
    console.log('Vroom');
  }
}

const car = new Car(5, 'Orange');

car.drive();
