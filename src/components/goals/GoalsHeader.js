import React, { Component } from 'react';

class GoalsHeader extends Component {
  render() {
    const { client } = this.props;
    return (
      <div className="row wrapper border-bottom white-bg page-heading">
        <div className="col-sm-4">
          <h2>{client.first_name + " " + client.last_name +"'s"} Goals</h2>
        </div>
      </div>
    )
  }
}

export default GoalsHeader;
