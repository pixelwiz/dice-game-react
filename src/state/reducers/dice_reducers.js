const defaultState = {
  arrDiceData: [
    {
      id: 1,
      value: 1,
    },
    {
      id: 2,
      value: 2,
    },
    {
      id: 3,
      value: 3,
    },
    {
      id: 4,
      value: 4,
    },
    {
      id: 5,
      value: 5,
    },
  ],
  game: {
    started: false,
    rolls: 0,
    rolling: false,
  },
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_GAME_STARTED':
      return {
        ...state,
        game: {
          ...state.game,
          started: true,
        },
      };
    case 'SET_GAME_OVER':
      return {
        ...state,
        game: {
          ...state.game,
          rolls: 0,
          message: action.message,
        },
      };
    case 'ADD_ROLL':
      return {
        ...state,
        game: {
          ...state.game,
          rolls: state.game.rolls + 1,
        },
      };
    case 'SET_ROLLING':
      return {
        ...state,
        game: {
          ...state.game,
          rolling: action.rolling,
          message: undefined,
        },
      };
    case 'SET_RANDOM_VALUES':
      return {
        ...state,
        arrDiceData: [
          ...action.arrDice,
        ],
      };
    default:
      return state;
  }
};
