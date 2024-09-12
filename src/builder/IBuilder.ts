import Engine from "../components/Engine";
import Transmission from "../components/Trasmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";
import Vehicle from "../products/Vehicle";

export default interface IBuilder {
  reset(): void;
  getVehicle(): Vehicle;

  addWheel(value: Wheel);
  setVehicleType(value: VehicleType);
  setSeats(value: number);
  setEngine(engine: Engine);
  setTransmission(transmission: Transmission);
}
