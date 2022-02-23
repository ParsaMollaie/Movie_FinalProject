<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/database.php';
include_once '../../model/movie.php';

$database = new Database();
$db = $database->getConnection();

$item = new Movie($db);

$item->movieId = isset($_GET['movieId']) ? $_GET['movieId'] : die();

$item->getSingleMovie();

if ($item->name != null) {
    // create array
    $moviesArr = array(
        "movieId" =>  $item->movieId,
        "name" => $item->name,
        "year" => $item->year,
        "description" => $item->description,
        "imgUrl" => $item->imgUrl
    );

    http_response_code(200);
    echo json_encode($moviesArr);
} else {
    http_response_code(404);
    echo json_encode("Movie not found.");
}
