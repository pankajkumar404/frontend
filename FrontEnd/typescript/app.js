// Q1: Define variables of different types and print them
var num = 25;
var str = "Hello, TypeScript!";
var bool = true;
var nullVar = null;
var undefinedVar = undefined;
var anyVar = "Can be anything";
console.log("Number:", num);
console.log("String:", str);
console.log("Boolean:", bool);
console.log("Null:", nullVar);
console.log("Undefined:", undefinedVar);
console.log("Any:", anyVar);
// Q2: Function to return user info
function getUserInfo(age, isActive) {
    return "User is ".concat(age, " years old and is ").concat(isActive ? "active" : "inactive", ".");
}
// Example usage
var age = 30;
var isActive = false;
console.log(getUserInfo(age, isActive));
var Employee = /** @class */ (function () {
    function Employee(name, age, employeeId) {
        this.name = name;
        this.age = age;
        this.employeeId = employeeId;
    }
    Employee.prototype.getEmployeeDetails = function () {
        return "Employee Name: ".concat(this.name, ", Age: ").concat(this.age, ", Employee ID: ").concat(this.employeeId);
    };
    return Employee;
}());
// Example usage
var emp = new Employee("John Doe", 28, "EMP12345");
console.log(emp.getEmployeeDetails());
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.startEngine = function () {
        return "The engine of ".concat(this.make, " ").concat(this.model, " (").concat(this.year, ") is started!");
    };
    return Car;
}());
// Example usage
var myCar = new Car("Toyota", "Camry", 2022);
console.log(myCar.startEngine());
//----------------------------------------------------------------------------------
// Q5: Generic function that returns the input value
function identity(value) {
    return value;
}
// Example usage with different types
console.log(identity("Hello"));
console.log(identity(42));
console.log(identity(true));
// Q6: Enum definition and function to return enum name
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["Blue"] = "Blue";
})(Color || (Color = {}));
function getColorName(color) {
    return "Color selected: ".concat(color);
}
// Example usage
console.log(getColorName(Color.Red));
console.log(getColorName(Color.Green));
console.log(getColorName(Color.Blue));
// Q7: Function to handle union type
function printDetails(value) {
    console.log("Type: ".concat(typeof value, ", Value: ").concat(value));
}
// Example usage
printDetails("Hello TypeScript");
printDetails(100);
//-----------------------------------------------------------------------------------
// Q8: Normal function to multiply two numbers
function multiplyNumbers(a, b) {
    return a * b;
}
// Arrow function equivalent
var multiplyNumbersArrow = function (a, b) { return a * b; };
// Example usage
console.log(multiplyNumbers(4, 5));
console.log(multiplyNumbersArrow(4, 5));
// Q9: Arrow function to sum an array of numbers
var sum = function (numbers) { return numbers.reduce(function (acc, num) { return acc + num; }, 0); };
// Example usage
console.log(sum([1, 2, 3, 4, 5]));
console.log(sum([10, 20, 30]));
