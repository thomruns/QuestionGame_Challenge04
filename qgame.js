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
var q1 = new Question('What year is it?' , [1990 , 2000, 2017 , 1984], 2);

var q2 = new Question('What month does the 4th of July fall in?' , ['1 - January' , '2 - April', '3 - July', '4 - September' , '5 - December'] , 2);

var q3 = new Question('What ocean borders California?' , ['1 - Indian' , '2 - Arctic' , '3 - Atlantic' , '4 - Pacific' , '5 - Southern'] , 3);

var q4 = new Question('Who owned Lassie?' , ['1 - Billy' , '2 - Timmy', '3 - Judy' , '4 - Janey'] , 1);

//end of Question instances ///////////////////////////////////////

//declare an array of of all the newly-created Question objects
var qArray = [[q1] , [q2] , [q3], [q4]];
//var sampleArray = [1 , 2 , 3 , 4, 5]; //TEST ONLY
//var newSampleArray = [1,2,3,4,5,6,7,8,9];//TEST ONLY


var randomPick = function(arr) {
  var min = Math.ceil(arr.length - arr.length);
  var max = Math.floor(arr.length);
  var rand =  Math.floor(Math.random() * (max - min) + 1) + min;
  //console.log(Math.ceil(arr.length - arr.length)); //TESTING
  //console.log(Math.floor(arr.length)); //TESTING
  //console.log(min); //TESTING
  //console.log(max); //TESTIN
  //console.log(rand); //TESTING
  return rand;
}


//Will choose an array from the array passed as an argument
var p = randomPick(qArray) - 1;
console.log(p); //TESTING ONLY

var getArray = (qArray[p]);//stores selected object from Question Object array
console.log(getArray);
var askedQuestion = getArray[0].question;
console.log(askedQuestion + 'is question');//log the question to the consoles

console.log(getArray[0].possAnswersArray); //access the object's array
//console.log(getArray[0].possAnswersArray[2]);//access an element of array
console.log('Correct answer index is: ' + getArray[0].correctAnswerIndex);

//this returns a random number based on the number of items in the array
//this is used to choose a random array from a list of arrays (qArray)
//value should be between 1 and the total number of arrays







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
