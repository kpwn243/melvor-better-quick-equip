const crossSkillItemIds = [
  {id: 'melvorD:Firemaking_Skillcape', name: '9900'},
  {id: 'melvorTotH:Superior_Firemaking_Skillcape', name: '9901'},
  {id: 'melvorF:Max_Skillcape', name: '9902'},
  {id: 'melvorTotH:Superior_Max_Skillcape', name: '9902'},
  {id: 'melvorF:Cape_of_Completion', name: '9904'},
  {id: 'melvorTotH:Superior_Cape_Of_Completion', name: '9905'},
  {id: 'melvorD:Ancient_Ring_Of_Skills', name: '9906'},
  {id: 'melvorD:Ancient_Ring_Of_Mastery', name: '9907'},
  {id: 'melvorF:Skillers_Hat', name: '9908'},
  {id: 'melvorF:Skillers_Body', name: '9909'},
  {id: 'melvorF:Skillers_Leggings', name: '9910'},
  {id: 'melvorF:Skillers_Boots', name: '9911'},
  {id: 'melvorF:Clown_Hat', name: '9912'},
  {id: 'melvorD:Clue_Chasers_Insignia', name: '9913'},
];

export const registeredItemIds = new Map();

export const woodcuttingItemIds = crossSkillItemIds.concat([
  {id: 'melvorF:Woodcutters_Boots', name: '11'},
  {id: 'melvorD:Woodcutting_Skillcape', name: '12'},
  {id: 'melvorF:Woodcutters_Hat', name: '13'},
  {id: 'melvorF:Lumberjacks_Top', name: '14'},
  {id: 'melvorF:Woodcutters_Body', name: '15'},
  {id: 'melvorF:Woodcutters_Leggings', name: '16'},
  {id: 'melvorTotH:Crown_of_Madremonte', name: '17'},
  {id: 'melvorTotH:Superior_Woodcutting_Skillcape', name: '18'},
  {id: 'melvorTotH:Meteorite_Woodcutting_Ring', name: '19'},
  {id: 'melvorTotH:Meteorite_Woodcutting_Amulet', name: '110'},
]);

export const fishingItemIds = crossSkillItemIds.concat([
  {id: 'melvorD:Fishing_Skillcape', name: '21'},
  {id: 'melvorTotH:Superior_Fishing_Skillcape', name: '22'},
  {id: 'melvorF:Sailors_Top', name: '23'},
  {id: 'melvorD:Amulet_of_Fishing', name: '24'},
  {id: 'melvorD:Pirates_Lost_Ring', name: '25'},
  {id: 'melvorTotH:Burning_Reel', name: '26'},
  {id: 'melvorF:Fishing_Hook', name: '27'},
  {id: 'melvorTotH:Golden_Reel', name: '28'},
  {id: 'melvorF:Fishermans_Hat', name: '29'},
  {id: 'melvorF:Fishermans_Body', name: '210'},
  {id: 'melvorF:Fishermans_Leggings', name: '211'},
  {id: 'melvorF:Fishermans_Boots', name: '212'},
]);

export const firemakingItemIds = crossSkillItemIds.concat([
  {id: 'melvorTotH:Burning_Amulet_of_Charcoal', name: '31'},
  {id: 'melvorD:Burning_Amulet_of_Gold', name: '32'},
  {id: 'melvorD:Burning_Amulet_of_Stardust', name: '33'},
  {id: 'melvorD:Burning_Amulet_of_XP', name: '34'},
  {id: 'melvorTotH:Kindling_Pouch', name: '35'},
  {id: 'melvorF:Warm_Beanie', name: '36'},
  {id: 'melvorD:Aorpheats_Signet_Ring', name: '37'},
  {id: 'melvorF:Burning_Mans_Hat', name: '38'},
  {id: 'melvorF:Burning_Mans_Body', name: '39'},
  {id: 'melvorF:Burning_Mans_Leggings', name: '310'},
  {id: 'melvorF:Burning_Mans_Boots', name: '311'},
  {id: 'melvorD:Crown_of_Rhaelyx', name: '312'},
]);

export const cookingItemIds = crossSkillItemIds.concat([
  {id: 'melvorD:Cooking_Skillcape', name: '41'},
  {id: 'melvorTotH:Superior_Cooking_Skillcape', name: '42'},
  {id: 'melvorTotH:Chefs_Bag', name: '43'},
  {id: 'melvorF:Chefs_Hat', name: '44'},
  {id: 'melvorF:Cooking_Apron', name: '45'},
  {id: 'melvorTotH:Mortar_and_Pestle', name: '46'},
  {id: 'melvorF:Chefs_Spoon', name: '47'},
  {id: 'melvorD:Crown_of_Rhaelyx', name: '48'},
]);

