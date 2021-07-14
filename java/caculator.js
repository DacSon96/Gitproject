function result(){
    let pt1 = parseInt(document.getElementById('pt1').value);
    let pt2 = parseInt(document.getElementById('pt2').value);
    let pheptinh = document.getElementById('pheptinh').value;
    switch (pheptinh) {
        case '+':
            document.getElementById('result').innerHTML = pt1 + pt2;
            break;
        case '-':
            document.getElementById('result').innerHTML = pt1 - pt2;
            break;
        case '*':
            document.getElementById('result').innerHTML = pt1 * pt2;
            break;
        case '/':
            document.getElementById('result').innerHTML = pt1 / pt2;
            break;
    }
}
