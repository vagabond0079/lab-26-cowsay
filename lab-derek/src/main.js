import React from 'react';
import faker from 'faker';
import ReactDom from 'react-dom';
import cowsay from 'cowsay-browser';

import "./style/main.scss";

class App extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        content: '',
      }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
    this.setState(state => {
      return {
        content : cowsay.say({
          text : faker.lorem.sentence(),
          e : "oO",
          T : "U"
        }),
      }
    })
  }

  render(){
    return (
      <div>
        <h1> Cowsay Lorem Generator </h1>
        <button onClick={this.handleClick}>
          Click Me!
        </button>
        <pre>{this.state.content}</pre>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
