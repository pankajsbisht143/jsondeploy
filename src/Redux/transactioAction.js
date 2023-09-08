export const addTransaction = (type, category, amount, date) => {
    return (dispatch) => {
      fetch('http://localhost:3000/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type,
          category,
          amount,
          date,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: 'ADD_TRANSACTION',
            payload: data,
          });
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
  };
  



  export const deleteTransaction = (id) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/transactions/${id}`, {
        method: 'DELETE',
      })
        .then((response) => response.json())
        .then(() => {
          dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id,
          });
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
  };
  


  export const updateTransaction = (id, updatedTransaction) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/transactions/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTransaction),
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: 'UPDATE_TRANSACTION',
            payload: data,
          });
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
  };
  