<?php
class Movie
{
    // Connection
    private $conn;

    // Table
    private $db_table = "movie";

    // Columns
    public $movieId;
    public $name;
    public $year;
    public $description;
    public $imgUrl;
    public $searchQuery;

    // Db connection
    public function __construct($db)
    {
        $this->conn = $db;
    }

    // GET ALL
    public function getMovies()
    {
        $sqlQuery = "SELECT * FROM " . $this->db_table . "";
        $stmt = $this->conn->prepare($sqlQuery);
        $stmt->execute();
        return $stmt;
    }


    // CREATE
    public function createMovie()
    {
        $sqlQuery = "INSERT INTO
                     " . $this->db_table . "
                 SET
                     name = :name, 
                     year = :year, 
                     description = :description, 
                     imgUrl = :imgUrl";

        $stmt = $this->conn->prepare($sqlQuery);

        // sanitize
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->year = htmlspecialchars(strip_tags($this->year));
        $this->description = htmlspecialchars(strip_tags($this->description));
        $this->imgUrl = htmlspecialchars(strip_tags($this->imgUrl));

        // bind data
        $stmt->bindParam(":name", $this->name);
        $stmt->bindParam(":year", $this->year);
        $stmt->bindParam(":description", $this->description);
        $stmt->bindParam(":imgUrl", $this->imgUrl);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

    // READ single
    public function getSingleMovie()
    {
        $sqlQuery = 'SELECT
                     *
                     FROM ' . $this->db_table . '
                 WHERE movieId = ?
                 ';

        $stmt = $this->conn->prepare($sqlQuery);

        $stmt->bindParam(1, $this->movieId);

        $stmt->execute();

        $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);

        $this->name = $dataRow['name'];
        $this->year = $dataRow['year'];
        $this->description = $dataRow['description'];
        $this->imgUrl = $dataRow['imgUrl'];
    }


    // Search Movies
    public function search()
    {
        // create query
        $query = 'select * from ' . $this->db_table . ' where name=:name or year=:year';

        // Prepare statement
        $statement = $this->conn->prepare($query);

        // Bind the data
        if (isset($this->searchQuery)) {
            $statement->bindParam(':name', $this->searchQuery);
            $statement->bindParam(':year', $this->searchQuery);
        } else {
            $query = 'select * from ' . $this->table;
        }

        // Execute query
        $statement->execute();

        return $statement;
    }

    // UPDATE
    public function updateMovie()
    {


        $stmt = $this->conn->prepare($sqlQuery = "UPDATE " . $this->db_table . " SET name = :name, 
        year = :year, 
                 description = :description, 
                 imgUrl = :imgUrl WHERE movieId = :movieId
             ");

        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->year = htmlspecialchars(strip_tags($this->year));
        $this->description = htmlspecialchars(strip_tags($this->description));
        if ($this->imgUrl) {
            $this->imgUrl = htmlspecialchars(strip_tags($this->imgUrl));
        }
        $this->movieId = htmlspecialchars(strip_tags($this->movieId));

        // bind data
        $stmt->bindParam(":name", $this->name);
        $stmt->bindParam(":year", $this->year);
        $stmt->bindParam(":description", $this->description);
        if ($this->imgUrl) {
            $stmt->bindParam(":imgUrl", $this->imgUrl);
        }

        $stmt->bindParam(":movieId", $this->movieId);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

    // DELETE
    function deleteMovie()
    {
        $sqlQuery = "DELETE FROM " . $this->db_table . " WHERE movieId = ?";
        $stmt = $this->conn->prepare($sqlQuery);

        $this->movieId = htmlspecialchars(strip_tags($this->movieId));

        $stmt->bindParam(1, $this->movieId);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }
}
