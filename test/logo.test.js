// import the Logo class in this page to test
const Logo = require('../lib/logo');

// will test if the render() function; ran on an object of this Logo class will throw the written error message.
describe('Logo', () => {
    test('should throw error if render() is called from ancestor class', () => {
      const testLogo = new Logo();
      const err = new Error('Child class must implement a render() method')
      expect(testLogo.render).toThrow(err);
    });
  });

