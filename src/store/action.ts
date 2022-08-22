// export const  FETCH_STAT = "FETCH_STAT" 
// export const  SET_STAT = "SET_STAT" 

import { FETCH_STAT } from "./types";

export function fetchStat<T>(statData: T) {
    return {
        type: FETCH_STAT,
        payload: statData
    }
}
