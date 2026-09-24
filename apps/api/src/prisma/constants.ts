const categories = [
  {
    name: 'Grains',
    slug: 'grains',
    description: 'Cereal grains and grain-based food products.',
  },
  {
    name: 'Legumes',
    slug: 'legumes',
    description: 'Legumes and pulse crops.',
  },
  {
    name: 'Tubers',
    slug: 'tubers',
    description: 'Root and tuber food crops.',
  },
  {
    name: 'Vegetables',
    slug: 'vegetables',
    description: 'Common vegetables traded in Nigerian markets.',
  },
  {
    name: 'Fruits',
    slug: 'fruits',
    description: 'Common fruits traded in Nigerian markets.',
  },
];

const units = [
  {
    name: 'Kilogram',
    symbol: 'kg',
    type: 'MASS' as const,
    description: 'Metric unit of mass.',
  },
  {
    name: 'Gram',
    symbol: 'g',
    type: 'MASS' as const,
    description: 'Metric unit of mass equal to one-thousandth of a kilogram.',
  },
  {
    name: 'Piece',
    symbol: 'piece',
    type: 'COUNT' as const,
    description: 'Individual countable item.',
  },
  {
    name: 'Bag',
    symbol: 'bag',
    type: 'MARKET_MEASURE' as const,
    description: 'Market packaging or measurement unit sold as a bag.',
  },
  {
    name: 'Basket',
    symbol: 'basket',
    type: 'MARKET_MEASURE' as const,
    description: 'Market measurement unit commonly used for produce.',
  },
];
const markets = [
  {
    name: 'Wuse Market',
    city: 'Abuja',
    state: 'FCT',
    region: 'North Central',
  },
  {
    name: 'Garki Market',
    city: 'Abuja',
    state: 'FCT',
    region: 'North Central',
  },
  {
    name: 'Mile 12 Market',
    city: 'Lagos',
    state: 'Lagos',
    region: 'South West',
  },
];

const commodities = [
  {
    name: 'Rice',
    slug: 'rice',
    categorySlug: 'grains',
  },
  {
    name: 'Maize',
    slug: 'maize',
    categorySlug: 'grains',
  },
  {
    name: 'Beans',
    slug: 'beans',
    categorySlug: 'legumes',
  },
  {
    name: 'Groundnuts',
    slug: 'groundnuts',
    categorySlug: 'legumes',
  },
  {
    name: 'Yam',
    slug: 'yam',
    categorySlug: 'tubers',
  },
  {
    name: 'Tomato',
    slug: 'tomato',
    categorySlug: 'vegetables',
  },
  {
    name: 'Onion',
    slug: 'onion',
    categorySlug: 'vegetables',
  },
  {
    name: 'Banana',
    slug: 'banana',
    categorySlug: 'fruits',
  },
];

const sources = [
  {
    name: 'Development Field Survey',
    type: 'FIELD_SURVEY' as const,
    url: null,
  },
  {
    name: 'Development Government Dataset',
    type: 'GOVERNMENT_DATA' as const,
    url: null,
  },
  {
    name: 'Development Public Report',
    type: 'PUBLIC_REPORT' as const,
    url: null,
  },
];

const users = [
  {
    name: 'Development Developer',
    email: 'developer@9japrice.local',
    password: 'DevPassword123!',
    role: 'USER' as const,
  },
  {
    name: 'Development Researcher',
    email: 'researcher@9japrice.local',
    password: 'ResearcherPassword123!',
    role: 'RESEARCHER' as const,
  },
  {
    name: 'Development Admin',
    email: 'admin@9japrice.local',
    password: 'AdminPassword123!',
    role: 'ADMIN' as const,
  },
];

