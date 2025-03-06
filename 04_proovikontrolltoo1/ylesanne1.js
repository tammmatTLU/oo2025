/*
Hulknurk

* Koosta klass, milles on üks massiiv kolmnurga x-koordinaatide hoidmiseks ning teine massiiv y-koordinaatide hoidmiseks. Koosta klassist kaks eksemplari, määra algväärtused ning trüki andmed välja.

* Lisa klassile käsklus punkti koordinaadipaari lisamiseks. Käsklusena väljasta tekkiva hulknurga ümbermõõt. Kuva tekkinud kujund ekraanile.

* Lisa klassile käsklused kogu kujundi nihutamiseks ning suurendamiseks/vähendamiseks. Võimalda küsida punktide uued asukohad ning külgede pikkused, näita kujundit ekraanil.
*/
var Hulknurk = /** @class */ (function () {
    function Hulknurk(ctx, x, y) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;
    }
    Hulknurk.prototype.kuva = function () {
        console.log("Hulknurga nurkade koordinaadid on:");
        for (var i = 0; i < this.x.length; i++) {
            console.log("(".concat(this.x[i], ", ").concat(this.y[i], ")"));
        }
    };
    Hulknurk.prototype.lisaPunkt = function (x, y) {
        this.x.push(x);
        this.y.push(y);
    };
    Hulknurk.prototype.draw = function () {
        this.ctx.beginPath();
        this.ctx.moveTo(this.x[0], this.y[0]);
        for (var i = 1; i < this.x.length; i++) {
            this.ctx.lineTo(this.x[i], this.y[i]);
        }
        this.ctx.lineTo(this.x[0], this.y[0]);
        this.ctx.stroke();
    };
    Hulknurk.prototype.clear = function () {
        var minX = Math.min.apply(Math, this.x) - 1;
        var minY = Math.min.apply(Math, this.y) - 1;
        var maxX = Math.max.apply(Math, this.x) + 1;
        var maxY = Math.max.apply(Math, this.y) + 1;
        this.ctx.clearRect(minX, minY, maxX - minX, maxY - minY);
    };
    Hulknurk.prototype.ymbermoot = function () {
        var ymbermoot = 0;
        for (var i = 0; i < this.x.length - 1; i++) {
            ymbermoot += Math.sqrt(Math.pow(this.x[i + 1] - this.x[i], 2) + Math.pow(this.y[i + 1] - this.y[i], 2));
        }
        ymbermoot += Math.sqrt(Math.pow(this.x[0] - this.x[this.x.length - 1], 2) + Math.pow(this.y[0] - this.y[this.y.length - 1], 2));
        return ymbermoot;
    };
    Hulknurk.prototype.kylgedePikkused = function () {
        var kylgedePikkused = [];
        for (var i = 0; i < this.x.length - 1; i++) {
            kylgedePikkused.push(Math.sqrt(Math.pow(this.x[i + 1] - this.x[i], 2) + Math.pow(this.y[i + 1] - this.y[i], 2)));
        }
        kylgedePikkused.push(Math.sqrt(Math.pow(this.x[0] - this.x[this.x.length - 1], 2) + Math.pow(this.y[0] - this.y[this.y.length - 1], 2)));
        return kylgedePikkused;
    };
    Hulknurk.prototype.punktideAsukohad = function () {
        var punktideAsukohad = [];
        for (var i = 0; i < this.x.length; i++) {
            punktideAsukohad.push(["(".concat(this.x[i], "; ").concat(this.y[i], ")")]);
        }
        return punktideAsukohad;
    };
    Hulknurk.prototype.nihuta = function (niheX, niheY) {
        this.clear();
        for (var i = 0; i < this.x.length; i++) {
            this.x[i] += niheX;
            this.y[i] += niheY;
        }
        this.draw();
    };
    Hulknurk.prototype.suurendaVahenda = function (kordaja) {
        this.clear();
        var niheX = this.x[0] - this.x[0] * kordaja;
        var niheY = this.y[0] - this.y[0] * kordaja;
        for (var i = 0; i < this.x.length; i++) {
            this.x[i] *= kordaja;
            this.y[i] *= kordaja;
            this.x[i] += niheX;
            this.y[i] += niheY;
        }
        this.draw();
    };
    return Hulknurk;
}());
