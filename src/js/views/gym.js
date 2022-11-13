import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Anytime } from "../component/Anytime/anytime";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Gym = () => {
	const { store, actions } = useContext(Context);
	let gym = sessionStorage.getItem("Gym");
	let display;

	// switch(gym) {
	// 	case "Anytime":
	// 		display = "Anytime";
	// 		break;
	// 	case "LAFitness":
	// 		display = "LA";
	// 		break;
	// 	case "GoldsGym":
	// 		display = "Golds";
	// 		break;
	// }

	return (
		<div className="container">
			{(gym === "Anytime")?
				<Anytime/>: ""
			}
	
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
