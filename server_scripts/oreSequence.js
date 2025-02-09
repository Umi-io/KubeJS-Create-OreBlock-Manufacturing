// Creates Ore block recipes for raw ores made with KubeJS, using KubeJS ingots.
// priority: -1
ServerEvents.recipes(event => {
    let k = id => `kubejs:${id}`;

    if (global.raw_ores) {
        for (let i = 0; i < global.raw_ores.length; i++) {
            let inter = global.incomplete_ores; // Intermediate item
            let input = global.crushed_ores[i]; // Input item is the crushed ore
            let output = global.raw_ores[i]; // Output item is the raw ore
            event.recipes.createSequencedAssembly(
                Item.of(output),
                Item.of(input), [
                event.recipes.createDeploying(inter, [inter, 'minecraft:gravel']),
                event.recipes.createPressing(inter, inter),
                event.recipes.createFilling(inter, [inter, Fluid.of('minecraft:lava', 1000)]),
                event.recipes.createPressing(inter, inter)
            ]).transitionalItem(inter).loops(2);
        }
    } else {
        console.error("global.raw_ores is not defined");
    }
});
