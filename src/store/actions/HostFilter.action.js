import axios from "axios";

import {
    POST_SUCCESS,
    POST_ERROR,
    POST_LOADING,
} from "../reducer/filterReducer";

export const getPosts = (data) => {
    const convertion = 1000*60*60*24
    const all = []
    const agended =[]
    const passed = []
    return async (dispatch) =>{
        try{
            dispatch({ type: POST_LOADING, payload: true })
            const { data } = await axios.get(
                "https://airbnbclonetop24.herokuapp.com/reservations/showHost",
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );
            data.data.homes.forEach(home=>{
                if (home.reservations.length === 0) return 
                home.reservations.forEach(reservation=>{
                    const final = Math.floor(reservation.final.finalDate /convertion) 
                    const now = Math.floor(Date.now() /convertion)
                    if (final <= now){
                        agended.push(reservation)
                    } else {
                        passed.push(reservation)
                    }
                })
            })
            dispatch({ type: POST_SUCCESS, payload: res.data.data })
            dispatch({ type: POST_LOADING, payload: false })
        } catch(err){
            dispatch({ type: POST_ERROR, payload: err })
        }
    }
}
