const questions = [
  {
    question: "Que es el aprendizaje automatico (machine learning)?",
    options: ["Proceso manual de ensenar a las maquinas tareas especificas.", "Automatizacion de tareas basicas en la industria manufacturera.", "Capacitacion de sist. informaticos para aprender patrones y tomar decisiones."],
    answer: 2
  },
  {
    question: "Cual es el objetivo principal del aprendizaje automatico?",
    options: ["Limitar la capacidad de las maquinas para procesar grandes conjuntos de datos.", "Mejorar la capacidad de las maquinas para realizar tareas simples de forma repetitiva.", "Capacitar a las maquinas para que puedan aprender de los datos y tomar decisiones basadas en ellos."],
    answer: 2
  },
  {
    question: "Que tipo de datos utiliza el aprendizaje automatico para entrenar modelos?",
    options: ["Solo datos numericos.", "Solamente imagenes y videos.", "Datos numericos, textuales, de imagenes y otros tipos de datos."],
    answer: 2
  },
  {
    question: "Cual es una aplicacion comun del aprendizaje automatico en la vida cotidiana?",
    options: ["Control de trafico en carreteras.", "Deteccion de fraudes en transacciones financieras.", "Unicamente en la investigacion cientifica."],
    answer: 1
  },
  {
    question: "Que implica el termino 'entrenamiento de un modelo' en machine learning?",
    options: ["Ensenar a los humanos a operar con maquinas complejas.", "Proceso de ajustar un algoritmo para que se ajuste mejor a los datos.", "Restriccion de la capacidad de las maquinas para mejorar su desempeno con el tiempo"],
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
