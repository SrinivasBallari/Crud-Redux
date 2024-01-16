import { createSlice } from "@reduxjs/toolkit";
import { todoList } from './Data';

const taskSlice = createSlice({
    name: "tasks",
    initialState: todoList,
    reducers: {
        
    }
});

export default taskSlice.reducer;