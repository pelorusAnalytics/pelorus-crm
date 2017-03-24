import React, {Component} from 'react';
import TextFieldGroup from '../common/TextFieldGroup';

class ResetPasswordForm extends Component {
  render() {
    const {
      onChange,
      onSubmit,
      resetToken,
      newPassword,
      newPasswordConfirmation
    } = this.props;
    return(
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <TextFieldGroup
            field="resetToken"
            label="Reset token"
            value={resetToken}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <TextFieldGroup
            field="newPassword"
            label="New Password"
            type="password"
            value={newPassword}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <TextFieldGroup
            field="newPasswordConfirmation"
            label="New Password Confirmation"
            type="password"
            value={newPasswordConfirmation}
            onChange={onChange}
          />
        </div>
        <button className="btn btn-primary btn-md">Submit</button>
      </form>
    )
  }
}

export default ResetPasswordForm;
