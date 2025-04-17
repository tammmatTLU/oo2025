abstract class LogisticsUnit{
    abstract getInfo():string;
}

abstract class Cargo extends LogisticsUnit{
    abstract unit:string;
    protected abstract amount:number;

    getInfo():string{
        return this.unit;
    }

    getAmount():number{
        return this.amount;
    }
}

class Liquid extends Cargo{
    public unit:string = "l";
    protected amount:number;
    
    constructor(amount:number){
        super();
        this.amount = amount;
    }
}

class Solid extends Cargo{
    public unit:string = "kg";
    protected amount:number;
    
    constructor(amount:number){
        super();
        this.amount = amount;
    }
}

abstract class StorageFacility extends LogisticsUnit{
    abstract maxCapacity:number;
    abstract currentCapacity:number;
    abstract type:string;
    abstract name:string;
    abstract unit:string;

    abstract addCargo(cargo:Cargo):void;
    abstract removeCargo(amount:number):void;
}

class Warehouse extends StorageFacility{
    public maxCapacity:number;
    public currentCapacity:number = 0;
    public type:string = "Warehouse";
    public name:string;
    public unit:string = "kg";
    
    constructor(name:string, maxCapacity:number){
        super();
        this.maxCapacity = maxCapacity;
        this.name = name;
    }

    getInfo():string{
        return `\nName:${this.name}\nAmount:${this.currentCapacity}${this.unit}`;
    }

    addCargo(cargo:Solid):void{
        if(this.currentCapacity+cargo.getAmount()<=this.maxCapacity){
            this.currentCapacity+=cargo.getAmount();
        } else{
            throw new Error(`Adding ${cargo.getAmount()}${this.unit} would exceed maximum capacity!`);
        }
    }

    removeCargo(amount:number):void{
        if(this.currentCapacity-amount>=0){
            this.currentCapacity-=amount;
        } else{
            throw new Error(`Not enough cargo to remove ${amount}${this.unit}! Currently stored amount is ${this.currentCapacity}${this.unit}!`);
        }
    }
}

class LiquidContainer extends StorageFacility{
    public maxCapacity:number;
    public currentCapacity:number = 0;
    public type:string = "Liquid Container";
    public name:string;
    public unit:string = "l";
    
    constructor(name:string, maxCapacity:number){
        super();
        this.maxCapacity = maxCapacity;
        this.name = name;
    }

    getInfo():string{
        return `\nName:${this.name}\nAmount:${this.currentCapacity}${this.unit}`;
    }

    addCargo(cargo:Liquid):void{
        if(this.currentCapacity+cargo.getAmount()<=this.maxCapacity){
            this.currentCapacity+=cargo.getAmount();
        } else{
            throw new Error(`Adding ${cargo.getAmount()}${this.unit} would exceed maximum capacity!`);
        }
    }

    removeCargo(amount:number):void{
        if(this.currentCapacity-amount>=0){
            this.currentCapacity-=amount;
        } else{
            throw new Error(`Not enough cargo to remove ${amount}${this.unit}! Currently stored amount is ${this.currentCapacity}${this.unit}!`);
        }
    }
}

class WarehouseComplex extends LogisticsUnit{
    storageUnits:StorageFacility[] = [];

    addWarehouse(newWarehouse:Warehouse){
        this.storageUnits.push(newWarehouse);
    }

    addLiquidContainer(newLiquidContainer:LiquidContainer){
        this.storageUnits.push(newLiquidContainer);
    }

    getInfo():string{
        let storageSummaries:string[] = [];
        for(let storageFacility of this.storageUnits){storageSummaries.push(storageFacility.getInfo())}
        return `Laokompleksis on ${this.storageUnits.length} erinevat hoidlat.\nNende hoidlate laoseisud:${storageSummaries}`;
    }
}

class Vehicle extends LogisticsUnit{
    protected regNumber:string;
    protected maxCapacity:number;
    protected unit:string;
    protected avgSpeed:number = 90;

    constructor(regNumber, maxCapacity, unit){
        super();
        this.regNumber = regNumber;
        this.maxCapacity = maxCapacity;
        this.unit = unit;
    }

    getRegNumber():string{
        return this.regNumber;
    }

    getInfo():string{
        return `Maximum Capacity:${this.maxCapacity}${this.unit}\nAverage speed:${this.avgSpeed}`;
    }
}

class Delivery{
    public cargo:Cargo;
    public source:StorageFacility;
    public destination:StorageFacility;
    public assignedVehicle:Vehicle;
    public status:string; // e.g., "Pending", "In Transit", "Completed"

    constructor(cargo:Cargo, source:StorageFacility, destination:StorageFacility, assignedVehicle:Vehicle) {
        this.cargo = cargo;
        this.source = source;
        this.destination = destination;
        this.assignedVehicle = assignedVehicle;
        this.status = "Pending";
    }

    startDelivery():void{
        if(this.cargo.unit != this.source.unit){
            throw new Error("Cargo type does not match source storage type.")
        }else if(this.cargo.unit != this.destination.unit){
            throw new Error("Cargo type does not match destination storage type.")
        }else if(this.source.currentCapacity<this.cargo.getAmount()){
            throw new Error("Not enough cargo at the source to start delivery.");
        }
        this.source.removeCargo(this.cargo.getAmount());
        this.status = "In Transit";
    }

    completeDelivery():void{
        this.destination.addCargo(this.cargo);
        this.status = "Completed";
    }

    getInfo():string {
        return `Delivery of ${this.cargo.getAmount()}${this.cargo.getInfo()} from ${this.source.name} to ${this.destination.name} using ${this.assignedVehicle.getRegNumber()}. Status:${this.status}`;
    }

    getStatus():string{
        return this.status;
    }
}


/*
let küttepuud = new Solid(10000);
let bensiin = new Liquid(1000);
let ladu1 = new Warehouse("Ladu #1", 20000);
let ladu2 = new Warehouse("Ladu #2", 15000);
let tank1 = new LiquidContainer("Tank #1", 12000);
let tank2 = new LiquidContainer("Tank #2", 24000);
let kastikas = new Vehicle("123EKR", 20000, "kg");
let tankur = new Vehicle("456EKR", 4000, "l");

ladu1.addCargo(küttepuud);
ladu1.addCargo(küttepuud);
tank1.addCargo(bensiin);
tank1.addCargo(bensiin);

let delivery1 = new Delivery(küttepuud, ladu1, ladu2, kastikas);
let delivery2 = new Delivery(bensiin, tank1, tank2, tankur);

console.log(ladu1.getInfo());
console.log(ladu2.getInfo());
console.log(delivery1.getInfo());
delivery1.startDelivery();
console.log(ladu1.getInfo());
console.log(ladu2.getInfo());
console.log(delivery1.getStatus());
delivery1.completeDelivery();
console.log(ladu1.getInfo());
console.log(ladu2.getInfo());
console.log(delivery1.getStatus());

console.log(tank1.getInfo());
console.log(tank2.getInfo());
console.log(delivery2.getInfo());
delivery2.startDelivery();
console.log(tank1.getInfo());
console.log(tank2.getInfo());
console.log(delivery2.getStatus());
delivery2.completeDelivery();
console.log(tank1.getInfo());
console.log(tank2.getInfo());
console.log(delivery2.getStatus());




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
*/