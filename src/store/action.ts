export const  FETCH_STAT = "FETCH_STAT" 
export const  SET_STAT = "SET_STAT" 

export function fetchStat(stat:any) {
    return {
        type: FETCH_STAT,
        stat: stat
    }
}
export function saveStat(stat:any) {
    return {
        type: SET_STAT,
        stat: stat
    }
}
