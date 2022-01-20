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

/* **************************************************************************************** */

const myObj = {
  Green: {
    color: "Green",
    arr1: [
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
  },
  Yellow: {
    color: "Yellow",
    arr2: [
      "Reply hazy, try again.",
      "Ask again later.",
      "Better not tell you now.",
      "Cannot predict now.",
      "Concentrate and ask again.",
    ],
  },
  Red: {
    color: "Red",
    arr3: [
      "Don't count on it.",
      "My reply is no.",
      "My sources say no.",
      "Outlook not so good.",
      "Very doubtful.",
    ],
  },
};

const { Green, Yellow, Red } = myObj;

const allWord = [Green, Yellow, Red];

let randomNum = Math.floor(
  Math.random() * allWord.map((element) => element.length)
);

const checkOut = (collection, randomWord) => {
  let check = collection;
};

console.log(
  checkOut(
    myObj,
    allWord.map((element) => element[randomNum])
  )
);
