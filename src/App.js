import { Route, Routes } from "react-router-dom";
import "./App.css";
import MovieList from "./pages/MovieList";
import MovieDetails from "./pages/MovieDetails";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="text-[red] bg-[#000] min-h-[100vh] App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/details/:id" element={<MovieDetails />} />

      </Routes>
    </div>
  );
}

export default App;
