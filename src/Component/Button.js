import React, { useState } from 'react'
import useFetch from "./useFetch";


const Button = () => {

    const {data:tours} = useFetch('https://course-api.com/react-tours-project'); 

    

    const handleDelete= (tours) => {
        fetch(`https://course-api.com/react-tours-project'${tours.id}`, {
            method: 'DELETE'
        });
    }

    return (
        <div className="delete-btn" onClick={handleDelete} >
            Not Interested
        </div>
    )
}

export default Button
