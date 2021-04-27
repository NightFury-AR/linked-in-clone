import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
});


export const store = configureStore({
  middleware:customizedMiddleware,
  reducer: {
    user: userReducer,
  },
});
