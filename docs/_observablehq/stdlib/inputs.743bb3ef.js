var Wt=Object.defineProperty;var u=(e,t)=>Wt(e,"name",{value:t,configurable:!0});var ue,oe,le,se;import{html as v}from"../../_npm/htl@0.3.1/063eb405.js";import{AbstractFile as Zt}from"../stdlib.d907f99e.js";var Gt=Object.defineProperty,Oe=u((e,t)=>Gt(e,"name",{value:t,configurable:!0}),"i");function Ge(e,t){if(e instanceof Date||(e=new Date(+e)),isNaN(e))return typeof t=="function"?t(e):t;const n=e.getUTCHours(),a=e.getUTCMinutes(),r=e.getUTCSeconds(),o=e.getUTCMilliseconds();return`${Je(e.getUTCFullYear())}-${C(e.getUTCMonth()+1,2)}-${C(e.getUTCDate(),2)}${n||a||r||o?`T${C(n,2)}:${C(a,2)}${r||o?`:${C(r,2)}${o?`.${C(o,3)}`:""}`:""}Z`:""}`}u(Ge,"c"),Oe(Ge,"format");function Je(e){return e<0?`-${C(-e,6)}`:e>9999?`+${C(e,6)}`:C(e,4)}u(Je,"f"),Oe(Je,"formatYear");function C(e,t){return`${e}`.padStart(t,"0")}u(C,"t$1"),Oe(C,"pad");var Jt=Object.defineProperty,Qt=u((e,t)=>Jt(e,"name",{value:t,configurable:!0}),"t");const Yt=/^(?:[-+]\d{2})?\d{4}(?:-\d{2}(?:-\d{2})?)?(?:T\d{2}:\d{2}(?::\d{2}(?:\.\d{3})?)?(?:Z|[-+]\d{2}:?\d{2})?)?$/;function Qe(e,t){return Yt.test(e+="")?new Date(e):typeof t=="function"?t(e):t}u(Qe,"r"),Qt(Qe,"parse");var Xt=Object.defineProperty,i=u((e,t)=>Xt(e,"name",{value:t,configurable:!0}),"o$1");function U(e){return e==null?null:typeof e=="number"?`${e}px`:`${e}`}u(U,"H"),i(U,"length");function _(e){return{"--input-width":U(e)}}u(_,"_"),i(_,"maybeWidth");const Ae={bubbles:!0};function G(e){e.preventDefault()}u(G,"G"),i(G,"preventDefault");function ne({currentTarget:e}){(e.form||e).dispatchEvent(new Event("input",Ae))}u(ne,"re"),i(ne,"dispatchInput");function Se(e){return e.checkValidity()}u(Se,"xe"),i(Se,"checkValidity");function F(e){return e}u(F,"P"),i(F,"identity");let en=0;function re(){return`inputs-3a86ea-${++en}`}u(re,"ie"),i(re,"newId");function L(e,t){if(e)return e=v`<label>${e}`,t!==void 0&&(e.htmlFor=t.id=re()),e}u(L,"j"),i(L,"maybeLabel");function Ye(e="\u2261",{label:t="",value:n,reduce:a,disabled:r,required:o=!1,width:c}={}){const p=typeof e=="string"||e instanceof Node;p?(!o&&n===void 0&&(n=0),a===void 0&&(a=i((h=0)=>h+1,"reduce")),r=new Set(r?[e]:[]),e=[[e,a]]):(!o&&n===void 0&&(n=null),r=new Set(r===!0?Array.from(e,([h])=>h):r||void 0));const m=v`<form class=inputs-3a86ea>`;m.addEventListener("submit",G);const s={width:U(c)},b=Array.from(e,([h,k=F])=>{if(typeof k!="function")throw new TypeError("reduce is not a function");return v`<button disabled=${r.has(h)} style=${s} onclick=${$=>{m.value=k(m.value),ne($)}}>${h}`});return(t=L(t,p?b[0]:void 0))&&m.append(t),m.append(...b),m.value=n,m}u(Ye,"en"),i(Ye,"button");function K(e){return Array.isArray(e)?e:Array.from(e)}u(K,"q$1"),i(K,"arrayify");function Te(e){return e?typeof e[Symbol.iterator]=="function":!1}u(Te,"Ee"),i(Te,"iterable");function Ee(e){if(Te(e.columns))return e.columns;if(e.schema&&Te(e.schema.fields))return Array.from(e.schema.fields,t=>t.name);if(typeof e.columnNames=="function")return e.columnNames()}u(Ee,"Te"),i(Ee,"maybeColumns");function H(e){return e==null?"":`${e}`}u(H,"W"),i(H,"stringify");const pe=ie(e=>{const t=ae(e);return n=>n==null?"":typeof n=="number"?t(n):n instanceof Date?me(n):`${n}`}),ae=ie(e=>t=>t===0?"0":t.toLocaleString(e)),tn=pe(),nn=ae();function je(e){const t=e.toString(),n=t.length;let a=-1,r;e:for(let o=1;o<n;++o)switch(t[o]){case".":a=r=o;break;case"0":a===0&&(a=o),r=o;break;default:if(!+t[o])break e;a>0&&(a=0);break}return a>0?t.slice(0,a)+t.slice(r+1):t}u(je,"De"),i(je,"formatTrim");function me(e){return Ge(e,"Invalid Date")}u(me,"le"),i(me,"formatDate$1");function ie(e){let t=ie,n;return(a="en")=>a===t?n:n=e(t=a)}u(ie,"ue"),i(ie,"localize");function he(e,t){return J(t)-J(e)||(e<t?-1:e>t?1:e>=t?0:NaN)}u(he,"ae"),i(he,"ascending");function ze(e,t){return J(t)-J(e)||(t<e?-1:t>e?1:t>=e?0:NaN)}u(ze,"Le"),i(ze,"descending");function J(e){return e!=null&&!Number.isNaN(e)}u(J,"Q"),i(J,"defined");const rn=i(([e])=>e,"first"),Xe=i(([,e])=>e,"second");function Le({multiple:e,render:t,selectedIndexes:n,select:a}){return i(function(r,{locale:o,keyof:c=r instanceof Map?rn:F,valueof:p=r instanceof Map?Xe:F,format:m=(A=>(x,y,E)=>A(c(x,y,E)))(pe(o)),multiple:s,key:b,value:h,disabled:k=!1,sort:$,unique:g,...j}={}){if(typeof c!="function")throw new TypeError("keyof is not a function");if(typeof p!="function")throw new TypeError("valueof is not a function");if(typeof m!="function")throw new TypeError("format is not a function");e!==void 0&&(s=e),$=nt($);let A=+s;h===void 0&&(h=b!==void 0&&r instanceof Map?A>0?Array.from(b,S=>r.get(S)):r.get(b):void 0),g=!!g,r=K(r);let x=r.map((S,O)=>[c(S,O,r),O]);$!==void 0&&x.sort(([S],[O])=>$(S,O)),g&&(x=[...new Map(x.map(S=>[at(S[0]),S])).values()]);const y=x.map(Xe);s===!0?A=Math.max(1,Math.min(10,y.length)):A>0?s=!0:(s=!1,A=void 0);const[E,d]=t(r,y,et(r,y,h,s,p),tt(r,y,k,p),{...j,format:m,multiple:s,size:A});E.addEventListener("input",N),E.addEventListener("change",ne),E.addEventListener("submit",G);function N(S){if(S&&S.isTrusted&&E.removeEventListener("change",ne),s)h=n(d).map(O=>p(r[O],O,r));else{const O=rt(d);h=O<0?null:p(r[O],O,r)}}return u(N,"z"),i(N,"oninput"),N(),Object.defineProperty(E,"value",{get(){return h},set(S){if(s){const O=new Set(S);for(const M of d){const D=+M.value;a(M,O.has(p(r[D],D,r)))}}else d.value=y.find(O=>S===p(r[O],O,r));N()}})},"chooser")}u(Le,"Oe"),i(Le,"createChooser");function et(e,t,n,a,r){const o=new Set(n===void 0?[]:a?K(n):[n]);if(!o.size)return()=>!1;const c=new Set;for(const p of t)o.has(r(e[p],p,e))&&c.add(p);return p=>c.has(p)}u(et,"on"),i(et,"maybeSelection");function tt(e,t,n,a){if(typeof n=="boolean")return n;const r=new Set(K(n)),o=new Set;for(const c of t)r.has(a(e[c],c,e))&&o.add(c);return c=>o.has(c)}u(tt,"un"),i(tt,"maybeDisabled");function nt(e){if(!(e===void 0||e===!1)){if(e===!0||e==="ascending")return he;if(e==="descending")return ze;if(typeof e=="function")return e;throw new TypeError("sort is not a function")}}u(nt,"fn"),i(nt,"maybeSort");function rt(e){return e.value?+e.value:-1}u(rt,"sn"),i(rt,"selectedIndex");function at(e){return e!==null&&typeof e=="object"?e.valueOf():e}u(at,"cn"),i(at,"intern");function De(e,t){return Le({multiple:e,render(n,a,r,o,{format:c,label:p}){const m=v`<form class="inputs-3a86ea inputs-3a86ea-checkbox">
      ${L(p)}<div>
        ${a.map(s=>v`<label><input type=${t} disabled=${typeof o=="function"?o(s):o} name=input value=${s} checked=${r(s)}>${c(n[s],s,n)}`)}
      </div>
    </form>`;return[m,ut(m.elements.input,e)]},selectedIndexes(n){return Array.from(n).filter(a=>a.checked).map(a=>+a.value)},select(n,a){n.checked=a}})}u(De,"je"),i(De,"createCheckbox");const an=De(!1,"radio"),un=De(!0,"checkbox");function it({label:e,value:t,values:n,disabled:a}={}){const r=v`<input class=inputs-3a86ea-input type=checkbox name=input disabled=${a}>`,o=v`<form class="inputs-3a86ea inputs-3a86ea-toggle">${L(e,r)}${r}`;return Object.defineProperty(o,"value",{get(){return n===void 0?r.checked:n[r.checked?0:1]},set(c){r.checked=n===void 0?!!c:c===n[0]}}),t!==void 0&&(o.value=t),o}u(it,"dn"),i(it,"toggle");function ut(e,t){return e===void 0?new on(t?[]:null):typeof e.length>"u"?new(t?sn:ln)(e):e}u(ut,"pn"),i(ut,"inputof$1");const ot=(ue=class{constructor(t){this._value=t}get value(){return this._value}set value(t){}*[Symbol.iterator](){}},u(ue,"we"),ue);i(ot,"OptionZero");let on=ot;const lt=(oe=class{constructor(t){this._input=t}get value(){const{_input:t}=this;return t.checked?t.value:""}set value(t){const{_input:n}=this;n.checked||(n.checked=H(t)===n.value)}*[Symbol.iterator](){yield this._input}},u(oe,"ve"),oe);i(lt,"OptionOne");let ln=lt;const st=(le=class{constructor(t){this._input=t,this._value=t.checked?[t.value]:[]}get value(){return this._value}set value(t){const{_input:n}=this;n.checked||(n.checked=H(t)===n.value,this._value=n.checked?[n.value]:[])}*[Symbol.iterator](){yield this._input}},u(le,"ke"),le);i(st,"MultipleOptionOne");let sn=st;function ve(e){if(e===void 0)return[null,null];const t=re();return[v`<datalist id=${t}>${Array.from(e,n=>v`<option value=${H(n)}>`)}`,t]}u(ve,"$e"),i(ve,"maybeDatalist");function Q(e,t,n,{validate:a=Se,submit:r}={},{get:o=i(s=>s.value,"get"),set:c=i((s,b)=>s.value=H(b),"set"),same:p=i((s,b)=>s.value===b,"same"),after:m=i(s=>t.after(s),"after")}={}){r=r===!0?"Submit":r||null;const s=r?v`<button type=submit disabled>${r}`:null;r&&m(s),c(t,n),n=a(t)?o(t):void 0,e.addEventListener("submit",h),t.oninput=k;function b(){if(a(t))return n=o(t),!0}u(b,"$"),i(b,"update");function h($){G($),r&&(b()?(s.disabled=!0,ne($)):t.reportValidity())}u(h,"d"),i(h,"onsubmit");function k($){r?(s.disabled=p(t,n),$.stopPropagation()):b()||$.stopPropagation()}return u(k,"w"),i(k,"oninput"),Object.defineProperty(e,"value",{get(){return n},set($){c(t,$),b()}})}u(Q,"V"),i(Q,"createText");function Y({label:e,value:t="",type:n="text",placeholder:a,pattern:r,spellcheck:o,autocomplete:c,autocapitalize:p,min:m,max:s,minlength:b,maxlength:h,required:k=b>0,datalist:$,readonly:g,disabled:j,width:A,...x}={}){const[y,E]=ve($),d=v`<input
    type=${n}
    name=text
    list=${E}
    readonly=${g}
    disabled=${j}
    required=${k}
    min=${m}
    max=${s}
    minlength=${b}
    maxlength=${h}
    pattern=${r}
    spellcheck=${be(o)}
    autocomplete=${B(c)}
    autocapitalize=${B(p)}
    placeholder=${a}
  >`,N=v`<form class=inputs-3a86ea style=${_(A)}>
    ${L(e,d)}<div class=inputs-3a86ea-input>
      ${d}
    </div>${y}
  </form>`;return Q(N,d,t,x)}u(Y,"X"),i(Y,"text");function ct(e){return Y({...e,type:"email"})}u(ct,"hn"),i(ct,"email");function ft(e){return Y({...e,type:"tel"})}u(ft,"$n"),i(ft,"tel");function dt(e){return Y({...e,type:"url"})}u(dt,"mn"),i(dt,"url");function pt(e){return Y({...e,type:"password"})}u(pt,"yn"),i(pt,"password");function be(e){return e==null?null:`${e}`}u(be,"me"),i(be,"truefalse");function B(e){return e==null?null:`${e===!1?"off":e===!0?"on":e}`}u(B,"U"),i(B,"onoff");function mt({label:e,value:t,required:n,datalist:a,readonly:r,disabled:o,width:c,...p}={}){const[m,s]=ve(a),b=re(),h=v`<input
    type=color
    name=text
    value=${t}
    id=${b}
    list=${s}
    readonly=${r}
    disabled=${o}
    required=${n}
  >`,k=v`<output
    for=${b}
  >`;k.value=h.value,h.addEventListener("input",()=>k.value=h.value);const $=v`<form class=inputs-3a86ea style=${_(c)}>
    ${L(e,h)}<div class=inputs-3a86ea-input>
      <div class=inputs-3a86ea-input>${h}${k}</div>
    </div>${m}
  </form>`;return Q($,h,t,p,{after:g=>h.parentNode.after(g)})}u(mt,"bn"),i(mt,"color");const cn={type:"date",get:e=>e.valueAsDate,set:(e,t)=>e.value=qe(t),same:(e,t)=>+e.valueAsDate==+t,format:qe},fn={type:"datetime-local",get:e=>e.value?new Date(e.value):null,set:(e,t)=>e.value=Ce(t),same:(e,t)=>+new Date(e.value)==+t,format:Ce};function Me({label:e,min:t,max:n,required:a,readonly:r,disabled:o,width:c,value:p,...m}={},{type:s,format:b,...h}){const k=v`<input type=${s} name=date readonly=${r} disabled=${o} required=${a} min=${b(t)} max=${b(n)}>`,$=v`<form class=inputs-3a86ea style=${_(c)}>
    ${L(e,k)}<div class=inputs-3a86ea-input>
      ${k}
    </div>
  </form>`;return Q($,k,$e(p),m,h)}u(Me,"Fe"),i(Me,"createDate");function ht(e){return Me(e,cn)}u(ht,"vn"),i(ht,"date");function vt(e){return Me(e,fn)}u(vt,"kn"),i(vt,"datetime");function $e(e){return e instanceof Date&&!isNaN(e)?e:typeof e=="string"?Qe(e,null):e==null||isNaN(e=+e)?null:new Date(+e)}u($e,"ye"),i($e,"coerce");function qe(e){return(e=$e(e))?e.toISOString().slice(0,10):e}u(qe,"Ie"),i(qe,"formatDate");function Ce(e){return(e=$e(e))?new Date(+e-e.getTimezoneOffset()*1e3*60).toISOString().slice(0,16):e}u(Ce,"Me"),i(Ce,"formatDatetime");function bt(e,t){return(Array.isArray(e)?yt:wt)(e,t)}u(bt,"Nn"),i(bt,"form");function $t(e){return v`<div>${e}`}u($t,"An"),i($t,"arrayTemplate");function yt(e,{template:t=$t}={}){e=[...e];let n=e.map(({value:a})=>a);return Object.defineProperty(t(e),"value",{get(){for(let a=0,r=e.length;a<r;++a){const o=e[a].value;Object.is(o,n[a])||(n=[...n],n[a]=o)}return n},set(a=[]){for(let r=0,o=e.length;r<o;++r)e[r].value=a[r]}})}u(yt,"Sn"),i(yt,"arrayForm");function gt(e){return v`<div>${Object.values(e)}`}u(gt,"xn"),i(gt,"objectTemplate");function wt(e,{template:t=gt}={}){e={...e};let n=Object.fromEntries(Object.entries(e).map(([a,{value:r}])=>[a,r]));return Object.defineProperty(t(e),"value",{get(){for(const a in n){const r=e[a].value;Object.is(r,n[a])||(n={...n},n[a]=r)}return n},set(a={}){for(const r in e)e[r].value=a[r]}})}u(wt,"En"),i(wt,"objectForm");function kt({label:e,required:t,accept:n,capture:a,multiple:r,disabled:o,width:c,value:p,submit:m,transform:s=i(h=>h,"transform"),...b}={}){const h=v`<input
    type=file
    name=file
    disabled=${o}
    required=${t}
    accept=${n}
    capture=${a}
    multiple=${r}
  >`,k=v`<form class=inputs-3a86ea style=${_(c)}>
    ${L(e,h)}<div class=inputs-3a86ea-input>
      ${h}
    </div>
  </form>`;return Q(k,h,void 0,b,{get:$=>r?Array.from($.files,g=>s(g)):$.files.length?s($.files[0]):null,set:()=>{},same:()=>!1})}u(kt,"Tn"),i(kt,"file");const ye=1e-6;function xt(e,t){return arguments.length<2&&(t=e,e=void 0),e===void 0&&(e=[]),Fe({extent:e},t)}u(xt,"Dn"),i(xt,"number");function Nt(e=[0,1],t){return Fe({extent:e,range:!0},t)}u(Nt,"Ln"),i(Nt,"range");function Fe({extent:[e,t],range:n},{format:a=je,transform:r,invert:o,label:c="",value:p,step:m,disabled:s,placeholder:b,validate:h=Se,width:k}={}){let $;if(typeof a!="function")throw new TypeError("format is not a function");(e==null||isNaN(e=+e))&&(e=-1/0),(t==null||isNaN(t=+t))&&(t=1/0),e>t&&([e,t]=[t,e],r===void 0&&(r=ge)),m!==void 0&&(m=+m);const g=v`<input type=number min=${isFinite(e)?e:null} max=${isFinite(t)?t:null} step=${m??"any"} name=number required placeholder=${b} oninput=${E} disabled=${s}>`;let j;if(n){if(r===void 0&&(r=F),typeof r!="function")throw new TypeError("transform is not a function");if(o===void 0&&(o=r.invert===void 0?At(r):r.invert),typeof o!="function")throw new TypeError("invert is not a function");let d=+r(e),N=+r(t);d>N&&([d,N]=[N,d]),n=v`<input type=range min=${isFinite(d)?d:null} max=${isFinite(N)?N:null} step=${m===void 0||r!==F&&r!==ge?"any":m} name=range oninput=${y} disabled=${s}>`,j=r===F?n:v`<input type=range min=${e} max=${t} step=${m===void 0?"any":m} name=range disabled=${s}>`}else n=null,r=o=F;const A=v`<form class=inputs-3a86ea style=${_(k)}>
    ${L(c,g)}<div class=inputs-3a86ea-input>
      ${g}${n}
    </div>
  </form>`;A.addEventListener("submit",G);function x(d){return j?(d=Math.max(e,Math.min(t,d)),isFinite(d)?(j.valueAsNumber=d,j.valueAsNumber):d):+d}u(x,"k"),i(x,"coerce");function y(d){const N=x(o(n.valueAsNumber));if(isFinite(N)&&(g.valueAsNumber=Math.max(e,Math.min(t,N)),h(g))){$=g.valueAsNumber,g.value=a($);return}d&&d.stopPropagation()}u(y,"g"),i(y,"onrange");function E(d){const N=x(g.valueAsNumber);if(isFinite(N)&&(n&&(n.valueAsNumber=r(N)),h(g))){$=N;return}d&&d.stopPropagation()}return u(E,"T"),i(E,"onnumber"),Object.defineProperty(A,"value",{get(){return $},set(d){d=x(d),isFinite(d)&&(g.valueAsNumber=d,n&&(n.valueAsNumber=r(d)),h(g)&&($=d,g.value=a($)))}}),p===void 0&&j&&(p=j.valueAsNumber),p!==void 0&&(A.value=p),A}u(Fe,"Pe"),i(Fe,"createRange");function ge(e){return-e}u(ge,"be"),i(ge,"negate");function Ot(e){return e*e}u(Ot,"zn"),i(Ot,"square");function At(e){return e===F||e===ge?e:e===Math.sqrt?Ot:e===Math.log?Math.exp:e===Math.exp?Math.log:t=>St(e,t,t)}u(At,"On"),i(At,"solver");function St(e,t,n){let a=100,r,o,c;n=n===void 0?0:+n,t=+t;do o=e(n),c=e(n+ye),o===c&&(c=o+ye),n-=r=-1*ye*(o-t)/(o-c);while(a-- >0&&Math.abs(r)>ye);return a<0?NaN:n}u(St,"jn"),i(St,"solve");function Tt(e,{locale:t,format:n=dn(t),label:a,query:r="",placeholder:o="Search",columns:c=Ee(e),spellcheck:p,autocomplete:m,autocapitalize:s,filter:b=c===void 0?Pe:Et(c),datalist:h,disabled:k,required:$=!0,width:g}={}){let j=[];e=K(e),$=!!$;const[A,x]=ve(h),y=v`<input
    name=input
    type=search
    list=${x}
    disabled=${k}
    spellcheck=${be(p)}
    autocomplete=${B(m)}
    autocapitalize=${B(s)}
    placeholder=${o}
    value=${r}
    oninput=${N}
  >`,E=v`<output name=output>`,d=v`<form class=inputs-3a86ea style=${_(g)}>
    ${L(a,y)}<div class=inputs-3a86ea-input>
      ${y}${E}
    </div>${A}
  </form>`;d.addEventListener("submit",G);function N(){j=y.value||$?e.filter(b(y.value)):[],c!==void 0&&(j.columns=c),E.value=n(j.length)}return u(N,"N"),i(N,"oninput"),N(),Object.defineProperties(d,{value:{get(){return j}},query:{get(){return r},set(S){r=y.value=H(S),N()}}})}u(Tt,"Fn"),i(Tt,"search");function Pe(e){const t=`${e}`.split(/\s+/g).filter(n=>n).map(_e);return n=>{if(n==null)return!1;if(typeof n=="object")e:for(const a of t){for(const r of jt(n))if(a.test(r))continue e;return!1}else for(const a of t)if(!a.test(n))return!1;return!0}}u(Pe,"Ce"),i(Pe,"searchFilter");function Et(e){return t=>{const n=`${t}`.split(/\s+/g).filter(a=>a).map(_e);return a=>{e:for(const r of n){for(const o of e)if(r.test(a[o]))continue e;return!1}return!0}}}u(Et,"In"),i(Et,"columnFilter");function*jt(e){for(const t in e)yield e[t]}u(jt,"Mn"),i(jt,"valuesof");function _e(e){return new RegExp(`(?:^|[^\\p{L}-])${zt(e)}`,"iu")}u(_e,"_e"),i(_e,"termFilter");function zt(e){return e.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&")}u(zt,"Pn"),i(zt,"escapeRegExp");const dn=ie(e=>{const t=ae(e);return n=>`${t(n)} result${n===1?"":"s"}`}),pn=Le({render(e,t,n,a,{format:r,multiple:o,size:c,label:p,width:m}){const s=v`<select class=inputs-3a86ea-input disabled=${a===!0} multiple=${o} size=${c} name=input>
      ${t.map(b=>v`<option value=${b} disabled=${typeof a=="function"?a(b):!1} selected=${n(b)}>${H(r(e[b],b,e))}`)}
    </select>`;return[v`<form class=inputs-3a86ea style=${_(m)}>${L(p,s)}${s}`,s]},selectedIndexes(e){return Array.from(e.selectedOptions,t=>+t.value)},select(e,t){e.selected=t}}),Lt=22;function Dt(e,t={}){const{rows:n=11.5,height:a,maxHeight:r=a===void 0?(n+1)*Lt-1:void 0,width:o={},maxWidth:c}=t,p=re(),m=v`<form class="inputs-3a86ea inputs-3a86ea-table" id=${p} style=${{height:U(a),maxHeight:U(r),width:typeof o=="string"||typeof o=="number"?U(o):void 0,maxWidth:U(c)}}>`;return e&&typeof e.then=="function"?(Object.defineProperty(m,"value",{configurable:!0,set(){throw new Error("cannot set value while data is unresolved")}}),Promise.resolve(e).then(s=>Ie({root:m,id:p},s,t))):Ie({root:m,id:p},e,t),m}u(Dt,"Rn"),i(Dt,"table");function Ie({root:e,id:t},n,{columns:a=Ee(n),value:r,required:o=!0,sort:c,reverse:p=!1,format:m,locale:s,align:b,header:h,rows:k=11.5,width:$={},multiple:g=!0,select:j=!0,layout:A}={}){a=a===void 0?_t(n):K(a),A===void 0&&(A=a.length>=12?"auto":"fixed"),m=Mt(m,n,a,s),b=qt(b,n,a);let x=[],y=[],E=n[Symbol.iterator](),d=0,N=Pt(n),S=M(k*2);function O(){d>=0&&(d=E=void 0,y=Uint32Array.from(x=K(n),(l,f)=>f),N=y.length)}u(O,"A"),i(O,"materialize");function M(l){if(l=Math.floor(l),N!==void 0)return Math.min(N,l);if(l<=d)return l;for(;l>d;){const{done:f,value:w}=E.next();if(f)return N=d;y.push(d++),x.push(w)}return d}u(M,"E"),i(M,"minlengthof");let D=null,V=!1,T=new Set,I=null,R=null;const q=v`<tbody>`,Vt=v`<tr><td>${j?v`<input type=${g?"checkbox":"radio"} name=${g?null:"radio"}>`:null}</td>${a.map(()=>v`<td>`)}`,ce=v`<tr><th>${j?v`<input type=checkbox onclick=${We} disabled=${!g}>`:null}</th>${a.map(l=>v`<th title=${l} onclick=${f=>Ne(f,l)}><span></span>${h&&l in h?h[l]:l}</th>`)}</tr>`;e.appendChild(v.fragment`<table style=${{tableLayout:A}}>
  <thead>${M(1)||a.length?ce:null}</thead>
  ${q}
</table>
<style>${a.map((l,f)=>{const w=[];if(b[l]!=null&&w.push(`text-align:${b[l]}`),$[l]!=null&&w.push(`width:${U($[l])}`),w.length)return`#${t} tr>:nth-child(${f+2}){${w.join(";")}}`}).filter(F).join(`
`)}</style>`);function fe(l,f){if(d===l){for(;l<f;++l)ke(E.next().value,l);d=f}else for(let w;l<f;++l)w=y[l],ke(x[w],w)}u(fe,"se"),i(fe,"appendRows");function ke(l,f){const w=Vt.cloneNode(!0),z=X(w);if(z!=null&&(z.onclick=Ze,z.checked=T.has(f),z.value=f),l!=null)for(let Z=0;Z<a.length;++Z){let de=a[Z],P=l[de];J(P)&&(P=m[de](P,f,n),P instanceof Node||(P=document.createTextNode(P)),w.childNodes[Z+1].appendChild(P))}q.append(w)}u(ke,"Ne"),i(ke,"appendRow");function W(l){O();let f=y.indexOf(l);if(f<q.childNodes.length){const w=q.childNodes[f];X(w).checked=!1}T.delete(l)}u(W,"B"),i(W,"unselect");function ee(l){O();let f=y.indexOf(l);if(f<q.childNodes.length){const w=q.childNodes[f];X(w).checked=!0}T.add(l)}u(ee,"ee"),i(ee,"select");function*xe(l,f){if(O(),l=y.indexOf(l),f=y.indexOf(f),l<f)for(;l<=f;)yield y[l++];else for(;f<=l;)yield y[f++]}u(xe,"Ae"),i(xe,"range");function Ve(l){return l[Symbol.iterator]().next().value}u(Ve,"Ge"),i(Ve,"first");function We(l){if(O(),this.checked){T=new Set(y);for(const f of q.childNodes)X(f).checked=!0}else{for(let f of T)W(f);I=R=null,l.detail&&l.currentTarget.blur()}te()}u(We,"Je"),i(We,"reselectAll");function Ze(l){O();let f=+this.value;if(g)if(l.shiftKey){if(I===null)I=T.size?Ve(T):y[0];else for(let w of xe(I,R))W(w);R=f;for(let w of xe(I,R))ee(w)}else I=R=f,T.has(f)?(W(f),I=R=null,l.detail&&l.currentTarget.blur()):ee(f);else{for(let w of T)W(w);ee(f)}te()}u(Ze,"Qe"),i(Ze,"reselect");function Ne(l,f){O();const w=l.currentTarget;let z;if(D===w&&l.metaKey)we(D).textContent="",D=null,V=!1,z=he;else{D===w?V=!V:(D&&(we(D).textContent=""),D=w,V=l.altKey);const Z=V?ze:he;z=i((de,P)=>Z(x[de][f],x[P][f]),"compare"),we(w).textContent=V?"\u25BE":"\u25B4"}for(y.sort(z),T=new Set(Array.from(T).sort(z)),e.scrollTo(e.scrollLeft,0);q.firstChild;)q.firstChild.remove();fe(0,S=M(k*2)),I=R=null,te()}u(Ne,"Se"),i(Ne,"resort");function te(){const l=X(ce);l!=null&&(l.disabled=!g&&!T.size,l.indeterminate=g&&T.size&&T.size!==N,l.checked=T.size,r=void 0)}if(u(te,"ne"),i(te,"reinput"),e.addEventListener("scroll",()=>{e.scrollHeight-e.scrollTop<k*Lt*1.5&&S<M(S+1)&&fe(S,S=M(S+k))}),c===void 0&&p&&(O(),y.reverse()),r!==void 0){if(O(),g){const l=new Set(r);T=new Set(y.filter(f=>l.has(x[f])))}else{const l=x.indexOf(r);T=l<0?new Set:new Set([l])}te()}if(M(1)?fe(0,S):q.append(v`<tr>${a.length?v`<td>`:null}<td rowspan=${a.length} style="padding-left: var(--length3); font-style: italic;">No results.</td></tr>`),c!==void 0){let l=a.indexOf(c);l>=0&&(p&&(D=ce.childNodes[l+1]),Ne({currentTarget:ce.childNodes[l+1]},a[l]))}return Object.defineProperty(e,"value",{get(){if(r===void 0)if(O(),g)r=Array.from(o&&T.size===0?y:T,l=>x[l]),r.columns=a;else if(T.size){const[l]=T;r=x[l]}else r=null;return r},set(l){if(O(),g){const f=new Set(l),w=new Set(y.filter(z=>f.has(x[z])));for(const z of T)w.has(z)||W(z);for(const z of w)T.has(z)||ee(z)}else{const f=x.indexOf(l);T=f<0?new Set:new Set([f])}r=void 0}})}u(Ie,"He"),i(Ie,"initialize");function X(e){return e.firstChild.firstChild}u(X,"Y"),i(X,"inputof");function we(e){return e.firstChild}u(we,"ge"),i(we,"orderof");function Mt(e={},t,n,a){const r=Object.create(null);for(const o of n){if(o in e){r[o]=e[o];continue}switch(Ue(t,o)){case"number":r[o]=ae(a);break;case"date":r[o]=me;break;default:r[o]=pe(a);break}}return r}u(Mt,"Hn"),i(Mt,"formatof");function qt(e={},t,n){const a=Object.create(null);for(const r of n)r in e?a[r]=e[r]:Ue(t,r)==="number"&&(a[r]="right");return a}u(qt,"Kn"),i(qt,"alignof");function Ue(e,t){if(Ct(e))return Ft(e,t);for(const n of e){if(n==null)continue;const a=n[t];if(a!=null)return typeof a=="number"?"number":a instanceof Date?"date":void 0}}u(Ue,"Ke"),i(Ue,"type");function Ct(e){return typeof e.getChild=="function"&&typeof e.toArray=="function"&&e.schema&&Array.isArray(e.schema.fields)}u(Ct,"qn"),i(Ct,"isArrowTable");function Ft(e,t){const n=e.schema.fields.find(a=>a.name===t);switch(n?.type.typeId){case 8:case 10:return n.type.unit===1?"date":"number";case 2:case 3:case 7:case 9:return"number"}}u(Ft,"Wn"),i(Ft,"getArrowType");function Pt(e){if(typeof e.length=="number")return e.length;if(typeof e.size=="number")return e.size;if(typeof e.numRows=="function")return e.numRows()}u(Pt,"Un"),i(Pt,"lengthof");function _t(e){const t=new Set;for(const n of e)for(const a in n)t.add(a);return Array.from(t)}u(_t,"Bn"),i(_t,"columnsof");function It({value:e="",label:t,placeholder:n,spellcheck:a,autocomplete:r,autocapitalize:o,rows:c=3,minlength:p,maxlength:m,required:s=p>0,readonly:b,disabled:h,monospace:k=!1,resize:$=c<12,width:g,...j}={}){const A=v`<textarea
    name=text
    readonly=${b}
    disabled=${h}
    required=${s}
    rows=${c}
    minlength=${p}
    maxlength=${m}
    spellcheck=${be(a)}
    autocomplete=${B(r)}
    autocapitalize=${B(o)}
    placeholder=${n}
    onkeydown=${y}
    style=${{width:g,fontFamily:k?"var(--monospace, monospace)":null,resize:$?null:"none"}}
  >`,x=v`<form class="inputs-3a86ea inputs-3a86ea-textarea" style=${_(g)}>
    ${L(t,A)}<div>
      ${A}
    </div>
  </form>`;function y(E){if(j.submit&&E.key==="Enter"&&(E.metaKey||E.ctrlKey))return x.dispatchEvent(new Event("submit",Ae))}return u(y,"g"),i(y,"onkeydown"),Q(x,A,e,j)}u(It,"Gn"),i(It,"textarea");function Ut(e){const t=new EventTarget;return t.value=e,t}u(Ut,"Jn"),i(Ut,"input");function Re(e){return new Promise(t=>{requestAnimationFrame(()=>{const n=e.closest(".observablehq");if(!n)return t();const a=new MutationObserver(()=>{n.contains(e)||(a.disconnect(),t())});a.observe(n,{childList:!0})})})}u(Re,"qe"),i(Re,"disposal");function Rt(e,t,n=Re(e)){const a=He(t),r=i(()=>Ke(e,t),"onsource"),o=i(()=>(Ke(t,e),t.dispatchEvent(new Event(a,Ae))),"ontarget");return r(),e.addEventListener(He(e),o),t.addEventListener(a,r),n.then(()=>t.removeEventListener(a,r)),e}u(Rt,"Qn"),i(Rt,"bind");function Kt(e){switch(e.type){case"range":case"number":return e.valueAsNumber;case"date":return e.valueAsDate;case"checkbox":return e.checked;case"file":return e.multiple?e.files:e.files[0];default:return e.value}}u(Kt,"Vn"),i(Kt,"get");function Ke(e,t){const n=Kt(t);switch(e.type){case"range":case"number":e.valueAsNumber=n;break;case"date":e.valueAsDate=n;break;case"checkbox":e.checked=n;break;case"file":e.multiple?e.files=n:e.files=[n];break;default:e.value=n;break}}u(Ke,"We"),i(Ke,"set");function He(e){switch(e.type){case"button":case"submit":return"click";case"file":return"change";default:return"input"}}u(He,"Ue"),i(He,"eventof");var mn=Object.defineProperty,Be=u((e,t)=>mn(e,"name",{value:t,configurable:!0}),"e");const hn=Be(e=>kt({...e,transform:Ht}),"file");function Ht(e){return new vn(e)}u(Ht,"B"),Be(Ht,"localFile");const Bt=(se=class extends Zt{constructor(t){super(t.name,t.type,t.lastModified,t.size),Object.defineProperty(this,"_",{value:t}),Object.defineProperty(this,"_url",{writable:!0})}get href(){return this._url??=URL.createObjectURL(this._)}async url(){return this.href}async blob(){return this._}async stream(){return this._.stream()}},u(se,"o"),se);Be(Bt,"LocalFile");let vn=Bt;export{Rt as bind,Ye as button,un as checkbox,mt as color,ht as date,vt as datetime,Re as disposal,ct as email,hn as file,bt as form,tn as formatAuto,me as formatDate,pe as formatLocaleAuto,ae as formatLocaleNumber,nn as formatNumber,je as formatTrim,Ut as input,xt as number,pt as password,an as radio,Nt as range,Tt as search,Pe as searchFilter,pn as select,Dt as table,ft as tel,Y as text,It as textarea,it as toggle,dt as url};