export const miningItemIds = crossSkillItemIds.concat([
  {id: 'melvorD:Mining_Skillcape', name: '51'},
  {id: 'melvorTotH:Superior_Mining_Skillcape', name: '52'},
  {id: 'melvorF:Miners_Helmet', name: '53'},
  {id: 'melvorF:Miners_Hat', name: '54'},
  {id: 'melvorF:Miners_Body', name: '55'},
  {id: 'melvorF:Miners_Leggings', name: '56'},
  {id: 'melvorF:Miners_Boots', name: '57'},
]);

export const smithingItemIds = crossSkillItemIds.concat([
  {id: 'melvorD:Smithing_Skillcape', name: '61'},
  {id: 'melvorTotH:Superior_Smithing_Skillcape', name: '62'},
  {id: 'melvorTotH:Blacksmiths_Gloves', name: '63'},
  {id: 'melvorF:Blacksmiths_Hat', name: '64'},
  {id: 'melvorF:Blacksmiths_Body', name: '65'},
  {id: 'melvorF:Blacksmiths_Leggings', name: '66'},
  {id: 'melvorF:Blacksmiths_Boots', name: '67'},
  {id: 'melvorD:Crown_of_Rhaelyx', name: '68'},
]);

export const thievingItemIds = crossSkillItemIds.concat([
  {id: 'melvorF:Thievers_Cape', name: '71'},
  {id: 'melvorF:Thieving_Skillcape', name: '72'},
  {id: 'melvorTotH:Superior_Thieving_Skillcape', name: '73'},
  {id: 'melvorF:Boots_Of_Stealth', name: '74'},
  {id: 'melvorTotH:Masquerade_Mask', name: '75'},
  {id: 'melvorF:Thiefs_Moneysack', name: '76'},
  {id: 'melvorF:Gloves_of_Silence', name: '77'},
  {id: 'melvorF:Golbin_Mask', name: '78'},
  {id: 'melvorF:Chapeau_Noir', name: '79'},
  {id: 'melvorTotH:Thieving_Shorts', name: '710'},
  {id: 'melvorD:Aorpheats_Signet_Ring', name: '711'},
  {id: 'melvorTotH:Hunters_Journal', name: '712'},
  {id: 'melvorTotH:Grappling_Hook', name: '713'},
  {id: 'melvorF:Slayer_Cowl_Master', name: '714'},
  {id: 'melvorF:Slayer_Leather_Body_Master', name: '715'},
  {id: 'melvorF:Slayer_Helmet_Master', name: '716'},
  {id: 'melvorF:Slayer_Platebody_Master', name: '717'},
  {id: 'melvorF:Slayer_Wizard_Hat_Master', name: '718'},
  {id: 'melvorF:Slayer_Wizard_Robes_Master', name: '719'},
  {id: 'melvorF:Slayer_Cowl_Legendary', name: '720'},
  {id: 'melvorF:Slayer_Leather_Body_Legendary', name: '721'},
  {id: 'melvorF:Slayer_Helmet_Legendary', name: '722'},
  {id: 'melvorF:Slayer_Platebody_Legendary', name: '723'},
  {id: 'melvorF:Slayer_Wizard_Hat_Legendary', name: '724'},
  {id: 'melvorF:Slayer_Wizard_Robes_Legendary', name: '725'},
  {id: 'melvorF:Slayer_Cowl_Mythical', name: '726'},
  {id: 'melvorF:Slayer_Leather_Body_Mythical', name: '727'},
  {id: 'melvorF:Slayer_Helmet_Mythical', name: '728'},
  {id: 'melvorF:Slayer_Platebody_Mythical', name: '729'},
  {id: 'melvorF:Slayer_Wizard_Hat_Mythical', name: '730'},
  {id: 'melvorF:Slayer_Wizard_Robes_Mythical', name: '731'},
]);

export const farmingItemIds = crossSkillItemIds.concat([
  {id: 'melvorD:Farming_Skillcape', name: '81'},
  {id: 'melvorTotH:Superior_Farming_Skillcape', name: '82'},
  {id: 'melvorF:Seed_Pouch', name: '83'},
  {id: 'melvorF:Bobs_Gloves', name: '84'},
  {id: 'melvorD:Bobs_Rake', name: '85'},
]);

export const fletchingItemIds = crossSkillItemIds.concat([
  {id: 'melvorF:Fletching_Skillcape', name: '91'},
  {id: 'melvorTotH:Superior_Fletching_Skillcape', name: '92'},
  {id: 'melvorTotH:Sharp_Fletcher_Gloves', name: '93'},
  {id: 'melvorF:Fletchers_Hat', name: '94'},
  {id: 'melvorF:Fletchers_Body', name: '95'},
  {id: 'melvorF:Fletchers_Leggings', name: '96'},
  {id: 'melvorF:Fletchers_Boots', name: '97'},
  {id: 'melvorD:Crown_of_Rhaelyx', name: '98'},
]);

