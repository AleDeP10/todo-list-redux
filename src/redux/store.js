import { configureStore } from '@reduxjs/toolkit'
import itemReducer from './item';

const store = configureStore({ reducer: itemReducer })

export default store;