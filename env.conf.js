const fs = require('fs');
const path = require('path');
const { env } = require('process');
const successColor = '\x1b[32m%s\x1b[0m';
const checkSign = '\u{2705}';
// const dotenv = require('dotenv').config({path: 'src/.env'}); ;

const envFile = fs.readFileSync('./src/environments/environment.prod.ts');
const numberField = [
  '_DEFAULT_PAGE_SIZE_',
  '_TIMEOUT_MS_'
];
const envConfig = process.env;

for (let field of envConfig) {
  if (envFile.includes(field)) {
    if (numberField.inludes(field)) {
      field = "'" + field + "'";
    }
    envFile.replace(field, envConfig[field]);
  }
}

const targetPath = path.join(__dirname, './src/environments/environment.prod.ts');
fs.writeFile(targetPath, envFile, (err) => {
    if (err) {
        console.error(err);
        throw err;
    } else {
        console.log(successColor, `${checkSign} Successfully generated environment.prod.ts`);
    }
});
