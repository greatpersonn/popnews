<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: *");

    $host = "localhost";
    $user = "root";
    $password = "";
    $dbname = "popnews";
    $id = '';

    $connection = mysqli_connect($host, $user, $password, $dbname);
    $method = $_SERVER['REQUEST_METHOD'];

    if(!$connection) {
        die("Connection to database failed: " . mysqli_connect_error());
    }

    switch ($method) {
        case 'GET':
            $sql_data = "SELECT * FROM posts";
            break;

        case 'POST':
            # code...
            break;
        
        default:
            # code...
            break;
    }

    $result = mysqli_query($connection, $sql_data);

    if(!$result) {
        http_response_code(404);
        die(mysqli_error($connection));
    }

    if ($method == 'GET') {
        if(!$id) {
            echo '[';
        }

        for ($i = 0; $i < mysqli_num_rows($result); $i++) {
            echo ($i > 0 ? ', ' : ' ').json_encode(mysqli_fetch_object($result));
        }

        if (!$id) {
            echo ']';
        } 
    } else {
        echo mysqli_affected_rows($connection);
    }


    $connection->close();

?>