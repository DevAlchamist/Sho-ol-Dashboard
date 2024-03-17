// src/store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
// import usersReducer from '../app/user/';

const rootReducer = combineReducers({
//   users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
