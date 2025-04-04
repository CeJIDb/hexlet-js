const convert = (arr) => {
  const result = arr.reduce((acc, element) => {
    if (Array.isArray(element)) {
      const [key, value] = element;

      if (!Array.isArray(key) && !Array.isArray(value)) {
        const newObj = {};
        newObj[key] = value;

        return { ...acc, ...newObj };
      }

      return convert(element);
    }
  }, {});

  return result;
};

export default convert;
