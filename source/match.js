
/**
 * Take some text to search and returns a function
 * which takes a pattern and returns the matched text,
 * if found, or an empty string. The pattern can be a 
 * string or regular expression.
 * 
 * @param {string} text The text to search.
 * @returns {(pattern: string|Object) => string}
 */
const match = text => pattern => {
  const RE = new RegExp(pattern);
  const matched = text.match(RE);
  return matched ? matched[0] : '';
};

export default match;
