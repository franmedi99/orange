(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,a,t){e.exports=t.p+"static/media/banco.ed3ce770.png"},27:function(e,a,t){e.exports=t.p+"static/media/logo2.31d6c2ec.png"},29:function(e,a,t){e.exports=t(47)},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(26),l=t.n(r),o=t(3),m=Object(n.createContext)(),s=function(e){var a=e.children,t=Object(n.useState)(null),r=Object(o.a)(t,2),l=r[0],s=r[1],i=Object(n.useState)(""),u=Object(o.a)(i,2),d=u[0],b=u[1],f=Object(n.useState)(!1),E=Object(o.a)(f,2),N=E[0],v=E[1],p=Object(n.useState)(!1),h=Object(o.a)(p,2),g=h[0],y=h[1];return Object(n.useEffect)(function(){var e=localStorage.getItem("username");null!==e?(s(e),v(!0),y(!0)):y(!0)},[]),c.a.createElement("div",null,g?c.a.createElement(m.Provider,{value:{user:l,setUser:s,isAuthenticated:N,setIsAuthenticated:v,onRoom:d,setOnRoom:b}},a):c.a.createElement("h1",null,"Cargando Aplicacion..."))},i=t(17),u=t(1),d=(t(38),t(39),t(40),t(41),t(42),t(27)),b=t.n(d);function f(){var e=Object(u.l)(),a=Object(n.useContext)(m),t=a.isAuthenticated,r=a.setIsAuthenticated,l=a.user,o=a.setUser,s=a.onRoom;return c.a.createElement("nav",{className:t?"navbar navbar-expand-lg navbar-dark bg-primary ":"navbar navbar-expand-lg navbar-dark bg-success "},t?c.a.createElement("div",{className:"ms-5 me-5 container-fluid"},c.a.createElement("img",{src:b.a,className:"img-fluid d-inline-block align-top",width:"70",height:"50",alt:"logo de BBVA"}),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarColor01"},c.a.createElement("ul",{className:"navbar-nav me-auto"}),""!==s?c.a.createElement("h4",{className:"text-light"},s):null,c.a.createElement("ul",{className:"navbar-nav me-auto"}),c.a.createElement("li",{className:"nav-link dropdown me-5 "},c.a.createElement("a",{className:"dropdown-toggle text-light a",href:"/#","data-bs-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"},l),c.a.createElement("div",{className:"dropdown-menu"},""!==s?c.a.createElement(i.b,{className:"dropdown-item",to:"/"},c.a.createElement("h6",null,"Volver al inicio")):null,c.a.createElement("h6",{className:"dropdown-item",onClick:function(a){a.preventDefault(),o(null),r(!1),localStorage.removeItem("username"),e("/")}},"Cerrar sesion"))))):c.a.createElement("h2",{className:"navbar-brand mx-auto"},"Iniciar sesion"))}var E=t(25),N=t.n(E);function v(){var e=Object(u.l)(),a=Object(n.useContext)(m),t=a.isAuthenticated,r=a.setIsAuthenticated,l=a.setUser,s=Object(n.useState)(""),i=Object(o.a)(s,2),d=i[0],b=i[1],f=Object(n.useState)(""),E=Object(o.a)(f,2),v=E[0],p=E[1],h=localStorage.getItem("room"),g=Object(n.useState)("fibonacci"),y=Object(o.a)(g,2),x=y[0],j=y[1],O=function(a){a.preventDefault(),null!=h?(p(h),localStorage.removeItem("room"),e("/".concat(x,"/").concat(h))):e("/".concat(x,"/").concat(v))};return c.a.createElement("div",null,h?c.a.createElement("div",{className:"col-md-3 ms-auto pe-3 text-center"},c.a.createElement("div",{className:"card m-3 border-primary"},c.a.createElement("form",{onSubmit:O,className:"m-2"},c.a.createElement("div",{className:"form-group "},c.a.createElement("h3",null,"Entrar a la sala: ",c.a.createElement("span",{className:"text-primary"},h)),c.a.createElement("button",{className:"btn col-4 btn-primary btn-block",type:"submit"},"Entrar"))))):null,t?c.a.createElement("div",{className:"mt-1 p-3"},c.a.createElement("div",{className:"col-md-6 mx-auto text-center"},c.a.createElement("div",{className:"card  border-primary"},c.a.createElement("div",{className:"card-header "},c.a.createElement("h1",{className:" mt-1"},"Crear sala ")),c.a.createElement("div",{className:"card-body"},c.a.createElement("img",{src:N.a,className:"card-img-top img-fluid rounded",style:{maxWidth:"50%",maxHeight:"50%"},alt:"..."}),c.a.createElement("form",{onSubmit:O},c.a.createElement("div",{className:"form-group mt-3"},c.a.createElement("label",{htmlFor:"username"},"Nombre de la sala"),c.a.createElement("input",{type:"text",name:"room",onChange:function(e){return p(e.target.value)},value:v,className:"form-control text-center mb-3",placeholder:"Ingres\xe1 el nombre de la sala"})),c.a.createElement("div",{className:"form-group mt-3 mb-3"},c.a.createElement("label",{htmlFor:"styleRoom"},"Tipo de votacion"),c.a.createElement("select",{className:"form-select","aria-label":"Default select example",onChange:function(e){return a=e.target.value,void j(a);var a}},c.a.createElement("option",{value:"fibonacci"},"fibonacci (0,1,2,3,5,8,7,8,13,21,23,34,55,89)"),c.a.createElement("option",{value:"fibonacci_modified"},"fibonacci Modificado (1/2,1,2,3,5,8,13,20,40,100,?,\u221e,coffe)"))),c.a.createElement("div",{className:"form-group"},c.a.createElement("button",{className:"btn col-12 btn-primary btn-block",type:"submit"},"Iniciar"))))))):c.a.createElement("div",{className:"row mt-5 p-3"},c.a.createElement("div",{className:"col-md-6 mx-auto text-center"},c.a.createElement("div",{className:"card  border-success"},c.a.createElement("div",{className:"card-header "},c.a.createElement("h1",{className:" mt-1"}," INICIAR SESION")),c.a.createElement("div",{className:"card-body"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),localStorage.setItem("username",d),l(d),r(!0)}},c.a.createElement("img",{src:N.a,className:"card-img-top img-fluid rounded",style:{maxWidth:"50%",maxHeight:"50%"},alt:"..."}),c.a.createElement("div",{className:"form-group mt-3"},c.a.createElement("label",{htmlFor:"username"},"Nombre del usuario"),c.a.createElement("input",{type:"text",name:"username",onChange:function(e){return b(e.target.value)},value:d,className:"form-control text-center mb-3",placeholder:"Ingres\xe1 tu nombre de usuario"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("button",{className:"btn col-12 btn-success text-light btn-block",type:"submit"},"Iniciar Sesion"))))))))}var p,h,g=t(22);function y(e,a){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,a){if(!e)return;if("string"===typeof e)return x(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return x(e,a)}(e))||a&&e&&"number"===typeof e.length){t&&(e=t);var n=0,c=function(){};return{s:c,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,o=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return l=e.done,e},e:function(e){o=!0,r=e},f:function(){try{l||null==t.return||t.return()}finally{if(o)throw r}}}}function x(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}function j(){var e=Object(u.l)(),a=Object(n.useContext)(m),t=a.user,r=a.setOnRoom,l=localStorage.getItem("username"),s=Object(n.useState)([]),i=Object(o.a)(s,2),d=i[0],b=i[1],f=Object(n.useState)([]),E=Object(o.a)(f,2),N=(E[0],E[1]),v=Object(n.useState)([]),h=Object(o.a)(v,2),x=h[0],j=h[1],O=Object(n.useState)(0),w=Object(o.a)(O,2),k=w[0],S=w[1],C=Object(n.useState)(!1),I=Object(o.a)(C,2),A=I[0],M=I[1],R=Object(n.useState)(!1),V=Object(o.a)(R,2),D=V[0],q=V[1],F=Object(n.useState)([]),P=Object(o.a)(F,2),U=P[0],H=P[1],T=Object(u.n)().room;Object(n.useEffect)(function(){var a=localStorage.getItem("viewer");if(null==a||"false"===a?(localStorage.setItem("viewer",!1),a=!1):(M(!0),a=!0),t)r(T),(p=Object(g.a)({reconnection:!0,reconnectionDelay:1e3,reconnectionDelayMax:1e4,reconnectionAttempts:1/0})).emit("join",{user:t,username:l,room:T,viewer:a}),p.on("joined",function(e){if(0===d.length){var t=e.users,n=e.viewers;!1===a?t.forEach(function(e){e.name===l&&N(e)}):n.forEach(function(e){e.name===l&&N(e)})}b(e.users),j(e.viewers)}),p.on("selected",function(e){b(e.users)}),p.on("revealed",function(e){var a,t=0,n=0,c=[],r=y(e.users);try{for(r.s();!(a=r.n()).done;){var l=a.value;l.voted&&(t++,n+=l.number,c.push(l))}}catch(m){r.e(m)}finally{r.f()}if(c.sort(function(e,a){return e.number-a.number}),H(c),t>0){var o=n/t;o!==Math.floor(o)&&(o=o.toFixed(2)),S(o),q(!0)}else S(0),q(!0)}),p.on("resetVote",function(e){b(e.users),H([]),S(0),q(!1)}),p.on("newViewer",function(e){j(e.viewers),b(e.users)}),p.on("disconnected",function(e){b(e.users),j(e.viewers)}),p.on("newAdmin",function(e){var t=e.users,n=e.viewers;!1===a?t.forEach(function(e){e.name===l&&N(e)}):n.forEach(function(e){e.name===l&&N(e)})});else{var n=prompt("OH NO! Parece que no has iniciado sesion, por favor ingrese su nombre");null===n||""===n?(localStorage.setItem("room",T),e("/")):(localStorage.setItem("username",n),window.location.reload())}return function(){t&&p.disconnect(),r("")}},[]);var B=function(e){p.emit("select",{number:e,name:t,room:T})};return c.a.createElement("div",{className:"m-3"},c.a.createElement("div",{className:"d-flex flex-row-reverse "},c.a.createElement("div",{className:"form-check form-switch px-4"},c.a.createElement("label",{className:"form-check-label checkbox-text "},c.a.createElement("h4",{className:"form-text2"},"Modo Espectador")),c.a.createElement("input",{className:"form-check-input checkbox-big",type:"checkbox",onChange:function(){A?(M(!1),p.emit("spectate",{name:t,room:T,spectate:A}),localStorage.setItem("viewer",!1)):(M(!0),p.emit("spectate",{name:t,room:T,spectate:A}),localStorage.setItem("viewer",!0))},checked:A}))),c.a.createElement("div",{className:"d-flex justify-content-around"},c.a.createElement("div",{className:"text-center "},c.a.createElement("div",{className:"card border-primary"},c.a.createElement("div",{className:"card-header "},c.a.createElement("h1",{className:" mt-1"}," Integrantes")),c.a.createElement("div",{className:"card-body"},x.map(function(e,a){return c.a.createElement("h5",{key:a},e.name," ",c.a.createElement("i",{className:"bi bi-eye-fill text-primary"}))}),d.map(function(e,a){return c.a.createElement("h5",{key:a},e.name," ",c.a.createElement("i",{className:"bi bi-person-fill text-success"}))})))),c.a.createElement("div",{className:"container"},c.a.createElement("div",null,"          ",!0===D?c.a.createElement("div",{className:"mx-auto text-center"},c.a.createElement("button",{className:"mx-auto btn btn-primary col-md-4 ",onClick:function(){p.emit("newVote",T)}},c.a.createElement("h4",{className:"text-center"},"Nueva votacion"))," "):c.a.createElement("div",{className:"mx-auto text-center"}," ",c.a.createElement("button",{className:"mx-auto btn btn-outline-primary col-md-4 ",onClick:function(){p.emit("reveal",T)}},c.a.createElement("h4",{className:"text-center"},"Revelar cartas"))," ")),c.a.createElement("div",{className:"container mt-4"},!0===D?c.a.createElement("div",null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row row-cols-6"},U.map(function(e,a){return c.a.createElement("div",{className:"col",key:a},c.a.createElement("div",{className:"poker-card-voted"},c.a.createElement("h4",{className:"text-center"},e.number)),c.a.createElement("h6",{className:"mx-auto"},e.name)," ")}))),c.a.createElement("h1",null,"Promedio: ",k)):c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row row-cols-6"},d.map(function(e,a){return c.a.createElement("div",{className:"col",key:a},c.a.createElement("div",{className:e.voted?"poker-card":"poker-card-hidden"}),c.a.createElement("h6",{className:"mx-auto"},e.name)," ")})))))),!1===D?c.a.createElement("div",{className:"d-flex justify-content-center mt-5",id:"cartas"},!1===A?c.a.createElement("ul",null,c.a.createElement("li",{className:"card-li"},c.a.createElement("button",{className:"card-button",onClick:function(){B(0)}},c.a.createElement("span",{className:"card-font"},"0"))),c.a.createElement("li",{className:"card-li"},c.a.createElement("button",{className:"card-button",onClick:function(){B(1)}},c.a.createElement("span",{className:"card-font"},"1"))),c.a.createElement("li",{className:"card-li"},c.a.createElement("button",{className:"card-button",onClick:function(){B(2)}},c.a.createElement("span",{className:"card-font"},"2"))),c.a.createElement("li",{className:"card-li"},c.a.createElement("button",{className:"card-button",onClick:function(){B(3)}},c.a.createElement("span",{className:"card-font"},"3"))),c.a.createElement("li",{className:"card-li"},c.a.createElement("button",{className:"card-button",onClick:function(){B(5)}},c.a.createElement("span",{className:"card-font"},"5"))),c.a.createElement("li",{className:"card-li mb-3"},c.a.createElement("button",{className:"card-button",onClick:function(){B(8)}},c.a.createElement("span",{className:"card-font"},"8"))),c.a.createElement("li",{className:"card-li"},c.a.createElement("button",{className:"card-button",onClick:function(){B(13)}},c.a.createElement("span",{className:"card-font"},"13"))),c.a.createElement("li",{className:"card-li"},c.a.createElement("button",{className:"card-button",onClick:function(){B(21)}},c.a.createElement("span",{className:"card-font"},"21"))),c.a.createElement("li",{className:"card-li"},c.a.createElement("button",{className:"card-button",onClick:function(){B(34)}},c.a.createElement("span",{className:"card-font"},"34"))),c.a.createElement("li",{className:"card-li"},c.a.createElement("button",{className:"card-button",onClick:function(){B(55)}},c.a.createElement("span",{className:"card-font"},"55"))),c.a.createElement("li",{className:"card-li"},c.a.createElement("button",{className:"card-button",onClick:function(){B(89)}},c.a.createElement("span",{className:"card-font"},"89")))):null):null)}function O(e,a){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,a){if(!e)return;if("string"===typeof e)return w(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return w(e,a)}(e))||a&&e&&"number"===typeof e.length){t&&(e=t);var n=0,c=function(){};return{s:c,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,o=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return l=e.done,e},e:function(e){o=!0,r=e},f:function(){try{l||null==t.return||t.return()}finally{if(o)throw r}}}}function w(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}function k(){var e=Object(u.l)(),a=Object(n.useContext)(m),t=a.user,r=a.setOnRoom,l=localStorage.getItem("username"),s=Object(n.useState)([]),i=Object(o.a)(s,2),d=i[0],b=i[1],f=Object(n.useState)([]),E=Object(o.a)(f,2),N=E[0],v=E[1],p=Object(n.useState)(0),y=Object(o.a)(p,2),x=y[0],j=y[1],w=Object(n.useState)(!1),k=Object(o.a)(w,2),S=k[0],C=k[1],I=Object(n.useState)([]),A=Object(o.a)(I,2),M=(A[0],A[1]),R=Object(n.useState)(!1),V=Object(o.a)(R,2),D=V[0],q=V[1],F=Object(n.useState)([]),P=Object(o.a)(F,2),U=P[0],H=P[1],T=Object(u.n)().room;Object(n.useEffect)(function(){var a=localStorage.getItem("viewer");if(null==a||"false"===a?(localStorage.setItem("viewer",!1),a=!1):(C(!0),a=!0),t)r(T),(h=Object(g.a)({reconnection:!0,reconnectionDelay:1e3,reconnectionDelayMax:1e4,reconnectionAttempts:1/0})).emit("join",{user:t,username:l,room:T,viewer:a}),h.on("joined",function(e){b(e.users),v(e.viewers)}),h.on("selected",function(e){b(e.users)}),h.on("revealed",function(e){var a,t=0,n=0,c=[],r=[],l=O(e.users);try{for(l.s();!(a=l.n()).done;){var o=a.value;o.voted&&"number"===typeof o.number&&(t++,n+=o.number,c.push(o)),o.voted&&"number"!==typeof o.number&&r.push(o)}}catch(d){l.e(d)}finally{l.f()}c.sort(function(e,a){return e.number-a.number});for(var m=0,s=r;m<s.length;m++){var i=s[m];c.push(i)}if(H(c),t>0){var u=n/t;u!==Math.floor(u)&&(u=u.toFixed(2)),j(u),q(!0)}else j(0),q(!0)}),h.on("resetVote",function(e){b(e.users),H([]),j(0),q(!1)}),h.on("newViewer",function(e){v(e.viewers),b(e.users)}),h.on("disconnected",function(e){b(e.users),v(e.viewers)}),h.on("newAdmin",function(e){var t=e.users,n=e.viewers;!1===a?t.forEach(function(e){e.name===l&&M(e)}):n.forEach(function(e){e.name===l&&M(e)})});else{var n=prompt("OH NO! Parece que no has iniciado sesion, por favor ingrese su nombre");null===n||""===n?(localStorage.setItem("room",T),e("/")):(localStorage.setItem("username",n),localStorage.setItem("viewer",!1),window.location.reload())}return function(){t&&h.disconnect(),r("")}},[]);var B=function(e){h.emit("select",{number:e,name:t,room:T})};return c.a.createElement("div",{className:"m-3"},c.a.createElement("div",{className:"d-flex flex-row-reverse "},c.a.createElement("div",{className:"form-check form-switch px-4"},c.a.createElement("label",{className:"form-check-label checkbox-text "},c.a.createElement("h4",{className:"form-text2"},"Modo Espectador")),c.a.createElement("input",{className:"form-check-input checkbox-big",type:"checkbox",onChange:function(){S?(C(!1),localStorage.setItem("viewer",!1),h.emit("spectate",{name:t,room:T,spectate:S})):(C(!0),localStorage.setItem("viewer",!0),h.emit("spectate",{name:t,room:T,spectate:S}))},checked:S}))),c.a.createElement("div",{className:"d-flex justify-content-around"},c.a.createElement("div",{className:"text-center "},c.a.createElement("div",{className:"card border-primary"},c.a.createElement("div",{className:"card-header "},c.a.createElement("h1",{className:" mt-1"}," Integrantes")),c.a.createElement("div",{className:"card-body"},N.map(function(e,a){return c.a.createElement("h5",{key:a},e.name," ",c.a.createElement("i",{className:"bi bi-eye-fill text-primary"}))}),d.map(function(e,a){return c.a.createElement("h5",{key:a},e.name," ",c.a.createElement("i",{className:"bi bi-person-fill text-success"}))})))),c.a.createElement("div",{className:"container mx-auto "},c.a.createElement("div",null,"   ",!0===D?c.a.createElement("div",{className:"text-center mx-auto"},c.a.createElement("button",{className:" btn btn-primary col-md-3 mx-auto ",onClick:function(){h.emit("newVote",T)}},c.a.createElement("h1",{className:"text-center"},"Nueva votacion"))," "):c.a.createElement("div",{className:"text-center mx-auto"},c.a.createElement("button",{className:"mx-auto btn btn-outline-primary col-md-3 mx-auto",onClick:function(){h.emit("reveal",T)}},c.a.createElement("h3",{className:"text-center"},"Revelar cartas")))),c.a.createElement("div",{className:"container mt-4"},!0===D?c.a.createElement("div",null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row row-cols-4"},U.map(function(e,a){return c.a.createElement("div",{className:"col",key:a},c.a.createElement("div",{className:"poker-card-voted"},function(){switch(e.number){case"question":return c.a.createElement("h3",null,c.a.createElement("i",{className:"bi bi-question-lg"}));case"coffe":return c.a.createElement("h3",null,c.a.createElement("i",{className:"bi bi-cup-hot-fill"}));case"infinity":return c.a.createElement("h3",null,c.a.createElement("i",{className:"bi bi-infinity"}));default:return c.a.createElement("h3",null,e.number)}}()),c.a.createElement("h6",{className:"mx-auto"},e.name)," ")}))),c.a.createElement("h1",null,"Promedio: ",x)):c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row row-cols-6"},d.map(function(e,a){return c.a.createElement("div",{className:"col",key:a},c.a.createElement("div",{className:e.voted?"poker-card":"poker-card-hidden"}),c.a.createElement("h6",{className:"mx-auto"},e.name)," ")})))))),!1===D?c.a.createElement("div",{className:"d-flex justify-content-center mt-5",id:"cartas"},!1===S?c.a.createElement("ul",null,c.a.createElement("li",{className:"card-li"},c.a.createElement("button",{className:"card-button",onClick:function(){B(.5)}},c.a.createElement("span",{className:"card-font"},"1/2 "))),c.a.createElement("li",{className:"card-li"},c.a.createElement("button",{className:"card-button",onClick:function(){B(1)}},c.a.createElement("span",{className:"card-font"},"1"))),c.a.createElement("li",{className:"card-li"},c.a.createElement("button",{className:"card-button",onClick:function(){B(2)}},c.a.createElement("span",{className:"card-font"},"2"))),c.a.createElement("li",{className:"card-li"},c.a.createElement("button",{className:"card-button",onClick:function(){B(3)}},c.a.createElement("span",{className:"card-font"},"3"))),c.a.createElement("li",{className:"card-li"},c.a.createElement("button",{className:"card-button",onClick:function(){B(5)}},c.a.createElement("span",{className:"card-font"},"5"))),c.a.createElement("li",{className:"card-li mb-3"},c.a.createElement("button",{className:"card-button",onClick:function(){B(8)}},c.a.createElement("span",{className:"card-font"},"8"))),c.a.createElement("li",{className:"card-li"},c.a.createElement("button",{className:"card-button",onClick:function(){B(13)}},c.a.createElement("span",{className:"card-font"},"13"))),c.a.createElement("li",{className:"card-li"},c.a.createElement("button",{className:"card-button",onClick:function(){B(21)}},c.a.createElement("span",{className:"card-font"},"20"))),c.a.createElement("li",{className:"card-li"},c.a.createElement("button",{className:"card-button",onClick:function(){B(34)}},c.a.createElement("span",{className:"card-font"},"40"))),c.a.createElement("li",{className:"card-li"},c.a.createElement("button",{className:"card-button",onClick:function(){B(55)}},c.a.createElement("span",{className:"card-font"},"100"))),c.a.createElement("li",{className:"card-li"},c.a.createElement("button",{className:"card-button",onClick:function(){B("question")}},c.a.createElement("span",{className:"card-font"},c.a.createElement("h1",null,c.a.createElement("i",{className:"bi bi-question"}))))),c.a.createElement("li",{className:"card-li"},c.a.createElement("button",{className:"card-button",onClick:function(){B("infinity")}},c.a.createElement("span",{className:"card-font"},c.a.createElement("h1",null,c.a.createElement("i",{className:"bi bi-infinity"}))))),c.a.createElement("li",{className:"card-li"},c.a.createElement("button",{className:"card-button",onClick:function(){B("coffe")}},c.a.createElement("span",{className:"card-font"},c.a.createElement("h1",null,c.a.createElement("i",{className:"bi bi-cup-hot-fill"})))))):null):null)}var S=t(5),C=t(6),I=t(8),A=t(4),M=t(7),R=function(e){function a(){return Object(S.a)(this,a),Object(I.a)(this,Object(A.a)(a).apply(this,arguments))}return Object(M.a)(a,e),Object(C.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{style:{zIndex:-1}},c.a.createElement("br",null),c.a.createElement("footer",null,c.a.createElement("div",{className:"footer"},c.a.createElement("h6",{className:"text-center text-secondary"},"Created by: Francisco Medina ",c.a.createElement("span",{className:"text-primary ps-2"}," V 2.0.3")))))}}]),a}(n.Component);var V=function(){return c.a.createElement(i.a,null,c.a.createElement(f,null),c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/",element:c.a.createElement(v,null)}),c.a.createElement(u.a,{exact:!0,path:"/fibonacci/:room",element:c.a.createElement(j,null)}),c.a.createElement(u.a,{exact:!0,path:"/fibonacci_modified/:room",element:c.a.createElement(k,null)})),c.a.createElement(R,null))};l.a.createRoot(document.getElementById("root")).render(c.a.createElement(s,null,c.a.createElement(V,null)))}},[[29,1,2]]]);
//# sourceMappingURL=main.88e6e130.chunk.js.map