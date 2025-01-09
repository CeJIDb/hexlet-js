const filterAnagrams = (word, arrOfChars) => {
  const normalize = (str) => str.toLowerCase().split('').sort().join('');

  const normalizedWord = normalize(word);

  return arrOfChars.filter((item) => normalize(item) === normalizedWord);
};

export default filterAnagrams;
