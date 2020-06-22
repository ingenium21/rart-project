export const constructAccessor = (obj) => {
  const isObject = (val) => typeof val === 'object' && !Array.isArray(val);

  const addDelimiter = (a, b) => (a ? `${a}.${b}` : b);

  const paths = (obj = {}, head = '') => {
    let newchild = {};
    Object.entries(obj).forEach(([key, value]) => {
      let fullPath = addDelimiter(head, key);
      if (isObject(value)) {
        newchild[key] = paths(value, fullPath);
      } else {
        newchild[key] = fullPath;
      }
    });
    return newchild;
  };

  return paths(obj);
};
