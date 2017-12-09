import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import diceData from './dice_reducers';

export default combineReducers({
  diceData,
  form: reduxFormReducer, // mounted under "form"
});
