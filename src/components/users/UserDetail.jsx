import React from 'react';
import {useEffect,useContext} from 'react'
import { useParams } from 'react-router';
import GitHubContext from '../../Context/UsersContext/GithubContext';
function UserDetail() {
    const {user,UserDetails} = useContext(GitHubContext);
    const params = useParams()
    useEffect(() => {
      UserDetails(params.login)
    }, []);
    
  return <div>{user.login}</div>;
}

export default UserDetail;
