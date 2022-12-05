const crossSkillItemIds = [
  {id: 'melvorD:Firemaking_Skillcape', name: '100'},
  {id: 'melvorTotH:Superior_Firemaking_Skillcape', name: '101'},
  {id: 'melvorF:Max_Skillcape', name: '102'},
  {id: 'melvorTotH:Superior_Max_Skillcape', name: '102'},
  {id: 'melvorF:Cape_of_Completion', name: '104'},
  {id: 'melvorTotH:Superior_Cape_Of_Completion', name: '105'},
  {id: 'melvorD:Ancient_Ring_Of_Skills', name: '106'},
  {id: 'melvorD:Ancient_Ring_Of_Mastery', name: '107'},
  {id: 'melvorF:Skillers_Hat', name: '108'},
  {id: 'melvorF:Skillers_Body', name: '109'},
  {id: 'melvorF:Skillers_Leggings', name: '110'},
  {id: 'melvorF:Skillers_Boots', name: '111'},
  {id: 'melvorF:Clown_Hat', name: '112'},
];

export const registeredItemIds = new Map();

export const woodcuttingItemIds = crossSkillItemIds.concat([
  {id: 'melvorF:Woodcutters_Boots', name: '1'},
  {id: 'melvorD:Woodcutting_Skillcape', name: '2'},
  {id: 'melvorF:Woodcutters_Hat', name: '3'},
  {id: 'melvorF:Lumberjacks_Top', name: '4'},
  {id: 'melvorF:Woodcutters_Body', name: '5'},
  {id: 'melvorF:Woodcutters_Leggings', name: '6'},
  {id: 'melvorTotH:Crown_of_Madremonte', name: '7'},
  {id: 'melvorTotH:Superior_Woodcutting_Skillcape', name: '8'},
  {id: 'melvorTotH:Meteorite_Woodcutting_Ring', name: '9'},
  {id: 'melvorTotH:Meteorite_Woodcutting_Amulet', name: '10'},
]);

export const fishingItemIds = crossSkillItemIds.concat([
  {id: 'melvorD:Fishing_Skillcape', name: '1'},
  {id: 'melvorTotH:Superior_Fishing_Skillcape', name: '2'},
  {id: 'melvorF:Sailors_Top', name: '3'},
  {id: 'melvorD:Amulet_of_Fishing', name: '4'},
  {id: 'melvorD:Pirates_Lost_Ring', name: '5'},
  {id: 'melvorTotH:Burning_Reel', name: '6'},
  {id: 'melvorF:Fishing_Hook', name: '7'},
  {id: 'melvorTotH:Golden_Reel', name: '8'},
  {id: 'melvorF:Fishermans_Hat', name: '9'},
  {id: 'melvorF:Fishermans_Body', name: '10'},
  {id: 'melvorF:Fishermans_Leggings', name: '11'},
  {id: 'melvorF:Fishermans_Boots', name: '12'},
]);

export const firemakingItemIds = crossSkillItemIds.concat([
  {id: 'melvorTotH:Burning_Amulet_of_Charcoal', name: '1'},
  {id: 'melvorD:Burning_Amulet_of_Gold', name: '2'},
  {id: 'melvorD:Burning_Amulet_of_Stardust', name: '3'},
  {id: 'melvorD:Burning_Amulet_of_XP', name: '4'},
  {id: 'melvorTotH:Kindling_Pouch', name: '5'},
  {id: 'melvorF:Warm_Beanie', name: '6'},
  {id: 'melvorD:Aorpheats_Signet_Ring', name: '7'},
  {id: 'melvorF:Burning_Mans_Hat', name: '8'},
  {id: 'melvorF:Burning_Mans_Body', name: '9'},
  {id: 'melvorF:Burning_Mans_Leggings', name: '10'},
  {id: 'melvorF:Burning_Mans_Boots', name: '11'},
]);

export const cookingItemIds = crossSkillItemIds.concat([
  {id: 'melvorD:Cooking_Skillcape', name: '1'},
  {id: 'melvorTotH:Superior_Cooking_Skillcape', name: '2'},
  {id: 'melvorTotH:Chefs_Bag', name: '3'},
  {id: 'melvorF:Chefs_Hat', name: '4'},
  {id: 'melvorF:Cooking_Apron', name: '5'},
  {id: 'melvorTotH:Mortar_and_Pestle', name: '6'},
  {id: 'melvorF:Chefs_Spoon', name: '7'},
]);

