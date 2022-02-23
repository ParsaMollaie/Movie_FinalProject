<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../../config/database.php';
include_once '../../model/movie.php';

$database = new Database();
$db = $database->getConnection();

$items = new Movie($db);

$stmt = $items->getMovies();
$itemCount = $stmt->rowCount();

if ($itemCount > 0) {

    $moviesArr = array();
    $moviesArr["data"] = array();
    $moviesArr["itemCount"] = $itemCount;

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $m = array(
            "movieId" => $movieId,
            "name" => $name,
            "year" => $year,
            "description" => $description,
            "imgUrl" => $imgUrl
        );

        array_push($moviesArr["data"], $m);
    }
    echo json_encode($moviesArr);
} else {
    http_response_code(404);
    echo json_encode(
        array("message" => "No record found.")
    );
}
