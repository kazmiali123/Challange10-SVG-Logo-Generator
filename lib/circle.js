// Circle class that is a child of the Logo parent class, with render function to generate a SVG string literal, to make the circle shape logo.
const Logo = require('./logo');

class Circle extends Logo {
    constructor(width, height, shapeColor, text, textColor){
        super(width, height);
        this.shapeColor = shapeColor;
        this.text= text;
        this.textColor = textColor;
    }

    // render function is specific to this class
    render(){
        return `<svg version="1.1" width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">

        <circle cx="80" cy="80" r="80" fill="${this.shapeColor}" />
    
        <text x="80" y="100" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    
    </svg>`;
    }
}

module.exports = Circle;