import React, { useContext, useEffect, useState } from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";
import { Navigate } from "react-router";
import BKG from "../../img/weights.png";
import { Post } from "../component/post";




export const Home = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	let { userId } = useParams();

	const handleClick = () => {
		actions.login(email, password)
		
	};

	const [title, setTitle] = useState("")
	const [content, setContent] = useState("")
	
	const handlePost = () => {
		actions.post(title, content)
		console.log(title)
		console.log(content)
	}

	return(
		<div id = "bkg" style={{...{backgroundImage: `url(${BKG})`}, ...{backgroundSize: "1400px"} }}>

			<div className="row" style={{"textAlign": "center"}} >
				<div className="col-6 mt-5" >
					<h1 className="display-4" id="quote">Spotter</h1>
					<h2 className="display-4" id="quote">"Together we grow"</h2>
					<h4 id="quote2">Connect with your gym community and grow together.</h4>
					

					
				</div>
				{(!store.loggedIn)? 
				<div className="col-6">
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
			<div>
				<form>
            		<div class="form-group">
                		<label for="exampleFormControlInput1">Title</label>
                		<input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            		</div>
            		<div class="form-group">
						<label for="exampleFormControlInput1">Content</label>
                		<input type="text" class="form-control" id="exampleFormControlInput2" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)}/>
            		</div>
					<div>
						<span className="btn btn-primary btn-md mt-5" href="#" role="button" onClick={handlePost}>Post</span>
					</div>
						
        		</form>
			</div>
		</div>
	)
}
