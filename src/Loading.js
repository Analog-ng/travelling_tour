<<<<<<< HEAD
import React, {useState, useEffect} from 'react';
import url from "./url"


function Loading()  {
    const {titles} = useState(true);
    const {load, setLoad} = useState(true);
    const {isError, setIsError} = useState(false);
    const {user, setUser} = useState("default users");

    useEffect(()=>{
        document.title = `Tour (${titles})`

        fetch (url)
        .then((resp) => {
            if (resp.status >= 200 && resp.status <= 299) {
                return resp.json();
            } else {
                setIsError(true);
                setLoad(false);
                throw new Error(resp.statusText);
            }
        })
        .then((data) => {
            const { login } = data;
            setUser(login);
            setLoad(false);

        })
        .catch((err) => {
            console.log(err);
        })
    })

     

  if (load) { return (
          <div className="loading">Loading</div>
  )} else if (isError) {
             return (
             <div>
             <h1>Error details, cross check again...</h1>
             </div>
  )} else{
  return (
    <div className="section">
      <h2 className="title">
        Our Tours
        <hr className="underline" />
      </h2>
      <div>
     <h1>{user}</h1>
     </div>

    </div>
  )
    }

}
=======
import React from "react";

const Loading = () => {
  return <div className="loading">Loading...</div>;
};
>>>>>>> 509f1047db51c12fc3a9eaa763d9f9da1d52e434

export default Loading;
