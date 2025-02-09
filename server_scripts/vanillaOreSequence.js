// Creates recipes for Ore Blocks using crushed ore through KubeJS, using the create:sequenced_assembly tag.
// -1

const raw_ores = [
    'minecraft:iron_ore',
    'minecraft:gold_ore',
    'minecraft:copper_ore',
    'minecraft:lapis_ore',
    'minecraft:diamond_ore',
    'minecraft:redstone_ore',
    'minecraft:nether_quartz_ore',
    'minecraft:emerald_ore'
]; // Raw ores, output item

const crushed_ores = [
    'create:crushed_raw_iron',
    'create:crushed_raw_gold',
    'create:crushed_raw_copper',
    'minecraft:lapis_lazuli',
    'minecraft:diamond',
    'minecraft:redstone',
    'minecraft:quartz',
    'minecraft:emerald'
];  // Crushed ores, input item

ServerEvents.recipes(event => {
    if (raw_ores.length != crushed_ores.length) {
        console.error("The length of raw_ores and crushed_ores arrays do not match.");
        return;
    }
    console.log("Creating ore block recipes...");
    console.log("Raw ores: ", raw_ores);
    for (let i = 0; i < raw_ores.length; i++) {
        let inter = `kubejs:incomplete_${raw_ores[i].split(':')[1]}`; // Intermediate item
        console.log(`Creating recipe for: ${raw_ores[i]} with intermediate: ${inter}`);
        console.log(`Input item: ${crushed_ores[i]}`);
        console.log(`Output item: ${raw_ores[i]}`);
        console.log(`Intermediate item: ${inter}`);
        console.log(`Output item: ${Item.of(raw_ores[i])}`);
        console.log(`Input item: ${Item.of(crushed_ores[i])}`);
        console.log(`Deploying step: ${event.recipes.createDeploying(inter, [inter, 'minecraft:gravel'])}`);
        console.log(`Pressing step: ${event.recipes.createPressing(inter, inter)}`);
        console.log(`Filling step: ${event.recipes.createFilling(inter, [inter, Fluid.of('minecraft:lava', 1000)])}`);
        event.recipes.create.sequenced_assembly([
            Item.of(raw_ores[i]).withChance(1.0), // Ensure the output item is correctly defined
            Item.of('minecraft:gravel').withChance(0.5) // Add a secondary output item for testing
        ], Item.of(crushed_ores[i]), [ // Ensure the input item is correctly defined
            event.recipes.createDeploying(inter, [inter, 'minecraft:gravel']),
            event.recipes.createPressing(inter, inter),
            event.recipes.createFilling(inter, [inter, Fluid.of('minecraft:lava', 1000)]),
            event.recipes.createPressing(inter, inter)
        ]).transitionalItem(inter).loops(2);
    }
});