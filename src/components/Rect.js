class Rect{

    constructor(app, property = {
        x:0,
        y:0,
        width:50,
        height:50,
        speedX: 10,
        speedY: 10
    }){

        this.context = app.context;

        this.app = app;

        this.property = property;
        
    }

    __move(){
        this.__checkCrash();
        this.property.x+=this.property.speedX;
        this.property.y+=this.property.speedY;
    }

    __checkCrash(){
        if(this.property.x + this.property.width >= this.app.width || this.property.x < 0){
            this.property.speedX*=-1;
        }
        if(this.property.y + this.property.height >= this.app.height || this.property.y < 0){
            this.property.speedY*=-1;
        }   
    }

    render(){

        this.__move();

        this.context.fillRect(this.property.x, this.property.y, this.property.width, this.property.height);

    }

}

module.exports = Rect;