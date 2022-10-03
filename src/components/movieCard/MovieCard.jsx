import React from "react";
import "./MovieCard.css"

const MovieCard=({name,genre,year,coverImage,actors})=>{
    return(
        <div className="card">
            <div>
                <img className="image" src={coverImage} alt={name}/>
            </div>
            <div className="card-info">
                <p className="movie-title">{name}</p>
                <p>{genre}</p>
                <p>{year}</p>
                <p>
                    <b>Actors</b>:   
                    {actors.map((actor,index,array)=>{
                        if(index===array.length-1){
                            return actor
                        }else{
                            return actor+", "
                        }
                    })}
                </p>
            </div>
        </div>
    )
}

export default MovieCard;