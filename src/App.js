import React, { useState } from "react";
import "./App.css";
import MoviesList from "./components/MoviesList";
import NavBar from "./components/NavBar";
function App() {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState();
  console.log("rating: ", rating);
  return (
    <div className="App">
      <NavBar setSearch={setSearch} setRating={setRating} rating={rating} />
      <MoviesList search={search} rating={rating} />
    </div>
  );
}

export default App;
