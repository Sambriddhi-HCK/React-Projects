import logo from './logo.svg';
import React, {Component} from 'react'; 
import './App.css';
import Greet from './components/Greet';
import Message from './components/Message';

class App extends Component{
  render(){
  return (
    <div className="App">
      <Message></Message>

      {/* <Greet name = "World" className = "dummyClass" /> */}
    </div>
  );
}
}

export default App;
