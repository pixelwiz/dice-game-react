export const setGameStarted = () => ({
  type: 'SET_GAME_STARTED',
});

export const setGameOver = () => ({
  type: 'SET_GAME_OVER',
});

export const addRoll = () => ({
  type: 'ADD_ROLL',
});

export const resetRolls = () => ({
  type: 'RESET_ROLLs',
});

export const setRolling = rolling => ({
  type: 'SET_ROLLING',
  rolling,
});

export const setRandomValues = arrDice => ({
  type: 'SET_RANDOM_VALUES',
  arrDice,
});

export default undefined;
