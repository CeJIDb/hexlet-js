import _ from 'lodash';

const calculateProbabilities = (rolls) => {
  const keys = _.uniq(rolls);
  return keys.reduce((acc, key) => {
    const followingRolls = rolls.filter((cur, i, arr) => arr[i - 1] === key);
    const totalFollowingRolls = followingRolls.length;
    const rawFrequencies = _.countBy(followingRolls);
    const rollFrequencies = _.mapValues(
      rawFrequencies,
      (count) => count / totalFollowingRolls,
    );

    return { ...acc, [key]: rollFrequencies };
  }, {});
};

export default calculateProbabilities;
