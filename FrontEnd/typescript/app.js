var message = "Hello, TypeScript!";
console.log(message);
// Define variables of different types
var numVar = 42;
var strVar = "Hello, TypeScript!";
var boolVar = true;
var nullVar = null;
var undefinedVar = undefined;
var anyVar = "Can be anything";
// Define an array
var numArray = [1, 2, 3, 4, 5];
var strArray = ["apple", "banana", "cherry"];
// Print values to the console
console.log("Number:", numVar);
console.log("String:", strVar);
console.log("Boolean:", boolVar);
console.log("Null:", nullVar);
console.log("Undefined:", undefinedVar);
console.log("Any:", anyVar);
console.log("Number Array:", numArray);
console.log("String Array:", strArray);
var Employee = /** @class */ (function () {
    function Employee(name, age, employeeId) {
        this.name = name;
        this.age = age;
        this.employeeId = employeeId;
    }
    Employee.prototype.getEmployeeDetails = function () {
        return "Employee ID: ".concat(this.employeeId, ", Name: ").concat(this.name, ", Age: ").concat(this.age);
    };
    return Employee;
}());
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.startEngine = function () {
        console.log("The engine of ".concat(this.year, " ").concat(this.make, " ").concat(this.model, " has started."));
    };
    return Car;
}());
// Example Usage
var emp = new Employee("Pankaj", 25, 101);
console.log(emp.getEmployeeDetails());
var myCar = new Car("Toyota", "Corolla", 2022);
myCar.startEngine();
//--------------------------------------------------------------------------
// Q5: Generic function identity<T>
function identity(value) {
    return value;
}
// Calling identity function with different types
console.log(identity("Hello")); // Output: Hello
console.log(identity(42)); // Output: 42
console.log(identity(true)); // Output: true
// Q6: Enum Color and getColorName function
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["Blue"] = "Blue";
})(Color || (Color = {}));
function getColorName(color) {
    return color;
}
console.log(getColorName(Color.Red)); // Output: Red
console.log(getColorName(Color.Green)); // Output: Green
console.log(getColorName(Color.Blue)); // Output: Blue
// Q7: Function printDetails with union type
function printDetails(value) {
    console.log("Type: ".concat(typeof value, ", Value: ").concat(value));
}
printDetails("Pankaj"); // Output: Type: string, Value: Pankaj
printDetails(100); // Output: Type: number, Value: 100
//----------------------------------------------------------------------------------------
// Q8: Normal function multiplyNumbers
function multiplyNumbers(a, b) {
    return a * b;
}
// Converted to arrow function
var multiplyNumbersArrow = function (a, b) { return a * b; };
console.log(multiplyNumbers(4, 5)); // Output: 20
console.log(multiplyNumbersArrow(4, 5)); // Output: 20
// Q9: Arrow function sum that takes an array of numbers
var sum = function (numbers) { return numbers.reduce(function (acc, num) { return acc + num; }, 0); };
console.log(sum([1, 2, 3, 4, 5])); // Output: 15
console.log(sum([10, 20, 30])); // Output: 60
