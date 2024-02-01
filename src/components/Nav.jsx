import React,{useState} from 'react';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import sound from "./sakaAudio.mp3"
import FileInput from './FileInput';

import TimePicker from './TimePicker';

function NavBar(props){

    
    const [changeRingtoneIsActive, setChangeRingtoneIsActive] = useState(false);
    const [alarmIsActive, setAlarmIsActive] = useState(false);

    function handleClickRingtone(){
        setChangeRingtoneIsActive((prevState)=>{
            
            if (!prevState){
                setAlarmIsActive(false)
            }
            return !prevState
        });

        

    }

    function handleClickAlarm(){
        setAlarmIsActive((prevState)=>{
           
            if (!prevState){
                setChangeRingtoneIsActive(false)
            }
            return !prevState;
        });
    }

    return(
        <div className="main__nav">
        <div id="layer" style={{display:changeRingtoneIsActive || alarmIsActive ? "block" : "none"}}></div>
                <nav>
                    <div className="main__nav__brand">
                        <h1>SAKANIGADIK </h1>   
                    </div>
                    <AccessAlarmIcon style={{fontSize:"4rem"}}></AccessAlarmIcon>
                    <div className="main__nav__options">
                        <div  id="change-ringtone" >
                            <h3 onClick={handleClickRingtone}>Change Ringtone </h3>
                            <FileInput active={changeRingtoneIsActive}  updateRingtoneFunc={props.updateRingtoneFunc}/>
                        </div>
                        <div id="set-new-alarm" >
                            <h3 onClick={handleClickAlarm}>
                                Set new Alarm
                            </h3>
                            <TimePicker active={alarmIsActive}/>
                        </div>
                    </div>
                </nav>
            </div>
    )
}

export default NavBar;