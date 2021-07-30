class Bird{
    constructor(image, top, left, size, speed) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
        this.speed=speed;
    }
    getBirdElement() {
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

}
let bird= new Bird('conchim.jpg', 20, 30, 200);
function start() {
    bird.speedChange(5);
    if ((bird.left <window.innerWidth-bird.size)&&(bird.top===20)) {
        bird.moveRight();
    } else if ((bird.left >=window.innerWidth-bird.size)&&(bird.top <window.innerHeight-bird.size)) {
        bird.moveDown();
    } else if (bird.left>=30) {
        bird.moveLeft();
    } else if (bird.top>20) {
        bird.moveUp();
    }

    document.getElementById('game').innerHTML = bird.getBirdElement();
        setTimeout(start, 1)
}
start();
