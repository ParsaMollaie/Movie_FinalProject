import { Button, Form, FormControl, Row } from "react-bootstrap"
import MovieCard from "../components/MovieCard"
import { BsFillGrid3X3GapFill} from "react-icons/bs"
import { useEffect, useState } from 'react'
import axios from "axios"

const Home = () => {

  const [text, setText] = useState('')
  const [view, setView] = useState(4)
  const [films, setFilm] = useState([])
  const iconStyles = { fontSize: "2em" };
  const list = () => {
    if (view === 4) {
      setView(12);
    } else {
      setView(4);
    }

  }

  useEffect(() => {
    getAllMovie();
  }, []);

  const getAllMovie = async () => {

    try {

      const response = await axios.get("http://localhost:8080/api/movies/read.php");
      console.log(response.data.data);
      setFilm(response.data.data)

    } catch (error) {

      console.log(error);
    }

  }

  return (
    <>
      <div className="container-fluid border">
        <div className="container mb-3">
          <div className="margin">
            <Form className="d-flex">
              <FormControl
                type="text"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={text}
                onChange={(e) => setText(e.target.value)} />
              <Button className='btn' variant="outline-success">Search</Button>
            </Form>
          </div>
          <div>
            <BsFillGrid3X3GapFill style={iconStyles} onClick={list} />
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <Row>
          {films.map(film => {return <MovieCard film = {film} md = {view} />})}
        </Row>
      </div>
    </>
  )
}

export default Home
