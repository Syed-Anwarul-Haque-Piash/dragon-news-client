import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../../firebase/firebase.config';


const auth=getAuth(app);
const Register = () => {
    const [error,setError]=useState("");
    const [success,setSuccess]=useState("");
    const [show,setShow]=useState(false);
    const handleRegister = (e) => {
        e.preventDefault()
        setError("")
        setSuccess("")
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            setSuccess("User created successfully")
        })
        .catch(error=>{
            console.log(error.message)
            setError(error.message)
        })
        e.target.reset()
    }
    const toggle=()=>{
        setShow(true)
    }
    return (
        <div>
            <form onSubmit={handleRegister}>
                <input type="email" name="email" id="" placeholder='Your email' required />
                <br />
                {show ?
                <input type="text" name="password" id="" />:
                <input type="password" name="password" id="" placeholder='Your password' required />
                }
                
                <br />
                <h4>{show?<button onClick={toggle}>Hide</button>:<button onClick={toggle}>Show</button>}</h4>
                <input type="submit" value="Register" />
            </form>
            <p>{success}</p>
            <p>{error}</p>
        </div>
    );
};

export default Register;