import { startCase } from 'lodash';

export const CONTENT_TYPES = ['dataset', 'model', 'tutorial'];
export const OUTCOMES = [
  'environmentalImpacts',
  'equity',
  'health',
  'livability',
  'wellBeing',
];
export const PARAMETERS = [
  'socialAndEconomic',
  'environmentalCharacteristics',
  'infrastructureAndFoodSupply',
  'urbanForm',
];
export const SPATIAL_SCALES = ['intraUrban', 'wholeCity', 'nationalUrban'];
export const TEMPORAL_SCALES = [
  'singleYearSnapshot',
  'timeSeries',
  'futuresModeling'
];
export const WORLD_REGIONS = [
  'northAmerica',
  'southAmerica',
  'europe',
  'africa',
  'asia'
];

const typeOptions = CONTENT_TYPES.map(t => ({
  value: t,
  label: startCase(t),
  group: 'contentType',
}));

const outcomeOptions = OUTCOMES.map(t => ({
  value: t,
  label: startCase(t),
  group: 'outcomes'
}));

const parameterOptions = PARAMETERS.map(t => ({
  value: t,
  label: startCase(t),
  group: 'parameters'
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

const worldOptions = WORLD_REGIONS.map(t => ({
  value: t,
  label: startCase(t),
  group: 'worldRegions',
}));

export const tags = [
  {
    label: 'Content Type',
    options: typeOptions,
  },
  {
    label: 'Outcomes',
    options: outcomeOptions,
  },
  {
    label: 'Parameters',
    options: parameterOptions,
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
    label: 'World Regions',
    options: worldOptions,
  },
];

export const tagQuery = {
  contentType: [],
  outcomes: [],
  parameters: [],
  spatialScales: [],
  temporalScales: [],
  worldRegions: [],
};
