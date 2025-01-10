import _ from 'lodash';

export default (totalRolls, rollDie) => {
  const rolls = Array.from({ length: totalRolls }, rollDie);
  const counts = _.countBy(rolls);

  const histogram = _.range(1, 7).map((key) => {
    const value = counts[key] || 0;
    return value === 0 ? `${key}|` : `${key}|${'#'.repeat(value)} ${value}`;
  });

  console.log(histogram.join('\n'));
};
