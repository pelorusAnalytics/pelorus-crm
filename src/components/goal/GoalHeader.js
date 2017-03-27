import React, { Component } from 'react';
import moment from 'moment';


class GoalHeader extends Component {
  render() {
    const { goal = {
      title: ''
    } } = this.props;
    return (
      <div className="wrapper border-bottom white-bg page-heading">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="text-center"><strong>{goal.title}</strong></h2>
            <br />
            <div className="progressBarModal">
              <div className="progress">
                <div className="progress-bar progress-bar-striped active massive-font"
                     role="progressbar" aria-valuenow="50" aria-valuemin="0"
                     aria-valuemax="100" style={{width: `${goal.percent_completed}%`}}>
                     {Math.round(goal.percent_completed)}%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <strong>Date Created: </strong>{moment(goal.created_at).format('MMMM DD, YYYY')}
          </div>
          <div className="col-sm-3">
            <strong>Due Date: </strong>{moment(goal.dueDate).format('MMMM DD, YYYY')}
          </div>
          <div className="col-sm-3">
            <strong>Category: </strong>{goal.category}
          </div>
          <div className="col-sm-3">
            <strong>Status: </strong>{goal.status}
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-12">
            <strong>Description: </strong> {goal.description}
          </div>
        </div>
      </div>
    )
  }
}

export default GoalHeader;
