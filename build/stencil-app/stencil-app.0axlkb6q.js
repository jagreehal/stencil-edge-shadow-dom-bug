/*! Built with http://stenciljs.com */
(function(Context,namespace,hydratedCssClass,resourcesUrl,s){"use strict";
s=document.querySelector("script[data-namespace='stencil-app']");if(s){resourcesUrl=s.getAttribute('data-resources-url');}
(function(n,e,t,o){"use strict";function i(n,e,t,o,i,c,l){let r=t.n+(o||k),u=t[r];if(u||(u=t[r=t.n+k]),u){let o=e.e;if(e.t)if(1===t.encapsulation)o=i.shadowRoot;else for(;i=e.o(i);)if(i.host&&i.host.shadowRoot){o=i.host.shadowRoot;break}const c=n.i.get(o)||{};if(!c[r]){l=u.content.cloneNode(!0);const t=o.querySelectorAll("[data-styles]");e.c(o,l,t.length&&t[t.length-1].nextSibling||o.l),c[r]=!0,n.i.set(o,c)}}}function c(n){return{r:n[0],u:n[1],f:!!n[2],s:!!n[3],a:!!n[4]}}function l(n,e,t,o){const i=n.p.get(e);i&&((o=i.$activeLoading)&&((t=o.indexOf(e))>-1&&o.splice(t,1),!o.length&&i.$initLoad()),n.p.delete(e))}function r(n,e,t){let o=null,i=!1,c=!1;for(var l=arguments.length;l-- >2;)S.push(arguments[l]);for(;S.length;)if((t=S.pop())&&void 0!==t.pop)for(l=t.length;l--;)S.push(t[l]);else"boolean"==typeof t&&(t=null),(c="function"!=typeof n)&&(null==t?t="":"number"==typeof t?t=String(t):"string"!=typeof t&&(c=!1)),c&&i?o[o.length-1].d+=t:null===o?o=[c?{d:t}:t]:o.push(c?{d:t}:t),i=c;if(e&&(e.className&&(e.class=e.className),"object"==typeof e.class)){for(l in e.class)e.class[l]&&S.push(l);e.class=S.join(" "),S.length=0}return"function"==typeof n?n(Object.assign({},e,{m:o})):{v:n,y:o,d:null,w:e,M:e&&e.b,k:null,g:!1}}function u(n,e){n.C.has(e)||(n.C.set(e,!0),n.W.add(()=>{(function n(e,t,o,i,c){if(e.C.delete(t),!e.x.has(t)){let l;if(i=e.N.get(t),o=!i){if((c=e.p.get(t))&&!c.$rendered)return void(c.$onRender=c.$onRender||[]).push(()=>{n(e,t)});i=function l(n,e,t,o,i,c){try{(function l(n,e,t,o,i,c){for(c in n.j.set(o,t),n.S.has(t)||n.S.set(t,{}),(i=Object.assign({color:{type:String}},e.properties)).mode={type:String},i)s(n,i[c],t,o,c)})(n,o=n.A(e).O,e,t=new o)}catch(o){t={},n.T(o,7,e,!0)}return n.N.set(e,t),t}(e,t)}l&&l.then?l.then(()=>f(e,t,i,o)):f(e,t,i,o)}})(n,e)},n.L?1:3))}function f(n,e,t,o){(function i(n,e,t,o,c){try{const i=e.O.host;let l;if(o.render||o.hostData||i||l){n.P=!0;const i=o.render&&o.render();let l;n.P=!1;const u=n.R.get(t)||{};u.k=t;const f=r(null,l,i),s=n.render(u,f,c,n.q.get(t),n.B.get(t),e.O.encapsulation);n.R.set(t,s)}n.D(n,n.H,e,o.mode,t),t.$rendered=!0,t.$onRender&&(t.$onRender.forEach(n=>n()),t.$onRender=null)}catch(e){n.P=!1,n.T(e,8,t,!0)}})(n,n.A(e),e,t,!o);try{o?e.$initLoad():h(n.R.get(e))}catch(t){n.T(t,6,e,!0)}}function s(n,e,t,o,i){if(e.type||e.state){const c=n.S.get(t);if(!e.state){if(e.attr&&(void 0===c[i]||""===c[i])){const o=n.H.F(t,e.attr);null!=o&&(c[i]=function c(n,e){if(x(e)){if(n===Boolean||3===n)return"false"!==e&&(""===e||!!e);if(n===Number||4===n)return parseFloat(e)}return e}(e.type,o))}t.hasOwnProperty(i)&&(void 0===c[i]&&(c[i]=t[i]),delete t[i])}o.hasOwnProperty(i)&&void 0===c[i]&&(c[i]=o[i]),e.watchCallbacks&&(c[O+i]=e.watchCallbacks.slice()),p(o,i,function l(e){return(e=n.S.get(n.j.get(this)))&&e[i]},function r(t,o){(o=n.j.get(this))&&(e.state||e.mutable)&&a(n,o,i,t)})}}function a(n,e,t,o,i,c,l){(i=n.S.get(e))||n.S.set(e,i={}),o!==i[t]&&(i[t]=o,n.N.get(e)&&(i[O+t],!n.P&&e.$rendered&&u(n,e)))}function p(n,e,t,o){Object.defineProperty(n,e,{configurable:!0,get:t,set:o})}function d(n,e,t,o,i){const c=11===t.k.nodeType&&t.k.host?t.k.host:t.k,l=e&&e.w||g,r=t.w||g;for(i in l)r&&null!=r[i]||null==l[i]||m(n,c,i,l[i],void 0,o,t.g);for(i in r)i in l&&r[i]===("value"===i||"checked"===i?c[i]:l[i])||m(n,c,i,l[i],r[i],o,t.g)}function m(n,e,t,o,i,c,l,r,u){if("class"!==t||c)if("style"===t){for(r in o=o||g,i=i||g,o)i[r]||(e.style[r]="");for(r in i)i[r]!==o[r]&&(e.style[r]=i[r])}else if("o"!==t[0]||"n"!==t[1]||!/[A-Z]/.test(t[2])||t in e)if("list"!==t&&"type"!==t&&!c&&(t in e||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=n.A(e);o&&o.U&&o.U[t]?v(e,t,i):"ref"!==t&&(v(e,t,null==i?"":i),null!=i&&!1!==i||e.removeAttribute(t))}else null!=i&&function f(n,e,t){const o=e!==(e=e.replace(/^xlink\:?/,"")),i=A[e];!i||t&&"false"!==t?"function"!=typeof t&&(i&&(t=""),o?n.setAttributeNS(T,N(e),t):n.setAttribute(e,t)):o?n.removeAttributeNS(T,N(e)):n.removeAttribute(e)}(e,t,i);else{t=t.substring(2),t=N(t[0])+t.substring(1);const c=n.A(e);c&&c.z&&c.z.some(n=>n.r===t)||(t=N(t)),i?i!==o&&n.H.I(e,t,i):n.H.Q(e,t)}else if(o!==i){const n=null==o||""===o?C:o.trim().split(/\s+/),t=null==i||""===i?C:i.trim().split(/\s+/);let c=null==e.className||""===e.className?C:e.className.trim().split(/\s+/);for(r=0,u=n.length;r<u;r++)-1===t.indexOf(n[r])&&(c=c.filter(e=>e!==n[r]));for(r=0,u=t.length;r<u;r++)-1===n.indexOf(t[r])&&(c=[...c,t[r]]);e.className=c.join(" ")}}function v(n,e,t){try{n[e]=t}catch(n){}}function h(n,e){n&&(n.w&&n.w.ref&&n.w.ref(e?null:n.k),n.y&&n.y.forEach(n=>{h(n,e)}))}function y(n,e,t,o,i){const c=n.Z(e);let l,r,u,f;if(i&&1===c){(r=n.F(e,$))&&(u=r.split("."))[0]===o&&((f={}).v=n.G(f.k=e),t.y||(t.y=[]),t.y[u[1]]=f,t=f,i=""!==u[2]);for(let c=0;c<e.childNodes.length;c++)y(n,e.childNodes[c],t,o,i)}else 3===c&&(l=e.previousSibling)&&8===n.Z(l)&&"s"===(u=n.J(l).split("."))[0]&&u[1]===o&&((f={d:n.J(e)}).k=e,t.y||(t.y=[]),t.y[u[2]]=f)}function w(n,e,t,o){t.connectedCallback=function(){(function t(n,e,o){n.x.delete(o),n.K.has(o)||(n.K.set(o,!0),function i(n,e,t){for(t=e;t=n.H.V(t);)if(n.X(t)){n.Y.has(e)||(n.p.set(e,t),(t.$activeLoading=t.$activeLoading||[]).push(e));break}}(n,o),n.W.add(()=>{n._(e,o),n.loadBundle(e,o.mode,()=>u(n,o))},3))})(n,e,this)},t.disconnectedCallback=function(){(function e(n,t,o){!n.nn&&function i(n,e){for(;e;){if(!n.o(e))return 9!==n.Z(e);e=n.o(e)}}(n.H,t)&&(n.x.set(t,!0),l(n,t),h(n.R.get(t),!0),n.H.Q(t),n.en.delete(t))})(n,this)},t.componentOnReady=function(e,t){return e||(t=new Promise(n=>e=n)),function o(n,e,t,i){n.x.has(e)||(n.Y.has(e)?t(e):((i=n.tn.get(e)||[]).push(t),n.tn.set(e,i)))}(n,this,e),t},t.$initLoad=function(){(function e(n,t,o,i,c){if(!n.Y.has(t)&&n.N.get(t)&&!n.x.has(t)&&(!t.$activeLoading||!t.$activeLoading.length)){delete t.$activeLoading,n.Y.set(t,!0);try{h(n.R.get(t)),(c=n.tn.get(t))&&(c.forEach(n=>n(t)),n.tn.delete(t))}catch(e){n.T(e,4,t)}t.classList.add(o),l(n,t)}})(n,this,o)},t.forceUpdate=function(){u(n,this)},function i(n,e,t){e&&Object.keys(e).forEach(o=>{const i=e[o].on;1===i||2===i?p(t,o,function e(){return(n.S.get(this)||{})[o]},function e(t){a(n,this,o,t)}):6===i&&function c(n,e,t){Object.defineProperty(n,e,{configurable:!0,value:t})}(t,o,j)})}(n,e.U,t)}function M(n,e,t,o){return function(){const i=arguments;return function c(n,e,t){return new Promise(o=>{let i=e[t];i||(i=n.in.querySelector(t)),i||(i=e[t]=n.cn(t),n.ln(n.in,i)),i.componentOnReady(o)})}(n,e,t).then(n=>n[o].apply(n,i))}}const b="data-ssrv",$="data-ssrc",k="$",g={},C=[],W={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},x=n=>void 0!==n&&null!==n,E=n=>void 0===n||null===n,N=n=>n.toLowerCase(),j=()=>{},S=[],O="wc-",A={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},T="http://www.w3.org/1999/xlink";let L=!1;(function P(e,t,o,l,u,f){const s={html:{}},a={},p=o[e]=o[e]||{},m=function v(n,e,t){n.rn||(n.rn=((n,e,t,o)=>n.addEventListener(e,t,o)),n.un=((n,e,t,o)=>n.removeEventListener(e,t,o)));const o=new WeakMap,i={fn:t.documentElement,e:t.head,in:t.body,sn:!1,Z:n=>n.nodeType,cn:n=>t.createElement(n),an:(n,e)=>t.createElementNS(n,e),pn:n=>t.createTextNode(n),dn:n=>t.createComment(n),c:(n,e,t)=>n.insertBefore(e,t),mn:n=>n.remove(),ln:(n,e)=>n.appendChild(e),vn:n=>n.childNodes,o:n=>n.parentNode,hn:n=>n.nextSibling,G:n=>N(n.tagName),J:n=>n.textContent,yn:(n,e)=>n.textContent=e,F:(n,e)=>n.getAttribute(e),wn:(n,e,t)=>n.setAttribute(e,t),Mn:(n,e,t,o)=>n.setAttributeNS(e,t,o),bn:(n,e)=>n.removeAttribute(e),$n:(n,o)=>{return"child"===o?n.firstElementChild:"parent"===o?i.V(n):"body"===o?i.in:"document"===o?t:"window"===o?e:n},I:(e,t,c,l,r,u,f,s)=>{const a=t;let p=e,d=o.get(e);if(d&&d[a]&&d[a](),"string"==typeof u?p=i.$n(e,u):"object"==typeof u?p=u:(s=t.split(":")).length>1&&(p=i.$n(e,s[0]),t=s[1]),!p)return;let m=c;(s=t.split(".")).length>1&&(t=s[0],m=(n=>{n.keyCode===W[s[1]]&&c(n)})),f=i.sn?{capture:!!l,passive:!!r}:!!l,n.rn(p,t,m,f),d||o.set(e,d={}),d[a]=(()=>{p&&n.un(p,t,m,f),d[a]=null})},Q:(n,e)=>{const t=o.get(n);t&&(e?t[e]&&t[e]():Object.keys(t).forEach(n=>{t[n]&&t[n]()}))},kn:(n,e)=>n.attachShadow(e)};return i.t=!!i.fn.attachShadow,i.gn=((n,t,o)=>n&&n.dispatchEvent(new e.CustomEvent(t,o))),i.V=((n,e)=>{return(e=i.o(n))&&11===i.Z(e)?e.host:e}),i}(p,o,l);t.isServer=t.isPrerender=!(t.isClient=!0),t.window=o,t.location=o.location,t.document=l,t.resourcesUrl=t.publicPath=u,p.h=r,p.Context=t;const h=o.$definedCmps=o.$definedCmps||{},$={_:function g(n,e){e.mode||(e.mode=m.F(e,"mode")||t.mode),m.F(e,b)||function o(n,e){return n&&1===e.encapsulation}(m.t,n)||function i(n,e,t,o,c,l,r,u,f){for(t.$defaultHolder||e.c(t,t.$defaultHolder=e.dn(""),o[0]),f=0;f<o.length;f++)c=o[f],1===e.Z(c)&&null!=(l=e.F(c,"slot"))?(u=u||{})[l]?u[l].push(c):u[l]=[c]:r?r.push(c):r=[c];n.q.set(t,r),n.B.set(t,u)}($,m,e,e.childNodes),m.t||1!==n.encapsulation||(e.shadowRoot=e)},H:m,Cn:function C(n,e){h[n.n]||(h[n.n]=!0,w($,n,e.prototype,f),o.customElements.define(n.n,e))},Wn:t.emit,A:n=>s[m.G(n)],xn:n=>t[n],isClient:!0,X:n=>!(!h[m.G(n)]&&!$.A(n)),loadBundle:function j(n,e,t){if(n.O)t();else{const o="string"==typeof n.En?n.En:n.En[e],i=u+o+(function o(n,e){return 2===e.encapsulation||1===e.encapsulation&&!n}(m.t,n)?".sc":"")+".js";import(i).then(e=>{try{n.O=e[(n=>N(n).split("-").map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(""))(n.n)],function o(n,e,t){const o=t.style;if(o){const i=t.is+(t.styleMode||k);if(!e[i]){const t=n.cn("template");e[i]=t,t.innerHTML=`<style>${o}</style>`,n.ln(n.e,t)}}}(m,n,n.O)}catch(e){n.O=class{}}t()}).catch(n=>void 0)}},T:(n,e,t)=>void 0,Nn:n=>(function e(n,t,o){return{create:M(n,t,o,"create"),componentOnReady:M(n,t,o,"componentOnReady")}})(m,a,n),W:function S(e,t,o,i){function c(){for(;s.length>0;)s.shift()();o=!1}function l(n){for(n=u(),c();a.length>0&&u()-n<40;)a.shift()();(i=a.length>0)&&e.raf(r)}function r(n){for(c(),n=4+u();a.length>0&&u()<n;)a.shift()();(i=a.length>0)&&e.raf(l)}const u=()=>t.performance.now(),f=Promise.resolve(),s=[],a=[];return e.raf||(e.raf=n.requestAnimationFrame.bind(n)),{add:(n,t)=>{3===t?(s.push(n),o||(o=!0,f.then(c))):(a.push(n),i||(i=!0,e.raf(l)))}}}(p,o),p:new WeakMap,i:new WeakMap,q:new WeakMap,K:new WeakMap,en:new WeakMap,Y:new WeakMap,j:new WeakMap,N:new WeakMap,x:new WeakMap,C:new WeakMap,B:new WeakMap,tn:new WeakMap,jn:new WeakMap,R:new WeakMap,S:new WeakMap};$.render=function O(n,e){function t(o,i,l,r,u,f,v,h,y){if(!p&&"slot"===o.v){if((s||a)&&(m&&e.wn(i,m+"-slot",""),v=o.w&&o.w.name,h=x(v)?a&&a[v]:s,x(h))){for(n.nn=!0,r=0;r<h.length;r++)f=h[r],e.mn(f),e.ln(i,f),8!==f.nodeType&&(y=!0);!y&&o.y&&c(i,[],o.y),n.nn=!1}return null}if(x(o.d))o.k=e.pn(o.d);else{u=o.k=e.cn(o.v),d(n,null,o,L),null!==m&&u.Sn!==m&&e.wn(u,u.Sn=m,"");const i=o.y;if(i)for(r=0;r<i.length;++r)(f=t(i[r],u))&&e.ln(u,f)}return o.k}function o(n,o,i,c,l,r,u){const f=n.$defaultHolder&&e.o(n.$defaultHolder)||n;for(;c<=l;++c)u=i[c],x(u)&&(r=x(u.d)?e.pn(u.d):t(u,n),x(r)&&(u.k=r,e.c(f,r,o)))}function i(n,t,o){for(;t<=o;++t)x(n[t])&&e.mn(n[t].k)}function c(n,c,f){let s,a,p,d,m=0,v=0,h=c.length-1,y=c[0],w=c[h],M=f.length-1,b=f[0],$=f[M];for(;m<=h&&v<=M;)null==y?y=c[++m]:null==w?w=c[--h]:null==b?b=f[++v]:null==$?$=f[--M]:l(y,b)?(u(y,b),y=c[++m],b=f[++v]):l(w,$)?(u(w,$),w=c[--h],$=f[--M]):l(y,$)?(u(y,$),e.c(n,y.k,e.hn(w.k)),y=c[++m],$=f[--M]):l(w,b)?(u(w,b),e.c(n,w.k,y.k),w=c[--h],b=f[++v]):(E(s)&&(s=r(c,m,h)),a=s[b.M],E(a)?(d=t(b,n),b=f[++v]):((p=c[a]).v!==b.v?d=t(b,n):(u(p,b),c[a]=void 0,d=p.k),b=f[++v]),d&&e.c(y.k&&y.k.parentNode||n,d,y.k));m>h?o(n,null==f[M+1]?null:f[M+1].k,f,v,M):v>M&&i(c,m,h)}function l(n,e){return n.v===e.v&&n.M===e.M}function r(n,e,t){const o={};let i,c,l;for(i=e;i<=t;++i)null!=(l=n[i])&&void 0!==(c=l.M)&&(o.On=i);return o}function u(t,l){const r=l.k=t.k,u=t.y,f=l.y;let s;if(E(l.d))"slot"!==l.v&&d(n,t,l,L),x(u)&&x(f)?c(r,u,f):x(f)?(x(t.d)&&e.yn(r,""),o(r,null,f,0,f.length-1)):x(u)&&i(u,0,u.length-1);else if(s=n.q.get(r)){const t=s[0].parentElement;e.yn(t,l.d),n.q.set(r,[t.childNodes[0]])}else t.d!==l.d&&e.yn(r,l.d)}let f,s,a,p,m;return function n(t,o,i,c,l,r,d){return f=i,s=c,a=l,m="scoped"===r||"shadow"===r&&!e.t?"data-"+e.G(t.k):null,p="shadow"===r&&e.t,f||(p?t.k=e.kn(t.k,{mode:"open"}):m&&e.wn(t.k,m+"-host","")),u(t,o),o}}($,m);const A=m.fn;A.$rendered=!0,A.$activeLoading=[],A.$initLoad=(()=>{$.Y.set(A,p.loaded=$.L=!0),m.gn(o,"appload",{detail:{namespace:e}})}),function T(n,e,t){const o=t.querySelectorAll(`[${b}]`),i=o.length;let c,l,r,u,f,s;if(i>0)for(n.Y.set(t,!0),u=0;u<i;u++)for(c=o[u],l=e.F(c,b),(r={}).v=e.G(r.k=c),n.R.set(c,r),f=0,s=c.childNodes.length;f<s;f++)y(e,c.childNodes[f],r,l,!0)}($,m,A),$.D=i,(p.components||[]).map(n=>(function e(n,t,o,i){const l={n:n[0],U:{color:{An:"color"}}};l.En=n[1];const r=n[3];if(r)for(o=0;o<r.length;o++)i=r[o],l.U[i[0]]={on:i[1],Tn:!!i[2],An:"string"==typeof i[3]?i[3]:i[3]?i[0]:0,Ln:i[4]};return l.encapsulation=n[4],n[5]&&(l.z=n[5].map(c)),t[l.n]=l})(n,s)).forEach(n=>$.Cn(n,class extends HTMLElement{})),p.initialized=!0,m.gn(n,"appinit",{detail:{namespace:e}})})(o,t,n,e,resourcesUrl,hydratedCssClass)})(window,document,Context,namespace);
})({},"StencilApp","hydrated");