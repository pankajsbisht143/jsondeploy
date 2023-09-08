

export const signupUser = (name, email, password) => {
    return (dispatch) => {
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                dispatch({
                    type: 'SIGNUP_USER',
                    payload: data,
                });
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
};



export const loginUser = (email, password) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/users?email=${email}&password=${password}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.length > 0) {
                    dispatch({
                        type: 'LOGIN_USER',
                        payload: data[0],
                    });
                } else {
                    dispatch({
                        type: 'LOGIN_FAILURE',
                    });
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
};
