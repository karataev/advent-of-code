const Navigator = require('./Navigator');
const data = require('./day19-data-test');

test('should find entry point', () => {
  let navigator = new Navigator(data);

  expect(navigator.getEntryPoint()).toEqual(5);
});