import React from "react";



const MovieCard = ({ movie }) => {
    <div className="movie">
    <div>
        <p>{movie.year}</p>
    </div>
    <div>
        <img alt = {movie.title}
        src ={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'}/>
    </div>
    <div>
        <span>{movie.type}Test</span>
        <h3>{movie.title}</h3>
    </div>
</div>
}


export default MovieCard;   