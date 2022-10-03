import React from "react";
import { movies } from "../../movies/Movies.js";
import MovieCard from "../movieCard/MovieCard.jsx";
import "./MoviesStatistics.css";

const MoviesStatitics=()=>{
    return(
        <table className="statistics-table">
            <tbody>
                <tr>
                    <td>Total amount of movies:</td>
                    <td>{movies.length}</td>
                </tr>
                <tr>
                    <td>Number of comedy movies:</td>
                    <td>{movies.filter(movie=>movie.genre==='Comedy').length}</td>
                </tr>
                <tr>
                    <td>Number of movies from 2012:</td>
                    <td>{movies.filter(movie=>movie.year===2012).length}</td>
                </tr>
                <tr>
                    <td>Movies from 1990 to 1999:</td>
                    <td className="statisctics-cards">
                        {movies.filter(movie=>movie.year>=1990 && movie.year<=1999).map(movie=>{
                            return <MovieCard
                                        name={movie.name} 
                                        genre={movie.genre} 
                                        year={movie.year} 
                                        coverImage={movie.coverImage} 
                                        actors={movie.actors}
                            />
                        })}    
                    </td>
                </tr>
                <tr>
                    <td>Drama movies from 2000:</td>
                    <td>
                        {movies.filter(movie=>movie.year>=2000 && movie.genre==="Drama").map((movie,index,array)=>{
                            if(index==array.length-1)
                                return movie.name
                            else
                                return movie.name+", "
                        })}
                    </td>
                </tr>
                <tr>
                    <td>Last movie in list from 2010:</td>
                    <td>
                        {movies.filter(movie=>movie.year===2010).map((movie,index,array)=>{
                            if(index==array.length-1){
                                return <MovieCard
                                            name={movie.name} 
                                            genre={movie.genre} 
                                            year={movie.year} 
                                            coverImage={movie.coverImage} 
                                            actors={movie.actors}
                                        />
                            }
                        })}
                    </td>
                </tr>
                <tr>
                    <td>Movies covers with Leonardo DiCaprio:</td>
                    <td className="statisctics-cards">
                        {movies.filter(movie=>{
                            if(movie.actors.some(actor=>actor==="Leonardo DiCaprio"))
                                return true;
                            else 
                                return false;
                        }).map(movie=>{
                            return <img className="statistics-image" src={movie.coverImage} alt={movie.name}/>
                        })}
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default MoviesStatitics;