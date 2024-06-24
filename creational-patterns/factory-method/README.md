Factory Method is used to create one product only but Abstract Factory is about creating families of related or dependent products.
Factory Method pattern exposes a method to the client for creating the object whereas in the case of Abstract Factory they expose a family of related objects which may consist of these Factory methods.


Example for factory method: Imagine you have to build a GPU for your company, there are certain brands like Msi, Nvidia => you will have a Factory Method like this:
- A client class: `Company` with factory method is `createGpu` and `assembleGpu` method which will be used by the client
- `Gpu` interface with `assemble` method, 2 concrete classes for product: `MsiGpu` and `NvidiaGpu` that implement `Gpu` interface
- 2 concrete classes for creators: `MsiManufacturer` and `NvidiaManufacturer` that extends the `Company` class and override `createGpu` abstract method.