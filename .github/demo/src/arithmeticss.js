var{getComputedStyle:f,document:h}=globalThis,l=t=>f(h.body).getPropertyValue(t),y=t=>!Number.isNaN(parseInt(l(t),10)),d=t=>t.startsWith("--"),c=(t,e)=>{throw t(`CSS property: ${e}`)},b=(t,{prop:e,value:n})=>t.replaceAll(e,n),g=t=>({prop:t,value:parseInt(l(t),10)}),$=t=>t.split(" ").filter(d),E=t=>l(t)?y(t)?t:c(TypeError,`${t} not numeric`):c(TypeError,`${t} not defined`),i=t=>$(t).map(E).map(g).reduce(b,t,"");var u=t=>{let e=/(?:\-?[\d\.]+)|[-\+\*\/]|\s+/g;if(t!==t.match(e).join(""))throw SyntaxError(`unparsable expression: ${t}`);let n=o=>o.trim(),a=t.match(e).map(n).filter(Boolean),s=a.map(parseFloat),r=[];for(let o=0;o<a.length;o++)s[o]===s[o]?r.push(s[o]):{"+":()=>0,"-":()=>r.push(s[++o]*-1),"*":()=>r.push(r.pop()*s[++o]),"/":()=>r.push(r.pop()/s[++o])}[a[o]]();return r.reduce((o,m)=>o+m)};var p=(t,e,n="?")=>{throw t(`arg${n}: ${e}`)},T=(t,e)=>typeof t=="string"?t.length?t:p(TypeError,"must be non-empty",e):p(TypeError,`must be a string, is: ${typeof t}`,e),q=(t,e)=>u(i(T(t,0),e));export{q as default};
