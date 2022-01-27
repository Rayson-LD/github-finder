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
    const  [state, dispatch] = useReducer(GithubReducer, initialState);
    const Fetch = async() =>{
        setLoading()
        const response = await fetch(`${GITHUB_URL}/users`)
        const data = await response.json()
        
        dispatch ( {
            type:'Get_Users',
            payload:data,
            
        })
      }
      return <GitHubContext.Provider value={{
          User:state.User,
          loading: state.loading,
          Fetch
      }}>
          {children }
          
      </GitHubContext.Provider>
}
export default GitHubContext