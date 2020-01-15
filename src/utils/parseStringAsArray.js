module.exports = function parseStringAsArray(arrAsString) {
  return arrAsString.split(',').map((tech) => tech.trim());
};
