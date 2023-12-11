// import the Square class in this page to test
const Square = require('../lib/square');

// will test if the render() function on this class's instantiated object will return the desired svg String literal.
describe('Square', () => {
    test('should render a svg string literal using the Square class', () => {
        const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect width="160" height="160" fill="#F0F8FF" />

        <text x="80" y="100" font-size="60" text-anchor="middle" fill="black">SQR</text>
    
    </svg>`;
      const testSquare = new Square('300', '200', '#F0F8FF', 'SQR', 'black');
      expect(testSquare.render()).toEqual(expectedSVG);
    });
  });