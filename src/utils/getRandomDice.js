import getRandomInteger from './getRandomInteger';

const checkFrozen = (form, itemID) => {
  let frozen = false;
  if (typeof form !== 'undefined'
    && typeof form.diceForm !== 'undefined'
    && typeof form.diceForm.values !== 'undefined'
    && form.diceForm.values[`btnFreeze_${itemID}`]) {
    frozen = true;
  }
  return frozen;
};

export default (props) => {
  const { arrDiceData } = props.diceData;
  const newDiceArray = arrDiceData.map((item) => {
    let newItem = ({ ...item });
    if (!checkFrozen(props.form, item.id)) {
      const randomInt = getRandomInteger(6);
      newItem = {
        ...item,
        value: randomInt,
      };
    }
    return newItem;
  });
  return newDiceArray;
};
