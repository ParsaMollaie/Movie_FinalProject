import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Movie from "./Pages/Movie";
import Home from "./Pages/Home";
import AddMovie from "./Pages/AddMovie";
import Edit from "./Pages/Edit";
import Header from "./components/Header";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header title='Movie' />    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:slug" element={<Movie />} />
          <Route path="/addMovie" element={<AddMovie />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
