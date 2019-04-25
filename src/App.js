import React, { Component } from 'react';
import { Container, Section, Login, Image, Item, Title } from './components/StyledBlocks';
import { connect } from 'react-redux';

const city = "Dnipro";
class App extends Component {

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    let { dispatch } = this.props;
    
    fetch(`https://api.github.com/search/users?q=${city}`)
      .then(res => { return res.json() })
      .then(res => {
        return res.items.map((result) => {
          return result.login
        });
      }).then(logins=>{
        const promises = logins.map((login)=> fetch(`https://api.github.com/users/${login}`).then(res=>res.json()));
        return Promise.all(promises);
      }).then((users)=>{
        if(users){
          dispatch({ type: 'GET_USERS', users });
        }
      })
  }

  render() {

    let { users } = this.props;
    return (
      <React.Fragment>
        <Title>Топ пользователей GitHub, город {city}</Title>
        {users.map((user, i) => {
          i = i+1;
         while ( i < 11 ) {
          console.log (i);
          return (
            <Container key={user.id}>
              
              <Image><img src={user.avatar_url} width = '150' height = '150' alt={user.avatar_url}/></Image>
              <Section>               
              <Item><Login href={user.url} target="_blank">{user.login}</Login>{user.name}</Item>              
              <Item>{user.bio}</Item>
              <Item><i className="fa fa-map-marker"></i> {user.location}</Item>
              </Section>
             
            </Container>
          );}
        })}


      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(App);