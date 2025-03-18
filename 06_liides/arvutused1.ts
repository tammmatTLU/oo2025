interface CalculatingFunction{
    calculate(x:number): number;
    inputUnit(): string;
    outputUnit(): string;
}

class InchesToCm implements CalculatingFunction{

    calculate(inches: number): number{
        return inches*2.54;
    }
    inputUnit():string{
        return "in";
    }
    outputUnit(): string{
        return "cm";
    }
}

class CmToInches implements CalculatingFunction{
    calculate(cm:number): number{
        return cm/2.54;
    }
    inputUnit():string{
        return "cm";
    }
    outputUnit(): string{
        return "in";
    }
}