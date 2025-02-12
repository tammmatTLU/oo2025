/* 
Omaloodud funktsioon

Igaüks koostab temaatilise spetsiifilise funktsiooni ning demonstreerib selle tööd näitandmete abil.

Arvutus võib olla lihtne, aga lugejatel/kuulajatel võiks käsitletava teema kohta midagi õppida olla.
*/ 

function formatDateEt(date:Date):string {
    let monthNames = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
    let day = date.getDate();
    let month = monthNames[date.getMonth()];
    let year = date.getFullYear();
    return `${day}. ${month} ${year}`;
}

function generateColorCode():string {
    let r:number = Math.floor(Math.random() * 256);
    let g:number = Math.floor(Math.random() * 256);
    let b:number = Math.floor(Math.random() * 256);
    let colorCode:string = `rgb(${r}, ${g}, ${b})`;
    return colorCode;
}

let date = new Date();

console.log("Tänane kuupäev on: " + formatDateEt(date));
console.log("Juhuslik värvikood: " + generateColorCode());