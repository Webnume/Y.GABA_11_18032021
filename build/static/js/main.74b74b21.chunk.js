(this.webpackJsonpkasa=this.webpackJsonpkasa||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(20),a=n.n(s),i=(n(28),n(29),n(2)),o=n(3),l=n(5),u=n(4),j=n.p+"static/media/logo.d4dd43b8.svg",h=n(12),d=n(0),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(h.b,{to:"/",children:"Accueil"})}),Object(d.jsx)("li",{children:Object(d.jsx)(h.b,{to:"/Apropos",children:"A Propos"})})]})})}}]),n}(r.Component),b=p,O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("header",{children:[Object(d.jsx)("img",{className:"logo",src:j,alt:""}),Object(d.jsx)(b,{})]})}}]),n}(r.Component),m=O,x=n(11),f=n.n(x),v=n(13),g=n.p+"static/media/bannerHome.6faf7c1f.jpg",k=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)("article",{className:"appartCard",style:{background:"linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%),url(".concat(this.props.img,")"),backgroundSize:"cover"},children:Object(d.jsx)("h2",{children:this.props.children})})}}]),n}(r.Component),y=k,N=n(23),w=null;function C(){return S.apply(this,arguments)}function S(){return(S=Object(v.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("ok0"),e.next=4,fetch("./data/logements.json");case 4:return t=e.sent,console.log("ok1",t.ok,t),e.next=8,t.json();case 8:return w=e.sent,console.log("ok2"),e.abrupt("return",{isLoaded:!0,logements:w});case 13:throw e.prev=13,e.t0=e.catch(0),console.error("/////",e.t0),e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function L(e){return A.apply(this,arguments)}function A(){return(A=Object(v.a)(f.a.mark((function e(t){var n,r,c,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,null!==w){e.next=6;break}return e.next=4,C();case 4:n=e.sent,console.log(n);case 6:console.log("loaded"),r=Object(N.a)(w),e.prev=8,r.s();case 10:if((c=r.n()).done){e.next=17;break}if(s=c.value,console.log(s.id,t),s.id!==t){e.next=15;break}return e.abrupt("return",{isLoaded:!0,logement:s});case 15:e.next=10;break;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(8),r.e(e.t0);case 22:return e.prev=22,r.f(),e.finish(22);case 25:e.next=30;break;case 27:throw e.prev=27,e.t1=e.catch(0),e.t1;case 30:case"end":return e.stop()}}),e,null,[[0,27],[8,19,22,25]])})))).apply(this,arguments)}var F=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={error:null,isLoaded:!1,logements:[]},r}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C();case 3:t=e.sent,this.setState(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.setState(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.error,n=e.isLoaded,r=e.logements;return t?Object(d.jsxs)("div",{children:["Erreur : ",t.message]}):n?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{src:g,alt:""}),Object(d.jsx)("main",{className:"mainHome",children:r.map((function(e){return Object(d.jsx)(h.b,{to:"/MainFicheLogement/".concat(e.id),children:Object(d.jsx)(y,{img:e.cover,logement:e,idhouse:e.id,children:e.title})},e.id)}))})]}):Object(d.jsx)("div",{children:"Chargement\u2026"})}}]),n}(r.Component),q=F,I=n.p+"static/media/bannerApropos.daf3ade1.jpg",P=n.p+"static/media/iconCollapse.f2cfcc76.svg",M=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={close:!0,rotateIcon:!1},e.clickAction=function(){e.setState({close:!e.state.close,rotateIcon:!e.state.rotateIcon})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.close,r=t.rotateIcon;return Object(d.jsxs)("section",{style:{width:"100%",maxWidth:this.props.width},children:[Object(d.jsxs)("button",{type:"button",className:"collapsible",onClick:function(){return e.clickAction()},children:[this.props.title,Object(d.jsx)("img",{className:r?"rotate":"icon",src:P,alt:""})]}),Object(d.jsx)("div",{className:n?"content":"active",children:Object(d.jsx)("ul",{children:"582px"===this.props.width&&"list"===this.props.type?this.props.children.map((function(e){return Object(d.jsx)("li",{children:e},e)})):this.props.children})})]})}}]),n}(r.Component),D=M,E=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{src:I,alt:""}),Object(d.jsxs)("main",{className:"mainApropos",children:[Object(d.jsx)(D,{width:"1023px",title:"Fiabilit\xe9",children:"Les annonces post\xe9es sur Kasa garantissent une fiabilit\xe9 totale. Les photos sont conformes aux logements, et toutes les informations sont r\xe9guli\xe8rement v\xe9rifi\xe9es par nos \xe9quipes."}),Object(d.jsx)(D,{width:"1023px",title:"Respect",children:"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entra\xeenera une exclusion de notre plateforme."}),Object(d.jsx)(D,{width:"1023px",title:"Service",children:"Nos \xe9quipes se tiennent \xe0 votre disposition pour vous fournir une exp\xe9rience parfaite. N'h\xe9sitez pas \xe0 nous contacter si vous avez la moindre question."}),Object(d.jsx)(D,{width:"1023px",title:"S\xe9curit\xe9",children:"La s\xe9curit\xe9 est la priorit\xe9 de Kasa. Aussi bien pour nos h\xf4tes que pour les voyageurs, chaque logement correspond aux crit\xe8res de s\xe9curit\xe9 \xe9tablis par nos services. En laissant une note aussi bien \xe0 l'h\xf4te qu'au locataire, cela permet \xe0 nos \xe9quipes de v\xe9rifier que les standards sont bien respect\xe9s. Nous organisons \xe9galement des ateliers sur la s\xe9curit\xe9 domestique pour nos h\xf4tes."})]})]})}}]),n}(r.Component),z=E,H=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("li",{children:this.props.children})})}}]),n}(r.Component),K=H,T=n.p+"static/media/star.7e4ba603.svg",B=n.p+"static/media/star_filled.6430150c.svg",J=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){for(var e=[],t=0;t<5;t++)t<this.props.ratingValue?e.push(Object(d.jsx)("img",{className:"ratings",src:B,alt:""},t)):e.push(Object(d.jsx)("img",{className:"ratings",src:T,alt:""},t));return e}}]),n}(r.Component),R=J,V=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={current:0,SliderData:e.props.logementPictures,length:e.props.logementPictures.length},e.nextSlide=function(){e.setState((function(t){return{current:t.current===e.state.length-1?0:t.current+1}}))},e.prevSlide=function(){e.setState((function(t){return{current:0===t.current?e.state.length-1:t.current-1}}))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("section",{className:"slider",children:[Object(d.jsx)("img",{src:P,className:"right-arrow",alt:"next",onClick:this.nextSlide}),Object(d.jsx)("img",{src:P,className:"left-arrow",alt:"previous",onClick:this.prevSlide}),this.state.SliderData.map((function(t,n){return Object(d.jsx)("div",{className:n===e.state.current?"slide active":"slide",children:n===e.state.current&&Object(d.jsx)("img",{src:t,alt:"",className:"image"})},n)}))]})}}]),n}(r.Component),W=V,_=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={error:null,isLoaded:!1,logement:[]},r}return Object(o.a)(n,[{key:"componentWillMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=this,e.next=4,L(this.props.idHouse);case 4:e.t1=e.sent,e.t0.setState.call(e.t0,e.t1),e.next=12;break;case 8:e.prev=8,e.t2=e.catch(0),console.warn("\\\\\\\\",e.t2),this.setState({error:!0});case 12:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.error,n=e.isLoaded,r=e.logement;return console.log("render : state",this.state),t?Object(d.jsxs)("div",{children:["Erreur : ",t.message]}):n?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(W,{logementPictures:r.pictures}),Object(d.jsxs)("main",{className:"mainFiche",children:[Object(d.jsxs)("section",{className:"Top",children:[Object(d.jsxs)("div",{className:"left",children:[Object(d.jsx)("h1",{children:r.title}),Object(d.jsx)("h2",{children:r.location}),Object(d.jsx)("ul",{className:"tag",children:r.tags.map((function(e){return Object(d.jsx)(K,{children:e},e)}))})]}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsxs)("div",{className:"namePhoto",children:[Object(d.jsx)("h3",{children:r.host.name}),Object(d.jsx)("img",{className:"roundedImg",src:r.host.picture,alt:""})]}),Object(d.jsx)("div",{children:Object(d.jsx)(R,{ratingValue:r.rating})})]})]}),Object(d.jsxs)("section",{className:"bottom",children:[Object(d.jsx)(D,{width:"582px",title:"Description",children:r.description}),Object(d.jsx)(D,{width:"582px",title:"\xc9quipements",type:"list",children:r.equipments})]})]})]}):Object(d.jsx)("div",{children:"Chargement\u2026"})}}]),n}(r.Component),G=_,Q=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("footer",{children:[Object(d.jsx)("img",{src:j,alt:""}),Object(d.jsx)("span",{children:"\xa9 2020 Kasa. All rights reserved"})]})}}]),n}(r.Component),U=Q,X=n(6),Y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("main",{className:"mainError404",children:[Object(d.jsx)("h1",{children:"404"}),Object(d.jsx)("h2",{children:"Oups! La page que vous demandez n'existe pas."}),Object(d.jsx)(h.b,{to:"/",children:"Retourner sur la page d\u2019accueil"})]})}}]),n}(r.Component),Z=Y;var $=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)(h.a,{children:[Object(d.jsx)(m,{}),Object(d.jsxs)(X.c,{children:[Object(d.jsx)(X.a,{path:"/",exact:!0,children:Object(d.jsx)(q,{})}),Object(d.jsx)(X.a,{path:"/Apropos",exact:!0,children:Object(d.jsx)(z,{})}),Object(d.jsx)(X.a,{path:"/MainFicheLogement",exact:!0,children:Object(d.jsx)(G,{})}),Object(d.jsx)(X.a,{path:"/MainFicheLogement/:id",component:function(e){return Object(d.jsx)(G,{idHouse:e.match.params.id})}}),Object(d.jsx)(X.a,{render:function(){return Object(d.jsx)(Z,{})}})]})]}),Object(d.jsx)(U,{})]})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)($,{})}),document.getElementById("root")),ee()}},[[37,1,2]]]);
//# sourceMappingURL=main.74b74b21.chunk.js.map