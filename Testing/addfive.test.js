const addfive = require('./addfive');

test('adds 5 to the number', () => {
  expect(addfive(2)).toBe(7);
});

