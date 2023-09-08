
const initialState = {
    transactions:[]
};
const transactionRed = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return [...state, action.payload];
    case 'DELETE_TRANSACTION':
      return state.filter((elem) => elem.id !== action.payload);
    case 'UPDATE_TRANSACTION':
      return state.map((elem) =>
        elem.id === action.payload.id ? action.payload : elem
      );
    default:
      return state;
  }
};

export default transactionRed;
