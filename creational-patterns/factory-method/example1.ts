abstract class Creator {
  public abstract factoryMethod(): Product;

  public doOperation(): string {
    const product  = this.factoryMethod();
    return product.operation();
  }
}

interface Product {
  operation(): string;
}

class ConcreteCreatorA extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProductA()
  }
}

class ConcreteProductA implements Product {
  public operation(): string {
    return "This operation is done by Product A"
  }
}

class ConcreteCreatorB extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProductB()
  }
}

class ConcreteProductB implements Product {
  public operation(): string {
    return "This operation is done by Product B"
  }
}

let creatorA = new ConcreteCreatorA();
console.log(creatorA.doOperation())


let creatorB = new ConcreteCreatorB();
console.log(creatorB.doOperation())


