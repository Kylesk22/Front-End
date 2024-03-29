import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import "./bio.css";

export const Bio = ()=> {
    const { store, actions } = useContext(Context);
    const [select, setSelect] = useState("Anytime");

    console.log(store.firstName);


    const changeHandler = () => {

        return(
        <button className="btn btn-primary">Submit</button>
        )
    }
  


    return(
    <div style={{textShadow:"3px 3px 3px black"}}>
        <h2>Name: {sessionStorage.getItem("firstName") + " " + sessionStorage.getItem("lastName")}</h2>
        <h2 id="gym" style={{display: "flex", justifyContent: "center"}}>Gym: {
        (sessionStorage.getItem("gym") === "None")?
        <form className="form-group" onSubmit={(e)=> {sessionStorage.setItem("gym", select), e.preventDefault()}}>
        <select className="form-select mt-2 m-2" style={{width: "150px"}} value = {select} onChange={(e)=>{setSelect(e.target.value)}}>
          <option>Anytime</option>
          <option>LA</option>
          <option>Planet</option>
        </select>
        <input type="submit" value= "Submit" className="btn btn-primary" ></input>
      </form>:
        <div>
        {sessionStorage.getItem("gym")}
        </div>} 
        </h2>

       
    </div>
)}