const observations = [
  {
    commoditySlug: 'rice',
    market: {
      name: 'Wuse Market',
      city: 'Abuja',
      state: 'FCT',
    },
    unitSymbol: 'kg',
    quantity: '1.000',
    price: '2500.00',
    source: {
      name: 'Development Field Survey',
      type: 'FIELD_SURVEY' as const,
    },
    submitterEmail: 'researcher@9japrice.local',
    status: 'PENDING' as const,
    observedAt: '2026-09-20T00:00:00Z',
  },

  {
    commoditySlug: 'rice',
    market: {
      name: 'Wuse Market',
      city: 'Abuja',
      state: 'FCT',
    },
    unitSymbol: 'kg',
    quantity: '1.000',
    price: '2600.00',
    source: {
      name: 'Development Field Survey',
      type: 'FIELD_SURVEY' as const,
    },
    submitterEmail: 'researcher@9japrice.local',
    status: 'VERIFIED' as const,
    observedAt: '2026-09-21T00:00:00Z',
    verifierEmail: 'admin@9japrice.local',
    verifiedAt: '2026-09-21T12:00:00Z',
    verificationNote: 'Verified against the submitted field record.',
  },

  {
    commoditySlug: 'beans',
    market: {
      name: 'Garki Market',
      city: 'Abuja',
      state: 'FCT',
    },
    unitSymbol: 'kg',
    quantity: '1.000',
    price: '3200.00',
    source: {
      name: 'Development Field Survey',
      type: 'FIELD_SURVEY' as const,
    },
    submitterEmail: 'researcher@9japrice.local',
    status: 'PENDING' as const,
    observedAt: '2026-09-21T00:00:00Z',
  },

  {
    commoditySlug: 'tomato',
    market: {
      name: 'Mile 12 Market',
      city: 'Lagos',
      state: 'Lagos',
    },
    unitSymbol: 'kg',
    quantity: '1.000',
    price: '1800.00',
    source: {
      name: 'Development Field Survey',
      type: 'FIELD_SURVEY' as const,
    },
    submitterEmail: 'researcher@9japrice.local',
    status: 'REJECTED' as const,
    observedAt: '2026-09-22T00:00:00Z',
    verifierEmail: 'admin@9japrice.local',
    verifiedAt: '2026-09-22T12:30:00Z',
    verificationNote: 'Rejected for inconsistent supporting information.',
  },

  {
    commoditySlug: 'maize',
    market: {
      name: 'Wuse Market',
      city: 'Abuja',
      state: 'FCT',
    },
    unitSymbol: 'bag',
    quantity: '1.000',
    price: '95000.00',
    source: {
      name: 'Development Field Survey',
      type: 'FIELD_SURVEY' as const,
    },
    submitterEmail: 'researcher@9japrice.local',
    status: 'VERIFIED' as const,
    observedAt: '2026-09-22T08:00:00Z',
    verifierEmail: 'admin@9japrice.local',
    verifiedAt: '2026-09-22T14:00:00Z',
    verificationNote: 'Confirmed with market trader receipt.',
  },

  {
    commoditySlug: 'yam',
    market: {
      name: 'Garki Market',
      city: 'Abuja',
      state: 'FCT',
    },
    unitSymbol: 'piece',
    quantity: '1.000',
    price: '3500.00',
    source: {
      name: 'Development Field Survey',
      type: 'FIELD_SURVEY' as const,
    },
    submitterEmail: 'researcher@9japrice.local',
    status: 'VERIFIED' as const,
    observedAt: '2026-09-22T09:30:00Z',
    verifierEmail: 'admin@9japrice.local',
    verifiedAt: '2026-09-22T15:15:00Z',
    verificationNote: 'Verified medium tuber price.',
  },

  {
    commoditySlug: 'onion',
    market: {
      name: 'Mile 12 Market',
      city: 'Lagos',
      state: 'Lagos',
    },
    unitSymbol: 'bag',
    quantity: '1.000',
    price: '45000.00',
    source: {
      name: 'Development Government Dataset',
      type: 'GOVERNMENT_DATA' as const,
    },
    submitterEmail: 'researcher@9japrice.local',
    status: 'VERIFIED' as const,
    observedAt: '2026-09-23T00:00:00Z',
    verifierEmail: 'admin@9japrice.local',
    verifiedAt: '2026-09-23T10:00:00Z',
    verificationNote: 'Cross-checked with state agricultural bulletin.',
  },

  {
    commoditySlug: 'tomato',
    market: {
      name: 'Mile 12 Market',
      city: 'Lagos',
      state: 'Lagos',
    },
    unitSymbol: 'basket',
    quantity: '1.000',
    price: '35000.00',
    source: {
      name: 'Development Field Survey',
      type: 'FIELD_SURVEY' as const,
    },
    submitterEmail: 'researcher@9japrice.local',
    status: 'VERIFIED' as const,
    observedAt: '2026-09-23T07:00:00Z',
    verifierEmail: 'admin@9japrice.local',
    verifiedAt: '2026-09-23T11:00:00Z',
    verificationNote: 'Verified large basket price.',
  },

  {
    commoditySlug: 'groundnuts',
    market: {
      name: 'Wuse Market',
      city: 'Abuja',
      state: 'FCT',
    },
    unitSymbol: 'kg',
    quantity: '1.000',
    price: '2800.00',
    source: {
      name: 'Development Public Report',
      type: 'PUBLIC_REPORT' as const,
    },
    submitterEmail: 'researcher@9japrice.local',
    status: 'VERIFIED' as const,
    observedAt: '2026-09-23T08:30:00Z',
    verifierEmail: 'admin@9japrice.local',
    verifiedAt: '2026-09-23T13:45:00Z',
    verificationNote: 'Verified based on weekly price index.',
  },

  {
    commoditySlug: 'banana',
    market: {
      name: 'Garki Market',
      city: 'Abuja',
      state: 'FCT',
    },
    unitSymbol: 'piece',
    quantity: '1.000',
    price: '500.00',
    source: {
      name: 'Development Field Survey',
      type: 'FIELD_SURVEY' as const,
    },
    submitterEmail: 'researcher@9japrice.local',
    status: 'VERIFIED' as const,
    observedAt: '2026-09-23T10:00:00Z',
    verifierEmail: 'admin@9japrice.local',
    verifiedAt: '2026-09-23T14:20:00Z',
    verificationNote: 'Single ripe banana stick verified.',
  },

  {
    commoditySlug: 'rice',
    market: {
      name: 'Mile 12 Market',
      city: 'Lagos',
      state: 'Lagos',
    },
    unitSymbol: 'bag',
    quantity: '1.000',
    price: '85000.00',
    source: {
      name: 'Development Field Survey',
      type: 'FIELD_SURVEY' as const,
    },
    submitterEmail: 'researcher@9japrice.local',
    status: 'VERIFIED' as const,
    observedAt: '2026-09-23T11:00:00Z',
    verifierEmail: 'admin@9japrice.local',
    verifiedAt: '2026-09-23T15:00:00Z',
    verificationNote: '50kg bag local rice price verified.',
  },

  {
    commoditySlug: 'beans',
    market: {
      name: 'Wuse Market',
      city: 'Abuja',
      state: 'FCT',
    },
    unitSymbol: 'kg',
    quantity: '1.000',
    price: '3100.00',
    source: {
      name: 'Development Field Survey',
      type: 'FIELD_SURVEY' as const,
    },
    submitterEmail: 'researcher@9japrice.local',
    status: 'VERIFIED' as const,
    observedAt: '2026-09-24T06:30:00Z',
    verifierEmail: 'admin@9japrice.local',
    verifiedAt: '2026-09-24T08:00:00Z',
    verificationNote: 'Brown beans price verified.',
  },

  {
    commoditySlug: 'maize',
    market: {
      name: 'Garki Market',
      city: 'Abuja',
      state: 'FCT',
    },
    unitSymbol: 'kg',
    quantity: '1.000',
    price: '1200.00',
    source: {
      name: 'Development Government Dataset',
      type: 'GOVERNMENT_DATA' as const,
    },
    submitterEmail: 'researcher@9japrice.local',
    status: 'VERIFIED' as const,
    observedAt: '2026-09-24T07:00:00Z',
    verifierEmail: 'admin@9japrice.local',
    verifiedAt: '2026-09-24T08:30:00Z',
    verificationNote: 'White maize price verified.',
  },

  {
    commoditySlug: 'yam',
    market: {
      name: 'Wuse Market',
      city: 'Abuja',
      state: 'FCT',
    },
    unitSymbol: 'piece',
    quantity: '1.000',
    price: '4000.00',
    source: {
      name: 'Development Field Survey',
      type: 'FIELD_SURVEY' as const,
    },
    submitterEmail: 'researcher@9japrice.local',
    status: 'VERIFIED' as const,
    observedAt: '2026-09-24T07:45:00Z',
    verifierEmail: 'admin@9japrice.local',
    verifiedAt: '2026-09-24T09:00:00Z',
    verificationNote: 'Large tuber price verified.',
  },
];

export {
  categories,
  sources,
  commodities,
  units,
  users,
  markets,
  observations,
};
