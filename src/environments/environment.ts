import { IAppConfig } from 'tt-library-angular-porfolio';

export const environment: IAppConfig = {
  production: false,
  defaultLang: 'vi',
  cookieStorageLangKey: '_lang',
  cookieStorageDeviceIdKey: '_deviceId',
  tokenKey: '_token',
  assetsUrl: 'http://localhost:8080/',
  apiUrl: 'http://localhost:9090/',
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
    appId: "1:468318730006:web:7e390a37a0e941aab60237",
    measurementId: "G-CFZ3NPLSEF"
  },
  googleConfig: {
    downloadCV: "https://drive.google.com/uc?export=download&id=13GFK_OWfcxseMy5gjG2TyLLbIPcc8LML",
  },
  remoteModuleUrl: {
    reactManagement: "http://localhost:3000/static/js/bundle.js",
    angularPortfolio: "http://localhost:8081/",
  },
};
