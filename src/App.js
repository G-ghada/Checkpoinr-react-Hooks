import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MoviesList from "./components/MoviesList";
import Layout from "./components/Layout";
import NavBar from "./components/NavBar";
import AddMovie from "./components/AddMovie";
import MovieItem from "./components/MovieItem";
import Details from "./components/Details";

function App() {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState();
  console.log("rating: ", rating);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<MoviesList search={search} rating={rating} />}
          />
            <Route path="AddMovie" element={<AddMovie />} />
            <Route path="MovieItem" element={<MovieItem />} />
            <Route path="Details/:id" element={<Details />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
