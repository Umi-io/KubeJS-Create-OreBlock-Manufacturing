// This script is a manual transitional script that creates a new item for each ore in the game, using the create:sequenced_assembly tag.
// This script is a dependency for vanillaOreSequence.js.
// priority: 0

function createOreItem(event, material) {
  console.log(`Processing material: ${material}`);
  event
    .create(`incomplete_${material}_ore`, 'create:sequenced_assembly')
    .texture("layer0", 'item/gravel')
    if (['iron', 'gold', 'copper'].includes(material)) {
        event.display("layer1", {
          texture: 'item/dust',
          color: '#808080'
        });
        event.tag("raw_ore", `#forge:ores/${material}`);
    } else {
        event.display("layer1", {
          texture: `item/dust`,
          color: global.raw_ore_properties[material].color
    });
        event.tag("dust", `#forge:dusts/${material}`);
      }
  console.log(`Created item: incomplete_${material}_ore`);
    }

StartupEvents.registry("item", (event) => {
for (let i = 0; i < global.vanillaMaterials.length; i++) {
    createOreItem(event, global.vanillaMaterials[i]);
    console.log("createOreItem called for material: " + material);
  }
});