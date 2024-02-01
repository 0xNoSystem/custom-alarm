
const isValidTimePattern = /^\d\d:\d\d$/

function timeParser(alarm){
    let hour = alarm.hour;
    let minutes = alarm.minutes;

    if (hour.length === 1){
        hour = "0"+hour
    }

    if (minutes.length === 1){
        minutes = "0"+minutes
    }

    return (isValidTimePattern.test(`${hour}:${minutes}`) ? `${hour}:${minutes}` :null)

}

function convertToMinutes(timeString){

    const [hours, minutes] = timeString.split(":").map(Number);

    return isValidTimePattern.test(timeString) ? hours*60 + minutes: null
}



function filterAndSortAlarmsList(alarms){
    
    function compareTime(a,b){
        const currentTime = convertToMinutes(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'}).toString());
        
        console.log(currentTime)
        let timeA =convertToMinutes(a) - currentTime;
        let timeB =convertToMinutes(b) - currentTime;

        if (timeA <= 0){
            timeA = timeA + 1440
        }
        if (timeB <= 0){
            timeB = timeB + 1440
        }
        return timeA - timeB
    }

    alarms.sort(compareTime);

    
    return alarms.filter(a=>isValidTimePattern.test(a))
}

//console.log(filterAndSortAlarmsList(["21:28", "13:09"]))

export {timeParser, filterAndSortAlarmsList} 