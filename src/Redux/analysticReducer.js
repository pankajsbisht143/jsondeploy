

const initialState = {
    incomeData: [],
    expenseData: [],
}

const analysticReducer = (state = initialState, action) => {
    switch(action.type){
       case 'FETCH_INCOME_DATA':
            return {
                ...state,
                incomeData: action.payload,
            }

        case 'FETCH_EXPENSE_DATA':
            return {
                ...state,
                expenseData: action.payload,
            }
        
        default:
            return state;
    }

}

export default analysticReducer;