(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{"lg/V":function(i,t,n){"use strict";n.r(t),n.d(t,"ion_infinite_scroll",function(){return o}),n.d(t,"ion_infinite_scroll_content",function(){return r});var e=n("mLBW"),s=n("TJLY"),l=n("IvgT");class o{constructor(i){Object(e.m)(this,i),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom",this.onScroll=()=>{const i=this.scrollEl;if(!i||!this.canStart())return 1;const t=this.el.offsetHeight;if(0===t)return 2;const n=i.scrollTop,e=i.offsetHeight,s=0!==this.thrPc?e*this.thrPc:this.thrPx;if(("bottom"===this.position?i.scrollHeight-t-n-s-e:n-t-s)<0){if(!this.didFire)return this.isLoading=!0,this.didFire=!0,this.ionInfinite.emit(),3}else this.didFire=!1;return 4},this.ionInfinite=Object(e.d)(this,"ionInfinite",7)}thresholdChanged(){const i=this.threshold;i.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(i)/100):(this.thrPx=parseFloat(i),this.thrPc=0)}disabledChanged(){const i=this.disabled;i&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!i)}async componentDidLoad(){const i=this.el.closest("ion-content");i&&(await i.componentOnReady(),this.scrollEl=await i.getScrollElement()),this.thresholdChanged(),this.disabledChanged(),"top"===this.position&&Object(e.n)(()=>{this.scrollEl&&(this.scrollEl.scrollTop=this.scrollEl.scrollHeight-this.scrollEl.clientHeight)})}componentDidUnload(){this.enableScrollEvents(!1),this.scrollEl=void 0}async complete(){const i=this.scrollEl;if(this.isLoading&&i&&(this.isLoading=!1,"top"===this.position)){this.isBusy=!0;const t=i.scrollHeight-i.scrollTop;requestAnimationFrame(()=>{Object(e.g)(()=>{const n=i.scrollHeight-t;requestAnimationFrame(()=>{Object(e.n)(()=>{i.scrollTop=n,this.isBusy=!1})})})})}}canStart(){return!(this.disabled||this.isBusy||!this.scrollEl||this.isLoading)}enableScrollEvents(i){this.scrollEl&&(i?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))}render(){const i=Object(e.e)(this),t=this.disabled;return Object(e.i)(e.a,{class:{[i]:!0,"infinite-scroll-loading":this.isLoading,"infinite-scroll-enabled":!t}})}get el(){return Object(e.f)(this)}static get watchers(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}}static get style(){return"ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}"}}class r{constructor(i){Object(e.m)(this,i)}componentDidLoad(){if(void 0===this.loadingSpinner){const i=Object(e.e)(this);this.loadingSpinner=s.b.get("infiniteLoadingSpinner",s.b.get("spinner","ios"===i?"lines":"crescent"))}}hostData(){const i=Object(e.e)(this);return{class:{[i]:!0,[`infinite-scroll-content-${i}`]:!0}}}__stencil_render(){return Object(e.i)("div",{class:"infinite-loading"},this.loadingSpinner&&Object(e.i)("div",{class:"infinite-loading-spinner"},Object(e.i)("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&Object(e.i)("div",{class:"infinite-loading-text",innerHTML:Object(l.a)(this.loadingText)}))}render(){return Object(e.i)(e.a,this.hostData(),this.__stencil_render())}static get style(){return"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600,#666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line{stroke:var(--ion-color-step-600,#666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600,#666)}"}}}}]);