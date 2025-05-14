import _ from 'lodash';

const makeJoints = (tree, parent) => {
  const [leaf, children] = tree;

  if (!children) {
    return { [leaf]: [parent] };
  }

  const flatChildren = _.flatten(children);
  const neighbors = [parent, ...flatChildren].filter(
    (neighbor) => neighbor && !_.isArray(neighbor),
  );
  const joints = children.reduce(
    (acc, child) => ({ ...acc, ...makeJoints(child, leaf) }),
    {},
  );

  return { [leaf]: neighbors, ...joints };
};

const buildTreeFromLeaf = (joints, leaf) => {
  const iter = (current, acc) => {
    const checked = [...acc, current];
    const neighbors = joints[current]
      .filter((n) => !checked.includes(n))
      .map((n) => iter(n, checked));

    return _.isEmpty(neighbors) ? [current] : [current, neighbors];
  };

  return iter(leaf, []);
};

const transform = (tree, root) => {
  const leaf = makeJoints(tree);
  return buildTreeFromLeaf(leaf, root);
};

export default transform;
