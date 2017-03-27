import React, { Component } from 'react';
import GoalDetail from './GoalDetail';

class GoalsList extends Component {

  render() {
    const { goals } = this.props.client;
    return (
      <div className="row">
        <div className="wrapper wrapper-content animated fadeInUp">
            <div className="ibox">
                <div className="ibox-content">
                    <div className="project-list">
                        <table className="table table-hover">
                            <thead>
                              <tr>
                                <th>Goal</th>
                                <th>Due</th>
                                <th>Priority</th>
                                <th>Progess</th>
                              </tr>
                            </thead>
                            <tbody>
                            {goals.map(goal =>
                               <GoalDetail key={goal.id} goal={goal} />
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}


export default GoalsList;
