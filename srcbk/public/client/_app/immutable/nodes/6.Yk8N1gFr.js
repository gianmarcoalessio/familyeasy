import{s as Z,l as we,a as y,e as E,t as z,g as C,c as w,b as I,m as K,d as U,f as g,o as k,i as N,h as p,p as Y,q as De,j as M,v as Ce,w as Ve,z as Te,u as X,n as Ie,L as Se}from"../chunks/scheduler.335M-m3f.js";import{S as x,i as ee,b as qe,c as G,a as R,m as j,t as A,d as O,e as J,g as oe,f as ie}from"../chunks/index.K2G5X1vL.js";import{e as F}from"../chunks/each.6w4Ej4nR.js";import{k as Le}from"../chunks/servizi.ZOpgIISb.js";import{A as Ne}from"../chunks/Aggiungispesa._nfP4leu.js";import{S as ze}from"../chunks/Spesa.5CylqUMh.js";import{I as Ue,f as ce}from"../chunks/Input.BkZDYS4g.js";import{N as Ae}from"../chunks/Navigator.-HMff2nh.js";function ue(s,e,l){const t=s.slice();return t[18]=e[l],t}function fe(s,e,l){const t=s.slice();return t[21]=e[l],t}function de(s){let e,l=F(s[3]),t=[];for(let r=0;r<l.length;r+=1)t[r]=he(fe(s,l,r));return{c(){e=E("ul");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=w(r,"UL",{tabindex:!0,class:!0});var f=I(e);for(let n=0;n<t.length;n+=1)t[n].l(f);f.forEach(g),this.h()},h(){k(e,"tabindex","0"),k(e,"class","dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full")},m(r,f){N(r,e,f);for(let n=0;n<t.length;n+=1)t[n]&&t[n].m(e,null)},p(r,f){if(f&1032){l=F(r[3]);let n;for(n=0;n<l.length;n+=1){const h=fe(r,l,n);t[n]?t[n].p(h,f):(t[n]=he(h),t[n].c(),t[n].m(e,null))}for(;n<t.length;n+=1)t[n].d(1);t.length=l.length}},d(r){r&&g(e),X(t,r)}}}function he(s){let e,l,t=s[21].name+"",r,f,n,h;function o(){return s[14](s[21])}return{c(){e=E("li"),l=E("button"),r=z(t),f=y(),this.h()},l(u){e=w(u,"LI",{});var a=I(e);l=w(a,"BUTTON",{class:!0});var d=I(l);r=U(d,t),d.forEach(g),f=C(a),a.forEach(g),this.h()},h(){k(l,"class","w-full text-left")},m(u,a){N(u,e,a),p(e,l),p(l,r),p(e,f),n||(h=Y(l,"click",o),n=!0)},p(u,a){s=u,a&8&&t!==(t=s[21].name+"")&&M(r,t)},d(u){u&&g(e),n=!1,h()}}}function _e(s){let e,l,t=(s[0]?s[0].name:"Seleziona un mese")+"",r,f,n,h,o=s[4]&&me(s);return{c(){e=E("div"),l=E("div"),r=z(t),f=y(),o&&o.c(),this.h()},l(u){e=w(u,"DIV",{class:!0});var a=I(e);l=w(a,"DIV",{tabindex:!0,role:!0,class:!0});var d=I(l);r=U(d,t),d.forEach(g),f=C(a),o&&o.l(a),a.forEach(g),this.h()},h(){k(l,"tabindex","0"),k(l,"role","button"),k(l,"class","btn w-40"),k(e,"class","dropdown")},m(u,a){N(u,e,a),p(e,l),p(l,r),p(e,f),o&&o.m(e,null),n||(h=Y(e,"click",s[17]),n=!0)},p(u,a){a&1&&t!==(t=(u[0]?u[0].name:"Seleziona un mese")+"")&&M(r,t),u[4]?o?o.p(u,a):(o=me(u),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},d(u){u&&g(e),o&&o.d(),n=!1,h()}}}function me(s){let e,l=F(s[2]),t=[];for(let r=0;r<l.length;r+=1)t[r]=pe(ue(s,l,r));return{c(){e=E("ul");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=w(r,"UL",{tabindex:!0,class:!0});var f=I(e);for(let n=0;n<t.length;n+=1)t[n].l(f);f.forEach(g),this.h()},h(){k(e,"tabindex","0"),k(e,"class","dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full")},m(r,f){N(r,e,f);for(let n=0;n<t.length;n+=1)t[n]&&t[n].m(e,null)},p(r,f){if(f&516){l=F(r[2]);let n;for(n=0;n<l.length;n+=1){const h=ue(r,l,n);t[n]?t[n].p(h,f):(t[n]=pe(h),t[n].c(),t[n].m(e,null))}for(;n<t.length;n+=1)t[n].d(1);t.length=l.length}},d(r){r&&g(e),X(t,r)}}}function pe(s){let e,l,t=s[18].name+"",r,f,n,h;function o(){return s[16](s[18])}return{c(){e=E("li"),l=E("button"),r=z(t),f=y(),this.h()},l(u){e=w(u,"LI",{});var a=I(e);l=w(a,"BUTTON",{class:!0});var d=I(l);r=U(d,t),d.forEach(g),f=C(a),a.forEach(g),this.h()},h(){k(l,"class","w-full text-left")},m(u,a){N(u,e,a),p(e,l),p(l,r),p(e,f),n||(h=Y(l,"click",o),n=!0)},p(u,a){s=u,a&4&&t!==(t=s[18].name+"")&&M(r,t)},d(u){u&&g(e),n=!1,h()}}}function Me(s){let e,l,t,r,f,n="Tutte",h,o,u,a=(s[1]?s[1].name:"Seleziona un anno")+"",d,v,m,q,V,$;function D(c){s[11](c)}let T={placeholder:"Cerca la spesa",inputclass:"my-4 mx-2"};s[6].q!==void 0&&(T.value=s[6].q),e=new Ue({props:T}),we.push(()=>qe(e,"value",D)),e.$on("change",s[12]);let _=s[5]&&de(s),i=s[6].year&&_e(s);return{c(){G(e.$$.fragment),t=y(),r=E("div"),f=E("button"),f.textContent=n,h=y(),o=E("div"),u=E("div"),d=z(a),v=y(),_&&_.c(),m=y(),i&&i.c(),this.h()},l(c){R(e.$$.fragment,c),t=C(c),r=w(c,"DIV",{class:!0});var b=I(r);f=w(b,"BUTTON",{class:!0,"data-svelte-h":!0}),K(f)!=="svelte-1ytx9so"&&(f.textContent=n),h=C(b),o=w(b,"DIV",{class:!0});var S=I(o);u=w(S,"DIV",{tabindex:!0,role:!0,class:!0});var H=I(u);d=U(H,a),H.forEach(g),v=C(S),_&&_.l(S),S.forEach(g),m=C(b),i&&i.l(b),b.forEach(g),this.h()},h(){k(f,"class","btn"),k(u,"tabindex","0"),k(u,"role","button"),k(u,"class","btn w-40"),k(o,"class","dropdown"),k(r,"class","mb-4")},m(c,b){j(e,c,b),N(c,t,b),N(c,r,b),p(r,f),p(r,h),p(r,o),p(o,u),p(u,d),p(o,v),_&&_.m(o,null),p(r,m),i&&i.m(r,null),q=!0,V||($=[Y(f,"click",s[13]),Y(o,"click",s[15])],V=!0)},p(c,[b]){const S={};!l&&b&64&&(l=!0,S.value=c[6].q,De(()=>l=!1)),e.$set(S),(!q||b&2)&&a!==(a=(c[1]?c[1].name:"Seleziona un anno")+"")&&M(d,a),c[5]?_?_.p(c,b):(_=de(c),_.c(),_.m(o,null)):_&&(_.d(1),_=null),c[6].year?i?i.p(c,b):(i=_e(c),i.c(),i.m(r,null)):i&&(i.d(1),i=null)},i(c){q||(A(e.$$.fragment,c),q=!0)},o(c){O(e.$$.fragment,c),q=!1},d(c){c&&(g(t),g(r)),J(e,c),_&&_.d(),i&&i.d(),V=!1,Ce($)}}}function Be(s,e,l){let t=Ve(),r=null,f=null,n=[],h=[],o=!1,u=!1,a={year:null,month:null};Te(()=>{l(2,n=[{id:1,name:"Gennaio"},{id:2,name:"Febbraio"},{id:3,name:"Marzo"},{id:4,name:"Aprile"},{id:5,name:"Maggio"},{id:6,name:"Giugno"},{id:7,name:"Luglio"},{id:8,name:"Agosto"},{id:9,name:"Settembre"},{id:10,name:"Ottobre"},{id:11,name:"Novembre"},{id:12,name:"Dicembre"}]);const c=new Date().getFullYear();l(3,h=Array.from({length:10},(b,S)=>({id:c-S,name:`${c-S}`})))});function d(c){l(1,f=null),l(0,r=null),l(6,a={year:null,month:null,q:""}),t("filtra",a)}function v(c){l(0,r=c),l(6,a.month=c.id,a),t("filtra",a)}function m(c){l(1,f=c),l(6,a.year=c.id,a),t("filtra",a)}function q(c){s.$$.not_equal(a.q,c)&&(a.q=c,l(6,a))}return[r,f,n,h,o,u,a,t,d,v,m,q,()=>{t("filtra",a)},()=>d(),c=>m(c),()=>{l(5,u=!u)},c=>v(c),()=>{l(4,o=!o)}]}class Oe extends x{constructor(e){super(),ee(this,e,Be,Me,Z,{})}}function ge(s,e,l){const t=s.slice();return t[15]=e[l],t}function be(s,e,l){const t=s.slice();return t[18]=e[l],t[19]=e,t[20]=l,t}function ve(s){let e,l,t;function r(n){s[6](n)}let f={open:!0};return s[4]!==void 0&&(f.expense=s[4]),e=new ze({props:f}),we.push(()=>qe(e,"expense",r)),e.$on("close",s[7]),e.$on("reload",s[8]),{c(){G(e.$$.fragment)},l(n){R(e.$$.fragment,n)},m(n,h){j(e,n,h),t=!0},p(n,h){const o={};!l&&h&16&&(l=!0,o.expense=n[4],De(()=>l=!1)),e.$set(o)},i(n){t||(A(e.$$.fragment,n),t=!0)},o(n){O(e.$$.fragment,n),t=!1},d(n){J(e,n)}}}function ke(s){let e,l;return e=new Ne({props:{open:!0}}),e.$on("close",s[9]),e.$on("reload",s[10]),{c(){G(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,r){j(e,t,r),l=!0},p:Ie,i(t){l||(A(e.$$.fragment,t),l=!0)},o(t){O(e.$$.fragment,t),l=!1},d(t){J(e,t)}}}function Pe(s){let e=Q(s[15].quote)+"",l;return{c(){l=z(e)},l(t){l=U(t,e)},m(t,r){N(t,l,r)},p(t,r){r&2&&e!==(e=Q(t[15].quote)+"")&&M(l,e)},d(t){t&&g(l)}}}function Ye(s){let e,l,t=Q(s[15].quote)+"",r,f,n,h,o,u=F(s[15].quote),a=[];for(let d=0;d<u.length;d+=1)a[d]=$e(be(s,u,d));return{c(){e=E("div"),l=E("div"),r=z(t),f=y(),n=E("ul");for(let d=0;d<a.length;d+=1)a[d].c();this.h()},l(d){e=w(d,"DIV",{class:!0});var v=I(e);l=w(v,"DIV",{tabindex:!0,role:!0,class:!0});var m=I(l);r=U(m,t),m.forEach(g),f=C(v),n=w(v,"UL",{tabindex:!0,class:!0});var q=I(n);for(let V=0;V<a.length;V+=1)a[V].l(q);q.forEach(g),v.forEach(g),this.h()},h(){k(l,"tabindex","0"),k(l,"role","button"),k(l,"class","btn btn-primary m-1"),k(n,"tabindex","0"),k(n,"class","dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"),k(e,"class","dropdown")},m(d,v){N(d,e,v),p(e,l),p(l,r),p(e,f),p(e,n);for(let m=0;m<a.length;m+=1)a[m]&&a[m].m(n,null);h||(o=Y(l,"click",Se(He)),h=!0)},p(d,v){if(v&2&&t!==(t=Q(d[15].quote)+"")&&M(r,t),v&2){u=F(d[15].quote);let m;for(m=0;m<u.length;m+=1){const q=be(d,u,m);a[m]?a[m].p(q,v):(a[m]=$e(q),a[m].c(),a[m].m(n,null))}for(;m<a.length;m+=1)a[m].d(1);a.length=u.length}},d(d){d&&g(e),X(a,d),h=!1,o()}}}function $e(s){let e,l,t,r,f=s[18].user.username+"",n,h,o,u=W(s[18].cost)+"",a,d,v,m,q,V,$;function D(){s[13].call(m,s[19],s[20])}return{c(){e=E("li"),l=E("div"),t=E("div"),r=z("@"),n=z(f),h=y(),o=E("div"),a=z(u),v=y(),m=E("input"),q=y(),this.h()},l(T){e=w(T,"LI",{});var _=I(e);l=w(_,"DIV",{class:!0});var i=I(l);t=w(i,"DIV",{class:!0});var c=I(t);r=U(c,"@"),n=U(c,f),c.forEach(g),h=C(i),o=w(i,"DIV",{class:!0});var b=I(o);a=U(b,u),b.forEach(g),v=C(i),m=w(i,"INPUT",{type:!0,class:!0}),i.forEach(g),q=C(_),_.forEach(g),this.h()},h(){k(t,"class","flex-1"),k(o,"class",d="w-12 "+(s[18].rimborso?"text-success":"text-error")),k(m,"type","checkbox"),m.disabled=!0,k(m,"class","toggle"),k(l,"class","flex flex-row space-x-2 items-center")},m(T,_){N(T,e,_),p(e,l),p(l,t),p(t,r),p(t,n),p(l,h),p(l,o),p(o,a),p(l,v),p(l,m),m.checked=s[18].rimborso,p(e,q),V||($=Y(m,"change",D),V=!0)},p(T,_){s=T,_&2&&f!==(f=s[18].user.username+"")&&M(n,f),_&2&&u!==(u=W(s[18].cost)+"")&&M(a,u),_&2&&d!==(d="w-12 "+(s[18].rimborso?"text-success":"text-error"))&&k(o,"class",d),_&2&&(m.checked=s[18].rimborso)},d(T){T&&g(e),V=!1,$()}}}function Ee(s){let e,l,t=ce(s[15].date)+"",r,f,n,h=W(s[15].totalcost)+"",o,u,a,d,v,m=s[15].description+"",q,V,$,D,T=s[15].category.name+"",_,i,c,b;function S(P,L){return P[15].quote.length>1?Ye:Pe}let H=S(s),B=H(s);function ye(){return s[14](s[15])}return{c(){e=E("tr"),l=E("td"),r=z(t),f=y(),n=E("td"),o=z(h),u=y(),a=E("td"),B.c(),d=y(),v=E("td"),q=z(m),V=y(),$=E("td"),D=E("div"),_=z(T),i=y(),this.h()},l(P){e=w(P,"TR",{class:!0});var L=I(e);l=w(L,"TD",{});var te=I(l);r=U(te,t),te.forEach(g),f=C(L),n=w(L,"TD",{});var le=I(n);o=U(le,h),le.forEach(g),u=C(L),a=w(L,"TD",{class:!0});var ne=I(a);B.l(ne),ne.forEach(g),d=C(L),v=w(L,"TD",{class:!0});var se=I(v);q=U(se,m),se.forEach(g),V=C(L),$=w(L,"TD",{});var re=I($);D=w(re,"DIV",{class:!0});var ae=I(D);_=U(ae,T),ae.forEach(g),re.forEach(g),i=C(L),L.forEach(g),this.h()},h(){k(a,"class","hidden md:table-cell"),k(v,"class","hidden md:table-cell"),k(D,"class","badge badge-secondary"),k(e,"class","hover:bg-neutral-content cursor-pointer")},m(P,L){N(P,e,L),p(e,l),p(l,r),p(e,f),p(e,n),p(n,o),p(e,u),p(e,a),B.m(a,null),p(e,d),p(e,v),p(v,q),p(e,V),p(e,$),p($,D),p(D,_),p(e,i),c||(b=Y(e,"click",ye),c=!0)},p(P,L){s=P,L&2&&t!==(t=ce(s[15].date)+"")&&M(r,t),L&2&&h!==(h=W(s[15].totalcost)+"")&&M(o,h),H===(H=S(s))&&B?B.p(s,L):(B.d(1),B=H(s),B&&(B.c(),B.m(a,null))),L&2&&m!==(m=s[15].description+"")&&M(q,m),L&2&&T!==(T=s[15].category.name+"")&&M(_,T)},d(P){P&&g(e),B.d(),c=!1,b()}}}function Fe(s){let e,l,t,r="Aggiungi Spesa",f,n,h,o,u,a='<tr><th>Data</th> <th>Totale</th> <th class="hidden md:table-cell">Partecipanti</th> <th class="hidden md:table-cell">Descrizione</th> <th>Categoria</th></tr>',d,v,m,q,V,$=s[2]&&ve(s),D=s[3]&&ke(s);n=new Oe({}),n.$on("filtra",s[12]);let T=F(s[1]),_=[];for(let i=0;i<T.length;i+=1)_[i]=Ee(ge(s,T,i));return{c(){$&&$.c(),e=y(),D&&D.c(),l=y(),t=E("button"),t.textContent=r,f=y(),G(n.$$.fragment),h=y(),o=E("table"),u=E("thead"),u.innerHTML=a,d=y(),v=E("tbody");for(let i=0;i<_.length;i+=1)_[i].c();this.h()},l(i){$&&$.l(i),e=C(i),D&&D.l(i),l=C(i),t=w(i,"BUTTON",{class:!0,"data-svelte-h":!0}),K(t)!=="svelte-11ed6hy"&&(t.textContent=r),f=C(i),R(n.$$.fragment,i),h=C(i),o=w(i,"TABLE",{class:!0});var c=I(o);u=w(c,"THEAD",{"data-svelte-h":!0}),K(u)!=="svelte-1ccmetn"&&(u.innerHTML=a),d=C(c),v=w(c,"TBODY",{});var b=I(v);for(let S=0;S<_.length;S+=1)_[S].l(b);b.forEach(g),c.forEach(g),this.h()},h(){k(t,"class","btn btn-primary"),k(o,"class","table table-zebra w-full")},m(i,c){$&&$.m(i,c),N(i,e,c),D&&D.m(i,c),N(i,l,c),N(i,t,c),N(i,f,c),j(n,i,c),N(i,h,c),N(i,o,c),p(o,u),p(o,d),p(o,v);for(let b=0;b<_.length;b+=1)_[b]&&_[b].m(v,null);m=!0,q||(V=Y(t,"click",s[11]),q=!0)},p(i,[c]){if(i[2]?$?($.p(i,c),c&4&&A($,1)):($=ve(i),$.c(),A($,1),$.m(e.parentNode,e)):$&&(oe(),O($,1,1,()=>{$=null}),ie()),i[3]?D?(D.p(i,c),c&8&&A(D,1)):(D=ke(i),D.c(),A(D,1),D.m(l.parentNode,l)):D&&(oe(),O(D,1,1,()=>{D=null}),ie()),c&22){T=F(i[1]);let b;for(b=0;b<T.length;b+=1){const S=ge(i,T,b);_[b]?_[b].p(S,c):(_[b]=Ee(S),_[b].c(),_[b].m(v,null))}for(;b<_.length;b+=1)_[b].d(1);_.length=T.length}},i(i){m||(A($),A(D),A(n.$$.fragment,i),m=!0)},o(i){O($),O(D),O(n.$$.fragment,i),m=!1},d(i){i&&(g(e),g(l),g(t),g(f),g(h),g(o)),$&&$.d(i),D&&D.d(i),J(n,i),X(_,i),q=!1,V()}}}function Q(s){return s.length===1?`${s[0].user.firstname} ${s[0].user.lastname}`:s.length===0?"Nessuno":"Partecipanti"}function W(s){return Number(s).toLocaleString("it-IT",{style:"currency",currency:"EUR"})}const He=()=>{};function Ge(s,e,l){let t=[],r=!1,f=!1,n={},h={};Te(async()=>{await o()});async function o(){console.log("reload",h),l(1,t=await Le(h))}function u(T){n=T,l(4,n)}const a=()=>{l(2,r=!1)},d=()=>{l(2,r=!1),o()},v=()=>{l(3,f=!1)},m=()=>{l(3,f=!1),o()},q=()=>{l(3,f=!0)},V=async T=>{l(5,h=T.detail),await o()};function $(T,_){T[_].rimborso=this.checked,l(1,t)}return[o,t,r,f,n,h,u,a,d,v,m,q,V,$,T=>{l(4,n=T),l(2,r=!0)}]}class Re extends x{constructor(e){super(),ee(this,e,Ge,Fe,Z,{reload:0})}get reload(){return this.$$.ctx[0]}}function je(s){let e,l,t,r,f="Spese",n,h,o,u;return l=new Ae({}),o=new Re({}),{c(){e=E("div"),G(l.$$.fragment),t=y(),r=E("div"),r.textContent=f,n=y(),h=E("div"),G(o.$$.fragment),this.h()},l(a){e=w(a,"DIV",{class:!0});var d=I(e);R(l.$$.fragment,d),t=C(d),r=w(d,"DIV",{class:!0,"data-svelte-h":!0}),K(r)!=="svelte-1kqp0vg"&&(r.textContent=f),d.forEach(g),n=C(a),h=w(a,"DIV",{class:!0});var v=I(h);R(o.$$.fragment,v),v.forEach(g),this.h()},h(){k(r,"class","text-6xl font-bold"),k(e,"class","flex flex-col space-y-4 md:mx-24 mx-2 mt-4"),k(h,"class","grid md:gap-0 grid-cols-1 items-center md:mx-24 mx-4 my-4")},m(a,d){N(a,e,d),j(l,e,null),p(e,t),p(e,r),N(a,n,d),N(a,h,d),j(o,h,null),u=!0},p:Ie,i(a){u||(A(l.$$.fragment,a),A(o.$$.fragment,a),u=!0)},o(a){O(l.$$.fragment,a),O(o.$$.fragment,a),u=!1},d(a){a&&(g(e),g(n),g(h)),J(l),J(o)}}}class tt extends x{constructor(e){super(),ee(this,e,null,je,Z,{})}}export{tt as component};