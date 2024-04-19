import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addingCardTypes, CardType, changeCardDescriptionTypes, changeCardNameTypes, changeCommentTypes, createCommentTypes, deleteCardCommentTypes, deleteCardTypes } from '../../types/reducersTypes';
import { ICards, ICommentaries } from '../../../types/types';
import { stat } from 'fs';

type CardState = { 
    cards:ICards[];
}

export const cardSlice = createSlice({
    name:'cards',
    initialState:
    {
        cards:[]
    } as CardState,
    reducers:{
        addingCard(state,action:PayloadAction<addingCardTypes>){
            const date = new Date(Date.now()).toLocaleString();
            const newCard:ICards={
                cardName:'',
                cardId:date,
                columnId:action.payload.columnId,
                description:'',
                commentaries:[]
            }
            state.cards.push(newCard)
       },
       setDefaultValueCards(state){
        state.cards=[];
       },
       changeCardName(state,action:PayloadAction<changeCardNameTypes>){
        const card = state.cards.find(card=>card.cardId===action.payload.cardId);
        if(card){
            card.cardName=action.payload.cardName;
        }
       },
       deleteCard(state,action:PayloadAction<deleteCardTypes>){
        state.cards= state.cards.filter(card=>card.cardId!==action.payload.cardId);
       },
       changeCardDescription(state,action:PayloadAction<changeCardDescriptionTypes>){
        const card = state.cards.find(card=>card.cardId===action.payload.cardId);
        if(card){
            card.description=action.payload.description;
        }
       },
       createNewComment(state,action:PayloadAction<createCommentTypes>){
        const card = state.cards.find(card=>card.cardId===action.payload.cardId);
        const date = new Date(Date.now()).toLocaleString();
        const newComment:ICommentaries ={
            commentId:date,
            comment:action.payload.comment
        } 
        if(card){
            card.commentaries.push(newComment);
        }
       },
       changeComment(state,action:PayloadAction<changeCommentTypes>){
        const card = state.cards.find(card=>card.cardId===action.payload.cardId);
        const comment = card?.commentaries.find(comment=>comment.commentId===action.payload.commentId);
        if(comment){
            comment.comment = action.payload.changedComment;
        }
       },
       deleteComment(state,action:PayloadAction<deleteCardCommentTypes>){
        const card = state.cards.find(card=>card.cardId===action.payload.cardId);
        if(card){
            card.commentaries = card.commentaries.filter(comment=>comment.commentId!==action.payload.commentId);
        }
       }
       
    }
});

export const {
    addingCard,setDefaultValueCards,
    changeCardName,deleteCard,
    changeCardDescription,createNewComment,
    changeComment,deleteComment} = cardSlice.actions;
export default cardSlice.reducer;