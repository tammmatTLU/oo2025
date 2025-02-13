var Potentsiomeeter = /** @class */ (function () {
    function Potentsiomeeter(nurkMin, nurkMax, rMin, rMax) {
        this.nurkMin = nurkMin;
        this.nurkMax = nurkMax;
        this.rMin = rMin;
        this.rMax = rMax;
        this.nurk = 0;
    }
    Potentsiomeeter.prototype.muudaNurk = function (delta) {
        var uusnurk = this.nurk + delta;
        if (uusnurk > this.nurkMax) {
            uusnurk = this.nurkMax;
            console.log("Nupp j\u00F5udis keeramisega maksimumi! N\u00FC\u00FCd on nurk ".concat(uusnurk));
        }
        else if (uusnurk < this.nurkMin) {
            uusnurk = this.nurkMin;
            console.log("Nupp j\u00F5udis keeramisega miinimumi! N\u00FC\u00FCd on nurk ".concat(uusnurk));
        }
        this.nurk = uusnurk;
    };
    Potentsiomeeter.prototype.getR = function () {
        var nurgaVahemik = this.nurkMax - this.nurkMin;
        var rVahemik = this.rMax - this.rMin;
        return (this.rMin + (this.nurk - this.nurkMin) / nurgaVahemik * rVahemik);
    };
    return Potentsiomeeter;
}());
var p1 = new Potentsiomeeter(-120, 120, 100, 500);
p1.muudaNurk(80);
console.log(p1);
p1.muudaNurk(30);
console.log(p1);
console.log(p1.getR());
