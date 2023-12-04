<?php

// Configuración de la base de datos
$hostname = "resultados_quiz"; // Reemplazar con el nombre de tu servidor MySQL
$username = "tu_usuario_mysql"; // Reemplazar con tu nombre de usuario de MySQL
$password = "tu_contraseña_mysql"; // Reemplazar con tu contraseña de MySQL
$database = "resultados_quiz_IA"; // Reemplazar con el nombre de tu base de datos (quiz_IA)

$conexion = new mysqli($hostname, $username, $password, $database);

// Verificar la conexión
if ($conexion->connect_error) {
    die("Error de conexión a la base de datos: " . $conexion->connect_error);
}

// Asegurarse de que los datos se envíen como UTF-8
$conexion->set_charset("utf8");

// Resto del código relacionado con la base de datos (si es necesario)

?>
