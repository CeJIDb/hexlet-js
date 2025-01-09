export default (data) =>
  data
    .filter((user) => user.gender === 'male')
    .map((user) => user.birthday.slice(0, 4))
    .reduce((acc, date) => {
      const count = (acc[date] ?? 0) + 1;
      return { ...acc, [date]: count };
    }, {});
