/*
Hulknurk

* Koosta klass, milles on üks massiiv kolmnurga x-koordinaatide hoidmiseks ning teine massiiv y-koordinaatide hoidmiseks. Koosta klassist kaks eksemplari, määra algväärtused ning trüki andmed välja.

* Lisa klassile käsklus punkti koordinaadipaari lisamiseks. Käsklusena väljasta tekkiva hulknurga ümbermõõt. Kuva tekkinud kujund ekraanile.

* Lisa klassile käsklused kogu kujundi nihutamiseks ning suurendamiseks/vähendamiseks. Võimalda küsida punktide uued asukohad ning külgede pikkused, näita kujundit ekraanil.
*/
var Hulknurk = /** @class */ (function () {
    function Hulknurk(ctx, x, y) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.draw();
    }
    Hulknurk.prototype.kuva = function () {
        console.log("Hulknurga nurkade koordinaadid on:");
        for (var i = 0; i < this.x.length; i++) {
            console.log("(".concat(this.x[i], ", ").concat(this.y[i], ")"));
        }
    };
    Hulknurk.prototype.lisaPunkt = function (x, y) {
        var ymbermoot = 0;
        this.x.push(x);
        this.y.push(y);
        for (var i = 0; i < this.x.length - 1; i++) {
            ymbermoot += Math.sqrt(Math.pow(this.x[i + 1] - this.x[i], 2) + Math.pow(this.y[i + 1] - this.y[i], 2));
        }
        ymbermoot += Math.sqrt(Math.pow(this.x[0] - this.x[this.x.length - 1], 2) + Math.pow(this.y[0] - this.y[this.y.length - 1], 2));
        return ymbermoot;
    };
    Hulknurk.prototype.draw = function () {
        this.ctx.beginPath();
        this.ctx.moveTo(this.x[0], this.y[0]);
        for (var i = 1; i < this.x.length; i++) {
            this.ctx.lineTo(this.x[i], this.y[i]);
        }
        this.ctx.lineTo(this.x[0], this.y[0]);
        this.ctx;
        this.ctx.stroke();
    };
    return Hulknurk;
}());
var canvas, ctx, hulknurk1, hulknurk2;
window.onload = function () {
    canvas = document.querySelector('#canvas1');
    ctx = canvas.getContext('2d');
    hulknurk1 = new Hulknurk(ctx, [100, 200, 200], [100, 100, 200]);
    hulknurk1.draw();
    hulknurk1.lisaPunkt(150, 150);
    hulknurk1.kuva();
};
