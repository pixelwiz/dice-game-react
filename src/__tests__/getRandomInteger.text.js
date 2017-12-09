import getRandomInteger from '../utils/getRandomInteger';

describe('Random Number Generator', () => {
  it('Should return an integer less than or equal to 6', () => {
    const randomNumberBetwee1And6 = getRandomInteger(6);
    expect(randomNumberBetwee1And6).toBeLessThanOrEqual(6);
  });
  it('Should return an integer greater than or equal to 1', () => {
    const randomNumberBetwee1And6 = getRandomInteger(6);
    expect(randomNumberBetwee1And6).toBeGreaterThanOrEqual(1);
  });
});
