import React from 'react';
import { reduxForm } from 'redux-form';
import Dice from './Dice';
import DiceImages from './DiceImages';


const diceCollectionStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const getDiceHTML = (props) => {
  const { diceData } = props;
  const diceHTML = diceData.arrDiceData.map(item => (
    <Dice
      key={item.id}
      id={item.id}
      value={item.value}
      img={diceData.game.rolling ? DiceImages.imgRollingDice : DiceImages[`imgDice${item.value}`]}
      game={diceData.game}
    />
  ));
  return diceHTML;
};

const DiceCollection = (props) => {
  return (
    <div id="diceCollection" style={diceCollectionStyle}>
      <form>
        {getDiceHTML(props)}
      </form>
    </div>
  );
};


export default reduxForm({
  form: 'diceForm', // a unique identifier for this form
})(DiceCollection);
