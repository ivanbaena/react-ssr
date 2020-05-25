!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=13)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-router-config")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("react-helmet")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("express-http-proxy")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("serialize-javascript")},function(e,t){e.exports=require("redux-thunk")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("babel-polyfill")},function(e,t,n){"use strict";n.r(t);n(12);var r=n(6),a=n.n(r),o=n(3),c=n(7),u=n.n(c),i=n(0),l=n.n(i),s=n(2),f=n(1),p=Object(f.connect)((function(e){return{auth:e.auth}}))((function(e){var t=e.auth?l.a.createElement("a",{href:"/api/logout"},"Logout"):l.a.createElement("a",{href:"/api/auth/google"},"Login");return l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper"},l.a.createElement(s.Link,{to:"/",className:"brand-logo"},"React-SSR"),l.a.createElement("ul",{className:"right"},l.a.createElement("li",null,l.a.createElement(s.Link,{to:"/users"},"Users")),l.a.createElement("li",null,l.a.createElement(s.Link,{to:"/admins"},"Admins")),l.a.createElement("li",null,t))))}));function d(e,t,n,r,a,o,c){try{var u=e[o](c),i=u.value}catch(e){return void n(e)}u.done?t(i):Promise.resolve(i).then(r,a)}function m(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){d(o,r,a,c,u,"next",e)}function u(e){d(o,r,a,c,u,"throw",e)}c(void 0)}))}}var h,v=function(){return function(){var e=m(regeneratorRuntime.mark((function e(t,n,r){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.get("/users");case 2:a=e.sent,t({type:"fetch_users",payload:a});case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},b=function(){return function(){var e=m(regeneratorRuntime.mark((function e(t,n,r){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.get("/admins");case 2:a=e.sent,t({type:"fetch_admins",payload:a});case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},y={component:function(e){var t=e.route;return l.a.createElement("div",null,l.a.createElement(p,null),Object(o.renderRoutes)(t.routes))},loadData:function(e){return(0,e.dispatch)(function(){var e=m(regeneratorRuntime.mark((function e(t,n,r){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.get("/current_user");case 2:a=e.sent,t({type:"fetch_current_user",payload:a});case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}())}},g={component:function(){return l.a.createElement("div",{className:"center-align",style:{marginTop:"200px"}},l.a.createElement("h3",null,"Welcome"),l.a.createElement("p",null,"Checkout these features"))}},O=n(5),x={fetchAllUsers:v},E={component:Object(f.connect)((function(e){return{users:e.users}}),x)((function(e){var t=e.fetchAllUsers,n=e.users;Object(i.useEffect)((function(){(!n||0===n.length)&&t()}),[n]);if(!n||0===n.length)return l.a.createElement("div",null,"no users");return l.a.createElement("div",null,l.a.createElement(O.Helmet,null,l.a.createElement("title",null,"".concat(n.length," Users Loaded")),l.a.createElement("meta",{property:"og:type",content:"Users App"})),l.a.createElement("ul",null,n.map((function(e){return l.a.createElement("li",{key:e.id},e.name)}))))})),loadData:function(e){return e.dispatch(v())}},j={fetchAllAdmins:b},w={component:Object(f.connect)((function(e){return{admins:e.admins}}),j)((h=function(e){var t=e.fetchAllAdmins,n=e.admins;return Object(i.useEffect)((function(){t()})),l.a.createElement("div",null,l.a.createElement("h3",null,"Protected List of Admins"),l.a.createElement("ul",null,n.map((function(e){return l.a.createElement("li",{key:e.id},e.name)}))))},Object(f.connect)((function(e){return{auth:e.auth}}))((function(e){switch(Object(i.useEffect)((function(){}),[]),e.auth){case!1:return l.a.createElement(s.Redirect,{to:"/"});case null:return l.a.createElement("div",null,"...loadding");default:return l.a.createElement(h,e)}})))),loadData:function(e){return(0,e.dispatch)(b())}},P={component:function(e){var t=e.staticContext;return(void 0===t?{}:t).notFound=!0,l.a.createElement("h1",null,"Oops route not found!")}};function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=[S(S({},y),{},{routes:[S(S({},g),{},{path:"/",exact:!0}),S({path:"/admins"},w),S({path:"/users"},E),S({},P)]})],q=n(8),A=n(9),D=n.n(A),L=n(4),T=n(10),U=n.n(T),M=n(11),N=n.n(M),z=Object(L.combineReducers)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_users":return t.payload.data;default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_current_user":return t.payload.data||!1;default:return e}},admins:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_admins":return t.payload.data;default:return e}}}),I=a()();I.use("/api",u()("http://react-ssr-api.herokuapp.com",{proxyReqOptDecorator:function(e){return e.headers["x-forwarded-host"]="localhost:3000",e}})),I.use(a.a.static("public")),I.get("*",(function(e,t){var n=function(e){var t=N.a.create({baseURL:"http://react-ssr-api.herokuapp.com",headers:{cookie:e.get("cookie")||""}});return Object(L.createStore)(z,{},Object(L.applyMiddleware)(U.a.withExtraArgument(t)))}(e),r=Object(o.matchRoutes)(_,e.path).map((function(e){var t=e.route;return t.loadData?t.loadData(n):null})).map((function(e){if(e)return new Promise((function(t,n){e.then(t).catch(t)}))}));Promise.all(r).then((function(){var r={},a=function(e,t,n){var r=Object(q.renderToString)(l.a.createElement(f.Provider,{store:t},l.a.createElement(s.StaticRouter,{location:e.path,context:n},Object(o.renderRoutes)(_)))),a=O.Helmet.renderStatic();return"\n  <html>\n    <head>\n    ".concat(a.title.toString(),"\n    ").concat(a.meta.toString(),'\n    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">\n    </head>\n    <body>\n      <div id="root">').concat(r,"</div>\n      <script>\n        window.INITIAL_STATE = ").concat(D()(t.getState()),'\n      <\/script>\n      <script src="bundle.js"><\/script>\n    </body>\n  </html>\n  ')}(e,n,r);if(r.url)return t.redirect(301,r.url);r.notFound&&t.status(404),t.send(a)}))})),I.listen(3e3,(function(){console.log("were on PORT 3000")}))}]);