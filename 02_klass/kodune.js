/*
Omaloodud klass (Tegime Vektori ja Resistori)

Rohkem kui üks käsklus, mis sellega teha saab (funktsioone > 2)

Kasutusnäited

Mitmesugused sisendandmed

Massiiv klassi objektidest

Massiivi kasutusnäide
*/
var Riik = /** @class */ (function () {
    function Riik(nimi, rahvaarv, pindala, riigikeeled, EL) {
        this.nimi = nimi;
        this.rahvaarv = rahvaarv;
        this.pindala = pindala;
        this.riigikeeled = riigikeeled;
        this.EL = EL;
    }
    Riik.prototype.rahvastikuTihedus = function () {
        return Number((this.rahvaarv / this.pindala).toFixed(2));
    };
    Riik.prototype.onEL = function () {
        return this.EL;
    };
    Riik.prototype.mituRiigikeelt = function () {
        return this.riigikeeled.length;
    };
    Riik.prototype.misRiigikeeled = function () {
        return this.riigikeeled;
    };
    return Riik;
}());
var riigid = [
    new Riik("Eesti", 1369285, 45339, ["eesti"], true),
    new Riik("Soome", 5608218, 338478, ["soome", "rootsi"], true),
    new Riik("Rootsi", 10582576, 447425, ["rootsi"], true),
    new Riik("Norra", 5550203, 385207, ["norra"], false),
    new Riik("India", 1326093247, 3287263, ["hindi", "inglise", "assamese", "bengali", "bodo", "dogri", "gujarati", "kannada", "kashmiri", "konkani", "maithili", "malayalam", "manipuri", "marathi", "nepali", "oriya", "punjabi", "sanskrit", "santali", "sindhi", "tamil", "telugu", "urdu"], false)
];
var ELRiigid = [];
for (var _i = 0, riigid_1 = riigid; _i < riigid_1.length; _i++) {
    var riik = riigid_1[_i];
    if (riik.onEL()) {
        ELRiigid.push(riik);
    }
}
var sorteeritud = false;
while (sorteeritud == false) {
    sorteeritud = true;
    for (var i = 0; i < riigid.length - 1; i++) {
        if (riigid[i].rahvastikuTihedus() < riigid[i + 1].rahvastikuTihedus()) {
            var temp = riigid[i];
            riigid[i] = riigid[i + 1];
            riigid[i + 1] = temp;
            sorteeritud = false;
        }
    }
}
var tulbad = ["Riik", "Rahvaarv", "Pindala", "Tihedus(in/km^2)", "EL liige"];
var tulbaLaius = 16;
console.log("=".repeat(tulbad.length * tulbaLaius));
console.log(tulbad.map(function (tulp) { return tulp.padEnd(tulbaLaius); }).join("|"));
console.log("_".repeat(tulbad.length * tulbaLaius));
for (var i = 0; i < riigid.length; i++) {
    var rida = "";
    rida += riigid[i].nimi.padEnd(tulbaLaius) + "|" + "".concat(riigid[i].rahvaarv).padEnd(tulbaLaius) + "|" + "".concat(riigid[i].pindala).padEnd(tulbaLaius) + "|" + "".concat(riigid[i].rahvastikuTihedus()).padEnd(tulbaLaius) + "|" + "".concat(riigid[i].EL).padEnd(tulbaLaius);
    console.log(rida);
}
console.log("=".repeat(tulbad.length * tulbaLaius));
/*
console.log(`Riigid ja nende rahvastikutihedused kahanemise järjekorras: ${riigid.map(riik => "\n" + riik.nimi + " " + riik.rahvastikuTihedus() + " in/km^2")}`);
console.log(`EL riigid: ${ELRiigid.map(riik => riik.nimi)}`);
console.log(`Mitme keelega riigid: ${riigid.filter(riik => riik.mituRiigikeelt() > 1).map(riik => riik.nimi)}`);
console.log("Riigid ja nende keeled");
riigid.forEach(riik => console.log(riik.nimi + ": " + riik.misRiigikeeled().join(", ")));
*/ 
