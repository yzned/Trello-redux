import "./MainPage.scss";
import Column from './Column/Column';
import {ColumnTypes } from '../../types/types';
import {changeHasVisitedStatus, changeUserName} from "../../store/duck/user/slice"
import { setDefaultValue } from '../../store/duck/column/slice';
import { useAppSelector,useAppDispatch } from '../../store/hook';
import { registrationSelectors } from '../../store/duck/user/selectors';
import { columnSelectors } from "../../store/duck/column/selectors";
import { setDefaultValueCards } from "../../store/duck/card/slice";

const MainPage = () => {
    const userName = useAppSelector(registrationSelectors.getUserName);
    const columns = useAppSelector(columnSelectors.getColumns);
    const dispatch= useAppDispatch();

    const leaveAccount =()=>{
        dispatch(changeUserName(""));
        dispatch(changeHasVisitedStatus("false"));
        dispatch(setDefaultValue());
        dispatch(setDefaultValueCards());
    }

    return (
            <div className="Main_Page">
                <header className="Main_Page_Header">
                    <h1 className='logo'>
                        TRELLO
                    </h1>
                    <div className='Header_username'>
                        <div>
                            Имя пользователя : {userName}
                        </div>
                        <button onClick={leaveAccount}>
                            Выход
                        </button>
                    </div>
                </header>
                <div className='Columns'>
                {columns.map((column:ColumnTypes)=>
                    <Column 
                        columnName={column.name} 
                        id ={column.columnId}
                        key={column.columnId}  
                    />      
                )}   
                </div>
            </div>
    );
};

export default MainPage;