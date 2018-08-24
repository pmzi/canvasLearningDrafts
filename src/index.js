class App{

    constructor(canvasElementID){

        this.app = document.getElementById(canvasElementID);

        this.context = this.app.getContext('2d');

        this.x = 0;

        window.addEventListener("load", ()=>{
            this.__handleResize();
        })

        window.addEventListener("resize", ()=>{
            this.__handleResize();
        })

        this.__render();
        
    }

    __handleResize(){

        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.app.width = this.width;
        this.app.height = this.height;

    }

    __render(){

        requestAnimationFrame(this.__render.bind(this));

        this.context.clearRect(0, 0, this.width, this.height);

        this.x++;

        this.context.fillRect(this.x, 0, 100, 100);

    }

}

new App("app");