import React, { useState } from 'react'
import Button from './Button'


function Tour({tours}) {

    const [showMore, setShowMore] = useState(false);
    
    return (
        <div className="main">
            
            {tours.map((tour) => (
                <div className="single-tour" key={tour.id}>
                    <img alt="IMG" src={tour.image} />
                    <div className="tour-info">
                        <h4>{tour.name}</h4>
                        <p className="tour-price">{tour.price}</p>
                    </div>
                    <span className="tour-text">{showMore ? tour.info : `${tour.info.substring(0, 400)}`} 
                    <button onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
                    </span>
                        
                    <footer >
                        <Button />
                    </footer>
                    

                </div>
           ))}
        </div>
    )
}

export default Tour
