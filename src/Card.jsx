import React, { useState, useEffect } from "react";
import './style.css';

const gettingAPI = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const Card = ({ url }) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    gettingAPI(url).then((data) => setData(data));
  }, [url]);

  return (
    <div className="cards">
      <h3 style={{fontSize: "20px"}}>{data.name}</h3>
      {data.climate === undefined ? null : <p>Climate: {data.climate}</p>}
      {data.terrain === undefined ? null : <p>Terrain: {data.terrain}</p>}
      {data.diameter === undefined ? null : <p>Diameter: {data.diameter}</p>}
      {data.rotation_period === undefined ? null : <p>Rotation period: {data.rotation_period}</p>}
      {data.orbital_period === undefined ? null : <p>Orbital period: {data.orbital_period}</p>}
      {data.gravity === undefined ? null : <p>Gravity: {data.gravity}</p>}
      {data.surface_water === undefined ? null : <p>Surface water: {data.surface_water}</p>}
      {data.population === undefined ? null : <p>Population: {data.population}</p>}
      {data.model === undefined ? null : <p>Model: {data.model}</p>}
      {data.manufacturer === undefined ? null : <p>Manufacturer: {data.manufacturer}</p>}
      {data.max_atmosphering_speed === undefined ? null : <p>Max atmosphering speed: {data.max_atmosphering_speed}</p>}
      {data.crew === undefined ? null : <p>Crew: {data.crew}</p>}
      {data.vehicle_class === undefined ? null : <p>Vehicle class: {data.vehicle_class}</p>}
      {data.birth_year === undefined ? null : <p>Birth year: {data.birth_year}</p>}
      {data.height === undefined ? null : <p>Height: {data.height}</p>}
      {data.mass === undefined ? null : <p>Mass: {data.mass}</p>}
      {data.hair_color === undefined ? null : <p>Hair color: {data.hair_color}</p>}
      {data.classification === undefined ? null : <p>Classification: {data.classification}</p>}
      {data.designation === undefined ? null : <p>Designation: {data.designation}</p>}
      {data.average_height === undefined ? null : <p>Average height: {data.average_height}</p>}
      {data.average_lifespan === undefined ? null : <p>Average lifespan: {data.average_lifespan}</p>}
      {data.episode_id === undefined ? null : <p>Episode id: {data.episode_id}</p>}
      {data.opening_crawl === undefined ? null : <p>Opening crawl: {data.opening_crawl}</p>}
      {data.director === undefined ? null : <p>Director: {data.director}</p>}
      {data.producer === undefined ? null : <p>Producer: {data.producer}</p>}
      {data.release_date === undefined ? null : <p>Release date: {data.release_date}</p>}
    </div>
  );
}

export default Card;