import { createContext, useState } from "react";

const GitHubContext = createContext()
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
export const GithubProvider = ({children}) => {

    const [User,SetUser] = useState([])
    const  [loading, setloading] = useState(true);
    const Fetch = async() =>{
        const response = await fetch(`${GITHUB_URL}/users`)
        const data = await response.json()
        
        SetUser(data)
        setloading(false)
      }
      return <GitHubContext.Provider value={{
          User,
          loading,
          Fetch
      }}>
          {children }
          
      </GitHubContext.Provider>
}
export default GitHubContext