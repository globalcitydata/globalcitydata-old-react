import { startCase } from 'lodash';

export const DATA_TYPES = ['Dataset', 'Model', 'Tutorial'];
export const OUTCOMES = [
  'environmentalImpacts',
  'equity',
  'health',
  'livability',
  'wellBeing',
];

export const DETERMINANTS = [
  'socialAndEconomic',
  'environmentalCharacteristics',
  'infrastructureAndFoodSupply',
  'urbanForm',
];

export const SPATIAL_SCALES = [
  'intraUrban', 
  'wholeCity', 
  'nationalUrban',
];

export const SECTORS = [
  'buildings',
  'energy',
  'transportation',
  'informationCommunication',
  'waterSupply',
  'sanitationWaste',
  'foodSupply',
  'landPublicSpace'
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

const typeOptions = DATA_TYPES.map(t => ({ value: t,
  label: startCase(t),
  group: 'contentType',
}));

const outcomeOptions = OUTCOMES.map(t => ({
  value: t,
  label: startCase(t),
  group: 'outcomes',
}));

const determinantOptions = DETERMINANTS.map(t => ({
  value: t,
  label: startCase(t),
  group: 'determinants',
}));

const spatialOptions = SPATIAL_SCALES.map(t => ({
  value: t,
  label: startCase(t),
  group: 'spatialScales',
}));

const temporalOptions = TEMPORAL_SCALES.map(t => ({
  value: t,
  label: startCase(t),
  group: 'temporalScales',
}));

const sectorOptions = SECTORS.map(t => ({
  value: t,
  label: startCase(t),
  group: 'sectors',
}));

const worldOptions = WORLD_REGIONS.map(t => ({
  value: t,
  label: startCase(t),
  group: 'worldRegions',
}));

export const tags = [
  {
    label: 'Data Type',
    options: typeOptions,
  },
  {
    label: 'Spatial Scales',
    options: spatialOptions,
  },
  {
    label: 'Temporal Scales',
    options: temporalOptions,
  },
  {
    label: 'Sustainability Outcome',
    options: outcomeOptions,
  },
  {
    label: 'Determinants',
    options: determinantOptions,
  },
  {
    label: 'Sectors',
    options: sectorOptions,
  },
  {
    label: 'World Regions',
    options: worldOptions,
  },
];

export const tagQuery = {
  dataType: [],
  outcomes: [],
  determinants: [],
  spatialScales: [],
  sectors: [],
  temporalScales: [],
  worldRegions: [],
};
