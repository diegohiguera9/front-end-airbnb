
export const CHANGE_DATE = "CHANGE_DATE"
export const CHANGE_TITLEDATE = "CHANGE_TITLEDATE"
export const CHANGE_HEADDATE = "CHANGE_HEADDATE"


//action creator
export const changeDate = (value) => {
    return {
        type: CHANGE_DATE,
        payload: value
    }
}

 export const changeTitle=(value)=>{
    return{
        type: CHANGE_TITLEDATE,
        payload: value
    }
 }
 export const changeDateHead=(value)=>{
    return{
        type: CHANGE_HEADDATE,
        payload: value
    }
 }

// state
const initialState = {
    dates: [null,null],
    title: "",
    head: ""
}

//reducer
const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_DATE:
            return {
                ...state,
                dates: action.payload
            }
            case CHANGE_TITLEDATE:
            return {
                ...state,
                title: action.payload
            }
            case CHANGE_HEADDATE:
            return {
                ...state,
                head: action.payload
            }
        default:
            return state
    }
}

export default calendarReducer