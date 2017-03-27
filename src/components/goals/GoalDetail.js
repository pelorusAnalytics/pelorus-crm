import React, { Component } from 'react';

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
         <small>{goal.description}</small>
       </td>
       <td className="project-status">{goal.category}</td>
       <td className="project-status">
         {priorityLabel}
       </td>
     </tr>
    )
  }
}

GoalDetail.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default GoalDetail;
