import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GitHubContext = createContext()
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
export const GithubProvider = ({children}) => {

    const initialState = {
        User:[],
        repos:[],
        loading:false,
        user:{},
        
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
      const getUserRepos = async (login) => {
        setLoading()
        const response = await fetch(`https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc`);
        if(response.status === 404)
        {
            window.location = '\NoFound'
        }
        else{
            const data = await response.json()
        
        dispatch({
          type: 'GET_REPOS',
          payload: data,
        })
        }
        
      }
      
      return <GitHubContext.Provider value={{
          User:state.User,
          loading: state.loading,
          user:state.user,
          repos:state.repos,
          searchUser,
          clear,
          UserDetails,
          getUserRepos
          
          
      }}>
          {children }
          
      </GitHubContext.Provider>
}
export default GitHubContext