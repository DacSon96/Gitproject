class ElectricLamp {
    status;
    constructor(status) {
        this.status = status;
    }
    turnOff() {
        return this.status=false;
    }
    turnOn() {
        return this.status=true;
    }
}
let denhoc1=new ElectricLamp(false);
let denhoc2=new ElectricLamp(false);
