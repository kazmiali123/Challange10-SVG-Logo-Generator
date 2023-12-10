
class Logo {
    constructor(width, height){
        this.width = width;
        this.height = height;        
    }

    render(){
        throw new Error('Child class must implement a render() method');
    }

}

module.exports = Logo;