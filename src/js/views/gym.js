import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Anytime } from "../component/Anytime/anytime";
import axios from "axios";
import Gym1 from "../component/Anytime/Images/gym1.png"

import { Context } from "../store/appContext";

import "../../styles/demo.css";


export const Gym = () => {
	const { store, actions } = useContext(Context);
	const [users, setUsers] = useState([]);
	const gym = sessionStorage.getItem("Gym");
	let display;

	useEffect(()=>{
		axios.get(`https://spotter1.herokuapp.com/api/user/profiles/${gym}`, {}, {Authorization: `Bearer sessionStorage.getItem("token")`})
		.then(resp => {
			let data = resp.data;
			setUsers(data);
			
			

		})
		.catch(err => console.log(err))

	},[])


	return (
		<div style= {{...{backgroundImage: `url(${Gym1})`}, ...{backgroundSize: "1500px"}}}>
		<div className="container" style={{textAlign: "center"}}>
			{(sessionStorage.getItem("gym") === "Anytime")?
				<Anytime users={users} />: 
				(sessionStorage.getItem("gym") === "LA")?
				<LA/>:
				(sessionStorage.getItem("gym") === "Planet")?
				<Planet/>: ""
			}

			
		</div>
		</div>
	);
};
