import getRandomDice from '../utils/getRandomDice';

const mockStore = {
  diceData: {
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
  },
  form: {}
};

describe('Random Dice Array', () => {
  it('Should return an array of random dice value', () => {
    const arrayRandomDice = getRandomDice(mockStore);
    expect(arrayRandomDice).not.toEqual(mockStore.diceData.arrDiceData);
  });
});
