const questions = [
  {
    question: "Que es el reciclaje?",
    options: ["Un proceso para desechar residuos rapidamente.", "Una practica para reutilizar materiales y reducir la basura.", "Un metodo para incinerar productos de desecho."],
    answer: 1
  },
  {
    question: "Cual de los siguientes materiales se puede reciclar?",
    options: ["Plastico, vidrio y papel.", "Plastico, vidrio y metal.", "Plastico, madera y metal."],
    answer: 0
  },
  {
    question: "Cual es uno de los beneficios principales del reciclaje?",
    options: ["Aumento de la contaminacion ambiental.", "Reduccion de la demanda de recursos naturales.", "Aumento de la produccion de desechos no biodegradables."],
    answer: 1
  },
  {
    question: "Que simbolo se utiliza comunmente para identificar productos reciclables?",
    options: ["Simbolo de exclamacion.", "Simbolo de interrogacion.", "Simbolo de reciclaje compuesto por flechas en forma de circulo."],
    answer: 2
  },
  {
    question: "Que se entiende por 'las tres R' en relacion con el reciclaje?",
    options: ["Recoger, repensar, rechazar.", "Reducir, reciclar, reutilizar.", "Recibir, redistribuir, reutilizar."],
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
