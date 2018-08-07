export const CONTENT_TYPES = ['dataset', 'model', 'tutorial'];
export const OUTCOMES = [
  'environmentalImpacts',
  'equity',
  'health',
  'livability',
  'wellBeing',
];
export const PARAMETERS = [
  'social',
  'environment',
  'infrastructure',
  'urbanDesign',
];
export const SPATIAL_SCALES = ['intraUrban', 'wholeCity', 'nationalUrban'];
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

const typeOptions = [
  { value: 'dataset', label: 'Dataset', group: 'contentType' },
  { value: 'model', label: 'Modal', group: 'contentType' },
  { value: 'tutorial', label: 'Tutorial', group: 'contentType' },
];

const outcomeOptions = [
  {
    value: 'environmentalImpacts',
    label: 'Environmental Impacts',
    group: 'outcomes',
  },
  { value: 'equity', label: 'Equity', group: 'outcomes' },
  { value: 'health', label: 'Health', group: 'outcomes' },
  { value: 'livability', label: 'Livability', group: 'outcomes' },
  { value: 'wellBeing', label: 'Well Being', group: 'outcomes' },
];

const parameterOptions = [
  { value: 'social', label: 'Social', group: 'parameters' },
  { value: 'environment', label: 'Environment', group: 'parameters' },
  { value: 'infrastructure', label: 'Infrastructure', group: 'parameters' },
  { value: 'urbanDesign', label: 'Urban Design', group: 'parameters' },
];

const spatialOptions = [
  { value: 'intraUrban', label: 'Intra Urban', group: 'spatialScales' },
  { value: 'wholeCity', label: 'Whole City', group: 'spatialScales' },
  { value: 'nationalUrban', label: 'National Urban', group: 'spatialScales' },
];

const temporalOptions = [
  {
    value: 'singleYearSnapshot',
    label: 'Single Year Snapshot',
    group: 'temporalScales',
  },
  { value: 'timeSeries', label: 'Time Series', group: 'temporalScales' },
  {
    value: 'futuresModeling',
    label: 'Futures Modeling',
    group: 'temporalScales',
  },
];

const worldOptions = [
  { value: 'northAmerica', label: 'North America', group: 'worldRegions' },
  { value: 'southAmerica', label: 'South America', group: 'worldRegions' },
  { value: 'europe', label: 'Europe', group: 'worldRegions' },
  { value: 'africa', label: 'Africa', group: 'worldRegions' },
  { value: 'asia', label: 'Asia', group: 'worldRegions' },
];

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
