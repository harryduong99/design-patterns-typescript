What is abstract factory method?
- Abstract factory allow you to produce a family of related objects without specifying the their concrete class
- Abstract factory is like a scaling up version of the factory method, you can thing of it as you use the factory method but multiple times.

In the factory-method example, we only need to build one product is `Gpu`, what if we have to build with other things like `Monitor` (which also belong to Msi or Nvidia)?

Some people might start with
- Renaming the `Gpu` interface to a more general name like `Component`, then create `MsiMonitor` and `NvidiaMonitor` concrete product class that implement `Component`, 
- Then, for the client class: `Company`, they modify the abstract method from `createGpu` to `createComponent`, add an argument to the method 
- In the `MsiManufacturer` and `NvidiaManufacturer`, the override `createComponent` decides if should create Gpu product or Monitor product. 
- => This will end up with **violating the open-closed principle**, if they will produce not just Gpu and Monitor, but Ram => the `createComponent` method must be modified (if add more components, they have to open this method and change it).

The correct approach is:
- Create one more interface: `Monitor` with `assemble()` method
- Instead of one abstract method is `createComponent`, we create two abstract methods: `createGpu` (return `Gpu`) and `createMonitor` (return Monitor) (can convert `Company` to an interface)
- => inside `MsiManufacturer` and `NvidiaManufacturer`, we also prepare `createMonitor` method that return the corresponding Monitor product concrete: `MsiMonitor` or `NvidiaMonitor`