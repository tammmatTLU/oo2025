//BMI kalkulaator
function BMI1(cm:number, kg:number):number {
    return kg / ((cm / 100) * (cm / 100));
}

function BMI2(cm:number, kg:number):number {
    return 1.3 * kg / Math.pow(cm / 100, 2.5);
}

//console.log(BMI(175, 73));
let massid:number[] = [65, 73, 75, 80];
let pikkused:number[] = [160, 170, 180, 190];

let indeksid_1:number[] = massid.map(mass => BMI1(175, mass));
let indeksid_2:number[] = massid.map(mass => BMI2(175, mass));
//console.log(indeksid_1);

// 1,3 * kehakaal / pikkus^2,5
// Looge teine vlem kehamassiindeksi arvutamiseks
//aitab käsklus Math.pow
//Arvutage kehamassiindeks mitmesuguste masside ja pikkuste juures ja näidake kuidas väärtused erinevad.

let sama_pikkus:number[][] = [];
for(let i = 0; i < massid.length; i++) {
    sama_pikkus.push([massid[i], indeksid_1[i], indeksid_2[i]]);
}

let sama_mass:number[][] = [];
for(let pikkus = 180; pikkus < 190; pikkus += 2) {
    sama_mass.push([pikkus, BMI1(pikkus, 75), BMI2(pikkus, 75)]);
}
console.log(sama_pikkus);
console.log(sama_mass);