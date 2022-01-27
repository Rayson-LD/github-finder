import React from 'react';
import {useState,useContext} from'react'
import Alert from '../layouts/Alert';
import GitHubContext from '../../Context/UsersContext/GithubContext';
import AlertContext from '../../Context/AlertContext/AlertContext';
function UserSearch() {
    const [text, settext] = useState('');
    const {User,searchUser,clear} = useContext(GitHubContext)
    const {setAlert} = useContext(AlertContext)
    const handleInput = (e) =>{

        settext(e.target.value)
        
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(text === '')
        {
            setAlert('error','Please enter something')
        }
        else{
          searchUser(text)
            settext('')
        }
    }
    const handleClear = (e) =>{
      clear()
    }
  return <div className="form-control   m-auto w-3/4">
  <label className=" text-center">
    <span className=" text-3xl">Search any Github Users</span>
  </label>
   <Alert />
  <div className="flex space-x-2 pt-10">
    <input type="text" placeholder="Search" value={text} onChange={handleInput} className="w-10/12  input input-primary input-bordered input-lg"/> 
    <button className="btn btn-primary btn-lg" onClick={handleSubmit}>go</button>
    {User.length > 0 &&(<button className="btn btn-ghost  btn-lg text-content" onClick={handleClear}>Clear</button>)}
  </div>
</div>

}

export default UserSearch;
