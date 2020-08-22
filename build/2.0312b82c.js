/*! For license information please see 2.0312b82c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{101:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(106),o=a(97),s=a(100),l=a(10);const i="light",u="dark",d=e=>e===u?u:i,m=()=>l.a.canUseDOM?d(document.documentElement.getAttribute("data-theme")):i,h=e=>{try{localStorage.setItem("theme",d(e))}catch(t){console.error(t)}};var f=()=>{const{siteConfig:{themeConfig:{colorMode:{disableSwitch:e=!1}={}}={}}={}}=Object(o.a)(),[t,a]=Object(n.useState)(m),c=Object(n.useCallback)(()=>{a(i),h(i)},[]),r=Object(n.useCallback)(()=>{a(u),h(u)},[]);return Object(n.useEffect)(()=>{document.documentElement.setAttribute("data-theme",d(t))},[t]),Object(n.useEffect)(()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&a(d(e))}catch(t){console.error(t)}},[a]),Object(n.useEffect)(()=>{e||window.matchMedia("(prefers-color-scheme: dark)").addListener(({matches:e})=>{a(e?u:i)})},[]),{isDarkTheme:t===u,setLightTheme:c,setDarkTheme:r}},b=a(113);var v=function(e){const{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}=f();return c.a.createElement(b.a.Provider,{value:{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}},e.children)};var p=()=>{const[e,t]=Object(n.useState)({}),a=Object(n.useCallback)((e,t)=>{try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}},[]);return Object(n.useEffect)(()=>{try{const e={};for(let t=0;t<localStorage.length;t+=1){const a=localStorage.key(t);if(a.startsWith("docusaurus.tab.")){e[a.substring("docusaurus.tab.".length)]=localStorage.getItem(a)}}t(e)}catch(e){console.error(e)}},[]),{tabGroupChoices:e,setTabGroupChoices:(e,n)=>{t(t=>({...t,[e]:n})),a(e,n)}}};var g=()=>{const{siteConfig:{themeConfig:{announcementBar:{id:e="annoucement-bar"}={}}={}}={}}=Object(o.a)(),[t,a]=Object(n.useState)(!0);return Object(n.useEffect)(()=>{if(!e)return;const t=localStorage.getItem("docusaurus.announcement.id"),n=e!==t;localStorage.setItem("docusaurus.announcement.id",e),n&&localStorage.setItem("docusaurus.announcement.dismiss","false"),(n||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&a(!1)},[]),{isAnnouncementBarClosed:t,closeAnnouncementBar:()=>{localStorage.setItem("docusaurus.announcement.dismiss","true"),a(!0)}}},k=a(114);var E=function(e){const{tabGroupChoices:t,setTabGroupChoices:a}=p(),{isAnnouncementBarClosed:n,closeAnnouncementBar:r}=g();return c.a.createElement(k.a.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:a,isAnnouncementBarClosed:n,closeAnnouncementBar:r}},e.children)},O=a(115),j=a(52),y=a.n(j);var w=function(){const{siteConfig:{themeConfig:{announcementBar:e={}}={}}={}}=Object(o.a)(),{content:t,backgroundColor:a,textColor:n}=e,{isAnnouncementBarClosed:r,closeAnnouncementBar:s}=Object(O.a)();return!t||r?null:c.a.createElement("div",{className:y.a.announcementBar,style:{backgroundColor:a,color:n},role:"banner"},c.a.createElement("div",{className:y.a.announcementBarContent,dangerouslySetInnerHTML:{__html:t}}),c.a.createElement("button",{type:"button",className:y.a.announcementBarClose,onClick:s,"aria-label":"Close"},c.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},C=a(2),_=a(99),N=a(98),S=()=>null,T=a(123),x=a.n(T),L=a(53),I=a.n(L);const B=({icon:e,style:t})=>c.a.createElement("span",{className:Object(_.a)(I.a.toggle,I.a.dark),style:t},e),D=({icon:e,style:t})=>c.a.createElement("span",{className:Object(_.a)(I.a.toggle,I.a.light),style:t},e);var M=function(e){const{siteConfig:{themeConfig:{colorMode:{switchConfig:{darkIcon:t,darkIconStyle:a,lightIcon:n,lightIconStyle:r}}}},isClient:s}=Object(o.a)();return c.a.createElement(x.a,Object(C.a)({disabled:!s,icons:{checked:c.a.createElement(B,{icon:t,style:a}),unchecked:c.a.createElement(D,{icon:n,style:r})}},e))},P=a(104),A=a(105);var V=function(e){const[t,a]=Object(n.useState)(e);return Object(n.useEffect)(()=>{const e=()=>a(window.location.hash);return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),[t,a]},X=a(116);var F=e=>{const[t,a]=Object(n.useState)(!0),[c,r]=Object(n.useState)(!1),[o,s]=Object(n.useState)(0),[l,i]=Object(n.useState)(0),u=Object(n.useCallback)(e=>{null!==e&&i(e.getBoundingClientRect().height)},[]),d=Object(A.useLocation)(),[m,h]=V(d.hash);return Object(X.a)(({scrollY:t})=>{if(!e)return;if(0===t&&a(!0),t<l)return;if(c)return r(!1),a(!1),void s(t);const n=document.documentElement.scrollHeight-l,i=window.innerHeight;o&&t>=o?a(!1):t+i<n&&a(!0),s(t)},[o,l]),Object(n.useEffect)(()=>{e&&(a(!0),h(d.hash))},[d]),Object(n.useEffect)(()=>{e&&m&&r(!0)},[m]),{navbarRef:u,isNavbarVisible:t}},U=a(117),R=a(118),G=a(119),H=a(54),Y=a.n(H);function W({activeBasePath:e,activeBaseRegex:t,to:a,href:n,label:r,activeClassName:o="navbar__link--active",prependBaseUrlToHref:l,...i}){const u=Object(s.a)(a),d=Object(s.a)(e),m=Object(s.a)(n,{forcePrependBaseUrl:!0});return c.a.createElement(N.a,Object(C.a)({},n?{target:"_blank",rel:"noopener noreferrer",href:l?m:n}:{isNavLink:!0,activeClassName:o,to:u,...e||t?{isActive:(e,a)=>t?new RegExp(t).test(a.pathname):a.pathname.startsWith(d)}:null},i),r)}function $({items:e,position:t,className:a,...n}){const r=(e,t=!1)=>Object(_.a)({"navbar__item navbar__link":!t,dropdown__link:t},e);return e?c.a.createElement("div",{className:Object(_.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t})},c.a.createElement(W,Object(C.a)({className:r(a)},n,{onClick:n.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{function t(){e.target.parentNode.classList.toggle("dropdown--show")}"Enter"!==e.key||n.to||t(),"Tab"===e.key&&t()}}),n.label),c.a.createElement("ul",{className:"dropdown__menu"},e.map(({className:e,...t},a)=>c.a.createElement("li",{key:a},c.a.createElement(W,Object(C.a)({activeClassName:"dropdown__link--active",className:r(e,!0)},t)))))):c.a.createElement(W,Object(C.a)({className:r(a)},n))}function z({items:e,position:t,className:a,...n}){const r=(e,t=!1)=>Object(_.a)("menu__link",{"menu__link--sublist":t},e);return e?c.a.createElement("li",{className:"menu__list-item"},c.a.createElement(W,Object(C.a)({className:r(a,!0)},n),n.label),c.a.createElement("ul",{className:"menu__list"},e.map(({className:e,...t},a)=>c.a.createElement("li",{className:"menu__list-item",key:a},c.a.createElement(W,Object(C.a)({activeClassName:"menu__link--active",className:r(e)},t,{onClick:n.onClick})))))):c.a.createElement("li",{className:"menu__list-item"},c.a.createElement(W,Object(C.a)({className:r(a)},n)))}var J=function({mobile:e=!1,...t}){const a=e?z:$;return c.a.createElement(a,t)},K=a(107);const q=(e,t)=>"next"===e.name?t:e.name,Q=e=>e.docs.find(t=>t.id===e.mainDocId);const Z={default:J,docsVersion:function({label:e,to:t,docsPluginId:a,nextVersionLabel:n,...r}){const o=Object(K.useActiveVersion)(a),s=Object(K.useLatestVersion)(a),l=null!=o?o:s,i=null!=e?e:((e,t)=>"next"===e.name?t:e.name)(l,n),u=null!=t?t:(e=>e.docs.find(t=>t.id===e.mainDocId))(l).path;return c.a.createElement(J,Object(C.a)({},r,{label:i,to:u}))},docsVersionDropdown:function({mobile:e,docsPluginId:t,nextVersionLabel:a,...n}){var r;const o=Object(K.useActiveDocContext)(t),s=Object(K.useVersions)(t),l=Object(K.useLatestVersion)(t),i=s.map(e=>{const t=(null==o?void 0:o.alternateDocVersions[e.name])||Q(e);return{isNavLink:!0,label:q(e,a),to:t.path,isActive:()=>e===(null==o?void 0:o.activeVersion)}}),u=null!==(r=o.activeVersion)&&void 0!==r?r:l,d=e?"Versions":q(u,a),m=e?void 0:Q(u).path;return c.a.createElement(J,Object(C.a)({},n,{mobile:e,label:d,to:m,items:i}))}};function ee({type:e,...t}){const a=((e="default")=>{const t=Z[e];if(!t)throw new Error(`No NavbarItem component found for type=${e}.`);return t})(e);return c.a.createElement(a,t)}var te=function(){const{siteConfig:{themeConfig:{navbar:{title:e="",items:t=[],hideOnScroll:a=!1}={},colorMode:{disableSwitch:r=!1}={}}},isClient:s}=Object(o.a)(),[l,i]=Object(n.useState)(!1),[u,d]=Object(n.useState)(!1),{isDarkTheme:m,setLightTheme:h,setDarkTheme:f}=Object(P.a)(),{navbarRef:b,isNavbarVisible:v}=F(a),{logoLink:p,logoLinkProps:g,logoImageUrl:k,logoAlt:E}=Object(G.a)();Object(U.a)(l);const O=Object(n.useCallback)(()=>{i(!0)},[i]),j=Object(n.useCallback)(()=>{i(!1)},[i]),y=Object(n.useCallback)(e=>e.target.checked?f():h(),[h,f]),w=Object(R.a)();Object(n.useEffect)(()=>{w===R.b.desktop&&i(!1)},[w]);const{leftItems:T,rightItems:x}=function(e){return{leftItems:e.filter(e=>{var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:"right")}),rightItems:e.filter(e=>{var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:"right")})}}(t);return c.a.createElement("nav",{ref:b,className:Object(_.a)("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":l,[Y.a.navbarHideable]:a,[Y.a.navbarHidden]:!v})},c.a.createElement("div",{className:"navbar__inner"},c.a.createElement("div",{className:"navbar__items"},null!=t&&0!==t.length&&c.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:O,onKeyDown:O},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},c.a.createElement("title",null,"Menu"),c.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),c.a.createElement(N.a,Object(C.a)({className:"navbar__brand",to:p},g),null!=k&&c.a.createElement("img",{key:s,className:"navbar__logo",src:k,alt:E}),null!=e&&c.a.createElement("strong",{className:Object(_.a)("navbar__title",{[Y.a.hideLogoText]:u})},e)),T.map((e,t)=>c.a.createElement(ee,Object(C.a)({},e,{key:t})))),c.a.createElement("div",{className:"navbar__items navbar__items--right"},x.map((e,t)=>c.a.createElement(ee,Object(C.a)({},e,{key:t}))),!r&&c.a.createElement(M,{className:Y.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:m,onChange:y}),c.a.createElement(S,{handleSearchBarToggle:d,isSearchBarExpanded:u}))),c.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:j}),c.a.createElement("div",{className:"navbar-sidebar"},c.a.createElement("div",{className:"navbar-sidebar__brand"},c.a.createElement(N.a,Object(C.a)({className:"navbar__brand",onClick:j,to:p},g),null!=k&&c.a.createElement("img",{key:s,className:"navbar__logo",src:k,alt:E}),null!=e&&c.a.createElement("strong",{className:"navbar__title"},e)),!r&&l&&c.a.createElement(M,{"aria-label":"Dark mode toggle in sidebar",checked:m,onChange:y})),c.a.createElement("div",{className:"navbar-sidebar__items"},c.a.createElement("div",{className:"menu"},c.a.createElement("ul",{className:"menu__list"},t.map((e,t)=>c.a.createElement(ee,Object(C.a)({mobile:!0},e,{onClick:j,key:t}))))))))},ae=a(102);a(55);function ne({children:e}){return c.a.createElement(v,null,c.a.createElement(E,null,e))}t.a=function(e){const{siteConfig:t={}}=Object(o.a)(),{favicon:a,title:n,themeConfig:{image:l},url:i}=t,{children:u,title:d,noFooter:m,description:h,image:f,keywords:b,permalink:v,version:p}=e,g=d?`${d} | ${n}`:n,k=f||l,E=Object(s.a)(k,{absolute:!0}),O=Object(s.a)(a);return c.a.createElement(ne,null,c.a.createElement(r.a,null,c.a.createElement("html",{lang:"en"}),g&&c.a.createElement("title",null,g),g&&c.a.createElement("meta",{property:"og:title",content:g}),a&&c.a.createElement("link",{rel:"shortcut icon",href:O}),h&&c.a.createElement("meta",{name:"description",content:h}),h&&c.a.createElement("meta",{property:"og:description",content:h}),p&&c.a.createElement("meta",{name:"docsearch:version",content:p}),b&&b.length&&c.a.createElement("meta",{name:"keywords",content:b.join(",")}),k&&c.a.createElement("meta",{property:"og:image",content:E}),k&&c.a.createElement("meta",{property:"twitter:image",content:E}),k&&c.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+g}),v&&c.a.createElement("meta",{property:"og:url",content:i+v}),v&&c.a.createElement("link",{rel:"canonical",href:i+v}),c.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),c.a.createElement(w,null),c.a.createElement(te,null),c.a.createElement("div",{className:"main-wrapper"},u),!m&&c.a.createElement(ae.a,null))}},104:function(e,t,a){"use strict";var n=a(0),c=a(113);t.a=function(){const e=Object(n.useContext)(c.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},113:function(e,t,a){"use strict";var n=a(0);const c=a.n(n).a.createContext(void 0);t.a=c},114:function(e,t,a){"use strict";var n=a(0);const c=Object(n.createContext)(void 0);t.a=c},115:function(e,t,a){"use strict";var n=a(0),c=a(114);t.a=function(){const e=Object(n.useContext)(c.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},116:function(e,t,a){"use strict";var n=a(0),c=a(10);const r=()=>({scrollX:c.a.canUseDOM?window.pageXOffset:0,scrollY:c.a.canUseDOM?window.pageYOffset:0});t.a=(e,t=[])=>{const[a,c]=Object(n.useState)(r()),o=()=>{const t=r();c(t),e&&e(t)};return Object(n.useEffect)(()=>(window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o,{passive:!0})),t),a}},117:function(e,t,a){"use strict";var n=a(0);t.a=function(e=!0){Object(n.useEffect)(()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"}),[e])}},118:function(e,t,a){"use strict";a.d(t,"b",(function(){return c}));var n=a(0);const c={desktop:"desktop",mobile:"mobile"};t.a=function(){const e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?c.desktop:c.mobile}const[a,r]=Object(n.useState)(t);return Object(n.useEffect)(()=>{if(e)return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a);function a(){r(t())}},[]),a}},119:function(e,t,a){"use strict";var n=a(97),c=a(104),r=a(100),o=a(103);t.a=()=>{const{siteConfig:{themeConfig:{navbar:{logo:e={}}={}}={}}={}}=Object(n.a)(),{isDarkTheme:t}=Object(c.a)(),a=Object(r.a)(e.href||"/");let s={};e.target?s={target:e.target}:Object(o.a)(a)||(s={rel:"noopener noreferrer",target:"_blank"});const l=e.srcDark&&t?e.srcDark:e.src;return{logoLink:a,logoLinkProps:s,logoImageUrl:Object(r.a)(l),logoAlt:e.alt}}},123:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(0),o=m(r),s=m(a(124)),l=m(a(7)),i=m(a(125)),u=m(a(126)),d=a(127);function m(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),c(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,c=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),r=(0,s.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return o.default.createElement("div",{className:r,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},c,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(r.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:o.default.createElement(i.default,null),unchecked:o.default.createElement(u.default,null)}},h.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])}},124:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var o=c.apply(null,n);o&&e.push(o)}else if("object"===r)for(var s in n)a.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(n=function(){return c}.apply(t,[]))||(e.exports=n)}()},125:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,c=a(0),r=(n=c)&&n.__esModule?n:{default:n};t.default=function(){return r.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},r.default.createElement("title",null,"switch-check"),r.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},126:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,c=a(0),r=(n=c)&&n.__esModule?n:{default:n};t.default=function(){return r.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},r.default.createElement("title",null,"switch-x"),r.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},127:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}}}]);