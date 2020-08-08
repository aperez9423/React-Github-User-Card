import React from 'react';
import axios from 'axios';

import styled from 'styled-components';

import UserCard from './components/UserCard.js';
import FollowerCards from './components/FollowerCards.js';

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
        this.setState({ ...this.state, followers: res.data });
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
          <UserCard user={this.state.user}/>
          {this.state.followers.map(data => (
            <FollowerCards
              key= {data.id}
              img= {data.avatar_url}
              followers= {data.login}
              bio= {data.bio}
            /> 
          ))}
      </AppContainer>
    );
  };
}

export default App;

const AppContainer = styled.div `
`

const Header = styled.header `
`

