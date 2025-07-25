import { CarBlueprint } from "./car_blueprint.js";

const dieselCar = new CarBlueprint(
  "Červená",
  "1.6 TDI",
  "Diesel",
  "Diesel auto"
);
dieselCar.logCarProperties();

const electricCar = new CarBlueprint("Modrá", "EV 160kW", "Elektřina", "Blesk");
electricCar.logCarProperties();
dieselCar.logCarProperties();

dieselCar.repaint("Zelená");
dieselCar.logCarProperties();
electricCar.logCarProperties();

const electricCarColor = electricCar.getColor();
console.log("Barva blesku: " + electricCarColor);
