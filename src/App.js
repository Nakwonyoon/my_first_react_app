import React from "react";
import { useEffect  } from "react";
import { useState } from "react";
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?i=tt3896198&apikey=b40f0395"




const App = () =>{
    // useStates are used to store data
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    // Search Moives Function to fetch data from API
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        setMovies(data.Search)
    }

 
//  render the movies on the screen
    useEffect(() => {
        searchMovies(searchTerm) 
    }, [searchTerm])
    
    
    return(
        <div>
           <h1>MovieLand</h1>
              <div className="search">
            
                <input 
                type="text" 
                placeholder="Search..."
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
                />
                <img
                src={SearchIcon}
                alt="search"
                onClick={(e) => searchMovies(searchTerm)}
                />   
             </div> 

                {movies?.length > 0 ? (
                        <div className="container">
                        {movies.map((movie) => (
                            <MovieCard 
                            movie={movie}
                            key={movie.imdbID}
                             />
                        ))}
                    </div>
                    ) : (
                        <div className="empty">
                            <h2>No Movies Found</h2>
                        </div>
                    )}

          
        </div>
    )
}

export default App;