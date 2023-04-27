import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import app from "../../firebase/firebase.config";


const auth=getAuth(app);
const Login = () => {

    const [error,setError]=useState("")
    const [success,setSuccess]=useState("")
    const handleLogin=(e)=>{
        e.preventDefault();
        setError("")
        setSuccess("")
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email, password);
        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            setSuccess("user login successfully")
        })
        .catch(error=>{
            console.log(error);
            setError(error.message)
        })
        e.target.reset()
    }
  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          id=""
          placeholder="Your email"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Your password"
          required
        />
        <br />
        <input type="submit" value="Login" />
      </form>
      <p>{success}</p>
      <p>{error}</p>
    </div>
  );
};

export default Login;
