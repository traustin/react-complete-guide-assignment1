import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import {Card} from 'react-bootstrap';

class App extends Component {
  state = {
    users: [
      {
        username: 'Trevor',
      },
      {
        username: 'Gabi',
      },
      {
        username: 'Max',
      },
    ],
  };

  updateUsername = (updateIndex, username) => {
    const users = this.state.users.map((user, index) => {
      if (index !== updateIndex) {
        return user;
      }

      const newUser = { username };

      return {
        ...user,
        ...newUser
      }
    });

    this.setState({users});
  }

  render() {
    const items = this.state.users.map((user, index) => {
      return (<Card className={'UserCard'} key={`${index}`}>
        <UserInput username={user.username} updateUsername={this.updateUsername.bind(this, index)} />
        <UserOutput username={user.username}/>
      </Card>);
    })

    return (
        <div className="App">
          {items}
        </div>
    );
  }
}

export default App;
