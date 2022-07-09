import { configureStore } from '@reduxjs/toolkit'
import itemReducer from './redux/item';

const store = configureStore({ reducer: itemReducer })

console.log(store.getState())