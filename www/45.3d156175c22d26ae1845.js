(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{bUT5:function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),u=t("ZZ/e"),i=t("AytR"),o=t("t/Na"),a=t("iw74"),c=function(){function l(l,n){this.http=l,this.storage=n}return l.prototype.getApplications=function(){var l=this;return new Promise(function(n,t){l.storage.get("dmo_token").then(function(e){e?l.http.get(i.a.apiUrl+"/applications?token="+e).subscribe(function(l){n(l)},function(l){t(l)}):t()})})},l.prototype.approveApplication=function(l){var n=this;return new Promise(function(t,e){n.storage.get("dmo_token").then(function(u){u?n.http.post(i.a.apiUrl+"/applications/approve?token="+u,l).subscribe(function(l){t(l)},function(l){e(l)}):e()})})},l.prototype.declineApplication=function(l){var n=this;return new Promise(function(t,e){n.storage.get("dmo_token").then(function(u){u?n.http.post(i.a.apiUrl+"/applications/decline?token="+u,l).subscribe(function(l){t(l)},function(l){e(l)}):e()})})},l.ngInjectableDef=e.Sb({factory:function(){return new l(e.Tb(o.c),e.Tb(a.b))},token:l,providedIn:"root"}),l}(),r=function(){function l(l,n){this.applicationService=l,this.alertController=n,this.applications={venues:[],dj:[]},this.getApplications()}return l.prototype.ngOnInit=function(){},l.prototype.getApplications=function(){var l=this;this.loading=!0,this.applicationService.getApplications().then(function(n){l.loading=!1,console.log(n),l.applications=n}).catch(function(){l.loading=!1})},l.prototype.approveVenue=function(l,n){var t=this;l.preventDefault(),l.stopPropagation(),this.alertController.create({header:"Are Your Sure?",subHeader:"Your are about to approve "+n.name,message:"By approving this venue, they will be visible by all users of the app. The venue will also be able to create their own events and deals within the app.",buttons:[{text:"Cancel",role:"cancel"},{text:"Approve Venue",handler:function(){t.approveApplication({venue_id:n.id})}}]}).then(function(l){l.present()})},l.prototype.declineVenue=function(l,n){var t=this;l.preventDefault(),l.stopPropagation(),this.alertController.create({header:"Are Your Sure?",subHeader:"Your are about to decline "+n.name,message:"By declining this venue, their application will be rejected and they will not be listed within the app.",buttons:[{text:"Cancel",role:"cancel"},{text:"Decline Venue",handler:function(){t.declineApplication({venue_id:n.id})}}]}).then(function(l){l.present()})},l.prototype.approveDj=function(l,n){var t=this;l.preventDefault(),l.stopPropagation(),this.alertController.create({header:"Are Your Sure?",subHeader:"Your are about to approve "+n.name,message:"By approving this artist, they will be visible by all users of the app.",buttons:[{text:"Cancel",role:"cancel"},{text:"Approve Artist",handler:function(){t.approveApplication({dj_id:n.id})}}]}).then(function(l){l.present()})},l.prototype.declineDj=function(l,n){var t=this;l.preventDefault(),l.stopPropagation(),this.alertController.create({header:"Are Your Sure?",subHeader:"Your are about to decline "+n.name,message:"By declining this artist, their application will be rejected and they will not be listed within the app.",buttons:[{text:"Cancel",role:"cancel"},{text:"Decline Artist",handler:function(){t.declineApplication({dj_id:n.id})}}]}).then(function(l){l.present()})},l.prototype.approveApplication=function(l){var n=this;this.applicationService.approveApplication(l).then(function(){n.getApplications(),n.alertController.create({header:"Application Approved!",message:"This application has now been approved.",buttons:[{text:"Dismiss",role:"cancel"}]}).then(function(l){l.present()})}).catch(function(){n.alertController.create({header:"Error",message:"There was an error approving this application.",buttons:[{text:"Dismiss",role:"cancel"}]}).then(function(l){l.present()})})},l.prototype.declineApplication=function(l){var n=this;this.applicationService.declineApplication(l).then(function(){n.getApplications(),n.alertController.create({header:"Application Declined",message:"This application has now been declined.",buttons:[{text:"Dismiss",role:"cancel"}]}).then(function(l){l.present()})}).catch(function(){n.alertController.create({header:"Error",message:"There was an error declining this application.",buttons:[{text:"Dismiss",role:"cancel"}]}).then(function(l){l.present()})})},l}(),p=function(){return function(){}}(),s=t("pMnS"),b=t("oBZk"),h=t("ZYCi"),f=t("Ip0R"),d=e.rb({encapsulation:0,styles:[[".manage-applications[_ngcontent-%COMP%]   .manage-applications__loading[_ngcontent-%COMP%]{text-align:Center;margin:100px 10px}.manage-applications[_ngcontent-%COMP%]   .manage-applications__empty[_ngcontent-%COMP%]{text-align:center;margin:100px 10px;text-transform:uppercase;font-size:18px;opacity:.1;font-weight:700;letter-spacing:4px}.manage-applications[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{margin-top:10px}"]],data:{}});function g(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,2,"div",[["class","manage-applications__loading"]],null,null,null,null,null)),(l()(),e.tb(1,0,null,null,1,"ion-spinner",[],null,null,null,b.pb,b.D)),e.sb(2,49152,null,0,u.rb,[e.h,e.k,e.z],null,null)],null,null)}function m(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,1,"div",[["class","manage-applications__empty"]],null,null,null,null,null)),(l()(),e.Nb(-1,null,[" No Applications "]))],null,null)}function v(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,21,"ion-item",[],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e.Fb(l,2).onClick()&&u),"click"===n&&(u=!1!==e.Fb(l,3).onClick(t)&&u),u},b.cb,b.q)),e.sb(1,49152,null,0,u.H,[e.h,e.k,e.z],null,null),e.sb(2,16384,null,0,h.o,[h.n,h.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.sb(3,737280,null,0,u.Nb,[f.g,u.Ib,e.k,h.n,[2,h.o]],null,null),(l()(),e.tb(4,0,null,0,2,"ion-avatar",[["slot","start"]],null,null,null,b.N,b.b)),e.sb(5,49152,null,0,u.f,[e.h,e.k,e.z],null,null),(l()(),e.tb(6,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),e.tb(7,0,null,0,14,"ion-label",[],null,null,null,b.db,b.r)),e.sb(8,49152,null,0,u.N,[e.h,e.k,e.z],null,null),(l()(),e.tb(9,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),e.Nb(10,null,["",""])),(l()(),e.tb(11,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Nb(12,null,["",""])),(l()(),e.tb(13,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Nb(14,null,["",""])),(l()(),e.tb(15,0,null,0,6,"div",[["class","actions"]],null,null,null,null,null)),(l()(),e.tb(16,0,null,null,2,"ion-button",[["fill","clear"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.approveVenue(t,l.context.$implicit)&&e),e},b.P,b.d)),e.sb(17,49152,null,0,u.k,[e.h,e.k,e.z],{fill:[0,"fill"]},null),(l()(),e.Nb(-1,0,["Approve"])),(l()(),e.tb(19,0,null,null,2,"ion-button",[["color","danger"],["fill","clear"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.declineVenue(t,l.context.$implicit)&&e),e},b.P,b.d)),e.sb(20,49152,null,0,u.k,[e.h,e.k,e.z],{color:[0,"color"],fill:[1,"fill"]},null),(l()(),e.Nb(-1,0,["Decline"]))],function(l,n){l(n,2,0,"/venue/"+n.context.$implicit.id),l(n,3,0),l(n,17,0,"clear"),l(n,20,0,"danger","clear")},function(l,n){l(n,6,0,n.context.$implicit.image),l(n,10,0,n.context.$implicit.name),l(n,12,0,n.context.$implicit.address),l(n,14,0,n.context.$implicit.description)})}function k(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,8,"ion-list",[],null,null,null,b.fb,b.s)),e.sb(1,49152,null,0,u.O,[e.h,e.k,e.z],null,null),(l()(),e.tb(2,0,null,0,4,"ion-list-header",[],null,null,null,b.eb,b.t)),e.sb(3,49152,null,0,u.P,[e.h,e.k,e.z],null,null),(l()(),e.tb(4,0,null,0,2,"ion-label",[],null,null,null,b.db,b.r)),e.sb(5,49152,null,0,u.N,[e.h,e.k,e.z],null,null),(l()(),e.Nb(-1,0,["Venues"])),(l()(),e.ib(16777216,null,0,1,null,v)),e.sb(8,278528,null,0,f.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,8,0,n.component.applications.venues)},null)}function x(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,21,"ion-item",[],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e.Fb(l,2).onClick()&&u),"click"===n&&(u=!1!==e.Fb(l,3).onClick(t)&&u),u},b.cb,b.q)),e.sb(1,49152,null,0,u.H,[e.h,e.k,e.z],null,null),e.sb(2,16384,null,0,h.o,[h.n,h.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.sb(3,737280,null,0,u.Nb,[f.g,u.Ib,e.k,h.n,[2,h.o]],null,null),(l()(),e.tb(4,0,null,0,2,"ion-avatar",[["slot","start"]],null,null,null,b.N,b.b)),e.sb(5,49152,null,0,u.f,[e.h,e.k,e.z],null,null),(l()(),e.tb(6,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),e.tb(7,0,null,0,14,"ion-label",[],null,null,null,b.db,b.r)),e.sb(8,49152,null,0,u.N,[e.h,e.k,e.z],null,null),(l()(),e.tb(9,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),e.Nb(10,null,["",""])),(l()(),e.tb(11,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Nb(12,null,["",""])),(l()(),e.tb(13,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Nb(14,null,["",""])),(l()(),e.tb(15,0,null,0,6,"div",[["class","actions"]],null,null,null,null,null)),(l()(),e.tb(16,0,null,null,2,"ion-button",[["fill","clear"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.approveDj(t,l.context.$implicit)&&e),e},b.P,b.d)),e.sb(17,49152,null,0,u.k,[e.h,e.k,e.z],{fill:[0,"fill"]},null),(l()(),e.Nb(-1,0,["Approve"])),(l()(),e.tb(19,0,null,null,2,"ion-button",[["color","danger"],["fill","clear"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.declineDj(t,l.context.$implicit)&&e),e},b.P,b.d)),e.sb(20,49152,null,0,u.k,[e.h,e.k,e.z],{color:[0,"color"],fill:[1,"fill"]},null),(l()(),e.Nb(-1,0,["Decline"]))],function(l,n){l(n,2,0,"/dj/"+n.context.$implicit.id),l(n,3,0),l(n,17,0,"clear"),l(n,20,0,"danger","clear")},function(l,n){l(n,6,0,n.context.$implicit.image),l(n,10,0,n.context.$implicit.name),l(n,12,0,n.context.$implicit.subtitle),l(n,14,0,n.context.$implicit.description)})}function D(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,8,"ion-list",[],null,null,null,b.fb,b.s)),e.sb(1,49152,null,0,u.O,[e.h,e.k,e.z],null,null),(l()(),e.tb(2,0,null,0,4,"ion-list-header",[],null,null,null,b.eb,b.t)),e.sb(3,49152,null,0,u.P,[e.h,e.k,e.z],null,null),(l()(),e.tb(4,0,null,0,2,"ion-label",[],null,null,null,b.db,b.r)),e.sb(5,49152,null,0,u.N,[e.h,e.k,e.z],null,null),(l()(),e.Nb(-1,0,["Artists"])),(l()(),e.ib(16777216,null,0,1,null,x)),e.sb(8,278528,null,0,f.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,8,0,n.component.applications.djs)},null)}function A(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,4,"div",[["class","manage-applications__applications"]],null,null,null,null,null)),(l()(),e.ib(16777216,null,null,1,null,k)),e.sb(2,16384,null,0,f.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.ib(16777216,null,null,1,null,D)),e.sb(4,16384,null,0,f.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,2,0,t.applications.venues.length>0),l(n,4,0,t.applications.djs.length>0)},null)}function y(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,13,"ion-header",[],null,null,null,b.Z,b.n)),e.sb(1,49152,null,0,u.B,[e.h,e.k,e.z],null,null),(l()(),e.tb(2,0,null,0,11,"ion-toolbar",[["color","primary"]],null,null,null,b.xb,b.L)),e.sb(3,49152,null,0,u.Bb,[e.h,e.k,e.z],{color:[0,"color"]},null),(l()(),e.tb(4,0,null,0,6,"ion-buttons",[["slot","start"]],null,null,null,b.Q,b.e)),e.sb(5,49152,null,0,u.l,[e.h,e.k,e.z],null,null),(l()(),e.tb(6,0,null,0,4,"ion-button",[],null,null,null,b.P,b.d)),e.sb(7,49152,null,0,u.k,[e.h,e.k,e.z],null,null),(l()(),e.tb(8,0,null,0,2,"ion-back-button",[["defaultHref","/tabs/home"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e.Fb(l,10).onClick(t)&&u),u},b.O,b.c)),e.sb(9,49152,null,0,u.g,[e.h,e.k,e.z],{defaultHref:[0,"defaultHref"]},null),e.sb(10,16384,null,0,u.h,[[2,u.hb],u.Ib],{defaultHref:[0,"defaultHref"]},null),(l()(),e.tb(11,0,null,0,2,"ion-title",[],null,null,null,b.vb,b.J)),e.sb(12,49152,null,0,u.zb,[e.h,e.k,e.z],null,null),(l()(),e.Nb(-1,0,["Manage Applications"])),(l()(),e.tb(14,0,null,null,7,"ion-content",[["class","manage-applications"]],null,null,null,b.V,b.j)),e.sb(15,49152,null,0,u.u,[e.h,e.k,e.z],null,null),(l()(),e.ib(16777216,null,0,1,null,g)),e.sb(17,16384,null,0,f.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.ib(16777216,null,0,1,null,m)),e.sb(19,16384,null,0,f.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.ib(16777216,null,0,1,null,A)),e.sb(21,16384,null,0,f.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,3,0,"primary"),l(n,9,0,"/tabs/home"),l(n,10,0,"/tabs/home"),l(n,17,0,t.loading),l(n,19,0,!t.loading&&(!t.applications||t.applications.venues.length<1&&t.applications.djs.length<1)),l(n,21,0,!t.loading&&t.applications&&(t.applications.venues.length>0||t.applications.djs.length>0))},null)}function P(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,1,"app-manage-applications",[],null,null,null,y,d)),e.sb(1,114688,null,0,r,[c,u.a],null,null)],function(l,n){l(n,1,0)},null)}var w=e.pb("app-manage-applications",r,P,{},{},[]),C=t("gIcY");t.d(n,"ManageApplicationsPageModuleNgFactory",function(){return z});var z=e.qb(p,[],function(l){return e.Cb([e.Db(512,e.j,e.bb,[[8,[s.a,w]],[3,e.j],e.x]),e.Db(4608,f.l,f.k,[e.u,[2,f.w]]),e.Db(4608,C.l,C.l,[]),e.Db(4608,u.b,u.b,[e.z,e.g]),e.Db(4608,u.Hb,u.Hb,[u.b,e.j,e.q]),e.Db(4608,u.Lb,u.Lb,[u.b,e.j,e.q]),e.Db(1073742336,f.b,f.b,[]),e.Db(1073742336,C.k,C.k,[]),e.Db(1073742336,C.d,C.d,[]),e.Db(1073742336,u.Db,u.Db,[]),e.Db(1073742336,h.q,h.q,[[2,h.v],[2,h.n]]),e.Db(1073742336,p,p,[]),e.Db(1024,h.l,function(){return[[{path:"",component:r}]]},[])])})}}]);