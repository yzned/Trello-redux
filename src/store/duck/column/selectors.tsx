import { RootState } from "../../../store/store";
import { ColumnTypes } from "../../../types/types";
 
export const columnSelectors ={
    getColumns:(state:RootState)=>state.columns.columns,

    getColumnName:(state:RootState,columnId:number)=>state.columns.columns
        .find((column:ColumnTypes):column is ColumnTypes=>column.columnId===columnId)?.name,

    getCards:((state:RootState,columnId:number)=>state.cards.cards.filter((card)=>card.columnId===columnId))
}