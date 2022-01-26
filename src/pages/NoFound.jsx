import React from 'react';
import {FaHome,FaSadTear} from 'react-icons/fa'
import {Link} from 'react-router-dom'
function NoFound() {
  return <div className="flex items-center max-h-full  py-10 bg-cover card bg-base-200" >
  <div className="card glass lg:card-side text-neutral-content">
      <figure className="p-6"><FaSadTear color="orange" className="text-9xl"/></figure>
    <div className="max-w-md card-body p-10">
      <h2 className="card-title">Oops !!!</h2> 
      <p>Page Seems to Be Missing!!<br/> Dont Worry ,Click on the Below Button!!</p> 
      <div className="card-actions">
        <Link to='/' className="btn glass rounded-full">
            <FaHome className="mr-3"/>Back to Home
        </Link>
      </div>
    </div>
  </div>
</div>
}

export default NoFound;
