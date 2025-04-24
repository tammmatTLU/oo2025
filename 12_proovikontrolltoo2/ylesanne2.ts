/*
Loo liidest realiseeriv klass Lause. Lause sees on sõna-klassist objektide loetelu, mis algväärtustatakse lause konstruktoris ette antava teksti põhjal. Lauses tähe esinemissageduse loendamisel liidetakse kokku vastava tähe esinemissagedused lause sõnades. Koosta automaattestid.
*/

interface LetterCounter{
    countLetter(letter:string):number;
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

export class Sentence implements LetterCounter{
    protected wordsInSentence: Word[] = [];
    constructor(sentence: string){
        sentence = sentence.toLowerCase();
        let wordsArray = sentence.split(" ");
        for(let word of wordsArray){
            this.wordsInSentence.push(new Word(word));
        }
    }

    countLetter(letter: string):number{
        let counter: number = 0;
        for(let word of this.wordsInSentence){
            counter+= word.countLetter(letter);
        }
        return counter;
    }
}
