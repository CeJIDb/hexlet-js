import _ from 'lodash';

const displayHistogram = (totalRolls, rollDie) => {
  const rolls = Array.from({ length: totalRolls }, rollDie);
  const counts = _.countBy(rolls);
  const height = Math.max(...Object.values(counts));
  const width = 3;
  const lineSeparatorIndex = height + 1;
  const lines = _.range(1, 7).map((num) => {
    const strNum = num.toString();
    const strNumPaddings = ' '.repeat(Math.floor((width - strNum.length) / 2));
    const diceNum = `${strNumPaddings}${strNum}${strNumPaddings}`;
    const lineSeparator = '-'.repeat(width);
    const countNum = counts[num] || 0;
    const bar = Array.from({ length: countNum }, () => '#'.repeat(width));
    const probability = Math.round((countNum / totalRolls) * 100);
    const numProbability =
      probability !== 0 ? `${probability.toString()}%` : '';
    const numProbabilityPaddings = ' '.repeat(
      Math.floor(width - numProbability.length),
    );
    const strNumProbability = `${numProbability}${numProbabilityPaddings}`;
    const topPaddings = Array.from({ length: height - countNum }, () =>
      ' '.repeat(width),
    );

    return [...topPaddings, strNumProbability, ...bar, lineSeparator, diceNum];
  });

  const transposedLines = _.unzip(lines);
  const chart = transposedLines
    .map((line, i) =>
      i !== lineSeparatorIndex ? line.join(' ').trimEnd() : line.join('-'),
    )
    .join('\n');

  console.log(chart);
};

export default displayHistogram;
