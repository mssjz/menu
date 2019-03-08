import React, { Component } from 'react';

import './Items.css'

function Items(props) {
  return (
    <div>
      <h3>Items in Category: ({props.currCate})</h3>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Description</td>
          </tr>
        </thead>

        <tbody>
          {props.items.map(ele => {
            return(
              <tr>
                <td>{ele.name}</td>
                <td>{ele.description}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Items;