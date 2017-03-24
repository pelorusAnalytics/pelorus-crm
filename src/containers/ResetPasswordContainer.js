import React, {Component} from 'react';
import { connect } from 'react-redux';
import { sendResetRequest, sendResetPassword } from '../actions/authActions';
import ResetEmailForm from '../components/resetPassword/ResetEmailForm';
import ResetPasswordForm from '../components/resetPassword/ResetPasswordForm';
import logo from '../img/PelorusLogo.png';


class ResetPasswordContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      resetToken: '',
      newPassword: '',
      newPasswordConfirmation: '',
      resetPassword: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmitEmail = this.onSubmitEmail.bind(this);
    this.onSubmitNewPassword = this.onSubmitNewPassword.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmitEmail(e) {
    e.preventDefault();
    const email = {
      "email": this.state.email
    }
    this.props.sendResetRequest(email).then(res => this.setState({resetPassword: true}));
  }

  onSubmitNewPassword(e) {
    e.preventDefault();
    if(this.state.newPassword === this.state.newPasswordConfirmation) {
      const password = {
        "token": this.state.resetToken,
        "email": this.state.email,
        "password": this.state.newPassword
      }

      this.props.sendResetPassword(password).then(res => this.context.router.push('/login'))
    } else {
      alert('passwords must match')
    }
  }

  render() {
    const { email, resetToken, newPassword, newPasswordConfirmation } = this.state;
    return(
      <div className="row animated fadeInDown">
        <div className="col-md-4 col-md-offset-4">
          <div className="text-center">
            <img src={logo} alt="Logo" />
            {this.state.resetPassword ?
              <ResetPasswordForm
                email={email}
                onChange={this.onChange}
                resetToken={resetToken}
                newPassword={newPassword}
                newPasswordConfirmation={newPasswordConfirmation}
                onSubmit={this.onSubmitNewPassword}
              />
              :
              <ResetEmailForm
                email={this.state.email}
                onSubmit={this.onSubmitEmail}
                onChange={this.onChange}
              />
            }
          </div>
        </div>
      </div>
    )
  }
}

ResetPasswordContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(null, {sendResetRequest, sendResetPassword})(ResetPasswordContainer);
