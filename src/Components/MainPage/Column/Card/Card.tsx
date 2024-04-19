import {FC ,useState} from 'react';
import "./Card.scss";
import CustomModal from '../../../../UI/CustomModal/CustomModal';
import Comment from './Comment/Comment';
import { useAppDispatch ,useAppSelector} from '../../../../store/hook';
import { current } from '@reduxjs/toolkit';
import { ICards } from '../../../../types/types';
import { columnSelectors } from '../../../../store/duck/column/selectors';
import { registrationSelectors } from '../../../../store/duck/user/selectors';
import { cardSelectors } from '../../../../store/duck/card/selectors';
import { changeCardDescription, changeCardName, createNewComment, deleteCard } from '../../../../store/duck/card/slice';
interface CardProps {
    cardId:string;
    id:number;
}
const Card:FC<CardProps> = ({cardId,id}) => {
    const [modalActive,setModalActive] = useState(false);
    const [currentComment,setCurrentComment] = useState("");
    const dispatch = useAppDispatch();
    const userName  = useAppSelector(registrationSelectors.getUserName);

    const columnName = useAppSelector((state)=>columnSelectors.getColumnName(state,id));

    const cardName = useAppSelector((state)=>cardSelectors.getCardsByColumnId(state,cardId)?.cardName);
    
    const description = useAppSelector((state)=>cardSelectors.getCardsByColumnId(state,cardId)?.description);

    const comments = useAppSelector((state)=>cardSelectors.getCardsByColumnId(state,cardId)?.commentaries);
    
    const showModal=()=>{
        setModalActive(true)

    }
    const closeModal=()=>{
        setModalActive(false)
    }

    const setCardName=(event: React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(changeCardName({cardId:cardId,cardName:event.target.value}))
    }
    const deletingCard=()=>{
        dispatch(deleteCard({cardId}));
    }
    const changingCardDescription =(event:React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(changeCardDescription({cardId,description:event.target.value}))
    }
   
    const setChangeCurrentComment=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setCurrentComment(event.target.value);
    }
    const createComment=()=>{
        dispatch(createNewComment({cardId,comment:currentComment}));
    }
    
    return (
        <div className='Card'>
            <div  className='Card_Modal_Opening' onClick={showModal}>
            </div>
            <input className="Card_Name" type="text" placeholder='Имя карточки'  
                value={cardName}
                onChange={setCardName}
                autoFocus   
            />
            <p >Comments: {comments?.length}</p>
            <CustomModal active={modalActive} setActive={setModalActive}>
                   <div className='Card_modal'>
                        <div className='Card_modal_mainPart'>
                            <button onClick={closeModal} className='Close_btn'>
                                X
                            </button>
                            <input className="Card_Name_modal" type="text" placeholder='Имя карточки'  
                                value={cardName}
                                onChange={setCardName}
                            />
                            <div className='Card_Modal_Data'>В колонке : {columnName}</div>
                            <div className='Card_Modal_Data'>Пользователь : {userName}</div>
                            <h1 className='Card_modal_rubric'>Описание</h1>
                            <input 
                                className='Card_Modal_Input'
                                type="text" 
                                value ={description}
                                placeholder='Добавьте более подробное описание...'
                                onChange={changingCardDescription}
                            />
                             
                            <h1 className='Card_modal_rubric'>Комментарии</h1>

                            <input type="text" 
                                placeholder='Напишите комментарий' 
                                className='Card_Modal_Input'
                                onChange={setChangeCurrentComment}
                            />

                            <button onClick ={createComment}>Сохранить</button>
                            <div>
                                {comments && comments.map((comment)=>(
                                    <div key={comment.commentId} className='Card_Comment'>
                                       <Comment
                                        id={id}
                                        cardId={cardId}
                                        comment={comment}
                                       />
                                    </div>
                                ))
                                } 
                            </div>
                        </div> 
                        <div className='deleteCard'>
                            <button  className='deleteCard_btn' onClick={deletingCard}>Удалить карточку</button>
                        </div>
                   </div>
            </CustomModal>
        </div>
    );
};

export default Card;