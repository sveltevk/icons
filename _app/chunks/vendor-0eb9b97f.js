function Y(){}function Bt(t,e){for(const n in e)t[n]=e[n];return t}function pt(t){return t()}function dt(){return Object.create(null)}function Q(t){t.forEach(pt)}function mt(t){return typeof t=="function"}function kt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let V;function Zt(t,e){return V||(V=document.createElement("a")),V.href=e,t===V.href}function Ut(t){return Object.keys(t).length===0}function te(t,e,n,r){if(t){const u=yt(t,e,n,r);return t[0](u)}}function yt(t,e,n,r){return t[1]&&r?Bt(n.ctx.slice(),t[1](r(e))):n.ctx}function ee(t,e,n,r){if(t[2]&&r){const u=t[2](r(n));if(e.dirty===void 0)return u;if(typeof u=="object"){const y=[],l=Math.max(e.dirty.length,u.length);for(let p=0;p<l;p+=1)y[p]=e.dirty[p]|u[p];return y}return e.dirty|u}return e.dirty}function ne(t,e,n,r,u,y){if(u){const l=yt(e,n,r,y);t.p(l,u)}}function re(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function ie(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function oe(t,e){const n={};e=new Set(e);for(const r in t)!e.has(r)&&r[0]!=="$"&&(n[r]=t[r]);return n}function se(t){return t&&mt(t.destroy)?t.destroy:Y}let et=!1;function Lt(){et=!0}function $t(){et=!1}function qt(t,e,n,r){for(;t<e;){const u=t+(e-t>>1);n(u)<=r?t=u+1:e=u}return t}function Pt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let d=0;d<e.length;d++){const T=e[d];T.claim_order!==void 0&&c.push(T)}e=c}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let u=0;for(let c=0;c<e.length;c++){const d=e[c].claim_order,T=(u>0&&e[n[u]].claim_order<=d?u+1:qt(1,u,$=>e[n[$]].claim_order,d))-1;r[c]=n[T]+1;const C=T+1;n[C]=c,u=Math.max(C,u)}const y=[],l=[];let p=e.length-1;for(let c=n[u]+1;c!=0;c=r[c-1]){for(y.push(e[c-1]);p>=c;p--)l.push(e[p]);p--}for(;p>=0;p--)l.push(e[p]);y.reverse(),l.sort((c,d)=>c.claim_order-d.claim_order);for(let c=0,d=0;c<l.length;c++){for(;d<y.length&&l[c].claim_order>=y[d].claim_order;)d++;const T=d<y.length?y[d]:null;t.insertBefore(l[c],T)}}function Ft(t,e){if(et){for(Pt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ae(t,e,n){et&&!n?Ft(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Gt(t){t.parentNode.removeChild(t)}function ue(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function It(t){return document.createElement(t)}function Wt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function at(t){return document.createTextNode(t)}function ce(){return at(" ")}function fe(){return at("")}function le(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Dt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function de(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)e[r]==null?t.removeAttribute(r):r==="style"?t.style.cssText=e[r]:r==="__value"?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:Dt(t,r,e[r])}function he(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function Rt(t){return Array.from(t.childNodes)}function Yt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function vt(t,e,n,r,u=!1){Yt(t);const y=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const p=t[l];if(e(p)){const c=n(p);return c===void 0?t.splice(l,1):t[l]=c,u||(t.claim_info.last_index=l),p}}for(let l=t.claim_info.last_index-1;l>=0;l--){const p=t[l];if(e(p)){const c=n(p);return c===void 0?t.splice(l,1):t[l]=c,u?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,p}}return r()})();return y.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,y}function _t(t,e,n,r){return vt(t,u=>u.nodeName===e,u=>{const y=[];for(let l=0;l<u.attributes.length;l++){const p=u.attributes[l];n[p.name]||y.push(p.name)}y.forEach(l=>u.removeAttribute(l))},()=>r(e))}function pe(t,e,n){return _t(t,e,n,It)}function me(t,e,n){return _t(t,e,n,Wt)}function zt(t,e){return vt(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>at(e),!0)}function ye(t){return zt(t," ")}function ve(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function _e(t,e){t.value=e==null?"":e}function ge(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function be(t,e,n){t.classList[n?"add":"remove"](e)}function Ht(t,e,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,!1,e),r}function xe(t,e=document.body){return Array.from(e.querySelectorAll(t))}let K;function J(t){K=t}function nt(){if(!K)throw new Error("Function called outside component initialization");return K}function we(t){nt().$$.on_mount.push(t)}function Ee(t){nt().$$.after_update.push(t)}function Se(){const t=nt();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const u=Ht(e,n);r.slice().forEach(y=>{y.call(t,u)})}}}function Oe(t,e){nt().$$.context.set(t,e)}function je(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const H=[],ht=[],Z=[],it=[],gt=Promise.resolve();let ot=!1;function bt(){ot||(ot=!0,gt.then(xt))}function Ne(){return bt(),gt}function st(t){Z.push(t)}function Me(t){it.push(t)}const rt=new Set;let X=0;function xt(){const t=K;do{for(;X<H.length;){const e=H[X];X++,J(e),Jt(e.$$)}for(J(null),H.length=0,X=0;ht.length;)ht.pop()();for(let e=0;e<Z.length;e+=1){const n=Z[e];rt.has(n)||(rt.add(n),n())}Z.length=0}while(H.length);for(;it.length;)it.pop()();ot=!1,rt.clear(),J(t)}function Jt(t){if(t.fragment!==null){t.update(),Q(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(st)}}const tt=new Set;let I;function Ce(){I={r:0,c:[],p:I}}function Ae(){I.r||Q(I.c),I=I.p}function Kt(t,e){t&&t.i&&(tt.delete(t),t.i(e))}function Te(t,e,n,r){if(t&&t.o){if(tt.has(t))return;tt.add(t),I.c.push(()=>{tt.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const Be=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function ke(t,e){const n={},r={},u={$$scope:1};let y=t.length;for(;y--;){const l=t[y],p=e[y];if(p){for(const c in l)c in p||(r[c]=1);for(const c in p)u[c]||(n[c]=p[c],u[c]=1);t[y]=p}else for(const c in l)u[c]=1}for(const l in r)l in n||(n[l]=void 0);return n}function Ue(t){return typeof t=="object"&&t!==null?t:{}}function Le(t,e,n){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function $e(t){t&&t.c()}function qe(t,e){t&&t.l(e)}function Qt(t,e,n,r){const{fragment:u,on_mount:y,on_destroy:l,after_update:p}=t.$$;u&&u.m(e,n),r||st(()=>{const c=y.map(pt).filter(mt);l?l.push(...c):Q(c),t.$$.on_mount=[]}),p.forEach(st)}function Vt(t,e){const n=t.$$;n.fragment!==null&&(Q(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Xt(t,e){t.$$.dirty[0]===-1&&(H.push(t),bt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Pe(t,e,n,r,u,y,l,p=[-1]){const c=K;J(t);const d=t.$$={fragment:null,ctx:null,props:y,update:Y,not_equal:u,bound:dt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:dt(),dirty:p,skip_bound:!1,root:e.target||c.$$.root};l&&l(d.root);let T=!1;if(d.ctx=n?n(t,e.props||{},(C,$,...P)=>{const b=P.length?P[0]:$;return d.ctx&&u(d.ctx[C],d.ctx[C]=b)&&(!d.skip_bound&&d.bound[C]&&d.bound[C](b),T&&Xt(t,C)),$}):[],d.update(),T=!0,Q(d.before_update),d.fragment=r?r(d.ctx):!1,e.target){if(e.hydrate){Lt();const C=Rt(e.target);d.fragment&&d.fragment.l(C),C.forEach(Gt)}else d.fragment&&d.fragment.c();e.intro&&Kt(t.$$.fragment),Qt(t,e.target,e.anchor,e.customElement),$t(),xt()}J(c)}class Fe{$destroy(){Vt(this,1),this.$destroy=Y}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const u=r.indexOf(n);u!==-1&&r.splice(u,1)}}$set(e){this.$$set&&!Ut(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const R=[];function Ge(t,e=Y){let n;const r=new Set;function u(p){if(kt(t,p)&&(t=p,n)){const c=!R.length;for(const d of r)d[1](),R.push(d,t);if(c){for(let d=0;d<R.length;d+=2)R[d][0](R[d+1]);R.length=0}}}function y(p){u(p(t))}function l(p,c=Y){const d=[p,c];return r.add(d),r.size===1&&(n=e(u)||Y),p(t),()=>{r.delete(d),r.size===0&&(n(),n=null)}}return{set:u,update:y,subscribe:l}}var z=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},wt={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(z,function(){var n=function(m){var x=m.id,B=m.viewBox,N=m.content;this.id=x,this.viewBox=B,this.content=N};n.prototype.stringify=function(){return this.content},n.prototype.toString=function(){return this.stringify()},n.prototype.destroy=function(){var m=this;["id","viewBox","content"].forEach(function(x){return delete m[x]})};var r=function(b){var m=!!document.importNode,x=new DOMParser().parseFromString(b,"image/svg+xml").documentElement;return m?document.importNode(x,!0):x},u=typeof window!="undefined"?window:typeof z!="undefined"?z:typeof self!="undefined"?self:{};function y(b,m){return m={exports:{}},b(m,m.exports),m.exports}var l=y(function(b,m){(function(x,B){b.exports=B()})(u,function(){function x(w){var S=w&&typeof w=="object";return S&&Object.prototype.toString.call(w)!=="[object RegExp]"&&Object.prototype.toString.call(w)!=="[object Date]"}function B(w){return Array.isArray(w)?[]:{}}function N(w,S){var A=S&&S.clone===!0;return A&&x(w)?U(B(w),w,S):w}function W(w,S,A){var k=w.slice();return S.forEach(function(j,q){typeof k[q]=="undefined"?k[q]=N(j,A):x(j)?k[q]=U(w[q],j,A):w.indexOf(j)===-1&&k.push(N(j,A))}),k}function F(w,S,A){var k={};return x(w)&&Object.keys(w).forEach(function(j){k[j]=N(w[j],A)}),Object.keys(S).forEach(function(j){!x(S[j])||!w[j]?k[j]=N(S[j],A):k[j]=U(w[j],S[j],A)}),k}function U(w,S,A){var k=Array.isArray(S),j=A||{arrayMerge:W},q=j.arrayMerge||W;return k?Array.isArray(w)?q(w,S,A):N(S,A):F(w,S,A)}return U.all=function(S,A){if(!Array.isArray(S)||S.length<2)throw new Error("first argument should be an array with at least two elements");return S.reduce(function(k,j){return U(k,j,A)})},U})}),p=y(function(b,m){var x={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}};m.default=x,b.exports=m.default}),c=function(b){return Object.keys(b).map(function(m){var x=b[m].toString().replace(/"/g,"&quot;");return m+'="'+x+'"'}).join(" ")},d=p.svg,T=p.xlink,C={};C[d.name]=d.uri,C[T.name]=T.uri;var $=function(b,m){b===void 0&&(b="");var x=l(C,m||{}),B=c(x);return"<svg "+B+">"+b+"</svg>"},P=function(b){function m(){b.apply(this,arguments)}b&&(m.__proto__=b),m.prototype=Object.create(b&&b.prototype),m.prototype.constructor=m;var x={isMounted:{}};return x.isMounted.get=function(){return!!this.node},m.createFromExistingNode=function(N){return new m({id:N.getAttribute("id"),viewBox:N.getAttribute("viewBox"),content:N.outerHTML})},m.prototype.destroy=function(){this.isMounted&&this.unmount(),b.prototype.destroy.call(this)},m.prototype.mount=function(N){if(this.isMounted)return this.node;var W=typeof N=="string"?document.querySelector(N):N,F=this.render();return this.node=F,W.appendChild(F),F},m.prototype.render=function(){var N=this.stringify();return r($(N)).childNodes[0]},m.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(m.prototype,x),m}(n);return P})})(wt);var Ie=wt.exports,Et={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(z,function(){var n=typeof window!="undefined"?window:typeof z!="undefined"?z:typeof self!="undefined"?self:{};function r(o,i){return i={exports:{}},o(i,i.exports),i.exports}var u=r(function(o,i){(function(a,f){o.exports=f()})(n,function(){function a(h){var E=h&&typeof h=="object";return E&&Object.prototype.toString.call(h)!=="[object RegExp]"&&Object.prototype.toString.call(h)!=="[object Date]"}function f(h){return Array.isArray(h)?[]:{}}function s(h,E){var O=E&&E.clone===!0;return O&&a(h)?g(f(h),h,E):h}function v(h,E,O){var L=h.slice();return E.forEach(function(M,D){typeof L[D]=="undefined"?L[D]=s(M,O):a(M)?L[D]=g(h[D],M,O):h.indexOf(M)===-1&&L.push(s(M,O))}),L}function _(h,E,O){var L={};return a(h)&&Object.keys(h).forEach(function(M){L[M]=s(h[M],O)}),Object.keys(E).forEach(function(M){!a(E[M])||!h[M]?L[M]=s(E[M],O):L[M]=g(h[M],E[M],O)}),L}function g(h,E,O){var L=Array.isArray(E),M=O||{arrayMerge:v},D=M.arrayMerge||v;return L?Array.isArray(h)?D(h,E,O):s(E,O):_(h,E,O)}return g.all=function(E,O){if(!Array.isArray(E)||E.length<2)throw new Error("first argument should be an array with at least two elements");return E.reduce(function(L,M){return g(L,M,O)})},g})});function y(o){return o=o||Object.create(null),{on:function(a,f){(o[a]||(o[a]=[])).push(f)},off:function(a,f){o[a]&&o[a].splice(o[a].indexOf(f)>>>0,1)},emit:function(a,f){(o[a]||[]).map(function(s){s(f)}),(o["*"]||[]).map(function(s){s(a,f)})}}}var l=r(function(o,i){var a={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}};i.default=a,o.exports=i.default}),p=function(o){return Object.keys(o).map(function(i){var a=o[i].toString().replace(/"/g,"&quot;");return i+'="'+a+'"'}).join(" ")},c=l.svg,d=l.xlink,T={};T[c.name]=c.uri,T[d.name]=d.uri;var C=function(o,i){o===void 0&&(o="");var a=u(T,i||{}),f=p(a);return"<svg "+f+">"+o+"</svg>"},$=l.svg,P=l.xlink,b={attrs:(m={style:["position: absolute","width: 0","height: 0"].join("; "),"aria-hidden":"true"},m[$.name]=$.uri,m[P.name]=P.uri,m)},m,x=function(i){this.config=u(b,i||{}),this.symbols=[]};x.prototype.add=function(i){var a=this,f=a.symbols,s=this.find(i.id);return s?(f[f.indexOf(s)]=i,!1):(f.push(i),!0)},x.prototype.remove=function(i){var a=this,f=a.symbols,s=this.find(i);return s?(f.splice(f.indexOf(s),1),s.destroy(),!0):!1},x.prototype.find=function(i){return this.symbols.filter(function(a){return a.id===i})[0]||null},x.prototype.has=function(i){return this.find(i)!==null},x.prototype.stringify=function(){var i=this.config,a=i.attrs,f=this.symbols.map(function(s){return s.stringify()}).join("");return C(f,a)},x.prototype.toString=function(){return this.stringify()},x.prototype.destroy=function(){this.symbols.forEach(function(i){return i.destroy()})};var B=function(i){var a=i.id,f=i.viewBox,s=i.content;this.id=a,this.viewBox=f,this.content=s};B.prototype.stringify=function(){return this.content},B.prototype.toString=function(){return this.stringify()},B.prototype.destroy=function(){var i=this;["id","viewBox","content"].forEach(function(a){return delete i[a]})};var N=function(o){var i=!!document.importNode,a=new DOMParser().parseFromString(o,"image/svg+xml").documentElement;return i?document.importNode(a,!0):a},W=function(o){function i(){o.apply(this,arguments)}o&&(i.__proto__=o),i.prototype=Object.create(o&&o.prototype),i.prototype.constructor=i;var a={isMounted:{}};return a.isMounted.get=function(){return!!this.node},i.createFromExistingNode=function(s){return new i({id:s.getAttribute("id"),viewBox:s.getAttribute("viewBox"),content:s.outerHTML})},i.prototype.destroy=function(){this.isMounted&&this.unmount(),o.prototype.destroy.call(this)},i.prototype.mount=function(s){if(this.isMounted)return this.node;var v=typeof s=="string"?document.querySelector(s):s,_=this.render();return this.node=_,v.appendChild(_),_},i.prototype.render=function(){var s=this.stringify();return N(C(s)).childNodes[0]},i.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(i.prototype,a),i}(B),F={autoConfigure:!0,mountTo:"body",syncUrlsWithBaseTag:!1,listenLocationChangeEvent:!0,locationChangeEvent:"locationChange",locationChangeAngularEmitter:!1,usagesToUpdate:"use[*|href]",moveGradientsOutsideSymbol:!1},U=function(o){return Array.prototype.slice.call(o,0)},w={isChrome:function(){return/chrome/i.test(navigator.userAgent)},isFirefox:function(){return/firefox/i.test(navigator.userAgent)},isIE:function(){return/msie/i.test(navigator.userAgent)||/trident/i.test(navigator.userAgent)},isEdge:function(){return/edge/i.test(navigator.userAgent)}},S=function(o,i){var a=document.createEvent("CustomEvent");a.initCustomEvent(o,!1,!1,i),window.dispatchEvent(a)},A=function(o){var i=[];return U(o.querySelectorAll("style")).forEach(function(a){a.textContent+="",i.push(a)}),i},k=function(o){return(o||window.location.href).split("#")[0]},j=function(o){angular.module("ng").run(["$rootScope",function(i){i.$on("$locationChangeSuccess",function(a,f,s){S(o,{oldUrl:s,newUrl:f})})}])},q="linearGradient, radialGradient, pattern, mask, clipPath",ut=function(o,i){return i===void 0&&(i=q),U(o.querySelectorAll("symbol")).forEach(function(a){U(a.querySelectorAll(i)).forEach(function(f){a.parentNode.insertBefore(f,a)})}),o};function St(o,i){var a=U(o).reduce(function(f,s){if(!s.attributes)return f;var v=U(s.attributes),_=i?v.filter(i):v;return f.concat(_)},[]);return a}var Ot=l.xlink.uri,ct="xlink:href",jt=/[{}|\\\^\[\]`"<>]/g;function ft(o){return o.replace(jt,function(i){return"%"+i[0].charCodeAt(0).toString(16).toUpperCase()})}function Nt(o){return o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Mt(o,i,a){return U(o).forEach(function(f){var s=f.getAttribute(ct);if(s&&s.indexOf(i)===0){var v=s.replace(i,a);f.setAttributeNS(Ot,ct,v)}}),o}var lt=["clipPath","colorProfile","src","cursor","fill","filter","marker","markerStart","markerMid","markerEnd","mask","stroke","style"],Ct=lt.map(function(o){return"["+o+"]"}).join(","),At=function(o,i,a,f){var s=ft(a),v=ft(f),_=o.querySelectorAll(Ct),g=St(_,function(h){var E=h.localName,O=h.value;return lt.indexOf(E)!==-1&&O.indexOf("url("+s)!==-1});g.forEach(function(h){return h.value=h.value.replace(new RegExp(Nt(s),"g"),v)}),Mt(i,s,v)},G={MOUNT:"mount",SYMBOL_MOUNT:"symbol_mount"},Tt=function(o){function i(f){var s=this;f===void 0&&(f={}),o.call(this,u(F,f));var v=y();this._emitter=v,this.node=null;var _=this,g=_.config;if(g.autoConfigure&&this._autoConfigure(f),g.syncUrlsWithBaseTag){var h=document.getElementsByTagName("base")[0].getAttribute("href");v.on(G.MOUNT,function(){return s.updateUrls("#",h)})}var E=this._handleLocationChange.bind(this);this._handleLocationChange=E,g.listenLocationChangeEvent&&window.addEventListener(g.locationChangeEvent,E),g.locationChangeAngularEmitter&&j(g.locationChangeEvent),v.on(G.MOUNT,function(O){g.moveGradientsOutsideSymbol&&ut(O)}),v.on(G.SYMBOL_MOUNT,function(O){g.moveGradientsOutsideSymbol&&ut(O.parentNode),(w.isIE()||w.isEdge())&&A(O)})}o&&(i.__proto__=o),i.prototype=Object.create(o&&o.prototype),i.prototype.constructor=i;var a={isMounted:{}};return a.isMounted.get=function(){return!!this.node},i.prototype._autoConfigure=function(s){var v=this,_=v.config;typeof s.syncUrlsWithBaseTag=="undefined"&&(_.syncUrlsWithBaseTag=typeof document.getElementsByTagName("base")[0]!="undefined"),typeof s.locationChangeAngularEmitter=="undefined"&&(_.locationChangeAngularEmitter=typeof window.angular!="undefined"),typeof s.moveGradientsOutsideSymbol=="undefined"&&(_.moveGradientsOutsideSymbol=w.isFirefox())},i.prototype._handleLocationChange=function(s){var v=s.detail,_=v.oldUrl,g=v.newUrl;this.updateUrls(_,g)},i.prototype.add=function(s){var v=this,_=o.prototype.add.call(this,s);return this.isMounted&&_&&(s.mount(v.node),this._emitter.emit(G.SYMBOL_MOUNT,s.node)),_},i.prototype.attach=function(s){var v=this,_=this;if(_.isMounted)return _.node;var g=typeof s=="string"?document.querySelector(s):s;return _.node=g,this.symbols.forEach(function(h){h.mount(_.node),v._emitter.emit(G.SYMBOL_MOUNT,h.node)}),U(g.querySelectorAll("symbol")).forEach(function(h){var E=W.createFromExistingNode(h);E.node=h,_.add(E)}),this._emitter.emit(G.MOUNT,g),g},i.prototype.destroy=function(){var s=this,v=s.config,_=s.symbols,g=s._emitter;_.forEach(function(h){return h.destroy()}),g.off("*"),window.removeEventListener(v.locationChangeEvent,this._handleLocationChange),this.isMounted&&this.unmount()},i.prototype.mount=function(s,v){s===void 0&&(s=this.config.mountTo),v===void 0&&(v=!1);var _=this;if(_.isMounted)return _.node;var g=typeof s=="string"?document.querySelector(s):s,h=_.render();return this.node=h,v&&g.childNodes[0]?g.insertBefore(h,g.childNodes[0]):g.appendChild(h),this._emitter.emit(G.MOUNT,h),h},i.prototype.render=function(){return N(this.stringify())},i.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},i.prototype.updateUrls=function(s,v){if(!this.isMounted)return!1;var _=document.querySelectorAll(this.config.usagesToUpdate);return At(this.node,_,k(s)+"#",k(v)+"#"),!0},Object.defineProperties(i.prototype,a),i}(x);return Tt})})(Et);var We=Et.exports;export{ht as $,Ue as A,Vt as B,Bt as C,Ge as D,Ne as E,te as F,ne as G,re as H,ee as I,Ft as J,Y as K,de as L,be as M,_e as N,le as O,oe as P,ie as Q,Se as R,Fe as S,We as T,Ie as U,Wt as V,me as W,he as X,se as Y,je as Z,K as _,Rt as a,Le as a0,ue as a1,Me as a2,Q as a3,Be as a4,Zt as a5,xe as a6,Dt as b,pe as c,Gt as d,It as e,ge as f,ae as g,zt as h,Pe as i,ve as j,ce as k,fe as l,ye as m,Ce as n,Te as o,Ae as p,Kt as q,Oe as r,kt as s,at as t,Ee as u,we as v,$e as w,qe as x,Qt as y,ke as z};
