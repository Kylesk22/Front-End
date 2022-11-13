import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import "./calendar.css";


export const Calendar = props => {
    const { store, actions } = useContext(Context);
    const [sunday, setSunday] = useState("");
    const [monday, setMonday] = useState("");
    const [tuesday, setTuesday] = useState("");
    const [wednesday, setWednesday] = useState("");
    const [thursday, setThursday] = useState("");
    const [friday, setFriday] = useState("");
    const [saturday, setSaturday] = useState("");
    const [addWorkout, setAddWorkout]= useState(false);
    const [addWorkout2, setAddWorkout2]= useState(false);
    const [addWorkout3, setAddWorkout3]= useState(false);
    const [addWorkout4, setAddWorkout4]= useState(false);
    const [addWorkout5, setAddWorkout5]= useState(false);
    const [addWorkout6, setAddWorkout6]= useState(false);
    const [addWorkout7, setAddWorkout7]= useState(false);
    const [openInput, setOpenInput] = useState(false);
    const [openInput2, setOpenInput2] = useState(false);
    const [openInput3, setOpenInput3] = useState(false);
    const [openInput4, setOpenInput4] = useState(false);
    const [openInput5, setOpenInput5] = useState(false);
    const [openInput6, setOpenInput6] = useState(false);
    const [openInput7, setOpenInput7] = useState(false);
    const [input, setInput] = useState("");
    const [openSave, setOpenSave] = useState(false);
    const [close, setClose] = useState(false);

    const d = new Date();
    let day = d.getDay();
    let date = d.getDate();
    let month = d.getMonth();
    

    let customHandler = () => {
        return (
            <input type="text" placeholder="Custom"></input>
        )
    }
    let clickHandler = () => {
        return
    }

   
    // useEffect(()=> {
    //     actions.getCalendar();
    //     setSunday(store.sunday);
    //     console.log(sunday);
    // },[store.sunday])



return(
    <div>
        <div className="row">
        <div className="col d-flex">
            
        </div>

            <div className="col d-flex">
                
                        <div className="dates">
                            <div>Sun</div>
                        </div>
                        <div className="dates">
                            <div>Mon</div>
                        </div>
                        <div className="dates">
                            <div>Tue</div>
                        </div>
                        <div className="dates">
                            <div>Wed</div>
                        </div>
                        <div className="dates">
                            <div>Thur</div>
                        </div>
                        <div className="dates">
                            <div>Fri</div>
                        </div>
                        <div className="dates">
                            <div>Sat</div>
                        </div>
                    
                    
                  
                </div>
                    
                </div>
                <div className="row">

            <div className="col d-flex">
               
                
                        <div className="nums" onMouseOver={()=>{setAddWorkout(true)}} onMouseLeave={()=>{setAddWorkout(false)}}>
                            <div>
                            { (sunday != "")?
                            
                            sunday.map((value, index) => {
                                console.log(sunday)
                                return(
                                <div key={index} onMouseOver={()=> {setClose(true);}} onMouseLeave={()=> {setClose(false)}}>
                                    {value}
                                    {(close)?
                                    <button className="btn btn-danger btn-sm m-1" onClick={()=> {sunday.splice(index, 1)}}>X</button> : ""}
                                    </div>
                                )
                            }) : ""}
                            {(addWorkout)?
                            
                            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                                {/* <button type="button" className="btn btn-primary">Add</button> */}
                                <div className="btn-group" role="group">
                                    <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                    <div className="dropdown-menu" aria-labelledby="btnGroupDrop1"  >
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setSunday([...sunday, "Chest"])), setOpenSave(true) }}>Chest</button> 
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setSunday([...sunday, "Triceps"])), setOpenSave(true)}}>Triceps</button> 
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setSunday([...sunday, "Back"])), setOpenSave(true)}}>Back</button> 
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setSunday([...sunday, "Biceps"])), setOpenSave(true)}}>Biceps</button> 
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setSunday([...sunday, "Legs"])), setOpenSave(true)}}>Legs</button> 
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setSunday([...sunday, "Cardio"])), setOpenSave(true)}}>Cardio</button> 
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setSunday([...sunday, "OFF"])), setOpenSave(true)}}>OFF</button> 
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => setOpenInput(true)}>Custom</button> 
                                    </div>
                                </div>
                            </div>: ""}
                            </div>
                        </div>
                        <div className="nums" onMouseOver={()=>{setAddWorkout2(true)}} onMouseLeave={()=>{setAddWorkout2(false)}}>
                            <div>
                            {monday}
                            {(addWorkout2)? 
                            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                                {/* <button type="button" className="btn btn-primary">Add</button> */}
                                <div className="btn-group" role="group">
                                    <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                    <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setMonday([...monday, "Chest"])), setOpenSave(true)}}>Chest</button> 
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setMonday([...monday, "Triceps"])), setOpenSave(true)}}>Triceps</button> 
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setMonday([...monday, "Back"])), setOpenSave(true)}}>Back</button> 
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setMonday([...monday, "Biceps"])), setOpenSave(true)}}>Biceps</button> 
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setMonday([...monday, "Legs"])), setOpenSave(true)}}>Legs</button> 
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setMonday([...monday, "Cardio"])), setOpenSave(true)}}>Cardio</button>
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setMonday([...monday, "OFF"])), setOpenSave(true)}}>OFF</button>
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => setOpenInput2(true)}>Custom</button> 
                                    </div>
                                </div>
                            </div>: ""}
                            </div>
                        </div>
                        <div className="nums" onMouseOver={()=>{setAddWorkout3(true)}} onMouseLeave={()=>{setAddWorkout3(false)}}>
                            <div>
                            {tuesday}
                            {(addWorkout3)? 
                            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                                {/* <button type="button" className="btn btn-primary">Add</button> */}
                                <div className="btn-group" role="group">
                                    <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                    <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setTuesday([...tuesday, "Chest"])), setOpenSave(true)}}>Chest</button> 
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setTuesday([...tuesday, "Triceps"])), setOpenSave(true)}}>Triceps</button> 
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setTuesday([...tuesday, "Back"])), setOpenSave(true)}}>Back</button> 
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setTuesday([...tuesday, "Biceps"])), setOpenSave(true)}}>Biceps</button> 
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setTuesday([...tuesday, "Legs"])), setOpenSave(true)}}>Legs</button> 
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setTuesday([...tuesday, "Cardio"])), setOpenSave(true)}}>Cardio</button>
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setTuesday([...tuesday, "OFF"])), setOpenSave(true)}}>OFF</button>
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => setOpenInput3(true)}>Custom</button> 
                                    </div>
                                </div>
                            </div>: ""}
                            </div>
                        </div>
                        <div className="nums" onMouseOver={()=>{setAddWorkout4(true)}} onMouseLeave={()=>{setAddWorkout4(false)}}>
                            <div>
                            {wednesday}
                            {(addWorkout4)? 
                            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                                {/* <button type="button" className="btn btn-primary">Add</button> */}
                                <div className="btn-group" role="group">
                                    <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                    <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setWednesday([...wednesday, "Chest"])), setOpenSave(true)}}>Chest</button> 
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setWednesday([...wednesday, "Triceps"])), setOpenSave(true)}}>Triceps</button> 
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setWednesday([...wednesday, "Back"])), setOpenSave(true)}}>Back</button> 
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setWednesday([...wednesday, "Biceps"])), setOpenSave(true)}}>Biceps</button> 
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setWednesday([...wednesday, "Legs"])), setOpenSave(true)}}>Legs</button> 
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setWednesday([...wednesday, "Cardio"])), setOpenSave(true)}}>Cardio</button>
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setWednesday([...wednesday, "OFF"])), setOpenSave(true)}}>OFF</button>
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => setOpenInput4(true)}>Custom</button> 
                                    </div>
                                </div>
                            </div>: ""}
                            </div>
                        </div>
                        <div className="nums" onMouseOver={()=>{setAddWorkout5(true)}} onMouseLeave={()=>{setAddWorkout5(false)}}>
                            <div>
                            {thursday}
                            {(addWorkout5)? 
                            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                                {/* <button type="button" className="btn btn-primary">Add</button> */}
                                <div className="btn-group" role="group">
                                    <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                    <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setThursday([...thursday, "Chest"])), setOpenSave(true)}}>Chest</button> 
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setThursday([...thursday, "Triceps"])), setOpenSave(true)}}>Triceps</button> 
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setThursday([...thursday, "Back"])), setOpenSave(true)}}>Back</button> 
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setThursday([...thursday, "Biceps"])), setOpenSave(true)}}>Biceps</button> 
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setThursday([...thursday, "Legs"])), setOpenSave(true)}}>Legs</button> 
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setThursday([...thursday, "Cardio"])), setOpenSave(true)}}>Cardio</button>
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setThursday([...thursday, "OFF"])), setOpenSave(true)}}>OFF</button>
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => setOpenInput5(true)}>Custom</button> 
                                    </div>
                                </div>
                            </div>: ""}
                            </div>
                        </div>
                        <div className="nums" onMouseOver={()=>{setAddWorkout6(true)}} onMouseLeave={()=>{setAddWorkout6(false)}}>
                            <div>
                            {friday}
                            {(addWorkout6)? 
                            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                                {/* <button type="button" className="btn btn-primary">Add</button> */}
                                <div className="btn-group" role="group">
                                    <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                    <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setFriday([...friday, "Chest"])), setOpenSave(true)}}>Chest</button> 
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setFriday([...friday, "Triceps"])), setOpenSave(true)}}>Triceps</button> 
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setFriday([...friday, "Back"])), setOpenSave(true)}}>Back</button> 
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setFriday([...friday, "Biceps"])), setOpenSave(true)}}>Biceps</button> 
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setFriday([...friday, "Legs"])), setOpenSave(true)}}>Legs</button> 
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setFriday([...friday, "Cardio"])), setOpenSave(true)}}>Cardio</button>
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setFriday([...friday, "OFF"])), setOpenSave(true)}}>OFF</button>
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => setOpenInput6(true)}>Custom</button> 
                                    </div>
                                </div>
                            </div>: ""}
                            </div>
                        </div>
                        <div className="nums" onMouseOver={()=>{setAddWorkout7(true)}} onMouseLeave={()=>{setAddWorkout7(false)}}>
                            <div>
                            {saturday}
                            {(addWorkout7)? 
                            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                                {/* <button type="button" className="btn btn-primary">Add</button> */}
                                <div className="btn-group" role="group">
                                    <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                    <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setSaturday([...saturday, "Chest"])), setOpenSave(true)}}>Chest</button> 
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setSaturday([...saturday, "Triceps"])), setOpenSave(true)}}>Triceps</button> 
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setSaturday([...saturday, "Back"])), setOpenSave(true)}}>Back</button> 
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setSaturday([...saturday, "Biceps"])), setOpenSave(true)}}>Biceps</button> 
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setSaturday([...saturday, "Legs"])), setOpenSave(true)}}>Legs</button> 
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setSaturday([...saturday, "Cardio"])), setOpenSave(true)}}>Cardio</button>
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => {(setSaturday([...saturday, "OFF"])), setOpenSave(true)}}>OFF</button>
                                        <button type="button" className="btn btn-primary" id="btnWO" onClick={() => setOpenInput7(true)}>Custom</button> 
                                    </div>
                                </div>
                            </div>: ""}
                            </div>
                        </div>
                    
                    
                  
                </div>
                <div className="inputPopUp">
                
                {(openInput)? <form onSubmit={(e)=>{setSunday([...sunday, input]); setOpenInput(false); setOpenSave(true)}}><input type="text" placeholder="Custom" onChange={(e)=> setInput(e.target.value)}></input></form>: ""}
                {(openInput2)? <form onSubmit={(e)=>{setMonday([...monday, input]); setOpenInput2(false); setOpenSave(true)}}><input type="text" placeholder="Custom" onChange={(e)=> setInput(e.target.value)}></input></form>: ""}
                {(openInput3)? <form onSubmit={(e)=>{setTuesday([...tuesday, input]); setOpenInput3(false); setOpenSave(true)}}><input type="text" placeholder="Custom" onChange={(e)=> setInput(e.target.value)}></input></form>: ""}
                {(openInput4)? <form onSubmit={(e)=>{setWednesday([...wednesday, input]); setOpenInput4(false); setOpenSave(true)}}><input type="text" placeholder="Custom" onChange={(e)=> setInput(e.target.value)}></input></form>: ""}
                {(openInput5)? <form onSubmit={(e)=>{setThursday([...thursday, input]); setOpenInput5(false); setOpenSave(true)}}><input type="text" placeholder="Custom" onChange={(e)=> setInput(e.target.value)}></input></form>: ""}
                {(openInput6)? <form onSubmit={(e)=>{setFriday([...friday, input]); setOpenInput6(false); setOpenSave(true)}}><input type="text" placeholder="Custom" onChange={(e)=> setInput(e.target.value)}></input></form>: ""}
                {(openInput7)? <form onSubmit={(e)=>{setSaturday([...saturday, input]); setOpenInput7(false); setOpenSave(true)}}><input type="text" placeholder="Custom" onChange={(e)=> setInput(e.target.value)}></input></form>: ""}



                </div>
                <div className="save">
                {(openSave)? <button className="btn btn-primary" type="button" onClick={(e)=>{actions.setDays(sunday, monday, tuesday, wednesday, thursday, friday, saturday); actions.syncTokenFromSessionStore(); setOpenSave(false); actions.setCalendar(sunday, monday, tuesday, wednesday, thursday, friday, saturday, store.email, store.token); console.log(store.sunday)}}>Save</button>: ""}
                </div>
                
                
                    
                </div>
    </div>
    )

}