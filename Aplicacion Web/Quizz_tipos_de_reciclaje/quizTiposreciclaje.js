const questions = [
  {
    question: "Que tipo de desecho incluye materiales biodegradables como restos de comida y residuos de jardin?",
    options: ["Desechos peligrosos.", "Desechos organicos.", "Desechos electronicos."],
    answer: 1
  },
  {
    question: "Cual de los siguientes se clasifica como desecho peligroso debido a su toxicidad?",
    options: ["Papel y carton.", "Baterias y productos quimicos.", "Ropa y textiles."],
    answer: 1
  },
  {
    question: "Que son los desechos electronicos (e-waste)?",
    options: ["Desechos de alimentos no comestibles.", "Desechos de equipos electricos y electronicos.", "Desechos de metales no reciclables."],
    answer: 1
  },
  {
    question: "Que tipo de desecho consiste en productos desechados que pueden ser reutilizados o reciclados?",
    options: ["Desechos inorganicos.", "Desechos plasticos.", "Desechos reutilizables."],
    answer: 2
  },
  {
    question: "Cual de los siguientes se considera un desecho no biodegradable?",
    options: ["Restos de frutas y verduras.", "Botellas de plastico y envases de vidrio.", "Metales y plasticos que no se descomponen facilmente"],
    answer: 2
  }
];

let currentQuestion = 0;
const options = document.querySelectorAll('.option');
const questionElement = document.getElementById('question');

function loadQuestion() {
  const currentQuiz = questions[currentQuestion];
  questionElement.textContent = currentQuiz.question;

  options.forEach((option, index) => {
    option.textContent = currentQuiz.options[index];
    option.style.backgroundColor = '';
  });
}

function checkAnswer(selectedOption) {
  const currentQuiz = questions[currentQuestion];
  const answerIndex = currentQuiz.answer;

  options.forEach((option, index) => {
    option.style.backgroundColor = index === answerIndex ? 'limegreen' : 'red';
  });

  selectedOption.style.backgroundColor = selectedOption.style.backgroundColor === 'limegreen' ? 'limegreen' : 'red';
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    // Quiz completed
    questionElement.textContent = 'Quiz completado!';
    options.forEach((option) => {
      option.style.backgroundColor = '';
    });
    document.getElementById('next-btn').disabled = true;
  }
}

options.forEach((option) => {
  option.addEventListener('click', function () {
    checkAnswer(this);
  });
});

document.getElementById('next-btn').addEventListener('click', nextQuestion);

loadQuestion();
