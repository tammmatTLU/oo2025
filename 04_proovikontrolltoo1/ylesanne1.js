/*
Hulknurk

* Koosta klass, milles on üks massiiv kolmnurga x-koordinaatide hoidmiseks ning teine massiiv y-koordinaatide hoidmiseks. Koosta klassist kaks eksemplari, määra algväärtused ning trüki andmed välja.

* Lisa klassile käsklus punkti koordinaadipaari lisamiseks. Käsklusena väljasta tekkiva hulknurga ümbermõõt. Kuva tekkinud kujund ekraanile.

* Lisa klassile käsklused kogu kujundi nihutamiseks ning suurendamiseks/vähendamiseks. Võimalda küsida punktide uued asukohad ning külgede pikkused, näita kujundit ekraanil.
*/
var Hulknurk = /** @class */ (function () {
    function Hulknurk(x, y) {
        this.x = x;
        this.y = y;
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
    Hulknurk.prototype.draw = function (ctx) {
        ctx.beginPath();
        ctx.moveTo(this.x[0], this.y[0]);
        for (var i = 1; i < this.x.length; i++) {
            ctx.lineTo(this.x[i], this.y[i]);
        }
        ctx.lineTo(this.x[0], this.y[0]);
        ctx.endPath();
        ctx.stroke();
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
    Hulknurk.prototype.nihuta = function (ctx, niheX, niheY) {
        for (var i = 0; i < this.x.length; i++) {
            this.x[i] += niheX;
            this.y[i] += niheY;
        }
        ctx.clearRect(this.x[0], this.y[0], this.x[this.x.length - 1], this.y[this.y.length - 1]);
        ctx.beginPath();
        ctx.moveTo(this.x[0], this.y[0]);
        for (var i = 1; i < this.x.length; i++) {
            ctx.lineTo(this.x[i], this.y[i]);
        }
        ctx.lineTo(this.x[0], this.y[0]);
        ctx.endPath();
        ctx.stroke();
    };
    Hulknurk.prototype.suurendaVahenda = function (kordaja) {
        for (var i = 0; i < this.x.length; i++) {
            this.x[i] *= kordaja;
            this.y[i] *= kordaja;
        }
    };
    return Hulknurk;
}());
