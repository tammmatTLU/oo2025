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
        var ymbermoot = 0;
        this.x.push(x);
        this.y.push(y);
        for (var i = 0; i < this.x.length; i++) {
            ymbermoot += Math.sqrt(Math.pow(this.x[i + 1] - this.x[i], 2) + Math.pow(this.y[i + 1] - this.y[i], 2));
        }
        return ymbermoot;
    };
    return Hulknurk;
}());
var hulknurk1 = new Hulknurk([0, 1, 1, 0], [0, 0, 1, 1]);
var hulknurk2 = new Hulknurk([2, 4, 4, 2], [0, 0, 5, 5]);
hulknurk1.lisaPunkt(3, 4);
