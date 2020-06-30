// Iteration 1: Names and Input
let hacker1 = 'Mark';

console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Miles';

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver's has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  `Wow, you both have equally long names, ${hacker1.length} characters!`;
}

// Iteration 3: Loops

let string1 = '';

for (let i = 0; i < hacker1.length; i++) {
  if (i < hacker1.length - 1) {
    string1 += hacker1[i].toUpperCase() + ' ';
  } else if (i === hacker1.length - 1) {
    string1 += hacker1[i].toUpperCase();
  }
}

console.log(string1);

let string2 = '';

for (let i = hacker2.length - 1; i > -1; i--) {
  string2 = string2 + hacker2[i];
}

console.log(string2);

longerString = hacker1.length > hacker2.length ? hacker1 : hacker2;
firstInOrder = '';

for (let i = 0; i < longerString.length; i++) {
  if (hacker1[i] > hacker2[i]) {
    firstInOrder = hacker1;
    break;
  } else if (hacker1[i] < hacker2[i]) {
    firstInOrder = hacker2;
    break;
  } else continue;
}

if (firstInOrder === hacker1) {
  console.log("The driver's name goes first.");
} else if (firstInOrder === hacker2) {
  console.log('Yo, the navigator goes first definitely.');
} else {
  console.log('What?! You both have the same name?');
}
