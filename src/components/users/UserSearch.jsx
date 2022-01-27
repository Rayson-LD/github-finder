import React from 'react';
import {useState,useContext} from'react'
import GitHubContext from '../../Context/UsersContext/GithubContext';
function UserSearch() {
    const [text, settext] = useState('');
    const {User,searchUser} = useContext(GitHubContext)
    const handleInput = (e) =>{

        settext(e.target.value)
        
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(text === '')
        {
            alert("Please add something")
        }
        else{
          searchUser(text)
            settext('')
        }
    }
  return <div className="form-control  m-auto w-3/4">
  <label className=" text-center">
    <span className=" text-3xl">Search any Github Users</span>
  </label> 
  <div className="flex space-x-2 pt-10">
    <input type="text" placeholder="Search" value={text} onChange={handleInput} className="w-10/12  input input-primary input-bordered input-lg"/> 
    <button className="btn btn-primary btn-lg" onClick={handleSubmit}>go</button>
    {User.length > 0 &&(<button className="btn btn-ghost  btn-lg text-content" >Clear</button>)}
  </div>
</div>

}

export default UserSearch;
