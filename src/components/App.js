import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import DiceCollection from './DiceCollection';
import { setGameStarted, setGameOver, addRoll, setRolling, setRandomValues } from '../state/actions/dice_actions';
import getRandomInteger from '../utils/getRandomInteger';

import '../styles/App.css';

const rollsPerGame = 3;

const gameOver = (dispatch) => {
  dispatch(reset('diceForm'));
};

const getRandomDice = (props) => {
  const { arrDiceData } = props.diceData;
  const newDiceArray = arrDiceData.map((item) => {
    let newItem;
    if (
      props.form.diceForm &&
      props.form.diceForm.values &&
      props.form.diceForm.values[`btnFreeze_${item.id}`]) {
      newItem = {
        ...item,
      };
    } else {
      newItem = {
        ...item,
        value: getRandomInteger(6),
      };
    }
    return newItem;
  });
  return newDiceArray;
};

export class App extends Component {
  componentDidUpdate() {
    const { dispatch } = this.props;
    const { game } = this.props.diceData;

    if (game.rolls < rollsPerGame && game.rolls !== 0 && !game.started) {
      dispatch(setGameStarted());
    } else if (game.rolls === rollsPerGame) {
      dispatch(setGameOver());
      gameOver(dispatch);
    }
  }

  render() {
    const handleRollClick = () => {
      const { dispatch } = this.props;
      dispatch(setRolling(true));
      dispatch(setRandomValues(getRandomDice(this.props)));
      setTimeout(() => {
        dispatch(setRolling(false));
        dispatch(addRoll());
      }, 1500);
    };

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dice Game in React.js</h1>
          {this.props.diceData.game.rolls > 0 ? <h2>Rolls: {this.props.diceData.game.rolls}</h2> : undefined}
        </header>
        <DiceCollection diceProps={this.props} />
        <button id="btn_roll" onClick={handleRollClick}>Roll</button>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    form: state.form,
    diceData: state.diceData,
  }
);

export default connect(mapStateToProps)(App);
