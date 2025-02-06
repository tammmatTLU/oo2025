import { crc32 } from "zlib";

class Vektor{
    constructor(protected x: number, protected y: number){}
    kuva():void{
        console.log(this.x, this.y);
    }
    pikkus():number{
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    liitmine(liidetav:Vektor):Vektor{
        return new Vektor(this.x + liidetav.x, this.y + liidetav.y);
    }
    korrutamineArvuga(kordaja:number):Vektor{
        return new Vektor(this.x * kordaja, this.y * kordaja);
    }
    skalaarkorrutisKoordinaatidega(kordaja:Vektor):void{
        console.log(this.x * kordaja.x + this.y * kordaja.y);
    }
}

let v1:Vektor = new Vektor(0, 5);
let v2:Vektor = new Vektor(5, 0);
let vektorid:Vektor[] = [
    new Vektor (10, 5),
    new Vektor (5, 10),
    new Vektor (15, 5),
    new Vektor (5, 15)
];
let summa:Vektor = new Vektor(0,0);
for(let vektor of vektorid) {
    summa = summa.liitmine(vektor);
}
summa.kuva();
//v1.kuva();
//v2.kuva();
//console.log(v1.pikkus());
//v1.liitmine(v2).kuva();
//v1.korrutamineArvuga(2).kuva();
//v1.skalaarkorrutisKoordinaatidega(v2);
