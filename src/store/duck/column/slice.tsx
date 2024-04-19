import {createSlice,PayloadAction} from "@reduxjs/toolkit"
import { ColumnTypes, ICards, ICommentaries } from "../../../types/types";
import { addingCardTypes, changeCardDescriptionTypes, changeCardNameTypes, 
    changeColumnNameTypes, createCommentTypes, deleteCardTypes,deleteCardCommentTypes, changeCommentTypes } from "../../types/reducersTypes";
interface ColumnState{
    columns: ColumnTypes[];
}
const defaultColumns = [
    { 
        columnId:1,
        name:"TODO",
        cards:[]
    },  
    {
        columnId:2,
        name:"In Progress",
        cards:[]
    },
    {
        columnId:3,
        name:"Testing",
        cards:[]
    },
    {
        columnId:4,
        name:"Done",
        cards:[]
    } 
]
const columnSlice = createSlice({
    name:"columns",
    initialState:{
    columns : defaultColumns
} as ColumnState,
    reducers:{
       changeColumnName (state,action:PayloadAction<changeColumnNameTypes> ){
        const column = state.columns.find((column) => column.columnId === action.payload.id);
        if (column) {
            column.name = action.payload.columnName;
        }
       } ,
       setDefaultValue(state){
        state.columns = defaultColumns
       },   
    } 
});

export const {
    changeColumnName,
    setDefaultValue,
    // addingCard,
    // changeCardName,
    // deleteCard,
    // deleteComment,changeComment,changeCardDescription,createNewComment
} = columnSlice.actions;
export default columnSlice.reducer;