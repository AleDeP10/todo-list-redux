const GET_ITEMS_REQUESTED = 'GET_ITEMS_REQUESTED';
const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
const GET_ITEMS_FAILED = 'GET_ITEMS_FAILED';
const TOGGLE_DONE = 'TOGGLE_DONE';

const initialState = {
    items: [{
        text: "App with state",
        done: true
    }, {
        text: "App with redux",
        done: true
    }, {
        text: "App with backend",
        done: false
    }
    ],
    loading: false,
    error: null
}

export default function itemReducer(state = initialState, action) {
    console.log({ state, action });
    switch (action.type) {
        case GET_ITEMS_REQUESTED:
            console.log("items requested");
            return {
                ...state,
                loading: true,
            }
        case GET_ITEMS_SUCCESS:
            console.log("items success", { payload: action.payload, items: action.payload.items });
            return {
                ...state,
                loading: false,
                items: action.payload.items
            }
        case GET_ITEMS_FAILED:
            console.log("items failed", { payload: action.payload, message: action.payload.message });
            return {
                ...state,
                loading: false,
                error: action.payload.message,
            }
        case TOGGLE_DONE: {
            const { title, prevValue } = action.payload;
            console.log("toggle done", { payload: action.payload, title, prevValue });
            const array = [...state.items];
            array.map(item => {
                if (item.text === title) {
                    item.done = !prevValue;
                }
                //return true;
            });
            return {
                ...state,
                items: array
            }
        }
        default:
            return state
    }
}

export function getItemsRequest() {
    return {
        type: GET_ITEMS_REQUESTED,
    }
}

export function getItemsSuccess(items) {
    return {
        type: GET_ITEMS_SUCCESS,
        payload: {
            items
        }
    }
}

export function getItemsFailed(message, error) {
    return {
        type: GET_ITEMS_FAILED,
        payload: {
            message,
            error
        }
    }
}

export function toggleDone(title, prevValue) {
    return {
        type: TOGGLE_DONE,
        payload: {
            title, prevValue
        }

    }
}