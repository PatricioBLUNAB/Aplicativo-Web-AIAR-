<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Conexión a la base de datos
    $servername = "tu_servidor";
    $username = "tu_usuario";
    $password = "tu_contraseña";
    $dbname = "tu_base_de_datos";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }

    // Recibir datos del formulario
    $usuario = $_POST["usuario"];
    $puntuacion = $_POST["puntuacion"];

    // Insertar datos en la base de datos
    $sql = "INSERT INTO resultados_quiz (usuario, puntuacion) VALUES ('$usuario', '$puntuacion')";

    if ($conn->query($sql) === TRUE) {
        echo "Registro exitoso";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
