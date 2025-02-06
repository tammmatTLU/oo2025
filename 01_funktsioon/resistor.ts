//"c:\Program Files\nodejs\npm.cmd" install typescript ts-node
//npm i -D @types/node
//npx ts-node resistorrun.ts
class Resistor {
    r: number = 0;
    constructor(r: number) {
      this.r = r;
    }
    getCurrent(u: number): number {
      return u / this.r;
    }
  }
  
  let r1: Resistor = new Resistor(220);
  console.log(r1.getCurrent(5));