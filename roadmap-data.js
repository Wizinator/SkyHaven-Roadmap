// SkyHaven Roadmap Data Source
// Automatically loaded by docs/app.js for the player-facing roadmap dashboard.

const ROADMAP_DATA = {
  gameTitle: "SkyHaven",
  subtitle: "Floating Islands, Thriving Agriculture, Factory Automation & Sky Expeditions",
  version: "Alpha v0.8.2",
  lastUpdated: "October 2026",
  links: {
    github: "https://github.com/Wizinator/SkyHaven-Roadmap",
    issues: "https://github.com/Wizinator/SkyHaven-Roadmap/issues",
    roblox: "https://www.roblox.com/games/",
    discord: "#"
  },
  stats: {
    totalFeatures: 28,
    completedFeatures: 17,
    inProgressFeatures: 4,
    plannedFeatures: 7
  },
  phases: [
    {
      id: "phase-1",
      number: "01",
      title: "Genesis & Island Engine",
      tagline: "High-performance voxel grid & persistent floating realms",
      status: "completed",
      completionPercentage: 100,
      icon: "island",
      summary: "Full 3D grid placement architecture, greedy chunk meshing for lag-free building, and zero-data-loss island persistence.",
      features: [
        {
          id: "f-grid",
          title: "3D Grid Placement Engine",
          category: "Building",
          status: "completed",
          badge: "Live",
          description: "Ultra-fast 3D voxel grid system with 3x3x3 stud cells, integer coordinate hashing for O(1) lookups, and island boundary protection.",
          details: "Enforces strict per-island block budgets with anti-exploit server validation.",
          tags: ["Grid", "Placement", "Building", "Performance"]
        },
        {
          id: "f-greedy",
          title: "2D+3D Greedy Block Mesher",
          category: "Building",
          status: "completed",
          badge: "Live",
          description: "Merges adjacent standard blocks (grass, dirt, wood, stone, slabs) into monolithic meshes, cutting part counts and draw calls by up to 90%.",
          details: "Maintains dedicated server collision zones while rendering smooth client meshes dynamically.",
          tags: ["Greedy Mesher", "Optimization", "Rendering"]
        },
        {
          id: "f-persistence",
          title: "Atomic DataStore Persistence",
          category: "Engine",
          status: "completed",
          badge: "Live",
          description: "ProfileStore-backed profile saving with custom binary buffer serialization for instant island loading and crash-proof backups.",
          details: "Versioned data schema with automated migrations and one-time starter kit verification.",
          tags: ["Saving", "Profiles", "Database"]
        },
        {
          id: "f-transforms",
          title: "Dynamic Smart Block Transforms",
          category: "Building",
          status: "completed",
          badge: "Live",
          description: "Blocks react naturally to their surroundings: grass changes to dirt when shaded or covered, and stairs seamlessly connect into corners and inner curves.",
          details: "Includes 24-rotation variant solver for seamless architectural builds.",
          tags: ["Transforms", "Stairs", "Terrain"]
        },
        {
          id: "f-backpack",
          title: "Physics-Based Spring UI & Backpack",
          category: "Interface",
          status: "completed",
          badge: "Live",
          description: "Custom physics spring UI featuring animated hotbar, inventory grid sorting, category tabs, and smooth panel transitions.",
          details: "Built with low-latency client update loops and seamless tool hotbar switching.",
          tags: ["UI", "Springs", "Inventory"]
        }
      ]
    },
    {
      id: "phase-2",
      number: "02",
      title: "Flora & Earth Harvest",
      tagline: "Agriculture, deep-earth mining, and forestry ecosystem",
      status: "completed",
      completionPercentage: 100,
      icon: "harvest",
      summary: "Dynamic multi-stage crop cultivation, tool tiering, natural ore node generation, and tree forestry.",
      features: [
        {
          id: "f-farming",
          title: "14+ Staged Crop Varieties",
          category: "Farming",
          status: "completed",
          badge: "Live",
          description: "Cultivate crops from Wheat, Tomatoes, and Potatoes to advanced crops like Dragonfruit, Pineapples, Rice, and Trellis-climbing Grapes.",
          details: "Crops progress through distinct visual growth stages driven by efficient chunk-staggered server ticks.",
          tags: ["Farming", "Crops", "Agriculture"]
        },
        {
          id: "f-tools-farm",
          title: "Tillers, Watering Cans & Sickles",
          category: "Farming",
          status: "completed",
          badge: "Live",
          description: "Till soil with Hoes, accelerate crop growth with Basic & Improved Watering Cans, and harvest clusters using tiered Sickles (Iron, Gilded Steel, Diamond).",
          details: "Soil hydration and compost fertilizers provide active growth bonuses.",
          tags: ["Tools", "Watering", "Sickles"]
        },
        {
          id: "f-forestry",
          title: "Forestry & Fruit Orchards",
          category: "Forestry",
          status: "completed",
          badge: "Live",
          description: "Plant 7 varieties of saplings (Birch, Maple, Pine, Acacia, Apple, Lemon, Avocado). Fell trees with tiered Axes and harvest fresh fruit using Tree Wackers.",
          details: "Includes wind-reactive foliage that dynamically sways with island wind currents.",
          tags: ["Woodcutting", "Trees", "Fruit"]
        },
        {
          id: "f-mining",
          title: "Heart Ore Nodes & Mining",
          category: "Mining",
          status: "completed",
          badge: "Live",
          description: "Explore natural Heart ore deposits that periodically spawn across islands, yielding Stone, Coal, Iron, Gold, and precious minerals.",
          details: "Complete with tool hardness checks, dynamic hitpoint tracking, and physics-driven 3D debris particle arcs.",
          tags: ["Mining", "Ores", "Pickaxes", "Particles"]
        }
      ]
    },
    {
      id: "phase-3",
      number: "03",
      title: "Workshop & Storage",
      tagline: "Atomic item transactions, container systems, and multi-tier crafting",
      status: "completed",
      completionPercentage: 100,
      icon: "workbench",
      summary: "Exploit-proof inventory ledger, physical item dropping with LOD culling, animated chests, and processing workstations.",
      features: [
        {
          id: "f-inventory",
          title: "Exploit-Proof Atomic Inventory",
          category: "Economy",
          status: "completed",
          badge: "Live",
          description: "Server-authoritative transaction mutex that guarantees zero item duplication across drops, trades, and storage deposits.",
          details: "Strict claim-then-grant protocol with deterministic rollback on disconnection.",
          tags: ["Anti-Dupe", "Security", "Inventory"]
        },
        {
          id: "f-drops",
          title: "Physical Dropped Items (Q / F)",
          category: "Economy",
          status: "completed",
          badge: "Live",
          description: "Toss items into the world with 'Q' and target-pick them with 'F'. Features 3-tier LOD simulation, island drop caps, and void cleanup.",
          details: "Items simulate realistic drop physics and settle into low-overhead models to prevent lag.",
          tags: ["Items", "Physics", "LOD"]
        },
        {
          id: "f-chests",
          title: "Animated Container Chests",
          category: "Storage",
          status: "completed",
          badge: "Live",
          description: "Placeable wooden and iron chests with authoritative slot storage, permission locks, and smooth spring-animated lid opening.",
          details: "Fully synchronised across multiple players standing near the same chest.",
          tags: ["Chests", "Storage", "Containers"]
        },
        {
          id: "f-crafting",
          title: "Instant Crafting Workbench",
          category: "Crafting",
          status: "completed",
          badge: "Live",
          description: "Extensive recipe catalog for tools, decorative blocks, seeds, and industrial components with auto-deducting atomic ingredients.",
          details: "Instant crafting feedback with dynamic recipe category filtering in the UI.",
          tags: ["Crafting", "Recipes", "Workbench"]
        },
        {
          id: "f-processing",
          title: "Continuous Processing Benches",
          category: "Crafting",
          status: "completed",
          badge: "Live",
          description: "Smelters, Furnaces, and Composters that process raw materials into refined ingots and organic fertilizer over real-time ticks.",
          details: "Real-time visual progress bars, persistent queue timers, and safety guards against destruction while active.",
          tags: ["Smelting", "Processing", "Furnaces"]
        }
      ]
    },
    {
      id: "phase-4",
      number: "04",
      title: "Industry & Automata",
      tagline: "Autonomous Villager companions and 3D factory pipe logistics",
      status: "completed",
      completionPercentage: 95,
      icon: "gears",
      summary: "Recruit NPC helpers that farm and mine autonomously while factory pipes route goods between machines and chests.",
      features: [
        {
          id: "f-pathfinder",
          title: "3D Grid A* Pathfinder",
          category: "Automation",
          status: "completed",
          badge: "Live",
          description: "Custom binary-min-heap A* pathfinding over voxel islands with stair detection, 2-block headroom checking, and obstacle re-routing.",
          details: "Runs efficiently on the server without impacting frame budgets.",
          tags: ["AI", "Pathfinding", "Navigation"]
        },
        {
          id: "f-villagers",
          title: "Autonomous Villager Helpers",
          category: "Automation",
          status: "completed",
          badge: "Live",
          description: "Recruit NPC villagers with dedicated beds. Farmer Villagers automatically till, plant, harvest, and deposit into chests; Miner Villagers seek and shatter ore nodes.",
          details: "Features client-side visual interpolation, animation flipbooks, and a 3D Villager Inspector showcase room.",
          tags: ["Villagers", "NPCs", "Helpers", "Automation"]
        },
        {
          id: "f-pipes",
          title: "3D Factory Pipe Logistics",
          category: "Automation",
          status: "completed",
          badge: "Live",
          description: "Connect workstations, chests, and harvesters with 3D pneumatic pipes. Automatic 6-neighbour shape detection (End, Straight, Bend, Tee, Cross).",
          details: "Transparent glass viewing sections display items actively traversing the pipe network via synchronized clock interpolation.",
          tags: ["Pipes", "Factory", "Automation", "Logistics"]
        },
        {
          id: "f-skills",
          title: "Mastery Leveling & Skill Perks",
          category: "Progression",
          status: "completed",
          badge: "Live",
          description: "Gain skill experience up to Level 100 in Farming, Mining, and Forestry. Level milestones unlock rare seeds, master tools, and new villager types.",
          details: "Includes dynamic XP gain flyout notifications and progressive level scaling curve.",
          tags: ["Skills", "Progression", "Levels", "Rewards"]
        }
      ]
    },
    {
      id: "phase-5",
      number: "05",
      title: "Airships & The Open Skies",
      tagline: "World travel, social visiting, and atmospheric immersion",
      status: "in-progress",
      completionPercentage: 65,
      icon: "airship",
      summary: "Dock airships at island ports, visit other players' sky realms, and experience dynamic atmospheric conditions.",
      features: [
        {
          id: "f-airships",
          title: "Persistent Dock Airships",
          category: "Exploration",
          status: "completed",
          badge: "Live",
          description: "Persistent private airships docked at every island's port block, ready to launch players across the boundless sky.",
          details: "Server-replicated models with persistent docking mechanics.",
          tags: ["Airship", "Dock", "Transport"]
        },
        {
          id: "f-travel",
          title: "Island Visiting & Social Permissions",
          category: "Social",
          status: "in-progress",
          badge: "In Development",
          description: "Browse the island directory to visit friends and community realms. Robust privacy controls with blocklists, guest restrictions, and visit requests.",
          details: "Includes seamless island loading screens and permission safety checks.",
          tags: ["Multiplayer", "Visiting", "Social", "Permissions"]
        },
        {
          id: "f-daynight",
          title: "Atmospheric Day/Night & Weather",
          category: "World",
          status: "in-progress",
          badge: "In Development",
          description: "Dynamic celestial day/night cycle with glowing twilight skies, atmospheric wind lines, and rustling tree foliage.",
          details: "Fully tuned to enhance the serene feeling of isolated floating sky islands.",
          tags: ["Atmosphere", "Lighting", "Wind", "Immersion"]
        },
        {
          id: "f-island-preview",
          title: "Island 3D Inspection Previews",
          category: "Social",
          status: "in-progress",
          badge: "Testing",
          description: "Inspect island previews before teleporting, displaying player level, island size, and active helper count.",
          details: "Driven by lightweight binary state snapshots.",
          tags: ["Preview", "Social", "Directory"]
        }
      ]
    },
    {
      id: "phase-6",
      number: "06",
      title: "Merchant Realm & Trading",
      tagline: "A thriving player economy with public trading hubs and player market stalls",
      status: "planned",
      completionPercentage: 15,
      icon: "coins",
      summary: "Central community market island, secure player-to-player trade tables, currency integration, and decorative customization.",
      features: [
        {
          id: "f-hub",
          title: "The Floating Merchant Hub",
          category: "Social",
          status: "planned",
          badge: "Planned",
          description: "A persistent central sky hub where players gather, meet travelling wandering traders, purchase rare exotic seeds, and showcase achievements.",
          details: "Features community gathering plazas and specialized NPC vendor shops.",
          tags: ["Hub", "Town", "Vendors"]
        },
        {
          id: "f-trading",
          title: "Player Stalls & Secure Trade Windows",
          category: "Economy",
          status: "planned",
          badge: "Planned",
          description: "Set up customizable vending stalls on your island to sell surplus crops and ingots, or initiate direct 2-way verified trade sessions.",
          details: "Backed by the existing zero-dupe atomic ledger for complete peace of mind.",
          tags: ["Trading", "Economy", "Markets", "Vending"]
        },
        {
          id: "f-coins",
          title: "Sky Haven Currency & Coin Minting",
          category: "Economy",
          status: "planned",
          badge: "Planned",
          description: "Introduce gold coins minted from refined minerals or earned through daily delivery quests to power the island economy.",
          details: "Integrated into both server shops and peer-to-peer exchanges.",
          tags: ["Currency", "Coins", "Quests"]
        },
        {
          id: "f-cosmetics",
          title: "Island Banners & Custom Airship Hulls",
          category: "Building",
          status: "planned",
          badge: "Planned",
          description: "Customize your island's identity with crest banners, glowing lanterns, and cosmetic airship skins.",
          details: "Express your building aesthetic with vanity unlocks from high skill levels.",
          tags: ["Cosmetics", "Banners", "Customization"]
        }
      ]
    },
    {
      id: "phase-7",
      number: "07",
      title: "Wild Expansions & Relics",
      tagline: "Animal companions, forgotten sky dungeons, and ancient automation tech",
      status: "planned",
      completionPercentage: 0,
      icon: "dungeon",
      summary: "Animal husbandry, dangerous sky ruins with combat encounters, and legendary artifact machinery.",
      features: [
        {
          id: "f-animals",
          title: "Pasture & Animal Husbandry",
          category: "Farming",
          status: "planned",
          badge: "Planned",
          description: "Breed livestock including Chickens (eggs/feathers), Sheep (wool), and Cows (milk/leather). Build fenced pastures and feeding troughs.",
          details: "Villagers can be assigned as Ranchers to auto-tend livestock.",
          tags: ["Animals", "Ranching", "Livestock"]
        },
        {
          id: "f-dungeons",
          title: "Forgotten Sky Dungeons & Bosses",
          category: "Exploration",
          status: "planned",
          badge: "Concept",
          description: "Fly your airship to mysterious storm islands filled with traps, shadow creatures, and ancient sky golems guarding rare blueprint tech.",
          details: "PvE combat system utilizing crafted swords, shields, and magic totems.",
          tags: ["Combat", "Dungeons", "Monsters", "Loot"]
        },
        {
          id: "f-advanced-machinery",
          title: "Sprinklers & Advanced Automation",
          category: "Automation",
          status: "planned",
          badge: "Concept",
          description: "Unlock sprinkler grids, automatic harvesters, item sorter splitters, and conveyor belts to expand your island into a grand sky metropolis.",
          details: "Expands upon the 3D pipe routing framework.",
          tags: ["Machinery", "Sprinklers", "Advanced Tech"]
        }
      ]
    }
  ]
};

// Export for browser
if (typeof window !== "undefined") {
  window.ROADMAP_DATA = ROADMAP_DATA;
}
