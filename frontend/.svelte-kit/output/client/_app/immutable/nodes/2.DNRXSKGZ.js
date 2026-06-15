import{r as Lt,s as Sn,n as bt,c as nt,x as mt,p as ai,d as fc,t as Js,e as xr,o as ca}from"../chunks/CkO2QsTZ.js";import{l as qt,k as jt,S as bn,i as yn,d as I,s as Qe,a as Re,b as v,y as ze,w as z,x as we,c as w,e as ne,z as Le,g as Q,f as Fe,o as Rn,h as C,j as ee,t as Be,A as Vt,B as ua,C as He,D as ot,E as tr,F as Ft,G as ni,q as Pn,m as gs,n as vs,u as Ln,v as Dn,r as In}from"../chunks/DFkIi2GE.js";import{w as Ut}from"../chunks/DFIh0oqn.js";function _t(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function Zc(i,e){jt(i,1,1,()=>{e.delete(i.key)})}function $c(i,e,t,n,r,s,a,o,c,l,u,h){let f=i.length,_=s.length,m=f;const g={};for(;m--;)g[i[m].key]=m;const p=[],d=new Map,b=new Map,M=[];for(m=_;m--;){const y=h(r,s,m),L=t(y);let k=a.get(L);k?M.push(()=>k.p(y,e)):(k=l(L,y),k.c()),d.set(L,p[m]=k),L in g&&b.set(L,Math.abs(m-g[L]))}const R=new Set,P=new Set;function A(y){qt(y,1),y.m(o,u),a.set(y.key,y),u=y.first,_--}for(;f&&_;){const y=p[_-1],L=i[f-1],k=y.key,x=L.key;y===L?(u=y.first,f--,_--):d.has(x)?!a.has(k)||R.has(k)?A(y):P.has(x)?f--:b.get(k)>b.get(x)?(P.add(k),A(y)):(R.add(x),f--):(c(L,a),f--)}for(;f--;){const y=i[f];d.has(y.key)||c(y,a)}for(;_;)A(p[_-1]);return Lt(M),p}const Jc=!1,Qc=!0,pg=Object.freeze(Object.defineProperty({__proto__:null,prerender:Qc,ssr:Jc},Symbol.toStringTag,{value:"Module"})),Si=Ut(null),bi=Ut([]),jn=Ut([]),Er=Ut([]),Mr=Ut([]),Jr=Ut(null),Qr=Ut(null),es=Ut({mode:"voxel",isosurfaceValue:0,colorMin:0,colorMax:100}),Sr=Ut([]);function Ze(i,e="info",t=4e3){const n=Date.now();Sr.update(r=>[...r,{id:n,message:i,type:e}]),t>0&&setTimeout(()=>{Sr.update(r=>r.filter(s=>s.id!==n))},t)}const Kr=Ut([]),fr=Ut({status:"idle",progress:0,runId:null}),qi=Ut({}),ji=Ut({}),Yi=Ut({enabled:!1,normal:[0,0,-1],position:[0,0,0]}),ya=Ut(null),Ta=Ut("boreholes"),sn=Ut(null),ts=Ut(null),Gn=Ut({orthoImage:null,demImage:null,opacity:1,visible:!0}),eu="/api";async function dn(i,e,t=null,n={}){const r=`${eu}${e}`,s={};t&&!(t instanceof FormData)&&(s["Content-Type"]="application/json");const a=await fetch(r,{method:i,headers:s,body:t instanceof FormData?t:t?JSON.stringify(t):null,...n});if(a.status===204)return null;if(!a.ok){const c=a.headers.get("content-type");if(c&&c.includes("application/json")){const l=await a.json().catch(()=>({detail:a.statusText}));throw new Error(l.detail||`请求失败 (${a.status}): ${a.statusText}`)}throw new Error(`请求失败 (${a.status}): ${a.statusText}`)}if(n.raw)return a;const o=a.headers.get("content-type");return o&&o.includes("application/json")?a.json():a}const vt={get:(i,e)=>dn("GET",i,null,e),post:(i,e,t)=>dn("POST",i,e,t),put:(i,e,t)=>dn("PUT",i,e,t),patch:(i,e,t)=>dn("PATCH",i,e,t),delete:(i,e)=>dn("DELETE",i,null,e),uploadCsv:(i,e)=>{const t=new FormData;return t.append("file",e),dn("POST",`/projects/${i}/boreholes/import-csv`,t)},exportGltf:i=>dn("GET",`/export/gltf/${i}`,null,{raw:!0}),exportProfilePng:i=>dn("GET",`/export/profile/${i}/png`,null,{raw:!0}),exportProfileSvg:i=>dn("GET",`/export/profile/${i}/svg`,null,{raw:!0}),exportStatsExcel:i=>dn("GET",`/export/stats/${i}/excel`,null,{raw:!0}),exportReportPdf:i=>dn("GET",`/export/report/${i}/pdf`,null,{raw:!0}),downloadBlob:async(i,e)=>{const n=await(await dn("GET",i,null,{raw:!0})).blob(),r=URL.createObjectURL(n),s=document.createElement("a");s.href=r,s.download=e,s.click(),URL.revokeObjectURL(r)}};function Aa(i,e,t){const n=i.slice();return n[38]=e[t],n[39]=e,n[40]=t,n}function wa(i,e,t){const n=i.slice();return n[41]=e[t],n}function Ca(i,e,t){const n=i.slice();return n[44]=e[t],n}function Ra(i,e,t){const n=i.slice();return n[47]=e[t],n}function Pa(i,e,t){const n=i.slice();n[38]=e[t];const r=n[7].find(function(...a){return i[22](n[38],...a)});return n[50]=r,n}function La(i,e,t){const n=i.slice();return n[50]=e[t],n[53]=e,n[54]=t,n}function Da(i){let e,t,n="岩性颜色映射",r,s,a,o=_t(i[7]),c=[];for(let l=0;l<o.length;l+=1)c[l]=Ia(La(i,o,l));return{c(){e=C("div"),t=C("h4"),t.textContent=n,r=ee();for(let l=0;l<c.length;l+=1)c[l].c();s=ee(),a=C("hr"),this.h()},l(l){e=w(l,"DIV",{class:!0});var u=ne(e);t=w(u,"H4",{style:!0,"data-svelte-h":!0}),Le(t)!=="svelte-i0dhp9"&&(t.textContent=n),r=Q(u);for(let h=0;h<c.length;h+=1)c[h].l(u);u.forEach(I),s=Q(l),a=w(l,"HR",{style:!0}),this.h()},h(){we(t,"margin-bottom","8px"),we(t,"font-size","13px"),z(e,"class","color-editor svelte-pmzzll"),we(a,"border-color","var(--border)"),we(a,"margin","12px 0")},m(l,u){Re(l,e,u),v(e,t),v(e,r);for(let h=0;h<c.length;h+=1)c[h]&&c[h].m(e,null);Re(l,s,u),Re(l,a,u)},p(l,u){if(u[0]&16512){o=_t(l[7]);let h;for(h=0;h<o.length;h+=1){const f=La(l,o,h);c[h]?c[h].p(f,u):(c[h]=Ia(f),c[h].c(),c[h].m(e,null))}for(;h<c.length;h+=1)c[h].d(1);c.length=o.length}},d(l){l&&(I(e),I(s),I(a)),Vt(c,l)}}}function Ia(i){let e,t,n,r,s=i[50].name+"",a,o,c,l;function u(){i[17].call(t,i[53],i[54])}function h(){return i[18](i[50])}return{c(){e=C("div"),t=C("input"),n=ee(),r=C("span"),a=Be(s),o=ee(),this.h()},l(f){e=w(f,"DIV",{class:!0});var _=ne(e);t=w(_,"INPUT",{type:!0}),n=Q(_),r=w(_,"SPAN",{});var m=ne(r);a=Fe(m,s),m.forEach(I),o=Q(_),_.forEach(I),this.h()},h(){z(t,"type","color"),z(e,"class","color-row svelte-pmzzll")},m(f,_){Re(f,e,_),v(e,t),He(t,i[50].color),v(e,n),v(e,r),v(r,a),v(e,o),c||(l=[ze(t,"input",u),ze(t,"change",h)],c=!0)},p(f,_){i=f,_[0]&128&&He(t,i[50].color),_[0]&128&&s!==(s=i[50].name+"")&&Qe(a,s)},d(f){f&&I(e),c=!1,Lt(l)}}}function tu(i){let e,t=_t(i[8]),n=[];for(let r=0;r<t.length;r+=1)n[r]=Na(Ra(i,t,r));return{c(){e=C("div");for(let r=0;r<n.length;r+=1)n[r].c();this.h()},l(r){e=w(r,"DIV",{class:!0});var s=ne(e);for(let a=0;a<n.length;a+=1)n[a].l(s);s.forEach(I),this.h()},h(){z(e,"class","borehole-list")},m(r,s){Re(r,e,s);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(e,null)},p(r,s){if(s[0]&11680){t=_t(r[8]);let a;for(a=0;a<t.length;a+=1){const o=Ra(r,t,a);n[a]?n[a].p(o,s):(n[a]=Na(o),n[a].c(),n[a].m(e,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=t.length}},d(r){r&&I(e),Vt(n,r)}}}function nu(i){let e,t='<p>暂无钻孔数据</p> <p style="font-size:12px;color:var(--text-muted);margin-top:4px;">点击&quot;导入CSV&quot;添加钻孔数据</p>';return{c(){e=C("div"),e.innerHTML=t,this.h()},l(n){e=w(n,"DIV",{class:!0,"data-svelte-h":!0}),Le(e)!=="svelte-b2zuvh"&&(e.innerHTML=t),this.h()},h(){z(e,"class","empty-state svelte-pmzzll")},m(n,r){Re(n,e,r)},p:bt,d(n){n&&I(e)}}}function Ua(i){let e,t;return{c(){e=C("div"),this.h()},l(n){e=w(n,"DIV",{class:!0,style:!0,title:!0});var r=ne(e);r.forEach(I),this.h()},h(){var n;z(e,"class","layer-chip svelte-pmzzll"),we(e,"background",((n=i[50])==null?void 0:n.color)||"#888"),we(e,"flex",i[38].bottom_depth-i[38].top_depth),z(e,"title",t=i[38].lithology_name+": "+i[38].top_depth+"-"+i[38].bottom_depth+"m")},m(n,r){Re(n,e,r)},p(n,r){var s;r[0]&384&&we(e,"background",((s=n[50])==null?void 0:s.color)||"#888"),r[0]&256&&we(e,"flex",n[38].bottom_depth-n[38].top_depth),r[0]&256&&t!==(t=n[38].lithology_name+": "+n[38].top_depth+"-"+n[38].bottom_depth+"m")&&z(e,"title",t)},d(n){n&&I(e)}}}function Na(i){let e,t,n,r,s,a,o,c=i[47].hole_id+"",l,u,h,f,_="编辑",m,g,p="删除",d,b,M,R,P=i[47].longitude.toFixed(5)+"",A,y,L=i[47].latitude.toFixed(5)+"",k,x,T,$,te=i[47].elevation.toFixed(2)+"",N,K,X,re,D=i[47].layers.length+"",O,Y,j,J,ae,q,G;function he(){return i[19](i[47])}function ie(){return i[20](i[47])}function W(){return i[21](i[47])}let se=_t(i[47].layers),Z=[];for(let pe=0;pe<se.length;pe+=1)Z[pe]=Ua(Pa(i,se,pe));return{c(){e=C("div"),t=C("div"),n=C("label"),r=C("input"),a=ee(),o=C("strong"),l=Be(c),u=ee(),h=C("div"),f=C("button"),f.textContent=_,m=ee(),g=C("button"),g.textContent=p,d=ee(),b=C("div"),M=C("span"),R=Be("坐标: "),A=Be(P),y=Be(", "),k=Be(L),x=ee(),T=C("span"),$=Be("高程: "),N=Be(te),K=Be("m"),X=ee(),re=C("span"),O=Be(D),Y=Be(" 层"),j=ee(),J=C("div");for(let pe=0;pe<Z.length;pe+=1)Z[pe].c();ae=ee(),this.h()},l(pe){e=w(pe,"DIV",{class:!0});var V=ne(e);t=w(V,"DIV",{class:!0});var Ce=ne(t);n=w(Ce,"LABEL",{class:!0});var fe=ne(n);r=w(fe,"INPUT",{type:!0}),a=Q(fe),o=w(fe,"STRONG",{});var Te=ne(o);l=Fe(Te,c),Te.forEach(I),fe.forEach(I),u=Q(Ce),h=w(Ce,"DIV",{class:!0});var le=ne(h);f=w(le,"BUTTON",{class:!0,"data-svelte-h":!0}),Le(f)!=="svelte-qjn1px"&&(f.textContent=_),m=Q(le),g=w(le,"BUTTON",{class:!0,"data-svelte-h":!0}),Le(g)!=="svelte-3c3ohz"&&(g.textContent=p),le.forEach(I),Ce.forEach(I),d=Q(V),b=w(V,"DIV",{class:!0});var Pe=ne(b);M=w(Pe,"SPAN",{});var oe=ne(M);R=Fe(oe,"坐标: "),A=Fe(oe,P),y=Fe(oe,", "),k=Fe(oe,L),oe.forEach(I),x=Q(Pe),T=w(Pe,"SPAN",{});var S=ne(T);$=Fe(S,"高程: "),N=Fe(S,te),K=Fe(S,"m"),S.forEach(I),X=Q(Pe),re=w(Pe,"SPAN",{});var E=ne(re);O=Fe(E,D),Y=Fe(E," 层"),E.forEach(I),Pe.forEach(I),j=Q(V),J=w(V,"DIV",{class:!0});var F=ne(J);for(let ue=0;ue<Z.length;ue+=1)Z[ue].l(F);F.forEach(I),ae=Q(V),V.forEach(I),this.h()},h(){z(r,"type","checkbox"),r.checked=s=i[5].includes(i[47].id),z(n,"class","checkbox-label"),z(f,"class","btn-secondary btn-sm"),z(g,"class","btn-danger btn-sm"),z(h,"class","card-actions svelte-pmzzll"),z(t,"class","card-header svelte-pmzzll"),z(b,"class","card-info svelte-pmzzll"),z(J,"class","layer-bar svelte-pmzzll"),z(e,"class","borehole-card svelte-pmzzll"),tr(e,"selected",i[5].includes(i[47].id))},m(pe,V){Re(pe,e,V),v(e,t),v(t,n),v(n,r),v(n,a),v(n,o),v(o,l),v(t,u),v(t,h),v(h,f),v(h,m),v(h,g),v(e,d),v(e,b),v(b,M),v(M,R),v(M,A),v(M,y),v(M,k),v(b,x),v(b,T),v(T,$),v(T,N),v(T,K),v(b,X),v(b,re),v(re,O),v(re,Y),v(e,j),v(e,J);for(let Ce=0;Ce<Z.length;Ce+=1)Z[Ce]&&Z[Ce].m(J,null);v(e,ae),q||(G=[ze(r,"change",he),ze(f,"click",ie),ze(g,"click",W)],q=!0)},p(pe,V){if(i=pe,V[0]&288&&s!==(s=i[5].includes(i[47].id))&&(r.checked=s),V[0]&256&&c!==(c=i[47].hole_id+"")&&Qe(l,c),V[0]&256&&P!==(P=i[47].longitude.toFixed(5)+"")&&Qe(A,P),V[0]&256&&L!==(L=i[47].latitude.toFixed(5)+"")&&Qe(k,L),V[0]&256&&te!==(te=i[47].elevation.toFixed(2)+"")&&Qe(N,te),V[0]&256&&D!==(D=i[47].layers.length+"")&&Qe(O,D),V[0]&384){se=_t(i[47].layers);let Ce;for(Ce=0;Ce<se.length;Ce+=1){const fe=Pa(i,se,Ce);Z[Ce]?Z[Ce].p(fe,V):(Z[Ce]=Ua(fe),Z[Ce].c(),Z[Ce].m(J,null))}for(;Ce<Z.length;Ce+=1)Z[Ce].d(1);Z.length=se.length}V[0]&288&&tr(e,"selected",i[5].includes(i[47].id))},d(pe){pe&&I(e),Vt(Z,pe),q=!1,Lt(G)}}}function Oa(i){let e,t,n,r="导入钻孔CSV数据",s,a,o=`CSV字段: hole_id/孔号, longitude/经度, latitude/纬度, elevation/高程,
                layer_no/层号, top_depth/层顶深度, bottom_depth/层底深度, lithology/岩性,
                spt_n/标贯N值, water_content/含水量, compression_modulus/压缩模量`,c,l,u,h,f,_,m,g="关闭",p,d,b=i[2]?"导入中...":"开始导入",M,R,P,A,y=i[3]&&Fa(i);return{c(){e=C("div"),t=C("div"),n=C("h3"),n.textContent=r,s=ee(),a=C("p"),a.textContent=o,c=ee(),l=C("div"),u=C("input"),h=ee(),y&&y.c(),f=ee(),_=C("div"),m=C("button"),m.textContent=g,p=ee(),d=C("button"),M=Be(b),this.h()},l(L){e=w(L,"DIV",{class:!0});var k=ne(e);t=w(k,"DIV",{class:!0});var x=ne(t);n=w(x,"H3",{"data-svelte-h":!0}),Le(n)!=="svelte-rl92uc"&&(n.textContent=r),s=Q(x),a=w(x,"P",{style:!0,"data-svelte-h":!0}),Le(a)!=="svelte-p50xxs"&&(a.textContent=o),c=Q(x),l=w(x,"DIV",{class:!0});var T=ne(l);u=w(T,"INPUT",{type:!0,accept:!0}),T.forEach(I),h=Q(x),y&&y.l(x),f=Q(x),_=w(x,"DIV",{class:!0});var $=ne(_);m=w($,"BUTTON",{class:!0,"data-svelte-h":!0}),Le(m)!=="svelte-1wvy2wc"&&(m.textContent=g),p=Q($),d=w($,"BUTTON",{class:!0});var te=ne(d);M=Fe(te,b),te.forEach(I),$.forEach(I),x.forEach(I),k.forEach(I),this.h()},h(){we(a,"font-size","12px"),we(a,"color","var(--text-secondary)"),we(a,"margin-bottom","12px"),z(u,"type","file"),z(u,"accept",".csv"),z(l,"class","form-group"),z(m,"class","btn-secondary"),z(d,"class","btn-primary"),d.disabled=R=!i[1]||i[2],z(_,"class","modal-actions"),z(t,"class","modal"),z(e,"class","modal-overlay")},m(L,k){Re(L,e,k),v(e,t),v(t,n),v(t,s),v(t,a),v(t,c),v(t,l),v(l,u),v(t,h),y&&y.m(t,null),v(t,f),v(t,_),v(_,m),v(_,p),v(_,d),v(d,M),P||(A=[ze(u,"change",i[23]),ze(m,"click",i[24]),ze(d,"click",i[9]),ze(e,"click",ua(i[25]))],P=!0)},p(L,k){L[3]?y?y.p(L,k):(y=Fa(L),y.c(),y.m(t,f)):y&&(y.d(1),y=null),k[0]&4&&b!==(b=L[2]?"导入中...":"开始导入")&&Qe(M,b),k[0]&6&&R!==(R=!L[1]||L[2])&&(d.disabled=R)},d(L){L&&I(e),y&&y.d(),P=!1,Lt(A)}}}function Fa(i){let e,t,n,r=i[3].imported+"",s,a,o,c,l=i[3].errors.length>0&&Ba(i),u=i[3].warnings.length>0&&ka(i);return{c(){e=C("div"),t=C("p"),n=Be("成功导入: "),s=Be(r),a=Be(" 个钻孔"),o=ee(),l&&l.c(),c=ee(),u&&u.c(),this.h()},l(h){e=w(h,"DIV",{class:!0});var f=ne(e);t=w(f,"P",{class:!0});var _=ne(t);n=Fe(_,"成功导入: "),s=Fe(_,r),a=Fe(_," 个钻孔"),_.forEach(I),o=Q(f),l&&l.l(f),c=Q(f),u&&u.l(f),f.forEach(I),this.h()},h(){z(t,"class","badge badge-success svelte-pmzzll"),z(e,"class","import-result svelte-pmzzll")},m(h,f){Re(h,e,f),v(e,t),v(t,n),v(t,s),v(t,a),v(e,o),l&&l.m(e,null),v(e,c),u&&u.m(e,null)},p(h,f){f[0]&8&&r!==(r=h[3].imported+"")&&Qe(s,r),h[3].errors.length>0?l?l.p(h,f):(l=Ba(h),l.c(),l.m(e,c)):l&&(l.d(1),l=null),h[3].warnings.length>0?u?u.p(h,f):(u=ka(h),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},d(h){h&&I(e),l&&l.d(),u&&u.d()}}}function Ba(i){let e,t=_t(i[3].errors),n=[];for(let r=0;r<t.length;r+=1)n[r]=za(Ca(i,t,r));return{c(){e=C("div");for(let r=0;r<n.length;r+=1)n[r].c();this.h()},l(r){e=w(r,"DIV",{class:!0});var s=ne(e);for(let a=0;a<n.length;a+=1)n[a].l(s);s.forEach(I),this.h()},h(){z(e,"class","errors")},m(r,s){Re(r,e,s);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(e,null)},p(r,s){if(s[0]&8){t=_t(r[3].errors);let a;for(a=0;a<t.length;a+=1){const o=Ca(r,t,a);n[a]?n[a].p(o,s):(n[a]=za(o),n[a].c(),n[a].m(e,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=t.length}},d(r){r&&I(e),Vt(n,r)}}}function za(i){let e,t=i[44]+"",n;return{c(){e=C("p"),n=Be(t),this.h()},l(r){e=w(r,"P",{class:!0});var s=ne(e);n=Fe(s,t),s.forEach(I),this.h()},h(){z(e,"class","badge badge-danger svelte-pmzzll")},m(r,s){Re(r,e,s),v(e,n)},p(r,s){s[0]&8&&t!==(t=r[44]+"")&&Qe(n,t)},d(r){r&&I(e)}}}function ka(i){let e,t=_t(i[3].warnings),n=[];for(let r=0;r<t.length;r+=1)n[r]=Va(wa(i,t,r));return{c(){e=C("div");for(let r=0;r<n.length;r+=1)n[r].c();this.h()},l(r){e=w(r,"DIV",{class:!0});var s=ne(e);for(let a=0;a<n.length;a+=1)n[a].l(s);s.forEach(I),this.h()},h(){z(e,"class","warnings")},m(r,s){Re(r,e,s);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(e,null)},p(r,s){if(s[0]&8){t=_t(r[3].warnings);let a;for(a=0;a<t.length;a+=1){const o=wa(r,t,a);n[a]?n[a].p(o,s):(n[a]=Va(o),n[a].c(),n[a].m(e,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=t.length}},d(r){r&&I(e),Vt(n,r)}}}function Va(i){let e,t=i[41]+"",n;return{c(){e=C("p"),n=Be(t),this.h()},l(r){e=w(r,"P",{class:!0});var s=ne(e);n=Fe(s,t),s.forEach(I),this.h()},h(){z(e,"class","badge badge-warning svelte-pmzzll")},m(r,s){Re(r,e,s),v(e,n)},p(r,s){s[0]&8&&t!==(t=r[41]+"")&&Qe(n,t)},d(r){r&&I(e)}}}function Ha(i){let e,t,n,r,s=i[6].hole_id+"",a,o,c,l,u,h="孔号",f,_,m,g,p,d="高程(m)",b,M,R,P,A,y,L="经度",k,x,T,$,te,N="纬度",K,X,re,D,O="分层信息",Y,j,J,ae,q="<tr><th>层号</th> <th>层顶(m)</th> <th>层底(m)</th> <th>岩性</th> <th>标贯N</th></tr>",G,he,ie,W,se,Z="取消",pe,V,Ce="保存",fe,Te,le=_t(i[6].layers),Pe=[];for(let oe=0;oe<le.length;oe+=1)Pe[oe]=Ga(Aa(i,le,oe));return{c(){e=C("div"),t=C("div"),n=C("h3"),r=Be("编辑钻孔 - "),a=Be(s),o=ee(),c=C("div"),l=C("div"),u=C("label"),u.textContent=h,f=ee(),_=C("input"),m=ee(),g=C("div"),p=C("label"),p.textContent=d,b=ee(),M=C("input"),R=ee(),P=C("div"),A=C("div"),y=C("label"),y.textContent=L,k=ee(),x=C("input"),T=ee(),$=C("div"),te=C("label"),te.textContent=N,K=ee(),X=C("input"),re=ee(),D=C("h4"),D.textContent=O,Y=ee(),j=C("div"),J=C("table"),ae=C("thead"),ae.innerHTML=q,G=ee(),he=C("tbody");for(let oe=0;oe<Pe.length;oe+=1)Pe[oe].c();ie=ee(),W=C("div"),se=C("button"),se.textContent=Z,pe=ee(),V=C("button"),V.textContent=Ce,this.h()},l(oe){e=w(oe,"DIV",{class:!0});var S=ne(e);t=w(S,"DIV",{class:!0,style:!0});var E=ne(t);n=w(E,"H3",{});var F=ne(n);r=Fe(F,"编辑钻孔 - "),a=Fe(F,s),F.forEach(I),o=Q(E),c=w(E,"DIV",{class:!0,style:!0});var ue=ne(c);l=w(ue,"DIV",{class:!0});var ce=ne(l);u=w(ce,"LABEL",{"data-svelte-h":!0}),Le(u)!=="svelte-natzrr"&&(u.textContent=h),f=Q(ce),_=w(ce,"INPUT",{type:!0}),ce.forEach(I),m=Q(ue),g=w(ue,"DIV",{class:!0});var ge=ne(g);p=w(ge,"LABEL",{"data-svelte-h":!0}),Le(p)!=="svelte-1xtfx5p"&&(p.textContent=d),b=Q(ge),M=w(ge,"INPUT",{type:!0,step:!0}),ge.forEach(I),ue.forEach(I),R=Q(E),P=w(E,"DIV",{class:!0,style:!0});var Me=ne(P);A=w(Me,"DIV",{class:!0});var Ee=ne(A);y=w(Ee,"LABEL",{"data-svelte-h":!0}),Le(y)!=="svelte-ndgehb"&&(y.textContent=L),k=Q(Ee),x=w(Ee,"INPUT",{type:!0,step:!0}),Ee.forEach(I),T=Q(Me),$=w(Me,"DIV",{class:!0});var be=ne($);te=w(be,"LABEL",{"data-svelte-h":!0}),Le(te)!=="svelte-h6t6m2"&&(te.textContent=N),K=Q(be),X=w(be,"INPUT",{type:!0,step:!0}),be.forEach(I),Me.forEach(I),re=Q(E),D=w(E,"H4",{style:!0,"data-svelte-h":!0}),Le(D)!=="svelte-ltk5jk"&&(D.textContent=O),Y=Q(E),j=w(E,"DIV",{class:!0});var Ie=ne(j);J=w(Ie,"TABLE",{});var Xe=ne(J);ae=w(Xe,"THEAD",{"data-svelte-h":!0}),Le(ae)!=="svelte-qllypy"&&(ae.innerHTML=q),G=Q(Xe),he=w(Xe,"TBODY",{});var Ae=ne(he);for(let Ye=0;Ye<Pe.length;Ye+=1)Pe[Ye].l(Ae);Ae.forEach(I),Xe.forEach(I),Ie.forEach(I),ie=Q(E),W=w(E,"DIV",{class:!0});var We=ne(W);se=w(We,"BUTTON",{class:!0,"data-svelte-h":!0}),Le(se)!=="svelte-1xgwxe6"&&(se.textContent=Z),pe=Q(We),V=w(We,"BUTTON",{class:!0,"data-svelte-h":!0}),Le(V)!=="svelte-1qz0hu8"&&(V.textContent=Ce),We.forEach(I),E.forEach(I),S.forEach(I),this.h()},h(){z(_,"type","text"),z(l,"class","form-group"),z(M,"type","number"),z(M,"step","0.01"),z(g,"class","form-group"),z(c,"class","form-row"),we(c,"margin-bottom","12px"),z(x,"type","number"),z(x,"step","0.000001"),z(A,"class","form-group"),z(X,"type","number"),z(X,"step","0.000001"),z($,"class","form-group"),z(P,"class","form-row"),we(P,"margin-bottom","12px"),we(D,"margin","12px 0 8px"),we(D,"font-size","13px"),z(j,"class","layers-table svelte-pmzzll"),z(se,"class","btn-secondary"),z(V,"class","btn-primary"),z(W,"class","modal-actions"),z(t,"class","modal"),we(t,"min-width","600px"),z(e,"class","modal-overlay")},m(oe,S){Re(oe,e,S),v(e,t),v(t,n),v(n,r),v(n,a),v(t,o),v(t,c),v(c,l),v(l,u),v(l,f),v(l,_),He(_,i[6].hole_id),v(c,m),v(c,g),v(g,p),v(g,b),v(g,M),He(M,i[6].elevation),v(t,R),v(t,P),v(P,A),v(A,y),v(A,k),v(A,x),He(x,i[6].longitude),v(P,T),v(P,$),v($,te),v($,K),v($,X),He(X,i[6].latitude),v(t,re),v(t,D),v(t,Y),v(t,j),v(j,J),v(J,ae),v(J,G),v(J,he);for(let E=0;E<Pe.length;E+=1)Pe[E]&&Pe[E].m(he,null);v(t,ie),v(t,W),v(W,se),v(W,pe),v(W,V),fe||(Te=[ze(_,"input",i[26]),ze(M,"input",i[27]),ze(x,"input",i[28]),ze(X,"input",i[29]),ze(se,"click",i[34]),ze(V,"click",i[12]),ze(e,"click",ua(i[35]))],fe=!0)},p(oe,S){if(S[0]&64&&s!==(s=oe[6].hole_id+"")&&Qe(a,s),S[0]&64&&_.value!==oe[6].hole_id&&He(_,oe[6].hole_id),S[0]&64&&ot(M.value)!==oe[6].elevation&&He(M,oe[6].elevation),S[0]&64&&ot(x.value)!==oe[6].longitude&&He(x,oe[6].longitude),S[0]&64&&ot(X.value)!==oe[6].latitude&&He(X,oe[6].latitude),S[0]&64){le=_t(oe[6].layers);let E;for(E=0;E<le.length;E+=1){const F=Aa(oe,le,E);Pe[E]?Pe[E].p(F,S):(Pe[E]=Ga(F),Pe[E].c(),Pe[E].m(he,null))}for(;E<Pe.length;E+=1)Pe[E].d(1);Pe.length=le.length}},d(oe){oe&&I(e),Vt(Pe,oe),fe=!1,Lt(Te)}}}function Ga(i){let e,t,n=i[38].layer_no+"",r,s,a,o,c,l,u,h,f,_,m,g,p,d,b,M;function R(){i[30].call(o,i[39],i[40])}function P(){i[31].call(u,i[39],i[40])}function A(){i[32].call(_,i[39],i[40])}function y(){i[33].call(p,i[39],i[40])}return{c(){e=C("tr"),t=C("td"),r=Be(n),s=ee(),a=C("td"),o=C("input"),c=ee(),l=C("td"),u=C("input"),h=ee(),f=C("td"),_=C("input"),m=ee(),g=C("td"),p=C("input"),d=ee(),this.h()},l(L){e=w(L,"TR",{});var k=ne(e);t=w(k,"TD",{});var x=ne(t);r=Fe(x,n),x.forEach(I),s=Q(k),a=w(k,"TD",{});var T=ne(a);o=w(T,"INPUT",{type:!0,step:!0,style:!0,class:!0}),T.forEach(I),c=Q(k),l=w(k,"TD",{});var $=ne(l);u=w($,"INPUT",{type:!0,step:!0,style:!0,class:!0}),$.forEach(I),h=Q(k),f=w(k,"TD",{});var te=ne(f);_=w(te,"INPUT",{type:!0,style:!0,class:!0}),te.forEach(I),m=Q(k),g=w(k,"TD",{});var N=ne(g);p=w(N,"INPUT",{type:!0,step:!0,style:!0,class:!0}),N.forEach(I),d=Q(k),k.forEach(I),this.h()},h(){z(o,"type","number"),z(o,"step","0.1"),we(o,"width","70px"),z(o,"class","svelte-pmzzll"),z(u,"type","number"),z(u,"step","0.1"),we(u,"width","70px"),z(u,"class","svelte-pmzzll"),z(_,"type","text"),we(_,"width","100px"),z(_,"class","svelte-pmzzll"),z(p,"type","number"),z(p,"step","0.1"),we(p,"width","60px"),z(p,"class","svelte-pmzzll")},m(L,k){Re(L,e,k),v(e,t),v(t,r),v(e,s),v(e,a),v(a,o),He(o,i[38].top_depth),v(e,c),v(e,l),v(l,u),He(u,i[38].bottom_depth),v(e,h),v(e,f),v(f,_),He(_,i[38].lithology_name),v(e,m),v(e,g),v(g,p),He(p,i[38].spt_n),v(e,d),b||(M=[ze(o,"input",R),ze(u,"input",P),ze(_,"input",A),ze(p,"input",y)],b=!0)},p(L,k){i=L,k[0]&64&&n!==(n=i[38].layer_no+"")&&Qe(r,n),k[0]&64&&ot(o.value)!==i[38].top_depth&&He(o,i[38].top_depth),k[0]&64&&ot(u.value)!==i[38].bottom_depth&&He(u,i[38].bottom_depth),k[0]&64&&_.value!==i[38].lithology_name&&He(_,i[38].lithology_name),k[0]&64&&ot(p.value)!==i[38].spt_n&&He(p,i[38].spt_n)},d(L){L&&I(e),b=!1,Lt(M)}}}function iu(i){let e,t,n="钻孔数据管理",r,s,a,o="导入CSV",c,l,u=i[4]?"隐藏":"颜色",h,f,_,m,g,p,d,b,M,R=i[4]&&Da(i);function P(x,T){return x[8].length===0?nu:tu}let A=P(i),y=A(i),L=i[0]&&Oa(i),k=i[6]&&Ha(i);return{c(){e=C("div"),t=C("h3"),t.textContent=n,r=ee(),s=C("div"),a=C("button"),a.textContent=o,c=ee(),l=C("button"),h=Be(u),f=ee(),_=C("div"),R&&R.c(),m=ee(),y.c(),g=ee(),L&&L.c(),p=ee(),k&&k.c(),d=Rn(),this.h()},l(x){e=w(x,"DIV",{class:!0});var T=ne(e);t=w(T,"H3",{"data-svelte-h":!0}),Le(t)!=="svelte-1xeck8m"&&(t.textContent=n),r=Q(T),s=w(T,"DIV",{style:!0});var $=ne(s);a=w($,"BUTTON",{class:!0,"data-svelte-h":!0}),Le(a)!=="svelte-vemyzj"&&(a.textContent=o),c=Q($),l=w($,"BUTTON",{class:!0});var te=ne(l);h=Fe(te,u),te.forEach(I),$.forEach(I),T.forEach(I),f=Q(x),_=w(x,"DIV",{class:!0});var N=ne(_);R&&R.l(N),m=Q(N),y.l(N),N.forEach(I),g=Q(x),L&&L.l(x),p=Q(x),k&&k.l(x),d=Rn(),this.h()},h(){z(a,"class","btn-primary btn-sm"),z(l,"class","btn-secondary btn-sm"),we(s,"display","flex"),we(s,"gap","6px"),z(e,"class","panel-header"),z(_,"class","panel-body scrollable")},m(x,T){Re(x,e,T),v(e,t),v(e,r),v(e,s),v(s,a),v(s,c),v(s,l),v(l,h),Re(x,f,T),Re(x,_,T),R&&R.m(_,null),v(_,m),y.m(_,null),Re(x,g,T),L&&L.m(x,T),Re(x,p,T),k&&k.m(x,T),Re(x,d,T),b||(M=[ze(a,"click",i[15]),ze(l,"click",i[16])],b=!0)},p(x,T){T[0]&16&&u!==(u=x[4]?"隐藏":"颜色")&&Qe(h,u),x[4]?R?R.p(x,T):(R=Da(x),R.c(),R.m(_,m)):R&&(R.d(1),R=null),A===(A=P(x))&&y?y.p(x,T):(y.d(1),y=A(x),y&&(y.c(),y.m(_,null))),x[0]?L?L.p(x,T):(L=Oa(x),L.c(),L.m(p.parentNode,p)):L&&(L.d(1),L=null),x[6]?k?k.p(x,T):(k=Ha(x),k.c(),k.m(d.parentNode,d)):k&&(k.d(1),k=null)},i:bt,o:bt,d(x){x&&(I(e),I(f),I(_),I(g),I(p),I(d)),R&&R.d(),y.d(),L&&L.d(x),k&&k.d(x),b=!1,Lt(M)}}}function ru(i,e,t){let n,r,s,a,o;nt(i,Si,G=>t(36,n=G)),nt(i,Kr,G=>t(5,r=G)),nt(i,sn,G=>t(6,s=G)),nt(i,jn,G=>t(7,a=G)),nt(i,bi,G=>t(8,o=G));let c=!1,l=null,u=!1,h=null,f=!1;async function _(){if(n)try{mt(bi,o=await vt.get(`/projects/${n.id}/boreholes`),o),mt(jn,a=await vt.get(`/projects/${n.id}/lithology-types`),a)}catch(G){Ze(`刷新失败: ${G.message}`,"error")}}async function m(){if(!(!l||!n)){t(2,u=!0);try{const G=await vt.uploadCsv(n.id,l);t(3,h=G),Ze(`成功导入 ${G.imported} 个钻孔`,"success"),G.errors.length>0&&Ze(`有 ${G.errors.length} 个错误`,"warning"),G.warnings.length>0&&G.warnings.forEach(he=>Ze(he,"warning")),await _()}catch(G){Ze(`导入失败: ${G.message}`,"error")}finally{t(2,u=!1)}}}async function g(G){if(confirm("确定删除此钻孔？"))try{await vt.delete(`/projects/${n.id}/boreholes/${G}`),Ze("钻孔已删除","info"),await _()}catch(he){Ze(`删除失败: ${he.message}`,"error")}}function p(G){mt(sn,s=JSON.parse(JSON.stringify(G)),s)}async function d(){if(s)try{await vt.put(`/projects/${n.id}/boreholes/${s.id}`,s),Ze("钻孔已更新","success"),mt(sn,s=null,s),await _()}catch(G){Ze(`更新失败: ${G.message}`,"error")}}function b(G){r.includes(G)?mt(Kr,r=r.filter(he=>he!==G),r):mt(Kr,r=[...r,G],r)}async function M(G){try{await vt.put(`/projects/${n.id}/lithology-types/${G.id}`,{color:G.color,layer_order:G.layer_order}),Ze("颜色已更新","success")}catch(he){Ze(`颜色更新失败: ${he.message}`,"error")}}const R=()=>t(0,c=!0),P=()=>t(4,f=!f);function A(G,he){G[he].color=this.value,jn.set(a)}const y=G=>M(G),L=G=>b(G.id),k=G=>p(G),x=G=>g(G.id),T=(G,he)=>he.name===G.lithology_name,$=G=>t(1,l=G.target.files[0]),te=()=>{t(0,c=!1),t(3,h=null)},N=()=>{t(0,c=!1),t(3,h=null)};function K(){s.hole_id=this.value,sn.set(s)}function X(){s.elevation=ot(this.value),sn.set(s)}function re(){s.longitude=ot(this.value),sn.set(s)}function D(){s.latitude=ot(this.value),sn.set(s)}function O(G,he){G[he].top_depth=ot(this.value),sn.set(s)}function Y(G,he){G[he].bottom_depth=ot(this.value),sn.set(s)}function j(G,he){G[he].lithology_name=this.value,sn.set(s)}function J(G,he){G[he].spt_n=ot(this.value),sn.set(s)}return[c,l,u,h,f,r,s,a,o,m,g,p,d,b,M,R,P,A,y,L,k,x,T,$,te,N,K,X,re,D,O,Y,j,J,()=>mt(sn,s=null,s),()=>mt(sn,s=null,s)]}class su extends bn{constructor(e){super(),yn(this,e,ru,iu,Sn,{},null,[-1,-1])}}function Wa(i,e,t){const n=i.slice();return n[31]=e[t],n}function Xa(i,e,t){const n=i.slice();return n[34]=e[t],n[36]=t,n}function qa(i,e,t){const n=i.slice();return n[37]=e[t],n}function ja(i,e,t){const n=i.slice();return n[40]=e[t],n}function Ya(i){let e,t=i[40].hole_id+"",n;return{c(){e=C("span"),n=Be(t),this.h()},l(r){e=w(r,"SPAN",{class:!0});var s=ne(e);n=Fe(s,t),s.forEach(I),this.h()},h(){z(e,"class","badge badge-info")},m(r,s){Re(r,e,s),v(e,n)},p(r,s){s[0]&768&&t!==(t=r[40].hole_id+"")&&Qe(n,t)},d(r){r&&I(e)}}}function Ka(i){let e,t="请在钻孔管理中选择2个以上钻孔";return{c(){e=C("span"),e.textContent=t,this.h()},l(n){e=w(n,"SPAN",{style:!0,"data-svelte-h":!0}),Le(e)!=="svelte-1k8zcgx"&&(e.textContent=t),this.h()},h(){we(e,"font-size","11px"),we(e,"color","var(--text-muted)")},m(n,r){Re(n,e,r)},d(n){n&&I(e)}}}function Za(i){let e,t,n="剖面列表",r,s=_t(i[7]),a=[];for(let o=0;o<s.length;o+=1)a[o]=$a(qa(i,s,o));return{c(){e=C("div"),t=C("h4"),t.textContent=n,r=ee();for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){e=w(o,"DIV",{class:!0});var c=ne(e);t=w(c,"H4",{style:!0,"data-svelte-h":!0}),Le(t)!=="svelte-dgmf3y"&&(t.textContent=n),r=Q(c);for(let l=0;l<a.length;l+=1)a[l].l(c);c.forEach(I),this.h()},h(){we(t,"font-size","13px"),we(t,"margin-bottom","8px"),z(e,"class","profile-list")},m(o,c){Re(o,e,c),v(e,t),v(e,r);for(let l=0;l<a.length;l+=1)a[l]&&a[l].m(e,null)},p(o,c){if(c[0]&4228){s=_t(o[7]);let l;for(l=0;l<s.length;l+=1){const u=qa(o,s,l);a[l]?a[l].p(u,c):(a[l]=$a(u),a[l].c(),a[l].m(e,null))}for(;l<a.length;l+=1)a[l].d(1);a.length=s.length}},d(o){o&&I(e),Vt(a,o)}}}function $a(i){let e,t,n=i[37].name+"",r,s,a,o=i[37].interpolation_method+"",c,l,u,h;function f(){return i[20](i[37])}return{c(){e=C("div"),t=C("span"),r=Be(n),s=ee(),a=C("span"),c=Be(o),l=ee(),this.h()},l(_){e=w(_,"DIV",{class:!0});var m=ne(e);t=w(m,"SPAN",{});var g=ne(t);r=Fe(g,n),g.forEach(I),s=Q(m),a=w(m,"SPAN",{class:!0});var p=ne(a);c=Fe(p,o),p.forEach(I),l=Q(m),m.forEach(I),this.h()},h(){z(a,"class","badge badge-info"),z(e,"class","profile-item svelte-1c8hdoq"),tr(e,"active",i[2]===i[37].id)},m(_,m){Re(_,e,m),v(e,t),v(t,r),v(e,s),v(e,a),v(a,c),v(e,l),u||(h=ze(e,"click",f),u=!0)},p(_,m){i=_,m[0]&128&&n!==(n=i[37].name+"")&&Qe(r,n),m[0]&128&&o!==(o=i[37].interpolation_method+"")&&Qe(c,o),m[0]&132&&tr(e,"active",i[2]===i[37].id)},d(_){_&&I(e),u=!1,h()}}}function Ja(i){var he;let e,t,n,r="剖面图预览",s,a,o,c,l,u,h,f="标注管理",_,m,g,p,d="添加文字标注",b,M,R,P,A,y,L="X (距离m)",k,x,T,$,te,N="Y (高程m)",K,X,re,D,O="添加标注",Y,j,J=((he=i[3].lithologies)==null?void 0:he.length)>0&&Qa(i);function ae(ie,W){return ie[4].length>0?ou:au}let q=ae(i),G=q(i);return{c(){e=C("hr"),t=ee(),n=C("h4"),n.textContent=r,s=ee(),a=C("div"),o=C("canvas"),c=ee(),J&&J.c(),l=ee(),u=C("div"),h=C("h4"),h.textContent=f,_=ee(),G.c(),m=ee(),g=C("div"),p=C("label"),p.textContent=d,b=ee(),M=C("input"),R=ee(),P=C("div"),A=C("div"),y=C("label"),y.textContent=L,k=ee(),x=C("input"),T=ee(),$=C("div"),te=C("label"),te.textContent=N,K=ee(),X=C("input"),re=ee(),D=C("button"),D.textContent=O,this.h()},l(ie){e=w(ie,"HR",{style:!0}),t=Q(ie),n=w(ie,"H4",{style:!0,"data-svelte-h":!0}),Le(n)!=="svelte-1vo8psn"&&(n.textContent=r),s=Q(ie),a=w(ie,"DIV",{class:!0});var W=ne(a);o=w(W,"CANVAS",{id:!0,width:!0,height:!0}),ne(o).forEach(I),W.forEach(I),c=Q(ie),J&&J.l(ie),l=Q(ie),u=w(ie,"DIV",{class:!0});var se=ne(u);h=w(se,"H4",{style:!0,"data-svelte-h":!0}),Le(h)!=="svelte-4x8l83"&&(h.textContent=f),_=Q(se),G.l(se),m=Q(se),g=w(se,"DIV",{class:!0,style:!0});var Z=ne(g);p=w(Z,"LABEL",{"data-svelte-h":!0}),Le(p)!=="svelte-dpqsoy"&&(p.textContent=d),b=Q(Z),M=w(Z,"INPUT",{type:!0,placeholder:!0}),Z.forEach(I),R=Q(se),P=w(se,"DIV",{class:!0});var pe=ne(P);A=w(pe,"DIV",{class:!0});var V=ne(A);y=w(V,"LABEL",{"data-svelte-h":!0}),Le(y)!=="svelte-130i8ji"&&(y.textContent=L),k=Q(V),x=w(V,"INPUT",{type:!0}),V.forEach(I),T=Q(pe),$=w(pe,"DIV",{class:!0});var Ce=ne($);te=w(Ce,"LABEL",{"data-svelte-h":!0}),Le(te)!=="svelte-xhi5gk"&&(te.textContent=N),K=Q(Ce),X=w(Ce,"INPUT",{type:!0}),Ce.forEach(I),pe.forEach(I),re=Q(se),D=w(se,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),Le(D)!=="svelte-jb8zg8"&&(D.textContent=O),se.forEach(I),this.h()},h(){we(e,"border-color","var(--border)"),we(e,"margin","12px 0"),we(n,"font-size","13px"),we(n,"margin-bottom","8px"),z(o,"id","profileCanvas"),z(o,"width","340"),z(o,"height","280"),z(a,"class","profile-preview svelte-1c8hdoq"),we(h,"font-size","13px"),we(h,"margin","8px 0"),z(M,"type","text"),z(M,"placeholder","标注内容"),z(g,"class","form-group"),we(g,"margin-top","8px"),z(x,"type","number"),z(A,"class","form-group"),z(X,"type","number"),z($,"class","form-group"),z(P,"class","form-row"),z(D,"class","btn-secondary btn-sm"),we(D,"width","100%"),z(u,"class","annotation-section svelte-1c8hdoq")},m(ie,W){Re(ie,e,W),Re(ie,t,W),Re(ie,n,W),Re(ie,s,W),Re(ie,a,W),v(a,o),i[21](o),Re(ie,c,W),J&&J.m(ie,W),Re(ie,l,W),Re(ie,u,W),v(u,h),v(u,_),G.m(u,null),v(u,m),v(u,g),v(g,p),v(g,b),v(g,M),He(M,i[5].text_content),v(u,R),v(u,P),v(P,A),v(A,y),v(A,k),v(A,x),He(x,i[5].x),v(P,T),v(P,$),v($,te),v($,K),v($,X),He(X,i[5].y),v(u,re),v(u,D),Y||(j=[ze(M,"input",i[23]),ze(x,"input",i[24]),ze(X,"input",i[25]),ze(D,"click",i[13])],Y=!0)},p(ie,W){var se;((se=ie[3].lithologies)==null?void 0:se.length)>0?J?J.p(ie,W):(J=Qa(ie),J.c(),J.m(l.parentNode,l)):J&&(J.d(1),J=null),q===(q=ae(ie))&&G?G.p(ie,W):(G.d(1),G=q(ie),G&&(G.c(),G.m(u,m))),W[0]&32&&M.value!==ie[5].text_content&&He(M,ie[5].text_content),W[0]&32&&ot(x.value)!==ie[5].x&&He(x,ie[5].x),W[0]&32&&ot(X.value)!==ie[5].y&&He(X,ie[5].y)},d(ie){ie&&(I(e),I(t),I(n),I(s),I(a),I(c),I(l),I(u)),i[21](null),J&&J.d(ie),G.d(),Y=!1,Lt(j)}}}function Qa(i){let e,t,n="图例",r,s,a=_t(i[3].lithologies),o=[];for(let c=0;c<a.length;c+=1)o[c]=eo(Xa(i,a,c));return{c(){e=C("div"),t=C("h5"),t.textContent=n,r=ee(),s=C("div");for(let c=0;c<o.length;c+=1)o[c].c();this.h()},l(c){e=w(c,"DIV",{class:!0});var l=ne(e);t=w(l,"H5",{style:!0,"data-svelte-h":!0}),Le(t)!=="svelte-1b0yqne"&&(t.textContent=n),r=Q(l),s=w(l,"DIV",{class:!0});var u=ne(s);for(let h=0;h<o.length;h+=1)o[h].l(u);u.forEach(I),l.forEach(I),this.h()},h(){we(t,"font-size","11px"),we(t,"margin","8px 0 4px"),we(t,"color","var(--text-secondary)"),z(s,"class","legend-list svelte-1c8hdoq"),z(e,"class","legend-box svelte-1c8hdoq")},m(c,l){Re(c,e,l),v(e,t),v(e,r),v(e,s);for(let u=0;u<o.length;u+=1)o[u]&&o[u].m(s,null)},p(c,l){if(l[0]&1032){a=_t(c[3].lithologies);let u;for(u=0;u<a.length;u+=1){const h=Xa(c,a,u);o[u]?o[u].p(h,l):(o[u]=eo(h),o[u].c(),o[u].m(s,null))}for(;u<o.length;u+=1)o[u].d(1);o.length=a.length}},d(c){c&&I(e),Vt(o,c)}}}function eo(i){let e,t,n,r,s=i[34]+"",a,o;return{c(){e=C("div"),t=C("span"),n=ee(),r=C("span"),a=Be(s),o=ee(),this.h()},l(c){e=w(c,"DIV",{class:!0});var l=ne(e);t=w(l,"SPAN",{class:!0,style:!0}),ne(t).forEach(I),n=Q(l),r=w(l,"SPAN",{style:!0});var u=ne(r);a=Fe(u,s),u.forEach(I),o=Q(l),l.forEach(I),this.h()},h(){z(t,"class","color-swatch"),we(t,"background",i[10](i[34],i[36])),we(r,"font-size","11px"),z(e,"class","legend-item svelte-1c8hdoq")},m(c,l){Re(c,e,l),v(e,t),v(e,n),v(e,r),v(r,a),v(e,o)},p(c,l){l[0]&8&&we(t,"background",c[10](c[34],c[36])),l[0]&8&&s!==(s=c[34]+"")&&Qe(a,s)},d(c){c&&I(e)}}}function au(i){let e,t="暂无标注";return{c(){e=C("p"),e.textContent=t,this.h()},l(n){e=w(n,"P",{style:!0,"data-svelte-h":!0}),Le(e)!=="svelte-191p6fb"&&(e.textContent=t),this.h()},h(){we(e,"font-size","11px"),we(e,"color","var(--text-muted)"),we(e,"margin-bottom","6px")},m(n,r){Re(n,e,r)},p:bt,d(n){n&&I(e)}}}function ou(i){let e,t=_t(i[4]),n=[];for(let r=0;r<t.length;r+=1)n[r]=to(Wa(i,t,r));return{c(){for(let r=0;r<n.length;r+=1)n[r].c();e=Rn()},l(r){for(let s=0;s<n.length;s+=1)n[s].l(r);e=Rn()},m(r,s){for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(r,s);Re(r,e,s)},p(r,s){if(s[0]&16400){t=_t(r[4]);let a;for(a=0;a<t.length;a+=1){const o=Wa(r,t,a);n[a]?n[a].p(o,s):(n[a]=to(o),n[a].c(),n[a].m(e.parentNode,e))}for(;a<n.length;a+=1)n[a].d(1);n.length=t.length}},d(r){r&&I(e),Vt(n,r)}}}function to(i){let e,t,n=i[31].type==="text"?"📝":"➤",r,s,a=(i[31].text_content||`(${i[31].x}, ${i[31].y})`)+"",o,c,l,u="✕",h,f,_;function m(){return i[22](i[31])}return{c(){e=C("div"),t=C("span"),r=Be(n),s=ee(),o=Be(a),c=ee(),l=C("button"),l.textContent=u,h=ee(),this.h()},l(g){e=w(g,"DIV",{class:!0});var p=ne(e);t=w(p,"SPAN",{});var d=ne(t);r=Fe(d,n),s=Q(d),o=Fe(d,a),d.forEach(I),c=Q(p),l=w(p,"BUTTON",{class:!0,"data-svelte-h":!0}),Le(l)!=="svelte-8rblco"&&(l.textContent=u),h=Q(p),p.forEach(I),this.h()},h(){z(l,"class","btn-danger btn-sm"),z(e,"class","ann-item svelte-1c8hdoq")},m(g,p){Re(g,e,p),v(e,t),v(t,r),v(t,s),v(t,o),v(e,c),v(e,l),v(e,h),f||(_=ze(l,"click",m),f=!0)},p(g,p){i=g,p[0]&16&&n!==(n=i[31].type==="text"?"📝":"➤")&&Qe(r,n),p[0]&16&&a!==(a=(i[31].text_content||`(${i[31].x}, ${i[31].y})`)+"")&&Qe(o,a)},d(g){g&&I(e),f=!1,_()}}}function lu(i){let e,t,n="剖面分析",r,s,a,o,c,l,u,h,f,_,m,g,p,d="剖面名称",b,M,R,P,A,y="插值方式",L,k,x,T="线性插值",$,te="三次样条",N,K="Kriging地统计插值",X,re,D,O,Y=i[8].length+"",j,J,ae,q,G,he,ie,W="生成剖面",se,Z,pe,V,Ce=_t(i[9].filter(i[19])),fe=[];for(let oe=0;oe<Ce.length;oe+=1)fe[oe]=Ya(ja(i,Ce,oe));let Te=i[8].length<2&&Ka(),le=i[7].length>0&&Za(i),Pe=i[3]&&Ja(i);return{c(){e=C("div"),t=C("h3"),t.textContent=n,r=ee(),s=C("div"),a=C("button"),o=Be("PNG"),l=ee(),u=C("button"),h=Be("SVG"),_=ee(),m=C("div"),g=C("div"),p=C("label"),p.textContent=d,b=ee(),M=C("input"),R=ee(),P=C("div"),A=C("label"),A.textContent=y,L=ee(),k=C("select"),x=C("option"),x.textContent=T,$=C("option"),$.textContent=te,N=C("option"),N.textContent=K,X=ee(),re=C("div"),D=C("label"),O=Be("已选钻孔 ("),j=Be(Y),J=Be(")"),ae=ee(),q=C("div");for(let oe=0;oe<fe.length;oe+=1)fe[oe].c();G=ee(),Te&&Te.c(),he=ee(),ie=C("button"),ie.textContent=W,se=ee(),le&&le.c(),Z=ee(),Pe&&Pe.c(),this.h()},l(oe){e=w(oe,"DIV",{class:!0});var S=ne(e);t=w(S,"H3",{"data-svelte-h":!0}),Le(t)!=="svelte-1tw5t1i"&&(t.textContent=n),r=Q(S),s=w(S,"DIV",{style:!0});var E=ne(s);a=w(E,"BUTTON",{class:!0});var F=ne(a);o=Fe(F,"PNG"),F.forEach(I),l=Q(E),u=w(E,"BUTTON",{class:!0});var ue=ne(u);h=Fe(ue,"SVG"),ue.forEach(I),E.forEach(I),S.forEach(I),_=Q(oe),m=w(oe,"DIV",{class:!0});var ce=ne(m);g=w(ce,"DIV",{class:!0});var ge=ne(g);p=w(ge,"LABEL",{"data-svelte-h":!0}),Le(p)!=="svelte-aae5qr"&&(p.textContent=d),b=Q(ge),M=w(ge,"INPUT",{type:!0,placeholder:!0}),ge.forEach(I),R=Q(ce),P=w(ce,"DIV",{class:!0});var Me=ne(P);A=w(Me,"LABEL",{"data-svelte-h":!0}),Le(A)!=="svelte-w2ab1e"&&(A.textContent=y),L=Q(Me),k=w(Me,"SELECT",{});var Ee=ne(k);x=w(Ee,"OPTION",{"data-svelte-h":!0}),Le(x)!=="svelte-1acgaat"&&(x.textContent=T),$=w(Ee,"OPTION",{"data-svelte-h":!0}),Le($)!=="svelte-b97obq"&&($.textContent=te),N=w(Ee,"OPTION",{"data-svelte-h":!0}),Le(N)!=="svelte-m7cjkk"&&(N.textContent=K),Ee.forEach(I),Me.forEach(I),X=Q(ce),re=w(ce,"DIV",{class:!0});var be=ne(re);D=w(be,"LABEL",{});var Ie=ne(D);O=Fe(Ie,"已选钻孔 ("),j=Fe(Ie,Y),J=Fe(Ie,")"),Ie.forEach(I),ae=Q(be),q=w(be,"DIV",{class:!0});var Xe=ne(q);for(let Ae=0;Ae<fe.length;Ae+=1)fe[Ae].l(Xe);G=Q(Xe),Te&&Te.l(Xe),Xe.forEach(I),be.forEach(I),he=Q(ce),ie=w(ce,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),Le(ie)!=="svelte-18tzs37"&&(ie.textContent=W),se=Q(ce),le&&le.l(ce),Z=Q(ce),Pe&&Pe.l(ce),ce.forEach(I),this.h()},h(){z(a,"class","btn-secondary btn-sm"),a.disabled=c=!i[2],z(u,"class","btn-secondary btn-sm"),u.disabled=f=!i[2],we(s,"display","flex"),we(s,"gap","6px"),z(e,"class","panel-header"),z(M,"type","text"),z(M,"placeholder","输入剖面名称"),z(g,"class","form-group"),x.__value="linear",He(x,x.__value),$.__value="cubic_spline",He($,$.__value),N.__value="kriging",He(N,N.__value),i[1]===void 0&&ai(()=>i[18].call(k)),z(P,"class","form-group"),z(q,"class","selected-bhs svelte-1c8hdoq"),z(re,"class","form-group"),z(ie,"class","btn-primary"),we(ie,"width","100%"),we(ie,"margin-bottom","12px"),z(m,"class","panel-body scrollable")},m(oe,S){Re(oe,e,S),v(e,t),v(e,r),v(e,s),v(s,a),v(a,o),v(s,l),v(s,u),v(u,h),Re(oe,_,S),Re(oe,m,S),v(m,g),v(g,p),v(g,b),v(g,M),He(M,i[0]),v(m,R),v(m,P),v(P,A),v(P,L),v(P,k),v(k,x),v(k,$),v(k,N),Ft(k,i[1],!0),v(m,X),v(m,re),v(re,D),v(D,O),v(D,j),v(D,J),v(re,ae),v(re,q);for(let E=0;E<fe.length;E+=1)fe[E]&&fe[E].m(q,null);v(q,G),Te&&Te.m(q,null),v(m,he),v(m,ie),v(m,se),le&&le.m(m,null),v(m,Z),Pe&&Pe.m(m,null),pe||(V=[ze(a,"click",i[15]),ze(u,"click",i[16]),ze(M,"input",i[17]),ze(k,"change",i[18]),ze(ie,"click",i[11])],pe=!0)},p(oe,S){if(S[0]&4&&c!==(c=!oe[2])&&(a.disabled=c),S[0]&4&&f!==(f=!oe[2])&&(u.disabled=f),S[0]&1&&M.value!==oe[0]&&He(M,oe[0]),S[0]&2&&Ft(k,oe[1]),S[0]&256&&Y!==(Y=oe[8].length+"")&&Qe(j,Y),S[0]&768){Ce=_t(oe[9].filter(oe[19]));let E;for(E=0;E<Ce.length;E+=1){const F=ja(oe,Ce,E);fe[E]?fe[E].p(F,S):(fe[E]=Ya(F),fe[E].c(),fe[E].m(q,G))}for(;E<fe.length;E+=1)fe[E].d(1);fe.length=Ce.length}oe[8].length<2?Te||(Te=Ka(),Te.c(),Te.m(q,null)):Te&&(Te.d(1),Te=null),oe[7].length>0?le?le.p(oe,S):(le=Za(oe),le.c(),le.m(m,Z)):le&&(le.d(1),le=null),oe[3]?Pe?Pe.p(oe,S):(Pe=Ja(oe),Pe.c(),Pe.m(m,null)):Pe&&(Pe.d(1),Pe=null)},i:bt,o:bt,d(oe){oe&&(I(e),I(_),I(m)),Vt(fe,oe),Te&&Te.d(),le&&le.d(),Pe&&Pe.d(),pe=!1,Lt(V)}}}function cu(i,e,t){let n,r,s,a,o,c;nt(i,ts,D=>t(26,n=D)),nt(i,Er,D=>t(7,r=D)),nt(i,Kr,D=>t(8,s=D)),nt(i,Si,D=>t(27,a=D)),nt(i,jn,D=>t(28,o=D)),nt(i,bi,D=>t(9,c=D));let l="",u="linear",h=null,f=null,_=[],m={type:"text",x:0,y:0,text_content:"",arrow_dx:0,arrow_dy:0},g=null;const p=["#E6B89C","#F0E68C","#CD853F","#8B7355","#A0522D","#DEB887","#D2B48C","#BDB76B","#BC8F8F","#C4A882","#9ACD32","#6B8E23","#556B2F","#8FBC8F","#2E8B57","#708090","#778899","#B0C4DE","#87CEEB","#4682B4"];function d(D,O=0){const Y=o==null?void 0:o.find(j=>j.name===D);return Y!=null&&Y.color?Y.color:p[O%p.length]}fc(()=>{f&&g&&b()});function b(){if(!f||!g)return;const D=g.getContext("2d"),O=g.width,Y=g.height,j={top:30,right:20,bottom:40,left:60},J=O-j.left-j.right,ae=Y-j.top-j.bottom;D.clearRect(0,0,O,Y),D.fillStyle="#ffffff",D.fillRect(0,0,O,Y);const q=f.columns,G=f.connections,he=f.total_distance>0?f.total_distance:100;let ie=1/0,W=-1/0;q.forEach(fe=>{fe.layers.forEach(Te=>{Te.top_elevation>W&&(W=Te.top_elevation),Te.bottom_elevation<ie&&(ie=Te.bottom_elevation)})}),ie===1/0&&(ie=0,W=100);const se=(W-ie)*.1||10;ie-=se,W+=se;const Z=fe=>j.left+fe/he*J,pe=fe=>j.top+(W-fe)/(W-ie)*ae;D.strokeStyle="#cccccc",D.lineWidth=.5;for(let fe=Math.ceil(ie);fe<=W;fe+=Math.max(5,Math.round((W-ie)/8))){const Te=pe(fe);D.beginPath(),D.moveTo(j.left,Te),D.lineTo(O-j.right,Te),D.stroke(),D.fillStyle="#666",D.font="10px sans-serif",D.textAlign="right",D.textBaseline="middle",D.fillText(fe.toFixed(0)+"m",j.left-5,Te)}D.strokeStyle="#cccccc";const V=Math.max(10,Math.round(he/8));for(let fe=0;fe<=he;fe+=V){const Te=Z(fe);D.beginPath(),D.moveTo(Te,j.top),D.lineTo(Te,Y-j.bottom),D.stroke(),D.fillStyle="#666",D.font="10px sans-serif",D.textAlign="center",D.textBaseline="top",D.fillText(fe.toFixed(0)+"m",Te,Y-j.bottom+5)}const Ce={};(f.lithologies||[]).forEach((fe,Te)=>{Ce[fe]=Te}),G.forEach(fe=>{const Te=d(fe.lithology_name,Ce[fe.lithology_name]||0),le=fe.distances,Pe=fe.top_elevations,oe=fe.bottom_elevations;if(!(le.length<2)){D.fillStyle=Te,D.globalAlpha=.85,D.beginPath(),D.moveTo(Z(le[0]),pe(Pe[0]));for(let S=1;S<le.length;S++)D.lineTo(Z(le[S]),pe(Pe[S]));for(let S=le.length-1;S>=0;S--)D.lineTo(Z(le[S]),pe(oe[S]));D.closePath(),D.fill(),D.globalAlpha=1,D.strokeStyle="#333",D.lineWidth=.8,D.beginPath();for(let S=0;S<le.length;S++)S===0?D.moveTo(Z(le[S]),pe(Pe[S])):D.lineTo(Z(le[S]),pe(Pe[S]));D.stroke(),D.beginPath();for(let S=0;S<le.length;S++)S===0?D.moveTo(Z(le[S]),pe(oe[S])):D.lineTo(Z(le[S]),pe(oe[S]));D.stroke()}}),q.forEach(fe=>{const Te=Z(fe.distance),le=Math.max(12,J/Math.max(6,q.length+2));fe.layers.forEach((Pe,oe)=>{const S=d(Pe.lithology_name,Ce[Pe.lithology_name]||oe),E=pe(Pe.top_elevation),F=pe(Pe.bottom_elevation),ue=Math.max(2,F-E);D.fillStyle=S,D.globalAlpha=.95,D.fillRect(Te-le/2,E,le,ue),D.globalAlpha=1,D.strokeStyle="#000",D.lineWidth=1,D.strokeRect(Te-le/2,E,le,ue),D.fillStyle="#000",D.font="bold 10px sans-serif",D.textAlign="left",D.textBaseline="middle";const ce=(E+F)/2;D.fillText(`${Pe.layer_no}  ${Pe.thickness.toFixed(1)}m`,Te+le/2+4,ce)}),D.fillStyle="#000",D.font="bold 11px sans-serif",D.textAlign="center",D.textBaseline="bottom",D.fillText(fe.hole_id,Te,j.top-6)}),D.strokeStyle="#000",D.lineWidth=1,D.strokeRect(j.left,j.top,J,ae),D.fillStyle="#333",D.font="12px sans-serif",D.textAlign="center",D.textBaseline="top",D.fillText("水平距离 (m)",O/2,Y-14),D.save(),D.translate(14,Y/2),D.rotate(-Math.PI/2),D.textAlign="center",D.textBaseline="middle",D.fillText("高程 (m)",0,0),D.restore()}async function M(){if(!a||s.length<2){Ze("请至少选择2个钻孔","warning");return}if(!l.trim()){Ze("请输入剖面名称","warning");return}try{const D=await vt.post(`/projects/${a.id}/profiles`,{name:l,borehole_ids:s,interpolation_method:u});mt(Er,r=[...r,D],r),t(0,l=""),Ze("剖面线创建成功","success"),await R(D.id)}catch(D){Ze(`创建失败: ${D.message}`,"error")}}async function R(D){t(2,h=D);try{t(3,f=await vt.get(`/projects/profiles/${D}/data`)),t(4,_=await vt.get(`/projects/profiles/${D}/annotations`)),mt(ts,n=f,n),await Js(),b()}catch(O){Ze(`加载剖面数据失败: ${O.message}`,"error")}}async function P(){if(h)try{const D=await vt.post(`/projects/profiles/${h}/annotations`,m);t(4,_=[..._,D]),Ze("标注已添加","success")}catch(D){Ze(`添加标注失败: ${D.message}`,"error")}}async function A(D){try{await vt.delete(`/projects/profiles/annotations/${D}`),t(4,_=_.filter(O=>O.id!==D))}catch(O){Ze(`删除标注失败: ${O.message}`,"error")}}async function y(){if(h)try{await vt.downloadBlob(`/export/profile/${h}/png`,`profile_${h}.png`)}catch(D){Ze(`导出PNG失败: ${D.message}`,"error")}}async function L(){if(h)try{await vt.downloadBlob(`/export/profile/${h}/svg`,`profile_${h}.svg`)}catch(D){Ze(`导出SVG失败: ${D.message}`,"error")}}function k(){l=this.value,t(0,l)}function x(){u=ni(this),t(1,u)}const T=D=>s.includes(D.id),$=D=>R(D.id);function te(D){xr[D?"unshift":"push"](()=>{g=D,t(6,g)})}const N=D=>A(D.id);function K(){m.text_content=this.value,t(5,m)}function X(){m.x=ot(this.value),t(5,m)}function re(){m.y=ot(this.value),t(5,m)}return[l,u,h,f,_,m,g,r,s,c,d,M,R,P,A,y,L,k,x,T,$,te,N,K,X,re]}class uu extends bn{constructor(e){super(),yn(this,e,cu,lu,Sn,{},null,[-1,-1])}}function hu(i){let e,t;return{c(){e=C("div"),t=C("canvas"),this.h()},l(n){e=w(n,"DIV",{class:!0});var r=ne(e);t=w(r,"CANVAS",{id:!0,class:!0}),ne(t).forEach(I),r.forEach(I),this.h()},h(){z(t,"id","mainProfileCanvas"),z(t,"class","svelte-1uozxjf"),z(e,"class","profile-canvas-container svelte-1uozxjf")},m(n,r){Re(n,e,r),v(e,t),i[2](t)},p:bt,i:bt,o:bt,d(n){n&&I(e),i[2](null)}}}function fu(i,e,t){let n,r;nt(i,ts,u=>t(1,n=u)),nt(i,jn,u=>t(3,r=u));let s=null;const a=["#E6B89C","#F0E68C","#CD853F","#8B7355","#A0522D","#DEB887","#D2B48C","#BDB76B","#BC8F8F","#C4A882","#9ACD32","#6B8E23","#556B2F","#8FBC8F","#2E8B57","#708090","#778899","#B0C4DE","#87CEEB","#4682B4"];function o(u,h=0){const f=r==null?void 0:r.find(_=>_.name===u);return f!=null&&f.color?f.color:a[h%a.length]}function c(){var te;if(!n||!s)return;const u=n,h=s.parentElement,f=h.clientWidth||800,_=h.clientHeight||600;t(0,s.width=f,s),t(0,s.height=_,s);const m=s.getContext("2d"),g={top:40,right:30,bottom:50,left:70},p=f-g.left-g.right,d=_-g.top-g.bottom;m.clearRect(0,0,f,_),m.fillStyle="#ffffff",m.fillRect(0,0,f,_);const b=u.columns,M=u.connections;if(!b||b.length===0)return;const R=u.total_distance>0?u.total_distance:100;let P=1/0,A=-1/0;b.forEach(N=>{N.layers.forEach(K=>{K.top_elevation>A&&(A=K.top_elevation),K.bottom_elevation<P&&(P=K.bottom_elevation)})}),P===1/0&&(P=0,A=100);const y=(A-P)*.1||10;P-=y,A+=y;const L=N=>g.left+N/R*p,k=N=>g.top+(A-N)/(A-P)*d;m.strokeStyle="#dddddd",m.lineWidth=.5;const x=Math.max(5,Math.round((A-P)/10));for(let N=Math.ceil(P/x)*x;N<=A;N+=x){const K=k(N);m.beginPath(),m.moveTo(g.left,K),m.lineTo(f-g.right,K),m.stroke(),m.fillStyle="#888",m.font="11px sans-serif",m.textAlign="right",m.textBaseline="middle",m.fillText(N.toFixed(0)+"m",g.left-8,K)}m.strokeStyle="#dddddd";const T=Math.max(10,Math.round(R/10));for(let N=0;N<=R;N+=T){const K=L(N);m.beginPath(),m.moveTo(K,g.top),m.lineTo(K,_-g.bottom),m.stroke(),m.fillStyle="#888",m.font="11px sans-serif",m.textAlign="center",m.textBaseline="top",m.fillText(N.toFixed(0)+"m",K,_-g.bottom+8)}const $={};if((u.lithologies||[]).forEach((N,K)=>{$[N]=K}),M.forEach(N=>{const K=o(N.lithology_name,$[N.lithology_name]||0),X=N.distances,re=N.top_elevations,D=N.bottom_elevations;if(!(X.length<2)){m.fillStyle=K,m.globalAlpha=.85,m.beginPath(),m.moveTo(L(X[0]),k(re[0]));for(let O=1;O<X.length;O++)m.lineTo(L(X[O]),k(re[O]));for(let O=X.length-1;O>=0;O--)m.lineTo(L(X[O]),k(D[O]));m.closePath(),m.fill(),m.globalAlpha=1,m.strokeStyle="#444",m.lineWidth=1,m.beginPath();for(let O=0;O<X.length;O++)O===0?m.moveTo(L(X[O]),k(re[O])):m.lineTo(L(X[O]),k(re[O]));m.stroke(),m.beginPath();for(let O=0;O<X.length;O++)O===0?m.moveTo(L(X[O]),k(D[O])):m.lineTo(L(X[O]),k(D[O]));m.stroke()}}),b.forEach(N=>{const K=L(N.distance),X=Math.max(16,p/Math.max(8,b.length*2));N.layers.forEach((re,D)=>{const O=o(re.lithology_name,$[re.lithology_name]||D),Y=k(re.top_elevation),j=k(re.bottom_elevation),J=Math.max(3,j-Y);if(m.fillStyle=O,m.globalAlpha=.95,m.fillRect(K-X/2,Y,X,J),m.globalAlpha=1,m.strokeStyle="#000",m.lineWidth=1.5,m.strokeRect(K-X/2,Y,X,J),J>14){m.fillStyle="#000",m.font="bold 11px sans-serif",m.textAlign="left",m.textBaseline="middle";const ae=(Y+j)/2;m.fillText(`${re.layer_no}  ${re.thickness.toFixed(1)}m`,K+X/2+6,ae)}}),m.fillStyle="#000",m.font="bold 13px sans-serif",m.textAlign="center",m.textBaseline="bottom",m.fillText(N.hole_id,K,g.top-8),m.fillStyle="#666",m.font="10px sans-serif",m.textBaseline="top",m.fillText(`标高${N.elevation.toFixed(1)}m`,K,_-g.bottom+22)}),m.strokeStyle="#000",m.lineWidth=1.5,m.strokeRect(g.left,g.top,p,d),m.fillStyle="#333",m.font="13px sans-serif",m.textAlign="center",m.textBaseline="top",m.fillText("水平距离 (m)",f/2,_-18),m.save(),m.translate(16,_/2),m.rotate(-Math.PI/2),m.textAlign="center",m.textBaseline="middle",m.fillText("高程 (m)",0,0),m.restore(),((te=u.lithologies)==null?void 0:te.length)>0){const N=f-g.right-140,K=g.top+10;m.fillStyle="rgba(255,255,255,0.92)",m.fillRect(N-8,K-6,148,u.lithologies.length*20+12),m.strokeStyle="#ccc",m.lineWidth=1,m.strokeRect(N-8,K-6,148,u.lithologies.length*20+12),u.lithologies.forEach((X,re)=>{const D=K+re*20;m.fillStyle=o(X,re),m.fillRect(N,D,14,14),m.strokeStyle="#000",m.lineWidth=.5,m.strokeRect(N,D,14,14),m.fillStyle="#333",m.font="12px sans-serif",m.textAlign="left",m.textBaseline="middle",m.fillText(X,N+20,D+7)})}m.fillStyle="#333",m.font="bold 14px sans-serif",m.textAlign="left",m.textBaseline="top",m.fillText(`插值方式: ${u.interpolation_method||"linear"}`,g.left+8,g.top+8)}ca(()=>{n&&Js().then(()=>c());const u=new ResizeObserver(()=>{n&&s&&c()});return s!=null&&s.parentElement&&u.observe(s.parentElement),()=>u.disconnect()}),fc(()=>{n&&s&&c()});function l(u){xr[u?"unshift":"push"](()=>{s=u,t(0,s)})}return i.$$.update=()=>{i.$$.dirty&3&&n&&s&&Js().then(()=>c())},[s,n,l]}class du extends bn{constructor(e){super(),yn(this,e,fu,hu,Sn,{})}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ha="161",wi={ROTATE:0,DOLLY:1,PAN:2},Ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pu=0,no=1,mu=2,dc=1,_u=2,Hn=3,oi=0,tn=1,ln=2,ii=0,Ji=1,io=2,ro=3,so=4,gu=5,_i=100,vu=101,xu=102,ao=103,oo=104,Eu=200,Mu=201,Su=202,bu=203,Qs=204,ea=205,yu=206,Tu=207,Au=208,wu=209,Cu=210,Ru=211,Pu=212,Lu=213,Du=214,Iu=0,Uu=1,Nu=2,ns=3,Ou=4,Fu=5,Bu=6,zu=7,fa=0,ku=1,Vu=2,ri=0,Hu=1,Gu=2,Wu=3,Xu=4,qu=5,ju=6,pc=300,nr=301,ir=302,ta=303,na=304,ls=306,ia=1e3,En=1001,ra=1002,Zt=1003,lo=1004,dr=1005,en=1006,xs=1007,vi=1008,si=1009,Yu=1010,Ku=1011,da=1012,mc=1013,ti=1014,Xn=1015,br=1016,_c=1017,gc=1018,xi=1020,Zu=1021,Mn=1023,$u=1024,Ju=1025,Ei=1026,rr=1027,Qu=1028,vc=1029,eh=1030,xc=1031,Ec=1033,Es=33776,Ms=33777,Ss=33778,bs=33779,co=35840,uo=35841,ho=35842,fo=35843,Mc=36196,po=37492,mo=37496,_o=37808,go=37809,vo=37810,xo=37811,Eo=37812,Mo=37813,So=37814,bo=37815,yo=37816,To=37817,Ao=37818,wo=37819,Co=37820,Ro=37821,ys=36492,Po=36494,Lo=36495,th=36283,Do=36284,Io=36285,Uo=36286,Sc=3e3,Mi=3001,nh=3200,ih=3201,bc=0,rh=1,_n="",zt="srgb",Yn="srgb-linear",pa="display-p3",cs="display-p3-linear",is="linear",Mt="srgb",rs="rec709",ss="p3",Ri=7680,No=519,sh=512,ah=513,oh=514,yc=515,lh=516,ch=517,uh=518,hh=519,Oo=35044,Fo="300 es",sa=1035,qn=2e3,as=2001;class Ai{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zr=Math.PI/180,aa=180/Math.PI;function yr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function $t(i,e,t){return Math.max(e,Math.min(t,i))}function fh(i,e){return(i%e+e)%e}function Ts(i,e,t){return(1-t)*i+t*e}function Bo(i){return(i&i-1)===0&&i!==0}function oa(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function pr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const dh={DEG2RAD:Zr};class rt{constructor(e=0,t=0){rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(e,t,n,r,s,a,o,c,l){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],_=n[5],m=n[8],g=r[0],p=r[3],d=r[6],b=r[1],M=r[4],R=r[7],P=r[2],A=r[5],y=r[8];return s[0]=a*g+o*b+c*P,s[3]=a*p+o*M+c*A,s[6]=a*d+o*R+c*y,s[1]=l*g+u*b+h*P,s[4]=l*p+u*M+h*A,s[7]=l*d+u*R+h*y,s[2]=f*g+_*b+m*P,s[5]=f*p+_*M+m*A,s[8]=f*d+_*R+m*y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*s,_=l*s-a*c,m=t*h+n*f+r*_;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=h*g,e[1]=(r*l-u*n)*g,e[2]=(o*n-r*a)*g,e[3]=f*g,e[4]=(u*t-r*c)*g,e[5]=(r*s-o*t)*g,e[6]=_*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(As.makeScale(e,t)),this}rotate(e){return this.premultiply(As.makeRotation(-e)),this}translate(e,t){return this.premultiply(As.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const As=new pt;function Tc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function os(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ph(){const i=os("canvas");return i.style.display="block",i}const zo={};function Qi(i){i in zo||(zo[i]=!0,console.warn(i))}const ko=new pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vo=new pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ar={[Yn]:{transfer:is,primaries:rs,toReference:i=>i,fromReference:i=>i},[zt]:{transfer:Mt,primaries:rs,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[cs]:{transfer:is,primaries:ss,toReference:i=>i.applyMatrix3(Vo),fromReference:i=>i.applyMatrix3(ko)},[pa]:{transfer:Mt,primaries:ss,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Vo),fromReference:i=>i.applyMatrix3(ko).convertLinearToSRGB()}},mh=new Set([Yn,cs]),Et={enabled:!0,_workingColorSpace:Yn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!mh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Ar[e].toReference,r=Ar[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ar[i].primaries},getTransfer:function(i){return i===_n?is:Ar[i].transfer}};function er(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ws(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Pi;class Ac{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pi===void 0&&(Pi=os("canvas")),Pi.width=e.width,Pi.height=e.height;const n=Pi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Pi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=os("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=er(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(er(t[n]/255)*255):t[n]=er(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _h=0;class wc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=yr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Cs(r[a].image)):s.push(Cs(r[a]))}else s=Cs(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Cs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ac.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gh=0;class Yt extends Ai{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,n=En,r=En,s=en,a=vi,o=Mn,c=si,l=Yt.DEFAULT_ANISOTROPY,u=_n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=yr(),this.name="",this.source=new wc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Qi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Mi?zt:_n),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ia:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case ra:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ia:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case ra:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Qi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===zt?Mi:Sc}set encoding(e){Qi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Mi?zt:_n}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=pc;Yt.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,n=0,r=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],_=c[5],m=c[9],g=c[2],p=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(m+p)<.1&&Math.abs(l+_+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,R=(_+1)/2,P=(d+1)/2,A=(u+f)/4,y=(h+g)/4,L=(m+p)/4;return M>R&&M>P?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=A/n,s=y/n):R>P?R<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(R),n=A/r,s=L/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=y/s,r=L/s),this.set(n,r,s,t),this}let b=Math.sqrt((p-m)*(p-m)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(p-m)/b,this.y=(h-g)/b,this.z=(f-u)/b,this.w=Math.acos((l+_+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vh extends Ai{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Qi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Mi?zt:_n),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Yt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new wc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends vh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Cc extends Yt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xh extends Yt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ti{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3];const f=s[a+0],_=s[a+1],m=s[a+2],g=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=_,e[t+2]=m,e[t+3]=g;return}if(h!==g||c!==f||l!==_||u!==m){let p=1-o;const d=c*f+l*_+u*m+h*g,b=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const P=Math.sqrt(M),A=Math.atan2(P,d*b);p=Math.sin(p*A)/P,o=Math.sin(o*A)/P}const R=o*b;if(c=c*p+f*R,l=l*p+_*R,u=u*p+m*R,h=h*p+g*R,p===1-o){const P=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=P,l*=P,u*=P,h*=P}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[a],f=s[a+1],_=s[a+2],m=s[a+3];return e[t]=o*m+u*h+c*_-l*f,e[t+1]=c*m+u*f+l*h-o*_,e[t+2]=l*m+u*_+o*f-c*h,e[t+3]=u*m-o*h-c*f-l*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),h=o(s/2),f=c(n/2),_=c(r/2),m=c(s/2);switch(a){case"XYZ":this._x=f*u*h+l*_*m,this._y=l*_*h-f*u*m,this._z=l*u*m+f*_*h,this._w=l*u*h-f*_*m;break;case"YXZ":this._x=f*u*h+l*_*m,this._y=l*_*h-f*u*m,this._z=l*u*m-f*_*h,this._w=l*u*h+f*_*m;break;case"ZXY":this._x=f*u*h-l*_*m,this._y=l*_*h+f*u*m,this._z=l*u*m+f*_*h,this._w=l*u*h-f*_*m;break;case"ZYX":this._x=f*u*h-l*_*m,this._y=l*_*h+f*u*m,this._z=l*u*m-f*_*h,this._w=l*u*h+f*_*m;break;case"YZX":this._x=f*u*h+l*_*m,this._y=l*_*h+f*u*m,this._z=l*u*m-f*_*h,this._w=l*u*h-f*_*m;break;case"XZY":this._x=f*u*h-l*_*m,this._y=l*_*h-f*u*m,this._z=l*u*m+f*_*h,this._w=l*u*h+f*_*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const _=.5/Math.sqrt(f+1);this._w=.25/_,this._x=(u-c)*_,this._y=(s-l)*_,this._z=(a-r)*_}else if(n>o&&n>h){const _=2*Math.sqrt(1+n-o-h);this._w=(u-c)/_,this._x=.25*_,this._y=(r+a)/_,this._z=(s+l)/_}else if(o>h){const _=2*Math.sqrt(1+o-n-h);this._w=(s-l)/_,this._x=(r+a)/_,this._y=.25*_,this._z=(c+u)/_}else{const _=2*Math.sqrt(1+h-n-o);this._w=(a-r)/_,this._x=(s+l)/_,this._y=(c+u)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const _=1-t;return this._w=_*a+t*this._w,this._x=_*n+t*this._x,this._y=_*r+t*this._y,this._z=_*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class de{constructor(e=0,t=0,n=0){de.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ho.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ho.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Rs.copy(this).projectOnVector(e),this.sub(Rs)}reflect(e){return this.sub(Rs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rs=new de,Ho=new Ti;class Tr{constructor(e=new de(1/0,1/0,1/0),t=new de(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,gn):gn.fromBufferAttribute(s,a),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wr.copy(n.boundingBox)),wr.applyMatrix4(e.matrixWorld),this.union(wr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mr),Cr.subVectors(this.max,mr),Li.subVectors(e.a,mr),Di.subVectors(e.b,mr),Ii.subVectors(e.c,mr),Kn.subVectors(Di,Li),Zn.subVectors(Ii,Di),hi.subVectors(Li,Ii);let t=[0,-Kn.z,Kn.y,0,-Zn.z,Zn.y,0,-hi.z,hi.y,Kn.z,0,-Kn.x,Zn.z,0,-Zn.x,hi.z,0,-hi.x,-Kn.y,Kn.x,0,-Zn.y,Zn.x,0,-hi.y,hi.x,0];return!Ps(t,Li,Di,Ii,Cr)||(t=[1,0,0,0,1,0,0,0,1],!Ps(t,Li,Di,Ii,Cr))?!1:(Rr.crossVectors(Kn,Zn),t=[Rr.x,Rr.y,Rr.z],Ps(t,Li,Di,Ii,Cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fn=[new de,new de,new de,new de,new de,new de,new de,new de],gn=new de,wr=new Tr,Li=new de,Di=new de,Ii=new de,Kn=new de,Zn=new de,hi=new de,mr=new de,Cr=new de,Rr=new de,fi=new de;function Ps(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){fi.fromArray(i,s);const o=r.x*Math.abs(fi.x)+r.y*Math.abs(fi.y)+r.z*Math.abs(fi.z),c=e.dot(fi),l=t.dot(fi),u=n.dot(fi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Eh=new Tr,_r=new de,Ls=new de;class us{constructor(e=new de,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Eh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);const t=_r.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(_r,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ls.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(Ls)),this.expandByPoint(_r.copy(e.center).sub(Ls))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bn=new de,Ds=new de,Pr=new de,$n=new de,Is=new de,Lr=new de,Us=new de;class ma{constructor(e=new de,t=new de(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ds.copy(e).add(t).multiplyScalar(.5),Pr.copy(t).sub(e).normalize(),$n.copy(this.origin).sub(Ds);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Pr),o=$n.dot(this.direction),c=-$n.dot(Pr),l=$n.lengthSq(),u=Math.abs(1-a*a);let h,f,_,m;if(u>0)if(h=a*c-o,f=a*o-c,m=s*u,h>=0)if(f>=-m)if(f<=m){const g=1/u;h*=g,f*=g,_=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=s,h=Math.max(0,-(a*f+o)),_=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(a*f+o)),_=-h*h+f*(f+2*c)+l;else f<=-m?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-c),s),_=-h*h+f*(f+2*c)+l):f<=m?(h=0,f=Math.min(Math.max(-s,-c),s),_=f*(f+2*c)+l):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-c),s),_=-h*h+f*(f+2*c)+l);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),_=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ds).addScaledVector(Pr,f),_}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);const n=Bn.dot(this.direction),r=Bn.dot(Bn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,n,r,s){Is.subVectors(t,e),Lr.subVectors(n,e),Us.crossVectors(Is,Lr);let a=this.direction.dot(Us),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$n.subVectors(this.origin,e);const c=o*this.direction.dot(Lr.crossVectors($n,Lr));if(c<0)return null;const l=o*this.direction.dot(Is.cross($n));if(l<0||c+l>a)return null;const u=-o*$n.dot(Us);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt{constructor(e,t,n,r,s,a,o,c,l,u,h,f,_,m,g,p){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,u,h,f,_,m,g,p)}set(e,t,n,r,s,a,o,c,l,u,h,f,_,m,g,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=_,d[7]=m,d[11]=g,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ui.setFromMatrixColumn(e,0).length(),s=1/Ui.setFromMatrixColumn(e,1).length(),a=1/Ui.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,_=a*h,m=o*u,g=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=_+m*l,t[5]=f-g*l,t[9]=-o*c,t[2]=g-f*l,t[6]=m+_*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,_=c*h,m=l*u,g=l*h;t[0]=f+g*o,t[4]=m*o-_,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=_*o-m,t[6]=g+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,_=c*h,m=l*u,g=l*h;t[0]=f-g*o,t[4]=-a*h,t[8]=m+_*o,t[1]=_+m*o,t[5]=a*u,t[9]=g-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,_=a*h,m=o*u,g=o*h;t[0]=c*u,t[4]=m*l-_,t[8]=f*l+g,t[1]=c*h,t[5]=g*l+f,t[9]=_*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,_=a*l,m=o*c,g=o*l;t[0]=c*u,t[4]=g-f*h,t[8]=m*h+_,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=_*h+m,t[10]=f-g*h}else if(e.order==="XZY"){const f=a*c,_=a*l,m=o*c,g=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+g,t[5]=a*u,t[9]=_*h-m,t[2]=m*h-_,t[6]=o*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mh,e,Sh)}lookAt(e,t,n){const r=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),Jn.crossVectors(n,an),Jn.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Jn.crossVectors(n,an)),Jn.normalize(),Dr.crossVectors(an,Jn),r[0]=Jn.x,r[4]=Dr.x,r[8]=an.x,r[1]=Jn.y,r[5]=Dr.y,r[9]=an.y,r[2]=Jn.z,r[6]=Dr.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],_=n[13],m=n[2],g=n[6],p=n[10],d=n[14],b=n[3],M=n[7],R=n[11],P=n[15],A=r[0],y=r[4],L=r[8],k=r[12],x=r[1],T=r[5],$=r[9],te=r[13],N=r[2],K=r[6],X=r[10],re=r[14],D=r[3],O=r[7],Y=r[11],j=r[15];return s[0]=a*A+o*x+c*N+l*D,s[4]=a*y+o*T+c*K+l*O,s[8]=a*L+o*$+c*X+l*Y,s[12]=a*k+o*te+c*re+l*j,s[1]=u*A+h*x+f*N+_*D,s[5]=u*y+h*T+f*K+_*O,s[9]=u*L+h*$+f*X+_*Y,s[13]=u*k+h*te+f*re+_*j,s[2]=m*A+g*x+p*N+d*D,s[6]=m*y+g*T+p*K+d*O,s[10]=m*L+g*$+p*X+d*Y,s[14]=m*k+g*te+p*re+d*j,s[3]=b*A+M*x+R*N+P*D,s[7]=b*y+M*T+R*K+P*O,s[11]=b*L+M*$+R*X+P*Y,s[15]=b*k+M*te+R*re+P*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],_=e[14],m=e[3],g=e[7],p=e[11],d=e[15];return m*(+s*c*h-r*l*h-s*o*f+n*l*f+r*o*_-n*c*_)+g*(+t*c*_-t*l*f+s*a*f-r*a*_+r*l*u-s*c*u)+p*(+t*l*h-t*o*_-s*a*h+n*a*_+s*o*u-n*l*u)+d*(-r*o*u-t*c*h+t*o*f+r*a*h-n*a*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],_=e[11],m=e[12],g=e[13],p=e[14],d=e[15],b=h*p*l-g*f*l+g*c*_-o*p*_-h*c*d+o*f*d,M=m*f*l-u*p*l-m*c*_+a*p*_+u*c*d-a*f*d,R=u*g*l-m*h*l+m*o*_-a*g*_-u*o*d+a*h*d,P=m*h*c-u*g*c-m*o*f+a*g*f+u*o*p-a*h*p,A=t*b+n*M+r*R+s*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/A;return e[0]=b*y,e[1]=(g*f*s-h*p*s-g*r*_+n*p*_+h*r*d-n*f*d)*y,e[2]=(o*p*s-g*c*s+g*r*l-n*p*l-o*r*d+n*c*d)*y,e[3]=(h*c*s-o*f*s-h*r*l+n*f*l+o*r*_-n*c*_)*y,e[4]=M*y,e[5]=(u*p*s-m*f*s+m*r*_-t*p*_-u*r*d+t*f*d)*y,e[6]=(m*c*s-a*p*s-m*r*l+t*p*l+a*r*d-t*c*d)*y,e[7]=(a*f*s-u*c*s+u*r*l-t*f*l-a*r*_+t*c*_)*y,e[8]=R*y,e[9]=(m*h*s-u*g*s-m*n*_+t*g*_+u*n*d-t*h*d)*y,e[10]=(a*g*s-m*o*s+m*n*l-t*g*l-a*n*d+t*o*d)*y,e[11]=(u*o*s-a*h*s-u*n*l+t*h*l+a*n*_-t*o*_)*y,e[12]=P*y,e[13]=(u*g*r-m*h*r+m*n*f-t*g*f-u*n*p+t*h*p)*y,e[14]=(m*o*r-a*g*r-m*n*c+t*g*c+a*n*p-t*o*p)*y,e[15]=(a*h*r-u*o*r+u*n*c-t*h*c-a*n*f+t*o*f)*y,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,f=s*l,_=s*u,m=s*h,g=a*u,p=a*h,d=o*h,b=c*l,M=c*u,R=c*h,P=n.x,A=n.y,y=n.z;return r[0]=(1-(g+d))*P,r[1]=(_+R)*P,r[2]=(m-M)*P,r[3]=0,r[4]=(_-R)*A,r[5]=(1-(f+d))*A,r[6]=(p+b)*A,r[7]=0,r[8]=(m+M)*y,r[9]=(p-b)*y,r[10]=(1-(f+g))*y,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Ui.set(r[0],r[1],r[2]).length();const a=Ui.set(r[4],r[5],r[6]).length(),o=Ui.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],vn.copy(this);const l=1/s,u=1/a,h=1/o;return vn.elements[0]*=l,vn.elements[1]*=l,vn.elements[2]*=l,vn.elements[4]*=u,vn.elements[5]*=u,vn.elements[6]*=u,vn.elements[8]*=h,vn.elements[9]*=h,vn.elements[10]*=h,t.setFromRotationMatrix(vn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=qn){const c=this.elements,l=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let _,m;if(o===qn)_=-(a+s)/(a-s),m=-2*a*s/(a-s);else if(o===as)_=-a/(a-s),m=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=qn){const c=this.elements,l=1/(t-e),u=1/(n-r),h=1/(a-s),f=(t+e)*l,_=(n+r)*u;let m,g;if(o===qn)m=(a+s)*h,g=-2*h;else if(o===as)m=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-_,c[2]=0,c[6]=0,c[10]=g,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ui=new de,vn=new Pt,Mh=new de(0,0,0),Sh=new de(1,1,1),Jn=new de,Dr=new de,an=new de,Go=new Pt,Wo=new Ti;class hs{constructor(e=0,t=0,n=0,r=hs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,_),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,_),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin($t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Go.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Go,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wo.setFromEuler(this),this.setFromQuaternion(Wo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hs.DEFAULT_ORDER="XYZ";class Rc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bh=0;const Xo=new de,Ni=new Ti,zn=new Pt,Ir=new de,gr=new de,yh=new de,Th=new Ti,qo=new de(1,0,0),jo=new de(0,1,0),Yo=new de(0,0,1),Ah={type:"added"},wh={type:"removed"};class kt extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new de,t=new hs,n=new Ti,r=new de(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new pt}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.premultiply(Ni),this}rotateX(e){return this.rotateOnAxis(qo,e)}rotateY(e){return this.rotateOnAxis(jo,e)}rotateZ(e){return this.rotateOnAxis(Yo,e)}translateOnAxis(e,t){return Xo.copy(e).applyQuaternion(this.quaternion),this.position.add(Xo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qo,e)}translateY(e){return this.translateOnAxis(jo,e)}translateZ(e){return this.translateOnAxis(Yo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ir.copy(e):Ir.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(gr,Ir,this.up):zn.lookAt(Ir,gr,this.up),this.quaternion.setFromRotationMatrix(zn),r&&(zn.extractRotation(r.matrixWorld),Ni.setFromRotationMatrix(zn),this.quaternion.premultiply(Ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ah)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,e,yh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,Th,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),_=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),_.length>0&&(n.animations=_),m.length>0&&(n.nodes=m)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}kt.DEFAULT_UP=new de(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new de,kn=new de,Ns=new de,Vn=new de,Oi=new de,Fi=new de,Ko=new de,Os=new de,Fs=new de,Bs=new de;class wn{constructor(e=new de,t=new de,n=new de){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),xn.subVectors(e,t),r.cross(xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){xn.subVectors(r,t),kn.subVectors(n,t),Ns.subVectors(e,t);const a=xn.dot(xn),o=xn.dot(kn),c=xn.dot(Ns),l=kn.dot(kn),u=kn.dot(Ns),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,_=(l*c-o*u)*f,m=(a*u-o*c)*f;return s.set(1-_-m,m,_)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,Vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Vn.x),c.addScaledVector(a,Vn.y),c.addScaledVector(o,Vn.z),c)}static isFrontFacing(e,t,n,r){return xn.subVectors(n,t),kn.subVectors(e,t),xn.cross(kn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),xn.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return wn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Oi.subVectors(r,n),Fi.subVectors(s,n),Os.subVectors(e,n);const c=Oi.dot(Os),l=Fi.dot(Os);if(c<=0&&l<=0)return t.copy(n);Fs.subVectors(e,r);const u=Oi.dot(Fs),h=Fi.dot(Fs);if(u>=0&&h<=u)return t.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Oi,a);Bs.subVectors(e,s);const _=Oi.dot(Bs),m=Fi.dot(Bs);if(m>=0&&_<=m)return t.copy(s);const g=_*l-c*m;if(g<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(Fi,o);const p=u*m-_*h;if(p<=0&&h-u>=0&&_-m>=0)return Ko.subVectors(s,r),o=(h-u)/(h-u+(_-m)),t.copy(r).addScaledVector(Ko,o);const d=1/(p+g+f);return a=g*d,o=f*d,t.copy(n).addScaledVector(Oi,a).addScaledVector(Fi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function zs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ht{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Et.workingColorSpace){return this.r=e,this.g=t,this.b=n,Et.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Et.workingColorSpace){if(e=fh(e,1),t=$t(t,0,1),n=$t(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=zs(a,s,e+1/3),this.g=zs(a,s,e),this.b=zs(a,s,e-1/3)}return Et.toWorkingColorSpace(this,r),this}setStyle(e,t=zt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const n=Pc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return Et.fromWorkingColorSpace(Wt.copy(this),e),Math.round($t(Wt.r*255,0,255))*65536+Math.round($t(Wt.g*255,0,255))*256+Math.round($t(Wt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.fromWorkingColorSpace(Wt.copy(this),t);const n=Wt.r,r=Wt.g,s=Wt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Et.workingColorSpace){return Et.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=zt){Et.fromWorkingColorSpace(Wt.copy(this),e);const t=Wt.r,n=Wt.g,r=Wt.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(Ur);const n=Ts(Qn.h,Ur.h,t),r=Ts(Qn.s,Ur.s,t),s=Ts(Qn.l,Ur.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new ht;ht.NAMES=Pc;let Ch=0;class or extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=yr(),this.name="",this.type="Material",this.blending=Ji,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qs,this.blendDst=ea,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=No,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qs&&(n.blendSrc=this.blendSrc),this.blendDst!==ea&&(n.blendDst=this.blendDst),this.blendEquation!==_i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==No&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _a extends or{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new de,Nr=new rt;class Cn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Oo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Qi("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Nr.fromBufferAttribute(this,t),Nr.applyMatrix3(e),this.setXY(t,Nr.x,Nr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array),r=Qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array),r=Qt(r,this.array),s=Qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oo&&(e.usage=this.usage),e}}class Lc extends Cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Dc extends Cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class wt extends Cn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Rh=0;const pn=new Pt,ks=new kt,Bi=new de,on=new Tr,vr=new Tr,Ot=new de;class nn extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=yr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tc(e)?Dc:Lc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new pt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return ks.lookAt(e),ks.updateMatrix(),this.applyMatrix4(ks.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new wt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new de(-1/0,-1/0,-1/0),new de(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];on.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new us);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new de,1/0);return}if(e){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];vr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(on.min,vr.min),on.expandByPoint(Ot),Ot.addVectors(on.max,vr.max),on.expandByPoint(Ot)):(on.expandByPoint(vr.min),on.expandByPoint(vr.max))}on.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ot));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ot.fromBufferAttribute(o,l),c&&(Bi.fromBufferAttribute(e,l),Ot.add(Bi)),r=Math.max(r,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let x=0;x<o;x++)l[x]=new de,u[x]=new de;const h=new de,f=new de,_=new de,m=new rt,g=new rt,p=new rt,d=new de,b=new de;function M(x,T,$){h.fromArray(r,x*3),f.fromArray(r,T*3),_.fromArray(r,$*3),m.fromArray(a,x*2),g.fromArray(a,T*2),p.fromArray(a,$*2),f.sub(h),_.sub(h),g.sub(m),p.sub(m);const te=1/(g.x*p.y-p.x*g.y);isFinite(te)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(_,-g.y).multiplyScalar(te),b.copy(_).multiplyScalar(g.x).addScaledVector(f,-p.x).multiplyScalar(te),l[x].add(d),l[T].add(d),l[$].add(d),u[x].add(b),u[T].add(b),u[$].add(b))}let R=this.groups;R.length===0&&(R=[{start:0,count:n.length}]);for(let x=0,T=R.length;x<T;++x){const $=R[x],te=$.start,N=$.count;for(let K=te,X=te+N;K<X;K+=3)M(n[K+0],n[K+1],n[K+2])}const P=new de,A=new de,y=new de,L=new de;function k(x){y.fromArray(s,x*3),L.copy(y);const T=l[x];P.copy(T),P.sub(y.multiplyScalar(y.dot(T))).normalize(),A.crossVectors(L,T);const te=A.dot(u[x])<0?-1:1;c[x*4]=P.x,c[x*4+1]=P.y,c[x*4+2]=P.z,c[x*4+3]=te}for(let x=0,T=R.length;x<T;++x){const $=R[x],te=$.start,N=$.count;for(let K=te,X=te+N;K<X;K+=3)k(n[K+0]),k(n[K+1]),k(n[K+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,_=n.count;f<_;f++)n.setXYZ(f,0,0,0);const r=new de,s=new de,a=new de,o=new de,c=new de,l=new de,u=new de,h=new de;if(e)for(let f=0,_=e.count;f<_;f+=3){const m=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,_=t.count;f<_;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let _=0,m=0;for(let g=0,p=c.length;g<p;g++){o.isInterleavedBufferAttribute?_=c[g]*o.data.stride+o.offset:_=c[g]*u;for(let d=0;d<u;d++)f[m++]=l[_++]}return new Cn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nn,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],_=e(f,n);c.push(_)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const _=l[h];u.push(_.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,_=h.length;f<_;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zo=new Pt,di=new ma,Or=new us,$o=new de,zi=new de,ki=new de,Vi=new de,Vs=new de,Fr=new de,Br=new rt,zr=new rt,kr=new rt,Jo=new de,Qo=new de,el=new de,Vr=new de,Hr=new de;class Xt extends kt{constructor(e=new nn,t=new _a){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Fr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(Vs.fromBufferAttribute(h,e),a?Fr.addScaledVector(Vs,u):Fr.addScaledVector(Vs.sub(t),u))}t.add(Fr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(s),di.copy(e.ray).recast(e.near),!(Or.containsPoint(di.origin)===!1&&(di.intersectSphere(Or,$o)===null||di.origin.distanceToSquared($o)>(e.far-e.near)**2))&&(Zo.copy(s).invert(),di.copy(e.ray).applyMatrix4(Zo),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,di)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,_=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,g=f.length;m<g;m++){const p=f[m],d=a[p.materialIndex],b=Math.max(p.start,_.start),M=Math.min(o.count,Math.min(p.start+p.count,_.start+_.count));for(let R=b,P=M;R<P;R+=3){const A=o.getX(R),y=o.getX(R+1),L=o.getX(R+2);r=Gr(this,d,e,n,l,u,h,A,y,L),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const m=Math.max(0,_.start),g=Math.min(o.count,_.start+_.count);for(let p=m,d=g;p<d;p+=3){const b=o.getX(p),M=o.getX(p+1),R=o.getX(p+2);r=Gr(this,a,e,n,l,u,h,b,M,R),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,g=f.length;m<g;m++){const p=f[m],d=a[p.materialIndex],b=Math.max(p.start,_.start),M=Math.min(c.count,Math.min(p.start+p.count,_.start+_.count));for(let R=b,P=M;R<P;R+=3){const A=R,y=R+1,L=R+2;r=Gr(this,d,e,n,l,u,h,A,y,L),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const m=Math.max(0,_.start),g=Math.min(c.count,_.start+_.count);for(let p=m,d=g;p<d;p+=3){const b=p,M=p+1,R=p+2;r=Gr(this,a,e,n,l,u,h,b,M,R),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Ph(i,e,t,n,r,s,a,o){let c;if(e.side===tn?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===oi,o),c===null)return null;Hr.copy(o),Hr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Hr);return l<t.near||l>t.far?null:{distance:l,point:Hr.clone(),object:i}}function Gr(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,zi),i.getVertexPosition(c,ki),i.getVertexPosition(l,Vi);const u=Ph(i,e,t,n,zi,ki,Vi,Vr);if(u){r&&(Br.fromBufferAttribute(r,o),zr.fromBufferAttribute(r,c),kr.fromBufferAttribute(r,l),u.uv=wn.getInterpolation(Vr,zi,ki,Vi,Br,zr,kr,new rt)),s&&(Br.fromBufferAttribute(s,o),zr.fromBufferAttribute(s,c),kr.fromBufferAttribute(s,l),u.uv1=wn.getInterpolation(Vr,zi,ki,Vi,Br,zr,kr,new rt),u.uv2=u.uv1),a&&(Jo.fromBufferAttribute(a,o),Qo.fromBufferAttribute(a,c),el.fromBufferAttribute(a,l),u.normal=wn.getInterpolation(Vr,zi,ki,Vi,Jo,Qo,el,new de),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new de,materialIndex:0};wn.getNormal(zi,ki,Vi,h.normal),u.face=h}return u}class lr extends nn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,_=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,r,a,2),m("x","z","y",1,-1,e,n,-t,r,a,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new wt(l,3)),this.setAttribute("normal",new wt(u,3)),this.setAttribute("uv",new wt(h,2));function m(g,p,d,b,M,R,P,A,y,L,k){const x=R/y,T=P/L,$=R/2,te=P/2,N=A/2,K=y+1,X=L+1;let re=0,D=0;const O=new de;for(let Y=0;Y<X;Y++){const j=Y*T-te;for(let J=0;J<K;J++){const ae=J*x-$;O[g]=ae*b,O[p]=j*M,O[d]=N,l.push(O.x,O.y,O.z),O[g]=0,O[p]=0,O[d]=A>0?1:-1,u.push(O.x,O.y,O.z),h.push(J/y),h.push(1-Y/L),re+=1}}for(let Y=0;Y<L;Y++)for(let j=0;j<y;j++){const J=f+j+K*Y,ae=f+j+K*(Y+1),q=f+(j+1)+K*(Y+1),G=f+(j+1)+K*Y;c.push(J,ae,G),c.push(ae,q,G),D+=6}o.addGroup(_,D,k),_+=D,f+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function sr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Kt(i){const e={};for(let t=0;t<i.length;t++){const n=sr(i[t]);for(const r in n)e[r]=n[r]}return e}function Lh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ic(i){return i.getRenderTarget()===null?i.outputColorSpace:Et.workingColorSpace}const Dh={clone:sr,merge:Kt};var Ih=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends or{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ih,this.fragmentShader=Uh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sr(e.uniforms),this.uniformsGroups=Lh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Uc extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ei=new de,tl=new rt,nl=new rt;class mn extends Uc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=aa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return aa*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ei.x,ei.y).multiplyScalar(-e/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-e/ei.z)}getViewSize(e,t){return this.getViewBounds(e,tl,nl),t.subVectors(nl,tl)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hi=-90,Gi=1;class Nh extends kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new mn(Hi,Gi,e,t);r.layers=this.layers,this.add(r);const s=new mn(Hi,Gi,e,t);s.layers=this.layers,this.add(s);const a=new mn(Hi,Gi,e,t);a.layers=this.layers,this.add(a);const o=new mn(Hi,Gi,e,t);o.layers=this.layers,this.add(o);const c=new mn(Hi,Gi,e,t);c.layers=this.layers,this.add(c);const l=new mn(Hi,Gi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===qn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===as)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,f,_),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Nc extends Yt{constructor(e,t,n,r,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:nr,super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Oh extends yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Qi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Mi?zt:_n),this.texture=new Nc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new lr(5,5,5),s=new li({name:"CubemapFromEquirect",uniforms:sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:ii});s.uniforms.tEquirect.value=t;const a=new Xt(r,s),o=t.minFilter;return t.minFilter===vi&&(t.minFilter=en),new Nh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const Hs=new de,Fh=new de,Bh=new pt;class Wn{constructor(e=new de(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Hs.subVectors(n,t).cross(Fh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Hs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Bh.getNormalMatrix(e),r=this.coplanarPoint(Hs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new us,Wr=new de;class ga{constructor(e=new Wn,t=new Wn,n=new Wn,r=new Wn,s=new Wn,a=new Wn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qn){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],h=r[6],f=r[7],_=r[8],m=r[9],g=r[10],p=r[11],d=r[12],b=r[13],M=r[14],R=r[15];if(n[0].setComponents(c-s,f-l,p-_,R-d).normalize(),n[1].setComponents(c+s,f+l,p+_,R+d).normalize(),n[2].setComponents(c+a,f+u,p+m,R+b).normalize(),n[3].setComponents(c-a,f-u,p-m,R-b).normalize(),n[4].setComponents(c-o,f-h,p-g,R-M).normalize(),t===qn)n[5].setComponents(c+o,f+h,p+g,R+M).normalize();else if(t===as)n[5].setComponents(o,h,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Wr.x=r.normal.x>0?e.max.x:e.min.x,Wr.y=r.normal.y>0?e.max.y:e.min.y,Wr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Oc(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function zh(i,e){const t=e.isWebGL2,n=new WeakMap;function r(l,u){const h=l.array,f=l.usage,_=h.byteLength,m=i.createBuffer();i.bindBuffer(u,m),i.bufferData(u,h,f),l.onUploadCallback();let g;if(h instanceof Float32Array)g=i.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=i.SHORT;else if(h instanceof Uint32Array)g=i.UNSIGNED_INT;else if(h instanceof Int32Array)g=i.INT;else if(h instanceof Int8Array)g=i.BYTE;else if(h instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:_}}function s(l,u,h){const f=u.array,_=u._updateRange,m=u.updateRanges;if(i.bindBuffer(h,l),_.count===-1&&m.length===0&&i.bufferSubData(h,0,f),m.length!==0){for(let g=0,p=m.length;g<p;g++){const d=m[g];t?i.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):i.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}_.count!==-1&&(t?i.bufferSubData(h,_.offset*f.BYTES_PER_ELEMENT,f,_.offset,_.count):i.bufferSubData(h,_.offset*f.BYTES_PER_ELEMENT,f.subarray(_.offset,_.offset+_.count)),_.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);if(h===void 0)n.set(l,r(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,l,u),h.version=l.version}}return{get:a,remove:o,update:c}}class ar extends nn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,h=e/o,f=t/c,_=[],m=[],g=[],p=[];for(let d=0;d<u;d++){const b=d*f-a;for(let M=0;M<l;M++){const R=M*h-s;m.push(R,-b,0),g.push(0,0,1),p.push(M/o),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let b=0;b<o;b++){const M=b+l*d,R=b+l*(d+1),P=b+1+l*(d+1),A=b+1+l*d;_.push(M,R,A),_.push(R,P,A)}this.setIndex(_),this.setAttribute("position",new wt(m,3)),this.setAttribute("normal",new wt(g,3)),this.setAttribute("uv",new wt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ar(e.width,e.height,e.widthSegments,e.heightSegments)}}var kh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vh=`#ifdef USE_ALPHAHASH
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
#endif`,Hh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qh=`#ifdef USE_AOMAP
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
#endif`,jh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yh=`#ifdef USE_BATCHING
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
#endif`,Kh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Zh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$h=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qh=`#ifdef USE_IRIDESCENCE
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
#endif`,ef=`#ifdef USE_BUMPMAP
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
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,uf=`#define PI 3.141592653589793
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
} // validated`,hf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ff=`vec3 transformedNormal = objectNormal;
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
#endif`,df=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_f=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gf="gl_FragColor = linearToOutputTexel( gl_FragColor );",vf=`
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
}`,xf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mf=`#ifdef USE_ENVMAP
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
#endif`,Sf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bf=`#ifdef USE_ENVMAP
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
#endif`,yf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Af=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cf=`#ifdef USE_GRADIENTMAP
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
}`,Rf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Pf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,If=`uniform bool receiveShadow;
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
#endif`,Uf=`#ifdef USE_ENVMAP
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
#endif`,Nf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ff=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zf=`PhysicalMaterial material;
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
#endif`,kf=`struct PhysicalMaterial {
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
}`,Vf=`
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
#endif`,Hf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,jf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Yf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$f=`#if defined( USE_POINTS_UV )
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
#endif`,Jf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ed=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,td=`#ifdef USE_MORPHNORMALS
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
#endif`,nd=`#ifdef USE_MORPHTARGETS
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
#endif`,id=`#ifdef USE_MORPHTARGETS
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
#endif`,rd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ad=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,od=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ld=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cd=`#ifdef USE_NORMALMAP
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
#endif`,ud=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,md=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_d=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ed=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Md=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Td=`float getShadowMask() {
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
}`,Ad=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wd=`#ifdef USE_SKINNING
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
#endif`,Cd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rd=`#ifdef USE_SKINNING
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
#endif`,Pd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ld=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Id=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ud=`#ifdef USE_TRANSMISSION
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
#endif`,Nd=`#ifdef USE_TRANSMISSION
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
#endif`,Od=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vd=`uniform sampler2D t2D;
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
}`,Hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qd=`#include <common>
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
}`,jd=`#if DEPTH_PACKING == 3200
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
}`,Yd=`#define DISTANCE
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
}`,Kd=`#define DISTANCE
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
}`,Zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$d=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jd=`uniform float scale;
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
}`,Qd=`uniform vec3 diffuse;
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
}`,ep=`#include <common>
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
}`,tp=`uniform vec3 diffuse;
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
}`,np=`#define LAMBERT
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
}`,ip=`#define LAMBERT
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
}`,rp=`#define MATCAP
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
}`,sp=`#define MATCAP
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
}`,ap=`#define NORMAL
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
}`,op=`#define NORMAL
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
}`,lp=`#define PHONG
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
}`,cp=`#define PHONG
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
}`,up=`#define STANDARD
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
}`,hp=`#define STANDARD
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
}`,fp=`#define TOON
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
}`,dp=`#define TOON
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
}`,pp=`uniform float size;
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
}`,mp=`uniform vec3 diffuse;
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
}`,_p=`#include <common>
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
}`,gp=`uniform vec3 color;
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
}`,vp=`uniform float rotation;
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
}`,xp=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:kh,alphahash_pars_fragment:Vh,alphamap_fragment:Hh,alphamap_pars_fragment:Gh,alphatest_fragment:Wh,alphatest_pars_fragment:Xh,aomap_fragment:qh,aomap_pars_fragment:jh,batching_pars_vertex:Yh,batching_vertex:Kh,begin_vertex:Zh,beginnormal_vertex:$h,bsdfs:Jh,iridescence_fragment:Qh,bumpmap_pars_fragment:ef,clipping_planes_fragment:tf,clipping_planes_pars_fragment:nf,clipping_planes_pars_vertex:rf,clipping_planes_vertex:sf,color_fragment:af,color_pars_fragment:of,color_pars_vertex:lf,color_vertex:cf,common:uf,cube_uv_reflection_fragment:hf,defaultnormal_vertex:ff,displacementmap_pars_vertex:df,displacementmap_vertex:pf,emissivemap_fragment:mf,emissivemap_pars_fragment:_f,colorspace_fragment:gf,colorspace_pars_fragment:vf,envmap_fragment:xf,envmap_common_pars_fragment:Ef,envmap_pars_fragment:Mf,envmap_pars_vertex:Sf,envmap_physical_pars_fragment:Uf,envmap_vertex:bf,fog_vertex:yf,fog_pars_vertex:Tf,fog_fragment:Af,fog_pars_fragment:wf,gradientmap_pars_fragment:Cf,lightmap_fragment:Rf,lightmap_pars_fragment:Pf,lights_lambert_fragment:Lf,lights_lambert_pars_fragment:Df,lights_pars_begin:If,lights_toon_fragment:Nf,lights_toon_pars_fragment:Of,lights_phong_fragment:Ff,lights_phong_pars_fragment:Bf,lights_physical_fragment:zf,lights_physical_pars_fragment:kf,lights_fragment_begin:Vf,lights_fragment_maps:Hf,lights_fragment_end:Gf,logdepthbuf_fragment:Wf,logdepthbuf_pars_fragment:Xf,logdepthbuf_pars_vertex:qf,logdepthbuf_vertex:jf,map_fragment:Yf,map_pars_fragment:Kf,map_particle_fragment:Zf,map_particle_pars_fragment:$f,metalnessmap_fragment:Jf,metalnessmap_pars_fragment:Qf,morphcolor_vertex:ed,morphnormal_vertex:td,morphtarget_pars_vertex:nd,morphtarget_vertex:id,normal_fragment_begin:rd,normal_fragment_maps:sd,normal_pars_fragment:ad,normal_pars_vertex:od,normal_vertex:ld,normalmap_pars_fragment:cd,clearcoat_normal_fragment_begin:ud,clearcoat_normal_fragment_maps:hd,clearcoat_pars_fragment:fd,iridescence_pars_fragment:dd,opaque_fragment:pd,packing:md,premultiplied_alpha_fragment:_d,project_vertex:gd,dithering_fragment:vd,dithering_pars_fragment:xd,roughnessmap_fragment:Ed,roughnessmap_pars_fragment:Md,shadowmap_pars_fragment:Sd,shadowmap_pars_vertex:bd,shadowmap_vertex:yd,shadowmask_pars_fragment:Td,skinbase_vertex:Ad,skinning_pars_vertex:wd,skinning_vertex:Cd,skinnormal_vertex:Rd,specularmap_fragment:Pd,specularmap_pars_fragment:Ld,tonemapping_fragment:Dd,tonemapping_pars_fragment:Id,transmission_fragment:Ud,transmission_pars_fragment:Nd,uv_pars_fragment:Od,uv_pars_vertex:Fd,uv_vertex:Bd,worldpos_vertex:zd,background_vert:kd,background_frag:Vd,backgroundCube_vert:Hd,backgroundCube_frag:Gd,cube_vert:Wd,cube_frag:Xd,depth_vert:qd,depth_frag:jd,distanceRGBA_vert:Yd,distanceRGBA_frag:Kd,equirect_vert:Zd,equirect_frag:$d,linedashed_vert:Jd,linedashed_frag:Qd,meshbasic_vert:ep,meshbasic_frag:tp,meshlambert_vert:np,meshlambert_frag:ip,meshmatcap_vert:rp,meshmatcap_frag:sp,meshnormal_vert:ap,meshnormal_frag:op,meshphong_vert:lp,meshphong_frag:cp,meshphysical_vert:up,meshphysical_frag:hp,meshtoon_vert:fp,meshtoon_frag:dp,points_vert:pp,points_frag:mp,shadow_vert:_p,shadow_frag:gp,sprite_vert:vp,sprite_frag:xp},Ge={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},An={basic:{uniforms:Kt([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Kt([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new ht(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Kt([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Kt([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Kt([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new ht(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Kt([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Kt([Ge.points,Ge.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Kt([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Kt([Ge.common,Ge.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Kt([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Kt([Ge.sprite,Ge.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:Kt([Ge.common,Ge.displacementmap,{referencePosition:{value:new de},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:Kt([Ge.lights,Ge.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};An.physical={uniforms:Kt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Xr={r:0,b:0,g:0};function Ep(i,e,t,n,r,s,a){const o=new ht(0);let c=s===!0?0:1,l,u,h=null,f=0,_=null;function m(p,d){let b=!1,M=d.isScene===!0?d.background:null;M&&M.isTexture&&(M=(d.backgroundBlurriness>0?t:e).get(M)),M===null?g(o,c):M&&M.isColor&&(g(M,1),b=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),M&&(M.isCubeTexture||M.mapping===ls)?(u===void 0&&(u=new Xt(new lr(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:sr(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,A,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Et.getTransfer(M.colorSpace)!==Mt,(h!==M||f!==M.version||_!==i.toneMapping)&&(u.material.needsUpdate=!0,h=M,f=M.version,_=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Xt(new ar(2,2),new li({name:"BackgroundMaterial",uniforms:sr(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=Et.getTransfer(M.colorSpace)!==Mt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||_!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,_=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,d){p.getRGB(Xr,Ic(i)),n.buffers.color.setClear(Xr.r,Xr.g,Xr.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(p,d=1){o.set(p),c=d,g(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,g(o,c)},render:m}}function Mp(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=p(null);let l=c,u=!1;function h(N,K,X,re,D){let O=!1;if(a){const Y=g(re,X,K);l!==Y&&(l=Y,_(l.object)),O=d(N,re,X,D),O&&b(N,re,X,D)}else{const Y=K.wireframe===!0;(l.geometry!==re.id||l.program!==X.id||l.wireframe!==Y)&&(l.geometry=re.id,l.program=X.id,l.wireframe=Y,O=!0)}D!==null&&t.update(D,i.ELEMENT_ARRAY_BUFFER),(O||u)&&(u=!1,L(N,K,X,re),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function _(N){return n.isWebGL2?i.bindVertexArray(N):s.bindVertexArrayOES(N)}function m(N){return n.isWebGL2?i.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function g(N,K,X){const re=X.wireframe===!0;let D=o[N.id];D===void 0&&(D={},o[N.id]=D);let O=D[K.id];O===void 0&&(O={},D[K.id]=O);let Y=O[re];return Y===void 0&&(Y=p(f()),O[re]=Y),Y}function p(N){const K=[],X=[],re=[];for(let D=0;D<r;D++)K[D]=0,X[D]=0,re[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:X,attributeDivisors:re,object:N,attributes:{},index:null}}function d(N,K,X,re){const D=l.attributes,O=K.attributes;let Y=0;const j=X.getAttributes();for(const J in j)if(j[J].location>=0){const q=D[J];let G=O[J];if(G===void 0&&(J==="instanceMatrix"&&N.instanceMatrix&&(G=N.instanceMatrix),J==="instanceColor"&&N.instanceColor&&(G=N.instanceColor)),q===void 0||q.attribute!==G||G&&q.data!==G.data)return!0;Y++}return l.attributesNum!==Y||l.index!==re}function b(N,K,X,re){const D={},O=K.attributes;let Y=0;const j=X.getAttributes();for(const J in j)if(j[J].location>=0){let q=O[J];q===void 0&&(J==="instanceMatrix"&&N.instanceMatrix&&(q=N.instanceMatrix),J==="instanceColor"&&N.instanceColor&&(q=N.instanceColor));const G={};G.attribute=q,q&&q.data&&(G.data=q.data),D[J]=G,Y++}l.attributes=D,l.attributesNum=Y,l.index=re}function M(){const N=l.newAttributes;for(let K=0,X=N.length;K<X;K++)N[K]=0}function R(N){P(N,0)}function P(N,K){const X=l.newAttributes,re=l.enabledAttributes,D=l.attributeDivisors;X[N]=1,re[N]===0&&(i.enableVertexAttribArray(N),re[N]=1),D[N]!==K&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,K),D[N]=K)}function A(){const N=l.newAttributes,K=l.enabledAttributes;for(let X=0,re=K.length;X<re;X++)K[X]!==N[X]&&(i.disableVertexAttribArray(X),K[X]=0)}function y(N,K,X,re,D,O,Y){Y===!0?i.vertexAttribIPointer(N,K,X,D,O):i.vertexAttribPointer(N,K,X,re,D,O)}function L(N,K,X,re){if(n.isWebGL2===!1&&(N.isInstancedMesh||re.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const D=re.attributes,O=X.getAttributes(),Y=K.defaultAttributeValues;for(const j in O){const J=O[j];if(J.location>=0){let ae=D[j];if(ae===void 0&&(j==="instanceMatrix"&&N.instanceMatrix&&(ae=N.instanceMatrix),j==="instanceColor"&&N.instanceColor&&(ae=N.instanceColor)),ae!==void 0){const q=ae.normalized,G=ae.itemSize,he=t.get(ae);if(he===void 0)continue;const ie=he.buffer,W=he.type,se=he.bytesPerElement,Z=n.isWebGL2===!0&&(W===i.INT||W===i.UNSIGNED_INT||ae.gpuType===mc);if(ae.isInterleavedBufferAttribute){const pe=ae.data,V=pe.stride,Ce=ae.offset;if(pe.isInstancedInterleavedBuffer){for(let fe=0;fe<J.locationSize;fe++)P(J.location+fe,pe.meshPerAttribute);N.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let fe=0;fe<J.locationSize;fe++)R(J.location+fe);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let fe=0;fe<J.locationSize;fe++)y(J.location+fe,G/J.locationSize,W,q,V*se,(Ce+G/J.locationSize*fe)*se,Z)}else{if(ae.isInstancedBufferAttribute){for(let pe=0;pe<J.locationSize;pe++)P(J.location+pe,ae.meshPerAttribute);N.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let pe=0;pe<J.locationSize;pe++)R(J.location+pe);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let pe=0;pe<J.locationSize;pe++)y(J.location+pe,G/J.locationSize,W,q,G*se,G/J.locationSize*pe*se,Z)}}else if(Y!==void 0){const q=Y[j];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(J.location,q);break;case 3:i.vertexAttrib3fv(J.location,q);break;case 4:i.vertexAttrib4fv(J.location,q);break;default:i.vertexAttrib1fv(J.location,q)}}}}A()}function k(){$();for(const N in o){const K=o[N];for(const X in K){const re=K[X];for(const D in re)m(re[D].object),delete re[D];delete K[X]}delete o[N]}}function x(N){if(o[N.id]===void 0)return;const K=o[N.id];for(const X in K){const re=K[X];for(const D in re)m(re[D].object),delete re[D];delete K[X]}delete o[N.id]}function T(N){for(const K in o){const X=o[K];if(X[N.id]===void 0)continue;const re=X[N.id];for(const D in re)m(re[D].object),delete re[D];delete X[N.id]}}function $(){te(),u=!0,l!==c&&(l=c,_(l.object))}function te(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:$,resetDefaultState:te,dispose:k,releaseStatesOfGeometry:x,releaseStatesOfProgram:T,initAttributes:M,enableAttribute:R,disableUnusedAttributes:A}}function Sp(i,e,t,n){const r=n.isWebGL2;let s;function a(u){s=u}function o(u,h){i.drawArrays(s,u,h),t.update(h,s,1)}function c(u,h,f){if(f===0)return;let _,m;if(r)_=i,m="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,u,h,f),t.update(h,s,f)}function l(u,h,f){if(f===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<f;m++)this.render(u[m],h[m]);else{_.multiDrawArraysWEBGL(s,u,0,h,0,f);let m=0;for(let g=0;g<f;g++)m+=h[g];t.update(m,s,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function bp(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=f>0,R=a||e.has("OES_texture_float"),P=M&&R,A=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:b,vertexTextures:M,floatFragmentTextures:R,floatVertexTextures:P,maxSamples:A}}function yp(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Wn,o=new pt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const _=h.length!==0||f||n!==0||r;return r=f,n=h.length,_},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,_){const m=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,d=i.get(h);if(!r||m===null||m.length===0||s&&!p)s?u(null):l();else{const b=s?0:n,M=b*4;let R=d.clippingState||null;c.value=R,R=u(m,f,M,_);for(let P=0;P!==M;++P)R[P]=t[P];d.clippingState=R,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,_,m){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=c.value,m!==!0||p===null){const d=_+g*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<d)&&(p=new Float32Array(d));for(let M=0,R=_;M!==g;++M,R+=4)a.copy(h[M]).applyMatrix4(b,o),a.normal.toArray(p,R),p[R+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function Tp(i){let e=new WeakMap;function t(a,o){return o===ta?a.mapping=nr:o===na&&(a.mapping=ir),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ta||o===na)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Oh(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Fc extends Uc{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ki=4,il=[.125,.215,.35,.446,.526,.582],gi=20,Gs=new Fc,rl=new ht;let Ws=null,Xs=0,qs=0;const mi=(1+Math.sqrt(5))/2,Wi=1/mi,sl=[new de(1,1,1),new de(-1,1,1),new de(1,1,-1),new de(-1,1,-1),new de(0,mi,Wi),new de(0,mi,-Wi),new de(Wi,0,mi),new de(-Wi,0,mi),new de(mi,Wi,0),new de(-mi,Wi,0)];class al{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ws=this._renderer.getRenderTarget(),Xs=this._renderer.getActiveCubeFace(),qs=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ll(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ws,Xs,qs),e.scissorTest=!1,qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===nr||e.mapping===ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ws=this._renderer.getRenderTarget(),Xs=this._renderer.getActiveCubeFace(),qs=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:br,format:Mn,colorSpace:Yn,depthBuffer:!1},r=ol(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ol(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ap(s)),this._blurMaterial=wp(s,e,t)}return r}_compileMaterial(e){const t=new Xt(this._lodPlanes[0],e);this._renderer.compile(t,Gs)}_sceneToCubeUV(e,t,n,r){const o=new mn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(rl),u.toneMapping=ri,u.autoClear=!1;const _=new _a({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),m=new Xt(new lr,_);let g=!1;const p=e.background;p?p.isColor&&(_.color.copy(p),e.background=null,g=!0):(_.color.copy(rl),g=!0);for(let d=0;d<6;d++){const b=d%3;b===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):b===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));const M=this._cubeSize;qr(r,b*M,d>2?M:0,M,M),u.setRenderTarget(r),g&&u.render(m,o),u.render(e,o)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===nr||e.mapping===ir;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ll());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Xt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;qr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Gs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=sl[(r-1)%sl.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Xt(this._lodPlanes[r],l),f=l.uniforms,_=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*gi-1),g=s/m,p=isFinite(s)?1+Math.floor(u*g):gi;p>gi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${gi}`);const d=[];let b=0;for(let y=0;y<gi;++y){const L=y/g,k=Math.exp(-L*L/2);d.push(k),y===0?b+=k:y<p&&(b+=2*k)}for(let y=0;y<d.length;y++)d[y]=d[y]/b;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=m,f.mipInt.value=M-n;const R=this._sizeLods[r],P=3*R*(r>M-Ki?r-M+Ki:0),A=4*(this._cubeSize-R);qr(t,P,A,3*R,2*R),c.setRenderTarget(t),c.render(h,Gs)}}function Ap(i){const e=[],t=[],n=[];let r=i;const s=i-Ki+1+il.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-Ki?c=il[a-i+Ki-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],_=6,m=6,g=3,p=2,d=1,b=new Float32Array(g*m*_),M=new Float32Array(p*m*_),R=new Float32Array(d*m*_);for(let A=0;A<_;A++){const y=A%3*2/3-1,L=A>2?0:-1,k=[y,L,0,y+2/3,L,0,y+2/3,L+1,0,y,L,0,y+2/3,L+1,0,y,L+1,0];b.set(k,g*m*A),M.set(f,p*m*A);const x=[A,A,A,A,A,A];R.set(x,d*m*A)}const P=new nn;P.setAttribute("position",new Cn(b,g)),P.setAttribute("uv",new Cn(M,p)),P.setAttribute("faceIndex",new Cn(R,d)),e.push(P),r>Ki&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ol(i,e,t){const n=new yi(i,e,t);return n.texture.mapping=ls,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function wp(i,e,t){const n=new Float32Array(gi),r=new de(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:va(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function ll(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:va(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function cl(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function va(){return`

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
	`}function Cp(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ta||c===na,u=c===nr||c===ir;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new al(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(l&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new al(i));const f=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Rp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Pp(i,e,t,n){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);for(const m in f.morphAttributes){const g=f.morphAttributes[m];for(let p=0,d=g.length;p<d;p++)e.remove(g[p])}f.removeEventListener("dispose",a),delete r[f.id];const _=s.get(f);_&&(e.remove(_),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const m in f)e.update(f[m],i.ARRAY_BUFFER);const _=h.morphAttributes;for(const m in _){const g=_[m];for(let p=0,d=g.length;p<d;p++)e.update(g[p],i.ARRAY_BUFFER)}}function l(h){const f=[],_=h.index,m=h.attributes.position;let g=0;if(_!==null){const b=_.array;g=_.version;for(let M=0,R=b.length;M<R;M+=3){const P=b[M+0],A=b[M+1],y=b[M+2];f.push(P,A,A,y,y,P)}}else if(m!==void 0){const b=m.array;g=m.version;for(let M=0,R=b.length/3-1;M<R;M+=3){const P=M+0,A=M+1,y=M+2;f.push(P,A,A,y,y,P)}}else return;const p=new(Tc(f)?Dc:Lc)(f,1);p.version=g;const d=s.get(h);d&&e.remove(d),s.set(h,p)}function u(h){const f=s.get(h);if(f){const _=h.index;_!==null&&f.version<_.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Lp(i,e,t,n){const r=n.isWebGL2;let s;function a(_){s=_}let o,c;function l(_){o=_.type,c=_.bytesPerElement}function u(_,m){i.drawElements(s,m,o,_*c),t.update(m,s,1)}function h(_,m,g){if(g===0)return;let p,d;if(r)p=i,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,o,_*c,g),t.update(m,s,g)}function f(_,m,g){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<g;d++)this.render(_[d]/c,m[d]);else{p.multiDrawElementsWEBGL(s,m,0,o,_,0,g);let d=0;for(let b=0;b<g;b++)d+=m[b];t.update(d,s,1)}}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function Dp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Ip(i,e){return i[0]-e[0]}function Up(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Np(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new Bt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,h){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=_!==void 0?_.length:0;let g=s.get(u);if(g===void 0||g.count!==m){let N=function(){$.dispose(),s.delete(u),u.removeEventListener("dispose",N)};g!==void 0&&g.texture.dispose();const b=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],y=u.morphAttributes.color||[];let L=0;b===!0&&(L=1),M===!0&&(L=2),R===!0&&(L=3);let k=u.attributes.position.count*L,x=1;k>e.maxTextureSize&&(x=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const T=new Float32Array(k*x*4*m),$=new Cc(T,k,x,m);$.type=Xn,$.needsUpdate=!0;const te=L*4;for(let K=0;K<m;K++){const X=P[K],re=A[K],D=y[K],O=k*x*4*K;for(let Y=0;Y<X.count;Y++){const j=Y*te;b===!0&&(a.fromBufferAttribute(X,Y),T[O+j+0]=a.x,T[O+j+1]=a.y,T[O+j+2]=a.z,T[O+j+3]=0),M===!0&&(a.fromBufferAttribute(re,Y),T[O+j+4]=a.x,T[O+j+5]=a.y,T[O+j+6]=a.z,T[O+j+7]=0),R===!0&&(a.fromBufferAttribute(D,Y),T[O+j+8]=a.x,T[O+j+9]=a.y,T[O+j+10]=a.z,T[O+j+11]=D.itemSize===4?a.w:1)}}g={count:m,texture:$,size:new rt(k,x)},s.set(u,g),u.addEventListener("dispose",N)}let p=0;for(let b=0;b<f.length;b++)p+=f[b];const d=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",d),h.getUniforms().setValue(i,"morphTargetInfluences",f),h.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}else{const _=f===void 0?0:f.length;let m=n[u.id];if(m===void 0||m.length!==_){m=[];for(let M=0;M<_;M++)m[M]=[M,0];n[u.id]=m}for(let M=0;M<_;M++){const R=m[M];R[0]=M,R[1]=f[M]}m.sort(Up);for(let M=0;M<8;M++)M<_&&m[M][1]?(o[M][0]=m[M][0],o[M][1]=m[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(Ip);const g=u.morphAttributes.position,p=u.morphAttributes.normal;let d=0;for(let M=0;M<8;M++){const R=o[M],P=R[0],A=R[1];P!==Number.MAX_SAFE_INTEGER&&A?(g&&u.getAttribute("morphTarget"+M)!==g[P]&&u.setAttribute("morphTarget"+M,g[P]),p&&u.getAttribute("morphNormal"+M)!==p[P]&&u.setAttribute("morphNormal"+M,p[P]),r[M]=A,d+=A):(g&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),p&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),r[M]=0)}const b=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(i,"morphTargetBaseInfluence",b),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function Op(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class Bc extends Yt{constructor(e,t,n,r,s,a,o,c,l,u){if(u=u!==void 0?u:Ei,u!==Ei&&u!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ei&&(n=ti),n===void 0&&u===rr&&(n=xi),super(null,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Zt,this.minFilter=c!==void 0?c:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const zc=new Yt,kc=new Bc(1,1);kc.compareFunction=yc;const Vc=new Cc,Hc=new xh,Gc=new Nc,ul=[],hl=[],fl=new Float32Array(16),dl=new Float32Array(9),pl=new Float32Array(4);function cr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ul[r];if(s===void 0&&(s=new Float32Array(r),ul[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function It(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fs(i,e){let t=hl[e];t===void 0&&(t=new Int32Array(e),hl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Fp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Bp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2fv(this.addr,e),It(t,e)}}function zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;i.uniform3fv(this.addr,e),It(t,e)}}function kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4fv(this.addr,e),It(t,e)}}function Vp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,n))return;pl.set(n),i.uniformMatrix2fv(this.addr,!1,pl),It(t,n)}}function Hp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,n))return;dl.set(n),i.uniformMatrix3fv(this.addr,!1,dl),It(t,n)}}function Gp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,n))return;fl.set(n),i.uniformMatrix4fv(this.addr,!1,fl),It(t,n)}}function Wp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2iv(this.addr,e),It(t,e)}}function qp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3iv(this.addr,e),It(t,e)}}function jp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4iv(this.addr,e),It(t,e)}}function Yp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2uiv(this.addr,e),It(t,e)}}function Zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3uiv(this.addr,e),It(t,e)}}function $p(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4uiv(this.addr,e),It(t,e)}}function Jp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?kc:zc;t.setTexture2D(e||s,r)}function Qp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Hc,r)}function em(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Gc,r)}function tm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Vc,r)}function nm(i){switch(i){case 5126:return Fp;case 35664:return Bp;case 35665:return zp;case 35666:return kp;case 35674:return Vp;case 35675:return Hp;case 35676:return Gp;case 5124:case 35670:return Wp;case 35667:case 35671:return Xp;case 35668:case 35672:return qp;case 35669:case 35673:return jp;case 5125:return Yp;case 36294:return Kp;case 36295:return Zp;case 36296:return $p;case 35678:case 36198:case 36298:case 36306:case 35682:return Jp;case 35679:case 36299:case 36307:return Qp;case 35680:case 36300:case 36308:case 36293:return em;case 36289:case 36303:case 36311:case 36292:return tm}}function im(i,e){i.uniform1fv(this.addr,e)}function rm(i,e){const t=cr(e,this.size,2);i.uniform2fv(this.addr,t)}function sm(i,e){const t=cr(e,this.size,3);i.uniform3fv(this.addr,t)}function am(i,e){const t=cr(e,this.size,4);i.uniform4fv(this.addr,t)}function om(i,e){const t=cr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function lm(i,e){const t=cr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function cm(i,e){const t=cr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function um(i,e){i.uniform1iv(this.addr,e)}function hm(i,e){i.uniform2iv(this.addr,e)}function fm(i,e){i.uniform3iv(this.addr,e)}function dm(i,e){i.uniform4iv(this.addr,e)}function pm(i,e){i.uniform1uiv(this.addr,e)}function mm(i,e){i.uniform2uiv(this.addr,e)}function _m(i,e){i.uniform3uiv(this.addr,e)}function gm(i,e){i.uniform4uiv(this.addr,e)}function vm(i,e,t){const n=this.cache,r=e.length,s=fs(t,r);Dt(n,s)||(i.uniform1iv(this.addr,s),It(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||zc,s[a])}function xm(i,e,t){const n=this.cache,r=e.length,s=fs(t,r);Dt(n,s)||(i.uniform1iv(this.addr,s),It(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Hc,s[a])}function Em(i,e,t){const n=this.cache,r=e.length,s=fs(t,r);Dt(n,s)||(i.uniform1iv(this.addr,s),It(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Gc,s[a])}function Mm(i,e,t){const n=this.cache,r=e.length,s=fs(t,r);Dt(n,s)||(i.uniform1iv(this.addr,s),It(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Vc,s[a])}function Sm(i){switch(i){case 5126:return im;case 35664:return rm;case 35665:return sm;case 35666:return am;case 35674:return om;case 35675:return lm;case 35676:return cm;case 5124:case 35670:return um;case 35667:case 35671:return hm;case 35668:case 35672:return fm;case 35669:case 35673:return dm;case 5125:return pm;case 36294:return mm;case 36295:return _m;case 36296:return gm;case 35678:case 36198:case 36298:case 36306:case 35682:return vm;case 35679:case 36299:case 36307:return xm;case 35680:case 36300:case 36308:case 36293:return Em;case 36289:case 36303:case 36311:case 36292:return Mm}}class bm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=nm(t.type)}}class ym{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sm(t.type)}}class Tm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const js=/(\w+)(\])?(\[|\.)?/g;function ml(i,e){i.seq.push(e),i.map[e.id]=e}function Am(i,e,t){const n=i.name,r=n.length;for(js.lastIndex=0;;){const s=js.exec(n),a=js.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){ml(t,l===void 0?new bm(o,i,e):new ym(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Tm(o),ml(t,h)),t=h}}}class $r{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Am(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function _l(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const wm=37297;let Cm=0;function Rm(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Pm(i){const e=Et.getPrimaries(Et.workingColorSpace),t=Et.getPrimaries(i);let n;switch(e===t?n="":e===ss&&t===rs?n="LinearDisplayP3ToLinearSRGB":e===rs&&t===ss&&(n="LinearSRGBToLinearDisplayP3"),i){case Yn:case cs:return[n,"LinearTransferOETF"];case zt:case pa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function gl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Rm(i.getShaderSource(e),a)}else return r}function Lm(i,e){const t=Pm(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Dm(i,e){let t;switch(e){case Hu:t="Linear";break;case Gu:t="Reinhard";break;case Wu:t="OptimizedCineon";break;case Xu:t="ACESFilmic";break;case ju:t="AgX";break;case qu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Im(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zi).join(`
`)}function Um(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zi).join(`
`)}function Nm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Om(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Zi(i){return i!==""}function vl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Fm=/^[ \t]*#include +<([\w\d./]+)>/gm;function la(i){return i.replace(Fm,zm)}const Bm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function zm(i,e){let t=ut[e];if(t===void 0){const n=Bm.get(e);if(n!==void 0)t=ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return la(t)}const km=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function El(i){return i.replace(km,Vm)}function Vm(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ml(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Hm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===dc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===_u?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Hn&&(e="SHADOWMAP_TYPE_VSM"),e}function Gm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case nr:case ir:e="ENVMAP_TYPE_CUBE";break;case ls:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ir:e="ENVMAP_MODE_REFRACTION";break}return e}function Xm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case fa:e="ENVMAP_BLENDING_MULTIPLY";break;case ku:e="ENVMAP_BLENDING_MIX";break;case Vu:e="ENVMAP_BLENDING_ADD";break}return e}function qm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function jm(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Hm(t),l=Gm(t),u=Wm(t),h=Xm(t),f=qm(t),_=t.isWebGL2?"":Im(t),m=Um(t),g=Nm(s),p=r.createProgram();let d,b,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zi).join(`
`),d.length>0&&(d+=`
`),b=[_,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zi).join(`
`),b.length>0&&(b+=`
`)):(d=[Ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zi).join(`
`),b=[_,Ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?ut.tonemapping_pars_fragment:"",t.toneMapping!==ri?Dm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,Lm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zi).join(`
`)),a=la(a),a=vl(a,t),a=xl(a,t),o=la(o),o=vl(o,t),o=xl(o,t),a=El(a),o=El(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,d=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Fo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const R=M+d+a,P=M+b+o,A=_l(r,r.VERTEX_SHADER,R),y=_l(r,r.FRAGMENT_SHADER,P);r.attachShader(p,A),r.attachShader(p,y),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function L($){if(i.debug.checkShaderErrors){const te=r.getProgramInfoLog(p).trim(),N=r.getShaderInfoLog(A).trim(),K=r.getShaderInfoLog(y).trim();let X=!0,re=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,p,A,y);else{const D=gl(r,A,"vertex"),O=gl(r,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+$.name+`
Material Type: `+$.type+`

Program Info Log: `+te+`
`+D+`
`+O)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(N===""||K==="")&&(re=!1);re&&($.diagnostics={runnable:X,programLog:te,vertexShader:{log:N,prefix:d},fragmentShader:{log:K,prefix:b}})}r.deleteShader(A),r.deleteShader(y),k=new $r(r,p),x=Om(r,p)}let k;this.getUniforms=function(){return k===void 0&&L(this),k};let x;this.getAttributes=function(){return x===void 0&&L(this),x};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(p,wm)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cm++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=y,this}let Ym=0;class Km{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Zm(e),t.set(e,n)),n}}class Zm{constructor(e){this.id=Ym++,this.code=e,this.usedTimes=0}}function $m(i,e,t,n,r,s,a){const o=new Rc,c=new Km,l=new Set,u=[],h=r.isWebGL2,f=r.logarithmicDepthBuffer,_=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function d(x,T,$,te,N){const K=te.fog,X=N.geometry,re=x.isMeshStandardMaterial?te.environment:null,D=(x.isMeshStandardMaterial?t:e).get(x.envMap||re),O=D&&D.mapping===ls?D.image.height:null,Y=g[x.type];x.precision!==null&&(m=r.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const j=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,J=j!==void 0?j.length:0;let ae=0;X.morphAttributes.position!==void 0&&(ae=1),X.morphAttributes.normal!==void 0&&(ae=2),X.morphAttributes.color!==void 0&&(ae=3);let q,G,he,ie;if(Y){const at=An[Y];q=at.vertexShader,G=at.fragmentShader}else q=x.vertexShader,G=x.fragmentShader,c.update(x),he=c.getVertexShaderID(x),ie=c.getFragmentShaderID(x);const W=i.getRenderTarget(),se=N.isInstancedMesh===!0,Z=N.isBatchedMesh===!0,pe=!!x.map,V=!!x.matcap,Ce=!!D,fe=!!x.aoMap,Te=!!x.lightMap,le=!!x.bumpMap,Pe=!!x.normalMap,oe=!!x.displacementMap,S=!!x.emissiveMap,E=!!x.metalnessMap,F=!!x.roughnessMap,ue=x.anisotropy>0,ce=x.clearcoat>0,ge=x.iridescence>0,Me=x.sheen>0,Ee=x.transmission>0,be=ue&&!!x.anisotropyMap,Ie=ce&&!!x.clearcoatMap,Xe=ce&&!!x.clearcoatNormalMap,Ae=ce&&!!x.clearcoatRoughnessMap,We=ge&&!!x.iridescenceMap,Ye=ge&&!!x.iridescenceThicknessMap,ke=Me&&!!x.sheenColorMap,je=Me&&!!x.sheenRoughnessMap,Oe=!!x.specularMap,$e=!!x.specularColorMap,H=!!x.specularIntensityMap,Ne=Ee&&!!x.transmissionMap,Ve=Ee&&!!x.thicknessMap,qe=!!x.gradientMap,U=!!x.alphaMap,ve=x.alphaTest>0,_e=!!x.alphaHash,Ue=!!x.extensions;let De=ri;x.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(De=i.toneMapping);const et={isWebGL2:h,shaderID:Y,shaderType:x.type,shaderName:x.name,vertexShader:q,fragmentShader:G,defines:x.defines,customVertexShaderID:he,customFragmentShaderID:ie,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:Z,instancing:se,instancingColor:se&&N.instanceColor!==null,supportsVertexTextures:_,outputColorSpace:W===null?i.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Yn,alphaToCoverage:!!x.alphaToCoverage,map:pe,matcap:V,envMap:Ce,envMapMode:Ce&&D.mapping,envMapCubeUVHeight:O,aoMap:fe,lightMap:Te,bumpMap:le,normalMap:Pe,displacementMap:_&&oe,emissiveMap:S,normalMapObjectSpace:Pe&&x.normalMapType===rh,normalMapTangentSpace:Pe&&x.normalMapType===bc,metalnessMap:E,roughnessMap:F,anisotropy:ue,anisotropyMap:be,clearcoat:ce,clearcoatMap:Ie,clearcoatNormalMap:Xe,clearcoatRoughnessMap:Ae,iridescence:ge,iridescenceMap:We,iridescenceThicknessMap:Ye,sheen:Me,sheenColorMap:ke,sheenRoughnessMap:je,specularMap:Oe,specularColorMap:$e,specularIntensityMap:H,transmission:Ee,transmissionMap:Ne,thicknessMap:Ve,gradientMap:qe,opaque:x.transparent===!1&&x.blending===Ji&&x.alphaToCoverage===!1,alphaMap:U,alphaTest:ve,alphaHash:_e,combine:x.combine,mapUv:pe&&p(x.map.channel),aoMapUv:fe&&p(x.aoMap.channel),lightMapUv:Te&&p(x.lightMap.channel),bumpMapUv:le&&p(x.bumpMap.channel),normalMapUv:Pe&&p(x.normalMap.channel),displacementMapUv:oe&&p(x.displacementMap.channel),emissiveMapUv:S&&p(x.emissiveMap.channel),metalnessMapUv:E&&p(x.metalnessMap.channel),roughnessMapUv:F&&p(x.roughnessMap.channel),anisotropyMapUv:be&&p(x.anisotropyMap.channel),clearcoatMapUv:Ie&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:je&&p(x.sheenRoughnessMap.channel),specularMapUv:Oe&&p(x.specularMap.channel),specularColorMapUv:$e&&p(x.specularColorMap.channel),specularIntensityMapUv:H&&p(x.specularIntensityMap.channel),transmissionMapUv:Ne&&p(x.transmissionMap.channel),thicknessMapUv:Ve&&p(x.thicknessMap.channel),alphaMapUv:U&&p(x.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Pe||ue),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!X.attributes.uv&&(pe||U),fog:!!K,useFog:x.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:N.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ae,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&$.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,useLegacyLights:i._useLegacyLights,decodeVideoTexture:pe&&x.map.isVideoTexture===!0&&Et.getTransfer(x.map.colorSpace)===Mt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ln,flipSided:x.side===tn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:Ue&&x.extensions.derivatives===!0,extensionFragDepth:Ue&&x.extensions.fragDepth===!0,extensionDrawBuffers:Ue&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ue&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ue&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ue&&x.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return et.vertexUv1s=l.has(1),et.vertexUv2s=l.has(2),et.vertexUv3s=l.has(3),l.clear(),et}function b(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const $ in x.defines)T.push($),T.push(x.defines[$]);return x.isRawShaderMaterial===!1&&(M(T,x),R(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function M(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function R(x,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.alphaToCoverage&&o.enable(20),x.push(o.mask)}function P(x){const T=g[x.type];let $;if(T){const te=An[T];$=Dh.clone(te.uniforms)}else $=x.uniforms;return $}function A(x,T){let $;for(let te=0,N=u.length;te<N;te++){const K=u[te];if(K.cacheKey===T){$=K,++$.usedTimes;break}}return $===void 0&&($=new jm(i,T,x,s),u.push($)),$}function y(x){if(--x.usedTimes===0){const T=u.indexOf(x);u[T]=u[u.length-1],u.pop(),x.destroy()}}function L(x){c.remove(x)}function k(){c.dispose()}return{getParameters:d,getProgramCacheKey:b,getUniforms:P,acquireProgram:A,releaseProgram:y,releaseShaderCache:L,programs:u,dispose:k}}function Jm(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Qm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Sl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function bl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,f,_,m,g,p){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:_,groupOrder:m,renderOrder:h.renderOrder,z:g,group:p},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=_,d.groupOrder=m,d.renderOrder=h.renderOrder,d.z=g,d.group=p),e++,d}function o(h,f,_,m,g,p){const d=a(h,f,_,m,g,p);_.transmission>0?n.push(d):_.transparent===!0?r.push(d):t.push(d)}function c(h,f,_,m,g,p){const d=a(h,f,_,m,g,p);_.transmission>0?n.unshift(d):_.transparent===!0?r.unshift(d):t.unshift(d)}function l(h,f){t.length>1&&t.sort(h||Qm),n.length>1&&n.sort(f||Sl),r.length>1&&r.sort(f||Sl)}function u(){for(let h=e,f=i.length;h<f;h++){const _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function e_(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new bl,i.set(n,[a])):r>=s.length?(a=new bl,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function t_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new de,color:new ht};break;case"SpotLight":t={position:new de,direction:new de,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new de,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new de,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new de,halfWidth:new de,halfHeight:new de};break}return i[e.id]=t,t}}}function n_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let i_=0;function r_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function s_(i,e){const t=new t_,n=n_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new de);const s=new de,a=new Pt,o=new Pt;function c(u,h){let f=0,_=0,m=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let g=0,p=0,d=0,b=0,M=0,R=0,P=0,A=0,y=0,L=0,k=0;u.sort(r_);const x=h===!0?Math.PI:1;for(let $=0,te=u.length;$<te;$++){const N=u[$],K=N.color,X=N.intensity,re=N.distance,D=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=K.r*X*x,_+=K.g*X*x,m+=K.b*X*x;else if(N.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(N.sh.coefficients[O],X);k++}else if(N.isDirectionalLight){const O=t.get(N);if(O.color.copy(N.color).multiplyScalar(N.intensity*x),N.castShadow){const Y=N.shadow,j=n.get(N);j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,r.directionalShadow[g]=j,r.directionalShadowMap[g]=D,r.directionalShadowMatrix[g]=N.shadow.matrix,R++}r.directional[g]=O,g++}else if(N.isSpotLight){const O=t.get(N);O.position.setFromMatrixPosition(N.matrixWorld),O.color.copy(K).multiplyScalar(X*x),O.distance=re,O.coneCos=Math.cos(N.angle),O.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),O.decay=N.decay,r.spot[d]=O;const Y=N.shadow;if(N.map&&(r.spotLightMap[y]=N.map,y++,Y.updateMatrices(N),N.castShadow&&L++),r.spotLightMatrix[d]=Y.matrix,N.castShadow){const j=n.get(N);j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,r.spotShadow[d]=j,r.spotShadowMap[d]=D,A++}d++}else if(N.isRectAreaLight){const O=t.get(N);O.color.copy(K).multiplyScalar(X),O.halfWidth.set(N.width*.5,0,0),O.halfHeight.set(0,N.height*.5,0),r.rectArea[b]=O,b++}else if(N.isPointLight){const O=t.get(N);if(O.color.copy(N.color).multiplyScalar(N.intensity*x),O.distance=N.distance,O.decay=N.decay,N.castShadow){const Y=N.shadow,j=n.get(N);j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,j.shadowCameraNear=Y.camera.near,j.shadowCameraFar=Y.camera.far,r.pointShadow[p]=j,r.pointShadowMap[p]=D,r.pointShadowMatrix[p]=N.shadow.matrix,P++}r.point[p]=O,p++}else if(N.isHemisphereLight){const O=t.get(N);O.skyColor.copy(N.color).multiplyScalar(X*x),O.groundColor.copy(N.groundColor).multiplyScalar(X*x),r.hemi[M]=O,M++}}b>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ge.LTC_FLOAT_1,r.rectAreaLTC2=Ge.LTC_FLOAT_2):(r.rectAreaLTC1=Ge.LTC_HALF_1,r.rectAreaLTC2=Ge.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ge.LTC_FLOAT_1,r.rectAreaLTC2=Ge.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ge.LTC_HALF_1,r.rectAreaLTC2=Ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=_,r.ambient[2]=m;const T=r.hash;(T.directionalLength!==g||T.pointLength!==p||T.spotLength!==d||T.rectAreaLength!==b||T.hemiLength!==M||T.numDirectionalShadows!==R||T.numPointShadows!==P||T.numSpotShadows!==A||T.numSpotMaps!==y||T.numLightProbes!==k)&&(r.directional.length=g,r.spot.length=d,r.rectArea.length=b,r.point.length=p,r.hemi.length=M,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=A+y-L,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=k,T.directionalLength=g,T.pointLength=p,T.spotLength=d,T.rectAreaLength=b,T.hemiLength=M,T.numDirectionalShadows=R,T.numPointShadows=P,T.numSpotShadows=A,T.numSpotMaps=y,T.numLightProbes=k,r.version=i_++)}function l(u,h){let f=0,_=0,m=0,g=0,p=0;const d=h.matrixWorldInverse;for(let b=0,M=u.length;b<M;b++){const R=u[b];if(R.isDirectionalLight){const P=r.directional[f];P.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(d),f++}else if(R.isSpotLight){const P=r.spot[m];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(d),P.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(d),m++}else if(R.isRectAreaLight){const P=r.rectArea[g];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(d),o.identity(),a.copy(R.matrixWorld),a.premultiply(d),o.extractRotation(a),P.halfWidth.set(R.width*.5,0,0),P.halfHeight.set(0,R.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),g++}else if(R.isPointLight){const P=r.point[_];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(d),_++}else if(R.isHemisphereLight){const P=r.hemi[p];P.direction.setFromMatrixPosition(R.matrixWorld),P.direction.transformDirection(d),p++}}}return{setup:c,setupView:l,state:r}}function yl(i,e){const t=new s_(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(h){n.push(h)}function o(h){r.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function a_(i,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let c;return o===void 0?(c=new yl(i,e),t.set(s,[c])):a>=o.length?(c=new yl(i,e),o.push(c)):c=o[a],c}function r(){t=new WeakMap}return{get:n,dispose:r}}class o_ extends or{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class l_ extends or{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const c_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u_=`uniform sampler2D shadow_pass;
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
}`;function h_(i,e,t){let n=new ga;const r=new rt,s=new rt,a=new Bt,o=new o_({depthPacking:ih}),c=new l_,l={},u=t.maxTextureSize,h={[oi]:tn,[tn]:oi,[ln]:ln},f=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:c_,fragmentShader:u_}),_=f.clone();_.defines.HORIZONTAL_PASS=1;const m=new nn;m.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Xt(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dc;let d=this.type;this.render=function(A,y,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const k=i.getRenderTarget(),x=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),$=i.state;$.setBlending(ii),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const te=d!==Hn&&this.type===Hn,N=d===Hn&&this.type!==Hn;for(let K=0,X=A.length;K<X;K++){const re=A[K],D=re.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const O=D.getFrameExtents();if(r.multiply(O),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/O.x),r.x=s.x*O.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/O.y),r.y=s.y*O.y,D.mapSize.y=s.y)),D.map===null||te===!0||N===!0){const j=this.type!==Hn?{minFilter:Zt,magFilter:Zt}:{};D.map!==null&&D.map.dispose(),D.map=new yi(r.x,r.y,j),D.map.texture.name=re.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();const Y=D.getViewportCount();for(let j=0;j<Y;j++){const J=D.getViewport(j);a.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),$.viewport(a),D.updateMatrices(re,j),n=D.getFrustum(),R(y,L,D.camera,re,this.type)}D.isPointLightShadow!==!0&&this.type===Hn&&b(D,L),D.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(k,x,T)};function b(A,y){const L=e.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,_.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,_.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new yi(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(y,null,L,f,g,null),_.uniforms.shadow_pass.value=A.mapPass.texture,_.uniforms.resolution.value=A.mapSize,_.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(y,null,L,_,g,null)}function M(A,y,L,k){let x=null;const T=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)x=T;else if(x=L.isPointLight===!0?c:o,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const $=x.uuid,te=y.uuid;let N=l[$];N===void 0&&(N={},l[$]=N);let K=N[te];K===void 0&&(K=x.clone(),N[te]=K,y.addEventListener("dispose",P)),x=K}if(x.visible=y.visible,x.wireframe=y.wireframe,k===Hn?x.side=y.shadowSide!==null?y.shadowSide:y.side:x.side=y.shadowSide!==null?y.shadowSide:h[y.side],x.alphaMap=y.alphaMap,x.alphaTest=y.alphaTest,x.map=y.map,x.clipShadows=y.clipShadows,x.clippingPlanes=y.clippingPlanes,x.clipIntersection=y.clipIntersection,x.displacementMap=y.displacementMap,x.displacementScale=y.displacementScale,x.displacementBias=y.displacementBias,x.wireframeLinewidth=y.wireframeLinewidth,x.linewidth=y.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const $=i.properties.get(x);$.light=L}return x}function R(A,y,L,k,x){if(A.visible===!1)return;if(A.layers.test(y.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===Hn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const te=e.update(A),N=A.material;if(Array.isArray(N)){const K=te.groups;for(let X=0,re=K.length;X<re;X++){const D=K[X],O=N[D.materialIndex];if(O&&O.visible){const Y=M(A,O,k,x);A.onBeforeShadow(i,A,y,L,te,Y,D),i.renderBufferDirect(L,null,te,Y,A,D),A.onAfterShadow(i,A,y,L,te,Y,D)}}}else if(N.visible){const K=M(A,N,k,x);A.onBeforeShadow(i,A,y,L,te,K,null),i.renderBufferDirect(L,null,te,K,A,null),A.onAfterShadow(i,A,y,L,te,K,null)}}const $=A.children;for(let te=0,N=$.length;te<N;te++)R($[te],y,L,k,x)}function P(A){A.target.removeEventListener("dispose",P);for(const L in l){const k=l[L],x=A.target.uuid;x in k&&(k[x].dispose(),delete k[x])}}}function f_(i,e,t){const n=t.isWebGL2;function r(){let U=!1;const ve=new Bt;let _e=null;const Ue=new Bt(0,0,0,0);return{setMask:function(De){_e!==De&&!U&&(i.colorMask(De,De,De,De),_e=De)},setLocked:function(De){U=De},setClear:function(De,et,at,gt,yt){yt===!0&&(De*=gt,et*=gt,at*=gt),ve.set(De,et,at,gt),Ue.equals(ve)===!1&&(i.clearColor(De,et,at,gt),Ue.copy(ve))},reset:function(){U=!1,_e=null,Ue.set(-1,0,0,0)}}}function s(){let U=!1,ve=null,_e=null,Ue=null;return{setTest:function(De){De?se(i.DEPTH_TEST):Z(i.DEPTH_TEST)},setMask:function(De){ve!==De&&!U&&(i.depthMask(De),ve=De)},setFunc:function(De){if(_e!==De){switch(De){case Iu:i.depthFunc(i.NEVER);break;case Uu:i.depthFunc(i.ALWAYS);break;case Nu:i.depthFunc(i.LESS);break;case ns:i.depthFunc(i.LEQUAL);break;case Ou:i.depthFunc(i.EQUAL);break;case Fu:i.depthFunc(i.GEQUAL);break;case Bu:i.depthFunc(i.GREATER);break;case zu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=De}},setLocked:function(De){U=De},setClear:function(De){Ue!==De&&(i.clearDepth(De),Ue=De)},reset:function(){U=!1,ve=null,_e=null,Ue=null}}}function a(){let U=!1,ve=null,_e=null,Ue=null,De=null,et=null,at=null,gt=null,yt=null;return{setTest:function(st){U||(st?se(i.STENCIL_TEST):Z(i.STENCIL_TEST))},setMask:function(st){ve!==st&&!U&&(i.stencilMask(st),ve=st)},setFunc:function(st,xt,St){(_e!==st||Ue!==xt||De!==St)&&(i.stencilFunc(st,xt,St),_e=st,Ue=xt,De=St)},setOp:function(st,xt,St){(et!==st||at!==xt||gt!==St)&&(i.stencilOp(st,xt,St),et=st,at=xt,gt=St)},setLocked:function(st){U=st},setClear:function(st){yt!==st&&(i.clearStencil(st),yt=st)},reset:function(){U=!1,ve=null,_e=null,Ue=null,De=null,et=null,at=null,gt=null,yt=null}}}const o=new r,c=new s,l=new a,u=new WeakMap,h=new WeakMap;let f={},_={},m=new WeakMap,g=[],p=null,d=!1,b=null,M=null,R=null,P=null,A=null,y=null,L=null,k=new ht(0,0,0),x=0,T=!1,$=null,te=null,N=null,K=null,X=null;const re=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,O=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(Y)[1]),D=O>=1):Y.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),D=O>=2);let j=null,J={};const ae=i.getParameter(i.SCISSOR_BOX),q=i.getParameter(i.VIEWPORT),G=new Bt().fromArray(ae),he=new Bt().fromArray(q);function ie(U,ve,_e,Ue){const De=new Uint8Array(4),et=i.createTexture();i.bindTexture(U,et),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let at=0;at<_e;at++)n&&(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)?i.texImage3D(ve,0,i.RGBA,1,1,Ue,0,i.RGBA,i.UNSIGNED_BYTE,De):i.texImage2D(ve+at,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,De);return et}const W={};W[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),W[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(W[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),W[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),se(i.DEPTH_TEST),c.setFunc(ns),oe(!1),S(no),se(i.CULL_FACE),le(ii);function se(U){f[U]!==!0&&(i.enable(U),f[U]=!0)}function Z(U){f[U]!==!1&&(i.disable(U),f[U]=!1)}function pe(U,ve){return _[U]!==ve?(i.bindFramebuffer(U,ve),_[U]=ve,n&&(U===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=ve),U===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=ve)),!0):!1}function V(U,ve){let _e=g,Ue=!1;if(U)if(_e=m.get(ve),_e===void 0&&(_e=[],m.set(ve,_e)),U.isWebGLMultipleRenderTargets){const De=U.texture;if(_e.length!==De.length||_e[0]!==i.COLOR_ATTACHMENT0){for(let et=0,at=De.length;et<at;et++)_e[et]=i.COLOR_ATTACHMENT0+et;_e.length=De.length,Ue=!0}}else _e[0]!==i.COLOR_ATTACHMENT0&&(_e[0]=i.COLOR_ATTACHMENT0,Ue=!0);else _e[0]!==i.BACK&&(_e[0]=i.BACK,Ue=!0);Ue&&(t.isWebGL2?i.drawBuffers(_e):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(_e))}function Ce(U){return p!==U?(i.useProgram(U),p=U,!0):!1}const fe={[_i]:i.FUNC_ADD,[vu]:i.FUNC_SUBTRACT,[xu]:i.FUNC_REVERSE_SUBTRACT};if(n)fe[ao]=i.MIN,fe[oo]=i.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(fe[ao]=U.MIN_EXT,fe[oo]=U.MAX_EXT)}const Te={[Eu]:i.ZERO,[Mu]:i.ONE,[Su]:i.SRC_COLOR,[Qs]:i.SRC_ALPHA,[Cu]:i.SRC_ALPHA_SATURATE,[Au]:i.DST_COLOR,[yu]:i.DST_ALPHA,[bu]:i.ONE_MINUS_SRC_COLOR,[ea]:i.ONE_MINUS_SRC_ALPHA,[wu]:i.ONE_MINUS_DST_COLOR,[Tu]:i.ONE_MINUS_DST_ALPHA,[Ru]:i.CONSTANT_COLOR,[Pu]:i.ONE_MINUS_CONSTANT_COLOR,[Lu]:i.CONSTANT_ALPHA,[Du]:i.ONE_MINUS_CONSTANT_ALPHA};function le(U,ve,_e,Ue,De,et,at,gt,yt,st){if(U===ii){d===!0&&(Z(i.BLEND),d=!1);return}if(d===!1&&(se(i.BLEND),d=!0),U!==gu){if(U!==b||st!==T){if((M!==_i||A!==_i)&&(i.blendEquation(i.FUNC_ADD),M=_i,A=_i),st)switch(U){case Ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case io:i.blendFunc(i.ONE,i.ONE);break;case ro:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case so:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case io:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ro:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case so:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}R=null,P=null,y=null,L=null,k.set(0,0,0),x=0,b=U,T=st}return}De=De||ve,et=et||_e,at=at||Ue,(ve!==M||De!==A)&&(i.blendEquationSeparate(fe[ve],fe[De]),M=ve,A=De),(_e!==R||Ue!==P||et!==y||at!==L)&&(i.blendFuncSeparate(Te[_e],Te[Ue],Te[et],Te[at]),R=_e,P=Ue,y=et,L=at),(gt.equals(k)===!1||yt!==x)&&(i.blendColor(gt.r,gt.g,gt.b,yt),k.copy(gt),x=yt),b=U,T=!1}function Pe(U,ve){U.side===ln?Z(i.CULL_FACE):se(i.CULL_FACE);let _e=U.side===tn;ve&&(_e=!_e),oe(_e),U.blending===Ji&&U.transparent===!1?le(ii):le(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),c.setFunc(U.depthFunc),c.setTest(U.depthTest),c.setMask(U.depthWrite),o.setMask(U.colorWrite);const Ue=U.stencilWrite;l.setTest(Ue),Ue&&(l.setMask(U.stencilWriteMask),l.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),l.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),F(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):Z(i.SAMPLE_ALPHA_TO_COVERAGE)}function oe(U){$!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),$=U)}function S(U){U!==pu?(se(i.CULL_FACE),U!==te&&(U===no?i.cullFace(i.BACK):U===mu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Z(i.CULL_FACE),te=U}function E(U){U!==N&&(D&&i.lineWidth(U),N=U)}function F(U,ve,_e){U?(se(i.POLYGON_OFFSET_FILL),(K!==ve||X!==_e)&&(i.polygonOffset(ve,_e),K=ve,X=_e)):Z(i.POLYGON_OFFSET_FILL)}function ue(U){U?se(i.SCISSOR_TEST):Z(i.SCISSOR_TEST)}function ce(U){U===void 0&&(U=i.TEXTURE0+re-1),j!==U&&(i.activeTexture(U),j=U)}function ge(U,ve,_e){_e===void 0&&(j===null?_e=i.TEXTURE0+re-1:_e=j);let Ue=J[_e];Ue===void 0&&(Ue={type:void 0,texture:void 0},J[_e]=Ue),(Ue.type!==U||Ue.texture!==ve)&&(j!==_e&&(i.activeTexture(_e),j=_e),i.bindTexture(U,ve||W[U]),Ue.type=U,Ue.texture=ve)}function Me(){const U=J[j];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Ee(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Xe(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function We(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ye(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function je(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Oe(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $e(U){G.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),G.copy(U))}function H(U){he.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),he.copy(U))}function Ne(U,ve){let _e=h.get(ve);_e===void 0&&(_e=new WeakMap,h.set(ve,_e));let Ue=_e.get(U);Ue===void 0&&(Ue=i.getUniformBlockIndex(ve,U.name),_e.set(U,Ue))}function Ve(U,ve){const Ue=h.get(ve).get(U);u.get(ve)!==Ue&&(i.uniformBlockBinding(ve,Ue,U.__bindingPointIndex),u.set(ve,Ue))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},j=null,J={},_={},m=new WeakMap,g=[],p=null,d=!1,b=null,M=null,R=null,P=null,A=null,y=null,L=null,k=new ht(0,0,0),x=0,T=!1,$=null,te=null,N=null,K=null,X=null,G.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:se,disable:Z,bindFramebuffer:pe,drawBuffers:V,useProgram:Ce,setBlending:le,setMaterial:Pe,setFlipSided:oe,setCullFace:S,setLineWidth:E,setPolygonOffset:F,setScissorTest:ue,activeTexture:ce,bindTexture:ge,unbindTexture:Me,compressedTexImage2D:Ee,compressedTexImage3D:be,texImage2D:je,texImage3D:Oe,updateUBOMapping:Ne,uniformBlockBinding:Ve,texStorage2D:Ye,texStorage3D:ke,texSubImage2D:Ie,texSubImage3D:Xe,compressedTexSubImage2D:Ae,compressedTexSubImage3D:We,scissor:$e,viewport:H,reset:qe}}function d_(i,e,t,n,r,s,a){const o=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(S,E){return _?new OffscreenCanvas(S,E):os("canvas")}function g(S,E,F,ue){let ce=1;if((S.width>ue||S.height>ue)&&(ce=ue/Math.max(S.width,S.height)),ce<1||E===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const ge=E?oa:Math.floor,Me=ge(ce*S.width),Ee=ge(ce*S.height);h===void 0&&(h=m(Me,Ee));const be=F?m(Me,Ee):h;return be.width=Me,be.height=Ee,be.getContext("2d").drawImage(S,0,0,Me,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+Me+"x"+Ee+")."),be}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function p(S){return Bo(S.width)&&Bo(S.height)}function d(S){return o?!1:S.wrapS!==En||S.wrapT!==En||S.minFilter!==Zt&&S.minFilter!==en}function b(S,E){return S.generateMipmaps&&E&&S.minFilter!==Zt&&S.minFilter!==en}function M(S){i.generateMipmap(S)}function R(S,E,F,ue,ce=!1){if(o===!1)return E;if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ge=E;if(E===i.RED&&(F===i.FLOAT&&(ge=i.R32F),F===i.HALF_FLOAT&&(ge=i.R16F),F===i.UNSIGNED_BYTE&&(ge=i.R8)),E===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(ge=i.R8UI),F===i.UNSIGNED_SHORT&&(ge=i.R16UI),F===i.UNSIGNED_INT&&(ge=i.R32UI),F===i.BYTE&&(ge=i.R8I),F===i.SHORT&&(ge=i.R16I),F===i.INT&&(ge=i.R32I)),E===i.RG&&(F===i.FLOAT&&(ge=i.RG32F),F===i.HALF_FLOAT&&(ge=i.RG16F),F===i.UNSIGNED_BYTE&&(ge=i.RG8)),E===i.RGBA){const Me=ce?is:Et.getTransfer(ue);F===i.FLOAT&&(ge=i.RGBA32F),F===i.HALF_FLOAT&&(ge=i.RGBA16F),F===i.UNSIGNED_BYTE&&(ge=Me===Mt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(ge=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(ge=i.RGB5_A1)}return(ge===i.R16F||ge===i.R32F||ge===i.RG16F||ge===i.RG32F||ge===i.RGBA16F||ge===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function P(S,E,F){return b(S,F)===!0||S.isFramebufferTexture&&S.minFilter!==Zt&&S.minFilter!==en?Math.log2(Math.max(E.width,E.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?E.mipmaps.length:1}function A(S){return S===Zt||S===lo||S===dr?i.NEAREST:i.LINEAR}function y(S){const E=S.target;E.removeEventListener("dispose",y),k(E),E.isVideoTexture&&u.delete(E)}function L(S){const E=S.target;E.removeEventListener("dispose",L),T(E)}function k(S){const E=n.get(S);if(E.__webglInit===void 0)return;const F=S.source,ue=f.get(F);if(ue){const ce=ue[E.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&x(S),Object.keys(ue).length===0&&f.delete(F)}n.remove(S)}function x(S){const E=n.get(S);i.deleteTexture(E.__webglTexture);const F=S.source,ue=f.get(F);delete ue[E.__cacheKey],a.memory.textures--}function T(S){const E=S.texture,F=n.get(S),ue=n.get(E);if(ue.__webglTexture!==void 0&&(i.deleteTexture(ue.__webglTexture),a.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(F.__webglFramebuffer[ce]))for(let ge=0;ge<F.__webglFramebuffer[ce].length;ge++)i.deleteFramebuffer(F.__webglFramebuffer[ce][ge]);else i.deleteFramebuffer(F.__webglFramebuffer[ce]);F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[ce])}else{if(Array.isArray(F.__webglFramebuffer))for(let ce=0;ce<F.__webglFramebuffer.length;ce++)i.deleteFramebuffer(F.__webglFramebuffer[ce]);else i.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let ce=0;ce<F.__webglColorRenderbuffer.length;ce++)F.__webglColorRenderbuffer[ce]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[ce]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let ce=0,ge=E.length;ce<ge;ce++){const Me=n.get(E[ce]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),a.memory.textures--),n.remove(E[ce])}n.remove(E),n.remove(S)}let $=0;function te(){$=0}function N(){const S=$;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),$+=1,S}function K(S){const E=[];return E.push(S.wrapS),E.push(S.wrapT),E.push(S.wrapR||0),E.push(S.magFilter),E.push(S.minFilter),E.push(S.anisotropy),E.push(S.internalFormat),E.push(S.format),E.push(S.type),E.push(S.generateMipmaps),E.push(S.premultiplyAlpha),E.push(S.flipY),E.push(S.unpackAlignment),E.push(S.colorSpace),E.join()}function X(S,E){const F=n.get(S);if(S.isVideoTexture&&Pe(S),S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){const ue=S.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(F,S,E);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+E)}function re(S,E){const F=n.get(S);if(S.version>0&&F.__version!==S.version){G(F,S,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+E)}function D(S,E){const F=n.get(S);if(S.version>0&&F.__version!==S.version){G(F,S,E);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+E)}function O(S,E){const F=n.get(S);if(S.version>0&&F.__version!==S.version){he(F,S,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+E)}const Y={[ia]:i.REPEAT,[En]:i.CLAMP_TO_EDGE,[ra]:i.MIRRORED_REPEAT},j={[Zt]:i.NEAREST,[lo]:i.NEAREST_MIPMAP_NEAREST,[dr]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[xs]:i.LINEAR_MIPMAP_NEAREST,[vi]:i.LINEAR_MIPMAP_LINEAR},J={[sh]:i.NEVER,[hh]:i.ALWAYS,[ah]:i.LESS,[yc]:i.LEQUAL,[oh]:i.EQUAL,[uh]:i.GEQUAL,[lh]:i.GREATER,[ch]:i.NOTEQUAL};function ae(S,E,F){if(E.type===Xn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===en||E.magFilter===xs||E.magFilter===dr||E.magFilter===vi||E.minFilter===en||E.minFilter===xs||E.minFilter===dr||E.minFilter===vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),F?(i.texParameteri(S,i.TEXTURE_WRAP_S,Y[E.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,Y[E.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,Y[E.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,j[E.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,j[E.minFilter])):(i.texParameteri(S,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(S,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==En||E.wrapT!==En)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(S,i.TEXTURE_MAG_FILTER,A(E.magFilter)),i.texParameteri(S,i.TEXTURE_MIN_FILTER,A(E.minFilter)),E.minFilter!==Zt&&E.minFilter!==en&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,J[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ue=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Zt||E.minFilter!==dr&&E.minFilter!==vi||E.type===Xn&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===br&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(S,ue.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function q(S,E){let F=!1;S.__webglInit===void 0&&(S.__webglInit=!0,E.addEventListener("dispose",y));const ue=E.source;let ce=f.get(ue);ce===void 0&&(ce={},f.set(ue,ce));const ge=K(E);if(ge!==S.__cacheKey){ce[ge]===void 0&&(ce[ge]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),ce[ge].usedTimes++;const Me=ce[S.__cacheKey];Me!==void 0&&(ce[S.__cacheKey].usedTimes--,Me.usedTimes===0&&x(E)),S.__cacheKey=ge,S.__webglTexture=ce[ge].texture}return F}function G(S,E,F){let ue=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ue=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ue=i.TEXTURE_3D);const ce=q(S,E),ge=E.source;t.bindTexture(ue,S.__webglTexture,i.TEXTURE0+F);const Me=n.get(ge);if(ge.version!==Me.__version||ce===!0){t.activeTexture(i.TEXTURE0+F);const Ee=Et.getPrimaries(Et.workingColorSpace),be=E.colorSpace===_n?null:Et.getPrimaries(E.colorSpace),Ie=E.colorSpace===_n||Ee===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const Xe=d(E)&&p(E.image)===!1;let Ae=g(E.image,Xe,!1,r.maxTextureSize);Ae=oe(E,Ae);const We=p(Ae)||o,Ye=s.convert(E.format,E.colorSpace);let ke=s.convert(E.type),je=R(E.internalFormat,Ye,ke,E.colorSpace,E.isVideoTexture);ae(ue,E,We);let Oe;const $e=E.mipmaps,H=o&&E.isVideoTexture!==!0&&je!==Mc,Ne=Me.__version===void 0||ce===!0,Ve=ge.dataReady,qe=P(E,Ae,We);if(E.isDepthTexture)je=i.DEPTH_COMPONENT,o?E.type===Xn?je=i.DEPTH_COMPONENT32F:E.type===ti?je=i.DEPTH_COMPONENT24:E.type===xi?je=i.DEPTH24_STENCIL8:je=i.DEPTH_COMPONENT16:E.type===Xn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Ei&&je===i.DEPTH_COMPONENT&&E.type!==da&&E.type!==ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=ti,ke=s.convert(E.type)),E.format===rr&&je===i.DEPTH_COMPONENT&&(je=i.DEPTH_STENCIL,E.type!==xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=xi,ke=s.convert(E.type))),Ne&&(H?t.texStorage2D(i.TEXTURE_2D,1,je,Ae.width,Ae.height):t.texImage2D(i.TEXTURE_2D,0,je,Ae.width,Ae.height,0,Ye,ke,null));else if(E.isDataTexture)if($e.length>0&&We){H&&Ne&&t.texStorage2D(i.TEXTURE_2D,qe,je,$e[0].width,$e[0].height);for(let U=0,ve=$e.length;U<ve;U++)Oe=$e[U],H?Ve&&t.texSubImage2D(i.TEXTURE_2D,U,0,0,Oe.width,Oe.height,Ye,ke,Oe.data):t.texImage2D(i.TEXTURE_2D,U,je,Oe.width,Oe.height,0,Ye,ke,Oe.data);E.generateMipmaps=!1}else H?(Ne&&t.texStorage2D(i.TEXTURE_2D,qe,je,Ae.width,Ae.height),Ve&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae.width,Ae.height,Ye,ke,Ae.data)):t.texImage2D(i.TEXTURE_2D,0,je,Ae.width,Ae.height,0,Ye,ke,Ae.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){H&&Ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,qe,je,$e[0].width,$e[0].height,Ae.depth);for(let U=0,ve=$e.length;U<ve;U++)Oe=$e[U],E.format!==Mn?Ye!==null?H?Ve&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,U,0,0,0,Oe.width,Oe.height,Ae.depth,Ye,Oe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,U,je,Oe.width,Oe.height,Ae.depth,0,Oe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Ve&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,U,0,0,0,Oe.width,Oe.height,Ae.depth,Ye,ke,Oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,U,je,Oe.width,Oe.height,Ae.depth,0,Ye,ke,Oe.data)}else{H&&Ne&&t.texStorage2D(i.TEXTURE_2D,qe,je,$e[0].width,$e[0].height);for(let U=0,ve=$e.length;U<ve;U++)Oe=$e[U],E.format!==Mn?Ye!==null?H?Ve&&t.compressedTexSubImage2D(i.TEXTURE_2D,U,0,0,Oe.width,Oe.height,Ye,Oe.data):t.compressedTexImage2D(i.TEXTURE_2D,U,je,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Ve&&t.texSubImage2D(i.TEXTURE_2D,U,0,0,Oe.width,Oe.height,Ye,ke,Oe.data):t.texImage2D(i.TEXTURE_2D,U,je,Oe.width,Oe.height,0,Ye,ke,Oe.data)}else if(E.isDataArrayTexture)H?(Ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,qe,je,Ae.width,Ae.height,Ae.depth),Ve&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ye,ke,Ae.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,je,Ae.width,Ae.height,Ae.depth,0,Ye,ke,Ae.data);else if(E.isData3DTexture)H?(Ne&&t.texStorage3D(i.TEXTURE_3D,qe,je,Ae.width,Ae.height,Ae.depth),Ve&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ye,ke,Ae.data)):t.texImage3D(i.TEXTURE_3D,0,je,Ae.width,Ae.height,Ae.depth,0,Ye,ke,Ae.data);else if(E.isFramebufferTexture){if(Ne)if(H)t.texStorage2D(i.TEXTURE_2D,qe,je,Ae.width,Ae.height);else{let U=Ae.width,ve=Ae.height;for(let _e=0;_e<qe;_e++)t.texImage2D(i.TEXTURE_2D,_e,je,U,ve,0,Ye,ke,null),U>>=1,ve>>=1}}else if($e.length>0&&We){H&&Ne&&t.texStorage2D(i.TEXTURE_2D,qe,je,$e[0].width,$e[0].height);for(let U=0,ve=$e.length;U<ve;U++)Oe=$e[U],H?Ve&&t.texSubImage2D(i.TEXTURE_2D,U,0,0,Ye,ke,Oe):t.texImage2D(i.TEXTURE_2D,U,je,Ye,ke,Oe);E.generateMipmaps=!1}else H?(Ne&&t.texStorage2D(i.TEXTURE_2D,qe,je,Ae.width,Ae.height),Ve&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ye,ke,Ae)):t.texImage2D(i.TEXTURE_2D,0,je,Ye,ke,Ae);b(E,We)&&M(ue),Me.__version=ge.version,E.onUpdate&&E.onUpdate(E)}S.__version=E.version}function he(S,E,F){if(E.image.length!==6)return;const ue=q(S,E),ce=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+F);const ge=n.get(ce);if(ce.version!==ge.__version||ue===!0){t.activeTexture(i.TEXTURE0+F);const Me=Et.getPrimaries(Et.workingColorSpace),Ee=E.colorSpace===_n?null:Et.getPrimaries(E.colorSpace),be=E.colorSpace===_n||Me===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ie=E.isCompressedTexture||E.image[0].isCompressedTexture,Xe=E.image[0]&&E.image[0].isDataTexture,Ae=[];for(let U=0;U<6;U++)!Ie&&!Xe?Ae[U]=g(E.image[U],!1,!0,r.maxCubemapSize):Ae[U]=Xe?E.image[U].image:E.image[U],Ae[U]=oe(E,Ae[U]);const We=Ae[0],Ye=p(We)||o,ke=s.convert(E.format,E.colorSpace),je=s.convert(E.type),Oe=R(E.internalFormat,ke,je,E.colorSpace),$e=o&&E.isVideoTexture!==!0,H=ge.__version===void 0||ue===!0,Ne=ce.dataReady;let Ve=P(E,We,Ye);ae(i.TEXTURE_CUBE_MAP,E,Ye);let qe;if(Ie){$e&&H&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ve,Oe,We.width,We.height);for(let U=0;U<6;U++){qe=Ae[U].mipmaps;for(let ve=0;ve<qe.length;ve++){const _e=qe[ve];E.format!==Mn?ke!==null?$e?Ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,ve,0,0,_e.width,_e.height,ke,_e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,ve,Oe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?Ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,ve,0,0,_e.width,_e.height,ke,je,_e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,ve,Oe,_e.width,_e.height,0,ke,je,_e.data)}}}else{qe=E.mipmaps,$e&&H&&(qe.length>0&&Ve++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Ve,Oe,Ae[0].width,Ae[0].height));for(let U=0;U<6;U++)if(Xe){$e?Ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,Ae[U].width,Ae[U].height,ke,je,Ae[U].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,Oe,Ae[U].width,Ae[U].height,0,ke,je,Ae[U].data);for(let ve=0;ve<qe.length;ve++){const Ue=qe[ve].image[U].image;$e?Ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,ve+1,0,0,Ue.width,Ue.height,ke,je,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,ve+1,Oe,Ue.width,Ue.height,0,ke,je,Ue.data)}}else{$e?Ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,ke,je,Ae[U]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,Oe,ke,je,Ae[U]);for(let ve=0;ve<qe.length;ve++){const _e=qe[ve];$e?Ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,ve+1,0,0,ke,je,_e.image[U]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,ve+1,Oe,ke,je,_e.image[U])}}}b(E,Ye)&&M(i.TEXTURE_CUBE_MAP),ge.__version=ce.version,E.onUpdate&&E.onUpdate(E)}S.__version=E.version}function ie(S,E,F,ue,ce,ge){const Me=s.convert(F.format,F.colorSpace),Ee=s.convert(F.type),be=R(F.internalFormat,Me,Ee,F.colorSpace);if(!n.get(E).__hasExternalTextures){const Xe=Math.max(1,E.width>>ge),Ae=Math.max(1,E.height>>ge);ce===i.TEXTURE_3D||ce===i.TEXTURE_2D_ARRAY?t.texImage3D(ce,ge,be,Xe,Ae,E.depth,0,Me,Ee,null):t.texImage2D(ce,ge,be,Xe,Ae,0,Me,Ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),le(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,ce,n.get(F).__webglTexture,0,Te(E)):(ce===i.TEXTURE_2D||ce>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ue,ce,n.get(F).__webglTexture,ge),t.bindFramebuffer(i.FRAMEBUFFER,null)}function W(S,E,F){if(i.bindRenderbuffer(i.RENDERBUFFER,S),E.depthBuffer&&!E.stencilBuffer){let ue=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(F||le(E)){const ce=E.depthTexture;ce&&ce.isDepthTexture&&(ce.type===Xn?ue=i.DEPTH_COMPONENT32F:ce.type===ti&&(ue=i.DEPTH_COMPONENT24));const ge=Te(E);le(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,ue,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,ue,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,ue,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,S)}else if(E.depthBuffer&&E.stencilBuffer){const ue=Te(E);F&&le(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,i.DEPTH24_STENCIL8,E.width,E.height):le(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,S)}else{const ue=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ce=0;ce<ue.length;ce++){const ge=ue[ce],Me=s.convert(ge.format,ge.colorSpace),Ee=s.convert(ge.type),be=R(ge.internalFormat,Me,Ee,ge.colorSpace),Ie=Te(E);F&&le(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,be,E.width,E.height):le(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,be,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,be,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function se(S,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X(E.depthTexture,0);const ue=n.get(E.depthTexture).__webglTexture,ce=Te(E);if(E.depthTexture.format===Ei)le(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0);else if(E.depthTexture.format===rr)le(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function Z(S){const E=n.get(S),F=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!E.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");se(E.__webglFramebuffer,S)}else if(F){E.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ue]),E.__webglDepthbuffer[ue]=i.createRenderbuffer(),W(E.__webglDepthbuffer[ue],S,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),W(E.__webglDepthbuffer,S,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(S,E,F){const ue=n.get(S);E!==void 0&&ie(ue.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Z(S)}function V(S){const E=S.texture,F=n.get(S),ue=n.get(E);S.addEventListener("dispose",L),S.isWebGLMultipleRenderTargets!==!0&&(ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture()),ue.__version=E.version,a.memory.textures++);const ce=S.isWebGLCubeRenderTarget===!0,ge=S.isWebGLMultipleRenderTargets===!0,Me=p(S)||o;if(ce){F.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(o&&E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer[Ee]=[];for(let be=0;be<E.mipmaps.length;be++)F.__webglFramebuffer[Ee][be]=i.createFramebuffer()}else F.__webglFramebuffer[Ee]=i.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer=[];for(let Ee=0;Ee<E.mipmaps.length;Ee++)F.__webglFramebuffer[Ee]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ge)if(r.drawBuffers){const Ee=S.texture;for(let be=0,Ie=Ee.length;be<Ie;be++){const Xe=n.get(Ee[be]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&S.samples>0&&le(S)===!1){const Ee=ge?E:[E];F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let be=0;be<Ee.length;be++){const Ie=Ee[be];F.__webglColorRenderbuffer[be]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[be]);const Xe=s.convert(Ie.format,Ie.colorSpace),Ae=s.convert(Ie.type),We=R(Ie.internalFormat,Xe,Ae,Ie.colorSpace,S.isXRRenderTarget===!0),Ye=Te(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye,We,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,F.__webglColorRenderbuffer[be])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),W(F.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture),ae(i.TEXTURE_CUBE_MAP,E,Me);for(let Ee=0;Ee<6;Ee++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let be=0;be<E.mipmaps.length;be++)ie(F.__webglFramebuffer[Ee][be],S,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,be);else ie(F.__webglFramebuffer[Ee],S,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);b(E,Me)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){const Ee=S.texture;for(let be=0,Ie=Ee.length;be<Ie;be++){const Xe=Ee[be],Ae=n.get(Xe);t.bindTexture(i.TEXTURE_2D,Ae.__webglTexture),ae(i.TEXTURE_2D,Xe,Me),ie(F.__webglFramebuffer,S,Xe,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,0),b(Xe,Me)&&M(i.TEXTURE_2D)}t.unbindTexture()}else{let Ee=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(o?Ee=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ee,ue.__webglTexture),ae(Ee,E,Me),o&&E.mipmaps&&E.mipmaps.length>0)for(let be=0;be<E.mipmaps.length;be++)ie(F.__webglFramebuffer[be],S,E,i.COLOR_ATTACHMENT0,Ee,be);else ie(F.__webglFramebuffer,S,E,i.COLOR_ATTACHMENT0,Ee,0);b(E,Me)&&M(Ee),t.unbindTexture()}S.depthBuffer&&Z(S)}function Ce(S){const E=p(S)||o,F=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ue=0,ce=F.length;ue<ce;ue++){const ge=F[ue];if(b(ge,E)){const Me=S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ee=n.get(ge).__webglTexture;t.bindTexture(Me,Ee),M(Me),t.unbindTexture()}}}function fe(S){if(o&&S.samples>0&&le(S)===!1){const E=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],F=S.width,ue=S.height;let ce=i.COLOR_BUFFER_BIT;const ge=[],Me=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(S),be=S.isWebGLMultipleRenderTargets===!0;if(be)for(let Ie=0;Ie<E.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Ie=0;Ie<E.length;Ie++){ge.push(i.COLOR_ATTACHMENT0+Ie),S.depthBuffer&&ge.push(Me);const Xe=Ee.__ignoreDepthValues!==void 0?Ee.__ignoreDepthValues:!1;if(Xe===!1&&(S.depthBuffer&&(ce|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&(ce|=i.STENCIL_BUFFER_BIT)),be&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ie]),Xe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Me]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Me])),be){const Ae=n.get(E[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ae,0)}i.blitFramebuffer(0,0,F,ue,0,0,F,ue,ce,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),be)for(let Ie=0;Ie<E.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ie]);const Xe=n.get(E[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,Xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}}function Te(S){return Math.min(r.maxSamples,S.samples)}function le(S){const E=n.get(S);return o&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Pe(S){const E=a.render.frame;u.get(S)!==E&&(u.set(S,E),S.update())}function oe(S,E){const F=S.colorSpace,ue=S.format,ce=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===sa||F!==Yn&&F!==_n&&(Et.getTransfer(F)===Mt?o===!1?e.has("EXT_sRGB")===!0&&ue===Mn?(S.format=sa,S.minFilter=en,S.generateMipmaps=!1):E=Ac.sRGBToLinear(E):(ue!==Mn||ce!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),E}this.allocateTextureUnit=N,this.resetTextureUnits=te,this.setTexture2D=X,this.setTexture2DArray=re,this.setTexture3D=D,this.setTextureCube=O,this.rebindTextures=pe,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=le}function p_(i,e,t){const n=t.isWebGL2;function r(s,a=_n){let o;const c=Et.getTransfer(a);if(s===si)return i.UNSIGNED_BYTE;if(s===_c)return i.UNSIGNED_SHORT_4_4_4_4;if(s===gc)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Yu)return i.BYTE;if(s===Ku)return i.SHORT;if(s===da)return i.UNSIGNED_SHORT;if(s===mc)return i.INT;if(s===ti)return i.UNSIGNED_INT;if(s===Xn)return i.FLOAT;if(s===br)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Zu)return i.ALPHA;if(s===Mn)return i.RGBA;if(s===$u)return i.LUMINANCE;if(s===Ju)return i.LUMINANCE_ALPHA;if(s===Ei)return i.DEPTH_COMPONENT;if(s===rr)return i.DEPTH_STENCIL;if(s===sa)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Qu)return i.RED;if(s===vc)return i.RED_INTEGER;if(s===eh)return i.RG;if(s===xc)return i.RG_INTEGER;if(s===Ec)return i.RGBA_INTEGER;if(s===Es||s===Ms||s===Ss||s===bs)if(c===Mt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Es)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ms)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ss)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===bs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Es)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ms)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ss)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===bs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===co||s===uo||s===ho||s===fo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===co)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===uo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ho)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===fo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Mc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===po||s===mo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===po)return c===Mt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===mo)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===_o||s===go||s===vo||s===xo||s===Eo||s===Mo||s===So||s===bo||s===yo||s===To||s===Ao||s===wo||s===Co||s===Ro)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===_o)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===go)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===vo)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===xo)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Eo)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Mo)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===So)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===bo)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===yo)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===To)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ao)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===wo)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Co)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ro)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ys||s===Po||s===Lo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===ys)return c===Mt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Po)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Lo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===th||s===Do||s===Io||s===Uo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===ys)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Do)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Io)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Uo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===xi?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class m_ extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $i extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const __={type:"move"};class Ys{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new de,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new de),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new de,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new de),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),d=this._getHandJoint(l,g);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),_=.02,m=.005;l.inputState.pinching&&f>_+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=_-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(__)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new $i;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const g_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v_=`
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

}`;class x_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Yt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new li({extensions:{fragDepth:!0},vertexShader:g_,fragmentShader:v_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Xt(new ar(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class E_ extends Ai{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,_=null,m=null;const g=new x_,p=t.getContextAttributes();let d=null,b=null;const M=[],R=[],P=new rt;let A=null;const y=new mn;y.layers.enable(1),y.viewport=new Bt;const L=new mn;L.layers.enable(2),L.viewport=new Bt;const k=[y,L],x=new m_;x.layers.enable(1),x.layers.enable(2);let T=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let G=M[q];return G===void 0&&(G=new Ys,M[q]=G),G.getTargetRaySpace()},this.getControllerGrip=function(q){let G=M[q];return G===void 0&&(G=new Ys,M[q]=G),G.getGripSpace()},this.getHand=function(q){let G=M[q];return G===void 0&&(G=new Ys,M[q]=G),G.getHandSpace()};function te(q){const G=R.indexOf(q.inputSource);if(G===-1)return;const he=M[G];he!==void 0&&(he.update(q.inputSource,q.frame,l||a),he.dispatchEvent({type:q.type,data:q.inputSource}))}function N(){r.removeEventListener("select",te),r.removeEventListener("selectstart",te),r.removeEventListener("selectend",te),r.removeEventListener("squeeze",te),r.removeEventListener("squeezestart",te),r.removeEventListener("squeezeend",te),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",K);for(let q=0;q<M.length;q++){const G=R[q];G!==null&&(R[q]=null,M[q].disconnect(G))}T=null,$=null,g.reset(),e.setRenderTarget(d),_=null,f=null,h=null,r=null,b=null,ae.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:_},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",te),r.addEventListener("selectstart",te),r.addEventListener("selectend",te),r.addEventListener("squeeze",te),r.addEventListener("squeezestart",te),r.addEventListener("squeezeend",te),r.addEventListener("end",N),r.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const G={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,t,G),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),b=new yi(_.framebufferWidth,_.framebufferHeight,{format:Mn,type:si,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let G=null,he=null,ie=null;p.depth&&(ie=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,G=p.stencil?rr:Ei,he=p.stencil?xi:ti);const W={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(W),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new yi(f.textureWidth,f.textureHeight,{format:Mn,type:si,depthTexture:new Bc(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const se=e.properties.get(b);se.__ignoreDepthValues=f.ignoreDepthValues}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),ae.setContext(r),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function K(q){for(let G=0;G<q.removed.length;G++){const he=q.removed[G],ie=R.indexOf(he);ie>=0&&(R[ie]=null,M[ie].disconnect(he))}for(let G=0;G<q.added.length;G++){const he=q.added[G];let ie=R.indexOf(he);if(ie===-1){for(let se=0;se<M.length;se++)if(se>=R.length){R.push(he),ie=se;break}else if(R[se]===null){R[se]=he,ie=se;break}if(ie===-1)break}const W=M[ie];W&&W.connect(he)}}const X=new de,re=new de;function D(q,G,he){X.setFromMatrixPosition(G.matrixWorld),re.setFromMatrixPosition(he.matrixWorld);const ie=X.distanceTo(re),W=G.projectionMatrix.elements,se=he.projectionMatrix.elements,Z=W[14]/(W[10]-1),pe=W[14]/(W[10]+1),V=(W[9]+1)/W[5],Ce=(W[9]-1)/W[5],fe=(W[8]-1)/W[0],Te=(se[8]+1)/se[0],le=Z*fe,Pe=Z*Te,oe=ie/(-fe+Te),S=oe*-fe;G.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(S),q.translateZ(oe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const E=Z+oe,F=pe+oe,ue=le-S,ce=Pe+(ie-S),ge=V*pe/F*E,Me=Ce*pe/F*E;q.projectionMatrix.makePerspective(ue,ce,ge,Me,E,F),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function O(q,G){G===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(G.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;g.texture!==null&&(q.near=g.depthNear,q.far=g.depthFar),x.near=L.near=y.near=q.near,x.far=L.far=y.far=q.far,(T!==x.near||$!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,$=x.far,y.near=T,y.far=$,L.near=T,L.far=$,y.updateProjectionMatrix(),L.updateProjectionMatrix(),q.updateProjectionMatrix());const G=q.parent,he=x.cameras;O(x,G);for(let ie=0;ie<he.length;ie++)O(he[ie],G);he.length===2?D(x,y,L):x.projectionMatrix.copy(y.projectionMatrix),Y(q,x,G)};function Y(q,G,he){he===null?q.matrix.copy(G.matrixWorld):(q.matrix.copy(he.matrixWorld),q.matrix.invert(),q.matrix.multiply(G.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(G.projectionMatrix),q.projectionMatrixInverse.copy(G.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=aa*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&_===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null};let j=null;function J(q,G){if(u=G.getViewerPose(l||a),m=G,u!==null){const he=u.views;_!==null&&(e.setRenderTargetFramebuffer(b,_.framebuffer),e.setRenderTarget(b));let ie=!1;he.length!==x.cameras.length&&(x.cameras.length=0,ie=!0);for(let se=0;se<he.length;se++){const Z=he[se];let pe=null;if(_!==null)pe=_.getViewport(Z);else{const Ce=h.getViewSubImage(f,Z);pe=Ce.viewport,se===0&&(e.setRenderTargetTextures(b,Ce.colorTexture,f.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(b))}let V=k[se];V===void 0&&(V=new mn,V.layers.enable(se),V.viewport=new Bt,k[se]=V),V.matrix.fromArray(Z.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(Z.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(pe.x,pe.y,pe.width,pe.height),se===0&&(x.matrix.copy(V.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ie===!0&&x.cameras.push(V)}const W=r.enabledFeatures;if(W&&W.includes("depth-sensing")){const se=h.getDepthInformation(he[0]);se&&se.isValid&&se.texture&&g.init(e,se,r.renderState)}}for(let he=0;he<M.length;he++){const ie=R[he],W=M[he];ie!==null&&W!==void 0&&W.update(ie,G,l||a)}g.render(e,x),j&&j(q,G),G.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:G}),m=null}const ae=new Oc;ae.setAnimationLoop(J),this.setAnimationLoop=function(q){j=q},this.dispose=function(){}}}function M_(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Ic(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,b,M,R){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),h(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&_(p,d,R)):d.isMeshMatcapMaterial?(s(p,d),m(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),g(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?c(p,d,b,M):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===tn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===tn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const b=e.get(d).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const M=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*M,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,b,M){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*b,p.scale.value=M*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function _(p,d,b){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===tn&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){const b=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function S_(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(b,M){const R=M.program;n.uniformBlockBinding(b,R)}function l(b,M){let R=r[b.id];R===void 0&&(m(b),R=u(b),r[b.id]=R,b.addEventListener("dispose",p));const P=M.program;n.updateUBOMapping(b,P);const A=e.render.frame;s[b.id]!==A&&(f(b),s[b.id]=A)}function u(b){const M=h();b.__bindingPointIndex=M;const R=i.createBuffer(),P=b.__size,A=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,P,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,R),R}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const M=r[b.id],R=b.uniforms,P=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let A=0,y=R.length;A<y;A++){const L=Array.isArray(R[A])?R[A]:[R[A]];for(let k=0,x=L.length;k<x;k++){const T=L[k];if(_(T,A,k,P)===!0){const $=T.__offset,te=Array.isArray(T.value)?T.value:[T.value];let N=0;for(let K=0;K<te.length;K++){const X=te[K],re=g(X);typeof X=="number"||typeof X=="boolean"?(T.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,$+N,T.__data)):X.isMatrix3?(T.__data[0]=X.elements[0],T.__data[1]=X.elements[1],T.__data[2]=X.elements[2],T.__data[3]=0,T.__data[4]=X.elements[3],T.__data[5]=X.elements[4],T.__data[6]=X.elements[5],T.__data[7]=0,T.__data[8]=X.elements[6],T.__data[9]=X.elements[7],T.__data[10]=X.elements[8],T.__data[11]=0):(X.toArray(T.__data,N),N+=re.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(b,M,R,P){const A=b.value,y=M+"_"+R;if(P[y]===void 0)return typeof A=="number"||typeof A=="boolean"?P[y]=A:P[y]=A.clone(),!0;{const L=P[y];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return P[y]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function m(b){const M=b.uniforms;let R=0;const P=16;for(let y=0,L=M.length;y<L;y++){const k=Array.isArray(M[y])?M[y]:[M[y]];for(let x=0,T=k.length;x<T;x++){const $=k[x],te=Array.isArray($.value)?$.value:[$.value];for(let N=0,K=te.length;N<K;N++){const X=te[N],re=g(X),D=R%P;D!==0&&P-D<re.boundary&&(R+=P-D),$.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=R,R+=re.storage}}}const A=R%P;return A>0&&(R+=P-A),b.__size=R,b.__cache={},this}function g(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function p(b){const M=b.target;M.removeEventListener("dispose",p);const R=a.indexOf(M.__bindingPointIndex);a.splice(R,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function d(){for(const b in r)i.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:c,update:l,dispose:d}}class Wc{constructor(e={}){const{canvas:t=ph(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const _=new Uint32Array(4),m=new Int32Array(4);let g=null,p=null;const d=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this._useLegacyLights=!1,this.toneMapping=ri,this.toneMappingExposure=1;const M=this;let R=!1,P=0,A=0,y=null,L=-1,k=null;const x=new Bt,T=new Bt;let $=null;const te=new ht(0);let N=0,K=t.width,X=t.height,re=1,D=null,O=null;const Y=new Bt(0,0,K,X),j=new Bt(0,0,K,X);let J=!1;const ae=new ga;let q=!1,G=!1,he=null;const ie=new Pt,W=new rt,se=new de,Z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pe(){return y===null?re:1}let V=n;function Ce(B,me){for(let Se=0;Se<B.length;Se++){const ye=B[Se],xe=t.getContext(ye,me);if(xe!==null)return xe}return null}try{const B={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ha}`),t.addEventListener("webglcontextlost",qe,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",ve,!1),V===null){const me=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&me.shift(),V=Ce(me,B),V===null)throw Ce(me)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(B){throw console.error("THREE.WebGLRenderer: "+B.message),B}let fe,Te,le,Pe,oe,S,E,F,ue,ce,ge,Me,Ee,be,Ie,Xe,Ae,We,Ye,ke,je,Oe,$e,H;function Ne(){fe=new Rp(V),Te=new bp(V,fe,e),fe.init(Te),Oe=new p_(V,fe,Te),le=new f_(V,fe,Te),Pe=new Dp(V),oe=new Jm,S=new d_(V,fe,le,oe,Te,Oe,Pe),E=new Tp(M),F=new Cp(M),ue=new zh(V,Te),$e=new Mp(V,fe,ue,Te),ce=new Pp(V,ue,Pe,$e),ge=new Op(V,ce,ue,Pe),Ye=new Np(V,Te,S),Xe=new yp(oe),Me=new $m(M,E,F,fe,Te,$e,Xe),Ee=new M_(M,oe),be=new e_,Ie=new a_(fe,Te),We=new Ep(M,E,F,le,ge,f,c),Ae=new h_(M,ge,Te),H=new S_(V,Pe,Te,le),ke=new Sp(V,fe,Pe,Te),je=new Lp(V,fe,Pe,Te),Pe.programs=Me.programs,M.capabilities=Te,M.extensions=fe,M.properties=oe,M.renderLists=be,M.shadowMap=Ae,M.state=le,M.info=Pe}Ne();const Ve=new E_(M,V);this.xr=Ve,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const B=fe.get("WEBGL_lose_context");B&&B.loseContext()},this.forceContextRestore=function(){const B=fe.get("WEBGL_lose_context");B&&B.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(B){B!==void 0&&(re=B,this.setSize(K,X,!1))},this.getSize=function(B){return B.set(K,X)},this.setSize=function(B,me,Se=!0){if(Ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=B,X=me,t.width=Math.floor(B*re),t.height=Math.floor(me*re),Se===!0&&(t.style.width=B+"px",t.style.height=me+"px"),this.setViewport(0,0,B,me)},this.getDrawingBufferSize=function(B){return B.set(K*re,X*re).floor()},this.setDrawingBufferSize=function(B,me,Se){K=B,X=me,re=Se,t.width=Math.floor(B*Se),t.height=Math.floor(me*Se),this.setViewport(0,0,B,me)},this.getCurrentViewport=function(B){return B.copy(x)},this.getViewport=function(B){return B.copy(Y)},this.setViewport=function(B,me,Se,ye){B.isVector4?Y.set(B.x,B.y,B.z,B.w):Y.set(B,me,Se,ye),le.viewport(x.copy(Y).multiplyScalar(re).floor())},this.getScissor=function(B){return B.copy(j)},this.setScissor=function(B,me,Se,ye){B.isVector4?j.set(B.x,B.y,B.z,B.w):j.set(B,me,Se,ye),le.scissor(T.copy(j).multiplyScalar(re).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(B){le.setScissorTest(J=B)},this.setOpaqueSort=function(B){D=B},this.setTransparentSort=function(B){O=B},this.getClearColor=function(B){return B.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(B=!0,me=!0,Se=!0){let ye=0;if(B){let xe=!1;if(y!==null){const Ke=y.texture.format;xe=Ke===Ec||Ke===xc||Ke===vc}if(xe){const Ke=y.texture.type,Je=Ke===si||Ke===ti||Ke===da||Ke===xi||Ke===_c||Ke===gc,tt=We.getClearColor(),it=We.getClearAlpha(),ft=tt.r,lt=tt.g,ct=tt.b;Je?(_[0]=ft,_[1]=lt,_[2]=ct,_[3]=it,V.clearBufferuiv(V.COLOR,0,_)):(m[0]=ft,m[1]=lt,m[2]=ct,m[3]=it,V.clearBufferiv(V.COLOR,0,m))}else ye|=V.COLOR_BUFFER_BIT}me&&(ye|=V.DEPTH_BUFFER_BIT),Se&&(ye|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ye)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),be.dispose(),Ie.dispose(),oe.dispose(),E.dispose(),F.dispose(),ge.dispose(),$e.dispose(),H.dispose(),Me.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",yt),Ve.removeEventListener("sessionend",st),he&&(he.dispose(),he=null),xt.stop()};function qe(B){B.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const B=Pe.autoReset,me=Ae.enabled,Se=Ae.autoUpdate,ye=Ae.needsUpdate,xe=Ae.type;Ne(),Pe.autoReset=B,Ae.enabled=me,Ae.autoUpdate=Se,Ae.needsUpdate=ye,Ae.type=xe}function ve(B){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function _e(B){const me=B.target;me.removeEventListener("dispose",_e),Ue(me)}function Ue(B){De(B),oe.remove(B)}function De(B){const me=oe.get(B).programs;me!==void 0&&(me.forEach(function(Se){Me.releaseProgram(Se)}),B.isShaderMaterial&&Me.releaseShaderCache(B))}this.renderBufferDirect=function(B,me,Se,ye,xe,Ke){me===null&&(me=Z);const Je=xe.isMesh&&xe.matrixWorld.determinant()<0,tt=Nn(B,me,Se,ye,xe);le.setMaterial(ye,Je);let it=Se.index,ft=1;if(ye.wireframe===!0){if(it=ce.getWireframeAttribute(Se),it===void 0)return;ft=2}const lt=Se.drawRange,ct=Se.attributes.position;let Ct=lt.start*ft,rn=(lt.start+lt.count)*ft;Ke!==null&&(Ct=Math.max(Ct,Ke.start*ft),rn=Math.min(rn,(Ke.start+Ke.count)*ft)),it!==null?(Ct=Math.max(Ct,0),rn=Math.min(rn,it.count)):ct!=null&&(Ct=Math.max(Ct,0),rn=Math.min(rn,ct.count));const Nt=rn-Ct;if(Nt<0||Nt===1/0)return;$e.setup(xe,ye,tt,Se,it);let On,Tt=ke;if(it!==null&&(On=ue.get(it),Tt=je,Tt.setIndex(On)),xe.isMesh)ye.wireframe===!0?(le.setLineWidth(ye.wireframeLinewidth*pe()),Tt.setMode(V.LINES)):Tt.setMode(V.TRIANGLES);else if(xe.isLine){let dt=ye.linewidth;dt===void 0&&(dt=1),le.setLineWidth(dt*pe()),xe.isLineSegments?Tt.setMode(V.LINES):xe.isLineLoop?Tt.setMode(V.LINE_LOOP):Tt.setMode(V.LINE_STRIP)}else xe.isPoints?Tt.setMode(V.POINTS):xe.isSprite&&Tt.setMode(V.TRIANGLES);if(xe.isBatchedMesh)Tt.renderMultiDraw(xe._multiDrawStarts,xe._multiDrawCounts,xe._multiDrawCount);else if(xe.isInstancedMesh)Tt.renderInstances(Ct,Nt,xe.count);else if(Se.isInstancedBufferGeometry){const dt=Se._maxInstanceCount!==void 0?Se._maxInstanceCount:1/0,ds=Math.min(Se.instanceCount,dt);Tt.renderInstances(Ct,Nt,ds)}else Tt.render(Ct,Nt)};function et(B,me,Se){B.transparent===!0&&B.side===ln&&B.forceSinglePass===!1?(B.side=tn,B.needsUpdate=!0,Tn(B,me,Se),B.side=oi,B.needsUpdate=!0,Tn(B,me,Se),B.side=ln):Tn(B,me,Se)}this.compile=function(B,me,Se=null){Se===null&&(Se=B),p=Ie.get(Se),p.init(),b.push(p),Se.traverseVisible(function(xe){xe.isLight&&xe.layers.test(me.layers)&&(p.pushLight(xe),xe.castShadow&&p.pushShadow(xe))}),B!==Se&&B.traverseVisible(function(xe){xe.isLight&&xe.layers.test(me.layers)&&(p.pushLight(xe),xe.castShadow&&p.pushShadow(xe))}),p.setupLights(M._useLegacyLights);const ye=new Set;return B.traverse(function(xe){const Ke=xe.material;if(Ke)if(Array.isArray(Ke))for(let Je=0;Je<Ke.length;Je++){const tt=Ke[Je];et(tt,Se,xe),ye.add(tt)}else et(Ke,Se,xe),ye.add(Ke)}),b.pop(),p=null,ye},this.compileAsync=function(B,me,Se=null){const ye=this.compile(B,me,Se);return new Promise(xe=>{function Ke(){if(ye.forEach(function(Je){oe.get(Je).currentProgram.isReady()&&ye.delete(Je)}),ye.size===0){xe(B);return}setTimeout(Ke,10)}fe.get("KHR_parallel_shader_compile")!==null?Ke():setTimeout(Ke,10)})};let at=null;function gt(B){at&&at(B)}function yt(){xt.stop()}function st(){xt.start()}const xt=new Oc;xt.setAnimationLoop(gt),typeof self<"u"&&xt.setContext(self),this.setAnimationLoop=function(B){at=B,Ve.setAnimationLoop(B),B===null?xt.stop():xt.start()},Ve.addEventListener("sessionstart",yt),Ve.addEventListener("sessionend",st),this.render=function(B,me){if(me!==void 0&&me.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),me.parent===null&&me.matrixWorldAutoUpdate===!0&&me.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(me),me=Ve.getCamera()),B.isScene===!0&&B.onBeforeRender(M,B,me,y),p=Ie.get(B,b.length),p.init(),b.push(p),ie.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),ae.setFromProjectionMatrix(ie),G=this.localClippingEnabled,q=Xe.init(this.clippingPlanes,G),g=be.get(B,d.length),g.init(),d.push(g),St(B,me,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(D,O),this.info.render.frame++,q===!0&&Xe.beginShadows();const Se=p.state.shadowsArray;if(Ae.render(Se,B,me),q===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1)&&We.render(g,B),p.setupLights(M._useLegacyLights),me.isArrayCamera){const ye=me.cameras;for(let xe=0,Ke=ye.length;xe<Ke;xe++){const Je=ye[xe];cn(g,B,Je,Je.viewport)}}else cn(g,B,me);y!==null&&(S.updateMultisampleRenderTarget(y),S.updateRenderTargetMipmap(y)),B.isScene===!0&&B.onAfterRender(M,B,me),$e.resetDefaultState(),L=-1,k=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,d.pop(),d.length>0?g=d[d.length-1]:g=null};function St(B,me,Se,ye){if(B.visible===!1)return;if(B.layers.test(me.layers)){if(B.isGroup)Se=B.renderOrder;else if(B.isLOD)B.autoUpdate===!0&&B.update(me);else if(B.isLight)p.pushLight(B),B.castShadow&&p.pushShadow(B);else if(B.isSprite){if(!B.frustumCulled||ae.intersectsSprite(B)){ye&&se.setFromMatrixPosition(B.matrixWorld).applyMatrix4(ie);const Je=ge.update(B),tt=B.material;tt.visible&&g.push(B,Je,tt,Se,se.z,null)}}else if((B.isMesh||B.isLine||B.isPoints)&&(!B.frustumCulled||ae.intersectsObject(B))){const Je=ge.update(B),tt=B.material;if(ye&&(B.boundingSphere!==void 0?(B.boundingSphere===null&&B.computeBoundingSphere(),se.copy(B.boundingSphere.center)):(Je.boundingSphere===null&&Je.computeBoundingSphere(),se.copy(Je.boundingSphere.center)),se.applyMatrix4(B.matrixWorld).applyMatrix4(ie)),Array.isArray(tt)){const it=Je.groups;for(let ft=0,lt=it.length;ft<lt;ft++){const ct=it[ft],Ct=tt[ct.materialIndex];Ct&&Ct.visible&&g.push(B,Je,Ct,Se,se.z,ct)}}else tt.visible&&g.push(B,Je,tt,Se,se.z,null)}}const Ke=B.children;for(let Je=0,tt=Ke.length;Je<tt;Je++)St(Ke[Je],me,Se,ye)}function cn(B,me,Se,ye){const xe=B.opaque,Ke=B.transmissive,Je=B.transparent;p.setupLightsView(Se),q===!0&&Xe.setGlobalState(M.clippingPlanes,Se),Ke.length>0&&Un(xe,Ke,me,Se),ye&&le.viewport(x.copy(ye)),xe.length>0&&Jt(xe,me,Se),Ke.length>0&&Jt(Ke,me,Se),Je.length>0&&Jt(Je,me,Se),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Un(B,me,Se,ye){if((Se.isScene===!0?Se.overrideMaterial:null)!==null)return;const Ke=Te.isWebGL2;he===null&&(he=new yi(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")?br:si,minFilter:vi,samples:Ke?4:0})),M.getDrawingBufferSize(W),Ke?he.setSize(W.x,W.y):he.setSize(oa(W.x),oa(W.y));const Je=M.getRenderTarget();M.setRenderTarget(he),M.getClearColor(te),N=M.getClearAlpha(),N<1&&M.setClearColor(16777215,.5),M.clear();const tt=M.toneMapping;M.toneMapping=ri,Jt(B,Se,ye),S.updateMultisampleRenderTarget(he),S.updateRenderTargetMipmap(he);let it=!1;for(let ft=0,lt=me.length;ft<lt;ft++){const ct=me[ft],Ct=ct.object,rn=ct.geometry,Nt=ct.material,On=ct.group;if(Nt.side===ln&&Ct.layers.test(ye.layers)){const Tt=Nt.side;Nt.side=tn,Nt.needsUpdate=!0,un(Ct,Se,ye,rn,Nt,On),Nt.side=Tt,Nt.needsUpdate=!0,it=!0}}it===!0&&(S.updateMultisampleRenderTarget(he),S.updateRenderTargetMipmap(he)),M.setRenderTarget(Je),M.setClearColor(te,N),M.toneMapping=tt}function Jt(B,me,Se){const ye=me.isScene===!0?me.overrideMaterial:null;for(let xe=0,Ke=B.length;xe<Ke;xe++){const Je=B[xe],tt=Je.object,it=Je.geometry,ft=ye===null?Je.material:ye,lt=Je.group;tt.layers.test(Se.layers)&&un(tt,me,Se,it,ft,lt)}}function un(B,me,Se,ye,xe,Ke){B.onBeforeRender(M,me,Se,ye,xe,Ke),B.modelViewMatrix.multiplyMatrices(Se.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),xe.onBeforeRender(M,me,Se,ye,B,Ke),xe.transparent===!0&&xe.side===ln&&xe.forceSinglePass===!1?(xe.side=tn,xe.needsUpdate=!0,M.renderBufferDirect(Se,me,ye,xe,B,Ke),xe.side=oi,xe.needsUpdate=!0,M.renderBufferDirect(Se,me,ye,xe,B,Ke),xe.side=ln):M.renderBufferDirect(Se,me,ye,xe,B,Ke),B.onAfterRender(M,me,Se,ye,xe,Ke)}function Tn(B,me,Se){me.isScene!==!0&&(me=Z);const ye=oe.get(B),xe=p.state.lights,Ke=p.state.shadowsArray,Je=xe.state.version,tt=Me.getParameters(B,xe.state,Ke,me,Se),it=Me.getProgramCacheKey(tt);let ft=ye.programs;ye.environment=B.isMeshStandardMaterial?me.environment:null,ye.fog=me.fog,ye.envMap=(B.isMeshStandardMaterial?F:E).get(B.envMap||ye.environment),ft===void 0&&(B.addEventListener("dispose",_e),ft=new Map,ye.programs=ft);let lt=ft.get(it);if(lt!==void 0){if(ye.currentProgram===lt&&ye.lightsStateVersion===Je)return ur(B,tt),lt}else tt.uniforms=Me.getUniforms(B),B.onBuild(Se,tt,M),B.onBeforeCompile(tt,M),lt=Me.acquireProgram(tt,it),ft.set(it,lt),ye.uniforms=tt.uniforms;const ct=ye.uniforms;return(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)&&(ct.clippingPlanes=Xe.uniform),ur(B,tt),ye.needsLights=Yc(B),ye.lightsStateVersion=Je,ye.needsLights&&(ct.ambientLightColor.value=xe.state.ambient,ct.lightProbe.value=xe.state.probe,ct.directionalLights.value=xe.state.directional,ct.directionalLightShadows.value=xe.state.directionalShadow,ct.spotLights.value=xe.state.spot,ct.spotLightShadows.value=xe.state.spotShadow,ct.rectAreaLights.value=xe.state.rectArea,ct.ltc_1.value=xe.state.rectAreaLTC1,ct.ltc_2.value=xe.state.rectAreaLTC2,ct.pointLights.value=xe.state.point,ct.pointLightShadows.value=xe.state.pointShadow,ct.hemisphereLights.value=xe.state.hemi,ct.directionalShadowMap.value=xe.state.directionalShadowMap,ct.directionalShadowMatrix.value=xe.state.directionalShadowMatrix,ct.spotShadowMap.value=xe.state.spotShadowMap,ct.spotLightMatrix.value=xe.state.spotLightMatrix,ct.spotLightMap.value=xe.state.spotLightMap,ct.pointShadowMap.value=xe.state.pointShadowMap,ct.pointShadowMatrix.value=xe.state.pointShadowMatrix),ye.currentProgram=lt,ye.uniformsList=null,lt}function hn(B){if(B.uniformsList===null){const me=B.currentProgram.getUniforms();B.uniformsList=$r.seqWithValue(me.seq,B.uniforms)}return B.uniformsList}function ur(B,me){const Se=oe.get(B);Se.outputColorSpace=me.outputColorSpace,Se.batching=me.batching,Se.instancing=me.instancing,Se.instancingColor=me.instancingColor,Se.skinning=me.skinning,Se.morphTargets=me.morphTargets,Se.morphNormals=me.morphNormals,Se.morphColors=me.morphColors,Se.morphTargetsCount=me.morphTargetsCount,Se.numClippingPlanes=me.numClippingPlanes,Se.numIntersection=me.numClipIntersection,Se.vertexAlphas=me.vertexAlphas,Se.vertexTangents=me.vertexTangents,Se.toneMapping=me.toneMapping}function Nn(B,me,Se,ye,xe){me.isScene!==!0&&(me=Z),S.resetTextureUnits();const Ke=me.fog,Je=ye.isMeshStandardMaterial?me.environment:null,tt=y===null?M.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:Yn,it=(ye.isMeshStandardMaterial?F:E).get(ye.envMap||Je),ft=ye.vertexColors===!0&&!!Se.attributes.color&&Se.attributes.color.itemSize===4,lt=!!Se.attributes.tangent&&(!!ye.normalMap||ye.anisotropy>0),ct=!!Se.morphAttributes.position,Ct=!!Se.morphAttributes.normal,rn=!!Se.morphAttributes.color;let Nt=ri;ye.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(Nt=M.toneMapping);const On=Se.morphAttributes.position||Se.morphAttributes.normal||Se.morphAttributes.color,Tt=On!==void 0?On.length:0,dt=oe.get(ye),ds=p.state.lights;if(q===!0&&(G===!0||B!==k)){const fn=B===k&&ye.id===L;Xe.setState(ye,B,fn)}let At=!1;ye.version===dt.__version?(dt.needsLights&&dt.lightsStateVersion!==ds.state.version||dt.outputColorSpace!==tt||xe.isBatchedMesh&&dt.batching===!1||!xe.isBatchedMesh&&dt.batching===!0||xe.isInstancedMesh&&dt.instancing===!1||!xe.isInstancedMesh&&dt.instancing===!0||xe.isSkinnedMesh&&dt.skinning===!1||!xe.isSkinnedMesh&&dt.skinning===!0||xe.isInstancedMesh&&dt.instancingColor===!0&&xe.instanceColor===null||xe.isInstancedMesh&&dt.instancingColor===!1&&xe.instanceColor!==null||dt.envMap!==it||ye.fog===!0&&dt.fog!==Ke||dt.numClippingPlanes!==void 0&&(dt.numClippingPlanes!==Xe.numPlanes||dt.numIntersection!==Xe.numIntersection)||dt.vertexAlphas!==ft||dt.vertexTangents!==lt||dt.morphTargets!==ct||dt.morphNormals!==Ct||dt.morphColors!==rn||dt.toneMapping!==Nt||Te.isWebGL2===!0&&dt.morphTargetsCount!==Tt)&&(At=!0):(At=!0,dt.__version=ye.version);let ci=dt.currentProgram;At===!0&&(ci=Tn(ye,me,xe));let Sa=!1,hr=!1,ps=!1;const Ht=ci.getUniforms(),ui=dt.uniforms;if(le.useProgram(ci.program)&&(Sa=!0,hr=!0,ps=!0),ye.id!==L&&(L=ye.id,hr=!0),Sa||k!==B){Ht.setValue(V,"projectionMatrix",B.projectionMatrix),Ht.setValue(V,"viewMatrix",B.matrixWorldInverse);const fn=Ht.map.cameraPosition;fn!==void 0&&fn.setValue(V,se.setFromMatrixPosition(B.matrixWorld)),Te.logarithmicDepthBuffer&&Ht.setValue(V,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2)),(ye.isMeshPhongMaterial||ye.isMeshToonMaterial||ye.isMeshLambertMaterial||ye.isMeshBasicMaterial||ye.isMeshStandardMaterial||ye.isShaderMaterial)&&Ht.setValue(V,"isOrthographic",B.isOrthographicCamera===!0),k!==B&&(k=B,hr=!0,ps=!0)}if(xe.isSkinnedMesh){Ht.setOptional(V,xe,"bindMatrix"),Ht.setOptional(V,xe,"bindMatrixInverse");const fn=xe.skeleton;fn&&(Te.floatVertexTextures?(fn.boneTexture===null&&fn.computeBoneTexture(),Ht.setValue(V,"boneTexture",fn.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}xe.isBatchedMesh&&(Ht.setOptional(V,xe,"batchingTexture"),Ht.setValue(V,"batchingTexture",xe._matricesTexture,S));const ms=Se.morphAttributes;if((ms.position!==void 0||ms.normal!==void 0||ms.color!==void 0&&Te.isWebGL2===!0)&&Ye.update(xe,Se,ci),(hr||dt.receiveShadow!==xe.receiveShadow)&&(dt.receiveShadow=xe.receiveShadow,Ht.setValue(V,"receiveShadow",xe.receiveShadow)),ye.isMeshGouraudMaterial&&ye.envMap!==null&&(ui.envMap.value=it,ui.flipEnvMap.value=it.isCubeTexture&&it.isRenderTargetTexture===!1?-1:1),hr&&(Ht.setValue(V,"toneMappingExposure",M.toneMappingExposure),dt.needsLights&&jc(ui,ps),Ke&&ye.fog===!0&&Ee.refreshFogUniforms(ui,Ke),Ee.refreshMaterialUniforms(ui,ye,re,X,he),$r.upload(V,hn(dt),ui,S)),ye.isShaderMaterial&&ye.uniformsNeedUpdate===!0&&($r.upload(V,hn(dt),ui,S),ye.uniformsNeedUpdate=!1),ye.isSpriteMaterial&&Ht.setValue(V,"center",xe.center),Ht.setValue(V,"modelViewMatrix",xe.modelViewMatrix),Ht.setValue(V,"normalMatrix",xe.normalMatrix),Ht.setValue(V,"modelMatrix",xe.matrixWorld),ye.isShaderMaterial||ye.isRawShaderMaterial){const fn=ye.uniformsGroups;for(let _s=0,Kc=fn.length;_s<Kc;_s++)if(Te.isWebGL2){const ba=fn[_s];H.update(ba,ci),H.bind(ba,ci)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ci}function jc(B,me){B.ambientLightColor.needsUpdate=me,B.lightProbe.needsUpdate=me,B.directionalLights.needsUpdate=me,B.directionalLightShadows.needsUpdate=me,B.pointLights.needsUpdate=me,B.pointLightShadows.needsUpdate=me,B.spotLights.needsUpdate=me,B.spotLightShadows.needsUpdate=me,B.rectAreaLights.needsUpdate=me,B.hemisphereLights.needsUpdate=me}function Yc(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(B,me,Se){oe.get(B.texture).__webglTexture=me,oe.get(B.depthTexture).__webglTexture=Se;const ye=oe.get(B);ye.__hasExternalTextures=!0,ye.__hasExternalTextures&&(ye.__autoAllocateDepthBuffer=Se===void 0,ye.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ye.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(B,me){const Se=oe.get(B);Se.__webglFramebuffer=me,Se.__useDefaultFramebuffer=me===void 0},this.setRenderTarget=function(B,me=0,Se=0){y=B,P=me,A=Se;let ye=!0,xe=null,Ke=!1,Je=!1;if(B){const it=oe.get(B);it.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(V.FRAMEBUFFER,null),ye=!1):it.__webglFramebuffer===void 0?S.setupRenderTarget(B):it.__hasExternalTextures&&S.rebindTextures(B,oe.get(B.texture).__webglTexture,oe.get(B.depthTexture).__webglTexture);const ft=B.texture;(ft.isData3DTexture||ft.isDataArrayTexture||ft.isCompressedArrayTexture)&&(Je=!0);const lt=oe.get(B).__webglFramebuffer;B.isWebGLCubeRenderTarget?(Array.isArray(lt[me])?xe=lt[me][Se]:xe=lt[me],Ke=!0):Te.isWebGL2&&B.samples>0&&S.useMultisampledRTT(B)===!1?xe=oe.get(B).__webglMultisampledFramebuffer:Array.isArray(lt)?xe=lt[Se]:xe=lt,x.copy(B.viewport),T.copy(B.scissor),$=B.scissorTest}else x.copy(Y).multiplyScalar(re).floor(),T.copy(j).multiplyScalar(re).floor(),$=J;if(le.bindFramebuffer(V.FRAMEBUFFER,xe)&&Te.drawBuffers&&ye&&le.drawBuffers(B,xe),le.viewport(x),le.scissor(T),le.setScissorTest($),Ke){const it=oe.get(B.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+me,it.__webglTexture,Se)}else if(Je){const it=oe.get(B.texture),ft=me||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,it.__webglTexture,Se||0,ft)}L=-1},this.readRenderTargetPixels=function(B,me,Se,ye,xe,Ke,Je){if(!(B&&B.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=oe.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Je!==void 0&&(tt=tt[Je]),tt){le.bindFramebuffer(V.FRAMEBUFFER,tt);try{const it=B.texture,ft=it.format,lt=it.type;if(ft!==Mn&&Oe.convert(ft)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ct=lt===br&&(fe.has("EXT_color_buffer_half_float")||Te.isWebGL2&&fe.has("EXT_color_buffer_float"));if(lt!==si&&Oe.convert(lt)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(lt===Xn&&(Te.isWebGL2||fe.has("OES_texture_float")||fe.has("WEBGL_color_buffer_float")))&&!ct){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}me>=0&&me<=B.width-ye&&Se>=0&&Se<=B.height-xe&&V.readPixels(me,Se,ye,xe,Oe.convert(ft),Oe.convert(lt),Ke)}finally{const it=y!==null?oe.get(y).__webglFramebuffer:null;le.bindFramebuffer(V.FRAMEBUFFER,it)}}},this.copyFramebufferToTexture=function(B,me,Se=0){const ye=Math.pow(2,-Se),xe=Math.floor(me.image.width*ye),Ke=Math.floor(me.image.height*ye);S.setTexture2D(me,0),V.copyTexSubImage2D(V.TEXTURE_2D,Se,0,0,B.x,B.y,xe,Ke),le.unbindTexture()},this.copyTextureToTexture=function(B,me,Se,ye=0){const xe=me.image.width,Ke=me.image.height,Je=Oe.convert(Se.format),tt=Oe.convert(Se.type);S.setTexture2D(Se,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Se.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Se.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Se.unpackAlignment),me.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,ye,B.x,B.y,xe,Ke,Je,tt,me.image.data):me.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,ye,B.x,B.y,me.mipmaps[0].width,me.mipmaps[0].height,Je,me.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,ye,B.x,B.y,Je,tt,me.image),ye===0&&Se.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),le.unbindTexture()},this.copyTextureToTexture3D=function(B,me,Se,ye,xe=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ke=B.max.x-B.min.x+1,Je=B.max.y-B.min.y+1,tt=B.max.z-B.min.z+1,it=Oe.convert(ye.format),ft=Oe.convert(ye.type);let lt;if(ye.isData3DTexture)S.setTexture3D(ye,0),lt=V.TEXTURE_3D;else if(ye.isDataArrayTexture||ye.isCompressedArrayTexture)S.setTexture2DArray(ye,0),lt=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,ye.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ye.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,ye.unpackAlignment);const ct=V.getParameter(V.UNPACK_ROW_LENGTH),Ct=V.getParameter(V.UNPACK_IMAGE_HEIGHT),rn=V.getParameter(V.UNPACK_SKIP_PIXELS),Nt=V.getParameter(V.UNPACK_SKIP_ROWS),On=V.getParameter(V.UNPACK_SKIP_IMAGES),Tt=Se.isCompressedTexture?Se.mipmaps[xe]:Se.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,Tt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Tt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,B.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,B.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,B.min.z),Se.isDataTexture||Se.isData3DTexture?V.texSubImage3D(lt,xe,me.x,me.y,me.z,Ke,Je,tt,it,ft,Tt.data):Se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(lt,xe,me.x,me.y,me.z,Ke,Je,tt,it,Tt.data)):V.texSubImage3D(lt,xe,me.x,me.y,me.z,Ke,Je,tt,it,ft,Tt),V.pixelStorei(V.UNPACK_ROW_LENGTH,ct),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ct),V.pixelStorei(V.UNPACK_SKIP_PIXELS,rn),V.pixelStorei(V.UNPACK_SKIP_ROWS,Nt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,On),xe===0&&ye.generateMipmaps&&V.generateMipmap(lt),le.unbindTexture()},this.initTexture=function(B){B.isCubeTexture?S.setTextureCube(B,0):B.isData3DTexture?S.setTexture3D(B,0):B.isDataArrayTexture||B.isCompressedArrayTexture?S.setTexture2DArray(B,0):S.setTexture2D(B,0),le.unbindTexture()},this.resetState=function(){P=0,A=0,y=null,le.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===pa?"display-p3":"srgb",t.unpackColorSpace=Et.workingColorSpace===cs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===zt?Mi:Sc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Mi?zt:Yn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class b_ extends Wc{}b_.prototype.isWebGL1Renderer=!0;class y_ extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class xa extends or{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tl=new de,Al=new de,wl=new Pt,Ks=new ma,jr=new us;class T_ extends kt{constructor(e=new nn,t=new xa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Tl.fromBufferAttribute(t,r-1),Al.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Tl.distanceTo(Al);e.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(r),jr.radius+=s,e.ray.intersectsSphere(jr)===!1)return;wl.copy(r).invert(),Ks.copy(e.ray).applyMatrix4(wl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new de,u=new de,h=new de,f=new de,_=this.isLineSegments?2:1,m=n.index,p=n.attributes.position;if(m!==null){const d=Math.max(0,a.start),b=Math.min(m.count,a.start+a.count);for(let M=d,R=b-1;M<R;M+=_){const P=m.getX(M),A=m.getX(M+1);if(l.fromBufferAttribute(p,P),u.fromBufferAttribute(p,A),Ks.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(f);L<e.near||L>e.far||t.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),b=Math.min(p.count,a.start+a.count);for(let M=d,R=b-1;M<R;M+=_){if(l.fromBufferAttribute(p,M),u.fromBufferAttribute(p,M+1),Ks.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Cl=new de,Rl=new de;class Xc extends T_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Cl.fromBufferAttribute(t,r),Rl.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Cl.distanceTo(Rl);e.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ea extends nn{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],_=[];let m=0;const g=[],p=n/2;let d=0;b(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new wt(h,3)),this.setAttribute("normal",new wt(f,3)),this.setAttribute("uv",new wt(_,2));function b(){const R=new de,P=new de;let A=0;const y=(t-e)/n;for(let L=0;L<=s;L++){const k=[],x=L/s,T=x*(t-e)+e;for(let $=0;$<=r;$++){const te=$/r,N=te*c+o,K=Math.sin(N),X=Math.cos(N);P.x=T*K,P.y=-x*n+p,P.z=T*X,h.push(P.x,P.y,P.z),R.set(K,y,X).normalize(),f.push(R.x,R.y,R.z),_.push(te,1-x),k.push(m++)}g.push(k)}for(let L=0;L<r;L++)for(let k=0;k<s;k++){const x=g[k][L],T=g[k+1][L],$=g[k+1][L+1],te=g[k][L+1];u.push(x,T,te),u.push(T,$,te),A+=6}l.addGroup(d,A,0),d+=A}function M(R){const P=m,A=new rt,y=new de;let L=0;const k=R===!0?e:t,x=R===!0?1:-1;for(let $=1;$<=r;$++)h.push(0,p*x,0),f.push(0,x,0),_.push(.5,.5),m++;const T=m;for(let $=0;$<=r;$++){const N=$/r*c+o,K=Math.cos(N),X=Math.sin(N);y.x=k*X,y.y=p*x,y.z=k*K,h.push(y.x,y.y,y.z),f.push(0,x,0),A.x=K*.5+.5,A.y=X*.5*x+.5,_.push(A.x,A.y),m++}for(let $=0;$<r;$++){const te=P+$,N=T+$;R===!0?u.push(N,N+1,te):u.push(N+1,N,te),L+=3}l.addGroup(d,L,R===!0?1:2),d+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ea(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ma extends nn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new de,f=new de,_=[],m=[],g=[],p=[];for(let d=0;d<=n;d++){const b=[],M=d/n;let R=0;d===0&&a===0?R=.5/t:d===n&&c===Math.PI&&(R=-.5/t);for(let P=0;P<=t;P++){const A=P/t;h.x=-e*Math.cos(r+A*s)*Math.sin(a+M*o),h.y=e*Math.cos(a+M*o),h.z=e*Math.sin(r+A*s)*Math.sin(a+M*o),m.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),p.push(A+R,1-M),b.push(l++)}u.push(b)}for(let d=0;d<n;d++)for(let b=0;b<t;b++){const M=u[d][b+1],R=u[d][b],P=u[d+1][b],A=u[d+1][b+1];(d!==0||a>0)&&_.push(M,R,A),(d!==n-1||c<Math.PI)&&_.push(R,P,A)}this.setIndex(_),this.setAttribute("position",new wt(m,3)),this.setAttribute("normal",new wt(g,3)),this.setAttribute("uv",new wt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xi extends or{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ht(16777215),this.specular=new ht(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bc,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qc extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Zs=new Pt,Pl=new de,Ll=new de;class A_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ga,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Pl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pl),Ll.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ll),t.updateMatrixWorld(),Zs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class w_ extends A_{constructor(){super(new Fc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class C_ extends qc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new w_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class R_ extends qc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Dl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos($t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class P_ extends Xc{constructor(e=10,t=10,n=4473924,r=8947848){n=new ht(n),r=new ht(r);const s=t/2,a=e/t,o=e/2,c=[],l=[];for(let f=0,_=0,m=-o;f<=t;f++,m+=a){c.push(-o,0,m,o,0,m),c.push(m,0,-o,m,0,o);const g=f===s?n:r;g.toArray(l,_),_+=3,g.toArray(l,_),_+=3,g.toArray(l,_),_+=3,g.toArray(l,_),_+=3}const u=new nn;u.setAttribute("position",new wt(c,3)),u.setAttribute("color",new wt(l,3));const h=new xa({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class L_ extends Xc{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new nn;r.setAttribute("position",new wt(t,3)),r.setAttribute("color",new wt(n,3));const s=new xa({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,n){const r=new ht,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ha}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ha);const Il={type:"change"},$s={type:"start"},Ul={type:"end"},Yr=new ma,Nl=new Wn,D_=Math.cos(70*dh.DEG2RAD);class I_ extends Ai{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new de,this.cursor=new de,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:wi.ROTATE,MIDDLE:wi.DOLLY,RIGHT:wi.PAN},this.touches={ONE:Ci.ROTATE,TWO:Ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(H){H.addEventListener("keydown",Ie),this._domElementKeyEvents=H},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ie),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Il),n.update(),s=r.NONE},this.update=function(){const H=new de,Ne=new Ti().setFromUnitVectors(e.up,new de(0,1,0)),Ve=Ne.clone().invert(),qe=new de,U=new Ti,ve=new de,_e=2*Math.PI;return function(De=null){const et=n.object.position;H.copy(et).sub(n.target),H.applyQuaternion(Ne),o.setFromVector3(H),n.autoRotate&&s===r.NONE&&$(x(De)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let at=n.minAzimuthAngle,gt=n.maxAzimuthAngle;isFinite(at)&&isFinite(gt)&&(at<-Math.PI?at+=_e:at>Math.PI&&(at-=_e),gt<-Math.PI?gt+=_e:gt>Math.PI&&(gt-=_e),at<=gt?o.theta=Math.max(at,Math.min(gt,o.theta)):o.theta=o.theta>(at+gt)/2?Math.max(at,o.theta):Math.min(gt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&A||n.object.isOrthographicCamera?o.radius=Y(o.radius):o.radius=Y(o.radius*l),H.setFromSpherical(o),H.applyQuaternion(Ve),et.copy(n.target).add(H),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let yt=!1;if(n.zoomToCursor&&A){let st=null;if(n.object.isPerspectiveCamera){const xt=H.length();st=Y(xt*l);const St=xt-st;n.object.position.addScaledVector(R,St),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const xt=new de(P.x,P.y,0);xt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),yt=!0;const St=new de(P.x,P.y,0);St.unproject(n.object),n.object.position.sub(St).add(xt),n.object.updateMatrixWorld(),st=H.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;st!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(st).add(n.object.position):(Yr.origin.copy(n.object.position),Yr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Yr.direction))<D_?e.lookAt(n.target):(Nl.setFromNormalAndCoplanarPoint(n.object.up,n.target),Yr.intersectPlane(Nl,n.target))))}else n.object.isOrthographicCamera&&(yt=l!==1,yt&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix()));return l=1,A=!1,yt||qe.distanceToSquared(n.object.position)>a||8*(1-U.dot(n.object.quaternion))>a||ve.distanceToSquared(n.target)>0?(n.dispatchEvent(Il),qe.copy(n.object.position),U.copy(n.object.quaternion),ve.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",We),n.domElement.removeEventListener("pointerdown",S),n.domElement.removeEventListener("pointercancel",F),n.domElement.removeEventListener("wheel",ge),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",F),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ie),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Dl,c=new Dl;let l=1;const u=new de,h=new rt,f=new rt,_=new rt,m=new rt,g=new rt,p=new rt,d=new rt,b=new rt,M=new rt,R=new de,P=new rt;let A=!1;const y=[],L={};let k=!1;function x(H){return H!==null?2*Math.PI/60*n.autoRotateSpeed*H:2*Math.PI/60/60*n.autoRotateSpeed}function T(H){const Ne=Math.abs(H*.01);return Math.pow(.95,n.zoomSpeed*Ne)}function $(H){c.theta-=H}function te(H){c.phi-=H}const N=function(){const H=new de;return function(Ve,qe){H.setFromMatrixColumn(qe,0),H.multiplyScalar(-Ve),u.add(H)}}(),K=function(){const H=new de;return function(Ve,qe){n.screenSpacePanning===!0?H.setFromMatrixColumn(qe,1):(H.setFromMatrixColumn(qe,0),H.crossVectors(n.object.up,H)),H.multiplyScalar(Ve),u.add(H)}}(),X=function(){const H=new de;return function(Ve,qe){const U=n.domElement;if(n.object.isPerspectiveCamera){const ve=n.object.position;H.copy(ve).sub(n.target);let _e=H.length();_e*=Math.tan(n.object.fov/2*Math.PI/180),N(2*Ve*_e/U.clientHeight,n.object.matrix),K(2*qe*_e/U.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(Ve*(n.object.right-n.object.left)/n.object.zoom/U.clientWidth,n.object.matrix),K(qe*(n.object.top-n.object.bottom)/n.object.zoom/U.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function re(H){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=H:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function D(H){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=H:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(H,Ne){if(!n.zoomToCursor)return;A=!0;const Ve=n.domElement.getBoundingClientRect(),qe=H-Ve.left,U=Ne-Ve.top,ve=Ve.width,_e=Ve.height;P.x=qe/ve*2-1,P.y=-(U/_e)*2+1,R.set(P.x,P.y,1).unproject(n.object).sub(n.object.position).normalize()}function Y(H){return Math.max(n.minDistance,Math.min(n.maxDistance,H))}function j(H){h.set(H.clientX,H.clientY)}function J(H){O(H.clientX,H.clientX),d.set(H.clientX,H.clientY)}function ae(H){m.set(H.clientX,H.clientY)}function q(H){f.set(H.clientX,H.clientY),_.subVectors(f,h).multiplyScalar(n.rotateSpeed);const Ne=n.domElement;$(2*Math.PI*_.x/Ne.clientHeight),te(2*Math.PI*_.y/Ne.clientHeight),h.copy(f),n.update()}function G(H){b.set(H.clientX,H.clientY),M.subVectors(b,d),M.y>0?re(T(M.y)):M.y<0&&D(T(M.y)),d.copy(b),n.update()}function he(H){g.set(H.clientX,H.clientY),p.subVectors(g,m).multiplyScalar(n.panSpeed),X(p.x,p.y),m.copy(g),n.update()}function ie(H){O(H.clientX,H.clientY),H.deltaY<0?D(T(H.deltaY)):H.deltaY>0&&re(T(H.deltaY)),n.update()}function W(H){let Ne=!1;switch(H.code){case n.keys.UP:H.ctrlKey||H.metaKey||H.shiftKey?te(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):X(0,n.keyPanSpeed),Ne=!0;break;case n.keys.BOTTOM:H.ctrlKey||H.metaKey||H.shiftKey?te(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):X(0,-n.keyPanSpeed),Ne=!0;break;case n.keys.LEFT:H.ctrlKey||H.metaKey||H.shiftKey?$(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):X(n.keyPanSpeed,0),Ne=!0;break;case n.keys.RIGHT:H.ctrlKey||H.metaKey||H.shiftKey?$(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):X(-n.keyPanSpeed,0),Ne=!0;break}Ne&&(H.preventDefault(),n.update())}function se(H){if(y.length===1)h.set(H.pageX,H.pageY);else{const Ne=Oe(H),Ve=.5*(H.pageX+Ne.x),qe=.5*(H.pageY+Ne.y);h.set(Ve,qe)}}function Z(H){if(y.length===1)m.set(H.pageX,H.pageY);else{const Ne=Oe(H),Ve=.5*(H.pageX+Ne.x),qe=.5*(H.pageY+Ne.y);m.set(Ve,qe)}}function pe(H){const Ne=Oe(H),Ve=H.pageX-Ne.x,qe=H.pageY-Ne.y,U=Math.sqrt(Ve*Ve+qe*qe);d.set(0,U)}function V(H){n.enableZoom&&pe(H),n.enablePan&&Z(H)}function Ce(H){n.enableZoom&&pe(H),n.enableRotate&&se(H)}function fe(H){if(y.length==1)f.set(H.pageX,H.pageY);else{const Ve=Oe(H),qe=.5*(H.pageX+Ve.x),U=.5*(H.pageY+Ve.y);f.set(qe,U)}_.subVectors(f,h).multiplyScalar(n.rotateSpeed);const Ne=n.domElement;$(2*Math.PI*_.x/Ne.clientHeight),te(2*Math.PI*_.y/Ne.clientHeight),h.copy(f)}function Te(H){if(y.length===1)g.set(H.pageX,H.pageY);else{const Ne=Oe(H),Ve=.5*(H.pageX+Ne.x),qe=.5*(H.pageY+Ne.y);g.set(Ve,qe)}p.subVectors(g,m).multiplyScalar(n.panSpeed),X(p.x,p.y),m.copy(g)}function le(H){const Ne=Oe(H),Ve=H.pageX-Ne.x,qe=H.pageY-Ne.y,U=Math.sqrt(Ve*Ve+qe*qe);b.set(0,U),M.set(0,Math.pow(b.y/d.y,n.zoomSpeed)),re(M.y),d.copy(b);const ve=(H.pageX+Ne.x)*.5,_e=(H.pageY+Ne.y)*.5;O(ve,_e)}function Pe(H){n.enableZoom&&le(H),n.enablePan&&Te(H)}function oe(H){n.enableZoom&&le(H),n.enableRotate&&fe(H)}function S(H){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(H.pointerId),n.domElement.addEventListener("pointermove",E),n.domElement.addEventListener("pointerup",F)),Ye(H),H.pointerType==="touch"?Xe(H):ue(H))}function E(H){n.enabled!==!1&&(H.pointerType==="touch"?Ae(H):ce(H))}function F(H){switch(ke(H),y.length){case 0:n.domElement.releasePointerCapture(H.pointerId),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",F),n.dispatchEvent(Ul),s=r.NONE;break;case 1:const Ne=y[0],Ve=L[Ne];Xe({pointerId:Ne,pageX:Ve.x,pageY:Ve.y});break}}function ue(H){let Ne;switch(H.button){case 0:Ne=n.mouseButtons.LEFT;break;case 1:Ne=n.mouseButtons.MIDDLE;break;case 2:Ne=n.mouseButtons.RIGHT;break;default:Ne=-1}switch(Ne){case wi.DOLLY:if(n.enableZoom===!1)return;J(H),s=r.DOLLY;break;case wi.ROTATE:if(H.ctrlKey||H.metaKey||H.shiftKey){if(n.enablePan===!1)return;ae(H),s=r.PAN}else{if(n.enableRotate===!1)return;j(H),s=r.ROTATE}break;case wi.PAN:if(H.ctrlKey||H.metaKey||H.shiftKey){if(n.enableRotate===!1)return;j(H),s=r.ROTATE}else{if(n.enablePan===!1)return;ae(H),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent($s)}function ce(H){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;q(H);break;case r.DOLLY:if(n.enableZoom===!1)return;G(H);break;case r.PAN:if(n.enablePan===!1)return;he(H);break}}function ge(H){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(H.preventDefault(),n.dispatchEvent($s),ie(Me(H)),n.dispatchEvent(Ul))}function Me(H){const Ne=H.deltaMode,Ve={clientX:H.clientX,clientY:H.clientY,deltaY:H.deltaY};switch(Ne){case 1:Ve.deltaY*=16;break;case 2:Ve.deltaY*=100;break}return H.ctrlKey&&!k&&(Ve.deltaY*=10),Ve}function Ee(H){H.key==="Control"&&(k=!0,n.domElement.getRootNode().addEventListener("keyup",be,{passive:!0,capture:!0}))}function be(H){H.key==="Control"&&(k=!1,n.domElement.getRootNode().removeEventListener("keyup",be,{passive:!0,capture:!0}))}function Ie(H){n.enabled===!1||n.enablePan===!1||W(H)}function Xe(H){switch(je(H),y.length){case 1:switch(n.touches.ONE){case Ci.ROTATE:if(n.enableRotate===!1)return;se(H),s=r.TOUCH_ROTATE;break;case Ci.PAN:if(n.enablePan===!1)return;Z(H),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Ci.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;V(H),s=r.TOUCH_DOLLY_PAN;break;case Ci.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ce(H),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent($s)}function Ae(H){switch(je(H),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;fe(H),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Te(H),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Pe(H),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;oe(H),n.update();break;default:s=r.NONE}}function We(H){n.enabled!==!1&&H.preventDefault()}function Ye(H){y.push(H.pointerId)}function ke(H){delete L[H.pointerId];for(let Ne=0;Ne<y.length;Ne++)if(y[Ne]==H.pointerId){y.splice(Ne,1);return}}function je(H){let Ne=L[H.pointerId];Ne===void 0&&(Ne=new rt,L[H.pointerId]=Ne),Ne.set(H.pageX,H.pageY)}function Oe(H){const Ne=H.pointerId===y[0]?y[1]:y[0];return L[Ne]}n.domElement.addEventListener("contextmenu",We),n.domElement.addEventListener("pointerdown",S),n.domElement.addEventListener("pointercancel",F),n.domElement.addEventListener("wheel",ge,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Ee,{passive:!0,capture:!0}),this.update()}}function Ol(i){let e,t='<div class="empty-icon svelte-at2dj3">⛏</div> <h3 class="svelte-at2dj3">GeoModeler 三维地质可视化</h3> <p class="svelte-at2dj3">导入钻孔数据后开始三维建模与可视化分析</p>';return{c(){e=C("div"),e.innerHTML=t,this.h()},l(n){e=w(n,"DIV",{class:!0,"data-svelte-h":!0}),Le(e)!=="svelte-1u73fdm"&&(e.innerHTML=t),this.h()},h(){z(e,"class","viewer-empty svelte-at2dj3")},m(n,r){Re(n,e,r)},d(n){n&&I(e)}}}function U_(i){let e,t=!i[2]&&i[3].length===0&&!i[1]&&Ol();return{c(){e=C("div"),t&&t.c(),this.h()},l(n){e=w(n,"DIV",{class:!0});var r=ne(e);t&&t.l(r),r.forEach(I),this.h()},h(){z(e,"class","viewer-container svelte-at2dj3")},m(n,r){Re(n,e,r),t&&t.m(e,null),i[4](e)},p(n,r){!n[2]&&n[3].length===0&&!n[1]?t||(t=Ol(),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},i:bt,o:bt,d(n){n&&I(e),t&&t.d(),i[4](null)}}}function Fl(i,e,t){const n=t>e?Math.max(0,Math.min(1,(i-e)/(t-e))):.5;if(n<.25)return[0,0,.5+n/.25*.5];if(n<.5){const r=(n-.25)/.25;return[0,r,1-r]}else if(n<.75){const r=(n-.5)/.25;return[r,1-r,0]}else return[1,1-(n-.75)/.25*.5,0]}function N_(i,e,t){let n,r,s,a,o,c,l,u,h;nt(i,Gn,O=>t(16,n=O)),nt(i,es,O=>t(17,r=O)),nt(i,Qr,O=>t(1,s=O)),nt(i,Jr,O=>t(2,a=O)),nt(i,Yi,O=>t(18,o=O)),nt(i,ji,O=>t(19,c=O)),nt(i,qi,O=>t(20,l=O)),nt(i,jn,O=>t(21,u=O)),nt(i,bi,O=>t(3,h=O));let f,_,m,g,p,d={},b=[],M=null,R=null,P=null,A,y=!1;const L=["#E6B89C","#F0E68C","#CD853F","#8B7355","#A0522D","#DEB887","#D2B48C","#BDB76B","#BC8F8F","#C4A882","#9ACD32","#6B8E23","#556B2F","#8FBC8F","#2E8B57","#708090","#778899","#B0C4DE","#87CEEB","#4682B4"];function k(O,Y=0){const j=u==null?void 0:u.find(J=>J.name===O);return j!=null&&j.color?new ht(j.color):new ht(L[Y%L.length])}ca(()=>{T();const O=bi.subscribe(ie=>{y&&ie&&ie.length>0&&te(ie)}),Y=Jr.subscribe(ie=>{y&&ie&&N()}),j=Yi.subscribe(()=>{y&&K()}),J=qi.subscribe(()=>{y&&a&&N()}),ae=ji.subscribe(()=>{y&&a&&N()}),q=Qr.subscribe(ie=>{y&&(ie?X():R&&(x(R),R=null))}),G=es.subscribe(()=>{y&&s&&X()}),he=Gn.subscribe(()=>{y&&re()});return()=>{O(),Y(),j(),J(),ae(),q(),G(),he(),cancelAnimationFrame(A),g==null||g.dispose()}});function x(O){O&&(_.remove(O),O.geometry&&O.geometry.dispose(),O.material&&(Array.isArray(O.material)?O.material.forEach(Y=>Y.dispose()):O.material.dispose()),O.children&&O.children.forEach(Y=>x(Y)))}function T(){if(!f)return;_=new y_,_.background=new ht(1711395),m=new mn(60,f.clientWidth/f.clientHeight,.1,1e4),m.position.set(100,80,100),g=new Wc({antialias:!0}),g.setSize(f.clientWidth,f.clientHeight),g.setPixelRatio(window.devicePixelRatio),g.localClippingEnabled=!0,f.appendChild(g.domElement),p=new I_(m,g.domElement),p.enableDamping=!0,p.dampingFactor=.05;const O=new R_(4210752,2);_.add(O);const Y=new C_(16777215,1.5);Y.position.set(100,200,100),_.add(Y);const j=new P_(200,20,4473924,3355443);_.add(j);const J=new L_(50);_.add(J),y=!0,$(),new ResizeObserver(()=>{f&&g&&m&&(m.aspect=f.clientWidth/f.clientHeight,m.updateProjectionMatrix(),g.setSize(f.clientWidth,f.clientHeight))}).observe(f)}function $(){A=requestAnimationFrame($),p==null||p.update(),g==null||g.render(_,m)}function te(O){if(b.forEach(ae=>{x(ae)}),b=[],!O||O.length===0)return;const Y=O.map(ae=>[ae.longitude,ae.latitude,ae.elevation]);if(Y.length===0)return;const j=Math.min(...Y.map(ae=>ae[0])),J=Math.min(...Y.map(ae=>ae[1]));O.forEach(ae=>{const q=(ae.longitude-j)*111320*Math.cos(ae.latitude*Math.PI/180),G=(ae.latitude-J)*111320;if(!ae.layers||ae.layers.length===0)return;ae.layers.forEach(ie=>{const W=(u==null?void 0:u.findIndex(fe=>fe.name===ie.lithology_name))||0,se=k(ie.lithology_name,W),Z=ie.bottom_depth-ie.top_depth,pe=new Ea(1.2,1.2,Z,16),V=new Xi({color:se,transparent:!0,opacity:.9}),Ce=new Xt(pe,V);Ce.position.set(q,ae.elevation-ie.top_depth-Z/2,G),_.add(Ce),b.push(Ce)});const he=new Xt(new Ma(1.5,16,16),new Xi({color:16777215}));he.position.set(q,ae.elevation,G),_.add(he),b.push(he)})}function N(){Object.values(d).forEach(ae=>{x(ae)}),d={};const O=a;if(!(O!=null&&O.surfaces))return;const Y=O.grid;if(!Y)return;const j=Y.nx,J=Y.ny;O.lithologies&&O.lithologies.forEach((ae,q)=>{var Pe,oe;const G=O.surfaces[ae];if(!(G!=null&&G.top)||!(G!=null&&G.bottom))return;const he=G.top,ie=G.bottom,W=k(ae,q),se=l[ae]!==!1,Z=c[ae]??.7,pe=new $i,V=new nn,Ce=[],fe=[];for(let S=0;S<J;S++)for(let E=0;E<j;E++){const F=E/(j-1)*100,ue=S/(J-1)*100,ce=((Pe=he[S])==null?void 0:Pe[E])??0,ge=((oe=ie[S])==null?void 0:oe[E])??0;Ce.push(F,ce,ue),Ce.push(F,ge,ue)}for(let S=0;S<J-1;S++)for(let E=0;E<j-1;E++){const F=(S*j+E)*2,ue=(S*j+E+1)*2,ce=((S+1)*j+E)*2,ge=((S+1)*j+E+1)*2;fe.push(F,ce,ue),fe.push(ue,ce,ge),fe.push(F+1,ue+1,ce+1),fe.push(ue+1,ge+1,ce+1)}for(let S=0;S<J-1;S++)for(let E=0;E<j-1;E++){const F=(S*j+E)*2,ue=F+1,ce=(S*j+E+1)*2,ge=ce+1;fe.push(F,ce,ue),fe.push(ue,ce,ge)}V.setAttribute("position",new wt(Ce,3)),V.setIndex(fe),V.computeVertexNormals();const Te=new Xi({color:W,transparent:!0,opacity:Z,side:ln,clippingPlanes:o.enabled&&M?[M]:[]}),le=new Xt(V,Te);pe.add(le),pe.visible=se,_.add(pe),d[ae]=pe})}function K(){if(o.enabled){const O=o.normal,Y=o.position;M=new Wn(new de(O[0],O[1],O[2]).normalize(),-(O[0]*Y[0]+O[1]*Y[1]+O[2]*Y[2]))}else M=null;y&&a&&N()}function X(){R&&(x(R),R=null);const O=s;if(!O)return;const Y=O.field||O.grid_values;if(!Y)return;const j=O.grid;if(!j)return;const J=j.nx||j.lon_nx||50,ae=j.ny||j.lat_ny||50,q=j.nz||j.elev_nz||25,G=r.mode,he=r.colorMin,ie=r.colorMax,W=j.elev_min??j.z_min??0,Z=((j.elev_max??j.z_max??100)-W)/(q-1||1),pe=100/Math.max(J,ae);if(G==="voxel"){const V=new $i,Ce=J*ae*q,fe=Math.max(1,Math.floor(Ce/3e3));let Te=0;for(let le=0;le<q;le+=1)for(let Pe=0;Pe<ae;Pe+=1)for(let oe=0;oe<J;oe+=1){if(Te++%fe!==0&&fe>1)continue;const S=le*ae*J+Pe*J+oe;if(S>=Y.length)continue;const E=Y[S];if(E==null||Number.isNaN(E))continue;const F=Fl(E,he,ie),ue=oe/(J-1||1)*100,ce=Pe/(ae-1||1)*100,ge=W+le*Z,Me=new lr(pe*.8,Math.abs(Z*.8)||.5,pe*.8),Ee=new _a({color:new ht(F[0],F[1],F[2]),transparent:!0,opacity:.7}),be=new Xt(Me,Ee);be.position.set(ue,ge,ce),V.add(be)}R=V,_.add(V)}else{const V=r.isosurfaceValue,Ce=[],fe=[],Te=[];let le=0;for(let S=0;S<q-1;S++)for(let E=0;E<ae-1;E++)for(let F=0;F<J-1;F++){const ce=[[F,E,S],[F+1,E,S],[F+1,E+1,S],[F,E+1,S],[F,E,S+1],[F+1,E,S+1],[F+1,E+1,S+1],[F,E+1,S+1]].map(([ke,je,Oe])=>{const $e=Oe*ae*J+je*J+ke;return $e<Y.length?Y[$e]:0}),Me=ce.map(ke=>(ke||0)>=V).filter(ke=>ke).length;if(Me===0||Me===8)continue;const Ee=(F+.5)/(J-1)*100,be=(E+.5)/(ae-1)*100,Ie=W+(S+.5)*Z,Xe=ce.reduce((ke,je)=>ke+je,0)/8,Ae=Fl(Xe,he,ie),We=pe*.9,Ye=Math.max(Math.abs(Z*.9),We*.2);Ce.push(Ee-We/2,Ie-Ye/2,be-We/2,Ee+We/2,Ie-Ye/2,be-We/2,Ee+We/2,Ie-Ye/2,be+We/2,Ee-We/2,Ie-Ye/2,be+We/2,Ee-We/2,Ie+Ye/2,be-We/2,Ee+We/2,Ie+Ye/2,be-We/2,Ee+We/2,Ie+Ye/2,be+We/2,Ee-We/2,Ie+Ye/2,be+We/2);for(let ke=0;ke<8;ke++)Te.push(Ae[0],Ae[1],Ae[2]);fe.push(le,le+1,le+2,le,le+2,le+3,le+4,le+6,le+5,le+4,le+7,le+6,le,le+4,le+5,le,le+5,le+1,le+1,le+5,le+6,le+1,le+6,le+2,le+2,le+6,le+7,le+2,le+7,le+3,le+3,le+7,le+4,le+3,le+4,le),le+=8}if(Ce.length===0)return;const Pe=new nn;Pe.setAttribute("position",new wt(Ce,3)),Pe.setAttribute("color",new wt(Te,3)),Pe.setIndex(fe),Pe.computeVertexNormals();const oe=new Xi({vertexColors:!0,transparent:!0,opacity:.85,side:ln});R=new Xt(Pe,oe),_.add(R)}}function re(){P&&(x(P),P=null);const O=n;if(!O||!O.visible||!O.orthoImage&&!O.demImage)return;const Y=100;if(O.demImage){const j=O.demImage,J=document.createElement("canvas");J.width=64,J.height=64;const ae=J.getContext("2d");ae.drawImage(j,0,0,64,64);try{const q=ae.getImageData(0,0,64,64).data,G=32,he=32,ie=new ar(Y,Y,G,he),W=ie.attributes.position;for(let V=0;V<=he;V++)for(let Ce=0;Ce<=G;Ce++){const fe=Math.floor(Ce/G*63),le=(Math.floor(V/he*63)*64+fe)*4,oe=(q[le]+q[le+1]+q[le+2])/3/255*30-5;W.setZ(V*(G+1)+Ce,oe)}ie.computeVertexNormals();const se={transparent:!0,opacity:O.opacity,side:ln};if(O.orthoImage){const V=new Yt(O.orthoImage);V.needsUpdate=!0,se.map=V}else se.color=8956518;const Z=new Xi(se),pe=new Xt(ie,Z);pe.rotation.x=-Math.PI/2,pe.position.y=0,P=pe,_.add(pe);return}catch(q){console.warn("DEM texture load failed:",q)}}if(O.orthoImage){const j=new Yt(O.orthoImage);j.needsUpdate=!0;const J=new ar(Y,Y),ae=new Xi({map:j,transparent:!0,opacity:O.opacity,side:ln}),q=new Xt(J,ae);q.rotation.x=-Math.PI/2,q.position.y=.01,P=q,_.add(q)}}function D(O){xr[O?"unshift":"push"](()=>{f=O,t(0,f)})}return[f,s,a,h,D]}class O_ extends bn{constructor(e){super(),yn(this,e,N_,U_,Sn,{},null,[-1,-1])}}function Bl(i,e,t){const n=i.slice();return n[43]=e[t],n}function zl(i,e,t){const n=i.slice();return n[46]=e[t],n}function kl(i,e,t){const n=i.slice();return n[49]=e[t],n}function F_(i){let e,t,n,r="变异函数模型",s,a,o,c="球状模型",l,u="指数模型",h,f="高斯模型",_,m,g,p,d,b,M,R="各向异性",P,A,y,L,k="主轴方向(°)",x,T,$,te,N,K="各向异性比",X,re,D,O,Y="网格分辨率",j,J,ae,q,G="NX",he,ie,W,se,Z,pe="NY",V,Ce,fe,Te,le,Pe="NZ",oe,S,E,F,ue="开始建模",ce,ge,Me=!i[9]&&Vl(i);return{c(){e=C("div"),t=C("div"),n=C("label"),n.textContent=r,s=ee(),a=C("select"),o=C("option"),o.textContent=c,l=C("option"),l.textContent=u,h=C("option"),h.textContent=f,_=ee(),m=C("label"),g=C("input"),p=Be(`
                自动拟合参数`),d=ee(),Me&&Me.c(),b=ee(),M=C("h4"),M.textContent=R,P=ee(),A=C("div"),y=C("div"),L=C("label"),L.textContent=k,x=ee(),T=C("input"),$=ee(),te=C("div"),N=C("label"),N.textContent=K,X=ee(),re=C("input"),D=ee(),O=C("h4"),O.textContent=Y,j=ee(),J=C("div"),ae=C("div"),q=C("label"),q.textContent=G,he=ee(),ie=C("input"),W=ee(),se=C("div"),Z=C("label"),Z.textContent=pe,V=ee(),Ce=C("input"),fe=ee(),Te=C("div"),le=C("label"),le.textContent=Pe,oe=ee(),S=C("input"),E=ee(),F=C("button"),F.textContent=ue,this.h()},l(Ee){e=w(Ee,"DIV",{class:!0});var be=ne(e);t=w(be,"DIV",{class:!0});var Ie=ne(t);n=w(Ie,"LABEL",{"data-svelte-h":!0}),Le(n)!=="svelte-1jgf9ft"&&(n.textContent=r),s=Q(Ie),a=w(Ie,"SELECT",{});var Xe=ne(a);o=w(Xe,"OPTION",{"data-svelte-h":!0}),Le(o)!=="svelte-17ym7v6"&&(o.textContent=c),l=w(Xe,"OPTION",{"data-svelte-h":!0}),Le(l)!=="svelte-bzk8zo"&&(l.textContent=u),h=w(Xe,"OPTION",{"data-svelte-h":!0}),Le(h)!=="svelte-1iqrdsw"&&(h.textContent=f),Xe.forEach(I),Ie.forEach(I),_=Q(be),m=w(be,"LABEL",{class:!0});var Ae=ne(m);g=w(Ae,"INPUT",{type:!0}),p=Fe(Ae,`
                自动拟合参数`),Ae.forEach(I),d=Q(be),Me&&Me.l(be),b=Q(be),M=w(be,"H4",{style:!0,"data-svelte-h":!0}),Le(M)!=="svelte-1bmbghc"&&(M.textContent=R),P=Q(be),A=w(be,"DIV",{class:!0});var We=ne(A);y=w(We,"DIV",{class:!0});var Ye=ne(y);L=w(Ye,"LABEL",{"data-svelte-h":!0}),Le(L)!=="svelte-121beyc"&&(L.textContent=k),x=Q(Ye),T=w(Ye,"INPUT",{type:!0,step:!0}),Ye.forEach(I),$=Q(We),te=w(We,"DIV",{class:!0});var ke=ne(te);N=w(ke,"LABEL",{"data-svelte-h":!0}),Le(N)!=="svelte-yzj6ss"&&(N.textContent=K),X=Q(ke),re=w(ke,"INPUT",{type:!0,step:!0,min:!0}),ke.forEach(I),We.forEach(I),D=Q(be),O=w(be,"H4",{style:!0,"data-svelte-h":!0}),Le(O)!=="svelte-z4z6jw"&&(O.textContent=Y),j=Q(be),J=w(be,"DIV",{class:!0});var je=ne(J);ae=w(je,"DIV",{class:!0});var Oe=ne(ae);q=w(Oe,"LABEL",{"data-svelte-h":!0}),Le(q)!=="svelte-kuum7m"&&(q.textContent=G),he=Q(Oe),ie=w(Oe,"INPUT",{type:!0,min:!0,max:!0}),Oe.forEach(I),W=Q(je),se=w(je,"DIV",{class:!0});var $e=ne(se);Z=w($e,"LABEL",{"data-svelte-h":!0}),Le(Z)!=="svelte-1kjsuy3"&&(Z.textContent=pe),V=Q($e),Ce=w($e,"INPUT",{type:!0,min:!0,max:!0}),$e.forEach(I),fe=Q(je),Te=w(je,"DIV",{class:!0});var H=ne(Te);le=w(H,"LABEL",{"data-svelte-h":!0}),Le(le)!=="svelte-1vblzhc"&&(le.textContent=Pe),oe=Q(H),S=w(H,"INPUT",{type:!0,min:!0,max:!0}),H.forEach(I),je.forEach(I),E=Q(be),F=w(be,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),Le(F)!=="svelte-1rcbday"&&(F.textContent=ue),be.forEach(I),this.h()},h(){o.__value="spherical",He(o,o.__value),l.__value="exponential",He(l,l.__value),h.__value="gaussian",He(h,h.__value),i[0]===void 0&&ai(()=>i[23].call(a)),z(t,"class","form-group"),z(g,"type","checkbox"),z(m,"class","checkbox-label"),we(M,"font-size","13px"),we(M,"margin","12px 0 8px"),z(T,"type","number"),z(T,"step","1"),z(y,"class","form-group"),z(re,"type","number"),z(re,"step","0.1"),z(re,"min","1"),z(te,"class","form-group"),z(A,"class","form-row"),we(O,"font-size","13px"),we(O,"margin","12px 0 8px"),z(ie,"type","number"),z(ie,"min","5"),z(ie,"max","100"),z(ae,"class","form-group"),z(Ce,"type","number"),z(Ce,"min","5"),z(Ce,"max","100"),z(se,"class","form-group"),z(S,"type","number"),z(S,"min","5"),z(S,"max","50"),z(Te,"class","form-group"),z(J,"class","form-row"),z(F,"class","btn-primary"),we(F,"width","100%"),we(F,"margin-top","12px"),z(e,"class","model-params")},m(Ee,be){Re(Ee,e,be),v(e,t),v(t,n),v(t,s),v(t,a),v(a,o),v(a,l),v(a,h),Ft(a,i[0],!0),v(e,_),v(e,m),v(m,g),g.checked=i[9],v(m,p),v(e,d),Me&&Me.m(e,null),v(e,b),v(e,M),v(e,P),v(e,A),v(A,y),v(y,L),v(y,x),v(y,T),He(T,i[4]),v(A,$),v(A,te),v(te,N),v(te,X),v(te,re),He(re,i[5]),v(e,D),v(e,O),v(e,j),v(e,J),v(J,ae),v(ae,q),v(ae,he),v(ae,ie),He(ie,i[6]),v(J,W),v(J,se),v(se,Z),v(se,V),v(se,Ce),He(Ce,i[7]),v(J,fe),v(J,Te),v(Te,le),v(Te,oe),v(Te,S),He(S,i[8]),v(e,E),v(e,F),ce||(ge=[ze(a,"change",i[23]),ze(g,"change",i[24]),ze(T,"input",i[28]),ze(re,"input",i[29]),ze(ie,"input",i[30]),ze(Ce,"input",i[31]),ze(S,"input",i[32]),ze(F,"click",i[19])],ce=!0)},p(Ee,be){be[0]&1&&Ft(a,Ee[0]),be[0]&512&&(g.checked=Ee[9]),Ee[9]?Me&&(Me.d(1),Me=null):Me?Me.p(Ee,be):(Me=Vl(Ee),Me.c(),Me.m(e,b)),be[0]&16&&ot(T.value)!==Ee[4]&&He(T,Ee[4]),be[0]&32&&ot(re.value)!==Ee[5]&&He(re,Ee[5]),be[0]&64&&ot(ie.value)!==Ee[6]&&He(ie,Ee[6]),be[0]&128&&ot(Ce.value)!==Ee[7]&&He(Ce,Ee[7]),be[0]&256&&ot(S.value)!==Ee[8]&&He(S,Ee[8])},d(Ee){Ee&&I(e),Me&&Me.d(),ce=!1,Lt(ge)}}}function B_(i){let e,t,n,r=i[13].progress.toFixed(0)+"",s,a,o,c,l;return{c(){e=C("div"),t=C("p"),n=Be("建模中... "),s=Be(r),a=Be("%"),o=ee(),c=C("div"),l=C("div"),this.h()},l(u){e=w(u,"DIV",{class:!0});var h=ne(e);t=w(h,"P",{class:!0});var f=ne(t);n=Fe(f,"建模中... "),s=Fe(f,r),a=Fe(f,"%"),f.forEach(I),o=Q(h),c=w(h,"DIV",{class:!0});var _=ne(c);l=w(_,"DIV",{class:!0,style:!0}),ne(l).forEach(I),_.forEach(I),h.forEach(I),this.h()},h(){z(t,"class","svelte-ajbu0x"),z(l,"class","progress-bar-fill"),we(l,"width",i[13].progress+"%"),z(c,"class","progress-bar"),z(e,"class","progress-section svelte-ajbu0x")},m(u,h){Re(u,e,h),v(e,t),v(t,n),v(t,s),v(t,a),v(e,o),v(e,c),v(c,l)},p(u,h){h[0]&8192&&r!==(r=u[13].progress.toFixed(0)+"")&&Qe(s,r),h[0]&8192&&we(l,"width",u[13].progress+"%")},d(u){u&&I(e)}}}function Vl(i){let e,t,n,r="变程",s,a,o,c,l,u="基台值",h,f,_,m,g,p="块金值",d,b,M,R;return{c(){e=C("div"),t=C("div"),n=C("label"),n.textContent=r,s=ee(),a=C("input"),o=ee(),c=C("div"),l=C("label"),l.textContent=u,h=ee(),f=C("input"),_=ee(),m=C("div"),g=C("label"),g.textContent=p,d=ee(),b=C("input"),this.h()},l(P){e=w(P,"DIV",{class:!0});var A=ne(e);t=w(A,"DIV",{class:!0});var y=ne(t);n=w(y,"LABEL",{"data-svelte-h":!0}),Le(n)!=="svelte-s6abzb"&&(n.textContent=r),s=Q(y),a=w(y,"INPUT",{type:!0,step:!0}),y.forEach(I),o=Q(A),c=w(A,"DIV",{class:!0});var L=ne(c);l=w(L,"LABEL",{"data-svelte-h":!0}),Le(l)!=="svelte-1eshi8q"&&(l.textContent=u),h=Q(L),f=w(L,"INPUT",{type:!0,step:!0}),L.forEach(I),A.forEach(I),_=Q(P),m=w(P,"DIV",{class:!0});var k=ne(m);g=w(k,"LABEL",{"data-svelte-h":!0}),Le(g)!=="svelte-olodes"&&(g.textContent=p),d=Q(k),b=w(k,"INPUT",{type:!0,step:!0}),k.forEach(I),this.h()},h(){z(a,"type","number"),z(a,"step","0.001"),z(t,"class","form-group"),z(f,"type","number"),z(f,"step","0.001"),z(c,"class","form-group"),z(e,"class","form-row"),z(b,"type","number"),z(b,"step","0.001"),z(m,"class","form-group")},m(P,A){Re(P,e,A),v(e,t),v(t,n),v(t,s),v(t,a),He(a,i[1]),v(e,o),v(e,c),v(c,l),v(c,h),v(c,f),He(f,i[2]),Re(P,_,A),Re(P,m,A),v(m,g),v(m,d),v(m,b),He(b,i[3]),M||(R=[ze(a,"input",i[25]),ze(f,"input",i[26]),ze(b,"input",i[27])],M=!0)},p(P,A){A[0]&2&&ot(a.value)!==P[1]&&He(a,P[1]),A[0]&4&&ot(f.value)!==P[2]&&He(f,P[2]),A[0]&8&&ot(b.value)!==P[3]&&He(b,P[3])},d(P){P&&(I(e),I(_),I(m)),M=!1,Lt(R)}}}function Hl(i){let e,t,n,r="图层控制",s,a,o,c,l,u="切面",h,f,_,m,g,p,d,b,M,R,P,A="体积估算",y,L,k,x,T="选择地层",$,te,N,K,X,re,D,O,Y,j=_t(i[16].lithologies||[]),J=[];for(let W=0;W<j.length;W+=1)J[W]=Gl(kl(i,j,W));let ae=i[18].enabled&&Wl(i),q=_t(i[16].lithologies||[]),G=[];for(let W=0;W<q.length;W+=1)G[W]=Xl(zl(i,q,W));let he=i[12]&&ql(i),ie=i[11].length>0&&jl(i);return{c(){e=C("hr"),t=ee(),n=C("h4"),n.textContent=r,s=ee();for(let W=0;W<J.length;W+=1)J[W].c();a=ee(),o=C("hr"),c=ee(),l=C("h4"),l.textContent=u,h=ee(),f=C("div"),_=C("label"),m=C("input"),p=Be(`
                启用切面`),d=ee(),ae&&ae.c(),b=ee(),M=C("hr"),R=ee(),P=C("h4"),P.textContent=A,y=ee(),L=C("div"),k=C("select"),x=C("option"),x.textContent=T;for(let W=0;W<G.length;W+=1)G[W].c();$=ee(),te=C("button"),N=Be("计算体积"),X=ee(),he&&he.c(),re=ee(),ie&&ie.c(),D=Rn(),this.h()},l(W){e=w(W,"HR",{style:!0}),t=Q(W),n=w(W,"H4",{style:!0,"data-svelte-h":!0}),Le(n)!=="svelte-10xewq4"&&(n.textContent=r),s=Q(W);for(let fe=0;fe<J.length;fe+=1)J[fe].l(W);a=Q(W),o=w(W,"HR",{style:!0}),c=Q(W),l=w(W,"H4",{style:!0,"data-svelte-h":!0}),Le(l)!=="svelte-vflg5w"&&(l.textContent=u),h=Q(W),f=w(W,"DIV",{class:!0});var se=ne(f);_=w(se,"LABEL",{class:!0});var Z=ne(_);m=w(Z,"INPUT",{type:!0}),p=Fe(Z,`
                启用切面`),Z.forEach(I),se.forEach(I),d=Q(W),ae&&ae.l(W),b=Q(W),M=w(W,"HR",{style:!0}),R=Q(W),P=w(W,"H4",{style:!0,"data-svelte-h":!0}),Le(P)!=="svelte-5dpzi"&&(P.textContent=A),y=Q(W),L=w(W,"DIV",{class:!0});var pe=ne(L);k=w(pe,"SELECT",{});var V=ne(k);x=w(V,"OPTION",{"data-svelte-h":!0}),Le(x)!=="svelte-e12hhe"&&(x.textContent=T);for(let fe=0;fe<G.length;fe+=1)G[fe].l(V);V.forEach(I),pe.forEach(I),$=Q(W),te=w(W,"BUTTON",{class:!0,style:!0});var Ce=ne(te);N=Fe(Ce,"计算体积"),Ce.forEach(I),X=Q(W),he&&he.l(W),re=Q(W),ie&&ie.l(W),D=Rn(),this.h()},h(){we(e,"border-color","var(--border)"),we(e,"margin","12px 0"),we(n,"font-size","13px"),we(n,"margin-bottom","8px"),we(o,"border-color","var(--border)"),we(o,"margin","12px 0"),we(l,"font-size","13px"),we(l,"margin-bottom","8px"),z(m,"type","checkbox"),m.checked=g=i[18].enabled,z(_,"class","checkbox-label"),z(f,"class","form-group"),we(M,"border-color","var(--border)"),we(M,"margin","12px 0"),we(P,"font-size","13px"),we(P,"margin-bottom","8px"),x.__value="",He(x,x.__value),i[10]===void 0&&ai(()=>i[38].call(k)),z(L,"class","form-group"),z(te,"class","btn-primary btn-sm"),te.disabled=K=!i[10],we(te,"width","100%")},m(W,se){Re(W,e,se),Re(W,t,se),Re(W,n,se),Re(W,s,se);for(let Z=0;Z<J.length;Z+=1)J[Z]&&J[Z].m(W,se);Re(W,a,se),Re(W,o,se),Re(W,c,se),Re(W,l,se),Re(W,h,se),Re(W,f,se),v(f,_),v(_,m),v(_,p),Re(W,d,se),ae&&ae.m(W,se),Re(W,b,se),Re(W,M,se),Re(W,R,se),Re(W,P,se),Re(W,y,se),Re(W,L,se),v(L,k),v(k,x);for(let Z=0;Z<G.length;Z+=1)G[Z]&&G[Z].m(k,null);Ft(k,i[10],!0),Re(W,$,se),Re(W,te,se),v(te,N),Re(W,X,se),he&&he.m(W,se),Re(W,re,se),ie&&ie.m(W,se),Re(W,D,se),O||(Y=[ze(m,"change",i[36]),ze(k,"change",i[38]),ze(te,"click",i[21])],O=!0)},p(W,se){if(se[0]&245760){j=_t(W[16].lithologies||[]);let Z;for(Z=0;Z<j.length;Z+=1){const pe=kl(W,j,Z);J[Z]?J[Z].p(pe,se):(J[Z]=Gl(pe),J[Z].c(),J[Z].m(a.parentNode,a))}for(;Z<J.length;Z+=1)J[Z].d(1);J.length=j.length}if(se[0]&262144&&g!==(g=W[18].enabled)&&(m.checked=g),W[18].enabled?ae?ae.p(W,se):(ae=Wl(W),ae.c(),ae.m(b.parentNode,b)):ae&&(ae.d(1),ae=null),se[0]&65536){q=_t(W[16].lithologies||[]);let Z;for(Z=0;Z<q.length;Z+=1){const pe=zl(W,q,Z);G[Z]?G[Z].p(pe,se):(G[Z]=Xl(pe),G[Z].c(),G[Z].m(k,null))}for(;Z<G.length;Z+=1)G[Z].d(1);G.length=q.length}se[0]&66560&&Ft(k,W[10]),se[0]&66560&&K!==(K=!W[10])&&(te.disabled=K),W[12]?he?he.p(W,se):(he=ql(W),he.c(),he.m(re.parentNode,re)):he&&(he.d(1),he=null),W[11].length>0?ie?ie.p(W,se):(ie=jl(W),ie.c(),ie.m(D.parentNode,D)):ie&&(ie.d(1),ie=null)},d(W){W&&(I(e),I(t),I(n),I(s),I(a),I(o),I(c),I(l),I(h),I(f),I(d),I(b),I(M),I(R),I(P),I(y),I(L),I($),I(te),I(X),I(re),I(D)),Vt(J,W),ae&&ae.d(W),Vt(G,W),he&&he.d(W),ie&&ie.d(W),O=!1,Lt(Y)}}}function Gl(i){let e,t,n,r,s,a,o,c=i[49]+"",l,u,h,f,_="透明度",m,g,p,d,b;function M(){return i[33](i[49])}function R(...A){return i[34](i[49],...A)}function P(...A){return i[35](i[49],...A)}return{c(){e=C("div"),t=C("label"),n=C("input"),s=ee(),a=C("span"),o=ee(),l=Be(c),u=ee(),h=C("div"),f=C("span"),f.textContent=_,m=ee(),g=C("input"),this.h()},l(A){e=w(A,"DIV",{class:!0});var y=ne(e);t=w(y,"LABEL",{class:!0});var L=ne(t);n=w(L,"INPUT",{type:!0}),s=Q(L),a=w(L,"SPAN",{class:!0,style:!0}),ne(a).forEach(I),o=Q(L),l=Fe(L,c),L.forEach(I),u=Q(y),h=w(y,"DIV",{class:!0});var k=ne(h);f=w(k,"SPAN",{style:!0,"data-svelte-h":!0}),Le(f)!=="svelte-11ptxvf"&&(f.textContent=_),m=Q(k),g=w(k,"INPUT",{type:!0,min:!0,max:!0,class:!0}),k.forEach(I),y.forEach(I),this.h()},h(){var A,y;z(n,"type","checkbox"),n.checked=r=i[15][i[49]]!==!1,z(a,"class","color-swatch"),we(a,"background",((y=(A=i[17])==null?void 0:A.find(R))==null?void 0:y.color)||"#888"),z(t,"class","checkbox-label"),we(f,"font-size","10px"),we(f,"color","var(--text-muted)"),z(g,"type","range"),g.value=p=i[14][i[49]]??70,z(g,"min","0"),z(g,"max","100"),z(g,"class","svelte-ajbu0x"),z(h,"class","opacity-control svelte-ajbu0x"),z(e,"class","layer-control svelte-ajbu0x")},m(A,y){Re(A,e,y),v(e,t),v(t,n),v(t,s),v(t,a),v(t,o),v(t,l),v(e,u),v(e,h),v(h,f),v(h,m),v(h,g),d||(b=[ze(n,"change",M),ze(g,"input",P)],d=!0)},p(A,y){var L,k;i=A,y[0]&98304&&r!==(r=i[15][i[49]]!==!1)&&(n.checked=r),y[0]&196608&&we(a,"background",((k=(L=i[17])==null?void 0:L.find(R))==null?void 0:k.color)||"#888"),y[0]&65536&&c!==(c=i[49]+"")&&Qe(l,c),y[0]&81920&&p!==(p=i[14][i[49]]??70)&&(g.value=p)},d(A){A&&I(e),d=!1,Lt(b)}}}function Wl(i){let e,t,n="切面位置",r,s,a,o,c;return{c(){e=C("div"),t=C("label"),t.textContent=n,r=ee(),s=C("input"),this.h()},l(l){e=w(l,"DIV",{class:!0});var u=ne(e);t=w(u,"LABEL",{"data-svelte-h":!0}),Le(t)!=="svelte-1ya7iue"&&(t.textContent=n),r=Q(u),s=w(u,"INPUT",{type:!0,min:!0,max:!0}),u.forEach(I),this.h()},h(){z(s,"type","range"),s.value=a=i[18].position[0],z(s,"min","-100"),z(s,"max","100"),z(e,"class","form-group")},m(l,u){Re(l,e,u),v(e,t),v(e,r),v(e,s),o||(c=ze(s,"input",i[37]),o=!0)},p(l,u){u[0]&262144&&a!==(a=l[18].position[0])&&(s.value=a)},d(l){l&&I(e),o=!1,c()}}}function Xl(i){let e,t=i[46]+"",n,r;return{c(){e=C("option"),n=Be(t),this.h()},l(s){e=w(s,"OPTION",{});var a=ne(e);n=Fe(a,t),a.forEach(I),this.h()},h(){e.__value=r=i[46],He(e,e.__value)},m(s,a){Re(s,e,a),v(e,n)},p(s,a){a[0]&65536&&t!==(t=s[46]+"")&&Qe(n,t),a[0]&65536&&r!==(r=s[46])&&(e.__value=r,He(e,e.__value))},d(s){s&&I(e)}}}function ql(i){let e,t,n=i[12].lithology_name+"",r,s,a,o=i[12].volume.toFixed(1)+"",c,l;return{c(){e=C("div"),t=C("p"),r=Be(n),s=ee(),a=C("p"),c=Be(o),l=Be(" m³"),this.h()},l(u){e=w(u,"DIV",{class:!0});var h=ne(e);t=w(h,"P",{});var f=ne(t);r=Fe(f,n),f.forEach(I),s=Q(h),a=w(h,"P",{class:!0});var _=ne(a);c=Fe(_,o),l=Fe(_," m³"),_.forEach(I),h.forEach(I),this.h()},h(){z(a,"class","volume-value svelte-ajbu0x"),z(e,"class","volume-result svelte-ajbu0x")},m(u,h){Re(u,e,h),v(e,t),v(t,r),v(e,s),v(e,a),v(a,c),v(a,l)},p(u,h){h[0]&4096&&n!==(n=u[12].lithology_name+"")&&Qe(r,n),h[0]&4096&&o!==(o=u[12].volume.toFixed(1)+"")&&Qe(c,o)},d(u){u&&I(e)}}}function jl(i){let e,t,n,r="历史建模",s,a,o=_t(i[11].slice(0,5)),c=[];for(let l=0;l<o.length;l+=1)c[l]=Yl(Bl(i,o,l));return{c(){e=C("hr"),t=ee(),n=C("h4"),n.textContent=r,s=ee();for(let l=0;l<c.length;l+=1)c[l].c();a=Rn(),this.h()},l(l){e=w(l,"HR",{style:!0}),t=Q(l),n=w(l,"H4",{style:!0,"data-svelte-h":!0}),Le(n)!=="svelte-1xvbgi4"&&(n.textContent=r),s=Q(l);for(let u=0;u<c.length;u+=1)c[u].l(l);a=Rn(),this.h()},h(){we(e,"border-color","var(--border)"),we(e,"margin","12px 0"),we(n,"font-size","13px"),we(n,"margin-bottom","8px")},m(l,u){Re(l,e,u),Re(l,t,u),Re(l,n,u),Re(l,s,u);for(let h=0;h<c.length;h+=1)c[h]&&c[h].m(l,u);Re(l,a,u)},p(l,u){if(u[0]&1050624){o=_t(l[11].slice(0,5));let h;for(h=0;h<o.length;h+=1){const f=Bl(l,o,h);c[h]?c[h].p(f,u):(c[h]=Yl(f),c[h].c(),c[h].m(a.parentNode,a))}for(;h<c.length;h+=1)c[h].d(1);c.length=o.length}},d(l){l&&(I(e),I(t),I(n),I(s),I(a)),Vt(c,l)}}}function Yl(i){let e,t,n=i[43].status+"",r,s,a,o,c=i[43].variogram_model+"",l,u,h=i[43].grid_nx+"",f,_,m=i[43].grid_ny+"",g,p,d=i[43].grid_nz+"",b,M,R,P;function A(){return i[39](i[43])}return{c(){e=C("div"),t=C("span"),r=Be(n),a=ee(),o=C("span"),l=Be(c),u=ee(),f=Be(h),_=Be("x"),g=Be(m),p=Be("x"),b=Be(d),M=ee(),this.h()},l(y){e=w(y,"DIV",{class:!0});var L=ne(e);t=w(L,"SPAN",{class:!0});var k=ne(t);r=Fe(k,n),k.forEach(I),a=Q(L),o=w(L,"SPAN",{style:!0});var x=ne(o);l=Fe(x,c),u=Q(x),f=Fe(x,h),_=Fe(x,"x"),g=Fe(x,m),p=Fe(x,"x"),b=Fe(x,d),x.forEach(I),M=Q(L),L.forEach(I),this.h()},h(){z(t,"class",s="badge badge-"+(i[43].status==="completed"?"success":i[43].status==="failed"?"danger":"warning")),we(o,"font-size","11px"),z(e,"class","run-item svelte-ajbu0x")},m(y,L){Re(y,e,L),v(e,t),v(t,r),v(e,a),v(e,o),v(o,l),v(o,u),v(o,f),v(o,_),v(o,g),v(o,p),v(o,b),v(e,M),R||(P=ze(e,"click",A),R=!0)},p(y,L){i=y,L[0]&2048&&n!==(n=i[43].status+"")&&Qe(r,n),L[0]&2048&&s!==(s="badge badge-"+(i[43].status==="completed"?"success":i[43].status==="failed"?"danger":"warning"))&&z(t,"class",s),L[0]&2048&&c!==(c=i[43].variogram_model+"")&&Qe(l,c),L[0]&2048&&h!==(h=i[43].grid_nx+"")&&Qe(f,h),L[0]&2048&&m!==(m=i[43].grid_ny+"")&&Qe(g,m),L[0]&2048&&d!==(d=i[43].grid_nz+"")&&Qe(b,d)},d(y){y&&I(e),R=!1,P()}}}function z_(i){let e,t,n="三维建模",r,s,a="刷新",o,c,l,u,h;function f(p,d){return p[13].status==="running"?B_:F_}let _=f(i),m=_(i),g=i[16]&&Hl(i);return{c(){e=C("div"),t=C("h3"),t.textContent=n,r=ee(),s=C("button"),s.textContent=a,o=ee(),c=C("div"),m.c(),l=ee(),g&&g.c(),this.h()},l(p){e=w(p,"DIV",{class:!0});var d=ne(e);t=w(d,"H3",{"data-svelte-h":!0}),Le(t)!=="svelte-1tzs814"&&(t.textContent=n),r=Q(d),s=w(d,"BUTTON",{class:!0,"data-svelte-h":!0}),Le(s)!=="svelte-z4d5z9"&&(s.textContent=a),d.forEach(I),o=Q(p),c=w(p,"DIV",{class:!0});var b=ne(c);m.l(b),l=Q(b),g&&g.l(b),b.forEach(I),this.h()},h(){z(s,"class","btn-secondary btn-sm"),z(e,"class","panel-header"),z(c,"class","panel-body scrollable")},m(p,d){Re(p,e,d),v(e,t),v(e,r),v(e,s),Re(p,o,d),Re(p,c,d),m.m(c,null),v(c,l),g&&g.m(c,null),u||(h=ze(s,"click",i[22]),u=!0)},p(p,d){_===(_=f(p))&&m?m.p(p,d):(m.d(1),m=_(p),m&&(m.c(),m.m(c,l))),p[16]?g?g.p(p,d):(g=Hl(p),g.c(),g.m(c,null)):g&&(g.d(1),g=null)},i:bt,o:bt,d(p){p&&(I(e),I(o),I(c)),m.d(),g&&g.d(),u=!1,h()}}}function k_(i,e,t){let n,r,s,a,o,c,l,u,h;nt(i,Si,Z=>t(40,n=Z)),nt(i,Mr,Z=>t(11,r=Z)),nt(i,ya,Z=>t(12,s=Z)),nt(i,fr,Z=>t(13,a=Z)),nt(i,ji,Z=>t(14,o=Z)),nt(i,qi,Z=>t(15,c=Z)),nt(i,Jr,Z=>t(16,l=Z)),nt(i,jn,Z=>t(17,u=Z)),nt(i,Yi,Z=>t(18,h=Z));let f="spherical",_="",m="",g="",p=0,d=1,b=50,M=50,R=25,P=!0,A="";async function y(){if(!n){Ze("请先选择项目","warning");return}try{const Z={variogram_model:f,range_param:P?null:_?parseFloat(_):null,sill_param:P?null:m?parseFloat(m):null,nugget_param:P?null:g?parseFloat(g):null,aniso_angle:p,aniso_ratio:d,grid_nx:b,grid_ny:M,grid_nz:R},pe=await vt.post(`/projects/${n.id}/modeling/run`,Z);mt(fr,a={status:"running",progress:0,runId:pe.id},a),Ze("建模任务已启动","info"),L(pe.id)}catch(Z){Ze(`启动建模失败: ${Z.message}`,"error")}}function L(Z){const pe=location.protocol==="https:"?"wss:":"ws:",V=new WebSocket(`${pe}//${location.host}/api/ws/${n.id}?run_id=${Z}`);V.onmessage=Ce=>{const fe=JSON.parse(Ce.data);mt(fr,a={status:fe.status,progress:fe.progress,runId:fe.run_id},a),fe.status==="completed"?(Ze("三维建模完成!","success"),x(Z)):fe.status==="failed"&&Ze("三维建模失败","error")},V.onerror=()=>{k(Z)},V.onclose=()=>{a.status==="running"&&k(Z)}}async function k(Z){const pe=async()=>{if(a.status==="running")try{const V=await vt.get(`/projects/modeling/runs/${Z}`);mt(fr,a={status:V.status,progress:V.progress,runId:V.id},a),V.status==="completed"?(Ze("三维建模完成!","success"),await x(Z)):V.status==="failed"?Ze("三维建模失败","error"):setTimeout(pe,2e3)}catch{setTimeout(pe,3e3)}};setTimeout(pe,1e3)}async function x(Z){var pe;try{const V=await vt.get(`/projects/modeling/runs/${Z}/result`);mt(Jr,l=V,l),(pe=V.lithologies)==null||pe.forEach(Ce=>{c[Ce]===void 0&&mt(qi,c[Ce]=!0,c),o[Ce]===void 0&&mt(ji,o[Ce]=.7,o)}),mt(fr,a={status:"completed",progress:100,runId:Z},a)}catch(V){Ze(`加载模型结果失败: ${V.message}`,"error")}}async function T(){if(!(!a.runId||!A))try{const Z=await vt.post(`/projects/modeling/runs/${a.runId}/volume?lithology_name=${encodeURIComponent(A)}`);mt(ya,s=Z,s),Ze(`${Z.lithology_name} 体积: ${Z.volume.toFixed(1)} m³`,"success")}catch(Z){Ze(`体积计算失败: ${Z.message}`,"error")}}async function $(){n&&mt(Mr,r=await vt.get(`/projects/${n.id}/modeling/runs`),r)}function te(){f=ni(this),t(0,f)}function N(){P=this.checked,t(9,P)}function K(){_=ot(this.value),t(1,_)}function X(){m=ot(this.value),t(2,m)}function re(){g=ot(this.value),t(3,g)}function D(){p=ot(this.value),t(4,p)}function O(){d=ot(this.value),t(5,d)}function Y(){b=ot(this.value),t(6,b)}function j(){M=ot(this.value),t(7,M)}function J(){R=ot(this.value),t(8,R)}const ae=Z=>{mt(qi,c[Z]=c[Z]===!1,c),qi.set(c)},q=(Z,pe)=>pe.name===Z,G=(Z,pe)=>{mt(ji,o[Z]=pe.target.value/100,o),ji.set(o)},he=()=>mt(Yi,h.enabled=!h.enabled,h),ie=Z=>{mt(Yi,h.position=[parseFloat(Z.target.value),0,0],h),Yi.set(h)};function W(){A=ni(this),t(10,A)}return[f,_,m,g,p,d,b,M,R,P,A,r,s,a,o,c,l,u,h,y,x,T,$,te,N,K,X,re,D,O,Y,j,J,ae,q,G,he,ie,W,Z=>Z.status==="completed"&&x(Z.id)]}class V_ extends bn{constructor(e){super(),yn(this,e,k_,z_,Sn,{},null,[-1,-1])}}function Kl(i){var Ne,Ve,qe;let e,t,n,r,s=i[11][i[4]]+"",a,o,c,l,u,h="最小值",f,_,m=((Ne=i[10].value_min)==null?void 0:Ne.toFixed(2))+"",g,p,d,b,M="最大值",R,P,A=((Ve=i[10].value_max)==null?void 0:Ve.toFixed(2))+"",y,L,k,x,T="均值",$,te,N=((qe=i[10].value_mean)==null?void 0:qe.toFixed(2))+"",K,X,re,D="渲染设置",O,Y,j,J="渲染模式",ae,q,G,he="彩色体素",ie,W="等值面",se,Z,pe,V,Ce="颜色映射范围",fe,Te,le,Pe,oe,S,E,F,ue,ce,ge,Me=i[1].toFixed(1)+"",Ee,be,Ie,Xe=((i[1]+i[2])/2).toFixed(1)+"",Ae,We,Ye,ke=i[2].toFixed(1)+"",je,Oe,$e,H=i[3]==="isosurface"&&Zl(i);return{c(){e=C("hr"),t=ee(),n=C("h4"),r=Be("属性: "),a=Be(s),o=ee(),c=C("div"),l=C("div"),u=C("span"),u.textContent=h,f=ee(),_=C("span"),g=Be(m),p=ee(),d=C("div"),b=C("span"),b.textContent=M,R=ee(),P=C("span"),y=Be(A),L=ee(),k=C("div"),x=C("span"),x.textContent=T,$=ee(),te=C("span"),K=Be(N),X=ee(),re=C("h4"),re.textContent=D,O=ee(),Y=C("div"),j=C("label"),j.textContent=J,ae=ee(),q=C("select"),G=C("option"),G.textContent=he,ie=C("option"),ie.textContent=W,se=ee(),H&&H.c(),Z=ee(),pe=C("div"),V=C("label"),V.textContent=Ce,fe=ee(),Te=C("div"),le=C("input"),Pe=ee(),oe=C("input"),S=ee(),E=C("div"),F=C("div"),ue=ee(),ce=C("div"),ge=C("span"),Ee=Be(Me),be=ee(),Ie=C("span"),Ae=Be(Xe),We=ee(),Ye=C("span"),je=Be(ke),this.h()},l(U){e=w(U,"HR",{style:!0}),t=Q(U),n=w(U,"H4",{style:!0});var ve=ne(n);r=Fe(ve,"属性: "),a=Fe(ve,s),ve.forEach(I),o=Q(U),c=w(U,"DIV",{class:!0});var _e=ne(c);l=w(_e,"DIV",{class:!0});var Ue=ne(l);u=w(Ue,"SPAN",{class:!0,"data-svelte-h":!0}),Le(u)!=="svelte-9zqffl"&&(u.textContent=h),f=Q(Ue),_=w(Ue,"SPAN",{class:!0});var De=ne(_);g=Fe(De,m),De.forEach(I),Ue.forEach(I),p=Q(_e),d=w(_e,"DIV",{class:!0});var et=ne(d);b=w(et,"SPAN",{class:!0,"data-svelte-h":!0}),Le(b)!=="svelte-pto1ax"&&(b.textContent=M),R=Q(et),P=w(et,"SPAN",{class:!0});var at=ne(P);y=Fe(at,A),at.forEach(I),et.forEach(I),L=Q(_e),k=w(_e,"DIV",{class:!0});var gt=ne(k);x=w(gt,"SPAN",{class:!0,"data-svelte-h":!0}),Le(x)!=="svelte-os332j"&&(x.textContent=T),$=Q(gt),te=w(gt,"SPAN",{class:!0});var yt=ne(te);K=Fe(yt,N),yt.forEach(I),gt.forEach(I),_e.forEach(I),X=Q(U),re=w(U,"H4",{style:!0,"data-svelte-h":!0}),Le(re)!=="svelte-1ld9l9j"&&(re.textContent=D),O=Q(U),Y=w(U,"DIV",{class:!0});var st=ne(Y);j=w(st,"LABEL",{"data-svelte-h":!0}),Le(j)!=="svelte-cq5b4l"&&(j.textContent=J),ae=Q(st),q=w(st,"SELECT",{});var xt=ne(q);G=w(xt,"OPTION",{"data-svelte-h":!0}),Le(G)!=="svelte-127lpa0"&&(G.textContent=he),ie=w(xt,"OPTION",{"data-svelte-h":!0}),Le(ie)!=="svelte-q3a2m9"&&(ie.textContent=W),xt.forEach(I),st.forEach(I),se=Q(U),H&&H.l(U),Z=Q(U),pe=w(U,"DIV",{class:!0});var St=ne(pe);V=w(St,"LABEL",{"data-svelte-h":!0}),Le(V)!=="svelte-1lqds2v"&&(V.textContent=Ce),fe=Q(St),Te=w(St,"DIV",{class:!0});var cn=ne(Te);le=w(cn,"INPUT",{type:!0,step:!0}),Pe=Q(cn),oe=w(cn,"INPUT",{type:!0,step:!0}),cn.forEach(I),St.forEach(I),S=Q(U),E=w(U,"DIV",{class:!0});var Un=ne(E);F=w(Un,"DIV",{class:!0,style:!0}),ne(F).forEach(I),ue=Q(Un),ce=w(Un,"DIV",{class:!0});var Jt=ne(ce);ge=w(Jt,"SPAN",{});var un=ne(ge);Ee=Fe(un,Me),un.forEach(I),be=Q(Jt),Ie=w(Jt,"SPAN",{});var Tn=ne(Ie);Ae=Fe(Tn,Xe),Tn.forEach(I),We=Q(Jt),Ye=w(Jt,"SPAN",{});var hn=ne(Ye);je=Fe(hn,ke),hn.forEach(I),Jt.forEach(I),Un.forEach(I),this.h()},h(){we(e,"border-color","var(--border)"),we(e,"margin","12px 0"),we(n,"font-size","13px"),we(n,"margin-bottom","8px"),z(u,"class","stat-label svelte-8lfmmm"),z(_,"class","stat-value svelte-8lfmmm"),z(l,"class","stat-item svelte-8lfmmm"),z(b,"class","stat-label svelte-8lfmmm"),z(P,"class","stat-value svelte-8lfmmm"),z(d,"class","stat-item svelte-8lfmmm"),z(x,"class","stat-label svelte-8lfmmm"),z(te,"class","stat-value svelte-8lfmmm"),z(k,"class","stat-item svelte-8lfmmm"),z(c,"class","stats-grid svelte-8lfmmm"),we(re,"font-size","13px"),we(re,"margin","12px 0 8px"),G.__value="voxel",He(G,G.__value),ie.__value="isosurface",He(ie,ie.__value),i[3]===void 0&&ai(()=>i[19].call(q)),z(Y,"class","form-group"),z(le,"type","number"),z(le,"step","0.1"),z(oe,"type","number"),z(oe,"step","0.1"),z(Te,"class","form-row"),z(pe,"class","form-group"),z(F,"class","legend-bar svelte-8lfmmm"),we(F,"background","linear-gradient(to right, #0000ff, #00ff00, #ffff00, #ff0000)"),z(ce,"class","legend-labels svelte-8lfmmm"),z(E,"class","color-legend svelte-8lfmmm")},m(U,ve){Re(U,e,ve),Re(U,t,ve),Re(U,n,ve),v(n,r),v(n,a),Re(U,o,ve),Re(U,c,ve),v(c,l),v(l,u),v(l,f),v(l,_),v(_,g),v(c,p),v(c,d),v(d,b),v(d,R),v(d,P),v(P,y),v(c,L),v(c,k),v(k,x),v(k,$),v(k,te),v(te,K),Re(U,X,ve),Re(U,re,ve),Re(U,O,ve),Re(U,Y,ve),v(Y,j),v(Y,ae),v(Y,q),v(q,G),v(q,ie),Ft(q,i[3],!0),Re(U,se,ve),H&&H.m(U,ve),Re(U,Z,ve),Re(U,pe,ve),v(pe,V),v(pe,fe),v(pe,Te),v(Te,le),He(le,i[1]),v(Te,Pe),v(Te,oe),He(oe,i[2]),Re(U,S,ve),Re(U,E,ve),v(E,F),v(E,ue),v(E,ce),v(ce,ge),v(ge,Ee),v(ce,be),v(ce,Ie),v(Ie,Ae),v(ce,We),v(ce,Ye),v(Ye,je),Oe||($e=[ze(q,"change",i[19]),ze(le,"input",i[21]),ze(oe,"input",i[22])],Oe=!0)},p(U,ve){var _e,Ue,De;ve&16&&s!==(s=U[11][U[4]]+"")&&Qe(a,s),ve&1024&&m!==(m=((_e=U[10].value_min)==null?void 0:_e.toFixed(2))+"")&&Qe(g,m),ve&1024&&A!==(A=((Ue=U[10].value_max)==null?void 0:Ue.toFixed(2))+"")&&Qe(y,A),ve&1024&&N!==(N=((De=U[10].value_mean)==null?void 0:De.toFixed(2))+"")&&Qe(K,N),ve&8&&Ft(q,U[3]),U[3]==="isosurface"?H?H.p(U,ve):(H=Zl(U),H.c(),H.m(Z.parentNode,Z)):H&&(H.d(1),H=null),ve&2&&ot(le.value)!==U[1]&&He(le,U[1]),ve&4&&ot(oe.value)!==U[2]&&He(oe,U[2]),ve&2&&Me!==(Me=U[1].toFixed(1)+"")&&Qe(Ee,Me),ve&6&&Xe!==(Xe=((U[1]+U[2])/2).toFixed(1)+"")&&Qe(Ae,Xe),ve&4&&ke!==(ke=U[2].toFixed(1)+"")&&Qe(je,ke)},d(U){U&&(I(e),I(t),I(n),I(o),I(c),I(X),I(re),I(O),I(Y),I(se),I(Z),I(pe),I(S),I(E)),H&&H.d(U),Oe=!1,Lt($e)}}}function Zl(i){let e,t,n="等值面阈值",r,s,a,o,c=i[0].toFixed(1)+"",l,u,h;return{c(){e=C("div"),t=C("label"),t.textContent=n,r=ee(),s=C("input"),a=ee(),o=C("span"),l=Be(c),this.h()},l(f){e=w(f,"DIV",{class:!0});var _=ne(e);t=w(_,"LABEL",{"data-svelte-h":!0}),Le(t)!=="svelte-hv2zuh"&&(t.textContent=n),r=Q(_),s=w(_,"INPUT",{type:!0,min:!0,max:!0,step:!0}),a=Q(_),o=w(_,"SPAN",{style:!0});var m=ne(o);l=Fe(m,c),m.forEach(I),_.forEach(I),this.h()},h(){z(s,"type","range"),z(s,"min",i[1]),z(s,"max",i[2]),z(s,"step","0.1"),we(o,"font-size","11px"),z(e,"class","form-group")},m(f,_){Re(f,e,_),v(e,t),v(e,r),v(e,s),He(s,i[0]),v(e,a),v(e,o),v(o,l),u||(h=[ze(s,"change",i[20]),ze(s,"input",i[20])],u=!0)},p(f,_){_&2&&z(s,"min",f[1]),_&4&&z(s,"max",f[2]),_&1&&He(s,f[0]),_&1&&c!==(c=f[0].toFixed(1)+"")&&Qe(l,c)},d(f){f&&I(e),u=!1,Lt(h)}}}function H_(i){let e,t="<h3>属性场建模</h3>",n,r,s,a,o="参数类型",c,l,u,h="标贯N值",f,_="含水量",m,g="压缩模量",p,d,b,M="变异函数模型",R,P,A,y="球状模型",L,k="指数模型",x,T="高斯模型",$,te,N,K,X="NX",re,D,O,Y,j,J="NY",ae,q,G,he,ie,W="NZ",se,Z,pe,V,Ce=i[9]?"插值计算中...":"开始插值",fe,Te,le,Pe,oe=i[10]&&Kl(i);return{c(){e=C("div"),e.innerHTML=t,n=ee(),r=C("div"),s=C("div"),a=C("label"),a.textContent=o,c=ee(),l=C("select"),u=C("option"),u.textContent=h,f=C("option"),f.textContent=_,m=C("option"),m.textContent=g,p=ee(),d=C("div"),b=C("label"),b.textContent=M,R=ee(),P=C("select"),A=C("option"),A.textContent=y,L=C("option"),L.textContent=k,x=C("option"),x.textContent=T,$=ee(),te=C("div"),N=C("div"),K=C("label"),K.textContent=X,re=ee(),D=C("input"),O=ee(),Y=C("div"),j=C("label"),j.textContent=J,ae=ee(),q=C("input"),G=ee(),he=C("div"),ie=C("label"),ie.textContent=W,se=ee(),Z=C("input"),pe=ee(),V=C("button"),fe=Be(Ce),Te=ee(),oe&&oe.c(),this.h()},l(S){e=w(S,"DIV",{class:!0,"data-svelte-h":!0}),Le(e)!=="svelte-s1qbq0"&&(e.innerHTML=t),n=Q(S),r=w(S,"DIV",{class:!0});var E=ne(r);s=w(E,"DIV",{class:!0});var F=ne(s);a=w(F,"LABEL",{"data-svelte-h":!0}),Le(a)!=="svelte-vxe5jw"&&(a.textContent=o),c=Q(F),l=w(F,"SELECT",{});var ue=ne(l);u=w(ue,"OPTION",{"data-svelte-h":!0}),Le(u)!=="svelte-1ekkfg"&&(u.textContent=h),f=w(ue,"OPTION",{"data-svelte-h":!0}),Le(f)!=="svelte-vhtqdz"&&(f.textContent=_),m=w(ue,"OPTION",{"data-svelte-h":!0}),Le(m)!=="svelte-1m1gv94"&&(m.textContent=g),ue.forEach(I),F.forEach(I),p=Q(E),d=w(E,"DIV",{class:!0});var ce=ne(d);b=w(ce,"LABEL",{"data-svelte-h":!0}),Le(b)!=="svelte-1jgf9ft"&&(b.textContent=M),R=Q(ce),P=w(ce,"SELECT",{});var ge=ne(P);A=w(ge,"OPTION",{"data-svelte-h":!0}),Le(A)!=="svelte-17ym7v6"&&(A.textContent=y),L=w(ge,"OPTION",{"data-svelte-h":!0}),Le(L)!=="svelte-bzk8zo"&&(L.textContent=k),x=w(ge,"OPTION",{"data-svelte-h":!0}),Le(x)!=="svelte-1iqrdsw"&&(x.textContent=T),ge.forEach(I),ce.forEach(I),$=Q(E),te=w(E,"DIV",{class:!0});var Me=ne(te);N=w(Me,"DIV",{class:!0});var Ee=ne(N);K=w(Ee,"LABEL",{"data-svelte-h":!0}),Le(K)!=="svelte-kuum7m"&&(K.textContent=X),re=Q(Ee),D=w(Ee,"INPUT",{type:!0,min:!0,max:!0}),Ee.forEach(I),O=Q(Me),Y=w(Me,"DIV",{class:!0});var be=ne(Y);j=w(be,"LABEL",{"data-svelte-h":!0}),Le(j)!=="svelte-1kjsuy3"&&(j.textContent=J),ae=Q(be),q=w(be,"INPUT",{type:!0,min:!0,max:!0}),be.forEach(I),G=Q(Me),he=w(Me,"DIV",{class:!0});var Ie=ne(he);ie=w(Ie,"LABEL",{"data-svelte-h":!0}),Le(ie)!=="svelte-1vblzhc"&&(ie.textContent=W),se=Q(Ie),Z=w(Ie,"INPUT",{type:!0,min:!0,max:!0}),Ie.forEach(I),Me.forEach(I),pe=Q(E),V=w(E,"BUTTON",{class:!0,style:!0});var Xe=ne(V);fe=Fe(Xe,Ce),Xe.forEach(I),Te=Q(E),oe&&oe.l(E),E.forEach(I),this.h()},h(){z(e,"class","panel-header"),u.__value="spt_n",He(u,u.__value),f.__value="water_content",He(f,f.__value),m.__value="compression_modulus",He(m,m.__value),i[4]===void 0&&ai(()=>i[14].call(l)),z(s,"class","form-group"),A.__value="spherical",He(A,A.__value),L.__value="exponential",He(L,L.__value),x.__value="gaussian",He(x,x.__value),i[5]===void 0&&ai(()=>i[15].call(P)),z(d,"class","form-group"),z(D,"type","number"),z(D,"min","5"),z(D,"max","100"),z(N,"class","form-group"),z(q,"type","number"),z(q,"min","5"),z(q,"max","100"),z(Y,"class","form-group"),z(Z,"type","number"),z(Z,"min","5"),z(Z,"max","50"),z(he,"class","form-group"),z(te,"class","form-row"),z(V,"class","btn-primary"),V.disabled=i[9],we(V,"width","100%"),z(r,"class","panel-body scrollable")},m(S,E){Re(S,e,E),Re(S,n,E),Re(S,r,E),v(r,s),v(s,a),v(s,c),v(s,l),v(l,u),v(l,f),v(l,m),Ft(l,i[4],!0),v(r,p),v(r,d),v(d,b),v(d,R),v(d,P),v(P,A),v(P,L),v(P,x),Ft(P,i[5],!0),v(r,$),v(r,te),v(te,N),v(N,K),v(N,re),v(N,D),He(D,i[6]),v(te,O),v(te,Y),v(Y,j),v(Y,ae),v(Y,q),He(q,i[7]),v(te,G),v(te,he),v(he,ie),v(he,se),v(he,Z),He(Z,i[8]),v(r,pe),v(r,V),v(V,fe),v(r,Te),oe&&oe.m(r,null),le||(Pe=[ze(l,"change",i[14]),ze(P,"change",i[15]),ze(D,"input",i[16]),ze(q,"input",i[17]),ze(Z,"input",i[18]),ze(V,"click",i[12])],le=!0)},p(S,[E]){E&16&&Ft(l,S[4]),E&32&&Ft(P,S[5]),E&64&&ot(D.value)!==S[6]&&He(D,S[6]),E&128&&ot(q.value)!==S[7]&&He(q,S[7]),E&256&&ot(Z.value)!==S[8]&&He(Z,S[8]),E&512&&Ce!==(Ce=S[9]?"插值计算中...":"开始插值")&&Qe(fe,Ce),E&512&&(V.disabled=S[9]),S[10]?oe?oe.p(S,E):(oe=Kl(S),oe.c(),oe.m(r,null)):oe&&(oe.d(1),oe=null)},i:bt,o:bt,d(S){S&&(I(e),I(n),I(r)),oe&&oe.d(),le=!1,Lt(Pe)}}}function G_(i,e,t){let n,r,s;nt(i,Qr,T=>t(10,n=T)),nt(i,Si,T=>t(23,r=T)),nt(i,es,T=>t(13,s=T));let a="spt_n",o="spherical",c=50,l=50,u=25,h=0,f=0,_=100,m="voxel",g=!1;const p={spt_n:"标贯N值",water_content:"含水量",compression_modulus:"压缩模量"};async function d(){if(!r){Ze("请先选择项目","warning");return}t(9,g=!0);try{const T=await vt.post(`/projects/${r.id}/attributes/interpolate?attribute=${a}&grid_nx=${c}&grid_ny=${l}&grid_nz=${u}&variogram_model=${o}`);mt(Qr,n=T,n),T.value_min!==void 0&&(t(1,f=T.value_min),t(2,_=T.value_max),t(0,h=(T.value_min+T.value_max)/2)),Ze(`属性场插值完成: ${p[a]}`,"success")}catch(T){Ze(`插值失败: ${T.message}`,"error")}finally{t(9,g=!1)}}function b(){a=ni(this),t(4,a)}function M(){o=ni(this),t(5,o)}function R(){c=ot(this.value),t(6,c)}function P(){l=ot(this.value),t(7,l)}function A(){u=ot(this.value),t(8,u)}function y(){m=ni(this),t(3,m)}function L(){h=ot(this.value),t(0,h)}function k(){f=ot(this.value),t(1,f)}function x(){_=ot(this.value),t(2,_)}return i.$$.update=()=>{i.$$.dirty&8207&&mt(es,s={...s,mode:m,isosurfaceValue:h,colorMin:f,colorMax:_},s)},[h,f,_,m,a,o,c,l,u,g,n,p,d,s,b,M,R,P,A,y,L,k,x]}class W_ extends bn{constructor(e){super(),yn(this,e,G_,H_,Sn,{})}}function $l(i,e,t){const n=i.slice();return n[12]=e[t],n}function Jl(i,e,t){const n=i.slice();return n[15]=e[t],n}function Ql(i){let e,t=i[15].variogram_model+"",n,r,s=i[15].grid_nx+"",a,o,c=i[15].grid_ny+"",l,u,h=i[15].grid_nz+"",f,_,m=i[15].status+"",g,p,d;return{c(){e=C("option"),n=Be(t),r=ee(),a=Be(s),o=Be("x"),l=Be(c),u=Be("x"),f=Be(h),_=Be(" ("),g=Be(m),p=Be(")"),this.h()},l(b){e=w(b,"OPTION",{});var M=ne(e);n=Fe(M,t),r=Q(M),a=Fe(M,s),o=Fe(M,"x"),l=Fe(M,c),u=Fe(M,"x"),f=Fe(M,h),_=Fe(M," ("),g=Fe(M,m),p=Fe(M,")"),M.forEach(I),this.h()},h(){e.__value=d=i[15].id,He(e,e.__value)},m(b,M){Re(b,e,M),v(e,n),v(e,r),v(e,a),v(e,o),v(e,l),v(e,u),v(e,f),v(e,_),v(e,g),v(e,p)},p(b,M){M&8&&t!==(t=b[15].variogram_model+"")&&Qe(n,t),M&8&&s!==(s=b[15].grid_nx+"")&&Qe(a,s),M&8&&c!==(c=b[15].grid_ny+"")&&Qe(l,c),M&8&&h!==(h=b[15].grid_nz+"")&&Qe(f,h),M&8&&m!==(m=b[15].status+"")&&Qe(g,m),M&8&&d!==(d=b[15].id)&&(e.__value=d,He(e,e.__value))},d(b){b&&I(e)}}}function ec(i){let e,t=i[12].name+"",n,r;return{c(){e=C("option"),n=Be(t),this.h()},l(s){e=w(s,"OPTION",{});var a=ne(e);n=Fe(a,t),a.forEach(I),this.h()},h(){e.__value=r=i[12].id,He(e,e.__value)},m(s,a){Re(s,e,a),v(e,n)},p(s,a){a&16&&t!==(t=s[12].name+"")&&Qe(n,t),a&16&&r!==(r=s[12].id)&&(e.__value=r,He(e,e.__value))},d(s){s&&I(e)}}}function X_(i){let e,t="<h3>成果导出</h3>",n,r,s,a,o="三维模型",c,l,u,h="选择建模结果",f,_,m,g="选择建模结果",p,d,b,M,R,P,A,y="glTF格式可在Blender、ParaView等软件中打开",L,k,x,T,$,te="剖面图",N,K,X,re="选择剖面",D,O,Y,j="选择剖面",J,ae,q,G,he,ie,W,se,Z,pe,V,Ce,fe,Te,le="数据统计",Pe,oe,S,E,F,ue,ce="包含各层厚度统计、面积、体积等",ge,Me,Ee,be,Ie,Xe="建模报告",Ae,We,Ye,ke,je,Oe,$e="包含半变异函数拟合结果、插值参数、剖面图缩略",H,Ne,Ve=_t(i[3].filter(tc)),qe=[];for(let _e=0;_e<Ve.length;_e+=1)qe[_e]=Ql(Jl(i,Ve,_e));let U=_t(i[4]),ve=[];for(let _e=0;_e<U.length;_e+=1)ve[_e]=ec($l(i,U,_e));return{c(){e=C("div"),e.innerHTML=t,n=ee(),r=C("div"),s=C("div"),a=C("h4"),a.textContent=o,c=ee(),l=C("div"),u=C("label"),u.textContent=h,f=ee(),_=C("select"),m=C("option"),m.textContent=g;for(let _e=0;_e<qe.length;_e+=1)qe[_e].c();p=ee(),d=C("div"),b=C("button"),M=Be("导出 glTF 模型"),P=ee(),A=C("p"),A.textContent=y,L=ee(),k=C("hr"),x=ee(),T=C("div"),$=C("h4"),$.textContent=te,N=ee(),K=C("div"),X=C("label"),X.textContent=re,D=ee(),O=C("select"),Y=C("option"),Y.textContent=j;for(let _e=0;_e<ve.length;_e+=1)ve[_e].c();J=ee(),ae=C("div"),q=C("button"),G=Be("导出 PNG"),ie=ee(),W=C("button"),se=Be("导出 SVG"),pe=ee(),V=C("hr"),Ce=ee(),fe=C("div"),Te=C("h4"),Te.textContent=le,Pe=ee(),oe=C("button"),S=Be("导出地层数据统计表 (Excel)"),F=ee(),ue=C("p"),ue.textContent=ce,ge=ee(),Me=C("hr"),Ee=ee(),be=C("div"),Ie=C("h4"),Ie.textContent=Xe,Ae=ee(),We=C("button"),Ye=Be("导出建模参数报告 (PDF)"),je=ee(),Oe=C("p"),Oe.textContent=$e,this.h()},l(_e){e=w(_e,"DIV",{class:!0,"data-svelte-h":!0}),Le(e)!=="svelte-16wx9di"&&(e.innerHTML=t),n=Q(_e),r=w(_e,"DIV",{class:!0});var Ue=ne(r);s=w(Ue,"DIV",{class:!0});var De=ne(s);a=w(De,"H4",{style:!0,"data-svelte-h":!0}),Le(a)!=="svelte-f1tw8s"&&(a.textContent=o),c=Q(De),l=w(De,"DIV",{class:!0});var et=ne(l);u=w(et,"LABEL",{"data-svelte-h":!0}),Le(u)!=="svelte-rq7xu0"&&(u.textContent=h),f=Q(et),_=w(et,"SELECT",{});var at=ne(_);m=w(at,"OPTION",{"data-svelte-h":!0}),Le(m)!=="svelte-ma6l8e"&&(m.textContent=g);for(let Nn=0;Nn<qe.length;Nn+=1)qe[Nn].l(at);at.forEach(I),et.forEach(I),p=Q(De),d=w(De,"DIV",{class:!0});var gt=ne(d);b=w(gt,"BUTTON",{class:!0});var yt=ne(b);M=Fe(yt,"导出 glTF 模型"),yt.forEach(I),gt.forEach(I),P=Q(De),A=w(De,"P",{style:!0,"data-svelte-h":!0}),Le(A)!=="svelte-elxrxh"&&(A.textContent=y),De.forEach(I),L=Q(Ue),k=w(Ue,"HR",{style:!0}),x=Q(Ue),T=w(Ue,"DIV",{class:!0});var st=ne(T);$=w(st,"H4",{style:!0,"data-svelte-h":!0}),Le($)!=="svelte-l0uqjv"&&($.textContent=te),N=Q(st),K=w(st,"DIV",{class:!0});var xt=ne(K);X=w(xt,"LABEL",{"data-svelte-h":!0}),Le(X)!=="svelte-1uj1nrm"&&(X.textContent=re),D=Q(xt),O=w(xt,"SELECT",{});var St=ne(O);Y=w(St,"OPTION",{"data-svelte-h":!0}),Le(Y)!=="svelte-ij5m9g"&&(Y.textContent=j);for(let Nn=0;Nn<ve.length;Nn+=1)ve[Nn].l(St);St.forEach(I),xt.forEach(I),J=Q(st),ae=w(st,"DIV",{class:!0});var cn=ne(ae);q=w(cn,"BUTTON",{class:!0});var Un=ne(q);G=Fe(Un,"导出 PNG"),Un.forEach(I),ie=Q(cn),W=w(cn,"BUTTON",{class:!0});var Jt=ne(W);se=Fe(Jt,"导出 SVG"),Jt.forEach(I),cn.forEach(I),st.forEach(I),pe=Q(Ue),V=w(Ue,"HR",{style:!0}),Ce=Q(Ue),fe=w(Ue,"DIV",{class:!0});var un=ne(fe);Te=w(un,"H4",{style:!0,"data-svelte-h":!0}),Le(Te)!=="svelte-nufmjz"&&(Te.textContent=le),Pe=Q(un),oe=w(un,"BUTTON",{class:!0,style:!0});var Tn=ne(oe);S=Fe(Tn,"导出地层数据统计表 (Excel)"),Tn.forEach(I),F=Q(un),ue=w(un,"P",{style:!0,"data-svelte-h":!0}),Le(ue)!=="svelte-soh8v8"&&(ue.textContent=ce),un.forEach(I),ge=Q(Ue),Me=w(Ue,"HR",{style:!0}),Ee=Q(Ue),be=w(Ue,"DIV",{class:!0});var hn=ne(be);Ie=w(hn,"H4",{style:!0,"data-svelte-h":!0}),Le(Ie)!=="svelte-16vzmgj"&&(Ie.textContent=Xe),Ae=Q(hn),We=w(hn,"BUTTON",{class:!0,style:!0});var ur=ne(We);Ye=Fe(ur,"导出建模参数报告 (PDF)"),ur.forEach(I),je=Q(hn),Oe=w(hn,"P",{style:!0,"data-svelte-h":!0}),Le(Oe)!=="svelte-1mnkg1"&&(Oe.textContent=$e),hn.forEach(I),Ue.forEach(I),this.h()},h(){z(e,"class","panel-header"),we(a,"font-size","13px"),we(a,"margin-bottom","8px"),m.__value="",He(m,m.__value),i[0]===void 0&&ai(()=>i[10].call(_)),z(l,"class","form-group"),z(b,"class","btn-primary svelte-xy1nc2"),b.disabled=R=!i[0],z(d,"class","export-buttons svelte-xy1nc2"),we(A,"font-size","11px"),we(A,"color","var(--text-muted)"),we(A,"margin-top","4px"),z(s,"class","export-section svelte-xy1nc2"),we(k,"border-color","var(--border)"),we(k,"margin","16px 0"),we($,"font-size","13px"),we($,"margin-bottom","8px"),Y.__value="",He(Y,Y.__value),i[1]===void 0&&ai(()=>i[11].call(O)),z(K,"class","form-group"),z(q,"class","btn-secondary svelte-xy1nc2"),q.disabled=he=!i[1],z(W,"class","btn-secondary svelte-xy1nc2"),W.disabled=Z=!i[1],z(ae,"class","export-buttons svelte-xy1nc2"),z(T,"class","export-section svelte-xy1nc2"),we(V,"border-color","var(--border)"),we(V,"margin","16px 0"),we(Te,"font-size","13px"),we(Te,"margin-bottom","8px"),z(oe,"class","btn-primary"),oe.disabled=E=!i[2],we(oe,"width","100%"),we(ue,"font-size","11px"),we(ue,"color","var(--text-muted)"),we(ue,"margin-top","4px"),z(fe,"class","export-section svelte-xy1nc2"),we(Me,"border-color","var(--border)"),we(Me,"margin","16px 0"),we(Ie,"font-size","13px"),we(Ie,"margin-bottom","8px"),z(We,"class","btn-primary"),We.disabled=ke=!i[0],we(We,"width","100%"),we(Oe,"font-size","11px"),we(Oe,"color","var(--text-muted)"),we(Oe,"margin-top","4px"),z(be,"class","export-section svelte-xy1nc2"),z(r,"class","panel-body scrollable")},m(_e,Ue){Re(_e,e,Ue),Re(_e,n,Ue),Re(_e,r,Ue),v(r,s),v(s,a),v(s,c),v(s,l),v(l,u),v(l,f),v(l,_),v(_,m);for(let De=0;De<qe.length;De+=1)qe[De]&&qe[De].m(_,null);Ft(_,i[0],!0),v(s,p),v(s,d),v(d,b),v(b,M),v(s,P),v(s,A),v(r,L),v(r,k),v(r,x),v(r,T),v(T,$),v(T,N),v(T,K),v(K,X),v(K,D),v(K,O),v(O,Y);for(let De=0;De<ve.length;De+=1)ve[De]&&ve[De].m(O,null);Ft(O,i[1],!0),v(T,J),v(T,ae),v(ae,q),v(q,G),v(ae,ie),v(ae,W),v(W,se),v(r,pe),v(r,V),v(r,Ce),v(r,fe),v(fe,Te),v(fe,Pe),v(fe,oe),v(oe,S),v(fe,F),v(fe,ue),v(r,ge),v(r,Me),v(r,Ee),v(r,be),v(be,Ie),v(be,Ae),v(be,We),v(We,Ye),v(be,je),v(be,Oe),H||(Ne=[ze(_,"change",i[10]),ze(b,"click",i[5]),ze(O,"change",i[11]),ze(q,"click",i[6]),ze(W,"click",i[7]),ze(oe,"click",i[8]),ze(We,"click",i[9])],H=!0)},p(_e,[Ue]){if(Ue&8){Ve=_t(_e[3].filter(tc));let De;for(De=0;De<Ve.length;De+=1){const et=Jl(_e,Ve,De);qe[De]?qe[De].p(et,Ue):(qe[De]=Ql(et),qe[De].c(),qe[De].m(_,null))}for(;De<qe.length;De+=1)qe[De].d(1);qe.length=Ve.length}if(Ue&9&&Ft(_,_e[0]),Ue&9&&R!==(R=!_e[0])&&(b.disabled=R),Ue&16){U=_t(_e[4]);let De;for(De=0;De<U.length;De+=1){const et=$l(_e,U,De);ve[De]?ve[De].p(et,Ue):(ve[De]=ec(et),ve[De].c(),ve[De].m(O,null))}for(;De<ve.length;De+=1)ve[De].d(1);ve.length=U.length}Ue&18&&Ft(O,_e[1]),Ue&18&&he!==(he=!_e[1])&&(q.disabled=he),Ue&18&&Z!==(Z=!_e[1])&&(W.disabled=Z),Ue&4&&E!==(E=!_e[2])&&(oe.disabled=E),Ue&9&&ke!==(ke=!_e[0])&&(We.disabled=ke)},i:bt,o:bt,d(_e){_e&&(I(e),I(n),I(r)),Vt(qe,_e),Vt(ve,_e),H=!1,Lt(Ne)}}}const tc=i=>i.status==="completed";function q_(i,e,t){let n,r,s;nt(i,Si,g=>t(2,n=g)),nt(i,Mr,g=>t(3,r=g)),nt(i,Er,g=>t(4,s=g));let a="",o="";async function c(){if(!a){Ze("请选择建模结果","warning");return}try{const p=await(await vt.exportGltf(a)).blob(),d=URL.createObjectURL(p),b=document.createElement("a");b.href=d,b.download=`model_${a}.glb`,b.click(),URL.revokeObjectURL(d),Ze("glTF模型已导出","success")}catch(g){Ze(`导出glTF失败: ${g.message}`,"error")}}async function l(){if(!o){Ze("请选择剖面","warning");return}try{const p=await(await vt.exportProfilePng(o)).blob(),d=URL.createObjectURL(p),b=document.createElement("a");b.href=d,b.download=`profile_${o}.png`,b.click(),URL.revokeObjectURL(d),Ze("剖面PNG已导出","success")}catch(g){Ze(`导出PNG失败: ${g.message}`,"error")}}async function u(){if(!o){Ze("请选择剖面","warning");return}try{const p=await(await vt.exportProfileSvg(o)).blob(),d=URL.createObjectURL(p),b=document.createElement("a");b.href=d,b.download=`profile_${o}.svg`,b.click(),URL.revokeObjectURL(d),Ze("剖面SVG已导出","success")}catch(g){Ze(`导出SVG失败: ${g.message}`,"error")}}async function h(){if(!n){Ze("请先选择项目","warning");return}try{const p=await(await vt.exportStatsExcel(n.id)).blob(),d=URL.createObjectURL(p),b=document.createElement("a");b.href=d,b.download=`stats_${n.id}.xlsx`,b.click(),URL.revokeObjectURL(d),Ze("统计表已导出","success")}catch(g){Ze(`导出Excel失败: ${g.message}`,"error")}}async function f(){if(!a){Ze("请选择建模结果","warning");return}try{const p=await(await vt.exportReportPdf(a)).blob(),d=URL.createObjectURL(p),b=document.createElement("a");b.href=d,b.download=`report_${a}.pdf`,b.click(),URL.revokeObjectURL(d),Ze("报告已导出","success")}catch(g){Ze(`导出PDF失败: ${g.message}`,"error")}}function _(){a=ni(this),t(0,a)}function m(){o=ni(this),t(1,o)}return[a,o,n,r,s,c,l,u,h,f,_,m]}class j_ extends bn{constructor(e){super(),yn(this,e,q_,X_,Sn,{})}}function nc(i){let e,t,n="已加载",r,s,a="清除",o,c;return{c(){e=C("div"),t=C("span"),t.textContent=n,r=ee(),s=C("button"),s.textContent=a,this.h()},l(l){e=w(l,"DIV",{style:!0});var u=ne(e);t=w(u,"SPAN",{class:!0,"data-svelte-h":!0}),Le(t)!=="svelte-1k217nw"&&(t.textContent=n),r=Q(u),s=w(u,"BUTTON",{class:!0,"data-svelte-h":!0}),Le(s)!=="svelte-xi3j00"&&(s.textContent=a),u.forEach(I),this.h()},h(){z(t,"class","badge badge-success"),z(s,"class","btn-danger btn-sm"),we(e,"display","flex"),we(e,"align-items","center"),we(e,"gap","6px"),we(e,"margin-top","4px")},m(l,u){Re(l,e,u),v(e,t),v(e,r),v(e,s),o||(c=ze(s,"click",i[5]),o=!0)},p:bt,d(l){l&&I(e),o=!1,c()}}}function ic(i){let e,t,n="已加载",r,s,a="清除",o,c;return{c(){e=C("div"),t=C("span"),t.textContent=n,r=ee(),s=C("button"),s.textContent=a,this.h()},l(l){e=w(l,"DIV",{style:!0});var u=ne(e);t=w(u,"SPAN",{class:!0,"data-svelte-h":!0}),Le(t)!=="svelte-1k217nw"&&(t.textContent=n),r=Q(u),s=w(u,"BUTTON",{class:!0,"data-svelte-h":!0}),Le(s)!=="svelte-1i2ssbg"&&(s.textContent=a),u.forEach(I),this.h()},h(){z(t,"class","badge badge-success"),z(s,"class","btn-danger btn-sm"),we(e,"display","flex"),we(e,"align-items","center"),we(e,"gap","6px"),we(e,"margin-top","4px")},m(l,u){Re(l,e,u),v(e,t),v(e,r),v(e,s),o||(c=ze(s,"click",i[6]),o=!0)},p:bt,d(l){l&&I(e),o=!1,c()}}}function Y_(i){let e,t,n="地表贴图",r,s,a=i[2].visible?"隐藏":"显示",o,c,l,u,h,f="正射影像 (贴图纹理)",_,m,g,p,d,b,M,R="DEM 灰度图 (地形起伏)",P,A,y,L,k,x,T,$=(i[2].opacity*100).toFixed(0)+"",te,N,K,X,re,D,O,Y=i[2].orthoImage&&nc(i),j=i[2].demImage&&ic(i);return{c(){e=C("div"),t=C("h3"),t.textContent=n,r=ee(),s=C("button"),o=Be(a),c=ee(),l=C("div"),u=C("div"),h=C("label"),h.textContent=f,_=ee(),m=C("div"),g=C("input"),p=ee(),Y&&Y.c(),d=ee(),b=C("div"),M=C("label"),M.textContent=R,P=ee(),A=C("input"),y=ee(),j&&j.c(),L=ee(),k=C("div"),x=C("label"),T=Be("贴图透明度: "),te=Be($),N=Be("%"),K=ee(),X=C("input"),this.h()},l(J){e=w(J,"DIV",{class:!0});var ae=ne(e);t=w(ae,"H3",{"data-svelte-h":!0}),Le(t)!=="svelte-gzaxfa"&&(t.textContent=n),r=Q(ae),s=w(ae,"BUTTON",{class:!0});var q=ne(s);o=Fe(q,a),q.forEach(I),ae.forEach(I),c=Q(J),l=w(J,"DIV",{class:!0,style:!0});var G=ne(l);u=w(G,"DIV",{class:!0});var he=ne(u);h=w(he,"LABEL",{"data-svelte-h":!0}),Le(h)!=="svelte-txh69p"&&(h.textContent=f),_=Q(he),m=w(he,"DIV",{style:!0});var ie=ne(m);g=w(ie,"INPUT",{type:!0,id:!0,accept:!0}),ie.forEach(I),p=Q(he),Y&&Y.l(he),he.forEach(I),d=Q(G),b=w(G,"DIV",{class:!0});var W=ne(b);M=w(W,"LABEL",{"data-svelte-h":!0}),Le(M)!=="svelte-1aq3yz3"&&(M.textContent=R),P=Q(W),A=w(W,"INPUT",{type:!0,id:!0,accept:!0}),y=Q(W),j&&j.l(W),W.forEach(I),L=Q(G),k=w(G,"DIV",{class:!0});var se=ne(k);x=w(se,"LABEL",{});var Z=ne(x);T=Fe(Z,"贴图透明度: "),te=Fe(Z,$),N=Fe(Z,"%"),Z.forEach(I),K=Q(se),X=w(se,"INPUT",{type:!0,min:!0,max:!0}),se.forEach(I),G.forEach(I),this.h()},h(){z(s,"class","btn-secondary btn-sm"),z(e,"class","panel-header"),z(g,"type","file"),z(g,"id","orthoInput"),z(g,"accept","image/*"),we(m,"display","flex"),we(m,"gap","4px"),we(m,"align-items","center"),z(u,"class","form-group"),z(A,"type","file"),z(A,"id","demInput"),z(A,"accept","image/*"),z(b,"class","form-group"),z(X,"type","range"),z(X,"min","0"),z(X,"max","100"),X.value=re=i[2].opacity*100,z(k,"class","form-group"),z(l,"class","panel-body"),we(l,"padding","10px 12px")},m(J,ae){Re(J,e,ae),v(e,t),v(e,r),v(e,s),v(s,o),Re(J,c,ae),Re(J,l,ae),v(l,u),v(u,h),v(u,_),v(u,m),v(m,g),i[8](g),v(u,p),Y&&Y.m(u,null),v(l,d),v(l,b),v(b,M),v(b,P),v(b,A),i[9](A),v(b,y),j&&j.m(b,null),v(l,L),v(l,k),v(k,x),v(x,T),v(x,te),v(x,N),v(k,K),v(k,X),D||(O=[ze(s,"click",i[7]),ze(g,"change",i[3]),ze(A,"change",i[4]),ze(X,"input",i[10])],D=!0)},p(J,[ae]){ae&4&&a!==(a=J[2].visible?"隐藏":"显示")&&Qe(o,a),J[2].orthoImage?Y?Y.p(J,ae):(Y=nc(J),Y.c(),Y.m(u,null)):Y&&(Y.d(1),Y=null),J[2].demImage?j?j.p(J,ae):(j=ic(J),j.c(),j.m(b,null)):j&&(j.d(1),j=null),ae&4&&$!==($=(J[2].opacity*100).toFixed(0)+"")&&Qe(te,$),ae&4&&re!==(re=J[2].opacity*100)&&(X.value=re)},i:bt,o:bt,d(J){J&&(I(e),I(c),I(l)),i[8](null),Y&&Y.d(),i[9](null),j&&j.d(),D=!1,Lt(O)}}}function rc(i){return new Promise((e,t)=>{const n=new FileReader;n.onload=r=>{const s=new Image;s.onload=()=>e(s),s.onerror=t,s.src=r.target.result},n.onerror=t,n.readAsDataURL(i)})}function K_(i,e,t){let n;nt(i,Gn,m=>t(2,n=m));let r,s;async function a(m){var p;const g=(p=m.target.files)==null?void 0:p[0];if(g){if(!g.type.startsWith("image/")){Ze("请上传图片文件","warning");return}try{const d=await rc(g);mt(Gn,n={...n,orthoImage:d},n),Ze(`正射影像已加载: ${g.name}`,"success")}catch{Ze("加载正射影像失败","error")}m.target.value=""}}async function o(m){var p;const g=(p=m.target.files)==null?void 0:p[0];if(g){if(!g.type.startsWith("image/")){Ze("请上传灰度图 (PNG/JPG)","warning");return}try{const d=await rc(g);mt(Gn,n={...n,demImage:d},n),Ze(`DEM 灰度图已加载: ${g.name}`,"success")}catch{Ze("加载DEM失败","error")}m.target.value=""}}function c(){mt(Gn,n={...n,orthoImage:null},n)}function l(){mt(Gn,n={...n,demImage:null},n)}const u=()=>mt(Gn,n={...n,visible:!n.visible},n);function h(m){xr[m?"unshift":"push"](()=>{r=m,t(0,r)})}function f(m){xr[m?"unshift":"push"](()=>{s=m,t(1,s)})}return[r,s,n,a,o,c,l,u,h,f,m=>mt(Gn,n={...n,opacity:m.target.value/100},n)]}class Z_ extends bn{constructor(e){super(),yn(this,e,K_,Y_,Sn,{})}}function $_(i){let e,t=i[0].message+"",n,r,s,a="✕",o,c,l;return{c(){e=C("div"),n=Be(t),r=ee(),s=C("button"),s.textContent=a,this.h()},l(u){e=w(u,"DIV",{class:!0});var h=ne(e);n=Fe(h,t),r=Q(h),s=w(h,"BUTTON",{class:!0,"data-svelte-h":!0}),Le(s)!=="svelte-4r1jhq"&&(s.textContent=a),h.forEach(I),this.h()},h(){z(s,"class","close-btn svelte-ii73z2"),z(e,"class",o="toast toast-"+i[0].type+" svelte-ii73z2")},m(u,h){Re(u,e,h),v(e,n),v(e,r),v(e,s),c||(l=ze(s,"click",i[2]),c=!0)},p(u,[h]){h&1&&t!==(t=u[0].message+"")&&Qe(n,t),h&1&&o!==(o="toast toast-"+u[0].type+" svelte-ii73z2")&&z(e,"class",o)},i:bt,o:bt,d(u){u&&I(e),c=!1,l()}}}function J_(i,e,t){let n;nt(i,Sr,a=>t(1,n=a));let{toast:r}=e;const s=()=>mt(Sr,n=n.filter(a=>a.id!==r.id),n);return i.$$set=a=>{"toast"in a&&t(0,r=a.toast)},[r,n,s]}class Q_ extends bn{constructor(e){super(),yn(this,e,J_,$_,Sn,{toast:0})}}function sc(i,e,t){const n=i.slice();return n[21]=e[t],n}function ac(i,e,t){const n=i.slice();return n[24]=e[t],n}function oc(i,e,t){const n=i.slice();return n[27]=e[t],n}function lc(i){let e,t=i[27].name+"",n,r;return{c(){e=C("option"),n=Be(t),this.h()},l(s){e=w(s,"OPTION",{});var a=ne(e);n=Fe(a,t),a.forEach(I),this.h()},h(){e.__value=r=i[27].id,He(e,e.__value)},m(s,a){Re(s,e,a),v(e,n)},p(s,a){a&1&&t!==(t=s[27].name+"")&&Qe(n,t),a&1&&r!==(r=s[27].id)&&(e.__value=r,He(e,e.__value))},d(s){s&&I(e)}}}function cc(i){let e,t=i[24].icon+"",n,r,s=i[24].label+"",a,o,c,l;function u(){return i[14](i[24])}return{c(){e=C("button"),n=Be(t),r=ee(),a=Be(s),o=ee(),this.h()},l(h){e=w(h,"BUTTON",{class:!0});var f=ne(e);n=Fe(f,t),r=Q(f),a=Fe(f,s),o=Q(f),f.forEach(I),this.h()},h(){z(e,"class","tab-btn svelte-19z9xcn"),tr(e,"active",i[6]===i[24].id)},m(h,f){Re(h,e,f),v(e,n),v(e,r),v(e,a),v(e,o),c||(l=ze(e,"click",u),c=!0)},p(h,f){i=h,f&2112&&tr(e,"active",i[6]===i[24].id)},d(h){h&&I(e),c=!1,l()}}}function eg(i){let e,t;return e=new j_({}),{c(){In(e.$$.fragment)},l(n){Dn(e.$$.fragment,n)},m(n,r){Ln(e,n,r),t=!0},i(n){t||(qt(e.$$.fragment,n),t=!0)},o(n){jt(e.$$.fragment,n),t=!1},d(n){Pn(e,n)}}}function tg(i){let e,t;return e=new W_({}),{c(){In(e.$$.fragment)},l(n){Dn(e.$$.fragment,n)},m(n,r){Ln(e,n,r),t=!0},i(n){t||(qt(e.$$.fragment,n),t=!0)},o(n){jt(e.$$.fragment,n),t=!1},d(n){Pn(e,n)}}}function ng(i){let e,t;return e=new V_({}),{c(){In(e.$$.fragment)},l(n){Dn(e.$$.fragment,n)},m(n,r){Ln(e,n,r),t=!0},i(n){t||(qt(e.$$.fragment,n),t=!0)},o(n){jt(e.$$.fragment,n),t=!1},d(n){Pn(e,n)}}}function ig(i){let e,t;return e=new uu({}),{c(){In(e.$$.fragment)},l(n){Dn(e.$$.fragment,n)},m(n,r){Ln(e,n,r),t=!0},i(n){t||(qt(e.$$.fragment,n),t=!0)},o(n){jt(e.$$.fragment,n),t=!1},d(n){Pn(e,n)}}}function rg(i){let e,t;return e=new su({}),{c(){In(e.$$.fragment)},l(n){Dn(e.$$.fragment,n)},m(n,r){Ln(e,n,r),t=!0},i(n){t||(qt(e.$$.fragment,n),t=!0)},o(n){jt(e.$$.fragment,n),t=!1},d(n){Pn(e,n)}}}function sg(i){let e,t;return e=new O_({}),{c(){In(e.$$.fragment)},l(n){Dn(e.$$.fragment,n)},m(n,r){Ln(e,n,r),t=!0},i(n){t||(qt(e.$$.fragment,n),t=!0)},o(n){jt(e.$$.fragment,n),t=!1},d(n){Pn(e,n)}}}function ag(i){let e,t;return e=new du({}),{c(){In(e.$$.fragment)},l(n){Dn(e.$$.fragment,n)},m(n,r){Ln(e,n,r),t=!0},i(n){t||(qt(e.$$.fragment,n),t=!0)},o(n){jt(e.$$.fragment,n),t=!1},d(n){Pn(e,n)}}}function uc(i){let e,t,n,r="创建新项目",s,a,o,c="项目名称",l,u,h,f,_,m="取消",g,p,d="创建",b,M;return{c(){e=C("div"),t=C("div"),n=C("h3"),n.textContent=r,s=ee(),a=C("div"),o=C("label"),o.textContent=c,l=ee(),u=C("input"),h=ee(),f=C("div"),_=C("button"),_.textContent=m,g=ee(),p=C("button"),p.textContent=d,this.h()},l(R){e=w(R,"DIV",{class:!0});var P=ne(e);t=w(P,"DIV",{class:!0});var A=ne(t);n=w(A,"H3",{"data-svelte-h":!0}),Le(n)!=="svelte-1v42gf6"&&(n.textContent=r),s=Q(A),a=w(A,"DIV",{class:!0});var y=ne(a);o=w(y,"LABEL",{"data-svelte-h":!0}),Le(o)!=="svelte-1mpo0da"&&(o.textContent=c),l=Q(y),u=w(y,"INPUT",{type:!0,placeholder:!0}),y.forEach(I),h=Q(A),f=w(A,"DIV",{class:!0});var L=ne(f);_=w(L,"BUTTON",{class:!0,"data-svelte-h":!0}),Le(_)!=="svelte-pvm4w2"&&(_.textContent=m),g=Q(L),p=w(L,"BUTTON",{class:!0,"data-svelte-h":!0}),Le(p)!=="svelte-1mtj7b2"&&(p.textContent=d),L.forEach(I),A.forEach(I),P.forEach(I),this.h()},h(){z(u,"type","text"),z(u,"placeholder","输入项目名称"),z(a,"class","form-group"),z(_,"class","btn-secondary"),z(p,"class","btn-primary"),z(f,"class","modal-actions"),z(t,"class","modal"),z(e,"class","modal-overlay")},m(R,P){Re(R,e,P),v(e,t),v(t,n),v(t,s),v(t,a),v(a,o),v(a,l),v(a,u),He(u,i[2]),v(t,h),v(t,f),v(f,_),v(f,g),v(f,p),b||(M=[ze(u,"input",i[15]),ze(u,"keydown",i[16]),ze(_,"click",i[17]),ze(p,"click",i[10]),ze(e,"click",ua(i[18]))],b=!0)},p(R,P){P&4&&u.value!==R[2]&&He(u,R[2])},d(R){R&&I(e),b=!1,Lt(M)}}}function hc(i,e){let t,n,r;return n=new Q_({props:{toast:e[21]}}),{key:i,first:null,c(){t=Rn(),In(n.$$.fragment),this.h()},l(s){t=Rn(),Dn(n.$$.fragment,s),this.h()},h(){this.first=t},m(s,a){Re(s,t,a),Ln(n,s,a),r=!0},p(s,a){e=s;const o={};a&256&&(o.toast=e[21]),n.$set(o)},i(s){r||(qt(n.$$.fragment,s),r=!0)},o(s){jt(n.$$.fragment,s),r=!1},d(s){s&&I(t),Pn(n,s)}}}function og(i){let e,t,n,r,s="⛏ GeoModeler",a,o,c,l,u,h="+ 新项目",f,_,m,g,p,d,b=i[4].length+"",M,R,P=i[3].length+"",A,y,L,k,x,T,$,te,N,K,X,re,D,O,Y,j,J,ae=[],q=new Map,G,he,ie,W=_t(i[0]),se=[];for(let F=0;F<W.length;F+=1)se[F]=lc(oc(i,W,F));let Z=_t(i[11]),pe=[];for(let F=0;F<Z.length;F+=1)pe[F]=cc(ac(i,Z,F));const V=[rg,ig,ng,tg,eg],Ce=[];function fe(F,ue){return F[6]==="boreholes"?0:F[6]==="profiles"?1:F[6]==="modeling"?2:F[6]==="attributes"?3:F[6]==="export"?4:-1}~(x=fe(i))&&(T=Ce[x]=V[x](i)),K=new Z_({});const Te=[ag,sg],le=[];function Pe(F,ue){return F[6]==="profiles"&&F[7]?0:1}D=Pe(i),O=le[D]=Te[D](i);let oe=i[1]&&uc(i),S=_t(i[8]);const E=F=>F[21].id;for(let F=0;F<S.length;F+=1){let ue=sc(i,S,F),ce=E(ue);q.set(ce,ae[F]=hc(ce,ue))}return{c(){e=C("div"),t=C("header"),n=C("div"),r=C("span"),r.textContent=s,a=ee(),o=C("select");for(let F=0;F<se.length;F+=1)se[F].c();l=ee(),u=C("button"),u.textContent=h,f=ee(),_=C("div");for(let F=0;F<pe.length;F+=1)pe[F].c();m=ee(),g=C("div"),p=C("span"),d=Be("钻孔: "),M=Be(b),R=Be(" | 岩性: "),A=Be(P),y=ee(),L=C("div"),k=C("aside"),T&&T.c(),$=ee(),te=C("div"),N=ee(),In(K.$$.fragment),X=ee(),re=C("main"),O.c(),Y=ee(),oe&&oe.c(),j=ee(),J=C("div");for(let F=0;F<ae.length;F+=1)ae[F].c();this.h()},l(F){e=w(F,"DIV",{class:!0});var ue=ne(e);t=w(ue,"HEADER",{class:!0});var ce=ne(t);n=w(ce,"DIV",{class:!0});var ge=ne(n);r=w(ge,"SPAN",{class:!0,"data-svelte-h":!0}),Le(r)!=="svelte-1m7r0r6"&&(r.textContent=s),a=Q(ge),o=w(ge,"SELECT",{class:!0});var Me=ne(o);for(let ke=0;ke<se.length;ke+=1)se[ke].l(Me);Me.forEach(I),l=Q(ge),u=w(ge,"BUTTON",{class:!0,"data-svelte-h":!0}),Le(u)!=="svelte-1c65pm4"&&(u.textContent=h),ge.forEach(I),f=Q(ce),_=w(ce,"DIV",{class:!0});var Ee=ne(_);for(let ke=0;ke<pe.length;ke+=1)pe[ke].l(Ee);Ee.forEach(I),m=Q(ce),g=w(ce,"DIV",{class:!0});var be=ne(g);p=w(be,"SPAN",{class:!0});var Ie=ne(p);d=Fe(Ie,"钻孔: "),M=Fe(Ie,b),R=Fe(Ie," | 岩性: "),A=Fe(Ie,P),Ie.forEach(I),be.forEach(I),ce.forEach(I),y=Q(ue),L=w(ue,"DIV",{class:!0});var Xe=ne(L);k=w(Xe,"ASIDE",{class:!0});var Ae=ne(k);T&&T.l(Ae),$=Q(Ae),te=w(Ae,"DIV",{class:!0}),ne(te).forEach(I),N=Q(Ae),Dn(K.$$.fragment,Ae),Ae.forEach(I),X=Q(Xe),re=w(Xe,"MAIN",{class:!0});var We=ne(re);O.l(We),We.forEach(I),Xe.forEach(I),ue.forEach(I),Y=Q(F),oe&&oe.l(F),j=Q(F),J=w(F,"DIV",{class:!0});var Ye=ne(J);for(let ke=0;ke<ae.length;ke+=1)ae[ke].l(Ye);Ye.forEach(I),this.h()},h(){z(r,"class","logo svelte-19z9xcn"),z(o,"class","svelte-19z9xcn"),z(u,"class","btn-secondary btn-sm"),z(n,"class","header-left svelte-19z9xcn"),z(_,"class","header-center svelte-19z9xcn"),z(p,"class","info-text svelte-19z9xcn"),z(g,"class","header-right svelte-19z9xcn"),z(t,"class","app-header svelte-19z9xcn"),z(te,"class","divider svelte-19z9xcn"),z(k,"class","left-panel panel svelte-19z9xcn"),z(re,"class","main-content svelte-19z9xcn"),z(L,"class","app-body svelte-19z9xcn"),z(e,"class","app-layout svelte-19z9xcn"),z(J,"class","toast-container")},m(F,ue){Re(F,e,ue),v(e,t),v(t,n),v(n,r),v(n,a),v(n,o);for(let ce=0;ce<se.length;ce+=1)se[ce]&&se[ce].m(o,null);Ft(o,i[5]?i[5].id:""),v(n,l),v(n,u),v(t,f),v(t,_);for(let ce=0;ce<pe.length;ce+=1)pe[ce]&&pe[ce].m(_,null);v(t,m),v(t,g),v(g,p),v(p,d),v(p,M),v(p,R),v(p,A),v(e,y),v(e,L),v(L,k),~x&&Ce[x].m(k,null),v(k,$),v(k,te),v(k,N),Ln(K,k,null),v(L,X),v(L,re),le[D].m(re,null),Re(F,Y,ue),oe&&oe.m(F,ue),Re(F,j,ue),Re(F,J,ue);for(let ce=0;ce<ae.length;ce+=1)ae[ce]&&ae[ce].m(J,null);G=!0,he||(ie=[ze(o,"change",i[12]),ze(u,"click",i[13])],he=!0)},p(F,[ue]){if(ue&1){W=_t(F[0]);let Me;for(Me=0;Me<W.length;Me+=1){const Ee=oc(F,W,Me);se[Me]?se[Me].p(Ee,ue):(se[Me]=lc(Ee),se[Me].c(),se[Me].m(o,null))}for(;Me<se.length;Me+=1)se[Me].d(1);se.length=W.length}if((!G||ue&33&&c!==(c=F[5]?F[5].id:""))&&Ft(o,F[5]?F[5].id:""),ue&2112){Z=_t(F[11]);let Me;for(Me=0;Me<Z.length;Me+=1){const Ee=ac(F,Z,Me);pe[Me]?pe[Me].p(Ee,ue):(pe[Me]=cc(Ee),pe[Me].c(),pe[Me].m(_,null))}for(;Me<pe.length;Me+=1)pe[Me].d(1);pe.length=Z.length}(!G||ue&16)&&b!==(b=F[4].length+"")&&Qe(M,b),(!G||ue&8)&&P!==(P=F[3].length+"")&&Qe(A,P);let ce=x;x=fe(F),x!==ce&&(T&&(gs(),jt(Ce[ce],1,1,()=>{Ce[ce]=null}),vs()),~x?(T=Ce[x],T||(T=Ce[x]=V[x](F),T.c()),qt(T,1),T.m(k,$)):T=null);let ge=D;D=Pe(F),D!==ge&&(gs(),jt(le[ge],1,1,()=>{le[ge]=null}),vs(),O=le[D],O||(O=le[D]=Te[D](F),O.c()),qt(O,1),O.m(re,null)),F[1]?oe?oe.p(F,ue):(oe=uc(F),oe.c(),oe.m(j.parentNode,j)):oe&&(oe.d(1),oe=null),ue&256&&(S=_t(F[8]),gs(),ae=$c(ae,ue,E,1,F,S,q,J,Zc,hc,null,sc),vs())},i(F){if(!G){qt(T),qt(K.$$.fragment,F),qt(O);for(let ue=0;ue<S.length;ue+=1)qt(ae[ue]);G=!0}},o(F){jt(T),jt(K.$$.fragment,F),jt(O);for(let ue=0;ue<ae.length;ue+=1)jt(ae[ue]);G=!1},d(F){F&&(I(e),I(Y),I(j),I(J)),Vt(se,F),Vt(pe,F),~x&&Ce[x].d(),Pn(K),le[D].d(),oe&&oe.d(F);for(let ue=0;ue<ae.length;ue+=1)ae[ue].d();he=!1,Lt(ie)}}}function lg(i,e,t){let n,r,s,a,o,c,l,u;nt(i,Mr,L=>t(19,n=L)),nt(i,Er,L=>t(20,r=L)),nt(i,jn,L=>t(3,s=L)),nt(i,bi,L=>t(4,a=L)),nt(i,Si,L=>t(5,o=L)),nt(i,Ta,L=>t(6,c=L)),nt(i,ts,L=>t(7,l=L)),nt(i,Sr,L=>t(8,u=L));let h=[],f=!1,_="";ca(async()=>{try{t(0,h=await vt.get("/projects")),h.length>0&&await m(h[0].id)}catch(L){console.error(L)}});async function m(L){try{const k=await vt.get(`/projects/${L}`);mt(Si,o=k,o);const[x,T,$,te]=await Promise.all([vt.get(`/projects/${L}/boreholes`),vt.get(`/projects/${L}/lithology-types`),vt.get(`/projects/${L}/profiles`),vt.get(`/projects/${L}/modeling/runs`)]);mt(bi,a=x,a),mt(jn,s=T,s),mt(Er,r=$,r),mt(Mr,n=te,n)}catch(k){Ze(`加载项目失败: ${k.message}`,"error")}}async function g(){if(_.trim())try{const L=await vt.post("/projects",{name:_.trim()});t(0,h=[...h,L]),t(1,f=!1),t(2,_=""),await m(L.id),Ze("项目创建成功","success")}catch(L){Ze(`创建失败: ${L.message}`,"error")}}const p=[{id:"boreholes",label:"钻孔数据",icon:"⊕"},{id:"profiles",label:"剖面分析",icon:"☷"},{id:"modeling",label:"三维建模",icon:"◆"},{id:"attributes",label:"属性场",icon:"◈"},{id:"export",label:"成果导出",icon:"↓"}],d=L=>m(L.target.value),b=()=>t(1,f=!0),M=L=>mt(Ta,c=L.id,c);function R(){_=this.value,t(2,_)}return[h,f,_,s,a,o,c,l,u,m,g,p,d,b,M,R,L=>L.key==="Enter"&&g(),()=>t(1,f=!1),()=>t(1,f=!1)]}class cg extends bn{constructor(e){super(),yn(this,e,lg,og,Sn,{})}}function ug(i){let e,t;return e=new cg({}),{c(){In(e.$$.fragment)},l(n){Dn(e.$$.fragment,n)},m(n,r){Ln(e,n,r),t=!0},p:bt,i(n){t||(qt(e.$$.fragment,n),t=!0)},o(n){jt(e.$$.fragment,n),t=!1},d(n){Pn(e,n)}}}class mg extends bn{constructor(e){super(),yn(this,e,null,ug,Sn,{})}}export{mg as component,pg as universal};
