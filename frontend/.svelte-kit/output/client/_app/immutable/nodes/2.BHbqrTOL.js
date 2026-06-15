import{r as Lt,s as wn,n as Ct,c as at,x as mt,p as si,d as jc,t as Yc,e as $r,o as cc}from"../chunks/CkO2QsTZ.js";import{l as an,k as on,S as Cn,i as Rn,d as D,s as Qe,a as Re,b as g,y as Ge,w as F,x as Ce,c as C,e as ie,z as Le,g as J,f as ze,o as An,h as R,j as Q,t as ke,A as Vt,B as aa,C as He,D as ot,E as $i,F as Ot,G as ti,q as Gn,m as xa,n as Ea,u as Hn,v as Wn,r as Xn}from"../chunks/DFkIi2GE.js";import{w as Bt}from"../chunks/DFIh0oqn.js";function _t(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function Kc(i,e){on(i,1,1,()=>{e.delete(i.key)})}function Zc(i,e,t,n,r,s,a,o,c,l,u,h){let f=i.length,m=s.length,_=f;const v={};for(;_--;)v[i[_].key]=_;const p=[],d=new Map,b=new Map,M=[];for(_=m;_--;){const y=h(r,s,_),N=t(y);let k=a.get(N);k?M.push(()=>k.p(y,e)):(k=l(N,y),k.c()),d.set(N,p[_]=k),N in v&&b.set(N,Math.abs(_-v[N]))}const P=new Set,L=new Set;function A(y){an(y,1),y.m(o,u),a.set(y.key,y),u=y.first,m--}for(;f&&m;){const y=p[m-1],N=i[f-1],k=y.key,x=N.key;y===N?(u=y.first,f--,m--):d.has(x)?!a.has(k)||P.has(k)?A(y):L.has(x)?f--:b.get(k)>b.get(x)?(L.add(k),A(y)):(P.add(x),f--):(c(N,a),f--)}for(;f--;){const y=i[f];d.has(y.key)||c(y,a)}for(;m;)A(p[m-1]);return Lt(M),p}const $c=!1,Jc=!0,lg=Object.freeze(Object.defineProperty({__proto__:null,prerender:Jc,ssr:$c},Symbol.toStringTag,{value:"Module"})),Si=Bt(null),Ji=Bt([]),vi=Bt([]),xr=Bt([]),Er=Bt([]),js=Bt(null),Ys=Bt(null),Ks=Bt({mode:"voxel",isosurfaceValue:0,colorMin:0,colorMax:100}),Mr=Bt([]);function $e(i,e="info",t=4e3){const n=Date.now();Mr.update(r=>[...r,{id:n,message:i,type:e}]),t>0&&setTimeout(()=>{Mr.update(r=>r.filter(s=>s.id!==n))},t)}const Yr=Bt([]),cr=Bt({status:"idle",progress:0,runId:null}),_r=Bt({}),gr=Bt({}),vr=Bt({enabled:!1,normal:[0,0,-1],position:[0,0,0]}),Ma=Bt(null),Sa=Bt("boreholes"),nn=Bt(null),Qn=Bt({orthoImage:null,demImage:null,opacity:1,visible:!0}),Qc="/api";async function dn(i,e,t=null,n={}){const r=`${Qc}${e}`,s={};t&&!(t instanceof FormData)&&(s["Content-Type"]="application/json");const a=await fetch(r,{method:i,headers:s,body:t instanceof FormData?t:t?JSON.stringify(t):null,...n});if(a.status===204)return null;if(!a.ok){const c=a.headers.get("content-type");if(c&&c.includes("application/json")){const l=await a.json().catch(()=>({detail:a.statusText}));throw new Error(l.detail||`请求失败 (${a.status}): ${a.statusText}`)}throw new Error(`请求失败 (${a.status}): ${a.statusText}`)}if(n.raw)return a;const o=a.headers.get("content-type");return o&&o.includes("application/json")?a.json():a}const vt={get:(i,e)=>dn("GET",i,null,e),post:(i,e,t)=>dn("POST",i,e,t),put:(i,e,t)=>dn("PUT",i,e,t),patch:(i,e,t)=>dn("PATCH",i,e,t),delete:(i,e)=>dn("DELETE",i,null,e),uploadCsv:(i,e)=>{const t=new FormData;return t.append("file",e),dn("POST",`/projects/${i}/boreholes/import-csv`,t)},exportGltf:i=>dn("GET",`/export/gltf/${i}`,null,{raw:!0}),exportProfilePng:i=>dn("GET",`/export/profile/${i}/png`,null,{raw:!0}),exportProfileSvg:i=>dn("GET",`/export/profile/${i}/svg`,null,{raw:!0}),exportStatsExcel:i=>dn("GET",`/export/stats/${i}/excel`,null,{raw:!0}),exportReportPdf:i=>dn("GET",`/export/report/${i}/pdf`,null,{raw:!0}),downloadBlob:async(i,e)=>{const n=await(await dn("GET",i,null,{raw:!0})).blob(),r=URL.createObjectURL(n),s=document.createElement("a");s.href=r,s.download=e,s.click(),URL.revokeObjectURL(r)}};function ba(i,e,t){const n=i.slice();return n[38]=e[t],n[39]=e,n[40]=t,n}function ya(i,e,t){const n=i.slice();return n[41]=e[t],n}function Ta(i,e,t){const n=i.slice();return n[44]=e[t],n}function Aa(i,e,t){const n=i.slice();return n[47]=e[t],n}function wa(i,e,t){const n=i.slice();n[38]=e[t];const r=n[7].find(function(...a){return i[22](n[38],...a)});return n[50]=r,n}function Ca(i,e,t){const n=i.slice();return n[50]=e[t],n[53]=e,n[54]=t,n}function Ra(i){let e,t,n="岩性颜色映射",r,s,a,o=_t(i[7]),c=[];for(let l=0;l<o.length;l+=1)c[l]=Pa(Ca(i,o,l));return{c(){e=R("div"),t=R("h4"),t.textContent=n,r=Q();for(let l=0;l<c.length;l+=1)c[l].c();s=Q(),a=R("hr"),this.h()},l(l){e=C(l,"DIV",{class:!0});var u=ie(e);t=C(u,"H4",{style:!0,"data-svelte-h":!0}),Le(t)!=="svelte-i0dhp9"&&(t.textContent=n),r=J(u);for(let h=0;h<c.length;h+=1)c[h].l(u);u.forEach(D),s=J(l),a=C(l,"HR",{style:!0}),this.h()},h(){Ce(t,"margin-bottom","8px"),Ce(t,"font-size","13px"),F(e,"class","color-editor svelte-pmzzll"),Ce(a,"border-color","var(--border)"),Ce(a,"margin","12px 0")},m(l,u){Re(l,e,u),g(e,t),g(e,r);for(let h=0;h<c.length;h+=1)c[h]&&c[h].m(e,null);Re(l,s,u),Re(l,a,u)},p(l,u){if(u[0]&16512){o=_t(l[7]);let h;for(h=0;h<o.length;h+=1){const f=Ca(l,o,h);c[h]?c[h].p(f,u):(c[h]=Pa(f),c[h].c(),c[h].m(e,null))}for(;h<c.length;h+=1)c[h].d(1);c.length=o.length}},d(l){l&&(D(e),D(s),D(a)),Vt(c,l)}}}function Pa(i){let e,t,n,r,s=i[50].name+"",a,o,c,l;function u(){i[17].call(t,i[53],i[54])}function h(){return i[18](i[50])}return{c(){e=R("div"),t=R("input"),n=Q(),r=R("span"),a=ke(s),o=Q(),this.h()},l(f){e=C(f,"DIV",{class:!0});var m=ie(e);t=C(m,"INPUT",{type:!0}),n=J(m),r=C(m,"SPAN",{});var _=ie(r);a=ze(_,s),_.forEach(D),o=J(m),m.forEach(D),this.h()},h(){F(t,"type","color"),F(e,"class","color-row svelte-pmzzll")},m(f,m){Re(f,e,m),g(e,t),He(t,i[50].color),g(e,n),g(e,r),g(r,a),g(e,o),c||(l=[Ge(t,"input",u),Ge(t,"change",h)],c=!0)},p(f,m){i=f,m[0]&128&&He(t,i[50].color),m[0]&128&&s!==(s=i[50].name+"")&&Qe(a,s)},d(f){f&&D(e),c=!1,Lt(l)}}}function eu(i){let e,t=_t(i[8]),n=[];for(let r=0;r<t.length;r+=1)n[r]=Da(Aa(i,t,r));return{c(){e=R("div");for(let r=0;r<n.length;r+=1)n[r].c();this.h()},l(r){e=C(r,"DIV",{class:!0});var s=ie(e);for(let a=0;a<n.length;a+=1)n[a].l(s);s.forEach(D),this.h()},h(){F(e,"class","borehole-list")},m(r,s){Re(r,e,s);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(e,null)},p(r,s){if(s[0]&11680){t=_t(r[8]);let a;for(a=0;a<t.length;a+=1){const o=Aa(r,t,a);n[a]?n[a].p(o,s):(n[a]=Da(o),n[a].c(),n[a].m(e,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=t.length}},d(r){r&&D(e),Vt(n,r)}}}function tu(i){let e,t='<p>暂无钻孔数据</p> <p style="font-size:12px;color:var(--text-muted);margin-top:4px;">点击&quot;导入CSV&quot;添加钻孔数据</p>';return{c(){e=R("div"),e.innerHTML=t,this.h()},l(n){e=C(n,"DIV",{class:!0,"data-svelte-h":!0}),Le(e)!=="svelte-b2zuvh"&&(e.innerHTML=t),this.h()},h(){F(e,"class","empty-state svelte-pmzzll")},m(n,r){Re(n,e,r)},p:Ct,d(n){n&&D(e)}}}function La(i){let e,t;return{c(){e=R("div"),this.h()},l(n){e=C(n,"DIV",{class:!0,style:!0,title:!0});var r=ie(e);r.forEach(D),this.h()},h(){var n;F(e,"class","layer-chip svelte-pmzzll"),Ce(e,"background",((n=i[50])==null?void 0:n.color)||"#888"),Ce(e,"flex",i[38].bottom_depth-i[38].top_depth),F(e,"title",t=i[38].lithology_name+": "+i[38].top_depth+"-"+i[38].bottom_depth+"m")},m(n,r){Re(n,e,r)},p(n,r){var s;r[0]&384&&Ce(e,"background",((s=n[50])==null?void 0:s.color)||"#888"),r[0]&256&&Ce(e,"flex",n[38].bottom_depth-n[38].top_depth),r[0]&256&&t!==(t=n[38].lithology_name+": "+n[38].top_depth+"-"+n[38].bottom_depth+"m")&&F(e,"title",t)},d(n){n&&D(e)}}}function Da(i){let e,t,n,r,s,a,o,c=i[47].hole_id+"",l,u,h,f,m="编辑",_,v,p="删除",d,b,M,P,L=i[47].longitude.toFixed(5)+"",A,y,N=i[47].latitude.toFixed(5)+"",k,x,T,K,se=i[47].elevation.toFixed(2)+"",B,ee,Z,w,j=i[47].layers.length+"",Y,W,te,re,me,q,V;function le(){return i[19](i[47])}function ae(){return i[20](i[47])}function H(){return i[21](i[47])}let ne=_t(i[47].layers),X=[];for(let xe=0;xe<ne.length;xe+=1)X[xe]=La(wa(i,ne,xe));return{c(){e=R("div"),t=R("div"),n=R("label"),r=R("input"),a=Q(),o=R("strong"),l=ke(c),u=Q(),h=R("div"),f=R("button"),f.textContent=m,_=Q(),v=R("button"),v.textContent=p,d=Q(),b=R("div"),M=R("span"),P=ke("坐标: "),A=ke(L),y=ke(", "),k=ke(N),x=Q(),T=R("span"),K=ke("高程: "),B=ke(se),ee=ke("m"),Z=Q(),w=R("span"),Y=ke(j),W=ke(" 层"),te=Q(),re=R("div");for(let xe=0;xe<X.length;xe+=1)X[xe].c();me=Q(),this.h()},l(xe){e=C(xe,"DIV",{class:!0});var O=ie(e);t=C(O,"DIV",{class:!0});var ye=ie(t);n=C(ye,"LABEL",{class:!0});var ce=ie(n);r=C(ce,"INPUT",{type:!0}),a=J(ce),o=C(ce,"STRONG",{});var pe=ie(o);l=ze(pe,c),pe.forEach(D),ce.forEach(D),u=J(ye),h=C(ye,"DIV",{class:!0});var de=ie(h);f=C(de,"BUTTON",{class:!0,"data-svelte-h":!0}),Le(f)!=="svelte-qjn1px"&&(f.textContent=m),_=J(de),v=C(de,"BUTTON",{class:!0,"data-svelte-h":!0}),Le(v)!=="svelte-3c3ohz"&&(v.textContent=p),de.forEach(D),ye.forEach(D),d=J(O),b=C(O,"DIV",{class:!0});var oe=ie(b);M=C(oe,"SPAN",{});var G=ie(M);P=ze(G,"坐标: "),A=ze(G,L),y=ze(G,", "),k=ze(G,N),G.forEach(D),x=J(oe),T=C(oe,"SPAN",{});var S=ie(T);K=ze(S,"高程: "),B=ze(S,se),ee=ze(S,"m"),S.forEach(D),Z=J(oe),w=C(oe,"SPAN",{});var E=ie(w);Y=ze(E,j),W=ze(E," 层"),E.forEach(D),oe.forEach(D),te=J(O),re=C(O,"DIV",{class:!0});var $=ie(re);for(let ge=0;ge<X.length;ge+=1)X[ge].l($);$.forEach(D),me=J(O),O.forEach(D),this.h()},h(){F(r,"type","checkbox"),r.checked=s=i[5].includes(i[47].id),F(n,"class","checkbox-label"),F(f,"class","btn-secondary btn-sm"),F(v,"class","btn-danger btn-sm"),F(h,"class","card-actions svelte-pmzzll"),F(t,"class","card-header svelte-pmzzll"),F(b,"class","card-info svelte-pmzzll"),F(re,"class","layer-bar svelte-pmzzll"),F(e,"class","borehole-card svelte-pmzzll"),$i(e,"selected",i[5].includes(i[47].id))},m(xe,O){Re(xe,e,O),g(e,t),g(t,n),g(n,r),g(n,a),g(n,o),g(o,l),g(t,u),g(t,h),g(h,f),g(h,_),g(h,v),g(e,d),g(e,b),g(b,M),g(M,P),g(M,A),g(M,y),g(M,k),g(b,x),g(b,T),g(T,K),g(T,B),g(T,ee),g(b,Z),g(b,w),g(w,Y),g(w,W),g(e,te),g(e,re);for(let ye=0;ye<X.length;ye+=1)X[ye]&&X[ye].m(re,null);g(e,me),q||(V=[Ge(r,"change",le),Ge(f,"click",ae),Ge(v,"click",H)],q=!0)},p(xe,O){if(i=xe,O[0]&288&&s!==(s=i[5].includes(i[47].id))&&(r.checked=s),O[0]&256&&c!==(c=i[47].hole_id+"")&&Qe(l,c),O[0]&256&&L!==(L=i[47].longitude.toFixed(5)+"")&&Qe(A,L),O[0]&256&&N!==(N=i[47].latitude.toFixed(5)+"")&&Qe(k,N),O[0]&256&&se!==(se=i[47].elevation.toFixed(2)+"")&&Qe(B,se),O[0]&256&&j!==(j=i[47].layers.length+"")&&Qe(Y,j),O[0]&384){ne=_t(i[47].layers);let ye;for(ye=0;ye<ne.length;ye+=1){const ce=wa(i,ne,ye);X[ye]?X[ye].p(ce,O):(X[ye]=La(ce),X[ye].c(),X[ye].m(re,null))}for(;ye<X.length;ye+=1)X[ye].d(1);X.length=ne.length}O[0]&288&&$i(e,"selected",i[5].includes(i[47].id))},d(xe){xe&&D(e),Vt(X,xe),q=!1,Lt(V)}}}function Ia(i){let e,t,n,r="导入钻孔CSV数据",s,a,o=`CSV字段: hole_id/孔号, longitude/经度, latitude/纬度, elevation/高程,
                layer_no/层号, top_depth/层顶深度, bottom_depth/层底深度, lithology/岩性,
                spt_n/标贯N值, water_content/含水量, compression_modulus/压缩模量`,c,l,u,h,f,m,_,v="关闭",p,d,b=i[2]?"导入中...":"开始导入",M,P,L,A,y=i[3]&&Ua(i);return{c(){e=R("div"),t=R("div"),n=R("h3"),n.textContent=r,s=Q(),a=R("p"),a.textContent=o,c=Q(),l=R("div"),u=R("input"),h=Q(),y&&y.c(),f=Q(),m=R("div"),_=R("button"),_.textContent=v,p=Q(),d=R("button"),M=ke(b),this.h()},l(N){e=C(N,"DIV",{class:!0});var k=ie(e);t=C(k,"DIV",{class:!0});var x=ie(t);n=C(x,"H3",{"data-svelte-h":!0}),Le(n)!=="svelte-rl92uc"&&(n.textContent=r),s=J(x),a=C(x,"P",{style:!0,"data-svelte-h":!0}),Le(a)!=="svelte-p50xxs"&&(a.textContent=o),c=J(x),l=C(x,"DIV",{class:!0});var T=ie(l);u=C(T,"INPUT",{type:!0,accept:!0}),T.forEach(D),h=J(x),y&&y.l(x),f=J(x),m=C(x,"DIV",{class:!0});var K=ie(m);_=C(K,"BUTTON",{class:!0,"data-svelte-h":!0}),Le(_)!=="svelte-1wvy2wc"&&(_.textContent=v),p=J(K),d=C(K,"BUTTON",{class:!0});var se=ie(d);M=ze(se,b),se.forEach(D),K.forEach(D),x.forEach(D),k.forEach(D),this.h()},h(){Ce(a,"font-size","12px"),Ce(a,"color","var(--text-secondary)"),Ce(a,"margin-bottom","12px"),F(u,"type","file"),F(u,"accept",".csv"),F(l,"class","form-group"),F(_,"class","btn-secondary"),F(d,"class","btn-primary"),d.disabled=P=!i[1]||i[2],F(m,"class","modal-actions"),F(t,"class","modal"),F(e,"class","modal-overlay")},m(N,k){Re(N,e,k),g(e,t),g(t,n),g(t,s),g(t,a),g(t,c),g(t,l),g(l,u),g(t,h),y&&y.m(t,null),g(t,f),g(t,m),g(m,_),g(m,p),g(m,d),g(d,M),L||(A=[Ge(u,"change",i[23]),Ge(_,"click",i[24]),Ge(d,"click",i[9]),Ge(e,"click",aa(i[25]))],L=!0)},p(N,k){N[3]?y?y.p(N,k):(y=Ua(N),y.c(),y.m(t,f)):y&&(y.d(1),y=null),k[0]&4&&b!==(b=N[2]?"导入中...":"开始导入")&&Qe(M,b),k[0]&6&&P!==(P=!N[1]||N[2])&&(d.disabled=P)},d(N){N&&D(e),y&&y.d(),L=!1,Lt(A)}}}function Ua(i){let e,t,n,r=i[3].imported+"",s,a,o,c,l=i[3].errors.length>0&&Na(i),u=i[3].warnings.length>0&&Fa(i);return{c(){e=R("div"),t=R("p"),n=ke("成功导入: "),s=ke(r),a=ke(" 个钻孔"),o=Q(),l&&l.c(),c=Q(),u&&u.c(),this.h()},l(h){e=C(h,"DIV",{class:!0});var f=ie(e);t=C(f,"P",{class:!0});var m=ie(t);n=ze(m,"成功导入: "),s=ze(m,r),a=ze(m," 个钻孔"),m.forEach(D),o=J(f),l&&l.l(f),c=J(f),u&&u.l(f),f.forEach(D),this.h()},h(){F(t,"class","badge badge-success svelte-pmzzll"),F(e,"class","import-result svelte-pmzzll")},m(h,f){Re(h,e,f),g(e,t),g(t,n),g(t,s),g(t,a),g(e,o),l&&l.m(e,null),g(e,c),u&&u.m(e,null)},p(h,f){f[0]&8&&r!==(r=h[3].imported+"")&&Qe(s,r),h[3].errors.length>0?l?l.p(h,f):(l=Na(h),l.c(),l.m(e,c)):l&&(l.d(1),l=null),h[3].warnings.length>0?u?u.p(h,f):(u=Fa(h),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},d(h){h&&D(e),l&&l.d(),u&&u.d()}}}function Na(i){let e,t=_t(i[3].errors),n=[];for(let r=0;r<t.length;r+=1)n[r]=Oa(Ta(i,t,r));return{c(){e=R("div");for(let r=0;r<n.length;r+=1)n[r].c();this.h()},l(r){e=C(r,"DIV",{class:!0});var s=ie(e);for(let a=0;a<n.length;a+=1)n[a].l(s);s.forEach(D),this.h()},h(){F(e,"class","errors")},m(r,s){Re(r,e,s);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(e,null)},p(r,s){if(s[0]&8){t=_t(r[3].errors);let a;for(a=0;a<t.length;a+=1){const o=Ta(r,t,a);n[a]?n[a].p(o,s):(n[a]=Oa(o),n[a].c(),n[a].m(e,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=t.length}},d(r){r&&D(e),Vt(n,r)}}}function Oa(i){let e,t=i[44]+"",n;return{c(){e=R("p"),n=ke(t),this.h()},l(r){e=C(r,"P",{class:!0});var s=ie(e);n=ze(s,t),s.forEach(D),this.h()},h(){F(e,"class","badge badge-danger svelte-pmzzll")},m(r,s){Re(r,e,s),g(e,n)},p(r,s){s[0]&8&&t!==(t=r[44]+"")&&Qe(n,t)},d(r){r&&D(e)}}}function Fa(i){let e,t=_t(i[3].warnings),n=[];for(let r=0;r<t.length;r+=1)n[r]=Ba(ya(i,t,r));return{c(){e=R("div");for(let r=0;r<n.length;r+=1)n[r].c();this.h()},l(r){e=C(r,"DIV",{class:!0});var s=ie(e);for(let a=0;a<n.length;a+=1)n[a].l(s);s.forEach(D),this.h()},h(){F(e,"class","warnings")},m(r,s){Re(r,e,s);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(e,null)},p(r,s){if(s[0]&8){t=_t(r[3].warnings);let a;for(a=0;a<t.length;a+=1){const o=ya(r,t,a);n[a]?n[a].p(o,s):(n[a]=Ba(o),n[a].c(),n[a].m(e,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=t.length}},d(r){r&&D(e),Vt(n,r)}}}function Ba(i){let e,t=i[41]+"",n;return{c(){e=R("p"),n=ke(t),this.h()},l(r){e=C(r,"P",{class:!0});var s=ie(e);n=ze(s,t),s.forEach(D),this.h()},h(){F(e,"class","badge badge-warning svelte-pmzzll")},m(r,s){Re(r,e,s),g(e,n)},p(r,s){s[0]&8&&t!==(t=r[41]+"")&&Qe(n,t)},d(r){r&&D(e)}}}function za(i){let e,t,n,r,s=i[6].hole_id+"",a,o,c,l,u,h="孔号",f,m,_,v,p,d="高程(m)",b,M,P,L,A,y,N="经度",k,x,T,K,se,B="纬度",ee,Z,w,j,Y="分层信息",W,te,re,me,q="<tr><th>层号</th> <th>层顶(m)</th> <th>层底(m)</th> <th>岩性</th> <th>标贯N</th></tr>",V,le,ae,H,ne,X="取消",xe,O,ye="保存",ce,pe,de=_t(i[6].layers),oe=[];for(let G=0;G<de.length;G+=1)oe[G]=ka(ba(i,de,G));return{c(){e=R("div"),t=R("div"),n=R("h3"),r=ke("编辑钻孔 - "),a=ke(s),o=Q(),c=R("div"),l=R("div"),u=R("label"),u.textContent=h,f=Q(),m=R("input"),_=Q(),v=R("div"),p=R("label"),p.textContent=d,b=Q(),M=R("input"),P=Q(),L=R("div"),A=R("div"),y=R("label"),y.textContent=N,k=Q(),x=R("input"),T=Q(),K=R("div"),se=R("label"),se.textContent=B,ee=Q(),Z=R("input"),w=Q(),j=R("h4"),j.textContent=Y,W=Q(),te=R("div"),re=R("table"),me=R("thead"),me.innerHTML=q,V=Q(),le=R("tbody");for(let G=0;G<oe.length;G+=1)oe[G].c();ae=Q(),H=R("div"),ne=R("button"),ne.textContent=X,xe=Q(),O=R("button"),O.textContent=ye,this.h()},l(G){e=C(G,"DIV",{class:!0});var S=ie(e);t=C(S,"DIV",{class:!0,style:!0});var E=ie(t);n=C(E,"H3",{});var $=ie(n);r=ze($,"编辑钻孔 - "),a=ze($,s),$.forEach(D),o=J(E),c=C(E,"DIV",{class:!0,style:!0});var ge=ie(c);l=C(ge,"DIV",{class:!0});var fe=ie(l);u=C(fe,"LABEL",{"data-svelte-h":!0}),Le(u)!=="svelte-natzrr"&&(u.textContent=h),f=J(fe),m=C(fe,"INPUT",{type:!0}),fe.forEach(D),_=J(ge),v=C(ge,"DIV",{class:!0});var ve=ie(v);p=C(ve,"LABEL",{"data-svelte-h":!0}),Le(p)!=="svelte-1xtfx5p"&&(p.textContent=d),b=J(ve),M=C(ve,"INPUT",{type:!0,step:!0}),ve.forEach(D),ge.forEach(D),P=J(E),L=C(E,"DIV",{class:!0,style:!0});var Pe=ie(L);A=C(Pe,"DIV",{class:!0});var Te=ie(A);y=C(Te,"LABEL",{"data-svelte-h":!0}),Le(y)!=="svelte-ndgehb"&&(y.textContent=N),k=J(Te),x=C(Te,"INPUT",{type:!0,step:!0}),Te.forEach(D),T=J(Pe),K=C(Pe,"DIV",{class:!0});var Ae=ie(K);se=C(Ae,"LABEL",{"data-svelte-h":!0}),Le(se)!=="svelte-h6t6m2"&&(se.textContent=B),ee=J(Ae),Z=C(Ae,"INPUT",{type:!0,step:!0}),Ae.forEach(D),Pe.forEach(D),w=J(E),j=C(E,"H4",{style:!0,"data-svelte-h":!0}),Le(j)!=="svelte-ltk5jk"&&(j.textContent=Y),W=J(E),te=C(E,"DIV",{class:!0});var Oe=ie(te);re=C(Oe,"TABLE",{});var Fe=ie(re);me=C(Fe,"THEAD",{"data-svelte-h":!0}),Le(me)!=="svelte-qllypy"&&(me.innerHTML=q),V=J(Fe),le=C(Fe,"TBODY",{});var we=ie(le);for(let Ze=0;Ze<oe.length;Ze+=1)oe[Ze].l(we);we.forEach(D),Fe.forEach(D),Oe.forEach(D),ae=J(E),H=C(E,"DIV",{class:!0});var je=ie(H);ne=C(je,"BUTTON",{class:!0,"data-svelte-h":!0}),Le(ne)!=="svelte-1xgwxe6"&&(ne.textContent=X),xe=J(je),O=C(je,"BUTTON",{class:!0,"data-svelte-h":!0}),Le(O)!=="svelte-1qz0hu8"&&(O.textContent=ye),je.forEach(D),E.forEach(D),S.forEach(D),this.h()},h(){F(m,"type","text"),F(l,"class","form-group"),F(M,"type","number"),F(M,"step","0.01"),F(v,"class","form-group"),F(c,"class","form-row"),Ce(c,"margin-bottom","12px"),F(x,"type","number"),F(x,"step","0.000001"),F(A,"class","form-group"),F(Z,"type","number"),F(Z,"step","0.000001"),F(K,"class","form-group"),F(L,"class","form-row"),Ce(L,"margin-bottom","12px"),Ce(j,"margin","12px 0 8px"),Ce(j,"font-size","13px"),F(te,"class","layers-table svelte-pmzzll"),F(ne,"class","btn-secondary"),F(O,"class","btn-primary"),F(H,"class","modal-actions"),F(t,"class","modal"),Ce(t,"min-width","600px"),F(e,"class","modal-overlay")},m(G,S){Re(G,e,S),g(e,t),g(t,n),g(n,r),g(n,a),g(t,o),g(t,c),g(c,l),g(l,u),g(l,f),g(l,m),He(m,i[6].hole_id),g(c,_),g(c,v),g(v,p),g(v,b),g(v,M),He(M,i[6].elevation),g(t,P),g(t,L),g(L,A),g(A,y),g(A,k),g(A,x),He(x,i[6].longitude),g(L,T),g(L,K),g(K,se),g(K,ee),g(K,Z),He(Z,i[6].latitude),g(t,w),g(t,j),g(t,W),g(t,te),g(te,re),g(re,me),g(re,V),g(re,le);for(let E=0;E<oe.length;E+=1)oe[E]&&oe[E].m(le,null);g(t,ae),g(t,H),g(H,ne),g(H,xe),g(H,O),ce||(pe=[Ge(m,"input",i[26]),Ge(M,"input",i[27]),Ge(x,"input",i[28]),Ge(Z,"input",i[29]),Ge(ne,"click",i[34]),Ge(O,"click",i[12]),Ge(e,"click",aa(i[35]))],ce=!0)},p(G,S){if(S[0]&64&&s!==(s=G[6].hole_id+"")&&Qe(a,s),S[0]&64&&m.value!==G[6].hole_id&&He(m,G[6].hole_id),S[0]&64&&ot(M.value)!==G[6].elevation&&He(M,G[6].elevation),S[0]&64&&ot(x.value)!==G[6].longitude&&He(x,G[6].longitude),S[0]&64&&ot(Z.value)!==G[6].latitude&&He(Z,G[6].latitude),S[0]&64){de=_t(G[6].layers);let E;for(E=0;E<de.length;E+=1){const $=ba(G,de,E);oe[E]?oe[E].p($,S):(oe[E]=ka($),oe[E].c(),oe[E].m(le,null))}for(;E<oe.length;E+=1)oe[E].d(1);oe.length=de.length}},d(G){G&&D(e),Vt(oe,G),ce=!1,Lt(pe)}}}function ka(i){let e,t,n=i[38].layer_no+"",r,s,a,o,c,l,u,h,f,m,_,v,p,d,b,M;function P(){i[30].call(o,i[39],i[40])}function L(){i[31].call(u,i[39],i[40])}function A(){i[32].call(m,i[39],i[40])}function y(){i[33].call(p,i[39],i[40])}return{c(){e=R("tr"),t=R("td"),r=ke(n),s=Q(),a=R("td"),o=R("input"),c=Q(),l=R("td"),u=R("input"),h=Q(),f=R("td"),m=R("input"),_=Q(),v=R("td"),p=R("input"),d=Q(),this.h()},l(N){e=C(N,"TR",{});var k=ie(e);t=C(k,"TD",{});var x=ie(t);r=ze(x,n),x.forEach(D),s=J(k),a=C(k,"TD",{});var T=ie(a);o=C(T,"INPUT",{type:!0,step:!0,style:!0,class:!0}),T.forEach(D),c=J(k),l=C(k,"TD",{});var K=ie(l);u=C(K,"INPUT",{type:!0,step:!0,style:!0,class:!0}),K.forEach(D),h=J(k),f=C(k,"TD",{});var se=ie(f);m=C(se,"INPUT",{type:!0,style:!0,class:!0}),se.forEach(D),_=J(k),v=C(k,"TD",{});var B=ie(v);p=C(B,"INPUT",{type:!0,step:!0,style:!0,class:!0}),B.forEach(D),d=J(k),k.forEach(D),this.h()},h(){F(o,"type","number"),F(o,"step","0.1"),Ce(o,"width","70px"),F(o,"class","svelte-pmzzll"),F(u,"type","number"),F(u,"step","0.1"),Ce(u,"width","70px"),F(u,"class","svelte-pmzzll"),F(m,"type","text"),Ce(m,"width","100px"),F(m,"class","svelte-pmzzll"),F(p,"type","number"),F(p,"step","0.1"),Ce(p,"width","60px"),F(p,"class","svelte-pmzzll")},m(N,k){Re(N,e,k),g(e,t),g(t,r),g(e,s),g(e,a),g(a,o),He(o,i[38].top_depth),g(e,c),g(e,l),g(l,u),He(u,i[38].bottom_depth),g(e,h),g(e,f),g(f,m),He(m,i[38].lithology_name),g(e,_),g(e,v),g(v,p),He(p,i[38].spt_n),g(e,d),b||(M=[Ge(o,"input",P),Ge(u,"input",L),Ge(m,"input",A),Ge(p,"input",y)],b=!0)},p(N,k){i=N,k[0]&64&&n!==(n=i[38].layer_no+"")&&Qe(r,n),k[0]&64&&ot(o.value)!==i[38].top_depth&&He(o,i[38].top_depth),k[0]&64&&ot(u.value)!==i[38].bottom_depth&&He(u,i[38].bottom_depth),k[0]&64&&m.value!==i[38].lithology_name&&He(m,i[38].lithology_name),k[0]&64&&ot(p.value)!==i[38].spt_n&&He(p,i[38].spt_n)},d(N){N&&D(e),b=!1,Lt(M)}}}function nu(i){let e,t,n="钻孔数据管理",r,s,a,o="导入CSV",c,l,u=i[4]?"隐藏":"颜色",h,f,m,_,v,p,d,b,M,P=i[4]&&Ra(i);function L(x,T){return x[8].length===0?tu:eu}let A=L(i),y=A(i),N=i[0]&&Ia(i),k=i[6]&&za(i);return{c(){e=R("div"),t=R("h3"),t.textContent=n,r=Q(),s=R("div"),a=R("button"),a.textContent=o,c=Q(),l=R("button"),h=ke(u),f=Q(),m=R("div"),P&&P.c(),_=Q(),y.c(),v=Q(),N&&N.c(),p=Q(),k&&k.c(),d=An(),this.h()},l(x){e=C(x,"DIV",{class:!0});var T=ie(e);t=C(T,"H3",{"data-svelte-h":!0}),Le(t)!=="svelte-1xeck8m"&&(t.textContent=n),r=J(T),s=C(T,"DIV",{style:!0});var K=ie(s);a=C(K,"BUTTON",{class:!0,"data-svelte-h":!0}),Le(a)!=="svelte-vemyzj"&&(a.textContent=o),c=J(K),l=C(K,"BUTTON",{class:!0});var se=ie(l);h=ze(se,u),se.forEach(D),K.forEach(D),T.forEach(D),f=J(x),m=C(x,"DIV",{class:!0});var B=ie(m);P&&P.l(B),_=J(B),y.l(B),B.forEach(D),v=J(x),N&&N.l(x),p=J(x),k&&k.l(x),d=An(),this.h()},h(){F(a,"class","btn-primary btn-sm"),F(l,"class","btn-secondary btn-sm"),Ce(s,"display","flex"),Ce(s,"gap","6px"),F(e,"class","panel-header"),F(m,"class","panel-body scrollable")},m(x,T){Re(x,e,T),g(e,t),g(e,r),g(e,s),g(s,a),g(s,c),g(s,l),g(l,h),Re(x,f,T),Re(x,m,T),P&&P.m(m,null),g(m,_),y.m(m,null),Re(x,v,T),N&&N.m(x,T),Re(x,p,T),k&&k.m(x,T),Re(x,d,T),b||(M=[Ge(a,"click",i[15]),Ge(l,"click",i[16])],b=!0)},p(x,T){T[0]&16&&u!==(u=x[4]?"隐藏":"颜色")&&Qe(h,u),x[4]?P?P.p(x,T):(P=Ra(x),P.c(),P.m(m,_)):P&&(P.d(1),P=null),A===(A=L(x))&&y?y.p(x,T):(y.d(1),y=A(x),y&&(y.c(),y.m(m,null))),x[0]?N?N.p(x,T):(N=Ia(x),N.c(),N.m(p.parentNode,p)):N&&(N.d(1),N=null),x[6]?k?k.p(x,T):(k=za(x),k.c(),k.m(d.parentNode,d)):k&&(k.d(1),k=null)},i:Ct,o:Ct,d(x){x&&(D(e),D(f),D(m),D(v),D(p),D(d)),P&&P.d(),y.d(),N&&N.d(x),k&&k.d(x),b=!1,Lt(M)}}}function iu(i,e,t){let n,r,s,a,o;at(i,Si,V=>t(36,n=V)),at(i,Yr,V=>t(5,r=V)),at(i,nn,V=>t(6,s=V)),at(i,vi,V=>t(7,a=V)),at(i,Ji,V=>t(8,o=V));let c=!1,l=null,u=!1,h=null,f=!1;async function m(){if(n)try{mt(Ji,o=await vt.get(`/projects/${n.id}/boreholes`),o),mt(vi,a=await vt.get(`/projects/${n.id}/lithology-types`),a)}catch(V){$e(`刷新失败: ${V.message}`,"error")}}async function _(){if(!(!l||!n)){t(2,u=!0);try{const V=await vt.uploadCsv(n.id,l);t(3,h=V),$e(`成功导入 ${V.imported} 个钻孔`,"success"),V.errors.length>0&&$e(`有 ${V.errors.length} 个错误`,"warning"),V.warnings.length>0&&V.warnings.forEach(le=>$e(le,"warning")),await m()}catch(V){$e(`导入失败: ${V.message}`,"error")}finally{t(2,u=!1)}}}async function v(V){if(confirm("确定删除此钻孔？"))try{await vt.delete(`/projects/${n.id}/boreholes/${V}`),$e("钻孔已删除","info"),await m()}catch(le){$e(`删除失败: ${le.message}`,"error")}}function p(V){mt(nn,s=JSON.parse(JSON.stringify(V)),s)}async function d(){if(s)try{await vt.put(`/projects/${n.id}/boreholes/${s.id}`,s),$e("钻孔已更新","success"),mt(nn,s=null,s),await m()}catch(V){$e(`更新失败: ${V.message}`,"error")}}function b(V){r.includes(V)?mt(Yr,r=r.filter(le=>le!==V),r):mt(Yr,r=[...r,V],r)}async function M(V){try{await vt.put(`/projects/${n.id}/lithology-types/${V.id}`,{color:V.color,layer_order:V.layer_order}),$e("颜色已更新","success")}catch(le){$e(`颜色更新失败: ${le.message}`,"error")}}const P=()=>t(0,c=!0),L=()=>t(4,f=!f);function A(V,le){V[le].color=this.value,vi.set(a)}const y=V=>M(V),N=V=>b(V.id),k=V=>p(V),x=V=>v(V.id),T=(V,le)=>le.name===V.lithology_name,K=V=>t(1,l=V.target.files[0]),se=()=>{t(0,c=!1),t(3,h=null)},B=()=>{t(0,c=!1),t(3,h=null)};function ee(){s.hole_id=this.value,nn.set(s)}function Z(){s.elevation=ot(this.value),nn.set(s)}function w(){s.longitude=ot(this.value),nn.set(s)}function j(){s.latitude=ot(this.value),nn.set(s)}function Y(V,le){V[le].top_depth=ot(this.value),nn.set(s)}function W(V,le){V[le].bottom_depth=ot(this.value),nn.set(s)}function te(V,le){V[le].lithology_name=this.value,nn.set(s)}function re(V,le){V[le].spt_n=ot(this.value),nn.set(s)}return[c,l,u,h,f,r,s,a,o,_,v,p,d,b,M,P,L,A,y,N,k,x,T,K,se,B,ee,Z,w,j,Y,W,te,re,()=>mt(nn,s=null,s),()=>mt(nn,s=null,s)]}class ru extends Cn{constructor(e){super(),Rn(this,e,iu,nu,wn,{},null,[-1,-1])}}function Va(i,e,t){const n=i.slice();return n[30]=e[t],n}function Ga(i,e,t){const n=i.slice();return n[33]=e[t],n[35]=t,n}function Ha(i,e,t){const n=i.slice();return n[36]=e[t],n}function Wa(i,e,t){const n=i.slice();return n[39]=e[t],n}function Xa(i){let e,t=i[39].hole_id+"",n;return{c(){e=R("span"),n=ke(t),this.h()},l(r){e=C(r,"SPAN",{class:!0});var s=ie(e);n=ze(s,t),s.forEach(D),this.h()},h(){F(e,"class","badge badge-info")},m(r,s){Re(r,e,s),g(e,n)},p(r,s){s[0]&768&&t!==(t=r[39].hole_id+"")&&Qe(n,t)},d(r){r&&D(e)}}}function qa(i){let e,t="请在钻孔管理中选择2个以上钻孔";return{c(){e=R("span"),e.textContent=t,this.h()},l(n){e=C(n,"SPAN",{style:!0,"data-svelte-h":!0}),Le(e)!=="svelte-1k8zcgx"&&(e.textContent=t),this.h()},h(){Ce(e,"font-size","11px"),Ce(e,"color","var(--text-muted)")},m(n,r){Re(n,e,r)},d(n){n&&D(e)}}}function ja(i){let e,t,n="剖面列表",r,s=_t(i[7]),a=[];for(let o=0;o<s.length;o+=1)a[o]=Ya(Ha(i,s,o));return{c(){e=R("div"),t=R("h4"),t.textContent=n,r=Q();for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){e=C(o,"DIV",{class:!0});var c=ie(e);t=C(c,"H4",{style:!0,"data-svelte-h":!0}),Le(t)!=="svelte-dgmf3y"&&(t.textContent=n),r=J(c);for(let l=0;l<a.length;l+=1)a[l].l(c);c.forEach(D),this.h()},h(){Ce(t,"font-size","13px"),Ce(t,"margin-bottom","8px"),F(e,"class","profile-list")},m(o,c){Re(o,e,c),g(e,t),g(e,r);for(let l=0;l<a.length;l+=1)a[l]&&a[l].m(e,null)},p(o,c){if(c[0]&4228){s=_t(o[7]);let l;for(l=0;l<s.length;l+=1){const u=Ha(o,s,l);a[l]?a[l].p(u,c):(a[l]=Ya(u),a[l].c(),a[l].m(e,null))}for(;l<a.length;l+=1)a[l].d(1);a.length=s.length}},d(o){o&&D(e),Vt(a,o)}}}function Ya(i){let e,t,n=i[36].name+"",r,s,a,o=i[36].interpolation_method+"",c,l,u,h;function f(){return i[20](i[36])}return{c(){e=R("div"),t=R("span"),r=ke(n),s=Q(),a=R("span"),c=ke(o),l=Q(),this.h()},l(m){e=C(m,"DIV",{class:!0});var _=ie(e);t=C(_,"SPAN",{});var v=ie(t);r=ze(v,n),v.forEach(D),s=J(_),a=C(_,"SPAN",{class:!0});var p=ie(a);c=ze(p,o),p.forEach(D),l=J(_),_.forEach(D),this.h()},h(){F(a,"class","badge badge-info"),F(e,"class","profile-item svelte-1c8hdoq"),$i(e,"active",i[2]===i[36].id)},m(m,_){Re(m,e,_),g(e,t),g(t,r),g(e,s),g(e,a),g(a,c),g(e,l),u||(h=Ge(e,"click",f),u=!0)},p(m,_){i=m,_[0]&128&&n!==(n=i[36].name+"")&&Qe(r,n),_[0]&128&&o!==(o=i[36].interpolation_method+"")&&Qe(c,o),_[0]&132&&$i(e,"active",i[2]===i[36].id)},d(m){m&&D(e),u=!1,h()}}}function Ka(i){var le;let e,t,n,r="剖面图预览",s,a,o,c,l,u,h,f="标注管理",m,_,v,p,d="添加文字标注",b,M,P,L,A,y,N="X (距离m)",k,x,T,K,se,B="Y (高程m)",ee,Z,w,j,Y="添加标注",W,te,re=((le=i[3].lithologies)==null?void 0:le.length)>0&&Za(i);function me(ae,H){return ae[4].length>0?au:su}let q=me(i),V=q(i);return{c(){e=R("hr"),t=Q(),n=R("h4"),n.textContent=r,s=Q(),a=R("div"),o=R("canvas"),c=Q(),re&&re.c(),l=Q(),u=R("div"),h=R("h4"),h.textContent=f,m=Q(),V.c(),_=Q(),v=R("div"),p=R("label"),p.textContent=d,b=Q(),M=R("input"),P=Q(),L=R("div"),A=R("div"),y=R("label"),y.textContent=N,k=Q(),x=R("input"),T=Q(),K=R("div"),se=R("label"),se.textContent=B,ee=Q(),Z=R("input"),w=Q(),j=R("button"),j.textContent=Y,this.h()},l(ae){e=C(ae,"HR",{style:!0}),t=J(ae),n=C(ae,"H4",{style:!0,"data-svelte-h":!0}),Le(n)!=="svelte-1vo8psn"&&(n.textContent=r),s=J(ae),a=C(ae,"DIV",{class:!0});var H=ie(a);o=C(H,"CANVAS",{id:!0,width:!0,height:!0}),ie(o).forEach(D),H.forEach(D),c=J(ae),re&&re.l(ae),l=J(ae),u=C(ae,"DIV",{class:!0});var ne=ie(u);h=C(ne,"H4",{style:!0,"data-svelte-h":!0}),Le(h)!=="svelte-4x8l83"&&(h.textContent=f),m=J(ne),V.l(ne),_=J(ne),v=C(ne,"DIV",{class:!0,style:!0});var X=ie(v);p=C(X,"LABEL",{"data-svelte-h":!0}),Le(p)!=="svelte-dpqsoy"&&(p.textContent=d),b=J(X),M=C(X,"INPUT",{type:!0,placeholder:!0}),X.forEach(D),P=J(ne),L=C(ne,"DIV",{class:!0});var xe=ie(L);A=C(xe,"DIV",{class:!0});var O=ie(A);y=C(O,"LABEL",{"data-svelte-h":!0}),Le(y)!=="svelte-130i8ji"&&(y.textContent=N),k=J(O),x=C(O,"INPUT",{type:!0}),O.forEach(D),T=J(xe),K=C(xe,"DIV",{class:!0});var ye=ie(K);se=C(ye,"LABEL",{"data-svelte-h":!0}),Le(se)!=="svelte-xhi5gk"&&(se.textContent=B),ee=J(ye),Z=C(ye,"INPUT",{type:!0}),ye.forEach(D),xe.forEach(D),w=J(ne),j=C(ne,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),Le(j)!=="svelte-jb8zg8"&&(j.textContent=Y),ne.forEach(D),this.h()},h(){Ce(e,"border-color","var(--border)"),Ce(e,"margin","12px 0"),Ce(n,"font-size","13px"),Ce(n,"margin-bottom","8px"),F(o,"id","profileCanvas"),F(o,"width","340"),F(o,"height","280"),F(a,"class","profile-preview svelte-1c8hdoq"),Ce(h,"font-size","13px"),Ce(h,"margin","8px 0"),F(M,"type","text"),F(M,"placeholder","标注内容"),F(v,"class","form-group"),Ce(v,"margin-top","8px"),F(x,"type","number"),F(A,"class","form-group"),F(Z,"type","number"),F(K,"class","form-group"),F(L,"class","form-row"),F(j,"class","btn-secondary btn-sm"),Ce(j,"width","100%"),F(u,"class","annotation-section svelte-1c8hdoq")},m(ae,H){Re(ae,e,H),Re(ae,t,H),Re(ae,n,H),Re(ae,s,H),Re(ae,a,H),g(a,o),i[21](o),Re(ae,c,H),re&&re.m(ae,H),Re(ae,l,H),Re(ae,u,H),g(u,h),g(u,m),V.m(u,null),g(u,_),g(u,v),g(v,p),g(v,b),g(v,M),He(M,i[5].text_content),g(u,P),g(u,L),g(L,A),g(A,y),g(A,k),g(A,x),He(x,i[5].x),g(L,T),g(L,K),g(K,se),g(K,ee),g(K,Z),He(Z,i[5].y),g(u,w),g(u,j),W||(te=[Ge(M,"input",i[23]),Ge(x,"input",i[24]),Ge(Z,"input",i[25]),Ge(j,"click",i[13])],W=!0)},p(ae,H){var ne;((ne=ae[3].lithologies)==null?void 0:ne.length)>0?re?re.p(ae,H):(re=Za(ae),re.c(),re.m(l.parentNode,l)):re&&(re.d(1),re=null),q===(q=me(ae))&&V?V.p(ae,H):(V.d(1),V=q(ae),V&&(V.c(),V.m(u,_))),H[0]&32&&M.value!==ae[5].text_content&&He(M,ae[5].text_content),H[0]&32&&ot(x.value)!==ae[5].x&&He(x,ae[5].x),H[0]&32&&ot(Z.value)!==ae[5].y&&He(Z,ae[5].y)},d(ae){ae&&(D(e),D(t),D(n),D(s),D(a),D(c),D(l),D(u)),i[21](null),re&&re.d(ae),V.d(),W=!1,Lt(te)}}}function Za(i){let e,t,n="图例",r,s,a=_t(i[3].lithologies),o=[];for(let c=0;c<a.length;c+=1)o[c]=$a(Ga(i,a,c));return{c(){e=R("div"),t=R("h5"),t.textContent=n,r=Q(),s=R("div");for(let c=0;c<o.length;c+=1)o[c].c();this.h()},l(c){e=C(c,"DIV",{class:!0});var l=ie(e);t=C(l,"H5",{style:!0,"data-svelte-h":!0}),Le(t)!=="svelte-1b0yqne"&&(t.textContent=n),r=J(l),s=C(l,"DIV",{class:!0});var u=ie(s);for(let h=0;h<o.length;h+=1)o[h].l(u);u.forEach(D),l.forEach(D),this.h()},h(){Ce(t,"font-size","11px"),Ce(t,"margin","8px 0 4px"),Ce(t,"color","var(--text-secondary)"),F(s,"class","legend-list svelte-1c8hdoq"),F(e,"class","legend-box svelte-1c8hdoq")},m(c,l){Re(c,e,l),g(e,t),g(e,r),g(e,s);for(let u=0;u<o.length;u+=1)o[u]&&o[u].m(s,null)},p(c,l){if(l[0]&1032){a=_t(c[3].lithologies);let u;for(u=0;u<a.length;u+=1){const h=Ga(c,a,u);o[u]?o[u].p(h,l):(o[u]=$a(h),o[u].c(),o[u].m(s,null))}for(;u<o.length;u+=1)o[u].d(1);o.length=a.length}},d(c){c&&D(e),Vt(o,c)}}}function $a(i){let e,t,n,r,s=i[33]+"",a,o;return{c(){e=R("div"),t=R("span"),n=Q(),r=R("span"),a=ke(s),o=Q(),this.h()},l(c){e=C(c,"DIV",{class:!0});var l=ie(e);t=C(l,"SPAN",{class:!0,style:!0}),ie(t).forEach(D),n=J(l),r=C(l,"SPAN",{style:!0});var u=ie(r);a=ze(u,s),u.forEach(D),o=J(l),l.forEach(D),this.h()},h(){F(t,"class","color-swatch"),Ce(t,"background",i[10](i[33],i[35])),Ce(r,"font-size","11px"),F(e,"class","legend-item svelte-1c8hdoq")},m(c,l){Re(c,e,l),g(e,t),g(e,n),g(e,r),g(r,a),g(e,o)},p(c,l){l[0]&8&&Ce(t,"background",c[10](c[33],c[35])),l[0]&8&&s!==(s=c[33]+"")&&Qe(a,s)},d(c){c&&D(e)}}}function su(i){let e,t="暂无标注";return{c(){e=R("p"),e.textContent=t,this.h()},l(n){e=C(n,"P",{style:!0,"data-svelte-h":!0}),Le(e)!=="svelte-191p6fb"&&(e.textContent=t),this.h()},h(){Ce(e,"font-size","11px"),Ce(e,"color","var(--text-muted)"),Ce(e,"margin-bottom","6px")},m(n,r){Re(n,e,r)},p:Ct,d(n){n&&D(e)}}}function au(i){let e,t=_t(i[4]),n=[];for(let r=0;r<t.length;r+=1)n[r]=Ja(Va(i,t,r));return{c(){for(let r=0;r<n.length;r+=1)n[r].c();e=An()},l(r){for(let s=0;s<n.length;s+=1)n[s].l(r);e=An()},m(r,s){for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(r,s);Re(r,e,s)},p(r,s){if(s[0]&16400){t=_t(r[4]);let a;for(a=0;a<t.length;a+=1){const o=Va(r,t,a);n[a]?n[a].p(o,s):(n[a]=Ja(o),n[a].c(),n[a].m(e.parentNode,e))}for(;a<n.length;a+=1)n[a].d(1);n.length=t.length}},d(r){r&&D(e),Vt(n,r)}}}function Ja(i){let e,t,n=i[30].type==="text"?"📝":"➤",r,s,a=(i[30].text_content||`(${i[30].x}, ${i[30].y})`)+"",o,c,l,u="✕",h,f,m;function _(){return i[22](i[30])}return{c(){e=R("div"),t=R("span"),r=ke(n),s=Q(),o=ke(a),c=Q(),l=R("button"),l.textContent=u,h=Q(),this.h()},l(v){e=C(v,"DIV",{class:!0});var p=ie(e);t=C(p,"SPAN",{});var d=ie(t);r=ze(d,n),s=J(d),o=ze(d,a),d.forEach(D),c=J(p),l=C(p,"BUTTON",{class:!0,"data-svelte-h":!0}),Le(l)!=="svelte-8rblco"&&(l.textContent=u),h=J(p),p.forEach(D),this.h()},h(){F(l,"class","btn-danger btn-sm"),F(e,"class","ann-item svelte-1c8hdoq")},m(v,p){Re(v,e,p),g(e,t),g(t,r),g(t,s),g(t,o),g(e,c),g(e,l),g(e,h),f||(m=Ge(l,"click",_),f=!0)},p(v,p){i=v,p[0]&16&&n!==(n=i[30].type==="text"?"📝":"➤")&&Qe(r,n),p[0]&16&&a!==(a=(i[30].text_content||`(${i[30].x}, ${i[30].y})`)+"")&&Qe(o,a)},d(v){v&&D(e),f=!1,m()}}}function ou(i){let e,t,n="剖面分析",r,s,a,o,c,l,u,h,f,m,_,v,p,d="剖面名称",b,M,P,L,A,y="插值方式",N,k,x,T="线性插值",K,se="三次样条",B,ee="Kriging地统计插值",Z,w,j,Y,W=i[8].length+"",te,re,me,q,V,le,ae,H="生成剖面",ne,X,xe,O,ye=_t(i[9].filter(i[19])),ce=[];for(let G=0;G<ye.length;G+=1)ce[G]=Xa(Wa(i,ye,G));let pe=i[8].length<2&&qa(),de=i[7].length>0&&ja(i),oe=i[3]&&Ka(i);return{c(){e=R("div"),t=R("h3"),t.textContent=n,r=Q(),s=R("div"),a=R("button"),o=ke("PNG"),l=Q(),u=R("button"),h=ke("SVG"),m=Q(),_=R("div"),v=R("div"),p=R("label"),p.textContent=d,b=Q(),M=R("input"),P=Q(),L=R("div"),A=R("label"),A.textContent=y,N=Q(),k=R("select"),x=R("option"),x.textContent=T,K=R("option"),K.textContent=se,B=R("option"),B.textContent=ee,Z=Q(),w=R("div"),j=R("label"),Y=ke("已选钻孔 ("),te=ke(W),re=ke(")"),me=Q(),q=R("div");for(let G=0;G<ce.length;G+=1)ce[G].c();V=Q(),pe&&pe.c(),le=Q(),ae=R("button"),ae.textContent=H,ne=Q(),de&&de.c(),X=Q(),oe&&oe.c(),this.h()},l(G){e=C(G,"DIV",{class:!0});var S=ie(e);t=C(S,"H3",{"data-svelte-h":!0}),Le(t)!=="svelte-1tw5t1i"&&(t.textContent=n),r=J(S),s=C(S,"DIV",{style:!0});var E=ie(s);a=C(E,"BUTTON",{class:!0});var $=ie(a);o=ze($,"PNG"),$.forEach(D),l=J(E),u=C(E,"BUTTON",{class:!0});var ge=ie(u);h=ze(ge,"SVG"),ge.forEach(D),E.forEach(D),S.forEach(D),m=J(G),_=C(G,"DIV",{class:!0});var fe=ie(_);v=C(fe,"DIV",{class:!0});var ve=ie(v);p=C(ve,"LABEL",{"data-svelte-h":!0}),Le(p)!=="svelte-aae5qr"&&(p.textContent=d),b=J(ve),M=C(ve,"INPUT",{type:!0,placeholder:!0}),ve.forEach(D),P=J(fe),L=C(fe,"DIV",{class:!0});var Pe=ie(L);A=C(Pe,"LABEL",{"data-svelte-h":!0}),Le(A)!=="svelte-w2ab1e"&&(A.textContent=y),N=J(Pe),k=C(Pe,"SELECT",{});var Te=ie(k);x=C(Te,"OPTION",{"data-svelte-h":!0}),Le(x)!=="svelte-1acgaat"&&(x.textContent=T),K=C(Te,"OPTION",{"data-svelte-h":!0}),Le(K)!=="svelte-b97obq"&&(K.textContent=se),B=C(Te,"OPTION",{"data-svelte-h":!0}),Le(B)!=="svelte-m7cjkk"&&(B.textContent=ee),Te.forEach(D),Pe.forEach(D),Z=J(fe),w=C(fe,"DIV",{class:!0});var Ae=ie(w);j=C(Ae,"LABEL",{});var Oe=ie(j);Y=ze(Oe,"已选钻孔 ("),te=ze(Oe,W),re=ze(Oe,")"),Oe.forEach(D),me=J(Ae),q=C(Ae,"DIV",{class:!0});var Fe=ie(q);for(let we=0;we<ce.length;we+=1)ce[we].l(Fe);V=J(Fe),pe&&pe.l(Fe),Fe.forEach(D),Ae.forEach(D),le=J(fe),ae=C(fe,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),Le(ae)!=="svelte-18tzs37"&&(ae.textContent=H),ne=J(fe),de&&de.l(fe),X=J(fe),oe&&oe.l(fe),fe.forEach(D),this.h()},h(){F(a,"class","btn-secondary btn-sm"),a.disabled=c=!i[2],F(u,"class","btn-secondary btn-sm"),u.disabled=f=!i[2],Ce(s,"display","flex"),Ce(s,"gap","6px"),F(e,"class","panel-header"),F(M,"type","text"),F(M,"placeholder","输入剖面名称"),F(v,"class","form-group"),x.__value="linear",He(x,x.__value),K.__value="cubic_spline",He(K,K.__value),B.__value="kriging",He(B,B.__value),i[1]===void 0&&si(()=>i[18].call(k)),F(L,"class","form-group"),F(q,"class","selected-bhs svelte-1c8hdoq"),F(w,"class","form-group"),F(ae,"class","btn-primary"),Ce(ae,"width","100%"),Ce(ae,"margin-bottom","12px"),F(_,"class","panel-body scrollable")},m(G,S){Re(G,e,S),g(e,t),g(e,r),g(e,s),g(s,a),g(a,o),g(s,l),g(s,u),g(u,h),Re(G,m,S),Re(G,_,S),g(_,v),g(v,p),g(v,b),g(v,M),He(M,i[0]),g(_,P),g(_,L),g(L,A),g(L,N),g(L,k),g(k,x),g(k,K),g(k,B),Ot(k,i[1],!0),g(_,Z),g(_,w),g(w,j),g(j,Y),g(j,te),g(j,re),g(w,me),g(w,q);for(let E=0;E<ce.length;E+=1)ce[E]&&ce[E].m(q,null);g(q,V),pe&&pe.m(q,null),g(_,le),g(_,ae),g(_,ne),de&&de.m(_,null),g(_,X),oe&&oe.m(_,null),xe||(O=[Ge(a,"click",i[15]),Ge(u,"click",i[16]),Ge(M,"input",i[17]),Ge(k,"change",i[18]),Ge(ae,"click",i[11])],xe=!0)},p(G,S){if(S[0]&4&&c!==(c=!G[2])&&(a.disabled=c),S[0]&4&&f!==(f=!G[2])&&(u.disabled=f),S[0]&1&&M.value!==G[0]&&He(M,G[0]),S[0]&2&&Ot(k,G[1]),S[0]&256&&W!==(W=G[8].length+"")&&Qe(te,W),S[0]&768){ye=_t(G[9].filter(G[19]));let E;for(E=0;E<ye.length;E+=1){const $=Wa(G,ye,E);ce[E]?ce[E].p($,S):(ce[E]=Xa($),ce[E].c(),ce[E].m(q,V))}for(;E<ce.length;E+=1)ce[E].d(1);ce.length=ye.length}G[8].length<2?pe||(pe=qa(),pe.c(),pe.m(q,null)):pe&&(pe.d(1),pe=null),G[7].length>0?de?de.p(G,S):(de=ja(G),de.c(),de.m(_,X)):de&&(de.d(1),de=null),G[3]?oe?oe.p(G,S):(oe=Ka(G),oe.c(),oe.m(_,null)):oe&&(oe.d(1),oe=null)},i:Ct,o:Ct,d(G){G&&(D(e),D(m),D(_)),Vt(ce,G),pe&&pe.d(),de&&de.d(),oe&&oe.d(),xe=!1,Lt(O)}}}function lu(i,e,t){let n,r,s,a,o;at(i,xr,w=>t(7,n=w)),at(i,Yr,w=>t(8,r=w)),at(i,Si,w=>t(26,s=w)),at(i,vi,w=>t(27,a=w)),at(i,Ji,w=>t(9,o=w));let c="",l="linear",u=null,h=null,f=[],m={type:"text",x:0,y:0,text_content:"",arrow_dx:0,arrow_dy:0},_=null;const v=["#E6B89C","#F0E68C","#CD853F","#8B7355","#A0522D","#DEB887","#D2B48C","#BDB76B","#BC8F8F","#C4A882","#9ACD32","#6B8E23","#556B2F","#8FBC8F","#2E8B57","#708090","#778899","#B0C4DE","#87CEEB","#4682B4"];function p(w,j=0){const Y=a==null?void 0:a.find(W=>W.name===w);return Y!=null&&Y.color?Y.color:v[j%v.length]}jc(()=>{h&&_&&d()});function d(){if(!h||!_)return;const w=_.getContext("2d"),j=_.width,Y=_.height,W={top:30,right:20,bottom:40,left:60},te=j-W.left-W.right,re=Y-W.top-W.bottom;w.clearRect(0,0,j,Y),w.fillStyle="#ffffff",w.fillRect(0,0,j,Y);const me=h.columns,q=h.connections,V=h.total_distance>0?h.total_distance:100;let le=1/0,ae=-1/0;me.forEach(ye=>{ye.layers.forEach(ce=>{ce.top_elevation>ae&&(ae=ce.top_elevation),ce.bottom_elevation<le&&(le=ce.bottom_elevation)})}),le===1/0&&(le=0,ae=100);const H=(ae-le)*.1||10;le-=H,ae+=H;const ne=ye=>W.left+ye/V*te,X=ye=>W.top+(ae-ye)/(ae-le)*re;w.strokeStyle="#cccccc",w.lineWidth=.5;for(let ye=Math.ceil(le);ye<=ae;ye+=Math.max(5,Math.round((ae-le)/8))){const ce=X(ye);w.beginPath(),w.moveTo(W.left,ce),w.lineTo(j-W.right,ce),w.stroke(),w.fillStyle="#666",w.font="10px sans-serif",w.textAlign="right",w.textBaseline="middle",w.fillText(ye.toFixed(0)+"m",W.left-5,ce)}w.strokeStyle="#cccccc";const xe=Math.max(10,Math.round(V/8));for(let ye=0;ye<=V;ye+=xe){const ce=ne(ye);w.beginPath(),w.moveTo(ce,W.top),w.lineTo(ce,Y-W.bottom),w.stroke(),w.fillStyle="#666",w.font="10px sans-serif",w.textAlign="center",w.textBaseline="top",w.fillText(ye.toFixed(0)+"m",ce,Y-W.bottom+5)}const O={};(h.lithologies||[]).forEach((ye,ce)=>{O[ye]=ce}),q.forEach(ye=>{const ce=p(ye.lithology_name,O[ye.lithology_name]||0),pe=ye.distances,de=ye.top_elevations,oe=ye.bottom_elevations;if(!(pe.length<2)){w.fillStyle=ce,w.globalAlpha=.85,w.beginPath(),w.moveTo(ne(pe[0]),X(de[0]));for(let G=1;G<pe.length;G++)w.lineTo(ne(pe[G]),X(de[G]));for(let G=pe.length-1;G>=0;G--)w.lineTo(ne(pe[G]),X(oe[G]));w.closePath(),w.fill(),w.globalAlpha=1,w.strokeStyle="#333",w.lineWidth=.8,w.beginPath();for(let G=0;G<pe.length;G++)G===0?w.moveTo(ne(pe[G]),X(de[G])):w.lineTo(ne(pe[G]),X(de[G]));w.stroke(),w.beginPath();for(let G=0;G<pe.length;G++)G===0?w.moveTo(ne(pe[G]),X(oe[G])):w.lineTo(ne(pe[G]),X(oe[G]));w.stroke()}}),me.forEach(ye=>{const ce=ne(ye.distance),pe=Math.max(12,te/Math.max(6,me.length+2));ye.layers.forEach((de,oe)=>{const G=p(de.lithology_name,O[de.lithology_name]||oe),S=X(de.top_elevation),E=X(de.bottom_elevation),$=Math.max(2,E-S);w.fillStyle=G,w.globalAlpha=.95,w.fillRect(ce-pe/2,S,pe,$),w.globalAlpha=1,w.strokeStyle="#000",w.lineWidth=1,w.strokeRect(ce-pe/2,S,pe,$),w.fillStyle="#000",w.font="bold 10px sans-serif",w.textAlign="left",w.textBaseline="middle";const ge=(S+E)/2;w.fillText(`${de.layer_no}  ${de.thickness.toFixed(1)}m`,ce+pe/2+4,ge)}),w.fillStyle="#000",w.font="bold 11px sans-serif",w.textAlign="center",w.textBaseline="bottom",w.fillText(ye.hole_id,ce,W.top-6)}),w.strokeStyle="#000",w.lineWidth=1,w.strokeRect(W.left,W.top,te,re),w.fillStyle="#333",w.font="12px sans-serif",w.textAlign="center",w.textBaseline="top",w.fillText("水平距离 (m)",j/2,Y-14),w.save(),w.translate(14,Y/2),w.rotate(-Math.PI/2),w.textAlign="center",w.textBaseline="middle",w.fillText("高程 (m)",0,0),w.restore()}async function b(){if(!s||r.length<2){$e("请至少选择2个钻孔","warning");return}if(!c.trim()){$e("请输入剖面名称","warning");return}try{const w=await vt.post(`/projects/${s.id}/profiles`,{name:c,borehole_ids:r,interpolation_method:l});mt(xr,n=[...n,w],n),t(0,c=""),$e("剖面线创建成功","success"),await M(w.id)}catch(w){$e(`创建失败: ${w.message}`,"error")}}async function M(w){t(2,u=w);try{t(3,h=await vt.get(`/projects/profiles/${w}/data`)),t(4,f=await vt.get(`/projects/profiles/${w}/annotations`)),await Yc(),d()}catch(j){$e(`加载剖面数据失败: ${j.message}`,"error")}}async function P(){if(u)try{const w=await vt.post(`/projects/profiles/${u}/annotations`,m);t(4,f=[...f,w]),$e("标注已添加","success")}catch(w){$e(`添加标注失败: ${w.message}`,"error")}}async function L(w){try{await vt.delete(`/projects/profiles/annotations/${w}`),t(4,f=f.filter(j=>j.id!==w))}catch(j){$e(`删除标注失败: ${j.message}`,"error")}}async function A(){if(u)try{await vt.downloadBlob(`/export/profile/${u}/png`,`profile_${u}.png`)}catch(w){$e(`导出PNG失败: ${w.message}`,"error")}}async function y(){if(u)try{await vt.downloadBlob(`/export/profile/${u}/svg`,`profile_${u}.svg`)}catch(w){$e(`导出SVG失败: ${w.message}`,"error")}}function N(){c=this.value,t(0,c)}function k(){l=ti(this),t(1,l)}const x=w=>r.includes(w.id),T=w=>M(w.id);function K(w){$r[w?"unshift":"push"](()=>{_=w,t(6,_)})}const se=w=>L(w.id);function B(){m.text_content=this.value,t(5,m)}function ee(){m.x=ot(this.value),t(5,m)}function Z(){m.y=ot(this.value),t(5,m)}return[c,l,u,h,f,m,_,n,r,o,p,b,M,P,L,A,y,N,k,x,T,K,se,B,ee,Z]}class cu extends Cn{constructor(e){super(),Rn(this,e,lu,ou,wn,{},null,[-1,-1])}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oa="161",Ai={ROTATE:0,DOLLY:1,PAN:2},wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},uu=0,Qa=1,hu=2,uc=1,fu=2,Bn=3,ai=0,Qt=1,ln=2,ni=0,Yi=1,eo=2,to=3,no=4,du=5,mi=100,pu=101,mu=102,io=103,ro=104,_u=200,gu=201,vu=202,xu=203,Zs=204,$s=205,Eu=206,Mu=207,Su=208,bu=209,yu=210,Tu=211,Au=212,wu=213,Cu=214,Ru=0,Pu=1,Lu=2,Jr=3,Du=4,Iu=5,Uu=6,Nu=7,la=0,Ou=1,Fu=2,ii=0,Bu=1,zu=2,ku=3,Vu=4,Gu=5,Hu=6,hc=300,Qi=301,er=302,Js=303,Qs=304,ss=306,ea=1e3,En=1001,ta=1002,Yt=1003,so=1004,ur=1005,Jt=1006,ps=1007,gi=1008,ri=1009,Wu=1010,Xu=1011,ca=1012,fc=1013,ei=1014,kn=1015,Sr=1016,dc=1017,pc=1018,xi=1020,qu=1021,Mn=1023,ju=1024,Yu=1025,Ei=1026,tr=1027,Ku=1028,mc=1029,Zu=1030,_c=1031,gc=1033,ms=33776,_s=33777,gs=33778,vs=33779,ao=35840,oo=35841,lo=35842,co=35843,vc=36196,uo=37492,ho=37496,fo=37808,po=37809,mo=37810,_o=37811,go=37812,vo=37813,xo=37814,Eo=37815,Mo=37816,So=37817,bo=37818,yo=37819,To=37820,Ao=37821,xs=36492,wo=36494,Co=36495,$u=36283,Ro=36284,Po=36285,Lo=36286,xc=3e3,Mi=3001,Ju=3200,Qu=3201,Ec=0,eh=1,_n="",zt="srgb",qn="srgb-linear",ua="display-p3",as="display-p3-linear",Qr="linear",Mt="srgb",es="rec709",ts="p3",Ci=7680,Do=519,th=512,nh=513,ih=514,Mc=515,rh=516,sh=517,ah=518,oh=519,Io=35044,Uo="300 es",na=1035,Vn=2e3,ns=2001;class Ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kr=Math.PI/180,ia=180/Math.PI;function br(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function Kt(i,e,t){return Math.max(e,Math.min(t,i))}function lh(i,e){return(i%e+e)%e}function Es(i,e,t){return(1-t)*i+t*e}function No(i){return(i&i-1)===0&&i!==0}function ra(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ch={DEG2RAD:Kr};class it{constructor(e=0,t=0){it.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(e,t,n,r,s,a,o,c,l){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],m=n[5],_=n[8],v=r[0],p=r[3],d=r[6],b=r[1],M=r[4],P=r[7],L=r[2],A=r[5],y=r[8];return s[0]=a*v+o*b+c*L,s[3]=a*p+o*M+c*A,s[6]=a*d+o*P+c*y,s[1]=l*v+u*b+h*L,s[4]=l*p+u*M+h*A,s[7]=l*d+u*P+h*y,s[2]=f*v+m*b+_*L,s[5]=f*p+m*M+_*A,s[8]=f*d+m*P+_*y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*s,m=l*s-a*c,_=t*h+n*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=h*v,e[1]=(r*l-u*n)*v,e[2]=(o*n-r*a)*v,e[3]=f*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-o*t)*v,e[6]=m*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ms.makeScale(e,t)),this}rotate(e){return this.premultiply(Ms.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ms.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ms=new pt;function Sc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function is(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uh(){const i=is("canvas");return i.style.display="block",i}const Oo={};function Ki(i){i in Oo||(Oo[i]=!0,console.warn(i))}const Fo=new pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Bo=new pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Tr={[qn]:{transfer:Qr,primaries:es,toReference:i=>i,fromReference:i=>i},[zt]:{transfer:Mt,primaries:es,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[as]:{transfer:Qr,primaries:ts,toReference:i=>i.applyMatrix3(Bo),fromReference:i=>i.applyMatrix3(Fo)},[ua]:{transfer:Mt,primaries:ts,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Bo),fromReference:i=>i.applyMatrix3(Fo).convertLinearToSRGB()}},hh=new Set([qn,as]),Et={enabled:!0,_workingColorSpace:qn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!hh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Tr[e].toReference,r=Tr[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Tr[i].primaries},getTransfer:function(i){return i===_n?Qr:Tr[i].transfer}};function Zi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ri;class bc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ri===void 0&&(Ri=is("canvas")),Ri.width=e.width,Ri.height=e.height;const n=Ri.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ri}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=is("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Zi(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zi(t[n]/255)*255):t[n]=Zi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fh=0;class yc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=br(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(bs(r[a].image)):s.push(bs(r[a]))}else s=bs(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function bs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dh=0;class qt extends Ti{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,n=En,r=En,s=Jt,a=gi,o=Mn,c=ri,l=qt.DEFAULT_ANISOTROPY,u=_n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=br(),this.name="",this.source=new yc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Mi?zt:_n),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ea:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ea:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===zt?Mi:xc}set encoding(e){Ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Mi?zt:_n}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=hc;qt.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,t=0,n=0,r=1){Ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],m=c[5],_=c[9],v=c[2],p=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(_+p)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,P=(m+1)/2,L=(d+1)/2,A=(u+f)/4,y=(h+v)/4,N=(_+p)/4;return M>P&&M>L?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=A/n,s=y/n):P>L?P<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(P),n=A/r,s=N/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=y/s,r=N/s),this.set(n,r,s,t),this}let b=Math.sqrt((p-_)*(p-_)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(p-_)/b,this.y=(h-v)/b,this.z=(f-u)/b,this.w=Math.acos((l+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ph extends Ti{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Ki("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Mi?zt:_n),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new qt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new yc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends ph{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Tc extends qt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mh extends qt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3];const f=s[a+0],m=s[a+1],_=s[a+2],v=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=v;return}if(h!==v||c!==f||l!==m||u!==_){let p=1-o;const d=c*f+l*m+u*_+h*v,b=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const L=Math.sqrt(M),A=Math.atan2(L,d*b);p=Math.sin(p*A)/L,o=Math.sin(o*A)/L}const P=o*b;if(c=c*p+f*P,l=l*p+m*P,u=u*p+_*P,h=h*p+v*P,p===1-o){const L=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=L,l*=L,u*=L,h*=L}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[a],f=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+u*h+c*m-l*f,e[t+1]=c*_+u*f+l*h-o*m,e[t+2]=l*_+u*m+o*f-c*h,e[t+3]=u*_-o*h-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),h=o(s/2),f=c(n/2),m=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=f*u*h+l*m*_,this._y=l*m*h-f*u*_,this._z=l*u*_+f*m*h,this._w=l*u*h-f*m*_;break;case"YXZ":this._x=f*u*h+l*m*_,this._y=l*m*h-f*u*_,this._z=l*u*_-f*m*h,this._w=l*u*h+f*m*_;break;case"ZXY":this._x=f*u*h-l*m*_,this._y=l*m*h+f*u*_,this._z=l*u*_+f*m*h,this._w=l*u*h-f*m*_;break;case"ZYX":this._x=f*u*h-l*m*_,this._y=l*m*h+f*u*_,this._z=l*u*_-f*m*h,this._w=l*u*h+f*m*_;break;case"YZX":this._x=f*u*h+l*m*_,this._y=l*m*h+f*u*_,this._z=l*u*_-f*m*h,this._w=l*u*h-f*m*_;break;case"XZY":this._x=f*u*h-l*m*_,this._y=l*m*h-f*u*_,this._z=l*u*_+f*m*h,this._w=l*u*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ue{constructor(e=0,t=0,n=0){ue.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ys.copy(this).projectOnVector(e),this.sub(ys)}reflect(e){return this.sub(ys.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ys=new ue,zo=new yi;class yr{constructor(e=new ue(1/0,1/0,1/0),t=new ue(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,gn):gn.fromBufferAttribute(s,a),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ar.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ar.copy(n.boundingBox)),Ar.applyMatrix4(e.matrixWorld),this.union(Ar)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fr),wr.subVectors(this.max,fr),Pi.subVectors(e.a,fr),Li.subVectors(e.b,fr),Di.subVectors(e.c,fr),jn.subVectors(Li,Pi),Yn.subVectors(Di,Li),ui.subVectors(Pi,Di);let t=[0,-jn.z,jn.y,0,-Yn.z,Yn.y,0,-ui.z,ui.y,jn.z,0,-jn.x,Yn.z,0,-Yn.x,ui.z,0,-ui.x,-jn.y,jn.x,0,-Yn.y,Yn.x,0,-ui.y,ui.x,0];return!Ts(t,Pi,Li,Di,wr)||(t=[1,0,0,0,1,0,0,0,1],!Ts(t,Pi,Li,Di,wr))?!1:(Cr.crossVectors(jn,Yn),t=[Cr.x,Cr.y,Cr.z],Ts(t,Pi,Li,Di,wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const In=[new ue,new ue,new ue,new ue,new ue,new ue,new ue,new ue],gn=new ue,Ar=new yr,Pi=new ue,Li=new ue,Di=new ue,jn=new ue,Yn=new ue,ui=new ue,fr=new ue,wr=new ue,Cr=new ue,hi=new ue;function Ts(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){hi.fromArray(i,s);const o=r.x*Math.abs(hi.x)+r.y*Math.abs(hi.y)+r.z*Math.abs(hi.z),c=e.dot(hi),l=t.dot(hi),u=n.dot(hi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const _h=new yr,dr=new ue,As=new ue;class os{constructor(e=new ue,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_h.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dr.subVectors(e,this.center);const t=dr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(dr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(As.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dr.copy(e.center).add(As)),this.expandByPoint(dr.copy(e.center).sub(As))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Un=new ue,ws=new ue,Rr=new ue,Kn=new ue,Cs=new ue,Pr=new ue,Rs=new ue;class ha{constructor(e=new ue,t=new ue(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ws.copy(e).add(t).multiplyScalar(.5),Rr.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(ws);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Rr),o=Kn.dot(this.direction),c=-Kn.dot(Rr),l=Kn.lengthSq(),u=Math.abs(1-a*a);let h,f,m,_;if(u>0)if(h=a*c-o,f=a*o-c,_=s*u,h>=0)if(f>=-_)if(f<=_){const v=1/u;h*=v,f*=v,m=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*c)+l;else f<=-_?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-c),s),m=-h*h+f*(f+2*c)+l):f<=_?(h=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+l):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-c),s),m=-h*h+f*(f+2*c)+l);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ws).addScaledVector(Rr,f),m}intersectSphere(e,t){Un.subVectors(e.center,this.origin);const n=Un.dot(this.direction),r=Un.dot(Un)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,r,s){Cs.subVectors(t,e),Pr.subVectors(n,e),Rs.crossVectors(Cs,Pr);let a=this.direction.dot(Rs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Kn.subVectors(this.origin,e);const c=o*this.direction.dot(Pr.crossVectors(Kn,Pr));if(c<0)return null;const l=o*this.direction.dot(Cs.cross(Kn));if(l<0||c+l>a)return null;const u=-o*Kn.dot(Rs);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt{constructor(e,t,n,r,s,a,o,c,l,u,h,f,m,_,v,p){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,u,h,f,m,_,v,p)}set(e,t,n,r,s,a,o,c,l,u,h,f,m,_,v,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=_,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ii.setFromMatrixColumn(e,0).length(),s=1/Ii.setFromMatrixColumn(e,1).length(),a=1/Ii.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,m=a*h,_=o*u,v=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+_*l,t[5]=f-v*l,t[9]=-o*c,t[2]=v-f*l,t[6]=_+m*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,m=c*h,_=l*u,v=l*h;t[0]=f+v*o,t[4]=_*o-m,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-_,t[6]=v+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,m=c*h,_=l*u,v=l*h;t[0]=f-v*o,t[4]=-a*h,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,m=a*h,_=o*u,v=o*h;t[0]=c*u,t[4]=_*l-m,t[8]=f*l+v,t[1]=c*h,t[5]=v*l+f,t[9]=m*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,m=a*l,_=o*c,v=o*l;t[0]=c*u,t[4]=v-f*h,t[8]=_*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*h+_,t[10]=f-v*h}else if(e.order==="XZY"){const f=a*c,m=a*l,_=o*c,v=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+v,t[5]=a*u,t[9]=m*h-_,t[2]=_*h-m,t[6]=o*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gh,e,vh)}lookAt(e,t,n){const r=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),Zn.crossVectors(n,rn),Zn.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),Zn.crossVectors(n,rn)),Zn.normalize(),Lr.crossVectors(rn,Zn),r[0]=Zn.x,r[4]=Lr.x,r[8]=rn.x,r[1]=Zn.y,r[5]=Lr.y,r[9]=rn.y,r[2]=Zn.z,r[6]=Lr.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],m=n[13],_=n[2],v=n[6],p=n[10],d=n[14],b=n[3],M=n[7],P=n[11],L=n[15],A=r[0],y=r[4],N=r[8],k=r[12],x=r[1],T=r[5],K=r[9],se=r[13],B=r[2],ee=r[6],Z=r[10],w=r[14],j=r[3],Y=r[7],W=r[11],te=r[15];return s[0]=a*A+o*x+c*B+l*j,s[4]=a*y+o*T+c*ee+l*Y,s[8]=a*N+o*K+c*Z+l*W,s[12]=a*k+o*se+c*w+l*te,s[1]=u*A+h*x+f*B+m*j,s[5]=u*y+h*T+f*ee+m*Y,s[9]=u*N+h*K+f*Z+m*W,s[13]=u*k+h*se+f*w+m*te,s[2]=_*A+v*x+p*B+d*j,s[6]=_*y+v*T+p*ee+d*Y,s[10]=_*N+v*K+p*Z+d*W,s[14]=_*k+v*se+p*w+d*te,s[3]=b*A+M*x+P*B+L*j,s[7]=b*y+M*T+P*ee+L*Y,s[11]=b*N+M*K+P*Z+L*W,s[15]=b*k+M*se+P*w+L*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],m=e[14],_=e[3],v=e[7],p=e[11],d=e[15];return _*(+s*c*h-r*l*h-s*o*f+n*l*f+r*o*m-n*c*m)+v*(+t*c*m-t*l*f+s*a*f-r*a*m+r*l*u-s*c*u)+p*(+t*l*h-t*o*m-s*a*h+n*a*m+s*o*u-n*l*u)+d*(-r*o*u-t*c*h+t*o*f+r*a*h-n*a*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],m=e[11],_=e[12],v=e[13],p=e[14],d=e[15],b=h*p*l-v*f*l+v*c*m-o*p*m-h*c*d+o*f*d,M=_*f*l-u*p*l-_*c*m+a*p*m+u*c*d-a*f*d,P=u*v*l-_*h*l+_*o*m-a*v*m-u*o*d+a*h*d,L=_*h*c-u*v*c-_*o*f+a*v*f+u*o*p-a*h*p,A=t*b+n*M+r*P+s*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/A;return e[0]=b*y,e[1]=(v*f*s-h*p*s-v*r*m+n*p*m+h*r*d-n*f*d)*y,e[2]=(o*p*s-v*c*s+v*r*l-n*p*l-o*r*d+n*c*d)*y,e[3]=(h*c*s-o*f*s-h*r*l+n*f*l+o*r*m-n*c*m)*y,e[4]=M*y,e[5]=(u*p*s-_*f*s+_*r*m-t*p*m-u*r*d+t*f*d)*y,e[6]=(_*c*s-a*p*s-_*r*l+t*p*l+a*r*d-t*c*d)*y,e[7]=(a*f*s-u*c*s+u*r*l-t*f*l-a*r*m+t*c*m)*y,e[8]=P*y,e[9]=(_*h*s-u*v*s-_*n*m+t*v*m+u*n*d-t*h*d)*y,e[10]=(a*v*s-_*o*s+_*n*l-t*v*l-a*n*d+t*o*d)*y,e[11]=(u*o*s-a*h*s-u*n*l+t*h*l+a*n*m-t*o*m)*y,e[12]=L*y,e[13]=(u*v*r-_*h*r+_*n*f-t*v*f-u*n*p+t*h*p)*y,e[14]=(_*o*r-a*v*r-_*n*c+t*v*c+a*n*p-t*o*p)*y,e[15]=(a*h*r-u*o*r+u*n*c-t*h*c-a*n*f+t*o*f)*y,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,f=s*l,m=s*u,_=s*h,v=a*u,p=a*h,d=o*h,b=c*l,M=c*u,P=c*h,L=n.x,A=n.y,y=n.z;return r[0]=(1-(v+d))*L,r[1]=(m+P)*L,r[2]=(_-M)*L,r[3]=0,r[4]=(m-P)*A,r[5]=(1-(f+d))*A,r[6]=(p+b)*A,r[7]=0,r[8]=(_+M)*y,r[9]=(p-b)*y,r[10]=(1-(f+v))*y,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Ii.set(r[0],r[1],r[2]).length();const a=Ii.set(r[4],r[5],r[6]).length(),o=Ii.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],vn.copy(this);const l=1/s,u=1/a,h=1/o;return vn.elements[0]*=l,vn.elements[1]*=l,vn.elements[2]*=l,vn.elements[4]*=u,vn.elements[5]*=u,vn.elements[6]*=u,vn.elements[8]*=h,vn.elements[9]*=h,vn.elements[10]*=h,t.setFromRotationMatrix(vn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=Vn){const c=this.elements,l=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let m,_;if(o===Vn)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ns)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Vn){const c=this.elements,l=1/(t-e),u=1/(n-r),h=1/(a-s),f=(t+e)*l,m=(n+r)*u;let _,v;if(o===Vn)_=(a+s)*h,v=-2*h;else if(o===ns)_=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=v,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ii=new ue,vn=new Pt,gh=new ue(0,0,0),vh=new ue(1,1,1),Zn=new ue,Lr=new ue,rn=new ue,ko=new Pt,Vo=new yi;class ls{constructor(e=0,t=0,n=0,r=ls.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ko.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ko,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vo.setFromEuler(this),this.setFromQuaternion(Vo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ls.DEFAULT_ORDER="XYZ";class Ac{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xh=0;const Go=new ue,Ui=new yi,Nn=new Pt,Dr=new ue,pr=new ue,Eh=new ue,Mh=new yi,Ho=new ue(1,0,0),Wo=new ue(0,1,0),Xo=new ue(0,0,1),Sh={type:"added"},bh={type:"removed"};class kt extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new ue,t=new ls,n=new yi,r=new ue(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new pt}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ac,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.premultiply(Ui),this}rotateX(e){return this.rotateOnAxis(Ho,e)}rotateY(e){return this.rotateOnAxis(Wo,e)}rotateZ(e){return this.rotateOnAxis(Xo,e)}translateOnAxis(e,t){return Go.copy(e).applyQuaternion(this.quaternion),this.position.add(Go.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ho,e)}translateY(e){return this.translateOnAxis(Wo,e)}translateZ(e){return this.translateOnAxis(Xo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Dr.copy(e):Dr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(pr,Dr,this.up):Nn.lookAt(Dr,pr,this.up),this.quaternion.setFromRotationMatrix(Nn),r&&(Nn.extractRotation(r.matrixWorld),Ui.setFromRotationMatrix(Nn),this.quaternion.premultiply(Ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Sh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,e,Eh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,Mh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}kt.DEFAULT_UP=new ue(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new ue,On=new ue,Ps=new ue,Fn=new ue,Ni=new ue,Oi=new ue,qo=new ue,Ls=new ue,Ds=new ue,Is=new ue;class yn{constructor(e=new ue,t=new ue,n=new ue){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),xn.subVectors(e,t),r.cross(xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){xn.subVectors(r,t),On.subVectors(n,t),Ps.subVectors(e,t);const a=xn.dot(xn),o=xn.dot(On),c=xn.dot(Ps),l=On.dot(On),u=On.dot(Ps),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(l*c-o*u)*f,_=(a*u-o*c)*f;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,Fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Fn.x),c.addScaledVector(a,Fn.y),c.addScaledVector(o,Fn.z),c)}static isFrontFacing(e,t,n,r){return xn.subVectors(n,t),On.subVectors(e,t),xn.cross(On).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),xn.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return yn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Ni.subVectors(r,n),Oi.subVectors(s,n),Ls.subVectors(e,n);const c=Ni.dot(Ls),l=Oi.dot(Ls);if(c<=0&&l<=0)return t.copy(n);Ds.subVectors(e,r);const u=Ni.dot(Ds),h=Oi.dot(Ds);if(u>=0&&h<=u)return t.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Ni,a);Is.subVectors(e,s);const m=Ni.dot(Is),_=Oi.dot(Is);if(_>=0&&m<=_)return t.copy(s);const v=m*l-c*_;if(v<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(Oi,o);const p=u*_-m*h;if(p<=0&&h-u>=0&&m-_>=0)return qo.subVectors(s,r),o=(h-u)/(h-u+(m-_)),t.copy(r).addScaledVector(qo,o);const d=1/(p+v+f);return a=v*d,o=f*d,t.copy(n).addScaledVector(Ni,a).addScaledVector(Oi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function Us(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ht{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Et.workingColorSpace){return this.r=e,this.g=t,this.b=n,Et.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Et.workingColorSpace){if(e=lh(e,1),t=Kt(t,0,1),n=Kt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Us(a,s,e+1/3),this.g=Us(a,s,e),this.b=Us(a,s,e-1/3)}return Et.toWorkingColorSpace(this,r),this}setStyle(e,t=zt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const n=wc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return Et.fromWorkingColorSpace(Wt.copy(this),e),Math.round(Kt(Wt.r*255,0,255))*65536+Math.round(Kt(Wt.g*255,0,255))*256+Math.round(Kt(Wt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.fromWorkingColorSpace(Wt.copy(this),t);const n=Wt.r,r=Wt.g,s=Wt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Et.workingColorSpace){return Et.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=zt){Et.fromWorkingColorSpace(Wt.copy(this),e);const t=Wt.r,n=Wt.g,r=Wt.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(Ir);const n=Es($n.h,Ir.h,t),r=Es($n.s,Ir.s,t),s=Es($n.l,Ir.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new ht;ht.NAMES=wc;let yh=0;class rr extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=br(),this.name="",this.type="Material",this.blending=Yi,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zs,this.blendDst=$s,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=Jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Do,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(n.blending=this.blending),this.side!==ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zs&&(n.blendSrc=this.blendSrc),this.blendDst!==$s&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Jr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Do&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fa extends rr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=la,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new ue,Ur=new it;class Tn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Io,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ki("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXY(t,Ur.x,Ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hr(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hr(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hr(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Io&&(e.usage=this.usage),e}}class Cc extends Tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Rc extends Tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class At extends Tn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Th=0;const pn=new Pt,Ns=new kt,Fi=new ue,sn=new yr,mr=new yr,Nt=new ue;class en extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=br(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sc(e)?Rc:Cc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new pt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return Ns.lookAt(e),Ns.updateMatrix(),this.applyMatrix4(Ns.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new At(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new ue(-1/0,-1/0,-1/0),new ue(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new ue,1/0);return}if(e){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];mr.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(sn.min,mr.min),sn.expandByPoint(Nt),Nt.addVectors(sn.max,mr.max),sn.expandByPoint(Nt)):(sn.expandByPoint(mr.min),sn.expandByPoint(mr.max))}sn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Nt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Nt.fromBufferAttribute(o,l),c&&(Fi.fromBufferAttribute(e,l),Nt.add(Fi)),r=Math.max(r,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let x=0;x<o;x++)l[x]=new ue,u[x]=new ue;const h=new ue,f=new ue,m=new ue,_=new it,v=new it,p=new it,d=new ue,b=new ue;function M(x,T,K){h.fromArray(r,x*3),f.fromArray(r,T*3),m.fromArray(r,K*3),_.fromArray(a,x*2),v.fromArray(a,T*2),p.fromArray(a,K*2),f.sub(h),m.sub(h),v.sub(_),p.sub(_);const se=1/(v.x*p.y-p.x*v.y);isFinite(se)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(se),b.copy(m).multiplyScalar(v.x).addScaledVector(f,-p.x).multiplyScalar(se),l[x].add(d),l[T].add(d),l[K].add(d),u[x].add(b),u[T].add(b),u[K].add(b))}let P=this.groups;P.length===0&&(P=[{start:0,count:n.length}]);for(let x=0,T=P.length;x<T;++x){const K=P[x],se=K.start,B=K.count;for(let ee=se,Z=se+B;ee<Z;ee+=3)M(n[ee+0],n[ee+1],n[ee+2])}const L=new ue,A=new ue,y=new ue,N=new ue;function k(x){y.fromArray(s,x*3),N.copy(y);const T=l[x];L.copy(T),L.sub(y.multiplyScalar(y.dot(T))).normalize(),A.crossVectors(N,T);const se=A.dot(u[x])<0?-1:1;c[x*4]=L.x,c[x*4+1]=L.y,c[x*4+2]=L.z,c[x*4+3]=se}for(let x=0,T=P.length;x<T;++x){const K=P[x],se=K.start,B=K.count;for(let ee=se,Z=se+B;ee<Z;ee+=3)k(n[ee+0]),k(n[ee+1]),k(n[ee+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new ue,s=new ue,a=new ue,o=new ue,c=new ue,l=new ue,u=new ue,h=new ue;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let m=0,_=0;for(let v=0,p=c.length;v<p;v++){o.isInterleavedBufferAttribute?m=c[v]*o.data.stride+o.offset:m=c[v]*u;for(let d=0;d<u;d++)f[_++]=l[m++]}return new Tn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new en,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],m=e(f,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jo=new Pt,fi=new ha,Nr=new os,Yo=new ue,Bi=new ue,zi=new ue,ki=new ue,Os=new ue,Or=new ue,Fr=new it,Br=new it,zr=new it,Ko=new ue,Zo=new ue,$o=new ue,kr=new ue,Vr=new ue;class Xt extends kt{constructor(e=new en,t=new fa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Or.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(Os.fromBufferAttribute(h,e),a?Or.addScaledVector(Os,u):Or.addScaledVector(Os.sub(t),u))}t.add(Or)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(s),fi.copy(e.ray).recast(e.near),!(Nr.containsPoint(fi.origin)===!1&&(fi.intersectSphere(Nr,Yo)===null||fi.origin.distanceToSquared(Yo)>(e.far-e.near)**2))&&(jo.copy(s).invert(),fi.copy(e.ray).applyMatrix4(jo),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){const p=f[_],d=a[p.materialIndex],b=Math.max(p.start,m.start),M=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let P=b,L=M;P<L;P+=3){const A=o.getX(P),y=o.getX(P+1),N=o.getX(P+2);r=Gr(this,d,e,n,l,u,h,A,y,N),r&&(r.faceIndex=Math.floor(P/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=_,d=v;p<d;p+=3){const b=o.getX(p),M=o.getX(p+1),P=o.getX(p+2);r=Gr(this,a,e,n,l,u,h,b,M,P),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){const p=f[_],d=a[p.materialIndex],b=Math.max(p.start,m.start),M=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let P=b,L=M;P<L;P+=3){const A=P,y=P+1,N=P+2;r=Gr(this,d,e,n,l,u,h,A,y,N),r&&(r.faceIndex=Math.floor(P/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let p=_,d=v;p<d;p+=3){const b=p,M=p+1,P=p+2;r=Gr(this,a,e,n,l,u,h,b,M,P),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Ah(i,e,t,n,r,s,a,o){let c;if(e.side===Qt?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===ai,o),c===null)return null;Vr.copy(o),Vr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Vr);return l<t.near||l>t.far?null:{distance:l,point:Vr.clone(),object:i}}function Gr(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Bi),i.getVertexPosition(c,zi),i.getVertexPosition(l,ki);const u=Ah(i,e,t,n,Bi,zi,ki,kr);if(u){r&&(Fr.fromBufferAttribute(r,o),Br.fromBufferAttribute(r,c),zr.fromBufferAttribute(r,l),u.uv=yn.getInterpolation(kr,Bi,zi,ki,Fr,Br,zr,new it)),s&&(Fr.fromBufferAttribute(s,o),Br.fromBufferAttribute(s,c),zr.fromBufferAttribute(s,l),u.uv1=yn.getInterpolation(kr,Bi,zi,ki,Fr,Br,zr,new it),u.uv2=u.uv1),a&&(Ko.fromBufferAttribute(a,o),Zo.fromBufferAttribute(a,c),$o.fromBufferAttribute(a,l),u.normal=yn.getInterpolation(kr,Bi,zi,ki,Ko,Zo,$o,new ue),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new ue,materialIndex:0};yn.getNormal(Bi,zi,ki,h.normal),u.face=h}return u}class sr extends en{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,r,a,2),_("x","z","y",1,-1,e,n,-t,r,a,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new At(l,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(h,2));function _(v,p,d,b,M,P,L,A,y,N,k){const x=P/y,T=L/N,K=P/2,se=L/2,B=A/2,ee=y+1,Z=N+1;let w=0,j=0;const Y=new ue;for(let W=0;W<Z;W++){const te=W*T-se;for(let re=0;re<ee;re++){const me=re*x-K;Y[v]=me*b,Y[p]=te*M,Y[d]=B,l.push(Y.x,Y.y,Y.z),Y[v]=0,Y[p]=0,Y[d]=A>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(re/y),h.push(1-W/N),w+=1}}for(let W=0;W<N;W++)for(let te=0;te<y;te++){const re=f+te+ee*W,me=f+te+ee*(W+1),q=f+(te+1)+ee*(W+1),V=f+(te+1)+ee*W;c.push(re,me,V),c.push(me,q,V),j+=6}o.addGroup(m,j,k),m+=j,f+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function nr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function jt(i){const e={};for(let t=0;t<i.length;t++){const n=nr(i[t]);for(const r in n)e[r]=n[r]}return e}function wh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Pc(i){return i.getRenderTarget()===null?i.outputColorSpace:Et.workingColorSpace}const Ch={clone:nr,merge:jt};var Rh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ph=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends rr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rh,this.fragmentShader=Ph,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=nr(e.uniforms),this.uniformsGroups=wh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Lc extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=Vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Jn=new ue,Jo=new it,Qo=new it;class mn extends Lc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ia*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Kr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ia*2*Math.atan(Math.tan(Kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z)}getViewSize(e,t){return this.getViewBounds(e,Jo,Qo),t.subVectors(Qo,Jo)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Kr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vi=-90,Gi=1;class Lh extends kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new mn(Vi,Gi,e,t);r.layers=this.layers,this.add(r);const s=new mn(Vi,Gi,e,t);s.layers=this.layers,this.add(s);const a=new mn(Vi,Gi,e,t);a.layers=this.layers,this.add(a);const o=new mn(Vi,Gi,e,t);o.layers=this.layers,this.add(o);const c=new mn(Vi,Gi,e,t);c.layers=this.layers,this.add(c);const l=new mn(Vi,Gi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,f,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Dc extends qt{constructor(e,t,n,r,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Qi,super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dh extends bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Ki("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Mi?zt:_n),this.texture=new Dc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new sr(5,5,5),s=new oi({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:ni});s.uniforms.tEquirect.value=t;const a=new Xt(r,s),o=t.minFilter;return t.minFilter===gi&&(t.minFilter=Jt),new Lh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const Fs=new ue,Ih=new ue,Uh=new pt;class zn{constructor(e=new ue(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Fs.subVectors(n,t).cross(Ih.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Fs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Uh.getNormalMatrix(e),r=this.coplanarPoint(Fs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new os,Hr=new ue;class da{constructor(e=new zn,t=new zn,n=new zn,r=new zn,s=new zn,a=new zn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],h=r[6],f=r[7],m=r[8],_=r[9],v=r[10],p=r[11],d=r[12],b=r[13],M=r[14],P=r[15];if(n[0].setComponents(c-s,f-l,p-m,P-d).normalize(),n[1].setComponents(c+s,f+l,p+m,P+d).normalize(),n[2].setComponents(c+a,f+u,p+_,P+b).normalize(),n[3].setComponents(c-a,f-u,p-_,P-b).normalize(),n[4].setComponents(c-o,f-h,p-v,P-M).normalize(),t===Vn)n[5].setComponents(c+o,f+h,p+v,P+M).normalize();else if(t===ns)n[5].setComponents(o,h,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(e){return di.center.set(0,0,0),di.radius=.7071067811865476,di.applyMatrix4(e.matrixWorld),this.intersectsSphere(di)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Hr.x=r.normal.x>0?e.max.x:e.min.x,Hr.y=r.normal.y>0?e.max.y:e.min.y,Hr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ic(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Nh(i,e){const t=e.isWebGL2,n=new WeakMap;function r(l,u){const h=l.array,f=l.usage,m=h.byteLength,_=i.createBuffer();i.bindBuffer(u,_),i.bufferData(u,h,f),l.onUploadCallback();let v;if(h instanceof Float32Array)v=i.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=i.SHORT;else if(h instanceof Uint32Array)v=i.UNSIGNED_INT;else if(h instanceof Int32Array)v=i.INT;else if(h instanceof Int8Array)v=i.BYTE;else if(h instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:m}}function s(l,u,h){const f=u.array,m=u._updateRange,_=u.updateRanges;if(i.bindBuffer(h,l),m.count===-1&&_.length===0&&i.bufferSubData(h,0,f),_.length!==0){for(let v=0,p=_.length;v<p;v++){const d=_[v];t?i.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):i.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);if(h===void 0)n.set(l,r(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,l,u),h.version=l.version}}return{get:a,remove:o,update:c}}class ir extends en{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,h=e/o,f=t/c,m=[],_=[],v=[],p=[];for(let d=0;d<u;d++){const b=d*f-a;for(let M=0;M<l;M++){const P=M*h-s;_.push(P,-b,0),v.push(0,0,1),p.push(M/o),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let b=0;b<o;b++){const M=b+l*d,P=b+l*(d+1),L=b+1+l*(d+1),A=b+1+l*d;m.push(M,P,A),m.push(P,L,A)}this.setIndex(m),this.setAttribute("position",new At(_,3)),this.setAttribute("normal",new At(v,3)),this.setAttribute("uv",new At(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.width,e.height,e.widthSegments,e.heightSegments)}}var Oh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,qh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Kh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$h=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,af=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,of=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ff=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,df="gl_FragColor = linearToOutputTexel( gl_FragColor );",pf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,mf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_f=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ef=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Tf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Af=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Pf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Lf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Df=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,If=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Of=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ff=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Hf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Wf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$f=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Jf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Qf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ed=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,td=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ad=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,od=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ld=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ud=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,fd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,md=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_d=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,xd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ed=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Md=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Td=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ad=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ld=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ud=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Nd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Od=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Wd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$d=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ep=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,np=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ip=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,op=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,up=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:Oh,alphahash_pars_fragment:Fh,alphamap_fragment:Bh,alphamap_pars_fragment:zh,alphatest_fragment:kh,alphatest_pars_fragment:Vh,aomap_fragment:Gh,aomap_pars_fragment:Hh,batching_pars_vertex:Wh,batching_vertex:Xh,begin_vertex:qh,beginnormal_vertex:jh,bsdfs:Yh,iridescence_fragment:Kh,bumpmap_pars_fragment:Zh,clipping_planes_fragment:$h,clipping_planes_pars_fragment:Jh,clipping_planes_pars_vertex:Qh,clipping_planes_vertex:ef,color_fragment:tf,color_pars_fragment:nf,color_pars_vertex:rf,color_vertex:sf,common:af,cube_uv_reflection_fragment:of,defaultnormal_vertex:lf,displacementmap_pars_vertex:cf,displacementmap_vertex:uf,emissivemap_fragment:hf,emissivemap_pars_fragment:ff,colorspace_fragment:df,colorspace_pars_fragment:pf,envmap_fragment:mf,envmap_common_pars_fragment:_f,envmap_pars_fragment:gf,envmap_pars_vertex:vf,envmap_physical_pars_fragment:Pf,envmap_vertex:xf,fog_vertex:Ef,fog_pars_vertex:Mf,fog_fragment:Sf,fog_pars_fragment:bf,gradientmap_pars_fragment:yf,lightmap_fragment:Tf,lightmap_pars_fragment:Af,lights_lambert_fragment:wf,lights_lambert_pars_fragment:Cf,lights_pars_begin:Rf,lights_toon_fragment:Lf,lights_toon_pars_fragment:Df,lights_phong_fragment:If,lights_phong_pars_fragment:Uf,lights_physical_fragment:Nf,lights_physical_pars_fragment:Of,lights_fragment_begin:Ff,lights_fragment_maps:Bf,lights_fragment_end:zf,logdepthbuf_fragment:kf,logdepthbuf_pars_fragment:Vf,logdepthbuf_pars_vertex:Gf,logdepthbuf_vertex:Hf,map_fragment:Wf,map_pars_fragment:Xf,map_particle_fragment:qf,map_particle_pars_fragment:jf,metalnessmap_fragment:Yf,metalnessmap_pars_fragment:Kf,morphcolor_vertex:Zf,morphnormal_vertex:$f,morphtarget_pars_vertex:Jf,morphtarget_vertex:Qf,normal_fragment_begin:ed,normal_fragment_maps:td,normal_pars_fragment:nd,normal_pars_vertex:id,normal_vertex:rd,normalmap_pars_fragment:sd,clearcoat_normal_fragment_begin:ad,clearcoat_normal_fragment_maps:od,clearcoat_pars_fragment:ld,iridescence_pars_fragment:cd,opaque_fragment:ud,packing:hd,premultiplied_alpha_fragment:fd,project_vertex:dd,dithering_fragment:pd,dithering_pars_fragment:md,roughnessmap_fragment:_d,roughnessmap_pars_fragment:gd,shadowmap_pars_fragment:vd,shadowmap_pars_vertex:xd,shadowmap_vertex:Ed,shadowmask_pars_fragment:Md,skinbase_vertex:Sd,skinning_pars_vertex:bd,skinning_vertex:yd,skinnormal_vertex:Td,specularmap_fragment:Ad,specularmap_pars_fragment:wd,tonemapping_fragment:Cd,tonemapping_pars_fragment:Rd,transmission_fragment:Pd,transmission_pars_fragment:Ld,uv_pars_fragment:Dd,uv_pars_vertex:Id,uv_vertex:Ud,worldpos_vertex:Nd,background_vert:Od,background_frag:Fd,backgroundCube_vert:Bd,backgroundCube_frag:zd,cube_vert:kd,cube_frag:Vd,depth_vert:Gd,depth_frag:Hd,distanceRGBA_vert:Wd,distanceRGBA_frag:Xd,equirect_vert:qd,equirect_frag:jd,linedashed_vert:Yd,linedashed_frag:Kd,meshbasic_vert:Zd,meshbasic_frag:$d,meshlambert_vert:Jd,meshlambert_frag:Qd,meshmatcap_vert:ep,meshmatcap_frag:tp,meshnormal_vert:np,meshnormal_frag:ip,meshphong_vert:rp,meshphong_frag:sp,meshphysical_vert:ap,meshphysical_frag:op,meshtoon_vert:lp,meshtoon_frag:cp,points_vert:up,points_frag:hp,shadow_vert:fp,shadow_frag:dp,sprite_vert:pp,sprite_frag:mp},We={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},bn={basic:{uniforms:jt([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:jt([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new ht(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:jt([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:jt([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:jt([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new ht(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:jt([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:jt([We.points,We.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:jt([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:jt([We.common,We.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:jt([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:jt([We.sprite,We.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:jt([We.common,We.displacementmap,{referencePosition:{value:new ue},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:jt([We.lights,We.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};bn.physical={uniforms:jt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Wr={r:0,b:0,g:0};function _p(i,e,t,n,r,s,a){const o=new ht(0);let c=s===!0?0:1,l,u,h=null,f=0,m=null;function _(p,d){let b=!1,M=d.isScene===!0?d.background:null;M&&M.isTexture&&(M=(d.backgroundBlurriness>0?t:e).get(M)),M===null?v(o,c):M&&M.isColor&&(v(M,1),b=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),M&&(M.isCubeTexture||M.mapping===ss)?(u===void 0&&(u=new Xt(new sr(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:nr(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,A,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Et.getTransfer(M.colorSpace)!==Mt,(h!==M||f!==M.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=M,f=M.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Xt(new ir(2,2),new oi({name:"BackgroundMaterial",uniforms:nr(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=Et.getTransfer(M.colorSpace)!==Mt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,m=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function v(p,d){p.getRGB(Wr,Pc(i)),n.buffers.color.setClear(Wr.r,Wr.g,Wr.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(p,d=1){o.set(p),c=d,v(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,v(o,c)},render:_}}function gp(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=p(null);let l=c,u=!1;function h(B,ee,Z,w,j){let Y=!1;if(a){const W=v(w,Z,ee);l!==W&&(l=W,m(l.object)),Y=d(B,w,Z,j),Y&&b(B,w,Z,j)}else{const W=ee.wireframe===!0;(l.geometry!==w.id||l.program!==Z.id||l.wireframe!==W)&&(l.geometry=w.id,l.program=Z.id,l.wireframe=W,Y=!0)}j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),(Y||u)&&(u=!1,N(B,ee,Z,w),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(B){return n.isWebGL2?i.bindVertexArray(B):s.bindVertexArrayOES(B)}function _(B){return n.isWebGL2?i.deleteVertexArray(B):s.deleteVertexArrayOES(B)}function v(B,ee,Z){const w=Z.wireframe===!0;let j=o[B.id];j===void 0&&(j={},o[B.id]=j);let Y=j[ee.id];Y===void 0&&(Y={},j[ee.id]=Y);let W=Y[w];return W===void 0&&(W=p(f()),Y[w]=W),W}function p(B){const ee=[],Z=[],w=[];for(let j=0;j<r;j++)ee[j]=0,Z[j]=0,w[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:Z,attributeDivisors:w,object:B,attributes:{},index:null}}function d(B,ee,Z,w){const j=l.attributes,Y=ee.attributes;let W=0;const te=Z.getAttributes();for(const re in te)if(te[re].location>=0){const q=j[re];let V=Y[re];if(V===void 0&&(re==="instanceMatrix"&&B.instanceMatrix&&(V=B.instanceMatrix),re==="instanceColor"&&B.instanceColor&&(V=B.instanceColor)),q===void 0||q.attribute!==V||V&&q.data!==V.data)return!0;W++}return l.attributesNum!==W||l.index!==w}function b(B,ee,Z,w){const j={},Y=ee.attributes;let W=0;const te=Z.getAttributes();for(const re in te)if(te[re].location>=0){let q=Y[re];q===void 0&&(re==="instanceMatrix"&&B.instanceMatrix&&(q=B.instanceMatrix),re==="instanceColor"&&B.instanceColor&&(q=B.instanceColor));const V={};V.attribute=q,q&&q.data&&(V.data=q.data),j[re]=V,W++}l.attributes=j,l.attributesNum=W,l.index=w}function M(){const B=l.newAttributes;for(let ee=0,Z=B.length;ee<Z;ee++)B[ee]=0}function P(B){L(B,0)}function L(B,ee){const Z=l.newAttributes,w=l.enabledAttributes,j=l.attributeDivisors;Z[B]=1,w[B]===0&&(i.enableVertexAttribArray(B),w[B]=1),j[B]!==ee&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,ee),j[B]=ee)}function A(){const B=l.newAttributes,ee=l.enabledAttributes;for(let Z=0,w=ee.length;Z<w;Z++)ee[Z]!==B[Z]&&(i.disableVertexAttribArray(Z),ee[Z]=0)}function y(B,ee,Z,w,j,Y,W){W===!0?i.vertexAttribIPointer(B,ee,Z,j,Y):i.vertexAttribPointer(B,ee,Z,w,j,Y)}function N(B,ee,Z,w){if(n.isWebGL2===!1&&(B.isInstancedMesh||w.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const j=w.attributes,Y=Z.getAttributes(),W=ee.defaultAttributeValues;for(const te in Y){const re=Y[te];if(re.location>=0){let me=j[te];if(me===void 0&&(te==="instanceMatrix"&&B.instanceMatrix&&(me=B.instanceMatrix),te==="instanceColor"&&B.instanceColor&&(me=B.instanceColor)),me!==void 0){const q=me.normalized,V=me.itemSize,le=t.get(me);if(le===void 0)continue;const ae=le.buffer,H=le.type,ne=le.bytesPerElement,X=n.isWebGL2===!0&&(H===i.INT||H===i.UNSIGNED_INT||me.gpuType===fc);if(me.isInterleavedBufferAttribute){const xe=me.data,O=xe.stride,ye=me.offset;if(xe.isInstancedInterleavedBuffer){for(let ce=0;ce<re.locationSize;ce++)L(re.location+ce,xe.meshPerAttribute);B.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let ce=0;ce<re.locationSize;ce++)P(re.location+ce);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let ce=0;ce<re.locationSize;ce++)y(re.location+ce,V/re.locationSize,H,q,O*ne,(ye+V/re.locationSize*ce)*ne,X)}else{if(me.isInstancedBufferAttribute){for(let xe=0;xe<re.locationSize;xe++)L(re.location+xe,me.meshPerAttribute);B.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let xe=0;xe<re.locationSize;xe++)P(re.location+xe);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let xe=0;xe<re.locationSize;xe++)y(re.location+xe,V/re.locationSize,H,q,V*ne,V/re.locationSize*xe*ne,X)}}else if(W!==void 0){const q=W[te];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(re.location,q);break;case 3:i.vertexAttrib3fv(re.location,q);break;case 4:i.vertexAttrib4fv(re.location,q);break;default:i.vertexAttrib1fv(re.location,q)}}}}A()}function k(){K();for(const B in o){const ee=o[B];for(const Z in ee){const w=ee[Z];for(const j in w)_(w[j].object),delete w[j];delete ee[Z]}delete o[B]}}function x(B){if(o[B.id]===void 0)return;const ee=o[B.id];for(const Z in ee){const w=ee[Z];for(const j in w)_(w[j].object),delete w[j];delete ee[Z]}delete o[B.id]}function T(B){for(const ee in o){const Z=o[ee];if(Z[B.id]===void 0)continue;const w=Z[B.id];for(const j in w)_(w[j].object),delete w[j];delete Z[B.id]}}function K(){se(),u=!0,l!==c&&(l=c,m(l.object))}function se(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:K,resetDefaultState:se,dispose:k,releaseStatesOfGeometry:x,releaseStatesOfProgram:T,initAttributes:M,enableAttribute:P,disableUnusedAttributes:A}}function vp(i,e,t,n){const r=n.isWebGL2;let s;function a(u){s=u}function o(u,h){i.drawArrays(s,u,h),t.update(h,s,1)}function c(u,h,f){if(f===0)return;let m,_;if(r)m=i,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](s,u,h,f),t.update(h,s,f)}function l(u,h,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<f;_++)this.render(u[_],h[_]);else{m.multiDrawArraysWEBGL(s,u,0,h,0,f);let _=0;for(let v=0;v<f;v++)_+=h[v];t.update(_,s,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function xp(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=f>0,P=a||e.has("OES_texture_float"),L=M&&P,A=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:b,vertexTextures:M,floatFragmentTextures:P,floatVertexTextures:L,maxSamples:A}}function Ep(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new zn,o=new pt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||r;return r=f,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,d=i.get(h);if(!r||_===null||_.length===0||s&&!p)s?u(null):l();else{const b=s?0:n,M=b*4;let P=d.clippingState||null;c.value=P,P=u(_,f,M,m);for(let L=0;L!==M;++L)P[L]=t[L];d.clippingState=P,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,_){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=c.value,_!==!0||p===null){const d=m+v*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<d)&&(p=new Float32Array(d));for(let M=0,P=m;M!==v;++M,P+=4)a.copy(h[M]).applyMatrix4(b,o),a.normal.toArray(p,P),p[P+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Mp(i){let e=new WeakMap;function t(a,o){return o===Js?a.mapping=Qi:o===Qs&&(a.mapping=er),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Js||o===Qs)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Dh(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Uc extends Lc{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xi=4,el=[.125,.215,.35,.446,.526,.582],_i=20,Bs=new Uc,tl=new ht;let zs=null,ks=0,Vs=0;const pi=(1+Math.sqrt(5))/2,Hi=1/pi,nl=[new ue(1,1,1),new ue(-1,1,1),new ue(1,1,-1),new ue(-1,1,-1),new ue(0,pi,Hi),new ue(0,pi,-Hi),new ue(Hi,0,pi),new ue(-Hi,0,pi),new ue(pi,Hi,0),new ue(-pi,Hi,0)];class il{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){zs=this._renderer.getRenderTarget(),ks=this._renderer.getActiveCubeFace(),Vs=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zs,ks,Vs),e.scissorTest=!1,Xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qi||e.mapping===er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zs=this._renderer.getRenderTarget(),ks=this._renderer.getActiveCubeFace(),Vs=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:Sr,format:Mn,colorSpace:qn,depthBuffer:!1},r=rl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sp(s)),this._blurMaterial=bp(s,e,t)}return r}_compileMaterial(e){const t=new Xt(this._lodPlanes[0],e);this._renderer.compile(t,Bs)}_sceneToCubeUV(e,t,n,r){const o=new mn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(tl),u.toneMapping=ii,u.autoClear=!1;const m=new fa({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),_=new Xt(new sr,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(tl),v=!0);for(let d=0;d<6;d++){const b=d%3;b===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):b===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));const M=this._cubeSize;Xr(r,b*M,d>2?M:0,M,M),u.setRenderTarget(r),v&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Qi||e.mapping===er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=al()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Xt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Xr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Bs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=nl[(r-1)%nl.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Xt(this._lodPlanes[r],l),f=l.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*_i-1),v=s/_,p=isFinite(s)?1+Math.floor(u*v):_i;p>_i&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${_i}`);const d=[];let b=0;for(let y=0;y<_i;++y){const N=y/v,k=Math.exp(-N*N/2);d.push(k),y===0?b+=k:y<p&&(b+=2*k)}for(let y=0;y<d.length;y++)d[y]=d[y]/b;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-n;const P=this._sizeLods[r],L=3*P*(r>M-Xi?r-M+Xi:0),A=4*(this._cubeSize-P);Xr(t,L,A,3*P,2*P),c.setRenderTarget(t),c.render(h,Bs)}}function Sp(i){const e=[],t=[],n=[];let r=i;const s=i-Xi+1+el.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-Xi?c=el[a-i+Xi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,v=3,p=2,d=1,b=new Float32Array(v*_*m),M=new Float32Array(p*_*m),P=new Float32Array(d*_*m);for(let A=0;A<m;A++){const y=A%3*2/3-1,N=A>2?0:-1,k=[y,N,0,y+2/3,N,0,y+2/3,N+1,0,y,N,0,y+2/3,N+1,0,y,N+1,0];b.set(k,v*_*A),M.set(f,p*_*A);const x=[A,A,A,A,A,A];P.set(x,d*_*A)}const L=new en;L.setAttribute("position",new Tn(b,v)),L.setAttribute("uv",new Tn(M,p)),L.setAttribute("faceIndex",new Tn(P,d)),e.push(L),r>Xi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function rl(i,e,t){const n=new bi(i,e,t);return n.texture.mapping=ss,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function bp(i,e,t){const n=new Float32Array(_i),r=new ue(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function sl(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function al(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function pa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yp(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Js||c===Qs,u=c===Qi||c===er;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new il(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(l&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new il(i));const f=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Tp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Ap(i,e,t,n){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const v=f.morphAttributes[_];for(let p=0,d=v.length;p<d;p++)e.remove(v[p])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const _ in f)e.update(f[_],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const v=m[_];for(let p=0,d=v.length;p<d;p++)e.update(v[p],i.ARRAY_BUFFER)}}function l(h){const f=[],m=h.index,_=h.attributes.position;let v=0;if(m!==null){const b=m.array;v=m.version;for(let M=0,P=b.length;M<P;M+=3){const L=b[M+0],A=b[M+1],y=b[M+2];f.push(L,A,A,y,y,L)}}else if(_!==void 0){const b=_.array;v=_.version;for(let M=0,P=b.length/3-1;M<P;M+=3){const L=M+0,A=M+1,y=M+2;f.push(L,A,A,y,y,L)}}else return;const p=new(Sc(f)?Rc:Cc)(f,1);p.version=v;const d=s.get(h);d&&e.remove(d),s.set(h,p)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function wp(i,e,t,n){const r=n.isWebGL2;let s;function a(m){s=m}let o,c;function l(m){o=m.type,c=m.bytesPerElement}function u(m,_){i.drawElements(s,_,o,m*c),t.update(_,s,1)}function h(m,_,v){if(v===0)return;let p,d;if(r)p=i,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,_,o,m*c,v),t.update(_,s,v)}function f(m,_,v){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<v;d++)this.render(m[d]/c,_[d]);else{p.multiDrawElementsWEBGL(s,_,0,o,m,0,v);let d=0;for(let b=0;b<v;b++)d+=_[b];t.update(d,s,1)}}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function Cp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Rp(i,e){return i[0]-e[0]}function Pp(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Lp(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new Ft,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,h){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=m!==void 0?m.length:0;let v=s.get(u);if(v===void 0||v.count!==_){let B=function(){K.dispose(),s.delete(u),u.removeEventListener("dispose",B)};v!==void 0&&v.texture.dispose();const b=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,P=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],y=u.morphAttributes.color||[];let N=0;b===!0&&(N=1),M===!0&&(N=2),P===!0&&(N=3);let k=u.attributes.position.count*N,x=1;k>e.maxTextureSize&&(x=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const T=new Float32Array(k*x*4*_),K=new Tc(T,k,x,_);K.type=kn,K.needsUpdate=!0;const se=N*4;for(let ee=0;ee<_;ee++){const Z=L[ee],w=A[ee],j=y[ee],Y=k*x*4*ee;for(let W=0;W<Z.count;W++){const te=W*se;b===!0&&(a.fromBufferAttribute(Z,W),T[Y+te+0]=a.x,T[Y+te+1]=a.y,T[Y+te+2]=a.z,T[Y+te+3]=0),M===!0&&(a.fromBufferAttribute(w,W),T[Y+te+4]=a.x,T[Y+te+5]=a.y,T[Y+te+6]=a.z,T[Y+te+7]=0),P===!0&&(a.fromBufferAttribute(j,W),T[Y+te+8]=a.x,T[Y+te+9]=a.y,T[Y+te+10]=a.z,T[Y+te+11]=j.itemSize===4?a.w:1)}}v={count:_,texture:K,size:new it(k,x)},s.set(u,v),u.addEventListener("dispose",B)}let p=0;for(let b=0;b<f.length;b++)p+=f[b];const d=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",d),h.getUniforms().setValue(i,"morphTargetInfluences",f),h.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{const m=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==m){_=[];for(let M=0;M<m;M++)_[M]=[M,0];n[u.id]=_}for(let M=0;M<m;M++){const P=_[M];P[0]=M,P[1]=f[M]}_.sort(Pp);for(let M=0;M<8;M++)M<m&&_[M][1]?(o[M][0]=_[M][0],o[M][1]=_[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(Rp);const v=u.morphAttributes.position,p=u.morphAttributes.normal;let d=0;for(let M=0;M<8;M++){const P=o[M],L=P[0],A=P[1];L!==Number.MAX_SAFE_INTEGER&&A?(v&&u.getAttribute("morphTarget"+M)!==v[L]&&u.setAttribute("morphTarget"+M,v[L]),p&&u.getAttribute("morphNormal"+M)!==p[L]&&u.setAttribute("morphNormal"+M,p[L]),r[M]=A,d+=A):(v&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),p&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),r[M]=0)}const b=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(i,"morphTargetBaseInfluence",b),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function Dp(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class Nc extends qt{constructor(e,t,n,r,s,a,o,c,l,u){if(u=u!==void 0?u:Ei,u!==Ei&&u!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ei&&(n=ei),n===void 0&&u===tr&&(n=xi),super(null,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Yt,this.minFilter=c!==void 0?c:Yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Oc=new qt,Fc=new Nc(1,1);Fc.compareFunction=Mc;const Bc=new Tc,zc=new mh,kc=new Dc,ol=[],ll=[],cl=new Float32Array(16),ul=new Float32Array(9),hl=new Float32Array(4);function ar(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ol[r];if(s===void 0&&(s=new Float32Array(r),ol[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function It(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function cs(i,e){let t=ll[e];t===void 0&&(t=new Int32Array(e),ll[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ip(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2fv(this.addr,e),It(t,e)}}function Np(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;i.uniform3fv(this.addr,e),It(t,e)}}function Op(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4fv(this.addr,e),It(t,e)}}function Fp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,n))return;hl.set(n),i.uniformMatrix2fv(this.addr,!1,hl),It(t,n)}}function Bp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,n))return;ul.set(n),i.uniformMatrix3fv(this.addr,!1,ul),It(t,n)}}function zp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,n))return;cl.set(n),i.uniformMatrix4fv(this.addr,!1,cl),It(t,n)}}function kp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Vp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2iv(this.addr,e),It(t,e)}}function Gp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3iv(this.addr,e),It(t,e)}}function Hp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4iv(this.addr,e),It(t,e)}}function Wp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2uiv(this.addr,e),It(t,e)}}function qp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3uiv(this.addr,e),It(t,e)}}function jp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4uiv(this.addr,e),It(t,e)}}function Yp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Fc:Oc;t.setTexture2D(e||s,r)}function Kp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||zc,r)}function Zp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||kc,r)}function $p(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Bc,r)}function Jp(i){switch(i){case 5126:return Ip;case 35664:return Up;case 35665:return Np;case 35666:return Op;case 35674:return Fp;case 35675:return Bp;case 35676:return zp;case 5124:case 35670:return kp;case 35667:case 35671:return Vp;case 35668:case 35672:return Gp;case 35669:case 35673:return Hp;case 5125:return Wp;case 36294:return Xp;case 36295:return qp;case 36296:return jp;case 35678:case 36198:case 36298:case 36306:case 35682:return Yp;case 35679:case 36299:case 36307:return Kp;case 35680:case 36300:case 36308:case 36293:return Zp;case 36289:case 36303:case 36311:case 36292:return $p}}function Qp(i,e){i.uniform1fv(this.addr,e)}function em(i,e){const t=ar(e,this.size,2);i.uniform2fv(this.addr,t)}function tm(i,e){const t=ar(e,this.size,3);i.uniform3fv(this.addr,t)}function nm(i,e){const t=ar(e,this.size,4);i.uniform4fv(this.addr,t)}function im(i,e){const t=ar(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function rm(i,e){const t=ar(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function sm(i,e){const t=ar(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function am(i,e){i.uniform1iv(this.addr,e)}function om(i,e){i.uniform2iv(this.addr,e)}function lm(i,e){i.uniform3iv(this.addr,e)}function cm(i,e){i.uniform4iv(this.addr,e)}function um(i,e){i.uniform1uiv(this.addr,e)}function hm(i,e){i.uniform2uiv(this.addr,e)}function fm(i,e){i.uniform3uiv(this.addr,e)}function dm(i,e){i.uniform4uiv(this.addr,e)}function pm(i,e,t){const n=this.cache,r=e.length,s=cs(t,r);Dt(n,s)||(i.uniform1iv(this.addr,s),It(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Oc,s[a])}function mm(i,e,t){const n=this.cache,r=e.length,s=cs(t,r);Dt(n,s)||(i.uniform1iv(this.addr,s),It(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||zc,s[a])}function _m(i,e,t){const n=this.cache,r=e.length,s=cs(t,r);Dt(n,s)||(i.uniform1iv(this.addr,s),It(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||kc,s[a])}function gm(i,e,t){const n=this.cache,r=e.length,s=cs(t,r);Dt(n,s)||(i.uniform1iv(this.addr,s),It(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Bc,s[a])}function vm(i){switch(i){case 5126:return Qp;case 35664:return em;case 35665:return tm;case 35666:return nm;case 35674:return im;case 35675:return rm;case 35676:return sm;case 5124:case 35670:return am;case 35667:case 35671:return om;case 35668:case 35672:return lm;case 35669:case 35673:return cm;case 5125:return um;case 36294:return hm;case 36295:return fm;case 36296:return dm;case 35678:case 36198:case 36298:case 36306:case 35682:return pm;case 35679:case 36299:case 36307:return mm;case 35680:case 36300:case 36308:case 36293:return _m;case 36289:case 36303:case 36311:case 36292:return gm}}class xm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jp(t.type)}}class Em{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vm(t.type)}}class Mm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Gs=/(\w+)(\])?(\[|\.)?/g;function fl(i,e){i.seq.push(e),i.map[e.id]=e}function Sm(i,e,t){const n=i.name,r=n.length;for(Gs.lastIndex=0;;){const s=Gs.exec(n),a=Gs.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){fl(t,l===void 0?new xm(o,i,e):new Em(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Mm(o),fl(t,h)),t=h}}}class Zr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Sm(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function dl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const bm=37297;let ym=0;function Tm(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Am(i){const e=Et.getPrimaries(Et.workingColorSpace),t=Et.getPrimaries(i);let n;switch(e===t?n="":e===ts&&t===es?n="LinearDisplayP3ToLinearSRGB":e===es&&t===ts&&(n="LinearSRGBToLinearDisplayP3"),i){case qn:case as:return[n,"LinearTransferOETF"];case zt:case ua:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function pl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Tm(i.getShaderSource(e),a)}else return r}function wm(i,e){const t=Am(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Cm(i,e){let t;switch(e){case Bu:t="Linear";break;case zu:t="Reinhard";break;case ku:t="OptimizedCineon";break;case Vu:t="ACESFilmic";break;case Hu:t="AgX";break;case Gu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Rm(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(qi).join(`
`)}function Pm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qi).join(`
`)}function Lm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Dm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function qi(i){return i!==""}function ml(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _l(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Im=/^[ \t]*#include +<([\w\d./]+)>/gm;function sa(i){return i.replace(Im,Nm)}const Um=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Nm(i,e){let t=ut[e];if(t===void 0){const n=Um.get(e);if(n!==void 0)t=ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return sa(t)}const Om=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gl(i){return i.replace(Om,Fm)}function Fm(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function vl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(e+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Bm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===uc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===fu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Bn&&(e="SHADOWMAP_TYPE_VSM"),e}function zm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Qi:case er:e="ENVMAP_TYPE_CUBE";break;case ss:e="ENVMAP_TYPE_CUBE_UV";break}return e}function km(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case er:e="ENVMAP_MODE_REFRACTION";break}return e}function Vm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case la:e="ENVMAP_BLENDING_MULTIPLY";break;case Ou:e="ENVMAP_BLENDING_MIX";break;case Fu:e="ENVMAP_BLENDING_ADD";break}return e}function Gm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Hm(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Bm(t),l=zm(t),u=km(t),h=Vm(t),f=Gm(t),m=t.isWebGL2?"":Rm(t),_=Pm(t),v=Lm(s),p=r.createProgram();let d,b,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(qi).join(`
`),d.length>0&&(d+=`
`),b=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(qi).join(`
`),b.length>0&&(b+=`
`)):(d=[vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qi).join(`
`),b=[m,vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?ut.tonemapping_pars_fragment:"",t.toneMapping!==ii?Cm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,wm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qi).join(`
`)),a=sa(a),a=ml(a,t),a=_l(a,t),o=sa(o),o=ml(o,t),o=_l(o,t),a=gl(a),o=gl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,d=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Uo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const P=M+d+a,L=M+b+o,A=dl(r,r.VERTEX_SHADER,P),y=dl(r,r.FRAGMENT_SHADER,L);r.attachShader(p,A),r.attachShader(p,y),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function N(K){if(i.debug.checkShaderErrors){const se=r.getProgramInfoLog(p).trim(),B=r.getShaderInfoLog(A).trim(),ee=r.getShaderInfoLog(y).trim();let Z=!0,w=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,p,A,y);else{const j=pl(r,A,"vertex"),Y=pl(r,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+K.name+`
Material Type: `+K.type+`

Program Info Log: `+se+`
`+j+`
`+Y)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(B===""||ee==="")&&(w=!1);w&&(K.diagnostics={runnable:Z,programLog:se,vertexShader:{log:B,prefix:d},fragmentShader:{log:ee,prefix:b}})}r.deleteShader(A),r.deleteShader(y),k=new Zr(r,p),x=Dm(r,p)}let k;this.getUniforms=function(){return k===void 0&&N(this),k};let x;this.getAttributes=function(){return x===void 0&&N(this),x};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(p,bm)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ym++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=y,this}let Wm=0;class Xm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new qm(e),t.set(e,n)),n}}class qm{constructor(e){this.id=Wm++,this.code=e,this.usedTimes=0}}function jm(i,e,t,n,r,s,a){const o=new Ac,c=new Xm,l=new Set,u=[],h=r.isWebGL2,f=r.logarithmicDepthBuffer,m=r.vertexTextures;let _=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function d(x,T,K,se,B){const ee=se.fog,Z=B.geometry,w=x.isMeshStandardMaterial?se.environment:null,j=(x.isMeshStandardMaterial?t:e).get(x.envMap||w),Y=j&&j.mapping===ss?j.image.height:null,W=v[x.type];x.precision!==null&&(_=r.getMaxPrecision(x.precision),_!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",_,"instead."));const te=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,re=te!==void 0?te.length:0;let me=0;Z.morphAttributes.position!==void 0&&(me=1),Z.morphAttributes.normal!==void 0&&(me=2),Z.morphAttributes.color!==void 0&&(me=3);let q,V,le,ae;if(W){const st=bn[W];q=st.vertexShader,V=st.fragmentShader}else q=x.vertexShader,V=x.fragmentShader,c.update(x),le=c.getVertexShaderID(x),ae=c.getFragmentShaderID(x);const H=i.getRenderTarget(),ne=B.isInstancedMesh===!0,X=B.isBatchedMesh===!0,xe=!!x.map,O=!!x.matcap,ye=!!j,ce=!!x.aoMap,pe=!!x.lightMap,de=!!x.bumpMap,oe=!!x.normalMap,G=!!x.displacementMap,S=!!x.emissiveMap,E=!!x.metalnessMap,$=!!x.roughnessMap,ge=x.anisotropy>0,fe=x.clearcoat>0,ve=x.iridescence>0,Pe=x.sheen>0,Te=x.transmission>0,Ae=ge&&!!x.anisotropyMap,Oe=fe&&!!x.clearcoatMap,Fe=fe&&!!x.clearcoatNormalMap,we=fe&&!!x.clearcoatRoughnessMap,je=ve&&!!x.iridescenceMap,Ze=ve&&!!x.iridescenceThicknessMap,Ye=Pe&&!!x.sheenColorMap,Be=Pe&&!!x.sheenRoughnessMap,Ne=!!x.specularMap,Ke=!!x.specularColorMap,z=!!x.specularIntensityMap,Ue=Te&&!!x.transmissionMap,Ve=Te&&!!x.thicknessMap,Xe=!!x.gradientMap,I=!!x.alphaMap,Ee=x.alphaTest>0,_e=!!x.alphaHash,Ie=!!x.extensions;let De=ii;x.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(De=i.toneMapping);const et={isWebGL2:h,shaderID:W,shaderType:x.type,shaderName:x.name,vertexShader:q,fragmentShader:V,defines:x.defines,customVertexShaderID:le,customFragmentShaderID:ae,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:_,batching:X,instancing:ne,instancingColor:ne&&B.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:H===null?i.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:qn,alphaToCoverage:!!x.alphaToCoverage,map:xe,matcap:O,envMap:ye,envMapMode:ye&&j.mapping,envMapCubeUVHeight:Y,aoMap:ce,lightMap:pe,bumpMap:de,normalMap:oe,displacementMap:m&&G,emissiveMap:S,normalMapObjectSpace:oe&&x.normalMapType===eh,normalMapTangentSpace:oe&&x.normalMapType===Ec,metalnessMap:E,roughnessMap:$,anisotropy:ge,anisotropyMap:Ae,clearcoat:fe,clearcoatMap:Oe,clearcoatNormalMap:Fe,clearcoatRoughnessMap:we,iridescence:ve,iridescenceMap:je,iridescenceThicknessMap:Ze,sheen:Pe,sheenColorMap:Ye,sheenRoughnessMap:Be,specularMap:Ne,specularColorMap:Ke,specularIntensityMap:z,transmission:Te,transmissionMap:Ue,thicknessMap:Ve,gradientMap:Xe,opaque:x.transparent===!1&&x.blending===Yi&&x.alphaToCoverage===!1,alphaMap:I,alphaTest:Ee,alphaHash:_e,combine:x.combine,mapUv:xe&&p(x.map.channel),aoMapUv:ce&&p(x.aoMap.channel),lightMapUv:pe&&p(x.lightMap.channel),bumpMapUv:de&&p(x.bumpMap.channel),normalMapUv:oe&&p(x.normalMap.channel),displacementMapUv:G&&p(x.displacementMap.channel),emissiveMapUv:S&&p(x.emissiveMap.channel),metalnessMapUv:E&&p(x.metalnessMap.channel),roughnessMapUv:$&&p(x.roughnessMap.channel),anisotropyMapUv:Ae&&p(x.anisotropyMap.channel),clearcoatMapUv:Oe&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Be&&p(x.sheenRoughnessMap.channel),specularMapUv:Ne&&p(x.specularMap.channel),specularColorMapUv:Ke&&p(x.specularColorMap.channel),specularIntensityMapUv:z&&p(x.specularIntensityMap.channel),transmissionMapUv:Ue&&p(x.transmissionMap.channel),thicknessMapUv:Ve&&p(x.thicknessMap.channel),alphaMapUv:I&&p(x.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(oe||ge),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Z.attributes.uv&&(xe||I),fog:!!ee,useFog:x.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:B.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:me,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&K.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,useLegacyLights:i._useLegacyLights,decodeVideoTexture:xe&&x.map.isVideoTexture===!0&&Et.getTransfer(x.map.colorSpace)===Mt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ln,flipSided:x.side===Qt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:Ie&&x.extensions.derivatives===!0,extensionFragDepth:Ie&&x.extensions.fragDepth===!0,extensionDrawBuffers:Ie&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ie&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ie&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ie&&x.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return et.vertexUv1s=l.has(1),et.vertexUv2s=l.has(2),et.vertexUv3s=l.has(3),l.clear(),et}function b(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const K in x.defines)T.push(K),T.push(x.defines[K]);return x.isRawShaderMaterial===!1&&(M(T,x),P(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function M(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function P(x,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.alphaToCoverage&&o.enable(20),x.push(o.mask)}function L(x){const T=v[x.type];let K;if(T){const se=bn[T];K=Ch.clone(se.uniforms)}else K=x.uniforms;return K}function A(x,T){let K;for(let se=0,B=u.length;se<B;se++){const ee=u[se];if(ee.cacheKey===T){K=ee,++K.usedTimes;break}}return K===void 0&&(K=new Hm(i,T,x,s),u.push(K)),K}function y(x){if(--x.usedTimes===0){const T=u.indexOf(x);u[T]=u[u.length-1],u.pop(),x.destroy()}}function N(x){c.remove(x)}function k(){c.dispose()}return{getParameters:d,getProgramCacheKey:b,getUniforms:L,acquireProgram:A,releaseProgram:y,releaseShaderCache:N,programs:u,dispose:k}}function Ym(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Km(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function xl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function El(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,f,m,_,v,p){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:v,group:p},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=v,d.group=p),e++,d}function o(h,f,m,_,v,p){const d=a(h,f,m,_,v,p);m.transmission>0?n.push(d):m.transparent===!0?r.push(d):t.push(d)}function c(h,f,m,_,v,p){const d=a(h,f,m,_,v,p);m.transmission>0?n.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function l(h,f){t.length>1&&t.sort(h||Km),n.length>1&&n.sort(f||xl),r.length>1&&r.sort(f||xl)}function u(){for(let h=e,f=i.length;h<f;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function Zm(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new El,i.set(n,[a])):r>=s.length?(a=new El,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function $m(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ue,color:new ht};break;case"SpotLight":t={position:new ue,direction:new ue,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ue,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ue,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new ue,halfWidth:new ue,halfHeight:new ue};break}return i[e.id]=t,t}}}function Jm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Qm=0;function e_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function t_(i,e){const t=new $m,n=Jm(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new ue);const s=new ue,a=new Pt,o=new Pt;function c(u,h){let f=0,m=0,_=0;for(let K=0;K<9;K++)r.probe[K].set(0,0,0);let v=0,p=0,d=0,b=0,M=0,P=0,L=0,A=0,y=0,N=0,k=0;u.sort(e_);const x=h===!0?Math.PI:1;for(let K=0,se=u.length;K<se;K++){const B=u[K],ee=B.color,Z=B.intensity,w=B.distance,j=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)f+=ee.r*Z*x,m+=ee.g*Z*x,_+=ee.b*Z*x;else if(B.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(B.sh.coefficients[Y],Z);k++}else if(B.isDirectionalLight){const Y=t.get(B);if(Y.color.copy(B.color).multiplyScalar(B.intensity*x),B.castShadow){const W=B.shadow,te=n.get(B);te.shadowBias=W.bias,te.shadowNormalBias=W.normalBias,te.shadowRadius=W.radius,te.shadowMapSize=W.mapSize,r.directionalShadow[v]=te,r.directionalShadowMap[v]=j,r.directionalShadowMatrix[v]=B.shadow.matrix,P++}r.directional[v]=Y,v++}else if(B.isSpotLight){const Y=t.get(B);Y.position.setFromMatrixPosition(B.matrixWorld),Y.color.copy(ee).multiplyScalar(Z*x),Y.distance=w,Y.coneCos=Math.cos(B.angle),Y.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Y.decay=B.decay,r.spot[d]=Y;const W=B.shadow;if(B.map&&(r.spotLightMap[y]=B.map,y++,W.updateMatrices(B),B.castShadow&&N++),r.spotLightMatrix[d]=W.matrix,B.castShadow){const te=n.get(B);te.shadowBias=W.bias,te.shadowNormalBias=W.normalBias,te.shadowRadius=W.radius,te.shadowMapSize=W.mapSize,r.spotShadow[d]=te,r.spotShadowMap[d]=j,A++}d++}else if(B.isRectAreaLight){const Y=t.get(B);Y.color.copy(ee).multiplyScalar(Z),Y.halfWidth.set(B.width*.5,0,0),Y.halfHeight.set(0,B.height*.5,0),r.rectArea[b]=Y,b++}else if(B.isPointLight){const Y=t.get(B);if(Y.color.copy(B.color).multiplyScalar(B.intensity*x),Y.distance=B.distance,Y.decay=B.decay,B.castShadow){const W=B.shadow,te=n.get(B);te.shadowBias=W.bias,te.shadowNormalBias=W.normalBias,te.shadowRadius=W.radius,te.shadowMapSize=W.mapSize,te.shadowCameraNear=W.camera.near,te.shadowCameraFar=W.camera.far,r.pointShadow[p]=te,r.pointShadowMap[p]=j,r.pointShadowMatrix[p]=B.shadow.matrix,L++}r.point[p]=Y,p++}else if(B.isHemisphereLight){const Y=t.get(B);Y.skyColor.copy(B.color).multiplyScalar(Z*x),Y.groundColor.copy(B.groundColor).multiplyScalar(Z*x),r.hemi[M]=Y,M++}}b>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=We.LTC_FLOAT_1,r.rectAreaLTC2=We.LTC_FLOAT_2):(r.rectAreaLTC1=We.LTC_HALF_1,r.rectAreaLTC2=We.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=We.LTC_FLOAT_1,r.rectAreaLTC2=We.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=We.LTC_HALF_1,r.rectAreaLTC2=We.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=_;const T=r.hash;(T.directionalLength!==v||T.pointLength!==p||T.spotLength!==d||T.rectAreaLength!==b||T.hemiLength!==M||T.numDirectionalShadows!==P||T.numPointShadows!==L||T.numSpotShadows!==A||T.numSpotMaps!==y||T.numLightProbes!==k)&&(r.directional.length=v,r.spot.length=d,r.rectArea.length=b,r.point.length=p,r.hemi.length=M,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=A+y-N,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=k,T.directionalLength=v,T.pointLength=p,T.spotLength=d,T.rectAreaLength=b,T.hemiLength=M,T.numDirectionalShadows=P,T.numPointShadows=L,T.numSpotShadows=A,T.numSpotMaps=y,T.numLightProbes=k,r.version=Qm++)}function l(u,h){let f=0,m=0,_=0,v=0,p=0;const d=h.matrixWorldInverse;for(let b=0,M=u.length;b<M;b++){const P=u[b];if(P.isDirectionalLight){const L=r.directional[f];L.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(d),f++}else if(P.isSpotLight){const L=r.spot[_];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(d),L.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(d),_++}else if(P.isRectAreaLight){const L=r.rectArea[v];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(d),o.identity(),a.copy(P.matrixWorld),a.premultiply(d),o.extractRotation(a),L.halfWidth.set(P.width*.5,0,0),L.halfHeight.set(0,P.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),v++}else if(P.isPointLight){const L=r.point[m];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(d),m++}else if(P.isHemisphereLight){const L=r.hemi[p];L.direction.setFromMatrixPosition(P.matrixWorld),L.direction.transformDirection(d),p++}}}return{setup:c,setupView:l,state:r}}function Ml(i,e){const t=new t_(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(h){n.push(h)}function o(h){r.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function n_(i,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let c;return o===void 0?(c=new Ml(i,e),t.set(s,[c])):a>=o.length?(c=new Ml(i,e),o.push(c)):c=o[a],c}function r(){t=new WeakMap}return{get:n,dispose:r}}class i_ extends rr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ju,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class r_ extends rr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const s_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function o_(i,e,t){let n=new da;const r=new it,s=new it,a=new Ft,o=new i_({depthPacking:Qu}),c=new r_,l={},u=t.maxTextureSize,h={[ai]:Qt,[Qt]:ai,[ln]:ln},f=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:s_,fragmentShader:a_}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new en;_.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Xt(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uc;let d=this.type;this.render=function(A,y,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const k=i.getRenderTarget(),x=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),K=i.state;K.setBlending(ni),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const se=d!==Bn&&this.type===Bn,B=d===Bn&&this.type!==Bn;for(let ee=0,Z=A.length;ee<Z;ee++){const w=A[ee],j=w.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",w,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const Y=j.getFrameExtents();if(r.multiply(Y),s.copy(j.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,j.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,j.mapSize.y=s.y)),j.map===null||se===!0||B===!0){const te=this.type!==Bn?{minFilter:Yt,magFilter:Yt}:{};j.map!==null&&j.map.dispose(),j.map=new bi(r.x,r.y,te),j.map.texture.name=w.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const W=j.getViewportCount();for(let te=0;te<W;te++){const re=j.getViewport(te);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),K.viewport(a),j.updateMatrices(w,te),n=j.getFrustum(),P(y,N,j.camera,w,this.type)}j.isPointLightShadow!==!0&&this.type===Bn&&b(j,N),j.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(k,x,T)};function b(A,y){const N=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new bi(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(y,null,N,f,v,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(y,null,N,m,v,null)}function M(A,y,N,k){let x=null;const T=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)x=T;else if(x=N.isPointLight===!0?c:o,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const K=x.uuid,se=y.uuid;let B=l[K];B===void 0&&(B={},l[K]=B);let ee=B[se];ee===void 0&&(ee=x.clone(),B[se]=ee,y.addEventListener("dispose",L)),x=ee}if(x.visible=y.visible,x.wireframe=y.wireframe,k===Bn?x.side=y.shadowSide!==null?y.shadowSide:y.side:x.side=y.shadowSide!==null?y.shadowSide:h[y.side],x.alphaMap=y.alphaMap,x.alphaTest=y.alphaTest,x.map=y.map,x.clipShadows=y.clipShadows,x.clippingPlanes=y.clippingPlanes,x.clipIntersection=y.clipIntersection,x.displacementMap=y.displacementMap,x.displacementScale=y.displacementScale,x.displacementBias=y.displacementBias,x.wireframeLinewidth=y.wireframeLinewidth,x.linewidth=y.linewidth,N.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const K=i.properties.get(x);K.light=N}return x}function P(A,y,N,k,x){if(A.visible===!1)return;if(A.layers.test(y.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===Bn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const se=e.update(A),B=A.material;if(Array.isArray(B)){const ee=se.groups;for(let Z=0,w=ee.length;Z<w;Z++){const j=ee[Z],Y=B[j.materialIndex];if(Y&&Y.visible){const W=M(A,Y,k,x);A.onBeforeShadow(i,A,y,N,se,W,j),i.renderBufferDirect(N,null,se,W,A,j),A.onAfterShadow(i,A,y,N,se,W,j)}}}else if(B.visible){const ee=M(A,B,k,x);A.onBeforeShadow(i,A,y,N,se,ee,null),i.renderBufferDirect(N,null,se,ee,A,null),A.onAfterShadow(i,A,y,N,se,ee,null)}}const K=A.children;for(let se=0,B=K.length;se<B;se++)P(K[se],y,N,k,x)}function L(A){A.target.removeEventListener("dispose",L);for(const N in l){const k=l[N],x=A.target.uuid;x in k&&(k[x].dispose(),delete k[x])}}}function l_(i,e,t){const n=t.isWebGL2;function r(){let I=!1;const Ee=new Ft;let _e=null;const Ie=new Ft(0,0,0,0);return{setMask:function(De){_e!==De&&!I&&(i.colorMask(De,De,De,De),_e=De)},setLocked:function(De){I=De},setClear:function(De,et,st,gt,bt){bt===!0&&(De*=gt,et*=gt,st*=gt),Ee.set(De,et,st,gt),Ie.equals(Ee)===!1&&(i.clearColor(De,et,st,gt),Ie.copy(Ee))},reset:function(){I=!1,_e=null,Ie.set(-1,0,0,0)}}}function s(){let I=!1,Ee=null,_e=null,Ie=null;return{setTest:function(De){De?ne(i.DEPTH_TEST):X(i.DEPTH_TEST)},setMask:function(De){Ee!==De&&!I&&(i.depthMask(De),Ee=De)},setFunc:function(De){if(_e!==De){switch(De){case Ru:i.depthFunc(i.NEVER);break;case Pu:i.depthFunc(i.ALWAYS);break;case Lu:i.depthFunc(i.LESS);break;case Jr:i.depthFunc(i.LEQUAL);break;case Du:i.depthFunc(i.EQUAL);break;case Iu:i.depthFunc(i.GEQUAL);break;case Uu:i.depthFunc(i.GREATER);break;case Nu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=De}},setLocked:function(De){I=De},setClear:function(De){Ie!==De&&(i.clearDepth(De),Ie=De)},reset:function(){I=!1,Ee=null,_e=null,Ie=null}}}function a(){let I=!1,Ee=null,_e=null,Ie=null,De=null,et=null,st=null,gt=null,bt=null;return{setTest:function(rt){I||(rt?ne(i.STENCIL_TEST):X(i.STENCIL_TEST))},setMask:function(rt){Ee!==rt&&!I&&(i.stencilMask(rt),Ee=rt)},setFunc:function(rt,xt,St){(_e!==rt||Ie!==xt||De!==St)&&(i.stencilFunc(rt,xt,St),_e=rt,Ie=xt,De=St)},setOp:function(rt,xt,St){(et!==rt||st!==xt||gt!==St)&&(i.stencilOp(rt,xt,St),et=rt,st=xt,gt=St)},setLocked:function(rt){I=rt},setClear:function(rt){bt!==rt&&(i.clearStencil(rt),bt=rt)},reset:function(){I=!1,Ee=null,_e=null,Ie=null,De=null,et=null,st=null,gt=null,bt=null}}}const o=new r,c=new s,l=new a,u=new WeakMap,h=new WeakMap;let f={},m={},_=new WeakMap,v=[],p=null,d=!1,b=null,M=null,P=null,L=null,A=null,y=null,N=null,k=new ht(0,0,0),x=0,T=!1,K=null,se=null,B=null,ee=null,Z=null;const w=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,Y=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),j=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),j=Y>=2);let te=null,re={};const me=i.getParameter(i.SCISSOR_BOX),q=i.getParameter(i.VIEWPORT),V=new Ft().fromArray(me),le=new Ft().fromArray(q);function ae(I,Ee,_e,Ie){const De=new Uint8Array(4),et=i.createTexture();i.bindTexture(I,et),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let st=0;st<_e;st++)n&&(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)?i.texImage3D(Ee,0,i.RGBA,1,1,Ie,0,i.RGBA,i.UNSIGNED_BYTE,De):i.texImage2D(Ee+st,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,De);return et}const H={};H[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(H[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ne(i.DEPTH_TEST),c.setFunc(Jr),G(!1),S(Qa),ne(i.CULL_FACE),de(ni);function ne(I){f[I]!==!0&&(i.enable(I),f[I]=!0)}function X(I){f[I]!==!1&&(i.disable(I),f[I]=!1)}function xe(I,Ee){return m[I]!==Ee?(i.bindFramebuffer(I,Ee),m[I]=Ee,n&&(I===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Ee),I===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Ee)),!0):!1}function O(I,Ee){let _e=v,Ie=!1;if(I)if(_e=_.get(Ee),_e===void 0&&(_e=[],_.set(Ee,_e)),I.isWebGLMultipleRenderTargets){const De=I.texture;if(_e.length!==De.length||_e[0]!==i.COLOR_ATTACHMENT0){for(let et=0,st=De.length;et<st;et++)_e[et]=i.COLOR_ATTACHMENT0+et;_e.length=De.length,Ie=!0}}else _e[0]!==i.COLOR_ATTACHMENT0&&(_e[0]=i.COLOR_ATTACHMENT0,Ie=!0);else _e[0]!==i.BACK&&(_e[0]=i.BACK,Ie=!0);Ie&&(t.isWebGL2?i.drawBuffers(_e):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(_e))}function ye(I){return p!==I?(i.useProgram(I),p=I,!0):!1}const ce={[mi]:i.FUNC_ADD,[pu]:i.FUNC_SUBTRACT,[mu]:i.FUNC_REVERSE_SUBTRACT};if(n)ce[io]=i.MIN,ce[ro]=i.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(ce[io]=I.MIN_EXT,ce[ro]=I.MAX_EXT)}const pe={[_u]:i.ZERO,[gu]:i.ONE,[vu]:i.SRC_COLOR,[Zs]:i.SRC_ALPHA,[yu]:i.SRC_ALPHA_SATURATE,[Su]:i.DST_COLOR,[Eu]:i.DST_ALPHA,[xu]:i.ONE_MINUS_SRC_COLOR,[$s]:i.ONE_MINUS_SRC_ALPHA,[bu]:i.ONE_MINUS_DST_COLOR,[Mu]:i.ONE_MINUS_DST_ALPHA,[Tu]:i.CONSTANT_COLOR,[Au]:i.ONE_MINUS_CONSTANT_COLOR,[wu]:i.CONSTANT_ALPHA,[Cu]:i.ONE_MINUS_CONSTANT_ALPHA};function de(I,Ee,_e,Ie,De,et,st,gt,bt,rt){if(I===ni){d===!0&&(X(i.BLEND),d=!1);return}if(d===!1&&(ne(i.BLEND),d=!0),I!==du){if(I!==b||rt!==T){if((M!==mi||A!==mi)&&(i.blendEquation(i.FUNC_ADD),M=mi,A=mi),rt)switch(I){case Yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case eo:i.blendFunc(i.ONE,i.ONE);break;case to:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case no:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case eo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case to:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case no:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}P=null,L=null,y=null,N=null,k.set(0,0,0),x=0,b=I,T=rt}return}De=De||Ee,et=et||_e,st=st||Ie,(Ee!==M||De!==A)&&(i.blendEquationSeparate(ce[Ee],ce[De]),M=Ee,A=De),(_e!==P||Ie!==L||et!==y||st!==N)&&(i.blendFuncSeparate(pe[_e],pe[Ie],pe[et],pe[st]),P=_e,L=Ie,y=et,N=st),(gt.equals(k)===!1||bt!==x)&&(i.blendColor(gt.r,gt.g,gt.b,bt),k.copy(gt),x=bt),b=I,T=!1}function oe(I,Ee){I.side===ln?X(i.CULL_FACE):ne(i.CULL_FACE);let _e=I.side===Qt;Ee&&(_e=!_e),G(_e),I.blending===Yi&&I.transparent===!1?de(ni):de(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),o.setMask(I.colorWrite);const Ie=I.stencilWrite;l.setTest(Ie),Ie&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),$(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):X(i.SAMPLE_ALPHA_TO_COVERAGE)}function G(I){K!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),K=I)}function S(I){I!==uu?(ne(i.CULL_FACE),I!==se&&(I===Qa?i.cullFace(i.BACK):I===hu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):X(i.CULL_FACE),se=I}function E(I){I!==B&&(j&&i.lineWidth(I),B=I)}function $(I,Ee,_e){I?(ne(i.POLYGON_OFFSET_FILL),(ee!==Ee||Z!==_e)&&(i.polygonOffset(Ee,_e),ee=Ee,Z=_e)):X(i.POLYGON_OFFSET_FILL)}function ge(I){I?ne(i.SCISSOR_TEST):X(i.SCISSOR_TEST)}function fe(I){I===void 0&&(I=i.TEXTURE0+w-1),te!==I&&(i.activeTexture(I),te=I)}function ve(I,Ee,_e){_e===void 0&&(te===null?_e=i.TEXTURE0+w-1:_e=te);let Ie=re[_e];Ie===void 0&&(Ie={type:void 0,texture:void 0},re[_e]=Ie),(Ie.type!==I||Ie.texture!==Ee)&&(te!==_e&&(i.activeTexture(_e),te=_e),i.bindTexture(I,Ee||H[I]),Ie.type=I,Ie.texture=Ee)}function Pe(){const I=re[te];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Te(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Oe(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Fe(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function je(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ze(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ye(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Be(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ne(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ke(I){V.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),V.copy(I))}function z(I){le.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),le.copy(I))}function Ue(I,Ee){let _e=h.get(Ee);_e===void 0&&(_e=new WeakMap,h.set(Ee,_e));let Ie=_e.get(I);Ie===void 0&&(Ie=i.getUniformBlockIndex(Ee,I.name),_e.set(I,Ie))}function Ve(I,Ee){const Ie=h.get(Ee).get(I);u.get(Ee)!==Ie&&(i.uniformBlockBinding(Ee,Ie,I.__bindingPointIndex),u.set(Ee,Ie))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},te=null,re={},m={},_=new WeakMap,v=[],p=null,d=!1,b=null,M=null,P=null,L=null,A=null,y=null,N=null,k=new ht(0,0,0),x=0,T=!1,K=null,se=null,B=null,ee=null,Z=null,V.set(0,0,i.canvas.width,i.canvas.height),le.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:ne,disable:X,bindFramebuffer:xe,drawBuffers:O,useProgram:ye,setBlending:de,setMaterial:oe,setFlipSided:G,setCullFace:S,setLineWidth:E,setPolygonOffset:$,setScissorTest:ge,activeTexture:fe,bindTexture:ve,unbindTexture:Pe,compressedTexImage2D:Te,compressedTexImage3D:Ae,texImage2D:Be,texImage3D:Ne,updateUBOMapping:Ue,uniformBlockBinding:Ve,texStorage2D:Ze,texStorage3D:Ye,texSubImage2D:Oe,texSubImage3D:Fe,compressedTexSubImage2D:we,compressedTexSubImage3D:je,scissor:Ke,viewport:z,reset:Xe}}function c_(i,e,t,n,r,s,a){const o=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,E){return m?new OffscreenCanvas(S,E):is("canvas")}function v(S,E,$,ge){let fe=1;if((S.width>ge||S.height>ge)&&(fe=ge/Math.max(S.width,S.height)),fe<1||E===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const ve=E?ra:Math.floor,Pe=ve(fe*S.width),Te=ve(fe*S.height);h===void 0&&(h=_(Pe,Te));const Ae=$?_(Pe,Te):h;return Ae.width=Pe,Ae.height=Te,Ae.getContext("2d").drawImage(S,0,0,Pe,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+Pe+"x"+Te+")."),Ae}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function p(S){return No(S.width)&&No(S.height)}function d(S){return o?!1:S.wrapS!==En||S.wrapT!==En||S.minFilter!==Yt&&S.minFilter!==Jt}function b(S,E){return S.generateMipmaps&&E&&S.minFilter!==Yt&&S.minFilter!==Jt}function M(S){i.generateMipmap(S)}function P(S,E,$,ge,fe=!1){if(o===!1)return E;if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ve=E;if(E===i.RED&&($===i.FLOAT&&(ve=i.R32F),$===i.HALF_FLOAT&&(ve=i.R16F),$===i.UNSIGNED_BYTE&&(ve=i.R8)),E===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(ve=i.R8UI),$===i.UNSIGNED_SHORT&&(ve=i.R16UI),$===i.UNSIGNED_INT&&(ve=i.R32UI),$===i.BYTE&&(ve=i.R8I),$===i.SHORT&&(ve=i.R16I),$===i.INT&&(ve=i.R32I)),E===i.RG&&($===i.FLOAT&&(ve=i.RG32F),$===i.HALF_FLOAT&&(ve=i.RG16F),$===i.UNSIGNED_BYTE&&(ve=i.RG8)),E===i.RGBA){const Pe=fe?Qr:Et.getTransfer(ge);$===i.FLOAT&&(ve=i.RGBA32F),$===i.HALF_FLOAT&&(ve=i.RGBA16F),$===i.UNSIGNED_BYTE&&(ve=Pe===Mt?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(ve=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(ve=i.RGB5_A1)}return(ve===i.R16F||ve===i.R32F||ve===i.RG16F||ve===i.RG32F||ve===i.RGBA16F||ve===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function L(S,E,$){return b(S,$)===!0||S.isFramebufferTexture&&S.minFilter!==Yt&&S.minFilter!==Jt?Math.log2(Math.max(E.width,E.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?E.mipmaps.length:1}function A(S){return S===Yt||S===so||S===ur?i.NEAREST:i.LINEAR}function y(S){const E=S.target;E.removeEventListener("dispose",y),k(E),E.isVideoTexture&&u.delete(E)}function N(S){const E=S.target;E.removeEventListener("dispose",N),T(E)}function k(S){const E=n.get(S);if(E.__webglInit===void 0)return;const $=S.source,ge=f.get($);if(ge){const fe=ge[E.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&x(S),Object.keys(ge).length===0&&f.delete($)}n.remove(S)}function x(S){const E=n.get(S);i.deleteTexture(E.__webglTexture);const $=S.source,ge=f.get($);delete ge[E.__cacheKey],a.memory.textures--}function T(S){const E=S.texture,$=n.get(S),ge=n.get(E);if(ge.__webglTexture!==void 0&&(i.deleteTexture(ge.__webglTexture),a.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray($.__webglFramebuffer[fe]))for(let ve=0;ve<$.__webglFramebuffer[fe].length;ve++)i.deleteFramebuffer($.__webglFramebuffer[fe][ve]);else i.deleteFramebuffer($.__webglFramebuffer[fe]);$.__webglDepthbuffer&&i.deleteRenderbuffer($.__webglDepthbuffer[fe])}else{if(Array.isArray($.__webglFramebuffer))for(let fe=0;fe<$.__webglFramebuffer.length;fe++)i.deleteFramebuffer($.__webglFramebuffer[fe]);else i.deleteFramebuffer($.__webglFramebuffer);if($.__webglDepthbuffer&&i.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&i.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let fe=0;fe<$.__webglColorRenderbuffer.length;fe++)$.__webglColorRenderbuffer[fe]&&i.deleteRenderbuffer($.__webglColorRenderbuffer[fe]);$.__webglDepthRenderbuffer&&i.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let fe=0,ve=E.length;fe<ve;fe++){const Pe=n.get(E[fe]);Pe.__webglTexture&&(i.deleteTexture(Pe.__webglTexture),a.memory.textures--),n.remove(E[fe])}n.remove(E),n.remove(S)}let K=0;function se(){K=0}function B(){const S=K;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),K+=1,S}function ee(S){const E=[];return E.push(S.wrapS),E.push(S.wrapT),E.push(S.wrapR||0),E.push(S.magFilter),E.push(S.minFilter),E.push(S.anisotropy),E.push(S.internalFormat),E.push(S.format),E.push(S.type),E.push(S.generateMipmaps),E.push(S.premultiplyAlpha),E.push(S.flipY),E.push(S.unpackAlignment),E.push(S.colorSpace),E.join()}function Z(S,E){const $=n.get(S);if(S.isVideoTexture&&oe(S),S.isRenderTargetTexture===!1&&S.version>0&&$.__version!==S.version){const ge=S.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V($,S,E);return}}t.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+E)}function w(S,E){const $=n.get(S);if(S.version>0&&$.__version!==S.version){V($,S,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+E)}function j(S,E){const $=n.get(S);if(S.version>0&&$.__version!==S.version){V($,S,E);return}t.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+E)}function Y(S,E){const $=n.get(S);if(S.version>0&&$.__version!==S.version){le($,S,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+E)}const W={[ea]:i.REPEAT,[En]:i.CLAMP_TO_EDGE,[ta]:i.MIRRORED_REPEAT},te={[Yt]:i.NEAREST,[so]:i.NEAREST_MIPMAP_NEAREST,[ur]:i.NEAREST_MIPMAP_LINEAR,[Jt]:i.LINEAR,[ps]:i.LINEAR_MIPMAP_NEAREST,[gi]:i.LINEAR_MIPMAP_LINEAR},re={[th]:i.NEVER,[oh]:i.ALWAYS,[nh]:i.LESS,[Mc]:i.LEQUAL,[ih]:i.EQUAL,[ah]:i.GEQUAL,[rh]:i.GREATER,[sh]:i.NOTEQUAL};function me(S,E,$){if(E.type===kn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Jt||E.magFilter===ps||E.magFilter===ur||E.magFilter===gi||E.minFilter===Jt||E.minFilter===ps||E.minFilter===ur||E.minFilter===gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),$?(i.texParameteri(S,i.TEXTURE_WRAP_S,W[E.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,W[E.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,W[E.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,te[E.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,te[E.minFilter])):(i.texParameteri(S,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(S,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==En||E.wrapT!==En)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(S,i.TEXTURE_MAG_FILTER,A(E.magFilter)),i.texParameteri(S,i.TEXTURE_MIN_FILTER,A(E.minFilter)),E.minFilter!==Yt&&E.minFilter!==Jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,re[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ge=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Yt||E.minFilter!==ur&&E.minFilter!==gi||E.type===kn&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===Sr&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(S,ge.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function q(S,E){let $=!1;S.__webglInit===void 0&&(S.__webglInit=!0,E.addEventListener("dispose",y));const ge=E.source;let fe=f.get(ge);fe===void 0&&(fe={},f.set(ge,fe));const ve=ee(E);if(ve!==S.__cacheKey){fe[ve]===void 0&&(fe[ve]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,$=!0),fe[ve].usedTimes++;const Pe=fe[S.__cacheKey];Pe!==void 0&&(fe[S.__cacheKey].usedTimes--,Pe.usedTimes===0&&x(E)),S.__cacheKey=ve,S.__webglTexture=fe[ve].texture}return $}function V(S,E,$){let ge=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ge=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ge=i.TEXTURE_3D);const fe=q(S,E),ve=E.source;t.bindTexture(ge,S.__webglTexture,i.TEXTURE0+$);const Pe=n.get(ve);if(ve.version!==Pe.__version||fe===!0){t.activeTexture(i.TEXTURE0+$);const Te=Et.getPrimaries(Et.workingColorSpace),Ae=E.colorSpace===_n?null:Et.getPrimaries(E.colorSpace),Oe=E.colorSpace===_n||Te===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const Fe=d(E)&&p(E.image)===!1;let we=v(E.image,Fe,!1,r.maxTextureSize);we=G(E,we);const je=p(we)||o,Ze=s.convert(E.format,E.colorSpace);let Ye=s.convert(E.type),Be=P(E.internalFormat,Ze,Ye,E.colorSpace,E.isVideoTexture);me(ge,E,je);let Ne;const Ke=E.mipmaps,z=o&&E.isVideoTexture!==!0&&Be!==vc,Ue=Pe.__version===void 0||fe===!0,Ve=ve.dataReady,Xe=L(E,we,je);if(E.isDepthTexture)Be=i.DEPTH_COMPONENT,o?E.type===kn?Be=i.DEPTH_COMPONENT32F:E.type===ei?Be=i.DEPTH_COMPONENT24:E.type===xi?Be=i.DEPTH24_STENCIL8:Be=i.DEPTH_COMPONENT16:E.type===kn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Ei&&Be===i.DEPTH_COMPONENT&&E.type!==ca&&E.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=ei,Ye=s.convert(E.type)),E.format===tr&&Be===i.DEPTH_COMPONENT&&(Be=i.DEPTH_STENCIL,E.type!==xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=xi,Ye=s.convert(E.type))),Ue&&(z?t.texStorage2D(i.TEXTURE_2D,1,Be,we.width,we.height):t.texImage2D(i.TEXTURE_2D,0,Be,we.width,we.height,0,Ze,Ye,null));else if(E.isDataTexture)if(Ke.length>0&&je){z&&Ue&&t.texStorage2D(i.TEXTURE_2D,Xe,Be,Ke[0].width,Ke[0].height);for(let I=0,Ee=Ke.length;I<Ee;I++)Ne=Ke[I],z?Ve&&t.texSubImage2D(i.TEXTURE_2D,I,0,0,Ne.width,Ne.height,Ze,Ye,Ne.data):t.texImage2D(i.TEXTURE_2D,I,Be,Ne.width,Ne.height,0,Ze,Ye,Ne.data);E.generateMipmaps=!1}else z?(Ue&&t.texStorage2D(i.TEXTURE_2D,Xe,Be,we.width,we.height),Ve&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we.width,we.height,Ze,Ye,we.data)):t.texImage2D(i.TEXTURE_2D,0,Be,we.width,we.height,0,Ze,Ye,we.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){z&&Ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Xe,Be,Ke[0].width,Ke[0].height,we.depth);for(let I=0,Ee=Ke.length;I<Ee;I++)Ne=Ke[I],E.format!==Mn?Ze!==null?z?Ve&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,I,0,0,0,Ne.width,Ne.height,we.depth,Ze,Ne.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,I,Be,Ne.width,Ne.height,we.depth,0,Ne.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?Ve&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,I,0,0,0,Ne.width,Ne.height,we.depth,Ze,Ye,Ne.data):t.texImage3D(i.TEXTURE_2D_ARRAY,I,Be,Ne.width,Ne.height,we.depth,0,Ze,Ye,Ne.data)}else{z&&Ue&&t.texStorage2D(i.TEXTURE_2D,Xe,Be,Ke[0].width,Ke[0].height);for(let I=0,Ee=Ke.length;I<Ee;I++)Ne=Ke[I],E.format!==Mn?Ze!==null?z?Ve&&t.compressedTexSubImage2D(i.TEXTURE_2D,I,0,0,Ne.width,Ne.height,Ze,Ne.data):t.compressedTexImage2D(i.TEXTURE_2D,I,Be,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?Ve&&t.texSubImage2D(i.TEXTURE_2D,I,0,0,Ne.width,Ne.height,Ze,Ye,Ne.data):t.texImage2D(i.TEXTURE_2D,I,Be,Ne.width,Ne.height,0,Ze,Ye,Ne.data)}else if(E.isDataArrayTexture)z?(Ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Xe,Be,we.width,we.height,we.depth),Ve&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Ze,Ye,we.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Be,we.width,we.height,we.depth,0,Ze,Ye,we.data);else if(E.isData3DTexture)z?(Ue&&t.texStorage3D(i.TEXTURE_3D,Xe,Be,we.width,we.height,we.depth),Ve&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Ze,Ye,we.data)):t.texImage3D(i.TEXTURE_3D,0,Be,we.width,we.height,we.depth,0,Ze,Ye,we.data);else if(E.isFramebufferTexture){if(Ue)if(z)t.texStorage2D(i.TEXTURE_2D,Xe,Be,we.width,we.height);else{let I=we.width,Ee=we.height;for(let _e=0;_e<Xe;_e++)t.texImage2D(i.TEXTURE_2D,_e,Be,I,Ee,0,Ze,Ye,null),I>>=1,Ee>>=1}}else if(Ke.length>0&&je){z&&Ue&&t.texStorage2D(i.TEXTURE_2D,Xe,Be,Ke[0].width,Ke[0].height);for(let I=0,Ee=Ke.length;I<Ee;I++)Ne=Ke[I],z?Ve&&t.texSubImage2D(i.TEXTURE_2D,I,0,0,Ze,Ye,Ne):t.texImage2D(i.TEXTURE_2D,I,Be,Ze,Ye,Ne);E.generateMipmaps=!1}else z?(Ue&&t.texStorage2D(i.TEXTURE_2D,Xe,Be,we.width,we.height),Ve&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ze,Ye,we)):t.texImage2D(i.TEXTURE_2D,0,Be,Ze,Ye,we);b(E,je)&&M(ge),Pe.__version=ve.version,E.onUpdate&&E.onUpdate(E)}S.__version=E.version}function le(S,E,$){if(E.image.length!==6)return;const ge=q(S,E),fe=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+$);const ve=n.get(fe);if(fe.version!==ve.__version||ge===!0){t.activeTexture(i.TEXTURE0+$);const Pe=Et.getPrimaries(Et.workingColorSpace),Te=E.colorSpace===_n?null:Et.getPrimaries(E.colorSpace),Ae=E.colorSpace===_n||Pe===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Oe=E.isCompressedTexture||E.image[0].isCompressedTexture,Fe=E.image[0]&&E.image[0].isDataTexture,we=[];for(let I=0;I<6;I++)!Oe&&!Fe?we[I]=v(E.image[I],!1,!0,r.maxCubemapSize):we[I]=Fe?E.image[I].image:E.image[I],we[I]=G(E,we[I]);const je=we[0],Ze=p(je)||o,Ye=s.convert(E.format,E.colorSpace),Be=s.convert(E.type),Ne=P(E.internalFormat,Ye,Be,E.colorSpace),Ke=o&&E.isVideoTexture!==!0,z=ve.__version===void 0||ge===!0,Ue=fe.dataReady;let Ve=L(E,je,Ze);me(i.TEXTURE_CUBE_MAP,E,Ze);let Xe;if(Oe){Ke&&z&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ve,Ne,je.width,je.height);for(let I=0;I<6;I++){Xe=we[I].mipmaps;for(let Ee=0;Ee<Xe.length;Ee++){const _e=Xe[Ee];E.format!==Mn?Ye!==null?Ke?Ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ee,0,0,_e.width,_e.height,Ye,_e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ee,Ne,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?Ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ee,0,0,_e.width,_e.height,Ye,Be,_e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ee,Ne,_e.width,_e.height,0,Ye,Be,_e.data)}}}else{Xe=E.mipmaps,Ke&&z&&(Xe.length>0&&Ve++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Ve,Ne,we[0].width,we[0].height));for(let I=0;I<6;I++)if(Fe){Ke?Ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,0,0,we[I].width,we[I].height,Ye,Be,we[I].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,Ne,we[I].width,we[I].height,0,Ye,Be,we[I].data);for(let Ee=0;Ee<Xe.length;Ee++){const Ie=Xe[Ee].image[I].image;Ke?Ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ee+1,0,0,Ie.width,Ie.height,Ye,Be,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ee+1,Ne,Ie.width,Ie.height,0,Ye,Be,Ie.data)}}else{Ke?Ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,0,0,Ye,Be,we[I]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,Ne,Ye,Be,we[I]);for(let Ee=0;Ee<Xe.length;Ee++){const _e=Xe[Ee];Ke?Ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ee+1,0,0,Ye,Be,_e.image[I]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ee+1,Ne,Ye,Be,_e.image[I])}}}b(E,Ze)&&M(i.TEXTURE_CUBE_MAP),ve.__version=fe.version,E.onUpdate&&E.onUpdate(E)}S.__version=E.version}function ae(S,E,$,ge,fe,ve){const Pe=s.convert($.format,$.colorSpace),Te=s.convert($.type),Ae=P($.internalFormat,Pe,Te,$.colorSpace);if(!n.get(E).__hasExternalTextures){const Fe=Math.max(1,E.width>>ve),we=Math.max(1,E.height>>ve);fe===i.TEXTURE_3D||fe===i.TEXTURE_2D_ARRAY?t.texImage3D(fe,ve,Ae,Fe,we,E.depth,0,Pe,Te,null):t.texImage2D(fe,ve,Ae,Fe,we,0,Pe,Te,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),de(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,fe,n.get($).__webglTexture,0,pe(E)):(fe===i.TEXTURE_2D||fe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ge,fe,n.get($).__webglTexture,ve),t.bindFramebuffer(i.FRAMEBUFFER,null)}function H(S,E,$){if(i.bindRenderbuffer(i.RENDERBUFFER,S),E.depthBuffer&&!E.stencilBuffer){let ge=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if($||de(E)){const fe=E.depthTexture;fe&&fe.isDepthTexture&&(fe.type===kn?ge=i.DEPTH_COMPONENT32F:fe.type===ei&&(ge=i.DEPTH_COMPONENT24));const ve=pe(E);de(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,ge,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,ge,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,ge,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,S)}else if(E.depthBuffer&&E.stencilBuffer){const ge=pe(E);$&&de(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,i.DEPTH24_STENCIL8,E.width,E.height):de(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,S)}else{const ge=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let fe=0;fe<ge.length;fe++){const ve=ge[fe],Pe=s.convert(ve.format,ve.colorSpace),Te=s.convert(ve.type),Ae=P(ve.internalFormat,Pe,Te,ve.colorSpace),Oe=pe(E);$&&de(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,Ae,E.width,E.height):de(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Oe,Ae,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Ae,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ne(S,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Z(E.depthTexture,0);const ge=n.get(E.depthTexture).__webglTexture,fe=pe(E);if(E.depthTexture.format===Ei)de(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ge,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ge,0);else if(E.depthTexture.format===tr)de(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ge,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function X(S){const E=n.get(S),$=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");ne(E.__webglFramebuffer,S)}else if($){E.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ge]),E.__webglDepthbuffer[ge]=i.createRenderbuffer(),H(E.__webglDepthbuffer[ge],S,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),H(E.__webglDepthbuffer,S,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(S,E,$){const ge=n.get(S);E!==void 0&&ae(ge.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&X(S)}function O(S){const E=S.texture,$=n.get(S),ge=n.get(E);S.addEventListener("dispose",N),S.isWebGLMultipleRenderTargets!==!0&&(ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture()),ge.__version=E.version,a.memory.textures++);const fe=S.isWebGLCubeRenderTarget===!0,ve=S.isWebGLMultipleRenderTargets===!0,Pe=p(S)||o;if(fe){$.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(o&&E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[Te]=[];for(let Ae=0;Ae<E.mipmaps.length;Ae++)$.__webglFramebuffer[Te][Ae]=i.createFramebuffer()}else $.__webglFramebuffer[Te]=i.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let Te=0;Te<E.mipmaps.length;Te++)$.__webglFramebuffer[Te]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(ve)if(r.drawBuffers){const Te=S.texture;for(let Ae=0,Oe=Te.length;Ae<Oe;Ae++){const Fe=n.get(Te[Ae]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&S.samples>0&&de(S)===!1){const Te=ve?E:[E];$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ae=0;Ae<Te.length;Ae++){const Oe=Te[Ae];$.__webglColorRenderbuffer[Ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[Ae]);const Fe=s.convert(Oe.format,Oe.colorSpace),we=s.convert(Oe.type),je=P(Oe.internalFormat,Fe,we,Oe.colorSpace,S.isXRRenderTarget===!0),Ze=pe(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze,je,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,$.__webglColorRenderbuffer[Ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),H($.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(fe){t.bindTexture(i.TEXTURE_CUBE_MAP,ge.__webglTexture),me(i.TEXTURE_CUBE_MAP,E,Pe);for(let Te=0;Te<6;Te++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let Ae=0;Ae<E.mipmaps.length;Ae++)ae($.__webglFramebuffer[Te][Ae],S,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ae);else ae($.__webglFramebuffer[Te],S,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);b(E,Pe)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){const Te=S.texture;for(let Ae=0,Oe=Te.length;Ae<Oe;Ae++){const Fe=Te[Ae],we=n.get(Fe);t.bindTexture(i.TEXTURE_2D,we.__webglTexture),me(i.TEXTURE_2D,Fe,Pe),ae($.__webglFramebuffer,S,Fe,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,0),b(Fe,Pe)&&M(i.TEXTURE_2D)}t.unbindTexture()}else{let Te=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(o?Te=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Te,ge.__webglTexture),me(Te,E,Pe),o&&E.mipmaps&&E.mipmaps.length>0)for(let Ae=0;Ae<E.mipmaps.length;Ae++)ae($.__webglFramebuffer[Ae],S,E,i.COLOR_ATTACHMENT0,Te,Ae);else ae($.__webglFramebuffer,S,E,i.COLOR_ATTACHMENT0,Te,0);b(E,Pe)&&M(Te),t.unbindTexture()}S.depthBuffer&&X(S)}function ye(S){const E=p(S)||o,$=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ge=0,fe=$.length;ge<fe;ge++){const ve=$[ge];if(b(ve,E)){const Pe=S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Te=n.get(ve).__webglTexture;t.bindTexture(Pe,Te),M(Pe),t.unbindTexture()}}}function ce(S){if(o&&S.samples>0&&de(S)===!1){const E=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],$=S.width,ge=S.height;let fe=i.COLOR_BUFFER_BIT;const ve=[],Pe=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(S),Ae=S.isWebGLMultipleRenderTargets===!0;if(Ae)for(let Oe=0;Oe<E.length;Oe++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Oe=0;Oe<E.length;Oe++){ve.push(i.COLOR_ATTACHMENT0+Oe),S.depthBuffer&&ve.push(Pe);const Fe=Te.__ignoreDepthValues!==void 0?Te.__ignoreDepthValues:!1;if(Fe===!1&&(S.depthBuffer&&(fe|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&(fe|=i.STENCIL_BUFFER_BIT)),Ae&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Oe]),Fe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Pe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Pe])),Ae){const we=n.get(E[Oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,we,0)}i.blitFramebuffer(0,0,$,ge,0,0,$,ge,fe,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ve)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ae)for(let Oe=0;Oe<E.length;Oe++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Oe]);const Fe=n.get(E[Oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.TEXTURE_2D,Fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}}function pe(S){return Math.min(r.maxSamples,S.samples)}function de(S){const E=n.get(S);return o&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function oe(S){const E=a.render.frame;u.get(S)!==E&&(u.set(S,E),S.update())}function G(S,E){const $=S.colorSpace,ge=S.format,fe=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===na||$!==qn&&$!==_n&&(Et.getTransfer($)===Mt?o===!1?e.has("EXT_sRGB")===!0&&ge===Mn?(S.format=na,S.minFilter=Jt,S.generateMipmaps=!1):E=bc.sRGBToLinear(E):(ge!==Mn||fe!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}this.allocateTextureUnit=B,this.resetTextureUnits=se,this.setTexture2D=Z,this.setTexture2DArray=w,this.setTexture3D=j,this.setTextureCube=Y,this.rebindTextures=xe,this.setupRenderTarget=O,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=de}function u_(i,e,t){const n=t.isWebGL2;function r(s,a=_n){let o;const c=Et.getTransfer(a);if(s===ri)return i.UNSIGNED_BYTE;if(s===dc)return i.UNSIGNED_SHORT_4_4_4_4;if(s===pc)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Wu)return i.BYTE;if(s===Xu)return i.SHORT;if(s===ca)return i.UNSIGNED_SHORT;if(s===fc)return i.INT;if(s===ei)return i.UNSIGNED_INT;if(s===kn)return i.FLOAT;if(s===Sr)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===qu)return i.ALPHA;if(s===Mn)return i.RGBA;if(s===ju)return i.LUMINANCE;if(s===Yu)return i.LUMINANCE_ALPHA;if(s===Ei)return i.DEPTH_COMPONENT;if(s===tr)return i.DEPTH_STENCIL;if(s===na)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Ku)return i.RED;if(s===mc)return i.RED_INTEGER;if(s===Zu)return i.RG;if(s===_c)return i.RG_INTEGER;if(s===gc)return i.RGBA_INTEGER;if(s===ms||s===_s||s===gs||s===vs)if(c===Mt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===ms)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===_s)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===gs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===vs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ms)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===_s)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===gs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===vs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ao||s===oo||s===lo||s===co)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===ao)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===oo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===lo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===co)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===vc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===uo||s===ho)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===uo)return c===Mt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===ho)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===fo||s===po||s===mo||s===_o||s===go||s===vo||s===xo||s===Eo||s===Mo||s===So||s===bo||s===yo||s===To||s===Ao)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===fo)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===po)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===mo)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===_o)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===go)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===vo)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===xo)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Eo)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Mo)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===So)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===bo)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===yo)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===To)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ao)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===xs||s===wo||s===Co)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===xs)return c===Mt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===wo)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Co)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===$u||s===Ro||s===Po||s===Lo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===xs)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Ro)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Po)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Lo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===xi?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class h_ extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ji extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const f_={type:"move"};class Hs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ue,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ue),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ue,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ue),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),d=this._getHandJoint(l,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,_=.005;l.inputState.pinching&&f>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(f_)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ji;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const d_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class m_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new qt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new oi({extensions:{fragDepth:!0},vertexShader:d_,fragmentShader:p_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Xt(new ir(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class __ extends Ti{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,m=null,_=null;const v=new m_,p=t.getContextAttributes();let d=null,b=null;const M=[],P=[],L=new it;let A=null;const y=new mn;y.layers.enable(1),y.viewport=new Ft;const N=new mn;N.layers.enable(2),N.viewport=new Ft;const k=[y,N],x=new h_;x.layers.enable(1),x.layers.enable(2);let T=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let V=M[q];return V===void 0&&(V=new Hs,M[q]=V),V.getTargetRaySpace()},this.getControllerGrip=function(q){let V=M[q];return V===void 0&&(V=new Hs,M[q]=V),V.getGripSpace()},this.getHand=function(q){let V=M[q];return V===void 0&&(V=new Hs,M[q]=V),V.getHandSpace()};function se(q){const V=P.indexOf(q.inputSource);if(V===-1)return;const le=M[V];le!==void 0&&(le.update(q.inputSource,q.frame,l||a),le.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){r.removeEventListener("select",se),r.removeEventListener("selectstart",se),r.removeEventListener("selectend",se),r.removeEventListener("squeeze",se),r.removeEventListener("squeezestart",se),r.removeEventListener("squeezeend",se),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",ee);for(let q=0;q<M.length;q++){const V=P[q];V!==null&&(P[q]=null,M[q].disconnect(V))}T=null,K=null,v.reset(),e.setRenderTarget(d),m=null,f=null,h=null,r=null,b=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",se),r.addEventListener("selectstart",se),r.addEventListener("selectend",se),r.addEventListener("squeeze",se),r.addEventListener("squeezestart",se),r.addEventListener("squeezeend",se),r.addEventListener("end",B),r.addEventListener("inputsourceschange",ee),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,V),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new bi(m.framebufferWidth,m.framebufferHeight,{format:Mn,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let V=null,le=null,ae=null;p.depth&&(ae=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=p.stencil?tr:Ei,le=p.stencil?xi:ei);const H={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(H),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new bi(f.textureWidth,f.textureHeight,{format:Mn,type:ri,depthTexture:new Nc(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const ne=e.properties.get(b);ne.__ignoreDepthValues=f.ignoreDepthValues}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),me.setContext(r),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ee(q){for(let V=0;V<q.removed.length;V++){const le=q.removed[V],ae=P.indexOf(le);ae>=0&&(P[ae]=null,M[ae].disconnect(le))}for(let V=0;V<q.added.length;V++){const le=q.added[V];let ae=P.indexOf(le);if(ae===-1){for(let ne=0;ne<M.length;ne++)if(ne>=P.length){P.push(le),ae=ne;break}else if(P[ne]===null){P[ne]=le,ae=ne;break}if(ae===-1)break}const H=M[ae];H&&H.connect(le)}}const Z=new ue,w=new ue;function j(q,V,le){Z.setFromMatrixPosition(V.matrixWorld),w.setFromMatrixPosition(le.matrixWorld);const ae=Z.distanceTo(w),H=V.projectionMatrix.elements,ne=le.projectionMatrix.elements,X=H[14]/(H[10]-1),xe=H[14]/(H[10]+1),O=(H[9]+1)/H[5],ye=(H[9]-1)/H[5],ce=(H[8]-1)/H[0],pe=(ne[8]+1)/ne[0],de=X*ce,oe=X*pe,G=ae/(-ce+pe),S=G*-ce;V.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(S),q.translateZ(G),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const E=X+G,$=xe+G,ge=de-S,fe=oe+(ae-S),ve=O*xe/$*E,Pe=ye*xe/$*E;q.projectionMatrix.makePerspective(ge,fe,ve,Pe,E,$),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function Y(q,V){V===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(V.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;v.texture!==null&&(q.near=v.depthNear,q.far=v.depthFar),x.near=N.near=y.near=q.near,x.far=N.far=y.far=q.far,(T!==x.near||K!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,K=x.far,y.near=T,y.far=K,N.near=T,N.far=K,y.updateProjectionMatrix(),N.updateProjectionMatrix(),q.updateProjectionMatrix());const V=q.parent,le=x.cameras;Y(x,V);for(let ae=0;ae<le.length;ae++)Y(le[ae],V);le.length===2?j(x,y,N):x.projectionMatrix.copy(y.projectionMatrix),W(q,x,V)};function W(q,V,le){le===null?q.matrix.copy(V.matrixWorld):(q.matrix.copy(le.matrixWorld),q.matrix.invert(),q.matrix.multiply(V.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(V.projectionMatrix),q.projectionMatrixInverse.copy(V.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ia*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null};let te=null;function re(q,V){if(u=V.getViewerPose(l||a),_=V,u!==null){const le=u.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let ae=!1;le.length!==x.cameras.length&&(x.cameras.length=0,ae=!0);for(let ne=0;ne<le.length;ne++){const X=le[ne];let xe=null;if(m!==null)xe=m.getViewport(X);else{const ye=h.getViewSubImage(f,X);xe=ye.viewport,ne===0&&(e.setRenderTargetTextures(b,ye.colorTexture,f.ignoreDepthValues?void 0:ye.depthStencilTexture),e.setRenderTarget(b))}let O=k[ne];O===void 0&&(O=new mn,O.layers.enable(ne),O.viewport=new Ft,k[ne]=O),O.matrix.fromArray(X.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(X.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(xe.x,xe.y,xe.width,xe.height),ne===0&&(x.matrix.copy(O.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ae===!0&&x.cameras.push(O)}const H=r.enabledFeatures;if(H&&H.includes("depth-sensing")){const ne=h.getDepthInformation(le[0]);ne&&ne.isValid&&ne.texture&&v.init(e,ne,r.renderState)}}for(let le=0;le<M.length;le++){const ae=P[le],H=M[le];ae!==null&&H!==void 0&&H.update(ae,V,l||a)}v.render(e,x),te&&te(q,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),_=null}const me=new Ic;me.setAnimationLoop(re),this.setAnimationLoop=function(q){te=q},this.dispose=function(){}}}function g_(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Pc(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,b,M,P){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),h(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,P)):d.isMeshMatcapMaterial?(s(p,d),_(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),v(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?c(p,d,b,M):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Qt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Qt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const b=e.get(d).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const M=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*M,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,b,M){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*b,p.scale.value=M*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,b){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Qt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){const b=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function v_(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(b,M){const P=M.program;n.uniformBlockBinding(b,P)}function l(b,M){let P=r[b.id];P===void 0&&(_(b),P=u(b),r[b.id]=P,b.addEventListener("dispose",p));const L=M.program;n.updateUBOMapping(b,L);const A=e.render.frame;s[b.id]!==A&&(f(b),s[b.id]=A)}function u(b){const M=h();b.__bindingPointIndex=M;const P=i.createBuffer(),L=b.__size,A=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,L,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,P),P}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const M=r[b.id],P=b.uniforms,L=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let A=0,y=P.length;A<y;A++){const N=Array.isArray(P[A])?P[A]:[P[A]];for(let k=0,x=N.length;k<x;k++){const T=N[k];if(m(T,A,k,L)===!0){const K=T.__offset,se=Array.isArray(T.value)?T.value:[T.value];let B=0;for(let ee=0;ee<se.length;ee++){const Z=se[ee],w=v(Z);typeof Z=="number"||typeof Z=="boolean"?(T.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,K+B,T.__data)):Z.isMatrix3?(T.__data[0]=Z.elements[0],T.__data[1]=Z.elements[1],T.__data[2]=Z.elements[2],T.__data[3]=0,T.__data[4]=Z.elements[3],T.__data[5]=Z.elements[4],T.__data[6]=Z.elements[5],T.__data[7]=0,T.__data[8]=Z.elements[6],T.__data[9]=Z.elements[7],T.__data[10]=Z.elements[8],T.__data[11]=0):(Z.toArray(T.__data,B),B+=w.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,K,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,M,P,L){const A=b.value,y=M+"_"+P;if(L[y]===void 0)return typeof A=="number"||typeof A=="boolean"?L[y]=A:L[y]=A.clone(),!0;{const N=L[y];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return L[y]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function _(b){const M=b.uniforms;let P=0;const L=16;for(let y=0,N=M.length;y<N;y++){const k=Array.isArray(M[y])?M[y]:[M[y]];for(let x=0,T=k.length;x<T;x++){const K=k[x],se=Array.isArray(K.value)?K.value:[K.value];for(let B=0,ee=se.length;B<ee;B++){const Z=se[B],w=v(Z),j=P%L;j!==0&&L-j<w.boundary&&(P+=L-j),K.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=P,P+=w.storage}}}const A=P%L;return A>0&&(P+=L-A),b.__size=P,b.__cache={},this}function v(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function p(b){const M=b.target;M.removeEventListener("dispose",p);const P=a.indexOf(M.__bindingPointIndex);a.splice(P,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function d(){for(const b in r)i.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:c,update:l,dispose:d}}class Vc{constructor(e={}){const{canvas:t=uh(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const m=new Uint32Array(4),_=new Int32Array(4);let v=null,p=null;const d=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this._useLegacyLights=!1,this.toneMapping=ii,this.toneMappingExposure=1;const M=this;let P=!1,L=0,A=0,y=null,N=-1,k=null;const x=new Ft,T=new Ft;let K=null;const se=new ht(0);let B=0,ee=t.width,Z=t.height,w=1,j=null,Y=null;const W=new Ft(0,0,ee,Z),te=new Ft(0,0,ee,Z);let re=!1;const me=new da;let q=!1,V=!1,le=null;const ae=new Pt,H=new it,ne=new ue,X={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function xe(){return y===null?w:1}let O=n;function ye(U,he){for(let Se=0;Se<U.length;Se++){const be=U[Se],Me=t.getContext(be,he);if(Me!==null)return Me}return null}try{const U={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${oa}`),t.addEventListener("webglcontextlost",Xe,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),O===null){const he=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&he.shift(),O=ye(he,U),O===null)throw ye(he)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let ce,pe,de,oe,G,S,E,$,ge,fe,ve,Pe,Te,Ae,Oe,Fe,we,je,Ze,Ye,Be,Ne,Ke,z;function Ue(){ce=new Tp(O),pe=new xp(O,ce,e),ce.init(pe),Ne=new u_(O,ce,pe),de=new l_(O,ce,pe),oe=new Cp(O),G=new Ym,S=new c_(O,ce,de,G,pe,Ne,oe),E=new Mp(M),$=new yp(M),ge=new Nh(O,pe),Ke=new gp(O,ce,ge,pe),fe=new Ap(O,ge,oe,Ke),ve=new Dp(O,fe,ge,oe),Ze=new Lp(O,pe,S),Fe=new Ep(G),Pe=new jm(M,E,$,ce,pe,Ke,Fe),Te=new g_(M,G),Ae=new Zm,Oe=new n_(ce,pe),je=new _p(M,E,$,de,ve,f,c),we=new o_(M,ve,pe),z=new v_(O,oe,pe,de),Ye=new vp(O,ce,oe,pe),Be=new wp(O,ce,oe,pe),oe.programs=Pe.programs,M.capabilities=pe,M.extensions=ce,M.properties=G,M.renderLists=Ae,M.shadowMap=we,M.state=de,M.info=oe}Ue();const Ve=new __(M,O);this.xr=Ve,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const U=ce.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=ce.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return w},this.setPixelRatio=function(U){U!==void 0&&(w=U,this.setSize(ee,Z,!1))},this.getSize=function(U){return U.set(ee,Z)},this.setSize=function(U,he,Se=!0){if(Ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=U,Z=he,t.width=Math.floor(U*w),t.height=Math.floor(he*w),Se===!0&&(t.style.width=U+"px",t.style.height=he+"px"),this.setViewport(0,0,U,he)},this.getDrawingBufferSize=function(U){return U.set(ee*w,Z*w).floor()},this.setDrawingBufferSize=function(U,he,Se){ee=U,Z=he,w=Se,t.width=Math.floor(U*Se),t.height=Math.floor(he*Se),this.setViewport(0,0,U,he)},this.getCurrentViewport=function(U){return U.copy(x)},this.getViewport=function(U){return U.copy(W)},this.setViewport=function(U,he,Se,be){U.isVector4?W.set(U.x,U.y,U.z,U.w):W.set(U,he,Se,be),de.viewport(x.copy(W).multiplyScalar(w).floor())},this.getScissor=function(U){return U.copy(te)},this.setScissor=function(U,he,Se,be){U.isVector4?te.set(U.x,U.y,U.z,U.w):te.set(U,he,Se,be),de.scissor(T.copy(te).multiplyScalar(w).floor())},this.getScissorTest=function(){return re},this.setScissorTest=function(U){de.setScissorTest(re=U)},this.setOpaqueSort=function(U){j=U},this.setTransparentSort=function(U){Y=U},this.getClearColor=function(U){return U.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(U=!0,he=!0,Se=!0){let be=0;if(U){let Me=!1;if(y!==null){const qe=y.texture.format;Me=qe===gc||qe===_c||qe===mc}if(Me){const qe=y.texture.type,Je=qe===ri||qe===ei||qe===ca||qe===xi||qe===dc||qe===pc,tt=je.getClearColor(),nt=je.getClearAlpha(),ft=tt.r,lt=tt.g,ct=tt.b;Je?(m[0]=ft,m[1]=lt,m[2]=ct,m[3]=nt,O.clearBufferuiv(O.COLOR,0,m)):(_[0]=ft,_[1]=lt,_[2]=ct,_[3]=nt,O.clearBufferiv(O.COLOR,0,_))}else be|=O.COLOR_BUFFER_BIT}he&&(be|=O.DEPTH_BUFFER_BIT),Se&&(be|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(be)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Ae.dispose(),Oe.dispose(),G.dispose(),E.dispose(),$.dispose(),ve.dispose(),Ke.dispose(),z.dispose(),Pe.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",bt),Ve.removeEventListener("sessionend",rt),le&&(le.dispose(),le=null),xt.stop()};function Xe(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const U=oe.autoReset,he=we.enabled,Se=we.autoUpdate,be=we.needsUpdate,Me=we.type;Ue(),oe.autoReset=U,we.enabled=he,we.autoUpdate=Se,we.needsUpdate=be,we.type=Me}function Ee(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function _e(U){const he=U.target;he.removeEventListener("dispose",_e),Ie(he)}function Ie(U){De(U),G.remove(U)}function De(U){const he=G.get(U).programs;he!==void 0&&(he.forEach(function(Se){Pe.releaseProgram(Se)}),U.isShaderMaterial&&Pe.releaseShaderCache(U))}this.renderBufferDirect=function(U,he,Se,be,Me,qe){he===null&&(he=X);const Je=Me.isMesh&&Me.matrixWorld.determinant()<0,tt=Ln(U,he,Se,be,Me);de.setMaterial(be,Je);let nt=Se.index,ft=1;if(be.wireframe===!0){if(nt=fe.getWireframeAttribute(Se),nt===void 0)return;ft=2}const lt=Se.drawRange,ct=Se.attributes.position;let wt=lt.start*ft,tn=(lt.start+lt.count)*ft;qe!==null&&(wt=Math.max(wt,qe.start*ft),tn=Math.min(tn,(qe.start+qe.count)*ft)),nt!==null?(wt=Math.max(wt,0),tn=Math.min(tn,nt.count)):ct!=null&&(wt=Math.max(wt,0),tn=Math.min(tn,ct.count));const Ut=tn-wt;if(Ut<0||Ut===1/0)return;Ke.setup(Me,be,tt,Se,nt);let Dn,yt=Ye;if(nt!==null&&(Dn=ge.get(nt),yt=Be,yt.setIndex(Dn)),Me.isMesh)be.wireframe===!0?(de.setLineWidth(be.wireframeLinewidth*xe()),yt.setMode(O.LINES)):yt.setMode(O.TRIANGLES);else if(Me.isLine){let dt=be.linewidth;dt===void 0&&(dt=1),de.setLineWidth(dt*xe()),Me.isLineSegments?yt.setMode(O.LINES):Me.isLineLoop?yt.setMode(O.LINE_LOOP):yt.setMode(O.LINE_STRIP)}else Me.isPoints?yt.setMode(O.POINTS):Me.isSprite&&yt.setMode(O.TRIANGLES);if(Me.isBatchedMesh)yt.renderMultiDraw(Me._multiDrawStarts,Me._multiDrawCounts,Me._multiDrawCount);else if(Me.isInstancedMesh)yt.renderInstances(wt,Ut,Me.count);else if(Se.isInstancedBufferGeometry){const dt=Se._maxInstanceCount!==void 0?Se._maxInstanceCount:1/0,us=Math.min(Se.instanceCount,dt);yt.renderInstances(wt,Ut,us)}else yt.render(wt,Ut)};function et(U,he,Se){U.transparent===!0&&U.side===ln&&U.forceSinglePass===!1?(U.side=Qt,U.needsUpdate=!0,Sn(U,he,Se),U.side=ai,U.needsUpdate=!0,Sn(U,he,Se),U.side=ln):Sn(U,he,Se)}this.compile=function(U,he,Se=null){Se===null&&(Se=U),p=Oe.get(Se),p.init(),b.push(p),Se.traverseVisible(function(Me){Me.isLight&&Me.layers.test(he.layers)&&(p.pushLight(Me),Me.castShadow&&p.pushShadow(Me))}),U!==Se&&U.traverseVisible(function(Me){Me.isLight&&Me.layers.test(he.layers)&&(p.pushLight(Me),Me.castShadow&&p.pushShadow(Me))}),p.setupLights(M._useLegacyLights);const be=new Set;return U.traverse(function(Me){const qe=Me.material;if(qe)if(Array.isArray(qe))for(let Je=0;Je<qe.length;Je++){const tt=qe[Je];et(tt,Se,Me),be.add(tt)}else et(qe,Se,Me),be.add(qe)}),b.pop(),p=null,be},this.compileAsync=function(U,he,Se=null){const be=this.compile(U,he,Se);return new Promise(Me=>{function qe(){if(be.forEach(function(Je){G.get(Je).currentProgram.isReady()&&be.delete(Je)}),be.size===0){Me(U);return}setTimeout(qe,10)}ce.get("KHR_parallel_shader_compile")!==null?qe():setTimeout(qe,10)})};let st=null;function gt(U){st&&st(U)}function bt(){xt.stop()}function rt(){xt.start()}const xt=new Ic;xt.setAnimationLoop(gt),typeof self<"u"&&xt.setContext(self),this.setAnimationLoop=function(U){st=U,Ve.setAnimationLoop(U),U===null?xt.stop():xt.start()},Ve.addEventListener("sessionstart",bt),Ve.addEventListener("sessionend",rt),this.render=function(U,he){if(he!==void 0&&he.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),he.parent===null&&he.matrixWorldAutoUpdate===!0&&he.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(he),he=Ve.getCamera()),U.isScene===!0&&U.onBeforeRender(M,U,he,y),p=Oe.get(U,b.length),p.init(),b.push(p),ae.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),me.setFromProjectionMatrix(ae),V=this.localClippingEnabled,q=Fe.init(this.clippingPlanes,V),v=Ae.get(U,d.length),v.init(),d.push(v),St(U,he,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(j,Y),this.info.render.frame++,q===!0&&Fe.beginShadows();const Se=p.state.shadowsArray;if(we.render(Se,U,he),q===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1)&&je.render(v,U),p.setupLights(M._useLegacyLights),he.isArrayCamera){const be=he.cameras;for(let Me=0,qe=be.length;Me<qe;Me++){const Je=be[Me];cn(v,U,Je,Je.viewport)}}else cn(v,U,he);y!==null&&(S.updateMultisampleRenderTarget(y),S.updateRenderTargetMipmap(y)),U.isScene===!0&&U.onAfterRender(M,U,he),Ke.resetDefaultState(),N=-1,k=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function St(U,he,Se,be){if(U.visible===!1)return;if(U.layers.test(he.layers)){if(U.isGroup)Se=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(he);else if(U.isLight)p.pushLight(U),U.castShadow&&p.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||me.intersectsSprite(U)){be&&ne.setFromMatrixPosition(U.matrixWorld).applyMatrix4(ae);const Je=ve.update(U),tt=U.material;tt.visible&&v.push(U,Je,tt,Se,ne.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||me.intersectsObject(U))){const Je=ve.update(U),tt=U.material;if(be&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),ne.copy(U.boundingSphere.center)):(Je.boundingSphere===null&&Je.computeBoundingSphere(),ne.copy(Je.boundingSphere.center)),ne.applyMatrix4(U.matrixWorld).applyMatrix4(ae)),Array.isArray(tt)){const nt=Je.groups;for(let ft=0,lt=nt.length;ft<lt;ft++){const ct=nt[ft],wt=tt[ct.materialIndex];wt&&wt.visible&&v.push(U,Je,wt,Se,ne.z,ct)}}else tt.visible&&v.push(U,Je,tt,Se,ne.z,null)}}const qe=U.children;for(let Je=0,tt=qe.length;Je<tt;Je++)St(qe[Je],he,Se,be)}function cn(U,he,Se,be){const Me=U.opaque,qe=U.transmissive,Je=U.transparent;p.setupLightsView(Se),q===!0&&Fe.setGlobalState(M.clippingPlanes,Se),qe.length>0&&Pn(Me,qe,he,Se),be&&de.viewport(x.copy(be)),Me.length>0&&Zt(Me,he,Se),qe.length>0&&Zt(qe,he,Se),Je.length>0&&Zt(Je,he,Se),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Pn(U,he,Se,be){if((Se.isScene===!0?Se.overrideMaterial:null)!==null)return;const qe=pe.isWebGL2;le===null&&(le=new bi(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")?Sr:ri,minFilter:gi,samples:qe?4:0})),M.getDrawingBufferSize(H),qe?le.setSize(H.x,H.y):le.setSize(ra(H.x),ra(H.y));const Je=M.getRenderTarget();M.setRenderTarget(le),M.getClearColor(se),B=M.getClearAlpha(),B<1&&M.setClearColor(16777215,.5),M.clear();const tt=M.toneMapping;M.toneMapping=ii,Zt(U,Se,be),S.updateMultisampleRenderTarget(le),S.updateRenderTargetMipmap(le);let nt=!1;for(let ft=0,lt=he.length;ft<lt;ft++){const ct=he[ft],wt=ct.object,tn=ct.geometry,Ut=ct.material,Dn=ct.group;if(Ut.side===ln&&wt.layers.test(be.layers)){const yt=Ut.side;Ut.side=Qt,Ut.needsUpdate=!0,un(wt,Se,be,tn,Ut,Dn),Ut.side=yt,Ut.needsUpdate=!0,nt=!0}}nt===!0&&(S.updateMultisampleRenderTarget(le),S.updateRenderTargetMipmap(le)),M.setRenderTarget(Je),M.setClearColor(se,B),M.toneMapping=tt}function Zt(U,he,Se){const be=he.isScene===!0?he.overrideMaterial:null;for(let Me=0,qe=U.length;Me<qe;Me++){const Je=U[Me],tt=Je.object,nt=Je.geometry,ft=be===null?Je.material:be,lt=Je.group;tt.layers.test(Se.layers)&&un(tt,he,Se,nt,ft,lt)}}function un(U,he,Se,be,Me,qe){U.onBeforeRender(M,he,Se,be,Me,qe),U.modelViewMatrix.multiplyMatrices(Se.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),Me.onBeforeRender(M,he,Se,be,U,qe),Me.transparent===!0&&Me.side===ln&&Me.forceSinglePass===!1?(Me.side=Qt,Me.needsUpdate=!0,M.renderBufferDirect(Se,he,be,Me,U,qe),Me.side=ai,Me.needsUpdate=!0,M.renderBufferDirect(Se,he,be,Me,U,qe),Me.side=ln):M.renderBufferDirect(Se,he,be,Me,U,qe),U.onAfterRender(M,he,Se,be,Me,qe)}function Sn(U,he,Se){he.isScene!==!0&&(he=X);const be=G.get(U),Me=p.state.lights,qe=p.state.shadowsArray,Je=Me.state.version,tt=Pe.getParameters(U,Me.state,qe,he,Se),nt=Pe.getProgramCacheKey(tt);let ft=be.programs;be.environment=U.isMeshStandardMaterial?he.environment:null,be.fog=he.fog,be.envMap=(U.isMeshStandardMaterial?$:E).get(U.envMap||be.environment),ft===void 0&&(U.addEventListener("dispose",_e),ft=new Map,be.programs=ft);let lt=ft.get(nt);if(lt!==void 0){if(be.currentProgram===lt&&be.lightsStateVersion===Je)return or(U,tt),lt}else tt.uniforms=Pe.getUniforms(U),U.onBuild(Se,tt,M),U.onBeforeCompile(tt,M),lt=Pe.acquireProgram(tt,nt),ft.set(nt,lt),be.uniforms=tt.uniforms;const ct=be.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(ct.clippingPlanes=Fe.uniform),or(U,tt),be.needsLights=Xc(U),be.lightsStateVersion=Je,be.needsLights&&(ct.ambientLightColor.value=Me.state.ambient,ct.lightProbe.value=Me.state.probe,ct.directionalLights.value=Me.state.directional,ct.directionalLightShadows.value=Me.state.directionalShadow,ct.spotLights.value=Me.state.spot,ct.spotLightShadows.value=Me.state.spotShadow,ct.rectAreaLights.value=Me.state.rectArea,ct.ltc_1.value=Me.state.rectAreaLTC1,ct.ltc_2.value=Me.state.rectAreaLTC2,ct.pointLights.value=Me.state.point,ct.pointLightShadows.value=Me.state.pointShadow,ct.hemisphereLights.value=Me.state.hemi,ct.directionalShadowMap.value=Me.state.directionalShadowMap,ct.directionalShadowMatrix.value=Me.state.directionalShadowMatrix,ct.spotShadowMap.value=Me.state.spotShadowMap,ct.spotLightMatrix.value=Me.state.spotLightMatrix,ct.spotLightMap.value=Me.state.spotLightMap,ct.pointShadowMap.value=Me.state.pointShadowMap,ct.pointShadowMatrix.value=Me.state.pointShadowMatrix),be.currentProgram=lt,be.uniformsList=null,lt}function hn(U){if(U.uniformsList===null){const he=U.currentProgram.getUniforms();U.uniformsList=Zr.seqWithValue(he.seq,U.uniforms)}return U.uniformsList}function or(U,he){const Se=G.get(U);Se.outputColorSpace=he.outputColorSpace,Se.batching=he.batching,Se.instancing=he.instancing,Se.instancingColor=he.instancingColor,Se.skinning=he.skinning,Se.morphTargets=he.morphTargets,Se.morphNormals=he.morphNormals,Se.morphColors=he.morphColors,Se.morphTargetsCount=he.morphTargetsCount,Se.numClippingPlanes=he.numClippingPlanes,Se.numIntersection=he.numClipIntersection,Se.vertexAlphas=he.vertexAlphas,Se.vertexTangents=he.vertexTangents,Se.toneMapping=he.toneMapping}function Ln(U,he,Se,be,Me){he.isScene!==!0&&(he=X),S.resetTextureUnits();const qe=he.fog,Je=be.isMeshStandardMaterial?he.environment:null,tt=y===null?M.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:qn,nt=(be.isMeshStandardMaterial?$:E).get(be.envMap||Je),ft=be.vertexColors===!0&&!!Se.attributes.color&&Se.attributes.color.itemSize===4,lt=!!Se.attributes.tangent&&(!!be.normalMap||be.anisotropy>0),ct=!!Se.morphAttributes.position,wt=!!Se.morphAttributes.normal,tn=!!Se.morphAttributes.color;let Ut=ii;be.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(Ut=M.toneMapping);const Dn=Se.morphAttributes.position||Se.morphAttributes.normal||Se.morphAttributes.color,yt=Dn!==void 0?Dn.length:0,dt=G.get(be),us=p.state.lights;if(q===!0&&(V===!0||U!==k)){const fn=U===k&&be.id===N;Fe.setState(be,U,fn)}let Tt=!1;be.version===dt.__version?(dt.needsLights&&dt.lightsStateVersion!==us.state.version||dt.outputColorSpace!==tt||Me.isBatchedMesh&&dt.batching===!1||!Me.isBatchedMesh&&dt.batching===!0||Me.isInstancedMesh&&dt.instancing===!1||!Me.isInstancedMesh&&dt.instancing===!0||Me.isSkinnedMesh&&dt.skinning===!1||!Me.isSkinnedMesh&&dt.skinning===!0||Me.isInstancedMesh&&dt.instancingColor===!0&&Me.instanceColor===null||Me.isInstancedMesh&&dt.instancingColor===!1&&Me.instanceColor!==null||dt.envMap!==nt||be.fog===!0&&dt.fog!==qe||dt.numClippingPlanes!==void 0&&(dt.numClippingPlanes!==Fe.numPlanes||dt.numIntersection!==Fe.numIntersection)||dt.vertexAlphas!==ft||dt.vertexTangents!==lt||dt.morphTargets!==ct||dt.morphNormals!==wt||dt.morphColors!==tn||dt.toneMapping!==Ut||pe.isWebGL2===!0&&dt.morphTargetsCount!==yt)&&(Tt=!0):(Tt=!0,dt.__version=be.version);let li=dt.currentProgram;Tt===!0&&(li=Sn(be,he,Me));let ga=!1,lr=!1,hs=!1;const Gt=li.getUniforms(),ci=dt.uniforms;if(de.useProgram(li.program)&&(ga=!0,lr=!0,hs=!0),be.id!==N&&(N=be.id,lr=!0),ga||k!==U){Gt.setValue(O,"projectionMatrix",U.projectionMatrix),Gt.setValue(O,"viewMatrix",U.matrixWorldInverse);const fn=Gt.map.cameraPosition;fn!==void 0&&fn.setValue(O,ne.setFromMatrixPosition(U.matrixWorld)),pe.logarithmicDepthBuffer&&Gt.setValue(O,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(be.isMeshPhongMaterial||be.isMeshToonMaterial||be.isMeshLambertMaterial||be.isMeshBasicMaterial||be.isMeshStandardMaterial||be.isShaderMaterial)&&Gt.setValue(O,"isOrthographic",U.isOrthographicCamera===!0),k!==U&&(k=U,lr=!0,hs=!0)}if(Me.isSkinnedMesh){Gt.setOptional(O,Me,"bindMatrix"),Gt.setOptional(O,Me,"bindMatrixInverse");const fn=Me.skeleton;fn&&(pe.floatVertexTextures?(fn.boneTexture===null&&fn.computeBoneTexture(),Gt.setValue(O,"boneTexture",fn.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Me.isBatchedMesh&&(Gt.setOptional(O,Me,"batchingTexture"),Gt.setValue(O,"batchingTexture",Me._matricesTexture,S));const fs=Se.morphAttributes;if((fs.position!==void 0||fs.normal!==void 0||fs.color!==void 0&&pe.isWebGL2===!0)&&Ze.update(Me,Se,li),(lr||dt.receiveShadow!==Me.receiveShadow)&&(dt.receiveShadow=Me.receiveShadow,Gt.setValue(O,"receiveShadow",Me.receiveShadow)),be.isMeshGouraudMaterial&&be.envMap!==null&&(ci.envMap.value=nt,ci.flipEnvMap.value=nt.isCubeTexture&&nt.isRenderTargetTexture===!1?-1:1),lr&&(Gt.setValue(O,"toneMappingExposure",M.toneMappingExposure),dt.needsLights&&Wc(ci,hs),qe&&be.fog===!0&&Te.refreshFogUniforms(ci,qe),Te.refreshMaterialUniforms(ci,be,w,Z,le),Zr.upload(O,hn(dt),ci,S)),be.isShaderMaterial&&be.uniformsNeedUpdate===!0&&(Zr.upload(O,hn(dt),ci,S),be.uniformsNeedUpdate=!1),be.isSpriteMaterial&&Gt.setValue(O,"center",Me.center),Gt.setValue(O,"modelViewMatrix",Me.modelViewMatrix),Gt.setValue(O,"normalMatrix",Me.normalMatrix),Gt.setValue(O,"modelMatrix",Me.matrixWorld),be.isShaderMaterial||be.isRawShaderMaterial){const fn=be.uniformsGroups;for(let ds=0,qc=fn.length;ds<qc;ds++)if(pe.isWebGL2){const va=fn[ds];z.update(va,li),z.bind(va,li)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return li}function Wc(U,he){U.ambientLightColor.needsUpdate=he,U.lightProbe.needsUpdate=he,U.directionalLights.needsUpdate=he,U.directionalLightShadows.needsUpdate=he,U.pointLights.needsUpdate=he,U.pointLightShadows.needsUpdate=he,U.spotLights.needsUpdate=he,U.spotLightShadows.needsUpdate=he,U.rectAreaLights.needsUpdate=he,U.hemisphereLights.needsUpdate=he}function Xc(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(U,he,Se){G.get(U.texture).__webglTexture=he,G.get(U.depthTexture).__webglTexture=Se;const be=G.get(U);be.__hasExternalTextures=!0,be.__hasExternalTextures&&(be.__autoAllocateDepthBuffer=Se===void 0,be.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),be.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(U,he){const Se=G.get(U);Se.__webglFramebuffer=he,Se.__useDefaultFramebuffer=he===void 0},this.setRenderTarget=function(U,he=0,Se=0){y=U,L=he,A=Se;let be=!0,Me=null,qe=!1,Je=!1;if(U){const nt=G.get(U);nt.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(O.FRAMEBUFFER,null),be=!1):nt.__webglFramebuffer===void 0?S.setupRenderTarget(U):nt.__hasExternalTextures&&S.rebindTextures(U,G.get(U.texture).__webglTexture,G.get(U.depthTexture).__webglTexture);const ft=U.texture;(ft.isData3DTexture||ft.isDataArrayTexture||ft.isCompressedArrayTexture)&&(Je=!0);const lt=G.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(lt[he])?Me=lt[he][Se]:Me=lt[he],qe=!0):pe.isWebGL2&&U.samples>0&&S.useMultisampledRTT(U)===!1?Me=G.get(U).__webglMultisampledFramebuffer:Array.isArray(lt)?Me=lt[Se]:Me=lt,x.copy(U.viewport),T.copy(U.scissor),K=U.scissorTest}else x.copy(W).multiplyScalar(w).floor(),T.copy(te).multiplyScalar(w).floor(),K=re;if(de.bindFramebuffer(O.FRAMEBUFFER,Me)&&pe.drawBuffers&&be&&de.drawBuffers(U,Me),de.viewport(x),de.scissor(T),de.setScissorTest(K),qe){const nt=G.get(U.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+he,nt.__webglTexture,Se)}else if(Je){const nt=G.get(U.texture),ft=he||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,nt.__webglTexture,Se||0,ft)}N=-1},this.readRenderTargetPixels=function(U,he,Se,be,Me,qe,Je){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=G.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Je!==void 0&&(tt=tt[Je]),tt){de.bindFramebuffer(O.FRAMEBUFFER,tt);try{const nt=U.texture,ft=nt.format,lt=nt.type;if(ft!==Mn&&Ne.convert(ft)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ct=lt===Sr&&(ce.has("EXT_color_buffer_half_float")||pe.isWebGL2&&ce.has("EXT_color_buffer_float"));if(lt!==ri&&Ne.convert(lt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(lt===kn&&(pe.isWebGL2||ce.has("OES_texture_float")||ce.has("WEBGL_color_buffer_float")))&&!ct){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}he>=0&&he<=U.width-be&&Se>=0&&Se<=U.height-Me&&O.readPixels(he,Se,be,Me,Ne.convert(ft),Ne.convert(lt),qe)}finally{const nt=y!==null?G.get(y).__webglFramebuffer:null;de.bindFramebuffer(O.FRAMEBUFFER,nt)}}},this.copyFramebufferToTexture=function(U,he,Se=0){const be=Math.pow(2,-Se),Me=Math.floor(he.image.width*be),qe=Math.floor(he.image.height*be);S.setTexture2D(he,0),O.copyTexSubImage2D(O.TEXTURE_2D,Se,0,0,U.x,U.y,Me,qe),de.unbindTexture()},this.copyTextureToTexture=function(U,he,Se,be=0){const Me=he.image.width,qe=he.image.height,Je=Ne.convert(Se.format),tt=Ne.convert(Se.type);S.setTexture2D(Se,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Se.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Se.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Se.unpackAlignment),he.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,be,U.x,U.y,Me,qe,Je,tt,he.image.data):he.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,be,U.x,U.y,he.mipmaps[0].width,he.mipmaps[0].height,Je,he.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,be,U.x,U.y,Je,tt,he.image),be===0&&Se.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),de.unbindTexture()},this.copyTextureToTexture3D=function(U,he,Se,be,Me=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const qe=U.max.x-U.min.x+1,Je=U.max.y-U.min.y+1,tt=U.max.z-U.min.z+1,nt=Ne.convert(be.format),ft=Ne.convert(be.type);let lt;if(be.isData3DTexture)S.setTexture3D(be,0),lt=O.TEXTURE_3D;else if(be.isDataArrayTexture||be.isCompressedArrayTexture)S.setTexture2DArray(be,0),lt=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,be.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,be.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,be.unpackAlignment);const ct=O.getParameter(O.UNPACK_ROW_LENGTH),wt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),tn=O.getParameter(O.UNPACK_SKIP_PIXELS),Ut=O.getParameter(O.UNPACK_SKIP_ROWS),Dn=O.getParameter(O.UNPACK_SKIP_IMAGES),yt=Se.isCompressedTexture?Se.mipmaps[Me]:Se.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,yt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,yt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,U.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,U.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,U.min.z),Se.isDataTexture||Se.isData3DTexture?O.texSubImage3D(lt,Me,he.x,he.y,he.z,qe,Je,tt,nt,ft,yt.data):Se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(lt,Me,he.x,he.y,he.z,qe,Je,tt,nt,yt.data)):O.texSubImage3D(lt,Me,he.x,he.y,he.z,qe,Je,tt,nt,ft,yt),O.pixelStorei(O.UNPACK_ROW_LENGTH,ct),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,wt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,tn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ut),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Dn),Me===0&&be.generateMipmaps&&O.generateMipmap(lt),de.unbindTexture()},this.initTexture=function(U){U.isCubeTexture?S.setTextureCube(U,0):U.isData3DTexture?S.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?S.setTexture2DArray(U,0):S.setTexture2D(U,0),de.unbindTexture()},this.resetState=function(){L=0,A=0,y=null,de.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ua?"display-p3":"srgb",t.unpackColorSpace=Et.workingColorSpace===as?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===zt?Mi:xc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Mi?zt:qn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class x_ extends Vc{}x_.prototype.isWebGL1Renderer=!0;class E_ extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class ma extends rr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sl=new ue,bl=new ue,yl=new Pt,Ws=new ha,qr=new os;class M_ extends kt{constructor(e=new en,t=new ma){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Sl.fromBufferAttribute(t,r-1),bl.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Sl.distanceTo(bl);e.setAttribute("lineDistance",new At(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(r),qr.radius+=s,e.ray.intersectsSphere(qr)===!1)return;yl.copy(r).invert(),Ws.copy(e.ray).applyMatrix4(yl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new ue,u=new ue,h=new ue,f=new ue,m=this.isLineSegments?2:1,_=n.index,p=n.attributes.position;if(_!==null){const d=Math.max(0,a.start),b=Math.min(_.count,a.start+a.count);for(let M=d,P=b-1;M<P;M+=m){const L=_.getX(M),A=_.getX(M+1);if(l.fromBufferAttribute(p,L),u.fromBufferAttribute(p,A),Ws.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const N=e.ray.origin.distanceTo(f);N<e.near||N>e.far||t.push({distance:N,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),b=Math.min(p.count,a.start+a.count);for(let M=d,P=b-1;M<P;M+=m){if(l.fromBufferAttribute(p,M),u.fromBufferAttribute(p,M+1),Ws.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Tl=new ue,Al=new ue;class Gc extends M_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Tl.fromBufferAttribute(t,r),Al.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Tl.distanceTo(Al);e.setAttribute("lineDistance",new At(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rs extends en{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],m=[];let _=0;const v=[],p=n/2;let d=0;b(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new At(h,3)),this.setAttribute("normal",new At(f,3)),this.setAttribute("uv",new At(m,2));function b(){const P=new ue,L=new ue;let A=0;const y=(t-e)/n;for(let N=0;N<=s;N++){const k=[],x=N/s,T=x*(t-e)+e;for(let K=0;K<=r;K++){const se=K/r,B=se*c+o,ee=Math.sin(B),Z=Math.cos(B);L.x=T*ee,L.y=-x*n+p,L.z=T*Z,h.push(L.x,L.y,L.z),P.set(ee,y,Z).normalize(),f.push(P.x,P.y,P.z),m.push(se,1-x),k.push(_++)}v.push(k)}for(let N=0;N<r;N++)for(let k=0;k<s;k++){const x=v[k][N],T=v[k+1][N],K=v[k+1][N+1],se=v[k][N+1];u.push(x,T,se),u.push(T,K,se),A+=6}l.addGroup(d,A,0),d+=A}function M(P){const L=_,A=new it,y=new ue;let N=0;const k=P===!0?e:t,x=P===!0?1:-1;for(let K=1;K<=r;K++)h.push(0,p*x,0),f.push(0,x,0),m.push(.5,.5),_++;const T=_;for(let K=0;K<=r;K++){const B=K/r*c+o,ee=Math.cos(B),Z=Math.sin(B);y.x=k*Z,y.y=p*x,y.z=k*ee,h.push(y.x,y.y,y.z),f.push(0,x,0),A.x=ee*.5+.5,A.y=Z*.5*x+.5,m.push(A.x,A.y),_++}for(let K=0;K<r;K++){const se=L+K,B=T+K;P===!0?u.push(B,B+1,se):u.push(B+1,B,se),N+=3}l.addGroup(d,N,P===!0?1:2),d+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _a extends en{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new ue,f=new ue,m=[],_=[],v=[],p=[];for(let d=0;d<=n;d++){const b=[],M=d/n;let P=0;d===0&&a===0?P=.5/t:d===n&&c===Math.PI&&(P=-.5/t);for(let L=0;L<=t;L++){const A=L/t;h.x=-e*Math.cos(r+A*s)*Math.sin(a+M*o),h.y=e*Math.cos(a+M*o),h.z=e*Math.sin(r+A*s)*Math.sin(a+M*o),_.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),p.push(A+P,1-M),b.push(l++)}u.push(b)}for(let d=0;d<n;d++)for(let b=0;b<t;b++){const M=u[d][b+1],P=u[d][b],L=u[d+1][b],A=u[d+1][b+1];(d!==0||a>0)&&m.push(M,P,A),(d!==n-1||c<Math.PI)&&m.push(P,L,A)}this.setIndex(m),this.setAttribute("position",new At(_,3)),this.setAttribute("normal",new At(v,3)),this.setAttribute("uv",new At(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wi extends rr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ht(16777215),this.specular=new ht(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ec,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=la,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hc extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Xs=new Pt,wl=new ue,Cl=new ue;class S_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new da,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;wl.setFromMatrixPosition(e.matrixWorld),t.position.copy(wl),Cl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cl),t.updateMatrixWorld(),Xs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class b_ extends S_{constructor(){super(new Uc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class y_ extends Hc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new b_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class T_ extends Hc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Rl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Kt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class A_ extends Gc{constructor(e=10,t=10,n=4473924,r=8947848){n=new ht(n),r=new ht(r);const s=t/2,a=e/t,o=e/2,c=[],l=[];for(let f=0,m=0,_=-o;f<=t;f++,_+=a){c.push(-o,0,_,o,0,_),c.push(_,0,-o,_,0,o);const v=f===s?n:r;v.toArray(l,m),m+=3,v.toArray(l,m),m+=3,v.toArray(l,m),m+=3,v.toArray(l,m),m+=3}const u=new en;u.setAttribute("position",new At(c,3)),u.setAttribute("color",new At(l,3));const h=new ma({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class w_ extends Gc{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new en;r.setAttribute("position",new At(t,3)),r.setAttribute("color",new At(n,3));const s=new ma({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,n){const r=new ht,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oa);const Pl={type:"change"},qs={type:"start"},Ll={type:"end"},jr=new ha,Dl=new zn,C_=Math.cos(70*ch.DEG2RAD);class R_ extends Ti{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new ue,this.cursor=new ue,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ai.ROTATE,MIDDLE:Ai.DOLLY,RIGHT:Ai.PAN},this.touches={ONE:wi.ROTATE,TWO:wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(z){z.addEventListener("keydown",Oe),this._domElementKeyEvents=z},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Oe),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Pl),n.update(),s=r.NONE},this.update=function(){const z=new ue,Ue=new yi().setFromUnitVectors(e.up,new ue(0,1,0)),Ve=Ue.clone().invert(),Xe=new ue,I=new yi,Ee=new ue,_e=2*Math.PI;return function(De=null){const et=n.object.position;z.copy(et).sub(n.target),z.applyQuaternion(Ue),o.setFromVector3(z),n.autoRotate&&s===r.NONE&&K(x(De)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let st=n.minAzimuthAngle,gt=n.maxAzimuthAngle;isFinite(st)&&isFinite(gt)&&(st<-Math.PI?st+=_e:st>Math.PI&&(st-=_e),gt<-Math.PI?gt+=_e:gt>Math.PI&&(gt-=_e),st<=gt?o.theta=Math.max(st,Math.min(gt,o.theta)):o.theta=o.theta>(st+gt)/2?Math.max(st,o.theta):Math.min(gt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&A||n.object.isOrthographicCamera?o.radius=W(o.radius):o.radius=W(o.radius*l),z.setFromSpherical(o),z.applyQuaternion(Ve),et.copy(n.target).add(z),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let bt=!1;if(n.zoomToCursor&&A){let rt=null;if(n.object.isPerspectiveCamera){const xt=z.length();rt=W(xt*l);const St=xt-rt;n.object.position.addScaledVector(P,St),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const xt=new ue(L.x,L.y,0);xt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),bt=!0;const St=new ue(L.x,L.y,0);St.unproject(n.object),n.object.position.sub(St).add(xt),n.object.updateMatrixWorld(),rt=z.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;rt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(rt).add(n.object.position):(jr.origin.copy(n.object.position),jr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(jr.direction))<C_?e.lookAt(n.target):(Dl.setFromNormalAndCoplanarPoint(n.object.up,n.target),jr.intersectPlane(Dl,n.target))))}else n.object.isOrthographicCamera&&(bt=l!==1,bt&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix()));return l=1,A=!1,bt||Xe.distanceToSquared(n.object.position)>a||8*(1-I.dot(n.object.quaternion))>a||Ee.distanceToSquared(n.target)>0?(n.dispatchEvent(Pl),Xe.copy(n.object.position),I.copy(n.object.quaternion),Ee.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",je),n.domElement.removeEventListener("pointerdown",S),n.domElement.removeEventListener("pointercancel",$),n.domElement.removeEventListener("wheel",ve),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",$),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Oe),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Rl,c=new Rl;let l=1;const u=new ue,h=new it,f=new it,m=new it,_=new it,v=new it,p=new it,d=new it,b=new it,M=new it,P=new ue,L=new it;let A=!1;const y=[],N={};let k=!1;function x(z){return z!==null?2*Math.PI/60*n.autoRotateSpeed*z:2*Math.PI/60/60*n.autoRotateSpeed}function T(z){const Ue=Math.abs(z*.01);return Math.pow(.95,n.zoomSpeed*Ue)}function K(z){c.theta-=z}function se(z){c.phi-=z}const B=function(){const z=new ue;return function(Ve,Xe){z.setFromMatrixColumn(Xe,0),z.multiplyScalar(-Ve),u.add(z)}}(),ee=function(){const z=new ue;return function(Ve,Xe){n.screenSpacePanning===!0?z.setFromMatrixColumn(Xe,1):(z.setFromMatrixColumn(Xe,0),z.crossVectors(n.object.up,z)),z.multiplyScalar(Ve),u.add(z)}}(),Z=function(){const z=new ue;return function(Ve,Xe){const I=n.domElement;if(n.object.isPerspectiveCamera){const Ee=n.object.position;z.copy(Ee).sub(n.target);let _e=z.length();_e*=Math.tan(n.object.fov/2*Math.PI/180),B(2*Ve*_e/I.clientHeight,n.object.matrix),ee(2*Xe*_e/I.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(B(Ve*(n.object.right-n.object.left)/n.object.zoom/I.clientWidth,n.object.matrix),ee(Xe*(n.object.top-n.object.bottom)/n.object.zoom/I.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function w(z){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=z:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(z){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=z:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(z,Ue){if(!n.zoomToCursor)return;A=!0;const Ve=n.domElement.getBoundingClientRect(),Xe=z-Ve.left,I=Ue-Ve.top,Ee=Ve.width,_e=Ve.height;L.x=Xe/Ee*2-1,L.y=-(I/_e)*2+1,P.set(L.x,L.y,1).unproject(n.object).sub(n.object.position).normalize()}function W(z){return Math.max(n.minDistance,Math.min(n.maxDistance,z))}function te(z){h.set(z.clientX,z.clientY)}function re(z){Y(z.clientX,z.clientX),d.set(z.clientX,z.clientY)}function me(z){_.set(z.clientX,z.clientY)}function q(z){f.set(z.clientX,z.clientY),m.subVectors(f,h).multiplyScalar(n.rotateSpeed);const Ue=n.domElement;K(2*Math.PI*m.x/Ue.clientHeight),se(2*Math.PI*m.y/Ue.clientHeight),h.copy(f),n.update()}function V(z){b.set(z.clientX,z.clientY),M.subVectors(b,d),M.y>0?w(T(M.y)):M.y<0&&j(T(M.y)),d.copy(b),n.update()}function le(z){v.set(z.clientX,z.clientY),p.subVectors(v,_).multiplyScalar(n.panSpeed),Z(p.x,p.y),_.copy(v),n.update()}function ae(z){Y(z.clientX,z.clientY),z.deltaY<0?j(T(z.deltaY)):z.deltaY>0&&w(T(z.deltaY)),n.update()}function H(z){let Ue=!1;switch(z.code){case n.keys.UP:z.ctrlKey||z.metaKey||z.shiftKey?se(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Z(0,n.keyPanSpeed),Ue=!0;break;case n.keys.BOTTOM:z.ctrlKey||z.metaKey||z.shiftKey?se(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Z(0,-n.keyPanSpeed),Ue=!0;break;case n.keys.LEFT:z.ctrlKey||z.metaKey||z.shiftKey?K(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Z(n.keyPanSpeed,0),Ue=!0;break;case n.keys.RIGHT:z.ctrlKey||z.metaKey||z.shiftKey?K(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Z(-n.keyPanSpeed,0),Ue=!0;break}Ue&&(z.preventDefault(),n.update())}function ne(z){if(y.length===1)h.set(z.pageX,z.pageY);else{const Ue=Ne(z),Ve=.5*(z.pageX+Ue.x),Xe=.5*(z.pageY+Ue.y);h.set(Ve,Xe)}}function X(z){if(y.length===1)_.set(z.pageX,z.pageY);else{const Ue=Ne(z),Ve=.5*(z.pageX+Ue.x),Xe=.5*(z.pageY+Ue.y);_.set(Ve,Xe)}}function xe(z){const Ue=Ne(z),Ve=z.pageX-Ue.x,Xe=z.pageY-Ue.y,I=Math.sqrt(Ve*Ve+Xe*Xe);d.set(0,I)}function O(z){n.enableZoom&&xe(z),n.enablePan&&X(z)}function ye(z){n.enableZoom&&xe(z),n.enableRotate&&ne(z)}function ce(z){if(y.length==1)f.set(z.pageX,z.pageY);else{const Ve=Ne(z),Xe=.5*(z.pageX+Ve.x),I=.5*(z.pageY+Ve.y);f.set(Xe,I)}m.subVectors(f,h).multiplyScalar(n.rotateSpeed);const Ue=n.domElement;K(2*Math.PI*m.x/Ue.clientHeight),se(2*Math.PI*m.y/Ue.clientHeight),h.copy(f)}function pe(z){if(y.length===1)v.set(z.pageX,z.pageY);else{const Ue=Ne(z),Ve=.5*(z.pageX+Ue.x),Xe=.5*(z.pageY+Ue.y);v.set(Ve,Xe)}p.subVectors(v,_).multiplyScalar(n.panSpeed),Z(p.x,p.y),_.copy(v)}function de(z){const Ue=Ne(z),Ve=z.pageX-Ue.x,Xe=z.pageY-Ue.y,I=Math.sqrt(Ve*Ve+Xe*Xe);b.set(0,I),M.set(0,Math.pow(b.y/d.y,n.zoomSpeed)),w(M.y),d.copy(b);const Ee=(z.pageX+Ue.x)*.5,_e=(z.pageY+Ue.y)*.5;Y(Ee,_e)}function oe(z){n.enableZoom&&de(z),n.enablePan&&pe(z)}function G(z){n.enableZoom&&de(z),n.enableRotate&&ce(z)}function S(z){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(z.pointerId),n.domElement.addEventListener("pointermove",E),n.domElement.addEventListener("pointerup",$)),Ze(z),z.pointerType==="touch"?Fe(z):ge(z))}function E(z){n.enabled!==!1&&(z.pointerType==="touch"?we(z):fe(z))}function $(z){switch(Ye(z),y.length){case 0:n.domElement.releasePointerCapture(z.pointerId),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",$),n.dispatchEvent(Ll),s=r.NONE;break;case 1:const Ue=y[0],Ve=N[Ue];Fe({pointerId:Ue,pageX:Ve.x,pageY:Ve.y});break}}function ge(z){let Ue;switch(z.button){case 0:Ue=n.mouseButtons.LEFT;break;case 1:Ue=n.mouseButtons.MIDDLE;break;case 2:Ue=n.mouseButtons.RIGHT;break;default:Ue=-1}switch(Ue){case Ai.DOLLY:if(n.enableZoom===!1)return;re(z),s=r.DOLLY;break;case Ai.ROTATE:if(z.ctrlKey||z.metaKey||z.shiftKey){if(n.enablePan===!1)return;me(z),s=r.PAN}else{if(n.enableRotate===!1)return;te(z),s=r.ROTATE}break;case Ai.PAN:if(z.ctrlKey||z.metaKey||z.shiftKey){if(n.enableRotate===!1)return;te(z),s=r.ROTATE}else{if(n.enablePan===!1)return;me(z),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(qs)}function fe(z){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;q(z);break;case r.DOLLY:if(n.enableZoom===!1)return;V(z);break;case r.PAN:if(n.enablePan===!1)return;le(z);break}}function ve(z){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(z.preventDefault(),n.dispatchEvent(qs),ae(Pe(z)),n.dispatchEvent(Ll))}function Pe(z){const Ue=z.deltaMode,Ve={clientX:z.clientX,clientY:z.clientY,deltaY:z.deltaY};switch(Ue){case 1:Ve.deltaY*=16;break;case 2:Ve.deltaY*=100;break}return z.ctrlKey&&!k&&(Ve.deltaY*=10),Ve}function Te(z){z.key==="Control"&&(k=!0,n.domElement.getRootNode().addEventListener("keyup",Ae,{passive:!0,capture:!0}))}function Ae(z){z.key==="Control"&&(k=!1,n.domElement.getRootNode().removeEventListener("keyup",Ae,{passive:!0,capture:!0}))}function Oe(z){n.enabled===!1||n.enablePan===!1||H(z)}function Fe(z){switch(Be(z),y.length){case 1:switch(n.touches.ONE){case wi.ROTATE:if(n.enableRotate===!1)return;ne(z),s=r.TOUCH_ROTATE;break;case wi.PAN:if(n.enablePan===!1)return;X(z),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case wi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;O(z),s=r.TOUCH_DOLLY_PAN;break;case wi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ye(z),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(qs)}function we(z){switch(Be(z),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;ce(z),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;pe(z),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;oe(z),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;G(z),n.update();break;default:s=r.NONE}}function je(z){n.enabled!==!1&&z.preventDefault()}function Ze(z){y.push(z.pointerId)}function Ye(z){delete N[z.pointerId];for(let Ue=0;Ue<y.length;Ue++)if(y[Ue]==z.pointerId){y.splice(Ue,1);return}}function Be(z){let Ue=N[z.pointerId];Ue===void 0&&(Ue=new it,N[z.pointerId]=Ue),Ue.set(z.pageX,z.pageY)}function Ne(z){const Ue=z.pointerId===y[0]?y[1]:y[0];return N[Ue]}n.domElement.addEventListener("contextmenu",je),n.domElement.addEventListener("pointerdown",S),n.domElement.addEventListener("pointercancel",$),n.domElement.addEventListener("wheel",ve,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Te,{passive:!0,capture:!0}),this.update()}}function Il(i){let e,t='<div class="empty-icon svelte-at2dj3">⛏</div> <h3 class="svelte-at2dj3">GeoModeler 三维地质可视化</h3> <p class="svelte-at2dj3">导入钻孔数据后开始三维建模与可视化分析</p>';return{c(){e=R("div"),e.innerHTML=t,this.h()},l(n){e=C(n,"DIV",{class:!0,"data-svelte-h":!0}),Le(e)!=="svelte-1u73fdm"&&(e.innerHTML=t),this.h()},h(){F(e,"class","viewer-empty svelte-at2dj3")},m(n,r){Re(n,e,r)},d(n){n&&D(e)}}}function P_(i){let e,t=!i[1]&&i[2].length===0&&!i[0]&&Il();return{c(){e=R("div"),t&&t.c(),this.h()},l(n){e=C(n,"DIV",{class:!0});var r=ie(e);t&&t.l(r),r.forEach(D),this.h()},h(){F(e,"class","viewer-container svelte-at2dj3")},m(n,r){Re(n,e,r),t&&t.m(e,null),i[7](e)},p(n,[r]){!n[1]&&n[2].length===0&&!n[0]?t||(t=Il(),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},i:Ct,o:Ct,d(n){n&&D(e),t&&t.d(),i[7](null)}}}function Ul(i,e,t){const n=t>e?Math.max(0,Math.min(1,(i-e)/(t-e))):.5;if(n<.25)return[0,0,.5+n/.25*.5];if(n<.5){const r=(n-.25)/.25;return[0,r,1-r]}else if(n<.75){const r=(n-.5)/.25;return[r,1-r,0]}else return[1,1-(n-.75)/.25*.5,0]}function L_(i,e,t){let n,r,s,a,o,c,l,u,h;at(i,Qn,w=>t(6,n=w)),at(i,Ks,w=>t(16,r=w)),at(i,Ys,w=>t(0,s=w)),at(i,js,w=>t(1,a=w)),at(i,vr,w=>t(17,o=w)),at(i,gr,w=>t(18,c=w)),at(i,_r,w=>t(19,l=w)),at(i,vi,w=>t(20,u=w)),at(i,Ji,w=>t(2,h=w));let f,m,_,v,p,d={},b=[],M=null,P=null,L=null,A;const y=["#E6B89C","#F0E68C","#CD853F","#8B7355","#A0522D","#DEB887","#D2B48C","#BDB76B","#BC8F8F","#C4A882","#9ACD32","#6B8E23","#556B2F","#8FBC8F","#2E8B57","#708090","#778899","#B0C4DE","#87CEEB","#4682B4"];function N(w,j=0){const Y=u==null?void 0:u.find(W=>W.name===w);return Y!=null&&Y.color?new ht(Y.color):new ht(y[j%y.length])}cc(()=>(k(),()=>{cancelAnimationFrame(A),v==null||v.dispose()}));function k(){if(!f)return;t(4,m=new E_),t(4,m.background=new ht(1711395),m),_=new mn(60,f.clientWidth/f.clientHeight,.1,1e4),_.position.set(100,80,100),v=new Vc({antialias:!0}),v.setSize(f.clientWidth,f.clientHeight),v.setPixelRatio(window.devicePixelRatio),v.localClippingEnabled=!0,f.appendChild(v.domElement),p=new R_(_,v.domElement),p.enableDamping=!0,p.dampingFactor=.05;const w=new T_(4210752,2);m.add(w);const j=new y_(16777215,1.5);j.position.set(100,200,100),m.add(j);const Y=new A_(200,20,4473924,3355443);m.add(Y);const W=new w_(50);m.add(W),x(),new ResizeObserver(()=>{f&&v&&_&&(_.aspect=f.clientWidth/f.clientHeight,_.updateProjectionMatrix(),v.setSize(f.clientWidth,f.clientHeight))}).observe(f)}function x(){A=requestAnimationFrame(x),p==null||p.update(),v==null||v.render(m,_)}function T(){if(b.forEach(W=>m.remove(W)),b=[],!h||h.length===0)return;const w=h.map(W=>[W.longitude,W.latitude,W.elevation]);if(w.length===0)return;const j=Math.min(...w.map(W=>W[0])),Y=Math.min(...w.map(W=>W[1]));h.forEach(W=>{const te=(W.longitude-j)*111320*Math.cos(W.latitude*Math.PI/180),re=(W.latitude-Y)*111320,me=W.layers.length>0?Math.max(...W.layers.map(V=>V.bottom_depth)):10;new rs(1,1,me,16),W.elevation,W.layers.forEach(V=>{const le=N(V.lithology_name,(u==null?void 0:u.findIndex(xe=>xe.name===V.lithology_name))||0),ae=V.bottom_depth-V.top_depth,H=new rs(1.2,1.2,ae,16),ne=new Wi({color:le,transparent:!0,opacity:.9}),X=new Xt(H,ne);X.position.set(te,W.elevation-V.top_depth-ae/2,re),m.add(X),b.push(X)});const q=new Xt(new _a(1.5,16,16),new Wi({color:16777215}));q.position.set(te,W.elevation,re),m.add(q),b.push(q)})}function K(){if(Object.values(d).forEach(te=>m.remove(te)),d={},!(a!=null&&a.surfaces))return;const w=a,j=w.grid,Y=j.nx,W=j.ny;w.lithologies.forEach((te,re)=>{const me=w.surfaces[te];if(!(me!=null&&me.top)||!(me!=null&&me.bottom))return;const q=me.top,V=me.bottom,le=N(te,re),ae=l[te]!==!1,H=c[te]??.7,ne=new ji,X=new en,xe=[],O=[];for(let pe=0;pe<W;pe++)for(let de=0;de<Y;de++){const oe=de/(Y-1)*100,G=pe/(W-1)*100,S=q[pe][de],E=V[pe][de];xe.push(oe,S,G),xe.push(oe,E,G)}for(let pe=0;pe<W-1;pe++)for(let de=0;de<Y-1;de++){const oe=(pe*Y+de)*2,G=(pe*Y+de+1)*2,S=((pe+1)*Y+de)*2,E=((pe+1)*Y+de+1)*2;O.push(oe,S,G),O.push(G,S,E),O.push(oe+1,G+1,S+1),O.push(G+1,E+1,S+1)}for(let pe=0;pe<W-1;pe++)for(let de=0;de<Y-1;de++){const oe=(pe*Y+de)*2,G=oe+1,S=(pe*Y+de+1)*2,E=S+1;O.push(oe,S,G),O.push(G,S,E)}X.setAttribute("position",new At(xe,3)),X.setIndex(O),X.computeVertexNormals();const ye=new Wi({color:le,transparent:!0,opacity:H,side:ln,clippingPlanes:o.enabled&&M?[M]:[]}),ce=new Xt(X,ye);ne.add(ce),ne.visible=ae,m.add(ne),d[te]=ne})}function se(){if(o.enabled){const w=o.normal,j=o.position;M=new zn(new ue(w[0],w[1],w[2]).normalize(),-(w[0]*j[0]+w[1]*j[1]+w[2]*j[2]))}else M=null;m&&a&&K()}function B(){var ye,ce;if(P&&(m.remove(P),(ye=P.geometry)==null||ye.dispose(),Array.isArray(P.material)?P.material.forEach(pe=>pe.dispose()):(ce=P.material)==null||ce.dispose(),t(5,P=null)),!(s!=null&&s.grid_values))return;const w=s.grid_values,j=s.grid;if(!j||!w)return;const{nx:Y,ny:W,nz:te,x_min:re,x_max:me,y_min:q,y_max:V,z_min:le,z_max:ae}=j,H=r.mode,ne=r.colorMin,X=r.colorMax,xe=(ae-le)/(te-1||1),O=100/Math.max(Y,W);if(H==="voxel"){const pe=new ji,de=Y*W*te,oe=Math.max(1,Math.floor(de/3e3));let G=0;for(let S=0;S<te;S+=1)for(let E=0;E<W;E+=1)for(let $=0;$<Y;$+=1){if(G++%oe!==0&&oe>1)continue;const ge=S*W*Y+E*Y+$;if(ge>=w.length)continue;const fe=w[ge];if(fe==null||Number.isNaN(fe))continue;const ve=Ul(fe,ne,X),Pe=$/(Y-1||1)*100,Te=E/(W-1||1)*100,Ae=le+S*xe,Oe=new sr(O*.8,xe*.8||.5,O*.8),Fe=new fa({color:new ht(ve[0],ve[1],ve[2]),transparent:!0,opacity:.7}),we=new Xt(Oe,Fe);we.position.set(Pe,Ae,Te),pe.add(we)}t(5,P=pe),m.add(pe)}else{const pe=r.isosurfaceValue,de=[],oe=[],G=[];let S=0;for(let ge=0;ge<te-1;ge++)for(let fe=0;fe<W-1;fe++)for(let ve=0;ve<Y-1;ve++){const Te=[[ve,fe,ge],[ve+1,fe,ge],[ve+1,fe+1,ge],[ve,fe+1,ge],[ve,fe,ge+1],[ve+1,fe,ge+1],[ve+1,fe+1,ge+1],[ve,fe+1,ge+1]].map(([Ke,z,Ue])=>{const Ve=Ue*W*Y+z*Y+Ke;return Ve<w.length?w[Ve]:0}),Oe=Te.map(Ke=>(Ke||0)>=pe).filter(Ke=>Ke).length;if(Oe===0||Oe===8)continue;const Fe=(ve+.5)/(Y-1)*100,we=(fe+.5)/(W-1)*100,je=le+(ge+.5)*xe,Ze=Te.reduce((Ke,z)=>Ke+z,0)/8,Ye=Ul(Ze,ne,X),Be=O*.9,Ne=Math.max(xe*.9,Be*.2);de.push(Fe-Be/2,je-Ne/2,we-Be/2,Fe+Be/2,je-Ne/2,we-Be/2,Fe+Be/2,je-Ne/2,we+Be/2,Fe-Be/2,je-Ne/2,we+Be/2,Fe-Be/2,je+Ne/2,we-Be/2,Fe+Be/2,je+Ne/2,we-Be/2,Fe+Be/2,je+Ne/2,we+Be/2,Fe-Be/2,je+Ne/2,we+Be/2);for(let Ke=0;Ke<8;Ke++)G.push(Ye[0],Ye[1],Ye[2]);oe.push(S,S+1,S+2,S,S+2,S+3,S+4,S+6,S+5,S+4,S+7,S+6,S,S+4,S+5,S,S+5,S+1,S+1,S+5,S+6,S+1,S+6,S+2,S+2,S+6,S+7,S+2,S+7,S+3,S+3,S+7,S+4,S+3,S+4,S),S+=8}if(de.length===0)return;const E=new en;E.setAttribute("position",new At(de,3)),E.setAttribute("color",new At(G,3)),E.setIndex(oe),E.computeVertexNormals();const $=new Wi({vertexColors:!0,transparent:!0,opacity:.85,side:ln});t(5,P=new Xt(E,$)),m.add(P)}}function ee(){var Y,W;L&&(m.remove(L),(Y=L.geometry)==null||Y.dispose(),Array.isArray(L.material)?L.material.forEach(te=>te.dispose()):(W=L.material)==null||W.dispose(),L=null);const w=n;if(!w||!w.visible||!w.orthoImage&&!w.demImage)return;const j=100;if(w.demImage){const te=w.demImage,re=document.createElement("canvas");re.width=64,re.height=64;const me=re.getContext("2d");me.drawImage(te,0,0,64,64);try{const q=me.getImageData(0,0,64,64).data,V=32,le=32,ae=new ir(j,j,V,le),H=ae.attributes.position;for(let O=0;O<=le;O++)for(let ye=0;ye<=V;ye++){const ce=Math.floor(ye/V*63),de=(Math.floor(O/le*63)*64+ce)*4,G=(q[de]+q[de+1]+q[de+2])/3/255*30-5;H.setZ(O*(V+1)+ye,G)}ae.computeVertexNormals();const ne={transparent:!0,opacity:w.opacity,side:ln};if(w.orthoImage){const O=new qt(w.orthoImage);O.needsUpdate=!0,ne.map=O}else ne.vertexColors=!1,ne.color=8956518;const X=new Wi(ne),xe=new Xt(ae,X);xe.rotation.x=-Math.PI/2,xe.position.y=0,L=xe,m.add(xe);return}catch(q){console.warn("DEM texture load failed:",q)}}if(w.orthoImage){const te=new qt(w.orthoImage);te.needsUpdate=!0;const re=new ir(j,j),me=new Wi({map:te,transparent:!0,opacity:w.opacity,side:ln}),q=new Xt(re,me);q.rotation.x=-Math.PI/2,q.position.y=.01,L=q,m.add(q)}}function Z(w){$r[w?"unshift":"push"](()=>{f=w,t(3,f)})}return i.$$.update=()=>{var w,j;i.$$.dirty&20&&m&&h.length>0&&T(),i.$$.dirty&18&&m&&a&&K(),i.$$.dirty&49&&(m&&s?B():m&&P&&(m.remove(P),(w=P.geometry)==null||w.dispose(),Array.isArray(P.material)?P.material.forEach(Y=>Y.dispose()):(j=P.material)==null||j.dispose(),t(5,P=null))),i.$$.dirty&80&&m&&n&&ee()},se(),[s,a,h,f,m,P,n,Z]}class D_ extends Cn{constructor(e){super(),Rn(this,e,L_,P_,wn,{})}}function Nl(i,e,t){const n=i.slice();return n[43]=e[t],n}function Ol(i,e,t){const n=i.slice();return n[46]=e[t],n}function Fl(i,e,t){const n=i.slice();return n[49]=e[t],n}function I_(i){let e,t,n,r="变异函数模型",s,a,o,c="球状模型",l,u="指数模型",h,f="高斯模型",m,_,v,p,d,b,M,P="各向异性",L,A,y,N,k="主轴方向(°)",x,T,K,se,B,ee="各向异性比",Z,w,j,Y,W="网格分辨率",te,re,me,q,V="NX",le,ae,H,ne,X,xe="NY",O,ye,ce,pe,de,oe="NZ",G,S,E,$,ge="开始建模",fe,ve,Pe=!i[9]&&Bl(i);return{c(){e=R("div"),t=R("div"),n=R("label"),n.textContent=r,s=Q(),a=R("select"),o=R("option"),o.textContent=c,l=R("option"),l.textContent=u,h=R("option"),h.textContent=f,m=Q(),_=R("label"),v=R("input"),p=ke(`
                自动拟合参数`),d=Q(),Pe&&Pe.c(),b=Q(),M=R("h4"),M.textContent=P,L=Q(),A=R("div"),y=R("div"),N=R("label"),N.textContent=k,x=Q(),T=R("input"),K=Q(),se=R("div"),B=R("label"),B.textContent=ee,Z=Q(),w=R("input"),j=Q(),Y=R("h4"),Y.textContent=W,te=Q(),re=R("div"),me=R("div"),q=R("label"),q.textContent=V,le=Q(),ae=R("input"),H=Q(),ne=R("div"),X=R("label"),X.textContent=xe,O=Q(),ye=R("input"),ce=Q(),pe=R("div"),de=R("label"),de.textContent=oe,G=Q(),S=R("input"),E=Q(),$=R("button"),$.textContent=ge,this.h()},l(Te){e=C(Te,"DIV",{class:!0});var Ae=ie(e);t=C(Ae,"DIV",{class:!0});var Oe=ie(t);n=C(Oe,"LABEL",{"data-svelte-h":!0}),Le(n)!=="svelte-1jgf9ft"&&(n.textContent=r),s=J(Oe),a=C(Oe,"SELECT",{});var Fe=ie(a);o=C(Fe,"OPTION",{"data-svelte-h":!0}),Le(o)!=="svelte-17ym7v6"&&(o.textContent=c),l=C(Fe,"OPTION",{"data-svelte-h":!0}),Le(l)!=="svelte-bzk8zo"&&(l.textContent=u),h=C(Fe,"OPTION",{"data-svelte-h":!0}),Le(h)!=="svelte-1iqrdsw"&&(h.textContent=f),Fe.forEach(D),Oe.forEach(D),m=J(Ae),_=C(Ae,"LABEL",{class:!0});var we=ie(_);v=C(we,"INPUT",{type:!0}),p=ze(we,`
                自动拟合参数`),we.forEach(D),d=J(Ae),Pe&&Pe.l(Ae),b=J(Ae),M=C(Ae,"H4",{style:!0,"data-svelte-h":!0}),Le(M)!=="svelte-1bmbghc"&&(M.textContent=P),L=J(Ae),A=C(Ae,"DIV",{class:!0});var je=ie(A);y=C(je,"DIV",{class:!0});var Ze=ie(y);N=C(Ze,"LABEL",{"data-svelte-h":!0}),Le(N)!=="svelte-121beyc"&&(N.textContent=k),x=J(Ze),T=C(Ze,"INPUT",{type:!0,step:!0}),Ze.forEach(D),K=J(je),se=C(je,"DIV",{class:!0});var Ye=ie(se);B=C(Ye,"LABEL",{"data-svelte-h":!0}),Le(B)!=="svelte-yzj6ss"&&(B.textContent=ee),Z=J(Ye),w=C(Ye,"INPUT",{type:!0,step:!0,min:!0}),Ye.forEach(D),je.forEach(D),j=J(Ae),Y=C(Ae,"H4",{style:!0,"data-svelte-h":!0}),Le(Y)!=="svelte-z4z6jw"&&(Y.textContent=W),te=J(Ae),re=C(Ae,"DIV",{class:!0});var Be=ie(re);me=C(Be,"DIV",{class:!0});var Ne=ie(me);q=C(Ne,"LABEL",{"data-svelte-h":!0}),Le(q)!=="svelte-kuum7m"&&(q.textContent=V),le=J(Ne),ae=C(Ne,"INPUT",{type:!0,min:!0,max:!0}),Ne.forEach(D),H=J(Be),ne=C(Be,"DIV",{class:!0});var Ke=ie(ne);X=C(Ke,"LABEL",{"data-svelte-h":!0}),Le(X)!=="svelte-1kjsuy3"&&(X.textContent=xe),O=J(Ke),ye=C(Ke,"INPUT",{type:!0,min:!0,max:!0}),Ke.forEach(D),ce=J(Be),pe=C(Be,"DIV",{class:!0});var z=ie(pe);de=C(z,"LABEL",{"data-svelte-h":!0}),Le(de)!=="svelte-1vblzhc"&&(de.textContent=oe),G=J(z),S=C(z,"INPUT",{type:!0,min:!0,max:!0}),z.forEach(D),Be.forEach(D),E=J(Ae),$=C(Ae,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),Le($)!=="svelte-1rcbday"&&($.textContent=ge),Ae.forEach(D),this.h()},h(){o.__value="spherical",He(o,o.__value),l.__value="exponential",He(l,l.__value),h.__value="gaussian",He(h,h.__value),i[0]===void 0&&si(()=>i[23].call(a)),F(t,"class","form-group"),F(v,"type","checkbox"),F(_,"class","checkbox-label"),Ce(M,"font-size","13px"),Ce(M,"margin","12px 0 8px"),F(T,"type","number"),F(T,"step","1"),F(y,"class","form-group"),F(w,"type","number"),F(w,"step","0.1"),F(w,"min","1"),F(se,"class","form-group"),F(A,"class","form-row"),Ce(Y,"font-size","13px"),Ce(Y,"margin","12px 0 8px"),F(ae,"type","number"),F(ae,"min","5"),F(ae,"max","100"),F(me,"class","form-group"),F(ye,"type","number"),F(ye,"min","5"),F(ye,"max","100"),F(ne,"class","form-group"),F(S,"type","number"),F(S,"min","5"),F(S,"max","50"),F(pe,"class","form-group"),F(re,"class","form-row"),F($,"class","btn-primary"),Ce($,"width","100%"),Ce($,"margin-top","12px"),F(e,"class","model-params")},m(Te,Ae){Re(Te,e,Ae),g(e,t),g(t,n),g(t,s),g(t,a),g(a,o),g(a,l),g(a,h),Ot(a,i[0],!0),g(e,m),g(e,_),g(_,v),v.checked=i[9],g(_,p),g(e,d),Pe&&Pe.m(e,null),g(e,b),g(e,M),g(e,L),g(e,A),g(A,y),g(y,N),g(y,x),g(y,T),He(T,i[4]),g(A,K),g(A,se),g(se,B),g(se,Z),g(se,w),He(w,i[5]),g(e,j),g(e,Y),g(e,te),g(e,re),g(re,me),g(me,q),g(me,le),g(me,ae),He(ae,i[6]),g(re,H),g(re,ne),g(ne,X),g(ne,O),g(ne,ye),He(ye,i[7]),g(re,ce),g(re,pe),g(pe,de),g(pe,G),g(pe,S),He(S,i[8]),g(e,E),g(e,$),fe||(ve=[Ge(a,"change",i[23]),Ge(v,"change",i[24]),Ge(T,"input",i[28]),Ge(w,"input",i[29]),Ge(ae,"input",i[30]),Ge(ye,"input",i[31]),Ge(S,"input",i[32]),Ge($,"click",i[19])],fe=!0)},p(Te,Ae){Ae[0]&1&&Ot(a,Te[0]),Ae[0]&512&&(v.checked=Te[9]),Te[9]?Pe&&(Pe.d(1),Pe=null):Pe?Pe.p(Te,Ae):(Pe=Bl(Te),Pe.c(),Pe.m(e,b)),Ae[0]&16&&ot(T.value)!==Te[4]&&He(T,Te[4]),Ae[0]&32&&ot(w.value)!==Te[5]&&He(w,Te[5]),Ae[0]&64&&ot(ae.value)!==Te[6]&&He(ae,Te[6]),Ae[0]&128&&ot(ye.value)!==Te[7]&&He(ye,Te[7]),Ae[0]&256&&ot(S.value)!==Te[8]&&He(S,Te[8])},d(Te){Te&&D(e),Pe&&Pe.d(),fe=!1,Lt(ve)}}}function U_(i){let e,t,n,r=i[13].progress.toFixed(0)+"",s,a,o,c,l;return{c(){e=R("div"),t=R("p"),n=ke("建模中... "),s=ke(r),a=ke("%"),o=Q(),c=R("div"),l=R("div"),this.h()},l(u){e=C(u,"DIV",{class:!0});var h=ie(e);t=C(h,"P",{class:!0});var f=ie(t);n=ze(f,"建模中... "),s=ze(f,r),a=ze(f,"%"),f.forEach(D),o=J(h),c=C(h,"DIV",{class:!0});var m=ie(c);l=C(m,"DIV",{class:!0,style:!0}),ie(l).forEach(D),m.forEach(D),h.forEach(D),this.h()},h(){F(t,"class","svelte-ajbu0x"),F(l,"class","progress-bar-fill"),Ce(l,"width",i[13].progress+"%"),F(c,"class","progress-bar"),F(e,"class","progress-section svelte-ajbu0x")},m(u,h){Re(u,e,h),g(e,t),g(t,n),g(t,s),g(t,a),g(e,o),g(e,c),g(c,l)},p(u,h){h[0]&8192&&r!==(r=u[13].progress.toFixed(0)+"")&&Qe(s,r),h[0]&8192&&Ce(l,"width",u[13].progress+"%")},d(u){u&&D(e)}}}function Bl(i){let e,t,n,r="变程",s,a,o,c,l,u="基台值",h,f,m,_,v,p="块金值",d,b,M,P;return{c(){e=R("div"),t=R("div"),n=R("label"),n.textContent=r,s=Q(),a=R("input"),o=Q(),c=R("div"),l=R("label"),l.textContent=u,h=Q(),f=R("input"),m=Q(),_=R("div"),v=R("label"),v.textContent=p,d=Q(),b=R("input"),this.h()},l(L){e=C(L,"DIV",{class:!0});var A=ie(e);t=C(A,"DIV",{class:!0});var y=ie(t);n=C(y,"LABEL",{"data-svelte-h":!0}),Le(n)!=="svelte-s6abzb"&&(n.textContent=r),s=J(y),a=C(y,"INPUT",{type:!0,step:!0}),y.forEach(D),o=J(A),c=C(A,"DIV",{class:!0});var N=ie(c);l=C(N,"LABEL",{"data-svelte-h":!0}),Le(l)!=="svelte-1eshi8q"&&(l.textContent=u),h=J(N),f=C(N,"INPUT",{type:!0,step:!0}),N.forEach(D),A.forEach(D),m=J(L),_=C(L,"DIV",{class:!0});var k=ie(_);v=C(k,"LABEL",{"data-svelte-h":!0}),Le(v)!=="svelte-olodes"&&(v.textContent=p),d=J(k),b=C(k,"INPUT",{type:!0,step:!0}),k.forEach(D),this.h()},h(){F(a,"type","number"),F(a,"step","0.001"),F(t,"class","form-group"),F(f,"type","number"),F(f,"step","0.001"),F(c,"class","form-group"),F(e,"class","form-row"),F(b,"type","number"),F(b,"step","0.001"),F(_,"class","form-group")},m(L,A){Re(L,e,A),g(e,t),g(t,n),g(t,s),g(t,a),He(a,i[1]),g(e,o),g(e,c),g(c,l),g(c,h),g(c,f),He(f,i[2]),Re(L,m,A),Re(L,_,A),g(_,v),g(_,d),g(_,b),He(b,i[3]),M||(P=[Ge(a,"input",i[25]),Ge(f,"input",i[26]),Ge(b,"input",i[27])],M=!0)},p(L,A){A[0]&2&&ot(a.value)!==L[1]&&He(a,L[1]),A[0]&4&&ot(f.value)!==L[2]&&He(f,L[2]),A[0]&8&&ot(b.value)!==L[3]&&He(b,L[3])},d(L){L&&(D(e),D(m),D(_)),M=!1,Lt(P)}}}function zl(i){let e,t,n,r="图层控制",s,a,o,c,l,u="切面",h,f,m,_,v,p,d,b,M,P,L,A="体积估算",y,N,k,x,T="选择地层",K,se,B,ee,Z,w,j,Y,W,te=_t(i[16].lithologies||[]),re=[];for(let H=0;H<te.length;H+=1)re[H]=kl(Fl(i,te,H));let me=i[18].enabled&&Vl(i),q=_t(i[16].lithologies||[]),V=[];for(let H=0;H<q.length;H+=1)V[H]=Gl(Ol(i,q,H));let le=i[12]&&Hl(i),ae=i[11].length>0&&Wl(i);return{c(){e=R("hr"),t=Q(),n=R("h4"),n.textContent=r,s=Q();for(let H=0;H<re.length;H+=1)re[H].c();a=Q(),o=R("hr"),c=Q(),l=R("h4"),l.textContent=u,h=Q(),f=R("div"),m=R("label"),_=R("input"),p=ke(`
                启用切面`),d=Q(),me&&me.c(),b=Q(),M=R("hr"),P=Q(),L=R("h4"),L.textContent=A,y=Q(),N=R("div"),k=R("select"),x=R("option"),x.textContent=T;for(let H=0;H<V.length;H+=1)V[H].c();K=Q(),se=R("button"),B=ke("计算体积"),Z=Q(),le&&le.c(),w=Q(),ae&&ae.c(),j=An(),this.h()},l(H){e=C(H,"HR",{style:!0}),t=J(H),n=C(H,"H4",{style:!0,"data-svelte-h":!0}),Le(n)!=="svelte-10xewq4"&&(n.textContent=r),s=J(H);for(let ce=0;ce<re.length;ce+=1)re[ce].l(H);a=J(H),o=C(H,"HR",{style:!0}),c=J(H),l=C(H,"H4",{style:!0,"data-svelte-h":!0}),Le(l)!=="svelte-vflg5w"&&(l.textContent=u),h=J(H),f=C(H,"DIV",{class:!0});var ne=ie(f);m=C(ne,"LABEL",{class:!0});var X=ie(m);_=C(X,"INPUT",{type:!0}),p=ze(X,`
                启用切面`),X.forEach(D),ne.forEach(D),d=J(H),me&&me.l(H),b=J(H),M=C(H,"HR",{style:!0}),P=J(H),L=C(H,"H4",{style:!0,"data-svelte-h":!0}),Le(L)!=="svelte-5dpzi"&&(L.textContent=A),y=J(H),N=C(H,"DIV",{class:!0});var xe=ie(N);k=C(xe,"SELECT",{});var O=ie(k);x=C(O,"OPTION",{"data-svelte-h":!0}),Le(x)!=="svelte-e12hhe"&&(x.textContent=T);for(let ce=0;ce<V.length;ce+=1)V[ce].l(O);O.forEach(D),xe.forEach(D),K=J(H),se=C(H,"BUTTON",{class:!0,style:!0});var ye=ie(se);B=ze(ye,"计算体积"),ye.forEach(D),Z=J(H),le&&le.l(H),w=J(H),ae&&ae.l(H),j=An(),this.h()},h(){Ce(e,"border-color","var(--border)"),Ce(e,"margin","12px 0"),Ce(n,"font-size","13px"),Ce(n,"margin-bottom","8px"),Ce(o,"border-color","var(--border)"),Ce(o,"margin","12px 0"),Ce(l,"font-size","13px"),Ce(l,"margin-bottom","8px"),F(_,"type","checkbox"),_.checked=v=i[18].enabled,F(m,"class","checkbox-label"),F(f,"class","form-group"),Ce(M,"border-color","var(--border)"),Ce(M,"margin","12px 0"),Ce(L,"font-size","13px"),Ce(L,"margin-bottom","8px"),x.__value="",He(x,x.__value),i[10]===void 0&&si(()=>i[38].call(k)),F(N,"class","form-group"),F(se,"class","btn-primary btn-sm"),se.disabled=ee=!i[10],Ce(se,"width","100%")},m(H,ne){Re(H,e,ne),Re(H,t,ne),Re(H,n,ne),Re(H,s,ne);for(let X=0;X<re.length;X+=1)re[X]&&re[X].m(H,ne);Re(H,a,ne),Re(H,o,ne),Re(H,c,ne),Re(H,l,ne),Re(H,h,ne),Re(H,f,ne),g(f,m),g(m,_),g(m,p),Re(H,d,ne),me&&me.m(H,ne),Re(H,b,ne),Re(H,M,ne),Re(H,P,ne),Re(H,L,ne),Re(H,y,ne),Re(H,N,ne),g(N,k),g(k,x);for(let X=0;X<V.length;X+=1)V[X]&&V[X].m(k,null);Ot(k,i[10],!0),Re(H,K,ne),Re(H,se,ne),g(se,B),Re(H,Z,ne),le&&le.m(H,ne),Re(H,w,ne),ae&&ae.m(H,ne),Re(H,j,ne),Y||(W=[Ge(_,"change",i[36]),Ge(k,"change",i[38]),Ge(se,"click",i[21])],Y=!0)},p(H,ne){if(ne[0]&245760){te=_t(H[16].lithologies||[]);let X;for(X=0;X<te.length;X+=1){const xe=Fl(H,te,X);re[X]?re[X].p(xe,ne):(re[X]=kl(xe),re[X].c(),re[X].m(a.parentNode,a))}for(;X<re.length;X+=1)re[X].d(1);re.length=te.length}if(ne[0]&262144&&v!==(v=H[18].enabled)&&(_.checked=v),H[18].enabled?me?me.p(H,ne):(me=Vl(H),me.c(),me.m(b.parentNode,b)):me&&(me.d(1),me=null),ne[0]&65536){q=_t(H[16].lithologies||[]);let X;for(X=0;X<q.length;X+=1){const xe=Ol(H,q,X);V[X]?V[X].p(xe,ne):(V[X]=Gl(xe),V[X].c(),V[X].m(k,null))}for(;X<V.length;X+=1)V[X].d(1);V.length=q.length}ne[0]&66560&&Ot(k,H[10]),ne[0]&66560&&ee!==(ee=!H[10])&&(se.disabled=ee),H[12]?le?le.p(H,ne):(le=Hl(H),le.c(),le.m(w.parentNode,w)):le&&(le.d(1),le=null),H[11].length>0?ae?ae.p(H,ne):(ae=Wl(H),ae.c(),ae.m(j.parentNode,j)):ae&&(ae.d(1),ae=null)},d(H){H&&(D(e),D(t),D(n),D(s),D(a),D(o),D(c),D(l),D(h),D(f),D(d),D(b),D(M),D(P),D(L),D(y),D(N),D(K),D(se),D(Z),D(w),D(j)),Vt(re,H),me&&me.d(H),Vt(V,H),le&&le.d(H),ae&&ae.d(H),Y=!1,Lt(W)}}}function kl(i){let e,t,n,r,s,a,o,c=i[49]+"",l,u,h,f,m="透明度",_,v,p,d,b;function M(){return i[33](i[49])}function P(...A){return i[34](i[49],...A)}function L(...A){return i[35](i[49],...A)}return{c(){e=R("div"),t=R("label"),n=R("input"),s=Q(),a=R("span"),o=Q(),l=ke(c),u=Q(),h=R("div"),f=R("span"),f.textContent=m,_=Q(),v=R("input"),this.h()},l(A){e=C(A,"DIV",{class:!0});var y=ie(e);t=C(y,"LABEL",{class:!0});var N=ie(t);n=C(N,"INPUT",{type:!0}),s=J(N),a=C(N,"SPAN",{class:!0,style:!0}),ie(a).forEach(D),o=J(N),l=ze(N,c),N.forEach(D),u=J(y),h=C(y,"DIV",{class:!0});var k=ie(h);f=C(k,"SPAN",{style:!0,"data-svelte-h":!0}),Le(f)!=="svelte-11ptxvf"&&(f.textContent=m),_=J(k),v=C(k,"INPUT",{type:!0,min:!0,max:!0,class:!0}),k.forEach(D),y.forEach(D),this.h()},h(){var A,y;F(n,"type","checkbox"),n.checked=r=i[15][i[49]]!==!1,F(a,"class","color-swatch"),Ce(a,"background",((y=(A=i[17])==null?void 0:A.find(P))==null?void 0:y.color)||"#888"),F(t,"class","checkbox-label"),Ce(f,"font-size","10px"),Ce(f,"color","var(--text-muted)"),F(v,"type","range"),v.value=p=i[14][i[49]]??70,F(v,"min","0"),F(v,"max","100"),F(v,"class","svelte-ajbu0x"),F(h,"class","opacity-control svelte-ajbu0x"),F(e,"class","layer-control svelte-ajbu0x")},m(A,y){Re(A,e,y),g(e,t),g(t,n),g(t,s),g(t,a),g(t,o),g(t,l),g(e,u),g(e,h),g(h,f),g(h,_),g(h,v),d||(b=[Ge(n,"change",M),Ge(v,"input",L)],d=!0)},p(A,y){var N,k;i=A,y[0]&98304&&r!==(r=i[15][i[49]]!==!1)&&(n.checked=r),y[0]&196608&&Ce(a,"background",((k=(N=i[17])==null?void 0:N.find(P))==null?void 0:k.color)||"#888"),y[0]&65536&&c!==(c=i[49]+"")&&Qe(l,c),y[0]&81920&&p!==(p=i[14][i[49]]??70)&&(v.value=p)},d(A){A&&D(e),d=!1,Lt(b)}}}function Vl(i){let e,t,n="切面位置",r,s,a,o,c;return{c(){e=R("div"),t=R("label"),t.textContent=n,r=Q(),s=R("input"),this.h()},l(l){e=C(l,"DIV",{class:!0});var u=ie(e);t=C(u,"LABEL",{"data-svelte-h":!0}),Le(t)!=="svelte-1ya7iue"&&(t.textContent=n),r=J(u),s=C(u,"INPUT",{type:!0,min:!0,max:!0}),u.forEach(D),this.h()},h(){F(s,"type","range"),s.value=a=i[18].position[0],F(s,"min","-100"),F(s,"max","100"),F(e,"class","form-group")},m(l,u){Re(l,e,u),g(e,t),g(e,r),g(e,s),o||(c=Ge(s,"input",i[37]),o=!0)},p(l,u){u[0]&262144&&a!==(a=l[18].position[0])&&(s.value=a)},d(l){l&&D(e),o=!1,c()}}}function Gl(i){let e,t=i[46]+"",n,r;return{c(){e=R("option"),n=ke(t),this.h()},l(s){e=C(s,"OPTION",{});var a=ie(e);n=ze(a,t),a.forEach(D),this.h()},h(){e.__value=r=i[46],He(e,e.__value)},m(s,a){Re(s,e,a),g(e,n)},p(s,a){a[0]&65536&&t!==(t=s[46]+"")&&Qe(n,t),a[0]&65536&&r!==(r=s[46])&&(e.__value=r,He(e,e.__value))},d(s){s&&D(e)}}}function Hl(i){let e,t,n=i[12].lithology_name+"",r,s,a,o=i[12].volume.toFixed(1)+"",c,l;return{c(){e=R("div"),t=R("p"),r=ke(n),s=Q(),a=R("p"),c=ke(o),l=ke(" m³"),this.h()},l(u){e=C(u,"DIV",{class:!0});var h=ie(e);t=C(h,"P",{});var f=ie(t);r=ze(f,n),f.forEach(D),s=J(h),a=C(h,"P",{class:!0});var m=ie(a);c=ze(m,o),l=ze(m," m³"),m.forEach(D),h.forEach(D),this.h()},h(){F(a,"class","volume-value svelte-ajbu0x"),F(e,"class","volume-result svelte-ajbu0x")},m(u,h){Re(u,e,h),g(e,t),g(t,r),g(e,s),g(e,a),g(a,c),g(a,l)},p(u,h){h[0]&4096&&n!==(n=u[12].lithology_name+"")&&Qe(r,n),h[0]&4096&&o!==(o=u[12].volume.toFixed(1)+"")&&Qe(c,o)},d(u){u&&D(e)}}}function Wl(i){let e,t,n,r="历史建模",s,a,o=_t(i[11].slice(0,5)),c=[];for(let l=0;l<o.length;l+=1)c[l]=Xl(Nl(i,o,l));return{c(){e=R("hr"),t=Q(),n=R("h4"),n.textContent=r,s=Q();for(let l=0;l<c.length;l+=1)c[l].c();a=An(),this.h()},l(l){e=C(l,"HR",{style:!0}),t=J(l),n=C(l,"H4",{style:!0,"data-svelte-h":!0}),Le(n)!=="svelte-1xvbgi4"&&(n.textContent=r),s=J(l);for(let u=0;u<c.length;u+=1)c[u].l(l);a=An(),this.h()},h(){Ce(e,"border-color","var(--border)"),Ce(e,"margin","12px 0"),Ce(n,"font-size","13px"),Ce(n,"margin-bottom","8px")},m(l,u){Re(l,e,u),Re(l,t,u),Re(l,n,u),Re(l,s,u);for(let h=0;h<c.length;h+=1)c[h]&&c[h].m(l,u);Re(l,a,u)},p(l,u){if(u[0]&1050624){o=_t(l[11].slice(0,5));let h;for(h=0;h<o.length;h+=1){const f=Nl(l,o,h);c[h]?c[h].p(f,u):(c[h]=Xl(f),c[h].c(),c[h].m(a.parentNode,a))}for(;h<c.length;h+=1)c[h].d(1);c.length=o.length}},d(l){l&&(D(e),D(t),D(n),D(s),D(a)),Vt(c,l)}}}function Xl(i){let e,t,n=i[43].status+"",r,s,a,o,c=i[43].variogram_model+"",l,u,h=i[43].grid_nx+"",f,m,_=i[43].grid_ny+"",v,p,d=i[43].grid_nz+"",b,M,P,L;function A(){return i[39](i[43])}return{c(){e=R("div"),t=R("span"),r=ke(n),a=Q(),o=R("span"),l=ke(c),u=Q(),f=ke(h),m=ke("x"),v=ke(_),p=ke("x"),b=ke(d),M=Q(),this.h()},l(y){e=C(y,"DIV",{class:!0});var N=ie(e);t=C(N,"SPAN",{class:!0});var k=ie(t);r=ze(k,n),k.forEach(D),a=J(N),o=C(N,"SPAN",{style:!0});var x=ie(o);l=ze(x,c),u=J(x),f=ze(x,h),m=ze(x,"x"),v=ze(x,_),p=ze(x,"x"),b=ze(x,d),x.forEach(D),M=J(N),N.forEach(D),this.h()},h(){F(t,"class",s="badge badge-"+(i[43].status==="completed"?"success":i[43].status==="failed"?"danger":"warning")),Ce(o,"font-size","11px"),F(e,"class","run-item svelte-ajbu0x")},m(y,N){Re(y,e,N),g(e,t),g(t,r),g(e,a),g(e,o),g(o,l),g(o,u),g(o,f),g(o,m),g(o,v),g(o,p),g(o,b),g(e,M),P||(L=Ge(e,"click",A),P=!0)},p(y,N){i=y,N[0]&2048&&n!==(n=i[43].status+"")&&Qe(r,n),N[0]&2048&&s!==(s="badge badge-"+(i[43].status==="completed"?"success":i[43].status==="failed"?"danger":"warning"))&&F(t,"class",s),N[0]&2048&&c!==(c=i[43].variogram_model+"")&&Qe(l,c),N[0]&2048&&h!==(h=i[43].grid_nx+"")&&Qe(f,h),N[0]&2048&&_!==(_=i[43].grid_ny+"")&&Qe(v,_),N[0]&2048&&d!==(d=i[43].grid_nz+"")&&Qe(b,d)},d(y){y&&D(e),P=!1,L()}}}function N_(i){let e,t,n="三维建模",r,s,a="刷新",o,c,l,u,h;function f(p,d){return p[13].status==="running"?U_:I_}let m=f(i),_=m(i),v=i[16]&&zl(i);return{c(){e=R("div"),t=R("h3"),t.textContent=n,r=Q(),s=R("button"),s.textContent=a,o=Q(),c=R("div"),_.c(),l=Q(),v&&v.c(),this.h()},l(p){e=C(p,"DIV",{class:!0});var d=ie(e);t=C(d,"H3",{"data-svelte-h":!0}),Le(t)!=="svelte-1tzs814"&&(t.textContent=n),r=J(d),s=C(d,"BUTTON",{class:!0,"data-svelte-h":!0}),Le(s)!=="svelte-z4d5z9"&&(s.textContent=a),d.forEach(D),o=J(p),c=C(p,"DIV",{class:!0});var b=ie(c);_.l(b),l=J(b),v&&v.l(b),b.forEach(D),this.h()},h(){F(s,"class","btn-secondary btn-sm"),F(e,"class","panel-header"),F(c,"class","panel-body scrollable")},m(p,d){Re(p,e,d),g(e,t),g(e,r),g(e,s),Re(p,o,d),Re(p,c,d),_.m(c,null),g(c,l),v&&v.m(c,null),u||(h=Ge(s,"click",i[22]),u=!0)},p(p,d){m===(m=f(p))&&_?_.p(p,d):(_.d(1),_=m(p),_&&(_.c(),_.m(c,l))),p[16]?v?v.p(p,d):(v=zl(p),v.c(),v.m(c,null)):v&&(v.d(1),v=null)},i:Ct,o:Ct,d(p){p&&(D(e),D(o),D(c)),_.d(),v&&v.d(),u=!1,h()}}}function O_(i,e,t){let n,r,s,a,o,c,l,u,h;at(i,Si,X=>t(40,n=X)),at(i,Er,X=>t(11,r=X)),at(i,Ma,X=>t(12,s=X)),at(i,cr,X=>t(13,a=X)),at(i,gr,X=>t(14,o=X)),at(i,_r,X=>t(15,c=X)),at(i,js,X=>t(16,l=X)),at(i,lithologyTypes,X=>t(17,u=X)),at(i,vr,X=>t(18,h=X));let f="spherical",m="",_="",v="",p=0,d=1,b=50,M=50,P=25,L=!0,A="";async function y(){if(!n){$e("请先选择项目","warning");return}try{const X={variogram_model:f,range_param:L?null:m?parseFloat(m):null,sill_param:L?null:_?parseFloat(_):null,nugget_param:L?null:v?parseFloat(v):null,aniso_angle:p,aniso_ratio:d,grid_nx:b,grid_ny:M,grid_nz:P},xe=await vt.post(`/projects/${n.id}/modeling/run`,X);mt(cr,a={status:"running",progress:0,runId:xe.id},a),$e("建模任务已启动","info"),N(xe.id)}catch(X){$e(`启动建模失败: ${X.message}`,"error")}}function N(X){const xe=location.protocol==="https:"?"wss:":"ws:",O=new WebSocket(`${xe}//${location.host}/api/ws/${n.id}?run_id=${X}`);O.onmessage=ye=>{const ce=JSON.parse(ye.data);mt(cr,a={status:ce.status,progress:ce.progress,runId:ce.run_id},a),ce.status==="completed"?($e("三维建模完成!","success"),x(X)):ce.status==="failed"&&$e("三维建模失败","error")},O.onerror=()=>{k(X)},O.onclose=()=>{a.status==="running"&&k(X)}}async function k(X){const xe=async()=>{if(a.status==="running")try{const O=await vt.get(`/projects/modeling/runs/${X}`);mt(cr,a={status:O.status,progress:O.progress,runId:O.id},a),O.status==="completed"?($e("三维建模完成!","success"),await x(X)):O.status==="failed"?$e("三维建模失败","error"):setTimeout(xe,2e3)}catch{setTimeout(xe,3e3)}};setTimeout(xe,1e3)}async function x(X){var xe;try{const O=await vt.get(`/projects/modeling/runs/${X}/result`);mt(js,l=O,l),(xe=O.lithologies)==null||xe.forEach(ye=>{c[ye]===void 0&&mt(_r,c[ye]=!0,c),o[ye]===void 0&&mt(gr,o[ye]=.7,o)}),mt(cr,a={status:"completed",progress:100,runId:X},a)}catch(O){$e(`加载模型结果失败: ${O.message}`,"error")}}async function T(){if(!(!a.runId||!A))try{const X=await vt.post(`/projects/modeling/runs/${a.runId}/volume?lithology_name=${encodeURIComponent(A)}`);mt(Ma,s=X,s),$e(`${X.lithology_name} 体积: ${X.volume.toFixed(1)} m³`,"success")}catch(X){$e(`体积计算失败: ${X.message}`,"error")}}async function K(){n&&mt(Er,r=await vt.get(`/projects/${n.id}/modeling/runs`),r)}function se(){f=ti(this),t(0,f)}function B(){L=this.checked,t(9,L)}function ee(){m=ot(this.value),t(1,m)}function Z(){_=ot(this.value),t(2,_)}function w(){v=ot(this.value),t(3,v)}function j(){p=ot(this.value),t(4,p)}function Y(){d=ot(this.value),t(5,d)}function W(){b=ot(this.value),t(6,b)}function te(){M=ot(this.value),t(7,M)}function re(){P=ot(this.value),t(8,P)}const me=X=>{mt(_r,c[X]=c[X]===!1,c),_r.set(c)},q=(X,xe)=>xe.name===X,V=(X,xe)=>{mt(gr,o[X]=xe.target.value/100,o),gr.set(o)},le=()=>mt(vr,h.enabled=!h.enabled,h),ae=X=>{mt(vr,h.position=[parseFloat(X.target.value),0,0],h),vr.set(h)};function H(){A=ti(this),t(10,A)}return[f,m,_,v,p,d,b,M,P,L,A,r,s,a,o,c,l,u,h,y,x,T,K,se,B,ee,Z,w,j,Y,W,te,re,me,q,V,le,ae,H,X=>X.status==="completed"&&x(X.id)]}class F_ extends Cn{constructor(e){super(),Rn(this,e,O_,N_,wn,{},null,[-1,-1])}}function ql(i){var Ue,Ve,Xe;let e,t,n,r,s=i[11][i[4]]+"",a,o,c,l,u,h="最小值",f,m,_=((Ue=i[10].value_min)==null?void 0:Ue.toFixed(2))+"",v,p,d,b,M="最大值",P,L,A=((Ve=i[10].value_max)==null?void 0:Ve.toFixed(2))+"",y,N,k,x,T="均值",K,se,B=((Xe=i[10].value_mean)==null?void 0:Xe.toFixed(2))+"",ee,Z,w,j="渲染设置",Y,W,te,re="渲染模式",me,q,V,le="彩色体素",ae,H="等值面",ne,X,xe,O,ye="颜色映射范围",ce,pe,de,oe,G,S,E,$,ge,fe,ve,Pe=i[1].toFixed(1)+"",Te,Ae,Oe,Fe=((i[1]+i[2])/2).toFixed(1)+"",we,je,Ze,Ye=i[2].toFixed(1)+"",Be,Ne,Ke,z=i[3]==="isosurface"&&jl(i);return{c(){e=R("hr"),t=Q(),n=R("h4"),r=ke("属性: "),a=ke(s),o=Q(),c=R("div"),l=R("div"),u=R("span"),u.textContent=h,f=Q(),m=R("span"),v=ke(_),p=Q(),d=R("div"),b=R("span"),b.textContent=M,P=Q(),L=R("span"),y=ke(A),N=Q(),k=R("div"),x=R("span"),x.textContent=T,K=Q(),se=R("span"),ee=ke(B),Z=Q(),w=R("h4"),w.textContent=j,Y=Q(),W=R("div"),te=R("label"),te.textContent=re,me=Q(),q=R("select"),V=R("option"),V.textContent=le,ae=R("option"),ae.textContent=H,ne=Q(),z&&z.c(),X=Q(),xe=R("div"),O=R("label"),O.textContent=ye,ce=Q(),pe=R("div"),de=R("input"),oe=Q(),G=R("input"),S=Q(),E=R("div"),$=R("div"),ge=Q(),fe=R("div"),ve=R("span"),Te=ke(Pe),Ae=Q(),Oe=R("span"),we=ke(Fe),je=Q(),Ze=R("span"),Be=ke(Ye),this.h()},l(I){e=C(I,"HR",{style:!0}),t=J(I),n=C(I,"H4",{style:!0});var Ee=ie(n);r=ze(Ee,"属性: "),a=ze(Ee,s),Ee.forEach(D),o=J(I),c=C(I,"DIV",{class:!0});var _e=ie(c);l=C(_e,"DIV",{class:!0});var Ie=ie(l);u=C(Ie,"SPAN",{class:!0,"data-svelte-h":!0}),Le(u)!=="svelte-9zqffl"&&(u.textContent=h),f=J(Ie),m=C(Ie,"SPAN",{class:!0});var De=ie(m);v=ze(De,_),De.forEach(D),Ie.forEach(D),p=J(_e),d=C(_e,"DIV",{class:!0});var et=ie(d);b=C(et,"SPAN",{class:!0,"data-svelte-h":!0}),Le(b)!=="svelte-pto1ax"&&(b.textContent=M),P=J(et),L=C(et,"SPAN",{class:!0});var st=ie(L);y=ze(st,A),st.forEach(D),et.forEach(D),N=J(_e),k=C(_e,"DIV",{class:!0});var gt=ie(k);x=C(gt,"SPAN",{class:!0,"data-svelte-h":!0}),Le(x)!=="svelte-os332j"&&(x.textContent=T),K=J(gt),se=C(gt,"SPAN",{class:!0});var bt=ie(se);ee=ze(bt,B),bt.forEach(D),gt.forEach(D),_e.forEach(D),Z=J(I),w=C(I,"H4",{style:!0,"data-svelte-h":!0}),Le(w)!=="svelte-1ld9l9j"&&(w.textContent=j),Y=J(I),W=C(I,"DIV",{class:!0});var rt=ie(W);te=C(rt,"LABEL",{"data-svelte-h":!0}),Le(te)!=="svelte-cq5b4l"&&(te.textContent=re),me=J(rt),q=C(rt,"SELECT",{});var xt=ie(q);V=C(xt,"OPTION",{"data-svelte-h":!0}),Le(V)!=="svelte-127lpa0"&&(V.textContent=le),ae=C(xt,"OPTION",{"data-svelte-h":!0}),Le(ae)!=="svelte-q3a2m9"&&(ae.textContent=H),xt.forEach(D),rt.forEach(D),ne=J(I),z&&z.l(I),X=J(I),xe=C(I,"DIV",{class:!0});var St=ie(xe);O=C(St,"LABEL",{"data-svelte-h":!0}),Le(O)!=="svelte-1lqds2v"&&(O.textContent=ye),ce=J(St),pe=C(St,"DIV",{class:!0});var cn=ie(pe);de=C(cn,"INPUT",{type:!0,step:!0}),oe=J(cn),G=C(cn,"INPUT",{type:!0,step:!0}),cn.forEach(D),St.forEach(D),S=J(I),E=C(I,"DIV",{class:!0});var Pn=ie(E);$=C(Pn,"DIV",{class:!0,style:!0}),ie($).forEach(D),ge=J(Pn),fe=C(Pn,"DIV",{class:!0});var Zt=ie(fe);ve=C(Zt,"SPAN",{});var un=ie(ve);Te=ze(un,Pe),un.forEach(D),Ae=J(Zt),Oe=C(Zt,"SPAN",{});var Sn=ie(Oe);we=ze(Sn,Fe),Sn.forEach(D),je=J(Zt),Ze=C(Zt,"SPAN",{});var hn=ie(Ze);Be=ze(hn,Ye),hn.forEach(D),Zt.forEach(D),Pn.forEach(D),this.h()},h(){Ce(e,"border-color","var(--border)"),Ce(e,"margin","12px 0"),Ce(n,"font-size","13px"),Ce(n,"margin-bottom","8px"),F(u,"class","stat-label svelte-8lfmmm"),F(m,"class","stat-value svelte-8lfmmm"),F(l,"class","stat-item svelte-8lfmmm"),F(b,"class","stat-label svelte-8lfmmm"),F(L,"class","stat-value svelte-8lfmmm"),F(d,"class","stat-item svelte-8lfmmm"),F(x,"class","stat-label svelte-8lfmmm"),F(se,"class","stat-value svelte-8lfmmm"),F(k,"class","stat-item svelte-8lfmmm"),F(c,"class","stats-grid svelte-8lfmmm"),Ce(w,"font-size","13px"),Ce(w,"margin","12px 0 8px"),V.__value="voxel",He(V,V.__value),ae.__value="isosurface",He(ae,ae.__value),i[3]===void 0&&si(()=>i[19].call(q)),F(W,"class","form-group"),F(de,"type","number"),F(de,"step","0.1"),F(G,"type","number"),F(G,"step","0.1"),F(pe,"class","form-row"),F(xe,"class","form-group"),F($,"class","legend-bar svelte-8lfmmm"),Ce($,"background","linear-gradient(to right, #0000ff, #00ff00, #ffff00, #ff0000)"),F(fe,"class","legend-labels svelte-8lfmmm"),F(E,"class","color-legend svelte-8lfmmm")},m(I,Ee){Re(I,e,Ee),Re(I,t,Ee),Re(I,n,Ee),g(n,r),g(n,a),Re(I,o,Ee),Re(I,c,Ee),g(c,l),g(l,u),g(l,f),g(l,m),g(m,v),g(c,p),g(c,d),g(d,b),g(d,P),g(d,L),g(L,y),g(c,N),g(c,k),g(k,x),g(k,K),g(k,se),g(se,ee),Re(I,Z,Ee),Re(I,w,Ee),Re(I,Y,Ee),Re(I,W,Ee),g(W,te),g(W,me),g(W,q),g(q,V),g(q,ae),Ot(q,i[3],!0),Re(I,ne,Ee),z&&z.m(I,Ee),Re(I,X,Ee),Re(I,xe,Ee),g(xe,O),g(xe,ce),g(xe,pe),g(pe,de),He(de,i[1]),g(pe,oe),g(pe,G),He(G,i[2]),Re(I,S,Ee),Re(I,E,Ee),g(E,$),g(E,ge),g(E,fe),g(fe,ve),g(ve,Te),g(fe,Ae),g(fe,Oe),g(Oe,we),g(fe,je),g(fe,Ze),g(Ze,Be),Ne||(Ke=[Ge(q,"change",i[19]),Ge(de,"input",i[21]),Ge(G,"input",i[22])],Ne=!0)},p(I,Ee){var _e,Ie,De;Ee&16&&s!==(s=I[11][I[4]]+"")&&Qe(a,s),Ee&1024&&_!==(_=((_e=I[10].value_min)==null?void 0:_e.toFixed(2))+"")&&Qe(v,_),Ee&1024&&A!==(A=((Ie=I[10].value_max)==null?void 0:Ie.toFixed(2))+"")&&Qe(y,A),Ee&1024&&B!==(B=((De=I[10].value_mean)==null?void 0:De.toFixed(2))+"")&&Qe(ee,B),Ee&8&&Ot(q,I[3]),I[3]==="isosurface"?z?z.p(I,Ee):(z=jl(I),z.c(),z.m(X.parentNode,X)):z&&(z.d(1),z=null),Ee&2&&ot(de.value)!==I[1]&&He(de,I[1]),Ee&4&&ot(G.value)!==I[2]&&He(G,I[2]),Ee&2&&Pe!==(Pe=I[1].toFixed(1)+"")&&Qe(Te,Pe),Ee&6&&Fe!==(Fe=((I[1]+I[2])/2).toFixed(1)+"")&&Qe(we,Fe),Ee&4&&Ye!==(Ye=I[2].toFixed(1)+"")&&Qe(Be,Ye)},d(I){I&&(D(e),D(t),D(n),D(o),D(c),D(Z),D(w),D(Y),D(W),D(ne),D(X),D(xe),D(S),D(E)),z&&z.d(I),Ne=!1,Lt(Ke)}}}function jl(i){let e,t,n="等值面阈值",r,s,a,o,c=i[0].toFixed(1)+"",l,u,h;return{c(){e=R("div"),t=R("label"),t.textContent=n,r=Q(),s=R("input"),a=Q(),o=R("span"),l=ke(c),this.h()},l(f){e=C(f,"DIV",{class:!0});var m=ie(e);t=C(m,"LABEL",{"data-svelte-h":!0}),Le(t)!=="svelte-hv2zuh"&&(t.textContent=n),r=J(m),s=C(m,"INPUT",{type:!0,min:!0,max:!0,step:!0}),a=J(m),o=C(m,"SPAN",{style:!0});var _=ie(o);l=ze(_,c),_.forEach(D),m.forEach(D),this.h()},h(){F(s,"type","range"),F(s,"min",i[1]),F(s,"max",i[2]),F(s,"step","0.1"),Ce(o,"font-size","11px"),F(e,"class","form-group")},m(f,m){Re(f,e,m),g(e,t),g(e,r),g(e,s),He(s,i[0]),g(e,a),g(e,o),g(o,l),u||(h=[Ge(s,"change",i[20]),Ge(s,"input",i[20])],u=!0)},p(f,m){m&2&&F(s,"min",f[1]),m&4&&F(s,"max",f[2]),m&1&&He(s,f[0]),m&1&&c!==(c=f[0].toFixed(1)+"")&&Qe(l,c)},d(f){f&&D(e),u=!1,Lt(h)}}}function B_(i){let e,t="<h3>属性场建模</h3>",n,r,s,a,o="参数类型",c,l,u,h="标贯N值",f,m="含水量",_,v="压缩模量",p,d,b,M="变异函数模型",P,L,A,y="球状模型",N,k="指数模型",x,T="高斯模型",K,se,B,ee,Z="NX",w,j,Y,W,te,re="NY",me,q,V,le,ae,H="NZ",ne,X,xe,O,ye=i[9]?"插值计算中...":"开始插值",ce,pe,de,oe,G=i[10]&&ql(i);return{c(){e=R("div"),e.innerHTML=t,n=Q(),r=R("div"),s=R("div"),a=R("label"),a.textContent=o,c=Q(),l=R("select"),u=R("option"),u.textContent=h,f=R("option"),f.textContent=m,_=R("option"),_.textContent=v,p=Q(),d=R("div"),b=R("label"),b.textContent=M,P=Q(),L=R("select"),A=R("option"),A.textContent=y,N=R("option"),N.textContent=k,x=R("option"),x.textContent=T,K=Q(),se=R("div"),B=R("div"),ee=R("label"),ee.textContent=Z,w=Q(),j=R("input"),Y=Q(),W=R("div"),te=R("label"),te.textContent=re,me=Q(),q=R("input"),V=Q(),le=R("div"),ae=R("label"),ae.textContent=H,ne=Q(),X=R("input"),xe=Q(),O=R("button"),ce=ke(ye),pe=Q(),G&&G.c(),this.h()},l(S){e=C(S,"DIV",{class:!0,"data-svelte-h":!0}),Le(e)!=="svelte-s1qbq0"&&(e.innerHTML=t),n=J(S),r=C(S,"DIV",{class:!0});var E=ie(r);s=C(E,"DIV",{class:!0});var $=ie(s);a=C($,"LABEL",{"data-svelte-h":!0}),Le(a)!=="svelte-vxe5jw"&&(a.textContent=o),c=J($),l=C($,"SELECT",{});var ge=ie(l);u=C(ge,"OPTION",{"data-svelte-h":!0}),Le(u)!=="svelte-1ekkfg"&&(u.textContent=h),f=C(ge,"OPTION",{"data-svelte-h":!0}),Le(f)!=="svelte-vhtqdz"&&(f.textContent=m),_=C(ge,"OPTION",{"data-svelte-h":!0}),Le(_)!=="svelte-1m1gv94"&&(_.textContent=v),ge.forEach(D),$.forEach(D),p=J(E),d=C(E,"DIV",{class:!0});var fe=ie(d);b=C(fe,"LABEL",{"data-svelte-h":!0}),Le(b)!=="svelte-1jgf9ft"&&(b.textContent=M),P=J(fe),L=C(fe,"SELECT",{});var ve=ie(L);A=C(ve,"OPTION",{"data-svelte-h":!0}),Le(A)!=="svelte-17ym7v6"&&(A.textContent=y),N=C(ve,"OPTION",{"data-svelte-h":!0}),Le(N)!=="svelte-bzk8zo"&&(N.textContent=k),x=C(ve,"OPTION",{"data-svelte-h":!0}),Le(x)!=="svelte-1iqrdsw"&&(x.textContent=T),ve.forEach(D),fe.forEach(D),K=J(E),se=C(E,"DIV",{class:!0});var Pe=ie(se);B=C(Pe,"DIV",{class:!0});var Te=ie(B);ee=C(Te,"LABEL",{"data-svelte-h":!0}),Le(ee)!=="svelte-kuum7m"&&(ee.textContent=Z),w=J(Te),j=C(Te,"INPUT",{type:!0,min:!0,max:!0}),Te.forEach(D),Y=J(Pe),W=C(Pe,"DIV",{class:!0});var Ae=ie(W);te=C(Ae,"LABEL",{"data-svelte-h":!0}),Le(te)!=="svelte-1kjsuy3"&&(te.textContent=re),me=J(Ae),q=C(Ae,"INPUT",{type:!0,min:!0,max:!0}),Ae.forEach(D),V=J(Pe),le=C(Pe,"DIV",{class:!0});var Oe=ie(le);ae=C(Oe,"LABEL",{"data-svelte-h":!0}),Le(ae)!=="svelte-1vblzhc"&&(ae.textContent=H),ne=J(Oe),X=C(Oe,"INPUT",{type:!0,min:!0,max:!0}),Oe.forEach(D),Pe.forEach(D),xe=J(E),O=C(E,"BUTTON",{class:!0,style:!0});var Fe=ie(O);ce=ze(Fe,ye),Fe.forEach(D),pe=J(E),G&&G.l(E),E.forEach(D),this.h()},h(){F(e,"class","panel-header"),u.__value="spt_n",He(u,u.__value),f.__value="water_content",He(f,f.__value),_.__value="compression_modulus",He(_,_.__value),i[4]===void 0&&si(()=>i[14].call(l)),F(s,"class","form-group"),A.__value="spherical",He(A,A.__value),N.__value="exponential",He(N,N.__value),x.__value="gaussian",He(x,x.__value),i[5]===void 0&&si(()=>i[15].call(L)),F(d,"class","form-group"),F(j,"type","number"),F(j,"min","5"),F(j,"max","100"),F(B,"class","form-group"),F(q,"type","number"),F(q,"min","5"),F(q,"max","100"),F(W,"class","form-group"),F(X,"type","number"),F(X,"min","5"),F(X,"max","50"),F(le,"class","form-group"),F(se,"class","form-row"),F(O,"class","btn-primary"),O.disabled=i[9],Ce(O,"width","100%"),F(r,"class","panel-body scrollable")},m(S,E){Re(S,e,E),Re(S,n,E),Re(S,r,E),g(r,s),g(s,a),g(s,c),g(s,l),g(l,u),g(l,f),g(l,_),Ot(l,i[4],!0),g(r,p),g(r,d),g(d,b),g(d,P),g(d,L),g(L,A),g(L,N),g(L,x),Ot(L,i[5],!0),g(r,K),g(r,se),g(se,B),g(B,ee),g(B,w),g(B,j),He(j,i[6]),g(se,Y),g(se,W),g(W,te),g(W,me),g(W,q),He(q,i[7]),g(se,V),g(se,le),g(le,ae),g(le,ne),g(le,X),He(X,i[8]),g(r,xe),g(r,O),g(O,ce),g(r,pe),G&&G.m(r,null),de||(oe=[Ge(l,"change",i[14]),Ge(L,"change",i[15]),Ge(j,"input",i[16]),Ge(q,"input",i[17]),Ge(X,"input",i[18]),Ge(O,"click",i[12])],de=!0)},p(S,[E]){E&16&&Ot(l,S[4]),E&32&&Ot(L,S[5]),E&64&&ot(j.value)!==S[6]&&He(j,S[6]),E&128&&ot(q.value)!==S[7]&&He(q,S[7]),E&256&&ot(X.value)!==S[8]&&He(X,S[8]),E&512&&ye!==(ye=S[9]?"插值计算中...":"开始插值")&&Qe(ce,ye),E&512&&(O.disabled=S[9]),S[10]?G?G.p(S,E):(G=ql(S),G.c(),G.m(r,null)):G&&(G.d(1),G=null)},i:Ct,o:Ct,d(S){S&&(D(e),D(n),D(r)),G&&G.d(),de=!1,Lt(oe)}}}function z_(i,e,t){let n,r,s;at(i,Ys,T=>t(10,n=T)),at(i,Si,T=>t(23,r=T)),at(i,Ks,T=>t(13,s=T));let a="spt_n",o="spherical",c=50,l=50,u=25,h=0,f=0,m=100,_="voxel",v=!1;const p={spt_n:"标贯N值",water_content:"含水量",compression_modulus:"压缩模量"};async function d(){if(!r){$e("请先选择项目","warning");return}t(9,v=!0);try{const T=await vt.post(`/projects/${r.id}/attributes/interpolate?attribute=${a}&grid_nx=${c}&grid_ny=${l}&grid_nz=${u}&variogram_model=${o}`);mt(Ys,n=T,n),T.value_min!==void 0&&(t(1,f=T.value_min),t(2,m=T.value_max),t(0,h=(T.value_min+T.value_max)/2)),$e(`属性场插值完成: ${p[a]}`,"success")}catch(T){$e(`插值失败: ${T.message}`,"error")}finally{t(9,v=!1)}}function b(){a=ti(this),t(4,a)}function M(){o=ti(this),t(5,o)}function P(){c=ot(this.value),t(6,c)}function L(){l=ot(this.value),t(7,l)}function A(){u=ot(this.value),t(8,u)}function y(){_=ti(this),t(3,_)}function N(){h=ot(this.value),t(0,h)}function k(){f=ot(this.value),t(1,f)}function x(){m=ot(this.value),t(2,m)}return i.$$.update=()=>{i.$$.dirty&8207&&mt(Ks,s={...s,mode:_,isosurfaceValue:h,colorMin:f,colorMax:m},s)},[h,f,m,_,a,o,c,l,u,v,n,p,d,s,b,M,P,L,A,y,N,k,x]}class k_ extends Cn{constructor(e){super(),Rn(this,e,z_,B_,wn,{})}}function Yl(i,e,t){const n=i.slice();return n[12]=e[t],n}function Kl(i,e,t){const n=i.slice();return n[15]=e[t],n}function Zl(i){let e,t=i[15].variogram_model+"",n,r,s=i[15].grid_nx+"",a,o,c=i[15].grid_ny+"",l,u,h=i[15].grid_nz+"",f,m,_=i[15].status+"",v,p,d;return{c(){e=R("option"),n=ke(t),r=Q(),a=ke(s),o=ke("x"),l=ke(c),u=ke("x"),f=ke(h),m=ke(" ("),v=ke(_),p=ke(")"),this.h()},l(b){e=C(b,"OPTION",{});var M=ie(e);n=ze(M,t),r=J(M),a=ze(M,s),o=ze(M,"x"),l=ze(M,c),u=ze(M,"x"),f=ze(M,h),m=ze(M," ("),v=ze(M,_),p=ze(M,")"),M.forEach(D),this.h()},h(){e.__value=d=i[15].id,He(e,e.__value)},m(b,M){Re(b,e,M),g(e,n),g(e,r),g(e,a),g(e,o),g(e,l),g(e,u),g(e,f),g(e,m),g(e,v),g(e,p)},p(b,M){M&8&&t!==(t=b[15].variogram_model+"")&&Qe(n,t),M&8&&s!==(s=b[15].grid_nx+"")&&Qe(a,s),M&8&&c!==(c=b[15].grid_ny+"")&&Qe(l,c),M&8&&h!==(h=b[15].grid_nz+"")&&Qe(f,h),M&8&&_!==(_=b[15].status+"")&&Qe(v,_),M&8&&d!==(d=b[15].id)&&(e.__value=d,He(e,e.__value))},d(b){b&&D(e)}}}function $l(i){let e,t=i[12].name+"",n,r;return{c(){e=R("option"),n=ke(t),this.h()},l(s){e=C(s,"OPTION",{});var a=ie(e);n=ze(a,t),a.forEach(D),this.h()},h(){e.__value=r=i[12].id,He(e,e.__value)},m(s,a){Re(s,e,a),g(e,n)},p(s,a){a&16&&t!==(t=s[12].name+"")&&Qe(n,t),a&16&&r!==(r=s[12].id)&&(e.__value=r,He(e,e.__value))},d(s){s&&D(e)}}}function V_(i){let e,t="<h3>成果导出</h3>",n,r,s,a,o="三维模型",c,l,u,h="选择建模结果",f,m,_,v="选择建模结果",p,d,b,M,P,L,A,y="glTF格式可在Blender、ParaView等软件中打开",N,k,x,T,K,se="剖面图",B,ee,Z,w="选择剖面",j,Y,W,te="选择剖面",re,me,q,V,le,ae,H,ne,X,xe,O,ye,ce,pe,de="数据统计",oe,G,S,E,$,ge,fe="包含各层厚度统计、面积、体积等",ve,Pe,Te,Ae,Oe,Fe="建模报告",we,je,Ze,Ye,Be,Ne,Ke="包含半变异函数拟合结果、插值参数、剖面图缩略",z,Ue,Ve=_t(i[3].filter(Jl)),Xe=[];for(let _e=0;_e<Ve.length;_e+=1)Xe[_e]=Zl(Kl(i,Ve,_e));let I=_t(i[4]),Ee=[];for(let _e=0;_e<I.length;_e+=1)Ee[_e]=$l(Yl(i,I,_e));return{c(){e=R("div"),e.innerHTML=t,n=Q(),r=R("div"),s=R("div"),a=R("h4"),a.textContent=o,c=Q(),l=R("div"),u=R("label"),u.textContent=h,f=Q(),m=R("select"),_=R("option"),_.textContent=v;for(let _e=0;_e<Xe.length;_e+=1)Xe[_e].c();p=Q(),d=R("div"),b=R("button"),M=ke("导出 glTF 模型"),L=Q(),A=R("p"),A.textContent=y,N=Q(),k=R("hr"),x=Q(),T=R("div"),K=R("h4"),K.textContent=se,B=Q(),ee=R("div"),Z=R("label"),Z.textContent=w,j=Q(),Y=R("select"),W=R("option"),W.textContent=te;for(let _e=0;_e<Ee.length;_e+=1)Ee[_e].c();re=Q(),me=R("div"),q=R("button"),V=ke("导出 PNG"),ae=Q(),H=R("button"),ne=ke("导出 SVG"),xe=Q(),O=R("hr"),ye=Q(),ce=R("div"),pe=R("h4"),pe.textContent=de,oe=Q(),G=R("button"),S=ke("导出地层数据统计表 (Excel)"),$=Q(),ge=R("p"),ge.textContent=fe,ve=Q(),Pe=R("hr"),Te=Q(),Ae=R("div"),Oe=R("h4"),Oe.textContent=Fe,we=Q(),je=R("button"),Ze=ke("导出建模参数报告 (PDF)"),Be=Q(),Ne=R("p"),Ne.textContent=Ke,this.h()},l(_e){e=C(_e,"DIV",{class:!0,"data-svelte-h":!0}),Le(e)!=="svelte-16wx9di"&&(e.innerHTML=t),n=J(_e),r=C(_e,"DIV",{class:!0});var Ie=ie(r);s=C(Ie,"DIV",{class:!0});var De=ie(s);a=C(De,"H4",{style:!0,"data-svelte-h":!0}),Le(a)!=="svelte-f1tw8s"&&(a.textContent=o),c=J(De),l=C(De,"DIV",{class:!0});var et=ie(l);u=C(et,"LABEL",{"data-svelte-h":!0}),Le(u)!=="svelte-rq7xu0"&&(u.textContent=h),f=J(et),m=C(et,"SELECT",{});var st=ie(m);_=C(st,"OPTION",{"data-svelte-h":!0}),Le(_)!=="svelte-ma6l8e"&&(_.textContent=v);for(let Ln=0;Ln<Xe.length;Ln+=1)Xe[Ln].l(st);st.forEach(D),et.forEach(D),p=J(De),d=C(De,"DIV",{class:!0});var gt=ie(d);b=C(gt,"BUTTON",{class:!0});var bt=ie(b);M=ze(bt,"导出 glTF 模型"),bt.forEach(D),gt.forEach(D),L=J(De),A=C(De,"P",{style:!0,"data-svelte-h":!0}),Le(A)!=="svelte-elxrxh"&&(A.textContent=y),De.forEach(D),N=J(Ie),k=C(Ie,"HR",{style:!0}),x=J(Ie),T=C(Ie,"DIV",{class:!0});var rt=ie(T);K=C(rt,"H4",{style:!0,"data-svelte-h":!0}),Le(K)!=="svelte-l0uqjv"&&(K.textContent=se),B=J(rt),ee=C(rt,"DIV",{class:!0});var xt=ie(ee);Z=C(xt,"LABEL",{"data-svelte-h":!0}),Le(Z)!=="svelte-1uj1nrm"&&(Z.textContent=w),j=J(xt),Y=C(xt,"SELECT",{});var St=ie(Y);W=C(St,"OPTION",{"data-svelte-h":!0}),Le(W)!=="svelte-ij5m9g"&&(W.textContent=te);for(let Ln=0;Ln<Ee.length;Ln+=1)Ee[Ln].l(St);St.forEach(D),xt.forEach(D),re=J(rt),me=C(rt,"DIV",{class:!0});var cn=ie(me);q=C(cn,"BUTTON",{class:!0});var Pn=ie(q);V=ze(Pn,"导出 PNG"),Pn.forEach(D),ae=J(cn),H=C(cn,"BUTTON",{class:!0});var Zt=ie(H);ne=ze(Zt,"导出 SVG"),Zt.forEach(D),cn.forEach(D),rt.forEach(D),xe=J(Ie),O=C(Ie,"HR",{style:!0}),ye=J(Ie),ce=C(Ie,"DIV",{class:!0});var un=ie(ce);pe=C(un,"H4",{style:!0,"data-svelte-h":!0}),Le(pe)!=="svelte-nufmjz"&&(pe.textContent=de),oe=J(un),G=C(un,"BUTTON",{class:!0,style:!0});var Sn=ie(G);S=ze(Sn,"导出地层数据统计表 (Excel)"),Sn.forEach(D),$=J(un),ge=C(un,"P",{style:!0,"data-svelte-h":!0}),Le(ge)!=="svelte-soh8v8"&&(ge.textContent=fe),un.forEach(D),ve=J(Ie),Pe=C(Ie,"HR",{style:!0}),Te=J(Ie),Ae=C(Ie,"DIV",{class:!0});var hn=ie(Ae);Oe=C(hn,"H4",{style:!0,"data-svelte-h":!0}),Le(Oe)!=="svelte-16vzmgj"&&(Oe.textContent=Fe),we=J(hn),je=C(hn,"BUTTON",{class:!0,style:!0});var or=ie(je);Ze=ze(or,"导出建模参数报告 (PDF)"),or.forEach(D),Be=J(hn),Ne=C(hn,"P",{style:!0,"data-svelte-h":!0}),Le(Ne)!=="svelte-1mnkg1"&&(Ne.textContent=Ke),hn.forEach(D),Ie.forEach(D),this.h()},h(){F(e,"class","panel-header"),Ce(a,"font-size","13px"),Ce(a,"margin-bottom","8px"),_.__value="",He(_,_.__value),i[0]===void 0&&si(()=>i[10].call(m)),F(l,"class","form-group"),F(b,"class","btn-primary svelte-xy1nc2"),b.disabled=P=!i[0],F(d,"class","export-buttons svelte-xy1nc2"),Ce(A,"font-size","11px"),Ce(A,"color","var(--text-muted)"),Ce(A,"margin-top","4px"),F(s,"class","export-section svelte-xy1nc2"),Ce(k,"border-color","var(--border)"),Ce(k,"margin","16px 0"),Ce(K,"font-size","13px"),Ce(K,"margin-bottom","8px"),W.__value="",He(W,W.__value),i[1]===void 0&&si(()=>i[11].call(Y)),F(ee,"class","form-group"),F(q,"class","btn-secondary svelte-xy1nc2"),q.disabled=le=!i[1],F(H,"class","btn-secondary svelte-xy1nc2"),H.disabled=X=!i[1],F(me,"class","export-buttons svelte-xy1nc2"),F(T,"class","export-section svelte-xy1nc2"),Ce(O,"border-color","var(--border)"),Ce(O,"margin","16px 0"),Ce(pe,"font-size","13px"),Ce(pe,"margin-bottom","8px"),F(G,"class","btn-primary"),G.disabled=E=!i[2],Ce(G,"width","100%"),Ce(ge,"font-size","11px"),Ce(ge,"color","var(--text-muted)"),Ce(ge,"margin-top","4px"),F(ce,"class","export-section svelte-xy1nc2"),Ce(Pe,"border-color","var(--border)"),Ce(Pe,"margin","16px 0"),Ce(Oe,"font-size","13px"),Ce(Oe,"margin-bottom","8px"),F(je,"class","btn-primary"),je.disabled=Ye=!i[0],Ce(je,"width","100%"),Ce(Ne,"font-size","11px"),Ce(Ne,"color","var(--text-muted)"),Ce(Ne,"margin-top","4px"),F(Ae,"class","export-section svelte-xy1nc2"),F(r,"class","panel-body scrollable")},m(_e,Ie){Re(_e,e,Ie),Re(_e,n,Ie),Re(_e,r,Ie),g(r,s),g(s,a),g(s,c),g(s,l),g(l,u),g(l,f),g(l,m),g(m,_);for(let De=0;De<Xe.length;De+=1)Xe[De]&&Xe[De].m(m,null);Ot(m,i[0],!0),g(s,p),g(s,d),g(d,b),g(b,M),g(s,L),g(s,A),g(r,N),g(r,k),g(r,x),g(r,T),g(T,K),g(T,B),g(T,ee),g(ee,Z),g(ee,j),g(ee,Y),g(Y,W);for(let De=0;De<Ee.length;De+=1)Ee[De]&&Ee[De].m(Y,null);Ot(Y,i[1],!0),g(T,re),g(T,me),g(me,q),g(q,V),g(me,ae),g(me,H),g(H,ne),g(r,xe),g(r,O),g(r,ye),g(r,ce),g(ce,pe),g(ce,oe),g(ce,G),g(G,S),g(ce,$),g(ce,ge),g(r,ve),g(r,Pe),g(r,Te),g(r,Ae),g(Ae,Oe),g(Ae,we),g(Ae,je),g(je,Ze),g(Ae,Be),g(Ae,Ne),z||(Ue=[Ge(m,"change",i[10]),Ge(b,"click",i[5]),Ge(Y,"change",i[11]),Ge(q,"click",i[6]),Ge(H,"click",i[7]),Ge(G,"click",i[8]),Ge(je,"click",i[9])],z=!0)},p(_e,[Ie]){if(Ie&8){Ve=_t(_e[3].filter(Jl));let De;for(De=0;De<Ve.length;De+=1){const et=Kl(_e,Ve,De);Xe[De]?Xe[De].p(et,Ie):(Xe[De]=Zl(et),Xe[De].c(),Xe[De].m(m,null))}for(;De<Xe.length;De+=1)Xe[De].d(1);Xe.length=Ve.length}if(Ie&9&&Ot(m,_e[0]),Ie&9&&P!==(P=!_e[0])&&(b.disabled=P),Ie&16){I=_t(_e[4]);let De;for(De=0;De<I.length;De+=1){const et=Yl(_e,I,De);Ee[De]?Ee[De].p(et,Ie):(Ee[De]=$l(et),Ee[De].c(),Ee[De].m(Y,null))}for(;De<Ee.length;De+=1)Ee[De].d(1);Ee.length=I.length}Ie&18&&Ot(Y,_e[1]),Ie&18&&le!==(le=!_e[1])&&(q.disabled=le),Ie&18&&X!==(X=!_e[1])&&(H.disabled=X),Ie&4&&E!==(E=!_e[2])&&(G.disabled=E),Ie&9&&Ye!==(Ye=!_e[0])&&(je.disabled=Ye)},i:Ct,o:Ct,d(_e){_e&&(D(e),D(n),D(r)),Vt(Xe,_e),Vt(Ee,_e),z=!1,Lt(Ue)}}}const Jl=i=>i.status==="completed";function G_(i,e,t){let n,r,s;at(i,Si,v=>t(2,n=v)),at(i,Er,v=>t(3,r=v)),at(i,xr,v=>t(4,s=v));let a="",o="";async function c(){if(!a){$e("请选择建模结果","warning");return}try{const p=await(await vt.exportGltf(a)).blob(),d=URL.createObjectURL(p),b=document.createElement("a");b.href=d,b.download=`model_${a}.glb`,b.click(),URL.revokeObjectURL(d),$e("glTF模型已导出","success")}catch(v){$e(`导出glTF失败: ${v.message}`,"error")}}async function l(){if(!o){$e("请选择剖面","warning");return}try{const p=await(await vt.exportProfilePng(o)).blob(),d=URL.createObjectURL(p),b=document.createElement("a");b.href=d,b.download=`profile_${o}.png`,b.click(),URL.revokeObjectURL(d),$e("剖面PNG已导出","success")}catch(v){$e(`导出PNG失败: ${v.message}`,"error")}}async function u(){if(!o){$e("请选择剖面","warning");return}try{const p=await(await vt.exportProfileSvg(o)).blob(),d=URL.createObjectURL(p),b=document.createElement("a");b.href=d,b.download=`profile_${o}.svg`,b.click(),URL.revokeObjectURL(d),$e("剖面SVG已导出","success")}catch(v){$e(`导出SVG失败: ${v.message}`,"error")}}async function h(){if(!n){$e("请先选择项目","warning");return}try{const p=await(await vt.exportStatsExcel(n.id)).blob(),d=URL.createObjectURL(p),b=document.createElement("a");b.href=d,b.download=`stats_${n.id}.xlsx`,b.click(),URL.revokeObjectURL(d),$e("统计表已导出","success")}catch(v){$e(`导出Excel失败: ${v.message}`,"error")}}async function f(){if(!a){$e("请选择建模结果","warning");return}try{const p=await(await vt.exportReportPdf(a)).blob(),d=URL.createObjectURL(p),b=document.createElement("a");b.href=d,b.download=`report_${a}.pdf`,b.click(),URL.revokeObjectURL(d),$e("报告已导出","success")}catch(v){$e(`导出PDF失败: ${v.message}`,"error")}}function m(){a=ti(this),t(0,a)}function _(){o=ti(this),t(1,o)}return[a,o,n,r,s,c,l,u,h,f,m,_]}class H_ extends Cn{constructor(e){super(),Rn(this,e,G_,V_,wn,{})}}function Ql(i){let e,t,n="已加载",r,s,a="清除",o,c;return{c(){e=R("div"),t=R("span"),t.textContent=n,r=Q(),s=R("button"),s.textContent=a,this.h()},l(l){e=C(l,"DIV",{style:!0});var u=ie(e);t=C(u,"SPAN",{class:!0,"data-svelte-h":!0}),Le(t)!=="svelte-1k217nw"&&(t.textContent=n),r=J(u),s=C(u,"BUTTON",{class:!0,"data-svelte-h":!0}),Le(s)!=="svelte-xi3j00"&&(s.textContent=a),u.forEach(D),this.h()},h(){F(t,"class","badge badge-success"),F(s,"class","btn-danger btn-sm"),Ce(e,"display","flex"),Ce(e,"align-items","center"),Ce(e,"gap","6px"),Ce(e,"margin-top","4px")},m(l,u){Re(l,e,u),g(e,t),g(e,r),g(e,s),o||(c=Ge(s,"click",i[5]),o=!0)},p:Ct,d(l){l&&D(e),o=!1,c()}}}function ec(i){let e,t,n="已加载",r,s,a="清除",o,c;return{c(){e=R("div"),t=R("span"),t.textContent=n,r=Q(),s=R("button"),s.textContent=a,this.h()},l(l){e=C(l,"DIV",{style:!0});var u=ie(e);t=C(u,"SPAN",{class:!0,"data-svelte-h":!0}),Le(t)!=="svelte-1k217nw"&&(t.textContent=n),r=J(u),s=C(u,"BUTTON",{class:!0,"data-svelte-h":!0}),Le(s)!=="svelte-1i2ssbg"&&(s.textContent=a),u.forEach(D),this.h()},h(){F(t,"class","badge badge-success"),F(s,"class","btn-danger btn-sm"),Ce(e,"display","flex"),Ce(e,"align-items","center"),Ce(e,"gap","6px"),Ce(e,"margin-top","4px")},m(l,u){Re(l,e,u),g(e,t),g(e,r),g(e,s),o||(c=Ge(s,"click",i[6]),o=!0)},p:Ct,d(l){l&&D(e),o=!1,c()}}}function W_(i){let e,t,n="地表贴图",r,s,a=i[2].visible?"隐藏":"显示",o,c,l,u,h,f="正射影像 (贴图纹理)",m,_,v,p,d,b,M,P="DEM 灰度图 (地形起伏)",L,A,y,N,k,x,T,K=(i[2].opacity*100).toFixed(0)+"",se,B,ee,Z,w,j,Y,W=i[2].orthoImage&&Ql(i),te=i[2].demImage&&ec(i);return{c(){e=R("div"),t=R("h3"),t.textContent=n,r=Q(),s=R("button"),o=ke(a),c=Q(),l=R("div"),u=R("div"),h=R("label"),h.textContent=f,m=Q(),_=R("div"),v=R("input"),p=Q(),W&&W.c(),d=Q(),b=R("div"),M=R("label"),M.textContent=P,L=Q(),A=R("input"),y=Q(),te&&te.c(),N=Q(),k=R("div"),x=R("label"),T=ke("贴图透明度: "),se=ke(K),B=ke("%"),ee=Q(),Z=R("input"),this.h()},l(re){e=C(re,"DIV",{class:!0});var me=ie(e);t=C(me,"H3",{"data-svelte-h":!0}),Le(t)!=="svelte-gzaxfa"&&(t.textContent=n),r=J(me),s=C(me,"BUTTON",{class:!0});var q=ie(s);o=ze(q,a),q.forEach(D),me.forEach(D),c=J(re),l=C(re,"DIV",{class:!0,style:!0});var V=ie(l);u=C(V,"DIV",{class:!0});var le=ie(u);h=C(le,"LABEL",{"data-svelte-h":!0}),Le(h)!=="svelte-txh69p"&&(h.textContent=f),m=J(le),_=C(le,"DIV",{style:!0});var ae=ie(_);v=C(ae,"INPUT",{type:!0,id:!0,accept:!0}),ae.forEach(D),p=J(le),W&&W.l(le),le.forEach(D),d=J(V),b=C(V,"DIV",{class:!0});var H=ie(b);M=C(H,"LABEL",{"data-svelte-h":!0}),Le(M)!=="svelte-1aq3yz3"&&(M.textContent=P),L=J(H),A=C(H,"INPUT",{type:!0,id:!0,accept:!0}),y=J(H),te&&te.l(H),H.forEach(D),N=J(V),k=C(V,"DIV",{class:!0});var ne=ie(k);x=C(ne,"LABEL",{});var X=ie(x);T=ze(X,"贴图透明度: "),se=ze(X,K),B=ze(X,"%"),X.forEach(D),ee=J(ne),Z=C(ne,"INPUT",{type:!0,min:!0,max:!0}),ne.forEach(D),V.forEach(D),this.h()},h(){F(s,"class","btn-secondary btn-sm"),F(e,"class","panel-header"),F(v,"type","file"),F(v,"id","orthoInput"),F(v,"accept","image/*"),Ce(_,"display","flex"),Ce(_,"gap","4px"),Ce(_,"align-items","center"),F(u,"class","form-group"),F(A,"type","file"),F(A,"id","demInput"),F(A,"accept","image/*"),F(b,"class","form-group"),F(Z,"type","range"),F(Z,"min","0"),F(Z,"max","100"),Z.value=w=i[2].opacity*100,F(k,"class","form-group"),F(l,"class","panel-body"),Ce(l,"padding","10px 12px")},m(re,me){Re(re,e,me),g(e,t),g(e,r),g(e,s),g(s,o),Re(re,c,me),Re(re,l,me),g(l,u),g(u,h),g(u,m),g(u,_),g(_,v),i[8](v),g(u,p),W&&W.m(u,null),g(l,d),g(l,b),g(b,M),g(b,L),g(b,A),i[9](A),g(b,y),te&&te.m(b,null),g(l,N),g(l,k),g(k,x),g(x,T),g(x,se),g(x,B),g(k,ee),g(k,Z),j||(Y=[Ge(s,"click",i[7]),Ge(v,"change",i[3]),Ge(A,"change",i[4]),Ge(Z,"input",i[10])],j=!0)},p(re,[me]){me&4&&a!==(a=re[2].visible?"隐藏":"显示")&&Qe(o,a),re[2].orthoImage?W?W.p(re,me):(W=Ql(re),W.c(),W.m(u,null)):W&&(W.d(1),W=null),re[2].demImage?te?te.p(re,me):(te=ec(re),te.c(),te.m(b,null)):te&&(te.d(1),te=null),me&4&&K!==(K=(re[2].opacity*100).toFixed(0)+"")&&Qe(se,K),me&4&&w!==(w=re[2].opacity*100)&&(Z.value=w)},i:Ct,o:Ct,d(re){re&&(D(e),D(c),D(l)),i[8](null),W&&W.d(),i[9](null),te&&te.d(),j=!1,Lt(Y)}}}function tc(i){return new Promise((e,t)=>{const n=new FileReader;n.onload=r=>{const s=new Image;s.onload=()=>e(s),s.onerror=t,s.src=r.target.result},n.onerror=t,n.readAsDataURL(i)})}function X_(i,e,t){let n;at(i,Qn,_=>t(2,n=_));let r,s;async function a(_){var p;const v=(p=_.target.files)==null?void 0:p[0];if(v){if(!v.type.startsWith("image/")){$e("请上传图片文件","warning");return}try{const d=await tc(v);mt(Qn,n={...n,orthoImage:d},n),$e(`正射影像已加载: ${v.name}`,"success")}catch{$e("加载正射影像失败","error")}_.target.value=""}}async function o(_){var p;const v=(p=_.target.files)==null?void 0:p[0];if(v){if(!v.type.startsWith("image/")){$e("请上传灰度图 (PNG/JPG)","warning");return}try{const d=await tc(v);mt(Qn,n={...n,demImage:d},n),$e(`DEM 灰度图已加载: ${v.name}`,"success")}catch{$e("加载DEM失败","error")}_.target.value=""}}function c(){mt(Qn,n={...n,orthoImage:null},n)}function l(){mt(Qn,n={...n,demImage:null},n)}const u=()=>mt(Qn,n={...n,visible:!n.visible},n);function h(_){$r[_?"unshift":"push"](()=>{r=_,t(0,r)})}function f(_){$r[_?"unshift":"push"](()=>{s=_,t(1,s)})}return[r,s,n,a,o,c,l,u,h,f,_=>mt(Qn,n={...n,opacity:_.target.value/100},n)]}class q_ extends Cn{constructor(e){super(),Rn(this,e,X_,W_,wn,{})}}function j_(i){let e,t=i[0].message+"",n,r,s,a="✕",o,c,l;return{c(){e=R("div"),n=ke(t),r=Q(),s=R("button"),s.textContent=a,this.h()},l(u){e=C(u,"DIV",{class:!0});var h=ie(e);n=ze(h,t),r=J(h),s=C(h,"BUTTON",{class:!0,"data-svelte-h":!0}),Le(s)!=="svelte-4r1jhq"&&(s.textContent=a),h.forEach(D),this.h()},h(){F(s,"class","close-btn svelte-ii73z2"),F(e,"class",o="toast toast-"+i[0].type+" svelte-ii73z2")},m(u,h){Re(u,e,h),g(e,n),g(e,r),g(e,s),c||(l=Ge(s,"click",i[2]),c=!0)},p(u,[h]){h&1&&t!==(t=u[0].message+"")&&Qe(n,t),h&1&&o!==(o="toast toast-"+u[0].type+" svelte-ii73z2")&&F(e,"class",o)},i:Ct,o:Ct,d(u){u&&D(e),c=!1,l()}}}function Y_(i,e,t){let n;at(i,Mr,a=>t(1,n=a));let{toast:r}=e;const s=()=>mt(Mr,n=n.filter(a=>a.id!==r.id),n);return i.$$set=a=>{"toast"in a&&t(0,r=a.toast)},[r,n,s]}class K_ extends Cn{constructor(e){super(),Rn(this,e,Y_,j_,wn,{toast:0})}}function nc(i,e,t){const n=i.slice();return n[20]=e[t],n}function ic(i,e,t){const n=i.slice();return n[23]=e[t],n}function rc(i,e,t){const n=i.slice();return n[26]=e[t],n}function sc(i){let e,t=i[26].name+"",n,r;return{c(){e=R("option"),n=ke(t),this.h()},l(s){e=C(s,"OPTION",{});var a=ie(e);n=ze(a,t),a.forEach(D),this.h()},h(){e.__value=r=i[26].id,He(e,e.__value)},m(s,a){Re(s,e,a),g(e,n)},p(s,a){a&1&&t!==(t=s[26].name+"")&&Qe(n,t),a&1&&r!==(r=s[26].id)&&(e.__value=r,He(e,e.__value))},d(s){s&&D(e)}}}function ac(i){let e,t=i[23].icon+"",n,r,s=i[23].label+"",a,o,c,l;function u(){return i[13](i[23])}return{c(){e=R("button"),n=ke(t),r=Q(),a=ke(s),o=Q(),this.h()},l(h){e=C(h,"BUTTON",{class:!0});var f=ie(e);n=ze(f,t),r=J(f),a=ze(f,s),o=J(f),f.forEach(D),this.h()},h(){F(e,"class","tab-btn svelte-19z9xcn"),$i(e,"active",i[6]===i[23].id)},m(h,f){Re(h,e,f),g(e,n),g(e,r),g(e,a),g(e,o),c||(l=Ge(e,"click",u),c=!0)},p(h,f){i=h,f&1088&&$i(e,"active",i[6]===i[23].id)},d(h){h&&D(e),c=!1,l()}}}function Z_(i){let e,t;return e=new H_({}),{c(){Xn(e.$$.fragment)},l(n){Wn(e.$$.fragment,n)},m(n,r){Hn(e,n,r),t=!0},i(n){t||(an(e.$$.fragment,n),t=!0)},o(n){on(e.$$.fragment,n),t=!1},d(n){Gn(e,n)}}}function $_(i){let e,t;return e=new k_({}),{c(){Xn(e.$$.fragment)},l(n){Wn(e.$$.fragment,n)},m(n,r){Hn(e,n,r),t=!0},i(n){t||(an(e.$$.fragment,n),t=!0)},o(n){on(e.$$.fragment,n),t=!1},d(n){Gn(e,n)}}}function J_(i){let e,t;return e=new F_({}),{c(){Xn(e.$$.fragment)},l(n){Wn(e.$$.fragment,n)},m(n,r){Hn(e,n,r),t=!0},i(n){t||(an(e.$$.fragment,n),t=!0)},o(n){on(e.$$.fragment,n),t=!1},d(n){Gn(e,n)}}}function Q_(i){let e,t;return e=new cu({}),{c(){Xn(e.$$.fragment)},l(n){Wn(e.$$.fragment,n)},m(n,r){Hn(e,n,r),t=!0},i(n){t||(an(e.$$.fragment,n),t=!0)},o(n){on(e.$$.fragment,n),t=!1},d(n){Gn(e,n)}}}function eg(i){let e,t;return e=new ru({}),{c(){Xn(e.$$.fragment)},l(n){Wn(e.$$.fragment,n)},m(n,r){Hn(e,n,r),t=!0},i(n){t||(an(e.$$.fragment,n),t=!0)},o(n){on(e.$$.fragment,n),t=!1},d(n){Gn(e,n)}}}function oc(i){let e,t,n,r="创建新项目",s,a,o,c="项目名称",l,u,h,f,m,_="取消",v,p,d="创建",b,M;return{c(){e=R("div"),t=R("div"),n=R("h3"),n.textContent=r,s=Q(),a=R("div"),o=R("label"),o.textContent=c,l=Q(),u=R("input"),h=Q(),f=R("div"),m=R("button"),m.textContent=_,v=Q(),p=R("button"),p.textContent=d,this.h()},l(P){e=C(P,"DIV",{class:!0});var L=ie(e);t=C(L,"DIV",{class:!0});var A=ie(t);n=C(A,"H3",{"data-svelte-h":!0}),Le(n)!=="svelte-1v42gf6"&&(n.textContent=r),s=J(A),a=C(A,"DIV",{class:!0});var y=ie(a);o=C(y,"LABEL",{"data-svelte-h":!0}),Le(o)!=="svelte-1mpo0da"&&(o.textContent=c),l=J(y),u=C(y,"INPUT",{type:!0,placeholder:!0}),y.forEach(D),h=J(A),f=C(A,"DIV",{class:!0});var N=ie(f);m=C(N,"BUTTON",{class:!0,"data-svelte-h":!0}),Le(m)!=="svelte-pvm4w2"&&(m.textContent=_),v=J(N),p=C(N,"BUTTON",{class:!0,"data-svelte-h":!0}),Le(p)!=="svelte-1mtj7b2"&&(p.textContent=d),N.forEach(D),A.forEach(D),L.forEach(D),this.h()},h(){F(u,"type","text"),F(u,"placeholder","输入项目名称"),F(a,"class","form-group"),F(m,"class","btn-secondary"),F(p,"class","btn-primary"),F(f,"class","modal-actions"),F(t,"class","modal"),F(e,"class","modal-overlay")},m(P,L){Re(P,e,L),g(e,t),g(t,n),g(t,s),g(t,a),g(a,o),g(a,l),g(a,u),He(u,i[2]),g(t,h),g(t,f),g(f,m),g(f,v),g(f,p),b||(M=[Ge(u,"input",i[14]),Ge(u,"keydown",i[15]),Ge(m,"click",i[16]),Ge(p,"click",i[9]),Ge(e,"click",aa(i[17]))],b=!0)},p(P,L){L&4&&u.value!==P[2]&&He(u,P[2])},d(P){P&&D(e),b=!1,Lt(M)}}}function lc(i,e){let t,n,r;return n=new K_({props:{toast:e[20]}}),{key:i,first:null,c(){t=An(),Xn(n.$$.fragment),this.h()},l(s){t=An(),Wn(n.$$.fragment,s),this.h()},h(){this.first=t},m(s,a){Re(s,t,a),Hn(n,s,a),r=!0},p(s,a){e=s;const o={};a&128&&(o.toast=e[20]),n.$set(o)},i(s){r||(an(n.$$.fragment,s),r=!0)},o(s){on(n.$$.fragment,s),r=!1},d(s){s&&D(t),Gn(n,s)}}}function tg(i){let e,t,n,r,s="⛏ GeoModeler",a,o,c,l,u,h="+ 新项目",f,m,_,v,p,d,b=i[4].length+"",M,P,L=i[3].length+"",A,y,N,k,x,T,K,se,B,ee,Z,w,j,Y,W,te,re=[],me=new Map,q,V,le,ae=_t(i[0]),H=[];for(let oe=0;oe<ae.length;oe+=1)H[oe]=sc(rc(i,ae,oe));let ne=_t(i[10]),X=[];for(let oe=0;oe<ne.length;oe+=1)X[oe]=ac(ic(i,ne,oe));const xe=[eg,Q_,J_,$_,Z_],O=[];function ye(oe,G){return oe[6]==="boreholes"?0:oe[6]==="profiles"?1:oe[6]==="modeling"?2:oe[6]==="attributes"?3:oe[6]==="export"?4:-1}~(x=ye(i))&&(T=O[x]=xe[x](i)),ee=new q_({}),j=new D_({});let ce=i[1]&&oc(i),pe=_t(i[7]);const de=oe=>oe[20].id;for(let oe=0;oe<pe.length;oe+=1){let G=nc(i,pe,oe),S=de(G);me.set(S,re[oe]=lc(S,G))}return{c(){e=R("div"),t=R("header"),n=R("div"),r=R("span"),r.textContent=s,a=Q(),o=R("select");for(let oe=0;oe<H.length;oe+=1)H[oe].c();l=Q(),u=R("button"),u.textContent=h,f=Q(),m=R("div");for(let oe=0;oe<X.length;oe+=1)X[oe].c();_=Q(),v=R("div"),p=R("span"),d=ke("钻孔: "),M=ke(b),P=ke(" | 岩性: "),A=ke(L),y=Q(),N=R("div"),k=R("aside"),T&&T.c(),K=Q(),se=R("div"),B=Q(),Xn(ee.$$.fragment),Z=Q(),w=R("main"),Xn(j.$$.fragment),Y=Q(),ce&&ce.c(),W=Q(),te=R("div");for(let oe=0;oe<re.length;oe+=1)re[oe].c();this.h()},l(oe){e=C(oe,"DIV",{class:!0});var G=ie(e);t=C(G,"HEADER",{class:!0});var S=ie(t);n=C(S,"DIV",{class:!0});var E=ie(n);r=C(E,"SPAN",{class:!0,"data-svelte-h":!0}),Le(r)!=="svelte-1m7r0r6"&&(r.textContent=s),a=J(E),o=C(E,"SELECT",{class:!0});var $=ie(o);for(let Fe=0;Fe<H.length;Fe+=1)H[Fe].l($);$.forEach(D),l=J(E),u=C(E,"BUTTON",{class:!0,"data-svelte-h":!0}),Le(u)!=="svelte-1c65pm4"&&(u.textContent=h),E.forEach(D),f=J(S),m=C(S,"DIV",{class:!0});var ge=ie(m);for(let Fe=0;Fe<X.length;Fe+=1)X[Fe].l(ge);ge.forEach(D),_=J(S),v=C(S,"DIV",{class:!0});var fe=ie(v);p=C(fe,"SPAN",{class:!0});var ve=ie(p);d=ze(ve,"钻孔: "),M=ze(ve,b),P=ze(ve," | 岩性: "),A=ze(ve,L),ve.forEach(D),fe.forEach(D),S.forEach(D),y=J(G),N=C(G,"DIV",{class:!0});var Pe=ie(N);k=C(Pe,"ASIDE",{class:!0});var Te=ie(k);T&&T.l(Te),K=J(Te),se=C(Te,"DIV",{class:!0}),ie(se).forEach(D),B=J(Te),Wn(ee.$$.fragment,Te),Te.forEach(D),Z=J(Pe),w=C(Pe,"MAIN",{class:!0});var Ae=ie(w);Wn(j.$$.fragment,Ae),Ae.forEach(D),Pe.forEach(D),G.forEach(D),Y=J(oe),ce&&ce.l(oe),W=J(oe),te=C(oe,"DIV",{class:!0});var Oe=ie(te);for(let Fe=0;Fe<re.length;Fe+=1)re[Fe].l(Oe);Oe.forEach(D),this.h()},h(){F(r,"class","logo svelte-19z9xcn"),F(o,"class","svelte-19z9xcn"),F(u,"class","btn-secondary btn-sm"),F(n,"class","header-left svelte-19z9xcn"),F(m,"class","header-center svelte-19z9xcn"),F(p,"class","info-text svelte-19z9xcn"),F(v,"class","header-right svelte-19z9xcn"),F(t,"class","app-header svelte-19z9xcn"),F(se,"class","divider svelte-19z9xcn"),F(k,"class","left-panel panel svelte-19z9xcn"),F(w,"class","main-content svelte-19z9xcn"),F(N,"class","app-body svelte-19z9xcn"),F(e,"class","app-layout svelte-19z9xcn"),F(te,"class","toast-container")},m(oe,G){Re(oe,e,G),g(e,t),g(t,n),g(n,r),g(n,a),g(n,o);for(let S=0;S<H.length;S+=1)H[S]&&H[S].m(o,null);Ot(o,i[5]?i[5].id:""),g(n,l),g(n,u),g(t,f),g(t,m);for(let S=0;S<X.length;S+=1)X[S]&&X[S].m(m,null);g(t,_),g(t,v),g(v,p),g(p,d),g(p,M),g(p,P),g(p,A),g(e,y),g(e,N),g(N,k),~x&&O[x].m(k,null),g(k,K),g(k,se),g(k,B),Hn(ee,k,null),g(N,Z),g(N,w),Hn(j,w,null),Re(oe,Y,G),ce&&ce.m(oe,G),Re(oe,W,G),Re(oe,te,G);for(let S=0;S<re.length;S+=1)re[S]&&re[S].m(te,null);q=!0,V||(le=[Ge(o,"change",i[11]),Ge(u,"click",i[12])],V=!0)},p(oe,[G]){if(G&1){ae=_t(oe[0]);let E;for(E=0;E<ae.length;E+=1){const $=rc(oe,ae,E);H[E]?H[E].p($,G):(H[E]=sc($),H[E].c(),H[E].m(o,null))}for(;E<H.length;E+=1)H[E].d(1);H.length=ae.length}if((!q||G&33&&c!==(c=oe[5]?oe[5].id:""))&&Ot(o,oe[5]?oe[5].id:""),G&1088){ne=_t(oe[10]);let E;for(E=0;E<ne.length;E+=1){const $=ic(oe,ne,E);X[E]?X[E].p($,G):(X[E]=ac($),X[E].c(),X[E].m(m,null))}for(;E<X.length;E+=1)X[E].d(1);X.length=ne.length}(!q||G&16)&&b!==(b=oe[4].length+"")&&Qe(M,b),(!q||G&8)&&L!==(L=oe[3].length+"")&&Qe(A,L);let S=x;x=ye(oe),x!==S&&(T&&(xa(),on(O[S],1,1,()=>{O[S]=null}),Ea()),~x?(T=O[x],T||(T=O[x]=xe[x](oe),T.c()),an(T,1),T.m(k,K)):T=null),oe[1]?ce?ce.p(oe,G):(ce=oc(oe),ce.c(),ce.m(W.parentNode,W)):ce&&(ce.d(1),ce=null),G&128&&(pe=_t(oe[7]),xa(),re=Zc(re,G,de,1,oe,pe,me,te,Kc,lc,null,nc),Ea())},i(oe){if(!q){an(T),an(ee.$$.fragment,oe),an(j.$$.fragment,oe);for(let G=0;G<pe.length;G+=1)an(re[G]);q=!0}},o(oe){on(T),on(ee.$$.fragment,oe),on(j.$$.fragment,oe);for(let G=0;G<re.length;G+=1)on(re[G]);q=!1},d(oe){oe&&(D(e),D(Y),D(W),D(te)),Vt(H,oe),Vt(X,oe),~x&&O[x].d(),Gn(ee),Gn(j),ce&&ce.d(oe);for(let G=0;G<re.length;G+=1)re[G].d();V=!1,Lt(le)}}}function ng(i,e,t){let n,r,s,a,o,c,l;at(i,Er,y=>t(18,n=y)),at(i,xr,y=>t(19,r=y)),at(i,vi,y=>t(3,s=y)),at(i,Ji,y=>t(4,a=y)),at(i,Si,y=>t(5,o=y)),at(i,Sa,y=>t(6,c=y)),at(i,Mr,y=>t(7,l=y));let u=[],h=!1,f="";cc(async()=>{try{t(0,u=await vt.get("/projects")),u.length>0&&await m(u[0].id)}catch(y){console.error(y)}});async function m(y){try{const N=await vt.get(`/projects/${y}`);mt(Si,o=N,o);const[k,x,T,K]=await Promise.all([vt.get(`/projects/${y}/boreholes`),vt.get(`/projects/${y}/lithology-types`),vt.get(`/projects/${y}/profiles`),vt.get(`/projects/${y}/modeling/runs`)]);mt(Ji,a=k,a),mt(vi,s=x,s),mt(xr,r=T,r),mt(Er,n=K,n)}catch(N){$e(`加载项目失败: ${N.message}`,"error")}}async function _(){if(f.trim())try{const y=await vt.post("/projects",{name:f.trim()});t(0,u=[...u,y]),t(1,h=!1),t(2,f=""),await m(y.id),$e("项目创建成功","success")}catch(y){$e(`创建失败: ${y.message}`,"error")}}const v=[{id:"boreholes",label:"钻孔数据",icon:"⊕"},{id:"profiles",label:"剖面分析",icon:"☷"},{id:"modeling",label:"三维建模",icon:"◆"},{id:"attributes",label:"属性场",icon:"◈"},{id:"export",label:"成果导出",icon:"↓"}],p=y=>m(y.target.value),d=()=>t(1,h=!0),b=y=>mt(Sa,c=y.id,c);function M(){f=this.value,t(2,f)}return[u,h,f,s,a,o,c,l,m,_,v,p,d,b,M,y=>y.key==="Enter"&&_(),()=>t(1,h=!1),()=>t(1,h=!1)]}class ig extends Cn{constructor(e){super(),Rn(this,e,ng,tg,wn,{})}}function rg(i){let e,t;return e=new ig({}),{c(){Xn(e.$$.fragment)},l(n){Wn(e.$$.fragment,n)},m(n,r){Hn(e,n,r),t=!0},p:Ct,i(n){t||(an(e.$$.fragment,n),t=!0)},o(n){on(e.$$.fragment,n),t=!1},d(n){Gn(e,n)}}}class cg extends Cn{constructor(e){super(),Rn(this,e,null,rg,wn,{})}}export{cg as component,lg as universal};
