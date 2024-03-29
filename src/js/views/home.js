import React, { useContext, useEffect, useState } from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";
import { Navigate } from "react-router";
import BKG from "../../img/weights.png";
import BKG2 from "../../img/BrickWall.png";
import { Post } from "../component/Post";




export const Home = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	let { userId } = useParams();
	console.log(store.userPosts)

	const handleClick = () => {
		actions.login(email, password)
		
	};

	

	return(
		<div   id = "bkg2" style={{...{backgroundImage: `url(${BKG2})`}, ...{backgroundSize: "1500px"}}}>
		{/* <div   id = "bkg" > */}
			{/* <img src= {`${BKG}`} style={{width: "700px", opacity: ".5", borderRadius: "25px", boxShadow: "-5px -5px white", position: "absolute", marginLeft: "10px"}}></img> */}
			<div className="row" style={{"textAlign": "center"}} >
				<div className="col-6 mt-5">
					<h1 className="display-4  " id="quote">Spotter</h1>
					<h2 className="display-4 " id="quote">"Together we grow"</h2>
					<h4 id="quote2">Connect with your gym community and grow together.</h4>
					

					
				</div>
				{(!store.loggedIn)? 
				<div className="col-6 mt-5">
					<div className="form" onSubmit={() => alert("submitted")}>
						<h3 id="login">Login</h3>
						<input type= "text" placeholder="Email" value= {email} onChange={(e) => setEmail(e.target.value)}></input>
						<br/>
						<input type= "password" placeholder ="Password" style={{"margin": "8px"}} value={password} onChange={(e)=> setPassword(e.target.value)}></input>
						<br/>
						<Link to="/forgot_password">
							<span id="login">Forgot Password?</span>
						</Link>
						<br/>
						
						
						<span className="btn btn-primary btn-md mt-5" href="#" role="button" onClick={handleClick}>Login</span>
						
						<hr className="mt-4 mx-5" id="bar"/>
						<span id="login" >New User?</span>
						<br/>
						<Link to="/register">
							<button type="button" className="btn btn-primary mt-2 mb-5">Register</button>
						</Link>

				
					</div>
				</div> :<Redirect to= {`/account/`+ store.email}> </Redirect>
				}
			</div>
			<div className="row mt-5">
				<div className="col">
					
				</div>
			</div>
		{/* </div> */}
		</div>
	)
}
