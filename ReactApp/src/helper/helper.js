/*
  Javascript Helper methods
 */

const getValue = (temp, fallback, key) => {
  // temp[key] can be an empty string but not undefined
  if (temp[key] === undefined) {
    return fallback[key];
  }
  return temp[key];
};

const mapObject = (obj, func) =>
  Object.keys(obj)
    .reduce((prev, curr) => {
      const key = curr;
      const value = obj[key];
      return {
        ...prev,
        [key]: func(key, value),
      };
    }, {});

const filterObject = (obj, func) =>
  Object.keys(obj)
    .filter((key) => {
      const value = obj[key];
      // Note: key is always a string (never value of type integer) -> Don't use ===
      return func(key, value);
    })
    .reduce((prev, curr) => {
      const key = curr;
      const value = obj[key];
      return {
        ...prev,
        [key]: value,
      };
    }, {});

// Source: http://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
const arraysEqual = (a, b) => {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;
  const bSorted = b.sort();
  const errors = a.sort().filter((e, arr, i) => e !== bSorted[i]);
  return errors.length === 0;
};

const findGetParameter = (key) => {
  let result;
  let tmp = [];
  document.location.search
    .substr(1)
    .split('&')
    .forEach((item) => {
      tmp = item.split('=');
      if (tmp[0] === key) {
        result = decodeURIComponent(tmp[1]);
      }
    }
  );
  return result;
};

/*
  interface methods
*/

const scrollTo = (elementY, duration, elem = window) => {
  const startingY = elem.scrollTop;
  const diff = elementY - startingY;
  let start;
  // Bootstrap our animation - it will get called right before next frame shall be rendered.
  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;
    // Elapsed miliseconds since start of scrolling.
    const time = timestamp - start;
    // Get percent of completion in range [0, 1].
    const percent = Math.min(time / duration, 1);
    elem.scrollTop = startingY + (diff * percent);
    // Proceed with animation as long as we wanted it to.
    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  });
};


export {
  getValue,
  mapObject,
  filterObject,
  arraysEqual,
  findGetParameter,

  scrollTo,
};
