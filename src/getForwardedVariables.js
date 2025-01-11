export default (config) => {
  const lines = config.split('\n');
  return lines
    .filter((line) => line.startsWith('environment='))
    .map((line) => line.replaceAll('environment=', ''))
    .map((line) => line.replaceAll('"', ''))
    .flatMap((line) => line.split(','))
    .filter((kv) => kv.startsWith('X_FORWARDED_'))
    .map((kv) => kv.replace('X_FORWARDED_', ''))
    .join(',');
};