export const miningItemIds = crossSkillItemIds.concat([
  {id: 'melvorD:Mining_Skillcape', name: '1'},
  {id: 'melvorTotH:Superior_Mining_Skillcape', name: '2'},
  {id: 'melvorF:Miners_Helmet', name: '3'},
  {id: 'melvorF:Miners_Hat', name: '4'},
  {id: 'melvorF:Miners_Body', name: '5'},
  {id: 'melvorF:Miners_Leggings', name: '6'},
  {id: 'melvorF:Miners_Boots', name: '7'},
]);

export const smithingItemIds = crossSkillItemIds.concat([
  {id: 'melvorD:Smithing_Skillcape', name: '1'},
  {id: 'melvorTotH:Superior_Smithing_Skillcape', name: '2'},
  {id: 'melvorTotH:Blacksmiths_Gloves', name: '3'},
  {id: 'melvorF:Blacksmiths_Hat', name: '4'},
  {id: 'melvorF:Blacksmiths_Body', name: '5'},
  {id: 'melvorF:Blacksmiths_Leggings', name: '6'},
  {id: 'melvorF:Blacksmiths_Boots', name: '7'},
]);

export const thievingItemIds = crossSkillItemIds.concat([
  {id: 'melvorF:Thievers_Cape', name: '1'},
  {id: 'melvorF:Thieving_Skillcape', name: '2'},
  {id: 'melvorTotH:Superior_Thieving_Skillcape', name: '3'},
  {id: 'melvorF:Boots_Of_Stealth', name: '4'},
  {id: 'melvorTotH:Masquerade_Mask', name: '5'},
  {id: 'melvorF:Thiefs_Moneysack', name: '6'},
  {id: 'melvorF:Gloves_of_Silence', name: '7'},
  {id: 'melvorF:Golbin_Mask', name: '8'},
  {id: 'melvorF:Chapeau_Noir', name: '9'},
  {id: 'melvorTotH:Thieving_Shorts', name: '10'},
  {id: 'melvorD:Aorpheats_Signet_Ring', name: '11'},
  {id: 'melvorTotH:Hunters_Journal', name: '12'},
  {id: 'melvorTotH:Grappling_Hook', name: '13'},
  {id: 'melvorF:Slayer_Cowl_Master', name: '14'},
  {id: 'melvorF:Slayer_Leather_Body_Master', name: '15'},
  {id: 'melvorF:Slayer_Helmet_Master', name: '16'},
  {id: 'melvorF:Slayer_Platebody_Master', name: '17'},
  {id: 'melvorF:Slayer_Wizard_Hat_Master', name: '18'},
  {id: 'melvorF:Slayer_Wizard_Robes_Master', name: '19'},
  {id: 'melvorF:Slayer_Cowl_Legendary', name: '20'},
  {id: 'melvorF:Slayer_Leather_Body_Legendary', name: '21'},
  {id: 'melvorF:Slayer_Helmet_Legendary', name: '22'},
  {id: 'melvorF:Slayer_Platebody_Legendary', name: '23'},
  {id: 'melvorF:Slayer_Wizard_Hat_Legendary', name: '24'},
  {id: 'melvorF:Slayer_Wizard_Robes_Legendary', name: '25'},
  {id: 'melvorF:Slayer_Cowl_Mythical', name: '26'},
  {id: 'melvorF:Slayer_Leather_Body_Mythical', name: '27'},
  {id: 'melvorF:Slayer_Helmet_Mythical', name: '28'},
  {id: 'melvorF:Slayer_Platebody_Mythical', name: '29'},
  {id: 'melvorF:Slayer_Wizard_Hat_Mythical', name: '30'},
  {id: 'melvorF:Slayer_Wizard_Robes_Mythical', name: '31'},
]);

export const farmingItemIds = crossSkillItemIds.concat([
  {id: 'melvorD:Farming_Skillcape', name: '1'},
  {id: 'melvorTotH:Superior_Farming_Skillcape', name: '2'},
  {id: 'melvorF:Seed_Pouch', name: '3'},
  {id: 'melvorF:Bobs_Gloves', name: '4'},
  {id: 'melvorD:Bobs_Rake', name: '5'},
]);

export const fletchingItemIds = crossSkillItemIds.concat([
  {id: 'melvorF:Fletching_Skillcape', name: '1'},
  {id: 'melvorTotH:Superior_Fletching_Skillcape', name: '2'},
  {id: 'melvorTotH:Sharp_Fletcher_Gloves', name: '3'},
  {id: 'melvorF:Fletchers_Hat', name: '4'},
  {id: 'melvorF:Fletchers_Body', name: '5'},
  {id: 'melvorF:Fletchers_Leggings', name: '6'},
  {id: 'melvorF:Fletchers_Boots', name: '7'},
]);

