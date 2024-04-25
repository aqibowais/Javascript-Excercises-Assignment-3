// Question 1
function displayCurrentDateTime() {
    const now = new Date();
    document.write("Current Date & Time: " + now);
    document.write("<br>")
}
displayCurrentDateTime();

// Question 2

function greetUser(firstName, lastName) {
    document.write("Hello, " + firstName + " " + lastName + "! Welcome aboard.");
    document.write("<br>")

}
greetUser("John", "Doe");

// Question 3
function addNumbers(num1, num2) {
    return num1 + num2;
}
document.write("Sum: " + addNumbers(5, 3));
document.write("<br>")


// Question 4
function calculate(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = "Invalid operator";
    }
    document.write("Result: " + result);
}
calculate(5, 3, '+'); 
document.write("<br>")

// Question 5
function squareNumber(number) {
    return number * number;
}
document.write("Square: " + squareNumber(4));
document.write("<br>")

// Question 6
function factorial(number) {
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}
document.write("Factorial: " + factorial(5));
document.write("<br>")


// Question 7
function displayCounting(start, end) {
    for (let i = start; i <= end; i++) {
        document.write(i + "<br>");
    }
}
displayCounting(1, 5);
document.write("<br>")

// Question 8
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(side) {
        return side * side;
    }
    const hypotenuseSquared = calculateSquare(base) + calculateSquare(perpendicular);
    return Math.sqrt(hypotenuseSquared);
}
document.write("Hypotenuse: " + calculateHypotenuse(3, 4));
document.write("<br>")

// Question 9
function calculateRectangleArea1(width, height) {
    return width * height;
}
document.write("Area (Arguments as value): " + calculateRectangleArea1(3, 4) + "<br>");
document.write("<br>")

let width = 3;
let height = 4;
function calculateRectangleArea2() {
    return width * height;
}
document.write("Area (Arguments as variables): " + calculateRectangleArea2());
document.write("<br>")

// Question 10
function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
document.write("Is 'madam' a palindrome? " + isPalindrome("madam"));
