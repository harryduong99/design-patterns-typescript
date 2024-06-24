abstract class Company { // this can be converted to interface as well, since only contains abstract methods
  public abstract createGpu() : Gpu;

  public abstract createMonitor() : Monitor;
}

interface Gpu {
  assemble(): string;
}

interface Monitor {
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

class MsiMonitor implements Monitor {
  public assemble(): string {
    return 'This Monitor is MSI'
  }
}

class NvidiaMonitor implements Monitor {
  public assemble(): string {
    return 'This Monitor is Nvidia'
  }
}

class MsiManufacturer extends Company {
  public createGpu(): Gpu {
    return new MsiGpu();
  }

  public createMonitor(): Monitor {
    return new MsiMonitor();
  }
}

class NvidiaManufacturer extends Company {
  public createGpu(): Gpu {
    return new NvidiaGpu();
  }

  public createMonitor(): Monitor {
    return new NvidiaMonitor();
  }
}

const msi = new MsiManufacturer();
console.log(msi.createGpu())
console.log(msi.createMonitor())