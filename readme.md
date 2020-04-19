# Cookiebar

Cookie notification bar for EU cookie law

## Installation
```bash
npm i --save https://github.com/Twiddlle/cookiebar.git
```

## Usage
```javascript
const cookieBar = require('cookiebar');
new cookieBar({
  cookieName: 'eucookiebar',
  showOnce: false, //if true, bar will display only once even if bar is not closed by user
  cookieExpiration: 60 * 60 * 24 * 365, // cookie expiration time in seconds
  lang: 'auto', // default is auto, detect language from browser or you can specify language directly eg: en, fr, sk...
  //if you specify empty string, texts will be gathered from body section described below
  
  body: {
      heading: 'Cookie Disclaimer',
      text: 'This site uses cookies and similar technologies on its websites. By continuing your browsing after being presented with the cookie information you consent to such use.',
      ok: 'OK',
      close: '✕',
      learnMore: 'Learn more',
      learnMoreUrl: '',//if you not specify url, learn more button will not appear
  },
  languages: {}
});
```

**Enjoy :)**
