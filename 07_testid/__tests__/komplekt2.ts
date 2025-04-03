import {Calculator} from "../calculator/calculator2";

let calcobj: Calculator;

beforeEach(() => {
    calcobj=new Calculator();
});

test('empty init', () => {
    expect(calcobj.getPanelContents()).toBe("0");
 });

test('simple input', ()=>{
    calcobj.pressButton('7');
    expect(calcobj.getPanelContents()).toBe("7");
});

test('simple input', ()=>{
    calcobj.pressButton('8');
    expect(calcobj.getPanelContents()).toBe("8");
});

test('multiple symbols input', ()=>{
    calcobj.pressButton('7');
    calcobj.pressButton('8');
    expect(calcobj.getPanelContents()).toBe("78");
});

test('multiple symbols input', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('2');
    expect(calcobj.getPanelContents()).toBe("32");
});

test('clear panel', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('2');
    calcobj.pressButton('C');
    expect(calcobj.getPanelContents()).toBe("0");
});

test('adding 1', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('+');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("5");
});

test('subtracting 1', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('-');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("1");
});




test('multiply 2', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('X');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("6");
});

test('divide 1', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('/');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("1.5");
});

test('mark and panel adding', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('+');
    expect(calcobj.getPanelContents()).toBe("3");
});

test('mark and panel subtracting', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('-');
    expect(calcobj.getPanelContents()).toBe("3");
});

test('second calculation start', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('+');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("5");
    calcobj.pressButton('4');
    expect(calcobj.getPanelContents()).toBe("4");
});

test('continous calculation', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('+');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("5");
    calcobj.pressButton('+');
    calcobj.pressButton('1');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("6");
});


test('floating point', ()=>{
    calcobj.pressButton('5');
    calcobj.pressButton('/');
    calcobj.pressButton('3');
    calcobj.pressButton('=');
    expect(parseFloat(calcobj.getPanelContents())).toBeCloseTo(1.6666666, 6);
});
