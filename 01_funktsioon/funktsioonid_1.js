//BMI kalkulaator
function BMI1(cm, kg) {
    return kg / ((cm / 100) * (cm / 100));
}
function BMI2(cm, kg) {
    return 1.3 * kg / Math.pow(cm / 100, 2.5);
}
//console.log(BMI(175, 73));
var massid = [65, 73, 75, 80];
var pikkused = [160, 170, 180, 190];
var indeksid_1 = massid.map(function (mass) { return BMI1(175, mass); });
var indeksid_2 = massid.map(function (mass) { return BMI2(175, mass); });
//console.log(indeksid_1);
// 1,3 * kehakaal / pikkus^2,5
// Looge teine vlem kehamassiindeksi arvutamiseks
//aitab käsklus Math.pow
//Arvutage kehamassiindeks mitmesuguste masside ja pikkuste juures ja näidake kuidas väärtused erinevad.
var sama_pikkus = [];
for (var i = 0; i < massid.length; i++) {
    sama_pikkus.push([massid[i], indeksid_1[i], indeksid_2[i]]);
}
var sama_mass = [];
for (var pikkus = 150; pikkus < 190; pikkus += 2) {
    sama_mass.push([pikkus, BMI1(pikkus, 75), BMI2(pikkus, 75)]);
}
console.log(sama_pikkus);
console.log(sama_mass);
