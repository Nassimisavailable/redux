import { configureStore } from '@reduxjs/toolkit';
import  TodoSlice  from './Slice/TodoSlice';


export const store = configureStore ({
    reducer: {
     todo: TodoSlice,
    },
});