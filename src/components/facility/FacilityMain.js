import React, { Component } from 'react';

class FacilityMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      house_id: '',
      formActive: false,
      houses: this.props.facility.houses 
    }

    this.onChange = this.onChange.bind(this);
    this.toggleActiveForm = this.toggleActiveForm.bind(this);
    this.clickCreateClient = this.clickCreateClient.bind(this);
    this.houseChange = this.houseChange.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value  });
  }

  toggleActiveForm() {
    console.log(this.state.formActive)
    this.setState({formActive: !this.state.formActive});
  }
  clickCreateClient(client) {
    this.props.createClient(client);
    for(let i = 0; i < this.state.houses.length; i++) {
      if(this.state.houses[i].id === Number(client.house_id)){
        this.state.houses[i].clients.push(client)
      }
    }
    this.setState({first_name: '', last_name: '', email: '', house_id: '', formActive: false})
  }

  houseChange(client) {
    let data = {
      id: client,
      house_id: this.state.house_id
    }
    console.log(data);
    this.props.changeHouse(data);
  }
  render() {
    const { facility = {houses:[]} } = this.props;
    const userForm = (
      <div className="row container">
        <div>
          <label>First Name</label>
          <input onChange={this.onChange} name="first_name" type="text" className="form-control" />
        </div>
        <div>
          <label>Last Name</label>
          <input onChange={this.onChange} name="last_name" type="text" className="form-control"/>
        </div>
        <div>
          <label>Email</label>
          <input onChange={this.onChange} type="email" name="email" className="form-control" />
        </div>
        <div>
          <label>House</label>
          <select className="form-control" name="house_id" onChange={this.onChange} >
            <option value="">House</option>
            {facility.houses.map(house =>
              <option value={house.id} key={house.id}>{house.name}</option>
            )}
          </select>
        </div>
        <button onClick={() => this.clickCreateClient(this.state)} className="btn btn-sm btn-primary">Add Client</button>
      </div>
    )
    const addButton = (
      <button onClick={this.toggleActiveForm} className="btn btn-default">
        Add User
      </button>
    )
    return (
      <div className="ibox">
        <div className="ibox-title">
          <h1 className="text-center">{facility.name}</h1>
          {this.state.formActive ? userForm : addButton}
        </div>
        <div className="ibox-content">
          {facility.houses.map(house =>
            <div key={house.id}>
              <h2>House: {house.name}
              </h2>
              <h5>House admin: {`${house.administrator.first_name} ${house.administrator.last_name}`} - {house.administrator.email}</h5>
              <table  className="table table-striped">
                <thead>
                  <tr>
                    <th>Client First Name</th>
                    <th>Client Last Name</th>
                    <th>Client Email</th>
                    <th>Change House</th>
                    <th>Submit Change</th>
                  </tr>
                </thead>
                <tbody>
                  {house.clients.map(client =>
                    <tr key={client.id}>
                      <td>{client.first_name}</td>
                      <td>{client.last_name}</td>
                      <td>{client.email}</td>
                      <td>
                        <select className="form-control" name="house_id" onChange={this.onChange} >
                          <option value="">House</option>
                          {facility.houses.map(house =>
                            <option value={house.id} key={house.id}>{house.name}</option>
                          )}
                        </select>
                      </td>
                      <td>
                        <button
                          className="btn btn-small btn-primary"
                          onClick={() => this.houseChange(client.id)}>
                          Submit
                        </button>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default FacilityMain;
