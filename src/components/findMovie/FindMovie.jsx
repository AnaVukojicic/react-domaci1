import React, { useEffect, useState } from "react";
import { movies } from "../../movies/Movies";
import MovieCard from "../movieCard/MovieCard";
import "../moviesList/MoviesList.css";
import "./FindMovie.css"

const FindMovie=()=>{
    const [query,setQuery]=useState('');
    const [newMovies,setMovies]=useState([]);

    useEffect(()=>{
        setMovies(movies.filter(movie=>movie.name.toLowerCase().includes(query)));
    },[query]);

    return(
        <div>
            <input className="input" type={'text'} value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Find movie"/>
            <div className="container">
                {newMovies.map(movie=>{
                    return <MovieCard 
                                name={movie.name} 
                                genre={movie.genre} 
                                year={movie.year} 
                                coverImage={movie.coverImage} 
                                actors={movie.actors}
                            />
                })}
            </div>
        </div>
    )
}

export default FindMovie;