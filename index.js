var readlineSync = require("readline-sync");

var userName = readlineSync.question("What is your name? ");

var score = 0;

console.log("Welcome "+ userName + " to DO YOU KNOW ABOUT Deepthi?");

// play function
function play(question,answer)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer)
  {
    console.log("right!");
    score = score + 1;
  }
  else
  {
    console.log("wrong");
  }
  console.log("score =", score);
  console.log("---------------");
}

var questions = [
  {
    question:"What is my birth name? " ,
    answer:"Jeevitha"
  },
  {
    question:"When is my birthday? " ,
    answer:"August 16"
  },
  {
    question:"What is my favorite colour? " ,
    answer:"pink"
  },
  {
    question:"What is my age? " ,
    answer:"23"
  },
  {
    question:"What is my phone number? " ,
    answer:"8277626473"
  },
  {
    question:"What kind of dress do I Like the most-Indian/Western? " ,
    answer:"Indian"
  },
  {
    question:"Do I wear a nosepin? " ,
    answer:"yes"
  },
  {
    question:"What is my House number?" ,
    answer:"152"
  },
  {
    question:"Which is my favorite flower?" ,
    answer:"jasmine"
  },
  {
    question:"Which is my favorite chocolate?" ,
    answer:"perk"
  }];

  //for loop
  for(var i=0; i < questions.length; i++)
  {
    var currentQuestion = questions[i];
    play(currentQuestion.question,currentQuestion.answer)
  }
  console.log("YAY! You scored ", score);
  