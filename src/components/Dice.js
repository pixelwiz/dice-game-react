import React from 'react';
import { Field } from 'redux-form';
import DiceImages from './DiceImages';

const diceStyle = {
  float: 'left',
};

const freezeButtonsStyle = {
  height: '20px',
};

const freezeButtonHTML = props => (
  <div style={freezeButtonsStyle}>
    <Field name={`btnFreeze_${props.id}`} id={`btnFreeze_${props.id}`} component="input" type="checkbox" />
    <label htmlFor={`btnFreeze_${props.id}`}>Freeze</label>
  </div>
);


const Dice = (props) => {
  // console.log("Debug", props)
  let imgSrc = DiceImages[`imgDice${props.value}`];
  if (props.rolling &&
    !(
      props.form.diceForm &&
      props.form.diceForm.values &&
      props.form.diceForm.values[`btnFreeze_${props.id}`]
    )
  ) {
    imgSrc = DiceImages.imgRollingDice;
  }

  return (
    <div
      className="dice"
      key={props.id}
      style={diceStyle}
    >
      <img
        src={imgSrc}
        alt={props.value}
        width={125}
        height={125}
      />
      {props.game.rolls > 0 && !props.game.rolling ? freezeButtonHTML(props) : <div style={freezeButtonsStyle} />}
    </div>
  );
};

export default Dice;
