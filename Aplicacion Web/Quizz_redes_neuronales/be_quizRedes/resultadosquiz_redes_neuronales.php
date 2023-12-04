<?php

if (isset($_POST['usuario']) && isset($_POST['puntuacion'])) {
    $usuario = $_POST['usuario'];
    $puntuacion = $_POST['puntuacion'];

    // Aquí puedes agregar la lógica para almacenar la puntuación en la base de datos

    // Ejemplo:
    $servername = "tu_servidor";
    $username = "tu_usuario";
    $password = "tu_contraseña";
    $dbname = "resultados_quiz";

    // Crear conexión
    $conexion = new mysqli($servername, $username, $password, $dbname);

    // Verificar la conexión
    if ($conexion->connect_error) {
        die("La conexión falló: " . $conexion->connect_error);
    }

    // Insertar la puntuación en la base de datos
    $consulta = "INSERT INTO resultados_quiz (usuario, puntuacion) VALUES ('$usuario', $puntuacion)";
    $resultado = $conexion->query($consulta);

    if ($resultado) {
        echo "Puntuación almacenada exitosamente.";
    } else {
        echo "Error al almacenar la puntuación: " . $conexion->error;
    }

    // Cerrar conexión
    $conexion->close();
} else {
    echo "Datos no recibidos correctamente.";
}

?>
