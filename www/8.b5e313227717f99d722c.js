(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{y8fh:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),o=t("mrSG"),u=t("ri4K"),i=t("p67C"),r=t("ZZ/e"),a=t("kmVb"),c=function(){function n(n,l,t){var e=this;this.authenticationService=n,this.dealService=l,this.modalController=t,this.user={profile:{}},this.claimedDeals=[],this.authenticationService.getUserData().subscribe(function(n){e.user=n}),this.getClaimedDeals()}return n.prototype.ngOnInit=function(){},n.prototype.getClaimedDeals=function(){var n=this;this.dealService.getClaimedDeals().then(function(l){n.claimedDeals=l})},n.prototype.updateProfile=function(){this.authenticationService.updateProfile(this.user.profile).then(function(){})},n.prototype.editProfile=function(){return o.b(this,void 0,void 0,function(){var n,l=this;return o.e(this,function(t){switch(t.label){case 0:return this.user.profile.email=this.user.email,[4,this.modalController.create({component:a.a,componentProps:{profile:Object.assign({},this.user.profile)}})];case 1:return(n=t.sent()).onDidDismiss().then(function(n){console.log(n),n&&n.data&&(Object.assign(l.user.profile,n.data),l.user.email=l.user.profile.email,l.updateProfile())}),[4,n.present()];case 2:return t.sent(),[2]}})})},n}(),p=function(){return function(){}}(),_=t("pMnS"),s=t("oBZk"),b=t("Ip0R"),f=t("ZYCi"),g=t("gIcY"),d=e.rb({encapsulation:0,styles:[['.primary-header[_ngcontent-%COMP%]{position:absolute;top:0;width:100%;left:0}.primary-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);border-radius:50px;margin-left:20px;margin-right:20px;text-align:center;padding:7px 20px 3px}.primary-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:60px}.primary-header.ios[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{padding-left:0;padding-right:0;margin-left:70px;margin-right:70px;width:calc(100% - 140px);height:45px;margin-top:4px}.primary-header[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{background-color:#fff;border-radius:50px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);width:48px;height:48px}.primary-header.ios[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:45px;height:45px}.profile[_ngcontent-%COMP%]   .profile__header[_ngcontent-%COMP%]{height:320px;margin-top:-20px;background-color:#000;background-size:cover;background-position:center center;background-image:url(https://image.redbull.com/rbcom/010/2016-11-10/1331828682592_2/0010/1/1500/1000/1/montell2099.jpg);text-align:center;margin-bottom:0;color:#fff;padding-top:150px;position:relative;z-index:0}.profile[_ngcontent-%COMP%]   .profile__header[_ngcontent-%COMP%]:after{content:"";background-color:#000;position:absolute;left:0;top:0;width:100%;height:100%;opacity:.3;z-index:-1}.profile[_ngcontent-%COMP%]   .profile__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0 0 8px;font-size:34px;font-weight:600;line-height:34px;text-transform:uppercase;letter-spacing:12px}.profile[_ngcontent-%COMP%]   .profile__header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0;font-size:12px;text-transform:uppercase;font-weight:600;letter-spacing:3px}.profile[_ngcontent-%COMP%]   .profile__info[_ngcontent-%COMP%]{top:-40px;background-color:#fff;z-index:1;position:relative;box-shadow:0 -3px 1px -2px rgba(0,0,0,.1),0 -3px 2px 0 rgba(0,0,0,.14),1px -3px 5px 0 rgba(0,0,0,.12);border-top-left-radius:40px;border-top-right-radius:40px}.profile[_ngcontent-%COMP%]   .profile__info[_ngcontent-%COMP%]   .profile__about[_ngcontent-%COMP%]{padding:10px 30px}.profile[_ngcontent-%COMP%]   .profile__info[_ngcontent-%COMP%]   .profile__about[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:22px;text-transform:uppercase;font-weight:600;letter-spacing:3px}.profile[_ngcontent-%COMP%]   .profile__info[_ngcontent-%COMP%]   .profile__about[_ngcontent-%COMP%]   .profile__about__item[_ngcontent-%COMP%]{margin-top:25px}.profile[_ngcontent-%COMP%]   .profile__info[_ngcontent-%COMP%]   .profile__about[_ngcontent-%COMP%]   .profile__about__item[_ngcontent-%COMP%]   .profile__about__item__title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{display:inline-block;margin:0}.profile[_ngcontent-%COMP%]   .profile__info[_ngcontent-%COMP%]   .profile__about[_ngcontent-%COMP%]   .profile__about__item[_ngcontent-%COMP%]   .profile__about__item__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{float:right;color:#3880ff}.profile[_ngcontent-%COMP%]   .profile__info[_ngcontent-%COMP%]   .profile__about[_ngcontent-%COMP%]   .profile__about__item[_ngcontent-%COMP%]   .profile__about__item__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{height:22px;vertical-align:top}.profile[_ngcontent-%COMP%]   .profile__info[_ngcontent-%COMP%]   .profile__about[_ngcontent-%COMP%]   .profile__about__item[_ngcontent-%COMP%]   .profile__about__item__title[_ngcontent-%COMP%]   ion-toggle[_ngcontent-%COMP%]{float:right;margin-top:-10px}.profile[_ngcontent-%COMP%]   .profile__info[_ngcontent-%COMP%]   .profile__about[_ngcontent-%COMP%]   .profile__about__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{opacity:.7;margin:10px 0 0;font-size:14px}.profile[_ngcontent-%COMP%]   .profile__info[_ngcontent-%COMP%]   .profile__cards[_ngcontent-%COMP%]{width:100%;overflow:visible;margin-top:30px;padding:0 30px}.profile[_ngcontent-%COMP%]   .profile__info[_ngcontent-%COMP%]   .profile__cards[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{padding:0;margin:0 0 5px;font-size:14px;text-transform:uppercase;font-weight:700;letter-spacing:3px;display:inline-block}.profile[_ngcontent-%COMP%]   .profile__info[_ngcontent-%COMP%]   .profile__cards[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{float:right;text-transform:uppercase;letter-spacing:2px;font-size:10px;font-weight:900;opacity:.4;line-height:20px}.profile[_ngcontent-%COMP%]   .profile__info[_ngcontent-%COMP%]   .profile__cards[_ngcontent-%COMP%]   .profile__cards__card[_ngcontent-%COMP%]{background-color:#000;color:#fff;padding:0 5px;height:200px;width:100%;text-align:left;margin:10px 0;background-size:cover;background-position:center center;position:relative}.profile[_ngcontent-%COMP%]   .profile__info[_ngcontent-%COMP%]   .profile__cards[_ngcontent-%COMP%]   .profile__cards__card[_ngcontent-%COMP%]:before{content:"";background-color:rgba(0,0,0,.4);position:absolute;left:0;top:0;width:100%;height:100%}.profile[_ngcontent-%COMP%]   .profile__info[_ngcontent-%COMP%]   .profile__cards[_ngcontent-%COMP%]   .profile__cards__card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-weight:600;padding:0;margin-bottom:8px}.profile[_ngcontent-%COMP%]   .profile__info[_ngcontent-%COMP%]   .profile__cards[_ngcontent-%COMP%]   .profile__cards__card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:34px;font-weight:600;line-height:34px;text-transform:uppercase;letter-spacing:10px;margin-bottom:8px}.profile[_ngcontent-%COMP%]   .profile__info[_ngcontent-%COMP%]   .profile__cards[_ngcontent-%COMP%]   .profile__cards__card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0;font-size:12px;text-transform:uppercase;font-weight:600;letter-spacing:3px}']],data:{}});function h(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,9,"div",[["class","profile__about__item"]],null,null,null,null,null)),(n()(),e.tb(1,0,null,null,6,"div",[["class","profile__about__item__title"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.editProfile()&&e),e},null,null)),(n()(),e.tb(2,0,null,null,1,"h5",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,["City"])),(n()(),e.tb(4,0,null,null,3,"a",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,["Change "])),(n()(),e.tb(6,0,null,null,1,"ion-icon",[["name","ios-arrow-forward"],["size","small"]],null,null,null,s.ab,s.o)),e.sb(7,49152,null,0,r.C,[e.h,e.k,e.z],{name:[0,"name"],size:[1,"size"]},null),(n()(),e.tb(8,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Nb(9,null,[" "," "]))],function(n,l){n(l,7,0,"ios-arrow-forward","small")},function(n,l){n(l,9,0,l.component.user.profile.city)})}function m(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,9,"div",[["class","profile__about__item"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.editProfile()&&e),e},null,null)),(n()(),e.tb(1,0,null,null,6,"div",[["class","profile__about__item__title"]],null,null,null,null,null)),(n()(),e.tb(2,0,null,null,1,"h5",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,["Email"])),(n()(),e.tb(4,0,null,null,3,"a",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,["Change "])),(n()(),e.tb(6,0,null,null,1,"ion-icon",[["name","ios-arrow-forward"],["size","small"]],null,null,null,s.ab,s.o)),e.sb(7,49152,null,0,r.C,[e.h,e.k,e.z],{name:[0,"name"],size:[1,"size"]},null),(n()(),e.tb(8,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Nb(9,null,[" "," "]))],function(n,l){n(l,7,0,"ios-arrow-forward","small")},function(n,l){n(l,9,0,l.component.user.email)})}function C(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,9,"div",[["class","profile__about__item"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.editProfile()&&e),e},null,null)),(n()(),e.tb(1,0,null,null,6,"div",[["class","profile__about__item__title"]],null,null,null,null,null)),(n()(),e.tb(2,0,null,null,1,"h5",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,["Mobile phone"])),(n()(),e.tb(4,0,null,null,3,"a",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,["Change "])),(n()(),e.tb(6,0,null,null,1,"ion-icon",[["name","ios-arrow-forward"],["size","small"]],null,null,null,s.ab,s.o)),e.sb(7,49152,null,0,r.C,[e.h,e.k,e.z],{name:[0,"name"],size:[1,"size"]},null),(n()(),e.tb(8,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Nb(9,null,[" "," "]))],function(n,l){n(l,7,0,"ios-arrow-forward","small")},function(n,l){n(l,9,0,l.component.user.profile.mobile)})}function P(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,15,"ion-card",[["class","profile__cards__card"],["routerDirection","forward"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.Fb(n,5).onClick()&&o),"click"===l&&(o=!1!==e.Fb(n,7).onClick(t)&&o),o},s.S,s.f)),e.Kb(512,null,b.t,b.u,[e.k,e.t,e.D]),e.sb(2,278528,null,0,b.m,[b.t],{ngStyle:[0,"ngStyle"]},null),e.Ib(3,{"background-image":0}),e.sb(4,49152,null,0,r.m,[e.h,e.k,e.z],{routerDirection:[0,"routerDirection"]},null),e.sb(5,16384,null,0,f.o,[f.n,f.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.Gb(6,1),e.sb(7,737280,null,0,r.Nb,[b.g,r.Ib,e.k,f.n,[2,f.o]],{routerDirection:[0,"routerDirection"]},null),(n()(),e.tb(8,0,null,0,7,"ion-card-content",[],null,null,null,s.R,s.g)),e.sb(9,49152,null,0,r.n,[e.h,e.k,e.z],null,null),(n()(),e.tb(10,0,null,0,1,"h5",[],null,null,null,null,null)),(n()(),e.Nb(11,null,["",""])),(n()(),e.tb(12,0,null,0,1,"h1",[],null,null,null,null,null)),(n()(),e.Nb(13,null,["",""])),(n()(),e.tb(14,0,null,0,1,"h6",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,["Tap to view"]))],function(n,l){var t=n(l,3,0,"url("+l.context.$implicit.deal.image+")");n(l,2,0,t),n(l,4,0,"forward");var e=n(l,6,0,"/deal/"+l.context.$implicit.deal_id);n(l,5,0,e),n(l,7,0,"forward")},function(n,l){n(l,11,0,l.context.$implicit.deal.brand),n(l,13,0,l.context.$implicit.deal.name)})}function O(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,4,"div",[["class","profile__cards"]],null,null,null,null,null)),(n()(),e.tb(1,0,null,null,1,"h5",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,["Claimed Deals"])),(n()(),e.ib(16777216,null,null,1,null,P)),e.sb(4,278528,null,0,b.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,4,0,l.component.claimedDeals)},null)}function M(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,19,"ion-header",[["class","primary-header"],["no-border",""]],null,null,null,s.Z,s.n)),e.sb(1,49152,null,0,r.B,[e.h,e.k,e.z],null,null),(n()(),e.tb(2,0,null,0,17,"ion-toolbar",[["color","transparent"]],null,null,null,s.xb,s.L)),e.sb(3,49152,null,0,r.Bb,[e.h,e.k,e.z],{color:[0,"color"]},null),(n()(),e.tb(4,0,null,0,6,"ion-buttons",[["slot","start"]],null,null,null,s.Q,s.e)),e.sb(5,49152,null,0,r.l,[e.h,e.k,e.z],null,null),(n()(),e.tb(6,0,null,0,4,"ion-button",[],null,null,null,s.P,s.d)),e.sb(7,49152,null,0,r.k,[e.h,e.k,e.z],null,null),(n()(),e.tb(8,0,null,0,2,"ion-back-button",[["defaultHref","/tabs/home"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.Fb(n,10).onClick(t)&&o),o},s.O,s.c)),e.sb(9,49152,null,0,r.g,[e.h,e.k,e.z],{defaultHref:[0,"defaultHref"]},null),e.sb(10,16384,null,0,r.h,[[2,r.hb],r.Ib],{defaultHref:[0,"defaultHref"]},null),(n()(),e.tb(11,0,null,0,2,"ion-title",[],null,null,null,s.vb,s.J)),e.sb(12,49152,null,0,r.zb,[e.h,e.k,e.z],null,null),(n()(),e.tb(13,0,null,0,0,"img",[["src","assets/logo.png"]],null,null,null,null,null)),(n()(),e.tb(14,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,s.Q,s.e)),e.sb(15,49152,null,0,r.l,[e.h,e.k,e.z],null,null),(n()(),e.tb(16,0,null,0,3,"ion-button",[],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.editProfile()&&e),e},s.P,s.d)),e.sb(17,49152,null,0,r.k,[e.h,e.k,e.z],null,null),(n()(),e.tb(18,0,null,0,1,"ion-icon",[["name","create"],["slot","icon-only"]],null,null,null,s.ab,s.o)),e.sb(19,49152,null,0,r.C,[e.h,e.k,e.z],{name:[0,"name"]},null),(n()(),e.tb(20,0,null,null,34,"ion-content",[["class","profile"],["fullscreen","true"]],null,null,null,s.V,s.j)),e.sb(21,49152,null,0,r.u,[e.h,e.k,e.z],{fullscreen:[0,"fullscreen"]},null),(n()(),e.tb(22,0,null,0,7,"div",[["class","profile__header"]],null,null,null,null,null)),e.Kb(512,null,b.t,b.u,[e.k,e.t,e.D]),e.sb(24,278528,null,0,b.m,[b.t],{ngStyle:[0,"ngStyle"]},null),e.Ib(25,{"background-image":0}),(n()(),e.tb(26,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),e.Nb(27,null,["",""])),(n()(),e.tb(28,0,null,null,1,"h6",[],null,null,null,null,null)),(n()(),e.Nb(29,null,["",""])),(n()(),e.tb(30,0,null,0,24,"div",[["class","profile__info"]],null,null,null,null,null)),(n()(),e.tb(31,0,null,null,21,"div",[["class","profile__about"]],null,null,null,null,null)),(n()(),e.tb(32,0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,["Profile"])),(n()(),e.ib(16777216,null,null,1,null,h)),e.sb(35,16384,null,0,b.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.ib(16777216,null,null,1,null,m)),e.sb(37,16384,null,0,b.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.ib(16777216,null,null,1,null,C)),e.sb(39,16384,null,0,b.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.tb(40,0,null,null,12,"div",[["class","profile__about__item"]],null,null,null,null,null)),(n()(),e.tb(41,0,null,null,9,"div",[["class","profile__about__item__title"]],null,null,null,null,null)),(n()(),e.tb(42,0,null,null,1,"h5",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,["Subscriptions"])),(n()(),e.tb(44,0,null,null,6,"ion-toggle",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(n,l,t){var o=!0,u=n.component;return"ionBlur"===l&&(o=!1!==e.Fb(n,45)._handleBlurEvent()&&o),"ionChange"===l&&(o=!1!==e.Fb(n,45)._handleIonChange(t.target.checked)&&o),"ngModelChange"===l&&(o=!1!==(u.user.profile.subscriptions=t)&&o),"ionChange"===l&&(o=!1!==u.updateProfile()&&o),o},s.wb,s.K)),e.sb(45,16384,null,0,r.c,[e.k],null,null),e.Kb(1024,null,g.e,function(n){return[n]},[r.c]),e.sb(47,671744,null,0,g.j,[[8,null],[8,null],[8,null],[6,g.e]],{model:[0,"model"]},{update:"ngModelChange"}),e.Kb(2048,null,g.f,null,[g.j]),e.sb(49,16384,null,0,g.g,[[4,g.f]],null,null),e.sb(50,49152,null,0,r.Ab,[e.h,e.k,e.z],null,null),(n()(),e.tb(51,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,[" I want to receive email newsletters, special offers, new store alerts and relevant updates. "])),(n()(),e.ib(16777216,null,null,1,null,O)),e.sb(54,16384,null,0,b.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,3,0,"transparent"),n(l,9,0,"/tabs/home"),n(l,10,0,"/tabs/home"),n(l,19,0,"create"),n(l,21,0,"true");var e=n(l,25,0,"url("+t.user.profile.avatar+")");n(l,24,0,e),n(l,35,0,t.user.profile.city),n(l,37,0,t.user.email),n(l,39,0,t.user.profile.mobile),n(l,47,0,t.user.profile.subscriptions),n(l,54,0,t.claimedDeals.length>0)},function(n,l){var t=l.component;n(l,27,0,t.user.profile.first_name),n(l,29,0,t.user.profile.last_name),n(l,44,0,e.Fb(l,49).ngClassUntouched,e.Fb(l,49).ngClassTouched,e.Fb(l,49).ngClassPristine,e.Fb(l,49).ngClassDirty,e.Fb(l,49).ngClassValid,e.Fb(l,49).ngClassInvalid,e.Fb(l,49).ngClassPending)})}function x(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,1,"app-profile",[],null,null,null,M,d)),e.sb(1,114688,null,0,c,[u.a,i.a,r.Hb],null,null)],function(n,l){n(l,1,0)},null)}var k=e.pb("app-profile",c,x,{},{},[]),v=t("W33x");t.d(l,"ProfilePageModuleNgFactory",function(){return w});var w=e.qb(p,[],function(n){return e.Cb([e.Db(512,e.j,e.bb,[[8,[_.a,k,v.a]],[3,e.j],e.x]),e.Db(4608,b.l,b.k,[e.u,[2,b.w]]),e.Db(4608,g.l,g.l,[]),e.Db(4608,r.b,r.b,[e.z,e.g]),e.Db(4608,r.Hb,r.Hb,[r.b,e.j,e.q]),e.Db(4608,r.Lb,r.Lb,[r.b,e.j,e.q]),e.Db(1073742336,b.b,b.b,[]),e.Db(1073742336,g.k,g.k,[]),e.Db(1073742336,g.d,g.d,[]),e.Db(1073742336,r.Db,r.Db,[]),e.Db(1073742336,f.q,f.q,[[2,f.v],[2,f.n]]),e.Db(1073742336,p,p,[]),e.Db(1024,f.l,function(){return[[{path:"",component:c}]]},[])])})}}]);