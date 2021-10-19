interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `${this.name}`;
  },
};

const drink = {
  color: 'red',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `${this.sugar}`;
  },
};

const printSummary = ({ summary }: Reportable): void => {
  console.log(summary());
};

printSummary(oldCivic);
printSummary(drink);
