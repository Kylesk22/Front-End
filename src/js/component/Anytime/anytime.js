import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import "./anytime.css";
import AnyFit from "../../../img/Anytime_Fitness_logo_PNG6.png";
import { MyChatComponent } from "../Messaging/messaging";

export const Anytime = ()=> {
    const { store, actions } = useContext(Context);
    const [user2, setUser2] = useState("");
    const [openChat, setOpenChat] = useState(false);

 

  


    return(
    <>
        <img className="image" src={AnyFit} style={{margin: "auto"}}>
        

       
        </img>
        <div className="row" style={{textAlign: "center"}}>
            <h2>Gym Members</h2>
            <div className="d-flex" style={{justifyContent: "center"}}>
                <div style={{marginLeft: "5px", marginRight: "5px"}}>
                    <h4>Abraham</h4>
                    <button className="btn btn-primary mb-5"  onClick={()=>{setOpenChat(true); setUser2("Abraham")}}>Message</button>
                </div>
                <div style={{marginLeft: "5px", marginRight: "5px"}}>
                    <h4>Sarah</h4>
                    <button className="btn btn-primary mb-5" onClick={()=>{setOpenChat(true); setUser2("Sarah")}}>Message</button>
                </div>
                <div style={{marginLeft: "5px", marginRight: "5px"}}>
                    <h4>Brianna</h4>
                    <button className="btn btn-primary mb-5" onClick={()=>{setOpenChat(true); setUser2("Brianna")}}>Message</button>
                </div>
            </div>
        </div>
        {(openChat)?
        <div>
        <button className="btn btn-danger" style={{marginLeft: "750px"}} onClick={()=>{setOpenChat(false)}}>X</button>
        <MyChatComponent user2= {user2}/>
        
        </div>: ""
        }
        
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