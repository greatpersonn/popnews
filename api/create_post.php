<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");

$host = "localhost";
$user = "root";
$password = "";
$dbname = "popnews";
$id = '';

$connection = mysqli_connect($host, $user, $password, $dbname);
if(!$connection) {
    die("Connection to database failed: " . mysqli_connect_error());
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $header_post = $data['header'];
    $header_content = $data['content'];
    $header_author = $data['author'];
    $filename = $data['filename'];
    $filetype = $data['filetype'];

    $new_filename = uniqid() . $filename;
    // $path = 'uploads/' . $new_filename;
    // move_uploaded_file($_FILES['fileUploader']['tmp_name'], $path);

    $sql_data_post = "INSERT INTO posts (PostHeader, PostContent, PostAuthor) VALUES ('$header_post', '$header_content', '$header_author')";
    $sql_data_file =  "INSERT INTO files (NameOfFile, TypeOfFile) VALUES ('$new_filename', '$filetype')";
    $result_post = mysqli_query($connection, $sql_data_post);
    $result_file = mysqli_query($connection, $sql_data_file);

    if(!$result_post || !$result_file) {
        http_response_code(404);
        die(mysqli_error($connection));
    }

    $connection->close();
}
?>