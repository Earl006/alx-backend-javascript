#!/usr/bin/env node

export default function iterateThroughObject(reportWithIterator) {
  let output = '';

  for (const [index, item] of Object.entries(reportWithIterator)) {
    output += `${item}`;

    // eslint-disable-next-line radix
    if (parseInt(index) !== reportWithIterator.length - 1) {
      output += ' | ';
    }
  }

  return output;
}
