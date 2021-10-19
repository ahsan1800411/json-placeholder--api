const profile = {
  name: 'Ahsan',
  age: 21,
  program: {
    shift: 'evening',
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;

const {
  program: { shift },
}: { program: { shift: string } } = profile;
