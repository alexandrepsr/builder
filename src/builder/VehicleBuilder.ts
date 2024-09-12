import Engine from "../components/Engine";
import Transmission from "../components/Trasmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";
import Vehicle from "../products/Vehicle";
import IBuilder from "./IBuilder";

export default class VehicleBuilder implements IBuilder {
  private vehicle = new Vehicle();

  reset(): void {
    this.vehicle = new Vehicle();
  }
  getVehicle(): Vehicle {
    const result = this.vehicle;
    this.reset();
    return result;
  }
  addWheel(value: Wheel) {
    this.vehicle.addWheel(value);
  }
  setVehicleType(value: VehicleType) {
    this.vehicle.vehicleType = value;
  }
  setSeats(value: number) {
    this.vehicle.seats = value;
  }
  setEngine(value: Engine) {
    this.vehicle.engine = value;
  }
  setTransmission(value: Transmission) {
    this.vehicle.transmission = value;
  }
}
