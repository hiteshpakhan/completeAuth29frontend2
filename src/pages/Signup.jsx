import { useState } from "react"
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const res = await axios.post("https://finalauthbackend.onrender.com/api/signup", {
      name,
      email,
      password,
    });
    const data = await res.data;
    console.log(data);
    return data;
  }

  return (
    <div className="flex flex-col gap-3 rounded-md shadow-md w-fit p-3 mx-auto my-[30vh]">
      <input
        type="text" name="name" id="name" placeholder="Enter your name"
        value={name} onChange={(e) => setName(e.target.value)}
        autoComplete="off"
        className="px-2 border-2 rounded-lg py-2 w-[300px] border-purple-100 transition-all delay-100 ease-in-out focus:border-purple-500 outline-none"
      />
      <input
        type="email" name="email" id="email" placeholder="Enter your email"
        value={email} onChange={(e) => setEmail(e.target.value)}
        autoComplete="off"
        className="px-2 border-2 rounded-lg py-2 w-[300px] border-purple-100 transition-all delay-100 ease-in-out focus:border-purple-500 outline-none"
      />
      <input
        type="password" name="password" id="password" placeholder="Enter your password"
        value={password} onChange={(e) => setPassword(e.target.value)}
        className="px-2 border-2 rounded-lg py-2 w-[300px] border-purple-100 transition-all delay-100 ease-in-out focus:border-purple-500 outline-none"
      />
      <button
        type="submit"
        className="px-3 py-2 bg-purple-500 rounded-full text-white shadow-md"
        onClick={handleSubmit}
      >
        Sign up
      </button>
    </div>
  )
}

export default Signup