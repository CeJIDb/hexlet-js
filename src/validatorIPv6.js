import _ from 'lodash';

const isValidGroup = (group) => {
  const number = Number(`0x${group}`);
  return group.length <= 4 && !_.isNaN(number);
};

export default (ip) => {
  if (ip.indexOf('::') !== ip.lastIndexOf('::')) {
    return false;
  }

  const isShort = ip.includes('::');
  const groups = ip
    .split('::')
    .filter((group) => group !== '')
    .flatMap((part) => part.split(':'));
  const length = isShort ? groups.length + 1 : groups.length;

  if ((!isShort && length < 8) || length > 8) {
    return false;
  }

  return groups.every(isValidGroup);
};
