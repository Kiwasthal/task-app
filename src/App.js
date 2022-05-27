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
        editing: false,
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
    console.log(this.state);
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

  editTasksArray(e, id) {
    e.preventDefault();
    this.setState({
      tasksArray: this.state.tasksArray.map(task => {
        if (task.id === id) {
          task.inputValue = this.state.task.inputValue;
          task.editing = false;
        }
        return task;
      }),
    });
  }

  removeFromArray(buttonId) {
    this.setState({
      tasksArray: this.state.tasksArray.filter(task => task.id !== buttonId),
    });
  }

  changeEditingStatus(buttonId) {
    this.setState({
      tasksArray: this.state.tasksArray.map(task => {
        if (task.id === buttonId) task.editing = true;
        return task;
      }),
    });
  }

  render() {
    const updateInput = this.updateInput.bind(this);
    const updateTasksArray = this.updateTasksArray.bind(this);
    const removeFromArray = this.removeFromArray.bind(this);
    const changeEditingStatus = this.changeEditingStatus.bind(this);
    const editTasksArray = this.editTasksArray.bind(this);
    const taskArray = this.state.tasksArray;
    return (
      <div className="App">
        <InputManager handleInput={updateInput} addTask={updateTasksArray} />
        <Overview
          tasks={taskArray}
          remove={removeFromArray}
          initEdit={changeEditingStatus}
          handleInput={updateInput}
          confirmEdit={editTasksArray}
        />
      </div>
    );
  }
}

export default App;
