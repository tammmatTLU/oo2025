// Abstraktne sõiduk
abstract class AbstractVehicle {
    abstract getFuelConsumption(): number; // l / 100 km

    getFuelUsed(distanceKm: number): number {
        return (distanceKm / 100) * this.getFuelConsumption();
    }
}

// Tavaline auto
class Car extends AbstractVehicle {
    constructor(private consumption: number) {
        super();
    }

    getFuelConsumption(): number {
        return this.consumption;
    }
}

// Buss
class Bus extends AbstractVehicle {
    constructor(private passengers: number) {
        super();
    }

    getFuelConsumption(): number {
        return 20 + this.passengers * 0.1; // baas + iga reisija kulu
    }
}

// Elektriauto
class ElectricCar extends AbstractVehicle {
    constructor(private efficiency: number) { // efficiency kWh/100km
        super();
    }

    getFuelConsumption(): number {
        return this.efficiency / 9; // kWh/100km → l/100km   "liitri ekvivalent" 
    }
    /*
    https://hypertextbook.com/facts/2003/ArthurGolnik.shtml kohaselt on bensiini energiatihedus 8,76 kWh/l 
    https://www.bts.gov/content/energy-consumption-mode-transportation-0 kohaselt on bensiini energiatihedus 9,3 kWh/l
    Seega võtsin arvutuseks ilusa ümara 9.
    */
}

// Abstraktne logistikakeskus
abstract class LogisticsCenter extends AbstractVehicle {
    protected vehicles: AbstractVehicle[] = [];

    addVehicle(vehicle: AbstractVehicle): void {
        this.vehicles.push(vehicle);
    }
}

// Keskmise kulu arvestus (nt taksofirma)
class VehicleFleet extends LogisticsCenter {
    getFuelConsumption(): number {
        if (this.vehicles.length === 0) return 0;
        let total = 0;
        for (let v of this.vehicles) {
            total += v.getFuelConsumption();
        }
        return total / this.vehicles.length;
    }
}

const taxiFleet = new VehicleFleet();
taxiFleet.addVehicle(new Car(8));
taxiFleet.addVehicle(new ElectricCar(13));
taxiFleet.addVehicle(new Bus(40));

console.log("Masinate kütusekulude keskmine: " + Math.floor(10*taxiFleet.getFuelConsumption())/10 + "l/100km");
console.log("Masinate kogu kütusekulu 300km kohta: " + Math.floor(10*taxiFleet.getFuelUsed(300))/10 + "l");