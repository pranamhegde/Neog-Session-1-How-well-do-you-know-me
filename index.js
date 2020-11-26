const readLineSync = require('readline-sync');
const chalk = require('chalk');

chalk.rgb(15, 100, 204).inverse('How well do you know Pranam?');

var userName  = readLineSync.question('What is your name?\n');

var score = 0;

function play(question, answer){
  var userAnswer = readLineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green("right!"));
    score = score + 1;
  }else{
    console.log(chalk.red("wrong!"));
  }

  console.log("Current Score: ", score);
  console.log("--------------------");
}

var questions = [{question:'Which of these social media sites does Pranam not use?\n a)Facebook\n b)Instagram\n c)Twitter\n d)LinkedIn\n', answer:'b'},
{question:"Does Pranam have a driver's license?\n a)Yes\n b)No\n",
answer:'a'},
{question:"Which is Pranam's favorite sport?\n a)Football\n b)Hockey\n c)Cricket\n d)Basketball\n", answer:'c'},
{question:'Can Pranam swim?\n a)Yes\n b)No\n', answer:'a'},
{question:"Pranam's favorite sports team:\n a)Royal Challengers Bangalore\n b)Manchester United\n c)FC Barcelona\n d)Mumbai Indians\n", answer:'a'},
{question:'Which of these webseries has Pranam not watched?\n a)Big Bang Theory\n b)Suits\n c)Friends\n d)Mirzapur\n', answer:'c'},
{question:'Does Pranam add sugar in his tea?\n a)Yes\n b)No\n', answer:'b'}
];


for(var i = 0; i < questions.length; i++){
  currentQuestion = questions[i];
  play( currentQuestion.question,  currentQuestion.answer );
}

console.log('Final Score: ', score);

remarks();

function remarks(){
  if(score < 3){
   console.log(userName, ' you should definitely spend more time with me :)');
  }else if( score >= 3 && score < 7){
   console.log(userName, ' you know me pretty well :)');
  } else if( score >= 7){
    console.log(userName, ' you probably know more about me than I do :)');
  }
}
