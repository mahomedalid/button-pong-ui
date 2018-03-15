import React, { Component } from 'react';
import axios from 'axios';
import List, { ListItem, ListItemText } from 'material-ui/List';

class GameState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  getInitialState() {
    return {secondsElapsed: 0};
  }
    componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
      axios.get("https://button-pong-service.azurewebsites.net/api/game?code=RxJt/UOYRzUBIaBfK4WyazNvh4i6biTpn3AvaqTZVtR11xN2mVwVZg==",
// { method: 'GET', headers: { 'Accept': 'application/json' }, 
//mode: 'no-cors' 
       //  { credentials: 'same-origin' } 
     )
     // .then(res => res.json())
      .then(
       
     (result) => {
      
      console.log(result);    
      this.setState({
            isLoaded: true,
            items: result.data
          });
        },
        // Note: _t's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
 
  }
  componentDidMount() {
     this.interval = setInterval(() => this.tick(), 1000);
  }
  

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
  console.log(error);
    return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
            <List>
          {items.map(item => (
            <ListItem key={item.deviceId}>
              <ListItemText primary={item.deviceId} secondary={item.accessToken} />
            </ListItem>
          ))}
            </List>
        </div>
      );
    }
  }
}

export default GameState;
