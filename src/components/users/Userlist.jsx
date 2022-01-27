import React from 'react';
import {useContext} from 'react';
import Spinner from '../layouts/Spinner';
import UserCard from './UserCard';
import GitHubContext from '../../Context/UsersContext/GithubContext';
function Userlist() {
  const {User,loading} = useContext(GitHubContext)
  
  
 
  if(!loading)
  {
    return (
        <div className="grid grid-cols-3 gap-2 pl-2  pb-10 pt-5 pr-2">
          {
          User.map((user)=>(
              <UserCard key={user.id} userinfo={user}/>
          )
              )
            }
         </div>
         );
  }
  else{
      return <Spinner />
  }
  
}


export default Userlist;
