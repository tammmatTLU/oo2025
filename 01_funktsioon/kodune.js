/*
Omaloodud funktsioon

Igaüks koostab temaatilise spetsiifilise funktsiooni ning demonstreerib selle tööd näitandmete abil.

Arvutus võib olla lihtne, aga lugejatel/kuulajatel võiks käsitletava teema kohta midagi õppida olla.
*/
function formatDateEt(date) {
    var monthNames = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
    var day = date.getDate();
    var month = monthNames[date.getMonth()];
    var year = date.getFullYear();
    return "".concat(day, ". ").concat(month, " ").concat(year);
}
function generateColorCode() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var colorCode = "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
    return colorCode;
}
var date = new Date();
console.log("Tänane kuupäev on: " + formatDateEt(date));
console.log("Juhuslik värvikood: " + generateColorCode());
