class Potentsiomeeter{
    nurk:number = 0;
    constructor(protected nurkMin:number, protected nurkMax:number, protected rMin:number, protected rMax:number){
    }
    muudaNurk(delta:number){
        let uusnurk:number = this.nurk + delta;
        if(uusnurk > this.nurkMax){
            uusnurk = this.nurkMax;
            console.log(`Nupp jõudis keeramisega maksimumi! Nüüd on nurk ${uusnurk}`);
        } else if(uusnurk < this.nurkMin){
            uusnurk = this.nurkMin;
            console.log(`Nupp jõudis keeramisega miinimumi! Nüüd on nurk ${uusnurk}`);
        }
        this.nurk = uusnurk;
    }
    getR():number{
        return (this.rMin + (this.nurk - this.nurkMin) / (this.nurkMax - this.nurkMin) * (this.rMax - this.rMin))
    }
}

let p1:Potentsiomeeter = new Potentsiomeeter(-120, 120, 100, 500);
p1.muudaNurk(80);
console.log(p1);
p1.muudaNurk(30);
console.log(p1);
console.log(p1.getR());