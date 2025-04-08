import {Calculator} from "../calculator/kodune";

let calcobj: Calculator;

beforeEach(() => {
    calcobj=new Calculator();
});

test('backspace test1', () => { //testib tagasivõtuklahvi tööd arvu algsel sisestamisel ning 0-i kustutamisel
    calcobj.pressButton('3');
    calcobj.pressButton('2');
    calcobj.pressButton('1');
    calcobj.pressButton('B');
    expect(calcobj.getPanelContents()).toBe("32");
    calcobj.pressButton('B');
    expect(calcobj.getPanelContents()).toBe("3");
    calcobj.pressButton('B');
    expect(calcobj.getPanelContents()).toBe("0");
    calcobj.pressButton('B');
    expect(calcobj.getPanelContents()).toBe("0");
});

test('backspace test 2', () => { //testib tagasivõtuklahvi tööd tehte teise arvu sisestamisel ning tulemuse kuvamisel
    calcobj.pressButton('3');
    calcobj.pressButton('2');
    calcobj.pressButton('1');
    calcobj.pressButton('B');
    expect(calcobj.getPanelContents()).toBe("32");
    calcobj.pressButton('+');
    calcobj.pressButton('1');
    calcobj.pressButton('3');
    calcobj.pressButton('B');
    expect(calcobj.getPanelContents()).toBe("1");
    calcobj.pressButton('8');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("50");
    calcobj.pressButton('B');
    expect(calcobj.getPanelContents()).toBe("50");
});

test('backspace test 3', () => { //testib tagasivõtuklahvi tööd teise arvu tühjaks kustutamisel.
    calcobj.pressButton('3');
    calcobj.pressButton('2');
    calcobj.pressButton('1');
    calcobj.pressButton('B');
    expect(calcobj.getPanelContents()).toBe("32");
    calcobj.pressButton('+');
    expect(calcobj.getPanelContents()).toBe("32");
    calcobj.pressButton('1');
    expect(calcobj.getPanelContents()).toBe("1");
    calcobj.pressButton('B');
    expect(calcobj.getPanelContents()).toBe("0");
    calcobj.pressButton('B');
    expect(calcobj.getPanelContents()).toBe("0");
});

test('pi test', () => { //testib pi konstandi sisestamist ja sellega arvutamist
    calcobj.pressButton('pi');
    expect(parseFloat(calcobj.getPanelContents())).toBeCloseTo(Math.PI, 5);
    calcobj.pressButton('X');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(parseFloat(calcobj.getPanelContents())).toBeCloseTo(2*Math.PI, 5);
});

test('e test', () => { //testib e konstandi sisestamist ja sellega arvutamist
    calcobj.pressButton('e');
    expect(parseFloat(calcobj.getPanelContents())).toBeCloseTo(Math.E, 5);
    calcobj.pressButton('X');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(parseFloat(calcobj.getPanelContents())).toBeCloseTo(2*Math.E, 5);
});
