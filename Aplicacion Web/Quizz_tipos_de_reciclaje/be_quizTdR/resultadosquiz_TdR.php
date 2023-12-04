<?php
// Conexión a la base de datos
$servername = "tu_servidor";
$username = "tu_usuario";
$password = "tu_contraseña";
$dbname = "tu_base_de_datos";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener resultados de la base de datos
$sql = "SELECT * FROM resultados_quiz";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Mostrar resultados en una tabla HTML
    echo "<table border='1'>
    <tr>
    <th>ID</th>
    <th>Usuario</th>
    <th>Puntuación</th>
    </tr>";
    while ($row = $result->fetch_assoc()) {
        echo "<tr>
        <td>" . $row["id"] . "</td>
        <td>" . $row["usuario"] . "</td>
        <td>" . $row["puntuacion"] . "</td>
        </tr>";
    }
    echo "</table>";
} else {
    echo "0 resultados";
}

$conn->close();
?>
