import { Button, Col } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import "../styles/movieInfo.css"
import axios from "axios"

const MovieInfo = ({movie, slug}) => {

    const navigate = useNavigate()
    const deleteMovie = () =>{

        axios.post("http://localhost:8080/api/movies/delete.php",{movieId:slug}).then(res=>{navigate("/")})

    }
    console.log(movie.name);
    
    return (
        movie &&
        <>
            <div className="m d-flex">
                <h3 className="movie-info-h1">Movie Information</h3>
                <div className="mt-5 ma-l">
                    <Link to="/edit">
                        <Button variant="primary" size="lg" >
                            Edit
                        </Button>
                    </Link>

                    <Button variant="danger" size="lg" onClick={deleteMovie}>
                        Delete
                    </Button>

                </div>

            </div>
            <Col className="mt-5 ma-r">
                <div>
                    <img className="image" src={movie.imgUrl} alt="Movie" />
                </div>
            </Col>
            <Col className="mt-5 ma-r">
                <h2>name:{movie.name}</h2>
                <h2>Year:{movie.year}</h2>
                <h2>Description:{movie.description}</h2>

            </Col>
        </>
    )
}

export default MovieInfo
