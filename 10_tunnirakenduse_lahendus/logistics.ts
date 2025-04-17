abstract class LogisticsUnit{
    abstract getInfo():string;
}

abstract class Cargo extends LogisticsUnit{
    protected abstract unit: string;
    protected abstract amount: number;

    getInfo():string{
        return this.unit;
    };

    getAmount():number{
        return this.amount;
    };
}

class Liquid extends Cargo{
    protected unit: string = "l";
    protected amount: number;
    constructor(amount:number){
        super();
        this.amount = amount;
    };
}

class Solid extends Cargo{
    protected unit: string = "kg";
    protected amount: number;
    constructor(amount:number){
        super();
        this.amount = amount;
    };
}

abstract class StorageFacility extends LogisticsUnit{
    protected abstract maxCapacity: number;
    protected abstract currentCapacity: number;
    abstract type: string;
    abstract name: string;
    abstract unit: string;

    abstract addCargo(cargo: Cargo):void;
    abstract removeCargo(amount: number):void;
}

class Warehouse extends StorageFacility{
    protected maxCapacity: number;
    protected currentCapacity: number = 0;
    public type: string = "Warehouse";
    public name: string;
    public unit: string = "kg";
    constructor(name:string, maxCapacity: number){
        super();
        this.maxCapacity = maxCapacity;
        this.name = name;
    };

    getInfo():string{
        return `\nName:${this.name}\nAmount: ${this.currentCapacity}${this.unit}`;
    };

    addCargo(cargo: Solid):void{
        if(this.currentCapacity+cargo.getAmount()<=this.maxCapacity){
            this.currentCapacity+=cargo.getAmount();
        } else{
            throw new Error(`Adding ${cargo.getAmount()}${this.unit} would exceed maximum capacity!`);
        }
    };

    removeCargo(amount: number):void{
        if(this.currentCapacity-amount>=0){
            this.currentCapacity-=amount;
        } else{
            throw new Error(`Not enough cargo to remove ${amount}${this.unit}! Currently stored amount is ${this.currentCapacity}${this.unit}!`);
        }
    };
}

class LiquidContainer extends StorageFacility{
    protected maxCapacity: number;
    protected currentCapacity: number = 0;
    public type: string = "Liquid Container";
    public name: string;
    public unit: string = "l";
    constructor(name:string, maxCapacity: number){
        super();
        this.maxCapacity = maxCapacity;
        this.name = name;
    };
    getInfo():string{
        return `\nName:${this.name}\nAmount: ${this.currentCapacity}${this.unit}`;
    }
    addCargo(cargo: Liquid):void{
        if(this.currentCapacity+cargo.getAmount()<=this.maxCapacity){
            this.currentCapacity+=cargo.getAmount();
        } else{
            throw new Error(`Adding ${cargo.getAmount()}${this.unit} would exceed maximum capacity!`);
        }
    };

    removeCargo(amount: number):void{
        if(this.currentCapacity-amount>=0){
            this.currentCapacity-=amount;
        } else{
            throw new Error(`Not enough cargo to remove ${amount}${this.unit}! Currently stored amount is ${this.currentCapacity}${this.unit}!`);
        }
    };
}

class WarehouseComplex extends LogisticsUnit{
    storageUnits: StorageFacility[] = [];

    addWarehouse(newWarehouse: Warehouse){
        this.storageUnits.push(newWarehouse);
    };
    addLiquidContainer(newLiquidContainer: LiquidContainer){
        this.storageUnits.push(newLiquidContainer);
    };

    getInfo():string{
        let storageSummaries: string[] = [];
        for(let storageFacility of this.storageUnits){storageSummaries.push(storageFacility.getInfo())}
        return `Laokompleksis on ${this.storageUnits.length} erinevat hoidlat.\nNende hoidlate laoseisud: ${storageSummaries}`;
    }
}

let küttepuud = new Solid(10000);
let bensiin = new Liquid(1000);
let ladu1 = new Warehouse("Ladu #1", 20000);
let ladu2 = new Warehouse("Ladu #2", 15000);
let tank1 = new LiquidContainer("Tank #1", 12000);
let kompleks1 = new WarehouseComplex();
kompleks1.addWarehouse(ladu1);
kompleks1.addWarehouse(ladu2);
kompleks1.addLiquidContainer(tank1);

for(let i=0;i<kompleks1.storageUnits.length;i++){
    if(kompleks1.storageUnits[i].type == "Warehouse"){
        kompleks1.storageUnits[i].addCargo(küttepuud);
    } else{
        kompleks1.storageUnits[i].addCargo(bensiin);
    }
}
console.log(kompleks1.getInfo());
ladu1.removeCargo(10000);
console.log(ladu1.getInfo());

/*
let bensiin = new Liquid(300);
let küttepuud = new Solid(20000);

console.log(bensiin.getInfo());
console.log(küttepuud.getInfo());
*/