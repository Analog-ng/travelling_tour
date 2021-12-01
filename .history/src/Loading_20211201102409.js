import React, {useState, useEffect} from 'react';
import url from "./url"


function Loading()  {
    const {titles} = useState(true);
    const {load, setLoad} = useState(true);
    const {isError, setIsError} = useState(false);
    const {users, setUsers} = useState("default users");

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
            setUsers(login);
            setLoad(false);

        })
        .catch((err) => {
            console.log(err);
        })
    })

     

  if (load) { return (
          <div className="loading">Loading</div>
  )
              } else{
  return (
    <div className="section">
      <h2 className="title">
        Our Tours
        <hr className="underline" />
      </h2>

    </div>
  )
    }


}

export default Loading