export const craftingItemIds = crossSkillItemIds.concat([
  {id: 'melvorF:Crafting_Skillcape', name: '101'},
  {id: 'melvorTotH:Superior_Crafting_Skillcape', name: '102'},
  {id: 'melvorTotH:Artisan_Pouch', name: '103'},
  {id: 'melvorF:Crafters_Hat', name: '104'},
  {id: 'melvorF:Crafters_Body', name: '105'},
  {id: 'melvorF:Crafters_Leggings', name: '106'},
  {id: 'melvorF:Crafters_Boots', name: '107'},
  {id: 'melvorD:Crown_of_Rhaelyx', name: '108'},
]);

export const runecraftingItemIds = crossSkillItemIds.concat([
  {id: 'melvorF:Runecrafting_Skillcape', name: '111'},
  {id: 'melvorTotH:Superior_Runecrafting_Skillcape', name: '112'},
  {id: 'melvorF:Runecrafting_Pouch', name: '113'},
  {id: 'melvorTotH:Cool_Winds_Gloves', name: '114'},
  {id: 'melvorF:Runecrafter_Hat', name: '115'},
  {id: 'melvorF:Runecrafter_Body', name: '116'},
  {id: 'melvorF:Runecrafter_Leggings', name: '117'},
  {id: 'melvorF:Runecrafter_Boots', name: '118'},
  {id: 'melvorD:Crown_of_Rhaelyx', name: '119'},
]);

export const herbloreItemIds = crossSkillItemIds.concat([
  {id: 'melvorF:Herblore_Skillcape', name: '121'},
  {id: 'melvorTotH:Superior_Herblore_Skillcape', name: '122'},
  {id: 'melvorTotH:Toxic_Maker_Gloves', name: '123'},
  {id: 'melvorTotH:Potion_Stirrer', name: '124'},
  {id: 'melvorF:Potion_Makers_Hat', name: '125'},
  {id: 'melvorF:Potion_Makers_Body', name: '126'},
  {id: 'melvorF:Potion_Makers_Leggings', name: '127'},
  {id: 'melvorF:Potion_Makers_Boots', name: '128'},
  {id: 'melvorD:Crown_of_Rhaelyx', name: '129'},
]);

export const agilityItemIds = crossSkillItemIds.concat([
  {id: 'melvorF:Agility_Skillcape', name: '131'},
  {id: 'melvorTotH:Superior_Agility_Skillcape', name: '132'},
  {id: 'melvorTotH:Stamina_Pouch', name: '133'},
  {id: 'melvorD:Aorpheats_Signet_Ring', name: '134'},
  {id: 'melvorF:Performance_Enhancing_Hat', name: '135'},
  {id: 'melvorF:Performance_Enhancing_Body', name: '136'},
  {id: 'melvorF:Performance_Enhancing_Leggings', name: '137'},
  {id: 'melvorF:Performance_Enhancing_Boots', name: '138'},
]);

export const summoningItemIds = crossSkillItemIds.concat([
  {id: 'melvorF:Summoning_Skillcape', name: '141'},
  {id: 'melvorTotH:Superior_Summoning_Skillcape', name: '142'},
  {id: 'melvorTotH:Summoners_Bag', name: '143'},
  {id: 'melvorTotH:Summoning_Scrolls', name: '144'},
  {id: 'melvorF:Necromancer_Hat', name: '145'},
  {id: 'melvorF:Necromancer_Robes', name: '146'},
  {id: 'melvorF:Necromancer_Bottoms', name: '147'},
  {id: 'melvorF:Necromancer_Boots', name: '148'},
  {id: 'melvorD:Crown_of_Rhaelyx', name: '149'},
]);

export const astrologyItemIds = crossSkillItemIds.concat([
  {id: 'melvorF:Astrology_Skillcape', name: '151'},
  {id: 'melvorTotH:Superior_Astrology_Skillcape', name: '152'},
  {id: 'melvorTotH:Travellers_Compass', name: '153'},
  {id: 'melvorF:Star_Gazing_Hat', name: '154'},
  {id: 'melvorF:Star_Gazing_Body', name: '155'},
  {id: 'melvorF:Star_Gazing_Leggings', name: '156'},
  {id: 'melvorF:Star_Gazing_Boots', name: '157'},
]);

export const townshipItemIds = crossSkillItemIds.concat([
  {id: 'melvorF:Township_Skillcape', name: '161'},
  {id: 'melvorTotH:Superior_Township_Skillcape', name: '162'},
  {id: 'melvorF:Pirate_Captain_Hat', name: '163'},
]);

export const altMagicItemIds = crossSkillItemIds.concat([
  {id: 'melvorF:Amulet_Of_Incantation', name: '171'},
  {id: 'melvorF:Skull_Cape', name: '172'},
  {id: 'melvorTotH:Superior_Runecrafting_Skillcape', name: '173'},
  {id: 'melvorTotH:Spirit_Bag', name: '174'},
  {id: 'melvorF:Wizards_Scroll', name: '175'},
]);

const allItems = woodcuttingItemIds
  .concat(fishingItemIds);

export const relevantItems = new Set(allItems);
