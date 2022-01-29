import React from 'react';
import PropTypes from 'prop-types';

function RepoItem({repo}) {
  return <div tabindex="0" class="collapse w-96 border border-primary rounded-box border-base-300 collapse-arrow mt-2"> 
  <div class="collapse-title text-xl font-medium">
    {repo.name}
  </div> 
  <div class="collapse-content"> 
    <p>Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using 
      <span class="badge badge-outline">collapse-open</span> and 
      <span class="badge badge-outline">collapse-close</span> classes.
    </p>
  </div>
</div> 
}
RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
}

export default RepoItem;