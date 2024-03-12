import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from "../context/AuthContext";
import axios from "axios";
axios.defaults.withCredentials = true;

const Navbar = () => {

  const { isAuth, setIsAuth, setUser } = useContext(AuthContext);

  const logoutUser = async () => {
    const res = await axios.post("https://finalauthbackend.onrender.com/api/logout", null, {
      withCredentials: true,
    });
    if (res.status == 200) {
      return res;
    }
    return new Error("Unable to logout user");
  };

  const handleLogout = async () => {
    logoutUser()
      .then(() => {
        setIsAuth(false);
        setUser({});
      })
      .catch((err) => console.log(err));
  };


  return (
    <div className="flex flex-col lg:flex-row justify-between px-2 py-3 bg-purple-600 text-white">
      <h2 className="font-bold text-2xl text-center">MERN AUTHENTICATION</h2>
      <div className="flex gap-5 justify-center">
        <Link to="/" className="list-none text-xl cursor-pointer">
          Home
        </Link>
        <Link to="/login" className={`list-none text-xl cursor-pointer ${isAuth && "hidden"}`}>
          Login
        </Link>
        <Link onClick={handleLogout} to="#" className={`list-none text-xl cursor-pointer ${!isAuth && "hidden"}`}>
          Log out
        </Link>
        <Link to="/signup" className="list-none text-xl cursor-pointer">
          Signup
        </Link>
      </div>
    </div>
  )
}

export default Navbar