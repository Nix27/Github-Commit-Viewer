import { DateTime } from "luxon";

export default function getDateFromUrlOrDefault(dateParam){
    try {
        if(dateParam){
            return DateTime.fromISO(dateParam)
        }
    }catch(err){
        console.log(err);
    }

    return DateTime.now()
}