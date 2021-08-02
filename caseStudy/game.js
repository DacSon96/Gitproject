let score=0;
let moves=0;
let attempt=0;
let imgStatus=0;
let imgPosition=[];
let imgGame=['images/1.png','images/2.png','images/3.png','images/4.png','images/5.png','images/6.png','images/7.png','images/8.png'];
let previousClick=0;
let timeOut=30;
let topPlayer=[];
function startGame() {
    for (let i = 0; i < 16; i++) {
            let image = document.getElementById(i);
             image.width = 100;
             image.height = 100;
             image.src = "images/cg.png";
             image.addEventListener("click", imgClick);
        }
        newGame();
}
function newGame(){
    let score=0;
    let moves=0;
    // let attempt=0;
    document.getElementById('score').innerHTML=score;
    document.getElementById('moves').innerHTML=moves;
    // // for (let i = 0; i <16 ; i++) {
    // //     document.images[i].src="images/cg.png";
    // }
    for (let i = 0; i <16 ; i++) {
        imgStatus[i]=0;
    }
    for (let i = 0; i < 8; i++) {
        imgPosition[2*i]=i;
        imgPosition[2*i+1]=i;
    //    2 ô kế nhau hình giống nhau
    }
    for (let i = 0; i < 16; i++) {
        let rd=Math.round(Math.random()*15);
        let b=imgPosition[i];
        imgPosition[i]=imgPosition[rd];
        imgPosition[rd]=b;
    //    đảo vị trí hình
    }
}
function imgClick() {
    let id=this.id;
    if (imgStatus[id]===-1){
        return;
    }
    if (attempt ===0){
        let clickedImg=imgPosition[id];
        this.src = imgGame[clickedImg];
        attempt=1;
        previousClick=id;
        document.getElementById("moves").innerHTML = 1 + moves++;
        if (moves===1) {
            countDown();
        }
        return;
    }
    if (attempt===1) {
        if (id !== previousClick) {
            let clickedImg = imgPosition[id];
            this.src = imgGame[clickedImg];

            if (imgPosition[id] !== imgPosition[previousClick]) {
                setTimeout(function() {
                    document.getElementById(previousClick).src = 'images/cg.png';
                    document.getElementById(id).src = 'images/cg.png';
                }, 200);
                imgStatus[previousClick]++;
                imgStatus[id]++;
            } else {
                imgStatus[previousClick] = -1;
                imgStatus[id] = -1;
                document.getElementById('score').innerHTML=1+score++;
                if (score === 8) {
                    alert("Chúc mừng, bạn đã chiến thắng");
                    leaderBoard();
                    timeOut=1;
                }
            }
            attempt = 0;
        } else {
            return;
        }
    }
}
function countDown() {  //Đếm ngược
    let timeout2=30;
    timeOut--;
    if (timeOut>0) {
        document.getElementById('countDown').innerHTML=timeOut;
        setTimeout("countDown()",1000);
    } else {
        document.getElementById('countDown').innerHTML="Time Out";
        alert("Time out");
        alert("Try again");
        timeOut=timeout2;
        moves=0;
        score=0;
        document.getElementById('countDown').innerHTML=timeOut;
        startGame();
    }
}
function leaderBoard() {
    let winnerName=prompt("Let us know your Name:");
    let winnerScore=timeOut+100-moves;
    topPlayer.push([winnerName,winnerScore]);
    for (let i = 1; i < topPlayer.length; i++) {
        if (topPlayer[i][1]>topPlayer[i-1][1]) {
            flag=topPlayer[i-1];
            topPlayer[i-1]=topPlayer[i];
            topPlayer[i]=flag;
            i=0;
        }
    }
}
// function showLeaderBoard() {
//     let a=document.getElementById()
// }


