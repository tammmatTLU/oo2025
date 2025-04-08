/*
Hulknurk

* Koosta klass, milles on üks massiiv kolmnurga x-koordinaatide hoidmiseks ning teine massiiv y-koordinaatide hoidmiseks. Koosta klassist kaks eksemplari, määra algväärtused ning trüki andmed välja.

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
}

let hn1 = new Hulknurk([2, 4, 6], [2, 4, 2]);
let hn2 = new Hulknurk([2, 4, 4, 2], [2, 2, 4, 4]);

hn1.kuva();
hn2.kuva();

*/
/*
* Lisa klassile käsklus punkti koordinaadipaari lisamiseks. Käsklusena väljasta tekkiva hulknurga ümbermõõt. Kuva tekkinud kujund ekraanile.
*/
/*
class Hulknurk {
    x: number[];
    y: number[];
    ctx: CanvasRenderingContext2D;
    constructor(ctx: CanvasRenderingContext2D, x: number[], y: number[]){
        this.x = x;
        this.y = y;
        this.ctx = ctx;
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

    draw(): void {
        this.ctx.beginPath();
        this.ctx.moveTo(this.x[0], this.y[0]);
        for(let i = 1; i<this.x.length; i++){
            this.ctx.lineTo(this.x[i], this.y[i]);
        }
        this.ctx.lineTo(this.x[0], this.y[0]);
        this.ctx.closePath();
        this.ctx.stroke();
    }
    clear(): void {
        let minX: number = Math.min(...this.x) - 1;
        let minY: number = Math.min(...this.y) - 1;
        let maxX: number = Math.max(...this.x) + 1;
        let maxY: number = Math.max(...this.y) + 1;

        this.ctx.clearRect(minX, minY, maxX - minX, maxY - minY);
    }

    ymbermoot(): number {
        let ymbermoot = 0;
        for(let i = 0; i < this.x.length - 1; i++){
            ymbermoot+= Math.sqrt(Math.pow(this.x[i + 1] - this.x[i], 2) + Math.pow(this.y[i + 1] - this.y[i], 2));
        }
        ymbermoot+= Math.sqrt(Math.pow(this.x[0] - this.x[this.x.length - 1], 2) + Math.pow(this.y[0] - this.y[this.y.length - 1], 2));

        return ymbermoot;
    }
}
*/
/*
* Lisa klassile käsklused kogu kujundi nihutamiseks ning suurendamiseks/vähendamiseks. Võimalda küsida punktide uued asukohad ning külgede pikkused, näita kujundit ekraanil.
*/
class Hulknurk {
    x: number[];
    y: number[];
    ctx: CanvasRenderingContext2D;
    constructor(ctx: CanvasRenderingContext2D, x: number[], y: number[]){
        this.x = x;
        this.y = y;
        this.ctx = ctx;
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

    draw(): void {
        this.ctx.beginPath();
        this.ctx.moveTo(this.x[0], this.y[0]);
        for(let i = 1; i<this.x.length; i++){
            this.ctx.lineTo(this.x[i], this.y[i]);
        }
        this.ctx.lineTo(this.x[0], this.y[0]);
        this.ctx.closePath();
        this.ctx.stroke();
    }
    clear(): void {
        let minX: number = Math.min(...this.x) - 1;
        let minY: number = Math.min(...this.y) - 1;
        let maxX: number = Math.max(...this.x) + 1;
        let maxY: number = Math.max(...this.y) + 1;

        this.ctx.clearRect(minX, minY, maxX - minX, maxY - minY);
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

    nihuta(niheX: number, niheY: number): void{
        this.clear();
        for(let i = 0; i < this.x.length; i++){
            this.x[i] += niheX;
            this.y[i] += niheY;
        }
        this.draw();
    }

    suurendaVahenda(kordaja: number): void{
        this.clear();
        let niheX: number = this.x[0] - this.x[0] * kordaja;
        let niheY: number = this.y[0] - this.y[0] * kordaja;
        for(let i = 0; i < this.x.length; i++){
            this.x[i] *= kordaja;
            this.y[i] *= kordaja;
            this.x[i] += niheX;
            this.y[i] += niheY;
        }
        this.draw();
    }
}
