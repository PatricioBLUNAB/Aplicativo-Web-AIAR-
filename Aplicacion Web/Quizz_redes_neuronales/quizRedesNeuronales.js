const questions = [
  {
    question: "Que son las redes neuronales en el contexto de la inteligencia artificial?",
    options: ["Simulaciones de redes de comunicacion inalambrica.", "Modelos matematicos que imitan el funcionamiento del cerebro humano.", "Herramientas para la gestion de redes de computadoras."],
    answer: 1
  },
  {
    question: "Cual es la unidad fundamental de una red neuronal artificial?",
    options: ["Nodo.", "Enlace.", "Transistor."],
    answer: 0
  },
  {
    question: "Cual es el proposito principal de una capa de activacion en una red neuronal?",
    options: ["Transmitir datos entre diferentes capas.", "Aplicar una funcion de activacion a la salida de una neurona.", "Controlar la velocidad de transmision de datos."],
    answer: 1
  },
  {
    question: "Que es el aprendizaje profundo (deep learning) en relacion con las redes neuronales?",
    options: ["Proceso de aprendizaje en capas superficiales de la red neuronal.", "Proceso de aprendizaje en multiples capas de la red neuronal.", "Proceso de aprendizaje en una sola capa de la red neuronal."],
    answer: 1
  },
  {
    question: "Cual es uno de los desafios comunes en el entrenamiento de redes neuronales?",
    options: ["Velocidad de procesamiento excesivamente rapida.", "Dificultad para representar relaciones complejas en los datos.", "Falta de disponibilidad de datos de entrenamiento"],
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
