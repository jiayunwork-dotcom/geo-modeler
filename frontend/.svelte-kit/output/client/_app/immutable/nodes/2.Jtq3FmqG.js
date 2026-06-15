import{r as wt,s as cn,n as Et,c as Ze,x as nt,p as sn,d as Iu,t as _o,e as hi,o as yr,y as gh}from"../chunks/DG1aO4bD.js";import{l as It,k as Ut,S as un,i as hn,d as w,s as Ke,a as _e,b as m,y as Ve,w as I,x as ge,c as T,e as z,z as Ie,g as X,f as Se,o as Pt,h as A,j,t as Te,A as Tt,B as Sr,C as Xe,D as ot,E as en,F as yt,G as tn,m as Us,n as Ns,q as mn,u as _n,v as gn,r as vn}from"../chunks/B7RjJRnq.js";import{w as bt}from"../chunks/AB1Lozu8.js";function tt(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function vh(i,e){Ut(i,1,1,()=>{e.delete(i.key)})}function xh(i,e,t,n,s,r,o,a,c,l,u,h){let d=i.length,g=r.length,v=d;const _={};for(;v--;)_[i[v].key]=v;const p=[],f=new Map,b=new Map,x=[];for(v=g;v--;){const C=h(s,r,v),D=t(C);let O=o.get(D);O?x.push(()=>O.p(C,e)):(O=l(D,C),O.c()),f.set(D,p[v]=O),D in _&&b.set(D,Math.abs(v-_[D]))}const R=new Set,S=new Set;function y(C){It(C,1),C.m(a,u),o.set(C.key,C),u=C.first,g--}for(;d&&g;){const C=p[g-1],D=i[d-1],O=C.key,M=D.key;C===D?(u=C.first,d--,g--):f.has(M)?!o.has(O)||R.has(O)?y(C):S.has(M)?d--:b.get(O)>b.get(M)?(S.add(O),y(C)):(R.add(M),d--):(c(D,o),d--)}for(;d--;){const C=i[d];f.has(C.key)||c(C,o)}for(;g;)y(p[g-1]);return wt(x),p}const bh=!1,Eh=!0,u0=Object.freeze(Object.defineProperty({__proto__:null,prerender:Eh,ssr:bh},Symbol.toStringTag,{value:"Module"})),On=bt(null),kn=bt([]),$n=bt([]),Ts=bt([]),As=bt([]),ws=bt(null),ur=bt(null),hr=bt({mode:"voxel",isosurfaceValue:0,colorMin:0,colorMax:100}),Cs=bt([]);function $e(i,e="info",t=4e3){const n=Date.now();Cs.update(s=>[...s,{id:n,message:i,type:e}]),t>0&&setTimeout(()=>{Cs.update(s=>s.filter(r=>r.id!==n))},t)}const lr=bt([]),Ji=bt({status:"idle",progress:0,runId:null}),$i=bt({}),Qi=bt({}),es=bt({enabled:!1,normal:[0,0,-1],position:[0,0,0]}),zo=bt(null),Vo=bt("boreholes"),Mn=bt(null),fr=bt(null),dr=bt(!1),Ho=bt(null),Go=bt(null),Ms=bt(null),ys=bt(null),Wo=bt(!1),Xo=bt(null),go=bt([]),jo=bt(null),Yn=bt({orthoImage:null,demImage:null,opacity:1,visible:!0}),Rs=bt([]),qo=bt([]),Yo=bt([]),Ko=bt([]),Ti=bt(null),ai=bt(!1),pr=bt(.6),mr=bt(null),Zo=bt({playing:!1,startDate:null,endDate:null,speed:7,currentDate:null,progress:0}),Jo=bt("data"),Mh="/api";async function Bt(i,e,t=null,n={}){const s=`${Mh}${e}`,r={};t&&!(t instanceof FormData)&&(r["Content-Type"]="application/json");const o=await fetch(s,{method:i,headers:r,body:t instanceof FormData?t:t?JSON.stringify(t):null,...n});if(o.status===204)return null;if(!o.ok){const c=o.headers.get("content-type");if(c&&c.includes("application/json")){const l=await o.json().catch(()=>({detail:o.statusText}));throw new Error(l.detail||`请求失败 (${o.status}): ${o.statusText}`)}throw new Error(`请求失败 (${o.status}): ${o.statusText}`)}if(n.raw)return o;const a=o.headers.get("content-type");return a&&a.includes("application/json")?o.json():o}const ht={get:(i,e)=>Bt("GET",i,null,e),post:(i,e,t)=>Bt("POST",i,e,t),put:(i,e,t)=>Bt("PUT",i,e,t),patch:(i,e,t)=>Bt("PATCH",i,e,t),delete:(i,e)=>Bt("DELETE",i,null,e),uploadCsv:(i,e)=>{const t=new FormData;return t.append("file",e),Bt("POST",`/projects/${i}/boreholes/import-csv`,t)},exportGltf:i=>Bt("GET",`/export/gltf/${i}`,null,{raw:!0}),exportProfilePng:i=>Bt("GET",`/export/profile/${i}/png`,null,{raw:!0}),exportProfileSvg:i=>Bt("GET",`/export/profile/${i}/svg`,null,{raw:!0}),exportStatsExcel:i=>Bt("GET",`/export/stats/${i}/excel`,null,{raw:!0}),exportReportPdf:i=>Bt("GET",`/export/report/${i}/pdf`,null,{raw:!0}),downloadBlob:async(i,e)=>{const n=await(await Bt("GET",i,null,{raw:!0})).blob(),s=URL.createObjectURL(n),r=document.createElement("a");r.href=s,r.download=e,r.click(),URL.revokeObjectURL(s)},getWaterLevels:(i,e)=>{const t=e?`?borehole_id=${e}`:"";return Bt("GET",`/projects/${i}/water-levels${t}`)},createWaterLevel:(i,e)=>Bt("POST",`/projects/${i}/water-levels`,e),deleteWaterLevel:(i,e)=>Bt("DELETE",`/projects/${i}/water-levels/${e}`),importWaterLevelCsv:(i,e)=>{const t=new FormData;return t.append("file",e),Bt("POST",`/projects/${i}/water-levels/import-csv`,t)},getWaterLevelStats:(i,e)=>Bt("POST",`/projects/${i}/water-levels/statistics`,e),getWaterLevelMKTest:(i,e)=>Bt("POST",`/projects/${i}/water-levels/mk-test`,e),getWaterLevelBoxplot:(i,e)=>Bt("POST",`/projects/${i}/water-levels/boxplot`,e),krigingWaterLevel:(i,e)=>Bt("POST",`/projects/${i}/water-levels/kriging`,e)};function $o(i,e,t){const n=i.slice();return n[41]=e[t],n[42]=e,n[43]=t,n}function Qo(i,e,t){const n=i.slice();return n[44]=e[t],n}function ea(i,e,t){const n=i.slice();return n[47]=e[t],n}function ta(i,e,t){const n=i.slice();return n[50]=e[t],n}function na(i,e,t){const n=i.slice();n[41]=e[t];const s=n[8].find(function(...o){return i[24](n[41],...o)});return n[53]=s,n}function ia(i,e,t){const n=i.slice();return n[53]=e[t],n[56]=e,n[57]=t,n}function sa(i){let e,t,n="岩性颜色映射",s,r,o,a=tt(i[8]),c=[];for(let l=0;l<a.length;l+=1)c[l]=ra(ia(i,a,l));return{c(){e=A("div"),t=A("h4"),t.textContent=n,s=j();for(let l=0;l<c.length;l+=1)c[l].c();r=j(),o=A("hr"),this.h()},l(l){e=T(l,"DIV",{class:!0});var u=z(e);t=T(u,"H4",{style:!0,"data-svelte-h":!0}),Ie(t)!=="svelte-i0dhp9"&&(t.textContent=n),s=X(u);for(let h=0;h<c.length;h+=1)c[h].l(u);u.forEach(w),r=X(l),o=T(l,"HR",{style:!0}),this.h()},h(){ge(t,"margin-bottom","8px"),ge(t,"font-size","13px"),I(e,"class","color-editor svelte-jbi2uy"),ge(o,"border-color","var(--border)"),ge(o,"margin","12px 0")},m(l,u){_e(l,e,u),m(e,t),m(e,s);for(let h=0;h<c.length;h+=1)c[h]&&c[h].m(e,null);_e(l,r,u),_e(l,o,u)},p(l,u){if(u[0]&33024){a=tt(l[8]);let h;for(h=0;h<a.length;h+=1){const d=ia(l,a,h);c[h]?c[h].p(d,u):(c[h]=ra(d),c[h].c(),c[h].m(e,null))}for(;h<c.length;h+=1)c[h].d(1);c.length=a.length}},d(l){l&&(w(e),w(r),w(o)),Tt(c,l)}}}function ra(i){let e,t,n,s,r=i[53].name+"",o,a,c,l;function u(){i[19].call(t,i[56],i[57])}function h(){return i[20](i[53])}return{c(){e=A("div"),t=A("input"),n=j(),s=A("span"),o=Te(r),a=j(),this.h()},l(d){e=T(d,"DIV",{class:!0});var g=z(e);t=T(g,"INPUT",{type:!0}),n=X(g),s=T(g,"SPAN",{});var v=z(s);o=Se(v,r),v.forEach(w),a=X(g),g.forEach(w),this.h()},h(){I(t,"type","color"),I(e,"class","color-row svelte-jbi2uy")},m(d,g){_e(d,e,g),m(e,t),Xe(t,i[53].color),m(e,n),m(e,s),m(s,o),m(e,a),c||(l=[Ve(t,"input",u),Ve(t,"change",h)],c=!0)},p(d,g){i=d,g[0]&256&&Xe(t,i[53].color),g[0]&256&&r!==(r=i[53].name+"")&&Ke(o,r)},d(d){d&&w(e),c=!1,wt(l)}}}function yh(i){let e,t=tt(i[9]),n=[];for(let s=0;s<t.length;s+=1)n[s]=aa(ta(i,t,s));return{c(){e=A("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=T(s,"DIV",{class:!0});var r=z(e);for(let o=0;o<n.length;o+=1)n[o].l(r);r.forEach(w),this.h()},h(){I(e,"class","borehole-list")},m(s,r){_e(s,e,r);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(e,null)},p(s,r){if(r[0]&23392){t=tt(s[9]);let o;for(o=0;o<t.length;o+=1){const a=ta(s,t,o);n[o]?n[o].p(a,r):(n[o]=aa(a),n[o].c(),n[o].m(e,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}},d(s){s&&w(e),Tt(n,s)}}}function Sh(i){let e,t='<p>暂无钻孔数据</p> <p style="font-size:12px;color:var(--text-muted);margin-top:4px;">点击&quot;导入CSV&quot;添加钻孔数据</p>';return{c(){e=A("div"),e.innerHTML=t,this.h()},l(n){e=T(n,"DIV",{class:!0,"data-svelte-h":!0}),Ie(e)!=="svelte-b2zuvh"&&(e.innerHTML=t),this.h()},h(){I(e,"class","empty-state svelte-jbi2uy")},m(n,s){_e(n,e,s)},p:Et,d(n){n&&w(e)}}}function oa(i){let e,t;return{c(){e=A("div"),this.h()},l(n){e=T(n,"DIV",{class:!0,style:!0,title:!0});var s=z(e);s.forEach(w),this.h()},h(){var n;I(e,"class","layer-chip svelte-jbi2uy"),ge(e,"background",((n=i[53])==null?void 0:n.color)||"#888"),ge(e,"flex",i[41].bottom_depth-i[41].top_depth),I(e,"title",t=i[41].lithology_name+": "+i[41].top_depth+"-"+i[41].bottom_depth+"m")},m(n,s){_e(n,e,s)},p(n,s){var r;s[0]&768&&ge(e,"background",((r=n[53])==null?void 0:r.color)||"#888"),s[0]&512&&ge(e,"flex",n[41].bottom_depth-n[41].top_depth),s[0]&512&&t!==(t=n[41].lithology_name+": "+n[41].top_depth+"-"+n[41].bottom_depth+"m")&&I(e,"title",t)},d(n){n&&w(e)}}}function aa(i){let e,t,n,s,r,o,a,c=i[50].hole_id+"",l,u,h,d,g="编辑",v,_,p="删除",f,b,x,R,S=i[50].longitude.toFixed(5)+"",y,C,D=i[50].latitude.toFixed(5)+"",O,M,P,H,Y=i[50].elevation.toFixed(2)+"",L,V,q,ue,se=i[50].layers.length+"",ae,ie,he,ee,ce=(i[5][i[50].id]||[]).length+"",F,Q,ve,U,G,oe,pe;function Ce(){return i[21](i[50])}function W(){return i[22](i[50])}function Le(){return i[23](i[50])}let xe=tt(i[50].layers),Re=[];for(let te=0;te<xe.length;te+=1)Re[te]=oa(na(i,xe,te));return{c(){e=A("div"),t=A("div"),n=A("label"),s=A("input"),o=j(),a=A("strong"),l=Te(c),u=j(),h=A("div"),d=A("button"),d.textContent=g,v=j(),_=A("button"),_.textContent=p,f=j(),b=A("div"),x=A("span"),R=Te("坐标: "),y=Te(S),C=Te(", "),O=Te(D),M=j(),P=A("span"),H=Te("高程: "),L=Te(Y),V=Te("m"),q=j(),ue=A("span"),ae=Te(se),ie=Te(" 层"),he=j(),ee=A("span"),F=Te(ce),Q=Te(" 条水位"),ve=j(),U=A("div");for(let te=0;te<Re.length;te+=1)Re[te].c();G=j(),this.h()},l(te){e=T(te,"DIV",{class:!0});var ne=z(e);t=T(ne,"DIV",{class:!0});var fe=z(t);n=T(fe,"LABEL",{class:!0});var N=z(n);s=T(N,"INPUT",{type:!0}),o=X(N),a=T(N,"STRONG",{});var E=z(a);l=Se(E,c),E.forEach(w),N.forEach(w),u=X(fe),h=T(fe,"DIV",{class:!0});var $=z(h);d=T($,"BUTTON",{class:!0,"data-svelte-h":!0}),Ie(d)!=="svelte-qjn1px"&&(d.textContent=g),v=X($),_=T($,"BUTTON",{class:!0,"data-svelte-h":!0}),Ie(_)!=="svelte-3c3ohz"&&(_.textContent=p),$.forEach(w),fe.forEach(w),f=X(ne),b=T(ne,"DIV",{class:!0});var re=z(b);x=T(re,"SPAN",{});var Z=z(x);R=Se(Z,"坐标: "),y=Se(Z,S),C=Se(Z,", "),O=Se(Z,D),Z.forEach(w),M=X(re),P=T(re,"SPAN",{});var le=z(P);H=Se(le,"高程: "),L=Se(le,Y),V=Se(le,"m"),le.forEach(w),q=X(re),ue=T(re,"SPAN",{});var J=z(ue);ae=Se(J,se),ie=Se(J," 层"),J.forEach(w),he=X(re),ee=T(re,"SPAN",{class:!0});var de=z(ee);F=Se(de,ce),Q=Se(de," 条水位"),de.forEach(w),re.forEach(w),ve=X(ne),U=T(ne,"DIV",{class:!0});var me=z(U);for(let Ee=0;Ee<Re.length;Ee+=1)Re[Ee].l(me);me.forEach(w),G=X(ne),ne.forEach(w),this.h()},h(){I(s,"type","checkbox"),s.checked=r=i[6].includes(i[50].id),I(n,"class","checkbox-label"),I(d,"class","btn-secondary btn-sm"),I(_,"class","btn-danger btn-sm"),I(h,"class","card-actions svelte-jbi2uy"),I(t,"class","card-header svelte-jbi2uy"),I(ee,"class","wl-count svelte-jbi2uy"),I(b,"class","card-info svelte-jbi2uy"),I(U,"class","layer-bar svelte-jbi2uy"),I(e,"class","borehole-card svelte-jbi2uy"),en(e,"selected",i[6].includes(i[50].id))},m(te,ne){_e(te,e,ne),m(e,t),m(t,n),m(n,s),m(n,o),m(n,a),m(a,l),m(t,u),m(t,h),m(h,d),m(h,v),m(h,_),m(e,f),m(e,b),m(b,x),m(x,R),m(x,y),m(x,C),m(x,O),m(b,M),m(b,P),m(P,H),m(P,L),m(P,V),m(b,q),m(b,ue),m(ue,ae),m(ue,ie),m(b,he),m(b,ee),m(ee,F),m(ee,Q),m(e,ve),m(e,U);for(let fe=0;fe<Re.length;fe+=1)Re[fe]&&Re[fe].m(U,null);m(e,G),oe||(pe=[Ve(s,"change",Ce),Ve(d,"click",W),Ve(_,"click",Le)],oe=!0)},p(te,ne){if(i=te,ne[0]&576&&r!==(r=i[6].includes(i[50].id))&&(s.checked=r),ne[0]&512&&c!==(c=i[50].hole_id+"")&&Ke(l,c),ne[0]&512&&S!==(S=i[50].longitude.toFixed(5)+"")&&Ke(y,S),ne[0]&512&&D!==(D=i[50].latitude.toFixed(5)+"")&&Ke(O,D),ne[0]&512&&Y!==(Y=i[50].elevation.toFixed(2)+"")&&Ke(L,Y),ne[0]&512&&se!==(se=i[50].layers.length+"")&&Ke(ae,se),ne[0]&544&&ce!==(ce=(i[5][i[50].id]||[]).length+"")&&Ke(F,ce),ne[0]&768){xe=tt(i[50].layers);let fe;for(fe=0;fe<xe.length;fe+=1){const N=na(i,xe,fe);Re[fe]?Re[fe].p(N,ne):(Re[fe]=oa(N),Re[fe].c(),Re[fe].m(U,null))}for(;fe<Re.length;fe+=1)Re[fe].d(1);Re.length=xe.length}ne[0]&576&&en(e,"selected",i[6].includes(i[50].id))},d(te){te&&w(e),Tt(Re,te),oe=!1,wt(pe)}}}function la(i){let e,t,n,s="导入钻孔CSV数据",r,o,a=`CSV字段: hole_id/孔号, longitude/经度, latitude/纬度, elevation/高程,
                layer_no/层号, top_depth/层顶深度, bottom_depth/层底深度, lithology/岩性,
                spt_n/标贯N值, water_content/含水量, compression_modulus/压缩模量`,c,l,u,h,d,g,v,_="关闭",p,f,b=i[2]?"导入中...":"开始导入",x,R,S,y,C=i[3]&&ca(i);return{c(){e=A("div"),t=A("div"),n=A("h3"),n.textContent=s,r=j(),o=A("p"),o.textContent=a,c=j(),l=A("div"),u=A("input"),h=j(),C&&C.c(),d=j(),g=A("div"),v=A("button"),v.textContent=_,p=j(),f=A("button"),x=Te(b),this.h()},l(D){e=T(D,"DIV",{class:!0});var O=z(e);t=T(O,"DIV",{class:!0});var M=z(t);n=T(M,"H3",{"data-svelte-h":!0}),Ie(n)!=="svelte-rl92uc"&&(n.textContent=s),r=X(M),o=T(M,"P",{style:!0,"data-svelte-h":!0}),Ie(o)!=="svelte-p50xxs"&&(o.textContent=a),c=X(M),l=T(M,"DIV",{class:!0});var P=z(l);u=T(P,"INPUT",{type:!0,accept:!0}),P.forEach(w),h=X(M),C&&C.l(M),d=X(M),g=T(M,"DIV",{class:!0});var H=z(g);v=T(H,"BUTTON",{class:!0,"data-svelte-h":!0}),Ie(v)!=="svelte-1wvy2wc"&&(v.textContent=_),p=X(H),f=T(H,"BUTTON",{class:!0});var Y=z(f);x=Se(Y,b),Y.forEach(w),H.forEach(w),M.forEach(w),O.forEach(w),this.h()},h(){ge(o,"font-size","12px"),ge(o,"color","var(--text-secondary)"),ge(o,"margin-bottom","12px"),I(u,"type","file"),I(u,"accept",".csv"),I(l,"class","form-group"),I(v,"class","btn-secondary"),I(f,"class","btn-primary"),f.disabled=R=!i[1]||i[2],I(g,"class","modal-actions"),I(t,"class","modal"),I(e,"class","modal-overlay")},m(D,O){_e(D,e,O),m(e,t),m(t,n),m(t,r),m(t,o),m(t,c),m(t,l),m(l,u),m(t,h),C&&C.m(t,null),m(t,d),m(t,g),m(g,v),m(g,p),m(g,f),m(f,x),S||(y=[Ve(u,"change",i[25]),Ve(v,"click",i[26]),Ve(f,"click",i[10]),Ve(e,"click",Sr(i[27]))],S=!0)},p(D,O){D[3]?C?C.p(D,O):(C=ca(D),C.c(),C.m(t,d)):C&&(C.d(1),C=null),O[0]&4&&b!==(b=D[2]?"导入中...":"开始导入")&&Ke(x,b),O[0]&6&&R!==(R=!D[1]||D[2])&&(f.disabled=R)},d(D){D&&w(e),C&&C.d(),S=!1,wt(y)}}}function ca(i){let e,t,n,s=i[3].imported+"",r,o,a,c,l=i[3].errors.length>0&&ua(i),u=i[3].warnings.length>0&&fa(i);return{c(){e=A("div"),t=A("p"),n=Te("成功导入: "),r=Te(s),o=Te(" 个钻孔"),a=j(),l&&l.c(),c=j(),u&&u.c(),this.h()},l(h){e=T(h,"DIV",{class:!0});var d=z(e);t=T(d,"P",{class:!0});var g=z(t);n=Se(g,"成功导入: "),r=Se(g,s),o=Se(g," 个钻孔"),g.forEach(w),a=X(d),l&&l.l(d),c=X(d),u&&u.l(d),d.forEach(w),this.h()},h(){I(t,"class","badge badge-success svelte-jbi2uy"),I(e,"class","import-result svelte-jbi2uy")},m(h,d){_e(h,e,d),m(e,t),m(t,n),m(t,r),m(t,o),m(e,a),l&&l.m(e,null),m(e,c),u&&u.m(e,null)},p(h,d){d[0]&8&&s!==(s=h[3].imported+"")&&Ke(r,s),h[3].errors.length>0?l?l.p(h,d):(l=ua(h),l.c(),l.m(e,c)):l&&(l.d(1),l=null),h[3].warnings.length>0?u?u.p(h,d):(u=fa(h),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},d(h){h&&w(e),l&&l.d(),u&&u.d()}}}function ua(i){let e,t=tt(i[3].errors),n=[];for(let s=0;s<t.length;s+=1)n[s]=ha(ea(i,t,s));return{c(){e=A("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=T(s,"DIV",{class:!0});var r=z(e);for(let o=0;o<n.length;o+=1)n[o].l(r);r.forEach(w),this.h()},h(){I(e,"class","errors")},m(s,r){_e(s,e,r);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(e,null)},p(s,r){if(r[0]&8){t=tt(s[3].errors);let o;for(o=0;o<t.length;o+=1){const a=ea(s,t,o);n[o]?n[o].p(a,r):(n[o]=ha(a),n[o].c(),n[o].m(e,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}},d(s){s&&w(e),Tt(n,s)}}}function ha(i){let e,t=i[47]+"",n;return{c(){e=A("p"),n=Te(t),this.h()},l(s){e=T(s,"P",{class:!0});var r=z(e);n=Se(r,t),r.forEach(w),this.h()},h(){I(e,"class","badge badge-danger svelte-jbi2uy")},m(s,r){_e(s,e,r),m(e,n)},p(s,r){r[0]&8&&t!==(t=s[47]+"")&&Ke(n,t)},d(s){s&&w(e)}}}function fa(i){let e,t=tt(i[3].warnings),n=[];for(let s=0;s<t.length;s+=1)n[s]=da(Qo(i,t,s));return{c(){e=A("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=T(s,"DIV",{class:!0});var r=z(e);for(let o=0;o<n.length;o+=1)n[o].l(r);r.forEach(w),this.h()},h(){I(e,"class","warnings")},m(s,r){_e(s,e,r);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(e,null)},p(s,r){if(r[0]&8){t=tt(s[3].warnings);let o;for(o=0;o<t.length;o+=1){const a=Qo(s,t,o);n[o]?n[o].p(a,r):(n[o]=da(a),n[o].c(),n[o].m(e,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}},d(s){s&&w(e),Tt(n,s)}}}function da(i){let e,t=i[44]+"",n;return{c(){e=A("p"),n=Te(t),this.h()},l(s){e=T(s,"P",{class:!0});var r=z(e);n=Se(r,t),r.forEach(w),this.h()},h(){I(e,"class","badge badge-warning svelte-jbi2uy")},m(s,r){_e(s,e,r),m(e,n)},p(s,r){r[0]&8&&t!==(t=s[44]+"")&&Ke(n,t)},d(s){s&&w(e)}}}function pa(i){let e,t,n,s,r=i[7].hole_id+"",o,a,c,l,u,h="孔号",d,g,v,_,p,f="高程(m)",b,x,R,S,y,C,D="经度",O,M,P,H,Y,L="纬度",V,q,ue,se,ae="分层信息",ie,he,ee,ce,F="<tr><th>层号</th> <th>层顶(m)</th> <th>层底(m)</th> <th>岩性</th> <th>标贯N</th></tr>",Q,ve,U,G,oe,pe="取消",Ce,W,Le="保存",xe,Re,te=tt(i[7].layers),ne=[];for(let fe=0;fe<te.length;fe+=1)ne[fe]=ma($o(i,te,fe));return{c(){e=A("div"),t=A("div"),n=A("h3"),s=Te("编辑钻孔 - "),o=Te(r),a=j(),c=A("div"),l=A("div"),u=A("label"),u.textContent=h,d=j(),g=A("input"),v=j(),_=A("div"),p=A("label"),p.textContent=f,b=j(),x=A("input"),R=j(),S=A("div"),y=A("div"),C=A("label"),C.textContent=D,O=j(),M=A("input"),P=j(),H=A("div"),Y=A("label"),Y.textContent=L,V=j(),q=A("input"),ue=j(),se=A("h4"),se.textContent=ae,ie=j(),he=A("div"),ee=A("table"),ce=A("thead"),ce.innerHTML=F,Q=j(),ve=A("tbody");for(let fe=0;fe<ne.length;fe+=1)ne[fe].c();U=j(),G=A("div"),oe=A("button"),oe.textContent=pe,Ce=j(),W=A("button"),W.textContent=Le,this.h()},l(fe){e=T(fe,"DIV",{class:!0});var N=z(e);t=T(N,"DIV",{class:!0,style:!0});var E=z(t);n=T(E,"H3",{});var $=z(n);s=Se($,"编辑钻孔 - "),o=Se($,r),$.forEach(w),a=X(E),c=T(E,"DIV",{class:!0,style:!0});var re=z(c);l=T(re,"DIV",{class:!0});var Z=z(l);u=T(Z,"LABEL",{"data-svelte-h":!0}),Ie(u)!=="svelte-natzrr"&&(u.textContent=h),d=X(Z),g=T(Z,"INPUT",{type:!0}),Z.forEach(w),v=X(re),_=T(re,"DIV",{class:!0});var le=z(_);p=T(le,"LABEL",{"data-svelte-h":!0}),Ie(p)!=="svelte-1xtfx5p"&&(p.textContent=f),b=X(le),x=T(le,"INPUT",{type:!0,step:!0}),le.forEach(w),re.forEach(w),R=X(E),S=T(E,"DIV",{class:!0,style:!0});var J=z(S);y=T(J,"DIV",{class:!0});var de=z(y);C=T(de,"LABEL",{"data-svelte-h":!0}),Ie(C)!=="svelte-ndgehb"&&(C.textContent=D),O=X(de),M=T(de,"INPUT",{type:!0,step:!0}),de.forEach(w),P=X(J),H=T(J,"DIV",{class:!0});var me=z(H);Y=T(me,"LABEL",{"data-svelte-h":!0}),Ie(Y)!=="svelte-h6t6m2"&&(Y.textContent=L),V=X(me),q=T(me,"INPUT",{type:!0,step:!0}),me.forEach(w),J.forEach(w),ue=X(E),se=T(E,"H4",{style:!0,"data-svelte-h":!0}),Ie(se)!=="svelte-ltk5jk"&&(se.textContent=ae),ie=X(E),he=T(E,"DIV",{class:!0});var Ee=z(he);ee=T(Ee,"TABLE",{});var Oe=z(ee);ce=T(Oe,"THEAD",{"data-svelte-h":!0}),Ie(ce)!=="svelte-qllypy"&&(ce.innerHTML=F),Q=X(Oe),ve=T(Oe,"TBODY",{});var be=z(ve);for(let Be=0;Be<ne.length;Be+=1)ne[Be].l(be);be.forEach(w),Oe.forEach(w),Ee.forEach(w),U=X(E),G=T(E,"DIV",{class:!0});var ye=z(G);oe=T(ye,"BUTTON",{class:!0,"data-svelte-h":!0}),Ie(oe)!=="svelte-1xgwxe6"&&(oe.textContent=pe),Ce=X(ye),W=T(ye,"BUTTON",{class:!0,"data-svelte-h":!0}),Ie(W)!=="svelte-1qz0hu8"&&(W.textContent=Le),ye.forEach(w),E.forEach(w),N.forEach(w),this.h()},h(){I(g,"type","text"),I(l,"class","form-group"),I(x,"type","number"),I(x,"step","0.01"),I(_,"class","form-group"),I(c,"class","form-row"),ge(c,"margin-bottom","12px"),I(M,"type","number"),I(M,"step","0.000001"),I(y,"class","form-group"),I(q,"type","number"),I(q,"step","0.000001"),I(H,"class","form-group"),I(S,"class","form-row"),ge(S,"margin-bottom","12px"),ge(se,"margin","12px 0 8px"),ge(se,"font-size","13px"),I(he,"class","layers-table svelte-jbi2uy"),I(oe,"class","btn-secondary"),I(W,"class","btn-primary"),I(G,"class","modal-actions"),I(t,"class","modal"),ge(t,"min-width","600px"),I(e,"class","modal-overlay")},m(fe,N){_e(fe,e,N),m(e,t),m(t,n),m(n,s),m(n,o),m(t,a),m(t,c),m(c,l),m(l,u),m(l,d),m(l,g),Xe(g,i[7].hole_id),m(c,v),m(c,_),m(_,p),m(_,b),m(_,x),Xe(x,i[7].elevation),m(t,R),m(t,S),m(S,y),m(y,C),m(y,O),m(y,M),Xe(M,i[7].longitude),m(S,P),m(S,H),m(H,Y),m(H,V),m(H,q),Xe(q,i[7].latitude),m(t,ue),m(t,se),m(t,ie),m(t,he),m(he,ee),m(ee,ce),m(ee,Q),m(ee,ve);for(let E=0;E<ne.length;E+=1)ne[E]&&ne[E].m(ve,null);m(t,U),m(t,G),m(G,oe),m(G,Ce),m(G,W),xe||(Re=[Ve(g,"input",i[28]),Ve(x,"input",i[29]),Ve(M,"input",i[30]),Ve(q,"input",i[31]),Ve(oe,"click",i[36]),Ve(W,"click",i[13]),Ve(e,"click",Sr(i[37]))],xe=!0)},p(fe,N){if(N[0]&128&&r!==(r=fe[7].hole_id+"")&&Ke(o,r),N[0]&128&&g.value!==fe[7].hole_id&&Xe(g,fe[7].hole_id),N[0]&128&&ot(x.value)!==fe[7].elevation&&Xe(x,fe[7].elevation),N[0]&128&&ot(M.value)!==fe[7].longitude&&Xe(M,fe[7].longitude),N[0]&128&&ot(q.value)!==fe[7].latitude&&Xe(q,fe[7].latitude),N[0]&128){te=tt(fe[7].layers);let E;for(E=0;E<te.length;E+=1){const $=$o(fe,te,E);ne[E]?ne[E].p($,N):(ne[E]=ma($),ne[E].c(),ne[E].m(ve,null))}for(;E<ne.length;E+=1)ne[E].d(1);ne.length=te.length}},d(fe){fe&&w(e),Tt(ne,fe),xe=!1,wt(Re)}}}function ma(i){let e,t,n=i[41].layer_no+"",s,r,o,a,c,l,u,h,d,g,v,_,p,f,b,x;function R(){i[32].call(a,i[42],i[43])}function S(){i[33].call(u,i[42],i[43])}function y(){i[34].call(g,i[42],i[43])}function C(){i[35].call(p,i[42],i[43])}return{c(){e=A("tr"),t=A("td"),s=Te(n),r=j(),o=A("td"),a=A("input"),c=j(),l=A("td"),u=A("input"),h=j(),d=A("td"),g=A("input"),v=j(),_=A("td"),p=A("input"),f=j(),this.h()},l(D){e=T(D,"TR",{});var O=z(e);t=T(O,"TD",{});var M=z(t);s=Se(M,n),M.forEach(w),r=X(O),o=T(O,"TD",{});var P=z(o);a=T(P,"INPUT",{type:!0,step:!0,style:!0,class:!0}),P.forEach(w),c=X(O),l=T(O,"TD",{});var H=z(l);u=T(H,"INPUT",{type:!0,step:!0,style:!0,class:!0}),H.forEach(w),h=X(O),d=T(O,"TD",{});var Y=z(d);g=T(Y,"INPUT",{type:!0,style:!0,class:!0}),Y.forEach(w),v=X(O),_=T(O,"TD",{});var L=z(_);p=T(L,"INPUT",{type:!0,step:!0,style:!0,class:!0}),L.forEach(w),f=X(O),O.forEach(w),this.h()},h(){I(a,"type","number"),I(a,"step","0.1"),ge(a,"width","70px"),I(a,"class","svelte-jbi2uy"),I(u,"type","number"),I(u,"step","0.1"),ge(u,"width","70px"),I(u,"class","svelte-jbi2uy"),I(g,"type","text"),ge(g,"width","100px"),I(g,"class","svelte-jbi2uy"),I(p,"type","number"),I(p,"step","0.1"),ge(p,"width","60px"),I(p,"class","svelte-jbi2uy")},m(D,O){_e(D,e,O),m(e,t),m(t,s),m(e,r),m(e,o),m(o,a),Xe(a,i[41].top_depth),m(e,c),m(e,l),m(l,u),Xe(u,i[41].bottom_depth),m(e,h),m(e,d),m(d,g),Xe(g,i[41].lithology_name),m(e,v),m(e,_),m(_,p),Xe(p,i[41].spt_n),m(e,f),b||(x=[Ve(a,"input",R),Ve(u,"input",S),Ve(g,"input",y),Ve(p,"input",C)],b=!0)},p(D,O){i=D,O[0]&128&&n!==(n=i[41].layer_no+"")&&Ke(s,n),O[0]&128&&ot(a.value)!==i[41].top_depth&&Xe(a,i[41].top_depth),O[0]&128&&ot(u.value)!==i[41].bottom_depth&&Xe(u,i[41].bottom_depth),O[0]&128&&g.value!==i[41].lithology_name&&Xe(g,i[41].lithology_name),O[0]&128&&ot(p.value)!==i[41].spt_n&&Xe(p,i[41].spt_n)},d(D){D&&w(e),b=!1,wt(x)}}}function Th(i){let e,t,n="钻孔数据管理",s,r,o,a="导入CSV",c,l,u=i[4]?"隐藏":"颜色",h,d,g,v,_,p,f,b,x,R=i[4]&&sa(i);function S(M,P){return M[9].length===0?Sh:yh}let y=S(i),C=y(i),D=i[0]&&la(i),O=i[7]&&pa(i);return{c(){e=A("div"),t=A("h3"),t.textContent=n,s=j(),r=A("div"),o=A("button"),o.textContent=a,c=j(),l=A("button"),h=Te(u),d=j(),g=A("div"),R&&R.c(),v=j(),C.c(),_=j(),D&&D.c(),p=j(),O&&O.c(),f=Pt(),this.h()},l(M){e=T(M,"DIV",{class:!0});var P=z(e);t=T(P,"H3",{"data-svelte-h":!0}),Ie(t)!=="svelte-1xeck8m"&&(t.textContent=n),s=X(P),r=T(P,"DIV",{style:!0});var H=z(r);o=T(H,"BUTTON",{class:!0,"data-svelte-h":!0}),Ie(o)!=="svelte-vemyzj"&&(o.textContent=a),c=X(H),l=T(H,"BUTTON",{class:!0});var Y=z(l);h=Se(Y,u),Y.forEach(w),H.forEach(w),P.forEach(w),d=X(M),g=T(M,"DIV",{class:!0});var L=z(g);R&&R.l(L),v=X(L),C.l(L),L.forEach(w),_=X(M),D&&D.l(M),p=X(M),O&&O.l(M),f=Pt(),this.h()},h(){I(o,"class","btn-primary btn-sm"),I(l,"class","btn-secondary btn-sm"),ge(r,"display","flex"),ge(r,"gap","6px"),I(e,"class","panel-header"),I(g,"class","panel-body scrollable")},m(M,P){_e(M,e,P),m(e,t),m(e,s),m(e,r),m(r,o),m(r,c),m(r,l),m(l,h),_e(M,d,P),_e(M,g,P),R&&R.m(g,null),m(g,v),C.m(g,null),_e(M,_,P),D&&D.m(M,P),_e(M,p,P),O&&O.m(M,P),_e(M,f,P),b||(x=[Ve(o,"click",i[17]),Ve(l,"click",i[18])],b=!0)},p(M,P){P[0]&16&&u!==(u=M[4]?"隐藏":"颜色")&&Ke(h,u),M[4]?R?R.p(M,P):(R=sa(M),R.c(),R.m(g,v)):R&&(R.d(1),R=null),y===(y=S(M))&&C?C.p(M,P):(C.d(1),C=y(M),C&&(C.c(),C.m(g,null))),M[0]?D?D.p(M,P):(D=la(M),D.c(),D.m(p.parentNode,p)):D&&(D.d(1),D=null),M[7]?O?O.p(M,P):(O=pa(M),O.c(),O.m(f.parentNode,f)):O&&(O.d(1),O=null)},i:Et,o:Et,d(M){M&&(w(e),w(d),w(g),w(_),w(p),w(f)),R&&R.d(),C.d(),D&&D.d(M),O&&O.d(M),b=!1,wt(x)}}}function Ah(i,e,t){let n,s,r,o,a,c;Ze(i,On,U=>t(38,n=U)),Ze(i,lr,U=>t(6,s=U)),Ze(i,Mn,U=>t(7,r=U)),Ze(i,Rs,U=>t(16,o=U)),Ze(i,$n,U=>t(8,a=U)),Ze(i,kn,U=>t(9,c=U));let l=!1,u=null,h=!1,d=null,g=!1,v={};async function _(){if(n)try{nt(kn,c=await ht.get(`/projects/${n.id}/boreholes`),c),nt($n,a=await ht.get(`/projects/${n.id}/lithology-types`),a);try{nt(Rs,o=await ht.getWaterLevels(n.id),o)}catch{}}catch(U){$e(`刷新失败: ${U.message}`,"error")}}async function p(){if(!(!u||!n)){t(2,h=!0);try{const U=await ht.uploadCsv(n.id,u);t(3,d=U),$e(`成功导入 ${U.imported} 个钻孔`,"success"),U.errors.length>0&&$e(`有 ${U.errors.length} 个错误`,"warning"),U.warnings.length>0&&U.warnings.forEach(G=>$e(G,"warning")),await _()}catch(U){$e(`导入失败: ${U.message}`,"error")}finally{t(2,h=!1)}}}async function f(U){if(confirm("确定删除此钻孔？"))try{await ht.delete(`/projects/${n.id}/boreholes/${U}`),$e("钻孔已删除","info"),await _()}catch(G){$e(`删除失败: ${G.message}`,"error")}}function b(U){nt(Mn,r=JSON.parse(JSON.stringify(U)),r)}async function x(){if(r)try{await ht.put(`/projects/${n.id}/boreholes/${r.id}`,r),$e("钻孔已更新","success"),nt(Mn,r=null,r),await _()}catch(U){$e(`更新失败: ${U.message}`,"error")}}function R(U){s.includes(U)?nt(lr,s=s.filter(G=>G!==U),s):nt(lr,s=[...s,U],s)}async function S(U){try{await ht.put(`/projects/${n.id}/lithology-types/${U.id}`,{color:U.color,layer_order:U.layer_order}),$e("颜色已更新","success")}catch(G){$e(`颜色更新失败: ${G.message}`,"error")}}const y=()=>t(0,l=!0),C=()=>t(4,g=!g);function D(U,G){U[G].color=this.value,$n.set(a)}const O=U=>S(U),M=U=>R(U.id),P=U=>b(U),H=U=>f(U.id),Y=(U,G)=>G.name===U.lithology_name,L=U=>t(1,u=U.target.files[0]),V=()=>{t(0,l=!1),t(3,d=null)},q=()=>{t(0,l=!1),t(3,d=null)};function ue(){r.hole_id=this.value,Mn.set(r)}function se(){r.elevation=ot(this.value),Mn.set(r)}function ae(){r.longitude=ot(this.value),Mn.set(r)}function ie(){r.latitude=ot(this.value),Mn.set(r)}function he(U,G){U[G].top_depth=ot(this.value),Mn.set(r)}function ee(U,G){U[G].bottom_depth=ot(this.value),Mn.set(r)}function ce(U,G){U[G].lithology_name=this.value,Mn.set(r)}function F(U,G){U[G].spt_n=ot(this.value),Mn.set(r)}const Q=()=>nt(Mn,r=null,r),ve=()=>nt(Mn,r=null,r);return i.$$.update=()=>{if(i.$$.dirty[0]&65536){const U={};o.forEach(G=>{U[G.borehole_id]||(U[G.borehole_id]=[]),U[G.borehole_id].push(G)}),t(5,v=U)}},[l,u,h,d,g,v,s,r,a,c,p,f,b,x,R,S,o,y,C,D,O,M,P,H,Y,L,V,q,ue,se,ae,ie,he,ee,ce,F,Q,ve]}class wh extends un{constructor(e){super(),hn(this,e,Ah,Th,cn,{},null,[-1,-1])}}function _a(i,e,t){const n=i.slice();return n[40]=e[t],n}function ga(i,e,t){const n=i.slice();return n[43]=e[t],n[45]=t,n}function va(i,e,t){const n=i.slice();return n[46]=e[t],n}function xa(i,e,t){const n=i.slice();return n[46]=e[t],n}function ba(i,e,t){const n=i.slice();return n[46]=e[t],n}function Ea(i,e,t){const n=i.slice();return n[53]=e[t],n}function Ma(i){let e,t=i[53].hole_id+"",n;return{c(){e=A("span"),n=Te(t),this.h()},l(s){e=T(s,"SPAN",{class:!0});var r=z(e);n=Se(r,t),r.forEach(w),this.h()},h(){I(e,"class","badge badge-info")},m(s,r){_e(s,e,r),m(e,n)},p(s,r){r[0]&6144&&t!==(t=s[53].hole_id+"")&&Ke(n,t)},d(s){s&&w(e)}}}function ya(i){let e,t="请在钻孔管理中选择2个以上钻孔";return{c(){e=A("span"),e.textContent=t,this.h()},l(n){e=T(n,"SPAN",{style:!0,"data-svelte-h":!0}),Ie(e)!=="svelte-1k8zcgx"&&(e.textContent=t),this.h()},h(){ge(e,"font-size","11px"),ge(e,"color","var(--text-muted)")},m(n,s){_e(n,e,s)},d(n){n&&w(e)}}}function Sa(i){let e,t,n="剖面列表",s,r=tt(i[10]),o=[];for(let a=0;a<r.length;a+=1)o[a]=Ta(ba(i,r,a));return{c(){e=A("div"),t=A("h4"),t.textContent=n,s=j();for(let a=0;a<o.length;a+=1)o[a].c();this.h()},l(a){e=T(a,"DIV",{class:!0});var c=z(e);t=T(c,"H4",{style:!0,"data-svelte-h":!0}),Ie(t)!=="svelte-dgmf3y"&&(t.textContent=n),s=X(c);for(let l=0;l<o.length;l+=1)o[l].l(c);c.forEach(w),this.h()},h(){ge(t,"font-size","13px"),ge(t,"margin-bottom","8px"),I(e,"class","profile-list")},m(a,c){_e(a,e,c),m(e,t),m(e,s);for(let l=0;l<o.length;l+=1)o[l]&&o[l].m(e,null)},p(a,c){if(c[0]&33824){r=tt(a[10]);let l;for(l=0;l<r.length;l+=1){const u=ba(a,r,l);o[l]?o[l].p(u,c):(o[l]=Ta(u),o[l].c(),o[l].m(e,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=r.length}},d(a){a&&w(e),Tt(o,a)}}}function Ta(i){let e,t,n=i[46].name+"",s,r,o,a=i[46].interpolation_method+"",c,l,u,h;function d(){return i[24](i[46])}return{c(){e=A("div"),t=A("span"),s=Te(n),r=j(),o=A("span"),c=Te(a),l=j(),this.h()},l(g){e=T(g,"DIV",{class:!0});var v=z(e);t=T(v,"SPAN",{});var _=z(t);s=Se(_,n),_.forEach(w),r=X(v),o=T(v,"SPAN",{class:!0});var p=z(o);c=Se(p,a),p.forEach(w),l=X(v),v.forEach(w),this.h()},h(){I(o,"class","badge badge-info"),I(e,"class","profile-item svelte-1h3xo7h"),en(e,"active",i[5]===i[46].id)},m(g,v){_e(g,e,v),m(e,t),m(t,s),m(e,r),m(e,o),m(o,c),m(e,l),u||(h=Ve(e,"click",d),u=!0)},p(g,v){i=g,v[0]&1024&&n!==(n=i[46].name+"")&&Ke(s,n),v[0]&1024&&a!==(a=i[46].interpolation_method+"")&&Ke(c,a),v[0]&1056&&en(e,"active",i[5]===i[46].id)},d(g){g&&w(e),u=!1,h()}}}function Aa(i){let e,t,n="左剖面",s,r,o,a="选择剖面",c,l,u,h="右剖面",d,g,v,_="选择剖面",p,f,b=tt(i[10]),x=[];for(let y=0;y<b.length;y+=1)x[y]=wa(xa(i,b,y));let R=tt(i[10]),S=[];for(let y=0;y<R.length;y+=1)S[y]=Ca(va(i,R,y));return{c(){e=A("div"),t=A("label"),t.textContent=n,s=j(),r=A("select"),o=A("option"),o.textContent=a;for(let y=0;y<x.length;y+=1)x[y].c();c=j(),l=A("div"),u=A("label"),u.textContent=h,d=j(),g=A("select"),v=A("option"),v.textContent=_;for(let y=0;y<S.length;y+=1)S[y].c();this.h()},l(y){e=T(y,"DIV",{class:!0,style:!0});var C=z(e);t=T(C,"LABEL",{"data-svelte-h":!0}),Ie(t)!=="svelte-93im8q"&&(t.textContent=n),s=X(C),r=T(C,"SELECT",{});var D=z(r);o=T(D,"OPTION",{"data-svelte-h":!0}),Ie(o)!=="svelte-l2e5hj"&&(o.textContent=a);for(let P=0;P<x.length;P+=1)x[P].l(D);D.forEach(w),C.forEach(w),c=X(y),l=T(y,"DIV",{class:!0});var O=z(l);u=T(O,"LABEL",{"data-svelte-h":!0}),Ie(u)!=="svelte-1soi0kp"&&(u.textContent=h),d=X(O),g=T(O,"SELECT",{});var M=z(g);v=T(M,"OPTION",{"data-svelte-h":!0}),Ie(v)!=="svelte-l2e5hj"&&(v.textContent=_);for(let P=0;P<S.length;P+=1)S[P].l(M);M.forEach(w),O.forEach(w),this.h()},h(){o.__value=null,Xe(o,o.__value),i[2]===void 0&&sn(()=>i[25].call(r)),I(e,"class","form-group"),ge(e,"margin-top","8px"),v.__value=null,Xe(v,v.__value),i[1]===void 0&&sn(()=>i[26].call(g)),I(l,"class","form-group")},m(y,C){_e(y,e,C),m(e,t),m(e,s),m(e,r),m(r,o);for(let D=0;D<x.length;D+=1)x[D]&&x[D].m(r,null);yt(r,i[2],!0),_e(y,c,C),_e(y,l,C),m(l,u),m(l,d),m(l,g),m(g,v);for(let D=0;D<S.length;D+=1)S[D]&&S[D].m(g,null);yt(g,i[1],!0),p||(f=[Ve(r,"change",i[25]),Ve(g,"change",i[26])],p=!0)},p(y,C){if(C[0]&1024){b=tt(y[10]);let D;for(D=0;D<b.length;D+=1){const O=xa(y,b,D);x[D]?x[D].p(O,C):(x[D]=wa(O),x[D].c(),x[D].m(r,null))}for(;D<x.length;D+=1)x[D].d(1);x.length=b.length}if(C[0]&1028&&yt(r,y[2]),C[0]&1024){R=tt(y[10]);let D;for(D=0;D<R.length;D+=1){const O=va(y,R,D);S[D]?S[D].p(O,C):(S[D]=Ca(O),S[D].c(),S[D].m(g,null))}for(;D<S.length;D+=1)S[D].d(1);S.length=R.length}C[0]&1026&&yt(g,y[1])},d(y){y&&(w(e),w(c),w(l)),Tt(x,y),Tt(S,y),p=!1,wt(f)}}}function wa(i){let e,t=i[46].name+"",n,s;return{c(){e=A("option"),n=Te(t),this.h()},l(r){e=T(r,"OPTION",{});var o=z(e);n=Se(o,t),o.forEach(w),this.h()},h(){e.__value=s=i[46].id,Xe(e,e.__value)},m(r,o){_e(r,e,o),m(e,n)},p(r,o){o[0]&1024&&t!==(t=r[46].name+"")&&Ke(n,t),o[0]&1024&&s!==(s=r[46].id)&&(e.__value=s,Xe(e,e.__value))},d(r){r&&w(e)}}}function Ca(i){let e,t=i[46].name+"",n,s;return{c(){e=A("option"),n=Te(t),this.h()},l(r){e=T(r,"OPTION",{});var o=z(e);n=Se(o,t),o.forEach(w),this.h()},h(){e.__value=s=i[46].id,Xe(e,e.__value)},m(r,o){_e(r,e,o),m(e,n)},p(r,o){o[0]&1024&&t!==(t=r[46].name+"")&&Ke(n,t),o[0]&1024&&s!==(s=r[46].id)&&(e.__value=s,Xe(e,e.__value))},d(r){r&&w(e)}}}function Ra(i){var ve;let e,t,n,s="剖面图预览",r,o,a,c,l,u,h,d="标注管理",g,v,_,p,f="添加文字标注",b,x,R,S,y,C,D="X (距离m)",O,M,P,H,Y,L="Y (高程m)",V,q,ue,se,ae="添加标注",ie,he,ee=((ve=i[6].lithologies)==null?void 0:ve.length)>0&&Pa(i);function ce(U,G){return U[7].length>0?Rh:Ch}let F=ce(i),Q=F(i);return{c(){e=A("hr"),t=j(),n=A("h4"),n.textContent=s,r=j(),o=A("div"),a=A("canvas"),c=j(),ee&&ee.c(),l=j(),u=A("div"),h=A("h4"),h.textContent=d,g=j(),Q.c(),v=j(),_=A("div"),p=A("label"),p.textContent=f,b=j(),x=A("input"),R=j(),S=A("div"),y=A("div"),C=A("label"),C.textContent=D,O=j(),M=A("input"),P=j(),H=A("div"),Y=A("label"),Y.textContent=L,V=j(),q=A("input"),ue=j(),se=A("button"),se.textContent=ae,this.h()},l(U){e=T(U,"HR",{style:!0}),t=X(U),n=T(U,"H4",{style:!0,"data-svelte-h":!0}),Ie(n)!=="svelte-1vo8psn"&&(n.textContent=s),r=X(U),o=T(U,"DIV",{class:!0});var G=z(o);a=T(G,"CANVAS",{id:!0,width:!0,height:!0}),z(a).forEach(w),G.forEach(w),c=X(U),ee&&ee.l(U),l=X(U),u=T(U,"DIV",{class:!0});var oe=z(u);h=T(oe,"H4",{style:!0,"data-svelte-h":!0}),Ie(h)!=="svelte-4x8l83"&&(h.textContent=d),g=X(oe),Q.l(oe),v=X(oe),_=T(oe,"DIV",{class:!0,style:!0});var pe=z(_);p=T(pe,"LABEL",{"data-svelte-h":!0}),Ie(p)!=="svelte-dpqsoy"&&(p.textContent=f),b=X(pe),x=T(pe,"INPUT",{type:!0,placeholder:!0}),pe.forEach(w),R=X(oe),S=T(oe,"DIV",{class:!0});var Ce=z(S);y=T(Ce,"DIV",{class:!0});var W=z(y);C=T(W,"LABEL",{"data-svelte-h":!0}),Ie(C)!=="svelte-130i8ji"&&(C.textContent=D),O=X(W),M=T(W,"INPUT",{type:!0}),W.forEach(w),P=X(Ce),H=T(Ce,"DIV",{class:!0});var Le=z(H);Y=T(Le,"LABEL",{"data-svelte-h":!0}),Ie(Y)!=="svelte-xhi5gk"&&(Y.textContent=L),V=X(Le),q=T(Le,"INPUT",{type:!0}),Le.forEach(w),Ce.forEach(w),ue=X(oe),se=T(oe,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),Ie(se)!=="svelte-jb8zg8"&&(se.textContent=ae),oe.forEach(w),this.h()},h(){ge(e,"border-color","var(--border)"),ge(e,"margin","12px 0"),ge(n,"font-size","13px"),ge(n,"margin-bottom","8px"),I(a,"id","profileCanvas"),I(a,"width","340"),I(a,"height","280"),I(o,"class","profile-preview svelte-1h3xo7h"),ge(h,"font-size","13px"),ge(h,"margin","8px 0"),I(x,"type","text"),I(x,"placeholder","标注内容"),I(_,"class","form-group"),ge(_,"margin-top","8px"),I(M,"type","number"),I(y,"class","form-group"),I(q,"type","number"),I(H,"class","form-group"),I(S,"class","form-row"),I(se,"class","btn-secondary btn-sm"),ge(se,"width","100%"),I(u,"class","annotation-section svelte-1h3xo7h")},m(U,G){_e(U,e,G),_e(U,t,G),_e(U,n,G),_e(U,r,G),_e(U,o,G),m(o,a),i[27](a),_e(U,c,G),ee&&ee.m(U,G),_e(U,l,G),_e(U,u,G),m(u,h),m(u,g),Q.m(u,null),m(u,v),m(u,_),m(_,p),m(_,b),m(_,x),Xe(x,i[8].text_content),m(u,R),m(u,S),m(S,y),m(y,C),m(y,O),m(y,M),Xe(M,i[8].x),m(S,P),m(S,H),m(H,Y),m(H,V),m(H,q),Xe(q,i[8].y),m(u,ue),m(u,se),ie||(he=[Ve(x,"input",i[29]),Ve(M,"input",i[30]),Ve(q,"input",i[31]),Ve(se,"click",i[16])],ie=!0)},p(U,G){var oe;((oe=U[6].lithologies)==null?void 0:oe.length)>0?ee?ee.p(U,G):(ee=Pa(U),ee.c(),ee.m(l.parentNode,l)):ee&&(ee.d(1),ee=null),F===(F=ce(U))&&Q?Q.p(U,G):(Q.d(1),Q=F(U),Q&&(Q.c(),Q.m(u,v))),G[0]&256&&x.value!==U[8].text_content&&Xe(x,U[8].text_content),G[0]&256&&ot(M.value)!==U[8].x&&Xe(M,U[8].x),G[0]&256&&ot(q.value)!==U[8].y&&Xe(q,U[8].y)},d(U){U&&(w(e),w(t),w(n),w(r),w(o),w(c),w(l),w(u)),i[27](null),ee&&ee.d(U),Q.d(),ie=!1,wt(he)}}}function Pa(i){let e,t,n="图例",s,r,o=tt(i[6].lithologies),a=[];for(let c=0;c<o.length;c+=1)a[c]=La(ga(i,o,c));return{c(){e=A("div"),t=A("h5"),t.textContent=n,s=j(),r=A("div");for(let c=0;c<a.length;c+=1)a[c].c();this.h()},l(c){e=T(c,"DIV",{class:!0});var l=z(e);t=T(l,"H5",{style:!0,"data-svelte-h":!0}),Ie(t)!=="svelte-1b0yqne"&&(t.textContent=n),s=X(l),r=T(l,"DIV",{class:!0});var u=z(r);for(let h=0;h<a.length;h+=1)a[h].l(u);u.forEach(w),l.forEach(w),this.h()},h(){ge(t,"font-size","11px"),ge(t,"margin","8px 0 4px"),ge(t,"color","var(--text-secondary)"),I(r,"class","legend-list svelte-1h3xo7h"),I(e,"class","legend-box svelte-1h3xo7h")},m(c,l){_e(c,e,l),m(e,t),m(e,s),m(e,r);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(r,null)},p(c,l){if(l[0]&8256){o=tt(c[6].lithologies);let u;for(u=0;u<o.length;u+=1){const h=ga(c,o,u);a[u]?a[u].p(h,l):(a[u]=La(h),a[u].c(),a[u].m(r,null))}for(;u<a.length;u+=1)a[u].d(1);a.length=o.length}},d(c){c&&w(e),Tt(a,c)}}}function La(i){let e,t,n,s,r=i[43]+"",o,a;return{c(){e=A("div"),t=A("span"),n=j(),s=A("span"),o=Te(r),a=j(),this.h()},l(c){e=T(c,"DIV",{class:!0});var l=z(e);t=T(l,"SPAN",{class:!0,style:!0}),z(t).forEach(w),n=X(l),s=T(l,"SPAN",{style:!0});var u=z(s);o=Se(u,r),u.forEach(w),a=X(l),l.forEach(w),this.h()},h(){I(t,"class","color-swatch"),ge(t,"background",i[13](i[43],i[45])),ge(s,"font-size","11px"),I(e,"class","legend-item svelte-1h3xo7h")},m(c,l){_e(c,e,l),m(e,t),m(e,n),m(e,s),m(s,o),m(e,a)},p(c,l){l[0]&64&&ge(t,"background",c[13](c[43],c[45])),l[0]&64&&r!==(r=c[43]+"")&&Ke(o,r)},d(c){c&&w(e)}}}function Ch(i){let e,t="暂无标注";return{c(){e=A("p"),e.textContent=t,this.h()},l(n){e=T(n,"P",{style:!0,"data-svelte-h":!0}),Ie(e)!=="svelte-191p6fb"&&(e.textContent=t),this.h()},h(){ge(e,"font-size","11px"),ge(e,"color","var(--text-muted)"),ge(e,"margin-bottom","6px")},m(n,s){_e(n,e,s)},p:Et,d(n){n&&w(e)}}}function Rh(i){let e,t=tt(i[7]),n=[];for(let s=0;s<t.length;s+=1)n[s]=Da(_a(i,t,s));return{c(){for(let s=0;s<n.length;s+=1)n[s].c();e=Pt()},l(s){for(let r=0;r<n.length;r+=1)n[r].l(s);e=Pt()},m(s,r){for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(s,r);_e(s,e,r)},p(s,r){if(r[0]&131200){t=tt(s[7]);let o;for(o=0;o<t.length;o+=1){const a=_a(s,t,o);n[o]?n[o].p(a,r):(n[o]=Da(a),n[o].c(),n[o].m(e.parentNode,e))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}},d(s){s&&w(e),Tt(n,s)}}}function Da(i){let e,t,n=i[40].type==="text"?"📝":"➤",s,r,o=(i[40].text_content||`(${i[40].x}, ${i[40].y})`)+"",a,c,l,u="✕",h,d,g;function v(){return i[28](i[40])}return{c(){e=A("div"),t=A("span"),s=Te(n),r=j(),a=Te(o),c=j(),l=A("button"),l.textContent=u,h=j(),this.h()},l(_){e=T(_,"DIV",{class:!0});var p=z(e);t=T(p,"SPAN",{});var f=z(t);s=Se(f,n),r=X(f),a=Se(f,o),f.forEach(w),c=X(p),l=T(p,"BUTTON",{class:!0,"data-svelte-h":!0}),Ie(l)!=="svelte-8rblco"&&(l.textContent=u),h=X(p),p.forEach(w),this.h()},h(){I(l,"class","btn-danger btn-sm"),I(e,"class","ann-item svelte-1h3xo7h")},m(_,p){_e(_,e,p),m(e,t),m(t,s),m(t,r),m(t,a),m(e,c),m(e,l),m(e,h),d||(g=Ve(l,"click",v),d=!0)},p(_,p){i=_,p[0]&128&&n!==(n=i[40].type==="text"?"📝":"➤")&&Ke(s,n),p[0]&128&&o!==(o=(i[40].text_content||`(${i[40].x}, ${i[40].y})`)+"")&&Ke(a,o)},d(_){_&&w(e),d=!1,g()}}}function Ph(i){let e,t,n="剖面分析",s,r,o,a,c,l,u,h,d,g,v,_,p,f="剖面名称",b,x,R,S,y,C="插值方式",D,O,M,P="线性插值",H,Y="三次样条",L,V="Kriging地统计插值",q,ue,se,ae,ie=i[11].length+"",he,ee,ce,F,Q,ve,U,G="生成剖面",oe,pe,Ce,W,Le,xe,Re,te,ne,fe,N,E,$=tt(i[12].filter(i[23])),re=[];for(let me=0;me<$.length;me+=1)re[me]=Ma(Ea(i,$,me));let Z=i[11].length<2&&ya(),le=i[10].length>0&&Sa(i),J=i[0]&&Aa(i),de=i[6]&&Ra(i);return{c(){e=A("div"),t=A("h3"),t.textContent=n,s=j(),r=A("div"),o=A("button"),a=Te("PNG"),l=j(),u=A("button"),h=Te("SVG"),g=j(),v=A("div"),_=A("div"),p=A("label"),p.textContent=f,b=j(),x=A("input"),R=j(),S=A("div"),y=A("label"),y.textContent=C,D=j(),O=A("select"),M=A("option"),M.textContent=P,H=A("option"),H.textContent=Y,L=A("option"),L.textContent=V,q=j(),ue=A("div"),se=A("label"),ae=Te("已选钻孔 ("),he=Te(ie),ee=Te(")"),ce=j(),F=A("div");for(let me=0;me<re.length;me+=1)re[me].c();Q=j(),Z&&Z.c(),ve=j(),U=A("button"),U.textContent=G,oe=j(),le&&le.c(),pe=j(),Ce=A("hr"),W=j(),Le=A("div"),xe=A("label"),Re=A("input"),te=Te(`
            剖面对比模式`),ne=j(),J&&J.c(),fe=j(),de&&de.c(),this.h()},l(me){e=T(me,"DIV",{class:!0});var Ee=z(e);t=T(Ee,"H3",{"data-svelte-h":!0}),Ie(t)!=="svelte-1tw5t1i"&&(t.textContent=n),s=X(Ee),r=T(Ee,"DIV",{style:!0});var Oe=z(r);o=T(Oe,"BUTTON",{class:!0});var be=z(o);a=Se(be,"PNG"),be.forEach(w),l=X(Oe),u=T(Oe,"BUTTON",{class:!0});var ye=z(u);h=Se(ye,"SVG"),ye.forEach(w),Oe.forEach(w),Ee.forEach(w),g=X(me),v=T(me,"DIV",{class:!0});var Be=z(v);_=T(Be,"DIV",{class:!0});var We=z(_);p=T(We,"LABEL",{"data-svelte-h":!0}),Ie(p)!=="svelte-aae5qr"&&(p.textContent=f),b=X(We),x=T(We,"INPUT",{type:!0,placeholder:!0}),We.forEach(w),R=X(Be),S=T(Be,"DIV",{class:!0});var ze=z(S);y=T(ze,"LABEL",{"data-svelte-h":!0}),Ie(y)!=="svelte-w2ab1e"&&(y.textContent=C),D=X(ze),O=T(ze,"SELECT",{});var Pe=z(O);M=T(Pe,"OPTION",{"data-svelte-h":!0}),Ie(M)!=="svelte-1acgaat"&&(M.textContent=P),H=T(Pe,"OPTION",{"data-svelte-h":!0}),Ie(H)!=="svelte-b97obq"&&(H.textContent=Y),L=T(Pe,"OPTION",{"data-svelte-h":!0}),Ie(L)!=="svelte-m7cjkk"&&(L.textContent=V),Pe.forEach(w),ze.forEach(w),q=X(Be),ue=T(Be,"DIV",{class:!0});var qe=z(ue);se=T(qe,"LABEL",{});var k=z(se);ae=Se(k,"已选钻孔 ("),he=Se(k,ie),ee=Se(k,")"),k.forEach(w),ce=X(qe),F=T(qe,"DIV",{class:!0});var Fe=z(F);for(let B=0;B<re.length;B+=1)re[B].l(Fe);Q=X(Fe),Z&&Z.l(Fe),Fe.forEach(w),qe.forEach(w),ve=X(Be),U=T(Be,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),Ie(U)!=="svelte-18tzs37"&&(U.textContent=G),oe=X(Be),le&&le.l(Be),pe=X(Be),Ce=T(Be,"HR",{style:!0}),W=X(Be),Le=T(Be,"DIV",{class:!0});var Ye=z(Le);xe=T(Ye,"LABEL",{class:!0});var je=z(xe);Re=T(je,"INPUT",{type:!0}),te=Se(je,`
            剖面对比模式`),je.forEach(w),ne=X(Ye),J&&J.l(Ye),Ye.forEach(w),fe=X(Be),de&&de.l(Be),Be.forEach(w),this.h()},h(){I(o,"class","btn-secondary btn-sm"),o.disabled=c=!i[5],I(u,"class","btn-secondary btn-sm"),u.disabled=d=!i[5],ge(r,"display","flex"),ge(r,"gap","6px"),I(e,"class","panel-header"),I(x,"type","text"),I(x,"placeholder","输入剖面名称"),I(_,"class","form-group"),M.__value="linear",Xe(M,M.__value),H.__value="cubic_spline",Xe(H,H.__value),L.__value="kriging",Xe(L,L.__value),i[4]===void 0&&sn(()=>i[22].call(O)),I(S,"class","form-group"),I(F,"class","selected-bhs svelte-1h3xo7h"),I(ue,"class","form-group"),I(U,"class","btn-primary"),ge(U,"width","100%"),ge(U,"margin-bottom","12px"),ge(Ce,"border-color","var(--border)"),ge(Ce,"margin","12px 0"),I(Re,"type","checkbox"),Re.checked=i[0],I(xe,"class","checkbox-label"),I(Le,"class","comparison-section svelte-1h3xo7h"),I(v,"class","panel-body scrollable")},m(me,Ee){_e(me,e,Ee),m(e,t),m(e,s),m(e,r),m(r,o),m(o,a),m(r,l),m(r,u),m(u,h),_e(me,g,Ee),_e(me,v,Ee),m(v,_),m(_,p),m(_,b),m(_,x),Xe(x,i[3]),m(v,R),m(v,S),m(S,y),m(S,D),m(S,O),m(O,M),m(O,H),m(O,L),yt(O,i[4],!0),m(v,q),m(v,ue),m(ue,se),m(se,ae),m(se,he),m(se,ee),m(ue,ce),m(ue,F);for(let Oe=0;Oe<re.length;Oe+=1)re[Oe]&&re[Oe].m(F,null);m(F,Q),Z&&Z.m(F,null),m(v,ve),m(v,U),m(v,oe),le&&le.m(v,null),m(v,pe),m(v,Ce),m(v,W),m(v,Le),m(Le,xe),m(xe,Re),m(xe,te),m(Le,ne),J&&J.m(Le,null),m(v,fe),de&&de.m(v,null),N||(E=[Ve(o,"click",i[18]),Ve(u,"click",i[19]),Ve(x,"input",i[21]),Ve(O,"change",i[22]),Ve(U,"click",i[14]),Ve(Re,"change",i[20])],N=!0)},p(me,Ee){if(Ee[0]&32&&c!==(c=!me[5])&&(o.disabled=c),Ee[0]&32&&d!==(d=!me[5])&&(u.disabled=d),Ee[0]&8&&x.value!==me[3]&&Xe(x,me[3]),Ee[0]&16&&yt(O,me[4]),Ee[0]&2048&&ie!==(ie=me[11].length+"")&&Ke(he,ie),Ee[0]&6144){$=tt(me[12].filter(me[23]));let Oe;for(Oe=0;Oe<$.length;Oe+=1){const be=Ea(me,$,Oe);re[Oe]?re[Oe].p(be,Ee):(re[Oe]=Ma(be),re[Oe].c(),re[Oe].m(F,Q))}for(;Oe<re.length;Oe+=1)re[Oe].d(1);re.length=$.length}me[11].length<2?Z||(Z=ya(),Z.c(),Z.m(F,null)):Z&&(Z.d(1),Z=null),me[10].length>0?le?le.p(me,Ee):(le=Sa(me),le.c(),le.m(v,pe)):le&&(le.d(1),le=null),Ee[0]&1&&(Re.checked=me[0]),me[0]?J?J.p(me,Ee):(J=Aa(me),J.c(),J.m(Le,null)):J&&(J.d(1),J=null),me[6]?de?de.p(me,Ee):(de=Ra(me),de.c(),de.m(v,null)):de&&(de.d(1),de=null)},i:Et,o:Et,d(me){me&&(w(e),w(g),w(v)),Tt(re,me),Z&&Z.d(),le&&le.d(),J&&J.d(),de&&de.d(),N=!1,wt(E)}}}function Lh(i,e,t){let n,s,r,o,a,c,l,u,h,d,g;Ze(i,dr,U=>t(0,n=U)),Ze(i,Go,U=>t(1,s=U)),Ze(i,Ho,U=>t(2,r=U)),Ze(i,ys,U=>t(32,o=U)),Ze(i,Ms,U=>t(33,a=U)),Ze(i,fr,U=>t(34,c=U)),Ze(i,Ts,U=>t(10,l=U)),Ze(i,lr,U=>t(11,u=U)),Ze(i,On,U=>t(35,h=U)),Ze(i,$n,U=>t(36,d=U)),Ze(i,kn,U=>t(12,g=U));let v="",_="linear",p=null,f=null,b=[],x={type:"text",x:0,y:0,text_content:"",arrow_dx:0,arrow_dy:0},R=null;const S=["#E6B89C","#F0E68C","#CD853F","#8B7355","#A0522D","#DEB887","#D2B48C","#BDB76B","#BC8F8F","#C4A882","#9ACD32","#6B8E23","#556B2F","#8FBC8F","#2E8B57","#708090","#778899","#B0C4DE","#87CEEB","#4682B4"];function y(U,G=0){const oe=d==null?void 0:d.find(pe=>pe.name===U);return oe!=null&&oe.color?oe.color:S[G%S.length]}Iu(()=>{f&&R&&C()});function C(){if(!f||!R)return;const U=R.getContext("2d"),G=R.width,oe=R.height,pe={top:30,right:20,bottom:40,left:60},Ce=G-pe.left-pe.right,W=oe-pe.top-pe.bottom;U.clearRect(0,0,G,oe),U.fillStyle="#ffffff",U.fillRect(0,0,G,oe);const Le=f.columns,xe=f.connections,Re=f.total_distance>0?f.total_distance:100;let te=1/0,ne=-1/0;Le.forEach(Z=>{Z.layers.forEach(le=>{le.top_elevation>ne&&(ne=le.top_elevation),le.bottom_elevation<te&&(te=le.bottom_elevation)})}),te===1/0&&(te=0,ne=100);const fe=(ne-te)*.1||10;te-=fe,ne+=fe;const N=Z=>pe.left+Z/Re*Ce,E=Z=>pe.top+(ne-Z)/(ne-te)*W;U.strokeStyle="#cccccc",U.lineWidth=.5;for(let Z=Math.ceil(te);Z<=ne;Z+=Math.max(5,Math.round((ne-te)/8))){const le=E(Z);U.beginPath(),U.moveTo(pe.left,le),U.lineTo(G-pe.right,le),U.stroke(),U.fillStyle="#666",U.font="10px sans-serif",U.textAlign="right",U.textBaseline="middle",U.fillText(Z.toFixed(0)+"m",pe.left-5,le)}U.strokeStyle="#cccccc";const $=Math.max(10,Math.round(Re/8));for(let Z=0;Z<=Re;Z+=$){const le=N(Z);U.beginPath(),U.moveTo(le,pe.top),U.lineTo(le,oe-pe.bottom),U.stroke(),U.fillStyle="#666",U.font="10px sans-serif",U.textAlign="center",U.textBaseline="top",U.fillText(Z.toFixed(0)+"m",le,oe-pe.bottom+5)}const re={};(f.lithologies||[]).forEach((Z,le)=>{re[Z]=le}),xe.forEach(Z=>{const le=y(Z.lithology_name,re[Z.lithology_name]||0),J=Z.distances,de=Z.top_elevations,me=Z.bottom_elevations;if(!(J.length<2)){U.fillStyle=le,U.globalAlpha=.85,U.beginPath(),U.moveTo(N(J[0]),E(de[0]));for(let Ee=1;Ee<J.length;Ee++)U.lineTo(N(J[Ee]),E(de[Ee]));for(let Ee=J.length-1;Ee>=0;Ee--)U.lineTo(N(J[Ee]),E(me[Ee]));U.closePath(),U.fill(),U.globalAlpha=1,U.strokeStyle="#333",U.lineWidth=.8,U.beginPath();for(let Ee=0;Ee<J.length;Ee++)Ee===0?U.moveTo(N(J[Ee]),E(de[Ee])):U.lineTo(N(J[Ee]),E(de[Ee]));U.stroke(),U.beginPath();for(let Ee=0;Ee<J.length;Ee++)Ee===0?U.moveTo(N(J[Ee]),E(me[Ee])):U.lineTo(N(J[Ee]),E(me[Ee]));U.stroke()}}),Le.forEach(Z=>{const le=N(Z.distance),J=Math.max(12,Ce/Math.max(6,Le.length+2));Z.layers.forEach((de,me)=>{const Ee=y(de.lithology_name,re[de.lithology_name]||me),Oe=E(de.top_elevation),be=E(de.bottom_elevation),ye=Math.max(2,be-Oe);U.fillStyle=Ee,U.globalAlpha=.95,U.fillRect(le-J/2,Oe,J,ye),U.globalAlpha=1,U.strokeStyle="#000",U.lineWidth=1,U.strokeRect(le-J/2,Oe,J,ye),U.fillStyle="#000",U.font="bold 10px sans-serif",U.textAlign="left",U.textBaseline="middle";const Be=(Oe+be)/2;U.fillText(`${de.layer_no}  ${de.thickness.toFixed(1)}m`,le+J/2+4,Be)}),U.fillStyle="#000",U.font="bold 11px sans-serif",U.textAlign="center",U.textBaseline="bottom",U.fillText(Z.hole_id,le,pe.top-6)}),U.strokeStyle="#000",U.lineWidth=1,U.strokeRect(pe.left,pe.top,Ce,W),U.fillStyle="#333",U.font="12px sans-serif",U.textAlign="center",U.textBaseline="top",U.fillText("水平距离 (m)",G/2,oe-14),U.save(),U.translate(14,oe/2),U.rotate(-Math.PI/2),U.textAlign="center",U.textBaseline="middle",U.fillText("高程 (m)",0,0),U.restore()}async function D(){if(!h||u.length<2){$e("请至少选择2个钻孔","warning");return}if(!v.trim()){$e("请输入剖面名称","warning");return}try{const U=await ht.post(`/projects/${h.id}/profiles`,{name:v,borehole_ids:u,interpolation_method:_});nt(Ts,l=[...l,U],l),t(3,v=""),$e("剖面线创建成功","success"),await O(U.id)}catch(U){$e(`创建失败: ${U.message}`,"error")}}async function O(U){t(5,p=U);try{t(6,f=await ht.get(`/projects/profiles/${U}/data`)),t(7,b=await ht.get(`/projects/profiles/${U}/annotations`)),nt(fr,c=f,c),await _o(),C()}catch(G){$e(`加载剖面数据失败: ${G.message}`,"error")}}async function M(){if(p)try{const U=await ht.post(`/projects/profiles/${p}/annotations`,x);t(7,b=[...b,U]),$e("标注已添加","success")}catch(U){$e(`添加标注失败: ${U.message}`,"error")}}async function P(U){try{await ht.delete(`/projects/profiles/annotations/${U}`),t(7,b=b.filter(G=>G.id!==U))}catch(G){$e(`删除标注失败: ${G.message}`,"error")}}async function H(){if(p)try{await ht.downloadBlob(`/export/profile/${p}/png`,`profile_${p}.png`)}catch(U){$e(`导出PNG失败: ${U.message}`,"error")}}async function Y(){if(p)try{await ht.downloadBlob(`/export/profile/${p}/svg`,`profile_${p}.svg`)}catch(U){$e(`导出SVG失败: ${U.message}`,"error")}}async function L(U){const G=U==="left"?r:s;if(G)try{const oe=await ht.get(`/projects/profiles/${G}/data`);U==="left"?nt(Ms,a=oe,a):nt(ys,o=oe,o)}catch(oe){$e(`加载对比剖面失败: ${oe.message}`,"error")}}async function V(){nt(dr,n=!n,n),n?(r&&!a&&await L("left"),s&&!o&&await L("right")):(nt(Ms,a=null,a),nt(ys,o=null,o))}function q(){v=this.value,t(3,v)}function ue(){_=tn(this),t(4,_)}const se=U=>u.includes(U.id),ae=U=>O(U.id);function ie(){r=tn(this),Ho.set(r)}function he(){s=tn(this),Go.set(s)}function ee(U){hi[U?"unshift":"push"](()=>{R=U,t(9,R)})}const ce=U=>P(U.id);function F(){x.text_content=this.value,t(8,x)}function Q(){x.x=ot(this.value),t(8,x)}function ve(){x.y=ot(this.value),t(8,x)}return i.$$.update=()=>{i.$$.dirty[0]&5&&r&&n&&L("left"),i.$$.dirty[0]&3&&s&&n&&L("right")},[n,s,r,v,_,p,f,b,x,R,l,u,g,y,D,O,M,P,H,Y,V,q,ue,se,ae,ie,he,ee,ce,F,Q,ve]}class Dh extends un{constructor(e){super(),hn(this,e,Lh,Ph,cn,{},null,[-1,-1])}}function Ih(i){let e,t;return{c(){e=A("div"),t=A("canvas"),this.h()},l(n){e=T(n,"DIV",{class:!0});var s=z(e);t=T(s,"CANVAS",{id:!0,class:!0}),z(t).forEach(w),s.forEach(w),this.h()},h(){I(t,"id","mainProfileCanvas"),I(t,"class","svelte-1uozxjf"),I(e,"class","profile-canvas-container svelte-1uozxjf")},m(n,s){_e(n,e,s),m(e,t),i[5](t)},p:Et,i:Et,o:Et,d(n){n&&w(e),i[5](null)}}}function Uh(i){if(!i||i.length<2)return[];const e=i.map(r=>r.distance),t=[];for(let r=1;r<e.length;r++)t.push(e[r]-e[r-1]);const n=t.reduce((r,o)=>r+o,0)/t.length,s=[];for(let r=0;r<t.length;r++)t[r]>n*2&&s.push({leftCol:r,rightCol:r+1,leftDist:e[r],rightDist:e[r+1],spacing:t[r],avgSpacing:n});return s}function Ia(i,e,t,n,s,r,o,a,c){i.save(),i.beginPath(),i.moveTo(e,t),i.lineTo(a,c),i.lineTo(e,n),i.closePath(),i.clip(),i.strokeStyle="#555",i.lineWidth=.8;const l=6,u=Math.min(e,a),h=Math.max(e,a),d=Math.min(t,n,c),g=Math.max(t,n,c);for(let v=d;v<=g;v+=l)i.beginPath(),i.moveTo(u-5,v),i.lineTo(h+5,v+(h-u)*.5),i.stroke();i.restore(),i.save(),i.beginPath(),i.moveTo(a,c),i.lineTo(s,r),i.lineTo(s,o),i.closePath(),i.clip(),i.strokeStyle="#555",i.lineWidth=.8;for(let v=d;v<=g;v+=l)i.beginPath(),i.moveTo(u-5,v),i.lineTo(h+5,v+(h-u)*.5),i.stroke();i.restore()}function Ua(i){let e=1/0,t=-1/0;return i!=null&&i.columns?(i.columns.forEach(n=>{n.layers.forEach(s=>{s.top_elevation>t&&(t=s.top_elevation),s.bottom_elevation<e&&(e=s.bottom_elevation)})}),e===1/0&&(e=0,t=100),{min:e,max:t}):{min:0,max:100}}function Nh(i,e,t){let n,s,r,o,a,c;Ze(i,ys,_=>t(1,n=_)),Ze(i,Ms,_=>t(2,s=_)),Ze(i,dr,_=>t(3,r=_)),Ze(i,fr,_=>t(4,o=_)),Ze(i,go,_=>t(6,a=_)),Ze(i,$n,_=>t(7,c=_));let l=null;const u=["#E6B89C","#F0E68C","#CD853F","#8B7355","#A0522D","#DEB887","#D2B48C","#BDB76B","#BC8F8F","#C4A882","#9ACD32","#6B8E23","#556B2F","#8FBC8F","#2E8B57","#708090","#778899","#B0C4DE","#87CEEB","#4682B4"];function h(_,p=0){const f=c==null?void 0:c.find(b=>b.name===_);return f!=null&&f.color?f.color:u[p%u.length]}function d(_,p,f,b,x,R,S){var he;const y={top:40,right:30,bottom:50,left:70},C=b-y.left-y.right,D=x-y.top-y.bottom,O=p.columns,M=p.connections;if(!O||O.length===0)return;const P=p.total_distance>0?p.total_distance:100;let H=R,Y=S;if(H===void 0||Y===void 0){H=1/0,Y=-1/0,O.forEach(ce=>{ce.layers.forEach(F=>{F.top_elevation>Y&&(Y=F.top_elevation),F.bottom_elevation<H&&(H=F.bottom_elevation)})}),H===1/0&&(H=0,Y=100);const ee=(Y-H)*.1||10;H-=ee,Y+=ee}const L=ee=>f+y.left+ee/P*C,V=ee=>y.top+(Y-ee)/(Y-H)*D;_.strokeStyle="#dddddd",_.lineWidth=.5;const q=Math.max(5,Math.round((Y-H)/10));for(let ee=Math.ceil(H/q)*q;ee<=Y;ee+=q){const ce=V(ee);_.beginPath(),_.moveTo(f+y.left,ce),_.lineTo(f+b-y.right,ce),_.stroke(),_.fillStyle="#888",_.font="11px sans-serif",_.textAlign="right",_.textBaseline="middle",_.fillText(ee.toFixed(0)+"m",f+y.left-8,ce)}_.strokeStyle="#dddddd";const ue=Math.max(10,Math.round(P/10));for(let ee=0;ee<=P;ee+=ue){const ce=L(ee);_.beginPath(),_.moveTo(ce,y.top),_.lineTo(ce,x-y.bottom),_.stroke(),_.fillStyle="#888",_.font="11px sans-serif",_.textAlign="center",_.textBaseline="top",_.fillText(ee.toFixed(0)+"m",ce,x-y.bottom+8)}const se={};(p.lithologies||[]).forEach((ee,ce)=>{se[ee]=ce});const ae={};O.forEach(ee=>{ae[ee.hole_id]=new Set(ee.layers.map(ce=>ce.lithology_name))});const ie=Uh(O);if(ie.length>0&&nt(go,a=ie,a),M.forEach(ee=>{var pe,Ce;const ce=h(ee.lithology_name,se[ee.lithology_name]||0),F=ee.distances,Q=ee.top_elevations,ve=ee.bottom_elevations;if(F.length<2)return;let U=!1,G=-1,oe=-1;if(O.length>=2)for(let W=0;W<O.length-1;W++){const Le=(pe=ae[O[W].hole_id])==null?void 0:pe.has(ee.lithology_name),xe=(Ce=ae[O[W+1].hole_id])==null?void 0:Ce.has(ee.lithology_name);if(Le&&!xe){U=!0,G=W,oe=W+1;break}else if(!Le&&xe){U=!0,G=W,oe=W+1;break}}if(U){const W=O[G],Le=O[oe],xe=W.distance,Re=Le.distance,te=W.layers.find(ye=>ye.lithology_name===ee.lithology_name),ne=Le.layers.find(ye=>ye.lithology_name===ee.lithology_name),fe=(xe+Re)/2,N=Re-xe,E=30,$=V(te?te.top_elevation:0),re=V(te?te.bottom_elevation:0),Z=V(ne?ne.top_elevation:0),le=V(ne?ne.bottom_elevation:0),J=L(fe),de=te?(V(te.top_elevation)+V(te.bottom_elevation))/2:(V(ne.top_elevation)+V(ne.bottom_elevation))/2;if(_.fillStyle=ce,_.globalAlpha=.7,_.beginPath(),te&&!ne){_.moveTo(L(xe),V(te.top_elevation));for(let ye=1;ye<=E;ye++){const Be=ye/E,We=xe+Be*N,ze=te.top_elevation*(1-Be)+(te.top_elevation+te.bottom_elevation)/2*Be;te.bottom_elevation*(1-Be)+(te.top_elevation+te.bottom_elevation)/2*Be,_.lineTo(L(We),V(ze))}for(let ye=E;ye>=1;ye--){const Be=ye/E,We=xe+Be*N,ze=te.bottom_elevation*(1-Be)+(te.top_elevation+te.bottom_elevation)/2*Be;_.lineTo(L(We),V(ze))}_.closePath(),_.fill(),_.globalAlpha=1,Ia(_,L(xe),V(te.top_elevation),V(te.bottom_elevation),L(Re),Z,le,J,de)}else if(!te&&ne){_.moveTo(L(Re),V(ne.top_elevation));for(let ye=E-1;ye>=0;ye--){const Be=ye/E,We=fe+Be*(Re-fe),ze=(ne.top_elevation+ne.bottom_elevation)/2*(1-Be)+ne.top_elevation*Be;(ne.top_elevation+ne.bottom_elevation)/2*(1-Be)+ne.bottom_elevation*Be,_.lineTo(L(We),V(ze))}for(let ye=0;ye<E;ye++){const Be=ye/E,We=fe+Be*(Re-fe),ze=(ne.top_elevation+ne.bottom_elevation)/2*(1-Be)+ne.bottom_elevation*Be;_.lineTo(L(We),V(ze))}_.closePath(),_.fill(),_.globalAlpha=1,Ia(_,L(xe),$,re,L(Re),V(ne.top_elevation),V(ne.bottom_elevation),J,de)}const me=te?xe:fe,Ee=ne?Re:fe,Oe=F.findIndex(ye=>ye>=me-1),be=F.findIndex(ye=>ye>=Ee+1);if(Oe>=0&&be>Oe){_.fillStyle=ce,_.globalAlpha=.85,_.beginPath(),_.moveTo(L(F[0]),V(Q[0]));for(let ye=1;ye<Oe;ye++)_.lineTo(L(F[ye]),V(Q[ye]));for(let ye=Oe-1;ye>=0;ye--)_.lineTo(L(F[ye]),V(ve[ye]));_.closePath(),_.fill(),_.globalAlpha=1,_.strokeStyle="#444",_.lineWidth=1,_.beginPath();for(let ye=0;ye<Oe;ye++)ye===0?_.moveTo(L(F[ye]),V(Q[ye])):_.lineTo(L(F[ye]),V(Q[ye]));_.stroke(),_.beginPath();for(let ye=0;ye<Oe;ye++)ye===0?_.moveTo(L(F[ye]),V(ve[ye])):_.lineTo(L(F[ye]),V(ve[ye]));if(_.stroke(),be<F.length){_.fillStyle=ce,_.globalAlpha=.85,_.beginPath(),_.moveTo(L(F[be]),V(Q[be]));for(let ye=be+1;ye<F.length;ye++)_.lineTo(L(F[ye]),V(Q[ye]));for(let ye=F.length-1;ye>=be;ye--)_.lineTo(L(F[ye]),V(ve[ye]));_.closePath(),_.fill(),_.globalAlpha=1,_.strokeStyle="#444",_.lineWidth=1,_.beginPath();for(let ye=be;ye<F.length;ye++)ye===be?_.moveTo(L(F[ye]),V(Q[ye])):_.lineTo(L(F[ye]),V(Q[ye]));_.stroke(),_.beginPath();for(let ye=be;ye<F.length;ye++)ye===be?_.moveTo(L(F[ye]),V(ve[ye])):_.lineTo(L(F[ye]),V(ve[ye]));_.stroke()}}}else{_.fillStyle=ce,_.globalAlpha=.85,_.beginPath(),_.moveTo(L(F[0]),V(Q[0]));for(let W=1;W<F.length;W++)_.lineTo(L(F[W]),V(Q[W]));for(let W=F.length-1;W>=0;W--)_.lineTo(L(F[W]),V(ve[W]));_.closePath(),_.fill(),_.globalAlpha=1,_.strokeStyle="#444",_.lineWidth=1,_.beginPath();for(let W=0;W<F.length;W++)W===0?_.moveTo(L(F[W]),V(Q[W])):_.lineTo(L(F[W]),V(Q[W]));_.stroke(),_.beginPath();for(let W=0;W<F.length;W++)W===0?_.moveTo(L(F[W]),V(ve[W])):_.lineTo(L(F[W]),V(ve[W]));_.stroke()}}),ie.forEach(ee=>{const ce=L(ee.leftDist),F=L(ee.rightDist),Q=y.top+2;_.save(),_.setLineDash([6,4]),_.strokeStyle="#e03030",_.lineWidth=2,_.beginPath(),_.moveTo(ce,Q),_.lineTo(F,Q),_.stroke(),_.restore(),_.fillStyle="#e03030",_.font="bold 10px sans-serif",_.textAlign="center",_.textBaseline="bottom",_.fillText("插值可信度低",(ce+F)/2,Q-2)}),O.forEach(ee=>{const ce=L(ee.distance),F=Math.max(16,C/Math.max(8,O.length*2));ee.layers.forEach((Q,ve)=>{const U=h(Q.lithology_name,se[Q.lithology_name]||ve),G=V(Q.top_elevation),oe=V(Q.bottom_elevation),pe=Math.max(3,oe-G);if(_.fillStyle=U,_.globalAlpha=.95,_.fillRect(ce-F/2,G,F,pe),_.globalAlpha=1,_.strokeStyle="#000",_.lineWidth=1.5,_.strokeRect(ce-F/2,G,F,pe),pe>14){_.fillStyle="#000",_.font="bold 11px sans-serif",_.textAlign="left",_.textBaseline="middle";const Ce=(G+oe)/2;_.fillText(`${Q.layer_no}  ${Q.thickness.toFixed(1)}m`,ce+F/2+6,Ce)}}),_.fillStyle="#000",_.font="bold 13px sans-serif",_.textAlign="center",_.textBaseline="bottom",_.fillText(ee.hole_id,ce,y.top-8),_.fillStyle="#666",_.font="10px sans-serif",_.textBaseline="top",_.fillText(`标高${ee.elevation.toFixed(1)}m`,ce,x-y.bottom+22)}),_.strokeStyle="#000",_.lineWidth=1.5,_.strokeRect(f+y.left,y.top,C,D),_.fillStyle="#333",_.font="13px sans-serif",_.textAlign="center",_.textBaseline="top",_.fillText("水平距离 (m)",f+b/2,x-18),_.save(),_.translate(f+16,x/2),_.rotate(-Math.PI/2),_.textAlign="center",_.textBaseline="middle",_.fillText("高程 (m)",0,0),_.restore(),((he=p.lithologies)==null?void 0:he.length)>0){const ee=f+b-y.right-140,ce=y.top+10;_.fillStyle="rgba(255,255,255,0.92)",_.fillRect(ee-8,ce-6,148,p.lithologies.length*20+12),_.strokeStyle="#ccc",_.lineWidth=1,_.strokeRect(ee-8,ce-6,148,p.lithologies.length*20+12),p.lithologies.forEach((F,Q)=>{const ve=ce+Q*20;_.fillStyle=h(F,Q),_.fillRect(ee,ve,14,14),_.strokeStyle="#000",_.lineWidth=.5,_.strokeRect(ee,ve,14,14),_.fillStyle="#333",_.font="12px sans-serif",_.textAlign="left",_.textBaseline="middle",_.fillText(F,ee+20,ve+7)})}_.fillStyle="#333",_.font="bold 14px sans-serif",_.textAlign="left",_.textBaseline="top",_.fillText(`插值方式: ${p.interpolation_method||"linear"}`,f+y.left+8,y.top+8)}function g(){if(!l)return;const _=l.parentElement,p=_.clientWidth||800,f=_.clientHeight||600;t(0,l.width=p,l),t(0,l.height=f,l);const b=l.getContext("2d");if(b.clearRect(0,0,p,f),b.fillStyle="#ffffff",b.fillRect(0,0,p,f),r&&s&&n){const x=Ua(s),R=Ua(n),S=Math.min(x.min,R.min),y=Math.max(x.max,R.max),C=(y-S)*.1||10,D=S-C,O=y+C,M=Math.floor(p/2);b.save(),b.beginPath(),b.rect(0,0,M,f),b.clip(),d(b,s,0,M,f,D,O),b.restore(),b.save(),b.beginPath(),b.rect(M,0,p-M,f),b.clip(),d(b,n,M,p-M,f,D,O),b.restore(),b.strokeStyle="#333",b.lineWidth=2,b.setLineDash([8,4]),b.beginPath(),b.moveTo(M,0),b.lineTo(M,f),b.stroke(),b.setLineDash([]),b.fillStyle="rgba(0,0,0,0.6)",b.font="bold 14px sans-serif",b.textAlign="center",b.textBaseline="bottom",b.fillText("左剖面",M/2,f-4),b.fillText("右剖面",M+(p-M)/2,f-4)}else o&&d(b,o,0,p,f,void 0,void 0)}yr(()=>{(o||r&&s)&&_o().then(()=>g());const _=new ResizeObserver(()=>{l&&g()});return l!=null&&l.parentElement&&_.observe(l.parentElement),()=>_.disconnect()}),Iu(()=>{(o||r&&s&&n)&&l&&g()});function v(_){hi[_?"unshift":"push"](()=>{l=_,t(0,l)})}return i.$$.update=()=>{i.$$.dirty&31&&(o||r&&s&&n)&&l&&_o().then(()=>g())},[l,n,s,r,o,v]}class Oh extends un{constructor(e){super(),hn(this,e,Nh,Ih,cn,{})}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Co="161",Ii={ROTATE:0,DOLLY:1,PAN:2},Ui={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fh=0,Na=1,Bh=2,Uu=1,kh=2,qn=3,fi=0,xn=1,an=2,li=0,ss=1,Oa=2,Fa=3,Ba=4,zh=5,Mi=100,Vh=101,Hh=102,ka=103,za=104,Gh=200,Wh=201,Xh=202,jh=203,vo=204,xo=205,qh=206,Yh=207,Kh=208,Zh=209,Jh=210,$h=211,Qh=212,ef=213,tf=214,nf=0,sf=1,rf=2,_r=3,of=4,af=5,lf=6,cf=7,Ro=0,uf=1,hf=2,ci=0,ff=1,df=2,pf=3,mf=4,_f=5,gf=6,Nu=300,as=301,ls=302,bo=303,Eo=304,Tr=306,Mo=1e3,In=1001,yo=1002,on=1003,Va=1004,_s=1005,pn=1006,Ur=1007,Si=1008,ui=1009,vf=1010,xf=1011,Po=1012,Ou=1013,oi=1014,Zn=1015,Ps=1016,Fu=1017,Bu=1018,Ai=1020,bf=1021,Un=1023,Ef=1024,Mf=1025,wi=1026,cs=1027,yf=1028,ku=1029,Sf=1030,zu=1031,Vu=1033,Nr=33776,Or=33777,Fr=33778,Br=33779,Ha=35840,Ga=35841,Wa=35842,Xa=35843,Hu=36196,ja=37492,qa=37496,Ya=37808,Ka=37809,Za=37810,Ja=37811,$a=37812,Qa=37813,el=37814,tl=37815,nl=37816,il=37817,sl=37818,rl=37819,ol=37820,al=37821,kr=36492,ll=36494,cl=36495,Tf=36283,ul=36284,hl=36285,fl=36286,Gu=3e3,Ci=3001,Af=3200,wf=3201,Wu=0,Cf=1,Rn="",Yt="srgb",Qn="srgb-linear",Lo="display-p3",Ar="display-p3-linear",gr="linear",Rt="srgb",vr="rec709",xr="p3",Ni=7680,dl=519,Rf=512,Pf=513,Lf=514,Xu=515,Df=516,If=517,Uf=518,Nf=519,pl=35044,ml="300 es",So=1035,Jn=2e3,br=2001;class Di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ss=Math.PI/180,To=180/Math.PI;function Ds(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function ln(i,e,t){return Math.max(e,Math.min(t,i))}function Of(i,e){return(i%e+e)%e}function zr(i,e,t){return(1-t)*i+t*e}function _l(i){return(i&i-1)===0&&i!==0}function Ao(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function gs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function dn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ff={DEG2RAD:Ss};class ut{constructor(e=0,t=0){ut.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ln(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xt{constructor(e,t,n,s,r,o,a,c,l){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],g=n[5],v=n[8],_=s[0],p=s[3],f=s[6],b=s[1],x=s[4],R=s[7],S=s[2],y=s[5],C=s[8];return r[0]=o*_+a*b+c*S,r[3]=o*p+a*x+c*y,r[6]=o*f+a*R+c*C,r[1]=l*_+u*b+h*S,r[4]=l*p+u*x+h*y,r[7]=l*f+u*R+h*C,r[2]=d*_+g*b+v*S,r[5]=d*p+g*x+v*y,r[8]=d*f+g*R+v*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,g=l*r-o*c,v=t*h+n*d+s*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=h*_,e[1]=(s*l-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=g*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Vr.makeScale(e,t)),this}rotate(e){return this.premultiply(Vr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vr=new xt;function ju(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bf(){const i=Er("canvas");return i.style.display="block",i}const gl={};function rs(i){i in gl||(gl[i]=!0,console.warn(i))}const vl=new xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xl=new xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Os={[Qn]:{transfer:gr,primaries:vr,toReference:i=>i,fromReference:i=>i},[Yt]:{transfer:Rt,primaries:vr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ar]:{transfer:gr,primaries:xr,toReference:i=>i.applyMatrix3(xl),fromReference:i=>i.applyMatrix3(vl)},[Lo]:{transfer:Rt,primaries:xr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(xl),fromReference:i=>i.applyMatrix3(vl).convertLinearToSRGB()}},kf=new Set([Qn,Ar]),At={enabled:!0,_workingColorSpace:Qn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!kf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Os[e].toReference,s=Os[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Os[i].primaries},getTransfer:function(i){return i===Rn?gr:Os[i].transfer}};function os(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Oi;class qu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Oi===void 0&&(Oi=Er("canvas")),Oi.width=e.width,Oi.height=e.height;const n=Oi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Oi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Er("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=os(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(os(t[n]/255)*255):t[n]=os(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zf=0;class Yu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Ds(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Gr(s[o].image)):r.push(Gr(s[o]))}else r=Gr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Gr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vf=0;class nn extends Di{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,n=In,s=In,r=pn,o=Si,a=Un,c=ui,l=nn.DEFAULT_ANISOTROPY,u=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Ds(),this.name="",this.source=new Yu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(rs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ci?Yt:Rn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mo:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mo:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return rs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Yt?Ci:Gu}set encoding(e){rs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ci?Yt:Rn}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Nu;nn.DEFAULT_ANISOTROPY=1;class qt{constructor(e=0,t=0,n=0,s=1){qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],g=c[5],v=c[9],_=c[2],p=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(v+p)<.1&&Math.abs(l+g+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,R=(g+1)/2,S=(f+1)/2,y=(u+d)/4,C=(h+_)/4,D=(v+p)/4;return x>R&&x>S?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=y/n,r=C/n):R>S?R<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(R),n=y/s,r=D/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=C/r,s=D/r),this.set(n,s,r,t),this}let b=Math.sqrt((p-v)*(p-v)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(p-v)/b,this.y=(h-_)/b,this.z=(d-u)/b,this.w=Math.acos((l+g+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hf extends Di{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(rs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ci?Yt:Rn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new nn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Yu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends Hf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ku extends nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gf extends nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],g=r[o+1],v=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=g,e[t+2]=v,e[t+3]=_;return}if(h!==_||c!==d||l!==g||u!==v){let p=1-a;const f=c*d+l*g+u*v+h*_,b=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const S=Math.sqrt(x),y=Math.atan2(S,f*b);p=Math.sin(p*y)/S,a=Math.sin(a*y)/S}const R=a*b;if(c=c*p+d*R,l=l*p+g*R,u=u*p+v*R,h=h*p+_*R,p===1-a){const S=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=S,l*=S,u*=S,h*=S}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],g=r[o+2],v=r[o+3];return e[t]=a*v+u*h+c*g-l*d,e[t+1]=c*v+u*d+l*h-a*g,e[t+2]=l*v+u*g+a*d-c*h,e[t+3]=u*v-a*h-c*d-l*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),g=c(s/2),v=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*g*v,this._y=l*g*h-d*u*v,this._z=l*u*v+d*g*h,this._w=l*u*h-d*g*v;break;case"YXZ":this._x=d*u*h+l*g*v,this._y=l*g*h-d*u*v,this._z=l*u*v-d*g*h,this._w=l*u*h+d*g*v;break;case"ZXY":this._x=d*u*h-l*g*v,this._y=l*g*h+d*u*v,this._z=l*u*v+d*g*h,this._w=l*u*h-d*g*v;break;case"ZYX":this._x=d*u*h-l*g*v,this._y=l*g*h+d*u*v,this._z=l*u*v-d*g*h,this._w=l*u*h+d*g*v;break;case"YZX":this._x=d*u*h+l*g*v,this._y=l*g*h+d*u*v,this._z=l*u*v-d*g*h,this._w=l*u*h-d*g*v;break;case"XZY":this._x=d*u*h-l*g*v,this._y=l*g*h-d*u*v,this._z=l*u*v+d*g*h,this._w=l*u*h+d*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(u-c)*g,this._y=(r-l)*g,this._z=(o-s)*g}else if(n>a&&n>h){const g=2*Math.sqrt(1+n-a-h);this._w=(u-c)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+l)/g}else if(a>h){const g=2*Math.sqrt(1+a-n-h);this._w=(r-l)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(c+u)/g}else{const g=2*Math.sqrt(1+h-n-a);this._w=(o-s)/g,this._x=(r+l)/g,this._y=(c+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ln(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*n+t*this._x,this._y=g*s+t*this._y,this._z=g*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class we{constructor(e=0,t=0,n=0){we.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wr.copy(this).projectOnVector(e),this.sub(Wr)}reflect(e){return this.sub(Wr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ln(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wr=new we,bl=new Pi;class Is{constructor(e=new we(1/0,1/0,1/0),t=new we(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pn):Pn.fromBufferAttribute(r,o),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fs.copy(n.boundingBox)),Fs.applyMatrix4(e.matrixWorld),this.union(Fs)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vs),Bs.subVectors(this.max,vs),Fi.subVectors(e.a,vs),Bi.subVectors(e.b,vs),ki.subVectors(e.c,vs),ei.subVectors(Bi,Fi),ti.subVectors(ki,Bi),_i.subVectors(Fi,ki);let t=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-_i.z,_i.y,ei.z,0,-ei.x,ti.z,0,-ti.x,_i.z,0,-_i.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-_i.y,_i.x,0];return!Xr(t,Fi,Bi,ki,Bs)||(t=[1,0,0,0,1,0,0,0,1],!Xr(t,Fi,Bi,ki,Bs))?!1:(ks.crossVectors(ei,ti),t=[ks.x,ks.y,ks.z],Xr(t,Fi,Bi,ki,Bs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hn=[new we,new we,new we,new we,new we,new we,new we,new we],Pn=new we,Fs=new Is,Fi=new we,Bi=new we,ki=new we,ei=new we,ti=new we,_i=new we,vs=new we,Bs=new we,ks=new we,gi=new we;function Xr(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){gi.fromArray(i,r);const a=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),c=e.dot(gi),l=t.dot(gi),u=n.dot(gi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Wf=new Is,xs=new we,jr=new we;class wr{constructor(e=new we,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Wf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xs.subVectors(e,this.center);const t=xs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(xs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xs.copy(e.center).add(jr)),this.expandByPoint(xs.copy(e.center).sub(jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gn=new we,qr=new we,zs=new we,ni=new we,Yr=new we,Vs=new we,Kr=new we;class Do{constructor(e=new we,t=new we(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){qr.copy(e).add(t).multiplyScalar(.5),zs.copy(t).sub(e).normalize(),ni.copy(this.origin).sub(qr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(zs),a=ni.dot(this.direction),c=-ni.dot(zs),l=ni.lengthSq(),u=Math.abs(1-o*o);let h,d,g,v;if(u>0)if(h=o*c-a,d=o*a-c,v=r*u,h>=0)if(d>=-v)if(d<=v){const _=1/u;h*=_,d*=_,g=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*c)+l;else d<=-v?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),g=-h*h+d*(d+2*c)+l):d<=v?(h=0,d=Math.min(Math.max(-r,-c),r),g=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),g=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(qr).addScaledVector(zs,d),g}intersectSphere(e,t){Gn.subVectors(e.center,this.origin);const n=Gn.dot(this.direction),s=Gn.dot(Gn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,n,s,r){Yr.subVectors(t,e),Vs.subVectors(n,e),Kr.crossVectors(Yr,Vs);let o=this.direction.dot(Kr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ni.subVectors(this.origin,e);const c=a*this.direction.dot(Vs.crossVectors(ni,Vs));if(c<0)return null;const l=a*this.direction.dot(Yr.cross(ni));if(l<0||c+l>o)return null;const u=-a*ni.dot(Kr);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,t,n,s,r,o,a,c,l,u,h,d,g,v,_,p){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,h,d,g,v,_,p)}set(e,t,n,s,r,o,a,c,l,u,h,d,g,v,_,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=g,f[7]=v,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/zi.setFromMatrixColumn(e,0).length(),r=1/zi.setFromMatrixColumn(e,1).length(),o=1/zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,g=o*h,v=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=g+v*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=v+g*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,g=c*h,v=l*u,_=l*h;t[0]=d+_*a,t[4]=v*a-g,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=g*a-v,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,g=c*h,v=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=v+g*a,t[1]=g+v*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,g=o*h,v=a*u,_=a*h;t[0]=c*u,t[4]=v*l-g,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=g*l-v,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,g=o*l,v=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=v*h+g,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=g*h+v,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*c,g=o*l,v=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=g*h-v,t[2]=v*h-g,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xf,e,jf)}lookAt(e,t,n){const s=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),ii.crossVectors(n,yn),ii.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),ii.crossVectors(n,yn)),ii.normalize(),Hs.crossVectors(yn,ii),s[0]=ii.x,s[4]=Hs.x,s[8]=yn.x,s[1]=ii.y,s[5]=Hs.y,s[9]=yn.y,s[2]=ii.z,s[6]=Hs.z,s[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],g=n[13],v=n[2],_=n[6],p=n[10],f=n[14],b=n[3],x=n[7],R=n[11],S=n[15],y=s[0],C=s[4],D=s[8],O=s[12],M=s[1],P=s[5],H=s[9],Y=s[13],L=s[2],V=s[6],q=s[10],ue=s[14],se=s[3],ae=s[7],ie=s[11],he=s[15];return r[0]=o*y+a*M+c*L+l*se,r[4]=o*C+a*P+c*V+l*ae,r[8]=o*D+a*H+c*q+l*ie,r[12]=o*O+a*Y+c*ue+l*he,r[1]=u*y+h*M+d*L+g*se,r[5]=u*C+h*P+d*V+g*ae,r[9]=u*D+h*H+d*q+g*ie,r[13]=u*O+h*Y+d*ue+g*he,r[2]=v*y+_*M+p*L+f*se,r[6]=v*C+_*P+p*V+f*ae,r[10]=v*D+_*H+p*q+f*ie,r[14]=v*O+_*Y+p*ue+f*he,r[3]=b*y+x*M+R*L+S*se,r[7]=b*C+x*P+R*V+S*ae,r[11]=b*D+x*H+R*q+S*ie,r[15]=b*O+x*Y+R*ue+S*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],g=e[14],v=e[3],_=e[7],p=e[11],f=e[15];return v*(+r*c*h-s*l*h-r*a*d+n*l*d+s*a*g-n*c*g)+_*(+t*c*g-t*l*d+r*o*d-s*o*g+s*l*u-r*c*u)+p*(+t*l*h-t*a*g-r*o*h+n*o*g+r*a*u-n*l*u)+f*(-s*a*u-t*c*h+t*a*d+s*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],g=e[11],v=e[12],_=e[13],p=e[14],f=e[15],b=h*p*l-_*d*l+_*c*g-a*p*g-h*c*f+a*d*f,x=v*d*l-u*p*l-v*c*g+o*p*g+u*c*f-o*d*f,R=u*_*l-v*h*l+v*a*g-o*_*g-u*a*f+o*h*f,S=v*h*c-u*_*c-v*a*d+o*_*d+u*a*p-o*h*p,y=t*b+n*x+s*R+r*S;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/y;return e[0]=b*C,e[1]=(_*d*r-h*p*r-_*s*g+n*p*g+h*s*f-n*d*f)*C,e[2]=(a*p*r-_*c*r+_*s*l-n*p*l-a*s*f+n*c*f)*C,e[3]=(h*c*r-a*d*r-h*s*l+n*d*l+a*s*g-n*c*g)*C,e[4]=x*C,e[5]=(u*p*r-v*d*r+v*s*g-t*p*g-u*s*f+t*d*f)*C,e[6]=(v*c*r-o*p*r-v*s*l+t*p*l+o*s*f-t*c*f)*C,e[7]=(o*d*r-u*c*r+u*s*l-t*d*l-o*s*g+t*c*g)*C,e[8]=R*C,e[9]=(v*h*r-u*_*r-v*n*g+t*_*g+u*n*f-t*h*f)*C,e[10]=(o*_*r-v*a*r+v*n*l-t*_*l-o*n*f+t*a*f)*C,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*g-t*a*g)*C,e[12]=S*C,e[13]=(u*_*s-v*h*s+v*n*d-t*_*d-u*n*p+t*h*p)*C,e[14]=(v*a*s-o*_*s-v*n*c+t*_*c+o*n*p-t*a*p)*C,e[15]=(o*h*s-u*a*s+u*n*c-t*h*c-o*n*d+t*a*d)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,g=r*u,v=r*h,_=o*u,p=o*h,f=a*h,b=c*l,x=c*u,R=c*h,S=n.x,y=n.y,C=n.z;return s[0]=(1-(_+f))*S,s[1]=(g+R)*S,s[2]=(v-x)*S,s[3]=0,s[4]=(g-R)*y,s[5]=(1-(d+f))*y,s[6]=(p+b)*y,s[7]=0,s[8]=(v+x)*C,s[9]=(p-b)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=zi.set(s[0],s[1],s[2]).length();const o=zi.set(s[4],s[5],s[6]).length(),a=zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ln.copy(this);const l=1/r,u=1/o,h=1/a;return Ln.elements[0]*=l,Ln.elements[1]*=l,Ln.elements[2]*=l,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=h,Ln.elements[9]*=h,Ln.elements[10]*=h,t.setFromRotationMatrix(Ln),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Jn){const c=this.elements,l=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let g,v;if(a===Jn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===br)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Jn){const c=this.elements,l=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*l,g=(n+s)*u;let v,_;if(a===Jn)v=(o+r)*h,_=-2*h;else if(a===br)v=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=_,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const zi=new we,Ln=new zt,Xf=new we(0,0,0),jf=new we(1,1,1),ii=new we,Hs=new we,yn=new we,El=new zt,Ml=new Pi;class Cr{constructor(e=0,t=0,n=0,s=Cr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(ln(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ln(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ln(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ln(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-ln(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return El.makeRotationFromQuaternion(e),this.setFromRotationMatrix(El,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ml.setFromEuler(this),this.setFromQuaternion(Ml,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cr.DEFAULT_ORDER="XYZ";class Zu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qf=0;const yl=new we,Vi=new Pi,Wn=new zt,Gs=new we,bs=new we,Yf=new we,Kf=new Pi,Sl=new we(1,0,0),Tl=new we(0,1,0),Al=new we(0,0,1),Zf={type:"added"},Jf={type:"removed"};class Zt extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new we,t=new Cr,n=new Pi,s=new we(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new zt},normalMatrix:{value:new xt}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.premultiply(Vi),this}rotateX(e){return this.rotateOnAxis(Sl,e)}rotateY(e){return this.rotateOnAxis(Tl,e)}rotateZ(e){return this.rotateOnAxis(Al,e)}translateOnAxis(e,t){return yl.copy(e).applyQuaternion(this.quaternion),this.position.add(yl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sl,e)}translateY(e){return this.translateOnAxis(Tl,e)}translateZ(e){return this.translateOnAxis(Al,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gs.copy(e):Gs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(bs,Gs,this.up):Wn.lookAt(Gs,bs,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),Vi.setFromRotationMatrix(Wn),this.quaternion.premultiply(Vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Zf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,e,Yf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,Kf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),g=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),g.length>0&&(n.animations=g),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Zt.DEFAULT_UP=new we(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new we,Xn=new we,Zr=new we,jn=new we,Hi=new we,Gi=new we,wl=new we,Jr=new we,$r=new we,Qr=new we;class Nn{constructor(e=new we,t=new we,n=new we){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Dn.subVectors(e,t),s.cross(Dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Dn.subVectors(s,t),Xn.subVectors(n,t),Zr.subVectors(e,t);const o=Dn.dot(Dn),a=Dn.dot(Xn),c=Dn.dot(Zr),l=Xn.dot(Xn),u=Xn.dot(Zr),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,g=(l*c-a*u)*d,v=(o*u-a*c)*d;return r.set(1-g-v,v,g)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,jn.x),c.addScaledVector(o,jn.y),c.addScaledVector(a,jn.z),c)}static isFrontFacing(e,t,n,s){return Dn.subVectors(n,t),Xn.subVectors(e,t),Dn.cross(Xn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),Dn.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Nn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Hi.subVectors(s,n),Gi.subVectors(r,n),Jr.subVectors(e,n);const c=Hi.dot(Jr),l=Gi.dot(Jr);if(c<=0&&l<=0)return t.copy(n);$r.subVectors(e,s);const u=Hi.dot($r),h=Gi.dot($r);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Hi,o);Qr.subVectors(e,r);const g=Hi.dot(Qr),v=Gi.dot(Qr);if(v>=0&&g<=v)return t.copy(r);const _=g*l-c*v;if(_<=0&&l>=0&&v<=0)return a=l/(l-v),t.copy(n).addScaledVector(Gi,a);const p=u*v-g*h;if(p<=0&&h-u>=0&&g-v>=0)return wl.subVectors(r,s),a=(h-u)/(h-u+(g-v)),t.copy(s).addScaledVector(wl,a);const f=1/(p+_+d);return o=_*f,a=d*f,t.copy(n).addScaledVector(Hi,o).addScaledVector(Gi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Ws={h:0,s:0,l:0};function eo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class _t{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=At.workingColorSpace){return this.r=e,this.g=t,this.b=n,At.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=At.workingColorSpace){if(e=Of(e,1),t=ln(t,0,1),n=ln(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=eo(o,r,e+1/3),this.g=eo(o,r,e),this.b=eo(o,r,e-1/3)}return At.toWorkingColorSpace(this,s),this}setStyle(e,t=Yt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const n=Ju[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}copyLinearToSRGB(e){return this.r=Hr(e.r),this.g=Hr(e.g),this.b=Hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return At.fromWorkingColorSpace(Qt.copy(this),e),Math.round(ln(Qt.r*255,0,255))*65536+Math.round(ln(Qt.g*255,0,255))*256+Math.round(ln(Qt.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.fromWorkingColorSpace(Qt.copy(this),t);const n=Qt.r,s=Qt.g,r=Qt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=At.workingColorSpace){return At.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Yt){At.fromWorkingColorSpace(Qt.copy(this),e);const t=Qt.r,n=Qt.g,s=Qt.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(si),this.setHSL(si.h+e,si.s+t,si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(Ws);const n=zr(si.h,Ws.h,t),s=zr(si.s,Ws.s,t),r=zr(si.l,Ws.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new _t;_t.NAMES=Ju;let $f=0;class fs extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=Ds(),this.name="",this.type="Material",this.blending=ss,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vo,this.blendDst=xo,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vo&&(n.blendSrc=this.blendSrc),this.blendDst!==xo&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_r&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Mr extends fs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ro,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kt=new we,Xs=new ut;class Bn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=pl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return rs("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xs.fromBufferAttribute(this,t),Xs.applyMatrix3(e),this.setXY(t,Xs.x,Xs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gs(t,this.array)),t}setX(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gs(t,this.array)),t}setY(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gs(t,this.array)),t}setW(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array),s=dn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array),s=dn(s,this.array),r=dn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pl&&(e.usage=this.usage),e}}class $u extends Bn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Qu extends Bn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ct extends Bn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Qf=0;const wn=new zt,to=new Zt,Wi=new we,Sn=new Is,Es=new Is,Xt=new we;class Kt extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ju(e)?Qu:$u)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new xt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,n){return wn.makeTranslation(e,t,n),this.applyMatrix4(wn),this}scale(e,t,n){return wn.makeScale(e,t,n),this.applyMatrix4(wn),this}lookAt(e){return to.lookAt(e),to.updateMatrix(),this.applyMatrix4(to.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Is);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new we(-1/0,-1/0,-1/0),new we(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new we,1/0);return}if(e){const n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Es.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(Sn.min,Es.min),Sn.expandByPoint(Xt),Xt.addVectors(Sn.max,Es.max),Sn.expandByPoint(Xt)):(Sn.expandByPoint(Es.min),Sn.expandByPoint(Es.max))}Sn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Xt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Xt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Xt.fromBufferAttribute(a,l),c&&(Wi.fromBufferAttribute(e,l),Xt.add(Wi)),s=Math.max(s,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let M=0;M<a;M++)l[M]=new we,u[M]=new we;const h=new we,d=new we,g=new we,v=new ut,_=new ut,p=new ut,f=new we,b=new we;function x(M,P,H){h.fromArray(s,M*3),d.fromArray(s,P*3),g.fromArray(s,H*3),v.fromArray(o,M*2),_.fromArray(o,P*2),p.fromArray(o,H*2),d.sub(h),g.sub(h),_.sub(v),p.sub(v);const Y=1/(_.x*p.y-p.x*_.y);isFinite(Y)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(g,-_.y).multiplyScalar(Y),b.copy(g).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(Y),l[M].add(f),l[P].add(f),l[H].add(f),u[M].add(b),u[P].add(b),u[H].add(b))}let R=this.groups;R.length===0&&(R=[{start:0,count:n.length}]);for(let M=0,P=R.length;M<P;++M){const H=R[M],Y=H.start,L=H.count;for(let V=Y,q=Y+L;V<q;V+=3)x(n[V+0],n[V+1],n[V+2])}const S=new we,y=new we,C=new we,D=new we;function O(M){C.fromArray(r,M*3),D.copy(C);const P=l[M];S.copy(P),S.sub(C.multiplyScalar(C.dot(P))).normalize(),y.crossVectors(D,P);const Y=y.dot(u[M])<0?-1:1;c[M*4]=S.x,c[M*4+1]=S.y,c[M*4+2]=S.z,c[M*4+3]=Y}for(let M=0,P=R.length;M<P;++M){const H=R[M],Y=H.start,L=H.count;for(let V=Y,q=Y+L;V<q;V+=3)O(n[V+0]),O(n[V+1]),O(n[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,g=n.count;d<g;d++)n.setXYZ(d,0,0,0);const s=new we,r=new we,o=new we,a=new we,c=new we,l=new we,u=new we,h=new we;if(e)for(let d=0,g=e.count;d<g;d+=3){const v=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,g=t.count;d<g;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let g=0,v=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?g=c[_]*a.data.stride+a.offset:g=c[_]*u;for(let f=0;f<u;f++)d[v++]=l[g++]}return new Bn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kt,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],g=e(d,n);c.push(g)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const g=l[h];u.push(g.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,g=h.length;d<g;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cl=new zt,vi=new Do,js=new wr,Rl=new we,Xi=new we,ji=new we,qi=new we,no=new we,qs=new we,Ys=new ut,Ks=new ut,Zs=new ut,Pl=new we,Ll=new we,Dl=new we,Js=new we,$s=new we;class jt extends Zt{constructor(e=new Kt,t=new Mr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){qs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(no.fromBufferAttribute(h,e),o?qs.addScaledVector(no,u):qs.addScaledVector(no.sub(t),u))}t.add(qs)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(r),vi.copy(e.ray).recast(e.near),!(js.containsPoint(vi.origin)===!1&&(vi.intersectSphere(js,Rl)===null||vi.origin.distanceToSquared(Rl)>(e.far-e.near)**2))&&(Cl.copy(r).invert(),vi.copy(e.ray).applyMatrix4(Cl),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=d.length;v<_;v++){const p=d[v],f=o[p.materialIndex],b=Math.max(p.start,g.start),x=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let R=b,S=x;R<S;R+=3){const y=a.getX(R),C=a.getX(R+1),D=a.getX(R+2);s=Qs(this,f,e,n,l,u,h,y,C,D),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const v=Math.max(0,g.start),_=Math.min(a.count,g.start+g.count);for(let p=v,f=_;p<f;p+=3){const b=a.getX(p),x=a.getX(p+1),R=a.getX(p+2);s=Qs(this,o,e,n,l,u,h,b,x,R),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let v=0,_=d.length;v<_;v++){const p=d[v],f=o[p.materialIndex],b=Math.max(p.start,g.start),x=Math.min(c.count,Math.min(p.start+p.count,g.start+g.count));for(let R=b,S=x;R<S;R+=3){const y=R,C=R+1,D=R+2;s=Qs(this,f,e,n,l,u,h,y,C,D),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const v=Math.max(0,g.start),_=Math.min(c.count,g.start+g.count);for(let p=v,f=_;p<f;p+=3){const b=p,x=p+1,R=p+2;s=Qs(this,o,e,n,l,u,h,b,x,R),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function ed(i,e,t,n,s,r,o,a){let c;if(e.side===xn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===fi,a),c===null)return null;$s.copy(a),$s.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo($s);return l<t.near||l>t.far?null:{distance:l,point:$s.clone(),object:i}}function Qs(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Xi),i.getVertexPosition(c,ji),i.getVertexPosition(l,qi);const u=ed(i,e,t,n,Xi,ji,qi,Js);if(u){s&&(Ys.fromBufferAttribute(s,a),Ks.fromBufferAttribute(s,c),Zs.fromBufferAttribute(s,l),u.uv=Nn.getInterpolation(Js,Xi,ji,qi,Ys,Ks,Zs,new ut)),r&&(Ys.fromBufferAttribute(r,a),Ks.fromBufferAttribute(r,c),Zs.fromBufferAttribute(r,l),u.uv1=Nn.getInterpolation(Js,Xi,ji,qi,Ys,Ks,Zs,new ut),u.uv2=u.uv1),o&&(Pl.fromBufferAttribute(o,a),Ll.fromBufferAttribute(o,c),Dl.fromBufferAttribute(o,l),u.normal=Nn.getInterpolation(Js,Xi,ji,qi,Pl,Ll,Dl,new we),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new we,materialIndex:0};Nn.getNormal(Xi,ji,qi,h.normal),u.face=h}return u}class Li extends Kt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,g=0;v("z","y","x",-1,-1,n,t,e,o,r,0),v("z","y","x",1,-1,n,t,-e,o,r,1),v("x","z","y",1,1,e,n,t,s,o,2),v("x","z","y",1,-1,e,n,-t,s,o,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(h,2));function v(_,p,f,b,x,R,S,y,C,D,O){const M=R/C,P=S/D,H=R/2,Y=S/2,L=y/2,V=C+1,q=D+1;let ue=0,se=0;const ae=new we;for(let ie=0;ie<q;ie++){const he=ie*P-Y;for(let ee=0;ee<V;ee++){const ce=ee*M-H;ae[_]=ce*b,ae[p]=he*x,ae[f]=L,l.push(ae.x,ae.y,ae.z),ae[_]=0,ae[p]=0,ae[f]=y>0?1:-1,u.push(ae.x,ae.y,ae.z),h.push(ee/C),h.push(1-ie/D),ue+=1}}for(let ie=0;ie<D;ie++)for(let he=0;he<C;he++){const ee=d+he+V*ie,ce=d+he+V*(ie+1),F=d+(he+1)+V*(ie+1),Q=d+(he+1)+V*ie;c.push(ee,ce,Q),c.push(ce,F,Q),se+=6}a.addGroup(g,se,O),g+=se,d+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function us(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function rn(i){const e={};for(let t=0;t<i.length;t++){const n=us(i[t]);for(const s in n)e[s]=n[s]}return e}function td(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function eh(i){return i.getRenderTarget()===null?i.outputColorSpace:At.workingColorSpace}const nd={clone:us,merge:rn};var id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends fs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=id,this.fragmentShader=sd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=td(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class th extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new we,Il=new ut,Ul=new ut;class Cn extends th{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=To*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ss*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return To*2*Math.atan(Math.tan(Ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ri.x,ri.y).multiplyScalar(-e/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-e/ri.z)}getViewSize(e,t){return this.getViewBounds(e,Il,Ul),t.subVectors(Ul,Il)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ss*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yi=-90,Ki=1;class rd extends Zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Cn(Yi,Ki,e,t);s.layers=this.layers,this.add(s);const r=new Cn(Yi,Ki,e,t);r.layers=this.layers,this.add(r);const o=new Cn(Yi,Ki,e,t);o.layers=this.layers,this.add(o);const a=new Cn(Yi,Ki,e,t);a.layers=this.layers,this.add(a);const c=new Cn(Yi,Ki,e,t);c.layers=this.layers,this.add(c);const l=new Cn(Yi,Ki,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,g),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class nh extends nn{constructor(e,t,n,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:as,super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class od extends Ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(rs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ci?Yt:Rn),this.texture=new nh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Li(5,5,5),r=new di({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:li});r.uniforms.tEquirect.value=t;const o=new jt(s,r),a=t.minFilter;return t.minFilter===Si&&(t.minFilter=pn),new rd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const io=new we,ad=new we,ld=new xt;class Kn{constructor(e=new we(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=io.subVectors(n,t).cross(ad.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(io),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ld.getNormalMatrix(e),s=this.coplanarPoint(io).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new wr,er=new we;class Io{constructor(e=new Kn,t=new Kn,n=new Kn,s=new Kn,r=new Kn,o=new Kn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jn){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],g=s[8],v=s[9],_=s[10],p=s[11],f=s[12],b=s[13],x=s[14],R=s[15];if(n[0].setComponents(c-r,d-l,p-g,R-f).normalize(),n[1].setComponents(c+r,d+l,p+g,R+f).normalize(),n[2].setComponents(c+o,d+u,p+v,R+b).normalize(),n[3].setComponents(c-o,d-u,p-v,R-b).normalize(),n[4].setComponents(c-a,d-h,p-_,R-x).normalize(),t===Jn)n[5].setComponents(c+a,d+h,p+_,R+x).normalize();else if(t===br)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(e){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(er.x=s.normal.x>0?e.max.x:e.min.x,er.y=s.normal.y>0?e.max.y:e.min.y,er.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(er)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ih(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function cd(i,e){const t=e.isWebGL2,n=new WeakMap;function s(l,u){const h=l.array,d=l.usage,g=h.byteLength,v=i.createBuffer();i.bindBuffer(u,v),i.bufferData(u,h,d),l.onUploadCallback();let _;if(h instanceof Float32Array)_=i.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=i.SHORT;else if(h instanceof Uint32Array)_=i.UNSIGNED_INT;else if(h instanceof Int32Array)_=i.INT;else if(h instanceof Int8Array)_=i.BYTE;else if(h instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:g}}function r(l,u,h){const d=u.array,g=u._updateRange,v=u.updateRanges;if(i.bindBuffer(h,l),g.count===-1&&v.length===0&&i.bufferSubData(h,0,d),v.length!==0){for(let _=0,p=v.length;_<p;_++){const f=v[_];t?i.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}g.count!==-1&&(t?i.bufferSubData(h,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count):i.bufferSubData(h,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count)),g.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);if(h===void 0)n.set(l,s(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,l,u),h.version=l.version}}return{get:o,remove:a,update:c}}class hs extends Kt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,g=[],v=[],_=[],p=[];for(let f=0;f<u;f++){const b=f*d-o;for(let x=0;x<l;x++){const R=x*h-r;v.push(R,-b,0),_.push(0,0,1),p.push(x/a),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<a;b++){const x=b+l*f,R=b+l*(f+1),S=b+1+l*(f+1),y=b+1+l*f;g.push(x,R,y),g.push(R,S,y)}this.setIndex(g),this.setAttribute("position",new Ct(v,3)),this.setAttribute("normal",new Ct(_,3)),this.setAttribute("uv",new Ct(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.width,e.height,e.widthSegments,e.heightSegments)}}var ud=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hd=`#ifdef USE_ALPHAHASH
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
#endif`,fd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,md=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_d=`#ifdef USE_AOMAP
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
#endif`,gd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vd=`#ifdef USE_BATCHING
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
#endif`,xd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,bd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ed=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Md=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yd=`#ifdef USE_IRIDESCENCE
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
#endif`,Sd=`#ifdef USE_BUMPMAP
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
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Id=`#define PI 3.141592653589793
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
} // validated`,Ud=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nd=`vec3 transformedNormal = objectNormal;
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
#endif`,Od=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vd=`
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
}`,Hd=`#ifdef USE_ENVMAP
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
#endif`,Gd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wd=`#ifdef USE_ENVMAP
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
#endif`,Xd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jd=`#ifdef USE_ENVMAP
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
#endif`,qd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jd=`#ifdef USE_GRADIENTMAP
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
}`,$d=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Qd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ep=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,np=`uniform bool receiveShadow;
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
#endif`,ip=`#ifdef USE_ENVMAP
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
#endif`,sp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,op=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lp=`PhysicalMaterial material;
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
#endif`,cp=`struct PhysicalMaterial {
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
}`,up=`
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
#endif`,hp=`#if defined( RE_IndirectDiffuse )
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
#endif`,fp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_p=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bp=`#if defined( USE_POINTS_UV )
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
#endif`,Ep=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sp=`#ifdef USE_MORPHNORMALS
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
#endif`,Tp=`#ifdef USE_MORPHTARGETS
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
#endif`,Ap=`#ifdef USE_MORPHTARGETS
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
#endif`,wp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dp=`#ifdef USE_NORMALMAP
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
#endif`,Ip=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Up=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Np=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yp=`float getShadowMask() {
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
}`,Kp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zp=`#ifdef USE_SKINNING
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
#endif`,Jp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$p=`#ifdef USE_SKINNING
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
#endif`,Qp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,em=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,im=`#ifdef USE_TRANSMISSION
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
#endif`,sm=`#ifdef USE_TRANSMISSION
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
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,um=`uniform sampler2D t2D;
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
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`#include <common>
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
}`,_m=`#if DEPTH_PACKING == 3200
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
}`,gm=`#define DISTANCE
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
}`,vm=`#define DISTANCE
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
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`uniform float scale;
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
}`,Mm=`uniform vec3 diffuse;
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
}`,ym=`#include <common>
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
}`,Sm=`uniform vec3 diffuse;
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
}`,Tm=`#define LAMBERT
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
}`,Am=`#define LAMBERT
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
}`,wm=`#define MATCAP
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
}`,Cm=`#define MATCAP
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
}`,Rm=`#define NORMAL
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
}`,Pm=`#define NORMAL
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
}`,Lm=`#define PHONG
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
}`,Dm=`#define PHONG
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
}`,Im=`#define STANDARD
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
}`,Um=`#define STANDARD
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
}`,Nm=`#define TOON
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
}`,Om=`#define TOON
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
}`,Fm=`uniform float size;
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
}`,Bm=`uniform vec3 diffuse;
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
}`,km=`#include <common>
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
}`,zm=`uniform vec3 color;
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
}`,Vm=`uniform float rotation;
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
}`,Hm=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:ud,alphahash_pars_fragment:hd,alphamap_fragment:fd,alphamap_pars_fragment:dd,alphatest_fragment:pd,alphatest_pars_fragment:md,aomap_fragment:_d,aomap_pars_fragment:gd,batching_pars_vertex:vd,batching_vertex:xd,begin_vertex:bd,beginnormal_vertex:Ed,bsdfs:Md,iridescence_fragment:yd,bumpmap_pars_fragment:Sd,clipping_planes_fragment:Td,clipping_planes_pars_fragment:Ad,clipping_planes_pars_vertex:wd,clipping_planes_vertex:Cd,color_fragment:Rd,color_pars_fragment:Pd,color_pars_vertex:Ld,color_vertex:Dd,common:Id,cube_uv_reflection_fragment:Ud,defaultnormal_vertex:Nd,displacementmap_pars_vertex:Od,displacementmap_vertex:Fd,emissivemap_fragment:Bd,emissivemap_pars_fragment:kd,colorspace_fragment:zd,colorspace_pars_fragment:Vd,envmap_fragment:Hd,envmap_common_pars_fragment:Gd,envmap_pars_fragment:Wd,envmap_pars_vertex:Xd,envmap_physical_pars_fragment:ip,envmap_vertex:jd,fog_vertex:qd,fog_pars_vertex:Yd,fog_fragment:Kd,fog_pars_fragment:Zd,gradientmap_pars_fragment:Jd,lightmap_fragment:$d,lightmap_pars_fragment:Qd,lights_lambert_fragment:ep,lights_lambert_pars_fragment:tp,lights_pars_begin:np,lights_toon_fragment:sp,lights_toon_pars_fragment:rp,lights_phong_fragment:op,lights_phong_pars_fragment:ap,lights_physical_fragment:lp,lights_physical_pars_fragment:cp,lights_fragment_begin:up,lights_fragment_maps:hp,lights_fragment_end:fp,logdepthbuf_fragment:dp,logdepthbuf_pars_fragment:pp,logdepthbuf_pars_vertex:mp,logdepthbuf_vertex:_p,map_fragment:gp,map_pars_fragment:vp,map_particle_fragment:xp,map_particle_pars_fragment:bp,metalnessmap_fragment:Ep,metalnessmap_pars_fragment:Mp,morphcolor_vertex:yp,morphnormal_vertex:Sp,morphtarget_pars_vertex:Tp,morphtarget_vertex:Ap,normal_fragment_begin:wp,normal_fragment_maps:Cp,normal_pars_fragment:Rp,normal_pars_vertex:Pp,normal_vertex:Lp,normalmap_pars_fragment:Dp,clearcoat_normal_fragment_begin:Ip,clearcoat_normal_fragment_maps:Up,clearcoat_pars_fragment:Np,iridescence_pars_fragment:Op,opaque_fragment:Fp,packing:Bp,premultiplied_alpha_fragment:kp,project_vertex:zp,dithering_fragment:Vp,dithering_pars_fragment:Hp,roughnessmap_fragment:Gp,roughnessmap_pars_fragment:Wp,shadowmap_pars_fragment:Xp,shadowmap_pars_vertex:jp,shadowmap_vertex:qp,shadowmask_pars_fragment:Yp,skinbase_vertex:Kp,skinning_pars_vertex:Zp,skinning_vertex:Jp,skinnormal_vertex:$p,specularmap_fragment:Qp,specularmap_pars_fragment:em,tonemapping_fragment:tm,tonemapping_pars_fragment:nm,transmission_fragment:im,transmission_pars_fragment:sm,uv_pars_fragment:rm,uv_pars_vertex:om,uv_vertex:am,worldpos_vertex:lm,background_vert:cm,background_frag:um,backgroundCube_vert:hm,backgroundCube_frag:fm,cube_vert:dm,cube_frag:pm,depth_vert:mm,depth_frag:_m,distanceRGBA_vert:gm,distanceRGBA_frag:vm,equirect_vert:xm,equirect_frag:bm,linedashed_vert:Em,linedashed_frag:Mm,meshbasic_vert:ym,meshbasic_frag:Sm,meshlambert_vert:Tm,meshlambert_frag:Am,meshmatcap_vert:wm,meshmatcap_frag:Cm,meshnormal_vert:Rm,meshnormal_frag:Pm,meshphong_vert:Lm,meshphong_frag:Dm,meshphysical_vert:Im,meshphysical_frag:Um,meshtoon_vert:Nm,meshtoon_frag:Om,points_vert:Fm,points_frag:Bm,shadow_vert:km,shadow_frag:zm,sprite_vert:Vm,sprite_frag:Hm},Je={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},Fn={basic:{uniforms:rn([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:rn([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,Je.lights,{emissive:{value:new _t(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:rn([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,Je.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:rn([Je.common,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.roughnessmap,Je.metalnessmap,Je.fog,Je.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:rn([Je.common,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.gradientmap,Je.fog,Je.lights,{emissive:{value:new _t(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:rn([Je.common,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:rn([Je.points,Je.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:rn([Je.common,Je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:rn([Je.common,Je.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:rn([Je.common,Je.bumpmap,Je.normalmap,Je.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:rn([Je.sprite,Je.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:rn([Je.common,Je.displacementmap,{referencePosition:{value:new we},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:rn([Je.lights,Je.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Fn.physical={uniforms:rn([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const tr={r:0,b:0,g:0};function Gm(i,e,t,n,s,r,o){const a=new _t(0);let c=r===!0?0:1,l,u,h=null,d=0,g=null;function v(p,f){let b=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,c):x&&x.isColor&&(_(x,1),b=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Tr)?(u===void 0&&(u=new jt(new Li(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:us(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,y,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=At.getTransfer(x.colorSpace)!==Rt,(h!==x||d!==x.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,g=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new jt(new hs(2,2),new di({name:"BackgroundMaterial",uniforms:us(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=At.getTransfer(x.colorSpace)!==Rt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||g!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,g=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,f){p.getRGB(tr,eh(i)),n.buffers.color.setClear(tr.r,tr.g,tr.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),c=f,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,_(a,c)},render:v}}function Wm(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=p(null);let l=c,u=!1;function h(L,V,q,ue,se){let ae=!1;if(o){const ie=_(ue,q,V);l!==ie&&(l=ie,g(l.object)),ae=f(L,ue,q,se),ae&&b(L,ue,q,se)}else{const ie=V.wireframe===!0;(l.geometry!==ue.id||l.program!==q.id||l.wireframe!==ie)&&(l.geometry=ue.id,l.program=q.id,l.wireframe=ie,ae=!0)}se!==null&&t.update(se,i.ELEMENT_ARRAY_BUFFER),(ae||u)&&(u=!1,D(L,V,q,ue),se!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(se).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function g(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function v(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,V,q){const ue=q.wireframe===!0;let se=a[L.id];se===void 0&&(se={},a[L.id]=se);let ae=se[V.id];ae===void 0&&(ae={},se[V.id]=ae);let ie=ae[ue];return ie===void 0&&(ie=p(d()),ae[ue]=ie),ie}function p(L){const V=[],q=[],ue=[];for(let se=0;se<s;se++)V[se]=0,q[se]=0,ue[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:q,attributeDivisors:ue,object:L,attributes:{},index:null}}function f(L,V,q,ue){const se=l.attributes,ae=V.attributes;let ie=0;const he=q.getAttributes();for(const ee in he)if(he[ee].location>=0){const F=se[ee];let Q=ae[ee];if(Q===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),F===void 0||F.attribute!==Q||Q&&F.data!==Q.data)return!0;ie++}return l.attributesNum!==ie||l.index!==ue}function b(L,V,q,ue){const se={},ae=V.attributes;let ie=0;const he=q.getAttributes();for(const ee in he)if(he[ee].location>=0){let F=ae[ee];F===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(F=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(F=L.instanceColor));const Q={};Q.attribute=F,F&&F.data&&(Q.data=F.data),se[ee]=Q,ie++}l.attributes=se,l.attributesNum=ie,l.index=ue}function x(){const L=l.newAttributes;for(let V=0,q=L.length;V<q;V++)L[V]=0}function R(L){S(L,0)}function S(L,V){const q=l.newAttributes,ue=l.enabledAttributes,se=l.attributeDivisors;q[L]=1,ue[L]===0&&(i.enableVertexAttribArray(L),ue[L]=1),se[L]!==V&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,V),se[L]=V)}function y(){const L=l.newAttributes,V=l.enabledAttributes;for(let q=0,ue=V.length;q<ue;q++)V[q]!==L[q]&&(i.disableVertexAttribArray(q),V[q]=0)}function C(L,V,q,ue,se,ae,ie){ie===!0?i.vertexAttribIPointer(L,V,q,se,ae):i.vertexAttribPointer(L,V,q,ue,se,ae)}function D(L,V,q,ue){if(n.isWebGL2===!1&&(L.isInstancedMesh||ue.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const se=ue.attributes,ae=q.getAttributes(),ie=V.defaultAttributeValues;for(const he in ae){const ee=ae[he];if(ee.location>=0){let ce=se[he];if(ce===void 0&&(he==="instanceMatrix"&&L.instanceMatrix&&(ce=L.instanceMatrix),he==="instanceColor"&&L.instanceColor&&(ce=L.instanceColor)),ce!==void 0){const F=ce.normalized,Q=ce.itemSize,ve=t.get(ce);if(ve===void 0)continue;const U=ve.buffer,G=ve.type,oe=ve.bytesPerElement,pe=n.isWebGL2===!0&&(G===i.INT||G===i.UNSIGNED_INT||ce.gpuType===Ou);if(ce.isInterleavedBufferAttribute){const Ce=ce.data,W=Ce.stride,Le=ce.offset;if(Ce.isInstancedInterleavedBuffer){for(let xe=0;xe<ee.locationSize;xe++)S(ee.location+xe,Ce.meshPerAttribute);L.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let xe=0;xe<ee.locationSize;xe++)R(ee.location+xe);i.bindBuffer(i.ARRAY_BUFFER,U);for(let xe=0;xe<ee.locationSize;xe++)C(ee.location+xe,Q/ee.locationSize,G,F,W*oe,(Le+Q/ee.locationSize*xe)*oe,pe)}else{if(ce.isInstancedBufferAttribute){for(let Ce=0;Ce<ee.locationSize;Ce++)S(ee.location+Ce,ce.meshPerAttribute);L.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ce=0;Ce<ee.locationSize;Ce++)R(ee.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,U);for(let Ce=0;Ce<ee.locationSize;Ce++)C(ee.location+Ce,Q/ee.locationSize,G,F,Q*oe,Q/ee.locationSize*Ce*oe,pe)}}else if(ie!==void 0){const F=ie[he];if(F!==void 0)switch(F.length){case 2:i.vertexAttrib2fv(ee.location,F);break;case 3:i.vertexAttrib3fv(ee.location,F);break;case 4:i.vertexAttrib4fv(ee.location,F);break;default:i.vertexAttrib1fv(ee.location,F)}}}}y()}function O(){H();for(const L in a){const V=a[L];for(const q in V){const ue=V[q];for(const se in ue)v(ue[se].object),delete ue[se];delete V[q]}delete a[L]}}function M(L){if(a[L.id]===void 0)return;const V=a[L.id];for(const q in V){const ue=V[q];for(const se in ue)v(ue[se].object),delete ue[se];delete V[q]}delete a[L.id]}function P(L){for(const V in a){const q=a[V];if(q[L.id]===void 0)continue;const ue=q[L.id];for(const se in ue)v(ue[se].object),delete ue[se];delete q[L.id]}}function H(){Y(),u=!0,l!==c&&(l=c,g(l.object))}function Y(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:H,resetDefaultState:Y,dispose:O,releaseStatesOfGeometry:M,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:R,disableUnusedAttributes:y}}function Xm(i,e,t,n){const s=n.isWebGL2;let r;function o(u){r=u}function a(u,h){i.drawArrays(r,u,h),t.update(h,r,1)}function c(u,h,d){if(d===0)return;let g,v;if(s)g=i,v="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[v](r,u,h,d),t.update(h,r,d)}function l(u,h,d){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<d;v++)this.render(u[v],h[v]);else{g.multiDrawArraysWEBGL(r,u,0,h,0,d);let v=0;for(let _=0;_<d;_++)v+=h[_];t.update(v,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function jm(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,R=o||e.has("OES_texture_float"),S=x&&R,y=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:R,floatVertexTextures:S,maxSamples:y}}function qm(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Kn,a=new xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const g=h.length!==0||d||n!==0||s;return s=d,n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,g){const v=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,f=i.get(h);if(!s||v===null||v.length===0||r&&!p)r?u(null):l();else{const b=r?0:n,x=b*4;let R=f.clippingState||null;c.value=R,R=u(v,d,x,g);for(let S=0;S!==x;++S)R[S]=t[S];f.clippingState=R,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,g,v){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=c.value,v!==!0||p===null){const f=g+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<f)&&(p=new Float32Array(f));for(let x=0,R=g;x!==_;++x,R+=4)o.copy(h[x]).applyMatrix4(b,a),o.normal.toArray(p,R),p[R+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Ym(i){let e=new WeakMap;function t(o,a){return a===bo?o.mapping=as:a===Eo&&(o.mapping=ls),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===bo||a===Eo)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new od(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class sh extends th{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ts=4,Nl=[.125,.215,.35,.446,.526,.582],yi=20,so=new sh,Ol=new _t;let ro=null,oo=0,ao=0;const Ei=(1+Math.sqrt(5))/2,Zi=1/Ei,Fl=[new we(1,1,1),new we(-1,1,1),new we(1,1,-1),new we(-1,1,-1),new we(0,Ei,Zi),new we(0,Ei,-Zi),new we(Zi,0,Ei),new we(-Zi,0,Ei),new we(Ei,Zi,0),new we(-Ei,Zi,0)];class Bl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ro=this._renderer.getRenderTarget(),oo=this._renderer.getActiveCubeFace(),ao=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ro,oo,ao),e.scissorTest=!1,nr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===as||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ro=this._renderer.getRenderTarget(),oo=this._renderer.getActiveCubeFace(),ao=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Ps,format:Un,colorSpace:Qn,depthBuffer:!1},s=kl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Km(r)),this._blurMaterial=Zm(r,e,t)}return s}_compileMaterial(e){const t=new jt(this._lodPlanes[0],e);this._renderer.compile(t,so)}_sceneToCubeUV(e,t,n,s){const a=new Cn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Ol),u.toneMapping=ci,u.autoClear=!1;const g=new Mr({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),v=new jt(new Li,g);let _=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,_=!0):(g.color.copy(Ol),_=!0);for(let f=0;f<6;f++){const b=f%3;b===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):b===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const x=this._cubeSize;nr(s,b*x,f>2?x:0,x,x),u.setRenderTarget(s),_&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===as||e.mapping===ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new jt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;nr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,so)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Fl[(s-1)%Fl.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new jt(this._lodPlanes[s],l),d=l.uniforms,g=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*yi-1),_=r/v,p=isFinite(r)?1+Math.floor(u*_):yi;p>yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${yi}`);const f=[];let b=0;for(let C=0;C<yi;++C){const D=C/_,O=Math.exp(-D*D/2);f.push(O),C===0?b+=O:C<p&&(b+=2*O)}for(let C=0;C<f.length;C++)f[C]=f[C]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=v,d.mipInt.value=x-n;const R=this._sizeLods[s],S=3*R*(s>x-ts?s-x+ts:0),y=4*(this._cubeSize-R);nr(t,S,y,3*R,2*R),c.setRenderTarget(t),c.render(h,so)}}function Km(i){const e=[],t=[],n=[];let s=i;const r=i-ts+1+Nl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-ts?c=Nl[o-i+ts-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],g=6,v=6,_=3,p=2,f=1,b=new Float32Array(_*v*g),x=new Float32Array(p*v*g),R=new Float32Array(f*v*g);for(let y=0;y<g;y++){const C=y%3*2/3-1,D=y>2?0:-1,O=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];b.set(O,_*v*y),x.set(d,p*v*y);const M=[y,y,y,y,y,y];R.set(M,f*v*y)}const S=new Kt;S.setAttribute("position",new Bn(b,_)),S.setAttribute("uv",new Bn(x,p)),S.setAttribute("faceIndex",new Bn(R,f)),e.push(S),s>ts&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function kl(i,e,t){const n=new Ri(i,e,t);return n.texture.mapping=Tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Zm(i,e,t){const n=new Float32Array(yi),s=new we(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Uo(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function zl(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uo(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Vl(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Uo(){return`

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
	`}function Jm(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===bo||c===Eo,u=c===as||c===ls;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Bl(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new Bl(i));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function $m(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Qm(i,e,t,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const _=d.morphAttributes[v];for(let p=0,f=_.length;p<f;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete s[d.id];const g=r.get(d);g&&(e.remove(g),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const v in d)e.update(d[v],i.ARRAY_BUFFER);const g=h.morphAttributes;for(const v in g){const _=g[v];for(let p=0,f=_.length;p<f;p++)e.update(_[p],i.ARRAY_BUFFER)}}function l(h){const d=[],g=h.index,v=h.attributes.position;let _=0;if(g!==null){const b=g.array;_=g.version;for(let x=0,R=b.length;x<R;x+=3){const S=b[x+0],y=b[x+1],C=b[x+2];d.push(S,y,y,C,C,S)}}else if(v!==void 0){const b=v.array;_=v.version;for(let x=0,R=b.length/3-1;x<R;x+=3){const S=x+0,y=x+1,C=x+2;d.push(S,y,y,C,C,S)}}else return;const p=new(ju(d)?Qu:$u)(d,1);p.version=_;const f=r.get(h);f&&e.remove(f),r.set(h,p)}function u(h){const d=r.get(h);if(d){const g=h.index;g!==null&&d.version<g.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function e_(i,e,t,n){const s=n.isWebGL2;let r;function o(g){r=g}let a,c;function l(g){a=g.type,c=g.bytesPerElement}function u(g,v){i.drawElements(r,v,a,g*c),t.update(v,r,1)}function h(g,v,_){if(_===0)return;let p,f;if(s)p=i,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,v,a,g*c,_),t.update(v,r,_)}function d(g,v,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<_;f++)this.render(g[f]/c,v[f]);else{p.multiDrawElementsWEBGL(r,v,0,a,g,0,_);let f=0;for(let b=0;b<_;b++)f+=v[b];t.update(f,r,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function t_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function n_(i,e){return i[0]-e[0]}function i_(i,e){return Math.abs(e[1])-Math.abs(i[1])}function s_(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new qt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=g!==void 0?g.length:0;let _=r.get(u);if(_===void 0||_.count!==v){let L=function(){H.dispose(),r.delete(u),u.removeEventListener("dispose",L)};_!==void 0&&_.texture.dispose();const b=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],y=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let D=0;b===!0&&(D=1),x===!0&&(D=2),R===!0&&(D=3);let O=u.attributes.position.count*D,M=1;O>e.maxTextureSize&&(M=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const P=new Float32Array(O*M*4*v),H=new Ku(P,O,M,v);H.type=Zn,H.needsUpdate=!0;const Y=D*4;for(let V=0;V<v;V++){const q=S[V],ue=y[V],se=C[V],ae=O*M*4*V;for(let ie=0;ie<q.count;ie++){const he=ie*Y;b===!0&&(o.fromBufferAttribute(q,ie),P[ae+he+0]=o.x,P[ae+he+1]=o.y,P[ae+he+2]=o.z,P[ae+he+3]=0),x===!0&&(o.fromBufferAttribute(ue,ie),P[ae+he+4]=o.x,P[ae+he+5]=o.y,P[ae+he+6]=o.z,P[ae+he+7]=0),R===!0&&(o.fromBufferAttribute(se,ie),P[ae+he+8]=o.x,P[ae+he+9]=o.y,P[ae+he+10]=o.z,P[ae+he+11]=se.itemSize===4?o.w:1)}}_={count:v,texture:H,size:new ut(O,M)},r.set(u,_),u.addEventListener("dispose",L)}let p=0;for(let b=0;b<d.length;b++)p+=d[b];const f=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",f),h.getUniforms().setValue(i,"morphTargetInfluences",d),h.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const g=d===void 0?0:d.length;let v=n[u.id];if(v===void 0||v.length!==g){v=[];for(let x=0;x<g;x++)v[x]=[x,0];n[u.id]=v}for(let x=0;x<g;x++){const R=v[x];R[0]=x,R[1]=d[x]}v.sort(i_);for(let x=0;x<8;x++)x<g&&v[x][1]?(a[x][0]=v[x][0],a[x][1]=v[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(n_);const _=u.morphAttributes.position,p=u.morphAttributes.normal;let f=0;for(let x=0;x<8;x++){const R=a[x],S=R[0],y=R[1];S!==Number.MAX_SAFE_INTEGER&&y?(_&&u.getAttribute("morphTarget"+x)!==_[S]&&u.setAttribute("morphTarget"+x,_[S]),p&&u.getAttribute("morphNormal"+x)!==p[S]&&u.setAttribute("morphNormal"+x,p[S]),s[x]=y,f+=y):(_&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),p&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),s[x]=0)}const b=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(i,"morphTargetBaseInfluence",b),h.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function r_(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class rh extends nn{constructor(e,t,n,s,r,o,a,c,l,u){if(u=u!==void 0?u:wi,u!==wi&&u!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===wi&&(n=oi),n===void 0&&u===cs&&(n=Ai),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:on,this.minFilter=c!==void 0?c:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const oh=new nn,ah=new rh(1,1);ah.compareFunction=Xu;const lh=new Ku,ch=new Gf,uh=new nh,Hl=[],Gl=[],Wl=new Float32Array(16),Xl=new Float32Array(9),jl=new Float32Array(4);function ds(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Hl[s];if(r===void 0&&(r=new Float32Array(s),Hl[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Rr(i,e){let t=Gl[e];t===void 0&&(t=new Int32Array(e),Gl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function o_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function a_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2fv(this.addr,e),Ht(t,e)}}function l_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;i.uniform3fv(this.addr,e),Ht(t,e)}}function c_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4fv(this.addr,e),Ht(t,e)}}function u_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,n))return;jl.set(n),i.uniformMatrix2fv(this.addr,!1,jl),Ht(t,n)}}function h_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,n))return;Xl.set(n),i.uniformMatrix3fv(this.addr,!1,Xl),Ht(t,n)}}function f_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,n))return;Wl.set(n),i.uniformMatrix4fv(this.addr,!1,Wl),Ht(t,n)}}function d_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function p_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2iv(this.addr,e),Ht(t,e)}}function m_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3iv(this.addr,e),Ht(t,e)}}function __(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4iv(this.addr,e),Ht(t,e)}}function g_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function v_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2uiv(this.addr,e),Ht(t,e)}}function x_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3uiv(this.addr,e),Ht(t,e)}}function b_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4uiv(this.addr,e),Ht(t,e)}}function E_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?ah:oh;t.setTexture2D(e||r,s)}function M_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ch,s)}function y_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||uh,s)}function S_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||lh,s)}function T_(i){switch(i){case 5126:return o_;case 35664:return a_;case 35665:return l_;case 35666:return c_;case 35674:return u_;case 35675:return h_;case 35676:return f_;case 5124:case 35670:return d_;case 35667:case 35671:return p_;case 35668:case 35672:return m_;case 35669:case 35673:return __;case 5125:return g_;case 36294:return v_;case 36295:return x_;case 36296:return b_;case 35678:case 36198:case 36298:case 36306:case 35682:return E_;case 35679:case 36299:case 36307:return M_;case 35680:case 36300:case 36308:case 36293:return y_;case 36289:case 36303:case 36311:case 36292:return S_}}function A_(i,e){i.uniform1fv(this.addr,e)}function w_(i,e){const t=ds(e,this.size,2);i.uniform2fv(this.addr,t)}function C_(i,e){const t=ds(e,this.size,3);i.uniform3fv(this.addr,t)}function R_(i,e){const t=ds(e,this.size,4);i.uniform4fv(this.addr,t)}function P_(i,e){const t=ds(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function L_(i,e){const t=ds(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function D_(i,e){const t=ds(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function I_(i,e){i.uniform1iv(this.addr,e)}function U_(i,e){i.uniform2iv(this.addr,e)}function N_(i,e){i.uniform3iv(this.addr,e)}function O_(i,e){i.uniform4iv(this.addr,e)}function F_(i,e){i.uniform1uiv(this.addr,e)}function B_(i,e){i.uniform2uiv(this.addr,e)}function k_(i,e){i.uniform3uiv(this.addr,e)}function z_(i,e){i.uniform4uiv(this.addr,e)}function V_(i,e,t){const n=this.cache,s=e.length,r=Rr(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||oh,r[o])}function H_(i,e,t){const n=this.cache,s=e.length,r=Rr(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ch,r[o])}function G_(i,e,t){const n=this.cache,s=e.length,r=Rr(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||uh,r[o])}function W_(i,e,t){const n=this.cache,s=e.length,r=Rr(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||lh,r[o])}function X_(i){switch(i){case 5126:return A_;case 35664:return w_;case 35665:return C_;case 35666:return R_;case 35674:return P_;case 35675:return L_;case 35676:return D_;case 5124:case 35670:return I_;case 35667:case 35671:return U_;case 35668:case 35672:return N_;case 35669:case 35673:return O_;case 5125:return F_;case 36294:return B_;case 36295:return k_;case 36296:return z_;case 35678:case 36198:case 36298:case 36306:case 35682:return V_;case 35679:case 36299:case 36307:return H_;case 35680:case 36300:case 36308:case 36293:return G_;case 36289:case 36303:case 36311:case 36292:return W_}}class j_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=T_(t.type)}}class q_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=X_(t.type)}}class Y_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const lo=/(\w+)(\])?(\[|\.)?/g;function ql(i,e){i.seq.push(e),i.map[e.id]=e}function K_(i,e,t){const n=i.name,s=n.length;for(lo.lastIndex=0;;){const r=lo.exec(n),o=lo.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ql(t,l===void 0?new j_(a,i,e):new q_(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Y_(a),ql(t,h)),t=h}}}class cr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);K_(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Yl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Z_=37297;let J_=0;function $_(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Q_(i){const e=At.getPrimaries(At.workingColorSpace),t=At.getPrimaries(i);let n;switch(e===t?n="":e===xr&&t===vr?n="LinearDisplayP3ToLinearSRGB":e===vr&&t===xr&&(n="LinearSRGBToLinearDisplayP3"),i){case Qn:case Ar:return[n,"LinearTransferOETF"];case Yt:case Lo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Kl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+$_(i.getShaderSource(e),o)}else return s}function eg(i,e){const t=Q_(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function tg(i,e){let t;switch(e){case ff:t="Linear";break;case df:t="Reinhard";break;case pf:t="OptimizedCineon";break;case mf:t="ACESFilmic";break;case gf:t="AgX";break;case _f:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ng(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ns).join(`
`)}function ig(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ns).join(`
`)}function sg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function rg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ns(i){return i!==""}function Zl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const og=/^[ \t]*#include +<([\w\d./]+)>/gm;function wo(i){return i.replace(og,lg)}const ag=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function lg(i,e){let t=mt[e];if(t===void 0){const n=ag.get(e);if(n!==void 0)t=mt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wo(t)}const cg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $l(i){return i.replace(cg,ug)}function ug(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ql(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function hg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Uu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===kh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function fg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case as:case ls:e="ENVMAP_TYPE_CUBE";break;case Tr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ls:e="ENVMAP_MODE_REFRACTION";break}return e}function pg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ro:e="ENVMAP_BLENDING_MULTIPLY";break;case uf:e="ENVMAP_BLENDING_MIX";break;case hf:e="ENVMAP_BLENDING_ADD";break}return e}function mg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function _g(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=hg(t),l=fg(t),u=dg(t),h=pg(t),d=mg(t),g=t.isWebGL2?"":ng(t),v=ig(t),_=sg(r),p=s.createProgram();let f,b,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ns).join(`
`),f.length>0&&(f+=`
`),b=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ns).join(`
`),b.length>0&&(b+=`
`)):(f=[Ql(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),b=[g,Ql(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ci?"#define TONE_MAPPING":"",t.toneMapping!==ci?mt.tonemapping_pars_fragment:"",t.toneMapping!==ci?tg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,eg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ns).join(`
`)),o=wo(o),o=Zl(o,t),o=Jl(o,t),a=wo(a),a=Zl(a,t),a=Jl(a,t),o=$l(o),a=$l(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const R=x+f+o,S=x+b+a,y=Yl(s,s.VERTEX_SHADER,R),C=Yl(s,s.FRAGMENT_SHADER,S);s.attachShader(p,y),s.attachShader(p,C),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function D(H){if(i.debug.checkShaderErrors){const Y=s.getProgramInfoLog(p).trim(),L=s.getShaderInfoLog(y).trim(),V=s.getShaderInfoLog(C).trim();let q=!0,ue=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,y,C);else{const se=Kl(s,y,"vertex"),ae=Kl(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+Y+`
`+se+`
`+ae)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(L===""||V==="")&&(ue=!1);ue&&(H.diagnostics={runnable:q,programLog:Y,vertexShader:{log:L,prefix:f},fragmentShader:{log:V,prefix:b}})}s.deleteShader(y),s.deleteShader(C),O=new cr(s,p),M=rg(s,p)}let O;this.getUniforms=function(){return O===void 0&&D(this),O};let M;this.getAttributes=function(){return M===void 0&&D(this),M};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(p,Z_)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=J_++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=C,this}let gg=0;class vg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new xg(e),t.set(e,n)),n}}class xg{constructor(e){this.id=gg++,this.code=e,this.usedTimes=0}}function bg(i,e,t,n,s,r,o){const a=new Zu,c=new vg,l=new Set,u=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,g=s.vertexTextures;let v=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return l.add(M),M===0?"uv":`uv${M}`}function f(M,P,H,Y,L){const V=Y.fog,q=L.geometry,ue=M.isMeshStandardMaterial?Y.environment:null,se=(M.isMeshStandardMaterial?t:e).get(M.envMap||ue),ae=se&&se.mapping===Tr?se.image.height:null,ie=_[M.type];M.precision!==null&&(v=s.getMaxPrecision(M.precision),v!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",v,"instead."));const he=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ee=he!==void 0?he.length:0;let ce=0;q.morphAttributes.position!==void 0&&(ce=1),q.morphAttributes.normal!==void 0&&(ce=2),q.morphAttributes.color!==void 0&&(ce=3);let F,Q,ve,U;if(ie){const it=Fn[ie];F=it.vertexShader,Q=it.fragmentShader}else F=M.vertexShader,Q=M.fragmentShader,c.update(M),ve=c.getVertexShaderID(M),U=c.getFragmentShaderID(M);const G=i.getRenderTarget(),oe=L.isInstancedMesh===!0,pe=L.isBatchedMesh===!0,Ce=!!M.map,W=!!M.matcap,Le=!!se,xe=!!M.aoMap,Re=!!M.lightMap,te=!!M.bumpMap,ne=!!M.normalMap,fe=!!M.displacementMap,N=!!M.emissiveMap,E=!!M.metalnessMap,$=!!M.roughnessMap,re=M.anisotropy>0,Z=M.clearcoat>0,le=M.iridescence>0,J=M.sheen>0,de=M.transmission>0,me=re&&!!M.anisotropyMap,Ee=Z&&!!M.clearcoatMap,Oe=Z&&!!M.clearcoatNormalMap,be=Z&&!!M.clearcoatRoughnessMap,ye=le&&!!M.iridescenceMap,Be=le&&!!M.iridescenceThicknessMap,We=J&&!!M.sheenColorMap,ze=J&&!!M.sheenRoughnessMap,Pe=!!M.specularMap,qe=!!M.specularColorMap,k=!!M.specularIntensityMap,Fe=de&&!!M.transmissionMap,Ye=de&&!!M.thicknessMap,je=!!M.gradientMap,B=!!M.alphaMap,Me=M.alphaTest>0,Ae=!!M.alphaHash,He=!!M.extensions;let Ge=ci;M.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Ge=i.toneMapping);const et={isWebGL2:h,shaderID:ie,shaderType:M.type,shaderName:M.name,vertexShader:F,fragmentShader:Q,defines:M.defines,customVertexShaderID:ve,customFragmentShaderID:U,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:v,batching:pe,instancing:oe,instancingColor:oe&&L.instanceColor!==null,supportsVertexTextures:g,outputColorSpace:G===null?i.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Qn,alphaToCoverage:!!M.alphaToCoverage,map:Ce,matcap:W,envMap:Le,envMapMode:Le&&se.mapping,envMapCubeUVHeight:ae,aoMap:xe,lightMap:Re,bumpMap:te,normalMap:ne,displacementMap:g&&fe,emissiveMap:N,normalMapObjectSpace:ne&&M.normalMapType===Cf,normalMapTangentSpace:ne&&M.normalMapType===Wu,metalnessMap:E,roughnessMap:$,anisotropy:re,anisotropyMap:me,clearcoat:Z,clearcoatMap:Ee,clearcoatNormalMap:Oe,clearcoatRoughnessMap:be,iridescence:le,iridescenceMap:ye,iridescenceThicknessMap:Be,sheen:J,sheenColorMap:We,sheenRoughnessMap:ze,specularMap:Pe,specularColorMap:qe,specularIntensityMap:k,transmission:de,transmissionMap:Fe,thicknessMap:Ye,gradientMap:je,opaque:M.transparent===!1&&M.blending===ss&&M.alphaToCoverage===!1,alphaMap:B,alphaTest:Me,alphaHash:Ae,combine:M.combine,mapUv:Ce&&p(M.map.channel),aoMapUv:xe&&p(M.aoMap.channel),lightMapUv:Re&&p(M.lightMap.channel),bumpMapUv:te&&p(M.bumpMap.channel),normalMapUv:ne&&p(M.normalMap.channel),displacementMapUv:fe&&p(M.displacementMap.channel),emissiveMapUv:N&&p(M.emissiveMap.channel),metalnessMapUv:E&&p(M.metalnessMap.channel),roughnessMapUv:$&&p(M.roughnessMap.channel),anisotropyMapUv:me&&p(M.anisotropyMap.channel),clearcoatMapUv:Ee&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:We&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:ze&&p(M.sheenRoughnessMap.channel),specularMapUv:Pe&&p(M.specularMap.channel),specularColorMapUv:qe&&p(M.specularColorMap.channel),specularIntensityMapUv:k&&p(M.specularIntensityMap.channel),transmissionMapUv:Fe&&p(M.transmissionMap.channel),thicknessMapUv:Ye&&p(M.thicknessMap.channel),alphaMapUv:B&&p(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(ne||re),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!q.attributes.uv&&(Ce||B),fog:!!V,useFog:M.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:L.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ce,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ge,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ce&&M.map.isVideoTexture===!0&&At.getTransfer(M.map.colorSpace)===Rt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===an,flipSided:M.side===xn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:He&&M.extensions.derivatives===!0,extensionFragDepth:He&&M.extensions.fragDepth===!0,extensionDrawBuffers:He&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:He&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:He&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:He&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return et.vertexUv1s=l.has(1),et.vertexUv2s=l.has(2),et.vertexUv3s=l.has(3),l.clear(),et}function b(M){const P=[];if(M.shaderID?P.push(M.shaderID):(P.push(M.customVertexShaderID),P.push(M.customFragmentShaderID)),M.defines!==void 0)for(const H in M.defines)P.push(H),P.push(M.defines[H]);return M.isRawShaderMaterial===!1&&(x(P,M),R(P,M),P.push(i.outputColorSpace)),P.push(M.customProgramCacheKey),P.join()}function x(M,P){M.push(P.precision),M.push(P.outputColorSpace),M.push(P.envMapMode),M.push(P.envMapCubeUVHeight),M.push(P.mapUv),M.push(P.alphaMapUv),M.push(P.lightMapUv),M.push(P.aoMapUv),M.push(P.bumpMapUv),M.push(P.normalMapUv),M.push(P.displacementMapUv),M.push(P.emissiveMapUv),M.push(P.metalnessMapUv),M.push(P.roughnessMapUv),M.push(P.anisotropyMapUv),M.push(P.clearcoatMapUv),M.push(P.clearcoatNormalMapUv),M.push(P.clearcoatRoughnessMapUv),M.push(P.iridescenceMapUv),M.push(P.iridescenceThicknessMapUv),M.push(P.sheenColorMapUv),M.push(P.sheenRoughnessMapUv),M.push(P.specularMapUv),M.push(P.specularColorMapUv),M.push(P.specularIntensityMapUv),M.push(P.transmissionMapUv),M.push(P.thicknessMapUv),M.push(P.combine),M.push(P.fogExp2),M.push(P.sizeAttenuation),M.push(P.morphTargetsCount),M.push(P.morphAttributeCount),M.push(P.numDirLights),M.push(P.numPointLights),M.push(P.numSpotLights),M.push(P.numSpotLightMaps),M.push(P.numHemiLights),M.push(P.numRectAreaLights),M.push(P.numDirLightShadows),M.push(P.numPointLightShadows),M.push(P.numSpotLightShadows),M.push(P.numSpotLightShadowsWithMaps),M.push(P.numLightProbes),M.push(P.shadowMapType),M.push(P.toneMapping),M.push(P.numClippingPlanes),M.push(P.numClipIntersection),M.push(P.depthPacking)}function R(M,P){a.disableAll(),P.isWebGL2&&a.enable(0),P.supportsVertexTextures&&a.enable(1),P.instancing&&a.enable(2),P.instancingColor&&a.enable(3),P.matcap&&a.enable(4),P.envMap&&a.enable(5),P.normalMapObjectSpace&&a.enable(6),P.normalMapTangentSpace&&a.enable(7),P.clearcoat&&a.enable(8),P.iridescence&&a.enable(9),P.alphaTest&&a.enable(10),P.vertexColors&&a.enable(11),P.vertexAlphas&&a.enable(12),P.vertexUv1s&&a.enable(13),P.vertexUv2s&&a.enable(14),P.vertexUv3s&&a.enable(15),P.vertexTangents&&a.enable(16),P.anisotropy&&a.enable(17),P.alphaHash&&a.enable(18),P.batching&&a.enable(19),M.push(a.mask),a.disableAll(),P.fog&&a.enable(0),P.useFog&&a.enable(1),P.flatShading&&a.enable(2),P.logarithmicDepthBuffer&&a.enable(3),P.skinning&&a.enable(4),P.morphTargets&&a.enable(5),P.morphNormals&&a.enable(6),P.morphColors&&a.enable(7),P.premultipliedAlpha&&a.enable(8),P.shadowMapEnabled&&a.enable(9),P.useLegacyLights&&a.enable(10),P.doubleSided&&a.enable(11),P.flipSided&&a.enable(12),P.useDepthPacking&&a.enable(13),P.dithering&&a.enable(14),P.transmission&&a.enable(15),P.sheen&&a.enable(16),P.opaque&&a.enable(17),P.pointsUvs&&a.enable(18),P.decodeVideoTexture&&a.enable(19),P.alphaToCoverage&&a.enable(20),M.push(a.mask)}function S(M){const P=_[M.type];let H;if(P){const Y=Fn[P];H=nd.clone(Y.uniforms)}else H=M.uniforms;return H}function y(M,P){let H;for(let Y=0,L=u.length;Y<L;Y++){const V=u[Y];if(V.cacheKey===P){H=V,++H.usedTimes;break}}return H===void 0&&(H=new _g(i,P,M,r),u.push(H)),H}function C(M){if(--M.usedTimes===0){const P=u.indexOf(M);u[P]=u[u.length-1],u.pop(),M.destroy()}}function D(M){c.remove(M)}function O(){c.dispose()}return{getParameters:f,getProgramCacheKey:b,getUniforms:S,acquireProgram:y,releaseProgram:C,releaseShaderCache:D,programs:u,dispose:O}}function Eg(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Mg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ec(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function tc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,g,v,_,p){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:g,groupOrder:v,renderOrder:h.renderOrder,z:_,group:p},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=g,f.groupOrder=v,f.renderOrder=h.renderOrder,f.z=_,f.group=p),e++,f}function a(h,d,g,v,_,p){const f=o(h,d,g,v,_,p);g.transmission>0?n.push(f):g.transparent===!0?s.push(f):t.push(f)}function c(h,d,g,v,_,p){const f=o(h,d,g,v,_,p);g.transmission>0?n.unshift(f):g.transparent===!0?s.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||Mg),n.length>1&&n.sort(d||ec),s.length>1&&s.sort(d||ec)}function u(){for(let h=e,d=i.length;h<d;h++){const g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function yg(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new tc,i.set(n,[o])):s>=r.length?(o=new tc,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Sg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new we,color:new _t};break;case"SpotLight":t={position:new we,direction:new we,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new we,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new we,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new we,halfWidth:new we,halfHeight:new we};break}return i[e.id]=t,t}}}function Tg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ag=0;function wg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Cg(i,e){const t=new Sg,n=Tg(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new we);const r=new we,o=new zt,a=new zt;function c(u,h){let d=0,g=0,v=0;for(let H=0;H<9;H++)s.probe[H].set(0,0,0);let _=0,p=0,f=0,b=0,x=0,R=0,S=0,y=0,C=0,D=0,O=0;u.sort(wg);const M=h===!0?Math.PI:1;for(let H=0,Y=u.length;H<Y;H++){const L=u[H],V=L.color,q=L.intensity,ue=L.distance,se=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=V.r*q*M,g+=V.g*q*M,v+=V.b*q*M;else if(L.isLightProbe){for(let ae=0;ae<9;ae++)s.probe[ae].addScaledVector(L.sh.coefficients[ae],q);O++}else if(L.isDirectionalLight){const ae=t.get(L);if(ae.color.copy(L.color).multiplyScalar(L.intensity*M),L.castShadow){const ie=L.shadow,he=n.get(L);he.shadowBias=ie.bias,he.shadowNormalBias=ie.normalBias,he.shadowRadius=ie.radius,he.shadowMapSize=ie.mapSize,s.directionalShadow[_]=he,s.directionalShadowMap[_]=se,s.directionalShadowMatrix[_]=L.shadow.matrix,R++}s.directional[_]=ae,_++}else if(L.isSpotLight){const ae=t.get(L);ae.position.setFromMatrixPosition(L.matrixWorld),ae.color.copy(V).multiplyScalar(q*M),ae.distance=ue,ae.coneCos=Math.cos(L.angle),ae.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),ae.decay=L.decay,s.spot[f]=ae;const ie=L.shadow;if(L.map&&(s.spotLightMap[C]=L.map,C++,ie.updateMatrices(L),L.castShadow&&D++),s.spotLightMatrix[f]=ie.matrix,L.castShadow){const he=n.get(L);he.shadowBias=ie.bias,he.shadowNormalBias=ie.normalBias,he.shadowRadius=ie.radius,he.shadowMapSize=ie.mapSize,s.spotShadow[f]=he,s.spotShadowMap[f]=se,y++}f++}else if(L.isRectAreaLight){const ae=t.get(L);ae.color.copy(V).multiplyScalar(q),ae.halfWidth.set(L.width*.5,0,0),ae.halfHeight.set(0,L.height*.5,0),s.rectArea[b]=ae,b++}else if(L.isPointLight){const ae=t.get(L);if(ae.color.copy(L.color).multiplyScalar(L.intensity*M),ae.distance=L.distance,ae.decay=L.decay,L.castShadow){const ie=L.shadow,he=n.get(L);he.shadowBias=ie.bias,he.shadowNormalBias=ie.normalBias,he.shadowRadius=ie.radius,he.shadowMapSize=ie.mapSize,he.shadowCameraNear=ie.camera.near,he.shadowCameraFar=ie.camera.far,s.pointShadow[p]=he,s.pointShadowMap[p]=se,s.pointShadowMatrix[p]=L.shadow.matrix,S++}s.point[p]=ae,p++}else if(L.isHemisphereLight){const ae=t.get(L);ae.skyColor.copy(L.color).multiplyScalar(q*M),ae.groundColor.copy(L.groundColor).multiplyScalar(q*M),s.hemi[x]=ae,x++}}b>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Je.LTC_FLOAT_1,s.rectAreaLTC2=Je.LTC_FLOAT_2):(s.rectAreaLTC1=Je.LTC_HALF_1,s.rectAreaLTC2=Je.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Je.LTC_FLOAT_1,s.rectAreaLTC2=Je.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Je.LTC_HALF_1,s.rectAreaLTC2=Je.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=g,s.ambient[2]=v;const P=s.hash;(P.directionalLength!==_||P.pointLength!==p||P.spotLength!==f||P.rectAreaLength!==b||P.hemiLength!==x||P.numDirectionalShadows!==R||P.numPointShadows!==S||P.numSpotShadows!==y||P.numSpotMaps!==C||P.numLightProbes!==O)&&(s.directional.length=_,s.spot.length=f,s.rectArea.length=b,s.point.length=p,s.hemi.length=x,s.directionalShadow.length=R,s.directionalShadowMap.length=R,s.pointShadow.length=S,s.pointShadowMap.length=S,s.spotShadow.length=y,s.spotShadowMap.length=y,s.directionalShadowMatrix.length=R,s.pointShadowMatrix.length=S,s.spotLightMatrix.length=y+C-D,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=O,P.directionalLength=_,P.pointLength=p,P.spotLength=f,P.rectAreaLength=b,P.hemiLength=x,P.numDirectionalShadows=R,P.numPointShadows=S,P.numSpotShadows=y,P.numSpotMaps=C,P.numLightProbes=O,s.version=Ag++)}function l(u,h){let d=0,g=0,v=0,_=0,p=0;const f=h.matrixWorldInverse;for(let b=0,x=u.length;b<x;b++){const R=u[b];if(R.isDirectionalLight){const S=s.directional[d];S.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(f),d++}else if(R.isSpotLight){const S=s.spot[v];S.position.setFromMatrixPosition(R.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(f),v++}else if(R.isRectAreaLight){const S=s.rectArea[_];S.position.setFromMatrixPosition(R.matrixWorld),S.position.applyMatrix4(f),a.identity(),o.copy(R.matrixWorld),o.premultiply(f),a.extractRotation(o),S.halfWidth.set(R.width*.5,0,0),S.halfHeight.set(0,R.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(R.isPointLight){const S=s.point[g];S.position.setFromMatrixPosition(R.matrixWorld),S.position.applyMatrix4(f),g++}else if(R.isHemisphereLight){const S=s.hemi[p];S.direction.setFromMatrixPosition(R.matrixWorld),S.direction.transformDirection(f),p++}}}return{setup:c,setupView:l,state:s}}function nc(i,e){const t=new Cg(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(h){n.push(h)}function a(h){s.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Rg(i,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let c;return a===void 0?(c=new nc(i,e),t.set(r,[c])):o>=a.length?(c=new nc(i,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:n,dispose:s}}class Pg extends fs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Af,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lg extends fs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Dg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ig=`uniform sampler2D shadow_pass;
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
}`;function Ug(i,e,t){let n=new Io;const s=new ut,r=new ut,o=new qt,a=new Pg({depthPacking:wf}),c=new Lg,l={},u=t.maxTextureSize,h={[fi]:xn,[xn]:fi,[an]:an},d=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Dg,fragmentShader:Ig}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const v=new Kt;v.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new jt(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uu;let f=this.type;this.render=function(y,C,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const O=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),H=i.state;H.setBlending(li),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const Y=f!==qn&&this.type===qn,L=f===qn&&this.type!==qn;for(let V=0,q=y.length;V<q;V++){const ue=y[V],se=ue.shadow;if(se===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(se.autoUpdate===!1&&se.needsUpdate===!1)continue;s.copy(se.mapSize);const ae=se.getFrameExtents();if(s.multiply(ae),r.copy(se.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ae.x),s.x=r.x*ae.x,se.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ae.y),s.y=r.y*ae.y,se.mapSize.y=r.y)),se.map===null||Y===!0||L===!0){const he=this.type!==qn?{minFilter:on,magFilter:on}:{};se.map!==null&&se.map.dispose(),se.map=new Ri(s.x,s.y,he),se.map.texture.name=ue.name+".shadowMap",se.camera.updateProjectionMatrix()}i.setRenderTarget(se.map),i.clear();const ie=se.getViewportCount();for(let he=0;he<ie;he++){const ee=se.getViewport(he);o.set(r.x*ee.x,r.y*ee.y,r.x*ee.z,r.y*ee.w),H.viewport(o),se.updateMatrices(ue,he),n=se.getFrustum(),R(C,D,se.camera,ue,this.type)}se.isPointLightShadow!==!0&&this.type===qn&&b(se,D),se.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(O,M,P)};function b(y,C){const D=e.update(_);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,g.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Ri(s.x,s.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(C,null,D,d,_,null),g.uniforms.shadow_pass.value=y.mapPass.texture,g.uniforms.resolution.value=y.mapSize,g.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(C,null,D,g,_,null)}function x(y,C,D,O){let M=null;const P=D.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(P!==void 0)M=P;else if(M=D.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const H=M.uuid,Y=C.uuid;let L=l[H];L===void 0&&(L={},l[H]=L);let V=L[Y];V===void 0&&(V=M.clone(),L[Y]=V,C.addEventListener("dispose",S)),M=V}if(M.visible=C.visible,M.wireframe=C.wireframe,O===qn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:h[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const H=i.properties.get(M);H.light=D}return M}function R(y,C,D,O,M){if(y.visible===!1)return;if(y.layers.test(C.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&M===qn)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,y.matrixWorld);const Y=e.update(y),L=y.material;if(Array.isArray(L)){const V=Y.groups;for(let q=0,ue=V.length;q<ue;q++){const se=V[q],ae=L[se.materialIndex];if(ae&&ae.visible){const ie=x(y,ae,O,M);y.onBeforeShadow(i,y,C,D,Y,ie,se),i.renderBufferDirect(D,null,Y,ie,y,se),y.onAfterShadow(i,y,C,D,Y,ie,se)}}}else if(L.visible){const V=x(y,L,O,M);y.onBeforeShadow(i,y,C,D,Y,V,null),i.renderBufferDirect(D,null,Y,V,y,null),y.onAfterShadow(i,y,C,D,Y,V,null)}}const H=y.children;for(let Y=0,L=H.length;Y<L;Y++)R(H[Y],C,D,O,M)}function S(y){y.target.removeEventListener("dispose",S);for(const D in l){const O=l[D],M=y.target.uuid;M in O&&(O[M].dispose(),delete O[M])}}}function Ng(i,e,t){const n=t.isWebGL2;function s(){let B=!1;const Me=new qt;let Ae=null;const He=new qt(0,0,0,0);return{setMask:function(Ge){Ae!==Ge&&!B&&(i.colorMask(Ge,Ge,Ge,Ge),Ae=Ge)},setLocked:function(Ge){B=Ge},setClear:function(Ge,et,it,at,St){St===!0&&(Ge*=at,et*=at,it*=at),Me.set(Ge,et,it,at),He.equals(Me)===!1&&(i.clearColor(Ge,et,it,at),He.copy(Me))},reset:function(){B=!1,Ae=null,He.set(-1,0,0,0)}}}function r(){let B=!1,Me=null,Ae=null,He=null;return{setTest:function(Ge){Ge?oe(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(Ge){Me!==Ge&&!B&&(i.depthMask(Ge),Me=Ge)},setFunc:function(Ge){if(Ae!==Ge){switch(Ge){case nf:i.depthFunc(i.NEVER);break;case sf:i.depthFunc(i.ALWAYS);break;case rf:i.depthFunc(i.LESS);break;case _r:i.depthFunc(i.LEQUAL);break;case of:i.depthFunc(i.EQUAL);break;case af:i.depthFunc(i.GEQUAL);break;case lf:i.depthFunc(i.GREATER);break;case cf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=Ge}},setLocked:function(Ge){B=Ge},setClear:function(Ge){He!==Ge&&(i.clearDepth(Ge),He=Ge)},reset:function(){B=!1,Me=null,Ae=null,He=null}}}function o(){let B=!1,Me=null,Ae=null,He=null,Ge=null,et=null,it=null,at=null,St=null;return{setTest:function(lt){B||(lt?oe(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(lt){Me!==lt&&!B&&(i.stencilMask(lt),Me=lt)},setFunc:function(lt,Mt,ft){(Ae!==lt||He!==Mt||Ge!==ft)&&(i.stencilFunc(lt,Mt,ft),Ae=lt,He=Mt,Ge=ft)},setOp:function(lt,Mt,ft){(et!==lt||it!==Mt||at!==ft)&&(i.stencilOp(lt,Mt,ft),et=lt,it=Mt,at=ft)},setLocked:function(lt){B=lt},setClear:function(lt){St!==lt&&(i.clearStencil(lt),St=lt)},reset:function(){B=!1,Me=null,Ae=null,He=null,Ge=null,et=null,it=null,at=null,St=null}}}const a=new s,c=new r,l=new o,u=new WeakMap,h=new WeakMap;let d={},g={},v=new WeakMap,_=[],p=null,f=!1,b=null,x=null,R=null,S=null,y=null,C=null,D=null,O=new _t(0,0,0),M=0,P=!1,H=null,Y=null,L=null,V=null,q=null;const ue=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,ae=0;const ie=i.getParameter(i.VERSION);ie.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(ie)[1]),se=ae>=1):ie.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),se=ae>=2);let he=null,ee={};const ce=i.getParameter(i.SCISSOR_BOX),F=i.getParameter(i.VIEWPORT),Q=new qt().fromArray(ce),ve=new qt().fromArray(F);function U(B,Me,Ae,He){const Ge=new Uint8Array(4),et=i.createTexture();i.bindTexture(B,et),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let it=0;it<Ae;it++)n&&(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)?i.texImage3D(Me,0,i.RGBA,1,1,He,0,i.RGBA,i.UNSIGNED_BYTE,Ge):i.texImage2D(Me+it,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ge);return et}const G={};G[i.TEXTURE_2D]=U(i.TEXTURE_2D,i.TEXTURE_2D,1),G[i.TEXTURE_CUBE_MAP]=U(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(G[i.TEXTURE_2D_ARRAY]=U(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),G[i.TEXTURE_3D]=U(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),oe(i.DEPTH_TEST),c.setFunc(_r),fe(!1),N(Na),oe(i.CULL_FACE),te(li);function oe(B){d[B]!==!0&&(i.enable(B),d[B]=!0)}function pe(B){d[B]!==!1&&(i.disable(B),d[B]=!1)}function Ce(B,Me){return g[B]!==Me?(i.bindFramebuffer(B,Me),g[B]=Me,n&&(B===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=Me),B===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=Me)),!0):!1}function W(B,Me){let Ae=_,He=!1;if(B)if(Ae=v.get(Me),Ae===void 0&&(Ae=[],v.set(Me,Ae)),B.isWebGLMultipleRenderTargets){const Ge=B.texture;if(Ae.length!==Ge.length||Ae[0]!==i.COLOR_ATTACHMENT0){for(let et=0,it=Ge.length;et<it;et++)Ae[et]=i.COLOR_ATTACHMENT0+et;Ae.length=Ge.length,He=!0}}else Ae[0]!==i.COLOR_ATTACHMENT0&&(Ae[0]=i.COLOR_ATTACHMENT0,He=!0);else Ae[0]!==i.BACK&&(Ae[0]=i.BACK,He=!0);He&&(t.isWebGL2?i.drawBuffers(Ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ae))}function Le(B){return p!==B?(i.useProgram(B),p=B,!0):!1}const xe={[Mi]:i.FUNC_ADD,[Vh]:i.FUNC_SUBTRACT,[Hh]:i.FUNC_REVERSE_SUBTRACT};if(n)xe[ka]=i.MIN,xe[za]=i.MAX;else{const B=e.get("EXT_blend_minmax");B!==null&&(xe[ka]=B.MIN_EXT,xe[za]=B.MAX_EXT)}const Re={[Gh]:i.ZERO,[Wh]:i.ONE,[Xh]:i.SRC_COLOR,[vo]:i.SRC_ALPHA,[Jh]:i.SRC_ALPHA_SATURATE,[Kh]:i.DST_COLOR,[qh]:i.DST_ALPHA,[jh]:i.ONE_MINUS_SRC_COLOR,[xo]:i.ONE_MINUS_SRC_ALPHA,[Zh]:i.ONE_MINUS_DST_COLOR,[Yh]:i.ONE_MINUS_DST_ALPHA,[$h]:i.CONSTANT_COLOR,[Qh]:i.ONE_MINUS_CONSTANT_COLOR,[ef]:i.CONSTANT_ALPHA,[tf]:i.ONE_MINUS_CONSTANT_ALPHA};function te(B,Me,Ae,He,Ge,et,it,at,St,lt){if(B===li){f===!0&&(pe(i.BLEND),f=!1);return}if(f===!1&&(oe(i.BLEND),f=!0),B!==zh){if(B!==b||lt!==P){if((x!==Mi||y!==Mi)&&(i.blendEquation(i.FUNC_ADD),x=Mi,y=Mi),lt)switch(B){case ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oa:i.blendFunc(i.ONE,i.ONE);break;case Fa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ba:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Fa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ba:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}R=null,S=null,C=null,D=null,O.set(0,0,0),M=0,b=B,P=lt}return}Ge=Ge||Me,et=et||Ae,it=it||He,(Me!==x||Ge!==y)&&(i.blendEquationSeparate(xe[Me],xe[Ge]),x=Me,y=Ge),(Ae!==R||He!==S||et!==C||it!==D)&&(i.blendFuncSeparate(Re[Ae],Re[He],Re[et],Re[it]),R=Ae,S=He,C=et,D=it),(at.equals(O)===!1||St!==M)&&(i.blendColor(at.r,at.g,at.b,St),O.copy(at),M=St),b=B,P=!1}function ne(B,Me){B.side===an?pe(i.CULL_FACE):oe(i.CULL_FACE);let Ae=B.side===xn;Me&&(Ae=!Ae),fe(Ae),B.blending===ss&&B.transparent===!1?te(li):te(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),c.setFunc(B.depthFunc),c.setTest(B.depthTest),c.setMask(B.depthWrite),a.setMask(B.colorWrite);const He=B.stencilWrite;l.setTest(He),He&&(l.setMask(B.stencilWriteMask),l.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),l.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),$(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function fe(B){H!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),H=B)}function N(B){B!==Fh?(oe(i.CULL_FACE),B!==Y&&(B===Na?i.cullFace(i.BACK):B===Bh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),Y=B}function E(B){B!==L&&(se&&i.lineWidth(B),L=B)}function $(B,Me,Ae){B?(oe(i.POLYGON_OFFSET_FILL),(V!==Me||q!==Ae)&&(i.polygonOffset(Me,Ae),V=Me,q=Ae)):pe(i.POLYGON_OFFSET_FILL)}function re(B){B?oe(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function Z(B){B===void 0&&(B=i.TEXTURE0+ue-1),he!==B&&(i.activeTexture(B),he=B)}function le(B,Me,Ae){Ae===void 0&&(he===null?Ae=i.TEXTURE0+ue-1:Ae=he);let He=ee[Ae];He===void 0&&(He={type:void 0,texture:void 0},ee[Ae]=He),(He.type!==B||He.texture!==Me)&&(he!==Ae&&(i.activeTexture(Ae),he=Ae),i.bindTexture(B,Me||G[B]),He.type=B,He.texture=Me)}function J(){const B=ee[he];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function de(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ee(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Oe(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function be(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ye(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Be(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function We(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ze(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pe(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function qe(B){Q.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Q.copy(B))}function k(B){ve.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),ve.copy(B))}function Fe(B,Me){let Ae=h.get(Me);Ae===void 0&&(Ae=new WeakMap,h.set(Me,Ae));let He=Ae.get(B);He===void 0&&(He=i.getUniformBlockIndex(Me,B.name),Ae.set(B,He))}function Ye(B,Me){const He=h.get(Me).get(B);u.get(Me)!==He&&(i.uniformBlockBinding(Me,He,B.__bindingPointIndex),u.set(Me,He))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},he=null,ee={},g={},v=new WeakMap,_=[],p=null,f=!1,b=null,x=null,R=null,S=null,y=null,C=null,D=null,O=new _t(0,0,0),M=0,P=!1,H=null,Y=null,L=null,V=null,q=null,Q.set(0,0,i.canvas.width,i.canvas.height),ve.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:oe,disable:pe,bindFramebuffer:Ce,drawBuffers:W,useProgram:Le,setBlending:te,setMaterial:ne,setFlipSided:fe,setCullFace:N,setLineWidth:E,setPolygonOffset:$,setScissorTest:re,activeTexture:Z,bindTexture:le,unbindTexture:J,compressedTexImage2D:de,compressedTexImage3D:me,texImage2D:ze,texImage3D:Pe,updateUBOMapping:Fe,uniformBlockBinding:Ye,texStorage2D:Be,texStorage3D:We,texSubImage2D:Ee,texSubImage3D:Oe,compressedTexSubImage2D:be,compressedTexSubImage3D:ye,scissor:qe,viewport:k,reset:je}}function Og(i,e,t,n,s,r,o){const a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(N,E){return g?new OffscreenCanvas(N,E):Er("canvas")}function _(N,E,$,re){let Z=1;if((N.width>re||N.height>re)&&(Z=re/Math.max(N.width,N.height)),Z<1||E===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){const le=E?Ao:Math.floor,J=le(Z*N.width),de=le(Z*N.height);h===void 0&&(h=v(J,de));const me=$?v(J,de):h;return me.width=J,me.height=de,me.getContext("2d").drawImage(N,0,0,J,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+J+"x"+de+")."),me}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function p(N){return _l(N.width)&&_l(N.height)}function f(N){return a?!1:N.wrapS!==In||N.wrapT!==In||N.minFilter!==on&&N.minFilter!==pn}function b(N,E){return N.generateMipmaps&&E&&N.minFilter!==on&&N.minFilter!==pn}function x(N){i.generateMipmap(N)}function R(N,E,$,re,Z=!1){if(a===!1)return E;if(N!==null){if(i[N]!==void 0)return i[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let le=E;if(E===i.RED&&($===i.FLOAT&&(le=i.R32F),$===i.HALF_FLOAT&&(le=i.R16F),$===i.UNSIGNED_BYTE&&(le=i.R8)),E===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(le=i.R8UI),$===i.UNSIGNED_SHORT&&(le=i.R16UI),$===i.UNSIGNED_INT&&(le=i.R32UI),$===i.BYTE&&(le=i.R8I),$===i.SHORT&&(le=i.R16I),$===i.INT&&(le=i.R32I)),E===i.RG&&($===i.FLOAT&&(le=i.RG32F),$===i.HALF_FLOAT&&(le=i.RG16F),$===i.UNSIGNED_BYTE&&(le=i.RG8)),E===i.RGBA){const J=Z?gr:At.getTransfer(re);$===i.FLOAT&&(le=i.RGBA32F),$===i.HALF_FLOAT&&(le=i.RGBA16F),$===i.UNSIGNED_BYTE&&(le=J===Rt?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(le=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(le=i.RGB5_A1)}return(le===i.R16F||le===i.R32F||le===i.RG16F||le===i.RG32F||le===i.RGBA16F||le===i.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function S(N,E,$){return b(N,$)===!0||N.isFramebufferTexture&&N.minFilter!==on&&N.minFilter!==pn?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function y(N){return N===on||N===Va||N===_s?i.NEAREST:i.LINEAR}function C(N){const E=N.target;E.removeEventListener("dispose",C),O(E),E.isVideoTexture&&u.delete(E)}function D(N){const E=N.target;E.removeEventListener("dispose",D),P(E)}function O(N){const E=n.get(N);if(E.__webglInit===void 0)return;const $=N.source,re=d.get($);if(re){const Z=re[E.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(N),Object.keys(re).length===0&&d.delete($)}n.remove(N)}function M(N){const E=n.get(N);i.deleteTexture(E.__webglTexture);const $=N.source,re=d.get($);delete re[E.__cacheKey],o.memory.textures--}function P(N){const E=N.texture,$=n.get(N),re=n.get(E);if(re.__webglTexture!==void 0&&(i.deleteTexture(re.__webglTexture),o.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray($.__webglFramebuffer[Z]))for(let le=0;le<$.__webglFramebuffer[Z].length;le++)i.deleteFramebuffer($.__webglFramebuffer[Z][le]);else i.deleteFramebuffer($.__webglFramebuffer[Z]);$.__webglDepthbuffer&&i.deleteRenderbuffer($.__webglDepthbuffer[Z])}else{if(Array.isArray($.__webglFramebuffer))for(let Z=0;Z<$.__webglFramebuffer.length;Z++)i.deleteFramebuffer($.__webglFramebuffer[Z]);else i.deleteFramebuffer($.__webglFramebuffer);if($.__webglDepthbuffer&&i.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&i.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let Z=0;Z<$.__webglColorRenderbuffer.length;Z++)$.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer($.__webglColorRenderbuffer[Z]);$.__webglDepthRenderbuffer&&i.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let Z=0,le=E.length;Z<le;Z++){const J=n.get(E[Z]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(E[Z])}n.remove(E),n.remove(N)}let H=0;function Y(){H=0}function L(){const N=H;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),H+=1,N}function V(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function q(N,E){const $=n.get(N);if(N.isVideoTexture&&ne(N),N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){const re=N.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q($,N,E);return}}t.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+E)}function ue(N,E){const $=n.get(N);if(N.version>0&&$.__version!==N.version){Q($,N,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+E)}function se(N,E){const $=n.get(N);if(N.version>0&&$.__version!==N.version){Q($,N,E);return}t.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+E)}function ae(N,E){const $=n.get(N);if(N.version>0&&$.__version!==N.version){ve($,N,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+E)}const ie={[Mo]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[yo]:i.MIRRORED_REPEAT},he={[on]:i.NEAREST,[Va]:i.NEAREST_MIPMAP_NEAREST,[_s]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[Ur]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},ee={[Rf]:i.NEVER,[Nf]:i.ALWAYS,[Pf]:i.LESS,[Xu]:i.LEQUAL,[Lf]:i.EQUAL,[Uf]:i.GEQUAL,[Df]:i.GREATER,[If]:i.NOTEQUAL};function ce(N,E,$){if(E.type===Zn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===pn||E.magFilter===Ur||E.magFilter===_s||E.magFilter===Si||E.minFilter===pn||E.minFilter===Ur||E.minFilter===_s||E.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),$?(i.texParameteri(N,i.TEXTURE_WRAP_S,ie[E.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,ie[E.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,ie[E.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,he[E.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,he[E.minFilter])):(i.texParameteri(N,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(N,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==In||E.wrapT!==In)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(N,i.TEXTURE_MAG_FILTER,y(E.magFilter)),i.texParameteri(N,i.TEXTURE_MIN_FILTER,y(E.minFilter)),E.minFilter!==on&&E.minFilter!==pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,ee[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===on||E.minFilter!==_s&&E.minFilter!==Si||E.type===Zn&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Ps&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(N,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function F(N,E){let $=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",C));const re=E.source;let Z=d.get(re);Z===void 0&&(Z={},d.set(re,Z));const le=V(E);if(le!==N.__cacheKey){Z[le]===void 0&&(Z[le]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,$=!0),Z[le].usedTimes++;const J=Z[N.__cacheKey];J!==void 0&&(Z[N.__cacheKey].usedTimes--,J.usedTimes===0&&M(E)),N.__cacheKey=le,N.__webglTexture=Z[le].texture}return $}function Q(N,E,$){let re=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(re=i.TEXTURE_3D);const Z=F(N,E),le=E.source;t.bindTexture(re,N.__webglTexture,i.TEXTURE0+$);const J=n.get(le);if(le.version!==J.__version||Z===!0){t.activeTexture(i.TEXTURE0+$);const de=At.getPrimaries(At.workingColorSpace),me=E.colorSpace===Rn?null:At.getPrimaries(E.colorSpace),Ee=E.colorSpace===Rn||de===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Oe=f(E)&&p(E.image)===!1;let be=_(E.image,Oe,!1,s.maxTextureSize);be=fe(E,be);const ye=p(be)||a,Be=r.convert(E.format,E.colorSpace);let We=r.convert(E.type),ze=R(E.internalFormat,Be,We,E.colorSpace,E.isVideoTexture);ce(re,E,ye);let Pe;const qe=E.mipmaps,k=a&&E.isVideoTexture!==!0&&ze!==Hu,Fe=J.__version===void 0||Z===!0,Ye=le.dataReady,je=S(E,be,ye);if(E.isDepthTexture)ze=i.DEPTH_COMPONENT,a?E.type===Zn?ze=i.DEPTH_COMPONENT32F:E.type===oi?ze=i.DEPTH_COMPONENT24:E.type===Ai?ze=i.DEPTH24_STENCIL8:ze=i.DEPTH_COMPONENT16:E.type===Zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===wi&&ze===i.DEPTH_COMPONENT&&E.type!==Po&&E.type!==oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=oi,We=r.convert(E.type)),E.format===cs&&ze===i.DEPTH_COMPONENT&&(ze=i.DEPTH_STENCIL,E.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Ai,We=r.convert(E.type))),Fe&&(k?t.texStorage2D(i.TEXTURE_2D,1,ze,be.width,be.height):t.texImage2D(i.TEXTURE_2D,0,ze,be.width,be.height,0,Be,We,null));else if(E.isDataTexture)if(qe.length>0&&ye){k&&Fe&&t.texStorage2D(i.TEXTURE_2D,je,ze,qe[0].width,qe[0].height);for(let B=0,Me=qe.length;B<Me;B++)Pe=qe[B],k?Ye&&t.texSubImage2D(i.TEXTURE_2D,B,0,0,Pe.width,Pe.height,Be,We,Pe.data):t.texImage2D(i.TEXTURE_2D,B,ze,Pe.width,Pe.height,0,Be,We,Pe.data);E.generateMipmaps=!1}else k?(Fe&&t.texStorage2D(i.TEXTURE_2D,je,ze,be.width,be.height),Ye&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be.width,be.height,Be,We,be.data)):t.texImage2D(i.TEXTURE_2D,0,ze,be.width,be.height,0,Be,We,be.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&Fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,je,ze,qe[0].width,qe[0].height,be.depth);for(let B=0,Me=qe.length;B<Me;B++)Pe=qe[B],E.format!==Un?Be!==null?k?Ye&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,Pe.width,Pe.height,be.depth,Be,Pe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,B,ze,Pe.width,Pe.height,be.depth,0,Pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Ye&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,Pe.width,Pe.height,be.depth,Be,We,Pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,B,ze,Pe.width,Pe.height,be.depth,0,Be,We,Pe.data)}else{k&&Fe&&t.texStorage2D(i.TEXTURE_2D,je,ze,qe[0].width,qe[0].height);for(let B=0,Me=qe.length;B<Me;B++)Pe=qe[B],E.format!==Un?Be!==null?k?Ye&&t.compressedTexSubImage2D(i.TEXTURE_2D,B,0,0,Pe.width,Pe.height,Be,Pe.data):t.compressedTexImage2D(i.TEXTURE_2D,B,ze,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Ye&&t.texSubImage2D(i.TEXTURE_2D,B,0,0,Pe.width,Pe.height,Be,We,Pe.data):t.texImage2D(i.TEXTURE_2D,B,ze,Pe.width,Pe.height,0,Be,We,Pe.data)}else if(E.isDataArrayTexture)k?(Fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,je,ze,be.width,be.height,be.depth),Ye&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Be,We,be.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ze,be.width,be.height,be.depth,0,Be,We,be.data);else if(E.isData3DTexture)k?(Fe&&t.texStorage3D(i.TEXTURE_3D,je,ze,be.width,be.height,be.depth),Ye&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Be,We,be.data)):t.texImage3D(i.TEXTURE_3D,0,ze,be.width,be.height,be.depth,0,Be,We,be.data);else if(E.isFramebufferTexture){if(Fe)if(k)t.texStorage2D(i.TEXTURE_2D,je,ze,be.width,be.height);else{let B=be.width,Me=be.height;for(let Ae=0;Ae<je;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,ze,B,Me,0,Be,We,null),B>>=1,Me>>=1}}else if(qe.length>0&&ye){k&&Fe&&t.texStorage2D(i.TEXTURE_2D,je,ze,qe[0].width,qe[0].height);for(let B=0,Me=qe.length;B<Me;B++)Pe=qe[B],k?Ye&&t.texSubImage2D(i.TEXTURE_2D,B,0,0,Be,We,Pe):t.texImage2D(i.TEXTURE_2D,B,ze,Be,We,Pe);E.generateMipmaps=!1}else k?(Fe&&t.texStorage2D(i.TEXTURE_2D,je,ze,be.width,be.height),Ye&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Be,We,be)):t.texImage2D(i.TEXTURE_2D,0,ze,Be,We,be);b(E,ye)&&x(re),J.__version=le.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function ve(N,E,$){if(E.image.length!==6)return;const re=F(N,E),Z=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+$);const le=n.get(Z);if(Z.version!==le.__version||re===!0){t.activeTexture(i.TEXTURE0+$);const J=At.getPrimaries(At.workingColorSpace),de=E.colorSpace===Rn?null:At.getPrimaries(E.colorSpace),me=E.colorSpace===Rn||J===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ee=E.isCompressedTexture||E.image[0].isCompressedTexture,Oe=E.image[0]&&E.image[0].isDataTexture,be=[];for(let B=0;B<6;B++)!Ee&&!Oe?be[B]=_(E.image[B],!1,!0,s.maxCubemapSize):be[B]=Oe?E.image[B].image:E.image[B],be[B]=fe(E,be[B]);const ye=be[0],Be=p(ye)||a,We=r.convert(E.format,E.colorSpace),ze=r.convert(E.type),Pe=R(E.internalFormat,We,ze,E.colorSpace),qe=a&&E.isVideoTexture!==!0,k=le.__version===void 0||re===!0,Fe=Z.dataReady;let Ye=S(E,ye,Be);ce(i.TEXTURE_CUBE_MAP,E,Be);let je;if(Ee){qe&&k&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ye,Pe,ye.width,ye.height);for(let B=0;B<6;B++){je=be[B].mipmaps;for(let Me=0;Me<je.length;Me++){const Ae=je[Me];E.format!==Un?We!==null?qe?Fe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,Me,0,0,Ae.width,Ae.height,We,Ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,Me,Pe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?Fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,Me,0,0,Ae.width,Ae.height,We,ze,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,Me,Pe,Ae.width,Ae.height,0,We,ze,Ae.data)}}}else{je=E.mipmaps,qe&&k&&(je.length>0&&Ye++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Ye,Pe,be[0].width,be[0].height));for(let B=0;B<6;B++)if(Oe){qe?Fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,be[B].width,be[B].height,We,ze,be[B].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,Pe,be[B].width,be[B].height,0,We,ze,be[B].data);for(let Me=0;Me<je.length;Me++){const He=je[Me].image[B].image;qe?Fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,Me+1,0,0,He.width,He.height,We,ze,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,Me+1,Pe,He.width,He.height,0,We,ze,He.data)}}else{qe?Fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,We,ze,be[B]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,Pe,We,ze,be[B]);for(let Me=0;Me<je.length;Me++){const Ae=je[Me];qe?Fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,Me+1,0,0,We,ze,Ae.image[B]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,Me+1,Pe,We,ze,Ae.image[B])}}}b(E,Be)&&x(i.TEXTURE_CUBE_MAP),le.__version=Z.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function U(N,E,$,re,Z,le){const J=r.convert($.format,$.colorSpace),de=r.convert($.type),me=R($.internalFormat,J,de,$.colorSpace);if(!n.get(E).__hasExternalTextures){const Oe=Math.max(1,E.width>>le),be=Math.max(1,E.height>>le);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,le,me,Oe,be,E.depth,0,J,de,null):t.texImage2D(Z,le,me,Oe,be,0,J,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),te(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,Z,n.get($).__webglTexture,0,Re(E)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,Z,n.get($).__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function G(N,E,$){if(i.bindRenderbuffer(i.RENDERBUFFER,N),E.depthBuffer&&!E.stencilBuffer){let re=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if($||te(E)){const Z=E.depthTexture;Z&&Z.isDepthTexture&&(Z.type===Zn?re=i.DEPTH_COMPONENT32F:Z.type===oi&&(re=i.DEPTH_COMPONENT24));const le=Re(E);te(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,re,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,le,re,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,re,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,N)}else if(E.depthBuffer&&E.stencilBuffer){const re=Re(E);$&&te(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,i.DEPTH24_STENCIL8,E.width,E.height):te(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,N)}else{const re=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Z=0;Z<re.length;Z++){const le=re[Z],J=r.convert(le.format,le.colorSpace),de=r.convert(le.type),me=R(le.internalFormat,J,de,le.colorSpace),Ee=Re(E);$&&te(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,me,E.width,E.height):te(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,me,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,me,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function oe(N,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),q(E.depthTexture,0);const re=n.get(E.depthTexture).__webglTexture,Z=Re(E);if(E.depthTexture.format===wi)te(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(E.depthTexture.format===cs)te(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function pe(N){const E=n.get(N),$=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");oe(E.__webglFramebuffer,N)}else if($){E.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[re]),E.__webglDepthbuffer[re]=i.createRenderbuffer(),G(E.__webglDepthbuffer[re],N,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),G(E.__webglDepthbuffer,N,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(N,E,$){const re=n.get(N);E!==void 0&&U(re.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&pe(N)}function W(N){const E=N.texture,$=n.get(N),re=n.get(E);N.addEventListener("dispose",D),N.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=E.version,o.memory.textures++);const Z=N.isWebGLCubeRenderTarget===!0,le=N.isWebGLMultipleRenderTargets===!0,J=p(N)||a;if(Z){$.__webglFramebuffer=[];for(let de=0;de<6;de++)if(a&&E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[de]=[];for(let me=0;me<E.mipmaps.length;me++)$.__webglFramebuffer[de][me]=i.createFramebuffer()}else $.__webglFramebuffer[de]=i.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let de=0;de<E.mipmaps.length;de++)$.__webglFramebuffer[de]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(le)if(s.drawBuffers){const de=N.texture;for(let me=0,Ee=de.length;me<Ee;me++){const Oe=n.get(de[me]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&N.samples>0&&te(N)===!1){const de=le?E:[E];$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let me=0;me<de.length;me++){const Ee=de[me];$.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[me]);const Oe=r.convert(Ee.format,Ee.colorSpace),be=r.convert(Ee.type),ye=R(Ee.internalFormat,Oe,be,Ee.colorSpace,N.isXRRenderTarget===!0),Be=Re(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,ye,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,$.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),G($.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),ce(i.TEXTURE_CUBE_MAP,E,J);for(let de=0;de<6;de++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)U($.__webglFramebuffer[de][me],N,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,me);else U($.__webglFramebuffer[de],N,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);b(E,J)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){const de=N.texture;for(let me=0,Ee=de.length;me<Ee;me++){const Oe=de[me],be=n.get(Oe);t.bindTexture(i.TEXTURE_2D,be.__webglTexture),ce(i.TEXTURE_2D,Oe,J),U($.__webglFramebuffer,N,Oe,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,0),b(Oe,J)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(a?de=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,re.__webglTexture),ce(de,E,J),a&&E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)U($.__webglFramebuffer[me],N,E,i.COLOR_ATTACHMENT0,de,me);else U($.__webglFramebuffer,N,E,i.COLOR_ATTACHMENT0,de,0);b(E,J)&&x(de),t.unbindTexture()}N.depthBuffer&&pe(N)}function Le(N){const E=p(N)||a,$=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let re=0,Z=$.length;re<Z;re++){const le=$[re];if(b(le,E)){const J=N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,de=n.get(le).__webglTexture;t.bindTexture(J,de),x(J),t.unbindTexture()}}}function xe(N){if(a&&N.samples>0&&te(N)===!1){const E=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],$=N.width,re=N.height;let Z=i.COLOR_BUFFER_BIT;const le=[],J=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(N),me=N.isWebGLMultipleRenderTargets===!0;if(me)for(let Ee=0;Ee<E.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Ee=0;Ee<E.length;Ee++){le.push(i.COLOR_ATTACHMENT0+Ee),N.depthBuffer&&le.push(J);const Oe=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(Oe===!1&&(N.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),me&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[Ee]),Oe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[J]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[J])),me){const be=n.get(E[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,be,0)}i.blitFramebuffer(0,0,$,re,0,0,$,re,Z,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,le)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let Ee=0;Ee<E.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,de.__webglColorRenderbuffer[Ee]);const Oe=n.get(E[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,Oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function Re(N){return Math.min(s.maxSamples,N.samples)}function te(N){const E=n.get(N);return a&&N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ne(N){const E=o.render.frame;u.get(N)!==E&&(u.set(N,E),N.update())}function fe(N,E){const $=N.colorSpace,re=N.format,Z=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||N.format===So||$!==Qn&&$!==Rn&&(At.getTransfer($)===Rt?a===!1?e.has("EXT_sRGB")===!0&&re===Un?(N.format=So,N.minFilter=pn,N.generateMipmaps=!1):E=qu.sRGBToLinear(E):(re!==Un||Z!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}this.allocateTextureUnit=L,this.resetTextureUnits=Y,this.setTexture2D=q,this.setTexture2DArray=ue,this.setTexture3D=se,this.setTextureCube=ae,this.rebindTextures=Ce,this.setupRenderTarget=W,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=U,this.useMultisampledRTT=te}function Fg(i,e,t){const n=t.isWebGL2;function s(r,o=Rn){let a;const c=At.getTransfer(o);if(r===ui)return i.UNSIGNED_BYTE;if(r===Fu)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Bu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===vf)return i.BYTE;if(r===xf)return i.SHORT;if(r===Po)return i.UNSIGNED_SHORT;if(r===Ou)return i.INT;if(r===oi)return i.UNSIGNED_INT;if(r===Zn)return i.FLOAT;if(r===Ps)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===bf)return i.ALPHA;if(r===Un)return i.RGBA;if(r===Ef)return i.LUMINANCE;if(r===Mf)return i.LUMINANCE_ALPHA;if(r===wi)return i.DEPTH_COMPONENT;if(r===cs)return i.DEPTH_STENCIL;if(r===So)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===yf)return i.RED;if(r===ku)return i.RED_INTEGER;if(r===Sf)return i.RG;if(r===zu)return i.RG_INTEGER;if(r===Vu)return i.RGBA_INTEGER;if(r===Nr||r===Or||r===Fr||r===Br)if(c===Rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Nr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Or)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Br)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Nr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Or)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Br)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ha||r===Ga||r===Wa||r===Xa)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Ha)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ga)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Wa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Xa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Hu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ja||r===qa)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ja)return c===Rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===qa)return c===Rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ya||r===Ka||r===Za||r===Ja||r===$a||r===Qa||r===el||r===tl||r===nl||r===il||r===sl||r===rl||r===ol||r===al)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ya)return c===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ka)return c===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Za)return c===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ja)return c===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===$a)return c===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Qa)return c===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===el)return c===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===tl)return c===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===nl)return c===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===il)return c===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===sl)return c===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===rl)return c===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ol)return c===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===al)return c===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===kr||r===ll||r===cl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===kr)return c===Rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ll)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===cl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Tf||r===ul||r===hl||r===fl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===kr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===ul)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===hl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===fl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ai?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class Bg extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class is extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kg={type:"move"};class co{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new is,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new is,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new we,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new we),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new is,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new we,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new we),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),f=this._getHandJoint(l,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),g=.02,v=.005;l.inputState.pinching&&d>g+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=g-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new is;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const zg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vg=`
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

}`;class Hg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new nn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,s=new di({extensions:{fragDepth:!0},vertexShader:zg,fragmentShader:Vg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new jt(new hs(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Gg extends Di{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,g=null,v=null;const _=new Hg,p=t.getContextAttributes();let f=null,b=null;const x=[],R=[],S=new ut;let y=null;const C=new Cn;C.layers.enable(1),C.viewport=new qt;const D=new Cn;D.layers.enable(2),D.viewport=new qt;const O=[C,D],M=new Bg;M.layers.enable(1),M.layers.enable(2);let P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let Q=x[F];return Q===void 0&&(Q=new co,x[F]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(F){let Q=x[F];return Q===void 0&&(Q=new co,x[F]=Q),Q.getGripSpace()},this.getHand=function(F){let Q=x[F];return Q===void 0&&(Q=new co,x[F]=Q),Q.getHandSpace()};function Y(F){const Q=R.indexOf(F.inputSource);if(Q===-1)return;const ve=x[Q];ve!==void 0&&(ve.update(F.inputSource,F.frame,l||o),ve.dispatchEvent({type:F.type,data:F.inputSource}))}function L(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",V);for(let F=0;F<x.length;F++){const Q=R[F];Q!==null&&(R[F]=null,x[F].disconnect(Q))}P=null,H=null,_.reset(),e.setRenderTarget(f),g=null,d=null,h=null,s=null,b=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",L),s.addEventListener("inputsourceschange",V),p.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(S),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:s.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,Q),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),b=new Ri(g.framebufferWidth,g.framebufferHeight,{format:Un,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,ve=null,U=null;p.depth&&(U=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=p.stencil?cs:wi,ve=p.stencil?Ai:oi);const G={colorFormat:t.RGBA8,depthFormat:U,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(G),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Ri(d.textureWidth,d.textureHeight,{format:Un,type:ui,depthTexture:new rh(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const oe=e.properties.get(b);oe.__ignoreDepthValues=d.ignoreDepthValues}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ce.setContext(s),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function V(F){for(let Q=0;Q<F.removed.length;Q++){const ve=F.removed[Q],U=R.indexOf(ve);U>=0&&(R[U]=null,x[U].disconnect(ve))}for(let Q=0;Q<F.added.length;Q++){const ve=F.added[Q];let U=R.indexOf(ve);if(U===-1){for(let oe=0;oe<x.length;oe++)if(oe>=R.length){R.push(ve),U=oe;break}else if(R[oe]===null){R[oe]=ve,U=oe;break}if(U===-1)break}const G=x[U];G&&G.connect(ve)}}const q=new we,ue=new we;function se(F,Q,ve){q.setFromMatrixPosition(Q.matrixWorld),ue.setFromMatrixPosition(ve.matrixWorld);const U=q.distanceTo(ue),G=Q.projectionMatrix.elements,oe=ve.projectionMatrix.elements,pe=G[14]/(G[10]-1),Ce=G[14]/(G[10]+1),W=(G[9]+1)/G[5],Le=(G[9]-1)/G[5],xe=(G[8]-1)/G[0],Re=(oe[8]+1)/oe[0],te=pe*xe,ne=pe*Re,fe=U/(-xe+Re),N=fe*-xe;Q.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(N),F.translateZ(fe),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const E=pe+fe,$=Ce+fe,re=te-N,Z=ne+(U-N),le=W*Ce/$*E,J=Le*Ce/$*E;F.projectionMatrix.makePerspective(re,Z,le,J,E,$),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function ae(F,Q){Q===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(Q.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;_.texture!==null&&(F.near=_.depthNear,F.far=_.depthFar),M.near=D.near=C.near=F.near,M.far=D.far=C.far=F.far,(P!==M.near||H!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,H=M.far,C.near=P,C.far=H,D.near=P,D.far=H,C.updateProjectionMatrix(),D.updateProjectionMatrix(),F.updateProjectionMatrix());const Q=F.parent,ve=M.cameras;ae(M,Q);for(let U=0;U<ve.length;U++)ae(ve[U],Q);ve.length===2?se(M,C,D):M.projectionMatrix.copy(C.projectionMatrix),ie(F,M,Q)};function ie(F,Q,ve){ve===null?F.matrix.copy(Q.matrixWorld):(F.matrix.copy(ve.matrixWorld),F.matrix.invert(),F.matrix.multiply(Q.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(Q.projectionMatrix),F.projectionMatrixInverse.copy(Q.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=To*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&g===null))return c},this.setFoveation=function(F){c=F,d!==null&&(d.fixedFoveation=F),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=F)},this.hasDepthSensing=function(){return _.texture!==null};let he=null;function ee(F,Q){if(u=Q.getViewerPose(l||o),v=Q,u!==null){const ve=u.views;g!==null&&(e.setRenderTargetFramebuffer(b,g.framebuffer),e.setRenderTarget(b));let U=!1;ve.length!==M.cameras.length&&(M.cameras.length=0,U=!0);for(let oe=0;oe<ve.length;oe++){const pe=ve[oe];let Ce=null;if(g!==null)Ce=g.getViewport(pe);else{const Le=h.getViewSubImage(d,pe);Ce=Le.viewport,oe===0&&(e.setRenderTargetTextures(b,Le.colorTexture,d.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(b))}let W=O[oe];W===void 0&&(W=new Cn,W.layers.enable(oe),W.viewport=new qt,O[oe]=W),W.matrix.fromArray(pe.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(pe.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),oe===0&&(M.matrix.copy(W.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),U===!0&&M.cameras.push(W)}const G=s.enabledFeatures;if(G&&G.includes("depth-sensing")){const oe=h.getDepthInformation(ve[0]);oe&&oe.isValid&&oe.texture&&_.init(e,oe,s.renderState)}}for(let ve=0;ve<x.length;ve++){const U=R[ve],G=x[ve];U!==null&&G!==void 0&&G.update(U,Q,l||o)}_.render(e,M),he&&he(F,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),v=null}const ce=new ih;ce.setAnimationLoop(ee),this.setAnimationLoop=function(F){he=F},this.dispose=function(){}}}function Wg(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,eh(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,b,x,R){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),h(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&g(p,f,R)):f.isMeshMatcapMaterial?(r(p,f),v(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),_(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?c(p,f,b,x):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===xn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===xn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const b=e.get(f).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*x,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,b,x){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*b,p.scale.value=x*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function g(p,f,b){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===xn&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const b=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Xg(i,e,t,n){let s={},r={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(b,x){const R=x.program;n.uniformBlockBinding(b,R)}function l(b,x){let R=s[b.id];R===void 0&&(v(b),R=u(b),s[b.id]=R,b.addEventListener("dispose",p));const S=x.program;n.updateUBOMapping(b,S);const y=e.render.frame;r[b.id]!==y&&(d(b),r[b.id]=y)}function u(b){const x=h();b.__bindingPointIndex=x;const R=i.createBuffer(),S=b.__size,y=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,S,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,R),R}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const x=s[b.id],R=b.uniforms,S=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let y=0,C=R.length;y<C;y++){const D=Array.isArray(R[y])?R[y]:[R[y]];for(let O=0,M=D.length;O<M;O++){const P=D[O];if(g(P,y,O,S)===!0){const H=P.__offset,Y=Array.isArray(P.value)?P.value:[P.value];let L=0;for(let V=0;V<Y.length;V++){const q=Y[V],ue=_(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,H+L,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,L),L+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(b,x,R,S){const y=b.value,C=x+"_"+R;if(S[C]===void 0)return typeof y=="number"||typeof y=="boolean"?S[C]=y:S[C]=y.clone(),!0;{const D=S[C];if(typeof y=="number"||typeof y=="boolean"){if(D!==y)return S[C]=y,!0}else if(D.equals(y)===!1)return D.copy(y),!0}return!1}function v(b){const x=b.uniforms;let R=0;const S=16;for(let C=0,D=x.length;C<D;C++){const O=Array.isArray(x[C])?x[C]:[x[C]];for(let M=0,P=O.length;M<P;M++){const H=O[M],Y=Array.isArray(H.value)?H.value:[H.value];for(let L=0,V=Y.length;L<V;L++){const q=Y[L],ue=_(q),se=R%S;se!==0&&S-se<ue.boundary&&(R+=S-se),H.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=R,R+=ue.storage}}}const y=R%S;return y>0&&(R+=S-y),b.__size=R,b.__cache={},this}function _(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function p(b){const x=b.target;x.removeEventListener("dispose",p);const R=o.indexOf(x.__bindingPointIndex);o.splice(R,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(const b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}class hh{constructor(e={}){const{canvas:t=Bf(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const g=new Uint32Array(4),v=new Int32Array(4);let _=null,p=null;const f=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yt,this._useLegacyLights=!1,this.toneMapping=ci,this.toneMappingExposure=1;const x=this;let R=!1,S=0,y=0,C=null,D=-1,O=null;const M=new qt,P=new qt;let H=null;const Y=new _t(0);let L=0,V=t.width,q=t.height,ue=1,se=null,ae=null;const ie=new qt(0,0,V,q),he=new qt(0,0,V,q);let ee=!1;const ce=new Io;let F=!1,Q=!1,ve=null;const U=new zt,G=new ut,oe=new we,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ce(){return C===null?ue:1}let W=n;function Le(K,De){for(let Ne=0;Ne<K.length;Ne++){const ke=K[Ne],Ue=t.getContext(ke,De);if(Ue!==null)return Ue}return null}try{const K={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Co}`),t.addEventListener("webglcontextlost",je,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",Me,!1),W===null){const De=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&De.shift(),W=Le(De,K),W===null)throw Le(De)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(K){throw console.error("THREE.WebGLRenderer: "+K.message),K}let xe,Re,te,ne,fe,N,E,$,re,Z,le,J,de,me,Ee,Oe,be,ye,Be,We,ze,Pe,qe,k;function Fe(){xe=new $m(W),Re=new jm(W,xe,e),xe.init(Re),Pe=new Fg(W,xe,Re),te=new Ng(W,xe,Re),ne=new t_(W),fe=new Eg,N=new Og(W,xe,te,fe,Re,Pe,ne),E=new Ym(x),$=new Jm(x),re=new cd(W,Re),qe=new Wm(W,xe,re,Re),Z=new Qm(W,re,ne,qe),le=new r_(W,Z,re,ne),Be=new s_(W,Re,N),Oe=new qm(fe),J=new bg(x,E,$,xe,Re,qe,Oe),de=new Wg(x,fe),me=new yg,Ee=new Rg(xe,Re),ye=new Gm(x,E,$,te,le,d,c),be=new Ug(x,le,Re),k=new Xg(W,ne,Re,te),We=new Xm(W,xe,ne,Re),ze=new e_(W,xe,ne,Re),ne.programs=J.programs,x.capabilities=Re,x.extensions=xe,x.properties=fe,x.renderLists=me,x.shadowMap=be,x.state=te,x.info=ne}Fe();const Ye=new Gg(x,W);this.xr=Ye,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const K=xe.get("WEBGL_lose_context");K&&K.loseContext()},this.forceContextRestore=function(){const K=xe.get("WEBGL_lose_context");K&&K.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(K){K!==void 0&&(ue=K,this.setSize(V,q,!1))},this.getSize=function(K){return K.set(V,q)},this.setSize=function(K,De,Ne=!0){if(Ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=K,q=De,t.width=Math.floor(K*ue),t.height=Math.floor(De*ue),Ne===!0&&(t.style.width=K+"px",t.style.height=De+"px"),this.setViewport(0,0,K,De)},this.getDrawingBufferSize=function(K){return K.set(V*ue,q*ue).floor()},this.setDrawingBufferSize=function(K,De,Ne){V=K,q=De,ue=Ne,t.width=Math.floor(K*Ne),t.height=Math.floor(De*Ne),this.setViewport(0,0,K,De)},this.getCurrentViewport=function(K){return K.copy(M)},this.getViewport=function(K){return K.copy(ie)},this.setViewport=function(K,De,Ne,ke){K.isVector4?ie.set(K.x,K.y,K.z,K.w):ie.set(K,De,Ne,ke),te.viewport(M.copy(ie).multiplyScalar(ue).floor())},this.getScissor=function(K){return K.copy(he)},this.setScissor=function(K,De,Ne,ke){K.isVector4?he.set(K.x,K.y,K.z,K.w):he.set(K,De,Ne,ke),te.scissor(P.copy(he).multiplyScalar(ue).floor())},this.getScissorTest=function(){return ee},this.setScissorTest=function(K){te.setScissorTest(ee=K)},this.setOpaqueSort=function(K){se=K},this.setTransparentSort=function(K){ae=K},this.getClearColor=function(K){return K.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor.apply(ye,arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha.apply(ye,arguments)},this.clear=function(K=!0,De=!0,Ne=!0){let ke=0;if(K){let Ue=!1;if(C!==null){const Qe=C.texture.format;Ue=Qe===Vu||Qe===zu||Qe===ku}if(Ue){const Qe=C.texture.type,st=Qe===ui||Qe===oi||Qe===Po||Qe===Ai||Qe===Fu||Qe===Bu,rt=ye.getClearColor(),ct=ye.getClearAlpha(),gt=rt.r,dt=rt.g,pt=rt.b;st?(g[0]=gt,g[1]=dt,g[2]=pt,g[3]=ct,W.clearBufferuiv(W.COLOR,0,g)):(v[0]=gt,v[1]=dt,v[2]=pt,v[3]=ct,W.clearBufferiv(W.COLOR,0,v))}else ke|=W.COLOR_BUFFER_BIT}De&&(ke|=W.DEPTH_BUFFER_BIT),Ne&&(ke|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(ke)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),me.dispose(),Ee.dispose(),fe.dispose(),E.dispose(),$.dispose(),le.dispose(),qe.dispose(),k.dispose(),J.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",St),Ye.removeEventListener("sessionend",lt),ve&&(ve.dispose(),ve=null),Mt.stop()};function je(K){K.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const K=ne.autoReset,De=be.enabled,Ne=be.autoUpdate,ke=be.needsUpdate,Ue=be.type;Fe(),ne.autoReset=K,be.enabled=De,be.autoUpdate=Ne,be.needsUpdate=ke,be.type=Ue}function Me(K){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",K.statusMessage)}function Ae(K){const De=K.target;De.removeEventListener("dispose",Ae),He(De)}function He(K){Ge(K),fe.remove(K)}function Ge(K){const De=fe.get(K).programs;De!==void 0&&(De.forEach(function(Ne){J.releaseProgram(Ne)}),K.isShaderMaterial&&J.releaseShaderCache(K))}this.renderBufferDirect=function(K,De,Ne,ke,Ue,Qe){De===null&&(De=pe);const st=Ue.isMesh&&Ue.matrixWorld.determinant()<0,rt=zn(K,De,Ne,ke,Ue);te.setMaterial(ke,st);let ct=Ne.index,gt=1;if(ke.wireframe===!0){if(ct=Z.getWireframeAttribute(Ne),ct===void 0)return;gt=2}const dt=Ne.drawRange,pt=Ne.attributes.position;let Ot=dt.start*gt,En=(dt.start+dt.count)*gt;Qe!==null&&(Ot=Math.max(Ot,Qe.start*gt),En=Math.min(En,(Qe.start+Qe.count)*gt)),ct!==null?(Ot=Math.max(Ot,0),En=Math.min(En,ct.count)):pt!=null&&(Ot=Math.max(Ot,0),En=Math.min(En,pt.count));const Wt=En-Ot;if(Wt<0||Wt===1/0)return;qe.setup(Ue,ke,rt,Ne,ct);let Vn,Lt=We;if(ct!==null&&(Vn=re.get(ct),Lt=ze,Lt.setIndex(Vn)),Ue.isMesh)ke.wireframe===!0?(te.setLineWidth(ke.wireframeLinewidth*Ce()),Lt.setMode(W.LINES)):Lt.setMode(W.TRIANGLES);else if(Ue.isLine){let vt=ke.linewidth;vt===void 0&&(vt=1),te.setLineWidth(vt*Ce()),Ue.isLineSegments?Lt.setMode(W.LINES):Ue.isLineLoop?Lt.setMode(W.LINE_LOOP):Lt.setMode(W.LINE_STRIP)}else Ue.isPoints?Lt.setMode(W.POINTS):Ue.isSprite&&Lt.setMode(W.TRIANGLES);if(Ue.isBatchedMesh)Lt.renderMultiDraw(Ue._multiDrawStarts,Ue._multiDrawCounts,Ue._multiDrawCount);else if(Ue.isInstancedMesh)Lt.renderInstances(Ot,Wt,Ue.count);else if(Ne.isInstancedBufferGeometry){const vt=Ne._maxInstanceCount!==void 0?Ne._maxInstanceCount:1/0,Pr=Math.min(Ne.instanceCount,vt);Lt.renderInstances(Ot,Wt,Pr)}else Lt.render(Ot,Wt)};function et(K,De,Ne){K.transparent===!0&&K.side===an&&K.forceSinglePass===!1?(K.side=xn,K.needsUpdate=!0,bn(K,De,Ne),K.side=fi,K.needsUpdate=!0,bn(K,De,Ne),K.side=an):bn(K,De,Ne)}this.compile=function(K,De,Ne=null){Ne===null&&(Ne=K),p=Ee.get(Ne),p.init(),b.push(p),Ne.traverseVisible(function(Ue){Ue.isLight&&Ue.layers.test(De.layers)&&(p.pushLight(Ue),Ue.castShadow&&p.pushShadow(Ue))}),K!==Ne&&K.traverseVisible(function(Ue){Ue.isLight&&Ue.layers.test(De.layers)&&(p.pushLight(Ue),Ue.castShadow&&p.pushShadow(Ue))}),p.setupLights(x._useLegacyLights);const ke=new Set;return K.traverse(function(Ue){const Qe=Ue.material;if(Qe)if(Array.isArray(Qe))for(let st=0;st<Qe.length;st++){const rt=Qe[st];et(rt,Ne,Ue),ke.add(rt)}else et(Qe,Ne,Ue),ke.add(Qe)}),b.pop(),p=null,ke},this.compileAsync=function(K,De,Ne=null){const ke=this.compile(K,De,Ne);return new Promise(Ue=>{function Qe(){if(ke.forEach(function(st){fe.get(st).currentProgram.isReady()&&ke.delete(st)}),ke.size===0){Ue(K);return}setTimeout(Qe,10)}xe.get("KHR_parallel_shader_compile")!==null?Qe():setTimeout(Qe,10)})};let it=null;function at(K){it&&it(K)}function St(){Mt.stop()}function lt(){Mt.start()}const Mt=new ih;Mt.setAnimationLoop(at),typeof self<"u"&&Mt.setContext(self),this.setAnimationLoop=function(K){it=K,Ye.setAnimationLoop(K),K===null?Mt.stop():Mt.start()},Ye.addEventListener("sessionstart",St),Ye.addEventListener("sessionend",lt),this.render=function(K,De){if(De!==void 0&&De.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),De.parent===null&&De.matrixWorldAutoUpdate===!0&&De.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(De),De=Ye.getCamera()),K.isScene===!0&&K.onBeforeRender(x,K,De,C),p=Ee.get(K,b.length),p.init(),b.push(p),U.multiplyMatrices(De.projectionMatrix,De.matrixWorldInverse),ce.setFromProjectionMatrix(U),Q=this.localClippingEnabled,F=Oe.init(this.clippingPlanes,Q),_=me.get(K,f.length),_.init(),f.push(_),ft(K,De,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(se,ae),this.info.render.frame++,F===!0&&Oe.beginShadows();const Ne=p.state.shadowsArray;if(be.render(Ne,K,De),F===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ye.enabled===!1||Ye.isPresenting===!1||Ye.hasDepthSensing()===!1)&&ye.render(_,K),p.setupLights(x._useLegacyLights),De.isArrayCamera){const ke=De.cameras;for(let Ue=0,Qe=ke.length;Ue<Qe;Ue++){const st=ke[Ue];Nt(_,K,st,st.viewport)}}else Nt(_,K,De);C!==null&&(N.updateMultisampleRenderTarget(C),N.updateRenderTargetMipmap(C)),K.isScene===!0&&K.onAfterRender(x,K,De),qe.resetDefaultState(),D=-1,O=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function ft(K,De,Ne,ke){if(K.visible===!1)return;if(K.layers.test(De.layers)){if(K.isGroup)Ne=K.renderOrder;else if(K.isLOD)K.autoUpdate===!0&&K.update(De);else if(K.isLight)p.pushLight(K),K.castShadow&&p.pushShadow(K);else if(K.isSprite){if(!K.frustumCulled||ce.intersectsSprite(K)){ke&&oe.setFromMatrixPosition(K.matrixWorld).applyMatrix4(U);const st=le.update(K),rt=K.material;rt.visible&&_.push(K,st,rt,Ne,oe.z,null)}}else if((K.isMesh||K.isLine||K.isPoints)&&(!K.frustumCulled||ce.intersectsObject(K))){const st=le.update(K),rt=K.material;if(ke&&(K.boundingSphere!==void 0?(K.boundingSphere===null&&K.computeBoundingSphere(),oe.copy(K.boundingSphere.center)):(st.boundingSphere===null&&st.computeBoundingSphere(),oe.copy(st.boundingSphere.center)),oe.applyMatrix4(K.matrixWorld).applyMatrix4(U)),Array.isArray(rt)){const ct=st.groups;for(let gt=0,dt=ct.length;gt<dt;gt++){const pt=ct[gt],Ot=rt[pt.materialIndex];Ot&&Ot.visible&&_.push(K,st,Ot,Ne,oe.z,pt)}}else rt.visible&&_.push(K,st,rt,Ne,oe.z,null)}}const Qe=K.children;for(let st=0,rt=Qe.length;st<rt;st++)ft(Qe[st],De,Ne,ke)}function Nt(K,De,Ne,ke){const Ue=K.opaque,Qe=K.transmissive,st=K.transparent;p.setupLightsView(Ne),F===!0&&Oe.setGlobalState(x.clippingPlanes,Ne),Qe.length>0&&Ft(Ue,Qe,De,Ne),ke&&te.viewport(M.copy(ke)),Ue.length>0&&Gt(Ue,De,Ne),Qe.length>0&&Gt(Qe,De,Ne),st.length>0&&Gt(st,De,Ne),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function Ft(K,De,Ne,ke){if((Ne.isScene===!0?Ne.overrideMaterial:null)!==null)return;const Qe=Re.isWebGL2;ve===null&&(ve=new Ri(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?Ps:ui,minFilter:Si,samples:Qe?4:0})),x.getDrawingBufferSize(G),Qe?ve.setSize(G.x,G.y):ve.setSize(Ao(G.x),Ao(G.y));const st=x.getRenderTarget();x.setRenderTarget(ve),x.getClearColor(Y),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const rt=x.toneMapping;x.toneMapping=ci,Gt(K,Ne,ke),N.updateMultisampleRenderTarget(ve),N.updateRenderTargetMipmap(ve);let ct=!1;for(let gt=0,dt=De.length;gt<dt;gt++){const pt=De[gt],Ot=pt.object,En=pt.geometry,Wt=pt.material,Vn=pt.group;if(Wt.side===an&&Ot.layers.test(ke.layers)){const Lt=Wt.side;Wt.side=xn,Wt.needsUpdate=!0,fn(Ot,Ne,ke,En,Wt,Vn),Wt.side=Lt,Wt.needsUpdate=!0,ct=!0}}ct===!0&&(N.updateMultisampleRenderTarget(ve),N.updateRenderTargetMipmap(ve)),x.setRenderTarget(st),x.setClearColor(Y,L),x.toneMapping=rt}function Gt(K,De,Ne){const ke=De.isScene===!0?De.overrideMaterial:null;for(let Ue=0,Qe=K.length;Ue<Qe;Ue++){const st=K[Ue],rt=st.object,ct=st.geometry,gt=ke===null?st.material:ke,dt=st.group;rt.layers.test(Ne.layers)&&fn(rt,De,Ne,ct,gt,dt)}}function fn(K,De,Ne,ke,Ue,Qe){K.onBeforeRender(x,De,Ne,ke,Ue,Qe),K.modelViewMatrix.multiplyMatrices(Ne.matrixWorldInverse,K.matrixWorld),K.normalMatrix.getNormalMatrix(K.modelViewMatrix),Ue.onBeforeRender(x,De,Ne,ke,K,Qe),Ue.transparent===!0&&Ue.side===an&&Ue.forceSinglePass===!1?(Ue.side=xn,Ue.needsUpdate=!0,x.renderBufferDirect(Ne,De,ke,Ue,K,Qe),Ue.side=fi,Ue.needsUpdate=!0,x.renderBufferDirect(Ne,De,ke,Ue,K,Qe),Ue.side=an):x.renderBufferDirect(Ne,De,ke,Ue,K,Qe),K.onAfterRender(x,De,Ne,ke,Ue,Qe)}function bn(K,De,Ne){De.isScene!==!0&&(De=pe);const ke=fe.get(K),Ue=p.state.lights,Qe=p.state.shadowsArray,st=Ue.state.version,rt=J.getParameters(K,Ue.state,Qe,De,Ne),ct=J.getProgramCacheKey(rt);let gt=ke.programs;ke.environment=K.isMeshStandardMaterial?De.environment:null,ke.fog=De.fog,ke.envMap=(K.isMeshStandardMaterial?$:E).get(K.envMap||ke.environment),gt===void 0&&(K.addEventListener("dispose",Ae),gt=new Map,ke.programs=gt);let dt=gt.get(ct);if(dt!==void 0){if(ke.currentProgram===dt&&ke.lightsStateVersion===st)return ps(K,rt),dt}else rt.uniforms=J.getUniforms(K),K.onBuild(Ne,rt,x),K.onBeforeCompile(rt,x),dt=J.acquireProgram(rt,ct),gt.set(ct,dt),ke.uniforms=rt.uniforms;const pt=ke.uniforms;return(!K.isShaderMaterial&&!K.isRawShaderMaterial||K.clipping===!0)&&(pt.clippingPlanes=Oe.uniform),ps(K,rt),ke.needsLights=mh(K),ke.lightsStateVersion=st,ke.needsLights&&(pt.ambientLightColor.value=Ue.state.ambient,pt.lightProbe.value=Ue.state.probe,pt.directionalLights.value=Ue.state.directional,pt.directionalLightShadows.value=Ue.state.directionalShadow,pt.spotLights.value=Ue.state.spot,pt.spotLightShadows.value=Ue.state.spotShadow,pt.rectAreaLights.value=Ue.state.rectArea,pt.ltc_1.value=Ue.state.rectAreaLTC1,pt.ltc_2.value=Ue.state.rectAreaLTC2,pt.pointLights.value=Ue.state.point,pt.pointLightShadows.value=Ue.state.pointShadow,pt.hemisphereLights.value=Ue.state.hemi,pt.directionalShadowMap.value=Ue.state.directionalShadowMap,pt.directionalShadowMatrix.value=Ue.state.directionalShadowMatrix,pt.spotShadowMap.value=Ue.state.spotShadowMap,pt.spotLightMatrix.value=Ue.state.spotLightMatrix,pt.spotLightMap.value=Ue.state.spotLightMap,pt.pointShadowMap.value=Ue.state.pointShadowMap,pt.pointShadowMatrix.value=Ue.state.pointShadowMatrix),ke.currentProgram=dt,ke.uniformsList=null,dt}function Tn(K){if(K.uniformsList===null){const De=K.currentProgram.getUniforms();K.uniformsList=cr.seqWithValue(De.seq,K.uniforms)}return K.uniformsList}function ps(K,De){const Ne=fe.get(K);Ne.outputColorSpace=De.outputColorSpace,Ne.batching=De.batching,Ne.instancing=De.instancing,Ne.instancingColor=De.instancingColor,Ne.skinning=De.skinning,Ne.morphTargets=De.morphTargets,Ne.morphNormals=De.morphNormals,Ne.morphColors=De.morphColors,Ne.morphTargetsCount=De.morphTargetsCount,Ne.numClippingPlanes=De.numClippingPlanes,Ne.numIntersection=De.numClipIntersection,Ne.vertexAlphas=De.vertexAlphas,Ne.vertexTangents=De.vertexTangents,Ne.toneMapping=De.toneMapping}function zn(K,De,Ne,ke,Ue){De.isScene!==!0&&(De=pe),N.resetTextureUnits();const Qe=De.fog,st=ke.isMeshStandardMaterial?De.environment:null,rt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Qn,ct=(ke.isMeshStandardMaterial?$:E).get(ke.envMap||st),gt=ke.vertexColors===!0&&!!Ne.attributes.color&&Ne.attributes.color.itemSize===4,dt=!!Ne.attributes.tangent&&(!!ke.normalMap||ke.anisotropy>0),pt=!!Ne.morphAttributes.position,Ot=!!Ne.morphAttributes.normal,En=!!Ne.morphAttributes.color;let Wt=ci;ke.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Wt=x.toneMapping);const Vn=Ne.morphAttributes.position||Ne.morphAttributes.normal||Ne.morphAttributes.color,Lt=Vn!==void 0?Vn.length:0,vt=fe.get(ke),Pr=p.state.lights;if(F===!0&&(Q===!0||K!==O)){const An=K===O&&ke.id===D;Oe.setState(ke,K,An)}let Dt=!1;ke.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==Pr.state.version||vt.outputColorSpace!==rt||Ue.isBatchedMesh&&vt.batching===!1||!Ue.isBatchedMesh&&vt.batching===!0||Ue.isInstancedMesh&&vt.instancing===!1||!Ue.isInstancedMesh&&vt.instancing===!0||Ue.isSkinnedMesh&&vt.skinning===!1||!Ue.isSkinnedMesh&&vt.skinning===!0||Ue.isInstancedMesh&&vt.instancingColor===!0&&Ue.instanceColor===null||Ue.isInstancedMesh&&vt.instancingColor===!1&&Ue.instanceColor!==null||vt.envMap!==ct||ke.fog===!0&&vt.fog!==Qe||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==Oe.numPlanes||vt.numIntersection!==Oe.numIntersection)||vt.vertexAlphas!==gt||vt.vertexTangents!==dt||vt.morphTargets!==pt||vt.morphNormals!==Ot||vt.morphColors!==En||vt.toneMapping!==Wt||Re.isWebGL2===!0&&vt.morphTargetsCount!==Lt)&&(Dt=!0):(Dt=!0,vt.__version=ke.version);let pi=vt.currentProgram;Dt===!0&&(pi=bn(ke,De,Ue));let Bo=!1,ms=!1,Lr=!1;const Jt=pi.getUniforms(),mi=vt.uniforms;if(te.useProgram(pi.program)&&(Bo=!0,ms=!0,Lr=!0),ke.id!==D&&(D=ke.id,ms=!0),Bo||O!==K){Jt.setValue(W,"projectionMatrix",K.projectionMatrix),Jt.setValue(W,"viewMatrix",K.matrixWorldInverse);const An=Jt.map.cameraPosition;An!==void 0&&An.setValue(W,oe.setFromMatrixPosition(K.matrixWorld)),Re.logarithmicDepthBuffer&&Jt.setValue(W,"logDepthBufFC",2/(Math.log(K.far+1)/Math.LN2)),(ke.isMeshPhongMaterial||ke.isMeshToonMaterial||ke.isMeshLambertMaterial||ke.isMeshBasicMaterial||ke.isMeshStandardMaterial||ke.isShaderMaterial)&&Jt.setValue(W,"isOrthographic",K.isOrthographicCamera===!0),O!==K&&(O=K,ms=!0,Lr=!0)}if(Ue.isSkinnedMesh){Jt.setOptional(W,Ue,"bindMatrix"),Jt.setOptional(W,Ue,"bindMatrixInverse");const An=Ue.skeleton;An&&(Re.floatVertexTextures?(An.boneTexture===null&&An.computeBoneTexture(),Jt.setValue(W,"boneTexture",An.boneTexture,N)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Ue.isBatchedMesh&&(Jt.setOptional(W,Ue,"batchingTexture"),Jt.setValue(W,"batchingTexture",Ue._matricesTexture,N));const Dr=Ne.morphAttributes;if((Dr.position!==void 0||Dr.normal!==void 0||Dr.color!==void 0&&Re.isWebGL2===!0)&&Be.update(Ue,Ne,pi),(ms||vt.receiveShadow!==Ue.receiveShadow)&&(vt.receiveShadow=Ue.receiveShadow,Jt.setValue(W,"receiveShadow",Ue.receiveShadow)),ke.isMeshGouraudMaterial&&ke.envMap!==null&&(mi.envMap.value=ct,mi.flipEnvMap.value=ct.isCubeTexture&&ct.isRenderTargetTexture===!1?-1:1),ms&&(Jt.setValue(W,"toneMappingExposure",x.toneMappingExposure),vt.needsLights&&ph(mi,Lr),Qe&&ke.fog===!0&&de.refreshFogUniforms(mi,Qe),de.refreshMaterialUniforms(mi,ke,ue,q,ve),cr.upload(W,Tn(vt),mi,N)),ke.isShaderMaterial&&ke.uniformsNeedUpdate===!0&&(cr.upload(W,Tn(vt),mi,N),ke.uniformsNeedUpdate=!1),ke.isSpriteMaterial&&Jt.setValue(W,"center",Ue.center),Jt.setValue(W,"modelViewMatrix",Ue.modelViewMatrix),Jt.setValue(W,"normalMatrix",Ue.normalMatrix),Jt.setValue(W,"modelMatrix",Ue.matrixWorld),ke.isShaderMaterial||ke.isRawShaderMaterial){const An=ke.uniformsGroups;for(let Ir=0,_h=An.length;Ir<_h;Ir++)if(Re.isWebGL2){const ko=An[Ir];k.update(ko,pi),k.bind(ko,pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pi}function ph(K,De){K.ambientLightColor.needsUpdate=De,K.lightProbe.needsUpdate=De,K.directionalLights.needsUpdate=De,K.directionalLightShadows.needsUpdate=De,K.pointLights.needsUpdate=De,K.pointLightShadows.needsUpdate=De,K.spotLights.needsUpdate=De,K.spotLightShadows.needsUpdate=De,K.rectAreaLights.needsUpdate=De,K.hemisphereLights.needsUpdate=De}function mh(K){return K.isMeshLambertMaterial||K.isMeshToonMaterial||K.isMeshPhongMaterial||K.isMeshStandardMaterial||K.isShadowMaterial||K.isShaderMaterial&&K.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(K,De,Ne){fe.get(K.texture).__webglTexture=De,fe.get(K.depthTexture).__webglTexture=Ne;const ke=fe.get(K);ke.__hasExternalTextures=!0,ke.__hasExternalTextures&&(ke.__autoAllocateDepthBuffer=Ne===void 0,ke.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ke.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(K,De){const Ne=fe.get(K);Ne.__webglFramebuffer=De,Ne.__useDefaultFramebuffer=De===void 0},this.setRenderTarget=function(K,De=0,Ne=0){C=K,S=De,y=Ne;let ke=!0,Ue=null,Qe=!1,st=!1;if(K){const ct=fe.get(K);ct.__useDefaultFramebuffer!==void 0?(te.bindFramebuffer(W.FRAMEBUFFER,null),ke=!1):ct.__webglFramebuffer===void 0?N.setupRenderTarget(K):ct.__hasExternalTextures&&N.rebindTextures(K,fe.get(K.texture).__webglTexture,fe.get(K.depthTexture).__webglTexture);const gt=K.texture;(gt.isData3DTexture||gt.isDataArrayTexture||gt.isCompressedArrayTexture)&&(st=!0);const dt=fe.get(K).__webglFramebuffer;K.isWebGLCubeRenderTarget?(Array.isArray(dt[De])?Ue=dt[De][Ne]:Ue=dt[De],Qe=!0):Re.isWebGL2&&K.samples>0&&N.useMultisampledRTT(K)===!1?Ue=fe.get(K).__webglMultisampledFramebuffer:Array.isArray(dt)?Ue=dt[Ne]:Ue=dt,M.copy(K.viewport),P.copy(K.scissor),H=K.scissorTest}else M.copy(ie).multiplyScalar(ue).floor(),P.copy(he).multiplyScalar(ue).floor(),H=ee;if(te.bindFramebuffer(W.FRAMEBUFFER,Ue)&&Re.drawBuffers&&ke&&te.drawBuffers(K,Ue),te.viewport(M),te.scissor(P),te.setScissorTest(H),Qe){const ct=fe.get(K.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+De,ct.__webglTexture,Ne)}else if(st){const ct=fe.get(K.texture),gt=De||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,ct.__webglTexture,Ne||0,gt)}D=-1},this.readRenderTargetPixels=function(K,De,Ne,ke,Ue,Qe,st){if(!(K&&K.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let rt=fe.get(K).__webglFramebuffer;if(K.isWebGLCubeRenderTarget&&st!==void 0&&(rt=rt[st]),rt){te.bindFramebuffer(W.FRAMEBUFFER,rt);try{const ct=K.texture,gt=ct.format,dt=ct.type;if(gt!==Un&&Pe.convert(gt)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const pt=dt===Ps&&(xe.has("EXT_color_buffer_half_float")||Re.isWebGL2&&xe.has("EXT_color_buffer_float"));if(dt!==ui&&Pe.convert(dt)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(dt===Zn&&(Re.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!pt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}De>=0&&De<=K.width-ke&&Ne>=0&&Ne<=K.height-Ue&&W.readPixels(De,Ne,ke,Ue,Pe.convert(gt),Pe.convert(dt),Qe)}finally{const ct=C!==null?fe.get(C).__webglFramebuffer:null;te.bindFramebuffer(W.FRAMEBUFFER,ct)}}},this.copyFramebufferToTexture=function(K,De,Ne=0){const ke=Math.pow(2,-Ne),Ue=Math.floor(De.image.width*ke),Qe=Math.floor(De.image.height*ke);N.setTexture2D(De,0),W.copyTexSubImage2D(W.TEXTURE_2D,Ne,0,0,K.x,K.y,Ue,Qe),te.unbindTexture()},this.copyTextureToTexture=function(K,De,Ne,ke=0){const Ue=De.image.width,Qe=De.image.height,st=Pe.convert(Ne.format),rt=Pe.convert(Ne.type);N.setTexture2D(Ne,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Ne.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Ne.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,Ne.unpackAlignment),De.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,ke,K.x,K.y,Ue,Qe,st,rt,De.image.data):De.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,ke,K.x,K.y,De.mipmaps[0].width,De.mipmaps[0].height,st,De.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,ke,K.x,K.y,st,rt,De.image),ke===0&&Ne.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),te.unbindTexture()},this.copyTextureToTexture3D=function(K,De,Ne,ke,Ue=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Qe=K.max.x-K.min.x+1,st=K.max.y-K.min.y+1,rt=K.max.z-K.min.z+1,ct=Pe.convert(ke.format),gt=Pe.convert(ke.type);let dt;if(ke.isData3DTexture)N.setTexture3D(ke,0),dt=W.TEXTURE_3D;else if(ke.isDataArrayTexture||ke.isCompressedArrayTexture)N.setTexture2DArray(ke,0),dt=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,ke.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ke.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,ke.unpackAlignment);const pt=W.getParameter(W.UNPACK_ROW_LENGTH),Ot=W.getParameter(W.UNPACK_IMAGE_HEIGHT),En=W.getParameter(W.UNPACK_SKIP_PIXELS),Wt=W.getParameter(W.UNPACK_SKIP_ROWS),Vn=W.getParameter(W.UNPACK_SKIP_IMAGES),Lt=Ne.isCompressedTexture?Ne.mipmaps[Ue]:Ne.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,Lt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Lt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,K.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,K.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,K.min.z),Ne.isDataTexture||Ne.isData3DTexture?W.texSubImage3D(dt,Ue,De.x,De.y,De.z,Qe,st,rt,ct,gt,Lt.data):Ne.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(dt,Ue,De.x,De.y,De.z,Qe,st,rt,ct,Lt.data)):W.texSubImage3D(dt,Ue,De.x,De.y,De.z,Qe,st,rt,ct,gt,Lt),W.pixelStorei(W.UNPACK_ROW_LENGTH,pt),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ot),W.pixelStorei(W.UNPACK_SKIP_PIXELS,En),W.pixelStorei(W.UNPACK_SKIP_ROWS,Wt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Vn),Ue===0&&ke.generateMipmaps&&W.generateMipmap(dt),te.unbindTexture()},this.initTexture=function(K){K.isCubeTexture?N.setTextureCube(K,0):K.isData3DTexture?N.setTexture3D(K,0):K.isDataArrayTexture||K.isCompressedArrayTexture?N.setTexture2DArray(K,0):N.setTexture2D(K,0),te.unbindTexture()},this.resetState=function(){S=0,y=0,C=null,te.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Lo?"display-p3":"srgb",t.unpackColorSpace=At.workingColorSpace===Ar?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Yt?Ci:Gu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ci?Yt:Qn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class jg extends hh{}jg.prototype.isWebGL1Renderer=!0;class qg extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ls extends fs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ic=new we,sc=new we,rc=new zt,uo=new Do,ir=new wr;class fh extends Zt{constructor(e=new Kt,t=new Ls){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ic.fromBufferAttribute(t,s-1),sc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ic.distanceTo(sc);e.setAttribute("lineDistance",new Ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(s),ir.radius+=r,e.ray.intersectsSphere(ir)===!1)return;rc.copy(s).invert(),uo.copy(e.ray).applyMatrix4(rc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new we,u=new we,h=new we,d=new we,g=this.isLineSegments?2:1,v=n.index,p=n.attributes.position;if(v!==null){const f=Math.max(0,o.start),b=Math.min(v.count,o.start+o.count);for(let x=f,R=b-1;x<R;x+=g){const S=v.getX(x),y=v.getX(x+1);if(l.fromBufferAttribute(p,S),u.fromBufferAttribute(p,y),uo.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),b=Math.min(p.count,o.start+o.count);for(let x=f,R=b-1;x<R;x+=g){if(l.fromBufferAttribute(p,x),u.fromBufferAttribute(p,x+1),uo.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(d);y<e.near||y>e.far||t.push({distance:y,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const oc=new we,ac=new we;class No extends fh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)oc.fromBufferAttribute(t,s),ac.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+oc.distanceTo(ac);e.setAttribute("lineDistance",new Ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Oo extends Kt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],g=[];let v=0;const _=[],p=n/2;let f=0;b(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Ct(h,3)),this.setAttribute("normal",new Ct(d,3)),this.setAttribute("uv",new Ct(g,2));function b(){const R=new we,S=new we;let y=0;const C=(t-e)/n;for(let D=0;D<=r;D++){const O=[],M=D/r,P=M*(t-e)+e;for(let H=0;H<=s;H++){const Y=H/s,L=Y*c+a,V=Math.sin(L),q=Math.cos(L);S.x=P*V,S.y=-M*n+p,S.z=P*q,h.push(S.x,S.y,S.z),R.set(V,C,q).normalize(),d.push(R.x,R.y,R.z),g.push(Y,1-M),O.push(v++)}_.push(O)}for(let D=0;D<s;D++)for(let O=0;O<r;O++){const M=_[O][D],P=_[O+1][D],H=_[O+1][D+1],Y=_[O][D+1];u.push(M,P,Y),u.push(P,H,Y),y+=6}l.addGroup(f,y,0),f+=y}function x(R){const S=v,y=new ut,C=new we;let D=0;const O=R===!0?e:t,M=R===!0?1:-1;for(let H=1;H<=s;H++)h.push(0,p*M,0),d.push(0,M,0),g.push(.5,.5),v++;const P=v;for(let H=0;H<=s;H++){const L=H/s*c+a,V=Math.cos(L),q=Math.sin(L);C.x=O*q,C.y=p*M,C.z=O*V,h.push(C.x,C.y,C.z),d.push(0,M,0),y.x=V*.5+.5,y.y=q*.5*M+.5,g.push(y.x,y.y),v++}for(let H=0;H<s;H++){const Y=S+H,L=P+H;R===!0?u.push(L,L+1,Y):u.push(L+1,L,Y),D+=3}l.addGroup(f,D,R===!0?1:2),f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const sr=new we,rr=new we,ho=new we,or=new Nn;class Yg extends Kt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Ss*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),d={},g=[];for(let v=0;v<c;v+=3){o?(l[0]=o.getX(v),l[1]=o.getX(v+1),l[2]=o.getX(v+2)):(l[0]=v,l[1]=v+1,l[2]=v+2);const{a:_,b:p,c:f}=or;if(_.fromBufferAttribute(a,l[0]),p.fromBufferAttribute(a,l[1]),f.fromBufferAttribute(a,l[2]),or.getNormal(ho),h[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,h[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,h[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let b=0;b<3;b++){const x=(b+1)%3,R=h[b],S=h[x],y=or[u[b]],C=or[u[x]],D=`${R}_${S}`,O=`${S}_${R}`;O in d&&d[O]?(ho.dot(d[O].normal)<=r&&(g.push(y.x,y.y,y.z),g.push(C.x,C.y,C.z)),d[O]=null):D in d||(d[D]={index0:l[b],index1:l[x],normal:ho.clone()})}}for(const v in d)if(d[v]){const{index0:_,index1:p}=d[v];sr.fromBufferAttribute(a,_),rr.fromBufferAttribute(a,p),g.push(sr.x,sr.y,sr.z),g.push(rr.x,rr.y,rr.z)}this.setAttribute("position",new Ct(g,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Fo extends Kt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new we,d=new we,g=[],v=[],_=[],p=[];for(let f=0;f<=n;f++){const b=[],x=f/n;let R=0;f===0&&o===0?R=.5/t:f===n&&c===Math.PI&&(R=-.5/t);for(let S=0;S<=t;S++){const y=S/t;h.x=-e*Math.cos(s+y*r)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(s+y*r)*Math.sin(o+x*a),v.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),p.push(y+R,1-x),b.push(l++)}u.push(b)}for(let f=0;f<n;f++)for(let b=0;b<t;b++){const x=u[f][b+1],R=u[f][b],S=u[f+1][b],y=u[f+1][b+1];(f!==0||o>0)&&g.push(x,R,y),(f!==n-1||c<Math.PI)&&g.push(R,S,y)}this.setIndex(g),this.setAttribute("position",new Ct(v,3)),this.setAttribute("normal",new Ct(_,3)),this.setAttribute("uv",new Ct(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class bi extends fs{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new _t(16777215),this.specular=new _t(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wu,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ro,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dh extends Zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const fo=new zt,lc=new we,cc=new we;class Kg{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Io,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;lc.setFromMatrixPosition(e.matrixWorld),t.position.copy(lc),cc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cc),t.updateMatrixWorld(),fo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Zg extends Kg{constructor(){super(new sh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jg extends dh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new Zg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class $g extends dh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class uc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ln(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Qg extends No{constructor(e=10,t=10,n=4473924,s=8947848){n=new _t(n),s=new _t(s);const r=t/2,o=e/t,a=e/2,c=[],l=[];for(let d=0,g=0,v=-a;d<=t;d++,v+=o){c.push(-a,0,v,a,0,v),c.push(v,0,-a,v,0,a);const _=d===r?n:s;_.toArray(l,g),g+=3,_.toArray(l,g),g+=3,_.toArray(l,g),g+=3,_.toArray(l,g),g+=3}const u=new Kt;u.setAttribute("position",new Ct(c,3)),u.setAttribute("color",new Ct(l,3));const h=new Ls({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class ev extends No{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Kt;s.setAttribute("position",new Ct(t,3)),s.setAttribute("color",new Ct(n,3));const r=new Ls({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,n){const s=new _t,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Co}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Co);const hc={type:"change"},po={type:"start"},fc={type:"end"},ar=new Do,dc=new Kn,tv=Math.cos(70*Ff.DEG2RAD);class nv extends Di{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new we,this.cursor=new we,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ii.ROTATE,MIDDLE:Ii.DOLLY,RIGHT:Ii.PAN},this.touches={ONE:Ui.ROTATE,TWO:Ui.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(k){k.addEventListener("keydown",Ee),this._domElementKeyEvents=k},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ee),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(hc),n.update(),r=s.NONE},this.update=function(){const k=new we,Fe=new Pi().setFromUnitVectors(e.up,new we(0,1,0)),Ye=Fe.clone().invert(),je=new we,B=new Pi,Me=new we,Ae=2*Math.PI;return function(Ge=null){const et=n.object.position;k.copy(et).sub(n.target),k.applyQuaternion(Fe),a.setFromVector3(k),n.autoRotate&&r===s.NONE&&H(M(Ge)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let it=n.minAzimuthAngle,at=n.maxAzimuthAngle;isFinite(it)&&isFinite(at)&&(it<-Math.PI?it+=Ae:it>Math.PI&&(it-=Ae),at<-Math.PI?at+=Ae:at>Math.PI&&(at-=Ae),it<=at?a.theta=Math.max(it,Math.min(at,a.theta)):a.theta=a.theta>(it+at)/2?Math.max(it,a.theta):Math.min(at,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&y||n.object.isOrthographicCamera?a.radius=ie(a.radius):a.radius=ie(a.radius*l),k.setFromSpherical(a),k.applyQuaternion(Ye),et.copy(n.target).add(k),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let St=!1;if(n.zoomToCursor&&y){let lt=null;if(n.object.isPerspectiveCamera){const Mt=k.length();lt=ie(Mt*l);const ft=Mt-lt;n.object.position.addScaledVector(R,ft),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Mt=new we(S.x,S.y,0);Mt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),St=!0;const ft=new we(S.x,S.y,0);ft.unproject(n.object),n.object.position.sub(ft).add(Mt),n.object.updateMatrixWorld(),lt=k.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;lt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(lt).add(n.object.position):(ar.origin.copy(n.object.position),ar.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ar.direction))<tv?e.lookAt(n.target):(dc.setFromNormalAndCoplanarPoint(n.object.up,n.target),ar.intersectPlane(dc,n.target))))}else n.object.isOrthographicCamera&&(St=l!==1,St&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix()));return l=1,y=!1,St||je.distanceToSquared(n.object.position)>o||8*(1-B.dot(n.object.quaternion))>o||Me.distanceToSquared(n.target)>0?(n.dispatchEvent(hc),je.copy(n.object.position),B.copy(n.object.quaternion),Me.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ye),n.domElement.removeEventListener("pointerdown",N),n.domElement.removeEventListener("pointercancel",$),n.domElement.removeEventListener("wheel",le),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",$),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ee),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new uc,c=new uc;let l=1;const u=new we,h=new ut,d=new ut,g=new ut,v=new ut,_=new ut,p=new ut,f=new ut,b=new ut,x=new ut,R=new we,S=new ut;let y=!1;const C=[],D={};let O=!1;function M(k){return k!==null?2*Math.PI/60*n.autoRotateSpeed*k:2*Math.PI/60/60*n.autoRotateSpeed}function P(k){const Fe=Math.abs(k*.01);return Math.pow(.95,n.zoomSpeed*Fe)}function H(k){c.theta-=k}function Y(k){c.phi-=k}const L=function(){const k=new we;return function(Ye,je){k.setFromMatrixColumn(je,0),k.multiplyScalar(-Ye),u.add(k)}}(),V=function(){const k=new we;return function(Ye,je){n.screenSpacePanning===!0?k.setFromMatrixColumn(je,1):(k.setFromMatrixColumn(je,0),k.crossVectors(n.object.up,k)),k.multiplyScalar(Ye),u.add(k)}}(),q=function(){const k=new we;return function(Ye,je){const B=n.domElement;if(n.object.isPerspectiveCamera){const Me=n.object.position;k.copy(Me).sub(n.target);let Ae=k.length();Ae*=Math.tan(n.object.fov/2*Math.PI/180),L(2*Ye*Ae/B.clientHeight,n.object.matrix),V(2*je*Ae/B.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(L(Ye*(n.object.right-n.object.left)/n.object.zoom/B.clientWidth,n.object.matrix),V(je*(n.object.top-n.object.bottom)/n.object.zoom/B.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function ue(k){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=k:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function se(k){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=k:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ae(k,Fe){if(!n.zoomToCursor)return;y=!0;const Ye=n.domElement.getBoundingClientRect(),je=k-Ye.left,B=Fe-Ye.top,Me=Ye.width,Ae=Ye.height;S.x=je/Me*2-1,S.y=-(B/Ae)*2+1,R.set(S.x,S.y,1).unproject(n.object).sub(n.object.position).normalize()}function ie(k){return Math.max(n.minDistance,Math.min(n.maxDistance,k))}function he(k){h.set(k.clientX,k.clientY)}function ee(k){ae(k.clientX,k.clientX),f.set(k.clientX,k.clientY)}function ce(k){v.set(k.clientX,k.clientY)}function F(k){d.set(k.clientX,k.clientY),g.subVectors(d,h).multiplyScalar(n.rotateSpeed);const Fe=n.domElement;H(2*Math.PI*g.x/Fe.clientHeight),Y(2*Math.PI*g.y/Fe.clientHeight),h.copy(d),n.update()}function Q(k){b.set(k.clientX,k.clientY),x.subVectors(b,f),x.y>0?ue(P(x.y)):x.y<0&&se(P(x.y)),f.copy(b),n.update()}function ve(k){_.set(k.clientX,k.clientY),p.subVectors(_,v).multiplyScalar(n.panSpeed),q(p.x,p.y),v.copy(_),n.update()}function U(k){ae(k.clientX,k.clientY),k.deltaY<0?se(P(k.deltaY)):k.deltaY>0&&ue(P(k.deltaY)),n.update()}function G(k){let Fe=!1;switch(k.code){case n.keys.UP:k.ctrlKey||k.metaKey||k.shiftKey?Y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(0,n.keyPanSpeed),Fe=!0;break;case n.keys.BOTTOM:k.ctrlKey||k.metaKey||k.shiftKey?Y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(0,-n.keyPanSpeed),Fe=!0;break;case n.keys.LEFT:k.ctrlKey||k.metaKey||k.shiftKey?H(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(n.keyPanSpeed,0),Fe=!0;break;case n.keys.RIGHT:k.ctrlKey||k.metaKey||k.shiftKey?H(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(-n.keyPanSpeed,0),Fe=!0;break}Fe&&(k.preventDefault(),n.update())}function oe(k){if(C.length===1)h.set(k.pageX,k.pageY);else{const Fe=Pe(k),Ye=.5*(k.pageX+Fe.x),je=.5*(k.pageY+Fe.y);h.set(Ye,je)}}function pe(k){if(C.length===1)v.set(k.pageX,k.pageY);else{const Fe=Pe(k),Ye=.5*(k.pageX+Fe.x),je=.5*(k.pageY+Fe.y);v.set(Ye,je)}}function Ce(k){const Fe=Pe(k),Ye=k.pageX-Fe.x,je=k.pageY-Fe.y,B=Math.sqrt(Ye*Ye+je*je);f.set(0,B)}function W(k){n.enableZoom&&Ce(k),n.enablePan&&pe(k)}function Le(k){n.enableZoom&&Ce(k),n.enableRotate&&oe(k)}function xe(k){if(C.length==1)d.set(k.pageX,k.pageY);else{const Ye=Pe(k),je=.5*(k.pageX+Ye.x),B=.5*(k.pageY+Ye.y);d.set(je,B)}g.subVectors(d,h).multiplyScalar(n.rotateSpeed);const Fe=n.domElement;H(2*Math.PI*g.x/Fe.clientHeight),Y(2*Math.PI*g.y/Fe.clientHeight),h.copy(d)}function Re(k){if(C.length===1)_.set(k.pageX,k.pageY);else{const Fe=Pe(k),Ye=.5*(k.pageX+Fe.x),je=.5*(k.pageY+Fe.y);_.set(Ye,je)}p.subVectors(_,v).multiplyScalar(n.panSpeed),q(p.x,p.y),v.copy(_)}function te(k){const Fe=Pe(k),Ye=k.pageX-Fe.x,je=k.pageY-Fe.y,B=Math.sqrt(Ye*Ye+je*je);b.set(0,B),x.set(0,Math.pow(b.y/f.y,n.zoomSpeed)),ue(x.y),f.copy(b);const Me=(k.pageX+Fe.x)*.5,Ae=(k.pageY+Fe.y)*.5;ae(Me,Ae)}function ne(k){n.enableZoom&&te(k),n.enablePan&&Re(k)}function fe(k){n.enableZoom&&te(k),n.enableRotate&&xe(k)}function N(k){n.enabled!==!1&&(C.length===0&&(n.domElement.setPointerCapture(k.pointerId),n.domElement.addEventListener("pointermove",E),n.domElement.addEventListener("pointerup",$)),Be(k),k.pointerType==="touch"?Oe(k):re(k))}function E(k){n.enabled!==!1&&(k.pointerType==="touch"?be(k):Z(k))}function $(k){switch(We(k),C.length){case 0:n.domElement.releasePointerCapture(k.pointerId),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",$),n.dispatchEvent(fc),r=s.NONE;break;case 1:const Fe=C[0],Ye=D[Fe];Oe({pointerId:Fe,pageX:Ye.x,pageY:Ye.y});break}}function re(k){let Fe;switch(k.button){case 0:Fe=n.mouseButtons.LEFT;break;case 1:Fe=n.mouseButtons.MIDDLE;break;case 2:Fe=n.mouseButtons.RIGHT;break;default:Fe=-1}switch(Fe){case Ii.DOLLY:if(n.enableZoom===!1)return;ee(k),r=s.DOLLY;break;case Ii.ROTATE:if(k.ctrlKey||k.metaKey||k.shiftKey){if(n.enablePan===!1)return;ce(k),r=s.PAN}else{if(n.enableRotate===!1)return;he(k),r=s.ROTATE}break;case Ii.PAN:if(k.ctrlKey||k.metaKey||k.shiftKey){if(n.enableRotate===!1)return;he(k),r=s.ROTATE}else{if(n.enablePan===!1)return;ce(k),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(po)}function Z(k){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;F(k);break;case s.DOLLY:if(n.enableZoom===!1)return;Q(k);break;case s.PAN:if(n.enablePan===!1)return;ve(k);break}}function le(k){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(k.preventDefault(),n.dispatchEvent(po),U(J(k)),n.dispatchEvent(fc))}function J(k){const Fe=k.deltaMode,Ye={clientX:k.clientX,clientY:k.clientY,deltaY:k.deltaY};switch(Fe){case 1:Ye.deltaY*=16;break;case 2:Ye.deltaY*=100;break}return k.ctrlKey&&!O&&(Ye.deltaY*=10),Ye}function de(k){k.key==="Control"&&(O=!0,n.domElement.getRootNode().addEventListener("keyup",me,{passive:!0,capture:!0}))}function me(k){k.key==="Control"&&(O=!1,n.domElement.getRootNode().removeEventListener("keyup",me,{passive:!0,capture:!0}))}function Ee(k){n.enabled===!1||n.enablePan===!1||G(k)}function Oe(k){switch(ze(k),C.length){case 1:switch(n.touches.ONE){case Ui.ROTATE:if(n.enableRotate===!1)return;oe(k),r=s.TOUCH_ROTATE;break;case Ui.PAN:if(n.enablePan===!1)return;pe(k),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Ui.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;W(k),r=s.TOUCH_DOLLY_PAN;break;case Ui.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Le(k),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(po)}function be(k){switch(ze(k),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;xe(k),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Re(k),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ne(k),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;fe(k),n.update();break;default:r=s.NONE}}function ye(k){n.enabled!==!1&&k.preventDefault()}function Be(k){C.push(k.pointerId)}function We(k){delete D[k.pointerId];for(let Fe=0;Fe<C.length;Fe++)if(C[Fe]==k.pointerId){C.splice(Fe,1);return}}function ze(k){let Fe=D[k.pointerId];Fe===void 0&&(Fe=new ut,D[k.pointerId]=Fe),Fe.set(k.pageX,k.pageY)}function Pe(k){const Fe=k.pointerId===C[0]?C[1]:C[0];return D[Fe]}n.domElement.addEventListener("contextmenu",ye),n.domElement.addEventListener("pointerdown",N),n.domElement.addEventListener("pointercancel",$),n.domElement.addEventListener("wheel",le,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",de,{passive:!0,capture:!0}),this.update()}}function pc(i,e,t){const n=i.slice();return n[51]=e[t],n}function mc(i){let e,t='<div class="empty-icon svelte-1ux5xdu">⛏</div> <h3 class="svelte-1ux5xdu">GeoModeler 三维地质可视化</h3> <p class="svelte-1ux5xdu">导入钻孔数据后开始三维建模与可视化分析</p>';return{c(){e=A("div"),e.innerHTML=t,this.h()},l(n){e=T(n,"DIV",{class:!0,"data-svelte-h":!0}),Ie(e)!=="svelte-1u73fdm"&&(e.innerHTML=t),this.h()},h(){I(e,"class","viewer-empty svelte-1ux5xdu")},m(n,s){_e(n,e,s)},d(n){n&&w(e)}}}function _c(i){let e,t,n,s="体积估算",r,o,a=i[7]?"▸":"▾",c,l,u,h,d=!i[7]&&gc(i);return{c(){e=A("div"),t=A("div"),n=A("span"),n.textContent=s,r=j(),o=A("span"),c=Te(a),l=j(),d&&d.c(),this.h()},l(g){e=T(g,"DIV",{class:!0});var v=z(e);t=T(v,"DIV",{class:!0});var _=z(t);n=T(_,"SPAN",{class:!0,"data-svelte-h":!0}),Ie(n)!=="svelte-14576x2"&&(n.textContent=s),r=X(_),o=T(_,"SPAN",{class:!0});var p=z(o);c=Se(p,a),p.forEach(w),_.forEach(w),l=X(v),d&&d.l(v),v.forEach(w),this.h()},h(){I(n,"class","volume-card-title svelte-1ux5xdu"),I(o,"class","volume-card-toggle svelte-1ux5xdu"),I(t,"class","volume-card-header svelte-1ux5xdu"),I(e,"class","volume-card svelte-1ux5xdu"),en(e,"collapsed",i[7])},m(g,v){_e(g,e,v),m(e,t),m(t,n),m(t,r),m(t,o),m(o,c),m(e,l),d&&d.m(e,null),u||(h=Ve(t,"click",i[8]),u=!0)},p(g,v){v[0]&128&&a!==(a=g[7]?"▸":"▾")&&Ke(c,a),g[7]?d&&(d.d(1),d=null):d?d.p(g,v):(d=gc(g),d.c(),d.m(e,null)),v[0]&128&&en(e,"collapsed",g[7])},d(g){g&&w(e),d&&d.d(),u=!1,h()}}}function gc(i){let e,t,n=tt(i[0]),s=[];for(let o=0;o<n.length;o+=1)s[o]=vc(pc(i,n,o));let r=i[0].length>0&&xc(i);return{c(){e=A("div");for(let o=0;o<s.length;o+=1)s[o].c();t=j(),r&&r.c(),this.h()},l(o){e=T(o,"DIV",{class:!0});var a=z(e);for(let c=0;c<s.length;c+=1)s[c].l(a);t=X(a),r&&r.l(a),a.forEach(w),this.h()},h(){I(e,"class","volume-card-body svelte-1ux5xdu")},m(o,a){_e(o,e,a);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(e,null);m(e,t),r&&r.m(e,null)},p(o,a){if(a[0]&65){n=tt(o[0]);let c;for(c=0;c<n.length;c+=1){const l=pc(o,n,c);s[c]?s[c].p(l,a):(s[c]=vc(l),s[c].c(),s[c].m(e,t))}for(;c<s.length;c+=1)s[c].d(1);s.length=n.length}o[0].length>0?r?r.p(o,a):(r=xc(o),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(o){o&&w(e),Tt(s,o),r&&r.d()}}}function vc(i){let e,t,n,s,r=i[51].lithology_name+"",o,a,c,l=i[51].volume.toFixed(2)+"",u,h,d,g,v=i[51].percentage.toFixed(2)+"",_,p;function f(...b){return i[9](i[51],...b)}return{c(){e=A("div"),t=A("span"),n=j(),s=A("span"),o=Te(r),a=j(),c=A("span"),u=Te(l),h=Te(" m³"),d=j(),g=A("span"),_=Te(v),p=Te("%"),this.h()},l(b){e=T(b,"DIV",{class:!0});var x=z(e);t=T(x,"SPAN",{class:!0,style:!0}),z(t).forEach(w),n=X(x),s=T(x,"SPAN",{class:!0});var R=z(s);o=Se(R,r),R.forEach(w),a=X(x),c=T(x,"SPAN",{class:!0});var S=z(c);u=Se(S,l),h=Se(S," m³"),S.forEach(w),d=X(x),g=T(x,"SPAN",{class:!0});var y=z(g);_=Se(y,v),p=Se(y,"%"),y.forEach(w),x.forEach(w),this.h()},h(){var b,x;I(t,"class","volume-color-swatch svelte-1ux5xdu"),ge(t,"background",((x=(b=i[6])==null?void 0:b.find(f))==null?void 0:x.color)||"#888"),I(s,"class","volume-name svelte-1ux5xdu"),I(c,"class","volume-value svelte-1ux5xdu"),I(g,"class","volume-percent svelte-1ux5xdu"),I(e,"class","volume-card-row svelte-1ux5xdu")},m(b,x){_e(b,e,x),m(e,t),m(e,n),m(e,s),m(s,o),m(e,a),m(e,c),m(c,u),m(c,h),m(e,d),m(e,g),m(g,_),m(g,p)},p(b,x){var R,S;i=b,x[0]&65&&ge(t,"background",((S=(R=i[6])==null?void 0:R.find(f))==null?void 0:S.color)||"#888"),x[0]&1&&r!==(r=i[51].lithology_name+"")&&Ke(o,r),x[0]&1&&l!==(l=i[51].volume.toFixed(2)+"")&&Ke(u,l),x[0]&1&&v!==(v=i[51].percentage.toFixed(2)+"")&&Ke(_,v)},d(b){b&&w(e)}}}function xc(i){let e,t,n=i[0][0].total_volume.toFixed(2)+"",s,r;return{c(){e=A("div"),t=Te("总体积: "),s=Te(n),r=Te(" m³"),this.h()},l(o){e=T(o,"DIV",{class:!0});var a=z(e);t=Se(a,"总体积: "),s=Se(a,n),r=Se(a," m³"),a.forEach(w),this.h()},h(){I(e,"class","volume-card-total svelte-1ux5xdu")},m(o,a){_e(o,e,a),m(e,t),m(e,s),m(e,r)},p(o,a){a[0]&1&&n!==(n=o[0][0].total_volume.toFixed(2)+"")&&Ke(s,n)},d(o){o&&w(e)}}}function iv(i){let e,t,n=!i[1]&&i[4].length===0&&!i[5]&&mc(),s=i[0]&&i[0].length>0&&_c(i);return{c(){e=A("div"),n&&n.c(),t=j(),s&&s.c(),this.h()},l(r){e=T(r,"DIV",{class:!0});var o=z(e);n&&n.l(o),t=X(o),s&&s.l(o),o.forEach(w),this.h()},h(){I(e,"class","viewer-container svelte-1ux5xdu")},m(r,o){_e(r,e,o),n&&n.m(e,null),m(e,t),s&&s.m(e,null),i[10](e)},p(r,o){!r[1]&&r[4].length===0&&!r[5]?n||(n=mc(),n.c(),n.m(e,t)):n&&(n.d(1),n=null),r[0]&&r[0].length>0?s?s.p(r,o):(s=_c(r),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},i:Et,o:Et,d(r){r&&w(e),n&&n.d(),s&&s.d(),i[10](null)}}}function bc(i,e,t){const n=t>e?Math.max(0,Math.min(1,(i-e)/(t-e))):.5;if(n<.25)return[0,0,.5+n/.25*.5];if(n<.5){const s=(n-.25)/.25;return[0,s,1-s]}else if(n<.75){const s=(n-.5)/.25;return[s,1-s,0]}else return[1,1-(n-.75)/.25*.5,0]}function sv(i,e,t){const n=t>e?Math.max(0,Math.min(1,(i-e)/(t-e))):.5,s=Math.min(1,n*2),r=n<.5?n*1.5:(1-n)*1.5,o=Math.max(0,1-n*2);return[s,r,o]}function rv(i,e,t){let n,s,r,o,a,c,l,u,h=Et,d=()=>(h(),h=gh(te,E=>t(29,u=E)),te),g,v,_,p,f,b,x,R;Ze(i,Xo,E=>t(0,n=E)),Ze(i,ws,E=>t(1,s=E)),Ze(i,kn,E=>t(4,r=E)),Ze(i,mr,E=>t(25,o=E)),Ze(i,ai,E=>t(26,a=E)),Ze(i,pr,E=>t(27,c=E)),Ze(i,Ti,E=>t(28,l=E)),Ze(i,Yn,E=>t(30,g=E)),Ze(i,hr,E=>t(31,v=E)),Ze(i,ur,E=>t(5,_=E)),Ze(i,es,E=>t(32,p=E)),Ze(i,Qi,E=>t(33,f=E)),Ze(i,$i,E=>t(34,b=E)),Ze(i,$n,E=>t(6,x=E)),Ze(i,Wo,E=>t(7,R=E)),i.$$.on_destroy.push(()=>h());let S,y,C,D,O,M={},P=[],H=[],Y=null,L=null,V=null,q=null,ue=null,se,ae=!1;const ie=["#E6B89C","#F0E68C","#CD853F","#8B7355","#A0522D","#DEB887","#D2B48C","#BDB76B","#BC8F8F","#C4A882","#9ACD32","#6B8E23","#556B2F","#8FBC8F","#2E8B57","#708090","#778899","#B0C4DE","#87CEEB","#4682B4"];function he(E,$=0){const re=x==null?void 0:x.find(Z=>Z.name===E);return re!=null&&re.color?new _t(re.color):new _t(ie[$%ie.length])}yr(()=>{ce();const E=kn.subscribe(We=>{ae&&We&&We.length>0&&(U(We),ve())}),$=ws.subscribe(We=>{ae&&We&&G()}),re=es.subscribe(()=>{ae&&oe()}),Z=$i.subscribe(()=>{ae&&s&&G()}),le=Qi.subscribe(()=>{ae&&s&&G()}),J=ur.subscribe(We=>{ae&&(We?pe():L&&(ee(L),L=null))}),de=hr.subscribe(()=>{ae&&_&&pe()}),me=Yn.subscribe(()=>{ae&&Ce()}),Ee=go.subscribe(()=>{ae&&ve()}),Oe=Ti.subscribe(()=>{ae&&xe()}),be=ai.subscribe(()=>{ae&&q&&(q.visible=a)}),ye=pr.subscribe(()=>{ae&&q&&(q.material.opacity=c)}),Be=mr.subscribe(()=>{ae&&Re()});return()=>{E(),$(),re(),Z(),le(),J(),de(),me(),Ee(),Oe(),be(),ye(),Be(),cancelAnimationFrame(se),D==null||D.dispose()}});function ee(E){E&&(y.remove(E),E.geometry&&E.geometry.dispose(),E.material&&(Array.isArray(E.material)?E.material.forEach($=>$.dispose()):E.material.dispose()),E.children&&E.children.forEach($=>ee($)))}function ce(){if(!S)return;y=new qg,y.background=new _t(1711395),C=new Cn(60,S.clientWidth/S.clientHeight,.1,1e4),C.position.set(100,80,100),D=new hh({antialias:!0}),D.setSize(S.clientWidth,S.clientHeight),D.setPixelRatio(window.devicePixelRatio),D.localClippingEnabled=!0,S.appendChild(D.domElement),O=new nv(C,D.domElement),O.enableDamping=!0,O.dampingFactor=.05;const E=new $g(4210752,2);y.add(E);const $=new Jg(16777215,1.5);$.position.set(100,200,100),y.add($);const re=new Qg(200,20,4473924,3355443);y.add(re);const Z=new ev(50);y.add(Z),ae=!0,F(),new ResizeObserver(()=>{S&&D&&C&&(C.aspect=S.clientWidth/S.clientHeight,C.updateProjectionMatrix(),D.setSize(S.clientWidth,S.clientHeight))}).observe(S)}function F(){se=requestAnimationFrame(F),O==null||O.update(),D==null||D.render(y,C)}function Q(E){const $=r;if(!$||$.length===0)return null;const re=$.map(me=>[me.longitude,me.latitude]),Z=Math.min(...re.map(me=>me[0])),le=Math.min(...re.map(me=>me[1])),J=(E.longitude-Z)*111320*Math.cos(E.latitude*Math.PI/180),de=(E.latitude-le)*111320;return{x:J,z:de}}function ve(){H.forEach(Z=>{ee(Z)}),H=[];const E=r;if(!E||E.length<2)return;E.map(Z=>[Z.longitude,Z.latitude]);const $=[];for(let Z=1;Z<E.length;Z++){const le=Math.sqrt(Math.pow((E[Z].longitude-E[Z-1].longitude)*111320*Math.cos(E[Z].latitude*Math.PI/180),2)+Math.pow((E[Z].latitude-E[Z-1].latitude)*111320,2));$.push(le)}const re=$.reduce((Z,le)=>Z+le,0)/$.length;for(let Z=0;Z<$.length;Z++)if($[Z]>re*2){const le=Q(E[Z]),J=Q(E[Z+1]);if(!le||!J)continue;const de=(le.x+J.x)/2,me=(le.z+J.z)/2,Ee=Math.abs(J.x-le.x)||5,Oe=Math.abs(J.z-le.z)||5,be=50,ye=new Li(Ee+4,be,Oe+4),Be=new Mr({color:16724787,transparent:!0,opacity:.15,side:an,depthWrite:!1}),We=new jt(ye,Be);We.position.set(de,E[Z].elevation-be/2,me),y.add(We),H.push(We);const ze=new Yg(ye),Pe=new Ls({color:16724787,transparent:!0,opacity:.6}),qe=new No(ze,Pe);qe.position.copy(We.position),y.add(qe),H.push(qe)}}function U(E){if(P.forEach(le=>{ee(le)}),P=[],!E||E.length===0)return;const $=E.map(le=>[le.longitude,le.latitude,le.elevation]);if($.length===0)return;const re=Math.min(...$.map(le=>le[0])),Z=Math.min(...$.map(le=>le[1]));E.forEach(le=>{const J=(le.longitude-re)*111320*Math.cos(le.latitude*Math.PI/180),de=(le.latitude-Z)*111320;if(!le.layers||le.layers.length===0)return;le.layers.forEach(Ee=>{const Oe=(x==null?void 0:x.findIndex(Pe=>Pe.name===Ee.lithology_name))||0,be=he(Ee.lithology_name,Oe),ye=Ee.bottom_depth-Ee.top_depth,Be=new Oo(1.2,1.2,ye,16),We=new bi({color:be,transparent:!0,opacity:.9}),ze=new jt(Be,We);ze.position.set(J,le.elevation-Ee.top_depth-ye/2,de),y.add(ze),P.push(ze)});const me=new jt(new Fo(1.5,16,16),new bi({color:16777215}));me.position.set(J,le.elevation,de),y.add(me),P.push(me)})}function G(){Object.values(M).forEach(le=>{ee(le)}),M={};const E=s;if(!(E!=null&&E.surfaces))return;const $=E.grid;if(!$)return;const re=$.nx,Z=$.ny;E.lithologies&&E.lithologies.forEach((le,J)=>{var Fe,Ye;const de=E.surfaces[le];if(!(de!=null&&de.top)||!(de!=null&&de.bottom))return;const me=de.top,Ee=de.bottom,Oe=he(le,J),be=b[le]!==!1,ye=f[le]??.7,Be=new is,We=new Kt,ze=[],Pe=[];for(let je=0;je<Z;je++)for(let B=0;B<re;B++){const Me=B/(re-1)*100,Ae=je/(Z-1)*100,He=((Fe=me[je])==null?void 0:Fe[B])??0,Ge=((Ye=Ee[je])==null?void 0:Ye[B])??0;ze.push(Me,He,Ae),ze.push(Me,Ge,Ae)}for(let je=0;je<Z-1;je++)for(let B=0;B<re-1;B++){const Me=(je*re+B)*2,Ae=(je*re+B+1)*2,He=((je+1)*re+B)*2,Ge=((je+1)*re+B+1)*2;Pe.push(Me,He,Ae),Pe.push(Ae,He,Ge),Pe.push(Me+1,Ae+1,He+1),Pe.push(Ae+1,Ge+1,He+1)}for(let je=0;je<Z-1;je++)for(let B=0;B<re-1;B++){const Me=(je*re+B)*2,Ae=Me+1,He=(je*re+B+1)*2,Ge=He+1;Pe.push(Me,He,Ae),Pe.push(Ae,He,Ge)}We.setAttribute("position",new Ct(ze,3)),We.setIndex(Pe),We.computeVertexNormals();const qe=new bi({color:Oe,transparent:!0,opacity:ye,side:an,clippingPlanes:p.enabled&&Y?[Y]:[]}),k=new jt(We,qe);Be.add(k),Be.visible=be,y.add(Be),M[le]=Be})}function oe(){if(p.enabled){const E=p.normal,$=p.position;Y=new Kn(new we(E[0],E[1],E[2]).normalize(),-(E[0]*$[0]+E[1]*$[1]+E[2]*$[2]))}else Y=null;ae&&s&&G()}function pe(){L&&(ee(L),L=null);const E=_;if(!E)return;const $=E.field||E.grid_values;if(!$)return;const re=E.grid;if(!re)return;const Z=re.nx||re.lon_nx||50,le=re.ny||re.lat_ny||50,J=re.nz||re.elev_nz||25,de=v.mode,me=v.colorMin,Ee=v.colorMax,Oe=re.elev_min??re.z_min??0,ye=((re.elev_max??re.z_max??100)-Oe)/(J-1||1),Be=100/Math.max(Z,le);if(de==="voxel"){const We=new is,ze=Z*le*J,Pe=Math.max(1,Math.floor(ze/3e3));let qe=0;for(let k=0;k<J;k+=1)for(let Fe=0;Fe<le;Fe+=1)for(let Ye=0;Ye<Z;Ye+=1){if(qe++%Pe!==0&&Pe>1)continue;const je=k*le*Z+Fe*Z+Ye;if(je>=$.length)continue;const B=$[je];if(B==null||Number.isNaN(B))continue;const Me=bc(B,me,Ee),Ae=Ye/(Z-1||1)*100,He=Fe/(le-1||1)*100,Ge=Oe+k*ye,et=new Li(Be*.8,Math.abs(ye*.8)||.5,Be*.8),it=new Mr({color:new _t(Me[0],Me[1],Me[2]),transparent:!0,opacity:.7}),at=new jt(et,it);at.position.set(Ae,Ge,He),We.add(at)}L=We,y.add(We)}else{const We=v.isosurfaceValue,ze=[],Pe=[],qe=[];let k=0;for(let je=0;je<J-1;je++)for(let B=0;B<le-1;B++)for(let Me=0;Me<Z-1;Me++){const He=[[Me,B,je],[Me+1,B,je],[Me+1,B+1,je],[Me,B+1,je],[Me,B,je+1],[Me+1,B,je+1],[Me+1,B+1,je+1],[Me,B+1,je+1]].map(([Ft,Gt,fn])=>{const bn=fn*le*Z+Gt*Z+Ft;return bn<$.length?$[bn]:0}),et=He.map(Ft=>(Ft||0)>=We).filter(Ft=>Ft).length;if(et===0||et===8)continue;const it=(Me+.5)/(Z-1)*100,at=(B+.5)/(le-1)*100,St=Oe+(je+.5)*ye,lt=He.reduce((Ft,Gt)=>Ft+Gt,0)/8,Mt=bc(lt,me,Ee),ft=Be*.9,Nt=Math.max(Math.abs(ye*.9),ft*.2);ze.push(it-ft/2,St-Nt/2,at-ft/2,it+ft/2,St-Nt/2,at-ft/2,it+ft/2,St-Nt/2,at+ft/2,it-ft/2,St-Nt/2,at+ft/2,it-ft/2,St+Nt/2,at-ft/2,it+ft/2,St+Nt/2,at-ft/2,it+ft/2,St+Nt/2,at+ft/2,it-ft/2,St+Nt/2,at+ft/2);for(let Ft=0;Ft<8;Ft++)qe.push(Mt[0],Mt[1],Mt[2]);Pe.push(k,k+1,k+2,k,k+2,k+3,k+4,k+6,k+5,k+4,k+7,k+6,k,k+4,k+5,k,k+5,k+1,k+1,k+5,k+6,k+1,k+6,k+2,k+2,k+6,k+7,k+2,k+7,k+3,k+3,k+7,k+4,k+3,k+4,k),k+=8}if(ze.length===0)return;const Fe=new Kt;Fe.setAttribute("position",new Ct(ze,3)),Fe.setAttribute("color",new Ct(qe,3)),Fe.setIndex(Pe),Fe.computeVertexNormals();const Ye=new bi({vertexColors:!0,transparent:!0,opacity:.85,side:an});L=new jt(Fe,Ye),y.add(L)}}function Ce(){V&&(ee(V),V=null);const E=g;if(!E||!E.visible||!E.orthoImage&&!E.demImage)return;const $=100;if(E.demImage){const re=E.demImage,Z=document.createElement("canvas");Z.width=64,Z.height=64;const le=Z.getContext("2d");le.drawImage(re,0,0,64,64);try{const J=le.getImageData(0,0,64,64).data,de=32,me=32,Ee=new hs($,$,de,me),Oe=Ee.attributes.position;for(let We=0;We<=me;We++)for(let ze=0;ze<=de;ze++){const Pe=Math.floor(ze/de*63),k=(Math.floor(We/me*63)*64+Pe)*4,Ye=(J[k]+J[k+1]+J[k+2])/3/255*30-5;Oe.setZ(We*(de+1)+ze,Ye)}Ee.computeVertexNormals();const be={transparent:!0,opacity:E.opacity,side:an};if(E.orthoImage){const We=new nn(E.orthoImage);We.needsUpdate=!0,be.map=We}else be.color=8956518;const ye=new bi(be),Be=new jt(Ee,ye);Be.rotation.x=-Math.PI/2,Be.position.y=0,V=Be,y.add(Be);return}catch(J){console.warn("DEM texture load failed:",J)}}if(E.orthoImage){const re=new nn(E.orthoImage);re.needsUpdate=!0;const Z=new hs($,$),le=new bi({map:re,transparent:!0,opacity:E.opacity,side:an}),J=new jt(Z,le);J.rotation.x=-Math.PI/2,J.position.y=.01,V=J,y.add(J)}}async function W(){if(!(!s||!(u!=null&&u.runId)))try{const E=await ht.post(`/projects/modeling/runs/${u==null?void 0:u.runId}/volumes-all`);nt(Xo,n=E,n)}catch(E){console.warn("加载体积卡片失败:",E)}}function Le(E,$,re){const Z=r;if(!Z||Z.length===0)return null;const le=Math.min(...Z.map(Oe=>Oe.longitude)),J=Math.min(...Z.map(Oe=>Oe.latitude)),de=Z[0].latitude,me=(E-le)*111320*Math.cos(de*Math.PI/180),Ee=($-J)*111320;return{x:me,y:re,z:Ee}}function xe(){var k;q&&(ee(q),q=null);const E=l;if(!(E!=null&&E.water_level_grid))return;const $=E.grid,re=$.nx,Z=$.ny,le=E.water_level_grid,J=E.water_level_min,de=E.water_level_max,me=r;if(!me||me.length===0)return;const Ee=$.lon_min,Oe=$.lat_min,be=$.lon_max-Ee,ye=$.lat_max-Oe;me[0].latitude;const Be=[],We=[],ze=[];for(let Fe=0;Fe<Z;Fe++)for(let Ye=0;Ye<re;Ye++){const je=re>1?Ye/(re-1):.5,B=Z>1?Fe/(Z-1):.5,Me=Ee+je*be,Ae=Oe+B*ye,He=((k=le[Fe])==null?void 0:k[Ye])??(J+de)/2,Ge=Le(Me,Ae,He);if(!Ge)continue;Be.push(Ge.x,Ge.y,Ge.z);const et=sv(He,J,de);We.push(et[0],et[1],et[2])}for(let Fe=0;Fe<Z-1;Fe++)for(let Ye=0;Ye<re-1;Ye++){const je=Fe*re+Ye,B=Fe*re+Ye+1,Me=(Fe+1)*re+Ye,Ae=(Fe+1)*re+Ye+1;ze.push(je,Me,B),ze.push(B,Me,Ae)}const Pe=new Kt;Pe.setAttribute("position",new Ct(Be,3)),Pe.setAttribute("color",new Ct(We,3)),Pe.setIndex(ze),Pe.computeVertexNormals();const qe=new bi({vertexColors:!0,transparent:!0,opacity:c,side:an,depthWrite:!1});q=new jt(Pe,qe),q.visible=a,q.renderOrder=10,y.add(q)}function Re(){ue&&(ee(ue),ue=null);const E=o;if(!E||E.length<2)return;const $=r;if(!$||$.length===0)return;E.sort((J,de)=>{const me=(J.longitude-$[0].longitude)**2+(J.latitude-$[0].latitude)**2,Ee=(de.longitude-$[0].longitude)**2+(de.latitude-$[0].latitude)**2;return me-Ee});const re=[];for(const J of E){const de=Le(J.longitude,J.latitude,J.elevation);de&&re.push(de.x,de.y,de.z)}if(re.length<6)return;const Z=new Kt;Z.setAttribute("position",new Ct(re,3));const le=new Ls({color:16777215,linewidth:2,transparent:!0,opacity:.9});ue=new fh(Z,le),ue.renderOrder=20,y.add(ue)}let te;Ji.subscribe(E=>{d(t(3,te=E))});const ne=()=>nt(Wo,R=!R,R),fe=(E,$)=>$.name===E.lithology_name;function N(E){hi[E?"unshift":"push"](()=>{S=E,t(2,S)})}return i.$$.update=()=>{i.$$.dirty[0]&3&&s&&!n&&W()},[n,s,S,te,r,_,x,R,ne,fe,N]}class ov extends un{constructor(e){super(),hn(this,e,rv,iv,cn,{},null,[-1,-1])}}function Ec(i,e,t){const n=i.slice();return n[49]=e[t],n}function Mc(i,e,t){const n=i.slice();return n[52]=e[t],n}function yc(i,e,t){const n=i.slice();return n[55]=e[t],n}function av(i){let e,t,n,s="变异函数模型",r,o,a,c="球状模型",l,u="指数模型",h,d="高斯模型",g,v,_,p,f,b,x,R="半变异函数拟合预览",S,y,C,D,O,M="刷新预览",P,H,Y="各向异性",L,V,q,ue,se="主轴方向(°)",ae,ie,he,ee,ce,F="各向异性比",Q,ve,U,G,oe="网格分辨率",pe,Ce,W,Le,xe="NX",Re,te,ne,fe,N,E="NY",$,re,Z,le,J,de="NZ",me,Ee,Oe,be,ye="开始建模",Be,We,ze=!i[4]&&Sc(i);return{c(){e=A("div"),t=A("div"),n=A("label"),n.textContent=s,r=j(),o=A("select"),a=A("option"),a.textContent=c,l=A("option"),l.textContent=u,h=A("option"),h.textContent=d,g=j(),v=A("label"),_=A("input"),p=Te(`
                自动拟合参数`),f=j(),ze&&ze.c(),b=j(),x=A("h4"),x.textContent=R,S=j(),y=A("div"),C=A("canvas"),D=j(),O=A("button"),O.textContent=M,P=j(),H=A("h4"),H.textContent=Y,L=j(),V=A("div"),q=A("div"),ue=A("label"),ue.textContent=se,ae=j(),ie=A("input"),he=j(),ee=A("div"),ce=A("label"),ce.textContent=F,Q=j(),ve=A("input"),U=j(),G=A("h4"),G.textContent=oe,pe=j(),Ce=A("div"),W=A("div"),Le=A("label"),Le.textContent=xe,Re=j(),te=A("input"),ne=j(),fe=A("div"),N=A("label"),N.textContent=E,$=j(),re=A("input"),Z=j(),le=A("div"),J=A("label"),J.textContent=de,me=j(),Ee=A("input"),Oe=j(),be=A("button"),be.textContent=ye,this.h()},l(Pe){e=T(Pe,"DIV",{class:!0});var qe=z(e);t=T(qe,"DIV",{class:!0});var k=z(t);n=T(k,"LABEL",{"data-svelte-h":!0}),Ie(n)!=="svelte-1jgf9ft"&&(n.textContent=s),r=X(k),o=T(k,"SELECT",{});var Fe=z(o);a=T(Fe,"OPTION",{"data-svelte-h":!0}),Ie(a)!=="svelte-17ym7v6"&&(a.textContent=c),l=T(Fe,"OPTION",{"data-svelte-h":!0}),Ie(l)!=="svelte-bzk8zo"&&(l.textContent=u),h=T(Fe,"OPTION",{"data-svelte-h":!0}),Ie(h)!=="svelte-1iqrdsw"&&(h.textContent=d),Fe.forEach(w),k.forEach(w),g=X(qe),v=T(qe,"LABEL",{class:!0});var Ye=z(v);_=T(Ye,"INPUT",{type:!0}),p=Se(Ye,`
                自动拟合参数`),Ye.forEach(w),f=X(qe),ze&&ze.l(qe),b=X(qe),x=T(qe,"H4",{style:!0,"data-svelte-h":!0}),Ie(x)!=="svelte-3v99de"&&(x.textContent=R),S=X(qe),y=T(qe,"DIV",{class:!0});var je=z(y);C=T(je,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),z(C).forEach(w),je.forEach(w),D=X(qe),O=T(qe,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),Ie(O)!=="svelte-1ik1azm"&&(O.textContent=M),P=X(qe),H=T(qe,"H4",{style:!0,"data-svelte-h":!0}),Ie(H)!=="svelte-1bmbghc"&&(H.textContent=Y),L=X(qe),V=T(qe,"DIV",{class:!0});var B=z(V);q=T(B,"DIV",{class:!0});var Me=z(q);ue=T(Me,"LABEL",{"data-svelte-h":!0}),Ie(ue)!=="svelte-121beyc"&&(ue.textContent=se),ae=X(Me),ie=T(Me,"INPUT",{type:!0,step:!0}),Me.forEach(w),he=X(B),ee=T(B,"DIV",{class:!0});var Ae=z(ee);ce=T(Ae,"LABEL",{"data-svelte-h":!0}),Ie(ce)!=="svelte-yzj6ss"&&(ce.textContent=F),Q=X(Ae),ve=T(Ae,"INPUT",{type:!0,step:!0,min:!0}),Ae.forEach(w),B.forEach(w),U=X(qe),G=T(qe,"H4",{style:!0,"data-svelte-h":!0}),Ie(G)!=="svelte-z4z6jw"&&(G.textContent=oe),pe=X(qe),Ce=T(qe,"DIV",{class:!0});var He=z(Ce);W=T(He,"DIV",{class:!0});var Ge=z(W);Le=T(Ge,"LABEL",{"data-svelte-h":!0}),Ie(Le)!=="svelte-kuum7m"&&(Le.textContent=xe),Re=X(Ge),te=T(Ge,"INPUT",{type:!0,min:!0,max:!0}),Ge.forEach(w),ne=X(He),fe=T(He,"DIV",{class:!0});var et=z(fe);N=T(et,"LABEL",{"data-svelte-h":!0}),Ie(N)!=="svelte-1kjsuy3"&&(N.textContent=E),$=X(et),re=T(et,"INPUT",{type:!0,min:!0,max:!0}),et.forEach(w),Z=X(He),le=T(He,"DIV",{class:!0});var it=z(le);J=T(it,"LABEL",{"data-svelte-h":!0}),Ie(J)!=="svelte-1vblzhc"&&(J.textContent=de),me=X(it),Ee=T(it,"INPUT",{type:!0,min:!0,max:!0}),it.forEach(w),He.forEach(w),Oe=X(qe),be=T(qe,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),Ie(be)!=="svelte-1rcbday"&&(be.textContent=ye),qe.forEach(w),this.h()},h(){a.__value="spherical",Xe(a,a.__value),l.__value="exponential",Xe(l,l.__value),h.__value="gaussian",Xe(h,h.__value),i[0]===void 0&&sn(()=>i[27].call(o)),I(t,"class","form-group"),I(_,"type","checkbox"),I(v,"class","checkbox-label"),ge(x,"font-size","13px"),ge(x,"margin","12px 0 8px"),I(C,"id","variogramCanvas"),I(C,"width","340"),I(C,"height","200"),I(C,"class","svelte-z3j894"),I(y,"class","variogram-preview svelte-z3j894"),I(O,"class","btn-secondary btn-sm"),ge(O,"width","100%"),ge(O,"margin-top","4px"),ge(H,"font-size","13px"),ge(H,"margin","12px 0 8px"),I(ie,"type","number"),I(ie,"step","1"),I(q,"class","form-group"),I(ve,"type","number"),I(ve,"step","0.1"),I(ve,"min","1"),I(ee,"class","form-group"),I(V,"class","form-row"),ge(G,"font-size","13px"),ge(G,"margin","12px 0 8px"),I(te,"type","number"),I(te,"min","5"),I(te,"max","100"),I(W,"class","form-group"),I(re,"type","number"),I(re,"min","5"),I(re,"max","100"),I(fe,"class","form-group"),I(Ee,"type","number"),I(Ee,"min","5"),I(Ee,"max","50"),I(le,"class","form-group"),I(Ce,"class","form-row"),I(be,"class","btn-primary"),ge(be,"width","100%"),ge(be,"margin-top","12px"),I(e,"class","model-params")},m(Pe,qe){_e(Pe,e,qe),m(e,t),m(t,n),m(t,r),m(t,o),m(o,a),m(o,l),m(o,h),yt(o,i[0],!0),m(e,g),m(e,v),m(v,_),_.checked=i[4],m(v,p),m(e,f),ze&&ze.m(e,null),m(e,b),m(e,x),m(e,S),m(e,y),m(y,C),i[32](C),m(e,D),m(e,O),m(e,P),m(e,H),m(e,L),m(e,V),m(V,q),m(q,ue),m(q,ae),m(q,ie),Xe(ie,i[6]),m(V,he),m(V,ee),m(ee,ce),m(ee,Q),m(ee,ve),Xe(ve,i[7]),m(e,U),m(e,G),m(e,pe),m(e,Ce),m(Ce,W),m(W,Le),m(W,Re),m(W,te),Xe(te,i[8]),m(Ce,ne),m(Ce,fe),m(fe,N),m(fe,$),m(fe,re),Xe(re,i[9]),m(Ce,Z),m(Ce,le),m(le,J),m(le,me),m(le,Ee),Xe(Ee,i[10]),m(e,Oe),m(e,be),Be||(We=[Ve(o,"change",i[27]),Ve(_,"change",i[28]),Ve(O,"click",i[20]),Ve(ie,"input",i[33]),Ve(ve,"input",i[34]),Ve(te,"input",i[35]),Ve(re,"input",i[36]),Ve(Ee,"input",i[37]),Ve(be,"click",i[21])],Be=!0)},p(Pe,qe){qe[0]&1&&yt(o,Pe[0]),qe[0]&16&&(_.checked=Pe[4]),Pe[4]?ze&&(ze.d(1),ze=null):ze?ze.p(Pe,qe):(ze=Sc(Pe),ze.c(),ze.m(e,b)),qe[0]&64&&ot(ie.value)!==Pe[6]&&Xe(ie,Pe[6]),qe[0]&128&&ot(ve.value)!==Pe[7]&&Xe(ve,Pe[7]),qe[0]&256&&ot(te.value)!==Pe[8]&&Xe(te,Pe[8]),qe[0]&512&&ot(re.value)!==Pe[9]&&Xe(re,Pe[9]),qe[0]&1024&&ot(Ee.value)!==Pe[10]&&Xe(Ee,Pe[10])},d(Pe){Pe&&w(e),ze&&ze.d(),i[32](null),Be=!1,wt(We)}}}function lv(i){let e,t,n,s=i[14].progress.toFixed(0)+"",r,o,a,c,l;return{c(){e=A("div"),t=A("p"),n=Te("建模中... "),r=Te(s),o=Te("%"),a=j(),c=A("div"),l=A("div"),this.h()},l(u){e=T(u,"DIV",{class:!0});var h=z(e);t=T(h,"P",{class:!0});var d=z(t);n=Se(d,"建模中... "),r=Se(d,s),o=Se(d,"%"),d.forEach(w),a=X(h),c=T(h,"DIV",{class:!0});var g=z(c);l=T(g,"DIV",{class:!0,style:!0}),z(l).forEach(w),g.forEach(w),h.forEach(w),this.h()},h(){I(t,"class","svelte-z3j894"),I(l,"class","progress-bar-fill"),ge(l,"width",i[14].progress+"%"),I(c,"class","progress-bar"),I(e,"class","progress-section svelte-z3j894")},m(u,h){_e(u,e,h),m(e,t),m(t,n),m(t,r),m(t,o),m(e,a),m(e,c),m(c,l)},p(u,h){h[0]&16384&&s!==(s=u[14].progress.toFixed(0)+"")&&Ke(r,s),h[0]&16384&&ge(l,"width",u[14].progress+"%")},d(u){u&&w(e)}}}function Sc(i){let e,t,n,s="变程",r,o,a,c,l,u="基台值",h,d,g,v,_,p="块金值",f,b,x,R;return{c(){e=A("div"),t=A("div"),n=A("label"),n.textContent=s,r=j(),o=A("input"),a=j(),c=A("div"),l=A("label"),l.textContent=u,h=j(),d=A("input"),g=j(),v=A("div"),_=A("label"),_.textContent=p,f=j(),b=A("input"),this.h()},l(S){e=T(S,"DIV",{class:!0});var y=z(e);t=T(y,"DIV",{class:!0});var C=z(t);n=T(C,"LABEL",{"data-svelte-h":!0}),Ie(n)!=="svelte-s6abzb"&&(n.textContent=s),r=X(C),o=T(C,"INPUT",{type:!0,step:!0}),C.forEach(w),a=X(y),c=T(y,"DIV",{class:!0});var D=z(c);l=T(D,"LABEL",{"data-svelte-h":!0}),Ie(l)!=="svelte-1eshi8q"&&(l.textContent=u),h=X(D),d=T(D,"INPUT",{type:!0,step:!0}),D.forEach(w),y.forEach(w),g=X(S),v=T(S,"DIV",{class:!0});var O=z(v);_=T(O,"LABEL",{"data-svelte-h":!0}),Ie(_)!=="svelte-olodes"&&(_.textContent=p),f=X(O),b=T(O,"INPUT",{type:!0,step:!0}),O.forEach(w),this.h()},h(){I(o,"type","number"),I(o,"step","0.001"),I(t,"class","form-group"),I(d,"type","number"),I(d,"step","0.001"),I(c,"class","form-group"),I(e,"class","form-row"),I(b,"type","number"),I(b,"step","0.001"),I(v,"class","form-group")},m(S,y){_e(S,e,y),m(e,t),m(t,n),m(t,r),m(t,o),Xe(o,i[1]),m(e,a),m(e,c),m(c,l),m(c,h),m(c,d),Xe(d,i[2]),_e(S,g,y),_e(S,v,y),m(v,_),m(v,f),m(v,b),Xe(b,i[3]),x||(R=[Ve(o,"input",i[29]),Ve(o,"input",i[20]),Ve(d,"input",i[30]),Ve(d,"input",i[20]),Ve(b,"input",i[31]),Ve(b,"input",i[20])],x=!0)},p(S,y){y[0]&2&&ot(o.value)!==S[1]&&Xe(o,S[1]),y[0]&4&&ot(d.value)!==S[2]&&Xe(d,S[2]),y[0]&8&&ot(b.value)!==S[3]&&Xe(b,S[3])},d(S){S&&(w(e),w(g),w(v)),x=!1,wt(R)}}}function Tc(i){let e,t,n,s="图层控制",r,o,a,c,l,u="切面",h,d,g,v,_,p,f,b,x,R,S,y="体积估算",C,D,O,M,P="选择地层",H,Y,L,V,q,ue,se,ae,ie,he=tt(i[17].lithologies||[]),ee=[];for(let G=0;G<he.length;G+=1)ee[G]=Ac(yc(i,he,G));let ce=i[19].enabled&&wc(i),F=tt(i[17].lithologies||[]),Q=[];for(let G=0;G<F.length;G+=1)Q[G]=Cc(Mc(i,F,G));let ve=i[13]&&Rc(i),U=i[12].length>0&&Pc(i);return{c(){e=A("hr"),t=j(),n=A("h4"),n.textContent=s,r=j();for(let G=0;G<ee.length;G+=1)ee[G].c();o=j(),a=A("hr"),c=j(),l=A("h4"),l.textContent=u,h=j(),d=A("div"),g=A("label"),v=A("input"),p=Te(`
                启用切面`),f=j(),ce&&ce.c(),b=j(),x=A("hr"),R=j(),S=A("h4"),S.textContent=y,C=j(),D=A("div"),O=A("select"),M=A("option"),M.textContent=P;for(let G=0;G<Q.length;G+=1)Q[G].c();H=j(),Y=A("button"),L=Te("计算体积"),q=j(),ve&&ve.c(),ue=j(),U&&U.c(),se=Pt(),this.h()},l(G){e=T(G,"HR",{style:!0}),t=X(G),n=T(G,"H4",{style:!0,"data-svelte-h":!0}),Ie(n)!=="svelte-10xewq4"&&(n.textContent=s),r=X(G);for(let xe=0;xe<ee.length;xe+=1)ee[xe].l(G);o=X(G),a=T(G,"HR",{style:!0}),c=X(G),l=T(G,"H4",{style:!0,"data-svelte-h":!0}),Ie(l)!=="svelte-vflg5w"&&(l.textContent=u),h=X(G),d=T(G,"DIV",{class:!0});var oe=z(d);g=T(oe,"LABEL",{class:!0});var pe=z(g);v=T(pe,"INPUT",{type:!0}),p=Se(pe,`
                启用切面`),pe.forEach(w),oe.forEach(w),f=X(G),ce&&ce.l(G),b=X(G),x=T(G,"HR",{style:!0}),R=X(G),S=T(G,"H4",{style:!0,"data-svelte-h":!0}),Ie(S)!=="svelte-5dpzi"&&(S.textContent=y),C=X(G),D=T(G,"DIV",{class:!0});var Ce=z(D);O=T(Ce,"SELECT",{});var W=z(O);M=T(W,"OPTION",{"data-svelte-h":!0}),Ie(M)!=="svelte-e12hhe"&&(M.textContent=P);for(let xe=0;xe<Q.length;xe+=1)Q[xe].l(W);W.forEach(w),Ce.forEach(w),H=X(G),Y=T(G,"BUTTON",{class:!0,style:!0});var Le=z(Y);L=Se(Le,"计算体积"),Le.forEach(w),q=X(G),ve&&ve.l(G),ue=X(G),U&&U.l(G),se=Pt(),this.h()},h(){ge(e,"border-color","var(--border)"),ge(e,"margin","12px 0"),ge(n,"font-size","13px"),ge(n,"margin-bottom","8px"),ge(a,"border-color","var(--border)"),ge(a,"margin","12px 0"),ge(l,"font-size","13px"),ge(l,"margin-bottom","8px"),I(v,"type","checkbox"),v.checked=_=i[19].enabled,I(g,"class","checkbox-label"),I(d,"class","form-group"),ge(x,"border-color","var(--border)"),ge(x,"margin","12px 0"),ge(S,"font-size","13px"),ge(S,"margin-bottom","8px"),M.__value="",Xe(M,M.__value),i[11]===void 0&&sn(()=>i[43].call(O)),I(D,"class","form-group"),I(Y,"class","btn-primary btn-sm"),Y.disabled=V=!i[11],ge(Y,"width","100%")},m(G,oe){_e(G,e,oe),_e(G,t,oe),_e(G,n,oe),_e(G,r,oe);for(let pe=0;pe<ee.length;pe+=1)ee[pe]&&ee[pe].m(G,oe);_e(G,o,oe),_e(G,a,oe),_e(G,c,oe),_e(G,l,oe),_e(G,h,oe),_e(G,d,oe),m(d,g),m(g,v),m(g,p),_e(G,f,oe),ce&&ce.m(G,oe),_e(G,b,oe),_e(G,x,oe),_e(G,R,oe),_e(G,S,oe),_e(G,C,oe),_e(G,D,oe),m(D,O),m(O,M);for(let pe=0;pe<Q.length;pe+=1)Q[pe]&&Q[pe].m(O,null);yt(O,i[11],!0),_e(G,H,oe),_e(G,Y,oe),m(Y,L),_e(G,q,oe),ve&&ve.m(G,oe),_e(G,ue,oe),U&&U.m(G,oe),_e(G,se,oe),ae||(ie=[Ve(v,"change",i[41]),Ve(O,"change",i[43]),Ve(Y,"click",i[23])],ae=!0)},p(G,oe){if(oe[0]&491520){he=tt(G[17].lithologies||[]);let pe;for(pe=0;pe<he.length;pe+=1){const Ce=yc(G,he,pe);ee[pe]?ee[pe].p(Ce,oe):(ee[pe]=Ac(Ce),ee[pe].c(),ee[pe].m(o.parentNode,o))}for(;pe<ee.length;pe+=1)ee[pe].d(1);ee.length=he.length}if(oe[0]&524288&&_!==(_=G[19].enabled)&&(v.checked=_),G[19].enabled?ce?ce.p(G,oe):(ce=wc(G),ce.c(),ce.m(b.parentNode,b)):ce&&(ce.d(1),ce=null),oe[0]&131072){F=tt(G[17].lithologies||[]);let pe;for(pe=0;pe<F.length;pe+=1){const Ce=Mc(G,F,pe);Q[pe]?Q[pe].p(Ce,oe):(Q[pe]=Cc(Ce),Q[pe].c(),Q[pe].m(O,null))}for(;pe<Q.length;pe+=1)Q[pe].d(1);Q.length=F.length}oe[0]&133120&&yt(O,G[11]),oe[0]&133120&&V!==(V=!G[11])&&(Y.disabled=V),G[13]?ve?ve.p(G,oe):(ve=Rc(G),ve.c(),ve.m(ue.parentNode,ue)):ve&&(ve.d(1),ve=null),G[12].length>0?U?U.p(G,oe):(U=Pc(G),U.c(),U.m(se.parentNode,se)):U&&(U.d(1),U=null)},d(G){G&&(w(e),w(t),w(n),w(r),w(o),w(a),w(c),w(l),w(h),w(d),w(f),w(b),w(x),w(R),w(S),w(C),w(D),w(H),w(Y),w(q),w(ue),w(se)),Tt(ee,G),ce&&ce.d(G),Tt(Q,G),ve&&ve.d(G),U&&U.d(G),ae=!1,wt(ie)}}}function Ac(i){let e,t,n,s,r,o,a,c=i[55]+"",l,u,h,d,g="透明度",v,_,p,f,b;function x(){return i[38](i[55])}function R(...y){return i[39](i[55],...y)}function S(...y){return i[40](i[55],...y)}return{c(){e=A("div"),t=A("label"),n=A("input"),r=j(),o=A("span"),a=j(),l=Te(c),u=j(),h=A("div"),d=A("span"),d.textContent=g,v=j(),_=A("input"),this.h()},l(y){e=T(y,"DIV",{class:!0});var C=z(e);t=T(C,"LABEL",{class:!0});var D=z(t);n=T(D,"INPUT",{type:!0}),r=X(D),o=T(D,"SPAN",{class:!0,style:!0}),z(o).forEach(w),a=X(D),l=Se(D,c),D.forEach(w),u=X(C),h=T(C,"DIV",{class:!0});var O=z(h);d=T(O,"SPAN",{style:!0,"data-svelte-h":!0}),Ie(d)!=="svelte-11ptxvf"&&(d.textContent=g),v=X(O),_=T(O,"INPUT",{type:!0,min:!0,max:!0,class:!0}),O.forEach(w),C.forEach(w),this.h()},h(){var y,C;I(n,"type","checkbox"),n.checked=s=i[16][i[55]]!==!1,I(o,"class","color-swatch"),ge(o,"background",((C=(y=i[18])==null?void 0:y.find(R))==null?void 0:C.color)||"#888"),I(t,"class","checkbox-label"),ge(d,"font-size","10px"),ge(d,"color","var(--text-muted)"),I(_,"type","range"),_.value=p=i[15][i[55]]??70,I(_,"min","0"),I(_,"max","100"),I(_,"class","svelte-z3j894"),I(h,"class","opacity-control svelte-z3j894"),I(e,"class","layer-control svelte-z3j894")},m(y,C){_e(y,e,C),m(e,t),m(t,n),m(t,r),m(t,o),m(t,a),m(t,l),m(e,u),m(e,h),m(h,d),m(h,v),m(h,_),f||(b=[Ve(n,"change",x),Ve(_,"input",S)],f=!0)},p(y,C){var D,O;i=y,C[0]&196608&&s!==(s=i[16][i[55]]!==!1)&&(n.checked=s),C[0]&393216&&ge(o,"background",((O=(D=i[18])==null?void 0:D.find(R))==null?void 0:O.color)||"#888"),C[0]&131072&&c!==(c=i[55]+"")&&Ke(l,c),C[0]&163840&&p!==(p=i[15][i[55]]??70)&&(_.value=p)},d(y){y&&w(e),f=!1,wt(b)}}}function wc(i){let e,t,n="切面位置",s,r,o,a,c;return{c(){e=A("div"),t=A("label"),t.textContent=n,s=j(),r=A("input"),this.h()},l(l){e=T(l,"DIV",{class:!0});var u=z(e);t=T(u,"LABEL",{"data-svelte-h":!0}),Ie(t)!=="svelte-1ya7iue"&&(t.textContent=n),s=X(u),r=T(u,"INPUT",{type:!0,min:!0,max:!0}),u.forEach(w),this.h()},h(){I(r,"type","range"),r.value=o=i[19].position[0],I(r,"min","-100"),I(r,"max","100"),I(e,"class","form-group")},m(l,u){_e(l,e,u),m(e,t),m(e,s),m(e,r),a||(c=Ve(r,"input",i[42]),a=!0)},p(l,u){u[0]&524288&&o!==(o=l[19].position[0])&&(r.value=o)},d(l){l&&w(e),a=!1,c()}}}function Cc(i){let e,t=i[52]+"",n,s;return{c(){e=A("option"),n=Te(t),this.h()},l(r){e=T(r,"OPTION",{});var o=z(e);n=Se(o,t),o.forEach(w),this.h()},h(){e.__value=s=i[52],Xe(e,e.__value)},m(r,o){_e(r,e,o),m(e,n)},p(r,o){o[0]&131072&&t!==(t=r[52]+"")&&Ke(n,t),o[0]&131072&&s!==(s=r[52])&&(e.__value=s,Xe(e,e.__value))},d(r){r&&w(e)}}}function Rc(i){let e,t,n=i[13].lithology_name+"",s,r,o,a=i[13].volume.toFixed(1)+"",c,l;return{c(){e=A("div"),t=A("p"),s=Te(n),r=j(),o=A("p"),c=Te(a),l=Te(" m³"),this.h()},l(u){e=T(u,"DIV",{class:!0});var h=z(e);t=T(h,"P",{});var d=z(t);s=Se(d,n),d.forEach(w),r=X(h),o=T(h,"P",{class:!0});var g=z(o);c=Se(g,a),l=Se(g," m³"),g.forEach(w),h.forEach(w),this.h()},h(){I(o,"class","volume-value svelte-z3j894"),I(e,"class","volume-result svelte-z3j894")},m(u,h){_e(u,e,h),m(e,t),m(t,s),m(e,r),m(e,o),m(o,c),m(o,l)},p(u,h){h[0]&8192&&n!==(n=u[13].lithology_name+"")&&Ke(s,n),h[0]&8192&&a!==(a=u[13].volume.toFixed(1)+"")&&Ke(c,a)},d(u){u&&w(e)}}}function Pc(i){let e,t,n,s="历史建模",r,o,a=tt(i[12].slice(0,5)),c=[];for(let l=0;l<a.length;l+=1)c[l]=Lc(Ec(i,a,l));return{c(){e=A("hr"),t=j(),n=A("h4"),n.textContent=s,r=j();for(let l=0;l<c.length;l+=1)c[l].c();o=Pt(),this.h()},l(l){e=T(l,"HR",{style:!0}),t=X(l),n=T(l,"H4",{style:!0,"data-svelte-h":!0}),Ie(n)!=="svelte-1xvbgi4"&&(n.textContent=s),r=X(l);for(let u=0;u<c.length;u+=1)c[u].l(l);o=Pt(),this.h()},h(){ge(e,"border-color","var(--border)"),ge(e,"margin","12px 0"),ge(n,"font-size","13px"),ge(n,"margin-bottom","8px")},m(l,u){_e(l,e,u),_e(l,t,u),_e(l,n,u),_e(l,r,u);for(let h=0;h<c.length;h+=1)c[h]&&c[h].m(l,u);_e(l,o,u)},p(l,u){if(u[0]&4198400){a=tt(l[12].slice(0,5));let h;for(h=0;h<a.length;h+=1){const d=Ec(l,a,h);c[h]?c[h].p(d,u):(c[h]=Lc(d),c[h].c(),c[h].m(o.parentNode,o))}for(;h<c.length;h+=1)c[h].d(1);c.length=a.length}},d(l){l&&(w(e),w(t),w(n),w(r),w(o)),Tt(c,l)}}}function Lc(i){let e,t,n=i[49].status+"",s,r,o,a,c=i[49].variogram_model+"",l,u,h=i[49].grid_nx+"",d,g,v=i[49].grid_ny+"",_,p,f=i[49].grid_nz+"",b,x,R,S;function y(){return i[44](i[49])}return{c(){e=A("div"),t=A("span"),s=Te(n),o=j(),a=A("span"),l=Te(c),u=j(),d=Te(h),g=Te("x"),_=Te(v),p=Te("x"),b=Te(f),x=j(),this.h()},l(C){e=T(C,"DIV",{class:!0});var D=z(e);t=T(D,"SPAN",{class:!0});var O=z(t);s=Se(O,n),O.forEach(w),o=X(D),a=T(D,"SPAN",{style:!0});var M=z(a);l=Se(M,c),u=X(M),d=Se(M,h),g=Se(M,"x"),_=Se(M,v),p=Se(M,"x"),b=Se(M,f),M.forEach(w),x=X(D),D.forEach(w),this.h()},h(){I(t,"class",r="badge badge-"+(i[49].status==="completed"?"success":i[49].status==="failed"?"danger":"warning")),ge(a,"font-size","11px"),I(e,"class","run-item svelte-z3j894")},m(C,D){_e(C,e,D),m(e,t),m(t,s),m(e,o),m(e,a),m(a,l),m(a,u),m(a,d),m(a,g),m(a,_),m(a,p),m(a,b),m(e,x),R||(S=Ve(e,"click",y),R=!0)},p(C,D){i=C,D[0]&4096&&n!==(n=i[49].status+"")&&Ke(s,n),D[0]&4096&&r!==(r="badge badge-"+(i[49].status==="completed"?"success":i[49].status==="failed"?"danger":"warning"))&&I(t,"class",r),D[0]&4096&&c!==(c=i[49].variogram_model+"")&&Ke(l,c),D[0]&4096&&h!==(h=i[49].grid_nx+"")&&Ke(d,h),D[0]&4096&&v!==(v=i[49].grid_ny+"")&&Ke(_,v),D[0]&4096&&f!==(f=i[49].grid_nz+"")&&Ke(b,f)},d(C){C&&w(e),R=!1,S()}}}function cv(i){let e,t,n="三维建模",s,r,o="刷新",a,c,l,u,h;function d(p,f){return p[14].status==="running"?lv:av}let g=d(i),v=g(i),_=i[17]&&Tc(i);return{c(){e=A("div"),t=A("h3"),t.textContent=n,s=j(),r=A("button"),r.textContent=o,a=j(),c=A("div"),v.c(),l=j(),_&&_.c(),this.h()},l(p){e=T(p,"DIV",{class:!0});var f=z(e);t=T(f,"H3",{"data-svelte-h":!0}),Ie(t)!=="svelte-1tzs814"&&(t.textContent=n),s=X(f),r=T(f,"BUTTON",{class:!0,"data-svelte-h":!0}),Ie(r)!=="svelte-z4d5z9"&&(r.textContent=o),f.forEach(w),a=X(p),c=T(p,"DIV",{class:!0});var b=z(c);v.l(b),l=X(b),_&&_.l(b),b.forEach(w),this.h()},h(){I(r,"class","btn-secondary btn-sm"),I(e,"class","panel-header"),I(c,"class","panel-body scrollable")},m(p,f){_e(p,e,f),m(e,t),m(e,s),m(e,r),_e(p,a,f),_e(p,c,f),v.m(c,null),m(c,l),_&&_.m(c,null),u||(h=Ve(r,"click",i[24]),u=!0)},p(p,f){g===(g=d(p))&&v?v.p(p,f):(v.d(1),v=g(p),v&&(v.c(),v.m(c,l))),p[17]?_?_.p(p,f):(_=Tc(p),_.c(),_.m(c,null)):_&&(_.d(1),_=null)},i:Et,o:Et,d(p){p&&(w(e),w(a),w(c)),v.d(),_&&_.d(),u=!1,h()}}}function uv(i,e,t){let n,s,r,o,a,c,l,u,h,d,g;Ze(i,kn,te=>t(25,n=te)),Ze(i,On,te=>t(45,s=te)),Ze(i,As,te=>t(12,r=te)),Ze(i,zo,te=>t(13,o=te)),Ze(i,Ji,te=>t(14,a=te)),Ze(i,Qi,te=>t(15,c=te)),Ze(i,$i,te=>t(16,l=te)),Ze(i,ws,te=>t(17,u=te)),Ze(i,jo,te=>t(26,h=te)),Ze(i,$n,te=>t(18,d=te)),Ze(i,es,te=>t(19,g=te));let v="spherical",_="",p="",f="",b=0,x=1,R=50,S=50,y=25,C=!0,D="",O=null;async function M(){if(!n||n.length<3)return;const te=n.map(fe=>[fe.longitude,fe.latitude]),ne=n.map(fe=>fe.elevation);try{const fe=await ht.post("/projects/modeling/variogram-preview",{model_type:v,range_param:C?null:_?parseFloat(_):null,sill_param:C?null:p?parseFloat(p):null,nugget_param:C?null:f?parseFloat(f):null,coords:te,values:ne});nt(jo,h=fe,h)}catch(fe){console.warn("变异函数预览失败:",fe)}}function P(){if(!O||!h)return;const te=O,ne=te.getContext("2d"),fe=te.width,N=te.height;ne.clearRect(0,0,fe,N),ne.fillStyle="#1a1d23",ne.fillRect(0,0,fe,N);const E={top:20,right:16,bottom:36,left:50},$=fe-E.left-E.right,re=N-E.top-E.bottom,Z=h,le=Z.experimental_lags||[],J=Z.experimental_gamma||[],de=Z.model_h||[],me=Z.model_gamma||[];if(le.length===0&&de.length===0)return;const Ee=[...le,...de],Oe=[...J,...me],be=Math.max(...Ee,1),ye=Math.max(...Oe,1),Be=Pe=>E.left+Pe/be*$,We=Pe=>E.top+re-Pe/ye*re;ne.strokeStyle="#3a3f4b",ne.lineWidth=.5;for(let Pe=0;Pe<=5;Pe++){const qe=ye/5*Pe,k=We(qe);ne.beginPath(),ne.moveTo(E.left,k),ne.lineTo(fe-E.right,k),ne.stroke(),ne.fillStyle="#6b7280",ne.font="10px sans-serif",ne.textAlign="right",ne.textBaseline="middle",ne.fillText(qe.toFixed(1),E.left-6,k)}for(let Pe=0;Pe<=5;Pe++){const qe=be/5*Pe,k=Be(qe);ne.beginPath(),ne.moveTo(k,E.top),ne.lineTo(k,N-E.bottom),ne.stroke(),ne.fillStyle="#6b7280",ne.font="10px sans-serif",ne.textAlign="center",ne.textBaseline="top",ne.fillText(qe.toFixed(1),k,N-E.bottom+4)}ne.strokeStyle="#4f8ff7",ne.lineWidth=2,ne.beginPath();for(let Pe=0;Pe<de.length;Pe++){const qe=Be(de[Pe]),k=We(me[Pe]);Pe===0?ne.moveTo(qe,k):ne.lineTo(qe,k)}ne.stroke(),ne.fillStyle="#fbbf24",le.forEach((Pe,qe)=>{const k=Be(Pe),Fe=We(J[qe]);ne.beginPath(),ne.arc(k,Fe,4,0,Math.PI*2),ne.fill()}),ne.strokeStyle="#9aa0ac",ne.lineWidth=1,ne.strokeRect(E.left,E.top,$,re),ne.fillStyle="#9aa0ac",ne.font="11px sans-serif",ne.textAlign="center",ne.textBaseline="top",ne.fillText("滞后距离",fe/2,N-14),ne.save(),ne.translate(12,N/2),ne.rotate(-Math.PI/2),ne.textAlign="center",ne.textBaseline="middle",ne.fillText("半变异函数值",0,0),ne.restore();const ze=E.top+4;ne.fillStyle="#4f8ff7",ne.fillRect(fe-E.right-100,ze,14,3),ne.fillStyle="#9aa0ac",ne.font="10px sans-serif",ne.textAlign="left",ne.textBaseline="middle",ne.fillText("理论曲线",fe-E.right-82,ze+2),ne.fillStyle="#fbbf24",ne.beginPath(),ne.arc(fe-E.right-93,ze+16,4,0,Math.PI*2),ne.fill(),ne.fillStyle="#9aa0ac",ne.fillText("实验值",fe-E.right-82,ze+16),Z.range&&Z.sill&&Z.nugget&&(ne.fillStyle="#9aa0ac",ne.font="10px sans-serif",ne.textAlign="left",ne.textBaseline="top",ne.fillText(`变程=${Z.range.toFixed(2)} 基台=${Z.sill.toFixed(2)} 块金=${Z.nugget.toFixed(2)}`,E.left+4,E.top+4))}async function H(){if(!s){$e("请先选择项目","warning");return}try{const te={variogram_model:v,range_param:C?null:_?parseFloat(_):null,sill_param:C?null:p?parseFloat(p):null,nugget_param:C?null:f?parseFloat(f):null,aniso_angle:b,aniso_ratio:x,grid_nx:R,grid_ny:S,grid_nz:y},ne=await ht.post(`/projects/${s.id}/modeling/run`,te);nt(Ji,a={status:"running",progress:0,runId:ne.id},a),$e("建模任务已启动","info"),Y(ne.id)}catch(te){$e(`启动建模失败: ${te.message}`,"error")}}function Y(te){const ne=location.protocol==="https:"?"wss:":"ws:",fe=new WebSocket(`${ne}//${location.host}/api/ws/${s.id}?run_id=${te}`);fe.onmessage=N=>{const E=JSON.parse(N.data);nt(Ji,a={status:E.status,progress:E.progress,runId:E.run_id},a),E.status==="completed"?($e("三维建模完成!","success"),V(te)):E.status==="failed"&&$e("三维建模失败","error")},fe.onerror=()=>{L(te)},fe.onclose=()=>{a.status==="running"&&L(te)}}async function L(te){const ne=async()=>{if(a.status==="running")try{const fe=await ht.get(`/projects/modeling/runs/${te}`);nt(Ji,a={status:fe.status,progress:fe.progress,runId:fe.id},a),fe.status==="completed"?($e("三维建模完成!","success"),await V(te)):fe.status==="failed"?$e("三维建模失败","error"):setTimeout(ne,2e3)}catch{setTimeout(ne,3e3)}};setTimeout(ne,1e3)}async function V(te){var ne;try{const fe=await ht.get(`/projects/modeling/runs/${te}/result`);nt(ws,u=fe,u),(ne=fe.lithologies)==null||ne.forEach(N=>{l[N]===void 0&&nt($i,l[N]=!0,l),c[N]===void 0&&nt(Qi,c[N]=.7,c)}),nt(Ji,a={status:"completed",progress:100,runId:te},a)}catch(fe){$e(`加载模型结果失败: ${fe.message}`,"error")}}async function q(){if(!(!a.runId||!D))try{const te=await ht.post(`/projects/modeling/runs/${a.runId}/volume?lithology_name=${encodeURIComponent(D)}`);nt(zo,o=te,o),$e(`${te.lithology_name} 体积: ${te.volume.toFixed(1)} m³`,"success")}catch(te){$e(`体积计算失败: ${te.message}`,"error")}}async function ue(){s&&nt(As,r=await ht.get(`/projects/${s.id}/modeling/runs`),r)}function se(){v=tn(this),t(0,v)}function ae(){C=this.checked,t(4,C)}function ie(){_=ot(this.value),t(1,_)}function he(){p=ot(this.value),t(2,p)}function ee(){f=ot(this.value),t(3,f)}function ce(te){hi[te?"unshift":"push"](()=>{O=te,t(5,O)})}function F(){b=ot(this.value),t(6,b)}function Q(){x=ot(this.value),t(7,x)}function ve(){R=ot(this.value),t(8,R)}function U(){S=ot(this.value),t(9,S)}function G(){y=ot(this.value),t(10,y)}const oe=te=>{nt($i,l[te]=l[te]===!1,l),$i.set(l)},pe=(te,ne)=>ne.name===te,Ce=(te,ne)=>{nt(Qi,c[te]=ne.target.value/100,c),Qi.set(c)},W=()=>nt(es,g.enabled=!g.enabled,g),Le=te=>{nt(es,g.position=[parseFloat(te.target.value),0,0],g),es.set(g)};function xe(){D=tn(this),t(11,D)}const Re=te=>te.status==="completed"&&V(te.id);return i.$$.update=()=>{i.$$.dirty[0]&67108896&&h&&O&&P(),i.$$.dirty[0]&33554463&&(v||_||p||f||C)&&(n==null?void 0:n.length)>=3&&M()},[v,_,p,f,C,O,b,x,R,S,y,D,r,o,a,c,l,u,d,g,M,H,V,q,ue,n,h,se,ae,ie,he,ee,ce,F,Q,ve,U,G,oe,pe,Ce,W,Le,xe,Re]}class hv extends un{constructor(e){super(),hn(this,e,uv,cv,cn,{},null,[-1,-1])}}function Dc(i){var Fe,Ye,je;let e,t,n,s,r=i[11][i[4]]+"",o,a,c,l,u,h="最小值",d,g,v=((Fe=i[10].value_min)==null?void 0:Fe.toFixed(2))+"",_,p,f,b,x="最大值",R,S,y=((Ye=i[10].value_max)==null?void 0:Ye.toFixed(2))+"",C,D,O,M,P="均值",H,Y,L=((je=i[10].value_mean)==null?void 0:je.toFixed(2))+"",V,q,ue,se="渲染设置",ae,ie,he,ee="渲染模式",ce,F,Q,ve="彩色体素",U,G="等值面",oe,pe,Ce,W,Le="颜色映射范围",xe,Re,te,ne,fe,N,E,$,re,Z,le,J=i[1].toFixed(1)+"",de,me,Ee,Oe=((i[1]+i[2])/2).toFixed(1)+"",be,ye,Be,We=i[2].toFixed(1)+"",ze,Pe,qe,k=i[3]==="isosurface"&&Ic(i);return{c(){e=A("hr"),t=j(),n=A("h4"),s=Te("属性: "),o=Te(r),a=j(),c=A("div"),l=A("div"),u=A("span"),u.textContent=h,d=j(),g=A("span"),_=Te(v),p=j(),f=A("div"),b=A("span"),b.textContent=x,R=j(),S=A("span"),C=Te(y),D=j(),O=A("div"),M=A("span"),M.textContent=P,H=j(),Y=A("span"),V=Te(L),q=j(),ue=A("h4"),ue.textContent=se,ae=j(),ie=A("div"),he=A("label"),he.textContent=ee,ce=j(),F=A("select"),Q=A("option"),Q.textContent=ve,U=A("option"),U.textContent=G,oe=j(),k&&k.c(),pe=j(),Ce=A("div"),W=A("label"),W.textContent=Le,xe=j(),Re=A("div"),te=A("input"),ne=j(),fe=A("input"),N=j(),E=A("div"),$=A("div"),re=j(),Z=A("div"),le=A("span"),de=Te(J),me=j(),Ee=A("span"),be=Te(Oe),ye=j(),Be=A("span"),ze=Te(We),this.h()},l(B){e=T(B,"HR",{style:!0}),t=X(B),n=T(B,"H4",{style:!0});var Me=z(n);s=Se(Me,"属性: "),o=Se(Me,r),Me.forEach(w),a=X(B),c=T(B,"DIV",{class:!0});var Ae=z(c);l=T(Ae,"DIV",{class:!0});var He=z(l);u=T(He,"SPAN",{class:!0,"data-svelte-h":!0}),Ie(u)!=="svelte-9zqffl"&&(u.textContent=h),d=X(He),g=T(He,"SPAN",{class:!0});var Ge=z(g);_=Se(Ge,v),Ge.forEach(w),He.forEach(w),p=X(Ae),f=T(Ae,"DIV",{class:!0});var et=z(f);b=T(et,"SPAN",{class:!0,"data-svelte-h":!0}),Ie(b)!=="svelte-pto1ax"&&(b.textContent=x),R=X(et),S=T(et,"SPAN",{class:!0});var it=z(S);C=Se(it,y),it.forEach(w),et.forEach(w),D=X(Ae),O=T(Ae,"DIV",{class:!0});var at=z(O);M=T(at,"SPAN",{class:!0,"data-svelte-h":!0}),Ie(M)!=="svelte-os332j"&&(M.textContent=P),H=X(at),Y=T(at,"SPAN",{class:!0});var St=z(Y);V=Se(St,L),St.forEach(w),at.forEach(w),Ae.forEach(w),q=X(B),ue=T(B,"H4",{style:!0,"data-svelte-h":!0}),Ie(ue)!=="svelte-1ld9l9j"&&(ue.textContent=se),ae=X(B),ie=T(B,"DIV",{class:!0});var lt=z(ie);he=T(lt,"LABEL",{"data-svelte-h":!0}),Ie(he)!=="svelte-cq5b4l"&&(he.textContent=ee),ce=X(lt),F=T(lt,"SELECT",{});var Mt=z(F);Q=T(Mt,"OPTION",{"data-svelte-h":!0}),Ie(Q)!=="svelte-127lpa0"&&(Q.textContent=ve),U=T(Mt,"OPTION",{"data-svelte-h":!0}),Ie(U)!=="svelte-q3a2m9"&&(U.textContent=G),Mt.forEach(w),lt.forEach(w),oe=X(B),k&&k.l(B),pe=X(B),Ce=T(B,"DIV",{class:!0});var ft=z(Ce);W=T(ft,"LABEL",{"data-svelte-h":!0}),Ie(W)!=="svelte-1lqds2v"&&(W.textContent=Le),xe=X(ft),Re=T(ft,"DIV",{class:!0});var Nt=z(Re);te=T(Nt,"INPUT",{type:!0,step:!0}),ne=X(Nt),fe=T(Nt,"INPUT",{type:!0,step:!0}),Nt.forEach(w),ft.forEach(w),N=X(B),E=T(B,"DIV",{class:!0});var Ft=z(E);$=T(Ft,"DIV",{class:!0,style:!0}),z($).forEach(w),re=X(Ft),Z=T(Ft,"DIV",{class:!0});var Gt=z(Z);le=T(Gt,"SPAN",{});var fn=z(le);de=Se(fn,J),fn.forEach(w),me=X(Gt),Ee=T(Gt,"SPAN",{});var bn=z(Ee);be=Se(bn,Oe),bn.forEach(w),ye=X(Gt),Be=T(Gt,"SPAN",{});var Tn=z(Be);ze=Se(Tn,We),Tn.forEach(w),Gt.forEach(w),Ft.forEach(w),this.h()},h(){ge(e,"border-color","var(--border)"),ge(e,"margin","12px 0"),ge(n,"font-size","13px"),ge(n,"margin-bottom","8px"),I(u,"class","stat-label svelte-8lfmmm"),I(g,"class","stat-value svelte-8lfmmm"),I(l,"class","stat-item svelte-8lfmmm"),I(b,"class","stat-label svelte-8lfmmm"),I(S,"class","stat-value svelte-8lfmmm"),I(f,"class","stat-item svelte-8lfmmm"),I(M,"class","stat-label svelte-8lfmmm"),I(Y,"class","stat-value svelte-8lfmmm"),I(O,"class","stat-item svelte-8lfmmm"),I(c,"class","stats-grid svelte-8lfmmm"),ge(ue,"font-size","13px"),ge(ue,"margin","12px 0 8px"),Q.__value="voxel",Xe(Q,Q.__value),U.__value="isosurface",Xe(U,U.__value),i[3]===void 0&&sn(()=>i[19].call(F)),I(ie,"class","form-group"),I(te,"type","number"),I(te,"step","0.1"),I(fe,"type","number"),I(fe,"step","0.1"),I(Re,"class","form-row"),I(Ce,"class","form-group"),I($,"class","legend-bar svelte-8lfmmm"),ge($,"background","linear-gradient(to right, #0000ff, #00ff00, #ffff00, #ff0000)"),I(Z,"class","legend-labels svelte-8lfmmm"),I(E,"class","color-legend svelte-8lfmmm")},m(B,Me){_e(B,e,Me),_e(B,t,Me),_e(B,n,Me),m(n,s),m(n,o),_e(B,a,Me),_e(B,c,Me),m(c,l),m(l,u),m(l,d),m(l,g),m(g,_),m(c,p),m(c,f),m(f,b),m(f,R),m(f,S),m(S,C),m(c,D),m(c,O),m(O,M),m(O,H),m(O,Y),m(Y,V),_e(B,q,Me),_e(B,ue,Me),_e(B,ae,Me),_e(B,ie,Me),m(ie,he),m(ie,ce),m(ie,F),m(F,Q),m(F,U),yt(F,i[3],!0),_e(B,oe,Me),k&&k.m(B,Me),_e(B,pe,Me),_e(B,Ce,Me),m(Ce,W),m(Ce,xe),m(Ce,Re),m(Re,te),Xe(te,i[1]),m(Re,ne),m(Re,fe),Xe(fe,i[2]),_e(B,N,Me),_e(B,E,Me),m(E,$),m(E,re),m(E,Z),m(Z,le),m(le,de),m(Z,me),m(Z,Ee),m(Ee,be),m(Z,ye),m(Z,Be),m(Be,ze),Pe||(qe=[Ve(F,"change",i[19]),Ve(te,"input",i[21]),Ve(fe,"input",i[22])],Pe=!0)},p(B,Me){var Ae,He,Ge;Me&16&&r!==(r=B[11][B[4]]+"")&&Ke(o,r),Me&1024&&v!==(v=((Ae=B[10].value_min)==null?void 0:Ae.toFixed(2))+"")&&Ke(_,v),Me&1024&&y!==(y=((He=B[10].value_max)==null?void 0:He.toFixed(2))+"")&&Ke(C,y),Me&1024&&L!==(L=((Ge=B[10].value_mean)==null?void 0:Ge.toFixed(2))+"")&&Ke(V,L),Me&8&&yt(F,B[3]),B[3]==="isosurface"?k?k.p(B,Me):(k=Ic(B),k.c(),k.m(pe.parentNode,pe)):k&&(k.d(1),k=null),Me&2&&ot(te.value)!==B[1]&&Xe(te,B[1]),Me&4&&ot(fe.value)!==B[2]&&Xe(fe,B[2]),Me&2&&J!==(J=B[1].toFixed(1)+"")&&Ke(de,J),Me&6&&Oe!==(Oe=((B[1]+B[2])/2).toFixed(1)+"")&&Ke(be,Oe),Me&4&&We!==(We=B[2].toFixed(1)+"")&&Ke(ze,We)},d(B){B&&(w(e),w(t),w(n),w(a),w(c),w(q),w(ue),w(ae),w(ie),w(oe),w(pe),w(Ce),w(N),w(E)),k&&k.d(B),Pe=!1,wt(qe)}}}function Ic(i){let e,t,n="等值面阈值",s,r,o,a,c=i[0].toFixed(1)+"",l,u,h;return{c(){e=A("div"),t=A("label"),t.textContent=n,s=j(),r=A("input"),o=j(),a=A("span"),l=Te(c),this.h()},l(d){e=T(d,"DIV",{class:!0});var g=z(e);t=T(g,"LABEL",{"data-svelte-h":!0}),Ie(t)!=="svelte-hv2zuh"&&(t.textContent=n),s=X(g),r=T(g,"INPUT",{type:!0,min:!0,max:!0,step:!0}),o=X(g),a=T(g,"SPAN",{style:!0});var v=z(a);l=Se(v,c),v.forEach(w),g.forEach(w),this.h()},h(){I(r,"type","range"),I(r,"min",i[1]),I(r,"max",i[2]),I(r,"step","0.1"),ge(a,"font-size","11px"),I(e,"class","form-group")},m(d,g){_e(d,e,g),m(e,t),m(e,s),m(e,r),Xe(r,i[0]),m(e,o),m(e,a),m(a,l),u||(h=[Ve(r,"change",i[20]),Ve(r,"input",i[20])],u=!0)},p(d,g){g&2&&I(r,"min",d[1]),g&4&&I(r,"max",d[2]),g&1&&Xe(r,d[0]),g&1&&c!==(c=d[0].toFixed(1)+"")&&Ke(l,c)},d(d){d&&w(e),u=!1,wt(h)}}}function fv(i){let e,t="<h3>属性场建模</h3>",n,s,r,o,a="参数类型",c,l,u,h="标贯N值",d,g="含水量",v,_="压缩模量",p,f,b,x="变异函数模型",R,S,y,C="球状模型",D,O="指数模型",M,P="高斯模型",H,Y,L,V,q="NX",ue,se,ae,ie,he,ee="NY",ce,F,Q,ve,U,G="NZ",oe,pe,Ce,W,Le=i[9]?"插值计算中...":"开始插值",xe,Re,te,ne,fe=i[10]&&Dc(i);return{c(){e=A("div"),e.innerHTML=t,n=j(),s=A("div"),r=A("div"),o=A("label"),o.textContent=a,c=j(),l=A("select"),u=A("option"),u.textContent=h,d=A("option"),d.textContent=g,v=A("option"),v.textContent=_,p=j(),f=A("div"),b=A("label"),b.textContent=x,R=j(),S=A("select"),y=A("option"),y.textContent=C,D=A("option"),D.textContent=O,M=A("option"),M.textContent=P,H=j(),Y=A("div"),L=A("div"),V=A("label"),V.textContent=q,ue=j(),se=A("input"),ae=j(),ie=A("div"),he=A("label"),he.textContent=ee,ce=j(),F=A("input"),Q=j(),ve=A("div"),U=A("label"),U.textContent=G,oe=j(),pe=A("input"),Ce=j(),W=A("button"),xe=Te(Le),Re=j(),fe&&fe.c(),this.h()},l(N){e=T(N,"DIV",{class:!0,"data-svelte-h":!0}),Ie(e)!=="svelte-s1qbq0"&&(e.innerHTML=t),n=X(N),s=T(N,"DIV",{class:!0});var E=z(s);r=T(E,"DIV",{class:!0});var $=z(r);o=T($,"LABEL",{"data-svelte-h":!0}),Ie(o)!=="svelte-vxe5jw"&&(o.textContent=a),c=X($),l=T($,"SELECT",{});var re=z(l);u=T(re,"OPTION",{"data-svelte-h":!0}),Ie(u)!=="svelte-1ekkfg"&&(u.textContent=h),d=T(re,"OPTION",{"data-svelte-h":!0}),Ie(d)!=="svelte-vhtqdz"&&(d.textContent=g),v=T(re,"OPTION",{"data-svelte-h":!0}),Ie(v)!=="svelte-1m1gv94"&&(v.textContent=_),re.forEach(w),$.forEach(w),p=X(E),f=T(E,"DIV",{class:!0});var Z=z(f);b=T(Z,"LABEL",{"data-svelte-h":!0}),Ie(b)!=="svelte-1jgf9ft"&&(b.textContent=x),R=X(Z),S=T(Z,"SELECT",{});var le=z(S);y=T(le,"OPTION",{"data-svelte-h":!0}),Ie(y)!=="svelte-17ym7v6"&&(y.textContent=C),D=T(le,"OPTION",{"data-svelte-h":!0}),Ie(D)!=="svelte-bzk8zo"&&(D.textContent=O),M=T(le,"OPTION",{"data-svelte-h":!0}),Ie(M)!=="svelte-1iqrdsw"&&(M.textContent=P),le.forEach(w),Z.forEach(w),H=X(E),Y=T(E,"DIV",{class:!0});var J=z(Y);L=T(J,"DIV",{class:!0});var de=z(L);V=T(de,"LABEL",{"data-svelte-h":!0}),Ie(V)!=="svelte-kuum7m"&&(V.textContent=q),ue=X(de),se=T(de,"INPUT",{type:!0,min:!0,max:!0}),de.forEach(w),ae=X(J),ie=T(J,"DIV",{class:!0});var me=z(ie);he=T(me,"LABEL",{"data-svelte-h":!0}),Ie(he)!=="svelte-1kjsuy3"&&(he.textContent=ee),ce=X(me),F=T(me,"INPUT",{type:!0,min:!0,max:!0}),me.forEach(w),Q=X(J),ve=T(J,"DIV",{class:!0});var Ee=z(ve);U=T(Ee,"LABEL",{"data-svelte-h":!0}),Ie(U)!=="svelte-1vblzhc"&&(U.textContent=G),oe=X(Ee),pe=T(Ee,"INPUT",{type:!0,min:!0,max:!0}),Ee.forEach(w),J.forEach(w),Ce=X(E),W=T(E,"BUTTON",{class:!0,style:!0});var Oe=z(W);xe=Se(Oe,Le),Oe.forEach(w),Re=X(E),fe&&fe.l(E),E.forEach(w),this.h()},h(){I(e,"class","panel-header"),u.__value="spt_n",Xe(u,u.__value),d.__value="water_content",Xe(d,d.__value),v.__value="compression_modulus",Xe(v,v.__value),i[4]===void 0&&sn(()=>i[14].call(l)),I(r,"class","form-group"),y.__value="spherical",Xe(y,y.__value),D.__value="exponential",Xe(D,D.__value),M.__value="gaussian",Xe(M,M.__value),i[5]===void 0&&sn(()=>i[15].call(S)),I(f,"class","form-group"),I(se,"type","number"),I(se,"min","5"),I(se,"max","100"),I(L,"class","form-group"),I(F,"type","number"),I(F,"min","5"),I(F,"max","100"),I(ie,"class","form-group"),I(pe,"type","number"),I(pe,"min","5"),I(pe,"max","50"),I(ve,"class","form-group"),I(Y,"class","form-row"),I(W,"class","btn-primary"),W.disabled=i[9],ge(W,"width","100%"),I(s,"class","panel-body scrollable")},m(N,E){_e(N,e,E),_e(N,n,E),_e(N,s,E),m(s,r),m(r,o),m(r,c),m(r,l),m(l,u),m(l,d),m(l,v),yt(l,i[4],!0),m(s,p),m(s,f),m(f,b),m(f,R),m(f,S),m(S,y),m(S,D),m(S,M),yt(S,i[5],!0),m(s,H),m(s,Y),m(Y,L),m(L,V),m(L,ue),m(L,se),Xe(se,i[6]),m(Y,ae),m(Y,ie),m(ie,he),m(ie,ce),m(ie,F),Xe(F,i[7]),m(Y,Q),m(Y,ve),m(ve,U),m(ve,oe),m(ve,pe),Xe(pe,i[8]),m(s,Ce),m(s,W),m(W,xe),m(s,Re),fe&&fe.m(s,null),te||(ne=[Ve(l,"change",i[14]),Ve(S,"change",i[15]),Ve(se,"input",i[16]),Ve(F,"input",i[17]),Ve(pe,"input",i[18]),Ve(W,"click",i[12])],te=!0)},p(N,[E]){E&16&&yt(l,N[4]),E&32&&yt(S,N[5]),E&64&&ot(se.value)!==N[6]&&Xe(se,N[6]),E&128&&ot(F.value)!==N[7]&&Xe(F,N[7]),E&256&&ot(pe.value)!==N[8]&&Xe(pe,N[8]),E&512&&Le!==(Le=N[9]?"插值计算中...":"开始插值")&&Ke(xe,Le),E&512&&(W.disabled=N[9]),N[10]?fe?fe.p(N,E):(fe=Dc(N),fe.c(),fe.m(s,null)):fe&&(fe.d(1),fe=null)},i:Et,o:Et,d(N){N&&(w(e),w(n),w(s)),fe&&fe.d(),te=!1,wt(ne)}}}function dv(i,e,t){let n,s,r;Ze(i,ur,P=>t(10,n=P)),Ze(i,On,P=>t(23,s=P)),Ze(i,hr,P=>t(13,r=P));let o="spt_n",a="spherical",c=50,l=50,u=25,h=0,d=0,g=100,v="voxel",_=!1;const p={spt_n:"标贯N值",water_content:"含水量",compression_modulus:"压缩模量"};async function f(){if(!s){$e("请先选择项目","warning");return}t(9,_=!0);try{const P=await ht.post(`/projects/${s.id}/attributes/interpolate?attribute=${o}&grid_nx=${c}&grid_ny=${l}&grid_nz=${u}&variogram_model=${a}`);nt(ur,n=P,n),P.value_min!==void 0&&(t(1,d=P.value_min),t(2,g=P.value_max),t(0,h=(P.value_min+P.value_max)/2)),$e(`属性场插值完成: ${p[o]}`,"success")}catch(P){$e(`插值失败: ${P.message}`,"error")}finally{t(9,_=!1)}}function b(){o=tn(this),t(4,o)}function x(){a=tn(this),t(5,a)}function R(){c=ot(this.value),t(6,c)}function S(){l=ot(this.value),t(7,l)}function y(){u=ot(this.value),t(8,u)}function C(){v=tn(this),t(3,v)}function D(){h=ot(this.value),t(0,h)}function O(){d=ot(this.value),t(1,d)}function M(){g=ot(this.value),t(2,g)}return i.$$.update=()=>{i.$$.dirty&8207&&nt(hr,r={...r,mode:v,isosurfaceValue:h,colorMin:d,colorMax:g},r)},[h,d,g,v,o,a,c,l,u,_,n,p,f,r,b,x,R,S,y,C,D,O,M]}class pv extends un{constructor(e){super(),hn(this,e,dv,fv,cn,{})}}function Uc(i,e,t){const n=i.slice();return n[12]=e[t],n}function Nc(i,e,t){const n=i.slice();return n[15]=e[t],n}function Oc(i){let e,t=i[15].variogram_model+"",n,s,r=i[15].grid_nx+"",o,a,c=i[15].grid_ny+"",l,u,h=i[15].grid_nz+"",d,g,v=i[15].status+"",_,p,f;return{c(){e=A("option"),n=Te(t),s=j(),o=Te(r),a=Te("x"),l=Te(c),u=Te("x"),d=Te(h),g=Te(" ("),_=Te(v),p=Te(")"),this.h()},l(b){e=T(b,"OPTION",{});var x=z(e);n=Se(x,t),s=X(x),o=Se(x,r),a=Se(x,"x"),l=Se(x,c),u=Se(x,"x"),d=Se(x,h),g=Se(x," ("),_=Se(x,v),p=Se(x,")"),x.forEach(w),this.h()},h(){e.__value=f=i[15].id,Xe(e,e.__value)},m(b,x){_e(b,e,x),m(e,n),m(e,s),m(e,o),m(e,a),m(e,l),m(e,u),m(e,d),m(e,g),m(e,_),m(e,p)},p(b,x){x&8&&t!==(t=b[15].variogram_model+"")&&Ke(n,t),x&8&&r!==(r=b[15].grid_nx+"")&&Ke(o,r),x&8&&c!==(c=b[15].grid_ny+"")&&Ke(l,c),x&8&&h!==(h=b[15].grid_nz+"")&&Ke(d,h),x&8&&v!==(v=b[15].status+"")&&Ke(_,v),x&8&&f!==(f=b[15].id)&&(e.__value=f,Xe(e,e.__value))},d(b){b&&w(e)}}}function Fc(i){let e,t=i[12].name+"",n,s;return{c(){e=A("option"),n=Te(t),this.h()},l(r){e=T(r,"OPTION",{});var o=z(e);n=Se(o,t),o.forEach(w),this.h()},h(){e.__value=s=i[12].id,Xe(e,e.__value)},m(r,o){_e(r,e,o),m(e,n)},p(r,o){o&16&&t!==(t=r[12].name+"")&&Ke(n,t),o&16&&s!==(s=r[12].id)&&(e.__value=s,Xe(e,e.__value))},d(r){r&&w(e)}}}function mv(i){let e,t="<h3>成果导出</h3>",n,s,r,o,a="三维模型",c,l,u,h="选择建模结果",d,g,v,_="选择建模结果",p,f,b,x,R,S,y,C="glTF格式可在Blender、ParaView等软件中打开",D,O,M,P,H,Y="剖面图",L,V,q,ue="选择剖面",se,ae,ie,he="选择剖面",ee,ce,F,Q,ve,U,G,oe,pe,Ce,W,Le,xe,Re,te="数据统计",ne,fe,N,E,$,re,Z="包含各层厚度统计、面积、体积等",le,J,de,me,Ee,Oe="建模报告",be,ye,Be,We,ze,Pe,qe="包含半变异函数拟合结果、插值参数、剖面图缩略",k,Fe,Ye=tt(i[3].filter(Bc)),je=[];for(let Ae=0;Ae<Ye.length;Ae+=1)je[Ae]=Oc(Nc(i,Ye,Ae));let B=tt(i[4]),Me=[];for(let Ae=0;Ae<B.length;Ae+=1)Me[Ae]=Fc(Uc(i,B,Ae));return{c(){e=A("div"),e.innerHTML=t,n=j(),s=A("div"),r=A("div"),o=A("h4"),o.textContent=a,c=j(),l=A("div"),u=A("label"),u.textContent=h,d=j(),g=A("select"),v=A("option"),v.textContent=_;for(let Ae=0;Ae<je.length;Ae+=1)je[Ae].c();p=j(),f=A("div"),b=A("button"),x=Te("导出 glTF 模型"),S=j(),y=A("p"),y.textContent=C,D=j(),O=A("hr"),M=j(),P=A("div"),H=A("h4"),H.textContent=Y,L=j(),V=A("div"),q=A("label"),q.textContent=ue,se=j(),ae=A("select"),ie=A("option"),ie.textContent=he;for(let Ae=0;Ae<Me.length;Ae+=1)Me[Ae].c();ee=j(),ce=A("div"),F=A("button"),Q=Te("导出 PNG"),U=j(),G=A("button"),oe=Te("导出 SVG"),Ce=j(),W=A("hr"),Le=j(),xe=A("div"),Re=A("h4"),Re.textContent=te,ne=j(),fe=A("button"),N=Te("导出地层数据统计表 (Excel)"),$=j(),re=A("p"),re.textContent=Z,le=j(),J=A("hr"),de=j(),me=A("div"),Ee=A("h4"),Ee.textContent=Oe,be=j(),ye=A("button"),Be=Te("导出建模参数报告 (PDF)"),ze=j(),Pe=A("p"),Pe.textContent=qe,this.h()},l(Ae){e=T(Ae,"DIV",{class:!0,"data-svelte-h":!0}),Ie(e)!=="svelte-16wx9di"&&(e.innerHTML=t),n=X(Ae),s=T(Ae,"DIV",{class:!0});var He=z(s);r=T(He,"DIV",{class:!0});var Ge=z(r);o=T(Ge,"H4",{style:!0,"data-svelte-h":!0}),Ie(o)!=="svelte-f1tw8s"&&(o.textContent=a),c=X(Ge),l=T(Ge,"DIV",{class:!0});var et=z(l);u=T(et,"LABEL",{"data-svelte-h":!0}),Ie(u)!=="svelte-rq7xu0"&&(u.textContent=h),d=X(et),g=T(et,"SELECT",{});var it=z(g);v=T(it,"OPTION",{"data-svelte-h":!0}),Ie(v)!=="svelte-ma6l8e"&&(v.textContent=_);for(let zn=0;zn<je.length;zn+=1)je[zn].l(it);it.forEach(w),et.forEach(w),p=X(Ge),f=T(Ge,"DIV",{class:!0});var at=z(f);b=T(at,"BUTTON",{class:!0});var St=z(b);x=Se(St,"导出 glTF 模型"),St.forEach(w),at.forEach(w),S=X(Ge),y=T(Ge,"P",{style:!0,"data-svelte-h":!0}),Ie(y)!=="svelte-elxrxh"&&(y.textContent=C),Ge.forEach(w),D=X(He),O=T(He,"HR",{style:!0}),M=X(He),P=T(He,"DIV",{class:!0});var lt=z(P);H=T(lt,"H4",{style:!0,"data-svelte-h":!0}),Ie(H)!=="svelte-l0uqjv"&&(H.textContent=Y),L=X(lt),V=T(lt,"DIV",{class:!0});var Mt=z(V);q=T(Mt,"LABEL",{"data-svelte-h":!0}),Ie(q)!=="svelte-1uj1nrm"&&(q.textContent=ue),se=X(Mt),ae=T(Mt,"SELECT",{});var ft=z(ae);ie=T(ft,"OPTION",{"data-svelte-h":!0}),Ie(ie)!=="svelte-ij5m9g"&&(ie.textContent=he);for(let zn=0;zn<Me.length;zn+=1)Me[zn].l(ft);ft.forEach(w),Mt.forEach(w),ee=X(lt),ce=T(lt,"DIV",{class:!0});var Nt=z(ce);F=T(Nt,"BUTTON",{class:!0});var Ft=z(F);Q=Se(Ft,"导出 PNG"),Ft.forEach(w),U=X(Nt),G=T(Nt,"BUTTON",{class:!0});var Gt=z(G);oe=Se(Gt,"导出 SVG"),Gt.forEach(w),Nt.forEach(w),lt.forEach(w),Ce=X(He),W=T(He,"HR",{style:!0}),Le=X(He),xe=T(He,"DIV",{class:!0});var fn=z(xe);Re=T(fn,"H4",{style:!0,"data-svelte-h":!0}),Ie(Re)!=="svelte-nufmjz"&&(Re.textContent=te),ne=X(fn),fe=T(fn,"BUTTON",{class:!0,style:!0});var bn=z(fe);N=Se(bn,"导出地层数据统计表 (Excel)"),bn.forEach(w),$=X(fn),re=T(fn,"P",{style:!0,"data-svelte-h":!0}),Ie(re)!=="svelte-soh8v8"&&(re.textContent=Z),fn.forEach(w),le=X(He),J=T(He,"HR",{style:!0}),de=X(He),me=T(He,"DIV",{class:!0});var Tn=z(me);Ee=T(Tn,"H4",{style:!0,"data-svelte-h":!0}),Ie(Ee)!=="svelte-16vzmgj"&&(Ee.textContent=Oe),be=X(Tn),ye=T(Tn,"BUTTON",{class:!0,style:!0});var ps=z(ye);Be=Se(ps,"导出建模参数报告 (PDF)"),ps.forEach(w),ze=X(Tn),Pe=T(Tn,"P",{style:!0,"data-svelte-h":!0}),Ie(Pe)!=="svelte-1mnkg1"&&(Pe.textContent=qe),Tn.forEach(w),He.forEach(w),this.h()},h(){I(e,"class","panel-header"),ge(o,"font-size","13px"),ge(o,"margin-bottom","8px"),v.__value="",Xe(v,v.__value),i[0]===void 0&&sn(()=>i[10].call(g)),I(l,"class","form-group"),I(b,"class","btn-primary svelte-xy1nc2"),b.disabled=R=!i[0],I(f,"class","export-buttons svelte-xy1nc2"),ge(y,"font-size","11px"),ge(y,"color","var(--text-muted)"),ge(y,"margin-top","4px"),I(r,"class","export-section svelte-xy1nc2"),ge(O,"border-color","var(--border)"),ge(O,"margin","16px 0"),ge(H,"font-size","13px"),ge(H,"margin-bottom","8px"),ie.__value="",Xe(ie,ie.__value),i[1]===void 0&&sn(()=>i[11].call(ae)),I(V,"class","form-group"),I(F,"class","btn-secondary svelte-xy1nc2"),F.disabled=ve=!i[1],I(G,"class","btn-secondary svelte-xy1nc2"),G.disabled=pe=!i[1],I(ce,"class","export-buttons svelte-xy1nc2"),I(P,"class","export-section svelte-xy1nc2"),ge(W,"border-color","var(--border)"),ge(W,"margin","16px 0"),ge(Re,"font-size","13px"),ge(Re,"margin-bottom","8px"),I(fe,"class","btn-primary"),fe.disabled=E=!i[2],ge(fe,"width","100%"),ge(re,"font-size","11px"),ge(re,"color","var(--text-muted)"),ge(re,"margin-top","4px"),I(xe,"class","export-section svelte-xy1nc2"),ge(J,"border-color","var(--border)"),ge(J,"margin","16px 0"),ge(Ee,"font-size","13px"),ge(Ee,"margin-bottom","8px"),I(ye,"class","btn-primary"),ye.disabled=We=!i[0],ge(ye,"width","100%"),ge(Pe,"font-size","11px"),ge(Pe,"color","var(--text-muted)"),ge(Pe,"margin-top","4px"),I(me,"class","export-section svelte-xy1nc2"),I(s,"class","panel-body scrollable")},m(Ae,He){_e(Ae,e,He),_e(Ae,n,He),_e(Ae,s,He),m(s,r),m(r,o),m(r,c),m(r,l),m(l,u),m(l,d),m(l,g),m(g,v);for(let Ge=0;Ge<je.length;Ge+=1)je[Ge]&&je[Ge].m(g,null);yt(g,i[0],!0),m(r,p),m(r,f),m(f,b),m(b,x),m(r,S),m(r,y),m(s,D),m(s,O),m(s,M),m(s,P),m(P,H),m(P,L),m(P,V),m(V,q),m(V,se),m(V,ae),m(ae,ie);for(let Ge=0;Ge<Me.length;Ge+=1)Me[Ge]&&Me[Ge].m(ae,null);yt(ae,i[1],!0),m(P,ee),m(P,ce),m(ce,F),m(F,Q),m(ce,U),m(ce,G),m(G,oe),m(s,Ce),m(s,W),m(s,Le),m(s,xe),m(xe,Re),m(xe,ne),m(xe,fe),m(fe,N),m(xe,$),m(xe,re),m(s,le),m(s,J),m(s,de),m(s,me),m(me,Ee),m(me,be),m(me,ye),m(ye,Be),m(me,ze),m(me,Pe),k||(Fe=[Ve(g,"change",i[10]),Ve(b,"click",i[5]),Ve(ae,"change",i[11]),Ve(F,"click",i[6]),Ve(G,"click",i[7]),Ve(fe,"click",i[8]),Ve(ye,"click",i[9])],k=!0)},p(Ae,[He]){if(He&8){Ye=tt(Ae[3].filter(Bc));let Ge;for(Ge=0;Ge<Ye.length;Ge+=1){const et=Nc(Ae,Ye,Ge);je[Ge]?je[Ge].p(et,He):(je[Ge]=Oc(et),je[Ge].c(),je[Ge].m(g,null))}for(;Ge<je.length;Ge+=1)je[Ge].d(1);je.length=Ye.length}if(He&9&&yt(g,Ae[0]),He&9&&R!==(R=!Ae[0])&&(b.disabled=R),He&16){B=tt(Ae[4]);let Ge;for(Ge=0;Ge<B.length;Ge+=1){const et=Uc(Ae,B,Ge);Me[Ge]?Me[Ge].p(et,He):(Me[Ge]=Fc(et),Me[Ge].c(),Me[Ge].m(ae,null))}for(;Ge<Me.length;Ge+=1)Me[Ge].d(1);Me.length=B.length}He&18&&yt(ae,Ae[1]),He&18&&ve!==(ve=!Ae[1])&&(F.disabled=ve),He&18&&pe!==(pe=!Ae[1])&&(G.disabled=pe),He&4&&E!==(E=!Ae[2])&&(fe.disabled=E),He&9&&We!==(We=!Ae[0])&&(ye.disabled=We)},i:Et,o:Et,d(Ae){Ae&&(w(e),w(n),w(s)),Tt(je,Ae),Tt(Me,Ae),k=!1,wt(Fe)}}}const Bc=i=>i.status==="completed";function _v(i,e,t){let n,s,r;Ze(i,On,_=>t(2,n=_)),Ze(i,As,_=>t(3,s=_)),Ze(i,Ts,_=>t(4,r=_));let o="",a="";async function c(){if(!o){$e("请选择建模结果","warning");return}try{const p=await(await ht.exportGltf(o)).blob(),f=URL.createObjectURL(p),b=document.createElement("a");b.href=f,b.download=`model_${o}.glb`,b.click(),URL.revokeObjectURL(f),$e("glTF模型已导出","success")}catch(_){$e(`导出glTF失败: ${_.message}`,"error")}}async function l(){if(!a){$e("请选择剖面","warning");return}try{const p=await(await ht.exportProfilePng(a)).blob(),f=URL.createObjectURL(p),b=document.createElement("a");b.href=f,b.download=`profile_${a}.png`,b.click(),URL.revokeObjectURL(f),$e("剖面PNG已导出","success")}catch(_){$e(`导出PNG失败: ${_.message}`,"error")}}async function u(){if(!a){$e("请选择剖面","warning");return}try{const p=await(await ht.exportProfileSvg(a)).blob(),f=URL.createObjectURL(p),b=document.createElement("a");b.href=f,b.download=`profile_${a}.svg`,b.click(),URL.revokeObjectURL(f),$e("剖面SVG已导出","success")}catch(_){$e(`导出SVG失败: ${_.message}`,"error")}}async function h(){if(!n){$e("请先选择项目","warning");return}try{const p=await(await ht.exportStatsExcel(n.id)).blob(),f=URL.createObjectURL(p),b=document.createElement("a");b.href=f,b.download=`stats_${n.id}.xlsx`,b.click(),URL.revokeObjectURL(f),$e("统计表已导出","success")}catch(_){$e(`导出Excel失败: ${_.message}`,"error")}}async function d(){if(!o){$e("请选择建模结果","warning");return}try{const p=await(await ht.exportReportPdf(o)).blob(),f=URL.createObjectURL(p),b=document.createElement("a");b.href=f,b.download=`report_${o}.pdf`,b.click(),URL.revokeObjectURL(f),$e("报告已导出","success")}catch(_){$e(`导出PDF失败: ${_.message}`,"error")}}function g(){o=tn(this),t(0,o)}function v(){a=tn(this),t(1,a)}return[o,a,n,s,r,c,l,u,h,d,g,v]}class gv extends un{constructor(e){super(),hn(this,e,_v,mv,cn,{})}}function kc(i){let e,t,n="已加载",s,r,o="清除",a,c;return{c(){e=A("div"),t=A("span"),t.textContent=n,s=j(),r=A("button"),r.textContent=o,this.h()},l(l){e=T(l,"DIV",{style:!0});var u=z(e);t=T(u,"SPAN",{class:!0,"data-svelte-h":!0}),Ie(t)!=="svelte-1k217nw"&&(t.textContent=n),s=X(u),r=T(u,"BUTTON",{class:!0,"data-svelte-h":!0}),Ie(r)!=="svelte-xi3j00"&&(r.textContent=o),u.forEach(w),this.h()},h(){I(t,"class","badge badge-success"),I(r,"class","btn-danger btn-sm"),ge(e,"display","flex"),ge(e,"align-items","center"),ge(e,"gap","6px"),ge(e,"margin-top","4px")},m(l,u){_e(l,e,u),m(e,t),m(e,s),m(e,r),a||(c=Ve(r,"click",i[5]),a=!0)},p:Et,d(l){l&&w(e),a=!1,c()}}}function zc(i){let e,t,n="已加载",s,r,o="清除",a,c;return{c(){e=A("div"),t=A("span"),t.textContent=n,s=j(),r=A("button"),r.textContent=o,this.h()},l(l){e=T(l,"DIV",{style:!0});var u=z(e);t=T(u,"SPAN",{class:!0,"data-svelte-h":!0}),Ie(t)!=="svelte-1k217nw"&&(t.textContent=n),s=X(u),r=T(u,"BUTTON",{class:!0,"data-svelte-h":!0}),Ie(r)!=="svelte-1i2ssbg"&&(r.textContent=o),u.forEach(w),this.h()},h(){I(t,"class","badge badge-success"),I(r,"class","btn-danger btn-sm"),ge(e,"display","flex"),ge(e,"align-items","center"),ge(e,"gap","6px"),ge(e,"margin-top","4px")},m(l,u){_e(l,e,u),m(e,t),m(e,s),m(e,r),a||(c=Ve(r,"click",i[6]),a=!0)},p:Et,d(l){l&&w(e),a=!1,c()}}}function vv(i){let e,t,n="地表贴图",s,r,o=i[2].visible?"隐藏":"显示",a,c,l,u,h,d="正射影像 (贴图纹理)",g,v,_,p,f,b,x,R="DEM 灰度图 (地形起伏)",S,y,C,D,O,M,P,H=(i[2].opacity*100).toFixed(0)+"",Y,L,V,q,ue,se,ae,ie=i[2].orthoImage&&kc(i),he=i[2].demImage&&zc(i);return{c(){e=A("div"),t=A("h3"),t.textContent=n,s=j(),r=A("button"),a=Te(o),c=j(),l=A("div"),u=A("div"),h=A("label"),h.textContent=d,g=j(),v=A("div"),_=A("input"),p=j(),ie&&ie.c(),f=j(),b=A("div"),x=A("label"),x.textContent=R,S=j(),y=A("input"),C=j(),he&&he.c(),D=j(),O=A("div"),M=A("label"),P=Te("贴图透明度: "),Y=Te(H),L=Te("%"),V=j(),q=A("input"),this.h()},l(ee){e=T(ee,"DIV",{class:!0});var ce=z(e);t=T(ce,"H3",{"data-svelte-h":!0}),Ie(t)!=="svelte-gzaxfa"&&(t.textContent=n),s=X(ce),r=T(ce,"BUTTON",{class:!0});var F=z(r);a=Se(F,o),F.forEach(w),ce.forEach(w),c=X(ee),l=T(ee,"DIV",{class:!0,style:!0});var Q=z(l);u=T(Q,"DIV",{class:!0});var ve=z(u);h=T(ve,"LABEL",{"data-svelte-h":!0}),Ie(h)!=="svelte-txh69p"&&(h.textContent=d),g=X(ve),v=T(ve,"DIV",{style:!0});var U=z(v);_=T(U,"INPUT",{type:!0,id:!0,accept:!0}),U.forEach(w),p=X(ve),ie&&ie.l(ve),ve.forEach(w),f=X(Q),b=T(Q,"DIV",{class:!0});var G=z(b);x=T(G,"LABEL",{"data-svelte-h":!0}),Ie(x)!=="svelte-1aq3yz3"&&(x.textContent=R),S=X(G),y=T(G,"INPUT",{type:!0,id:!0,accept:!0}),C=X(G),he&&he.l(G),G.forEach(w),D=X(Q),O=T(Q,"DIV",{class:!0});var oe=z(O);M=T(oe,"LABEL",{});var pe=z(M);P=Se(pe,"贴图透明度: "),Y=Se(pe,H),L=Se(pe,"%"),pe.forEach(w),V=X(oe),q=T(oe,"INPUT",{type:!0,min:!0,max:!0}),oe.forEach(w),Q.forEach(w),this.h()},h(){I(r,"class","btn-secondary btn-sm"),I(e,"class","panel-header"),I(_,"type","file"),I(_,"id","orthoInput"),I(_,"accept","image/*"),ge(v,"display","flex"),ge(v,"gap","4px"),ge(v,"align-items","center"),I(u,"class","form-group"),I(y,"type","file"),I(y,"id","demInput"),I(y,"accept","image/*"),I(b,"class","form-group"),I(q,"type","range"),I(q,"min","0"),I(q,"max","100"),q.value=ue=i[2].opacity*100,I(O,"class","form-group"),I(l,"class","panel-body"),ge(l,"padding","10px 12px")},m(ee,ce){_e(ee,e,ce),m(e,t),m(e,s),m(e,r),m(r,a),_e(ee,c,ce),_e(ee,l,ce),m(l,u),m(u,h),m(u,g),m(u,v),m(v,_),i[8](_),m(u,p),ie&&ie.m(u,null),m(l,f),m(l,b),m(b,x),m(b,S),m(b,y),i[9](y),m(b,C),he&&he.m(b,null),m(l,D),m(l,O),m(O,M),m(M,P),m(M,Y),m(M,L),m(O,V),m(O,q),se||(ae=[Ve(r,"click",i[7]),Ve(_,"change",i[3]),Ve(y,"change",i[4]),Ve(q,"input",i[10])],se=!0)},p(ee,[ce]){ce&4&&o!==(o=ee[2].visible?"隐藏":"显示")&&Ke(a,o),ee[2].orthoImage?ie?ie.p(ee,ce):(ie=kc(ee),ie.c(),ie.m(u,null)):ie&&(ie.d(1),ie=null),ee[2].demImage?he?he.p(ee,ce):(he=zc(ee),he.c(),he.m(b,null)):he&&(he.d(1),he=null),ce&4&&H!==(H=(ee[2].opacity*100).toFixed(0)+"")&&Ke(Y,H),ce&4&&ue!==(ue=ee[2].opacity*100)&&(q.value=ue)},i:Et,o:Et,d(ee){ee&&(w(e),w(c),w(l)),i[8](null),ie&&ie.d(),i[9](null),he&&he.d(),se=!1,wt(ae)}}}function Vc(i){return new Promise((e,t)=>{const n=new FileReader;n.onload=s=>{const r=new Image;r.onload=()=>e(r),r.onerror=t,r.src=s.target.result},n.onerror=t,n.readAsDataURL(i)})}function xv(i,e,t){let n;Ze(i,Yn,v=>t(2,n=v));let s,r;async function o(v){var p;const _=(p=v.target.files)==null?void 0:p[0];if(_){if(!_.type.startsWith("image/")){$e("请上传图片文件","warning");return}try{const f=await Vc(_);nt(Yn,n={...n,orthoImage:f},n),$e(`正射影像已加载: ${_.name}`,"success")}catch{$e("加载正射影像失败","error")}v.target.value=""}}async function a(v){var p;const _=(p=v.target.files)==null?void 0:p[0];if(_){if(!_.type.startsWith("image/")){$e("请上传灰度图 (PNG/JPG)","warning");return}try{const f=await Vc(_);nt(Yn,n={...n,demImage:f},n),$e(`DEM 灰度图已加载: ${_.name}`,"success")}catch{$e("加载DEM失败","error")}v.target.value=""}}function c(){nt(Yn,n={...n,orthoImage:null},n)}function l(){nt(Yn,n={...n,demImage:null},n)}const u=()=>nt(Yn,n={...n,visible:!n.visible},n);function h(v){hi[v?"unshift":"push"](()=>{s=v,t(0,s)})}function d(v){hi[v?"unshift":"push"](()=>{r=v,t(1,r)})}return[s,r,n,o,a,c,l,u,h,d,v=>nt(Yn,n={...n,opacity:v.target.value/100},n)]}class bv extends un{constructor(e){super(),hn(this,e,xv,vv,cn,{})}}function Ev(i){let e,t=i[0].message+"",n,s,r,o="✕",a,c,l;return{c(){e=A("div"),n=Te(t),s=j(),r=A("button"),r.textContent=o,this.h()},l(u){e=T(u,"DIV",{class:!0});var h=z(e);n=Se(h,t),s=X(h),r=T(h,"BUTTON",{class:!0,"data-svelte-h":!0}),Ie(r)!=="svelte-4r1jhq"&&(r.textContent=o),h.forEach(w),this.h()},h(){I(r,"class","close-btn svelte-ii73z2"),I(e,"class",a="toast toast-"+i[0].type+" svelte-ii73z2")},m(u,h){_e(u,e,h),m(e,n),m(e,s),m(e,r),c||(l=Ve(r,"click",i[2]),c=!0)},p(u,[h]){h&1&&t!==(t=u[0].message+"")&&Ke(n,t),h&1&&a!==(a="toast toast-"+u[0].type+" svelte-ii73z2")&&I(e,"class",a)},i:Et,o:Et,d(u){u&&w(e),c=!1,l()}}}function Mv(i,e,t){let n;Ze(i,Cs,o=>t(1,n=o));let{toast:s}=e;const r=()=>nt(Cs,n=n.filter(o=>o.id!==s.id),n);return i.$$set=o=>{"toast"in o&&t(0,s=o.toast)},[s,n,r]}class yv extends un{constructor(e){super(),hn(this,e,Mv,Ev,cn,{toast:0})}}function Hc(i,e,t){const n=i.slice();return n[27]=e[t],n}function Gc(i,e,t){const n=i.slice();return n[30]=e[t],n}function mo(i){const e=i.slice(),t=e[9][e[0]]||[];return e[39]=t,e}function Wc(i,e,t){const n=i.slice();return n[34]=e[t],n}function Xc(i,e,t){const n=i.slice();n[33]=e[t];const s=n[3].find(function(...o){return i[17](n[33],...o)});return n[34]=s,n}function jc(i,e,t){const n=i.slice();return n[34]=e[t],n}function qc(i,e,t){const n=i.slice();return n[42]=e[t],n}function Yc(i){let e,t=i[42].label+"",n,s,r,o;function a(){return i[14](i[42])}return{c(){e=A("button"),n=Te(t),s=j(),this.h()},l(c){e=T(c,"BUTTON",{class:!0});var l=z(e);n=Se(l,t),s=X(l),l.forEach(w),this.h()},h(){I(e,"class","sub-tab-btn svelte-7a9su0"),en(e,"active",i[2]===i[42].id)},m(c,l){_e(c,e,l),m(e,n),m(e,s),r||(o=Ve(e,"click",a),r=!0)},p(c,l){i=c,l[0]&1028&&en(e,"active",i[2]===i[42].id)},d(c){c&&w(e),r=!1,o()}}}function Sv(i){let e,t,n="选择钻孔",s,r,o,a="请选择钻孔",c,l,u,h,d,g,v,_=tt(i[3]),p=[];for(let b=0;b<_.length;b+=1)p[b]=Kc(Wc(i,_,b));let f=i[0]&&(i[9][i[0]]||[]).length>0&&Zc(mo(i));return{c(){e=A("div"),t=A("label"),t.textContent=n,s=j(),r=A("select"),o=A("option"),o.textContent=a;for(let b=0;b<p.length;b+=1)p[b].c();c=j(),l=A("div"),u=A("canvas"),h=j(),f&&f.c(),d=Pt(),this.h()},l(b){e=T(b,"DIV",{class:!0,style:!0});var x=z(e);t=T(x,"LABEL",{style:!0,"data-svelte-h":!0}),Ie(t)!=="svelte-kq5742"&&(t.textContent=n),s=X(x),r=T(x,"SELECT",{style:!0});var R=z(r);o=T(R,"OPTION",{"data-svelte-h":!0}),Ie(o)!=="svelte-1do3tcg"&&(o.textContent=a);for(let y=0;y<p.length;y+=1)p[y].l(R);R.forEach(w),x.forEach(w),c=X(b),l=T(b,"DIV",{class:!0});var S=z(l);u=T(S,"CANVAS",{class:!0}),z(u).forEach(w),S.forEach(w),h=X(b),f&&f.l(b),d=Pt(),this.h()},h(){ge(t,"font-size","12px"),o.__value="",Xe(o,o.__value),ge(r,"width","100%"),ge(r,"font-size","12px"),i[0]===void 0&&sn(()=>i[18].call(r)),I(e,"class","form-group"),ge(e,"margin-bottom","10px"),I(u,"class","history-canvas svelte-7a9su0"),I(l,"class","history-chart-container svelte-7a9su0")},m(b,x){_e(b,e,x),m(e,t),m(e,s),m(e,r),m(r,o);for(let R=0;R<p.length;R+=1)p[R]&&p[R].m(r,null);yt(r,i[0],!0),_e(b,c,x),_e(b,l,x),m(l,u),i[19](u),_e(b,h,x),f&&f.m(b,x),_e(b,d,x),g||(v=Ve(r,"change",i[18]),g=!0)},p(b,x){if(x[0]&520){_=tt(b[3]);let R;for(R=0;R<_.length;R+=1){const S=Wc(b,_,R);p[R]?p[R].p(S,x):(p[R]=Kc(S),p[R].c(),p[R].m(r,null))}for(;R<p.length;R+=1)p[R].d(1);p.length=_.length}x[0]&9&&yt(r,b[0]),b[0]&&(b[9][b[0]]||[]).length>0?f?f.p(mo(b),x):(f=Zc(mo(b)),f.c(),f.m(d.parentNode,d)):f&&(f.d(1),f=null)},d(b){b&&(w(e),w(c),w(l),w(h),w(d)),Tt(p,b),i[19](null),f&&f.d(b),g=!1,v()}}}function Tv(i){let e,t,n="筛选钻孔",s,r,o,a="全部钻孔",c,l,u,h,d=tt(i[3]),g=[];for(let f=0;f<d.length;f+=1)g[f]=Jc(jc(i,d,f));function v(f,b){return f[1].length===0?wv:Av}let _=v(i),p=_(i);return{c(){e=A("div"),t=A("label"),t.textContent=n,s=j(),r=A("select"),o=A("option"),o.textContent=a;for(let f=0;f<g.length;f+=1)g[f].c();c=j(),p.c(),l=Pt(),this.h()},l(f){e=T(f,"DIV",{class:!0,style:!0});var b=z(e);t=T(b,"LABEL",{style:!0,"data-svelte-h":!0}),Ie(t)!=="svelte-6fopgs"&&(t.textContent=n),s=X(b),r=T(b,"SELECT",{style:!0});var x=z(r);o=T(x,"OPTION",{"data-svelte-h":!0}),Ie(o)!=="svelte-r6bhbn"&&(o.textContent=a);for(let R=0;R<g.length;R+=1)g[R].l(x);x.forEach(w),b.forEach(w),c=X(f),p.l(f),l=Pt(),this.h()},h(){ge(t,"font-size","12px"),o.__value="",Xe(o,o.__value),ge(r,"width","100%"),ge(r,"font-size","12px"),i[0]===void 0&&sn(()=>i[15].call(r)),I(e,"class","form-group"),ge(e,"margin-bottom","10px")},m(f,b){_e(f,e,b),m(e,t),m(e,s),m(e,r),m(r,o);for(let x=0;x<g.length;x+=1)g[x]&&g[x].m(r,null);yt(r,i[0],!0),_e(f,c,b),p.m(f,b),_e(f,l,b),u||(h=Ve(r,"change",i[15]),u=!0)},p(f,b){if(b[0]&8){d=tt(f[3]);let x;for(x=0;x<d.length;x+=1){const R=jc(f,d,x);g[x]?g[x].p(R,b):(g[x]=Jc(R),g[x].c(),g[x].m(r,null))}for(;x<g.length;x+=1)g[x].d(1);g.length=d.length}b[0]&9&&yt(r,f[0]),_===(_=v(f))&&p?p.p(f,b):(p.d(1),p=_(f),p&&(p.c(),p.m(l.parentNode,l)))},d(f){f&&(w(e),w(c),w(l)),Tt(g,f),p.d(f),u=!1,h()}}}function Kc(i){let e,t=i[34].hole_id+"",n,s,r=(i[9][i[34].id]||[]).length+"",o,a,c;return{c(){e=A("option"),n=Te(t),s=Te(" ("),o=Te(r),a=Te("条)"),this.h()},l(l){e=T(l,"OPTION",{});var u=z(e);n=Se(u,t),s=Se(u," ("),o=Se(u,r),a=Se(u,"条)"),u.forEach(w),this.h()},h(){e.__value=c=i[34].id,Xe(e,e.__value)},m(l,u){_e(l,e,u),m(e,n),m(e,s),m(e,o),m(e,a)},p(l,u){u[0]&8&&t!==(t=l[34].hole_id+"")&&Ke(n,t),u[0]&520&&r!==(r=(l[9][l[34].id]||[]).length+"")&&Ke(o,r),u[0]&8&&c!==(c=l[34].id)&&(e.__value=c,Xe(e,e.__value))},d(l){l&&w(e)}}}function Zc(i){let e,t,n,s,r=i[39].length+"",o,a,c,l,u=Math.max(...i[39].map(lu)).toFixed(2)+"",h,d,g,v,_,p=Math.min(...i[39].map(cu)).toFixed(2)+"",f,b;return{c(){e=A("div"),t=A("div"),n=A("span"),s=Te("记录数: "),o=Te(r),a=j(),c=A("span"),l=Te("最高: "),h=Te(u),d=Te("m"),g=j(),v=A("span"),_=Te("最低: "),f=Te(p),b=Te("m"),this.h()},l(x){e=T(x,"DIV",{class:!0});var R=z(e);t=T(R,"DIV",{class:!0});var S=z(t);n=T(S,"SPAN",{});var y=z(n);s=Se(y,"记录数: "),o=Se(y,r),y.forEach(w),a=X(S),c=T(S,"SPAN",{});var C=z(c);l=Se(C,"最高: "),h=Se(C,u),d=Se(C,"m"),C.forEach(w),g=X(S),v=T(S,"SPAN",{});var D=z(v);_=Se(D,"最低: "),f=Se(D,p),b=Se(D,"m"),D.forEach(w),S.forEach(w),R.forEach(w),this.h()},h(){I(t,"class","stat-row svelte-7a9su0"),I(e,"class","history-stats svelte-7a9su0")},m(x,R){_e(x,e,R),m(e,t),m(t,n),m(n,s),m(n,o),m(t,a),m(t,c),m(c,l),m(c,h),m(c,d),m(t,g),m(t,v),m(v,_),m(v,f),m(v,b)},p(x,R){R[0]&513&&r!==(r=x[39].length+"")&&Ke(o,r),R[0]&513&&u!==(u=Math.max(...x[39].map(lu)).toFixed(2)+"")&&Ke(h,u),R[0]&513&&p!==(p=Math.min(...x[39].map(cu)).toFixed(2)+"")&&Ke(f,p)},d(x){x&&w(e)}}}function Jc(i){let e,t=i[34].hole_id+"",n,s;return{c(){e=A("option"),n=Te(t),this.h()},l(r){e=T(r,"OPTION",{});var o=z(e);n=Se(o,t),o.forEach(w),this.h()},h(){e.__value=s=i[34].id,Xe(e,e.__value)},m(r,o){_e(r,e,o),m(e,n)},p(r,o){o[0]&8&&t!==(t=r[34].hole_id+"")&&Ke(n,t),o[0]&8&&s!==(s=r[34].id)&&(e.__value=s,Xe(e,e.__value))},d(r){r&&w(e)}}}function Av(i){let e,t=tt(i[1]),n=[];for(let s=0;s<t.length;s+=1)n[s]=tu(Xc(i,t,s));return{c(){e=A("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=T(s,"DIV",{class:!0});var r=z(e);for(let o=0;o<n.length;o+=1)n[o].l(r);r.forEach(w),this.h()},h(){I(e,"class","wl-list svelte-7a9su0")},m(s,r){_e(s,e,r);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(e,null)},p(s,r){if(r[0]&4107){t=tt(s[1]);let o;for(o=0;o<t.length;o+=1){const a=Xc(s,t,o);n[o]?n[o].p(a,r):(n[o]=tu(a),n[o].c(),n[o].m(e,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}},d(s){s&&w(e),Tt(n,s)}}}function wv(i){let e,t='<p>暂无水位数据</p> <p style="font-size:12px;color:var(--text-muted);margin-top:4px;">点击&quot;导入CSV&quot;添加水位时序数据</p>';return{c(){e=A("div"),e.innerHTML=t,this.h()},l(n){e=T(n,"DIV",{class:!0,"data-svelte-h":!0}),Ie(e)!=="svelte-1mxdbwe"&&(e.innerHTML=t),this.h()},h(){I(e,"class","empty-state svelte-7a9su0")},m(n,s){_e(n,e,s)},p:Et,d(n){n&&w(e)}}}function $c(i){var Y;let e,t,n,s=(((Y=i[34])==null?void 0:Y.hole_id)||"未知")+"",r,o,a,c="删除",l,u,h,d,g=i[33].obs_date+"",v,_,p,f,b=i[33].water_level.toFixed(2)+"",x,R,S,y,C,D,O;function M(){return i[16](i[33])}let P=i[33].water_temp!=null&&Qc(i),H=i[33].conductivity!=null&&eu(i);return{c(){e=A("div"),t=A("div"),n=A("strong"),r=Te(s),o=j(),a=A("button"),a.textContent=c,l=j(),u=A("div"),h=A("span"),d=Te("日期: "),v=Te(g),_=j(),p=A("span"),f=Te("水位: "),x=Te(b),R=Te("m"),S=j(),P&&P.c(),y=j(),H&&H.c(),C=j(),this.h()},l(L){e=T(L,"DIV",{class:!0});var V=z(e);t=T(V,"DIV",{class:!0});var q=z(t);n=T(q,"STRONG",{});var ue=z(n);r=Se(ue,s),ue.forEach(w),o=X(q),a=T(q,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),Ie(a)!=="svelte-k58z44"&&(a.textContent=c),q.forEach(w),l=X(V),u=T(V,"DIV",{class:!0});var se=z(u);h=T(se,"SPAN",{});var ae=z(h);d=Se(ae,"日期: "),v=Se(ae,g),ae.forEach(w),_=X(se),p=T(se,"SPAN",{});var ie=z(p);f=Se(ie,"水位: "),x=Se(ie,b),R=Se(ie,"m"),ie.forEach(w),S=X(se),P&&P.l(se),y=X(se),H&&H.l(se),se.forEach(w),C=X(V),V.forEach(w),this.h()},h(){I(a,"class","btn-danger btn-sm"),ge(a,"font-size","10px"),ge(a,"padding","2px 6px"),I(t,"class","wl-card-header svelte-7a9su0"),I(u,"class","wl-card-info svelte-7a9su0"),I(e,"class","wl-card svelte-7a9su0")},m(L,V){_e(L,e,V),m(e,t),m(t,n),m(n,r),m(t,o),m(t,a),m(e,l),m(e,u),m(u,h),m(h,d),m(h,v),m(u,_),m(u,p),m(p,f),m(p,x),m(p,R),m(u,S),P&&P.m(u,null),m(u,y),H&&H.m(u,null),m(e,C),D||(O=Ve(a,"click",M),D=!0)},p(L,V){var q;i=L,V[0]&10&&s!==(s=(((q=i[34])==null?void 0:q.hole_id)||"未知")+"")&&Ke(r,s),V[0]&2&&g!==(g=i[33].obs_date+"")&&Ke(v,g),V[0]&2&&b!==(b=i[33].water_level.toFixed(2)+"")&&Ke(x,b),i[33].water_temp!=null?P?P.p(i,V):(P=Qc(i),P.c(),P.m(u,y)):P&&(P.d(1),P=null),i[33].conductivity!=null?H?H.p(i,V):(H=eu(i),H.c(),H.m(u,null)):H&&(H.d(1),H=null)},d(L){L&&w(e),P&&P.d(),H&&H.d(),D=!1,O()}}}function Qc(i){let e,t,n=i[33].water_temp.toFixed(1)+"",s,r;return{c(){e=A("span"),t=Te("水温: "),s=Te(n),r=Te("℃")},l(o){e=T(o,"SPAN",{});var a=z(e);t=Se(a,"水温: "),s=Se(a,n),r=Se(a,"℃"),a.forEach(w)},m(o,a){_e(o,e,a),m(e,t),m(e,s),m(e,r)},p(o,a){a[0]&2&&n!==(n=o[33].water_temp.toFixed(1)+"")&&Ke(s,n)},d(o){o&&w(e)}}}function eu(i){let e,t,n=i[33].conductivity.toFixed(1)+"",s,r;return{c(){e=A("span"),t=Te("电导率: "),s=Te(n),r=Te("μS/cm")},l(o){e=T(o,"SPAN",{});var a=z(e);t=Se(a,"电导率: "),s=Se(a,n),r=Se(a,"μS/cm"),a.forEach(w)},m(o,a){_e(o,e,a),m(e,t),m(e,s),m(e,r)},p(o,a){a[0]&2&&n!==(n=o[33].conductivity.toFixed(1)+"")&&Ke(s,n)},d(o){o&&w(e)}}}function tu(i){let e,t=(!i[0]||i[33].borehole_id===i[0])&&$c(i);return{c(){t&&t.c(),e=Pt()},l(n){t&&t.l(n),e=Pt()},m(n,s){t&&t.m(n,s),_e(n,e,s)},p(n,s){!n[0]||n[33].borehole_id===n[0]?t?t.p(n,s):(t=$c(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(n){n&&w(e),t&&t.d(n)}}}function nu(i){let e,t,n,s="导入水位CSV数据",r,o,a="CSV字段: 孔号/hole_id, 日期/date(yyyy-MM-dd), 水位标高/water_level, 水温/water_temp, 电导率/conductivity",c,l,u,h,d,g,v,_="关闭",p,f,b=i[6]?"导入中...":"开始导入",x,R,S,y,C=i[7]&&iu(i);return{c(){e=A("div"),t=A("div"),n=A("h3"),n.textContent=s,r=j(),o=A("p"),o.textContent=a,c=j(),l=A("div"),u=A("input"),h=j(),C&&C.c(),d=j(),g=A("div"),v=A("button"),v.textContent=_,p=j(),f=A("button"),x=Te(b),this.h()},l(D){e=T(D,"DIV",{class:!0});var O=z(e);t=T(O,"DIV",{class:!0});var M=z(t);n=T(M,"H3",{"data-svelte-h":!0}),Ie(n)!=="svelte-q45yow"&&(n.textContent=s),r=X(M),o=T(M,"P",{style:!0,"data-svelte-h":!0}),Ie(o)!=="svelte-1x4le7w"&&(o.textContent=a),c=X(M),l=T(M,"DIV",{class:!0});var P=z(l);u=T(P,"INPUT",{type:!0,accept:!0}),P.forEach(w),h=X(M),C&&C.l(M),d=X(M),g=T(M,"DIV",{class:!0});var H=z(g);v=T(H,"BUTTON",{class:!0,"data-svelte-h":!0}),Ie(v)!=="svelte-1wvy2wc"&&(v.textContent=_),p=X(H),f=T(H,"BUTTON",{class:!0});var Y=z(f);x=Se(Y,b),Y.forEach(w),H.forEach(w),M.forEach(w),O.forEach(w),this.h()},h(){ge(o,"font-size","12px"),ge(o,"color","var(--text-secondary)"),ge(o,"margin-bottom","12px"),I(u,"type","file"),I(u,"accept",".csv"),I(l,"class","form-group"),I(v,"class","btn-secondary"),I(f,"class","btn-primary"),f.disabled=R=!i[5]||i[6],I(g,"class","modal-actions"),I(t,"class","modal"),I(e,"class","modal-overlay")},m(D,O){_e(D,e,O),m(e,t),m(t,n),m(t,r),m(t,o),m(t,c),m(t,l),m(l,u),m(t,h),C&&C.m(t,null),m(t,d),m(t,g),m(g,v),m(g,p),m(g,f),m(f,x),S||(y=[Ve(u,"change",i[20]),Ve(v,"click",i[21]),Ve(f,"click",i[11]),Ve(e,"click",Sr(i[22]))],S=!0)},p(D,O){D[7]?C?C.p(D,O):(C=iu(D),C.c(),C.m(t,d)):C&&(C.d(1),C=null),O[0]&64&&b!==(b=D[6]?"导入中...":"开始导入")&&Ke(x,b),O[0]&96&&R!==(R=!D[5]||D[6])&&(f.disabled=R)},d(D){D&&w(e),C&&C.d(),S=!1,wt(y)}}}function iu(i){let e,t,n,s=i[7].imported+"",r,o,a,c,l=i[7].errors.length>0&&su(i),u=i[7].warnings.length>0&&ou(i);return{c(){e=A("div"),t=A("p"),n=Te("成功导入: "),r=Te(s),o=Te(" 条记录"),a=j(),l&&l.c(),c=j(),u&&u.c(),this.h()},l(h){e=T(h,"DIV",{class:!0});var d=z(e);t=T(d,"P",{class:!0});var g=z(t);n=Se(g,"成功导入: "),r=Se(g,s),o=Se(g," 条记录"),g.forEach(w),a=X(d),l&&l.l(d),c=X(d),u&&u.l(d),d.forEach(w),this.h()},h(){I(t,"class","badge badge-success svelte-7a9su0"),I(e,"class","import-result svelte-7a9su0")},m(h,d){_e(h,e,d),m(e,t),m(t,n),m(t,r),m(t,o),m(e,a),l&&l.m(e,null),m(e,c),u&&u.m(e,null)},p(h,d){d[0]&128&&s!==(s=h[7].imported+"")&&Ke(r,s),h[7].errors.length>0?l?l.p(h,d):(l=su(h),l.c(),l.m(e,c)):l&&(l.d(1),l=null),h[7].warnings.length>0?u?u.p(h,d):(u=ou(h),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},d(h){h&&w(e),l&&l.d(),u&&u.d()}}}function su(i){let e,t=tt(i[7].errors),n=[];for(let s=0;s<t.length;s+=1)n[s]=ru(Gc(i,t,s));return{c(){e=A("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=T(s,"DIV",{class:!0,style:!0});var r=z(e);for(let o=0;o<n.length;o+=1)n[o].l(r);r.forEach(w),this.h()},h(){I(e,"class","errors"),ge(e,"max-height","150px"),ge(e,"overflow-y","auto")},m(s,r){_e(s,e,r);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(e,null)},p(s,r){if(r[0]&128){t=tt(s[7].errors);let o;for(o=0;o<t.length;o+=1){const a=Gc(s,t,o);n[o]?n[o].p(a,r):(n[o]=ru(a),n[o].c(),n[o].m(e,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}},d(s){s&&w(e),Tt(n,s)}}}function ru(i){let e,t=i[30]+"",n;return{c(){e=A("p"),n=Te(t),this.h()},l(s){e=T(s,"P",{class:!0,style:!0});var r=z(e);n=Se(r,t),r.forEach(w),this.h()},h(){I(e,"class","badge badge-danger svelte-7a9su0"),ge(e,"font-size","11px")},m(s,r){_e(s,e,r),m(e,n)},p(s,r){r[0]&128&&t!==(t=s[30]+"")&&Ke(n,t)},d(s){s&&w(e)}}}function ou(i){let e,t=tt(i[7].warnings),n=[];for(let s=0;s<t.length;s+=1)n[s]=au(Hc(i,t,s));return{c(){e=A("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=T(s,"DIV",{class:!0});var r=z(e);for(let o=0;o<n.length;o+=1)n[o].l(r);r.forEach(w),this.h()},h(){I(e,"class","warnings")},m(s,r){_e(s,e,r);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(e,null)},p(s,r){if(r[0]&128){t=tt(s[7].warnings);let o;for(o=0;o<t.length;o+=1){const a=Hc(s,t,o);n[o]?n[o].p(a,r):(n[o]=au(a),n[o].c(),n[o].m(e,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}},d(s){s&&w(e),Tt(n,s)}}}function au(i){let e,t=i[27]+"",n;return{c(){e=A("p"),n=Te(t),this.h()},l(s){e=T(s,"P",{class:!0});var r=z(e);n=Se(r,t),r.forEach(w),this.h()},h(){I(e,"class","badge badge-warning svelte-7a9su0")},m(s,r){_e(s,e,r),m(e,n)},p(s,r){r[0]&128&&t!==(t=s[27]+"")&&Ke(n,t)},d(s){s&&w(e)}}}function Cv(i){let e,t,n="地下水位数据",s,r,o,a="导入CSV",c,l,u,h,d,g,v,_,p=tt(i[10]),f=[];for(let y=0;y<p.length;y+=1)f[y]=Yc(qc(i,p,y));function b(y,C){if(y[2]==="data")return Tv;if(y[2]==="history")return Sv}let x=b(i),R=x&&x(i),S=i[4]&&nu(i);return{c(){e=A("div"),t=A("h3"),t.textContent=n,s=j(),r=A("div"),o=A("button"),o.textContent=a,c=j(),l=A("div");for(let y=0;y<f.length;y+=1)f[y].c();u=j(),h=A("div"),R&&R.c(),d=j(),S&&S.c(),g=Pt(),this.h()},l(y){e=T(y,"DIV",{class:!0});var C=z(e);t=T(C,"H3",{"data-svelte-h":!0}),Ie(t)!=="svelte-rckkdc"&&(t.textContent=n),s=X(C),r=T(C,"DIV",{style:!0});var D=z(r);o=T(D,"BUTTON",{class:!0,"data-svelte-h":!0}),Ie(o)!=="svelte-vemyzj"&&(o.textContent=a),D.forEach(w),C.forEach(w),c=X(y),l=T(y,"DIV",{class:!0});var O=z(l);for(let P=0;P<f.length;P+=1)f[P].l(O);O.forEach(w),u=X(y),h=T(y,"DIV",{class:!0});var M=z(h);R&&R.l(M),M.forEach(w),d=X(y),S&&S.l(y),g=Pt(),this.h()},h(){I(o,"class","btn-primary btn-sm"),ge(r,"display","flex"),ge(r,"gap","6px"),I(e,"class","panel-header"),I(l,"class","sub-tabs svelte-7a9su0"),I(h,"class","panel-body scrollable")},m(y,C){_e(y,e,C),m(e,t),m(e,s),m(e,r),m(r,o),_e(y,c,C),_e(y,l,C);for(let D=0;D<f.length;D+=1)f[D]&&f[D].m(l,null);_e(y,u,C),_e(y,h,C),R&&R.m(h,null),_e(y,d,C),S&&S.m(y,C),_e(y,g,C),v||(_=Ve(o,"click",i[13]),v=!0)},p(y,C){if(C[0]&1028){p=tt(y[10]);let D;for(D=0;D<p.length;D+=1){const O=qc(y,p,D);f[D]?f[D].p(O,C):(f[D]=Yc(O),f[D].c(),f[D].m(l,null))}for(;D<f.length;D+=1)f[D].d(1);f.length=p.length}x===(x=b(y))&&R?R.p(y,C):(R&&R.d(1),R=x&&x(y),R&&(R.c(),R.m(h,null))),y[4]?S?S.p(y,C):(S=nu(y),S.c(),S.m(g.parentNode,g)):S&&(S.d(1),S=null)},i:Et,o:Et,d(y){y&&(w(e),w(c),w(l),w(u),w(h),w(d),w(g)),Tt(f,y),R&&R.d(),S&&S.d(y),v=!1,_()}}}const lu=i=>i.water_level,cu=i=>i.water_level;function Rv(i,e,t){let n,s,r,o;Ze(i,Rs,Y=>t(1,n=Y)),Ze(i,Jo,Y=>t(2,s=Y)),Ze(i,kn,Y=>t(3,r=Y)),Ze(i,On,Y=>t(24,o=Y));let a=!1,c=null,l=!1,u=null,h="",d;const g=[{id:"data",label:"水位数据"},{id:"history",label:"水位历史"}];async function v(){if(o)try{const Y=await ht.getWaterLevels(o.id);nt(Rs,n=Y,n)}catch(Y){$e(`加载水位数据失败: ${Y.message}`,"error")}}async function _(){if(!(!c||!o)){t(6,l=!0);try{const Y=await ht.importWaterLevelCsv(o.id,c);t(7,u=Y),$e(`成功导入 ${Y.imported} 条水位记录`,"success"),Y.errors.length>0&&$e(`有 ${Y.errors.length} 个错误`,"warning"),await v()}catch(Y){$e(`导入失败: ${Y.message}`,"error")}finally{t(6,l=!1)}}}async function p(Y){if(o)try{await ht.deleteWaterLevel(o.id,Y),$e("水位记录已删除","info"),await v()}catch(L){$e(`删除失败: ${L.message}`,"error")}}function f(){if(!d)return;const Y=d,L=Y.getContext("2d"),V=window.devicePixelRatio||1,q=Y.getBoundingClientRect();Y.width=q.width*V,Y.height=q.height*V,L.scale(V,V);const ue=q.width,se=q.height;if(L.fillStyle="#1a1d23",L.fillRect(0,0,ue,se),!h){L.fillStyle="#888",L.font="13px sans-serif",L.textAlign="center",L.fillText("请选择钻孔查看水位历史",ue/2,se/2);return}const ae=n.filter(Le=>Le.borehole_id===h).sort((Le,xe)=>new Date(Le.obs_date)-new Date(xe.obs_date));if(ae.length<2){L.fillStyle="#888",L.font="13px sans-serif",L.textAlign="center",L.fillText(ae.length===0?"该钻孔暂无水位数据":"至少需要2条记录才能绘制趋势图",ue/2,se/2);return}const ie={top:30,right:20,bottom:50,left:60},he=ue-ie.left-ie.right,ee=se-ie.top-ie.bottom,ce=ae.map(Le=>new Date(Le.obs_date).getTime()),F=ae.map(Le=>Le.water_level),Q=Math.min(...ce),ve=Math.max(...ce),U=Math.min(...F),G=Math.max(...F),oe=(G-U)*.1||1,pe=Le=>ie.left+(Le-Q)/(ve-Q||1)*he,Ce=Le=>ie.top+ee-(Le-(U-oe))/(G+oe-(U-oe)||1)*ee;L.strokeStyle="#333",L.lineWidth=1;for(let Le=0;Le<=5;Le++){const xe=ie.top+Le/5*ee;L.beginPath(),L.moveTo(ie.left,xe),L.lineTo(ue-ie.right,xe),L.stroke();const Re=G+oe-Le/5*(G+oe-(U-oe));L.fillStyle="#888",L.font="10px sans-serif",L.textAlign="right",L.fillText(Re.toFixed(2),ie.left-6,xe+3)}for(let Le=0;Le<=5;Le++){const xe=ie.left+Le/5*he,Re=new Date(Q+Le/5*(ve-Q));L.fillStyle="#888",L.font="10px sans-serif",L.textAlign="center",L.fillText(`${Re.getFullYear()}-${String(Re.getMonth()+1).padStart(2,"0")}`,xe,se-ie.bottom+18)}L.fillStyle="#888",L.font="11px sans-serif",L.textAlign="center",L.fillText("日期",ue/2,se-4),L.save(),L.translate(12,se/2),L.rotate(-Math.PI/2),L.fillText("水位标高 (m)",0,0),L.restore(),L.strokeStyle="#4fc3f7",L.lineWidth=2,L.beginPath(),ae.forEach((Le,xe)=>{const Re=pe(new Date(Le.obs_date).getTime()),te=Ce(Le.water_level);xe===0?L.moveTo(Re,te):L.lineTo(Re,te)}),L.stroke(),L.fillStyle="#4fc3f7",ae.forEach(Le=>{const xe=pe(new Date(Le.obs_date).getTime()),Re=Ce(Le.water_level);L.beginPath(),L.arc(xe,Re,3,0,Math.PI*2),L.fill()});const W=r.find(Le=>Le.id===h);if(W){const Le=Ce(W.elevation);Le>ie.top&&Le<ie.top+ee&&(L.strokeStyle="#ff9800",L.lineWidth=1,L.setLineDash([6,4]),L.beginPath(),L.moveTo(ie.left,Le),L.lineTo(ue-ie.right,Le),L.stroke(),L.setLineDash([]),L.fillStyle="#ff9800",L.font="10px sans-serif",L.textAlign="right",L.fillText(`孔口高程 ${W.elevation.toFixed(2)}m`,ue-ie.right,Le-4))}}yr(()=>{v()});let b;const x=()=>t(4,a=!0),R=Y=>nt(Jo,s=Y.id,s);function S(){h=tn(this),t(0,h)}const y=Y=>p(Y.id),C=(Y,L)=>L.id===Y.borehole_id;function D(){h=tn(this),t(0,h)}function O(Y){hi[Y?"unshift":"push"](()=>{d=Y,t(8,d)})}const M=Y=>t(5,c=Y.target.files[0]),P=()=>{t(4,a=!1),t(7,u=null)},H=()=>{t(4,a=!1),t(7,u=null)};return i.$$.update=()=>{if(i.$$.dirty[0]&9&&r.find(Y=>Y.id===h),i.$$.dirty[0]&7&&s==="history"&&h&&n&&setTimeout(f,50),i.$$.dirty[0]&2){const Y={};n.forEach(L=>{Y[L.borehole_id]||(Y[L.borehole_id]=[]),Y[L.borehole_id].push(L)}),t(9,b=Y)}},[h,n,s,r,a,c,l,u,d,b,g,_,p,x,R,S,y,C,D,O,M,P,H]}class Pv extends un{constructor(e){super(),hn(this,e,Rv,Cv,cn,{},null,[-1,-1])}}function uu(i,e,t){const n=i.slice();return n[20]=e[t],n}function hu(i,e,t){const n=i.slice();return n[17]=e[t],n}function fu(i,e,t){const n=i.slice();return n[23]=e[t],n}function du(i){let e,t,n,s,r=i[23].hole_id+"",o,a,c,l;function u(){return i[10](i[23])}return{c(){e=A("label"),t=A("input"),s=j(),o=Te(r),a=j(),this.h()},l(h){e=T(h,"LABEL",{class:!0,style:!0});var d=z(e);t=T(d,"INPUT",{type:!0}),s=X(d),o=Se(d,r),a=X(d),d.forEach(w),this.h()},h(){I(t,"type","checkbox"),t.checked=n=i[0].includes(i[23].id),I(e,"class","checkbox-label"),ge(e,"font-size","11px")},m(h,d){_e(h,e,d),m(e,t),m(e,s),m(e,o),m(e,a),c||(l=Ve(t,"change",u),c=!0)},p(h,d){i=h,d&65&&n!==(n=i[0].includes(i[23].id))&&(t.checked=n),d&64&&r!==(r=i[23].hole_id+"")&&Ke(o,r)},d(h){h&&w(e),c=!1,l()}}}function pu(i){let e,t,n="统计指标",s,r,o="MK趋势检验",a,c,l="箱线图",u,h,d,g;function v(f,b){if(f[3]==="stats")return Iv;if(f[3]==="mk")return Dv;if(f[3]==="boxplot")return Lv}let _=v(i),p=_&&_(i);return{c(){e=A("div"),t=A("button"),t.textContent=n,s=j(),r=A("button"),r.textContent=o,a=j(),c=A("button"),c.textContent=l,u=j(),p&&p.c(),h=Pt(),this.h()},l(f){e=T(f,"DIV",{class:!0});var b=z(e);t=T(b,"BUTTON",{class:!0,"data-svelte-h":!0}),Ie(t)!=="svelte-1tm5qhr"&&(t.textContent=n),s=X(b),r=T(b,"BUTTON",{class:!0,"data-svelte-h":!0}),Ie(r)!=="svelte-13bt70l"&&(r.textContent=o),a=X(b),c=T(b,"BUTTON",{class:!0,"data-svelte-h":!0}),Ie(c)!=="svelte-zp9jyh"&&(c.textContent=l),b.forEach(w),u=X(f),p&&p.l(f),h=Pt(),this.h()},h(){I(t,"class","section-tab svelte-189k9oy"),en(t,"active",i[3]==="stats"),I(r,"class","section-tab svelte-189k9oy"),en(r,"active",i[3]==="mk"),I(c,"class","section-tab svelte-189k9oy"),en(c,"active",i[3]==="boxplot"),I(e,"class","section-tabs svelte-189k9oy")},m(f,b){_e(f,e,b),m(e,t),m(e,s),m(e,r),m(e,a),m(e,c),_e(f,u,b),p&&p.m(f,b),_e(f,h,b),d||(g=[Ve(t,"click",i[11]),Ve(r,"click",i[12]),Ve(c,"click",i[13])],d=!0)},p(f,b){b&8&&en(t,"active",f[3]==="stats"),b&8&&en(r,"active",f[3]==="mk"),b&8&&en(c,"active",f[3]==="boxplot"),_===(_=v(f))&&p?p.p(f,b):(p&&p.d(1),p=_&&_(f),p&&(p.c(),p.m(h.parentNode,h)))},d(f){f&&(w(e),w(u),w(h)),p&&p.d(f),d=!1,wt(g)}}}function Lv(i){let e,t;return{c(){e=A("div"),t=A("canvas"),this.h()},l(n){e=T(n,"DIV",{class:!0});var s=z(e);t=T(s,"CANVAS",{class:!0}),z(t).forEach(w),s.forEach(w),this.h()},h(){I(t,"class","boxplot-canvas svelte-189k9oy"),I(e,"class","boxplot-container svelte-189k9oy")},m(n,s){_e(n,e,s),m(e,t),i[14](t)},p:Et,d(n){n&&w(e),i[14](null)}}}function Dv(i){let e,t,n,s='<tr><th class="svelte-189k9oy">孔号</th> <th class="svelte-189k9oy">记录数</th> <th class="svelte-189k9oy">S统计量</th> <th class="svelte-189k9oy">Var(S)</th> <th class="svelte-189k9oy">Z值</th> <th class="svelte-189k9oy">p值</th> <th class="svelte-189k9oy">趋势</th></tr>',r,o,a,c,l='<span style="color:#4caf50;">↑ 显著上升</span> <span style="color:#f44336;">↓ 显著下降</span> <span style="color:#9e9e9e;">— 无显著趋势</span> <span style="color:#ff9800;">(显著性水平 α=0.05, 至少8条记录)</span>',u=tt(i[4]),h=[];for(let d=0;d<u.length;d+=1)h[d]=mu(uu(i,u,d));return{c(){e=A("div"),t=A("table"),n=A("thead"),n.innerHTML=s,r=j(),o=A("tbody");for(let d=0;d<h.length;d+=1)h[d].c();a=j(),c=A("div"),c.innerHTML=l,this.h()},l(d){e=T(d,"DIV",{class:!0});var g=z(e);t=T(g,"TABLE",{class:!0});var v=z(t);n=T(v,"THEAD",{"data-svelte-h":!0}),Ie(n)!=="svelte-anulzd"&&(n.innerHTML=s),r=X(v),o=T(v,"TBODY",{});var _=z(o);for(let p=0;p<h.length;p+=1)h[p].l(_);_.forEach(w),v.forEach(w),g.forEach(w),a=X(d),c=T(d,"DIV",{class:!0,"data-svelte-h":!0}),Ie(c)!=="svelte-l45sxa"&&(c.innerHTML=l),this.h()},h(){I(t,"class","stats-table svelte-189k9oy"),I(e,"class","stats-table-container svelte-189k9oy"),I(c,"class","mk-legend svelte-189k9oy")},m(d,g){_e(d,e,g),m(e,t),m(t,n),m(t,r),m(t,o);for(let v=0;v<h.length;v+=1)h[v]&&h[v].m(o,null);_e(d,a,g),_e(d,c,g)},p(d,g){if(g&16){u=tt(d[4]);let v;for(v=0;v<u.length;v+=1){const _=uu(d,u,v);h[v]?h[v].p(_,g):(h[v]=mu(_),h[v].c(),h[v].m(o,null))}for(;v<h.length;v+=1)h[v].d(1);h.length=u.length}},d(d){d&&(w(e),w(a),w(c)),Tt(h,d)}}}function Iv(i){let e,t,n,s='<tr><th class="svelte-189k9oy">孔号</th> <th class="svelte-189k9oy">记录数</th> <th class="svelte-189k9oy">均值</th> <th class="svelte-189k9oy">中位数</th> <th class="svelte-189k9oy">标准差</th> <th class="svelte-189k9oy">变异系数</th> <th class="svelte-189k9oy">最大连续上升</th> <th class="svelte-189k9oy">最大连续下降</th> <th class="svelte-189k9oy">年际变幅</th></tr>',r,o,a=tt(i[5]),c=[];for(let l=0;l<a.length;l+=1)c[l]=_u(hu(i,a,l));return{c(){e=A("div"),t=A("table"),n=A("thead"),n.innerHTML=s,r=j(),o=A("tbody");for(let l=0;l<c.length;l+=1)c[l].c();this.h()},l(l){e=T(l,"DIV",{class:!0});var u=z(e);t=T(u,"TABLE",{class:!0});var h=z(t);n=T(h,"THEAD",{"data-svelte-h":!0}),Ie(n)!=="svelte-2dlbwo"&&(n.innerHTML=s),r=X(h),o=T(h,"TBODY",{});var d=z(o);for(let g=0;g<c.length;g+=1)c[g].l(d);d.forEach(w),h.forEach(w),u.forEach(w),this.h()},h(){I(t,"class","stats-table svelte-189k9oy"),I(e,"class","stats-table-container svelte-189k9oy")},m(l,u){_e(l,e,u),m(e,t),m(t,n),m(t,r),m(t,o);for(let h=0;h<c.length;h+=1)c[h]&&c[h].m(o,null)},p(l,u){if(u&32){a=tt(l[5]);let h;for(h=0;h<a.length;h+=1){const d=hu(l,a,h);c[h]?c[h].p(d,u):(c[h]=_u(d),c[h].c(),c[h].m(o,null))}for(;h<c.length;h+=1)c[h].d(1);c.length=a.length}},d(l){l&&w(e),Tt(c,l)}}}function mu(i){var ae,ie,he,ee;let e,t,n=i[20].hole_id+"",s,r,o,a=i[20].count+"",c,l,u,h=(((ae=i[20].s_stat)==null?void 0:ae.toFixed(1))??"-")+"",d,g,v,_=(((ie=i[20].var_s)==null?void 0:ie.toFixed(1))??"-")+"",p,f,b,x=(((he=i[20].z_value)==null?void 0:he.toFixed(3))??"-")+"",R,S,y,C=(((ee=i[20].p_value)==null?void 0:ee.toFixed(4))??"-")+"",D,O,M,P,H=vu(i[20].trend)+"",Y,L,V=i[20].trend+"",q,ue,se;return{c(){e=A("tr"),t=A("td"),s=Te(n),r=j(),o=A("td"),c=Te(a),l=j(),u=A("td"),d=Te(h),g=j(),v=A("td"),p=Te(_),f=j(),b=A("td"),R=Te(x),S=j(),y=A("td"),D=Te(C),O=j(),M=A("td"),P=A("span"),Y=Te(H),L=j(),q=Te(V),se=j(),this.h()},l(ce){e=T(ce,"TR",{});var F=z(e);t=T(F,"TD",{class:!0});var Q=z(t);s=Se(Q,n),Q.forEach(w),r=X(F),o=T(F,"TD",{class:!0});var ve=z(o);c=Se(ve,a),ve.forEach(w),l=X(F),u=T(F,"TD",{class:!0});var U=z(u);d=Se(U,h),U.forEach(w),g=X(F),v=T(F,"TD",{class:!0});var G=z(v);p=Se(G,_),G.forEach(w),f=X(F),b=T(F,"TD",{class:!0});var oe=z(b);R=Se(oe,x),oe.forEach(w),S=X(F),y=T(F,"TD",{class:!0});var pe=z(y);D=Se(pe,C),pe.forEach(w),O=X(F),M=T(F,"TD",{style:!0,class:!0});var Ce=z(M);P=T(Ce,"SPAN",{class:!0});var W=z(P);Y=Se(W,H),W.forEach(w),L=X(Ce),q=Se(Ce,V),Ce.forEach(w),se=X(F),F.forEach(w),this.h()},h(){I(t,"class","svelte-189k9oy"),I(o,"class","svelte-189k9oy"),I(u,"class","svelte-189k9oy"),I(v,"class","svelte-189k9oy"),I(b,"class","svelte-189k9oy"),I(y,"class","svelte-189k9oy"),I(P,"class","trend-icon svelte-189k9oy"),I(M,"style",ue=gu(i[20].trend)),I(M,"class","svelte-189k9oy")},m(ce,F){_e(ce,e,F),m(e,t),m(t,s),m(e,r),m(e,o),m(o,c),m(e,l),m(e,u),m(u,d),m(e,g),m(e,v),m(v,p),m(e,f),m(e,b),m(b,R),m(e,S),m(e,y),m(y,D),m(e,O),m(e,M),m(M,P),m(P,Y),m(M,L),m(M,q),m(e,se)},p(ce,F){var Q,ve,U,G;F&16&&n!==(n=ce[20].hole_id+"")&&Ke(s,n),F&16&&a!==(a=ce[20].count+"")&&Ke(c,a),F&16&&h!==(h=(((Q=ce[20].s_stat)==null?void 0:Q.toFixed(1))??"-")+"")&&Ke(d,h),F&16&&_!==(_=(((ve=ce[20].var_s)==null?void 0:ve.toFixed(1))??"-")+"")&&Ke(p,_),F&16&&x!==(x=(((U=ce[20].z_value)==null?void 0:U.toFixed(3))??"-")+"")&&Ke(R,x),F&16&&C!==(C=(((G=ce[20].p_value)==null?void 0:G.toFixed(4))??"-")+"")&&Ke(D,C),F&16&&H!==(H=vu(ce[20].trend)+"")&&Ke(Y,H),F&16&&V!==(V=ce[20].trend+"")&&Ke(q,V),F&16&&ue!==(ue=gu(ce[20].trend))&&I(M,"style",ue)},d(ce){ce&&w(e)}}}function _u(i){var ce,F,Q,ve,U;let e,t,n=i[17].hole_id+"",s,r,o,a=i[17].count+"",c,l,u,h=(((ce=i[17].mean)==null?void 0:ce.toFixed(2))??"-")+"",d,g,v,_=(((F=i[17].median)==null?void 0:F.toFixed(2))??"-")+"",p,f,b,x=(((Q=i[17].std_dev)==null?void 0:Q.toFixed(2))??"-")+"",R,S,y,C=(((ve=i[17].cv)==null?void 0:ve.toFixed(2))??"-")+"",D,O,M,P,H=(i[17].max_rise_days??"-")+"",Y,L,V,q=(i[17].max_fall_days??"-")+"",ue,se,ae,ie=(((U=i[17].annual_amplitude)==null?void 0:U.toFixed(2))??"-")+"",he,ee;return{c(){e=A("tr"),t=A("td"),s=Te(n),r=j(),o=A("td"),c=Te(a),l=j(),u=A("td"),d=Te(h),g=j(),v=A("td"),p=Te(_),f=j(),b=A("td"),R=Te(x),S=j(),y=A("td"),D=Te(C),O=Te("%"),M=j(),P=A("td"),Y=Te(H),L=j(),V=A("td"),ue=Te(q),se=j(),ae=A("td"),he=Te(ie),ee=j(),this.h()},l(G){e=T(G,"TR",{});var oe=z(e);t=T(oe,"TD",{class:!0});var pe=z(t);s=Se(pe,n),pe.forEach(w),r=X(oe),o=T(oe,"TD",{class:!0});var Ce=z(o);c=Se(Ce,a),Ce.forEach(w),l=X(oe),u=T(oe,"TD",{class:!0});var W=z(u);d=Se(W,h),W.forEach(w),g=X(oe),v=T(oe,"TD",{class:!0});var Le=z(v);p=Se(Le,_),Le.forEach(w),f=X(oe),b=T(oe,"TD",{class:!0});var xe=z(b);R=Se(xe,x),xe.forEach(w),S=X(oe),y=T(oe,"TD",{class:!0});var Re=z(y);D=Se(Re,C),O=Se(Re,"%"),Re.forEach(w),M=X(oe),P=T(oe,"TD",{class:!0});var te=z(P);Y=Se(te,H),te.forEach(w),L=X(oe),V=T(oe,"TD",{class:!0});var ne=z(V);ue=Se(ne,q),ne.forEach(w),se=X(oe),ae=T(oe,"TD",{class:!0});var fe=z(ae);he=Se(fe,ie),fe.forEach(w),ee=X(oe),oe.forEach(w),this.h()},h(){I(t,"class","svelte-189k9oy"),I(o,"class","svelte-189k9oy"),I(u,"class","svelte-189k9oy"),I(v,"class","svelte-189k9oy"),I(b,"class","svelte-189k9oy"),I(y,"class","svelte-189k9oy"),I(P,"class","svelte-189k9oy"),I(V,"class","svelte-189k9oy"),I(ae,"class","svelte-189k9oy")},m(G,oe){_e(G,e,oe),m(e,t),m(t,s),m(e,r),m(e,o),m(o,c),m(e,l),m(e,u),m(u,d),m(e,g),m(e,v),m(v,p),m(e,f),m(e,b),m(b,R),m(e,S),m(e,y),m(y,D),m(y,O),m(e,M),m(e,P),m(P,Y),m(e,L),m(e,V),m(V,ue),m(e,se),m(e,ae),m(ae,he),m(e,ee)},p(G,oe){var pe,Ce,W,Le,xe;oe&32&&n!==(n=G[17].hole_id+"")&&Ke(s,n),oe&32&&a!==(a=G[17].count+"")&&Ke(c,a),oe&32&&h!==(h=(((pe=G[17].mean)==null?void 0:pe.toFixed(2))??"-")+"")&&Ke(d,h),oe&32&&_!==(_=(((Ce=G[17].median)==null?void 0:Ce.toFixed(2))??"-")+"")&&Ke(p,_),oe&32&&x!==(x=(((W=G[17].std_dev)==null?void 0:W.toFixed(2))??"-")+"")&&Ke(R,x),oe&32&&C!==(C=(((Le=G[17].cv)==null?void 0:Le.toFixed(2))??"-")+"")&&Ke(D,C),oe&32&&H!==(H=(G[17].max_rise_days??"-")+"")&&Ke(Y,H),oe&32&&q!==(q=(G[17].max_fall_days??"-")+"")&&Ke(ue,q),oe&32&&ie!==(ie=(((xe=G[17].annual_amplitude)==null?void 0:xe.toFixed(2))??"-")+"")&&Ke(he,ie)},d(G){G&&w(e)}}}function Uv(i){let e,t="<h3>水位分析</h3>",n,s,r,o,a="选择钻孔 (可多选)",c,l,u,h,d=i[1]?"分析中...":"执行统计分析",g,v,_,p,f,b=tt(i[6]),x=[];for(let S=0;S<b.length;S+=1)x[S]=du(fu(i,b,S));let R=i[5].length>0&&pu(i);return{c(){e=A("div"),e.innerHTML=t,n=j(),s=A("div"),r=A("div"),o=A("label"),o.textContent=a,c=j(),l=A("div");for(let S=0;S<x.length;S+=1)x[S].c();u=j(),h=A("button"),g=Te(d),_=j(),R&&R.c(),this.h()},l(S){e=T(S,"DIV",{class:!0,"data-svelte-h":!0}),Ie(e)!=="svelte-7pvpg7"&&(e.innerHTML=t),n=X(S),s=T(S,"DIV",{class:!0});var y=z(s);r=T(y,"DIV",{class:!0,style:!0});var C=z(r);o=T(C,"LABEL",{style:!0,"data-svelte-h":!0}),Ie(o)!=="svelte-5wk8rr"&&(o.textContent=a),c=X(C),l=T(C,"DIV",{class:!0});var D=z(l);for(let M=0;M<x.length;M+=1)x[M].l(D);D.forEach(w),C.forEach(w),u=X(y),h=T(y,"BUTTON",{class:!0,style:!0});var O=z(h);g=Se(O,d),O.forEach(w),_=X(y),R&&R.l(y),y.forEach(w),this.h()},h(){I(e,"class","panel-header"),ge(o,"font-size","12px"),I(l,"class","borehole-checkboxes svelte-189k9oy"),I(r,"class","form-group"),ge(r,"margin-bottom","8px"),I(h,"class","btn-primary btn-sm"),ge(h,"width","100%"),ge(h,"margin-bottom","12px"),h.disabled=v=i[1]||i[0].length===0,I(s,"class","panel-body scrollable")},m(S,y){_e(S,e,y),_e(S,n,y),_e(S,s,y),m(s,r),m(r,o),m(r,c),m(r,l);for(let C=0;C<x.length;C+=1)x[C]&&x[C].m(l,null);m(s,u),m(s,h),m(h,g),m(s,_),R&&R.m(s,null),p||(f=Ve(h,"click",i[8]),p=!0)},p(S,[y]){if(y&193){b=tt(S[6]);let C;for(C=0;C<b.length;C+=1){const D=fu(S,b,C);x[C]?x[C].p(D,y):(x[C]=du(D),x[C].c(),x[C].m(l,null))}for(;C<x.length;C+=1)x[C].d(1);x.length=b.length}y&2&&d!==(d=S[1]?"分析中...":"执行统计分析")&&Ke(g,d),y&3&&v!==(v=S[1]||S[0].length===0)&&(h.disabled=v),S[5].length>0?R?R.p(S,y):(R=pu(S),R.c(),R.m(s,null)):R&&(R.d(1),R=null)},i:Et,o:Et,d(S){S&&(w(e),w(n),w(s)),Tt(x,S),R&&R.d(),p=!1,f()}}}function gu(i){return i==="显著上升"?"color: #4caf50;":i==="显著下降"?"color: #f44336;":"color: #9e9e9e;"}function vu(i){return i==="显著上升"?"↑":i==="显著下降"?"↓":"—"}function Nv(i,e,t){let n,s,r,o,a;Ze(i,Ko,R=>t(9,n=R)),Ze(i,Yo,R=>t(4,s=R)),Ze(i,qo,R=>t(5,r=R)),Ze(i,On,R=>t(15,o=R)),Ze(i,kn,R=>t(6,a=R));let c=[],l=!1,u,h="stats";function d(R){c.includes(R)?t(0,c=c.filter(S=>S!==R)):t(0,c=[...c,R])}async function g(){if(!(!o||c.length===0)){t(1,l=!0);try{const[R,S,y]=await Promise.all([ht.getWaterLevelStats(o.id,c),ht.getWaterLevelMKTest(o.id,c),ht.getWaterLevelBoxplot(o.id,c)]);nt(qo,r=R,r),nt(Yo,s=S,s),nt(Ko,n=y,n),setTimeout(v,50)}catch(R){$e(`分析失败: ${R.message}`,"error")}finally{t(1,l=!1)}}}function v(){if(!u)return;const R=u,S=R.getContext("2d"),y=window.devicePixelRatio||1,C=R.getBoundingClientRect();R.width=C.width*y,R.height=C.height*y,S.scale(y,y);const D=C.width,O=C.height;if(S.fillStyle="#1a1d23",S.fillRect(0,0,D,O),!n||n.length===0){S.fillStyle="#888",S.font="13px sans-serif",S.textAlign="center",S.fillText("请执行分析后查看箱线图",D/2,O/2);return}const M=n.filter(he=>he.boxplot);if(M.length===0){S.fillStyle="#888",S.font="13px sans-serif",S.textAlign="center",S.fillText("无有效箱线图数据",D/2,O/2);return}const P={top:20,right:20,bottom:50,left:60},H=D-P.left-P.right,Y=O-P.top-P.bottom;let L=1/0,V=-1/0;M.forEach(he=>{he.boxplot.whisker_low<L&&(L=he.boxplot.whisker_low),he.boxplot.whisker_high>V&&(V=he.boxplot.whisker_high)});const q=(V-L)*.1||1;L-=q,V+=q;const ue=he=>P.top+Y-(he-L)/(V-L)*Y;S.strokeStyle="#333",S.lineWidth=1;for(let he=0;he<=5;he++){const ee=P.top+he/5*Y;S.beginPath(),S.moveTo(P.left,ee),S.lineTo(D-P.right,ee),S.stroke();const ce=V-he/5*(V-L);S.fillStyle="#888",S.font="10px sans-serif",S.textAlign="right",S.fillText(ce.toFixed(2),P.left-6,ee+3)}const se=Math.min(60,H/M.length*.6),ae=H/M.length,ie=["#4fc3f7","#81c784","#ffb74d","#e57373","#ba68c8","#4dd0e1"];M.forEach((he,ee)=>{const ce=P.left+ae*(ee+.5),F=he.boxplot,Q=ie[ee%ie.length],ve=ue(F.q1),U=ue(F.q3),G=ue(F.median),oe=ue(F.whisker_low),pe=ue(F.whisker_high);S.strokeStyle=Q,S.lineWidth=1,S.beginPath(),S.moveTo(ce,oe),S.lineTo(ce,ve),S.stroke(),S.beginPath(),S.moveTo(ce,U),S.lineTo(ce,pe),S.stroke(),S.beginPath(),S.moveTo(ce-se*.3,oe),S.lineTo(ce+se*.3,oe),S.stroke(),S.beginPath(),S.moveTo(ce-se*.3,pe),S.lineTo(ce+se*.3,pe),S.stroke(),S.fillStyle=Q+"40",S.strokeStyle=Q,S.lineWidth=1.5;const Ce=ce-se/2,W=Math.min(ve,U),Le=Math.abs(U-ve);S.fillRect(Ce,W,se,Le),S.strokeRect(Ce,W,se,Le),S.strokeStyle="#fff",S.lineWidth=2,S.beginPath(),S.moveTo(Ce,G),S.lineTo(Ce+se,G),S.stroke(),F.outliers&&F.outliers.length>0&&(S.fillStyle=Q,F.outliers.forEach(xe=>{const Re=ue(xe);S.beginPath(),S.arc(ce,Re,3,0,Math.PI*2),S.fill()})),S.fillStyle="#ccc",S.font="10px sans-serif",S.textAlign="center",S.fillText(he.hole_id,ce,O-P.bottom+18)}),S.fillStyle="#888",S.font="11px sans-serif",S.textAlign="center",S.fillText("水位标高 (m)",14,O/2)}const _=R=>d(R.id),p=()=>t(3,h="stats"),f=()=>t(3,h="mk"),b=()=>t(3,h="boxplot");function x(R){hi[R?"unshift":"push"](()=>{u=R,t(2,u)})}return i.$$.update=()=>{i.$$.dirty&512&&n&&n.length>0&&setTimeout(v,50)},[c,l,u,h,s,r,a,d,g,n,_,p,f,b,x]}class Ov extends un{constructor(e){super(),hn(this,e,Nv,Uv,cn,{})}}function xu(i,e,t){const n=i.slice();return n[29]=e[t],n}function Fv(i){let e,t,n,s="起始日期",r,o,a,c,l,u="结束日期",h,d,g,v;return{c(){e=A("div"),t=A("div"),n=A("label"),n.textContent=s,r=j(),o=A("input"),a=j(),c=A("div"),l=A("label"),l.textContent=u,h=j(),d=A("input"),this.h()},l(_){e=T(_,"DIV",{class:!0});var p=z(e);t=T(p,"DIV",{class:!0});var f=z(t);n=T(f,"LABEL",{style:!0,"data-svelte-h":!0}),Ie(n)!=="svelte-adhmnz"&&(n.textContent=s),r=X(f),o=T(f,"INPUT",{type:!0,style:!0}),f.forEach(w),a=X(p),c=T(p,"DIV",{class:!0});var b=z(c);l=T(b,"LABEL",{style:!0,"data-svelte-h":!0}),Ie(l)!=="svelte-4ph25r"&&(l.textContent=u),h=X(b),d=T(b,"INPUT",{type:!0,style:!0}),b.forEach(w),p.forEach(w),this.h()},h(){ge(n,"font-size","12px"),I(o,"type","date"),ge(o,"width","100%"),ge(o,"font-size","12px"),I(t,"class","form-group"),ge(l,"font-size","12px"),I(d,"type","date"),ge(d,"width","100%"),ge(d,"font-size","12px"),I(c,"class","form-group"),I(e,"class","form-row")},m(_,p){_e(_,e,p),m(e,t),m(t,n),m(t,r),m(t,o),Xe(o,i[4]),m(e,a),m(e,c),m(c,l),m(c,h),m(c,d),Xe(d,i[5]),g||(v=[Ve(o,"input",i[20]),Ve(d,"input",i[21])],g=!0)},p(_,p){p[0]&16&&Xe(o,_[4]),p[0]&32&&Xe(d,_[5])},d(_){_&&w(e),g=!1,wt(v)}}}function Bv(i){let e,t,n="观测日期",s,r,o,a;return{c(){e=A("div"),t=A("label"),t.textContent=n,s=j(),r=A("input"),this.h()},l(c){e=T(c,"DIV",{class:!0});var l=z(e);t=T(l,"LABEL",{style:!0,"data-svelte-h":!0}),Ie(t)!=="svelte-1ax8ghg"&&(t.textContent=n),s=X(l),r=T(l,"INPUT",{type:!0,style:!0}),l.forEach(w),this.h()},h(){ge(t,"font-size","12px"),I(r,"type","date"),ge(r,"width","100%"),ge(r,"font-size","12px"),I(e,"class","form-group")},m(c,l){_e(c,e,l),m(e,t),m(e,s),m(e,r),Xe(r,i[3]),o||(a=Ve(r,"input",i[19]),o=!0)},p(c,l){l[0]&8&&Xe(r,c[3])},d(c){c&&w(e),o=!1,a()}}}function bu(i){var ee,ce;let e,t,n,s="水位范围:",r,o,a=((ee=i[1].water_level_min)==null?void 0:ee.toFixed(2))+"",c,l,u=((ce=i[1].water_level_max)==null?void 0:ce.toFixed(2))+"",h,d,g,v,_,p,f,b,x,R,S,y=i[14].toFixed(1)+"",C,D,O,M,P,H,Y,L="水位面与地层面交线",V,q,ue,se;function ae(F,Q){return F[11].length>0?zv:kv}let ie=ae(i),he=ie(i);return{c(){e=A("div"),t=A("div"),n=A("span"),n.textContent=s,r=j(),o=A("span"),c=Te(a),l=Te(" ~ "),h=Te(u),d=Te(" m"),g=j(),v=A("div"),_=A("label"),p=A("input"),f=Te(`
                显示等值面`),b=j(),x=A("div"),R=A("label"),S=Te("透明度: "),C=Te(y),D=j(),O=A("input"),M=j(),P=A("hr"),H=j(),Y=A("h4"),Y.textContent=L,V=j(),he.c(),q=Pt(),this.h()},l(F){e=T(F,"DIV",{class:!0});var Q=z(e);t=T(Q,"DIV",{class:!0});var ve=z(t);n=T(ve,"SPAN",{"data-svelte-h":!0}),Ie(n)!=="svelte-1mah59w"&&(n.textContent=s),r=X(ve),o=T(ve,"SPAN",{});var U=z(o);c=Se(U,a),l=Se(U," ~ "),h=Se(U,u),d=Se(U," m"),U.forEach(w),ve.forEach(w),Q.forEach(w),g=X(F),v=T(F,"DIV",{class:!0,style:!0});var G=z(v);_=T(G,"LABEL",{style:!0});var oe=z(_);p=T(oe,"INPUT",{type:!0}),f=Se(oe,`
                显示等值面`),oe.forEach(w),G.forEach(w),b=X(F),x=T(F,"DIV",{class:!0});var pe=z(x);R=T(pe,"LABEL",{style:!0});var Ce=z(R);S=Se(Ce,"透明度: "),C=Se(Ce,y),Ce.forEach(w),D=X(pe),O=T(pe,"INPUT",{type:!0,min:!0,max:!0,step:!0,style:!0}),pe.forEach(w),M=X(F),P=T(F,"HR",{style:!0}),H=X(F),Y=T(F,"H4",{style:!0,"data-svelte-h":!0}),Ie(Y)!=="svelte-18xkkxk"&&(Y.textContent=L),V=X(F),he.l(F),q=Pt(),this.h()},h(){I(t,"class","info-row svelte-17dv1aw"),I(e,"class","result-info svelte-17dv1aw"),I(p,"type","checkbox"),ge(_,"display","flex"),ge(_,"align-items","center"),ge(_,"gap","6px"),ge(_,"font-size","12px"),I(v,"class","form-group"),ge(v,"margin-top","10px"),ge(R,"font-size","12px"),I(O,"type","range"),I(O,"min","0.1"),I(O,"max","1"),I(O,"step","0.05"),ge(O,"width","100%"),I(x,"class","form-group"),ge(P,"border-color","var(--border)"),ge(P,"margin","12px 0"),ge(Y,"font-size","12px"),ge(Y,"margin-bottom","8px")},m(F,Q){_e(F,e,Q),m(e,t),m(t,n),m(t,r),m(t,o),m(o,c),m(o,l),m(o,h),m(o,d),_e(F,g,Q),_e(F,v,Q),m(v,_),m(_,p),p.checked=i[13],m(_,f),_e(F,b,Q),_e(F,x,Q),m(x,R),m(R,S),m(R,C),m(x,D),m(x,O),Xe(O,i[14]),_e(F,M,Q),_e(F,P,Q),_e(F,H,Q),_e(F,Y,Q),_e(F,V,Q),he.m(F,Q),_e(F,q,Q),ue||(se=[Ve(p,"change",i[25]),Ve(O,"change",i[26]),Ve(O,"input",i[26])],ue=!0)},p(F,Q){var ve,U;Q[0]&2&&a!==(a=((ve=F[1].water_level_min)==null?void 0:ve.toFixed(2))+"")&&Ke(c,a),Q[0]&2&&u!==(u=((U=F[1].water_level_max)==null?void 0:U.toFixed(2))+"")&&Ke(h,u),Q[0]&8192&&(p.checked=F[13]),Q[0]&16384&&y!==(y=F[14].toFixed(1)+"")&&Ke(C,y),Q[0]&16384&&Xe(O,F[14]),ie===(ie=ae(F))&&he?he.p(F,Q):(he.d(1),he=ie(F),he&&(he.c(),he.m(q.parentNode,q)))},d(F){F&&(w(e),w(g),w(v),w(b),w(x),w(M),w(P),w(H),w(Y),w(V),w(q)),he.d(F),ue=!1,wt(se)}}}function kv(i){let e,t="需要先完成三维建模才能计算交线";return{c(){e=A("p"),e.textContent=t,this.h()},l(n){e=T(n,"P",{style:!0,"data-svelte-h":!0}),Ie(e)!=="svelte-10sbxyz"&&(e.textContent=t),this.h()},h(){ge(e,"font-size","11px"),ge(e,"color","var(--text-muted)")},m(n,s){_e(n,e,s)},p:Et,d(n){n&&w(e)}}}function zv(i){let e,t,n="选择地层",s,r,o,a="请选择地层",c,l,u,h,d,g,v,_,p=tt(i[11]),f=[];for(let x=0;x<p.length;x+=1)f[x]=Eu(xu(i,p,x));let b=i[12]&&i[12].length>0&&Mu(i);return{c(){e=A("div"),t=A("label"),t.textContent=n,s=j(),r=A("select"),o=A("option"),o.textContent=a;for(let x=0;x<f.length;x+=1)f[x].c();c=j(),l=A("button"),u=Te("计算交线"),d=j(),b&&b.c(),g=Pt(),this.h()},l(x){e=T(x,"DIV",{class:!0});var R=z(e);t=T(R,"LABEL",{style:!0,"data-svelte-h":!0}),Ie(t)!=="svelte-10as4wd"&&(t.textContent=n),s=X(R),r=T(R,"SELECT",{style:!0});var S=z(r);o=T(S,"OPTION",{"data-svelte-h":!0}),Ie(o)!=="svelte-13g6dt"&&(o.textContent=a);for(let C=0;C<f.length;C+=1)f[C].l(S);S.forEach(w),R.forEach(w),c=X(x),l=T(x,"BUTTON",{class:!0,style:!0});var y=z(l);u=Se(y,"计算交线"),y.forEach(w),d=X(x),b&&b.l(x),g=Pt(),this.h()},h(){ge(t,"font-size","12px"),o.__value="",Xe(o,o.__value),ge(r,"width","100%"),ge(r,"font-size","12px"),i[0]===void 0&&sn(()=>i[27].call(r)),I(e,"class","form-group"),I(l,"class","btn-secondary btn-sm"),ge(l,"width","100%"),l.disabled=h=!i[10]},m(x,R){_e(x,e,R),m(e,t),m(e,s),m(e,r),m(r,o);for(let S=0;S<f.length;S+=1)f[S]&&f[S].m(r,null);yt(r,i[0],!0),_e(x,c,R),_e(x,l,R),m(l,u),_e(x,d,R),b&&b.m(x,R),_e(x,g,R),v||(_=[Ve(r,"change",i[27]),Ve(l,"click",i[16])],v=!0)},p(x,R){if(R[0]&2048){p=tt(x[11]);let S;for(S=0;S<p.length;S+=1){const y=xu(x,p,S);f[S]?f[S].p(y,R):(f[S]=Eu(y),f[S].c(),f[S].m(r,null))}for(;S<f.length;S+=1)f[S].d(1);f.length=p.length}R[0]&2049&&yt(r,x[0]),R[0]&1024&&h!==(h=!x[10])&&(l.disabled=h),x[12]&&x[12].length>0?b?b.p(x,R):(b=Mu(x),b.c(),b.m(g.parentNode,g)):b&&(b.d(1),b=null)},d(x){x&&(w(e),w(c),w(l),w(d),w(g)),Tt(f,x),b&&b.d(x),v=!1,wt(_)}}}function Eu(i){let e,t=i[29]+"",n,s;return{c(){e=A("option"),n=Te(t),this.h()},l(r){e=T(r,"OPTION",{});var o=z(e);n=Se(o,t),o.forEach(w),this.h()},h(){e.__value=s=i[29],Xe(e,e.__value)},m(r,o){_e(r,e,o),m(e,n)},p(r,o){o[0]&2048&&t!==(t=r[29]+"")&&Ke(n,t),o[0]&2048&&s!==(s=r[29])&&(e.__value=s,Xe(e,e.__value))},d(r){r&&w(e)}}}function Mu(i){let e,t,n="交点数:",s,r,o=i[12].length+"",a;return{c(){e=A("div"),t=A("span"),t.textContent=n,s=j(),r=A("span"),a=Te(o),this.h()},l(c){e=T(c,"DIV",{class:!0,style:!0});var l=z(e);t=T(l,"SPAN",{"data-svelte-h":!0}),Ie(t)!=="svelte-1c4hjfv"&&(t.textContent=n),s=X(l),r=T(l,"SPAN",{});var u=z(r);a=Se(u,o),u.forEach(w),l.forEach(w),this.h()},h(){I(e,"class","info-row svelte-17dv1aw"),ge(e,"margin-top","8px")},m(c,l){_e(c,e,l),m(e,t),m(e,s),m(e,r),m(r,a)},p(c,l){l[0]&4096&&o!==(o=c[12].length+"")&&Ke(a,o)},d(c){c&&w(e)}}}function Vv(i){let e,t="<h3>水位等值线</h3>",n,s,r,o,a="日期模式",c,l,u,h="单日",d,g="日期范围(取均值)",v,_,p,f,b="变异函数模型",x,R,S,y="球状模型",C,D="指数模型",O,M="高斯模型",P,H,Y,L,V="网格X",q,ue,se,ae,ie,he="网格Y",ee,ce,F,Q,ve=i[9]?"计算中...":"生成等值线",U,G,oe,pe,Ce;function W(te,ne){return te[2]==="single"?Bv:Fv}let Le=W(i),xe=Le(i),Re=i[1]&&bu(i);return{c(){e=A("div"),e.innerHTML=t,n=j(),s=A("div"),r=A("div"),o=A("label"),o.textContent=a,c=j(),l=A("select"),u=A("option"),u.textContent=h,d=A("option"),d.textContent=g,v=j(),xe.c(),_=j(),p=A("div"),f=A("label"),f.textContent=b,x=j(),R=A("select"),S=A("option"),S.textContent=y,C=A("option"),C.textContent=D,O=A("option"),O.textContent=M,P=j(),H=A("div"),Y=A("div"),L=A("label"),L.textContent=V,q=j(),ue=A("input"),se=j(),ae=A("div"),ie=A("label"),ie.textContent=he,ee=j(),ce=A("input"),F=j(),Q=A("button"),U=Te(ve),oe=j(),Re&&Re.c(),this.h()},l(te){e=T(te,"DIV",{class:!0,"data-svelte-h":!0}),Ie(e)!=="svelte-agmq8t"&&(e.innerHTML=t),n=X(te),s=T(te,"DIV",{class:!0});var ne=z(s);r=T(ne,"DIV",{class:!0});var fe=z(r);o=T(fe,"LABEL",{style:!0,"data-svelte-h":!0}),Ie(o)!=="svelte-18ghoz1"&&(o.textContent=a),c=X(fe),l=T(fe,"SELECT",{style:!0});var N=z(l);u=T(N,"OPTION",{"data-svelte-h":!0}),Ie(u)!=="svelte-158tu90"&&(u.textContent=h),d=T(N,"OPTION",{"data-svelte-h":!0}),Ie(d)!=="svelte-nsqibw"&&(d.textContent=g),N.forEach(w),fe.forEach(w),v=X(ne),xe.l(ne),_=X(ne),p=T(ne,"DIV",{class:!0});var E=z(p);f=T(E,"LABEL",{style:!0,"data-svelte-h":!0}),Ie(f)!=="svelte-1gmmfbo"&&(f.textContent=b),x=X(E),R=T(E,"SELECT",{style:!0});var $=z(R);S=T($,"OPTION",{"data-svelte-h":!0}),Ie(S)!=="svelte-17ym7v6"&&(S.textContent=y),C=T($,"OPTION",{"data-svelte-h":!0}),Ie(C)!=="svelte-bzk8zo"&&(C.textContent=D),O=T($,"OPTION",{"data-svelte-h":!0}),Ie(O)!=="svelte-1iqrdsw"&&(O.textContent=M),$.forEach(w),E.forEach(w),P=X(ne),H=T(ne,"DIV",{class:!0});var re=z(H);Y=T(re,"DIV",{class:!0});var Z=z(Y);L=T(Z,"LABEL",{style:!0,"data-svelte-h":!0}),Ie(L)!=="svelte-v5oz4u"&&(L.textContent=V),q=X(Z),ue=T(Z,"INPUT",{type:!0,min:!0,max:!0,style:!0}),Z.forEach(w),se=X(re),ae=T(re,"DIV",{class:!0});var le=z(ae);ie=T(le,"LABEL",{style:!0,"data-svelte-h":!0}),Ie(ie)!=="svelte-1blztqd"&&(ie.textContent=he),ee=X(le),ce=T(le,"INPUT",{type:!0,min:!0,max:!0,style:!0}),le.forEach(w),re.forEach(w),F=X(ne),Q=T(ne,"BUTTON",{class:!0,style:!0});var J=z(Q);U=Se(J,ve),J.forEach(w),oe=X(ne),Re&&Re.l(ne),ne.forEach(w),this.h()},h(){I(e,"class","panel-header"),ge(o,"font-size","12px"),u.__value="single",Xe(u,u.__value),d.__value="range",Xe(d,d.__value),ge(l,"width","100%"),ge(l,"font-size","12px"),i[2]===void 0&&sn(()=>i[18].call(l)),I(r,"class","form-group"),ge(f,"font-size","12px"),S.__value="spherical",Xe(S,S.__value),C.__value="exponential",Xe(C,C.__value),O.__value="gaussian",Xe(O,O.__value),ge(R,"width","100%"),ge(R,"font-size","12px"),i[6]===void 0&&sn(()=>i[22].call(R)),I(p,"class","form-group"),ge(L,"font-size","12px"),I(ue,"type","number"),I(ue,"min","5"),I(ue,"max","100"),ge(ue,"width","100%"),ge(ue,"font-size","12px"),I(Y,"class","form-group"),ge(ie,"font-size","12px"),I(ce,"type","number"),I(ce,"min","5"),I(ce,"max","100"),ge(ce,"width","100%"),ge(ce,"font-size","12px"),I(ae,"class","form-group"),I(H,"class","form-row"),I(Q,"class","btn-primary btn-sm"),ge(Q,"width","100%"),ge(Q,"margin-bottom","12px"),Q.disabled=G=i[9]||!i[3]&&i[2]==="single"||!i[4]&&i[2]==="range",I(s,"class","panel-body scrollable")},m(te,ne){_e(te,e,ne),_e(te,n,ne),_e(te,s,ne),m(s,r),m(r,o),m(r,c),m(r,l),m(l,u),m(l,d),yt(l,i[2],!0),m(s,v),xe.m(s,null),m(s,_),m(s,p),m(p,f),m(p,x),m(p,R),m(R,S),m(R,C),m(R,O),yt(R,i[6],!0),m(s,P),m(s,H),m(H,Y),m(Y,L),m(Y,q),m(Y,ue),Xe(ue,i[7]),m(H,se),m(H,ae),m(ae,ie),m(ae,ee),m(ae,ce),Xe(ce,i[8]),m(s,F),m(s,Q),m(Q,U),m(s,oe),Re&&Re.m(s,null),pe||(Ce=[Ve(l,"change",i[18]),Ve(R,"change",i[22]),Ve(ue,"input",i[23]),Ve(ce,"input",i[24]),Ve(Q,"click",i[15])],pe=!0)},p(te,ne){ne[0]&4&&yt(l,te[2]),Le===(Le=W(te))&&xe?xe.p(te,ne):(xe.d(1),xe=Le(te),xe&&(xe.c(),xe.m(s,_))),ne[0]&64&&yt(R,te[6]),ne[0]&128&&ot(ue.value)!==te[7]&&Xe(ue,te[7]),ne[0]&256&&ot(ce.value)!==te[8]&&Xe(ce,te[8]),ne[0]&512&&ve!==(ve=te[9]?"计算中...":"生成等值线")&&Ke(U,ve),ne[0]&540&&G!==(G=te[9]||!te[3]&&te[2]==="single"||!te[4]&&te[2]==="range")&&(Q.disabled=G),te[1]?Re?Re.p(te,ne):(Re=bu(te),Re.c(),Re.m(s,null)):Re&&(Re.d(1),Re=null)},i:Et,o:Et,d(te){te&&(w(e),w(n),w(s)),xe.d(),Re&&Re.d(),pe=!1,wt(Ce)}}}function Hv(i,e,t){let n,s,r,o,a,c,l,u;Ze(i,mr,q=>t(12,r=q)),Ze(i,ws,q=>t(17,o=q)),Ze(i,Ti,q=>t(1,a=q)),Ze(i,ai,q=>t(13,c=q)),Ze(i,On,q=>t(28,l=q)),Ze(i,pr,q=>t(14,u=q));let h="single",d="",g="",v="",_="spherical",p=50,f=50,b=!1,x="";async function R(){if(l){t(9,b=!0);try{const q={variogram_model:_,grid_nx:p,grid_ny:f};h==="single"&&d?q.obs_date=d:h==="range"&&g&&v&&(q.date_from=g,q.date_to=v);const ue=await ht.krigingWaterLevel(l.id,q);nt(Ti,a=ue,a),nt(ai,c=!0,c),$e("水位等值线生成完成","success")}catch(q){$e(`等值线计算失败: ${q.message}`,"error")}finally{t(9,b=!1)}}}function S(){var oe,pe,Ce,W,Le,xe,Re,te;if(!a||!o||!x)return;const q=a,ue=o,se=q.grid,ae=q.water_level_grid,ie=ue.grid,he=ue.surfaces[x];if(!(he!=null&&he.top)){$e("该地层顶面数据不可用","error");return}const ee=se.nx,ce=se.ny,F=ie.nx,Q=ie.ny,ve=se.lon_max-se.lon_min,U=se.lat_max-se.lat_min;ie.lon_max-ie.lon_min,ie.lat_max-ie.lat_min;const G=[];for(let ne=0;ne<Math.min(ce,Q)-1;ne++)for(let fe=0;fe<Math.min(ee,F)-1;fe++){const N=(oe=ae[ne])==null?void 0:oe[fe],E=(pe=ae[ne])==null?void 0:pe[fe+1],$=(Ce=ae[ne+1])==null?void 0:Ce[fe],re=(W=ae[ne+1])==null?void 0:W[fe+1],Z=Math.min(Math.floor(fe/(ee-1)*(F-1)),F-2),le=Math.min(Math.floor(ne/(ce-1)*(Q-1)),Q-2),J=(Le=he.top[le])==null?void 0:Le[Z],de=(xe=he.top[le])==null?void 0:xe[Z+1],me=(Re=he.top[le+1])==null?void 0:Re[Z],Ee=(te=he.top[le+1])==null?void 0:te[Z+1];if(N==null||E==null||$==null||re==null||J==null||de==null||me==null||Ee==null)continue;const Oe=[{i:fe,j:ne,wl:N,top:J},{i:fe+1,j:ne,wl:E,top:de},{i:fe+1,j:ne+1,wl:re,top:Ee},{i:fe,j:ne+1,wl:$,top:me}],be=[[Oe[0],Oe[1]],[Oe[1],Oe[2]],[Oe[2],Oe[3]],[Oe[3],Oe[0]]];for(const[ye,Be]of be){const We=ye.wl-ye.top,ze=Be.wl-Be.top;if(We*ze<0){const Pe=We/(We-ze),qe=se.lon_min+(ye.i+Pe*(Be.i-ye.i))/(ee-1)*ve,k=se.lat_min+(ye.j+Pe*(Be.j-ye.j))/(ce-1)*U,Fe=ye.top+Pe*(Be.top-ye.top);G.push({longitude:qe,latitude:k,elevation:Fe})}}}nt(mr,r=G,r),G.length>0?$e(`交线计算完成，共 ${G.length} 个交点`,"success"):$e("水位面与该地层顶面无交线","info")}function y(){h=tn(this),t(2,h)}function C(){d=this.value,t(3,d)}function D(){g=this.value,t(4,g)}function O(){v=this.value,t(5,v)}function M(){_=tn(this),t(6,_)}function P(){p=ot(this.value),t(7,p)}function H(){f=ot(this.value),t(8,f)}function Y(){c=this.checked,ai.set(c)}function L(){u=ot(this.value),pr.set(u)}function V(){x=tn(this),t(0,x),t(11,n),t(17,o)}return i.$$.update=()=>{i.$$.dirty[0]&131072&&t(11,n=(o==null?void 0:o.lithologies)||[]),i.$$.dirty[0]&131075&&t(10,s=a&&x&&o)},[x,a,h,d,g,v,_,p,f,b,s,n,r,c,u,R,S,o,y,C,D,O,M,P,H,Y,L,V]}class Gv extends un{constructor(e){super(),hn(this,e,Hv,Vv,cn,{},null,[-1,-1])}}function yu(i){let e,t,n;return{c(){e=A("div"),t=Te("当前日期: "),n=Te(i[5]),this.h()},l(s){e=T(s,"DIV",{class:!0});var r=z(e);t=Se(r,"当前日期: "),n=Se(r,i[5]),r.forEach(w),this.h()},h(){I(e,"class","current-date-display svelte-b6qn9o")},m(s,r){_e(s,e,r),m(e,t),m(e,n)},p(s,r){r&32&&Ke(n,s[5])},d(s){s&&w(e)}}}function Su(i){let e,t,n,s,r;return{c(){e=A("button"),t=Te("开始回放"),this.h()},l(o){e=T(o,"BUTTON",{class:!0,style:!0});var a=z(e);t=Se(a,"开始回放"),a.forEach(w),this.h()},h(){I(e,"class","btn-primary btn-sm"),ge(e,"width","100%"),ge(e,"margin-top","8px"),e.disabled=n=!i[0]||!i[1]||!i[8]},m(o,a){_e(o,e,a),m(e,t),s||(r=Ve(e,"click",i[9]),s=!0)},p(o,a){a&259&&n!==(n=!o[0]||!o[1]||!o[8])&&(e.disabled=n)},d(o){o&&w(e),s=!1,r()}}}function Tu(i){let e,t,n,s=i[6].length+"",r,o,a,c,l,u,h=i[6].length+"",d;return{c(){e=A("div"),t=A("span"),n=Te("帧数: "),r=Te(s),o=j(),a=A("span"),c=Te("当前: "),l=Te(i[7]),u=Te("/"),d=Te(h),this.h()},l(g){e=T(g,"DIV",{class:!0});var v=z(e);t=T(v,"SPAN",{});var _=z(t);n=Se(_,"帧数: "),r=Se(_,s),_.forEach(w),o=X(v),a=T(v,"SPAN",{});var p=z(a);c=Se(p,"当前: "),l=Se(p,i[7]),u=Se(p,"/"),d=Se(p,h),p.forEach(w),v.forEach(w),this.h()},h(){I(e,"class","playback-info svelte-b6qn9o")},m(g,v){_e(g,e,v),m(e,t),m(t,n),m(t,r),m(e,o),m(e,a),m(a,c),m(a,l),m(a,u),m(a,d)},p(g,v){v&64&&s!==(s=g[6].length+"")&&Ke(r,s),v&128&&Ke(l,g[7]),v&64&&h!==(h=g[6].length+"")&&Ke(d,h)},d(g){g&&w(e)}}}function Wv(i){let e,t="<h3>水位动态回放</h3>",n,s,r,o,a="起始日期",c,l,u,h,d,g="结束日期",v,_,p,f,b,x="播放速度",R,S,y,C="1 天/秒",D,O="7 天/秒",M,P="30 天/秒",H,Y,L,V=i[3]?"⏸":"▶",q,ue,se,ae,ie="⏹",he,ee,ce,F,Q,ve,U,G,oe,pe=i[5]&&yu(i),Ce=!i[3]&&i[6].length===0&&Su(i),W=i[6].length>0&&Tu(i);return{c(){e=A("div"),e.innerHTML=t,n=j(),s=A("div"),r=A("div"),o=A("label"),o.textContent=a,c=j(),l=A("input"),u=j(),h=A("div"),d=A("label"),d.textContent=g,v=j(),_=A("input"),p=j(),f=A("div"),b=A("label"),b.textContent=x,R=j(),S=A("select"),y=A("option"),y.textContent=C,D=A("option"),D.textContent=O,M=A("option"),M.textContent=P,H=j(),Y=A("div"),L=A("button"),q=Te(V),se=j(),ae=A("button"),ae.textContent=ie,he=j(),ee=A("div"),ce=A("div"),F=A("div"),Q=j(),pe&&pe.c(),ve=j(),Ce&&Ce.c(),U=j(),W&&W.c(),this.h()},l(Le){e=T(Le,"DIV",{class:!0,"data-svelte-h":!0}),Ie(e)!=="svelte-1v7985g"&&(e.innerHTML=t),n=X(Le),s=T(Le,"DIV",{class:!0});var xe=z(s);r=T(xe,"DIV",{class:!0});var Re=z(r);o=T(Re,"LABEL",{style:!0,"data-svelte-h":!0}),Ie(o)!=="svelte-adhmnz"&&(o.textContent=a),c=X(Re),l=T(Re,"INPUT",{type:!0,style:!0}),Re.forEach(w),u=X(xe),h=T(xe,"DIV",{class:!0});var te=z(h);d=T(te,"LABEL",{style:!0,"data-svelte-h":!0}),Ie(d)!=="svelte-4ph25r"&&(d.textContent=g),v=X(te),_=T(te,"INPUT",{type:!0,style:!0}),te.forEach(w),p=X(xe),f=T(xe,"DIV",{class:!0});var ne=z(f);b=T(ne,"LABEL",{style:!0,"data-svelte-h":!0}),Ie(b)!=="svelte-usmb6n"&&(b.textContent=x),R=X(ne),S=T(ne,"SELECT",{style:!0});var fe=z(S);y=T(fe,"OPTION",{"data-svelte-h":!0}),Ie(y)!=="svelte-1humdvw"&&(y.textContent=C),D=T(fe,"OPTION",{"data-svelte-h":!0}),Ie(D)!=="svelte-17dltp0"&&(D.textContent=O),M=T(fe,"OPTION",{"data-svelte-h":!0}),Ie(M)!=="svelte-4ot9n8"&&(M.textContent=P),fe.forEach(w),ne.forEach(w),H=X(xe),Y=T(xe,"DIV",{class:!0});var N=z(Y);L=T(N,"BUTTON",{class:!0});var E=z(L);q=Se(E,V),E.forEach(w),se=X(N),ae=T(N,"BUTTON",{class:!0,"data-svelte-h":!0}),Ie(ae)!=="svelte-1iouqet"&&(ae.textContent=ie),N.forEach(w),he=X(xe),ee=T(xe,"DIV",{class:!0});var $=z(ee);ce=T($,"DIV",{class:!0});var re=z(ce);F=T(re,"DIV",{class:!0,style:!0}),z(F).forEach(w),re.forEach(w),$.forEach(w),Q=X(xe),pe&&pe.l(xe),ve=X(xe),Ce&&Ce.l(xe),U=X(xe),W&&W.l(xe),xe.forEach(w),this.h()},h(){I(e,"class","panel-header"),ge(o,"font-size","12px"),I(l,"type","date"),ge(l,"width","100%"),ge(l,"font-size","12px"),I(r,"class","form-group"),ge(d,"font-size","12px"),I(_,"type","date"),ge(_,"width","100%"),ge(_,"font-size","12px"),I(h,"class","form-group"),ge(b,"font-size","12px"),y.__value=1,Xe(y,y.__value),D.__value=7,Xe(D,D.__value),M.__value=30,Xe(M,M.__value),ge(S,"width","100%"),ge(S,"font-size","12px"),i[2]===void 0&&sn(()=>i[15].call(S)),I(f,"class","form-group"),I(L,"class","btn-icon svelte-b6qn9o"),L.disabled=ue=!i[0]||!i[1],I(ae,"class","btn-icon svelte-b6qn9o"),I(Y,"class","playback-controls svelte-b6qn9o"),I(F,"class","progress-bar-fill svelte-b6qn9o"),ge(F,"width",i[4]+"%"),I(ce,"class","progress-bar-track svelte-b6qn9o"),I(ee,"class","progress-bar-container svelte-b6qn9o"),I(s,"class","panel-body scrollable")},m(Le,xe){_e(Le,e,xe),_e(Le,n,xe),_e(Le,s,xe),m(s,r),m(r,o),m(r,c),m(r,l),Xe(l,i[0]),m(s,u),m(s,h),m(h,d),m(h,v),m(h,_),Xe(_,i[1]),m(s,p),m(s,f),m(f,b),m(f,R),m(f,S),m(S,y),m(S,D),m(S,M),yt(S,i[2],!0),m(s,H),m(s,Y),m(Y,L),m(L,q),m(Y,se),m(Y,ae),m(s,he),m(s,ee),m(ee,ce),m(ce,F),m(s,Q),pe&&pe.m(s,null),m(s,ve),Ce&&Ce.m(s,null),m(s,U),W&&W.m(s,null),G||(oe=[Ve(l,"input",i[13]),Ve(_,"input",i[14]),Ve(S,"change",i[15]),Ve(L,"click",i[10]),Ve(ae,"click",i[11]),Ve(ee,"click",i[12])],G=!0)},p(Le,[xe]){xe&1&&Xe(l,Le[0]),xe&2&&Xe(_,Le[1]),xe&4&&yt(S,Le[2]),xe&8&&V!==(V=Le[3]?"⏸":"▶")&&Ke(q,V),xe&3&&ue!==(ue=!Le[0]||!Le[1])&&(L.disabled=ue),xe&16&&ge(F,"width",Le[4]+"%"),Le[5]?pe?pe.p(Le,xe):(pe=yu(Le),pe.c(),pe.m(s,ve)):pe&&(pe.d(1),pe=null),!Le[3]&&Le[6].length===0?Ce?Ce.p(Le,xe):(Ce=Su(Le),Ce.c(),Ce.m(s,U)):Ce&&(Ce.d(1),Ce=null),Le[6].length>0?W?W.p(Le,xe):(W=Tu(Le),W.c(),W.m(s,null)):W&&(W.d(1),W=null)},i:Et,o:Et,d(Le){Le&&(w(e),w(n),w(s)),pe&&pe.d(),Ce&&Ce.d(),W&&W.d(),G=!1,wt(oe)}}}function Xv(i,e,t){let n,s,r,o,a;Ze(i,Zo,H=>t(19,n=H)),Ze(i,ai,H=>t(20,s=H)),Ze(i,Ti,H=>t(21,r=H)),Ze(i,On,H=>t(8,o=H)),Ze(i,Rs,H=>t(22,a=H));let c="",l="",u=7,h=!1,d=0,g="",v=null,_=0,p=[],f=0;function b(){const H=new Set;return a.forEach(Y=>{const L=Y.obs_date;(!c||L>=c)&&(!l||L<=l)&&H.add(L)}),Array.from(H).sort()}async function x(){if(!o)return;const H=b();if(H.length<2){$e("日期范围内的数据不足，无法回放","warning");return}t(3,h=!0),t(4,d=0),t(6,p=[]),t(7,f=0);const Y=Math.max(1,Math.floor(H.length/300)),L=H.filter((V,q)=>q%Y===0||q===H.length-1);for(let V=0;V<L.length;V++)try{const q=await ht.krigingWaterLevel(o.id,{obs_date:L[V],variogram_model:"spherical",grid_nx:40,grid_ny:40});p.push({date:L[V],result:q})}catch(q){console.warn(`Frame ${L[V]} failed:`,q)}if(p.length===0){t(3,h=!1),$e("无法生成回放帧","error");return}_=performance.now(),R()}function R(){if(!h)return;const H=performance.now(),Y=H-_,L=Math.max(16,Math.min(100,1e3/(u*1.5)));if(Y>=L)if(_=H,f<p.length){const V=p[f];nt(Ti,r=V.result,r),nt(ai,s=!0,s),t(5,g=V.date),t(4,d=(f+1)/p.length*100),t(7,f++,f)}else{t(3,h=!1),$e("回放完成","info");return}v=requestAnimationFrame(R)}function S(){h?(t(3,h=!1),v&&cancelAnimationFrame(v)):(f>=p.length&&t(7,f=0),t(3,h=!0),_=performance.now(),R())}function y(){t(3,h=!1),v&&cancelAnimationFrame(v),t(7,f=0),t(4,d=0),t(5,g="")}function C(H){p.length!==0&&(t(7,f=Math.floor(H/100*p.length)),t(7,f=Math.min(f,p.length-1)),p[f]&&(nt(Ti,r=p[f].result,r),nt(ai,s=!0,s),t(5,g=p[f].date),t(4,d=(f+1)/p.length*100)))}function D(H){const Y=H.target.getBoundingClientRect(),L=(H.clientX-Y.left)/Y.width*100;C(Math.max(0,Math.min(100,L)))}function O(){c=this.value,t(0,c)}function M(){l=this.value,t(1,l)}function P(){u=tn(this),t(2,u)}return i.$$.update=()=>{i.$$.dirty&3&&(()=>{if(!c||!l)return[];const H=[],Y=new Date(c),L=new Date(l),V=new Date(Y);for(;V<=L;)H.push(new Date(V)),V.setDate(V.getDate()+1);return H})(),i.$$.dirty&63&&nt(Zo,n={playing:h,startDate:c,endDate:l,speed:u,currentDate:g,progress:d},n)},[c,l,u,h,d,g,p,f,o,x,S,y,D,O,M,P]}class jv extends un{constructor(e){super(),hn(this,e,Xv,Wv,cn,{})}}function Au(i,e,t){const n=i.slice();return n[24]=e[t],n}function wu(i,e,t){const n=i.slice();return n[27]=e[t],n}function Cu(i,e,t){const n=i.slice();return n[30]=e[t],n}function Ru(i){let e,t=i[30].name+"",n,s;return{c(){e=A("option"),n=Te(t),this.h()},l(r){e=T(r,"OPTION",{});var o=z(e);n=Se(o,t),o.forEach(w),this.h()},h(){e.__value=s=i[30].id,Xe(e,e.__value)},m(r,o){_e(r,e,o),m(e,n)},p(r,o){o[0]&1&&t!==(t=r[30].name+"")&&Ke(n,t),o[0]&1&&s!==(s=r[30].id)&&(e.__value=s,Xe(e,e.__value))},d(r){r&&w(e)}}}function Pu(i){let e,t=i[27].icon+"",n,s,r=i[27].label+"",o,a,c,l;function u(){return i[17](i[27])}return{c(){e=A("button"),n=Te(t),s=j(),o=Te(r),a=j(),this.h()},l(h){e=T(h,"BUTTON",{class:!0});var d=z(e);n=Se(d,t),s=X(d),o=Se(d,r),a=X(d),d.forEach(w),this.h()},h(){I(e,"class","tab-btn svelte-19z9xcn"),en(e,"active",i[6]===i[27].id)},m(h,d){_e(h,e,d),m(e,n),m(e,s),m(e,o),m(e,a),c||(l=Ve(e,"click",u),c=!0)},p(h,d){i=h,d[0]&16448&&en(e,"active",i[6]===i[27].id)},d(h){h&&w(e),c=!1,l()}}}function qv(i){let e,t;return e=new gv({}),{c(){vn(e.$$.fragment)},l(n){gn(e.$$.fragment,n)},m(n,s){_n(e,n,s),t=!0},i(n){t||(It(e.$$.fragment,n),t=!0)},o(n){Ut(e.$$.fragment,n),t=!1},d(n){mn(e,n)}}}function Yv(i){let e,t;return e=new pv({}),{c(){vn(e.$$.fragment)},l(n){gn(e.$$.fragment,n)},m(n,s){_n(e,n,s),t=!0},i(n){t||(It(e.$$.fragment,n),t=!0)},o(n){Ut(e.$$.fragment,n),t=!1},d(n){mn(e,n)}}}function Kv(i){let e,t;return e=new Pv({}),{c(){vn(e.$$.fragment)},l(n){gn(e.$$.fragment,n)},m(n,s){_n(e,n,s),t=!0},i(n){t||(It(e.$$.fragment,n),t=!0)},o(n){Ut(e.$$.fragment,n),t=!1},d(n){mn(e,n)}}}function Zv(i){let e,t;return e=new hv({}),{c(){vn(e.$$.fragment)},l(n){gn(e.$$.fragment,n)},m(n,s){_n(e,n,s),t=!0},i(n){t||(It(e.$$.fragment,n),t=!0)},o(n){Ut(e.$$.fragment,n),t=!1},d(n){mn(e,n)}}}function Jv(i){let e,t;return e=new Dh({}),{c(){vn(e.$$.fragment)},l(n){gn(e.$$.fragment,n)},m(n,s){_n(e,n,s),t=!0},i(n){t||(It(e.$$.fragment,n),t=!0)},o(n){Ut(e.$$.fragment,n),t=!1},d(n){mn(e,n)}}}function $v(i){let e,t;return e=new wh({}),{c(){vn(e.$$.fragment)},l(n){gn(e.$$.fragment,n)},m(n,s){_n(e,n,s),t=!0},i(n){t||(It(e.$$.fragment,n),t=!0)},o(n){Ut(e.$$.fragment,n),t=!1},d(n){mn(e,n)}}}function Qv(i){let e,t;return e=new bv({}),{c(){vn(e.$$.fragment)},l(n){gn(e.$$.fragment,n)},m(n,s){_n(e,n,s),t=!0},i(n){t||(It(e.$$.fragment,n),t=!0)},o(n){Ut(e.$$.fragment,n),t=!1},d(n){mn(e,n)}}}function e0(i){let e,t,n,s,r,o,a,c,l,u;return e=new Ov({}),r=new Gv({}),l=new jv({}),{c(){vn(e.$$.fragment),t=j(),n=A("div"),s=j(),vn(r.$$.fragment),o=j(),a=A("div"),c=j(),vn(l.$$.fragment),this.h()},l(h){gn(e.$$.fragment,h),t=X(h),n=T(h,"DIV",{class:!0}),z(n).forEach(w),s=X(h),gn(r.$$.fragment,h),o=X(h),a=T(h,"DIV",{class:!0}),z(a).forEach(w),c=X(h),gn(l.$$.fragment,h),this.h()},h(){I(n,"class","divider svelte-19z9xcn"),I(a,"class","divider svelte-19z9xcn")},m(h,d){_n(e,h,d),_e(h,t,d),_e(h,n,d),_e(h,s,d),_n(r,h,d),_e(h,o,d),_e(h,a,d),_e(h,c,d),_n(l,h,d),u=!0},i(h){u||(It(e.$$.fragment,h),It(r.$$.fragment,h),It(l.$$.fragment,h),u=!0)},o(h){Ut(e.$$.fragment,h),Ut(r.$$.fragment,h),Ut(l.$$.fragment,h),u=!1},d(h){h&&(w(t),w(n),w(s),w(o),w(a),w(c)),mn(e,h),mn(r,h),mn(l,h)}}}function t0(i){let e,t;return e=new ov({}),{c(){vn(e.$$.fragment)},l(n){gn(e.$$.fragment,n)},m(n,s){_n(e,n,s),t=!0},i(n){t||(It(e.$$.fragment,n),t=!0)},o(n){Ut(e.$$.fragment,n),t=!1},d(n){mn(e,n)}}}function n0(i){let e,t;return e=new Oh({}),{c(){vn(e.$$.fragment)},l(n){gn(e.$$.fragment,n)},m(n,s){_n(e,n,s),t=!0},i(n){t||(It(e.$$.fragment,n),t=!0)},o(n){Ut(e.$$.fragment,n),t=!1},d(n){mn(e,n)}}}function Lu(i){let e,t,n,s="创建新项目",r,o,a,c="项目名称",l,u,h,d,g,v="取消",_,p,f="创建",b,x;return{c(){e=A("div"),t=A("div"),n=A("h3"),n.textContent=s,r=j(),o=A("div"),a=A("label"),a.textContent=c,l=j(),u=A("input"),h=j(),d=A("div"),g=A("button"),g.textContent=v,_=j(),p=A("button"),p.textContent=f,this.h()},l(R){e=T(R,"DIV",{class:!0});var S=z(e);t=T(S,"DIV",{class:!0});var y=z(t);n=T(y,"H3",{"data-svelte-h":!0}),Ie(n)!=="svelte-1v42gf6"&&(n.textContent=s),r=X(y),o=T(y,"DIV",{class:!0});var C=z(o);a=T(C,"LABEL",{"data-svelte-h":!0}),Ie(a)!=="svelte-1mpo0da"&&(a.textContent=c),l=X(C),u=T(C,"INPUT",{type:!0,placeholder:!0}),C.forEach(w),h=X(y),d=T(y,"DIV",{class:!0});var D=z(d);g=T(D,"BUTTON",{class:!0,"data-svelte-h":!0}),Ie(g)!=="svelte-pvm4w2"&&(g.textContent=v),_=X(D),p=T(D,"BUTTON",{class:!0,"data-svelte-h":!0}),Ie(p)!=="svelte-1mtj7b2"&&(p.textContent=f),D.forEach(w),y.forEach(w),S.forEach(w),this.h()},h(){I(u,"type","text"),I(u,"placeholder","输入项目名称"),I(o,"class","form-group"),I(g,"class","btn-secondary"),I(p,"class","btn-primary"),I(d,"class","modal-actions"),I(t,"class","modal"),I(e,"class","modal-overlay")},m(R,S){_e(R,e,S),m(e,t),m(t,n),m(t,r),m(t,o),m(o,a),m(o,l),m(o,u),Xe(u,i[2]),m(t,h),m(t,d),m(d,g),m(d,_),m(d,p),b||(x=[Ve(u,"input",i[18]),Ve(u,"keydown",i[19]),Ve(g,"click",i[20]),Ve(p,"click",i[13]),Ve(e,"click",Sr(i[21]))],b=!0)},p(R,S){S[0]&4&&u.value!==R[2]&&Xe(u,R[2])},d(R){R&&w(e),b=!1,wt(x)}}}function Du(i,e){let t,n,s;return n=new yv({props:{toast:e[24]}}),{key:i,first:null,c(){t=Pt(),vn(n.$$.fragment),this.h()},l(r){t=Pt(),gn(n.$$.fragment,r),this.h()},h(){this.first=t},m(r,o){_e(r,t,o),_n(n,r,o),s=!0},p(r,o){e=r;const a={};o[0]&2048&&(a.toast=e[24]),n.$set(a)},i(r){s||(It(n.$$.fragment,r),s=!0)},o(r){Ut(n.$$.fragment,r),s=!1},d(r){r&&w(t),mn(n,r)}}}function i0(i){let e,t,n,s,r="⛏ GeoModeler",o,a,c,l,u,h="+ 新项目",d,g,v,_,p,f,b=i[4].length+"",x,R,S=i[3].length+"",y,C,D,O,M,P,H,Y,L,V,q,ue,se,ae,ie,he,ee,ce,F=[],Q=new Map,ve,U,G,oe=tt(i[0]),pe=[];for(let J=0;J<oe.length;J+=1)pe[J]=Ru(Cu(i,oe,J));let Ce=tt(i[14]),W=[];for(let J=0;J<Ce.length;J+=1)W[J]=Pu(wu(i,Ce,J));const Le=[$v,Jv,Zv,Kv,Yv,qv],xe=[];function Re(J,de){return J[6]==="boreholes"?0:J[6]==="profiles"?1:J[6]==="modeling"?2:J[6]==="waterlevel"?3:J[6]==="attributes"?4:J[6]==="export"?5:-1}~(M=Re(i))&&(P=xe[M]=Le[M](i));const te=[e0,Qv],ne=[];function fe(J,de){return J[6]==="waterlevel"?0:1}V=fe(i),q=ne[V]=te[V](i);const N=[n0,t0],E=[];function $(J,de){return J[6]==="profiles"&&(J[7]||J[8]&&J[9]&&J[10])?0:1}ae=$(i),ie=E[ae]=N[ae](i);let re=i[1]&&Lu(i),Z=tt(i[11]);const le=J=>J[24].id;for(let J=0;J<Z.length;J+=1){let de=Au(i,Z,J),me=le(de);Q.set(me,F[J]=Du(me,de))}return{c(){e=A("div"),t=A("header"),n=A("div"),s=A("span"),s.textContent=r,o=j(),a=A("select");for(let J=0;J<pe.length;J+=1)pe[J].c();l=j(),u=A("button"),u.textContent=h,d=j(),g=A("div");for(let J=0;J<W.length;J+=1)W[J].c();v=j(),_=A("div"),p=A("span"),f=Te("钻孔: "),x=Te(b),R=Te(" | 岩性: "),y=Te(S),C=j(),D=A("div"),O=A("aside"),P&&P.c(),H=j(),Y=A("div"),L=j(),q.c(),ue=j(),se=A("main"),ie.c(),he=j(),re&&re.c(),ee=j(),ce=A("div");for(let J=0;J<F.length;J+=1)F[J].c();this.h()},l(J){e=T(J,"DIV",{class:!0});var de=z(e);t=T(de,"HEADER",{class:!0});var me=z(t);n=T(me,"DIV",{class:!0});var Ee=z(n);s=T(Ee,"SPAN",{class:!0,"data-svelte-h":!0}),Ie(s)!=="svelte-1m7r0r6"&&(s.textContent=r),o=X(Ee),a=T(Ee,"SELECT",{class:!0});var Oe=z(a);for(let k=0;k<pe.length;k+=1)pe[k].l(Oe);Oe.forEach(w),l=X(Ee),u=T(Ee,"BUTTON",{class:!0,"data-svelte-h":!0}),Ie(u)!=="svelte-1c65pm4"&&(u.textContent=h),Ee.forEach(w),d=X(me),g=T(me,"DIV",{class:!0});var be=z(g);for(let k=0;k<W.length;k+=1)W[k].l(be);be.forEach(w),v=X(me),_=T(me,"DIV",{class:!0});var ye=z(_);p=T(ye,"SPAN",{class:!0});var Be=z(p);f=Se(Be,"钻孔: "),x=Se(Be,b),R=Se(Be," | 岩性: "),y=Se(Be,S),Be.forEach(w),ye.forEach(w),me.forEach(w),C=X(de),D=T(de,"DIV",{class:!0});var We=z(D);O=T(We,"ASIDE",{class:!0});var ze=z(O);P&&P.l(ze),H=X(ze),Y=T(ze,"DIV",{class:!0}),z(Y).forEach(w),L=X(ze),q.l(ze),ze.forEach(w),ue=X(We),se=T(We,"MAIN",{class:!0});var Pe=z(se);ie.l(Pe),Pe.forEach(w),We.forEach(w),de.forEach(w),he=X(J),re&&re.l(J),ee=X(J),ce=T(J,"DIV",{class:!0});var qe=z(ce);for(let k=0;k<F.length;k+=1)F[k].l(qe);qe.forEach(w),this.h()},h(){I(s,"class","logo svelte-19z9xcn"),I(a,"class","svelte-19z9xcn"),I(u,"class","btn-secondary btn-sm"),I(n,"class","header-left svelte-19z9xcn"),I(g,"class","header-center svelte-19z9xcn"),I(p,"class","info-text svelte-19z9xcn"),I(_,"class","header-right svelte-19z9xcn"),I(t,"class","app-header svelte-19z9xcn"),I(Y,"class","divider svelte-19z9xcn"),I(O,"class","left-panel panel svelte-19z9xcn"),I(se,"class","main-content svelte-19z9xcn"),I(D,"class","app-body svelte-19z9xcn"),I(e,"class","app-layout svelte-19z9xcn"),I(ce,"class","toast-container")},m(J,de){_e(J,e,de),m(e,t),m(t,n),m(n,s),m(n,o),m(n,a);for(let me=0;me<pe.length;me+=1)pe[me]&&pe[me].m(a,null);yt(a,i[5]?i[5].id:""),m(n,l),m(n,u),m(t,d),m(t,g);for(let me=0;me<W.length;me+=1)W[me]&&W[me].m(g,null);m(t,v),m(t,_),m(_,p),m(p,f),m(p,x),m(p,R),m(p,y),m(e,C),m(e,D),m(D,O),~M&&xe[M].m(O,null),m(O,H),m(O,Y),m(O,L),ne[V].m(O,null),m(D,ue),m(D,se),E[ae].m(se,null),_e(J,he,de),re&&re.m(J,de),_e(J,ee,de),_e(J,ce,de);for(let me=0;me<F.length;me+=1)F[me]&&F[me].m(ce,null);ve=!0,U||(G=[Ve(a,"change",i[15]),Ve(u,"click",i[16])],U=!0)},p(J,de){if(de[0]&1){oe=tt(J[0]);let be;for(be=0;be<oe.length;be+=1){const ye=Cu(J,oe,be);pe[be]?pe[be].p(ye,de):(pe[be]=Ru(ye),pe[be].c(),pe[be].m(a,null))}for(;be<pe.length;be+=1)pe[be].d(1);pe.length=oe.length}if((!ve||de[0]&33&&c!==(c=J[5]?J[5].id:""))&&yt(a,J[5]?J[5].id:""),de[0]&16448){Ce=tt(J[14]);let be;for(be=0;be<Ce.length;be+=1){const ye=wu(J,Ce,be);W[be]?W[be].p(ye,de):(W[be]=Pu(ye),W[be].c(),W[be].m(g,null))}for(;be<W.length;be+=1)W[be].d(1);W.length=Ce.length}(!ve||de[0]&16)&&b!==(b=J[4].length+"")&&Ke(x,b),(!ve||de[0]&8)&&S!==(S=J[3].length+"")&&Ke(y,S);let me=M;M=Re(J),M!==me&&(P&&(Us(),Ut(xe[me],1,1,()=>{xe[me]=null}),Ns()),~M?(P=xe[M],P||(P=xe[M]=Le[M](J),P.c()),It(P,1),P.m(O,H)):P=null);let Ee=V;V=fe(J),V!==Ee&&(Us(),Ut(ne[Ee],1,1,()=>{ne[Ee]=null}),Ns(),q=ne[V],q||(q=ne[V]=te[V](J),q.c()),It(q,1),q.m(O,null));let Oe=ae;ae=$(J),ae!==Oe&&(Us(),Ut(E[Oe],1,1,()=>{E[Oe]=null}),Ns(),ie=E[ae],ie||(ie=E[ae]=N[ae](J),ie.c()),It(ie,1),ie.m(se,null)),J[1]?re?re.p(J,de):(re=Lu(J),re.c(),re.m(ee.parentNode,ee)):re&&(re.d(1),re=null),de[0]&2048&&(Z=tt(J[11]),Us(),F=xh(F,de,le,1,J,Z,Q,ce,vh,Du,null,Au),Ns())},i(J){if(!ve){It(P),It(q),It(ie);for(let de=0;de<Z.length;de+=1)It(F[de]);ve=!0}},o(J){Ut(P),Ut(q),Ut(ie);for(let de=0;de<F.length;de+=1)Ut(F[de]);ve=!1},d(J){J&&(w(e),w(he),w(ee),w(ce)),Tt(pe,J),Tt(W,J),~M&&xe[M].d(),ne[V].d(),E[ae].d(),re&&re.d(J);for(let de=0;de<F.length;de+=1)F[de].d();U=!1,wt(G)}}}function s0(i,e,t){let n,s,r,o,a,c,l,u,h,d,g;Ze(i,As,P=>t(22,n=P)),Ze(i,Ts,P=>t(23,s=P)),Ze(i,$n,P=>t(3,r=P)),Ze(i,kn,P=>t(4,o=P)),Ze(i,On,P=>t(5,a=P)),Ze(i,Vo,P=>t(6,c=P)),Ze(i,fr,P=>t(7,l=P)),Ze(i,dr,P=>t(8,u=P)),Ze(i,Ms,P=>t(9,h=P)),Ze(i,ys,P=>t(10,d=P)),Ze(i,Cs,P=>t(11,g=P));let v=[],_=!1,p="";yr(async()=>{try{t(0,v=await ht.get("/projects")),v.length>0&&await f(v[0].id)}catch(P){console.error(P)}});async function f(P){try{const H=await ht.get(`/projects/${P}`);nt(On,a=H,a);const[Y,L,V,q]=await Promise.all([ht.get(`/projects/${P}/boreholes`),ht.get(`/projects/${P}/lithology-types`),ht.get(`/projects/${P}/profiles`),ht.get(`/projects/${P}/modeling/runs`)]);nt(kn,o=Y,o),nt($n,r=L,r),nt(Ts,s=V,s),nt(As,n=q,n)}catch(H){$e(`加载项目失败: ${H.message}`,"error")}}async function b(){if(p.trim())try{const P=await ht.post("/projects",{name:p.trim()});t(0,v=[...v,P]),t(1,_=!1),t(2,p=""),await f(P.id),$e("项目创建成功","success")}catch(P){$e(`创建失败: ${P.message}`,"error")}}const x=[{id:"boreholes",label:"钻孔数据",icon:"⊕"},{id:"profiles",label:"剖面分析",icon:"☷"},{id:"modeling",label:"三维建模",icon:"◆"},{id:"waterlevel",label:"地下水位",icon:"◈"},{id:"attributes",label:"属性场",icon:"◇"},{id:"export",label:"成果导出",icon:"↓"}],R=P=>f(P.target.value),S=()=>t(1,_=!0),y=P=>nt(Vo,c=P.id,c);function C(){p=this.value,t(2,p)}return[v,_,p,r,o,a,c,l,u,h,d,g,f,b,x,R,S,y,C,P=>P.key==="Enter"&&b(),()=>t(1,_=!1),()=>t(1,_=!1)]}class r0 extends un{constructor(e){super(),hn(this,e,s0,i0,cn,{},null,[-1,-1])}}function o0(i){let e,t;return e=new r0({}),{c(){vn(e.$$.fragment)},l(n){gn(e.$$.fragment,n)},m(n,s){_n(e,n,s),t=!0},p:Et,i(n){t||(It(e.$$.fragment,n),t=!0)},o(n){Ut(e.$$.fragment,n),t=!1},d(n){mn(e,n)}}}class h0 extends un{constructor(e){super(),hn(this,e,null,o0,cn,{})}}export{h0 as component,u0 as universal};
