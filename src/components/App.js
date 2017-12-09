import React, { Component } from 'react';
import { connect } from 'react-redux';
import DiceCollection from './DiceCollection';
import { roll } from '../state/actions/dice_actions';
// import { setFirstPage, setDirection } from '../state/actions/slider';

// import SearchForm from './SearchForm';
import '../styles/App.css';

export class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    // dispatch(TBD(window.store));
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
      dispatch(roll());
    };

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dice Game in React.js</h1>
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
