const Logo = require('../lib/logo');


describe('Logo', () => {
    test('should throw error if render() is called from ancestor class', () => {
      const testLogo = new Logo();
      const err = new Error('Child class must implement a render() method')
      expect(testLogo.render).toThrow(err);
    });
  });

