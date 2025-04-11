import _ from 'lodash';

const findPath = (node, target) => {
  const [name, children = []] = node;
  if (name === target) {
    return [name];
  }

  const subPath = _.find(children, (child) => findPath(child, target));

  return subPath ? [name, ...findPath(subPath, target)] : null;
};

const itinerary = (tree, from, to) => {
  const fromPath = findPath(tree, from);
  const toPath = findPath(tree, to);
  const commonPath = _.intersection(fromPath, toPath);
  const up = _.drop(fromPath, commonPath.length).reverse();
  const down = _.drop(toPath, commonPath.length);
  const common = commonPath.slice(-1);

  return [...up, ...common, ...down];
};

export default itinerary;
