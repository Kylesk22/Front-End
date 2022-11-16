import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";
import { Navigate } from "react-router";

export const Register = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [first_name, setFirstName] = useState("");
	const [last_name, setLastName] = useState("");
	const [gym, setGym] = useState("");
    const [gym2, setGym2] =useState("")


    useEffect(()=> {
        
        setGym2(gym)
        console.log(gym2)
    },)
    

	const handleClick = () => {
		actions.signup(email, password, first_name, last_name, gym2);
        actions.setEmail(email);
        // Navigate('/account/:user_id')
	};
	

	return(
		<div style={{textAlign: "center"}}>
            {(!store.token)?
            <div className="form" onSubmit={() => alert("submitted")}>
                <h3>Register</h3>
                <input type= "text" placeholder="Email" value= {email} onChange={(e) => {setEmail(e.target.value)}}></input>
                <br/>
                <input type= "password" placeholder ="Password" style={{"margin": "8px"}} value={password} onChange={(e)=> setPassword(e.target.value)}></input>
                <br/>
                <input type= "text" placeholder ="First Name" style={{"margin": "8px"}} value={first_name} onChange={(e)=> setFirstName(e.target.value)}></input>
                <br/>
                <input type= "text" placeholder ="Last Name" style={{"margin": "8px"}} value={last_name} onChange={(e)=> setLastName(e.target.value)}></input>
                <br/>
                <select className="form-select mt-1" style={{margin: "auto", width: "150px"}} value = {gym} onChange={(e)=>{setGym(e.target.value); console.log(gym)}}>
                    <option value="">--Select One--</option>
                    <option value="Anytime">Anytime</option>
                    <option value="LA">LA</option>
                    <option value="Planet">Planet</option>
                </select>
                <br/>
					
						
				<span className="btn btn-primary btn-md mt-1" href="#" role="button" onClick={handleClick}>Register</span>
						
				
			</div>
            : <Redirect to= {`/account/`+ store.email}> </Redirect>
            }
		</div>
	)
}