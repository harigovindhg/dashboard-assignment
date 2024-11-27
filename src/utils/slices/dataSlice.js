import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        tableData: {}
    },
    reducers: {
        updateTable: (state, action) => {
            state.tableData = action.payload
        }
    }
})

export const { updateTable } = dataSlice.actions;

export default dataSlice.reducer;
