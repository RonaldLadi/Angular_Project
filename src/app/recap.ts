const username: string = 'ronaldbytes' ;
const sum = (a: number,b: number) =>{
  return a + b;
}
sum(1,2);

class person {
  age: number;
  lastName: string;

  constructor(age: number, lastName: string) {
    this.age = age;
    this.lastName = lastName;
  }
}

const ronald = new person(21, 'Ladino');
ronald.age;
