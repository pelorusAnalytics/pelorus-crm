import React, { Component } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import axios from 'axios';

const styles = {
  expanded: {
    height: 250
  },
  collapse: {
    height: 68
  }
}


class MilestoneList extends Component {
  componentDidMount() {
  }
  constructor(props) {
    super(props);

    this.state = {
      activeGoal: '',
      due_date: moment(),
      title: ''
    }

    //onClick={() => this.expandMilestone(milestone.id.toString())}
    this.expandMilestone = this.expandMilestone.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  expandMilestone(milestone) {
    this.setState({activeGoal: milestone})
  }

  handleDateChange(date) {
    this.setState({due_date: date})
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const milestone = {
      title: this.state.title,
      due_date: this.state.due_date,
      category: this.props.goal.category,
      goal_id: this.props.goal.id,
      user_id: this.props.user.id
    }

    this.setState({newMilestone: false})

    axios.post(`/goals/${milestone.goal_id}/milestones`, milestone).then(
      res => this.props.refreshGoal()
    );
  }
  render() {
    const { goal = {
      milestones: []
    } } = this.props;
    const milestoneForm = (
      <div className="row list-group-item">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Title</label>
              <input
              onChange={this.onChange}
              className="form-control"
              type="text"
              name="title" />
            </div>
            <div className="form-group">
              <label>Due Date</label> <br />
              <DatePicker
                selected={this.state.due_date}
                className="form-control"
                onChange={this.handleDateChange}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-sm" type="submit">Submit</button>
            </div>
          </form>
      </div>
    )

    return (
      <div className="row">
          <div className="col-lg-12">
              <div className="wrapper wrapper-content animated fadeInUp">
                  <div className="ibox">
                    <div className="ibox-title">
                        <div className="ibox-tools">
                          <h3 className="pull-left">Milestones</h3>
                        </div>
                    </div>
                      <div className="ibox-content">
                        <div className="list-group">
                          {this.state.newMilestone ? milestoneForm : ''}
                          {goal.milestones.map(milestone =>
                            <div className={`row list-group-item`}
                                 style={this.state.activeGoal === milestone.id.toString() ? styles.expanded : styles.collapsed}
                                 key={milestone.id.toString()}
                                 >
                              <div className="col-sm-4">
                                <h5>{milestone.title}</h5>
                                <small>Created at {moment(milestone.created_at).format('MMMM DD, YYYY')}</small>
                              </div>
                              <div className="col-sm-4 pull-right">
                                {milestone.status === 'completed' ?
                                <div>
                                  <button
                                    className="btn btn-primary pull-right"
                                    disabled>
                                    Completed
                                  </button>
                                  <button
                                    className="btn btn-danger pull-right"
                                    onClick={() => this.props.revertMilestone(milestone)}>
                                      Revert Completed
                                  </button>
                                  </div> :
                                      <button
                                        className="btn btn-danger pull-right"
                                        onClick={() => this.props.completeMilestone(milestone)}>
                                          Mark Complete
                                      </button>}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default MilestoneList;
