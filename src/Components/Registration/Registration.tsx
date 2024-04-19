import { useState} from 'react';
import {useSelector,useDispatch} from "react-redux";
import "./Registration.scss";
import CustomModal from '../../UI/CustomModal/CustomModal';
import {changeHasVisitedStatus, changeUserName} from "../../store/duck/user/slice"
import { SubmitHandler,useForm } from 'react-hook-form';
import { useAppSelector } from '../../store/hook';
import { registrationSelectors } from '../../store/duck/user/selectors';
interface RegistrationForm{ 
    userName:string
}
const Registration = () => {
    const [modalActive,setModalActive] = useState(true);
    const hasVisited:string = useAppSelector(registrationSelectors.checkHasVisitedStatus);

    const dispatch = useDispatch();
    const { register,handleSubmit,formState:{errors} } = useForm<RegistrationForm>();

    const submit:SubmitHandler<RegistrationForm> = (data)=>{
        dispatch(changeUserName(data.userName));
        dispatch(changeHasVisitedStatus("true"));
        window.location.reload();
        setModalActive(false)
    }
    
    const closingBan =()=>{
        setModalActive(true)
    }
    if(hasVisited==="false"){
        return (
                <CustomModal active={modalActive} setActive={closingBan}>
                    <form className='Registration_Modal' onSubmit={handleSubmit(submit)}>
                        <input type="text" 
                            placeholder='Имя пользователя'
                            {...register("userName",{required:true})}
                        />
                        <div>
                        {errors.userName&&(<div className='error'>Введите имя!</div>)}
                        </div>
                        <button className='registration_btn'>Регистрация</button>
                    </form> 
                </CustomModal>
        );
    }
    
};
export default Registration;