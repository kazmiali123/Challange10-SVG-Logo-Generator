const Circle = require('../lib/circle');

describe('Circle', () => {
    test('should render a svg string literal using the Circle class', () => {
        const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="80" cy="80" r="80" fill="#F0F8FF" />
    
        <text x="80" y="100" font-size="60" text-anchor="middle" fill="black">CRL</text>
    
    </svg>`;
      const testCircle = new Circle('300', '200', '#F0F8FF', 'CRL', 'black');
      expect(testCircle.render()).toEqual(expectedSVG);
    });
  });
  