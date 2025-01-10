export default (...objects) =>
  objects.reduce((acc, obj) => {
    for (const [key, value] of Object.entries(obj)) {
      if (!Object.hasOwn(acc, key)) {
        acc[key] = [];
      }

      if (!acc[key].includes(value)) {
        acc[key].push(value);
      }
    }

    return acc;
  }, {});
