import { fileURLToPath } from 'url';
import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// console.log(__filename);
// console.log(__dirname);

// const __dirname2 = fileURLToPath(new URL('.', import.meta.url));
// console.log(__dirname2);

// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
// const jsonObj = require('./sample.json');
// console.log(jsonObj);

import jsonObj from './sample.json' assert { type: 'json' };

console.log(jsonObj);
