export const RESERV_LOADING = "RESERV_LOADING";
export const RESERV_AGENDED = "RESERV_AGENDED";
export const RESERV_All = "RESERV_All";
export const RESERV_PASSED = "RESERV_PASSED";
export const RESERV_ERROR = "RESERV_ERROR";

const initialState = {
  agended: [],
  passed: [],
  loading: true,
  error: "",
};

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESERV_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case RESERV_All:
      return {
        ...state,
        post: action.payload,
      };
    case RESERV_AGENDED:
      return {
        ...state,
        post: action.payload,
      };
    case RESERV_PASSED:
      return {
        ...state,
        post: action.payload,
      };
    case RESERV_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reservationReducer;
