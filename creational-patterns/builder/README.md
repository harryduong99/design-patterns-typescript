Imagine you need to create houses, those houses might contain walls, roof, floor, windows, garage, bedroom, swimming pool..., => you can consider 2 approach: 
- Create a `House` class with basic installation (windows, roof, walls, floor), then create subclass that extend the `House` to create other houses => But this might end up with a huge number of subclasses.
- Or create a giant construct right in the `House` class with all possible params => this is also a bad idea

In this case, `builder` pattern should be considered: we extract the object construction or creation code out of its own class and move it to separate objects called builders.
