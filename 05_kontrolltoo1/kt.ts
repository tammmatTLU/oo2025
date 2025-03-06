/* 
Harmooniline keskmine

* Koosta funktsioon, mille sisendiks on kahe kilomeetripikkuse lõigu läbimise kiirused (km/h), väljundiks nende kahe kilomeetri läbimise keskmine kiirus.

* Funktsioonile antakse ette kilomeetripikkuste lõikude läbimiste keskmised kiirused kogumina (km/h). Väljasta kogu selle tee läbimise keskmine kiirus.

* Koosta klass, millele saab lisada kilomeetripikkuste lõikude keskmisi kiirusi. Kuva joonisel sõiduki asukoht iga minuti järel.

*/
/*function avgOfTwo(speed1: number, speed2: number): number {
    let duration1: number = 1 / speed1;
    let duration2: number = 1 / speed2;
    let avgSpeed: number = 2 / (duration1 + duration2);

    return avgSpeed;
}

console.log(avgOfTwo(30, 60));

function avgOfArray(array: number[]): number{
    let durationSum: number = 0;
    for(let i = 0; i < array.length; i++){
        durationSum += 1 / array[i];
    }
    let average: number = array.length / durationSum;

    return average
}
console.log(avgOfArray([5, 5, 10, 10, 20]));

*/
//console.log(avgOfTwo(20,10));
//console.log(avgOfArray([5, 5, 10, 10, 20]));
class speedGraph{
    speeds: number[];
    ctx: CanvasRenderingContext2D;
    graphStart: number;
    graphLength: number; 
    graphHeight: number; 
    dividerLength: number;
    constructor(ctx: CanvasRenderingContext2D, speeds: number[], graphStart: number, graphLength: number, graphHeight: number, dividerLength: number){
        this.speeds = speeds;
        this.ctx = ctx;
        this.graphStart = graphStart;
        this.graphLength = graphLength;
        this.graphHeight = graphHeight;
        this.dividerLength = dividerLength;
    }
    addSpeed(speed: number): void{
        this.speeds.push(speed);
        this.draw()
    }
    draw(){
        this.ctx.clearRect(0, 0, 2 * this.graphLength, 2 * this.graphHeight);
        //let graphStart: number = 100;
        //let graphLength: number = 1000
        let graphEnd: number = this.graphStart + this.graphLength;
        let divisionLength: number = this.graphLength / this.speeds.length;
        let divisionPoints: number[] = [this.graphStart];
        let divisionPoint: number = this.graphStart;
        
        for(let i = 0; i < this.speeds.length; i++){
            divisionPoint += divisionLength;
            divisionPoints.push(divisionPoint);
        }
        this.ctx.beginPath();
        this.ctx.moveTo(this.graphStart, this.graphHeight);
        this.ctx.lineTo(graphEnd, this.graphHeight);
        this.ctx.moveTo(this.graphStart, this.graphHeight);
        this.ctx.lineTo(this.graphStart, this.graphHeight - this.dividerLength);
        this.ctx.stroke();
        for(let i = 0; i < divisionPoints.length; i++){
            this.ctx.beginPath();
            this.ctx.moveTo(divisionPoints[i], this.graphHeight);
            this.ctx.lineTo(divisionPoints[i], this.graphHeight + 2 * this.dividerLength);
            this.ctx.stroke();
            this.ctx.fillText(`${i}`, divisionPoints[i], this.graphHeight + 2 * this.dividerLength + 20);
        }
        let timeTotal: number = 0;
        let prevDistance: number = 0;
        for(let i = 0; i < this.speeds.length; i++){
            let timeKm: number = 1 / this.speeds[i] * 60;
            let distanceInMinute: number = this.speeds[i] / 60;
            for(let j = 0; j < timeKm; j++){
                this.ctx.beginPath();
                this.ctx.moveTo(this.graphStart + prevDistance, this.graphHeight);
                this.ctx.lineTo(this.graphStart + prevDistance, this.graphHeight - this.dividerLength);
                this.ctx.stroke();
                this.ctx.fillText(`${timeTotal}`, this.graphStart + prevDistance - 5, this.graphHeight - this.dividerLength - 5);
                timeTotal++;
                prevDistance += distanceInMinute * divisionLength;
            }
        }
        this.ctx.beginPath();
        this.ctx.moveTo(graphEnd, this.graphHeight);
        this.ctx.lineTo(graphEnd, this.graphHeight - this.dividerLength);
        this.ctx.stroke();
        this.ctx.fillText('min', this.graphStart - 30, this.graphHeight - 20);
        this.ctx.fillText('km', this.graphStart - 30, this.graphHeight + 20);
    }
}
