import React from 'react';

function About() {
  return <div className="hero min-h-screen bg-base-200">
  <div className="flex-col hero-content lg:flex-row-reverse">
    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className="max-w-sm rounded-lg shadow-2xl"/> 
    <div>
      <h1 className="mb-5 text-5xl font-bold">
            Welcome To  Github Finder !!
          </h1> 
      <p className="mb-5">
            Search for any user and get their basic details regarding their repos, forks nd stuff bt just typing their names on search...
          </p> 
      
    </div>
  </div>
</div>
;
}

export default About;
