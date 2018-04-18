require('./style.styl');
const languages = require('./languages');

class CookieBar {

    constructor(options = {}) {

        this.options = Object.assign({
            cookieName: 'eucookiebar',
            showOnce: false,
            cookieExpiration: 60 * 60 * 24 * 365,
            lang: '',
            body: {
                heading: 'Cookie Disclaimer',
                text: 'This site uses cookies and similar technologies on its websites. By continuing your browsing after being presented with the cookie information you consent to such use.',
                ok: 'OK',
                close: '✕',
                learnMore: 'Learn more',
                learnMoreUrl: '',
            },
            languages: {}
        }, options);

        if (this.hasCookie()) {
            return;
        }

        this.handleLanguage(this.options.lang);
        this.id = CookieBar.getRandomId();
        this.closeBtn = CookieBar.getRandomId();
        this.okBtn = CookieBar.getRandomId();

        this.render();
        this.bindEvents();

        if (this.options.showOnce) {
            this.setCookie();
        }
    }

    static getRandomId() {
        return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
    }

    render() {

        let learnMoreBtn = '';
        if (!!this.options.body.learnMoreUrl) {
            learnMoreBtn = `
            <a target="_blank" href="${this.options.body.learnMoreUrl}" class="eu-cookie-bar-more-btn eu-cookie-bar-btn eu-cookie-bar-bottom-btn">
                ${this.options.body.learnMore}
            </a>
            `;
        }

        this.cookieBar = document.createElement('div');
        this.cookieBar.className = 'eu-cookie-bar eu-cookie-bar-container';
        this.cookieBar.id = this.id;
        this.cookieBar.innerHTML = `
       <div class="eu-cookie-bar-content">
        <div class="eu-cookie-bar-title">${this.options.body.heading}</div>
        <div class="eu-cookie-bar-text">${this.options.body.text}</div>
        <div class="eu-cookie-bar-close-btn eu-cookie-bar-btn" id="${this.closeBtn}">${this.options.body.close}</div>
        <div class="eu-cookie-bar-ok-btn eu-cookie-bar-btn eu-cookie-bar-bottom-btn" id="${this.okBtn}">
            ${this.options.body.ok}
        </div>
        ${learnMoreBtn}
        </div>
    `;
        document.body.appendChild(this.cookieBar);
        setTimeout(() => {
            this.cookieBar.className += ' eu-cookie-bar-visible';
        }, 1);
    }

    bindEvents() {
        document.getElementById(this.closeBtn).onclick = () => {
            this.hideBar()
        };
        document.getElementById(this.okBtn).onclick = () => {
            this.hideBar()
        };
    }

    hideBar() {
        document.getElementById(this.id).remove();
        this.setCookie();
    }

    setCookie() {
        let cookieDate = new Date();
        cookieDate.setSeconds(cookieDate.getSeconds() + this.options.cookieExpiration);
        document.cookie =
            this.options.cookieName + "=1"
            + ";path=/;domain=" + document.domain + ";expires=" + cookieDate.toUTCString();
    }

    /**
     * @returns {boolean}
     */
    hasCookie() {
        return (new RegExp(this.options.cookieName + "=1")).test(document.cookie);
    }

    /**
     * @param {string} lang
     */
    handleLanguage(lang) {
        if (!!lang) {
            if (lang === "auto") {
                lang = window.navigator.language.replace('^([a-z]+)(.*)$').toLocaleLowerCase();
            }
            if (this.options.languages[lang]) {
                this.options.body = Object.assign(this.options.body, this.options.languages[lang]);
            } else {
                if (languages[lang]) {
                    this.options.body = languages[lang];
                } else {
                    console.warn('not existing language mutation for ' + lang);
                }
            }
        }
    }

}

module.exports = CookieBar;

