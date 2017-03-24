import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { createClient, changeHouse } from '../actions/clientActions';

class FacilityContainer extends Component {
  constructor(props) {
    super(props);

    this.handleCreateClient = this.handleCreateClient.bind(this);
    this.handleSubmitChange = this.handleSubmitChange.bind(this);
  }

  handleCreateClient(client) {
    const user = {
      "user": {
        "first_name": client.first_name,
        "last_name": client.last_name,
        "email": client.email,
        "house_id": client.house_id
      }
    }
    this.props.createClient(user);
  }

  handleSubmitChange(data) {
    const user = {
      "user" : {
        "id": data.id,
        "house_id": data.house_id
      }
    }

    this.props.changeHouse(user);
  }
  render() {
    const { facility } = this.props;
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        facility: facility,
        createClient: this.handleCreateClient,
        changeHouse: this.handleSubmitChange
      }) 
    )
    return (
      <div style={{paddingTop: '40px'}}>
        {childrenWithProps}
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {
    facility: _.find(state.facilities.facilities, 'id', ownProps.params.id - 1)
  }
}

export default connect(mapStateToProps, { createClient, changeHouse })(FacilityContainer);
