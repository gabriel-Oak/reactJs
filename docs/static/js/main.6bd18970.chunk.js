(window.webpackJsonpgaia=window.webpackJsonpgaia||[]).push([[0],{124:function(e,t,a){e.exports=a(167)},129:function(e,t,a){},130:function(e,t,a){},150:function(e,t,a){},161:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"router",function(){return ge}),a.d(n,"appStore",function(){return ye}),a.d(n,"snackStore",function(){return je});var r,o=a(0),c=a.n(o),i=a(11),s=a.n(i),l=(a(129),a(12)),u=a(10),p=a(15),m=a(16),h=a(19),b=a(17),d=(a(130),a(111)),f=Object(d.a)({palette:{primary:{light:"#008c3a",main:"#00c853",dark:"#33d375",contrastText:"#000"},secondary:{light:"#33a361",main:"#008c3a",dark:"#006228",contrastText:"#fff"},type:"dark"}}),g=a(235),O=a(81),y=a.n(O),j=a(106),v=a(46),E=a(23),k=a(211),S=a(219),w=a(212),C=a(220),P=a(221),M=a(112),D=a(217),N=a(218),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SMN",t=document.querySelector("title");t&&(t.innerHTML="Gaia - "+e)},T="http://gaia-smn.herokuapp.com",A={user:"".concat(T,"/usuario/"),cardapio:"".concat(T,"/cardapio/"),troca:"".concat(T,"/troca/")},H=a(42),x=a.n(H),L=function(e){return x.a.post("".concat(A.troca,"/user"),{user:e})},_=a(227),R=a(210),B=a(213),z=a(168),G=a(214),q=a(230),J=(a(150),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).days=void 0,a.state={tabIndex:0},a.days=["Domingo","Segunda","Ter\xe7a","Quarta","Quinta","Sexta","Sabado"],a.handleTabChange=a.handleTabChange.bind(Object(h.a)(a)),a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"handleTabChange",value:function(e,t){this.setState({tabIndex:t})}},{key:"render",value:function(){var e=this,t=this.props.menuData;return c.a.createElement("div",null,c.a.createElement(_.a,{value:this.state.tabIndex,onChange:this.handleTabChange,indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example"},this.days.map(function(e,t){return t>0&&t<6&&c.a.createElement(R.a,{label:e,key:t})})),t.map(function(t,a){return a<6&&c.a.createElement(k.a,{hidden:e.state.tabIndex!==a,key:a,className:"paper"},c.a.createElement(w.a,null,c.a.createElement(B.a,null,c.a.createElement(z.a,{className:"Home-Menus-ListItem"},c.a.createElement("span",null,"Prato Principal"),c.a.createElement(G.a,null,c.a.createElement(q.a,{value:t.chosed?t.chosed:t.pratoPrincipal,onChange:e.props.handleChange,inputProps:{name:String(a),className:"Home-Menus-Chose"}},c.a.createElement(D.a,{value:t.pratoPrincipal},t.pratoPrincipal),c.a.createElement(D.a,{value:t.opcao1},t.opcao1),c.a.createElement(D.a,{value:t.opcao2},t.opcao2)))),c.a.createElement(z.a,{className:"Home-Menus-ListItem"},c.a.createElement("span",null,"Guarni\xe7\xe3o 1"),c.a.createElement("span",null,t.guarnicao1)),c.a.createElement(z.a,{className:"Home-Menus-ListItem"},c.a.createElement("span",null,"Guarni\xe7\xe3o 2"),c.a.createElement("span",null,t.guarnicao2)),c.a.createElement(z.a,{className:"Home-Menus-ListItem"},c.a.createElement("span",null,"Salada"),c.a.createElement("span",null,t.salada)),c.a.createElement(z.a,{className:"Home-Menus-ListItem"},c.a.createElement("span",null,"Sobremesa"),c.a.createElement("span",null,t.sobremesa)))))}))}}]),t}(c.a.Component)),U=(a(161),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Home-loading-card"},c.a.createElement(N.a,{className:"Home-loading",size:100}))}}]),t}(c.a.Component)),W="GAIA_AUTH_KEY",Q=function(){return!!sessionStorage.getItem(W)},K=function(){if(!Q())throw window.location.href="/login",new Error("Usu\xe1rio n\xe3o autenticado");var e=sessionStorage.getItem(W);return JSON.parse(e)};a(162);function V(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var Y,$=Object(E.b)("appStore","snackStore")(r=Object(E.c)(r=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).anchorRef=void 0,a.user=void 0,a.state={menus:[],confirmAction:!1,loading:!0},a.user=K(),a.props.appStore.setTitle("Home"),I("Home"),a.getMenus(),a.anchorRef=c.a.createRef(),a.handleMenu=a.handleMenu.bind(Object(h.a)(a)),a.handleAction=a.handleAction.bind(Object(h.a)(a)),a.submitChoice=a.submitChoice.bind(Object(h.a)(a)),a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"handleMenu",value:function(e){var t=this.state.menus;t[e.target.name].chosed=e.target.value,this.setState(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?V(a,!0).forEach(function(t){Object(v.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):V(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},this.state,{menus:t}))}},{key:"getTrocas",value:function(){var e=this;L(this.user._id).then(function(t){e.setOptions(t.data)}).catch(function(e){console.log(e)}).finally(function(){e.setState({loading:!1})})}},{key:"setOptions",value:function(e){var t=this.state.menus;e.forEach(function(e){t.forEach(function(t){t._id===e.cardapio&&(t.chosed=e.pratoPrincipal)})}),this.setState({menus:t})}},{key:"getMenus",value:function(){var e=this;x.a.get("".concat(A.cardapio)).then(function(t){var a=e.sortMenus(t.data);e.setState({menus:a}),e.getTrocas()}).catch(function(e){console.log(e)}).finally(function(){e.setState({loading:!1})})}},{key:"sortMenus",value:function(e){return e.sort(function(e,t){var a=new Date(e.data).getDay(),n=new Date(t.data).getDay();return a>n?1:a<n?-1:0})}},{key:"handleAction",value:function(e){this.setState({confirmAction:!1}),"Sim"===e.target.innerText&&this.sendChanges()}},{key:"sendChanges",value:function(){var e=this;this.setState({loading:!0}),L(this.user._id).then(function(t){e.verifyTrocas(t.data)}).catch(function(t){e.setState({loading:!1})})}},{key:"verifyTrocas",value:function(e){var t=this,a=this.state.menus.map(function(a){var n;e.forEach(function(e){e.cardapio===a._id&&(n=e._id)});var r,o={user:t.user._id,cardapio:a._id,pratoPrincipal:a.chosed?a.chosed:a.pratoPrincipal,_id:n};return n?(r=o,x.a.put("".concat(A.troca),r)):function(e){return x.a.post("".concat(A.troca),e)}(o)});this.submitRequest(a)}},{key:"submitRequest",value:function(){var e=Object(j.a)(y.a.mark(function e(t){var a=this;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t).then(function(e){return a.props.snackStore.openSnack("Sucesso au atualizar todos os dias")}).catch(function(e){return a.props.snackStore.openSnack("Ocorreu algum erro: "+e)}).finally(function(){a.setState({loading:!1})});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"submitChoice",value:function(){this.setState({confirmAction:!0})}},{key:"render",value:function(){return c.a.createElement("div",{className:"Home Center-container-Vertical s840"},c.a.createElement(k.a,{className:"Home-card"},c.a.createElement(S.a,{title:"Trocar Prato Principal"}),c.a.createElement(w.a,null,this.state.menus.length?c.a.createElement(J,{menuData:this.state.menus,handleChange:this.handleMenu}):this.state.loading&&c.a.createElement(U,null)),c.a.createElement(C.a,{className:"button-container"},c.a.createElement(P.a,{variant:"contained",color:"primary",onClick:this.submitChoice,ref:this.anchorRef,disabled:this.state.loading},this.state.loading?c.a.createElement(N.a,{size:24}):"Trocar"),c.a.createElement(M.a,{keepMounted:!0,anchorEl:this.anchorRef.current,open:this.state.confirmAction,onClose:this.handleAction},c.a.createElement("h4",{className:"Home-confirm-title"},"Confirmar troca?"),c.a.createElement(D.a,{onClick:this.handleAction},"Sim"),c.a.createElement(D.a,{onClick:this.handleAction},"N\xe3o")))))}}]),t}(c.a.Component))||r)||r,F=a(229);a(163);function X(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var Z,ee,te,ae,ne,re,oe,ce,ie=Object(E.b)("appStore","snackStore")(Y=Object(E.c)(Y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).state=void 0,a.state={user:"",senha:"",touch:{user:!1,senha:!1},loading:!1,snacks:{state:!1,message:""}},Q()&&a.redirect(),I("Login"),a.inputChange=a.inputChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"inputChange",value:function(e){var t;this.setState((t={},Object(v.a)(t,e.target.name,e.target.value),Object(v.a)(t,"touch",function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?X(a,!0).forEach(function(t){Object(v.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):X(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},this.state.touch,Object(v.a)({},e.target.name,!0))),t))}},{key:"getErrors",value:function(e){return!this.state[e]&&this.state.touch[e]}},{key:"redirect",value:function(){this.props.appStore.setMenus(!0),window.location.href="/home"}},{key:"handleSubmit",value:function(e){var t,a=this;e.preventDefault(),this.setState({loading:!0}),(t={user:this.state.user,senha:this.state.senha},x.a.post("".concat(A.user).concat(t.user),t)).then(function(e){!function(e){e.senha&&delete e.senha,sessionStorage.setItem(W,JSON.stringify(e))}(e.data),a.props.snackStore.openSnack("Bem vindo ".concat(e.data.nome)),a.logged()}).catch(function(e){return a.props.snackStore.openSnack("Algo deu errado :/")}).finally(function(){a.setState({loading:!1})})}},{key:"logged",value:function(){var e=this;setTimeout(function(){e.redirect()},2e3)}},{key:"render",value:function(){return c.a.createElement("div",{className:"Login-deep"},c.a.createElement("div",{className:"Login Center-container s600"},c.a.createElement(k.a,null,c.a.createElement(S.a,{title:"GAIA - SMN"}),c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement(w.a,{className:"Login-form"},c.a.createElement(F.a,{required:!0,label:"Usu\xe1rio",className:"Login-form-field",name:"user",margin:"normal",variant:"outlined",autoComplete:"off",onBlur:this.inputChange,onInput:this.inputChange,value:this.state.user,error:this.getErrors("user")}),c.a.createElement(F.a,{required:!0,label:"Senha",className:"Login-form-field",name:"senha",margin:"normal",variant:"outlined",type:"password",autoComplete:"off",onBlur:this.inputChange,onInput:this.inputChange,value:this.state.senha,error:this.getErrors("senha")})),c.a.createElement(C.a,{className:"button-container"},c.a.createElement(P.a,{color:"primary",variant:"contained",type:"submit",disabled:this.state.loading},this.state.loading?c.a.createElement(N.a,{size:24}):"Entrar"))))),c.a.createElement("div",{className:"Login-banner"},c.a.createElement("video",{src:"banner.mp4",autoPlay:!0,muted:!0,loop:!0})))}}]),t}(c.a.Component))||Y)||Y,se=[{path:"".concat("","/login"),component:ie,exact:!0},{path:"".concat("","/home"),component:$,exact:!0}],le=[{path:"".concat("","/cardapio"),component:$,exact:!0}],ue=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("h1",null,"Not found")}}]),t}(c.a.Component),pe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement(g.d,null,se.map(function(e,t){return c.a.createElement(g.b,Object.assign({key:t},e))}),function(){if(!Q())throw new Error("Usu\xe1rio n\xe3o autenticado");return!!K().admin}()&&le.map(function(e,t){return c.a.createElement(g.b,Object.assign({key:t},e))}),c.a.createElement(g.b,{path:"".concat("","/**"),component:ue}))}}]),t}(c.a.Component),me=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement(g.d,null,c.a.createElement(g.b,{path:"".concat("","/login"),component:ie}),Q()?c.a.createElement(pe,null):c.a.createElement(g.a,{to:{pathname:"".concat("","/login")}}))}}]),t}(c.a.Component),he=a(38),be=a(70),de=a(27),fe=a(9),ge=new(Z=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"setHistory",value:function(e){this.history.push("".concat("","/").concat(e))}}]),t}(be.RouterStore),Object(de.a)(Z.prototype,"setHistory",[fe.action],Object.getOwnPropertyDescriptor(Z.prototype,"setHistory"),Z.prototype),Z),Oe=a(71),ye=(a(102),new(ee=function(){function e(){Object(l.a)(this,e),Object(Oe.a)(this,"storages",te,this)}return Object(u.a)(e,[{key:"setMenus",value:function(e){this.storages.showMenus=e}},{key:"setTitle",value:function(e){this.storages.title=e}},{key:"getMenus",get:function(){return this.storages.showMenus}},{key:"getTitle",get:function(){return this.storages.title}}]),e}(),te=Object(de.a)(ee.prototype,"storages",[fe.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{showMenus:!1,title:""}}}),Object(de.a)(ee.prototype,"getMenus",[fe.computed],Object.getOwnPropertyDescriptor(ee.prototype,"getMenus"),ee.prototype),Object(de.a)(ee.prototype,"getTitle",[fe.computed],Object.getOwnPropertyDescriptor(ee.prototype,"getTitle"),ee.prototype),Object(de.a)(ee.prototype,"setMenus",[fe.action],Object.getOwnPropertyDescriptor(ee.prototype,"setMenus"),ee.prototype),Object(de.a)(ee.prototype,"setTitle",[fe.action],Object.getOwnPropertyDescriptor(ee.prototype,"setTitle"),ee.prototype),ee)),je=new(ae=function(){function e(){Object(l.a)(this,e),Object(Oe.a)(this,"snack",ne,this)}return Object(u.a)(e,[{key:"closeSnack",value:function(e){this.snack.state=e,this.snack.message=""}},{key:"openSnack",value:function(e){this.snack.message=e,this.snack.state=!0}},{key:"getMessage",get:function(){return this.snack.message}},{key:"getState",get:function(){return this.snack.state}}]),e}(),ne=Object(de.a)(ae.prototype,"snack",[fe.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{state:!1,message:""}}}),Object(de.a)(ae.prototype,"getMessage",[fe.computed],Object.getOwnPropertyDescriptor(ae.prototype,"getMessage"),ae.prototype),Object(de.a)(ae.prototype,"getState",[fe.computed],Object.getOwnPropertyDescriptor(ae.prototype,"getState"),ae.prototype),Object(de.a)(ae.prototype,"closeSnack",[fe.action],Object.getOwnPropertyDescriptor(ae.prototype,"closeSnack"),ae.prototype),Object(de.a)(ae.prototype,"openSnack",[fe.action],Object.getOwnPropertyDescriptor(ae.prototype,"openSnack"),ae.prototype),ae),ve=a(234),Ee=a(232),ke=a(225),Se=a(74),we=a(224),Ce=a(222),Pe=a(223),Me=(a(165),Object(E.b)("appStore")(re=Object(E.c)(re=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"logOut",value:function(){sessionStorage.removeItem(W),window.location.href="/home"}},{key:"render",value:function(){return c.a.createElement(Ce.a,{position:"fixed",color:"primary",className:"AppBarComponent"},c.a.createElement(Pe.a,null,c.a.createElement(we.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:this.props.toggleDrawer},c.a.createElement("i",{className:"material-icons"},"menu")),c.a.createElement(Se.a,{className:"AppBar-title",variant:"h6"},this.props.appStore.getTitle),c.a.createElement(P.a,{color:"inherit",onClick:this.logOut},"Sair")))}}]),t}(c.a.Component))||re)||re),De=a(233),Ne=(a(166),Object(E.b)("snackStore")(oe=Object(E.c)(oe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={},a.closeSnack=a.closeSnack.bind(Object(h.a)(a)),a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"closeSnack",value:function(e,t){"clickaway"!==t&&this.props.snackStore.closeSnack(!1)}},{key:"render",value:function(){return c.a.createElement(De.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.props.snackStore.getState,autoHideDuration:6e3,onClose:this.closeSnack,ContentProps:{"aria-describedby":"message-id"},message:c.a.createElement("span",null,this.props.snackStore.getMessage)})}}]),t}(c.a.Component))||oe)||oe),Ie=a(231),Te=a(109),Ae=a.n(Te),He=a(110),xe=a.n(He),Le=a(236),_e=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App-SideNav"},c.a.createElement(Ie.a,{defaultCollapseIcon:c.a.createElement(Ae.a,null),defaultExpandIcon:c.a.createElement(xe.a,null)},c.a.createElement(Le.a,{nodeId:"1",label:"Administrativo"},c.a.createElement(Le.a,{nodeId:"2",label:"Alterar cardapio"}),c.a.createElement(Le.a,{nodeId:"3",label:"Cadastro de usu\xe1rio"}),c.a.createElement(Le.a,{nodeId:"4",label:"Pedidos de trocas"}),c.a.createElement(Le.a,{nodeId:"5",label:"Sugest\xf5es e bugs"})),c.a.createElement(Le.a,{nodeId:"6",label:"Op\xe7\xf5es"},c.a.createElement(Le.a,{nodeId:"6",label:"Cardapios"}),c.a.createElement(Le.a,{nodeId:"7",label:"Reportar bug/sugest\xe3o"}))))}}]),t}(c.a.Component),Re=Object(E.b)("appStore")(ce=Object(E.c)(ce=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).state=void 0,a.state={menu:!1},Q()&&a.props.appStore.setMenus(!0),a.toggleDrawer=a.toggleDrawer.bind(Object(h.a)(a)),a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"toggleDrawer",value:function(){this.setState({menu:!this.state.menu})}},{key:"render",value:function(){var e=Object(he.a)(),t=Object(be.syncHistoryWithStore)(e,ge),a=this.props.appStore?this.props.appStore.getMenus:null;return c.a.createElement(ke.a,{theme:f},c.a.createElement(ve.a,null),c.a.createElement("div",{className:"Gaia"},a&&c.a.createElement(Me,{toggleDrawer:this.toggleDrawer}),c.a.createElement(Ee.a,{open:this.state.menu,onClose:this.toggleDrawer},c.a.createElement(_e,null)),c.a.createElement(g.c,{history:t},c.a.createElement(me,null))),c.a.createElement(Ne,null))}}]),t}(c.a.Component))||ce)||ce;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(E.a,n,c.a.createElement(Re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[124,1,2]]]);
//# sourceMappingURL=main.6bd18970.chunk.js.map