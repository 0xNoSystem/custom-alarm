import { useState, useContext, createContext } from "react";
import { filterAndSortAlarmsList } from "./timeLogic/timeParser";

const AlarmContext = createContext();

export const AlarmProvider = ({children})=>{

    const [alarms, setAlarms] = useState([]);

    const addAlarm = (newAlarm)=>{
        try{ let newAlarmsList = [...alarms, newAlarm]
        
        setAlarms(filterAndSortAlarmsList(newAlarmsList))
        }catch(error){
            console.log(error)
        }
    }
    
    return(
    <AlarmContext.Provider value={{alarms, addAlarm, setAlarms}}>
        {children}
    </AlarmContext.Provider>
)

}




export const useAlarmContext = ()=>{
    return useContext(AlarmContext)
}