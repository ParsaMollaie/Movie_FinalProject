import { useEffect, useState } from "react";
import { Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import MovieInfo from "../components/MovieInfo"

const Movie = () => {

  const[data,setData] = useState()

  useEffect(() => {
    getMovie()
  }, []);


  const { slug } = useParams()
  

  const getMovie = () => {
    var axios = require('axios');
   
    var config = {
      method: 'get',
      url: `http://localhost:8080/api/movies/read_one.php?movieId=${slug}`,
      headers: {
        'Content-Type': 'application/json'
      },
      
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setData(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="container">
      <Row>
        
        {data&&<MovieInfo  movie={data} slug ={slug} />}
      </Row>

    </div>
  )
}

export default Movie
