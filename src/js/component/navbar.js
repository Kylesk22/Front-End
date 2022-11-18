import React, { useState, useEffect, useContext } from "react";import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js"
import Logo from "../../img/Spotter-1.png";
import "./navbar.css";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-expand-lg mb-2">
			<div className="container-fluid">
			<Link to="/">
				<span className="navbar-brand mb-0 mt-0 h1"><img src={Logo} width="65px"/></span>
			</Link>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      			<span className="navbar-toggler-icon"></span>
    		</button>
			
			{(store.loggedIn)?
			<div className="collapse navbar-collapse" >
			<ul className="navbar-nav me-auto">
			<Link to= {`/account/`+ sessionStorage.getItem("email")}>
				<li className="nav-item">
          			<a className="nav-link active" href="#">Home
            			<span className="visually-hidden">(current)</span>
          			</a>
				</li>
			</Link>
			<Link to= "/myGym">
				<li className="nav-item">
          			<a className="nav-link active" style={{color: "#2a9fd6;"}} href="#">My Gym
            			<span className="visually-hidden">(current)</span>
          			</a>
				</li>
			</Link>
			</ul>
			<Link to="/">
				<button className="btn btn-primary" onClick={actions.logout}>Logout</button>
			</Link>
			</div>: 
			<div className="welcome" style={{marginRight: "550px"}}>Welcome To Spotter</div>
			}	
			</div>
		
			
		</nav>
	);
};
