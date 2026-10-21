// SkyHaven Roadmap Data Source - Player-Friendly Version

const ROADMAP_DATA = {
  gameTitle: "SkyHaven",
  subtitle: "Official Player Roadmap",
  version: "Alpha v0.8.2",
  lastUpdated: "October 2026",
  links: {
    github: "https://github.com/Wizinator/SkyHaven-Roadmap",
    issues: "https://github.com/Wizinator/SkyHaven-Roadmap/issues",
    roblox: "https://www.roblox.com/games/",
    discord: "https://discord.gg/3NhnNsRM5H"
  },
  phases: [
    {
      id: "phase-1",
      number: "1",
      title: "Building & Island Basics",
      tagline: "The core systems for building and saving your island",
      status: "completed",
      completionPercentage: 100,
      features: [
        {
          id: "f-grid",
          title: "Block Placement & Building",
          category: "Building",
          status: "completed",
          badge: "Released",
          description: "Place and break blocks on your private floating island with smooth grid alignment.",
          tags: ["Building", "Blocks"]
        },
        {
          id: "f-greedy",
          title: "Lag-Free Block Optimization",
          category: "Building",
          status: "completed",
          badge: "Released",
          description: "Adjacent blocks automatically merge together behind the scenes, keeping the game running smoothly even with huge islands.",
          tags: ["Performance", "Building"]
        },
        {
          id: "f-persistence",
          title: "Auto-Save System",
          category: "Saving",
          status: "completed",
          badge: "Released",
          description: "Your island, inventory, and chests save automatically. You won't lose your work when you leave or rejoin.",
          tags: ["Saving", "Data"]
        },
        {
          id: "f-transforms",
          title: "Smart Grass & Stairs",
          category: "Building",
          status: "completed",
          badge: "Released",
          description: "Dirt turns into grass when exposed to sunlight, and stair blocks automatically turn into corners when placed next to each other.",
          tags: ["Building", "Stairs"]
        },
        {
          id: "f-backpack",
          title: "Backpack & Hotbar",
          category: "Inventory",
          status: "completed",
          badge: "Released",
          description: "Clean inventory screen with item categories and a quick hotbar to switch tools easily.",
          tags: ["UI", "Inventory"]
        }
      ]
    },
    {
      id: "phase-2",
      number: "2",
      title: "Farming & Mining",
      tagline: "Grow crops, chop trees, and mine ores",
      status: "completed",
      completionPercentage: 100,
      features: [
        {
          id: "f-farming",
          title: "14 Different Crops",
          category: "Farming",
          status: "completed",
          badge: "Released",
          description: "Plant seeds and harvest crops including Wheat, Tomatoes, Potatoes, Carrots, Onions, Pumpkins, Watermelons, Pineapples, and Dragonfruit.",
          tags: ["Farming", "Crops"]
        },
        {
          id: "f-tools-farm",
          title: "Watering Cans & Sickles",
          category: "Farming",
          status: "completed",
          badge: "Released",
          description: "Till dirt with a hoe, speed up crop growth with watering cans, and harvest faster using tiered sickles.",
          tags: ["Farming", "Tools"]
        },
        {
          id: "f-forestry",
          title: "Trees & Fruit Picking",
          category: "Woodcutting",
          status: "completed",
          badge: "Released",
          description: "Chop down Birch, Pine, and Oak trees for wood, or grow Apple, Lemon, and Avocado trees to harvest fresh fruit.",
          tags: ["Trees", "Woodcutting"]
        },
        {
          id: "f-mining",
          title: "Ore Nodes & Pickaxes",
          category: "Mining",
          status: "completed",
          badge: "Released",
          description: "Mine stone, coal, iron, and gold nodes that spawn after placing resource hearts on your island.",
          tags: ["Mining", "Ores", "Hearts"]
        }
      ]
    },
    {
      id: "phase-3",
      number: "3",
      title: "Storage & Crafting",
      tagline: "Chests, workbench recipes, and furnaces",
      status: "completed",
      completionPercentage: 100,
      features: [
        {
          id: "f-inventory",
          title: "Safe Inventory System",
          category: "Inventory",
          status: "completed",
          badge: "Released",
          description: "Items move smoothly between inventory, chests, and crafting without risk of disappearing or duplicating.",
          tags: ["Inventory"]
        },
        {
          id: "f-drops",
          title: "Drop & Pick Up Items (Q / F)",
          category: "Gameplay",
          status: "completed",
          badge: "Released",
          description: "Press Q to drop items on the ground and press F while aiming to pick them up.",
          tags: ["Items", "Controls"]
        },
        {
          id: "f-chests",
          title: "Storage Chests",
          category: "Storage",
          status: "completed",
          badge: "Released",
          description: "Place wooden and iron chests to store items with animated opening lids.",
          tags: ["Storage", "Chests"]
        },
        {
          id: "f-crafting",
          title: "Crafting Workbench",
          category: "Crafting",
          status: "completed",
          badge: "Released",
          description: "Craft new tools, seeds, decorative blocks, and building parts from items you collect.",
          tags: ["Crafting", "Recipes"]
        },
        {
          id: "f-processing",
          title: "Furnaces & Composters",
          category: "Crafting",
          status: "completed",
          badge: "Released",
          description: "Smelt raw iron and gold into ingots, or turn organic scraps into fertilizer to speed up crops.",
          tags: ["Furnace", "Smelting"]
        }
      ]
    },
    {
      id: "phase-4",
      number: "4",
      title: "Villagers & Factory Pipes",
      tagline: "Automate your island with helper NPCs and pipes",
      status: "completed",
      completionPercentage: 95,
      features: [
        {
          id: "f-villagers",
          title: "Villager Helpers",
          category: "Automation",
          status: "completed",
          badge: "Released",
          description: "Place a bed to invite villagers to live on your island. Farmer villagers till, plant, and harvest crops; miner villagers break ores for you.",
          tags: ["Villagers", "NPCs"]
        },
        {
          id: "f-pathfinder",
          title: "Smart Villager Walking",
          category: "Automation",
          status: "completed",
          badge: "Released",
          description: "Villagers can walk up stairs, navigate around walls, and easily find their way around your builds.",
          tags: ["Villagers", "AI"]
        },
        {
          id: "f-pipes",
          title: "Factory Transport Pipes",
          category: "Automation",
          status: "completed",
          badge: "Released",
          description: "Connect machines, chests, and crops with pipes to move items around automatically. You can see the items traveling through glass windows.",
          tags: ["Pipes", "Automation"]
        },
        {
          id: "f-skills",
          title: "Player Skills & Leveling",
          category: "Progression",
          status: "completed",
          badge: "Released",
          description: "Level up your Farming, Mining, and Woodcutting skills to unlock better tools, faster speeds, and rare seeds.",
          tags: ["Skills", "Levels"]
        }
      ]
    },
    {
      id: "phase-5",
      number: "5",
      title: "Airships & Visiting Friends",
      tagline: "Explore the skies and visit other players",
      status: "in-progress",
      completionPercentage: 65,
      features: [
        {
          id: "f-airships",
          title: "Personal Island Airship",
          category: "Travel",
          status: "completed",
          badge: "Released",
          description: "Every island comes with a dock and an airship ready to take you into the skies.",
          tags: ["Airship", "Travel"]
        },
        {
          id: "f-travel",
          title: "Visiting Other Islands",
          category: "Social",
          status: "in-progress",
          badge: "In Progress",
          description: "Browse online players and visit their islands. Island owners can set permissions, block players, or make their island private.",
          tags: ["Multiplayer", "Visiting"]
        },
        {
          id: "f-daynight",
          title: "Day & Night Sky",
          category: "World",
          status: "in-progress",
          badge: "In Progress",
          description: "Dynamic daylight, sunset, and starry nights with soft wind effects through the trees.",
          tags: ["Atmosphere", "Weather"]
        },
        {
          id: "f-island-preview",
          title: "Island Previews",
          category: "Social",
          status: "in-progress",
          badge: "In Progress",
          description: "See a snapshot of an island and its owner's level before you fly there.",
          tags: ["Preview", "Travel"]
        }
      ]
    },
    {
      id: "phase-6",
      number: "6",
      title: "Trading & Shops",
      tagline: "Player-to-player trading, money, and custom looks",
      status: "planned",
      completionPercentage: 15,
      features: [
        {
          id: "f-hub",
          title: "Public Market Hub",
          category: "Social",
          status: "planned",
          badge: "Planned",
          description: "A central sky town where players gather to meet wandering merchants and buy rare seeds and blueprints.",
          tags: ["Town", "Shops"]
        },
        {
          id: "f-trading",
          title: "Player-to-Player Trading",
          category: "Economy",
          status: "planned",
          badge: "Planned",
          description: "Trade items and resources safely with other players through a secure trade menu, or set up a stall on your island.",
          tags: ["Trading", "Economy"]
        },
        {
          id: "f-coins",
          title: "Coins & Currency",
          category: "Economy",
          status: "planned",
          badge: "Planned",
          description: "Earn coins by selling crops, fulfilling orders, and completing daily island challenges.",
          tags: ["Coins", "Money"]
        },
        {
          id: "f-cosmetics",
          title: "Airship Skins & Banners",
          category: "Building",
          status: "planned",
          badge: "Planned",
          description: "Customize your island with decorative flags, lanterns, and paint colors for your airship.",
          tags: ["Decorations", "Cosmetics"]
        }
      ]
    },
    {
      id: "phase-7",
      number: "7",
      title: "Animals & Dungeons",
      tagline: "Farm animals, storm dungeons, and advanced machines",
      status: "planned",
      completionPercentage: 0,
      features: [
        {
          id: "f-animals",
          title: "Farm Animals",
          category: "Farming",
          status: "planned",
          badge: "Planned",
          description: "Raise chickens for eggs, sheep for wool, and cows for milk in fenced pastures on your island.",
          tags: ["Animals", "Livestock"]
        },
        {
          id: "f-dungeons",
          title: "Sky Dungeons & Monsters",
          category: "Combat",
          status: "planned",
          badge: "Planned",
          description: "Fly to mysterious storm islands with your friends to fight monsters, solve puzzles, and win rare loot.",
          tags: ["Dungeons", "Monsters", "Combat"]
        },
        {
          id: "f-advanced-machinery",
          title: "Sprinklers & Auto-Harvesters",
          category: "Automation",
          status: "planned",
          badge: "Planned",
          description: "Build sprinkler systems to water whole fields at once, along with conveyor belts and sorters.",
          tags: ["Sprinklers", "Machines"]
        }
      ]
    },
    {
      id: "phase-8",
      number: "8",
      title: "More to Come",
      tagline: "Future expansions, dungeons, pets, and community suggestions",
      status: "planned",
      completionPercentage: 0,
      description: "SkyHaven is an ever-expanding world in active development. Beyond the milestones listed on this roadmap, we have big plans for future updates — including uncharted sky biomes, storm dungeons, world bosses, companion pets, island visiting permissions, and player-driven trade economies.",
      features: []
    }
  ]
};

if (typeof window !== "undefined") {
  window.ROADMAP_DATA = ROADMAP_DATA;
}
