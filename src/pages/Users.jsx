import React, { useContext, useEffect } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;  //this is very important
import AuthContext from "../context/AuthContext";

let firstRender = true;

const Users = () => {
  // const [user, setUser] = useState("")  //here we will be removing this because now we are using the context to store this globaly
  const {user, setUser} = useContext(AuthContext)

  const refreshToken = async () => {
    
    const res = await axios.get("https://finalauthbackend.onrender.com/api/refresh", {
      withCredentials: true,
    });

    const data = await res.data;
    
    setUser(data.message);
    
    return data;
  }
  
  const sendRequest = async () => {
    const res = await axios.get("https://finalauthbackend.onrender.com/api/user", {
      withCredentials: true,  // here we have given the option to this get method withCredentials as true
    });
    const data = await res.data;
    setUser(data.message);  //because we have send the user data in message object
  };

  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      sendRequest();
    }
    let interval = setInterval(() => {
      refreshToken();
    }, 1000 * 29);

    return () => clearInterval(interval);
  }, [user]);

  return (
    <div className="flex justify-center items-center h-[80vh]">
      {user && <h1>Welcome {user.name}</h1>}
    </div>
  )
}

export default Users