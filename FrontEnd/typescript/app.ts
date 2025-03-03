let message: string = "Hello, TypeScript!";
console.log(message);

// Define variables of different types
let numVar: number = 42;
let strVar: string = "Hello, TypeScript!";
let boolVar: boolean = true;
let nullVar: null = null;
let undefinedVar: undefined = undefined;
let anyVar: any = "Can be anything";

// Define an array
let numArray: number[] = [1, 2, 3, 4, 5];
let strArray: string[] = ["apple", "banana", "cherry"];

// Print values to the console
console.log("Number:", numVar);
console.log("String:", strVar);
console.log("Boolean:", boolVar);
console.log("Null:", nullVar);
console.log("Undefined:", undefinedVar);
console.log("Any:", anyVar);
console.log("Number Array:", numArray);
console.log("String Array:", strArray);


//------------------------------------------------------------------------------------

// Q3: Define an interface Person and implement it in Employee class
interface Person {
    name: string;
    age: number;
  }
  
  class Employee implements Person {
    name: string;
    age: number;
    employeeId: number;
  
    constructor(name: string, age: number, employeeId: number) {
      this.name = name;
      this.age = age;
      this.employeeId = employeeId;
    }
  
    getEmployeeDetails(): string {
      return `Employee ID: ${this.employeeId}, Name: ${this.name}, Age: ${this.age}`;
    }
  }
  
  // Q4: Define an interface Vehicle and implement it in Car class
  interface Vehicle {
    startEngine(): void;
  }
  
  class Car implements Vehicle {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    startEngine(): void {
      console.log(`The engine of ${this.year} ${this.make} ${this.model} has started.`);
    }
  }
  
  // Example Usage
  const emp = new Employee("Pankaj", 25, 101);
  console.log(emp.getEmployeeDetails());
  
  const myCar = new Car("Toyota", "Corolla", 2022);
  myCar.startEngine();

  
  //--------------------------------------------------------------------------

  // Q5: Generic function identity<T>
function identity<T>(value: T): T {
    return value;
  }
  
  // Calling identity function with different types
  console.log(identity<string>("Hello")); // Output: Hello
  console.log(identity<number>(42));      // Output: 42
  console.log(identity<boolean>(true));   // Output: true
  
  // Q6: Enum Color and getColorName function
  enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
  }
  
  function getColorName(color: Color): string {
    return color;
  }
  
  console.log(getColorName(Color.Red));   // Output: Red
  console.log(getColorName(Color.Green)); // Output: Green
  console.log(getColorName(Color.Blue));  // Output: Blue
  
  // Q7: Function printDetails with union type
  function printDetails(value: string | number): void {
    console.log(`Type: ${typeof value}, Value: ${value}`);
  }
  
  printDetails("Pankaj"); // Output: Type: string, Value: Pankaj
  printDetails(100);      // Output: Type: number, Value: 100

  

  //----------------------------------------------------------------------------------------
  // Q8: Normal function multiplyNumbers
function multiplyNumbers(a: number, b: number): number {
    return a * b;
  }
  
  // Converted to arrow function
  const multiplyNumbersArrow = (a: number, b: number): number => a * b;
  
  console.log(multiplyNumbers(4, 5));         // Output: 20
  console.log(multiplyNumbersArrow(4, 5));    // Output: 20
  
  // Q9: Arrow function sum that takes an array of numbers
  const sum = (numbers: number[]): number => numbers.reduce((acc, num) => acc + num, 0);
  
  console.log(sum([1, 2, 3, 4, 5]));  // Output: 15
  console.log(sum([10, 20, 30]));     // Output: 60
  

