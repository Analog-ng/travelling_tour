import React from 'react'
import Tour from './Tour';
import Header from './Header';
import useFetch from "./useFetch";


function Tours() {

    const {data:tours, isPending, error} = useFetch('https://course-api.com/react-tours-project'); 
    
    return (
        
            <div className="main">
                <Header/>
                {error && <div>{error}</div>}
                {isPending && <h2   className="loading">Loading....</h2>}
                {tours && <Tour tours={tours}  />}
            </div>
    
    )
}

export default Tours
