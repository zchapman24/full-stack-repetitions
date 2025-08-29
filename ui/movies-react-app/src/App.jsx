import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [favMovies, setFavMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/movies")
      .then((response) => response.json())
      .then((data) => {
        setFavMovies(data);
      });
  }, []);

  console.log(favMovies);

  return (
    <>
      <h1>My Favorite Movies</h1>
      <ul>
        {favMovies.map((item) => {
          return (
            <li>
              {item.title}, {item.main_character}, {item.year_released}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
