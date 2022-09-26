export const FLIP = "FLIP"
export const FALSE = "FALSE"
//action creator
export const flip = () => {
    
   
    return {
        type: FLIP,
        payload: initialState.headerPopover===""?initialState.headerPopover="something":initialState.headerPopover=""
        
    }
}

// state
const initialState = {
    headerPopover: ""

}

//reducer
const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case FLIP:
            return {
                ...state,
                headerPopover: action.payload
            }
        default:
            return state
    }
}

export default headerReducer