import React from 'react'
import NavBar from './NavBar'
function Drawer(props) {
  return (
    <div>
      <NavBar />
      <div className="drawer drawer-end">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
              {props.content}
          </div> 
          <div className="drawer-side">
              <label htmlFor="my-drawer" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 bg-base-100 text-base-content" style={{position: "relative", zIndex: 21}}>
              <li><a href="/subjects">Subjects</a></li>
              <li><a href='/about'>About</a></li>
              <li><a href='/suggestion'>Suggestion</a></li>
              </ul>
          </div>
      </div>
    </div>
  )
}

export default Drawer