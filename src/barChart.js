import _ from 'lodash';

const barChart = (numbers) => {
  const bottom = Math.min(0, ...numbers);
  const top = Math.max(0, ...numbers);

  const lines = numbers.map((number) => {
    const bar = number > 0 ? '*'.repeat(number) : '#'.repeat(Math.abs(number));
    const bottomSpace = ' '.repeat(Math.min(0, number) - bottom);
    const topSpace = ' '.repeat(top - Math.max(0, number));

    return [...topSpace, ...bar, ...bottomSpace];
  });

  const chart = _.zip(...lines)
    .map((line) => line.join(''))
    .join('\n');

  console.log(chart);
};

export default barChart;
