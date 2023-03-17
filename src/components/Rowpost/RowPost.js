import React, { useEffect, useState } from "react";
import {  API_KEY, imageUrl } from "../../Constants/constant";
import Axios from "../../Constants/axios";
import "./RowPost.css";
import YouTube from 'react-youtube';

function RowPost(props) {
  const [movie, setMovie] = useState([]);
  const [movieVedio ,setMovieVedio ] = useState()
  const [movieVedioDisplay,setmovieVedioDisplay] = useState(false)

  useEffect(() => {
    Axios.get(props.url).then((res) => {
        setMovie(res.data.results);
      }).catch((err) => {
        alert("RowPost API error");
      });
  }, []);



  const opts = {
    height: '390',
    width: '100%',
    
  };
  
 

  let showMovie = (movieid)=>{
if(setmovieVedioDisplay){
  setmovieVedioDisplay(false)
  Axios.get(`/movie/${movieid}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
    if(res.data.results !== 0){
      setMovieVedio(res.data.results)
      setmovieVedioDisplay(true)
    }else{
      alert('Sorry For inconvenience. The Movie Is On Updation ')
    }
  })
}else{
    Axios.get(`/movie/${movieid}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
      if(res.data.results !== 0){
        setMovieVedio(res.data.results)
        setmovieVedioDisplay(true)
      }else{
        alert('Sorry For inconvenience. The Movie Is On Updation ')
      }
    })
  }
  }

  return (
    <div className="row">
      <h2>{props.title}</h2>

      <div className="posters">
        {movie.map((obj) => 
          
            <img key={obj.id} src={imageUrl + obj.poster_path} alt="movie-poster" className={props.isLarge ? "large-poster" : "small-poster"} onClick={()=>{showMovie(obj.id)}} />

        )}
      </div>
      { movieVedioDisplay && <div className="vedioDisplay-outerDiv">
        <div className="vedioDisplay-innerDiv">
          <button className="closeButton" onClick={()=>{setmovieVedioDisplay(false)}}><b>X</b></button>
          <YouTube videoId={movieVedio[0].key} opts={opts} />
          </div>
        </div> }
      
    </div>
  );
}

export default RowPost;
