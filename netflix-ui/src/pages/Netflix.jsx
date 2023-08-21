import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import backgroundImage from "../asset/home.jpg";
import MovieLogo from "../asset/homeTitle.webp";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGenres } from "../store";
import Slider from "../components/Slider";

export default function Netflix() {
    const [isScrolled,setIsScrolled]=useState(false);
    
    const navigate=useNavigate();
    const genresLoaded =useSelector((state) => state.netflix.genresLoaded);
    const movies= useSelector((state) => state.netflix.movies);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getGenres());
    }, []);
    useEffect(()=>{
        if(genresLoaded) dispatch(fetchMovies({type: "all"}));
    }, [genresLoaded]);
    window.onscroll =()=>{
        setIsScrolled(window.pageYOffset ===0 ? false : true);
        return () => (window.onscroll=null);
    };
    // console.log(movies);
    return (
        <div className="Container3">
        
            <Navbar isScrolled={isScrolled} />
            <div className="hero">
                <img src={backgroundImage} alt="background" className="background-img" />
                <div className="container4">
                    <div className="logo">
                        <img src={MovieLogo} alt="Movie logo" />
                    </div>
                    <div className="buttons flex">
                        <button className="flex j-center a-center" onClick={()=>navigate('/player')}>
                            <FaPlay /> Play
                        </button>
                        <button className="flex j-center a-center">
                            <AiOutlineInfoCircle /> More Info
                        </button>
                    </div>
                </div>
            </div>
            <Slider movies={movies}/>
        </div>
    );
}