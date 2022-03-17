// const username: string | number = 'angelfg';
const username: string = 'angelfg';

const sum = (a: number, b: number) => {
  return a + b;
}

sum(1, 2);

class Person {
  // private age: number;
  // private lastName: string;

  // constructor(age: number, lastName: string) {
  //   this.age = age;
  //   this.lastName = lastName;
  // }

  constructor(private age: number, public lastName: string) {

  }


}

const angel = new Person(20, 'Flores');


