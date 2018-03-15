import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import axios from 'axios';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function Controls(props) {
  const { classes } = props;
  function startGame()
  {
    axios(
      {
        method: "put", url: "https://button-pong-service.azurewebsites.net/api/game?code=RxJt/UOYRzUBIaBfK4WyazNvh4i6biTpn3AvaqTZVtR11xN2mVwVZg=="
      }
    );  
  }

  function resetGame()
  {
      axios.delete("https://button-pong-service.azurewebsites.net/api/game?code=RxJt/UOYRzUBIaBfK4WyazNvh4i6biTpn3AvaqTZVtR11xN2mVwVZg==");    
  }

  return (
    <div>
     <Button onClick={startGame} variant="raised" color="primary" className={classes.button}>
        Start
      </Button>
      <Button onClick={resetGame} variant="raised" color="secondary" className={classes.button}>
        Reset
      </Button>
     </div>
  );
}

Controls.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Controls);

