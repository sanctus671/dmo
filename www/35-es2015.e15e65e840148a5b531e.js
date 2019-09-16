(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{ocrv:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J"),o=e("mrSG"),a=e("ri4K"),u=e("p67C"),r=e("wd/R"),i=e("irkP"),d=e("ZZ/e"),c=e("US1e"),s=e("PDNg");class b{constructor(l,n,e,t,o,a,u){this.route=l,this.dealService=n,this.alertController=e,this.bookmarkService=t,this.authenticationService=o,this.modalController=a,this.navController=u,this.properties={search:"",loading:!1},this.deal={id:this.route.snapshot.params.dealid},this.user={},this.authenticationService.getUserData().subscribe(l=>{this.user=l,this.getDeal()})}ngOnInit(){}getDeal(){this.properties.loading=!0,this.dealService.getDeal(this.deal.id).then(l=>{console.log(l),this.deal=l,this.properties.loading=!1}).catch(()=>{this.properties.loading=!1})}editDeal(){return o.b(this,void 0,void 0,function*(){const l=yield this.modalController.create({component:s.a,componentProps:{deal:Object.assign({},this.deal)}});l.onDidDismiss().then(l=>{console.log(l),l&&l.data&&(l.data.delete?(this.deal.loading=!0,this.dealService.deleteDeal(this.deal.id).then(()=>{this.deal.loading=!1,this.authenticationService.retreiveUserData().then(()=>{}),this.navController.pop()}).catch(()=>{this.deal.loading=!1})):(Object.assign(this.deal,l.data),this.dealService.updateDeal(this.deal).then(()=>{this.authenticationService.getUserData().toPromise().then(()=>{})})))}),yield l.present()})}formatDate(l){return r(l).format("MMM Do, HH:mmA")}confirmClaimDeal(){this.alertController.create({header:"Are You Sure?",subHeader:"You are about to claim this deal. ",message:"Once claimed, you will not be able to claim it again. Make sure you are ready to use the deal.",buttons:[{text:"Cancel",role:"cancel"},{text:"Claim Deal",handler:()=>{"show"===this.deal.deal_type?this.claimDeal():"coupon"===this.deal.deal_type?this.showCoupon():"scan"===this.deal.deal_type&&this.showQrCode()}}]}).then(l=>{l.present()})}showCoupon(){this.deal.claimed_deal=!0,this.alertController.create({header:"Your Coupon Code",subHeader:"Use the coupon code below to claim your deal",message:"Code: <strong>"+this.deal.coupon_code+"</strong>",buttons:[{text:"OK",role:"cancel"}]}).then(l=>{l.present()}),this.dealService.claimDeal(this.deal.id).then(()=>{})}showQrCode(){return o.b(this,void 0,void 0,function*(){this.deal.claimed_deal=!0;const l=yield this.modalController.create({component:c.a,componentProps:{qrCode:this.deal.id+":"+this.user.id}});yield l.present(),this.dealService.claimDeal(this.deal.id).then(()=>{})})}claimDeal(){this.deal.claimed_deal=!0,this.alertController.create({header:"Deal Claimed!",subHeader:"This deal has now been claimed",message:"You can view your claimed deals at any time under your profile.",buttons:[{text:"OK",role:"cancel"}]}).then(l=>{l.present()}),this.dealService.claimDeal(this.deal.id).then(()=>{})}toggleBookmark(){this.deal.bookmark?(this.deal.bookmark=!1,this.alertController.create({header:"Bookmark Removed!",subHeader:"This deal has been removed from your bookmarks",message:"Tap this button again if you want to add this deal back into your bookmarks.",buttons:[{text:"OK",role:"cancel"}]}).then(l=>{l.present()}),this.bookmarkService.removeBookmark({deal_id:this.deal.id}).then(()=>{this.authenticationService.retreiveUserData().then(()=>{})})):(this.deal.bookmark=!0,this.alertController.create({header:"Deal Bookmarked!",subHeader:"This deal has been added to your bookmarks",message:"You can access your bookmarks any time by selecting the bookmark icon in the top left corner from the home screen.",buttons:[{text:"OK",role:"cancel"}]}).then(l=>{l.present()}),this.bookmarkService.addBookmark({deal_id:this.deal.id}).then(()=>{this.authenticationService.retreiveUserData().then(()=>{})}))}}class h{}var p=e("pMnS"),g=e("oBZk"),_=e("SVse"),m=e("iInd"),f=t.pb({encapsulation:0,styles:[['.primary-header[_ngcontent-%COMP%]{position:absolute;top:0;width:100%;left:0}.primary-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);border-radius:50px;margin-left:20px;margin-right:20px;text-align:center;padding:7px 20px 3px}.primary-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:60px}.primary-header[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{background-color:#fff;border-radius:50px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);height:48px;width:48px;margin:0}.primary-header[_ngcontent-%COMP%]   ion-button.bookmarked[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:gold}.deal[_ngcontent-%COMP%]   .deal__loading[_ngcontent-%COMP%]{text-align:center;margin-top:120px}.deal[_ngcontent-%COMP%]   .deal__header[_ngcontent-%COMP%]{height:370px;margin-top:-20px;background-color:#000;background-size:cover;background-position:center center;text-align:center;margin-bottom:0;color:#fff;padding-top:150px;position:relative;z-index:0}.deal[_ngcontent-%COMP%]   .deal__header[_ngcontent-%COMP%]:after{content:"";background-color:#000;position:absolute;left:0;top:0;width:100%;height:100%;opacity:.3;z-index:-1}.deal[_ngcontent-%COMP%]   .deal__header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{padding:0 15px;margin:0 0 8px;font-size:14px;text-transform:uppercase;font-weight:700;letter-spacing:3px}.deal[_ngcontent-%COMP%]   .deal__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0 0 8px;font-size:34px;font-weight:600;line-height:34px;text-transform:uppercase;letter-spacing:12px}.deal[_ngcontent-%COMP%]   .deal__header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0;font-size:12px;text-transform:uppercase;font-weight:600;letter-spacing:3px}.deal[_ngcontent-%COMP%]   .deal__header[_ngcontent-%COMP%]   .deal__header__actions[_ngcontent-%COMP%]{position:absolute;bottom:55px;left:0;width:100%}.deal[_ngcontent-%COMP%]   .deal__info[_ngcontent-%COMP%]{top:-40px;background-color:#fff;z-index:1;position:relative;box-shadow:0 -3px 1px -2px rgba(0,0,0,.1),0 -3px 2px 0 rgba(0,0,0,.14),1px -3px 5px 0 rgba(0,0,0,.12);border-top-left-radius:40px;border-top-right-radius:40px}.deal[_ngcontent-%COMP%]   .deal__info[_ngcontent-%COMP%]   .deal__about[_ngcontent-%COMP%]{padding:10px 30px}.deal[_ngcontent-%COMP%]   .deal__info[_ngcontent-%COMP%]   .deal__about[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:18px;text-transform:uppercase;font-weight:600;letter-spacing:3px;opacity:.4}.deal[_ngcontent-%COMP%]   .deal__info[_ngcontent-%COMP%]   .deal__about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{opacity:.4}']],data:{}});function k(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,6,"ion-button",[],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.toggleBookmark()&&t),t},g.P,g.d)),t.Ib(512,null,_.r,_.s,[t.q,t.r,t.k,t.B]),t.qb(2,278528,null,0,_.h,[_.r],{ngClass:[0,"ngClass"]},null),t.Gb(3,{bookmarked:0}),t.qb(4,49152,null,0,d.k,[t.h,t.k,t.x],null,null),(l()(),t.rb(5,0,null,0,1,"ion-icon",[["name","bookmark"],["slot","icon-only"]],null,null,null,g.ab,g.o)),t.qb(6,49152,null,0,d.C,[t.h,t.k,t.x],{name:[0,"name"]},null)],function(l,n){var e=l(n,3,0,n.component.deal.bookmark);l(n,2,0,e),l(n,6,0,"bookmark")},null)}function x(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,3,"ion-button",[],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.editDeal()&&t),t},g.P,g.d)),t.qb(1,49152,null,0,d.k,[t.h,t.k,t.x],null,null),(l()(),t.rb(2,0,null,0,1,"ion-icon",[["name","create"],["slot","icon-only"]],null,null,null,g.ab,g.o)),t.qb(3,49152,null,0,d.C,[t.h,t.k,t.x],{name:[0,"name"]},null)],function(l,n){l(n,3,0,"create")},null)}function C(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,2,"div",[["class","deal__loading"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,1,"ion-spinner",[],null,null,null,g.pb,g.D)),t.qb(2,49152,null,0,d.rb,[t.h,t.k,t.x],null,null)],null,null)}function v(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),t.Lb(1,null,["Offered by ",""]))],null,function(l,n){l(n,1,0,n.component.deal.venue.name)})}function M(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,2,"ion-button",[["class","deal__header__actions__item"],["color","light"],["shape","round"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.confirmClaimDeal()&&t),t},g.P,g.d)),t.qb(1,49152,null,0,d.k,[t.h,t.k,t.x],{color:[0,"color"],shape:[1,"shape"]},null),(l()(),t.Lb(-1,0,[" Claim Deal "]))],function(l,n){l(n,1,0,"light","round")},null)}function P(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,2,"ion-button",[["class","deal__header__actions__item"],["color","light"],["shape","round"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.confirmClaimDeal()&&t),t},g.P,g.d)),t.qb(1,49152,null,0,d.k,[t.h,t.k,t.x],{color:[0,"color"],shape:[1,"shape"]},null),(l()(),t.Lb(-1,0,[" Show Coupon "]))],function(l,n){l(n,1,0,"light","round")},null)}function O(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,2,"ion-button",[["class","deal__header__actions__item"],["color","light"],["shape","round"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.confirmClaimDeal()&&t),t},g.P,g.d)),t.qb(1,49152,null,0,d.k,[t.h,t.k,t.x],{color:[0,"color"],shape:[1,"shape"]},null),(l()(),t.Lb(-1,0,[" Scan QR Code "]))],function(l,n){l(n,1,0,"light","round")},null)}function y(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,2,"ion-button",[["class","deal__header__actions__item"],["color","light"],["disabled",""],["shape","round"]],null,null,null,g.P,g.d)),t.qb(1,49152,null,0,d.k,[t.h,t.k,t.x],{color:[0,"color"],disabled:[1,"disabled"],shape:[2,"shape"]},null),(l()(),t.Lb(-1,0,[" Deal Claimed "]))],function(l,n){l(n,1,0,"light","","round")},null)}function D(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,4,"div",[["class","deal__about__dates"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Lb(2,null,["Starts at: ",""])),(l()(),t.rb(3,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Lb(4,null,["Ends at: ",""]))],null,function(l,n){var e=n.component;l(n,2,0,e.formatDate(e.deal.start_date)),l(n,4,0,e.formatDate(e.deal.end_date))})}function q(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,27,"div",[],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,18,"div",[["class","deal__header"]],null,null,null,null,null)),t.Ib(512,null,_.t,_.u,[t.k,t.r,t.B]),t.qb(3,278528,null,0,_.m,[_.t],{ngStyle:[0,"ngStyle"]},null),t.Gb(4,{"background-image":0}),(l()(),t.rb(5,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),t.Lb(6,null,["",""])),(l()(),t.rb(7,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Lb(8,null,["",""])),(l()(),t.gb(16777216,null,null,1,null,v)),t.qb(10,16384,null,0,_.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(11,0,null,null,8,"div",[["class","deal__header__actions"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,M)),t.qb(13,16384,null,0,_.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,P)),t.qb(15,16384,null,0,_.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,O)),t.qb(17,16384,null,0,_.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,y)),t.qb(19,16384,null,0,_.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(20,0,null,null,7,"div",[["class","deal__info"]],null,null,null,null,null)),(l()(),t.rb(21,0,null,null,6,"div",[["class","deal__about"]],null,null,null,null,null)),(l()(),t.rb(22,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["About The Deal"])),(l()(),t.rb(24,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Lb(25,null,["",""])),(l()(),t.gb(16777216,null,null,1,null,D)),t.qb(27,16384,null,0,_.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component,t=l(n,4,0,"url("+e.deal.image+")");l(n,3,0,t),l(n,10,0,e.deal.venue),l(n,13,0,"show"===e.deal.deal_type&&!e.deal.claimed_deal),l(n,15,0,"coupon"===e.deal.deal_type&&!e.deal.claimed_deal),l(n,17,0,"scan"===e.deal.deal_type&&!e.deal.claimed_deal),l(n,19,0,e.deal.claimed_deal),l(n,27,0,e.deal.start_date||e.deal.end_date)},function(l,n){var e=n.component;l(n,6,0,e.deal.brand),l(n,8,0,e.deal.name),l(n,25,0,e.deal.description)})}function w(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,19,"ion-header",[["class","primary-header"],["no-border",""]],null,null,null,g.Z,g.n)),t.qb(1,49152,null,0,d.B,[t.h,t.k,t.x],null,null),(l()(),t.rb(2,0,null,0,17,"ion-toolbar",[["color","transparent"]],null,null,null,g.xb,g.L)),t.qb(3,49152,null,0,d.Bb,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.rb(4,0,null,0,6,"ion-buttons",[["slot","start"]],null,null,null,g.Q,g.e)),t.qb(5,49152,null,0,d.l,[t.h,t.k,t.x],null,null),(l()(),t.rb(6,0,null,0,4,"ion-button",[],null,null,null,g.P,g.d)),t.qb(7,49152,null,0,d.k,[t.h,t.k,t.x],null,null),(l()(),t.rb(8,0,null,0,2,"ion-back-button",[["defaultHref","/login"]],null,[[null,"click"]],function(l,n,e){var o=!0;return"click"===n&&(o=!1!==t.Db(l,10).onClick(e)&&o),o},g.O,g.c)),t.qb(9,49152,null,0,d.g,[t.h,t.k,t.x],{defaultHref:[0,"defaultHref"]},null),t.qb(10,16384,null,0,d.h,[[2,d.hb],d.Ib],{defaultHref:[0,"defaultHref"]},null),(l()(),t.rb(11,0,null,0,2,"ion-title",[],null,null,null,g.vb,g.J)),t.qb(12,49152,null,0,d.zb,[t.h,t.k,t.x],null,null),(l()(),t.rb(13,0,null,0,0,"img",[["src","assets/logo.png"]],null,null,null,null,null)),(l()(),t.rb(14,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,g.Q,g.e)),t.qb(15,49152,null,0,d.l,[t.h,t.k,t.x],null,null),(l()(),t.gb(16777216,null,0,1,null,k)),t.qb(17,16384,null,0,_.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,x)),t.qb(19,16384,null,0,_.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(20,0,null,null,5,"ion-content",[["class","deal"],["fullscreen","true"]],null,null,null,g.V,g.j)),t.qb(21,49152,null,0,d.u,[t.h,t.k,t.x],{fullscreen:[0,"fullscreen"]},null),(l()(),t.gb(16777216,null,0,1,null,C)),t.qb(23,16384,null,0,_.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,q)),t.qb(25,16384,null,0,_.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,3,0,"transparent"),l(n,9,0,"/login"),l(n,10,0,"/login"),l(n,17,0,e.deal.user_id!==e.user.id),l(n,19,0,e.deal.user_id===e.user.id),l(n,21,0,"true"),l(n,23,0,e.properties.loading),l(n,25,0,!e.properties.loading)},null)}function I(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,1,"app-deal",[],null,null,null,w,f)),t.qb(1,114688,null,0,b,[m.a,u.a,d.a,i.a,a.a,d.Hb,d.Ib],null,null)],function(l,n){l(n,1,0)},null)}var S=t.nb("app-deal",b,I,{},{},[]),B=e("Ut8T"),j=e("s7LF");e.d(n,"DealPageModuleNgFactory",function(){return H});var H=t.ob(h,[],function(l){return t.Ab([t.Bb(512,t.j,t.Z,[[8,[p.a,S,B.a]],[3,t.j],t.v]),t.Bb(4608,_.l,_.k,[t.s,[2,_.w]]),t.Bb(4608,j.l,j.l,[]),t.Bb(4608,d.b,d.b,[t.x,t.g]),t.Bb(4608,d.Hb,d.Hb,[d.b,t.j,t.p]),t.Bb(4608,d.Lb,d.Lb,[d.b,t.j,t.p]),t.Bb(1073742336,_.b,_.b,[]),t.Bb(1073742336,j.k,j.k,[]),t.Bb(1073742336,j.d,j.d,[]),t.Bb(1073742336,d.Db,d.Db,[]),t.Bb(1073742336,m.q,m.q,[[2,m.v],[2,m.n]]),t.Bb(1073742336,h,h,[]),t.Bb(1024,m.l,function(){return[[{path:"",component:b}]]},[])])})}}]);