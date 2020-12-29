// Javascript Basics

// Prompt 1

alert("Beware, there is danger ahead of you!")

alert("Turn left to go to safety.")
alert("Turn right to go back to camp.")
alert("Go straight to get across the bridge.")

console.log("The choice is yours..")

// Prompt 2

const price = 9;
var total = 15;
let shorts = 4;

console.log(price);
console.log(total);
console.log(shorts);

const price = 10;
var total = 6;
let shorts = 9;

console.log(price);
console.log(total);
console.log(shorts);

// Prompt 3

//<script>
alert("I wish my super power was teleportation on December 21st.");
//</script >

// Prompt 4

var age = prompt("How old are you?");
var color = prompt("What is your favorite?");
var school = prompt("What school do you go to?");

console.log("I am " + age + " years old. My favorite color is " + color + ". The school that I attend is " + school + " .");

// Javascript Numbers

// Prompt 1

function points(touchdown, fieldGoal) {
    return touchdown * 6 + threePointers * 1;
}

// Prompt 2

var firstName = "Emeka ";
var lastName = "Okafor";
var wholeName = firstName.concat(lastName);

// Javascript Functions

// Prompt 1

function futureLife(numJobs, geoLocation, workPlace, jobTitle) {
    var future = 'You will be a ' + jobTitle + ' in the' + geoLocation + ' location. You will be working for ' +
        workPlace + ' and will work at ' + numJobs + ' companies in your whole lifetime.';
    console.log(future);
}

tellFortune('bball player', 'spain', 'Shaq', 3);
tellFortune('stunt double', 'Japan', 'Ryan Gosling', 3000);
tellFortune('Elvis impersonator', 'Russia', 'The Oatmeal', 0);

// Prompt 2

function myGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
}

console.log('You got a ' + assignGrade());


// Prompt 3

function ageCalculator(age, currentYear) {
    var currentYear = prompt("What is the current year?")
    var currentAge = currentYear * age;
    console.log("You are " + currentAge + " years old!");
}

calculateDogAge(1);
calculateDogAge(0.5);
calculateDogAge(12);

// Prompt 4

document.querySelector('body').innerHTML = planets.map(planet => createPlanetHTML(planet)).join('');