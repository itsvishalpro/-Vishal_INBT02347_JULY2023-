import React, { useState } from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import "../index.css";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";


    

export default function Login() {
    
  
    const navigate=useNavigate();
    const [formVal,setFormVal] = useState({
        email: "",
        password: "",
    });
    const handleLogIn= async ()=>{
        try{
            const {email,password} = formVal;
            await signInWithEmailAndPassword(firebaseAuth,email,password);
        } catch(err){

        }
    };

    onAuthStateChanged(firebaseAuth,(currentUser)=>{
        if(currentUser) navigate("/")
    });

    return (
         <div className="Container" >
            <BackgroundImage />
            <div className="content">
                <Header />
                <div className="form-container flex column a-center j-center">
                    <div className="form1 flex column a-center j-center">
                        <div className="title">
                            <h3>Login</h3>
                        </div>
                        <div className="container1 flex column">
                        <input type="email" placeholder="Email Address" name="email" 
                    value={formVal.email} 
                    onChange={(e)=>
                    setFormVal({
                        ...formVal,
                        [e.target.name]: e.target.value})} 

                />
                 <input type="password" placeholder="Enter your password" name="password" 
                        value={formVal.password} 
                    onChange={(e)=>
                    setFormVal({
                        ...formVal,
                        [e.target.name]: e.target.value})} 
                    />
                <button onClick={handleLogIn}>Log In</button>
               
                        </div>
                    </div>
                </div>
            </div>
        
    </div>
    );
}
  
   
