const compareVersion = (ver1, ver2) => {
  if (ver1.length === 0 || ver2.length === 0) {
    return null;
  }

  const ver1Arr = ver1.split('.').map((num) => +num);
  const ver2Arr = ver2.split('.').map((num) => +num);

  const length = Math.max(ver1Arr.length, ver2Arr.length);

  while (ver1Arr.length < length) ver1Arr.push(0);
  while (ver2Arr.length < length) ver2Arr.push(0);

  for (let i = 0; i < length; i += 1) {
    if (ver1Arr[i] > ver2Arr[i]) return 1;
    if (ver1Arr[i] < ver2Arr[i]) return -1;
  }

  return 0;
};

export default compareVersion;
