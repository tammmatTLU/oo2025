var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Abstraktne sõiduk
var AbstractVehicle = /** @class */ (function () {
    function AbstractVehicle() {
    }
    AbstractVehicle.prototype.getFuelUsed = function (distanceKm) {
        return (distanceKm / 100) * this.getFuelConsumption();
    };
    return AbstractVehicle;
}());
// Tavaline auto
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(consumption) {
        var _this = _super.call(this) || this;
        _this.consumption = consumption;
        return _this;
    }
    Car.prototype.getFuelConsumption = function () {
        return this.consumption;
    };
    return Car;
}(AbstractVehicle));
// Buss
var Bus = /** @class */ (function (_super) {
    __extends(Bus, _super);
    function Bus(passengers) {
        var _this = _super.call(this) || this;
        _this.passengers = passengers;
        return _this;
    }
    Bus.prototype.getFuelConsumption = function () {
        return 20 + this.passengers * 0.1; // baas + iga reisija kulu
    };
    return Bus;
}(AbstractVehicle));
// Elektriauto
var ElectricCar = /** @class */ (function (_super) {
    __extends(ElectricCar, _super);
    function ElectricCar(efficiency) {
        var _this = _super.call(this) || this;
        _this.efficiency = efficiency;
        return _this;
    }
    ElectricCar.prototype.getFuelConsumption = function () {
        return this.efficiency / 9; // kWh/100km → l/100km   "liitri ekvivalent" 
    };
    return ElectricCar;
}(AbstractVehicle));
// Abstraktne logistikakeskus
var LogisticsCenter = /** @class */ (function (_super) {
    __extends(LogisticsCenter, _super);
    function LogisticsCenter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.vehicles = [];
        return _this;
    }
    LogisticsCenter.prototype.addVehicle = function (vehicle) {
        this.vehicles.push(vehicle);
    };
    return LogisticsCenter;
}(AbstractVehicle));
// Keskmise kulu arvestus (nt taksofirma)
var VehicleFleet = /** @class */ (function (_super) {
    __extends(VehicleFleet, _super);
    function VehicleFleet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VehicleFleet.prototype.getFuelConsumption = function () {
        if (this.vehicles.length === 0)
            return 0;
        var total = 0;
        for (var _i = 0, _a = this.vehicles; _i < _a.length; _i++) {
            var v = _a[_i];
            total += v.getFuelConsumption();
        }
        return total / this.vehicles.length;
    };
    return VehicleFleet;
}(LogisticsCenter));
var taxiFleet = new VehicleFleet();
taxiFleet.addVehicle(new Car(8));
taxiFleet.addVehicle(new ElectricCar(13));
taxiFleet.addVehicle(new Bus(40));
console.log("Masinate kütusekulude keskmine: " + Math.floor(10 * taxiFleet.getFuelConsumption()) / 10 + "l/100km");
console.log("Masinate kogu kütusekulu 300km kohta: " + Math.floor(10 * taxiFleet.getFuelUsed(300)) / 10 + "l");
