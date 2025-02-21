import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import '../assets/login.css';
import Navigation from "./navigation";
import Footer from "./footer.js";

function underConstruction(e){
    e.preventDefault();
    alert('Login Functionality is still under construction');
}

const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  successMessage,
  user,
  toggleAuthenticateStatus
}) => (
<MuiThemeProvider>
<Navigation css=''/>
  <Card className="login_container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Login</h2>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="Email"
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Password"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
        />
      </div>

      <div className="button-line">
        <RaisedButton onClick={underConstruction} label="Log in" primary />
      </div>

      {/*<CardText>Don't have an account? <Link to={'/signup'}>Create one</Link>.</CardText>*/}
      <CardText>Don't have an account? <div onClick={underConstruction}>Create one</div>.</CardText>
    </form>
  </Card>
  <div className='filler_footer'></div>
  <Footer css=''/>

</MuiThemeProvider>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;
