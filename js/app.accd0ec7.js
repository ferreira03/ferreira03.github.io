(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)r=o[u],s[r]&&d.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},s={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var p=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"034f":function(t,e,a){"use strict";var n=a("64a9"),s=a.n(n);s.a},"07e36":function(t,e,a){"use strict";var n=a("8ebd"),s=a.n(n);s.a},"0b10":function(t,e,a){},"11f7":function(t,e,a){},"19ec":function(t,e,a){},"1bda":function(t,e,a){var n={"./foodsense.png":"3f38","./parisjeune1.jpg":"fcdd","./parisjeune2.jpg":"662e","./pwa-logo.png":"d041","./zontaback.png":"83b9","./zontasite.jpg":"8e8e"};function s(t){var e=i(t);return a(e)}function i(t){var e=n[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}s.keys=function(){return Object.keys(n)},s.resolve=i,t.exports=s,s.id="1bda"},"3f38":function(t,e,a){t.exports=a.p+"img/foodsense.6437b16e.png"},"45f3":function(t,e,a){"use strict";var n=a("a41d"),s=a.n(n);s.a},"64a9":function(t,e,a){},"662e":function(t,e,a){t.exports=a.p+"img/parisjeune2.092589df.jpg"},6991:function(t,e,a){"use strict";var n=a("da1a"),s=a.n(n);s.a},"7e18":function(t,e,a){},"83b9":function(t,e,a){t.exports=a.p+"img/zontaback.7a95d2e5.png"},"8e8e":function(t,e,a){t.exports=a.p+"img/zontasite.da6ea100.jpg"},"8ebd":function(t,e,a){},"99af":function(t,e,a){"use strict";var n=a("0b10"),s=a.n(n);s.a},a0d3:function(t,e,a){"use strict";var n=a("7e18"),s=a.n(n);s.a},a41d:function(t,e,a){},b8a2:function(t,e,a){"use strict";var n=a("19ec"),s=a.n(n);s.a},bdd7:function(t,e,a){t.exports=a.p+"img/image10000.a3e85da5.png"},cd49:function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header",{staticClass:"menu-inicial bg-light"},[a("b-navbar",{staticClass:"container",attrs:{toggleable:"md",variant:"light",type:"light"}},[a("b-navbar-brand",{staticClass:"mylogo",attrs:{to:{name:"home"},exact:""}},[a("h1",[a("span",{staticClass:"logostyle1"},[t._v("F")]),a("span",{staticClass:"logostyle2"},[t._v("DeV")])])]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto nav-menu"},[a("b-nav-item",{attrs:{to:{name:"presentation"}}},[a("transition",{attrs:{name:"fade"}},["en"===t.lang?a("span",[t._v("about me")]):"fr"===t.lang?a("span",[t._v("presentation")]):"pt"===t.lang?a("span",[t._v("sobre")]):t._e()])],1),a("b-nav-item",{attrs:{to:{name:"competences"}}},["en"===t.lang?a("span",[t._v("skills")]):"fr"===t.lang?a("span",[t._v("compétences")]):"pt"===t.lang?a("span",[t._v("habilidades")]):t._e()]),a("b-nav-item",{attrs:{to:{name:"portfolio"}}},["en"===t.lang?a("span",[t._v("portfolio")]):"fr"===t.lang?a("span",[t._v("portfolio")]):"pt"===t.lang?a("span",[t._v("portfólio")]):t._e()]),a("b-nav-item",{attrs:{to:{name:"contact"}}},["en"===t.lang?a("span",[t._v("contact")]):"fr"===t.lang?a("span",[t._v("contact")]):"pt"===t.lang?a("span",[t._v("contato")]):t._e()])],1),a("b-navbar-nav",[a("b-nav-item-dropdown",{attrs:{text:"Lang",right:""}},[a("b-dropdown-item",{on:{click:function(e){return t.language("en")}}},[t._v("english")]),a("b-dropdown-item",{on:{click:function(e){return t.language("fr")}}},[t._v("french")]),a("b-dropdown-item",{on:{click:function(e){return t.language("pt")}}},[t._v("portuguese")])],1)],1)],1)],1)],1),a("main",[a("b-container",{staticClass:"principal"},[a("transition",{attrs:{name:"view","enter-active-class":"animated bounceInLeft delay","leave-active-class":"animated zoomOutRight"}},[a("router-view",{attrs:{languageType:t.lang}})],1)],1)],1)])},i=[],r={name:"app",components:{},data:function(){return{lang:"fr"}},mounted:function(){var t=document.documentElement;t.setAttribute("lang",this.lang)},methods:{language:function(t){var e=document.documentElement;"en"==t&&(this.lang="en",e.setAttribute("lang",this.lang)),"fr"==t&&(this.lang="fr",e.setAttribute("lang",this.lang)),"pt"==t&&(this.lang="pt",e.setAttribute("lang",this.lang))}}},o=r,c=(a("034f"),a("2877")),l=Object(c["a"])(o,s,i,!1,null,null,null),p=l.exports,u=a("5f5b"),d=(a("f9e3"),a("2dd8"),a("becf"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"d-flex flex-column justify-content-center",attrs:{id:"home"}},[a("transition",{attrs:{name:"changeScale"}},[t.scale?a("h2",{staticClass:"presentanionName mt-5 pt-5 text-center",attrs:{id:"teste-ori"}},[a("span",{staticClass:"logostyle1"},[t._v("F")]),a("span",{staticClass:"an logostyle21"},[t._v("DeV")])]):t._e()]),a("h3",{staticClass:"website text-center mt-5 titles-principal font-weight-light"},[t._v("WebSites")]),a("transition",{attrs:{name:"changeScale"}},[t.scale?a("h3",{staticClass:"mail text-center mt-5 titles-principal font-weight-bold"},[t._v("Ferreira Développeur Web")]):t._e()])],1)}),m=[],f={name:"home",data:function(){return{isTrueMail:!0,scale:!1}},components:{},mounted:function(){this.showEfects()},methods:{showEfects:function(){this.scale=!0}}},g=f,v=(a("6991"),Object(c["a"])(g,d,m,!1,null,"22850f2c",null)),h=v.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"presentation"}},[n("h2",{staticClass:"mt-4 text-center"},[t._v("André Ferreira")]),n("img",{staticClass:"photo1 img-fluid mx-auto d-block",attrs:{src:a("bdd7"),alt:"Photo Ferreira",title:"André Ferreira"}}),n("h5",{staticClass:"text-justify mt-3 text-center text-description"},["en"===t.languageType?n("span",[t._v("Hello, I am web developer passionate about the web world and for new technologies.")]):"fr"===t.languageType?n("span",[t._v("Hello, Je suis Développeur et Intégrateur Web passionné pour le monde web et pour nouvelles technologies.")]):"pt"===t.languageType?n("span",[t._v("Olá, eu sou desenvolvedor web apaixonado pelo mundo web e por novas tecnologias.")]):t._e()]),n("h5",{staticClass:"text-justify mt-3 text-center text-description"},["en"===t.languageType?n("span",[t._v("I am currently looking for a company to do an internship (3 weeks in the company, 1 week in training) for the application developer course.")]):"fr"===t.languageType?n("span",[t._v("Actuellement je suis à la recherche d'une entreprise d'accueil pour commencer une formation de concepteur développeur d'applications (3 semaines en entreprise 1 semaine en formation).")]):"pt"===t.languageType?n("span",[t._v("Atualmente, procuro uma empresa para fazer um estágio em alternancia (3 semanas na empresa, 1 semana na formação) para o curso de desenvolvedor de aplicativos.")]):t._e()]),n("h5",{staticClass:"text-justify mt-3 text-center text-description"},["en"===t.languageType?n("span",[t._v("Curious and with a desire to learn always, I am looking for an opportunity that allows me to demonstrate my versatility, my responsibility, my rigor and my motivation to achieve my professional goals.")]):"fr"===t.languageType?n("span",[t._v("Curieux et avec une envie d’apprendre toujours, je suis à la recherche d’une opportunité qui me permet de démontrer ma polyvalence, ma responsabilité, ma rigueur acquises et ma motivation pour atteindre mes objectifs professionnels.")]):"pt"===t.languageType?n("span",[t._v("Curioso e com vontade de aprender sempre, procuro uma oportunidade que me permita demonstrar minha versatilidade, minha responsabilidade, meu rigor e minha motivação para atingir meus objetivos profissionais.")]):t._e()]),n("b-container",{staticClass:"d-flex justify-content-around icon my-5"},[n("i",{staticClass:"fas fa-wifi"}),n("i",{staticClass:"fas fa-dumbbell"}),n("i",{staticClass:"fas fa-globe-americas icon-rotate"}),n("i",{staticClass:"fas fa-plane"}),n("i",{staticClass:"fas fa-music"})])],1)},y=[],x={props:{languageType:{type:String}},data:function(){return{}}},_=x,w=(a("a0d3"),Object(c["a"])(_,b,y,!1,null,"6f8693e6",null)),C=w.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"competences"}},[n("h2",{staticClass:"mt-4 text-center"},[n("i",{staticClass:"fa fa-code code mr-2"}),"en"===t.languageType?n("span",[t._v("Skills")]):"fr"===t.languageType?n("span",[t._v("Compétences Techniques")]):"pt"===t.languageType?n("span",[t._v("Competências Técnicas")]):t._e()]),n("b-container",[n("b-row",[n("b-col",{attrs:{md:"6",sm:"12"}},[n("h3",{staticClass:"mt-4 text-center php"},[t._v("\n          PHP\n          "),n("i",{staticClass:"fab fa-php"})]),n("b-progress",{attrs:{value:t.php,max:t.max,"show-progress":"",animated:""}}),n("h3",{staticClass:"mt-4 text-center js"},[t._v("\n          JS\n          "),n("i",{staticClass:"fab fa-js-square"})]),n("b-progress",{attrs:{value:t.js,max:t.max,"show-progress":"",animated:"",variant:"warning"}}),n("h3",{staticClass:"mt-4 text-center sf"},[t._v("\n          SYMFONY\n          "),n("i",{staticClass:"fab fa-symfony"})]),n("b-progress",{attrs:{value:t.symfony,max:t.max,"show-progress":"",animated:"",variant:"success"}}),n("h3",{staticClass:"mt-4 text-center vjs"},[t._v("\n          VUEJS\n          "),n("i",{staticClass:"fab fa-vuejs"})]),n("b-progress",{attrs:{value:t.vjs,max:t.max,"show-progress":"",animated:"",variant:"danger"}}),n("h3",{staticClass:"mt-4 text-center bootstrap"},[t._v("\n          Bootstrap\n          "),n("i",{staticClass:"fab fa-bootstrap"})]),n("b-progress",{attrs:{value:t.bootstrap,max:t.max,"show-progress":"",animated:"",variant:"warning"}}),n("h3",{staticClass:"mt-4 text-center api"},[t._v("\n          API REST\n          "),n("i",{staticClass:"fas fa-cog"})]),n("b-progress",{attrs:{value:t.api,max:t.max,"show-progress":"",animated:""}})],1),n("b-col",{attrs:{md:"6",sm:"12"}},[n("h3",{staticClass:"mt-4 text-center html"},[t._v("\n          HTML\n          "),n("i",{staticClass:"fab fa-html5"})]),n("b-progress",{attrs:{value:t.html,max:t.max,"show-progress":"",animated:"",variant:"secondary"}}),n("h3",{staticClass:"mt-4 text-center css"},[t._v("\n          CSS\n          "),n("i",{staticClass:"fab fa-css3-alt"})]),n("b-progress",{attrs:{value:t.css,max:t.max,"show-progress":"",animated:"",variant:"danger"}}),n("h3",{staticClass:"mt-4 text-center mysql"},[t._v("MySQL")]),n("b-progress",{attrs:{value:t.mysql,max:t.max,"show-progress":"",animated:"",variant:"warning"}}),n("h3",{staticClass:"mt-4 text-center jquery"},[t._v("JQUERY")]),n("b-progress",{attrs:{value:t.jquery,max:t.max,"show-progress":"",animated:"",variant:"dark"}}),n("h3",{staticClass:"mt-4 text-center wordpress"},[t._v("WordPress")]),n("b-progress",{attrs:{value:t.wordpress,max:t.max,"show-progress":"",animated:""}}),n("h3",{staticClass:"mt-4 text-center pwa"},[t._v("\n          PWA\n          "),n("img",{staticClass:"img-fluid",attrs:{src:a("d041"),alt:""}})]),n("b-progress",{attrs:{value:t.pwa,max:t.max,"show-progress":"",animated:"",variant:"success"}})],1)],1)],1),n("b-container",{staticClass:"d-flex justify-content-around icon my-5"},[n("i",{staticClass:"fas fa-desktop"}),n("i",{staticClass:"fas fa-tablet-alt"}),n("i",{staticClass:"fas fa-mobile-alt"})])],1)},k=[],T=a("5118"),O={props:{languageType:{type:String}},data:function(){return{php:0,js:0,symfony:0,vjs:0,html:0,css:0,mysql:0,jquery:0,bootstrap:0,wordpress:0,api:0,pwa:0,max:100}},mounted:function(){this.progressBar()},methods:{progressBar:function(){var t=this;Object(T["setInterval"])(function(){t.php=60,t.js=60,t.symfony=45,t.vjs=45,t.html=85,t.css=85,t.mysql=70,t.jquery=70,t.bootstrap=70,t.wordpress=50,t.api=45,t.pwa=45},1400)}}},S=O,E=(a("45f3"),Object(c["a"])(S,j,k,!1,null,"3c6bedc8",null)),P=E.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"portfolio"}},[n("h2",{staticClass:"text-center mt-4"},["en"===t.languageType?n("span",[t._v("Portfolio")]):"fr"===t.languageType?n("span",[t._v("Portfolio")]):"pt"===t.languageType?n("span",[t._v("Portfólio")]):t._e()]),n("b-container",[n("div",{staticClass:"gallery"},[n("b-row",[t._l(t.imgs,function(t){return n("b-col",{directives:[{name:"lightbox",rawName:"v-lightbox"}],staticClass:"d-flex justify-content-center my-2",attrs:{md:"4",sm:"6",href:a("1bda")("./"+t)}},[n("img",{staticClass:"imglightbox img-fluid",attrs:{src:a("1bda")("./"+t),alt:t,title:t}})])}),n("lightbox")],2)],1)]),n("b-container",[n("div",{staticClass:"row my-4"},[n("div",{staticClass:"col-12 col-md-4 text-center"},[n("h5",["en"===t.languageType?n("span",[t._v("Languages")]):"fr"===t.languageType?n("span",[t._v("Les langages utilisées")]):"pt"===t.languageType?n("span",[t._v("Linguagens utilizadas")]):t._e()]),n("ul",[n("li",[t._v("HTML5")]),n("li",{staticClass:"my-3"},[t._v("CSS3")]),n("li",{staticClass:"my-3"},[t._v("JavaScript")]),n("li",[t._v("PHP")])])]),n("div",{staticClass:"col-12 col-md-4 text-center"},[n("h5",["en"===t.languageType?n("span",[t._v("Frameworks")]):"fr"===t.languageType?n("span",[t._v("Les Frameworks utilisées")]):"pt"===t.languageType?n("span",[t._v("Frameworks utilizados")]):t._e()]),n("ul",[n("li",[t._v("SYMFONY")]),n("li",{staticClass:"my-3"},[t._v("VUEJS")]),n("li",[t._v("BOOTSTRAP")])])]),n("div",{staticClass:"col-12 col-md-4 text-center"},[n("h5",["en"===t.languageType?n("span",[t._v("Tools")]):"fr"===t.languageType?n("span",[t._v("Les outils utilisées")]):"pt"===t.languageType?n("span",[t._v("Ferramentas utilizadas")]):t._e()]),n("ul",[n("li",[t._v("WordPress")]),n("li",{staticClass:"my-3"},[t._v("PhotoShop")]),n("li",[t._v("WireFrame Mockflow")])])])])])],1)},L=[],A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.image?a("div",{staticClass:"lightbox",on:{click:t.close}},[a("transition",{attrs:{name:t.direction}},[a("lightbox-image",{key:t.image,attrs:{image:t.image}})],1),a("div",{staticClass:"lightbox__close",on:{click:t.close}},[a("i",{staticClass:"far fa-window-close icon__close"})]),a("div",{staticClass:"lightbox__btn lightbox__next",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.next(e)}}},[a("i",{staticClass:"fas fa-chevron-right icon-chevron"})]),a("div",{staticClass:"lightbox__btn lightbox__prev",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.prev(e)}}},[a("i",{staticClass:"fas fa-chevron-left icon-chevron"})])],1):t._e()},F=[],I=a("d225"),q=a("b0b4"),M=function(){function t(){Object(I["a"])(this,t),this.state={images:[],index:!1}}return Object(q["a"])(t,[{key:"addImage",value:function(t){return this.state.images.push(t)-1}},{key:"open",value:function(t){this.state.index=t}},{key:"close",value:function(){this.state.index=!1}},{key:"next",value:function(){this.state.index++,this.state.index>=this.state.images.length&&(this.state.index=0)}},{key:"prev",value:function(){this.state.index--,this.state.index<0&&(this.state.index=this.state.images.length-1)}}]),t}(),W=new M;n["default"].directive("lightbox",{bind:function(t,e){var a=W.addImage(t.getAttribute("href"));t.addEventListener("click",function(e){e.preventDefault(),W.open(a),W.state.image=t.getAttribute("href")})}});var D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{on:{click:function(t){t.stopPropagation()}}},[t.loading?a("div",{staticClass:"lightbox__loading"},[a("b-spinner",{staticStyle:{width:"4rem",height:"4rem"},attrs:{type:"grow",label:"Spinning",variant:"dark"}})],1):t._e(),a("transition",{attrs:{name:"fade"}},[a("img",{key:t.src,staticClass:"lightbox__image img-fluid",style:t.style,attrs:{src:t.src}})])],1)},H=[],N={props:{image:String},data:function(){return{loading:!0,src:!1,style:{}}},methods:{resizeImage:function(t){var e=t.width,a=t.height;if(e>window.innerWidth||a>window.innerHeight){var n=e/a,s=window.innerWidth/window.innerHeight;n>s?(e=window.innerWidth,a=e/n):(a=window.innerHeight,e=a*n)}this.style={width:e+"px",height:a+"px",top:.5*(window.innerHeight-a)+"px",left:.5*(window.innerWidth-e)+"px"}}},mounted:function(){var t=this,e=new window.Image;e.onload=function(a){t.loading=!1,t.src=t.image,t.resizeImage(e)},e.src=this.image,this.resizeEvent=function(){t.resizeImage(e)},window.addEventListener("resize",this.resizeEevnt)},destroyed:function(){window.removeEventListener("resize",this.resizeEevnt)}},$=N,J=(a("d7bb"),Object(c["a"])($,D,H,!1,null,null,null)),B=J.exports,U={components:{LightboxImage:B},data:function(){return{state:W.state,direction:"next"}},computed:{image:function(){if(!1!==this.state.index)return this.state.images[this.state.index]},transition:function(){return this.direction}},methods:{close:function(){W.close()},next:function(){W.next(),this.direction="next"},prev:function(){W.prev(),this.direction="prev"}}},Y=U,R=(a("99af"),Object(c["a"])(Y,A,F,!1,null,null,null)),V=R.exports,Q={components:{Lightbox:V},props:{languageType:{type:String}},data:function(){return{imgs:["parisjeune1.jpg","parisjeune2.jpg","foodsense.png","zontasite.jpg","zontaback.png"]}},methods:{}},G=Q,K=(a("b8a2"),Object(c["a"])(G,z,L,!1,null,"32ade40c",null)),X=K.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"contact"}},[a("b-container",{staticClass:"mt-4"},[a("h3",{staticClass:"text-center mt-2"},["en"===t.languageType?a("span",[t._v("Contatc me")]):"fr"===t.languageType?a("span",[t._v("Contactez moi")]):"pt"===t.languageType?a("span",[t._v("Entre em contato")]):t._e()]),a("b-row",{staticClass:"menucontact mt-3 mx-auto"},[a("b-col",{staticClass:"colunne pb-3",attrs:{md:"6",sm:"12"}},[a("div",{staticClass:"contact1 d-flex justify-content-center"},[a("b-link",{attrs:{href:"https://www.linkedin.com/in/andref-ferreira/",target:"_blank",title:"www.linkedin.com/in/andref-ferreira"}},[a("i",{staticClass:"fab fa-linkedin icon",attrs:{alt:"www.linkedin.com/in/andref-ferreira"}})])],1)]),a("b-col",{staticClass:"colunne",attrs:{md:"6",sm:"12"}},[a("div",{staticClass:"contact2 d-flex justify-content-center"},[a("b-link",{staticClass:"mail-text",attrs:{href:"mailto:andref.ferreira@yahoo.com",title:"andref.ferreira@yahoo.com"}},[a("i",{staticClass:"fas fa-at icon",attrs:{alt:"andref.ferreira@yahoo.com"}})])],1)])],1)],1)],1)},tt=[],et={name:"contact",props:{languageType:{type:String}},data:function(){return{}},components:{},mounted:function(){},methods:{}},at=et,nt=(a("07e36"),Object(c["a"])(at,Z,tt,!1,null,"260ba3ca",null)),st=nt.exports,it=a("8c4f");n["default"].use(it["a"]);var rt=[{path:"*",redirect:"/"},{name:"home",path:"/",component:h},{name:"presentation",path:"/presentation",component:C},{name:"competences",path:"/competences",component:P},{name:"portfolio",path:"/portfolio",component:X},{name:"contact",path:"/contact",component:st}],ot=new it["a"]({mode:"history",base:"/",routes:rt}),ct=ot,lt=a("9483");function pt(t){var e=t.gamma,a=t.beta,n=t.alpha,s=document.getElementById("teste-ori");s.style.WebkitTransform=" rotate("+e+"deg) rotate3d(1,0,0, "+-.8*a+"deg)  rotate3d(0,1,0,"+n+"deg) ",s.style.MozTransform="rotate("+e+"deg)",s.style.transform=" rotate("+e+"deg) rotate3d(1,0,0, "+-.8*a+"deg)  rotate3d(0,1,0,"+n+"deg) "}Object(lt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),n["default"].config.productionTip=!1,n["default"].use(u["a"]),new n["default"]({router:ct,render:function(t){return t(p)}}).$mount("#app"),window.DeviceOrientationEvent&&window.addEventListener("deviceorientation",pt,!1)},d041:function(t,e,a){t.exports=a.p+"img/pwa-logo.33c3a22c.png"},d7bb:function(t,e,a){"use strict";var n=a("11f7"),s=a.n(n);s.a},da1a:function(t,e,a){},fcdd:function(t,e,a){t.exports=a.p+"img/parisjeune1.825d7ac7.jpg"}});
//# sourceMappingURL=app.accd0ec7.js.map