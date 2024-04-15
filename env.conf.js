const fs = require('fs');
const path = require('path');
const { env } = require('process');
const successColor = '\x1b[32m%s\x1b[0m';
const checkSign = '\u{2705}';
const dotenv = require('dotenv').config({path: 'src/.env'}); ;

const envFile = `import { IAppConfig } from 'tt-library-angular-porfolio';

export const environment: IAppConfig = {
  production: true,
  defaultLang: 'vi',
  cookieStorageLangKey: '_lang',
  cookieStorageDeviceIdKey: '_deviceId',
  tokenKey: '_token',
  assetsUrl: 'https://pi-portfolio-livid.vercel.app/',
  apiUrl: 'https://spending-management.up.railway.app/',
  email: 'trinhthanhtung1010@gmail.com',
  phoneNumber: '+84836450670',
  defaultPageSize: 10,
  timeoutMs: 180000,
  settingFormat: {
    dateTime: {
      date: "DD/MM/YYYY",
      time: "HH:mm:ss a",
      dateTime: "DD/MM/YYYY HH:mm:ss",
      portfolioDate: "MMM - yyyy",
      portfolioDateResponsive: "yyyy"
    },
  },
  firebaseConfig: {
    apiKey: "AIzaSyADMzU8kiEIosqyvJiopulcmF2ff3ppCus",
    authDomain: "my-project-8c416.firebaseapp.com",
    projectId: "my-project-8c416",
    storageBucket: "my-project-8c416.appspot.com",
    messagingSenderId: "468318730006",
    appId: "1:468318730006:web:6de7ec8edebad31bb60237",
    measurementId: "G-P115SDW2ZT"
  },
  googleConfig: {
    downloadCV: "https://drive.google.com/uc?export=download&id=13GFK_OWfcxseMy5gjG2TyLLbIPcc8LML",
  },
  remoteModuleUrl: {
    reactManagement: "https://management-reactjs-seven.vercel.app/disk/static/js/main.c06c346.js",
  },
  TEST_KEY: '${env['TEST_KEY']}',
  TEST_KEY_NUMBER: ${env['TEST_KEY_NUMBER']},
}
`;
const targetPath = path.join(__dirname, './src/environments/environment.prod.ts');
fs.writeFile(targetPath, envFile, (err) => {
    if (err) {
        console.error(err);
        throw err;
    } else {
        console.log(successColor, `${checkSign} Successfully generated environment.prod.ts`);
    }
});
