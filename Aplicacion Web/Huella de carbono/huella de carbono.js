const questions = [
    {
      question: '¿Cuántas veces a la semana consumes carne?',
      options: ['Nunca', '1-2 veces', 'Más de 2 veces']
    },
    {
      question: '¿Con qué frecuencia utilizas transporte público o compartido?',
      options: ['Siempre', 'A veces', 'Nunca']
    },
    {
      question: '¿Cuál es tu consumo de energía eléctrica?',
      options: ['Bajo', 'Medio', 'Alto']
    },
    {
      question: '¿Cuánto tiempo al día utilizas dispositivos electrónicos?',
      options: ['Menos de 2 horas', '2-4 horas', 'Más de 4 horas']
    },
    {
      question: '¿Cuánto tiempo te duchas al día?',
      options: ['Menos de 5 minutos', '5-10 minutos', 'Más de 10 minutos']
    },
    {
      question: '¿Qué tipo de bolsas utilizas para ir de compras?',
      options: ['Bolsas reutilizables', 'Bolsas de plástico desechables', 'Bolsas de papel']
    },
    {
      question: '¿Cuánta comida desperdicias a la semana?',
      options: ['Nada', 'Poca', 'Mucha']
    },
    {
      question: '¿Tienes algún sistema de reciclaje en tu hogar?',
      options: ['Sí', 'No']
    },
    {
      question: '¿Cuántas veces vuelas en avión al año?',
      options: ['Nunca', '1-3 veces', 'Más de 3 veces']
    },
    {
      question: '¿Cuál es tu método principal de calefacción?',
      options: ['Energía solar', 'Gas', 'Electricidad']
    }
  ];
  
  let currentQuestion = 0;
  let answers = [];
  
  function nextQuestion() {
      const selectedOption = document.querySelector('input[name="answer"]:checked');
  
      if (selectedOption) {
          answers.push(selectedOption.nextElementSibling.innerText);
          selectedOption.checked = false;
  
          if (currentQuestion < questions.length - 1) {
              currentQuestion++;
              showQuestion();
          } else {
              showResult();
          }
      }
  }
  
  function showResult() {
      const questionContainer = document.getElementById('question-container');
      const nextButton = document.getElementById('next-button');
      const resultContainer = document.getElementById('result-container');
      const resultText = document.getElementById('result-text');
  
      questionContainer.style.display = 'none';
      nextButton.style.display = 'none';
      resultContainer.style.display = 'block';
  
      const result = calculateCarbonFootprint(answers);
      resultText.innerText = `Tu huella de carbono es: ${result}`;
  
      // Enviar el resultado al backend
      sendResultToBackend(result);
  }
  
  function sendResultToBackend(result) {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', './backend_huella_carbono.php', true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onreadystatechange = function () {
          if (xhr.readyState == 4 && xhr.status == 200) {
              console.log(xhr.responseText);
          }
      };
  
      // Enviar datos al backend
      const params = 'resultado=${result}';
      xhr.send(params);
  }
  
  showQuestion();