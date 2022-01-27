import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GitHubContext = createContext()
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
export const GithubProvider = ({children}) => {

    const initialState = {
        User:[],
        loading:false
    }
    const setLoading = () =>{
        dispatch({
            type:'Set_loading',
            loading:true
        })
    }
    const clear = () =>{
        dispatch({
            type:'Set_Clear',
            User:[]
        })
    }
    const  [state, dispatch] = useReducer(GithubReducer, initialState);
    
    const searchUser = async (text) => {
        const params = new URLSearchParams({
            q:text,
        })
        setLoading()
        const response = await fetch(`${GITHUB_URL}/search/users?${params}`)
        const {items} = await response.json()
        
        dispatch ( {
            type:'Get_Users',
            payload:items,
            
        })
      }
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
      return <GitHubContext.Provider value={{
          User:state.User,
          loading: state.loading,
          searchUser,
          clear,
          setAlert
          
      }}>
          {children }
          
      </GitHubContext.Provider>
}
export default GitHubContext