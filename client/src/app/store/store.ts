import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { todoAPI } from '../services/TodoService';

const rootReducer = combineReducers({
  [todoAPI.reducerPath]: todoAPI.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(todoAPI.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
