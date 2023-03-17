import React, { useEffect, useState } from "react";
import { API_KEY } from "../../Constants/constant";
import { imageUrl } from "../../Constants/constant";
import "./Banner.css";
import Axios from "../../Constants/axios";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    let random = Math.floor(Math.random() * 20);
    Axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        setMovie(res.data.results[random]);
      })
      .catch((err) => {
        alert("banner api error");
      });
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
    >
      <div className="content">
        <h1 className="title">
          {movie ? (movie.name ? movie.name : movie.title) : ""}
        </h1>
        <div className="banner-Buttons">
          <button className="button">Play</button>
          <button className="button">Movie List</button>
        </div>
        <div className="description-div">
          <p className="description">{movie ? movie.overview : ""}</p>
        </div>
      </div>
      <div className="fade-bottom"></div>
    </div>
  );
}

export default Banner;
