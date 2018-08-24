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

        // check each others crash

        for(let object of this.app.objects){

            if(this.property.x + this.property.width >= object.property.x && this.property.x + this.property.width<= object.property.x + object.property.width && Math.abs(this.property.y - object.property.y) <= object.property.height){
                this.property.speedX *= -1;
                object.property.speedX *= -1;
            }
            if(this.property.y + this.property.height >= object.property.y && this.property.y + this.property.height<= object.property.y + object.property.height && Math.abs(this.property.x - object.property.x) <= object.property.width){
                this.property.speedY *= -1;
                object.property.speedY *= -1;
            }

        }

    }

    render(){

        this.__move();

        this.context.fillRect(this.property.x, this.property.y, this.property.width, this.property.height);

    }

}

module.exports = Rect;