// Get the upload button and preview container
const uploadButton = document.getElementById('uploadButton');
const previewContainer = document.getElementById('previewContainer');
const closeButton = document.getElementsByClassName('close')[0];

// Show the modal
function showModal() {
    const modal = document.getElementById('modal');
    const closeButton = document.getElementsByClassName('close')[0];
    modal.style.display = 'block';
    closeButton.style.display = 'block';
}

// Hide the modal
function hideModal() {
    const modal = document.getElementById('modal');
    const closeButton = document.getElementsByClassName('close')[0];
    modal.style.display = 'none';
    closeButton.style.display = 'none';
}

// Start the progress bar animation
function startProgressBar() {
    const progressBar = document.getElementById('progressBar');
    progressBar.style.display = 'block'; // Display the progress bar before animation starts

    let width = 0;
    const interval = setInterval(frame, 50);

    function frame() {
        if (width >= 100) {
            clearInterval(interval);
            showResult();  // Call showResult after the progress bar completes
        } else {
            width++;
            progressBar.style.width = width + '%';
        }
    }
}

// Show the result in the modal after the progress bar animation
function showResult() {
    const progressText = document.getElementById('progressText');

    // Simulación de detección de tipo de desecho basado en el nombre de la imagen
    const fileInput = document.getElementById('uploadButton');
    const file = fileInput.files[0];
    const detectedWaste = detectWaste(file.name);

    progressText.innerHTML = `<b>Tipo de desecho:</b> ${detectedWaste.types.join(', ')}<br><br>` +
                             `<b>¿Qué debes hacer con esto?: </b>${detectedWaste.instructions}`;

    // Hide the progress bar after showing the result
    const progressBar = document.getElementById('progressBar');
    progressBar.style.display = 'none';
}

// Función para simular la detección de desecho basado en el nombre de la imagen
function detectWaste(fileName) {
    const lowerCaseFileName = fileName.toLowerCase();

    if (lowerCaseFileName.startsWith('v')) {
        return {
            types: ['vidrio', 'botella'],
            instructions: 'Puedes reciclarlo o llevarlo a un punto de reciclaje y dejarlo en el depósito correspondiente.'
        };
    } else if (lowerCaseFileName.startsWith('c')) {
        return {
            types: ['papel', 'cartón'],
            instructions: 'Deberías reciclarlo, busca un contenedor de reciclaje de papel o cartón cercano.'
        };
    } else if (lowerCaseFileName.startsWith('p')) {
        return {
            types: ['plástico'],
            instructions: 'Este es un material reciclable, puedes llevarlo a un centro de reciclaje de plástico.'
        };
    } else {
        return {
            types: ['desconocido'],
            instructions: 'No se pudo determinar el tipo de desecho para esta imagen.'
        };
    }
}

// Add event listener to the upload button
uploadButton.addEventListener('change', function() {
    const fileInput = document.getElementById('uploadButton');
    const file = fileInput.files[0];
    const reader = new FileReader();

    // Read the uploaded file and display it in the preview container
    reader.onload = function() {
        const img = document.createElement('img');
        img.src = reader.result;
        img.style.maxWidth = '100%';
        img.style.maxHeight = '100%';
        previewContainer.innerHTML = '';
        previewContainer.appendChild(img);

        // Show the modal with progress bar
        showModal();
        startProgressBar();
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});

// Add event listener to the close button
closeButton.addEventListener('click', hideModal);
