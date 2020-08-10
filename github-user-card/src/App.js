import React from 'react';
import axios from 'axios';

import styled from 'styled-components';

import UserCard from './components/UserCard.js';
import FollowerCards from './components/FollowerCards.js';

class App extends React.Component {
  state = {
    user: [],
    followers: []
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
        this.setState({ ...this.state, followers: res.data});
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
          <h2>Followers</h2>
          {this.state.followers.map(data => (
            <FollowerCards
              key= {data.id}
              img= {data.avatar_url}
              followers= {data.login}
              location= {data.location}
            /> 
          ))}
      </AppContainer>
    );
  };
}

export default App;

const AppContainer = styled.div `  
  h1 { 
    border: .5rem double gray;
  }

  h2 {
    text-decoration: underline;
    text-align: center;
    font-size: 1.6rem;
  }
`

const Header = styled.header `
  h1 {
    text-align: center;
  }
`

