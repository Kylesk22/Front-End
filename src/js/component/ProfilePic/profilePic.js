import React, { useState, useRef, useEffect } from "react";
import "./profilePic.css";
import examplePic from "./Me.png";
 





export const ProfilePic = (props) => {

    const[pic, setPic] = useState(examplePic);


    const handleChange = (e) => {
                const[file] = e.target.files;
                setPic(URL.createObjectURL(file));
            };
    


  return (
    <>
    <label htmlFor="image" className="pic">
      <input onChange={(e) => handleChange(e) } type="file" name="image" id="image" style={{display: "none"}}/>
      <img id = "profileImage" src={pic}/>
   </label>
   </>
    )
};