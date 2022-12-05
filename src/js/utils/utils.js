export const toggleCustomItem = (skill, itemId) => {
  game.minibar.toggleCustomItem(skill, game.items.equipment.getObjectByID(itemId));

  if (game.getPagesForSkill(skill)[0] === game.openPage) {
    game.minibar.setSkill(skill);
  }
};

export const skillToShortName = (skill) => {
  switch (skill) {
    case game.woodcutting:
      return 'wc';
    case game.fishing:
      return 'fish';
    case game.firemaking:
      return 'fire';
    case game.cooking:
      return 'cook';
    case game.mining:
      return 'mine';
    case game.smithing:
      return 'smth';
    case game.thieving:
      return 'thev';
    case game.farming:
      return 'farm';
    case game.fletching:
      return 'fltch';
    case game.crafting:
      return 'crft';
    case game.runecrafting:
      return 'rcrft';
    case game.herblore:
      return 'herb';
    case game.agility:
      return 'agil';
    case game.summoning:
      return 'summ';
    case game.astrology:
      return 'ast';
    case game.township:
      return 'town';
    case game.altMagic:
      return 'aMag';
  }
}

export const resetAllSkillCustomItems = () => {
  game.minibar.setCustomItemsToDefault(game.woodcutting);
  game.minibar.setCustomItemsToDefault(game.fishing);
  game.minibar.setCustomItemsToDefault(game.firemaking);
  game.minibar.setCustomItemsToDefault(game.cooking);
  game.minibar.setCustomItemsToDefault(game.mining);
  game.minibar.setCustomItemsToDefault(game.smithing);
  game.minibar.setCustomItemsToDefault(game.thieving);
  game.minibar.setCustomItemsToDefault(game.farming);
  game.minibar.setCustomItemsToDefault(game.fletching);
  game.minibar.setCustomItemsToDefault(game.crafting);
  game.minibar.setCustomItemsToDefault(game.runecrafting);
  game.minibar.setCustomItemsToDefault(game.herblore);
  game.minibar.setCustomItemsToDefault(game.agility);
  game.minibar.setCustomItemsToDefault(game.summoning);
  game.minibar.setCustomItemsToDefault(game.astrology);
  game.minibar.setCustomItemsToDefault(game.township);
  game.minibar.setCustomItemsToDefault(game.altMagic);
}
