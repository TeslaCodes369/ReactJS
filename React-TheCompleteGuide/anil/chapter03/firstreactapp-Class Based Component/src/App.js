import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      {name: 'Max', age:28},
      {name:'Manu',age:29},
      {name:'Kamla Coaching', age:100}
    ],
    other: 'hello how are you kamla'
  }

  switchNameHandler = ()=> {
    this.setState(
    {
      persons: [
        {name: 'Max', age:28},
        {name:'Manu',age:29},
        {name:'Kamla Padukone', age:26}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Hello how are you?</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
