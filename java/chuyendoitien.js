function chuyendoi() {
    let chuyentu = document.getElementById('chuyentu').value;
    let chuyensang = document.getElementById('chuyensang').value;
    let sotien = document.getElementById('money').value;
    if (chuyentu =="Việt Nam") {
        if (chuyensang =="USD") {
            result = parseInt(sotien) / 23000 + " USD";
        } else {
            result = parseInt(sotien) + " VND";
        }
    }else if (chuyensang =="Việt Nam") {
        result = parseInt(sotien) * 23000 + " VND";
    }
    else {
        result = parseInt(sotien) + " USD";
    }
    document.getElementById('result').value = result;
}

