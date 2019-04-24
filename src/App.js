import React, { Component } from 'react';
import { connect } from 'react-redux';
import UsersList from './components/UsersList';
import './App.css';
import Axios from 'axios';

class App extends Component {
  onHandleChange = (e) => {
    let { dispatch } = this.props;
    dispatch({ type: 'UPDATE_USERNAME', username: e.target.value })
  }

  onUserSearch = () => {
    let { dispatch } = this.props;
    let { username } = this.props;
    fetch(`https://api.github.com/users/${username}`)
          .then(res => {
            return res.json();
          })          
          .then(res => {
            dispatch({ type: 'UPDATE_USERPROFILE', userprofile: res })
          })
  }
  
  render() {
    let { userprofile } = this.props;
    return (
      <div className="App">
        <h1>Github Users</h1>
        <p>{ this.props.username }</p>
        <input type="text" 
          onChange = { this.onHandleChange }
          value = { this.props.user }
        />
        <button onClick = { this.onUserSearch }>Search</button>
        <hr/>
        <p>{ userprofile.name }</p>
        <p>{ userprofile.location }</p>
        <UsersList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
    userprofile: state.userprofile,
    repos: state.repos
  }
}

export default connect(mapStateToProps, null)(App);