export const craftingItemIds = crossSkillItemIds.concat([
  {id: 'melvorF:Crafting_Skillcape', name: '1'},
  {id: 'melvorTotH:Superior_Crafting_Skillcape', name: '2'},
  {id: 'melvorTotH:Artisan_Pouch', name: '3'},
  {id: 'melvorF:Crafters_Hat', name: '4'},
  {id: 'melvorF:Crafters_Body', name: '5'},
  {id: 'melvorF:Crafters_Leggings', name: '6'},
  {id: 'melvorF:Crafters_Boots', name: '7'},
]);

export const runecraftingItemIds = crossSkillItemIds.concat([
  {id: 'melvorF:Runecrafting_Skillcape', name: '1'},
  {id: 'melvorTotH:Superior_Runecrafting_Skillcape', name: '2'},
  {id: 'melvorF:Runecrafting_Pouch', name: '3'},
  {id: 'melvorTotH:Cool_Winds_Gloves', name: '4'},
  {id: 'melvorF:Runecrafter_Hat', name: '5'},
  {id: 'melvorF:Runecrafter_Body', name: '6'},
  {id: 'melvorF:Runecrafter_Leggings', name: '7'},
  {id: 'melvorF:Runecrafter_Boots', name: '8'},
]);

export const herbloreItemIds = crossSkillItemIds.concat([
  {id: 'melvorF:Herblore_Skillcape', name: '1'},
  {id: 'melvorTotH:Superior_Herblore_Skillcape', name: '2'},
  {id: 'melvorTotH:Toxic_Maker_Gloves', name: '3'},
  {id: 'melvorTotH:Potion_Stirrer', name: '4'},
  {id: 'melvorF:Potion_Makers_Hat', name: '5'},
  {id: 'melvorF:Potion_Makers_Body', name: '6'},
  {id: 'melvorF:Potion_Makers_Leggings', name: '7'},
  {id: 'melvorF:Potion_Makers_Boots', name: '8'},
]);

export const agilityItemIds = crossSkillItemIds.concat([
  {id: 'melvorF:Agility_Skillcape', name: '1'},
  {id: 'melvorTotH:Superior_Agility_Skillcape', name: '2'},
  {id: 'melvorTotH:Stamina_Pouch', name: '3'},
  {id: 'melvorD:Aorpheats_Signet_Ring', name: '4'},
  {id: 'melvorF:Performance_Enhancing_Hat', name: '5'},
  {id: 'melvorF:Performance_Enhancing_Body', name: '6'},
  {id: 'melvorF:Performance_Enhancing_Leggings', name: '7'},
  {id: 'melvorF:Performance_Enhancing_Boots', name: '8'},
]);

export const summoningItemIds = crossSkillItemIds.concat([
  {id: 'melvorF:Summoning_Skillcape', name: '1'},
  {id: 'melvorTotH:Superior_Summoning_Skillcape', name: '2'},
  {id: 'melvorTotH:Summoners_Bag', name: '3'},
  {id: 'melvorTotH:Summoning_Scrolls', name: '4'},
  {id: 'melvorF:Necromancer_Hat', name: '5'},
  {id: 'melvorF:Necromancer_Robes', name: '6'},
  {id: 'melvorF:Necromancer_Bottoms', name: '7'},
  {id: 'melvorF:Necromancer_Boots', name: '8'},
]);

export const astrologyItemIds = crossSkillItemIds.concat([
  {id: 'melvorF:Astrology_Skillcape', name: '1'},
  {id: 'melvorTotH:Superior_Astrology_Skillcape', name: '2'},
  {id: 'melvorTotH:Travellers_Compass', name: '3'},
  {id: 'melvorF:Star_Gazing_Hat', name: '4'},
  {id: 'melvorF:Star_Gazing_Body', name: '5'},
  {id: 'melvorF:Star_Gazing_Leggings', name: '6'},
  {id: 'melvorF:Star_Gazing_Boots', name: '7'},
]);

export const townshipItemIds = crossSkillItemIds.concat([
  {id: 'melvorF:Township_Skillcape', name: '1'},
  {id: 'melvorTotH:Superior_Township_Skillcape', name: '2'},
  {id: 'melvorF:Pirate_Captain_Hat', name: '3'},
]);

export const altMagicItemIds = crossSkillItemIds.concat([
  {id: 'melvorF:Amulet_Of_Incantation', name: '1'},
  {id: 'melvorF:Skull_Cape', name: '2'},
  {id: 'melvorTotH:Superior_Runecrafting_Skillcape', name: '3'},
  {id: 'melvorTotH:Spirit_Bag', name: '4'},
  {id: 'melvorF:Wizards_Scroll', name: '5'},
]);

const allItems = woodcuttingItemIds
  .concat(fishingItemIds);

export const relevantItems = new Set(allItems);
