export interface changeColumnNameTypes{
    id:number;
    columnName:string;
}
export interface CardType{
    columnId:number;
    cardId:string;
}
export interface addingCardTypes{
    columnId:number;
}
export interface changeCardNameTypes{
    cardId:string;
    cardName:string;
}
export interface changeCardDescriptionTypes{
    cardId:string;
    description:string;
}
export interface deleteCardTypes{
    cardId:string;
}
export interface createCommentTypes{
    cardId:string;
    comment:string;
}
export interface deleteCardCommentTypes{
    cardId:string;
    commentId:string;
}
export interface changeCommentTypes{
    cardId:string;
    commentId:string;
    changedComment:string;
}