(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{J3Yu:function(i,n,e){"use strict";e.r(n),e.d(n,"ion_loading",function(){return g});var o=e("mLBW"),t=e("TJLY"),s=e("vTwt"),a=e("Jbqe"),r=e("IvgT");const d=(i,n)=>{const e=new i,o=new i;o.addElement(n.querySelector("ion-backdrop"));const t=new i;return t.addElement(n.querySelector(".loading-wrapper")),o.fromTo("opacity",.01,.3),t.fromTo("opacity",.01,1).fromTo("scale",1.1,1),Promise.resolve(e.addElement(n).easing("ease-in-out").duration(200).add(o).add(t))},l=(i,n)=>{const e=new i,o=new i;o.addElement(n.querySelector("ion-backdrop"));const t=new i;return t.addElement(n.querySelector(".loading-wrapper")),o.fromTo("opacity",.3,0),t.fromTo("opacity",.99,0).fromTo("scale",1,.9),Promise.resolve(e.addElement(n).easing("ease-in-out").duration(200).add(o).add(t))},c=(i,n)=>{const e=new i,o=new i;o.addElement(n.querySelector("ion-backdrop"));const t=new i;return t.addElement(n.querySelector(".loading-wrapper")),o.fromTo("opacity",.01,.32),t.fromTo("opacity",.01,1).fromTo("scale",1.1,1),Promise.resolve(e.addElement(n).easing("ease-in-out").duration(200).add(o).add(t))},p=(i,n)=>{const e=new i,o=new i;o.addElement(n.querySelector("ion-backdrop"));const t=new i;return t.addElement(n.querySelector(".loading-wrapper")),o.fromTo("opacity",.32,0),t.fromTo("opacity",.99,0).fromTo("scale",1,.9),Promise.resolve(e.addElement(n).easing("ease-in-out").duration(200).add(o).add(t))};class g{constructor(i){Object(o.m)(this,i),this.presented=!1,this.mode=Object(o.e)(this),this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=()=>{this.dismiss(void 0,s.a)},this.didPresent=Object(o.d)(this,"ionLoadingDidPresent",7),this.willPresent=Object(o.d)(this,"ionLoadingWillPresent",7),this.willDismiss=Object(o.d)(this,"ionLoadingWillDismiss",7),this.didDismiss=Object(o.d)(this,"ionLoadingDidDismiss",7)}componentWillLoad(){if(void 0===this.spinner){const i=Object(o.e)(this);this.spinner=t.b.get("loadingSpinner",t.b.get("spinner","ios"===i?"lines":"crescent"))}}async present(){await Object(s.e)(this,"loadingEnter",d,c,void 0),this.duration>0&&(this.durationTimeout=setTimeout(()=>this.dismiss(),this.duration+10))}dismiss(i,n){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(s.f)(this,i,n,"loadingLeave",l,p)}onDidDismiss(){return Object(s.g)(this.el,"ionLoadingDidDismiss")}onWillDismiss(){return Object(s.g)(this.el,"ionLoadingWillDismiss")}render(){const{message:i,spinner:n}=this,e=Object(o.e)(this);return Object(o.i)(o.a,{onIonBackdropTap:this.onBackdropTap,style:{zIndex:`${4e4+this.overlayIndex}`},class:Object.assign({},Object(a.b)(this.cssClass),{[e]:!0,"loading-translucent":this.translucent})},Object(o.i)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(o.i)("div",{class:"loading-wrapper",role:"dialog"},n&&Object(o.i)("div",{class:"loading-spinner"},Object(o.i)("ion-spinner",{name:n})),i&&Object(o.i)("div",{class:"loading-content",innerHTML:Object(r.a)(i)})))}get el(){return Object(o.f)(this)}static get style(){return".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-bubbles.sc-ion-loading-ios, .spinner-circles.sc-ion-loading-ios, .spinner-crescent.sc-ion-loading-ios, .spinner-dots.sc-ion-loading-ios, .spinner-lines.sc-ion-loading-ios, .spinner-lines-small.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color,var(--ion-color-step-100,#f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600,#666);color:var(--ion-text-color,#000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:700}.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"}}}}]);