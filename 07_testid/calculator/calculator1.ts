class Calculator{
    protected panelContents: string = "";
    
    pressButton(b:string): void{
        if(b=="C"){
            this.panelContents = "";
        } else{
            this.panelContents+=b;
        }
    }
    getPanelContents():string{
        return this.panelContents;
    }
}

export{
    Calculator
}