class TiVi{
    constructor(channel,vol,status) {
        this.channel=channel;
        this.vol=vol;
        this.status=status;
    }
    turnOnTv(){
        this.status=true;
        return status;
    }
    changeChannel(channel) {
        return this.channel=channel;
    }
    changeVol(vol) {
        this.vol+=vol;
        return this.vol;
    }
}
let newTV=new TiVi(3,20,true);

