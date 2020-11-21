export const initialState = {
  user: null,
};

const reducer = (state, action) => {
  console.log(action.user);
  switch (action.type) {
    case 'SET_USER':
        // logic to add user 
      return {
        ...state,
        user: action.user,
      }  
    default:
      return state;
  }
};
export default reducer;
