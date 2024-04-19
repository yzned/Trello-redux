import {FC,useState} from 'react';
import { ICommentaries } from '../../../../../types/types';
import { useAppDispatch, useAppSelector } from '../../../../../store/hook';
import { changeComment,deleteComment } from '../../../../../store/duck/card/slice';
interface CommentProps{
    id:number;
    cardId:string;
    comment: ICommentaries;
}
const Comment:FC<CommentProps> = ({cardId,comment}) => {
    const userName  = useAppSelector(state=>state.user.userName);
    const dispatch = useAppDispatch();
    const [commentIdBeingEdited, setCommentIdBeingEdited] = useState("");
    const delitingComment =()=>{
       dispatch(deleteComment({cardId,commentId:comment.commentId}))
    }   
    const startEditing=()=>{
        setCommentIdBeingEdited(comment.commentId);
    }
    const stopEditing=()=>{
        setCommentIdBeingEdited("");
    }

    const setChangeComment=(event: React.ChangeEvent<HTMLTextAreaElement>)=>{
        dispatch(changeComment({cardId,commentId:comment.commentId,changedComment:event.target.value}));
    }

    return (
        <div>
             <h2 className='userName'>{userName}</h2>
                <textarea
                    className='TextArea_comment'
                    cols={54} 
                    rows={2} 
                    disabled={commentIdBeingEdited !== comment.commentId}
                    onChange={setChangeComment}
                    onBlur={stopEditing}
                >
                    {comment.comment} 
                </textarea>
            <div className="Comment_btn"
            onClick={startEditing}
            >Изменить </div> 
            <div className="Comment_btn" onClick={delitingComment}>Удалить</div>
        </div>
    );
};

export default Comment;