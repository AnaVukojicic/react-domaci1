import React from "react";
import { movies } from "../../movies/Movies.js";
import MovieCard from "../movieCard/MovieCard";
import "./MoviesList.css"

const MoviesList=()=>{
    return(
        <div className="container">
            {movies.map(movie=>{
                return <MovieCard 
                            name={movie.name} 
                            genre={movie.genre} 
                            year={movie.year} 
                            coverImage={movie.coverImage} 
                            actors={movie.actors}
                        />
            })}
        </div>
    )
}

export default MoviesList;