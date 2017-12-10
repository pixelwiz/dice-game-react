import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import DiceCollection from './DiceCollection';
import { setGameStarted, setGameOver, addRoll, setRolling, setRandomValues } from '../state/actions/dice_actions';
import getRandomDice from '../utils/getRandomDice';

import '../styles/App.css';

const rollsPerGame = 3;

const gameOver = (dispatch) => {
  dispatch(reset('diceForm'));
};

const checkWinner = (arrDice) => {
  const arrDiceValues = arrDice.map(item => item.value);
  return arrDiceValues.every(v => v === arrDice[1].value);
};

const handleRollClick = (props) => {
  const { dispatch } = props;
  dispatch(setRolling(true));
  const arrRandomDice = getRandomDice(props);
  dispatch(setRandomValues(arrRandomDice));
  setTimeout(() => {
    dispatch(setRolling(false));
    dispatch(addRoll());
  }, 1500);
};

export class App extends Component {
  componentDidUpdate() {
    const { dispatch } = this.props;
    const { game } = this.props.diceData;

    if (game.rolls < rollsPerGame && game.rolls !== 0 && !game.started) {
      dispatch(setGameStarted());
    } else if (game.rolls === rollsPerGame) {
      dispatch(setGameOver(checkWinner(this.props.diceData.arrDiceData) ? 'Winner' : 'Try Again?'));
      gameOver(dispatch);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dice Game in React.js</h1>
          {this.props.diceData.game.rolls > 0
            ? <h2>Rolls: {this.props.diceData.game.rolls}</h2>
            : undefined}
          <h2>{this.props.diceData.game.message}</h2>
        </header>
        <DiceCollection diceProps={this.props} />
        <button id="btn_roll" onClick={() => handleRollClick(this.props)}>Roll</button>
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
