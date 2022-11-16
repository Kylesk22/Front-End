import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Calendar } from "../component/Calendar/calendar";
import { Bio } from "../component/Bio/bio";
import { ProfilePic } from "../component/ProfilePic/profilePic";
import { Post } from "../component/post";




export const User = (props) => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const [title, setTitle] = useState("")
	const [content, setContent] = useState("")
	
	const handlePost = () => {
		const email = sessionStorage.getItem("email");
		actions.post(title, content, email)
	}

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


			<div>
				<Calendar/>
			</div>
		</div>
	);
};