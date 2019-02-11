import { startCase } from 'lodash';

// FOLLOWING TAGS ARE VERY IMPORTANT AND USED THROUGHOUT APP
// ONLY CHANGE IF YOU 110% MUST CHANGE
// These are used to filter in the queryBar
// These are associated with the tags at the end of the dataState in /src/utils/data.js
// These are exported to the dataSubmit form in /src/views/dataSubmit/

// This tag not used in query bar but still used in data submit form
export const DATA_TYPES = ['dataset', 'model', 'tutorial', 'survey'];
export const DETERMINANTS = [
  'socialAndEconomic',
  'environmentalCharacteristics',
  'infrastructureAndFoodSupply',
  'urbanForm',
  'policy',
  'humanBehavior',
  'investments',
];
export const SECTORS = [
  'buildings',
  'energy',
  'transportation',
  'informationCommunication',
  'waterSupply',
  'sanitationAndWaste',
  'foodSupply',
  'landAndPublicSpace',
];
export const SPATIAL_SCALES = ['intraUrban', 'wholeCity', 'nationalUrban'];
export const SUSTAINABILITY_OUTCOMES = [
  'environment',
  'equity',
  'health',
  'livability',
  'wellBeing',
  'economy',
  'resilience',
];
export const TEMPORAL_SCALES = [
  'singleYearSnapshot',
  'timeSeries',
  'futuresModeling',
];
export const WORLD_REGIONS = [
  'northAmerica',
  'southAmerica',
  'europe',
  'africa',
  'asia',
];

// USED TO GROUP TAGS FOR QUERYBAR AND DATASUBMIT FORM
const determinantOptions = DETERMINANTS.map(t => ({
  value: t,
  label: startCase(t),
  group: 'determinants',
}));
const sectorOptions = SECTORS.map(t => ({
  value: t,
  label: startCase(t),
  group: 'sectors',
}));
const spatialOptions = SPATIAL_SCALES.map(t => ({
  value: t,
  label: startCase(t),
  group: 'spatialScales',
}));
const sustainabilityOptions = SUSTAINABILITY_OUTCOMES.map(t => ({
  value: t,
  label: startCase(t),
  group: 'sustainabilityOutcomes',
}));
const temporalOptions = TEMPORAL_SCALES.map(t => ({
  value: t,
  label: startCase(t),
  group: 'temporalScales',
}));
const worldOptions = WORLD_REGIONS.map(t => ({
  value: t,
  label: startCase(t),
  group: 'worldRegions',
}));

// Descriptions
// Paired with exported tags array below
// Used in data submit form
const determinantDescriptions = [
  'population demographics, economy, households, policy',
  'soil, temperature, vegetation, etc',
  'supply of energy, shelter/buildings, transportation, water, sanitation & waste, communications, food, green/public spaces',
  'density, spatial layout',
  'action plans, city surveys, policy maps, etc',
  'program participation rates, social networks',
  'infrastructure, education, health, etc',
];
const spatialScaleDescriptions = [
  'fine spatial detail within a city, census tract, block group or finer',
  'aggregate data for one or more cities',
  'aligned data for all cities or urban areas in a country',
];

// ACTUAL TAGS BEING EXPORTED TO QUERYBAR FOR FILTERING
export const tags = [
  {
    label: 'Determinants',
    options: determinantOptions,
    descriptions: determinantDescriptions,
  },
  {
    label: 'Sectors',
    options: sectorOptions,
    descriptions: null,
  },
  {
    label: 'Spatial Scales',
    options: spatialOptions,
    descriptions: spatialScaleDescriptions,
  },
  {
    label: 'Sustainability Outcomes',
    options: sustainabilityOptions,
    descriptions: null,
  },
  {
    label: 'Temporal Scales',
    options: temporalOptions,
    descriptions: null,
  },
  {
    label: 'World Regions',
    options: worldOptions,
    descriptions: null,
  },
];

// ALSO EXPORTED TO QUERYBAR FOR FILTERING
export const tagQuery = {
  determinants: [],
  sectors: [],
  spatialScales: [],
  sustainabilityOutcomes: [],
  temporalScales: [],
  worldRegions: [],
};
