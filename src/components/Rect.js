class Rect{

    constructor(context, property = {
        x:0,
        y:0,
        width:50,
        height:50
    }){

        this.context = context;

        this.property = property;
        
    }

    __move(){
        this.property.x++;
        this.property.y++;
    }

    render(){

        this.__move();        

        this.context.fillRect(this.property.x, this.property.y, this.property.width, this.property.height);

    }

}

module.exports = Rect;