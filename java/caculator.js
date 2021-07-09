function Cong(){
    let pt1 = document.getElementById('pt1').value;
    let pt2 = document.getElementById('pt2').value;
    let kq = parseInt(pt1) + parseInt(pt2);
    document.getElementById('result').value = kq;
}function Tru(){
    let pt1 = document.getElementById('pt1').value;
    let pt2 = document.getElementById('pt2').value;
    let kq = parseInt(pt1) - parseInt(pt2);
    document.getElementById('result').value = kq;
}function Nhan(){
    let pt1 = document.getElementById('pt1').value;
    let pt2 = document.getElementById('pt2').value;
    let kq = parseInt(pt1) * parseInt(pt2);
    document.getElementById('result').value = kq;
}function Chia(){
    let pt1 = document.getElementById('pt1').value;
    let pt2 = document.getElementById('pt2').value;
    let kq = parseInt(pt1) / parseInt(pt2);
    document.getElementById('result').value = kq;
}