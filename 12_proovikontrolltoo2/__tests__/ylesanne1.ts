import {Word} from "../ylesanne1";

let word = new Word("pere");

test('count letters test', () =>{
    expect(word.countLetter("e")).toBe(2);
    expect(word.countLetter("p")).toBe(1);
    expect(word.countLetter("r")).toBe(1);
});