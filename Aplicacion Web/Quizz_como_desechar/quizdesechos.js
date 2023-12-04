const questions = [
    {
      question: "Como desechar plasticos de manera adecuada?",
      options: ["Tirarlos en el contenedor de reciclaje.", "Enterrarlos en el jardin.", "Quemarlos en una hoguera."],
      answer: 0
    },
    {
      question: "Cual es la forma adecuada de desechar materia organica?",
      options: ["Tirarla en el contenedor de reciclaje.", "Compostarla en un compostero.", "Arrojarla en el inodoro."],
      answer: 1
    },
    {
      question: "Cual es la manera correcta de desechar papel y carton?",
      options: ["Tirarlos en el contenedor de basura comun.", "Reciclarlos en el contenedor de papel y carton.", "Quemarlos en una fogata."],
      answer: 1
    },
    {
      question: "Que se debe hacer con los medicamentos vencidos o no utilizados?",
      options: ["Tirarlos en el inodoro.", "Botarlos en la basura comun.", "Llevarlos a un punto de recoleccion de medicamentos."],
      answer: 2
    },
    {
      question: "Cual es la forma adecuada de desechar baterias?",
      options: ["Tirarlas en el contenedor de reciclaje.", "Quemarlas en un incinerador.", "Dejarlas en cualquier lugar al aire libre"],
      answer: 0
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
  