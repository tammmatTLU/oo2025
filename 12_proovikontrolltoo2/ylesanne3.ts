/*
Loo abstraktne klass Tekst, mis realiseerib klassi Taheloendaja. Tekstil on alamklassid Sona ja Lause. Tekstil on abstraktne käsklus kysiSisu ning olemasolev käsklus etteantud tähe loendamiseks sisust. Kui lauses on mõni sõna korduvalt, siis selle hoidmiseks kasutatakse Sona klassi sama objekti.  
*/

interface LetterCounter{
    countLetter(letter:string):number;
}

abstract class Text implements LetterCounter{
    abstract getContent();
    countLetter(letter:string):number{
        let count:number = 0;
        for(const ch in this.getContent()){
            if(ch===letter){
                count++;
            }
        }
        return count;
    }
}

export class Word extends Text{
    protected word: string;

    constructor(word: string){
        super();
        this.word = word;
    }

    getContent():string{
        return this.word;
    }
}

export class Sentence extends Text{
    protected words: Word[];
    constructor(sentence: string){
        super();
        const wordObjects: {[word:string]:Word}={};
        this.words=sentence.split(" ").map(w=> {
            if(!wordObjects[w]){
                wordObjects[w] = new Word(w);
            }
            return wordObjects[w];
        })
    }

    getContent(){
        return this.words.map(word => word.getContent()).join("");
    }
    countLetter(letter: string): number {
        return this.words.reduce((sum, word) => word.countLetter(letter),0);
    }
}
