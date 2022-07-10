const SET_ITEMS = 'SET_ITEMS';
const TOGGLE_DONE = 'TOGGLE_DONE';
const ADD_ITEM = 'ADD_ITEM';

const initialState = {
    items: [{
        text: "App with state",
        done: true,
        id: Math.random()*6
    }, {
        text: "App with redux",
        done: true,
        id: Math.random()*6
    }, {
        text: "App with backend",
        done: false,
        id: Math.random()*6
    }
    ],
    loading: false,
    error: null
}

export default function itemReducer(state = initialState, action) {
    console.log({ state, action });
    switch (action.type) {
        case SET_ITEMS:
            console.log("set items", { payload: action.payload, items: action.payload.items });
            return {
                ...state,
                loading: false,
                items: action.payload.items
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
        case ADD_ITEM: {
            const { title } = action.payload;
            console.log("add item", {payload: action.payload, title});
            const array = state.items.concat({
                text: title,
                done: false,
                id: Math.random()*6
            });
            console.log(array);
            return {
                ...state,
                items: array
            }
        }
        default:
            return state
    }
}

export function setItems(items) {
    return {
        type: SET_ITEMS,
        payload: {
            items
        }
    }
}

export function toggleDone(title, prevValue) {
    return {
        type: TOGGLE_DONE,
        payload: {
            title, 
            prevValue
        }

    }
}

export function addItem(title) {
    return {
        type: ADD_ITEM,
        payload: {
            title
        }
    }
}