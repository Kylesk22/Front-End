import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Calendar } from "../component/Calendar/calendar";
import { Bio } from "../component/Bio/bio";
import { ProfilePic } from "../component/ProfilePic/profilePic";

import { Post } from "../component/Post";
import { render } from "react-dom/cjs/react-dom.production.min";

import { MyChatComponent } from "../component/Messaging/messaging";
import Gym2 from "../../img/gym2.png"




export const User = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	
	return (
		<div>
			<div className="jumbotron" >
				<div className="row" style={{...{backgroundImage: `url(${Gym2})`}, ...{backgroundSize: "1500px"}, backgroundPosition:"center", paddingBottom: "20px",}}>
					<div className="col-12" style={{textAlign: "left", textAlign: "center"}}>
						<h1 className="display-4">
					
						</h1>
				
						<ProfilePic />
						<Bio />
					</div>
					{/* <div className="col-6" style={{textAlign:"center"}}>
						<Calendar />
					</div> */}
				</div>
				

				{/* <hr className="my-4" /> */}

				{/* <Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back home
					</span>
				</Link> */}
				
				<div className="col-6" style={{textAlign:"center", marginLeft: "10px"}}>
					<Calendar />
				</div>
				
				
				
			</div>

			
		</div>
	);
};