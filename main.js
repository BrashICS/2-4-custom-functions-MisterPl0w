/**
 * 2.4 - Custom Functions
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 * 
 * This is a playground. Feel free to play.
 **/ 


// Example custom function using Number() and prompt()
function circle_area() {

    let radius = Number(prompt("What is the radius of the circle?"));

    console.log(`The area is: ${Math.PI * radius**2}`);

}

/*****  Your code goes below  *****/

/*
Celsius = (Fahrenheit - 32) * 5/9
Fahrenheit = (Celsius * 9/5) + 32
*/

function to_fahrenheit() {
    let c = +prompt("What is the temperature in Celsius?");
    console.log(`${c}° Celsius is equal to ${Math.round((c*9/5)+32)}° Fahrenheit`);
}

function to_celsius() {
    let f = +prompt("What is the temperature in Fahrenheit?");
    console.log(`${f}° Fahrenheit is equal to ${Math.round((f-32)*5/9)}° Celsius`);
}

// Roll a fake d10 and print the result
function roll_d10() {
    // No prompt for this one
    console.log(Math.floor(Math.random() * 10) + 1);
}

// Roll a fake d6 🎲
function roll_d6() {
    // No prompt for this one
    console.log(Math.floor(Math.random() * 6) + 1);
}