var timerEl = document.querySelector("#timer");
var questionEl = document.getElementById("question-text")
var score = 0
var highScore
var index = 0
var canClick;



// Object with quiz questions
var quizQuestions = [  { question: 'What does HTML stand for?'  },
    {
      question: 'Where do you add the link in your HTML for an external CSS file?'  
    },
    {
      question: 'What is the maximum number of items you can store in an array?' 
    },
    {
      question: 'What do variables store in JavaScript?' 
    }

]

var possibleAnswers = [ 
     
	'A.Hypertext Markup Language,B. Hypertext Markdown Language,C. Human Technology Machine Learning,D. Hyper Training Machine Language' 
	 ,
      
     'A.	In the "body" section,B. In the footer section,C. In an "h1" tag,D. In the "head" section'
     ,
      
      'A.	1-Million, B. 15,C. 4.29 billion,D. Unlimited'
     ,
      
      'A.	The JavaScript link,B. Data values,C.	The console,D. The webpage'
     

]
var questionSet = [ 
     
	possibleAnswers[0].split(","),
	possibleAnswers[1].split(","),
	possibleAnswers[2].split(","),
	possibleAnswers[3].split(",")
     

]
var questionSet1 = possibleAnswers[0].split(",");
var questionSet2 = possibleAnswers[1].split(",");
var questionSet3 = possibleAnswers[2].split(",");
var questionSet4 = possibleAnswers[3].split(",");
 


var answersArray = [
    { 
        possibleAnswers: ['A.	Hypertext Markup Language', 'B.	Hypertext Markdown Language', 'C.	Human Technology Machine Learning', 'D.	Hyper Training Machine Language'],
        correctAnswer: 'A. HyperText Markup Language'
    
    },
    { 
      possibleAnswers: ['A.	In the <body> section', 'B.	In the footer section', 'C. In an <h1> tag', 'D. In the <head> section'], 
      correctAnswer: 'D. In the <head> section'
    },
    { 
      possibleAnswers: ['A.	1,000,000','B. 15','C. 4.29 billion','D. Unlimited'],
      correctAnswer: 'C. 4.29 billion'
    },
    { 
      possibleAnswers: ['A.	The JavaScript link', 'B. Data values', 'C.	The console', 'D. The webpage'],
      correctAnswer: 'B. Data value'
    }

]


//Timer that begins when the start button is pressed
function setTime() {
	
	var minTime = .003;
  var timeLeft = 100;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // If `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of timer to show seconds remaining
      timerEl.textContent = timeLeft 
      // Decrease `timeLeft` by 1 second
      timeLeft-=minTime;
	  canClick = true;
      document.getElementById("timer").innerHTML = timeLeft;
      if (timeLeft <1) {
		  
        //stop timer
        //clearInterval(timerInterval);
        //scorePage();
		document.getElementById("question-text").innerHTML = "Time's up!";
        timerEl.textContent = "Time's up!"
		canClick = false;
    }
  } //1000;
})
}

// Function to change the text in #quizContent and cycle through quiz questions
var getRads = document.getElementsByTagName("label");
function nextQuestion() {
	if(canClick===true)
	{ 
	if(index===4)
	{
		index=0;
	}
  document.getElementById("question-text").innerHTML = quizQuestions[index].question;
  for(let i = 0; i < 1; i++)
  {
	  var gQ = questionSet[index];
	  for(let j = 0; j < gQ.length; j++)
	  {
		getRads[j].innerHTML = gQ[j];
	  }
	  
  }
  index++;
	} 
}

var startQuizBtn = document.getElementById("startBtn")

startQuizBtn.addEventListener('click', function() {
 setTime();
  questionEl.innerHTML = question 
  document.getElementById("title").innerHTML = "";
  document.getElementById("question-text").innerHTML = "";
    var question = quizQuestions[0].question;
    
});


