import { StyledOverview } from '../StyledComponents/styledComponents.styles';
import EditContainer from './EditContainer';
import TaskContainer from './TaskContainer';
import { Component } from 'react';

export class Overview extends Component {
  render() {
    const { tasks, remove, initEdit, handleInput } = this.props;
    const displayTasks = tasks.map((task, index) => {
      if (task.editing)
        return (
          <EditContainer
            remove={remove}
            edit={initEdit}
            index={index}
            key={task.id}
            text={task.inputValue}
            id={task.id}
            tasks={tasks}
            handleInput={handleInput}
          />
        );
      else
        return (
          <TaskContainer
            remove={remove}
            edit={initEdit}
            index={index}
            key={task.id}
            text={task.inputValue}
            id={task.id}
            tasks={tasks}
          />
        );
    });
    return <StyledOverview>{displayTasks}</StyledOverview>;
  }
}

export default Overview;
