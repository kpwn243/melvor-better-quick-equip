import {
  agilityItemIds,
  altMagicItemIds,
  astrologyItemIds,
  cookingItemIds,
  craftingItemIds,
  farmingItemIds,
  firemakingItemIds,
  fishingItemIds,
  fletchingItemIds,
  herbloreItemIds,
  miningItemIds,
  registeredItemIds,
  runecraftingItemIds,
  smithingItemIds,
  summoningItemIds,
  thievingItemIds,
  townshipItemIds,
  woodcuttingItemIds
} from "./constants.js";
import {skillToShortName, toggleCustomItem} from "./utils/utils.js";

export const createAllSettingsSections = (ctx) => {
  createSettingsSection(ctx, game.woodcutting, woodcuttingItemIds);
  createSettingsSection(ctx, game.fishing, fishingItemIds);
  createSettingsSection(ctx, game.firemaking, firemakingItemIds);
  createSettingsSection(ctx, game.cooking, cookingItemIds);
  createSettingsSection(ctx, game.mining, miningItemIds);
  createSettingsSection(ctx, game.smithing, smithingItemIds);
  createSettingsSection(ctx, game.thieving, thievingItemIds);
  createSettingsSection(ctx, game.farming, farmingItemIds);
  createSettingsSection(ctx, game.fletching, fletchingItemIds);
  createSettingsSection(ctx, game.crafting, craftingItemIds);
  createSettingsSection(ctx, game.runecrafting, runecraftingItemIds);
  createSettingsSection(ctx, game.herblore, herbloreItemIds);
  createSettingsSection(ctx, game.agility, agilityItemIds);
  createSettingsSection(ctx, game.summoning, summoningItemIds);
  createSettingsSection(ctx, game.astrology, astrologyItemIds);
  createSettingsSection(ctx, game.township, townshipItemIds);
  createSettingsSection(ctx, game.altMagic, altMagicItemIds);
}

export const createSettingsSection = (ctx, skill, itemIds) => {

  const items = itemIds
    .map((itemDef) => {
      const item = game.items.equipment.getObjectByID(itemDef.id);
      if (typeof item === "undefined") {
        // Item not found so most likely does not have TotH
        return null;
      }
      const hasFoundItem = game.stats.itemFindCount(item);
      const hasItemInBank = game.bank.hasItem(item);
      const hasItemInEquipmentSlot = game.combat.player.checkEquipmentSetsForItem(item);
      if (hasFoundItem > 0 && (hasItemInBank || hasItemInEquipmentSlot)) {
        const selected = game.minibar.isCustomItemSet(skill, item);

        // return null if item already registered
        if (registeredItemIds.get(skill).has(item)) {
          return null;
        }

        registeredItemIds.get(skill).add(item);
        return {
          type: "switch",
          name: `${skillToShortName(skill)}-${itemDef.name}`,
          label: item.name,
          default: selected,
          onChange: () => toggleCustomItem(skill, item)
        };
      }
      return null;
    })
    .filter((item) => item !== null);

  ctx.settings.section(skill.name).add(items);
}
