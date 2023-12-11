// ancestor class for the logo generator, Child classes representing the shapes will be extended from this class
class Logo {
    constructor(width, height){
        this.width = width;
        this.height = height;        
    }

    render(){
        throw new Error('Child class must implement a render() method');
    }

}

// exports the Logo class to be accessible outside this script
module.exports = Logo; 