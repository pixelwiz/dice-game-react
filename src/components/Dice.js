import React from 'react';
import { Field } from 'redux-form';

const diceStyle = {
  float: 'left',
};

const freezeButtonHTML = props => (
  <div>
    <Field name={`btnFreeze_${props.id}`} id={`btnFreeze_${props.id}`} component="input" type="checkbox" />
    <label htmlFor={`btnFreeze_${props.id}`}>Freeze</label>
  </div>
);


const Dice = (props) => {
  return (
    <div
      className="dice"
      key={props.id}
      style={diceStyle}
    >
      <img
        src={props.img}
        alt={props.value}
        width={125}
        height={125}
      />
      {props.game.started ? freezeButtonHTML(props) : undefined}
    </div>
  );
};

export default Dice;
