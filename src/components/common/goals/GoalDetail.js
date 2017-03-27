import React, { Component } from 'react';
import moment from 'moment';

class GoalDetail extends Component {
  constructor(props) {
    super(props);

    this.handleLink = this.handleLink.bind(this);
  }

  handleLink(goal) {
    this.context.router.push(`/user/${goal.user_id}/goals/${goal.id}`);
  }
  render() {
    const { goal } = this.props;
    let priorityLabel;

    if (goal.priority === "Low") {
      priorityLabel = (
        <span className="label label-primary">Low</span>
      )
    } else if (goal.priority === "Medium") {
      priorityLabel = (
        <span className="label label-warning">Medium</span>
      )
    } else if (goal.priority === "High") {
      priorityLabel = (
        <span className="label label-danger">High</span>
      )
    }
    return (
      <tr onClick={() => this.handleLink(goal)}>
       <td className="project-title">
         <strong>{goal.title}</strong>
         <br />
         <small>Created at {moment(goal.created_at).format('MMMM DD, YYYY')}</small>
       </td>
       <td className="project-status">{moment(goal.due_date).format('MMMM DD, YYYY')}</td>
       <td className="project-status">
         {priorityLabel}
       </td>
       <td className="project-completion">
         <small>Completion with: {goal.percent_completed}%</small>
         <div className="progress progress-mini">
             <div style={{width: `${goal.percent_completed}%`}} className="progress-bar"></div>
         </div>
       </td>
     </tr>
    )
  }
}

GoalDetail.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default GoalDetail;
