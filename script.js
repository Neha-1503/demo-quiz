// Questions Array
import { questions } from './questions.js';

let questionsCount = 0;
let randomQuestionIndx = Math.floor(Math.random() * questions.length);
let correctCount = 0;
let wrongCount = 0;
let timer;

const questionElem = document.getElementById("question");
const answersElem = document.getElementById("answers");
const timerElem = document.getElementById("time-left");
const correctCountElem = document.getElementById("correct-count");
const wrongCountElem = document.getElementById("wrong-count");
const questionImageElem = document.getElementById("question-image");
const startScreen = document.getElementById("start-screen");
const mainContainer = document.getElementById("main-container");
const startButton = document.getElementById("start-button");
const questionsAsked = [];
const wrongAnswers = [];

startButton.addEventListener("click", startGame);

function startGame() {
  startScreen.style.display = "none";
  mainContainer.style.display = "flex";
  const startGameAudio = new Audio('game-start-6104.mp3')
  startGameAudio.play();
  loadQuestion();
}

function loadQuestion() {
  console.log(questionsCount)
  if (questionsCount >= 10) {
    clearInterval(timer);
    showFinalScore();
    return;
  }

  do {
    randomQuestionIndx = Math.floor(Math.random() * questions.length); // Generate a random index
  } while (questionsAsked && questionsAsked.includes(randomQuestionIndx)); // Repeat if the question has been asked already

  const question = questions[randomQuestionIndx];
  questionElem.textContent = question.question;
  questionsAsked.push(randomQuestionIndx);

  if (question.image) {
    questionImageElem.src = question.image;
    questionImageElem.style.display = "block";
  } else {
    questionImageElem.style.display = "none";
  }

  answersElem.innerHTML = "";
  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.onclick = () => checkAnswer(button, index);
    answersElem.appendChild(button);
  });
  questionsCount++;
  startTimer();
}

function startTimer() {
  let timeLeft = 10; // Change time to 10 seconds
  timerElem.textContent = timeLeft;
  clearInterval(timer);

  timer = setInterval(() => {
    timeLeft--;
    timerElem.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      markWrong();
      loadQuestion();
      storeWrongAnswers();
    }
  }, 1000);
}

function checkAnswer(button, selected) {
  clearInterval(timer);
  const correctAnswer = questions[randomQuestionIndx].correct;

  if (selected === correctAnswer) {
    correctCount++;
    const rightAnswerSound = new Audio('mixkit-correct-answer-reward-952.wav');
    rightAnswerSound.play();
    button.style.backgroundColor = 'green';
  } else {
    storeWrongAnswers(selected);
    markWrong();
  }

  updateScore();
  loadQuestion();
}

function markWrong() {
  wrongCount++;
  updateScore();

  const wrongAnswerSound = new Audio('wrong-47985.mp3');
  wrongAnswerSound.play();

}

function storeWrongAnswers(selected) {
  wrongAnswers.push({
    questionIndx: randomQuestionIndx,
    selectedAnswer: selected || 5,
  })
}

function updateScore() {
  correctCountElem.textContent = correctCount;
  wrongCountElem.textContent = wrongCount;
}

function showFinalScore() {
  const wrongAnswersDiv = document.createElement('div');
  if (wrongAnswers.length > 0) {
    wrongAnswersDiv.innerHTML = `<h3>Incorrect Answers:</h3>`;
    wrongAnswers.forEach((item, index) => {
      const wrongAnswerElem = document.createElement('p');
      wrongAnswerElem.innerHTML = `
        <strong>${index + 1}. ${questions[item.questionIndx].question}</strong><br>
        Your Answer: <span style="color: red;">${questions[item.questionIndx].answers[item.selectedAnswer] || 'SKIPPED'}</span><br>
        Correct Answer: <span style="color: green;">${questions[item.questionIndx].answers[questions[item.questionIndx].correct]}</span>
      `;
      wrongAnswersDiv.appendChild(wrongAnswerElem);
    });
  }

  document.getElementById("quiz-container").innerHTML = `
    <h1>${correctCount > 8 ? 'Amazing! You just won an EXTRA COUPON!' : 'Ahh! You missed it, better luck next time!'}</h1>
    <h2>Happy New Year!</h2>
  `;
  document.getElementById("quiz-container").appendChild(wrongAnswersDiv)
}
