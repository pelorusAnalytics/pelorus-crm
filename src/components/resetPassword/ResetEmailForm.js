import React, {Component} from 'react';
import TextFieldGroup from '../common/TextFieldGroup';

class ResetEmailForm extends Component {
  render() {
    const { email, onChange, onSubmit } = this.props;
    return (
      <form onSubmit={onSubmit}>
        <TextFieldGroup
          field="email"
          label="What is your email address?"
          value={email}
          onChange={onChange}
        />
        <button className="btn btn-primary btn-md">Submit</button>
      </form>
    )
  }
}

export default ResetEmailForm;
