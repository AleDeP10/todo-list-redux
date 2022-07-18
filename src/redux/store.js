import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import itemReducer from './item';
import userReducer from './user';

const rootReducer = combineReducers({item: itemReducer, user: userReducer})

const store = configureStore({ reducer: rootReducer })

export default store;