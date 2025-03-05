/* 
Omaloodud klass (Tegime Vektori ja Resistori)

Rohkem kui üks käsklus, mis sellega teha saab (funktsioone > 2)

Kasutusnäited

Mitmesugused sisendandmed

Massiiv klassi objektidest

Massiivi kasutusnäide
*/

class Riik {
    nimi: string;
    rahvaarv: number;
    pindala: number;
    riigikeeled: string[];
    EL: boolean;
    constructor(nimi: string, rahvaarv: number, pindala: number, riigikeeled: string[], EL: boolean) {
        this.nimi = nimi;
        this.rahvaarv = rahvaarv;
        this.pindala = pindala;
        this.riigikeeled = riigikeeled;
        this.EL = EL;
    }
    rahvastikuTihedus(): number {
        return Number((this.rahvaarv / this.pindala).toFixed(2));
    }
    onEL(): boolean {
        return this.EL;
    }
    mituRiigikeelt(): number {
        return this.riigikeeled.length;
    }
    misRiigikeeled(): string[] {
        return this.riigikeeled;
    }
}

let riigid: Riik[] = [
    new Riik("Eesti", 1369285, 45339, ["eesti"], true),
    new Riik("Soome", 5608218, 338478, ["soome", "rootsi"], true),
    new Riik("Rootsi", 10582576, 447425, ["rootsi"], true),
    new Riik("Norra", 5550203, 385207, ["norra"], false),
    new Riik("India", 1326093247, 3287263, ["hindi", "inglise", "assamese", "bengali", "bodo", "dogri", "gujarati",  "kannada", "kashmiri", "konkani", "maithili", "malayalam", "manipuri", "marathi", "nepali", "oriya", "punjabi", "sanskrit", "santali", "sindhi", "tamil", "telugu", "urdu"], false)
]

let ELRiigid: Riik[] = [];
for(let riik of riigid){
    if(riik.onEL()){
        ELRiigid.push(riik);
    }
}

let sorteeritud: boolean = false;
while(sorteeritud == false){
    sorteeritud = true;
    for(let i = 0; i < riigid.length - 1; i++){
        if(riigid[i].rahvastikuTihedus() < riigid[i + 1].rahvastikuTihedus()){
            let temp = riigid[i];
            riigid[i] = riigid[i + 1];
            riigid[i + 1] = temp;
            sorteeritud = false;
        }
    }
}

let tulbad: string[] = ["Riik", "Rahvaarv", "Pindala", "Tihedus(in/km^2)", "EL liige"];
let tulbaLaius: number = 16;
console.log("=".repeat(tulbad.length * tulbaLaius));
console.log(tulbad.map(tulp => tulp.padEnd(tulbaLaius)).join("|"));
console.log("_".repeat(tulbad.length * tulbaLaius));
for(let i = 0; i < riigid.length; i++){
    let rida: string = "";
    rida += riigid[i].nimi.padEnd(tulbaLaius) + "|" + `${riigid[i].rahvaarv}`.padEnd(tulbaLaius) + "|" + `${riigid[i].pindala}`.padEnd(tulbaLaius) + "|" + `${riigid[i].rahvastikuTihedus()}`.padEnd(tulbaLaius) + "|" + `${riigid[i].EL}`.padEnd(tulbaLaius);
    console.log(rida);
}
console.log("=".repeat(tulbad.length * tulbaLaius));

console.log(`Riigid ja nende rahvastikutihedused kahanemise järjekorras: ${riigid.map(riik => "\n" + riik.nimi + " " + riik.rahvastikuTihedus() + " in/km^2")}`);
console.log("=".repeat(tulbad.length * tulbaLaius));
console.log(`EL riigid: ${ELRiigid.map(riik => riik.nimi)}`);
console.log("=".repeat(tulbad.length * tulbaLaius));
console.log(`Mitme keelega riigid: ${riigid.filter(riik => riik.mituRiigikeelt() > 1).map(riik => riik.nimi)}`);
console.log("=".repeat(tulbad.length * tulbaLaius));
console.log("Riigid ja nende keeled");
riigid.forEach(riik => console.log(riik.nimi + ": " + riik.misRiigikeeled().join(", ")));
