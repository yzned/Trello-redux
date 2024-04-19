import React,{FC} from 'react';
import "./Column.scss";
import Card from './Card/Card';
// import { addingCard, changeColumnName } from '../../../store/columnSlice';
import { ColumnTypes, ICards } from '../../../types/types';
import { useAppSelector,useAppDispatch } from '../../../store/hook';
import { columnSelectors } from '../../../store/duck/column/selectors';
import { changeColumnName } from '../../../store/duck/column/slice';
import { addingCard } from '../../../store/duck/card/slice';
import { CardType } from '../../../store/types/reducersTypes';

interface ColumnProps{
    columnName:string;
    id:number; 
}
const Column:FC <ColumnProps> = ({id}) => {
    const columnName = useAppSelector((state)=>columnSelectors.getColumnName(state,id))
    const dispatch = useAppDispatch();
    const handleColumnName = (event:React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(changeColumnName({columnName:event.target.value,id}))
    }
    const cards = useAppSelector((state)=>columnSelectors.getCards(state,id));
   
    const addCard =()=>{
        dispatch(addingCard({columnId:id}));
        
    }
    return (
        <div className='Column'>    
            <input 
                className='Column_Name'
                type="text" 
                value={columnName}  
                onChange={handleColumnName}
            />
            <button onClick={addCard}>Добавить карточку</button>
            {cards!==undefined 
                ?
                cards.map((card:CardType)=>
                    <Card 
                        cardId={card.cardId}
                        id={id}
                        key={id}
                    />
                )
                :<div>У вас нет карточек</div>
            }
        </div>
    );
};

export default Column;