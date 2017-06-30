//   IIFE
(function(){

  /*
  In this  constructor, three arguments are required: the question being asked, an array consisting of possible answers -- including the correct one -- and the array index number of the correct answer
  var Question = function
  */
  function Question(question , possAnswersArray, correctAnswerIndex) {
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

  var q5 = new Question('What colors are on the US flag?' , ['1 - Red, Blue, Green' , '2 - Yellow, Orange, Purple' , '3 - Green, Magenta, Blue' , '4 - Red, White, Blue' , '5 - Solid Brown'] , 3 );

  var q6 = new Question('Who was Batman\'s sidekick?' , ['1 - Swallow' , '2 - Robin' , '3 - Minnow' , '4 - Kato' , '5 - Lark'] , 1);

  //end of Question instances ///////////////////////////////////////

  //declare an array of of all the newly-created Question objects
  var qArray = [[q1] , [q2] , [q3], [q4], [q5], [q6]];

  /*
  This function takes a variable which holds an array and based upon its length, picks a random number between 1 and the length of the array and returns a variable rand.
  */
  var randomPick = function(arr) {
    var min = Math.ceil(arr.length - arr.length); //0
    var max = Math.floor(arr.length);//6
    var rand =  Math.floor(Math.random() * (max - min) + 1) + min; //6-0+1+0
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
  //value should be between 1 and the total number of arrays

  function loopAnswers(arr){
    for (var i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
  loopAnswers(possAnswers);

  //test for correct guess
  testGuess = prompt("Enter the number of the correct answer:");
  if((testGuess - 1) === correctAnswer) {
    console.log('You are correct!');
    var winningMessage = "You got it right!";
    document.querySelector('.correct-answer').textContent = (winningMessage);
    document.querySelector('.wrong-answer').style.display = ('none');
  } else {
    console.log ('Sorry, wrong answer. Reload page.');
    var losingMessage = "Sorry, wrong answer. Reload page and try again!";
    document.querySelector('.wrong-answer').textContent = (losingMessage);
    document.querySelector('.correct-answer').style.display = ('none');
  };


})();
