"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirConditioner = exports.Fan = exports.Appliance = void 0;
class Appliance {
}
exports.Appliance = Appliance;
class Fan extends Appliance {
    turnOn() {
        console.log("Fan is on");
    }
}
exports.Fan = Fan;
class AirConditioner extends Appliance {
    turnOn() {
        console.log("AirConditioner is on");
    }
}
exports.AirConditioner = AirConditioner;
