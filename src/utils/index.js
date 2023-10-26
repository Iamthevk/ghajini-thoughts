let nextId = 0;
const generateId = () => {
  const result = nextId;
  nextId += 1;
  return result;
};

const getNewExpirationTime = () => {
  return Date.now() + 15 * 1000;
};

export { generateId, getNewExpirationTime };
