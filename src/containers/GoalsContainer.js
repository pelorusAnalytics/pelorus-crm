import React, {Component} from 'react';
import { connect } from 'react-redux';

import { fetchGoals, createGoal } from '../actions/goalActions';

import GoalsTitle from '../components/goals/GoalsTitle';
import GoalsList from '../components/goals/GoalsList';

class GoalsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formActive: false,
      goals: []
    }
    this.toggleActiveForm = this.toggleActiveForm.bind(this);
    this.submitGoal = this.submitGoal.bind(this);

  }
  componentDidMount() {
    this.props.fetchGoals();
  }

  toggleActiveForm() {
    this.setState({formActive: !this.state.formActive})
  }

  submitGoal(goal) {
    let newGoal = {
      "predefined_goal": {
        "title": goal.title,
        "description": goal.description,
        "category": goal.category,
        "priority": goal.priority
      }
    }

    this.props.createGoal(newGoal);
    this.props.fetchGoals();
    this.setState({formActive: false})
  }


  render() {
    return (
      <div>
        <GoalsTitle formActive={this.state.formActive} toggleForm={this.toggleActiveForm} submitGoal={this.submitGoal} />
        <GoalsList goals={this.props.goals} /> 
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    goals: state.goals.goals
  }
}

export default connect(mapStateToProps, {fetchGoals, createGoal})(GoalsContainer);
