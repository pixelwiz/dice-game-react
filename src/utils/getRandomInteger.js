export default (max, min = 1) => {
  const minAdjusted = Math.ceil(min);
  const maxAdjusted = Math.floor(max);
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * ((maxAdjusted - minAdjusted) + 1)) + minAdjusted;
};
