// Way 1

const arr = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes definitely.",
  "You may rely on it.",
  " As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",

  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",

  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
];

let randNum = Math.floor(Math.random() * arr.length);

let randWord =
  randNum <= 9
    ? `Green ${arr[randNum]}`
    : 9 < randNum <= 14
    ? `Yellow ${arr[randNum]}`
    : `Red ${arr[randNum]}`;

console.log(randWord);

/* **************************************************************** */

// Way 2

const myObj = {
  Green: [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes definitely.",
    "You may rely on it.",
    " As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
  ],
  Yellow: [
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
  ],
  Red: [
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
  ],
};

const { Green, Yellow, Red } = myObj;

const allWord = [Green, Yellow, Red];

let randomNum1 = Math.floor(Math.random() * allWord.length);

let randomNum2 = Math.floor(Math.random() * allWord[randomNum1].length);

const finalyRand = allWord[randomNum1][randomNum2];

const checkOut = (collectionObj, randomWord) => {
  const { Green, Yellow, Red } = collectionObj;

  let check = Green.includes(randomWord)
    ? `Green ${randomWord}`
    : Yellow.includes(randomWord)
    ? `Yellow ${randomWord}`
    : Red.includes(randomWord)
    ? `Red ${randomWord}`
    : "Don't Do that";

  return check;
};

console.log(checkOut(myObj, finalyRand));
