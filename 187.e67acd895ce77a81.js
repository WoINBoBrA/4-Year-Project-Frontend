"use strict";(self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[]).push([[187],{4187:(D,h,u)=>{u.r(h),u.d(h,{TicketsModule:()=>Y});var g=u(9808),l=u(2382),i=u(1725),T=u(1728),C=u(5093),p=u(7600),r=u(4987),m=u(4872),t=u(4893),_=u(7978);function b(n,c){if(1&n&&(t.TgZ(0,"option",16),t._uU(1),t.qZA()),2&n){const e=c.$implicit;t.Q6J("value",c.index),t.xp6(1),t.Oqu(e)}}function f(n,c){if(1&n&&(t.TgZ(0,"option",16),t._uU(1),t.qZA()),2&n){const e=c.$implicit;t.Q6J("value",e.id),t.xp6(1),t.AsE("",e.secondName," ",e.firstName,"")}}function A(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"c-row",2)(1,"label",17),t._uU(2,"\u0417\u0430\u044f\u0432\u0438\u0442\u0435\u043b\u044c:"),t.qZA(),t.TgZ(3,"c-col")(4,"select",18),t.NdJ("ngModelChange",function(s){return t.CHM(e),t.oxw().selected.applicant=s}),t.YNc(5,f,2,3,"option",5),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(4),t.Q6J("ngModel",e.selected.applicant),t.xp6(1),t.Q6J("ngForOf",e.applicants)}}function k(n,c){if(1&n&&(t.TgZ(0,"option",16),t._uU(1),t.qZA()),2&n){const e=c.$implicit;t.Q6J("value",e.id),t.xp6(1),t.AsE("",e.secondName," ",e.firstName,"")}}function Z(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"c-row",2)(1,"label",19),t._uU(2,"\u0418\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c:"),t.qZA(),t.TgZ(3,"c-col")(4,"select",20),t.NdJ("ngModelChange",function(s){return t.CHM(e),t.oxw().selected.worker=s}),t._UZ(5,"option"),t.YNc(6,k,2,3,"option",5),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(4),t.Q6J("ngModel",e.selected.worker),t.xp6(2),t.Q6J("ngForOf",e.workers)}}function x(n,c){if(1&n&&(t.TgZ(0,"option",16),t._uU(1),t.qZA()),2&n){const e=c.$implicit;t.Q6J("value",e.id),t.xp6(1),t.Oqu(e.name)}}function M(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"c-row",2)(1,"label",21),t._uU(2,"\u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435:"),t.qZA(),t.TgZ(3,"c-col")(4,"select",22),t.NdJ("ngModelChange",function(s){return t.CHM(e),t.oxw().selected.state=s}),t.YNc(5,x,2,2,"option",5),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(4),t.Q6J("ngModel",e.selected.state),t.xp6(1),t.Q6J("ngForOf",e.ticketStates)}}function v(n,c){1&n&&(t.TgZ(0,"c-col",23)(1,"h1"),t._uU(2,"\u0417\u0430\u043f\u0438\u0441\u0435\u0439 \u043d\u0435\u0442"),t.qZA()())}function O(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"tr",33),t.NdJ("click",function(s){return t.CHM(e),t.oxw(2).SelectRow(s)}),t.TgZ(1,"td"),t._uU(2),t.ALo(3,"slice"),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.ALo(6,"slice"),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.ALo(15,"date"),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.ALo(18,"date"),t.qZA()()}if(2&n){const e=c.$implicit,o=c.index,s=t.oxw(2);t.Q6J("cTableColor",s.GetColor(e.states[0].state))("cTableActive",s.selectedRow==o),t.uIk("index",o),t.xp6(2),t.Oqu(e.theme.length>20?t.Dn7(3,12,e.theme,0,20)+"...":e.theme),t.xp6(3),t.Oqu(e.category.name.length>40?t.Dn7(6,16,e.category.name,0,40)+"...":e.category.name),t.xp6(3),t.AsE("",e.applicant.secondName," ",e.applicant.firstName,""),t.xp6(2),t.AsE("",null!=e.worker?e.worker.secondName:""," ",null!=e.worker?e.worker.firstName:"",""),t.xp6(2),t.Oqu(s.StateToName(e.states[0].state)),t.xp6(2),t.Oqu(t.xi3(15,20,e.createdAt,"dd.MM.YYYY")),t.xp6(3),t.Oqu(s.CheckState(e.states[0].state)?t.xi3(18,23,e.states[0].createdAt,"dd.MM.YYYY"):"")}}function w(n,c){if(1&n&&(t.TgZ(0,"table",24)(1,"thead")(2,"tr")(3,"th",25),t._uU(4,"\u0422\u0435\u043c\u0430 \u0437\u0430\u044f\u0432\u043a\u0438"),t.qZA(),t.TgZ(5,"th",26),t._uU(6,"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u0437\u0430\u044f\u0432\u043a\u0438"),t.qZA(),t.TgZ(7,"th",27),t._uU(8,"\u0417\u0430\u044f\u0432\u0438\u0442\u0435\u043b\u044c"),t.qZA(),t.TgZ(9,"th",28),t._uU(10,"\u0418\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c"),t.qZA(),t.TgZ(11,"th",29),t._uU(12,"\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u044f\u0432\u043a\u0438"),t.qZA(),t.TgZ(13,"th",30),t._uU(14,"\u0414\u0430\u0442\u0430 \u043f\u043e\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u044f\u0432\u043a\u0438"),t.qZA(),t.TgZ(15,"th",31),t._uU(16,"\u0414\u0430\u0442\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u044f\u0432\u043a\u0438"),t.qZA()()(),t.TgZ(17,"tbody"),t.YNc(18,O,19,26,"tr",32),t.qZA()()),2&n){const e=t.oxw();t.Q6J("hover",!0)("responsive",!0)("small",!0),t.xp6(18),t.Q6J("ngForOf",e.tableData)}}const F=function(n){return["/tickets",n]};function N(n,c){if(1&n&&(t.TgZ(0,"li",34)(1,"a",35),t._uU(2),t.qZA()()),2&n){const e=c.$implicit,o=t.oxw();t.Q6J("disabled",-1==e)("active",e==o.page),t.xp6(1),t.Q6J("routerLink",t.VKq(4,F,e)),t.xp6(1),t.Oqu(-1==e?"...":e)}}const P=function(n){return["/ticket",n]};function L(n,c){if(1&n&&(t.TgZ(0,"button",36),t._uU(1," \u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443 "),t.qZA()),2&n){const e=t.oxw();t.Q6J("routerLink",t.VKq(1,P,e.tableData[e.selectedRow].id))}}let E=(()=>{class n{constructor(e,o,s){this.route=e,this.ticketService=o,this.userService=s,this.tableData=[],this.page=1,this.maxpage=1,this.selectedRow=-1,this.ticketStates=[{id:-1,name:"\u0412\u0441\u0435"},{id:0,name:"\u0417\u0430\u043a\u0440\u044b\u0442\u0430"},{id:1,name:"\u0412 \u0440\u0430\u0431\u043e\u0442\u0435"},{id:2,name:"\u041e\u0436\u0438\u0434\u0430\u0435\u0442 \u043e\u0442\u0432\u0435\u0442\u0430"},{id:3,name:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430"},{id:4,name:"\u041e\u0442\u043c\u0435\u043d\u0435\u043d\u0430"}],this.searchConditions=["\u0412\u0441\u0435","\u041f\u043e \u0437\u0430\u044f\u0432\u0438\u0442\u0435\u043b\u044e \u0438 \u0441\u0442\u0430\u0442\u0443\u0441\u0443","\u041f\u043e \u0438\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044e \u0438 \u0441\u0442\u0430\u0442\u0443\u0441\u0443","\u041f\u043e \u0441\u0442\u0430\u0442\u0443\u0441\u0443"],this.buttons=[],this.buttonspadding=3,this.elements=18,this.condition={selected:a.ALL,current:a.ALL,variables:[]},this.applicants=[],this.workers=[],this.selected={applicant:-1,worker:-1,state:r.CY.ANY}}ngOnInit(){this.InitData()}InitData(){this.userService.getByRole(m.u.TECHSUPPORT).subscribe(e=>{this.workers=e}),this.userService.getByRole(m.u.USER).subscribe(e=>{this.applicants=e}),this.route.params.subscribe(e=>{var o;this.page=null!==(o=parseInt(e.page))&&void 0!==o?o:1,this.page<0&&(this.page=1),this.LoadPage()})}LoadPage(){switch(this.condition.current){case a.ALL:this.ticketService.getAll(this.page,this.elements).subscribe(e=>this.BindData(e));break;case a.APPLICANT:this.ticketService.getByApplicant(this.page,this.elements,this.condition.variables[0],this.condition.variables[1]).subscribe(e=>this.BindData(e));break;case a.WORKER:this.ticketService.getByWorker(this.page,this.elements,this.condition.variables[0],this.condition.variables[1]).subscribe(e=>this.BindData(e));break;case a.STATE:this.ticketService.getByState(this.page,this.elements,this.condition.variables[0]).subscribe(e=>this.BindData(e))}}BindData(e){this.tableData=e.rows,this.maxpage=Math.ceil(e.count/this.elements),this.page>this.maxpage&&this.maxpage>0?(this.page=this.maxpage,this.LoadPage()):this.GeneratePageButtons()}ChangeSearchCondition(){switch(this.page=1,this.condition.current=Number(this.condition.selected),this.condition.current){case a.ALL:this.condition.variables=[];break;case a.APPLICANT:this.condition.variables=[Number(this.selected.applicant),Number(this.selected.state)];break;case a.WORKER:this.condition.variables=[Number(this.selected.worker),Number(this.selected.state)];break;case a.STATE:this.condition.variables=[Number(this.selected.state)]}this.LoadPage()}GeneratePageButtons(){if(this.buttons=[],0!=this.tableData.length){this.buttons.push(1),this.page-(1+this.buttonspadding)>1&&this.buttons.push(-1);for(let e=Math.max(this.page-this.buttonspadding,2);e<=Math.min(this.page+this.buttonspadding,this.maxpage);e++)this.buttons.push(e);this.page+(1+this.buttonspadding)<this.maxpage&&this.buttons.push(-1),this.page+this.buttonspadding<this.maxpage&&this.buttons.push(this.maxpage)}}SelectRow(e){this.selectedRow=e.target.parentElement.attributes.index.value}GetColor(e){switch(e){case r.CY.CANCELED||r.CY.CLOSED:return"dark";case r.CY.COMPLETED:return"success";case r.CY.WAITFORCONFRIMATION:return"warning"}return""}CheckState(e){return e==r.CY.CANCELED||e==r.CY.CLOSED||e==r.CY.COMPLETED}StateToName(e){let o=this.ticketStates.find(s=>s.id==e);return null!=o?o.name:""}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.gz),t.Y36(_.wP),t.Y36(_.KD))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:25,vars:9,consts:[[1,"mb-4","mh-100"],["cForm","","ngNativeValidate","",1,"mt-3",3,"ngSubmit"],[1,"mb-2"],["cLabel","col","cCol","","sm","auto","for","searchCondition"],["cSelect","","id","searchCondition","name","condition.selected",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["xs","auto"],["cButton","","color","light","type","submit",1,"float-end"],["class","mb-2",4,"ngIf"],["class","text-center",4,"ngIf"],["align","middle","cTable","","class","mb-0 border",3,"hover","responsive","small",4,"ngIf"],["sm","5"],["size","sm"],["cPageItem","",3,"disabled","active",4,"ngFor","ngForOf"],["sm","7",1,"d-none","d-md-block"],["cButton","","class","float-end","color","light",3,"routerLink",4,"ngIf"],[3,"value"],["cLabel","col","cCol","","sm","auto","for","applicant"],["size","sm","cSelect","","id","applicant","name","selected.applicant","required","",3,"ngModel","ngModelChange"],["cLabel","col","cCol","","sm","auto","for","worker"],["size","sm","cSelect","","id","worker","name","selected.worker",3,"ngModel","ngModelChange"],["cLabel","col","cCol","","sm","auto","for","state"],["size","sm","cSelect","","id","state","name","selected.state","required","",3,"ngModel","ngModelChange"],[1,"text-center"],["align","middle","cTable","",1,"mb-0","border",3,"hover","responsive","small"],["scope","col",1,"theme"],["scope","col",1,"category"],["scope","col",1,"applicant"],["scope","col",1,"worker"],["scope","col",1,"state"],["scope","col",1,"createDate"],["scope","col",1,"completeDate"],[3,"cTableColor","cTableActive","click",4,"ngFor","ngForOf"],[3,"cTableColor","cTableActive","click"],["cPageItem","",3,"disabled","active"],["cPageLink","",3,"routerLink"],["cButton","","color","light",1,"float-end",3,"routerLink"]],template:function(e,o){1&e&&(t.TgZ(0,"c-card",0)(1,"c-card-header")(2,"form",1),t.NdJ("ngSubmit",function(){return o.ChangeSearchCondition()}),t.TgZ(3,"c-row",2)(4,"label",3),t._uU(5,"\u0417\u0430\u044f\u0432\u043a\u0438"),t.qZA(),t.TgZ(6,"c-col")(7,"select",4),t.NdJ("ngModelChange",function(d){return o.condition.selected=d}),t.YNc(8,b,2,2,"option",5),t.qZA()(),t.TgZ(9,"c-col",6)(10,"button",7),t._uU(11,"\u041d\u0430\u0439\u0442\u0438"),t.qZA()()(),t.YNc(12,A,6,2,"c-row",8),t.YNc(13,Z,7,2,"c-row",8),t.YNc(14,M,6,2,"c-row",8),t.qZA()(),t.TgZ(15,"c-card-body"),t.YNc(16,v,3,0,"c-col",9),t.YNc(17,w,19,4,"table",10),t.qZA(),t.TgZ(18,"c-card-footer")(19,"c-row")(20,"c-col",11)(21,"c-pagination",12),t.YNc(22,N,3,6,"li",13),t.qZA()(),t.TgZ(23,"c-col",14),t.YNc(24,L,2,3,"button",15),t.qZA()()()()),2&e&&(t.xp6(7),t.Q6J("ngModel",o.condition.selected),t.xp6(1),t.Q6J("ngForOf",o.searchConditions),t.xp6(4),t.Q6J("ngIf",1==o.condition.selected),t.xp6(1),t.Q6J("ngIf",2==o.condition.selected),t.xp6(1),t.Q6J("ngIf",1==o.condition.selected||2==o.condition.selected||3==o.condition.selected),t.xp6(2),t.Q6J("ngIf",0==o.tableData.length),t.xp6(1),t.Q6J("ngIf",0!=o.tableData.length),t.xp6(5),t.Q6J("ngForOf",o.buttons),t.xp6(2),t.Q6J("ngIf",-1!=o.selectedRow))},directives:[i.AkF,i.nkx,l.JL,l.F,i.$_X,i.iok,i.eFW,i.sOC,i.Yp0,i.nqR,l.EJ,l.JJ,l.On,g.sg,l.YN,l.Kr,i.Hq3,g.O5,l.Q7,i.yue,i.auY,i.io7,i.ZQn,i.xUh,i.QtL,i.Qmh,p.yS,i.YHm,p.rH],pipes:[g.OU,g.uU],styles:["table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .theme[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .applicant[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .worker[_ngcontent-%COMP%]{width:17%}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .state[_ngcontent-%COMP%]{width:12%}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .createDate[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .completeDate[_ngcontent-%COMP%]{width:10%}"]}),n})();var a=(()=>{return(n=a||(a={}))[n.ALL=0]="ALL",n[n.APPLICANT=1]="APPLICANT",n[n.WORKER=2]="WORKER",n[n.STATE=3]="STATE",a;var n})();const q=[{path:":page",component:E,data:{title:$localize`Заявки`}},{path:"",redirectTo:"1",pathMatch:"full"}];let J=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[p.Bz.forChild(q)],p.Bz]}),n})(),Y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[J,i.dTQ,i.dGk,T.QX,i.P4_,g.ez,i.zE6,i.qek,l.UX,i.hJ1,i.ejP,i.hJ1,i.ga2,C.N,i.FxY,i.U$I,i.u3b,g.ez,l.u5]]}),n})()}}]);