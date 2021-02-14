(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),o=n(6),r=(n(0),n(96)),i={id:"cosine",title:"\ud83c\udf2f  Cosine"},c={unversionedId:"cosine",id:"cosine",isDocsHomePage:!1,title:"\ud83c\udf2f  Cosine",description:"findCosine(adj, hypotenuse)",source:"@site/docs/cosine.md",permalink:"/docs/cosine",editUrl:"https://github.com/filippo-fonseca/mathiumjs/docs/cosine.md",sidebar:"someSidebar",previous:{title:"\ud83d\udea7 Sine",permalink:"/docs/sine"},next:{title:"\ud83c\udf77  Tangent",permalink:"/docs/tangent"}},l=[{value:"<code>findCosine(adj, hypotenuse)</code>",id:"findcosineadj-hypotenuse",children:[]},{value:"Concept",id:"concept",children:[]},{value:"Example 1: cos(32) = 4.3 / 7.8",id:"example-1-cos32--43--78",children:[]},{value:"Example 2: cos(22) = 27.84 / 12.4",id:"example-2-cos22--2784--124",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"findcosineadj-hypotenuse"},Object(r.b)("inlineCode",{parentName:"h2"},"findCosine(adj, hypotenuse)")),Object(r.b)("p",null,"In order to implement cosine in our code with Mathium, we must call the function using Mathium's API, as such:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'import Mathium from "mathiumjs";\n\nlet formula = Mathium.findCosine(adj, hypotenuse);\n')),Object(r.b)("p",null,"NOTE: The name Mathium after ",Object(r.b)("inlineCode",{parentName:"p"},"import")," as is arbitrary; it can be replaced with whatever you'd like:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'import Foo from "mathiumjs";\n\nlet formula = Foo.findCosine(adj, hypotenuse);\n')),Object(r.b)("h2",{id:"concept"},"Concept"),Object(r.b)("p",null,"The Cosine is a trigonometric property that allows you to find the ratio of the length of the side adjacent the angle to the length of the hypotenuse, as shown:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"adjacent / hypotenuse")),Object(r.b)("p",null,"NOTE: In the three main trigonometric ratios (","[sine]",", cosine, and ","[tangent]","), the triangle must be right in order to perform them."),Object(r.b)("p",null,"A clever way of remembering these three ratios and their respective properties is the abbreviation ",Object(r.b)("inlineCode",{parentName:"p"},"SOH CAH TOA"),". ",Object(r.b)("inlineCode",{parentName:"p"},"SOH")," is short for ",Object(r.b)("inlineCode",{parentName:"p"},"Sine = Opposite / Hypotenuse"),", ",Object(r.b)("inlineCode",{parentName:"p"},"CAH")," for ",Object(r.b)("inlineCode",{parentName:"p"},"Cosine = Adjacent / Hypotenuse"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"TOA")," for ",Object(r.b)("inlineCode",{parentName:"p"},"Tangent = opposite / adjacent"),"."),Object(r.b)("p",null,"In our Mathium code, it's important to note the following:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"In-Equation"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"In-Code"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"adjacent"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"adj")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"hypotenuse"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"hypotenuse")))),Object(r.b)("p",null,"Let's look at a couple examples to illustrate what cosine really looks like in real-life scenarios:"),Object(r.b)("h2",{id:"example-1-cos32--43--78"},"Example 1: cos(32) = 4.3 / 7.8"),Object(r.b)("p",null,"When used in our code, we can make it look like the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'import Mathium from "mathiumjs";\n\nfunction cosineCalc(adj, hypotenuse) {\n  let formula = Mathium.findCosine(adj, hypotenuse);\n  return formula;\n}\n\n// Test the function\nconsole.log(cosineCalc(4.3, 7.8));\n')),Object(r.b)("h2",{id:"example-2-cos22--2784--124"},"Example 2: cos(22) = 27.84 / 12.4"),Object(r.b)("p",null,"When used in our code, we can make it look like the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'import Mathium from "mathiumjs";\n\nfunction cosineCalc(adj, hypotenuse) {\n  let formula = Mathium.findCosine(adj, hypotenuse);\n  return formula;\n}\n\n// Test the function\nconsole.log(cosineCalc(27.84, 12.4));\n')),Object(r.b)("p",null,"REMEMBER: These are just examples. Feel free to take this function (and any other one that we offer) and customize them to your heart's desire."))}s.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||r;return n?o.a.createElement(d,c(c({ref:t},p),{},{components:n})):o.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<r;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);