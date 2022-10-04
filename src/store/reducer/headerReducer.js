export const FLIP = 'FLIP';
export const FLIPMENU = 'FLIPMENU';
export const FALSE = 'FALSE';
//action creator
export const flip = () => {
  return {
    type: FLIP,
    payload:
      initialState.headerPopover === ''
        ? (initialState.headerPopover = 'something')
        : (initialState.headerPopover = ''),
  };
};
export const flipMenu = () => {
  return {
    type: FLIPMENU,
    payload:
      initialState.menuPopover === ''
        ? (initialState.menuPopover = 'something')
        : (initialState.menuPopover = ''),
  };
};
// state
const initialState = {
  headerPopover: '',
  menuPopover: '',
};

//reducer
const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIP:
      return {
        ...state,
        headerPopover: action.payload,
      };
    case FLIPMENU:
      return {
        ...state,
        menuPopover: action.payload,
      };
    default:
      return state;
  }
};

export default headerReducer;
