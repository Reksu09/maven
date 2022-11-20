import React from 'react'

function navbar(props) {
  
  const currentRoute = window.location.pathname === "/"
  console.log(currentRoute)
  return (
    <div>
      <div className={`navbar glass ${currentRoute ? "bg-primary hover:bg-primary text-primary-content" :"bg-base-100 hover:bg-base-100"} fixed z-20`}>
          <div className="flex-1">
              <a href='/' className="btn btn-ghost normal-case text-2xl font-['Georgia']">Maven</a>
          </div>
          <div className="flex-none">
              <ul className="menu menu-horizontal p-0 hidden lg:flex">
              <li tabIndex={0}>
                  <a>
                  Subjects
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                  </a>
                  <ul className="p-2 bg-base-200 text-base-content">
                  <li><a href='/subjects/dcit21/identification'>DCIT 21</a></li>
                  <li><a href='/subjects/dcit22/identification'>DCIT 22</a></li>
                  <li><a href='/subjects/gned02/identification'>GNED 02</a></li>
                  <li><a href='/subjects/gned05/identification'>GNED 05</a></li>
                  <li><a href='/subjects/gned11/identification'>GNED 11</a></li>
                  <li><a href='/subjects/cosc50/identification'>COSC 50</a></li>
                  <li><a href='/subjects/fitt1/identification'>FITT 1</a></li>
                  </ul>
              </li>
              <li><a href='/about'>About</a></li>
              <li><a href='/suggestion'>Suggestion</a></li>
              </ul>
              <label htmlFor="my-drawer" className="btn btn-square btn-ghost drawer-button flex lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
          </div>
      </div>
    </div>
  )
}

export default navbar