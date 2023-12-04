const questions = [
    {
      question: "Que se entiende por inteligencia artificial (IA)?",
      options: ["Procesos de calculo simples en computadoras.", "Simulacion de la inteligencia humana por parte de maquinas.", "Automatizacion de tareas mecanicas en fabricas"],
      answer: 1
    },
    {
      question: "Cual de las siguientes areas no se relaciona con la inteligencia artificial?",
      options: ["Medicina.", "Educacion.", "Solo se aplica a la industria automotriz."],
      answer: 2
    },
    {
      question: "Cual es una aplicacion comun de la inteligencia artificial en la vida cotidiana?",
      options: ["Control de trafico aereo.", "Diagnostico de enfermedades.", "Unicamente en la investigacion espacial."],
      answer: 1
    },
    {
      question: "Que implica el aprendizaje automatico (machine learning) en la inteligencia artificial?",
      options: ["Programacion de sistemas para realizar tareas especificas.", "Capacidad de las maquinas para aprender y mejorar a partir de datos.", "Limitacion de la capacidad de las maquinas para mejorar con el tiempo."],
      answer: 1
    },
    {
      question: "Cual de las siguientes afirmaciones describe mejor la inteligencia artificial?",
      options: ["Limitada a calculos matematicos simples.", "Capacidad de las maquinas para realizar tareas complejas de forma autonoma.", "Restringida a realizar tareas humanas basicas sin autonomia."],
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
  