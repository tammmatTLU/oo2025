class InteractiveCircle {
    private ctx: CanvasRenderingContext2D;
    private x: number;
    private y: number;
    private radius: number;
    private color: string;
    private canvas: HTMLCanvasElement;

    constructor(canvasId: string) {
        const slider = document.getElementById("sizeSlider") as HTMLInputElement;
        const colorChoice = document.querySelector("#colorChange") as HTMLInputElement;
        this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d")!;
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height / 2;
        this.color = colorChoice.value;
        this.radius = parseInt(slider.value);

        slider.addEventListener("input", (e) => this.changeSize(parseInt(slider.value)));
        colorChoice.addEventListener("change", (e) => this.changeColor(colorChoice.value));
        
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    changeSize(newRadius: number) {
        this.radius = newRadius;
        this.draw();
    }

    changeColor(newColor: string){
        this.color = newColor
        this.draw();
    }
}

// Initialize the object when the window loads
window.onload = () => {
    new InteractiveCircle("canvas");
};
