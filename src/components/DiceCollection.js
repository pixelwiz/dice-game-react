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
  console.log(diceData);
  const diceHTML = diceData.arrDiceData.map(item => (
    <Dice
      id={item.id}
      value={item.value}
      rolling={item.rolling}
      img={item.rolling ? DiceImages.imgRollingDice : DiceImages[`imgDice${item.value}`]}
      game={diceData.game}
    />
  ));
  return diceHTML;
};

const DiceCollection = (props) => {
  const {
    handleSubmit,
  } = props;
  return (
    <div id="diceCollection" style={diceCollectionStyle}>
      <form onSubmit={handleSubmit}>
        {getDiceHTML(props)}
      </form>
    </div>
  );
};


export default reduxForm({
  form: 'diceForm', // a unique identifier for this form
})(DiceCollection);
