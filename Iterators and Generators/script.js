function iterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;

  const rangeIterator = {
    next() {
      let result;
      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
        nextIndex += step;
        iterationCount++;
        return result;
      }
      return { value: nextIndex, done: true };
    },
  };
  return rangeIterator
}



const iter = iterator(1, 20, 1);

let result = iter.next();
while (!result.done) {
  console.log(result.value);
  result = iter.next();
}

console.log("Iterated over sequence of size: ", result.value);
