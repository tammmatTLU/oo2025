import {
    Sentence
} from "../ylesanne2";

let sentence = new Sentence("Minu kodu põles eile maha");

test('count letters test', () =>{
    expect(sentence.countLetter("m")).toBe(2);
    expect(sentence.countLetter("i")).toBe(2);
    expect(sentence.countLetter("n")).toBe(1);
    expect(sentence.countLetter("u")).toBe(2);
    expect(sentence.countLetter("k")).toBe(1);
    expect(sentence.countLetter("o")).toBe(1);
    expect(sentence.countLetter("d")).toBe(1);
    expect(sentence.countLetter("e")).toBe(3);
    expect(sentence.countLetter("a")).toBe(2);
});