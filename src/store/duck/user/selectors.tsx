import { RootState } from "../../../store/store";
 
export const registrationSelectors ={
    checkHasVisitedStatus:(state:RootState)=>state.user.hasVisited,
    getUserName:((state:RootState)=>state.user.userName),
}