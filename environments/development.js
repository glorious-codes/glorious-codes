export default {
  APP: {
    BASE_URL: 'http://localhost:7000'
  },
  ANALYTICS: {
    GOOGLE: {
      ID: 'UA-126293116-1',
      BASE_URL: 'https://www.googletagmanager.com/gtag/js'
    },
    INSPECTLET: {
      ENABLED: false,
      BASE_URL: '',
      ID: 0 // There is no inspectlet configured for development
    }
  }
};
