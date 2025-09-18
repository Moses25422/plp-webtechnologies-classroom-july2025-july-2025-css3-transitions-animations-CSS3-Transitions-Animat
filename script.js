// Part 2: JavaScript Functions

// Global variable
let counter = 0;

// Function with parameters and return value
function calculateRectangleArea(width, height) {
    // Local variables - scope is limited to this function
    let area = width * height;
    return area;
}

// Function that uses the global variable
function incrementCounter() {
    counter++;
    return counter;
}

// Function that modifies DOM
function changeBackgroundColor(elementId, color) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.backgroundColor = color;
        return true;
    }
    return false;
}

// Demo functions for buttons
function calculateArea() {
    const width = Math.floor(Math.random() * 20) + 5;
    const height = Math.floor(Math.random() * 20) + 5;
    const area = calculateRectangleArea(width, height);
    
    const output = document.getElementById('output');
    output.innerHTML = `Rectangle dimensions: ${width} × ${height}<br>Area: ${area}`;
    output.style.backgroundColor = 'rgba(76, 175, 80, 0.2)';
}

function changeColor() {
    const colors = ['#FF5252', '#FFAB00', '#00E676', '#651FFF', '#00B8D4'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    const success = changeBackgroundColor('output', randomColor);
    const output = document.getElementById('output');
    
    if (success) {
        output.innerHTML = `Background color changed to: ${randomColor}`;
    } else {
        output.innerHTML = 'Error changing color';
    }
}

function startCounter() {
    const count = incrementCounter();
    const output = document.getElementById('output');
    output.innerHTML = `Counter: ${count}`;
    output.style.backgroundColor = 'rgba(33, 150, 243, 0.2)';
}

// Part 3: Combined CSS and JavaScript

// Function to trigger animations
function triggerAnimation(animationType) {
    const element = document.getElementById('animatedElement');
    
    // Remove any existing animation classes
    element.classList.remove('animate-bounce', 'animate-shake', 'animate-flip');
    
    // Trigger reflow to restart animation
    void element.offsetWidth;
    
    // Add the requested animation class
    switch(animationType) {
        case 'bounce':
            element.classList.add('animate-bounce');
            break;
        case 'shake':
            element.classList.add('animate-shake');
            break;
        case 'flip':
            element.classList.add('animate-flip');
            break;
    }
}

// Function to stop all animations
function stopAnimations() {
    const element = document.getElementById('animatedElement');
    element.classList.remove('animate-bounce', 'animate-shake', 'animate-flip');
}

// Function to flip card
function flipCard() {
    const card = document.getElementById('flipCard');
    card.classList.toggle('flipped');
}