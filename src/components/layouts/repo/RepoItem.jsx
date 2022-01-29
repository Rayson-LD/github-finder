import React from 'react';
import PropTypes from 'prop-types';
import {FaEye,FaInfo,FaUtensils,FaLink,FaStar} from 'react-icons/fa'

function RepoItem({repo}) {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    stargazers_count,
    watchers_count
  }=repo
  return <div tabIndex="0" className="ml-2 mr-2 collapse border border-primary rounded-box border-base-300 collapse-arrow mt-2"> 
  <div className="collapse-title text-xl font-medium">
   <a href={html_url}> <FaLink/>{name}</a>
  </div> 
  <div className="collapse-content"> 
    <p> {description}
      <span className="badge badge-outline badge-error mr-2 px-3"><FaEye/>{watchers_count}</span>  
      <span className="badge badge-outline badge-success mr-2 px-3"><FaStar/>{stargazers_count}</span> 
      <span className="badge badge-outline badge-info mr-2 px-3"><FaInfo/>{open_issues}</span> 
      <span className="badge badge-outline badge-warning mr-2 px-3"><FaUtensils/>{forks}</span> 
    </p>
  </div>
</div> 
}
RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
}

export default RepoItem;