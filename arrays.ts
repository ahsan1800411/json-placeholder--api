const dates = [new Date(), new Date()];

const cars: string[] = ['Corolla', 'Waganor'];

const car = cars[0];

const myCar = cars.pop();

// cars.push(100)

const result = cars.map((car: string): string => {
  return car.toUpperCase();
});

const arrays: (string | Date)[] = [new Date()];

arrays.push('Ahsan');
