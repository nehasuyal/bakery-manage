<?php
// Database connection variables
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "my_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the Name field is not empty
if (!empty($_POST['Name'])) {
    // Prepare SQL statement
    $stmt = $conn->prepare("INSERT INTO my_table (Name, Email, msg) VALUES (?, ?, ?)");

    // Bind parameters
    $stmt->bind_param("sss", $_POST['Name'], $_POST['Email'], $_POST['Message']);

    // Execute statement
    if ($stmt->execute()) {
        echo "New record created successfully";
    } else {
        echo "Error executing SQL statement: " . $stmt->error;
    }

    // Close statement
    $stmt->close();
} else {
    echo "Error: Name field is empty";
}

// Close connection
$conn->close();
?>
