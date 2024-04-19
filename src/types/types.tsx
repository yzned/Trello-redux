export interface ColumnTypes {
    columnId:number;
    name: string;
    cards: ICards[]; 
}
export interface ICards{
    cardName:string;
    description:string;
    columnId:number;
    cardId:string;
    commentaries:ICommentaries[];
}
export interface ICommentaries{
    comment:string;
    commentId:string;
}

export interface ContextTypes{
    columnData:ColumnTypes[];
    setColumnData:React.Dispatch<React.SetStateAction<ColumnTypes[]>>;
}