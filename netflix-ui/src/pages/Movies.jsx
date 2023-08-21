import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchMovies, getGenres } from "../store";
import { firebaseAuth } from "../utils/firebase-config";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import { onAuthStateChanged } from "firebase/auth";
import NotAvailable from "../components/NotAvailable";
import "../index.css";
import SelectGenre from "../components/SelectGenre";

export default function Movies(){
    const [isScrolled,setIsScrolled]=useState(false);
    
    const navigate=useNavigate();
    const genresLoaded =useSelector((state) => state.netflix.genresLoaded);
    const movies= useSelector((state) => state.netflix.movies);
    const genres= useSelector((state)=> state.netflix.genres);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getGenres());
    }, []);
    useEffect(()=>{
        if(genresLoaded) dispatch(fetchMovies({type: "movies"}));
    }, [genresLoaded]);
    window.onscroll =()=>{
        setIsScrolled(window.pageYOffset===0 ? false : true);
        return () => (window.onscroll=null);
    };
    onAuthStateChanged(firebaseAuth,(currentUser)=>{
        // if(currentUser) navigate("/")
    });
    return (
        <div className="Container8">
        <div className="navbar">
            <Navbar isScrolled={isScrolled} />
            </div>
            <div className="data">
            <SelectGenre genres={genres} type="movie" />
                {movies.length ? <Slider movies={movies} /> : <NotAvailable />}
            </div>
        </div>
    );
}