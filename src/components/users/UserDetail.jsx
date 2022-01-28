import React from 'react';
import {useEffect,useContext} from 'react'
import { FaUserFriends,FaUsers,FaCodepen,FaStore,FaClock } from 'react-icons/fa';
import Spinner from '../layouts/Spinner';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import GitHubContext from '../../Context/UsersContext/GithubContext';
function UserDetail() {
    const {user,UserDetails,loading} = useContext(GitHubContext);
    const params = useParams()
    useEffect(() => {
      UserDetails(params.login)
      // eslint-disablenext-line react-hooks/exhaustive-deps
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
    
  return <><div class="hero min-h-screen" style={{backgroundImage:`url(${avatar_url})`}}>
  <div class="hero-overlay bg-opacity-60"></div> 
  <div class="text-center hero-content text-neutral-content">
    <div class="max-w-md ">
    <div class="flex flex-nowrap pb-10">
                  <div class="badge badge-outline">{type}</div> 
                  {hireable &&(<div class="badge mx-5 badge-primary badge-outline">Hireable</div> )}
        </div>
      <h1 class="mb-5 text-5xl font-bold">
            {name}
                  </h1> 
      <p class="mb-5">
            {bio}
          </p> 
          <a href={html_url}>
      <button class="btn btn-primary" >Go to Github Account</button>
        </a>
        <div class="w-full shadow stats mt-10">
  <div class="stat place-items-center place-content-center">
    <div class="stat-title">location</div> 
    <div class="stat-desc">{location}</div>
  </div> 
  <div class="stat place-items-center place-content-center">
    <div class="stat-title">Website</div>  
    {blog &&(<div class="stat-desc text-success">{blog}</div>)}
  </div> 
  <div class="stat place-items-center place-content-center">
    <div class="stat-title">Twitter</div> 
     
    {twitter_username &&(<div class="stat-desc text-error">{twitter_username}</div>)}
  </div>
</div>

    </div>
  </div>
</div>
<div class=" min-h-screen bg-base-200">
<div class="w-full shadow stats">
  <div class="stat">
    <div class="stat-figure text-primary">
      <FaUsers size='45'/>              
        
    </div> 
    <div class="stat-title">Followers</div> 
    <div class="stat-value text-primary">{followers}</div> 
    
  </div> 
  <div class="stat">
    <div class="stat-figure text-info">
       <FaUserFriends size='45'/>
    </div> 
    <div class="stat-title">Following</div> 
    <div class="stat-value text-info">{following}</div> 
   
  </div> 
  <div class="stat">
    <div class="stat-figure text-info">
      <div class="avatar online">
        <div class="w-16 h-16 p-1 mask mask-squircle bg-base-100">
          <img src={avatar_url} alt="Avatar Tailwind CSS Component" class="mask mask-squircle"/>
        </div>
      </div>
    </div> 
    <div class="stat-title">Company</div>
    <div class="stat-value text-secondary">{company}</div> 
     
    
  </div>
</div>
<div class="card lg:card-side card-bordered pt-10">
  <figure>
    <FaCodepen size='45' color='pink'/>
  </figure> 
  <div class="card-body">
    <h2 class="card-title">Public Repos
      <div class="badge mx-2">{public_repos}</div>
    </h2> 
   
  </div>
</div>
<div class="card lg:card-side card-bordered pt-10">
  <figure>
    <FaStore size='45' color='pink'/>
  </figure> 
  <div class="card-body">
    <h2 class="card-title">Public Gists
      <div class="badge mx-2">{public_gists}</div>
    </h2> 
   
  </div>
</div>
<div class="card lg:card-side card-bordered pt-10">
  <figure>
    <FaClock size='45' color='pink'/>
  </figure> 
  <div class="card-body">
    <h2 class="card-title">Created
      <div class="badge mx-2">{created_at}</div>
    </h2> 
   
  </div>
</div>
</div>
</>
}

export default UserDetail;
