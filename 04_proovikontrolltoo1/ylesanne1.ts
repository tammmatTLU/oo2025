/*
Hulknurk

* Koosta klass, milles on üks massiiv kolmnurga x-koordinaatide hoidmiseks ning teine massiiv y-koordinaatide hoidmiseks. Koosta klassist kaks eksemplari, määra algväärtused ning trüki andmed välja.

* Lisa klassile käsklus punkti koordinaadipaari lisamiseks. Käsklusena väljasta tekkiva hulknurga ümbermõõt. Kuva tekkinud kujund ekraanile.

* Lisa klassile käsklused kogu kujundi nihutamiseks ning suurendamiseks/vähendamiseks. Võimalda küsida punktide uued asukohad ning külgede pikkused, näita kujundit ekraanil.
*/

class Hulknurk {
    x: number[];
    y: number[];
    constructor(x: number[], y: number[]){
        this.x = x;
        this.y = y;
    }

    kuva():void {
        console.log("Hulknurga nurkade koordinaadid on:")
        for(let i = 0; i<this.x.length; i++){
            console.log(`(${this.x[i]}, ${this.y[i]})`);
        }
    }
    lisaPunkt(x: number, y:number): void {
        this.x.push(x);
        this.y.push(y);
    }

    draw(ctx): void {
        ctx.beginPath();
        ctx.moveTo(this.x[0], this.y[0]);
        for(let i = 1; i<this.x.length; i++){
            ctx.lineTo(this.x[i], this.y[i]);
        }
        ctx.lineTo(this.x[0], this.y[0]);
        ctx.endPath();
        ctx.stroke();
    }

    ymbermoot(): number {
        let ymbermoot = 0;
        for(let i = 0; i < this.x.length - 1; i++){
            ymbermoot+= Math.sqrt(Math.pow(this.x[i + 1] - this.x[i], 2) + Math.pow(this.y[i + 1] - this.y[i], 2));
        }
        ymbermoot+= Math.sqrt(Math.pow(this.x[0] - this.x[this.x.length - 1], 2) + Math.pow(this.y[0] - this.y[this.y.length - 1], 2));

        return ymbermoot;
    }

    kylgedePikkused(): number[] {
        let kylgedePikkused: number[] = [];
        for(let i = 0; i < this.x.length - 1; i++){
            kylgedePikkused.push(Math.sqrt(Math.pow(this.x[i + 1] - this.x[i], 2) + Math.pow(this.y[i + 1] - this.y[i], 2)));
        }
        kylgedePikkused.push(Math.sqrt(Math.pow(this.x[0] - this.x[this.x.length - 1], 2) + Math.pow(this.y[0] - this.y[this.y.length - 1], 2)));
        return kylgedePikkused;
    }

    punktideAsukohad(): string[][] {
        let punktideAsukohad: string[][] = [];
        for(let i = 0; i < this.x.length; i++){
            punktideAsukohad.push([`(${this.x[i]}; ${this.y[i]})`]);
        }
        return punktideAsukohad;
    }

    nihuta(ctx, niheX: number, niheY: number): void{
        for(let i = 0; i < this.x.length; i++){
            this.x[i] += niheX;
            this.y[i] += niheY;
        }
        ctx.clearRect(this.x[0], this.y[0], this.x[this.x.length - 1], this.y[this.y.length - 1]);
        ctx.beginPath();
        ctx.moveTo(this.x[0], this.y[0]);
        for(let i = 1; i<this.x.length; i++){
            ctx.lineTo(this.x[i], this.y[i]);
        }
        ctx.lineTo(this.x[0], this.y[0]);
        ctx.endPath();
        ctx.stroke();
    }

    suurendaVahenda(kordaja: number): void{
        for(let i = 0; i < this.x.length; i++){
            this.x[i] *= kordaja;
            this.y[i] *= kordaja;
        }
    }
}
