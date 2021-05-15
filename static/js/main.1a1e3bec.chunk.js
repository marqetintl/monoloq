(this["webpackJsonp@miq/monoloq"]=this["webpackJsonp@miq/monoloq"]||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s}));var a=n(3),c=!1,r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{hour:"numeric",minute:"numeric"},n=new Intl.DateTimeFormat("en-US",Object(a.a)({},t));return n.format(new Date(e))},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{weekday:"short",month:"long",day:"numeric"},n=new Intl.DateTimeFormat("en-US",Object(a.a)({},t));return n.format(new Date(e))},s=function(e){var t=e.getDate(),n=e.getMonth()+1;return t<10&&(t="0"+t),n<10&&(n="0"+n),e.getFullYear()+"-"+n+"-"+t}},13:function(e,t,n){"use strict";n.d(t,"b",(function(){return I})),n.d(t,"a",(function(){return R})),n.d(t,"c",(function(){return F}));var a=n(12),c=n(0),r=n(4),i=n(16),s=n(3),o=n(11),u=n(31),d=n(50),l=n(28),j=n(21),b=/(\n|\r|\r\n){2,}/g,O=function(){return function(e){return new Promise((function(t){var n=localStorage.getItem("entries");return n?n=JSON.parse(n):(n=I.entries,localStorage.setItem("entries",JSON.stringify(n))),e({type:"SET_ENTRIES",payload:n}),t(n)}))}},h=function(e){return function(t,n){return new Promise((function(a){var c=n().entries,r=Object(s.a)(Object(s.a)({},c),{},Object(j.a)({},"".concat(e.slug),e));localStorage.setItem("entries",JSON.stringify(r)),t({type:"SET_ENTRIES",payload:r}),a(Object(s.a)(Object(s.a)({},e),{},{status:1}))}))}},m=(n(41),n(1)),v=(0,n(0).forwardRef)((function(e,t){var n=e.value,c=e.onChange,r=e.placeholder,i=void 0===r?"Start typing ...":r,o=Object(a.a)(e,["value","onChange","placeholder"]),u=e.style;return Object(m.jsxs)("div",{className:"TextareaX",children:[Object(m.jsx)("span",{id:"Mirror",style:u,children:"".concat(n,"\n")}),Object(m.jsx)("div",{className:"Input",children:Object(m.jsx)("textarea",Object(s.a)(Object(s.a)({},o),{},{value:n,onChange:c,placeholder:i,style:u,ref:t}))})]})})),f=n(48),p=["What are your thoughts ...","What are you up to ...","How are you feeling right now ?!","How happy are you ?","Are you stressed out?","Are you worried about the future?"],x=function(e){var t=e.placeholder,n=void 0===t?Object(l.sample)(p):t,a=e.maxLength,c=void 0===a?280:a;return Object(m.jsx)(v,Object(s.a)(Object(s.a)({},e),{},{placeholder:n,maxLength:c,required:!0}))};function g(e){var t=Object(o.b)(),n=Object(c.useState)(""),a=Object(u.a)(n,2),r=a[0],i=a[1];return Object(m.jsx)("div",{id:"EntryAddForm",children:Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n,a={slug:Object(d.a)(),text:(n=r,n&&(n=n.trim().replace(b,"\n\n")),n),dt:new Date};t(h(a)).then((function(e){e.status&&i("")}))},className:"entries-add-form",children:[Object(m.jsx)("div",{className:"entries-add-form-input",children:Object(m.jsx)(x,{value:r,onChange:function(e){return i(e.target.value)}})}),Object(m.jsx)("div",{className:"entries-add-form-submit",children:Object(m.jsx)("button",{type:"submit",className:"btn",title:"Submit",children:Object(m.jsx)(f.a,{className:"btn-icon"})})})]})})}var y=n(10);function N(e){var t=e.data,n=void 0===t?{}:t;Object(a.a)(e,["data"]);return Object(m.jsxs)("div",{className:"entry",children:[Object(m.jsx)("div",{className:"entry-text",children:n.text}),Object(m.jsx)("div",{className:"entry-meta",children:Object(m.jsx)("span",{className:"entry-meta-time",children:"".concat(Object(y.d)(n.date))})})]})}n(43);var E=new Map;function w(e){var t=Object(o.b)(),n=Object(o.c)((function(e){return e.entries}));return Object(c.useEffect)((function(){t(O())}),[t]),E.clear(),Object.values(n).forEach((function(e){var t=new Date(e.dt);e=Object(s.a)(Object(s.a)({},e),{},{date:t});var n=Object(y.c)(t);E.has(n)||E.set(n,{date:t,entries:[]});var a=E.get(n);a.entries.push(e),E.set(n,a)})),Object(m.jsxs)("section",{id:"EntriesView",className:"entries",children:[Object(m.jsx)("div",{className:"entries-days",children:Object(i.a)(E.values()).map((function(e){return Object(c.createElement)(S,{data:e,dispatch:t,key:"".concat(e.date)})}))}),Object(m.jsx)("footer",{className:"viewport-footer",children:Object(m.jsx)(g,{})})]})}var S=function(e){var t=e.data,n=void 0===t?{entries:[]}:t,a=e.dispatch;return Object(m.jsxs)("div",{className:"entries-day",children:[Object(m.jsx)("div",{className:"weekday",children:Object(y.b)(n.date)}),Object(m.jsx)("div",{className:"items",children:n.entries.map((function(e){return Object(c.createElement)(N,{dispatch:a,data:e,key:e.slug})}))})]})},T=n(29),_=n(49),I=(n(44),{entries:{},settings:{created:null,theme:"light"}}),D=Object(c.lazy)((function(){return Promise.resolve().then(n.bind(null,29))}));function R(e){return Object(m.jsx)("div",{id:"Monoloq",className:"viewport",children:Object(m.jsxs)("div",{className:"mn viewport-content",children:[Object(m.jsx)("header",{className:"viewport-header",children:Object(m.jsx)("div",{children:Object(m.jsx)(C,{})})}),Object(m.jsx)("section",{className:"viewport-body",children:Object(m.jsx)("main",{className:"viewport-main",role:"main",children:Object(m.jsx)(c.Suspense,{fallback:Object(m.jsx)("div",{children:"loading ..."}),children:Object(m.jsxs)(r.c,{children:[Object(m.jsx)(r.a,{path:"/settings/",component:D}),Object(m.jsx)(r.a,{path:"/",component:w})]})})})})]})})}var C=function(e){var t=e.sitename,n=void 0===t?"Monoloq":t;Object(a.a)(e,["sitename"]);return Object(m.jsxs)("div",{id:"Logo",className:"btn",children:[Object(m.jsx)(_.a,{className:"btn-icon"}),Object(m.jsx)("span",{className:"btn-label",children:n})]})},F={entries:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I.entries,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SET_ENTRIES":return Object(s.a)({},a);case"CLEAR_ENTRIES":return Object(s.a)({},I.entries);default:return Object(s.a)({},e)}},settings:T.settingsReducer}},29:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i})),n.d(t,"settingsReducer",(function(){return s}));var a=n(3),c=(n(0),n(13)),r=n(1);function i(){return Object(r.jsx)("div",{children:"settings"})}var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.b.settings,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.type,r=t.payload,i=void 0===r?{}:r;switch(n){case"RESET_SETTINGS":return Object(a.a)({},e);case"SET_THEME":return Object(a.a)(Object(a.a)({},e),i);default:return e}}},41:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t),n.d(t,"appStore",(function(){return x}));var a=n(16),c=n(3),r=n(0),i=n.n(r),s=n(18),o=n.n(s),u=n(27),d=n(11),l=n(30),j=n(17),b=n(13),O=n(10),h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},m=n(1),v=Object(j.b)(Object(c.a)({},b.c)),f=[u.a],p=[j.a.apply(void 0,f)];O.a&&(p=[].concat(Object(a.a)(p),[window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}]));var x=Object(j.d)(v,b.b,j.c.apply(void 0,Object(a.a)(p)));o.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(l.a,{children:Object(m.jsx)(d.a,{store:x,children:Object(m.jsx)(b.a,{})})})}),document.getElementById("root")),h()}},[[46,1,2]]]);
//# sourceMappingURL=main.1a1e3bec.chunk.js.map