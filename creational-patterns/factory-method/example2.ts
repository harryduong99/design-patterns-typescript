abstract class Company {
  public assembleGpu() {
    const concrete = this.createGpu();
    return concrete.assemble();
  }

  public abstract createGpu() : Gpu;
}

interface Gpu {
  assemble(): string;
}

class MsiGpu implements Gpu {
  public assemble(): string {
    return 'This gpu is MSI'
  }
}

class NvidiaGpu implements Gpu {
  public assemble(): string {
    return 'This gpu is Nvidia'
  }
}

class MsiManufacturer extends Company {
  public createGpu(): Gpu {
    return new MsiGpu();
  }
}

class NvidiaManufacturer extends Company {
  public createGpu(): Gpu {
    return new NvidiaGpu();
  }
}

console.log((new MsiManufacturer()).assembleGpu())