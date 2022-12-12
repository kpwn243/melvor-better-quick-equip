import { registeredItemIds, relevantItems } from "./constants.js";
import { createAllSettingsSections } from "./settings.mjs";

export async function setup (ctx) {

  ctx.onCharacterLoaded(async () => {
    registeredItemIds.set(game.woodcutting, new Set());
    registeredItemIds.set(game.fishing, new Set());
    registeredItemIds.set(game.firemaking, new Set());
    registeredItemIds.set(game.cooking, new Set());
    registeredItemIds.set(game.mining, new Set());
    registeredItemIds.set(game.smithing, new Set());
    registeredItemIds.set(game.thieving, new Set());
    registeredItemIds.set(game.farming, new Set());
    registeredItemIds.set(game.fletching, new Set());
    registeredItemIds.set(game.crafting, new Set());
    registeredItemIds.set(game.runecrafting, new Set());
    registeredItemIds.set(game.herblore, new Set());
    registeredItemIds.set(game.agility, new Set());
    registeredItemIds.set(game.summoning, new Set());
    registeredItemIds.set(game.astrology, new Set());
    registeredItemIds.set(game.township, new Set());
    registeredItemIds.set(game.altMagic, new Set());
    createAllSettingsSections(ctx);
  })

  ctx.patch(Bank, 'addItem').after((returnValue, item, quantity, logLost, found, ignoreSpace, notify) => {
    if (relevantItems.has(item.id)) {
      createAllSettingsSections(ctx);
    }
    return returnValue;
  })
}
