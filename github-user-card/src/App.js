import React from 'react';
import axios from 'axios';

import styled from 'styled-components';

import UserCard from './components/UserCard.js';

class App extends React.Component {
  state = {
    user: {},
    follower: []
  };

  fetchUsers = () => {
    axios
      .get("https://api.github.com/users/aperez9423")
      .then(res => {
        console.log(res.data);
        this.setState({ user: res.data });
      })
      .catch(err => 
        {console.log(err);
      });    
      axios
      .get("https://api.github.com/users/aperez9423/followers")
      .then(res => {
        console.log(res.data);
        this.setState({ ...this.state, follower: res.data });
      })
      .catch(err => { 
        console.log(err);
      });  
  };

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    return (
      <AppContainer>
        <Header>
          <h1>GitHub Users</h1>
        </Header>
        <div>
          <UserCard user={this.state.user}/>
        </div>
        <div>
          {this.state.follower.map(follower => (
            <FollowerCard
              key= {follower.id}
              img= {follower.avatar_url}
              followers= {follower.login}
              bio= {follower.bio}
            /> 
          ))}
        </div>
      </AppContainer>
    );
  };
}

export default App;

const AppContainer = styled.div `
`

const Header = styled.header `
`

const FollowerCard = styled.header `
`
