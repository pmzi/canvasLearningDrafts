const Rect = require('./components/Rect');

class App{

    static Rect = Rect;

    constructor(canvasElementID){

        this.app = document.getElementById(canvasElementID);

        this.context = this.app.getContext('2d');

        window.addEventListener("load", ()=>{
            this.__handleResize();
        })

        window.addEventListener("resize", ()=>{
            this.__handleResize();
        })

        this.objects = [];

        this.__render();
        
    }

    addObject(object){

        this.objects.push(object);

    }

    __handleResize(){

        this.width = window.innerWidth;

        this.height = window.innerHeight;

        this.app.width = this.width;

        this.app.height = this.height;

    }

    __render(){

        requestAnimationFrame(this.__render.bind(this));

        this.__clear();

        for(let object of this.objects){

            object.render();

        }

    }

    __clear(){

        this.context.clearRect(0, 0, this.width, this.height);

    }

}

let app = new App("app");

let rect1 = new App.Rect(app.context);

app.addObject(rect1)