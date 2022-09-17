
export const CHANGE_DATE = "CHANGE_DATE"


//action creator
export const changeDate = (value) => {
    return {
        type: CHANGE_DATE,
        payload: value
    }
}


const initialState = {
    dates: [null,null],
}


const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_DATE:
            return {
                ...state,
                dates: action.payload
            }
        default:
            return state
    }
}

export default calendarReducer