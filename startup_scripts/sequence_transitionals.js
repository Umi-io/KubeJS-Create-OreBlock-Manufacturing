// This script creates a new item for each ore in the game, using the create:sequenced_assembly tag.
// This script is a dependency for oreSequence.js.

const material = global.raw_ores;

function createOreItem(event, mat) {
  console.log(`Processing material: ${mat}`);
  event
    .create(`incomplete_${mat}_ore`, 'create:sequenced_assembly')
    .texture("layer0", 'minecraft:item/gravel')
    .texture("layer1", `forge:item/crushed_${mat}`)
  console.log(`Created item: incomplete_${mat}_ore`);
}

StartupEvents.registry("item", (event) => {
  console.log("StartupEvents.registry called");
  console.log('Raw ores list: ', material);
  if (!global.raw_ores || global.raw_ores.length === 0) {
    console.error("global.raw_ores is not defined or empty");
    return;
  }
  for (const mat of global.raw_ores) {
    createOreItem(event, material);
    console.log("createOreItem called for material: " + mat);
  }
});