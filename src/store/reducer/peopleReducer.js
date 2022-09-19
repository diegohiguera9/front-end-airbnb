
export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"


//action creator
export const increment = (value, who) => {
    console.log(value,who)
    
    return {
        
        type: INCREMENT,
        who: who,
        payload:  value +1
    }
}
export const decrement = (value, who) => {
    console.log(value,who)
    return {
        type: DECREMENT,
        who: who,
        payload:  value -1
    }
}


// state
const initialState = {
    countPeople:
    {
        adults: 2,
        children: 1,
        babies: 1,
        pets: 4,
    },

   
}

//reducer
const peopleReducer = (state = initialState, action) => {
    console.log(action.payload)
    console.log(state)
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                countPeople:{...state.countPeople,
                    [action.who]:action.payload
                }
            }
        case DECREMENT:
            return {
                ...state,
                countPeople:{...state.countPeople,
                    [action.who]:action.payload
                }
            }
        default:
            return state
    }
}

export default peopleReducer