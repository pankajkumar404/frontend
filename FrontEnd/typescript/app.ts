// Q1: Define variables of different types and print them
let num: number = 25;
let str: string = "Hello, TypeScript!";
let bool: boolean = true;
let nullVar: null = null;
let undefinedVar: undefined = undefined;
let anyVar: any = "Can be anything";

console.log("Number:", num);
console.log("String:", str);
console.log("Boolean:", bool);
console.log("Null:", nullVar);
console.log("Undefined:", undefinedVar);
console.log("Any:", anyVar);

// Q2: Function to return user info
function getUserInfo(age: number, isActive: boolean): string {
    return `User is ${age} years old and is ${isActive ? "active" : "inactive"}.`;
}

// Example usage
let age: number = 30;
let isActive: boolean = false;
console.log(getUserInfo(age, isActive));


//------------------------------------------------------------------------------

// Q3: Define an interface and implement it in a class
interface Person {
    name: string;
    age: number;
}

class Employee implements Person {
    name: string;
    age: number;
    employeeId: string;

    constructor(name: string, age: number, employeeId: string) {
        this.name = name;
        this.age = age;
        this.employeeId = employeeId;
    }

    getEmployeeDetails(): string {
        return `Employee Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
    }
}

// Example usage
const emp = new Employee("John Doe", 28, "EMP12345");
console.log(emp.getEmployeeDetails());

// Q4: Define an interface and implement it in a class
interface Vehicle {
    startEngine(): string;
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

    startEngine(): string {
        return `The engine of ${this.make} ${this.model} (${this.year}) is started!`;
    }
}

// Example usage
const myCar = new Car("Toyota", "Camry", 2022);
console.log(myCar.startEngine());


//----------------------------------------------------------------------------------

// Q5: Generic function that returns the input value
function identity<T>(value: T): T {
    return value;
}

// Example usage with different types
console.log(identity<string>("Hello"));
console.log(identity<number>(42));
console.log(identity<boolean>(true));

// Q6: Enum definition and function to return enum name
enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
}

function getColorName(color: Color): string {
    return `Color selected: ${color}`;
}

// Example usage
console.log(getColorName(Color.Red));
console.log(getColorName(Color.Green));
console.log(getColorName(Color.Blue));

// Q7: Function to handle union type
function printDetails(value: string | number): void {
    console.log(`Type: ${typeof value}, Value: ${value}`);
}

// Example usage
printDetails("Hello TypeScript");
printDetails(100);

//-----------------------------------------------------------------------------------


// Q8: Normal function to multiply two numbers
function multiplyNumbers(a: number, b: number): number {
    return a * b;
}

// Arrow function equivalent
const multiplyNumbersArrow = (a: number, b: number): number => a * b;

// Example usage
console.log(multiplyNumbers(4, 5));
console.log(multiplyNumbersArrow(4, 5));

// Q9: Arrow function to sum an array of numbers
const sum = (numbers: number[]): number => numbers.reduce((acc, num) => acc + num, 0);

// Example usage
console.log(sum([1, 2, 3, 4, 5]));
console.log(sum([10, 20, 30]));
