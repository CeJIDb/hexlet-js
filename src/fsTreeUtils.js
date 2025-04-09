import * as fsTrees from '@hexlet/immutable-fs-trees';
import cloneDeep from 'lodash/cloneDeep.js';

const map = (func, node) => {
  const newNode = func(cloneDeep(node));

  if (fsTrees.isDirectory(newNode)) {
    const children = fsTrees
      .getChildren(newNode)
      .map((child) => map(func, child));

    return fsTrees.mkdir(
      fsTrees.getName(newNode),
      children,
      fsTrees.getMeta(newNode),
    );
  }

  return newNode;
};

const filter = (func, node) => {
  if (func(node)) {
    if (fsTrees.isDirectory(node)) {
      const children = fsTrees
        .getChildren(node)
        .map((child) => filter(func, child))
        .filter((child) => child !== undefined);

      return fsTrees.mkdir(
        fsTrees.getName(node),
        children,
        fsTrees.getMeta(node),
      );
    }

    return node;
  }
};

const reduce = (func, node, initialValue) => {
  const acc = func(initialValue, node);

  if (fsTrees.isDirectory(node)) {
    const children = fsTrees.getChildren(node);
    return children.reduce(
      (innerAcc, child) => reduce(func, child, innerAcc),
      acc,
    );
  }

  return acc;
};

export { map, filter, reduce };
