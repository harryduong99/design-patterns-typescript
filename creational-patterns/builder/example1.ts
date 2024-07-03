/**
 * The Director is only responsible for executing the building steps in a
 * particular sequence. It is helpful when producing products according to a
 * specific order or configuration. Strictly speaking, the Director class is
 * optional, since the client can control builders directly.
 */
class Director {
  private builder!: Builder;
  public setBuilder(builder: Builder) {
    this.builder = builder;
  }

  public buildHouse() {
    this.builder.buildWall();
    this.builder.buildFloor();
    this.builder.buildRoof();
    this.builder.buildWindow();
  }

  public buildCastle() {
    this.builder.buildFloor();
    this.builder.buildWall();
    this.builder.buildRoof();
    this.builder.buildWindow();
  }
}

interface Builder {
  buildWall(): void;
  buildFloor(): void;
  buildRoof(): void;
  buildWindow(): void;
}

class HouseBuilder implements Builder {
  private house!: House;
  constructor() {
    this.reset();
  }

  public reset(): void {
    this.house = new House();
  }
  public buildWall() {
    this.house.parts.push("Wall");
  }
  public buildFloor() {
    this.house.parts.push("Floor");
  }
  public buildRoof() {
    this.house.parts.push("Roof");
  }
  public buildWindow() {
    this.house.parts.push("Window");
  }

  public getHouse(): House {
    const result = this.house;
    this.reset();
    return result;
  }
}

class CastleBuilder implements Builder {
  private castle!: Castle;
  constructor() {
    this.reset();
  }

  public reset(): void {
    this.castle = new Castle();
  }
  public buildWall() {
    this.castle.parts.push("Wall made by stone");
  }
  public buildFloor() {
    this.castle.parts.push("Floor made by stone");
  }
  public buildRoof() {
    this.castle.parts.push("Roof with iron");
  }
  public buildWindow() {
    this.castle.parts.push("Window made by sapphire");
  }

  public getCastle(): Castle {
    const result = this.castle;
    this.reset();
    return result;
  }
}

class House {
  public parts: string[] = [];

  public listParts(): void {
    console.log(`House parts: ${this.parts.join(", ")}\n`);
  }
}
class Castle {
  public parts: string[] = [];

  public listParts(): void {
    console.log(`Castle parts: ${this.parts.join(", ")}\n`);
  }
}

const builder = new HouseBuilder();
const director = new Director();
director.setBuilder(builder);
director.buildHouse();
console.log(builder.getHouse());
