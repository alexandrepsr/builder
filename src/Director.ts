import IBuilder from "./builder/IBuilder";
import Engine from "./components/Engine";
import Transmission from "./components/Trasmission";
import VehicleType from "./components/VehicleType";
import Wheel from "./components/Wheel";

export default class Director {
  constructor(private builder: IBuilder) {}

  constructorSRV() {
    this.builder.setVehicleType(VehicleType.SRV);
    this.builder.setSeats(5);
    this.builder.setTransmission(Transmission.AUTOMATIC);
    this.builder.setEngine(new Engine(1600));
    this.builder.addWheel(new Wheel(15));
    this.builder.addWheel(new Wheel(15));
    this.builder.addWheel(new Wheel(15));
    this.builder.addWheel(new Wheel(15));
  }

  constructorTruck() {
    this.builder.setVehicleType(VehicleType.TRUCK);
    this.builder.setSeats(3);
    this.builder.setTransmission(Transmission.MANUAL);
    this.builder.setEngine(new Engine(1300));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
  }
}
