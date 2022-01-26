import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
function UserCard({userinfo: {login,avatar_url}}) {
  return (
    
    <div class="card lg:card-side glass">
    <figure>
    <div class="avatar">
  <div class="ml-8 mt-3 rounded-full w-24 h-24">
    <img src={avatar_url}/>
  </div>
</div>
</figure>
    
    <div class="card-body">
      <h2 class="card-title">{login}</h2> 
      <div class="card-actions">
          <Link to={`/users/${login}`}>
        <button class="btn btn-ghost">More info</button>
        </Link>
      </div>
    </div>
  </div> 
  
  
  );
}
UserCard.PropTypes ={
  userinfo:PropTypes.object.isRequired
}
export default UserCard;
