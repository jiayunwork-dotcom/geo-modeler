import{r as Ct,s as dn,n as yt,c as Je,x as st,p as fn,d as Sh,t as To,e as ni,o as Lr,y as of,z as Ko,A as af}from"../chunks/scheduler.CFrTkFHZ.js";import{l as kt,k as Bt,S as pn,i as mn,d as S,s as Ve,a as ve,b as h,y as ze,w as R,x as fe,c as E,e as O,z as Pe,g as V,f as de,o as It,h as M,j as H,t as pe,A as Et,B as Us,C as Ke,D as lt,E as Kt,F as Tt,G as hn,m as ks,n as Bs,q as vn,u as bn,v as xn,r as En,H as lf}from"../chunks/index.aK-vytiY.js";import{w as mt}from"../chunks/index.D9njJScM.js";function nt(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function cf(i,e){Bt(i,1,1,()=>{e.delete(i.key)})}function uf(i,e,t,n,s,r,o,a,c,l,u,f){let d=i.length,g=r.length,v=d;const _={};for(;v--;)_[i[v].key]=v;const m=[],p=new Map,x=new Map,b=[];for(v=g;v--;){const w=f(s,r,v),L=t(w);let F=o.get(L);F?b.push(()=>F.p(w,e)):(F=l(L,w),F.c()),p.set(L,m[v]=F),L in _&&x.set(L,Math.abs(v-_[L]))}const A=new Set,C=new Set;function T(w){kt(w,1),w.m(a,u),o.set(w.key,w),u=w.first,g--}for(;d&&g;){const w=m[g-1],L=i[d-1],F=w.key,y=L.key;w===L?(u=w.first,d--,g--):p.has(y)?!o.has(F)||A.has(F)?T(w):C.has(y)?d--:x.get(F)>x.get(y)?(C.add(F),T(w)):(A.add(y),d--):(c(L,o),d--)}for(;d--;){const w=i[d];p.has(w.key)||c(w,o)}for(;g;)T(m[g-1]);return Ct(b),m}const hf=!1,ff=!0,i1=Object.freeze(Object.defineProperty({__proto__:null,prerender:ff,ssr:hf},Symbol.toStringTag,{value:"Module"})),Bn=mt(null),Gn=mt([]),ti=mt([]),Rs=mt([]),Ps=mt([]),Ls=mt(null),mr=mt(null),_r=mt({mode:"voxel",isosurfaceValue:0,colorMin:0,colorMax:100}),Ds=mt([]);function $e(i,e="info",t=4e3){const n=Date.now();Ds.update(s=>[...s,{id:n,message:i,type:e}]),t>0&&setTimeout(()=>{Ds.update(s=>s.filter(r=>r.id!==n))},t)}const dr=mt([]),$i=mt({status:"idle",progress:0,runId:null}),es=mt({}),ts=mt({}),ns=mt({enabled:!1,normal:[0,0,-1],position:[0,0,0]}),Zo=mt(null),Vr=mt("boreholes"),yn=mt(null),gr=mt(null),vr=mt(!1),Jo=mt(null),Qo=mt(null),ws=mt(null),As=mt(null),$o=mt(!1),ea=mt(null),wo=mt([]),ta=mt(null),Jn=mt({orthoImage:null,demImage:null,opacity:1,visible:!0}),cs=mt([]),na=mt([]),ia=mt([]),sa=mt([]),zn=mt(null),Un=mt(!1),br=mt(.6),xr=mt(null),ra=mt({playing:!1,startDate:null,endDate:null,speed:7,currentDate:null,progress:0}),Er=mt("data"),Mr=mt([]),us=mt([]),oa=mt({}),Sr=mt(""),zs=mt(!1),df="/api";async function Pt(i,e,t=null,n={}){const s=`${df}${e}`,r={};t&&!(t instanceof FormData)&&(r["Content-Type"]="application/json");const o=await fetch(s,{method:i,headers:r,body:t instanceof FormData?t:t?JSON.stringify(t):null,...n});if(o.status===204)return null;if(!o.ok){const c=o.headers.get("content-type");if(c&&c.includes("application/json")){const l=await o.json().catch(()=>({detail:o.statusText}));throw new Error(l.detail||`请求失败 (${o.status}): ${o.statusText}`)}throw new Error(`请求失败 (${o.status}): ${o.statusText}`)}if(n.raw)return o;const a=o.headers.get("content-type");return a&&a.includes("application/json")?o.json():o}const ht={get:(i,e)=>Pt("GET",i,null,e),post:(i,e,t)=>Pt("POST",i,e,t),put:(i,e,t)=>Pt("PUT",i,e,t),patch:(i,e,t)=>Pt("PATCH",i,e,t),delete:(i,e)=>Pt("DELETE",i,null,e),uploadCsv:(i,e)=>{const t=new FormData;return t.append("file",e),Pt("POST",`/projects/${i}/boreholes/import-csv`,t)},exportGltf:i=>Pt("GET",`/export/gltf/${i}`,null,{raw:!0}),exportProfilePng:i=>Pt("GET",`/export/profile/${i}/png`,null,{raw:!0}),exportProfileSvg:i=>Pt("GET",`/export/profile/${i}/svg`,null,{raw:!0}),exportStatsExcel:i=>Pt("GET",`/export/stats/${i}/excel`,null,{raw:!0}),exportReportPdf:i=>Pt("GET",`/export/report/${i}/pdf`,null,{raw:!0}),downloadBlob:async(i,e)=>{const n=await(await Pt("GET",i,null,{raw:!0})).blob(),s=URL.createObjectURL(n),r=document.createElement("a");r.href=s,r.download=e,r.click(),URL.revokeObjectURL(s)},getWaterLevels:(i,e)=>{const t=e?`?borehole_id=${e}`:"";return Pt("GET",`/projects/${i}/water-levels${t}`)},createWaterLevel:(i,e)=>Pt("POST",`/projects/${i}/water-levels`,e),deleteWaterLevel:(i,e)=>Pt("DELETE",`/projects/${i}/water-levels/${e}`),importWaterLevelCsv:(i,e)=>{const t=new FormData;return t.append("file",e),Pt("POST",`/projects/${i}/water-levels/import-csv`,t)},getWaterLevelStats:(i,e)=>Pt("POST",`/projects/${i}/water-levels/statistics`,e),getWaterLevelMKTest:(i,e)=>Pt("POST",`/projects/${i}/water-levels/mk-test`,e),getWaterLevelBoxplot:(i,e)=>Pt("POST",`/projects/${i}/water-levels/boxplot`,e),krigingWaterLevel:(i,e)=>Pt("POST",`/projects/${i}/water-levels/kriging`,e),getWaterLevelThresholds:i=>Pt("GET",`/projects/${i}/water-levels/thresholds`),getWaterLevelThreshold:(i,e)=>Pt("GET",`/projects/${i}/water-levels/thresholds/${e}`),createWaterLevelThreshold:(i,e)=>Pt("POST",`/projects/${i}/water-levels/thresholds`,e),updateWaterLevelThreshold:(i,e,t)=>Pt("PUT",`/projects/${i}/water-levels/thresholds/${e}`,t),deleteWaterLevelThreshold:(i,e)=>Pt("DELETE",`/projects/${i}/water-levels/thresholds/${e}`),detectWaterLevelAnomalies:(i,e)=>Pt("POST",`/projects/${i}/water-levels/anomalies`,e),getWaterLevelWarnings:i=>Pt("GET",`/projects/${i}/water-levels/warnings`)};function aa(i,e,t){const n=i.slice();return n[41]=e[t],n[42]=e,n[43]=t,n}function la(i,e,t){const n=i.slice();return n[44]=e[t],n}function ca(i,e,t){const n=i.slice();return n[47]=e[t],n}function ua(i,e,t){const n=i.slice();return n[50]=e[t],n}function ha(i,e,t){const n=i.slice();n[41]=e[t];const s=n[8].find(function(...o){return i[24](n[41],...o)});return n[53]=s,n}function fa(i,e,t){const n=i.slice();return n[53]=e[t],n[56]=e,n[57]=t,n}function da(i){let e,t,n="岩性颜色映射",s,r,o,a=nt(i[8]),c=[];for(let l=0;l<a.length;l+=1)c[l]=pa(fa(i,a,l));return{c(){e=M("div"),t=M("h4"),t.textContent=n,s=H();for(let l=0;l<c.length;l+=1)c[l].c();r=H(),o=M("hr"),this.h()},l(l){e=E(l,"DIV",{class:!0});var u=O(e);t=E(u,"H4",{style:!0,"data-svelte-h":!0}),Pe(t)!=="svelte-i0dhp9"&&(t.textContent=n),s=V(u);for(let f=0;f<c.length;f+=1)c[f].l(u);u.forEach(S),r=V(l),o=E(l,"HR",{style:!0}),this.h()},h(){fe(t,"margin-bottom","8px"),fe(t,"font-size","13px"),R(e,"class","color-editor svelte-jbi2uy"),fe(o,"border-color","var(--border)"),fe(o,"margin","12px 0")},m(l,u){ve(l,e,u),h(e,t),h(e,s);for(let f=0;f<c.length;f+=1)c[f]&&c[f].m(e,null);ve(l,r,u),ve(l,o,u)},p(l,u){if(u[0]&33024){a=nt(l[8]);let f;for(f=0;f<a.length;f+=1){const d=fa(l,a,f);c[f]?c[f].p(d,u):(c[f]=pa(d),c[f].c(),c[f].m(e,null))}for(;f<c.length;f+=1)c[f].d(1);c.length=a.length}},d(l){l&&(S(e),S(r),S(o)),Et(c,l)}}}function pa(i){let e,t,n,s,r=i[53].name+"",o,a,c,l;function u(){i[19].call(t,i[56],i[57])}function f(){return i[20](i[53])}return{c(){e=M("div"),t=M("input"),n=H(),s=M("span"),o=pe(r),a=H(),this.h()},l(d){e=E(d,"DIV",{class:!0});var g=O(e);t=E(g,"INPUT",{type:!0}),n=V(g),s=E(g,"SPAN",{});var v=O(s);o=de(v,r),v.forEach(S),a=V(g),g.forEach(S),this.h()},h(){R(t,"type","color"),R(e,"class","color-row svelte-jbi2uy")},m(d,g){ve(d,e,g),h(e,t),Ke(t,i[53].color),h(e,n),h(e,s),h(s,o),h(e,a),c||(l=[ze(t,"input",u),ze(t,"change",f)],c=!0)},p(d,g){i=d,g[0]&256&&Ke(t,i[53].color),g[0]&256&&r!==(r=i[53].name+"")&&Ve(o,r)},d(d){d&&S(e),c=!1,Ct(l)}}}function pf(i){let e,t=nt(i[9]),n=[];for(let s=0;s<t.length;s+=1)n[s]=_a(ua(i,t,s));return{c(){e=M("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=E(s,"DIV",{class:!0});var r=O(e);for(let o=0;o<n.length;o+=1)n[o].l(r);r.forEach(S),this.h()},h(){R(e,"class","borehole-list")},m(s,r){ve(s,e,r);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(e,null)},p(s,r){if(r[0]&23392){t=nt(s[9]);let o;for(o=0;o<t.length;o+=1){const a=ua(s,t,o);n[o]?n[o].p(a,r):(n[o]=_a(a),n[o].c(),n[o].m(e,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}},d(s){s&&S(e),Et(n,s)}}}function mf(i){let e,t='<p>暂无钻孔数据</p> <p style="font-size:12px;color:var(--text-muted);margin-top:4px;">点击&quot;导入CSV&quot;添加钻孔数据</p>';return{c(){e=M("div"),e.innerHTML=t,this.h()},l(n){e=E(n,"DIV",{class:!0,"data-svelte-h":!0}),Pe(e)!=="svelte-b2zuvh"&&(e.innerHTML=t),this.h()},h(){R(e,"class","empty-state svelte-jbi2uy")},m(n,s){ve(n,e,s)},p:yt,d(n){n&&S(e)}}}function ma(i){let e,t;return{c(){e=M("div"),this.h()},l(n){e=E(n,"DIV",{class:!0,style:!0,title:!0});var s=O(e);s.forEach(S),this.h()},h(){var n;R(e,"class","layer-chip svelte-jbi2uy"),fe(e,"background",((n=i[53])==null?void 0:n.color)||"#888"),fe(e,"flex",i[41].bottom_depth-i[41].top_depth),R(e,"title",t=i[41].lithology_name+": "+i[41].top_depth+"-"+i[41].bottom_depth+"m")},m(n,s){ve(n,e,s)},p(n,s){var r;s[0]&768&&fe(e,"background",((r=n[53])==null?void 0:r.color)||"#888"),s[0]&512&&fe(e,"flex",n[41].bottom_depth-n[41].top_depth),s[0]&512&&t!==(t=n[41].lithology_name+": "+n[41].top_depth+"-"+n[41].bottom_depth+"m")&&R(e,"title",t)},d(n){n&&S(e)}}}function _a(i){let e,t,n,s,r,o,a,c=i[50].hole_id+"",l,u,f,d,g="编辑",v,_,m="删除",p,x,b,A,C=i[50].longitude.toFixed(5)+"",T,w,L=i[50].latitude.toFixed(5)+"",F,y,U,Y,Q=i[50].elevation.toFixed(2)+"",k,X,W,J,ee=i[50].layers.length+"",se,ue,ce,le,he=(i[5][i[50].id]||[]).length+"",z,K,re,D,I,Ee,Me;function Re(){return i[21](i[50])}function j(){return i[22](i[50])}function Ae(){return i[23](i[50])}let Se=nt(i[50].layers),Ne=[];for(let oe=0;oe<Se.length;oe+=1)Ne[oe]=ma(ha(i,Se,oe));return{c(){e=M("div"),t=M("div"),n=M("label"),s=M("input"),o=H(),a=M("strong"),l=pe(c),u=H(),f=M("div"),d=M("button"),d.textContent=g,v=H(),_=M("button"),_.textContent=m,p=H(),x=M("div"),b=M("span"),A=pe("坐标: "),T=pe(C),w=pe(", "),F=pe(L),y=H(),U=M("span"),Y=pe("高程: "),k=pe(Q),X=pe("m"),W=H(),J=M("span"),se=pe(ee),ue=pe(" 层"),ce=H(),le=M("span"),z=pe(he),K=pe(" 条水位"),re=H(),D=M("div");for(let oe=0;oe<Ne.length;oe+=1)Ne[oe].c();I=H(),this.h()},l(oe){e=E(oe,"DIV",{class:!0});var ie=O(e);t=E(ie,"DIV",{class:!0});var ge=O(t);n=E(ge,"LABEL",{class:!0});var B=O(n);s=E(B,"INPUT",{type:!0}),o=V(B),a=E(B,"STRONG",{});var P=O(a);l=de(P,c),P.forEach(S),B.forEach(S),u=V(ge),f=E(ge,"DIV",{class:!0});var xe=O(f);d=E(xe,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(d)!=="svelte-qjn1px"&&(d.textContent=g),v=V(xe),_=E(xe,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(_)!=="svelte-3c3ohz"&&(_.textContent=m),xe.forEach(S),ge.forEach(S),p=V(ie),x=E(ie,"DIV",{class:!0});var te=O(x);b=E(te,"SPAN",{});var N=O(b);A=de(N,"坐标: "),T=de(N,C),w=de(N,", "),F=de(N,L),N.forEach(S),y=V(te),U=E(te,"SPAN",{});var Z=O(U);Y=de(Z,"高程: "),k=de(Z,Q),X=de(Z,"m"),Z.forEach(S),W=V(te),J=E(te,"SPAN",{});var me=O(J);se=de(me,ee),ue=de(me," 层"),me.forEach(S),ce=V(te),le=E(te,"SPAN",{class:!0});var _e=O(le);z=de(_e,he),K=de(_e," 条水位"),_e.forEach(S),te.forEach(S),re=V(ie),D=E(ie,"DIV",{class:!0});var $=O(D);for(let ae=0;ae<Ne.length;ae+=1)Ne[ae].l($);$.forEach(S),I=V(ie),ie.forEach(S),this.h()},h(){R(s,"type","checkbox"),s.checked=r=i[6].includes(i[50].id),R(n,"class","checkbox-label"),R(d,"class","btn-secondary btn-sm"),R(_,"class","btn-danger btn-sm"),R(f,"class","card-actions svelte-jbi2uy"),R(t,"class","card-header svelte-jbi2uy"),R(le,"class","wl-count svelte-jbi2uy"),R(x,"class","card-info svelte-jbi2uy"),R(D,"class","layer-bar svelte-jbi2uy"),R(e,"class","borehole-card svelte-jbi2uy"),Kt(e,"selected",i[6].includes(i[50].id))},m(oe,ie){ve(oe,e,ie),h(e,t),h(t,n),h(n,s),h(n,o),h(n,a),h(a,l),h(t,u),h(t,f),h(f,d),h(f,v),h(f,_),h(e,p),h(e,x),h(x,b),h(b,A),h(b,T),h(b,w),h(b,F),h(x,y),h(x,U),h(U,Y),h(U,k),h(U,X),h(x,W),h(x,J),h(J,se),h(J,ue),h(x,ce),h(x,le),h(le,z),h(le,K),h(e,re),h(e,D);for(let ge=0;ge<Ne.length;ge+=1)Ne[ge]&&Ne[ge].m(D,null);h(e,I),Ee||(Me=[ze(s,"change",Re),ze(d,"click",j),ze(_,"click",Ae)],Ee=!0)},p(oe,ie){if(i=oe,ie[0]&576&&r!==(r=i[6].includes(i[50].id))&&(s.checked=r),ie[0]&512&&c!==(c=i[50].hole_id+"")&&Ve(l,c),ie[0]&512&&C!==(C=i[50].longitude.toFixed(5)+"")&&Ve(T,C),ie[0]&512&&L!==(L=i[50].latitude.toFixed(5)+"")&&Ve(F,L),ie[0]&512&&Q!==(Q=i[50].elevation.toFixed(2)+"")&&Ve(k,Q),ie[0]&512&&ee!==(ee=i[50].layers.length+"")&&Ve(se,ee),ie[0]&544&&he!==(he=(i[5][i[50].id]||[]).length+"")&&Ve(z,he),ie[0]&768){Se=nt(i[50].layers);let ge;for(ge=0;ge<Se.length;ge+=1){const B=ha(i,Se,ge);Ne[ge]?Ne[ge].p(B,ie):(Ne[ge]=ma(B),Ne[ge].c(),Ne[ge].m(D,null))}for(;ge<Ne.length;ge+=1)Ne[ge].d(1);Ne.length=Se.length}ie[0]&576&&Kt(e,"selected",i[6].includes(i[50].id))},d(oe){oe&&S(e),Et(Ne,oe),Ee=!1,Ct(Me)}}}function ga(i){let e,t,n,s="导入钻孔CSV数据",r,o,a=`CSV字段: hole_id/孔号, longitude/经度, latitude/纬度, elevation/高程,
                layer_no/层号, top_depth/层顶深度, bottom_depth/层底深度, lithology/岩性,
                spt_n/标贯N值, water_content/含水量, compression_modulus/压缩模量`,c,l,u,f,d,g,v,_="关闭",m,p,x=i[2]?"导入中...":"开始导入",b,A,C,T,w=i[3]&&va(i);return{c(){e=M("div"),t=M("div"),n=M("h3"),n.textContent=s,r=H(),o=M("p"),o.textContent=a,c=H(),l=M("div"),u=M("input"),f=H(),w&&w.c(),d=H(),g=M("div"),v=M("button"),v.textContent=_,m=H(),p=M("button"),b=pe(x),this.h()},l(L){e=E(L,"DIV",{class:!0});var F=O(e);t=E(F,"DIV",{class:!0});var y=O(t);n=E(y,"H3",{"data-svelte-h":!0}),Pe(n)!=="svelte-rl92uc"&&(n.textContent=s),r=V(y),o=E(y,"P",{style:!0,"data-svelte-h":!0}),Pe(o)!=="svelte-p50xxs"&&(o.textContent=a),c=V(y),l=E(y,"DIV",{class:!0});var U=O(l);u=E(U,"INPUT",{type:!0,accept:!0}),U.forEach(S),f=V(y),w&&w.l(y),d=V(y),g=E(y,"DIV",{class:!0});var Y=O(g);v=E(Y,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(v)!=="svelte-1wvy2wc"&&(v.textContent=_),m=V(Y),p=E(Y,"BUTTON",{class:!0});var Q=O(p);b=de(Q,x),Q.forEach(S),Y.forEach(S),y.forEach(S),F.forEach(S),this.h()},h(){fe(o,"font-size","12px"),fe(o,"color","var(--text-secondary)"),fe(o,"margin-bottom","12px"),R(u,"type","file"),R(u,"accept",".csv"),R(l,"class","form-group"),R(v,"class","btn-secondary"),R(p,"class","btn-primary"),p.disabled=A=!i[1]||i[2],R(g,"class","modal-actions"),R(t,"class","modal"),R(e,"class","modal-overlay")},m(L,F){ve(L,e,F),h(e,t),h(t,n),h(t,r),h(t,o),h(t,c),h(t,l),h(l,u),h(t,f),w&&w.m(t,null),h(t,d),h(t,g),h(g,v),h(g,m),h(g,p),h(p,b),C||(T=[ze(u,"change",i[25]),ze(v,"click",i[26]),ze(p,"click",i[10]),ze(e,"click",Us(i[27]))],C=!0)},p(L,F){L[3]?w?w.p(L,F):(w=va(L),w.c(),w.m(t,d)):w&&(w.d(1),w=null),F[0]&4&&x!==(x=L[2]?"导入中...":"开始导入")&&Ve(b,x),F[0]&6&&A!==(A=!L[1]||L[2])&&(p.disabled=A)},d(L){L&&S(e),w&&w.d(),C=!1,Ct(T)}}}function va(i){let e,t,n,s=i[3].imported+"",r,o,a,c,l=i[3].errors.length>0&&ba(i),u=i[3].warnings.length>0&&Ea(i);return{c(){e=M("div"),t=M("p"),n=pe("成功导入: "),r=pe(s),o=pe(" 个钻孔"),a=H(),l&&l.c(),c=H(),u&&u.c(),this.h()},l(f){e=E(f,"DIV",{class:!0});var d=O(e);t=E(d,"P",{class:!0});var g=O(t);n=de(g,"成功导入: "),r=de(g,s),o=de(g," 个钻孔"),g.forEach(S),a=V(d),l&&l.l(d),c=V(d),u&&u.l(d),d.forEach(S),this.h()},h(){R(t,"class","badge badge-success svelte-jbi2uy"),R(e,"class","import-result svelte-jbi2uy")},m(f,d){ve(f,e,d),h(e,t),h(t,n),h(t,r),h(t,o),h(e,a),l&&l.m(e,null),h(e,c),u&&u.m(e,null)},p(f,d){d[0]&8&&s!==(s=f[3].imported+"")&&Ve(r,s),f[3].errors.length>0?l?l.p(f,d):(l=ba(f),l.c(),l.m(e,c)):l&&(l.d(1),l=null),f[3].warnings.length>0?u?u.p(f,d):(u=Ea(f),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},d(f){f&&S(e),l&&l.d(),u&&u.d()}}}function ba(i){let e,t=nt(i[3].errors),n=[];for(let s=0;s<t.length;s+=1)n[s]=xa(ca(i,t,s));return{c(){e=M("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=E(s,"DIV",{class:!0});var r=O(e);for(let o=0;o<n.length;o+=1)n[o].l(r);r.forEach(S),this.h()},h(){R(e,"class","errors")},m(s,r){ve(s,e,r);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(e,null)},p(s,r){if(r[0]&8){t=nt(s[3].errors);let o;for(o=0;o<t.length;o+=1){const a=ca(s,t,o);n[o]?n[o].p(a,r):(n[o]=xa(a),n[o].c(),n[o].m(e,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}},d(s){s&&S(e),Et(n,s)}}}function xa(i){let e,t=i[47]+"",n;return{c(){e=M("p"),n=pe(t),this.h()},l(s){e=E(s,"P",{class:!0});var r=O(e);n=de(r,t),r.forEach(S),this.h()},h(){R(e,"class","badge badge-danger svelte-jbi2uy")},m(s,r){ve(s,e,r),h(e,n)},p(s,r){r[0]&8&&t!==(t=s[47]+"")&&Ve(n,t)},d(s){s&&S(e)}}}function Ea(i){let e,t=nt(i[3].warnings),n=[];for(let s=0;s<t.length;s+=1)n[s]=Ma(la(i,t,s));return{c(){e=M("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=E(s,"DIV",{class:!0});var r=O(e);for(let o=0;o<n.length;o+=1)n[o].l(r);r.forEach(S),this.h()},h(){R(e,"class","warnings")},m(s,r){ve(s,e,r);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(e,null)},p(s,r){if(r[0]&8){t=nt(s[3].warnings);let o;for(o=0;o<t.length;o+=1){const a=la(s,t,o);n[o]?n[o].p(a,r):(n[o]=Ma(a),n[o].c(),n[o].m(e,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}},d(s){s&&S(e),Et(n,s)}}}function Ma(i){let e,t=i[44]+"",n;return{c(){e=M("p"),n=pe(t),this.h()},l(s){e=E(s,"P",{class:!0});var r=O(e);n=de(r,t),r.forEach(S),this.h()},h(){R(e,"class","badge badge-warning svelte-jbi2uy")},m(s,r){ve(s,e,r),h(e,n)},p(s,r){r[0]&8&&t!==(t=s[44]+"")&&Ve(n,t)},d(s){s&&S(e)}}}function Sa(i){let e,t,n,s,r=i[7].hole_id+"",o,a,c,l,u,f="孔号",d,g,v,_,m,p="高程(m)",x,b,A,C,T,w,L="经度",F,y,U,Y,Q,k="纬度",X,W,J,ee,se="分层信息",ue,ce,le,he,z="<tr><th>层号</th> <th>层顶(m)</th> <th>层底(m)</th> <th>岩性</th> <th>标贯N</th></tr>",K,re,D,I,Ee,Me="取消",Re,j,Ae="保存",Se,Ne,oe=nt(i[7].layers),ie=[];for(let ge=0;ge<oe.length;ge+=1)ie[ge]=ya(aa(i,oe,ge));return{c(){e=M("div"),t=M("div"),n=M("h3"),s=pe("编辑钻孔 - "),o=pe(r),a=H(),c=M("div"),l=M("div"),u=M("label"),u.textContent=f,d=H(),g=M("input"),v=H(),_=M("div"),m=M("label"),m.textContent=p,x=H(),b=M("input"),A=H(),C=M("div"),T=M("div"),w=M("label"),w.textContent=L,F=H(),y=M("input"),U=H(),Y=M("div"),Q=M("label"),Q.textContent=k,X=H(),W=M("input"),J=H(),ee=M("h4"),ee.textContent=se,ue=H(),ce=M("div"),le=M("table"),he=M("thead"),he.innerHTML=z,K=H(),re=M("tbody");for(let ge=0;ge<ie.length;ge+=1)ie[ge].c();D=H(),I=M("div"),Ee=M("button"),Ee.textContent=Me,Re=H(),j=M("button"),j.textContent=Ae,this.h()},l(ge){e=E(ge,"DIV",{class:!0});var B=O(e);t=E(B,"DIV",{class:!0,style:!0});var P=O(t);n=E(P,"H3",{});var xe=O(n);s=de(xe,"编辑钻孔 - "),o=de(xe,r),xe.forEach(S),a=V(P),c=E(P,"DIV",{class:!0,style:!0});var te=O(c);l=E(te,"DIV",{class:!0});var N=O(l);u=E(N,"LABEL",{"data-svelte-h":!0}),Pe(u)!=="svelte-natzrr"&&(u.textContent=f),d=V(N),g=E(N,"INPUT",{type:!0}),N.forEach(S),v=V(te),_=E(te,"DIV",{class:!0});var Z=O(_);m=E(Z,"LABEL",{"data-svelte-h":!0}),Pe(m)!=="svelte-1xtfx5p"&&(m.textContent=p),x=V(Z),b=E(Z,"INPUT",{type:!0,step:!0}),Z.forEach(S),te.forEach(S),A=V(P),C=E(P,"DIV",{class:!0,style:!0});var me=O(C);T=E(me,"DIV",{class:!0});var _e=O(T);w=E(_e,"LABEL",{"data-svelte-h":!0}),Pe(w)!=="svelte-ndgehb"&&(w.textContent=L),F=V(_e),y=E(_e,"INPUT",{type:!0,step:!0}),_e.forEach(S),U=V(me),Y=E(me,"DIV",{class:!0});var $=O(Y);Q=E($,"LABEL",{"data-svelte-h":!0}),Pe(Q)!=="svelte-h6t6m2"&&(Q.textContent=k),X=V($),W=E($,"INPUT",{type:!0,step:!0}),$.forEach(S),me.forEach(S),J=V(P),ee=E(P,"H4",{style:!0,"data-svelte-h":!0}),Pe(ee)!=="svelte-ltk5jk"&&(ee.textContent=se),ue=V(P),ce=E(P,"DIV",{class:!0});var ae=O(ce);le=E(ae,"TABLE",{});var be=O(le);he=E(be,"THEAD",{"data-svelte-h":!0}),Pe(he)!=="svelte-qllypy"&&(he.innerHTML=z),K=V(be),re=E(be,"TBODY",{});var ye=O(re);for(let Ce=0;Ce<ie.length;Ce+=1)ie[Ce].l(ye);ye.forEach(S),be.forEach(S),ae.forEach(S),D=V(P),I=E(P,"DIV",{class:!0});var Te=O(I);Ee=E(Te,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(Ee)!=="svelte-1xgwxe6"&&(Ee.textContent=Me),Re=V(Te),j=E(Te,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(j)!=="svelte-1qz0hu8"&&(j.textContent=Ae),Te.forEach(S),P.forEach(S),B.forEach(S),this.h()},h(){R(g,"type","text"),R(l,"class","form-group"),R(b,"type","number"),R(b,"step","0.01"),R(_,"class","form-group"),R(c,"class","form-row"),fe(c,"margin-bottom","12px"),R(y,"type","number"),R(y,"step","0.000001"),R(T,"class","form-group"),R(W,"type","number"),R(W,"step","0.000001"),R(Y,"class","form-group"),R(C,"class","form-row"),fe(C,"margin-bottom","12px"),fe(ee,"margin","12px 0 8px"),fe(ee,"font-size","13px"),R(ce,"class","layers-table svelte-jbi2uy"),R(Ee,"class","btn-secondary"),R(j,"class","btn-primary"),R(I,"class","modal-actions"),R(t,"class","modal"),fe(t,"min-width","600px"),R(e,"class","modal-overlay")},m(ge,B){ve(ge,e,B),h(e,t),h(t,n),h(n,s),h(n,o),h(t,a),h(t,c),h(c,l),h(l,u),h(l,d),h(l,g),Ke(g,i[7].hole_id),h(c,v),h(c,_),h(_,m),h(_,x),h(_,b),Ke(b,i[7].elevation),h(t,A),h(t,C),h(C,T),h(T,w),h(T,F),h(T,y),Ke(y,i[7].longitude),h(C,U),h(C,Y),h(Y,Q),h(Y,X),h(Y,W),Ke(W,i[7].latitude),h(t,J),h(t,ee),h(t,ue),h(t,ce),h(ce,le),h(le,he),h(le,K),h(le,re);for(let P=0;P<ie.length;P+=1)ie[P]&&ie[P].m(re,null);h(t,D),h(t,I),h(I,Ee),h(I,Re),h(I,j),Se||(Ne=[ze(g,"input",i[28]),ze(b,"input",i[29]),ze(y,"input",i[30]),ze(W,"input",i[31]),ze(Ee,"click",i[36]),ze(j,"click",i[13]),ze(e,"click",Us(i[37]))],Se=!0)},p(ge,B){if(B[0]&128&&r!==(r=ge[7].hole_id+"")&&Ve(o,r),B[0]&128&&g.value!==ge[7].hole_id&&Ke(g,ge[7].hole_id),B[0]&128&&lt(b.value)!==ge[7].elevation&&Ke(b,ge[7].elevation),B[0]&128&&lt(y.value)!==ge[7].longitude&&Ke(y,ge[7].longitude),B[0]&128&&lt(W.value)!==ge[7].latitude&&Ke(W,ge[7].latitude),B[0]&128){oe=nt(ge[7].layers);let P;for(P=0;P<oe.length;P+=1){const xe=aa(ge,oe,P);ie[P]?ie[P].p(xe,B):(ie[P]=ya(xe),ie[P].c(),ie[P].m(re,null))}for(;P<ie.length;P+=1)ie[P].d(1);ie.length=oe.length}},d(ge){ge&&S(e),Et(ie,ge),Se=!1,Ct(Ne)}}}function ya(i){let e,t,n=i[41].layer_no+"",s,r,o,a,c,l,u,f,d,g,v,_,m,p,x,b;function A(){i[32].call(a,i[42],i[43])}function C(){i[33].call(u,i[42],i[43])}function T(){i[34].call(g,i[42],i[43])}function w(){i[35].call(m,i[42],i[43])}return{c(){e=M("tr"),t=M("td"),s=pe(n),r=H(),o=M("td"),a=M("input"),c=H(),l=M("td"),u=M("input"),f=H(),d=M("td"),g=M("input"),v=H(),_=M("td"),m=M("input"),p=H(),this.h()},l(L){e=E(L,"TR",{});var F=O(e);t=E(F,"TD",{});var y=O(t);s=de(y,n),y.forEach(S),r=V(F),o=E(F,"TD",{});var U=O(o);a=E(U,"INPUT",{type:!0,step:!0,style:!0,class:!0}),U.forEach(S),c=V(F),l=E(F,"TD",{});var Y=O(l);u=E(Y,"INPUT",{type:!0,step:!0,style:!0,class:!0}),Y.forEach(S),f=V(F),d=E(F,"TD",{});var Q=O(d);g=E(Q,"INPUT",{type:!0,style:!0,class:!0}),Q.forEach(S),v=V(F),_=E(F,"TD",{});var k=O(_);m=E(k,"INPUT",{type:!0,step:!0,style:!0,class:!0}),k.forEach(S),p=V(F),F.forEach(S),this.h()},h(){R(a,"type","number"),R(a,"step","0.1"),fe(a,"width","70px"),R(a,"class","svelte-jbi2uy"),R(u,"type","number"),R(u,"step","0.1"),fe(u,"width","70px"),R(u,"class","svelte-jbi2uy"),R(g,"type","text"),fe(g,"width","100px"),R(g,"class","svelte-jbi2uy"),R(m,"type","number"),R(m,"step","0.1"),fe(m,"width","60px"),R(m,"class","svelte-jbi2uy")},m(L,F){ve(L,e,F),h(e,t),h(t,s),h(e,r),h(e,o),h(o,a),Ke(a,i[41].top_depth),h(e,c),h(e,l),h(l,u),Ke(u,i[41].bottom_depth),h(e,f),h(e,d),h(d,g),Ke(g,i[41].lithology_name),h(e,v),h(e,_),h(_,m),Ke(m,i[41].spt_n),h(e,p),x||(b=[ze(a,"input",A),ze(u,"input",C),ze(g,"input",T),ze(m,"input",w)],x=!0)},p(L,F){i=L,F[0]&128&&n!==(n=i[41].layer_no+"")&&Ve(s,n),F[0]&128&&lt(a.value)!==i[41].top_depth&&Ke(a,i[41].top_depth),F[0]&128&&lt(u.value)!==i[41].bottom_depth&&Ke(u,i[41].bottom_depth),F[0]&128&&g.value!==i[41].lithology_name&&Ke(g,i[41].lithology_name),F[0]&128&&lt(m.value)!==i[41].spt_n&&Ke(m,i[41].spt_n)},d(L){L&&S(e),x=!1,Ct(b)}}}function _f(i){let e,t,n="钻孔数据管理",s,r,o,a="导入CSV",c,l,u=i[4]?"隐藏":"颜色",f,d,g,v,_,m,p,x,b,A=i[4]&&da(i);function C(y,U){return y[9].length===0?mf:pf}let T=C(i),w=T(i),L=i[0]&&ga(i),F=i[7]&&Sa(i);return{c(){e=M("div"),t=M("h3"),t.textContent=n,s=H(),r=M("div"),o=M("button"),o.textContent=a,c=H(),l=M("button"),f=pe(u),d=H(),g=M("div"),A&&A.c(),v=H(),w.c(),_=H(),L&&L.c(),m=H(),F&&F.c(),p=It(),this.h()},l(y){e=E(y,"DIV",{class:!0});var U=O(e);t=E(U,"H3",{"data-svelte-h":!0}),Pe(t)!=="svelte-1xeck8m"&&(t.textContent=n),s=V(U),r=E(U,"DIV",{style:!0});var Y=O(r);o=E(Y,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(o)!=="svelte-vemyzj"&&(o.textContent=a),c=V(Y),l=E(Y,"BUTTON",{class:!0});var Q=O(l);f=de(Q,u),Q.forEach(S),Y.forEach(S),U.forEach(S),d=V(y),g=E(y,"DIV",{class:!0});var k=O(g);A&&A.l(k),v=V(k),w.l(k),k.forEach(S),_=V(y),L&&L.l(y),m=V(y),F&&F.l(y),p=It(),this.h()},h(){R(o,"class","btn-primary btn-sm"),R(l,"class","btn-secondary btn-sm"),fe(r,"display","flex"),fe(r,"gap","6px"),R(e,"class","panel-header"),R(g,"class","panel-body scrollable")},m(y,U){ve(y,e,U),h(e,t),h(e,s),h(e,r),h(r,o),h(r,c),h(r,l),h(l,f),ve(y,d,U),ve(y,g,U),A&&A.m(g,null),h(g,v),w.m(g,null),ve(y,_,U),L&&L.m(y,U),ve(y,m,U),F&&F.m(y,U),ve(y,p,U),x||(b=[ze(o,"click",i[17]),ze(l,"click",i[18])],x=!0)},p(y,U){U[0]&16&&u!==(u=y[4]?"隐藏":"颜色")&&Ve(f,u),y[4]?A?A.p(y,U):(A=da(y),A.c(),A.m(g,v)):A&&(A.d(1),A=null),T===(T=C(y))&&w?w.p(y,U):(w.d(1),w=T(y),w&&(w.c(),w.m(g,null))),y[0]?L?L.p(y,U):(L=ga(y),L.c(),L.m(m.parentNode,m)):L&&(L.d(1),L=null),y[7]?F?F.p(y,U):(F=Sa(y),F.c(),F.m(p.parentNode,p)):F&&(F.d(1),F=null)},i:yt,o:yt,d(y){y&&(S(e),S(d),S(g),S(_),S(m),S(p)),A&&A.d(),w.d(),L&&L.d(y),F&&F.d(y),x=!1,Ct(b)}}}function gf(i,e,t){let n,s,r,o,a,c;Je(i,Bn,D=>t(38,n=D)),Je(i,dr,D=>t(6,s=D)),Je(i,yn,D=>t(7,r=D)),Je(i,cs,D=>t(16,o=D)),Je(i,ti,D=>t(8,a=D)),Je(i,Gn,D=>t(9,c=D));let l=!1,u=null,f=!1,d=null,g=!1,v={};async function _(){if(n)try{st(Gn,c=await ht.get(`/projects/${n.id}/boreholes`),c),st(ti,a=await ht.get(`/projects/${n.id}/lithology-types`),a);try{st(cs,o=await ht.getWaterLevels(n.id),o)}catch{}}catch(D){$e(`刷新失败: ${D.message}`,"error")}}async function m(){if(!(!u||!n)){t(2,f=!0);try{const D=await ht.uploadCsv(n.id,u);t(3,d=D),$e(`成功导入 ${D.imported} 个钻孔`,"success"),D.errors.length>0&&$e(`有 ${D.errors.length} 个错误`,"warning"),D.warnings.length>0&&D.warnings.forEach(I=>$e(I,"warning")),await _()}catch(D){$e(`导入失败: ${D.message}`,"error")}finally{t(2,f=!1)}}}async function p(D){if(confirm("确定删除此钻孔？"))try{await ht.delete(`/projects/${n.id}/boreholes/${D}`),$e("钻孔已删除","info"),await _()}catch(I){$e(`删除失败: ${I.message}`,"error")}}function x(D){st(yn,r=JSON.parse(JSON.stringify(D)),r)}async function b(){if(r)try{await ht.put(`/projects/${n.id}/boreholes/${r.id}`,r),$e("钻孔已更新","success"),st(yn,r=null,r),await _()}catch(D){$e(`更新失败: ${D.message}`,"error")}}function A(D){s.includes(D)?st(dr,s=s.filter(I=>I!==D),s):st(dr,s=[...s,D],s)}async function C(D){try{await ht.put(`/projects/${n.id}/lithology-types/${D.id}`,{color:D.color,layer_order:D.layer_order}),$e("颜色已更新","success")}catch(I){$e(`颜色更新失败: ${I.message}`,"error")}}const T=()=>t(0,l=!0),w=()=>t(4,g=!g);function L(D,I){D[I].color=this.value,ti.set(a)}const F=D=>C(D),y=D=>A(D.id),U=D=>x(D),Y=D=>p(D.id),Q=(D,I)=>I.name===D.lithology_name,k=D=>t(1,u=D.target.files[0]),X=()=>{t(0,l=!1),t(3,d=null)},W=()=>{t(0,l=!1),t(3,d=null)};function J(){r.hole_id=this.value,yn.set(r)}function ee(){r.elevation=lt(this.value),yn.set(r)}function se(){r.longitude=lt(this.value),yn.set(r)}function ue(){r.latitude=lt(this.value),yn.set(r)}function ce(D,I){D[I].top_depth=lt(this.value),yn.set(r)}function le(D,I){D[I].bottom_depth=lt(this.value),yn.set(r)}function he(D,I){D[I].lithology_name=this.value,yn.set(r)}function z(D,I){D[I].spt_n=lt(this.value),yn.set(r)}const K=()=>st(yn,r=null,r),re=()=>st(yn,r=null,r);return i.$$.update=()=>{if(i.$$.dirty[0]&65536){const D={};o.forEach(I=>{D[I.borehole_id]||(D[I.borehole_id]=[]),D[I.borehole_id].push(I)}),t(5,v=D)}},[l,u,f,d,g,v,s,r,a,c,m,p,x,b,A,C,o,T,w,L,F,y,U,Y,Q,k,X,W,J,ee,se,ue,ce,le,he,z,K,re]}class vf extends pn{constructor(e){super(),mn(this,e,gf,_f,dn,{},null,[-1,-1])}}function Ta(i,e,t){const n=i.slice();return n[40]=e[t],n}function wa(i,e,t){const n=i.slice();return n[43]=e[t],n[45]=t,n}function Aa(i,e,t){const n=i.slice();return n[46]=e[t],n}function Ca(i,e,t){const n=i.slice();return n[46]=e[t],n}function Ra(i,e,t){const n=i.slice();return n[46]=e[t],n}function Pa(i,e,t){const n=i.slice();return n[53]=e[t],n}function La(i){let e,t=i[53].hole_id+"",n;return{c(){e=M("span"),n=pe(t),this.h()},l(s){e=E(s,"SPAN",{class:!0});var r=O(e);n=de(r,t),r.forEach(S),this.h()},h(){R(e,"class","badge badge-info")},m(s,r){ve(s,e,r),h(e,n)},p(s,r){r[0]&6144&&t!==(t=s[53].hole_id+"")&&Ve(n,t)},d(s){s&&S(e)}}}function Da(i){let e,t="请在钻孔管理中选择2个以上钻孔";return{c(){e=M("span"),e.textContent=t,this.h()},l(n){e=E(n,"SPAN",{style:!0,"data-svelte-h":!0}),Pe(e)!=="svelte-1k8zcgx"&&(e.textContent=t),this.h()},h(){fe(e,"font-size","11px"),fe(e,"color","var(--text-muted)")},m(n,s){ve(n,e,s)},d(n){n&&S(e)}}}function Ia(i){let e,t,n="剖面列表",s,r=nt(i[10]),o=[];for(let a=0;a<r.length;a+=1)o[a]=Na(Ra(i,r,a));return{c(){e=M("div"),t=M("h4"),t.textContent=n,s=H();for(let a=0;a<o.length;a+=1)o[a].c();this.h()},l(a){e=E(a,"DIV",{class:!0});var c=O(e);t=E(c,"H4",{style:!0,"data-svelte-h":!0}),Pe(t)!=="svelte-dgmf3y"&&(t.textContent=n),s=V(c);for(let l=0;l<o.length;l+=1)o[l].l(c);c.forEach(S),this.h()},h(){fe(t,"font-size","13px"),fe(t,"margin-bottom","8px"),R(e,"class","profile-list")},m(a,c){ve(a,e,c),h(e,t),h(e,s);for(let l=0;l<o.length;l+=1)o[l]&&o[l].m(e,null)},p(a,c){if(c[0]&33824){r=nt(a[10]);let l;for(l=0;l<r.length;l+=1){const u=Ra(a,r,l);o[l]?o[l].p(u,c):(o[l]=Na(u),o[l].c(),o[l].m(e,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=r.length}},d(a){a&&S(e),Et(o,a)}}}function Na(i){let e,t,n=i[46].name+"",s,r,o,a=i[46].interpolation_method+"",c,l,u,f;function d(){return i[24](i[46])}return{c(){e=M("div"),t=M("span"),s=pe(n),r=H(),o=M("span"),c=pe(a),l=H(),this.h()},l(g){e=E(g,"DIV",{class:!0});var v=O(e);t=E(v,"SPAN",{});var _=O(t);s=de(_,n),_.forEach(S),r=V(v),o=E(v,"SPAN",{class:!0});var m=O(o);c=de(m,a),m.forEach(S),l=V(v),v.forEach(S),this.h()},h(){R(o,"class","badge badge-info"),R(e,"class","profile-item svelte-1h3xo7h"),Kt(e,"active",i[5]===i[46].id)},m(g,v){ve(g,e,v),h(e,t),h(t,s),h(e,r),h(e,o),h(o,c),h(e,l),u||(f=ze(e,"click",d),u=!0)},p(g,v){i=g,v[0]&1024&&n!==(n=i[46].name+"")&&Ve(s,n),v[0]&1024&&a!==(a=i[46].interpolation_method+"")&&Ve(c,a),v[0]&1056&&Kt(e,"active",i[5]===i[46].id)},d(g){g&&S(e),u=!1,f()}}}function Ua(i){let e,t,n="左剖面",s,r,o,a="选择剖面",c,l,u,f="右剖面",d,g,v,_="选择剖面",m,p,x=nt(i[10]),b=[];for(let T=0;T<x.length;T+=1)b[T]=Fa(Ca(i,x,T));let A=nt(i[10]),C=[];for(let T=0;T<A.length;T+=1)C[T]=Oa(Aa(i,A,T));return{c(){e=M("div"),t=M("label"),t.textContent=n,s=H(),r=M("select"),o=M("option"),o.textContent=a;for(let T=0;T<b.length;T+=1)b[T].c();c=H(),l=M("div"),u=M("label"),u.textContent=f,d=H(),g=M("select"),v=M("option"),v.textContent=_;for(let T=0;T<C.length;T+=1)C[T].c();this.h()},l(T){e=E(T,"DIV",{class:!0,style:!0});var w=O(e);t=E(w,"LABEL",{"data-svelte-h":!0}),Pe(t)!=="svelte-93im8q"&&(t.textContent=n),s=V(w),r=E(w,"SELECT",{});var L=O(r);o=E(L,"OPTION",{"data-svelte-h":!0}),Pe(o)!=="svelte-l2e5hj"&&(o.textContent=a);for(let U=0;U<b.length;U+=1)b[U].l(L);L.forEach(S),w.forEach(S),c=V(T),l=E(T,"DIV",{class:!0});var F=O(l);u=E(F,"LABEL",{"data-svelte-h":!0}),Pe(u)!=="svelte-1soi0kp"&&(u.textContent=f),d=V(F),g=E(F,"SELECT",{});var y=O(g);v=E(y,"OPTION",{"data-svelte-h":!0}),Pe(v)!=="svelte-l2e5hj"&&(v.textContent=_);for(let U=0;U<C.length;U+=1)C[U].l(y);y.forEach(S),F.forEach(S),this.h()},h(){o.__value=null,Ke(o,o.__value),i[2]===void 0&&fn(()=>i[25].call(r)),R(e,"class","form-group"),fe(e,"margin-top","8px"),v.__value=null,Ke(v,v.__value),i[1]===void 0&&fn(()=>i[26].call(g)),R(l,"class","form-group")},m(T,w){ve(T,e,w),h(e,t),h(e,s),h(e,r),h(r,o);for(let L=0;L<b.length;L+=1)b[L]&&b[L].m(r,null);Tt(r,i[2],!0),ve(T,c,w),ve(T,l,w),h(l,u),h(l,d),h(l,g),h(g,v);for(let L=0;L<C.length;L+=1)C[L]&&C[L].m(g,null);Tt(g,i[1],!0),m||(p=[ze(r,"change",i[25]),ze(g,"change",i[26])],m=!0)},p(T,w){if(w[0]&1024){x=nt(T[10]);let L;for(L=0;L<x.length;L+=1){const F=Ca(T,x,L);b[L]?b[L].p(F,w):(b[L]=Fa(F),b[L].c(),b[L].m(r,null))}for(;L<b.length;L+=1)b[L].d(1);b.length=x.length}if(w[0]&1028&&Tt(r,T[2]),w[0]&1024){A=nt(T[10]);let L;for(L=0;L<A.length;L+=1){const F=Aa(T,A,L);C[L]?C[L].p(F,w):(C[L]=Oa(F),C[L].c(),C[L].m(g,null))}for(;L<C.length;L+=1)C[L].d(1);C.length=A.length}w[0]&1026&&Tt(g,T[1])},d(T){T&&(S(e),S(c),S(l)),Et(b,T),Et(C,T),m=!1,Ct(p)}}}function Fa(i){let e,t=i[46].name+"",n,s;return{c(){e=M("option"),n=pe(t),this.h()},l(r){e=E(r,"OPTION",{});var o=O(e);n=de(o,t),o.forEach(S),this.h()},h(){e.__value=s=i[46].id,Ke(e,e.__value)},m(r,o){ve(r,e,o),h(e,n)},p(r,o){o[0]&1024&&t!==(t=r[46].name+"")&&Ve(n,t),o[0]&1024&&s!==(s=r[46].id)&&(e.__value=s,Ke(e,e.__value))},d(r){r&&S(e)}}}function Oa(i){let e,t=i[46].name+"",n,s;return{c(){e=M("option"),n=pe(t),this.h()},l(r){e=E(r,"OPTION",{});var o=O(e);n=de(o,t),o.forEach(S),this.h()},h(){e.__value=s=i[46].id,Ke(e,e.__value)},m(r,o){ve(r,e,o),h(e,n)},p(r,o){o[0]&1024&&t!==(t=r[46].name+"")&&Ve(n,t),o[0]&1024&&s!==(s=r[46].id)&&(e.__value=s,Ke(e,e.__value))},d(r){r&&S(e)}}}function ka(i){var re;let e,t,n,s="剖面图预览",r,o,a,c,l,u,f,d="标注管理",g,v,_,m,p="添加文字标注",x,b,A,C,T,w,L="X (距离m)",F,y,U,Y,Q,k="Y (高程m)",X,W,J,ee,se="添加标注",ue,ce,le=((re=i[6].lithologies)==null?void 0:re.length)>0&&Ba(i);function he(D,I){return D[7].length>0?xf:bf}let z=he(i),K=z(i);return{c(){e=M("hr"),t=H(),n=M("h4"),n.textContent=s,r=H(),o=M("div"),a=M("canvas"),c=H(),le&&le.c(),l=H(),u=M("div"),f=M("h4"),f.textContent=d,g=H(),K.c(),v=H(),_=M("div"),m=M("label"),m.textContent=p,x=H(),b=M("input"),A=H(),C=M("div"),T=M("div"),w=M("label"),w.textContent=L,F=H(),y=M("input"),U=H(),Y=M("div"),Q=M("label"),Q.textContent=k,X=H(),W=M("input"),J=H(),ee=M("button"),ee.textContent=se,this.h()},l(D){e=E(D,"HR",{style:!0}),t=V(D),n=E(D,"H4",{style:!0,"data-svelte-h":!0}),Pe(n)!=="svelte-1vo8psn"&&(n.textContent=s),r=V(D),o=E(D,"DIV",{class:!0});var I=O(o);a=E(I,"CANVAS",{id:!0,width:!0,height:!0}),O(a).forEach(S),I.forEach(S),c=V(D),le&&le.l(D),l=V(D),u=E(D,"DIV",{class:!0});var Ee=O(u);f=E(Ee,"H4",{style:!0,"data-svelte-h":!0}),Pe(f)!=="svelte-4x8l83"&&(f.textContent=d),g=V(Ee),K.l(Ee),v=V(Ee),_=E(Ee,"DIV",{class:!0,style:!0});var Me=O(_);m=E(Me,"LABEL",{"data-svelte-h":!0}),Pe(m)!=="svelte-dpqsoy"&&(m.textContent=p),x=V(Me),b=E(Me,"INPUT",{type:!0,placeholder:!0}),Me.forEach(S),A=V(Ee),C=E(Ee,"DIV",{class:!0});var Re=O(C);T=E(Re,"DIV",{class:!0});var j=O(T);w=E(j,"LABEL",{"data-svelte-h":!0}),Pe(w)!=="svelte-130i8ji"&&(w.textContent=L),F=V(j),y=E(j,"INPUT",{type:!0}),j.forEach(S),U=V(Re),Y=E(Re,"DIV",{class:!0});var Ae=O(Y);Q=E(Ae,"LABEL",{"data-svelte-h":!0}),Pe(Q)!=="svelte-xhi5gk"&&(Q.textContent=k),X=V(Ae),W=E(Ae,"INPUT",{type:!0}),Ae.forEach(S),Re.forEach(S),J=V(Ee),ee=E(Ee,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),Pe(ee)!=="svelte-jb8zg8"&&(ee.textContent=se),Ee.forEach(S),this.h()},h(){fe(e,"border-color","var(--border)"),fe(e,"margin","12px 0"),fe(n,"font-size","13px"),fe(n,"margin-bottom","8px"),R(a,"id","profileCanvas"),R(a,"width","340"),R(a,"height","280"),R(o,"class","profile-preview svelte-1h3xo7h"),fe(f,"font-size","13px"),fe(f,"margin","8px 0"),R(b,"type","text"),R(b,"placeholder","标注内容"),R(_,"class","form-group"),fe(_,"margin-top","8px"),R(y,"type","number"),R(T,"class","form-group"),R(W,"type","number"),R(Y,"class","form-group"),R(C,"class","form-row"),R(ee,"class","btn-secondary btn-sm"),fe(ee,"width","100%"),R(u,"class","annotation-section svelte-1h3xo7h")},m(D,I){ve(D,e,I),ve(D,t,I),ve(D,n,I),ve(D,r,I),ve(D,o,I),h(o,a),i[27](a),ve(D,c,I),le&&le.m(D,I),ve(D,l,I),ve(D,u,I),h(u,f),h(u,g),K.m(u,null),h(u,v),h(u,_),h(_,m),h(_,x),h(_,b),Ke(b,i[8].text_content),h(u,A),h(u,C),h(C,T),h(T,w),h(T,F),h(T,y),Ke(y,i[8].x),h(C,U),h(C,Y),h(Y,Q),h(Y,X),h(Y,W),Ke(W,i[8].y),h(u,J),h(u,ee),ue||(ce=[ze(b,"input",i[29]),ze(y,"input",i[30]),ze(W,"input",i[31]),ze(ee,"click",i[16])],ue=!0)},p(D,I){var Ee;((Ee=D[6].lithologies)==null?void 0:Ee.length)>0?le?le.p(D,I):(le=Ba(D),le.c(),le.m(l.parentNode,l)):le&&(le.d(1),le=null),z===(z=he(D))&&K?K.p(D,I):(K.d(1),K=z(D),K&&(K.c(),K.m(u,v))),I[0]&256&&b.value!==D[8].text_content&&Ke(b,D[8].text_content),I[0]&256&&lt(y.value)!==D[8].x&&Ke(y,D[8].x),I[0]&256&&lt(W.value)!==D[8].y&&Ke(W,D[8].y)},d(D){D&&(S(e),S(t),S(n),S(r),S(o),S(c),S(l),S(u)),i[27](null),le&&le.d(D),K.d(),ue=!1,Ct(ce)}}}function Ba(i){let e,t,n="图例",s,r,o=nt(i[6].lithologies),a=[];for(let c=0;c<o.length;c+=1)a[c]=za(wa(i,o,c));return{c(){e=M("div"),t=M("h5"),t.textContent=n,s=H(),r=M("div");for(let c=0;c<a.length;c+=1)a[c].c();this.h()},l(c){e=E(c,"DIV",{class:!0});var l=O(e);t=E(l,"H5",{style:!0,"data-svelte-h":!0}),Pe(t)!=="svelte-1b0yqne"&&(t.textContent=n),s=V(l),r=E(l,"DIV",{class:!0});var u=O(r);for(let f=0;f<a.length;f+=1)a[f].l(u);u.forEach(S),l.forEach(S),this.h()},h(){fe(t,"font-size","11px"),fe(t,"margin","8px 0 4px"),fe(t,"color","var(--text-secondary)"),R(r,"class","legend-list svelte-1h3xo7h"),R(e,"class","legend-box svelte-1h3xo7h")},m(c,l){ve(c,e,l),h(e,t),h(e,s),h(e,r);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(r,null)},p(c,l){if(l[0]&8256){o=nt(c[6].lithologies);let u;for(u=0;u<o.length;u+=1){const f=wa(c,o,u);a[u]?a[u].p(f,l):(a[u]=za(f),a[u].c(),a[u].m(r,null))}for(;u<a.length;u+=1)a[u].d(1);a.length=o.length}},d(c){c&&S(e),Et(a,c)}}}function za(i){let e,t,n,s,r=i[43]+"",o,a;return{c(){e=M("div"),t=M("span"),n=H(),s=M("span"),o=pe(r),a=H(),this.h()},l(c){e=E(c,"DIV",{class:!0});var l=O(e);t=E(l,"SPAN",{class:!0,style:!0}),O(t).forEach(S),n=V(l),s=E(l,"SPAN",{style:!0});var u=O(s);o=de(u,r),u.forEach(S),a=V(l),l.forEach(S),this.h()},h(){R(t,"class","color-swatch"),fe(t,"background",i[13](i[43],i[45])),fe(s,"font-size","11px"),R(e,"class","legend-item svelte-1h3xo7h")},m(c,l){ve(c,e,l),h(e,t),h(e,n),h(e,s),h(s,o),h(e,a)},p(c,l){l[0]&64&&fe(t,"background",c[13](c[43],c[45])),l[0]&64&&r!==(r=c[43]+"")&&Ve(o,r)},d(c){c&&S(e)}}}function bf(i){let e,t="暂无标注";return{c(){e=M("p"),e.textContent=t,this.h()},l(n){e=E(n,"P",{style:!0,"data-svelte-h":!0}),Pe(e)!=="svelte-191p6fb"&&(e.textContent=t),this.h()},h(){fe(e,"font-size","11px"),fe(e,"color","var(--text-muted)"),fe(e,"margin-bottom","6px")},m(n,s){ve(n,e,s)},p:yt,d(n){n&&S(e)}}}function xf(i){let e,t=nt(i[7]),n=[];for(let s=0;s<t.length;s+=1)n[s]=Va(Ta(i,t,s));return{c(){for(let s=0;s<n.length;s+=1)n[s].c();e=It()},l(s){for(let r=0;r<n.length;r+=1)n[r].l(s);e=It()},m(s,r){for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(s,r);ve(s,e,r)},p(s,r){if(r[0]&131200){t=nt(s[7]);let o;for(o=0;o<t.length;o+=1){const a=Ta(s,t,o);n[o]?n[o].p(a,r):(n[o]=Va(a),n[o].c(),n[o].m(e.parentNode,e))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}},d(s){s&&S(e),Et(n,s)}}}function Va(i){let e,t,n=i[40].type==="text"?"📝":"➤",s,r,o=(i[40].text_content||`(${i[40].x}, ${i[40].y})`)+"",a,c,l,u="✕",f,d,g;function v(){return i[28](i[40])}return{c(){e=M("div"),t=M("span"),s=pe(n),r=H(),a=pe(o),c=H(),l=M("button"),l.textContent=u,f=H(),this.h()},l(_){e=E(_,"DIV",{class:!0});var m=O(e);t=E(m,"SPAN",{});var p=O(t);s=de(p,n),r=V(p),a=de(p,o),p.forEach(S),c=V(m),l=E(m,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(l)!=="svelte-8rblco"&&(l.textContent=u),f=V(m),m.forEach(S),this.h()},h(){R(l,"class","btn-danger btn-sm"),R(e,"class","ann-item svelte-1h3xo7h")},m(_,m){ve(_,e,m),h(e,t),h(t,s),h(t,r),h(t,a),h(e,c),h(e,l),h(e,f),d||(g=ze(l,"click",v),d=!0)},p(_,m){i=_,m[0]&128&&n!==(n=i[40].type==="text"?"📝":"➤")&&Ve(s,n),m[0]&128&&o!==(o=(i[40].text_content||`(${i[40].x}, ${i[40].y})`)+"")&&Ve(a,o)},d(_){_&&S(e),d=!1,g()}}}function Ef(i){let e,t,n="剖面分析",s,r,o,a,c,l,u,f,d,g,v,_,m,p="剖面名称",x,b,A,C,T,w="插值方式",L,F,y,U="线性插值",Y,Q="三次样条",k,X="Kriging地统计插值",W,J,ee,se,ue=i[11].length+"",ce,le,he,z,K,re,D,I="生成剖面",Ee,Me,Re,j,Ae,Se,Ne,oe,ie,ge,B,P,xe=nt(i[12].filter(i[23])),te=[];for(let $=0;$<xe.length;$+=1)te[$]=La(Pa(i,xe,$));let N=i[11].length<2&&Da(),Z=i[10].length>0&&Ia(i),me=i[0]&&Ua(i),_e=i[6]&&ka(i);return{c(){e=M("div"),t=M("h3"),t.textContent=n,s=H(),r=M("div"),o=M("button"),a=pe("PNG"),l=H(),u=M("button"),f=pe("SVG"),g=H(),v=M("div"),_=M("div"),m=M("label"),m.textContent=p,x=H(),b=M("input"),A=H(),C=M("div"),T=M("label"),T.textContent=w,L=H(),F=M("select"),y=M("option"),y.textContent=U,Y=M("option"),Y.textContent=Q,k=M("option"),k.textContent=X,W=H(),J=M("div"),ee=M("label"),se=pe("已选钻孔 ("),ce=pe(ue),le=pe(")"),he=H(),z=M("div");for(let $=0;$<te.length;$+=1)te[$].c();K=H(),N&&N.c(),re=H(),D=M("button"),D.textContent=I,Ee=H(),Z&&Z.c(),Me=H(),Re=M("hr"),j=H(),Ae=M("div"),Se=M("label"),Ne=M("input"),oe=pe(`
            剖面对比模式`),ie=H(),me&&me.c(),ge=H(),_e&&_e.c(),this.h()},l($){e=E($,"DIV",{class:!0});var ae=O(e);t=E(ae,"H3",{"data-svelte-h":!0}),Pe(t)!=="svelte-1tw5t1i"&&(t.textContent=n),s=V(ae),r=E(ae,"DIV",{style:!0});var be=O(r);o=E(be,"BUTTON",{class:!0});var ye=O(o);a=de(ye,"PNG"),ye.forEach(S),l=V(be),u=E(be,"BUTTON",{class:!0});var Te=O(u);f=de(Te,"SVG"),Te.forEach(S),be.forEach(S),ae.forEach(S),g=V($),v=E($,"DIV",{class:!0});var Ce=O(v);_=E(Ce,"DIV",{class:!0});var Ye=O(_);m=E(Ye,"LABEL",{"data-svelte-h":!0}),Pe(m)!=="svelte-aae5qr"&&(m.textContent=p),x=V(Ye),b=E(Ye,"INPUT",{type:!0,placeholder:!0}),Ye.forEach(S),A=V(Ce),C=E(Ce,"DIV",{class:!0});var Oe=O(C);T=E(Oe,"LABEL",{"data-svelte-h":!0}),Pe(T)!=="svelte-w2ab1e"&&(T.textContent=w),L=V(Oe),F=E(Oe,"SELECT",{});var Le=O(F);y=E(Le,"OPTION",{"data-svelte-h":!0}),Pe(y)!=="svelte-1acgaat"&&(y.textContent=U),Y=E(Le,"OPTION",{"data-svelte-h":!0}),Pe(Y)!=="svelte-b97obq"&&(Y.textContent=Q),k=E(Le,"OPTION",{"data-svelte-h":!0}),Pe(k)!=="svelte-m7cjkk"&&(k.textContent=X),Le.forEach(S),Oe.forEach(S),W=V(Ce),J=E(Ce,"DIV",{class:!0});var Be=O(J);ee=E(Be,"LABEL",{});var q=O(ee);se=de(q,"已选钻孔 ("),ce=de(q,ue),le=de(q,")"),q.forEach(S),he=V(Be),z=E(Be,"DIV",{class:!0});var ke=O(z);for(let G=0;G<te.length;G+=1)te[G].l(ke);K=V(ke),N&&N.l(ke),ke.forEach(S),Be.forEach(S),re=V(Ce),D=E(Ce,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),Pe(D)!=="svelte-18tzs37"&&(D.textContent=I),Ee=V(Ce),Z&&Z.l(Ce),Me=V(Ce),Re=E(Ce,"HR",{style:!0}),j=V(Ce),Ae=E(Ce,"DIV",{class:!0});var je=O(Ae);Se=E(je,"LABEL",{class:!0});var He=O(Se);Ne=E(He,"INPUT",{type:!0}),oe=de(He,`
            剖面对比模式`),He.forEach(S),ie=V(je),me&&me.l(je),je.forEach(S),ge=V(Ce),_e&&_e.l(Ce),Ce.forEach(S),this.h()},h(){R(o,"class","btn-secondary btn-sm"),o.disabled=c=!i[5],R(u,"class","btn-secondary btn-sm"),u.disabled=d=!i[5],fe(r,"display","flex"),fe(r,"gap","6px"),R(e,"class","panel-header"),R(b,"type","text"),R(b,"placeholder","输入剖面名称"),R(_,"class","form-group"),y.__value="linear",Ke(y,y.__value),Y.__value="cubic_spline",Ke(Y,Y.__value),k.__value="kriging",Ke(k,k.__value),i[4]===void 0&&fn(()=>i[22].call(F)),R(C,"class","form-group"),R(z,"class","selected-bhs svelte-1h3xo7h"),R(J,"class","form-group"),R(D,"class","btn-primary"),fe(D,"width","100%"),fe(D,"margin-bottom","12px"),fe(Re,"border-color","var(--border)"),fe(Re,"margin","12px 0"),R(Ne,"type","checkbox"),Ne.checked=i[0],R(Se,"class","checkbox-label"),R(Ae,"class","comparison-section svelte-1h3xo7h"),R(v,"class","panel-body scrollable")},m($,ae){ve($,e,ae),h(e,t),h(e,s),h(e,r),h(r,o),h(o,a),h(r,l),h(r,u),h(u,f),ve($,g,ae),ve($,v,ae),h(v,_),h(_,m),h(_,x),h(_,b),Ke(b,i[3]),h(v,A),h(v,C),h(C,T),h(C,L),h(C,F),h(F,y),h(F,Y),h(F,k),Tt(F,i[4],!0),h(v,W),h(v,J),h(J,ee),h(ee,se),h(ee,ce),h(ee,le),h(J,he),h(J,z);for(let be=0;be<te.length;be+=1)te[be]&&te[be].m(z,null);h(z,K),N&&N.m(z,null),h(v,re),h(v,D),h(v,Ee),Z&&Z.m(v,null),h(v,Me),h(v,Re),h(v,j),h(v,Ae),h(Ae,Se),h(Se,Ne),h(Se,oe),h(Ae,ie),me&&me.m(Ae,null),h(v,ge),_e&&_e.m(v,null),B||(P=[ze(o,"click",i[18]),ze(u,"click",i[19]),ze(b,"input",i[21]),ze(F,"change",i[22]),ze(D,"click",i[14]),ze(Ne,"change",i[20])],B=!0)},p($,ae){if(ae[0]&32&&c!==(c=!$[5])&&(o.disabled=c),ae[0]&32&&d!==(d=!$[5])&&(u.disabled=d),ae[0]&8&&b.value!==$[3]&&Ke(b,$[3]),ae[0]&16&&Tt(F,$[4]),ae[0]&2048&&ue!==(ue=$[11].length+"")&&Ve(ce,ue),ae[0]&6144){xe=nt($[12].filter($[23]));let be;for(be=0;be<xe.length;be+=1){const ye=Pa($,xe,be);te[be]?te[be].p(ye,ae):(te[be]=La(ye),te[be].c(),te[be].m(z,K))}for(;be<te.length;be+=1)te[be].d(1);te.length=xe.length}$[11].length<2?N||(N=Da(),N.c(),N.m(z,null)):N&&(N.d(1),N=null),$[10].length>0?Z?Z.p($,ae):(Z=Ia($),Z.c(),Z.m(v,Me)):Z&&(Z.d(1),Z=null),ae[0]&1&&(Ne.checked=$[0]),$[0]?me?me.p($,ae):(me=Ua($),me.c(),me.m(Ae,null)):me&&(me.d(1),me=null),$[6]?_e?_e.p($,ae):(_e=ka($),_e.c(),_e.m(v,null)):_e&&(_e.d(1),_e=null)},i:yt,o:yt,d($){$&&(S(e),S(g),S(v)),Et(te,$),N&&N.d(),Z&&Z.d(),me&&me.d(),_e&&_e.d(),B=!1,Ct(P)}}}function Mf(i,e,t){let n,s,r,o,a,c,l,u,f,d,g;Je(i,vr,D=>t(0,n=D)),Je(i,Qo,D=>t(1,s=D)),Je(i,Jo,D=>t(2,r=D)),Je(i,As,D=>t(32,o=D)),Je(i,ws,D=>t(33,a=D)),Je(i,gr,D=>t(34,c=D)),Je(i,Rs,D=>t(10,l=D)),Je(i,dr,D=>t(11,u=D)),Je(i,Bn,D=>t(35,f=D)),Je(i,ti,D=>t(36,d=D)),Je(i,Gn,D=>t(12,g=D));let v="",_="linear",m=null,p=null,x=[],b={type:"text",x:0,y:0,text_content:"",arrow_dx:0,arrow_dy:0},A=null;const C=["#E6B89C","#F0E68C","#CD853F","#8B7355","#A0522D","#DEB887","#D2B48C","#BDB76B","#BC8F8F","#C4A882","#9ACD32","#6B8E23","#556B2F","#8FBC8F","#2E8B57","#708090","#778899","#B0C4DE","#87CEEB","#4682B4"];function T(D,I=0){const Ee=d==null?void 0:d.find(Me=>Me.name===D);return Ee!=null&&Ee.color?Ee.color:C[I%C.length]}Sh(()=>{p&&A&&w()});function w(){if(!p||!A)return;const D=A.getContext("2d"),I=A.width,Ee=A.height,Me={top:30,right:20,bottom:40,left:60},Re=I-Me.left-Me.right,j=Ee-Me.top-Me.bottom;D.clearRect(0,0,I,Ee),D.fillStyle="#ffffff",D.fillRect(0,0,I,Ee);const Ae=p.columns,Se=p.connections,Ne=p.total_distance>0?p.total_distance:100;let oe=1/0,ie=-1/0;Ae.forEach(N=>{N.layers.forEach(Z=>{Z.top_elevation>ie&&(ie=Z.top_elevation),Z.bottom_elevation<oe&&(oe=Z.bottom_elevation)})}),oe===1/0&&(oe=0,ie=100);const ge=(ie-oe)*.1||10;oe-=ge,ie+=ge;const B=N=>Me.left+N/Ne*Re,P=N=>Me.top+(ie-N)/(ie-oe)*j;D.strokeStyle="#cccccc",D.lineWidth=.5;for(let N=Math.ceil(oe);N<=ie;N+=Math.max(5,Math.round((ie-oe)/8))){const Z=P(N);D.beginPath(),D.moveTo(Me.left,Z),D.lineTo(I-Me.right,Z),D.stroke(),D.fillStyle="#666",D.font="10px sans-serif",D.textAlign="right",D.textBaseline="middle",D.fillText(N.toFixed(0)+"m",Me.left-5,Z)}D.strokeStyle="#cccccc";const xe=Math.max(10,Math.round(Ne/8));for(let N=0;N<=Ne;N+=xe){const Z=B(N);D.beginPath(),D.moveTo(Z,Me.top),D.lineTo(Z,Ee-Me.bottom),D.stroke(),D.fillStyle="#666",D.font="10px sans-serif",D.textAlign="center",D.textBaseline="top",D.fillText(N.toFixed(0)+"m",Z,Ee-Me.bottom+5)}const te={};(p.lithologies||[]).forEach((N,Z)=>{te[N]=Z}),Se.forEach(N=>{const Z=T(N.lithology_name,te[N.lithology_name]||0),me=N.distances,_e=N.top_elevations,$=N.bottom_elevations;if(!(me.length<2)){D.fillStyle=Z,D.globalAlpha=.85,D.beginPath(),D.moveTo(B(me[0]),P(_e[0]));for(let ae=1;ae<me.length;ae++)D.lineTo(B(me[ae]),P(_e[ae]));for(let ae=me.length-1;ae>=0;ae--)D.lineTo(B(me[ae]),P($[ae]));D.closePath(),D.fill(),D.globalAlpha=1,D.strokeStyle="#333",D.lineWidth=.8,D.beginPath();for(let ae=0;ae<me.length;ae++)ae===0?D.moveTo(B(me[ae]),P(_e[ae])):D.lineTo(B(me[ae]),P(_e[ae]));D.stroke(),D.beginPath();for(let ae=0;ae<me.length;ae++)ae===0?D.moveTo(B(me[ae]),P($[ae])):D.lineTo(B(me[ae]),P($[ae]));D.stroke()}}),Ae.forEach(N=>{const Z=B(N.distance),me=Math.max(12,Re/Math.max(6,Ae.length+2));N.layers.forEach((_e,$)=>{const ae=T(_e.lithology_name,te[_e.lithology_name]||$),be=P(_e.top_elevation),ye=P(_e.bottom_elevation),Te=Math.max(2,ye-be);D.fillStyle=ae,D.globalAlpha=.95,D.fillRect(Z-me/2,be,me,Te),D.globalAlpha=1,D.strokeStyle="#000",D.lineWidth=1,D.strokeRect(Z-me/2,be,me,Te),D.fillStyle="#000",D.font="bold 10px sans-serif",D.textAlign="left",D.textBaseline="middle";const Ce=(be+ye)/2;D.fillText(`${_e.layer_no}  ${_e.thickness.toFixed(1)}m`,Z+me/2+4,Ce)}),D.fillStyle="#000",D.font="bold 11px sans-serif",D.textAlign="center",D.textBaseline="bottom",D.fillText(N.hole_id,Z,Me.top-6)}),D.strokeStyle="#000",D.lineWidth=1,D.strokeRect(Me.left,Me.top,Re,j),D.fillStyle="#333",D.font="12px sans-serif",D.textAlign="center",D.textBaseline="top",D.fillText("水平距离 (m)",I/2,Ee-14),D.save(),D.translate(14,Ee/2),D.rotate(-Math.PI/2),D.textAlign="center",D.textBaseline="middle",D.fillText("高程 (m)",0,0),D.restore()}async function L(){if(!f||u.length<2){$e("请至少选择2个钻孔","warning");return}if(!v.trim()){$e("请输入剖面名称","warning");return}try{const D=await ht.post(`/projects/${f.id}/profiles`,{name:v,borehole_ids:u,interpolation_method:_});st(Rs,l=[...l,D],l),t(3,v=""),$e("剖面线创建成功","success"),await F(D.id)}catch(D){$e(`创建失败: ${D.message}`,"error")}}async function F(D){t(5,m=D);try{t(6,p=await ht.get(`/projects/profiles/${D}/data`)),t(7,x=await ht.get(`/projects/profiles/${D}/annotations`)),st(gr,c=p,c),await To(),w()}catch(I){$e(`加载剖面数据失败: ${I.message}`,"error")}}async function y(){if(m)try{const D=await ht.post(`/projects/profiles/${m}/annotations`,b);t(7,x=[...x,D]),$e("标注已添加","success")}catch(D){$e(`添加标注失败: ${D.message}`,"error")}}async function U(D){try{await ht.delete(`/projects/profiles/annotations/${D}`),t(7,x=x.filter(I=>I.id!==D))}catch(I){$e(`删除标注失败: ${I.message}`,"error")}}async function Y(){if(m)try{await ht.downloadBlob(`/export/profile/${m}/png`,`profile_${m}.png`)}catch(D){$e(`导出PNG失败: ${D.message}`,"error")}}async function Q(){if(m)try{await ht.downloadBlob(`/export/profile/${m}/svg`,`profile_${m}.svg`)}catch(D){$e(`导出SVG失败: ${D.message}`,"error")}}async function k(D){const I=D==="left"?r:s;if(I)try{const Ee=await ht.get(`/projects/profiles/${I}/data`);D==="left"?st(ws,a=Ee,a):st(As,o=Ee,o)}catch(Ee){$e(`加载对比剖面失败: ${Ee.message}`,"error")}}async function X(){st(vr,n=!n,n),n?(r&&!a&&await k("left"),s&&!o&&await k("right")):(st(ws,a=null,a),st(As,o=null,o))}function W(){v=this.value,t(3,v)}function J(){_=hn(this),t(4,_)}const ee=D=>u.includes(D.id),se=D=>F(D.id);function ue(){r=hn(this),Jo.set(r)}function ce(){s=hn(this),Qo.set(s)}function le(D){ni[D?"unshift":"push"](()=>{A=D,t(9,A)})}const he=D=>U(D.id);function z(){b.text_content=this.value,t(8,b)}function K(){b.x=lt(this.value),t(8,b)}function re(){b.y=lt(this.value),t(8,b)}return i.$$.update=()=>{i.$$.dirty[0]&5&&r&&n&&k("left"),i.$$.dirty[0]&3&&s&&n&&k("right")},[n,s,r,v,_,m,p,x,b,A,l,u,g,T,L,F,y,U,Y,Q,X,W,J,ee,se,ue,ce,le,he,z,K,re]}class Sf extends pn{constructor(e){super(),mn(this,e,Mf,Ef,dn,{},null,[-1,-1])}}function yf(i){let e,t;return{c(){e=M("div"),t=M("canvas"),this.h()},l(n){e=E(n,"DIV",{class:!0});var s=O(e);t=E(s,"CANVAS",{id:!0,class:!0}),O(t).forEach(S),s.forEach(S),this.h()},h(){R(t,"id","mainProfileCanvas"),R(t,"class","svelte-1uozxjf"),R(e,"class","profile-canvas-container svelte-1uozxjf")},m(n,s){ve(n,e,s),h(e,t),i[5](t)},p:yt,i:yt,o:yt,d(n){n&&S(e),i[5](null)}}}function Tf(i){if(!i||i.length<2)return[];const e=i.map(r=>r.distance),t=[];for(let r=1;r<e.length;r++)t.push(e[r]-e[r-1]);const n=t.reduce((r,o)=>r+o,0)/t.length,s=[];for(let r=0;r<t.length;r++)t[r]>n*2&&s.push({leftCol:r,rightCol:r+1,leftDist:e[r],rightDist:e[r+1],spacing:t[r],avgSpacing:n});return s}function Ha(i,e,t,n,s,r,o,a,c){i.save(),i.beginPath(),i.moveTo(e,t),i.lineTo(a,c),i.lineTo(e,n),i.closePath(),i.clip(),i.strokeStyle="#555",i.lineWidth=.8;const l=6,u=Math.min(e,a),f=Math.max(e,a),d=Math.min(t,n,c),g=Math.max(t,n,c);for(let v=d;v<=g;v+=l)i.beginPath(),i.moveTo(u-5,v),i.lineTo(f+5,v+(f-u)*.5),i.stroke();i.restore(),i.save(),i.beginPath(),i.moveTo(a,c),i.lineTo(s,r),i.lineTo(s,o),i.closePath(),i.clip(),i.strokeStyle="#555",i.lineWidth=.8;for(let v=d;v<=g;v+=l)i.beginPath(),i.moveTo(u-5,v),i.lineTo(f+5,v+(f-u)*.5),i.stroke();i.restore()}function Ga(i){let e=1/0,t=-1/0;return i!=null&&i.columns?(i.columns.forEach(n=>{n.layers.forEach(s=>{s.top_elevation>t&&(t=s.top_elevation),s.bottom_elevation<e&&(e=s.bottom_elevation)})}),e===1/0&&(e=0,t=100),{min:e,max:t}):{min:0,max:100}}function wf(i,e,t){let n,s,r,o,a,c;Je(i,As,_=>t(1,n=_)),Je(i,ws,_=>t(2,s=_)),Je(i,vr,_=>t(3,r=_)),Je(i,gr,_=>t(4,o=_)),Je(i,wo,_=>t(6,a=_)),Je(i,ti,_=>t(7,c=_));let l=null;const u=["#E6B89C","#F0E68C","#CD853F","#8B7355","#A0522D","#DEB887","#D2B48C","#BDB76B","#BC8F8F","#C4A882","#9ACD32","#6B8E23","#556B2F","#8FBC8F","#2E8B57","#708090","#778899","#B0C4DE","#87CEEB","#4682B4"];function f(_,m=0){const p=c==null?void 0:c.find(x=>x.name===_);return p!=null&&p.color?p.color:u[m%u.length]}function d(_,m,p,x,b,A,C){var ce;const T={top:40,right:30,bottom:50,left:70},w=x-T.left-T.right,L=b-T.top-T.bottom,F=m.columns,y=m.connections;if(!F||F.length===0)return;const U=m.total_distance>0?m.total_distance:100;let Y=A,Q=C;if(Y===void 0||Q===void 0){Y=1/0,Q=-1/0,F.forEach(he=>{he.layers.forEach(z=>{z.top_elevation>Q&&(Q=z.top_elevation),z.bottom_elevation<Y&&(Y=z.bottom_elevation)})}),Y===1/0&&(Y=0,Q=100);const le=(Q-Y)*.1||10;Y-=le,Q+=le}const k=le=>p+T.left+le/U*w,X=le=>T.top+(Q-le)/(Q-Y)*L;_.strokeStyle="#dddddd",_.lineWidth=.5;const W=Math.max(5,Math.round((Q-Y)/10));for(let le=Math.ceil(Y/W)*W;le<=Q;le+=W){const he=X(le);_.beginPath(),_.moveTo(p+T.left,he),_.lineTo(p+x-T.right,he),_.stroke(),_.fillStyle="#888",_.font="11px sans-serif",_.textAlign="right",_.textBaseline="middle",_.fillText(le.toFixed(0)+"m",p+T.left-8,he)}_.strokeStyle="#dddddd";const J=Math.max(10,Math.round(U/10));for(let le=0;le<=U;le+=J){const he=k(le);_.beginPath(),_.moveTo(he,T.top),_.lineTo(he,b-T.bottom),_.stroke(),_.fillStyle="#888",_.font="11px sans-serif",_.textAlign="center",_.textBaseline="top",_.fillText(le.toFixed(0)+"m",he,b-T.bottom+8)}const ee={};(m.lithologies||[]).forEach((le,he)=>{ee[le]=he});const se={};F.forEach(le=>{se[le.hole_id]=new Set(le.layers.map(he=>he.lithology_name))});const ue=Tf(F);if(ue.length>0&&st(wo,a=ue,a),y.forEach(le=>{var Me,Re;const he=f(le.lithology_name,ee[le.lithology_name]||0),z=le.distances,K=le.top_elevations,re=le.bottom_elevations;if(z.length<2)return;let D=!1,I=-1,Ee=-1;if(F.length>=2)for(let j=0;j<F.length-1;j++){const Ae=(Me=se[F[j].hole_id])==null?void 0:Me.has(le.lithology_name),Se=(Re=se[F[j+1].hole_id])==null?void 0:Re.has(le.lithology_name);if(Ae&&!Se){D=!0,I=j,Ee=j+1;break}else if(!Ae&&Se){D=!0,I=j,Ee=j+1;break}}if(D){const j=F[I],Ae=F[Ee],Se=j.distance,Ne=Ae.distance,oe=j.layers.find(Te=>Te.lithology_name===le.lithology_name),ie=Ae.layers.find(Te=>Te.lithology_name===le.lithology_name),ge=(Se+Ne)/2,B=Ne-Se,P=30,xe=X(oe?oe.top_elevation:0),te=X(oe?oe.bottom_elevation:0),N=X(ie?ie.top_elevation:0),Z=X(ie?ie.bottom_elevation:0),me=k(ge),_e=oe?(X(oe.top_elevation)+X(oe.bottom_elevation))/2:(X(ie.top_elevation)+X(ie.bottom_elevation))/2;if(_.fillStyle=he,_.globalAlpha=.7,_.beginPath(),oe&&!ie){_.moveTo(k(Se),X(oe.top_elevation));for(let Te=1;Te<=P;Te++){const Ce=Te/P,Ye=Se+Ce*B,Oe=oe.top_elevation*(1-Ce)+(oe.top_elevation+oe.bottom_elevation)/2*Ce;oe.bottom_elevation*(1-Ce)+(oe.top_elevation+oe.bottom_elevation)/2*Ce,_.lineTo(k(Ye),X(Oe))}for(let Te=P;Te>=1;Te--){const Ce=Te/P,Ye=Se+Ce*B,Oe=oe.bottom_elevation*(1-Ce)+(oe.top_elevation+oe.bottom_elevation)/2*Ce;_.lineTo(k(Ye),X(Oe))}_.closePath(),_.fill(),_.globalAlpha=1,Ha(_,k(Se),X(oe.top_elevation),X(oe.bottom_elevation),k(Ne),N,Z,me,_e)}else if(!oe&&ie){_.moveTo(k(Ne),X(ie.top_elevation));for(let Te=P-1;Te>=0;Te--){const Ce=Te/P,Ye=ge+Ce*(Ne-ge),Oe=(ie.top_elevation+ie.bottom_elevation)/2*(1-Ce)+ie.top_elevation*Ce;(ie.top_elevation+ie.bottom_elevation)/2*(1-Ce)+ie.bottom_elevation*Ce,_.lineTo(k(Ye),X(Oe))}for(let Te=0;Te<P;Te++){const Ce=Te/P,Ye=ge+Ce*(Ne-ge),Oe=(ie.top_elevation+ie.bottom_elevation)/2*(1-Ce)+ie.bottom_elevation*Ce;_.lineTo(k(Ye),X(Oe))}_.closePath(),_.fill(),_.globalAlpha=1,Ha(_,k(Se),xe,te,k(Ne),X(ie.top_elevation),X(ie.bottom_elevation),me,_e)}const $=oe?Se:ge,ae=ie?Ne:ge,be=z.findIndex(Te=>Te>=$-1),ye=z.findIndex(Te=>Te>=ae+1);if(be>=0&&ye>be){_.fillStyle=he,_.globalAlpha=.85,_.beginPath(),_.moveTo(k(z[0]),X(K[0]));for(let Te=1;Te<be;Te++)_.lineTo(k(z[Te]),X(K[Te]));for(let Te=be-1;Te>=0;Te--)_.lineTo(k(z[Te]),X(re[Te]));_.closePath(),_.fill(),_.globalAlpha=1,_.strokeStyle="#444",_.lineWidth=1,_.beginPath();for(let Te=0;Te<be;Te++)Te===0?_.moveTo(k(z[Te]),X(K[Te])):_.lineTo(k(z[Te]),X(K[Te]));_.stroke(),_.beginPath();for(let Te=0;Te<be;Te++)Te===0?_.moveTo(k(z[Te]),X(re[Te])):_.lineTo(k(z[Te]),X(re[Te]));if(_.stroke(),ye<z.length){_.fillStyle=he,_.globalAlpha=.85,_.beginPath(),_.moveTo(k(z[ye]),X(K[ye]));for(let Te=ye+1;Te<z.length;Te++)_.lineTo(k(z[Te]),X(K[Te]));for(let Te=z.length-1;Te>=ye;Te--)_.lineTo(k(z[Te]),X(re[Te]));_.closePath(),_.fill(),_.globalAlpha=1,_.strokeStyle="#444",_.lineWidth=1,_.beginPath();for(let Te=ye;Te<z.length;Te++)Te===ye?_.moveTo(k(z[Te]),X(K[Te])):_.lineTo(k(z[Te]),X(K[Te]));_.stroke(),_.beginPath();for(let Te=ye;Te<z.length;Te++)Te===ye?_.moveTo(k(z[Te]),X(re[Te])):_.lineTo(k(z[Te]),X(re[Te]));_.stroke()}}}else{_.fillStyle=he,_.globalAlpha=.85,_.beginPath(),_.moveTo(k(z[0]),X(K[0]));for(let j=1;j<z.length;j++)_.lineTo(k(z[j]),X(K[j]));for(let j=z.length-1;j>=0;j--)_.lineTo(k(z[j]),X(re[j]));_.closePath(),_.fill(),_.globalAlpha=1,_.strokeStyle="#444",_.lineWidth=1,_.beginPath();for(let j=0;j<z.length;j++)j===0?_.moveTo(k(z[j]),X(K[j])):_.lineTo(k(z[j]),X(K[j]));_.stroke(),_.beginPath();for(let j=0;j<z.length;j++)j===0?_.moveTo(k(z[j]),X(re[j])):_.lineTo(k(z[j]),X(re[j]));_.stroke()}}),ue.forEach(le=>{const he=k(le.leftDist),z=k(le.rightDist),K=T.top+2;_.save(),_.setLineDash([6,4]),_.strokeStyle="#e03030",_.lineWidth=2,_.beginPath(),_.moveTo(he,K),_.lineTo(z,K),_.stroke(),_.restore(),_.fillStyle="#e03030",_.font="bold 10px sans-serif",_.textAlign="center",_.textBaseline="bottom",_.fillText("插值可信度低",(he+z)/2,K-2)}),F.forEach(le=>{const he=k(le.distance),z=Math.max(16,w/Math.max(8,F.length*2));le.layers.forEach((K,re)=>{const D=f(K.lithology_name,ee[K.lithology_name]||re),I=X(K.top_elevation),Ee=X(K.bottom_elevation),Me=Math.max(3,Ee-I);if(_.fillStyle=D,_.globalAlpha=.95,_.fillRect(he-z/2,I,z,Me),_.globalAlpha=1,_.strokeStyle="#000",_.lineWidth=1.5,_.strokeRect(he-z/2,I,z,Me),Me>14){_.fillStyle="#000",_.font="bold 11px sans-serif",_.textAlign="left",_.textBaseline="middle";const Re=(I+Ee)/2;_.fillText(`${K.layer_no}  ${K.thickness.toFixed(1)}m`,he+z/2+6,Re)}}),_.fillStyle="#000",_.font="bold 13px sans-serif",_.textAlign="center",_.textBaseline="bottom",_.fillText(le.hole_id,he,T.top-8),_.fillStyle="#666",_.font="10px sans-serif",_.textBaseline="top",_.fillText(`标高${le.elevation.toFixed(1)}m`,he,b-T.bottom+22)}),_.strokeStyle="#000",_.lineWidth=1.5,_.strokeRect(p+T.left,T.top,w,L),_.fillStyle="#333",_.font="13px sans-serif",_.textAlign="center",_.textBaseline="top",_.fillText("水平距离 (m)",p+x/2,b-18),_.save(),_.translate(p+16,b/2),_.rotate(-Math.PI/2),_.textAlign="center",_.textBaseline="middle",_.fillText("高程 (m)",0,0),_.restore(),((ce=m.lithologies)==null?void 0:ce.length)>0){const le=p+x-T.right-140,he=T.top+10;_.fillStyle="rgba(255,255,255,0.92)",_.fillRect(le-8,he-6,148,m.lithologies.length*20+12),_.strokeStyle="#ccc",_.lineWidth=1,_.strokeRect(le-8,he-6,148,m.lithologies.length*20+12),m.lithologies.forEach((z,K)=>{const re=he+K*20;_.fillStyle=f(z,K),_.fillRect(le,re,14,14),_.strokeStyle="#000",_.lineWidth=.5,_.strokeRect(le,re,14,14),_.fillStyle="#333",_.font="12px sans-serif",_.textAlign="left",_.textBaseline="middle",_.fillText(z,le+20,re+7)})}_.fillStyle="#333",_.font="bold 14px sans-serif",_.textAlign="left",_.textBaseline="top",_.fillText(`插值方式: ${m.interpolation_method||"linear"}`,p+T.left+8,T.top+8)}function g(){if(!l)return;const _=l.parentElement,m=_.clientWidth||800,p=_.clientHeight||600;t(0,l.width=m,l),t(0,l.height=p,l);const x=l.getContext("2d");if(x.clearRect(0,0,m,p),x.fillStyle="#ffffff",x.fillRect(0,0,m,p),r&&s&&n){const b=Ga(s),A=Ga(n),C=Math.min(b.min,A.min),T=Math.max(b.max,A.max),w=(T-C)*.1||10,L=C-w,F=T+w,y=Math.floor(m/2);x.save(),x.beginPath(),x.rect(0,0,y,p),x.clip(),d(x,s,0,y,p,L,F),x.restore(),x.save(),x.beginPath(),x.rect(y,0,m-y,p),x.clip(),d(x,n,y,m-y,p,L,F),x.restore(),x.strokeStyle="#333",x.lineWidth=2,x.setLineDash([8,4]),x.beginPath(),x.moveTo(y,0),x.lineTo(y,p),x.stroke(),x.setLineDash([]),x.fillStyle="rgba(0,0,0,0.6)",x.font="bold 14px sans-serif",x.textAlign="center",x.textBaseline="bottom",x.fillText("左剖面",y/2,p-4),x.fillText("右剖面",y+(m-y)/2,p-4)}else o&&d(x,o,0,m,p,void 0,void 0)}Lr(()=>{(o||r&&s)&&To().then(()=>g());const _=new ResizeObserver(()=>{l&&g()});return l!=null&&l.parentElement&&_.observe(l.parentElement),()=>_.disconnect()}),Sh(()=>{(o||r&&s&&n)&&l&&g()});function v(_){ni[_?"unshift":"push"](()=>{l=_,t(0,l)})}return i.$$.update=()=>{i.$$.dirty&31&&(o||r&&s&&n)&&l&&To().then(()=>g())},[l,n,s,r,o,v]}class Af extends pn{constructor(e){super(),mn(this,e,wf,yf,dn,{})}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oo="161",Ui={ROTATE:0,DOLLY:1,PAN:2},Fi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cf=0,Wa=1,Rf=2,yh=1,Pf=2,Zn=3,pi=0,Mn=1,cn=2,hi=0,os=1,Xa=2,qa=3,ja=4,Lf=5,yi=100,Df=101,If=102,Ya=103,Ka=104,Nf=200,Uf=201,Ff=202,Of=203,Ao=204,Co=205,kf=206,Bf=207,zf=208,Vf=209,Hf=210,Gf=211,Wf=212,Xf=213,qf=214,jf=0,Yf=1,Kf=2,yr=3,Zf=4,Jf=5,Qf=6,$f=7,ko=0,ed=1,td=2,fi=0,nd=1,id=2,sd=3,rd=4,od=5,ad=6,Th=300,hs=301,fs=302,Ro=303,Po=304,Dr=306,Lo=1e3,Fn=1001,Do=1002,ln=1003,Za=1004,xs=1005,gn=1006,Hr=1007,wi=1008,di=1009,ld=1010,cd=1011,Bo=1012,wh=1013,ui=1014,$n=1015,Is=1016,Ah=1017,Ch=1018,Ai=1020,ud=1021,On=1023,hd=1024,fd=1025,Ci=1026,ds=1027,dd=1028,Rh=1029,pd=1030,Ph=1031,Lh=1033,Gr=33776,Wr=33777,Xr=33778,qr=33779,Ja=35840,Qa=35841,$a=35842,el=35843,Dh=36196,tl=37492,nl=37496,il=37808,sl=37809,rl=37810,ol=37811,al=37812,ll=37813,cl=37814,ul=37815,hl=37816,fl=37817,dl=37818,pl=37819,ml=37820,_l=37821,jr=36492,gl=36494,vl=36495,md=36283,bl=36284,xl=36285,El=36286,Ih=3e3,Ri=3001,_d=3200,gd=3201,Nh=0,vd=1,Ln="",Qt="srgb",ii="srgb-linear",zo="display-p3",Ir="display-p3-linear",Tr="linear",Nt="srgb",wr="rec709",Ar="p3",Oi=7680,Ml=519,bd=512,xd=513,Ed=514,Uh=515,Md=516,Sd=517,yd=518,Td=519,Sl=35044,yl="300 es",Io=1035,ei=2e3,Cr=2001;class Ii{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cs=Math.PI/180,No=180/Math.PI;function Fs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function un(i,e,t){return Math.max(e,Math.min(t,i))}function wd(i,e){return(i%e+e)%e}function Yr(i,e,t){return(1-t)*i+t*e}function Tl(i){return(i&i-1)===0&&i!==0}function Uo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Es(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _n(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ad={DEG2RAD:Cs};class pt{constructor(e=0,t=0){pt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(un(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class St{constructor(e,t,n,s,r,o,a,c,l){St.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],d=n[2],g=n[5],v=n[8],_=s[0],m=s[3],p=s[6],x=s[1],b=s[4],A=s[7],C=s[2],T=s[5],w=s[8];return r[0]=o*_+a*x+c*C,r[3]=o*m+a*b+c*T,r[6]=o*p+a*A+c*w,r[1]=l*_+u*x+f*C,r[4]=l*m+u*b+f*T,r[7]=l*p+u*A+f*w,r[2]=d*_+g*x+v*C,r[5]=d*m+g*b+v*T,r[8]=d*p+g*A+v*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,d=a*c-u*r,g=l*r-o*c,v=t*f+n*d+s*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=f*_,e[1]=(s*l-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=g*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Kr.makeScale(e,t)),this}rotate(e){return this.premultiply(Kr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Kr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Kr=new St;function Fh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cd(){const i=Rr("canvas");return i.style.display="block",i}const wl={};function as(i){i in wl||(wl[i]=!0,console.warn(i))}const Al=new St().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Cl=new St().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Vs={[ii]:{transfer:Tr,primaries:wr,toReference:i=>i,fromReference:i=>i},[Qt]:{transfer:Nt,primaries:wr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ir]:{transfer:Tr,primaries:Ar,toReference:i=>i.applyMatrix3(Cl),fromReference:i=>i.applyMatrix3(Al)},[zo]:{transfer:Nt,primaries:Ar,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Cl),fromReference:i=>i.applyMatrix3(Al).convertLinearToSRGB()}},Rd=new Set([ii,Ir]),Rt={enabled:!0,_workingColorSpace:ii,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Rd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Vs[e].toReference,s=Vs[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Vs[i].primaries},getTransfer:function(i){return i===Ln?Tr:Vs[i].transfer}};function ls(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ki;class Oh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ki===void 0&&(ki=Rr("canvas")),ki.width=e.width,ki.height=e.height;const n=ki.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ls(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ls(t[n]/255)*255):t[n]=ls(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Pd=0;class kh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Fs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Jr(s[o].image)):r.push(Jr(s[o]))}else r=Jr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Jr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Oh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ld=0;class rn extends Ii{constructor(e=rn.DEFAULT_IMAGE,t=rn.DEFAULT_MAPPING,n=Fn,s=Fn,r=gn,o=wi,a=On,c=di,l=rn.DEFAULT_ANISOTROPY,u=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Fs(),this.name="",this.source=new kh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new St,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(as("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ri?Qt:Ln),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Th)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lo:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case Do:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lo:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case Do:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return as("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Qt?Ri:Ih}set encoding(e){as("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ri?Qt:Ln}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Th;rn.DEFAULT_ANISOTROPY=1;class Zt{constructor(e=0,t=0,n=0,s=1){Zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],g=c[5],v=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(v+m)<.1&&Math.abs(l+g+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,A=(g+1)/2,C=(p+1)/2,T=(u+d)/4,w=(f+_)/4,L=(v+m)/4;return b>A&&b>C?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=T/n,r=w/n):A>C?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=T/s,r=L/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=w/r,s=L/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-v)*(m-v)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-v)/x,this.y=(f-_)/x,this.z=(d-u)/x,this.w=Math.acos((l+g+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dd extends Ii{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(as("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ri?Qt:Ln),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new rn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new kh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends Dd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Bh extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Id extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Li{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],f=n[s+3];const d=r[o+0],g=r[o+1],v=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=g,e[t+2]=v,e[t+3]=_;return}if(f!==_||c!==d||l!==g||u!==v){let m=1-a;const p=c*d+l*g+u*v+f*_,x=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const C=Math.sqrt(b),T=Math.atan2(C,p*x);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}const A=a*x;if(c=c*m+d*A,l=l*m+g*A,u=u*m+v*A,f=f*m+_*A,m===1-a){const C=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=C,l*=C,u*=C,f*=C}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],f=r[o],d=r[o+1],g=r[o+2],v=r[o+3];return e[t]=a*v+u*f+c*g-l*d,e[t+1]=c*v+u*d+l*f-a*g,e[t+2]=l*v+u*g+a*d-c*f,e[t+3]=u*v-a*f-c*d-l*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),f=a(r/2),d=c(n/2),g=c(s/2),v=c(r/2);switch(o){case"XYZ":this._x=d*u*f+l*g*v,this._y=l*g*f-d*u*v,this._z=l*u*v+d*g*f,this._w=l*u*f-d*g*v;break;case"YXZ":this._x=d*u*f+l*g*v,this._y=l*g*f-d*u*v,this._z=l*u*v-d*g*f,this._w=l*u*f+d*g*v;break;case"ZXY":this._x=d*u*f-l*g*v,this._y=l*g*f+d*u*v,this._z=l*u*v+d*g*f,this._w=l*u*f-d*g*v;break;case"ZYX":this._x=d*u*f-l*g*v,this._y=l*g*f+d*u*v,this._z=l*u*v-d*g*f,this._w=l*u*f+d*g*v;break;case"YZX":this._x=d*u*f+l*g*v,this._y=l*g*f+d*u*v,this._z=l*u*v-d*g*f,this._w=l*u*f-d*g*v;break;case"XZY":this._x=d*u*f-l*g*v,this._y=l*g*f-d*u*v,this._z=l*u*v+d*g*f,this._w=l*u*f+d*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=n+a+f;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(u-c)*g,this._y=(r-l)*g,this._z=(o-s)*g}else if(n>a&&n>f){const g=2*Math.sqrt(1+n-a-f);this._w=(u-c)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+l)/g}else if(a>f){const g=2*Math.sqrt(1+a-n-f);this._w=(r-l)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(c+u)/g}else{const g=2*Math.sqrt(1+f-n-a);this._w=(o-s)/g,this._x=(r+l)/g,this._y=(c+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(un(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*n+t*this._x,this._y=g*s+t*this._y,this._z=g*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Ie{constructor(e=0,t=0,n=0){Ie.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+c*l+o*f-a*u,this.y=n+c*u+a*l-r*f,this.z=s+c*f+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qr.copy(this).projectOnVector(e),this.sub(Qr)}reflect(e){return this.sub(Qr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(un(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qr=new Ie,Rl=new Li;class Os{constructor(e=new Ie(1/0,1/0,1/0),t=new Ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hs.copy(n.boundingBox)),Hs.applyMatrix4(e.matrixWorld),this.union(Hs)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ms),Gs.subVectors(this.max,Ms),Bi.subVectors(e.a,Ms),zi.subVectors(e.b,Ms),Vi.subVectors(e.c,Ms),si.subVectors(zi,Bi),ri.subVectors(Vi,zi),vi.subVectors(Bi,Vi);let t=[0,-si.z,si.y,0,-ri.z,ri.y,0,-vi.z,vi.y,si.z,0,-si.x,ri.z,0,-ri.x,vi.z,0,-vi.x,-si.y,si.x,0,-ri.y,ri.x,0,-vi.y,vi.x,0];return!$r(t,Bi,zi,Vi,Gs)||(t=[1,0,0,0,1,0,0,0,1],!$r(t,Bi,zi,Vi,Gs))?!1:(Ws.crossVectors(si,ri),t=[Ws.x,Ws.y,Ws.z],$r(t,Bi,zi,Vi,Gs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xn=[new Ie,new Ie,new Ie,new Ie,new Ie,new Ie,new Ie,new Ie],Dn=new Ie,Hs=new Os,Bi=new Ie,zi=new Ie,Vi=new Ie,si=new Ie,ri=new Ie,vi=new Ie,Ms=new Ie,Gs=new Ie,Ws=new Ie,bi=new Ie;function $r(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){bi.fromArray(i,r);const a=s.x*Math.abs(bi.x)+s.y*Math.abs(bi.y)+s.z*Math.abs(bi.z),c=e.dot(bi),l=t.dot(bi),u=n.dot(bi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Nd=new Os,Ss=new Ie,eo=new Ie;class Nr{constructor(e=new Ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Nd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ss.subVectors(e,this.center);const t=Ss.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ss,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ss.copy(e.center).add(eo)),this.expandByPoint(Ss.copy(e.center).sub(eo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new Ie,to=new Ie,Xs=new Ie,oi=new Ie,no=new Ie,qs=new Ie,io=new Ie;class Vo{constructor(e=new Ie,t=new Ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){to.copy(e).add(t).multiplyScalar(.5),Xs.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(to);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Xs),a=oi.dot(this.direction),c=-oi.dot(Xs),l=oi.lengthSq(),u=Math.abs(1-o*o);let f,d,g,v;if(u>0)if(f=o*c-a,d=o*a-c,v=r*u,f>=0)if(d>=-v)if(d<=v){const _=1/u;f*=_,d*=_,g=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=r,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*c)+l;else d<=-v?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-c),r),g=-f*f+d*(d+2*c)+l):d<=v?(f=0,d=Math.min(Math.max(-r,-c),r),g=d*(d+2*c)+l):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-c),r),g=-f*f+d*(d+2*c)+l);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(to).addScaledVector(Xs,d),g}intersectSphere(e,t){qn.subVectors(e.center,this.origin);const n=qn.dot(this.direction),s=qn.dot(qn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,n,s,r){no.subVectors(t,e),qs.subVectors(n,e),io.crossVectors(no,qs);let o=this.direction.dot(io),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,e);const c=a*this.direction.dot(qs.crossVectors(oi,qs));if(c<0)return null;const l=a*this.direction.dot(no.cross(oi));if(l<0||c+l>o)return null;const u=-a*oi.dot(io);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,t,n,s,r,o,a,c,l,u,f,d,g,v,_,m){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,f,d,g,v,_,m)}set(e,t,n,s,r,o,a,c,l,u,f,d,g,v,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=d,p[3]=g,p[7]=v,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Hi.setFromMatrixColumn(e,0).length(),r=1/Hi.setFromMatrixColumn(e,1).length(),o=1/Hi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*u,g=o*f,v=a*u,_=a*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=g+v*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=v+g*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,g=c*f,v=l*u,_=l*f;t[0]=d+_*a,t[4]=v*a-g,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=g*a-v,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,g=c*f,v=l*u,_=l*f;t[0]=d-_*a,t[4]=-o*f,t[8]=v+g*a,t[1]=g+v*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,g=o*f,v=a*u,_=a*f;t[0]=c*u,t[4]=v*l-g,t[8]=d*l+_,t[1]=c*f,t[5]=_*l+d,t[9]=g*l-v,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,g=o*l,v=a*c,_=a*l;t[0]=c*u,t[4]=_-d*f,t[8]=v*f+g,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=g*f+v,t[10]=d-_*f}else if(e.order==="XZY"){const d=o*c,g=o*l,v=a*c,_=a*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+_,t[5]=o*u,t[9]=g*f-v,t[2]=v*f-g,t[6]=a*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ud,e,Fd)}lookAt(e,t,n){const s=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),ai.crossVectors(n,Tn),ai.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),ai.crossVectors(n,Tn)),ai.normalize(),js.crossVectors(Tn,ai),s[0]=ai.x,s[4]=js.x,s[8]=Tn.x,s[1]=ai.y,s[5]=js.y,s[9]=Tn.y,s[2]=ai.z,s[6]=js.z,s[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],d=n[9],g=n[13],v=n[2],_=n[6],m=n[10],p=n[14],x=n[3],b=n[7],A=n[11],C=n[15],T=s[0],w=s[4],L=s[8],F=s[12],y=s[1],U=s[5],Y=s[9],Q=s[13],k=s[2],X=s[6],W=s[10],J=s[14],ee=s[3],se=s[7],ue=s[11],ce=s[15];return r[0]=o*T+a*y+c*k+l*ee,r[4]=o*w+a*U+c*X+l*se,r[8]=o*L+a*Y+c*W+l*ue,r[12]=o*F+a*Q+c*J+l*ce,r[1]=u*T+f*y+d*k+g*ee,r[5]=u*w+f*U+d*X+g*se,r[9]=u*L+f*Y+d*W+g*ue,r[13]=u*F+f*Q+d*J+g*ce,r[2]=v*T+_*y+m*k+p*ee,r[6]=v*w+_*U+m*X+p*se,r[10]=v*L+_*Y+m*W+p*ue,r[14]=v*F+_*Q+m*J+p*ce,r[3]=x*T+b*y+A*k+C*ee,r[7]=x*w+b*U+A*X+C*se,r[11]=x*L+b*Y+A*W+C*ue,r[15]=x*F+b*Q+A*J+C*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],g=e[14],v=e[3],_=e[7],m=e[11],p=e[15];return v*(+r*c*f-s*l*f-r*a*d+n*l*d+s*a*g-n*c*g)+_*(+t*c*g-t*l*d+r*o*d-s*o*g+s*l*u-r*c*u)+m*(+t*l*f-t*a*g-r*o*f+n*o*g+r*a*u-n*l*u)+p*(-s*a*u-t*c*f+t*a*d+s*o*f-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],g=e[11],v=e[12],_=e[13],m=e[14],p=e[15],x=f*m*l-_*d*l+_*c*g-a*m*g-f*c*p+a*d*p,b=v*d*l-u*m*l-v*c*g+o*m*g+u*c*p-o*d*p,A=u*_*l-v*f*l+v*a*g-o*_*g-u*a*p+o*f*p,C=v*f*c-u*_*c-v*a*d+o*_*d+u*a*m-o*f*m,T=t*x+n*b+s*A+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=x*w,e[1]=(_*d*r-f*m*r-_*s*g+n*m*g+f*s*p-n*d*p)*w,e[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*w,e[3]=(f*c*r-a*d*r-f*s*l+n*d*l+a*s*g-n*c*g)*w,e[4]=b*w,e[5]=(u*m*r-v*d*r+v*s*g-t*m*g-u*s*p+t*d*p)*w,e[6]=(v*c*r-o*m*r-v*s*l+t*m*l+o*s*p-t*c*p)*w,e[7]=(o*d*r-u*c*r+u*s*l-t*d*l-o*s*g+t*c*g)*w,e[8]=A*w,e[9]=(v*f*r-u*_*r-v*n*g+t*_*g+u*n*p-t*f*p)*w,e[10]=(o*_*r-v*a*r+v*n*l-t*_*l-o*n*p+t*a*p)*w,e[11]=(u*a*r-o*f*r-u*n*l+t*f*l+o*n*g-t*a*g)*w,e[12]=C*w,e[13]=(u*_*s-v*f*s+v*n*d-t*_*d-u*n*m+t*f*m)*w,e[14]=(v*a*s-o*_*s-v*n*c+t*_*c+o*n*m-t*a*m)*w,e[15]=(o*f*s-u*a*s+u*n*c-t*f*c-o*n*d+t*a*d)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,f=a+a,d=r*l,g=r*u,v=r*f,_=o*u,m=o*f,p=a*f,x=c*l,b=c*u,A=c*f,C=n.x,T=n.y,w=n.z;return s[0]=(1-(_+p))*C,s[1]=(g+A)*C,s[2]=(v-b)*C,s[3]=0,s[4]=(g-A)*T,s[5]=(1-(d+p))*T,s[6]=(m+x)*T,s[7]=0,s[8]=(v+b)*w,s[9]=(m-x)*w,s[10]=(1-(d+_))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Hi.set(s[0],s[1],s[2]).length();const o=Hi.set(s[4],s[5],s[6]).length(),a=Hi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],In.copy(this);const l=1/r,u=1/o,f=1/a;return In.elements[0]*=l,In.elements[1]*=l,In.elements[2]*=l,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=f,In.elements[9]*=f,In.elements[10]*=f,t.setFromRotationMatrix(In),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ei){const c=this.elements,l=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s);let g,v;if(a===ei)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Cr)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ei){const c=this.elements,l=1/(t-e),u=1/(n-s),f=1/(o-r),d=(t+e)*l,g=(n+s)*u;let v,_;if(a===ei)v=(o+r)*f,_=-2*f;else if(a===Cr)v=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=_,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Hi=new Ie,In=new Ht,Ud=new Ie(0,0,0),Fd=new Ie(1,1,1),ai=new Ie,js=new Ie,Tn=new Ie,Pl=new Ht,Ll=new Li;class Ur{constructor(e=0,t=0,n=0,s=Ur.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],f=s[2],d=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-un(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(un(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-un(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(un(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ll.setFromEuler(this),this.setFromQuaternion(Ll,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ur.DEFAULT_ORDER="XYZ";class zh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Od=0;const Dl=new Ie,Gi=new Li,jn=new Ht,Ys=new Ie,ys=new Ie,kd=new Ie,Bd=new Li,Il=new Ie(1,0,0),Nl=new Ie(0,1,0),Ul=new Ie(0,0,1),zd={type:"added"},Vd={type:"removed"};class en extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new Ie,t=new Ur,n=new Li,s=new Ie(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ht},normalMatrix:{value:new St}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.premultiply(Gi),this}rotateX(e){return this.rotateOnAxis(Il,e)}rotateY(e){return this.rotateOnAxis(Nl,e)}rotateZ(e){return this.rotateOnAxis(Ul,e)}translateOnAxis(e,t){return Dl.copy(e).applyQuaternion(this.quaternion),this.position.add(Dl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Il,e)}translateY(e){return this.translateOnAxis(Nl,e)}translateZ(e){return this.translateOnAxis(Ul,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ys.copy(e):Ys.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(ys,Ys,this.up):jn.lookAt(Ys,ys,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),Gi.setFromRotationMatrix(jn),this.quaternion.premultiply(Gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(zd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,e,kd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,Bd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),g=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),g.length>0&&(n.animations=g),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}en.DEFAULT_UP=new Ie(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new Ie,Yn=new Ie,so=new Ie,Kn=new Ie,Wi=new Ie,Xi=new Ie,Fl=new Ie,ro=new Ie,oo=new Ie,ao=new Ie;class kn{constructor(e=new Ie,t=new Ie,n=new Ie){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Nn.subVectors(e,t),s.cross(Nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Nn.subVectors(s,t),Yn.subVectors(n,t),so.subVectors(e,t);const o=Nn.dot(Nn),a=Nn.dot(Yn),c=Nn.dot(so),l=Yn.dot(Yn),u=Yn.dot(so),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,g=(l*c-a*u)*d,v=(o*u-a*c)*d;return r.set(1-g-v,v,g)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Kn.x),c.addScaledVector(o,Kn.y),c.addScaledVector(a,Kn.z),c)}static isFrontFacing(e,t,n,s){return Nn.subVectors(n,t),Yn.subVectors(e,t),Nn.cross(Yn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Nn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return kn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Wi.subVectors(s,n),Xi.subVectors(r,n),ro.subVectors(e,n);const c=Wi.dot(ro),l=Xi.dot(ro);if(c<=0&&l<=0)return t.copy(n);oo.subVectors(e,s);const u=Wi.dot(oo),f=Xi.dot(oo);if(u>=0&&f<=u)return t.copy(s);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Wi,o);ao.subVectors(e,r);const g=Wi.dot(ao),v=Xi.dot(ao);if(v>=0&&g<=v)return t.copy(r);const _=g*l-c*v;if(_<=0&&l>=0&&v<=0)return a=l/(l-v),t.copy(n).addScaledVector(Xi,a);const m=u*v-g*f;if(m<=0&&f-u>=0&&g-v>=0)return Fl.subVectors(r,s),a=(f-u)/(f-u+(g-v)),t.copy(s).addScaledVector(Fl,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Wi,o).addScaledVector(Xi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Ks={h:0,s:0,l:0};function lo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class bt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Rt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Rt.workingColorSpace){if(e=wd(e,1),t=un(t,0,1),n=un(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=lo(o,r,e+1/3),this.g=lo(o,r,e),this.b=lo(o,r,e-1/3)}return Rt.toWorkingColorSpace(this,s),this}setStyle(e,t=Qt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const n=Vh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}copyLinearToSRGB(e){return this.r=Zr(e.r),this.g=Zr(e.g),this.b=Zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return Rt.fromWorkingColorSpace(sn.copy(this),e),Math.round(un(sn.r*255,0,255))*65536+Math.round(un(sn.g*255,0,255))*256+Math.round(un(sn.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.fromWorkingColorSpace(sn.copy(this),t);const n=sn.r,s=sn.g,r=sn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=Qt){Rt.fromWorkingColorSpace(sn.copy(this),e);const t=sn.r,n=sn.g,s=sn.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(Ks);const n=Yr(li.h,Ks.h,t),s=Yr(li.s,Ks.s,t),r=Yr(li.l,Ks.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new bt;bt.NAMES=Vh;let Hd=0;class _s extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Fs(),this.name="",this.type="Material",this.blending=os,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ao,this.blendDst=Co,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ml,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ao&&(n.blendSrc=this.blendSrc),this.blendDst!==Co&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ml&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Pr extends _s{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new Ie,Zs=new pt;class Hn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return as("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zs.fromBufferAttribute(this,t),Zs.applyMatrix3(e),this.setXY(t,Zs.x,Zs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Es(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Es(t,this.array)),t}setX(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Es(t,this.array)),t}setY(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Es(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Es(t,this.array)),t}setW(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array),s=_n(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array),s=_n(s,this.array),r=_n(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sl&&(e.usage=this.usage),e}}class Hh extends Hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Gh extends Hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Dt extends Hn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Gd=0;const Rn=new Ht,co=new en,qi=new Ie,wn=new Os,Ts=new Os,jt=new Ie;class $t extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=Fs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fh(e)?Gh:Hh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new St().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,n){return Rn.makeTranslation(e,t,n),this.applyMatrix4(Rn),this}scale(e,t,n){return Rn.makeScale(e,t,n),this.applyMatrix4(Rn),this}lookAt(e){return co.lookAt(e),co.updateMatrix(),this.applyMatrix4(co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Dt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Ie(-1/0,-1/0,-1/0),new Ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Ie,1/0);return}if(e){const n=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ts.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(wn.min,Ts.min),wn.expandByPoint(jt),jt.addVectors(wn.max,Ts.max),wn.expandByPoint(jt)):(wn.expandByPoint(Ts.min),wn.expandByPoint(Ts.max))}wn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(jt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)jt.fromBufferAttribute(a,l),c&&(qi.fromBufferAttribute(e,l),jt.add(qi)),s=Math.max(s,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let y=0;y<a;y++)l[y]=new Ie,u[y]=new Ie;const f=new Ie,d=new Ie,g=new Ie,v=new pt,_=new pt,m=new pt,p=new Ie,x=new Ie;function b(y,U,Y){f.fromArray(s,y*3),d.fromArray(s,U*3),g.fromArray(s,Y*3),v.fromArray(o,y*2),_.fromArray(o,U*2),m.fromArray(o,Y*2),d.sub(f),g.sub(f),_.sub(v),m.sub(v);const Q=1/(_.x*m.y-m.x*_.y);isFinite(Q)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(g,-_.y).multiplyScalar(Q),x.copy(g).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(Q),l[y].add(p),l[U].add(p),l[Y].add(p),u[y].add(x),u[U].add(x),u[Y].add(x))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let y=0,U=A.length;y<U;++y){const Y=A[y],Q=Y.start,k=Y.count;for(let X=Q,W=Q+k;X<W;X+=3)b(n[X+0],n[X+1],n[X+2])}const C=new Ie,T=new Ie,w=new Ie,L=new Ie;function F(y){w.fromArray(r,y*3),L.copy(w);const U=l[y];C.copy(U),C.sub(w.multiplyScalar(w.dot(U))).normalize(),T.crossVectors(L,U);const Q=T.dot(u[y])<0?-1:1;c[y*4]=C.x,c[y*4+1]=C.y,c[y*4+2]=C.z,c[y*4+3]=Q}for(let y=0,U=A.length;y<U;++y){const Y=A[y],Q=Y.start,k=Y.count;for(let X=Q,W=Q+k;X<W;X+=3)F(n[X+0]),F(n[X+1]),F(n[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,g=n.count;d<g;d++)n.setXYZ(d,0,0,0);const s=new Ie,r=new Ie,o=new Ie,a=new Ie,c=new Ie,l=new Ie,u=new Ie,f=new Ie;if(e)for(let d=0,g=e.count;d<g;d+=3){const v=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,g=t.count;d<g;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,f=a.normalized,d=new l.constructor(c.length*u);let g=0,v=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?g=c[_]*a.data.stride+a.offset:g=c[_]*u;for(let p=0;p<u;p++)d[v++]=l[g++]}return new Hn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $t,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){const d=l[u],g=e(d,n);c.push(g)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const g=l[f];u.push(g.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],f=r[l];for(let d=0,g=f.length;d<g;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ol=new Ht,xi=new Vo,Js=new Nr,kl=new Ie,ji=new Ie,Yi=new Ie,Ki=new Ie,uo=new Ie,Qs=new Ie,$s=new pt,er=new pt,tr=new pt,Bl=new Ie,zl=new Ie,Vl=new Ie,nr=new Ie,ir=new Ie;class Yt extends en{constructor(e=new $t,t=new Pr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Qs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],f=r[c];u!==0&&(uo.fromBufferAttribute(f,e),o?Qs.addScaledVector(uo,u):Qs.addScaledVector(uo.sub(t),u))}t.add(Qs)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(r),xi.copy(e.ray).recast(e.near),!(Js.containsPoint(xi.origin)===!1&&(xi.intersectSphere(Js,kl)===null||xi.origin.distanceToSquared(kl)>(e.far-e.near)**2))&&(Ol.copy(r).invert(),xi.copy(e.ray).applyMatrix4(Ol),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=d.length;v<_;v++){const m=d[v],p=o[m.materialIndex],x=Math.max(m.start,g.start),b=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let A=x,C=b;A<C;A+=3){const T=a.getX(A),w=a.getX(A+1),L=a.getX(A+2);s=sr(this,p,e,n,l,u,f,T,w,L),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,g.start),_=Math.min(a.count,g.start+g.count);for(let m=v,p=_;m<p;m+=3){const x=a.getX(m),b=a.getX(m+1),A=a.getX(m+2);s=sr(this,o,e,n,l,u,f,x,b,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let v=0,_=d.length;v<_;v++){const m=d[v],p=o[m.materialIndex],x=Math.max(m.start,g.start),b=Math.min(c.count,Math.min(m.start+m.count,g.start+g.count));for(let A=x,C=b;A<C;A+=3){const T=A,w=A+1,L=A+2;s=sr(this,p,e,n,l,u,f,T,w,L),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,g.start),_=Math.min(c.count,g.start+g.count);for(let m=v,p=_;m<p;m+=3){const x=m,b=m+1,A=m+2;s=sr(this,o,e,n,l,u,f,x,b,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Wd(i,e,t,n,s,r,o,a){let c;if(e.side===Mn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===pi,a),c===null)return null;ir.copy(a),ir.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ir);return l<t.near||l>t.far?null:{distance:l,point:ir.clone(),object:i}}function sr(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,ji),i.getVertexPosition(c,Yi),i.getVertexPosition(l,Ki);const u=Wd(i,e,t,n,ji,Yi,Ki,nr);if(u){s&&($s.fromBufferAttribute(s,a),er.fromBufferAttribute(s,c),tr.fromBufferAttribute(s,l),u.uv=kn.getInterpolation(nr,ji,Yi,Ki,$s,er,tr,new pt)),r&&($s.fromBufferAttribute(r,a),er.fromBufferAttribute(r,c),tr.fromBufferAttribute(r,l),u.uv1=kn.getInterpolation(nr,ji,Yi,Ki,$s,er,tr,new pt),u.uv2=u.uv1),o&&(Bl.fromBufferAttribute(o,a),zl.fromBufferAttribute(o,c),Vl.fromBufferAttribute(o,l),u.normal=kn.getInterpolation(nr,ji,Yi,Ki,Bl,zl,Vl,new Ie),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new Ie,materialIndex:0};kn.getNormal(ji,Yi,Ki,f.normal),u.face=f}return u}class Di extends $t{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],f=[];let d=0,g=0;v("z","y","x",-1,-1,n,t,e,o,r,0),v("z","y","x",1,-1,n,t,-e,o,r,1),v("x","z","y",1,1,e,n,t,s,o,2),v("x","z","y",1,-1,e,n,-t,s,o,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Dt(l,3)),this.setAttribute("normal",new Dt(u,3)),this.setAttribute("uv",new Dt(f,2));function v(_,m,p,x,b,A,C,T,w,L,F){const y=A/w,U=C/L,Y=A/2,Q=C/2,k=T/2,X=w+1,W=L+1;let J=0,ee=0;const se=new Ie;for(let ue=0;ue<W;ue++){const ce=ue*U-Q;for(let le=0;le<X;le++){const he=le*y-Y;se[_]=he*x,se[m]=ce*b,se[p]=k,l.push(se.x,se.y,se.z),se[_]=0,se[m]=0,se[p]=T>0?1:-1,u.push(se.x,se.y,se.z),f.push(le/w),f.push(1-ue/L),J+=1}}for(let ue=0;ue<L;ue++)for(let ce=0;ce<w;ce++){const le=d+ce+X*ue,he=d+ce+X*(ue+1),z=d+(ce+1)+X*(ue+1),K=d+(ce+1)+X*ue;c.push(le,he,K),c.push(he,z,K),ee+=6}a.addGroup(g,ee,F),g+=ee,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ps(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function an(i){const e={};for(let t=0;t<i.length;t++){const n=ps(i[t]);for(const s in n)e[s]=n[s]}return e}function Xd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Wh(i){return i.getRenderTarget()===null?i.outputColorSpace:Rt.workingColorSpace}const qd={clone:ps,merge:an};var jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mi extends _s{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jd,this.fragmentShader=Yd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=Xd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Xh extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new Ie,Hl=new pt,Gl=new pt;class Pn extends Xh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=No*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return No*2*Math.atan(Math.tan(Cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ci.x,ci.y).multiplyScalar(-e/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-e/ci.z)}getViewSize(e,t){return this.getViewBounds(e,Hl,Gl),t.subVectors(Gl,Hl)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zi=-90,Ji=1;class Kd extends en{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Pn(Zi,Ji,e,t);s.layers=this.layers,this.add(s);const r=new Pn(Zi,Ji,e,t);r.layers=this.layers,this.add(r);const o=new Pn(Zi,Ji,e,t);o.layers=this.layers,this.add(o);const a=new Pn(Zi,Ji,e,t);a.layers=this.layers,this.add(a);const c=new Pn(Zi,Ji,e,t);c.layers=this.layers,this.add(c);const l=new Pn(Zi,Ji,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(f,d,g),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class qh extends rn{constructor(e,t,n,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:hs,super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zd extends Pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(as("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ri?Qt:Ln),this.texture=new qh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:gn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Di(5,5,5),r=new mi({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:hi});r.uniforms.tEquirect.value=t;const o=new Yt(s,r),a=t.minFilter;return t.minFilter===wi&&(t.minFilter=gn),new Kd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const ho=new Ie,Jd=new Ie,Qd=new St;class Qn{constructor(e=new Ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ho.subVectors(n,t).cross(Jd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ho),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Qd.getNormalMatrix(e),s=this.coplanarPoint(ho).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new Nr,rr=new Ie;class Ho{constructor(e=new Qn,t=new Qn,n=new Qn,s=new Qn,r=new Qn,o=new Qn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ei){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],f=s[6],d=s[7],g=s[8],v=s[9],_=s[10],m=s[11],p=s[12],x=s[13],b=s[14],A=s[15];if(n[0].setComponents(c-r,d-l,m-g,A-p).normalize(),n[1].setComponents(c+r,d+l,m+g,A+p).normalize(),n[2].setComponents(c+o,d+u,m+v,A+x).normalize(),n[3].setComponents(c-o,d-u,m-v,A-x).normalize(),n[4].setComponents(c-a,d-f,m-_,A-b).normalize(),t===ei)n[5].setComponents(c+a,d+f,m+_,A+b).normalize();else if(t===Cr)n[5].setComponents(a,f,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(e){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(rr.x=s.normal.x>0?e.max.x:e.min.x,rr.y=s.normal.y>0?e.max.y:e.min.y,rr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(rr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jh(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function $d(i,e){const t=e.isWebGL2,n=new WeakMap;function s(l,u){const f=l.array,d=l.usage,g=f.byteLength,v=i.createBuffer();i.bindBuffer(u,v),i.bufferData(u,f,d),l.onUploadCallback();let _;if(f instanceof Float32Array)_=i.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=i.SHORT;else if(f instanceof Uint32Array)_=i.UNSIGNED_INT;else if(f instanceof Int32Array)_=i.INT;else if(f instanceof Int8Array)_=i.BYTE;else if(f instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:g}}function r(l,u,f){const d=u.array,g=u._updateRange,v=u.updateRanges;if(i.bindBuffer(f,l),g.count===-1&&v.length===0&&i.bufferSubData(f,0,d),v.length!==0){for(let _=0,m=v.length;_<m;_++){const p=v[_];t?i.bufferSubData(f,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(f,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}g.count!==-1&&(t?i.bufferSubData(f,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count):i.bufferSubData(f,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count)),g.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);if(f===void 0)n.set(l,s(l,u));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,l,u),f.version=l.version}}return{get:o,remove:a,update:c}}class ms extends $t{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,f=e/a,d=t/c,g=[],v=[],_=[],m=[];for(let p=0;p<u;p++){const x=p*d-o;for(let b=0;b<l;b++){const A=b*f-r;v.push(A,-x,0),_.push(0,0,1),m.push(b/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){const b=x+l*p,A=x+l*(p+1),C=x+1+l*(p+1),T=x+1+l*p;g.push(b,A,T),g.push(A,C,T)}this.setIndex(g),this.setAttribute("position",new Dt(v,3)),this.setAttribute("normal",new Dt(_,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ms(e.width,e.height,e.widthSegments,e.heightSegments)}}var ep=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tp=`#ifdef USE_ALPHAHASH
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
#endif`,np=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ip=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,op=`#ifdef USE_AOMAP
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
#endif`,ap=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lp=`#ifdef USE_BATCHING
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
#endif`,cp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,up=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dp=`#ifdef USE_IRIDESCENCE
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
#endif`,pp=`#ifdef USE_BUMPMAP
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
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Sp=`#define PI 3.141592653589793
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
} // validated`,yp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tp=`vec3 transformedNormal = objectNormal;
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
#endif`,wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ap=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lp=`
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
}`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Ip=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Np=`#ifdef USE_ENVMAP
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
#endif`,Up=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fp=`#ifdef USE_ENVMAP
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
#endif`,Op=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vp=`#ifdef USE_GRADIENTMAP
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
}`,Hp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Gp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qp=`uniform bool receiveShadow;
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
#endif`,jp=`#ifdef USE_ENVMAP
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
#endif`,Yp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qp=`PhysicalMaterial material;
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
#endif`,$p=`struct PhysicalMaterial {
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
}`,em=`
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
#endif`,tm=`#if defined( RE_IndirectDiffuse )
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
#endif`,nm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,im=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,om=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,am=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,um=`#if defined( USE_POINTS_UV )
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
#endif`,hm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pm=`#ifdef USE_MORPHNORMALS
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
#endif`,mm=`#ifdef USE_MORPHTARGETS
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
#endif`,_m=`#ifdef USE_MORPHTARGETS
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
#endif`,gm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mm=`#ifdef USE_NORMALMAP
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
#endif`,Sm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ym=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Am=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Im=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Om=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,km=`float getShadowMask() {
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
}`,Bm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zm=`#ifdef USE_SKINNING
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
#endif`,Vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hm=`#ifdef USE_SKINNING
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
#endif`,Gm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jm=`#ifdef USE_TRANSMISSION
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
#endif`,Ym=`#ifdef USE_TRANSMISSION
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
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e_=`uniform sampler2D t2D;
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
}`,t_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r_=`#include <common>
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
}`,o_=`#if DEPTH_PACKING == 3200
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
}`,a_=`#define DISTANCE
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
}`,l_=`#define DISTANCE
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
}`,c_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h_=`uniform float scale;
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
}`,f_=`uniform vec3 diffuse;
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
}`,d_=`#include <common>
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
}`,p_=`uniform vec3 diffuse;
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
}`,m_=`#define LAMBERT
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
}`,__=`#define LAMBERT
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
}`,g_=`#define MATCAP
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
}`,v_=`#define MATCAP
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
}`,b_=`#define NORMAL
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
}`,x_=`#define NORMAL
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
}`,E_=`#define PHONG
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
}`,M_=`#define PHONG
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
}`,S_=`#define STANDARD
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
}`,y_=`#define STANDARD
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
}`,T_=`#define TOON
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
}`,w_=`#define TOON
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
}`,A_=`uniform float size;
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
}`,C_=`uniform vec3 diffuse;
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
}`,R_=`#include <common>
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
}`,P_=`uniform vec3 color;
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
}`,L_=`uniform float rotation;
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
}`,D_=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:ep,alphahash_pars_fragment:tp,alphamap_fragment:np,alphamap_pars_fragment:ip,alphatest_fragment:sp,alphatest_pars_fragment:rp,aomap_fragment:op,aomap_pars_fragment:ap,batching_pars_vertex:lp,batching_vertex:cp,begin_vertex:up,beginnormal_vertex:hp,bsdfs:fp,iridescence_fragment:dp,bumpmap_pars_fragment:pp,clipping_planes_fragment:mp,clipping_planes_pars_fragment:_p,clipping_planes_pars_vertex:gp,clipping_planes_vertex:vp,color_fragment:bp,color_pars_fragment:xp,color_pars_vertex:Ep,color_vertex:Mp,common:Sp,cube_uv_reflection_fragment:yp,defaultnormal_vertex:Tp,displacementmap_pars_vertex:wp,displacementmap_vertex:Ap,emissivemap_fragment:Cp,emissivemap_pars_fragment:Rp,colorspace_fragment:Pp,colorspace_pars_fragment:Lp,envmap_fragment:Dp,envmap_common_pars_fragment:Ip,envmap_pars_fragment:Np,envmap_pars_vertex:Up,envmap_physical_pars_fragment:jp,envmap_vertex:Fp,fog_vertex:Op,fog_pars_vertex:kp,fog_fragment:Bp,fog_pars_fragment:zp,gradientmap_pars_fragment:Vp,lightmap_fragment:Hp,lightmap_pars_fragment:Gp,lights_lambert_fragment:Wp,lights_lambert_pars_fragment:Xp,lights_pars_begin:qp,lights_toon_fragment:Yp,lights_toon_pars_fragment:Kp,lights_phong_fragment:Zp,lights_phong_pars_fragment:Jp,lights_physical_fragment:Qp,lights_physical_pars_fragment:$p,lights_fragment_begin:em,lights_fragment_maps:tm,lights_fragment_end:nm,logdepthbuf_fragment:im,logdepthbuf_pars_fragment:sm,logdepthbuf_pars_vertex:rm,logdepthbuf_vertex:om,map_fragment:am,map_pars_fragment:lm,map_particle_fragment:cm,map_particle_pars_fragment:um,metalnessmap_fragment:hm,metalnessmap_pars_fragment:fm,morphcolor_vertex:dm,morphnormal_vertex:pm,morphtarget_pars_vertex:mm,morphtarget_vertex:_m,normal_fragment_begin:gm,normal_fragment_maps:vm,normal_pars_fragment:bm,normal_pars_vertex:xm,normal_vertex:Em,normalmap_pars_fragment:Mm,clearcoat_normal_fragment_begin:Sm,clearcoat_normal_fragment_maps:ym,clearcoat_pars_fragment:Tm,iridescence_pars_fragment:wm,opaque_fragment:Am,packing:Cm,premultiplied_alpha_fragment:Rm,project_vertex:Pm,dithering_fragment:Lm,dithering_pars_fragment:Dm,roughnessmap_fragment:Im,roughnessmap_pars_fragment:Nm,shadowmap_pars_fragment:Um,shadowmap_pars_vertex:Fm,shadowmap_vertex:Om,shadowmask_pars_fragment:km,skinbase_vertex:Bm,skinning_pars_vertex:zm,skinning_vertex:Vm,skinnormal_vertex:Hm,specularmap_fragment:Gm,specularmap_pars_fragment:Wm,tonemapping_fragment:Xm,tonemapping_pars_fragment:qm,transmission_fragment:jm,transmission_pars_fragment:Ym,uv_pars_fragment:Km,uv_pars_vertex:Zm,uv_vertex:Jm,worldpos_vertex:Qm,background_vert:$m,background_frag:e_,backgroundCube_vert:t_,backgroundCube_frag:n_,cube_vert:i_,cube_frag:s_,depth_vert:r_,depth_frag:o_,distanceRGBA_vert:a_,distanceRGBA_frag:l_,equirect_vert:c_,equirect_frag:u_,linedashed_vert:h_,linedashed_frag:f_,meshbasic_vert:d_,meshbasic_frag:p_,meshlambert_vert:m_,meshlambert_frag:__,meshmatcap_vert:g_,meshmatcap_frag:v_,meshnormal_vert:b_,meshnormal_frag:x_,meshphong_vert:E_,meshphong_frag:M_,meshphysical_vert:S_,meshphysical_frag:y_,meshtoon_vert:T_,meshtoon_frag:w_,points_vert:A_,points_frag:C_,shadow_vert:R_,shadow_frag:P_,sprite_vert:L_,sprite_frag:D_},it={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new St}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new St}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new St}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new St},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new St},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new St},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new St}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new St}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new St}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0},uvTransform:{value:new St}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}}},Vn={basic:{uniforms:an([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:an([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new bt(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:an([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:an([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:an([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new bt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:an([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:an([it.points,it.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:an([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:an([it.common,it.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:an([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:an([it.sprite,it.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new St},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:an([it.common,it.displacementmap,{referencePosition:{value:new Ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:an([it.lights,it.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Vn.physical={uniforms:an([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new St},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new St},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new St},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new St},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new St},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new St},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new St},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new St},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new St},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new St},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new St},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new St}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const or={r:0,b:0,g:0};function I_(i,e,t,n,s,r,o){const a=new bt(0);let c=r===!0?0:1,l,u,f=null,d=0,g=null;function v(m,p){let x=!1,b=p.isScene===!0?p.background:null;b&&b.isTexture&&(b=(p.backgroundBlurriness>0?t:e).get(b)),b===null?_(a,c):b&&b.isColor&&(_(b,1),x=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Dr)?(u===void 0&&(u=new Yt(new Di(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:ps(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=Rt.getTransfer(b.colorSpace)!==Nt,(f!==b||d!==b.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,f=b,d=b.version,g=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Yt(new ms(2,2),new mi({name:"BackgroundMaterial",uniforms:ps(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=Rt.getTransfer(b.colorSpace)!==Nt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||d!==b.version||g!==i.toneMapping)&&(l.material.needsUpdate=!0,f=b,d=b.version,g=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,p){m.getRGB(or,Wh(i)),n.buffers.color.setClear(or.r,or.g,or.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:v}}function N_(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null);let l=c,u=!1;function f(k,X,W,J,ee){let se=!1;if(o){const ue=_(J,W,X);l!==ue&&(l=ue,g(l.object)),se=p(k,J,W,ee),se&&x(k,J,W,ee)}else{const ue=X.wireframe===!0;(l.geometry!==J.id||l.program!==W.id||l.wireframe!==ue)&&(l.geometry=J.id,l.program=W.id,l.wireframe=ue,se=!0)}ee!==null&&t.update(ee,i.ELEMENT_ARRAY_BUFFER),(se||u)&&(u=!1,L(k,X,W,J),ee!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ee).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function g(k){return n.isWebGL2?i.bindVertexArray(k):r.bindVertexArrayOES(k)}function v(k){return n.isWebGL2?i.deleteVertexArray(k):r.deleteVertexArrayOES(k)}function _(k,X,W){const J=W.wireframe===!0;let ee=a[k.id];ee===void 0&&(ee={},a[k.id]=ee);let se=ee[X.id];se===void 0&&(se={},ee[X.id]=se);let ue=se[J];return ue===void 0&&(ue=m(d()),se[J]=ue),ue}function m(k){const X=[],W=[],J=[];for(let ee=0;ee<s;ee++)X[ee]=0,W[ee]=0,J[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:W,attributeDivisors:J,object:k,attributes:{},index:null}}function p(k,X,W,J){const ee=l.attributes,se=X.attributes;let ue=0;const ce=W.getAttributes();for(const le in ce)if(ce[le].location>=0){const z=ee[le];let K=se[le];if(K===void 0&&(le==="instanceMatrix"&&k.instanceMatrix&&(K=k.instanceMatrix),le==="instanceColor"&&k.instanceColor&&(K=k.instanceColor)),z===void 0||z.attribute!==K||K&&z.data!==K.data)return!0;ue++}return l.attributesNum!==ue||l.index!==J}function x(k,X,W,J){const ee={},se=X.attributes;let ue=0;const ce=W.getAttributes();for(const le in ce)if(ce[le].location>=0){let z=se[le];z===void 0&&(le==="instanceMatrix"&&k.instanceMatrix&&(z=k.instanceMatrix),le==="instanceColor"&&k.instanceColor&&(z=k.instanceColor));const K={};K.attribute=z,z&&z.data&&(K.data=z.data),ee[le]=K,ue++}l.attributes=ee,l.attributesNum=ue,l.index=J}function b(){const k=l.newAttributes;for(let X=0,W=k.length;X<W;X++)k[X]=0}function A(k){C(k,0)}function C(k,X){const W=l.newAttributes,J=l.enabledAttributes,ee=l.attributeDivisors;W[k]=1,J[k]===0&&(i.enableVertexAttribArray(k),J[k]=1),ee[k]!==X&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,X),ee[k]=X)}function T(){const k=l.newAttributes,X=l.enabledAttributes;for(let W=0,J=X.length;W<J;W++)X[W]!==k[W]&&(i.disableVertexAttribArray(W),X[W]=0)}function w(k,X,W,J,ee,se,ue){ue===!0?i.vertexAttribIPointer(k,X,W,ee,se):i.vertexAttribPointer(k,X,W,J,ee,se)}function L(k,X,W,J){if(n.isWebGL2===!1&&(k.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const ee=J.attributes,se=W.getAttributes(),ue=X.defaultAttributeValues;for(const ce in se){const le=se[ce];if(le.location>=0){let he=ee[ce];if(he===void 0&&(ce==="instanceMatrix"&&k.instanceMatrix&&(he=k.instanceMatrix),ce==="instanceColor"&&k.instanceColor&&(he=k.instanceColor)),he!==void 0){const z=he.normalized,K=he.itemSize,re=t.get(he);if(re===void 0)continue;const D=re.buffer,I=re.type,Ee=re.bytesPerElement,Me=n.isWebGL2===!0&&(I===i.INT||I===i.UNSIGNED_INT||he.gpuType===wh);if(he.isInterleavedBufferAttribute){const Re=he.data,j=Re.stride,Ae=he.offset;if(Re.isInstancedInterleavedBuffer){for(let Se=0;Se<le.locationSize;Se++)C(le.location+Se,Re.meshPerAttribute);k.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let Se=0;Se<le.locationSize;Se++)A(le.location+Se);i.bindBuffer(i.ARRAY_BUFFER,D);for(let Se=0;Se<le.locationSize;Se++)w(le.location+Se,K/le.locationSize,I,z,j*Ee,(Ae+K/le.locationSize*Se)*Ee,Me)}else{if(he.isInstancedBufferAttribute){for(let Re=0;Re<le.locationSize;Re++)C(le.location+Re,he.meshPerAttribute);k.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Re=0;Re<le.locationSize;Re++)A(le.location+Re);i.bindBuffer(i.ARRAY_BUFFER,D);for(let Re=0;Re<le.locationSize;Re++)w(le.location+Re,K/le.locationSize,I,z,K*Ee,K/le.locationSize*Re*Ee,Me)}}else if(ue!==void 0){const z=ue[ce];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(le.location,z);break;case 3:i.vertexAttrib3fv(le.location,z);break;case 4:i.vertexAttrib4fv(le.location,z);break;default:i.vertexAttrib1fv(le.location,z)}}}}T()}function F(){Y();for(const k in a){const X=a[k];for(const W in X){const J=X[W];for(const ee in J)v(J[ee].object),delete J[ee];delete X[W]}delete a[k]}}function y(k){if(a[k.id]===void 0)return;const X=a[k.id];for(const W in X){const J=X[W];for(const ee in J)v(J[ee].object),delete J[ee];delete X[W]}delete a[k.id]}function U(k){for(const X in a){const W=a[X];if(W[k.id]===void 0)continue;const J=W[k.id];for(const ee in J)v(J[ee].object),delete J[ee];delete W[k.id]}}function Y(){Q(),u=!0,l!==c&&(l=c,g(l.object))}function Q(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:Y,resetDefaultState:Q,dispose:F,releaseStatesOfGeometry:y,releaseStatesOfProgram:U,initAttributes:b,enableAttribute:A,disableUnusedAttributes:T}}function U_(i,e,t,n){const s=n.isWebGL2;let r;function o(u){r=u}function a(u,f){i.drawArrays(r,u,f),t.update(f,r,1)}function c(u,f,d){if(d===0)return;let g,v;if(s)g=i,v="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[v](r,u,f,d),t.update(f,r,d)}function l(u,f,d){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<d;v++)this.render(u[v],f[v]);else{g.multiDrawArraysWEBGL(r,u,0,f,0,d);let v=0;for(let _=0;_<d;_++)v+=f[_];t.update(v,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function F_(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=d>0,A=o||e.has("OES_texture_float"),C=b&&A,T=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:b,floatFragmentTextures:A,floatVertexTextures:C,maxSamples:T}}function O_(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Qn,a=new St,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const g=f.length!==0||d||n!==0||s;return s=d,n=f.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,g){const v=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||v===null||v.length===0||r&&!m)r?u(null):l();else{const x=r?0:n,b=x*4;let A=p.clippingState||null;c.value=A,A=u(v,d,b,g);for(let C=0;C!==b;++C)A[C]=t[C];p.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,g,v){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=c.value,v!==!0||m===null){const p=g+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,A=g;b!==_;++b,A+=4)o.copy(f[b]).applyMatrix4(x,a),o.normal.toArray(m,A),m[A+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function k_(i){let e=new WeakMap;function t(o,a){return a===Ro?o.mapping=hs:a===Po&&(o.mapping=fs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ro||a===Po)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Zd(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Yh extends Xh{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const is=4,Wl=[.125,.215,.35,.446,.526,.582],Ti=20,fo=new Yh,Xl=new bt;let po=null,mo=0,_o=0;const Si=(1+Math.sqrt(5))/2,Qi=1/Si,ql=[new Ie(1,1,1),new Ie(-1,1,1),new Ie(1,1,-1),new Ie(-1,1,-1),new Ie(0,Si,Qi),new Ie(0,Si,-Qi),new Ie(Qi,0,Si),new Ie(-Qi,0,Si),new Ie(Si,Qi,0),new Ie(-Si,Qi,0)];class jl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){po=this._renderer.getRenderTarget(),mo=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(po,mo,_o),e.scissorTest=!1,ar(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hs||e.mapping===fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),po=this._renderer.getRenderTarget(),mo=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:Is,format:On,colorSpace:ii,depthBuffer:!1},s=Yl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=B_(r)),this._blurMaterial=z_(r,e,t)}return s}_compileMaterial(e){const t=new Yt(this._lodPlanes[0],e);this._renderer.compile(t,fo)}_sceneToCubeUV(e,t,n,s){const a=new Pn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Xl),u.toneMapping=fi,u.autoClear=!1;const g=new Pr({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),v=new Yt(new Di,g);let _=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,_=!0):(g.color.copy(Xl),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):x===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const b=this._cubeSize;ar(s,x*b,p>2?b:0,b,b),u.setRenderTarget(s),_&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===hs||e.mapping===fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Yt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;ar(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,fo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ql[(s-1)%ql.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Yt(this._lodPlanes[s],l),d=l.uniforms,g=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*Ti-1),_=r/v,m=isFinite(r)?1+Math.floor(u*_):Ti;m>Ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ti}`);const p=[];let x=0;for(let w=0;w<Ti;++w){const L=w/_,F=Math.exp(-L*L/2);p.push(F),w===0?x+=F:w<m&&(x+=2*F)}for(let w=0;w<p.length;w++)p[w]=p[w]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=v,d.mipInt.value=b-n;const A=this._sizeLods[s],C=3*A*(s>b-is?s-b+is:0),T=4*(this._cubeSize-A);ar(t,C,T,3*A,2*A),c.setRenderTarget(t),c.render(f,fo)}}function B_(i){const e=[],t=[],n=[];let s=i;const r=i-is+1+Wl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-is?c=Wl[o-i+is-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],g=6,v=6,_=3,m=2,p=1,x=new Float32Array(_*v*g),b=new Float32Array(m*v*g),A=new Float32Array(p*v*g);for(let T=0;T<g;T++){const w=T%3*2/3-1,L=T>2?0:-1,F=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];x.set(F,_*v*T),b.set(d,m*v*T);const y=[T,T,T,T,T,T];A.set(y,p*v*T)}const C=new $t;C.setAttribute("position",new Hn(x,_)),C.setAttribute("uv",new Hn(b,m)),C.setAttribute("faceIndex",new Hn(A,p)),e.push(C),s>is&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Yl(i,e,t){const n=new Pi(i,e,t);return n.texture.mapping=Dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ar(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function z_(i,e,t){const n=new Float32Array(Ti),s=new Ie(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Go(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Kl(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Go(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Zl(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Go(){return`

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
	`}function V_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ro||c===Po,u=c===hs||c===fs;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new jl(i)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||u&&f&&s(f)){t===null&&(t=new jl(i));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function H_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function G_(i,e,t,n){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const _=d.morphAttributes[v];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const g=r.get(d);g&&(e.remove(g),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const v in d)e.update(d[v],i.ARRAY_BUFFER);const g=f.morphAttributes;for(const v in g){const _=g[v];for(let m=0,p=_.length;m<p;m++)e.update(_[m],i.ARRAY_BUFFER)}}function l(f){const d=[],g=f.index,v=f.attributes.position;let _=0;if(g!==null){const x=g.array;_=g.version;for(let b=0,A=x.length;b<A;b+=3){const C=x[b+0],T=x[b+1],w=x[b+2];d.push(C,T,T,w,w,C)}}else if(v!==void 0){const x=v.array;_=v.version;for(let b=0,A=x.length/3-1;b<A;b+=3){const C=b+0,T=b+1,w=b+2;d.push(C,T,T,w,w,C)}}else return;const m=new(Fh(d)?Gh:Hh)(d,1);m.version=_;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){const d=r.get(f);if(d){const g=f.index;g!==null&&d.version<g.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function W_(i,e,t,n){const s=n.isWebGL2;let r;function o(g){r=g}let a,c;function l(g){a=g.type,c=g.bytesPerElement}function u(g,v){i.drawElements(r,v,a,g*c),t.update(v,r,1)}function f(g,v,_){if(_===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,v,a,g*c,_),t.update(v,r,_)}function d(g,v,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(g[p]/c,v[p]);else{m.multiDrawElementsWEBGL(r,v,0,a,g,0,_);let p=0;for(let x=0;x<_;x++)p+=v[x];t.update(p,r,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=d}function X_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function q_(i,e){return i[0]-e[0]}function j_(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Y_(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new Zt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,f){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=g!==void 0?g.length:0;let _=r.get(u);if(_===void 0||_.count!==v){let k=function(){Y.dispose(),r.delete(u),u.removeEventListener("dispose",k)};_!==void 0&&_.texture.dispose();const x=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let L=0;x===!0&&(L=1),b===!0&&(L=2),A===!0&&(L=3);let F=u.attributes.position.count*L,y=1;F>e.maxTextureSize&&(y=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const U=new Float32Array(F*y*4*v),Y=new Bh(U,F,y,v);Y.type=$n,Y.needsUpdate=!0;const Q=L*4;for(let X=0;X<v;X++){const W=C[X],J=T[X],ee=w[X],se=F*y*4*X;for(let ue=0;ue<W.count;ue++){const ce=ue*Q;x===!0&&(o.fromBufferAttribute(W,ue),U[se+ce+0]=o.x,U[se+ce+1]=o.y,U[se+ce+2]=o.z,U[se+ce+3]=0),b===!0&&(o.fromBufferAttribute(J,ue),U[se+ce+4]=o.x,U[se+ce+5]=o.y,U[se+ce+6]=o.z,U[se+ce+7]=0),A===!0&&(o.fromBufferAttribute(ee,ue),U[se+ce+8]=o.x,U[se+ce+9]=o.y,U[se+ce+10]=o.z,U[se+ce+11]=ee.itemSize===4?o.w:1)}}_={count:v,texture:Y,size:new pt(F,y)},r.set(u,_),u.addEventListener("dispose",k)}let m=0;for(let x=0;x<d.length;x++)m+=d[x];const p=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",p),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const g=d===void 0?0:d.length;let v=n[u.id];if(v===void 0||v.length!==g){v=[];for(let b=0;b<g;b++)v[b]=[b,0];n[u.id]=v}for(let b=0;b<g;b++){const A=v[b];A[0]=b,A[1]=d[b]}v.sort(j_);for(let b=0;b<8;b++)b<g&&v[b][1]?(a[b][0]=v[b][0],a[b][1]=v[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(q_);const _=u.morphAttributes.position,m=u.morphAttributes.normal;let p=0;for(let b=0;b<8;b++){const A=a[b],C=A[0],T=A[1];C!==Number.MAX_SAFE_INTEGER&&T?(_&&u.getAttribute("morphTarget"+b)!==_[C]&&u.setAttribute("morphTarget"+b,_[C]),m&&u.getAttribute("morphNormal"+b)!==m[C]&&u.setAttribute("morphNormal"+b,m[C]),s[b]=T,p+=T):(_&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),m&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),s[b]=0)}const x=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(i,"morphTargetBaseInfluence",x),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function K_(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,f=e.get(c,u);if(s.get(f)!==l&&(e.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return f}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Kh extends rn{constructor(e,t,n,s,r,o,a,c,l,u){if(u=u!==void 0?u:Ci,u!==Ci&&u!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ci&&(n=ui),n===void 0&&u===ds&&(n=Ai),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ln,this.minFilter=c!==void 0?c:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Zh=new rn,Jh=new Kh(1,1);Jh.compareFunction=Uh;const Qh=new Bh,$h=new Id,ef=new qh,Jl=[],Ql=[],$l=new Float32Array(16),ec=new Float32Array(9),tc=new Float32Array(4);function gs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Jl[s];if(r===void 0&&(r=new Float32Array(s),Jl[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Fr(i,e){let t=Ql[e];t===void 0&&(t=new Int32Array(e),Ql[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Z_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function J_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2fv(this.addr,e),Xt(t,e)}}function Q_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;i.uniform3fv(this.addr,e),Xt(t,e)}}function $_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4fv(this.addr,e),Xt(t,e)}}function eg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;tc.set(n),i.uniformMatrix2fv(this.addr,!1,tc),Xt(t,n)}}function tg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;ec.set(n),i.uniformMatrix3fv(this.addr,!1,ec),Xt(t,n)}}function ng(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;$l.set(n),i.uniformMatrix4fv(this.addr,!1,$l),Xt(t,n)}}function ig(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function sg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2iv(this.addr,e),Xt(t,e)}}function rg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3iv(this.addr,e),Xt(t,e)}}function og(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4iv(this.addr,e),Xt(t,e)}}function ag(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function lg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2uiv(this.addr,e),Xt(t,e)}}function cg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3uiv(this.addr,e),Xt(t,e)}}function ug(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4uiv(this.addr,e),Xt(t,e)}}function hg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Jh:Zh;t.setTexture2D(e||r,s)}function fg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||$h,s)}function dg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ef,s)}function pg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Qh,s)}function mg(i){switch(i){case 5126:return Z_;case 35664:return J_;case 35665:return Q_;case 35666:return $_;case 35674:return eg;case 35675:return tg;case 35676:return ng;case 5124:case 35670:return ig;case 35667:case 35671:return sg;case 35668:case 35672:return rg;case 35669:case 35673:return og;case 5125:return ag;case 36294:return lg;case 36295:return cg;case 36296:return ug;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return fg;case 35680:case 36300:case 36308:case 36293:return dg;case 36289:case 36303:case 36311:case 36292:return pg}}function _g(i,e){i.uniform1fv(this.addr,e)}function gg(i,e){const t=gs(e,this.size,2);i.uniform2fv(this.addr,t)}function vg(i,e){const t=gs(e,this.size,3);i.uniform3fv(this.addr,t)}function bg(i,e){const t=gs(e,this.size,4);i.uniform4fv(this.addr,t)}function xg(i,e){const t=gs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Eg(i,e){const t=gs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Mg(i,e){const t=gs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Sg(i,e){i.uniform1iv(this.addr,e)}function yg(i,e){i.uniform2iv(this.addr,e)}function Tg(i,e){i.uniform3iv(this.addr,e)}function wg(i,e){i.uniform4iv(this.addr,e)}function Ag(i,e){i.uniform1uiv(this.addr,e)}function Cg(i,e){i.uniform2uiv(this.addr,e)}function Rg(i,e){i.uniform3uiv(this.addr,e)}function Pg(i,e){i.uniform4uiv(this.addr,e)}function Lg(i,e,t){const n=this.cache,s=e.length,r=Fr(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Zh,r[o])}function Dg(i,e,t){const n=this.cache,s=e.length,r=Fr(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||$h,r[o])}function Ig(i,e,t){const n=this.cache,s=e.length,r=Fr(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ef,r[o])}function Ng(i,e,t){const n=this.cache,s=e.length,r=Fr(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Qh,r[o])}function Ug(i){switch(i){case 5126:return _g;case 35664:return gg;case 35665:return vg;case 35666:return bg;case 35674:return xg;case 35675:return Eg;case 35676:return Mg;case 5124:case 35670:return Sg;case 35667:case 35671:return yg;case 35668:case 35672:return Tg;case 35669:case 35673:return wg;case 5125:return Ag;case 36294:return Cg;case 36295:return Rg;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35679:case 36299:case 36307:return Dg;case 35680:case 36300:case 36308:case 36293:return Ig;case 36289:case 36303:case 36311:case 36292:return Ng}}class Fg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mg(t.type)}}class Og{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ug(t.type)}}class kg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const go=/(\w+)(\])?(\[|\.)?/g;function nc(i,e){i.seq.push(e),i.map[e.id]=e}function Bg(i,e,t){const n=i.name,s=n.length;for(go.lastIndex=0;;){const r=go.exec(n),o=go.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){nc(t,l===void 0?new Fg(a,i,e):new Og(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new kg(a),nc(t,f)),t=f}}}class pr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Bg(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function ic(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const zg=37297;let Vg=0;function Hg(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Gg(i){const e=Rt.getPrimaries(Rt.workingColorSpace),t=Rt.getPrimaries(i);let n;switch(e===t?n="":e===Ar&&t===wr?n="LinearDisplayP3ToLinearSRGB":e===wr&&t===Ar&&(n="LinearSRGBToLinearDisplayP3"),i){case ii:case Ir:return[n,"LinearTransferOETF"];case Qt:case zo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function sc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Hg(i.getShaderSource(e),o)}else return s}function Wg(i,e){const t=Gg(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Xg(i,e){let t;switch(e){case nd:t="Linear";break;case id:t="Reinhard";break;case sd:t="OptimizedCineon";break;case rd:t="ACESFilmic";break;case ad:t="AgX";break;case od:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function qg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ss).join(`
`)}function jg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function Yg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Kg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ss(i){return i!==""}function rc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function oc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fo(i){return i.replace(Zg,Qg)}const Jg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Qg(i,e){let t=vt[e];if(t===void 0){const n=Jg.get(e);if(n!==void 0)t=vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Fo(t)}const $g=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ac(i){return i.replace($g,ev)}function ev(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function tv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Pf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function nv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hs:case fs:e="ENVMAP_TYPE_CUBE";break;case Dr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fs:e="ENVMAP_MODE_REFRACTION";break}return e}function sv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ko:e="ENVMAP_BLENDING_MULTIPLY";break;case ed:e="ENVMAP_BLENDING_MIX";break;case td:e="ENVMAP_BLENDING_ADD";break}return e}function rv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ov(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=tv(t),l=nv(t),u=iv(t),f=sv(t),d=rv(t),g=t.isWebGL2?"":qg(t),v=jg(t),_=Yg(r),m=s.createProgram();let p,x,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ss).join(`
`),p.length>0&&(p+=`
`),x=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ss).join(`
`),x.length>0&&(x+=`
`)):(p=[lc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),x=[g,lc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?vt.tonemapping_pars_fragment:"",t.toneMapping!==fi?Xg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,Wg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ss).join(`
`)),o=Fo(o),o=rc(o,t),o=oc(o,t),a=Fo(a),a=rc(a,t),a=oc(a,t),o=ac(o),a=ac(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const A=b+p+o,C=b+x+a,T=ic(s,s.VERTEX_SHADER,A),w=ic(s,s.FRAGMENT_SHADER,C);s.attachShader(m,T),s.attachShader(m,w),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function L(Y){if(i.debug.checkShaderErrors){const Q=s.getProgramInfoLog(m).trim(),k=s.getShaderInfoLog(T).trim(),X=s.getShaderInfoLog(w).trim();let W=!0,J=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,T,w);else{const ee=sc(s,T,"vertex"),se=sc(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+Y.name+`
Material Type: `+Y.type+`

Program Info Log: `+Q+`
`+ee+`
`+se)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(k===""||X==="")&&(J=!1);J&&(Y.diagnostics={runnable:W,programLog:Q,vertexShader:{log:k,prefix:p},fragmentShader:{log:X,prefix:x}})}s.deleteShader(T),s.deleteShader(w),F=new pr(s,m),y=Kg(s,m)}let F;this.getUniforms=function(){return F===void 0&&L(this),F};let y;this.getAttributes=function(){return y===void 0&&L(this),y};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(m,zg)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vg++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=w,this}let av=0;class lv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new cv(e),t.set(e,n)),n}}class cv{constructor(e){this.id=av++,this.code=e,this.usedTimes=0}}function uv(i,e,t,n,s,r,o){const a=new zh,c=new lv,l=new Set,u=[],f=s.isWebGL2,d=s.logarithmicDepthBuffer,g=s.vertexTextures;let v=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,U,Y,Q,k){const X=Q.fog,W=k.geometry,J=y.isMeshStandardMaterial?Q.environment:null,ee=(y.isMeshStandardMaterial?t:e).get(y.envMap||J),se=ee&&ee.mapping===Dr?ee.image.height:null,ue=_[y.type];y.precision!==null&&(v=s.getMaxPrecision(y.precision),v!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",v,"instead."));const ce=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,le=ce!==void 0?ce.length:0;let he=0;W.morphAttributes.position!==void 0&&(he=1),W.morphAttributes.normal!==void 0&&(he=2),W.morphAttributes.color!==void 0&&(he=3);let z,K,re,D;if(ue){const Qe=Vn[ue];z=Qe.vertexShader,K=Qe.fragmentShader}else z=y.vertexShader,K=y.fragmentShader,c.update(y),re=c.getVertexShaderID(y),D=c.getFragmentShaderID(y);const I=i.getRenderTarget(),Ee=k.isInstancedMesh===!0,Me=k.isBatchedMesh===!0,Re=!!y.map,j=!!y.matcap,Ae=!!ee,Se=!!y.aoMap,Ne=!!y.lightMap,oe=!!y.bumpMap,ie=!!y.normalMap,ge=!!y.displacementMap,B=!!y.emissiveMap,P=!!y.metalnessMap,xe=!!y.roughnessMap,te=y.anisotropy>0,N=y.clearcoat>0,Z=y.iridescence>0,me=y.sheen>0,_e=y.transmission>0,$=te&&!!y.anisotropyMap,ae=N&&!!y.clearcoatMap,be=N&&!!y.clearcoatNormalMap,ye=N&&!!y.clearcoatRoughnessMap,Te=Z&&!!y.iridescenceMap,Ce=Z&&!!y.iridescenceThicknessMap,Ye=me&&!!y.sheenColorMap,Oe=me&&!!y.sheenRoughnessMap,Le=!!y.specularMap,Be=!!y.specularColorMap,q=!!y.specularIntensityMap,ke=_e&&!!y.transmissionMap,je=_e&&!!y.thicknessMap,He=!!y.gradientMap,G=!!y.alphaMap,De=y.alphaTest>0,we=!!y.alphaHash,Fe=!!y.extensions;let Ge=fi;y.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ge=i.toneMapping);const Ze={isWebGL2:f,shaderID:ue,shaderType:y.type,shaderName:y.name,vertexShader:z,fragmentShader:K,defines:y.defines,customVertexShaderID:re,customFragmentShaderID:D,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:v,batching:Me,instancing:Ee,instancingColor:Ee&&k.instanceColor!==null,supportsVertexTextures:g,outputColorSpace:I===null?i.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ii,alphaToCoverage:!!y.alphaToCoverage,map:Re,matcap:j,envMap:Ae,envMapMode:Ae&&ee.mapping,envMapCubeUVHeight:se,aoMap:Se,lightMap:Ne,bumpMap:oe,normalMap:ie,displacementMap:g&&ge,emissiveMap:B,normalMapObjectSpace:ie&&y.normalMapType===vd,normalMapTangentSpace:ie&&y.normalMapType===Nh,metalnessMap:P,roughnessMap:xe,anisotropy:te,anisotropyMap:$,clearcoat:N,clearcoatMap:ae,clearcoatNormalMap:be,clearcoatRoughnessMap:ye,iridescence:Z,iridescenceMap:Te,iridescenceThicknessMap:Ce,sheen:me,sheenColorMap:Ye,sheenRoughnessMap:Oe,specularMap:Le,specularColorMap:Be,specularIntensityMap:q,transmission:_e,transmissionMap:ke,thicknessMap:je,gradientMap:He,opaque:y.transparent===!1&&y.blending===os&&y.alphaToCoverage===!1,alphaMap:G,alphaTest:De,alphaHash:we,combine:y.combine,mapUv:Re&&m(y.map.channel),aoMapUv:Se&&m(y.aoMap.channel),lightMapUv:Ne&&m(y.lightMap.channel),bumpMapUv:oe&&m(y.bumpMap.channel),normalMapUv:ie&&m(y.normalMap.channel),displacementMapUv:ge&&m(y.displacementMap.channel),emissiveMapUv:B&&m(y.emissiveMap.channel),metalnessMapUv:P&&m(y.metalnessMap.channel),roughnessMapUv:xe&&m(y.roughnessMap.channel),anisotropyMapUv:$&&m(y.anisotropyMap.channel),clearcoatMapUv:ae&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:be&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&m(y.sheenRoughnessMap.channel),specularMapUv:Le&&m(y.specularMap.channel),specularColorMapUv:Be&&m(y.specularColorMap.channel),specularIntensityMapUv:q&&m(y.specularIntensityMap.channel),transmissionMapUv:ke&&m(y.transmissionMap.channel),thicknessMapUv:je&&m(y.thicknessMap.channel),alphaMapUv:G&&m(y.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ie||te),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!W.attributes.uv&&(Re||G),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:k.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:he,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&Y.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ge,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Re&&y.map.isVideoTexture===!0&&Rt.getTransfer(y.map.colorSpace)===Nt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===cn,flipSided:y.side===Mn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:Fe&&y.extensions.derivatives===!0,extensionFragDepth:Fe&&y.extensions.fragDepth===!0,extensionDrawBuffers:Fe&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:Fe&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Fe&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Fe&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ze.vertexUv1s=l.has(1),Ze.vertexUv2s=l.has(2),Ze.vertexUv3s=l.has(3),l.clear(),Ze}function x(y){const U=[];if(y.shaderID?U.push(y.shaderID):(U.push(y.customVertexShaderID),U.push(y.customFragmentShaderID)),y.defines!==void 0)for(const Y in y.defines)U.push(Y),U.push(y.defines[Y]);return y.isRawShaderMaterial===!1&&(b(U,y),A(U,y),U.push(i.outputColorSpace)),U.push(y.customProgramCacheKey),U.join()}function b(y,U){y.push(U.precision),y.push(U.outputColorSpace),y.push(U.envMapMode),y.push(U.envMapCubeUVHeight),y.push(U.mapUv),y.push(U.alphaMapUv),y.push(U.lightMapUv),y.push(U.aoMapUv),y.push(U.bumpMapUv),y.push(U.normalMapUv),y.push(U.displacementMapUv),y.push(U.emissiveMapUv),y.push(U.metalnessMapUv),y.push(U.roughnessMapUv),y.push(U.anisotropyMapUv),y.push(U.clearcoatMapUv),y.push(U.clearcoatNormalMapUv),y.push(U.clearcoatRoughnessMapUv),y.push(U.iridescenceMapUv),y.push(U.iridescenceThicknessMapUv),y.push(U.sheenColorMapUv),y.push(U.sheenRoughnessMapUv),y.push(U.specularMapUv),y.push(U.specularColorMapUv),y.push(U.specularIntensityMapUv),y.push(U.transmissionMapUv),y.push(U.thicknessMapUv),y.push(U.combine),y.push(U.fogExp2),y.push(U.sizeAttenuation),y.push(U.morphTargetsCount),y.push(U.morphAttributeCount),y.push(U.numDirLights),y.push(U.numPointLights),y.push(U.numSpotLights),y.push(U.numSpotLightMaps),y.push(U.numHemiLights),y.push(U.numRectAreaLights),y.push(U.numDirLightShadows),y.push(U.numPointLightShadows),y.push(U.numSpotLightShadows),y.push(U.numSpotLightShadowsWithMaps),y.push(U.numLightProbes),y.push(U.shadowMapType),y.push(U.toneMapping),y.push(U.numClippingPlanes),y.push(U.numClipIntersection),y.push(U.depthPacking)}function A(y,U){a.disableAll(),U.isWebGL2&&a.enable(0),U.supportsVertexTextures&&a.enable(1),U.instancing&&a.enable(2),U.instancingColor&&a.enable(3),U.matcap&&a.enable(4),U.envMap&&a.enable(5),U.normalMapObjectSpace&&a.enable(6),U.normalMapTangentSpace&&a.enable(7),U.clearcoat&&a.enable(8),U.iridescence&&a.enable(9),U.alphaTest&&a.enable(10),U.vertexColors&&a.enable(11),U.vertexAlphas&&a.enable(12),U.vertexUv1s&&a.enable(13),U.vertexUv2s&&a.enable(14),U.vertexUv3s&&a.enable(15),U.vertexTangents&&a.enable(16),U.anisotropy&&a.enable(17),U.alphaHash&&a.enable(18),U.batching&&a.enable(19),y.push(a.mask),a.disableAll(),U.fog&&a.enable(0),U.useFog&&a.enable(1),U.flatShading&&a.enable(2),U.logarithmicDepthBuffer&&a.enable(3),U.skinning&&a.enable(4),U.morphTargets&&a.enable(5),U.morphNormals&&a.enable(6),U.morphColors&&a.enable(7),U.premultipliedAlpha&&a.enable(8),U.shadowMapEnabled&&a.enable(9),U.useLegacyLights&&a.enable(10),U.doubleSided&&a.enable(11),U.flipSided&&a.enable(12),U.useDepthPacking&&a.enable(13),U.dithering&&a.enable(14),U.transmission&&a.enable(15),U.sheen&&a.enable(16),U.opaque&&a.enable(17),U.pointsUvs&&a.enable(18),U.decodeVideoTexture&&a.enable(19),U.alphaToCoverage&&a.enable(20),y.push(a.mask)}function C(y){const U=_[y.type];let Y;if(U){const Q=Vn[U];Y=qd.clone(Q.uniforms)}else Y=y.uniforms;return Y}function T(y,U){let Y;for(let Q=0,k=u.length;Q<k;Q++){const X=u[Q];if(X.cacheKey===U){Y=X,++Y.usedTimes;break}}return Y===void 0&&(Y=new ov(i,U,y,r),u.push(Y)),Y}function w(y){if(--y.usedTimes===0){const U=u.indexOf(y);u[U]=u[u.length-1],u.pop(),y.destroy()}}function L(y){c.remove(y)}function F(){c.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:C,acquireProgram:T,releaseProgram:w,releaseShaderCache:L,programs:u,dispose:F}}function hv(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function fv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function cc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function uc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f,d,g,v,_,m){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:g,groupOrder:v,renderOrder:f.renderOrder,z:_,group:m},i[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=g,p.groupOrder=v,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,d,g,v,_,m){const p=o(f,d,g,v,_,m);g.transmission>0?n.push(p):g.transparent===!0?s.push(p):t.push(p)}function c(f,d,g,v,_,m){const p=o(f,d,g,v,_,m);g.transmission>0?n.unshift(p):g.transparent===!0?s.unshift(p):t.unshift(p)}function l(f,d){t.length>1&&t.sort(f||fv),n.length>1&&n.sort(d||cc),s.length>1&&s.sort(d||cc)}function u(){for(let f=e,d=i.length;f<d;f++){const g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function dv(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new uc,i.set(n,[o])):s>=r.length?(o=new uc,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function pv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Ie,color:new bt};break;case"SpotLight":t={position:new Ie,direction:new Ie,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Ie,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Ie,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new Ie,halfWidth:new Ie,halfHeight:new Ie};break}return i[e.id]=t,t}}}function mv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let _v=0;function gv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function vv(i,e){const t=new pv,n=mv(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new Ie);const r=new Ie,o=new Ht,a=new Ht;function c(u,f){let d=0,g=0,v=0;for(let Y=0;Y<9;Y++)s.probe[Y].set(0,0,0);let _=0,m=0,p=0,x=0,b=0,A=0,C=0,T=0,w=0,L=0,F=0;u.sort(gv);const y=f===!0?Math.PI:1;for(let Y=0,Q=u.length;Y<Q;Y++){const k=u[Y],X=k.color,W=k.intensity,J=k.distance,ee=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)d+=X.r*W*y,g+=X.g*W*y,v+=X.b*W*y;else if(k.isLightProbe){for(let se=0;se<9;se++)s.probe[se].addScaledVector(k.sh.coefficients[se],W);F++}else if(k.isDirectionalLight){const se=t.get(k);if(se.color.copy(k.color).multiplyScalar(k.intensity*y),k.castShadow){const ue=k.shadow,ce=n.get(k);ce.shadowBias=ue.bias,ce.shadowNormalBias=ue.normalBias,ce.shadowRadius=ue.radius,ce.shadowMapSize=ue.mapSize,s.directionalShadow[_]=ce,s.directionalShadowMap[_]=ee,s.directionalShadowMatrix[_]=k.shadow.matrix,A++}s.directional[_]=se,_++}else if(k.isSpotLight){const se=t.get(k);se.position.setFromMatrixPosition(k.matrixWorld),se.color.copy(X).multiplyScalar(W*y),se.distance=J,se.coneCos=Math.cos(k.angle),se.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),se.decay=k.decay,s.spot[p]=se;const ue=k.shadow;if(k.map&&(s.spotLightMap[w]=k.map,w++,ue.updateMatrices(k),k.castShadow&&L++),s.spotLightMatrix[p]=ue.matrix,k.castShadow){const ce=n.get(k);ce.shadowBias=ue.bias,ce.shadowNormalBias=ue.normalBias,ce.shadowRadius=ue.radius,ce.shadowMapSize=ue.mapSize,s.spotShadow[p]=ce,s.spotShadowMap[p]=ee,T++}p++}else if(k.isRectAreaLight){const se=t.get(k);se.color.copy(X).multiplyScalar(W),se.halfWidth.set(k.width*.5,0,0),se.halfHeight.set(0,k.height*.5,0),s.rectArea[x]=se,x++}else if(k.isPointLight){const se=t.get(k);if(se.color.copy(k.color).multiplyScalar(k.intensity*y),se.distance=k.distance,se.decay=k.decay,k.castShadow){const ue=k.shadow,ce=n.get(k);ce.shadowBias=ue.bias,ce.shadowNormalBias=ue.normalBias,ce.shadowRadius=ue.radius,ce.shadowMapSize=ue.mapSize,ce.shadowCameraNear=ue.camera.near,ce.shadowCameraFar=ue.camera.far,s.pointShadow[m]=ce,s.pointShadowMap[m]=ee,s.pointShadowMatrix[m]=k.shadow.matrix,C++}s.point[m]=se,m++}else if(k.isHemisphereLight){const se=t.get(k);se.skyColor.copy(k.color).multiplyScalar(W*y),se.groundColor.copy(k.groundColor).multiplyScalar(W*y),s.hemi[b]=se,b++}}x>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=it.LTC_FLOAT_1,s.rectAreaLTC2=it.LTC_FLOAT_2):(s.rectAreaLTC1=it.LTC_HALF_1,s.rectAreaLTC2=it.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=it.LTC_FLOAT_1,s.rectAreaLTC2=it.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=it.LTC_HALF_1,s.rectAreaLTC2=it.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=g,s.ambient[2]=v;const U=s.hash;(U.directionalLength!==_||U.pointLength!==m||U.spotLength!==p||U.rectAreaLength!==x||U.hemiLength!==b||U.numDirectionalShadows!==A||U.numPointShadows!==C||U.numSpotShadows!==T||U.numSpotMaps!==w||U.numLightProbes!==F)&&(s.directional.length=_,s.spot.length=p,s.rectArea.length=x,s.point.length=m,s.hemi.length=b,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=T+w-L,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=F,U.directionalLength=_,U.pointLength=m,U.spotLength=p,U.rectAreaLength=x,U.hemiLength=b,U.numDirectionalShadows=A,U.numPointShadows=C,U.numSpotShadows=T,U.numSpotMaps=w,U.numLightProbes=F,s.version=_v++)}function l(u,f){let d=0,g=0,v=0,_=0,m=0;const p=f.matrixWorldInverse;for(let x=0,b=u.length;x<b;x++){const A=u[x];if(A.isDirectionalLight){const C=s.directional[d];C.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),d++}else if(A.isSpotLight){const C=s.spot[v];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),v++}else if(A.isRectAreaLight){const C=s.rectArea[_];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(p),a.identity(),o.copy(A.matrixWorld),o.premultiply(p),a.extractRotation(o),C.halfWidth.set(A.width*.5,0,0),C.halfHeight.set(0,A.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(A.isPointLight){const C=s.point[g];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(p),g++}else if(A.isHemisphereLight){const C=s.hemi[m];C.direction.setFromMatrixPosition(A.matrixWorld),C.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function hc(i,e){const t=new vv(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(f){n.push(f)}function a(f){s.push(f)}function c(f){t.setup(n,f)}function l(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function bv(i,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let c;return a===void 0?(c=new hc(i,e),t.set(r,[c])):o>=a.length?(c=new hc(i,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:n,dispose:s}}class xv extends _s{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ev extends _s{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Mv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sv=`uniform sampler2D shadow_pass;
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
}`;function yv(i,e,t){let n=new Ho;const s=new pt,r=new pt,o=new Zt,a=new xv({depthPacking:gd}),c=new Ev,l={},u=t.maxTextureSize,f={[pi]:Mn,[Mn]:pi,[cn]:cn},d=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:Mv,fragmentShader:Sv}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const v=new $t;v.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Yt(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yh;let p=this.type;this.render=function(T,w,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const F=i.getRenderTarget(),y=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(hi),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const Q=p!==Zn&&this.type===Zn,k=p===Zn&&this.type!==Zn;for(let X=0,W=T.length;X<W;X++){const J=T[X],ee=J.shadow;if(ee===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;s.copy(ee.mapSize);const se=ee.getFrameExtents();if(s.multiply(se),r.copy(ee.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/se.x),s.x=r.x*se.x,ee.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/se.y),s.y=r.y*se.y,ee.mapSize.y=r.y)),ee.map===null||Q===!0||k===!0){const ce=this.type!==Zn?{minFilter:ln,magFilter:ln}:{};ee.map!==null&&ee.map.dispose(),ee.map=new Pi(s.x,s.y,ce),ee.map.texture.name=J.name+".shadowMap",ee.camera.updateProjectionMatrix()}i.setRenderTarget(ee.map),i.clear();const ue=ee.getViewportCount();for(let ce=0;ce<ue;ce++){const le=ee.getViewport(ce);o.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),Y.viewport(o),ee.updateMatrices(J,ce),n=ee.getFrustum(),A(w,L,ee.camera,J,this.type)}ee.isPointLightShadow!==!0&&this.type===Zn&&x(ee,L),ee.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(F,y,U)};function x(T,w){const L=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Pi(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,L,d,_,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,L,g,_,null)}function b(T,w,L,F){let y=null;const U=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)y=U;else if(y=L.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const Y=y.uuid,Q=w.uuid;let k=l[Y];k===void 0&&(k={},l[Y]=k);let X=k[Q];X===void 0&&(X=y.clone(),k[Q]=X,w.addEventListener("dispose",C)),y=X}if(y.visible=w.visible,y.wireframe=w.wireframe,F===Zn?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:f[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const Y=i.properties.get(y);Y.light=L}return y}function A(T,w,L,F,y){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Zn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const Q=e.update(T),k=T.material;if(Array.isArray(k)){const X=Q.groups;for(let W=0,J=X.length;W<J;W++){const ee=X[W],se=k[ee.materialIndex];if(se&&se.visible){const ue=b(T,se,F,y);T.onBeforeShadow(i,T,w,L,Q,ue,ee),i.renderBufferDirect(L,null,Q,ue,T,ee),T.onAfterShadow(i,T,w,L,Q,ue,ee)}}}else if(k.visible){const X=b(T,k,F,y);T.onBeforeShadow(i,T,w,L,Q,X,null),i.renderBufferDirect(L,null,Q,X,T,null),T.onAfterShadow(i,T,w,L,Q,X,null)}}const Y=T.children;for(let Q=0,k=Y.length;Q<k;Q++)A(Y[Q],w,L,F,y)}function C(T){T.target.removeEventListener("dispose",C);for(const L in l){const F=l[L],y=T.target.uuid;y in F&&(F[y].dispose(),delete F[y])}}}function Tv(i,e,t){const n=t.isWebGL2;function s(){let G=!1;const De=new Zt;let we=null;const Fe=new Zt(0,0,0,0);return{setMask:function(Ge){we!==Ge&&!G&&(i.colorMask(Ge,Ge,Ge,Ge),we=Ge)},setLocked:function(Ge){G=Ge},setClear:function(Ge,Ze,Qe,et,ct){ct===!0&&(Ge*=et,Ze*=et,Qe*=et),De.set(Ge,Ze,Qe,et),Fe.equals(De)===!1&&(i.clearColor(Ge,Ze,Qe,et),Fe.copy(De))},reset:function(){G=!1,we=null,Fe.set(-1,0,0,0)}}}function r(){let G=!1,De=null,we=null,Fe=null;return{setTest:function(Ge){Ge?Ee(i.DEPTH_TEST):Me(i.DEPTH_TEST)},setMask:function(Ge){De!==Ge&&!G&&(i.depthMask(Ge),De=Ge)},setFunc:function(Ge){if(we!==Ge){switch(Ge){case jf:i.depthFunc(i.NEVER);break;case Yf:i.depthFunc(i.ALWAYS);break;case Kf:i.depthFunc(i.LESS);break;case yr:i.depthFunc(i.LEQUAL);break;case Zf:i.depthFunc(i.EQUAL);break;case Jf:i.depthFunc(i.GEQUAL);break;case Qf:i.depthFunc(i.GREATER);break;case $f:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}we=Ge}},setLocked:function(Ge){G=Ge},setClear:function(Ge){Fe!==Ge&&(i.clearDepth(Ge),Fe=Ge)},reset:function(){G=!1,De=null,we=null,Fe=null}}}function o(){let G=!1,De=null,we=null,Fe=null,Ge=null,Ze=null,Qe=null,et=null,ct=null;return{setTest:function(tt){G||(tt?Ee(i.STENCIL_TEST):Me(i.STENCIL_TEST))},setMask:function(tt){De!==tt&&!G&&(i.stencilMask(tt),De=tt)},setFunc:function(tt,ot,ft){(we!==tt||Fe!==ot||Ge!==ft)&&(i.stencilFunc(tt,ot,ft),we=tt,Fe=ot,Ge=ft)},setOp:function(tt,ot,ft){(Ze!==tt||Qe!==ot||et!==ft)&&(i.stencilOp(tt,ot,ft),Ze=tt,Qe=ot,et=ft)},setLocked:function(tt){G=tt},setClear:function(tt){ct!==tt&&(i.clearStencil(tt),ct=tt)},reset:function(){G=!1,De=null,we=null,Fe=null,Ge=null,Ze=null,Qe=null,et=null,ct=null}}}const a=new s,c=new r,l=new o,u=new WeakMap,f=new WeakMap;let d={},g={},v=new WeakMap,_=[],m=null,p=!1,x=null,b=null,A=null,C=null,T=null,w=null,L=null,F=new bt(0,0,0),y=0,U=!1,Y=null,Q=null,k=null,X=null,W=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,se=0;const ue=i.getParameter(i.VERSION);ue.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(ue)[1]),ee=se>=1):ue.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),ee=se>=2);let ce=null,le={};const he=i.getParameter(i.SCISSOR_BOX),z=i.getParameter(i.VIEWPORT),K=new Zt().fromArray(he),re=new Zt().fromArray(z);function D(G,De,we,Fe){const Ge=new Uint8Array(4),Ze=i.createTexture();i.bindTexture(G,Ze),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qe=0;Qe<we;Qe++)n&&(G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY)?i.texImage3D(De,0,i.RGBA,1,1,Fe,0,i.RGBA,i.UNSIGNED_BYTE,Ge):i.texImage2D(De+Qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ge);return Ze}const I={};I[i.TEXTURE_2D]=D(i.TEXTURE_2D,i.TEXTURE_2D,1),I[i.TEXTURE_CUBE_MAP]=D(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(I[i.TEXTURE_2D_ARRAY]=D(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),I[i.TEXTURE_3D]=D(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ee(i.DEPTH_TEST),c.setFunc(yr),ge(!1),B(Wa),Ee(i.CULL_FACE),oe(hi);function Ee(G){d[G]!==!0&&(i.enable(G),d[G]=!0)}function Me(G){d[G]!==!1&&(i.disable(G),d[G]=!1)}function Re(G,De){return g[G]!==De?(i.bindFramebuffer(G,De),g[G]=De,n&&(G===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=De),G===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=De)),!0):!1}function j(G,De){let we=_,Fe=!1;if(G)if(we=v.get(De),we===void 0&&(we=[],v.set(De,we)),G.isWebGLMultipleRenderTargets){const Ge=G.texture;if(we.length!==Ge.length||we[0]!==i.COLOR_ATTACHMENT0){for(let Ze=0,Qe=Ge.length;Ze<Qe;Ze++)we[Ze]=i.COLOR_ATTACHMENT0+Ze;we.length=Ge.length,Fe=!0}}else we[0]!==i.COLOR_ATTACHMENT0&&(we[0]=i.COLOR_ATTACHMENT0,Fe=!0);else we[0]!==i.BACK&&(we[0]=i.BACK,Fe=!0);Fe&&(t.isWebGL2?i.drawBuffers(we):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(we))}function Ae(G){return m!==G?(i.useProgram(G),m=G,!0):!1}const Se={[yi]:i.FUNC_ADD,[Df]:i.FUNC_SUBTRACT,[If]:i.FUNC_REVERSE_SUBTRACT};if(n)Se[Ya]=i.MIN,Se[Ka]=i.MAX;else{const G=e.get("EXT_blend_minmax");G!==null&&(Se[Ya]=G.MIN_EXT,Se[Ka]=G.MAX_EXT)}const Ne={[Nf]:i.ZERO,[Uf]:i.ONE,[Ff]:i.SRC_COLOR,[Ao]:i.SRC_ALPHA,[Hf]:i.SRC_ALPHA_SATURATE,[zf]:i.DST_COLOR,[kf]:i.DST_ALPHA,[Of]:i.ONE_MINUS_SRC_COLOR,[Co]:i.ONE_MINUS_SRC_ALPHA,[Vf]:i.ONE_MINUS_DST_COLOR,[Bf]:i.ONE_MINUS_DST_ALPHA,[Gf]:i.CONSTANT_COLOR,[Wf]:i.ONE_MINUS_CONSTANT_COLOR,[Xf]:i.CONSTANT_ALPHA,[qf]:i.ONE_MINUS_CONSTANT_ALPHA};function oe(G,De,we,Fe,Ge,Ze,Qe,et,ct,tt){if(G===hi){p===!0&&(Me(i.BLEND),p=!1);return}if(p===!1&&(Ee(i.BLEND),p=!0),G!==Lf){if(G!==x||tt!==U){if((b!==yi||T!==yi)&&(i.blendEquation(i.FUNC_ADD),b=yi,T=yi),tt)switch(G){case os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xa:i.blendFunc(i.ONE,i.ONE);break;case qa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ja:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case qa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ja:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}A=null,C=null,w=null,L=null,F.set(0,0,0),y=0,x=G,U=tt}return}Ge=Ge||De,Ze=Ze||we,Qe=Qe||Fe,(De!==b||Ge!==T)&&(i.blendEquationSeparate(Se[De],Se[Ge]),b=De,T=Ge),(we!==A||Fe!==C||Ze!==w||Qe!==L)&&(i.blendFuncSeparate(Ne[we],Ne[Fe],Ne[Ze],Ne[Qe]),A=we,C=Fe,w=Ze,L=Qe),(et.equals(F)===!1||ct!==y)&&(i.blendColor(et.r,et.g,et.b,ct),F.copy(et),y=ct),x=G,U=!1}function ie(G,De){G.side===cn?Me(i.CULL_FACE):Ee(i.CULL_FACE);let we=G.side===Mn;De&&(we=!we),ge(we),G.blending===os&&G.transparent===!1?oe(hi):oe(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),a.setMask(G.colorWrite);const Fe=G.stencilWrite;l.setTest(Fe),Fe&&(l.setMask(G.stencilWriteMask),l.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),l.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),xe(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Ee(i.SAMPLE_ALPHA_TO_COVERAGE):Me(i.SAMPLE_ALPHA_TO_COVERAGE)}function ge(G){Y!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),Y=G)}function B(G){G!==Cf?(Ee(i.CULL_FACE),G!==Q&&(G===Wa?i.cullFace(i.BACK):G===Rf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Me(i.CULL_FACE),Q=G}function P(G){G!==k&&(ee&&i.lineWidth(G),k=G)}function xe(G,De,we){G?(Ee(i.POLYGON_OFFSET_FILL),(X!==De||W!==we)&&(i.polygonOffset(De,we),X=De,W=we)):Me(i.POLYGON_OFFSET_FILL)}function te(G){G?Ee(i.SCISSOR_TEST):Me(i.SCISSOR_TEST)}function N(G){G===void 0&&(G=i.TEXTURE0+J-1),ce!==G&&(i.activeTexture(G),ce=G)}function Z(G,De,we){we===void 0&&(ce===null?we=i.TEXTURE0+J-1:we=ce);let Fe=le[we];Fe===void 0&&(Fe={type:void 0,texture:void 0},le[we]=Fe),(Fe.type!==G||Fe.texture!==De)&&(ce!==we&&(i.activeTexture(we),ce=we),i.bindTexture(G,De||I[G]),Fe.type=G,Fe.texture=De)}function me(){const G=le[ce];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function _e(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ae(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function be(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Te(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ce(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ye(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Le(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Be(G){K.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),K.copy(G))}function q(G){re.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),re.copy(G))}function ke(G,De){let we=f.get(De);we===void 0&&(we=new WeakMap,f.set(De,we));let Fe=we.get(G);Fe===void 0&&(Fe=i.getUniformBlockIndex(De,G.name),we.set(G,Fe))}function je(G,De){const Fe=f.get(De).get(G);u.get(De)!==Fe&&(i.uniformBlockBinding(De,Fe,G.__bindingPointIndex),u.set(De,Fe))}function He(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ce=null,le={},g={},v=new WeakMap,_=[],m=null,p=!1,x=null,b=null,A=null,C=null,T=null,w=null,L=null,F=new bt(0,0,0),y=0,U=!1,Y=null,Q=null,k=null,X=null,W=null,K.set(0,0,i.canvas.width,i.canvas.height),re.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ee,disable:Me,bindFramebuffer:Re,drawBuffers:j,useProgram:Ae,setBlending:oe,setMaterial:ie,setFlipSided:ge,setCullFace:B,setLineWidth:P,setPolygonOffset:xe,setScissorTest:te,activeTexture:N,bindTexture:Z,unbindTexture:me,compressedTexImage2D:_e,compressedTexImage3D:$,texImage2D:Oe,texImage3D:Le,updateUBOMapping:ke,uniformBlockBinding:je,texStorage2D:Ce,texStorage3D:Ye,texSubImage2D:ae,texSubImage3D:be,compressedTexSubImage2D:ye,compressedTexSubImage3D:Te,scissor:Be,viewport:q,reset:He}}function wv(i,e,t,n,s,r,o){const a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(B,P){return g?new OffscreenCanvas(B,P):Rr("canvas")}function _(B,P,xe,te){let N=1;if((B.width>te||B.height>te)&&(N=te/Math.max(B.width,B.height)),N<1||P===!0)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap){const Z=P?Uo:Math.floor,me=Z(N*B.width),_e=Z(N*B.height);f===void 0&&(f=v(me,_e));const $=xe?v(me,_e):f;return $.width=me,$.height=_e,$.getContext("2d").drawImage(B,0,0,me,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+me+"x"+_e+")."),$}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),B;return B}function m(B){return Tl(B.width)&&Tl(B.height)}function p(B){return a?!1:B.wrapS!==Fn||B.wrapT!==Fn||B.minFilter!==ln&&B.minFilter!==gn}function x(B,P){return B.generateMipmaps&&P&&B.minFilter!==ln&&B.minFilter!==gn}function b(B){i.generateMipmap(B)}function A(B,P,xe,te,N=!1){if(a===!1)return P;if(B!==null){if(i[B]!==void 0)return i[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let Z=P;if(P===i.RED&&(xe===i.FLOAT&&(Z=i.R32F),xe===i.HALF_FLOAT&&(Z=i.R16F),xe===i.UNSIGNED_BYTE&&(Z=i.R8)),P===i.RED_INTEGER&&(xe===i.UNSIGNED_BYTE&&(Z=i.R8UI),xe===i.UNSIGNED_SHORT&&(Z=i.R16UI),xe===i.UNSIGNED_INT&&(Z=i.R32UI),xe===i.BYTE&&(Z=i.R8I),xe===i.SHORT&&(Z=i.R16I),xe===i.INT&&(Z=i.R32I)),P===i.RG&&(xe===i.FLOAT&&(Z=i.RG32F),xe===i.HALF_FLOAT&&(Z=i.RG16F),xe===i.UNSIGNED_BYTE&&(Z=i.RG8)),P===i.RGBA){const me=N?Tr:Rt.getTransfer(te);xe===i.FLOAT&&(Z=i.RGBA32F),xe===i.HALF_FLOAT&&(Z=i.RGBA16F),xe===i.UNSIGNED_BYTE&&(Z=me===Nt?i.SRGB8_ALPHA8:i.RGBA8),xe===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),xe===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function C(B,P,xe){return x(B,xe)===!0||B.isFramebufferTexture&&B.minFilter!==ln&&B.minFilter!==gn?Math.log2(Math.max(P.width,P.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?P.mipmaps.length:1}function T(B){return B===ln||B===Za||B===xs?i.NEAREST:i.LINEAR}function w(B){const P=B.target;P.removeEventListener("dispose",w),F(P),P.isVideoTexture&&u.delete(P)}function L(B){const P=B.target;P.removeEventListener("dispose",L),U(P)}function F(B){const P=n.get(B);if(P.__webglInit===void 0)return;const xe=B.source,te=d.get(xe);if(te){const N=te[P.__cacheKey];N.usedTimes--,N.usedTimes===0&&y(B),Object.keys(te).length===0&&d.delete(xe)}n.remove(B)}function y(B){const P=n.get(B);i.deleteTexture(P.__webglTexture);const xe=B.source,te=d.get(xe);delete te[P.__cacheKey],o.memory.textures--}function U(B){const P=B.texture,xe=n.get(B),te=n.get(P);if(te.__webglTexture!==void 0&&(i.deleteTexture(te.__webglTexture),o.memory.textures--),B.depthTexture&&B.depthTexture.dispose(),B.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(xe.__webglFramebuffer[N]))for(let Z=0;Z<xe.__webglFramebuffer[N].length;Z++)i.deleteFramebuffer(xe.__webglFramebuffer[N][Z]);else i.deleteFramebuffer(xe.__webglFramebuffer[N]);xe.__webglDepthbuffer&&i.deleteRenderbuffer(xe.__webglDepthbuffer[N])}else{if(Array.isArray(xe.__webglFramebuffer))for(let N=0;N<xe.__webglFramebuffer.length;N++)i.deleteFramebuffer(xe.__webglFramebuffer[N]);else i.deleteFramebuffer(xe.__webglFramebuffer);if(xe.__webglDepthbuffer&&i.deleteRenderbuffer(xe.__webglDepthbuffer),xe.__webglMultisampledFramebuffer&&i.deleteFramebuffer(xe.__webglMultisampledFramebuffer),xe.__webglColorRenderbuffer)for(let N=0;N<xe.__webglColorRenderbuffer.length;N++)xe.__webglColorRenderbuffer[N]&&i.deleteRenderbuffer(xe.__webglColorRenderbuffer[N]);xe.__webglDepthRenderbuffer&&i.deleteRenderbuffer(xe.__webglDepthRenderbuffer)}if(B.isWebGLMultipleRenderTargets)for(let N=0,Z=P.length;N<Z;N++){const me=n.get(P[N]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),o.memory.textures--),n.remove(P[N])}n.remove(P),n.remove(B)}let Y=0;function Q(){Y=0}function k(){const B=Y;return B>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+s.maxTextures),Y+=1,B}function X(B){const P=[];return P.push(B.wrapS),P.push(B.wrapT),P.push(B.wrapR||0),P.push(B.magFilter),P.push(B.minFilter),P.push(B.anisotropy),P.push(B.internalFormat),P.push(B.format),P.push(B.type),P.push(B.generateMipmaps),P.push(B.premultiplyAlpha),P.push(B.flipY),P.push(B.unpackAlignment),P.push(B.colorSpace),P.join()}function W(B,P){const xe=n.get(B);if(B.isVideoTexture&&ie(B),B.isRenderTargetTexture===!1&&B.version>0&&xe.__version!==B.version){const te=B.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(xe,B,P);return}}t.bindTexture(i.TEXTURE_2D,xe.__webglTexture,i.TEXTURE0+P)}function J(B,P){const xe=n.get(B);if(B.version>0&&xe.__version!==B.version){K(xe,B,P);return}t.bindTexture(i.TEXTURE_2D_ARRAY,xe.__webglTexture,i.TEXTURE0+P)}function ee(B,P){const xe=n.get(B);if(B.version>0&&xe.__version!==B.version){K(xe,B,P);return}t.bindTexture(i.TEXTURE_3D,xe.__webglTexture,i.TEXTURE0+P)}function se(B,P){const xe=n.get(B);if(B.version>0&&xe.__version!==B.version){re(xe,B,P);return}t.bindTexture(i.TEXTURE_CUBE_MAP,xe.__webglTexture,i.TEXTURE0+P)}const ue={[Lo]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[Do]:i.MIRRORED_REPEAT},ce={[ln]:i.NEAREST,[Za]:i.NEAREST_MIPMAP_NEAREST,[xs]:i.NEAREST_MIPMAP_LINEAR,[gn]:i.LINEAR,[Hr]:i.LINEAR_MIPMAP_NEAREST,[wi]:i.LINEAR_MIPMAP_LINEAR},le={[bd]:i.NEVER,[Td]:i.ALWAYS,[xd]:i.LESS,[Uh]:i.LEQUAL,[Ed]:i.EQUAL,[yd]:i.GEQUAL,[Md]:i.GREATER,[Sd]:i.NOTEQUAL};function he(B,P,xe){if(P.type===$n&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===gn||P.magFilter===Hr||P.magFilter===xs||P.magFilter===wi||P.minFilter===gn||P.minFilter===Hr||P.minFilter===xs||P.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),xe?(i.texParameteri(B,i.TEXTURE_WRAP_S,ue[P.wrapS]),i.texParameteri(B,i.TEXTURE_WRAP_T,ue[P.wrapT]),(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)&&i.texParameteri(B,i.TEXTURE_WRAP_R,ue[P.wrapR]),i.texParameteri(B,i.TEXTURE_MAG_FILTER,ce[P.magFilter]),i.texParameteri(B,i.TEXTURE_MIN_FILTER,ce[P.minFilter])):(i.texParameteri(B,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(B,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)&&i.texParameteri(B,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(P.wrapS!==Fn||P.wrapT!==Fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(B,i.TEXTURE_MAG_FILTER,T(P.magFilter)),i.texParameteri(B,i.TEXTURE_MIN_FILTER,T(P.minFilter)),P.minFilter!==ln&&P.minFilter!==gn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),P.compareFunction&&(i.texParameteri(B,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(B,i.TEXTURE_COMPARE_FUNC,le[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(P.magFilter===ln||P.minFilter!==xs&&P.minFilter!==wi||P.type===$n&&e.has("OES_texture_float_linear")===!1||a===!1&&P.type===Is&&e.has("OES_texture_half_float_linear")===!1)return;(P.anisotropy>1||n.get(P).__currentAnisotropy)&&(i.texParameterf(B,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,s.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy)}}function z(B,P){let xe=!1;B.__webglInit===void 0&&(B.__webglInit=!0,P.addEventListener("dispose",w));const te=P.source;let N=d.get(te);N===void 0&&(N={},d.set(te,N));const Z=X(P);if(Z!==B.__cacheKey){N[Z]===void 0&&(N[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,xe=!0),N[Z].usedTimes++;const me=N[B.__cacheKey];me!==void 0&&(N[B.__cacheKey].usedTimes--,me.usedTimes===0&&y(P)),B.__cacheKey=Z,B.__webglTexture=N[Z].texture}return xe}function K(B,P,xe){let te=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(te=i.TEXTURE_3D);const N=z(B,P),Z=P.source;t.bindTexture(te,B.__webglTexture,i.TEXTURE0+xe);const me=n.get(Z);if(Z.version!==me.__version||N===!0){t.activeTexture(i.TEXTURE0+xe);const _e=Rt.getPrimaries(Rt.workingColorSpace),$=P.colorSpace===Ln?null:Rt.getPrimaries(P.colorSpace),ae=P.colorSpace===Ln||_e===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const be=p(P)&&m(P.image)===!1;let ye=_(P.image,be,!1,s.maxTextureSize);ye=ge(P,ye);const Te=m(ye)||a,Ce=r.convert(P.format,P.colorSpace);let Ye=r.convert(P.type),Oe=A(P.internalFormat,Ce,Ye,P.colorSpace,P.isVideoTexture);he(te,P,Te);let Le;const Be=P.mipmaps,q=a&&P.isVideoTexture!==!0&&Oe!==Dh,ke=me.__version===void 0||N===!0,je=Z.dataReady,He=C(P,ye,Te);if(P.isDepthTexture)Oe=i.DEPTH_COMPONENT,a?P.type===$n?Oe=i.DEPTH_COMPONENT32F:P.type===ui?Oe=i.DEPTH_COMPONENT24:P.type===Ai?Oe=i.DEPTH24_STENCIL8:Oe=i.DEPTH_COMPONENT16:P.type===$n&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),P.format===Ci&&Oe===i.DEPTH_COMPONENT&&P.type!==Bo&&P.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),P.type=ui,Ye=r.convert(P.type)),P.format===ds&&Oe===i.DEPTH_COMPONENT&&(Oe=i.DEPTH_STENCIL,P.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),P.type=Ai,Ye=r.convert(P.type))),ke&&(q?t.texStorage2D(i.TEXTURE_2D,1,Oe,ye.width,ye.height):t.texImage2D(i.TEXTURE_2D,0,Oe,ye.width,ye.height,0,Ce,Ye,null));else if(P.isDataTexture)if(Be.length>0&&Te){q&&ke&&t.texStorage2D(i.TEXTURE_2D,He,Oe,Be[0].width,Be[0].height);for(let G=0,De=Be.length;G<De;G++)Le=Be[G],q?je&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,Le.width,Le.height,Ce,Ye,Le.data):t.texImage2D(i.TEXTURE_2D,G,Oe,Le.width,Le.height,0,Ce,Ye,Le.data);P.generateMipmaps=!1}else q?(ke&&t.texStorage2D(i.TEXTURE_2D,He,Oe,ye.width,ye.height),je&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye.width,ye.height,Ce,Ye,ye.data)):t.texImage2D(i.TEXTURE_2D,0,Oe,ye.width,ye.height,0,Ce,Ye,ye.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){q&&ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,He,Oe,Be[0].width,Be[0].height,ye.depth);for(let G=0,De=Be.length;G<De;G++)Le=Be[G],P.format!==On?Ce!==null?q?je&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,Le.width,Le.height,ye.depth,Ce,Le.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,Oe,Le.width,Le.height,ye.depth,0,Le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?je&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,Le.width,Le.height,ye.depth,Ce,Ye,Le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,G,Oe,Le.width,Le.height,ye.depth,0,Ce,Ye,Le.data)}else{q&&ke&&t.texStorage2D(i.TEXTURE_2D,He,Oe,Be[0].width,Be[0].height);for(let G=0,De=Be.length;G<De;G++)Le=Be[G],P.format!==On?Ce!==null?q?je&&t.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,Le.width,Le.height,Ce,Le.data):t.compressedTexImage2D(i.TEXTURE_2D,G,Oe,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?je&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,Le.width,Le.height,Ce,Ye,Le.data):t.texImage2D(i.TEXTURE_2D,G,Oe,Le.width,Le.height,0,Ce,Ye,Le.data)}else if(P.isDataArrayTexture)q?(ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,He,Oe,ye.width,ye.height,ye.depth),je&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Ce,Ye,ye.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,ye.width,ye.height,ye.depth,0,Ce,Ye,ye.data);else if(P.isData3DTexture)q?(ke&&t.texStorage3D(i.TEXTURE_3D,He,Oe,ye.width,ye.height,ye.depth),je&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Ce,Ye,ye.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,ye.width,ye.height,ye.depth,0,Ce,Ye,ye.data);else if(P.isFramebufferTexture){if(ke)if(q)t.texStorage2D(i.TEXTURE_2D,He,Oe,ye.width,ye.height);else{let G=ye.width,De=ye.height;for(let we=0;we<He;we++)t.texImage2D(i.TEXTURE_2D,we,Oe,G,De,0,Ce,Ye,null),G>>=1,De>>=1}}else if(Be.length>0&&Te){q&&ke&&t.texStorage2D(i.TEXTURE_2D,He,Oe,Be[0].width,Be[0].height);for(let G=0,De=Be.length;G<De;G++)Le=Be[G],q?je&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,Ce,Ye,Le):t.texImage2D(i.TEXTURE_2D,G,Oe,Ce,Ye,Le);P.generateMipmaps=!1}else q?(ke&&t.texStorage2D(i.TEXTURE_2D,He,Oe,ye.width,ye.height),je&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ce,Ye,ye)):t.texImage2D(i.TEXTURE_2D,0,Oe,Ce,Ye,ye);x(P,Te)&&b(te),me.__version=Z.version,P.onUpdate&&P.onUpdate(P)}B.__version=P.version}function re(B,P,xe){if(P.image.length!==6)return;const te=z(B,P),N=P.source;t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+xe);const Z=n.get(N);if(N.version!==Z.__version||te===!0){t.activeTexture(i.TEXTURE0+xe);const me=Rt.getPrimaries(Rt.workingColorSpace),_e=P.colorSpace===Ln?null:Rt.getPrimaries(P.colorSpace),$=P.colorSpace===Ln||me===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);const ae=P.isCompressedTexture||P.image[0].isCompressedTexture,be=P.image[0]&&P.image[0].isDataTexture,ye=[];for(let G=0;G<6;G++)!ae&&!be?ye[G]=_(P.image[G],!1,!0,s.maxCubemapSize):ye[G]=be?P.image[G].image:P.image[G],ye[G]=ge(P,ye[G]);const Te=ye[0],Ce=m(Te)||a,Ye=r.convert(P.format,P.colorSpace),Oe=r.convert(P.type),Le=A(P.internalFormat,Ye,Oe,P.colorSpace),Be=a&&P.isVideoTexture!==!0,q=Z.__version===void 0||te===!0,ke=N.dataReady;let je=C(P,Te,Ce);he(i.TEXTURE_CUBE_MAP,P,Ce);let He;if(ae){Be&&q&&t.texStorage2D(i.TEXTURE_CUBE_MAP,je,Le,Te.width,Te.height);for(let G=0;G<6;G++){He=ye[G].mipmaps;for(let De=0;De<He.length;De++){const we=He[De];P.format!==On?Ye!==null?Be?ke&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,De,0,0,we.width,we.height,Ye,we.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,De,Le,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?ke&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,De,0,0,we.width,we.height,Ye,Oe,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,De,Le,we.width,we.height,0,Ye,Oe,we.data)}}}else{He=P.mipmaps,Be&&q&&(He.length>0&&je++,t.texStorage2D(i.TEXTURE_CUBE_MAP,je,Le,ye[0].width,ye[0].height));for(let G=0;G<6;G++)if(be){Be?ke&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,ye[G].width,ye[G].height,Ye,Oe,ye[G].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Le,ye[G].width,ye[G].height,0,Ye,Oe,ye[G].data);for(let De=0;De<He.length;De++){const Fe=He[De].image[G].image;Be?ke&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,De+1,0,0,Fe.width,Fe.height,Ye,Oe,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,De+1,Le,Fe.width,Fe.height,0,Ye,Oe,Fe.data)}}else{Be?ke&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Ye,Oe,ye[G]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Le,Ye,Oe,ye[G]);for(let De=0;De<He.length;De++){const we=He[De];Be?ke&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,De+1,0,0,Ye,Oe,we.image[G]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,De+1,Le,Ye,Oe,we.image[G])}}}x(P,Ce)&&b(i.TEXTURE_CUBE_MAP),Z.__version=N.version,P.onUpdate&&P.onUpdate(P)}B.__version=P.version}function D(B,P,xe,te,N,Z){const me=r.convert(xe.format,xe.colorSpace),_e=r.convert(xe.type),$=A(xe.internalFormat,me,_e,xe.colorSpace);if(!n.get(P).__hasExternalTextures){const be=Math.max(1,P.width>>Z),ye=Math.max(1,P.height>>Z);N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?t.texImage3D(N,Z,$,be,ye,P.depth,0,me,_e,null):t.texImage2D(N,Z,$,be,ye,0,me,_e,null)}t.bindFramebuffer(i.FRAMEBUFFER,B),oe(P)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,N,n.get(xe).__webglTexture,0,Ne(P)):(N===i.TEXTURE_2D||N>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&N<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,N,n.get(xe).__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function I(B,P,xe){if(i.bindRenderbuffer(i.RENDERBUFFER,B),P.depthBuffer&&!P.stencilBuffer){let te=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(xe||oe(P)){const N=P.depthTexture;N&&N.isDepthTexture&&(N.type===$n?te=i.DEPTH_COMPONENT32F:N.type===ui&&(te=i.DEPTH_COMPONENT24));const Z=Ne(P);oe(P)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Z,te,P.width,P.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,te,P.width,P.height)}else i.renderbufferStorage(i.RENDERBUFFER,te,P.width,P.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,B)}else if(P.depthBuffer&&P.stencilBuffer){const te=Ne(P);xe&&oe(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,P.width,P.height):oe(P)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,B)}else{const te=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let N=0;N<te.length;N++){const Z=te[N],me=r.convert(Z.format,Z.colorSpace),_e=r.convert(Z.type),$=A(Z.internalFormat,me,_e,Z.colorSpace),ae=Ne(P);xe&&oe(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,$,P.width,P.height):oe(P)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,$,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,$,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ee(B,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,B),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),W(P.depthTexture,0);const te=n.get(P.depthTexture).__webglTexture,N=Ne(P);if(P.depthTexture.format===Ci)oe(P)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,N):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(P.depthTexture.format===ds)oe(P)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,N):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Me(B){const P=n.get(B),xe=B.isWebGLCubeRenderTarget===!0;if(B.depthTexture&&!P.__autoAllocateDepthBuffer){if(xe)throw new Error("target.depthTexture not supported in Cube render targets");Ee(P.__webglFramebuffer,B)}else if(xe){P.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[te]),P.__webglDepthbuffer[te]=i.createRenderbuffer(),I(P.__webglDepthbuffer[te],B,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer=i.createRenderbuffer(),I(P.__webglDepthbuffer,B,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(B,P,xe){const te=n.get(B);P!==void 0&&D(te.__webglFramebuffer,B,B.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),xe!==void 0&&Me(B)}function j(B){const P=B.texture,xe=n.get(B),te=n.get(P);B.addEventListener("dispose",L),B.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=P.version,o.memory.textures++);const N=B.isWebGLCubeRenderTarget===!0,Z=B.isWebGLMultipleRenderTargets===!0,me=m(B)||a;if(N){xe.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(a&&P.mipmaps&&P.mipmaps.length>0){xe.__webglFramebuffer[_e]=[];for(let $=0;$<P.mipmaps.length;$++)xe.__webglFramebuffer[_e][$]=i.createFramebuffer()}else xe.__webglFramebuffer[_e]=i.createFramebuffer()}else{if(a&&P.mipmaps&&P.mipmaps.length>0){xe.__webglFramebuffer=[];for(let _e=0;_e<P.mipmaps.length;_e++)xe.__webglFramebuffer[_e]=i.createFramebuffer()}else xe.__webglFramebuffer=i.createFramebuffer();if(Z)if(s.drawBuffers){const _e=B.texture;for(let $=0,ae=_e.length;$<ae;$++){const be=n.get(_e[$]);be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&B.samples>0&&oe(B)===!1){const _e=Z?P:[P];xe.__webglMultisampledFramebuffer=i.createFramebuffer(),xe.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer);for(let $=0;$<_e.length;$++){const ae=_e[$];xe.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,xe.__webglColorRenderbuffer[$]);const be=r.convert(ae.format,ae.colorSpace),ye=r.convert(ae.type),Te=A(ae.internalFormat,be,ye,ae.colorSpace,B.isXRRenderTarget===!0),Ce=Ne(B);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,Te,B.width,B.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,xe.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),B.depthBuffer&&(xe.__webglDepthRenderbuffer=i.createRenderbuffer(),I(xe.__webglDepthRenderbuffer,B,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(N){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),he(i.TEXTURE_CUBE_MAP,P,me);for(let _e=0;_e<6;_e++)if(a&&P.mipmaps&&P.mipmaps.length>0)for(let $=0;$<P.mipmaps.length;$++)D(xe.__webglFramebuffer[_e][$],B,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$);else D(xe.__webglFramebuffer[_e],B,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);x(P,me)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Z){const _e=B.texture;for(let $=0,ae=_e.length;$<ae;$++){const be=_e[$],ye=n.get(be);t.bindTexture(i.TEXTURE_2D,ye.__webglTexture),he(i.TEXTURE_2D,be,me),D(xe.__webglFramebuffer,B,be,i.COLOR_ATTACHMENT0+$,i.TEXTURE_2D,0),x(be,me)&&b(i.TEXTURE_2D)}t.unbindTexture()}else{let _e=i.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(a?_e=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(_e,te.__webglTexture),he(_e,P,me),a&&P.mipmaps&&P.mipmaps.length>0)for(let $=0;$<P.mipmaps.length;$++)D(xe.__webglFramebuffer[$],B,P,i.COLOR_ATTACHMENT0,_e,$);else D(xe.__webglFramebuffer,B,P,i.COLOR_ATTACHMENT0,_e,0);x(P,me)&&b(_e),t.unbindTexture()}B.depthBuffer&&Me(B)}function Ae(B){const P=m(B)||a,xe=B.isWebGLMultipleRenderTargets===!0?B.texture:[B.texture];for(let te=0,N=xe.length;te<N;te++){const Z=xe[te];if(x(Z,P)){const me=B.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,_e=n.get(Z).__webglTexture;t.bindTexture(me,_e),b(me),t.unbindTexture()}}}function Se(B){if(a&&B.samples>0&&oe(B)===!1){const P=B.isWebGLMultipleRenderTargets?B.texture:[B.texture],xe=B.width,te=B.height;let N=i.COLOR_BUFFER_BIT;const Z=[],me=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(B),$=B.isWebGLMultipleRenderTargets===!0;if($)for(let ae=0;ae<P.length;ae++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let ae=0;ae<P.length;ae++){Z.push(i.COLOR_ATTACHMENT0+ae),B.depthBuffer&&Z.push(me);const be=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;if(be===!1&&(B.depthBuffer&&(N|=i.DEPTH_BUFFER_BIT),B.stencilBuffer&&(N|=i.STENCIL_BUFFER_BIT)),$&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[ae]),be===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[me]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[me])),$){const ye=n.get(P[ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ye,0)}i.blitFramebuffer(0,0,xe,te,0,0,xe,te,N,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Z)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let ae=0;ae<P.length;ae++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,_e.__webglColorRenderbuffer[ae]);const be=n.get(P[ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}}function Ne(B){return Math.min(s.maxSamples,B.samples)}function oe(B){const P=n.get(B);return a&&B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function ie(B){const P=o.render.frame;u.get(B)!==P&&(u.set(B,P),B.update())}function ge(B,P){const xe=B.colorSpace,te=B.format,N=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||B.format===Io||xe!==ii&&xe!==Ln&&(Rt.getTransfer(xe)===Nt?a===!1?e.has("EXT_sRGB")===!0&&te===On?(B.format=Io,B.minFilter=gn,B.generateMipmaps=!1):P=Oh.sRGBToLinear(P):(te!==On||N!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",xe)),P}this.allocateTextureUnit=k,this.resetTextureUnits=Q,this.setTexture2D=W,this.setTexture2DArray=J,this.setTexture3D=ee,this.setTextureCube=se,this.rebindTextures=Re,this.setupRenderTarget=j,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=D,this.useMultisampledRTT=oe}function Av(i,e,t){const n=t.isWebGL2;function s(r,o=Ln){let a;const c=Rt.getTransfer(o);if(r===di)return i.UNSIGNED_BYTE;if(r===Ah)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Ch)return i.UNSIGNED_SHORT_5_5_5_1;if(r===ld)return i.BYTE;if(r===cd)return i.SHORT;if(r===Bo)return i.UNSIGNED_SHORT;if(r===wh)return i.INT;if(r===ui)return i.UNSIGNED_INT;if(r===$n)return i.FLOAT;if(r===Is)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===ud)return i.ALPHA;if(r===On)return i.RGBA;if(r===hd)return i.LUMINANCE;if(r===fd)return i.LUMINANCE_ALPHA;if(r===Ci)return i.DEPTH_COMPONENT;if(r===ds)return i.DEPTH_STENCIL;if(r===Io)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===dd)return i.RED;if(r===Rh)return i.RED_INTEGER;if(r===pd)return i.RG;if(r===Ph)return i.RG_INTEGER;if(r===Lh)return i.RGBA_INTEGER;if(r===Gr||r===Wr||r===Xr||r===qr)if(c===Nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Gr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Wr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Xr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===qr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Gr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Wr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Xr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===qr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ja||r===Qa||r===$a||r===el)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Ja)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===$a)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===el)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Dh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===tl||r===nl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===tl)return c===Nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===nl)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===il||r===sl||r===rl||r===ol||r===al||r===ll||r===cl||r===ul||r===hl||r===fl||r===dl||r===pl||r===ml||r===_l)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===il)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===sl)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===rl)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ol)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===al)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ll)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===cl)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ul)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===hl)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===fl)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===dl)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===pl)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ml)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===_l)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===jr||r===gl||r===vl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===jr)return c===Nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===gl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===vl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===md||r===bl||r===xl||r===El)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===jr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===bl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===El)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ai?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class Cv extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class rs extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rv={type:"move"};class vo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),g=.02,v=.005;l.inputState.pinching&&d>g+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=g-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rv)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new rs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Pv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lv=`
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

}`;class Dv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new rn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,s=new mi({extensions:{fragDepth:!0},vertexShader:Pv,fragmentShader:Lv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Yt(new ms(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Iv extends Ii{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,d=null,g=null,v=null;const _=new Dv,m=t.getContextAttributes();let p=null,x=null;const b=[],A=[],C=new pt;let T=null;const w=new Pn;w.layers.enable(1),w.viewport=new Zt;const L=new Pn;L.layers.enable(2),L.viewport=new Zt;const F=[w,L],y=new Cv;y.layers.enable(1),y.layers.enable(2);let U=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let K=b[z];return K===void 0&&(K=new vo,b[z]=K),K.getTargetRaySpace()},this.getControllerGrip=function(z){let K=b[z];return K===void 0&&(K=new vo,b[z]=K),K.getGripSpace()},this.getHand=function(z){let K=b[z];return K===void 0&&(K=new vo,b[z]=K),K.getHandSpace()};function Q(z){const K=A.indexOf(z.inputSource);if(K===-1)return;const re=b[K];re!==void 0&&(re.update(z.inputSource,z.frame,l||o),re.dispatchEvent({type:z.type,data:z.inputSource}))}function k(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",X);for(let z=0;z<b.length;z++){const K=A[z];K!==null&&(A[z]=null,b[z].disconnect(K))}U=null,Y=null,_.reset(),e.setRenderTarget(p),g=null,d=null,f=null,s=null,x=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",k),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:s.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,K),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),x=new Pi(g.framebufferWidth,g.framebufferHeight,{format:On,type:di,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,re=null,D=null;m.depth&&(D=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=m.stencil?ds:Ci,re=m.stencil?Ai:ui);const I={colorFormat:t.RGBA8,depthFormat:D,scaleFactor:r};f=new XRWebGLBinding(s,t),d=f.createProjectionLayer(I),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Pi(d.textureWidth,d.textureHeight,{format:On,type:di,depthTexture:new Kh(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const Ee=e.properties.get(x);Ee.__ignoreDepthValues=d.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),he.setContext(s),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function X(z){for(let K=0;K<z.removed.length;K++){const re=z.removed[K],D=A.indexOf(re);D>=0&&(A[D]=null,b[D].disconnect(re))}for(let K=0;K<z.added.length;K++){const re=z.added[K];let D=A.indexOf(re);if(D===-1){for(let Ee=0;Ee<b.length;Ee++)if(Ee>=A.length){A.push(re),D=Ee;break}else if(A[Ee]===null){A[Ee]=re,D=Ee;break}if(D===-1)break}const I=b[D];I&&I.connect(re)}}const W=new Ie,J=new Ie;function ee(z,K,re){W.setFromMatrixPosition(K.matrixWorld),J.setFromMatrixPosition(re.matrixWorld);const D=W.distanceTo(J),I=K.projectionMatrix.elements,Ee=re.projectionMatrix.elements,Me=I[14]/(I[10]-1),Re=I[14]/(I[10]+1),j=(I[9]+1)/I[5],Ae=(I[9]-1)/I[5],Se=(I[8]-1)/I[0],Ne=(Ee[8]+1)/Ee[0],oe=Me*Se,ie=Me*Ne,ge=D/(-Se+Ne),B=ge*-Se;K.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(B),z.translateZ(ge),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const P=Me+ge,xe=Re+ge,te=oe-B,N=ie+(D-B),Z=j*Re/xe*P,me=Ae*Re/xe*P;z.projectionMatrix.makePerspective(te,N,Z,me,P,xe),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function se(z,K){K===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(K.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;_.texture!==null&&(z.near=_.depthNear,z.far=_.depthFar),y.near=L.near=w.near=z.near,y.far=L.far=w.far=z.far,(U!==y.near||Y!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),U=y.near,Y=y.far,w.near=U,w.far=Y,L.near=U,L.far=Y,w.updateProjectionMatrix(),L.updateProjectionMatrix(),z.updateProjectionMatrix());const K=z.parent,re=y.cameras;se(y,K);for(let D=0;D<re.length;D++)se(re[D],K);re.length===2?ee(y,w,L):y.projectionMatrix.copy(w.projectionMatrix),ue(z,y,K)};function ue(z,K,re){re===null?z.matrix.copy(K.matrixWorld):(z.matrix.copy(re.matrixWorld),z.matrix.invert(),z.matrix.multiply(K.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(K.projectionMatrix),z.projectionMatrixInverse.copy(K.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=No*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&g===null))return c},this.setFoveation=function(z){c=z,d!==null&&(d.fixedFoveation=z),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=z)},this.hasDepthSensing=function(){return _.texture!==null};let ce=null;function le(z,K){if(u=K.getViewerPose(l||o),v=K,u!==null){const re=u.views;g!==null&&(e.setRenderTargetFramebuffer(x,g.framebuffer),e.setRenderTarget(x));let D=!1;re.length!==y.cameras.length&&(y.cameras.length=0,D=!0);for(let Ee=0;Ee<re.length;Ee++){const Me=re[Ee];let Re=null;if(g!==null)Re=g.getViewport(Me);else{const Ae=f.getViewSubImage(d,Me);Re=Ae.viewport,Ee===0&&(e.setRenderTargetTextures(x,Ae.colorTexture,d.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(x))}let j=F[Ee];j===void 0&&(j=new Pn,j.layers.enable(Ee),j.viewport=new Zt,F[Ee]=j),j.matrix.fromArray(Me.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Me.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Re.x,Re.y,Re.width,Re.height),Ee===0&&(y.matrix.copy(j.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),D===!0&&y.cameras.push(j)}const I=s.enabledFeatures;if(I&&I.includes("depth-sensing")){const Ee=f.getDepthInformation(re[0]);Ee&&Ee.isValid&&Ee.texture&&_.init(e,Ee,s.renderState)}}for(let re=0;re<b.length;re++){const D=A[re],I=b[re];D!==null&&I!==void 0&&I.update(D,K,l||o)}_.render(e,y),ce&&ce(z,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),v=null}const he=new jh;he.setAnimationLoop(le),this.setAnimationLoop=function(z){ce=z},this.dispose=function(){}}}function Nv(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Wh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,b,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&g(m,p,A)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,x,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Mn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Mn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const b=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*b,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function g(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Mn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Uv(i,e,t,n){let s={},r={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,b){const A=b.program;n.uniformBlockBinding(x,A)}function l(x,b){let A=s[x.id];A===void 0&&(v(x),A=u(x),s[x.id]=A,x.addEventListener("dispose",m));const C=b.program;n.updateUBOMapping(x,C);const T=e.render.frame;r[x.id]!==T&&(d(x),r[x.id]=T)}function u(x){const b=f();x.__bindingPointIndex=b;const A=i.createBuffer(),C=x.__size,T=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,A),A}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const b=s[x.id],A=x.uniforms,C=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let T=0,w=A.length;T<w;T++){const L=Array.isArray(A[T])?A[T]:[A[T]];for(let F=0,y=L.length;F<y;F++){const U=L[F];if(g(U,T,F,C)===!0){const Y=U.__offset,Q=Array.isArray(U.value)?U.value:[U.value];let k=0;for(let X=0;X<Q.length;X++){const W=Q[X],J=_(W);typeof W=="number"||typeof W=="boolean"?(U.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,Y+k,U.__data)):W.isMatrix3?(U.__data[0]=W.elements[0],U.__data[1]=W.elements[1],U.__data[2]=W.elements[2],U.__data[3]=0,U.__data[4]=W.elements[3],U.__data[5]=W.elements[4],U.__data[6]=W.elements[5],U.__data[7]=0,U.__data[8]=W.elements[6],U.__data[9]=W.elements[7],U.__data[10]=W.elements[8],U.__data[11]=0):(W.toArray(U.__data,k),k+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(x,b,A,C){const T=x.value,w=b+"_"+A;if(C[w]===void 0)return typeof T=="number"||typeof T=="boolean"?C[w]=T:C[w]=T.clone(),!0;{const L=C[w];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return C[w]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function v(x){const b=x.uniforms;let A=0;const C=16;for(let w=0,L=b.length;w<L;w++){const F=Array.isArray(b[w])?b[w]:[b[w]];for(let y=0,U=F.length;y<U;y++){const Y=F[y],Q=Array.isArray(Y.value)?Y.value:[Y.value];for(let k=0,X=Q.length;k<X;k++){const W=Q[k],J=_(W),ee=A%C;ee!==0&&C-ee<J.boundary&&(A+=C-ee),Y.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=A,A+=J.storage}}}const T=A%C;return T>0&&(A+=C-T),x.__size=A,x.__cache={},this}function _(x){const b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),b}function m(x){const b=x.target;b.removeEventListener("dispose",m);const A=o.indexOf(b.__bindingPointIndex);o.splice(A,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class tf{constructor(e={}){const{canvas:t=Cd(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const g=new Uint32Array(4),v=new Int32Array(4);let _=null,m=null;const p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qt,this._useLegacyLights=!1,this.toneMapping=fi,this.toneMappingExposure=1;const b=this;let A=!1,C=0,T=0,w=null,L=-1,F=null;const y=new Zt,U=new Zt;let Y=null;const Q=new bt(0);let k=0,X=t.width,W=t.height,J=1,ee=null,se=null;const ue=new Zt(0,0,X,W),ce=new Zt(0,0,X,W);let le=!1;const he=new Ho;let z=!1,K=!1,re=null;const D=new Ht,I=new pt,Ee=new Ie,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Re(){return w===null?J:1}let j=n;function Ae(ne,Ue){for(let We=0;We<ne.length;We++){const qe=ne[We],Xe=t.getContext(qe,Ue);if(Xe!==null)return Xe}return null}try{const ne={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Oo}`),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",G,!1),t.addEventListener("webglcontextcreationerror",De,!1),j===null){const Ue=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&Ue.shift(),j=Ae(Ue,ne),j===null)throw Ae(Ue)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&j instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(ne){throw console.error("THREE.WebGLRenderer: "+ne.message),ne}let Se,Ne,oe,ie,ge,B,P,xe,te,N,Z,me,_e,$,ae,be,ye,Te,Ce,Ye,Oe,Le,Be,q;function ke(){Se=new H_(j),Ne=new F_(j,Se,e),Se.init(Ne),Le=new Av(j,Se,Ne),oe=new Tv(j,Se,Ne),ie=new X_(j),ge=new hv,B=new wv(j,Se,oe,ge,Ne,Le,ie),P=new k_(b),xe=new V_(b),te=new $d(j,Ne),Be=new N_(j,Se,te,Ne),N=new G_(j,te,ie,Be),Z=new K_(j,N,te,ie),Ce=new Y_(j,Ne,B),be=new O_(ge),me=new uv(b,P,xe,Se,Ne,Be,be),_e=new Nv(b,ge),$=new dv,ae=new bv(Se,Ne),Te=new I_(b,P,xe,oe,Z,d,c),ye=new yv(b,Z,Ne),q=new Uv(j,ie,Ne,oe),Ye=new U_(j,Se,ie,Ne),Oe=new W_(j,Se,ie,Ne),ie.programs=me.programs,b.capabilities=Ne,b.extensions=Se,b.properties=ge,b.renderLists=$,b.shadowMap=ye,b.state=oe,b.info=ie}ke();const je=new Iv(b,j);this.xr=je,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const ne=Se.get("WEBGL_lose_context");ne&&ne.loseContext()},this.forceContextRestore=function(){const ne=Se.get("WEBGL_lose_context");ne&&ne.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(ne){ne!==void 0&&(J=ne,this.setSize(X,W,!1))},this.getSize=function(ne){return ne.set(X,W)},this.setSize=function(ne,Ue,We=!0){if(je.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=ne,W=Ue,t.width=Math.floor(ne*J),t.height=Math.floor(Ue*J),We===!0&&(t.style.width=ne+"px",t.style.height=Ue+"px"),this.setViewport(0,0,ne,Ue)},this.getDrawingBufferSize=function(ne){return ne.set(X*J,W*J).floor()},this.setDrawingBufferSize=function(ne,Ue,We){X=ne,W=Ue,J=We,t.width=Math.floor(ne*We),t.height=Math.floor(Ue*We),this.setViewport(0,0,ne,Ue)},this.getCurrentViewport=function(ne){return ne.copy(y)},this.getViewport=function(ne){return ne.copy(ue)},this.setViewport=function(ne,Ue,We,qe){ne.isVector4?ue.set(ne.x,ne.y,ne.z,ne.w):ue.set(ne,Ue,We,qe),oe.viewport(y.copy(ue).multiplyScalar(J).floor())},this.getScissor=function(ne){return ne.copy(ce)},this.setScissor=function(ne,Ue,We,qe){ne.isVector4?ce.set(ne.x,ne.y,ne.z,ne.w):ce.set(ne,Ue,We,qe),oe.scissor(U.copy(ce).multiplyScalar(J).floor())},this.getScissorTest=function(){return le},this.setScissorTest=function(ne){oe.setScissorTest(le=ne)},this.setOpaqueSort=function(ne){ee=ne},this.setTransparentSort=function(ne){se=ne},this.getClearColor=function(ne){return ne.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(ne=!0,Ue=!0,We=!0){let qe=0;if(ne){let Xe=!1;if(w!==null){const rt=w.texture.format;Xe=rt===Lh||rt===Ph||rt===Rh}if(Xe){const rt=w.texture.type,at=rt===di||rt===ui||rt===Bo||rt===Ai||rt===Ah||rt===Ch,ut=Te.getClearColor(),dt=Te.getClearAlpha(),xt=ut.r,_t=ut.g,gt=ut.b;at?(g[0]=xt,g[1]=_t,g[2]=gt,g[3]=dt,j.clearBufferuiv(j.COLOR,0,g)):(v[0]=xt,v[1]=_t,v[2]=gt,v[3]=dt,j.clearBufferiv(j.COLOR,0,v))}else qe|=j.COLOR_BUFFER_BIT}Ue&&(qe|=j.DEPTH_BUFFER_BIT),We&&(qe|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(qe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",G,!1),t.removeEventListener("webglcontextcreationerror",De,!1),$.dispose(),ae.dispose(),ge.dispose(),P.dispose(),xe.dispose(),Z.dispose(),Be.dispose(),q.dispose(),me.dispose(),je.dispose(),je.removeEventListener("sessionstart",ct),je.removeEventListener("sessionend",tt),re&&(re.dispose(),re=null),ot.stop()};function He(ne){ne.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const ne=ie.autoReset,Ue=ye.enabled,We=ye.autoUpdate,qe=ye.needsUpdate,Xe=ye.type;ke(),ie.autoReset=ne,ye.enabled=Ue,ye.autoUpdate=We,ye.needsUpdate=qe,ye.type=Xe}function De(ne){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",ne.statusMessage)}function we(ne){const Ue=ne.target;Ue.removeEventListener("dispose",we),Fe(Ue)}function Fe(ne){Ge(ne),ge.remove(ne)}function Ge(ne){const Ue=ge.get(ne).programs;Ue!==void 0&&(Ue.forEach(function(We){me.releaseProgram(We)}),ne.isShaderMaterial&&me.releaseShaderCache(ne))}this.renderBufferDirect=function(ne,Ue,We,qe,Xe,rt){Ue===null&&(Ue=Me);const at=Xe.isMesh&&Xe.matrixWorld.determinant()<0,ut=on(ne,Ue,We,qe,Xe);oe.setMaterial(qe,at);let dt=We.index,xt=1;if(qe.wireframe===!0){if(dt=N.getWireframeAttribute(We),dt===void 0)return;xt=2}const _t=We.drawRange,gt=We.attributes.position;let zt=_t.start*xt,Sn=(_t.start+_t.count)*xt;rt!==null&&(zt=Math.max(zt,rt.start*xt),Sn=Math.min(Sn,(rt.start+rt.count)*xt)),dt!==null?(zt=Math.max(zt,0),Sn=Math.min(Sn,dt.count)):gt!=null&&(zt=Math.max(zt,0),Sn=Math.min(Sn,gt.count));const qt=Sn-zt;if(qt<0||qt===1/0)return;Be.setup(Xe,qe,ut,We,dt);let Wn,Ft=Ye;if(dt!==null&&(Wn=te.get(dt),Ft=Oe,Ft.setIndex(Wn)),Xe.isMesh)qe.wireframe===!0?(oe.setLineWidth(qe.wireframeLinewidth*Re()),Ft.setMode(j.LINES)):Ft.setMode(j.TRIANGLES);else if(Xe.isLine){let Mt=qe.linewidth;Mt===void 0&&(Mt=1),oe.setLineWidth(Mt*Re()),Xe.isLineSegments?Ft.setMode(j.LINES):Xe.isLineLoop?Ft.setMode(j.LINE_LOOP):Ft.setMode(j.LINE_STRIP)}else Xe.isPoints?Ft.setMode(j.POINTS):Xe.isSprite&&Ft.setMode(j.TRIANGLES);if(Xe.isBatchedMesh)Ft.renderMultiDraw(Xe._multiDrawStarts,Xe._multiDrawCounts,Xe._multiDrawCount);else if(Xe.isInstancedMesh)Ft.renderInstances(zt,qt,Xe.count);else if(We.isInstancedBufferGeometry){const Mt=We._maxInstanceCount!==void 0?We._maxInstanceCount:1/0,Or=Math.min(We.instanceCount,Mt);Ft.renderInstances(zt,qt,Or)}else Ft.render(zt,qt)};function Ze(ne,Ue,We){ne.transparent===!0&&ne.side===cn&&ne.forceSinglePass===!1?(ne.side=Mn,ne.needsUpdate=!0,Lt(ne,Ue,We),ne.side=pi,ne.needsUpdate=!0,Lt(ne,Ue,We),ne.side=cn):Lt(ne,Ue,We)}this.compile=function(ne,Ue,We=null){We===null&&(We=ne),m=ae.get(We),m.init(),x.push(m),We.traverseVisible(function(Xe){Xe.isLight&&Xe.layers.test(Ue.layers)&&(m.pushLight(Xe),Xe.castShadow&&m.pushShadow(Xe))}),ne!==We&&ne.traverseVisible(function(Xe){Xe.isLight&&Xe.layers.test(Ue.layers)&&(m.pushLight(Xe),Xe.castShadow&&m.pushShadow(Xe))}),m.setupLights(b._useLegacyLights);const qe=new Set;return ne.traverse(function(Xe){const rt=Xe.material;if(rt)if(Array.isArray(rt))for(let at=0;at<rt.length;at++){const ut=rt[at];Ze(ut,We,Xe),qe.add(ut)}else Ze(rt,We,Xe),qe.add(rt)}),x.pop(),m=null,qe},this.compileAsync=function(ne,Ue,We=null){const qe=this.compile(ne,Ue,We);return new Promise(Xe=>{function rt(){if(qe.forEach(function(at){ge.get(at).currentProgram.isReady()&&qe.delete(at)}),qe.size===0){Xe(ne);return}setTimeout(rt,10)}Se.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Qe=null;function et(ne){Qe&&Qe(ne)}function ct(){ot.stop()}function tt(){ot.start()}const ot=new jh;ot.setAnimationLoop(et),typeof self<"u"&&ot.setContext(self),this.setAnimationLoop=function(ne){Qe=ne,je.setAnimationLoop(ne),ne===null?ot.stop():ot.start()},je.addEventListener("sessionstart",ct),je.addEventListener("sessionend",tt),this.render=function(ne,Ue){if(Ue!==void 0&&Ue.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;ne.matrixWorldAutoUpdate===!0&&ne.updateMatrixWorld(),Ue.parent===null&&Ue.matrixWorldAutoUpdate===!0&&Ue.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(je.cameraAutoUpdate===!0&&je.updateCamera(Ue),Ue=je.getCamera()),ne.isScene===!0&&ne.onBeforeRender(b,ne,Ue,w),m=ae.get(ne,x.length),m.init(),x.push(m),D.multiplyMatrices(Ue.projectionMatrix,Ue.matrixWorldInverse),he.setFromProjectionMatrix(D),K=this.localClippingEnabled,z=be.init(this.clippingPlanes,K),_=$.get(ne,p.length),_.init(),p.push(_),ft(ne,Ue,0,b.sortObjects),_.finish(),b.sortObjects===!0&&_.sort(ee,se),this.info.render.frame++,z===!0&&be.beginShadows();const We=m.state.shadowsArray;if(ye.render(We,ne,Ue),z===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(je.enabled===!1||je.isPresenting===!1||je.hasDepthSensing()===!1)&&Te.render(_,ne),m.setupLights(b._useLegacyLights),Ue.isArrayCamera){const qe=Ue.cameras;for(let Xe=0,rt=qe.length;Xe<rt;Xe++){const at=qe[Xe];Gt(_,ne,at,at.viewport)}}else Gt(_,ne,Ue);w!==null&&(B.updateMultisampleRenderTarget(w),B.updateRenderTargetMipmap(w)),ne.isScene===!0&&ne.onAfterRender(b,ne,Ue),Be.resetDefaultState(),L=-1,F=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function ft(ne,Ue,We,qe){if(ne.visible===!1)return;if(ne.layers.test(Ue.layers)){if(ne.isGroup)We=ne.renderOrder;else if(ne.isLOD)ne.autoUpdate===!0&&ne.update(Ue);else if(ne.isLight)m.pushLight(ne),ne.castShadow&&m.pushShadow(ne);else if(ne.isSprite){if(!ne.frustumCulled||he.intersectsSprite(ne)){qe&&Ee.setFromMatrixPosition(ne.matrixWorld).applyMatrix4(D);const at=Z.update(ne),ut=ne.material;ut.visible&&_.push(ne,at,ut,We,Ee.z,null)}}else if((ne.isMesh||ne.isLine||ne.isPoints)&&(!ne.frustumCulled||he.intersectsObject(ne))){const at=Z.update(ne),ut=ne.material;if(qe&&(ne.boundingSphere!==void 0?(ne.boundingSphere===null&&ne.computeBoundingSphere(),Ee.copy(ne.boundingSphere.center)):(at.boundingSphere===null&&at.computeBoundingSphere(),Ee.copy(at.boundingSphere.center)),Ee.applyMatrix4(ne.matrixWorld).applyMatrix4(D)),Array.isArray(ut)){const dt=at.groups;for(let xt=0,_t=dt.length;xt<_t;xt++){const gt=dt[xt],zt=ut[gt.materialIndex];zt&&zt.visible&&_.push(ne,at,zt,We,Ee.z,gt)}}else ut.visible&&_.push(ne,at,ut,We,Ee.z,null)}}const rt=ne.children;for(let at=0,ut=rt.length;at<ut;at++)ft(rt[at],Ue,We,qe)}function Gt(ne,Ue,We,qe){const Xe=ne.opaque,rt=ne.transmissive,at=ne.transparent;m.setupLightsView(We),z===!0&&be.setGlobalState(b.clippingPlanes,We),rt.length>0&&Jt(Xe,rt,Ue,We),qe&&oe.viewport(y.copy(qe)),Xe.length>0&&wt(Xe,Ue,We),rt.length>0&&wt(rt,Ue,We),at.length>0&&wt(at,Ue,We),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function Jt(ne,Ue,We,qe){if((We.isScene===!0?We.overrideMaterial:null)!==null)return;const rt=Ne.isWebGL2;re===null&&(re=new Pi(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?Is:di,minFilter:wi,samples:rt?4:0})),b.getDrawingBufferSize(I),rt?re.setSize(I.x,I.y):re.setSize(Uo(I.x),Uo(I.y));const at=b.getRenderTarget();b.setRenderTarget(re),b.getClearColor(Q),k=b.getClearAlpha(),k<1&&b.setClearColor(16777215,.5),b.clear();const ut=b.toneMapping;b.toneMapping=fi,wt(ne,We,qe),B.updateMultisampleRenderTarget(re),B.updateRenderTargetMipmap(re);let dt=!1;for(let xt=0,_t=Ue.length;xt<_t;xt++){const gt=Ue[xt],zt=gt.object,Sn=gt.geometry,qt=gt.material,Wn=gt.group;if(qt.side===cn&&zt.layers.test(qe.layers)){const Ft=qt.side;qt.side=Mn,qt.needsUpdate=!0,At(zt,We,qe,Sn,qt,Wn),qt.side=Ft,qt.needsUpdate=!0,dt=!0}}dt===!0&&(B.updateMultisampleRenderTarget(re),B.updateRenderTargetMipmap(re)),b.setRenderTarget(at),b.setClearColor(Q,k),b.toneMapping=ut}function wt(ne,Ue,We){const qe=Ue.isScene===!0?Ue.overrideMaterial:null;for(let Xe=0,rt=ne.length;Xe<rt;Xe++){const at=ne[Xe],ut=at.object,dt=at.geometry,xt=qe===null?at.material:qe,_t=at.group;ut.layers.test(We.layers)&&At(ut,Ue,We,dt,xt,_t)}}function At(ne,Ue,We,qe,Xe,rt){ne.onBeforeRender(b,Ue,We,qe,Xe,rt),ne.modelViewMatrix.multiplyMatrices(We.matrixWorldInverse,ne.matrixWorld),ne.normalMatrix.getNormalMatrix(ne.modelViewMatrix),Xe.onBeforeRender(b,Ue,We,qe,ne,rt),Xe.transparent===!0&&Xe.side===cn&&Xe.forceSinglePass===!1?(Xe.side=Mn,Xe.needsUpdate=!0,b.renderBufferDirect(We,Ue,qe,Xe,ne,rt),Xe.side=pi,Xe.needsUpdate=!0,b.renderBufferDirect(We,Ue,qe,Xe,ne,rt),Xe.side=cn):b.renderBufferDirect(We,Ue,qe,Xe,ne,rt),ne.onAfterRender(b,Ue,We,qe,Xe,rt)}function Lt(ne,Ue,We){Ue.isScene!==!0&&(Ue=Me);const qe=ge.get(ne),Xe=m.state.lights,rt=m.state.shadowsArray,at=Xe.state.version,ut=me.getParameters(ne,Xe.state,rt,Ue,We),dt=me.getProgramCacheKey(ut);let xt=qe.programs;qe.environment=ne.isMeshStandardMaterial?Ue.environment:null,qe.fog=Ue.fog,qe.envMap=(ne.isMeshStandardMaterial?xe:P).get(ne.envMap||qe.environment),xt===void 0&&(ne.addEventListener("dispose",we),xt=new Map,qe.programs=xt);let _t=xt.get(dt);if(_t!==void 0){if(qe.currentProgram===_t&&qe.lightsStateVersion===at)return An(ne,ut),_t}else ut.uniforms=me.getUniforms(ne),ne.onBuild(We,ut,b),ne.onBeforeCompile(ut,b),_t=me.acquireProgram(ut,dt),xt.set(dt,_t),qe.uniforms=ut.uniforms;const gt=qe.uniforms;return(!ne.isShaderMaterial&&!ne.isRawShaderMaterial||ne.clipping===!0)&&(gt.clippingPlanes=be.uniform),An(ne,ut),qe.needsLights=vs(ne),qe.lightsStateVersion=at,qe.needsLights&&(gt.ambientLightColor.value=Xe.state.ambient,gt.lightProbe.value=Xe.state.probe,gt.directionalLights.value=Xe.state.directional,gt.directionalLightShadows.value=Xe.state.directionalShadow,gt.spotLights.value=Xe.state.spot,gt.spotLightShadows.value=Xe.state.spotShadow,gt.rectAreaLights.value=Xe.state.rectArea,gt.ltc_1.value=Xe.state.rectAreaLTC1,gt.ltc_2.value=Xe.state.rectAreaLTC2,gt.pointLights.value=Xe.state.point,gt.pointLightShadows.value=Xe.state.pointShadow,gt.hemisphereLights.value=Xe.state.hemi,gt.directionalShadowMap.value=Xe.state.directionalShadowMap,gt.directionalShadowMatrix.value=Xe.state.directionalShadowMatrix,gt.spotShadowMap.value=Xe.state.spotShadowMap,gt.spotLightMatrix.value=Xe.state.spotLightMatrix,gt.spotLightMap.value=Xe.state.spotLightMap,gt.pointShadowMap.value=Xe.state.pointShadowMap,gt.pointShadowMatrix.value=Xe.state.pointShadowMatrix),qe.currentProgram=_t,qe.uniformsList=null,_t}function Ut(ne){if(ne.uniformsList===null){const Ue=ne.currentProgram.getUniforms();ne.uniformsList=pr.seqWithValue(Ue.seq,ne.uniforms)}return ne.uniformsList}function An(ne,Ue){const We=ge.get(ne);We.outputColorSpace=Ue.outputColorSpace,We.batching=Ue.batching,We.instancing=Ue.instancing,We.instancingColor=Ue.instancingColor,We.skinning=Ue.skinning,We.morphTargets=Ue.morphTargets,We.morphNormals=Ue.morphNormals,We.morphColors=Ue.morphColors,We.morphTargetsCount=Ue.morphTargetsCount,We.numClippingPlanes=Ue.numClippingPlanes,We.numIntersection=Ue.numClipIntersection,We.vertexAlphas=Ue.vertexAlphas,We.vertexTangents=Ue.vertexTangents,We.toneMapping=Ue.toneMapping}function on(ne,Ue,We,qe,Xe){Ue.isScene!==!0&&(Ue=Me),B.resetTextureUnits();const rt=Ue.fog,at=qe.isMeshStandardMaterial?Ue.environment:null,ut=w===null?b.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ii,dt=(qe.isMeshStandardMaterial?xe:P).get(qe.envMap||at),xt=qe.vertexColors===!0&&!!We.attributes.color&&We.attributes.color.itemSize===4,_t=!!We.attributes.tangent&&(!!qe.normalMap||qe.anisotropy>0),gt=!!We.morphAttributes.position,zt=!!We.morphAttributes.normal,Sn=!!We.morphAttributes.color;let qt=fi;qe.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(qt=b.toneMapping);const Wn=We.morphAttributes.position||We.morphAttributes.normal||We.morphAttributes.color,Ft=Wn!==void 0?Wn.length:0,Mt=ge.get(qe),Or=m.state.lights;if(z===!0&&(K===!0||ne!==F)){const Cn=ne===F&&qe.id===L;be.setState(qe,ne,Cn)}let Ot=!1;qe.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==Or.state.version||Mt.outputColorSpace!==ut||Xe.isBatchedMesh&&Mt.batching===!1||!Xe.isBatchedMesh&&Mt.batching===!0||Xe.isInstancedMesh&&Mt.instancing===!1||!Xe.isInstancedMesh&&Mt.instancing===!0||Xe.isSkinnedMesh&&Mt.skinning===!1||!Xe.isSkinnedMesh&&Mt.skinning===!0||Xe.isInstancedMesh&&Mt.instancingColor===!0&&Xe.instanceColor===null||Xe.isInstancedMesh&&Mt.instancingColor===!1&&Xe.instanceColor!==null||Mt.envMap!==dt||qe.fog===!0&&Mt.fog!==rt||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==be.numPlanes||Mt.numIntersection!==be.numIntersection)||Mt.vertexAlphas!==xt||Mt.vertexTangents!==_t||Mt.morphTargets!==gt||Mt.morphNormals!==zt||Mt.morphColors!==Sn||Mt.toneMapping!==qt||Ne.isWebGL2===!0&&Mt.morphTargetsCount!==Ft)&&(Ot=!0):(Ot=!0,Mt.__version=qe.version);let _i=Mt.currentProgram;Ot===!0&&(_i=Lt(qe,Ue,Xe));let jo=!1,bs=!1,kr=!1;const tn=_i.getUniforms(),gi=Mt.uniforms;if(oe.useProgram(_i.program)&&(jo=!0,bs=!0,kr=!0),qe.id!==L&&(L=qe.id,bs=!0),jo||F!==ne){tn.setValue(j,"projectionMatrix",ne.projectionMatrix),tn.setValue(j,"viewMatrix",ne.matrixWorldInverse);const Cn=tn.map.cameraPosition;Cn!==void 0&&Cn.setValue(j,Ee.setFromMatrixPosition(ne.matrixWorld)),Ne.logarithmicDepthBuffer&&tn.setValue(j,"logDepthBufFC",2/(Math.log(ne.far+1)/Math.LN2)),(qe.isMeshPhongMaterial||qe.isMeshToonMaterial||qe.isMeshLambertMaterial||qe.isMeshBasicMaterial||qe.isMeshStandardMaterial||qe.isShaderMaterial)&&tn.setValue(j,"isOrthographic",ne.isOrthographicCamera===!0),F!==ne&&(F=ne,bs=!0,kr=!0)}if(Xe.isSkinnedMesh){tn.setOptional(j,Xe,"bindMatrix"),tn.setOptional(j,Xe,"bindMatrixInverse");const Cn=Xe.skeleton;Cn&&(Ne.floatVertexTextures?(Cn.boneTexture===null&&Cn.computeBoneTexture(),tn.setValue(j,"boneTexture",Cn.boneTexture,B)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Xe.isBatchedMesh&&(tn.setOptional(j,Xe,"batchingTexture"),tn.setValue(j,"batchingTexture",Xe._matricesTexture,B));const Br=We.morphAttributes;if((Br.position!==void 0||Br.normal!==void 0||Br.color!==void 0&&Ne.isWebGL2===!0)&&Ce.update(Xe,We,_i),(bs||Mt.receiveShadow!==Xe.receiveShadow)&&(Mt.receiveShadow=Xe.receiveShadow,tn.setValue(j,"receiveShadow",Xe.receiveShadow)),qe.isMeshGouraudMaterial&&qe.envMap!==null&&(gi.envMap.value=dt,gi.flipEnvMap.value=dt.isCubeTexture&&dt.isRenderTargetTexture===!1?-1:1),bs&&(tn.setValue(j,"toneMappingExposure",b.toneMappingExposure),Mt.needsLights&&Ni(gi,kr),rt&&qe.fog===!0&&_e.refreshFogUniforms(gi,rt),_e.refreshMaterialUniforms(gi,qe,J,W,re),pr.upload(j,Ut(Mt),gi,B)),qe.isShaderMaterial&&qe.uniformsNeedUpdate===!0&&(pr.upload(j,Ut(Mt),gi,B),qe.uniformsNeedUpdate=!1),qe.isSpriteMaterial&&tn.setValue(j,"center",Xe.center),tn.setValue(j,"modelViewMatrix",Xe.modelViewMatrix),tn.setValue(j,"normalMatrix",Xe.normalMatrix),tn.setValue(j,"modelMatrix",Xe.matrixWorld),qe.isShaderMaterial||qe.isRawShaderMaterial){const Cn=qe.uniformsGroups;for(let zr=0,rf=Cn.length;zr<rf;zr++)if(Ne.isWebGL2){const Yo=Cn[zr];q.update(Yo,_i),q.bind(Yo,_i)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _i}function Ni(ne,Ue){ne.ambientLightColor.needsUpdate=Ue,ne.lightProbe.needsUpdate=Ue,ne.directionalLights.needsUpdate=Ue,ne.directionalLightShadows.needsUpdate=Ue,ne.pointLights.needsUpdate=Ue,ne.pointLightShadows.needsUpdate=Ue,ne.spotLights.needsUpdate=Ue,ne.spotLightShadows.needsUpdate=Ue,ne.rectAreaLights.needsUpdate=Ue,ne.hemisphereLights.needsUpdate=Ue}function vs(ne){return ne.isMeshLambertMaterial||ne.isMeshToonMaterial||ne.isMeshPhongMaterial||ne.isMeshStandardMaterial||ne.isShadowMaterial||ne.isShaderMaterial&&ne.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(ne,Ue,We){ge.get(ne.texture).__webglTexture=Ue,ge.get(ne.depthTexture).__webglTexture=We;const qe=ge.get(ne);qe.__hasExternalTextures=!0,qe.__hasExternalTextures&&(qe.__autoAllocateDepthBuffer=We===void 0,qe.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),qe.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(ne,Ue){const We=ge.get(ne);We.__webglFramebuffer=Ue,We.__useDefaultFramebuffer=Ue===void 0},this.setRenderTarget=function(ne,Ue=0,We=0){w=ne,C=Ue,T=We;let qe=!0,Xe=null,rt=!1,at=!1;if(ne){const dt=ge.get(ne);dt.__useDefaultFramebuffer!==void 0?(oe.bindFramebuffer(j.FRAMEBUFFER,null),qe=!1):dt.__webglFramebuffer===void 0?B.setupRenderTarget(ne):dt.__hasExternalTextures&&B.rebindTextures(ne,ge.get(ne.texture).__webglTexture,ge.get(ne.depthTexture).__webglTexture);const xt=ne.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(at=!0);const _t=ge.get(ne).__webglFramebuffer;ne.isWebGLCubeRenderTarget?(Array.isArray(_t[Ue])?Xe=_t[Ue][We]:Xe=_t[Ue],rt=!0):Ne.isWebGL2&&ne.samples>0&&B.useMultisampledRTT(ne)===!1?Xe=ge.get(ne).__webglMultisampledFramebuffer:Array.isArray(_t)?Xe=_t[We]:Xe=_t,y.copy(ne.viewport),U.copy(ne.scissor),Y=ne.scissorTest}else y.copy(ue).multiplyScalar(J).floor(),U.copy(ce).multiplyScalar(J).floor(),Y=le;if(oe.bindFramebuffer(j.FRAMEBUFFER,Xe)&&Ne.drawBuffers&&qe&&oe.drawBuffers(ne,Xe),oe.viewport(y),oe.scissor(U),oe.setScissorTest(Y),rt){const dt=ge.get(ne.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,dt.__webglTexture,We)}else if(at){const dt=ge.get(ne.texture),xt=Ue||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,dt.__webglTexture,We||0,xt)}L=-1},this.readRenderTargetPixels=function(ne,Ue,We,qe,Xe,rt,at){if(!(ne&&ne.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=ge.get(ne).__webglFramebuffer;if(ne.isWebGLCubeRenderTarget&&at!==void 0&&(ut=ut[at]),ut){oe.bindFramebuffer(j.FRAMEBUFFER,ut);try{const dt=ne.texture,xt=dt.format,_t=dt.type;if(xt!==On&&Le.convert(xt)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const gt=_t===Is&&(Se.has("EXT_color_buffer_half_float")||Ne.isWebGL2&&Se.has("EXT_color_buffer_float"));if(_t!==di&&Le.convert(_t)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_TYPE)&&!(_t===$n&&(Ne.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Ue>=0&&Ue<=ne.width-qe&&We>=0&&We<=ne.height-Xe&&j.readPixels(Ue,We,qe,Xe,Le.convert(xt),Le.convert(_t),rt)}finally{const dt=w!==null?ge.get(w).__webglFramebuffer:null;oe.bindFramebuffer(j.FRAMEBUFFER,dt)}}},this.copyFramebufferToTexture=function(ne,Ue,We=0){const qe=Math.pow(2,-We),Xe=Math.floor(Ue.image.width*qe),rt=Math.floor(Ue.image.height*qe);B.setTexture2D(Ue,0),j.copyTexSubImage2D(j.TEXTURE_2D,We,0,0,ne.x,ne.y,Xe,rt),oe.unbindTexture()},this.copyTextureToTexture=function(ne,Ue,We,qe=0){const Xe=Ue.image.width,rt=Ue.image.height,at=Le.convert(We.format),ut=Le.convert(We.type);B.setTexture2D(We,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,We.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,We.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,We.unpackAlignment),Ue.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,qe,ne.x,ne.y,Xe,rt,at,ut,Ue.image.data):Ue.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,qe,ne.x,ne.y,Ue.mipmaps[0].width,Ue.mipmaps[0].height,at,Ue.mipmaps[0].data):j.texSubImage2D(j.TEXTURE_2D,qe,ne.x,ne.y,at,ut,Ue.image),qe===0&&We.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),oe.unbindTexture()},this.copyTextureToTexture3D=function(ne,Ue,We,qe,Xe=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const rt=ne.max.x-ne.min.x+1,at=ne.max.y-ne.min.y+1,ut=ne.max.z-ne.min.z+1,dt=Le.convert(qe.format),xt=Le.convert(qe.type);let _t;if(qe.isData3DTexture)B.setTexture3D(qe,0),_t=j.TEXTURE_3D;else if(qe.isDataArrayTexture||qe.isCompressedArrayTexture)B.setTexture2DArray(qe,0),_t=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,qe.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,qe.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,qe.unpackAlignment);const gt=j.getParameter(j.UNPACK_ROW_LENGTH),zt=j.getParameter(j.UNPACK_IMAGE_HEIGHT),Sn=j.getParameter(j.UNPACK_SKIP_PIXELS),qt=j.getParameter(j.UNPACK_SKIP_ROWS),Wn=j.getParameter(j.UNPACK_SKIP_IMAGES),Ft=We.isCompressedTexture?We.mipmaps[Xe]:We.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,Ft.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ft.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,ne.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,ne.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,ne.min.z),We.isDataTexture||We.isData3DTexture?j.texSubImage3D(_t,Xe,Ue.x,Ue.y,Ue.z,rt,at,ut,dt,xt,Ft.data):We.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(_t,Xe,Ue.x,Ue.y,Ue.z,rt,at,ut,dt,Ft.data)):j.texSubImage3D(_t,Xe,Ue.x,Ue.y,Ue.z,rt,at,ut,dt,xt,Ft),j.pixelStorei(j.UNPACK_ROW_LENGTH,gt),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,zt),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Sn),j.pixelStorei(j.UNPACK_SKIP_ROWS,qt),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Wn),Xe===0&&qe.generateMipmaps&&j.generateMipmap(_t),oe.unbindTexture()},this.initTexture=function(ne){ne.isCubeTexture?B.setTextureCube(ne,0):ne.isData3DTexture?B.setTexture3D(ne,0):ne.isDataArrayTexture||ne.isCompressedArrayTexture?B.setTexture2DArray(ne,0):B.setTexture2D(ne,0),oe.unbindTexture()},this.resetState=function(){C=0,T=0,w=null,oe.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===zo?"display-p3":"srgb",t.unpackColorSpace=Rt.workingColorSpace===Ir?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Qt?Ri:Ih}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ri?Qt:ii}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Fv extends tf{}Fv.prototype.isWebGL1Renderer=!0;class Ov extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ns extends _s{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fc=new Ie,dc=new Ie,pc=new Ht,bo=new Vo,lr=new Nr;class nf extends en{constructor(e=new $t,t=new Ns){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)fc.fromBufferAttribute(t,s-1),dc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=fc.distanceTo(dc);e.setAttribute("lineDistance",new Dt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(s),lr.radius+=r,e.ray.intersectsSphere(lr)===!1)return;pc.copy(s).invert(),bo.copy(e.ray).applyMatrix4(pc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new Ie,u=new Ie,f=new Ie,d=new Ie,g=this.isLineSegments?2:1,v=n.index,m=n.attributes.position;if(v!==null){const p=Math.max(0,o.start),x=Math.min(v.count,o.start+o.count);for(let b=p,A=x-1;b<A;b+=g){const C=v.getX(b),T=v.getX(b+1);if(l.fromBufferAttribute(m,C),u.fromBufferAttribute(m,T),bo.distanceSqToSegment(l,u,d,f)>c)continue;d.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(d);L<e.near||L>e.far||t.push({distance:L,point:f.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let b=p,A=x-1;b<A;b+=g){if(l.fromBufferAttribute(m,b),u.fromBufferAttribute(m,b+1),bo.distanceSqToSegment(l,u,d,f)>c)continue;d.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||t.push({distance:T,point:f.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const mc=new Ie,_c=new Ie;class Wo extends nf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)mc.fromBufferAttribute(t,s),_c.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+mc.distanceTo(_c);e.setAttribute("lineDistance",new Dt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xo extends $t{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],d=[],g=[];let v=0;const _=[],m=n/2;let p=0;x(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Dt(f,3)),this.setAttribute("normal",new Dt(d,3)),this.setAttribute("uv",new Dt(g,2));function x(){const A=new Ie,C=new Ie;let T=0;const w=(t-e)/n;for(let L=0;L<=r;L++){const F=[],y=L/r,U=y*(t-e)+e;for(let Y=0;Y<=s;Y++){const Q=Y/s,k=Q*c+a,X=Math.sin(k),W=Math.cos(k);C.x=U*X,C.y=-y*n+m,C.z=U*W,f.push(C.x,C.y,C.z),A.set(X,w,W).normalize(),d.push(A.x,A.y,A.z),g.push(Q,1-y),F.push(v++)}_.push(F)}for(let L=0;L<s;L++)for(let F=0;F<r;F++){const y=_[F][L],U=_[F+1][L],Y=_[F+1][L+1],Q=_[F][L+1];u.push(y,U,Q),u.push(U,Y,Q),T+=6}l.addGroup(p,T,0),p+=T}function b(A){const C=v,T=new pt,w=new Ie;let L=0;const F=A===!0?e:t,y=A===!0?1:-1;for(let Y=1;Y<=s;Y++)f.push(0,m*y,0),d.push(0,y,0),g.push(.5,.5),v++;const U=v;for(let Y=0;Y<=s;Y++){const k=Y/s*c+a,X=Math.cos(k),W=Math.sin(k);w.x=F*W,w.y=m*y,w.z=F*X,f.push(w.x,w.y,w.z),d.push(0,y,0),T.x=X*.5+.5,T.y=W*.5*y+.5,g.push(T.x,T.y),v++}for(let Y=0;Y<s;Y++){const Q=C+Y,k=U+Y;A===!0?u.push(k,k+1,Q):u.push(k+1,k,Q),L+=3}l.addGroup(p,L,A===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const cr=new Ie,ur=new Ie,xo=new Ie,hr=new kn;class kv extends $t{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Cs*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],f=new Array(3),d={},g=[];for(let v=0;v<c;v+=3){o?(l[0]=o.getX(v),l[1]=o.getX(v+1),l[2]=o.getX(v+2)):(l[0]=v,l[1]=v+1,l[2]=v+2);const{a:_,b:m,c:p}=hr;if(_.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),hr.getNormal(xo),f[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,f[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,f[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let x=0;x<3;x++){const b=(x+1)%3,A=f[x],C=f[b],T=hr[u[x]],w=hr[u[b]],L=`${A}_${C}`,F=`${C}_${A}`;F in d&&d[F]?(xo.dot(d[F].normal)<=r&&(g.push(T.x,T.y,T.z),g.push(w.x,w.y,w.z)),d[F]=null):L in d||(d[L]={index0:l[x],index1:l[b],normal:xo.clone()})}}for(const v in d)if(d[v]){const{index0:_,index1:m}=d[v];cr.fromBufferAttribute(a,_),ur.fromBufferAttribute(a,m),g.push(cr.x,cr.y,cr.z),g.push(ur.x,ur.y,ur.z)}this.setAttribute("position",new Dt(g,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class qo extends $t{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],f=new Ie,d=new Ie,g=[],v=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],b=p/n;let A=0;p===0&&o===0?A=.5/t:p===n&&c===Math.PI&&(A=-.5/t);for(let C=0;C<=t;C++){const T=C/t;f.x=-e*Math.cos(s+T*r)*Math.sin(o+b*a),f.y=e*Math.cos(o+b*a),f.z=e*Math.sin(s+T*r)*Math.sin(o+b*a),v.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),m.push(T+A,1-b),x.push(l++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const b=u[p][x+1],A=u[p][x],C=u[p+1][x],T=u[p+1][x+1];(p!==0||o>0)&&g.push(b,A,T),(p!==n-1||c<Math.PI)&&g.push(A,C,T)}this.setIndex(g),this.setAttribute("position",new Dt(v,3)),this.setAttribute("normal",new Dt(_,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Mi extends _s{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new bt(16777215),this.specular=new bt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nh,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sf extends en{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Eo=new Ht,gc=new Ie,vc=new Ie;class Bv{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ho,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;gc.setFromMatrixPosition(e.matrixWorld),t.position.copy(gc),vc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vc),t.updateMatrixWorld(),Eo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Eo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class zv extends Bv{constructor(){super(new Yh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vv extends sf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new zv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Hv extends sf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class bc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(un(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Gv extends Wo{constructor(e=10,t=10,n=4473924,s=8947848){n=new bt(n),s=new bt(s);const r=t/2,o=e/t,a=e/2,c=[],l=[];for(let d=0,g=0,v=-a;d<=t;d++,v+=o){c.push(-a,0,v,a,0,v),c.push(v,0,-a,v,0,a);const _=d===r?n:s;_.toArray(l,g),g+=3,_.toArray(l,g),g+=3,_.toArray(l,g),g+=3,_.toArray(l,g),g+=3}const u=new $t;u.setAttribute("position",new Dt(c,3)),u.setAttribute("color",new Dt(l,3));const f=new Ns({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Wv extends Wo{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new $t;s.setAttribute("position",new Dt(t,3)),s.setAttribute("color",new Dt(n,3));const r=new Ns({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,n){const s=new bt,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oo);const xc={type:"change"},Mo={type:"start"},Ec={type:"end"},fr=new Vo,Mc=new Qn,Xv=Math.cos(70*Ad.DEG2RAD);class qv extends Ii{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Ie,this.cursor=new Ie,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ui.ROTATE,MIDDLE:Ui.DOLLY,RIGHT:Ui.PAN},this.touches={ONE:Fi.ROTATE,TWO:Fi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(q){q.addEventListener("keydown",ae),this._domElementKeyEvents=q},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ae),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(xc),n.update(),r=s.NONE},this.update=function(){const q=new Ie,ke=new Li().setFromUnitVectors(e.up,new Ie(0,1,0)),je=ke.clone().invert(),He=new Ie,G=new Li,De=new Ie,we=2*Math.PI;return function(Ge=null){const Ze=n.object.position;q.copy(Ze).sub(n.target),q.applyQuaternion(ke),a.setFromVector3(q),n.autoRotate&&r===s.NONE&&Y(y(Ge)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Qe=n.minAzimuthAngle,et=n.maxAzimuthAngle;isFinite(Qe)&&isFinite(et)&&(Qe<-Math.PI?Qe+=we:Qe>Math.PI&&(Qe-=we),et<-Math.PI?et+=we:et>Math.PI&&(et-=we),Qe<=et?a.theta=Math.max(Qe,Math.min(et,a.theta)):a.theta=a.theta>(Qe+et)/2?Math.max(Qe,a.theta):Math.min(et,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&T||n.object.isOrthographicCamera?a.radius=ue(a.radius):a.radius=ue(a.radius*l),q.setFromSpherical(a),q.applyQuaternion(je),Ze.copy(n.target).add(q),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let ct=!1;if(n.zoomToCursor&&T){let tt=null;if(n.object.isPerspectiveCamera){const ot=q.length();tt=ue(ot*l);const ft=ot-tt;n.object.position.addScaledVector(A,ft),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const ot=new Ie(C.x,C.y,0);ot.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),ct=!0;const ft=new Ie(C.x,C.y,0);ft.unproject(n.object),n.object.position.sub(ft).add(ot),n.object.updateMatrixWorld(),tt=q.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;tt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(tt).add(n.object.position):(fr.origin.copy(n.object.position),fr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(fr.direction))<Xv?e.lookAt(n.target):(Mc.setFromNormalAndCoplanarPoint(n.object.up,n.target),fr.intersectPlane(Mc,n.target))))}else n.object.isOrthographicCamera&&(ct=l!==1,ct&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix()));return l=1,T=!1,ct||He.distanceToSquared(n.object.position)>o||8*(1-G.dot(n.object.quaternion))>o||De.distanceToSquared(n.target)>0?(n.dispatchEvent(xc),He.copy(n.object.position),G.copy(n.object.quaternion),De.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Te),n.domElement.removeEventListener("pointerdown",B),n.domElement.removeEventListener("pointercancel",xe),n.domElement.removeEventListener("wheel",Z),n.domElement.removeEventListener("pointermove",P),n.domElement.removeEventListener("pointerup",xe),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ae),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new bc,c=new bc;let l=1;const u=new Ie,f=new pt,d=new pt,g=new pt,v=new pt,_=new pt,m=new pt,p=new pt,x=new pt,b=new pt,A=new Ie,C=new pt;let T=!1;const w=[],L={};let F=!1;function y(q){return q!==null?2*Math.PI/60*n.autoRotateSpeed*q:2*Math.PI/60/60*n.autoRotateSpeed}function U(q){const ke=Math.abs(q*.01);return Math.pow(.95,n.zoomSpeed*ke)}function Y(q){c.theta-=q}function Q(q){c.phi-=q}const k=function(){const q=new Ie;return function(je,He){q.setFromMatrixColumn(He,0),q.multiplyScalar(-je),u.add(q)}}(),X=function(){const q=new Ie;return function(je,He){n.screenSpacePanning===!0?q.setFromMatrixColumn(He,1):(q.setFromMatrixColumn(He,0),q.crossVectors(n.object.up,q)),q.multiplyScalar(je),u.add(q)}}(),W=function(){const q=new Ie;return function(je,He){const G=n.domElement;if(n.object.isPerspectiveCamera){const De=n.object.position;q.copy(De).sub(n.target);let we=q.length();we*=Math.tan(n.object.fov/2*Math.PI/180),k(2*je*we/G.clientHeight,n.object.matrix),X(2*He*we/G.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(k(je*(n.object.right-n.object.left)/n.object.zoom/G.clientWidth,n.object.matrix),X(He*(n.object.top-n.object.bottom)/n.object.zoom/G.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function J(q){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=q:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ee(q){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=q:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function se(q,ke){if(!n.zoomToCursor)return;T=!0;const je=n.domElement.getBoundingClientRect(),He=q-je.left,G=ke-je.top,De=je.width,we=je.height;C.x=He/De*2-1,C.y=-(G/we)*2+1,A.set(C.x,C.y,1).unproject(n.object).sub(n.object.position).normalize()}function ue(q){return Math.max(n.minDistance,Math.min(n.maxDistance,q))}function ce(q){f.set(q.clientX,q.clientY)}function le(q){se(q.clientX,q.clientX),p.set(q.clientX,q.clientY)}function he(q){v.set(q.clientX,q.clientY)}function z(q){d.set(q.clientX,q.clientY),g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const ke=n.domElement;Y(2*Math.PI*g.x/ke.clientHeight),Q(2*Math.PI*g.y/ke.clientHeight),f.copy(d),n.update()}function K(q){x.set(q.clientX,q.clientY),b.subVectors(x,p),b.y>0?J(U(b.y)):b.y<0&&ee(U(b.y)),p.copy(x),n.update()}function re(q){_.set(q.clientX,q.clientY),m.subVectors(_,v).multiplyScalar(n.panSpeed),W(m.x,m.y),v.copy(_),n.update()}function D(q){se(q.clientX,q.clientY),q.deltaY<0?ee(U(q.deltaY)):q.deltaY>0&&J(U(q.deltaY)),n.update()}function I(q){let ke=!1;switch(q.code){case n.keys.UP:q.ctrlKey||q.metaKey||q.shiftKey?Q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,n.keyPanSpeed),ke=!0;break;case n.keys.BOTTOM:q.ctrlKey||q.metaKey||q.shiftKey?Q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,-n.keyPanSpeed),ke=!0;break;case n.keys.LEFT:q.ctrlKey||q.metaKey||q.shiftKey?Y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(n.keyPanSpeed,0),ke=!0;break;case n.keys.RIGHT:q.ctrlKey||q.metaKey||q.shiftKey?Y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(-n.keyPanSpeed,0),ke=!0;break}ke&&(q.preventDefault(),n.update())}function Ee(q){if(w.length===1)f.set(q.pageX,q.pageY);else{const ke=Le(q),je=.5*(q.pageX+ke.x),He=.5*(q.pageY+ke.y);f.set(je,He)}}function Me(q){if(w.length===1)v.set(q.pageX,q.pageY);else{const ke=Le(q),je=.5*(q.pageX+ke.x),He=.5*(q.pageY+ke.y);v.set(je,He)}}function Re(q){const ke=Le(q),je=q.pageX-ke.x,He=q.pageY-ke.y,G=Math.sqrt(je*je+He*He);p.set(0,G)}function j(q){n.enableZoom&&Re(q),n.enablePan&&Me(q)}function Ae(q){n.enableZoom&&Re(q),n.enableRotate&&Ee(q)}function Se(q){if(w.length==1)d.set(q.pageX,q.pageY);else{const je=Le(q),He=.5*(q.pageX+je.x),G=.5*(q.pageY+je.y);d.set(He,G)}g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const ke=n.domElement;Y(2*Math.PI*g.x/ke.clientHeight),Q(2*Math.PI*g.y/ke.clientHeight),f.copy(d)}function Ne(q){if(w.length===1)_.set(q.pageX,q.pageY);else{const ke=Le(q),je=.5*(q.pageX+ke.x),He=.5*(q.pageY+ke.y);_.set(je,He)}m.subVectors(_,v).multiplyScalar(n.panSpeed),W(m.x,m.y),v.copy(_)}function oe(q){const ke=Le(q),je=q.pageX-ke.x,He=q.pageY-ke.y,G=Math.sqrt(je*je+He*He);x.set(0,G),b.set(0,Math.pow(x.y/p.y,n.zoomSpeed)),J(b.y),p.copy(x);const De=(q.pageX+ke.x)*.5,we=(q.pageY+ke.y)*.5;se(De,we)}function ie(q){n.enableZoom&&oe(q),n.enablePan&&Ne(q)}function ge(q){n.enableZoom&&oe(q),n.enableRotate&&Se(q)}function B(q){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(q.pointerId),n.domElement.addEventListener("pointermove",P),n.domElement.addEventListener("pointerup",xe)),Ce(q),q.pointerType==="touch"?be(q):te(q))}function P(q){n.enabled!==!1&&(q.pointerType==="touch"?ye(q):N(q))}function xe(q){switch(Ye(q),w.length){case 0:n.domElement.releasePointerCapture(q.pointerId),n.domElement.removeEventListener("pointermove",P),n.domElement.removeEventListener("pointerup",xe),n.dispatchEvent(Ec),r=s.NONE;break;case 1:const ke=w[0],je=L[ke];be({pointerId:ke,pageX:je.x,pageY:je.y});break}}function te(q){let ke;switch(q.button){case 0:ke=n.mouseButtons.LEFT;break;case 1:ke=n.mouseButtons.MIDDLE;break;case 2:ke=n.mouseButtons.RIGHT;break;default:ke=-1}switch(ke){case Ui.DOLLY:if(n.enableZoom===!1)return;le(q),r=s.DOLLY;break;case Ui.ROTATE:if(q.ctrlKey||q.metaKey||q.shiftKey){if(n.enablePan===!1)return;he(q),r=s.PAN}else{if(n.enableRotate===!1)return;ce(q),r=s.ROTATE}break;case Ui.PAN:if(q.ctrlKey||q.metaKey||q.shiftKey){if(n.enableRotate===!1)return;ce(q),r=s.ROTATE}else{if(n.enablePan===!1)return;he(q),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Mo)}function N(q){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;z(q);break;case s.DOLLY:if(n.enableZoom===!1)return;K(q);break;case s.PAN:if(n.enablePan===!1)return;re(q);break}}function Z(q){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(q.preventDefault(),n.dispatchEvent(Mo),D(me(q)),n.dispatchEvent(Ec))}function me(q){const ke=q.deltaMode,je={clientX:q.clientX,clientY:q.clientY,deltaY:q.deltaY};switch(ke){case 1:je.deltaY*=16;break;case 2:je.deltaY*=100;break}return q.ctrlKey&&!F&&(je.deltaY*=10),je}function _e(q){q.key==="Control"&&(F=!0,n.domElement.getRootNode().addEventListener("keyup",$,{passive:!0,capture:!0}))}function $(q){q.key==="Control"&&(F=!1,n.domElement.getRootNode().removeEventListener("keyup",$,{passive:!0,capture:!0}))}function ae(q){n.enabled===!1||n.enablePan===!1||I(q)}function be(q){switch(Oe(q),w.length){case 1:switch(n.touches.ONE){case Fi.ROTATE:if(n.enableRotate===!1)return;Ee(q),r=s.TOUCH_ROTATE;break;case Fi.PAN:if(n.enablePan===!1)return;Me(q),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Fi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;j(q),r=s.TOUCH_DOLLY_PAN;break;case Fi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ae(q),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Mo)}function ye(q){switch(Oe(q),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Se(q),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Ne(q),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ie(q),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ge(q),n.update();break;default:r=s.NONE}}function Te(q){n.enabled!==!1&&q.preventDefault()}function Ce(q){w.push(q.pointerId)}function Ye(q){delete L[q.pointerId];for(let ke=0;ke<w.length;ke++)if(w[ke]==q.pointerId){w.splice(ke,1);return}}function Oe(q){let ke=L[q.pointerId];ke===void 0&&(ke=new pt,L[q.pointerId]=ke),ke.set(q.pageX,q.pageY)}function Le(q){const ke=q.pointerId===w[0]?w[1]:w[0];return L[ke]}n.domElement.addEventListener("contextmenu",Te),n.domElement.addEventListener("pointerdown",B),n.domElement.addEventListener("pointercancel",xe),n.domElement.addEventListener("wheel",Z,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",_e,{passive:!0,capture:!0}),this.update()}}function Sc(i,e,t){const n=i.slice();return n[54]=e[t],n}function yc(i){let e,t='<div class="empty-icon svelte-1ux5xdu">⛏</div> <h3 class="svelte-1ux5xdu">GeoModeler 三维地质可视化</h3> <p class="svelte-1ux5xdu">导入钻孔数据后开始三维建模与可视化分析</p>';return{c(){e=M("div"),e.innerHTML=t,this.h()},l(n){e=E(n,"DIV",{class:!0,"data-svelte-h":!0}),Pe(e)!=="svelte-1u73fdm"&&(e.innerHTML=t),this.h()},h(){R(e,"class","viewer-empty svelte-1ux5xdu")},m(n,s){ve(n,e,s)},d(n){n&&S(e)}}}function Tc(i){let e,t,n,s="体积估算",r,o,a=i[7]?"▸":"▾",c,l,u,f,d=!i[7]&&wc(i);return{c(){e=M("div"),t=M("div"),n=M("span"),n.textContent=s,r=H(),o=M("span"),c=pe(a),l=H(),d&&d.c(),this.h()},l(g){e=E(g,"DIV",{class:!0});var v=O(e);t=E(v,"DIV",{class:!0});var _=O(t);n=E(_,"SPAN",{class:!0,"data-svelte-h":!0}),Pe(n)!=="svelte-14576x2"&&(n.textContent=s),r=V(_),o=E(_,"SPAN",{class:!0});var m=O(o);c=de(m,a),m.forEach(S),_.forEach(S),l=V(v),d&&d.l(v),v.forEach(S),this.h()},h(){R(n,"class","volume-card-title svelte-1ux5xdu"),R(o,"class","volume-card-toggle svelte-1ux5xdu"),R(t,"class","volume-card-header svelte-1ux5xdu"),R(e,"class","volume-card svelte-1ux5xdu"),Kt(e,"collapsed",i[7])},m(g,v){ve(g,e,v),h(e,t),h(t,n),h(t,r),h(t,o),h(o,c),h(e,l),d&&d.m(e,null),u||(f=ze(t,"click",i[8]),u=!0)},p(g,v){v[0]&128&&a!==(a=g[7]?"▸":"▾")&&Ve(c,a),g[7]?d&&(d.d(1),d=null):d?d.p(g,v):(d=wc(g),d.c(),d.m(e,null)),v[0]&128&&Kt(e,"collapsed",g[7])},d(g){g&&S(e),d&&d.d(),u=!1,f()}}}function wc(i){let e,t,n=nt(i[0]),s=[];for(let o=0;o<n.length;o+=1)s[o]=Ac(Sc(i,n,o));let r=i[0].length>0&&Cc(i);return{c(){e=M("div");for(let o=0;o<s.length;o+=1)s[o].c();t=H(),r&&r.c(),this.h()},l(o){e=E(o,"DIV",{class:!0});var a=O(e);for(let c=0;c<s.length;c+=1)s[c].l(a);t=V(a),r&&r.l(a),a.forEach(S),this.h()},h(){R(e,"class","volume-card-body svelte-1ux5xdu")},m(o,a){ve(o,e,a);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(e,null);h(e,t),r&&r.m(e,null)},p(o,a){if(a[0]&65){n=nt(o[0]);let c;for(c=0;c<n.length;c+=1){const l=Sc(o,n,c);s[c]?s[c].p(l,a):(s[c]=Ac(l),s[c].c(),s[c].m(e,t))}for(;c<s.length;c+=1)s[c].d(1);s.length=n.length}o[0].length>0?r?r.p(o,a):(r=Cc(o),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(o){o&&S(e),Et(s,o),r&&r.d()}}}function Ac(i){let e,t,n,s,r=i[54].lithology_name+"",o,a,c,l=i[54].volume.toFixed(2)+"",u,f,d,g,v=i[54].percentage.toFixed(2)+"",_,m;function p(...x){return i[9](i[54],...x)}return{c(){e=M("div"),t=M("span"),n=H(),s=M("span"),o=pe(r),a=H(),c=M("span"),u=pe(l),f=pe(" m³"),d=H(),g=M("span"),_=pe(v),m=pe("%"),this.h()},l(x){e=E(x,"DIV",{class:!0});var b=O(e);t=E(b,"SPAN",{class:!0,style:!0}),O(t).forEach(S),n=V(b),s=E(b,"SPAN",{class:!0});var A=O(s);o=de(A,r),A.forEach(S),a=V(b),c=E(b,"SPAN",{class:!0});var C=O(c);u=de(C,l),f=de(C," m³"),C.forEach(S),d=V(b),g=E(b,"SPAN",{class:!0});var T=O(g);_=de(T,v),m=de(T,"%"),T.forEach(S),b.forEach(S),this.h()},h(){var x,b;R(t,"class","volume-color-swatch svelte-1ux5xdu"),fe(t,"background",((b=(x=i[6])==null?void 0:x.find(p))==null?void 0:b.color)||"#888"),R(s,"class","volume-name svelte-1ux5xdu"),R(c,"class","volume-value svelte-1ux5xdu"),R(g,"class","volume-percent svelte-1ux5xdu"),R(e,"class","volume-card-row svelte-1ux5xdu")},m(x,b){ve(x,e,b),h(e,t),h(e,n),h(e,s),h(s,o),h(e,a),h(e,c),h(c,u),h(c,f),h(e,d),h(e,g),h(g,_),h(g,m)},p(x,b){var A,C;i=x,b[0]&65&&fe(t,"background",((C=(A=i[6])==null?void 0:A.find(p))==null?void 0:C.color)||"#888"),b[0]&1&&r!==(r=i[54].lithology_name+"")&&Ve(o,r),b[0]&1&&l!==(l=i[54].volume.toFixed(2)+"")&&Ve(u,l),b[0]&1&&v!==(v=i[54].percentage.toFixed(2)+"")&&Ve(_,v)},d(x){x&&S(e)}}}function Cc(i){let e,t,n=i[0][0].total_volume.toFixed(2)+"",s,r;return{c(){e=M("div"),t=pe("总体积: "),s=pe(n),r=pe(" m³"),this.h()},l(o){e=E(o,"DIV",{class:!0});var a=O(e);t=de(a,"总体积: "),s=de(a,n),r=de(a," m³"),a.forEach(S),this.h()},h(){R(e,"class","volume-card-total svelte-1ux5xdu")},m(o,a){ve(o,e,a),h(e,t),h(e,s),h(e,r)},p(o,a){a[0]&1&&n!==(n=o[0][0].total_volume.toFixed(2)+"")&&Ve(s,n)},d(o){o&&S(e)}}}function jv(i){let e,t,n=!i[1]&&i[4].length===0&&!i[5]&&yc(),s=i[0]&&i[0].length>0&&Tc(i);return{c(){e=M("div"),n&&n.c(),t=H(),s&&s.c(),this.h()},l(r){e=E(r,"DIV",{class:!0});var o=O(e);n&&n.l(o),t=V(o),s&&s.l(o),o.forEach(S),this.h()},h(){R(e,"class","viewer-container svelte-1ux5xdu")},m(r,o){ve(r,e,o),n&&n.m(e,null),h(e,t),s&&s.m(e,null),i[10](e)},p(r,o){!r[1]&&r[4].length===0&&!r[5]?n||(n=yc(),n.c(),n.m(e,t)):n&&(n.d(1),n=null),r[0]&&r[0].length>0?s?s.p(r,o):(s=Tc(r),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},i:yt,o:yt,d(r){r&&S(e),n&&n.d(),s&&s.d(),i[10](null)}}}function Rc(i,e,t){const n=t>e?Math.max(0,Math.min(1,(i-e)/(t-e))):.5;if(n<.25)return[0,0,.5+n/.25*.5];if(n<.5){const s=(n-.25)/.25;return[0,s,1-s]}else if(n<.75){const s=(n-.5)/.25;return[s,1-s,0]}else return[1,1-(n-.75)/.25*.5,0]}function Yv(i,e,t){const n=t>e?Math.max(0,Math.min(1,(i-e)/(t-e))):.5,s=Math.min(1,n*2),r=n<.5?n*1.5:(1-n)*1.5,o=Math.max(0,1-n*2);return[s,r,o]}function Kv(i,e,t){let n,s,r,o,a,c,l,u,f=yt,d=()=>(f(),f=of(B,N=>t(31,u=N)),B),g,v,_,m,p,x,b,A,C;Je(i,ea,N=>t(0,n=N)),Je(i,Ls,N=>t(1,s=N)),Je(i,Gn,N=>t(4,r=N)),Je(i,xr,N=>t(27,o=N)),Je(i,Un,N=>t(28,a=N)),Je(i,br,N=>t(29,c=N)),Je(i,zn,N=>t(30,l=N)),Je(i,Jn,N=>t(32,g=N)),Je(i,_r,N=>t(33,v=N)),Je(i,mr,N=>t(5,_=N)),Je(i,ns,N=>t(34,m=N)),Je(i,ts,N=>t(35,p=N)),Je(i,es,N=>t(36,x=N)),Je(i,ti,N=>t(6,b=N)),Je(i,us,N=>t(37,A=N)),Je(i,$o,N=>t(7,C=N)),i.$$.on_destroy.push(()=>f());let T,w,L,F,y,U={},Y=[],Q=[],k=[],X=null,W=null,J=null,ee=null,se=null,ue,ce=!1,le=0;const he=["#E6B89C","#F0E68C","#CD853F","#8B7355","#A0522D","#DEB887","#D2B48C","#BDB76B","#BC8F8F","#C4A882","#9ACD32","#6B8E23","#556B2F","#8FBC8F","#2E8B57","#708090","#778899","#B0C4DE","#87CEEB","#4682B4"];function z(N,Z=0){const me=b==null?void 0:b.find(_e=>_e.name===N);return me!=null&&me.color?new bt(me.color):new bt(he[Z%he.length])}Lr(()=>{re();const N=Gn.subscribe(q=>{ce&&q&&q.length>0&&(Me(q),Ee())}),Z=Ls.subscribe(q=>{ce&&q&&Re()}),me=ns.subscribe(()=>{ce&&j()}),_e=es.subscribe(()=>{ce&&s&&Re()}),$=ts.subscribe(()=>{ce&&s&&Re()}),ae=mr.subscribe(q=>{ce&&(q?Ae():W&&(K(W),W=null))}),be=_r.subscribe(()=>{ce&&_&&Ae()}),ye=Jn.subscribe(()=>{ce&&Se()}),Te=wo.subscribe(()=>{ce&&Ee()}),Ce=zn.subscribe(()=>{ce&&ie()}),Ye=Un.subscribe(()=>{ce&&ee&&(ee.visible=a)}),Oe=br.subscribe(()=>{ce&&ee&&(ee.material.opacity=c)}),Le=xr.subscribe(()=>{ce&&ge()}),Be=us.subscribe(()=>{ce&&Me(r)});return()=>{N(),Z(),me(),_e(),$(),ae(),be(),ye(),Te(),Ce(),Ye(),Oe(),Le(),Be(),cancelAnimationFrame(ue),F==null||F.dispose()}});function K(N){N&&(w.remove(N),N.geometry&&N.geometry.dispose(),N.material&&(Array.isArray(N.material)?N.material.forEach(Z=>Z.dispose()):N.material.dispose()),N.children&&N.children.forEach(Z=>K(Z)))}function re(){if(!T)return;w=new Ov,w.background=new bt(1711395),L=new Pn(60,T.clientWidth/T.clientHeight,.1,1e4),L.position.set(100,80,100),F=new tf({antialias:!0}),F.setSize(T.clientWidth,T.clientHeight),F.setPixelRatio(window.devicePixelRatio),F.localClippingEnabled=!0,T.appendChild(F.domElement),y=new qv(L,F.domElement),y.enableDamping=!0,y.dampingFactor=.05;const N=new Hv(4210752,2);w.add(N);const Z=new Vv(16777215,1.5);Z.position.set(100,200,100),w.add(Z);const me=new Gv(200,20,4473924,3355443);w.add(me);const _e=new Wv(50);w.add(_e),ce=!0,D(),new ResizeObserver(()=>{T&&F&&L&&(L.aspect=T.clientWidth/T.clientHeight,L.updateProjectionMatrix(),F.setSize(T.clientWidth,T.clientHeight))}).observe(T)}function D(){ue=requestAnimationFrame(D),y==null||y.update();const N=Date.now();N-le>=500&&(le=N,k.forEach(Z=>{Z!=null&&Z.material&&(Z.material.opacity=Z.material.opacity>.5?.2:1)})),F==null||F.render(w,L)}function I(N){const Z=r;if(!Z||Z.length===0)return null;const me=Z.map(ye=>[ye.longitude,ye.latitude]),_e=Math.min(...me.map(ye=>ye[0])),$=Math.min(...me.map(ye=>ye[1])),ae=(N.longitude-_e)*111320*Math.cos(N.latitude*Math.PI/180),be=(N.latitude-$)*111320;return{x:ae,z:be}}function Ee(){Q.forEach(_e=>{K(_e)}),Q=[];const N=r;if(!N||N.length<2)return;N.map(_e=>[_e.longitude,_e.latitude]);const Z=[];for(let _e=1;_e<N.length;_e++){const $=Math.sqrt(Math.pow((N[_e].longitude-N[_e-1].longitude)*111320*Math.cos(N[_e].latitude*Math.PI/180),2)+Math.pow((N[_e].latitude-N[_e-1].latitude)*111320,2));Z.push($)}const me=Z.reduce((_e,$)=>_e+$,0)/Z.length;for(let _e=0;_e<Z.length;_e++)if(Z[_e]>me*2){const $=I(N[_e]),ae=I(N[_e+1]);if(!$||!ae)continue;const be=($.x+ae.x)/2,ye=($.z+ae.z)/2,Te=Math.abs(ae.x-$.x)||5,Ce=Math.abs(ae.z-$.z)||5,Ye=50,Oe=new Di(Te+4,Ye,Ce+4),Le=new Pr({color:16724787,transparent:!0,opacity:.15,side:cn,depthWrite:!1}),Be=new Yt(Oe,Le);Be.position.set(be,N[_e].elevation-Ye/2,ye),w.add(Be),Q.push(Be);const q=new kv(Oe),ke=new Ns({color:16724787,transparent:!0,opacity:.6}),je=new Wo(q,ke);je.position.copy(Be.position),w.add(je),Q.push(je)}}function Me(N){if(Y.forEach(ae=>{K(ae)}),Y=[],k.forEach(ae=>{K(ae)}),k=[],!N||N.length===0)return;const Z=N.map(ae=>[ae.longitude,ae.latitude,ae.elevation]);if(Z.length===0)return;new Set(A.map(ae=>ae.borehole_id));const me={};A.forEach(ae=>{me[ae.borehole_id]=ae.warning_level});const _e=Math.min(...Z.map(ae=>ae[0])),$=Math.min(...Z.map(ae=>ae[1]));N.forEach(ae=>{const be=(ae.longitude-_e)*111320*Math.cos(ae.latitude*Math.PI/180),ye=(ae.latitude-$)*111320;if(!ae.layers||ae.layers.length===0)return;ae.layers.forEach(Oe=>{const Le=(b==null?void 0:b.findIndex(G=>G.name===Oe.lithology_name))||0,Be=z(Oe.lithology_name,Le),q=Oe.bottom_depth-Oe.top_depth,ke=new Xo(1.2,1.2,q,16),je=new Mi({color:Be,transparent:!0,opacity:.9}),He=new Yt(ke,je);He.position.set(be,ae.elevation-Oe.top_depth-q/2,ye),w.add(He),Y.push(He)});const Te=me[ae.id];let Ce=16777215;Te==="red"?Ce=16007990:Te==="orange"?Ce=16750592:Te==="blue"&&(Ce=2201331);const Ye=new Yt(new qo(1.5,16,16),new Mi({color:Ce,transparent:!!Te,opacity:1}));Ye.position.set(be,ae.elevation,ye),w.add(Ye),Y.push(Ye),Te&&k.push(Ye)})}function Re(){Object.values(U).forEach($=>{K($)}),U={};const N=s;if(!(N!=null&&N.surfaces))return;const Z=N.grid;if(!Z)return;const me=Z.nx,_e=Z.ny;N.lithologies&&N.lithologies.forEach(($,ae)=>{var G,De;const be=N.surfaces[$];if(!(be!=null&&be.top)||!(be!=null&&be.bottom))return;const ye=be.top,Te=be.bottom,Ce=z($,ae),Ye=x[$]!==!1,Oe=p[$]??.7,Le=new rs,Be=new $t,q=[],ke=[];for(let we=0;we<_e;we++)for(let Fe=0;Fe<me;Fe++){const Ge=Fe/(me-1)*100,Ze=we/(_e-1)*100,Qe=((G=ye[we])==null?void 0:G[Fe])??0,et=((De=Te[we])==null?void 0:De[Fe])??0;q.push(Ge,Qe,Ze),q.push(Ge,et,Ze)}for(let we=0;we<_e-1;we++)for(let Fe=0;Fe<me-1;Fe++){const Ge=(we*me+Fe)*2,Ze=(we*me+Fe+1)*2,Qe=((we+1)*me+Fe)*2,et=((we+1)*me+Fe+1)*2;ke.push(Ge,Qe,Ze),ke.push(Ze,Qe,et),ke.push(Ge+1,Ze+1,Qe+1),ke.push(Ze+1,et+1,Qe+1)}for(let we=0;we<_e-1;we++)for(let Fe=0;Fe<me-1;Fe++){const Ge=(we*me+Fe)*2,Ze=Ge+1,Qe=(we*me+Fe+1)*2,et=Qe+1;ke.push(Ge,Qe,Ze),ke.push(Ze,Qe,et)}Be.setAttribute("position",new Dt(q,3)),Be.setIndex(ke),Be.computeVertexNormals();const je=new Mi({color:Ce,transparent:!0,opacity:Oe,side:cn,clippingPlanes:m.enabled&&X?[X]:[]}),He=new Yt(Be,je);Le.add(He),Le.visible=Ye,w.add(Le),U[$]=Le})}function j(){if(m.enabled){const N=m.normal,Z=m.position;X=new Qn(new Ie(N[0],N[1],N[2]).normalize(),-(N[0]*Z[0]+N[1]*Z[1]+N[2]*Z[2]))}else X=null;ce&&s&&Re()}function Ae(){W&&(K(W),W=null);const N=_;if(!N)return;const Z=N.field||N.grid_values;if(!Z)return;const me=N.grid;if(!me)return;const _e=me.nx||me.lon_nx||50,$=me.ny||me.lat_ny||50,ae=me.nz||me.elev_nz||25,be=v.mode,ye=v.colorMin,Te=v.colorMax,Ce=me.elev_min??me.z_min??0,Oe=((me.elev_max??me.z_max??100)-Ce)/(ae-1||1),Le=100/Math.max(_e,$);if(be==="voxel"){const Be=new rs,q=_e*$*ae,ke=Math.max(1,Math.floor(q/3e3));let je=0;for(let He=0;He<ae;He+=1)for(let G=0;G<$;G+=1)for(let De=0;De<_e;De+=1){if(je++%ke!==0&&ke>1)continue;const we=He*$*_e+G*_e+De;if(we>=Z.length)continue;const Fe=Z[we];if(Fe==null||Number.isNaN(Fe))continue;const Ge=Rc(Fe,ye,Te),Ze=De/(_e-1||1)*100,Qe=G/($-1||1)*100,et=Ce+He*Oe,ct=new Di(Le*.8,Math.abs(Oe*.8)||.5,Le*.8),tt=new Pr({color:new bt(Ge[0],Ge[1],Ge[2]),transparent:!0,opacity:.7}),ot=new Yt(ct,tt);ot.position.set(Ze,et,Qe),Be.add(ot)}W=Be,w.add(Be)}else{const Be=v.isosurfaceValue,q=[],ke=[],je=[];let He=0;for(let we=0;we<ae-1;we++)for(let Fe=0;Fe<$-1;Fe++)for(let Ge=0;Ge<_e-1;Ge++){const Qe=[[Ge,Fe,we],[Ge+1,Fe,we],[Ge+1,Fe+1,we],[Ge,Fe+1,we],[Ge,Fe,we+1],[Ge+1,Fe,we+1],[Ge+1,Fe+1,we+1],[Ge,Fe+1,we+1]].map(([Lt,Ut,An])=>{const on=An*$*_e+Ut*_e+Lt;return on<Z.length?Z[on]:0}),ct=Qe.map(Lt=>(Lt||0)>=Be).filter(Lt=>Lt).length;if(ct===0||ct===8)continue;const tt=(Ge+.5)/(_e-1)*100,ot=(Fe+.5)/($-1)*100,ft=Ce+(we+.5)*Oe,Gt=Qe.reduce((Lt,Ut)=>Lt+Ut,0)/8,Jt=Rc(Gt,ye,Te),wt=Le*.9,At=Math.max(Math.abs(Oe*.9),wt*.2);q.push(tt-wt/2,ft-At/2,ot-wt/2,tt+wt/2,ft-At/2,ot-wt/2,tt+wt/2,ft-At/2,ot+wt/2,tt-wt/2,ft-At/2,ot+wt/2,tt-wt/2,ft+At/2,ot-wt/2,tt+wt/2,ft+At/2,ot-wt/2,tt+wt/2,ft+At/2,ot+wt/2,tt-wt/2,ft+At/2,ot+wt/2);for(let Lt=0;Lt<8;Lt++)je.push(Jt[0],Jt[1],Jt[2]);ke.push(He,He+1,He+2,He,He+2,He+3,He+4,He+6,He+5,He+4,He+7,He+6,He,He+4,He+5,He,He+5,He+1,He+1,He+5,He+6,He+1,He+6,He+2,He+2,He+6,He+7,He+2,He+7,He+3,He+3,He+7,He+4,He+3,He+4,He),He+=8}if(q.length===0)return;const G=new $t;G.setAttribute("position",new Dt(q,3)),G.setAttribute("color",new Dt(je,3)),G.setIndex(ke),G.computeVertexNormals();const De=new Mi({vertexColors:!0,transparent:!0,opacity:.85,side:cn});W=new Yt(G,De),w.add(W)}}function Se(){J&&(K(J),J=null);const N=g;if(!N||!N.visible||!N.orthoImage&&!N.demImage)return;const Z=100;if(N.demImage){const me=N.demImage,_e=document.createElement("canvas");_e.width=64,_e.height=64;const $=_e.getContext("2d");$.drawImage(me,0,0,64,64);try{const ae=$.getImageData(0,0,64,64).data,be=32,ye=32,Te=new ms(Z,Z,be,ye),Ce=Te.attributes.position;for(let Be=0;Be<=ye;Be++)for(let q=0;q<=be;q++){const ke=Math.floor(q/be*63),He=(Math.floor(Be/ye*63)*64+ke)*4,De=(ae[He]+ae[He+1]+ae[He+2])/3/255*30-5;Ce.setZ(Be*(be+1)+q,De)}Te.computeVertexNormals();const Ye={transparent:!0,opacity:N.opacity,side:cn};if(N.orthoImage){const Be=new rn(N.orthoImage);Be.needsUpdate=!0,Ye.map=Be}else Ye.color=8956518;const Oe=new Mi(Ye),Le=new Yt(Te,Oe);Le.rotation.x=-Math.PI/2,Le.position.y=0,J=Le,w.add(Le);return}catch(ae){console.warn("DEM texture load failed:",ae)}}if(N.orthoImage){const me=new rn(N.orthoImage);me.needsUpdate=!0;const _e=new ms(Z,Z),$=new Mi({map:me,transparent:!0,opacity:N.opacity,side:cn}),ae=new Yt(_e,$);ae.rotation.x=-Math.PI/2,ae.position.y=.01,J=ae,w.add(ae)}}async function Ne(){if(!(!s||!(u!=null&&u.runId)))try{const N=await ht.post(`/projects/modeling/runs/${u==null?void 0:u.runId}/volumes-all`);st(ea,n=N,n)}catch(N){console.warn("加载体积卡片失败:",N)}}function oe(N,Z,me){const _e=r;if(!_e||_e.length===0)return null;const $=Math.min(..._e.map(Ce=>Ce.longitude)),ae=Math.min(..._e.map(Ce=>Ce.latitude)),be=_e[0].latitude,ye=(N-$)*111320*Math.cos(be*Math.PI/180),Te=(Z-ae)*111320;return{x:ye,y:me,z:Te}}function ie(){var He;ee&&(K(ee),ee=null);const N=l;if(!(N!=null&&N.water_level_grid))return;const Z=N.grid,me=Z.nx,_e=Z.ny,$=N.water_level_grid,ae=N.water_level_min,be=N.water_level_max,ye=r;if(!ye||ye.length===0)return;const Te=Z.lon_min,Ce=Z.lat_min,Ye=Z.lon_max-Te,Oe=Z.lat_max-Ce;ye[0].latitude;const Le=[],Be=[],q=[];for(let G=0;G<_e;G++)for(let De=0;De<me;De++){const we=me>1?De/(me-1):.5,Fe=_e>1?G/(_e-1):.5,Ge=Te+we*Ye,Ze=Ce+Fe*Oe,Qe=((He=$[G])==null?void 0:He[De])??(ae+be)/2,et=oe(Ge,Ze,Qe);if(!et)continue;Le.push(et.x,et.y,et.z);const ct=Yv(Qe,ae,be);Be.push(ct[0],ct[1],ct[2])}for(let G=0;G<_e-1;G++)for(let De=0;De<me-1;De++){const we=G*me+De,Fe=G*me+De+1,Ge=(G+1)*me+De,Ze=(G+1)*me+De+1;q.push(we,Ge,Fe),q.push(Fe,Ge,Ze)}const ke=new $t;ke.setAttribute("position",new Dt(Le,3)),ke.setAttribute("color",new Dt(Be,3)),ke.setIndex(q),ke.computeVertexNormals();const je=new Mi({vertexColors:!0,transparent:!0,opacity:c,side:cn,depthWrite:!1});ee=new Yt(ke,je),ee.visible=a,ee.renderOrder=10,w.add(ee)}function ge(){se&&(K(se),se=null);const N=o;if(!N||N.length<2)return;const Z=r;if(!Z||Z.length===0)return;N.sort((ae,be)=>{const ye=(ae.longitude-Z[0].longitude)**2+(ae.latitude-Z[0].latitude)**2,Te=(be.longitude-Z[0].longitude)**2+(be.latitude-Z[0].latitude)**2;return ye-Te});const me=[];for(const ae of N){const be=oe(ae.longitude,ae.latitude,ae.elevation);be&&me.push(be.x,be.y,be.z)}if(me.length<6)return;const _e=new $t;_e.setAttribute("position",new Dt(me,3));const $=new Ns({color:16777215,linewidth:2,transparent:!0,opacity:.9});se=new nf(_e,$),se.renderOrder=20,w.add(se)}let B;$i.subscribe(N=>{d(t(3,B=N))});const P=()=>st($o,C=!C,C),xe=(N,Z)=>Z.name===N.lithology_name;function te(N){ni[N?"unshift":"push"](()=>{T=N,t(2,T)})}return i.$$.update=()=>{i.$$.dirty[0]&3&&s&&!n&&Ne()},[n,s,T,B,r,_,b,C,P,xe,te]}class Zv extends pn{constructor(e){super(),mn(this,e,Kv,jv,dn,{},null,[-1,-1])}}function Pc(i,e,t){const n=i.slice();return n[49]=e[t],n}function Lc(i,e,t){const n=i.slice();return n[52]=e[t],n}function Dc(i,e,t){const n=i.slice();return n[55]=e[t],n}function Jv(i){let e,t,n,s="变异函数模型",r,o,a,c="球状模型",l,u="指数模型",f,d="高斯模型",g,v,_,m,p,x,b,A="半变异函数拟合预览",C,T,w,L,F,y="刷新预览",U,Y,Q="各向异性",k,X,W,J,ee="主轴方向(°)",se,ue,ce,le,he,z="各向异性比",K,re,D,I,Ee="网格分辨率",Me,Re,j,Ae,Se="NX",Ne,oe,ie,ge,B,P="NY",xe,te,N,Z,me,_e="NZ",$,ae,be,ye,Te="开始建模",Ce,Ye,Oe=!i[4]&&Ic(i);return{c(){e=M("div"),t=M("div"),n=M("label"),n.textContent=s,r=H(),o=M("select"),a=M("option"),a.textContent=c,l=M("option"),l.textContent=u,f=M("option"),f.textContent=d,g=H(),v=M("label"),_=M("input"),m=pe(`
                自动拟合参数`),p=H(),Oe&&Oe.c(),x=H(),b=M("h4"),b.textContent=A,C=H(),T=M("div"),w=M("canvas"),L=H(),F=M("button"),F.textContent=y,U=H(),Y=M("h4"),Y.textContent=Q,k=H(),X=M("div"),W=M("div"),J=M("label"),J.textContent=ee,se=H(),ue=M("input"),ce=H(),le=M("div"),he=M("label"),he.textContent=z,K=H(),re=M("input"),D=H(),I=M("h4"),I.textContent=Ee,Me=H(),Re=M("div"),j=M("div"),Ae=M("label"),Ae.textContent=Se,Ne=H(),oe=M("input"),ie=H(),ge=M("div"),B=M("label"),B.textContent=P,xe=H(),te=M("input"),N=H(),Z=M("div"),me=M("label"),me.textContent=_e,$=H(),ae=M("input"),be=H(),ye=M("button"),ye.textContent=Te,this.h()},l(Le){e=E(Le,"DIV",{class:!0});var Be=O(e);t=E(Be,"DIV",{class:!0});var q=O(t);n=E(q,"LABEL",{"data-svelte-h":!0}),Pe(n)!=="svelte-1jgf9ft"&&(n.textContent=s),r=V(q),o=E(q,"SELECT",{});var ke=O(o);a=E(ke,"OPTION",{"data-svelte-h":!0}),Pe(a)!=="svelte-17ym7v6"&&(a.textContent=c),l=E(ke,"OPTION",{"data-svelte-h":!0}),Pe(l)!=="svelte-bzk8zo"&&(l.textContent=u),f=E(ke,"OPTION",{"data-svelte-h":!0}),Pe(f)!=="svelte-1iqrdsw"&&(f.textContent=d),ke.forEach(S),q.forEach(S),g=V(Be),v=E(Be,"LABEL",{class:!0});var je=O(v);_=E(je,"INPUT",{type:!0}),m=de(je,`
                自动拟合参数`),je.forEach(S),p=V(Be),Oe&&Oe.l(Be),x=V(Be),b=E(Be,"H4",{style:!0,"data-svelte-h":!0}),Pe(b)!=="svelte-3v99de"&&(b.textContent=A),C=V(Be),T=E(Be,"DIV",{class:!0});var He=O(T);w=E(He,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),O(w).forEach(S),He.forEach(S),L=V(Be),F=E(Be,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),Pe(F)!=="svelte-1ik1azm"&&(F.textContent=y),U=V(Be),Y=E(Be,"H4",{style:!0,"data-svelte-h":!0}),Pe(Y)!=="svelte-1bmbghc"&&(Y.textContent=Q),k=V(Be),X=E(Be,"DIV",{class:!0});var G=O(X);W=E(G,"DIV",{class:!0});var De=O(W);J=E(De,"LABEL",{"data-svelte-h":!0}),Pe(J)!=="svelte-121beyc"&&(J.textContent=ee),se=V(De),ue=E(De,"INPUT",{type:!0,step:!0}),De.forEach(S),ce=V(G),le=E(G,"DIV",{class:!0});var we=O(le);he=E(we,"LABEL",{"data-svelte-h":!0}),Pe(he)!=="svelte-yzj6ss"&&(he.textContent=z),K=V(we),re=E(we,"INPUT",{type:!0,step:!0,min:!0}),we.forEach(S),G.forEach(S),D=V(Be),I=E(Be,"H4",{style:!0,"data-svelte-h":!0}),Pe(I)!=="svelte-z4z6jw"&&(I.textContent=Ee),Me=V(Be),Re=E(Be,"DIV",{class:!0});var Fe=O(Re);j=E(Fe,"DIV",{class:!0});var Ge=O(j);Ae=E(Ge,"LABEL",{"data-svelte-h":!0}),Pe(Ae)!=="svelte-kuum7m"&&(Ae.textContent=Se),Ne=V(Ge),oe=E(Ge,"INPUT",{type:!0,min:!0,max:!0}),Ge.forEach(S),ie=V(Fe),ge=E(Fe,"DIV",{class:!0});var Ze=O(ge);B=E(Ze,"LABEL",{"data-svelte-h":!0}),Pe(B)!=="svelte-1kjsuy3"&&(B.textContent=P),xe=V(Ze),te=E(Ze,"INPUT",{type:!0,min:!0,max:!0}),Ze.forEach(S),N=V(Fe),Z=E(Fe,"DIV",{class:!0});var Qe=O(Z);me=E(Qe,"LABEL",{"data-svelte-h":!0}),Pe(me)!=="svelte-1vblzhc"&&(me.textContent=_e),$=V(Qe),ae=E(Qe,"INPUT",{type:!0,min:!0,max:!0}),Qe.forEach(S),Fe.forEach(S),be=V(Be),ye=E(Be,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),Pe(ye)!=="svelte-1rcbday"&&(ye.textContent=Te),Be.forEach(S),this.h()},h(){a.__value="spherical",Ke(a,a.__value),l.__value="exponential",Ke(l,l.__value),f.__value="gaussian",Ke(f,f.__value),i[0]===void 0&&fn(()=>i[27].call(o)),R(t,"class","form-group"),R(_,"type","checkbox"),R(v,"class","checkbox-label"),fe(b,"font-size","13px"),fe(b,"margin","12px 0 8px"),R(w,"id","variogramCanvas"),R(w,"width","340"),R(w,"height","200"),R(w,"class","svelte-z3j894"),R(T,"class","variogram-preview svelte-z3j894"),R(F,"class","btn-secondary btn-sm"),fe(F,"width","100%"),fe(F,"margin-top","4px"),fe(Y,"font-size","13px"),fe(Y,"margin","12px 0 8px"),R(ue,"type","number"),R(ue,"step","1"),R(W,"class","form-group"),R(re,"type","number"),R(re,"step","0.1"),R(re,"min","1"),R(le,"class","form-group"),R(X,"class","form-row"),fe(I,"font-size","13px"),fe(I,"margin","12px 0 8px"),R(oe,"type","number"),R(oe,"min","5"),R(oe,"max","100"),R(j,"class","form-group"),R(te,"type","number"),R(te,"min","5"),R(te,"max","100"),R(ge,"class","form-group"),R(ae,"type","number"),R(ae,"min","5"),R(ae,"max","50"),R(Z,"class","form-group"),R(Re,"class","form-row"),R(ye,"class","btn-primary"),fe(ye,"width","100%"),fe(ye,"margin-top","12px"),R(e,"class","model-params")},m(Le,Be){ve(Le,e,Be),h(e,t),h(t,n),h(t,r),h(t,o),h(o,a),h(o,l),h(o,f),Tt(o,i[0],!0),h(e,g),h(e,v),h(v,_),_.checked=i[4],h(v,m),h(e,p),Oe&&Oe.m(e,null),h(e,x),h(e,b),h(e,C),h(e,T),h(T,w),i[32](w),h(e,L),h(e,F),h(e,U),h(e,Y),h(e,k),h(e,X),h(X,W),h(W,J),h(W,se),h(W,ue),Ke(ue,i[6]),h(X,ce),h(X,le),h(le,he),h(le,K),h(le,re),Ke(re,i[7]),h(e,D),h(e,I),h(e,Me),h(e,Re),h(Re,j),h(j,Ae),h(j,Ne),h(j,oe),Ke(oe,i[8]),h(Re,ie),h(Re,ge),h(ge,B),h(ge,xe),h(ge,te),Ke(te,i[9]),h(Re,N),h(Re,Z),h(Z,me),h(Z,$),h(Z,ae),Ke(ae,i[10]),h(e,be),h(e,ye),Ce||(Ye=[ze(o,"change",i[27]),ze(_,"change",i[28]),ze(F,"click",i[20]),ze(ue,"input",i[33]),ze(re,"input",i[34]),ze(oe,"input",i[35]),ze(te,"input",i[36]),ze(ae,"input",i[37]),ze(ye,"click",i[21])],Ce=!0)},p(Le,Be){Be[0]&1&&Tt(o,Le[0]),Be[0]&16&&(_.checked=Le[4]),Le[4]?Oe&&(Oe.d(1),Oe=null):Oe?Oe.p(Le,Be):(Oe=Ic(Le),Oe.c(),Oe.m(e,x)),Be[0]&64&&lt(ue.value)!==Le[6]&&Ke(ue,Le[6]),Be[0]&128&&lt(re.value)!==Le[7]&&Ke(re,Le[7]),Be[0]&256&&lt(oe.value)!==Le[8]&&Ke(oe,Le[8]),Be[0]&512&&lt(te.value)!==Le[9]&&Ke(te,Le[9]),Be[0]&1024&&lt(ae.value)!==Le[10]&&Ke(ae,Le[10])},d(Le){Le&&S(e),Oe&&Oe.d(),i[32](null),Ce=!1,Ct(Ye)}}}function Qv(i){let e,t,n,s=i[14].progress.toFixed(0)+"",r,o,a,c,l;return{c(){e=M("div"),t=M("p"),n=pe("建模中... "),r=pe(s),o=pe("%"),a=H(),c=M("div"),l=M("div"),this.h()},l(u){e=E(u,"DIV",{class:!0});var f=O(e);t=E(f,"P",{class:!0});var d=O(t);n=de(d,"建模中... "),r=de(d,s),o=de(d,"%"),d.forEach(S),a=V(f),c=E(f,"DIV",{class:!0});var g=O(c);l=E(g,"DIV",{class:!0,style:!0}),O(l).forEach(S),g.forEach(S),f.forEach(S),this.h()},h(){R(t,"class","svelte-z3j894"),R(l,"class","progress-bar-fill"),fe(l,"width",i[14].progress+"%"),R(c,"class","progress-bar"),R(e,"class","progress-section svelte-z3j894")},m(u,f){ve(u,e,f),h(e,t),h(t,n),h(t,r),h(t,o),h(e,a),h(e,c),h(c,l)},p(u,f){f[0]&16384&&s!==(s=u[14].progress.toFixed(0)+"")&&Ve(r,s),f[0]&16384&&fe(l,"width",u[14].progress+"%")},d(u){u&&S(e)}}}function Ic(i){let e,t,n,s="变程",r,o,a,c,l,u="基台值",f,d,g,v,_,m="块金值",p,x,b,A;return{c(){e=M("div"),t=M("div"),n=M("label"),n.textContent=s,r=H(),o=M("input"),a=H(),c=M("div"),l=M("label"),l.textContent=u,f=H(),d=M("input"),g=H(),v=M("div"),_=M("label"),_.textContent=m,p=H(),x=M("input"),this.h()},l(C){e=E(C,"DIV",{class:!0});var T=O(e);t=E(T,"DIV",{class:!0});var w=O(t);n=E(w,"LABEL",{"data-svelte-h":!0}),Pe(n)!=="svelte-s6abzb"&&(n.textContent=s),r=V(w),o=E(w,"INPUT",{type:!0,step:!0}),w.forEach(S),a=V(T),c=E(T,"DIV",{class:!0});var L=O(c);l=E(L,"LABEL",{"data-svelte-h":!0}),Pe(l)!=="svelte-1eshi8q"&&(l.textContent=u),f=V(L),d=E(L,"INPUT",{type:!0,step:!0}),L.forEach(S),T.forEach(S),g=V(C),v=E(C,"DIV",{class:!0});var F=O(v);_=E(F,"LABEL",{"data-svelte-h":!0}),Pe(_)!=="svelte-olodes"&&(_.textContent=m),p=V(F),x=E(F,"INPUT",{type:!0,step:!0}),F.forEach(S),this.h()},h(){R(o,"type","number"),R(o,"step","0.001"),R(t,"class","form-group"),R(d,"type","number"),R(d,"step","0.001"),R(c,"class","form-group"),R(e,"class","form-row"),R(x,"type","number"),R(x,"step","0.001"),R(v,"class","form-group")},m(C,T){ve(C,e,T),h(e,t),h(t,n),h(t,r),h(t,o),Ke(o,i[1]),h(e,a),h(e,c),h(c,l),h(c,f),h(c,d),Ke(d,i[2]),ve(C,g,T),ve(C,v,T),h(v,_),h(v,p),h(v,x),Ke(x,i[3]),b||(A=[ze(o,"input",i[29]),ze(o,"input",i[20]),ze(d,"input",i[30]),ze(d,"input",i[20]),ze(x,"input",i[31]),ze(x,"input",i[20])],b=!0)},p(C,T){T[0]&2&&lt(o.value)!==C[1]&&Ke(o,C[1]),T[0]&4&&lt(d.value)!==C[2]&&Ke(d,C[2]),T[0]&8&&lt(x.value)!==C[3]&&Ke(x,C[3])},d(C){C&&(S(e),S(g),S(v)),b=!1,Ct(A)}}}function Nc(i){let e,t,n,s="图层控制",r,o,a,c,l,u="切面",f,d,g,v,_,m,p,x,b,A,C,T="体积估算",w,L,F,y,U="选择地层",Y,Q,k,X,W,J,ee,se,ue,ce=nt(i[17].lithologies||[]),le=[];for(let I=0;I<ce.length;I+=1)le[I]=Uc(Dc(i,ce,I));let he=i[19].enabled&&Fc(i),z=nt(i[17].lithologies||[]),K=[];for(let I=0;I<z.length;I+=1)K[I]=Oc(Lc(i,z,I));let re=i[13]&&kc(i),D=i[12].length>0&&Bc(i);return{c(){e=M("hr"),t=H(),n=M("h4"),n.textContent=s,r=H();for(let I=0;I<le.length;I+=1)le[I].c();o=H(),a=M("hr"),c=H(),l=M("h4"),l.textContent=u,f=H(),d=M("div"),g=M("label"),v=M("input"),m=pe(`
                启用切面`),p=H(),he&&he.c(),x=H(),b=M("hr"),A=H(),C=M("h4"),C.textContent=T,w=H(),L=M("div"),F=M("select"),y=M("option"),y.textContent=U;for(let I=0;I<K.length;I+=1)K[I].c();Y=H(),Q=M("button"),k=pe("计算体积"),W=H(),re&&re.c(),J=H(),D&&D.c(),ee=It(),this.h()},l(I){e=E(I,"HR",{style:!0}),t=V(I),n=E(I,"H4",{style:!0,"data-svelte-h":!0}),Pe(n)!=="svelte-10xewq4"&&(n.textContent=s),r=V(I);for(let Se=0;Se<le.length;Se+=1)le[Se].l(I);o=V(I),a=E(I,"HR",{style:!0}),c=V(I),l=E(I,"H4",{style:!0,"data-svelte-h":!0}),Pe(l)!=="svelte-vflg5w"&&(l.textContent=u),f=V(I),d=E(I,"DIV",{class:!0});var Ee=O(d);g=E(Ee,"LABEL",{class:!0});var Me=O(g);v=E(Me,"INPUT",{type:!0}),m=de(Me,`
                启用切面`),Me.forEach(S),Ee.forEach(S),p=V(I),he&&he.l(I),x=V(I),b=E(I,"HR",{style:!0}),A=V(I),C=E(I,"H4",{style:!0,"data-svelte-h":!0}),Pe(C)!=="svelte-5dpzi"&&(C.textContent=T),w=V(I),L=E(I,"DIV",{class:!0});var Re=O(L);F=E(Re,"SELECT",{});var j=O(F);y=E(j,"OPTION",{"data-svelte-h":!0}),Pe(y)!=="svelte-e12hhe"&&(y.textContent=U);for(let Se=0;Se<K.length;Se+=1)K[Se].l(j);j.forEach(S),Re.forEach(S),Y=V(I),Q=E(I,"BUTTON",{class:!0,style:!0});var Ae=O(Q);k=de(Ae,"计算体积"),Ae.forEach(S),W=V(I),re&&re.l(I),J=V(I),D&&D.l(I),ee=It(),this.h()},h(){fe(e,"border-color","var(--border)"),fe(e,"margin","12px 0"),fe(n,"font-size","13px"),fe(n,"margin-bottom","8px"),fe(a,"border-color","var(--border)"),fe(a,"margin","12px 0"),fe(l,"font-size","13px"),fe(l,"margin-bottom","8px"),R(v,"type","checkbox"),v.checked=_=i[19].enabled,R(g,"class","checkbox-label"),R(d,"class","form-group"),fe(b,"border-color","var(--border)"),fe(b,"margin","12px 0"),fe(C,"font-size","13px"),fe(C,"margin-bottom","8px"),y.__value="",Ke(y,y.__value),i[11]===void 0&&fn(()=>i[43].call(F)),R(L,"class","form-group"),R(Q,"class","btn-primary btn-sm"),Q.disabled=X=!i[11],fe(Q,"width","100%")},m(I,Ee){ve(I,e,Ee),ve(I,t,Ee),ve(I,n,Ee),ve(I,r,Ee);for(let Me=0;Me<le.length;Me+=1)le[Me]&&le[Me].m(I,Ee);ve(I,o,Ee),ve(I,a,Ee),ve(I,c,Ee),ve(I,l,Ee),ve(I,f,Ee),ve(I,d,Ee),h(d,g),h(g,v),h(g,m),ve(I,p,Ee),he&&he.m(I,Ee),ve(I,x,Ee),ve(I,b,Ee),ve(I,A,Ee),ve(I,C,Ee),ve(I,w,Ee),ve(I,L,Ee),h(L,F),h(F,y);for(let Me=0;Me<K.length;Me+=1)K[Me]&&K[Me].m(F,null);Tt(F,i[11],!0),ve(I,Y,Ee),ve(I,Q,Ee),h(Q,k),ve(I,W,Ee),re&&re.m(I,Ee),ve(I,J,Ee),D&&D.m(I,Ee),ve(I,ee,Ee),se||(ue=[ze(v,"change",i[41]),ze(F,"change",i[43]),ze(Q,"click",i[23])],se=!0)},p(I,Ee){if(Ee[0]&491520){ce=nt(I[17].lithologies||[]);let Me;for(Me=0;Me<ce.length;Me+=1){const Re=Dc(I,ce,Me);le[Me]?le[Me].p(Re,Ee):(le[Me]=Uc(Re),le[Me].c(),le[Me].m(o.parentNode,o))}for(;Me<le.length;Me+=1)le[Me].d(1);le.length=ce.length}if(Ee[0]&524288&&_!==(_=I[19].enabled)&&(v.checked=_),I[19].enabled?he?he.p(I,Ee):(he=Fc(I),he.c(),he.m(x.parentNode,x)):he&&(he.d(1),he=null),Ee[0]&131072){z=nt(I[17].lithologies||[]);let Me;for(Me=0;Me<z.length;Me+=1){const Re=Lc(I,z,Me);K[Me]?K[Me].p(Re,Ee):(K[Me]=Oc(Re),K[Me].c(),K[Me].m(F,null))}for(;Me<K.length;Me+=1)K[Me].d(1);K.length=z.length}Ee[0]&133120&&Tt(F,I[11]),Ee[0]&133120&&X!==(X=!I[11])&&(Q.disabled=X),I[13]?re?re.p(I,Ee):(re=kc(I),re.c(),re.m(J.parentNode,J)):re&&(re.d(1),re=null),I[12].length>0?D?D.p(I,Ee):(D=Bc(I),D.c(),D.m(ee.parentNode,ee)):D&&(D.d(1),D=null)},d(I){I&&(S(e),S(t),S(n),S(r),S(o),S(a),S(c),S(l),S(f),S(d),S(p),S(x),S(b),S(A),S(C),S(w),S(L),S(Y),S(Q),S(W),S(J),S(ee)),Et(le,I),he&&he.d(I),Et(K,I),re&&re.d(I),D&&D.d(I),se=!1,Ct(ue)}}}function Uc(i){let e,t,n,s,r,o,a,c=i[55]+"",l,u,f,d,g="透明度",v,_,m,p,x;function b(){return i[38](i[55])}function A(...T){return i[39](i[55],...T)}function C(...T){return i[40](i[55],...T)}return{c(){e=M("div"),t=M("label"),n=M("input"),r=H(),o=M("span"),a=H(),l=pe(c),u=H(),f=M("div"),d=M("span"),d.textContent=g,v=H(),_=M("input"),this.h()},l(T){e=E(T,"DIV",{class:!0});var w=O(e);t=E(w,"LABEL",{class:!0});var L=O(t);n=E(L,"INPUT",{type:!0}),r=V(L),o=E(L,"SPAN",{class:!0,style:!0}),O(o).forEach(S),a=V(L),l=de(L,c),L.forEach(S),u=V(w),f=E(w,"DIV",{class:!0});var F=O(f);d=E(F,"SPAN",{style:!0,"data-svelte-h":!0}),Pe(d)!=="svelte-11ptxvf"&&(d.textContent=g),v=V(F),_=E(F,"INPUT",{type:!0,min:!0,max:!0,class:!0}),F.forEach(S),w.forEach(S),this.h()},h(){var T,w;R(n,"type","checkbox"),n.checked=s=i[16][i[55]]!==!1,R(o,"class","color-swatch"),fe(o,"background",((w=(T=i[18])==null?void 0:T.find(A))==null?void 0:w.color)||"#888"),R(t,"class","checkbox-label"),fe(d,"font-size","10px"),fe(d,"color","var(--text-muted)"),R(_,"type","range"),_.value=m=i[15][i[55]]??70,R(_,"min","0"),R(_,"max","100"),R(_,"class","svelte-z3j894"),R(f,"class","opacity-control svelte-z3j894"),R(e,"class","layer-control svelte-z3j894")},m(T,w){ve(T,e,w),h(e,t),h(t,n),h(t,r),h(t,o),h(t,a),h(t,l),h(e,u),h(e,f),h(f,d),h(f,v),h(f,_),p||(x=[ze(n,"change",b),ze(_,"input",C)],p=!0)},p(T,w){var L,F;i=T,w[0]&196608&&s!==(s=i[16][i[55]]!==!1)&&(n.checked=s),w[0]&393216&&fe(o,"background",((F=(L=i[18])==null?void 0:L.find(A))==null?void 0:F.color)||"#888"),w[0]&131072&&c!==(c=i[55]+"")&&Ve(l,c),w[0]&163840&&m!==(m=i[15][i[55]]??70)&&(_.value=m)},d(T){T&&S(e),p=!1,Ct(x)}}}function Fc(i){let e,t,n="切面位置",s,r,o,a,c;return{c(){e=M("div"),t=M("label"),t.textContent=n,s=H(),r=M("input"),this.h()},l(l){e=E(l,"DIV",{class:!0});var u=O(e);t=E(u,"LABEL",{"data-svelte-h":!0}),Pe(t)!=="svelte-1ya7iue"&&(t.textContent=n),s=V(u),r=E(u,"INPUT",{type:!0,min:!0,max:!0}),u.forEach(S),this.h()},h(){R(r,"type","range"),r.value=o=i[19].position[0],R(r,"min","-100"),R(r,"max","100"),R(e,"class","form-group")},m(l,u){ve(l,e,u),h(e,t),h(e,s),h(e,r),a||(c=ze(r,"input",i[42]),a=!0)},p(l,u){u[0]&524288&&o!==(o=l[19].position[0])&&(r.value=o)},d(l){l&&S(e),a=!1,c()}}}function Oc(i){let e,t=i[52]+"",n,s;return{c(){e=M("option"),n=pe(t),this.h()},l(r){e=E(r,"OPTION",{});var o=O(e);n=de(o,t),o.forEach(S),this.h()},h(){e.__value=s=i[52],Ke(e,e.__value)},m(r,o){ve(r,e,o),h(e,n)},p(r,o){o[0]&131072&&t!==(t=r[52]+"")&&Ve(n,t),o[0]&131072&&s!==(s=r[52])&&(e.__value=s,Ke(e,e.__value))},d(r){r&&S(e)}}}function kc(i){let e,t,n=i[13].lithology_name+"",s,r,o,a=i[13].volume.toFixed(1)+"",c,l;return{c(){e=M("div"),t=M("p"),s=pe(n),r=H(),o=M("p"),c=pe(a),l=pe(" m³"),this.h()},l(u){e=E(u,"DIV",{class:!0});var f=O(e);t=E(f,"P",{});var d=O(t);s=de(d,n),d.forEach(S),r=V(f),o=E(f,"P",{class:!0});var g=O(o);c=de(g,a),l=de(g," m³"),g.forEach(S),f.forEach(S),this.h()},h(){R(o,"class","volume-value svelte-z3j894"),R(e,"class","volume-result svelte-z3j894")},m(u,f){ve(u,e,f),h(e,t),h(t,s),h(e,r),h(e,o),h(o,c),h(o,l)},p(u,f){f[0]&8192&&n!==(n=u[13].lithology_name+"")&&Ve(s,n),f[0]&8192&&a!==(a=u[13].volume.toFixed(1)+"")&&Ve(c,a)},d(u){u&&S(e)}}}function Bc(i){let e,t,n,s="历史建模",r,o,a=nt(i[12].slice(0,5)),c=[];for(let l=0;l<a.length;l+=1)c[l]=zc(Pc(i,a,l));return{c(){e=M("hr"),t=H(),n=M("h4"),n.textContent=s,r=H();for(let l=0;l<c.length;l+=1)c[l].c();o=It(),this.h()},l(l){e=E(l,"HR",{style:!0}),t=V(l),n=E(l,"H4",{style:!0,"data-svelte-h":!0}),Pe(n)!=="svelte-1xvbgi4"&&(n.textContent=s),r=V(l);for(let u=0;u<c.length;u+=1)c[u].l(l);o=It(),this.h()},h(){fe(e,"border-color","var(--border)"),fe(e,"margin","12px 0"),fe(n,"font-size","13px"),fe(n,"margin-bottom","8px")},m(l,u){ve(l,e,u),ve(l,t,u),ve(l,n,u),ve(l,r,u);for(let f=0;f<c.length;f+=1)c[f]&&c[f].m(l,u);ve(l,o,u)},p(l,u){if(u[0]&4198400){a=nt(l[12].slice(0,5));let f;for(f=0;f<a.length;f+=1){const d=Pc(l,a,f);c[f]?c[f].p(d,u):(c[f]=zc(d),c[f].c(),c[f].m(o.parentNode,o))}for(;f<c.length;f+=1)c[f].d(1);c.length=a.length}},d(l){l&&(S(e),S(t),S(n),S(r),S(o)),Et(c,l)}}}function zc(i){let e,t,n=i[49].status+"",s,r,o,a,c=i[49].variogram_model+"",l,u,f=i[49].grid_nx+"",d,g,v=i[49].grid_ny+"",_,m,p=i[49].grid_nz+"",x,b,A,C;function T(){return i[44](i[49])}return{c(){e=M("div"),t=M("span"),s=pe(n),o=H(),a=M("span"),l=pe(c),u=H(),d=pe(f),g=pe("x"),_=pe(v),m=pe("x"),x=pe(p),b=H(),this.h()},l(w){e=E(w,"DIV",{class:!0});var L=O(e);t=E(L,"SPAN",{class:!0});var F=O(t);s=de(F,n),F.forEach(S),o=V(L),a=E(L,"SPAN",{style:!0});var y=O(a);l=de(y,c),u=V(y),d=de(y,f),g=de(y,"x"),_=de(y,v),m=de(y,"x"),x=de(y,p),y.forEach(S),b=V(L),L.forEach(S),this.h()},h(){R(t,"class",r="badge badge-"+(i[49].status==="completed"?"success":i[49].status==="failed"?"danger":"warning")),fe(a,"font-size","11px"),R(e,"class","run-item svelte-z3j894")},m(w,L){ve(w,e,L),h(e,t),h(t,s),h(e,o),h(e,a),h(a,l),h(a,u),h(a,d),h(a,g),h(a,_),h(a,m),h(a,x),h(e,b),A||(C=ze(e,"click",T),A=!0)},p(w,L){i=w,L[0]&4096&&n!==(n=i[49].status+"")&&Ve(s,n),L[0]&4096&&r!==(r="badge badge-"+(i[49].status==="completed"?"success":i[49].status==="failed"?"danger":"warning"))&&R(t,"class",r),L[0]&4096&&c!==(c=i[49].variogram_model+"")&&Ve(l,c),L[0]&4096&&f!==(f=i[49].grid_nx+"")&&Ve(d,f),L[0]&4096&&v!==(v=i[49].grid_ny+"")&&Ve(_,v),L[0]&4096&&p!==(p=i[49].grid_nz+"")&&Ve(x,p)},d(w){w&&S(e),A=!1,C()}}}function $v(i){let e,t,n="三维建模",s,r,o="刷新",a,c,l,u,f;function d(m,p){return m[14].status==="running"?Qv:Jv}let g=d(i),v=g(i),_=i[17]&&Nc(i);return{c(){e=M("div"),t=M("h3"),t.textContent=n,s=H(),r=M("button"),r.textContent=o,a=H(),c=M("div"),v.c(),l=H(),_&&_.c(),this.h()},l(m){e=E(m,"DIV",{class:!0});var p=O(e);t=E(p,"H3",{"data-svelte-h":!0}),Pe(t)!=="svelte-1tzs814"&&(t.textContent=n),s=V(p),r=E(p,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(r)!=="svelte-z4d5z9"&&(r.textContent=o),p.forEach(S),a=V(m),c=E(m,"DIV",{class:!0});var x=O(c);v.l(x),l=V(x),_&&_.l(x),x.forEach(S),this.h()},h(){R(r,"class","btn-secondary btn-sm"),R(e,"class","panel-header"),R(c,"class","panel-body scrollable")},m(m,p){ve(m,e,p),h(e,t),h(e,s),h(e,r),ve(m,a,p),ve(m,c,p),v.m(c,null),h(c,l),_&&_.m(c,null),u||(f=ze(r,"click",i[24]),u=!0)},p(m,p){g===(g=d(m))&&v?v.p(m,p):(v.d(1),v=g(m),v&&(v.c(),v.m(c,l))),m[17]?_?_.p(m,p):(_=Nc(m),_.c(),_.m(c,null)):_&&(_.d(1),_=null)},i:yt,o:yt,d(m){m&&(S(e),S(a),S(c)),v.d(),_&&_.d(),u=!1,f()}}}function e0(i,e,t){let n,s,r,o,a,c,l,u,f,d,g;Je(i,Gn,oe=>t(25,n=oe)),Je(i,Bn,oe=>t(45,s=oe)),Je(i,Ps,oe=>t(12,r=oe)),Je(i,Zo,oe=>t(13,o=oe)),Je(i,$i,oe=>t(14,a=oe)),Je(i,ts,oe=>t(15,c=oe)),Je(i,es,oe=>t(16,l=oe)),Je(i,Ls,oe=>t(17,u=oe)),Je(i,ta,oe=>t(26,f=oe)),Je(i,ti,oe=>t(18,d=oe)),Je(i,ns,oe=>t(19,g=oe));let v="spherical",_="",m="",p="",x=0,b=1,A=50,C=50,T=25,w=!0,L="",F=null;async function y(){if(!n||n.length<3)return;const oe=n.map(ge=>[ge.longitude,ge.latitude]),ie=n.map(ge=>ge.elevation);try{const ge=await ht.post("/projects/modeling/variogram-preview",{model_type:v,range_param:w?null:_?parseFloat(_):null,sill_param:w?null:m?parseFloat(m):null,nugget_param:w?null:p?parseFloat(p):null,coords:oe,values:ie});st(ta,f=ge,f)}catch(ge){console.warn("变异函数预览失败:",ge)}}function U(){if(!F||!f)return;const oe=F,ie=oe.getContext("2d"),ge=oe.width,B=oe.height;ie.clearRect(0,0,ge,B),ie.fillStyle="#1a1d23",ie.fillRect(0,0,ge,B);const P={top:20,right:16,bottom:36,left:50},xe=ge-P.left-P.right,te=B-P.top-P.bottom,N=f,Z=N.experimental_lags||[],me=N.experimental_gamma||[],_e=N.model_h||[],$=N.model_gamma||[];if(Z.length===0&&_e.length===0)return;const ae=[...Z,..._e],be=[...me,...$],ye=Math.max(...ae,1),Te=Math.max(...be,1),Ce=Le=>P.left+Le/ye*xe,Ye=Le=>P.top+te-Le/Te*te;ie.strokeStyle="#3a3f4b",ie.lineWidth=.5;for(let Le=0;Le<=5;Le++){const Be=Te/5*Le,q=Ye(Be);ie.beginPath(),ie.moveTo(P.left,q),ie.lineTo(ge-P.right,q),ie.stroke(),ie.fillStyle="#6b7280",ie.font="10px sans-serif",ie.textAlign="right",ie.textBaseline="middle",ie.fillText(Be.toFixed(1),P.left-6,q)}for(let Le=0;Le<=5;Le++){const Be=ye/5*Le,q=Ce(Be);ie.beginPath(),ie.moveTo(q,P.top),ie.lineTo(q,B-P.bottom),ie.stroke(),ie.fillStyle="#6b7280",ie.font="10px sans-serif",ie.textAlign="center",ie.textBaseline="top",ie.fillText(Be.toFixed(1),q,B-P.bottom+4)}ie.strokeStyle="#4f8ff7",ie.lineWidth=2,ie.beginPath();for(let Le=0;Le<_e.length;Le++){const Be=Ce(_e[Le]),q=Ye($[Le]);Le===0?ie.moveTo(Be,q):ie.lineTo(Be,q)}ie.stroke(),ie.fillStyle="#fbbf24",Z.forEach((Le,Be)=>{const q=Ce(Le),ke=Ye(me[Be]);ie.beginPath(),ie.arc(q,ke,4,0,Math.PI*2),ie.fill()}),ie.strokeStyle="#9aa0ac",ie.lineWidth=1,ie.strokeRect(P.left,P.top,xe,te),ie.fillStyle="#9aa0ac",ie.font="11px sans-serif",ie.textAlign="center",ie.textBaseline="top",ie.fillText("滞后距离",ge/2,B-14),ie.save(),ie.translate(12,B/2),ie.rotate(-Math.PI/2),ie.textAlign="center",ie.textBaseline="middle",ie.fillText("半变异函数值",0,0),ie.restore();const Oe=P.top+4;ie.fillStyle="#4f8ff7",ie.fillRect(ge-P.right-100,Oe,14,3),ie.fillStyle="#9aa0ac",ie.font="10px sans-serif",ie.textAlign="left",ie.textBaseline="middle",ie.fillText("理论曲线",ge-P.right-82,Oe+2),ie.fillStyle="#fbbf24",ie.beginPath(),ie.arc(ge-P.right-93,Oe+16,4,0,Math.PI*2),ie.fill(),ie.fillStyle="#9aa0ac",ie.fillText("实验值",ge-P.right-82,Oe+16),N.range&&N.sill&&N.nugget&&(ie.fillStyle="#9aa0ac",ie.font="10px sans-serif",ie.textAlign="left",ie.textBaseline="top",ie.fillText(`变程=${N.range.toFixed(2)} 基台=${N.sill.toFixed(2)} 块金=${N.nugget.toFixed(2)}`,P.left+4,P.top+4))}async function Y(){if(!s){$e("请先选择项目","warning");return}try{const oe={variogram_model:v,range_param:w?null:_?parseFloat(_):null,sill_param:w?null:m?parseFloat(m):null,nugget_param:w?null:p?parseFloat(p):null,aniso_angle:x,aniso_ratio:b,grid_nx:A,grid_ny:C,grid_nz:T},ie=await ht.post(`/projects/${s.id}/modeling/run`,oe);st($i,a={status:"running",progress:0,runId:ie.id},a),$e("建模任务已启动","info"),Q(ie.id)}catch(oe){$e(`启动建模失败: ${oe.message}`,"error")}}function Q(oe){const ie=location.protocol==="https:"?"wss:":"ws:",ge=new WebSocket(`${ie}//${location.host}/api/ws/${s.id}?run_id=${oe}`);ge.onmessage=B=>{const P=JSON.parse(B.data);st($i,a={status:P.status,progress:P.progress,runId:P.run_id},a),P.status==="completed"?($e("三维建模完成!","success"),X(oe)):P.status==="failed"&&$e("三维建模失败","error")},ge.onerror=()=>{k(oe)},ge.onclose=()=>{a.status==="running"&&k(oe)}}async function k(oe){const ie=async()=>{if(a.status==="running")try{const ge=await ht.get(`/projects/modeling/runs/${oe}`);st($i,a={status:ge.status,progress:ge.progress,runId:ge.id},a),ge.status==="completed"?($e("三维建模完成!","success"),await X(oe)):ge.status==="failed"?$e("三维建模失败","error"):setTimeout(ie,2e3)}catch{setTimeout(ie,3e3)}};setTimeout(ie,1e3)}async function X(oe){var ie;try{const ge=await ht.get(`/projects/modeling/runs/${oe}/result`);st(Ls,u=ge,u),(ie=ge.lithologies)==null||ie.forEach(B=>{l[B]===void 0&&st(es,l[B]=!0,l),c[B]===void 0&&st(ts,c[B]=.7,c)}),st($i,a={status:"completed",progress:100,runId:oe},a)}catch(ge){$e(`加载模型结果失败: ${ge.message}`,"error")}}async function W(){if(!(!a.runId||!L))try{const oe=await ht.post(`/projects/modeling/runs/${a.runId}/volume?lithology_name=${encodeURIComponent(L)}`);st(Zo,o=oe,o),$e(`${oe.lithology_name} 体积: ${oe.volume.toFixed(1)} m³`,"success")}catch(oe){$e(`体积计算失败: ${oe.message}`,"error")}}async function J(){s&&st(Ps,r=await ht.get(`/projects/${s.id}/modeling/runs`),r)}function ee(){v=hn(this),t(0,v)}function se(){w=this.checked,t(4,w)}function ue(){_=lt(this.value),t(1,_)}function ce(){m=lt(this.value),t(2,m)}function le(){p=lt(this.value),t(3,p)}function he(oe){ni[oe?"unshift":"push"](()=>{F=oe,t(5,F)})}function z(){x=lt(this.value),t(6,x)}function K(){b=lt(this.value),t(7,b)}function re(){A=lt(this.value),t(8,A)}function D(){C=lt(this.value),t(9,C)}function I(){T=lt(this.value),t(10,T)}const Ee=oe=>{st(es,l[oe]=l[oe]===!1,l),es.set(l)},Me=(oe,ie)=>ie.name===oe,Re=(oe,ie)=>{st(ts,c[oe]=ie.target.value/100,c),ts.set(c)},j=()=>st(ns,g.enabled=!g.enabled,g),Ae=oe=>{st(ns,g.position=[parseFloat(oe.target.value),0,0],g),ns.set(g)};function Se(){L=hn(this),t(11,L)}const Ne=oe=>oe.status==="completed"&&X(oe.id);return i.$$.update=()=>{i.$$.dirty[0]&67108896&&f&&F&&U(),i.$$.dirty[0]&33554463&&(v||_||m||p||w)&&(n==null?void 0:n.length)>=3&&y()},[v,_,m,p,w,F,x,b,A,C,T,L,r,o,a,c,l,u,d,g,y,Y,X,W,J,n,f,ee,se,ue,ce,le,he,z,K,re,D,I,Ee,Me,Re,j,Ae,Se,Ne]}class t0 extends pn{constructor(e){super(),mn(this,e,e0,$v,dn,{},null,[-1,-1])}}function Vc(i){var ke,je,He;let e,t,n,s,r=i[11][i[4]]+"",o,a,c,l,u,f="最小值",d,g,v=((ke=i[10].value_min)==null?void 0:ke.toFixed(2))+"",_,m,p,x,b="最大值",A,C,T=((je=i[10].value_max)==null?void 0:je.toFixed(2))+"",w,L,F,y,U="均值",Y,Q,k=((He=i[10].value_mean)==null?void 0:He.toFixed(2))+"",X,W,J,ee="渲染设置",se,ue,ce,le="渲染模式",he,z,K,re="彩色体素",D,I="等值面",Ee,Me,Re,j,Ae="颜色映射范围",Se,Ne,oe,ie,ge,B,P,xe,te,N,Z,me=i[1].toFixed(1)+"",_e,$,ae,be=((i[1]+i[2])/2).toFixed(1)+"",ye,Te,Ce,Ye=i[2].toFixed(1)+"",Oe,Le,Be,q=i[3]==="isosurface"&&Hc(i);return{c(){e=M("hr"),t=H(),n=M("h4"),s=pe("属性: "),o=pe(r),a=H(),c=M("div"),l=M("div"),u=M("span"),u.textContent=f,d=H(),g=M("span"),_=pe(v),m=H(),p=M("div"),x=M("span"),x.textContent=b,A=H(),C=M("span"),w=pe(T),L=H(),F=M("div"),y=M("span"),y.textContent=U,Y=H(),Q=M("span"),X=pe(k),W=H(),J=M("h4"),J.textContent=ee,se=H(),ue=M("div"),ce=M("label"),ce.textContent=le,he=H(),z=M("select"),K=M("option"),K.textContent=re,D=M("option"),D.textContent=I,Ee=H(),q&&q.c(),Me=H(),Re=M("div"),j=M("label"),j.textContent=Ae,Se=H(),Ne=M("div"),oe=M("input"),ie=H(),ge=M("input"),B=H(),P=M("div"),xe=M("div"),te=H(),N=M("div"),Z=M("span"),_e=pe(me),$=H(),ae=M("span"),ye=pe(be),Te=H(),Ce=M("span"),Oe=pe(Ye),this.h()},l(G){e=E(G,"HR",{style:!0}),t=V(G),n=E(G,"H4",{style:!0});var De=O(n);s=de(De,"属性: "),o=de(De,r),De.forEach(S),a=V(G),c=E(G,"DIV",{class:!0});var we=O(c);l=E(we,"DIV",{class:!0});var Fe=O(l);u=E(Fe,"SPAN",{class:!0,"data-svelte-h":!0}),Pe(u)!=="svelte-9zqffl"&&(u.textContent=f),d=V(Fe),g=E(Fe,"SPAN",{class:!0});var Ge=O(g);_=de(Ge,v),Ge.forEach(S),Fe.forEach(S),m=V(we),p=E(we,"DIV",{class:!0});var Ze=O(p);x=E(Ze,"SPAN",{class:!0,"data-svelte-h":!0}),Pe(x)!=="svelte-pto1ax"&&(x.textContent=b),A=V(Ze),C=E(Ze,"SPAN",{class:!0});var Qe=O(C);w=de(Qe,T),Qe.forEach(S),Ze.forEach(S),L=V(we),F=E(we,"DIV",{class:!0});var et=O(F);y=E(et,"SPAN",{class:!0,"data-svelte-h":!0}),Pe(y)!=="svelte-os332j"&&(y.textContent=U),Y=V(et),Q=E(et,"SPAN",{class:!0});var ct=O(Q);X=de(ct,k),ct.forEach(S),et.forEach(S),we.forEach(S),W=V(G),J=E(G,"H4",{style:!0,"data-svelte-h":!0}),Pe(J)!=="svelte-1ld9l9j"&&(J.textContent=ee),se=V(G),ue=E(G,"DIV",{class:!0});var tt=O(ue);ce=E(tt,"LABEL",{"data-svelte-h":!0}),Pe(ce)!=="svelte-cq5b4l"&&(ce.textContent=le),he=V(tt),z=E(tt,"SELECT",{});var ot=O(z);K=E(ot,"OPTION",{"data-svelte-h":!0}),Pe(K)!=="svelte-127lpa0"&&(K.textContent=re),D=E(ot,"OPTION",{"data-svelte-h":!0}),Pe(D)!=="svelte-q3a2m9"&&(D.textContent=I),ot.forEach(S),tt.forEach(S),Ee=V(G),q&&q.l(G),Me=V(G),Re=E(G,"DIV",{class:!0});var ft=O(Re);j=E(ft,"LABEL",{"data-svelte-h":!0}),Pe(j)!=="svelte-1lqds2v"&&(j.textContent=Ae),Se=V(ft),Ne=E(ft,"DIV",{class:!0});var Gt=O(Ne);oe=E(Gt,"INPUT",{type:!0,step:!0}),ie=V(Gt),ge=E(Gt,"INPUT",{type:!0,step:!0}),Gt.forEach(S),ft.forEach(S),B=V(G),P=E(G,"DIV",{class:!0});var Jt=O(P);xe=E(Jt,"DIV",{class:!0,style:!0}),O(xe).forEach(S),te=V(Jt),N=E(Jt,"DIV",{class:!0});var wt=O(N);Z=E(wt,"SPAN",{});var At=O(Z);_e=de(At,me),At.forEach(S),$=V(wt),ae=E(wt,"SPAN",{});var Lt=O(ae);ye=de(Lt,be),Lt.forEach(S),Te=V(wt),Ce=E(wt,"SPAN",{});var Ut=O(Ce);Oe=de(Ut,Ye),Ut.forEach(S),wt.forEach(S),Jt.forEach(S),this.h()},h(){fe(e,"border-color","var(--border)"),fe(e,"margin","12px 0"),fe(n,"font-size","13px"),fe(n,"margin-bottom","8px"),R(u,"class","stat-label svelte-8lfmmm"),R(g,"class","stat-value svelte-8lfmmm"),R(l,"class","stat-item svelte-8lfmmm"),R(x,"class","stat-label svelte-8lfmmm"),R(C,"class","stat-value svelte-8lfmmm"),R(p,"class","stat-item svelte-8lfmmm"),R(y,"class","stat-label svelte-8lfmmm"),R(Q,"class","stat-value svelte-8lfmmm"),R(F,"class","stat-item svelte-8lfmmm"),R(c,"class","stats-grid svelte-8lfmmm"),fe(J,"font-size","13px"),fe(J,"margin","12px 0 8px"),K.__value="voxel",Ke(K,K.__value),D.__value="isosurface",Ke(D,D.__value),i[3]===void 0&&fn(()=>i[19].call(z)),R(ue,"class","form-group"),R(oe,"type","number"),R(oe,"step","0.1"),R(ge,"type","number"),R(ge,"step","0.1"),R(Ne,"class","form-row"),R(Re,"class","form-group"),R(xe,"class","legend-bar svelte-8lfmmm"),fe(xe,"background","linear-gradient(to right, #0000ff, #00ff00, #ffff00, #ff0000)"),R(N,"class","legend-labels svelte-8lfmmm"),R(P,"class","color-legend svelte-8lfmmm")},m(G,De){ve(G,e,De),ve(G,t,De),ve(G,n,De),h(n,s),h(n,o),ve(G,a,De),ve(G,c,De),h(c,l),h(l,u),h(l,d),h(l,g),h(g,_),h(c,m),h(c,p),h(p,x),h(p,A),h(p,C),h(C,w),h(c,L),h(c,F),h(F,y),h(F,Y),h(F,Q),h(Q,X),ve(G,W,De),ve(G,J,De),ve(G,se,De),ve(G,ue,De),h(ue,ce),h(ue,he),h(ue,z),h(z,K),h(z,D),Tt(z,i[3],!0),ve(G,Ee,De),q&&q.m(G,De),ve(G,Me,De),ve(G,Re,De),h(Re,j),h(Re,Se),h(Re,Ne),h(Ne,oe),Ke(oe,i[1]),h(Ne,ie),h(Ne,ge),Ke(ge,i[2]),ve(G,B,De),ve(G,P,De),h(P,xe),h(P,te),h(P,N),h(N,Z),h(Z,_e),h(N,$),h(N,ae),h(ae,ye),h(N,Te),h(N,Ce),h(Ce,Oe),Le||(Be=[ze(z,"change",i[19]),ze(oe,"input",i[21]),ze(ge,"input",i[22])],Le=!0)},p(G,De){var we,Fe,Ge;De&16&&r!==(r=G[11][G[4]]+"")&&Ve(o,r),De&1024&&v!==(v=((we=G[10].value_min)==null?void 0:we.toFixed(2))+"")&&Ve(_,v),De&1024&&T!==(T=((Fe=G[10].value_max)==null?void 0:Fe.toFixed(2))+"")&&Ve(w,T),De&1024&&k!==(k=((Ge=G[10].value_mean)==null?void 0:Ge.toFixed(2))+"")&&Ve(X,k),De&8&&Tt(z,G[3]),G[3]==="isosurface"?q?q.p(G,De):(q=Hc(G),q.c(),q.m(Me.parentNode,Me)):q&&(q.d(1),q=null),De&2&&lt(oe.value)!==G[1]&&Ke(oe,G[1]),De&4&&lt(ge.value)!==G[2]&&Ke(ge,G[2]),De&2&&me!==(me=G[1].toFixed(1)+"")&&Ve(_e,me),De&6&&be!==(be=((G[1]+G[2])/2).toFixed(1)+"")&&Ve(ye,be),De&4&&Ye!==(Ye=G[2].toFixed(1)+"")&&Ve(Oe,Ye)},d(G){G&&(S(e),S(t),S(n),S(a),S(c),S(W),S(J),S(se),S(ue),S(Ee),S(Me),S(Re),S(B),S(P)),q&&q.d(G),Le=!1,Ct(Be)}}}function Hc(i){let e,t,n="等值面阈值",s,r,o,a,c=i[0].toFixed(1)+"",l,u,f;return{c(){e=M("div"),t=M("label"),t.textContent=n,s=H(),r=M("input"),o=H(),a=M("span"),l=pe(c),this.h()},l(d){e=E(d,"DIV",{class:!0});var g=O(e);t=E(g,"LABEL",{"data-svelte-h":!0}),Pe(t)!=="svelte-hv2zuh"&&(t.textContent=n),s=V(g),r=E(g,"INPUT",{type:!0,min:!0,max:!0,step:!0}),o=V(g),a=E(g,"SPAN",{style:!0});var v=O(a);l=de(v,c),v.forEach(S),g.forEach(S),this.h()},h(){R(r,"type","range"),R(r,"min",i[1]),R(r,"max",i[2]),R(r,"step","0.1"),fe(a,"font-size","11px"),R(e,"class","form-group")},m(d,g){ve(d,e,g),h(e,t),h(e,s),h(e,r),Ke(r,i[0]),h(e,o),h(e,a),h(a,l),u||(f=[ze(r,"change",i[20]),ze(r,"input",i[20])],u=!0)},p(d,g){g&2&&R(r,"min",d[1]),g&4&&R(r,"max",d[2]),g&1&&Ke(r,d[0]),g&1&&c!==(c=d[0].toFixed(1)+"")&&Ve(l,c)},d(d){d&&S(e),u=!1,Ct(f)}}}function n0(i){let e,t="<h3>属性场建模</h3>",n,s,r,o,a="参数类型",c,l,u,f="标贯N值",d,g="含水量",v,_="压缩模量",m,p,x,b="变异函数模型",A,C,T,w="球状模型",L,F="指数模型",y,U="高斯模型",Y,Q,k,X,W="NX",J,ee,se,ue,ce,le="NY",he,z,K,re,D,I="NZ",Ee,Me,Re,j,Ae=i[9]?"插值计算中...":"开始插值",Se,Ne,oe,ie,ge=i[10]&&Vc(i);return{c(){e=M("div"),e.innerHTML=t,n=H(),s=M("div"),r=M("div"),o=M("label"),o.textContent=a,c=H(),l=M("select"),u=M("option"),u.textContent=f,d=M("option"),d.textContent=g,v=M("option"),v.textContent=_,m=H(),p=M("div"),x=M("label"),x.textContent=b,A=H(),C=M("select"),T=M("option"),T.textContent=w,L=M("option"),L.textContent=F,y=M("option"),y.textContent=U,Y=H(),Q=M("div"),k=M("div"),X=M("label"),X.textContent=W,J=H(),ee=M("input"),se=H(),ue=M("div"),ce=M("label"),ce.textContent=le,he=H(),z=M("input"),K=H(),re=M("div"),D=M("label"),D.textContent=I,Ee=H(),Me=M("input"),Re=H(),j=M("button"),Se=pe(Ae),Ne=H(),ge&&ge.c(),this.h()},l(B){e=E(B,"DIV",{class:!0,"data-svelte-h":!0}),Pe(e)!=="svelte-s1qbq0"&&(e.innerHTML=t),n=V(B),s=E(B,"DIV",{class:!0});var P=O(s);r=E(P,"DIV",{class:!0});var xe=O(r);o=E(xe,"LABEL",{"data-svelte-h":!0}),Pe(o)!=="svelte-vxe5jw"&&(o.textContent=a),c=V(xe),l=E(xe,"SELECT",{});var te=O(l);u=E(te,"OPTION",{"data-svelte-h":!0}),Pe(u)!=="svelte-1ekkfg"&&(u.textContent=f),d=E(te,"OPTION",{"data-svelte-h":!0}),Pe(d)!=="svelte-vhtqdz"&&(d.textContent=g),v=E(te,"OPTION",{"data-svelte-h":!0}),Pe(v)!=="svelte-1m1gv94"&&(v.textContent=_),te.forEach(S),xe.forEach(S),m=V(P),p=E(P,"DIV",{class:!0});var N=O(p);x=E(N,"LABEL",{"data-svelte-h":!0}),Pe(x)!=="svelte-1jgf9ft"&&(x.textContent=b),A=V(N),C=E(N,"SELECT",{});var Z=O(C);T=E(Z,"OPTION",{"data-svelte-h":!0}),Pe(T)!=="svelte-17ym7v6"&&(T.textContent=w),L=E(Z,"OPTION",{"data-svelte-h":!0}),Pe(L)!=="svelte-bzk8zo"&&(L.textContent=F),y=E(Z,"OPTION",{"data-svelte-h":!0}),Pe(y)!=="svelte-1iqrdsw"&&(y.textContent=U),Z.forEach(S),N.forEach(S),Y=V(P),Q=E(P,"DIV",{class:!0});var me=O(Q);k=E(me,"DIV",{class:!0});var _e=O(k);X=E(_e,"LABEL",{"data-svelte-h":!0}),Pe(X)!=="svelte-kuum7m"&&(X.textContent=W),J=V(_e),ee=E(_e,"INPUT",{type:!0,min:!0,max:!0}),_e.forEach(S),se=V(me),ue=E(me,"DIV",{class:!0});var $=O(ue);ce=E($,"LABEL",{"data-svelte-h":!0}),Pe(ce)!=="svelte-1kjsuy3"&&(ce.textContent=le),he=V($),z=E($,"INPUT",{type:!0,min:!0,max:!0}),$.forEach(S),K=V(me),re=E(me,"DIV",{class:!0});var ae=O(re);D=E(ae,"LABEL",{"data-svelte-h":!0}),Pe(D)!=="svelte-1vblzhc"&&(D.textContent=I),Ee=V(ae),Me=E(ae,"INPUT",{type:!0,min:!0,max:!0}),ae.forEach(S),me.forEach(S),Re=V(P),j=E(P,"BUTTON",{class:!0,style:!0});var be=O(j);Se=de(be,Ae),be.forEach(S),Ne=V(P),ge&&ge.l(P),P.forEach(S),this.h()},h(){R(e,"class","panel-header"),u.__value="spt_n",Ke(u,u.__value),d.__value="water_content",Ke(d,d.__value),v.__value="compression_modulus",Ke(v,v.__value),i[4]===void 0&&fn(()=>i[14].call(l)),R(r,"class","form-group"),T.__value="spherical",Ke(T,T.__value),L.__value="exponential",Ke(L,L.__value),y.__value="gaussian",Ke(y,y.__value),i[5]===void 0&&fn(()=>i[15].call(C)),R(p,"class","form-group"),R(ee,"type","number"),R(ee,"min","5"),R(ee,"max","100"),R(k,"class","form-group"),R(z,"type","number"),R(z,"min","5"),R(z,"max","100"),R(ue,"class","form-group"),R(Me,"type","number"),R(Me,"min","5"),R(Me,"max","50"),R(re,"class","form-group"),R(Q,"class","form-row"),R(j,"class","btn-primary"),j.disabled=i[9],fe(j,"width","100%"),R(s,"class","panel-body scrollable")},m(B,P){ve(B,e,P),ve(B,n,P),ve(B,s,P),h(s,r),h(r,o),h(r,c),h(r,l),h(l,u),h(l,d),h(l,v),Tt(l,i[4],!0),h(s,m),h(s,p),h(p,x),h(p,A),h(p,C),h(C,T),h(C,L),h(C,y),Tt(C,i[5],!0),h(s,Y),h(s,Q),h(Q,k),h(k,X),h(k,J),h(k,ee),Ke(ee,i[6]),h(Q,se),h(Q,ue),h(ue,ce),h(ue,he),h(ue,z),Ke(z,i[7]),h(Q,K),h(Q,re),h(re,D),h(re,Ee),h(re,Me),Ke(Me,i[8]),h(s,Re),h(s,j),h(j,Se),h(s,Ne),ge&&ge.m(s,null),oe||(ie=[ze(l,"change",i[14]),ze(C,"change",i[15]),ze(ee,"input",i[16]),ze(z,"input",i[17]),ze(Me,"input",i[18]),ze(j,"click",i[12])],oe=!0)},p(B,[P]){P&16&&Tt(l,B[4]),P&32&&Tt(C,B[5]),P&64&&lt(ee.value)!==B[6]&&Ke(ee,B[6]),P&128&&lt(z.value)!==B[7]&&Ke(z,B[7]),P&256&&lt(Me.value)!==B[8]&&Ke(Me,B[8]),P&512&&Ae!==(Ae=B[9]?"插值计算中...":"开始插值")&&Ve(Se,Ae),P&512&&(j.disabled=B[9]),B[10]?ge?ge.p(B,P):(ge=Vc(B),ge.c(),ge.m(s,null)):ge&&(ge.d(1),ge=null)},i:yt,o:yt,d(B){B&&(S(e),S(n),S(s)),ge&&ge.d(),oe=!1,Ct(ie)}}}function i0(i,e,t){let n,s,r;Je(i,mr,U=>t(10,n=U)),Je(i,Bn,U=>t(23,s=U)),Je(i,_r,U=>t(13,r=U));let o="spt_n",a="spherical",c=50,l=50,u=25,f=0,d=0,g=100,v="voxel",_=!1;const m={spt_n:"标贯N值",water_content:"含水量",compression_modulus:"压缩模量"};async function p(){if(!s){$e("请先选择项目","warning");return}t(9,_=!0);try{const U=await ht.post(`/projects/${s.id}/attributes/interpolate?attribute=${o}&grid_nx=${c}&grid_ny=${l}&grid_nz=${u}&variogram_model=${a}`);st(mr,n=U,n),U.value_min!==void 0&&(t(1,d=U.value_min),t(2,g=U.value_max),t(0,f=(U.value_min+U.value_max)/2)),$e(`属性场插值完成: ${m[o]}`,"success")}catch(U){$e(`插值失败: ${U.message}`,"error")}finally{t(9,_=!1)}}function x(){o=hn(this),t(4,o)}function b(){a=hn(this),t(5,a)}function A(){c=lt(this.value),t(6,c)}function C(){l=lt(this.value),t(7,l)}function T(){u=lt(this.value),t(8,u)}function w(){v=hn(this),t(3,v)}function L(){f=lt(this.value),t(0,f)}function F(){d=lt(this.value),t(1,d)}function y(){g=lt(this.value),t(2,g)}return i.$$.update=()=>{i.$$.dirty&8207&&st(_r,r={...r,mode:v,isosurfaceValue:f,colorMin:d,colorMax:g},r)},[f,d,g,v,o,a,c,l,u,_,n,m,p,r,x,b,A,C,T,w,L,F,y]}class s0 extends pn{constructor(e){super(),mn(this,e,i0,n0,dn,{})}}function Gc(i,e,t){const n=i.slice();return n[12]=e[t],n}function Wc(i,e,t){const n=i.slice();return n[15]=e[t],n}function Xc(i){let e,t=i[15].variogram_model+"",n,s,r=i[15].grid_nx+"",o,a,c=i[15].grid_ny+"",l,u,f=i[15].grid_nz+"",d,g,v=i[15].status+"",_,m,p;return{c(){e=M("option"),n=pe(t),s=H(),o=pe(r),a=pe("x"),l=pe(c),u=pe("x"),d=pe(f),g=pe(" ("),_=pe(v),m=pe(")"),this.h()},l(x){e=E(x,"OPTION",{});var b=O(e);n=de(b,t),s=V(b),o=de(b,r),a=de(b,"x"),l=de(b,c),u=de(b,"x"),d=de(b,f),g=de(b," ("),_=de(b,v),m=de(b,")"),b.forEach(S),this.h()},h(){e.__value=p=i[15].id,Ke(e,e.__value)},m(x,b){ve(x,e,b),h(e,n),h(e,s),h(e,o),h(e,a),h(e,l),h(e,u),h(e,d),h(e,g),h(e,_),h(e,m)},p(x,b){b&8&&t!==(t=x[15].variogram_model+"")&&Ve(n,t),b&8&&r!==(r=x[15].grid_nx+"")&&Ve(o,r),b&8&&c!==(c=x[15].grid_ny+"")&&Ve(l,c),b&8&&f!==(f=x[15].grid_nz+"")&&Ve(d,f),b&8&&v!==(v=x[15].status+"")&&Ve(_,v),b&8&&p!==(p=x[15].id)&&(e.__value=p,Ke(e,e.__value))},d(x){x&&S(e)}}}function qc(i){let e,t=i[12].name+"",n,s;return{c(){e=M("option"),n=pe(t),this.h()},l(r){e=E(r,"OPTION",{});var o=O(e);n=de(o,t),o.forEach(S),this.h()},h(){e.__value=s=i[12].id,Ke(e,e.__value)},m(r,o){ve(r,e,o),h(e,n)},p(r,o){o&16&&t!==(t=r[12].name+"")&&Ve(n,t),o&16&&s!==(s=r[12].id)&&(e.__value=s,Ke(e,e.__value))},d(r){r&&S(e)}}}function r0(i){let e,t="<h3>成果导出</h3>",n,s,r,o,a="三维模型",c,l,u,f="选择建模结果",d,g,v,_="选择建模结果",m,p,x,b,A,C,T,w="glTF格式可在Blender、ParaView等软件中打开",L,F,y,U,Y,Q="剖面图",k,X,W,J="选择剖面",ee,se,ue,ce="选择剖面",le,he,z,K,re,D,I,Ee,Me,Re,j,Ae,Se,Ne,oe="数据统计",ie,ge,B,P,xe,te,N="包含各层厚度统计、面积、体积等",Z,me,_e,$,ae,be="建模报告",ye,Te,Ce,Ye,Oe,Le,Be="包含半变异函数拟合结果、插值参数、剖面图缩略",q,ke,je=nt(i[3].filter(jc)),He=[];for(let we=0;we<je.length;we+=1)He[we]=Xc(Wc(i,je,we));let G=nt(i[4]),De=[];for(let we=0;we<G.length;we+=1)De[we]=qc(Gc(i,G,we));return{c(){e=M("div"),e.innerHTML=t,n=H(),s=M("div"),r=M("div"),o=M("h4"),o.textContent=a,c=H(),l=M("div"),u=M("label"),u.textContent=f,d=H(),g=M("select"),v=M("option"),v.textContent=_;for(let we=0;we<He.length;we+=1)He[we].c();m=H(),p=M("div"),x=M("button"),b=pe("导出 glTF 模型"),C=H(),T=M("p"),T.textContent=w,L=H(),F=M("hr"),y=H(),U=M("div"),Y=M("h4"),Y.textContent=Q,k=H(),X=M("div"),W=M("label"),W.textContent=J,ee=H(),se=M("select"),ue=M("option"),ue.textContent=ce;for(let we=0;we<De.length;we+=1)De[we].c();le=H(),he=M("div"),z=M("button"),K=pe("导出 PNG"),D=H(),I=M("button"),Ee=pe("导出 SVG"),Re=H(),j=M("hr"),Ae=H(),Se=M("div"),Ne=M("h4"),Ne.textContent=oe,ie=H(),ge=M("button"),B=pe("导出地层数据统计表 (Excel)"),xe=H(),te=M("p"),te.textContent=N,Z=H(),me=M("hr"),_e=H(),$=M("div"),ae=M("h4"),ae.textContent=be,ye=H(),Te=M("button"),Ce=pe("导出建模参数报告 (PDF)"),Oe=H(),Le=M("p"),Le.textContent=Be,this.h()},l(we){e=E(we,"DIV",{class:!0,"data-svelte-h":!0}),Pe(e)!=="svelte-16wx9di"&&(e.innerHTML=t),n=V(we),s=E(we,"DIV",{class:!0});var Fe=O(s);r=E(Fe,"DIV",{class:!0});var Ge=O(r);o=E(Ge,"H4",{style:!0,"data-svelte-h":!0}),Pe(o)!=="svelte-f1tw8s"&&(o.textContent=a),c=V(Ge),l=E(Ge,"DIV",{class:!0});var Ze=O(l);u=E(Ze,"LABEL",{"data-svelte-h":!0}),Pe(u)!=="svelte-rq7xu0"&&(u.textContent=f),d=V(Ze),g=E(Ze,"SELECT",{});var Qe=O(g);v=E(Qe,"OPTION",{"data-svelte-h":!0}),Pe(v)!=="svelte-ma6l8e"&&(v.textContent=_);for(let on=0;on<He.length;on+=1)He[on].l(Qe);Qe.forEach(S),Ze.forEach(S),m=V(Ge),p=E(Ge,"DIV",{class:!0});var et=O(p);x=E(et,"BUTTON",{class:!0});var ct=O(x);b=de(ct,"导出 glTF 模型"),ct.forEach(S),et.forEach(S),C=V(Ge),T=E(Ge,"P",{style:!0,"data-svelte-h":!0}),Pe(T)!=="svelte-elxrxh"&&(T.textContent=w),Ge.forEach(S),L=V(Fe),F=E(Fe,"HR",{style:!0}),y=V(Fe),U=E(Fe,"DIV",{class:!0});var tt=O(U);Y=E(tt,"H4",{style:!0,"data-svelte-h":!0}),Pe(Y)!=="svelte-l0uqjv"&&(Y.textContent=Q),k=V(tt),X=E(tt,"DIV",{class:!0});var ot=O(X);W=E(ot,"LABEL",{"data-svelte-h":!0}),Pe(W)!=="svelte-1uj1nrm"&&(W.textContent=J),ee=V(ot),se=E(ot,"SELECT",{});var ft=O(se);ue=E(ft,"OPTION",{"data-svelte-h":!0}),Pe(ue)!=="svelte-ij5m9g"&&(ue.textContent=ce);for(let on=0;on<De.length;on+=1)De[on].l(ft);ft.forEach(S),ot.forEach(S),le=V(tt),he=E(tt,"DIV",{class:!0});var Gt=O(he);z=E(Gt,"BUTTON",{class:!0});var Jt=O(z);K=de(Jt,"导出 PNG"),Jt.forEach(S),D=V(Gt),I=E(Gt,"BUTTON",{class:!0});var wt=O(I);Ee=de(wt,"导出 SVG"),wt.forEach(S),Gt.forEach(S),tt.forEach(S),Re=V(Fe),j=E(Fe,"HR",{style:!0}),Ae=V(Fe),Se=E(Fe,"DIV",{class:!0});var At=O(Se);Ne=E(At,"H4",{style:!0,"data-svelte-h":!0}),Pe(Ne)!=="svelte-nufmjz"&&(Ne.textContent=oe),ie=V(At),ge=E(At,"BUTTON",{class:!0,style:!0});var Lt=O(ge);B=de(Lt,"导出地层数据统计表 (Excel)"),Lt.forEach(S),xe=V(At),te=E(At,"P",{style:!0,"data-svelte-h":!0}),Pe(te)!=="svelte-soh8v8"&&(te.textContent=N),At.forEach(S),Z=V(Fe),me=E(Fe,"HR",{style:!0}),_e=V(Fe),$=E(Fe,"DIV",{class:!0});var Ut=O($);ae=E(Ut,"H4",{style:!0,"data-svelte-h":!0}),Pe(ae)!=="svelte-16vzmgj"&&(ae.textContent=be),ye=V(Ut),Te=E(Ut,"BUTTON",{class:!0,style:!0});var An=O(Te);Ce=de(An,"导出建模参数报告 (PDF)"),An.forEach(S),Oe=V(Ut),Le=E(Ut,"P",{style:!0,"data-svelte-h":!0}),Pe(Le)!=="svelte-1mnkg1"&&(Le.textContent=Be),Ut.forEach(S),Fe.forEach(S),this.h()},h(){R(e,"class","panel-header"),fe(o,"font-size","13px"),fe(o,"margin-bottom","8px"),v.__value="",Ke(v,v.__value),i[0]===void 0&&fn(()=>i[10].call(g)),R(l,"class","form-group"),R(x,"class","btn-primary svelte-xy1nc2"),x.disabled=A=!i[0],R(p,"class","export-buttons svelte-xy1nc2"),fe(T,"font-size","11px"),fe(T,"color","var(--text-muted)"),fe(T,"margin-top","4px"),R(r,"class","export-section svelte-xy1nc2"),fe(F,"border-color","var(--border)"),fe(F,"margin","16px 0"),fe(Y,"font-size","13px"),fe(Y,"margin-bottom","8px"),ue.__value="",Ke(ue,ue.__value),i[1]===void 0&&fn(()=>i[11].call(se)),R(X,"class","form-group"),R(z,"class","btn-secondary svelte-xy1nc2"),z.disabled=re=!i[1],R(I,"class","btn-secondary svelte-xy1nc2"),I.disabled=Me=!i[1],R(he,"class","export-buttons svelte-xy1nc2"),R(U,"class","export-section svelte-xy1nc2"),fe(j,"border-color","var(--border)"),fe(j,"margin","16px 0"),fe(Ne,"font-size","13px"),fe(Ne,"margin-bottom","8px"),R(ge,"class","btn-primary"),ge.disabled=P=!i[2],fe(ge,"width","100%"),fe(te,"font-size","11px"),fe(te,"color","var(--text-muted)"),fe(te,"margin-top","4px"),R(Se,"class","export-section svelte-xy1nc2"),fe(me,"border-color","var(--border)"),fe(me,"margin","16px 0"),fe(ae,"font-size","13px"),fe(ae,"margin-bottom","8px"),R(Te,"class","btn-primary"),Te.disabled=Ye=!i[0],fe(Te,"width","100%"),fe(Le,"font-size","11px"),fe(Le,"color","var(--text-muted)"),fe(Le,"margin-top","4px"),R($,"class","export-section svelte-xy1nc2"),R(s,"class","panel-body scrollable")},m(we,Fe){ve(we,e,Fe),ve(we,n,Fe),ve(we,s,Fe),h(s,r),h(r,o),h(r,c),h(r,l),h(l,u),h(l,d),h(l,g),h(g,v);for(let Ge=0;Ge<He.length;Ge+=1)He[Ge]&&He[Ge].m(g,null);Tt(g,i[0],!0),h(r,m),h(r,p),h(p,x),h(x,b),h(r,C),h(r,T),h(s,L),h(s,F),h(s,y),h(s,U),h(U,Y),h(U,k),h(U,X),h(X,W),h(X,ee),h(X,se),h(se,ue);for(let Ge=0;Ge<De.length;Ge+=1)De[Ge]&&De[Ge].m(se,null);Tt(se,i[1],!0),h(U,le),h(U,he),h(he,z),h(z,K),h(he,D),h(he,I),h(I,Ee),h(s,Re),h(s,j),h(s,Ae),h(s,Se),h(Se,Ne),h(Se,ie),h(Se,ge),h(ge,B),h(Se,xe),h(Se,te),h(s,Z),h(s,me),h(s,_e),h(s,$),h($,ae),h($,ye),h($,Te),h(Te,Ce),h($,Oe),h($,Le),q||(ke=[ze(g,"change",i[10]),ze(x,"click",i[5]),ze(se,"change",i[11]),ze(z,"click",i[6]),ze(I,"click",i[7]),ze(ge,"click",i[8]),ze(Te,"click",i[9])],q=!0)},p(we,[Fe]){if(Fe&8){je=nt(we[3].filter(jc));let Ge;for(Ge=0;Ge<je.length;Ge+=1){const Ze=Wc(we,je,Ge);He[Ge]?He[Ge].p(Ze,Fe):(He[Ge]=Xc(Ze),He[Ge].c(),He[Ge].m(g,null))}for(;Ge<He.length;Ge+=1)He[Ge].d(1);He.length=je.length}if(Fe&9&&Tt(g,we[0]),Fe&9&&A!==(A=!we[0])&&(x.disabled=A),Fe&16){G=nt(we[4]);let Ge;for(Ge=0;Ge<G.length;Ge+=1){const Ze=Gc(we,G,Ge);De[Ge]?De[Ge].p(Ze,Fe):(De[Ge]=qc(Ze),De[Ge].c(),De[Ge].m(se,null))}for(;Ge<De.length;Ge+=1)De[Ge].d(1);De.length=G.length}Fe&18&&Tt(se,we[1]),Fe&18&&re!==(re=!we[1])&&(z.disabled=re),Fe&18&&Me!==(Me=!we[1])&&(I.disabled=Me),Fe&4&&P!==(P=!we[2])&&(ge.disabled=P),Fe&9&&Ye!==(Ye=!we[0])&&(Te.disabled=Ye)},i:yt,o:yt,d(we){we&&(S(e),S(n),S(s)),Et(He,we),Et(De,we),q=!1,Ct(ke)}}}const jc=i=>i.status==="completed";function o0(i,e,t){let n,s,r;Je(i,Bn,_=>t(2,n=_)),Je(i,Ps,_=>t(3,s=_)),Je(i,Rs,_=>t(4,r=_));let o="",a="";async function c(){if(!o){$e("请选择建模结果","warning");return}try{const m=await(await ht.exportGltf(o)).blob(),p=URL.createObjectURL(m),x=document.createElement("a");x.href=p,x.download=`model_${o}.glb`,x.click(),URL.revokeObjectURL(p),$e("glTF模型已导出","success")}catch(_){$e(`导出glTF失败: ${_.message}`,"error")}}async function l(){if(!a){$e("请选择剖面","warning");return}try{const m=await(await ht.exportProfilePng(a)).blob(),p=URL.createObjectURL(m),x=document.createElement("a");x.href=p,x.download=`profile_${a}.png`,x.click(),URL.revokeObjectURL(p),$e("剖面PNG已导出","success")}catch(_){$e(`导出PNG失败: ${_.message}`,"error")}}async function u(){if(!a){$e("请选择剖面","warning");return}try{const m=await(await ht.exportProfileSvg(a)).blob(),p=URL.createObjectURL(m),x=document.createElement("a");x.href=p,x.download=`profile_${a}.svg`,x.click(),URL.revokeObjectURL(p),$e("剖面SVG已导出","success")}catch(_){$e(`导出SVG失败: ${_.message}`,"error")}}async function f(){if(!n){$e("请先选择项目","warning");return}try{const m=await(await ht.exportStatsExcel(n.id)).blob(),p=URL.createObjectURL(m),x=document.createElement("a");x.href=p,x.download=`stats_${n.id}.xlsx`,x.click(),URL.revokeObjectURL(p),$e("统计表已导出","success")}catch(_){$e(`导出Excel失败: ${_.message}`,"error")}}async function d(){if(!o){$e("请选择建模结果","warning");return}try{const m=await(await ht.exportReportPdf(o)).blob(),p=URL.createObjectURL(m),x=document.createElement("a");x.href=p,x.download=`report_${o}.pdf`,x.click(),URL.revokeObjectURL(p),$e("报告已导出","success")}catch(_){$e(`导出PDF失败: ${_.message}`,"error")}}function g(){o=hn(this),t(0,o)}function v(){a=hn(this),t(1,a)}return[o,a,n,s,r,c,l,u,f,d,g,v]}class a0 extends pn{constructor(e){super(),mn(this,e,o0,r0,dn,{})}}function Yc(i){let e,t,n="已加载",s,r,o="清除",a,c;return{c(){e=M("div"),t=M("span"),t.textContent=n,s=H(),r=M("button"),r.textContent=o,this.h()},l(l){e=E(l,"DIV",{style:!0});var u=O(e);t=E(u,"SPAN",{class:!0,"data-svelte-h":!0}),Pe(t)!=="svelte-1k217nw"&&(t.textContent=n),s=V(u),r=E(u,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(r)!=="svelte-xi3j00"&&(r.textContent=o),u.forEach(S),this.h()},h(){R(t,"class","badge badge-success"),R(r,"class","btn-danger btn-sm"),fe(e,"display","flex"),fe(e,"align-items","center"),fe(e,"gap","6px"),fe(e,"margin-top","4px")},m(l,u){ve(l,e,u),h(e,t),h(e,s),h(e,r),a||(c=ze(r,"click",i[5]),a=!0)},p:yt,d(l){l&&S(e),a=!1,c()}}}function Kc(i){let e,t,n="已加载",s,r,o="清除",a,c;return{c(){e=M("div"),t=M("span"),t.textContent=n,s=H(),r=M("button"),r.textContent=o,this.h()},l(l){e=E(l,"DIV",{style:!0});var u=O(e);t=E(u,"SPAN",{class:!0,"data-svelte-h":!0}),Pe(t)!=="svelte-1k217nw"&&(t.textContent=n),s=V(u),r=E(u,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(r)!=="svelte-1i2ssbg"&&(r.textContent=o),u.forEach(S),this.h()},h(){R(t,"class","badge badge-success"),R(r,"class","btn-danger btn-sm"),fe(e,"display","flex"),fe(e,"align-items","center"),fe(e,"gap","6px"),fe(e,"margin-top","4px")},m(l,u){ve(l,e,u),h(e,t),h(e,s),h(e,r),a||(c=ze(r,"click",i[6]),a=!0)},p:yt,d(l){l&&S(e),a=!1,c()}}}function l0(i){let e,t,n="地表贴图",s,r,o=i[2].visible?"隐藏":"显示",a,c,l,u,f,d="正射影像 (贴图纹理)",g,v,_,m,p,x,b,A="DEM 灰度图 (地形起伏)",C,T,w,L,F,y,U,Y=(i[2].opacity*100).toFixed(0)+"",Q,k,X,W,J,ee,se,ue=i[2].orthoImage&&Yc(i),ce=i[2].demImage&&Kc(i);return{c(){e=M("div"),t=M("h3"),t.textContent=n,s=H(),r=M("button"),a=pe(o),c=H(),l=M("div"),u=M("div"),f=M("label"),f.textContent=d,g=H(),v=M("div"),_=M("input"),m=H(),ue&&ue.c(),p=H(),x=M("div"),b=M("label"),b.textContent=A,C=H(),T=M("input"),w=H(),ce&&ce.c(),L=H(),F=M("div"),y=M("label"),U=pe("贴图透明度: "),Q=pe(Y),k=pe("%"),X=H(),W=M("input"),this.h()},l(le){e=E(le,"DIV",{class:!0});var he=O(e);t=E(he,"H3",{"data-svelte-h":!0}),Pe(t)!=="svelte-gzaxfa"&&(t.textContent=n),s=V(he),r=E(he,"BUTTON",{class:!0});var z=O(r);a=de(z,o),z.forEach(S),he.forEach(S),c=V(le),l=E(le,"DIV",{class:!0,style:!0});var K=O(l);u=E(K,"DIV",{class:!0});var re=O(u);f=E(re,"LABEL",{"data-svelte-h":!0}),Pe(f)!=="svelte-txh69p"&&(f.textContent=d),g=V(re),v=E(re,"DIV",{style:!0});var D=O(v);_=E(D,"INPUT",{type:!0,id:!0,accept:!0}),D.forEach(S),m=V(re),ue&&ue.l(re),re.forEach(S),p=V(K),x=E(K,"DIV",{class:!0});var I=O(x);b=E(I,"LABEL",{"data-svelte-h":!0}),Pe(b)!=="svelte-1aq3yz3"&&(b.textContent=A),C=V(I),T=E(I,"INPUT",{type:!0,id:!0,accept:!0}),w=V(I),ce&&ce.l(I),I.forEach(S),L=V(K),F=E(K,"DIV",{class:!0});var Ee=O(F);y=E(Ee,"LABEL",{});var Me=O(y);U=de(Me,"贴图透明度: "),Q=de(Me,Y),k=de(Me,"%"),Me.forEach(S),X=V(Ee),W=E(Ee,"INPUT",{type:!0,min:!0,max:!0}),Ee.forEach(S),K.forEach(S),this.h()},h(){R(r,"class","btn-secondary btn-sm"),R(e,"class","panel-header"),R(_,"type","file"),R(_,"id","orthoInput"),R(_,"accept","image/*"),fe(v,"display","flex"),fe(v,"gap","4px"),fe(v,"align-items","center"),R(u,"class","form-group"),R(T,"type","file"),R(T,"id","demInput"),R(T,"accept","image/*"),R(x,"class","form-group"),R(W,"type","range"),R(W,"min","0"),R(W,"max","100"),W.value=J=i[2].opacity*100,R(F,"class","form-group"),R(l,"class","panel-body"),fe(l,"padding","10px 12px")},m(le,he){ve(le,e,he),h(e,t),h(e,s),h(e,r),h(r,a),ve(le,c,he),ve(le,l,he),h(l,u),h(u,f),h(u,g),h(u,v),h(v,_),i[8](_),h(u,m),ue&&ue.m(u,null),h(l,p),h(l,x),h(x,b),h(x,C),h(x,T),i[9](T),h(x,w),ce&&ce.m(x,null),h(l,L),h(l,F),h(F,y),h(y,U),h(y,Q),h(y,k),h(F,X),h(F,W),ee||(se=[ze(r,"click",i[7]),ze(_,"change",i[3]),ze(T,"change",i[4]),ze(W,"input",i[10])],ee=!0)},p(le,[he]){he&4&&o!==(o=le[2].visible?"隐藏":"显示")&&Ve(a,o),le[2].orthoImage?ue?ue.p(le,he):(ue=Yc(le),ue.c(),ue.m(u,null)):ue&&(ue.d(1),ue=null),le[2].demImage?ce?ce.p(le,he):(ce=Kc(le),ce.c(),ce.m(x,null)):ce&&(ce.d(1),ce=null),he&4&&Y!==(Y=(le[2].opacity*100).toFixed(0)+"")&&Ve(Q,Y),he&4&&J!==(J=le[2].opacity*100)&&(W.value=J)},i:yt,o:yt,d(le){le&&(S(e),S(c),S(l)),i[8](null),ue&&ue.d(),i[9](null),ce&&ce.d(),ee=!1,Ct(se)}}}function Zc(i){return new Promise((e,t)=>{const n=new FileReader;n.onload=s=>{const r=new Image;r.onload=()=>e(r),r.onerror=t,r.src=s.target.result},n.onerror=t,n.readAsDataURL(i)})}function c0(i,e,t){let n;Je(i,Jn,v=>t(2,n=v));let s,r;async function o(v){var m;const _=(m=v.target.files)==null?void 0:m[0];if(_){if(!_.type.startsWith("image/")){$e("请上传图片文件","warning");return}try{const p=await Zc(_);st(Jn,n={...n,orthoImage:p},n),$e(`正射影像已加载: ${_.name}`,"success")}catch{$e("加载正射影像失败","error")}v.target.value=""}}async function a(v){var m;const _=(m=v.target.files)==null?void 0:m[0];if(_){if(!_.type.startsWith("image/")){$e("请上传灰度图 (PNG/JPG)","warning");return}try{const p=await Zc(_);st(Jn,n={...n,demImage:p},n),$e(`DEM 灰度图已加载: ${_.name}`,"success")}catch{$e("加载DEM失败","error")}v.target.value=""}}function c(){st(Jn,n={...n,orthoImage:null},n)}function l(){st(Jn,n={...n,demImage:null},n)}const u=()=>st(Jn,n={...n,visible:!n.visible},n);function f(v){ni[v?"unshift":"push"](()=>{s=v,t(0,s)})}function d(v){ni[v?"unshift":"push"](()=>{r=v,t(1,r)})}return[s,r,n,o,a,c,l,u,f,d,v=>st(Jn,n={...n,opacity:v.target.value/100},n)]}class u0 extends pn{constructor(e){super(),mn(this,e,c0,l0,dn,{})}}function h0(i){let e,t=i[0].message+"",n,s,r,o="✕",a,c,l;return{c(){e=M("div"),n=pe(t),s=H(),r=M("button"),r.textContent=o,this.h()},l(u){e=E(u,"DIV",{class:!0});var f=O(e);n=de(f,t),s=V(f),r=E(f,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(r)!=="svelte-4r1jhq"&&(r.textContent=o),f.forEach(S),this.h()},h(){R(r,"class","close-btn svelte-ii73z2"),R(e,"class",a="toast toast-"+i[0].type+" svelte-ii73z2")},m(u,f){ve(u,e,f),h(e,n),h(e,s),h(e,r),c||(l=ze(r,"click",i[2]),c=!0)},p(u,[f]){f&1&&t!==(t=u[0].message+"")&&Ve(n,t),f&1&&a!==(a="toast toast-"+u[0].type+" svelte-ii73z2")&&R(e,"class",a)},i:yt,o:yt,d(u){u&&S(e),c=!1,l()}}}function f0(i,e,t){let n;Je(i,Ds,o=>t(1,n=o));let{toast:s}=e;const r=()=>st(Ds,n=n.filter(o=>o.id!==s.id),n);return i.$$set=o=>{"toast"in o&&t(0,s=o.toast)},[s,n,r]}class d0 extends pn{constructor(e){super(),mn(this,e,f0,h0,dn,{toast:0})}}function Jc(i,e,t){const n=i.slice();return n[57]=e[t],n}function Qc(i,e,t){const n=i.slice();return n[60]=e[t],n}function $c(i,e,t){const n=i.slice();return n[63]=e[t],n}function eu(i,e,t){const n=i.slice();return n[66]=e[t],n}function tu(i,e,t){const n=i.slice();n[80]=e[t];const s=n[4].find(function(...o){return i[40](n[80],...o)});return n[70]=s,n}function nu(i,e,t){const n=i.slice();return n[70]=e[t],n}function So(i){const e=i.slice(),t=e[17][e[0]]||[];return e[77]=t,e}function iu(i,e,t){const n=i.slice();return n[70]=e[t],n}function su(i,e,t){const n=i.slice();n[69]=e[t];const s=n[4].find(function(...c){return i[33](n[69],...c)});n[70]=s;const r=n[20](n[69].water_level,n[69].borehole_id);n[71]=r;const o=n[21](n[69].id,n[69].borehole_id);return n[72]=o,n}function ru(i,e,t){const n=i.slice();return n[70]=e[t],n}function ou(i,e,t){const n=i.slice();return n[85]=e[t],n}function au(i){let e,t=i[85].label+"",n,s,r,o;function a(){return i[30](i[85])}return{c(){e=M("button"),n=pe(t),s=H(),this.h()},l(c){e=E(c,"BUTTON",{class:!0});var l=O(e);n=de(l,t),s=V(l),l.forEach(S),this.h()},h(){R(e,"class","sub-tab-btn svelte-kfrf0t"),Kt(e,"active",i[3]===i[85].id)},m(c,l){ve(c,e,l),h(e,n),h(e,s),r||(o=ze(e,"click",a),r=!0)},p(c,l){i=c,l[0]&262152&&Kt(e,"active",i[3]===i[85].id)},d(c){c&&S(e),r=!1,o()}}}function p0(i){let e,t,n="选择钻孔",s,r,o,a="请选择钻孔",c,l,u,f,d,g=nt(i[4]),v=[];for(let p=0;p<g.length;p+=1)v[p]=lu(nu(i,g,p));let _=i[1]&&cu(i),m=i[5].length>0&&hu(i);return{c(){e=M("div"),t=M("label"),t.textContent=n,s=H(),r=M("select"),o=M("option"),o.textContent=a;for(let p=0;p<v.length;p+=1)v[p].c();c=H(),_&&_.c(),l=H(),m&&m.c(),u=It(),this.h()},l(p){e=E(p,"DIV",{class:!0,style:!0});var x=O(e);t=E(x,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(t)!=="svelte-kq5742"&&(t.textContent=n),s=V(x),r=E(x,"SELECT",{style:!0});var b=O(r);o=E(b,"OPTION",{"data-svelte-h":!0}),Pe(o)!=="svelte-1do3tcg"&&(o.textContent=a);for(let A=0;A<v.length;A+=1)v[A].l(b);b.forEach(S),x.forEach(S),c=V(p),_&&_.l(p),l=V(p),m&&m.l(p),u=It(),this.h()},h(){fe(t,"font-size","12px"),o.__value="",Ke(o,o.__value),fe(r,"width","100%"),fe(r,"font-size","12px"),i[1]===void 0&&fn(()=>i[35].call(r)),R(e,"class","form-group"),fe(e,"margin-bottom","10px")},m(p,x){ve(p,e,x),h(e,t),h(e,s),h(e,r),h(r,o);for(let b=0;b<v.length;b+=1)v[b]&&v[b].m(r,null);Tt(r,i[1],!0),ve(p,c,x),_&&_.m(p,x),ve(p,l,x),m&&m.m(p,x),ve(p,u,x),f||(d=ze(r,"change",i[35]),f=!0)},p(p,x){if(x[0]&16){g=nt(p[4]);let b;for(b=0;b<g.length;b+=1){const A=nu(p,g,b);v[b]?v[b].p(A,x):(v[b]=lu(A),v[b].c(),v[b].m(r,null))}for(;b<v.length;b+=1)v[b].d(1);v.length=g.length}x[0]&18&&Tt(r,p[1]),p[1]?_?_.p(p,x):(_=cu(p),_.c(),_.m(l.parentNode,l)):_&&(_.d(1),_=null),p[5].length>0?m?m.p(p,x):(m=hu(p),m.c(),m.m(u.parentNode,u)):m&&(m.d(1),m=null)},d(p){p&&(S(e),S(c),S(l),S(u)),Et(v,p),_&&_.d(p),m&&m.d(p),f=!1,d()}}}function m0(i){let e,t,n="选择钻孔",s,r,o,a="请选择钻孔",c,l,u,f,d,g,v,_=nt(i[4]),m=[];for(let x=0;x<_.length;x+=1)m[x]=du(iu(i,_,x));let p=i[0]&&(i[17][i[0]]||[]).length>0&&pu(So(i));return{c(){e=M("div"),t=M("label"),t.textContent=n,s=H(),r=M("select"),o=M("option"),o.textContent=a;for(let x=0;x<m.length;x+=1)m[x].c();c=H(),l=M("div"),u=M("canvas"),f=H(),p&&p.c(),d=It(),this.h()},l(x){e=E(x,"DIV",{class:!0,style:!0});var b=O(e);t=E(b,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(t)!=="svelte-kq5742"&&(t.textContent=n),s=V(b),r=E(b,"SELECT",{style:!0});var A=O(r);o=E(A,"OPTION",{"data-svelte-h":!0}),Pe(o)!=="svelte-1do3tcg"&&(o.textContent=a);for(let T=0;T<m.length;T+=1)m[T].l(A);A.forEach(S),b.forEach(S),c=V(x),l=E(x,"DIV",{class:!0});var C=O(l);u=E(C,"CANVAS",{class:!0}),O(u).forEach(S),C.forEach(S),f=V(x),p&&p.l(x),d=It(),this.h()},h(){fe(t,"font-size","12px"),o.__value="",Ke(o,o.__value),fe(r,"width","100%"),fe(r,"font-size","12px"),R(e,"class","form-group"),fe(e,"margin-bottom","10px"),R(u,"class","history-canvas svelte-kfrf0t"),R(l,"class","history-chart-container svelte-kfrf0t")},m(x,b){ve(x,e,b),h(e,t),h(e,s),h(e,r),h(r,o);for(let A=0;A<m.length;A+=1)m[A]&&m[A].m(r,null);Tt(r,i[0]),ve(x,c,b),ve(x,l,b),h(l,u),i[34](u),ve(x,f,b),p&&p.m(x,b),ve(x,d,b),g||(v=ze(r,"change",i[19]),g=!0)},p(x,b){if(b[0]&131088){_=nt(x[4]);let A;for(A=0;A<_.length;A+=1){const C=iu(x,_,A);m[A]?m[A].p(C,b):(m[A]=du(C),m[A].c(),m[A].m(r,null))}for(;A<m.length;A+=1)m[A].d(1);m.length=_.length}b[0]&17&&Tt(r,x[0]),x[0]&&(x[17][x[0]]||[]).length>0?p?p.p(So(x),b):(p=pu(So(x)),p.c(),p.m(d.parentNode,d)):p&&(p.d(1),p=null)},d(x){x&&(S(e),S(c),S(l),S(f),S(d)),Et(m,x),i[34](null),p&&p.d(x),g=!1,v()}}}function _0(i){let e,t,n="筛选钻孔",s,r,o,a="全部钻孔",c,l,u,f,d=nt(i[4]),g=[];for(let p=0;p<d.length;p+=1)g[p]=mu(ru(i,d,p));function v(p,x){return p[2].length===0?v0:g0}let _=v(i),m=_(i);return{c(){e=M("div"),t=M("label"),t.textContent=n,s=H(),r=M("select"),o=M("option"),o.textContent=a;for(let p=0;p<g.length;p+=1)g[p].c();c=H(),m.c(),l=It(),this.h()},l(p){e=E(p,"DIV",{class:!0,style:!0});var x=O(e);t=E(x,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(t)!=="svelte-6fopgs"&&(t.textContent=n),s=V(x),r=E(x,"SELECT",{style:!0});var b=O(r);o=E(b,"OPTION",{"data-svelte-h":!0}),Pe(o)!=="svelte-r6bhbn"&&(o.textContent=a);for(let A=0;A<g.length;A+=1)g[A].l(b);b.forEach(S),x.forEach(S),c=V(p),m.l(p),l=It(),this.h()},h(){fe(t,"font-size","12px"),o.__value="",Ke(o,o.__value),fe(r,"width","100%"),fe(r,"font-size","12px"),R(e,"class","form-group"),fe(e,"margin-bottom","10px")},m(p,x){ve(p,e,x),h(e,t),h(e,s),h(e,r),h(r,o);for(let b=0;b<g.length;b+=1)g[b]&&g[b].m(r,null);Tt(r,i[0]),ve(p,c,x),m.m(p,x),ve(p,l,x),u||(f=ze(r,"change",i[19]),u=!0)},p(p,x){if(x[0]&16){d=nt(p[4]);let b;for(b=0;b<d.length;b+=1){const A=ru(p,d,b);g[b]?g[b].p(A,x):(g[b]=mu(A),g[b].c(),g[b].m(r,null))}for(;b<g.length;b+=1)g[b].d(1);g.length=d.length}x[0]&17&&Tt(r,p[0]),_===(_=v(p))&&m?m.p(p,x):(m.d(1),m=_(p),m&&(m.c(),m.m(l.parentNode,l)))},d(p){p&&(S(e),S(c),S(l)),Et(g,p),m.d(p),u=!1,f()}}}function lu(i){let e,t=i[70].hole_id+"",n,s;return{c(){e=M("option"),n=pe(t),this.h()},l(r){e=E(r,"OPTION",{});var o=O(e);n=de(o,t),o.forEach(S),this.h()},h(){e.__value=s=i[70].id,Ke(e,e.__value)},m(r,o){ve(r,e,o),h(e,n)},p(r,o){o[0]&16&&t!==(t=r[70].hole_id+"")&&Ve(n,t),o[0]&16&&s!==(s=r[70].id)&&(e.__value=s,Ke(e,e.__value))},d(r){r&&S(e)}}}function cu(i){let e,t,n,s="蓝色预警阈值 (水位偏高)",r,o,a,c,l="水位超过此值触发蓝色预警",u,f,d,g="橙色预警阈值 (水位异常)",v,_,m,p,x="水位超过此值触发橙色预警",b,A,C,T="红色预警阈值 (水位危险)",w,L,F,y,U="水位超过此值触发红色预警",Y,Q,k,X=i[14]?"保存中...":i[15]?"更新阈值":"保存阈值",W,J,ee,se,ue="业务规则: 蓝色 < 橙色 < 红色",ce,le,he=i[15]&&uu(i);return{c(){e=M("div"),t=M("div"),n=M("label"),n.textContent=s,r=H(),o=M("input"),a=H(),c=M("span"),c.textContent=l,u=H(),f=M("div"),d=M("label"),d.textContent=g,v=H(),_=M("input"),m=H(),p=M("span"),p.textContent=x,b=H(),A=M("div"),C=M("label"),C.textContent=T,w=H(),L=M("input"),F=H(),y=M("span"),y.textContent=U,Y=H(),Q=M("div"),k=M("button"),W=pe(X),J=H(),he&&he.c(),ee=H(),se=M("p"),se.textContent=ue,this.h()},l(z){e=E(z,"DIV",{class:!0});var K=O(e);t=E(K,"DIV",{class:!0});var re=O(t);n=E(re,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(n)!=="svelte-1skzr51"&&(n.textContent=s),r=V(re),o=E(re,"INPUT",{type:!0,step:!0,placeholder:!0,style:!0}),a=V(re),c=E(re,"SPAN",{style:!0,"data-svelte-h":!0}),Pe(c)!=="svelte-shwksy"&&(c.textContent=l),re.forEach(S),u=V(K),f=E(K,"DIV",{class:!0});var D=O(f);d=E(D,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(d)!=="svelte-11uzzzu"&&(d.textContent=g),v=V(D),_=E(D,"INPUT",{type:!0,step:!0,placeholder:!0,style:!0}),m=V(D),p=E(D,"SPAN",{style:!0,"data-svelte-h":!0}),Pe(p)!=="svelte-7bral2"&&(p.textContent=x),D.forEach(S),b=V(K),A=E(K,"DIV",{class:!0});var I=O(A);C=E(I,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(C)!=="svelte-qwak8b"&&(C.textContent=T),w=V(I),L=E(I,"INPUT",{type:!0,step:!0,placeholder:!0,style:!0}),F=V(I),y=E(I,"SPAN",{style:!0,"data-svelte-h":!0}),Pe(y)!=="svelte-ed82hk"&&(y.textContent=U),I.forEach(S),Y=V(K),Q=E(K,"DIV",{class:!0,style:!0});var Ee=O(Q);k=E(Ee,"BUTTON",{class:!0,style:!0});var Me=O(k);W=de(Me,X),Me.forEach(S),J=V(Ee),he&&he.l(Ee),Ee.forEach(S),ee=V(K),se=E(K,"P",{style:!0,"data-svelte-h":!0}),Pe(se)!=="svelte-qa2m22"&&(se.textContent=ue),K.forEach(S),this.h()},h(){fe(n,"font-size","12px"),R(o,"type","number"),R(o,"step","0.01"),R(o,"placeholder","输入蓝色预警阈值"),fe(o,"width","100%"),fe(c,"font-size","10px"),fe(c,"color","#2196f3"),R(t,"class","form-group"),fe(d,"font-size","12px"),R(_,"type","number"),R(_,"step","0.01"),R(_,"placeholder","输入橙色预警阈值"),fe(_,"width","100%"),fe(p,"font-size","10px"),fe(p,"color","#ff9800"),R(f,"class","form-group"),fe(C,"font-size","12px"),R(L,"type","number"),R(L,"step","0.01"),R(L,"placeholder","输入红色预警阈值"),fe(L,"width","100%"),fe(y,"font-size","10px"),fe(y,"color","#f44336"),R(A,"class","form-group"),R(k,"class","btn-primary btn-sm"),fe(k,"width","100%"),k.disabled=i[14],R(Q,"class","form-group"),fe(Q,"margin-top","8px"),fe(se,"font-size","11px"),fe(se,"color","var(--text-muted)"),fe(se,"margin-top","8px"),R(e,"class","threshold-form svelte-kfrf0t")},m(z,K){ve(z,e,K),h(e,t),h(t,n),h(t,r),h(t,o),Ke(o,i[11]),h(t,a),h(t,c),h(e,u),h(e,f),h(f,d),h(f,v),h(f,_),Ke(_,i[12]),h(f,m),h(f,p),h(e,b),h(e,A),h(A,C),h(A,w),h(A,L),Ke(L,i[13]),h(A,F),h(A,y),h(e,Y),h(e,Q),h(Q,k),h(k,W),h(Q,J),he&&he.m(Q,null),h(e,ee),h(e,se),ce||(le=[ze(o,"input",i[36]),ze(_,"input",i[37]),ze(L,"input",i[38]),ze(k,"click",i[26])],ce=!0)},p(z,K){K[0]&2048&&lt(o.value)!==z[11]&&Ke(o,z[11]),K[0]&4096&&lt(_.value)!==z[12]&&Ke(_,z[12]),K[0]&8192&&lt(L.value)!==z[13]&&Ke(L,z[13]),K[0]&49152&&X!==(X=z[14]?"保存中...":z[15]?"更新阈值":"保存阈值")&&Ve(W,X),K[0]&16384&&(k.disabled=z[14]),z[15]?he?he.p(z,K):(he=uu(z),he.c(),he.m(Q,null)):he&&(he.d(1),he=null)},d(z){z&&S(e),he&&he.d(),ce=!1,Ct(le)}}}function uu(i){let e,t="删除阈值设置",n,s;return{c(){e=M("button"),e.textContent=t,this.h()},l(r){e=E(r,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),Pe(e)!=="svelte-7rlshn"&&(e.textContent=t),this.h()},h(){R(e,"class","btn-danger btn-sm"),fe(e,"width","100%"),fe(e,"margin-top","6px")},m(r,o){ve(r,e,o),n||(s=ze(e,"click",i[27]),n=!0)},p:yt,d(r){r&&S(e),n=!1,s()}}}function hu(i){let e,t,n="已配置阈值的钻孔",s,r,o=nt(i[5]),a=[];for(let c=0;c<o.length;c+=1)a[c]=fu(tu(i,o,c));return{c(){e=M("div"),t=M("h4"),t.textContent=n,s=H(),r=M("div");for(let c=0;c<a.length;c+=1)a[c].c();this.h()},l(c){e=E(c,"DIV",{class:!0});var l=O(e);t=E(l,"H4",{style:!0,"data-svelte-h":!0}),Pe(t)!=="svelte-m9yzll"&&(t.textContent=n),s=V(l),r=E(l,"DIV",{class:!0});var u=O(r);for(let f=0;f<a.length;f+=1)a[f].l(u);u.forEach(S),l.forEach(S),this.h()},h(){fe(t,"font-size","12px"),fe(t,"margin","12px 0 6px"),fe(t,"color","var(--text-secondary)"),R(r,"class","thresholds-table svelte-kfrf0t"),R(e,"class","thresholds-list svelte-kfrf0t")},m(c,l){ve(c,e,l),h(e,t),h(e,s),h(e,r);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(r,null)},p(c,l){if(l[0]&33554480){o=nt(c[5]);let u;for(u=0;u<o.length;u+=1){const f=tu(c,o,u);a[u]?a[u].p(f,l):(a[u]=fu(f),a[u].c(),a[u].m(r,null))}for(;u<a.length;u+=1)a[u].d(1);a.length=o.length}},d(c){c&&S(e),Et(a,c)}}}function fu(i){var T;let e,t,n=(((T=i[70])==null?void 0:T.hole_id)||"未知")+"",s,r,o,a,c=i[80].blue_threshold.toFixed(2)+"",l,u,f,d=i[80].orange_threshold.toFixed(2)+"",g,v,_,m=i[80].red_threshold.toFixed(2)+"",p,x,b,A;function C(){return i[39](i[80])}return{c(){e=M("div"),t=M("span"),s=pe(n),r=H(),o=M("div"),a=M("span"),l=pe(c),u=H(),f=M("span"),g=pe(d),v=H(),_=M("span"),p=pe(m),x=H(),this.h()},l(w){e=E(w,"DIV",{class:!0});var L=O(e);t=E(L,"SPAN",{class:!0});var F=O(t);s=de(F,n),F.forEach(S),r=V(L),o=E(L,"DIV",{class:!0});var y=O(o);a=E(y,"SPAN",{class:!0});var U=O(a);l=de(U,c),U.forEach(S),u=V(y),f=E(y,"SPAN",{class:!0});var Y=O(f);g=de(Y,d),Y.forEach(S),v=V(y),_=E(y,"SPAN",{class:!0});var Q=O(_);p=de(Q,m),Q.forEach(S),y.forEach(S),x=V(L),L.forEach(S),this.h()},h(){R(t,"class","threshold-hole svelte-kfrf0t"),R(a,"class","tv tv-blue svelte-kfrf0t"),R(f,"class","tv tv-orange svelte-kfrf0t"),R(_,"class","tv tv-red svelte-kfrf0t"),R(o,"class","threshold-values svelte-kfrf0t"),R(e,"class","threshold-row svelte-kfrf0t")},m(w,L){ve(w,e,L),h(e,t),h(t,s),h(e,r),h(e,o),h(o,a),h(a,l),h(o,u),h(o,f),h(f,g),h(o,v),h(o,_),h(_,p),h(e,x),b||(A=ze(e,"click",C),b=!0)},p(w,L){var F;i=w,L[0]&48&&n!==(n=(((F=i[70])==null?void 0:F.hole_id)||"未知")+"")&&Ve(s,n),L[0]&32&&c!==(c=i[80].blue_threshold.toFixed(2)+"")&&Ve(l,c),L[0]&32&&d!==(d=i[80].orange_threshold.toFixed(2)+"")&&Ve(g,d),L[0]&32&&m!==(m=i[80].red_threshold.toFixed(2)+"")&&Ve(p,m)},d(w){w&&S(e),b=!1,A()}}}function du(i){let e,t=i[70].hole_id+"",n,s,r=(i[17][i[70].id]||[]).length+"",o,a,c;return{c(){e=M("option"),n=pe(t),s=pe(" ("),o=pe(r),a=pe("条)"),this.h()},l(l){e=E(l,"OPTION",{});var u=O(e);n=de(u,t),s=de(u," ("),o=de(u,r),a=de(u,"条)"),u.forEach(S),this.h()},h(){e.__value=c=i[70].id,Ke(e,e.__value)},m(l,u){ve(l,e,u),h(e,n),h(e,s),h(e,o),h(e,a)},p(l,u){u[0]&16&&t!==(t=l[70].hole_id+"")&&Ve(n,t),u[0]&131088&&r!==(r=(l[17][l[70].id]||[]).length+"")&&Ve(o,r),u[0]&16&&c!==(c=l[70].id)&&(e.__value=c,Ke(e,e.__value))},d(l){l&&S(e)}}}function pu(i){let e,t,n,s,r=i[77].length+"",o,a,c,l,u=Math.max(...i[77].map(Nu)).toFixed(2)+"",f,d,g,v,_,m=Math.min(...i[77].map(Uu)).toFixed(2)+"",p,x;return{c(){e=M("div"),t=M("div"),n=M("span"),s=pe("记录数: "),o=pe(r),a=H(),c=M("span"),l=pe("最高: "),f=pe(u),d=pe("m"),g=H(),v=M("span"),_=pe("最低: "),p=pe(m),x=pe("m"),this.h()},l(b){e=E(b,"DIV",{class:!0});var A=O(e);t=E(A,"DIV",{class:!0});var C=O(t);n=E(C,"SPAN",{});var T=O(n);s=de(T,"记录数: "),o=de(T,r),T.forEach(S),a=V(C),c=E(C,"SPAN",{});var w=O(c);l=de(w,"最高: "),f=de(w,u),d=de(w,"m"),w.forEach(S),g=V(C),v=E(C,"SPAN",{});var L=O(v);_=de(L,"最低: "),p=de(L,m),x=de(L,"m"),L.forEach(S),C.forEach(S),A.forEach(S),this.h()},h(){R(t,"class","stat-row svelte-kfrf0t"),R(e,"class","history-stats svelte-kfrf0t")},m(b,A){ve(b,e,A),h(e,t),h(t,n),h(n,s),h(n,o),h(t,a),h(t,c),h(c,l),h(c,f),h(c,d),h(t,g),h(t,v),h(v,_),h(v,p),h(v,x)},p(b,A){A[0]&131073&&r!==(r=b[77].length+"")&&Ve(o,r),A[0]&131073&&u!==(u=Math.max(...b[77].map(Nu)).toFixed(2)+"")&&Ve(f,u),A[0]&131073&&m!==(m=Math.min(...b[77].map(Uu)).toFixed(2)+"")&&Ve(p,m)},d(b){b&&S(e)}}}function mu(i){let e,t=i[70].hole_id+"",n,s;return{c(){e=M("option"),n=pe(t),this.h()},l(r){e=E(r,"OPTION",{});var o=O(e);n=de(o,t),o.forEach(S),this.h()},h(){e.__value=s=i[70].id,Ke(e,e.__value)},m(r,o){ve(r,e,o),h(e,n)},p(r,o){o[0]&16&&t!==(t=r[70].hole_id+"")&&Ve(n,t),o[0]&16&&s!==(s=r[70].id)&&(e.__value=s,Ke(e,e.__value))},d(r){r&&S(e)}}}function g0(i){let e,t=nt(i[2]),n=[];for(let s=0;s<t.length;s+=1)n[s]=Eu(su(i,t,s));return{c(){e=M("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=E(s,"DIV",{class:!0});var r=O(e);for(let o=0;o<n.length;o+=1)n[o].l(r);r.forEach(S),this.h()},h(){R(e,"class","wl-list svelte-kfrf0t")},m(s,r){ve(s,e,r);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(e,null)},p(s,r){if(r[0]&24117269){t=nt(s[2]);let o;for(o=0;o<t.length;o+=1){const a=su(s,t,o);n[o]?n[o].p(a,r):(n[o]=Eu(a),n[o].c(),n[o].m(e,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}},d(s){s&&S(e),Et(n,s)}}}function v0(i){let e,t='<p>暂无水位数据</p> <p style="font-size:12px;color:var(--text-muted);margin-top:4px;">点击&quot;导入CSV&quot;添加水位时序数据</p>';return{c(){e=M("div"),e.innerHTML=t,this.h()},l(n){e=E(n,"DIV",{class:!0,"data-svelte-h":!0}),Pe(e)!=="svelte-1mxdbwe"&&(e.innerHTML=t),this.h()},h(){R(e,"class","empty-state svelte-kfrf0t")},m(n,s){ve(n,e,s)},p:yt,d(n){n&&S(e)}}}function _u(i){var se;let e,t,n,s,r=(((se=i[70])==null?void 0:se.hole_id)||"未知")+"",o,a,c,l,u,f="删除",d,g,v,_,m=i[69].obs_date+"",p,x,b,A,C=i[69].water_level.toFixed(2)+"",T,w,L,F,y,U,Y,Q,k=i[72]&&gu(i),X=i[71]&&vu(i);function W(){return i[32](i[69])}let J=i[69].water_temp!=null&&bu(i),ee=i[69].conductivity!=null&&xu(i);return{c(){e=M("div"),t=M("div"),n=M("div"),s=M("strong"),o=pe(r),a=H(),k&&k.c(),c=H(),X&&X.c(),l=H(),u=M("button"),u.textContent=f,d=H(),g=M("div"),v=M("span"),_=pe("日期: "),p=pe(m),x=H(),b=M("span"),A=pe("水位: "),T=pe(C),w=pe("m"),L=H(),J&&J.c(),F=H(),ee&&ee.c(),y=H(),this.h()},l(ue){e=E(ue,"DIV",{class:!0});var ce=O(e);t=E(ce,"DIV",{class:!0});var le=O(t);n=E(le,"DIV",{class:!0});var he=O(n);s=E(he,"STRONG",{});var z=O(s);o=de(z,r),z.forEach(S),a=V(he),k&&k.l(he),c=V(he),X&&X.l(he),he.forEach(S),l=V(le),u=E(le,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),Pe(u)!=="svelte-k58z44"&&(u.textContent=f),le.forEach(S),d=V(ce),g=E(ce,"DIV",{class:!0});var K=O(g);v=E(K,"SPAN",{});var re=O(v);_=de(re,"日期: "),p=de(re,m),re.forEach(S),x=V(K),b=E(K,"SPAN",{});var D=O(b);A=de(D,"水位: "),T=de(D,C),w=de(D,"m"),D.forEach(S),L=V(K),J&&J.l(K),F=V(K),ee&&ee.l(K),K.forEach(S),y=V(ce),ce.forEach(S),this.h()},h(){R(n,"class","wl-card-title svelte-kfrf0t"),R(u,"class","btn-danger btn-sm"),fe(u,"font-size","10px"),fe(u,"padding","2px 6px"),R(t,"class","wl-card-header svelte-kfrf0t"),R(g,"class","wl-card-info svelte-kfrf0t"),R(e,"class",U="wl-card "+Iu(i[71])+" "+(i[72]?"wl-anomaly":"")+" svelte-kfrf0t")},m(ue,ce){ve(ue,e,ce),h(e,t),h(t,n),h(n,s),h(s,o),h(n,a),k&&k.m(n,null),h(n,c),X&&X.m(n,null),h(t,l),h(t,u),h(e,d),h(e,g),h(g,v),h(v,_),h(v,p),h(g,x),h(g,b),h(b,A),h(b,T),h(b,w),h(g,L),J&&J.m(g,null),h(g,F),ee&&ee.m(g,null),h(e,y),Y||(Q=ze(u,"click",W),Y=!0)},p(ue,ce){var le;i=ue,ce[0]&20&&r!==(r=(((le=i[70])==null?void 0:le.hole_id)||"未知")+"")&&Ve(o,r),i[72]?k?k.p(i,ce):(k=gu(i),k.c(),k.m(n,c)):k&&(k.d(1),k=null),i[71]?X?X.p(i,ce):(X=vu(i),X.c(),X.m(n,null)):X&&(X.d(1),X=null),ce[0]&4&&m!==(m=i[69].obs_date+"")&&Ve(p,m),ce[0]&4&&C!==(C=i[69].water_level.toFixed(2)+"")&&Ve(T,C),i[69].water_temp!=null?J?J.p(i,ce):(J=bu(i),J.c(),J.m(g,F)):J&&(J.d(1),J=null),i[69].conductivity!=null?ee?ee.p(i,ce):(ee=xu(i),ee.c(),ee.m(g,null)):ee&&(ee.d(1),ee=null),ce[0]&4&&U!==(U="wl-card "+Iu(i[71])+" "+(i[72]?"wl-anomaly":"")+" svelte-kfrf0t")&&R(e,"class",U)},d(ue){ue&&S(e),k&&k.d(),X&&X.d(),J&&J.d(),ee&&ee.d(),Y=!1,Q()}}}function gu(i){let e,t="⚠️",n,s;function r(){return i[31](i[69])}return{c(){e=M("span"),e.textContent=t,this.h()},l(o){e=E(o,"SPAN",{class:!0,title:!0,"data-svelte-h":!0}),Pe(e)!=="svelte-1y6ibi4"&&(e.textContent=t),this.h()},h(){R(e,"class","anomaly-icon svelte-kfrf0t"),R(e,"title","异常值")},m(o,a){ve(o,e,a),n||(s=ze(e,"click",r),n=!0)},p(o,a){i=o},d(o){o&&S(e),n=!1,s()}}}function vu(i){let e,t=i[71]==="blue"?"蓝":i[71]==="orange"?"橙":"红",n,s;return{c(){e=M("span"),n=pe(t),this.h()},l(r){e=E(r,"SPAN",{class:!0});var o=O(e);n=de(o,t),o.forEach(S),this.h()},h(){R(e,"class",s="warning-badge warning-"+i[71]+" svelte-kfrf0t")},m(r,o){ve(r,e,o),h(e,n)},p(r,o){o[0]&4&&t!==(t=r[71]==="blue"?"蓝":r[71]==="orange"?"橙":"红")&&Ve(n,t),o[0]&4&&s!==(s="warning-badge warning-"+r[71]+" svelte-kfrf0t")&&R(e,"class",s)},d(r){r&&S(e)}}}function bu(i){let e,t,n=i[69].water_temp.toFixed(1)+"",s,r;return{c(){e=M("span"),t=pe("水温: "),s=pe(n),r=pe("℃")},l(o){e=E(o,"SPAN",{});var a=O(e);t=de(a,"水温: "),s=de(a,n),r=de(a,"℃"),a.forEach(S)},m(o,a){ve(o,e,a),h(e,t),h(e,s),h(e,r)},p(o,a){a[0]&4&&n!==(n=o[69].water_temp.toFixed(1)+"")&&Ve(s,n)},d(o){o&&S(e)}}}function xu(i){let e,t,n=i[69].conductivity.toFixed(1)+"",s,r;return{c(){e=M("span"),t=pe("电导率: "),s=pe(n),r=pe("μS/cm")},l(o){e=E(o,"SPAN",{});var a=O(e);t=de(a,"电导率: "),s=de(a,n),r=de(a,"μS/cm"),a.forEach(S)},m(o,a){ve(o,e,a),h(e,t),h(e,s),h(e,r)},p(o,a){a[0]&4&&n!==(n=o[69].conductivity.toFixed(1)+"")&&Ve(s,n)},d(o){o&&S(e)}}}function Eu(i){let e,t=(!i[0]||i[69].borehole_id===i[0])&&_u(i);return{c(){t&&t.c(),e=It()},l(n){t&&t.l(n),e=It()},m(n,s){t&&t.m(n,s),ve(n,e,s)},p(n,s){!n[0]||n[69].borehole_id===n[0]?t?t.p(n,s):(t=_u(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(n){n&&S(e),t&&t.d(n)}}}function Mu(i){let e,t,n,s="导入水位CSV数据",r,o,a="CSV字段: 孔号/hole_id, 日期/date(yyyy-MM-dd), 水位标高/water_level, 水温/water_temp, 电导率/conductivity",c,l,u,f,d,g,v,_="关闭",m,p,x=i[8]?"导入中...":"开始导入",b,A,C,T,w=i[9]&&Su(i);return{c(){e=M("div"),t=M("div"),n=M("h3"),n.textContent=s,r=H(),o=M("p"),o.textContent=a,c=H(),l=M("div"),u=M("input"),f=H(),w&&w.c(),d=H(),g=M("div"),v=M("button"),v.textContent=_,m=H(),p=M("button"),b=pe(x),this.h()},l(L){e=E(L,"DIV",{class:!0});var F=O(e);t=E(F,"DIV",{class:!0});var y=O(t);n=E(y,"H3",{"data-svelte-h":!0}),Pe(n)!=="svelte-q45yow"&&(n.textContent=s),r=V(y),o=E(y,"P",{style:!0,"data-svelte-h":!0}),Pe(o)!=="svelte-1x4le7w"&&(o.textContent=a),c=V(y),l=E(y,"DIV",{class:!0});var U=O(l);u=E(U,"INPUT",{type:!0,accept:!0}),U.forEach(S),f=V(y),w&&w.l(y),d=V(y),g=E(y,"DIV",{class:!0});var Y=O(g);v=E(Y,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(v)!=="svelte-1wvy2wc"&&(v.textContent=_),m=V(Y),p=E(Y,"BUTTON",{class:!0});var Q=O(p);b=de(Q,x),Q.forEach(S),Y.forEach(S),y.forEach(S),F.forEach(S),this.h()},h(){fe(o,"font-size","12px"),fe(o,"color","var(--text-secondary)"),fe(o,"margin-bottom","12px"),R(u,"type","file"),R(u,"accept",".csv"),R(l,"class","form-group"),R(v,"class","btn-secondary"),R(p,"class","btn-primary"),p.disabled=A=!i[7]||i[8],R(g,"class","modal-actions"),R(t,"class","modal"),R(e,"class","modal-overlay")},m(L,F){ve(L,e,F),h(e,t),h(t,n),h(t,r),h(t,o),h(t,c),h(t,l),h(l,u),h(t,f),w&&w.m(t,null),h(t,d),h(t,g),h(g,v),h(g,m),h(g,p),h(p,b),C||(T=[ze(u,"change",i[41]),ze(v,"click",i[42]),ze(p,"click",i[23]),ze(e,"click",Us(i[43]))],C=!0)},p(L,F){L[9]?w?w.p(L,F):(w=Su(L),w.c(),w.m(t,d)):w&&(w.d(1),w=null),F[0]&256&&x!==(x=L[8]?"导入中...":"开始导入")&&Ve(b,x),F[0]&384&&A!==(A=!L[7]||L[8])&&(p.disabled=A)},d(L){L&&S(e),w&&w.d(),C=!1,Ct(T)}}}function Su(i){let e,t,n,s=i[9].imported+"",r,o,a,c,l=i[9].errors.length>0&&yu(i),u=i[9].warnings.length>0&&wu(i);return{c(){e=M("div"),t=M("p"),n=pe("成功导入: "),r=pe(s),o=pe(" 条记录"),a=H(),l&&l.c(),c=H(),u&&u.c(),this.h()},l(f){e=E(f,"DIV",{class:!0});var d=O(e);t=E(d,"P",{class:!0});var g=O(t);n=de(g,"成功导入: "),r=de(g,s),o=de(g," 条记录"),g.forEach(S),a=V(d),l&&l.l(d),c=V(d),u&&u.l(d),d.forEach(S),this.h()},h(){R(t,"class","badge badge-success svelte-kfrf0t"),R(e,"class","import-result svelte-kfrf0t")},m(f,d){ve(f,e,d),h(e,t),h(t,n),h(t,r),h(t,o),h(e,a),l&&l.m(e,null),h(e,c),u&&u.m(e,null)},p(f,d){d[0]&512&&s!==(s=f[9].imported+"")&&Ve(r,s),f[9].errors.length>0?l?l.p(f,d):(l=yu(f),l.c(),l.m(e,c)):l&&(l.d(1),l=null),f[9].warnings.length>0?u?u.p(f,d):(u=wu(f),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},d(f){f&&S(e),l&&l.d(),u&&u.d()}}}function yu(i){let e,t=nt(i[9].errors),n=[];for(let s=0;s<t.length;s+=1)n[s]=Tu(eu(i,t,s));return{c(){e=M("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=E(s,"DIV",{class:!0,style:!0});var r=O(e);for(let o=0;o<n.length;o+=1)n[o].l(r);r.forEach(S),this.h()},h(){R(e,"class","errors"),fe(e,"max-height","150px"),fe(e,"overflow-y","auto")},m(s,r){ve(s,e,r);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(e,null)},p(s,r){if(r[0]&512){t=nt(s[9].errors);let o;for(o=0;o<t.length;o+=1){const a=eu(s,t,o);n[o]?n[o].p(a,r):(n[o]=Tu(a),n[o].c(),n[o].m(e,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}},d(s){s&&S(e),Et(n,s)}}}function Tu(i){let e,t=i[66]+"",n;return{c(){e=M("p"),n=pe(t),this.h()},l(s){e=E(s,"P",{class:!0,style:!0});var r=O(e);n=de(r,t),r.forEach(S),this.h()},h(){R(e,"class","badge badge-danger svelte-kfrf0t"),fe(e,"font-size","11px")},m(s,r){ve(s,e,r),h(e,n)},p(s,r){r[0]&512&&t!==(t=s[66]+"")&&Ve(n,t)},d(s){s&&S(e)}}}function wu(i){let e,t=nt(i[9].warnings),n=[];for(let s=0;s<t.length;s+=1)n[s]=Au($c(i,t,s));return{c(){e=M("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=E(s,"DIV",{class:!0});var r=O(e);for(let o=0;o<n.length;o+=1)n[o].l(r);r.forEach(S),this.h()},h(){R(e,"class","warnings")},m(s,r){ve(s,e,r);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(e,null)},p(s,r){if(r[0]&512){t=nt(s[9].warnings);let o;for(o=0;o<t.length;o+=1){const a=$c(s,t,o);n[o]?n[o].p(a,r):(n[o]=Au(a),n[o].c(),n[o].m(e,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}},d(s){s&&S(e),Et(n,s)}}}function Au(i){let e,t=i[63]+"",n;return{c(){e=M("p"),n=pe(t),this.h()},l(s){e=E(s,"P",{class:!0});var r=O(e);n=de(r,t),r.forEach(S),this.h()},h(){R(e,"class","badge badge-warning svelte-kfrf0t")},m(s,r){ve(s,e,r),h(e,n)},p(s,r){r[0]&512&&t!==(t=s[63]+"")&&Ve(n,t)},d(s){s&&S(e)}}}function Cu(i){let e,t,n,s="异常值详情",r,o,a,c,l=i[16].hole_id+"",u,f,d,g=i[16].is_upper?"↑ 偏高异常":"↓ 偏低异常",v,_,m,p,x,b,A="偏离均值:",C,T,w=i[16].deviation>0?"+":"",L,F=i[16].deviation.toFixed(2)+"",y,U,Y=i[16].deviation_pct.toFixed(2)+"",Q,k,X,W,J,ee="日期:",se,ue,ce=i[16].obs_date+"",le,he,z,K,re="水位:",D,I,Ee=i[16].water_level.toFixed(2)+"",Me,Re,j,Ae,Se,Ne="水温:",oe,ie,ge=i[16].water_temp!=null?i[16].water_temp.toFixed(1)+"℃":"—",B,P,xe,te,N="电导率:",Z,me,_e=i[16].conductivity!=null?i[16].conductivity.toFixed(1)+"μS/cm":"—",$,ae,be,ye,Te,Ce,Ye=i[16].obs_date+"",Oe,Le,Be,q,ke=i[16].water_level.toFixed(2)+"",je,He,G,De,we,Fe,Ge="关闭",Ze,Qe,et=i[16].before_records.length>0&&Ru(i),ct=i[16].after_records.length>0&&Lu(i);return{c(){e=M("div"),t=M("div"),n=M("h3"),n.textContent=s,r=H(),o=M("div"),a=M("span"),c=pe("钻孔: "),u=pe(l),f=H(),d=M("span"),v=pe(g),m=H(),p=M("div"),x=M("div"),b=M("span"),b.textContent=A,C=H(),T=M("strong"),L=pe(w),y=pe(F),U=pe("m ("),Q=pe(Y),k=pe("%)"),X=H(),W=M("div"),J=M("span"),J.textContent=ee,se=H(),ue=M("span"),le=pe(ce),he=H(),z=M("div"),K=M("span"),K.textContent=re,D=H(),I=M("span"),Me=pe(Ee),Re=pe("m"),j=H(),Ae=M("div"),Se=M("span"),Se.textContent=Ne,oe=H(),ie=M("span"),B=pe(ge),P=H(),xe=M("div"),te=M("span"),te.textContent=N,Z=H(),me=M("span"),$=pe(_e),ae=H(),et&&et.c(),be=H(),ye=M("div"),Te=M("div"),Ce=M("span"),Oe=pe(Ye),Le=pe(" (当前)"),Be=H(),q=M("span"),je=pe(ke),He=pe("m"),G=H(),ct&&ct.c(),De=H(),we=M("div"),Fe=M("button"),Fe.textContent=Ge,this.h()},l(tt){e=E(tt,"DIV",{class:!0});var ot=O(e);t=E(ot,"DIV",{class:!0});var ft=O(t);n=E(ft,"H3",{"data-svelte-h":!0}),Pe(n)!=="svelte-61hx07"&&(n.textContent=s),r=V(ft),o=E(ft,"DIV",{class:!0});var Gt=O(o);a=E(Gt,"SPAN",{class:!0});var Jt=O(a);c=de(Jt,"钻孔: "),u=de(Jt,l),Jt.forEach(S),f=V(Gt),d=E(Gt,"SPAN",{class:!0});var wt=O(d);v=de(wt,g),wt.forEach(S),Gt.forEach(S),m=V(ft),p=E(ft,"DIV",{class:!0});var At=O(p);x=E(At,"DIV",{class:!0});var Lt=O(x);b=E(Lt,"SPAN",{"data-svelte-h":!0}),Pe(b)!=="svelte-whx9yx"&&(b.textContent=A),C=V(Lt),T=E(Lt,"STRONG",{});var Ut=O(T);L=de(Ut,w),y=de(Ut,F),U=de(Ut,"m ("),Q=de(Ut,Y),k=de(Ut,"%)"),Ut.forEach(S),Lt.forEach(S),X=V(At),W=E(At,"DIV",{class:!0});var An=O(W);J=E(An,"SPAN",{"data-svelte-h":!0}),Pe(J)!=="svelte-1roqq9s"&&(J.textContent=ee),se=V(An),ue=E(An,"SPAN",{});var on=O(ue);le=de(on,ce),on.forEach(S),An.forEach(S),he=V(At),z=E(At,"DIV",{class:!0});var Ni=O(z);K=E(Ni,"SPAN",{"data-svelte-h":!0}),Pe(K)!=="svelte-1p9hlj7"&&(K.textContent=re),D=V(Ni),I=E(Ni,"SPAN",{});var vs=O(I);Me=de(vs,Ee),Re=de(vs,"m"),vs.forEach(S),Ni.forEach(S),j=V(At),Ae=E(At,"DIV",{class:!0});var ne=O(Ae);Se=E(ne,"SPAN",{"data-svelte-h":!0}),Pe(Se)!=="svelte-1v87w87"&&(Se.textContent=Ne),oe=V(ne),ie=E(ne,"SPAN",{});var Ue=O(ie);B=de(Ue,ge),Ue.forEach(S),ne.forEach(S),P=V(At),xe=E(At,"DIV",{class:!0});var We=O(xe);te=E(We,"SPAN",{"data-svelte-h":!0}),Pe(te)!=="svelte-19n8l0y"&&(te.textContent=N),Z=V(We),me=E(We,"SPAN",{});var qe=O(me);$=de(qe,_e),qe.forEach(S),We.forEach(S),At.forEach(S),ae=V(ft),et&&et.l(ft),be=V(ft),ye=E(ft,"DIV",{class:!0});var Xe=O(ye);Te=E(Xe,"DIV",{class:!0});var rt=O(Te);Ce=E(rt,"SPAN",{});var at=O(Ce);Oe=de(at,Ye),Le=de(at," (当前)"),at.forEach(S),Be=V(rt),q=E(rt,"SPAN",{});var ut=O(q);je=de(ut,ke),He=de(ut,"m"),ut.forEach(S),rt.forEach(S),Xe.forEach(S),G=V(ft),ct&&ct.l(ft),De=V(ft),we=E(ft,"DIV",{class:!0});var dt=O(we);Fe=E(dt,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(Fe)!=="svelte-bsqtlv"&&(Fe.textContent=Ge),dt.forEach(S),ft.forEach(S),ot.forEach(S),this.h()},h(){R(a,"class","anomaly-hole svelte-kfrf0t"),R(d,"class",_=Ko(`anomaly-direction ${i[16].is_upper?"upper":"lower"}`)+" svelte-kfrf0t"),R(o,"class","anomaly-header svelte-kfrf0t"),R(x,"class","anomaly-row svelte-kfrf0t"),R(W,"class","anomaly-row svelte-kfrf0t"),R(z,"class","anomaly-row svelte-kfrf0t"),R(Ae,"class","anomaly-row svelte-kfrf0t"),R(xe,"class","anomaly-row svelte-kfrf0t"),R(p,"class","anomaly-info svelte-kfrf0t"),R(Te,"class","neighbor-row svelte-kfrf0t"),R(ye,"class","anomaly-current highlight svelte-kfrf0t"),R(Fe,"class","btn-primary"),R(we,"class","modal-actions"),R(t,"class","modal anomaly-modal svelte-kfrf0t"),R(e,"class","modal-overlay")},m(tt,ot){ve(tt,e,ot),h(e,t),h(t,n),h(t,r),h(t,o),h(o,a),h(a,c),h(a,u),h(o,f),h(o,d),h(d,v),h(t,m),h(t,p),h(p,x),h(x,b),h(x,C),h(x,T),h(T,L),h(T,y),h(T,U),h(T,Q),h(T,k),h(p,X),h(p,W),h(W,J),h(W,se),h(W,ue),h(ue,le),h(p,he),h(p,z),h(z,K),h(z,D),h(z,I),h(I,Me),h(I,Re),h(p,j),h(p,Ae),h(Ae,Se),h(Ae,oe),h(Ae,ie),h(ie,B),h(p,P),h(p,xe),h(xe,te),h(xe,Z),h(xe,me),h(me,$),h(t,ae),et&&et.m(t,null),h(t,be),h(t,ye),h(ye,Te),h(Te,Ce),h(Ce,Oe),h(Ce,Le),h(Te,Be),h(Te,q),h(q,je),h(q,He),h(t,G),ct&&ct.m(t,null),h(t,De),h(t,we),h(we,Fe),Ze||(Qe=[ze(Fe,"click",i[44]),ze(e,"click",Us(i[45]))],Ze=!0)},p(tt,ot){ot[0]&65536&&l!==(l=tt[16].hole_id+"")&&Ve(u,l),ot[0]&65536&&g!==(g=tt[16].is_upper?"↑ 偏高异常":"↓ 偏低异常")&&Ve(v,g),ot[0]&65536&&_!==(_=Ko(`anomaly-direction ${tt[16].is_upper?"upper":"lower"}`)+" svelte-kfrf0t")&&R(d,"class",_),ot[0]&65536&&w!==(w=tt[16].deviation>0?"+":"")&&Ve(L,w),ot[0]&65536&&F!==(F=tt[16].deviation.toFixed(2)+"")&&Ve(y,F),ot[0]&65536&&Y!==(Y=tt[16].deviation_pct.toFixed(2)+"")&&Ve(Q,Y),ot[0]&65536&&ce!==(ce=tt[16].obs_date+"")&&Ve(le,ce),ot[0]&65536&&Ee!==(Ee=tt[16].water_level.toFixed(2)+"")&&Ve(Me,Ee),ot[0]&65536&&ge!==(ge=tt[16].water_temp!=null?tt[16].water_temp.toFixed(1)+"℃":"—")&&Ve(B,ge),ot[0]&65536&&_e!==(_e=tt[16].conductivity!=null?tt[16].conductivity.toFixed(1)+"μS/cm":"—")&&Ve($,_e),tt[16].before_records.length>0?et?et.p(tt,ot):(et=Ru(tt),et.c(),et.m(t,be)):et&&(et.d(1),et=null),ot[0]&65536&&Ye!==(Ye=tt[16].obs_date+"")&&Ve(Oe,Ye),ot[0]&65536&&ke!==(ke=tt[16].water_level.toFixed(2)+"")&&Ve(je,ke),tt[16].after_records.length>0?ct?ct.p(tt,ot):(ct=Lu(tt),ct.c(),ct.m(t,De)):ct&&(ct.d(1),ct=null)},d(tt){tt&&S(e),et&&et.d(),ct&&ct.d(),Ze=!1,Ct(Qe)}}}function Ru(i){let e,t,n="前序记录",s,r=nt(i[16].before_records),o=[];for(let a=0;a<r.length;a+=1)o[a]=Pu(Qc(i,r,a));return{c(){e=M("div"),t=M("h4"),t.textContent=n,s=H();for(let a=0;a<o.length;a+=1)o[a].c();this.h()},l(a){e=E(a,"DIV",{class:!0});var c=O(e);t=E(c,"H4",{class:!0,"data-svelte-h":!0}),Pe(t)!=="svelte-f147qx"&&(t.textContent=n),s=V(c);for(let l=0;l<o.length;l+=1)o[l].l(c);c.forEach(S),this.h()},h(){R(t,"class","svelte-kfrf0t"),R(e,"class","anomaly-neighbors svelte-kfrf0t")},m(a,c){ve(a,e,c),h(e,t),h(e,s);for(let l=0;l<o.length;l+=1)o[l]&&o[l].m(e,null)},p(a,c){if(c[0]&65536){r=nt(a[16].before_records);let l;for(l=0;l<r.length;l+=1){const u=Qc(a,r,l);o[l]?o[l].p(u,c):(o[l]=Pu(u),o[l].c(),o[l].m(e,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=r.length}},d(a){a&&S(e),Et(o,a)}}}function Pu(i){let e,t,n=i[60].obs_date+"",s,r,o,a=i[60].water_level.toFixed(2)+"",c,l,u;return{c(){e=M("div"),t=M("span"),s=pe(n),r=H(),o=M("span"),c=pe(a),l=pe("m"),u=H(),this.h()},l(f){e=E(f,"DIV",{class:!0});var d=O(e);t=E(d,"SPAN",{});var g=O(t);s=de(g,n),g.forEach(S),r=V(d),o=E(d,"SPAN",{});var v=O(o);c=de(v,a),l=de(v,"m"),v.forEach(S),u=V(d),d.forEach(S),this.h()},h(){R(e,"class","neighbor-row svelte-kfrf0t")},m(f,d){ve(f,e,d),h(e,t),h(t,s),h(e,r),h(e,o),h(o,c),h(o,l),h(e,u)},p(f,d){d[0]&65536&&n!==(n=f[60].obs_date+"")&&Ve(s,n),d[0]&65536&&a!==(a=f[60].water_level.toFixed(2)+"")&&Ve(c,a)},d(f){f&&S(e)}}}function Lu(i){let e,t,n="后续记录",s,r=nt(i[16].after_records),o=[];for(let a=0;a<r.length;a+=1)o[a]=Du(Jc(i,r,a));return{c(){e=M("div"),t=M("h4"),t.textContent=n,s=H();for(let a=0;a<o.length;a+=1)o[a].c();this.h()},l(a){e=E(a,"DIV",{class:!0});var c=O(e);t=E(c,"H4",{class:!0,"data-svelte-h":!0}),Pe(t)!=="svelte-la6zhc"&&(t.textContent=n),s=V(c);for(let l=0;l<o.length;l+=1)o[l].l(c);c.forEach(S),this.h()},h(){R(t,"class","svelte-kfrf0t"),R(e,"class","anomaly-neighbors svelte-kfrf0t")},m(a,c){ve(a,e,c),h(e,t),h(e,s);for(let l=0;l<o.length;l+=1)o[l]&&o[l].m(e,null)},p(a,c){if(c[0]&65536){r=nt(a[16].after_records);let l;for(l=0;l<r.length;l+=1){const u=Jc(a,r,l);o[l]?o[l].p(u,c):(o[l]=Du(u),o[l].c(),o[l].m(e,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=r.length}},d(a){a&&S(e),Et(o,a)}}}function Du(i){let e,t,n=i[57].obs_date+"",s,r,o,a=i[57].water_level.toFixed(2)+"",c,l,u;return{c(){e=M("div"),t=M("span"),s=pe(n),r=H(),o=M("span"),c=pe(a),l=pe("m"),u=H(),this.h()},l(f){e=E(f,"DIV",{class:!0});var d=O(e);t=E(d,"SPAN",{});var g=O(t);s=de(g,n),g.forEach(S),r=V(d),o=E(d,"SPAN",{});var v=O(o);c=de(v,a),l=de(v,"m"),v.forEach(S),u=V(d),d.forEach(S),this.h()},h(){R(e,"class","neighbor-row svelte-kfrf0t")},m(f,d){ve(f,e,d),h(e,t),h(t,s),h(e,r),h(e,o),h(o,c),h(o,l),h(e,u)},p(f,d){d[0]&65536&&n!==(n=f[57].obs_date+"")&&Ve(s,n),d[0]&65536&&a!==(a=f[57].water_level.toFixed(2)+"")&&Ve(c,a)},d(f){f&&S(e)}}}function b0(i){let e,t,n="地下水位数据",s,r,o,a="导入CSV",c,l,u,f,d,g,v,_,m,p=nt(i[18]),x=[];for(let L=0;L<p.length;L+=1)x[L]=au(ou(i,p,L));function b(L,F){if(L[3]==="data")return _0;if(L[3]==="history")return m0;if(L[3]==="thresholds")return p0}let A=b(i),C=A&&A(i),T=i[6]&&Mu(i),w=i[16]&&Cu(i);return{c(){e=M("div"),t=M("h3"),t.textContent=n,s=H(),r=M("div"),o=M("button"),o.textContent=a,c=H(),l=M("div");for(let L=0;L<x.length;L+=1)x[L].c();u=H(),f=M("div"),C&&C.c(),d=H(),T&&T.c(),g=H(),w&&w.c(),v=It(),this.h()},l(L){e=E(L,"DIV",{class:!0});var F=O(e);t=E(F,"H3",{"data-svelte-h":!0}),Pe(t)!=="svelte-rckkdc"&&(t.textContent=n),s=V(F),r=E(F,"DIV",{style:!0});var y=O(r);o=E(y,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(o)!=="svelte-vemyzj"&&(o.textContent=a),y.forEach(S),F.forEach(S),c=V(L),l=E(L,"DIV",{class:!0});var U=O(l);for(let Q=0;Q<x.length;Q+=1)x[Q].l(U);U.forEach(S),u=V(L),f=E(L,"DIV",{class:!0});var Y=O(f);C&&C.l(Y),Y.forEach(S),d=V(L),T&&T.l(L),g=V(L),w&&w.l(L),v=It(),this.h()},h(){R(o,"class","btn-primary btn-sm"),fe(r,"display","flex"),fe(r,"gap","6px"),R(e,"class","panel-header"),R(l,"class","sub-tabs svelte-kfrf0t"),R(f,"class","panel-body scrollable")},m(L,F){ve(L,e,F),h(e,t),h(e,s),h(e,r),h(r,o),ve(L,c,F),ve(L,l,F);for(let y=0;y<x.length;y+=1)x[y]&&x[y].m(l,null);ve(L,u,F),ve(L,f,F),C&&C.m(f,null),ve(L,d,F),T&&T.m(L,F),ve(L,g,F),w&&w.m(L,F),ve(L,v,F),_||(m=ze(o,"click",i[29]),_=!0)},p(L,F){if(F[0]&262152){p=nt(L[18]);let y;for(y=0;y<p.length;y+=1){const U=ou(L,p,y);x[y]?x[y].p(U,F):(x[y]=au(U),x[y].c(),x[y].m(l,null))}for(;y<x.length;y+=1)x[y].d(1);x.length=p.length}A===(A=b(L))&&C?C.p(L,F):(C&&C.d(1),C=A&&A(L),C&&(C.c(),C.m(f,null))),L[6]?T?T.p(L,F):(T=Mu(L),T.c(),T.m(g.parentNode,g)):T&&(T.d(1),T=null),L[16]?w?w.p(L,F):(w=Cu(L),w.c(),w.m(v.parentNode,v)):w&&(w.d(1),w=null)},i:yt,o:yt,d(L){L&&(S(e),S(c),S(l),S(u),S(f),S(d),S(g),S(v)),Et(x,L),C&&C.d(),T&&T.d(L),w&&w.d(L),_=!1,m()}}}function Iu(i){return i?`wl-warning-${i}`:""}const Nu=i=>i.water_level,Uu=i=>i.water_level;function x0(i,e,t){let n,s,r,o,a,c,l,u;Je(i,cs,te=>t(2,n=te)),Je(i,Er,te=>t(3,s=te)),Je(i,Gn,te=>t(4,r=te)),Je(i,oa,te=>t(47,o=te)),Je(i,Mr,te=>t(5,a=te)),Je(i,Bn,te=>t(48,c=te)),Je(i,us,te=>t(49,l=te)),Je(i,Sr,te=>t(28,u=te));let f=!1,d=null,g=!1,v=null,_="",m,p="",x="",b="",A="",C=!1,T=null,w=null;const L=[{id:"data",label:"水位数据"},{id:"history",label:"水位历史"},{id:"thresholds",label:"预警设置"}];function F(te){t(0,_=te.target.value),st(Sr,u=_,u)}async function y(){if(c)try{const te=await ht.getWaterLevels(c.id);st(cs,n=te,n),await U(),await Y(),await Q()}catch(te){$e(`加载水位数据失败: ${te.message}`,"error")}}async function U(){if(c)try{const te=await ht.getWaterLevelThresholds(c.id);st(Mr,a=te,a)}catch(te){console.warn("加载阈值失败:",te)}}async function Y(){if(c)try{const te=await ht.getWaterLevelWarnings(c.id);st(us,l=te,l)}catch(te){console.warn("加载预警失败:",te)}}async function Q(){if(!c||!n||n.length===0)return;const te=[...new Set(n.map(N=>N.borehole_id))];if(te.length!==0)try{const N=await ht.detectWaterLevelAnomalies(c.id,te);st(oa,o=N,o)}catch(N){console.warn("异常检测失败:",N)}}function k(te,N){const Z=a.find(me=>me.borehole_id===N);return Z?te>=Z.red_threshold?"red":te>=Z.orange_threshold?"orange":te>=Z.blue_threshold?"blue":null:null}function X(te,N){var me;const Z=o[N];return Z?(me=Z.anomalies)==null?void 0:me.some(_e=>_e.id===te):!1}function W(te,N){var me;const Z=o[N];return Z?(me=Z.anomalies)==null?void 0:me.find(_e=>_e.id===te):null}function J(te){var Z;const N=W(te.id,te.borehole_id);N&&t(16,w={...N,hole_id:(Z=o[te.borehole_id])==null?void 0:Z.hole_id})}async function ee(){if(!(!d||!c)){t(8,g=!0);try{const te=await ht.importWaterLevelCsv(c.id,d);t(9,v=te),$e(`成功导入 ${te.imported} 条水位记录`,"success"),te.errors.length>0&&$e(`有 ${te.errors.length} 个错误`,"warning"),await y()}catch(te){$e(`导入失败: ${te.message}`,"error")}finally{t(8,g=!1)}}}async function se(te){if(c)try{await ht.deleteWaterLevel(c.id,te),$e("水位记录已删除","info"),await y()}catch(N){$e(`删除失败: ${N.message}`,"error")}}async function ue(te){t(1,p=te)}async function ce(){if(!c||!p){$e("请选择钻孔","warning");return}const te=parseFloat(x),N=parseFloat(b),Z=parseFloat(A);if(isNaN(te)||isNaN(N)||isNaN(Z)){$e("请输入有效的阈值","error");return}if(!(te<N&&N<Z)){$e("阈值必须满足蓝色 < 橙色 < 红色","error");return}t(14,C=!0);try{const me={borehole_id:p,blue_threshold:te,orange_threshold:N,red_threshold:Z};T?(await ht.updateWaterLevelThreshold(c.id,T,me),$e("阈值更新成功","success")):(await ht.createWaterLevelThreshold(c.id,me),$e("阈值设置成功","success")),await U(),await Y()}catch(me){$e(`保存失败: ${me.message}`,"error")}finally{t(14,C=!1)}}async function le(){if(!(!c||!T)&&confirm("确定要删除该钻孔的预警阈值设置吗?"))try{await ht.deleteWaterLevelThreshold(c.id,T),$e("阈值已删除","info"),t(11,x=""),t(12,b=""),t(13,A=""),t(15,T=null),await U(),await Y()}catch(te){$e(`删除失败: ${te.message}`,"error")}}function he(){var Ge;if(!m)return;const te=m,N=te.getContext("2d"),Z=window.devicePixelRatio||1,me=te.getBoundingClientRect();te.width=me.width*Z,te.height=me.height*Z,N.scale(Z,Z);const _e=me.width,$=me.height;if(N.fillStyle="#1a1d23",N.fillRect(0,0,_e,$),!_){N.fillStyle="#888",N.font="13px sans-serif",N.textAlign="center",N.fillText("请选择钻孔查看水位历史",_e/2,$/2);return}const ae=n.filter(Ze=>Ze.borehole_id===_).sort((Ze,Qe)=>new Date(Ze.obs_date)-new Date(Qe.obs_date));if(ae.length<2){N.fillStyle="#888",N.font="13px sans-serif",N.textAlign="center",N.fillText(ae.length===0?"该钻孔暂无水位数据":"至少需要2条记录才能绘制趋势图",_e/2,$/2);return}const be={top:30,right:20,bottom:50,left:60},ye=_e-be.left-be.right,Te=$-be.top-be.bottom,Ce=a.find(Ze=>Ze.borehole_id===_),Ye=ae.map(Ze=>new Date(Ze.obs_date).getTime()),Oe=ae.map(Ze=>Ze.water_level);let Le=Math.min(...Ye),Be=Math.max(...Ye),q=Math.min(...Oe),ke=Math.max(...Oe);Ce&&(q=Math.min(q,Ce.blue_threshold),ke=Math.max(ke,Ce.red_threshold));const je=(ke-q)*.1||1,He=Ze=>be.left+(Ze-Le)/(Be-Le||1)*ye,G=Ze=>be.top+Te-(Ze-(q-je))/(ke+je-(q-je)||1)*Te;N.strokeStyle="#333",N.lineWidth=1;for(let Ze=0;Ze<=5;Ze++){const Qe=be.top+Ze/5*Te;N.beginPath(),N.moveTo(be.left,Qe),N.lineTo(_e-be.right,Qe),N.stroke();const et=ke+je-Ze/5*(ke+je-(q-je));N.fillStyle="#888",N.font="10px sans-serif",N.textAlign="right",N.fillText(et.toFixed(2),be.left-6,Qe+3)}for(let Ze=0;Ze<=5;Ze++){const Qe=be.left+Ze/5*ye,et=new Date(Le+Ze/5*(Be-Le));N.fillStyle="#888",N.font="10px sans-serif",N.textAlign="center",N.fillText(`${et.getFullYear()}-${String(et.getMonth()+1).padStart(2,"0")}`,Qe,$-be.bottom+18)}N.fillStyle="#888",N.font="11px sans-serif",N.textAlign="center",N.fillText("日期",_e/2,$-4),N.save(),N.translate(12,$/2),N.rotate(-Math.PI/2),N.fillText("水位标高 (m)",0,0),N.restore(),Ce&&[{value:Ce.blue_threshold,color:"#2196f3",label:"蓝色预警"},{value:Ce.orange_threshold,color:"#ff9800",label:"橙色预警"},{value:Ce.red_threshold,color:"#f44336",label:"红色预警"}].forEach(Qe=>{const et=G(Qe.value);et>be.top&&et<be.top+Te&&(N.strokeStyle=Qe.color,N.lineWidth=1.5,N.setLineDash([6,4]),N.beginPath(),N.moveTo(be.left,et),N.lineTo(_e-be.right,et),N.stroke(),N.setLineDash([]),N.fillStyle=Qe.color,N.font="10px sans-serif",N.textAlign="left",N.fillText(`${Qe.label} ${Qe.value.toFixed(2)}m`,be.left+4,et-4))}),N.strokeStyle="#4fc3f7",N.lineWidth=2,N.beginPath(),ae.forEach((Ze,Qe)=>{const et=He(new Date(Ze.obs_date).getTime()),ct=G(Ze.water_level);Qe===0?N.moveTo(et,ct):N.lineTo(et,ct)}),N.stroke();const De=((Ge=o[_])==null?void 0:Ge.anomalies)||[],we=new Set(De.map(Ze=>Ze.id));ae.forEach(Ze=>{const Qe=He(new Date(Ze.obs_date).getTime()),et=G(Ze.water_level);we.has(Ze.id)?(N.strokeStyle="#f44336",N.lineWidth=2,N.fillStyle="transparent",N.beginPath(),N.arc(Qe,et,5,0,Math.PI*2),N.fill(),N.stroke()):(N.fillStyle="#4fc3f7",N.beginPath(),N.arc(Qe,et,3,0,Math.PI*2),N.fill())});const Fe=r.find(Ze=>Ze.id===_);if(Fe){const Ze=G(Fe.elevation);Ze>be.top&&Ze<be.top+Te&&(N.strokeStyle="#ff9800",N.lineWidth=1,N.setLineDash([6,4]),N.beginPath(),N.moveTo(be.left,Ze),N.lineTo(_e-be.right,Ze),N.stroke(),N.setLineDash([]),N.fillStyle="#ff9800",N.font="10px sans-serif",N.textAlign="right",N.fillText(`孔口高程 ${Fe.elevation.toFixed(2)}m`,_e-be.right,Ze-4))}}Lr(()=>{y()});let z;const K=()=>t(6,f=!0),re=te=>st(Er,s=te.id,s),D=te=>J(te),I=te=>se(te.id),Ee=(te,N)=>N.id===te.borehole_id;function Me(te){ni[te?"unshift":"push"](()=>{m=te,t(10,m)})}function Re(){p=hn(this),t(1,p)}function j(){x=lt(this.value),t(11,x),t(1,p),t(5,a),t(4,r),t(2,n)}function Ae(){b=lt(this.value),t(12,b),t(1,p),t(5,a),t(4,r),t(2,n)}function Se(){A=lt(this.value),t(13,A),t(1,p),t(5,a),t(4,r),t(2,n)}const Ne=te=>ue(te.borehole_id),oe=(te,N)=>N.id===te.borehole_id,ie=te=>t(7,d=te.target.files[0]),ge=()=>{t(6,f=!1),t(9,v=null)},B=()=>{t(6,f=!1),t(9,v=null)},P=()=>t(16,w=null),xe=()=>t(16,w=null);return i.$$.update=()=>{if(i.$$.dirty[0]&268435457){const te=u;te&&te!==_&&t(0,_=te)}if(i.$$.dirty[0]&17&&r.find(te=>te.id===_),i.$$.dirty[0]&54&&p&&a.length>0){const te=a.find(N=>N.borehole_id===p);if(te)t(11,x=te.blue_threshold),t(12,b=te.orange_threshold),t(13,A=te.red_threshold),t(15,T=te.id);else{if(r.find(Z=>Z.id===p)&&n.length>0){const Z=n.filter(me=>me.borehole_id===p).map(me=>me.water_level);if(Z.length>0){const me=Math.min(...Z),$=Math.max(...Z)-me;t(11,x=(me+$*.5).toFixed(2)),t(12,b=(me+$*.75).toFixed(2)),t(13,A=(me+$*.95).toFixed(2))}else t(11,x=""),t(12,b=""),t(13,A="")}else t(11,x=""),t(12,b=""),t(13,A="");t(15,T=null)}}if(i.$$.dirty[0]&2&&(p||(t(11,x=""),t(12,b=""),t(13,A=""),t(15,T=null))),i.$$.dirty[0]&13&&s==="history"&&_&&n&&setTimeout(he,50),i.$$.dirty[0]&4){const te={};n.forEach(N=>{te[N.borehole_id]||(te[N.borehole_id]=[]),te[N.borehole_id].push(N)}),t(17,z=te)}},[_,p,n,s,r,a,f,d,g,v,m,x,b,A,C,T,w,z,L,F,k,X,J,ee,se,ue,ce,le,u,K,re,D,I,Ee,Me,Re,j,Ae,Se,Ne,oe,ie,ge,B,P,xe]}class E0 extends pn{constructor(e){super(),mn(this,e,x0,b0,dn,{},null,[-1,-1,-1])}}function Fu(i,e,t){const n=i.slice();return n[50]=e[t],n[52]=t,n}function yo(i){const e=i.slice(),t=e[5].getBoundingClientRect();e[46]=t;const n=220;e[47]=n;const s=e[7].x>e[46].width/2;e[48]=s;const r=e[48]?Math.max(4,e[7].x-e[47]-12):Math.min(e[46].width-e[47]-4,e[7].x+12);return e[49]=r,e}function Ou(i,e,t){const n=i.slice();return n[53]=e[t],n}function ku(i,e,t){const n=i.slice();return n[43]=e[t],n}function Bu(i,e,t){const n=i.slice();return n[40]=e[t],n}function zu(i,e,t){const n=i.slice();return n[53]=e[t],n}function Vu(i){let e,t,n,s,r=i[53].hole_id+"",o,a,c,l;function u(){return i[23](i[53])}return{c(){e=M("label"),t=M("input"),s=H(),o=pe(r),a=H(),this.h()},l(f){e=E(f,"LABEL",{class:!0,style:!0});var d=O(e);t=E(d,"INPUT",{type:!0}),s=V(d),o=de(d,r),a=V(d),d.forEach(S),this.h()},h(){R(t,"type","checkbox"),t.checked=n=i[1].includes(i[53].id),R(e,"class","checkbox-label"),fe(e,"font-size","11px")},m(f,d){ve(f,e,d),h(e,t),h(e,s),h(e,o),h(e,a),c||(l=ze(t,"change",u),c=!0)},p(f,d){i=f,d[0]&258&&n!==(n=i[1].includes(i[53].id))&&(t.checked=n),d[0]&256&&r!==(r=i[53].hole_id+"")&&Ve(o,r)},d(f){f&&S(e),c=!1,l()}}}function Hu(i){let e,t,n="统计指标",s,r,o="MK趋势检验",a,c,l="箱线图",u,f,d="多井对比",g,v,_,m;function p(A,C){if(A[4]==="stats")return T0;if(A[4]==="mk")return y0;if(A[4]==="boxplot")return S0;if(A[4]==="compare")return M0}let x=p(i),b=x&&x(i);return{c(){e=M("div"),t=M("button"),t.textContent=n,s=H(),r=M("button"),r.textContent=o,a=H(),c=M("button"),c.textContent=l,u=H(),f=M("button"),f.textContent=d,g=H(),b&&b.c(),v=It(),this.h()},l(A){e=E(A,"DIV",{class:!0});var C=O(e);t=E(C,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(t)!=="svelte-1tm5qhr"&&(t.textContent=n),s=V(C),r=E(C,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(r)!=="svelte-13bt70l"&&(r.textContent=o),a=V(C),c=E(C,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(c)!=="svelte-zp9jyh"&&(c.textContent=l),u=V(C),f=E(C,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(f)!=="svelte-1x9a0i1"&&(f.textContent=d),C.forEach(S),g=V(A),b&&b.l(A),v=It(),this.h()},h(){R(t,"class","section-tab svelte-1gd2qhx"),Kt(t,"active",i[4]==="stats"),R(r,"class","section-tab svelte-1gd2qhx"),Kt(r,"active",i[4]==="mk"),R(c,"class","section-tab svelte-1gd2qhx"),Kt(c,"active",i[4]==="boxplot"),R(f,"class","section-tab svelte-1gd2qhx"),Kt(f,"active",i[4]==="compare"),R(e,"class","section-tabs svelte-1gd2qhx")},m(A,C){ve(A,e,C),h(e,t),h(e,s),h(e,r),h(e,a),h(e,c),h(e,u),h(e,f),ve(A,g,C),b&&b.m(A,C),ve(A,v,C),_||(m=[ze(t,"click",i[24]),ze(r,"click",i[25]),ze(c,"click",i[26]),ze(f,"click",i[27])],_=!0)},p(A,C){C[0]&16&&Kt(t,"active",A[4]==="stats"),C[0]&16&&Kt(r,"active",A[4]==="mk"),C[0]&16&&Kt(c,"active",A[4]==="boxplot"),C[0]&16&&Kt(f,"active",A[4]==="compare"),x===(x=p(A))&&b?b.p(A,C):(b&&b.d(1),b=x&&x(A),b&&(b.c(),b.m(v.parentNode,v)))},d(A){A&&(S(e),S(g),S(v)),b&&b.d(A),_=!1,Ct(m)}}}function M0(i){let e,t,n,s="选择对比钻孔 (2~6个)",r,o,a,c,l,u=i[0].length+"",f,d,g,v,_,m,p,x,b,A="重置",C,T,w,L,F,y,U="💡 提示: 拖拽选择时间范围可放大, 双击恢复全局视图",Y,Q,k=nt(i[8]),X=[];for(let J=0;J<k.length;J+=1)X[J]=Gu(Ou(i,k,J));let W=i[7]&&Wu(yo(i));return{c(){e=M("div"),t=M("div"),n=M("label"),n.textContent=s,r=H(),o=M("div");for(let J=0;J<X.length;J+=1)X[J].c();a=H(),c=M("p"),l=pe("已选 "),f=pe(u),d=pe("/6 个"),g=H(),v=M("div"),_=M("button"),m=pe("生成对比图"),x=H(),b=M("button"),b.textContent=A,C=H(),T=M("div"),w=M("canvas"),L=H(),W&&W.c(),F=H(),y=M("p"),y.textContent=U,this.h()},l(J){e=E(J,"DIV",{class:!0});var ee=O(e);t=E(ee,"DIV",{class:!0,style:!0});var se=O(t);n=E(se,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(n)!=="svelte-1mjok8e"&&(n.textContent=s),r=V(se),o=E(se,"DIV",{class:!0});var ue=O(o);for(let K=0;K<X.length;K+=1)X[K].l(ue);ue.forEach(S),a=V(se),c=E(se,"P",{style:!0});var ce=O(c);l=de(ce,"已选 "),f=de(ce,u),d=de(ce,"/6 个"),ce.forEach(S),se.forEach(S),g=V(ee),v=E(ee,"DIV",{class:!0,style:!0});var le=O(v);_=E(le,"BUTTON",{class:!0,style:!0});var he=O(_);m=de(he,"生成对比图"),he.forEach(S),x=V(le),b=E(le,"BUTTON",{class:!0,title:!0,"data-svelte-h":!0}),Pe(b)!=="svelte-ggw0qk"&&(b.textContent=A),le.forEach(S),C=V(ee),T=E(ee,"DIV",{class:!0,style:!0});var z=O(T);w=E(z,"CANVAS",{class:!0,ondblclick:!0}),O(w).forEach(S),L=V(z),W&&W.l(z),z.forEach(S),F=V(ee),y=E(ee,"P",{style:!0,"data-svelte-h":!0}),Pe(y)!=="svelte-124tp4t"&&(y.textContent=U),ee.forEach(S),this.h()},h(){fe(n,"font-size","12px"),R(o,"class","borehole-checkboxes svelte-1gd2qhx"),fe(c,"font-size","10px"),fe(c,"color","var(--text-muted)"),fe(c,"margin-top","4px"),R(t,"class","form-group"),fe(t,"margin-bottom","8px"),R(_,"class","btn-primary btn-sm"),fe(_,"flex","1"),_.disabled=p=i[0].length<2,R(b,"class","btn-secondary btn-sm"),R(b,"title","重置视图"),R(v,"class","form-group"),fe(v,"margin-bottom","8px"),fe(v,"display","flex"),fe(v,"gap","6px"),R(w,"class","compare-canvas svelte-1gd2qhx"),R(w,"ondblclick",i[19]),R(T,"class","compare-chart-container svelte-1gd2qhx"),fe(T,"position","relative"),fe(y,"font-size","10px"),fe(y,"color","var(--text-muted)"),fe(y,"margin-top","6px"),R(e,"class","compare-section svelte-1gd2qhx")},m(J,ee){ve(J,e,ee),h(e,t),h(t,n),h(t,r),h(t,o);for(let se=0;se<X.length;se+=1)X[se]&&X[se].m(o,null);h(t,a),h(t,c),h(c,l),h(c,f),h(c,d),h(e,g),h(e,v),h(v,_),h(_,m),h(v,x),h(v,b),h(e,C),h(e,T),h(T,w),i[31](w),h(T,L),W&&W.m(T,null),h(e,F),h(e,y),Y||(Q=[ze(_,"click",i[21]),ze(b,"click",i[30]),ze(w,"mousedown",i[16]),ze(w,"mousemove",i[17]),ze(w,"mouseup",i[18]),ze(w,"mouseleave",i[20])],Y=!0)},p(J,ee){if(ee[0]&4353){k=nt(J[8]);let se;for(se=0;se<k.length;se+=1){const ue=Ou(J,k,se);X[se]?X[se].p(ue,ee):(X[se]=Gu(ue),X[se].c(),X[se].m(o,null))}for(;se<X.length;se+=1)X[se].d(1);X.length=k.length}ee[0]&1&&u!==(u=J[0].length+"")&&Ve(f,u),ee[0]&1&&p!==(p=J[0].length<2)&&(_.disabled=p),J[7]?W?W.p(yo(J),ee):(W=Wu(yo(J)),W.c(),W.m(T,null)):W&&(W.d(1),W=null)},d(J){J&&S(e),Et(X,J),i[31](null),W&&W.d(),Y=!1,Ct(Q)}}}function S0(i){let e,t;return{c(){e=M("div"),t=M("canvas"),this.h()},l(n){e=E(n,"DIV",{class:!0});var s=O(e);t=E(s,"CANVAS",{class:!0}),O(t).forEach(S),s.forEach(S),this.h()},h(){R(t,"class","boxplot-canvas svelte-1gd2qhx"),R(e,"class","boxplot-container svelte-1gd2qhx")},m(n,s){ve(n,e,s),h(e,t),i[28](t)},p:yt,d(n){n&&S(e),i[28](null)}}}function y0(i){let e,t,n,s='<tr><th class="svelte-1gd2qhx">孔号</th> <th class="svelte-1gd2qhx">记录数</th> <th class="svelte-1gd2qhx">S统计量</th> <th class="svelte-1gd2qhx">Var(S)</th> <th class="svelte-1gd2qhx">Z值</th> <th class="svelte-1gd2qhx">p值</th> <th class="svelte-1gd2qhx">趋势</th></tr>',r,o,a,c,l='<span style="color:#4caf50;">↑ 显著上升</span> <span style="color:#f44336;">↓ 显著下降</span> <span style="color:#9e9e9e;">— 无显著趋势</span> <span style="color:#ff9800;">(显著性水平 α=0.05, 至少8条记录)</span>',u=nt(i[9]),f=[];for(let d=0;d<u.length;d+=1)f[d]=qu(ku(i,u,d));return{c(){e=M("div"),t=M("table"),n=M("thead"),n.innerHTML=s,r=H(),o=M("tbody");for(let d=0;d<f.length;d+=1)f[d].c();a=H(),c=M("div"),c.innerHTML=l,this.h()},l(d){e=E(d,"DIV",{class:!0});var g=O(e);t=E(g,"TABLE",{class:!0});var v=O(t);n=E(v,"THEAD",{"data-svelte-h":!0}),Pe(n)!=="svelte-anulzd"&&(n.innerHTML=s),r=V(v),o=E(v,"TBODY",{});var _=O(o);for(let m=0;m<f.length;m+=1)f[m].l(_);_.forEach(S),v.forEach(S),g.forEach(S),a=V(d),c=E(d,"DIV",{class:!0,"data-svelte-h":!0}),Pe(c)!=="svelte-l45sxa"&&(c.innerHTML=l),this.h()},h(){R(t,"class","stats-table svelte-1gd2qhx"),R(e,"class","stats-table-container svelte-1gd2qhx"),R(c,"class","mk-legend svelte-1gd2qhx")},m(d,g){ve(d,e,g),h(e,t),h(t,n),h(t,r),h(t,o);for(let v=0;v<f.length;v+=1)f[v]&&f[v].m(o,null);ve(d,a,g),ve(d,c,g)},p(d,g){if(g[0]&512){u=nt(d[9]);let v;for(v=0;v<u.length;v+=1){const _=ku(d,u,v);f[v]?f[v].p(_,g):(f[v]=qu(_),f[v].c(),f[v].m(o,null))}for(;v<f.length;v+=1)f[v].d(1);f.length=u.length}},d(d){d&&(S(e),S(a),S(c)),Et(f,d)}}}function T0(i){let e,t,n,s='<tr><th class="svelte-1gd2qhx">孔号</th> <th class="svelte-1gd2qhx">记录数</th> <th class="svelte-1gd2qhx">均值</th> <th class="svelte-1gd2qhx">中位数</th> <th class="svelte-1gd2qhx">标准差</th> <th class="svelte-1gd2qhx">变异系数</th> <th class="svelte-1gd2qhx">最大连续上升</th> <th class="svelte-1gd2qhx">最大连续下降</th> <th class="svelte-1gd2qhx">年际变幅</th> <th class="svelte-1gd2qhx">异常值</th></tr>',r,o,a=nt(i[10]),c=[];for(let l=0;l<a.length;l+=1)c[l]=ju(Bu(i,a,l));return{c(){e=M("div"),t=M("table"),n=M("thead"),n.innerHTML=s,r=H(),o=M("tbody");for(let l=0;l<c.length;l+=1)c[l].c();this.h()},l(l){e=E(l,"DIV",{class:!0});var u=O(e);t=E(u,"TABLE",{class:!0});var f=O(t);n=E(f,"THEAD",{"data-svelte-h":!0}),Pe(n)!=="svelte-149pjfl"&&(n.innerHTML=s),r=V(f),o=E(f,"TBODY",{});var d=O(o);for(let g=0;g<c.length;g+=1)c[g].l(d);d.forEach(S),f.forEach(S),u.forEach(S),this.h()},h(){R(t,"class","stats-table svelte-1gd2qhx"),R(e,"class","stats-table-container svelte-1gd2qhx")},m(l,u){ve(l,e,u),h(e,t),h(t,n),h(t,r),h(t,o);for(let f=0;f<c.length;f+=1)c[f]&&c[f].m(o,null)},p(l,u){if(u[0]&1024){a=nt(l[10]);let f;for(f=0;f<a.length;f+=1){const d=Bu(l,a,f);c[f]?c[f].p(d,u):(c[f]=ju(d),c[f].c(),c[f].m(o,null))}for(;f<c.length;f+=1)c[f].d(1);c.length=a.length}},d(l){l&&S(e),Et(c,l)}}}function Gu(i){let e,t,n,s,r=i[53].hole_id+"",o,a,c,l;function u(){return i[29](i[53])}return{c(){e=M("label"),t=M("input"),s=H(),o=pe(r),a=H(),this.h()},l(f){e=E(f,"LABEL",{class:!0,style:!0});var d=O(e);t=E(d,"INPUT",{type:!0}),s=V(d),o=de(d,r),a=V(d),d.forEach(S),this.h()},h(){R(t,"type","checkbox"),t.checked=n=i[0].includes(i[53].id),R(e,"class","checkbox-label"),fe(e,"font-size","11px")},m(f,d){ve(f,e,d),h(e,t),h(e,s),h(e,o),h(e,a),c||(l=ze(t,"change",u),c=!0)},p(f,d){i=f,d[0]&257&&n!==(n=i[0].includes(i[53].id))&&(t.checked=n),d[0]&256&&r!==(r=i[53].hole_id+"")&&Ve(o,r)},d(f){f&&S(e),c=!1,l()}}}function Wu(i){let e,t,n=i[7].date.getFullYear()+"",s,r,o=String(i[7].date.getMonth()+1).padStart(2,"0")+"",a,c,l=String(i[7].date.getDate()).padStart(2,"0")+"",u,f,d=nt(i[7].data),g=[];for(let v=0;v<d.length;v+=1)g[v]=Xu(Fu(i,d,v));return{c(){e=M("div"),t=M("div"),s=pe(n),r=pe("-"),a=pe(o),c=pe("-"),u=pe(l),f=H();for(let v=0;v<g.length;v+=1)g[v].c();this.h()},l(v){e=E(v,"DIV",{class:!0,style:!0});var _=O(e);t=E(_,"DIV",{class:!0});var m=O(t);s=de(m,n),r=de(m,"-"),a=de(m,o),c=de(m,"-"),u=de(m,l),m.forEach(S),f=V(_);for(let p=0;p<g.length;p+=1)g[p].l(_);_.forEach(S),this.h()},h(){R(t,"class","tooltip-date svelte-1gd2qhx"),R(e,"class","compare-tooltip svelte-1gd2qhx"),fe(e,"left",i[49]+"px"),fe(e,"top","50px"),fe(e,"max-width",i[47]+"px")},m(v,_){ve(v,e,_),h(e,t),h(t,s),h(t,r),h(t,a),h(t,c),h(t,u),h(e,f);for(let m=0;m<g.length;m+=1)g[m]&&g[m].m(e,null)},p(v,_){if(_[0]&128&&n!==(n=v[7].date.getFullYear()+"")&&Ve(s,n),_[0]&128&&o!==(o=String(v[7].date.getMonth()+1).padStart(2,"0")+"")&&Ve(a,o),_[0]&128&&l!==(l=String(v[7].date.getDate()).padStart(2,"0")+"")&&Ve(u,l),_[0]&16512){d=nt(v[7].data);let m;for(m=0;m<d.length;m+=1){const p=Fu(v,d,m);g[m]?g[m].p(p,_):(g[m]=Xu(p),g[m].c(),g[m].m(e,null))}for(;m<g.length;m+=1)g[m].d(1);g.length=d.length}_[0]&160&&fe(e,"left",v[49]+"px")},d(v){v&&S(e),Et(g,v)}}}function Xu(i){let e,t,n=i[50].hole_id+"",s,r,o,a=i[50].record?i[50].record.water_level.toFixed(2)+"m":"—",c,l;return{c(){e=M("div"),t=M("span"),s=pe(n),r=H(),o=M("span"),c=pe(a),l=H(),this.h()},l(u){e=E(u,"DIV",{class:!0,style:!0});var f=O(e);t=E(f,"SPAN",{class:!0});var d=O(t);s=de(d,n),d.forEach(S),r=V(f),o=E(f,"SPAN",{class:!0});var g=O(o);c=de(g,a),g.forEach(S),l=V(f),f.forEach(S),this.h()},h(){R(t,"class","tooltip-hole svelte-1gd2qhx"),R(o,"class","tooltip-value svelte-1gd2qhx"),R(e,"class","tooltip-row svelte-1gd2qhx"),fe(e,"color",i[14][i[52]%i[14].length])},m(u,f){ve(u,e,f),h(e,t),h(t,s),h(e,r),h(e,o),h(o,c),h(e,l)},p(u,f){f[0]&128&&n!==(n=u[50].hole_id+"")&&Ve(s,n),f[0]&128&&a!==(a=u[50].record?u[50].record.water_level.toFixed(2)+"m":"—")&&Ve(c,a)},d(u){u&&S(e)}}}function qu(i){var se,ue,ce,le;let e,t,n=i[43].hole_id+"",s,r,o,a=i[43].count+"",c,l,u,f=(((se=i[43].s_stat)==null?void 0:se.toFixed(1))??"-")+"",d,g,v,_=(((ue=i[43].var_s)==null?void 0:ue.toFixed(1))??"-")+"",m,p,x,b=(((ce=i[43].z_value)==null?void 0:ce.toFixed(3))??"-")+"",A,C,T,w=(((le=i[43].p_value)==null?void 0:le.toFixed(4))??"-")+"",L,F,y,U,Y=Ku(i[43].trend)+"",Q,k,X=i[43].trend+"",W,J,ee;return{c(){e=M("tr"),t=M("td"),s=pe(n),r=H(),o=M("td"),c=pe(a),l=H(),u=M("td"),d=pe(f),g=H(),v=M("td"),m=pe(_),p=H(),x=M("td"),A=pe(b),C=H(),T=M("td"),L=pe(w),F=H(),y=M("td"),U=M("span"),Q=pe(Y),k=H(),W=pe(X),ee=H(),this.h()},l(he){e=E(he,"TR",{});var z=O(e);t=E(z,"TD",{class:!0});var K=O(t);s=de(K,n),K.forEach(S),r=V(z),o=E(z,"TD",{class:!0});var re=O(o);c=de(re,a),re.forEach(S),l=V(z),u=E(z,"TD",{class:!0});var D=O(u);d=de(D,f),D.forEach(S),g=V(z),v=E(z,"TD",{class:!0});var I=O(v);m=de(I,_),I.forEach(S),p=V(z),x=E(z,"TD",{class:!0});var Ee=O(x);A=de(Ee,b),Ee.forEach(S),C=V(z),T=E(z,"TD",{class:!0});var Me=O(T);L=de(Me,w),Me.forEach(S),F=V(z),y=E(z,"TD",{style:!0,class:!0});var Re=O(y);U=E(Re,"SPAN",{class:!0});var j=O(U);Q=de(j,Y),j.forEach(S),k=V(Re),W=de(Re,X),Re.forEach(S),ee=V(z),z.forEach(S),this.h()},h(){R(t,"class","svelte-1gd2qhx"),R(o,"class","svelte-1gd2qhx"),R(u,"class","svelte-1gd2qhx"),R(v,"class","svelte-1gd2qhx"),R(x,"class","svelte-1gd2qhx"),R(T,"class","svelte-1gd2qhx"),R(U,"class","trend-icon svelte-1gd2qhx"),R(y,"style",J=Yu(i[43].trend)),R(y,"class","svelte-1gd2qhx")},m(he,z){ve(he,e,z),h(e,t),h(t,s),h(e,r),h(e,o),h(o,c),h(e,l),h(e,u),h(u,d),h(e,g),h(e,v),h(v,m),h(e,p),h(e,x),h(x,A),h(e,C),h(e,T),h(T,L),h(e,F),h(e,y),h(y,U),h(U,Q),h(y,k),h(y,W),h(e,ee)},p(he,z){var K,re,D,I;z[0]&512&&n!==(n=he[43].hole_id+"")&&Ve(s,n),z[0]&512&&a!==(a=he[43].count+"")&&Ve(c,a),z[0]&512&&f!==(f=(((K=he[43].s_stat)==null?void 0:K.toFixed(1))??"-")+"")&&Ve(d,f),z[0]&512&&_!==(_=(((re=he[43].var_s)==null?void 0:re.toFixed(1))??"-")+"")&&Ve(m,_),z[0]&512&&b!==(b=(((D=he[43].z_value)==null?void 0:D.toFixed(3))??"-")+"")&&Ve(A,b),z[0]&512&&w!==(w=(((I=he[43].p_value)==null?void 0:I.toFixed(4))??"-")+"")&&Ve(L,w),z[0]&512&&Y!==(Y=Ku(he[43].trend)+"")&&Ve(Q,Y),z[0]&512&&X!==(X=he[43].trend+"")&&Ve(W,X),z[0]&512&&J!==(J=Yu(he[43].trend))&&R(y,"style",J)},d(he){he&&S(e)}}}function ju(i){var D,I,Ee,Me,Re;let e,t,n=i[40].hole_id+"",s,r,o,a=i[40].count+"",c,l,u,f=(((D=i[40].mean)==null?void 0:D.toFixed(2))??"-")+"",d,g,v,_=(((I=i[40].median)==null?void 0:I.toFixed(2))??"-")+"",m,p,x,b=(((Ee=i[40].std_dev)==null?void 0:Ee.toFixed(2))??"-")+"",A,C,T,w=(((Me=i[40].cv)==null?void 0:Me.toFixed(2))??"-")+"",L,F,y,U,Y=(i[40].max_rise_days??"-")+"",Q,k,X,W=(i[40].max_fall_days??"-")+"",J,ee,se,ue=(((Re=i[40].annual_amplitude)==null?void 0:Re.toFixed(2))??"-")+"",ce,le,he,z=(i[40].count>=10&&i[40].anomaly_count!=null?i[40].anomaly_count:"—")+"",K,re;return{c(){e=M("tr"),t=M("td"),s=pe(n),r=H(),o=M("td"),c=pe(a),l=H(),u=M("td"),d=pe(f),g=H(),v=M("td"),m=pe(_),p=H(),x=M("td"),A=pe(b),C=H(),T=M("td"),L=pe(w),F=pe("%"),y=H(),U=M("td"),Q=pe(Y),k=H(),X=M("td"),J=pe(W),ee=H(),se=M("td"),ce=pe(ue),le=H(),he=M("td"),K=pe(z),re=H(),this.h()},l(j){e=E(j,"TR",{});var Ae=O(e);t=E(Ae,"TD",{class:!0});var Se=O(t);s=de(Se,n),Se.forEach(S),r=V(Ae),o=E(Ae,"TD",{class:!0});var Ne=O(o);c=de(Ne,a),Ne.forEach(S),l=V(Ae),u=E(Ae,"TD",{class:!0});var oe=O(u);d=de(oe,f),oe.forEach(S),g=V(Ae),v=E(Ae,"TD",{class:!0});var ie=O(v);m=de(ie,_),ie.forEach(S),p=V(Ae),x=E(Ae,"TD",{class:!0});var ge=O(x);A=de(ge,b),ge.forEach(S),C=V(Ae),T=E(Ae,"TD",{class:!0});var B=O(T);L=de(B,w),F=de(B,"%"),B.forEach(S),y=V(Ae),U=E(Ae,"TD",{class:!0});var P=O(U);Q=de(P,Y),P.forEach(S),k=V(Ae),X=E(Ae,"TD",{class:!0});var xe=O(X);J=de(xe,W),xe.forEach(S),ee=V(Ae),se=E(Ae,"TD",{class:!0});var te=O(se);ce=de(te,ue),te.forEach(S),le=V(Ae),he=E(Ae,"TD",{class:!0});var N=O(he);K=de(N,z),N.forEach(S),re=V(Ae),Ae.forEach(S),this.h()},h(){R(t,"class","svelte-1gd2qhx"),R(o,"class","svelte-1gd2qhx"),R(u,"class","svelte-1gd2qhx"),R(v,"class","svelte-1gd2qhx"),R(x,"class","svelte-1gd2qhx"),R(T,"class","svelte-1gd2qhx"),R(U,"class","svelte-1gd2qhx"),R(X,"class","svelte-1gd2qhx"),R(se,"class","svelte-1gd2qhx"),R(he,"class","svelte-1gd2qhx")},m(j,Ae){ve(j,e,Ae),h(e,t),h(t,s),h(e,r),h(e,o),h(o,c),h(e,l),h(e,u),h(u,d),h(e,g),h(e,v),h(v,m),h(e,p),h(e,x),h(x,A),h(e,C),h(e,T),h(T,L),h(T,F),h(e,y),h(e,U),h(U,Q),h(e,k),h(e,X),h(X,J),h(e,ee),h(e,se),h(se,ce),h(e,le),h(e,he),h(he,K),h(e,re)},p(j,Ae){var Se,Ne,oe,ie,ge;Ae[0]&1024&&n!==(n=j[40].hole_id+"")&&Ve(s,n),Ae[0]&1024&&a!==(a=j[40].count+"")&&Ve(c,a),Ae[0]&1024&&f!==(f=(((Se=j[40].mean)==null?void 0:Se.toFixed(2))??"-")+"")&&Ve(d,f),Ae[0]&1024&&_!==(_=(((Ne=j[40].median)==null?void 0:Ne.toFixed(2))??"-")+"")&&Ve(m,_),Ae[0]&1024&&b!==(b=(((oe=j[40].std_dev)==null?void 0:oe.toFixed(2))??"-")+"")&&Ve(A,b),Ae[0]&1024&&w!==(w=(((ie=j[40].cv)==null?void 0:ie.toFixed(2))??"-")+"")&&Ve(L,w),Ae[0]&1024&&Y!==(Y=(j[40].max_rise_days??"-")+"")&&Ve(Q,Y),Ae[0]&1024&&W!==(W=(j[40].max_fall_days??"-")+"")&&Ve(J,W),Ae[0]&1024&&ue!==(ue=(((ge=j[40].annual_amplitude)==null?void 0:ge.toFixed(2))??"-")+"")&&Ve(ce,ue),Ae[0]&1024&&z!==(z=(j[40].count>=10&&j[40].anomaly_count!=null?j[40].anomaly_count:"—")+"")&&Ve(K,z)},d(j){j&&S(e)}}}function w0(i){let e,t="<h3>水位分析</h3>",n,s,r,o,a="选择钻孔 (可多选)",c,l,u,f,d=i[2]?"分析中...":"执行统计分析",g,v,_,m,p,x=nt(i[8]),b=[];for(let C=0;C<x.length;C+=1)b[C]=Vu(zu(i,x,C));let A=i[10].length>0&&Hu(i);return{c(){e=M("div"),e.innerHTML=t,n=H(),s=M("div"),r=M("div"),o=M("label"),o.textContent=a,c=H(),l=M("div");for(let C=0;C<b.length;C+=1)b[C].c();u=H(),f=M("button"),g=pe(d),_=H(),A&&A.c(),this.h()},l(C){e=E(C,"DIV",{class:!0,"data-svelte-h":!0}),Pe(e)!=="svelte-7pvpg7"&&(e.innerHTML=t),n=V(C),s=E(C,"DIV",{class:!0});var T=O(s);r=E(T,"DIV",{class:!0,style:!0});var w=O(r);o=E(w,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(o)!=="svelte-5wk8rr"&&(o.textContent=a),c=V(w),l=E(w,"DIV",{class:!0});var L=O(l);for(let y=0;y<b.length;y+=1)b[y].l(L);L.forEach(S),w.forEach(S),u=V(T),f=E(T,"BUTTON",{class:!0,style:!0});var F=O(f);g=de(F,d),F.forEach(S),_=V(T),A&&A.l(T),T.forEach(S),this.h()},h(){R(e,"class","panel-header"),fe(o,"font-size","12px"),R(l,"class","borehole-checkboxes svelte-1gd2qhx"),R(r,"class","form-group"),fe(r,"margin-bottom","8px"),R(f,"class","btn-primary btn-sm"),fe(f,"width","100%"),fe(f,"margin-bottom","12px"),f.disabled=v=i[2]||i[1].length===0,R(s,"class","panel-body scrollable")},m(C,T){ve(C,e,T),ve(C,n,T),ve(C,s,T),h(s,r),h(r,o),h(r,c),h(r,l);for(let w=0;w<b.length;w+=1)b[w]&&b[w].m(l,null);h(s,u),h(s,f),h(f,g),h(s,_),A&&A.m(s,null),m||(p=ze(f,"click",i[13]),m=!0)},p(C,T){if(T[0]&2306){x=nt(C[8]);let w;for(w=0;w<x.length;w+=1){const L=zu(C,x,w);b[w]?b[w].p(L,T):(b[w]=Vu(L),b[w].c(),b[w].m(l,null))}for(;w<b.length;w+=1)b[w].d(1);b.length=x.length}T[0]&4&&d!==(d=C[2]?"分析中...":"执行统计分析")&&Ve(g,d),T[0]&6&&v!==(v=C[2]||C[1].length===0)&&(f.disabled=v),C[10].length>0?A?A.p(C,T):(A=Hu(C),A.c(),A.m(s,null)):A&&(A.d(1),A=null)},i:yt,o:yt,d(C){C&&(S(e),S(n),S(s)),Et(b,C),A&&A.d(),m=!1,p()}}}function Yu(i){return i==="显著上升"?"color: #4caf50;":i==="显著下降"?"color: #f44336;":"color: #9e9e9e;"}function Ku(i){return i==="显著上升"?"↑":i==="显著下降"?"↓":"—"}function A0(i,e,t){let n,s,r,o,a,c;Je(i,cs,D=>t(36,n=D)),Je(i,Gn,D=>t(8,s=D)),Je(i,sa,D=>t(22,r=D)),Je(i,ia,D=>t(9,o=D)),Je(i,na,D=>t(10,a=D)),Je(i,Bn,D=>t(37,c=D));let l=[],u=!1,f,d="stats",g,v=[],_=null,m=!1,p=null,x=null,b=null,A=null;function C(D){l.includes(D)?t(1,l=l.filter(I=>I!==D)):t(1,l=[...l,D])}function T(D){v.includes(D)?t(0,v=v.filter(I=>I!==D)):v.length<6?t(0,v=[...v,D]):$e("最多只能选择6个钻孔进行对比","warning")}async function w(){if(!(!c||l.length===0)){t(2,u=!0);try{const[D,I,Ee]=await Promise.all([ht.getWaterLevelStats(c.id,l),ht.getWaterLevelMKTest(c.id,l),ht.getWaterLevelBoxplot(c.id,l)]);st(na,a=D,a),st(ia,o=I,o),st(sa,r=Ee,r),setTimeout(L,50)}catch(D){$e(`分析失败: ${D.message}`,"error")}finally{t(2,u=!1)}}}function L(){if(!f)return;const D=f,I=D.getContext("2d"),Ee=window.devicePixelRatio||1,Me=D.getBoundingClientRect();D.width=Me.width*Ee,D.height=Me.height*Ee,I.scale(Ee,Ee);const Re=Me.width,j=Me.height;if(I.fillStyle="#1a1d23",I.fillRect(0,0,Re,j),!r||r.length===0){I.fillStyle="#888",I.font="13px sans-serif",I.textAlign="center",I.fillText("请执行分析后查看箱线图",Re/2,j/2);return}const Ae=r.filter(Z=>Z.boxplot);if(Ae.length===0){I.fillStyle="#888",I.font="13px sans-serif",I.textAlign="center",I.fillText("无有效箱线图数据",Re/2,j/2);return}const Se={top:20,right:20,bottom:50,left:60},Ne=Re-Se.left-Se.right,oe=j-Se.top-Se.bottom;let ie=1/0,ge=-1/0;Ae.forEach(Z=>{Z.boxplot.whisker_low<ie&&(ie=Z.boxplot.whisker_low),Z.boxplot.whisker_high>ge&&(ge=Z.boxplot.whisker_high)});const B=(ge-ie)*.1||1;ie-=B,ge+=B;const P=Z=>Se.top+oe-(Z-ie)/(ge-ie)*oe;I.strokeStyle="#333",I.lineWidth=1;for(let Z=0;Z<=5;Z++){const me=Se.top+Z/5*oe;I.beginPath(),I.moveTo(Se.left,me),I.lineTo(Re-Se.right,me),I.stroke();const _e=ge-Z/5*(ge-ie);I.fillStyle="#888",I.font="10px sans-serif",I.textAlign="right",I.fillText(_e.toFixed(2),Se.left-6,me+3)}const xe=Math.min(60,Ne/Ae.length*.6),te=Ne/Ae.length,N=["#4fc3f7","#81c784","#ffb74d","#e57373","#ba68c8","#4dd0e1"];Ae.forEach((Z,me)=>{const _e=Se.left+te*(me+.5),$=Z.boxplot,ae=N[me%N.length],be=P($.q1),ye=P($.q3),Te=P($.median),Ce=P($.whisker_low),Ye=P($.whisker_high);I.strokeStyle=ae,I.lineWidth=1,I.beginPath(),I.moveTo(_e,Ce),I.lineTo(_e,be),I.stroke(),I.beginPath(),I.moveTo(_e,ye),I.lineTo(_e,Ye),I.stroke(),I.beginPath(),I.moveTo(_e-xe*.3,Ce),I.lineTo(_e+xe*.3,Ce),I.stroke(),I.beginPath(),I.moveTo(_e-xe*.3,Ye),I.lineTo(_e+xe*.3,Ye),I.stroke(),I.fillStyle=ae+"40",I.strokeStyle=ae,I.lineWidth=1.5;const Oe=_e-xe/2,Le=Math.min(be,ye),Be=Math.abs(ye-be);I.fillRect(Oe,Le,xe,Be),I.strokeRect(Oe,Le,xe,Be),I.strokeStyle="#fff",I.lineWidth=2,I.beginPath(),I.moveTo(Oe,Te),I.lineTo(Oe+xe,Te),I.stroke(),$.outliers&&$.outliers.length>0&&(I.fillStyle=ae,$.outliers.forEach(q=>{const ke=P(q);I.beginPath(),I.arc(_e,ke,3,0,Math.PI*2),I.fill()})),I.fillStyle="#ccc",I.font="10px sans-serif",I.textAlign="center",I.fillText(Z.hole_id,_e,j-Se.bottom+18)}),I.fillStyle="#888",I.font="11px sans-serif",I.textAlign="center",I.fillText("水位标高 (m)",14,j/2)}const F=["#4fc3f7","#81c784","#ffb74d","#e57373","#ba68c8","#4dd0e1"];function y(){if(!g)return;const D=g,I=D.getContext("2d"),Ee=window.devicePixelRatio||1,Me=D.getBoundingClientRect();D.width=Me.width*Ee,D.height=Me.height*Ee,I.scale(Ee,Ee);const Re=Me.width,j=Me.height;if(I.fillStyle="#1a1d23",I.fillRect(0,0,Re,j),v.length<2){I.fillStyle="#888",I.font="13px sans-serif",I.textAlign="center",I.fillText('请选择2~6个钻孔后点击"生成对比图"',Re/2,j/2);return}const Ae={};let Se=[],Ne=[];v.forEach(be=>{const ye=n.filter(Te=>Te.borehole_id===be).sort((Te,Ce)=>new Date(Te.obs_date)-new Date(Ce.obs_date));Ae[be]=ye,ye.forEach(Te=>{Se.push(new Date(Te.obs_date).getTime()),Ne.push(Te.water_level)})});const oe=v.filter(be=>(Ae[be]||[]).length>0);if(oe.length<2){I.fillStyle="#888",I.font="13px sans-serif",I.textAlign="center",I.fillText("选中的钻孔中至少需要2个有数据",Re/2,j/2);return}const ie={top:40,right:20,bottom:60,left:60},ge=Re-ie.left-ie.right,B=j-ie.top-ie.bottom;let P=Math.min(...Se),xe=Math.max(...Se);_&&(P=_[0],xe=_[1]);const te=Math.min(...Ne),N=Math.max(...Ne),Z=(N-te)*.1||1,me=be=>ie.left+(be-P)/(xe-P||1)*ge,_e=be=>ie.top+B-(be-(te-Z))/(N+Z-(te-Z)||1)*B;I.strokeStyle="#333",I.lineWidth=1;for(let be=0;be<=5;be++){const ye=ie.top+be/5*B;I.beginPath(),I.moveTo(ie.left,ye),I.lineTo(Re-ie.right,ye),I.stroke();const Te=N+Z-be/5*(N+Z-(te-Z));I.fillStyle="#888",I.font="10px sans-serif",I.textAlign="right",I.fillText(Te.toFixed(2),ie.left-6,ye+3)}for(let be=0;be<=5;be++){const ye=ie.left+be/5*ge,Te=new Date(P+be/5*(xe-P));I.fillStyle="#888",I.font="10px sans-serif",I.textAlign="center",I.fillText(`${Te.getFullYear()}-${String(Te.getMonth()+1).padStart(2,"0")}`,ye,j-ie.bottom+18)}I.fillStyle="#888",I.font="11px sans-serif",I.textAlign="center",I.fillText("日期",Re/2,j-4),I.save(),I.translate(12,j/2),I.rotate(-Math.PI/2),I.fillText("水位标高 (m)",0,0),I.restore(),oe.forEach((be,ye)=>{const Te=F[ye%F.length],Ce=Ae[be];s.find(Oe=>Oe.id===be),I.strokeStyle=Te,I.lineWidth=2,I.beginPath();let Ye=!1;Ce.forEach(Oe=>{const Le=new Date(Oe.obs_date).getTime();if(Le<P||Le>xe)return;const Be=me(Le),q=_e(Oe.water_level);Ye?I.lineTo(Be,q):(I.moveTo(Be,q),Ye=!0)}),I.stroke(),I.fillStyle=Te,Ce.forEach(Oe=>{const Le=new Date(Oe.obs_date).getTime();if(Le<P||Le>xe)return;const Be=me(Le),q=_e(Oe.water_level);I.beginPath(),I.arc(Be,q,3,0,Math.PI*2),I.fill()})});const $=8;let ae=ie.left;if(oe.forEach((be,ye)=>{const Te=F[ye%F.length],Ce=s.find(Oe=>Oe.id===be),Ye=(Ce==null?void 0:Ce.hole_id)||be;I.fillStyle=Te,I.fillRect(ae,$,12,12),I.fillStyle="#ccc",I.font="10px sans-serif",I.textAlign="left",I.fillText(Ye,ae+16,$+10),ae+=I.measureText(Ye).width+40}),m&&p&&x){const be=Math.min(p.x,x.x),ye=Math.max(p.x,x.x);I.fillStyle="rgba(33, 150, 243, 0.2)",I.fillRect(be,ie.top,ye-be,B),I.strokeStyle="rgba(33, 150, 243, 0.6)",I.lineWidth=1,I.setLineDash([4,4]),I.strokeRect(be,ie.top,ye-be,B),I.setLineDash([])}if(b!=null&&b>=ie.left&&b<=Re-ie.right){I.strokeStyle="rgba(255, 255, 255, 0.5)",I.lineWidth=1,I.setLineDash([4,4]),I.beginPath(),I.moveTo(b,ie.top),I.lineTo(b,ie.top+B),I.stroke(),I.setLineDash([]);const be=P+(b-ie.left)/ge*(xe-P),ye=new Date(be);ye.setHours(0,0,0,0);const Te=[];oe.forEach(Ce=>{const Ye=Ae[Ce],Oe=s.find(q=>q.id===Ce);let Le=null,Be=1/0;Ye.forEach(q=>{const ke=new Date(q.obs_date);ke.setHours(0,0,0,0);const je=Math.abs(ke-ye);je<Be&&je<14*24*3600*1e3&&(Be=je,Le=q)}),Te.push({hole_id:(Oe==null?void 0:Oe.hole_id)||Ce,record:Le,borehole_id:Ce})}),t(7,A={x:b,date:ye,data:Te})}}function U(D){const I=g.getBoundingClientRect();return{x:D.clientX-I.left,y:D.clientY-I.top}}function Y(D){if(v.length<2||!_&&v.length<2)return;const I=U(D);m=!0,p=I,x=I}function Q(D){const I=U(D);m?x=I:b=I.x,y()}function k(D){if(m&&p&&x){const I=Math.min(p.x,x.x),Ee=Math.max(p.x,x.x);if(Ee-I>10){const Me={left:60,right:20},j=g.getBoundingClientRect().width-Me.left-Me.right,Ae=[];v.forEach(ge=>{n.filter(B=>B.borehole_id===ge).forEach(B=>{Ae.push(new Date(B.obs_date).getTime())})});let Se=Math.min(...Ae),Ne=Math.max(...Ae);_&&(Se=_[0],Ne=_[1]);const oe=Se+(I-Me.left)/j*(Ne-Se),ie=Se+(Ee-Me.left)/j*(Ne-Se);t(6,_=[oe,ie])}}m=!1,p=null,x=null,y()}function X(){t(6,_=null),y()}function W(){b=null,t(7,A=null),m=!1,p=null,x=null,y()}function J(){if(v.length<2){$e("请至少选择2个钻孔","warning");return}if(v.length>6){$e("最多只能选择6个钻孔","warning");return}t(6,_=null),setTimeout(y,50)}const ee=D=>C(D.id),se=()=>t(4,d="stats"),ue=()=>t(4,d="mk"),ce=()=>t(4,d="boxplot"),le=()=>t(4,d="compare");function he(D){ni[D?"unshift":"push"](()=>{f=D,t(3,f)})}const z=D=>T(D.id),K=()=>{t(6,_=null),setTimeout(y,10)};function re(D){ni[D?"unshift":"push"](()=>{g=D,t(5,g)})}return i.$$.update=()=>{i.$$.dirty[0]&4194304&&r&&r.length>0&&setTimeout(L,50),i.$$.dirty[0]&1&&v&&v.length>=2&&setTimeout(y,50)},[v,l,u,f,d,g,_,A,s,o,a,C,T,w,F,y,Y,Q,k,X,W,J,r,ee,se,ue,ce,le,he,z,K,re]}class C0 extends pn{constructor(e){super(),mn(this,e,A0,w0,dn,{},null,[-1,-1])}}function Zu(i,e,t){const n=i.slice();return n[29]=e[t],n}function R0(i){let e,t,n,s="起始日期",r,o,a,c,l,u="结束日期",f,d,g,v;return{c(){e=M("div"),t=M("div"),n=M("label"),n.textContent=s,r=H(),o=M("input"),a=H(),c=M("div"),l=M("label"),l.textContent=u,f=H(),d=M("input"),this.h()},l(_){e=E(_,"DIV",{class:!0});var m=O(e);t=E(m,"DIV",{class:!0});var p=O(t);n=E(p,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(n)!=="svelte-adhmnz"&&(n.textContent=s),r=V(p),o=E(p,"INPUT",{type:!0,style:!0}),p.forEach(S),a=V(m),c=E(m,"DIV",{class:!0});var x=O(c);l=E(x,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(l)!=="svelte-4ph25r"&&(l.textContent=u),f=V(x),d=E(x,"INPUT",{type:!0,style:!0}),x.forEach(S),m.forEach(S),this.h()},h(){fe(n,"font-size","12px"),R(o,"type","date"),fe(o,"width","100%"),fe(o,"font-size","12px"),R(t,"class","form-group"),fe(l,"font-size","12px"),R(d,"type","date"),fe(d,"width","100%"),fe(d,"font-size","12px"),R(c,"class","form-group"),R(e,"class","form-row")},m(_,m){ve(_,e,m),h(e,t),h(t,n),h(t,r),h(t,o),Ke(o,i[4]),h(e,a),h(e,c),h(c,l),h(c,f),h(c,d),Ke(d,i[5]),g||(v=[ze(o,"input",i[20]),ze(d,"input",i[21])],g=!0)},p(_,m){m[0]&16&&Ke(o,_[4]),m[0]&32&&Ke(d,_[5])},d(_){_&&S(e),g=!1,Ct(v)}}}function P0(i){let e,t,n="观测日期",s,r,o,a;return{c(){e=M("div"),t=M("label"),t.textContent=n,s=H(),r=M("input"),this.h()},l(c){e=E(c,"DIV",{class:!0});var l=O(e);t=E(l,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(t)!=="svelte-1ax8ghg"&&(t.textContent=n),s=V(l),r=E(l,"INPUT",{type:!0,style:!0}),l.forEach(S),this.h()},h(){fe(t,"font-size","12px"),R(r,"type","date"),fe(r,"width","100%"),fe(r,"font-size","12px"),R(e,"class","form-group")},m(c,l){ve(c,e,l),h(e,t),h(e,s),h(e,r),Ke(r,i[3]),o||(a=ze(r,"input",i[19]),o=!0)},p(c,l){l[0]&8&&Ke(r,c[3])},d(c){c&&S(e),o=!1,a()}}}function Ju(i){var le,he;let e,t,n,s="水位范围:",r,o,a=((le=i[1].water_level_min)==null?void 0:le.toFixed(2))+"",c,l,u=((he=i[1].water_level_max)==null?void 0:he.toFixed(2))+"",f,d,g,v,_,m,p,x,b,A,C,T=i[14].toFixed(1)+"",w,L,F,y,U,Y,Q,k="水位面与地层面交线",X,W,J,ee;function se(z,K){return z[11].length>0?D0:L0}let ue=se(i),ce=ue(i);return{c(){e=M("div"),t=M("div"),n=M("span"),n.textContent=s,r=H(),o=M("span"),c=pe(a),l=pe(" ~ "),f=pe(u),d=pe(" m"),g=H(),v=M("div"),_=M("label"),m=M("input"),p=pe(`
                显示等值面`),x=H(),b=M("div"),A=M("label"),C=pe("透明度: "),w=pe(T),L=H(),F=M("input"),y=H(),U=M("hr"),Y=H(),Q=M("h4"),Q.textContent=k,X=H(),ce.c(),W=It(),this.h()},l(z){e=E(z,"DIV",{class:!0});var K=O(e);t=E(K,"DIV",{class:!0});var re=O(t);n=E(re,"SPAN",{"data-svelte-h":!0}),Pe(n)!=="svelte-1mah59w"&&(n.textContent=s),r=V(re),o=E(re,"SPAN",{});var D=O(o);c=de(D,a),l=de(D," ~ "),f=de(D,u),d=de(D," m"),D.forEach(S),re.forEach(S),K.forEach(S),g=V(z),v=E(z,"DIV",{class:!0,style:!0});var I=O(v);_=E(I,"LABEL",{style:!0});var Ee=O(_);m=E(Ee,"INPUT",{type:!0}),p=de(Ee,`
                显示等值面`),Ee.forEach(S),I.forEach(S),x=V(z),b=E(z,"DIV",{class:!0});var Me=O(b);A=E(Me,"LABEL",{style:!0});var Re=O(A);C=de(Re,"透明度: "),w=de(Re,T),Re.forEach(S),L=V(Me),F=E(Me,"INPUT",{type:!0,min:!0,max:!0,step:!0,style:!0}),Me.forEach(S),y=V(z),U=E(z,"HR",{style:!0}),Y=V(z),Q=E(z,"H4",{style:!0,"data-svelte-h":!0}),Pe(Q)!=="svelte-18xkkxk"&&(Q.textContent=k),X=V(z),ce.l(z),W=It(),this.h()},h(){R(t,"class","info-row svelte-17dv1aw"),R(e,"class","result-info svelte-17dv1aw"),R(m,"type","checkbox"),fe(_,"display","flex"),fe(_,"align-items","center"),fe(_,"gap","6px"),fe(_,"font-size","12px"),R(v,"class","form-group"),fe(v,"margin-top","10px"),fe(A,"font-size","12px"),R(F,"type","range"),R(F,"min","0.1"),R(F,"max","1"),R(F,"step","0.05"),fe(F,"width","100%"),R(b,"class","form-group"),fe(U,"border-color","var(--border)"),fe(U,"margin","12px 0"),fe(Q,"font-size","12px"),fe(Q,"margin-bottom","8px")},m(z,K){ve(z,e,K),h(e,t),h(t,n),h(t,r),h(t,o),h(o,c),h(o,l),h(o,f),h(o,d),ve(z,g,K),ve(z,v,K),h(v,_),h(_,m),m.checked=i[13],h(_,p),ve(z,x,K),ve(z,b,K),h(b,A),h(A,C),h(A,w),h(b,L),h(b,F),Ke(F,i[14]),ve(z,y,K),ve(z,U,K),ve(z,Y,K),ve(z,Q,K),ve(z,X,K),ce.m(z,K),ve(z,W,K),J||(ee=[ze(m,"change",i[25]),ze(F,"change",i[26]),ze(F,"input",i[26])],J=!0)},p(z,K){var re,D;K[0]&2&&a!==(a=((re=z[1].water_level_min)==null?void 0:re.toFixed(2))+"")&&Ve(c,a),K[0]&2&&u!==(u=((D=z[1].water_level_max)==null?void 0:D.toFixed(2))+"")&&Ve(f,u),K[0]&8192&&(m.checked=z[13]),K[0]&16384&&T!==(T=z[14].toFixed(1)+"")&&Ve(w,T),K[0]&16384&&Ke(F,z[14]),ue===(ue=se(z))&&ce?ce.p(z,K):(ce.d(1),ce=ue(z),ce&&(ce.c(),ce.m(W.parentNode,W)))},d(z){z&&(S(e),S(g),S(v),S(x),S(b),S(y),S(U),S(Y),S(Q),S(X),S(W)),ce.d(z),J=!1,Ct(ee)}}}function L0(i){let e,t="需要先完成三维建模才能计算交线";return{c(){e=M("p"),e.textContent=t,this.h()},l(n){e=E(n,"P",{style:!0,"data-svelte-h":!0}),Pe(e)!=="svelte-10sbxyz"&&(e.textContent=t),this.h()},h(){fe(e,"font-size","11px"),fe(e,"color","var(--text-muted)")},m(n,s){ve(n,e,s)},p:yt,d(n){n&&S(e)}}}function D0(i){let e,t,n="选择地层",s,r,o,a="请选择地层",c,l,u,f,d,g,v,_,m=nt(i[11]),p=[];for(let b=0;b<m.length;b+=1)p[b]=Qu(Zu(i,m,b));let x=i[12]&&i[12].length>0&&$u(i);return{c(){e=M("div"),t=M("label"),t.textContent=n,s=H(),r=M("select"),o=M("option"),o.textContent=a;for(let b=0;b<p.length;b+=1)p[b].c();c=H(),l=M("button"),u=pe("计算交线"),d=H(),x&&x.c(),g=It(),this.h()},l(b){e=E(b,"DIV",{class:!0});var A=O(e);t=E(A,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(t)!=="svelte-10as4wd"&&(t.textContent=n),s=V(A),r=E(A,"SELECT",{style:!0});var C=O(r);o=E(C,"OPTION",{"data-svelte-h":!0}),Pe(o)!=="svelte-13g6dt"&&(o.textContent=a);for(let w=0;w<p.length;w+=1)p[w].l(C);C.forEach(S),A.forEach(S),c=V(b),l=E(b,"BUTTON",{class:!0,style:!0});var T=O(l);u=de(T,"计算交线"),T.forEach(S),d=V(b),x&&x.l(b),g=It(),this.h()},h(){fe(t,"font-size","12px"),o.__value="",Ke(o,o.__value),fe(r,"width","100%"),fe(r,"font-size","12px"),i[0]===void 0&&fn(()=>i[27].call(r)),R(e,"class","form-group"),R(l,"class","btn-secondary btn-sm"),fe(l,"width","100%"),l.disabled=f=!i[10]},m(b,A){ve(b,e,A),h(e,t),h(e,s),h(e,r),h(r,o);for(let C=0;C<p.length;C+=1)p[C]&&p[C].m(r,null);Tt(r,i[0],!0),ve(b,c,A),ve(b,l,A),h(l,u),ve(b,d,A),x&&x.m(b,A),ve(b,g,A),v||(_=[ze(r,"change",i[27]),ze(l,"click",i[16])],v=!0)},p(b,A){if(A[0]&2048){m=nt(b[11]);let C;for(C=0;C<m.length;C+=1){const T=Zu(b,m,C);p[C]?p[C].p(T,A):(p[C]=Qu(T),p[C].c(),p[C].m(r,null))}for(;C<p.length;C+=1)p[C].d(1);p.length=m.length}A[0]&2049&&Tt(r,b[0]),A[0]&1024&&f!==(f=!b[10])&&(l.disabled=f),b[12]&&b[12].length>0?x?x.p(b,A):(x=$u(b),x.c(),x.m(g.parentNode,g)):x&&(x.d(1),x=null)},d(b){b&&(S(e),S(c),S(l),S(d),S(g)),Et(p,b),x&&x.d(b),v=!1,Ct(_)}}}function Qu(i){let e,t=i[29]+"",n,s;return{c(){e=M("option"),n=pe(t),this.h()},l(r){e=E(r,"OPTION",{});var o=O(e);n=de(o,t),o.forEach(S),this.h()},h(){e.__value=s=i[29],Ke(e,e.__value)},m(r,o){ve(r,e,o),h(e,n)},p(r,o){o[0]&2048&&t!==(t=r[29]+"")&&Ve(n,t),o[0]&2048&&s!==(s=r[29])&&(e.__value=s,Ke(e,e.__value))},d(r){r&&S(e)}}}function $u(i){let e,t,n="交点数:",s,r,o=i[12].length+"",a;return{c(){e=M("div"),t=M("span"),t.textContent=n,s=H(),r=M("span"),a=pe(o),this.h()},l(c){e=E(c,"DIV",{class:!0,style:!0});var l=O(e);t=E(l,"SPAN",{"data-svelte-h":!0}),Pe(t)!=="svelte-1c4hjfv"&&(t.textContent=n),s=V(l),r=E(l,"SPAN",{});var u=O(r);a=de(u,o),u.forEach(S),l.forEach(S),this.h()},h(){R(e,"class","info-row svelte-17dv1aw"),fe(e,"margin-top","8px")},m(c,l){ve(c,e,l),h(e,t),h(e,s),h(e,r),h(r,a)},p(c,l){l[0]&4096&&o!==(o=c[12].length+"")&&Ve(a,o)},d(c){c&&S(e)}}}function I0(i){let e,t="<h3>水位等值线</h3>",n,s,r,o,a="日期模式",c,l,u,f="单日",d,g="日期范围(取均值)",v,_,m,p,x="变异函数模型",b,A,C,T="球状模型",w,L="指数模型",F,y="高斯模型",U,Y,Q,k,X="网格X",W,J,ee,se,ue,ce="网格Y",le,he,z,K,re=i[9]?"计算中...":"生成等值线",D,I,Ee,Me,Re;function j(oe,ie){return oe[2]==="single"?P0:R0}let Ae=j(i),Se=Ae(i),Ne=i[1]&&Ju(i);return{c(){e=M("div"),e.innerHTML=t,n=H(),s=M("div"),r=M("div"),o=M("label"),o.textContent=a,c=H(),l=M("select"),u=M("option"),u.textContent=f,d=M("option"),d.textContent=g,v=H(),Se.c(),_=H(),m=M("div"),p=M("label"),p.textContent=x,b=H(),A=M("select"),C=M("option"),C.textContent=T,w=M("option"),w.textContent=L,F=M("option"),F.textContent=y,U=H(),Y=M("div"),Q=M("div"),k=M("label"),k.textContent=X,W=H(),J=M("input"),ee=H(),se=M("div"),ue=M("label"),ue.textContent=ce,le=H(),he=M("input"),z=H(),K=M("button"),D=pe(re),Ee=H(),Ne&&Ne.c(),this.h()},l(oe){e=E(oe,"DIV",{class:!0,"data-svelte-h":!0}),Pe(e)!=="svelte-agmq8t"&&(e.innerHTML=t),n=V(oe),s=E(oe,"DIV",{class:!0});var ie=O(s);r=E(ie,"DIV",{class:!0});var ge=O(r);o=E(ge,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(o)!=="svelte-18ghoz1"&&(o.textContent=a),c=V(ge),l=E(ge,"SELECT",{style:!0});var B=O(l);u=E(B,"OPTION",{"data-svelte-h":!0}),Pe(u)!=="svelte-158tu90"&&(u.textContent=f),d=E(B,"OPTION",{"data-svelte-h":!0}),Pe(d)!=="svelte-nsqibw"&&(d.textContent=g),B.forEach(S),ge.forEach(S),v=V(ie),Se.l(ie),_=V(ie),m=E(ie,"DIV",{class:!0});var P=O(m);p=E(P,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(p)!=="svelte-1gmmfbo"&&(p.textContent=x),b=V(P),A=E(P,"SELECT",{style:!0});var xe=O(A);C=E(xe,"OPTION",{"data-svelte-h":!0}),Pe(C)!=="svelte-17ym7v6"&&(C.textContent=T),w=E(xe,"OPTION",{"data-svelte-h":!0}),Pe(w)!=="svelte-bzk8zo"&&(w.textContent=L),F=E(xe,"OPTION",{"data-svelte-h":!0}),Pe(F)!=="svelte-1iqrdsw"&&(F.textContent=y),xe.forEach(S),P.forEach(S),U=V(ie),Y=E(ie,"DIV",{class:!0});var te=O(Y);Q=E(te,"DIV",{class:!0});var N=O(Q);k=E(N,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(k)!=="svelte-v5oz4u"&&(k.textContent=X),W=V(N),J=E(N,"INPUT",{type:!0,min:!0,max:!0,style:!0}),N.forEach(S),ee=V(te),se=E(te,"DIV",{class:!0});var Z=O(se);ue=E(Z,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(ue)!=="svelte-1blztqd"&&(ue.textContent=ce),le=V(Z),he=E(Z,"INPUT",{type:!0,min:!0,max:!0,style:!0}),Z.forEach(S),te.forEach(S),z=V(ie),K=E(ie,"BUTTON",{class:!0,style:!0});var me=O(K);D=de(me,re),me.forEach(S),Ee=V(ie),Ne&&Ne.l(ie),ie.forEach(S),this.h()},h(){R(e,"class","panel-header"),fe(o,"font-size","12px"),u.__value="single",Ke(u,u.__value),d.__value="range",Ke(d,d.__value),fe(l,"width","100%"),fe(l,"font-size","12px"),i[2]===void 0&&fn(()=>i[18].call(l)),R(r,"class","form-group"),fe(p,"font-size","12px"),C.__value="spherical",Ke(C,C.__value),w.__value="exponential",Ke(w,w.__value),F.__value="gaussian",Ke(F,F.__value),fe(A,"width","100%"),fe(A,"font-size","12px"),i[6]===void 0&&fn(()=>i[22].call(A)),R(m,"class","form-group"),fe(k,"font-size","12px"),R(J,"type","number"),R(J,"min","5"),R(J,"max","100"),fe(J,"width","100%"),fe(J,"font-size","12px"),R(Q,"class","form-group"),fe(ue,"font-size","12px"),R(he,"type","number"),R(he,"min","5"),R(he,"max","100"),fe(he,"width","100%"),fe(he,"font-size","12px"),R(se,"class","form-group"),R(Y,"class","form-row"),R(K,"class","btn-primary btn-sm"),fe(K,"width","100%"),fe(K,"margin-bottom","12px"),K.disabled=I=i[9]||!i[3]&&i[2]==="single"||!i[4]&&i[2]==="range",R(s,"class","panel-body scrollable")},m(oe,ie){ve(oe,e,ie),ve(oe,n,ie),ve(oe,s,ie),h(s,r),h(r,o),h(r,c),h(r,l),h(l,u),h(l,d),Tt(l,i[2],!0),h(s,v),Se.m(s,null),h(s,_),h(s,m),h(m,p),h(m,b),h(m,A),h(A,C),h(A,w),h(A,F),Tt(A,i[6],!0),h(s,U),h(s,Y),h(Y,Q),h(Q,k),h(Q,W),h(Q,J),Ke(J,i[7]),h(Y,ee),h(Y,se),h(se,ue),h(se,le),h(se,he),Ke(he,i[8]),h(s,z),h(s,K),h(K,D),h(s,Ee),Ne&&Ne.m(s,null),Me||(Re=[ze(l,"change",i[18]),ze(A,"change",i[22]),ze(J,"input",i[23]),ze(he,"input",i[24]),ze(K,"click",i[15])],Me=!0)},p(oe,ie){ie[0]&4&&Tt(l,oe[2]),Ae===(Ae=j(oe))&&Se?Se.p(oe,ie):(Se.d(1),Se=Ae(oe),Se&&(Se.c(),Se.m(s,_))),ie[0]&64&&Tt(A,oe[6]),ie[0]&128&&lt(J.value)!==oe[7]&&Ke(J,oe[7]),ie[0]&256&&lt(he.value)!==oe[8]&&Ke(he,oe[8]),ie[0]&512&&re!==(re=oe[9]?"计算中...":"生成等值线")&&Ve(D,re),ie[0]&540&&I!==(I=oe[9]||!oe[3]&&oe[2]==="single"||!oe[4]&&oe[2]==="range")&&(K.disabled=I),oe[1]?Ne?Ne.p(oe,ie):(Ne=Ju(oe),Ne.c(),Ne.m(s,null)):Ne&&(Ne.d(1),Ne=null)},i:yt,o:yt,d(oe){oe&&(S(e),S(n),S(s)),Se.d(),Ne&&Ne.d(),Me=!1,Ct(Re)}}}function N0(i,e,t){let n,s,r,o,a,c,l,u;Je(i,xr,W=>t(12,r=W)),Je(i,Ls,W=>t(17,o=W)),Je(i,zn,W=>t(1,a=W)),Je(i,Un,W=>t(13,c=W)),Je(i,Bn,W=>t(28,l=W)),Je(i,br,W=>t(14,u=W));let f="single",d="",g="",v="",_="spherical",m=50,p=50,x=!1,b="";async function A(){if(l){t(9,x=!0);try{const W={variogram_model:_,grid_nx:m,grid_ny:p};f==="single"&&d?W.obs_date=d:f==="range"&&g&&v&&(W.date_from=g,W.date_to=v);const J=await ht.krigingWaterLevel(l.id,W);st(zn,a=J,a),st(Un,c=!0,c),$e("水位等值线生成完成","success")}catch(W){$e(`等值线计算失败: ${W.message}`,"error")}finally{t(9,x=!1)}}}function C(){var Ee,Me,Re,j,Ae,Se,Ne,oe;if(!a||!o||!b)return;const W=a,J=o,ee=W.grid,se=W.water_level_grid,ue=J.grid,ce=J.surfaces[b];if(!(ce!=null&&ce.top)){$e("该地层顶面数据不可用","error");return}const le=ee.nx,he=ee.ny,z=ue.nx,K=ue.ny,re=ee.lon_max-ee.lon_min,D=ee.lat_max-ee.lat_min;ue.lon_max-ue.lon_min,ue.lat_max-ue.lat_min;const I=[];for(let ie=0;ie<Math.min(he,K)-1;ie++)for(let ge=0;ge<Math.min(le,z)-1;ge++){const B=(Ee=se[ie])==null?void 0:Ee[ge],P=(Me=se[ie])==null?void 0:Me[ge+1],xe=(Re=se[ie+1])==null?void 0:Re[ge],te=(j=se[ie+1])==null?void 0:j[ge+1],N=Math.min(Math.floor(ge/(le-1)*(z-1)),z-2),Z=Math.min(Math.floor(ie/(he-1)*(K-1)),K-2),me=(Ae=ce.top[Z])==null?void 0:Ae[N],_e=(Se=ce.top[Z])==null?void 0:Se[N+1],$=(Ne=ce.top[Z+1])==null?void 0:Ne[N],ae=(oe=ce.top[Z+1])==null?void 0:oe[N+1];if(B==null||P==null||xe==null||te==null||me==null||_e==null||$==null||ae==null)continue;const be=[{i:ge,j:ie,wl:B,top:me},{i:ge+1,j:ie,wl:P,top:_e},{i:ge+1,j:ie+1,wl:te,top:ae},{i:ge,j:ie+1,wl:xe,top:$}],ye=[[be[0],be[1]],[be[1],be[2]],[be[2],be[3]],[be[3],be[0]]];for(const[Te,Ce]of ye){const Ye=Te.wl-Te.top,Oe=Ce.wl-Ce.top;if(Ye*Oe<0){const Le=Ye/(Ye-Oe),Be=ee.lon_min+(Te.i+Le*(Ce.i-Te.i))/(le-1)*re,q=ee.lat_min+(Te.j+Le*(Ce.j-Te.j))/(he-1)*D,ke=Te.top+Le*(Ce.top-Te.top);I.push({longitude:Be,latitude:q,elevation:ke})}}}st(xr,r=I,r),I.length>0?$e(`交线计算完成，共 ${I.length} 个交点`,"success"):$e("水位面与该地层顶面无交线","info")}function T(){f=hn(this),t(2,f)}function w(){d=this.value,t(3,d)}function L(){g=this.value,t(4,g)}function F(){v=this.value,t(5,v)}function y(){_=hn(this),t(6,_)}function U(){m=lt(this.value),t(7,m)}function Y(){p=lt(this.value),t(8,p)}function Q(){c=this.checked,Un.set(c)}function k(){u=lt(this.value),br.set(u)}function X(){b=hn(this),t(0,b),t(11,n),t(17,o)}return i.$$.update=()=>{i.$$.dirty[0]&131072&&t(11,n=(o==null?void 0:o.lithologies)||[]),i.$$.dirty[0]&131075&&t(10,s=a&&b&&o)},[b,a,f,d,g,v,_,m,p,x,s,n,r,c,u,A,C,o,T,w,L,F,y,U,Y,Q,k,X]}class U0 extends pn{constructor(e){super(),mn(this,e,N0,I0,dn,{},null,[-1,-1])}}function eh(i){let e,t,n;return{c(){e=M("div"),t=pe("当前日期: "),n=pe(i[5]),this.h()},l(s){e=E(s,"DIV",{class:!0});var r=O(e);t=de(r,"当前日期: "),n=de(r,i[5]),r.forEach(S),this.h()},h(){R(e,"class","current-date-display svelte-b6qn9o")},m(s,r){ve(s,e,r),h(e,t),h(e,n)},p(s,r){r&32&&Ve(n,s[5])},d(s){s&&S(e)}}}function th(i){let e,t,n,s,r;return{c(){e=M("button"),t=pe("开始回放"),this.h()},l(o){e=E(o,"BUTTON",{class:!0,style:!0});var a=O(e);t=de(a,"开始回放"),a.forEach(S),this.h()},h(){R(e,"class","btn-primary btn-sm"),fe(e,"width","100%"),fe(e,"margin-top","8px"),e.disabled=n=!i[0]||!i[1]||!i[8]},m(o,a){ve(o,e,a),h(e,t),s||(r=ze(e,"click",i[9]),s=!0)},p(o,a){a&259&&n!==(n=!o[0]||!o[1]||!o[8])&&(e.disabled=n)},d(o){o&&S(e),s=!1,r()}}}function nh(i){let e,t,n,s=i[6].length+"",r,o,a,c,l=i[7]+1+"",u,f,d=i[6].length+"",g;return{c(){e=M("div"),t=M("span"),n=pe("帧数: "),r=pe(s),o=H(),a=M("span"),c=pe("当前帧: "),u=pe(l),f=pe("/"),g=pe(d),this.h()},l(v){e=E(v,"DIV",{class:!0});var _=O(e);t=E(_,"SPAN",{});var m=O(t);n=de(m,"帧数: "),r=de(m,s),m.forEach(S),o=V(_),a=E(_,"SPAN",{});var p=O(a);c=de(p,"当前帧: "),u=de(p,l),f=de(p,"/"),g=de(p,d),p.forEach(S),_.forEach(S),this.h()},h(){R(e,"class","playback-info svelte-b6qn9o")},m(v,_){ve(v,e,_),h(e,t),h(t,n),h(t,r),h(e,o),h(e,a),h(a,c),h(a,u),h(a,f),h(a,g)},p(v,_){_&64&&s!==(s=v[6].length+"")&&Ve(r,s),_&128&&l!==(l=v[7]+1+"")&&Ve(u,l),_&64&&d!==(d=v[6].length+"")&&Ve(g,d)},d(v){v&&S(e)}}}function F0(i){let e,t="<h3>水位动态回放</h3>",n,s,r,o,a="起始日期",c,l,u,f,d,g="结束日期",v,_,m,p,x,b="播放速度",A,C,T,w="1 天/秒",L,F="7 天/秒",y,U="30 天/秒",Y,Q,k,X=i[3]?"⏸":"▶",W,J,ee,se,ue="⏹",ce,le,he,z,K,re,D,I,Ee,Me=i[5]&&eh(i),Re=!i[3]&&i[6].length===0&&th(i),j=i[6].length>0&&nh(i);return{c(){e=M("div"),e.innerHTML=t,n=H(),s=M("div"),r=M("div"),o=M("label"),o.textContent=a,c=H(),l=M("input"),u=H(),f=M("div"),d=M("label"),d.textContent=g,v=H(),_=M("input"),m=H(),p=M("div"),x=M("label"),x.textContent=b,A=H(),C=M("select"),T=M("option"),T.textContent=w,L=M("option"),L.textContent=F,y=M("option"),y.textContent=U,Y=H(),Q=M("div"),k=M("button"),W=pe(X),ee=H(),se=M("button"),se.textContent=ue,ce=H(),le=M("div"),he=M("div"),z=M("div"),K=H(),Me&&Me.c(),re=H(),Re&&Re.c(),D=H(),j&&j.c(),this.h()},l(Ae){e=E(Ae,"DIV",{class:!0,"data-svelte-h":!0}),Pe(e)!=="svelte-1v7985g"&&(e.innerHTML=t),n=V(Ae),s=E(Ae,"DIV",{class:!0});var Se=O(s);r=E(Se,"DIV",{class:!0});var Ne=O(r);o=E(Ne,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(o)!=="svelte-adhmnz"&&(o.textContent=a),c=V(Ne),l=E(Ne,"INPUT",{type:!0,style:!0}),Ne.forEach(S),u=V(Se),f=E(Se,"DIV",{class:!0});var oe=O(f);d=E(oe,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(d)!=="svelte-4ph25r"&&(d.textContent=g),v=V(oe),_=E(oe,"INPUT",{type:!0,style:!0}),oe.forEach(S),m=V(Se),p=E(Se,"DIV",{class:!0});var ie=O(p);x=E(ie,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(x)!=="svelte-usmb6n"&&(x.textContent=b),A=V(ie),C=E(ie,"SELECT",{style:!0});var ge=O(C);T=E(ge,"OPTION",{"data-svelte-h":!0}),Pe(T)!=="svelte-1humdvw"&&(T.textContent=w),L=E(ge,"OPTION",{"data-svelte-h":!0}),Pe(L)!=="svelte-17dltp0"&&(L.textContent=F),y=E(ge,"OPTION",{"data-svelte-h":!0}),Pe(y)!=="svelte-4ot9n8"&&(y.textContent=U),ge.forEach(S),ie.forEach(S),Y=V(Se),Q=E(Se,"DIV",{class:!0});var B=O(Q);k=E(B,"BUTTON",{class:!0});var P=O(k);W=de(P,X),P.forEach(S),ee=V(B),se=E(B,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(se)!=="svelte-1iouqet"&&(se.textContent=ue),B.forEach(S),ce=V(Se),le=E(Se,"DIV",{class:!0});var xe=O(le);he=E(xe,"DIV",{class:!0});var te=O(he);z=E(te,"DIV",{class:!0,style:!0}),O(z).forEach(S),te.forEach(S),xe.forEach(S),K=V(Se),Me&&Me.l(Se),re=V(Se),Re&&Re.l(Se),D=V(Se),j&&j.l(Se),Se.forEach(S),this.h()},h(){R(e,"class","panel-header"),fe(o,"font-size","12px"),R(l,"type","date"),fe(l,"width","100%"),fe(l,"font-size","12px"),R(r,"class","form-group"),fe(d,"font-size","12px"),R(_,"type","date"),fe(_,"width","100%"),fe(_,"font-size","12px"),R(f,"class","form-group"),fe(x,"font-size","12px"),T.__value=1,Ke(T,T.__value),L.__value=7,Ke(L,L.__value),y.__value=30,Ke(y,y.__value),fe(C,"width","100%"),fe(C,"font-size","12px"),i[2]===void 0&&fn(()=>i[15].call(C)),R(p,"class","form-group"),R(k,"class","btn-icon svelte-b6qn9o"),k.disabled=J=!i[0]||!i[1],R(se,"class","btn-icon svelte-b6qn9o"),R(Q,"class","playback-controls svelte-b6qn9o"),R(z,"class","progress-bar-fill svelte-b6qn9o"),fe(z,"width",i[4]+"%"),R(he,"class","progress-bar-track svelte-b6qn9o"),R(le,"class","progress-bar-container svelte-b6qn9o"),R(s,"class","panel-body scrollable")},m(Ae,Se){ve(Ae,e,Se),ve(Ae,n,Se),ve(Ae,s,Se),h(s,r),h(r,o),h(r,c),h(r,l),Ke(l,i[0]),h(s,u),h(s,f),h(f,d),h(f,v),h(f,_),Ke(_,i[1]),h(s,m),h(s,p),h(p,x),h(p,A),h(p,C),h(C,T),h(C,L),h(C,y),Tt(C,i[2],!0),h(s,Y),h(s,Q),h(Q,k),h(k,W),h(Q,ee),h(Q,se),h(s,ce),h(s,le),h(le,he),h(he,z),h(s,K),Me&&Me.m(s,null),h(s,re),Re&&Re.m(s,null),h(s,D),j&&j.m(s,null),I||(Ee=[ze(l,"input",i[13]),ze(_,"input",i[14]),ze(C,"change",i[15]),ze(k,"click",i[10]),ze(se,"click",i[11]),ze(le,"click",i[12])],I=!0)},p(Ae,[Se]){Se&1&&Ke(l,Ae[0]),Se&2&&Ke(_,Ae[1]),Se&4&&Tt(C,Ae[2]),Se&8&&X!==(X=Ae[3]?"⏸":"▶")&&Ve(W,X),Se&3&&J!==(J=!Ae[0]||!Ae[1])&&(k.disabled=J),Se&16&&fe(z,"width",Ae[4]+"%"),Ae[5]?Me?Me.p(Ae,Se):(Me=eh(Ae),Me.c(),Me.m(s,re)):Me&&(Me.d(1),Me=null),!Ae[3]&&Ae[6].length===0?Re?Re.p(Ae,Se):(Re=th(Ae),Re.c(),Re.m(s,D)):Re&&(Re.d(1),Re=null),Ae[6].length>0?j?j.p(Ae,Se):(j=nh(Ae),j.c(),j.m(s,null)):j&&(j.d(1),j=null)},i:yt,o:yt,d(Ae){Ae&&(S(e),S(n),S(s)),Me&&Me.d(),Re&&Re.d(),j&&j.d(),I=!1,Ct(Ee)}}}function O0(i,e,t){var o,a;if(!i||!e)return i||e;const n=i.length;if(n===0)return i;const s=i[0].length,r=[];for(let c=0;c<n;c++){const l=[];for(let u=0;u<s;u++){const f=((o=i[c])==null?void 0:o[u])??0,d=((a=e[c])==null?void 0:a[u])??0;l.push(f+(d-f)*t)}r.push(l)}return r}function ih(i,e,t){const n=i.result,s=e.result,r=O0(n.water_level_grid,s.water_level_grid,t),o=n.water_level_min,a=n.water_level_max,c=s.water_level_min,l=s.water_level_max;return{grid:n.grid,water_level_grid:r,variance_grid:n.variance_grid,water_level_min:o+(c-o)*t,water_level_max:a+(l-a)*t}}function sh(i){const e=new Date(i);return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function k0(i,e,t){let n,s,r,o,a;Je(i,ra,k=>t(20,n=k)),Je(i,Un,k=>t(21,s=k)),Je(i,zn,k=>t(22,r=k)),Je(i,Bn,k=>t(8,o=k)),Je(i,cs,k=>t(23,a=k));let c="",l="",u=7,f=!1,d=0,g="",v=null,_=0,m=[],p=0,x=0,b=1e3/u;function A(){const k=new Set;return a.forEach(X=>{const W=X.obs_date;(!c||W>=c)&&(!l||W<=l)&&k.add(W)}),Array.from(k).sort()}async function C(){if(!o)return;const k=A();if(k.length<2){$e("日期范围内的数据不足，无法回放","warning");return}t(3,f=!0),t(4,d=0),t(6,m=[]),t(7,x=0),p=0;const X=Math.max(1,Math.floor(k.length/300)),W=k.filter((J,ee)=>ee%X===0||ee===k.length-1);for(let J=0;J<W.length;J++)try{const ee=await ht.krigingWaterLevel(o.id,{obs_date:W[J],variogram_model:"spherical",grid_nx:40,grid_ny:40});m.push({date:W[J],dateMs:new Date(W[J]).getTime(),result:ee})}catch(ee){console.warn(`Frame ${W[J]} failed:`,ee)}if(m.length<2){t(3,f=!1),$e("无法生成足够的回放帧","error");return}b=1e3/u,_=performance.now(),T()}function T(){if(!f)return;const k=performance.now(),X=k-_;_=k;const W=X/b,J=m[x],ee=x+1;if(ee>=m.length){t(3,f=!1),t(4,d=100),st(zn,r=J.result,r),st(Un,s=!0,s),t(5,g=J.date),$e("回放完成","info");return}const ue=(m[ee].dateMs-J.dateMs)/(1e3*60*60*24),ce=ue>0?W/ue:1;for(p+=ce;p>=1&&x+1<m.length;)p-=1,t(7,x++,x);if(x+1>=m.length){t(3,f=!1),t(4,d=100),st(zn,r=m[m.length-1].result,r),st(Un,s=!0,s),t(5,g=m[m.length-1].date),$e("回放完成","info");return}const le=Math.max(0,Math.min(1,p)),he=ih(m[x],m[x+1],le);st(zn,r=he,r),st(Un,s=!0,s);const z=m[x].dateMs,K=m[x+1].dateMs,re=z+(K-z)*le;t(5,g=sh(re));const D=m[m.length-1].dateMs-m[0].dateMs,I=re-m[0].dateMs;t(4,d=D>0?I/D*100:0),v=requestAnimationFrame(T)}function w(){if(f)t(3,f=!1),v&&cancelAnimationFrame(v);else{if(m.length<2){C();return}x>=m.length-1&&(t(7,x=0),p=0),t(3,f=!0),b=1e3/u,_=performance.now(),T()}}function L(){t(3,f=!1),v&&cancelAnimationFrame(v),t(7,x=0),p=0,t(4,d=0),t(5,g="")}function F(k){if(m.length<2)return;const X=m[m.length-1].dateMs-m[0].dateMs,W=m[0].dateMs+k/100*X;let J=0;for(let se=0;se<m.length-1;se++){if(m[se].dateMs<=W&&m[se+1].dateMs>W){J=se;break}se===m.length-2&&(J=se)}t(7,x=J);const ee=m[J+1]?(m[J+1].dateMs-m[J].dateMs)/(1e3*60*60*24):1;if(p=ee>0?(W-m[J].dateMs)/(1e3*60*60*24)/ee:0,p=Math.max(0,Math.min(1,p)),m[J+1]){const se=ih(m[J],m[J+1],p);st(zn,r=se,r),st(Un,s=!0,s),t(5,g=sh(W))}else st(zn,r=m[J].result,r),st(Un,s=!0,s),t(5,g=m[J].date);t(4,d=k)}function y(k){const X=k.target.getBoundingClientRect(),W=(k.clientX-X.left)/X.width*100;F(Math.max(0,Math.min(100,W)))}function U(){c=this.value,t(0,c)}function Y(){l=this.value,t(1,l)}function Q(){u=hn(this),t(2,u)}return i.$$.update=()=>{i.$$.dirty&63&&st(ra,n={playing:f,startDate:c,endDate:l,speed:u,currentDate:g,progress:d},n)},[c,l,u,f,d,g,m,x,o,C,w,L,y,U,Y,Q]}class B0 extends pn{constructor(e){super(),mn(this,e,k0,F0,dn,{})}}function rh(i,e,t){const n=i.slice();return n[40]=e[t],n}function oh(i,e,t){const n=i.slice();return n[43]=e[t],n}function ah(i,e,t){const n=i.slice();return n[43]=e[t],n}function lh(i,e,t){const n=i.slice();return n[43]=e[t],n}function ch(i,e,t){const n=i.slice();return n[50]=e[t],n}function uh(i,e,t){const n=i.slice();return n[53]=e[t],n}function hh(i){let e,t=i[53].name+"",n,s;return{c(){e=M("option"),n=pe(t),this.h()},l(r){e=E(r,"OPTION",{});var o=O(e);n=de(o,t),o.forEach(S),this.h()},h(){e.__value=s=i[53].id,Ke(e,e.__value)},m(r,o){ve(r,e,o),h(e,n)},p(r,o){o[0]&2&&t!==(t=r[53].name+"")&&Ve(n,t),o[0]&2&&s!==(s=r[53].id)&&(e.__value=s,Ke(e,e.__value))},d(r){r&&S(e)}}}function fh(i){let e,t=i[50].icon+"",n,s,r=i[50].label+"",o,a,c,l;function u(){return i[22](i[50])}return{c(){e=M("button"),n=pe(t),s=H(),o=pe(r),a=H(),this.h()},l(f){e=E(f,"BUTTON",{class:!0});var d=O(e);n=de(d,t),s=V(d),o=de(d,r),a=V(d),d.forEach(S),this.h()},h(){R(e,"class","tab-btn svelte-f592h6"),Kt(e,"active",i[6]===i[50].id)},m(f,d){ve(f,e,d),h(e,n),h(e,s),h(e,o),h(e,a),c||(l=ze(e,"click",u),c=!0)},p(f,d){i=f,d[0]&262208&&Kt(e,"active",i[6]===i[50].id)},d(f){f&&S(e),c=!1,l()}}}function dh(i){let e,t,n,s,r=i[0].length+"",o,a,c,l,u=i[5]&&ph(i);return{c(){e=M("div"),t=M("button"),n=pe(`⚠️
                        `),s=M("span"),o=pe(r),a=H(),u&&u.c(),this.h()},l(f){e=E(f,"DIV",{class:!0,style:!0});var d=O(e);t=E(d,"BUTTON",{class:!0,title:!0});var g=O(t);n=de(g,`⚠️
                        `),s=E(g,"SPAN",{class:!0});var v=O(s);o=de(v,r),v.forEach(S),g.forEach(S),a=V(d),u&&u.l(d),d.forEach(S),this.h()},h(){R(s,"class","warning-count-badge svelte-f592h6"),R(t,"class","warning-badge-btn svelte-f592h6"),R(t,"title","水位预警"),R(e,"class","warning-badge-container"),fe(e,"position","relative")},m(f,d){ve(f,e,d),h(e,t),h(t,n),h(t,s),h(s,o),h(e,a),u&&u.m(e,null),c||(l=ze(t,"click",i[23]),c=!0)},p(f,d){d[0]&1&&r!==(r=f[0].length+"")&&Ve(o,r),f[5]?u?u.p(f,d):(u=ph(f),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},d(f){f&&S(e),u&&u.d(),c=!1,l()}}}function ph(i){let e,t,n,s="水位预警摘要",r,o,a="×",c,l,u,f,d,g,v=i[4].red.length>0&&mh(i),_=i[4].orange.length>0&&gh(i),m=i[4].blue.length>0&&bh(i);return{c(){e=M("div"),t=M("div"),n=M("h4"),n.textContent=s,r=H(),o=M("button"),o.textContent=a,c=H(),l=M("div"),v&&v.c(),u=H(),_&&_.c(),f=H(),m&&m.c(),this.h()},l(p){e=E(p,"DIV",{class:!0});var x=O(e);t=E(x,"DIV",{class:!0});var b=O(t);n=E(b,"H4",{class:!0,"data-svelte-h":!0}),Pe(n)!=="svelte-qsbpnk"&&(n.textContent=s),r=V(b),o=E(b,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(o)!=="svelte-wie9fy"&&(o.textContent=a),b.forEach(S),c=V(x),l=E(x,"DIV",{class:!0});var A=O(l);v&&v.l(A),u=V(A),_&&_.l(A),f=V(A),m&&m.l(A),A.forEach(S),x.forEach(S),this.h()},h(){R(n,"class","svelte-f592h6"),R(o,"class","close-btn svelte-f592h6"),R(t,"class","warning-panel-header svelte-f592h6"),R(l,"class","warning-panel-body svelte-f592h6"),R(e,"class","warning-panel svelte-f592h6")},m(p,x){ve(p,e,x),h(e,t),h(t,n),h(t,r),h(t,o),h(e,c),h(e,l),v&&v.m(l,null),h(l,u),_&&_.m(l,null),h(l,f),m&&m.m(l,null),d||(g=[ze(o,"click",i[24]),ze(e,"click",lf(i[19]))],d=!0)},p(p,x){p[4].red.length>0?v?v.p(p,x):(v=mh(p),v.c(),v.m(l,u)):v&&(v.d(1),v=null),p[4].orange.length>0?_?_.p(p,x):(_=gh(p),_.c(),_.m(l,f)):_&&(_.d(1),_=null),p[4].blue.length>0?m?m.p(p,x):(m=bh(p),m.c(),m.m(l,null)):m&&(m.d(1),m=null)},d(p){p&&S(e),v&&v.d(),_&&_.d(),m&&m.d(),d=!1,Ct(g)}}}function mh(i){let e,t,n,s=i[4].red.length+"",r,o,a,c=nt(i[4].red),l=[];for(let u=0;u<c.length;u+=1)l[u]=_h(lh(i,c,u));return{c(){e=M("div"),t=M("div"),n=pe("🔴 红色预警 ("),r=pe(s),o=pe(")"),a=H();for(let u=0;u<l.length;u+=1)l[u].c();this.h()},l(u){e=E(u,"DIV",{class:!0});var f=O(e);t=E(f,"DIV",{class:!0});var d=O(t);n=de(d,"🔴 红色预警 ("),r=de(d,s),o=de(d,")"),d.forEach(S),a=V(f);for(let g=0;g<l.length;g+=1)l[g].l(f);f.forEach(S),this.h()},h(){R(t,"class","warning-group-title red svelte-f592h6"),R(e,"class","warning-group svelte-f592h6")},m(u,f){ve(u,e,f),h(e,t),h(t,n),h(t,r),h(t,o),h(e,a);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(e,null)},p(u,f){if(f[0]&16&&s!==(s=u[4].red.length+"")&&Ve(r,s),f[0]&65552){c=nt(u[4].red);let d;for(d=0;d<c.length;d+=1){const g=lh(u,c,d);l[d]?l[d].p(g,f):(l[d]=_h(g),l[d].c(),l[d].m(e,null))}for(;d<l.length;d+=1)l[d].d(1);l.length=c.length}},d(u){u&&S(e),Et(l,u)}}}function _h(i){let e,t,n,s=i[43].hole_id+"",r,o,a,c,l=i[43].exceed_amount.toFixed(2)+"",u,f,d,g,v,_,m=i[43].latest_water_level.toFixed(2)+"",p,x,b,A,C,T=i[43].obs_date+"",w,L,F,y;function U(){return i[25](i[43])}return{c(){e=M("div"),t=M("div"),n=M("span"),r=pe(s),o=H(),a=M("span"),c=pe("超出 +"),u=pe(l),f=pe("m"),d=H(),g=M("div"),v=M("span"),_=pe("水位: "),p=pe(m),x=pe("m"),b=H(),A=M("span"),C=pe("日期: "),w=pe(T),L=H(),this.h()},l(Y){e=E(Y,"DIV",{class:!0});var Q=O(e);t=E(Q,"DIV",{class:!0});var k=O(t);n=E(k,"SPAN",{class:!0});var X=O(n);r=de(X,s),X.forEach(S),o=V(k),a=E(k,"SPAN",{class:!0});var W=O(a);c=de(W,"超出 +"),u=de(W,l),f=de(W,"m"),W.forEach(S),k.forEach(S),d=V(Q),g=E(Q,"DIV",{class:!0});var J=O(g);v=E(J,"SPAN",{});var ee=O(v);_=de(ee,"水位: "),p=de(ee,m),x=de(ee,"m"),ee.forEach(S),b=V(J),A=E(J,"SPAN",{});var se=O(A);C=de(se,"日期: "),w=de(se,T),se.forEach(S),J.forEach(S),L=V(Q),Q.forEach(S),this.h()},h(){R(n,"class","warning-hole svelte-f592h6"),R(a,"class","warning-exceed svelte-f592h6"),R(t,"class","warning-item-header svelte-f592h6"),R(g,"class","warning-item-details svelte-f592h6"),R(e,"class","warning-item svelte-f592h6")},m(Y,Q){ve(Y,e,Q),h(e,t),h(t,n),h(n,r),h(t,o),h(t,a),h(a,c),h(a,u),h(a,f),h(e,d),h(e,g),h(g,v),h(v,_),h(v,p),h(v,x),h(g,b),h(g,A),h(A,C),h(A,w),h(e,L),F||(y=ze(e,"click",U),F=!0)},p(Y,Q){i=Y,Q[0]&16&&s!==(s=i[43].hole_id+"")&&Ve(r,s),Q[0]&16&&l!==(l=i[43].exceed_amount.toFixed(2)+"")&&Ve(u,l),Q[0]&16&&m!==(m=i[43].latest_water_level.toFixed(2)+"")&&Ve(p,m),Q[0]&16&&T!==(T=i[43].obs_date+"")&&Ve(w,T)},d(Y){Y&&S(e),F=!1,y()}}}function gh(i){let e,t,n,s=i[4].orange.length+"",r,o,a,c=nt(i[4].orange),l=[];for(let u=0;u<c.length;u+=1)l[u]=vh(ah(i,c,u));return{c(){e=M("div"),t=M("div"),n=pe("🟠 橙色预警 ("),r=pe(s),o=pe(")"),a=H();for(let u=0;u<l.length;u+=1)l[u].c();this.h()},l(u){e=E(u,"DIV",{class:!0});var f=O(e);t=E(f,"DIV",{class:!0});var d=O(t);n=de(d,"🟠 橙色预警 ("),r=de(d,s),o=de(d,")"),d.forEach(S),a=V(f);for(let g=0;g<l.length;g+=1)l[g].l(f);f.forEach(S),this.h()},h(){R(t,"class","warning-group-title orange svelte-f592h6"),R(e,"class","warning-group svelte-f592h6")},m(u,f){ve(u,e,f),h(e,t),h(t,n),h(t,r),h(t,o),h(e,a);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(e,null)},p(u,f){if(f[0]&16&&s!==(s=u[4].orange.length+"")&&Ve(r,s),f[0]&65552){c=nt(u[4].orange);let d;for(d=0;d<c.length;d+=1){const g=ah(u,c,d);l[d]?l[d].p(g,f):(l[d]=vh(g),l[d].c(),l[d].m(e,null))}for(;d<l.length;d+=1)l[d].d(1);l.length=c.length}},d(u){u&&S(e),Et(l,u)}}}function vh(i){let e,t,n,s=i[43].hole_id+"",r,o,a,c,l=i[43].exceed_amount.toFixed(2)+"",u,f,d,g,v,_,m=i[43].latest_water_level.toFixed(2)+"",p,x,b,A,C,T=i[43].obs_date+"",w,L,F,y;function U(){return i[26](i[43])}return{c(){e=M("div"),t=M("div"),n=M("span"),r=pe(s),o=H(),a=M("span"),c=pe("超出 +"),u=pe(l),f=pe("m"),d=H(),g=M("div"),v=M("span"),_=pe("水位: "),p=pe(m),x=pe("m"),b=H(),A=M("span"),C=pe("日期: "),w=pe(T),L=H(),this.h()},l(Y){e=E(Y,"DIV",{class:!0});var Q=O(e);t=E(Q,"DIV",{class:!0});var k=O(t);n=E(k,"SPAN",{class:!0});var X=O(n);r=de(X,s),X.forEach(S),o=V(k),a=E(k,"SPAN",{class:!0});var W=O(a);c=de(W,"超出 +"),u=de(W,l),f=de(W,"m"),W.forEach(S),k.forEach(S),d=V(Q),g=E(Q,"DIV",{class:!0});var J=O(g);v=E(J,"SPAN",{});var ee=O(v);_=de(ee,"水位: "),p=de(ee,m),x=de(ee,"m"),ee.forEach(S),b=V(J),A=E(J,"SPAN",{});var se=O(A);C=de(se,"日期: "),w=de(se,T),se.forEach(S),J.forEach(S),L=V(Q),Q.forEach(S),this.h()},h(){R(n,"class","warning-hole svelte-f592h6"),R(a,"class","warning-exceed svelte-f592h6"),R(t,"class","warning-item-header svelte-f592h6"),R(g,"class","warning-item-details svelte-f592h6"),R(e,"class","warning-item svelte-f592h6")},m(Y,Q){ve(Y,e,Q),h(e,t),h(t,n),h(n,r),h(t,o),h(t,a),h(a,c),h(a,u),h(a,f),h(e,d),h(e,g),h(g,v),h(v,_),h(v,p),h(v,x),h(g,b),h(g,A),h(A,C),h(A,w),h(e,L),F||(y=ze(e,"click",U),F=!0)},p(Y,Q){i=Y,Q[0]&16&&s!==(s=i[43].hole_id+"")&&Ve(r,s),Q[0]&16&&l!==(l=i[43].exceed_amount.toFixed(2)+"")&&Ve(u,l),Q[0]&16&&m!==(m=i[43].latest_water_level.toFixed(2)+"")&&Ve(p,m),Q[0]&16&&T!==(T=i[43].obs_date+"")&&Ve(w,T)},d(Y){Y&&S(e),F=!1,y()}}}function bh(i){let e,t,n,s=i[4].blue.length+"",r,o,a,c=nt(i[4].blue),l=[];for(let u=0;u<c.length;u+=1)l[u]=xh(oh(i,c,u));return{c(){e=M("div"),t=M("div"),n=pe("🔵 蓝色预警 ("),r=pe(s),o=pe(")"),a=H();for(let u=0;u<l.length;u+=1)l[u].c();this.h()},l(u){e=E(u,"DIV",{class:!0});var f=O(e);t=E(f,"DIV",{class:!0});var d=O(t);n=de(d,"🔵 蓝色预警 ("),r=de(d,s),o=de(d,")"),d.forEach(S),a=V(f);for(let g=0;g<l.length;g+=1)l[g].l(f);f.forEach(S),this.h()},h(){R(t,"class","warning-group-title blue svelte-f592h6"),R(e,"class","warning-group svelte-f592h6")},m(u,f){ve(u,e,f),h(e,t),h(t,n),h(t,r),h(t,o),h(e,a);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(e,null)},p(u,f){if(f[0]&16&&s!==(s=u[4].blue.length+"")&&Ve(r,s),f[0]&65552){c=nt(u[4].blue);let d;for(d=0;d<c.length;d+=1){const g=oh(u,c,d);l[d]?l[d].p(g,f):(l[d]=xh(g),l[d].c(),l[d].m(e,null))}for(;d<l.length;d+=1)l[d].d(1);l.length=c.length}},d(u){u&&S(e),Et(l,u)}}}function xh(i){let e,t,n,s=i[43].hole_id+"",r,o,a,c,l=i[43].exceed_amount.toFixed(2)+"",u,f,d,g,v,_,m=i[43].latest_water_level.toFixed(2)+"",p,x,b,A,C,T=i[43].obs_date+"",w,L,F,y;function U(){return i[27](i[43])}return{c(){e=M("div"),t=M("div"),n=M("span"),r=pe(s),o=H(),a=M("span"),c=pe("超出 +"),u=pe(l),f=pe("m"),d=H(),g=M("div"),v=M("span"),_=pe("水位: "),p=pe(m),x=pe("m"),b=H(),A=M("span"),C=pe("日期: "),w=pe(T),L=H(),this.h()},l(Y){e=E(Y,"DIV",{class:!0});var Q=O(e);t=E(Q,"DIV",{class:!0});var k=O(t);n=E(k,"SPAN",{class:!0});var X=O(n);r=de(X,s),X.forEach(S),o=V(k),a=E(k,"SPAN",{class:!0});var W=O(a);c=de(W,"超出 +"),u=de(W,l),f=de(W,"m"),W.forEach(S),k.forEach(S),d=V(Q),g=E(Q,"DIV",{class:!0});var J=O(g);v=E(J,"SPAN",{});var ee=O(v);_=de(ee,"水位: "),p=de(ee,m),x=de(ee,"m"),ee.forEach(S),b=V(J),A=E(J,"SPAN",{});var se=O(A);C=de(se,"日期: "),w=de(se,T),se.forEach(S),J.forEach(S),L=V(Q),Q.forEach(S),this.h()},h(){R(n,"class","warning-hole svelte-f592h6"),R(a,"class","warning-exceed svelte-f592h6"),R(t,"class","warning-item-header svelte-f592h6"),R(g,"class","warning-item-details svelte-f592h6"),R(e,"class","warning-item svelte-f592h6")},m(Y,Q){ve(Y,e,Q),h(e,t),h(t,n),h(n,r),h(t,o),h(t,a),h(a,c),h(a,u),h(a,f),h(e,d),h(e,g),h(g,v),h(v,_),h(v,p),h(v,x),h(g,b),h(g,A),h(A,C),h(A,w),h(e,L),F||(y=ze(e,"click",U),F=!0)},p(Y,Q){i=Y,Q[0]&16&&s!==(s=i[43].hole_id+"")&&Ve(r,s),Q[0]&16&&l!==(l=i[43].exceed_amount.toFixed(2)+"")&&Ve(u,l),Q[0]&16&&m!==(m=i[43].latest_water_level.toFixed(2)+"")&&Ve(p,m),Q[0]&16&&T!==(T=i[43].obs_date+"")&&Ve(w,T)},d(Y){Y&&S(e),F=!1,y()}}}function z0(i){let e,t;return e=new a0({}),{c(){En(e.$$.fragment)},l(n){xn(e.$$.fragment,n)},m(n,s){bn(e,n,s),t=!0},i(n){t||(kt(e.$$.fragment,n),t=!0)},o(n){Bt(e.$$.fragment,n),t=!1},d(n){vn(e,n)}}}function V0(i){let e,t;return e=new s0({}),{c(){En(e.$$.fragment)},l(n){xn(e.$$.fragment,n)},m(n,s){bn(e,n,s),t=!0},i(n){t||(kt(e.$$.fragment,n),t=!0)},o(n){Bt(e.$$.fragment,n),t=!1},d(n){vn(e,n)}}}function H0(i){let e,t;return e=new E0({}),{c(){En(e.$$.fragment)},l(n){xn(e.$$.fragment,n)},m(n,s){bn(e,n,s),t=!0},i(n){t||(kt(e.$$.fragment,n),t=!0)},o(n){Bt(e.$$.fragment,n),t=!1},d(n){vn(e,n)}}}function G0(i){let e,t;return e=new t0({}),{c(){En(e.$$.fragment)},l(n){xn(e.$$.fragment,n)},m(n,s){bn(e,n,s),t=!0},i(n){t||(kt(e.$$.fragment,n),t=!0)},o(n){Bt(e.$$.fragment,n),t=!1},d(n){vn(e,n)}}}function W0(i){let e,t;return e=new Sf({}),{c(){En(e.$$.fragment)},l(n){xn(e.$$.fragment,n)},m(n,s){bn(e,n,s),t=!0},i(n){t||(kt(e.$$.fragment,n),t=!0)},o(n){Bt(e.$$.fragment,n),t=!1},d(n){vn(e,n)}}}function X0(i){let e,t;return e=new vf({}),{c(){En(e.$$.fragment)},l(n){xn(e.$$.fragment,n)},m(n,s){bn(e,n,s),t=!0},i(n){t||(kt(e.$$.fragment,n),t=!0)},o(n){Bt(e.$$.fragment,n),t=!1},d(n){vn(e,n)}}}function q0(i){let e,t;return e=new u0({}),{c(){En(e.$$.fragment)},l(n){xn(e.$$.fragment,n)},m(n,s){bn(e,n,s),t=!0},i(n){t||(kt(e.$$.fragment,n),t=!0)},o(n){Bt(e.$$.fragment,n),t=!1},d(n){vn(e,n)}}}function j0(i){let e,t,n,s,r,o,a,c,l,u;return e=new C0({}),r=new U0({}),l=new B0({}),{c(){En(e.$$.fragment),t=H(),n=M("div"),s=H(),En(r.$$.fragment),o=H(),a=M("div"),c=H(),En(l.$$.fragment),this.h()},l(f){xn(e.$$.fragment,f),t=V(f),n=E(f,"DIV",{class:!0}),O(n).forEach(S),s=V(f),xn(r.$$.fragment,f),o=V(f),a=E(f,"DIV",{class:!0}),O(a).forEach(S),c=V(f),xn(l.$$.fragment,f),this.h()},h(){R(n,"class","divider svelte-f592h6"),R(a,"class","divider svelte-f592h6")},m(f,d){bn(e,f,d),ve(f,t,d),ve(f,n,d),ve(f,s,d),bn(r,f,d),ve(f,o,d),ve(f,a,d),ve(f,c,d),bn(l,f,d),u=!0},i(f){u||(kt(e.$$.fragment,f),kt(r.$$.fragment,f),kt(l.$$.fragment,f),u=!0)},o(f){Bt(e.$$.fragment,f),Bt(r.$$.fragment,f),Bt(l.$$.fragment,f),u=!1},d(f){f&&(S(t),S(n),S(s),S(o),S(a),S(c)),vn(e,f),vn(r,f),vn(l,f)}}}function Y0(i){let e,t;return e=new Zv({}),{c(){En(e.$$.fragment)},l(n){xn(e.$$.fragment,n)},m(n,s){bn(e,n,s),t=!0},i(n){t||(kt(e.$$.fragment,n),t=!0)},o(n){Bt(e.$$.fragment,n),t=!1},d(n){vn(e,n)}}}function K0(i){let e,t;return e=new Af({}),{c(){En(e.$$.fragment)},l(n){xn(e.$$.fragment,n)},m(n,s){bn(e,n,s),t=!0},i(n){t||(kt(e.$$.fragment,n),t=!0)},o(n){Bt(e.$$.fragment,n),t=!1},d(n){vn(e,n)}}}function Eh(i){let e,t,n,s="创建新项目",r,o,a,c="项目名称",l,u,f,d,g,v="取消",_,m,p="创建",x,b;return{c(){e=M("div"),t=M("div"),n=M("h3"),n.textContent=s,r=H(),o=M("div"),a=M("label"),a.textContent=c,l=H(),u=M("input"),f=H(),d=M("div"),g=M("button"),g.textContent=v,_=H(),m=M("button"),m.textContent=p,this.h()},l(A){e=E(A,"DIV",{class:!0});var C=O(e);t=E(C,"DIV",{class:!0});var T=O(t);n=E(T,"H3",{"data-svelte-h":!0}),Pe(n)!=="svelte-1v42gf6"&&(n.textContent=s),r=V(T),o=E(T,"DIV",{class:!0});var w=O(o);a=E(w,"LABEL",{"data-svelte-h":!0}),Pe(a)!=="svelte-1mpo0da"&&(a.textContent=c),l=V(w),u=E(w,"INPUT",{type:!0,placeholder:!0}),w.forEach(S),f=V(T),d=E(T,"DIV",{class:!0});var L=O(d);g=E(L,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(g)!=="svelte-pvm4w2"&&(g.textContent=v),_=V(L),m=E(L,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(m)!=="svelte-1mtj7b2"&&(m.textContent=p),L.forEach(S),T.forEach(S),C.forEach(S),this.h()},h(){R(u,"type","text"),R(u,"placeholder","输入项目名称"),R(o,"class","form-group"),R(g,"class","btn-secondary"),R(m,"class","btn-primary"),R(d,"class","modal-actions"),R(t,"class","modal"),R(e,"class","modal-overlay")},m(A,C){ve(A,e,C),h(e,t),h(t,n),h(t,r),h(t,o),h(o,a),h(o,l),h(o,u),Ke(u,i[3]),h(t,f),h(t,d),h(d,g),h(d,_),h(d,m),x||(b=[ze(u,"input",i[28]),ze(u,"keydown",i[29]),ze(g,"click",i[30]),ze(m,"click",i[17]),ze(e,"click",Us(i[31]))],x=!0)},p(A,C){C[0]&8&&u.value!==A[3]&&Ke(u,A[3])},d(A){A&&S(e),x=!1,Ct(b)}}}function Mh(i,e){let t,n,s;return n=new d0({props:{toast:e[40]}}),{key:i,first:null,c(){t=It(),En(n.$$.fragment),this.h()},l(r){t=It(),xn(n.$$.fragment,r),this.h()},h(){this.first=t},m(r,o){ve(r,t,o),bn(n,r,o),s=!0},p(r,o){e=r;const a={};o[0]&16384&&(a.toast=e[40]),n.$set(a)},i(r){s||(kt(n.$$.fragment,r),s=!0)},o(r){Bt(n.$$.fragment,r),s=!1},d(r){r&&S(t),vn(n,r)}}}function Z0(i){let e,t,n,s,r="⛏ GeoModeler",o,a,c,l,u,f="+ 新项目",d,g,v,_,m,p,x=i[9].length+"",b,A,C=i[8].length+"",T,w,L,F,y,U,Y,Q,k,X,W,J,ee,se,ue,ce,le,he,z,K=[],re=new Map,D,I,Ee,Me=nt(i[1]),Re=[];for(let $=0;$<Me.length;$+=1)Re[$]=hh(uh(i,Me,$));let j=nt(i[18]),Ae=[];for(let $=0;$<j.length;$+=1)Ae[$]=fh(ch(i,j,$));let Se=i[0].length>0&&dh(i);const Ne=[X0,W0,G0,H0,V0,z0],oe=[];function ie($,ae){return $[6]==="boreholes"?0:$[6]==="profiles"?1:$[6]==="modeling"?2:$[6]==="waterlevel"?3:$[6]==="attributes"?4:$[6]==="export"?5:-1}~(U=ie(i))&&(Y=oe[U]=Ne[U](i));const ge=[j0,q0],B=[];function P($,ae){return $[6]==="waterlevel"?0:1}W=P(i),J=B[W]=ge[W](i);const xe=[K0,Y0],te=[];function N($,ae){return $[6]==="profiles"&&($[10]||$[11]&&$[12]&&$[13])?0:1}ue=N(i),ce=te[ue]=xe[ue](i);let Z=i[2]&&Eh(i),me=nt(i[14]);const _e=$=>$[40].id;for(let $=0;$<me.length;$+=1){let ae=rh(i,me,$),be=_e(ae);re.set(be,K[$]=Mh(be,ae))}return{c(){e=M("div"),t=M("header"),n=M("div"),s=M("span"),s.textContent=r,o=H(),a=M("select");for(let $=0;$<Re.length;$+=1)Re[$].c();l=H(),u=M("button"),u.textContent=f,d=H(),g=M("div");for(let $=0;$<Ae.length;$+=1)Ae[$].c();v=H(),_=M("div"),m=M("span"),p=pe("钻孔: "),b=pe(x),A=pe(" | 岩性: "),T=pe(C),w=H(),Se&&Se.c(),L=H(),F=M("div"),y=M("aside"),Y&&Y.c(),Q=H(),k=M("div"),X=H(),J.c(),ee=H(),se=M("main"),ce.c(),le=H(),Z&&Z.c(),he=H(),z=M("div");for(let $=0;$<K.length;$+=1)K[$].c();this.h()},l($){e=E($,"DIV",{class:!0});var ae=O(e);t=E(ae,"HEADER",{class:!0});var be=O(t);n=E(be,"DIV",{class:!0});var ye=O(n);s=E(ye,"SPAN",{class:!0,"data-svelte-h":!0}),Pe(s)!=="svelte-1m7r0r6"&&(s.textContent=r),o=V(ye),a=E(ye,"SELECT",{class:!0});var Te=O(a);for(let je=0;je<Re.length;je+=1)Re[je].l(Te);Te.forEach(S),l=V(ye),u=E(ye,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(u)!=="svelte-1c65pm4"&&(u.textContent=f),ye.forEach(S),d=V(be),g=E(be,"DIV",{class:!0});var Ce=O(g);for(let je=0;je<Ae.length;je+=1)Ae[je].l(Ce);Ce.forEach(S),v=V(be),_=E(be,"DIV",{class:!0});var Ye=O(_);m=E(Ye,"SPAN",{class:!0});var Oe=O(m);p=de(Oe,"钻孔: "),b=de(Oe,x),A=de(Oe," | 岩性: "),T=de(Oe,C),Oe.forEach(S),w=V(Ye),Se&&Se.l(Ye),Ye.forEach(S),be.forEach(S),L=V(ae),F=E(ae,"DIV",{class:!0});var Le=O(F);y=E(Le,"ASIDE",{class:!0});var Be=O(y);Y&&Y.l(Be),Q=V(Be),k=E(Be,"DIV",{class:!0}),O(k).forEach(S),X=V(Be),J.l(Be),Be.forEach(S),ee=V(Le),se=E(Le,"MAIN",{class:!0});var q=O(se);ce.l(q),q.forEach(S),Le.forEach(S),ae.forEach(S),le=V($),Z&&Z.l($),he=V($),z=E($,"DIV",{class:!0});var ke=O(z);for(let je=0;je<K.length;je+=1)K[je].l(ke);ke.forEach(S),this.h()},h(){R(s,"class","logo svelte-f592h6"),R(a,"class","svelte-f592h6"),R(u,"class","btn-secondary btn-sm"),R(n,"class","header-left svelte-f592h6"),R(g,"class","header-center svelte-f592h6"),R(m,"class","info-text svelte-f592h6"),R(_,"class","header-right svelte-f592h6"),R(t,"class","app-header svelte-f592h6"),R(k,"class","divider svelte-f592h6"),R(y,"class","left-panel panel svelte-f592h6"),R(se,"class","main-content svelte-f592h6"),R(F,"class","app-body svelte-f592h6"),R(e,"class","app-layout svelte-f592h6"),R(z,"class","toast-container")},m($,ae){ve($,e,ae),h(e,t),h(t,n),h(n,s),h(n,o),h(n,a);for(let be=0;be<Re.length;be+=1)Re[be]&&Re[be].m(a,null);Tt(a,i[7]?i[7].id:""),h(n,l),h(n,u),h(t,d),h(t,g);for(let be=0;be<Ae.length;be+=1)Ae[be]&&Ae[be].m(g,null);h(t,v),h(t,_),h(_,m),h(m,p),h(m,b),h(m,A),h(m,T),h(_,w),Se&&Se.m(_,null),h(e,L),h(e,F),h(F,y),~U&&oe[U].m(y,null),h(y,Q),h(y,k),h(y,X),B[W].m(y,null),h(F,ee),h(F,se),te[ue].m(se,null),ve($,le,ae),Z&&Z.m($,ae),ve($,he,ae),ve($,z,ae);for(let be=0;be<K.length;be+=1)K[be]&&K[be].m(z,null);D=!0,I||(Ee=[ze(a,"change",i[20]),ze(u,"click",i[21])],I=!0)},p($,ae){if(ae[0]&2){Me=nt($[1]);let Ce;for(Ce=0;Ce<Me.length;Ce+=1){const Ye=uh($,Me,Ce);Re[Ce]?Re[Ce].p(Ye,ae):(Re[Ce]=hh(Ye),Re[Ce].c(),Re[Ce].m(a,null))}for(;Ce<Re.length;Ce+=1)Re[Ce].d(1);Re.length=Me.length}if((!D||ae[0]&130&&c!==(c=$[7]?$[7].id:""))&&Tt(a,$[7]?$[7].id:""),ae[0]&262208){j=nt($[18]);let Ce;for(Ce=0;Ce<j.length;Ce+=1){const Ye=ch($,j,Ce);Ae[Ce]?Ae[Ce].p(Ye,ae):(Ae[Ce]=fh(Ye),Ae[Ce].c(),Ae[Ce].m(g,null))}for(;Ce<Ae.length;Ce+=1)Ae[Ce].d(1);Ae.length=j.length}(!D||ae[0]&512)&&x!==(x=$[9].length+"")&&Ve(b,x),(!D||ae[0]&256)&&C!==(C=$[8].length+"")&&Ve(T,C),$[0].length>0?Se?Se.p($,ae):(Se=dh($),Se.c(),Se.m(_,null)):Se&&(Se.d(1),Se=null);let be=U;U=ie($),U!==be&&(Y&&(ks(),Bt(oe[be],1,1,()=>{oe[be]=null}),Bs()),~U?(Y=oe[U],Y||(Y=oe[U]=Ne[U]($),Y.c()),kt(Y,1),Y.m(y,Q)):Y=null);let ye=W;W=P($),W!==ye&&(ks(),Bt(B[ye],1,1,()=>{B[ye]=null}),Bs(),J=B[W],J||(J=B[W]=ge[W]($),J.c()),kt(J,1),J.m(y,null));let Te=ue;ue=N($),ue!==Te&&(ks(),Bt(te[Te],1,1,()=>{te[Te]=null}),Bs(),ce=te[ue],ce||(ce=te[ue]=xe[ue]($),ce.c()),kt(ce,1),ce.m(se,null)),$[2]?Z?Z.p($,ae):(Z=Eh($),Z.c(),Z.m(he.parentNode,he)):Z&&(Z.d(1),Z=null),ae[0]&16384&&(me=nt($[14]),ks(),K=uf(K,ae,_e,1,$,me,re,z,cf,Mh,null,rh),Bs())},i($){if(!D){kt(Y),kt(J),kt(ce);for(let ae=0;ae<me.length;ae+=1)kt(K[ae]);D=!0}},o($){Bt(Y),Bt(J),Bt(ce);for(let ae=0;ae<K.length;ae+=1)Bt(K[ae]);D=!1},d($){$&&(S(e),S(le),S(he),S(z)),Et(Re,$),Et(Ae,$),Se&&Se.d(),~U&&oe[U].d(),B[W].d(),te[ue].d(),Z&&Z.d($);for(let ae=0;ae<K.length;ae+=1)K[ae].d();I=!1,Ct(Ee)}}}function J0(i,e,t){let n,s,r,o,a,c,l,u,f,d,g,v,_,m,p,x;Je(i,us,re=>t(0,n=re)),Je(i,zs,re=>t(5,s=re)),Je(i,Sr,re=>t(33,r=re)),Je(i,Er,re=>t(34,o=re)),Je(i,Vr,re=>t(6,a=re)),Je(i,Mr,re=>t(35,c=re)),Je(i,Bn,re=>t(7,l=re)),Je(i,Ps,re=>t(36,u=re)),Je(i,Rs,re=>t(37,f=re)),Je(i,ti,re=>t(8,d=re)),Je(i,Gn,re=>t(9,g=re)),Je(i,gr,re=>t(10,v=re)),Je(i,vr,re=>t(11,_=re)),Je(i,ws,re=>t(12,m=re)),Je(i,As,re=>t(13,p=re)),Je(i,Ds,re=>t(14,x=re));let b=[],A=!1,C="";Lr(async()=>{try{t(1,b=await ht.get("/projects")),b.length>0&&await T(b[0].id)}catch(re){console.error(re)}setInterval(()=>{w()},5e3)});async function T(re){try{const D=await ht.get(`/projects/${re}`);st(Bn,l=D,l);const[I,Ee,Me,Re]=await Promise.all([ht.get(`/projects/${re}/boreholes`),ht.get(`/projects/${re}/lithology-types`),ht.get(`/projects/${re}/profiles`),ht.get(`/projects/${re}/modeling/runs`)]);st(Gn,g=I,g),st(ti,d=Ee,d),st(Rs,f=Me,f),st(Ps,u=Re,u),await w(),await L()}catch(D){$e(`加载项目失败: ${D.message}`,"error")}}async function w(){if(l)try{const re=await ht.getWaterLevelWarnings(l.id);st(us,n=re,n)}catch(re){console.warn("刷新预警失败:",re)}}async function L(){if(l)try{const re=await ht.getWaterLevelThresholds(l.id);st(Mr,c=re,c)}catch(re){console.warn("刷新阈值失败:",re)}}function F(re){st(Vr,a="waterlevel",a),st(Er,o="history",o),st(Sr,r=re.borehole_id,r),st(zs,s=!1,s)}async function y(){if(C.trim())try{const re=await ht.post("/projects",{name:C.trim()});t(1,b=[...b,re]),t(2,A=!1),t(3,C=""),await T(re.id),$e("项目创建成功","success")}catch(re){$e(`创建失败: ${re.message}`,"error")}}const U=[{id:"boreholes",label:"钻孔数据",icon:"⊕"},{id:"profiles",label:"剖面分析",icon:"☷"},{id:"modeling",label:"三维建模",icon:"◆"},{id:"waterlevel",label:"地下水位",icon:"◈"},{id:"attributes",label:"属性场",icon:"◇"},{id:"export",label:"成果导出",icon:"↓"}];let Y;function Q(re){af.call(this,i,re)}const k=re=>T(re.target.value),X=()=>t(2,A=!0),W=re=>st(Vr,a=re.id,a),J=()=>st(zs,s=!s,s),ee=()=>st(zs,s=!1,s),se=re=>F(re),ue=re=>F(re),ce=re=>F(re);function le(){C=this.value,t(3,C)}const he=re=>re.key==="Enter"&&y(),z=()=>t(2,A=!1),K=()=>t(2,A=!1);return i.$$.update=()=>{if(i.$$.dirty[0]&1){const re={red:[],orange:[],blue:[]};n.forEach(D=>{re[D.warning_level].push(D)}),t(4,Y=re)}},[n,b,A,C,Y,s,a,l,d,g,v,_,m,p,x,T,F,y,U,Q,k,X,W,J,ee,se,ue,ce,le,he,z,K]}class Q0 extends pn{constructor(e){super(),mn(this,e,J0,Z0,dn,{},null,[-1,-1])}}function $0(i){let e,t;return e=new Q0({}),{c(){En(e.$$.fragment)},l(n){xn(e.$$.fragment,n)},m(n,s){bn(e,n,s),t=!0},p:yt,i(n){t||(kt(e.$$.fragment,n),t=!0)},o(n){Bt(e.$$.fragment,n),t=!1},d(n){vn(e,n)}}}class s1 extends pn{constructor(e){super(),mn(this,e,null,$0,dn,{})}}export{s1 as component,i1 as universal};
