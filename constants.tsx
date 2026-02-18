
import { Hero, HeroRole, Rarity, TokenomicsItem, RoadmapItem } from './types';

export const HEROES: Hero[] = [
  {
    id: '1',
    name: 'Inferno Claw',
    role: HeroRole.Tank,
    rarity: Rarity.Rare,
    image: 'https://69910958681c79fa0bcd324c.imgix.net/crab1.jpg',
    powerLevel: 750,
    stats: { hp: 90, attack: 40, defense: 85, speed: 30 },
    ability: 'Magma Shield: Generates a shell of molten rock that reflects 30% of incoming physical damage.',
    backstory: 'Born in the volcanic vents of the Abyssal Trench, Inferno Claw forged his shell in the heat of a thousand eruptions.',
    color: '#3b82f6' // Blue for Rare
  },
  {
    id: '2',
    name: 'Abyss Snapper',
    role: HeroRole.Assassin,
    rarity: Rarity.Epic,
    image: 'https://69910958681c79fa0bcd324c.imgix.net/crab2.jpg',
    powerLevel: 820,
    stats: { hp: 45, attack: 95, defense: 30, speed: 90 },
    ability: 'Void Strike: Teleports behind the weakest enemy and delivers a critical puncture to their weak points.',
    backstory: 'A master of shadows who vanished into the Sunless Sea, only to return as the ocean\'s most feared reaper.',
    color: '#a855f7' // Purple for Epic
  },
  {
    id: '3',
    name: 'Tidal Oracle',
    role: HeroRole.Mage,
    rarity: Rarity.Mythic,
    image: 'https://69910958681c79fa0bcd324c.imgix.net/crab3.jpg',
    powerLevel: 1200,
    stats: { hp: 60, attack: 95, defense: 50, speed: 75 },
    ability: 'Maelstrom Call: Summons a massive vortex that pulls enemies together and silences their special abilities.',
    backstory: 'The keeper of the Great Reef\'s ancient wisdom. She speaks to the tides and the tides obey.',
    color: '#ef4444' // Red for Mythic
  },
  {
    id: '4',
    name: 'Iron Shell Warlord',
    role: HeroRole.Commander,
    rarity: Rarity.Glory,
    image: 'https://69910958681c79fa0bcd324c.imgix.net/crab4.jpg',
    powerLevel: 2500,
    stats: { hp: 99, attack: 99, defense: 99, speed: 99 },
    ability: 'Phalanx Charge: Inspires all allies, increasing their attack and defense by 50% and granting immunity to crowd control.',
    backstory: 'The supreme leader of the Claws Clan. He united the warring tide-pools into a single unstoppable empire.',
    color: '#facc15' // Golden Yellow for Glory
  },
  {
    id: '5',
    name: 'Coral Guardian',
    role: HeroRole.Tank,
    rarity: Rarity.Common,
    image: 'https://69910958681c79fa0bcd324c.imgix.net/crab5.jpg',
    powerLevel: 450,
    stats: { hp: 70, attack: 30, defense: 70, speed: 40 },
    ability: 'Regenerative Bloom: Slowly heals nearby allies using the power of symbiotic reef polyps.',
    backstory: 'A humble defender of the outer reefs, dedicated to preserving the balance of life.',
    color: '#94a3b8' // Slate for Common
  },
  {
    id: '6',
    name: 'Neon Pincher',
    role: HeroRole.Assassin,
    rarity: Rarity.Uncommon,
    image: 'https://69910958681c79fa0bcd324c.imgix.net/crab6.jpg',
    powerLevel: 580,
    stats: { hp: 40, attack: 70, defense: 35, speed: 85 },
    ability: 'Biolume Flash: Blinds all nearby enemies for 2 seconds, reducing their accuracy to zero.',
    backstory: 'A frantic skirmisher from the glowing caves of the bioluminescent bay.',
    color: '#22c55e' // Green for Uncommon
  },
  {
    id: '7',
    name: 'Sun-Bleached Veteran',
    role: HeroRole.Commander,
    rarity: Rarity.Legendary,
    image: 'https://69910958681c79fa0bcd324c.imgix.net/crab7.jpg',
    powerLevel: 950,
    stats: { hp: 85, attack: 85, defense: 85, speed: 60 },
    ability: 'Hardened Grit: Passive. Reduces all incoming damage by 20% and prevents the hero from being knocked back.',
    backstory: 'A survivor of the Great Shallow Wars. His shell is scarred, but his spirit is unbreakable.',
    color: '#f59e0b' // Amber for Legendary
  }
];

export const TOKENOMICS: TokenomicsItem[] = [
  { label: 'Ecosystem Rewards', value: 40, color: '#f59e0b' },
  { label: 'Public Sale', value: 20, color: '#3b82f6' },
  { label: 'Team & Advisors', value: 15, color: '#ef4444' },
  { label: 'Liquidity Pool', value: 15, color: '#10b981' },
  { label: 'Treasury', value: 10, color: '#a855f7' }
];

// Added ROADMAP export to resolve import error in RoadmapSection
export const ROADMAP: RoadmapItem[] = [
  {
    phase: 'Phase 1',
    title: 'The Hatching',
    description: 'Initial conceptualization of the Claws Clan universe, core hero art development, and lore drafting.',
    completed: true
  },
  {
    phase: 'Phase 2',
    title: 'Tidal Awakening',
    description: 'Smart contract development, website deployment, and the first wave of community recruitment.',
    completed: true
  },
  {
    phase: 'Phase 3',
    title: 'Reef Expansion',
    description: 'Beta launch of the strategy combat system and integration of the $CLAW governance token.',
    completed: false
  },
  {
    phase: 'Phase 4',
    title: 'Ocean Mastery',
    description: 'Full multi-platform release, cross-clan territorial warfare, and seasonal global tournaments.',
    completed: false
  }
];
