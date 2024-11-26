//get username
let userName =prompt('What\'s your name?');
//Input username to website
userName
? (greeting.innerText=`Hello, ${username}!`)
: (greeting.innerText='Hello stranger!');


userName ? console.log(`Hello, ${userName}!`)
: console.log('Hello!');
const userQuestion = ('Will I do good on my English Test?')
console.log(userQuestion);
const randomNumber = Math.floor(Math.random() * 8);
let eightBall = ('');
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
  break;
  case 2: 
    eightBall = 'Reply hazy try again';
    break;
  case 3:
   eightBall = 'Cannot predict now';
    break;
  case 4:
   eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
 case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default: 
     eightBall = 'YES';
}

console.log(eightBall);

