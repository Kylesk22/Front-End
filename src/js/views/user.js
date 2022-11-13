import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Calendar } from "../component/Calendar/calendar";
import { Bio } from "../component/Bio/bio";
import { ProfilePic } from "../component/ProfilePic/profilePic";


export const User = (props) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div>
			<div className="jumbotron" style = {{textAlign: "center"}}>
				<h1 className="display-4">
					
				</h1>
				<ProfilePic/>
				<Bio />

				<hr className="my-4" />

				{/* <Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back home
					</span>
				</Link> */}
	
				
				
				
			</div>
			
			<div>
				<Calendar/>
			</div>
			
		</div>
	);
};