import{r as At,s as dn,n as yt,c as Qe,x as it,p as hn,d as Sf,t as yo,e as ni,o as Lr,y as rh,z as Yo,A as oh}from"../chunks/CFrTkFHZ.js";import{l as kt,k as Bt,S as pn,i as mn,d as S,s as Ve,a as ge,b as f,y as ze,w as R,x as me,c as E,e as F,z as Pe,g as z,f as de,o as It,h as M,j as V,t as pe,A as Et,B as Fs,C as Ke,D as ct,E as Kt,F as Tt,G as fn,m as Bs,n as zs,q as vn,u as bn,v as xn,r as En,H as ah}from"../chunks/DXW_PE2e.js";import{w as mt}from"../chunks/W-IK_yO4.js";function et(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function lh(i,e){Bt(i,1,1,()=>{e.delete(i.key)})}function ch(i,e,t,n,s,r,o,a,c,l,u,h){let d=i.length,g=r.length,v=d;const m={};for(;v--;)m[i[v].key]=v;const _=[],p=new Map,x=new Map,b=[];for(v=g;v--;){const w=h(s,r,v),L=t(w);let U=o.get(L);U?b.push(()=>U.p(w,e)):(U=l(L,w),U.c()),p.set(L,_[v]=U),L in m&&x.set(L,Math.abs(v-m[L]))}const A=new Set,C=new Set;function T(w){kt(w,1),w.m(a,u),o.set(w.key,w),u=w.first,g--}for(;d&&g;){const w=_[g-1],L=i[d-1],U=w.key,y=L.key;w===L?(u=w.first,d--,g--):p.has(y)?!o.has(U)||A.has(U)?T(w):C.has(y)?d--:x.get(U)>x.get(y)?(C.add(U),T(w)):(A.add(y),d--):(c(L,o),d--)}for(;d--;){const w=i[d];p.has(w.key)||c(w,o)}for(;g;)T(_[g-1]);return At(b),_}const uh=!1,fh=!0,n1=Object.freeze(Object.defineProperty({__proto__:null,prerender:fh,ssr:uh},Symbol.toStringTag,{value:"Module"})),Bn=mt(null),Gn=mt([]),ti=mt([]),Ps=mt([]),Ls=mt([]),Ds=mt(null),_r=mt(null),gr=mt({mode:"voxel",isosurfaceValue:0,colorMin:0,colorMax:100}),Is=mt([]);function $e(i,e="info",t=4e3){const n=Date.now();Is.update(s=>[...s,{id:n,message:i,type:e}]),t>0&&setTimeout(()=>{Is.update(s=>s.filter(r=>r.id!==n))},t)}const pr=mt([]),$i=mt({status:"idle",progress:0,runId:null}),es=mt({}),ts=mt({}),ns=mt({enabled:!1,normal:[0,0,-1],position:[0,0,0]}),Ko=mt(null),Vr=mt("boreholes"),yn=mt(null),vr=mt(null),br=mt(!1),Zo=mt(null),Jo=mt(null),ws=mt(null),As=mt(null),Qo=mt(!1),$o=mt(null),To=mt([]),ea=mt(null),Jn=mt({orthoImage:null,demImage:null,opacity:1,visible:!0}),cs=mt([]),ta=mt([]),na=mt([]),ia=mt([]),zn=mt(null),Un=mt(!1),xr=mt(.6),Er=mt(null),sa=mt({playing:!1,startDate:null,endDate:null,speed:7,currentDate:null,progress:0}),Mr=mt("data"),Sr=mt([]),us=mt([]),ra=mt({}),Cs=mt(""),Vs=mt(!1),hh="/api";async function Pt(i,e,t=null,n={}){const s=`${hh}${e}`,r={};t&&!(t instanceof FormData)&&(r["Content-Type"]="application/json");const o=await fetch(s,{method:i,headers:r,body:t instanceof FormData?t:t?JSON.stringify(t):null,...n});if(o.status===204)return null;if(!o.ok){const c=o.headers.get("content-type");if(c&&c.includes("application/json")){const l=await o.json().catch(()=>({detail:o.statusText}));throw new Error(l.detail||`请求失败 (${o.status}): ${o.statusText}`)}throw new Error(`请求失败 (${o.status}): ${o.statusText}`)}if(n.raw)return o;const a=o.headers.get("content-type");return a&&a.includes("application/json")?o.json():o}const ft={get:(i,e)=>Pt("GET",i,null,e),post:(i,e,t)=>Pt("POST",i,e,t),put:(i,e,t)=>Pt("PUT",i,e,t),patch:(i,e,t)=>Pt("PATCH",i,e,t),delete:(i,e)=>Pt("DELETE",i,null,e),uploadCsv:(i,e)=>{const t=new FormData;return t.append("file",e),Pt("POST",`/projects/${i}/boreholes/import-csv`,t)},exportGltf:i=>Pt("GET",`/export/gltf/${i}`,null,{raw:!0}),exportProfilePng:i=>Pt("GET",`/export/profile/${i}/png`,null,{raw:!0}),exportProfileSvg:i=>Pt("GET",`/export/profile/${i}/svg`,null,{raw:!0}),exportStatsExcel:i=>Pt("GET",`/export/stats/${i}/excel`,null,{raw:!0}),exportReportPdf:i=>Pt("GET",`/export/report/${i}/pdf`,null,{raw:!0}),downloadBlob:async(i,e)=>{const n=await(await Pt("GET",i,null,{raw:!0})).blob(),s=URL.createObjectURL(n),r=document.createElement("a");r.href=s,r.download=e,r.click(),URL.revokeObjectURL(s)},getWaterLevels:(i,e)=>{const t=e?`?borehole_id=${e}`:"";return Pt("GET",`/projects/${i}/water-levels${t}`)},createWaterLevel:(i,e)=>Pt("POST",`/projects/${i}/water-levels`,e),deleteWaterLevel:(i,e)=>Pt("DELETE",`/projects/${i}/water-levels/${e}`),importWaterLevelCsv:(i,e)=>{const t=new FormData;return t.append("file",e),Pt("POST",`/projects/${i}/water-levels/import-csv`,t)},getWaterLevelStats:(i,e)=>Pt("POST",`/projects/${i}/water-levels/statistics`,e),getWaterLevelMKTest:(i,e)=>Pt("POST",`/projects/${i}/water-levels/mk-test`,e),getWaterLevelBoxplot:(i,e)=>Pt("POST",`/projects/${i}/water-levels/boxplot`,e),krigingWaterLevel:(i,e)=>Pt("POST",`/projects/${i}/water-levels/kriging`,e),getWaterLevelThresholds:i=>Pt("GET",`/projects/${i}/water-levels/thresholds`),getWaterLevelThreshold:(i,e)=>Pt("GET",`/projects/${i}/water-levels/thresholds/${e}`),createWaterLevelThreshold:(i,e)=>Pt("POST",`/projects/${i}/water-levels/thresholds`,e),updateWaterLevelThreshold:(i,e,t)=>Pt("PUT",`/projects/${i}/water-levels/thresholds/${e}`,t),deleteWaterLevelThreshold:(i,e)=>Pt("DELETE",`/projects/${i}/water-levels/thresholds/${e}`),detectWaterLevelAnomalies:(i,e)=>Pt("POST",`/projects/${i}/water-levels/anomalies`,e),getWaterLevelWarnings:i=>Pt("GET",`/projects/${i}/water-levels/warnings`)};function oa(i,e,t){const n=i.slice();return n[41]=e[t],n[42]=e,n[43]=t,n}function aa(i,e,t){const n=i.slice();return n[44]=e[t],n}function la(i,e,t){const n=i.slice();return n[47]=e[t],n}function ca(i,e,t){const n=i.slice();return n[50]=e[t],n}function ua(i,e,t){const n=i.slice();n[41]=e[t];const s=n[8].find(function(...o){return i[24](n[41],...o)});return n[53]=s,n}function fa(i,e,t){const n=i.slice();return n[53]=e[t],n[56]=e,n[57]=t,n}function ha(i){let e,t,n="岩性颜色映射",s,r,o,a=et(i[8]),c=[];for(let l=0;l<a.length;l+=1)c[l]=da(fa(i,a,l));return{c(){e=M("div"),t=M("h4"),t.textContent=n,s=V();for(let l=0;l<c.length;l+=1)c[l].c();r=V(),o=M("hr"),this.h()},l(l){e=E(l,"DIV",{class:!0});var u=F(e);t=E(u,"H4",{style:!0,"data-svelte-h":!0}),Pe(t)!=="svelte-i0dhp9"&&(t.textContent=n),s=z(u);for(let h=0;h<c.length;h+=1)c[h].l(u);u.forEach(S),r=z(l),o=E(l,"HR",{style:!0}),this.h()},h(){me(t,"margin-bottom","8px"),me(t,"font-size","13px"),R(e,"class","color-editor svelte-jbi2uy"),me(o,"border-color","var(--border)"),me(o,"margin","12px 0")},m(l,u){ge(l,e,u),f(e,t),f(e,s);for(let h=0;h<c.length;h+=1)c[h]&&c[h].m(e,null);ge(l,r,u),ge(l,o,u)},p(l,u){if(u[0]&33024){a=et(l[8]);let h;for(h=0;h<a.length;h+=1){const d=fa(l,a,h);c[h]?c[h].p(d,u):(c[h]=da(d),c[h].c(),c[h].m(e,null))}for(;h<c.length;h+=1)c[h].d(1);c.length=a.length}},d(l){l&&(S(e),S(r),S(o)),Et(c,l)}}}function da(i){let e,t,n,s,r=i[53].name+"",o,a,c,l;function u(){i[19].call(t,i[56],i[57])}function h(){return i[20](i[53])}return{c(){e=M("div"),t=M("input"),n=V(),s=M("span"),o=pe(r),a=V(),this.h()},l(d){e=E(d,"DIV",{class:!0});var g=F(e);t=E(g,"INPUT",{type:!0}),n=z(g),s=E(g,"SPAN",{});var v=F(s);o=de(v,r),v.forEach(S),a=z(g),g.forEach(S),this.h()},h(){R(t,"type","color"),R(e,"class","color-row svelte-jbi2uy")},m(d,g){ge(d,e,g),f(e,t),Ke(t,i[53].color),f(e,n),f(e,s),f(s,o),f(e,a),c||(l=[ze(t,"input",u),ze(t,"change",h)],c=!0)},p(d,g){i=d,g[0]&256&&Ke(t,i[53].color),g[0]&256&&r!==(r=i[53].name+"")&&Ve(o,r)},d(d){d&&S(e),c=!1,At(l)}}}function dh(i){let e,t=et(i[9]),n=[];for(let s=0;s<t.length;s+=1)n[s]=ma(ca(i,t,s));return{c(){e=M("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=E(s,"DIV",{class:!0});var r=F(e);for(let o=0;o<n.length;o+=1)n[o].l(r);r.forEach(S),this.h()},h(){R(e,"class","borehole-list")},m(s,r){ge(s,e,r);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(e,null)},p(s,r){if(r[0]&23392){t=et(s[9]);let o;for(o=0;o<t.length;o+=1){const a=ca(s,t,o);n[o]?n[o].p(a,r):(n[o]=ma(a),n[o].c(),n[o].m(e,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}},d(s){s&&S(e),Et(n,s)}}}function ph(i){let e,t='<p>暂无钻孔数据</p> <p style="font-size:12px;color:var(--text-muted);margin-top:4px;">点击&quot;导入CSV&quot;添加钻孔数据</p>';return{c(){e=M("div"),e.innerHTML=t,this.h()},l(n){e=E(n,"DIV",{class:!0,"data-svelte-h":!0}),Pe(e)!=="svelte-b2zuvh"&&(e.innerHTML=t),this.h()},h(){R(e,"class","empty-state svelte-jbi2uy")},m(n,s){ge(n,e,s)},p:yt,d(n){n&&S(e)}}}function pa(i){let e,t;return{c(){e=M("div"),this.h()},l(n){e=E(n,"DIV",{class:!0,style:!0,title:!0});var s=F(e);s.forEach(S),this.h()},h(){var n;R(e,"class","layer-chip svelte-jbi2uy"),me(e,"background",((n=i[53])==null?void 0:n.color)||"#888"),me(e,"flex",i[41].bottom_depth-i[41].top_depth),R(e,"title",t=i[41].lithology_name+": "+i[41].top_depth+"-"+i[41].bottom_depth+"m")},m(n,s){ge(n,e,s)},p(n,s){var r;s[0]&768&&me(e,"background",((r=n[53])==null?void 0:r.color)||"#888"),s[0]&512&&me(e,"flex",n[41].bottom_depth-n[41].top_depth),s[0]&512&&t!==(t=n[41].lithology_name+": "+n[41].top_depth+"-"+n[41].bottom_depth+"m")&&R(e,"title",t)},d(n){n&&S(e)}}}function ma(i){let e,t,n,s,r,o,a,c=i[50].hole_id+"",l,u,h,d,g="编辑",v,m,_="删除",p,x,b,A,C=i[50].longitude.toFixed(5)+"",T,w,L=i[50].latitude.toFixed(5)+"",U,y,N,K,$=i[50].elevation.toFixed(2)+"",O,j,W,ee,te=i[50].layers.length+"",se,ue,le,ce,fe=(i[5][i[50].id]||[]).length+"",B,J,oe,D,I,be,Se;function Ce(){return i[21](i[50])}function q(){return i[22](i[50])}function Ae(){return i[23](i[50])}let ye=et(i[50].layers),Ne=[];for(let ae=0;ae<ye.length;ae+=1)Ne[ae]=pa(ua(i,ye,ae));return{c(){e=M("div"),t=M("div"),n=M("label"),s=M("input"),o=V(),a=M("strong"),l=pe(c),u=V(),h=M("div"),d=M("button"),d.textContent=g,v=V(),m=M("button"),m.textContent=_,p=V(),x=M("div"),b=M("span"),A=pe("坐标: "),T=pe(C),w=pe(", "),U=pe(L),y=V(),N=M("span"),K=pe("高程: "),O=pe($),j=pe("m"),W=V(),ee=M("span"),se=pe(te),ue=pe(" 层"),le=V(),ce=M("span"),B=pe(fe),J=pe(" 条水位"),oe=V(),D=M("div");for(let ae=0;ae<Ne.length;ae+=1)Ne[ae].c();I=V(),this.h()},l(ae){e=E(ae,"DIV",{class:!0});var ie=F(e);t=E(ie,"DIV",{class:!0});var _e=F(t);n=E(_e,"LABEL",{class:!0});var k=F(n);s=E(k,"INPUT",{type:!0}),o=z(k),a=E(k,"STRONG",{});var P=F(a);l=de(P,c),P.forEach(S),k.forEach(S),u=z(_e),h=E(_e,"DIV",{class:!0});var ve=F(h);d=E(ve,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(d)!=="svelte-qjn1px"&&(d.textContent=g),v=z(ve),m=E(ve,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(m)!=="svelte-3c3ohz"&&(m.textContent=_),ve.forEach(S),_e.forEach(S),p=z(ie),x=E(ie,"DIV",{class:!0});var Te=F(x);b=E(Te,"SPAN",{});var X=F(b);A=de(X,"坐标: "),T=de(X,C),w=de(X,", "),U=de(X,L),X.forEach(S),y=z(Te),N=E(Te,"SPAN",{});var H=F(N);K=de(H,"高程: "),O=de(H,$),j=de(H,"m"),H.forEach(S),W=z(Te),ee=E(Te,"SPAN",{});var Y=F(ee);se=de(Y,te),ue=de(Y," 层"),Y.forEach(S),le=z(Te),ce=E(Te,"SPAN",{class:!0});var he=F(ce);B=de(he,fe),J=de(he," 条水位"),he.forEach(S),Te.forEach(S),oe=z(ie),D=E(ie,"DIV",{class:!0});var Q=F(D);for(let re=0;re<Ne.length;re+=1)Ne[re].l(Q);Q.forEach(S),I=z(ie),ie.forEach(S),this.h()},h(){R(s,"type","checkbox"),s.checked=r=i[6].includes(i[50].id),R(n,"class","checkbox-label"),R(d,"class","btn-secondary btn-sm"),R(m,"class","btn-danger btn-sm"),R(h,"class","card-actions svelte-jbi2uy"),R(t,"class","card-header svelte-jbi2uy"),R(ce,"class","wl-count svelte-jbi2uy"),R(x,"class","card-info svelte-jbi2uy"),R(D,"class","layer-bar svelte-jbi2uy"),R(e,"class","borehole-card svelte-jbi2uy"),Kt(e,"selected",i[6].includes(i[50].id))},m(ae,ie){ge(ae,e,ie),f(e,t),f(t,n),f(n,s),f(n,o),f(n,a),f(a,l),f(t,u),f(t,h),f(h,d),f(h,v),f(h,m),f(e,p),f(e,x),f(x,b),f(b,A),f(b,T),f(b,w),f(b,U),f(x,y),f(x,N),f(N,K),f(N,O),f(N,j),f(x,W),f(x,ee),f(ee,se),f(ee,ue),f(x,le),f(x,ce),f(ce,B),f(ce,J),f(e,oe),f(e,D);for(let _e=0;_e<Ne.length;_e+=1)Ne[_e]&&Ne[_e].m(D,null);f(e,I),be||(Se=[ze(s,"change",Ce),ze(d,"click",q),ze(m,"click",Ae)],be=!0)},p(ae,ie){if(i=ae,ie[0]&576&&r!==(r=i[6].includes(i[50].id))&&(s.checked=r),ie[0]&512&&c!==(c=i[50].hole_id+"")&&Ve(l,c),ie[0]&512&&C!==(C=i[50].longitude.toFixed(5)+"")&&Ve(T,C),ie[0]&512&&L!==(L=i[50].latitude.toFixed(5)+"")&&Ve(U,L),ie[0]&512&&$!==($=i[50].elevation.toFixed(2)+"")&&Ve(O,$),ie[0]&512&&te!==(te=i[50].layers.length+"")&&Ve(se,te),ie[0]&544&&fe!==(fe=(i[5][i[50].id]||[]).length+"")&&Ve(B,fe),ie[0]&768){ye=et(i[50].layers);let _e;for(_e=0;_e<ye.length;_e+=1){const k=ua(i,ye,_e);Ne[_e]?Ne[_e].p(k,ie):(Ne[_e]=pa(k),Ne[_e].c(),Ne[_e].m(D,null))}for(;_e<Ne.length;_e+=1)Ne[_e].d(1);Ne.length=ye.length}ie[0]&576&&Kt(e,"selected",i[6].includes(i[50].id))},d(ae){ae&&S(e),Et(Ne,ae),be=!1,At(Se)}}}function _a(i){let e,t,n,s="导入钻孔CSV数据",r,o,a=`CSV字段: hole_id/孔号, longitude/经度, latitude/纬度, elevation/高程,
                layer_no/层号, top_depth/层顶深度, bottom_depth/层底深度, lithology/岩性,
                spt_n/标贯N值, water_content/含水量, compression_modulus/压缩模量`,c,l,u,h,d,g,v,m="关闭",_,p,x=i[2]?"导入中...":"开始导入",b,A,C,T,w=i[3]&&ga(i);return{c(){e=M("div"),t=M("div"),n=M("h3"),n.textContent=s,r=V(),o=M("p"),o.textContent=a,c=V(),l=M("div"),u=M("input"),h=V(),w&&w.c(),d=V(),g=M("div"),v=M("button"),v.textContent=m,_=V(),p=M("button"),b=pe(x),this.h()},l(L){e=E(L,"DIV",{class:!0});var U=F(e);t=E(U,"DIV",{class:!0});var y=F(t);n=E(y,"H3",{"data-svelte-h":!0}),Pe(n)!=="svelte-rl92uc"&&(n.textContent=s),r=z(y),o=E(y,"P",{style:!0,"data-svelte-h":!0}),Pe(o)!=="svelte-p50xxs"&&(o.textContent=a),c=z(y),l=E(y,"DIV",{class:!0});var N=F(l);u=E(N,"INPUT",{type:!0,accept:!0}),N.forEach(S),h=z(y),w&&w.l(y),d=z(y),g=E(y,"DIV",{class:!0});var K=F(g);v=E(K,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(v)!=="svelte-1wvy2wc"&&(v.textContent=m),_=z(K),p=E(K,"BUTTON",{class:!0});var $=F(p);b=de($,x),$.forEach(S),K.forEach(S),y.forEach(S),U.forEach(S),this.h()},h(){me(o,"font-size","12px"),me(o,"color","var(--text-secondary)"),me(o,"margin-bottom","12px"),R(u,"type","file"),R(u,"accept",".csv"),R(l,"class","form-group"),R(v,"class","btn-secondary"),R(p,"class","btn-primary"),p.disabled=A=!i[1]||i[2],R(g,"class","modal-actions"),R(t,"class","modal"),R(e,"class","modal-overlay")},m(L,U){ge(L,e,U),f(e,t),f(t,n),f(t,r),f(t,o),f(t,c),f(t,l),f(l,u),f(t,h),w&&w.m(t,null),f(t,d),f(t,g),f(g,v),f(g,_),f(g,p),f(p,b),C||(T=[ze(u,"change",i[25]),ze(v,"click",i[26]),ze(p,"click",i[10]),ze(e,"click",Fs(i[27]))],C=!0)},p(L,U){L[3]?w?w.p(L,U):(w=ga(L),w.c(),w.m(t,d)):w&&(w.d(1),w=null),U[0]&4&&x!==(x=L[2]?"导入中...":"开始导入")&&Ve(b,x),U[0]&6&&A!==(A=!L[1]||L[2])&&(p.disabled=A)},d(L){L&&S(e),w&&w.d(),C=!1,At(T)}}}function ga(i){let e,t,n,s=i[3].imported+"",r,o,a,c,l=i[3].errors.length>0&&va(i),u=i[3].warnings.length>0&&xa(i);return{c(){e=M("div"),t=M("p"),n=pe("成功导入: "),r=pe(s),o=pe(" 个钻孔"),a=V(),l&&l.c(),c=V(),u&&u.c(),this.h()},l(h){e=E(h,"DIV",{class:!0});var d=F(e);t=E(d,"P",{class:!0});var g=F(t);n=de(g,"成功导入: "),r=de(g,s),o=de(g," 个钻孔"),g.forEach(S),a=z(d),l&&l.l(d),c=z(d),u&&u.l(d),d.forEach(S),this.h()},h(){R(t,"class","badge badge-success svelte-jbi2uy"),R(e,"class","import-result svelte-jbi2uy")},m(h,d){ge(h,e,d),f(e,t),f(t,n),f(t,r),f(t,o),f(e,a),l&&l.m(e,null),f(e,c),u&&u.m(e,null)},p(h,d){d[0]&8&&s!==(s=h[3].imported+"")&&Ve(r,s),h[3].errors.length>0?l?l.p(h,d):(l=va(h),l.c(),l.m(e,c)):l&&(l.d(1),l=null),h[3].warnings.length>0?u?u.p(h,d):(u=xa(h),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},d(h){h&&S(e),l&&l.d(),u&&u.d()}}}function va(i){let e,t=et(i[3].errors),n=[];for(let s=0;s<t.length;s+=1)n[s]=ba(la(i,t,s));return{c(){e=M("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=E(s,"DIV",{class:!0});var r=F(e);for(let o=0;o<n.length;o+=1)n[o].l(r);r.forEach(S),this.h()},h(){R(e,"class","errors")},m(s,r){ge(s,e,r);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(e,null)},p(s,r){if(r[0]&8){t=et(s[3].errors);let o;for(o=0;o<t.length;o+=1){const a=la(s,t,o);n[o]?n[o].p(a,r):(n[o]=ba(a),n[o].c(),n[o].m(e,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}},d(s){s&&S(e),Et(n,s)}}}function ba(i){let e,t=i[47]+"",n;return{c(){e=M("p"),n=pe(t),this.h()},l(s){e=E(s,"P",{class:!0});var r=F(e);n=de(r,t),r.forEach(S),this.h()},h(){R(e,"class","badge badge-danger svelte-jbi2uy")},m(s,r){ge(s,e,r),f(e,n)},p(s,r){r[0]&8&&t!==(t=s[47]+"")&&Ve(n,t)},d(s){s&&S(e)}}}function xa(i){let e,t=et(i[3].warnings),n=[];for(let s=0;s<t.length;s+=1)n[s]=Ea(aa(i,t,s));return{c(){e=M("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=E(s,"DIV",{class:!0});var r=F(e);for(let o=0;o<n.length;o+=1)n[o].l(r);r.forEach(S),this.h()},h(){R(e,"class","warnings")},m(s,r){ge(s,e,r);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(e,null)},p(s,r){if(r[0]&8){t=et(s[3].warnings);let o;for(o=0;o<t.length;o+=1){const a=aa(s,t,o);n[o]?n[o].p(a,r):(n[o]=Ea(a),n[o].c(),n[o].m(e,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}},d(s){s&&S(e),Et(n,s)}}}function Ea(i){let e,t=i[44]+"",n;return{c(){e=M("p"),n=pe(t),this.h()},l(s){e=E(s,"P",{class:!0});var r=F(e);n=de(r,t),r.forEach(S),this.h()},h(){R(e,"class","badge badge-warning svelte-jbi2uy")},m(s,r){ge(s,e,r),f(e,n)},p(s,r){r[0]&8&&t!==(t=s[44]+"")&&Ve(n,t)},d(s){s&&S(e)}}}function Ma(i){let e,t,n,s,r=i[7].hole_id+"",o,a,c,l,u,h="孔号",d,g,v,m,_,p="高程(m)",x,b,A,C,T,w,L="经度",U,y,N,K,$,O="纬度",j,W,ee,te,se="分层信息",ue,le,ce,fe,B="<tr><th>层号</th> <th>层顶(m)</th> <th>层底(m)</th> <th>岩性</th> <th>标贯N</th></tr>",J,oe,D,I,be,Se="取消",Ce,q,Ae="保存",ye,Ne,ae=et(i[7].layers),ie=[];for(let _e=0;_e<ae.length;_e+=1)ie[_e]=Sa(oa(i,ae,_e));return{c(){e=M("div"),t=M("div"),n=M("h3"),s=pe("编辑钻孔 - "),o=pe(r),a=V(),c=M("div"),l=M("div"),u=M("label"),u.textContent=h,d=V(),g=M("input"),v=V(),m=M("div"),_=M("label"),_.textContent=p,x=V(),b=M("input"),A=V(),C=M("div"),T=M("div"),w=M("label"),w.textContent=L,U=V(),y=M("input"),N=V(),K=M("div"),$=M("label"),$.textContent=O,j=V(),W=M("input"),ee=V(),te=M("h4"),te.textContent=se,ue=V(),le=M("div"),ce=M("table"),fe=M("thead"),fe.innerHTML=B,J=V(),oe=M("tbody");for(let _e=0;_e<ie.length;_e+=1)ie[_e].c();D=V(),I=M("div"),be=M("button"),be.textContent=Se,Ce=V(),q=M("button"),q.textContent=Ae,this.h()},l(_e){e=E(_e,"DIV",{class:!0});var k=F(e);t=E(k,"DIV",{class:!0,style:!0});var P=F(t);n=E(P,"H3",{});var ve=F(n);s=de(ve,"编辑钻孔 - "),o=de(ve,r),ve.forEach(S),a=z(P),c=E(P,"DIV",{class:!0,style:!0});var Te=F(c);l=E(Te,"DIV",{class:!0});var X=F(l);u=E(X,"LABEL",{"data-svelte-h":!0}),Pe(u)!=="svelte-natzrr"&&(u.textContent=h),d=z(X),g=E(X,"INPUT",{type:!0}),X.forEach(S),v=z(Te),m=E(Te,"DIV",{class:!0});var H=F(m);_=E(H,"LABEL",{"data-svelte-h":!0}),Pe(_)!=="svelte-1xtfx5p"&&(_.textContent=p),x=z(H),b=E(H,"INPUT",{type:!0,step:!0}),H.forEach(S),Te.forEach(S),A=z(P),C=E(P,"DIV",{class:!0,style:!0});var Y=F(C);T=E(Y,"DIV",{class:!0});var he=F(T);w=E(he,"LABEL",{"data-svelte-h":!0}),Pe(w)!=="svelte-ndgehb"&&(w.textContent=L),U=z(he),y=E(he,"INPUT",{type:!0,step:!0}),he.forEach(S),N=z(Y),K=E(Y,"DIV",{class:!0});var Q=F(K);$=E(Q,"LABEL",{"data-svelte-h":!0}),Pe($)!=="svelte-h6t6m2"&&($.textContent=O),j=z(Q),W=E(Q,"INPUT",{type:!0,step:!0}),Q.forEach(S),Y.forEach(S),ee=z(P),te=E(P,"H4",{style:!0,"data-svelte-h":!0}),Pe(te)!=="svelte-ltk5jk"&&(te.textContent=se),ue=z(P),le=E(P,"DIV",{class:!0});var re=F(le);ce=E(re,"TABLE",{});var Me=F(ce);fe=E(Me,"THEAD",{"data-svelte-h":!0}),Pe(fe)!=="svelte-qllypy"&&(fe.innerHTML=B),J=z(Me),oe=E(Me,"TBODY",{});var Ee=F(oe);for(let Re=0;Re<ie.length;Re+=1)ie[Re].l(Ee);Ee.forEach(S),Me.forEach(S),re.forEach(S),D=z(P),I=E(P,"DIV",{class:!0});var xe=F(I);be=E(xe,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(be)!=="svelte-1xgwxe6"&&(be.textContent=Se),Ce=z(xe),q=E(xe,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(q)!=="svelte-1qz0hu8"&&(q.textContent=Ae),xe.forEach(S),P.forEach(S),k.forEach(S),this.h()},h(){R(g,"type","text"),R(l,"class","form-group"),R(b,"type","number"),R(b,"step","0.01"),R(m,"class","form-group"),R(c,"class","form-row"),me(c,"margin-bottom","12px"),R(y,"type","number"),R(y,"step","0.000001"),R(T,"class","form-group"),R(W,"type","number"),R(W,"step","0.000001"),R(K,"class","form-group"),R(C,"class","form-row"),me(C,"margin-bottom","12px"),me(te,"margin","12px 0 8px"),me(te,"font-size","13px"),R(le,"class","layers-table svelte-jbi2uy"),R(be,"class","btn-secondary"),R(q,"class","btn-primary"),R(I,"class","modal-actions"),R(t,"class","modal"),me(t,"min-width","600px"),R(e,"class","modal-overlay")},m(_e,k){ge(_e,e,k),f(e,t),f(t,n),f(n,s),f(n,o),f(t,a),f(t,c),f(c,l),f(l,u),f(l,d),f(l,g),Ke(g,i[7].hole_id),f(c,v),f(c,m),f(m,_),f(m,x),f(m,b),Ke(b,i[7].elevation),f(t,A),f(t,C),f(C,T),f(T,w),f(T,U),f(T,y),Ke(y,i[7].longitude),f(C,N),f(C,K),f(K,$),f(K,j),f(K,W),Ke(W,i[7].latitude),f(t,ee),f(t,te),f(t,ue),f(t,le),f(le,ce),f(ce,fe),f(ce,J),f(ce,oe);for(let P=0;P<ie.length;P+=1)ie[P]&&ie[P].m(oe,null);f(t,D),f(t,I),f(I,be),f(I,Ce),f(I,q),ye||(Ne=[ze(g,"input",i[28]),ze(b,"input",i[29]),ze(y,"input",i[30]),ze(W,"input",i[31]),ze(be,"click",i[36]),ze(q,"click",i[13]),ze(e,"click",Fs(i[37]))],ye=!0)},p(_e,k){if(k[0]&128&&r!==(r=_e[7].hole_id+"")&&Ve(o,r),k[0]&128&&g.value!==_e[7].hole_id&&Ke(g,_e[7].hole_id),k[0]&128&&ct(b.value)!==_e[7].elevation&&Ke(b,_e[7].elevation),k[0]&128&&ct(y.value)!==_e[7].longitude&&Ke(y,_e[7].longitude),k[0]&128&&ct(W.value)!==_e[7].latitude&&Ke(W,_e[7].latitude),k[0]&128){ae=et(_e[7].layers);let P;for(P=0;P<ae.length;P+=1){const ve=oa(_e,ae,P);ie[P]?ie[P].p(ve,k):(ie[P]=Sa(ve),ie[P].c(),ie[P].m(oe,null))}for(;P<ie.length;P+=1)ie[P].d(1);ie.length=ae.length}},d(_e){_e&&S(e),Et(ie,_e),ye=!1,At(Ne)}}}function Sa(i){let e,t,n=i[41].layer_no+"",s,r,o,a,c,l,u,h,d,g,v,m,_,p,x,b;function A(){i[32].call(a,i[42],i[43])}function C(){i[33].call(u,i[42],i[43])}function T(){i[34].call(g,i[42],i[43])}function w(){i[35].call(_,i[42],i[43])}return{c(){e=M("tr"),t=M("td"),s=pe(n),r=V(),o=M("td"),a=M("input"),c=V(),l=M("td"),u=M("input"),h=V(),d=M("td"),g=M("input"),v=V(),m=M("td"),_=M("input"),p=V(),this.h()},l(L){e=E(L,"TR",{});var U=F(e);t=E(U,"TD",{});var y=F(t);s=de(y,n),y.forEach(S),r=z(U),o=E(U,"TD",{});var N=F(o);a=E(N,"INPUT",{type:!0,step:!0,style:!0,class:!0}),N.forEach(S),c=z(U),l=E(U,"TD",{});var K=F(l);u=E(K,"INPUT",{type:!0,step:!0,style:!0,class:!0}),K.forEach(S),h=z(U),d=E(U,"TD",{});var $=F(d);g=E($,"INPUT",{type:!0,style:!0,class:!0}),$.forEach(S),v=z(U),m=E(U,"TD",{});var O=F(m);_=E(O,"INPUT",{type:!0,step:!0,style:!0,class:!0}),O.forEach(S),p=z(U),U.forEach(S),this.h()},h(){R(a,"type","number"),R(a,"step","0.1"),me(a,"width","70px"),R(a,"class","svelte-jbi2uy"),R(u,"type","number"),R(u,"step","0.1"),me(u,"width","70px"),R(u,"class","svelte-jbi2uy"),R(g,"type","text"),me(g,"width","100px"),R(g,"class","svelte-jbi2uy"),R(_,"type","number"),R(_,"step","0.1"),me(_,"width","60px"),R(_,"class","svelte-jbi2uy")},m(L,U){ge(L,e,U),f(e,t),f(t,s),f(e,r),f(e,o),f(o,a),Ke(a,i[41].top_depth),f(e,c),f(e,l),f(l,u),Ke(u,i[41].bottom_depth),f(e,h),f(e,d),f(d,g),Ke(g,i[41].lithology_name),f(e,v),f(e,m),f(m,_),Ke(_,i[41].spt_n),f(e,p),x||(b=[ze(a,"input",A),ze(u,"input",C),ze(g,"input",T),ze(_,"input",w)],x=!0)},p(L,U){i=L,U[0]&128&&n!==(n=i[41].layer_no+"")&&Ve(s,n),U[0]&128&&ct(a.value)!==i[41].top_depth&&Ke(a,i[41].top_depth),U[0]&128&&ct(u.value)!==i[41].bottom_depth&&Ke(u,i[41].bottom_depth),U[0]&128&&g.value!==i[41].lithology_name&&Ke(g,i[41].lithology_name),U[0]&128&&ct(_.value)!==i[41].spt_n&&Ke(_,i[41].spt_n)},d(L){L&&S(e),x=!1,At(b)}}}function mh(i){let e,t,n="钻孔数据管理",s,r,o,a="导入CSV",c,l,u=i[4]?"隐藏":"颜色",h,d,g,v,m,_,p,x,b,A=i[4]&&ha(i);function C(y,N){return y[9].length===0?ph:dh}let T=C(i),w=T(i),L=i[0]&&_a(i),U=i[7]&&Ma(i);return{c(){e=M("div"),t=M("h3"),t.textContent=n,s=V(),r=M("div"),o=M("button"),o.textContent=a,c=V(),l=M("button"),h=pe(u),d=V(),g=M("div"),A&&A.c(),v=V(),w.c(),m=V(),L&&L.c(),_=V(),U&&U.c(),p=It(),this.h()},l(y){e=E(y,"DIV",{class:!0});var N=F(e);t=E(N,"H3",{"data-svelte-h":!0}),Pe(t)!=="svelte-1xeck8m"&&(t.textContent=n),s=z(N),r=E(N,"DIV",{style:!0});var K=F(r);o=E(K,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(o)!=="svelte-vemyzj"&&(o.textContent=a),c=z(K),l=E(K,"BUTTON",{class:!0});var $=F(l);h=de($,u),$.forEach(S),K.forEach(S),N.forEach(S),d=z(y),g=E(y,"DIV",{class:!0});var O=F(g);A&&A.l(O),v=z(O),w.l(O),O.forEach(S),m=z(y),L&&L.l(y),_=z(y),U&&U.l(y),p=It(),this.h()},h(){R(o,"class","btn-primary btn-sm"),R(l,"class","btn-secondary btn-sm"),me(r,"display","flex"),me(r,"gap","6px"),R(e,"class","panel-header"),R(g,"class","panel-body scrollable")},m(y,N){ge(y,e,N),f(e,t),f(e,s),f(e,r),f(r,o),f(r,c),f(r,l),f(l,h),ge(y,d,N),ge(y,g,N),A&&A.m(g,null),f(g,v),w.m(g,null),ge(y,m,N),L&&L.m(y,N),ge(y,_,N),U&&U.m(y,N),ge(y,p,N),x||(b=[ze(o,"click",i[17]),ze(l,"click",i[18])],x=!0)},p(y,N){N[0]&16&&u!==(u=y[4]?"隐藏":"颜色")&&Ve(h,u),y[4]?A?A.p(y,N):(A=ha(y),A.c(),A.m(g,v)):A&&(A.d(1),A=null),T===(T=C(y))&&w?w.p(y,N):(w.d(1),w=T(y),w&&(w.c(),w.m(g,null))),y[0]?L?L.p(y,N):(L=_a(y),L.c(),L.m(_.parentNode,_)):L&&(L.d(1),L=null),y[7]?U?U.p(y,N):(U=Ma(y),U.c(),U.m(p.parentNode,p)):U&&(U.d(1),U=null)},i:yt,o:yt,d(y){y&&(S(e),S(d),S(g),S(m),S(_),S(p)),A&&A.d(),w.d(),L&&L.d(y),U&&U.d(y),x=!1,At(b)}}}function _h(i,e,t){let n,s,r,o,a,c;Qe(i,Bn,D=>t(38,n=D)),Qe(i,pr,D=>t(6,s=D)),Qe(i,yn,D=>t(7,r=D)),Qe(i,cs,D=>t(16,o=D)),Qe(i,ti,D=>t(8,a=D)),Qe(i,Gn,D=>t(9,c=D));let l=!1,u=null,h=!1,d=null,g=!1,v={};async function m(){if(n)try{it(Gn,c=await ft.get(`/projects/${n.id}/boreholes`),c),it(ti,a=await ft.get(`/projects/${n.id}/lithology-types`),a);try{it(cs,o=await ft.getWaterLevels(n.id),o)}catch{}}catch(D){$e(`刷新失败: ${D.message}`,"error")}}async function _(){if(!(!u||!n)){t(2,h=!0);try{const D=await ft.uploadCsv(n.id,u);t(3,d=D),$e(`成功导入 ${D.imported} 个钻孔`,"success"),D.errors.length>0&&$e(`有 ${D.errors.length} 个错误`,"warning"),D.warnings.length>0&&D.warnings.forEach(I=>$e(I,"warning")),await m()}catch(D){$e(`导入失败: ${D.message}`,"error")}finally{t(2,h=!1)}}}async function p(D){if(confirm("确定删除此钻孔？"))try{await ft.delete(`/projects/${n.id}/boreholes/${D}`),$e("钻孔已删除","info"),await m()}catch(I){$e(`删除失败: ${I.message}`,"error")}}function x(D){it(yn,r=JSON.parse(JSON.stringify(D)),r)}async function b(){if(r)try{await ft.put(`/projects/${n.id}/boreholes/${r.id}`,r),$e("钻孔已更新","success"),it(yn,r=null,r),await m()}catch(D){$e(`更新失败: ${D.message}`,"error")}}function A(D){s.includes(D)?it(pr,s=s.filter(I=>I!==D),s):it(pr,s=[...s,D],s)}async function C(D){try{await ft.put(`/projects/${n.id}/lithology-types/${D.id}`,{color:D.color,layer_order:D.layer_order}),$e("颜色已更新","success")}catch(I){$e(`颜色更新失败: ${I.message}`,"error")}}const T=()=>t(0,l=!0),w=()=>t(4,g=!g);function L(D,I){D[I].color=this.value,ti.set(a)}const U=D=>C(D),y=D=>A(D.id),N=D=>x(D),K=D=>p(D.id),$=(D,I)=>I.name===D.lithology_name,O=D=>t(1,u=D.target.files[0]),j=()=>{t(0,l=!1),t(3,d=null)},W=()=>{t(0,l=!1),t(3,d=null)};function ee(){r.hole_id=this.value,yn.set(r)}function te(){r.elevation=ct(this.value),yn.set(r)}function se(){r.longitude=ct(this.value),yn.set(r)}function ue(){r.latitude=ct(this.value),yn.set(r)}function le(D,I){D[I].top_depth=ct(this.value),yn.set(r)}function ce(D,I){D[I].bottom_depth=ct(this.value),yn.set(r)}function fe(D,I){D[I].lithology_name=this.value,yn.set(r)}function B(D,I){D[I].spt_n=ct(this.value),yn.set(r)}const J=()=>it(yn,r=null,r),oe=()=>it(yn,r=null,r);return i.$$.update=()=>{if(i.$$.dirty[0]&65536){const D={};o.forEach(I=>{D[I.borehole_id]||(D[I.borehole_id]=[]),D[I.borehole_id].push(I)}),t(5,v=D)}},[l,u,h,d,g,v,s,r,a,c,_,p,x,b,A,C,o,T,w,L,U,y,N,K,$,O,j,W,ee,te,se,ue,le,ce,fe,B,J,oe]}class gh extends pn{constructor(e){super(),mn(this,e,_h,mh,dn,{},null,[-1,-1])}}function ya(i,e,t){const n=i.slice();return n[40]=e[t],n}function Ta(i,e,t){const n=i.slice();return n[43]=e[t],n[45]=t,n}function wa(i,e,t){const n=i.slice();return n[46]=e[t],n}function Aa(i,e,t){const n=i.slice();return n[46]=e[t],n}function Ca(i,e,t){const n=i.slice();return n[46]=e[t],n}function Ra(i,e,t){const n=i.slice();return n[53]=e[t],n}function Pa(i){let e,t=i[53].hole_id+"",n;return{c(){e=M("span"),n=pe(t),this.h()},l(s){e=E(s,"SPAN",{class:!0});var r=F(e);n=de(r,t),r.forEach(S),this.h()},h(){R(e,"class","badge badge-info")},m(s,r){ge(s,e,r),f(e,n)},p(s,r){r[0]&6144&&t!==(t=s[53].hole_id+"")&&Ve(n,t)},d(s){s&&S(e)}}}function La(i){let e,t="请在钻孔管理中选择2个以上钻孔";return{c(){e=M("span"),e.textContent=t,this.h()},l(n){e=E(n,"SPAN",{style:!0,"data-svelte-h":!0}),Pe(e)!=="svelte-1k8zcgx"&&(e.textContent=t),this.h()},h(){me(e,"font-size","11px"),me(e,"color","var(--text-muted)")},m(n,s){ge(n,e,s)},d(n){n&&S(e)}}}function Da(i){let e,t,n="剖面列表",s,r=et(i[10]),o=[];for(let a=0;a<r.length;a+=1)o[a]=Ia(Ca(i,r,a));return{c(){e=M("div"),t=M("h4"),t.textContent=n,s=V();for(let a=0;a<o.length;a+=1)o[a].c();this.h()},l(a){e=E(a,"DIV",{class:!0});var c=F(e);t=E(c,"H4",{style:!0,"data-svelte-h":!0}),Pe(t)!=="svelte-dgmf3y"&&(t.textContent=n),s=z(c);for(let l=0;l<o.length;l+=1)o[l].l(c);c.forEach(S),this.h()},h(){me(t,"font-size","13px"),me(t,"margin-bottom","8px"),R(e,"class","profile-list")},m(a,c){ge(a,e,c),f(e,t),f(e,s);for(let l=0;l<o.length;l+=1)o[l]&&o[l].m(e,null)},p(a,c){if(c[0]&33824){r=et(a[10]);let l;for(l=0;l<r.length;l+=1){const u=Ca(a,r,l);o[l]?o[l].p(u,c):(o[l]=Ia(u),o[l].c(),o[l].m(e,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=r.length}},d(a){a&&S(e),Et(o,a)}}}function Ia(i){let e,t,n=i[46].name+"",s,r,o,a=i[46].interpolation_method+"",c,l,u,h;function d(){return i[24](i[46])}return{c(){e=M("div"),t=M("span"),s=pe(n),r=V(),o=M("span"),c=pe(a),l=V(),this.h()},l(g){e=E(g,"DIV",{class:!0});var v=F(e);t=E(v,"SPAN",{});var m=F(t);s=de(m,n),m.forEach(S),r=z(v),o=E(v,"SPAN",{class:!0});var _=F(o);c=de(_,a),_.forEach(S),l=z(v),v.forEach(S),this.h()},h(){R(o,"class","badge badge-info"),R(e,"class","profile-item svelte-1h3xo7h"),Kt(e,"active",i[5]===i[46].id)},m(g,v){ge(g,e,v),f(e,t),f(t,s),f(e,r),f(e,o),f(o,c),f(e,l),u||(h=ze(e,"click",d),u=!0)},p(g,v){i=g,v[0]&1024&&n!==(n=i[46].name+"")&&Ve(s,n),v[0]&1024&&a!==(a=i[46].interpolation_method+"")&&Ve(c,a),v[0]&1056&&Kt(e,"active",i[5]===i[46].id)},d(g){g&&S(e),u=!1,h()}}}function Na(i){let e,t,n="左剖面",s,r,o,a="选择剖面",c,l,u,h="右剖面",d,g,v,m="选择剖面",_,p,x=et(i[10]),b=[];for(let T=0;T<x.length;T+=1)b[T]=Ua(Aa(i,x,T));let A=et(i[10]),C=[];for(let T=0;T<A.length;T+=1)C[T]=Fa(wa(i,A,T));return{c(){e=M("div"),t=M("label"),t.textContent=n,s=V(),r=M("select"),o=M("option"),o.textContent=a;for(let T=0;T<b.length;T+=1)b[T].c();c=V(),l=M("div"),u=M("label"),u.textContent=h,d=V(),g=M("select"),v=M("option"),v.textContent=m;for(let T=0;T<C.length;T+=1)C[T].c();this.h()},l(T){e=E(T,"DIV",{class:!0,style:!0});var w=F(e);t=E(w,"LABEL",{"data-svelte-h":!0}),Pe(t)!=="svelte-93im8q"&&(t.textContent=n),s=z(w),r=E(w,"SELECT",{});var L=F(r);o=E(L,"OPTION",{"data-svelte-h":!0}),Pe(o)!=="svelte-l2e5hj"&&(o.textContent=a);for(let N=0;N<b.length;N+=1)b[N].l(L);L.forEach(S),w.forEach(S),c=z(T),l=E(T,"DIV",{class:!0});var U=F(l);u=E(U,"LABEL",{"data-svelte-h":!0}),Pe(u)!=="svelte-1soi0kp"&&(u.textContent=h),d=z(U),g=E(U,"SELECT",{});var y=F(g);v=E(y,"OPTION",{"data-svelte-h":!0}),Pe(v)!=="svelte-l2e5hj"&&(v.textContent=m);for(let N=0;N<C.length;N+=1)C[N].l(y);y.forEach(S),U.forEach(S),this.h()},h(){o.__value=null,Ke(o,o.__value),i[2]===void 0&&hn(()=>i[25].call(r)),R(e,"class","form-group"),me(e,"margin-top","8px"),v.__value=null,Ke(v,v.__value),i[1]===void 0&&hn(()=>i[26].call(g)),R(l,"class","form-group")},m(T,w){ge(T,e,w),f(e,t),f(e,s),f(e,r),f(r,o);for(let L=0;L<b.length;L+=1)b[L]&&b[L].m(r,null);Tt(r,i[2],!0),ge(T,c,w),ge(T,l,w),f(l,u),f(l,d),f(l,g),f(g,v);for(let L=0;L<C.length;L+=1)C[L]&&C[L].m(g,null);Tt(g,i[1],!0),_||(p=[ze(r,"change",i[25]),ze(g,"change",i[26])],_=!0)},p(T,w){if(w[0]&1024){x=et(T[10]);let L;for(L=0;L<x.length;L+=1){const U=Aa(T,x,L);b[L]?b[L].p(U,w):(b[L]=Ua(U),b[L].c(),b[L].m(r,null))}for(;L<b.length;L+=1)b[L].d(1);b.length=x.length}if(w[0]&1028&&Tt(r,T[2]),w[0]&1024){A=et(T[10]);let L;for(L=0;L<A.length;L+=1){const U=wa(T,A,L);C[L]?C[L].p(U,w):(C[L]=Fa(U),C[L].c(),C[L].m(g,null))}for(;L<C.length;L+=1)C[L].d(1);C.length=A.length}w[0]&1026&&Tt(g,T[1])},d(T){T&&(S(e),S(c),S(l)),Et(b,T),Et(C,T),_=!1,At(p)}}}function Ua(i){let e,t=i[46].name+"",n,s;return{c(){e=M("option"),n=pe(t),this.h()},l(r){e=E(r,"OPTION",{});var o=F(e);n=de(o,t),o.forEach(S),this.h()},h(){e.__value=s=i[46].id,Ke(e,e.__value)},m(r,o){ge(r,e,o),f(e,n)},p(r,o){o[0]&1024&&t!==(t=r[46].name+"")&&Ve(n,t),o[0]&1024&&s!==(s=r[46].id)&&(e.__value=s,Ke(e,e.__value))},d(r){r&&S(e)}}}function Fa(i){let e,t=i[46].name+"",n,s;return{c(){e=M("option"),n=pe(t),this.h()},l(r){e=E(r,"OPTION",{});var o=F(e);n=de(o,t),o.forEach(S),this.h()},h(){e.__value=s=i[46].id,Ke(e,e.__value)},m(r,o){ge(r,e,o),f(e,n)},p(r,o){o[0]&1024&&t!==(t=r[46].name+"")&&Ve(n,t),o[0]&1024&&s!==(s=r[46].id)&&(e.__value=s,Ke(e,e.__value))},d(r){r&&S(e)}}}function Oa(i){var oe;let e,t,n,s="剖面图预览",r,o,a,c,l,u,h,d="标注管理",g,v,m,_,p="添加文字标注",x,b,A,C,T,w,L="X (距离m)",U,y,N,K,$,O="Y (高程m)",j,W,ee,te,se="添加标注",ue,le,ce=((oe=i[6].lithologies)==null?void 0:oe.length)>0&&ka(i);function fe(D,I){return D[7].length>0?bh:vh}let B=fe(i),J=B(i);return{c(){e=M("hr"),t=V(),n=M("h4"),n.textContent=s,r=V(),o=M("div"),a=M("canvas"),c=V(),ce&&ce.c(),l=V(),u=M("div"),h=M("h4"),h.textContent=d,g=V(),J.c(),v=V(),m=M("div"),_=M("label"),_.textContent=p,x=V(),b=M("input"),A=V(),C=M("div"),T=M("div"),w=M("label"),w.textContent=L,U=V(),y=M("input"),N=V(),K=M("div"),$=M("label"),$.textContent=O,j=V(),W=M("input"),ee=V(),te=M("button"),te.textContent=se,this.h()},l(D){e=E(D,"HR",{style:!0}),t=z(D),n=E(D,"H4",{style:!0,"data-svelte-h":!0}),Pe(n)!=="svelte-1vo8psn"&&(n.textContent=s),r=z(D),o=E(D,"DIV",{class:!0});var I=F(o);a=E(I,"CANVAS",{id:!0,width:!0,height:!0}),F(a).forEach(S),I.forEach(S),c=z(D),ce&&ce.l(D),l=z(D),u=E(D,"DIV",{class:!0});var be=F(u);h=E(be,"H4",{style:!0,"data-svelte-h":!0}),Pe(h)!=="svelte-4x8l83"&&(h.textContent=d),g=z(be),J.l(be),v=z(be),m=E(be,"DIV",{class:!0,style:!0});var Se=F(m);_=E(Se,"LABEL",{"data-svelte-h":!0}),Pe(_)!=="svelte-dpqsoy"&&(_.textContent=p),x=z(Se),b=E(Se,"INPUT",{type:!0,placeholder:!0}),Se.forEach(S),A=z(be),C=E(be,"DIV",{class:!0});var Ce=F(C);T=E(Ce,"DIV",{class:!0});var q=F(T);w=E(q,"LABEL",{"data-svelte-h":!0}),Pe(w)!=="svelte-130i8ji"&&(w.textContent=L),U=z(q),y=E(q,"INPUT",{type:!0}),q.forEach(S),N=z(Ce),K=E(Ce,"DIV",{class:!0});var Ae=F(K);$=E(Ae,"LABEL",{"data-svelte-h":!0}),Pe($)!=="svelte-xhi5gk"&&($.textContent=O),j=z(Ae),W=E(Ae,"INPUT",{type:!0}),Ae.forEach(S),Ce.forEach(S),ee=z(be),te=E(be,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),Pe(te)!=="svelte-jb8zg8"&&(te.textContent=se),be.forEach(S),this.h()},h(){me(e,"border-color","var(--border)"),me(e,"margin","12px 0"),me(n,"font-size","13px"),me(n,"margin-bottom","8px"),R(a,"id","profileCanvas"),R(a,"width","340"),R(a,"height","280"),R(o,"class","profile-preview svelte-1h3xo7h"),me(h,"font-size","13px"),me(h,"margin","8px 0"),R(b,"type","text"),R(b,"placeholder","标注内容"),R(m,"class","form-group"),me(m,"margin-top","8px"),R(y,"type","number"),R(T,"class","form-group"),R(W,"type","number"),R(K,"class","form-group"),R(C,"class","form-row"),R(te,"class","btn-secondary btn-sm"),me(te,"width","100%"),R(u,"class","annotation-section svelte-1h3xo7h")},m(D,I){ge(D,e,I),ge(D,t,I),ge(D,n,I),ge(D,r,I),ge(D,o,I),f(o,a),i[27](a),ge(D,c,I),ce&&ce.m(D,I),ge(D,l,I),ge(D,u,I),f(u,h),f(u,g),J.m(u,null),f(u,v),f(u,m),f(m,_),f(m,x),f(m,b),Ke(b,i[8].text_content),f(u,A),f(u,C),f(C,T),f(T,w),f(T,U),f(T,y),Ke(y,i[8].x),f(C,N),f(C,K),f(K,$),f(K,j),f(K,W),Ke(W,i[8].y),f(u,ee),f(u,te),ue||(le=[ze(b,"input",i[29]),ze(y,"input",i[30]),ze(W,"input",i[31]),ze(te,"click",i[16])],ue=!0)},p(D,I){var be;((be=D[6].lithologies)==null?void 0:be.length)>0?ce?ce.p(D,I):(ce=ka(D),ce.c(),ce.m(l.parentNode,l)):ce&&(ce.d(1),ce=null),B===(B=fe(D))&&J?J.p(D,I):(J.d(1),J=B(D),J&&(J.c(),J.m(u,v))),I[0]&256&&b.value!==D[8].text_content&&Ke(b,D[8].text_content),I[0]&256&&ct(y.value)!==D[8].x&&Ke(y,D[8].x),I[0]&256&&ct(W.value)!==D[8].y&&Ke(W,D[8].y)},d(D){D&&(S(e),S(t),S(n),S(r),S(o),S(c),S(l),S(u)),i[27](null),ce&&ce.d(D),J.d(),ue=!1,At(le)}}}function ka(i){let e,t,n="图例",s,r,o=et(i[6].lithologies),a=[];for(let c=0;c<o.length;c+=1)a[c]=Ba(Ta(i,o,c));return{c(){e=M("div"),t=M("h5"),t.textContent=n,s=V(),r=M("div");for(let c=0;c<a.length;c+=1)a[c].c();this.h()},l(c){e=E(c,"DIV",{class:!0});var l=F(e);t=E(l,"H5",{style:!0,"data-svelte-h":!0}),Pe(t)!=="svelte-1b0yqne"&&(t.textContent=n),s=z(l),r=E(l,"DIV",{class:!0});var u=F(r);for(let h=0;h<a.length;h+=1)a[h].l(u);u.forEach(S),l.forEach(S),this.h()},h(){me(t,"font-size","11px"),me(t,"margin","8px 0 4px"),me(t,"color","var(--text-secondary)"),R(r,"class","legend-list svelte-1h3xo7h"),R(e,"class","legend-box svelte-1h3xo7h")},m(c,l){ge(c,e,l),f(e,t),f(e,s),f(e,r);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(r,null)},p(c,l){if(l[0]&8256){o=et(c[6].lithologies);let u;for(u=0;u<o.length;u+=1){const h=Ta(c,o,u);a[u]?a[u].p(h,l):(a[u]=Ba(h),a[u].c(),a[u].m(r,null))}for(;u<a.length;u+=1)a[u].d(1);a.length=o.length}},d(c){c&&S(e),Et(a,c)}}}function Ba(i){let e,t,n,s,r=i[43]+"",o,a;return{c(){e=M("div"),t=M("span"),n=V(),s=M("span"),o=pe(r),a=V(),this.h()},l(c){e=E(c,"DIV",{class:!0});var l=F(e);t=E(l,"SPAN",{class:!0,style:!0}),F(t).forEach(S),n=z(l),s=E(l,"SPAN",{style:!0});var u=F(s);o=de(u,r),u.forEach(S),a=z(l),l.forEach(S),this.h()},h(){R(t,"class","color-swatch"),me(t,"background",i[13](i[43],i[45])),me(s,"font-size","11px"),R(e,"class","legend-item svelte-1h3xo7h")},m(c,l){ge(c,e,l),f(e,t),f(e,n),f(e,s),f(s,o),f(e,a)},p(c,l){l[0]&64&&me(t,"background",c[13](c[43],c[45])),l[0]&64&&r!==(r=c[43]+"")&&Ve(o,r)},d(c){c&&S(e)}}}function vh(i){let e,t="暂无标注";return{c(){e=M("p"),e.textContent=t,this.h()},l(n){e=E(n,"P",{style:!0,"data-svelte-h":!0}),Pe(e)!=="svelte-191p6fb"&&(e.textContent=t),this.h()},h(){me(e,"font-size","11px"),me(e,"color","var(--text-muted)"),me(e,"margin-bottom","6px")},m(n,s){ge(n,e,s)},p:yt,d(n){n&&S(e)}}}function bh(i){let e,t=et(i[7]),n=[];for(let s=0;s<t.length;s+=1)n[s]=za(ya(i,t,s));return{c(){for(let s=0;s<n.length;s+=1)n[s].c();e=It()},l(s){for(let r=0;r<n.length;r+=1)n[r].l(s);e=It()},m(s,r){for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(s,r);ge(s,e,r)},p(s,r){if(r[0]&131200){t=et(s[7]);let o;for(o=0;o<t.length;o+=1){const a=ya(s,t,o);n[o]?n[o].p(a,r):(n[o]=za(a),n[o].c(),n[o].m(e.parentNode,e))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}},d(s){s&&S(e),Et(n,s)}}}function za(i){let e,t,n=i[40].type==="text"?"📝":"➤",s,r,o=(i[40].text_content||`(${i[40].x}, ${i[40].y})`)+"",a,c,l,u="✕",h,d,g;function v(){return i[28](i[40])}return{c(){e=M("div"),t=M("span"),s=pe(n),r=V(),a=pe(o),c=V(),l=M("button"),l.textContent=u,h=V(),this.h()},l(m){e=E(m,"DIV",{class:!0});var _=F(e);t=E(_,"SPAN",{});var p=F(t);s=de(p,n),r=z(p),a=de(p,o),p.forEach(S),c=z(_),l=E(_,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(l)!=="svelte-8rblco"&&(l.textContent=u),h=z(_),_.forEach(S),this.h()},h(){R(l,"class","btn-danger btn-sm"),R(e,"class","ann-item svelte-1h3xo7h")},m(m,_){ge(m,e,_),f(e,t),f(t,s),f(t,r),f(t,a),f(e,c),f(e,l),f(e,h),d||(g=ze(l,"click",v),d=!0)},p(m,_){i=m,_[0]&128&&n!==(n=i[40].type==="text"?"📝":"➤")&&Ve(s,n),_[0]&128&&o!==(o=(i[40].text_content||`(${i[40].x}, ${i[40].y})`)+"")&&Ve(a,o)},d(m){m&&S(e),d=!1,g()}}}function xh(i){let e,t,n="剖面分析",s,r,o,a,c,l,u,h,d,g,v,m,_,p="剖面名称",x,b,A,C,T,w="插值方式",L,U,y,N="线性插值",K,$="三次样条",O,j="Kriging地统计插值",W,ee,te,se,ue=i[11].length+"",le,ce,fe,B,J,oe,D,I="生成剖面",be,Se,Ce,q,Ae,ye,Ne,ae,ie,_e,k,P,ve=et(i[12].filter(i[23])),Te=[];for(let Q=0;Q<ve.length;Q+=1)Te[Q]=Pa(Ra(i,ve,Q));let X=i[11].length<2&&La(),H=i[10].length>0&&Da(i),Y=i[0]&&Na(i),he=i[6]&&Oa(i);return{c(){e=M("div"),t=M("h3"),t.textContent=n,s=V(),r=M("div"),o=M("button"),a=pe("PNG"),l=V(),u=M("button"),h=pe("SVG"),g=V(),v=M("div"),m=M("div"),_=M("label"),_.textContent=p,x=V(),b=M("input"),A=V(),C=M("div"),T=M("label"),T.textContent=w,L=V(),U=M("select"),y=M("option"),y.textContent=N,K=M("option"),K.textContent=$,O=M("option"),O.textContent=j,W=V(),ee=M("div"),te=M("label"),se=pe("已选钻孔 ("),le=pe(ue),ce=pe(")"),fe=V(),B=M("div");for(let Q=0;Q<Te.length;Q+=1)Te[Q].c();J=V(),X&&X.c(),oe=V(),D=M("button"),D.textContent=I,be=V(),H&&H.c(),Se=V(),Ce=M("hr"),q=V(),Ae=M("div"),ye=M("label"),Ne=M("input"),ae=pe(`
            剖面对比模式`),ie=V(),Y&&Y.c(),_e=V(),he&&he.c(),this.h()},l(Q){e=E(Q,"DIV",{class:!0});var re=F(e);t=E(re,"H3",{"data-svelte-h":!0}),Pe(t)!=="svelte-1tw5t1i"&&(t.textContent=n),s=z(re),r=E(re,"DIV",{style:!0});var Me=F(r);o=E(Me,"BUTTON",{class:!0});var Ee=F(o);a=de(Ee,"PNG"),Ee.forEach(S),l=z(Me),u=E(Me,"BUTTON",{class:!0});var xe=F(u);h=de(xe,"SVG"),xe.forEach(S),Me.forEach(S),re.forEach(S),g=z(Q),v=E(Q,"DIV",{class:!0});var Re=F(v);m=E(Re,"DIV",{class:!0});var Ye=F(m);_=E(Ye,"LABEL",{"data-svelte-h":!0}),Pe(_)!=="svelte-aae5qr"&&(_.textContent=p),x=z(Ye),b=E(Ye,"INPUT",{type:!0,placeholder:!0}),Ye.forEach(S),A=z(Re),C=E(Re,"DIV",{class:!0});var Fe=F(C);T=E(Fe,"LABEL",{"data-svelte-h":!0}),Pe(T)!=="svelte-w2ab1e"&&(T.textContent=w),L=z(Fe),U=E(Fe,"SELECT",{});var Le=F(U);y=E(Le,"OPTION",{"data-svelte-h":!0}),Pe(y)!=="svelte-1acgaat"&&(y.textContent=N),K=E(Le,"OPTION",{"data-svelte-h":!0}),Pe(K)!=="svelte-b97obq"&&(K.textContent=$),O=E(Le,"OPTION",{"data-svelte-h":!0}),Pe(O)!=="svelte-m7cjkk"&&(O.textContent=j),Le.forEach(S),Fe.forEach(S),W=z(Re),ee=E(Re,"DIV",{class:!0});var ke=F(ee);te=E(ke,"LABEL",{});var Z=F(te);se=de(Z,"已选钻孔 ("),le=de(Z,ue),ce=de(Z,")"),Z.forEach(S),fe=z(ke),B=E(ke,"DIV",{class:!0});var Be=F(B);for(let G=0;G<Te.length;G+=1)Te[G].l(Be);J=z(Be),X&&X.l(Be),Be.forEach(S),ke.forEach(S),oe=z(Re),D=E(Re,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),Pe(D)!=="svelte-18tzs37"&&(D.textContent=I),be=z(Re),H&&H.l(Re),Se=z(Re),Ce=E(Re,"HR",{style:!0}),q=z(Re),Ae=E(Re,"DIV",{class:!0});var qe=F(Ae);ye=E(qe,"LABEL",{class:!0});var He=F(ye);Ne=E(He,"INPUT",{type:!0}),ae=de(He,`
            剖面对比模式`),He.forEach(S),ie=z(qe),Y&&Y.l(qe),qe.forEach(S),_e=z(Re),he&&he.l(Re),Re.forEach(S),this.h()},h(){R(o,"class","btn-secondary btn-sm"),o.disabled=c=!i[5],R(u,"class","btn-secondary btn-sm"),u.disabled=d=!i[5],me(r,"display","flex"),me(r,"gap","6px"),R(e,"class","panel-header"),R(b,"type","text"),R(b,"placeholder","输入剖面名称"),R(m,"class","form-group"),y.__value="linear",Ke(y,y.__value),K.__value="cubic_spline",Ke(K,K.__value),O.__value="kriging",Ke(O,O.__value),i[4]===void 0&&hn(()=>i[22].call(U)),R(C,"class","form-group"),R(B,"class","selected-bhs svelte-1h3xo7h"),R(ee,"class","form-group"),R(D,"class","btn-primary"),me(D,"width","100%"),me(D,"margin-bottom","12px"),me(Ce,"border-color","var(--border)"),me(Ce,"margin","12px 0"),R(Ne,"type","checkbox"),Ne.checked=i[0],R(ye,"class","checkbox-label"),R(Ae,"class","comparison-section svelte-1h3xo7h"),R(v,"class","panel-body scrollable")},m(Q,re){ge(Q,e,re),f(e,t),f(e,s),f(e,r),f(r,o),f(o,a),f(r,l),f(r,u),f(u,h),ge(Q,g,re),ge(Q,v,re),f(v,m),f(m,_),f(m,x),f(m,b),Ke(b,i[3]),f(v,A),f(v,C),f(C,T),f(C,L),f(C,U),f(U,y),f(U,K),f(U,O),Tt(U,i[4],!0),f(v,W),f(v,ee),f(ee,te),f(te,se),f(te,le),f(te,ce),f(ee,fe),f(ee,B);for(let Me=0;Me<Te.length;Me+=1)Te[Me]&&Te[Me].m(B,null);f(B,J),X&&X.m(B,null),f(v,oe),f(v,D),f(v,be),H&&H.m(v,null),f(v,Se),f(v,Ce),f(v,q),f(v,Ae),f(Ae,ye),f(ye,Ne),f(ye,ae),f(Ae,ie),Y&&Y.m(Ae,null),f(v,_e),he&&he.m(v,null),k||(P=[ze(o,"click",i[18]),ze(u,"click",i[19]),ze(b,"input",i[21]),ze(U,"change",i[22]),ze(D,"click",i[14]),ze(Ne,"change",i[20])],k=!0)},p(Q,re){if(re[0]&32&&c!==(c=!Q[5])&&(o.disabled=c),re[0]&32&&d!==(d=!Q[5])&&(u.disabled=d),re[0]&8&&b.value!==Q[3]&&Ke(b,Q[3]),re[0]&16&&Tt(U,Q[4]),re[0]&2048&&ue!==(ue=Q[11].length+"")&&Ve(le,ue),re[0]&6144){ve=et(Q[12].filter(Q[23]));let Me;for(Me=0;Me<ve.length;Me+=1){const Ee=Ra(Q,ve,Me);Te[Me]?Te[Me].p(Ee,re):(Te[Me]=Pa(Ee),Te[Me].c(),Te[Me].m(B,J))}for(;Me<Te.length;Me+=1)Te[Me].d(1);Te.length=ve.length}Q[11].length<2?X||(X=La(),X.c(),X.m(B,null)):X&&(X.d(1),X=null),Q[10].length>0?H?H.p(Q,re):(H=Da(Q),H.c(),H.m(v,Se)):H&&(H.d(1),H=null),re[0]&1&&(Ne.checked=Q[0]),Q[0]?Y?Y.p(Q,re):(Y=Na(Q),Y.c(),Y.m(Ae,null)):Y&&(Y.d(1),Y=null),Q[6]?he?he.p(Q,re):(he=Oa(Q),he.c(),he.m(v,null)):he&&(he.d(1),he=null)},i:yt,o:yt,d(Q){Q&&(S(e),S(g),S(v)),Et(Te,Q),X&&X.d(),H&&H.d(),Y&&Y.d(),he&&he.d(),k=!1,At(P)}}}function Eh(i,e,t){let n,s,r,o,a,c,l,u,h,d,g;Qe(i,br,D=>t(0,n=D)),Qe(i,Jo,D=>t(1,s=D)),Qe(i,Zo,D=>t(2,r=D)),Qe(i,As,D=>t(32,o=D)),Qe(i,ws,D=>t(33,a=D)),Qe(i,vr,D=>t(34,c=D)),Qe(i,Ps,D=>t(10,l=D)),Qe(i,pr,D=>t(11,u=D)),Qe(i,Bn,D=>t(35,h=D)),Qe(i,ti,D=>t(36,d=D)),Qe(i,Gn,D=>t(12,g=D));let v="",m="linear",_=null,p=null,x=[],b={type:"text",x:0,y:0,text_content:"",arrow_dx:0,arrow_dy:0},A=null;const C=["#E6B89C","#F0E68C","#CD853F","#8B7355","#A0522D","#DEB887","#D2B48C","#BDB76B","#BC8F8F","#C4A882","#9ACD32","#6B8E23","#556B2F","#8FBC8F","#2E8B57","#708090","#778899","#B0C4DE","#87CEEB","#4682B4"];function T(D,I=0){const be=d==null?void 0:d.find(Se=>Se.name===D);return be!=null&&be.color?be.color:C[I%C.length]}Sf(()=>{p&&A&&w()});function w(){if(!p||!A)return;const D=A.getContext("2d"),I=A.width,be=A.height,Se={top:30,right:20,bottom:40,left:60},Ce=I-Se.left-Se.right,q=be-Se.top-Se.bottom;D.clearRect(0,0,I,be),D.fillStyle="#ffffff",D.fillRect(0,0,I,be);const Ae=p.columns,ye=p.connections,Ne=p.total_distance>0?p.total_distance:100;let ae=1/0,ie=-1/0;Ae.forEach(X=>{X.layers.forEach(H=>{H.top_elevation>ie&&(ie=H.top_elevation),H.bottom_elevation<ae&&(ae=H.bottom_elevation)})}),ae===1/0&&(ae=0,ie=100);const _e=(ie-ae)*.1||10;ae-=_e,ie+=_e;const k=X=>Se.left+X/Ne*Ce,P=X=>Se.top+(ie-X)/(ie-ae)*q;D.strokeStyle="#cccccc",D.lineWidth=.5;for(let X=Math.ceil(ae);X<=ie;X+=Math.max(5,Math.round((ie-ae)/8))){const H=P(X);D.beginPath(),D.moveTo(Se.left,H),D.lineTo(I-Se.right,H),D.stroke(),D.fillStyle="#666",D.font="10px sans-serif",D.textAlign="right",D.textBaseline="middle",D.fillText(X.toFixed(0)+"m",Se.left-5,H)}D.strokeStyle="#cccccc";const ve=Math.max(10,Math.round(Ne/8));for(let X=0;X<=Ne;X+=ve){const H=k(X);D.beginPath(),D.moveTo(H,Se.top),D.lineTo(H,be-Se.bottom),D.stroke(),D.fillStyle="#666",D.font="10px sans-serif",D.textAlign="center",D.textBaseline="top",D.fillText(X.toFixed(0)+"m",H,be-Se.bottom+5)}const Te={};(p.lithologies||[]).forEach((X,H)=>{Te[X]=H}),ye.forEach(X=>{const H=T(X.lithology_name,Te[X.lithology_name]||0),Y=X.distances,he=X.top_elevations,Q=X.bottom_elevations;if(!(Y.length<2)){D.fillStyle=H,D.globalAlpha=.85,D.beginPath(),D.moveTo(k(Y[0]),P(he[0]));for(let re=1;re<Y.length;re++)D.lineTo(k(Y[re]),P(he[re]));for(let re=Y.length-1;re>=0;re--)D.lineTo(k(Y[re]),P(Q[re]));D.closePath(),D.fill(),D.globalAlpha=1,D.strokeStyle="#333",D.lineWidth=.8,D.beginPath();for(let re=0;re<Y.length;re++)re===0?D.moveTo(k(Y[re]),P(he[re])):D.lineTo(k(Y[re]),P(he[re]));D.stroke(),D.beginPath();for(let re=0;re<Y.length;re++)re===0?D.moveTo(k(Y[re]),P(Q[re])):D.lineTo(k(Y[re]),P(Q[re]));D.stroke()}}),Ae.forEach(X=>{const H=k(X.distance),Y=Math.max(12,Ce/Math.max(6,Ae.length+2));X.layers.forEach((he,Q)=>{const re=T(he.lithology_name,Te[he.lithology_name]||Q),Me=P(he.top_elevation),Ee=P(he.bottom_elevation),xe=Math.max(2,Ee-Me);D.fillStyle=re,D.globalAlpha=.95,D.fillRect(H-Y/2,Me,Y,xe),D.globalAlpha=1,D.strokeStyle="#000",D.lineWidth=1,D.strokeRect(H-Y/2,Me,Y,xe),D.fillStyle="#000",D.font="bold 10px sans-serif",D.textAlign="left",D.textBaseline="middle";const Re=(Me+Ee)/2;D.fillText(`${he.layer_no}  ${he.thickness.toFixed(1)}m`,H+Y/2+4,Re)}),D.fillStyle="#000",D.font="bold 11px sans-serif",D.textAlign="center",D.textBaseline="bottom",D.fillText(X.hole_id,H,Se.top-6)}),D.strokeStyle="#000",D.lineWidth=1,D.strokeRect(Se.left,Se.top,Ce,q),D.fillStyle="#333",D.font="12px sans-serif",D.textAlign="center",D.textBaseline="top",D.fillText("水平距离 (m)",I/2,be-14),D.save(),D.translate(14,be/2),D.rotate(-Math.PI/2),D.textAlign="center",D.textBaseline="middle",D.fillText("高程 (m)",0,0),D.restore()}async function L(){if(!h||u.length<2){$e("请至少选择2个钻孔","warning");return}if(!v.trim()){$e("请输入剖面名称","warning");return}try{const D=await ft.post(`/projects/${h.id}/profiles`,{name:v,borehole_ids:u,interpolation_method:m});it(Ps,l=[...l,D],l),t(3,v=""),$e("剖面线创建成功","success"),await U(D.id)}catch(D){$e(`创建失败: ${D.message}`,"error")}}async function U(D){t(5,_=D);try{t(6,p=await ft.get(`/projects/profiles/${D}/data`)),t(7,x=await ft.get(`/projects/profiles/${D}/annotations`)),it(vr,c=p,c),await yo(),w()}catch(I){$e(`加载剖面数据失败: ${I.message}`,"error")}}async function y(){if(_)try{const D=await ft.post(`/projects/profiles/${_}/annotations`,b);t(7,x=[...x,D]),$e("标注已添加","success")}catch(D){$e(`添加标注失败: ${D.message}`,"error")}}async function N(D){try{await ft.delete(`/projects/profiles/annotations/${D}`),t(7,x=x.filter(I=>I.id!==D))}catch(I){$e(`删除标注失败: ${I.message}`,"error")}}async function K(){if(_)try{await ft.downloadBlob(`/export/profile/${_}/png`,`profile_${_}.png`)}catch(D){$e(`导出PNG失败: ${D.message}`,"error")}}async function $(){if(_)try{await ft.downloadBlob(`/export/profile/${_}/svg`,`profile_${_}.svg`)}catch(D){$e(`导出SVG失败: ${D.message}`,"error")}}async function O(D){const I=D==="left"?r:s;if(I)try{const be=await ft.get(`/projects/profiles/${I}/data`);D==="left"?it(ws,a=be,a):it(As,o=be,o)}catch(be){$e(`加载对比剖面失败: ${be.message}`,"error")}}async function j(){it(br,n=!n,n),n?(r&&!a&&await O("left"),s&&!o&&await O("right")):(it(ws,a=null,a),it(As,o=null,o))}function W(){v=this.value,t(3,v)}function ee(){m=fn(this),t(4,m)}const te=D=>u.includes(D.id),se=D=>U(D.id);function ue(){r=fn(this),Zo.set(r)}function le(){s=fn(this),Jo.set(s)}function ce(D){ni[D?"unshift":"push"](()=>{A=D,t(9,A)})}const fe=D=>N(D.id);function B(){b.text_content=this.value,t(8,b)}function J(){b.x=ct(this.value),t(8,b)}function oe(){b.y=ct(this.value),t(8,b)}return i.$$.update=()=>{i.$$.dirty[0]&5&&r&&n&&O("left"),i.$$.dirty[0]&3&&s&&n&&O("right")},[n,s,r,v,m,_,p,x,b,A,l,u,g,T,L,U,y,N,K,$,j,W,ee,te,se,ue,le,ce,fe,B,J,oe]}class Mh extends pn{constructor(e){super(),mn(this,e,Eh,xh,dn,{},null,[-1,-1])}}function Sh(i){let e,t;return{c(){e=M("div"),t=M("canvas"),this.h()},l(n){e=E(n,"DIV",{class:!0});var s=F(e);t=E(s,"CANVAS",{id:!0,class:!0}),F(t).forEach(S),s.forEach(S),this.h()},h(){R(t,"id","mainProfileCanvas"),R(t,"class","svelte-1uozxjf"),R(e,"class","profile-canvas-container svelte-1uozxjf")},m(n,s){ge(n,e,s),f(e,t),i[5](t)},p:yt,i:yt,o:yt,d(n){n&&S(e),i[5](null)}}}function yh(i){if(!i||i.length<2)return[];const e=i.map(r=>r.distance),t=[];for(let r=1;r<e.length;r++)t.push(e[r]-e[r-1]);const n=t.reduce((r,o)=>r+o,0)/t.length,s=[];for(let r=0;r<t.length;r++)t[r]>n*2&&s.push({leftCol:r,rightCol:r+1,leftDist:e[r],rightDist:e[r+1],spacing:t[r],avgSpacing:n});return s}function Va(i,e,t,n,s,r,o,a,c){i.save(),i.beginPath(),i.moveTo(e,t),i.lineTo(a,c),i.lineTo(e,n),i.closePath(),i.clip(),i.strokeStyle="#555",i.lineWidth=.8;const l=6,u=Math.min(e,a),h=Math.max(e,a),d=Math.min(t,n,c),g=Math.max(t,n,c);for(let v=d;v<=g;v+=l)i.beginPath(),i.moveTo(u-5,v),i.lineTo(h+5,v+(h-u)*.5),i.stroke();i.restore(),i.save(),i.beginPath(),i.moveTo(a,c),i.lineTo(s,r),i.lineTo(s,o),i.closePath(),i.clip(),i.strokeStyle="#555",i.lineWidth=.8;for(let v=d;v<=g;v+=l)i.beginPath(),i.moveTo(u-5,v),i.lineTo(h+5,v+(h-u)*.5),i.stroke();i.restore()}function Ha(i){let e=1/0,t=-1/0;return i!=null&&i.columns?(i.columns.forEach(n=>{n.layers.forEach(s=>{s.top_elevation>t&&(t=s.top_elevation),s.bottom_elevation<e&&(e=s.bottom_elevation)})}),e===1/0&&(e=0,t=100),{min:e,max:t}):{min:0,max:100}}function Th(i,e,t){let n,s,r,o,a,c;Qe(i,As,m=>t(1,n=m)),Qe(i,ws,m=>t(2,s=m)),Qe(i,br,m=>t(3,r=m)),Qe(i,vr,m=>t(4,o=m)),Qe(i,To,m=>t(6,a=m)),Qe(i,ti,m=>t(7,c=m));let l=null;const u=["#E6B89C","#F0E68C","#CD853F","#8B7355","#A0522D","#DEB887","#D2B48C","#BDB76B","#BC8F8F","#C4A882","#9ACD32","#6B8E23","#556B2F","#8FBC8F","#2E8B57","#708090","#778899","#B0C4DE","#87CEEB","#4682B4"];function h(m,_=0){const p=c==null?void 0:c.find(x=>x.name===m);return p!=null&&p.color?p.color:u[_%u.length]}function d(m,_,p,x,b,A,C){var le;const T={top:40,right:30,bottom:50,left:70},w=x-T.left-T.right,L=b-T.top-T.bottom,U=_.columns,y=_.connections;if(!U||U.length===0)return;const N=_.total_distance>0?_.total_distance:100;let K=A,$=C;if(K===void 0||$===void 0){K=1/0,$=-1/0,U.forEach(fe=>{fe.layers.forEach(B=>{B.top_elevation>$&&($=B.top_elevation),B.bottom_elevation<K&&(K=B.bottom_elevation)})}),K===1/0&&(K=0,$=100);const ce=($-K)*.1||10;K-=ce,$+=ce}const O=ce=>p+T.left+ce/N*w,j=ce=>T.top+($-ce)/($-K)*L;m.strokeStyle="#dddddd",m.lineWidth=.5;const W=Math.max(5,Math.round(($-K)/10));for(let ce=Math.ceil(K/W)*W;ce<=$;ce+=W){const fe=j(ce);m.beginPath(),m.moveTo(p+T.left,fe),m.lineTo(p+x-T.right,fe),m.stroke(),m.fillStyle="#888",m.font="11px sans-serif",m.textAlign="right",m.textBaseline="middle",m.fillText(ce.toFixed(0)+"m",p+T.left-8,fe)}m.strokeStyle="#dddddd";const ee=Math.max(10,Math.round(N/10));for(let ce=0;ce<=N;ce+=ee){const fe=O(ce);m.beginPath(),m.moveTo(fe,T.top),m.lineTo(fe,b-T.bottom),m.stroke(),m.fillStyle="#888",m.font="11px sans-serif",m.textAlign="center",m.textBaseline="top",m.fillText(ce.toFixed(0)+"m",fe,b-T.bottom+8)}const te={};(_.lithologies||[]).forEach((ce,fe)=>{te[ce]=fe});const se={};U.forEach(ce=>{se[ce.hole_id]=new Set(ce.layers.map(fe=>fe.lithology_name))});const ue=yh(U);if(ue.length>0&&it(To,a=ue,a),y.forEach(ce=>{var Se,Ce;const fe=h(ce.lithology_name,te[ce.lithology_name]||0),B=ce.distances,J=ce.top_elevations,oe=ce.bottom_elevations;if(B.length<2)return;let D=!1,I=-1,be=-1;if(U.length>=2)for(let q=0;q<U.length-1;q++){const Ae=(Se=se[U[q].hole_id])==null?void 0:Se.has(ce.lithology_name),ye=(Ce=se[U[q+1].hole_id])==null?void 0:Ce.has(ce.lithology_name);if(Ae&&!ye){D=!0,I=q,be=q+1;break}else if(!Ae&&ye){D=!0,I=q,be=q+1;break}}if(D){const q=U[I],Ae=U[be],ye=q.distance,Ne=Ae.distance,ae=q.layers.find(xe=>xe.lithology_name===ce.lithology_name),ie=Ae.layers.find(xe=>xe.lithology_name===ce.lithology_name),_e=(ye+Ne)/2,k=Ne-ye,P=30,ve=j(ae?ae.top_elevation:0),Te=j(ae?ae.bottom_elevation:0),X=j(ie?ie.top_elevation:0),H=j(ie?ie.bottom_elevation:0),Y=O(_e),he=ae?(j(ae.top_elevation)+j(ae.bottom_elevation))/2:(j(ie.top_elevation)+j(ie.bottom_elevation))/2;if(m.fillStyle=fe,m.globalAlpha=.7,m.beginPath(),ae&&!ie){m.moveTo(O(ye),j(ae.top_elevation));for(let xe=1;xe<=P;xe++){const Re=xe/P,Ye=ye+Re*k,Fe=ae.top_elevation*(1-Re)+(ae.top_elevation+ae.bottom_elevation)/2*Re;ae.bottom_elevation*(1-Re)+(ae.top_elevation+ae.bottom_elevation)/2*Re,m.lineTo(O(Ye),j(Fe))}for(let xe=P;xe>=1;xe--){const Re=xe/P,Ye=ye+Re*k,Fe=ae.bottom_elevation*(1-Re)+(ae.top_elevation+ae.bottom_elevation)/2*Re;m.lineTo(O(Ye),j(Fe))}m.closePath(),m.fill(),m.globalAlpha=1,Va(m,O(ye),j(ae.top_elevation),j(ae.bottom_elevation),O(Ne),X,H,Y,he)}else if(!ae&&ie){m.moveTo(O(Ne),j(ie.top_elevation));for(let xe=P-1;xe>=0;xe--){const Re=xe/P,Ye=_e+Re*(Ne-_e),Fe=(ie.top_elevation+ie.bottom_elevation)/2*(1-Re)+ie.top_elevation*Re;(ie.top_elevation+ie.bottom_elevation)/2*(1-Re)+ie.bottom_elevation*Re,m.lineTo(O(Ye),j(Fe))}for(let xe=0;xe<P;xe++){const Re=xe/P,Ye=_e+Re*(Ne-_e),Fe=(ie.top_elevation+ie.bottom_elevation)/2*(1-Re)+ie.bottom_elevation*Re;m.lineTo(O(Ye),j(Fe))}m.closePath(),m.fill(),m.globalAlpha=1,Va(m,O(ye),ve,Te,O(Ne),j(ie.top_elevation),j(ie.bottom_elevation),Y,he)}const Q=ae?ye:_e,re=ie?Ne:_e,Me=B.findIndex(xe=>xe>=Q-1),Ee=B.findIndex(xe=>xe>=re+1);if(Me>=0&&Ee>Me){m.fillStyle=fe,m.globalAlpha=.85,m.beginPath(),m.moveTo(O(B[0]),j(J[0]));for(let xe=1;xe<Me;xe++)m.lineTo(O(B[xe]),j(J[xe]));for(let xe=Me-1;xe>=0;xe--)m.lineTo(O(B[xe]),j(oe[xe]));m.closePath(),m.fill(),m.globalAlpha=1,m.strokeStyle="#444",m.lineWidth=1,m.beginPath();for(let xe=0;xe<Me;xe++)xe===0?m.moveTo(O(B[xe]),j(J[xe])):m.lineTo(O(B[xe]),j(J[xe]));m.stroke(),m.beginPath();for(let xe=0;xe<Me;xe++)xe===0?m.moveTo(O(B[xe]),j(oe[xe])):m.lineTo(O(B[xe]),j(oe[xe]));if(m.stroke(),Ee<B.length){m.fillStyle=fe,m.globalAlpha=.85,m.beginPath(),m.moveTo(O(B[Ee]),j(J[Ee]));for(let xe=Ee+1;xe<B.length;xe++)m.lineTo(O(B[xe]),j(J[xe]));for(let xe=B.length-1;xe>=Ee;xe--)m.lineTo(O(B[xe]),j(oe[xe]));m.closePath(),m.fill(),m.globalAlpha=1,m.strokeStyle="#444",m.lineWidth=1,m.beginPath();for(let xe=Ee;xe<B.length;xe++)xe===Ee?m.moveTo(O(B[xe]),j(J[xe])):m.lineTo(O(B[xe]),j(J[xe]));m.stroke(),m.beginPath();for(let xe=Ee;xe<B.length;xe++)xe===Ee?m.moveTo(O(B[xe]),j(oe[xe])):m.lineTo(O(B[xe]),j(oe[xe]));m.stroke()}}}else{m.fillStyle=fe,m.globalAlpha=.85,m.beginPath(),m.moveTo(O(B[0]),j(J[0]));for(let q=1;q<B.length;q++)m.lineTo(O(B[q]),j(J[q]));for(let q=B.length-1;q>=0;q--)m.lineTo(O(B[q]),j(oe[q]));m.closePath(),m.fill(),m.globalAlpha=1,m.strokeStyle="#444",m.lineWidth=1,m.beginPath();for(let q=0;q<B.length;q++)q===0?m.moveTo(O(B[q]),j(J[q])):m.lineTo(O(B[q]),j(J[q]));m.stroke(),m.beginPath();for(let q=0;q<B.length;q++)q===0?m.moveTo(O(B[q]),j(oe[q])):m.lineTo(O(B[q]),j(oe[q]));m.stroke()}}),ue.forEach(ce=>{const fe=O(ce.leftDist),B=O(ce.rightDist),J=T.top+2;m.save(),m.setLineDash([6,4]),m.strokeStyle="#e03030",m.lineWidth=2,m.beginPath(),m.moveTo(fe,J),m.lineTo(B,J),m.stroke(),m.restore(),m.fillStyle="#e03030",m.font="bold 10px sans-serif",m.textAlign="center",m.textBaseline="bottom",m.fillText("插值可信度低",(fe+B)/2,J-2)}),U.forEach(ce=>{const fe=O(ce.distance),B=Math.max(16,w/Math.max(8,U.length*2));ce.layers.forEach((J,oe)=>{const D=h(J.lithology_name,te[J.lithology_name]||oe),I=j(J.top_elevation),be=j(J.bottom_elevation),Se=Math.max(3,be-I);if(m.fillStyle=D,m.globalAlpha=.95,m.fillRect(fe-B/2,I,B,Se),m.globalAlpha=1,m.strokeStyle="#000",m.lineWidth=1.5,m.strokeRect(fe-B/2,I,B,Se),Se>14){m.fillStyle="#000",m.font="bold 11px sans-serif",m.textAlign="left",m.textBaseline="middle";const Ce=(I+be)/2;m.fillText(`${J.layer_no}  ${J.thickness.toFixed(1)}m`,fe+B/2+6,Ce)}}),m.fillStyle="#000",m.font="bold 13px sans-serif",m.textAlign="center",m.textBaseline="bottom",m.fillText(ce.hole_id,fe,T.top-8),m.fillStyle="#666",m.font="10px sans-serif",m.textBaseline="top",m.fillText(`标高${ce.elevation.toFixed(1)}m`,fe,b-T.bottom+22)}),m.strokeStyle="#000",m.lineWidth=1.5,m.strokeRect(p+T.left,T.top,w,L),m.fillStyle="#333",m.font="13px sans-serif",m.textAlign="center",m.textBaseline="top",m.fillText("水平距离 (m)",p+x/2,b-18),m.save(),m.translate(p+16,b/2),m.rotate(-Math.PI/2),m.textAlign="center",m.textBaseline="middle",m.fillText("高程 (m)",0,0),m.restore(),((le=_.lithologies)==null?void 0:le.length)>0){const ce=p+x-T.right-140,fe=T.top+10;m.fillStyle="rgba(255,255,255,0.92)",m.fillRect(ce-8,fe-6,148,_.lithologies.length*20+12),m.strokeStyle="#ccc",m.lineWidth=1,m.strokeRect(ce-8,fe-6,148,_.lithologies.length*20+12),_.lithologies.forEach((B,J)=>{const oe=fe+J*20;m.fillStyle=h(B,J),m.fillRect(ce,oe,14,14),m.strokeStyle="#000",m.lineWidth=.5,m.strokeRect(ce,oe,14,14),m.fillStyle="#333",m.font="12px sans-serif",m.textAlign="left",m.textBaseline="middle",m.fillText(B,ce+20,oe+7)})}m.fillStyle="#333",m.font="bold 14px sans-serif",m.textAlign="left",m.textBaseline="top",m.fillText(`插值方式: ${_.interpolation_method||"linear"}`,p+T.left+8,T.top+8)}function g(){if(!l)return;const m=l.parentElement,_=m.clientWidth||800,p=m.clientHeight||600;t(0,l.width=_,l),t(0,l.height=p,l);const x=l.getContext("2d");if(x.clearRect(0,0,_,p),x.fillStyle="#ffffff",x.fillRect(0,0,_,p),r&&s&&n){const b=Ha(s),A=Ha(n),C=Math.min(b.min,A.min),T=Math.max(b.max,A.max),w=(T-C)*.1||10,L=C-w,U=T+w,y=Math.floor(_/2);x.save(),x.beginPath(),x.rect(0,0,y,p),x.clip(),d(x,s,0,y,p,L,U),x.restore(),x.save(),x.beginPath(),x.rect(y,0,_-y,p),x.clip(),d(x,n,y,_-y,p,L,U),x.restore(),x.strokeStyle="#333",x.lineWidth=2,x.setLineDash([8,4]),x.beginPath(),x.moveTo(y,0),x.lineTo(y,p),x.stroke(),x.setLineDash([]),x.fillStyle="rgba(0,0,0,0.6)",x.font="bold 14px sans-serif",x.textAlign="center",x.textBaseline="bottom",x.fillText("左剖面",y/2,p-4),x.fillText("右剖面",y+(_-y)/2,p-4)}else o&&d(x,o,0,_,p,void 0,void 0)}Lr(()=>{(o||r&&s)&&yo().then(()=>g());const m=new ResizeObserver(()=>{l&&g()});return l!=null&&l.parentElement&&m.observe(l.parentElement),()=>m.disconnect()}),Sf(()=>{(o||r&&s&&n)&&l&&g()});function v(m){ni[m?"unshift":"push"](()=>{l=m,t(0,l)})}return i.$$.update=()=>{i.$$.dirty&31&&(o||r&&s&&n)&&l&&yo().then(()=>g())},[l,n,s,r,o,v]}class wh extends pn{constructor(e){super(),mn(this,e,Th,Sh,dn,{})}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fo="161",Ui={ROTATE:0,DOLLY:1,PAN:2},Fi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ah=0,Ga=1,Ch=2,yf=1,Rh=2,Zn=3,pi=0,Mn=1,cn=2,fi=0,os=1,Wa=2,Xa=3,ja=4,Ph=5,yi=100,Lh=101,Dh=102,qa=103,Ya=104,Ih=200,Nh=201,Uh=202,Fh=203,wo=204,Ao=205,Oh=206,kh=207,Bh=208,zh=209,Vh=210,Hh=211,Gh=212,Wh=213,Xh=214,jh=0,qh=1,Yh=2,yr=3,Kh=4,Zh=5,Jh=6,Qh=7,Oo=0,$h=1,ed=2,hi=0,td=1,nd=2,id=3,sd=4,rd=5,od=6,Tf=300,fs=301,hs=302,Co=303,Ro=304,Dr=306,Po=1e3,Fn=1001,Lo=1002,ln=1003,Ka=1004,xs=1005,gn=1006,Hr=1007,wi=1008,di=1009,ad=1010,ld=1011,ko=1012,wf=1013,ui=1014,$n=1015,Ns=1016,Af=1017,Cf=1018,Ai=1020,cd=1021,On=1023,ud=1024,fd=1025,Ci=1026,ds=1027,hd=1028,Rf=1029,dd=1030,Pf=1031,Lf=1033,Gr=33776,Wr=33777,Xr=33778,jr=33779,Za=35840,Ja=35841,Qa=35842,$a=35843,Df=36196,el=37492,tl=37496,nl=37808,il=37809,sl=37810,rl=37811,ol=37812,al=37813,ll=37814,cl=37815,ul=37816,fl=37817,hl=37818,dl=37819,pl=37820,ml=37821,qr=36492,_l=36494,gl=36495,pd=36283,vl=36284,bl=36285,xl=36286,If=3e3,Ri=3001,md=3200,_d=3201,Nf=0,gd=1,Ln="",Qt="srgb",ii="srgb-linear",Bo="display-p3",Ir="display-p3-linear",Tr="linear",Nt="srgb",wr="rec709",Ar="p3",Oi=7680,El=519,vd=512,bd=513,xd=514,Uf=515,Ed=516,Md=517,Sd=518,yd=519,Ml=35044,Sl="300 es",Do=1035,ei=2e3,Cr=2001;class Ii{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rs=Math.PI/180,Io=180/Math.PI;function Os(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function un(i,e,t){return Math.max(e,Math.min(t,i))}function Td(i,e){return(i%e+e)%e}function Yr(i,e,t){return(1-t)*i+t*e}function yl(i){return(i&i-1)===0&&i!==0}function No(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Es(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _n(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const wd={DEG2RAD:Rs};class pt{constructor(e=0,t=0){pt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(un(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class St{constructor(e,t,n,s,r,o,a,c,l){St.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],g=n[5],v=n[8],m=s[0],_=s[3],p=s[6],x=s[1],b=s[4],A=s[7],C=s[2],T=s[5],w=s[8];return r[0]=o*m+a*x+c*C,r[3]=o*_+a*b+c*T,r[6]=o*p+a*A+c*w,r[1]=l*m+u*x+h*C,r[4]=l*_+u*b+h*T,r[7]=l*p+u*A+h*w,r[2]=d*m+g*x+v*C,r[5]=d*_+g*b+v*T,r[8]=d*p+g*A+v*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,g=l*r-o*c,v=t*h+n*d+s*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/v;return e[0]=h*m,e[1]=(s*l-u*n)*m,e[2]=(a*n-s*o)*m,e[3]=d*m,e[4]=(u*t-s*c)*m,e[5]=(s*r-a*t)*m,e[6]=g*m,e[7]=(n*c-l*t)*m,e[8]=(o*t-n*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Kr.makeScale(e,t)),this}rotate(e){return this.premultiply(Kr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Kr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Kr=new St;function Ff(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ad(){const i=Rr("canvas");return i.style.display="block",i}const Tl={};function as(i){i in Tl||(Tl[i]=!0,console.warn(i))}const wl=new St().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Al=new St().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hs={[ii]:{transfer:Tr,primaries:wr,toReference:i=>i,fromReference:i=>i},[Qt]:{transfer:Nt,primaries:wr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ir]:{transfer:Tr,primaries:Ar,toReference:i=>i.applyMatrix3(Al),fromReference:i=>i.applyMatrix3(wl)},[Bo]:{transfer:Nt,primaries:Ar,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Al),fromReference:i=>i.applyMatrix3(wl).convertLinearToSRGB()}},Cd=new Set([ii,Ir]),Rt={enabled:!0,_workingColorSpace:ii,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Cd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Hs[e].toReference,s=Hs[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Hs[i].primaries},getTransfer:function(i){return i===Ln?Tr:Hs[i].transfer}};function ls(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ki;class Of{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ki===void 0&&(ki=Rr("canvas")),ki.width=e.width,ki.height=e.height;const n=ki.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ls(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ls(t[n]/255)*255):t[n]=ls(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rd=0;class kf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Os(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Jr(s[o].image)):r.push(Jr(s[o]))}else r=Jr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Jr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Of.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pd=0;class rn extends Ii{constructor(e=rn.DEFAULT_IMAGE,t=rn.DEFAULT_MAPPING,n=Fn,s=Fn,r=gn,o=wi,a=On,c=di,l=rn.DEFAULT_ANISOTROPY,u=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Os(),this.name="",this.source=new kf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new St,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(as("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ri?Qt:Ln),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Po:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case Lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Po:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case Lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return as("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Qt?Ri:If}set encoding(e){as("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ri?Qt:Ln}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Tf;rn.DEFAULT_ANISOTROPY=1;class Zt{constructor(e=0,t=0,n=0,s=1){Zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],g=c[5],v=c[9],m=c[2],_=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-m)<.01&&Math.abs(v-_)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+m)<.1&&Math.abs(v+_)<.1&&Math.abs(l+g+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,A=(g+1)/2,C=(p+1)/2,T=(u+d)/4,w=(h+m)/4,L=(v+_)/4;return b>A&&b>C?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=T/n,r=w/n):A>C?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=T/s,r=L/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=w/r,s=L/r),this.set(n,s,r,t),this}let x=Math.sqrt((_-v)*(_-v)+(h-m)*(h-m)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(_-v)/x,this.y=(h-m)/x,this.z=(d-u)/x,this.w=Math.acos((l+g+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ld extends Ii{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(as("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ri?Qt:Ln),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new rn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new kf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends Ld{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Bf extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dd extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Li{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],g=r[o+1],v=r[o+2],m=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=g,e[t+2]=v,e[t+3]=m;return}if(h!==m||c!==d||l!==g||u!==v){let _=1-a;const p=c*d+l*g+u*v+h*m,x=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const C=Math.sqrt(b),T=Math.atan2(C,p*x);_=Math.sin(_*T)/C,a=Math.sin(a*T)/C}const A=a*x;if(c=c*_+d*A,l=l*_+g*A,u=u*_+v*A,h=h*_+m*A,_===1-a){const C=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=C,l*=C,u*=C,h*=C}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],g=r[o+2],v=r[o+3];return e[t]=a*v+u*h+c*g-l*d,e[t+1]=c*v+u*d+l*h-a*g,e[t+2]=l*v+u*g+a*d-c*h,e[t+3]=u*v-a*h-c*d-l*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),g=c(s/2),v=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*g*v,this._y=l*g*h-d*u*v,this._z=l*u*v+d*g*h,this._w=l*u*h-d*g*v;break;case"YXZ":this._x=d*u*h+l*g*v,this._y=l*g*h-d*u*v,this._z=l*u*v-d*g*h,this._w=l*u*h+d*g*v;break;case"ZXY":this._x=d*u*h-l*g*v,this._y=l*g*h+d*u*v,this._z=l*u*v+d*g*h,this._w=l*u*h-d*g*v;break;case"ZYX":this._x=d*u*h-l*g*v,this._y=l*g*h+d*u*v,this._z=l*u*v-d*g*h,this._w=l*u*h+d*g*v;break;case"YZX":this._x=d*u*h+l*g*v,this._y=l*g*h+d*u*v,this._z=l*u*v-d*g*h,this._w=l*u*h-d*g*v;break;case"XZY":this._x=d*u*h-l*g*v,this._y=l*g*h-d*u*v,this._z=l*u*v+d*g*h,this._w=l*u*h+d*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(u-c)*g,this._y=(r-l)*g,this._z=(o-s)*g}else if(n>a&&n>h){const g=2*Math.sqrt(1+n-a-h);this._w=(u-c)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+l)/g}else if(a>h){const g=2*Math.sqrt(1+a-n-h);this._w=(r-l)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(c+u)/g}else{const g=2*Math.sqrt(1+h-n-a);this._w=(o-s)/g,this._x=(r+l)/g,this._y=(c+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(un(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*n+t*this._x,this._y=g*s+t*this._y,this._z=g*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Ie{constructor(e=0,t=0,n=0){Ie.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qr.copy(this).projectOnVector(e),this.sub(Qr)}reflect(e){return this.sub(Qr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(un(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qr=new Ie,Cl=new Li;class ks{constructor(e=new Ie(1/0,1/0,1/0),t=new Ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gs.copy(n.boundingBox)),Gs.applyMatrix4(e.matrixWorld),this.union(Gs)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ms),Ws.subVectors(this.max,Ms),Bi.subVectors(e.a,Ms),zi.subVectors(e.b,Ms),Vi.subVectors(e.c,Ms),si.subVectors(zi,Bi),ri.subVectors(Vi,zi),vi.subVectors(Bi,Vi);let t=[0,-si.z,si.y,0,-ri.z,ri.y,0,-vi.z,vi.y,si.z,0,-si.x,ri.z,0,-ri.x,vi.z,0,-vi.x,-si.y,si.x,0,-ri.y,ri.x,0,-vi.y,vi.x,0];return!$r(t,Bi,zi,Vi,Ws)||(t=[1,0,0,0,1,0,0,0,1],!$r(t,Bi,zi,Vi,Ws))?!1:(Xs.crossVectors(si,ri),t=[Xs.x,Xs.y,Xs.z],$r(t,Bi,zi,Vi,Ws))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xn=[new Ie,new Ie,new Ie,new Ie,new Ie,new Ie,new Ie,new Ie],Dn=new Ie,Gs=new ks,Bi=new Ie,zi=new Ie,Vi=new Ie,si=new Ie,ri=new Ie,vi=new Ie,Ms=new Ie,Ws=new Ie,Xs=new Ie,bi=new Ie;function $r(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){bi.fromArray(i,r);const a=s.x*Math.abs(bi.x)+s.y*Math.abs(bi.y)+s.z*Math.abs(bi.z),c=e.dot(bi),l=t.dot(bi),u=n.dot(bi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Id=new ks,Ss=new Ie,eo=new Ie;class Nr{constructor(e=new Ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Id.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ss.subVectors(e,this.center);const t=Ss.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ss,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ss.copy(e.center).add(eo)),this.expandByPoint(Ss.copy(e.center).sub(eo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jn=new Ie,to=new Ie,js=new Ie,oi=new Ie,no=new Ie,qs=new Ie,io=new Ie;class zo{constructor(e=new Ie,t=new Ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){to.copy(e).add(t).multiplyScalar(.5),js.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(to);const r=e.distanceTo(t)*.5,o=-this.direction.dot(js),a=oi.dot(this.direction),c=-oi.dot(js),l=oi.lengthSq(),u=Math.abs(1-o*o);let h,d,g,v;if(u>0)if(h=o*c-a,d=o*a-c,v=r*u,h>=0)if(d>=-v)if(d<=v){const m=1/u;h*=m,d*=m,g=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*c)+l;else d<=-v?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),g=-h*h+d*(d+2*c)+l):d<=v?(h=0,d=Math.min(Math.max(-r,-c),r),g=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),g=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(to).addScaledVector(js,d),g}intersectSphere(e,t){jn.subVectors(e.center,this.origin);const n=jn.dot(this.direction),s=jn.dot(jn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,n,s,r){no.subVectors(t,e),qs.subVectors(n,e),io.crossVectors(no,qs);let o=this.direction.dot(io),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,e);const c=a*this.direction.dot(qs.crossVectors(oi,qs));if(c<0)return null;const l=a*this.direction.dot(no.cross(oi));if(l<0||c+l>o)return null;const u=-a*oi.dot(io);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,t,n,s,r,o,a,c,l,u,h,d,g,v,m,_){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,h,d,g,v,m,_)}set(e,t,n,s,r,o,a,c,l,u,h,d,g,v,m,_){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=g,p[7]=v,p[11]=m,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Hi.setFromMatrixColumn(e,0).length(),r=1/Hi.setFromMatrixColumn(e,1).length(),o=1/Hi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,g=o*h,v=a*u,m=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=g+v*l,t[5]=d-m*l,t[9]=-a*c,t[2]=m-d*l,t[6]=v+g*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,g=c*h,v=l*u,m=l*h;t[0]=d+m*a,t[4]=v*a-g,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=g*a-v,t[6]=m+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,g=c*h,v=l*u,m=l*h;t[0]=d-m*a,t[4]=-o*h,t[8]=v+g*a,t[1]=g+v*a,t[5]=o*u,t[9]=m-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,g=o*h,v=a*u,m=a*h;t[0]=c*u,t[4]=v*l-g,t[8]=d*l+m,t[1]=c*h,t[5]=m*l+d,t[9]=g*l-v,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,g=o*l,v=a*c,m=a*l;t[0]=c*u,t[4]=m-d*h,t[8]=v*h+g,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=g*h+v,t[10]=d-m*h}else if(e.order==="XZY"){const d=o*c,g=o*l,v=a*c,m=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+m,t[5]=o*u,t[9]=g*h-v,t[2]=v*h-g,t[6]=a*u,t[10]=m*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nd,e,Ud)}lookAt(e,t,n){const s=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),ai.crossVectors(n,Tn),ai.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),ai.crossVectors(n,Tn)),ai.normalize(),Ys.crossVectors(Tn,ai),s[0]=ai.x,s[4]=Ys.x,s[8]=Tn.x,s[1]=ai.y,s[5]=Ys.y,s[9]=Tn.y,s[2]=ai.z,s[6]=Ys.z,s[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],g=n[13],v=n[2],m=n[6],_=n[10],p=n[14],x=n[3],b=n[7],A=n[11],C=n[15],T=s[0],w=s[4],L=s[8],U=s[12],y=s[1],N=s[5],K=s[9],$=s[13],O=s[2],j=s[6],W=s[10],ee=s[14],te=s[3],se=s[7],ue=s[11],le=s[15];return r[0]=o*T+a*y+c*O+l*te,r[4]=o*w+a*N+c*j+l*se,r[8]=o*L+a*K+c*W+l*ue,r[12]=o*U+a*$+c*ee+l*le,r[1]=u*T+h*y+d*O+g*te,r[5]=u*w+h*N+d*j+g*se,r[9]=u*L+h*K+d*W+g*ue,r[13]=u*U+h*$+d*ee+g*le,r[2]=v*T+m*y+_*O+p*te,r[6]=v*w+m*N+_*j+p*se,r[10]=v*L+m*K+_*W+p*ue,r[14]=v*U+m*$+_*ee+p*le,r[3]=x*T+b*y+A*O+C*te,r[7]=x*w+b*N+A*j+C*se,r[11]=x*L+b*K+A*W+C*ue,r[15]=x*U+b*$+A*ee+C*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],g=e[14],v=e[3],m=e[7],_=e[11],p=e[15];return v*(+r*c*h-s*l*h-r*a*d+n*l*d+s*a*g-n*c*g)+m*(+t*c*g-t*l*d+r*o*d-s*o*g+s*l*u-r*c*u)+_*(+t*l*h-t*a*g-r*o*h+n*o*g+r*a*u-n*l*u)+p*(-s*a*u-t*c*h+t*a*d+s*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],g=e[11],v=e[12],m=e[13],_=e[14],p=e[15],x=h*_*l-m*d*l+m*c*g-a*_*g-h*c*p+a*d*p,b=v*d*l-u*_*l-v*c*g+o*_*g+u*c*p-o*d*p,A=u*m*l-v*h*l+v*a*g-o*m*g-u*a*p+o*h*p,C=v*h*c-u*m*c-v*a*d+o*m*d+u*a*_-o*h*_,T=t*x+n*b+s*A+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=x*w,e[1]=(m*d*r-h*_*r-m*s*g+n*_*g+h*s*p-n*d*p)*w,e[2]=(a*_*r-m*c*r+m*s*l-n*_*l-a*s*p+n*c*p)*w,e[3]=(h*c*r-a*d*r-h*s*l+n*d*l+a*s*g-n*c*g)*w,e[4]=b*w,e[5]=(u*_*r-v*d*r+v*s*g-t*_*g-u*s*p+t*d*p)*w,e[6]=(v*c*r-o*_*r-v*s*l+t*_*l+o*s*p-t*c*p)*w,e[7]=(o*d*r-u*c*r+u*s*l-t*d*l-o*s*g+t*c*g)*w,e[8]=A*w,e[9]=(v*h*r-u*m*r-v*n*g+t*m*g+u*n*p-t*h*p)*w,e[10]=(o*m*r-v*a*r+v*n*l-t*m*l-o*n*p+t*a*p)*w,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*g-t*a*g)*w,e[12]=C*w,e[13]=(u*m*s-v*h*s+v*n*d-t*m*d-u*n*_+t*h*_)*w,e[14]=(v*a*s-o*m*s-v*n*c+t*m*c+o*n*_-t*a*_)*w,e[15]=(o*h*s-u*a*s+u*n*c-t*h*c-o*n*d+t*a*d)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,g=r*u,v=r*h,m=o*u,_=o*h,p=a*h,x=c*l,b=c*u,A=c*h,C=n.x,T=n.y,w=n.z;return s[0]=(1-(m+p))*C,s[1]=(g+A)*C,s[2]=(v-b)*C,s[3]=0,s[4]=(g-A)*T,s[5]=(1-(d+p))*T,s[6]=(_+x)*T,s[7]=0,s[8]=(v+b)*w,s[9]=(_-x)*w,s[10]=(1-(d+m))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Hi.set(s[0],s[1],s[2]).length();const o=Hi.set(s[4],s[5],s[6]).length(),a=Hi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],In.copy(this);const l=1/r,u=1/o,h=1/a;return In.elements[0]*=l,In.elements[1]*=l,In.elements[2]*=l,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,t.setFromRotationMatrix(In),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ei){const c=this.elements,l=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let g,v;if(a===ei)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Cr)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ei){const c=this.elements,l=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*l,g=(n+s)*u;let v,m;if(a===ei)v=(o+r)*h,m=-2*h;else if(a===Cr)v=r*h,m=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=m,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Hi=new Ie,In=new Ht,Nd=new Ie(0,0,0),Ud=new Ie(1,1,1),ai=new Ie,Ys=new Ie,Tn=new Ie,Rl=new Ht,Pl=new Li;class Ur{constructor(e=0,t=0,n=0,s=Ur.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-un(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(un(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-un(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(un(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pl.setFromEuler(this),this.setFromQuaternion(Pl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ur.DEFAULT_ORDER="XYZ";class zf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fd=0;const Ll=new Ie,Gi=new Li,qn=new Ht,Ks=new Ie,ys=new Ie,Od=new Ie,kd=new Li,Dl=new Ie(1,0,0),Il=new Ie(0,1,0),Nl=new Ie(0,0,1),Bd={type:"added"},zd={type:"removed"};class en extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new Ie,t=new Ur,n=new Li,s=new Ie(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ht},normalMatrix:{value:new St}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.premultiply(Gi),this}rotateX(e){return this.rotateOnAxis(Dl,e)}rotateY(e){return this.rotateOnAxis(Il,e)}rotateZ(e){return this.rotateOnAxis(Nl,e)}translateOnAxis(e,t){return Ll.copy(e).applyQuaternion(this.quaternion),this.position.add(Ll.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dl,e)}translateY(e){return this.translateOnAxis(Il,e)}translateZ(e){return this.translateOnAxis(Nl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ks.copy(e):Ks.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(ys,Ks,this.up):qn.lookAt(Ks,ys,this.up),this.quaternion.setFromRotationMatrix(qn),s&&(qn.extractRotation(s.matrixWorld),Gi.setFromRotationMatrix(qn),this.quaternion.premultiply(Gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Bd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,e,Od),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,kd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),g=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),g.length>0&&(n.animations=g),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}en.DEFAULT_UP=new Ie(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new Ie,Yn=new Ie,so=new Ie,Kn=new Ie,Wi=new Ie,Xi=new Ie,Ul=new Ie,ro=new Ie,oo=new Ie,ao=new Ie;class kn{constructor(e=new Ie,t=new Ie,n=new Ie){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Nn.subVectors(e,t),s.cross(Nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Nn.subVectors(s,t),Yn.subVectors(n,t),so.subVectors(e,t);const o=Nn.dot(Nn),a=Nn.dot(Yn),c=Nn.dot(so),l=Yn.dot(Yn),u=Yn.dot(so),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,g=(l*c-a*u)*d,v=(o*u-a*c)*d;return r.set(1-g-v,v,g)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Kn.x),c.addScaledVector(o,Kn.y),c.addScaledVector(a,Kn.z),c)}static isFrontFacing(e,t,n,s){return Nn.subVectors(n,t),Yn.subVectors(e,t),Nn.cross(Yn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Nn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return kn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Wi.subVectors(s,n),Xi.subVectors(r,n),ro.subVectors(e,n);const c=Wi.dot(ro),l=Xi.dot(ro);if(c<=0&&l<=0)return t.copy(n);oo.subVectors(e,s);const u=Wi.dot(oo),h=Xi.dot(oo);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Wi,o);ao.subVectors(e,r);const g=Wi.dot(ao),v=Xi.dot(ao);if(v>=0&&g<=v)return t.copy(r);const m=g*l-c*v;if(m<=0&&l>=0&&v<=0)return a=l/(l-v),t.copy(n).addScaledVector(Xi,a);const _=u*v-g*h;if(_<=0&&h-u>=0&&g-v>=0)return Ul.subVectors(r,s),a=(h-u)/(h-u+(g-v)),t.copy(s).addScaledVector(Ul,a);const p=1/(_+m+d);return o=m*p,a=d*p,t.copy(n).addScaledVector(Wi,o).addScaledVector(Xi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Zs={h:0,s:0,l:0};function lo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class bt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Rt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Rt.workingColorSpace){if(e=Td(e,1),t=un(t,0,1),n=un(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=lo(o,r,e+1/3),this.g=lo(o,r,e),this.b=lo(o,r,e-1/3)}return Rt.toWorkingColorSpace(this,s),this}setStyle(e,t=Qt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const n=Vf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}copyLinearToSRGB(e){return this.r=Zr(e.r),this.g=Zr(e.g),this.b=Zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return Rt.fromWorkingColorSpace(sn.copy(this),e),Math.round(un(sn.r*255,0,255))*65536+Math.round(un(sn.g*255,0,255))*256+Math.round(un(sn.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.fromWorkingColorSpace(sn.copy(this),t);const n=sn.r,s=sn.g,r=sn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=Qt){Rt.fromWorkingColorSpace(sn.copy(this),e);const t=sn.r,n=sn.g,s=sn.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(Zs);const n=Yr(li.h,Zs.h,t),s=Yr(li.s,Zs.s,t),r=Yr(li.l,Zs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new bt;bt.NAMES=Vf;let Vd=0;class _s extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Os(),this.name="",this.type="Material",this.blending=os,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wo,this.blendDst=Ao,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=El,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wo&&(n.blendSrc=this.blendSrc),this.blendDst!==Ao&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==El&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Pr extends _s{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new Ie,Js=new pt;class Hn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ml,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return as("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Js.fromBufferAttribute(this,t),Js.applyMatrix3(e),this.setXY(t,Js.x,Js.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Es(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Es(t,this.array)),t}setX(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Es(t,this.array)),t}setY(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Es(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Es(t,this.array)),t}setW(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array),s=_n(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array),s=_n(s,this.array),r=_n(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ml&&(e.usage=this.usage),e}}class Hf extends Hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Gf extends Hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Dt extends Hn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Hd=0;const Rn=new Ht,co=new en,ji=new Ie,wn=new ks,Ts=new ks,qt=new Ie;class $t extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Os(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ff(e)?Gf:Hf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new St().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,n){return Rn.makeTranslation(e,t,n),this.applyMatrix4(Rn),this}scale(e,t,n){return Rn.makeScale(e,t,n),this.applyMatrix4(Rn),this}lookAt(e){return co.lookAt(e),co.updateMatrix(),this.applyMatrix4(co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Dt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ks);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Ie(-1/0,-1/0,-1/0),new Ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Ie,1/0);return}if(e){const n=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ts.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(wn.min,Ts.min),wn.expandByPoint(qt),qt.addVectors(wn.max,Ts.max),wn.expandByPoint(qt)):(wn.expandByPoint(Ts.min),wn.expandByPoint(Ts.max))}wn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)qt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(qt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)qt.fromBufferAttribute(a,l),c&&(ji.fromBufferAttribute(e,l),qt.add(ji)),s=Math.max(s,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let y=0;y<a;y++)l[y]=new Ie,u[y]=new Ie;const h=new Ie,d=new Ie,g=new Ie,v=new pt,m=new pt,_=new pt,p=new Ie,x=new Ie;function b(y,N,K){h.fromArray(s,y*3),d.fromArray(s,N*3),g.fromArray(s,K*3),v.fromArray(o,y*2),m.fromArray(o,N*2),_.fromArray(o,K*2),d.sub(h),g.sub(h),m.sub(v),_.sub(v);const $=1/(m.x*_.y-_.x*m.y);isFinite($)&&(p.copy(d).multiplyScalar(_.y).addScaledVector(g,-m.y).multiplyScalar($),x.copy(g).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar($),l[y].add(p),l[N].add(p),l[K].add(p),u[y].add(x),u[N].add(x),u[K].add(x))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let y=0,N=A.length;y<N;++y){const K=A[y],$=K.start,O=K.count;for(let j=$,W=$+O;j<W;j+=3)b(n[j+0],n[j+1],n[j+2])}const C=new Ie,T=new Ie,w=new Ie,L=new Ie;function U(y){w.fromArray(r,y*3),L.copy(w);const N=l[y];C.copy(N),C.sub(w.multiplyScalar(w.dot(N))).normalize(),T.crossVectors(L,N);const $=T.dot(u[y])<0?-1:1;c[y*4]=C.x,c[y*4+1]=C.y,c[y*4+2]=C.z,c[y*4+3]=$}for(let y=0,N=A.length;y<N;++y){const K=A[y],$=K.start,O=K.count;for(let j=$,W=$+O;j<W;j+=3)U(n[j+0]),U(n[j+1]),U(n[j+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,g=n.count;d<g;d++)n.setXYZ(d,0,0,0);const s=new Ie,r=new Ie,o=new Ie,a=new Ie,c=new Ie,l=new Ie,u=new Ie,h=new Ie;if(e)for(let d=0,g=e.count;d<g;d+=3){const v=e.getX(d+0),m=e.getX(d+1),_=e.getX(d+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,m),o.fromBufferAttribute(t,_),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),a.add(u),c.add(u),l.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(_,l.x,l.y,l.z)}else for(let d=0,g=t.count;d<g;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let g=0,v=0;for(let m=0,_=c.length;m<_;m++){a.isInterleavedBufferAttribute?g=c[m]*a.data.stride+a.offset:g=c[m]*u;for(let p=0;p<u;p++)d[v++]=l[g++]}return new Hn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $t,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],g=e(d,n);c.push(g)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const g=l[h];u.push(g.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,g=h.length;d<g;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fl=new Ht,xi=new zo,Qs=new Nr,Ol=new Ie,qi=new Ie,Yi=new Ie,Ki=new Ie,uo=new Ie,$s=new Ie,er=new pt,tr=new pt,nr=new pt,kl=new Ie,Bl=new Ie,zl=new Ie,ir=new Ie,sr=new Ie;class Yt extends en{constructor(e=new $t,t=new Pr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){$s.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(uo.fromBufferAttribute(h,e),o?$s.addScaledVector(uo,u):$s.addScaledVector(uo.sub(t),u))}t.add($s)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(r),xi.copy(e.ray).recast(e.near),!(Qs.containsPoint(xi.origin)===!1&&(xi.intersectSphere(Qs,Ol)===null||xi.origin.distanceToSquared(Ol)>(e.far-e.near)**2))&&(Fl.copy(r).invert(),xi.copy(e.ray).applyMatrix4(Fl),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,m=d.length;v<m;v++){const _=d[v],p=o[_.materialIndex],x=Math.max(_.start,g.start),b=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let A=x,C=b;A<C;A+=3){const T=a.getX(A),w=a.getX(A+1),L=a.getX(A+2);s=rr(this,p,e,n,l,u,h,T,w,L),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const v=Math.max(0,g.start),m=Math.min(a.count,g.start+g.count);for(let _=v,p=m;_<p;_+=3){const x=a.getX(_),b=a.getX(_+1),A=a.getX(_+2);s=rr(this,o,e,n,l,u,h,x,b,A),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let v=0,m=d.length;v<m;v++){const _=d[v],p=o[_.materialIndex],x=Math.max(_.start,g.start),b=Math.min(c.count,Math.min(_.start+_.count,g.start+g.count));for(let A=x,C=b;A<C;A+=3){const T=A,w=A+1,L=A+2;s=rr(this,p,e,n,l,u,h,T,w,L),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const v=Math.max(0,g.start),m=Math.min(c.count,g.start+g.count);for(let _=v,p=m;_<p;_+=3){const x=_,b=_+1,A=_+2;s=rr(this,o,e,n,l,u,h,x,b,A),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}}function Gd(i,e,t,n,s,r,o,a){let c;if(e.side===Mn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===pi,a),c===null)return null;sr.copy(a),sr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(sr);return l<t.near||l>t.far?null:{distance:l,point:sr.clone(),object:i}}function rr(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,qi),i.getVertexPosition(c,Yi),i.getVertexPosition(l,Ki);const u=Gd(i,e,t,n,qi,Yi,Ki,ir);if(u){s&&(er.fromBufferAttribute(s,a),tr.fromBufferAttribute(s,c),nr.fromBufferAttribute(s,l),u.uv=kn.getInterpolation(ir,qi,Yi,Ki,er,tr,nr,new pt)),r&&(er.fromBufferAttribute(r,a),tr.fromBufferAttribute(r,c),nr.fromBufferAttribute(r,l),u.uv1=kn.getInterpolation(ir,qi,Yi,Ki,er,tr,nr,new pt),u.uv2=u.uv1),o&&(kl.fromBufferAttribute(o,a),Bl.fromBufferAttribute(o,c),zl.fromBufferAttribute(o,l),u.normal=kn.getInterpolation(ir,qi,Yi,Ki,kl,Bl,zl,new Ie),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new Ie,materialIndex:0};kn.getNormal(qi,Yi,Ki,h.normal),u.face=h}return u}class Di extends $t{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,g=0;v("z","y","x",-1,-1,n,t,e,o,r,0),v("z","y","x",1,-1,n,t,-e,o,r,1),v("x","z","y",1,1,e,n,t,s,o,2),v("x","z","y",1,-1,e,n,-t,s,o,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Dt(l,3)),this.setAttribute("normal",new Dt(u,3)),this.setAttribute("uv",new Dt(h,2));function v(m,_,p,x,b,A,C,T,w,L,U){const y=A/w,N=C/L,K=A/2,$=C/2,O=T/2,j=w+1,W=L+1;let ee=0,te=0;const se=new Ie;for(let ue=0;ue<W;ue++){const le=ue*N-$;for(let ce=0;ce<j;ce++){const fe=ce*y-K;se[m]=fe*x,se[_]=le*b,se[p]=O,l.push(se.x,se.y,se.z),se[m]=0,se[_]=0,se[p]=T>0?1:-1,u.push(se.x,se.y,se.z),h.push(ce/w),h.push(1-ue/L),ee+=1}}for(let ue=0;ue<L;ue++)for(let le=0;le<w;le++){const ce=d+le+j*ue,fe=d+le+j*(ue+1),B=d+(le+1)+j*(ue+1),J=d+(le+1)+j*ue;c.push(ce,fe,J),c.push(fe,B,J),te+=6}a.addGroup(g,te,U),g+=te,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ps(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function an(i){const e={};for(let t=0;t<i.length;t++){const n=ps(i[t]);for(const s in n)e[s]=n[s]}return e}function Wd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Wf(i){return i.getRenderTarget()===null?i.outputColorSpace:Rt.workingColorSpace}const Xd={clone:ps,merge:an};var jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mi extends _s{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jd,this.fragmentShader=qd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=Wd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Xf extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new Ie,Vl=new pt,Hl=new pt;class Pn extends Xf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Io*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(Rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ci.x,ci.y).multiplyScalar(-e/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-e/ci.z)}getViewSize(e,t){return this.getViewBounds(e,Vl,Hl),t.subVectors(Hl,Vl)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Rs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zi=-90,Ji=1;class Yd extends en{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Pn(Zi,Ji,e,t);s.layers=this.layers,this.add(s);const r=new Pn(Zi,Ji,e,t);r.layers=this.layers,this.add(r);const o=new Pn(Zi,Ji,e,t);o.layers=this.layers,this.add(o);const a=new Pn(Zi,Ji,e,t);a.layers=this.layers,this.add(a);const c=new Pn(Zi,Ji,e,t);c.layers=this.layers,this.add(c);const l=new Pn(Zi,Ji,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,g),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class jf extends rn{constructor(e,t,n,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:fs,super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kd extends Pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(as("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ri?Qt:Ln),this.texture=new jf(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:gn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Di(5,5,5),r=new mi({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:fi});r.uniforms.tEquirect.value=t;const o=new Yt(s,r),a=t.minFilter;return t.minFilter===wi&&(t.minFilter=gn),new Yd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const fo=new Ie,Zd=new Ie,Jd=new St;class Qn{constructor(e=new Ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=fo.subVectors(n,t).cross(Zd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(fo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Jd.getNormalMatrix(e),s=this.coplanarPoint(fo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new Nr,or=new Ie;class Vo{constructor(e=new Qn,t=new Qn,n=new Qn,s=new Qn,r=new Qn,o=new Qn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ei){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],g=s[8],v=s[9],m=s[10],_=s[11],p=s[12],x=s[13],b=s[14],A=s[15];if(n[0].setComponents(c-r,d-l,_-g,A-p).normalize(),n[1].setComponents(c+r,d+l,_+g,A+p).normalize(),n[2].setComponents(c+o,d+u,_+v,A+x).normalize(),n[3].setComponents(c-o,d-u,_-v,A-x).normalize(),n[4].setComponents(c-a,d-h,_-m,A-b).normalize(),t===ei)n[5].setComponents(c+a,d+h,_+m,A+b).normalize();else if(t===Cr)n[5].setComponents(a,h,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(e){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(or.x=s.normal.x>0?e.max.x:e.min.x,or.y=s.normal.y>0?e.max.y:e.min.y,or.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(or)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Qd(i,e){const t=e.isWebGL2,n=new WeakMap;function s(l,u){const h=l.array,d=l.usage,g=h.byteLength,v=i.createBuffer();i.bindBuffer(u,v),i.bufferData(u,h,d),l.onUploadCallback();let m;if(h instanceof Float32Array)m=i.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)m=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=i.SHORT;else if(h instanceof Uint32Array)m=i.UNSIGNED_INT;else if(h instanceof Int32Array)m=i.INT;else if(h instanceof Int8Array)m=i.BYTE;else if(h instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:g}}function r(l,u,h){const d=u.array,g=u._updateRange,v=u.updateRanges;if(i.bindBuffer(h,l),g.count===-1&&v.length===0&&i.bufferSubData(h,0,d),v.length!==0){for(let m=0,_=v.length;m<_;m++){const p=v[m];t?i.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}g.count!==-1&&(t?i.bufferSubData(h,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count):i.bufferSubData(h,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count)),g.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);if(h===void 0)n.set(l,s(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,l,u),h.version=l.version}}return{get:o,remove:a,update:c}}class ms extends $t{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,g=[],v=[],m=[],_=[];for(let p=0;p<u;p++){const x=p*d-o;for(let b=0;b<l;b++){const A=b*h-r;v.push(A,-x,0),m.push(0,0,1),_.push(b/a),_.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){const b=x+l*p,A=x+l*(p+1),C=x+1+l*(p+1),T=x+1+l*p;g.push(b,A,T),g.push(A,C,T)}this.setIndex(g),this.setAttribute("position",new Dt(v,3)),this.setAttribute("normal",new Dt(m,3)),this.setAttribute("uv",new Dt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ms(e.width,e.height,e.widthSegments,e.heightSegments)}}var $d=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ep=`#ifdef USE_ALPHAHASH
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
#endif`,tp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,np=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ip=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rp=`#ifdef USE_AOMAP
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
#endif`,op=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ap=`#ifdef USE_BATCHING
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
#endif`,lp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,cp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,up=`vec3 objectNormal = vec3( normal );
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
} // validated`,hp=`#ifdef USE_IRIDESCENCE
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
#endif`,dp=`#ifdef USE_BUMPMAP
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
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Mp=`#define PI 3.141592653589793
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
} // validated`,Sp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yp=`vec3 transformedNormal = objectNormal;
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
#endif`,Tp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ap=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pp=`
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
}`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Np=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
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
#endif`,Fp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Op=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zp=`#ifdef USE_GRADIENTMAP
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
}`,Vp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Hp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xp=`uniform bool receiveShadow;
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
#endif`,qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jp=`PhysicalMaterial material;
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
#endif`,Qp=`struct PhysicalMaterial {
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
}`,$p=`
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
#endif`,em=`#if defined( RE_IndirectDiffuse )
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
#endif`,tm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,im=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,rm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,om=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,am=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cm=`#if defined( USE_POINTS_UV )
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
#endif`,um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dm=`#ifdef USE_MORPHNORMALS
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
#endif`,pm=`#ifdef USE_MORPHTARGETS
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
#endif`,mm=`#ifdef USE_MORPHTARGETS
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
#endif`,_m=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Em=`#ifdef USE_NORMALMAP
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
#endif`,Mm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ym=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Am=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Im=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Om=`float getShadowMask() {
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
}`,km=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bm=`#ifdef USE_SKINNING
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
#endif`,zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vm=`#ifdef USE_SKINNING
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
#endif`,Hm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xm=`#ifndef saturate
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
#endif`,qm=`#ifdef USE_TRANSMISSION
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$m=`uniform sampler2D t2D;
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
}`,e_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,n_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s_=`#include <common>
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
}`,r_=`#if DEPTH_PACKING == 3200
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
}`,o_=`#define DISTANCE
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
}`,a_=`#define DISTANCE
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
}`,l_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u_=`uniform float scale;
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
}`,h_=`#include <common>
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
}`,d_=`uniform vec3 diffuse;
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
}`,p_=`#define LAMBERT
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
}`,m_=`#define LAMBERT
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
}`,__=`#define MATCAP
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
}`,g_=`#define MATCAP
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
}`,v_=`#define NORMAL
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
}`,b_=`#define NORMAL
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
}`,x_=`#define PHONG
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
}`,E_=`#define PHONG
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
}`,M_=`#define STANDARD
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
}`,S_=`#define STANDARD
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
}`,y_=`#define TOON
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
}`,T_=`#define TOON
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
}`,w_=`uniform float size;
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
}`,A_=`uniform vec3 diffuse;
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
}`,C_=`#include <common>
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
}`,R_=`uniform vec3 color;
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
}`,P_=`uniform float rotation;
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
}`,L_=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:$d,alphahash_pars_fragment:ep,alphamap_fragment:tp,alphamap_pars_fragment:np,alphatest_fragment:ip,alphatest_pars_fragment:sp,aomap_fragment:rp,aomap_pars_fragment:op,batching_pars_vertex:ap,batching_vertex:lp,begin_vertex:cp,beginnormal_vertex:up,bsdfs:fp,iridescence_fragment:hp,bumpmap_pars_fragment:dp,clipping_planes_fragment:pp,clipping_planes_pars_fragment:mp,clipping_planes_pars_vertex:_p,clipping_planes_vertex:gp,color_fragment:vp,color_pars_fragment:bp,color_pars_vertex:xp,color_vertex:Ep,common:Mp,cube_uv_reflection_fragment:Sp,defaultnormal_vertex:yp,displacementmap_pars_vertex:Tp,displacementmap_vertex:wp,emissivemap_fragment:Ap,emissivemap_pars_fragment:Cp,colorspace_fragment:Rp,colorspace_pars_fragment:Pp,envmap_fragment:Lp,envmap_common_pars_fragment:Dp,envmap_pars_fragment:Ip,envmap_pars_vertex:Np,envmap_physical_pars_fragment:jp,envmap_vertex:Up,fog_vertex:Fp,fog_pars_vertex:Op,fog_fragment:kp,fog_pars_fragment:Bp,gradientmap_pars_fragment:zp,lightmap_fragment:Vp,lightmap_pars_fragment:Hp,lights_lambert_fragment:Gp,lights_lambert_pars_fragment:Wp,lights_pars_begin:Xp,lights_toon_fragment:qp,lights_toon_pars_fragment:Yp,lights_phong_fragment:Kp,lights_phong_pars_fragment:Zp,lights_physical_fragment:Jp,lights_physical_pars_fragment:Qp,lights_fragment_begin:$p,lights_fragment_maps:em,lights_fragment_end:tm,logdepthbuf_fragment:nm,logdepthbuf_pars_fragment:im,logdepthbuf_pars_vertex:sm,logdepthbuf_vertex:rm,map_fragment:om,map_pars_fragment:am,map_particle_fragment:lm,map_particle_pars_fragment:cm,metalnessmap_fragment:um,metalnessmap_pars_fragment:fm,morphcolor_vertex:hm,morphnormal_vertex:dm,morphtarget_pars_vertex:pm,morphtarget_vertex:mm,normal_fragment_begin:_m,normal_fragment_maps:gm,normal_pars_fragment:vm,normal_pars_vertex:bm,normal_vertex:xm,normalmap_pars_fragment:Em,clearcoat_normal_fragment_begin:Mm,clearcoat_normal_fragment_maps:Sm,clearcoat_pars_fragment:ym,iridescence_pars_fragment:Tm,opaque_fragment:wm,packing:Am,premultiplied_alpha_fragment:Cm,project_vertex:Rm,dithering_fragment:Pm,dithering_pars_fragment:Lm,roughnessmap_fragment:Dm,roughnessmap_pars_fragment:Im,shadowmap_pars_fragment:Nm,shadowmap_pars_vertex:Um,shadowmap_vertex:Fm,shadowmask_pars_fragment:Om,skinbase_vertex:km,skinning_pars_vertex:Bm,skinning_vertex:zm,skinnormal_vertex:Vm,specularmap_fragment:Hm,specularmap_pars_fragment:Gm,tonemapping_fragment:Wm,tonemapping_pars_fragment:Xm,transmission_fragment:jm,transmission_pars_fragment:qm,uv_pars_fragment:Ym,uv_pars_vertex:Km,uv_vertex:Zm,worldpos_vertex:Jm,background_vert:Qm,background_frag:$m,backgroundCube_vert:e_,backgroundCube_frag:t_,cube_vert:n_,cube_frag:i_,depth_vert:s_,depth_frag:r_,distanceRGBA_vert:o_,distanceRGBA_frag:a_,equirect_vert:l_,equirect_frag:c_,linedashed_vert:u_,linedashed_frag:f_,meshbasic_vert:h_,meshbasic_frag:d_,meshlambert_vert:p_,meshlambert_frag:m_,meshmatcap_vert:__,meshmatcap_frag:g_,meshnormal_vert:v_,meshnormal_frag:b_,meshphong_vert:x_,meshphong_frag:E_,meshphysical_vert:M_,meshphysical_frag:S_,meshtoon_vert:y_,meshtoon_frag:T_,points_vert:w_,points_frag:A_,shadow_vert:C_,shadow_frag:R_,sprite_vert:P_,sprite_frag:L_},nt={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new St}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new St}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new St}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new St},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new St},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new St},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new St}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new St}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new St}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0},uvTransform:{value:new St}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}}},Vn={basic:{uniforms:an([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:an([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new bt(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:an([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:an([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:an([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new bt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:an([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:an([nt.points,nt.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:an([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:an([nt.common,nt.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:an([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:an([nt.sprite,nt.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new St},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:an([nt.common,nt.displacementmap,{referencePosition:{value:new Ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:an([nt.lights,nt.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Vn.physical={uniforms:an([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new St},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new St},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new St},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new St},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new St},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new St},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new St},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new St},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new St},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new St},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new St},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new St}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const ar={r:0,b:0,g:0};function D_(i,e,t,n,s,r,o){const a=new bt(0);let c=r===!0?0:1,l,u,h=null,d=0,g=null;function v(_,p){let x=!1,b=p.isScene===!0?p.background:null;b&&b.isTexture&&(b=(p.backgroundBlurriness>0?t:e).get(b)),b===null?m(a,c):b&&b.isColor&&(m(b,1),x=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Dr)?(u===void 0&&(u=new Yt(new Di(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:ps(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=Rt.getTransfer(b.colorSpace)!==Nt,(h!==b||d!==b.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,h=b,d=b.version,g=i.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Yt(new ms(2,2),new mi({name:"BackgroundMaterial",uniforms:ps(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=Rt.getTransfer(b.colorSpace)!==Nt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||g!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,d=b.version,g=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,p){_.getRGB(ar,Wf(i)),n.buffers.color.setClear(ar.r,ar.g,ar.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(_,p=1){a.set(_),c=p,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,m(a,c)},render:v}}function I_(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=_(null);let l=c,u=!1;function h(O,j,W,ee,te){let se=!1;if(o){const ue=m(ee,W,j);l!==ue&&(l=ue,g(l.object)),se=p(O,ee,W,te),se&&x(O,ee,W,te)}else{const ue=j.wireframe===!0;(l.geometry!==ee.id||l.program!==W.id||l.wireframe!==ue)&&(l.geometry=ee.id,l.program=W.id,l.wireframe=ue,se=!0)}te!==null&&t.update(te,i.ELEMENT_ARRAY_BUFFER),(se||u)&&(u=!1,L(O,j,W,ee),te!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(te).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function g(O){return n.isWebGL2?i.bindVertexArray(O):r.bindVertexArrayOES(O)}function v(O){return n.isWebGL2?i.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function m(O,j,W){const ee=W.wireframe===!0;let te=a[O.id];te===void 0&&(te={},a[O.id]=te);let se=te[j.id];se===void 0&&(se={},te[j.id]=se);let ue=se[ee];return ue===void 0&&(ue=_(d()),se[ee]=ue),ue}function _(O){const j=[],W=[],ee=[];for(let te=0;te<s;te++)j[te]=0,W[te]=0,ee[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:W,attributeDivisors:ee,object:O,attributes:{},index:null}}function p(O,j,W,ee){const te=l.attributes,se=j.attributes;let ue=0;const le=W.getAttributes();for(const ce in le)if(le[ce].location>=0){const B=te[ce];let J=se[ce];if(J===void 0&&(ce==="instanceMatrix"&&O.instanceMatrix&&(J=O.instanceMatrix),ce==="instanceColor"&&O.instanceColor&&(J=O.instanceColor)),B===void 0||B.attribute!==J||J&&B.data!==J.data)return!0;ue++}return l.attributesNum!==ue||l.index!==ee}function x(O,j,W,ee){const te={},se=j.attributes;let ue=0;const le=W.getAttributes();for(const ce in le)if(le[ce].location>=0){let B=se[ce];B===void 0&&(ce==="instanceMatrix"&&O.instanceMatrix&&(B=O.instanceMatrix),ce==="instanceColor"&&O.instanceColor&&(B=O.instanceColor));const J={};J.attribute=B,B&&B.data&&(J.data=B.data),te[ce]=J,ue++}l.attributes=te,l.attributesNum=ue,l.index=ee}function b(){const O=l.newAttributes;for(let j=0,W=O.length;j<W;j++)O[j]=0}function A(O){C(O,0)}function C(O,j){const W=l.newAttributes,ee=l.enabledAttributes,te=l.attributeDivisors;W[O]=1,ee[O]===0&&(i.enableVertexAttribArray(O),ee[O]=1),te[O]!==j&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,j),te[O]=j)}function T(){const O=l.newAttributes,j=l.enabledAttributes;for(let W=0,ee=j.length;W<ee;W++)j[W]!==O[W]&&(i.disableVertexAttribArray(W),j[W]=0)}function w(O,j,W,ee,te,se,ue){ue===!0?i.vertexAttribIPointer(O,j,W,te,se):i.vertexAttribPointer(O,j,W,ee,te,se)}function L(O,j,W,ee){if(n.isWebGL2===!1&&(O.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const te=ee.attributes,se=W.getAttributes(),ue=j.defaultAttributeValues;for(const le in se){const ce=se[le];if(ce.location>=0){let fe=te[le];if(fe===void 0&&(le==="instanceMatrix"&&O.instanceMatrix&&(fe=O.instanceMatrix),le==="instanceColor"&&O.instanceColor&&(fe=O.instanceColor)),fe!==void 0){const B=fe.normalized,J=fe.itemSize,oe=t.get(fe);if(oe===void 0)continue;const D=oe.buffer,I=oe.type,be=oe.bytesPerElement,Se=n.isWebGL2===!0&&(I===i.INT||I===i.UNSIGNED_INT||fe.gpuType===wf);if(fe.isInterleavedBufferAttribute){const Ce=fe.data,q=Ce.stride,Ae=fe.offset;if(Ce.isInstancedInterleavedBuffer){for(let ye=0;ye<ce.locationSize;ye++)C(ce.location+ye,Ce.meshPerAttribute);O.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let ye=0;ye<ce.locationSize;ye++)A(ce.location+ye);i.bindBuffer(i.ARRAY_BUFFER,D);for(let ye=0;ye<ce.locationSize;ye++)w(ce.location+ye,J/ce.locationSize,I,B,q*be,(Ae+J/ce.locationSize*ye)*be,Se)}else{if(fe.isInstancedBufferAttribute){for(let Ce=0;Ce<ce.locationSize;Ce++)C(ce.location+Ce,fe.meshPerAttribute);O.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ce=0;Ce<ce.locationSize;Ce++)A(ce.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,D);for(let Ce=0;Ce<ce.locationSize;Ce++)w(ce.location+Ce,J/ce.locationSize,I,B,J*be,J/ce.locationSize*Ce*be,Se)}}else if(ue!==void 0){const B=ue[le];if(B!==void 0)switch(B.length){case 2:i.vertexAttrib2fv(ce.location,B);break;case 3:i.vertexAttrib3fv(ce.location,B);break;case 4:i.vertexAttrib4fv(ce.location,B);break;default:i.vertexAttrib1fv(ce.location,B)}}}}T()}function U(){K();for(const O in a){const j=a[O];for(const W in j){const ee=j[W];for(const te in ee)v(ee[te].object),delete ee[te];delete j[W]}delete a[O]}}function y(O){if(a[O.id]===void 0)return;const j=a[O.id];for(const W in j){const ee=j[W];for(const te in ee)v(ee[te].object),delete ee[te];delete j[W]}delete a[O.id]}function N(O){for(const j in a){const W=a[j];if(W[O.id]===void 0)continue;const ee=W[O.id];for(const te in ee)v(ee[te].object),delete ee[te];delete W[O.id]}}function K(){$(),u=!0,l!==c&&(l=c,g(l.object))}function $(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:K,resetDefaultState:$,dispose:U,releaseStatesOfGeometry:y,releaseStatesOfProgram:N,initAttributes:b,enableAttribute:A,disableUnusedAttributes:T}}function N_(i,e,t,n){const s=n.isWebGL2;let r;function o(u){r=u}function a(u,h){i.drawArrays(r,u,h),t.update(h,r,1)}function c(u,h,d){if(d===0)return;let g,v;if(s)g=i,v="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[v](r,u,h,d),t.update(h,r,d)}function l(u,h,d){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<d;v++)this.render(u[v],h[v]);else{g.multiDrawArraysWEBGL(r,u,0,h,0,d);let v=0;for(let m=0;m<d;m++)v+=h[m];t.update(v,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function U_(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=d>0,A=o||e.has("OES_texture_float"),C=b&&A,T=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:_,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:b,floatFragmentTextures:A,floatVertexTextures:C,maxSamples:T}}function F_(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Qn,a=new St,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const g=h.length!==0||d||n!==0||s;return s=d,n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,g){const v=h.clippingPlanes,m=h.clipIntersection,_=h.clipShadows,p=i.get(h);if(!s||v===null||v.length===0||r&&!_)r?u(null):l();else{const x=r?0:n,b=x*4;let A=p.clippingState||null;c.value=A,A=u(v,d,b,g);for(let C=0;C!==b;++C)A[C]=t[C];p.clippingState=A,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,g,v){const m=h!==null?h.length:0;let _=null;if(m!==0){if(_=c.value,v!==!0||_===null){const p=g+m*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(_===null||_.length<p)&&(_=new Float32Array(p));for(let b=0,A=g;b!==m;++b,A+=4)o.copy(h[b]).applyMatrix4(x,a),o.normal.toArray(_,A),_[A+3]=o.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,_}}function O_(i){let e=new WeakMap;function t(o,a){return a===Co?o.mapping=fs:a===Ro&&(o.mapping=hs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Co||a===Ro)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Kd(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Yf extends Xf{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const is=4,Gl=[.125,.215,.35,.446,.526,.582],Ti=20,ho=new Yf,Wl=new bt;let po=null,mo=0,_o=0;const Si=(1+Math.sqrt(5))/2,Qi=1/Si,Xl=[new Ie(1,1,1),new Ie(-1,1,1),new Ie(1,1,-1),new Ie(-1,1,-1),new Ie(0,Si,Qi),new Ie(0,Si,-Qi),new Ie(Qi,0,Si),new Ie(-Qi,0,Si),new Ie(Si,Qi,0),new Ie(-Si,Qi,0)];class jl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){po=this._renderer.getRenderTarget(),mo=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(po,mo,_o),e.scissorTest=!1,lr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fs||e.mapping===hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),po=this._renderer.getRenderTarget(),mo=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:Ns,format:On,colorSpace:ii,depthBuffer:!1},s=ql(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ql(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=k_(r)),this._blurMaterial=B_(r,e,t)}return s}_compileMaterial(e){const t=new Yt(this._lodPlanes[0],e);this._renderer.compile(t,ho)}_sceneToCubeUV(e,t,n,s){const a=new Pn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Wl),u.toneMapping=hi,u.autoClear=!1;const g=new Pr({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),v=new Yt(new Di,g);let m=!1;const _=e.background;_?_.isColor&&(g.color.copy(_),e.background=null,m=!0):(g.color.copy(Wl),m=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):x===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const b=this._cubeSize;lr(s,x*b,p>2?b:0,b,b),u.setRenderTarget(s),m&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===fs||e.mapping===hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Yt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;lr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ho)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Xl[(s-1)%Xl.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Yt(this._lodPlanes[s],l),d=l.uniforms,g=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*Ti-1),m=r/v,_=isFinite(r)?1+Math.floor(u*m):Ti;_>Ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Ti}`);const p=[];let x=0;for(let w=0;w<Ti;++w){const L=w/m,U=Math.exp(-L*L/2);p.push(U),w===0?x+=U:w<_&&(x+=2*U)}for(let w=0;w<p.length;w++)p[w]=p[w]/x;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=v,d.mipInt.value=b-n;const A=this._sizeLods[s],C=3*A*(s>b-is?s-b+is:0),T=4*(this._cubeSize-A);lr(t,C,T,3*A,2*A),c.setRenderTarget(t),c.render(h,ho)}}function k_(i){const e=[],t=[],n=[];let s=i;const r=i-is+1+Gl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-is?c=Gl[o-i+is-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],g=6,v=6,m=3,_=2,p=1,x=new Float32Array(m*v*g),b=new Float32Array(_*v*g),A=new Float32Array(p*v*g);for(let T=0;T<g;T++){const w=T%3*2/3-1,L=T>2?0:-1,U=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];x.set(U,m*v*T),b.set(d,_*v*T);const y=[T,T,T,T,T,T];A.set(y,p*v*T)}const C=new $t;C.setAttribute("position",new Hn(x,m)),C.setAttribute("uv",new Hn(b,_)),C.setAttribute("faceIndex",new Hn(A,p)),e.push(C),s>is&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ql(i,e,t){const n=new Pi(i,e,t);return n.texture.mapping=Dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function B_(i,e,t){const n=new Float32Array(Ti),s=new Ie(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ho(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Yl(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ho(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Kl(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Ho(){return`

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
	`}function z_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Co||c===Ro,u=c===fs||c===hs;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new jl(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new jl(i));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function V_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function H_(i,e,t,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const m=d.morphAttributes[v];for(let _=0,p=m.length;_<p;_++)e.remove(m[_])}d.removeEventListener("dispose",o),delete s[d.id];const g=r.get(d);g&&(e.remove(g),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const v in d)e.update(d[v],i.ARRAY_BUFFER);const g=h.morphAttributes;for(const v in g){const m=g[v];for(let _=0,p=m.length;_<p;_++)e.update(m[_],i.ARRAY_BUFFER)}}function l(h){const d=[],g=h.index,v=h.attributes.position;let m=0;if(g!==null){const x=g.array;m=g.version;for(let b=0,A=x.length;b<A;b+=3){const C=x[b+0],T=x[b+1],w=x[b+2];d.push(C,T,T,w,w,C)}}else if(v!==void 0){const x=v.array;m=v.version;for(let b=0,A=x.length/3-1;b<A;b+=3){const C=b+0,T=b+1,w=b+2;d.push(C,T,T,w,w,C)}}else return;const _=new(Ff(d)?Gf:Hf)(d,1);_.version=m;const p=r.get(h);p&&e.remove(p),r.set(h,_)}function u(h){const d=r.get(h);if(d){const g=h.index;g!==null&&d.version<g.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function G_(i,e,t,n){const s=n.isWebGL2;let r;function o(g){r=g}let a,c;function l(g){a=g.type,c=g.bytesPerElement}function u(g,v){i.drawElements(r,v,a,g*c),t.update(v,r,1)}function h(g,v,m){if(m===0)return;let _,p;if(s)_=i,p="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](r,v,a,g*c,m),t.update(v,r,m)}function d(g,v,m){if(m===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<m;p++)this.render(g[p]/c,v[p]);else{_.multiDrawElementsWEBGL(r,v,0,a,g,0,m);let p=0;for(let x=0;x<m;x++)p+=v[x];t.update(p,r,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function W_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function X_(i,e){return i[0]-e[0]}function j_(i,e){return Math.abs(e[1])-Math.abs(i[1])}function q_(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new Zt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=g!==void 0?g.length:0;let m=r.get(u);if(m===void 0||m.count!==v){let O=function(){K.dispose(),r.delete(u),u.removeEventListener("dispose",O)};m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let L=0;x===!0&&(L=1),b===!0&&(L=2),A===!0&&(L=3);let U=u.attributes.position.count*L,y=1;U>e.maxTextureSize&&(y=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const N=new Float32Array(U*y*4*v),K=new Bf(N,U,y,v);K.type=$n,K.needsUpdate=!0;const $=L*4;for(let j=0;j<v;j++){const W=C[j],ee=T[j],te=w[j],se=U*y*4*j;for(let ue=0;ue<W.count;ue++){const le=ue*$;x===!0&&(o.fromBufferAttribute(W,ue),N[se+le+0]=o.x,N[se+le+1]=o.y,N[se+le+2]=o.z,N[se+le+3]=0),b===!0&&(o.fromBufferAttribute(ee,ue),N[se+le+4]=o.x,N[se+le+5]=o.y,N[se+le+6]=o.z,N[se+le+7]=0),A===!0&&(o.fromBufferAttribute(te,ue),N[se+le+8]=o.x,N[se+le+9]=o.y,N[se+le+10]=o.z,N[se+le+11]=te.itemSize===4?o.w:1)}}m={count:v,texture:K,size:new pt(U,y)},r.set(u,m),u.addEventListener("dispose",O)}let _=0;for(let x=0;x<d.length;x++)_+=d[x];const p=u.morphTargetsRelative?1:1-_;h.getUniforms().setValue(i,"morphTargetBaseInfluence",p),h.getUniforms().setValue(i,"morphTargetInfluences",d),h.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let v=n[u.id];if(v===void 0||v.length!==g){v=[];for(let b=0;b<g;b++)v[b]=[b,0];n[u.id]=v}for(let b=0;b<g;b++){const A=v[b];A[0]=b,A[1]=d[b]}v.sort(j_);for(let b=0;b<8;b++)b<g&&v[b][1]?(a[b][0]=v[b][0],a[b][1]=v[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(X_);const m=u.morphAttributes.position,_=u.morphAttributes.normal;let p=0;for(let b=0;b<8;b++){const A=a[b],C=A[0],T=A[1];C!==Number.MAX_SAFE_INTEGER&&T?(m&&u.getAttribute("morphTarget"+b)!==m[C]&&u.setAttribute("morphTarget"+b,m[C]),_&&u.getAttribute("morphNormal"+b)!==_[C]&&u.setAttribute("morphNormal"+b,_[C]),s[b]=T,p+=T):(m&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),_&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),s[b]=0)}const x=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",x),h.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function Y_(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Kf extends rn{constructor(e,t,n,s,r,o,a,c,l,u){if(u=u!==void 0?u:Ci,u!==Ci&&u!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ci&&(n=ui),n===void 0&&u===ds&&(n=Ai),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ln,this.minFilter=c!==void 0?c:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Zf=new rn,Jf=new Kf(1,1);Jf.compareFunction=Uf;const Qf=new Bf,$f=new Dd,eh=new jf,Zl=[],Jl=[],Ql=new Float32Array(16),$l=new Float32Array(9),ec=new Float32Array(4);function gs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Zl[s];if(r===void 0&&(r=new Float32Array(s),Zl[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Fr(i,e){let t=Jl[e];t===void 0&&(t=new Int32Array(e),Jl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function K_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Z_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2fv(this.addr,e),Xt(t,e)}}function J_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;i.uniform3fv(this.addr,e),Xt(t,e)}}function Q_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4fv(this.addr,e),Xt(t,e)}}function $_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;ec.set(n),i.uniformMatrix2fv(this.addr,!1,ec),Xt(t,n)}}function eg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;$l.set(n),i.uniformMatrix3fv(this.addr,!1,$l),Xt(t,n)}}function tg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Ql.set(n),i.uniformMatrix4fv(this.addr,!1,Ql),Xt(t,n)}}function ng(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ig(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2iv(this.addr,e),Xt(t,e)}}function sg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3iv(this.addr,e),Xt(t,e)}}function rg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4iv(this.addr,e),Xt(t,e)}}function og(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ag(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2uiv(this.addr,e),Xt(t,e)}}function lg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3uiv(this.addr,e),Xt(t,e)}}function cg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4uiv(this.addr,e),Xt(t,e)}}function ug(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Jf:Zf;t.setTexture2D(e||r,s)}function fg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||$f,s)}function hg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||eh,s)}function dg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Qf,s)}function pg(i){switch(i){case 5126:return K_;case 35664:return Z_;case 35665:return J_;case 35666:return Q_;case 35674:return $_;case 35675:return eg;case 35676:return tg;case 5124:case 35670:return ng;case 35667:case 35671:return ig;case 35668:case 35672:return sg;case 35669:case 35673:return rg;case 5125:return og;case 36294:return ag;case 36295:return lg;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return ug;case 35679:case 36299:case 36307:return fg;case 35680:case 36300:case 36308:case 36293:return hg;case 36289:case 36303:case 36311:case 36292:return dg}}function mg(i,e){i.uniform1fv(this.addr,e)}function _g(i,e){const t=gs(e,this.size,2);i.uniform2fv(this.addr,t)}function gg(i,e){const t=gs(e,this.size,3);i.uniform3fv(this.addr,t)}function vg(i,e){const t=gs(e,this.size,4);i.uniform4fv(this.addr,t)}function bg(i,e){const t=gs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function xg(i,e){const t=gs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Eg(i,e){const t=gs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Mg(i,e){i.uniform1iv(this.addr,e)}function Sg(i,e){i.uniform2iv(this.addr,e)}function yg(i,e){i.uniform3iv(this.addr,e)}function Tg(i,e){i.uniform4iv(this.addr,e)}function wg(i,e){i.uniform1uiv(this.addr,e)}function Ag(i,e){i.uniform2uiv(this.addr,e)}function Cg(i,e){i.uniform3uiv(this.addr,e)}function Rg(i,e){i.uniform4uiv(this.addr,e)}function Pg(i,e,t){const n=this.cache,s=e.length,r=Fr(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Zf,r[o])}function Lg(i,e,t){const n=this.cache,s=e.length,r=Fr(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||$f,r[o])}function Dg(i,e,t){const n=this.cache,s=e.length,r=Fr(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||eh,r[o])}function Ig(i,e,t){const n=this.cache,s=e.length,r=Fr(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Qf,r[o])}function Ng(i){switch(i){case 5126:return mg;case 35664:return _g;case 35665:return gg;case 35666:return vg;case 35674:return bg;case 35675:return xg;case 35676:return Eg;case 5124:case 35670:return Mg;case 35667:case 35671:return Sg;case 35668:case 35672:return yg;case 35669:case 35673:return Tg;case 5125:return wg;case 36294:return Ag;case 36295:return Cg;case 36296:return Rg;case 35678:case 36198:case 36298:case 36306:case 35682:return Pg;case 35679:case 36299:case 36307:return Lg;case 35680:case 36300:case 36308:case 36293:return Dg;case 36289:case 36303:case 36311:case 36292:return Ig}}class Ug{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=pg(t.type)}}class Fg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ng(t.type)}}class Og{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const go=/(\w+)(\])?(\[|\.)?/g;function tc(i,e){i.seq.push(e),i.map[e.id]=e}function kg(i,e,t){const n=i.name,s=n.length;for(go.lastIndex=0;;){const r=go.exec(n),o=go.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){tc(t,l===void 0?new Ug(a,i,e):new Fg(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Og(a),tc(t,h)),t=h}}}class mr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);kg(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function nc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Bg=37297;let zg=0;function Vg(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Hg(i){const e=Rt.getPrimaries(Rt.workingColorSpace),t=Rt.getPrimaries(i);let n;switch(e===t?n="":e===Ar&&t===wr?n="LinearDisplayP3ToLinearSRGB":e===wr&&t===Ar&&(n="LinearSRGBToLinearDisplayP3"),i){case ii:case Ir:return[n,"LinearTransferOETF"];case Qt:case Bo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ic(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Vg(i.getShaderSource(e),o)}else return s}function Gg(i,e){const t=Hg(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Wg(i,e){let t;switch(e){case td:t="Linear";break;case nd:t="Reinhard";break;case id:t="OptimizedCineon";break;case sd:t="ACESFilmic";break;case od:t="AgX";break;case rd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Xg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ss).join(`
`)}function jg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function qg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Yg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ss(i){return i!==""}function sc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uo(i){return i.replace(Kg,Jg)}const Zg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Jg(i,e){let t=vt[e];if(t===void 0){const n=Zg.get(e);if(n!==void 0)t=vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Uo(t)}const Qg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oc(i){return i.replace(Qg,$g)}function $g(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ac(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function ev(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Rh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function tv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case fs:case hs:e="ENVMAP_TYPE_CUBE";break;case Dr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hs:e="ENVMAP_MODE_REFRACTION";break}return e}function iv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Oo:e="ENVMAP_BLENDING_MULTIPLY";break;case $h:e="ENVMAP_BLENDING_MIX";break;case ed:e="ENVMAP_BLENDING_ADD";break}return e}function sv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function rv(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=ev(t),l=tv(t),u=nv(t),h=iv(t),d=sv(t),g=t.isWebGL2?"":Xg(t),v=jg(t),m=qg(r),_=s.createProgram();let p,x,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ss).join(`
`),p.length>0&&(p+=`
`),x=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ss).join(`
`),x.length>0&&(x+=`
`)):(p=[ac(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),x=[g,ac(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?vt.tonemapping_pars_fragment:"",t.toneMapping!==hi?Wg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,Gg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ss).join(`
`)),o=Uo(o),o=sc(o,t),o=rc(o,t),a=Uo(a),a=sc(a,t),a=rc(a,t),o=oc(o),a=oc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const A=b+p+o,C=b+x+a,T=nc(s,s.VERTEX_SHADER,A),w=nc(s,s.FRAGMENT_SHADER,C);s.attachShader(_,T),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function L(K){if(i.debug.checkShaderErrors){const $=s.getProgramInfoLog(_).trim(),O=s.getShaderInfoLog(T).trim(),j=s.getShaderInfoLog(w).trim();let W=!0,ee=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,w);else{const te=ic(s,T,"vertex"),se=ic(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+K.name+`
Material Type: `+K.type+`

Program Info Log: `+$+`
`+te+`
`+se)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(O===""||j==="")&&(ee=!1);ee&&(K.diagnostics={runnable:W,programLog:$,vertexShader:{log:O,prefix:p},fragmentShader:{log:j,prefix:x}})}s.deleteShader(T),s.deleteShader(w),U=new mr(s,_),y=Yg(s,_)}let U;this.getUniforms=function(){return U===void 0&&L(this),U};let y;this.getAttributes=function(){return y===void 0&&L(this),y};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(_,Bg)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=w,this}let ov=0;class av{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new lv(e),t.set(e,n)),n}}class lv{constructor(e){this.id=ov++,this.code=e,this.usedTimes=0}}function cv(i,e,t,n,s,r,o){const a=new zf,c=new av,l=new Set,u=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,g=s.vertexTextures;let v=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,N,K,$,O){const j=$.fog,W=O.geometry,ee=y.isMeshStandardMaterial?$.environment:null,te=(y.isMeshStandardMaterial?t:e).get(y.envMap||ee),se=te&&te.mapping===Dr?te.image.height:null,ue=m[y.type];y.precision!==null&&(v=s.getMaxPrecision(y.precision),v!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",v,"instead."));const le=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ce=le!==void 0?le.length:0;let fe=0;W.morphAttributes.position!==void 0&&(fe=1),W.morphAttributes.normal!==void 0&&(fe=2),W.morphAttributes.color!==void 0&&(fe=3);let B,J,oe,D;if(ue){const st=Vn[ue];B=st.vertexShader,J=st.fragmentShader}else B=y.vertexShader,J=y.fragmentShader,c.update(y),oe=c.getVertexShaderID(y),D=c.getFragmentShaderID(y);const I=i.getRenderTarget(),be=O.isInstancedMesh===!0,Se=O.isBatchedMesh===!0,Ce=!!y.map,q=!!y.matcap,Ae=!!te,ye=!!y.aoMap,Ne=!!y.lightMap,ae=!!y.bumpMap,ie=!!y.normalMap,_e=!!y.displacementMap,k=!!y.emissiveMap,P=!!y.metalnessMap,ve=!!y.roughnessMap,Te=y.anisotropy>0,X=y.clearcoat>0,H=y.iridescence>0,Y=y.sheen>0,he=y.transmission>0,Q=Te&&!!y.anisotropyMap,re=X&&!!y.clearcoatMap,Me=X&&!!y.clearcoatNormalMap,Ee=X&&!!y.clearcoatRoughnessMap,xe=H&&!!y.iridescenceMap,Re=H&&!!y.iridescenceThicknessMap,Ye=Y&&!!y.sheenColorMap,Fe=Y&&!!y.sheenRoughnessMap,Le=!!y.specularMap,ke=!!y.specularColorMap,Z=!!y.specularIntensityMap,Be=he&&!!y.transmissionMap,qe=he&&!!y.thicknessMap,He=!!y.gradientMap,G=!!y.alphaMap,De=y.alphaTest>0,we=!!y.alphaHash,Oe=!!y.extensions;let Xe=hi;y.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Xe=i.toneMapping);const tt={isWebGL2:h,shaderID:ue,shaderType:y.type,shaderName:y.name,vertexShader:B,fragmentShader:J,defines:y.defines,customVertexShaderID:oe,customFragmentShaderID:D,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:v,batching:Se,instancing:be,instancingColor:be&&O.instanceColor!==null,supportsVertexTextures:g,outputColorSpace:I===null?i.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ii,alphaToCoverage:!!y.alphaToCoverage,map:Ce,matcap:q,envMap:Ae,envMapMode:Ae&&te.mapping,envMapCubeUVHeight:se,aoMap:ye,lightMap:Ne,bumpMap:ae,normalMap:ie,displacementMap:g&&_e,emissiveMap:k,normalMapObjectSpace:ie&&y.normalMapType===gd,normalMapTangentSpace:ie&&y.normalMapType===Nf,metalnessMap:P,roughnessMap:ve,anisotropy:Te,anisotropyMap:Q,clearcoat:X,clearcoatMap:re,clearcoatNormalMap:Me,clearcoatRoughnessMap:Ee,iridescence:H,iridescenceMap:xe,iridescenceThicknessMap:Re,sheen:Y,sheenColorMap:Ye,sheenRoughnessMap:Fe,specularMap:Le,specularColorMap:ke,specularIntensityMap:Z,transmission:he,transmissionMap:Be,thicknessMap:qe,gradientMap:He,opaque:y.transparent===!1&&y.blending===os&&y.alphaToCoverage===!1,alphaMap:G,alphaTest:De,alphaHash:we,combine:y.combine,mapUv:Ce&&_(y.map.channel),aoMapUv:ye&&_(y.aoMap.channel),lightMapUv:Ne&&_(y.lightMap.channel),bumpMapUv:ae&&_(y.bumpMap.channel),normalMapUv:ie&&_(y.normalMap.channel),displacementMapUv:_e&&_(y.displacementMap.channel),emissiveMapUv:k&&_(y.emissiveMap.channel),metalnessMapUv:P&&_(y.metalnessMap.channel),roughnessMapUv:ve&&_(y.roughnessMap.channel),anisotropyMapUv:Q&&_(y.anisotropyMap.channel),clearcoatMapUv:re&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Me&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&_(y.sheenRoughnessMap.channel),specularMapUv:Le&&_(y.specularMap.channel),specularColorMapUv:ke&&_(y.specularColorMap.channel),specularIntensityMapUv:Z&&_(y.specularIntensityMap.channel),transmissionMapUv:Be&&_(y.transmissionMap.channel),thicknessMapUv:qe&&_(y.thicknessMap.channel),alphaMapUv:G&&_(y.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ie||Te),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!W.attributes.uv&&(Ce||G),fog:!!j,useFog:y.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:O.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:fe,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&K.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ce&&y.map.isVideoTexture===!0&&Rt.getTransfer(y.map.colorSpace)===Nt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===cn,flipSided:y.side===Mn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:Oe&&y.extensions.derivatives===!0,extensionFragDepth:Oe&&y.extensions.fragDepth===!0,extensionDrawBuffers:Oe&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:Oe&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Oe&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Oe&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return tt.vertexUv1s=l.has(1),tt.vertexUv2s=l.has(2),tt.vertexUv3s=l.has(3),l.clear(),tt}function x(y){const N=[];if(y.shaderID?N.push(y.shaderID):(N.push(y.customVertexShaderID),N.push(y.customFragmentShaderID)),y.defines!==void 0)for(const K in y.defines)N.push(K),N.push(y.defines[K]);return y.isRawShaderMaterial===!1&&(b(N,y),A(N,y),N.push(i.outputColorSpace)),N.push(y.customProgramCacheKey),N.join()}function b(y,N){y.push(N.precision),y.push(N.outputColorSpace),y.push(N.envMapMode),y.push(N.envMapCubeUVHeight),y.push(N.mapUv),y.push(N.alphaMapUv),y.push(N.lightMapUv),y.push(N.aoMapUv),y.push(N.bumpMapUv),y.push(N.normalMapUv),y.push(N.displacementMapUv),y.push(N.emissiveMapUv),y.push(N.metalnessMapUv),y.push(N.roughnessMapUv),y.push(N.anisotropyMapUv),y.push(N.clearcoatMapUv),y.push(N.clearcoatNormalMapUv),y.push(N.clearcoatRoughnessMapUv),y.push(N.iridescenceMapUv),y.push(N.iridescenceThicknessMapUv),y.push(N.sheenColorMapUv),y.push(N.sheenRoughnessMapUv),y.push(N.specularMapUv),y.push(N.specularColorMapUv),y.push(N.specularIntensityMapUv),y.push(N.transmissionMapUv),y.push(N.thicknessMapUv),y.push(N.combine),y.push(N.fogExp2),y.push(N.sizeAttenuation),y.push(N.morphTargetsCount),y.push(N.morphAttributeCount),y.push(N.numDirLights),y.push(N.numPointLights),y.push(N.numSpotLights),y.push(N.numSpotLightMaps),y.push(N.numHemiLights),y.push(N.numRectAreaLights),y.push(N.numDirLightShadows),y.push(N.numPointLightShadows),y.push(N.numSpotLightShadows),y.push(N.numSpotLightShadowsWithMaps),y.push(N.numLightProbes),y.push(N.shadowMapType),y.push(N.toneMapping),y.push(N.numClippingPlanes),y.push(N.numClipIntersection),y.push(N.depthPacking)}function A(y,N){a.disableAll(),N.isWebGL2&&a.enable(0),N.supportsVertexTextures&&a.enable(1),N.instancing&&a.enable(2),N.instancingColor&&a.enable(3),N.matcap&&a.enable(4),N.envMap&&a.enable(5),N.normalMapObjectSpace&&a.enable(6),N.normalMapTangentSpace&&a.enable(7),N.clearcoat&&a.enable(8),N.iridescence&&a.enable(9),N.alphaTest&&a.enable(10),N.vertexColors&&a.enable(11),N.vertexAlphas&&a.enable(12),N.vertexUv1s&&a.enable(13),N.vertexUv2s&&a.enable(14),N.vertexUv3s&&a.enable(15),N.vertexTangents&&a.enable(16),N.anisotropy&&a.enable(17),N.alphaHash&&a.enable(18),N.batching&&a.enable(19),y.push(a.mask),a.disableAll(),N.fog&&a.enable(0),N.useFog&&a.enable(1),N.flatShading&&a.enable(2),N.logarithmicDepthBuffer&&a.enable(3),N.skinning&&a.enable(4),N.morphTargets&&a.enable(5),N.morphNormals&&a.enable(6),N.morphColors&&a.enable(7),N.premultipliedAlpha&&a.enable(8),N.shadowMapEnabled&&a.enable(9),N.useLegacyLights&&a.enable(10),N.doubleSided&&a.enable(11),N.flipSided&&a.enable(12),N.useDepthPacking&&a.enable(13),N.dithering&&a.enable(14),N.transmission&&a.enable(15),N.sheen&&a.enable(16),N.opaque&&a.enable(17),N.pointsUvs&&a.enable(18),N.decodeVideoTexture&&a.enable(19),N.alphaToCoverage&&a.enable(20),y.push(a.mask)}function C(y){const N=m[y.type];let K;if(N){const $=Vn[N];K=Xd.clone($.uniforms)}else K=y.uniforms;return K}function T(y,N){let K;for(let $=0,O=u.length;$<O;$++){const j=u[$];if(j.cacheKey===N){K=j,++K.usedTimes;break}}return K===void 0&&(K=new rv(i,N,y,r),u.push(K)),K}function w(y){if(--y.usedTimes===0){const N=u.indexOf(y);u[N]=u[u.length-1],u.pop(),y.destroy()}}function L(y){c.remove(y)}function U(){c.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:C,acquireProgram:T,releaseProgram:w,releaseShaderCache:L,programs:u,dispose:U}}function uv(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function fv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function lc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function cc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,g,v,m,_){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:g,groupOrder:v,renderOrder:h.renderOrder,z:m,group:_},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=g,p.groupOrder=v,p.renderOrder=h.renderOrder,p.z=m,p.group=_),e++,p}function a(h,d,g,v,m,_){const p=o(h,d,g,v,m,_);g.transmission>0?n.push(p):g.transparent===!0?s.push(p):t.push(p)}function c(h,d,g,v,m,_){const p=o(h,d,g,v,m,_);g.transmission>0?n.unshift(p):g.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||fv),n.length>1&&n.sort(d||lc),s.length>1&&s.sort(d||lc)}function u(){for(let h=e,d=i.length;h<d;h++){const g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function hv(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new cc,i.set(n,[o])):s>=r.length?(o=new cc,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function dv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Ie,color:new bt};break;case"SpotLight":t={position:new Ie,direction:new Ie,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Ie,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Ie,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new Ie,halfWidth:new Ie,halfHeight:new Ie};break}return i[e.id]=t,t}}}function pv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let mv=0;function _v(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function gv(i,e){const t=new dv,n=pv(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new Ie);const r=new Ie,o=new Ht,a=new Ht;function c(u,h){let d=0,g=0,v=0;for(let K=0;K<9;K++)s.probe[K].set(0,0,0);let m=0,_=0,p=0,x=0,b=0,A=0,C=0,T=0,w=0,L=0,U=0;u.sort(_v);const y=h===!0?Math.PI:1;for(let K=0,$=u.length;K<$;K++){const O=u[K],j=O.color,W=O.intensity,ee=O.distance,te=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)d+=j.r*W*y,g+=j.g*W*y,v+=j.b*W*y;else if(O.isLightProbe){for(let se=0;se<9;se++)s.probe[se].addScaledVector(O.sh.coefficients[se],W);U++}else if(O.isDirectionalLight){const se=t.get(O);if(se.color.copy(O.color).multiplyScalar(O.intensity*y),O.castShadow){const ue=O.shadow,le=n.get(O);le.shadowBias=ue.bias,le.shadowNormalBias=ue.normalBias,le.shadowRadius=ue.radius,le.shadowMapSize=ue.mapSize,s.directionalShadow[m]=le,s.directionalShadowMap[m]=te,s.directionalShadowMatrix[m]=O.shadow.matrix,A++}s.directional[m]=se,m++}else if(O.isSpotLight){const se=t.get(O);se.position.setFromMatrixPosition(O.matrixWorld),se.color.copy(j).multiplyScalar(W*y),se.distance=ee,se.coneCos=Math.cos(O.angle),se.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),se.decay=O.decay,s.spot[p]=se;const ue=O.shadow;if(O.map&&(s.spotLightMap[w]=O.map,w++,ue.updateMatrices(O),O.castShadow&&L++),s.spotLightMatrix[p]=ue.matrix,O.castShadow){const le=n.get(O);le.shadowBias=ue.bias,le.shadowNormalBias=ue.normalBias,le.shadowRadius=ue.radius,le.shadowMapSize=ue.mapSize,s.spotShadow[p]=le,s.spotShadowMap[p]=te,T++}p++}else if(O.isRectAreaLight){const se=t.get(O);se.color.copy(j).multiplyScalar(W),se.halfWidth.set(O.width*.5,0,0),se.halfHeight.set(0,O.height*.5,0),s.rectArea[x]=se,x++}else if(O.isPointLight){const se=t.get(O);if(se.color.copy(O.color).multiplyScalar(O.intensity*y),se.distance=O.distance,se.decay=O.decay,O.castShadow){const ue=O.shadow,le=n.get(O);le.shadowBias=ue.bias,le.shadowNormalBias=ue.normalBias,le.shadowRadius=ue.radius,le.shadowMapSize=ue.mapSize,le.shadowCameraNear=ue.camera.near,le.shadowCameraFar=ue.camera.far,s.pointShadow[_]=le,s.pointShadowMap[_]=te,s.pointShadowMatrix[_]=O.shadow.matrix,C++}s.point[_]=se,_++}else if(O.isHemisphereLight){const se=t.get(O);se.skyColor.copy(O.color).multiplyScalar(W*y),se.groundColor.copy(O.groundColor).multiplyScalar(W*y),s.hemi[b]=se,b++}}x>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=nt.LTC_FLOAT_1,s.rectAreaLTC2=nt.LTC_FLOAT_2):(s.rectAreaLTC1=nt.LTC_HALF_1,s.rectAreaLTC2=nt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=nt.LTC_FLOAT_1,s.rectAreaLTC2=nt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=nt.LTC_HALF_1,s.rectAreaLTC2=nt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=g,s.ambient[2]=v;const N=s.hash;(N.directionalLength!==m||N.pointLength!==_||N.spotLength!==p||N.rectAreaLength!==x||N.hemiLength!==b||N.numDirectionalShadows!==A||N.numPointShadows!==C||N.numSpotShadows!==T||N.numSpotMaps!==w||N.numLightProbes!==U)&&(s.directional.length=m,s.spot.length=p,s.rectArea.length=x,s.point.length=_,s.hemi.length=b,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=T+w-L,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=U,N.directionalLength=m,N.pointLength=_,N.spotLength=p,N.rectAreaLength=x,N.hemiLength=b,N.numDirectionalShadows=A,N.numPointShadows=C,N.numSpotShadows=T,N.numSpotMaps=w,N.numLightProbes=U,s.version=mv++)}function l(u,h){let d=0,g=0,v=0,m=0,_=0;const p=h.matrixWorldInverse;for(let x=0,b=u.length;x<b;x++){const A=u[x];if(A.isDirectionalLight){const C=s.directional[d];C.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),d++}else if(A.isSpotLight){const C=s.spot[v];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),v++}else if(A.isRectAreaLight){const C=s.rectArea[m];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(p),a.identity(),o.copy(A.matrixWorld),o.premultiply(p),a.extractRotation(o),C.halfWidth.set(A.width*.5,0,0),C.halfHeight.set(0,A.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),m++}else if(A.isPointLight){const C=s.point[g];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(p),g++}else if(A.isHemisphereLight){const C=s.hemi[_];C.direction.setFromMatrixPosition(A.matrixWorld),C.direction.transformDirection(p),_++}}}return{setup:c,setupView:l,state:s}}function uc(i,e){const t=new gv(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(h){n.push(h)}function a(h){s.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function vv(i,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let c;return a===void 0?(c=new uc(i,e),t.set(r,[c])):o>=a.length?(c=new uc(i,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:n,dispose:s}}class bv extends _s{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xv extends _s{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ev=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mv=`uniform sampler2D shadow_pass;
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
}`;function Sv(i,e,t){let n=new Vo;const s=new pt,r=new pt,o=new Zt,a=new bv({depthPacking:_d}),c=new xv,l={},u=t.maxTextureSize,h={[pi]:Mn,[Mn]:pi,[cn]:cn},d=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:Ev,fragmentShader:Mv}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const v=new $t;v.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Yt(v,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yf;let p=this.type;this.render=function(T,w,L){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||T.length===0)return;const U=i.getRenderTarget(),y=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),K=i.state;K.setBlending(fi),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const $=p!==Zn&&this.type===Zn,O=p===Zn&&this.type!==Zn;for(let j=0,W=T.length;j<W;j++){const ee=T[j],te=ee.shadow;if(te===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;s.copy(te.mapSize);const se=te.getFrameExtents();if(s.multiply(se),r.copy(te.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/se.x),s.x=r.x*se.x,te.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/se.y),s.y=r.y*se.y,te.mapSize.y=r.y)),te.map===null||$===!0||O===!0){const le=this.type!==Zn?{minFilter:ln,magFilter:ln}:{};te.map!==null&&te.map.dispose(),te.map=new Pi(s.x,s.y,le),te.map.texture.name=ee.name+".shadowMap",te.camera.updateProjectionMatrix()}i.setRenderTarget(te.map),i.clear();const ue=te.getViewportCount();for(let le=0;le<ue;le++){const ce=te.getViewport(le);o.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),K.viewport(o),te.updateMatrices(ee,le),n=te.getFrustum(),A(w,L,te.camera,ee,this.type)}te.isPointLightShadow!==!0&&this.type===Zn&&x(te,L),te.needsUpdate=!1}p=this.type,_.needsUpdate=!1,i.setRenderTarget(U,y,N)};function x(T,w){const L=e.update(m);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Pi(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,L,d,m,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,L,g,m,null)}function b(T,w,L,U){let y=null;const N=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)y=N;else if(y=L.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const K=y.uuid,$=w.uuid;let O=l[K];O===void 0&&(O={},l[K]=O);let j=O[$];j===void 0&&(j=y.clone(),O[$]=j,w.addEventListener("dispose",C)),y=j}if(y.visible=w.visible,y.wireframe=w.wireframe,U===Zn?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:h[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const K=i.properties.get(y);K.light=L}return y}function A(T,w,L,U,y){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Zn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const $=e.update(T),O=T.material;if(Array.isArray(O)){const j=$.groups;for(let W=0,ee=j.length;W<ee;W++){const te=j[W],se=O[te.materialIndex];if(se&&se.visible){const ue=b(T,se,U,y);T.onBeforeShadow(i,T,w,L,$,ue,te),i.renderBufferDirect(L,null,$,ue,T,te),T.onAfterShadow(i,T,w,L,$,ue,te)}}}else if(O.visible){const j=b(T,O,U,y);T.onBeforeShadow(i,T,w,L,$,j,null),i.renderBufferDirect(L,null,$,j,T,null),T.onAfterShadow(i,T,w,L,$,j,null)}}const K=T.children;for(let $=0,O=K.length;$<O;$++)A(K[$],w,L,U,y)}function C(T){T.target.removeEventListener("dispose",C);for(const L in l){const U=l[L],y=T.target.uuid;y in U&&(U[y].dispose(),delete U[y])}}}function yv(i,e,t){const n=t.isWebGL2;function s(){let G=!1;const De=new Zt;let we=null;const Oe=new Zt(0,0,0,0);return{setMask:function(Xe){we!==Xe&&!G&&(i.colorMask(Xe,Xe,Xe,Xe),we=Xe)},setLocked:function(Xe){G=Xe},setClear:function(Xe,tt,st,Ze,ot){ot===!0&&(Xe*=Ze,tt*=Ze,st*=Ze),De.set(Xe,tt,st,Ze),Oe.equals(De)===!1&&(i.clearColor(Xe,tt,st,Ze),Oe.copy(De))},reset:function(){G=!1,we=null,Oe.set(-1,0,0,0)}}}function r(){let G=!1,De=null,we=null,Oe=null;return{setTest:function(Xe){Xe?be(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(Xe){De!==Xe&&!G&&(i.depthMask(Xe),De=Xe)},setFunc:function(Xe){if(we!==Xe){switch(Xe){case jh:i.depthFunc(i.NEVER);break;case qh:i.depthFunc(i.ALWAYS);break;case Yh:i.depthFunc(i.LESS);break;case yr:i.depthFunc(i.LEQUAL);break;case Kh:i.depthFunc(i.EQUAL);break;case Zh:i.depthFunc(i.GEQUAL);break;case Jh:i.depthFunc(i.GREATER);break;case Qh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}we=Xe}},setLocked:function(Xe){G=Xe},setClear:function(Xe){Oe!==Xe&&(i.clearDepth(Xe),Oe=Xe)},reset:function(){G=!1,De=null,we=null,Oe=null}}}function o(){let G=!1,De=null,we=null,Oe=null,Xe=null,tt=null,st=null,Ze=null,ot=null;return{setTest:function(Je){G||(Je?be(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(Je){De!==Je&&!G&&(i.stencilMask(Je),De=Je)},setFunc:function(Je,at,ht){(we!==Je||Oe!==at||Xe!==ht)&&(i.stencilFunc(Je,at,ht),we=Je,Oe=at,Xe=ht)},setOp:function(Je,at,ht){(tt!==Je||st!==at||Ze!==ht)&&(i.stencilOp(Je,at,ht),tt=Je,st=at,Ze=ht)},setLocked:function(Je){G=Je},setClear:function(Je){ot!==Je&&(i.clearStencil(Je),ot=Je)},reset:function(){G=!1,De=null,we=null,Oe=null,Xe=null,tt=null,st=null,Ze=null,ot=null}}}const a=new s,c=new r,l=new o,u=new WeakMap,h=new WeakMap;let d={},g={},v=new WeakMap,m=[],_=null,p=!1,x=null,b=null,A=null,C=null,T=null,w=null,L=null,U=new bt(0,0,0),y=0,N=!1,K=null,$=null,O=null,j=null,W=null;const ee=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,se=0;const ue=i.getParameter(i.VERSION);ue.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(ue)[1]),te=se>=1):ue.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),te=se>=2);let le=null,ce={};const fe=i.getParameter(i.SCISSOR_BOX),B=i.getParameter(i.VIEWPORT),J=new Zt().fromArray(fe),oe=new Zt().fromArray(B);function D(G,De,we,Oe){const Xe=new Uint8Array(4),tt=i.createTexture();i.bindTexture(G,tt),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let st=0;st<we;st++)n&&(G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY)?i.texImage3D(De,0,i.RGBA,1,1,Oe,0,i.RGBA,i.UNSIGNED_BYTE,Xe):i.texImage2D(De+st,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Xe);return tt}const I={};I[i.TEXTURE_2D]=D(i.TEXTURE_2D,i.TEXTURE_2D,1),I[i.TEXTURE_CUBE_MAP]=D(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(I[i.TEXTURE_2D_ARRAY]=D(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),I[i.TEXTURE_3D]=D(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),be(i.DEPTH_TEST),c.setFunc(yr),_e(!1),k(Ga),be(i.CULL_FACE),ae(fi);function be(G){d[G]!==!0&&(i.enable(G),d[G]=!0)}function Se(G){d[G]!==!1&&(i.disable(G),d[G]=!1)}function Ce(G,De){return g[G]!==De?(i.bindFramebuffer(G,De),g[G]=De,n&&(G===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=De),G===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=De)),!0):!1}function q(G,De){let we=m,Oe=!1;if(G)if(we=v.get(De),we===void 0&&(we=[],v.set(De,we)),G.isWebGLMultipleRenderTargets){const Xe=G.texture;if(we.length!==Xe.length||we[0]!==i.COLOR_ATTACHMENT0){for(let tt=0,st=Xe.length;tt<st;tt++)we[tt]=i.COLOR_ATTACHMENT0+tt;we.length=Xe.length,Oe=!0}}else we[0]!==i.COLOR_ATTACHMENT0&&(we[0]=i.COLOR_ATTACHMENT0,Oe=!0);else we[0]!==i.BACK&&(we[0]=i.BACK,Oe=!0);Oe&&(t.isWebGL2?i.drawBuffers(we):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(we))}function Ae(G){return _!==G?(i.useProgram(G),_=G,!0):!1}const ye={[yi]:i.FUNC_ADD,[Lh]:i.FUNC_SUBTRACT,[Dh]:i.FUNC_REVERSE_SUBTRACT};if(n)ye[qa]=i.MIN,ye[Ya]=i.MAX;else{const G=e.get("EXT_blend_minmax");G!==null&&(ye[qa]=G.MIN_EXT,ye[Ya]=G.MAX_EXT)}const Ne={[Ih]:i.ZERO,[Nh]:i.ONE,[Uh]:i.SRC_COLOR,[wo]:i.SRC_ALPHA,[Vh]:i.SRC_ALPHA_SATURATE,[Bh]:i.DST_COLOR,[Oh]:i.DST_ALPHA,[Fh]:i.ONE_MINUS_SRC_COLOR,[Ao]:i.ONE_MINUS_SRC_ALPHA,[zh]:i.ONE_MINUS_DST_COLOR,[kh]:i.ONE_MINUS_DST_ALPHA,[Hh]:i.CONSTANT_COLOR,[Gh]:i.ONE_MINUS_CONSTANT_COLOR,[Wh]:i.CONSTANT_ALPHA,[Xh]:i.ONE_MINUS_CONSTANT_ALPHA};function ae(G,De,we,Oe,Xe,tt,st,Ze,ot,Je){if(G===fi){p===!0&&(Se(i.BLEND),p=!1);return}if(p===!1&&(be(i.BLEND),p=!0),G!==Ph){if(G!==x||Je!==N){if((b!==yi||T!==yi)&&(i.blendEquation(i.FUNC_ADD),b=yi,T=yi),Je)switch(G){case os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wa:i.blendFunc(i.ONE,i.ONE);break;case Xa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ja:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Xa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ja:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}A=null,C=null,w=null,L=null,U.set(0,0,0),y=0,x=G,N=Je}return}Xe=Xe||De,tt=tt||we,st=st||Oe,(De!==b||Xe!==T)&&(i.blendEquationSeparate(ye[De],ye[Xe]),b=De,T=Xe),(we!==A||Oe!==C||tt!==w||st!==L)&&(i.blendFuncSeparate(Ne[we],Ne[Oe],Ne[tt],Ne[st]),A=we,C=Oe,w=tt,L=st),(Ze.equals(U)===!1||ot!==y)&&(i.blendColor(Ze.r,Ze.g,Ze.b,ot),U.copy(Ze),y=ot),x=G,N=!1}function ie(G,De){G.side===cn?Se(i.CULL_FACE):be(i.CULL_FACE);let we=G.side===Mn;De&&(we=!we),_e(we),G.blending===os&&G.transparent===!1?ae(fi):ae(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),a.setMask(G.colorWrite);const Oe=G.stencilWrite;l.setTest(Oe),Oe&&(l.setMask(G.stencilWriteMask),l.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),l.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ve(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?be(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function _e(G){K!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),K=G)}function k(G){G!==Ah?(be(i.CULL_FACE),G!==$&&(G===Ga?i.cullFace(i.BACK):G===Ch?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),$=G}function P(G){G!==O&&(te&&i.lineWidth(G),O=G)}function ve(G,De,we){G?(be(i.POLYGON_OFFSET_FILL),(j!==De||W!==we)&&(i.polygonOffset(De,we),j=De,W=we)):Se(i.POLYGON_OFFSET_FILL)}function Te(G){G?be(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function X(G){G===void 0&&(G=i.TEXTURE0+ee-1),le!==G&&(i.activeTexture(G),le=G)}function H(G,De,we){we===void 0&&(le===null?we=i.TEXTURE0+ee-1:we=le);let Oe=ce[we];Oe===void 0&&(Oe={type:void 0,texture:void 0},ce[we]=Oe),(Oe.type!==G||Oe.texture!==De)&&(le!==we&&(i.activeTexture(we),le=we),i.bindTexture(G,De||I[G]),Oe.type=G,Oe.texture=De)}function Y(){const G=ce[le];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function he(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function re(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Re(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ye(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Le(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ke(G){J.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),J.copy(G))}function Z(G){oe.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),oe.copy(G))}function Be(G,De){let we=h.get(De);we===void 0&&(we=new WeakMap,h.set(De,we));let Oe=we.get(G);Oe===void 0&&(Oe=i.getUniformBlockIndex(De,G.name),we.set(G,Oe))}function qe(G,De){const Oe=h.get(De).get(G);u.get(De)!==Oe&&(i.uniformBlockBinding(De,Oe,G.__bindingPointIndex),u.set(De,Oe))}function He(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},le=null,ce={},g={},v=new WeakMap,m=[],_=null,p=!1,x=null,b=null,A=null,C=null,T=null,w=null,L=null,U=new bt(0,0,0),y=0,N=!1,K=null,$=null,O=null,j=null,W=null,J.set(0,0,i.canvas.width,i.canvas.height),oe.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:be,disable:Se,bindFramebuffer:Ce,drawBuffers:q,useProgram:Ae,setBlending:ae,setMaterial:ie,setFlipSided:_e,setCullFace:k,setLineWidth:P,setPolygonOffset:ve,setScissorTest:Te,activeTexture:X,bindTexture:H,unbindTexture:Y,compressedTexImage2D:he,compressedTexImage3D:Q,texImage2D:Fe,texImage3D:Le,updateUBOMapping:Be,uniformBlockBinding:qe,texStorage2D:Re,texStorage3D:Ye,texSubImage2D:re,texSubImage3D:Me,compressedTexSubImage2D:Ee,compressedTexSubImage3D:xe,scissor:ke,viewport:Z,reset:He}}function Tv(i,e,t,n,s,r,o){const a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(k,P){return g?new OffscreenCanvas(k,P):Rr("canvas")}function m(k,P,ve,Te){let X=1;if((k.width>Te||k.height>Te)&&(X=Te/Math.max(k.width,k.height)),X<1||P===!0)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap){const H=P?No:Math.floor,Y=H(X*k.width),he=H(X*k.height);h===void 0&&(h=v(Y,he));const Q=ve?v(Y,he):h;return Q.width=Y,Q.height=he,Q.getContext("2d").drawImage(k,0,0,Y,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+Y+"x"+he+")."),Q}else return"data"in k&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),k;return k}function _(k){return yl(k.width)&&yl(k.height)}function p(k){return a?!1:k.wrapS!==Fn||k.wrapT!==Fn||k.minFilter!==ln&&k.minFilter!==gn}function x(k,P){return k.generateMipmaps&&P&&k.minFilter!==ln&&k.minFilter!==gn}function b(k){i.generateMipmap(k)}function A(k,P,ve,Te,X=!1){if(a===!1)return P;if(k!==null){if(i[k]!==void 0)return i[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let H=P;if(P===i.RED&&(ve===i.FLOAT&&(H=i.R32F),ve===i.HALF_FLOAT&&(H=i.R16F),ve===i.UNSIGNED_BYTE&&(H=i.R8)),P===i.RED_INTEGER&&(ve===i.UNSIGNED_BYTE&&(H=i.R8UI),ve===i.UNSIGNED_SHORT&&(H=i.R16UI),ve===i.UNSIGNED_INT&&(H=i.R32UI),ve===i.BYTE&&(H=i.R8I),ve===i.SHORT&&(H=i.R16I),ve===i.INT&&(H=i.R32I)),P===i.RG&&(ve===i.FLOAT&&(H=i.RG32F),ve===i.HALF_FLOAT&&(H=i.RG16F),ve===i.UNSIGNED_BYTE&&(H=i.RG8)),P===i.RGBA){const Y=X?Tr:Rt.getTransfer(Te);ve===i.FLOAT&&(H=i.RGBA32F),ve===i.HALF_FLOAT&&(H=i.RGBA16F),ve===i.UNSIGNED_BYTE&&(H=Y===Nt?i.SRGB8_ALPHA8:i.RGBA8),ve===i.UNSIGNED_SHORT_4_4_4_4&&(H=i.RGBA4),ve===i.UNSIGNED_SHORT_5_5_5_1&&(H=i.RGB5_A1)}return(H===i.R16F||H===i.R32F||H===i.RG16F||H===i.RG32F||H===i.RGBA16F||H===i.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function C(k,P,ve){return x(k,ve)===!0||k.isFramebufferTexture&&k.minFilter!==ln&&k.minFilter!==gn?Math.log2(Math.max(P.width,P.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?P.mipmaps.length:1}function T(k){return k===ln||k===Ka||k===xs?i.NEAREST:i.LINEAR}function w(k){const P=k.target;P.removeEventListener("dispose",w),U(P),P.isVideoTexture&&u.delete(P)}function L(k){const P=k.target;P.removeEventListener("dispose",L),N(P)}function U(k){const P=n.get(k);if(P.__webglInit===void 0)return;const ve=k.source,Te=d.get(ve);if(Te){const X=Te[P.__cacheKey];X.usedTimes--,X.usedTimes===0&&y(k),Object.keys(Te).length===0&&d.delete(ve)}n.remove(k)}function y(k){const P=n.get(k);i.deleteTexture(P.__webglTexture);const ve=k.source,Te=d.get(ve);delete Te[P.__cacheKey],o.memory.textures--}function N(k){const P=k.texture,ve=n.get(k),Te=n.get(P);if(Te.__webglTexture!==void 0&&(i.deleteTexture(Te.__webglTexture),o.memory.textures--),k.depthTexture&&k.depthTexture.dispose(),k.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(ve.__webglFramebuffer[X]))for(let H=0;H<ve.__webglFramebuffer[X].length;H++)i.deleteFramebuffer(ve.__webglFramebuffer[X][H]);else i.deleteFramebuffer(ve.__webglFramebuffer[X]);ve.__webglDepthbuffer&&i.deleteRenderbuffer(ve.__webglDepthbuffer[X])}else{if(Array.isArray(ve.__webglFramebuffer))for(let X=0;X<ve.__webglFramebuffer.length;X++)i.deleteFramebuffer(ve.__webglFramebuffer[X]);else i.deleteFramebuffer(ve.__webglFramebuffer);if(ve.__webglDepthbuffer&&i.deleteRenderbuffer(ve.__webglDepthbuffer),ve.__webglMultisampledFramebuffer&&i.deleteFramebuffer(ve.__webglMultisampledFramebuffer),ve.__webglColorRenderbuffer)for(let X=0;X<ve.__webglColorRenderbuffer.length;X++)ve.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(ve.__webglColorRenderbuffer[X]);ve.__webglDepthRenderbuffer&&i.deleteRenderbuffer(ve.__webglDepthRenderbuffer)}if(k.isWebGLMultipleRenderTargets)for(let X=0,H=P.length;X<H;X++){const Y=n.get(P[X]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(P[X])}n.remove(P),n.remove(k)}let K=0;function $(){K=0}function O(){const k=K;return k>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+s.maxTextures),K+=1,k}function j(k){const P=[];return P.push(k.wrapS),P.push(k.wrapT),P.push(k.wrapR||0),P.push(k.magFilter),P.push(k.minFilter),P.push(k.anisotropy),P.push(k.internalFormat),P.push(k.format),P.push(k.type),P.push(k.generateMipmaps),P.push(k.premultiplyAlpha),P.push(k.flipY),P.push(k.unpackAlignment),P.push(k.colorSpace),P.join()}function W(k,P){const ve=n.get(k);if(k.isVideoTexture&&ie(k),k.isRenderTargetTexture===!1&&k.version>0&&ve.__version!==k.version){const Te=k.image;if(Te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(ve,k,P);return}}t.bindTexture(i.TEXTURE_2D,ve.__webglTexture,i.TEXTURE0+P)}function ee(k,P){const ve=n.get(k);if(k.version>0&&ve.__version!==k.version){J(ve,k,P);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ve.__webglTexture,i.TEXTURE0+P)}function te(k,P){const ve=n.get(k);if(k.version>0&&ve.__version!==k.version){J(ve,k,P);return}t.bindTexture(i.TEXTURE_3D,ve.__webglTexture,i.TEXTURE0+P)}function se(k,P){const ve=n.get(k);if(k.version>0&&ve.__version!==k.version){oe(ve,k,P);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ve.__webglTexture,i.TEXTURE0+P)}const ue={[Po]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[Lo]:i.MIRRORED_REPEAT},le={[ln]:i.NEAREST,[Ka]:i.NEAREST_MIPMAP_NEAREST,[xs]:i.NEAREST_MIPMAP_LINEAR,[gn]:i.LINEAR,[Hr]:i.LINEAR_MIPMAP_NEAREST,[wi]:i.LINEAR_MIPMAP_LINEAR},ce={[vd]:i.NEVER,[yd]:i.ALWAYS,[bd]:i.LESS,[Uf]:i.LEQUAL,[xd]:i.EQUAL,[Sd]:i.GEQUAL,[Ed]:i.GREATER,[Md]:i.NOTEQUAL};function fe(k,P,ve){if(P.type===$n&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===gn||P.magFilter===Hr||P.magFilter===xs||P.magFilter===wi||P.minFilter===gn||P.minFilter===Hr||P.minFilter===xs||P.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),ve?(i.texParameteri(k,i.TEXTURE_WRAP_S,ue[P.wrapS]),i.texParameteri(k,i.TEXTURE_WRAP_T,ue[P.wrapT]),(k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY)&&i.texParameteri(k,i.TEXTURE_WRAP_R,ue[P.wrapR]),i.texParameteri(k,i.TEXTURE_MAG_FILTER,le[P.magFilter]),i.texParameteri(k,i.TEXTURE_MIN_FILTER,le[P.minFilter])):(i.texParameteri(k,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(k,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY)&&i.texParameteri(k,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(P.wrapS!==Fn||P.wrapT!==Fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(k,i.TEXTURE_MAG_FILTER,T(P.magFilter)),i.texParameteri(k,i.TEXTURE_MIN_FILTER,T(P.minFilter)),P.minFilter!==ln&&P.minFilter!==gn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),P.compareFunction&&(i.texParameteri(k,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(k,i.TEXTURE_COMPARE_FUNC,ce[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Te=e.get("EXT_texture_filter_anisotropic");if(P.magFilter===ln||P.minFilter!==xs&&P.minFilter!==wi||P.type===$n&&e.has("OES_texture_float_linear")===!1||a===!1&&P.type===Ns&&e.has("OES_texture_half_float_linear")===!1)return;(P.anisotropy>1||n.get(P).__currentAnisotropy)&&(i.texParameterf(k,Te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,s.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy)}}function B(k,P){let ve=!1;k.__webglInit===void 0&&(k.__webglInit=!0,P.addEventListener("dispose",w));const Te=P.source;let X=d.get(Te);X===void 0&&(X={},d.set(Te,X));const H=j(P);if(H!==k.__cacheKey){X[H]===void 0&&(X[H]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,ve=!0),X[H].usedTimes++;const Y=X[k.__cacheKey];Y!==void 0&&(X[k.__cacheKey].usedTimes--,Y.usedTimes===0&&y(P)),k.__cacheKey=H,k.__webglTexture=X[H].texture}return ve}function J(k,P,ve){let Te=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(Te=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(Te=i.TEXTURE_3D);const X=B(k,P),H=P.source;t.bindTexture(Te,k.__webglTexture,i.TEXTURE0+ve);const Y=n.get(H);if(H.version!==Y.__version||X===!0){t.activeTexture(i.TEXTURE0+ve);const he=Rt.getPrimaries(Rt.workingColorSpace),Q=P.colorSpace===Ln?null:Rt.getPrimaries(P.colorSpace),re=P.colorSpace===Ln||he===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const Me=p(P)&&_(P.image)===!1;let Ee=m(P.image,Me,!1,s.maxTextureSize);Ee=_e(P,Ee);const xe=_(Ee)||a,Re=r.convert(P.format,P.colorSpace);let Ye=r.convert(P.type),Fe=A(P.internalFormat,Re,Ye,P.colorSpace,P.isVideoTexture);fe(Te,P,xe);let Le;const ke=P.mipmaps,Z=a&&P.isVideoTexture!==!0&&Fe!==Df,Be=Y.__version===void 0||X===!0,qe=H.dataReady,He=C(P,Ee,xe);if(P.isDepthTexture)Fe=i.DEPTH_COMPONENT,a?P.type===$n?Fe=i.DEPTH_COMPONENT32F:P.type===ui?Fe=i.DEPTH_COMPONENT24:P.type===Ai?Fe=i.DEPTH24_STENCIL8:Fe=i.DEPTH_COMPONENT16:P.type===$n&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),P.format===Ci&&Fe===i.DEPTH_COMPONENT&&P.type!==ko&&P.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),P.type=ui,Ye=r.convert(P.type)),P.format===ds&&Fe===i.DEPTH_COMPONENT&&(Fe=i.DEPTH_STENCIL,P.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),P.type=Ai,Ye=r.convert(P.type))),Be&&(Z?t.texStorage2D(i.TEXTURE_2D,1,Fe,Ee.width,Ee.height):t.texImage2D(i.TEXTURE_2D,0,Fe,Ee.width,Ee.height,0,Re,Ye,null));else if(P.isDataTexture)if(ke.length>0&&xe){Z&&Be&&t.texStorage2D(i.TEXTURE_2D,He,Fe,ke[0].width,ke[0].height);for(let G=0,De=ke.length;G<De;G++)Le=ke[G],Z?qe&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,Le.width,Le.height,Re,Ye,Le.data):t.texImage2D(i.TEXTURE_2D,G,Fe,Le.width,Le.height,0,Re,Ye,Le.data);P.generateMipmaps=!1}else Z?(Be&&t.texStorage2D(i.TEXTURE_2D,He,Fe,Ee.width,Ee.height),qe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Re,Ye,Ee.data)):t.texImage2D(i.TEXTURE_2D,0,Fe,Ee.width,Ee.height,0,Re,Ye,Ee.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){Z&&Be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,He,Fe,ke[0].width,ke[0].height,Ee.depth);for(let G=0,De=ke.length;G<De;G++)Le=ke[G],P.format!==On?Re!==null?Z?qe&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,Le.width,Le.height,Ee.depth,Re,Le.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,Fe,Le.width,Le.height,Ee.depth,0,Le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Z?qe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,Le.width,Le.height,Ee.depth,Re,Ye,Le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,G,Fe,Le.width,Le.height,Ee.depth,0,Re,Ye,Le.data)}else{Z&&Be&&t.texStorage2D(i.TEXTURE_2D,He,Fe,ke[0].width,ke[0].height);for(let G=0,De=ke.length;G<De;G++)Le=ke[G],P.format!==On?Re!==null?Z?qe&&t.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,Le.width,Le.height,Re,Le.data):t.compressedTexImage2D(i.TEXTURE_2D,G,Fe,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Z?qe&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,Le.width,Le.height,Re,Ye,Le.data):t.texImage2D(i.TEXTURE_2D,G,Fe,Le.width,Le.height,0,Re,Ye,Le.data)}else if(P.isDataArrayTexture)Z?(Be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,He,Fe,Ee.width,Ee.height,Ee.depth),qe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Re,Ye,Ee.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,Ee.width,Ee.height,Ee.depth,0,Re,Ye,Ee.data);else if(P.isData3DTexture)Z?(Be&&t.texStorage3D(i.TEXTURE_3D,He,Fe,Ee.width,Ee.height,Ee.depth),qe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Re,Ye,Ee.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,Ee.width,Ee.height,Ee.depth,0,Re,Ye,Ee.data);else if(P.isFramebufferTexture){if(Be)if(Z)t.texStorage2D(i.TEXTURE_2D,He,Fe,Ee.width,Ee.height);else{let G=Ee.width,De=Ee.height;for(let we=0;we<He;we++)t.texImage2D(i.TEXTURE_2D,we,Fe,G,De,0,Re,Ye,null),G>>=1,De>>=1}}else if(ke.length>0&&xe){Z&&Be&&t.texStorage2D(i.TEXTURE_2D,He,Fe,ke[0].width,ke[0].height);for(let G=0,De=ke.length;G<De;G++)Le=ke[G],Z?qe&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,Re,Ye,Le):t.texImage2D(i.TEXTURE_2D,G,Fe,Re,Ye,Le);P.generateMipmaps=!1}else Z?(Be&&t.texStorage2D(i.TEXTURE_2D,He,Fe,Ee.width,Ee.height),qe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Re,Ye,Ee)):t.texImage2D(i.TEXTURE_2D,0,Fe,Re,Ye,Ee);x(P,xe)&&b(Te),Y.__version=H.version,P.onUpdate&&P.onUpdate(P)}k.__version=P.version}function oe(k,P,ve){if(P.image.length!==6)return;const Te=B(k,P),X=P.source;t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+ve);const H=n.get(X);if(X.version!==H.__version||Te===!0){t.activeTexture(i.TEXTURE0+ve);const Y=Rt.getPrimaries(Rt.workingColorSpace),he=P.colorSpace===Ln?null:Rt.getPrimaries(P.colorSpace),Q=P.colorSpace===Ln||Y===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const re=P.isCompressedTexture||P.image[0].isCompressedTexture,Me=P.image[0]&&P.image[0].isDataTexture,Ee=[];for(let G=0;G<6;G++)!re&&!Me?Ee[G]=m(P.image[G],!1,!0,s.maxCubemapSize):Ee[G]=Me?P.image[G].image:P.image[G],Ee[G]=_e(P,Ee[G]);const xe=Ee[0],Re=_(xe)||a,Ye=r.convert(P.format,P.colorSpace),Fe=r.convert(P.type),Le=A(P.internalFormat,Ye,Fe,P.colorSpace),ke=a&&P.isVideoTexture!==!0,Z=H.__version===void 0||Te===!0,Be=X.dataReady;let qe=C(P,xe,Re);fe(i.TEXTURE_CUBE_MAP,P,Re);let He;if(re){ke&&Z&&t.texStorage2D(i.TEXTURE_CUBE_MAP,qe,Le,xe.width,xe.height);for(let G=0;G<6;G++){He=Ee[G].mipmaps;for(let De=0;De<He.length;De++){const we=He[De];P.format!==On?Ye!==null?ke?Be&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,De,0,0,we.width,we.height,Ye,we.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,De,Le,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?Be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,De,0,0,we.width,we.height,Ye,Fe,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,De,Le,we.width,we.height,0,Ye,Fe,we.data)}}}else{He=P.mipmaps,ke&&Z&&(He.length>0&&qe++,t.texStorage2D(i.TEXTURE_CUBE_MAP,qe,Le,Ee[0].width,Ee[0].height));for(let G=0;G<6;G++)if(Me){ke?Be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Ee[G].width,Ee[G].height,Ye,Fe,Ee[G].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Le,Ee[G].width,Ee[G].height,0,Ye,Fe,Ee[G].data);for(let De=0;De<He.length;De++){const Oe=He[De].image[G].image;ke?Be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,De+1,0,0,Oe.width,Oe.height,Ye,Fe,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,De+1,Le,Oe.width,Oe.height,0,Ye,Fe,Oe.data)}}else{ke?Be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Ye,Fe,Ee[G]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Le,Ye,Fe,Ee[G]);for(let De=0;De<He.length;De++){const we=He[De];ke?Be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,De+1,0,0,Ye,Fe,we.image[G]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,De+1,Le,Ye,Fe,we.image[G])}}}x(P,Re)&&b(i.TEXTURE_CUBE_MAP),H.__version=X.version,P.onUpdate&&P.onUpdate(P)}k.__version=P.version}function D(k,P,ve,Te,X,H){const Y=r.convert(ve.format,ve.colorSpace),he=r.convert(ve.type),Q=A(ve.internalFormat,Y,he,ve.colorSpace);if(!n.get(P).__hasExternalTextures){const Me=Math.max(1,P.width>>H),Ee=Math.max(1,P.height>>H);X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?t.texImage3D(X,H,Q,Me,Ee,P.depth,0,Y,he,null):t.texImage2D(X,H,Q,Me,Ee,0,Y,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,k),ae(P)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Te,X,n.get(ve).__webglTexture,0,Ne(P)):(X===i.TEXTURE_2D||X>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Te,X,n.get(ve).__webglTexture,H),t.bindFramebuffer(i.FRAMEBUFFER,null)}function I(k,P,ve){if(i.bindRenderbuffer(i.RENDERBUFFER,k),P.depthBuffer&&!P.stencilBuffer){let Te=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(ve||ae(P)){const X=P.depthTexture;X&&X.isDepthTexture&&(X.type===$n?Te=i.DEPTH_COMPONENT32F:X.type===ui&&(Te=i.DEPTH_COMPONENT24));const H=Ne(P);ae(P)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,H,Te,P.width,P.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,H,Te,P.width,P.height)}else i.renderbufferStorage(i.RENDERBUFFER,Te,P.width,P.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,k)}else if(P.depthBuffer&&P.stencilBuffer){const Te=Ne(P);ve&&ae(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,i.DEPTH24_STENCIL8,P.width,P.height):ae(P)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,i.DEPTH24_STENCIL8,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,k)}else{const Te=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let X=0;X<Te.length;X++){const H=Te[X],Y=r.convert(H.format,H.colorSpace),he=r.convert(H.type),Q=A(H.internalFormat,Y,he,H.colorSpace),re=Ne(P);ve&&ae(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,Q,P.width,P.height):ae(P)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,Q,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,Q,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(k,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,k),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),W(P.depthTexture,0);const Te=n.get(P.depthTexture).__webglTexture,X=Ne(P);if(P.depthTexture.format===Ci)ae(P)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Te,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Te,0);else if(P.depthTexture.format===ds)ae(P)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Te,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Te,0);else throw new Error("Unknown depthTexture format")}function Se(k){const P=n.get(k),ve=k.isWebGLCubeRenderTarget===!0;if(k.depthTexture&&!P.__autoAllocateDepthBuffer){if(ve)throw new Error("target.depthTexture not supported in Cube render targets");be(P.__webglFramebuffer,k)}else if(ve){P.__webglDepthbuffer=[];for(let Te=0;Te<6;Te++)t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[Te]),P.__webglDepthbuffer[Te]=i.createRenderbuffer(),I(P.__webglDepthbuffer[Te],k,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer=i.createRenderbuffer(),I(P.__webglDepthbuffer,k,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(k,P,ve){const Te=n.get(k);P!==void 0&&D(Te.__webglFramebuffer,k,k.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ve!==void 0&&Se(k)}function q(k){const P=k.texture,ve=n.get(k),Te=n.get(P);k.addEventListener("dispose",L),k.isWebGLMultipleRenderTargets!==!0&&(Te.__webglTexture===void 0&&(Te.__webglTexture=i.createTexture()),Te.__version=P.version,o.memory.textures++);const X=k.isWebGLCubeRenderTarget===!0,H=k.isWebGLMultipleRenderTargets===!0,Y=_(k)||a;if(X){ve.__webglFramebuffer=[];for(let he=0;he<6;he++)if(a&&P.mipmaps&&P.mipmaps.length>0){ve.__webglFramebuffer[he]=[];for(let Q=0;Q<P.mipmaps.length;Q++)ve.__webglFramebuffer[he][Q]=i.createFramebuffer()}else ve.__webglFramebuffer[he]=i.createFramebuffer()}else{if(a&&P.mipmaps&&P.mipmaps.length>0){ve.__webglFramebuffer=[];for(let he=0;he<P.mipmaps.length;he++)ve.__webglFramebuffer[he]=i.createFramebuffer()}else ve.__webglFramebuffer=i.createFramebuffer();if(H)if(s.drawBuffers){const he=k.texture;for(let Q=0,re=he.length;Q<re;Q++){const Me=n.get(he[Q]);Me.__webglTexture===void 0&&(Me.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&k.samples>0&&ae(k)===!1){const he=H?P:[P];ve.__webglMultisampledFramebuffer=i.createFramebuffer(),ve.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer);for(let Q=0;Q<he.length;Q++){const re=he[Q];ve.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ve.__webglColorRenderbuffer[Q]);const Me=r.convert(re.format,re.colorSpace),Ee=r.convert(re.type),xe=A(re.internalFormat,Me,Ee,re.colorSpace,k.isXRRenderTarget===!0),Re=Ne(k);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,xe,k.width,k.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),k.depthBuffer&&(ve.__webglDepthRenderbuffer=i.createRenderbuffer(),I(ve.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,Te.__webglTexture),fe(i.TEXTURE_CUBE_MAP,P,Y);for(let he=0;he<6;he++)if(a&&P.mipmaps&&P.mipmaps.length>0)for(let Q=0;Q<P.mipmaps.length;Q++)D(ve.__webglFramebuffer[he][Q],k,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Q);else D(ve.__webglFramebuffer[he],k,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);x(P,Y)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(H){const he=k.texture;for(let Q=0,re=he.length;Q<re;Q++){const Me=he[Q],Ee=n.get(Me);t.bindTexture(i.TEXTURE_2D,Ee.__webglTexture),fe(i.TEXTURE_2D,Me,Y),D(ve.__webglFramebuffer,k,Me,i.COLOR_ATTACHMENT0+Q,i.TEXTURE_2D,0),x(Me,Y)&&b(i.TEXTURE_2D)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(a?he=k.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,Te.__webglTexture),fe(he,P,Y),a&&P.mipmaps&&P.mipmaps.length>0)for(let Q=0;Q<P.mipmaps.length;Q++)D(ve.__webglFramebuffer[Q],k,P,i.COLOR_ATTACHMENT0,he,Q);else D(ve.__webglFramebuffer,k,P,i.COLOR_ATTACHMENT0,he,0);x(P,Y)&&b(he),t.unbindTexture()}k.depthBuffer&&Se(k)}function Ae(k){const P=_(k)||a,ve=k.isWebGLMultipleRenderTargets===!0?k.texture:[k.texture];for(let Te=0,X=ve.length;Te<X;Te++){const H=ve[Te];if(x(H,P)){const Y=k.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,he=n.get(H).__webglTexture;t.bindTexture(Y,he),b(Y),t.unbindTexture()}}}function ye(k){if(a&&k.samples>0&&ae(k)===!1){const P=k.isWebGLMultipleRenderTargets?k.texture:[k.texture],ve=k.width,Te=k.height;let X=i.COLOR_BUFFER_BIT;const H=[],Y=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(k),Q=k.isWebGLMultipleRenderTargets===!0;if(Q)for(let re=0;re<P.length;re++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let re=0;re<P.length;re++){H.push(i.COLOR_ATTACHMENT0+re),k.depthBuffer&&H.push(Y);const Me=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Me===!1&&(k.depthBuffer&&(X|=i.DEPTH_BUFFER_BIT),k.stencilBuffer&&(X|=i.STENCIL_BUFFER_BIT)),Q&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[re]),Me===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Y]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Y])),Q){const Ee=n.get(P[re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ee,0)}i.blitFramebuffer(0,0,ve,Te,0,0,ve,Te,X,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,H)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let re=0;re<P.length;re++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,he.__webglColorRenderbuffer[re]);const Me=n.get(P[re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,Me,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function Ne(k){return Math.min(s.maxSamples,k.samples)}function ae(k){const P=n.get(k);return a&&k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function ie(k){const P=o.render.frame;u.get(k)!==P&&(u.set(k,P),k.update())}function _e(k,P){const ve=k.colorSpace,Te=k.format,X=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||k.format===Do||ve!==ii&&ve!==Ln&&(Rt.getTransfer(ve)===Nt?a===!1?e.has("EXT_sRGB")===!0&&Te===On?(k.format=Do,k.minFilter=gn,k.generateMipmaps=!1):P=Of.sRGBToLinear(P):(Te!==On||X!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ve)),P}this.allocateTextureUnit=O,this.resetTextureUnits=$,this.setTexture2D=W,this.setTexture2DArray=ee,this.setTexture3D=te,this.setTextureCube=se,this.rebindTextures=Ce,this.setupRenderTarget=q,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=D,this.useMultisampledRTT=ae}function wv(i,e,t){const n=t.isWebGL2;function s(r,o=Ln){let a;const c=Rt.getTransfer(o);if(r===di)return i.UNSIGNED_BYTE;if(r===Af)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Cf)return i.UNSIGNED_SHORT_5_5_5_1;if(r===ad)return i.BYTE;if(r===ld)return i.SHORT;if(r===ko)return i.UNSIGNED_SHORT;if(r===wf)return i.INT;if(r===ui)return i.UNSIGNED_INT;if(r===$n)return i.FLOAT;if(r===Ns)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===cd)return i.ALPHA;if(r===On)return i.RGBA;if(r===ud)return i.LUMINANCE;if(r===fd)return i.LUMINANCE_ALPHA;if(r===Ci)return i.DEPTH_COMPONENT;if(r===ds)return i.DEPTH_STENCIL;if(r===Do)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===hd)return i.RED;if(r===Rf)return i.RED_INTEGER;if(r===dd)return i.RG;if(r===Pf)return i.RG_INTEGER;if(r===Lf)return i.RGBA_INTEGER;if(r===Gr||r===Wr||r===Xr||r===jr)if(c===Nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Gr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Wr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Xr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===jr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Gr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Wr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Xr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===jr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Za||r===Ja||r===Qa||r===$a)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Za)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ja)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Qa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$a)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Df)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===el||r===tl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===el)return c===Nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===tl)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===nl||r===il||r===sl||r===rl||r===ol||r===al||r===ll||r===cl||r===ul||r===fl||r===hl||r===dl||r===pl||r===ml)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===nl)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===il)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===sl)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===rl)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ol)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===al)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ll)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===cl)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ul)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===fl)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hl)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===dl)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===pl)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ml)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===qr||r===_l||r===gl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===qr)return c===Nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===_l)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===gl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===pd||r===vl||r===bl||r===xl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===qr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===vl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===xl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ai?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class Av extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class rs extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cv={type:"move"};class vo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const m of e.hand.values()){const _=t.getJointPose(m,n),p=this._getHandJoint(l,m);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),g=.02,v=.005;l.inputState.pinching&&d>g+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=g-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cv)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new rs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Rv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pv=`
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

}`;class Lv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new rn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,s=new mi({extensions:{fragDepth:!0},vertexShader:Rv,fragmentShader:Pv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Yt(new ms(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Dv extends Ii{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,g=null,v=null;const m=new Lv,_=t.getContextAttributes();let p=null,x=null;const b=[],A=[],C=new pt;let T=null;const w=new Pn;w.layers.enable(1),w.viewport=new Zt;const L=new Pn;L.layers.enable(2),L.viewport=new Zt;const U=[w,L],y=new Av;y.layers.enable(1),y.layers.enable(2);let N=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let J=b[B];return J===void 0&&(J=new vo,b[B]=J),J.getTargetRaySpace()},this.getControllerGrip=function(B){let J=b[B];return J===void 0&&(J=new vo,b[B]=J),J.getGripSpace()},this.getHand=function(B){let J=b[B];return J===void 0&&(J=new vo,b[B]=J),J.getHandSpace()};function $(B){const J=A.indexOf(B.inputSource);if(J===-1)return;const oe=b[J];oe!==void 0&&(oe.update(B.inputSource,B.frame,l||o),oe.dispatchEvent({type:B.type,data:B.inputSource}))}function O(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",j);for(let B=0;B<b.length;B++){const J=A[B];J!==null&&(A[B]=null,b[B].disconnect(J))}N=null,K=null,m.reset(),e.setRenderTarget(p),g=null,d=null,h=null,s=null,x=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",O),s.addEventListener("inputsourceschange",j),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,J),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),x=new Pi(g.framebufferWidth,g.framebufferHeight,{format:On,type:di,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let J=null,oe=null,D=null;_.depth&&(D=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=_.stencil?ds:Ci,oe=_.stencil?Ai:ui);const I={colorFormat:t.RGBA8,depthFormat:D,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(I),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Pi(d.textureWidth,d.textureHeight,{format:On,type:di,depthTexture:new Kf(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const be=e.properties.get(x);be.__ignoreDepthValues=d.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),fe.setContext(s),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function j(B){for(let J=0;J<B.removed.length;J++){const oe=B.removed[J],D=A.indexOf(oe);D>=0&&(A[D]=null,b[D].disconnect(oe))}for(let J=0;J<B.added.length;J++){const oe=B.added[J];let D=A.indexOf(oe);if(D===-1){for(let be=0;be<b.length;be++)if(be>=A.length){A.push(oe),D=be;break}else if(A[be]===null){A[be]=oe,D=be;break}if(D===-1)break}const I=b[D];I&&I.connect(oe)}}const W=new Ie,ee=new Ie;function te(B,J,oe){W.setFromMatrixPosition(J.matrixWorld),ee.setFromMatrixPosition(oe.matrixWorld);const D=W.distanceTo(ee),I=J.projectionMatrix.elements,be=oe.projectionMatrix.elements,Se=I[14]/(I[10]-1),Ce=I[14]/(I[10]+1),q=(I[9]+1)/I[5],Ae=(I[9]-1)/I[5],ye=(I[8]-1)/I[0],Ne=(be[8]+1)/be[0],ae=Se*ye,ie=Se*Ne,_e=D/(-ye+Ne),k=_e*-ye;J.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(k),B.translateZ(_e),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const P=Se+_e,ve=Ce+_e,Te=ae-k,X=ie+(D-k),H=q*Ce/ve*P,Y=Ae*Ce/ve*P;B.projectionMatrix.makePerspective(Te,X,H,Y,P,ve),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function se(B,J){J===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(J.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;m.texture!==null&&(B.near=m.depthNear,B.far=m.depthFar),y.near=L.near=w.near=B.near,y.far=L.far=w.far=B.far,(N!==y.near||K!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),N=y.near,K=y.far,w.near=N,w.far=K,L.near=N,L.far=K,w.updateProjectionMatrix(),L.updateProjectionMatrix(),B.updateProjectionMatrix());const J=B.parent,oe=y.cameras;se(y,J);for(let D=0;D<oe.length;D++)se(oe[D],J);oe.length===2?te(y,w,L):y.projectionMatrix.copy(w.projectionMatrix),ue(B,y,J)};function ue(B,J,oe){oe===null?B.matrix.copy(J.matrixWorld):(B.matrix.copy(oe.matrixWorld),B.matrix.invert(),B.matrix.multiply(J.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(J.projectionMatrix),B.projectionMatrixInverse.copy(J.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Io*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&g===null))return c},this.setFoveation=function(B){c=B,d!==null&&(d.fixedFoveation=B),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=B)},this.hasDepthSensing=function(){return m.texture!==null};let le=null;function ce(B,J){if(u=J.getViewerPose(l||o),v=J,u!==null){const oe=u.views;g!==null&&(e.setRenderTargetFramebuffer(x,g.framebuffer),e.setRenderTarget(x));let D=!1;oe.length!==y.cameras.length&&(y.cameras.length=0,D=!0);for(let be=0;be<oe.length;be++){const Se=oe[be];let Ce=null;if(g!==null)Ce=g.getViewport(Se);else{const Ae=h.getViewSubImage(d,Se);Ce=Ae.viewport,be===0&&(e.setRenderTargetTextures(x,Ae.colorTexture,d.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(x))}let q=U[be];q===void 0&&(q=new Pn,q.layers.enable(be),q.viewport=new Zt,U[be]=q),q.matrix.fromArray(Se.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(Se.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),be===0&&(y.matrix.copy(q.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),D===!0&&y.cameras.push(q)}const I=s.enabledFeatures;if(I&&I.includes("depth-sensing")){const be=h.getDepthInformation(oe[0]);be&&be.isValid&&be.texture&&m.init(e,be,s.renderState)}}for(let oe=0;oe<b.length;oe++){const D=A[oe],I=b[oe];D!==null&&I!==void 0&&I.update(D,J,l||o)}m.render(e,y),le&&le(B,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),v=null}const fe=new qf;fe.setAnimationLoop(ce),this.setAnimationLoop=function(B){le=B},this.dispose=function(){}}}function Iv(i,e){function t(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,Wf(i)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function s(_,p,x,b,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(_,p):p.isMeshToonMaterial?(r(_,p),h(_,p)):p.isMeshPhongMaterial?(r(_,p),u(_,p)):p.isMeshStandardMaterial?(r(_,p),d(_,p),p.isMeshPhysicalMaterial&&g(_,p,A)):p.isMeshMatcapMaterial?(r(_,p),v(_,p)):p.isMeshDepthMaterial?r(_,p):p.isMeshDistanceMaterial?(r(_,p),m(_,p)):p.isMeshNormalMaterial?r(_,p):p.isLineBasicMaterial?(o(_,p),p.isLineDashedMaterial&&a(_,p)):p.isPointsMaterial?c(_,p,x,b):p.isSpriteMaterial?l(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,t(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===Mn&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,t(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===Mn&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,t(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,t(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(_.envMap.value=x,_.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap){_.lightMap.value=p.lightMap;const b=i._useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=p.lightMapIntensity*b,t(p.lightMap,_.lightMapTransform)}p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,_.aoMapTransform))}function o(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform))}function a(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function c(_,p,x,b){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*x,_.scale.value=b*.5,p.map&&(_.map.value=p.map,t(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function l(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function h(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function d(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,_.roughnessMapTransform)),e.get(p).envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function g(_,p,x){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Mn&&_.clearcoatNormalScale.value.negate())),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=x.texture,_.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,p){p.matcap&&(_.matcap.value=p.matcap)}function m(_,p){const x=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(x.matrixWorld),_.nearDistance.value=x.shadow.camera.near,_.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Nv(i,e,t,n){let s={},r={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,b){const A=b.program;n.uniformBlockBinding(x,A)}function l(x,b){let A=s[x.id];A===void 0&&(v(x),A=u(x),s[x.id]=A,x.addEventListener("dispose",_));const C=b.program;n.updateUBOMapping(x,C);const T=e.render.frame;r[x.id]!==T&&(d(x),r[x.id]=T)}function u(x){const b=h();x.__bindingPointIndex=b;const A=i.createBuffer(),C=x.__size,T=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,A),A}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const b=s[x.id],A=x.uniforms,C=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let T=0,w=A.length;T<w;T++){const L=Array.isArray(A[T])?A[T]:[A[T]];for(let U=0,y=L.length;U<y;U++){const N=L[U];if(g(N,T,U,C)===!0){const K=N.__offset,$=Array.isArray(N.value)?N.value:[N.value];let O=0;for(let j=0;j<$.length;j++){const W=$[j],ee=m(W);typeof W=="number"||typeof W=="boolean"?(N.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,K+O,N.__data)):W.isMatrix3?(N.__data[0]=W.elements[0],N.__data[1]=W.elements[1],N.__data[2]=W.elements[2],N.__data[3]=0,N.__data[4]=W.elements[3],N.__data[5]=W.elements[4],N.__data[6]=W.elements[5],N.__data[7]=0,N.__data[8]=W.elements[6],N.__data[9]=W.elements[7],N.__data[10]=W.elements[8],N.__data[11]=0):(W.toArray(N.__data,O),O+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,K,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(x,b,A,C){const T=x.value,w=b+"_"+A;if(C[w]===void 0)return typeof T=="number"||typeof T=="boolean"?C[w]=T:C[w]=T.clone(),!0;{const L=C[w];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return C[w]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function v(x){const b=x.uniforms;let A=0;const C=16;for(let w=0,L=b.length;w<L;w++){const U=Array.isArray(b[w])?b[w]:[b[w]];for(let y=0,N=U.length;y<N;y++){const K=U[y],$=Array.isArray(K.value)?K.value:[K.value];for(let O=0,j=$.length;O<j;O++){const W=$[O],ee=m(W),te=A%C;te!==0&&C-te<ee.boundary&&(A+=C-te),K.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=A,A+=ee.storage}}}const T=A%C;return T>0&&(A+=C-T),x.__size=A,x.__cache={},this}function m(x){const b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),b}function _(x){const b=x.target;b.removeEventListener("dispose",_);const A=o.indexOf(b.__bindingPointIndex);o.splice(A,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class th{constructor(e={}){const{canvas:t=Ad(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,_=null;const p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qt,this._useLegacyLights=!1,this.toneMapping=hi,this.toneMappingExposure=1;const b=this;let A=!1,C=0,T=0,w=null,L=-1,U=null;const y=new Zt,N=new Zt;let K=null;const $=new bt(0);let O=0,j=t.width,W=t.height,ee=1,te=null,se=null;const ue=new Zt(0,0,j,W),le=new Zt(0,0,j,W);let ce=!1;const fe=new Vo;let B=!1,J=!1,oe=null;const D=new Ht,I=new pt,be=new Ie,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ce(){return w===null?ee:1}let q=n;function Ae(ne,Ue){for(let Ge=0;Ge<ne.length;Ge++){const je=ne[Ge],We=t.getContext(je,Ue);if(We!==null)return We}return null}try{const ne={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fo}`),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",G,!1),t.addEventListener("webglcontextcreationerror",De,!1),q===null){const Ue=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&Ue.shift(),q=Ae(Ue,ne),q===null)throw Ae(Ue)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(ne){throw console.error("THREE.WebGLRenderer: "+ne.message),ne}let ye,Ne,ae,ie,_e,k,P,ve,Te,X,H,Y,he,Q,re,Me,Ee,xe,Re,Ye,Fe,Le,ke,Z;function Be(){ye=new V_(q),Ne=new U_(q,ye,e),ye.init(Ne),Le=new wv(q,ye,Ne),ae=new yv(q,ye,Ne),ie=new W_(q),_e=new uv,k=new Tv(q,ye,ae,_e,Ne,Le,ie),P=new O_(b),ve=new z_(b),Te=new Qd(q,Ne),ke=new I_(q,ye,Te,Ne),X=new H_(q,Te,ie,ke),H=new Y_(q,X,Te,ie),Re=new q_(q,Ne,k),Me=new F_(_e),Y=new cv(b,P,ve,ye,Ne,ke,Me),he=new Iv(b,_e),Q=new hv,re=new vv(ye,Ne),xe=new D_(b,P,ve,ae,H,d,c),Ee=new Sv(b,H,Ne),Z=new Nv(q,ie,Ne,ae),Ye=new N_(q,ye,ie,Ne),Fe=new G_(q,ye,ie,Ne),ie.programs=Y.programs,b.capabilities=Ne,b.extensions=ye,b.properties=_e,b.renderLists=Q,b.shadowMap=Ee,b.state=ae,b.info=ie}Be();const qe=new Dv(b,q);this.xr=qe,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const ne=ye.get("WEBGL_lose_context");ne&&ne.loseContext()},this.forceContextRestore=function(){const ne=ye.get("WEBGL_lose_context");ne&&ne.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(ne){ne!==void 0&&(ee=ne,this.setSize(j,W,!1))},this.getSize=function(ne){return ne.set(j,W)},this.setSize=function(ne,Ue,Ge=!0){if(qe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=ne,W=Ue,t.width=Math.floor(ne*ee),t.height=Math.floor(Ue*ee),Ge===!0&&(t.style.width=ne+"px",t.style.height=Ue+"px"),this.setViewport(0,0,ne,Ue)},this.getDrawingBufferSize=function(ne){return ne.set(j*ee,W*ee).floor()},this.setDrawingBufferSize=function(ne,Ue,Ge){j=ne,W=Ue,ee=Ge,t.width=Math.floor(ne*Ge),t.height=Math.floor(Ue*Ge),this.setViewport(0,0,ne,Ue)},this.getCurrentViewport=function(ne){return ne.copy(y)},this.getViewport=function(ne){return ne.copy(ue)},this.setViewport=function(ne,Ue,Ge,je){ne.isVector4?ue.set(ne.x,ne.y,ne.z,ne.w):ue.set(ne,Ue,Ge,je),ae.viewport(y.copy(ue).multiplyScalar(ee).floor())},this.getScissor=function(ne){return ne.copy(le)},this.setScissor=function(ne,Ue,Ge,je){ne.isVector4?le.set(ne.x,ne.y,ne.z,ne.w):le.set(ne,Ue,Ge,je),ae.scissor(N.copy(le).multiplyScalar(ee).floor())},this.getScissorTest=function(){return ce},this.setScissorTest=function(ne){ae.setScissorTest(ce=ne)},this.setOpaqueSort=function(ne){te=ne},this.setTransparentSort=function(ne){se=ne},this.getClearColor=function(ne){return ne.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(ne=!0,Ue=!0,Ge=!0){let je=0;if(ne){let We=!1;if(w!==null){const rt=w.texture.format;We=rt===Lf||rt===Pf||rt===Rf}if(We){const rt=w.texture.type,lt=rt===di||rt===ui||rt===ko||rt===Ai||rt===Af||rt===Cf,ut=xe.getClearColor(),dt=xe.getClearAlpha(),xt=ut.r,_t=ut.g,gt=ut.b;lt?(g[0]=xt,g[1]=_t,g[2]=gt,g[3]=dt,q.clearBufferuiv(q.COLOR,0,g)):(v[0]=xt,v[1]=_t,v[2]=gt,v[3]=dt,q.clearBufferiv(q.COLOR,0,v))}else je|=q.COLOR_BUFFER_BIT}Ue&&(je|=q.DEPTH_BUFFER_BIT),Ge&&(je|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(je)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",G,!1),t.removeEventListener("webglcontextcreationerror",De,!1),Q.dispose(),re.dispose(),_e.dispose(),P.dispose(),ve.dispose(),H.dispose(),ke.dispose(),Z.dispose(),Y.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",ot),qe.removeEventListener("sessionend",Je),oe&&(oe.dispose(),oe=null),at.stop()};function He(ne){ne.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const ne=ie.autoReset,Ue=Ee.enabled,Ge=Ee.autoUpdate,je=Ee.needsUpdate,We=Ee.type;Be(),ie.autoReset=ne,Ee.enabled=Ue,Ee.autoUpdate=Ge,Ee.needsUpdate=je,Ee.type=We}function De(ne){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",ne.statusMessage)}function we(ne){const Ue=ne.target;Ue.removeEventListener("dispose",we),Oe(Ue)}function Oe(ne){Xe(ne),_e.remove(ne)}function Xe(ne){const Ue=_e.get(ne).programs;Ue!==void 0&&(Ue.forEach(function(Ge){Y.releaseProgram(Ge)}),ne.isShaderMaterial&&Y.releaseShaderCache(ne))}this.renderBufferDirect=function(ne,Ue,Ge,je,We,rt){Ue===null&&(Ue=Se);const lt=We.isMesh&&We.matrixWorld.determinant()<0,ut=on(ne,Ue,Ge,je,We);ae.setMaterial(je,lt);let dt=Ge.index,xt=1;if(je.wireframe===!0){if(dt=X.getWireframeAttribute(Ge),dt===void 0)return;xt=2}const _t=Ge.drawRange,gt=Ge.attributes.position;let zt=_t.start*xt,Sn=(_t.start+_t.count)*xt;rt!==null&&(zt=Math.max(zt,rt.start*xt),Sn=Math.min(Sn,(rt.start+rt.count)*xt)),dt!==null?(zt=Math.max(zt,0),Sn=Math.min(Sn,dt.count)):gt!=null&&(zt=Math.max(zt,0),Sn=Math.min(Sn,gt.count));const jt=Sn-zt;if(jt<0||jt===1/0)return;ke.setup(We,je,ut,Ge,dt);let Wn,Ft=Ye;if(dt!==null&&(Wn=Te.get(dt),Ft=Fe,Ft.setIndex(Wn)),We.isMesh)je.wireframe===!0?(ae.setLineWidth(je.wireframeLinewidth*Ce()),Ft.setMode(q.LINES)):Ft.setMode(q.TRIANGLES);else if(We.isLine){let Mt=je.linewidth;Mt===void 0&&(Mt=1),ae.setLineWidth(Mt*Ce()),We.isLineSegments?Ft.setMode(q.LINES):We.isLineLoop?Ft.setMode(q.LINE_LOOP):Ft.setMode(q.LINE_STRIP)}else We.isPoints?Ft.setMode(q.POINTS):We.isSprite&&Ft.setMode(q.TRIANGLES);if(We.isBatchedMesh)Ft.renderMultiDraw(We._multiDrawStarts,We._multiDrawCounts,We._multiDrawCount);else if(We.isInstancedMesh)Ft.renderInstances(zt,jt,We.count);else if(Ge.isInstancedBufferGeometry){const Mt=Ge._maxInstanceCount!==void 0?Ge._maxInstanceCount:1/0,Or=Math.min(Ge.instanceCount,Mt);Ft.renderInstances(zt,jt,Or)}else Ft.render(zt,jt)};function tt(ne,Ue,Ge){ne.transparent===!0&&ne.side===cn&&ne.forceSinglePass===!1?(ne.side=Mn,ne.needsUpdate=!0,Lt(ne,Ue,Ge),ne.side=pi,ne.needsUpdate=!0,Lt(ne,Ue,Ge),ne.side=cn):Lt(ne,Ue,Ge)}this.compile=function(ne,Ue,Ge=null){Ge===null&&(Ge=ne),_=re.get(Ge),_.init(),x.push(_),Ge.traverseVisible(function(We){We.isLight&&We.layers.test(Ue.layers)&&(_.pushLight(We),We.castShadow&&_.pushShadow(We))}),ne!==Ge&&ne.traverseVisible(function(We){We.isLight&&We.layers.test(Ue.layers)&&(_.pushLight(We),We.castShadow&&_.pushShadow(We))}),_.setupLights(b._useLegacyLights);const je=new Set;return ne.traverse(function(We){const rt=We.material;if(rt)if(Array.isArray(rt))for(let lt=0;lt<rt.length;lt++){const ut=rt[lt];tt(ut,Ge,We),je.add(ut)}else tt(rt,Ge,We),je.add(rt)}),x.pop(),_=null,je},this.compileAsync=function(ne,Ue,Ge=null){const je=this.compile(ne,Ue,Ge);return new Promise(We=>{function rt(){if(je.forEach(function(lt){_e.get(lt).currentProgram.isReady()&&je.delete(lt)}),je.size===0){We(ne);return}setTimeout(rt,10)}ye.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let st=null;function Ze(ne){st&&st(ne)}function ot(){at.stop()}function Je(){at.start()}const at=new qf;at.setAnimationLoop(Ze),typeof self<"u"&&at.setContext(self),this.setAnimationLoop=function(ne){st=ne,qe.setAnimationLoop(ne),ne===null?at.stop():at.start()},qe.addEventListener("sessionstart",ot),qe.addEventListener("sessionend",Je),this.render=function(ne,Ue){if(Ue!==void 0&&Ue.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;ne.matrixWorldAutoUpdate===!0&&ne.updateMatrixWorld(),Ue.parent===null&&Ue.matrixWorldAutoUpdate===!0&&Ue.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(Ue),Ue=qe.getCamera()),ne.isScene===!0&&ne.onBeforeRender(b,ne,Ue,w),_=re.get(ne,x.length),_.init(),x.push(_),D.multiplyMatrices(Ue.projectionMatrix,Ue.matrixWorldInverse),fe.setFromProjectionMatrix(D),J=this.localClippingEnabled,B=Me.init(this.clippingPlanes,J),m=Q.get(ne,p.length),m.init(),p.push(m),ht(ne,Ue,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(te,se),this.info.render.frame++,B===!0&&Me.beginShadows();const Ge=_.state.shadowsArray;if(Ee.render(Ge,ne,Ue),B===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1)&&xe.render(m,ne),_.setupLights(b._useLegacyLights),Ue.isArrayCamera){const je=Ue.cameras;for(let We=0,rt=je.length;We<rt;We++){const lt=je[We];Gt(m,ne,lt,lt.viewport)}}else Gt(m,ne,Ue);w!==null&&(k.updateMultisampleRenderTarget(w),k.updateRenderTargetMipmap(w)),ne.isScene===!0&&ne.onAfterRender(b,ne,Ue),ke.resetDefaultState(),L=-1,U=null,x.pop(),x.length>0?_=x[x.length-1]:_=null,p.pop(),p.length>0?m=p[p.length-1]:m=null};function ht(ne,Ue,Ge,je){if(ne.visible===!1)return;if(ne.layers.test(Ue.layers)){if(ne.isGroup)Ge=ne.renderOrder;else if(ne.isLOD)ne.autoUpdate===!0&&ne.update(Ue);else if(ne.isLight)_.pushLight(ne),ne.castShadow&&_.pushShadow(ne);else if(ne.isSprite){if(!ne.frustumCulled||fe.intersectsSprite(ne)){je&&be.setFromMatrixPosition(ne.matrixWorld).applyMatrix4(D);const lt=H.update(ne),ut=ne.material;ut.visible&&m.push(ne,lt,ut,Ge,be.z,null)}}else if((ne.isMesh||ne.isLine||ne.isPoints)&&(!ne.frustumCulled||fe.intersectsObject(ne))){const lt=H.update(ne),ut=ne.material;if(je&&(ne.boundingSphere!==void 0?(ne.boundingSphere===null&&ne.computeBoundingSphere(),be.copy(ne.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),be.copy(lt.boundingSphere.center)),be.applyMatrix4(ne.matrixWorld).applyMatrix4(D)),Array.isArray(ut)){const dt=lt.groups;for(let xt=0,_t=dt.length;xt<_t;xt++){const gt=dt[xt],zt=ut[gt.materialIndex];zt&&zt.visible&&m.push(ne,lt,zt,Ge,be.z,gt)}}else ut.visible&&m.push(ne,lt,ut,Ge,be.z,null)}}const rt=ne.children;for(let lt=0,ut=rt.length;lt<ut;lt++)ht(rt[lt],Ue,Ge,je)}function Gt(ne,Ue,Ge,je){const We=ne.opaque,rt=ne.transmissive,lt=ne.transparent;_.setupLightsView(Ge),B===!0&&Me.setGlobalState(b.clippingPlanes,Ge),rt.length>0&&Jt(We,rt,Ue,Ge),je&&ae.viewport(y.copy(je)),We.length>0&&wt(We,Ue,Ge),rt.length>0&&wt(rt,Ue,Ge),lt.length>0&&wt(lt,Ue,Ge),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Jt(ne,Ue,Ge,je){if((Ge.isScene===!0?Ge.overrideMaterial:null)!==null)return;const rt=Ne.isWebGL2;oe===null&&(oe=new Pi(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?Ns:di,minFilter:wi,samples:rt?4:0})),b.getDrawingBufferSize(I),rt?oe.setSize(I.x,I.y):oe.setSize(No(I.x),No(I.y));const lt=b.getRenderTarget();b.setRenderTarget(oe),b.getClearColor($),O=b.getClearAlpha(),O<1&&b.setClearColor(16777215,.5),b.clear();const ut=b.toneMapping;b.toneMapping=hi,wt(ne,Ge,je),k.updateMultisampleRenderTarget(oe),k.updateRenderTargetMipmap(oe);let dt=!1;for(let xt=0,_t=Ue.length;xt<_t;xt++){const gt=Ue[xt],zt=gt.object,Sn=gt.geometry,jt=gt.material,Wn=gt.group;if(jt.side===cn&&zt.layers.test(je.layers)){const Ft=jt.side;jt.side=Mn,jt.needsUpdate=!0,Ct(zt,Ge,je,Sn,jt,Wn),jt.side=Ft,jt.needsUpdate=!0,dt=!0}}dt===!0&&(k.updateMultisampleRenderTarget(oe),k.updateRenderTargetMipmap(oe)),b.setRenderTarget(lt),b.setClearColor($,O),b.toneMapping=ut}function wt(ne,Ue,Ge){const je=Ue.isScene===!0?Ue.overrideMaterial:null;for(let We=0,rt=ne.length;We<rt;We++){const lt=ne[We],ut=lt.object,dt=lt.geometry,xt=je===null?lt.material:je,_t=lt.group;ut.layers.test(Ge.layers)&&Ct(ut,Ue,Ge,dt,xt,_t)}}function Ct(ne,Ue,Ge,je,We,rt){ne.onBeforeRender(b,Ue,Ge,je,We,rt),ne.modelViewMatrix.multiplyMatrices(Ge.matrixWorldInverse,ne.matrixWorld),ne.normalMatrix.getNormalMatrix(ne.modelViewMatrix),We.onBeforeRender(b,Ue,Ge,je,ne,rt),We.transparent===!0&&We.side===cn&&We.forceSinglePass===!1?(We.side=Mn,We.needsUpdate=!0,b.renderBufferDirect(Ge,Ue,je,We,ne,rt),We.side=pi,We.needsUpdate=!0,b.renderBufferDirect(Ge,Ue,je,We,ne,rt),We.side=cn):b.renderBufferDirect(Ge,Ue,je,We,ne,rt),ne.onAfterRender(b,Ue,Ge,je,We,rt)}function Lt(ne,Ue,Ge){Ue.isScene!==!0&&(Ue=Se);const je=_e.get(ne),We=_.state.lights,rt=_.state.shadowsArray,lt=We.state.version,ut=Y.getParameters(ne,We.state,rt,Ue,Ge),dt=Y.getProgramCacheKey(ut);let xt=je.programs;je.environment=ne.isMeshStandardMaterial?Ue.environment:null,je.fog=Ue.fog,je.envMap=(ne.isMeshStandardMaterial?ve:P).get(ne.envMap||je.environment),xt===void 0&&(ne.addEventListener("dispose",we),xt=new Map,je.programs=xt);let _t=xt.get(dt);if(_t!==void 0){if(je.currentProgram===_t&&je.lightsStateVersion===lt)return An(ne,ut),_t}else ut.uniforms=Y.getUniforms(ne),ne.onBuild(Ge,ut,b),ne.onBeforeCompile(ut,b),_t=Y.acquireProgram(ut,dt),xt.set(dt,_t),je.uniforms=ut.uniforms;const gt=je.uniforms;return(!ne.isShaderMaterial&&!ne.isRawShaderMaterial||ne.clipping===!0)&&(gt.clippingPlanes=Me.uniform),An(ne,ut),je.needsLights=vs(ne),je.lightsStateVersion=lt,je.needsLights&&(gt.ambientLightColor.value=We.state.ambient,gt.lightProbe.value=We.state.probe,gt.directionalLights.value=We.state.directional,gt.directionalLightShadows.value=We.state.directionalShadow,gt.spotLights.value=We.state.spot,gt.spotLightShadows.value=We.state.spotShadow,gt.rectAreaLights.value=We.state.rectArea,gt.ltc_1.value=We.state.rectAreaLTC1,gt.ltc_2.value=We.state.rectAreaLTC2,gt.pointLights.value=We.state.point,gt.pointLightShadows.value=We.state.pointShadow,gt.hemisphereLights.value=We.state.hemi,gt.directionalShadowMap.value=We.state.directionalShadowMap,gt.directionalShadowMatrix.value=We.state.directionalShadowMatrix,gt.spotShadowMap.value=We.state.spotShadowMap,gt.spotLightMatrix.value=We.state.spotLightMatrix,gt.spotLightMap.value=We.state.spotLightMap,gt.pointShadowMap.value=We.state.pointShadowMap,gt.pointShadowMatrix.value=We.state.pointShadowMatrix),je.currentProgram=_t,je.uniformsList=null,_t}function Ut(ne){if(ne.uniformsList===null){const Ue=ne.currentProgram.getUniforms();ne.uniformsList=mr.seqWithValue(Ue.seq,ne.uniforms)}return ne.uniformsList}function An(ne,Ue){const Ge=_e.get(ne);Ge.outputColorSpace=Ue.outputColorSpace,Ge.batching=Ue.batching,Ge.instancing=Ue.instancing,Ge.instancingColor=Ue.instancingColor,Ge.skinning=Ue.skinning,Ge.morphTargets=Ue.morphTargets,Ge.morphNormals=Ue.morphNormals,Ge.morphColors=Ue.morphColors,Ge.morphTargetsCount=Ue.morphTargetsCount,Ge.numClippingPlanes=Ue.numClippingPlanes,Ge.numIntersection=Ue.numClipIntersection,Ge.vertexAlphas=Ue.vertexAlphas,Ge.vertexTangents=Ue.vertexTangents,Ge.toneMapping=Ue.toneMapping}function on(ne,Ue,Ge,je,We){Ue.isScene!==!0&&(Ue=Se),k.resetTextureUnits();const rt=Ue.fog,lt=je.isMeshStandardMaterial?Ue.environment:null,ut=w===null?b.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ii,dt=(je.isMeshStandardMaterial?ve:P).get(je.envMap||lt),xt=je.vertexColors===!0&&!!Ge.attributes.color&&Ge.attributes.color.itemSize===4,_t=!!Ge.attributes.tangent&&(!!je.normalMap||je.anisotropy>0),gt=!!Ge.morphAttributes.position,zt=!!Ge.morphAttributes.normal,Sn=!!Ge.morphAttributes.color;let jt=hi;je.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(jt=b.toneMapping);const Wn=Ge.morphAttributes.position||Ge.morphAttributes.normal||Ge.morphAttributes.color,Ft=Wn!==void 0?Wn.length:0,Mt=_e.get(je),Or=_.state.lights;if(B===!0&&(J===!0||ne!==U)){const Cn=ne===U&&je.id===L;Me.setState(je,ne,Cn)}let Ot=!1;je.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==Or.state.version||Mt.outputColorSpace!==ut||We.isBatchedMesh&&Mt.batching===!1||!We.isBatchedMesh&&Mt.batching===!0||We.isInstancedMesh&&Mt.instancing===!1||!We.isInstancedMesh&&Mt.instancing===!0||We.isSkinnedMesh&&Mt.skinning===!1||!We.isSkinnedMesh&&Mt.skinning===!0||We.isInstancedMesh&&Mt.instancingColor===!0&&We.instanceColor===null||We.isInstancedMesh&&Mt.instancingColor===!1&&We.instanceColor!==null||Mt.envMap!==dt||je.fog===!0&&Mt.fog!==rt||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Me.numPlanes||Mt.numIntersection!==Me.numIntersection)||Mt.vertexAlphas!==xt||Mt.vertexTangents!==_t||Mt.morphTargets!==gt||Mt.morphNormals!==zt||Mt.morphColors!==Sn||Mt.toneMapping!==jt||Ne.isWebGL2===!0&&Mt.morphTargetsCount!==Ft)&&(Ot=!0):(Ot=!0,Mt.__version=je.version);let _i=Mt.currentProgram;Ot===!0&&(_i=Lt(je,Ue,We));let jo=!1,bs=!1,kr=!1;const tn=_i.getUniforms(),gi=Mt.uniforms;if(ae.useProgram(_i.program)&&(jo=!0,bs=!0,kr=!0),je.id!==L&&(L=je.id,bs=!0),jo||U!==ne){tn.setValue(q,"projectionMatrix",ne.projectionMatrix),tn.setValue(q,"viewMatrix",ne.matrixWorldInverse);const Cn=tn.map.cameraPosition;Cn!==void 0&&Cn.setValue(q,be.setFromMatrixPosition(ne.matrixWorld)),Ne.logarithmicDepthBuffer&&tn.setValue(q,"logDepthBufFC",2/(Math.log(ne.far+1)/Math.LN2)),(je.isMeshPhongMaterial||je.isMeshToonMaterial||je.isMeshLambertMaterial||je.isMeshBasicMaterial||je.isMeshStandardMaterial||je.isShaderMaterial)&&tn.setValue(q,"isOrthographic",ne.isOrthographicCamera===!0),U!==ne&&(U=ne,bs=!0,kr=!0)}if(We.isSkinnedMesh){tn.setOptional(q,We,"bindMatrix"),tn.setOptional(q,We,"bindMatrixInverse");const Cn=We.skeleton;Cn&&(Ne.floatVertexTextures?(Cn.boneTexture===null&&Cn.computeBoneTexture(),tn.setValue(q,"boneTexture",Cn.boneTexture,k)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}We.isBatchedMesh&&(tn.setOptional(q,We,"batchingTexture"),tn.setValue(q,"batchingTexture",We._matricesTexture,k));const Br=Ge.morphAttributes;if((Br.position!==void 0||Br.normal!==void 0||Br.color!==void 0&&Ne.isWebGL2===!0)&&Re.update(We,Ge,_i),(bs||Mt.receiveShadow!==We.receiveShadow)&&(Mt.receiveShadow=We.receiveShadow,tn.setValue(q,"receiveShadow",We.receiveShadow)),je.isMeshGouraudMaterial&&je.envMap!==null&&(gi.envMap.value=dt,gi.flipEnvMap.value=dt.isCubeTexture&&dt.isRenderTargetTexture===!1?-1:1),bs&&(tn.setValue(q,"toneMappingExposure",b.toneMappingExposure),Mt.needsLights&&Ni(gi,kr),rt&&je.fog===!0&&he.refreshFogUniforms(gi,rt),he.refreshMaterialUniforms(gi,je,ee,W,oe),mr.upload(q,Ut(Mt),gi,k)),je.isShaderMaterial&&je.uniformsNeedUpdate===!0&&(mr.upload(q,Ut(Mt),gi,k),je.uniformsNeedUpdate=!1),je.isSpriteMaterial&&tn.setValue(q,"center",We.center),tn.setValue(q,"modelViewMatrix",We.modelViewMatrix),tn.setValue(q,"normalMatrix",We.normalMatrix),tn.setValue(q,"modelMatrix",We.matrixWorld),je.isShaderMaterial||je.isRawShaderMaterial){const Cn=je.uniformsGroups;for(let zr=0,sh=Cn.length;zr<sh;zr++)if(Ne.isWebGL2){const qo=Cn[zr];Z.update(qo,_i),Z.bind(qo,_i)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _i}function Ni(ne,Ue){ne.ambientLightColor.needsUpdate=Ue,ne.lightProbe.needsUpdate=Ue,ne.directionalLights.needsUpdate=Ue,ne.directionalLightShadows.needsUpdate=Ue,ne.pointLights.needsUpdate=Ue,ne.pointLightShadows.needsUpdate=Ue,ne.spotLights.needsUpdate=Ue,ne.spotLightShadows.needsUpdate=Ue,ne.rectAreaLights.needsUpdate=Ue,ne.hemisphereLights.needsUpdate=Ue}function vs(ne){return ne.isMeshLambertMaterial||ne.isMeshToonMaterial||ne.isMeshPhongMaterial||ne.isMeshStandardMaterial||ne.isShadowMaterial||ne.isShaderMaterial&&ne.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(ne,Ue,Ge){_e.get(ne.texture).__webglTexture=Ue,_e.get(ne.depthTexture).__webglTexture=Ge;const je=_e.get(ne);je.__hasExternalTextures=!0,je.__hasExternalTextures&&(je.__autoAllocateDepthBuffer=Ge===void 0,je.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),je.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(ne,Ue){const Ge=_e.get(ne);Ge.__webglFramebuffer=Ue,Ge.__useDefaultFramebuffer=Ue===void 0},this.setRenderTarget=function(ne,Ue=0,Ge=0){w=ne,C=Ue,T=Ge;let je=!0,We=null,rt=!1,lt=!1;if(ne){const dt=_e.get(ne);dt.__useDefaultFramebuffer!==void 0?(ae.bindFramebuffer(q.FRAMEBUFFER,null),je=!1):dt.__webglFramebuffer===void 0?k.setupRenderTarget(ne):dt.__hasExternalTextures&&k.rebindTextures(ne,_e.get(ne.texture).__webglTexture,_e.get(ne.depthTexture).__webglTexture);const xt=ne.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(lt=!0);const _t=_e.get(ne).__webglFramebuffer;ne.isWebGLCubeRenderTarget?(Array.isArray(_t[Ue])?We=_t[Ue][Ge]:We=_t[Ue],rt=!0):Ne.isWebGL2&&ne.samples>0&&k.useMultisampledRTT(ne)===!1?We=_e.get(ne).__webglMultisampledFramebuffer:Array.isArray(_t)?We=_t[Ge]:We=_t,y.copy(ne.viewport),N.copy(ne.scissor),K=ne.scissorTest}else y.copy(ue).multiplyScalar(ee).floor(),N.copy(le).multiplyScalar(ee).floor(),K=ce;if(ae.bindFramebuffer(q.FRAMEBUFFER,We)&&Ne.drawBuffers&&je&&ae.drawBuffers(ne,We),ae.viewport(y),ae.scissor(N),ae.setScissorTest(K),rt){const dt=_e.get(ne.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,dt.__webglTexture,Ge)}else if(lt){const dt=_e.get(ne.texture),xt=Ue||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,dt.__webglTexture,Ge||0,xt)}L=-1},this.readRenderTargetPixels=function(ne,Ue,Ge,je,We,rt,lt){if(!(ne&&ne.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=_e.get(ne).__webglFramebuffer;if(ne.isWebGLCubeRenderTarget&&lt!==void 0&&(ut=ut[lt]),ut){ae.bindFramebuffer(q.FRAMEBUFFER,ut);try{const dt=ne.texture,xt=dt.format,_t=dt.type;if(xt!==On&&Le.convert(xt)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const gt=_t===Ns&&(ye.has("EXT_color_buffer_half_float")||Ne.isWebGL2&&ye.has("EXT_color_buffer_float"));if(_t!==di&&Le.convert(_t)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(_t===$n&&(Ne.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Ue>=0&&Ue<=ne.width-je&&Ge>=0&&Ge<=ne.height-We&&q.readPixels(Ue,Ge,je,We,Le.convert(xt),Le.convert(_t),rt)}finally{const dt=w!==null?_e.get(w).__webglFramebuffer:null;ae.bindFramebuffer(q.FRAMEBUFFER,dt)}}},this.copyFramebufferToTexture=function(ne,Ue,Ge=0){const je=Math.pow(2,-Ge),We=Math.floor(Ue.image.width*je),rt=Math.floor(Ue.image.height*je);k.setTexture2D(Ue,0),q.copyTexSubImage2D(q.TEXTURE_2D,Ge,0,0,ne.x,ne.y,We,rt),ae.unbindTexture()},this.copyTextureToTexture=function(ne,Ue,Ge,je=0){const We=Ue.image.width,rt=Ue.image.height,lt=Le.convert(Ge.format),ut=Le.convert(Ge.type);k.setTexture2D(Ge,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Ge.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Ge.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,Ge.unpackAlignment),Ue.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,je,ne.x,ne.y,We,rt,lt,ut,Ue.image.data):Ue.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,je,ne.x,ne.y,Ue.mipmaps[0].width,Ue.mipmaps[0].height,lt,Ue.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,je,ne.x,ne.y,lt,ut,Ue.image),je===0&&Ge.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),ae.unbindTexture()},this.copyTextureToTexture3D=function(ne,Ue,Ge,je,We=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const rt=ne.max.x-ne.min.x+1,lt=ne.max.y-ne.min.y+1,ut=ne.max.z-ne.min.z+1,dt=Le.convert(je.format),xt=Le.convert(je.type);let _t;if(je.isData3DTexture)k.setTexture3D(je,0),_t=q.TEXTURE_3D;else if(je.isDataArrayTexture||je.isCompressedArrayTexture)k.setTexture2DArray(je,0),_t=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,je.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,je.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,je.unpackAlignment);const gt=q.getParameter(q.UNPACK_ROW_LENGTH),zt=q.getParameter(q.UNPACK_IMAGE_HEIGHT),Sn=q.getParameter(q.UNPACK_SKIP_PIXELS),jt=q.getParameter(q.UNPACK_SKIP_ROWS),Wn=q.getParameter(q.UNPACK_SKIP_IMAGES),Ft=Ge.isCompressedTexture?Ge.mipmaps[We]:Ge.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,Ft.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Ft.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,ne.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,ne.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,ne.min.z),Ge.isDataTexture||Ge.isData3DTexture?q.texSubImage3D(_t,We,Ue.x,Ue.y,Ue.z,rt,lt,ut,dt,xt,Ft.data):Ge.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(_t,We,Ue.x,Ue.y,Ue.z,rt,lt,ut,dt,Ft.data)):q.texSubImage3D(_t,We,Ue.x,Ue.y,Ue.z,rt,lt,ut,dt,xt,Ft),q.pixelStorei(q.UNPACK_ROW_LENGTH,gt),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,zt),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Sn),q.pixelStorei(q.UNPACK_SKIP_ROWS,jt),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Wn),We===0&&je.generateMipmaps&&q.generateMipmap(_t),ae.unbindTexture()},this.initTexture=function(ne){ne.isCubeTexture?k.setTextureCube(ne,0):ne.isData3DTexture?k.setTexture3D(ne,0):ne.isDataArrayTexture||ne.isCompressedArrayTexture?k.setTexture2DArray(ne,0):k.setTexture2D(ne,0),ae.unbindTexture()},this.resetState=function(){C=0,T=0,w=null,ae.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Bo?"display-p3":"srgb",t.unpackColorSpace=Rt.workingColorSpace===Ir?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Qt?Ri:If}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ri?Qt:ii}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Uv extends th{}Uv.prototype.isWebGL1Renderer=!0;class Fv extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Us extends _s{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fc=new Ie,hc=new Ie,dc=new Ht,bo=new zo,cr=new Nr;class nh extends en{constructor(e=new $t,t=new Us){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)fc.fromBufferAttribute(t,s-1),hc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=fc.distanceTo(hc);e.setAttribute("lineDistance",new Dt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(s),cr.radius+=r,e.ray.intersectsSphere(cr)===!1)return;dc.copy(s).invert(),bo.copy(e.ray).applyMatrix4(dc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new Ie,u=new Ie,h=new Ie,d=new Ie,g=this.isLineSegments?2:1,v=n.index,_=n.attributes.position;if(v!==null){const p=Math.max(0,o.start),x=Math.min(v.count,o.start+o.count);for(let b=p,A=x-1;b<A;b+=g){const C=v.getX(b),T=v.getX(b+1);if(l.fromBufferAttribute(_,C),u.fromBufferAttribute(_,T),bo.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(d);L<e.near||L>e.far||t.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),x=Math.min(_.count,o.start+o.count);for(let b=p,A=x-1;b<A;b+=g){if(l.fromBufferAttribute(_,b),u.fromBufferAttribute(_,b+1),bo.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||t.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const pc=new Ie,mc=new Ie;class Go extends nh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)pc.fromBufferAttribute(t,s),mc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+pc.distanceTo(mc);e.setAttribute("lineDistance",new Dt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Wo extends $t{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],g=[];let v=0;const m=[],_=n/2;let p=0;x(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Dt(h,3)),this.setAttribute("normal",new Dt(d,3)),this.setAttribute("uv",new Dt(g,2));function x(){const A=new Ie,C=new Ie;let T=0;const w=(t-e)/n;for(let L=0;L<=r;L++){const U=[],y=L/r,N=y*(t-e)+e;for(let K=0;K<=s;K++){const $=K/s,O=$*c+a,j=Math.sin(O),W=Math.cos(O);C.x=N*j,C.y=-y*n+_,C.z=N*W,h.push(C.x,C.y,C.z),A.set(j,w,W).normalize(),d.push(A.x,A.y,A.z),g.push($,1-y),U.push(v++)}m.push(U)}for(let L=0;L<s;L++)for(let U=0;U<r;U++){const y=m[U][L],N=m[U+1][L],K=m[U+1][L+1],$=m[U][L+1];u.push(y,N,$),u.push(N,K,$),T+=6}l.addGroup(p,T,0),p+=T}function b(A){const C=v,T=new pt,w=new Ie;let L=0;const U=A===!0?e:t,y=A===!0?1:-1;for(let K=1;K<=s;K++)h.push(0,_*y,0),d.push(0,y,0),g.push(.5,.5),v++;const N=v;for(let K=0;K<=s;K++){const O=K/s*c+a,j=Math.cos(O),W=Math.sin(O);w.x=U*W,w.y=_*y,w.z=U*j,h.push(w.x,w.y,w.z),d.push(0,y,0),T.x=j*.5+.5,T.y=W*.5*y+.5,g.push(T.x,T.y),v++}for(let K=0;K<s;K++){const $=C+K,O=N+K;A===!0?u.push(O,O+1,$):u.push(O+1,O,$),L+=3}l.addGroup(p,L,A===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const ur=new Ie,fr=new Ie,xo=new Ie,hr=new kn;class Ov extends $t{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Rs*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),d={},g=[];for(let v=0;v<c;v+=3){o?(l[0]=o.getX(v),l[1]=o.getX(v+1),l[2]=o.getX(v+2)):(l[0]=v,l[1]=v+1,l[2]=v+2);const{a:m,b:_,c:p}=hr;if(m.fromBufferAttribute(a,l[0]),_.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),hr.getNormal(xo),h[0]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[1]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,h[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let x=0;x<3;x++){const b=(x+1)%3,A=h[x],C=h[b],T=hr[u[x]],w=hr[u[b]],L=`${A}_${C}`,U=`${C}_${A}`;U in d&&d[U]?(xo.dot(d[U].normal)<=r&&(g.push(T.x,T.y,T.z),g.push(w.x,w.y,w.z)),d[U]=null):L in d||(d[L]={index0:l[x],index1:l[b],normal:xo.clone()})}}for(const v in d)if(d[v]){const{index0:m,index1:_}=d[v];ur.fromBufferAttribute(a,m),fr.fromBufferAttribute(a,_),g.push(ur.x,ur.y,ur.z),g.push(fr.x,fr.y,fr.z)}this.setAttribute("position",new Dt(g,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Xo extends $t{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new Ie,d=new Ie,g=[],v=[],m=[],_=[];for(let p=0;p<=n;p++){const x=[],b=p/n;let A=0;p===0&&o===0?A=.5/t:p===n&&c===Math.PI&&(A=-.5/t);for(let C=0;C<=t;C++){const T=C/t;h.x=-e*Math.cos(s+T*r)*Math.sin(o+b*a),h.y=e*Math.cos(o+b*a),h.z=e*Math.sin(s+T*r)*Math.sin(o+b*a),v.push(h.x,h.y,h.z),d.copy(h).normalize(),m.push(d.x,d.y,d.z),_.push(T+A,1-b),x.push(l++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const b=u[p][x+1],A=u[p][x],C=u[p+1][x],T=u[p+1][x+1];(p!==0||o>0)&&g.push(b,A,T),(p!==n-1||c<Math.PI)&&g.push(A,C,T)}this.setIndex(g),this.setAttribute("position",new Dt(v,3)),this.setAttribute("normal",new Dt(m,3)),this.setAttribute("uv",new Dt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Mi extends _s{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new bt(16777215),this.specular=new bt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nf,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ih extends en{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Eo=new Ht,_c=new Ie,gc=new Ie;class kv{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vo,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;_c.setFromMatrixPosition(e.matrixWorld),t.position.copy(_c),gc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gc),t.updateMatrixWorld(),Eo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Eo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Bv extends kv{constructor(){super(new Yf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zv extends ih{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new Bv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Vv extends ih{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class vc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(un(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Hv extends Go{constructor(e=10,t=10,n=4473924,s=8947848){n=new bt(n),s=new bt(s);const r=t/2,o=e/t,a=e/2,c=[],l=[];for(let d=0,g=0,v=-a;d<=t;d++,v+=o){c.push(-a,0,v,a,0,v),c.push(v,0,-a,v,0,a);const m=d===r?n:s;m.toArray(l,g),g+=3,m.toArray(l,g),g+=3,m.toArray(l,g),g+=3,m.toArray(l,g),g+=3}const u=new $t;u.setAttribute("position",new Dt(c,3)),u.setAttribute("color",new Dt(l,3));const h=new Us({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Gv extends Go{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new $t;s.setAttribute("position",new Dt(t,3)),s.setAttribute("color",new Dt(n,3));const r=new Us({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,n){const s=new bt,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fo);const bc={type:"change"},Mo={type:"start"},xc={type:"end"},dr=new zo,Ec=new Qn,Wv=Math.cos(70*wd.DEG2RAD);class Xv extends Ii{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Ie,this.cursor=new Ie,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ui.ROTATE,MIDDLE:Ui.DOLLY,RIGHT:Ui.PAN},this.touches={ONE:Fi.ROTATE,TWO:Fi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(Z){Z.addEventListener("keydown",re),this._domElementKeyEvents=Z},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",re),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(bc),n.update(),r=s.NONE},this.update=function(){const Z=new Ie,Be=new Li().setFromUnitVectors(e.up,new Ie(0,1,0)),qe=Be.clone().invert(),He=new Ie,G=new Li,De=new Ie,we=2*Math.PI;return function(Xe=null){const tt=n.object.position;Z.copy(tt).sub(n.target),Z.applyQuaternion(Be),a.setFromVector3(Z),n.autoRotate&&r===s.NONE&&K(y(Xe)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let st=n.minAzimuthAngle,Ze=n.maxAzimuthAngle;isFinite(st)&&isFinite(Ze)&&(st<-Math.PI?st+=we:st>Math.PI&&(st-=we),Ze<-Math.PI?Ze+=we:Ze>Math.PI&&(Ze-=we),st<=Ze?a.theta=Math.max(st,Math.min(Ze,a.theta)):a.theta=a.theta>(st+Ze)/2?Math.max(st,a.theta):Math.min(Ze,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&T||n.object.isOrthographicCamera?a.radius=ue(a.radius):a.radius=ue(a.radius*l),Z.setFromSpherical(a),Z.applyQuaternion(qe),tt.copy(n.target).add(Z),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let ot=!1;if(n.zoomToCursor&&T){let Je=null;if(n.object.isPerspectiveCamera){const at=Z.length();Je=ue(at*l);const ht=at-Je;n.object.position.addScaledVector(A,ht),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const at=new Ie(C.x,C.y,0);at.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),ot=!0;const ht=new Ie(C.x,C.y,0);ht.unproject(n.object),n.object.position.sub(ht).add(at),n.object.updateMatrixWorld(),Je=Z.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Je!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Je).add(n.object.position):(dr.origin.copy(n.object.position),dr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(dr.direction))<Wv?e.lookAt(n.target):(Ec.setFromNormalAndCoplanarPoint(n.object.up,n.target),dr.intersectPlane(Ec,n.target))))}else n.object.isOrthographicCamera&&(ot=l!==1,ot&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix()));return l=1,T=!1,ot||He.distanceToSquared(n.object.position)>o||8*(1-G.dot(n.object.quaternion))>o||De.distanceToSquared(n.target)>0?(n.dispatchEvent(bc),He.copy(n.object.position),G.copy(n.object.quaternion),De.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",xe),n.domElement.removeEventListener("pointerdown",k),n.domElement.removeEventListener("pointercancel",ve),n.domElement.removeEventListener("wheel",H),n.domElement.removeEventListener("pointermove",P),n.domElement.removeEventListener("pointerup",ve),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",re),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new vc,c=new vc;let l=1;const u=new Ie,h=new pt,d=new pt,g=new pt,v=new pt,m=new pt,_=new pt,p=new pt,x=new pt,b=new pt,A=new Ie,C=new pt;let T=!1;const w=[],L={};let U=!1;function y(Z){return Z!==null?2*Math.PI/60*n.autoRotateSpeed*Z:2*Math.PI/60/60*n.autoRotateSpeed}function N(Z){const Be=Math.abs(Z*.01);return Math.pow(.95,n.zoomSpeed*Be)}function K(Z){c.theta-=Z}function $(Z){c.phi-=Z}const O=function(){const Z=new Ie;return function(qe,He){Z.setFromMatrixColumn(He,0),Z.multiplyScalar(-qe),u.add(Z)}}(),j=function(){const Z=new Ie;return function(qe,He){n.screenSpacePanning===!0?Z.setFromMatrixColumn(He,1):(Z.setFromMatrixColumn(He,0),Z.crossVectors(n.object.up,Z)),Z.multiplyScalar(qe),u.add(Z)}}(),W=function(){const Z=new Ie;return function(qe,He){const G=n.domElement;if(n.object.isPerspectiveCamera){const De=n.object.position;Z.copy(De).sub(n.target);let we=Z.length();we*=Math.tan(n.object.fov/2*Math.PI/180),O(2*qe*we/G.clientHeight,n.object.matrix),j(2*He*we/G.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(O(qe*(n.object.right-n.object.left)/n.object.zoom/G.clientWidth,n.object.matrix),j(He*(n.object.top-n.object.bottom)/n.object.zoom/G.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function ee(Z){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=Z:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function te(Z){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=Z:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function se(Z,Be){if(!n.zoomToCursor)return;T=!0;const qe=n.domElement.getBoundingClientRect(),He=Z-qe.left,G=Be-qe.top,De=qe.width,we=qe.height;C.x=He/De*2-1,C.y=-(G/we)*2+1,A.set(C.x,C.y,1).unproject(n.object).sub(n.object.position).normalize()}function ue(Z){return Math.max(n.minDistance,Math.min(n.maxDistance,Z))}function le(Z){h.set(Z.clientX,Z.clientY)}function ce(Z){se(Z.clientX,Z.clientX),p.set(Z.clientX,Z.clientY)}function fe(Z){v.set(Z.clientX,Z.clientY)}function B(Z){d.set(Z.clientX,Z.clientY),g.subVectors(d,h).multiplyScalar(n.rotateSpeed);const Be=n.domElement;K(2*Math.PI*g.x/Be.clientHeight),$(2*Math.PI*g.y/Be.clientHeight),h.copy(d),n.update()}function J(Z){x.set(Z.clientX,Z.clientY),b.subVectors(x,p),b.y>0?ee(N(b.y)):b.y<0&&te(N(b.y)),p.copy(x),n.update()}function oe(Z){m.set(Z.clientX,Z.clientY),_.subVectors(m,v).multiplyScalar(n.panSpeed),W(_.x,_.y),v.copy(m),n.update()}function D(Z){se(Z.clientX,Z.clientY),Z.deltaY<0?te(N(Z.deltaY)):Z.deltaY>0&&ee(N(Z.deltaY)),n.update()}function I(Z){let Be=!1;switch(Z.code){case n.keys.UP:Z.ctrlKey||Z.metaKey||Z.shiftKey?$(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,n.keyPanSpeed),Be=!0;break;case n.keys.BOTTOM:Z.ctrlKey||Z.metaKey||Z.shiftKey?$(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,-n.keyPanSpeed),Be=!0;break;case n.keys.LEFT:Z.ctrlKey||Z.metaKey||Z.shiftKey?K(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(n.keyPanSpeed,0),Be=!0;break;case n.keys.RIGHT:Z.ctrlKey||Z.metaKey||Z.shiftKey?K(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(-n.keyPanSpeed,0),Be=!0;break}Be&&(Z.preventDefault(),n.update())}function be(Z){if(w.length===1)h.set(Z.pageX,Z.pageY);else{const Be=Le(Z),qe=.5*(Z.pageX+Be.x),He=.5*(Z.pageY+Be.y);h.set(qe,He)}}function Se(Z){if(w.length===1)v.set(Z.pageX,Z.pageY);else{const Be=Le(Z),qe=.5*(Z.pageX+Be.x),He=.5*(Z.pageY+Be.y);v.set(qe,He)}}function Ce(Z){const Be=Le(Z),qe=Z.pageX-Be.x,He=Z.pageY-Be.y,G=Math.sqrt(qe*qe+He*He);p.set(0,G)}function q(Z){n.enableZoom&&Ce(Z),n.enablePan&&Se(Z)}function Ae(Z){n.enableZoom&&Ce(Z),n.enableRotate&&be(Z)}function ye(Z){if(w.length==1)d.set(Z.pageX,Z.pageY);else{const qe=Le(Z),He=.5*(Z.pageX+qe.x),G=.5*(Z.pageY+qe.y);d.set(He,G)}g.subVectors(d,h).multiplyScalar(n.rotateSpeed);const Be=n.domElement;K(2*Math.PI*g.x/Be.clientHeight),$(2*Math.PI*g.y/Be.clientHeight),h.copy(d)}function Ne(Z){if(w.length===1)m.set(Z.pageX,Z.pageY);else{const Be=Le(Z),qe=.5*(Z.pageX+Be.x),He=.5*(Z.pageY+Be.y);m.set(qe,He)}_.subVectors(m,v).multiplyScalar(n.panSpeed),W(_.x,_.y),v.copy(m)}function ae(Z){const Be=Le(Z),qe=Z.pageX-Be.x,He=Z.pageY-Be.y,G=Math.sqrt(qe*qe+He*He);x.set(0,G),b.set(0,Math.pow(x.y/p.y,n.zoomSpeed)),ee(b.y),p.copy(x);const De=(Z.pageX+Be.x)*.5,we=(Z.pageY+Be.y)*.5;se(De,we)}function ie(Z){n.enableZoom&&ae(Z),n.enablePan&&Ne(Z)}function _e(Z){n.enableZoom&&ae(Z),n.enableRotate&&ye(Z)}function k(Z){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(Z.pointerId),n.domElement.addEventListener("pointermove",P),n.domElement.addEventListener("pointerup",ve)),Re(Z),Z.pointerType==="touch"?Me(Z):Te(Z))}function P(Z){n.enabled!==!1&&(Z.pointerType==="touch"?Ee(Z):X(Z))}function ve(Z){switch(Ye(Z),w.length){case 0:n.domElement.releasePointerCapture(Z.pointerId),n.domElement.removeEventListener("pointermove",P),n.domElement.removeEventListener("pointerup",ve),n.dispatchEvent(xc),r=s.NONE;break;case 1:const Be=w[0],qe=L[Be];Me({pointerId:Be,pageX:qe.x,pageY:qe.y});break}}function Te(Z){let Be;switch(Z.button){case 0:Be=n.mouseButtons.LEFT;break;case 1:Be=n.mouseButtons.MIDDLE;break;case 2:Be=n.mouseButtons.RIGHT;break;default:Be=-1}switch(Be){case Ui.DOLLY:if(n.enableZoom===!1)return;ce(Z),r=s.DOLLY;break;case Ui.ROTATE:if(Z.ctrlKey||Z.metaKey||Z.shiftKey){if(n.enablePan===!1)return;fe(Z),r=s.PAN}else{if(n.enableRotate===!1)return;le(Z),r=s.ROTATE}break;case Ui.PAN:if(Z.ctrlKey||Z.metaKey||Z.shiftKey){if(n.enableRotate===!1)return;le(Z),r=s.ROTATE}else{if(n.enablePan===!1)return;fe(Z),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Mo)}function X(Z){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;B(Z);break;case s.DOLLY:if(n.enableZoom===!1)return;J(Z);break;case s.PAN:if(n.enablePan===!1)return;oe(Z);break}}function H(Z){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(Z.preventDefault(),n.dispatchEvent(Mo),D(Y(Z)),n.dispatchEvent(xc))}function Y(Z){const Be=Z.deltaMode,qe={clientX:Z.clientX,clientY:Z.clientY,deltaY:Z.deltaY};switch(Be){case 1:qe.deltaY*=16;break;case 2:qe.deltaY*=100;break}return Z.ctrlKey&&!U&&(qe.deltaY*=10),qe}function he(Z){Z.key==="Control"&&(U=!0,n.domElement.getRootNode().addEventListener("keyup",Q,{passive:!0,capture:!0}))}function Q(Z){Z.key==="Control"&&(U=!1,n.domElement.getRootNode().removeEventListener("keyup",Q,{passive:!0,capture:!0}))}function re(Z){n.enabled===!1||n.enablePan===!1||I(Z)}function Me(Z){switch(Fe(Z),w.length){case 1:switch(n.touches.ONE){case Fi.ROTATE:if(n.enableRotate===!1)return;be(Z),r=s.TOUCH_ROTATE;break;case Fi.PAN:if(n.enablePan===!1)return;Se(Z),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Fi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;q(Z),r=s.TOUCH_DOLLY_PAN;break;case Fi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ae(Z),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Mo)}function Ee(Z){switch(Fe(Z),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;ye(Z),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Ne(Z),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ie(Z),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_e(Z),n.update();break;default:r=s.NONE}}function xe(Z){n.enabled!==!1&&Z.preventDefault()}function Re(Z){w.push(Z.pointerId)}function Ye(Z){delete L[Z.pointerId];for(let Be=0;Be<w.length;Be++)if(w[Be]==Z.pointerId){w.splice(Be,1);return}}function Fe(Z){let Be=L[Z.pointerId];Be===void 0&&(Be=new pt,L[Z.pointerId]=Be),Be.set(Z.pageX,Z.pageY)}function Le(Z){const Be=Z.pointerId===w[0]?w[1]:w[0];return L[Be]}n.domElement.addEventListener("contextmenu",xe),n.domElement.addEventListener("pointerdown",k),n.domElement.addEventListener("pointercancel",ve),n.domElement.addEventListener("wheel",H,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",he,{passive:!0,capture:!0}),this.update()}}function Mc(i,e,t){const n=i.slice();return n[54]=e[t],n}function Sc(i){let e,t='<div class="empty-icon svelte-1ux5xdu">⛏</div> <h3 class="svelte-1ux5xdu">GeoModeler 三维地质可视化</h3> <p class="svelte-1ux5xdu">导入钻孔数据后开始三维建模与可视化分析</p>';return{c(){e=M("div"),e.innerHTML=t,this.h()},l(n){e=E(n,"DIV",{class:!0,"data-svelte-h":!0}),Pe(e)!=="svelte-1u73fdm"&&(e.innerHTML=t),this.h()},h(){R(e,"class","viewer-empty svelte-1ux5xdu")},m(n,s){ge(n,e,s)},d(n){n&&S(e)}}}function yc(i){let e,t,n,s="体积估算",r,o,a=i[7]?"▸":"▾",c,l,u,h,d=!i[7]&&Tc(i);return{c(){e=M("div"),t=M("div"),n=M("span"),n.textContent=s,r=V(),o=M("span"),c=pe(a),l=V(),d&&d.c(),this.h()},l(g){e=E(g,"DIV",{class:!0});var v=F(e);t=E(v,"DIV",{class:!0});var m=F(t);n=E(m,"SPAN",{class:!0,"data-svelte-h":!0}),Pe(n)!=="svelte-14576x2"&&(n.textContent=s),r=z(m),o=E(m,"SPAN",{class:!0});var _=F(o);c=de(_,a),_.forEach(S),m.forEach(S),l=z(v),d&&d.l(v),v.forEach(S),this.h()},h(){R(n,"class","volume-card-title svelte-1ux5xdu"),R(o,"class","volume-card-toggle svelte-1ux5xdu"),R(t,"class","volume-card-header svelte-1ux5xdu"),R(e,"class","volume-card svelte-1ux5xdu"),Kt(e,"collapsed",i[7])},m(g,v){ge(g,e,v),f(e,t),f(t,n),f(t,r),f(t,o),f(o,c),f(e,l),d&&d.m(e,null),u||(h=ze(t,"click",i[8]),u=!0)},p(g,v){v[0]&128&&a!==(a=g[7]?"▸":"▾")&&Ve(c,a),g[7]?d&&(d.d(1),d=null):d?d.p(g,v):(d=Tc(g),d.c(),d.m(e,null)),v[0]&128&&Kt(e,"collapsed",g[7])},d(g){g&&S(e),d&&d.d(),u=!1,h()}}}function Tc(i){let e,t,n=et(i[0]),s=[];for(let o=0;o<n.length;o+=1)s[o]=wc(Mc(i,n,o));let r=i[0].length>0&&Ac(i);return{c(){e=M("div");for(let o=0;o<s.length;o+=1)s[o].c();t=V(),r&&r.c(),this.h()},l(o){e=E(o,"DIV",{class:!0});var a=F(e);for(let c=0;c<s.length;c+=1)s[c].l(a);t=z(a),r&&r.l(a),a.forEach(S),this.h()},h(){R(e,"class","volume-card-body svelte-1ux5xdu")},m(o,a){ge(o,e,a);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(e,null);f(e,t),r&&r.m(e,null)},p(o,a){if(a[0]&65){n=et(o[0]);let c;for(c=0;c<n.length;c+=1){const l=Mc(o,n,c);s[c]?s[c].p(l,a):(s[c]=wc(l),s[c].c(),s[c].m(e,t))}for(;c<s.length;c+=1)s[c].d(1);s.length=n.length}o[0].length>0?r?r.p(o,a):(r=Ac(o),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(o){o&&S(e),Et(s,o),r&&r.d()}}}function wc(i){let e,t,n,s,r=i[54].lithology_name+"",o,a,c,l=i[54].volume.toFixed(2)+"",u,h,d,g,v=i[54].percentage.toFixed(2)+"",m,_;function p(...x){return i[9](i[54],...x)}return{c(){e=M("div"),t=M("span"),n=V(),s=M("span"),o=pe(r),a=V(),c=M("span"),u=pe(l),h=pe(" m³"),d=V(),g=M("span"),m=pe(v),_=pe("%"),this.h()},l(x){e=E(x,"DIV",{class:!0});var b=F(e);t=E(b,"SPAN",{class:!0,style:!0}),F(t).forEach(S),n=z(b),s=E(b,"SPAN",{class:!0});var A=F(s);o=de(A,r),A.forEach(S),a=z(b),c=E(b,"SPAN",{class:!0});var C=F(c);u=de(C,l),h=de(C," m³"),C.forEach(S),d=z(b),g=E(b,"SPAN",{class:!0});var T=F(g);m=de(T,v),_=de(T,"%"),T.forEach(S),b.forEach(S),this.h()},h(){var x,b;R(t,"class","volume-color-swatch svelte-1ux5xdu"),me(t,"background",((b=(x=i[6])==null?void 0:x.find(p))==null?void 0:b.color)||"#888"),R(s,"class","volume-name svelte-1ux5xdu"),R(c,"class","volume-value svelte-1ux5xdu"),R(g,"class","volume-percent svelte-1ux5xdu"),R(e,"class","volume-card-row svelte-1ux5xdu")},m(x,b){ge(x,e,b),f(e,t),f(e,n),f(e,s),f(s,o),f(e,a),f(e,c),f(c,u),f(c,h),f(e,d),f(e,g),f(g,m),f(g,_)},p(x,b){var A,C;i=x,b[0]&65&&me(t,"background",((C=(A=i[6])==null?void 0:A.find(p))==null?void 0:C.color)||"#888"),b[0]&1&&r!==(r=i[54].lithology_name+"")&&Ve(o,r),b[0]&1&&l!==(l=i[54].volume.toFixed(2)+"")&&Ve(u,l),b[0]&1&&v!==(v=i[54].percentage.toFixed(2)+"")&&Ve(m,v)},d(x){x&&S(e)}}}function Ac(i){let e,t,n=i[0][0].total_volume.toFixed(2)+"",s,r;return{c(){e=M("div"),t=pe("总体积: "),s=pe(n),r=pe(" m³"),this.h()},l(o){e=E(o,"DIV",{class:!0});var a=F(e);t=de(a,"总体积: "),s=de(a,n),r=de(a," m³"),a.forEach(S),this.h()},h(){R(e,"class","volume-card-total svelte-1ux5xdu")},m(o,a){ge(o,e,a),f(e,t),f(e,s),f(e,r)},p(o,a){a[0]&1&&n!==(n=o[0][0].total_volume.toFixed(2)+"")&&Ve(s,n)},d(o){o&&S(e)}}}function jv(i){let e,t,n=!i[1]&&i[4].length===0&&!i[5]&&Sc(),s=i[0]&&i[0].length>0&&yc(i);return{c(){e=M("div"),n&&n.c(),t=V(),s&&s.c(),this.h()},l(r){e=E(r,"DIV",{class:!0});var o=F(e);n&&n.l(o),t=z(o),s&&s.l(o),o.forEach(S),this.h()},h(){R(e,"class","viewer-container svelte-1ux5xdu")},m(r,o){ge(r,e,o),n&&n.m(e,null),f(e,t),s&&s.m(e,null),i[10](e)},p(r,o){!r[1]&&r[4].length===0&&!r[5]?n||(n=Sc(),n.c(),n.m(e,t)):n&&(n.d(1),n=null),r[0]&&r[0].length>0?s?s.p(r,o):(s=yc(r),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},i:yt,o:yt,d(r){r&&S(e),n&&n.d(),s&&s.d(),i[10](null)}}}function Cc(i,e,t){const n=t>e?Math.max(0,Math.min(1,(i-e)/(t-e))):.5;if(n<.25)return[0,0,.5+n/.25*.5];if(n<.5){const s=(n-.25)/.25;return[0,s,1-s]}else if(n<.75){const s=(n-.5)/.25;return[s,1-s,0]}else return[1,1-(n-.75)/.25*.5,0]}function qv(i,e,t){const n=t>e?Math.max(0,Math.min(1,(i-e)/(t-e))):.5,s=Math.min(1,n*2),r=n<.5?n*1.5:(1-n)*1.5,o=Math.max(0,1-n*2);return[s,r,o]}function Yv(i,e,t){let n,s,r,o,a,c,l,u,h=yt,d=()=>(h(),h=rh(k,X=>t(31,u=X)),k),g,v,m,_,p,x,b,A,C;Qe(i,$o,X=>t(0,n=X)),Qe(i,Ds,X=>t(1,s=X)),Qe(i,Gn,X=>t(4,r=X)),Qe(i,Er,X=>t(27,o=X)),Qe(i,Un,X=>t(28,a=X)),Qe(i,xr,X=>t(29,c=X)),Qe(i,zn,X=>t(30,l=X)),Qe(i,Jn,X=>t(32,g=X)),Qe(i,gr,X=>t(33,v=X)),Qe(i,_r,X=>t(5,m=X)),Qe(i,ns,X=>t(34,_=X)),Qe(i,ts,X=>t(35,p=X)),Qe(i,es,X=>t(36,x=X)),Qe(i,ti,X=>t(6,b=X)),Qe(i,us,X=>t(37,A=X)),Qe(i,Qo,X=>t(7,C=X)),i.$$.on_destroy.push(()=>h());let T,w,L,U,y,N={},K=[],$=[],O=[],j=null,W=null,ee=null,te=null,se=null,ue,le=!1,ce=0;const fe=["#E6B89C","#F0E68C","#CD853F","#8B7355","#A0522D","#DEB887","#D2B48C","#BDB76B","#BC8F8F","#C4A882","#9ACD32","#6B8E23","#556B2F","#8FBC8F","#2E8B57","#708090","#778899","#B0C4DE","#87CEEB","#4682B4"];function B(X,H=0){const Y=b==null?void 0:b.find(he=>he.name===X);return Y!=null&&Y.color?new bt(Y.color):new bt(fe[H%fe.length])}Lr(()=>{oe();const X=Gn.subscribe(Z=>{le&&Z&&Z.length>0&&(Se(Z),be())}),H=Ds.subscribe(Z=>{le&&Z&&Ce()}),Y=ns.subscribe(()=>{le&&q()}),he=es.subscribe(()=>{le&&s&&Ce()}),Q=ts.subscribe(()=>{le&&s&&Ce()}),re=_r.subscribe(Z=>{le&&(Z?Ae():W&&(J(W),W=null))}),Me=gr.subscribe(()=>{le&&m&&Ae()}),Ee=Jn.subscribe(()=>{le&&ye()}),xe=To.subscribe(()=>{le&&be()}),Re=zn.subscribe(()=>{le&&ie()}),Ye=Un.subscribe(()=>{le&&te&&(te.visible=a)}),Fe=xr.subscribe(()=>{le&&te&&(te.material.opacity=c)}),Le=Er.subscribe(()=>{le&&_e()}),ke=us.subscribe(()=>{le&&Se(r)});return()=>{X(),H(),Y(),he(),Q(),re(),Me(),Ee(),xe(),Re(),Ye(),Fe(),Le(),ke(),cancelAnimationFrame(ue),U==null||U.dispose()}});function J(X){X&&(w.remove(X),X.geometry&&X.geometry.dispose(),X.material&&(Array.isArray(X.material)?X.material.forEach(H=>H.dispose()):X.material.dispose()),X.children&&X.children.forEach(H=>J(H)))}function oe(){if(!T)return;w=new Fv,w.background=new bt(1711395),L=new Pn(60,T.clientWidth/T.clientHeight,.1,1e4),L.position.set(100,80,100),U=new th({antialias:!0}),U.setSize(T.clientWidth,T.clientHeight),U.setPixelRatio(window.devicePixelRatio),U.localClippingEnabled=!0,T.appendChild(U.domElement),y=new Xv(L,U.domElement),y.enableDamping=!0,y.dampingFactor=.05;const X=new Vv(4210752,2);w.add(X);const H=new zv(16777215,1.5);H.position.set(100,200,100),w.add(H);const Y=new Hv(200,20,4473924,3355443);w.add(Y);const he=new Gv(50);w.add(he),le=!0,D(),new ResizeObserver(()=>{T&&U&&L&&(L.aspect=T.clientWidth/T.clientHeight,L.updateProjectionMatrix(),U.setSize(T.clientWidth,T.clientHeight))}).observe(T)}function D(){ue=requestAnimationFrame(D),y==null||y.update();const X=Date.now();X-ce>=500&&(ce=X,O.forEach(H=>{H!=null&&H.material&&(H.material.opacity=H.material.opacity>.5?.2:1)})),U==null||U.render(w,L)}function I(X){const H=r;if(!H||H.length===0)return null;const Y=H.map(Ee=>[Ee.longitude,Ee.latitude]),he=Math.min(...Y.map(Ee=>Ee[0])),Q=Math.min(...Y.map(Ee=>Ee[1])),re=(X.longitude-he)*111320*Math.cos(X.latitude*Math.PI/180),Me=(X.latitude-Q)*111320;return{x:re,z:Me}}function be(){$.forEach(he=>{J(he)}),$=[];const X=r;if(!X||X.length<2)return;X.map(he=>[he.longitude,he.latitude]);const H=[];for(let he=1;he<X.length;he++){const Q=Math.sqrt(Math.pow((X[he].longitude-X[he-1].longitude)*111320*Math.cos(X[he].latitude*Math.PI/180),2)+Math.pow((X[he].latitude-X[he-1].latitude)*111320,2));H.push(Q)}const Y=H.reduce((he,Q)=>he+Q,0)/H.length;for(let he=0;he<H.length;he++)if(H[he]>Y*2){const Q=I(X[he]),re=I(X[he+1]);if(!Q||!re)continue;const Me=(Q.x+re.x)/2,Ee=(Q.z+re.z)/2,xe=Math.abs(re.x-Q.x)||5,Re=Math.abs(re.z-Q.z)||5,Ye=50,Fe=new Di(xe+4,Ye,Re+4),Le=new Pr({color:16724787,transparent:!0,opacity:.15,side:cn,depthWrite:!1}),ke=new Yt(Fe,Le);ke.position.set(Me,X[he].elevation-Ye/2,Ee),w.add(ke),$.push(ke);const Z=new Ov(Fe),Be=new Us({color:16724787,transparent:!0,opacity:.6}),qe=new Go(Z,Be);qe.position.copy(ke.position),w.add(qe),$.push(qe)}}function Se(X){if(K.forEach(re=>{J(re)}),K=[],O.forEach(re=>{J(re)}),O=[],!X||X.length===0)return;const H=X.map(re=>[re.longitude,re.latitude,re.elevation]);if(H.length===0)return;new Set(A.map(re=>re.borehole_id));const Y={};A.forEach(re=>{Y[re.borehole_id]=re.warning_level});const he=Math.min(...H.map(re=>re[0])),Q=Math.min(...H.map(re=>re[1]));X.forEach(re=>{const Me=(re.longitude-he)*111320*Math.cos(re.latitude*Math.PI/180),Ee=(re.latitude-Q)*111320;if(!re.layers||re.layers.length===0)return;re.layers.forEach(Fe=>{const Le=(b==null?void 0:b.findIndex(G=>G.name===Fe.lithology_name))||0,ke=B(Fe.lithology_name,Le),Z=Fe.bottom_depth-Fe.top_depth,Be=new Wo(1.2,1.2,Z,16),qe=new Mi({color:ke,transparent:!0,opacity:.9}),He=new Yt(Be,qe);He.position.set(Me,re.elevation-Fe.top_depth-Z/2,Ee),w.add(He),K.push(He)});const xe=Y[re.id];let Re=16777215;xe==="red"?Re=16007990:xe==="orange"?Re=16750592:xe==="blue"&&(Re=2201331);const Ye=new Yt(new Xo(1.5,16,16),new Mi({color:Re,transparent:!!xe,opacity:1}));Ye.position.set(Me,re.elevation,Ee),w.add(Ye),K.push(Ye),xe&&O.push(Ye)})}function Ce(){Object.values(N).forEach(Q=>{J(Q)}),N={};const X=s;if(!(X!=null&&X.surfaces))return;const H=X.grid;if(!H)return;const Y=H.nx,he=H.ny;X.lithologies&&X.lithologies.forEach((Q,re)=>{var G,De;const Me=X.surfaces[Q];if(!(Me!=null&&Me.top)||!(Me!=null&&Me.bottom))return;const Ee=Me.top,xe=Me.bottom,Re=B(Q,re),Ye=x[Q]!==!1,Fe=p[Q]??.7,Le=new rs,ke=new $t,Z=[],Be=[];for(let we=0;we<he;we++)for(let Oe=0;Oe<Y;Oe++){const Xe=Oe/(Y-1)*100,tt=we/(he-1)*100,st=((G=Ee[we])==null?void 0:G[Oe])??0,Ze=((De=xe[we])==null?void 0:De[Oe])??0;Z.push(Xe,st,tt),Z.push(Xe,Ze,tt)}for(let we=0;we<he-1;we++)for(let Oe=0;Oe<Y-1;Oe++){const Xe=(we*Y+Oe)*2,tt=(we*Y+Oe+1)*2,st=((we+1)*Y+Oe)*2,Ze=((we+1)*Y+Oe+1)*2;Be.push(Xe,st,tt),Be.push(tt,st,Ze),Be.push(Xe+1,tt+1,st+1),Be.push(tt+1,Ze+1,st+1)}for(let we=0;we<he-1;we++)for(let Oe=0;Oe<Y-1;Oe++){const Xe=(we*Y+Oe)*2,tt=Xe+1,st=(we*Y+Oe+1)*2,Ze=st+1;Be.push(Xe,st,tt),Be.push(tt,st,Ze)}ke.setAttribute("position",new Dt(Z,3)),ke.setIndex(Be),ke.computeVertexNormals();const qe=new Mi({color:Re,transparent:!0,opacity:Fe,side:cn,clippingPlanes:_.enabled&&j?[j]:[]}),He=new Yt(ke,qe);Le.add(He),Le.visible=Ye,w.add(Le),N[Q]=Le})}function q(){if(_.enabled){const X=_.normal,H=_.position;j=new Qn(new Ie(X[0],X[1],X[2]).normalize(),-(X[0]*H[0]+X[1]*H[1]+X[2]*H[2]))}else j=null;le&&s&&Ce()}function Ae(){W&&(J(W),W=null);const X=m;if(!X)return;const H=X.field||X.grid_values;if(!H)return;const Y=X.grid;if(!Y)return;const he=Y.nx||Y.lon_nx||50,Q=Y.ny||Y.lat_ny||50,re=Y.nz||Y.elev_nz||25,Me=v.mode,Ee=v.colorMin,xe=v.colorMax,Re=Y.elev_min??Y.z_min??0,Fe=((Y.elev_max??Y.z_max??100)-Re)/(re-1||1),Le=100/Math.max(he,Q);if(Me==="voxel"){const ke=new rs,Z=he*Q*re,Be=Math.max(1,Math.floor(Z/3e3));let qe=0;for(let He=0;He<re;He+=1)for(let G=0;G<Q;G+=1)for(let De=0;De<he;De+=1){if(qe++%Be!==0&&Be>1)continue;const we=He*Q*he+G*he+De;if(we>=H.length)continue;const Oe=H[we];if(Oe==null||Number.isNaN(Oe))continue;const Xe=Cc(Oe,Ee,xe),tt=De/(he-1||1)*100,st=G/(Q-1||1)*100,Ze=Re+He*Fe,ot=new Di(Le*.8,Math.abs(Fe*.8)||.5,Le*.8),Je=new Pr({color:new bt(Xe[0],Xe[1],Xe[2]),transparent:!0,opacity:.7}),at=new Yt(ot,Je);at.position.set(tt,Ze,st),ke.add(at)}W=ke,w.add(ke)}else{const ke=v.isosurfaceValue,Z=[],Be=[],qe=[];let He=0;for(let we=0;we<re-1;we++)for(let Oe=0;Oe<Q-1;Oe++)for(let Xe=0;Xe<he-1;Xe++){const st=[[Xe,Oe,we],[Xe+1,Oe,we],[Xe+1,Oe+1,we],[Xe,Oe+1,we],[Xe,Oe,we+1],[Xe+1,Oe,we+1],[Xe+1,Oe+1,we+1],[Xe,Oe+1,we+1]].map(([Lt,Ut,An])=>{const on=An*Q*he+Ut*he+Lt;return on<H.length?H[on]:0}),ot=st.map(Lt=>(Lt||0)>=ke).filter(Lt=>Lt).length;if(ot===0||ot===8)continue;const Je=(Xe+.5)/(he-1)*100,at=(Oe+.5)/(Q-1)*100,ht=Re+(we+.5)*Fe,Gt=st.reduce((Lt,Ut)=>Lt+Ut,0)/8,Jt=Cc(Gt,Ee,xe),wt=Le*.9,Ct=Math.max(Math.abs(Fe*.9),wt*.2);Z.push(Je-wt/2,ht-Ct/2,at-wt/2,Je+wt/2,ht-Ct/2,at-wt/2,Je+wt/2,ht-Ct/2,at+wt/2,Je-wt/2,ht-Ct/2,at+wt/2,Je-wt/2,ht+Ct/2,at-wt/2,Je+wt/2,ht+Ct/2,at-wt/2,Je+wt/2,ht+Ct/2,at+wt/2,Je-wt/2,ht+Ct/2,at+wt/2);for(let Lt=0;Lt<8;Lt++)qe.push(Jt[0],Jt[1],Jt[2]);Be.push(He,He+1,He+2,He,He+2,He+3,He+4,He+6,He+5,He+4,He+7,He+6,He,He+4,He+5,He,He+5,He+1,He+1,He+5,He+6,He+1,He+6,He+2,He+2,He+6,He+7,He+2,He+7,He+3,He+3,He+7,He+4,He+3,He+4,He),He+=8}if(Z.length===0)return;const G=new $t;G.setAttribute("position",new Dt(Z,3)),G.setAttribute("color",new Dt(qe,3)),G.setIndex(Be),G.computeVertexNormals();const De=new Mi({vertexColors:!0,transparent:!0,opacity:.85,side:cn});W=new Yt(G,De),w.add(W)}}function ye(){ee&&(J(ee),ee=null);const X=g;if(!X||!X.visible||!X.orthoImage&&!X.demImage)return;const H=100;if(X.demImage){const Y=X.demImage,he=document.createElement("canvas");he.width=64,he.height=64;const Q=he.getContext("2d");Q.drawImage(Y,0,0,64,64);try{const re=Q.getImageData(0,0,64,64).data,Me=32,Ee=32,xe=new ms(H,H,Me,Ee),Re=xe.attributes.position;for(let ke=0;ke<=Ee;ke++)for(let Z=0;Z<=Me;Z++){const Be=Math.floor(Z/Me*63),He=(Math.floor(ke/Ee*63)*64+Be)*4,De=(re[He]+re[He+1]+re[He+2])/3/255*30-5;Re.setZ(ke*(Me+1)+Z,De)}xe.computeVertexNormals();const Ye={transparent:!0,opacity:X.opacity,side:cn};if(X.orthoImage){const ke=new rn(X.orthoImage);ke.needsUpdate=!0,Ye.map=ke}else Ye.color=8956518;const Fe=new Mi(Ye),Le=new Yt(xe,Fe);Le.rotation.x=-Math.PI/2,Le.position.y=0,ee=Le,w.add(Le);return}catch(re){console.warn("DEM texture load failed:",re)}}if(X.orthoImage){const Y=new rn(X.orthoImage);Y.needsUpdate=!0;const he=new ms(H,H),Q=new Mi({map:Y,transparent:!0,opacity:X.opacity,side:cn}),re=new Yt(he,Q);re.rotation.x=-Math.PI/2,re.position.y=.01,ee=re,w.add(re)}}async function Ne(){if(!(!s||!(u!=null&&u.runId)))try{const X=await ft.post(`/projects/modeling/runs/${u==null?void 0:u.runId}/volumes-all`);it($o,n=X,n)}catch(X){console.warn("加载体积卡片失败:",X)}}function ae(X,H,Y){const he=r;if(!he||he.length===0)return null;const Q=Math.min(...he.map(Re=>Re.longitude)),re=Math.min(...he.map(Re=>Re.latitude)),Me=he[0].latitude,Ee=(X-Q)*111320*Math.cos(Me*Math.PI/180),xe=(H-re)*111320;return{x:Ee,y:Y,z:xe}}function ie(){var He;te&&(J(te),te=null);const X=l;if(!(X!=null&&X.water_level_grid))return;const H=X.grid,Y=H.nx,he=H.ny,Q=X.water_level_grid,re=X.water_level_min,Me=X.water_level_max,Ee=r;if(!Ee||Ee.length===0)return;const xe=H.lon_min,Re=H.lat_min,Ye=H.lon_max-xe,Fe=H.lat_max-Re;Ee[0].latitude;const Le=[],ke=[],Z=[];for(let G=0;G<he;G++)for(let De=0;De<Y;De++){const we=Y>1?De/(Y-1):.5,Oe=he>1?G/(he-1):.5,Xe=xe+we*Ye,tt=Re+Oe*Fe,st=((He=Q[G])==null?void 0:He[De])??(re+Me)/2,Ze=ae(Xe,tt,st);if(!Ze)continue;Le.push(Ze.x,Ze.y,Ze.z);const ot=qv(st,re,Me);ke.push(ot[0],ot[1],ot[2])}for(let G=0;G<he-1;G++)for(let De=0;De<Y-1;De++){const we=G*Y+De,Oe=G*Y+De+1,Xe=(G+1)*Y+De,tt=(G+1)*Y+De+1;Z.push(we,Xe,Oe),Z.push(Oe,Xe,tt)}const Be=new $t;Be.setAttribute("position",new Dt(Le,3)),Be.setAttribute("color",new Dt(ke,3)),Be.setIndex(Z),Be.computeVertexNormals();const qe=new Mi({vertexColors:!0,transparent:!0,opacity:c,side:cn,depthWrite:!1});te=new Yt(Be,qe),te.visible=a,te.renderOrder=10,w.add(te)}function _e(){se&&(J(se),se=null);const X=o;if(!X||X.length<2)return;const H=r;if(!H||H.length===0)return;X.sort((re,Me)=>{const Ee=(re.longitude-H[0].longitude)**2+(re.latitude-H[0].latitude)**2,xe=(Me.longitude-H[0].longitude)**2+(Me.latitude-H[0].latitude)**2;return Ee-xe});const Y=[];for(const re of X){const Me=ae(re.longitude,re.latitude,re.elevation);Me&&Y.push(Me.x,Me.y,Me.z)}if(Y.length<6)return;const he=new $t;he.setAttribute("position",new Dt(Y,3));const Q=new Us({color:16777215,linewidth:2,transparent:!0,opacity:.9});se=new nh(he,Q),se.renderOrder=20,w.add(se)}let k;$i.subscribe(X=>{d(t(3,k=X))});const P=()=>it(Qo,C=!C,C),ve=(X,H)=>H.name===X.lithology_name;function Te(X){ni[X?"unshift":"push"](()=>{T=X,t(2,T)})}return i.$$.update=()=>{i.$$.dirty[0]&3&&s&&!n&&Ne()},[n,s,T,k,r,m,b,C,P,ve,Te]}class Kv extends pn{constructor(e){super(),mn(this,e,Yv,jv,dn,{},null,[-1,-1])}}function Rc(i,e,t){const n=i.slice();return n[49]=e[t],n}function Pc(i,e,t){const n=i.slice();return n[52]=e[t],n}function Lc(i,e,t){const n=i.slice();return n[55]=e[t],n}function Zv(i){let e,t,n,s="变异函数模型",r,o,a,c="球状模型",l,u="指数模型",h,d="高斯模型",g,v,m,_,p,x,b,A="半变异函数拟合预览",C,T,w,L,U,y="刷新预览",N,K,$="各向异性",O,j,W,ee,te="主轴方向(°)",se,ue,le,ce,fe,B="各向异性比",J,oe,D,I,be="网格分辨率",Se,Ce,q,Ae,ye="NX",Ne,ae,ie,_e,k,P="NY",ve,Te,X,H,Y,he="NZ",Q,re,Me,Ee,xe="开始建模",Re,Ye,Fe=!i[4]&&Dc(i);return{c(){e=M("div"),t=M("div"),n=M("label"),n.textContent=s,r=V(),o=M("select"),a=M("option"),a.textContent=c,l=M("option"),l.textContent=u,h=M("option"),h.textContent=d,g=V(),v=M("label"),m=M("input"),_=pe(`
                自动拟合参数`),p=V(),Fe&&Fe.c(),x=V(),b=M("h4"),b.textContent=A,C=V(),T=M("div"),w=M("canvas"),L=V(),U=M("button"),U.textContent=y,N=V(),K=M("h4"),K.textContent=$,O=V(),j=M("div"),W=M("div"),ee=M("label"),ee.textContent=te,se=V(),ue=M("input"),le=V(),ce=M("div"),fe=M("label"),fe.textContent=B,J=V(),oe=M("input"),D=V(),I=M("h4"),I.textContent=be,Se=V(),Ce=M("div"),q=M("div"),Ae=M("label"),Ae.textContent=ye,Ne=V(),ae=M("input"),ie=V(),_e=M("div"),k=M("label"),k.textContent=P,ve=V(),Te=M("input"),X=V(),H=M("div"),Y=M("label"),Y.textContent=he,Q=V(),re=M("input"),Me=V(),Ee=M("button"),Ee.textContent=xe,this.h()},l(Le){e=E(Le,"DIV",{class:!0});var ke=F(e);t=E(ke,"DIV",{class:!0});var Z=F(t);n=E(Z,"LABEL",{"data-svelte-h":!0}),Pe(n)!=="svelte-1jgf9ft"&&(n.textContent=s),r=z(Z),o=E(Z,"SELECT",{});var Be=F(o);a=E(Be,"OPTION",{"data-svelte-h":!0}),Pe(a)!=="svelte-17ym7v6"&&(a.textContent=c),l=E(Be,"OPTION",{"data-svelte-h":!0}),Pe(l)!=="svelte-bzk8zo"&&(l.textContent=u),h=E(Be,"OPTION",{"data-svelte-h":!0}),Pe(h)!=="svelte-1iqrdsw"&&(h.textContent=d),Be.forEach(S),Z.forEach(S),g=z(ke),v=E(ke,"LABEL",{class:!0});var qe=F(v);m=E(qe,"INPUT",{type:!0}),_=de(qe,`
                自动拟合参数`),qe.forEach(S),p=z(ke),Fe&&Fe.l(ke),x=z(ke),b=E(ke,"H4",{style:!0,"data-svelte-h":!0}),Pe(b)!=="svelte-3v99de"&&(b.textContent=A),C=z(ke),T=E(ke,"DIV",{class:!0});var He=F(T);w=E(He,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),F(w).forEach(S),He.forEach(S),L=z(ke),U=E(ke,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),Pe(U)!=="svelte-1ik1azm"&&(U.textContent=y),N=z(ke),K=E(ke,"H4",{style:!0,"data-svelte-h":!0}),Pe(K)!=="svelte-1bmbghc"&&(K.textContent=$),O=z(ke),j=E(ke,"DIV",{class:!0});var G=F(j);W=E(G,"DIV",{class:!0});var De=F(W);ee=E(De,"LABEL",{"data-svelte-h":!0}),Pe(ee)!=="svelte-121beyc"&&(ee.textContent=te),se=z(De),ue=E(De,"INPUT",{type:!0,step:!0}),De.forEach(S),le=z(G),ce=E(G,"DIV",{class:!0});var we=F(ce);fe=E(we,"LABEL",{"data-svelte-h":!0}),Pe(fe)!=="svelte-yzj6ss"&&(fe.textContent=B),J=z(we),oe=E(we,"INPUT",{type:!0,step:!0,min:!0}),we.forEach(S),G.forEach(S),D=z(ke),I=E(ke,"H4",{style:!0,"data-svelte-h":!0}),Pe(I)!=="svelte-z4z6jw"&&(I.textContent=be),Se=z(ke),Ce=E(ke,"DIV",{class:!0});var Oe=F(Ce);q=E(Oe,"DIV",{class:!0});var Xe=F(q);Ae=E(Xe,"LABEL",{"data-svelte-h":!0}),Pe(Ae)!=="svelte-kuum7m"&&(Ae.textContent=ye),Ne=z(Xe),ae=E(Xe,"INPUT",{type:!0,min:!0,max:!0}),Xe.forEach(S),ie=z(Oe),_e=E(Oe,"DIV",{class:!0});var tt=F(_e);k=E(tt,"LABEL",{"data-svelte-h":!0}),Pe(k)!=="svelte-1kjsuy3"&&(k.textContent=P),ve=z(tt),Te=E(tt,"INPUT",{type:!0,min:!0,max:!0}),tt.forEach(S),X=z(Oe),H=E(Oe,"DIV",{class:!0});var st=F(H);Y=E(st,"LABEL",{"data-svelte-h":!0}),Pe(Y)!=="svelte-1vblzhc"&&(Y.textContent=he),Q=z(st),re=E(st,"INPUT",{type:!0,min:!0,max:!0}),st.forEach(S),Oe.forEach(S),Me=z(ke),Ee=E(ke,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),Pe(Ee)!=="svelte-1rcbday"&&(Ee.textContent=xe),ke.forEach(S),this.h()},h(){a.__value="spherical",Ke(a,a.__value),l.__value="exponential",Ke(l,l.__value),h.__value="gaussian",Ke(h,h.__value),i[0]===void 0&&hn(()=>i[27].call(o)),R(t,"class","form-group"),R(m,"type","checkbox"),R(v,"class","checkbox-label"),me(b,"font-size","13px"),me(b,"margin","12px 0 8px"),R(w,"id","variogramCanvas"),R(w,"width","340"),R(w,"height","200"),R(w,"class","svelte-z3j894"),R(T,"class","variogram-preview svelte-z3j894"),R(U,"class","btn-secondary btn-sm"),me(U,"width","100%"),me(U,"margin-top","4px"),me(K,"font-size","13px"),me(K,"margin","12px 0 8px"),R(ue,"type","number"),R(ue,"step","1"),R(W,"class","form-group"),R(oe,"type","number"),R(oe,"step","0.1"),R(oe,"min","1"),R(ce,"class","form-group"),R(j,"class","form-row"),me(I,"font-size","13px"),me(I,"margin","12px 0 8px"),R(ae,"type","number"),R(ae,"min","5"),R(ae,"max","100"),R(q,"class","form-group"),R(Te,"type","number"),R(Te,"min","5"),R(Te,"max","100"),R(_e,"class","form-group"),R(re,"type","number"),R(re,"min","5"),R(re,"max","50"),R(H,"class","form-group"),R(Ce,"class","form-row"),R(Ee,"class","btn-primary"),me(Ee,"width","100%"),me(Ee,"margin-top","12px"),R(e,"class","model-params")},m(Le,ke){ge(Le,e,ke),f(e,t),f(t,n),f(t,r),f(t,o),f(o,a),f(o,l),f(o,h),Tt(o,i[0],!0),f(e,g),f(e,v),f(v,m),m.checked=i[4],f(v,_),f(e,p),Fe&&Fe.m(e,null),f(e,x),f(e,b),f(e,C),f(e,T),f(T,w),i[32](w),f(e,L),f(e,U),f(e,N),f(e,K),f(e,O),f(e,j),f(j,W),f(W,ee),f(W,se),f(W,ue),Ke(ue,i[6]),f(j,le),f(j,ce),f(ce,fe),f(ce,J),f(ce,oe),Ke(oe,i[7]),f(e,D),f(e,I),f(e,Se),f(e,Ce),f(Ce,q),f(q,Ae),f(q,Ne),f(q,ae),Ke(ae,i[8]),f(Ce,ie),f(Ce,_e),f(_e,k),f(_e,ve),f(_e,Te),Ke(Te,i[9]),f(Ce,X),f(Ce,H),f(H,Y),f(H,Q),f(H,re),Ke(re,i[10]),f(e,Me),f(e,Ee),Re||(Ye=[ze(o,"change",i[27]),ze(m,"change",i[28]),ze(U,"click",i[20]),ze(ue,"input",i[33]),ze(oe,"input",i[34]),ze(ae,"input",i[35]),ze(Te,"input",i[36]),ze(re,"input",i[37]),ze(Ee,"click",i[21])],Re=!0)},p(Le,ke){ke[0]&1&&Tt(o,Le[0]),ke[0]&16&&(m.checked=Le[4]),Le[4]?Fe&&(Fe.d(1),Fe=null):Fe?Fe.p(Le,ke):(Fe=Dc(Le),Fe.c(),Fe.m(e,x)),ke[0]&64&&ct(ue.value)!==Le[6]&&Ke(ue,Le[6]),ke[0]&128&&ct(oe.value)!==Le[7]&&Ke(oe,Le[7]),ke[0]&256&&ct(ae.value)!==Le[8]&&Ke(ae,Le[8]),ke[0]&512&&ct(Te.value)!==Le[9]&&Ke(Te,Le[9]),ke[0]&1024&&ct(re.value)!==Le[10]&&Ke(re,Le[10])},d(Le){Le&&S(e),Fe&&Fe.d(),i[32](null),Re=!1,At(Ye)}}}function Jv(i){let e,t,n,s=i[14].progress.toFixed(0)+"",r,o,a,c,l;return{c(){e=M("div"),t=M("p"),n=pe("建模中... "),r=pe(s),o=pe("%"),a=V(),c=M("div"),l=M("div"),this.h()},l(u){e=E(u,"DIV",{class:!0});var h=F(e);t=E(h,"P",{class:!0});var d=F(t);n=de(d,"建模中... "),r=de(d,s),o=de(d,"%"),d.forEach(S),a=z(h),c=E(h,"DIV",{class:!0});var g=F(c);l=E(g,"DIV",{class:!0,style:!0}),F(l).forEach(S),g.forEach(S),h.forEach(S),this.h()},h(){R(t,"class","svelte-z3j894"),R(l,"class","progress-bar-fill"),me(l,"width",i[14].progress+"%"),R(c,"class","progress-bar"),R(e,"class","progress-section svelte-z3j894")},m(u,h){ge(u,e,h),f(e,t),f(t,n),f(t,r),f(t,o),f(e,a),f(e,c),f(c,l)},p(u,h){h[0]&16384&&s!==(s=u[14].progress.toFixed(0)+"")&&Ve(r,s),h[0]&16384&&me(l,"width",u[14].progress+"%")},d(u){u&&S(e)}}}function Dc(i){let e,t,n,s="变程",r,o,a,c,l,u="基台值",h,d,g,v,m,_="块金值",p,x,b,A;return{c(){e=M("div"),t=M("div"),n=M("label"),n.textContent=s,r=V(),o=M("input"),a=V(),c=M("div"),l=M("label"),l.textContent=u,h=V(),d=M("input"),g=V(),v=M("div"),m=M("label"),m.textContent=_,p=V(),x=M("input"),this.h()},l(C){e=E(C,"DIV",{class:!0});var T=F(e);t=E(T,"DIV",{class:!0});var w=F(t);n=E(w,"LABEL",{"data-svelte-h":!0}),Pe(n)!=="svelte-s6abzb"&&(n.textContent=s),r=z(w),o=E(w,"INPUT",{type:!0,step:!0}),w.forEach(S),a=z(T),c=E(T,"DIV",{class:!0});var L=F(c);l=E(L,"LABEL",{"data-svelte-h":!0}),Pe(l)!=="svelte-1eshi8q"&&(l.textContent=u),h=z(L),d=E(L,"INPUT",{type:!0,step:!0}),L.forEach(S),T.forEach(S),g=z(C),v=E(C,"DIV",{class:!0});var U=F(v);m=E(U,"LABEL",{"data-svelte-h":!0}),Pe(m)!=="svelte-olodes"&&(m.textContent=_),p=z(U),x=E(U,"INPUT",{type:!0,step:!0}),U.forEach(S),this.h()},h(){R(o,"type","number"),R(o,"step","0.001"),R(t,"class","form-group"),R(d,"type","number"),R(d,"step","0.001"),R(c,"class","form-group"),R(e,"class","form-row"),R(x,"type","number"),R(x,"step","0.001"),R(v,"class","form-group")},m(C,T){ge(C,e,T),f(e,t),f(t,n),f(t,r),f(t,o),Ke(o,i[1]),f(e,a),f(e,c),f(c,l),f(c,h),f(c,d),Ke(d,i[2]),ge(C,g,T),ge(C,v,T),f(v,m),f(v,p),f(v,x),Ke(x,i[3]),b||(A=[ze(o,"input",i[29]),ze(o,"input",i[20]),ze(d,"input",i[30]),ze(d,"input",i[20]),ze(x,"input",i[31]),ze(x,"input",i[20])],b=!0)},p(C,T){T[0]&2&&ct(o.value)!==C[1]&&Ke(o,C[1]),T[0]&4&&ct(d.value)!==C[2]&&Ke(d,C[2]),T[0]&8&&ct(x.value)!==C[3]&&Ke(x,C[3])},d(C){C&&(S(e),S(g),S(v)),b=!1,At(A)}}}function Ic(i){let e,t,n,s="图层控制",r,o,a,c,l,u="切面",h,d,g,v,m,_,p,x,b,A,C,T="体积估算",w,L,U,y,N="选择地层",K,$,O,j,W,ee,te,se,ue,le=et(i[17].lithologies||[]),ce=[];for(let I=0;I<le.length;I+=1)ce[I]=Nc(Lc(i,le,I));let fe=i[19].enabled&&Uc(i),B=et(i[17].lithologies||[]),J=[];for(let I=0;I<B.length;I+=1)J[I]=Fc(Pc(i,B,I));let oe=i[13]&&Oc(i),D=i[12].length>0&&kc(i);return{c(){e=M("hr"),t=V(),n=M("h4"),n.textContent=s,r=V();for(let I=0;I<ce.length;I+=1)ce[I].c();o=V(),a=M("hr"),c=V(),l=M("h4"),l.textContent=u,h=V(),d=M("div"),g=M("label"),v=M("input"),_=pe(`
                启用切面`),p=V(),fe&&fe.c(),x=V(),b=M("hr"),A=V(),C=M("h4"),C.textContent=T,w=V(),L=M("div"),U=M("select"),y=M("option"),y.textContent=N;for(let I=0;I<J.length;I+=1)J[I].c();K=V(),$=M("button"),O=pe("计算体积"),W=V(),oe&&oe.c(),ee=V(),D&&D.c(),te=It(),this.h()},l(I){e=E(I,"HR",{style:!0}),t=z(I),n=E(I,"H4",{style:!0,"data-svelte-h":!0}),Pe(n)!=="svelte-10xewq4"&&(n.textContent=s),r=z(I);for(let ye=0;ye<ce.length;ye+=1)ce[ye].l(I);o=z(I),a=E(I,"HR",{style:!0}),c=z(I),l=E(I,"H4",{style:!0,"data-svelte-h":!0}),Pe(l)!=="svelte-vflg5w"&&(l.textContent=u),h=z(I),d=E(I,"DIV",{class:!0});var be=F(d);g=E(be,"LABEL",{class:!0});var Se=F(g);v=E(Se,"INPUT",{type:!0}),_=de(Se,`
                启用切面`),Se.forEach(S),be.forEach(S),p=z(I),fe&&fe.l(I),x=z(I),b=E(I,"HR",{style:!0}),A=z(I),C=E(I,"H4",{style:!0,"data-svelte-h":!0}),Pe(C)!=="svelte-5dpzi"&&(C.textContent=T),w=z(I),L=E(I,"DIV",{class:!0});var Ce=F(L);U=E(Ce,"SELECT",{});var q=F(U);y=E(q,"OPTION",{"data-svelte-h":!0}),Pe(y)!=="svelte-e12hhe"&&(y.textContent=N);for(let ye=0;ye<J.length;ye+=1)J[ye].l(q);q.forEach(S),Ce.forEach(S),K=z(I),$=E(I,"BUTTON",{class:!0,style:!0});var Ae=F($);O=de(Ae,"计算体积"),Ae.forEach(S),W=z(I),oe&&oe.l(I),ee=z(I),D&&D.l(I),te=It(),this.h()},h(){me(e,"border-color","var(--border)"),me(e,"margin","12px 0"),me(n,"font-size","13px"),me(n,"margin-bottom","8px"),me(a,"border-color","var(--border)"),me(a,"margin","12px 0"),me(l,"font-size","13px"),me(l,"margin-bottom","8px"),R(v,"type","checkbox"),v.checked=m=i[19].enabled,R(g,"class","checkbox-label"),R(d,"class","form-group"),me(b,"border-color","var(--border)"),me(b,"margin","12px 0"),me(C,"font-size","13px"),me(C,"margin-bottom","8px"),y.__value="",Ke(y,y.__value),i[11]===void 0&&hn(()=>i[43].call(U)),R(L,"class","form-group"),R($,"class","btn-primary btn-sm"),$.disabled=j=!i[11],me($,"width","100%")},m(I,be){ge(I,e,be),ge(I,t,be),ge(I,n,be),ge(I,r,be);for(let Se=0;Se<ce.length;Se+=1)ce[Se]&&ce[Se].m(I,be);ge(I,o,be),ge(I,a,be),ge(I,c,be),ge(I,l,be),ge(I,h,be),ge(I,d,be),f(d,g),f(g,v),f(g,_),ge(I,p,be),fe&&fe.m(I,be),ge(I,x,be),ge(I,b,be),ge(I,A,be),ge(I,C,be),ge(I,w,be),ge(I,L,be),f(L,U),f(U,y);for(let Se=0;Se<J.length;Se+=1)J[Se]&&J[Se].m(U,null);Tt(U,i[11],!0),ge(I,K,be),ge(I,$,be),f($,O),ge(I,W,be),oe&&oe.m(I,be),ge(I,ee,be),D&&D.m(I,be),ge(I,te,be),se||(ue=[ze(v,"change",i[41]),ze(U,"change",i[43]),ze($,"click",i[23])],se=!0)},p(I,be){if(be[0]&491520){le=et(I[17].lithologies||[]);let Se;for(Se=0;Se<le.length;Se+=1){const Ce=Lc(I,le,Se);ce[Se]?ce[Se].p(Ce,be):(ce[Se]=Nc(Ce),ce[Se].c(),ce[Se].m(o.parentNode,o))}for(;Se<ce.length;Se+=1)ce[Se].d(1);ce.length=le.length}if(be[0]&524288&&m!==(m=I[19].enabled)&&(v.checked=m),I[19].enabled?fe?fe.p(I,be):(fe=Uc(I),fe.c(),fe.m(x.parentNode,x)):fe&&(fe.d(1),fe=null),be[0]&131072){B=et(I[17].lithologies||[]);let Se;for(Se=0;Se<B.length;Se+=1){const Ce=Pc(I,B,Se);J[Se]?J[Se].p(Ce,be):(J[Se]=Fc(Ce),J[Se].c(),J[Se].m(U,null))}for(;Se<J.length;Se+=1)J[Se].d(1);J.length=B.length}be[0]&133120&&Tt(U,I[11]),be[0]&133120&&j!==(j=!I[11])&&($.disabled=j),I[13]?oe?oe.p(I,be):(oe=Oc(I),oe.c(),oe.m(ee.parentNode,ee)):oe&&(oe.d(1),oe=null),I[12].length>0?D?D.p(I,be):(D=kc(I),D.c(),D.m(te.parentNode,te)):D&&(D.d(1),D=null)},d(I){I&&(S(e),S(t),S(n),S(r),S(o),S(a),S(c),S(l),S(h),S(d),S(p),S(x),S(b),S(A),S(C),S(w),S(L),S(K),S($),S(W),S(ee),S(te)),Et(ce,I),fe&&fe.d(I),Et(J,I),oe&&oe.d(I),D&&D.d(I),se=!1,At(ue)}}}function Nc(i){let e,t,n,s,r,o,a,c=i[55]+"",l,u,h,d,g="透明度",v,m,_,p,x;function b(){return i[38](i[55])}function A(...T){return i[39](i[55],...T)}function C(...T){return i[40](i[55],...T)}return{c(){e=M("div"),t=M("label"),n=M("input"),r=V(),o=M("span"),a=V(),l=pe(c),u=V(),h=M("div"),d=M("span"),d.textContent=g,v=V(),m=M("input"),this.h()},l(T){e=E(T,"DIV",{class:!0});var w=F(e);t=E(w,"LABEL",{class:!0});var L=F(t);n=E(L,"INPUT",{type:!0}),r=z(L),o=E(L,"SPAN",{class:!0,style:!0}),F(o).forEach(S),a=z(L),l=de(L,c),L.forEach(S),u=z(w),h=E(w,"DIV",{class:!0});var U=F(h);d=E(U,"SPAN",{style:!0,"data-svelte-h":!0}),Pe(d)!=="svelte-11ptxvf"&&(d.textContent=g),v=z(U),m=E(U,"INPUT",{type:!0,min:!0,max:!0,class:!0}),U.forEach(S),w.forEach(S),this.h()},h(){var T,w;R(n,"type","checkbox"),n.checked=s=i[16][i[55]]!==!1,R(o,"class","color-swatch"),me(o,"background",((w=(T=i[18])==null?void 0:T.find(A))==null?void 0:w.color)||"#888"),R(t,"class","checkbox-label"),me(d,"font-size","10px"),me(d,"color","var(--text-muted)"),R(m,"type","range"),m.value=_=i[15][i[55]]??70,R(m,"min","0"),R(m,"max","100"),R(m,"class","svelte-z3j894"),R(h,"class","opacity-control svelte-z3j894"),R(e,"class","layer-control svelte-z3j894")},m(T,w){ge(T,e,w),f(e,t),f(t,n),f(t,r),f(t,o),f(t,a),f(t,l),f(e,u),f(e,h),f(h,d),f(h,v),f(h,m),p||(x=[ze(n,"change",b),ze(m,"input",C)],p=!0)},p(T,w){var L,U;i=T,w[0]&196608&&s!==(s=i[16][i[55]]!==!1)&&(n.checked=s),w[0]&393216&&me(o,"background",((U=(L=i[18])==null?void 0:L.find(A))==null?void 0:U.color)||"#888"),w[0]&131072&&c!==(c=i[55]+"")&&Ve(l,c),w[0]&163840&&_!==(_=i[15][i[55]]??70)&&(m.value=_)},d(T){T&&S(e),p=!1,At(x)}}}function Uc(i){let e,t,n="切面位置",s,r,o,a,c;return{c(){e=M("div"),t=M("label"),t.textContent=n,s=V(),r=M("input"),this.h()},l(l){e=E(l,"DIV",{class:!0});var u=F(e);t=E(u,"LABEL",{"data-svelte-h":!0}),Pe(t)!=="svelte-1ya7iue"&&(t.textContent=n),s=z(u),r=E(u,"INPUT",{type:!0,min:!0,max:!0}),u.forEach(S),this.h()},h(){R(r,"type","range"),r.value=o=i[19].position[0],R(r,"min","-100"),R(r,"max","100"),R(e,"class","form-group")},m(l,u){ge(l,e,u),f(e,t),f(e,s),f(e,r),a||(c=ze(r,"input",i[42]),a=!0)},p(l,u){u[0]&524288&&o!==(o=l[19].position[0])&&(r.value=o)},d(l){l&&S(e),a=!1,c()}}}function Fc(i){let e,t=i[52]+"",n,s;return{c(){e=M("option"),n=pe(t),this.h()},l(r){e=E(r,"OPTION",{});var o=F(e);n=de(o,t),o.forEach(S),this.h()},h(){e.__value=s=i[52],Ke(e,e.__value)},m(r,o){ge(r,e,o),f(e,n)},p(r,o){o[0]&131072&&t!==(t=r[52]+"")&&Ve(n,t),o[0]&131072&&s!==(s=r[52])&&(e.__value=s,Ke(e,e.__value))},d(r){r&&S(e)}}}function Oc(i){let e,t,n=i[13].lithology_name+"",s,r,o,a=i[13].volume.toFixed(1)+"",c,l;return{c(){e=M("div"),t=M("p"),s=pe(n),r=V(),o=M("p"),c=pe(a),l=pe(" m³"),this.h()},l(u){e=E(u,"DIV",{class:!0});var h=F(e);t=E(h,"P",{});var d=F(t);s=de(d,n),d.forEach(S),r=z(h),o=E(h,"P",{class:!0});var g=F(o);c=de(g,a),l=de(g," m³"),g.forEach(S),h.forEach(S),this.h()},h(){R(o,"class","volume-value svelte-z3j894"),R(e,"class","volume-result svelte-z3j894")},m(u,h){ge(u,e,h),f(e,t),f(t,s),f(e,r),f(e,o),f(o,c),f(o,l)},p(u,h){h[0]&8192&&n!==(n=u[13].lithology_name+"")&&Ve(s,n),h[0]&8192&&a!==(a=u[13].volume.toFixed(1)+"")&&Ve(c,a)},d(u){u&&S(e)}}}function kc(i){let e,t,n,s="历史建模",r,o,a=et(i[12].slice(0,5)),c=[];for(let l=0;l<a.length;l+=1)c[l]=Bc(Rc(i,a,l));return{c(){e=M("hr"),t=V(),n=M("h4"),n.textContent=s,r=V();for(let l=0;l<c.length;l+=1)c[l].c();o=It(),this.h()},l(l){e=E(l,"HR",{style:!0}),t=z(l),n=E(l,"H4",{style:!0,"data-svelte-h":!0}),Pe(n)!=="svelte-1xvbgi4"&&(n.textContent=s),r=z(l);for(let u=0;u<c.length;u+=1)c[u].l(l);o=It(),this.h()},h(){me(e,"border-color","var(--border)"),me(e,"margin","12px 0"),me(n,"font-size","13px"),me(n,"margin-bottom","8px")},m(l,u){ge(l,e,u),ge(l,t,u),ge(l,n,u),ge(l,r,u);for(let h=0;h<c.length;h+=1)c[h]&&c[h].m(l,u);ge(l,o,u)},p(l,u){if(u[0]&4198400){a=et(l[12].slice(0,5));let h;for(h=0;h<a.length;h+=1){const d=Rc(l,a,h);c[h]?c[h].p(d,u):(c[h]=Bc(d),c[h].c(),c[h].m(o.parentNode,o))}for(;h<c.length;h+=1)c[h].d(1);c.length=a.length}},d(l){l&&(S(e),S(t),S(n),S(r),S(o)),Et(c,l)}}}function Bc(i){let e,t,n=i[49].status+"",s,r,o,a,c=i[49].variogram_model+"",l,u,h=i[49].grid_nx+"",d,g,v=i[49].grid_ny+"",m,_,p=i[49].grid_nz+"",x,b,A,C;function T(){return i[44](i[49])}return{c(){e=M("div"),t=M("span"),s=pe(n),o=V(),a=M("span"),l=pe(c),u=V(),d=pe(h),g=pe("x"),m=pe(v),_=pe("x"),x=pe(p),b=V(),this.h()},l(w){e=E(w,"DIV",{class:!0});var L=F(e);t=E(L,"SPAN",{class:!0});var U=F(t);s=de(U,n),U.forEach(S),o=z(L),a=E(L,"SPAN",{style:!0});var y=F(a);l=de(y,c),u=z(y),d=de(y,h),g=de(y,"x"),m=de(y,v),_=de(y,"x"),x=de(y,p),y.forEach(S),b=z(L),L.forEach(S),this.h()},h(){R(t,"class",r="badge badge-"+(i[49].status==="completed"?"success":i[49].status==="failed"?"danger":"warning")),me(a,"font-size","11px"),R(e,"class","run-item svelte-z3j894")},m(w,L){ge(w,e,L),f(e,t),f(t,s),f(e,o),f(e,a),f(a,l),f(a,u),f(a,d),f(a,g),f(a,m),f(a,_),f(a,x),f(e,b),A||(C=ze(e,"click",T),A=!0)},p(w,L){i=w,L[0]&4096&&n!==(n=i[49].status+"")&&Ve(s,n),L[0]&4096&&r!==(r="badge badge-"+(i[49].status==="completed"?"success":i[49].status==="failed"?"danger":"warning"))&&R(t,"class",r),L[0]&4096&&c!==(c=i[49].variogram_model+"")&&Ve(l,c),L[0]&4096&&h!==(h=i[49].grid_nx+"")&&Ve(d,h),L[0]&4096&&v!==(v=i[49].grid_ny+"")&&Ve(m,v),L[0]&4096&&p!==(p=i[49].grid_nz+"")&&Ve(x,p)},d(w){w&&S(e),A=!1,C()}}}function Qv(i){let e,t,n="三维建模",s,r,o="刷新",a,c,l,u,h;function d(_,p){return _[14].status==="running"?Jv:Zv}let g=d(i),v=g(i),m=i[17]&&Ic(i);return{c(){e=M("div"),t=M("h3"),t.textContent=n,s=V(),r=M("button"),r.textContent=o,a=V(),c=M("div"),v.c(),l=V(),m&&m.c(),this.h()},l(_){e=E(_,"DIV",{class:!0});var p=F(e);t=E(p,"H3",{"data-svelte-h":!0}),Pe(t)!=="svelte-1tzs814"&&(t.textContent=n),s=z(p),r=E(p,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(r)!=="svelte-z4d5z9"&&(r.textContent=o),p.forEach(S),a=z(_),c=E(_,"DIV",{class:!0});var x=F(c);v.l(x),l=z(x),m&&m.l(x),x.forEach(S),this.h()},h(){R(r,"class","btn-secondary btn-sm"),R(e,"class","panel-header"),R(c,"class","panel-body scrollable")},m(_,p){ge(_,e,p),f(e,t),f(e,s),f(e,r),ge(_,a,p),ge(_,c,p),v.m(c,null),f(c,l),m&&m.m(c,null),u||(h=ze(r,"click",i[24]),u=!0)},p(_,p){g===(g=d(_))&&v?v.p(_,p):(v.d(1),v=g(_),v&&(v.c(),v.m(c,l))),_[17]?m?m.p(_,p):(m=Ic(_),m.c(),m.m(c,null)):m&&(m.d(1),m=null)},i:yt,o:yt,d(_){_&&(S(e),S(a),S(c)),v.d(),m&&m.d(),u=!1,h()}}}function $v(i,e,t){let n,s,r,o,a,c,l,u,h,d,g;Qe(i,Gn,ae=>t(25,n=ae)),Qe(i,Bn,ae=>t(45,s=ae)),Qe(i,Ls,ae=>t(12,r=ae)),Qe(i,Ko,ae=>t(13,o=ae)),Qe(i,$i,ae=>t(14,a=ae)),Qe(i,ts,ae=>t(15,c=ae)),Qe(i,es,ae=>t(16,l=ae)),Qe(i,Ds,ae=>t(17,u=ae)),Qe(i,ea,ae=>t(26,h=ae)),Qe(i,ti,ae=>t(18,d=ae)),Qe(i,ns,ae=>t(19,g=ae));let v="spherical",m="",_="",p="",x=0,b=1,A=50,C=50,T=25,w=!0,L="",U=null;async function y(){if(!n||n.length<3)return;const ae=n.map(_e=>[_e.longitude,_e.latitude]),ie=n.map(_e=>_e.elevation);try{const _e=await ft.post("/projects/modeling/variogram-preview",{model_type:v,range_param:w?null:m?parseFloat(m):null,sill_param:w?null:_?parseFloat(_):null,nugget_param:w?null:p?parseFloat(p):null,coords:ae,values:ie});it(ea,h=_e,h)}catch(_e){console.warn("变异函数预览失败:",_e)}}function N(){if(!U||!h)return;const ae=U,ie=ae.getContext("2d"),_e=ae.width,k=ae.height;ie.clearRect(0,0,_e,k),ie.fillStyle="#1a1d23",ie.fillRect(0,0,_e,k);const P={top:20,right:16,bottom:36,left:50},ve=_e-P.left-P.right,Te=k-P.top-P.bottom,X=h,H=X.experimental_lags||[],Y=X.experimental_gamma||[],he=X.model_h||[],Q=X.model_gamma||[];if(H.length===0&&he.length===0)return;const re=[...H,...he],Me=[...Y,...Q],Ee=Math.max(...re,1),xe=Math.max(...Me,1),Re=Le=>P.left+Le/Ee*ve,Ye=Le=>P.top+Te-Le/xe*Te;ie.strokeStyle="#3a3f4b",ie.lineWidth=.5;for(let Le=0;Le<=5;Le++){const ke=xe/5*Le,Z=Ye(ke);ie.beginPath(),ie.moveTo(P.left,Z),ie.lineTo(_e-P.right,Z),ie.stroke(),ie.fillStyle="#6b7280",ie.font="10px sans-serif",ie.textAlign="right",ie.textBaseline="middle",ie.fillText(ke.toFixed(1),P.left-6,Z)}for(let Le=0;Le<=5;Le++){const ke=Ee/5*Le,Z=Re(ke);ie.beginPath(),ie.moveTo(Z,P.top),ie.lineTo(Z,k-P.bottom),ie.stroke(),ie.fillStyle="#6b7280",ie.font="10px sans-serif",ie.textAlign="center",ie.textBaseline="top",ie.fillText(ke.toFixed(1),Z,k-P.bottom+4)}ie.strokeStyle="#4f8ff7",ie.lineWidth=2,ie.beginPath();for(let Le=0;Le<he.length;Le++){const ke=Re(he[Le]),Z=Ye(Q[Le]);Le===0?ie.moveTo(ke,Z):ie.lineTo(ke,Z)}ie.stroke(),ie.fillStyle="#fbbf24",H.forEach((Le,ke)=>{const Z=Re(Le),Be=Ye(Y[ke]);ie.beginPath(),ie.arc(Z,Be,4,0,Math.PI*2),ie.fill()}),ie.strokeStyle="#9aa0ac",ie.lineWidth=1,ie.strokeRect(P.left,P.top,ve,Te),ie.fillStyle="#9aa0ac",ie.font="11px sans-serif",ie.textAlign="center",ie.textBaseline="top",ie.fillText("滞后距离",_e/2,k-14),ie.save(),ie.translate(12,k/2),ie.rotate(-Math.PI/2),ie.textAlign="center",ie.textBaseline="middle",ie.fillText("半变异函数值",0,0),ie.restore();const Fe=P.top+4;ie.fillStyle="#4f8ff7",ie.fillRect(_e-P.right-100,Fe,14,3),ie.fillStyle="#9aa0ac",ie.font="10px sans-serif",ie.textAlign="left",ie.textBaseline="middle",ie.fillText("理论曲线",_e-P.right-82,Fe+2),ie.fillStyle="#fbbf24",ie.beginPath(),ie.arc(_e-P.right-93,Fe+16,4,0,Math.PI*2),ie.fill(),ie.fillStyle="#9aa0ac",ie.fillText("实验值",_e-P.right-82,Fe+16),X.range&&X.sill&&X.nugget&&(ie.fillStyle="#9aa0ac",ie.font="10px sans-serif",ie.textAlign="left",ie.textBaseline="top",ie.fillText(`变程=${X.range.toFixed(2)} 基台=${X.sill.toFixed(2)} 块金=${X.nugget.toFixed(2)}`,P.left+4,P.top+4))}async function K(){if(!s){$e("请先选择项目","warning");return}try{const ae={variogram_model:v,range_param:w?null:m?parseFloat(m):null,sill_param:w?null:_?parseFloat(_):null,nugget_param:w?null:p?parseFloat(p):null,aniso_angle:x,aniso_ratio:b,grid_nx:A,grid_ny:C,grid_nz:T},ie=await ft.post(`/projects/${s.id}/modeling/run`,ae);it($i,a={status:"running",progress:0,runId:ie.id},a),$e("建模任务已启动","info"),$(ie.id)}catch(ae){$e(`启动建模失败: ${ae.message}`,"error")}}function $(ae){const ie=location.protocol==="https:"?"wss:":"ws:",_e=new WebSocket(`${ie}//${location.host}/api/ws/${s.id}?run_id=${ae}`);_e.onmessage=k=>{const P=JSON.parse(k.data);it($i,a={status:P.status,progress:P.progress,runId:P.run_id},a),P.status==="completed"?($e("三维建模完成!","success"),j(ae)):P.status==="failed"&&$e("三维建模失败","error")},_e.onerror=()=>{O(ae)},_e.onclose=()=>{a.status==="running"&&O(ae)}}async function O(ae){const ie=async()=>{if(a.status==="running")try{const _e=await ft.get(`/projects/modeling/runs/${ae}`);it($i,a={status:_e.status,progress:_e.progress,runId:_e.id},a),_e.status==="completed"?($e("三维建模完成!","success"),await j(ae)):_e.status==="failed"?$e("三维建模失败","error"):setTimeout(ie,2e3)}catch{setTimeout(ie,3e3)}};setTimeout(ie,1e3)}async function j(ae){var ie;try{const _e=await ft.get(`/projects/modeling/runs/${ae}/result`);it(Ds,u=_e,u),(ie=_e.lithologies)==null||ie.forEach(k=>{l[k]===void 0&&it(es,l[k]=!0,l),c[k]===void 0&&it(ts,c[k]=.7,c)}),it($i,a={status:"completed",progress:100,runId:ae},a)}catch(_e){$e(`加载模型结果失败: ${_e.message}`,"error")}}async function W(){if(!(!a.runId||!L))try{const ae=await ft.post(`/projects/modeling/runs/${a.runId}/volume?lithology_name=${encodeURIComponent(L)}`);it(Ko,o=ae,o),$e(`${ae.lithology_name} 体积: ${ae.volume.toFixed(1)} m³`,"success")}catch(ae){$e(`体积计算失败: ${ae.message}`,"error")}}async function ee(){s&&it(Ls,r=await ft.get(`/projects/${s.id}/modeling/runs`),r)}function te(){v=fn(this),t(0,v)}function se(){w=this.checked,t(4,w)}function ue(){m=ct(this.value),t(1,m)}function le(){_=ct(this.value),t(2,_)}function ce(){p=ct(this.value),t(3,p)}function fe(ae){ni[ae?"unshift":"push"](()=>{U=ae,t(5,U)})}function B(){x=ct(this.value),t(6,x)}function J(){b=ct(this.value),t(7,b)}function oe(){A=ct(this.value),t(8,A)}function D(){C=ct(this.value),t(9,C)}function I(){T=ct(this.value),t(10,T)}const be=ae=>{it(es,l[ae]=l[ae]===!1,l),es.set(l)},Se=(ae,ie)=>ie.name===ae,Ce=(ae,ie)=>{it(ts,c[ae]=ie.target.value/100,c),ts.set(c)},q=()=>it(ns,g.enabled=!g.enabled,g),Ae=ae=>{it(ns,g.position=[parseFloat(ae.target.value),0,0],g),ns.set(g)};function ye(){L=fn(this),t(11,L)}const Ne=ae=>ae.status==="completed"&&j(ae.id);return i.$$.update=()=>{i.$$.dirty[0]&67108896&&h&&U&&N(),i.$$.dirty[0]&33554463&&(v||m||_||p||w)&&(n==null?void 0:n.length)>=3&&y()},[v,m,_,p,w,U,x,b,A,C,T,L,r,o,a,c,l,u,d,g,y,K,j,W,ee,n,h,te,se,ue,le,ce,fe,B,J,oe,D,I,be,Se,Ce,q,Ae,ye,Ne]}class e0 extends pn{constructor(e){super(),mn(this,e,$v,Qv,dn,{},null,[-1,-1])}}function zc(i){var Be,qe,He;let e,t,n,s,r=i[11][i[4]]+"",o,a,c,l,u,h="最小值",d,g,v=((Be=i[10].value_min)==null?void 0:Be.toFixed(2))+"",m,_,p,x,b="最大值",A,C,T=((qe=i[10].value_max)==null?void 0:qe.toFixed(2))+"",w,L,U,y,N="均值",K,$,O=((He=i[10].value_mean)==null?void 0:He.toFixed(2))+"",j,W,ee,te="渲染设置",se,ue,le,ce="渲染模式",fe,B,J,oe="彩色体素",D,I="等值面",be,Se,Ce,q,Ae="颜色映射范围",ye,Ne,ae,ie,_e,k,P,ve,Te,X,H,Y=i[1].toFixed(1)+"",he,Q,re,Me=((i[1]+i[2])/2).toFixed(1)+"",Ee,xe,Re,Ye=i[2].toFixed(1)+"",Fe,Le,ke,Z=i[3]==="isosurface"&&Vc(i);return{c(){e=M("hr"),t=V(),n=M("h4"),s=pe("属性: "),o=pe(r),a=V(),c=M("div"),l=M("div"),u=M("span"),u.textContent=h,d=V(),g=M("span"),m=pe(v),_=V(),p=M("div"),x=M("span"),x.textContent=b,A=V(),C=M("span"),w=pe(T),L=V(),U=M("div"),y=M("span"),y.textContent=N,K=V(),$=M("span"),j=pe(O),W=V(),ee=M("h4"),ee.textContent=te,se=V(),ue=M("div"),le=M("label"),le.textContent=ce,fe=V(),B=M("select"),J=M("option"),J.textContent=oe,D=M("option"),D.textContent=I,be=V(),Z&&Z.c(),Se=V(),Ce=M("div"),q=M("label"),q.textContent=Ae,ye=V(),Ne=M("div"),ae=M("input"),ie=V(),_e=M("input"),k=V(),P=M("div"),ve=M("div"),Te=V(),X=M("div"),H=M("span"),he=pe(Y),Q=V(),re=M("span"),Ee=pe(Me),xe=V(),Re=M("span"),Fe=pe(Ye),this.h()},l(G){e=E(G,"HR",{style:!0}),t=z(G),n=E(G,"H4",{style:!0});var De=F(n);s=de(De,"属性: "),o=de(De,r),De.forEach(S),a=z(G),c=E(G,"DIV",{class:!0});var we=F(c);l=E(we,"DIV",{class:!0});var Oe=F(l);u=E(Oe,"SPAN",{class:!0,"data-svelte-h":!0}),Pe(u)!=="svelte-9zqffl"&&(u.textContent=h),d=z(Oe),g=E(Oe,"SPAN",{class:!0});var Xe=F(g);m=de(Xe,v),Xe.forEach(S),Oe.forEach(S),_=z(we),p=E(we,"DIV",{class:!0});var tt=F(p);x=E(tt,"SPAN",{class:!0,"data-svelte-h":!0}),Pe(x)!=="svelte-pto1ax"&&(x.textContent=b),A=z(tt),C=E(tt,"SPAN",{class:!0});var st=F(C);w=de(st,T),st.forEach(S),tt.forEach(S),L=z(we),U=E(we,"DIV",{class:!0});var Ze=F(U);y=E(Ze,"SPAN",{class:!0,"data-svelte-h":!0}),Pe(y)!=="svelte-os332j"&&(y.textContent=N),K=z(Ze),$=E(Ze,"SPAN",{class:!0});var ot=F($);j=de(ot,O),ot.forEach(S),Ze.forEach(S),we.forEach(S),W=z(G),ee=E(G,"H4",{style:!0,"data-svelte-h":!0}),Pe(ee)!=="svelte-1ld9l9j"&&(ee.textContent=te),se=z(G),ue=E(G,"DIV",{class:!0});var Je=F(ue);le=E(Je,"LABEL",{"data-svelte-h":!0}),Pe(le)!=="svelte-cq5b4l"&&(le.textContent=ce),fe=z(Je),B=E(Je,"SELECT",{});var at=F(B);J=E(at,"OPTION",{"data-svelte-h":!0}),Pe(J)!=="svelte-127lpa0"&&(J.textContent=oe),D=E(at,"OPTION",{"data-svelte-h":!0}),Pe(D)!=="svelte-q3a2m9"&&(D.textContent=I),at.forEach(S),Je.forEach(S),be=z(G),Z&&Z.l(G),Se=z(G),Ce=E(G,"DIV",{class:!0});var ht=F(Ce);q=E(ht,"LABEL",{"data-svelte-h":!0}),Pe(q)!=="svelte-1lqds2v"&&(q.textContent=Ae),ye=z(ht),Ne=E(ht,"DIV",{class:!0});var Gt=F(Ne);ae=E(Gt,"INPUT",{type:!0,step:!0}),ie=z(Gt),_e=E(Gt,"INPUT",{type:!0,step:!0}),Gt.forEach(S),ht.forEach(S),k=z(G),P=E(G,"DIV",{class:!0});var Jt=F(P);ve=E(Jt,"DIV",{class:!0,style:!0}),F(ve).forEach(S),Te=z(Jt),X=E(Jt,"DIV",{class:!0});var wt=F(X);H=E(wt,"SPAN",{});var Ct=F(H);he=de(Ct,Y),Ct.forEach(S),Q=z(wt),re=E(wt,"SPAN",{});var Lt=F(re);Ee=de(Lt,Me),Lt.forEach(S),xe=z(wt),Re=E(wt,"SPAN",{});var Ut=F(Re);Fe=de(Ut,Ye),Ut.forEach(S),wt.forEach(S),Jt.forEach(S),this.h()},h(){me(e,"border-color","var(--border)"),me(e,"margin","12px 0"),me(n,"font-size","13px"),me(n,"margin-bottom","8px"),R(u,"class","stat-label svelte-8lfmmm"),R(g,"class","stat-value svelte-8lfmmm"),R(l,"class","stat-item svelte-8lfmmm"),R(x,"class","stat-label svelte-8lfmmm"),R(C,"class","stat-value svelte-8lfmmm"),R(p,"class","stat-item svelte-8lfmmm"),R(y,"class","stat-label svelte-8lfmmm"),R($,"class","stat-value svelte-8lfmmm"),R(U,"class","stat-item svelte-8lfmmm"),R(c,"class","stats-grid svelte-8lfmmm"),me(ee,"font-size","13px"),me(ee,"margin","12px 0 8px"),J.__value="voxel",Ke(J,J.__value),D.__value="isosurface",Ke(D,D.__value),i[3]===void 0&&hn(()=>i[19].call(B)),R(ue,"class","form-group"),R(ae,"type","number"),R(ae,"step","0.1"),R(_e,"type","number"),R(_e,"step","0.1"),R(Ne,"class","form-row"),R(Ce,"class","form-group"),R(ve,"class","legend-bar svelte-8lfmmm"),me(ve,"background","linear-gradient(to right, #0000ff, #00ff00, #ffff00, #ff0000)"),R(X,"class","legend-labels svelte-8lfmmm"),R(P,"class","color-legend svelte-8lfmmm")},m(G,De){ge(G,e,De),ge(G,t,De),ge(G,n,De),f(n,s),f(n,o),ge(G,a,De),ge(G,c,De),f(c,l),f(l,u),f(l,d),f(l,g),f(g,m),f(c,_),f(c,p),f(p,x),f(p,A),f(p,C),f(C,w),f(c,L),f(c,U),f(U,y),f(U,K),f(U,$),f($,j),ge(G,W,De),ge(G,ee,De),ge(G,se,De),ge(G,ue,De),f(ue,le),f(ue,fe),f(ue,B),f(B,J),f(B,D),Tt(B,i[3],!0),ge(G,be,De),Z&&Z.m(G,De),ge(G,Se,De),ge(G,Ce,De),f(Ce,q),f(Ce,ye),f(Ce,Ne),f(Ne,ae),Ke(ae,i[1]),f(Ne,ie),f(Ne,_e),Ke(_e,i[2]),ge(G,k,De),ge(G,P,De),f(P,ve),f(P,Te),f(P,X),f(X,H),f(H,he),f(X,Q),f(X,re),f(re,Ee),f(X,xe),f(X,Re),f(Re,Fe),Le||(ke=[ze(B,"change",i[19]),ze(ae,"input",i[21]),ze(_e,"input",i[22])],Le=!0)},p(G,De){var we,Oe,Xe;De&16&&r!==(r=G[11][G[4]]+"")&&Ve(o,r),De&1024&&v!==(v=((we=G[10].value_min)==null?void 0:we.toFixed(2))+"")&&Ve(m,v),De&1024&&T!==(T=((Oe=G[10].value_max)==null?void 0:Oe.toFixed(2))+"")&&Ve(w,T),De&1024&&O!==(O=((Xe=G[10].value_mean)==null?void 0:Xe.toFixed(2))+"")&&Ve(j,O),De&8&&Tt(B,G[3]),G[3]==="isosurface"?Z?Z.p(G,De):(Z=Vc(G),Z.c(),Z.m(Se.parentNode,Se)):Z&&(Z.d(1),Z=null),De&2&&ct(ae.value)!==G[1]&&Ke(ae,G[1]),De&4&&ct(_e.value)!==G[2]&&Ke(_e,G[2]),De&2&&Y!==(Y=G[1].toFixed(1)+"")&&Ve(he,Y),De&6&&Me!==(Me=((G[1]+G[2])/2).toFixed(1)+"")&&Ve(Ee,Me),De&4&&Ye!==(Ye=G[2].toFixed(1)+"")&&Ve(Fe,Ye)},d(G){G&&(S(e),S(t),S(n),S(a),S(c),S(W),S(ee),S(se),S(ue),S(be),S(Se),S(Ce),S(k),S(P)),Z&&Z.d(G),Le=!1,At(ke)}}}function Vc(i){let e,t,n="等值面阈值",s,r,o,a,c=i[0].toFixed(1)+"",l,u,h;return{c(){e=M("div"),t=M("label"),t.textContent=n,s=V(),r=M("input"),o=V(),a=M("span"),l=pe(c),this.h()},l(d){e=E(d,"DIV",{class:!0});var g=F(e);t=E(g,"LABEL",{"data-svelte-h":!0}),Pe(t)!=="svelte-hv2zuh"&&(t.textContent=n),s=z(g),r=E(g,"INPUT",{type:!0,min:!0,max:!0,step:!0}),o=z(g),a=E(g,"SPAN",{style:!0});var v=F(a);l=de(v,c),v.forEach(S),g.forEach(S),this.h()},h(){R(r,"type","range"),R(r,"min",i[1]),R(r,"max",i[2]),R(r,"step","0.1"),me(a,"font-size","11px"),R(e,"class","form-group")},m(d,g){ge(d,e,g),f(e,t),f(e,s),f(e,r),Ke(r,i[0]),f(e,o),f(e,a),f(a,l),u||(h=[ze(r,"change",i[20]),ze(r,"input",i[20])],u=!0)},p(d,g){g&2&&R(r,"min",d[1]),g&4&&R(r,"max",d[2]),g&1&&Ke(r,d[0]),g&1&&c!==(c=d[0].toFixed(1)+"")&&Ve(l,c)},d(d){d&&S(e),u=!1,At(h)}}}function t0(i){let e,t="<h3>属性场建模</h3>",n,s,r,o,a="参数类型",c,l,u,h="标贯N值",d,g="含水量",v,m="压缩模量",_,p,x,b="变异函数模型",A,C,T,w="球状模型",L,U="指数模型",y,N="高斯模型",K,$,O,j,W="NX",ee,te,se,ue,le,ce="NY",fe,B,J,oe,D,I="NZ",be,Se,Ce,q,Ae=i[9]?"插值计算中...":"开始插值",ye,Ne,ae,ie,_e=i[10]&&zc(i);return{c(){e=M("div"),e.innerHTML=t,n=V(),s=M("div"),r=M("div"),o=M("label"),o.textContent=a,c=V(),l=M("select"),u=M("option"),u.textContent=h,d=M("option"),d.textContent=g,v=M("option"),v.textContent=m,_=V(),p=M("div"),x=M("label"),x.textContent=b,A=V(),C=M("select"),T=M("option"),T.textContent=w,L=M("option"),L.textContent=U,y=M("option"),y.textContent=N,K=V(),$=M("div"),O=M("div"),j=M("label"),j.textContent=W,ee=V(),te=M("input"),se=V(),ue=M("div"),le=M("label"),le.textContent=ce,fe=V(),B=M("input"),J=V(),oe=M("div"),D=M("label"),D.textContent=I,be=V(),Se=M("input"),Ce=V(),q=M("button"),ye=pe(Ae),Ne=V(),_e&&_e.c(),this.h()},l(k){e=E(k,"DIV",{class:!0,"data-svelte-h":!0}),Pe(e)!=="svelte-s1qbq0"&&(e.innerHTML=t),n=z(k),s=E(k,"DIV",{class:!0});var P=F(s);r=E(P,"DIV",{class:!0});var ve=F(r);o=E(ve,"LABEL",{"data-svelte-h":!0}),Pe(o)!=="svelte-vxe5jw"&&(o.textContent=a),c=z(ve),l=E(ve,"SELECT",{});var Te=F(l);u=E(Te,"OPTION",{"data-svelte-h":!0}),Pe(u)!=="svelte-1ekkfg"&&(u.textContent=h),d=E(Te,"OPTION",{"data-svelte-h":!0}),Pe(d)!=="svelte-vhtqdz"&&(d.textContent=g),v=E(Te,"OPTION",{"data-svelte-h":!0}),Pe(v)!=="svelte-1m1gv94"&&(v.textContent=m),Te.forEach(S),ve.forEach(S),_=z(P),p=E(P,"DIV",{class:!0});var X=F(p);x=E(X,"LABEL",{"data-svelte-h":!0}),Pe(x)!=="svelte-1jgf9ft"&&(x.textContent=b),A=z(X),C=E(X,"SELECT",{});var H=F(C);T=E(H,"OPTION",{"data-svelte-h":!0}),Pe(T)!=="svelte-17ym7v6"&&(T.textContent=w),L=E(H,"OPTION",{"data-svelte-h":!0}),Pe(L)!=="svelte-bzk8zo"&&(L.textContent=U),y=E(H,"OPTION",{"data-svelte-h":!0}),Pe(y)!=="svelte-1iqrdsw"&&(y.textContent=N),H.forEach(S),X.forEach(S),K=z(P),$=E(P,"DIV",{class:!0});var Y=F($);O=E(Y,"DIV",{class:!0});var he=F(O);j=E(he,"LABEL",{"data-svelte-h":!0}),Pe(j)!=="svelte-kuum7m"&&(j.textContent=W),ee=z(he),te=E(he,"INPUT",{type:!0,min:!0,max:!0}),he.forEach(S),se=z(Y),ue=E(Y,"DIV",{class:!0});var Q=F(ue);le=E(Q,"LABEL",{"data-svelte-h":!0}),Pe(le)!=="svelte-1kjsuy3"&&(le.textContent=ce),fe=z(Q),B=E(Q,"INPUT",{type:!0,min:!0,max:!0}),Q.forEach(S),J=z(Y),oe=E(Y,"DIV",{class:!0});var re=F(oe);D=E(re,"LABEL",{"data-svelte-h":!0}),Pe(D)!=="svelte-1vblzhc"&&(D.textContent=I),be=z(re),Se=E(re,"INPUT",{type:!0,min:!0,max:!0}),re.forEach(S),Y.forEach(S),Ce=z(P),q=E(P,"BUTTON",{class:!0,style:!0});var Me=F(q);ye=de(Me,Ae),Me.forEach(S),Ne=z(P),_e&&_e.l(P),P.forEach(S),this.h()},h(){R(e,"class","panel-header"),u.__value="spt_n",Ke(u,u.__value),d.__value="water_content",Ke(d,d.__value),v.__value="compression_modulus",Ke(v,v.__value),i[4]===void 0&&hn(()=>i[14].call(l)),R(r,"class","form-group"),T.__value="spherical",Ke(T,T.__value),L.__value="exponential",Ke(L,L.__value),y.__value="gaussian",Ke(y,y.__value),i[5]===void 0&&hn(()=>i[15].call(C)),R(p,"class","form-group"),R(te,"type","number"),R(te,"min","5"),R(te,"max","100"),R(O,"class","form-group"),R(B,"type","number"),R(B,"min","5"),R(B,"max","100"),R(ue,"class","form-group"),R(Se,"type","number"),R(Se,"min","5"),R(Se,"max","50"),R(oe,"class","form-group"),R($,"class","form-row"),R(q,"class","btn-primary"),q.disabled=i[9],me(q,"width","100%"),R(s,"class","panel-body scrollable")},m(k,P){ge(k,e,P),ge(k,n,P),ge(k,s,P),f(s,r),f(r,o),f(r,c),f(r,l),f(l,u),f(l,d),f(l,v),Tt(l,i[4],!0),f(s,_),f(s,p),f(p,x),f(p,A),f(p,C),f(C,T),f(C,L),f(C,y),Tt(C,i[5],!0),f(s,K),f(s,$),f($,O),f(O,j),f(O,ee),f(O,te),Ke(te,i[6]),f($,se),f($,ue),f(ue,le),f(ue,fe),f(ue,B),Ke(B,i[7]),f($,J),f($,oe),f(oe,D),f(oe,be),f(oe,Se),Ke(Se,i[8]),f(s,Ce),f(s,q),f(q,ye),f(s,Ne),_e&&_e.m(s,null),ae||(ie=[ze(l,"change",i[14]),ze(C,"change",i[15]),ze(te,"input",i[16]),ze(B,"input",i[17]),ze(Se,"input",i[18]),ze(q,"click",i[12])],ae=!0)},p(k,[P]){P&16&&Tt(l,k[4]),P&32&&Tt(C,k[5]),P&64&&ct(te.value)!==k[6]&&Ke(te,k[6]),P&128&&ct(B.value)!==k[7]&&Ke(B,k[7]),P&256&&ct(Se.value)!==k[8]&&Ke(Se,k[8]),P&512&&Ae!==(Ae=k[9]?"插值计算中...":"开始插值")&&Ve(ye,Ae),P&512&&(q.disabled=k[9]),k[10]?_e?_e.p(k,P):(_e=zc(k),_e.c(),_e.m(s,null)):_e&&(_e.d(1),_e=null)},i:yt,o:yt,d(k){k&&(S(e),S(n),S(s)),_e&&_e.d(),ae=!1,At(ie)}}}function n0(i,e,t){let n,s,r;Qe(i,_r,N=>t(10,n=N)),Qe(i,Bn,N=>t(23,s=N)),Qe(i,gr,N=>t(13,r=N));let o="spt_n",a="spherical",c=50,l=50,u=25,h=0,d=0,g=100,v="voxel",m=!1;const _={spt_n:"标贯N值",water_content:"含水量",compression_modulus:"压缩模量"};async function p(){if(!s){$e("请先选择项目","warning");return}t(9,m=!0);try{const N=await ft.post(`/projects/${s.id}/attributes/interpolate?attribute=${o}&grid_nx=${c}&grid_ny=${l}&grid_nz=${u}&variogram_model=${a}`);it(_r,n=N,n),N.value_min!==void 0&&(t(1,d=N.value_min),t(2,g=N.value_max),t(0,h=(N.value_min+N.value_max)/2)),$e(`属性场插值完成: ${_[o]}`,"success")}catch(N){$e(`插值失败: ${N.message}`,"error")}finally{t(9,m=!1)}}function x(){o=fn(this),t(4,o)}function b(){a=fn(this),t(5,a)}function A(){c=ct(this.value),t(6,c)}function C(){l=ct(this.value),t(7,l)}function T(){u=ct(this.value),t(8,u)}function w(){v=fn(this),t(3,v)}function L(){h=ct(this.value),t(0,h)}function U(){d=ct(this.value),t(1,d)}function y(){g=ct(this.value),t(2,g)}return i.$$.update=()=>{i.$$.dirty&8207&&it(gr,r={...r,mode:v,isosurfaceValue:h,colorMin:d,colorMax:g},r)},[h,d,g,v,o,a,c,l,u,m,n,_,p,r,x,b,A,C,T,w,L,U,y]}class i0 extends pn{constructor(e){super(),mn(this,e,n0,t0,dn,{})}}function Hc(i,e,t){const n=i.slice();return n[12]=e[t],n}function Gc(i,e,t){const n=i.slice();return n[15]=e[t],n}function Wc(i){let e,t=i[15].variogram_model+"",n,s,r=i[15].grid_nx+"",o,a,c=i[15].grid_ny+"",l,u,h=i[15].grid_nz+"",d,g,v=i[15].status+"",m,_,p;return{c(){e=M("option"),n=pe(t),s=V(),o=pe(r),a=pe("x"),l=pe(c),u=pe("x"),d=pe(h),g=pe(" ("),m=pe(v),_=pe(")"),this.h()},l(x){e=E(x,"OPTION",{});var b=F(e);n=de(b,t),s=z(b),o=de(b,r),a=de(b,"x"),l=de(b,c),u=de(b,"x"),d=de(b,h),g=de(b," ("),m=de(b,v),_=de(b,")"),b.forEach(S),this.h()},h(){e.__value=p=i[15].id,Ke(e,e.__value)},m(x,b){ge(x,e,b),f(e,n),f(e,s),f(e,o),f(e,a),f(e,l),f(e,u),f(e,d),f(e,g),f(e,m),f(e,_)},p(x,b){b&8&&t!==(t=x[15].variogram_model+"")&&Ve(n,t),b&8&&r!==(r=x[15].grid_nx+"")&&Ve(o,r),b&8&&c!==(c=x[15].grid_ny+"")&&Ve(l,c),b&8&&h!==(h=x[15].grid_nz+"")&&Ve(d,h),b&8&&v!==(v=x[15].status+"")&&Ve(m,v),b&8&&p!==(p=x[15].id)&&(e.__value=p,Ke(e,e.__value))},d(x){x&&S(e)}}}function Xc(i){let e,t=i[12].name+"",n,s;return{c(){e=M("option"),n=pe(t),this.h()},l(r){e=E(r,"OPTION",{});var o=F(e);n=de(o,t),o.forEach(S),this.h()},h(){e.__value=s=i[12].id,Ke(e,e.__value)},m(r,o){ge(r,e,o),f(e,n)},p(r,o){o&16&&t!==(t=r[12].name+"")&&Ve(n,t),o&16&&s!==(s=r[12].id)&&(e.__value=s,Ke(e,e.__value))},d(r){r&&S(e)}}}function s0(i){let e,t="<h3>成果导出</h3>",n,s,r,o,a="三维模型",c,l,u,h="选择建模结果",d,g,v,m="选择建模结果",_,p,x,b,A,C,T,w="glTF格式可在Blender、ParaView等软件中打开",L,U,y,N,K,$="剖面图",O,j,W,ee="选择剖面",te,se,ue,le="选择剖面",ce,fe,B,J,oe,D,I,be,Se,Ce,q,Ae,ye,Ne,ae="数据统计",ie,_e,k,P,ve,Te,X="包含各层厚度统计、面积、体积等",H,Y,he,Q,re,Me="建模报告",Ee,xe,Re,Ye,Fe,Le,ke="包含半变异函数拟合结果、插值参数、剖面图缩略",Z,Be,qe=et(i[3].filter(jc)),He=[];for(let we=0;we<qe.length;we+=1)He[we]=Wc(Gc(i,qe,we));let G=et(i[4]),De=[];for(let we=0;we<G.length;we+=1)De[we]=Xc(Hc(i,G,we));return{c(){e=M("div"),e.innerHTML=t,n=V(),s=M("div"),r=M("div"),o=M("h4"),o.textContent=a,c=V(),l=M("div"),u=M("label"),u.textContent=h,d=V(),g=M("select"),v=M("option"),v.textContent=m;for(let we=0;we<He.length;we+=1)He[we].c();_=V(),p=M("div"),x=M("button"),b=pe("导出 glTF 模型"),C=V(),T=M("p"),T.textContent=w,L=V(),U=M("hr"),y=V(),N=M("div"),K=M("h4"),K.textContent=$,O=V(),j=M("div"),W=M("label"),W.textContent=ee,te=V(),se=M("select"),ue=M("option"),ue.textContent=le;for(let we=0;we<De.length;we+=1)De[we].c();ce=V(),fe=M("div"),B=M("button"),J=pe("导出 PNG"),D=V(),I=M("button"),be=pe("导出 SVG"),Ce=V(),q=M("hr"),Ae=V(),ye=M("div"),Ne=M("h4"),Ne.textContent=ae,ie=V(),_e=M("button"),k=pe("导出地层数据统计表 (Excel)"),ve=V(),Te=M("p"),Te.textContent=X,H=V(),Y=M("hr"),he=V(),Q=M("div"),re=M("h4"),re.textContent=Me,Ee=V(),xe=M("button"),Re=pe("导出建模参数报告 (PDF)"),Fe=V(),Le=M("p"),Le.textContent=ke,this.h()},l(we){e=E(we,"DIV",{class:!0,"data-svelte-h":!0}),Pe(e)!=="svelte-16wx9di"&&(e.innerHTML=t),n=z(we),s=E(we,"DIV",{class:!0});var Oe=F(s);r=E(Oe,"DIV",{class:!0});var Xe=F(r);o=E(Xe,"H4",{style:!0,"data-svelte-h":!0}),Pe(o)!=="svelte-f1tw8s"&&(o.textContent=a),c=z(Xe),l=E(Xe,"DIV",{class:!0});var tt=F(l);u=E(tt,"LABEL",{"data-svelte-h":!0}),Pe(u)!=="svelte-rq7xu0"&&(u.textContent=h),d=z(tt),g=E(tt,"SELECT",{});var st=F(g);v=E(st,"OPTION",{"data-svelte-h":!0}),Pe(v)!=="svelte-ma6l8e"&&(v.textContent=m);for(let on=0;on<He.length;on+=1)He[on].l(st);st.forEach(S),tt.forEach(S),_=z(Xe),p=E(Xe,"DIV",{class:!0});var Ze=F(p);x=E(Ze,"BUTTON",{class:!0});var ot=F(x);b=de(ot,"导出 glTF 模型"),ot.forEach(S),Ze.forEach(S),C=z(Xe),T=E(Xe,"P",{style:!0,"data-svelte-h":!0}),Pe(T)!=="svelte-elxrxh"&&(T.textContent=w),Xe.forEach(S),L=z(Oe),U=E(Oe,"HR",{style:!0}),y=z(Oe),N=E(Oe,"DIV",{class:!0});var Je=F(N);K=E(Je,"H4",{style:!0,"data-svelte-h":!0}),Pe(K)!=="svelte-l0uqjv"&&(K.textContent=$),O=z(Je),j=E(Je,"DIV",{class:!0});var at=F(j);W=E(at,"LABEL",{"data-svelte-h":!0}),Pe(W)!=="svelte-1uj1nrm"&&(W.textContent=ee),te=z(at),se=E(at,"SELECT",{});var ht=F(se);ue=E(ht,"OPTION",{"data-svelte-h":!0}),Pe(ue)!=="svelte-ij5m9g"&&(ue.textContent=le);for(let on=0;on<De.length;on+=1)De[on].l(ht);ht.forEach(S),at.forEach(S),ce=z(Je),fe=E(Je,"DIV",{class:!0});var Gt=F(fe);B=E(Gt,"BUTTON",{class:!0});var Jt=F(B);J=de(Jt,"导出 PNG"),Jt.forEach(S),D=z(Gt),I=E(Gt,"BUTTON",{class:!0});var wt=F(I);be=de(wt,"导出 SVG"),wt.forEach(S),Gt.forEach(S),Je.forEach(S),Ce=z(Oe),q=E(Oe,"HR",{style:!0}),Ae=z(Oe),ye=E(Oe,"DIV",{class:!0});var Ct=F(ye);Ne=E(Ct,"H4",{style:!0,"data-svelte-h":!0}),Pe(Ne)!=="svelte-nufmjz"&&(Ne.textContent=ae),ie=z(Ct),_e=E(Ct,"BUTTON",{class:!0,style:!0});var Lt=F(_e);k=de(Lt,"导出地层数据统计表 (Excel)"),Lt.forEach(S),ve=z(Ct),Te=E(Ct,"P",{style:!0,"data-svelte-h":!0}),Pe(Te)!=="svelte-soh8v8"&&(Te.textContent=X),Ct.forEach(S),H=z(Oe),Y=E(Oe,"HR",{style:!0}),he=z(Oe),Q=E(Oe,"DIV",{class:!0});var Ut=F(Q);re=E(Ut,"H4",{style:!0,"data-svelte-h":!0}),Pe(re)!=="svelte-16vzmgj"&&(re.textContent=Me),Ee=z(Ut),xe=E(Ut,"BUTTON",{class:!0,style:!0});var An=F(xe);Re=de(An,"导出建模参数报告 (PDF)"),An.forEach(S),Fe=z(Ut),Le=E(Ut,"P",{style:!0,"data-svelte-h":!0}),Pe(Le)!=="svelte-1mnkg1"&&(Le.textContent=ke),Ut.forEach(S),Oe.forEach(S),this.h()},h(){R(e,"class","panel-header"),me(o,"font-size","13px"),me(o,"margin-bottom","8px"),v.__value="",Ke(v,v.__value),i[0]===void 0&&hn(()=>i[10].call(g)),R(l,"class","form-group"),R(x,"class","btn-primary svelte-xy1nc2"),x.disabled=A=!i[0],R(p,"class","export-buttons svelte-xy1nc2"),me(T,"font-size","11px"),me(T,"color","var(--text-muted)"),me(T,"margin-top","4px"),R(r,"class","export-section svelte-xy1nc2"),me(U,"border-color","var(--border)"),me(U,"margin","16px 0"),me(K,"font-size","13px"),me(K,"margin-bottom","8px"),ue.__value="",Ke(ue,ue.__value),i[1]===void 0&&hn(()=>i[11].call(se)),R(j,"class","form-group"),R(B,"class","btn-secondary svelte-xy1nc2"),B.disabled=oe=!i[1],R(I,"class","btn-secondary svelte-xy1nc2"),I.disabled=Se=!i[1],R(fe,"class","export-buttons svelte-xy1nc2"),R(N,"class","export-section svelte-xy1nc2"),me(q,"border-color","var(--border)"),me(q,"margin","16px 0"),me(Ne,"font-size","13px"),me(Ne,"margin-bottom","8px"),R(_e,"class","btn-primary"),_e.disabled=P=!i[2],me(_e,"width","100%"),me(Te,"font-size","11px"),me(Te,"color","var(--text-muted)"),me(Te,"margin-top","4px"),R(ye,"class","export-section svelte-xy1nc2"),me(Y,"border-color","var(--border)"),me(Y,"margin","16px 0"),me(re,"font-size","13px"),me(re,"margin-bottom","8px"),R(xe,"class","btn-primary"),xe.disabled=Ye=!i[0],me(xe,"width","100%"),me(Le,"font-size","11px"),me(Le,"color","var(--text-muted)"),me(Le,"margin-top","4px"),R(Q,"class","export-section svelte-xy1nc2"),R(s,"class","panel-body scrollable")},m(we,Oe){ge(we,e,Oe),ge(we,n,Oe),ge(we,s,Oe),f(s,r),f(r,o),f(r,c),f(r,l),f(l,u),f(l,d),f(l,g),f(g,v);for(let Xe=0;Xe<He.length;Xe+=1)He[Xe]&&He[Xe].m(g,null);Tt(g,i[0],!0),f(r,_),f(r,p),f(p,x),f(x,b),f(r,C),f(r,T),f(s,L),f(s,U),f(s,y),f(s,N),f(N,K),f(N,O),f(N,j),f(j,W),f(j,te),f(j,se),f(se,ue);for(let Xe=0;Xe<De.length;Xe+=1)De[Xe]&&De[Xe].m(se,null);Tt(se,i[1],!0),f(N,ce),f(N,fe),f(fe,B),f(B,J),f(fe,D),f(fe,I),f(I,be),f(s,Ce),f(s,q),f(s,Ae),f(s,ye),f(ye,Ne),f(ye,ie),f(ye,_e),f(_e,k),f(ye,ve),f(ye,Te),f(s,H),f(s,Y),f(s,he),f(s,Q),f(Q,re),f(Q,Ee),f(Q,xe),f(xe,Re),f(Q,Fe),f(Q,Le),Z||(Be=[ze(g,"change",i[10]),ze(x,"click",i[5]),ze(se,"change",i[11]),ze(B,"click",i[6]),ze(I,"click",i[7]),ze(_e,"click",i[8]),ze(xe,"click",i[9])],Z=!0)},p(we,[Oe]){if(Oe&8){qe=et(we[3].filter(jc));let Xe;for(Xe=0;Xe<qe.length;Xe+=1){const tt=Gc(we,qe,Xe);He[Xe]?He[Xe].p(tt,Oe):(He[Xe]=Wc(tt),He[Xe].c(),He[Xe].m(g,null))}for(;Xe<He.length;Xe+=1)He[Xe].d(1);He.length=qe.length}if(Oe&9&&Tt(g,we[0]),Oe&9&&A!==(A=!we[0])&&(x.disabled=A),Oe&16){G=et(we[4]);let Xe;for(Xe=0;Xe<G.length;Xe+=1){const tt=Hc(we,G,Xe);De[Xe]?De[Xe].p(tt,Oe):(De[Xe]=Xc(tt),De[Xe].c(),De[Xe].m(se,null))}for(;Xe<De.length;Xe+=1)De[Xe].d(1);De.length=G.length}Oe&18&&Tt(se,we[1]),Oe&18&&oe!==(oe=!we[1])&&(B.disabled=oe),Oe&18&&Se!==(Se=!we[1])&&(I.disabled=Se),Oe&4&&P!==(P=!we[2])&&(_e.disabled=P),Oe&9&&Ye!==(Ye=!we[0])&&(xe.disabled=Ye)},i:yt,o:yt,d(we){we&&(S(e),S(n),S(s)),Et(He,we),Et(De,we),Z=!1,At(Be)}}}const jc=i=>i.status==="completed";function r0(i,e,t){let n,s,r;Qe(i,Bn,m=>t(2,n=m)),Qe(i,Ls,m=>t(3,s=m)),Qe(i,Ps,m=>t(4,r=m));let o="",a="";async function c(){if(!o){$e("请选择建模结果","warning");return}try{const _=await(await ft.exportGltf(o)).blob(),p=URL.createObjectURL(_),x=document.createElement("a");x.href=p,x.download=`model_${o}.glb`,x.click(),URL.revokeObjectURL(p),$e("glTF模型已导出","success")}catch(m){$e(`导出glTF失败: ${m.message}`,"error")}}async function l(){if(!a){$e("请选择剖面","warning");return}try{const _=await(await ft.exportProfilePng(a)).blob(),p=URL.createObjectURL(_),x=document.createElement("a");x.href=p,x.download=`profile_${a}.png`,x.click(),URL.revokeObjectURL(p),$e("剖面PNG已导出","success")}catch(m){$e(`导出PNG失败: ${m.message}`,"error")}}async function u(){if(!a){$e("请选择剖面","warning");return}try{const _=await(await ft.exportProfileSvg(a)).blob(),p=URL.createObjectURL(_),x=document.createElement("a");x.href=p,x.download=`profile_${a}.svg`,x.click(),URL.revokeObjectURL(p),$e("剖面SVG已导出","success")}catch(m){$e(`导出SVG失败: ${m.message}`,"error")}}async function h(){if(!n){$e("请先选择项目","warning");return}try{const _=await(await ft.exportStatsExcel(n.id)).blob(),p=URL.createObjectURL(_),x=document.createElement("a");x.href=p,x.download=`stats_${n.id}.xlsx`,x.click(),URL.revokeObjectURL(p),$e("统计表已导出","success")}catch(m){$e(`导出Excel失败: ${m.message}`,"error")}}async function d(){if(!o){$e("请选择建模结果","warning");return}try{const _=await(await ft.exportReportPdf(o)).blob(),p=URL.createObjectURL(_),x=document.createElement("a");x.href=p,x.download=`report_${o}.pdf`,x.click(),URL.revokeObjectURL(p),$e("报告已导出","success")}catch(m){$e(`导出PDF失败: ${m.message}`,"error")}}function g(){o=fn(this),t(0,o)}function v(){a=fn(this),t(1,a)}return[o,a,n,s,r,c,l,u,h,d,g,v]}class o0 extends pn{constructor(e){super(),mn(this,e,r0,s0,dn,{})}}function qc(i){let e,t,n="已加载",s,r,o="清除",a,c;return{c(){e=M("div"),t=M("span"),t.textContent=n,s=V(),r=M("button"),r.textContent=o,this.h()},l(l){e=E(l,"DIV",{style:!0});var u=F(e);t=E(u,"SPAN",{class:!0,"data-svelte-h":!0}),Pe(t)!=="svelte-1k217nw"&&(t.textContent=n),s=z(u),r=E(u,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(r)!=="svelte-xi3j00"&&(r.textContent=o),u.forEach(S),this.h()},h(){R(t,"class","badge badge-success"),R(r,"class","btn-danger btn-sm"),me(e,"display","flex"),me(e,"align-items","center"),me(e,"gap","6px"),me(e,"margin-top","4px")},m(l,u){ge(l,e,u),f(e,t),f(e,s),f(e,r),a||(c=ze(r,"click",i[5]),a=!0)},p:yt,d(l){l&&S(e),a=!1,c()}}}function Yc(i){let e,t,n="已加载",s,r,o="清除",a,c;return{c(){e=M("div"),t=M("span"),t.textContent=n,s=V(),r=M("button"),r.textContent=o,this.h()},l(l){e=E(l,"DIV",{style:!0});var u=F(e);t=E(u,"SPAN",{class:!0,"data-svelte-h":!0}),Pe(t)!=="svelte-1k217nw"&&(t.textContent=n),s=z(u),r=E(u,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(r)!=="svelte-1i2ssbg"&&(r.textContent=o),u.forEach(S),this.h()},h(){R(t,"class","badge badge-success"),R(r,"class","btn-danger btn-sm"),me(e,"display","flex"),me(e,"align-items","center"),me(e,"gap","6px"),me(e,"margin-top","4px")},m(l,u){ge(l,e,u),f(e,t),f(e,s),f(e,r),a||(c=ze(r,"click",i[6]),a=!0)},p:yt,d(l){l&&S(e),a=!1,c()}}}function a0(i){let e,t,n="地表贴图",s,r,o=i[2].visible?"隐藏":"显示",a,c,l,u,h,d="正射影像 (贴图纹理)",g,v,m,_,p,x,b,A="DEM 灰度图 (地形起伏)",C,T,w,L,U,y,N,K=(i[2].opacity*100).toFixed(0)+"",$,O,j,W,ee,te,se,ue=i[2].orthoImage&&qc(i),le=i[2].demImage&&Yc(i);return{c(){e=M("div"),t=M("h3"),t.textContent=n,s=V(),r=M("button"),a=pe(o),c=V(),l=M("div"),u=M("div"),h=M("label"),h.textContent=d,g=V(),v=M("div"),m=M("input"),_=V(),ue&&ue.c(),p=V(),x=M("div"),b=M("label"),b.textContent=A,C=V(),T=M("input"),w=V(),le&&le.c(),L=V(),U=M("div"),y=M("label"),N=pe("贴图透明度: "),$=pe(K),O=pe("%"),j=V(),W=M("input"),this.h()},l(ce){e=E(ce,"DIV",{class:!0});var fe=F(e);t=E(fe,"H3",{"data-svelte-h":!0}),Pe(t)!=="svelte-gzaxfa"&&(t.textContent=n),s=z(fe),r=E(fe,"BUTTON",{class:!0});var B=F(r);a=de(B,o),B.forEach(S),fe.forEach(S),c=z(ce),l=E(ce,"DIV",{class:!0,style:!0});var J=F(l);u=E(J,"DIV",{class:!0});var oe=F(u);h=E(oe,"LABEL",{"data-svelte-h":!0}),Pe(h)!=="svelte-txh69p"&&(h.textContent=d),g=z(oe),v=E(oe,"DIV",{style:!0});var D=F(v);m=E(D,"INPUT",{type:!0,id:!0,accept:!0}),D.forEach(S),_=z(oe),ue&&ue.l(oe),oe.forEach(S),p=z(J),x=E(J,"DIV",{class:!0});var I=F(x);b=E(I,"LABEL",{"data-svelte-h":!0}),Pe(b)!=="svelte-1aq3yz3"&&(b.textContent=A),C=z(I),T=E(I,"INPUT",{type:!0,id:!0,accept:!0}),w=z(I),le&&le.l(I),I.forEach(S),L=z(J),U=E(J,"DIV",{class:!0});var be=F(U);y=E(be,"LABEL",{});var Se=F(y);N=de(Se,"贴图透明度: "),$=de(Se,K),O=de(Se,"%"),Se.forEach(S),j=z(be),W=E(be,"INPUT",{type:!0,min:!0,max:!0}),be.forEach(S),J.forEach(S),this.h()},h(){R(r,"class","btn-secondary btn-sm"),R(e,"class","panel-header"),R(m,"type","file"),R(m,"id","orthoInput"),R(m,"accept","image/*"),me(v,"display","flex"),me(v,"gap","4px"),me(v,"align-items","center"),R(u,"class","form-group"),R(T,"type","file"),R(T,"id","demInput"),R(T,"accept","image/*"),R(x,"class","form-group"),R(W,"type","range"),R(W,"min","0"),R(W,"max","100"),W.value=ee=i[2].opacity*100,R(U,"class","form-group"),R(l,"class","panel-body"),me(l,"padding","10px 12px")},m(ce,fe){ge(ce,e,fe),f(e,t),f(e,s),f(e,r),f(r,a),ge(ce,c,fe),ge(ce,l,fe),f(l,u),f(u,h),f(u,g),f(u,v),f(v,m),i[8](m),f(u,_),ue&&ue.m(u,null),f(l,p),f(l,x),f(x,b),f(x,C),f(x,T),i[9](T),f(x,w),le&&le.m(x,null),f(l,L),f(l,U),f(U,y),f(y,N),f(y,$),f(y,O),f(U,j),f(U,W),te||(se=[ze(r,"click",i[7]),ze(m,"change",i[3]),ze(T,"change",i[4]),ze(W,"input",i[10])],te=!0)},p(ce,[fe]){fe&4&&o!==(o=ce[2].visible?"隐藏":"显示")&&Ve(a,o),ce[2].orthoImage?ue?ue.p(ce,fe):(ue=qc(ce),ue.c(),ue.m(u,null)):ue&&(ue.d(1),ue=null),ce[2].demImage?le?le.p(ce,fe):(le=Yc(ce),le.c(),le.m(x,null)):le&&(le.d(1),le=null),fe&4&&K!==(K=(ce[2].opacity*100).toFixed(0)+"")&&Ve($,K),fe&4&&ee!==(ee=ce[2].opacity*100)&&(W.value=ee)},i:yt,o:yt,d(ce){ce&&(S(e),S(c),S(l)),i[8](null),ue&&ue.d(),i[9](null),le&&le.d(),te=!1,At(se)}}}function Kc(i){return new Promise((e,t)=>{const n=new FileReader;n.onload=s=>{const r=new Image;r.onload=()=>e(r),r.onerror=t,r.src=s.target.result},n.onerror=t,n.readAsDataURL(i)})}function l0(i,e,t){let n;Qe(i,Jn,v=>t(2,n=v));let s,r;async function o(v){var _;const m=(_=v.target.files)==null?void 0:_[0];if(m){if(!m.type.startsWith("image/")){$e("请上传图片文件","warning");return}try{const p=await Kc(m);it(Jn,n={...n,orthoImage:p},n),$e(`正射影像已加载: ${m.name}`,"success")}catch{$e("加载正射影像失败","error")}v.target.value=""}}async function a(v){var _;const m=(_=v.target.files)==null?void 0:_[0];if(m){if(!m.type.startsWith("image/")){$e("请上传灰度图 (PNG/JPG)","warning");return}try{const p=await Kc(m);it(Jn,n={...n,demImage:p},n),$e(`DEM 灰度图已加载: ${m.name}`,"success")}catch{$e("加载DEM失败","error")}v.target.value=""}}function c(){it(Jn,n={...n,orthoImage:null},n)}function l(){it(Jn,n={...n,demImage:null},n)}const u=()=>it(Jn,n={...n,visible:!n.visible},n);function h(v){ni[v?"unshift":"push"](()=>{s=v,t(0,s)})}function d(v){ni[v?"unshift":"push"](()=>{r=v,t(1,r)})}return[s,r,n,o,a,c,l,u,h,d,v=>it(Jn,n={...n,opacity:v.target.value/100},n)]}class c0 extends pn{constructor(e){super(),mn(this,e,l0,a0,dn,{})}}function u0(i){let e,t=i[0].message+"",n,s,r,o="✕",a,c,l;return{c(){e=M("div"),n=pe(t),s=V(),r=M("button"),r.textContent=o,this.h()},l(u){e=E(u,"DIV",{class:!0});var h=F(e);n=de(h,t),s=z(h),r=E(h,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(r)!=="svelte-4r1jhq"&&(r.textContent=o),h.forEach(S),this.h()},h(){R(r,"class","close-btn svelte-ii73z2"),R(e,"class",a="toast toast-"+i[0].type+" svelte-ii73z2")},m(u,h){ge(u,e,h),f(e,n),f(e,s),f(e,r),c||(l=ze(r,"click",i[2]),c=!0)},p(u,[h]){h&1&&t!==(t=u[0].message+"")&&Ve(n,t),h&1&&a!==(a="toast toast-"+u[0].type+" svelte-ii73z2")&&R(e,"class",a)},i:yt,o:yt,d(u){u&&S(e),c=!1,l()}}}function f0(i,e,t){let n;Qe(i,Is,o=>t(1,n=o));let{toast:s}=e;const r=()=>it(Is,n=n.filter(o=>o.id!==s.id),n);return i.$$set=o=>{"toast"in o&&t(0,s=o.toast)},[s,n,r]}class h0 extends pn{constructor(e){super(),mn(this,e,f0,u0,dn,{toast:0})}}function Zc(i,e,t){const n=i.slice();return n[58]=e[t],n}function Jc(i,e,t){const n=i.slice();return n[61]=e[t],n}function Qc(i,e,t){const n=i.slice();return n[64]=e[t],n}function $c(i,e,t){const n=i.slice();return n[67]=e[t],n}function eu(i,e,t){const n=i.slice();n[81]=e[t];const s=n[3].find(function(...o){return i[40](n[81],...o)});return n[71]=s,n}function tu(i,e,t){const n=i.slice();return n[71]=e[t],n}function So(i){const e=i.slice(),t=e[16][e[0]]||[];return e[78]=t,e}function nu(i,e,t){const n=i.slice();return n[71]=e[t],n}function iu(i,e,t){const n=i.slice();n[70]=e[t];const s=n[3].find(function(...c){return i[32](n[70],...c)});n[71]=s;const r=n[20](n[70].water_level,n[70].borehole_id);n[72]=r;const o=n[21](n[70].id,n[70].borehole_id);return n[73]=o,n}function su(i,e,t){const n=i.slice();return n[71]=e[t],n}function ru(i,e,t){const n=i.slice();return n[86]=e[t],n}function ou(i){let e,t=i[86].label+"",n,s,r,o;function a(){return i[29](i[86])}return{c(){e=M("button"),n=pe(t),s=V(),this.h()},l(c){e=E(c,"BUTTON",{class:!0});var l=F(e);n=de(l,t),s=z(l),l.forEach(S),this.h()},h(){R(e,"class","sub-tab-btn svelte-kfrf0t"),Kt(e,"active",i[2]===i[86].id)},m(c,l){ge(c,e,l),f(e,n),f(e,s),r||(o=ze(e,"click",a),r=!0)},p(c,l){i=c,l[0]&262148&&Kt(e,"active",i[2]===i[86].id)},d(c){c&&S(e),r=!1,o()}}}function d0(i){let e,t,n="选择钻孔",s,r,o,a="请选择钻孔",c,l,u,h,d,g=et(i[3]),v=[];for(let p=0;p<g.length;p+=1)v[p]=au(tu(i,g,p));let m=i[9]&&lu(i),_=i[17].length>0&&uu(i);return{c(){e=M("div"),t=M("label"),t.textContent=n,s=V(),r=M("select"),o=M("option"),o.textContent=a;for(let p=0;p<v.length;p+=1)v[p].c();c=V(),m&&m.c(),l=V(),_&&_.c(),u=It(),this.h()},l(p){e=E(p,"DIV",{class:!0,style:!0});var x=F(e);t=E(x,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(t)!=="svelte-kq5742"&&(t.textContent=n),s=z(x),r=E(x,"SELECT",{style:!0});var b=F(r);o=E(b,"OPTION",{"data-svelte-h":!0}),Pe(o)!=="svelte-1do3tcg"&&(o.textContent=a);for(let A=0;A<v.length;A+=1)v[A].l(b);b.forEach(S),x.forEach(S),c=z(p),m&&m.l(p),l=z(p),_&&_.l(p),u=It(),this.h()},h(){me(t,"font-size","12px"),o.__value="",Ke(o,o.__value),me(r,"width","100%"),me(r,"font-size","12px"),i[9]===void 0&&hn(()=>i[34].call(r)),R(e,"class","form-group"),me(e,"margin-bottom","10px")},m(p,x){ge(p,e,x),f(e,t),f(e,s),f(e,r),f(r,o);for(let b=0;b<v.length;b+=1)v[b]&&v[b].m(r,null);Tt(r,i[9],!0),ge(p,c,x),m&&m.m(p,x),ge(p,l,x),_&&_.m(p,x),ge(p,u,x),h||(d=[ze(r,"change",i[34]),ze(r,"change",i[35])],h=!0)},p(p,x){if(x[0]&8){g=et(p[3]);let b;for(b=0;b<g.length;b+=1){const A=tu(p,g,b);v[b]?v[b].p(A,x):(v[b]=au(A),v[b].c(),v[b].m(r,null))}for(;b<v.length;b+=1)v[b].d(1);v.length=g.length}x[0]&520&&Tt(r,p[9]),p[9]?m?m.p(p,x):(m=lu(p),m.c(),m.m(l.parentNode,l)):m&&(m.d(1),m=null),p[17].length>0?_?_.p(p,x):(_=uu(p),_.c(),_.m(u.parentNode,u)):_&&(_.d(1),_=null)},d(p){p&&(S(e),S(c),S(l),S(u)),Et(v,p),m&&m.d(p),_&&_.d(p),h=!1,At(d)}}}function p0(i){let e,t,n="选择钻孔",s,r,o,a="请选择钻孔",c,l,u,h,d,g,v,m=et(i[3]),_=[];for(let x=0;x<m.length;x+=1)_[x]=hu(nu(i,m,x));let p=i[0]&&(i[16][i[0]]||[]).length>0&&du(So(i));return{c(){e=M("div"),t=M("label"),t.textContent=n,s=V(),r=M("select"),o=M("option"),o.textContent=a;for(let x=0;x<_.length;x+=1)_[x].c();c=V(),l=M("div"),u=M("canvas"),h=V(),p&&p.c(),d=It(),this.h()},l(x){e=E(x,"DIV",{class:!0,style:!0});var b=F(e);t=E(b,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(t)!=="svelte-kq5742"&&(t.textContent=n),s=z(b),r=E(b,"SELECT",{style:!0});var A=F(r);o=E(A,"OPTION",{"data-svelte-h":!0}),Pe(o)!=="svelte-1do3tcg"&&(o.textContent=a);for(let T=0;T<_.length;T+=1)_[T].l(A);A.forEach(S),b.forEach(S),c=z(x),l=E(x,"DIV",{class:!0});var C=F(l);u=E(C,"CANVAS",{class:!0}),F(u).forEach(S),C.forEach(S),h=z(x),p&&p.l(x),d=It(),this.h()},h(){me(t,"font-size","12px"),o.__value="",Ke(o,o.__value),me(r,"width","100%"),me(r,"font-size","12px"),R(e,"class","form-group"),me(e,"margin-bottom","10px"),R(u,"class","history-canvas svelte-kfrf0t"),R(l,"class","history-chart-container svelte-kfrf0t")},m(x,b){ge(x,e,b),f(e,t),f(e,s),f(e,r),f(r,o);for(let A=0;A<_.length;A+=1)_[A]&&_[A].m(r,null);Tt(r,i[0]),ge(x,c,b),ge(x,l,b),f(l,u),i[33](u),ge(x,h,b),p&&p.m(x,b),ge(x,d,b),g||(v=ze(r,"change",i[19]),g=!0)},p(x,b){if(b[0]&65544){m=et(x[3]);let A;for(A=0;A<m.length;A+=1){const C=nu(x,m,A);_[A]?_[A].p(C,b):(_[A]=hu(C),_[A].c(),_[A].m(r,null))}for(;A<_.length;A+=1)_[A].d(1);_.length=m.length}b[0]&9&&Tt(r,x[0]),x[0]&&(x[16][x[0]]||[]).length>0?p?p.p(So(x),b):(p=du(So(x)),p.c(),p.m(d.parentNode,d)):p&&(p.d(1),p=null)},d(x){x&&(S(e),S(c),S(l),S(h),S(d)),Et(_,x),i[33](null),p&&p.d(x),g=!1,v()}}}function m0(i){let e,t,n="筛选钻孔",s,r,o,a="全部钻孔",c,l,u,h,d=et(i[3]),g=[];for(let p=0;p<d.length;p+=1)g[p]=pu(su(i,d,p));function v(p,x){return p[1].length===0?g0:_0}let m=v(i),_=m(i);return{c(){e=M("div"),t=M("label"),t.textContent=n,s=V(),r=M("select"),o=M("option"),o.textContent=a;for(let p=0;p<g.length;p+=1)g[p].c();c=V(),_.c(),l=It(),this.h()},l(p){e=E(p,"DIV",{class:!0,style:!0});var x=F(e);t=E(x,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(t)!=="svelte-6fopgs"&&(t.textContent=n),s=z(x),r=E(x,"SELECT",{style:!0});var b=F(r);o=E(b,"OPTION",{"data-svelte-h":!0}),Pe(o)!=="svelte-r6bhbn"&&(o.textContent=a);for(let A=0;A<g.length;A+=1)g[A].l(b);b.forEach(S),x.forEach(S),c=z(p),_.l(p),l=It(),this.h()},h(){me(t,"font-size","12px"),o.__value="",Ke(o,o.__value),me(r,"width","100%"),me(r,"font-size","12px"),R(e,"class","form-group"),me(e,"margin-bottom","10px")},m(p,x){ge(p,e,x),f(e,t),f(e,s),f(e,r),f(r,o);for(let b=0;b<g.length;b+=1)g[b]&&g[b].m(r,null);Tt(r,i[0]),ge(p,c,x),_.m(p,x),ge(p,l,x),u||(h=ze(r,"change",i[19]),u=!0)},p(p,x){if(x[0]&8){d=et(p[3]);let b;for(b=0;b<d.length;b+=1){const A=su(p,d,b);g[b]?g[b].p(A,x):(g[b]=pu(A),g[b].c(),g[b].m(r,null))}for(;b<g.length;b+=1)g[b].d(1);g.length=d.length}x[0]&9&&Tt(r,p[0]),m===(m=v(p))&&_?_.p(p,x):(_.d(1),_=m(p),_&&(_.c(),_.m(l.parentNode,l)))},d(p){p&&(S(e),S(c),S(l)),Et(g,p),_.d(p),u=!1,h()}}}function au(i){let e,t=i[71].hole_id+"",n,s;return{c(){e=M("option"),n=pe(t),this.h()},l(r){e=E(r,"OPTION",{});var o=F(e);n=de(o,t),o.forEach(S),this.h()},h(){e.__value=s=i[71].id,Ke(e,e.__value)},m(r,o){ge(r,e,o),f(e,n)},p(r,o){o[0]&8&&t!==(t=r[71].hole_id+"")&&Ve(n,t),o[0]&8&&s!==(s=r[71].id)&&(e.__value=s,Ke(e,e.__value))},d(r){r&&S(e)}}}function lu(i){let e,t,n,s="蓝色预警阈值 (水位偏高)",r,o,a,c,l="水位超过此值触发蓝色预警",u,h,d,g="橙色预警阈值 (水位异常)",v,m,_,p,x="水位超过此值触发橙色预警",b,A,C,T="红色预警阈值 (水位危险)",w,L,U,y,N="水位超过此值触发红色预警",K,$,O,j=i[13]?"保存中...":i[14]?"更新阈值":"保存阈值",W,ee,te,se,ue="业务规则: 蓝色 < 橙色 < 红色",le,ce,fe=i[14]&&cu(i);return{c(){e=M("div"),t=M("div"),n=M("label"),n.textContent=s,r=V(),o=M("input"),a=V(),c=M("span"),c.textContent=l,u=V(),h=M("div"),d=M("label"),d.textContent=g,v=V(),m=M("input"),_=V(),p=M("span"),p.textContent=x,b=V(),A=M("div"),C=M("label"),C.textContent=T,w=V(),L=M("input"),U=V(),y=M("span"),y.textContent=N,K=V(),$=M("div"),O=M("button"),W=pe(j),ee=V(),fe&&fe.c(),te=V(),se=M("p"),se.textContent=ue,this.h()},l(B){e=E(B,"DIV",{class:!0});var J=F(e);t=E(J,"DIV",{class:!0});var oe=F(t);n=E(oe,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(n)!=="svelte-1skzr51"&&(n.textContent=s),r=z(oe),o=E(oe,"INPUT",{type:!0,step:!0,placeholder:!0,style:!0}),a=z(oe),c=E(oe,"SPAN",{style:!0,"data-svelte-h":!0}),Pe(c)!=="svelte-shwksy"&&(c.textContent=l),oe.forEach(S),u=z(J),h=E(J,"DIV",{class:!0});var D=F(h);d=E(D,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(d)!=="svelte-11uzzzu"&&(d.textContent=g),v=z(D),m=E(D,"INPUT",{type:!0,step:!0,placeholder:!0,style:!0}),_=z(D),p=E(D,"SPAN",{style:!0,"data-svelte-h":!0}),Pe(p)!=="svelte-7bral2"&&(p.textContent=x),D.forEach(S),b=z(J),A=E(J,"DIV",{class:!0});var I=F(A);C=E(I,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(C)!=="svelte-qwak8b"&&(C.textContent=T),w=z(I),L=E(I,"INPUT",{type:!0,step:!0,placeholder:!0,style:!0}),U=z(I),y=E(I,"SPAN",{style:!0,"data-svelte-h":!0}),Pe(y)!=="svelte-ed82hk"&&(y.textContent=N),I.forEach(S),K=z(J),$=E(J,"DIV",{class:!0,style:!0});var be=F($);O=E(be,"BUTTON",{class:!0,style:!0});var Se=F(O);W=de(Se,j),Se.forEach(S),ee=z(be),fe&&fe.l(be),be.forEach(S),te=z(J),se=E(J,"P",{style:!0,"data-svelte-h":!0}),Pe(se)!=="svelte-qa2m22"&&(se.textContent=ue),J.forEach(S),this.h()},h(){me(n,"font-size","12px"),R(o,"type","number"),R(o,"step","0.01"),R(o,"placeholder","输入蓝色预警阈值"),me(o,"width","100%"),me(c,"font-size","10px"),me(c,"color","#2196f3"),R(t,"class","form-group"),me(d,"font-size","12px"),R(m,"type","number"),R(m,"step","0.01"),R(m,"placeholder","输入橙色预警阈值"),me(m,"width","100%"),me(p,"font-size","10px"),me(p,"color","#ff9800"),R(h,"class","form-group"),me(C,"font-size","12px"),R(L,"type","number"),R(L,"step","0.01"),R(L,"placeholder","输入红色预警阈值"),me(L,"width","100%"),me(y,"font-size","10px"),me(y,"color","#f44336"),R(A,"class","form-group"),R(O,"class","btn-primary btn-sm"),me(O,"width","100%"),O.disabled=i[13],R($,"class","form-group"),me($,"margin-top","8px"),me(se,"font-size","11px"),me(se,"color","var(--text-muted)"),me(se,"margin-top","8px"),R(e,"class","threshold-form svelte-kfrf0t")},m(B,J){ge(B,e,J),f(e,t),f(t,n),f(t,r),f(t,o),Ke(o,i[10]),f(t,a),f(t,c),f(e,u),f(e,h),f(h,d),f(h,v),f(h,m),Ke(m,i[11]),f(h,_),f(h,p),f(e,b),f(e,A),f(A,C),f(A,w),f(A,L),Ke(L,i[12]),f(A,U),f(A,y),f(e,K),f(e,$),f($,O),f(O,W),f($,ee),fe&&fe.m($,null),f(e,te),f(e,se),le||(ce=[ze(o,"input",i[36]),ze(m,"input",i[37]),ze(L,"input",i[38]),ze(O,"click",i[26])],le=!0)},p(B,J){J[0]&1024&&ct(o.value)!==B[10]&&Ke(o,B[10]),J[0]&2048&&ct(m.value)!==B[11]&&Ke(m,B[11]),J[0]&4096&&ct(L.value)!==B[12]&&Ke(L,B[12]),J[0]&24576&&j!==(j=B[13]?"保存中...":B[14]?"更新阈值":"保存阈值")&&Ve(W,j),J[0]&8192&&(O.disabled=B[13]),B[14]?fe?fe.p(B,J):(fe=cu(B),fe.c(),fe.m($,null)):fe&&(fe.d(1),fe=null)},d(B){B&&S(e),fe&&fe.d(),le=!1,At(ce)}}}function cu(i){let e,t="删除阈值设置",n,s;return{c(){e=M("button"),e.textContent=t,this.h()},l(r){e=E(r,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),Pe(e)!=="svelte-7rlshn"&&(e.textContent=t),this.h()},h(){R(e,"class","btn-danger btn-sm"),me(e,"width","100%"),me(e,"margin-top","6px")},m(r,o){ge(r,e,o),n||(s=ze(e,"click",i[27]),n=!0)},p:yt,d(r){r&&S(e),n=!1,s()}}}function uu(i){let e,t,n="已配置阈值的钻孔",s,r,o=et(i[17]),a=[];for(let c=0;c<o.length;c+=1)a[c]=fu(eu(i,o,c));return{c(){e=M("div"),t=M("h4"),t.textContent=n,s=V(),r=M("div");for(let c=0;c<a.length;c+=1)a[c].c();this.h()},l(c){e=E(c,"DIV",{class:!0});var l=F(e);t=E(l,"H4",{style:!0,"data-svelte-h":!0}),Pe(t)!=="svelte-m9yzll"&&(t.textContent=n),s=z(l),r=E(l,"DIV",{class:!0});var u=F(r);for(let h=0;h<a.length;h+=1)a[h].l(u);u.forEach(S),l.forEach(S),this.h()},h(){me(t,"font-size","12px"),me(t,"margin","12px 0 6px"),me(t,"color","var(--text-secondary)"),R(r,"class","thresholds-table svelte-kfrf0t"),R(e,"class","thresholds-list svelte-kfrf0t")},m(c,l){ge(c,e,l),f(e,t),f(e,s),f(e,r);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(r,null)},p(c,l){if(l[0]&33685512){o=et(c[17]);let u;for(u=0;u<o.length;u+=1){const h=eu(c,o,u);a[u]?a[u].p(h,l):(a[u]=fu(h),a[u].c(),a[u].m(r,null))}for(;u<a.length;u+=1)a[u].d(1);a.length=o.length}},d(c){c&&S(e),Et(a,c)}}}function fu(i){var T;let e,t,n=(((T=i[71])==null?void 0:T.hole_id)||"未知")+"",s,r,o,a,c=i[81].blue_threshold.toFixed(2)+"",l,u,h,d=i[81].orange_threshold.toFixed(2)+"",g,v,m,_=i[81].red_threshold.toFixed(2)+"",p,x,b,A;function C(){return i[39](i[81])}return{c(){e=M("div"),t=M("span"),s=pe(n),r=V(),o=M("div"),a=M("span"),l=pe(c),u=V(),h=M("span"),g=pe(d),v=V(),m=M("span"),p=pe(_),x=V(),this.h()},l(w){e=E(w,"DIV",{class:!0});var L=F(e);t=E(L,"SPAN",{class:!0});var U=F(t);s=de(U,n),U.forEach(S),r=z(L),o=E(L,"DIV",{class:!0});var y=F(o);a=E(y,"SPAN",{class:!0});var N=F(a);l=de(N,c),N.forEach(S),u=z(y),h=E(y,"SPAN",{class:!0});var K=F(h);g=de(K,d),K.forEach(S),v=z(y),m=E(y,"SPAN",{class:!0});var $=F(m);p=de($,_),$.forEach(S),y.forEach(S),x=z(L),L.forEach(S),this.h()},h(){R(t,"class","threshold-hole svelte-kfrf0t"),R(a,"class","tv tv-blue svelte-kfrf0t"),R(h,"class","tv tv-orange svelte-kfrf0t"),R(m,"class","tv tv-red svelte-kfrf0t"),R(o,"class","threshold-values svelte-kfrf0t"),R(e,"class","threshold-row svelte-kfrf0t")},m(w,L){ge(w,e,L),f(e,t),f(t,s),f(e,r),f(e,o),f(o,a),f(a,l),f(o,u),f(o,h),f(h,g),f(o,v),f(o,m),f(m,p),f(e,x),b||(A=ze(e,"click",C),b=!0)},p(w,L){var U;i=w,L[0]&131080&&n!==(n=(((U=i[71])==null?void 0:U.hole_id)||"未知")+"")&&Ve(s,n),L[0]&131072&&c!==(c=i[81].blue_threshold.toFixed(2)+"")&&Ve(l,c),L[0]&131072&&d!==(d=i[81].orange_threshold.toFixed(2)+"")&&Ve(g,d),L[0]&131072&&_!==(_=i[81].red_threshold.toFixed(2)+"")&&Ve(p,_)},d(w){w&&S(e),b=!1,A()}}}function hu(i){let e,t=i[71].hole_id+"",n,s,r=(i[16][i[71].id]||[]).length+"",o,a,c;return{c(){e=M("option"),n=pe(t),s=pe(" ("),o=pe(r),a=pe("条)"),this.h()},l(l){e=E(l,"OPTION",{});var u=F(e);n=de(u,t),s=de(u," ("),o=de(u,r),a=de(u,"条)"),u.forEach(S),this.h()},h(){e.__value=c=i[71].id,Ke(e,e.__value)},m(l,u){ge(l,e,u),f(e,n),f(e,s),f(e,o),f(e,a)},p(l,u){u[0]&8&&t!==(t=l[71].hole_id+"")&&Ve(n,t),u[0]&65544&&r!==(r=(l[16][l[71].id]||[]).length+"")&&Ve(o,r),u[0]&8&&c!==(c=l[71].id)&&(e.__value=c,Ke(e,e.__value))},d(l){l&&S(e)}}}function du(i){let e,t,n,s,r=i[78].length+"",o,a,c,l,u=Math.max(...i[78].map(Iu)).toFixed(2)+"",h,d,g,v,m,_=Math.min(...i[78].map(Nu)).toFixed(2)+"",p,x;return{c(){e=M("div"),t=M("div"),n=M("span"),s=pe("记录数: "),o=pe(r),a=V(),c=M("span"),l=pe("最高: "),h=pe(u),d=pe("m"),g=V(),v=M("span"),m=pe("最低: "),p=pe(_),x=pe("m"),this.h()},l(b){e=E(b,"DIV",{class:!0});var A=F(e);t=E(A,"DIV",{class:!0});var C=F(t);n=E(C,"SPAN",{});var T=F(n);s=de(T,"记录数: "),o=de(T,r),T.forEach(S),a=z(C),c=E(C,"SPAN",{});var w=F(c);l=de(w,"最高: "),h=de(w,u),d=de(w,"m"),w.forEach(S),g=z(C),v=E(C,"SPAN",{});var L=F(v);m=de(L,"最低: "),p=de(L,_),x=de(L,"m"),L.forEach(S),C.forEach(S),A.forEach(S),this.h()},h(){R(t,"class","stat-row svelte-kfrf0t"),R(e,"class","history-stats svelte-kfrf0t")},m(b,A){ge(b,e,A),f(e,t),f(t,n),f(n,s),f(n,o),f(t,a),f(t,c),f(c,l),f(c,h),f(c,d),f(t,g),f(t,v),f(v,m),f(v,p),f(v,x)},p(b,A){A[0]&65537&&r!==(r=b[78].length+"")&&Ve(o,r),A[0]&65537&&u!==(u=Math.max(...b[78].map(Iu)).toFixed(2)+"")&&Ve(h,u),A[0]&65537&&_!==(_=Math.min(...b[78].map(Nu)).toFixed(2)+"")&&Ve(p,_)},d(b){b&&S(e)}}}function pu(i){let e,t=i[71].hole_id+"",n,s;return{c(){e=M("option"),n=pe(t),this.h()},l(r){e=E(r,"OPTION",{});var o=F(e);n=de(o,t),o.forEach(S),this.h()},h(){e.__value=s=i[71].id,Ke(e,e.__value)},m(r,o){ge(r,e,o),f(e,n)},p(r,o){o[0]&8&&t!==(t=r[71].hole_id+"")&&Ve(n,t),o[0]&8&&s!==(s=r[71].id)&&(e.__value=s,Ke(e,e.__value))},d(r){r&&S(e)}}}function _0(i){let e,t=et(i[1]),n=[];for(let s=0;s<t.length;s+=1)n[s]=xu(iu(i,t,s));return{c(){e=M("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=E(s,"DIV",{class:!0});var r=F(e);for(let o=0;o<n.length;o+=1)n[o].l(r);r.forEach(S),this.h()},h(){R(e,"class","wl-list svelte-kfrf0t")},m(s,r){ge(s,e,r);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(e,null)},p(s,r){if(r[0]&24117259){t=et(s[1]);let o;for(o=0;o<t.length;o+=1){const a=iu(s,t,o);n[o]?n[o].p(a,r):(n[o]=xu(a),n[o].c(),n[o].m(e,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}},d(s){s&&S(e),Et(n,s)}}}function g0(i){let e,t='<p>暂无水位数据</p> <p style="font-size:12px;color:var(--text-muted);margin-top:4px;">点击&quot;导入CSV&quot;添加水位时序数据</p>';return{c(){e=M("div"),e.innerHTML=t,this.h()},l(n){e=E(n,"DIV",{class:!0,"data-svelte-h":!0}),Pe(e)!=="svelte-1mxdbwe"&&(e.innerHTML=t),this.h()},h(){R(e,"class","empty-state svelte-kfrf0t")},m(n,s){ge(n,e,s)},p:yt,d(n){n&&S(e)}}}function mu(i){var se;let e,t,n,s,r=(((se=i[71])==null?void 0:se.hole_id)||"未知")+"",o,a,c,l,u,h="删除",d,g,v,m,_=i[70].obs_date+"",p,x,b,A,C=i[70].water_level.toFixed(2)+"",T,w,L,U,y,N,K,$,O=i[73]&&_u(i),j=i[72]&&gu(i);function W(){return i[31](i[70])}let ee=i[70].water_temp!=null&&vu(i),te=i[70].conductivity!=null&&bu(i);return{c(){e=M("div"),t=M("div"),n=M("div"),s=M("strong"),o=pe(r),a=V(),O&&O.c(),c=V(),j&&j.c(),l=V(),u=M("button"),u.textContent=h,d=V(),g=M("div"),v=M("span"),m=pe("日期: "),p=pe(_),x=V(),b=M("span"),A=pe("水位: "),T=pe(C),w=pe("m"),L=V(),ee&&ee.c(),U=V(),te&&te.c(),y=V(),this.h()},l(ue){e=E(ue,"DIV",{class:!0});var le=F(e);t=E(le,"DIV",{class:!0});var ce=F(t);n=E(ce,"DIV",{class:!0});var fe=F(n);s=E(fe,"STRONG",{});var B=F(s);o=de(B,r),B.forEach(S),a=z(fe),O&&O.l(fe),c=z(fe),j&&j.l(fe),fe.forEach(S),l=z(ce),u=E(ce,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),Pe(u)!=="svelte-k58z44"&&(u.textContent=h),ce.forEach(S),d=z(le),g=E(le,"DIV",{class:!0});var J=F(g);v=E(J,"SPAN",{});var oe=F(v);m=de(oe,"日期: "),p=de(oe,_),oe.forEach(S),x=z(J),b=E(J,"SPAN",{});var D=F(b);A=de(D,"水位: "),T=de(D,C),w=de(D,"m"),D.forEach(S),L=z(J),ee&&ee.l(J),U=z(J),te&&te.l(J),J.forEach(S),y=z(le),le.forEach(S),this.h()},h(){R(n,"class","wl-card-title svelte-kfrf0t"),R(u,"class","btn-danger btn-sm"),me(u,"font-size","10px"),me(u,"padding","2px 6px"),R(t,"class","wl-card-header svelte-kfrf0t"),R(g,"class","wl-card-info svelte-kfrf0t"),R(e,"class",N="wl-card "+Du(i[72])+" "+(i[73]?"wl-anomaly":"")+" svelte-kfrf0t")},m(ue,le){ge(ue,e,le),f(e,t),f(t,n),f(n,s),f(s,o),f(n,a),O&&O.m(n,null),f(n,c),j&&j.m(n,null),f(t,l),f(t,u),f(e,d),f(e,g),f(g,v),f(v,m),f(v,p),f(g,x),f(g,b),f(b,A),f(b,T),f(b,w),f(g,L),ee&&ee.m(g,null),f(g,U),te&&te.m(g,null),f(e,y),K||($=ze(u,"click",W),K=!0)},p(ue,le){var ce;i=ue,le[0]&10&&r!==(r=(((ce=i[71])==null?void 0:ce.hole_id)||"未知")+"")&&Ve(o,r),i[73]?O?O.p(i,le):(O=_u(i),O.c(),O.m(n,c)):O&&(O.d(1),O=null),i[72]?j?j.p(i,le):(j=gu(i),j.c(),j.m(n,null)):j&&(j.d(1),j=null),le[0]&2&&_!==(_=i[70].obs_date+"")&&Ve(p,_),le[0]&2&&C!==(C=i[70].water_level.toFixed(2)+"")&&Ve(T,C),i[70].water_temp!=null?ee?ee.p(i,le):(ee=vu(i),ee.c(),ee.m(g,U)):ee&&(ee.d(1),ee=null),i[70].conductivity!=null?te?te.p(i,le):(te=bu(i),te.c(),te.m(g,null)):te&&(te.d(1),te=null),le[0]&2&&N!==(N="wl-card "+Du(i[72])+" "+(i[73]?"wl-anomaly":"")+" svelte-kfrf0t")&&R(e,"class",N)},d(ue){ue&&S(e),O&&O.d(),j&&j.d(),ee&&ee.d(),te&&te.d(),K=!1,$()}}}function _u(i){let e,t="⚠️",n,s;function r(){return i[30](i[70])}return{c(){e=M("span"),e.textContent=t,this.h()},l(o){e=E(o,"SPAN",{class:!0,title:!0,"data-svelte-h":!0}),Pe(e)!=="svelte-1y6ibi4"&&(e.textContent=t),this.h()},h(){R(e,"class","anomaly-icon svelte-kfrf0t"),R(e,"title","异常值")},m(o,a){ge(o,e,a),n||(s=ze(e,"click",r),n=!0)},p(o,a){i=o},d(o){o&&S(e),n=!1,s()}}}function gu(i){let e,t=i[72]==="blue"?"蓝":i[72]==="orange"?"橙":"红",n,s;return{c(){e=M("span"),n=pe(t),this.h()},l(r){e=E(r,"SPAN",{class:!0});var o=F(e);n=de(o,t),o.forEach(S),this.h()},h(){R(e,"class",s="warning-badge warning-"+i[72]+" svelte-kfrf0t")},m(r,o){ge(r,e,o),f(e,n)},p(r,o){o[0]&2&&t!==(t=r[72]==="blue"?"蓝":r[72]==="orange"?"橙":"红")&&Ve(n,t),o[0]&2&&s!==(s="warning-badge warning-"+r[72]+" svelte-kfrf0t")&&R(e,"class",s)},d(r){r&&S(e)}}}function vu(i){let e,t,n=i[70].water_temp.toFixed(1)+"",s,r;return{c(){e=M("span"),t=pe("水温: "),s=pe(n),r=pe("℃")},l(o){e=E(o,"SPAN",{});var a=F(e);t=de(a,"水温: "),s=de(a,n),r=de(a,"℃"),a.forEach(S)},m(o,a){ge(o,e,a),f(e,t),f(e,s),f(e,r)},p(o,a){a[0]&2&&n!==(n=o[70].water_temp.toFixed(1)+"")&&Ve(s,n)},d(o){o&&S(e)}}}function bu(i){let e,t,n=i[70].conductivity.toFixed(1)+"",s,r;return{c(){e=M("span"),t=pe("电导率: "),s=pe(n),r=pe("μS/cm")},l(o){e=E(o,"SPAN",{});var a=F(e);t=de(a,"电导率: "),s=de(a,n),r=de(a,"μS/cm"),a.forEach(S)},m(o,a){ge(o,e,a),f(e,t),f(e,s),f(e,r)},p(o,a){a[0]&2&&n!==(n=o[70].conductivity.toFixed(1)+"")&&Ve(s,n)},d(o){o&&S(e)}}}function xu(i){let e,t=(!i[0]||i[70].borehole_id===i[0])&&mu(i);return{c(){t&&t.c(),e=It()},l(n){t&&t.l(n),e=It()},m(n,s){t&&t.m(n,s),ge(n,e,s)},p(n,s){!n[0]||n[70].borehole_id===n[0]?t?t.p(n,s):(t=mu(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(n){n&&S(e),t&&t.d(n)}}}function Eu(i){let e,t,n,s="导入水位CSV数据",r,o,a="CSV字段: 孔号/hole_id, 日期/date(yyyy-MM-dd), 水位标高/water_level, 水温/water_temp, 电导率/conductivity",c,l,u,h,d,g,v,m="关闭",_,p,x=i[6]?"导入中...":"开始导入",b,A,C,T,w=i[7]&&Mu(i);return{c(){e=M("div"),t=M("div"),n=M("h3"),n.textContent=s,r=V(),o=M("p"),o.textContent=a,c=V(),l=M("div"),u=M("input"),h=V(),w&&w.c(),d=V(),g=M("div"),v=M("button"),v.textContent=m,_=V(),p=M("button"),b=pe(x),this.h()},l(L){e=E(L,"DIV",{class:!0});var U=F(e);t=E(U,"DIV",{class:!0});var y=F(t);n=E(y,"H3",{"data-svelte-h":!0}),Pe(n)!=="svelte-q45yow"&&(n.textContent=s),r=z(y),o=E(y,"P",{style:!0,"data-svelte-h":!0}),Pe(o)!=="svelte-1x4le7w"&&(o.textContent=a),c=z(y),l=E(y,"DIV",{class:!0});var N=F(l);u=E(N,"INPUT",{type:!0,accept:!0}),N.forEach(S),h=z(y),w&&w.l(y),d=z(y),g=E(y,"DIV",{class:!0});var K=F(g);v=E(K,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(v)!=="svelte-1wvy2wc"&&(v.textContent=m),_=z(K),p=E(K,"BUTTON",{class:!0});var $=F(p);b=de($,x),$.forEach(S),K.forEach(S),y.forEach(S),U.forEach(S),this.h()},h(){me(o,"font-size","12px"),me(o,"color","var(--text-secondary)"),me(o,"margin-bottom","12px"),R(u,"type","file"),R(u,"accept",".csv"),R(l,"class","form-group"),R(v,"class","btn-secondary"),R(p,"class","btn-primary"),p.disabled=A=!i[5]||i[6],R(g,"class","modal-actions"),R(t,"class","modal"),R(e,"class","modal-overlay")},m(L,U){ge(L,e,U),f(e,t),f(t,n),f(t,r),f(t,o),f(t,c),f(t,l),f(l,u),f(t,h),w&&w.m(t,null),f(t,d),f(t,g),f(g,v),f(g,_),f(g,p),f(p,b),C||(T=[ze(u,"change",i[41]),ze(v,"click",i[42]),ze(p,"click",i[23]),ze(e,"click",Fs(i[43]))],C=!0)},p(L,U){L[7]?w?w.p(L,U):(w=Mu(L),w.c(),w.m(t,d)):w&&(w.d(1),w=null),U[0]&64&&x!==(x=L[6]?"导入中...":"开始导入")&&Ve(b,x),U[0]&96&&A!==(A=!L[5]||L[6])&&(p.disabled=A)},d(L){L&&S(e),w&&w.d(),C=!1,At(T)}}}function Mu(i){let e,t,n,s=i[7].imported+"",r,o,a,c,l=i[7].errors.length>0&&Su(i),u=i[7].warnings.length>0&&Tu(i);return{c(){e=M("div"),t=M("p"),n=pe("成功导入: "),r=pe(s),o=pe(" 条记录"),a=V(),l&&l.c(),c=V(),u&&u.c(),this.h()},l(h){e=E(h,"DIV",{class:!0});var d=F(e);t=E(d,"P",{class:!0});var g=F(t);n=de(g,"成功导入: "),r=de(g,s),o=de(g," 条记录"),g.forEach(S),a=z(d),l&&l.l(d),c=z(d),u&&u.l(d),d.forEach(S),this.h()},h(){R(t,"class","badge badge-success svelte-kfrf0t"),R(e,"class","import-result svelte-kfrf0t")},m(h,d){ge(h,e,d),f(e,t),f(t,n),f(t,r),f(t,o),f(e,a),l&&l.m(e,null),f(e,c),u&&u.m(e,null)},p(h,d){d[0]&128&&s!==(s=h[7].imported+"")&&Ve(r,s),h[7].errors.length>0?l?l.p(h,d):(l=Su(h),l.c(),l.m(e,c)):l&&(l.d(1),l=null),h[7].warnings.length>0?u?u.p(h,d):(u=Tu(h),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},d(h){h&&S(e),l&&l.d(),u&&u.d()}}}function Su(i){let e,t=et(i[7].errors),n=[];for(let s=0;s<t.length;s+=1)n[s]=yu($c(i,t,s));return{c(){e=M("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=E(s,"DIV",{class:!0,style:!0});var r=F(e);for(let o=0;o<n.length;o+=1)n[o].l(r);r.forEach(S),this.h()},h(){R(e,"class","errors"),me(e,"max-height","150px"),me(e,"overflow-y","auto")},m(s,r){ge(s,e,r);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(e,null)},p(s,r){if(r[0]&128){t=et(s[7].errors);let o;for(o=0;o<t.length;o+=1){const a=$c(s,t,o);n[o]?n[o].p(a,r):(n[o]=yu(a),n[o].c(),n[o].m(e,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}},d(s){s&&S(e),Et(n,s)}}}function yu(i){let e,t=i[67]+"",n;return{c(){e=M("p"),n=pe(t),this.h()},l(s){e=E(s,"P",{class:!0,style:!0});var r=F(e);n=de(r,t),r.forEach(S),this.h()},h(){R(e,"class","badge badge-danger svelte-kfrf0t"),me(e,"font-size","11px")},m(s,r){ge(s,e,r),f(e,n)},p(s,r){r[0]&128&&t!==(t=s[67]+"")&&Ve(n,t)},d(s){s&&S(e)}}}function Tu(i){let e,t=et(i[7].warnings),n=[];for(let s=0;s<t.length;s+=1)n[s]=wu(Qc(i,t,s));return{c(){e=M("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=E(s,"DIV",{class:!0});var r=F(e);for(let o=0;o<n.length;o+=1)n[o].l(r);r.forEach(S),this.h()},h(){R(e,"class","warnings")},m(s,r){ge(s,e,r);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(e,null)},p(s,r){if(r[0]&128){t=et(s[7].warnings);let o;for(o=0;o<t.length;o+=1){const a=Qc(s,t,o);n[o]?n[o].p(a,r):(n[o]=wu(a),n[o].c(),n[o].m(e,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}},d(s){s&&S(e),Et(n,s)}}}function wu(i){let e,t=i[64]+"",n;return{c(){e=M("p"),n=pe(t),this.h()},l(s){e=E(s,"P",{class:!0});var r=F(e);n=de(r,t),r.forEach(S),this.h()},h(){R(e,"class","badge badge-warning svelte-kfrf0t")},m(s,r){ge(s,e,r),f(e,n)},p(s,r){r[0]&128&&t!==(t=s[64]+"")&&Ve(n,t)},d(s){s&&S(e)}}}function Au(i){let e,t,n,s="异常值详情",r,o,a,c,l=i[15].hole_id+"",u,h,d,g=i[15].is_upper?"↑ 偏高异常":"↓ 偏低异常",v,m,_,p,x,b,A="偏离均值:",C,T,w=i[15].deviation>0?"+":"",L,U=i[15].deviation.toFixed(2)+"",y,N,K=i[15].deviation_pct.toFixed(2)+"",$,O,j,W,ee,te="日期:",se,ue,le=i[15].obs_date+"",ce,fe,B,J,oe="水位:",D,I,be=i[15].water_level.toFixed(2)+"",Se,Ce,q,Ae,ye,Ne="水温:",ae,ie,_e=i[15].water_temp!=null?i[15].water_temp.toFixed(1)+"℃":"—",k,P,ve,Te,X="电导率:",H,Y,he=i[15].conductivity!=null?i[15].conductivity.toFixed(1)+"μS/cm":"—",Q,re,Me,Ee,xe,Re,Ye=i[15].obs_date+"",Fe,Le,ke,Z,Be=i[15].water_level.toFixed(2)+"",qe,He,G,De,we,Oe,Xe="关闭",tt,st,Ze=i[15].before_records.length>0&&Cu(i),ot=i[15].after_records.length>0&&Pu(i);return{c(){e=M("div"),t=M("div"),n=M("h3"),n.textContent=s,r=V(),o=M("div"),a=M("span"),c=pe("钻孔: "),u=pe(l),h=V(),d=M("span"),v=pe(g),_=V(),p=M("div"),x=M("div"),b=M("span"),b.textContent=A,C=V(),T=M("strong"),L=pe(w),y=pe(U),N=pe("m ("),$=pe(K),O=pe("%)"),j=V(),W=M("div"),ee=M("span"),ee.textContent=te,se=V(),ue=M("span"),ce=pe(le),fe=V(),B=M("div"),J=M("span"),J.textContent=oe,D=V(),I=M("span"),Se=pe(be),Ce=pe("m"),q=V(),Ae=M("div"),ye=M("span"),ye.textContent=Ne,ae=V(),ie=M("span"),k=pe(_e),P=V(),ve=M("div"),Te=M("span"),Te.textContent=X,H=V(),Y=M("span"),Q=pe(he),re=V(),Ze&&Ze.c(),Me=V(),Ee=M("div"),xe=M("div"),Re=M("span"),Fe=pe(Ye),Le=pe(" (当前)"),ke=V(),Z=M("span"),qe=pe(Be),He=pe("m"),G=V(),ot&&ot.c(),De=V(),we=M("div"),Oe=M("button"),Oe.textContent=Xe,this.h()},l(Je){e=E(Je,"DIV",{class:!0});var at=F(e);t=E(at,"DIV",{class:!0});var ht=F(t);n=E(ht,"H3",{"data-svelte-h":!0}),Pe(n)!=="svelte-61hx07"&&(n.textContent=s),r=z(ht),o=E(ht,"DIV",{class:!0});var Gt=F(o);a=E(Gt,"SPAN",{class:!0});var Jt=F(a);c=de(Jt,"钻孔: "),u=de(Jt,l),Jt.forEach(S),h=z(Gt),d=E(Gt,"SPAN",{class:!0});var wt=F(d);v=de(wt,g),wt.forEach(S),Gt.forEach(S),_=z(ht),p=E(ht,"DIV",{class:!0});var Ct=F(p);x=E(Ct,"DIV",{class:!0});var Lt=F(x);b=E(Lt,"SPAN",{"data-svelte-h":!0}),Pe(b)!=="svelte-whx9yx"&&(b.textContent=A),C=z(Lt),T=E(Lt,"STRONG",{});var Ut=F(T);L=de(Ut,w),y=de(Ut,U),N=de(Ut,"m ("),$=de(Ut,K),O=de(Ut,"%)"),Ut.forEach(S),Lt.forEach(S),j=z(Ct),W=E(Ct,"DIV",{class:!0});var An=F(W);ee=E(An,"SPAN",{"data-svelte-h":!0}),Pe(ee)!=="svelte-1roqq9s"&&(ee.textContent=te),se=z(An),ue=E(An,"SPAN",{});var on=F(ue);ce=de(on,le),on.forEach(S),An.forEach(S),fe=z(Ct),B=E(Ct,"DIV",{class:!0});var Ni=F(B);J=E(Ni,"SPAN",{"data-svelte-h":!0}),Pe(J)!=="svelte-1p9hlj7"&&(J.textContent=oe),D=z(Ni),I=E(Ni,"SPAN",{});var vs=F(I);Se=de(vs,be),Ce=de(vs,"m"),vs.forEach(S),Ni.forEach(S),q=z(Ct),Ae=E(Ct,"DIV",{class:!0});var ne=F(Ae);ye=E(ne,"SPAN",{"data-svelte-h":!0}),Pe(ye)!=="svelte-1v87w87"&&(ye.textContent=Ne),ae=z(ne),ie=E(ne,"SPAN",{});var Ue=F(ie);k=de(Ue,_e),Ue.forEach(S),ne.forEach(S),P=z(Ct),ve=E(Ct,"DIV",{class:!0});var Ge=F(ve);Te=E(Ge,"SPAN",{"data-svelte-h":!0}),Pe(Te)!=="svelte-19n8l0y"&&(Te.textContent=X),H=z(Ge),Y=E(Ge,"SPAN",{});var je=F(Y);Q=de(je,he),je.forEach(S),Ge.forEach(S),Ct.forEach(S),re=z(ht),Ze&&Ze.l(ht),Me=z(ht),Ee=E(ht,"DIV",{class:!0});var We=F(Ee);xe=E(We,"DIV",{class:!0});var rt=F(xe);Re=E(rt,"SPAN",{});var lt=F(Re);Fe=de(lt,Ye),Le=de(lt," (当前)"),lt.forEach(S),ke=z(rt),Z=E(rt,"SPAN",{});var ut=F(Z);qe=de(ut,Be),He=de(ut,"m"),ut.forEach(S),rt.forEach(S),We.forEach(S),G=z(ht),ot&&ot.l(ht),De=z(ht),we=E(ht,"DIV",{class:!0});var dt=F(we);Oe=E(dt,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(Oe)!=="svelte-bsqtlv"&&(Oe.textContent=Xe),dt.forEach(S),ht.forEach(S),at.forEach(S),this.h()},h(){R(a,"class","anomaly-hole svelte-kfrf0t"),R(d,"class",m=Yo(`anomaly-direction ${i[15].is_upper?"upper":"lower"}`)+" svelte-kfrf0t"),R(o,"class","anomaly-header svelte-kfrf0t"),R(x,"class","anomaly-row svelte-kfrf0t"),R(W,"class","anomaly-row svelte-kfrf0t"),R(B,"class","anomaly-row svelte-kfrf0t"),R(Ae,"class","anomaly-row svelte-kfrf0t"),R(ve,"class","anomaly-row svelte-kfrf0t"),R(p,"class","anomaly-info svelte-kfrf0t"),R(xe,"class","neighbor-row svelte-kfrf0t"),R(Ee,"class","anomaly-current highlight svelte-kfrf0t"),R(Oe,"class","btn-primary"),R(we,"class","modal-actions"),R(t,"class","modal anomaly-modal svelte-kfrf0t"),R(e,"class","modal-overlay")},m(Je,at){ge(Je,e,at),f(e,t),f(t,n),f(t,r),f(t,o),f(o,a),f(a,c),f(a,u),f(o,h),f(o,d),f(d,v),f(t,_),f(t,p),f(p,x),f(x,b),f(x,C),f(x,T),f(T,L),f(T,y),f(T,N),f(T,$),f(T,O),f(p,j),f(p,W),f(W,ee),f(W,se),f(W,ue),f(ue,ce),f(p,fe),f(p,B),f(B,J),f(B,D),f(B,I),f(I,Se),f(I,Ce),f(p,q),f(p,Ae),f(Ae,ye),f(Ae,ae),f(Ae,ie),f(ie,k),f(p,P),f(p,ve),f(ve,Te),f(ve,H),f(ve,Y),f(Y,Q),f(t,re),Ze&&Ze.m(t,null),f(t,Me),f(t,Ee),f(Ee,xe),f(xe,Re),f(Re,Fe),f(Re,Le),f(xe,ke),f(xe,Z),f(Z,qe),f(Z,He),f(t,G),ot&&ot.m(t,null),f(t,De),f(t,we),f(we,Oe),tt||(st=[ze(Oe,"click",i[44]),ze(e,"click",Fs(i[45]))],tt=!0)},p(Je,at){at[0]&32768&&l!==(l=Je[15].hole_id+"")&&Ve(u,l),at[0]&32768&&g!==(g=Je[15].is_upper?"↑ 偏高异常":"↓ 偏低异常")&&Ve(v,g),at[0]&32768&&m!==(m=Yo(`anomaly-direction ${Je[15].is_upper?"upper":"lower"}`)+" svelte-kfrf0t")&&R(d,"class",m),at[0]&32768&&w!==(w=Je[15].deviation>0?"+":"")&&Ve(L,w),at[0]&32768&&U!==(U=Je[15].deviation.toFixed(2)+"")&&Ve(y,U),at[0]&32768&&K!==(K=Je[15].deviation_pct.toFixed(2)+"")&&Ve($,K),at[0]&32768&&le!==(le=Je[15].obs_date+"")&&Ve(ce,le),at[0]&32768&&be!==(be=Je[15].water_level.toFixed(2)+"")&&Ve(Se,be),at[0]&32768&&_e!==(_e=Je[15].water_temp!=null?Je[15].water_temp.toFixed(1)+"℃":"—")&&Ve(k,_e),at[0]&32768&&he!==(he=Je[15].conductivity!=null?Je[15].conductivity.toFixed(1)+"μS/cm":"—")&&Ve(Q,he),Je[15].before_records.length>0?Ze?Ze.p(Je,at):(Ze=Cu(Je),Ze.c(),Ze.m(t,Me)):Ze&&(Ze.d(1),Ze=null),at[0]&32768&&Ye!==(Ye=Je[15].obs_date+"")&&Ve(Fe,Ye),at[0]&32768&&Be!==(Be=Je[15].water_level.toFixed(2)+"")&&Ve(qe,Be),Je[15].after_records.length>0?ot?ot.p(Je,at):(ot=Pu(Je),ot.c(),ot.m(t,De)):ot&&(ot.d(1),ot=null)},d(Je){Je&&S(e),Ze&&Ze.d(),ot&&ot.d(),tt=!1,At(st)}}}function Cu(i){let e,t,n="前序记录",s,r=et(i[15].before_records),o=[];for(let a=0;a<r.length;a+=1)o[a]=Ru(Jc(i,r,a));return{c(){e=M("div"),t=M("h4"),t.textContent=n,s=V();for(let a=0;a<o.length;a+=1)o[a].c();this.h()},l(a){e=E(a,"DIV",{class:!0});var c=F(e);t=E(c,"H4",{class:!0,"data-svelte-h":!0}),Pe(t)!=="svelte-f147qx"&&(t.textContent=n),s=z(c);for(let l=0;l<o.length;l+=1)o[l].l(c);c.forEach(S),this.h()},h(){R(t,"class","svelte-kfrf0t"),R(e,"class","anomaly-neighbors svelte-kfrf0t")},m(a,c){ge(a,e,c),f(e,t),f(e,s);for(let l=0;l<o.length;l+=1)o[l]&&o[l].m(e,null)},p(a,c){if(c[0]&32768){r=et(a[15].before_records);let l;for(l=0;l<r.length;l+=1){const u=Jc(a,r,l);o[l]?o[l].p(u,c):(o[l]=Ru(u),o[l].c(),o[l].m(e,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=r.length}},d(a){a&&S(e),Et(o,a)}}}function Ru(i){let e,t,n=i[61].obs_date+"",s,r,o,a=i[61].water_level.toFixed(2)+"",c,l,u;return{c(){e=M("div"),t=M("span"),s=pe(n),r=V(),o=M("span"),c=pe(a),l=pe("m"),u=V(),this.h()},l(h){e=E(h,"DIV",{class:!0});var d=F(e);t=E(d,"SPAN",{});var g=F(t);s=de(g,n),g.forEach(S),r=z(d),o=E(d,"SPAN",{});var v=F(o);c=de(v,a),l=de(v,"m"),v.forEach(S),u=z(d),d.forEach(S),this.h()},h(){R(e,"class","neighbor-row svelte-kfrf0t")},m(h,d){ge(h,e,d),f(e,t),f(t,s),f(e,r),f(e,o),f(o,c),f(o,l),f(e,u)},p(h,d){d[0]&32768&&n!==(n=h[61].obs_date+"")&&Ve(s,n),d[0]&32768&&a!==(a=h[61].water_level.toFixed(2)+"")&&Ve(c,a)},d(h){h&&S(e)}}}function Pu(i){let e,t,n="后续记录",s,r=et(i[15].after_records),o=[];for(let a=0;a<r.length;a+=1)o[a]=Lu(Zc(i,r,a));return{c(){e=M("div"),t=M("h4"),t.textContent=n,s=V();for(let a=0;a<o.length;a+=1)o[a].c();this.h()},l(a){e=E(a,"DIV",{class:!0});var c=F(e);t=E(c,"H4",{class:!0,"data-svelte-h":!0}),Pe(t)!=="svelte-la6zhc"&&(t.textContent=n),s=z(c);for(let l=0;l<o.length;l+=1)o[l].l(c);c.forEach(S),this.h()},h(){R(t,"class","svelte-kfrf0t"),R(e,"class","anomaly-neighbors svelte-kfrf0t")},m(a,c){ge(a,e,c),f(e,t),f(e,s);for(let l=0;l<o.length;l+=1)o[l]&&o[l].m(e,null)},p(a,c){if(c[0]&32768){r=et(a[15].after_records);let l;for(l=0;l<r.length;l+=1){const u=Zc(a,r,l);o[l]?o[l].p(u,c):(o[l]=Lu(u),o[l].c(),o[l].m(e,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=r.length}},d(a){a&&S(e),Et(o,a)}}}function Lu(i){let e,t,n=i[58].obs_date+"",s,r,o,a=i[58].water_level.toFixed(2)+"",c,l,u;return{c(){e=M("div"),t=M("span"),s=pe(n),r=V(),o=M("span"),c=pe(a),l=pe("m"),u=V(),this.h()},l(h){e=E(h,"DIV",{class:!0});var d=F(e);t=E(d,"SPAN",{});var g=F(t);s=de(g,n),g.forEach(S),r=z(d),o=E(d,"SPAN",{});var v=F(o);c=de(v,a),l=de(v,"m"),v.forEach(S),u=z(d),d.forEach(S),this.h()},h(){R(e,"class","neighbor-row svelte-kfrf0t")},m(h,d){ge(h,e,d),f(e,t),f(t,s),f(e,r),f(e,o),f(o,c),f(o,l),f(e,u)},p(h,d){d[0]&32768&&n!==(n=h[58].obs_date+"")&&Ve(s,n),d[0]&32768&&a!==(a=h[58].water_level.toFixed(2)+"")&&Ve(c,a)},d(h){h&&S(e)}}}function v0(i){let e,t,n="地下水位数据",s,r,o,a="导入CSV",c,l,u,h,d,g,v,m,_,p=et(i[18]),x=[];for(let L=0;L<p.length;L+=1)x[L]=ou(ru(i,p,L));function b(L,U){if(L[2]==="data")return m0;if(L[2]==="history")return p0;if(L[2]==="thresholds")return d0}let A=b(i),C=A&&A(i),T=i[4]&&Eu(i),w=i[15]&&Au(i);return{c(){e=M("div"),t=M("h3"),t.textContent=n,s=V(),r=M("div"),o=M("button"),o.textContent=a,c=V(),l=M("div");for(let L=0;L<x.length;L+=1)x[L].c();u=V(),h=M("div"),C&&C.c(),d=V(),T&&T.c(),g=V(),w&&w.c(),v=It(),this.h()},l(L){e=E(L,"DIV",{class:!0});var U=F(e);t=E(U,"H3",{"data-svelte-h":!0}),Pe(t)!=="svelte-rckkdc"&&(t.textContent=n),s=z(U),r=E(U,"DIV",{style:!0});var y=F(r);o=E(y,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(o)!=="svelte-vemyzj"&&(o.textContent=a),y.forEach(S),U.forEach(S),c=z(L),l=E(L,"DIV",{class:!0});var N=F(l);for(let $=0;$<x.length;$+=1)x[$].l(N);N.forEach(S),u=z(L),h=E(L,"DIV",{class:!0});var K=F(h);C&&C.l(K),K.forEach(S),d=z(L),T&&T.l(L),g=z(L),w&&w.l(L),v=It(),this.h()},h(){R(o,"class","btn-primary btn-sm"),me(r,"display","flex"),me(r,"gap","6px"),R(e,"class","panel-header"),R(l,"class","sub-tabs svelte-kfrf0t"),R(h,"class","panel-body scrollable")},m(L,U){ge(L,e,U),f(e,t),f(e,s),f(e,r),f(r,o),ge(L,c,U),ge(L,l,U);for(let y=0;y<x.length;y+=1)x[y]&&x[y].m(l,null);ge(L,u,U),ge(L,h,U),C&&C.m(h,null),ge(L,d,U),T&&T.m(L,U),ge(L,g,U),w&&w.m(L,U),ge(L,v,U),m||(_=ze(o,"click",i[28]),m=!0)},p(L,U){if(U[0]&262148){p=et(L[18]);let y;for(y=0;y<p.length;y+=1){const N=ru(L,p,y);x[y]?x[y].p(N,U):(x[y]=ou(N),x[y].c(),x[y].m(l,null))}for(;y<x.length;y+=1)x[y].d(1);x.length=p.length}A===(A=b(L))&&C?C.p(L,U):(C&&C.d(1),C=A&&A(L),C&&(C.c(),C.m(h,null))),L[4]?T?T.p(L,U):(T=Eu(L),T.c(),T.m(g.parentNode,g)):T&&(T.d(1),T=null),L[15]?w?w.p(L,U):(w=Au(L),w.c(),w.m(v.parentNode,v)):w&&(w.d(1),w=null)},i:yt,o:yt,d(L){L&&(S(e),S(c),S(l),S(u),S(h),S(d),S(g),S(v)),Et(x,L),C&&C.d(),T&&T.d(L),w&&w.d(L),m=!1,_()}}}function Du(i){return i?`wl-warning-${i}`:""}const Iu=i=>i.water_level,Nu=i=>i.water_level;function b0(i,e,t){let n,s,r,o,a,c,l,u;Qe(i,cs,H=>t(1,n=H)),Qe(i,Mr,H=>t(2,s=H)),Qe(i,Gn,H=>t(3,r=H)),Qe(i,ra,H=>t(48,o=H)),Qe(i,Sr,H=>t(17,a=H)),Qe(i,Bn,H=>t(49,c=H)),Qe(i,us,H=>t(50,l=H)),Qe(i,Cs,H=>t(51,u=H));let h=!1,d=null,g=!1,v=null,m="",_,p="",x="",b="",A="",C=!1,T=null,w=null;const L=[{id:"data",label:"水位数据"},{id:"history",label:"水位历史"},{id:"thresholds",label:"预警设置"}];let U;function y(H){t(0,m=H.target.value),it(Cs,u=m,u)}async function N(){if(c)try{const H=await ft.getWaterLevels(c.id);it(cs,n=H,n),await K(),await $(),await O()}catch(H){$e(`加载水位数据失败: ${H.message}`,"error")}}async function K(){if(c)try{const H=await ft.getWaterLevelThresholds(c.id);it(Sr,a=H,a)}catch(H){console.warn("加载阈值失败:",H)}}async function $(){if(c)try{const H=await ft.getWaterLevelWarnings(c.id);it(us,l=H,l)}catch(H){console.warn("加载预警失败:",H)}}async function O(){if(!c||!n||n.length===0)return;const H=[...new Set(n.map(Y=>Y.borehole_id))];if(H.length!==0)try{const Y=await ft.detectWaterLevelAnomalies(c.id,H);it(ra,o=Y,o)}catch(Y){console.warn("异常检测失败:",Y)}}function j(H,Y){const he=a.find(Q=>Q.borehole_id===Y);return he?H>=he.red_threshold?"red":H>=he.orange_threshold?"orange":H>=he.blue_threshold?"blue":null:null}function W(H,Y){var Q;const he=o[Y];return he?(Q=he.anomalies)==null?void 0:Q.some(re=>re.id===H):!1}function ee(H,Y){var Q;const he=o[Y];return he?(Q=he.anomalies)==null?void 0:Q.find(re=>re.id===H):null}function te(H){var he;const Y=ee(H.id,H.borehole_id);Y&&t(15,w={...Y,hole_id:(he=o[H.borehole_id])==null?void 0:he.hole_id})}async function se(){if(!(!d||!c)){t(6,g=!0);try{const H=await ft.importWaterLevelCsv(c.id,d);t(7,v=H),$e(`成功导入 ${H.imported} 条水位记录`,"success"),H.errors.length>0&&$e(`有 ${H.errors.length} 个错误`,"warning"),await N()}catch(H){$e(`导入失败: ${H.message}`,"error")}finally{t(6,g=!1)}}}async function ue(H){if(c)try{await ft.deleteWaterLevel(c.id,H),$e("水位记录已删除","info"),await N()}catch(Y){$e(`删除失败: ${Y.message}`,"error")}}async function le(H){t(9,p=H);const Y=a.find(he=>he.borehole_id===H);if(Y)t(10,x=Y.blue_threshold),t(11,b=Y.orange_threshold),t(12,A=Y.red_threshold),t(14,T=Y.id);else{if(r.find(Q=>Q.id===H)){const Q=n.filter(re=>re.borehole_id===H).map(re=>re.water_level);if(Q.length>0){const re=Math.min(...Q),Ee=Math.max(...Q)-re;t(10,x=(re+Ee*.5).toFixed(2)),t(11,b=(re+Ee*.75).toFixed(2)),t(12,A=(re+Ee*.95).toFixed(2))}else t(10,x=""),t(11,b=""),t(12,A="")}t(14,T=null)}}async function ce(){if(!c||!p){$e("请选择钻孔","warning");return}const H=parseFloat(x),Y=parseFloat(b),he=parseFloat(A);if(isNaN(H)||isNaN(Y)||isNaN(he)){$e("请输入有效的阈值","error");return}if(!(H<Y&&Y<he)){$e("阈值必须满足蓝色 < 橙色 < 红色","error");return}t(13,C=!0);try{const Q={borehole_id:p,blue_threshold:H,orange_threshold:Y,red_threshold:he};T?(await ft.updateWaterLevelThreshold(c.id,T,Q),$e("阈值更新成功","success")):(await ft.createWaterLevelThreshold(c.id,Q),$e("阈值设置成功","success")),await K(),await $()}catch(Q){$e(`保存失败: ${Q.message}`,"error")}finally{t(13,C=!1)}}async function fe(){if(!(!c||!T)&&confirm("确定要删除该钻孔的预警阈值设置吗?"))try{await ft.deleteWaterLevelThreshold(c.id,T),$e("阈值已删除","info"),t(10,x=""),t(11,b=""),t(12,A=""),t(14,T=null),await K(),await $()}catch(H){$e(`删除失败: ${H.message}`,"error")}}function B(){var st;if(!_)return;const H=_,Y=H.getContext("2d"),he=window.devicePixelRatio||1,Q=H.getBoundingClientRect();H.width=Q.width*he,H.height=Q.height*he,Y.scale(he,he);const re=Q.width,Me=Q.height;if(Y.fillStyle="#1a1d23",Y.fillRect(0,0,re,Me),!m){Y.fillStyle="#888",Y.font="13px sans-serif",Y.textAlign="center",Y.fillText("请选择钻孔查看水位历史",re/2,Me/2);return}const Ee=n.filter(Ze=>Ze.borehole_id===m).sort((Ze,ot)=>new Date(Ze.obs_date)-new Date(ot.obs_date));if(Ee.length<2){Y.fillStyle="#888",Y.font="13px sans-serif",Y.textAlign="center",Y.fillText(Ee.length===0?"该钻孔暂无水位数据":"至少需要2条记录才能绘制趋势图",re/2,Me/2);return}const xe={top:30,right:20,bottom:50,left:60},Re=re-xe.left-xe.right,Ye=Me-xe.top-xe.bottom,Fe=a.find(Ze=>Ze.borehole_id===m),Le=Ee.map(Ze=>new Date(Ze.obs_date).getTime()),ke=Ee.map(Ze=>Ze.water_level);let Z=Math.min(...Le),Be=Math.max(...Le),qe=Math.min(...ke),He=Math.max(...ke);Fe&&(qe=Math.min(qe,Fe.blue_threshold),He=Math.max(He,Fe.red_threshold));const G=(He-qe)*.1||1,De=Ze=>xe.left+(Ze-Z)/(Be-Z||1)*Re,we=Ze=>xe.top+Ye-(Ze-(qe-G))/(He+G-(qe-G)||1)*Ye;Y.strokeStyle="#333",Y.lineWidth=1;for(let Ze=0;Ze<=5;Ze++){const ot=xe.top+Ze/5*Ye;Y.beginPath(),Y.moveTo(xe.left,ot),Y.lineTo(re-xe.right,ot),Y.stroke();const Je=He+G-Ze/5*(He+G-(qe-G));Y.fillStyle="#888",Y.font="10px sans-serif",Y.textAlign="right",Y.fillText(Je.toFixed(2),xe.left-6,ot+3)}for(let Ze=0;Ze<=5;Ze++){const ot=xe.left+Ze/5*Re,Je=new Date(Z+Ze/5*(Be-Z));Y.fillStyle="#888",Y.font="10px sans-serif",Y.textAlign="center",Y.fillText(`${Je.getFullYear()}-${String(Je.getMonth()+1).padStart(2,"0")}`,ot,Me-xe.bottom+18)}Y.fillStyle="#888",Y.font="11px sans-serif",Y.textAlign="center",Y.fillText("日期",re/2,Me-4),Y.save(),Y.translate(12,Me/2),Y.rotate(-Math.PI/2),Y.fillText("水位标高 (m)",0,0),Y.restore(),Fe&&[{value:Fe.blue_threshold,color:"#2196f3",label:"蓝色预警"},{value:Fe.orange_threshold,color:"#ff9800",label:"橙色预警"},{value:Fe.red_threshold,color:"#f44336",label:"红色预警"}].forEach(ot=>{const Je=we(ot.value);Je>xe.top&&Je<xe.top+Ye&&(Y.strokeStyle=ot.color,Y.lineWidth=1.5,Y.setLineDash([6,4]),Y.beginPath(),Y.moveTo(xe.left,Je),Y.lineTo(re-xe.right,Je),Y.stroke(),Y.setLineDash([]),Y.fillStyle=ot.color,Y.font="10px sans-serif",Y.textAlign="left",Y.fillText(`${ot.label} ${ot.value.toFixed(2)}m`,xe.left+4,Je-4))}),Y.strokeStyle="#4fc3f7",Y.lineWidth=2,Y.beginPath(),Ee.forEach((Ze,ot)=>{const Je=De(new Date(Ze.obs_date).getTime()),at=we(Ze.water_level);ot===0?Y.moveTo(Je,at):Y.lineTo(Je,at)}),Y.stroke();const Oe=((st=o[m])==null?void 0:st.anomalies)||[],Xe=new Set(Oe.map(Ze=>Ze.id));Ee.forEach(Ze=>{const ot=De(new Date(Ze.obs_date).getTime()),Je=we(Ze.water_level);Xe.has(Ze.id)?(Y.strokeStyle="#f44336",Y.lineWidth=2,Y.fillStyle="transparent",Y.beginPath(),Y.arc(ot,Je,5,0,Math.PI*2),Y.fill(),Y.stroke()):(Y.fillStyle="#4fc3f7",Y.beginPath(),Y.arc(ot,Je,3,0,Math.PI*2),Y.fill())});const tt=r.find(Ze=>Ze.id===m);if(tt){const Ze=we(tt.elevation);Ze>xe.top&&Ze<xe.top+Ye&&(Y.strokeStyle="#ff9800",Y.lineWidth=1,Y.setLineDash([6,4]),Y.beginPath(),Y.moveTo(xe.left,Ze),Y.lineTo(re-xe.right,Ze),Y.stroke(),Y.setLineDash([]),Y.fillStyle="#ff9800",Y.font="10px sans-serif",Y.textAlign="right",Y.fillText(`孔口高程 ${tt.elevation.toFixed(2)}m`,re-xe.right,Ze-4))}}Lr(()=>(U=Cs.subscribe(H=>{H&&H!==m&&t(0,m=H)}),N(),()=>{U&&U()}));let J;const oe=()=>t(4,h=!0),D=H=>it(Mr,s=H.id,s),I=H=>te(H),be=H=>ue(H.id),Se=(H,Y)=>Y.id===H.borehole_id;function Ce(H){ni[H?"unshift":"push"](()=>{_=H,t(8,_)})}function q(){p=fn(this),t(9,p)}const Ae=H=>le(H.target.value);function ye(){x=ct(this.value),t(10,x)}function Ne(){b=ct(this.value),t(11,b)}function ae(){A=ct(this.value),t(12,A)}const ie=H=>le(H.borehole_id),_e=(H,Y)=>Y.id===H.borehole_id,k=H=>t(5,d=H.target.files[0]),P=()=>{t(4,h=!1),t(7,v=null)},ve=()=>{t(4,h=!1),t(7,v=null)},Te=()=>t(15,w=null),X=()=>t(15,w=null);return i.$$.update=()=>{if(i.$$.dirty[0]&9&&r.find(H=>H.id===m),i.$$.dirty[0]&7&&s==="history"&&m&&n&&setTimeout(B,50),i.$$.dirty[0]&2){const H={};n.forEach(Y=>{H[Y.borehole_id]||(H[Y.borehole_id]=[]),H[Y.borehole_id].push(Y)}),t(16,J=H)}},[m,n,s,r,h,d,g,v,_,p,x,b,A,C,T,w,J,a,L,y,j,W,te,se,ue,le,ce,fe,oe,D,I,be,Se,Ce,q,Ae,ye,Ne,ae,ie,_e,k,P,ve,Te,X]}class x0 extends pn{constructor(e){super(),mn(this,e,b0,v0,dn,{},null,[-1,-1,-1])}}function Uu(i,e,t){const n=i.slice();return n[46]=e[t],n[48]=t,n}function Fu(i,e,t){const n=i.slice();return n[49]=e[t],n}function Ou(i,e,t){const n=i.slice();return n[43]=e[t],n}function ku(i,e,t){const n=i.slice();return n[40]=e[t],n}function Bu(i,e,t){const n=i.slice();return n[49]=e[t],n}function zu(i){let e,t,n,s,r=i[49].hole_id+"",o,a,c,l;function u(){return i[23](i[49])}return{c(){e=M("label"),t=M("input"),s=V(),o=pe(r),a=V(),this.h()},l(h){e=E(h,"LABEL",{class:!0,style:!0});var d=F(e);t=E(d,"INPUT",{type:!0}),s=z(d),o=de(d,r),a=z(d),d.forEach(S),this.h()},h(){R(t,"type","checkbox"),t.checked=n=i[1].includes(i[49].id),R(e,"class","checkbox-label"),me(e,"font-size","11px")},m(h,d){ge(h,e,d),f(e,t),f(e,s),f(e,o),f(e,a),c||(l=ze(t,"change",u),c=!0)},p(h,d){i=h,d[0]&258&&n!==(n=i[1].includes(i[49].id))&&(t.checked=n),d[0]&256&&r!==(r=i[49].hole_id+"")&&Ve(o,r)},d(h){h&&S(e),c=!1,l()}}}function Vu(i){let e,t,n="统计指标",s,r,o="MK趋势检验",a,c,l="箱线图",u,h,d="多井对比",g,v,m,_;function p(A,C){if(A[4]==="stats")return y0;if(A[4]==="mk")return S0;if(A[4]==="boxplot")return M0;if(A[4]==="compare")return E0}let x=p(i),b=x&&x(i);return{c(){e=M("div"),t=M("button"),t.textContent=n,s=V(),r=M("button"),r.textContent=o,a=V(),c=M("button"),c.textContent=l,u=V(),h=M("button"),h.textContent=d,g=V(),b&&b.c(),v=It(),this.h()},l(A){e=E(A,"DIV",{class:!0});var C=F(e);t=E(C,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(t)!=="svelte-1tm5qhr"&&(t.textContent=n),s=z(C),r=E(C,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(r)!=="svelte-13bt70l"&&(r.textContent=o),a=z(C),c=E(C,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(c)!=="svelte-zp9jyh"&&(c.textContent=l),u=z(C),h=E(C,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(h)!=="svelte-1x9a0i1"&&(h.textContent=d),C.forEach(S),g=z(A),b&&b.l(A),v=It(),this.h()},h(){R(t,"class","section-tab svelte-9umuf9"),Kt(t,"active",i[4]==="stats"),R(r,"class","section-tab svelte-9umuf9"),Kt(r,"active",i[4]==="mk"),R(c,"class","section-tab svelte-9umuf9"),Kt(c,"active",i[4]==="boxplot"),R(h,"class","section-tab svelte-9umuf9"),Kt(h,"active",i[4]==="compare"),R(e,"class","section-tabs svelte-9umuf9")},m(A,C){ge(A,e,C),f(e,t),f(e,s),f(e,r),f(e,a),f(e,c),f(e,u),f(e,h),ge(A,g,C),b&&b.m(A,C),ge(A,v,C),m||(_=[ze(t,"click",i[24]),ze(r,"click",i[25]),ze(c,"click",i[26]),ze(h,"click",i[27])],m=!0)},p(A,C){C[0]&16&&Kt(t,"active",A[4]==="stats"),C[0]&16&&Kt(r,"active",A[4]==="mk"),C[0]&16&&Kt(c,"active",A[4]==="boxplot"),C[0]&16&&Kt(h,"active",A[4]==="compare"),x===(x=p(A))&&b?b.p(A,C):(b&&b.d(1),b=x&&x(A),b&&(b.c(),b.m(v.parentNode,v)))},d(A){A&&(S(e),S(g),S(v)),b&&b.d(A),m=!1,At(_)}}}function E0(i){let e,t,n,s="选择对比钻孔 (2~6个)",r,o,a,c,l,u=i[0].length+"",h,d,g,v,m,_,p,x,b,A="重置",C,T,w,L,U,y,N="💡 提示: 拖拽选择时间范围可放大, 双击恢复全局视图",K,$,O=et(i[8]),j=[];for(let ee=0;ee<O.length;ee+=1)j[ee]=Hu(Fu(i,O,ee));let W=i[7]&&Gu(i);return{c(){e=M("div"),t=M("div"),n=M("label"),n.textContent=s,r=V(),o=M("div");for(let ee=0;ee<j.length;ee+=1)j[ee].c();a=V(),c=M("p"),l=pe("已选 "),h=pe(u),d=pe("/6 个"),g=V(),v=M("div"),m=M("button"),_=pe("生成对比图"),x=V(),b=M("button"),b.textContent=A,C=V(),T=M("div"),w=M("canvas"),L=V(),W&&W.c(),U=V(),y=M("p"),y.textContent=N,this.h()},l(ee){e=E(ee,"DIV",{class:!0});var te=F(e);t=E(te,"DIV",{class:!0,style:!0});var se=F(t);n=E(se,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(n)!=="svelte-1mjok8e"&&(n.textContent=s),r=z(se),o=E(se,"DIV",{class:!0});var ue=F(o);for(let J=0;J<j.length;J+=1)j[J].l(ue);ue.forEach(S),a=z(se),c=E(se,"P",{style:!0});var le=F(c);l=de(le,"已选 "),h=de(le,u),d=de(le,"/6 个"),le.forEach(S),se.forEach(S),g=z(te),v=E(te,"DIV",{class:!0,style:!0});var ce=F(v);m=E(ce,"BUTTON",{class:!0,style:!0});var fe=F(m);_=de(fe,"生成对比图"),fe.forEach(S),x=z(ce),b=E(ce,"BUTTON",{class:!0,title:!0,"data-svelte-h":!0}),Pe(b)!=="svelte-ggw0qk"&&(b.textContent=A),ce.forEach(S),C=z(te),T=E(te,"DIV",{class:!0,style:!0});var B=F(T);w=E(B,"CANVAS",{class:!0,ondblclick:!0}),F(w).forEach(S),L=z(B),W&&W.l(B),B.forEach(S),U=z(te),y=E(te,"P",{style:!0,"data-svelte-h":!0}),Pe(y)!=="svelte-124tp4t"&&(y.textContent=N),te.forEach(S),this.h()},h(){me(n,"font-size","12px"),R(o,"class","borehole-checkboxes svelte-9umuf9"),me(c,"font-size","10px"),me(c,"color","var(--text-muted)"),me(c,"margin-top","4px"),R(t,"class","form-group"),me(t,"margin-bottom","8px"),R(m,"class","btn-primary btn-sm"),me(m,"flex","1"),m.disabled=p=i[0].length<2,R(b,"class","btn-secondary btn-sm"),R(b,"title","重置视图"),R(v,"class","form-group"),me(v,"margin-bottom","8px"),me(v,"display","flex"),me(v,"gap","6px"),R(w,"class","compare-canvas svelte-9umuf9"),R(w,"ondblclick",i[19]),R(T,"class","compare-chart-container svelte-9umuf9"),me(T,"position","relative"),me(y,"font-size","10px"),me(y,"color","var(--text-muted)"),me(y,"margin-top","6px"),R(e,"class","compare-section svelte-9umuf9")},m(ee,te){ge(ee,e,te),f(e,t),f(t,n),f(t,r),f(t,o);for(let se=0;se<j.length;se+=1)j[se]&&j[se].m(o,null);f(t,a),f(t,c),f(c,l),f(c,h),f(c,d),f(e,g),f(e,v),f(v,m),f(m,_),f(v,x),f(v,b),f(e,C),f(e,T),f(T,w),i[31](w),f(T,L),W&&W.m(T,null),f(e,U),f(e,y),K||($=[ze(m,"click",i[21]),ze(b,"click",i[30]),ze(w,"mousedown",i[16]),ze(w,"mousemove",i[17]),ze(w,"mouseup",i[18]),ze(w,"mouseleave",i[20])],K=!0)},p(ee,te){if(te[0]&4353){O=et(ee[8]);let se;for(se=0;se<O.length;se+=1){const ue=Fu(ee,O,se);j[se]?j[se].p(ue,te):(j[se]=Hu(ue),j[se].c(),j[se].m(o,null))}for(;se<j.length;se+=1)j[se].d(1);j.length=O.length}te[0]&1&&u!==(u=ee[0].length+"")&&Ve(h,u),te[0]&1&&p!==(p=ee[0].length<2)&&(m.disabled=p),ee[7]?W?W.p(ee,te):(W=Gu(ee),W.c(),W.m(T,null)):W&&(W.d(1),W=null)},d(ee){ee&&S(e),Et(j,ee),i[31](null),W&&W.d(),K=!1,At($)}}}function M0(i){let e,t;return{c(){e=M("div"),t=M("canvas"),this.h()},l(n){e=E(n,"DIV",{class:!0});var s=F(e);t=E(s,"CANVAS",{class:!0}),F(t).forEach(S),s.forEach(S),this.h()},h(){R(t,"class","boxplot-canvas svelte-9umuf9"),R(e,"class","boxplot-container svelte-9umuf9")},m(n,s){ge(n,e,s),f(e,t),i[28](t)},p:yt,d(n){n&&S(e),i[28](null)}}}function S0(i){let e,t,n,s='<tr><th class="svelte-9umuf9">孔号</th> <th class="svelte-9umuf9">记录数</th> <th class="svelte-9umuf9">S统计量</th> <th class="svelte-9umuf9">Var(S)</th> <th class="svelte-9umuf9">Z值</th> <th class="svelte-9umuf9">p值</th> <th class="svelte-9umuf9">趋势</th></tr>',r,o,a,c,l='<span style="color:#4caf50;">↑ 显著上升</span> <span style="color:#f44336;">↓ 显著下降</span> <span style="color:#9e9e9e;">— 无显著趋势</span> <span style="color:#ff9800;">(显著性水平 α=0.05, 至少8条记录)</span>',u=et(i[9]),h=[];for(let d=0;d<u.length;d+=1)h[d]=Xu(Ou(i,u,d));return{c(){e=M("div"),t=M("table"),n=M("thead"),n.innerHTML=s,r=V(),o=M("tbody");for(let d=0;d<h.length;d+=1)h[d].c();a=V(),c=M("div"),c.innerHTML=l,this.h()},l(d){e=E(d,"DIV",{class:!0});var g=F(e);t=E(g,"TABLE",{class:!0});var v=F(t);n=E(v,"THEAD",{"data-svelte-h":!0}),Pe(n)!=="svelte-anulzd"&&(n.innerHTML=s),r=z(v),o=E(v,"TBODY",{});var m=F(o);for(let _=0;_<h.length;_+=1)h[_].l(m);m.forEach(S),v.forEach(S),g.forEach(S),a=z(d),c=E(d,"DIV",{class:!0,"data-svelte-h":!0}),Pe(c)!=="svelte-l45sxa"&&(c.innerHTML=l),this.h()},h(){R(t,"class","stats-table svelte-9umuf9"),R(e,"class","stats-table-container svelte-9umuf9"),R(c,"class","mk-legend svelte-9umuf9")},m(d,g){ge(d,e,g),f(e,t),f(t,n),f(t,r),f(t,o);for(let v=0;v<h.length;v+=1)h[v]&&h[v].m(o,null);ge(d,a,g),ge(d,c,g)},p(d,g){if(g[0]&512){u=et(d[9]);let v;for(v=0;v<u.length;v+=1){const m=Ou(d,u,v);h[v]?h[v].p(m,g):(h[v]=Xu(m),h[v].c(),h[v].m(o,null))}for(;v<h.length;v+=1)h[v].d(1);h.length=u.length}},d(d){d&&(S(e),S(a),S(c)),Et(h,d)}}}function y0(i){let e,t,n,s='<tr><th class="svelte-9umuf9">孔号</th> <th class="svelte-9umuf9">记录数</th> <th class="svelte-9umuf9">均值</th> <th class="svelte-9umuf9">中位数</th> <th class="svelte-9umuf9">标准差</th> <th class="svelte-9umuf9">变异系数</th> <th class="svelte-9umuf9">最大连续上升</th> <th class="svelte-9umuf9">最大连续下降</th> <th class="svelte-9umuf9">年际变幅</th> <th class="svelte-9umuf9">异常值</th></tr>',r,o,a=et(i[10]),c=[];for(let l=0;l<a.length;l+=1)c[l]=ju(ku(i,a,l));return{c(){e=M("div"),t=M("table"),n=M("thead"),n.innerHTML=s,r=V(),o=M("tbody");for(let l=0;l<c.length;l+=1)c[l].c();this.h()},l(l){e=E(l,"DIV",{class:!0});var u=F(e);t=E(u,"TABLE",{class:!0});var h=F(t);n=E(h,"THEAD",{"data-svelte-h":!0}),Pe(n)!=="svelte-149pjfl"&&(n.innerHTML=s),r=z(h),o=E(h,"TBODY",{});var d=F(o);for(let g=0;g<c.length;g+=1)c[g].l(d);d.forEach(S),h.forEach(S),u.forEach(S),this.h()},h(){R(t,"class","stats-table svelte-9umuf9"),R(e,"class","stats-table-container svelte-9umuf9")},m(l,u){ge(l,e,u),f(e,t),f(t,n),f(t,r),f(t,o);for(let h=0;h<c.length;h+=1)c[h]&&c[h].m(o,null)},p(l,u){if(u[0]&1024){a=et(l[10]);let h;for(h=0;h<a.length;h+=1){const d=ku(l,a,h);c[h]?c[h].p(d,u):(c[h]=ju(d),c[h].c(),c[h].m(o,null))}for(;h<c.length;h+=1)c[h].d(1);c.length=a.length}},d(l){l&&S(e),Et(c,l)}}}function Hu(i){let e,t,n,s,r=i[49].hole_id+"",o,a,c,l;function u(){return i[29](i[49])}return{c(){e=M("label"),t=M("input"),s=V(),o=pe(r),a=V(),this.h()},l(h){e=E(h,"LABEL",{class:!0,style:!0});var d=F(e);t=E(d,"INPUT",{type:!0}),s=z(d),o=de(d,r),a=z(d),d.forEach(S),this.h()},h(){R(t,"type","checkbox"),t.checked=n=i[0].includes(i[49].id),R(e,"class","checkbox-label"),me(e,"font-size","11px")},m(h,d){ge(h,e,d),f(e,t),f(e,s),f(e,o),f(e,a),c||(l=ze(t,"change",u),c=!0)},p(h,d){i=h,d[0]&257&&n!==(n=i[0].includes(i[49].id))&&(t.checked=n),d[0]&256&&r!==(r=i[49].hole_id+"")&&Ve(o,r)},d(h){h&&S(e),c=!1,l()}}}function Gu(i){let e,t,n=i[7].date.getFullYear()+"",s,r,o=String(i[7].date.getMonth()+1).padStart(2,"0")+"",a,c,l=String(i[7].date.getDate()).padStart(2,"0")+"",u,h,d,g=et(i[7].data),v=[];for(let m=0;m<g.length;m+=1)v[m]=Wu(Uu(i,g,m));return{c(){e=M("div"),t=M("div"),s=pe(n),r=pe("-"),a=pe(o),c=pe("-"),u=pe(l),h=V();for(let m=0;m<v.length;m+=1)v[m].c();this.h()},l(m){e=E(m,"DIV",{class:!0,style:!0});var _=F(e);t=E(_,"DIV",{class:!0});var p=F(t);s=de(p,n),r=de(p,"-"),a=de(p,o),c=de(p,"-"),u=de(p,l),p.forEach(S),h=z(_);for(let x=0;x<v.length;x+=1)v[x].l(_);_.forEach(S),this.h()},h(){R(t,"class","tooltip-date svelte-9umuf9"),R(e,"class","compare-tooltip svelte-9umuf9"),R(e,"style",d="left: "+Math.min(i[7].x+12,i[5].getBoundingClientRect().width-180)+"px; top: 50px; "+(i[7].x>i[5].getBoundingClientRect().width/2?"transform: translateX(-100%); left: "+(i[7].x-12)+"px;":""))},m(m,_){ge(m,e,_),f(e,t),f(t,s),f(t,r),f(t,a),f(t,c),f(t,u),f(e,h);for(let p=0;p<v.length;p+=1)v[p]&&v[p].m(e,null)},p(m,_){if(_[0]&128&&n!==(n=m[7].date.getFullYear()+"")&&Ve(s,n),_[0]&128&&o!==(o=String(m[7].date.getMonth()+1).padStart(2,"0")+"")&&Ve(a,o),_[0]&128&&l!==(l=String(m[7].date.getDate()).padStart(2,"0")+"")&&Ve(u,l),_[0]&16512){g=et(m[7].data);let p;for(p=0;p<g.length;p+=1){const x=Uu(m,g,p);v[p]?v[p].p(x,_):(v[p]=Wu(x),v[p].c(),v[p].m(e,null))}for(;p<v.length;p+=1)v[p].d(1);v.length=g.length}_[0]&160&&d!==(d="left: "+Math.min(m[7].x+12,m[5].getBoundingClientRect().width-180)+"px; top: 50px; "+(m[7].x>m[5].getBoundingClientRect().width/2?"transform: translateX(-100%); left: "+(m[7].x-12)+"px;":""))&&R(e,"style",d)},d(m){m&&S(e),Et(v,m)}}}function Wu(i){let e,t,n=i[46].hole_id+"",s,r,o,a=i[46].record?i[46].record.water_level.toFixed(2)+"m":"—",c,l;return{c(){e=M("div"),t=M("span"),s=pe(n),r=V(),o=M("span"),c=pe(a),l=V(),this.h()},l(u){e=E(u,"DIV",{class:!0,style:!0});var h=F(e);t=E(h,"SPAN",{class:!0});var d=F(t);s=de(d,n),d.forEach(S),r=z(h),o=E(h,"SPAN",{class:!0});var g=F(o);c=de(g,a),g.forEach(S),l=z(h),h.forEach(S),this.h()},h(){R(t,"class","tooltip-hole svelte-9umuf9"),R(o,"class","tooltip-value svelte-9umuf9"),R(e,"class","tooltip-row svelte-9umuf9"),me(e,"color",i[14][i[48]%i[14].length])},m(u,h){ge(u,e,h),f(e,t),f(t,s),f(e,r),f(e,o),f(o,c),f(e,l)},p(u,h){h[0]&128&&n!==(n=u[46].hole_id+"")&&Ve(s,n),h[0]&128&&a!==(a=u[46].record?u[46].record.water_level.toFixed(2)+"m":"—")&&Ve(c,a)},d(u){u&&S(e)}}}function Xu(i){var se,ue,le,ce;let e,t,n=i[43].hole_id+"",s,r,o,a=i[43].count+"",c,l,u,h=(((se=i[43].s_stat)==null?void 0:se.toFixed(1))??"-")+"",d,g,v,m=(((ue=i[43].var_s)==null?void 0:ue.toFixed(1))??"-")+"",_,p,x,b=(((le=i[43].z_value)==null?void 0:le.toFixed(3))??"-")+"",A,C,T,w=(((ce=i[43].p_value)==null?void 0:ce.toFixed(4))??"-")+"",L,U,y,N,K=Yu(i[43].trend)+"",$,O,j=i[43].trend+"",W,ee,te;return{c(){e=M("tr"),t=M("td"),s=pe(n),r=V(),o=M("td"),c=pe(a),l=V(),u=M("td"),d=pe(h),g=V(),v=M("td"),_=pe(m),p=V(),x=M("td"),A=pe(b),C=V(),T=M("td"),L=pe(w),U=V(),y=M("td"),N=M("span"),$=pe(K),O=V(),W=pe(j),te=V(),this.h()},l(fe){e=E(fe,"TR",{});var B=F(e);t=E(B,"TD",{class:!0});var J=F(t);s=de(J,n),J.forEach(S),r=z(B),o=E(B,"TD",{class:!0});var oe=F(o);c=de(oe,a),oe.forEach(S),l=z(B),u=E(B,"TD",{class:!0});var D=F(u);d=de(D,h),D.forEach(S),g=z(B),v=E(B,"TD",{class:!0});var I=F(v);_=de(I,m),I.forEach(S),p=z(B),x=E(B,"TD",{class:!0});var be=F(x);A=de(be,b),be.forEach(S),C=z(B),T=E(B,"TD",{class:!0});var Se=F(T);L=de(Se,w),Se.forEach(S),U=z(B),y=E(B,"TD",{style:!0,class:!0});var Ce=F(y);N=E(Ce,"SPAN",{class:!0});var q=F(N);$=de(q,K),q.forEach(S),O=z(Ce),W=de(Ce,j),Ce.forEach(S),te=z(B),B.forEach(S),this.h()},h(){R(t,"class","svelte-9umuf9"),R(o,"class","svelte-9umuf9"),R(u,"class","svelte-9umuf9"),R(v,"class","svelte-9umuf9"),R(x,"class","svelte-9umuf9"),R(T,"class","svelte-9umuf9"),R(N,"class","trend-icon svelte-9umuf9"),R(y,"style",ee=qu(i[43].trend)),R(y,"class","svelte-9umuf9")},m(fe,B){ge(fe,e,B),f(e,t),f(t,s),f(e,r),f(e,o),f(o,c),f(e,l),f(e,u),f(u,d),f(e,g),f(e,v),f(v,_),f(e,p),f(e,x),f(x,A),f(e,C),f(e,T),f(T,L),f(e,U),f(e,y),f(y,N),f(N,$),f(y,O),f(y,W),f(e,te)},p(fe,B){var J,oe,D,I;B[0]&512&&n!==(n=fe[43].hole_id+"")&&Ve(s,n),B[0]&512&&a!==(a=fe[43].count+"")&&Ve(c,a),B[0]&512&&h!==(h=(((J=fe[43].s_stat)==null?void 0:J.toFixed(1))??"-")+"")&&Ve(d,h),B[0]&512&&m!==(m=(((oe=fe[43].var_s)==null?void 0:oe.toFixed(1))??"-")+"")&&Ve(_,m),B[0]&512&&b!==(b=(((D=fe[43].z_value)==null?void 0:D.toFixed(3))??"-")+"")&&Ve(A,b),B[0]&512&&w!==(w=(((I=fe[43].p_value)==null?void 0:I.toFixed(4))??"-")+"")&&Ve(L,w),B[0]&512&&K!==(K=Yu(fe[43].trend)+"")&&Ve($,K),B[0]&512&&j!==(j=fe[43].trend+"")&&Ve(W,j),B[0]&512&&ee!==(ee=qu(fe[43].trend))&&R(y,"style",ee)},d(fe){fe&&S(e)}}}function ju(i){var D,I,be,Se,Ce;let e,t,n=i[40].hole_id+"",s,r,o,a=i[40].count+"",c,l,u,h=(((D=i[40].mean)==null?void 0:D.toFixed(2))??"-")+"",d,g,v,m=(((I=i[40].median)==null?void 0:I.toFixed(2))??"-")+"",_,p,x,b=(((be=i[40].std_dev)==null?void 0:be.toFixed(2))??"-")+"",A,C,T,w=(((Se=i[40].cv)==null?void 0:Se.toFixed(2))??"-")+"",L,U,y,N,K=(i[40].max_rise_days??"-")+"",$,O,j,W=(i[40].max_fall_days??"-")+"",ee,te,se,ue=(((Ce=i[40].annual_amplitude)==null?void 0:Ce.toFixed(2))??"-")+"",le,ce,fe,B=(i[40].count>=10&&i[40].anomaly_count!=null?i[40].anomaly_count:"—")+"",J,oe;return{c(){e=M("tr"),t=M("td"),s=pe(n),r=V(),o=M("td"),c=pe(a),l=V(),u=M("td"),d=pe(h),g=V(),v=M("td"),_=pe(m),p=V(),x=M("td"),A=pe(b),C=V(),T=M("td"),L=pe(w),U=pe("%"),y=V(),N=M("td"),$=pe(K),O=V(),j=M("td"),ee=pe(W),te=V(),se=M("td"),le=pe(ue),ce=V(),fe=M("td"),J=pe(B),oe=V(),this.h()},l(q){e=E(q,"TR",{});var Ae=F(e);t=E(Ae,"TD",{class:!0});var ye=F(t);s=de(ye,n),ye.forEach(S),r=z(Ae),o=E(Ae,"TD",{class:!0});var Ne=F(o);c=de(Ne,a),Ne.forEach(S),l=z(Ae),u=E(Ae,"TD",{class:!0});var ae=F(u);d=de(ae,h),ae.forEach(S),g=z(Ae),v=E(Ae,"TD",{class:!0});var ie=F(v);_=de(ie,m),ie.forEach(S),p=z(Ae),x=E(Ae,"TD",{class:!0});var _e=F(x);A=de(_e,b),_e.forEach(S),C=z(Ae),T=E(Ae,"TD",{class:!0});var k=F(T);L=de(k,w),U=de(k,"%"),k.forEach(S),y=z(Ae),N=E(Ae,"TD",{class:!0});var P=F(N);$=de(P,K),P.forEach(S),O=z(Ae),j=E(Ae,"TD",{class:!0});var ve=F(j);ee=de(ve,W),ve.forEach(S),te=z(Ae),se=E(Ae,"TD",{class:!0});var Te=F(se);le=de(Te,ue),Te.forEach(S),ce=z(Ae),fe=E(Ae,"TD",{class:!0});var X=F(fe);J=de(X,B),X.forEach(S),oe=z(Ae),Ae.forEach(S),this.h()},h(){R(t,"class","svelte-9umuf9"),R(o,"class","svelte-9umuf9"),R(u,"class","svelte-9umuf9"),R(v,"class","svelte-9umuf9"),R(x,"class","svelte-9umuf9"),R(T,"class","svelte-9umuf9"),R(N,"class","svelte-9umuf9"),R(j,"class","svelte-9umuf9"),R(se,"class","svelte-9umuf9"),R(fe,"class","svelte-9umuf9")},m(q,Ae){ge(q,e,Ae),f(e,t),f(t,s),f(e,r),f(e,o),f(o,c),f(e,l),f(e,u),f(u,d),f(e,g),f(e,v),f(v,_),f(e,p),f(e,x),f(x,A),f(e,C),f(e,T),f(T,L),f(T,U),f(e,y),f(e,N),f(N,$),f(e,O),f(e,j),f(j,ee),f(e,te),f(e,se),f(se,le),f(e,ce),f(e,fe),f(fe,J),f(e,oe)},p(q,Ae){var ye,Ne,ae,ie,_e;Ae[0]&1024&&n!==(n=q[40].hole_id+"")&&Ve(s,n),Ae[0]&1024&&a!==(a=q[40].count+"")&&Ve(c,a),Ae[0]&1024&&h!==(h=(((ye=q[40].mean)==null?void 0:ye.toFixed(2))??"-")+"")&&Ve(d,h),Ae[0]&1024&&m!==(m=(((Ne=q[40].median)==null?void 0:Ne.toFixed(2))??"-")+"")&&Ve(_,m),Ae[0]&1024&&b!==(b=(((ae=q[40].std_dev)==null?void 0:ae.toFixed(2))??"-")+"")&&Ve(A,b),Ae[0]&1024&&w!==(w=(((ie=q[40].cv)==null?void 0:ie.toFixed(2))??"-")+"")&&Ve(L,w),Ae[0]&1024&&K!==(K=(q[40].max_rise_days??"-")+"")&&Ve($,K),Ae[0]&1024&&W!==(W=(q[40].max_fall_days??"-")+"")&&Ve(ee,W),Ae[0]&1024&&ue!==(ue=(((_e=q[40].annual_amplitude)==null?void 0:_e.toFixed(2))??"-")+"")&&Ve(le,ue),Ae[0]&1024&&B!==(B=(q[40].count>=10&&q[40].anomaly_count!=null?q[40].anomaly_count:"—")+"")&&Ve(J,B)},d(q){q&&S(e)}}}function T0(i){let e,t="<h3>水位分析</h3>",n,s,r,o,a="选择钻孔 (可多选)",c,l,u,h,d=i[2]?"分析中...":"执行统计分析",g,v,m,_,p,x=et(i[8]),b=[];for(let C=0;C<x.length;C+=1)b[C]=zu(Bu(i,x,C));let A=i[10].length>0&&Vu(i);return{c(){e=M("div"),e.innerHTML=t,n=V(),s=M("div"),r=M("div"),o=M("label"),o.textContent=a,c=V(),l=M("div");for(let C=0;C<b.length;C+=1)b[C].c();u=V(),h=M("button"),g=pe(d),m=V(),A&&A.c(),this.h()},l(C){e=E(C,"DIV",{class:!0,"data-svelte-h":!0}),Pe(e)!=="svelte-7pvpg7"&&(e.innerHTML=t),n=z(C),s=E(C,"DIV",{class:!0});var T=F(s);r=E(T,"DIV",{class:!0,style:!0});var w=F(r);o=E(w,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(o)!=="svelte-5wk8rr"&&(o.textContent=a),c=z(w),l=E(w,"DIV",{class:!0});var L=F(l);for(let y=0;y<b.length;y+=1)b[y].l(L);L.forEach(S),w.forEach(S),u=z(T),h=E(T,"BUTTON",{class:!0,style:!0});var U=F(h);g=de(U,d),U.forEach(S),m=z(T),A&&A.l(T),T.forEach(S),this.h()},h(){R(e,"class","panel-header"),me(o,"font-size","12px"),R(l,"class","borehole-checkboxes svelte-9umuf9"),R(r,"class","form-group"),me(r,"margin-bottom","8px"),R(h,"class","btn-primary btn-sm"),me(h,"width","100%"),me(h,"margin-bottom","12px"),h.disabled=v=i[2]||i[1].length===0,R(s,"class","panel-body scrollable")},m(C,T){ge(C,e,T),ge(C,n,T),ge(C,s,T),f(s,r),f(r,o),f(r,c),f(r,l);for(let w=0;w<b.length;w+=1)b[w]&&b[w].m(l,null);f(s,u),f(s,h),f(h,g),f(s,m),A&&A.m(s,null),_||(p=ze(h,"click",i[13]),_=!0)},p(C,T){if(T[0]&2306){x=et(C[8]);let w;for(w=0;w<x.length;w+=1){const L=Bu(C,x,w);b[w]?b[w].p(L,T):(b[w]=zu(L),b[w].c(),b[w].m(l,null))}for(;w<b.length;w+=1)b[w].d(1);b.length=x.length}T[0]&4&&d!==(d=C[2]?"分析中...":"执行统计分析")&&Ve(g,d),T[0]&6&&v!==(v=C[2]||C[1].length===0)&&(h.disabled=v),C[10].length>0?A?A.p(C,T):(A=Vu(C),A.c(),A.m(s,null)):A&&(A.d(1),A=null)},i:yt,o:yt,d(C){C&&(S(e),S(n),S(s)),Et(b,C),A&&A.d(),_=!1,p()}}}function qu(i){return i==="显著上升"?"color: #4caf50;":i==="显著下降"?"color: #f44336;":"color: #9e9e9e;"}function Yu(i){return i==="显著上升"?"↑":i==="显著下降"?"↓":"—"}function w0(i,e,t){let n,s,r,o,a,c;Qe(i,cs,D=>t(36,n=D)),Qe(i,Gn,D=>t(8,s=D)),Qe(i,ia,D=>t(22,r=D)),Qe(i,na,D=>t(9,o=D)),Qe(i,ta,D=>t(10,a=D)),Qe(i,Bn,D=>t(37,c=D));let l=[],u=!1,h,d="stats",g,v=[],m=null,_=!1,p=null,x=null,b=null,A=null;function C(D){l.includes(D)?t(1,l=l.filter(I=>I!==D)):t(1,l=[...l,D])}function T(D){v.includes(D)?t(0,v=v.filter(I=>I!==D)):v.length<6?t(0,v=[...v,D]):$e("最多只能选择6个钻孔进行对比","warning")}async function w(){if(!(!c||l.length===0)){t(2,u=!0);try{const[D,I,be]=await Promise.all([ft.getWaterLevelStats(c.id,l),ft.getWaterLevelMKTest(c.id,l),ft.getWaterLevelBoxplot(c.id,l)]);it(ta,a=D,a),it(na,o=I,o),it(ia,r=be,r),setTimeout(L,50)}catch(D){$e(`分析失败: ${D.message}`,"error")}finally{t(2,u=!1)}}}function L(){if(!h)return;const D=h,I=D.getContext("2d"),be=window.devicePixelRatio||1,Se=D.getBoundingClientRect();D.width=Se.width*be,D.height=Se.height*be,I.scale(be,be);const Ce=Se.width,q=Se.height;if(I.fillStyle="#1a1d23",I.fillRect(0,0,Ce,q),!r||r.length===0){I.fillStyle="#888",I.font="13px sans-serif",I.textAlign="center",I.fillText("请执行分析后查看箱线图",Ce/2,q/2);return}const Ae=r.filter(H=>H.boxplot);if(Ae.length===0){I.fillStyle="#888",I.font="13px sans-serif",I.textAlign="center",I.fillText("无有效箱线图数据",Ce/2,q/2);return}const ye={top:20,right:20,bottom:50,left:60},Ne=Ce-ye.left-ye.right,ae=q-ye.top-ye.bottom;let ie=1/0,_e=-1/0;Ae.forEach(H=>{H.boxplot.whisker_low<ie&&(ie=H.boxplot.whisker_low),H.boxplot.whisker_high>_e&&(_e=H.boxplot.whisker_high)});const k=(_e-ie)*.1||1;ie-=k,_e+=k;const P=H=>ye.top+ae-(H-ie)/(_e-ie)*ae;I.strokeStyle="#333",I.lineWidth=1;for(let H=0;H<=5;H++){const Y=ye.top+H/5*ae;I.beginPath(),I.moveTo(ye.left,Y),I.lineTo(Ce-ye.right,Y),I.stroke();const he=_e-H/5*(_e-ie);I.fillStyle="#888",I.font="10px sans-serif",I.textAlign="right",I.fillText(he.toFixed(2),ye.left-6,Y+3)}const ve=Math.min(60,Ne/Ae.length*.6),Te=Ne/Ae.length,X=["#4fc3f7","#81c784","#ffb74d","#e57373","#ba68c8","#4dd0e1"];Ae.forEach((H,Y)=>{const he=ye.left+Te*(Y+.5),Q=H.boxplot,re=X[Y%X.length],Me=P(Q.q1),Ee=P(Q.q3),xe=P(Q.median),Re=P(Q.whisker_low),Ye=P(Q.whisker_high);I.strokeStyle=re,I.lineWidth=1,I.beginPath(),I.moveTo(he,Re),I.lineTo(he,Me),I.stroke(),I.beginPath(),I.moveTo(he,Ee),I.lineTo(he,Ye),I.stroke(),I.beginPath(),I.moveTo(he-ve*.3,Re),I.lineTo(he+ve*.3,Re),I.stroke(),I.beginPath(),I.moveTo(he-ve*.3,Ye),I.lineTo(he+ve*.3,Ye),I.stroke(),I.fillStyle=re+"40",I.strokeStyle=re,I.lineWidth=1.5;const Fe=he-ve/2,Le=Math.min(Me,Ee),ke=Math.abs(Ee-Me);I.fillRect(Fe,Le,ve,ke),I.strokeRect(Fe,Le,ve,ke),I.strokeStyle="#fff",I.lineWidth=2,I.beginPath(),I.moveTo(Fe,xe),I.lineTo(Fe+ve,xe),I.stroke(),Q.outliers&&Q.outliers.length>0&&(I.fillStyle=re,Q.outliers.forEach(Z=>{const Be=P(Z);I.beginPath(),I.arc(he,Be,3,0,Math.PI*2),I.fill()})),I.fillStyle="#ccc",I.font="10px sans-serif",I.textAlign="center",I.fillText(H.hole_id,he,q-ye.bottom+18)}),I.fillStyle="#888",I.font="11px sans-serif",I.textAlign="center",I.fillText("水位标高 (m)",14,q/2)}const U=["#4fc3f7","#81c784","#ffb74d","#e57373","#ba68c8","#4dd0e1"];function y(){if(!g)return;const D=g,I=D.getContext("2d"),be=window.devicePixelRatio||1,Se=D.getBoundingClientRect();D.width=Se.width*be,D.height=Se.height*be,I.scale(be,be);const Ce=Se.width,q=Se.height;if(I.fillStyle="#1a1d23",I.fillRect(0,0,Ce,q),v.length<2){I.fillStyle="#888",I.font="13px sans-serif",I.textAlign="center",I.fillText('请选择2~6个钻孔后点击"生成对比图"',Ce/2,q/2);return}const Ae={};let ye=[],Ne=[];v.forEach(Me=>{const Ee=n.filter(xe=>xe.borehole_id===Me).sort((xe,Re)=>new Date(xe.obs_date)-new Date(Re.obs_date));Ae[Me]=Ee,Ee.forEach(xe=>{ye.push(new Date(xe.obs_date).getTime()),Ne.push(xe.water_level)})});const ae=v.filter(Me=>(Ae[Me]||[]).length>0);if(ae.length<2){I.fillStyle="#888",I.font="13px sans-serif",I.textAlign="center",I.fillText("选中的钻孔中至少需要2个有数据",Ce/2,q/2);return}const ie={top:40,right:20,bottom:60,left:60},_e=Ce-ie.left-ie.right,k=q-ie.top-ie.bottom;let P=Math.min(...ye),ve=Math.max(...ye);m&&(P=m[0],ve=m[1]);const Te=Math.min(...Ne),X=Math.max(...Ne),H=(X-Te)*.1||1,Y=Me=>ie.left+(Me-P)/(ve-P||1)*_e,he=Me=>ie.top+k-(Me-(Te-H))/(X+H-(Te-H)||1)*k;I.strokeStyle="#333",I.lineWidth=1;for(let Me=0;Me<=5;Me++){const Ee=ie.top+Me/5*k;I.beginPath(),I.moveTo(ie.left,Ee),I.lineTo(Ce-ie.right,Ee),I.stroke();const xe=X+H-Me/5*(X+H-(Te-H));I.fillStyle="#888",I.font="10px sans-serif",I.textAlign="right",I.fillText(xe.toFixed(2),ie.left-6,Ee+3)}for(let Me=0;Me<=5;Me++){const Ee=ie.left+Me/5*_e,xe=new Date(P+Me/5*(ve-P));I.fillStyle="#888",I.font="10px sans-serif",I.textAlign="center",I.fillText(`${xe.getFullYear()}-${String(xe.getMonth()+1).padStart(2,"0")}`,Ee,q-ie.bottom+18)}I.fillStyle="#888",I.font="11px sans-serif",I.textAlign="center",I.fillText("日期",Ce/2,q-4),I.save(),I.translate(12,q/2),I.rotate(-Math.PI/2),I.fillText("水位标高 (m)",0,0),I.restore(),ae.forEach((Me,Ee)=>{const xe=U[Ee%U.length],Re=Ae[Me];s.find(Fe=>Fe.id===Me),I.strokeStyle=xe,I.lineWidth=2,I.beginPath();let Ye=!1;Re.forEach(Fe=>{const Le=new Date(Fe.obs_date).getTime();if(Le<P||Le>ve)return;const ke=Y(Le),Z=he(Fe.water_level);Ye?I.lineTo(ke,Z):(I.moveTo(ke,Z),Ye=!0)}),I.stroke(),I.fillStyle=xe,Re.forEach(Fe=>{const Le=new Date(Fe.obs_date).getTime();if(Le<P||Le>ve)return;const ke=Y(Le),Z=he(Fe.water_level);I.beginPath(),I.arc(ke,Z,3,0,Math.PI*2),I.fill()})});const Q=8;let re=ie.left;if(ae.forEach((Me,Ee)=>{const xe=U[Ee%U.length],Re=s.find(Fe=>Fe.id===Me),Ye=(Re==null?void 0:Re.hole_id)||Me;I.fillStyle=xe,I.fillRect(re,Q,12,12),I.fillStyle="#ccc",I.font="10px sans-serif",I.textAlign="left",I.fillText(Ye,re+16,Q+10),re+=I.measureText(Ye).width+40}),_&&p&&x){const Me=Math.min(p.x,x.x),Ee=Math.max(p.x,x.x);I.fillStyle="rgba(33, 150, 243, 0.2)",I.fillRect(Me,ie.top,Ee-Me,k),I.strokeStyle="rgba(33, 150, 243, 0.6)",I.lineWidth=1,I.setLineDash([4,4]),I.strokeRect(Me,ie.top,Ee-Me,k),I.setLineDash([])}if(b!=null&&b>=ie.left&&b<=Ce-ie.right){I.strokeStyle="rgba(255, 255, 255, 0.5)",I.lineWidth=1,I.setLineDash([4,4]),I.beginPath(),I.moveTo(b,ie.top),I.lineTo(b,ie.top+k),I.stroke(),I.setLineDash([]);const Me=P+(b-ie.left)/_e*(ve-P),Ee=new Date(Me);Ee.setHours(0,0,0,0);const xe=[];ae.forEach(Re=>{const Ye=Ae[Re],Fe=s.find(Z=>Z.id===Re);let Le=null,ke=1/0;Ye.forEach(Z=>{const Be=new Date(Z.obs_date);Be.setHours(0,0,0,0);const qe=Math.abs(Be-Ee);qe<ke&&qe<14*24*3600*1e3&&(ke=qe,Le=Z)}),xe.push({hole_id:(Fe==null?void 0:Fe.hole_id)||Re,record:Le,borehole_id:Re})}),t(7,A={x:b,date:Ee,data:xe})}}function N(D){const I=g.getBoundingClientRect();return{x:D.clientX-I.left,y:D.clientY-I.top}}function K(D){if(v.length<2||!m&&v.length<2)return;const I=N(D);_=!0,p=I,x=I}function $(D){const I=N(D);_?x=I:b=I.x,y()}function O(D){if(_&&p&&x){const I=Math.min(p.x,x.x),be=Math.max(p.x,x.x);if(be-I>10){const Se={left:60,right:20},q=g.getBoundingClientRect().width-Se.left-Se.right,Ae=[];v.forEach(_e=>{n.filter(k=>k.borehole_id===_e).forEach(k=>{Ae.push(new Date(k.obs_date).getTime())})});let ye=Math.min(...Ae),Ne=Math.max(...Ae);m&&(ye=m[0],Ne=m[1]);const ae=ye+(I-Se.left)/q*(Ne-ye),ie=ye+(be-Se.left)/q*(Ne-ye);t(6,m=[ae,ie])}}_=!1,p=null,x=null,y()}function j(){t(6,m=null),y()}function W(){b=null,t(7,A=null),_=!1,p=null,x=null,y()}function ee(){if(v.length<2){$e("请至少选择2个钻孔","warning");return}if(v.length>6){$e("最多只能选择6个钻孔","warning");return}t(6,m=null),setTimeout(y,50)}const te=D=>C(D.id),se=()=>t(4,d="stats"),ue=()=>t(4,d="mk"),le=()=>t(4,d="boxplot"),ce=()=>t(4,d="compare");function fe(D){ni[D?"unshift":"push"](()=>{h=D,t(3,h)})}const B=D=>T(D.id),J=()=>{t(6,m=null),setTimeout(y,10)};function oe(D){ni[D?"unshift":"push"](()=>{g=D,t(5,g)})}return i.$$.update=()=>{i.$$.dirty[0]&4194304&&r&&r.length>0&&setTimeout(L,50),i.$$.dirty[0]&1&&v&&v.length>=2&&setTimeout(y,50)},[v,l,u,h,d,g,m,A,s,o,a,C,T,w,U,y,K,$,O,j,W,ee,r,te,se,ue,le,ce,fe,B,J,oe]}class A0 extends pn{constructor(e){super(),mn(this,e,w0,T0,dn,{},null,[-1,-1])}}function Ku(i,e,t){const n=i.slice();return n[29]=e[t],n}function C0(i){let e,t,n,s="起始日期",r,o,a,c,l,u="结束日期",h,d,g,v;return{c(){e=M("div"),t=M("div"),n=M("label"),n.textContent=s,r=V(),o=M("input"),a=V(),c=M("div"),l=M("label"),l.textContent=u,h=V(),d=M("input"),this.h()},l(m){e=E(m,"DIV",{class:!0});var _=F(e);t=E(_,"DIV",{class:!0});var p=F(t);n=E(p,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(n)!=="svelte-adhmnz"&&(n.textContent=s),r=z(p),o=E(p,"INPUT",{type:!0,style:!0}),p.forEach(S),a=z(_),c=E(_,"DIV",{class:!0});var x=F(c);l=E(x,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(l)!=="svelte-4ph25r"&&(l.textContent=u),h=z(x),d=E(x,"INPUT",{type:!0,style:!0}),x.forEach(S),_.forEach(S),this.h()},h(){me(n,"font-size","12px"),R(o,"type","date"),me(o,"width","100%"),me(o,"font-size","12px"),R(t,"class","form-group"),me(l,"font-size","12px"),R(d,"type","date"),me(d,"width","100%"),me(d,"font-size","12px"),R(c,"class","form-group"),R(e,"class","form-row")},m(m,_){ge(m,e,_),f(e,t),f(t,n),f(t,r),f(t,o),Ke(o,i[4]),f(e,a),f(e,c),f(c,l),f(c,h),f(c,d),Ke(d,i[5]),g||(v=[ze(o,"input",i[20]),ze(d,"input",i[21])],g=!0)},p(m,_){_[0]&16&&Ke(o,m[4]),_[0]&32&&Ke(d,m[5])},d(m){m&&S(e),g=!1,At(v)}}}function R0(i){let e,t,n="观测日期",s,r,o,a;return{c(){e=M("div"),t=M("label"),t.textContent=n,s=V(),r=M("input"),this.h()},l(c){e=E(c,"DIV",{class:!0});var l=F(e);t=E(l,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(t)!=="svelte-1ax8ghg"&&(t.textContent=n),s=z(l),r=E(l,"INPUT",{type:!0,style:!0}),l.forEach(S),this.h()},h(){me(t,"font-size","12px"),R(r,"type","date"),me(r,"width","100%"),me(r,"font-size","12px"),R(e,"class","form-group")},m(c,l){ge(c,e,l),f(e,t),f(e,s),f(e,r),Ke(r,i[3]),o||(a=ze(r,"input",i[19]),o=!0)},p(c,l){l[0]&8&&Ke(r,c[3])},d(c){c&&S(e),o=!1,a()}}}function Zu(i){var ce,fe;let e,t,n,s="水位范围:",r,o,a=((ce=i[1].water_level_min)==null?void 0:ce.toFixed(2))+"",c,l,u=((fe=i[1].water_level_max)==null?void 0:fe.toFixed(2))+"",h,d,g,v,m,_,p,x,b,A,C,T=i[14].toFixed(1)+"",w,L,U,y,N,K,$,O="水位面与地层面交线",j,W,ee,te;function se(B,J){return B[11].length>0?L0:P0}let ue=se(i),le=ue(i);return{c(){e=M("div"),t=M("div"),n=M("span"),n.textContent=s,r=V(),o=M("span"),c=pe(a),l=pe(" ~ "),h=pe(u),d=pe(" m"),g=V(),v=M("div"),m=M("label"),_=M("input"),p=pe(`
                显示等值面`),x=V(),b=M("div"),A=M("label"),C=pe("透明度: "),w=pe(T),L=V(),U=M("input"),y=V(),N=M("hr"),K=V(),$=M("h4"),$.textContent=O,j=V(),le.c(),W=It(),this.h()},l(B){e=E(B,"DIV",{class:!0});var J=F(e);t=E(J,"DIV",{class:!0});var oe=F(t);n=E(oe,"SPAN",{"data-svelte-h":!0}),Pe(n)!=="svelte-1mah59w"&&(n.textContent=s),r=z(oe),o=E(oe,"SPAN",{});var D=F(o);c=de(D,a),l=de(D," ~ "),h=de(D,u),d=de(D," m"),D.forEach(S),oe.forEach(S),J.forEach(S),g=z(B),v=E(B,"DIV",{class:!0,style:!0});var I=F(v);m=E(I,"LABEL",{style:!0});var be=F(m);_=E(be,"INPUT",{type:!0}),p=de(be,`
                显示等值面`),be.forEach(S),I.forEach(S),x=z(B),b=E(B,"DIV",{class:!0});var Se=F(b);A=E(Se,"LABEL",{style:!0});var Ce=F(A);C=de(Ce,"透明度: "),w=de(Ce,T),Ce.forEach(S),L=z(Se),U=E(Se,"INPUT",{type:!0,min:!0,max:!0,step:!0,style:!0}),Se.forEach(S),y=z(B),N=E(B,"HR",{style:!0}),K=z(B),$=E(B,"H4",{style:!0,"data-svelte-h":!0}),Pe($)!=="svelte-18xkkxk"&&($.textContent=O),j=z(B),le.l(B),W=It(),this.h()},h(){R(t,"class","info-row svelte-17dv1aw"),R(e,"class","result-info svelte-17dv1aw"),R(_,"type","checkbox"),me(m,"display","flex"),me(m,"align-items","center"),me(m,"gap","6px"),me(m,"font-size","12px"),R(v,"class","form-group"),me(v,"margin-top","10px"),me(A,"font-size","12px"),R(U,"type","range"),R(U,"min","0.1"),R(U,"max","1"),R(U,"step","0.05"),me(U,"width","100%"),R(b,"class","form-group"),me(N,"border-color","var(--border)"),me(N,"margin","12px 0"),me($,"font-size","12px"),me($,"margin-bottom","8px")},m(B,J){ge(B,e,J),f(e,t),f(t,n),f(t,r),f(t,o),f(o,c),f(o,l),f(o,h),f(o,d),ge(B,g,J),ge(B,v,J),f(v,m),f(m,_),_.checked=i[13],f(m,p),ge(B,x,J),ge(B,b,J),f(b,A),f(A,C),f(A,w),f(b,L),f(b,U),Ke(U,i[14]),ge(B,y,J),ge(B,N,J),ge(B,K,J),ge(B,$,J),ge(B,j,J),le.m(B,J),ge(B,W,J),ee||(te=[ze(_,"change",i[25]),ze(U,"change",i[26]),ze(U,"input",i[26])],ee=!0)},p(B,J){var oe,D;J[0]&2&&a!==(a=((oe=B[1].water_level_min)==null?void 0:oe.toFixed(2))+"")&&Ve(c,a),J[0]&2&&u!==(u=((D=B[1].water_level_max)==null?void 0:D.toFixed(2))+"")&&Ve(h,u),J[0]&8192&&(_.checked=B[13]),J[0]&16384&&T!==(T=B[14].toFixed(1)+"")&&Ve(w,T),J[0]&16384&&Ke(U,B[14]),ue===(ue=se(B))&&le?le.p(B,J):(le.d(1),le=ue(B),le&&(le.c(),le.m(W.parentNode,W)))},d(B){B&&(S(e),S(g),S(v),S(x),S(b),S(y),S(N),S(K),S($),S(j),S(W)),le.d(B),ee=!1,At(te)}}}function P0(i){let e,t="需要先完成三维建模才能计算交线";return{c(){e=M("p"),e.textContent=t,this.h()},l(n){e=E(n,"P",{style:!0,"data-svelte-h":!0}),Pe(e)!=="svelte-10sbxyz"&&(e.textContent=t),this.h()},h(){me(e,"font-size","11px"),me(e,"color","var(--text-muted)")},m(n,s){ge(n,e,s)},p:yt,d(n){n&&S(e)}}}function L0(i){let e,t,n="选择地层",s,r,o,a="请选择地层",c,l,u,h,d,g,v,m,_=et(i[11]),p=[];for(let b=0;b<_.length;b+=1)p[b]=Ju(Ku(i,_,b));let x=i[12]&&i[12].length>0&&Qu(i);return{c(){e=M("div"),t=M("label"),t.textContent=n,s=V(),r=M("select"),o=M("option"),o.textContent=a;for(let b=0;b<p.length;b+=1)p[b].c();c=V(),l=M("button"),u=pe("计算交线"),d=V(),x&&x.c(),g=It(),this.h()},l(b){e=E(b,"DIV",{class:!0});var A=F(e);t=E(A,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(t)!=="svelte-10as4wd"&&(t.textContent=n),s=z(A),r=E(A,"SELECT",{style:!0});var C=F(r);o=E(C,"OPTION",{"data-svelte-h":!0}),Pe(o)!=="svelte-13g6dt"&&(o.textContent=a);for(let w=0;w<p.length;w+=1)p[w].l(C);C.forEach(S),A.forEach(S),c=z(b),l=E(b,"BUTTON",{class:!0,style:!0});var T=F(l);u=de(T,"计算交线"),T.forEach(S),d=z(b),x&&x.l(b),g=It(),this.h()},h(){me(t,"font-size","12px"),o.__value="",Ke(o,o.__value),me(r,"width","100%"),me(r,"font-size","12px"),i[0]===void 0&&hn(()=>i[27].call(r)),R(e,"class","form-group"),R(l,"class","btn-secondary btn-sm"),me(l,"width","100%"),l.disabled=h=!i[10]},m(b,A){ge(b,e,A),f(e,t),f(e,s),f(e,r),f(r,o);for(let C=0;C<p.length;C+=1)p[C]&&p[C].m(r,null);Tt(r,i[0],!0),ge(b,c,A),ge(b,l,A),f(l,u),ge(b,d,A),x&&x.m(b,A),ge(b,g,A),v||(m=[ze(r,"change",i[27]),ze(l,"click",i[16])],v=!0)},p(b,A){if(A[0]&2048){_=et(b[11]);let C;for(C=0;C<_.length;C+=1){const T=Ku(b,_,C);p[C]?p[C].p(T,A):(p[C]=Ju(T),p[C].c(),p[C].m(r,null))}for(;C<p.length;C+=1)p[C].d(1);p.length=_.length}A[0]&2049&&Tt(r,b[0]),A[0]&1024&&h!==(h=!b[10])&&(l.disabled=h),b[12]&&b[12].length>0?x?x.p(b,A):(x=Qu(b),x.c(),x.m(g.parentNode,g)):x&&(x.d(1),x=null)},d(b){b&&(S(e),S(c),S(l),S(d),S(g)),Et(p,b),x&&x.d(b),v=!1,At(m)}}}function Ju(i){let e,t=i[29]+"",n,s;return{c(){e=M("option"),n=pe(t),this.h()},l(r){e=E(r,"OPTION",{});var o=F(e);n=de(o,t),o.forEach(S),this.h()},h(){e.__value=s=i[29],Ke(e,e.__value)},m(r,o){ge(r,e,o),f(e,n)},p(r,o){o[0]&2048&&t!==(t=r[29]+"")&&Ve(n,t),o[0]&2048&&s!==(s=r[29])&&(e.__value=s,Ke(e,e.__value))},d(r){r&&S(e)}}}function Qu(i){let e,t,n="交点数:",s,r,o=i[12].length+"",a;return{c(){e=M("div"),t=M("span"),t.textContent=n,s=V(),r=M("span"),a=pe(o),this.h()},l(c){e=E(c,"DIV",{class:!0,style:!0});var l=F(e);t=E(l,"SPAN",{"data-svelte-h":!0}),Pe(t)!=="svelte-1c4hjfv"&&(t.textContent=n),s=z(l),r=E(l,"SPAN",{});var u=F(r);a=de(u,o),u.forEach(S),l.forEach(S),this.h()},h(){R(e,"class","info-row svelte-17dv1aw"),me(e,"margin-top","8px")},m(c,l){ge(c,e,l),f(e,t),f(e,s),f(e,r),f(r,a)},p(c,l){l[0]&4096&&o!==(o=c[12].length+"")&&Ve(a,o)},d(c){c&&S(e)}}}function D0(i){let e,t="<h3>水位等值线</h3>",n,s,r,o,a="日期模式",c,l,u,h="单日",d,g="日期范围(取均值)",v,m,_,p,x="变异函数模型",b,A,C,T="球状模型",w,L="指数模型",U,y="高斯模型",N,K,$,O,j="网格X",W,ee,te,se,ue,le="网格Y",ce,fe,B,J,oe=i[9]?"计算中...":"生成等值线",D,I,be,Se,Ce;function q(ae,ie){return ae[2]==="single"?R0:C0}let Ae=q(i),ye=Ae(i),Ne=i[1]&&Zu(i);return{c(){e=M("div"),e.innerHTML=t,n=V(),s=M("div"),r=M("div"),o=M("label"),o.textContent=a,c=V(),l=M("select"),u=M("option"),u.textContent=h,d=M("option"),d.textContent=g,v=V(),ye.c(),m=V(),_=M("div"),p=M("label"),p.textContent=x,b=V(),A=M("select"),C=M("option"),C.textContent=T,w=M("option"),w.textContent=L,U=M("option"),U.textContent=y,N=V(),K=M("div"),$=M("div"),O=M("label"),O.textContent=j,W=V(),ee=M("input"),te=V(),se=M("div"),ue=M("label"),ue.textContent=le,ce=V(),fe=M("input"),B=V(),J=M("button"),D=pe(oe),be=V(),Ne&&Ne.c(),this.h()},l(ae){e=E(ae,"DIV",{class:!0,"data-svelte-h":!0}),Pe(e)!=="svelte-agmq8t"&&(e.innerHTML=t),n=z(ae),s=E(ae,"DIV",{class:!0});var ie=F(s);r=E(ie,"DIV",{class:!0});var _e=F(r);o=E(_e,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(o)!=="svelte-18ghoz1"&&(o.textContent=a),c=z(_e),l=E(_e,"SELECT",{style:!0});var k=F(l);u=E(k,"OPTION",{"data-svelte-h":!0}),Pe(u)!=="svelte-158tu90"&&(u.textContent=h),d=E(k,"OPTION",{"data-svelte-h":!0}),Pe(d)!=="svelte-nsqibw"&&(d.textContent=g),k.forEach(S),_e.forEach(S),v=z(ie),ye.l(ie),m=z(ie),_=E(ie,"DIV",{class:!0});var P=F(_);p=E(P,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(p)!=="svelte-1gmmfbo"&&(p.textContent=x),b=z(P),A=E(P,"SELECT",{style:!0});var ve=F(A);C=E(ve,"OPTION",{"data-svelte-h":!0}),Pe(C)!=="svelte-17ym7v6"&&(C.textContent=T),w=E(ve,"OPTION",{"data-svelte-h":!0}),Pe(w)!=="svelte-bzk8zo"&&(w.textContent=L),U=E(ve,"OPTION",{"data-svelte-h":!0}),Pe(U)!=="svelte-1iqrdsw"&&(U.textContent=y),ve.forEach(S),P.forEach(S),N=z(ie),K=E(ie,"DIV",{class:!0});var Te=F(K);$=E(Te,"DIV",{class:!0});var X=F($);O=E(X,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(O)!=="svelte-v5oz4u"&&(O.textContent=j),W=z(X),ee=E(X,"INPUT",{type:!0,min:!0,max:!0,style:!0}),X.forEach(S),te=z(Te),se=E(Te,"DIV",{class:!0});var H=F(se);ue=E(H,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(ue)!=="svelte-1blztqd"&&(ue.textContent=le),ce=z(H),fe=E(H,"INPUT",{type:!0,min:!0,max:!0,style:!0}),H.forEach(S),Te.forEach(S),B=z(ie),J=E(ie,"BUTTON",{class:!0,style:!0});var Y=F(J);D=de(Y,oe),Y.forEach(S),be=z(ie),Ne&&Ne.l(ie),ie.forEach(S),this.h()},h(){R(e,"class","panel-header"),me(o,"font-size","12px"),u.__value="single",Ke(u,u.__value),d.__value="range",Ke(d,d.__value),me(l,"width","100%"),me(l,"font-size","12px"),i[2]===void 0&&hn(()=>i[18].call(l)),R(r,"class","form-group"),me(p,"font-size","12px"),C.__value="spherical",Ke(C,C.__value),w.__value="exponential",Ke(w,w.__value),U.__value="gaussian",Ke(U,U.__value),me(A,"width","100%"),me(A,"font-size","12px"),i[6]===void 0&&hn(()=>i[22].call(A)),R(_,"class","form-group"),me(O,"font-size","12px"),R(ee,"type","number"),R(ee,"min","5"),R(ee,"max","100"),me(ee,"width","100%"),me(ee,"font-size","12px"),R($,"class","form-group"),me(ue,"font-size","12px"),R(fe,"type","number"),R(fe,"min","5"),R(fe,"max","100"),me(fe,"width","100%"),me(fe,"font-size","12px"),R(se,"class","form-group"),R(K,"class","form-row"),R(J,"class","btn-primary btn-sm"),me(J,"width","100%"),me(J,"margin-bottom","12px"),J.disabled=I=i[9]||!i[3]&&i[2]==="single"||!i[4]&&i[2]==="range",R(s,"class","panel-body scrollable")},m(ae,ie){ge(ae,e,ie),ge(ae,n,ie),ge(ae,s,ie),f(s,r),f(r,o),f(r,c),f(r,l),f(l,u),f(l,d),Tt(l,i[2],!0),f(s,v),ye.m(s,null),f(s,m),f(s,_),f(_,p),f(_,b),f(_,A),f(A,C),f(A,w),f(A,U),Tt(A,i[6],!0),f(s,N),f(s,K),f(K,$),f($,O),f($,W),f($,ee),Ke(ee,i[7]),f(K,te),f(K,se),f(se,ue),f(se,ce),f(se,fe),Ke(fe,i[8]),f(s,B),f(s,J),f(J,D),f(s,be),Ne&&Ne.m(s,null),Se||(Ce=[ze(l,"change",i[18]),ze(A,"change",i[22]),ze(ee,"input",i[23]),ze(fe,"input",i[24]),ze(J,"click",i[15])],Se=!0)},p(ae,ie){ie[0]&4&&Tt(l,ae[2]),Ae===(Ae=q(ae))&&ye?ye.p(ae,ie):(ye.d(1),ye=Ae(ae),ye&&(ye.c(),ye.m(s,m))),ie[0]&64&&Tt(A,ae[6]),ie[0]&128&&ct(ee.value)!==ae[7]&&Ke(ee,ae[7]),ie[0]&256&&ct(fe.value)!==ae[8]&&Ke(fe,ae[8]),ie[0]&512&&oe!==(oe=ae[9]?"计算中...":"生成等值线")&&Ve(D,oe),ie[0]&540&&I!==(I=ae[9]||!ae[3]&&ae[2]==="single"||!ae[4]&&ae[2]==="range")&&(J.disabled=I),ae[1]?Ne?Ne.p(ae,ie):(Ne=Zu(ae),Ne.c(),Ne.m(s,null)):Ne&&(Ne.d(1),Ne=null)},i:yt,o:yt,d(ae){ae&&(S(e),S(n),S(s)),ye.d(),Ne&&Ne.d(),Se=!1,At(Ce)}}}function I0(i,e,t){let n,s,r,o,a,c,l,u;Qe(i,Er,W=>t(12,r=W)),Qe(i,Ds,W=>t(17,o=W)),Qe(i,zn,W=>t(1,a=W)),Qe(i,Un,W=>t(13,c=W)),Qe(i,Bn,W=>t(28,l=W)),Qe(i,xr,W=>t(14,u=W));let h="single",d="",g="",v="",m="spherical",_=50,p=50,x=!1,b="";async function A(){if(l){t(9,x=!0);try{const W={variogram_model:m,grid_nx:_,grid_ny:p};h==="single"&&d?W.obs_date=d:h==="range"&&g&&v&&(W.date_from=g,W.date_to=v);const ee=await ft.krigingWaterLevel(l.id,W);it(zn,a=ee,a),it(Un,c=!0,c),$e("水位等值线生成完成","success")}catch(W){$e(`等值线计算失败: ${W.message}`,"error")}finally{t(9,x=!1)}}}function C(){var be,Se,Ce,q,Ae,ye,Ne,ae;if(!a||!o||!b)return;const W=a,ee=o,te=W.grid,se=W.water_level_grid,ue=ee.grid,le=ee.surfaces[b];if(!(le!=null&&le.top)){$e("该地层顶面数据不可用","error");return}const ce=te.nx,fe=te.ny,B=ue.nx,J=ue.ny,oe=te.lon_max-te.lon_min,D=te.lat_max-te.lat_min;ue.lon_max-ue.lon_min,ue.lat_max-ue.lat_min;const I=[];for(let ie=0;ie<Math.min(fe,J)-1;ie++)for(let _e=0;_e<Math.min(ce,B)-1;_e++){const k=(be=se[ie])==null?void 0:be[_e],P=(Se=se[ie])==null?void 0:Se[_e+1],ve=(Ce=se[ie+1])==null?void 0:Ce[_e],Te=(q=se[ie+1])==null?void 0:q[_e+1],X=Math.min(Math.floor(_e/(ce-1)*(B-1)),B-2),H=Math.min(Math.floor(ie/(fe-1)*(J-1)),J-2),Y=(Ae=le.top[H])==null?void 0:Ae[X],he=(ye=le.top[H])==null?void 0:ye[X+1],Q=(Ne=le.top[H+1])==null?void 0:Ne[X],re=(ae=le.top[H+1])==null?void 0:ae[X+1];if(k==null||P==null||ve==null||Te==null||Y==null||he==null||Q==null||re==null)continue;const Me=[{i:_e,j:ie,wl:k,top:Y},{i:_e+1,j:ie,wl:P,top:he},{i:_e+1,j:ie+1,wl:Te,top:re},{i:_e,j:ie+1,wl:ve,top:Q}],Ee=[[Me[0],Me[1]],[Me[1],Me[2]],[Me[2],Me[3]],[Me[3],Me[0]]];for(const[xe,Re]of Ee){const Ye=xe.wl-xe.top,Fe=Re.wl-Re.top;if(Ye*Fe<0){const Le=Ye/(Ye-Fe),ke=te.lon_min+(xe.i+Le*(Re.i-xe.i))/(ce-1)*oe,Z=te.lat_min+(xe.j+Le*(Re.j-xe.j))/(fe-1)*D,Be=xe.top+Le*(Re.top-xe.top);I.push({longitude:ke,latitude:Z,elevation:Be})}}}it(Er,r=I,r),I.length>0?$e(`交线计算完成，共 ${I.length} 个交点`,"success"):$e("水位面与该地层顶面无交线","info")}function T(){h=fn(this),t(2,h)}function w(){d=this.value,t(3,d)}function L(){g=this.value,t(4,g)}function U(){v=this.value,t(5,v)}function y(){m=fn(this),t(6,m)}function N(){_=ct(this.value),t(7,_)}function K(){p=ct(this.value),t(8,p)}function $(){c=this.checked,Un.set(c)}function O(){u=ct(this.value),xr.set(u)}function j(){b=fn(this),t(0,b),t(11,n),t(17,o)}return i.$$.update=()=>{i.$$.dirty[0]&131072&&t(11,n=(o==null?void 0:o.lithologies)||[]),i.$$.dirty[0]&131075&&t(10,s=a&&b&&o)},[b,a,h,d,g,v,m,_,p,x,s,n,r,c,u,A,C,o,T,w,L,U,y,N,K,$,O,j]}class N0 extends pn{constructor(e){super(),mn(this,e,I0,D0,dn,{},null,[-1,-1])}}function $u(i){let e,t,n;return{c(){e=M("div"),t=pe("当前日期: "),n=pe(i[5]),this.h()},l(s){e=E(s,"DIV",{class:!0});var r=F(e);t=de(r,"当前日期: "),n=de(r,i[5]),r.forEach(S),this.h()},h(){R(e,"class","current-date-display svelte-b6qn9o")},m(s,r){ge(s,e,r),f(e,t),f(e,n)},p(s,r){r&32&&Ve(n,s[5])},d(s){s&&S(e)}}}function ef(i){let e,t,n,s,r;return{c(){e=M("button"),t=pe("开始回放"),this.h()},l(o){e=E(o,"BUTTON",{class:!0,style:!0});var a=F(e);t=de(a,"开始回放"),a.forEach(S),this.h()},h(){R(e,"class","btn-primary btn-sm"),me(e,"width","100%"),me(e,"margin-top","8px"),e.disabled=n=!i[0]||!i[1]||!i[8]},m(o,a){ge(o,e,a),f(e,t),s||(r=ze(e,"click",i[9]),s=!0)},p(o,a){a&259&&n!==(n=!o[0]||!o[1]||!o[8])&&(e.disabled=n)},d(o){o&&S(e),s=!1,r()}}}function tf(i){let e,t,n,s=i[6].length+"",r,o,a,c,l=i[7]+1+"",u,h,d=i[6].length+"",g;return{c(){e=M("div"),t=M("span"),n=pe("帧数: "),r=pe(s),o=V(),a=M("span"),c=pe("当前帧: "),u=pe(l),h=pe("/"),g=pe(d),this.h()},l(v){e=E(v,"DIV",{class:!0});var m=F(e);t=E(m,"SPAN",{});var _=F(t);n=de(_,"帧数: "),r=de(_,s),_.forEach(S),o=z(m),a=E(m,"SPAN",{});var p=F(a);c=de(p,"当前帧: "),u=de(p,l),h=de(p,"/"),g=de(p,d),p.forEach(S),m.forEach(S),this.h()},h(){R(e,"class","playback-info svelte-b6qn9o")},m(v,m){ge(v,e,m),f(e,t),f(t,n),f(t,r),f(e,o),f(e,a),f(a,c),f(a,u),f(a,h),f(a,g)},p(v,m){m&64&&s!==(s=v[6].length+"")&&Ve(r,s),m&128&&l!==(l=v[7]+1+"")&&Ve(u,l),m&64&&d!==(d=v[6].length+"")&&Ve(g,d)},d(v){v&&S(e)}}}function U0(i){let e,t="<h3>水位动态回放</h3>",n,s,r,o,a="起始日期",c,l,u,h,d,g="结束日期",v,m,_,p,x,b="播放速度",A,C,T,w="1 天/秒",L,U="7 天/秒",y,N="30 天/秒",K,$,O,j=i[3]?"⏸":"▶",W,ee,te,se,ue="⏹",le,ce,fe,B,J,oe,D,I,be,Se=i[5]&&$u(i),Ce=!i[3]&&i[6].length===0&&ef(i),q=i[6].length>0&&tf(i);return{c(){e=M("div"),e.innerHTML=t,n=V(),s=M("div"),r=M("div"),o=M("label"),o.textContent=a,c=V(),l=M("input"),u=V(),h=M("div"),d=M("label"),d.textContent=g,v=V(),m=M("input"),_=V(),p=M("div"),x=M("label"),x.textContent=b,A=V(),C=M("select"),T=M("option"),T.textContent=w,L=M("option"),L.textContent=U,y=M("option"),y.textContent=N,K=V(),$=M("div"),O=M("button"),W=pe(j),te=V(),se=M("button"),se.textContent=ue,le=V(),ce=M("div"),fe=M("div"),B=M("div"),J=V(),Se&&Se.c(),oe=V(),Ce&&Ce.c(),D=V(),q&&q.c(),this.h()},l(Ae){e=E(Ae,"DIV",{class:!0,"data-svelte-h":!0}),Pe(e)!=="svelte-1v7985g"&&(e.innerHTML=t),n=z(Ae),s=E(Ae,"DIV",{class:!0});var ye=F(s);r=E(ye,"DIV",{class:!0});var Ne=F(r);o=E(Ne,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(o)!=="svelte-adhmnz"&&(o.textContent=a),c=z(Ne),l=E(Ne,"INPUT",{type:!0,style:!0}),Ne.forEach(S),u=z(ye),h=E(ye,"DIV",{class:!0});var ae=F(h);d=E(ae,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(d)!=="svelte-4ph25r"&&(d.textContent=g),v=z(ae),m=E(ae,"INPUT",{type:!0,style:!0}),ae.forEach(S),_=z(ye),p=E(ye,"DIV",{class:!0});var ie=F(p);x=E(ie,"LABEL",{style:!0,"data-svelte-h":!0}),Pe(x)!=="svelte-usmb6n"&&(x.textContent=b),A=z(ie),C=E(ie,"SELECT",{style:!0});var _e=F(C);T=E(_e,"OPTION",{"data-svelte-h":!0}),Pe(T)!=="svelte-1humdvw"&&(T.textContent=w),L=E(_e,"OPTION",{"data-svelte-h":!0}),Pe(L)!=="svelte-17dltp0"&&(L.textContent=U),y=E(_e,"OPTION",{"data-svelte-h":!0}),Pe(y)!=="svelte-4ot9n8"&&(y.textContent=N),_e.forEach(S),ie.forEach(S),K=z(ye),$=E(ye,"DIV",{class:!0});var k=F($);O=E(k,"BUTTON",{class:!0});var P=F(O);W=de(P,j),P.forEach(S),te=z(k),se=E(k,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(se)!=="svelte-1iouqet"&&(se.textContent=ue),k.forEach(S),le=z(ye),ce=E(ye,"DIV",{class:!0});var ve=F(ce);fe=E(ve,"DIV",{class:!0});var Te=F(fe);B=E(Te,"DIV",{class:!0,style:!0}),F(B).forEach(S),Te.forEach(S),ve.forEach(S),J=z(ye),Se&&Se.l(ye),oe=z(ye),Ce&&Ce.l(ye),D=z(ye),q&&q.l(ye),ye.forEach(S),this.h()},h(){R(e,"class","panel-header"),me(o,"font-size","12px"),R(l,"type","date"),me(l,"width","100%"),me(l,"font-size","12px"),R(r,"class","form-group"),me(d,"font-size","12px"),R(m,"type","date"),me(m,"width","100%"),me(m,"font-size","12px"),R(h,"class","form-group"),me(x,"font-size","12px"),T.__value=1,Ke(T,T.__value),L.__value=7,Ke(L,L.__value),y.__value=30,Ke(y,y.__value),me(C,"width","100%"),me(C,"font-size","12px"),i[2]===void 0&&hn(()=>i[15].call(C)),R(p,"class","form-group"),R(O,"class","btn-icon svelte-b6qn9o"),O.disabled=ee=!i[0]||!i[1],R(se,"class","btn-icon svelte-b6qn9o"),R($,"class","playback-controls svelte-b6qn9o"),R(B,"class","progress-bar-fill svelte-b6qn9o"),me(B,"width",i[4]+"%"),R(fe,"class","progress-bar-track svelte-b6qn9o"),R(ce,"class","progress-bar-container svelte-b6qn9o"),R(s,"class","panel-body scrollable")},m(Ae,ye){ge(Ae,e,ye),ge(Ae,n,ye),ge(Ae,s,ye),f(s,r),f(r,o),f(r,c),f(r,l),Ke(l,i[0]),f(s,u),f(s,h),f(h,d),f(h,v),f(h,m),Ke(m,i[1]),f(s,_),f(s,p),f(p,x),f(p,A),f(p,C),f(C,T),f(C,L),f(C,y),Tt(C,i[2],!0),f(s,K),f(s,$),f($,O),f(O,W),f($,te),f($,se),f(s,le),f(s,ce),f(ce,fe),f(fe,B),f(s,J),Se&&Se.m(s,null),f(s,oe),Ce&&Ce.m(s,null),f(s,D),q&&q.m(s,null),I||(be=[ze(l,"input",i[13]),ze(m,"input",i[14]),ze(C,"change",i[15]),ze(O,"click",i[10]),ze(se,"click",i[11]),ze(ce,"click",i[12])],I=!0)},p(Ae,[ye]){ye&1&&Ke(l,Ae[0]),ye&2&&Ke(m,Ae[1]),ye&4&&Tt(C,Ae[2]),ye&8&&j!==(j=Ae[3]?"⏸":"▶")&&Ve(W,j),ye&3&&ee!==(ee=!Ae[0]||!Ae[1])&&(O.disabled=ee),ye&16&&me(B,"width",Ae[4]+"%"),Ae[5]?Se?Se.p(Ae,ye):(Se=$u(Ae),Se.c(),Se.m(s,oe)):Se&&(Se.d(1),Se=null),!Ae[3]&&Ae[6].length===0?Ce?Ce.p(Ae,ye):(Ce=ef(Ae),Ce.c(),Ce.m(s,D)):Ce&&(Ce.d(1),Ce=null),Ae[6].length>0?q?q.p(Ae,ye):(q=tf(Ae),q.c(),q.m(s,null)):q&&(q.d(1),q=null)},i:yt,o:yt,d(Ae){Ae&&(S(e),S(n),S(s)),Se&&Se.d(),Ce&&Ce.d(),q&&q.d(),I=!1,At(be)}}}function F0(i,e,t){var o,a;if(!i||!e)return i||e;const n=i.length;if(n===0)return i;const s=i[0].length,r=[];for(let c=0;c<n;c++){const l=[];for(let u=0;u<s;u++){const h=((o=i[c])==null?void 0:o[u])??0,d=((a=e[c])==null?void 0:a[u])??0;l.push(h+(d-h)*t)}r.push(l)}return r}function nf(i,e,t){const n=i.result,s=e.result,r=F0(n.water_level_grid,s.water_level_grid,t),o=n.water_level_min,a=n.water_level_max,c=s.water_level_min,l=s.water_level_max;return{grid:n.grid,water_level_grid:r,variance_grid:n.variance_grid,water_level_min:o+(c-o)*t,water_level_max:a+(l-a)*t}}function sf(i){const e=new Date(i);return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function O0(i,e,t){let n,s,r,o,a;Qe(i,sa,O=>t(20,n=O)),Qe(i,Un,O=>t(21,s=O)),Qe(i,zn,O=>t(22,r=O)),Qe(i,Bn,O=>t(8,o=O)),Qe(i,cs,O=>t(23,a=O));let c="",l="",u=7,h=!1,d=0,g="",v=null,m=0,_=[],p=0,x=0,b=1e3/u;function A(){const O=new Set;return a.forEach(j=>{const W=j.obs_date;(!c||W>=c)&&(!l||W<=l)&&O.add(W)}),Array.from(O).sort()}async function C(){if(!o)return;const O=A();if(O.length<2){$e("日期范围内的数据不足，无法回放","warning");return}t(3,h=!0),t(4,d=0),t(6,_=[]),t(7,x=0),p=0;const j=Math.max(1,Math.floor(O.length/300)),W=O.filter((ee,te)=>te%j===0||te===O.length-1);for(let ee=0;ee<W.length;ee++)try{const te=await ft.krigingWaterLevel(o.id,{obs_date:W[ee],variogram_model:"spherical",grid_nx:40,grid_ny:40});_.push({date:W[ee],dateMs:new Date(W[ee]).getTime(),result:te})}catch(te){console.warn(`Frame ${W[ee]} failed:`,te)}if(_.length<2){t(3,h=!1),$e("无法生成足够的回放帧","error");return}b=1e3/u,m=performance.now(),T()}function T(){if(!h)return;const O=performance.now(),j=O-m;m=O;const W=j/b,ee=_[x],te=x+1;if(te>=_.length){t(3,h=!1),t(4,d=100),it(zn,r=ee.result,r),it(Un,s=!0,s),t(5,g=ee.date),$e("回放完成","info");return}const ue=(_[te].dateMs-ee.dateMs)/(1e3*60*60*24),le=ue>0?W/ue:1;for(p+=le;p>=1&&x+1<_.length;)p-=1,t(7,x++,x);if(x+1>=_.length){t(3,h=!1),t(4,d=100),it(zn,r=_[_.length-1].result,r),it(Un,s=!0,s),t(5,g=_[_.length-1].date),$e("回放完成","info");return}const ce=Math.max(0,Math.min(1,p)),fe=nf(_[x],_[x+1],ce);it(zn,r=fe,r),it(Un,s=!0,s);const B=_[x].dateMs,J=_[x+1].dateMs,oe=B+(J-B)*ce;t(5,g=sf(oe));const D=_[_.length-1].dateMs-_[0].dateMs,I=oe-_[0].dateMs;t(4,d=D>0?I/D*100:0),v=requestAnimationFrame(T)}function w(){if(h)t(3,h=!1),v&&cancelAnimationFrame(v);else{if(_.length<2){C();return}x>=_.length-1&&(t(7,x=0),p=0),t(3,h=!0),b=1e3/u,m=performance.now(),T()}}function L(){t(3,h=!1),v&&cancelAnimationFrame(v),t(7,x=0),p=0,t(4,d=0),t(5,g="")}function U(O){if(_.length<2)return;const j=_[_.length-1].dateMs-_[0].dateMs,W=_[0].dateMs+O/100*j;let ee=0;for(let se=0;se<_.length-1;se++){if(_[se].dateMs<=W&&_[se+1].dateMs>W){ee=se;break}se===_.length-2&&(ee=se)}t(7,x=ee);const te=_[ee+1]?(_[ee+1].dateMs-_[ee].dateMs)/(1e3*60*60*24):1;if(p=te>0?(W-_[ee].dateMs)/(1e3*60*60*24)/te:0,p=Math.max(0,Math.min(1,p)),_[ee+1]){const se=nf(_[ee],_[ee+1],p);it(zn,r=se,r),it(Un,s=!0,s),t(5,g=sf(W))}else it(zn,r=_[ee].result,r),it(Un,s=!0,s),t(5,g=_[ee].date);t(4,d=O)}function y(O){const j=O.target.getBoundingClientRect(),W=(O.clientX-j.left)/j.width*100;U(Math.max(0,Math.min(100,W)))}function N(){c=this.value,t(0,c)}function K(){l=this.value,t(1,l)}function $(){u=fn(this),t(2,u)}return i.$$.update=()=>{i.$$.dirty&63&&it(sa,n={playing:h,startDate:c,endDate:l,speed:u,currentDate:g,progress:d},n)},[c,l,u,h,d,g,_,x,o,C,w,L,y,N,K,$]}class k0 extends pn{constructor(e){super(),mn(this,e,O0,U0,dn,{})}}function rf(i,e,t){const n=i.slice();return n[40]=e[t],n}function of(i,e,t){const n=i.slice();return n[43]=e[t],n}function af(i,e,t){const n=i.slice();return n[43]=e[t],n}function lf(i,e,t){const n=i.slice();return n[43]=e[t],n}function cf(i,e,t){const n=i.slice();return n[50]=e[t],n}function uf(i,e,t){const n=i.slice();return n[53]=e[t],n}function ff(i){let e,t=i[53].name+"",n,s;return{c(){e=M("option"),n=pe(t),this.h()},l(r){e=E(r,"OPTION",{});var o=F(e);n=de(o,t),o.forEach(S),this.h()},h(){e.__value=s=i[53].id,Ke(e,e.__value)},m(r,o){ge(r,e,o),f(e,n)},p(r,o){o[0]&2&&t!==(t=r[53].name+"")&&Ve(n,t),o[0]&2&&s!==(s=r[53].id)&&(e.__value=s,Ke(e,e.__value))},d(r){r&&S(e)}}}function hf(i){let e,t=i[50].icon+"",n,s,r=i[50].label+"",o,a,c,l;function u(){return i[22](i[50])}return{c(){e=M("button"),n=pe(t),s=V(),o=pe(r),a=V(),this.h()},l(h){e=E(h,"BUTTON",{class:!0});var d=F(e);n=de(d,t),s=z(d),o=de(d,r),a=z(d),d.forEach(S),this.h()},h(){R(e,"class","tab-btn svelte-f592h6"),Kt(e,"active",i[6]===i[50].id)},m(h,d){ge(h,e,d),f(e,n),f(e,s),f(e,o),f(e,a),c||(l=ze(e,"click",u),c=!0)},p(h,d){i=h,d[0]&262208&&Kt(e,"active",i[6]===i[50].id)},d(h){h&&S(e),c=!1,l()}}}function df(i){let e,t,n,s,r=i[0].length+"",o,a,c,l,u=i[5]&&pf(i);return{c(){e=M("div"),t=M("button"),n=pe(`⚠️
                        `),s=M("span"),o=pe(r),a=V(),u&&u.c(),this.h()},l(h){e=E(h,"DIV",{class:!0,style:!0});var d=F(e);t=E(d,"BUTTON",{class:!0,title:!0});var g=F(t);n=de(g,`⚠️
                        `),s=E(g,"SPAN",{class:!0});var v=F(s);o=de(v,r),v.forEach(S),g.forEach(S),a=z(d),u&&u.l(d),d.forEach(S),this.h()},h(){R(s,"class","warning-count-badge svelte-f592h6"),R(t,"class","warning-badge-btn svelte-f592h6"),R(t,"title","水位预警"),R(e,"class","warning-badge-container"),me(e,"position","relative")},m(h,d){ge(h,e,d),f(e,t),f(t,n),f(t,s),f(s,o),f(e,a),u&&u.m(e,null),c||(l=ze(t,"click",i[23]),c=!0)},p(h,d){d[0]&1&&r!==(r=h[0].length+"")&&Ve(o,r),h[5]?u?u.p(h,d):(u=pf(h),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},d(h){h&&S(e),u&&u.d(),c=!1,l()}}}function pf(i){let e,t,n,s="水位预警摘要",r,o,a="×",c,l,u,h,d,g,v=i[4].red.length>0&&mf(i),m=i[4].orange.length>0&&gf(i),_=i[4].blue.length>0&&bf(i);return{c(){e=M("div"),t=M("div"),n=M("h4"),n.textContent=s,r=V(),o=M("button"),o.textContent=a,c=V(),l=M("div"),v&&v.c(),u=V(),m&&m.c(),h=V(),_&&_.c(),this.h()},l(p){e=E(p,"DIV",{class:!0});var x=F(e);t=E(x,"DIV",{class:!0});var b=F(t);n=E(b,"H4",{class:!0,"data-svelte-h":!0}),Pe(n)!=="svelte-qsbpnk"&&(n.textContent=s),r=z(b),o=E(b,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(o)!=="svelte-wie9fy"&&(o.textContent=a),b.forEach(S),c=z(x),l=E(x,"DIV",{class:!0});var A=F(l);v&&v.l(A),u=z(A),m&&m.l(A),h=z(A),_&&_.l(A),A.forEach(S),x.forEach(S),this.h()},h(){R(n,"class","svelte-f592h6"),R(o,"class","close-btn svelte-f592h6"),R(t,"class","warning-panel-header svelte-f592h6"),R(l,"class","warning-panel-body svelte-f592h6"),R(e,"class","warning-panel svelte-f592h6")},m(p,x){ge(p,e,x),f(e,t),f(t,n),f(t,r),f(t,o),f(e,c),f(e,l),v&&v.m(l,null),f(l,u),m&&m.m(l,null),f(l,h),_&&_.m(l,null),d||(g=[ze(o,"click",i[24]),ze(e,"click",ah(i[19]))],d=!0)},p(p,x){p[4].red.length>0?v?v.p(p,x):(v=mf(p),v.c(),v.m(l,u)):v&&(v.d(1),v=null),p[4].orange.length>0?m?m.p(p,x):(m=gf(p),m.c(),m.m(l,h)):m&&(m.d(1),m=null),p[4].blue.length>0?_?_.p(p,x):(_=bf(p),_.c(),_.m(l,null)):_&&(_.d(1),_=null)},d(p){p&&S(e),v&&v.d(),m&&m.d(),_&&_.d(),d=!1,At(g)}}}function mf(i){let e,t,n,s=i[4].red.length+"",r,o,a,c=et(i[4].red),l=[];for(let u=0;u<c.length;u+=1)l[u]=_f(lf(i,c,u));return{c(){e=M("div"),t=M("div"),n=pe("🔴 红色预警 ("),r=pe(s),o=pe(")"),a=V();for(let u=0;u<l.length;u+=1)l[u].c();this.h()},l(u){e=E(u,"DIV",{class:!0});var h=F(e);t=E(h,"DIV",{class:!0});var d=F(t);n=de(d,"🔴 红色预警 ("),r=de(d,s),o=de(d,")"),d.forEach(S),a=z(h);for(let g=0;g<l.length;g+=1)l[g].l(h);h.forEach(S),this.h()},h(){R(t,"class","warning-group-title red svelte-f592h6"),R(e,"class","warning-group svelte-f592h6")},m(u,h){ge(u,e,h),f(e,t),f(t,n),f(t,r),f(t,o),f(e,a);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(e,null)},p(u,h){if(h[0]&16&&s!==(s=u[4].red.length+"")&&Ve(r,s),h[0]&65552){c=et(u[4].red);let d;for(d=0;d<c.length;d+=1){const g=lf(u,c,d);l[d]?l[d].p(g,h):(l[d]=_f(g),l[d].c(),l[d].m(e,null))}for(;d<l.length;d+=1)l[d].d(1);l.length=c.length}},d(u){u&&S(e),Et(l,u)}}}function _f(i){let e,t,n,s=i[43].hole_id+"",r,o,a,c,l=i[43].exceed_amount.toFixed(2)+"",u,h,d,g,v,m,_=i[43].latest_water_level.toFixed(2)+"",p,x,b,A,C,T=i[43].obs_date+"",w,L,U,y;function N(){return i[25](i[43])}return{c(){e=M("div"),t=M("div"),n=M("span"),r=pe(s),o=V(),a=M("span"),c=pe("超出 +"),u=pe(l),h=pe("m"),d=V(),g=M("div"),v=M("span"),m=pe("水位: "),p=pe(_),x=pe("m"),b=V(),A=M("span"),C=pe("日期: "),w=pe(T),L=V(),this.h()},l(K){e=E(K,"DIV",{class:!0});var $=F(e);t=E($,"DIV",{class:!0});var O=F(t);n=E(O,"SPAN",{class:!0});var j=F(n);r=de(j,s),j.forEach(S),o=z(O),a=E(O,"SPAN",{class:!0});var W=F(a);c=de(W,"超出 +"),u=de(W,l),h=de(W,"m"),W.forEach(S),O.forEach(S),d=z($),g=E($,"DIV",{class:!0});var ee=F(g);v=E(ee,"SPAN",{});var te=F(v);m=de(te,"水位: "),p=de(te,_),x=de(te,"m"),te.forEach(S),b=z(ee),A=E(ee,"SPAN",{});var se=F(A);C=de(se,"日期: "),w=de(se,T),se.forEach(S),ee.forEach(S),L=z($),$.forEach(S),this.h()},h(){R(n,"class","warning-hole svelte-f592h6"),R(a,"class","warning-exceed svelte-f592h6"),R(t,"class","warning-item-header svelte-f592h6"),R(g,"class","warning-item-details svelte-f592h6"),R(e,"class","warning-item svelte-f592h6")},m(K,$){ge(K,e,$),f(e,t),f(t,n),f(n,r),f(t,o),f(t,a),f(a,c),f(a,u),f(a,h),f(e,d),f(e,g),f(g,v),f(v,m),f(v,p),f(v,x),f(g,b),f(g,A),f(A,C),f(A,w),f(e,L),U||(y=ze(e,"click",N),U=!0)},p(K,$){i=K,$[0]&16&&s!==(s=i[43].hole_id+"")&&Ve(r,s),$[0]&16&&l!==(l=i[43].exceed_amount.toFixed(2)+"")&&Ve(u,l),$[0]&16&&_!==(_=i[43].latest_water_level.toFixed(2)+"")&&Ve(p,_),$[0]&16&&T!==(T=i[43].obs_date+"")&&Ve(w,T)},d(K){K&&S(e),U=!1,y()}}}function gf(i){let e,t,n,s=i[4].orange.length+"",r,o,a,c=et(i[4].orange),l=[];for(let u=0;u<c.length;u+=1)l[u]=vf(af(i,c,u));return{c(){e=M("div"),t=M("div"),n=pe("🟠 橙色预警 ("),r=pe(s),o=pe(")"),a=V();for(let u=0;u<l.length;u+=1)l[u].c();this.h()},l(u){e=E(u,"DIV",{class:!0});var h=F(e);t=E(h,"DIV",{class:!0});var d=F(t);n=de(d,"🟠 橙色预警 ("),r=de(d,s),o=de(d,")"),d.forEach(S),a=z(h);for(let g=0;g<l.length;g+=1)l[g].l(h);h.forEach(S),this.h()},h(){R(t,"class","warning-group-title orange svelte-f592h6"),R(e,"class","warning-group svelte-f592h6")},m(u,h){ge(u,e,h),f(e,t),f(t,n),f(t,r),f(t,o),f(e,a);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(e,null)},p(u,h){if(h[0]&16&&s!==(s=u[4].orange.length+"")&&Ve(r,s),h[0]&65552){c=et(u[4].orange);let d;for(d=0;d<c.length;d+=1){const g=af(u,c,d);l[d]?l[d].p(g,h):(l[d]=vf(g),l[d].c(),l[d].m(e,null))}for(;d<l.length;d+=1)l[d].d(1);l.length=c.length}},d(u){u&&S(e),Et(l,u)}}}function vf(i){let e,t,n,s=i[43].hole_id+"",r,o,a,c,l=i[43].exceed_amount.toFixed(2)+"",u,h,d,g,v,m,_=i[43].latest_water_level.toFixed(2)+"",p,x,b,A,C,T=i[43].obs_date+"",w,L,U,y;function N(){return i[26](i[43])}return{c(){e=M("div"),t=M("div"),n=M("span"),r=pe(s),o=V(),a=M("span"),c=pe("超出 +"),u=pe(l),h=pe("m"),d=V(),g=M("div"),v=M("span"),m=pe("水位: "),p=pe(_),x=pe("m"),b=V(),A=M("span"),C=pe("日期: "),w=pe(T),L=V(),this.h()},l(K){e=E(K,"DIV",{class:!0});var $=F(e);t=E($,"DIV",{class:!0});var O=F(t);n=E(O,"SPAN",{class:!0});var j=F(n);r=de(j,s),j.forEach(S),o=z(O),a=E(O,"SPAN",{class:!0});var W=F(a);c=de(W,"超出 +"),u=de(W,l),h=de(W,"m"),W.forEach(S),O.forEach(S),d=z($),g=E($,"DIV",{class:!0});var ee=F(g);v=E(ee,"SPAN",{});var te=F(v);m=de(te,"水位: "),p=de(te,_),x=de(te,"m"),te.forEach(S),b=z(ee),A=E(ee,"SPAN",{});var se=F(A);C=de(se,"日期: "),w=de(se,T),se.forEach(S),ee.forEach(S),L=z($),$.forEach(S),this.h()},h(){R(n,"class","warning-hole svelte-f592h6"),R(a,"class","warning-exceed svelte-f592h6"),R(t,"class","warning-item-header svelte-f592h6"),R(g,"class","warning-item-details svelte-f592h6"),R(e,"class","warning-item svelte-f592h6")},m(K,$){ge(K,e,$),f(e,t),f(t,n),f(n,r),f(t,o),f(t,a),f(a,c),f(a,u),f(a,h),f(e,d),f(e,g),f(g,v),f(v,m),f(v,p),f(v,x),f(g,b),f(g,A),f(A,C),f(A,w),f(e,L),U||(y=ze(e,"click",N),U=!0)},p(K,$){i=K,$[0]&16&&s!==(s=i[43].hole_id+"")&&Ve(r,s),$[0]&16&&l!==(l=i[43].exceed_amount.toFixed(2)+"")&&Ve(u,l),$[0]&16&&_!==(_=i[43].latest_water_level.toFixed(2)+"")&&Ve(p,_),$[0]&16&&T!==(T=i[43].obs_date+"")&&Ve(w,T)},d(K){K&&S(e),U=!1,y()}}}function bf(i){let e,t,n,s=i[4].blue.length+"",r,o,a,c=et(i[4].blue),l=[];for(let u=0;u<c.length;u+=1)l[u]=xf(of(i,c,u));return{c(){e=M("div"),t=M("div"),n=pe("🔵 蓝色预警 ("),r=pe(s),o=pe(")"),a=V();for(let u=0;u<l.length;u+=1)l[u].c();this.h()},l(u){e=E(u,"DIV",{class:!0});var h=F(e);t=E(h,"DIV",{class:!0});var d=F(t);n=de(d,"🔵 蓝色预警 ("),r=de(d,s),o=de(d,")"),d.forEach(S),a=z(h);for(let g=0;g<l.length;g+=1)l[g].l(h);h.forEach(S),this.h()},h(){R(t,"class","warning-group-title blue svelte-f592h6"),R(e,"class","warning-group svelte-f592h6")},m(u,h){ge(u,e,h),f(e,t),f(t,n),f(t,r),f(t,o),f(e,a);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(e,null)},p(u,h){if(h[0]&16&&s!==(s=u[4].blue.length+"")&&Ve(r,s),h[0]&65552){c=et(u[4].blue);let d;for(d=0;d<c.length;d+=1){const g=of(u,c,d);l[d]?l[d].p(g,h):(l[d]=xf(g),l[d].c(),l[d].m(e,null))}for(;d<l.length;d+=1)l[d].d(1);l.length=c.length}},d(u){u&&S(e),Et(l,u)}}}function xf(i){let e,t,n,s=i[43].hole_id+"",r,o,a,c,l=i[43].exceed_amount.toFixed(2)+"",u,h,d,g,v,m,_=i[43].latest_water_level.toFixed(2)+"",p,x,b,A,C,T=i[43].obs_date+"",w,L,U,y;function N(){return i[27](i[43])}return{c(){e=M("div"),t=M("div"),n=M("span"),r=pe(s),o=V(),a=M("span"),c=pe("超出 +"),u=pe(l),h=pe("m"),d=V(),g=M("div"),v=M("span"),m=pe("水位: "),p=pe(_),x=pe("m"),b=V(),A=M("span"),C=pe("日期: "),w=pe(T),L=V(),this.h()},l(K){e=E(K,"DIV",{class:!0});var $=F(e);t=E($,"DIV",{class:!0});var O=F(t);n=E(O,"SPAN",{class:!0});var j=F(n);r=de(j,s),j.forEach(S),o=z(O),a=E(O,"SPAN",{class:!0});var W=F(a);c=de(W,"超出 +"),u=de(W,l),h=de(W,"m"),W.forEach(S),O.forEach(S),d=z($),g=E($,"DIV",{class:!0});var ee=F(g);v=E(ee,"SPAN",{});var te=F(v);m=de(te,"水位: "),p=de(te,_),x=de(te,"m"),te.forEach(S),b=z(ee),A=E(ee,"SPAN",{});var se=F(A);C=de(se,"日期: "),w=de(se,T),se.forEach(S),ee.forEach(S),L=z($),$.forEach(S),this.h()},h(){R(n,"class","warning-hole svelte-f592h6"),R(a,"class","warning-exceed svelte-f592h6"),R(t,"class","warning-item-header svelte-f592h6"),R(g,"class","warning-item-details svelte-f592h6"),R(e,"class","warning-item svelte-f592h6")},m(K,$){ge(K,e,$),f(e,t),f(t,n),f(n,r),f(t,o),f(t,a),f(a,c),f(a,u),f(a,h),f(e,d),f(e,g),f(g,v),f(v,m),f(v,p),f(v,x),f(g,b),f(g,A),f(A,C),f(A,w),f(e,L),U||(y=ze(e,"click",N),U=!0)},p(K,$){i=K,$[0]&16&&s!==(s=i[43].hole_id+"")&&Ve(r,s),$[0]&16&&l!==(l=i[43].exceed_amount.toFixed(2)+"")&&Ve(u,l),$[0]&16&&_!==(_=i[43].latest_water_level.toFixed(2)+"")&&Ve(p,_),$[0]&16&&T!==(T=i[43].obs_date+"")&&Ve(w,T)},d(K){K&&S(e),U=!1,y()}}}function B0(i){let e,t;return e=new o0({}),{c(){En(e.$$.fragment)},l(n){xn(e.$$.fragment,n)},m(n,s){bn(e,n,s),t=!0},i(n){t||(kt(e.$$.fragment,n),t=!0)},o(n){Bt(e.$$.fragment,n),t=!1},d(n){vn(e,n)}}}function z0(i){let e,t;return e=new i0({}),{c(){En(e.$$.fragment)},l(n){xn(e.$$.fragment,n)},m(n,s){bn(e,n,s),t=!0},i(n){t||(kt(e.$$.fragment,n),t=!0)},o(n){Bt(e.$$.fragment,n),t=!1},d(n){vn(e,n)}}}function V0(i){let e,t;return e=new x0({}),{c(){En(e.$$.fragment)},l(n){xn(e.$$.fragment,n)},m(n,s){bn(e,n,s),t=!0},i(n){t||(kt(e.$$.fragment,n),t=!0)},o(n){Bt(e.$$.fragment,n),t=!1},d(n){vn(e,n)}}}function H0(i){let e,t;return e=new e0({}),{c(){En(e.$$.fragment)},l(n){xn(e.$$.fragment,n)},m(n,s){bn(e,n,s),t=!0},i(n){t||(kt(e.$$.fragment,n),t=!0)},o(n){Bt(e.$$.fragment,n),t=!1},d(n){vn(e,n)}}}function G0(i){let e,t;return e=new Mh({}),{c(){En(e.$$.fragment)},l(n){xn(e.$$.fragment,n)},m(n,s){bn(e,n,s),t=!0},i(n){t||(kt(e.$$.fragment,n),t=!0)},o(n){Bt(e.$$.fragment,n),t=!1},d(n){vn(e,n)}}}function W0(i){let e,t;return e=new gh({}),{c(){En(e.$$.fragment)},l(n){xn(e.$$.fragment,n)},m(n,s){bn(e,n,s),t=!0},i(n){t||(kt(e.$$.fragment,n),t=!0)},o(n){Bt(e.$$.fragment,n),t=!1},d(n){vn(e,n)}}}function X0(i){let e,t;return e=new c0({}),{c(){En(e.$$.fragment)},l(n){xn(e.$$.fragment,n)},m(n,s){bn(e,n,s),t=!0},i(n){t||(kt(e.$$.fragment,n),t=!0)},o(n){Bt(e.$$.fragment,n),t=!1},d(n){vn(e,n)}}}function j0(i){let e,t,n,s,r,o,a,c,l,u;return e=new A0({}),r=new N0({}),l=new k0({}),{c(){En(e.$$.fragment),t=V(),n=M("div"),s=V(),En(r.$$.fragment),o=V(),a=M("div"),c=V(),En(l.$$.fragment),this.h()},l(h){xn(e.$$.fragment,h),t=z(h),n=E(h,"DIV",{class:!0}),F(n).forEach(S),s=z(h),xn(r.$$.fragment,h),o=z(h),a=E(h,"DIV",{class:!0}),F(a).forEach(S),c=z(h),xn(l.$$.fragment,h),this.h()},h(){R(n,"class","divider svelte-f592h6"),R(a,"class","divider svelte-f592h6")},m(h,d){bn(e,h,d),ge(h,t,d),ge(h,n,d),ge(h,s,d),bn(r,h,d),ge(h,o,d),ge(h,a,d),ge(h,c,d),bn(l,h,d),u=!0},i(h){u||(kt(e.$$.fragment,h),kt(r.$$.fragment,h),kt(l.$$.fragment,h),u=!0)},o(h){Bt(e.$$.fragment,h),Bt(r.$$.fragment,h),Bt(l.$$.fragment,h),u=!1},d(h){h&&(S(t),S(n),S(s),S(o),S(a),S(c)),vn(e,h),vn(r,h),vn(l,h)}}}function q0(i){let e,t;return e=new Kv({}),{c(){En(e.$$.fragment)},l(n){xn(e.$$.fragment,n)},m(n,s){bn(e,n,s),t=!0},i(n){t||(kt(e.$$.fragment,n),t=!0)},o(n){Bt(e.$$.fragment,n),t=!1},d(n){vn(e,n)}}}function Y0(i){let e,t;return e=new wh({}),{c(){En(e.$$.fragment)},l(n){xn(e.$$.fragment,n)},m(n,s){bn(e,n,s),t=!0},i(n){t||(kt(e.$$.fragment,n),t=!0)},o(n){Bt(e.$$.fragment,n),t=!1},d(n){vn(e,n)}}}function Ef(i){let e,t,n,s="创建新项目",r,o,a,c="项目名称",l,u,h,d,g,v="取消",m,_,p="创建",x,b;return{c(){e=M("div"),t=M("div"),n=M("h3"),n.textContent=s,r=V(),o=M("div"),a=M("label"),a.textContent=c,l=V(),u=M("input"),h=V(),d=M("div"),g=M("button"),g.textContent=v,m=V(),_=M("button"),_.textContent=p,this.h()},l(A){e=E(A,"DIV",{class:!0});var C=F(e);t=E(C,"DIV",{class:!0});var T=F(t);n=E(T,"H3",{"data-svelte-h":!0}),Pe(n)!=="svelte-1v42gf6"&&(n.textContent=s),r=z(T),o=E(T,"DIV",{class:!0});var w=F(o);a=E(w,"LABEL",{"data-svelte-h":!0}),Pe(a)!=="svelte-1mpo0da"&&(a.textContent=c),l=z(w),u=E(w,"INPUT",{type:!0,placeholder:!0}),w.forEach(S),h=z(T),d=E(T,"DIV",{class:!0});var L=F(d);g=E(L,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(g)!=="svelte-pvm4w2"&&(g.textContent=v),m=z(L),_=E(L,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(_)!=="svelte-1mtj7b2"&&(_.textContent=p),L.forEach(S),T.forEach(S),C.forEach(S),this.h()},h(){R(u,"type","text"),R(u,"placeholder","输入项目名称"),R(o,"class","form-group"),R(g,"class","btn-secondary"),R(_,"class","btn-primary"),R(d,"class","modal-actions"),R(t,"class","modal"),R(e,"class","modal-overlay")},m(A,C){ge(A,e,C),f(e,t),f(t,n),f(t,r),f(t,o),f(o,a),f(o,l),f(o,u),Ke(u,i[3]),f(t,h),f(t,d),f(d,g),f(d,m),f(d,_),x||(b=[ze(u,"input",i[28]),ze(u,"keydown",i[29]),ze(g,"click",i[30]),ze(_,"click",i[17]),ze(e,"click",Fs(i[31]))],x=!0)},p(A,C){C[0]&8&&u.value!==A[3]&&Ke(u,A[3])},d(A){A&&S(e),x=!1,At(b)}}}function Mf(i,e){let t,n,s;return n=new h0({props:{toast:e[40]}}),{key:i,first:null,c(){t=It(),En(n.$$.fragment),this.h()},l(r){t=It(),xn(n.$$.fragment,r),this.h()},h(){this.first=t},m(r,o){ge(r,t,o),bn(n,r,o),s=!0},p(r,o){e=r;const a={};o[0]&16384&&(a.toast=e[40]),n.$set(a)},i(r){s||(kt(n.$$.fragment,r),s=!0)},o(r){Bt(n.$$.fragment,r),s=!1},d(r){r&&S(t),vn(n,r)}}}function K0(i){let e,t,n,s,r="⛏ GeoModeler",o,a,c,l,u,h="+ 新项目",d,g,v,m,_,p,x=i[9].length+"",b,A,C=i[8].length+"",T,w,L,U,y,N,K,$,O,j,W,ee,te,se,ue,le,ce,fe,B,J=[],oe=new Map,D,I,be,Se=et(i[1]),Ce=[];for(let Q=0;Q<Se.length;Q+=1)Ce[Q]=ff(uf(i,Se,Q));let q=et(i[18]),Ae=[];for(let Q=0;Q<q.length;Q+=1)Ae[Q]=hf(cf(i,q,Q));let ye=i[0].length>0&&df(i);const Ne=[W0,G0,H0,V0,z0,B0],ae=[];function ie(Q,re){return Q[6]==="boreholes"?0:Q[6]==="profiles"?1:Q[6]==="modeling"?2:Q[6]==="waterlevel"?3:Q[6]==="attributes"?4:Q[6]==="export"?5:-1}~(N=ie(i))&&(K=ae[N]=Ne[N](i));const _e=[j0,X0],k=[];function P(Q,re){return Q[6]==="waterlevel"?0:1}W=P(i),ee=k[W]=_e[W](i);const ve=[Y0,q0],Te=[];function X(Q,re){return Q[6]==="profiles"&&(Q[10]||Q[11]&&Q[12]&&Q[13])?0:1}ue=X(i),le=Te[ue]=ve[ue](i);let H=i[2]&&Ef(i),Y=et(i[14]);const he=Q=>Q[40].id;for(let Q=0;Q<Y.length;Q+=1){let re=rf(i,Y,Q),Me=he(re);oe.set(Me,J[Q]=Mf(Me,re))}return{c(){e=M("div"),t=M("header"),n=M("div"),s=M("span"),s.textContent=r,o=V(),a=M("select");for(let Q=0;Q<Ce.length;Q+=1)Ce[Q].c();l=V(),u=M("button"),u.textContent=h,d=V(),g=M("div");for(let Q=0;Q<Ae.length;Q+=1)Ae[Q].c();v=V(),m=M("div"),_=M("span"),p=pe("钻孔: "),b=pe(x),A=pe(" | 岩性: "),T=pe(C),w=V(),ye&&ye.c(),L=V(),U=M("div"),y=M("aside"),K&&K.c(),$=V(),O=M("div"),j=V(),ee.c(),te=V(),se=M("main"),le.c(),ce=V(),H&&H.c(),fe=V(),B=M("div");for(let Q=0;Q<J.length;Q+=1)J[Q].c();this.h()},l(Q){e=E(Q,"DIV",{class:!0});var re=F(e);t=E(re,"HEADER",{class:!0});var Me=F(t);n=E(Me,"DIV",{class:!0});var Ee=F(n);s=E(Ee,"SPAN",{class:!0,"data-svelte-h":!0}),Pe(s)!=="svelte-1m7r0r6"&&(s.textContent=r),o=z(Ee),a=E(Ee,"SELECT",{class:!0});var xe=F(a);for(let qe=0;qe<Ce.length;qe+=1)Ce[qe].l(xe);xe.forEach(S),l=z(Ee),u=E(Ee,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(u)!=="svelte-1c65pm4"&&(u.textContent=h),Ee.forEach(S),d=z(Me),g=E(Me,"DIV",{class:!0});var Re=F(g);for(let qe=0;qe<Ae.length;qe+=1)Ae[qe].l(Re);Re.forEach(S),v=z(Me),m=E(Me,"DIV",{class:!0});var Ye=F(m);_=E(Ye,"SPAN",{class:!0});var Fe=F(_);p=de(Fe,"钻孔: "),b=de(Fe,x),A=de(Fe," | 岩性: "),T=de(Fe,C),Fe.forEach(S),w=z(Ye),ye&&ye.l(Ye),Ye.forEach(S),Me.forEach(S),L=z(re),U=E(re,"DIV",{class:!0});var Le=F(U);y=E(Le,"ASIDE",{class:!0});var ke=F(y);K&&K.l(ke),$=z(ke),O=E(ke,"DIV",{class:!0}),F(O).forEach(S),j=z(ke),ee.l(ke),ke.forEach(S),te=z(Le),se=E(Le,"MAIN",{class:!0});var Z=F(se);le.l(Z),Z.forEach(S),Le.forEach(S),re.forEach(S),ce=z(Q),H&&H.l(Q),fe=z(Q),B=E(Q,"DIV",{class:!0});var Be=F(B);for(let qe=0;qe<J.length;qe+=1)J[qe].l(Be);Be.forEach(S),this.h()},h(){R(s,"class","logo svelte-f592h6"),R(a,"class","svelte-f592h6"),R(u,"class","btn-secondary btn-sm"),R(n,"class","header-left svelte-f592h6"),R(g,"class","header-center svelte-f592h6"),R(_,"class","info-text svelte-f592h6"),R(m,"class","header-right svelte-f592h6"),R(t,"class","app-header svelte-f592h6"),R(O,"class","divider svelte-f592h6"),R(y,"class","left-panel panel svelte-f592h6"),R(se,"class","main-content svelte-f592h6"),R(U,"class","app-body svelte-f592h6"),R(e,"class","app-layout svelte-f592h6"),R(B,"class","toast-container")},m(Q,re){ge(Q,e,re),f(e,t),f(t,n),f(n,s),f(n,o),f(n,a);for(let Me=0;Me<Ce.length;Me+=1)Ce[Me]&&Ce[Me].m(a,null);Tt(a,i[7]?i[7].id:""),f(n,l),f(n,u),f(t,d),f(t,g);for(let Me=0;Me<Ae.length;Me+=1)Ae[Me]&&Ae[Me].m(g,null);f(t,v),f(t,m),f(m,_),f(_,p),f(_,b),f(_,A),f(_,T),f(m,w),ye&&ye.m(m,null),f(e,L),f(e,U),f(U,y),~N&&ae[N].m(y,null),f(y,$),f(y,O),f(y,j),k[W].m(y,null),f(U,te),f(U,se),Te[ue].m(se,null),ge(Q,ce,re),H&&H.m(Q,re),ge(Q,fe,re),ge(Q,B,re);for(let Me=0;Me<J.length;Me+=1)J[Me]&&J[Me].m(B,null);D=!0,I||(be=[ze(a,"change",i[20]),ze(u,"click",i[21])],I=!0)},p(Q,re){if(re[0]&2){Se=et(Q[1]);let Re;for(Re=0;Re<Se.length;Re+=1){const Ye=uf(Q,Se,Re);Ce[Re]?Ce[Re].p(Ye,re):(Ce[Re]=ff(Ye),Ce[Re].c(),Ce[Re].m(a,null))}for(;Re<Ce.length;Re+=1)Ce[Re].d(1);Ce.length=Se.length}if((!D||re[0]&130&&c!==(c=Q[7]?Q[7].id:""))&&Tt(a,Q[7]?Q[7].id:""),re[0]&262208){q=et(Q[18]);let Re;for(Re=0;Re<q.length;Re+=1){const Ye=cf(Q,q,Re);Ae[Re]?Ae[Re].p(Ye,re):(Ae[Re]=hf(Ye),Ae[Re].c(),Ae[Re].m(g,null))}for(;Re<Ae.length;Re+=1)Ae[Re].d(1);Ae.length=q.length}(!D||re[0]&512)&&x!==(x=Q[9].length+"")&&Ve(b,x),(!D||re[0]&256)&&C!==(C=Q[8].length+"")&&Ve(T,C),Q[0].length>0?ye?ye.p(Q,re):(ye=df(Q),ye.c(),ye.m(m,null)):ye&&(ye.d(1),ye=null);let Me=N;N=ie(Q),N!==Me&&(K&&(Bs(),Bt(ae[Me],1,1,()=>{ae[Me]=null}),zs()),~N?(K=ae[N],K||(K=ae[N]=Ne[N](Q),K.c()),kt(K,1),K.m(y,$)):K=null);let Ee=W;W=P(Q),W!==Ee&&(Bs(),Bt(k[Ee],1,1,()=>{k[Ee]=null}),zs(),ee=k[W],ee||(ee=k[W]=_e[W](Q),ee.c()),kt(ee,1),ee.m(y,null));let xe=ue;ue=X(Q),ue!==xe&&(Bs(),Bt(Te[xe],1,1,()=>{Te[xe]=null}),zs(),le=Te[ue],le||(le=Te[ue]=ve[ue](Q),le.c()),kt(le,1),le.m(se,null)),Q[2]?H?H.p(Q,re):(H=Ef(Q),H.c(),H.m(fe.parentNode,fe)):H&&(H.d(1),H=null),re[0]&16384&&(Y=et(Q[14]),Bs(),J=ch(J,re,he,1,Q,Y,oe,B,lh,Mf,null,rf),zs())},i(Q){if(!D){kt(K),kt(ee),kt(le);for(let re=0;re<Y.length;re+=1)kt(J[re]);D=!0}},o(Q){Bt(K),Bt(ee),Bt(le);for(let re=0;re<J.length;re+=1)Bt(J[re]);D=!1},d(Q){Q&&(S(e),S(ce),S(fe),S(B)),Et(Ce,Q),Et(Ae,Q),ye&&ye.d(),~N&&ae[N].d(),k[W].d(),Te[ue].d(),H&&H.d(Q);for(let re=0;re<J.length;re+=1)J[re].d();I=!1,At(be)}}}function Z0(i,e,t){let n,s,r,o,a,c,l,u,h,d,g,v,m,_,p,x;Qe(i,us,oe=>t(0,n=oe)),Qe(i,Vs,oe=>t(5,s=oe)),Qe(i,Cs,oe=>t(33,r=oe)),Qe(i,Mr,oe=>t(34,o=oe)),Qe(i,Vr,oe=>t(6,a=oe)),Qe(i,Sr,oe=>t(35,c=oe)),Qe(i,Bn,oe=>t(7,l=oe)),Qe(i,Ls,oe=>t(36,u=oe)),Qe(i,Ps,oe=>t(37,h=oe)),Qe(i,ti,oe=>t(8,d=oe)),Qe(i,Gn,oe=>t(9,g=oe)),Qe(i,vr,oe=>t(10,v=oe)),Qe(i,br,oe=>t(11,m=oe)),Qe(i,ws,oe=>t(12,_=oe)),Qe(i,As,oe=>t(13,p=oe)),Qe(i,Is,oe=>t(14,x=oe));let b=[],A=!1,C="";Lr(async()=>{try{t(1,b=await ft.get("/projects")),b.length>0&&await T(b[0].id)}catch(oe){console.error(oe)}setInterval(()=>{w()},5e3)});async function T(oe){try{const D=await ft.get(`/projects/${oe}`);it(Bn,l=D,l);const[I,be,Se,Ce]=await Promise.all([ft.get(`/projects/${oe}/boreholes`),ft.get(`/projects/${oe}/lithology-types`),ft.get(`/projects/${oe}/profiles`),ft.get(`/projects/${oe}/modeling/runs`)]);it(Gn,g=I,g),it(ti,d=be,d),it(Ps,h=Se,h),it(Ls,u=Ce,u),await w(),await L()}catch(D){$e(`加载项目失败: ${D.message}`,"error")}}async function w(){if(l)try{const oe=await ft.getWaterLevelWarnings(l.id);it(us,n=oe,n)}catch(oe){console.warn("刷新预警失败:",oe)}}async function L(){if(l)try{const oe=await ft.getWaterLevelThresholds(l.id);it(Sr,c=oe,c)}catch(oe){console.warn("刷新阈值失败:",oe)}}function U(oe){it(Vr,a="waterlevel",a),it(Mr,o="history",o),it(Cs,r=oe.borehole_id,r),it(Vs,s=!1,s)}async function y(){if(C.trim())try{const oe=await ft.post("/projects",{name:C.trim()});t(1,b=[...b,oe]),t(2,A=!1),t(3,C=""),await T(oe.id),$e("项目创建成功","success")}catch(oe){$e(`创建失败: ${oe.message}`,"error")}}const N=[{id:"boreholes",label:"钻孔数据",icon:"⊕"},{id:"profiles",label:"剖面分析",icon:"☷"},{id:"modeling",label:"三维建模",icon:"◆"},{id:"waterlevel",label:"地下水位",icon:"◈"},{id:"attributes",label:"属性场",icon:"◇"},{id:"export",label:"成果导出",icon:"↓"}];let K;function $(oe){oh.call(this,i,oe)}const O=oe=>T(oe.target.value),j=()=>t(2,A=!0),W=oe=>it(Vr,a=oe.id,a),ee=()=>it(Vs,s=!s,s),te=()=>it(Vs,s=!1,s),se=oe=>U(oe),ue=oe=>U(oe),le=oe=>U(oe);function ce(){C=this.value,t(3,C)}const fe=oe=>oe.key==="Enter"&&y(),B=()=>t(2,A=!1),J=()=>t(2,A=!1);return i.$$.update=()=>{if(i.$$.dirty[0]&1){const oe={red:[],orange:[],blue:[]};n.forEach(D=>{oe[D.warning_level].push(D)}),t(4,K=oe)}},[n,b,A,C,K,s,a,l,d,g,v,m,_,p,x,T,U,y,N,$,O,j,W,ee,te,se,ue,le,ce,fe,B,J]}class J0 extends pn{constructor(e){super(),mn(this,e,Z0,K0,dn,{},null,[-1,-1])}}function Q0(i){let e,t;return e=new J0({}),{c(){En(e.$$.fragment)},l(n){xn(e.$$.fragment,n)},m(n,s){bn(e,n,s),t=!0},p:yt,i(n){t||(kt(e.$$.fragment,n),t=!0)},o(n){Bt(e.$$.fragment,n),t=!1},d(n){vn(e,n)}}}class i1 extends pn{constructor(e){super(),mn(this,e,null,Q0,dn,{})}}export{i1 as component,n1 as universal};
