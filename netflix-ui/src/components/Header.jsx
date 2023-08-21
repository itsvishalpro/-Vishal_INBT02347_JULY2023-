import React from "react";
import {useNavigate} from "react-router-dom";
import logo from "../asset/logo.png";
import "../index.css";
export default function Header(props) {
    const navigate= useNavigate();
    return (
        <div className="cont1 flex a-center j-between">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <button className="btn1" onClick={()=> navigate(props.login ? "/login" : "/signup")} >
                {props.login ? "Log In" : "Sign In"}
            </button>
        </div>
    );
}