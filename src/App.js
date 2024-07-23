import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import MovieList from "./pages/MovieList";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/movie/:id" element={ <MovieDetail /> } />
      <Route path="/movie/list" element={ <MovieList /> } />
    </Routes>
  );
}

export default App;
