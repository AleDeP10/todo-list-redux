const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
    user: {
        displayName: null,
        email: null,
        createdAt: null
    },
    logged: false
}

export default function userReducer(state = initialState, action) {
    console.log({ state, action });
    const {type, payload} = action;
    switch (type) {
        case SET_USER_DATA:
            const user = {
                displayName: payload.displayName,
                email: payload.email,
                createdAt: payload.createdAt
            }
            return {
                ...state,
                user: user,
                logged: true,
            }
        default: 
            return state;
    }
}

export function setUserData(displayName, email, createdAt) {
    return {type: SET_USER_DATA, payload: {displayName, email, createdAt}}
}