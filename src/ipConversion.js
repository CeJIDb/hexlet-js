export const ipToInt = (ip) =>
  ip
    .split('.')
    .map((octet) => parseInt(octet, 10))
    .reduce((acc, octet) => acc * 256 + octet, 0);

export const intToIp = (int) =>
  [
    Math.floor(int / (256 * 256 * 256)),
    Math.floor((int / (256 * 256)) % 256),
    Math.floor((int / 256) % 256),
    int % 256,
  ].join('.');
