import {createSlice} from "@reduxjs/toolkit"
export interface MyState{
    userName:string,
    hasVisited:string
}
const accountSlice = createSlice({
    name:"account",
    initialState:{
        userName:"",
        hasVisited:"true"
    } as MyState,
    reducers:{
        changeUserName(state,action){
            state.userName=action.payload
        },
        changeHasVisitedStatus(state,action){
            state.hasVisited=action.payload;
        },
    }
})
export const {changeUserName,changeHasVisitedStatus} = accountSlice.actions;
export default accountSlice.reducer;