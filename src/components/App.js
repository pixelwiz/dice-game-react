import React, { Component } from 'react';
import { connect } from 'react-redux';
import DiceCollection from './DiceCollection';
import { setGameStarted, setGameOver, addRoll, setRolling, setRandomValues } from '../state/actions/dice_actions';
import getRandomInteger from '../utils/getRandomInteger';

import '../styles/App.css';

const rollsPerGame = 3;
const gameOver = () => {alert("game over")};
const getRandomDice = (arrDice) => {
  const newDiceArray = 
    arrDice.map(item => ({
      ...item, 
      value: getRandomInteger(6),
    }));
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
      gameOver();
    }
  }

/*  searchPhotosSubmit = () => {
    const { dispatch } = this.props;
    dispatch(setFirstPage());
    dispatch(setDirection('forward'));
    dispatch(searchPhotos(window.store));
  }

  //<SearchForm onSubmit={this.searchPhotosSubmit} />
*/
  render() {
    const handleRollClick = () => {
      const { dispatch } = this.props;
      dispatch(setRolling(true));
      dispatch(addRoll());
      dispatch(setRandomValues(getRandomDice(this.props.diceData.arrDiceData)));
      setTimeout(() => dispatch(setRolling(false)), 1500);
    };

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dice Game in React.js</h1>
          {this.props.diceData.game.rolls > 0 ? <h2>Rolls: {this.props.diceData.game.rolls}</h2> : undefined}
        </header>
        <DiceCollection diceData={this.props.diceData} />
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
