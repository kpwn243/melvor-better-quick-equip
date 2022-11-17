export const toggleCustomItem = (skill, itemId) => {
  game.minibar.toggleCustomItem(skill, game.items.equipment.getObjectByID(itemId));

  if (game.getPagesForSkill(skill)[0] === game.openPage) {
    game.minibar.setSkill(skill);
  }
};

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