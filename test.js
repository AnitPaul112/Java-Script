console.log("Anit");
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed";
    }
    return a / b;
}

console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 4)); // Output: 6
console.log(multiply(2, 6)); // Output: 12
console.log(divide(10, 2)); // Output: 5
console.log(divide(8, 0)); // Output: Error: Division by zero is not allowed

