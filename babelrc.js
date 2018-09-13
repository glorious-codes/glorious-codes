const fs = require('fs'),
  env = process.env.NODE_ENV || 'development';

const config = {
  presets: "env"
};

if(env == 'production')
  config.presets = [
    ["env", { "modules": false }]
  ];

fs.writeFileSync('./.babelrc', JSON.stringify(config));
