import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import "./anytime.css";
import AnyFit from "../../../img/Anytime_Fitness_logo_PNG6.png";

export const Anytime = ()=> {
    const { store, actions } = useContext(Context);

 

  


    return(
    <div style={{...{backgroundImage: `url(${AnyFit})`}, ...{backgroundSize: "600px"} }}>
        

       
    </div>
)}