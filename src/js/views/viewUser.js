import React from "react";
import { ProfilePic } from "../component/ProfilePic/profilePic";
import { Bio } from "../component/Bio/bio";
import { Post } from "../component/Post";
import { Params } from "react-router";
import { FriendsDropdown } from "../component/friends";
export const ViewUser = () => {

    return (
		<div>
            <FriendsDropdown />
			<div className="jumbotron" style = {{textAlign: "center"}}>
				<h1 className="display-4">
				</h1>
				<ProfilePic/>
                <Bio />
				<hr className="my-4" />
			</div>
            <div>
                <Post />
            </div>
        </div>
    )
}