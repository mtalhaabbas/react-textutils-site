(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(3),r=n.n(o),s=(n(11),n(4)),i=(n(12),n(1));function l(e){return Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("div",{className:"navbar-brand",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"}),Object(i.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(i.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable DarkMode"})]})]})]})})}var b=n(2);n(6);function d(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),c=n[0],o=n[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(i.jsx)("h1",{className:"mb-4",children:e.heading}),Object(i.jsx)("div",{className:"mb-3",children:Object(i.jsx)("textarea",{className:"form-control",value:c,onChange:function(e){o(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#13466e":"white",color:"dark"===e.mode?"white":"#042743"},id:"myBox",rows:"8"})}),Object(i.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var e=c.toUpperCase();o(e),b.b.success("Converted to uppercase!",{position:"top-center"})},children:"Convert to Uppercase"}),Object(i.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var e=c.toLowerCase();o(e),b.b.success("Converted to lowercase!",{position:"top-center"})},children:"Convert to Lowercase"}),Object(i.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1",onClick:function(){o(""),Object(b.b)("Text Cleared!",{position:"top-center"})},children:"Clear Text"}),Object(i.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1",onClick:function(){navigator.clipboard.writeText(c),b.b.success("Copied to Clipboard!",{position:"top-center"})},children:"Copy Text"}),Object(i.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var e=c.split(/[ ]+/);o(e.join(" ")),Object(b.b)("Extra spaces removed!",{position:"top-center"})},children:"Remove Extra Spaces"})]}),Object(i.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(i.jsx)("h2",{children:"Your text summary"}),Object(i.jsxs)("p",{children:[c.split(/\s+/).filter((function(e){return 0!==e.length})).length," words and ",c.length," characters"]}),Object(i.jsxs)("p",{children:[.008*c.split(/\s+/).filter((function(e){return 0!==e.length})).length," Minutes read"]}),Object(i.jsx)("h2",{children:"Preview"}),Object(i.jsx)("p",{children:c.length>0?c:"Nothing to preview!"})]}),Object(i.jsx)(b.a,{})]})}var j=function(){var e=Object(a.useState)("light"),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{title:"TextUtils",mode:n,toggleMode:function(){"light"===n?(c("dark"),document.body.style.backgroundColor="#042743",Object(b.b)("Dark mode has been enabled",{position:"top-center"})):(c("light"),document.body.style.backgroundColor="white",b.b.success("Light mode has been enabled",{position:"top-center"}))}},new Date),Object(i.jsx)(d,{heading:"Try TextUtils - word counter, character counter, remove extra spaces",mode:n}),Object(i.jsx)(b.a,{})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(j,{})}),document.getElementById("root")),h()}},[[14,1,2]]]);
//# sourceMappingURL=main.a912bdb9.chunk.js.map