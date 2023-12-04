<?php

if (isset($_POST['accion'])) {
    switch ($_POST['accion']) {
        case 'acceso_user':
            acceso_user();
            break;

        case 'insertar_user':
            insertar_user();
            break;

        case 'guardar_resultado':
            guardar_resultado();
            break;
    }
}

function acceso_user() {
    // ... código existente de la función acceso_user()

    if (isset($filas)) {
        // ... código existente de la función acceso_user()

        header('Location: ../views/comentario.php');
    } else {
        // ... código existente de la función acceso_user()
    }
}

function insertar_user() {
    // ... código existente de la función insertar_user()
}

function guardar_resultado() {
    if (isset($_POST['nombre_usuario'], $_POST['puntuacion'])) {
        require_once("quiz_backend.php"); // Asegúrate de tener la conexión a la base de datos

        $nombre_usuario = $conexion->real_escape_string($_POST['nombre_usuario']);
        $puntuacion = $conexion->real_escape_string($_POST['puntuacion']);

        // Guardar resultado en la base de datos
        $consulta = "INSERT INTO resultados_quiz (usuario, puntuacion) VALUES ('$nombre_usuario', $puntuacion)";
        $resultado = mysqli_query($conexion, $consulta);

        if ($resultado) {
            echo "Resultado del quiz almacenado correctamente.";
        } else {
            echo "Error al almacenar el resultado del quiz: " . mysqli_error($conexion);
        }
    } else {
        echo "Parámetros insuficientes para almacenar el resultado del quiz.";
    }
}
?>
