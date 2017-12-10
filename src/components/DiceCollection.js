import React from 'react';
import { reduxForm } from 'redux-form';
import Dice from './Dice';

const diceCollectionStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const getDiceHTML = (props) => {
  const { diceData, form } = props.diceProps;
  const diceHTML = diceData.arrDiceData.map(item => (
    <Dice
      key={item.id}
      id={item.id}
      value={item.value}
      rolling={diceData.game.rolling}
      form={form}
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
