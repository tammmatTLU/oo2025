"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vektor = /** @class */ (function () {
    function Vektor(x, y) {
        this.x = x;
        this.y = y;
    }
    Vektor.prototype.kuva = function () {
        console.log(this.x, this.y);
    };
    Vektor.prototype.pikkus = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Vektor.prototype.liitmine = function (liidetav) {
        return new Vektor(this.x + liidetav.x, this.y + liidetav.y);
    };
    Vektor.prototype.korrutamineArvuga = function (kordaja) {
        return new Vektor(this.x * kordaja, this.y * kordaja);
    };
    Vektor.prototype.skalaarkorrutisKoordinaatidega = function (kordaja) {
        console.log(this.x * kordaja.x + this.y * kordaja.y);
    };
    return Vektor;
}());
var v1 = new Vektor(0, 5);
var v2 = new Vektor(5, 0);
var vektorid = [
    new Vektor(10, 5),
    new Vektor(5, 10),
    new Vektor(15, 5),
    new Vektor(5, 15)
];
var summa = new Vektor(0, 0);
for (var _i = 0, vektorid_1 = vektorid; _i < vektorid_1.length; _i++) {
    var vektor = vektorid_1[_i];
    summa = summa.liitmine(vektor);
}
summa.kuva();
//v1.kuva();
//v2.kuva();
//console.log(v1.pikkus());
//v1.liitmine(v2).kuva();
//v1.korrutamineArvuga(2).kuva();
//v1.skalaarkorrutisKoordinaatidega(v2);
