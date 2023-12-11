// import the Triangle class in this page to test
const Triangle = require('../lib/triangle');

// will test if the render() function on this class's instantiated object will return the desired svg String literal.
describe('Triangle', () => {
    test('should render a svg string literal using the Triangle class', () => {
        const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="80 0,0 160,160 160" fill="#F0F8FF" />

        <text x="80" y="140" font-size="60" text-anchor="middle" fill="darkblue">TGL</text>
    
    </svg>`;
      const testTriangle = new Triangle('300', '200', '#F0F8FF', 'TGL', 'darkblue');
      expect(testTriangle.render()).toEqual(expectedSVG);
    });
  });