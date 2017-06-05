import React from 'react';

import img from './images/datebase.jpeg';

export default class App extends React.Component{
  render(){
    return(
      <div>
        <h1>hello react</h1>
        <img src={img} />
      </div>
    )
  }
}
