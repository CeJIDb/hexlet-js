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

const combineJoints = (jointsMain, jointsOther) => {
  const combinedJoints = jointsOther.reduce(((acc, joint) => {
    const 
  }), _.cloneDeep(jointsMain));
};

const combine = (branch1, ...branches) => {
  const jointsMain = makeJoints(branch1);
  const jointsOthers = branches.map((branch) => makeJoints(branch));
  const combinedJoints = combineJoints(jointsMain, jointsOthers);
};
