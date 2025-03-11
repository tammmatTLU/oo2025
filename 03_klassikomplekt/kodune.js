var InteractiveCircle = /** @class */ (function () {
    function InteractiveCircle(canvasId) {
        var _this = this;
        var slider = document.getElementById("sizeSlider");
        var colorChoice = document.querySelector("#colorChange");
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height / 2;
        this.color = colorChoice.value;
        this.radius = parseInt(slider.value);
        slider.addEventListener("input", function (e) { return _this.changeSize(parseInt(slider.value)); });
        colorChoice.addEventListener("change", function (e) { return _this.changeColor(colorChoice.value); });
        this.draw();
    }
    InteractiveCircle.prototype.draw = function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    };
    InteractiveCircle.prototype.changeSize = function (newRadius) {
        this.radius = newRadius;
        this.draw();
    };
    InteractiveCircle.prototype.changeColor = function (newColor) {
        this.color = newColor;
        this.draw();
    };
    return InteractiveCircle;
}());
// Initialize the object when the window loads
window.onload = function () {
    new InteractiveCircle("canvas");
};
