import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';


function Repolist({repos}) {
  return <h3> {repos.map((repo) => (<RepoItem repo={repo} key={repo.id} />))}</h3>
   
}
Repolist.propTypes = {
    repos: PropTypes.array.isRequired,
  }
export default Repolist;




