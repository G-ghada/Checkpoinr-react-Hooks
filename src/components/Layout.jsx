import React, { useState } from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function Layout() {
    const [search, setSearch] = useState("");
    const [rating, setRating] = useState();
    
  return (
    <div>
      <NavBar setSearch={setSearch} setRating={setRating} rating={rating} />
      <Outlet />
    </div>
  );
}

export default Layout;
