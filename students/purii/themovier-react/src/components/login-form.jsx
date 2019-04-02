import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formControl: {
    marginBottom: theme.spacing.unit * 2,
  },
  input: {
    width: 200,
    height: 50,
    padding: '0px 20px',
    border: 0,
    borderRadius: 50,
    outline: 'none',
  },
  button: {
    width: 120,
    height: 50,
    padding: '0px 20px',
    border: '5px solid white',
    borderRadius: 50,
    color: 'white',
    background: 'none',
    cursor: 'pointer',
  },
  buttonGroupItem: {
    margin: '20px',
  },
});

class LoginForm extends Component {
  state = {
    mode: 'login',
    username: '',
    password: '',
    email: '',
    name: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleModeChange = mode => {
    this.setState({ mode });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form className={this.props.classes.form}>
        <div className={this.props.classes.buttonGroup}>
          <Button
            component="span"
            classes={{ root: this.props.classes.buttonGroupItem }}
            onClick={e => this.handleModeChange('login')}
          >
            Log in
          </Button>
          <Button
            component="span"
            className={this.props.classes.buttonGroupItem}
            onClick={e => this.handleModeChange('signup')}
          >
            Sign up
          </Button>
        </div>

        <div className={this.props.classes.formControl}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="USERNAME"
            className={this.props.classes.input}
            required
          />
        </div>

        <div className={this.props.classes.formControl}>
          <input
            type="password"
            name="password"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="PASSWORD"
            className={this.props.classes.input}
            required
          />
        </div>

        {this.state.mode === 'signup' && (
          <div className={this.props.classes.formControl}>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="EMAIL"
              className={this.props.classes.input}
              required
            />
          </div>
        )}

        {this.state.mode === 'signup' && (
          <div className={this.props.classes.formControl}>
            <input
              type="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="NAME"
              className={this.props.classes.input}
              required
            />
          </div>
        )}

        <button type="submit" className={this.props.classes.button}>
          {this.state.mode === 'signup' ? 'SIGN UP' : 'LOG IN'}
        </button>
      </form>
    );
  }
}

export default withStyles(styles)(LoginForm);
