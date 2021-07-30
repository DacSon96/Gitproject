class Remote{
    constructor(code,channel,vol) {
        this.code=code;
    }
    remoteChannel(channel) {
        this.code.changeChannel(channel);
    }
    remoteVol(vol) {
        this.code.changeVol(vol);
    }
}
let newRm=new Remote(newTV);
newRm.remoteChannel(7);
newRm.remoteVol(2);


