
const initialState = {
    transactionHistory: [],
}

const histReducer = (state = initialState, action) => {
    switch(action.type){
       case 'FETCH_TRANSACTION_HISTORY':
            return {
                ...state,
                transactionHistory: action.payload,
            }
        case 'DELETE_TRANSACTION_HISTORY':
            const updatedTransactions = state.transactionHistory.filter((elem) => elem.id !== action.payload.id);
            return {
                ...state,
                transactionHistory: updatedTransactions,
            }
        
        default:
            return state;
    }

}

export default histReducer;