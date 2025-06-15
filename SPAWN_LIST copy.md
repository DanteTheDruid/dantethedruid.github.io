# Twitch Integration Plus - Spawn List

This document describes the spawnable mob system for Twitch Integration Plus.

## Usage (vNext)

- **Command**: `!spawn <tier>`
  - `<tier>` can be `harmless`, `common`, `rare`, or `deadly`
  - Example: `!spawn harmless` — Spawns a random harmless critter
  - Example: `!spawn common` — Spawns a random common enemy
  - Example: `!spawn rare` — Spawns a random rare enemy
  - Example: `!spawn deadly` — Spawns a random deadly enemy
- **Bosses**: Use the dedicated boss command (see in-game help) to spawn bosses.
- **View Available**: `!spawnlist` (shows all possible mobs by tier and your progression)

## How It Works

- You can no longer spawn specific mobs by name. Instead, you pick a tier and the system will choose a random mob from that tier, filtered by your game progression.
- Each tier has a configurable token cost (see your mod config):
  - **Harmless Mob Spawn Price**
  - **Common Mob Spawn Price**
  - **Rare Mob Spawn Price**
  - **Deadly Mob Spawn Price**
- Bosses are not included in these tiers and are spawned via a separate command.

---

## Mob Tiers

### Harmless Tier
Includes peaceful critters and non-hostile mobs:
- Bunny, goldfish, bird, squirrel, penguin, frog, duck, firefly, butterfly, snail, corrupt goldfish

### Common Tier
Includes basic slimes and weak enemies:
- Slimes (blue, green, purple, yellow, red, jungle, ice), zombie, demon eye, cave bat, eater of souls, crab, piranha, corrupt bunny

### Rare Tier
Includes stronger pre-hardmode enemies, uncommon hardmode enemies, and more:
- Skeletons, hornets, jungle/dungeon/goblin enemies, unicorn, pixie, hardmode enemies, etc.

### Deadly Tier
Includes the most dangerous non-boss enemies, mini-bosses, and rare hardmode threats:
- Wraith, gastropod, possessed armor, corruptor, clinger, werewolf, mimic, spiked ice slime, deadly jungle/ocean/cavern enemies, etc.

---

## Token Cost Summary

| Config Tier             | Mob Category                                 |
|------------------------|----------------------------------------------|
| HarmlessMobSpawnPrice  | Peaceful critters, non-hostile mobs           |
| CommonMobSpawnPrice    | Basic slimes, weak enemies                    |
| RareMobSpawnPrice      | Stronger pre-hardmode, uncommon hardmode      |
| DeadlyMobSpawnPrice    | Deadliest non-bosses, mini-bosses, rare mobs  |

See your mod config for the exact values.

---

## Special Notes

- **Game Masters** can spawn any mob regardless of progression for free
- Spawned mobs appear around the player using smart positioning to avoid blocks
- Some mobs spawn in groups (multiple units for lower cost)
- Special visual and audio effects play when mobs are spawned
- **Bosses** are not included in the spawn tiers and must be spawned via the boss redeeem

---

*This system is designed for balance and variety. You never know exactly what will appear!*

Generated from TwitchIntegrationPlus mod code 