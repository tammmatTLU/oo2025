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
var AbstractResistor = /** @class */ (function () {
    function AbstractResistor() {
    }
    AbstractResistor.prototype.getCurrent = function (u) {
        return u / this.getResistance();
    };
    return AbstractResistor;
}());
var Resistor = /** @class */ (function (_super) {
    __extends(Resistor, _super);
    function Resistor(r) {
        var _this = _super.call(this) || this;
        _this.r = 0;
        _this.r = r;
        return _this;
    }
    Resistor.prototype.getResistance = function () {
        return this.r;
    };
    return Resistor;
}(AbstractResistor));
var Switch = /** @class */ (function (_super) {
    __extends(Switch, _super);
    function Switch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.on = false;
        return _this;
    }
    Switch.prototype.toggleState = function (state) {
        this.on = state ? true : false;
    };
    Switch.prototype.getResistance = function () {
        return this.on ? 0 : 440;
    };
    Switch.prototype.getCurrent = function (u) {
        if (u > 0 && this.on) {
            throw new Error("Short Circuit!");
        }
        else {
            return _super.prototype.getCurrent.call(this, u);
        }
    };
    return Switch;
}(AbstractResistor));
var MultipleConnection = /** @class */ (function (_super) {
    __extends(MultipleConnection, _super);
    function MultipleConnection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resistors = [];
        return _this;
    }
    MultipleConnection.prototype.addResistor = function (r) {
        this.resistors.push(r);
    };
    MultipleConnection.prototype.addSwitch = function (s) {
        this.resistors.push(s);
    };
    return MultipleConnection;
}(AbstractResistor));
var ParallelConnection = /** @class */ (function (_super) {
    __extends(ParallelConnection, _super);
    function ParallelConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ParallelConnection.prototype.getResistance = function () {
        var inverseSum = 0;
        for (var _i = 0, _a = this.resistors; _i < _a.length; _i++) {
            var element = _a[_i];
            inverseSum += 1 / element.getResistance();
        }
        return 1 / inverseSum;
    };
    ParallelConnection.prototype.getCurrent = function (u) {
        return u / this.getResistance();
    };
    return ParallelConnection;
}(MultipleConnection));
var SeriesConnection = /** @class */ (function (_super) {
    __extends(SeriesConnection, _super);
    function SeriesConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeriesConnection.prototype.getResistance = function () {
        var totalResistance = 0;
        for (var _i = 0, _a = this.resistors; _i < _a.length; _i++) {
            var element = _a[_i];
            totalResistance += element.getResistance();
        }
        return totalResistance;
    };
    SeriesConnection.prototype.getCurrent = function (u) {
        return u / this.getResistance();
    };
    return SeriesConnection;
}(MultipleConnection));
var sc1 = new SeriesConnection();
sc1.addResistor(new Resistor(110));
sc1.addResistor(new Resistor(220));
var p1 = new ParallelConnection();
p1.addResistor(new Resistor(330));
p1.addResistor(sc1);
console.log(p1.getResistance());
/*
let p:ParallelConnection = new ParallelConnection();
p.addResistor(new Resistor(220));
p.addResistor(new Resistor(340));
p.addResistor(new Resistor(440));
p.addSwitch(new Switch());
//console.log(p.getResistance());
//console.log(p.getCurrent(5));

let p2:ParallelConnection = new ParallelConnection();
p2.addResistor(new Resistor(110));
p2.addResistor(new Resistor(110));
//console.log(p2.getResistance());
//console.log(p2.getCurrent(5));

let sc1:SeriesConnection= new SeriesConnection();
sc1.addResistor(new Resistor(110));
sc1.addResistor(new Resistor(220));
//console.log("Kogutakistus: " + sc1.getResistance());
let sc2:SeriesConnection= new SeriesConnection();
sc2.addResistor(new Resistor(440));
sc2.addResistor(new Resistor(220));

let sc3:SeriesConnection = new SeriesConnection();
sc3.addResistor(sc1);
sc3.addResistor(sc2);
console.log(sc3);
console.log(sc3.getResistance());
*/
//console.log("Kogutakistus: " + sc2.getResistance());
//console.log("Voolutugevus: " + sc1.getCurrent(5));
//let Circuit: AbstractResistor[] = [new Resistor(100), new Switch(), new Resistor(200), new Switch()];
/*for(let element of Circuit){
    console.log(element.getResistance());
}

function sumResistances(array: AbstractResistor[]):number{
    let resistanceSum:number = 0;
    for(let element of array){
        resistanceSum += element.getResistance();
    }
    return resistanceSum;
}
console.log(sumResistances(Circuit));
*/
/*
let r1:AbstractResistor = new Resistor(220);
console.log(r1.getResistance());
let s1 = new Switch();
console.log(s1.getResistance())
console.log(s1.getCurrent(5))
s1.toggleState(true);
console.log(s1.getResistance())
console.log(s1.getCurrent(5))
*/ 
