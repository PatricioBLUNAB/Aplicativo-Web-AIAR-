const questions = [
  {
    question: "Cual de los siguientes es un metodo de reciclaje comun para el papel?",
    options: ["Compostaje.", "Reutilizacion.", "Repulpa y reutilizacion de fibras"],
    answer: 2
  },
  {
    question: "Que es el reciclaje organico?",
    options: ["Recuperacion de metales para su reutilizacion.", "Transformacion de materiales organicos en abono.", "Reutilizacion de plasticos en la fabricacion de nuevos productos."],
    answer: 1
  },
  {
    question: "Cual es un metodo eficaz para el reciclaje de plasticos?",
    options: ["Quemarlos para obtener energia.", "Reutilizarlos para fabricar productos similares.", "Reutilizarlos para fabricar productos similares."],
    answer: 2
  },
  {
    question: "Que implica el reciclaje de vidrio?",
    options: ["Derretirlo y convertirlo en nuevos envases o productos", "Triturarlo y convertirlo en abono.", "Incinerarlo para obtener energia."],
    answer: 0
  },
  {
    question: "Cual de las siguientes opciones describe mejor el reciclaje de metales?",
    options: ["Transformar los metales en materiales no reciclables.", "Fundir los metales y convertirlos en lingotes para su reutilizacion.", "Desperdiciar los metales en vertederos"],
    answer: 1
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
