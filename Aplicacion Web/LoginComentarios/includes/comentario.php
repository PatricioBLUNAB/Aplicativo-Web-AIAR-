<?php  

// Llamando a los campos
include "db.php";

$nombre = $conexion->real_escape_string ($_POST['nombre']);
$comentario= $conexion->real_escape_string ($_POST['comentarios']);
include "db.php";
$nombre= mysqli_real_escape_string($conexion,$nombre);
$comentario= mysqli_real_escape_string($conexion,$comentario);
$resultado=mysqli_query($conexion,'INSERT INTO comentarios (nombre, comentarios) VALUES ("'.$nombre.'", "'.$comentario.'")');
header('Location: ../index.php');




?>