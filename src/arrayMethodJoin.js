/* eslint-disable no-extend-native */
'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';

    const length = this.length;

    for (let i = 0; i < length; i++) {
      const currentElement = this[i];

      if (i !== 0) {
        result += separator !== undefined ? separator : ',';
      }

      if (currentElement !== null && currentElement !== undefined) {
        result += currentElement;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
