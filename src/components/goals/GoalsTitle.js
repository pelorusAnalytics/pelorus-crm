import React, { Component } from 'react';

class GoalsTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      category: '',
      priority: ''
    }
    
    this.submitGoal = this.submitGoal.bind(this);
    this.onChange = this.onChange.bind(this);
  } 

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitGoal() {
    this.props.submitGoal(this.state);
    this.setState({
      title: '',
      description: '',
      category: '',
      priority: ''
    })
  }

  render() {
    const { formActive, toggleForm } = this.props;
    const goalForm = (
      <div className="row">
        <div>
          <label>Title</label>
          <input onChange={this.onChange} name="title" type="text" className="form-control" />
        </div>
        <div>
          <label>Description</label>
          <input onChange={this.onChange} name="description" type="text" className="form-control" />
        </div>
        <div>
          <label>Category</label>
          <select className="form-control" name="category" onChange={this.onChange}>
            <option value="">Choose catgegory</option>
            <option value="Recovery">Recovery</option>
            <option value="Financial">Financial</option>
            <option value="Career">Career</option>
            <option value="Academic">Academic</option>
            <option value="Service">Service</option>
            <option value="Health">Health</option>
            <option value="Relationships">Relationships</option>
            <option value="Spiritual">Spiritual</option>
            <option value="Legal">Legal</option>
          </select>
        </div>
        <div>
          <label>Priority</label>
          <select className="form-control" name="priority" onChange={this.onChange}>
            <option value="">Choose priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div>
          <button className="btn btn-success" onClick={this.submitGoal}>Submit</button>
        </div>
      </div>
    )

    const toggleButton = (
      <button className="btn btn-primary" onClick={toggleForm}>Toggle Goal Form</button>
    )
    return (
      <div className="row wrapper border-bottom white-bg page-header" style={{paddingBottom: "15px"}} >
        <h2 className="text-center">Predefined Goals</h2>
        <div className="container">
          {formActive ? goalForm : ''}
          <hr />
          {toggleButton}
        </div>
      </div>
    )
  }
}

export default GoalsTitle;
