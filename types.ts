
export enum HeroRole {
  Tank = 'Tank',
  Assassin = 'Assassin',
  Mage = 'Mage',
  Commander = 'Commander'
}

export enum Rarity {
  Common = 'Common',
  Uncommon = 'Uncommon',
  Rare = 'Rare',
  Epic = 'Epic',
  Legendary = 'Legendary',
  Mythic = 'Mythic',
  Glory = 'Glory'
}

export interface HeroStats {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
}

export interface Hero {
  id: string;
  name: string;
  role: HeroRole;
  rarity: Rarity;
  image: string;
  powerLevel: number;
  stats: HeroStats;
  ability: string;
  backstory: string;
  color: string;
}

export interface TokenomicsItem {
  label: string;
  value: number;
  color: string;
}

// Added RoadmapItem interface for RoadmapSection compatibility
export interface RoadmapItem {
  phase: string;
  title: string;
  description: string;
  completed: boolean;
}
