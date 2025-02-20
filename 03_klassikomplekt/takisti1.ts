class Resistor{
    protected r: number;
    protected g;
    constructor(r: number, g:object){
        this.r=r; 
        this.g=g;
        this.draw();
    }
    draw(){
        this.g.beginPath();
        this.g.rect(50, 10, 100, 30);
        this.g.stroke();
        this.g.fillText(""+this.r, 100, 26);
    }
}