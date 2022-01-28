import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
function UserCard({userinfo: {login,avatar_url}}) {
  return (
    
    <div className="card lg:card-side glass">
    <figure>
    <div className="avatar">
  <div className="ml-8 mt-3 rounded-full w-24 h-24">
    <img src={avatar_url}/>
  </div>
</div>
</figure>
    
    <div className="card-body">
      <h2 className="card-title">{login}</h2> 
      <div className="card-actions">
          <Link to={`/user/${login}`}>
        <button className="btn btn-ghost">More info</button>
        </Link>
      </div>
    </div>
  </div> 
  
  
  );
}
UserCard.propTypes ={
  userinfo:PropTypes.object.isRequired
}
export default UserCard;
