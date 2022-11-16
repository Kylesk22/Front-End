import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import "./anytime.css";
import AnyFit from "../../../img/Anytime_Fitness_logo_PNG6.png";

export const Anytime = ()=> {
    const { store, actions } = useContext(Context);

 

  


    return(
    <>
        <img className="image" src={AnyFit} style={{margin: "auto"}}>
        

       
        </img>
        <div className="row" style={{textAlign: "center"}}>
            <div className= "col-6" id= "post">
                <h4>Post</h4>
            </div>
            <div className = "col-6" id= "events">
                <h4>Events</h4>
                <ul>
                    <li>Zumba - everyday - 10am</li>
                    <li>"Biggest Loser Challenge" - month of October - Oct 1st</li>
                    <li>Cardio Challenge - fridays - 12pm</li>
                </ul>
            </div>
        </div>
    </>
)}