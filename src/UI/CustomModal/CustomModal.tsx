import React,{FC} from 'react';
import "./CustomModal.sass";

interface ModalProps{
    active:boolean;
    setActive:React.Dispatch<React.SetStateAction<boolean>>;
    children:React.ReactNode;
}
const CustomModal: FC<ModalProps> = ({active,setActive,children}) => {
    return (
        <div className={active ? "modal active" : "modal"}onClick={()=> setActive(false)}>
        <div className="modal_content" onClick={e=>e.stopPropagation()}>    
            {children}
        </div>
    </div>
    );
};

export default CustomModal;