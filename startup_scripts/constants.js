//priority: 1
//Script must have high priority, otherwise colors may load too late.

const colors = {
    // Minecraft
    copper: 0xb87333,
    iron: 0xbfbfbf,
    gold: 0xfdf55f,

    // Create
    zinc: 0x96b685,
    brass: 0xe9ba54,

    // Destroy
    chromium: 0x000000,
    inox: 0x000000,
    pb: 0x000000,
    ni: 0x000000,
    palladium: 0x000000,
    platinum: 0x000000,
    rhodium: 0x000000,
    oxidizedSodium: 0x000000,

    // TFMG
    TFMGsteel: 0x43464b,
    castiron: 0x43464b,
    aluminum: 0x000000,
    lead: 0x465d6b,
    nickel: 0x465d6b,
    lithium: 0x465d6b,
    magnetic: 0x43464b,

    // Dreams & Desires Beta
    mithril: 0x000000,
    bronze: 0xd07c1b,
    steel: 0x43464b,
    tin: 0x465d6b,
    industrialiron: 0x000000,
    electrum: 0xe3c739
};

// Define raw ore properties
global.raw_ore_properties = {
    tin: { color: colors.tin },
    lead: { color: colors.lead },
    nickel: { color: colors.nickel },
    aluminum: { color: colors.aluminum },
    zinc: { color: colors.zinc },
    iron: { color: colors.iron },
    gold: { color: colors.gold },
    copper: { color: colors.copper },
    lithium: { color: colors.lithium },
    magnetic: { color: colors.magnetic },
    castiron: { color: colors.castiron },
    TFMGsteel: { color: colors.TFMGsteel },
    brass: { color: colors.brass },
    chromium: { color: colors.chromium },
    inox: { color: colors.inox },
    pb: { color: colors.pb },
    ni: { color: colors.ni },
    palladium: { color: colors.palladium },
    platinum: { color: colors.platinum },
    rhodium: { color: colors.rhodium },
    oxidizedSodium: { color: colors.oxidizedSodium },
    mithril: { color: colors.mithril },
    bronze: { color: colors.bronze },
    steel: { color: colors.steel },
    industrialiron: { color: colors.industrialiron },
    electrum: { color: colors.electrum }
};

// Define incomplete ores
global.incomplete_ores = Ingredient.of('kubejs:incomplete_ores').stacks.toArray().map(item => item.id)

// Define raw ores
global.raw_ores = Ingredient.of('#forge:ores_in_underground/stone').stacks.toArray().map(item => item.id);

// Define crushed ores
global.crushed_ores = Ingredient.of('forge:crushed').stacks.toArray().map(item => item.id);

// Define ingots
global.ingots = Ingredient.of('forge:ingots').stacks.toArray().map(item => item.id);

// Define materials
global.materials = Ingredient.of('forge:ingots').stacks.toArray().map(item => item.id);
global.materials = Ingredient.of('forge:gems').stacks.toArray().map(item => item.id);

const properties = {
    tin: { color: colors.tin, damage: 350, tier: "stone" },
    lead: { color: colors.lead, damage: 375, tier: "tier" },
    nickel: { color: colors.nickel, damage: 320, tier: "iron" },
    zinc: { color: colors.zinc, damage: 260, tier: "iron" },
    copper: { color: colors.copper, damage: 200, tier: "stone" },
    steel: { color: colors.steel, damage: 375, tier: "iron" },
    inox: { color: colors.inox, damage: 3000, tier: "diamond" },
    brass: { color: colors.brass, damage: 292, tier: "stone" },
    bronze: { color: colors.bronze, damage: 550, tier: "iron" },
    pb: { color: colors.pb, damage: 400, tier: "iron" },
    ni: { color: colors.ni, damage: 600, tier: "diamond" },
    palladium: { color: colors.palladium, damage: 700, tier: "netherite" },
    platinum: { color: colors.platinum, damage: 800, tier: "netherite" },
    rhodium: { color: colors.rhodium, damage: 900, tier: "netherite" },
    oxidizedSodium: { color: colors.oxidizedSodium, damage: 1000, tier: "netherite" }
};

const wire_properties = {
    copper: { color: colors.copper },
    iron: { color: colors.iron },
    gold: { color: colors.gold },
    tin: { color: colors.tin },
    lead: { color: colors.lead },
    nickel: { color: colors.nickel },
    steel: { color: colors.steel },
    aluminum: { color: colors.aluminum },
    electrum: { color: colors.electrum },
    bronze: { color: colors.bronze },
    zinc: { color: colors.zinc },
    brass: { color: colors.brass },
    inox: { color: colors.inox },
    pb: { color: colors.pb },
    ni: { color: colors.ni },
    palladium: { color: colors.palladium },
    platinum:{ color: colors.platinum },
    rhodium:{ color: colors.rhodium },
    oxidizedSodium:{ color: colors.oxidizedSodium }
};

global.wire_materials = [
    "tin",
    "silver",
    "lead",
    "nickel",
    "steel",
    "aluminum",
    "electrum",
    "bronze",
    "zinc",
    "brass",
    "chromium",
    "inox",
    "pb",
    "ni",
    "palladium",
    "platinum",
    "rhodium",
    "oxidized sodium"
];

const intermediate_ores = [
    'kubejs:incomplete_iron_ore',
    'kubejs:incomplete_gold_ore',
    'kubejs:incomplete_copper_ore',
    'kubejs:incomplete_emerald_ore',
    'kubejs:incomplete_diamond_ore',
    'kubejs:incomplete_lapis_ore',
    'kubejs:incomplete_redstone_ore',
    'kubejs:incomplete_quartz_ore',
];

global.vanillaMaterials = [
    'iron',
    'gold',
    'copper',
    'lapis',
    'diamond',
    'redstone',
    'quartz',
    'emerald'
];
