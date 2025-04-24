/*
Loo liides Taheloendaja, mille ainus meetod saab sisendiks tähe ning väljastab selle tähe esinemise arvu. Loo realiseeriv klass sõna tarbeks. Koosta automaattestid töö kontrolliks näitamaks a, p ja e-tähtede arvu sõnas pere.
*/

interface LetterCounter{
    countLetter(letter: string):number;
}

export class Word implements LetterCounter{
    protected word: string;

    constructor(word: string){
        this.word = word;
    }

    countLetter(letter: string){
        let counter: number = 0;
        for(let i=0;i<this.word.length;i++){
            if(this.word.charAt(i)==letter){
                counter++;
            }
        }
        return counter;
    }
}
