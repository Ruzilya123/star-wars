import React, { useState, useEffect } from "react";
import Card from "./Card";
import './style.css';

const gettingAPI = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const People = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(async () => {
      gettingAPI("https://swapi.dev/api/people/").then((data) => {
        setData(data);
        setLoading(false);
      });
    }, 2000);
  }, []);

  return (
    <div className="people">
      <h1>People</h1>
      {loading ? <h2>Loading...</h2>:
        <ul>
          {data.results?.map((item) => (
            <li key={item.name}>
              <Card url={item.url} />
            </li>
          ))}
        </ul>
      }
    </div>
  );
}

export default People;