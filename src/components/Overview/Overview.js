import { StyledOverview } from '../StyledComponents/styledComponents.styles';
import ListItem from './ListItem/ListItem';
import { Component } from 'react';

export class Overview extends Component {
  render() {
    const { tasks } = this.props;
    const displayTasks = tasks.map(task => <ListItem text={task} />);
    return <StyledOverview>{displayTasks}</StyledOverview>;
  }
}

export default Overview;
