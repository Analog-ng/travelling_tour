<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import url from "./url"


function Tours() {
    const [users, setUsers] = useState([]);
    const [showMore, setshowMore] = useState(false);
    const deleteTour = (id) => {
        if (users !== null) {
          setUsers(users.filter((user) => user.id !== id));
        }
      };

    const fetchUser = async () => {
        const request = await fetch(url);
        const resp = await request.json();
        setUsers(resp);
    };

    useEffect(() => {
        fetchUser();
    }, []);
    return (
        <ul className="single-tour">
            {users.map((user) => {
                const { id, name, info, image, price } = user;
               return (
                <li key={id}>
                    <img src={image} alt={name} />
     
                    <div>
                        <div className="tour-info">
                        <h4>{name}</h4>
                        <span className="tour-price">{price}</span>
                        </div>
                        <div>
                        <p className="tour-info">
                        {!showMore ? `${info.slice(0, 200)} ...` : info}
                        <button className="btn" onClick={() => setshowMore(!showMore)}>
                        {showMore ? "Show Less." : "Show More"}
                        </button>
                        </p>
                        </div>
                        <footer>
                        <button className="delete-btn" onClick={() => deleteTour(user.id)}>
                        Not Interested
                        </button>
                        </footer>
                    </div>

                </li>
            );    
            })}
           
        </ul>
    );
}

export default Tours


=======
import React, { useState } from "react";

const Tours = ({ tour, deleteTour }) => {
  const [showMore, setshowMore] = useState(false);
  return (
    <div className="single-tour">
      <img src={tour.image} alt="" />

      <div className="tour-info">
        <h4>{tour.name}</h4>
        <span className="tour-price">{tour.price}</span>
      </div>
      <div>
        <p>
          {!showMore ? `${tour.info.slice(0, 200)} ...` : tour.info}
          <button className="btn" onClick={() => setshowMore(!showMore)}>
            {showMore ? "Show Less." : "Show More"}
          </button>
        </p>
      </div>
      <footer>
        <button className="delete-btn" onClick={() => deleteTour(tour.id)}>
          Not Interested
        </button>
      </footer>
    </div>
  );
};

export default Tours;
>>>>>>> 509f1047db51c12fc3a9eaa763d9f9da1d52e434
