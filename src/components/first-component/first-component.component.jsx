import React from "react";
import "./first-component.style.scss"

const ListItem = () => {
  return (
    <div className="list-component__wrapper">
      <div className="toggle-switch__wrapper">
       <h1 >Toggle Switch</h1> 
       <h2>(Atoms)</h2>
        <div className="radio-wrapper">
          <input id="s1" type="checkbox" className="switch"/>
          <label htmlFor="s1"></label>
        </div>
      </div>
      
    </div>
  )
}

export { ListItem };