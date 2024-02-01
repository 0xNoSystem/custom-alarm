import React, {useState, createContext} from "react";
import { timeParser, filterAndSortAlarmsList } from "./timeLogic/timeParser";
import {AlarmProvider, useAlarmContext } from "./AlarmProvider";

function TimePicker(props){

    const {alarms,  addAlarm} = useAlarmContext();

    const [potentialAlarm, setPotentialAlarm] = useState({
        hour: "00",
        minutes: "00"
    });


    function handleChange(event){
        const {name, value} = event.target;
        
        setPotentialAlarm((previousValue)=>{
            return{
                ...previousValue,
                [name]: value
            }
        })
    }

    function handleSetAlarm(potentialAlarm){

        const newAlarm = timeParser(potentialAlarm);

        addAlarm(newAlarm);


        setPotentialAlarm({
            hour: "",
            minutes:""
        })
        

    }
    return(
        <div className="set-new-alarm--active" style={{display: props.active ? "flex" : "none"}}>
            <h5>Set a new Alarm below</h5>
            <div id="time-picker">
                <div className="selector hours">  
                    <p>Hours</p>
                    <input name="hour" type="number" min="0" max="23" value={potentialAlarm.hour} onChange={handleChange} />
                </div>
                <span>:</span>
                <div className="selector minutes">
                    <p>Minutes</p>
                    <input name="minutes" type="number" min="0" max="59" value={potentialAlarm.minutes} onChange={handleChange}/>
                </div>
            
            </div>
            <button id="add-alarm-button" onClick={()=>handleSetAlarm(potentialAlarm)}>Add alarm</button>
        </div>
    )
}

export default TimePicker;

