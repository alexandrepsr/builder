import VehicleBuilder from "./builder/VehicleBuilder";
import Director from "./Director";
import Vehicle from "./products/Vehicle";

const builder: VehicleBuilder = new VehicleBuilder()
const diretor: Director = new Director(builder);
diretor.constructorSRV();

const srv: Vehicle = builder.getVehicle();
console.log(`Create vehicle of type: ${srv.vehicleType} with ${srv.wheelsTotal} wheels`)

diretor.constructorTruck();
const truck: Vehicle = builder.getVehicle();
console.log(`Create vehicle of type: ${truck.vehicleType} with ${truck.wheelsTotal} wheels`)