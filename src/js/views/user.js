import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Calendar } from "../component/Calendar/calendar";
import { Bio } from "../component/Bio/bio";
import { ProfilePic } from "../component/ProfilePic/profilePic";
import { Post } from "../component/Post";
import { render } from "react-dom/cjs/react-dom.production.min";



export const User = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	console.log(store.userPosts);
	const allPost = store.userPosts;

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	
	const handlePost = () => {
		const email = sessionStorage.getItem("email");
		actions.post(title, content, email);
		actions.getUserPosts(email);
	}
	
	function postedMinutesAgo(time){
		//regex
		const regex = /[0-9]*:[0-9]*:[0-9]*/;
		let i = -1;
		//current date
		let currentDate = new Date().toUTCString();
		let found = currentDate.match(regex);
		let currentTime = found[0];
		console.log(`${currentDate} current date`)

		//post date
		let postDate = time
		let found2 = postDate.match(regex);
		let postTime = found2[0];
		console.log(postDate)

		//getting the current time
		let currentHours = currentTime[0] + currentTime[1];
		let currentMinutes = currentTime[3] + currentTime[4];
		let currentSeconds = currentTime[6] + currentTime[7];
		//getting the post time
		let postHours = postTime[0] + postTime[1];
		let postMinutes = postTime[3] + postTime[4];
		let postSeconds = postTime[6] + postTime[7];
		//getting time since post
		
		if(currentHours - postHours == 0 && currentMinutes - postMinutes == 0){
			let temp = parseInt(currentSeconds) - parseInt(postSeconds);
			return `${temp}s`;
		} else if (currentHours - postHours == 0 && currentMinutes - postMinutes != 0) {
			let temp = parseInt(currentMinutes) - parseInt(postMinutes);
			return `${temp}m`;
		} else if (parseInt(currentHours) - parseInt(postHours) < 10) {
			let temp = parseInt(currentHours) - parseInt(postHours);
			if (temp < 0) {
				let temp = parseInt(currentHours) - parseInt(postHours);
				temp = 24 + temp
				return `${temp}h`
			}
			return `${temp}h`;
		} else {
			let temp = parseInt(currentHours) - parseInt(postHours);
			return `${temp}h`;
		}
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
            		<div className="form-group">
                		<label for="exampleFormControlInput1">Title</label>
                		<input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            		</div>
            		<div className="form-group">
						<label for="exampleFormControlInput1">Content</label>
                		<input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)}/>
            		</div>
					<div>
						<span className="btn btn-primary btn-md mt-5" href="#" role="button" onClick={handlePost}>Post</span>
					</div>
        		</form>
			</div>
			<div>
			{allPost != "" ? allPost.map((post, i) => {
				
				return <Post author={post.email} date_posted={postedMinutesAgo(post.date_posted)} title={post.title} content={post.post_info} key={i} /> ;}) : ""}
			</div>
			<div>
				<Calendar/>
			</div>
		</div>
	);
};