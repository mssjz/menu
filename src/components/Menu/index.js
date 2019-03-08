import React, { Component } from 'react';

import './Menu.css';

function Menu(props) {

  const handleClick = sname => {
    props.getInfo(sname);
  }
  return(
  <div>
    <h3>Menu Categories</h3>
    <div>
      <ul>
        {props.menu.map(ele => {
          return <li key={ele.id} onClick={() => handleClick(ele.short_name)}>{ele.name} - ({ele.short_name})</li>
        })}
      </ul>
    </div>
  </div>
  );
}

export default Menu;