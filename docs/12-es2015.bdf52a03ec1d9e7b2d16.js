(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{eTuU:function(t,n,e){"use strict";e.r(n),e.d(n,"ViewMessagePageModule",(function(){return m}));var o=e("ofXK"),i=e("3Pt+"),a=e("TEn/"),s=e("tyNb"),c=e("fXoL"),r=e("EnSQ");function g(t,n){if(1&t&&(c.Lb(0,"ion-content",3),c.Lb(1,"h1"),c.ec(2),c.Kb(),c.Jb(3,"p",4),c.Jb(4,"img",5),c.Kb()),2&t){const t=c.Ub();c.Xb("fullscreen",!0),c.xb(2),c.fc(t.message.title),c.xb(1),c.Xb("innerHTML",t.message.poem,c.ac),c.xb(1),c.Yb("src","assets/images/",t.message.img,"",c.bc)}}const b=[{path:"",component:(()=>{class t{constructor(t,n){this.data=t,this.activatedRoute=n}ngOnInit(){const t=this.activatedRoute.snapshot.paramMap.get("id");this.message=this.data.getMessageById(t)}getBackButtonText(){const t=window;return"ios"===(t&&t.Ionic&&t.Ionic.mode)?"Back":""}}return t.\u0275fac=function(n){return new(n||t)(c.Ib(r.a),c.Ib(s.a))},t.\u0275cmp=c.Cb({type:t,selectors:[["app-view-message"]],decls:5,vars:3,consts:[[3,"translucent"],["defaultHref","/",3,"text"],[3,"fullscreen",4,"ngIf"],[3,"fullscreen"],[3,"innerHTML"],["alt"," Card image cap",3,"src"]],template:function(t,n){1&t&&(c.Lb(0,"ion-header",0),c.Lb(1,"ion-toolbar"),c.Lb(2,"ion-buttons"),c.Jb(3,"ion-back-button",1),c.Kb(),c.Kb(),c.Kb(),c.dc(4,g,5,4,"ion-content",2)),2&t&&(c.Xb("translucent",!0),c.xb(3),c.Xb("text",n.getBackButtonText()),c.xb(1),c.Xb("ngIf",n.message))},directives:[a.f,a.n,a.d,a.b,a.c,o.i,a.e],styles:["h1[_ngcontent-%COMP%]{margin-top:1rem!important}h1[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin-left:5px!important;font-family:papyrus}ion-item[_ngcontent-%COMP%]{--inner-padding-end:0;--background:transparent}ion-label[_ngcontent-%COMP%]{margin-top:12px;margin-bottom:12px}ion-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:600}ion-item[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{font-size:15px;margin-right:12px;font-weight:400}h1[_ngcontent-%COMP%]{font-weight:700;font-size:22px;margin:0 0 20px}p[_ngcontent-%COMP%]{line-height:.5rem;font-size:.6rem;white-space:nowrap;margin-right:50px!important}img[_ngcontent-%COMP%]{margin-top:1rem;height:30vh;width:99vw}"]}),t})()}];let p=(()=>{class t{}return t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({factory:function(n){return new(n||t)},imports:[[s.i.forChild(b)],s.i]}),t})(),m=(()=>{class t{}return t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({factory:function(n){return new(n||t)},imports:[[o.b,i.a,a.o,p]]}),t})()}}]);