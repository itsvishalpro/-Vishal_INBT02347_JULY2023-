import React, { useState } from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import "../index.css";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";


    

export default function Signup() {
    
    const [showPass,setShowPass] = useState(false);
    const navigate=useNavigate();
    const [formVal,setFormVal] = useState({
        email: "",
        password: "",
    });
    const handleSignIn= async ()=>{
        try{
            const {email,password} = formVal;
            await createUserWithEmailAndPassword(firebaseAuth,email,password);
        } catch(err){

        }
    };

    onAuthStateChanged(firebaseAuth,(currentUser)=>{
        if(currentUser) navigate("/")
    });

    return (
         <div className="Container" showPass={showPass}>
        <BackgroundImage />
        <div className="content">

        <Header login />
        <div className="body flex column a-center j-center">
            <div className="text flex column">
                <h1>Unlimited movies, TV shoes and more</h1>
                <h4>Watch anywhere. Cancel anytime.</h4>
                <h6>Ready to watch? Enter your email to create or restart membership</h6>
            </div>
            <div className="form">
                
                <input type="email" placeholder="Email Address" name="email" 
                    value={formVal.email} 
                    onChange={(e)=>
                    setFormVal({
                        ...formVal,
                        [e.target.name]: e.target.value})} 

                />
                {
                    showPass && <input type="password" placeholder="Enter your password" name="password" 
                        value={formVal.password} 
                    onChange={(e)=>
                    setFormVal({
                        ...formVal,
                        [e.target.name]: e.target.value})} 
                    />
                }
                {
                    !showPass && <button onClick={()=> setShowPass(true)}>Get Started</button>
                }
            </div>
            <button onClick={handleSignIn} id="btn">Sign Up</button>
        </div>
        </div>
    </div>
    );
}
  
   
