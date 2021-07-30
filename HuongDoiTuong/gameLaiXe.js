class Car{
    constructor(image, top, left, size, speed) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
        this.speed=speed;
    }
    getCarElement() {
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:fixed;" />';
    }
    moveRight() {
        this.left+=this.speed;
    }
    moveDown() {
        this.top+=this.speed;
    }
    moveLeft() {
        this.left-=this.speed;
    }
    moveUp() {
        this.top-=this.speed;
    }
    speedChange(speed) {
        this.speed=speed;
    }
    moveSelection(evt) {
        switch (evt.keyCode) {
            case 37:
                this.moveUp();
                break;
            case 39:
                this.moveRight();
                break;
            case 38:
                this.moveUp();
                break;
            case 40:
                this.moveDown();
                break;
        }
    }

}
let car= new Car("Car.jpg", 20, 30, 100);

function start() {
    car.speedChange(5);
    window.addEventListener('keydown', moveSelection);
    document.getElementById('game').innerHTML = car.getCarElement();
}
start();