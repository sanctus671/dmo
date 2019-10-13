(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{ocrv:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),o=e("mrSG"),a=e("ri4K"),u=e("p67C"),i=e("wd/R"),r=e("irkP"),c=e("ZZ/e"),s=e("US1e"),d=e("PDNg"),h=e("GS3A"),p=function(){function n(n,l,e,t,o,a,u,i,r){var c=this;this.route=n,this.dealService=l,this.alertController=e,this.bookmarkService=t,this.authenticationService=o,this.iap=a,this.modalController=u,this.navController=i,this.loadingController=r,this.properties={search:"",loading:!1},this.deal={id:this.route.snapshot.params.dealid},this.user={},this.authenticationService.getUserData().subscribe(function(n){c.user=n,c.getDeal()}),this.productId="com.dmonz.app.unlockdeal",this.product={price:9.99,title:"Unlock Deal",productId:this.productId},this.iap.getProducts([this.productId]).then(function(n){for(var l in n)c.product=n[l]}).catch(function(n){})}return n.prototype.ngOnInit=function(){},n.prototype.getDeal=function(){var n=this;this.properties.loading=!0,this.dealService.getDeal(this.deal.id).then(function(l){console.log(l),n.deal=l,n.properties.loading=!1}).catch(function(){n.properties.loading=!1})},n.prototype.editDeal=function(){return o.b(this,void 0,void 0,function(){var n,l=this;return o.e(this,function(e){switch(e.label){case 0:return[4,this.modalController.create({component:d.a,componentProps:{deal:Object.assign({},this.deal)}})];case 1:return(n=e.sent()).onDidDismiss().then(function(n){console.log(n),n&&n.data&&(n.data.delete?(l.deal.loading=!0,l.dealService.deleteDeal(l.deal.id).then(function(){l.deal.loading=!1,l.authenticationService.retreiveUserData().then(function(){}),l.navController.pop()}).catch(function(){l.deal.loading=!1})):(Object.assign(l.deal,n.data),l.dealService.updateDeal(l.deal).then(function(){l.authenticationService.getUserData().toPromise().then(function(){})})))}),[4,n.present()];case 2:return e.sent(),[2]}})})},n.prototype.formatDate=function(n){return i(n).format("MMM Do, HH:mmA")},n.prototype.showUpgrade=function(){this.navController.navigateForward("/upgrade")},n.prototype.showUnlockDeal=function(){this.navController.navigateForward("/unlock-deal",{state:{user:"name",parms:{id:this.deal.id,name:this.deal.name,brand:this.deal.brand,venue:this.deal.venue.name}}})},n.prototype.showBlock=function(){var n=this;this.alertController.create({header:"Deal Locked",message:"Purchase this deal OR upgrade to Premium to unlock this deal",buttons:[{text:"Cancel",role:"cancel"},{text:"Unlock for $"+this.product.price,handler:function(){n.purchaseDeal()}},{text:"Upgrade to Premium",handler:function(){n.showUpgrade()}}]}).then(function(n){n.present()})},n.prototype.purchaseDeal=function(){var n,l=this;this.loadingController.create({message:"Unlocking Deal...",duration:1e4}).then(function(l){l.present(),n=l}),this.iap.buy(this.productId).then(function(e){n.dismiss(),l.doClaimDeal()}).catch(function(n){n&&n.message&&n.message.toLowerCase().indexOf("cancelled")>-1||(n&&n.message?alert(JSON.stringify(n.message)):alert(JSON.stringify(n)))})},n.prototype.confirmClaimDeal=function(){var n=this;this.user&&this.user.profile&&this.user.profile.subscription_active?this.alertController.create({header:"Are You Sure?",subHeader:"You are about to claim this deal. ",message:"Once claimed, you will not be able to claim it again. Make sure you are ready to use the deal.",buttons:[{text:"Cancel",role:"cancel"},{text:"Claim Deal",handler:function(){n.doClaimDeal()}}]}).then(function(n){n.present()}):this.showBlock()},n.prototype.doClaimDeal=function(){"show"===this.deal.deal_type?this.claimDeal():"coupon"===this.deal.deal_type?this.showCoupon():"scan"===this.deal.deal_type&&this.showQrCode()},n.prototype.showCoupon=function(){this.deal.claimed_deal=!0,this.alertController.create({header:"Your Coupon Code",subHeader:"Use the coupon code below to claim your deal",message:"Code: <strong>"+this.deal.coupon_code+"</strong>",buttons:[{text:"OK",role:"cancel"}]}).then(function(n){n.present()}),this.dealService.claimDeal(this.deal.id).then(function(){})},n.prototype.showQrCode=function(){return o.b(this,void 0,void 0,function(){return o.e(this,function(n){switch(n.label){case 0:return this.deal.claimed_deal=!0,[4,this.modalController.create({component:s.a,componentProps:{qrCode:this.deal.id+":"+this.user.id}})];case 1:return[4,n.sent().present()];case 2:return n.sent(),this.dealService.claimDeal(this.deal.id).then(function(){}),[2]}})})},n.prototype.claimDeal=function(){this.deal.claimed_deal=!0,this.alertController.create({header:"Deal Claimed!",subHeader:"This deal has now been claimed",message:"You can view your claimed deals at any time under your profile.",buttons:[{text:"OK",role:"cancel"}]}).then(function(n){n.present()}),this.dealService.claimDeal(this.deal.id).then(function(){})},n.prototype.toggleBookmark=function(){var n=this;this.deal.bookmark?(this.deal.bookmark=!1,this.alertController.create({header:"Bookmark Removed!",subHeader:"This deal has been removed from your bookmarks",message:"Tap this button again if you want to add this deal back into your bookmarks.",buttons:[{text:"OK",role:"cancel"}]}).then(function(n){n.present()}),this.bookmarkService.removeBookmark({deal_id:this.deal.id}).then(function(){n.authenticationService.retreiveUserData().then(function(){})})):(this.deal.bookmark=!0,this.alertController.create({header:"Deal Bookmarked!",subHeader:"This deal has been added to your bookmarks",message:"You can access your bookmarks any time by selecting the bookmark icon in the top left corner from the home screen.",buttons:[{text:"OK",role:"cancel"}]}).then(function(n){n.present()}),this.bookmarkService.addBookmark({deal_id:this.deal.id}).then(function(){n.authenticationService.retreiveUserData().then(function(){})}))},n}(),b=function(){return function(){}}(),g=e("pMnS"),f=e("oBZk"),m=e("Ip0R"),_=e("ZYCi"),k=t.rb({encapsulation:0,styles:[['.primary-header[_ngcontent-%COMP%]{position:absolute;top:0;width:100%;left:0}.primary-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);border-radius:50px;margin-left:20px;margin-right:20px;text-align:center;padding:7px 20px 3px}.primary-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:60px}.primary-header.ios[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{padding-left:0;padding-right:0;margin-left:70px;margin-right:70px;width:calc(100% - 140px);height:45px;margin-top:4px}.primary-header[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{background-color:#fff;border-radius:50px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.primary-header.ios[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:45px;height:45px}.deal[_ngcontent-%COMP%]   .deal__loading[_ngcontent-%COMP%]{text-align:center;margin-top:120px}.deal[_ngcontent-%COMP%]   .deal__header[_ngcontent-%COMP%]{height:370px;margin-top:-20px;background-color:#000;background-size:cover;background-position:center center;text-align:center;margin-bottom:0;color:#fff;padding-top:150px;position:relative;z-index:0}.deal[_ngcontent-%COMP%]   .deal__header[_ngcontent-%COMP%]:after{content:"";background-color:#000;position:absolute;left:0;top:0;width:100%;height:100%;opacity:.3;z-index:-1}.deal[_ngcontent-%COMP%]   .deal__header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{padding:0 15px;margin:0 0 8px;font-size:14px;text-transform:uppercase;font-weight:700;letter-spacing:3px}.deal[_ngcontent-%COMP%]   .deal__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0 0 8px;font-size:34px;font-weight:600;line-height:34px;text-transform:uppercase;letter-spacing:12px}.deal[_ngcontent-%COMP%]   .deal__header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0;font-size:12px;text-transform:uppercase;font-weight:600;letter-spacing:3px}.deal[_ngcontent-%COMP%]   .deal__header[_ngcontent-%COMP%]   .deal__header__actions[_ngcontent-%COMP%]{position:absolute;bottom:55px;left:0;width:100%}.deal[_ngcontent-%COMP%]   .deal__info[_ngcontent-%COMP%]{top:-40px;background-color:#fff;z-index:1;position:relative;box-shadow:0 -3px 1px -2px rgba(0,0,0,.1),0 -3px 2px 0 rgba(0,0,0,.14),1px -3px 5px 0 rgba(0,0,0,.12);border-top-left-radius:40px;border-top-right-radius:40px}.deal[_ngcontent-%COMP%]   .deal__info[_ngcontent-%COMP%]   .deal__about[_ngcontent-%COMP%]{padding:10px 30px}.deal[_ngcontent-%COMP%]   .deal__info[_ngcontent-%COMP%]   .deal__about[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:18px;text-transform:uppercase;font-weight:600;letter-spacing:3px;opacity:.4}.deal[_ngcontent-%COMP%]   .deal__info[_ngcontent-%COMP%]   .deal__about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{opacity:.4}']],data:{}});function C(n){return t.Pb(0,[(n()(),t.tb(0,0,null,null,6,"ion-button",[],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.toggleBookmark()&&t),t},f.P,f.d)),t.Kb(512,null,m.r,m.s,[t.s,t.t,t.k,t.D]),t.sb(2,278528,null,0,m.h,[m.r],{ngClass:[0,"ngClass"]},null),t.Ib(3,{bookmarked:0}),t.sb(4,49152,null,0,c.k,[t.h,t.k,t.z],null,null),(n()(),t.tb(5,0,null,0,1,"ion-icon",[["name","bookmark"],["slot","icon-only"]],null,null,null,f.ab,f.o)),t.sb(6,49152,null,0,c.C,[t.h,t.k,t.z],{name:[0,"name"]},null)],function(n,l){var e=n(l,3,0,l.component.deal.bookmark);n(l,2,0,e),n(l,6,0,"bookmark")},null)}function x(n){return t.Pb(0,[(n()(),t.tb(0,0,null,null,3,"ion-button",[],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.editDeal()&&t),t},f.P,f.d)),t.sb(1,49152,null,0,c.k,[t.h,t.k,t.z],null,null),(n()(),t.tb(2,0,null,0,1,"ion-icon",[["name","create"],["slot","icon-only"]],null,null,null,f.ab,f.o)),t.sb(3,49152,null,0,c.C,[t.h,t.k,t.z],{name:[0,"name"]},null)],function(n,l){n(l,3,0,"create")},null)}function v(n){return t.Pb(0,[(n()(),t.tb(0,0,null,null,2,"div",[["class","deal__loading"]],null,null,null,null,null)),(n()(),t.tb(1,0,null,null,1,"ion-spinner",[],null,null,null,f.pb,f.D)),t.sb(2,49152,null,0,c.rb,[t.h,t.k,t.z],null,null)],null,null)}function P(n){return t.Pb(0,[(n()(),t.tb(0,0,null,null,1,"h6",[],null,null,null,null,null)),(n()(),t.Nb(1,null,["Offered by ",""]))],null,function(n,l){n(l,1,0,l.component.deal.venue.name)})}function O(n){return t.Pb(0,[(n()(),t.tb(0,0,null,null,2,"ion-button",[["class","deal__header__actions__item"],["color","light"],["shape","round"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.confirmClaimDeal()&&t),t},f.P,f.d)),t.sb(1,49152,null,0,c.k,[t.h,t.k,t.z],{color:[0,"color"],shape:[1,"shape"]},null),(n()(),t.Nb(-1,0,[" Claim Deal "]))],function(n,l){n(l,1,0,"light","round")},null)}function D(n){return t.Pb(0,[(n()(),t.tb(0,0,null,null,2,"ion-button",[["class","deal__header__actions__item"],["color","light"],["shape","round"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.confirmClaimDeal()&&t),t},f.P,f.d)),t.sb(1,49152,null,0,c.k,[t.h,t.k,t.z],{color:[0,"color"],shape:[1,"shape"]},null),(n()(),t.Nb(-1,0,[" Show Coupon "]))],function(n,l){n(l,1,0,"light","round")},null)}function y(n){return t.Pb(0,[(n()(),t.tb(0,0,null,null,2,"ion-button",[["class","deal__header__actions__item"],["color","light"],["shape","round"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.confirmClaimDeal()&&t),t},f.P,f.d)),t.sb(1,49152,null,0,c.k,[t.h,t.k,t.z],{color:[0,"color"],shape:[1,"shape"]},null),(n()(),t.Nb(-1,0,[" Scan QR Code "]))],function(n,l){n(l,1,0,"light","round")},null)}function M(n){return t.Pb(0,[(n()(),t.tb(0,0,null,null,2,"ion-button",[["class","deal__header__actions__item"],["color","light"],["disabled",""],["shape","round"]],null,null,null,f.P,f.d)),t.sb(1,49152,null,0,c.k,[t.h,t.k,t.z],{color:[0,"color"],disabled:[1,"disabled"],shape:[2,"shape"]},null),(n()(),t.Nb(-1,0,[" Deal Claimed "]))],function(n,l){n(l,1,0,"light","","round")},null)}function w(n){return t.Pb(0,[(n()(),t.tb(0,0,null,null,4,"div",[["class","deal__about__dates"]],null,null,null,null,null)),(n()(),t.tb(1,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Nb(2,null,["Starts at: ",""])),(n()(),t.tb(3,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Nb(4,null,["Ends at: ",""]))],null,function(n,l){var e=l.component;n(l,2,0,e.formatDate(e.deal.start_date)),n(l,4,0,e.formatDate(e.deal.end_date))})}function I(n){return t.Pb(0,[(n()(),t.tb(0,0,null,null,27,"div",[],null,null,null,null,null)),(n()(),t.tb(1,0,null,null,18,"div",[["class","deal__header"]],null,null,null,null,null)),t.Kb(512,null,m.t,m.u,[t.k,t.t,t.D]),t.sb(3,278528,null,0,m.m,[m.t],{ngStyle:[0,"ngStyle"]},null),t.Ib(4,{"background-image":0}),(n()(),t.tb(5,0,null,null,1,"h5",[],null,null,null,null,null)),(n()(),t.Nb(6,null,["",""])),(n()(),t.tb(7,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),t.Nb(8,null,["",""])),(n()(),t.ib(16777216,null,null,1,null,P)),t.sb(10,16384,null,0,m.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.tb(11,0,null,null,8,"div",[["class","deal__header__actions"]],null,null,null,null,null)),(n()(),t.ib(16777216,null,null,1,null,O)),t.sb(13,16384,null,0,m.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.ib(16777216,null,null,1,null,D)),t.sb(15,16384,null,0,m.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.ib(16777216,null,null,1,null,y)),t.sb(17,16384,null,0,m.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.ib(16777216,null,null,1,null,M)),t.sb(19,16384,null,0,m.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.tb(20,0,null,null,7,"div",[["class","deal__info"]],null,null,null,null,null)),(n()(),t.tb(21,0,null,null,6,"div",[["class","deal__about"]],null,null,null,null,null)),(n()(),t.tb(22,0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),t.Nb(-1,null,["About The Deal"])),(n()(),t.tb(24,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Nb(25,null,["",""])),(n()(),t.ib(16777216,null,null,1,null,w)),t.sb(27,16384,null,0,m.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component,t=n(l,4,0,"url("+e.deal.image+")");n(l,3,0,t),n(l,10,0,e.deal.venue),n(l,13,0,"show"===e.deal.deal_type&&!e.deal.claimed_deal),n(l,15,0,"coupon"===e.deal.deal_type&&!e.deal.claimed_deal),n(l,17,0,"scan"===e.deal.deal_type&&!e.deal.claimed_deal),n(l,19,0,e.deal.claimed_deal),n(l,27,0,e.deal.start_date||e.deal.end_date)},function(n,l){var e=l.component;n(l,6,0,e.deal.brand),n(l,8,0,e.deal.name),n(l,25,0,e.deal.description)})}function z(n){return t.Pb(0,[(n()(),t.tb(0,0,null,null,19,"ion-header",[["class","primary-header"],["no-border",""]],null,null,null,f.Z,f.n)),t.sb(1,49152,null,0,c.B,[t.h,t.k,t.z],null,null),(n()(),t.tb(2,0,null,0,17,"ion-toolbar",[["color","transparent"]],null,null,null,f.xb,f.L)),t.sb(3,49152,null,0,c.Bb,[t.h,t.k,t.z],{color:[0,"color"]},null),(n()(),t.tb(4,0,null,0,6,"ion-buttons",[["slot","start"]],null,null,null,f.Q,f.e)),t.sb(5,49152,null,0,c.l,[t.h,t.k,t.z],null,null),(n()(),t.tb(6,0,null,0,4,"ion-button",[],null,null,null,f.P,f.d)),t.sb(7,49152,null,0,c.k,[t.h,t.k,t.z],null,null),(n()(),t.tb(8,0,null,0,2,"ion-back-button",[["defaultHref","/login"]],null,[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t.Fb(n,10).onClick(e)&&o),o},f.O,f.c)),t.sb(9,49152,null,0,c.g,[t.h,t.k,t.z],{defaultHref:[0,"defaultHref"]},null),t.sb(10,16384,null,0,c.h,[[2,c.hb],c.Ib],{defaultHref:[0,"defaultHref"]},null),(n()(),t.tb(11,0,null,0,2,"ion-title",[],null,null,null,f.vb,f.J)),t.sb(12,49152,null,0,c.zb,[t.h,t.k,t.z],null,null),(n()(),t.tb(13,0,null,0,0,"img",[["src","assets/logo.png"]],null,null,null,null,null)),(n()(),t.tb(14,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,f.Q,f.e)),t.sb(15,49152,null,0,c.l,[t.h,t.k,t.z],null,null),(n()(),t.ib(16777216,null,0,1,null,C)),t.sb(17,16384,null,0,m.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.ib(16777216,null,0,1,null,x)),t.sb(19,16384,null,0,m.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.tb(20,0,null,null,5,"ion-content",[["class","deal"],["fullscreen","true"]],null,null,null,f.V,f.j)),t.sb(21,49152,null,0,c.u,[t.h,t.k,t.z],{fullscreen:[0,"fullscreen"]},null),(n()(),t.ib(16777216,null,0,1,null,v)),t.sb(23,16384,null,0,m.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.ib(16777216,null,0,1,null,I)),t.sb(25,16384,null,0,m.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,3,0,"transparent"),n(l,9,0,"/login"),n(l,10,0,"/login"),n(l,17,0,e.deal.user_id!==e.user.id),n(l,19,0,e.deal.user_id===e.user.id),n(l,21,0,"true"),n(l,23,0,e.properties.loading),n(l,25,0,!e.properties.loading)},null)}function S(n){return t.Pb(0,[(n()(),t.tb(0,0,null,null,1,"app-deal",[],null,null,null,z,k)),t.sb(1,114688,null,0,p,[_.a,u.a,c.a,r.a,a.a,h.a,c.Hb,c.Ib,c.Fb],null,null)],function(n,l){n(l,1,0)},null)}var j=t.pb("app-deal",p,S,{},{},[]),H=e("Ut8T"),L=e("gIcY");e.d(l,"DealPageModuleNgFactory",function(){return N});var N=t.qb(b,[],function(n){return t.Cb([t.Db(512,t.j,t.bb,[[8,[g.a,j,H.a]],[3,t.j],t.x]),t.Db(4608,m.l,m.k,[t.u,[2,m.w]]),t.Db(4608,L.l,L.l,[]),t.Db(4608,c.b,c.b,[t.z,t.g]),t.Db(4608,c.Hb,c.Hb,[c.b,t.j,t.q]),t.Db(4608,c.Lb,c.Lb,[c.b,t.j,t.q]),t.Db(1073742336,m.b,m.b,[]),t.Db(1073742336,L.k,L.k,[]),t.Db(1073742336,L.d,L.d,[]),t.Db(1073742336,c.Db,c.Db,[]),t.Db(1073742336,_.q,_.q,[[2,_.v],[2,_.n]]),t.Db(1073742336,b,b,[]),t.Db(1024,_.l,function(){return[[{path:"",component:p}]]},[])])})}}]);