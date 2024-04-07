// Get elements
const display = document.getElementById('display');
const spans = document.querySelectorAll('span');

// Variable to track whether an operation has been added after a number
let operationAdded = false;

// Add event listener to each span
spans.forEach(span => {
span.addEventListener('click', () => {
const spanText = span.textContent;

if (spanText === 'Clear') {
// Clear the display
display.textContent = '';
operationAdded = false; // Reset the operation flag
} else if (spanText === '=') {
// Replace the multiplication and division symbols with * and / respectively
const expression = display.textContent.replace(/×/g, '*').replace(/÷/g, '/');
// Evaluate the expression
let result = eval(expression);
// Check if the result has no decimal places
if (Number.isInteger(result)) {
display.textContent = result; // Convert result to integer if it's an integer
} else {
// Check if the result's length is more than 12
if (result.toString().length > 12) {
// Display the result followed by ".." to represent more numbers
display.textContent = result.toString().slice(0, 10) + '..';
} else {
// Display the result with limited decimal places
display.textContent = result.toFixed(6);
}
}
operationAdded = false; // Reset the operation flag
} else if (spanText === '.') {
// Check if the display already contains a decimal point and if the length is less than 12
if (!display.textContent.includes('.') && display.textContent.length < 12) {
// Append the decimal point to the display
display.textContent += spanText;
}
} else if (!isNaN(parseFloat(spanText)) || spanText === '.') {
// If the clicked span is a number or decimal point and if the length is less than 12
if (display.textContent.length < 12) {
// Append the clicked span text to the display
display.textContent += spanText;
}
} else {
// If the clicked span is an operation and the display is not empty
if (!operationAdded && display.textContent.length > 0 && display.textContent.length < 12) {
// If an operation has not been added after a number and the length is less than 12, append the operation to the display
display.textContent += spanText;
operationAdded = true; // Set the operation flag
}
}
});
});