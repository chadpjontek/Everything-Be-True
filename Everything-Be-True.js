function truthCheck(collection, pre) {
  // check every object and return true if they all pass the truthy tests below. False if not.
  return collection.every(function (obj) {
    return (
      // Is pre in current obj?
      obj.hasOwnProperty(pre) &&
      // Does the vaule of obj.pre contain an empty string?
      obj[pre] !== '' &&
      // Is the value null?
      obj[pre] !== null &&
      // Is the value 0?
      obj[pre] !== 0 &&
      // Is the value NaN?
      !Number.isNaN(obj[pre]) &&
      // Is the value undefined?
      obj[pre] !== undefined
    );
  });
}
// Example
truthCheck(
  [
    { user: 'Tinky-Winky', sex: 'male' },
    { user: 'Dipsy', sex: 'male' },
    { user: 'Laa-Laa', sex: 'female' },
    { user: 'Po', sex: 'female' },
  ],
  'sex'
); // returns true
truthCheck(
  [
    { user: 'Tinky-Winky', sex: 'male' },
    { user: 'Dipsy' },
    { user: 'Laa-Laa', sex: 'female' },
    { user: 'Po', sex: 'female' },
  ],
  'sex'
); // returns false
truthCheck(
  [
    { user: 'Tinky-Winky', sex: 'male', age: 0 },
    { user: 'Dipsy', sex: 'male', age: 3 },
    { user: 'Laa-Laa', sex: 'female', age: 5 },
    { user: 'Po', sex: 'female', age: 4 },
  ],
  'age'
); // returns false
truthCheck(
  [
    { name: 'Pete', onBoat: true },
    { name: 'Repeat', onBoat: true },
    { name: 'FastFoward', onBoat: null },
  ],
  'onBoat'
); // returns false
truthCheck(
  [
    { name: 'Pete', onBoat: true },
    { name: 'Repeat', onBoat: true, alias: 'Repete' },
    { name: 'FastFoward', onBoat: true },
  ],
  'onBoat'
); // returns true
truthCheck([{ single: 'yes' }], 'single'); // returns true
truthCheck([{ single: '' }, { single: 'double' }], 'single'); // returns false
truthCheck([{ single: 'double' }, { single: undefined }], 'single'); // returns false
truthCheck([{ single: 'double' }, { single: NaN }], 'single'); // returns false
