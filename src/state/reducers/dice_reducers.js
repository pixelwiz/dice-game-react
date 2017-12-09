const defaultState = {
  arrDiceData: [
    {
      id: 1,
      value: 1,
      rolling: false,
    },
    {
      id: 2,
      value: 2,
      rolling: false,
    },
    {
      id: 3,
      value: 3,
      rolling: false,
    },
    {
      id: 4,
      value: 4,
      rolling: false,
    },
    {
      id: 5,
      value: 5,
      rolling: false,
    },
  ],
  game: {
    started: false,
    rolls: 0,
  },
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ROLL':
      return {
        ...state,
        game: {
          ...state.game,
          started: true,
        }
      };
    case 'SET_ROLLING':
      return {
        ...state,
        rolling: action.rolling,
      };
    case 'SET_VALUE':
      return {
        ...state,
        vaule: action.value,
      };
    default:
      return state;
  }
};
