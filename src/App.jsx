
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Planets from "./Planets";
import Starships from "./Starships";
import People from "./People";
import Home from "./Home";
import Vehicles from "./Vehicles";
import Films from "./Films";
import Species from "./Species";
import "./style.css";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav className="nav_bar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/planets">Planets</Link>
            </li>
            <li>
              <Link to="/species">Species</Link>
            </li>
            <li>
              <Link to="/vehicles">Vehicles</Link>
            </li>
            <li>
              <Link to="/films">Films</Link>
            </li>
            <li>
              <Link to="/starships">Starships</Link>
            </li>
            <li>
              <Link to="/people">People</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/planets" element={<Planets />}/>
          <Route path="/starships" element={<Starships />}/>
          <Route path="/people" element={<People />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/vehicles" element={<Vehicles />}/>
          <Route path="/films" element={<Films />}/>
          <Route path="/species" element={<Species />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
