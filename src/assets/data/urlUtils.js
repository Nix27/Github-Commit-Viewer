import { DateTime } from "luxon";

export default function getDateFromUrlOrDefault(){
    const url = window.location.href;
    const date = url.substring(url.lastIndexOf('/') + 1)

    try {
        if(date){
            return DateTime.fromISO(date)
        }
    }catch(err){
        console.log(err)
    }

    return DateTime.now()
}