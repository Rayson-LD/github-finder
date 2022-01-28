import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GitHubContext = createContext()
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
export const GithubProvider = ({children}) => {

    const initialState = {
        User:[],
        loading:false,
        user:{}
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
      const UserDetails = async (login) => {
        
        setLoading()
        const response = await fetch(`${GITHUB_URL}/users/${login}`)
        
        if(response.status === 404)
        {
            window.location = '\NoFound'
        }
        else{
            const data = await response.json()
            dispatch ( {
                type:'Get_User',
                payload:data,
                
            })
        }
        
      }
      
      return <GitHubContext.Provider value={{
          User:state.User,
          loading: state.loading,
          user:state.user,
          searchUser,
          clear,
          UserDetails
          
          
      }}>
          {children }
          
      </GitHubContext.Provider>
}
export default GitHubContext