"use strict";
/*
Loo liides Taheloendaja, mille ainus meetod saab sisendiks tähe ning väljastab selle tähe esinemise arvu. Loo realiseeriv klass sõna tarbeks. Koosta automaattestid töö kontrolliks näitamaks a, p ja e-tähtede arvu sõnas pere.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Word = void 0;
var Word = /** @class */ (function () {
    function Word(word) {
        this.word = word;
    }
    Word.prototype.countLetter = function (letter) {
        var counter = 0;
        for (var i = 0; i < this.word.length; i++) {
            if (this.word.charAt(i) == letter) {
                counter++;
            }
        }
        return counter;
    };
    return Word;
}());
exports.Word = Word;
