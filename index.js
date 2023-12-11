const fs = require('fs');
const inquirer = require('inquirer');
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');
const validateColor = require('validate-color').default;


const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Logo Text: provide up to 3 characters:', 
        validate: (value) => {
            let textLength = value.length;
            if (textLength >= 1 && textLength <= 3) {                
                return true;
            }
            return "Please enter a maximum of 3 characters:";
                          
        }   
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Provide a color name or hex code:',
        validate: (value) => {        
            let colorVerify = validateColor(value);    
            if (colorVerify) {        
                return true;                
            }else{
                return "Please enter a valid color name or hex code:";                
            }
        }
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Logo Shape: select one from below:',
        choices: ['circle', 'square', 'triangle']  
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Provide a color name or hex code:',
        validate: (value) => {        
            let colorVerify = validateColor(value);    
            if (colorVerify) {        
                return true;                
            }else{
                return "Please enter a valid color name or hex code:";                
            }
        }
    },
];


inquirer
.prompt(questions)
.then(({text, textColor, shape, shapeColor}) =>{    

    let width = '300';
    let height = '200';
    let svgString;

    switch (shape) {
        case 'circle': return svgString = new Circle(width, height, shapeColor, text, textColor).render();
    
        case 'square': return svgString = new Square(width, height, shapeColor, text, textColor).render();

        case 'triangle': return svgString = new Triangle(width, height, shapeColor, text, textColor).render();
    }

    return svgString;    
})
.then ((svgString)=> {
    fs.writeFile('./output/logo.svg', svgString, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
});




