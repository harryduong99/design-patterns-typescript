/**
 * Instead of only having a Pizza class with constructor, imagine there are 20 options, meaning 20 params for that constructor,
 * Then for each customer with different favor, they order different kind of pizza based on that 20 options =>
 * create new Pizza(options1, option2, null, null, option 5,...) like this everytime will be a nightmare
 * => we can use the builder instead, help us to build the pizza with specify option we want by the public methods without minding about the order of params
 */
interface IBuilder {
  setSize(size: number): this;
  setCheese(cheese: boolean): this;
  setPepperoni(pepperoni: boolean): this;
  setPineapple(pineapple: boolean): this;
}

class PizzaBuilder implements IBuilder {
  private size: number | undefined;
  private cheese: boolean | undefined;
  private pepperoni: boolean | undefined;
  private pineapple: boolean | undefined;

  public setSize(size: number) {
    this.size = size;
    return this;
  }
  public setCheese(cheese: boolean) {
    this.cheese = cheese;
    return this;
  }
  public setPepperoni(pepperoni: boolean) {
    this.pepperoni = pepperoni;
    return this;
  }
  public setPineapple(pineapple: boolean) {
    this.pineapple = pineapple;
    return this;
  }

  build() {
    return new Pizza(this.size, this.cheese, this.pepperoni, this.pineapple);
  }
}

class Pizza {
  private size: number | undefined;
  private cheese: boolean | undefined;
  private pepperoni: boolean | undefined;
  private pineapple: boolean | undefined;
  constructor(
    size: number | undefined,
    cheese: boolean | undefined,
    pepperoni: boolean | undefined,
    pineapple: boolean | undefined
  ) {
    this.size = size;
    this.cheese = cheese;
    this.pepperoni = pepperoni;
    this.pineapple = pineapple;
  }
}

// build pizza full option:
const pizzaFull = new PizzaBuilder()
  .setSize(18)
  .setCheese(true)
  .setPepperoni(true)
  .setPineapple(true)
  .build();

// build pizza with no cheese and Pepperoni:
const pizza = new PizzaBuilder().setSize(18).setPineapple(true).build();
console.log(pizza);

// Now consider having a Director for creating pizza job above:

class PizzaDirector {
  private builder!: IBuilder;

  public setBuilder(builder: IBuilder) {
    this.builder = builder;
  }

  public buildPizzaFull() {
    this.builder
      .setSize(18)
      .setCheese(true)
      .setPepperoni(true)
      .setPineapple(true);
  }
}

const pDirector = new PizzaDirector();
const pBuilder = new PizzaBuilder();
pDirector.setBuilder(pBuilder);
pDirector.buildPizzaFull();
console.log(pBuilder.build());
