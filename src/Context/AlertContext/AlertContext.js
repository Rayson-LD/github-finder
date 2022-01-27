import { createContext, useReducer } from "react";
import AlertReducer from "./AlertReducer";
const AlertContext = createContext()

export const AlertProvider = ({children}) =>{
    const initialState = null
    
    const  [state, dispatch] = useReducer(AlertReducer, initialState);
    
    const setAlert = (type,msg) =>{
        dispatch({
            type:'Set_Alert',
            payload:{type,msg}
        })

        setTimeout(()=>{
            dispatch(
                {
                    type:'Stop_Alert',  
                }
            )
        },3000)
    }
    return <AlertContext.Provider value={{
        alert:state,
            setAlert
    }}>
        {children}
    </AlertContext.Provider>
}
export default AlertContext;