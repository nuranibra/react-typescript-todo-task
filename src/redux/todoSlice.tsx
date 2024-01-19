import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name:'todos',
    initialState:[],
    reducers:{
        addTodo:(state:any,action:any) => {
        state.push(action.payload)
    },
    handleToogle:(state:any,action:any) => {
        state.map((item: {id:any, completed:boolean}) => {
            if(item.id === action.payload){
                item.completed = !item.completed
            }
        })
    }
}
});

export const {addTodo, handleToogle} = todoSlice.actions;
export default todoSlice.reducer;