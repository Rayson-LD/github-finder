import React from 'react';
import {useEffect,useContext} from 'react'
import { FaUserFriends,FaUsers,FaCodepen,FaStore,FaClock,FaDesktop } from 'react-icons/fa';
import Spinner from '../layouts/Spinner';
import Repolist from '../layouts/repo/Repolist';
import { useParams } from 'react-router';
import GitHubContext from '../../Context/UsersContext/GithubContext';
function UserDetail() {
    const {user,UserDetails,loading,repos,getUserRepos} = useContext(GitHubContext);
    const params = useParams()
    console.log(repos)
    useEffect(() => {
      UserDetails(params.login)
      getUserRepos(params.login)
      
    }, []);
    const {
        name,
        avatar_url,
        bio,
        blog,
        location,
        html_url,
        followers,
        following,
        hireable,
        public_repos,
        public_gists,
        twitter_username,
        type,
        company,
        created_at
    } = user
    if(loading)
        return <Spinner />
    
  return <><div className="hero min-h-screen" style={{backgroundImage:`url(${avatar_url})`}}>
  <div className="hero-overlay bg-opacity-60"></div> 
  <div className="text-center hero-content text-neutral-content">
    <div className="max-w-md ">
    <div className="flex flex-nowrap pb-10">
                  <div className="badge badge-outline">{type}</div> 
                  {hireable &&(<div className="badge mx-5 badge-primary badge-outline">Hireable</div> )}
        </div>
      <h1 className="mb-5 text-5xl font-bold">
            {name}
                  </h1> 
      <p className="mb-5">
            {bio}
          </p> 
          <a href={html_url}>
      <button className="btn btn-primary" >Go to Github Account</button>
        </a>
        <div className="w-full shadow stats mt-10">
  <div className="stat place-items-center place-content-center">
    <div className="stat-title">location</div> 
    <div className="stat-desc">{location}</div>
  </div> 
  <div className="stat place-items-center place-content-center">
    <div className="stat-title">Website</div>  
    {blog &&(<div className="stat-desc text-success">{blog}</div>)}
  </div> 
  <div className="stat place-items-center place-content-center">
    <div className="stat-title">Twitter</div> 
     
    {twitter_username &&(<div className="stat-desc text-error">{twitter_username}</div>)}
  </div>
</div>

    </div>
  </div>
</div>
<div className=" w-full bg-base-300 ">
<div className="w-full shadow stats">
  <div className="stat">
    <div className="stat-figure text-primary">
      <FaUsers size='45'/>              
        
    </div> 
    <div className="stat-title">Followers</div> 
    <div className="stat-value text-primary">{followers}</div> 
    
  </div> 
  <div className="stat">
    <div className="stat-figure text-info">
       <FaUserFriends size='45'/>
    </div> 
    <div className="stat-title">Following</div> 
    <div className="stat-value text-info">{following}</div> 
   
  </div> 
  <div className="stat">
    <div className="stat-figure text-info">
      <div className="avatar online">
        <div className="w-16 h-16 p-1 mask mask-squircle bg-base-100">
          <img src={avatar_url} alt="Avatar Tailwind CSS Component" className="mask mask-squircle"/>
        </div>
      </div>
    </div> 
    <div className="stat-title">Company</div>
    <div className="stat-value text-secondary">{company}</div> 
     
    
  </div>
</div>
<div className="card lg:card-side card-bordered pt-10">
  <figure>
    <FaCodepen size='45' color='pink'/>
  </figure> 
  <div className="card-body">
    <h2 className="card-title">Public Repos
      <div className="badge mx-2">{public_repos}</div>
    </h2> 
   
  </div>
</div>
<div className="card lg:card-side card-bordered pt-10">
  <figure>
    <FaStore size='45' color='pink'/>
  </figure> 
  <div className="card-body">
    <h2 className="card-title">Public Gists
      <div className="badge mx-2">{public_gists}</div>
    </h2> 
   
  </div>
</div>
<div className="card lg:card-side card-bordered pt-10">
  <figure>
    <FaClock size='45' color='pink'/>
  </figure> 
  <div className="card-body">
    <h2 className="card-title">Created
      <div className="badge mx-2">{created_at}</div>
    </h2> 
   
  </div>
  
</div>

</div>
<div className=" w-full bg-base-300">
<div className="card lg:card-side card-bordered pt-10">
  <figure>
    <FaDesktop size='45' color='pink'/>
  </figure> 
  <div className="card-body">
    <h2 className="card-title">Latest Repositories</h2> 
  </div>
</div>
 <Repolist repos={repos} /> 
</div>
</>
}

export default UserDetail;
