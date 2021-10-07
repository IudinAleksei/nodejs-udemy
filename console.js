function consoleToJSON() {
  const [, , ...argv] = process.argv;
  const result = argv.reduce((acc, el) => {
    const [key, value] = el.split('=');
    acc[key] = value || true;
    return acc;
  }, {});
  return result;
}

console.log(consoleToJSON());
