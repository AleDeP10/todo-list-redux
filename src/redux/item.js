const SET_ITEMS = 'SET_ITEMS';
const TOGGLE_DONE = 'TOGGLE_DONE';
const ADD_ITEM = 'ADD_ITEM';

const initialState = {
    items: [{
        text: 'App with state',
        done: true,
        id: Math.random()
    }, {
        text: 'App with redux',
        done: true,
        id: Math.random()
    }, {
        text: 'App with backend',
        done: false,
        id: Math.random()
    }]
}

export default function itemReducer(state = initialState, action) {
    console.log({ state, action });
    switch (action.type) {
        case SET_ITEMS:
            console.log('set items', { payload: action.payload, items: action.payload.items });
            return {
                ...state,
                items: action.payload.items
            }
        case TOGGLE_DONE: {
            const { id } = action.payload;
            console.log('toggle done', { payload: action.payload, id });
            const array = [];
            state.items.map(item => {
                const copy = { ...item };
                if (copy.id === id) {
                    copy.done = !copy.done;
                }
                array.push(copy);
            });
            return {
                ...state,
                items: array
            }
        }
        case ADD_ITEM: {
            const { title } = action.payload;
            console.log('add item', { payload: action.payload, title });
            const array = state.items.concat({
                text: title,
                done: false,
                id: Math.random()
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

export function setItems(items) {
    console.log('setItems', items);
    return {
        type: SET_ITEMS,
        payload: {
            items
        }
    }
}

export function toggleDone(id) {
    return {
        type: TOGGLE_DONE,
        payload: {
            id
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