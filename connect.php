<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "data-user";

// Tạo kết nối
$conn = new mysqli($servername, $username, $password, $database);
if ($conn->connect_error) {
    die("Kết nối thất bại: " . $conn->connect_error);
}

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$sql = "INSERT INTO tbl_users (name, email, message) VALUES ('$name', '$email', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "Dữ liệu đã được lưu thành công!";
} else {
    echo "Lỗi khi lưu dữ liệu: " . $conn->error;
}

$conn->close();
?>
