class MoTaTemp {
    constructor(doC) {
        this.doC = doC;
    }
        chuyenDoF() {
            return this.doC * 9 / 5 + 32;
        }
        chuyenDoK() {
            return this.doC + 273.15;
        }
    }
let Temperature=new MoTaTemp(25);
let doF=Temperature.chuyenDoF();
let doK=Temperature.chuyenDoK();
alert("Độ f là: "+doF+" Độ K là: "+doK);


