import React from 'react';
import {Link} from "react-router-dom"
import {FaGithub,FaHome,FaInfoCircle} from "react-icons/fa"

function Nabar() {
  return( 
    <div className="navbar mb-2 shadow-lg bg-warning text-neutral-content rounded-box">
    <div className="flex-none px-2 mx-2">
    <div className="flex-none">
      <span className="btn btn-square btn-ghost">
        <FaGithub className="text-3xl" />
      </span>
    </div>
      <span className="text-neutral font-bold text-2xl">
              Github Finder
            </span>
    </div> 
    <div className="flex-1 px-2 mx-2">
      
    </div> 
    <div className="flex-none">
      <Link to='/' className="btn btn-square btn-ghost">
      <FaHome className="text-3xl" />
      </Link>
    </div> 
    <div className="flex-none">
      <Link to='/about' className="btn btn-square btn-ghost">
        <FaInfoCircle className="text-3xl" />
      </Link>
    </div>
  </div>
);
}

export default Nabar;
