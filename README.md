# 🌌 SkyHaven — Official Development Roadmap

> **Live Interactive Dashboard:** [https://wizinator.github.io/SkyHaven-Roadmap/](https://wizinator.github.io/SkyHaven-Roadmap/)  
> Track real-time progress, filter features by category (Farming, Building, Automation, AI), and explore upcoming milestones.

---

## 🧭 Milestone Overview

```
Phase 1: Genesis & Island Engine ───────── [████████████████████] 100% Live
Phase 2: Flora & Earth Harvest ─────────── [████████████████████] 100% Live
Phase 3: Workshop & Storage ────────────── [████████████████████] 100% Live
Phase 4: Industry & Automata ───────────── [███████████████████░]  95% Live
Phase 5: Airships & Open Skies ─────────── [█████████████░░░░░░░]  65% In Development
Phase 6: Merchant Realm & Trading ──────── [███░░░░░░░░░░░░░░░░░]  15% Planned (Next Up)
Phase 7: Wild Expansions & Relics ──────── [░░░░░░░░░░░░░░░░░░░░]   0% Future Horizon
```

---

## 📦 Phase 1: Genesis & Island Engine `[COMPLETED]`

The foundational architecture powering SkyHaven's floating realms.

- [x] **3D Grid Placement Engine:** Ultra-fast 3x3x3 stud voxel grid with integer coordinate hashing for $O(1)$ cell lookups and island perimeter bounds.
- [x] **2D+3D Greedy Block Mesher:** Merges adjacent identical standard blocks into monolithic meshes, reducing part counts and draw calls by up to 90%.
- [x] **ProfileStore Persistence:** Binary buffer serialization for instant island saving and loading with zero data loss.
- [x] **Dynamic Smart Block Transforms:** Grass auto-decays to dirt when covered; stairs automatically detect neighbours and adapt to corners and inner curves.
- [x] **Physics Spring UI:** Custom animated backpack, category tabs, and slot grid controls.

---

## 🌾 Phase 2: Flora & Earth Harvest `[COMPLETED]`

Comprehensive agriculture, natural ore generation, and forestry.

- [x] **14+ Staged Crops:** Wheat, Tomatoes, Potatoes, Carrots, Cabbage, Onions, Pumpkins, Trellis Grapes, Watermelons, Radishes, Pineapples, Cactus, Rice, and Dragonfruit.
- [x] **Agricultural Tools:** Tillers/Plows, Basic & Improved Watering Cans, and tiered Sickles (Iron, Gilded Steel, Diamond).
- [x] **Forestry & Orchards:** 7 sapling varieties (Birch, Maple, Pine, Acacia, Apple, Lemon, Avocado) with tiered felling axes and fruit wackers.
- [x] **Natural Heart Ore Nodes:** Periodic natural ore node spawning (Stone, Coal, Iron, Gold) with hardness checks and physics debris particle arcs.

---

## ⚒️ Phase 3: Workshop & Storage `[COMPLETED]`

Exploit-proof item transaction mechanics and crafting workstations.

- [x] **Atomic Inventory Ledger:** Server-authoritative transaction mutex that mathematically prevents duplication across drops, trades, and storage.
- [x] **Physical Dropped Items (Q / F):** Toss items into the world and target-pickup with cursor raycasts; LOD simulation with offstage culling and island caps.
- [x] **Animated Chest Storage:** Authoritative container chests with smooth spring-driven lid animations and shared nearby-player synchronization.
- [x] **Instant Crafting Bench:** Categorized recipe trees for tools, seeds, and industrial components.
- [x] **Continuous Processing Benches:** Smelters, Furnaces, and Composters that process raw materials into refined ingots and organic fertilizer over real-time ticks.

---

## ⚙️ Phase 4: Industry & Automata `[COMPLETED / POLISHING]`

Autonomous NPC helpers and 3D pneumatic factory pipelines.

- [x] **3D Grid A\* Pathfinder:** Custom binary min-heap A\* pathfinding over 3D terrain with stair detection and 2-block headroom clearance.
- [x] **Autonomous Villager Helpers:** Recruit Farmer Villagers (auto-till, plant, reap, and store) and Miner Villagers (seek ore nodes and mine).
- [x] **3D Factory Pipe Logistics:** 6-neighbour pneumatic pipes with automatic variant solving (End, Straight, Bend, Tee, Cross) and transparent glass inspection windows.
- [x] **Skill Masteries (Level 1–100):** Farming, Mining, and Woodcutting XP curves with unlockable tool and villager milestones.

---

## ⛵ Phase 5: Airships & The Open Skies `[IN DEVELOPMENT]`

Expanding beyond private realms into inter-island exploration.

- [x] **Persistent Dock Airships:** Server-replicated airships moored at island dock blocks.
- [ ] **Island Visiting & Permissions:** Island directory browser, guest building permissions, and blocklists. *(In Progress)*
- [ ] **Atmospheric Day/Night Cycle:** Celestial twilight lighting, wind line visualizers, and reactive foliage sway. *(In Progress)*
- [ ] **3D Island Previews:** Lightweight binary snapshot previews before teleporting. *(Testing)*

---

## 🪙 Phase 6: Merchant Realm & Trading `[PLANNED]`

A thriving player-driven economy and social trading.

- [ ] **The Floating Merchant Hub:** Central social town where players meet wandering traders, buy exotic blueprints, and gather.
- [ ] **Player Stalls & Secure Trade Windows:** Direct 2-way verified player trading sessions and island vending booths.
- [ ] **SkyHaven Currency:** Minted coins from refined ores and daily delivery orders.
- [ ] **Cosmetic Island Customization:** Banners, illuminated lanterns, and custom airship hulls.

---

## 🐉 Phase 7: Wild Expansions & Relics `[FUTURE HORIZON]`

New horizons, animal husbandry, and sky dungeon expeditions.

- [ ] **Pasture & Animal Husbandry:** Chickens, Sheep, and Cows with fenced pastures, feeding troughs, and Rancher Villagers.
- [ ] **Forgotten Sky Dungeons & Bosses:** Mysterious storm islands featuring PvE monster encounters, ancient golems, and legendary loot.
- [ ] **Sprinklers & Advanced Automation:** Automatic crop watering grids, item splitters, and conveyor belts.

---

## 🚀 How to Enable GitHub Pages

To make the interactive roadmap website live on GitHub:

1. Push your latest commits to GitHub (`git push origin main`).
2. Go to your repository on GitHub: `https://github.com/Wizinator/SkyHaven-Roadmap`.
3. Click **Settings** ➔ **Pages** (under "Code and automation").
4. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` (or your default branch) and select `/ (root)` as the folder.
   - Click **Save**.
5. Within 1–2 minutes, your roadmap will be live at:  
   👉 **`https://wizinator.github.io/SkyHaven-Roadmap/`**
