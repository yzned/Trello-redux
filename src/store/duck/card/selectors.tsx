import { RootState } from "../../store";
 
export const cardSelectors ={
    getCardsByColumnId:((state:RootState,cardId:string)=>
    state.cards.cards.find(card=>card.cardId==cardId)
    )
} 