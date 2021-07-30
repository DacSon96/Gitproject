class SwitchButton {
    status;
    lamp;
    constructor(status,lamp) {
        this.status = status;
        this.lamp=lamp;
    }
    connecToLamp(newLamp) {
        this.lamp=newLamp;
    }
    switchOff() {
        this.lamp.turnOff();
    }
    switchOn() {
        this.lamp.turnOn();
    }
}
let ct1=new SwitchButton(true, denhoc1);
let ct2=new SwitchButton(true, denhoc1);