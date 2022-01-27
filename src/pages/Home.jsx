import React from 'react';
import UserSearch from '../components/users/UserSearch';


import Userlist from '../components/users/Userlist';
function Home() {
  
 
  return(
    <div className="flex  min-h-screen">
    <UserSearch/> 
    <Userlist />
    </div>
  );
  
}

export default Home;
