import React, { Component } from 'react';
import axios from 'axios';

import Menu from './components/Menu';
import Items from './components/Items';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
      items: [],
      currCate: ''
    }
  }

  componentDidMount() {
    axios.get(`https://stream-restaurant-menu-svc.herokuapp.com/category`)
      .then(res => {
        this.setState({menu: res.data});
      })
  }

  getInfo = (sname) => {
    axios.get(`https://stream-restaurant-menu-svc.herokuapp.com/item?category=${sname}`)
      .then(res => {
        this.setState({items: res.data, currCate: sname});
      });
  }
  render() {
    return (
      <div className="App">
        <Menu menu={this.state.menu} getInfo={this.getInfo}/>
        {this.state.items.length === 0 ? 
          null 
          : 
          <Items items={this.state.items} currCate={this.state.currCate} />}
      </div>
    );
  }
}

export default App;
