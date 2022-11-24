const crossSkillItemIds = [
  'melvorD:Firemaking_Skillcape',
  'melvorTotH:Superior_Firemaking_Skillcape',
  'melvorF:Max_Skillcape',
  'melvorTotH:Superior_Max_Skillcape',
  'melvorF:Cape_of_Completion',
  'melvorTotH:Superior_Cape_Of_Completion',
  'melvorD:Ancient_Ring_Of_Skills',
  'melvorD:Ancient_Ring_Of_Mastery',
  'melvorD:Clue_Chasers_Insignia',
  'melvorF:Skillers_Hat',
  'melvorF:Skillers_Body',
  'melvorF:Skillers_Leggings',
  'melvorF:Skillers_Boots',
  'melvorF:Clown_Hat',
];

export const registeredItemIds = new Map();

export const woodcuttingItemIds = crossSkillItemIds.concat([
  'melvorF:Woodcutters_Boots',
  'melvorD:Woodcutting_Skillcape',
  'melvorF:Woodcutters_Hat',
  'melvorF:Lumberjacks_Top',
  'melvorF:Woodcutters_Body',
  'melvorF:Woodcutters_Leggings',
  'melvorTotH:Crown_of_Madremonte',
  'melvorTotH:Superior_Woodcutting_Skillcape',
  'melvorTotH:Meteorite_Woodcutting_Ring',
  'melvorTotH:Meteorite_Woodcutting_Amulet',
]);

export const fishingItemIds = crossSkillItemIds.concat([
  'melvorD:Fishing_Skillcape',
  'melvorTotH:Superior_Fishing_Skillcape',
  'melvorF:Sailors_Top',
  'melvorD:Amulet_of_Fishing',
  'melvorD:Pirates_Lost_Ring',
  'melvorTotH:Burning_Reel',
  'melvorF:Fishing_Hook',
  'melvorTotH:Golden_Reel',
  'melvorF:Fishermans_Hat',
  'melvorF:Fishermans_Body',
  'melvorF:Fishermans_Leggings',
  'melvorF:Fishermans_Boots',
]);

export const firemakingItemIds = crossSkillItemIds.concat([
  'melvorTotH:Burning_Amulet_of_Charcoal',
  'melvorD:Burning_Amulet_of_Gold',
  'melvorD:Burning_Amulet_of_Stardust',
  'melvorD:Burning_Amulet_of_XP',
  'melvorTotH:Kindling_Pouch',
  'melvorF:Warm_Beanie',
  'melvorD:Aorpheats_Signet_Ring',
  'melvorF:Burning_Mans_Hat',
  'melvorF:Burning_Mans_Body',
  'melvorF:Burning_Mans_Leggings',
  'melvorF:Burning_Mans_Boots',
]);

export const cookingItemIds = crossSkillItemIds.concat([
  'melvorD:Cooking_Skillcape',
  'melvorTotH:Superior_Cooking_Skillcape',
  'melvorTotH:Chefs_Bag',
  'melvorF:Chefs_Hat',
  'melvorF:Cooking_Apron',
  'melvorTotH:Mortar_and_Pestle',
  'melvorF:Chefs_Spoon',
]);

export const miningItemIds = crossSkillItemIds.concat([
  'melvorD:Mining_Skillcape',
  'melvorTotH:Superior_Mining_Skillcape',
  'melvorF:Miners_Helmet',
  'melvorF:Miners_Hat',
  'melvorF:Miners_Body',
  'melvorF:Miners_Leggings',
  'melvorF:Miners_Boots',
]);

export const smithingItemIds = crossSkillItemIds.concat([
  'melvorD:Smithing_Skillcape',
  'melvorTotH:Superior_Smithing_Skillcape',
  'melvorTotH:Blacksmiths_Gloves',
  'melvorF:Blacksmiths_Hat',
  'melvorF:Blacksmiths_Body',
  'melvorF:Blacksmiths_Leggings',
  'melvorF:Blacksmiths_Boots',
]);

export const thievingItemIds = crossSkillItemIds.concat([
  'melvorF:Thievers_Cape',
  'melvorF:Thieving_Skillcape',
  'melvorTotH:Superior_Thieving_Skillcape',
  'melvorF:Boots_Of_Stealth',
  'melvorTotH:Masquerade_Mask',
  'melvorF:Thiefs_Moneysack',
  'melvorF:Gloves_of_Silence',
  'melvorF:Golbin_Mask',
  'melvorF:Chapeau_Noir',
  'melvorTotH:Thieving_Shorts',
  'melvorD:Aorpheats_Signet_Ring',
  'melvorTotH:Hunters_Journal',
  'melvorTotH:Grappling_Hook',
  'melvorF:Slayer_Cowl_Master',
  'melvorF:Slayer_Leather_Body_Master',
  'melvorF:Slayer_Helmet_Master',
  'melvorF:Slayer_Platebody_Master',
  'melvorF:Slayer_Wizard_Hat_Master',
  'melvorF:Slayer_Wizard_Robes_Master',
  'melvorF:Slayer_Cowl_Legendary',
  'melvorF:Slayer_Leather_Body_Legendary',
  'melvorF:Slayer_Helmet_Legendary',
  'melvorF:Slayer_Platebody_Legendary',
  'melvorF:Slayer_Wizard_Hat_Legendary',
  'melvorF:Slayer_Wizard_Robes_Legendary',
  'melvorF:Slayer_Cowl_Mythical',
  'melvorF:Slayer_Leather_Body_Mythical',
  'melvorF:Slayer_Helmet_Mythical',
  'melvorF:Slayer_Platebody_Mythical',
  'melvorF:Slayer_Wizard_Hat_Mythical',
  'melvorF:Slayer_Wizard_Robes_Mythical',
]);

