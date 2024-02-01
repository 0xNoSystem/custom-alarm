import React, {useState, useEffect, createContext} from "react";
import sound from "./sakaAudio.mp3"
import getTimeDiff from "./timeLogic/getTimeDiff"
import { AlarmProvider, useAlarmContext } from "./AlarmProvider";
import { filterAndSortAlarmsList } from "./timeLogic/timeParser";




function Clock(props){

    const {alarms, setAlarms} = useAlarmContext();

    const audio = props.audio;
    
    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    const [timeLeft,  setTimeLeft] = useState()
    

    function updateTime(){

        

        const currentTime = new Date();
        const currentTimeString = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

        setTime(currentTimeString);
        
        if (alarms.length !== 0){
            
            setTimeLeft(getTimeDiff(alarms[0], currentTimeString).toString())
        }
        if (alarms[0] === currentTimeString.slice(0,5)){
            
            setAlarms(filterAndSortAlarmsList(alarms));
            audio.play()
            setTimeout(()=>{
                audio.pause();
        
                audio.currentTime = 0;
              }, 100000)

            
        }


        
    }
    
    useEffect(()=>{
        const setIntervalId = setInterval(updateTime, 1000);
        
        return ()=> clearInterval(setIntervalId)
    }, [time])

    return(
        <div className="main__clock" draggable={true}>
                <div className="main__clock__next">
                    Next Alarm in: <span>{timeLeft}</span> 
                </div>
                <div className="main__clock__time">
                    <h3>PARIS</h3>
                    <div className="main__clock__time__outer">
                        <div className="main__clock__time__inner">
                            <span id="time">{time}</span>
                        </div>
                    </div>
                </div>
            </div>
    )
}


export default Clock;
