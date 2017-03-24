import React, { Component } from 'react';
import { fetchFacilities } from '../actions/facilityActions';
import { logout } from '../actions/authActions';
import { connect } from 'react-redux';
import FacilityList from '../components/facilities/facilityList';

class HelmContainer extends Component {
  componentDidMount() {
    this.props.fetchFacilities().catch(err => {
      this.props.logout()
    })
  }
  constructor(props) {
    super(props);

    this.selectFacility = this.selectFacility.bind(this);
  }

  selectFacility(facility) {
    this.context.router.push(`/facility/${facility.id}`)
  }
  render() {
    const { facilities = [] } = this.props.facilities;
    return (
      <div style={{paddingTop: '40px'}}>
        <FacilityList facilities={facilities} selectFacility={this.selectFacility} />
      </div>
    )
  }
}

HelmContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    facilities: state.facilities
  }
}

export default connect(mapStateToProps, {fetchFacilities, logout})(HelmContainer);
