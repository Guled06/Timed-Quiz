var yourQuestions = [
  {
      question: "Where in your HTML document should the Javascript link be placed?",
      choices: [
          "Underneath the link to your style.css",
          "Inside your title tag",
          "Inside an element tag",
          "In the bottom of your body"
      ],
      answer: "In the bottom of your body"
  },
  {
      question: "Commonly used data types DO NOT include?",
      choices: [
          "strings",
          "booleans",
          "alerts",
          "numbers"
      ],
      answer: "alerts"
  },
  {
    question: "How do you console log?",
    choices: [
      "log.Console",
      "console.ConsoleLog",
      "console.log",
      "consolelog.Log"
    ],
      answer: "console.log"
  },
  {
    question: "DOM is an abreviation for ____?",
    choices: [
      "Data Operating Mode", 
      "Document Object Manipulation", 
      "Document Object Model", 
      "Data Object Model"
    ],
      answer: "Document Object Model"
  },
];


var startBtn = document.querySelector("#start-quiz");
var timerEl = document.getElementById("timer");
var startView = document.querySelector("#start-view");
var questionView = document.querySelector("#question-view");
var questionEl = document.createElement("p");
var answerEl = document.createElement("p")
var choiceEl = document.createElement("button");
var currentQuestion = 0;
var counter = 60;
var timerInterval;


function startQuiz() {
  questionView.append(answerEl);
  startView.style.display = "none";
  questionView.style.display = "block";
  
  var questionEl = document.createElement("p");
  questionEl.textContent = yourQuestions[currentQuestion].question;
  questionView.append(questionEl);
  for (var i = 0; i < yourQuestions[currentQuestion].choices.length; i++) {
      var choiceEl = document.createElement("button");
      choiceEl.textContent = yourQuestions[currentQuestion].choices[i];
      questionView.append(choiceEl);
  }


  var timerInterval = setInterval(function () {
      counter--;
      if (counter >= 0) {
          timerEl.innerHTML = counter;
      } else if (counter < 0) {
          clearInterval(timerInterval);
          timerEl.innerHTML = counter + 61;
          counter = 60;
      }
  }, 1000)
}


function nextQuestion() {
  questionView.innerHTML = "";
  answerEl.textContent = "";
  questionView.append(answerEl);
  currentQuestion++;
  var questionEl = document.createElement("p");
  questionEl.textContent = yourQuestions[currentQuestion];
  questionView.append(questionEl);
  for (var i = 0; i < yourQuestions[currentQuestion].choices.length; i++) {
      var choiceEl = document.createElement("button");
      choiceEl.textContent = yourQuestions[currentQuestion].choices[i];
      questionView.append(choiceEl);
  }
  
}


function checkAnswer(event) {
  var answer = event.target.innerText;
  questionView.append(answerEl);
  console.log(answer);
  if (answer === yourQuestions[currentQuestion].question) {
    answer.innerText = "Correct";
    console.log("Correct");
  } else if (answer !== yourQuestions[currentQuestion].question) {
    answer.innerText = "Incorrect";
    console.log("Incorrect");
    }
}

startBtn.addEventListener("click", startQuiz);
questionView.addEventListener("click", nextQuestion);
choiceEl.addEventListener("click", nextQuestion);
questionView.addEventListener("click", checkAnswer);
timerEl.textContent = counter;