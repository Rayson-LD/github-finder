import React from 'react';
import {useContext} from 'react';
import GitHubContext from '../../Context/UsersContext/GithubContext';
function Alert() {
    const {setAlert} = useContext(GitHubContext)
   
  return setAlert !== null && (
  <div class="alert alert-error">
      {setAlert.type === 'error' &&(
          <div class="flex-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 mx-2 stroke-current">    
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>                      
          </svg> 
          <label>{setAlert.msg}</label>
        </div>
      

      )}
      </div>
  );
}

export default Alert;
