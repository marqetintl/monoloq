(this["webpackJsonp@miq/monoloq"]=this["webpackJsonp@miq/monoloq"]||[]).push([[3],{90:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var c=n(11),a=n(17),s=n(6),o=n(0),i=n(15),u=n(42),r=(n(90),n(1));function d(e){var t=Object(o.useState)(new Date),n=Object(a.a)(t,1)[0],c=Object(o.useState)(""),d=Object(a.a)(c,2),l=d[0],h=d[1],O=Object(i.b)(),f=Object(i.c)((function(e){return e.todos}))[Object(s.e)(n)]||[];Object(o.useEffect)((function(){O(u.b.byDate(new Date))}),[O]);return Object(r.jsxs)("div",{id:"TodosView",children:[Object(r.jsxs)("div",{className:"todos",children:[Object(r.jsx)(b,{}),Object(r.jsx)("div",{className:"todos-items",children:f.map((function(e){return Object(o.createElement)(j,{data:e,dispatch:O,key:e.slug})}))})]}),Object(r.jsx)("div",{className:"viewport-footer",children:Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O(u.b.post(l)).then((function(e){e.status;h("")}))},className:"todo-add-form",children:[Object(r.jsx)("input",{required:!0,type:"text",value:l,onChange:function(e){return h(e.target.value)},maxLength:200,placeholder:"What do you have to do?",tabIndex:1}),Object(r.jsx)("div",{className:"btn",children:Object(r.jsx)("input",{type:"submit",value:"Save"})})]})})]})}var j=function(e){var t=e.data,n=e.dispatch,i=(Object(c.a)(e,["data","dispatch"]),Object(o.useState)(t.isDone||!1)),d=Object(a.a)(i,2),j=d[0],b=d[1];if(t.slug){return Object(r.jsxs)("div",{className:Object(s.g)(["todo",j&&"done"]),children:[Object(r.jsx)("div",{className:"value",children:t.value}),Object(r.jsx)("input",{type:"checkbox",name:"isDone",checked:j,onChange:function(e){var c=!j;n(u.b.patch(t,{isDone:c})).then((function(e){if(!e.status)throw new Error("Something went wrong");b(c)})).catch((function(e){console.log(e)}))}})]})}},b=function(e){return Object(r.jsx)("div",{className:"",children:"Week"})}}}]);
//# sourceMappingURL=3.f2a79000.chunk.js.map