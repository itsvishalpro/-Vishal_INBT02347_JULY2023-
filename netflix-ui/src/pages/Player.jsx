import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import video from "../asset/video1.mp4";
import { useActionData, useNavigate } from "react-router-dom";
export default function Player(){
    const navigate=useNavigate();
    return (
        <div className="Container4">
            <div className="player">
                <div className="back">
                    <BsArrowLeft onClick={()=> navigate(-1)} />
                </div>
                <video src={video} autoPlay loop controls muted></video>
            </div>
        </div>
    );
}