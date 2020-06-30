// Iteration 1: Names and Input
const hacker1 = 'Mark';

console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Miles';

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

// 3.1
let string1 = '';

for (let i = 0; i < hacker1.length; i++) {
  if (i < hacker1.length - 1) {
    string1 += hacker1[i].toUpperCase() + ' ';
  } else if (i === hacker1.length - 1) {
    string1 += hacker1[i].toUpperCase();
  }

  // Other method
  // string1 += hacker1[i].toUpperCase();
  // if (i < hacker.length -1) {
  // string1 += ' ';
  // }
}

console.log(string1);

// 3.2
let string2 = '';

for (let i = hacker2.length - 1; i > -1; i--) {
  string2 += hacker2[i];
}

console.log(string2);

// 3.3
let longerString = hacker1.length > hacker2.length ? hacker1 : hacker2;
firstInOrder = '';

for (let i = hacker1.length - 1; i >= 0; i--) {
  if (hacker1[i] < hacker2[i]) {
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

// Bonus 1
const Lorem1 =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non condimentum orci. Ut faucibus orci id interdum consequat. Ut velit enim, porttitor ac sollicitudin a, tempor vitae quam. Duis blandit in leo id lobortis. Morbi sit amet suscipit eros. In nibh augue, egestas a nunc consequat, aliquam maximus purus. Nullam venenatis commodo dolor fermentum convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras dignissim, sem at posuere aliquet, elit justo vulputate eros, a sagittis nibh velit nec nisl. Integer quis purus elit.';

const Lorem2 =
  'Sed eu consectetur ipsum, non faucibus nibh. Morbi accumsan dolor in erat mollis pretium. Donec at justo odio. In sit amet lectus vitae est mattis malesuada non non dui. Nam gravida aliquet eros, eget cursus ex vehicula at. Vivamus malesuada dolor ac elementum condimentum. Nam tempus suscipit erat, eu maximus ex viverra vitae. Vivamus luctus velit enim, ut interdum odio ultricies et. Curabitur iaculis dolor sed ipsum tristique tempor. Vivamus molestie commodo hendrerit. Vivamus quam odio, accumsan at tellus vitae, bibendum posuere nunc. Mauris eget odio sit amet risus tempus consectetur et at dui. Pellentesque tempor odio at lacinia lacinia.';

const Lorem3 =
  'Nulla venenatis, metus vitae rhoncus tristique, libero orci convallis ligula, eu laoreet nulla tortor dignissim libero. Duis venenatis ac sapien quis molestie. Cras eget purus quis eros semper vestibulum ac at diam. Integer ac tortor sapien. Quisque vel congue sapien, at vehicula lorem. Nam vitae neque in justo consequat consectetur sit amet vitae neque. Fusce scelerisque arcu vitae cursus semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ut sodales tortor.';

let totalWords = 0;

for (let i = 0; i < Lorem1.length; i++) {
  if (Lorem1[i] === ' ') {
    totalWords += 1;
  }
}
//  Account for last word
totalWords += 1;

console.log(totalWords);

// et Count

let etCount = 0;

for (let i = 0; i < Lorem1.length; i++) {
  if (
    Lorem1[i] === ' ' &&
    Lorem1[i + 1] === 'e' &&
    Lorem1[i + 2] === 't' &&
    Lorem1[i + 3] === ' '
  ) {
    etCount += 1;
  }
}

console.log(etCount);

// Bonus 2

const phraseToCheck = 'A man, a plan, a canal, Panama!';
let characters = '';

for (let i = 0; i < phraseToCheck.length; i++) {
  if (
    phraseToCheck[i] === ' ' ||
    phraseToCheck[i] === ',' ||
    phraseToCheck[i] === '!' ||
    phraseToCheck[i] === '?' ||
    phraseToCheck[i] === "'"
  ) {
    continue;
  }
  characters += phraseToCheck[i].toLowerCase();
}

console.log(characters);

let charactersReverse = '';

for (i = characters.length - 1; i >= 0; i--) {
  charactersReverse += characters[i];
}

if (characters === charactersReverse) {
  console.log('This string is a Palindrome!');
} else console.log('This string is not a Palindrome');
