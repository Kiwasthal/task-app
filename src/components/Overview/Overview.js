import { StyledOverview } from '../StyledComponents/styledComponents.styles';
import TaskContainer from './TaskContainer';
import { Component } from 'react';

export class Overview extends Component {
  render() {
    const { tasks } = this.props;
    const displayTasks = tasks.map(task => (
      <TaskContainer text={task.inputValue} id={task.id} tasks={tasks} />
    ));
    return <StyledOverview>{displayTasks}</StyledOverview>;
  }
}

export default Overview;
