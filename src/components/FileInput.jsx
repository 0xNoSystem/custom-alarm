import React, {useState} from "react";





function FileInput(props){

    
    

    return(
    <div className="change-ringtone--active" style={{display:(props.active ? "flex" : "none")}}>
        <h5>Set new .mp3 file as Ringtone</h5>
        <input type="file" id="addFileBox" accept=".mp3"/>
        <button id="submit-button" onClick={(event)=>{props.updateRingtoneFunc(); event.preventDefault();}}>Set Ringtone</button>
    </div>
                            
                            )}


export default FileInput