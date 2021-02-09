const fs = require('fs');
require('dotenv').config();

const BACKEND_LINK = `export const BACKEND_LINK = 'https://rss-teams.herokuapp.com/graphql';
`;

fs.writeFileSync('./src/appConstants/api.ts', BACKEND_LINK);
