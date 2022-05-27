import { Component } from 'react';
import './App.css';
import InputManager from './components/InputManager/InputManager';
import Overview from './components/Overview/Overview';
import uniqid from 'uniqid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasksArray: [],
      task: {
        inputValue: '',
        id: uniqid(),
      },
    };
  }
  updateInput(e) {
    this.setState({
      task: {
        inputValue: e.target.value,
        id: this.state.task.id,
      },
    });
  }

  updateTasksArray(e) {
    e.preventDefault();
    this.setState(prevState => ({
      tasksArray: [...prevState.tasksArray, prevState.task],
      task: {
        inputValue: prevState.task.inputValue,
        id: uniqid(),
      },
    }));
  }

  render() {
    const updateInput = this.updateInput.bind(this);
    const updateTasksArray = this.updateTasksArray.bind(this);
    const taskArray = this.state.tasksArray;
    return (
      <div className="App">
        <InputManager handleInput={updateInput} addTask={updateTasksArray} />
        <Overview tasks={taskArray} />
      </div>
    );
  }
}

export default App;
