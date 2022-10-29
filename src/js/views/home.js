import React, { useContext, useEffect, useState } from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";
import { Navigate } from "react-router";


export const Home = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	let { userId } = useParams();

	const handleClick = () => {
		actions.login(email, password)
	};
	

	return(
		<div>

			<div className="row" style={{"textAlign": "center"}}>
				<div className="col-6">
					<h2 className="display-4">Find your</h2>
					<h1 className="display-4">GYM</h1>
					<h2 className="display-4">Find your</h2>
					<h1 className="display-4">HOME</h1>

					
				</div>
				{(!store.loggedIn)? 
				<div className="col-6">
					<div className="form" onSubmit={() => alert("submitted")}>
						<h3>Login</h3>
						<input type= "text" placeholder="Email" value= {email} onChange={(e) => setEmail(e.target.value)}></input>
						<br/>
						<input type= "password" placeholder ="Password" style={{"margin": "8px"}} value={password} onChange={(e)=> setPassword(e.target.value)}></input>
						<br/>
						<Link to="/forgot_password">
							<span>Forgot Password?</span>
						</Link>
						<br/>
						
						
						<span className="btn btn-primary btn-md mt-1" href="#" role="button" onClick={handleClick}>Login</span>
						
						<hr className="mt-4 mx-5" />
						<span>New User?</span>
						<br/>
						<Link to="/register">
							<button type="button" className="btn btn-primary mt-2">Register</button>
						</Link>

				
					</div>
				</div> :<Redirect to= {`/account/`+ store.email}> </Redirect>
				}
			</div>
		</div>
	)
}
