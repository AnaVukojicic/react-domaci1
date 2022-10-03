import React, { useState } from "react";
import "./Movies.css";
import FindMovie from "../findMovie/FindMovie";
import MoviesList from "../moviesList/MoviesList";
import MoviesStatitics from "../moviesStatistics/MoviesStatistics";

const Movies=()=>{
    const [component,setComponent]=useState(<MoviesList/>)
    
    return(
        <div>
            <div className="button-wrapper">
                <button className="button" onClick={()=>setComponent(<MoviesList/>)}>List</button>
                <button className="button" onClick={()=>setComponent(<MoviesStatitics/>)}>Statistics</button>
                <button className="button" onClick={()=>setComponent(<FindMovie/>)}>Search</button>
            </div>
            <div>
                {component}
            </div>
        </div>
    )
}

export default Movies;