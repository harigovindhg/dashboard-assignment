import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './slices/dataSlice';

const store = configureStore({
    reducer: {
        dataApp: dataSlice,
    },
});

export default store;
