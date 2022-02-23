import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import "../styles/movieCard.css"

const MovieCard = ({ film, md }) => {

    
    return (

        <Col xs={6} md={md}>
            <Link to={`/movie/${film.movieId}`} style={{ textDecoration: 'none' }}>
                <Card className='card'>
                    <Card.Img variant="top" src={film.imgUrl} />
                </Card>
                <div className="mt-3 mb-5"><span className="name">{film.name}</span></div>
            </Link>
        </Col>

    )
}

MovieCard.propTypes = {
    movieName: PropTypes.string,
}

export default MovieCard

