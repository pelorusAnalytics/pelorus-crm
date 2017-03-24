import React, { Component } from 'react';

class FacilityList extends Component {
  render() {
    const { facilities, selectFacility } = this.props;
    return (
      <div className="ibox">
        <div className="ibox-content">
          <table className="table table-striped table-hover table-bordered">
            <thead>
              <tr>
                <th>Facility Name</th>
                <th>Account Manager</th>
                <th># of Houses</th>
              </tr>
            </thead>
            <tbody>
              {facilities.map(facility =>
                  <tr key={facility.id} onClick={() => selectFacility(facility)}>
                    <td>{facility.name}</td>
                    <td>{facility.account_manager.first_name}</td>
                    <td>{facility.houses.length}</td>
                  </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default FacilityList;
