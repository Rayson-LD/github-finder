import React from 'react';
import {useState,useEffect} from 'react';
import Spinner from '../layouts/Spinner';
import UserCard from './UserCard';

function Userlist() {
    const [User,SetUser] = useState([])
  const  [loading, setloading] = useState(true);
  useEffect(() => {
    Fetch()
  }, []);
  
  const Fetch = async() =>{
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`)
    const data = await response.json()
    console.log(data)
    SetUser(data)
    setloading(false)
  }
  if(!loading)
  {
    return (
        <div className="grid grid-cols-3 gap-2 pl-2  pb-10 pr-2">
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
