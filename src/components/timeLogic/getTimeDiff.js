function getTimeDiff(alarm, time){
    
    const [alarmHours, alarmMinutes] = [parseInt(alarm.slice(0,2)), parseInt(alarm.slice(3))];
    const [timeHours, timeMinutes] = [parseInt(time.slice(0,2)), parseInt(time.slice(3,5))];

    if (alarmHours > timeHours){
        let [hoursDiff, minutesDiff] = [alarmHours-timeHours,alarmMinutes-timeMinutes]
            if (minutesDiff < 0){
                hoursDiff--
                minutesDiff = 60+minutesDiff
            }
        return `${hoursDiff} hours and ${minutesDiff} min`
    }else if(alarmHours < timeHours){
        let [hoursDiff, minutesDiff] = [(24-(timeHours-alarmHours)),(alarmMinutes-timeMinutes)]
            if (minutesDiff < 0){
                hoursDiff--
                minutesDiff = minutesDiff+60
            }
        return `${hoursDiff} hours and ${minutesDiff} min`
    }else if (alarmHours === timeHours){
        if (alarmMinutes > timeMinutes){
            let minutesDiff = alarmMinutes-timeMinutes
            return `${minutesDiff} min`
        }else if(alarmMinutes < timeMinutes){
            let [hoursDiff, minutesDiff] = [23, 60-(timeMinutes-alarmMinutes)]
            return `${hoursDiff} hours and ${minutesDiff} min`
    }   else if(alarmMinutes === timeMinutes){
            return "SAKANIGADIK"
    }
}
    

    return `${hoursDiff} hours and ${minutesDiff} min`
}


export default getTimeDiff;