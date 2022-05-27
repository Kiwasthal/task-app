import { Component } from 'react';
import './App.css';
import InputManager from './components/InputManager/InputManager';
import Overview from './components/Overview/Overview';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasksArray: [],
      inputValue: '',
    };
  }
  updateInput(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  updateTasksArray() {
    this.setState(prevState => ({
      tasksArray: [...prevState.tasksArray, prevState.inputValue],
    }));
    console.log(this.state);
  }

  passState() {
    console.log(this.state.tasksArray);
  }

  render() {
    const updateInput = this.updateInput.bind(this);
    const updateTasksArray = this.updateTasksArray.bind(this);
    return (
      <div className="App">
        <InputManager handleInput={updateInput} addTask={updateTasksArray} />
        <Overview tasks={this.state.tasksArray} />
      </div>
    );
  }
}

export default App;
