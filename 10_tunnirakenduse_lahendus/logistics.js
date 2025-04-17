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
var LogisticsUnit = /** @class */ (function () {
    function LogisticsUnit() {
    }
    return LogisticsUnit;
}());
var Cargo = /** @class */ (function (_super) {
    __extends(Cargo, _super);
    function Cargo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cargo.prototype.getInfo = function () {
        return this.unit;
    };
    Cargo.prototype.getAmount = function () {
        return this.amount;
    };
    return Cargo;
}(LogisticsUnit));
var Liquid = /** @class */ (function (_super) {
    __extends(Liquid, _super);
    function Liquid(amount) {
        var _this = _super.call(this) || this;
        _this.unit = "l";
        _this.amount = amount;
        return _this;
    }
    return Liquid;
}(Cargo));
var Solid = /** @class */ (function (_super) {
    __extends(Solid, _super);
    function Solid(amount) {
        var _this = _super.call(this) || this;
        _this.unit = "kg";
        _this.amount = amount;
        return _this;
    }
    return Solid;
}(Cargo));
var StorageFacility = /** @class */ (function (_super) {
    __extends(StorageFacility, _super);
    function StorageFacility() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StorageFacility;
}(LogisticsUnit));
var Warehouse = /** @class */ (function (_super) {
    __extends(Warehouse, _super);
    function Warehouse(name, maxCapacity) {
        var _this = _super.call(this) || this;
        _this.currentCapacity = 0;
        _this.type = "Warehouse";
        _this.unit = "kg";
        _this.maxCapacity = maxCapacity;
        _this.name = name;
        return _this;
    }
    Warehouse.prototype.getInfo = function () {
        return "\nName:".concat(this.name, "\nAmount:").concat(this.currentCapacity).concat(this.unit);
    };
    Warehouse.prototype.addCargo = function (cargo) {
        if (this.currentCapacity + cargo.getAmount() <= this.maxCapacity) {
            this.currentCapacity += cargo.getAmount();
        }
        else {
            throw new Error("Adding ".concat(cargo.getAmount()).concat(this.unit, " would exceed maximum capacity!"));
        }
    };
    Warehouse.prototype.removeCargo = function (amount) {
        if (this.currentCapacity - amount >= 0) {
            this.currentCapacity -= amount;
        }
        else {
            throw new Error("Not enough cargo to remove ".concat(amount).concat(this.unit, "! Currently stored amount is ").concat(this.currentCapacity).concat(this.unit, "!"));
        }
    };
    return Warehouse;
}(StorageFacility));
var LiquidContainer = /** @class */ (function (_super) {
    __extends(LiquidContainer, _super);
    function LiquidContainer(name, maxCapacity) {
        var _this = _super.call(this) || this;
        _this.currentCapacity = 0;
        _this.type = "Liquid Container";
        _this.unit = "l";
        _this.maxCapacity = maxCapacity;
        _this.name = name;
        return _this;
    }
    LiquidContainer.prototype.getInfo = function () {
        return "\nName:".concat(this.name, "\nAmount:").concat(this.currentCapacity).concat(this.unit);
    };
    LiquidContainer.prototype.addCargo = function (cargo) {
        if (this.currentCapacity + cargo.getAmount() <= this.maxCapacity) {
            this.currentCapacity += cargo.getAmount();
        }
        else {
            throw new Error("Adding ".concat(cargo.getAmount()).concat(this.unit, " would exceed maximum capacity!"));
        }
    };
    LiquidContainer.prototype.removeCargo = function (amount) {
        if (this.currentCapacity - amount >= 0) {
            this.currentCapacity -= amount;
        }
        else {
            throw new Error("Not enough cargo to remove ".concat(amount).concat(this.unit, "! Currently stored amount is ").concat(this.currentCapacity).concat(this.unit, "!"));
        }
    };
    return LiquidContainer;
}(StorageFacility));
var WarehouseComplex = /** @class */ (function (_super) {
    __extends(WarehouseComplex, _super);
    function WarehouseComplex() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.storageUnits = [];
        return _this;
    }
    WarehouseComplex.prototype.addWarehouse = function (newWarehouse) {
        this.storageUnits.push(newWarehouse);
    };
    WarehouseComplex.prototype.addLiquidContainer = function (newLiquidContainer) {
        this.storageUnits.push(newLiquidContainer);
    };
    WarehouseComplex.prototype.getInfo = function () {
        var storageSummaries = [];
        for (var _i = 0, _a = this.storageUnits; _i < _a.length; _i++) {
            var storageFacility = _a[_i];
            storageSummaries.push(storageFacility.getInfo());
        }
        return "Laokompleksis on ".concat(this.storageUnits.length, " erinevat hoidlat.\nNende hoidlate laoseisud:").concat(storageSummaries);
    };
    return WarehouseComplex;
}(LogisticsUnit));
var Vehicle = /** @class */ (function (_super) {
    __extends(Vehicle, _super);
    function Vehicle(regNumber, maxCapacity, unit) {
        var _this = _super.call(this) || this;
        _this.avgSpeed = 90;
        _this.regNumber = regNumber;
        _this.maxCapacity = maxCapacity;
        _this.unit = unit;
        return _this;
    }
    Vehicle.prototype.getRegNumber = function () {
        return this.regNumber;
    };
    Vehicle.prototype.getInfo = function () {
        return "Maximum Capacity:".concat(this.maxCapacity).concat(this.unit, "\nAverage speed:").concat(this.avgSpeed);
    };
    return Vehicle;
}(LogisticsUnit));
var Delivery = /** @class */ (function () {
    function Delivery(cargo, source, destination, assignedVehicle) {
        this.cargo = cargo;
        this.source = source;
        this.destination = destination;
        this.assignedVehicle = assignedVehicle;
        this.status = "Pending";
    }
    Delivery.prototype.startDelivery = function () {
        if (this.cargo.unit != this.source.unit) {
            throw new Error("Cargo type does not match source storage type.");
        }
        else if (this.cargo.unit != this.destination.unit) {
            throw new Error("Cargo type does not match destination storage type.");
        }
        else if (this.source.currentCapacity < this.cargo.getAmount()) {
            throw new Error("Not enough cargo at the source to start delivery.");
        }
        this.source.removeCargo(this.cargo.getAmount());
        this.status = "In Transit";
    };
    Delivery.prototype.completeDelivery = function () {
        this.destination.addCargo(this.cargo);
        this.status = "Completed";
    };
    Delivery.prototype.getInfo = function () {
        return "Delivery of ".concat(this.cargo.getAmount()).concat(this.cargo.getInfo(), " from ").concat(this.source.name, " to ").concat(this.destination.name, " using ").concat(this.assignedVehicle.getRegNumber(), ". Status:").concat(this.status);
    };
    Delivery.prototype.getStatus = function () {
        return this.status;
    };
    return Delivery;
}());
var küttepuud = new Solid(10000);
var bensiin = new Liquid(1000);
var ladu1 = new Warehouse("Ladu #1", 20000);
var ladu2 = new Warehouse("Ladu #2", 15000);
var tank1 = new LiquidContainer("Tank #1", 12000);
var tank2 = new LiquidContainer("Tank #2", 24000);
var kastikas = new Vehicle("123EKR", 20000, "kg");
var tankur = new Vehicle("456EKR", 4000, "l");
ladu1.addCargo(küttepuud);
ladu1.addCargo(küttepuud);
tank1.addCargo(bensiin);
tank1.addCargo(bensiin);
var delivery1 = new Delivery(küttepuud, ladu1, ladu2, kastikas);
var delivery2 = new Delivery(bensiin, tank1, tank2, tankur);
console.log(ladu1.getInfo());
console.log(ladu2.getInfo());
console.log(delivery1.getInfo());
delivery1.startDelivery();
console.log(ladu1.getInfo());
console.log(ladu2.getInfo());
console.log(delivery1.getStatus());
delivery1.completeDelivery();
console.log(ladu1.getInfo());
console.log(ladu2.getInfo());
console.log(delivery1.getStatus());
console.log(tank1.getInfo());
console.log(tank2.getInfo());
console.log(delivery2.getInfo());
delivery2.startDelivery();
console.log(tank1.getInfo());
console.log(tank2.getInfo());
console.log(delivery2.getStatus());
delivery2.completeDelivery();
console.log(tank1.getInfo());
console.log(tank2.getInfo());
console.log(delivery2.getStatus());
/*
let kompleks1 = new WarehouseComplex();
kompleks1.addWarehouse(ladu1);
kompleks1.addWarehouse(ladu2);
kompleks1.addLiquidContainer(tank1);

for(let i=0;i<kompleks1.storageUnits.length;i++){
    if(kompleks1.storageUnits[i].type == "Warehouse"){
        kompleks1.storageUnits[i].addCargo(küttepuud);
    } else{
        kompleks1.storageUnits[i].addCargo(bensiin);
    }
}
console.log(kompleks1.getInfo());
ladu1.removeCargo(10000);
console.log(ladu1.getInfo());
*/ 
