import React,{useState,useEffect} from 'react'
import axios from './axios'
import './Row.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
const base_urlImage="https://image.tmdb.org/t/p/original";

function Row({title,fetchUrl,isLargeRow}) {
    const[movies,setMovies]  = useState([]);
    const[trailerUrl,setTrailerUrl]=useState('')
        useEffect(()=>{
            async function fetchData(){
                const request  = await axios.get(fetchUrl);
                setMovies(request.data.results)
                return request

                
            }
            fetchData()



        },[fetchUrl])

        const opts ={
            height:"390",
            width:"100%",
            playerVars:{
                autoplay:1,
            }




        }
        const handleClick = (movie) => {
            // set trailer url to stop playing other video if one is playing
            if (trailerUrl) {
              setTrailerUrl("");
            } else {
              console.log(movie.name);
              movieTrailer(movie?.title || movie?.name || movie?.source)
                .then((url) => {
                  const urlParams = new URLSearchParams(new URL(url).search);
                  console.log(urlParams);
                  setTrailerUrl(urlParams.get("v"));
                  console.log("the url for the trailer is " + trailerUrl);
                })
                .catch((error) => console.log(error));
        
              
        
              console.log(trailerUrl);
            }
          };
        



    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie=>(
                   
                    <img  key={movie.id} onClick={()=>handleClick(movie)}  className={`row_poster ${isLargeRow && "row_posterLarge"}`}  src={`${base_urlImage}${isLargeRow ? movie.poster_path:movie.backdrop_path}`} / > 
                ))}
                
            </div>

        {trailerUrl &&    <Youtube videoId={trailerUrl}  opts={opts}/>}
            
        </div>
    )
}

export default Row
