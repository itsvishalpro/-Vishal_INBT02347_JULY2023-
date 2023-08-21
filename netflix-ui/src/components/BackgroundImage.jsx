import React from "react";
import styled from "styled-components";
import background from "../asset/login.jpg";
import "../index.css";

export default function BackgroundImage() {
    return (
        <div className="container">
            <img className="img" src={background} alt="background" />
        </div>
    );
}
// const Container=styled.div`
//      height:100vh;
//     width:100vw;
//     img{
//         height:100vh;
//         width;100vw;
//     }
// `; 