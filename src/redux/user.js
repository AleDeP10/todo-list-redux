const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
    user: {
        displayName: null,
        email: null,
        createdAt: null
    },
    userRef: null
}

export default function userReducer(state = initialState, action) {
    console.log({ state, action });
    const { type, payload } = action;
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
                userRef: payload.userRef
            }
        default:
            return state;
    }
}

export function setUserData(displayName, email, createdAt, userRef) {
    return { type: SET_USER_DATA, payload: { displayName, email, createdAt, userRef } }
}