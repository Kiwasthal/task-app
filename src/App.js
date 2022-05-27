import { Component } from 'react';
// import StyledInput from './components/Input/Input';
import './App.css';
import InputManager from './components/InputManager/InputManager';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputManager />
      </div>
    );
  }
}

export default App;
