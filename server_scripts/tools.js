//Creates Tool Recipes for tools made with KubeJS, using KubeJS ingots.
ServerEvents.recipes(r => {
    let k = id => `kubejs:${id}`;

    if (global.materials) {
        for (const mat of global.materials) {
            let ingot = mat == 'copper' ? 'minecraft:copper_ingot' : k(`${mat}_ingot`);
            r.shaped(k(`${mat}_axe`, 1), ['aa ', 'ab ', ' b '], {
                a: ingot,
                b: 'minecraft:stick'
            }).id(k(`${mat}_axe`));
            r.shaped(k(`${mat}_pickaxe`, 1), ['aaa', ' b ', ' b '], {
                a: ingot,
                b: 'minecraft:stick'
            }).id(k(`${mat}_pickaxe`));
            r.shaped(k(`${mat}_hoe`, 1), ['aa ', ' b ', ' b '], {
                a: ingot,
                b: 'minecraft:stick'
            }).id(k(`${mat}_hoe`));
            r.shaped(k(`${mat}_shovel`, 1), [' a ', ' b ', ' b '], {
                a: ingot,
                b: 'minecraft:stick'
            }).id(k(`${mat}_shovel`));
            r.shaped(k(`${mat}_sword`, 1), [' a ', ' a ', ' b '], {
                a: ingot,
                b: 'minecraft:stick'
            }).id(k(`${mat}_sword`));
        }
    } else {
        console.error("global.materials is not defined");
    }
});
