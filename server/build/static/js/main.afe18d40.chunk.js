(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{11:function(e,a,t){e.exports=t.p+"static/media/logo.86fef799.svg"},30:function(e,a,t){e.exports=t.p+"static/media/landing.211f2bb0.svg"},31:function(e,a,t){e.exports=t.p+"static/media/study.e7a7e1b4.svg"},32:function(e,a,t){e.exports=t.p+"static/media/give-classes.156102ee.svg"},33:function(e,a,t){e.exports=t.p+"static/media/purple-heart.bfdb3ebe.svg"},37:function(e,a,t){e.exports=t.p+"static/media/back.dc8c47fa.svg"},38:function(e,a,t){e.exports=t.p+"static/media/whatsapp.45c6e6ec.svg"},40:function(e,a,t){e.exports=t.p+"static/media/warning.6dfaa2f9.svg"},42:function(e,a,t){e.exports=t(79)},64:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(28),c=t.n(r),o=t(6),s=t(1),i=t(2),u=t(29),m=t.n(u),b=t(11),d=t.n(b),f=t(30),v=t.n(f),p=t(31),E=t.n(p),g=t(32),h=t.n(g),j=t(33),O=t.n(j),S=t(34),y=t.n(S).a.create({baseURL:"http://localhost:3333"});t(64);var k=function(){var e=Object(n.useState)(0),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)((function(){var e=localStorage.getItem("dark");return null!=e&&JSON.parse(e)})),s=Object(i.a)(c,2),u=s[0],b=s[1];return Object(n.useEffect)((function(){y.get("/connections").then((function(e){var a=e.data.total;r(a),localStorage.setItem("dark",JSON.stringify(u))}))}),[u]),l.a.createElement("div",{id:u?"dark-theme":"light-theme"},l.a.createElement("div",{id:"page-landing"},l.a.createElement("div",{id:"page-landing-content",className:"container"},l.a.createElement("div",{className:"logo-container"},l.a.createElement("img",{src:d.a,alt:"Proffy"}),l.a.createElement("h2",null,"Sua plataforma de estudos online.")),l.a.createElement("img",{src:v.a,alt:"Plataforma de estudos",className:"hero-image"}),l.a.createElement("div",{className:"buttons-container"},l.a.createElement(o.b,{to:"study",className:"study"},l.a.createElement("img",{src:E.a,alt:"Estudar"}),"Estudar"),l.a.createElement(o.b,{to:"give-classes",className:"give-classes"},l.a.createElement("img",{src:h.a,alt:"Dar aulas"}),"Dar aulas")),l.a.createElement("div",{className:"right-bottom"},l.a.createElement("span",{className:"total-connections"},"Total de ",t," conex\xf5es j\xe1 realizadas",l.a.createElement("img",{src:O.a,alt:"Cora\xe7\xe3o roxo"})),l.a.createElement("span",{className:"theme-toogle"},l.a.createElement(m.a,{checked:u,offstyle:"light",style:"border",onlabel:"Tema escuro",offlabel:"Tema claro",onChange:function(){b(!u)}}))))))},N=t(17),C=t.n(N),w=t(36),x=t(37),_=t.n(x),D=(t(71),function(e){var a=Object(n.useState)((function(){var e=localStorage.getItem("dark");return null!=e&&JSON.parse(e)})),t=Object(i.a)(a,1)[0];return l.a.createElement("div",{id:t?"dark-theme":"light-theme"},l.a.createElement("header",{className:"page-header"},l.a.createElement("div",{className:"top-bar-container"},l.a.createElement(o.b,{to:"/"},l.a.createElement("img",{src:_.a,alt:"Voltar"})),l.a.createElement("img",{src:d.a,alt:"Proffy"})),l.a.createElement("div",{className:"header-content"},l.a.createElement("strong",null,e.title),e.description&&l.a.createElement("p",null,e.description),e.children)))}),A=t(38),B=t.n(A),I=(t(72),function(e){var a=e.teacher;return l.a.createElement("article",{className:"teacher-item"},l.a.createElement("header",null,l.a.createElement("img",{src:a.avatar,alt:a.name}),l.a.createElement("div",null,l.a.createElement("strong",null,a.name),l.a.createElement("span",null,a.subject))),l.a.createElement("p",null," ",a.bio," "),l.a.createElement("footer",null,l.a.createElement("p",null,"Pre\xe7o/hora",l.a.createElement("strong",null,"R$ ",a.cost)),l.a.createElement("a",{target:"_blank",onClick:function(){y.post("connections",{user_id:a.id})},href:"https://wa.me/".concat(a.whatsapp)},l.a.createElement("img",{src:B.a,alt:"Whatsapp"}),"Entrar em contato")))}),J=t(7),P=(t(73),function(e){var a=e.label,t=e.name,n=Object(J.a)(e,["label","name"]);return l.a.createElement("div",{className:"input-block"},l.a.createElement("label",{htmlFor:t},a),l.a.createElement("input",Object.assign({type:"text",id:t},n)))}),Q=(t(74),function(e){var a=e.label,t=e.name,n=e.options,r=Object(J.a)(e,["label","name","options"]);return l.a.createElement("div",{className:"select-block"},l.a.createElement("label",{htmlFor:t}," ",a," "),l.a.createElement("select",Object.assign({value:"",id:t},r),l.a.createElement("option",{value:"",disabled:!0,hidden:!0},"Selecione uma op\xe7\xe3o"),n.map((function(e){return l.a.createElement("option",{key:e.value,value:e.value}," ",e.label)}))))});t(75);var T=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(""),o=Object(i.a)(c,2),s=o[0],u=o[1],m=Object(n.useState)(""),b=Object(i.a)(m,2),d=b[0],f=b[1],v=Object(n.useState)(""),p=Object(i.a)(v,2),E=p[0],g=p[1];function h(){return(h=Object(w.a)(C.a.mark((function e(a){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,y.get("classes",{params:{subject:s,week_day:d,time:E}});case 3:t=e.sent,r(t.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return l.a.createElement("div",{id:"page-teacher-list",className:"container"},l.a.createElement(D,{title:"Estes s\xe3o os proffys dispon\xedveis."},l.a.createElement("form",{id:"search-teachers",onSubmit:function(e){return h.apply(this,arguments)}},l.a.createElement(Q,{name:"subject",label:"Mat\xe9ria",value:s,onChange:function(e){u(e.target.value)},options:[{value:"Artes",label:"Artes"},{value:"Bio",label:"Bio"},{value:"Ci\xeancias",label:"Ci\xeancias"}]}),l.a.createElement(Q,{name:"week_day",label:"Dia da semana",value:d,onChange:function(e){f(e.target.value)},options:[{value:"0",label:"Domingo"},{value:"1",label:"Segunda-feira"},{value:"2",label:"Ter\xe7a-feira"},{value:"3",label:"Quarta-feira"},{value:"4",label:"Quinta-feira"},{value:"5",label:"Sexta-feira"},{value:"6",label:"S\xe1bado"}]}),l.a.createElement(P,{type:"time",name:"time",label:"Hora",value:E,onChange:function(e){g(e.target.value)}}),l.a.createElement("button",{type:"submit"},"Buscar"))),l.a.createElement("main",null,t.map((function(e){return l.a.createElement(I,{key:e.id,teacher:e})}))))},F=t(12),M=t(39),q=t(41),z=(t(76),function(e){var a=e.label,t=e.name,n=Object(J.a)(e,["label","name"]);return l.a.createElement("div",{className:"textarea-block"},l.a.createElement("label",{htmlFor:t},a),l.a.createElement("textarea",Object.assign({id:t},n)))}),H=t(40),R=t.n(H);t(77);var W=function(){var e=Object(s.e)(),a=Object(n.useState)(""),t=Object(i.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)(""),u=Object(i.a)(o,2),m=u[0],b=u[1],d=Object(n.useState)(""),f=Object(i.a)(d,2),v=f[0],p=f[1],E=Object(n.useState)(""),g=Object(i.a)(E,2),h=g[0],j=g[1],O=Object(n.useState)(""),S=Object(i.a)(O,2),k=S[0],N=S[1],C=Object(n.useState)(""),w=Object(i.a)(C,2),x=w[0],_=w[1],A=Object(n.useState)([{week_day:0,from:"",to:""}]),B=Object(i.a)(A,2),I=B[0],J=B[1];function T(e,a,t){var n=I.map((function(n,l){return l===e?Object(M.a)({},n,Object(F.a)({},a,t)):n}));J(n)}return l.a.createElement("div",{id:"page-teacher-form",className:"container"},l.a.createElement(D,{title:"Que incr\xedvel que voc\xea quer dar aulas.",description:"O primeiro passo \xe9 preencher esse formul\xe1rio de inscri\xe7\xe3o."}),l.a.createElement("main",null,l.a.createElement("form",{onSubmit:function(a){a.preventDefault(),y.post("classes",{name:r,avatar:m,whatsapp:v,bio:h,subject:k,cost:Number(x),schedule:I}).then((function(){alert("Cadastro realizado com sucesso!"),e.push("/")})).catch((function(){alert("Erro no cadastro!")}))}},l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Seus dados"),l.a.createElement(P,{name:"name",label:"Nome completo",value:r,onChange:function(e){c(e.target.value)}}),l.a.createElement(P,{name:"avatar",label:"Avatar",value:m,onChange:function(e){b(e.target.value)}}),l.a.createElement(P,{name:"whatsapp",label:"Whatsapp",value:v,onChange:function(e){p(e.target.value)}}),l.a.createElement(z,{name:"bio",label:"Biografia",value:h,onChange:function(e){j(e.target.value)}})),l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Sobre a aula"),l.a.createElement(Q,{name:"subject",label:"Mat\xe9ria",value:k,onChange:function(e){N(e.target.value)},options:[{value:"Artes",label:"Artes"},{value:"Bio",label:"Bio"},{value:"Ci\xeancias",label:"Ci\xeancias"}]}),l.a.createElement(P,{name:"cost",label:"Custo da sua hora por aula",value:x,onChange:function(e){_(e.target.value)}})),l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Hor\xe1rios dispon\xedveis",l.a.createElement("button",{type:"button",onClick:function(){J([].concat(Object(q.a)(I),[{week_day:0,from:"",to:""}]))}},"+ Novo hor\xe1rio")),I.map((function(e,a){return l.a.createElement("div",{key:e.week_day,className:"schedule-item"},l.a.createElement(Q,{name:"week_day",label:"Dia da semana",value:e.week_day,onChange:function(e){return T(a,"week_day",e.target.value)},options:[{value:"0",label:"Domingo"},{value:"1",label:"Segunda-feira"},{value:"2",label:"Ter\xe7a-feira"},{value:"3",label:"Quarta-feira"},{value:"4",label:"Quinta-feira"},{value:"5",label:"Sexta-feira"},{value:"6",label:"S\xe1bado"}]}),l.a.createElement(P,{name:"from",label:"Das",type:"time",value:e.from,onChange:function(e){return T(a,"from",e.target.value)}}),l.a.createElement(P,{name:"to",label:"At\xe9",type:"time",value:e.to,onChange:function(e){return T(a,"to",e.target.value)}}))}))),l.a.createElement("footer",null,l.a.createElement("p",null,l.a.createElement("img",{src:R.a,alt:"Aviso importante"}),"Importante! ",l.a.createElement("br",null),"Preencha todos os dados"),l.a.createElement("button",{type:"submit"},"Salvar cadastro")))))};var L=function(){return l.a.createElement(o.a,null,l.a.createElement(s.a,{path:"/",exact:!0,component:k}),l.a.createElement(s.a,{path:"/study",component:T}),l.a.createElement(s.a,{path:"/give-classes",component:W}))};t(78);var U=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(L,null))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(U,null)),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.afe18d40.chunk.js.map