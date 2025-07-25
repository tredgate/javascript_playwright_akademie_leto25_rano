export class CarBlueprint {
  constructor(color, engine, fuel, carName) {
    this.color = color;
    this.engine = engine;
    this.fuel = fuel;
    this.carName = carName;
    this.wheels = 4;

    console.log(
      `Auto "${this.carName}" bylo vyrobeno s vlastnostmi: \n\t - motor: ${this.engine} \n\t - typ paliva: ${this.fuel}\n\t - barva: ${this.color} \n\t - počet kol: ${this.wheels}`
    );
    this.logDivider();
  }

  logCarProperties() {
    console.log(
      `Informace o autě "${this.carName}":\n\tbarva: ${this.color},\n\tmotor:${this.engine},\n\tpalivo: ${this.fuel}, \n\tpočet kol: ${this.wheels}`
    );
    this.logDivider();
  }

  logDivider() {
    console.log("----------------------------");
  }

  repaint(newColor) {
    console.log(
      `Auto "${this.carName} přebarveno z ${this.color} na ${newColor}"`
    );
    this.color = newColor;
  }

  getColor() {
    return this.color;
  }
}
