<?php

session_start();

// Verifica si el nombre de usuario está disponible
if (!isset($_SESSION['nombre'])) {
    echo "Error: El nombre de usuario no está disponible.";
    exit;
}

// Crear la conexión a la base de datos
include "db.php";

// Obtén el nombre de usuario de la sesión
$username = $_SESSION['nombre'];

// Obtén el resultado del cuestionario desde la solicitud POST
$result = $_POST['resultado'];

// Modifica la consulta SQL para utilizar $username
$query = "INSERT INTO huella_carbono_resultado (usuario_id, resultado) VALUES ('$username', '$result')";

// Ejecuta la consulta
if ($conexion->query($query) === TRUE) {
    echo "Los resultados se han guardado correctamente.";
} else {
    echo "Error al guardar los resultados: " . $conexion->error;
}

// Cierra la conexión a la base de datos
$conexion->close();

?>
