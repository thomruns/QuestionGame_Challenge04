/*
In this constructor, three arguments are required: the question being asked, an array consisting of possible answers and including the correct one, and the index number of the correct answer
*/
var Question = function(question , possAnswersArray, correctAnswerIndex) {
  this.question = question;
  this.possAnswersArray = possAnswersArray;
  this.correctAnswerIndex = correctAnswerIndex;
}
/*
Question.prototype.randomPick = function() {
  var min = Math.ceil(this.possAnswersArray.length - this.possAnswersArray.length);
  var max = Math.floor(this.possAnswersArray.length);
  var rand =  Math.floor(Math.random() * (max - min) + 1) + min;
  return rand;
}
*/
//Use the constructor to create instances of Question //////////////
var q1 = new Question('What year is it?' , ['1 - 1990' , '2 - 2000' , '3 - 2017' , '4 - 1984'], 2);

var q2 = new Question('What month does the 4th of July fall in?' , ['1 - January' , '2 - April', '3 - July', '4 - September' , '5 - December'] , 2);

var q3 = new Question('What ocean borders California?' , ['1 - Indian' , '2 - Arctic' , '3 - Atlantic' , '4 - Pacific' , '5 - Southern'] , 3);

var q4 = new Question('Who owned Lassie?' , ['1 - Billy' , '2 - Timmy', '3 - Judy' , '4 - Janey'] , 1);

//end of Question instances ///////////////////////////////////////

//declare an array of of all the newly-created Question objects h
var qArray = [[q1] , [q2] , [q3], [q4]];

/*
This function takes a variable which holds an array and based upon its length, picks a random number between 1 and the length of the array and returns a variable rand.
*/
var randomPick = function(arr) {
  var min = Math.ceil(arr.length - arr.length);
  var max = Math.floor(arr.length);
  var rand =  Math.floor(Math.random() * (max - min) + 1) + min;
  return rand;
}

//Will choose an array element from the array passed as an argument
var p = randomPick(qArray) - 1;

var getArray = qArray[p];//stores selected object from Question Object array
var askedQuestion = getArray[0].question;
console.log(askedQuestion);//log the question to the console
var possAnswers = getArray[0].possAnswersArray;

var correctAnswer = getArray[0].correctAnswerIndex;


//this returns a random number based on the number of items in the array
//this is used to choose a random array from a list of arrays (qArray)
//value should be between 1 andc the total number of arrays

function loopAnswers(arr){
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
loopAnswers(possAnswers);




//test for correct guess
testGuess = 2;
if((testGuess - 1) === correctAnswer) {
  console.log('You are correct!');
} else {
  console.log ('Guess again');
};






/*  TESTING ONLY
console.log(q2.possAnswersArray);
console.log(q2.correctAnswerIndex + 1);
console.log(q2.possAnswersArray[2]);
console.log(q1.question);
console.log(q1.possAnswersArray);
console.log(q1.correctAnswerIndex);
console.log(q1.question);
console.log(q2.possAnswersArray);
console.log(q1.possAnswersArray[2]);
console.log(q1.correctAnswerIndex);
***/

//Loops through an array and logs each member
/*
function loopAnswers(questionNo, arr){
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
loopAnswers(q1, q1.possAnswersArray);



//test for correct guess
testGuess = 4;
if((testGuess - 1) === q3.correctAnswerIndex) {
  console.log('You are correct!');
} else {
  console.log ('Guess again');
};
*/
