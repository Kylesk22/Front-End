import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import "./bio.css";

export const Bio = ()=> {
    const { store, actions } = useContext(Context);

    console.log(store.firstName);

  


    return(
    <div>
        <h2>Name: {sessionStorage.getItem("firstName") + " " + sessionStorage.getItem("lastName")}</h2>
        <h3>Gym: {sessionStorage.getItem("gym")}</h3>

       
    </div>
)}
