<?php
// Database connection variables
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "menu_form";

// Create a connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";

$Name = $_POST['name'];
$Email = $_POST['email'];
$Phone = $_POST['Phone'];
$Address = $_POST['address'];

$sql = "INSERT INTO form_table(Name, Email, Phone, Address) VALUES ('$Name', '$Email', '$Phone', '$Address')";

if (mysqli_query($conn, $sql)) {
    echo "Data inserted successfully";
} else {
    echo "Error inserting data: " . mysqli_error($conn);
}

// Close connection
mysqli_close($conn);
?>
