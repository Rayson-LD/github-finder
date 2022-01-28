import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';


function Repolist({repos}) {
  return <div className="card lg:card-side card-bordered">
    <div className="card-body">
      <h2 className="card-title">Latest Repositiories</h2> 
      
    </div>
  </div>
}
Repolist.propTypes = {
    repos: PropTypes.array.isRequired,
  }
export default Repolist;