export const farmingItemIds = crossSkillItemIds.concat([
  'melvorD:Farming_Skillcape',
  'melvorTotH:Superior_Farming_Skillcape',
  'melvorF:Seed_Pouch',
  'melvorF:Bobs_Gloves',
  'melvorD:Bobs_Rake',
]);

export const fletchingItemIds = crossSkillItemIds.concat([
  'melvorF:Fletching_Skillcape',
  'melvorTotH:Superior_Fletching_Skillcape',
  'melvorTotH:Sharp_Fletcher_Gloves',
  'melvorF:Fletchers_Hat',
  'melvorF:Fletchers_Body',
  'melvorF:Fletchers_Leggings',
  'melvorF:Fletchers_Boots',
]);

export const craftingItemIds = crossSkillItemIds.concat([
  'melvorF:Crafting_Skillcape',
  'melvorTotH:Superior_Crafting_Skillcape',
  'melvorTotH:Artisan_Pouch',
  'melvorF:Crafters_Hat',
  'melvorF:Crafters_Body',
  'melvorF:Crafters_Leggings',
  'melvorF:Crafters_Boots',
]);

export const runecraftingItemIds = crossSkillItemIds.concat([
  'melvorF:Runecrafting_Skillcape',
  'melvorTotH:Superior_Runecrafting_Skillcape',
  'melvorF:Runecrafting_Pouch',
  'melvorTotH:Cool_Winds_Gloves',
  'melvorF:Runecrafter_Hat',
  'melvorF:Runecrafter_Body',
  'melvorF:Runecrafter_Leggings',
  'melvorF:Runecrafter_Boots',
]);

export const herbloreItemIds = crossSkillItemIds.concat([
  'melvorF:Herblore_Skillcape',
  'melvorTotH:Superior_Herblore_Skillcape',
  'melvorTotH:Toxic_Maker_Gloves',
  'melvorTotH:Potion_Stirrer',
  'melvorF:Potion_Makers_Hat',
  'melvorF:Potion_Makers_Body',
  'melvorF:Potion_Makers_Leggings',
  'melvorF:Potion_Makers_Boots',
]);

export const agilityItemIds = crossSkillItemIds.concat([
  'melvorF:Agility_Skillcape',
  'melvorTotH:Superior_Agility_Skillcape',
  'melvorTotH:Stamina_Pouch',
  'melvorD:Aorpheats_Signet_Ring',
  'melvorF:Performance_Enhancing_Hat',
  'melvorF:Performance_Enhancing_Body',
  'melvorF:Performance_Enhancing_Leggings',
  'melvorF:Performance_Enhancing_Boots',
]);

export const summoningItemIds = crossSkillItemIds.concat([
  'melvorF:Summoning_Skillcape',
  'melvorTotH:Superior_Summoning_Skillcape',
  'melvorTotH:Summoners_Bag',
  'melvorTotH:Summoning_Scrolls',
  'melvorF:Necromancer_Hat',
  'melvorF:Necromancer_Robes',
  'melvorF:Necromancer_Bottoms',
  'melvorF:Necromancer_Boots',
]);

export const astrologyItemIds = crossSkillItemIds.concat([
  'melvorF:Astrology_Skillcape',
  'melvorTotH:Superior_Astrology_Skillcape',
  'melvorTotH:Travellers_Compass',
  'melvorF:Star_Gazing_Hat',
  'melvorF:Star_Gazing_Body',
  'melvorF:Star_Gazing_Leggings',
  'melvorF:Star_Gazing_Boots',
]);

export const townshipItemIds = crossSkillItemIds.concat([
  'melvorF:Township_Skillcape',
  'melvorTotH:Superior_Township_Skillcape',
  'melvorF:Pirate_Captain_Hat',
]);

export const altMagicItemIds = crossSkillItemIds.concat([
  'melvorF:Amulet_Of_Incantation',
  'melvorF:Skull_Cape',
  'melvorTotH:Superior_Runecrafting_Skillcape',
  'melvorTotH:Spirit_Bag',
  'melvorF:Wizards_Scroll',
]);

const allItems = woodcuttingItemIds
  .concat(fishingItemIds);

export const relevantItems = new Set(allItems);