(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,s=n(7),i=n.n(s),l=n(6),a=n(8),o=n(1),r=n(4),u=n.n(r),b=(n(13),n(14),n(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.Alphabetically="Alphabetically",t.ByLength="ByLength",t.Default=""}(c||(c={}));var d=function(){var t=Object(o.useState)(c.Default),e=Object(l.a)(t,2),n=e[0],s=e[1],i=Object(o.useState)(!1),r=Object(l.a)(i,2),d=r[0],j=r[1],g=function(t,e){var n=e.sortField,s=e.isReversed,i=Object(a.a)(t);return n&&i.sort((function(t,e){switch(n){case c.Alphabetically:return t.localeCompare(e);case c.ByLength:return t.length-e.length;default:return 0}})),s&&i.reverse(),i}(h,{sortField:n,isReversed:d});return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:u()("button is-info",{"is-light":n!==c.Alphabetically}),onClick:function(){return s(c.Alphabetically)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:u()("button is-success",{"is-light":n!==c.ByLength}),onClick:function(){return s(c.ByLength)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:u()("button is-warning",{"is-light":!d}),onClick:function(){return j(!d)},children:"Reverse"}),(n||d)&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){s(c.Default),j(!1)},children:"Reset"})]}),Object(b.jsx)("ul",{children:g.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};i.a.render(Object(b.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e57eb906.chunk.js.map