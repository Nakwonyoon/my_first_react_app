import React from "react";
import { useEffect  } from "react";
import './App.css';
import SearchIcon from './search.svg'

// b40f0395


const API_URL = "http://www.omdbapi.com?i=tt3896198&apikey=b40f0395"

const App = () =>{
    
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        console.log(data.Search)
    }


    
    useEffect(() => {
        searchMovies("Spider")
    }, [])
    
    
    return(
        <div>
           <h1>MovieLand</h1>
              <div className="search">
                <input 
                type="text" 
                placeholder="Search..."
                onChange={(e) => {}}
                />

                <img
                src={SearchIcon}
                alt="search"
                onClick={(e) => {}}
                />   
                         
              </div> 
        </div>
    )
}

export default App;