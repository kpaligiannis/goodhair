(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>u});var o=t(601),i=t.n(o),r=t(314),a=t.n(r),c=t(417),l=t.n(c),s=new URL(t(866),t.b),p=new URL(t(125),t.b),d=a()(i()),f=l()(s),m=l()(p);d.push([n.id,`@font-face {\n    font-family: 'Apercu Mono Pro';\n    src: url(${f}) format('opentype');\n    font-weight: normal;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Plakat Grotesk Bold';\n    src: url(${m}) format('opentype');\n    font-weight: bold;\n    font-style: normal;\n}\n\nbody {\n    font-family: 'Apercu Mono Pro', monospace;\n    text-transform: uppercase;\n    font-weight: 100;\n    padding: 0;\n    margin: 0;\n    overflow-x: hidden;\n}\n\nbutton {\n    font-family: 'Apercu Mono Pro', monospace;\n}\n\nh1 {\n    font-family: 'Plakat Grotesk Bold', monospace;\n    font-weight: 800;\n}\n.menu-modal {\n    overflow: hidden;\n    font-family: 'Plakat Grotesk Bold', monospace;\n    font-weight: bold;\n    position: fixed;\n    top: 0;\n    left: 0;\n    min-width: 100%;\n    max-width: 100%;\n    height: 100%;\n    background: black;\n    display: flex;\n    flex-direction: column;\n    z-index: 10;\n    opacity: 0;\n    transition: opacity 0.5s;\n}\n\n.menu-content {\n    padding-top: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    overflow-y: auto;\n    flex-grow: 1;\n}\n\n.menu-content a {\n    all: unset;\n    display: block;\n    cursor: pointer;\n    color: white;\n    font-size: clamp(1rem, 12vw, 16rem);\n    margin:-25px;\n    text-align: center;\n}\n\n.visible {\n    visibility: visible;\n    opacity: 1;\n}\n\n.accordion-container {\n    padding: 20px 28px;\n}\n\n.accordion {\n    font-family: 'Plakat Grotesk Bold', monospace;\n    @media (min-width: 844px) {\n        font-size: 14vh;\n    }\n    @media (max-width: 844px) {\n        font-size: 10vh;\n    }\n    background-color: white;\n    cursor: pointer;\n    padding: 18px;\n    width: 100%;\n    text-align: center;\n    border: none;\n    outline: none;\n    transition: 0.4s;\n    border-bottom: 1px solid black;\n}\n\n.nav {\n    overflow: hidden;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 30px 0;\n    background-color: #fff;\n}\n\n.nav a {\n    text-decoration: none;\n    color: black;\n}\n\n.hidden {\n    visibility: hidden;\n    opacity: 0;\n}\n\n.tagline {\n    font-family: 'Plakat Grotesk Bold', monospace;\n    font-size: 6vw;\n    font-weight: bold;\n    color: black;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    @media (min-width: 844px) {\n        min-height: 700px;\n    }\n    @media (max-width: 844px) {\n        min-height:250px;\n    }\n    width: 100%;\n}\n\n.hero {\n    text-align: center;\n    color: white;\n}\n\n.hero .hero-img {\n    width: 100%;\n    height: auto;\n}\n\nmain {\n    margin-top:80px;\n}\n\n.content {\n    padding: 10px 10px;\n}\n\n.content p {\n    align-content: center;\n    font-size: 16px;\n}\n\n.identity {\n    flex: 1;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    text-align: center;\n    align-content: center;\n    justify-content: center;\n    align-self: center;\n}\n\n.action-btn-wrapper {\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    align-content: center;\n    justify-content: center;\n    padding: 10px;\n}\n\n.action-btn {\n    border: 2px solid black;\n    padding: 25px 50px;\n    font-size: 24px;\n    background-color: white;\n}\n\n.section-img {\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    justify-content: center;\n    margin-top:100px;\n}\n\n.section-img img {\n    width: 100%;\n    padding:10px;\n}\n\n.panel {\n    background-color: white;\n    max-height: 0;\n    overflow: hidden;\n    transition: max-height 0.4s ease-in-out;\n}\n\n.pricing {\n    display: flex;\n    height:70px;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid black;\n}\n\nfooter {\n    background-color: #000;\n    color: #fff;\n    @media (min-width: 844px) {\n        padding: 20px 20px;\n    }\n    font-size: 14px;\n    width: 100%;\n    margin-top:100px;\n}\n\n.footer-container {\n    @media (min-width: 844px) {\n        display: flex;\n        justify-content: space-between;\n    }\n    text-align: left;\n    margin: 0 auto;\n    padding: 35px;\n}\n\n.footer-column a {\n    cursor: pointer;\n    font-family: 'Apercu Mono Pro', monospace;\n    all: unset;\n    display: block;\n    margin: 5px 0;\n}\n\n.footer-bottom {\n    text-align: left;\n    padding: 0 35px 0;\n    font-size: 12px;\n}\n\n.person-image {\n    width: 100%;\n    display: block;\n    margin-left: auto;\n}\n\n.desktop {\n    @media (max-width: 844px) {\n        height:0 !important;\n        width: 0 !important;\n        opacity:0;\n    }\n}\n\n.mobile {\n    @media (min-width: 844px) {\n        height:0 !important;\n        width: 0 !important;\n        opacity:0;\n    }\n}\n\n.sticky {\n    box-sizing: border-box;\n    position: fixed;\n    width:100%;\n    top:0;\n}\n\n@media (min-width: 844px) {\n    .gallery {\n        display: grid;\n        justify-content: center;\n        grid-template-columns: 25% 24% 24% 24%;\n        gap: 10px;\n        padding: 5px 5px;\n    }\n\n    .info {\n        width: 100%;\n        min-height: 600px;\n        display: inline-flex;\n    }\n\n    .info img {\n        width: 49%;\n        height: 49%;\n        padding: 10px 10px;\n    }\n\n    .info h1 {\n        font-size: 3vw;\n    }\n\n    .description {\n        text-align: left;\n        padding-left: 10px;\n    }\n\n    .stack {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n\n    .gallery img {\n        width: 100%;\n        height: 100%;\n    }\n\n    .box {\n        width: 200px;\n        height: 100px;\n        padding: 10px;\n        margin: 10px;\n    }\n\n    .contact-form {\n        max-width:90%;\n        padding: 20px;\n        margin-top: 60px;\n    }\n\n    .contact-form label {\n        display: block;\n        text-align: left;\n        margin-top: 20px;\n        font-size: 14px;\n        font-weight: bold;\n    }\n\n    .contact-form input[name="name"],\n    .contact-form input[name="email"],\n    .contact-form input[name="phone"],\n    .contact-form textarea {\n        width: 100%;\n        padding: 8px;\n        margin-top: 5px;\n        outline: none;\n        border:none;\n        border-bottom: 1px solid black;\n        resize: none;\n    }\n\n    .contact-form button {\n        padding: 20px 50px 20px;\n        background-color: black;\n        color: white;\n        border: none;\n        cursor: pointer;\n        margin-top: 20px;\n    }\n\n    .contact-form button:hover {\n        background-color: #333;\n    }\n\n    .custom-checkbox {\n        position: relative;\n        display: flex; /* Changed from inline-block to flex */\n        align-items: center; /* Vertically center aligns the text and checkbox */\n        cursor: pointer;\n        width: auto; /* Allow width to adjust based on content */\n        height: 20px; /* Keep your fixed height */\n        margin-bottom: 20px;\n    }\n\n    .custom-checkbox input[type="checkbox"] {\n        opacity: 0;\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        cursor: pointer;\n    }\n\n    .custom-checkbox .checkmark {\n        position: relative; /* Adjusted to position relative to the flex container */\n        height: 20px;\n        width: 20px;\n        background-color: #fff;\n        border: 1px solid #000;\n        display: flex; /* Aligns the pseudo-elements inside this container */\n        justify-content: center; /* Centers horizontally */\n        align-items: center; /* Centers vertically */\n    }\n\n    .custom-checkbox .checkmark::before,\n    .custom-checkbox .checkmark::after {\n        content: '';\n        position: absolute;\n        width: 0.5px;\n        height: 60%; /* Adjusted relative size to the checkbox */\n        background-color: black;\n        display: none; /* Hidden by default */\n    }\n\n    .custom-checkbox .checkmark::before {\n        transform: rotate(45deg) scale(2.3);\n    }\n\n    .custom-checkbox .checkmark::after {\n        transform: rotate(-45deg) scale(2.3);\n    }\n\n    .custom-checkbox input[type="checkbox"]:checked + .checkmark::before,\n    .custom-checkbox input[type="checkbox"]:checked + .checkmark::after {\n        display: block;\n    }\n\n    .form-hack {\n        display: inline-flex;\n        flex-wrap: nowrap;\n        width: 100%;\n    }\n\n    .form-hack label {\n        width: 20%;\n    }\n    .form-hack p {\n        white-space: nowrap;\n        text-align: left;\n        margin-left: 10px;\n        margin-top: 15px;\n    }\n\n    .submit-wrapper {\n        display: flex;\n        margin-top: 20px;\n    }\n\n    #get-in-touch {\n        width:100%;\n        display: inline-flex;\n        flex-wrap: wrap;\n        text-align: left;\n        padding: 10px;\n    }\n\n    #get-in-touch div {\n        width: 50%;\n    }\n\n    #get-in-touch h1 {\n        text-align: left;\n        font-size: 5vw;\n    }\n\n    .reduced {\n        line-height: 0.8;\n    }\n\n    .align-end {\n        align-self: flex-end;\n    }\n\n\n    .white-letters {\n        align-items: flex-start !important;\n        padding: 0 30px 0;\n        height: auto;\n        background-color: black;\n    }\n\n    .white-letters a {\n        font-family: 'Apercu Mono Pro', monospace;\n        text-decoration: none;\n        color: white;\n        padding-top: 30px;\n    }\n\n    .white-letters .logo {\n        color: white;\n    }\n}\n\n\n\n\n`,""]);const u=d},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,i,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(a[l]=!0)}for(var s=0;s<n.length;s++){var p=[].concat(n[s]);o&&a[p[0]]||(void 0!==r&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=r),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),i&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=i):p[4]="".concat(i)),e.push(p))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},a=[],c=0;c<n.length;c++){var l=n[c],s=o.base?l[0]+o.base:l[0],p=r[s]||0,d="".concat(s," ").concat(p);r[s]=p+1;var f=t(d),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)e[f].references++,e[f].updater(m);else{var u=i(m,o);o.byIndex=c,e.splice(c,0,{identifier:d,updater:u,references:1})}a.push(d)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var r=o(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var c=t(r[a]);e[c].references--}for(var l=o(n,i),s=0;s<r.length;s++){var p=t(r[s]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}r=l}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},866:(n,e,t)=>{n.exports=t.p+"46db85e5f6e62f5ee4bf.otf"},125:(n,e,t)=>{n.exports=t.p+"4ea488acc0493ca21a6f.otf"}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var i=o.length-1;i>-1&&(!n||!/^http(s?):/.test(n));)n=o[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var o=t(72),i=t.n(o),r=t(825),a=t.n(r),c=t(659),l=t.n(c),s=t(56),p=t.n(s),d=t(540),f=t.n(d),m=t(113),u=t.n(m),h=t(208),g={};g.styleTagTransform=u(),g.setAttributes=p(),g.insert=l().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=f(),i()(h.A,g),h.A&&h.A.locals&&h.A.locals,console.log("Application loaded"),document.addEventListener("DOMContentLoaded",(function(){const n=document.getElementById("menu-toggle");n&&n.addEventListener("click",(function(){const n=document.getElementById("menu-modal");n&&(n.classList.toggle("hidden"),n.classList.toggle("visible"))}));const e=document.getElementById("close");e&&e.addEventListener("click",(function(){const n=document.getElementById("menu-modal");n&&(n.classList.add("hidden"),n.classList.remove("visible"))}));const t=document.getElementsByClassName("accordion");let o;for(o=0;o<t.length;o++)t[o].addEventListener("click",(function(){this.classList.toggle("active");var n=this.nextElementSibling;n.style.maxHeight?n.style.maxHeight=null:n.style.maxHeight=n.scrollHeight+"px"}))}))})();