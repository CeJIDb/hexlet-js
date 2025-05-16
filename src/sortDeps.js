const sortDeps = (graph) => {
  const nodes = Object.keys(graph);
  const inDegree = nodes.reduce(
    (acc, node) => ({ ...acc, [node]: graph[node].length }),
    {},
  );
  const queue = nodes.filter((node) => inDegree[node] === 0);
  const result = [];

  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node);

    nodes.forEach((n) => {
      if (graph[n].includes(node)) {
        inDegree[n] -= 1;
        if (inDegree[n] === 0) {
          queue.push(n);
        }
      }
    });
  }

  return result;
};

export default sortDeps;

const deps = {
  mongo: [],
  tzinfo: ['thread_safe'],
  uglifier: ['execjs'],
  execjs: ['thread_safe', 'json'],
  redis: [],
  thread_safe: [],
  json: [],
};

console.log(sortDeps(deps));
