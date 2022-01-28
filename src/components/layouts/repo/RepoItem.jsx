import React from 'react';
import PropTypes from 'prop-types';

function RepoItem({repo}) {
  return <div><h1>{repo.name}</h1></div>;
}
RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
}

export default RepoItem;