import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import video from "../asset/video.mp4";
import {IoPlayCircleSharp} from "react-icons/io5"
import {RiThumbUpFill,RiThumbDownFill} from "react-icons/ri"
import {BsCheck} from "react-icons/bs"
import {AiOutlinePlus} from "react-icons/ai"
import {BiChevronDown} from "react-icons/bi"
import "../index.css";

export default React.memo (function Card({movieData, isLiked=false}) {
    const [isHovered,setIsHovered]=useState(false);
    const navigate= useNavigate();
    return (
        <div className="Container6" 
            onMouseEnter={()=> setIsHovered(true)} 
            onMouseLeave={()=> setIsHovered(false)}
        >
            <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt="movie" />

           {isHovered && (
            <div className="hover">
                <div className="image-video-container">
                <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt="movie" onClick={()=>navigate("/player")}/>
                <video src={video} autoPlay loop muted onClick={()=>navigate("/player")} />
                </div>
                <div className="info-container flex column">
                    <h3 className="name" onClick={()=> navigate("/player")}>{movieData.name}</h3>
                    <div className="icons flex j-between">
                        <div className="controls flex">
                            <IoPlayCircleSharp 
                                title="play"
                                onClick={()=>navigate("/player")}
                            />
                            <RiThumbUpFill title="Like" />
                            <RiThumbDownFill title="Dislike" />
                            {
                                isLiked ?(
                                    <BsCheck title="Remove from List"/>
                                ): (
                                    <AiOutlinePlus title="Add to my List" />
                                )
                            }
                        </div>
                        <div className="info">
                            <BiChevronDown title="More Info" />
                        </div>
                    </div>
                    <div className="genres flex">
                        <ul className="flex">
                            {movieData.genres.map((genre)=>{
                                <li key={genre}>{genre}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
           )}
        </div>
    )
});
