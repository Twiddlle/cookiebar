!function(e){var o={};function t(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=6)}([function(e,o){e.exports={sk:{heading:"Upozornenie",text:"Pri používaní tejto stránky dochádza k spracovaniu cookies, ktoré nám pomáhajú zvyšovať kvalitu služieb. Spracovaniu cookies zabránite zmenou nastavenia v internetovom prehliadači.",ok:"Súhlasím",close:"✕",learnMore:"Learn more",learnMoreUrl:""}}},function(e,o){e.exports=function(e){var o="undefined"!=typeof window&&window.location;if(!o)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=o.protocol+"//"+o.host,n=t+o.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,o){var i,r=o.trim().replace(/^"(.*)"$/,function(e,o){return o}).replace(/^'(.*)'$/,function(e,o){return o});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?e:(i=0===r.indexOf("//")?r:0===r.indexOf("/")?t+r:n+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(e,o,t){var n,i,r={},a=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=n.apply(this,arguments)),i}),s=function(e){var o={};return function(e){if("function"==typeof e)return e();if(void 0===o[e]){var t=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}o[e]=t}return o[e]}}(),c=null,u=0,l=[],d=t(1);function b(e,o){for(var t=0;t<e.length;t++){var n=e[t],i=r[n.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(v(n.parts[a],o))}else{var s=[];for(a=0;a<n.parts.length;a++)s.push(v(n.parts[a],o));r[n.id]={id:n.id,refs:1,parts:s}}}}function p(e,o){for(var t=[],n={},i=0;i<e.length;i++){var r=e[i],a=o.base?r[0]+o.base:r[0],s={css:r[1],media:r[2],sourceMap:r[3]};n[a]?n[a].parts.push(s):t.push(n[a]={id:a,parts:[s]})}return t}function f(e,o){var t=s(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=l[l.length-1];if("top"===e.insertAt)n?n.nextSibling?t.insertBefore(o,n.nextSibling):t.appendChild(o):t.insertBefore(o,t.firstChild),l.push(o);else if("bottom"===e.insertAt)t.appendChild(o);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(e.insertInto+" "+e.insertAt.before);t.insertBefore(o,i)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var o=l.indexOf(e);o>=0&&l.splice(o,1)}function k(e){var o=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),m(o,e.attrs),f(e,o),o}function m(e,o){Object.keys(o).forEach(function(t){e.setAttribute(t,o[t])})}function v(e,o){var t,n,i,r;if(o.transform&&e.css){if(!(r=o.transform(e.css)))return function(){};e.css=r}if(o.singleton){var a=u++;t=c||(c=k(o)),n=x.bind(null,t,a,!1),i=x.bind(null,t,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var o=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",m(o,e.attrs),f(e,o),o}(o),n=function(e,o,t){var n=t.css,i=t.sourceMap,r=void 0===o.convertToAbsoluteUrls&&i;(o.convertToAbsoluteUrls||r)&&(n=d(n));i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([n],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,o),i=function(){h(t),t.href&&URL.revokeObjectURL(t.href)}):(t=k(o),n=function(e,o){var t=o.css,n=o.media;n&&e.setAttribute("media",n);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),i=function(){h(t)});return n(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;n(e=o)}else i()}}e.exports=function(e,o){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(o=o||{}).attrs="object"==typeof o.attrs?o.attrs:{},o.singleton||"boolean"==typeof o.singleton||(o.singleton=a()),o.insertInto||(o.insertInto="head"),o.insertAt||(o.insertAt="bottom");var t=p(e,o);return b(t,o),function(e){for(var n=[],i=0;i<t.length;i++){var a=t[i];(s=r[a.id]).refs--,n.push(s)}e&&b(p(e,o),o);for(i=0;i<n.length;i++){var s;if(0===(s=n[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete r[s.id]}}}};var g,y=(g=[],function(e,o){return g[e]=o,g.filter(Boolean).join("\n")});function x(e,o,t,n){var i=t?"":n.css;if(e.styleSheet)e.styleSheet.cssText=y(o,i);else{var r=document.createTextNode(i),a=e.childNodes;a[o]&&e.removeChild(a[o]),a.length?e.insertBefore(r,a[o]):e.appendChild(r)}}},function(e,o){e.exports=function(e){var o=[];return o.toString=function(){return this.map(function(o){var t=function(e,o){var t=e[1]||"",n=e[3];if(!n)return t;if(o&&"function"==typeof btoa){var i=(a=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),r=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[t].concat(r).concat([i]).join("\n")}var a;return[t].join("\n")}(o,e);return o[2]?"@media "+o[2]+"{"+t+"}":t}).join("")},o.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(n[r]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&n[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),o.push(a))}},o}},function(e,o,t){(e.exports=t(3)(!1)).push([e.i,".eu-cookie-bar.eu-cookie-bar-container {\n  width: 400px;\n  max-width: 100%;\n  font-size: 13px;\n  padding: 10px;\n  right: 0;\n  bottom: 0;\n  z-index: 10;\n  box-sizing: border-box;\n  color: #fff;\n  position: fixed;\n  opacity: 0.1;\n  transition: opacity 0.5s;\n}\n.eu-cookie-bar.eu-cookie-bar-container.eu-cookie-bar-visible {\n  opacity: 1;\n}\n.eu-cookie-bar.eu-cookie-bar-container .eu-cookie-bar-title {\n  font-weight: bold;\n  color: #51adde;\n  font-size: 120%;\n  padding-bottom: 10px;\n}\n.eu-cookie-bar.eu-cookie-bar-container .eu-cookie-bar-content {\n  padding: 20px 80px 40px 20px;\n  background: #04040e;\n  border: 1px solid #30356c;\n}\n.eu-cookie-bar.eu-cookie-bar-container .eu-cookie-bar-content .eu-cookie-bar-btn {\n  cursor: pointer;\n  display: block;\n}\n.eu-cookie-bar.eu-cookie-bar-container .eu-cookie-bar-content .eu-cookie-bar-close-btn {\n  position: absolute;\n  padding: 10px;\n  right: 15px;\n  top: 10px;\n}\n.eu-cookie-bar.eu-cookie-bar-container .eu-cookie-bar-content .eu-cookie-bar-close-btn:hover {\n  color: #51adde;\n}\n.eu-cookie-bar.eu-cookie-bar-container .eu-cookie-bar-content .eu-cookie-bar-text {\n  clear: both;\n  color: #ccc;\n  padding-bottom: 10px;\n}\n.eu-cookie-bar.eu-cookie-bar-container .eu-cookie-bar-content .eu-cookie-bar-bottom-btn,\n.eu-cookie-bar.eu-cookie-bar-container .eu-cookie-bar-content .eu-cookie-bar-bottom-btn:active,\n.eu-cookie-bar.eu-cookie-bar-container .eu-cookie-bar-content .eu-cookie-bar-bottom-btn:visited {\n  float: left;\n  border: 1px solid #30356c;\n  padding: 5px 12px;\n  color: #ccc;\n  text-decoration: none;\n  text-align: center;\n  background: #100214;\n}\n.eu-cookie-bar.eu-cookie-bar-container .eu-cookie-bar-content .eu-cookie-bar-bottom-btn:hover {\n  background: #100214;\n  color: #51adde;\n}\n.eu-cookie-bar.eu-cookie-bar-container .eu-cookie-bar-content .eu-cookie-bar-bottom-btn.eu-cookie-bar-more-btn {\n  margin-left: 20px;\n}\n",""])},function(e,o,t){var n=t(4);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(2)(n,i);n.locals&&(e.exports=n.locals)},function(e,o,t){t(5);const n=t(0);class i{constructor(e={}){this.options=Object.assign({cookieName:"eucookiebar",showOnce:!1,cookieExpiration:31536e3,lang:"",body:{heading:"Cookie Disclaimer",text:"This site uses cookies and similar technologies on its websites. By continuing your browsing after being presented with the cookie information you consent to such use.",ok:"OK",close:"✕",learnMore:"Learn more",learnMoreUrl:""},languages:{}},e),this.hasCookie()||(this.handleLanguage(this.options.lang),this.id=i.getRandomId(),this.closeBtn=i.getRandomId(),this.okBtn=i.getRandomId(),this.render(),this.bindEvents(),this.options.showOnce&&this.setCookie())}static getRandomId(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}render(){let e="";this.options.body.learnMoreUrl&&(e=`\n            <a target="_blank" href="${this.options.body.learnMoreUrl}" class="eu-cookie-bar-more-btn eu-cookie-bar-btn eu-cookie-bar-bottom-btn">\n                ${this.options.body.learnMore}\n            </a>\n            `),this.cookieBar=document.createElement("div"),this.cookieBar.className="eu-cookie-bar eu-cookie-bar-container",this.cookieBar.id=this.id,this.cookieBar.innerHTML=`\n       <div class="eu-cookie-bar-content">\n        <div class="eu-cookie-bar-title">${this.options.body.heading}</div>\n        <div class="eu-cookie-bar-text">${this.options.body.text}</div>\n        <div class="eu-cookie-bar-close-btn eu-cookie-bar-btn" id="${this.closeBtn}">${this.options.body.close}</div>\n        <div class="eu-cookie-bar-ok-btn eu-cookie-bar-btn eu-cookie-bar-bottom-btn" id="${this.okBtn}">\n            ${this.options.body.ok}\n        </div>\n        ${e}\n        </div>\n    `,document.body.appendChild(this.cookieBar),setTimeout(()=>{this.cookieBar.className+=" eu-cookie-bar-visible"},1)}bindEvents(){document.getElementById(this.closeBtn).onclick=(()=>{this.hideBar()}),document.getElementById(this.okBtn).onclick=(()=>{this.hideBar()})}hideBar(){document.getElementById(this.id).remove(),this.setCookie()}setCookie(){let e=new Date;e.setSeconds(e.getSeconds()+this.options.cookieExpiration),document.cookie=this.options.cookieName+"=1;path=/;domain="+document.domain+";expires="+e.toUTCString()}hasCookie(){return new RegExp(this.options.cookieName+"=1").test(document.cookie)}handleLanguage(e){e&&("auto"===e&&(e=window.navigator.language.replace("^([a-z]+)(.*)$").toLocaleLowerCase()),this.options.languages[e]?this.options.body=Object.assign(this.options.body,this.options.languages[e]):n[e]?this.options.body=n[e]:console.warn("not existing language mutation for "+e))}}e.exports=i}]);
//# sourceMappingURL=index.js.map