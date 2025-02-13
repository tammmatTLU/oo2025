//"c:\Program Files\nodejs\npm.cmd" install typescript ts-node
//npm i -D @types/node
//npx ts-node resistorrun.ts
/*Loo käsk kontrollimaks, kas parameetrina antud pinge on vastava takisti puhul lubatud - st. kas pingestamisel eralduv võimsus jääb lubatud maksimuvõimsuse piiresse
P=U*I
I=U/R

*/
var Resistor = /** @class */ (function () {
    function Resistor(r, PMax) {
        this.r = 0;
        this.PMax = 0;
        this.r = r;
        this.PMax = PMax;
    }
    Resistor.prototype.getCurrent = function (u) {
        return u / this.r;
    };
    Resistor.prototype.getPower = function (u) {
        return u * this.getCurrent(u);
    };
    Resistor.prototype.isVoltageAllowed = function (u) {
        return this.getPower(u) <= this.PMax;
    };
    return Resistor;
}());
var resistors = [
    new Resistor(220, 0.5),
    new Resistor(110, 0.5),
    new Resistor(4700, 0.5)
];
var u = 13;
var vastus = [];
for (var _i = 0, resistors_1 = resistors; _i < resistors_1.length; _i++) {
    var resistor = resistors_1[_i];
    console.log(resistor.isVoltageAllowed(u));
    if (resistor.isVoltageAllowed(u) == true) {
        vastus.push(resistor);
    }
}
console.log(vastus);
/* Takistile mõjub pinge(U) 5 volti ning seda läbib vool(I) 2 amprit. Mitu vatti soojust eraldub takistist? P=U*I => P=2*5=10 ?

Takistile mõjub pinge 4 volti ning sealt eraldub võimsus 6 vatti. Mitu amprit voolu läbib takistit? 6/4= 1,5

Mitu oomi on eelneva takisti takistus? 4/1,5=2,something

Veekeedukannu võimsuseks on 1 kilovatt, seal sees on vett 1 liiter. Mitme kraadi peale tõuseb vee temperatuur 20 kraadi Celsiuse pealt ühe minutiga, kui kogu sisselülitatud kannu võimsus läheb vee soojendamiseks? U = 220V P = 1000W
T - temperatuur
t - aeg
m - mass
P - võimsus
c - erisoojus
Q - soojushulk/energia
1l vett on umbes 1kg
soojushulga valem:
Q = mc*deltaT
energia valem:
Q = P * t

c vesi = 4186 J/(kg*Celsius)

deltaT = (P * t) / (m * c)
deltaT = (1000W * 60sek) / (1kg * 4186 J/(kg*Celsius)) = 60000/4186 = umbes 14,3
lõppT = algT + deltaT
lõppT = 20 + 14,3 = 34,3



Mitu amprit voolu läbib eelnimetatud veekeedukannu, kui võrgupinge on 220 volti?
U = 220
I - ?
P = 1000
P = U * I => I = P / U
I = 1000 / 220 = umbes 4,55A


Mitu oomi on selle veekeedukannu takistus?
R - ?
R = U / I
U = 220
I= 4,55
R = 220 / 4,5 = 48,89 oomi
*/
