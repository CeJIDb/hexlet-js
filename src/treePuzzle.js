import _ from 'lodash';

const makeJoints = (tree, parent) => {
  const [leaf, children] = tree;

  if (!children) {
    return { [leaf]: [parent] };
  }

  const flatChildren = _.flatten(children);
  const neighbors = [...flatChildren, parent].filter(
    (neighbor) => neighbor && !_.isArray(neighbor),
  );

  return {
    [leaf]: neighbors,
    ...children.reduce((acc, c) => ({ ...acc, ...makeJoints(c, leaf) }), {}),
  };
};

const buildTreeFromLeaf = (joints, leaf) => {
  const iter = (current, acc) => {
    const checked = [...acc, current];
    const neighbors = (joints[current] || [])
      .filter((n) => !checked.includes(n))
      .map((n) => iter(n, checked));

    return _.isEmpty(neighbors) ? [current] : [current, neighbors];
  };

  return iter(leaf, []);
};

const combine = (...branches) => {
  const root = branches[0][0];
  const joints = branches.reduce((acc, branch) => {
    const jointsFromBranch = makeJoints(branch);
    return _.mergeWith(acc, jointsFromBranch, _.union);
  }, {});

  return buildTreeFromLeaf(joints, root);
};

export default combine;
