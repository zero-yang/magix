/*3.4.2 Licensed MIT*/define("magix",["$"],function(n){var t,e=function(){},r=function(n,t){if(n)if(f(n))require(n,t);else try{t(require(n))}catch(e){require([n],t)}else t&&t()},i=function(){},o=function(n,t,e,r,o){return i[x]=t[x],o=new i,E(o,e),E(n,r),o.constructor=n,n[x]=o,n},a=n.isPlainObject,f=n.isArray,u=function(t,e){n(t).html(e),m.triggerHandler({type:"htmlchange",target:t})},c=0,s="",$=[],h=$.slice,v=",",l=null,p=window,d=document,m=n(d),g="#",y=JSON.stringify,w="\x1e",b="object",x="prototype",k="/",q=/[#?].*$/,V=/([^=&?\/#]+)=?([^&#?]*)/g,I=/(?!^)=|&/,A=function(n){return(n||"mx_")+c++},T=A(),S={rootId:A(),defaultView:T,error:function(n){throw n}},U=S.hasOwnProperty,j=function(n){return typeof n==b?n:d.getElementById(n)},H=function(n,t,e){if(n=j(n),t=j(t),n&&t&&(e=n==t,!e))try{e=t.contains?t.contains(n):16&t.compareDocumentPosition(n)}catch(r){}return e},E=Object.assign||function(n,t,e){for(e in t)n[e]=t[e];return n},O=function(t,e){e&&!O[t]&&(O[t]=1,n("head").append("<style>"+e+"</style>"))},C=function(n,t,e,r,i,o){for(t=t||$,f(n)||(n=[n]),f(t)||(t=[t]),r=0;o=n[r];r++)try{i=o&&o.apply(e,t)}catch(a){S.error(a)}return i},M=function(n,t){return n&&U.call(n,t)},P=function(n,t){return t.f-n.f||t.t-n.t},Z=function(n,t,e,r){r=this,r.c=[],r.b=0|t||5,r.x=r.b+(n||20),r.r=e};E(Z[x],{get:function(n){var t=this,e=t.c,r=e[w+n];return r&&(r.f++,r.t=c++,r=r.v),r},each:function(n,t,e,r,i){for(e=this,r=e.c,i=r.length-1;i>-1;i--)n(r[i].v,t,e)},set:function(n,t){var e=this,r=e.c,i=w+n,o=r[i],a=e.b;if(!o){if(r.length>=e.x)for(r.sort(P);a--;)o=r.pop(),o.f>0&&e.del(o.o);o={o:n},r.push(o),r[i]=o}o.v=t,o.f=1,o.t=c++},del:function(n){n=w+n;var t=this.c,e=t[n],r=this.r;e&&(e.f=-1,e.v=s,delete t[n],r&&C(r,e.o))},has:function(n){return M(this.c,w+n)}});var L,R=new Z,F=function(n,t,e){try{e=decodeURIComponent(e)}catch(r){}L[t]=e},B=function(n){var t,e=R.get(n);return e||(L={},t=n.replace(q,s),n==t&&I.test(t)&&(t=s),n.replace(t,s).replace(V,F),R.set(n,e={a:t,b:L})),{path:e.a,params:E({},e.b)}},D=function(n,t,e){var r,i,o,a=[];for(i in t)r=t[i]+s,(!e||r||M(e,i))&&(r=encodeURIComponent(r),a.push(o=i+"="+r));return o&&(n+=(n&&(~n.indexOf("?")?"&":"?"))+a.join("&")),n},N=function(n,t){var e,r,i,o={};if(n&&(i=n.length))for(e=0;e<i;e++)r=n[e],o[t&&r?r[t]:r]=t?r:(0|o[r])+1;return o},z=Object.keys||function(n,t,e){t=[];for(e in n)M(n,e)&&t.push(e);return t},J={config:function(n,t){return t=S,n&&(t=a(n)?E(t,n):t[n]),t},boot:function(n){E(S,n),r(S.ini,function(t){E(S,t),E(S,n),r(S.exts,function(){kn.on("changed",Cn),un()})})},toMap:N,toTry:C,toUrl:D,parseUrl:B,mix:E,has:M,keys:z,inside:H,node:j,applyStyle:O,guid:A,Cache:Z},K="on",Q={fire:function(n,t,e,r){var i,o,a,f,u=w+n,c=this,$=c[u];if(t||(t={}),t.type||(t.type=n),$)for(i=$.length,o=i-1;i--;)a=r?i:o-i,f=$[a],f.f?(f.x=1,C(f.f,t,c),f.x=s):f.x||($.splice(a,1),o--);$=c[K+n],$&&C($,t,c),e&&c.off(n)},on:function(n,t){var e=this,r=w+n,i=e[r]||(e[r]=[]);i.push({f:t})},off:function(n,t){var e,r,i=w+n,o=this,a=o[i];if(t){if(a)for(e=a.length;e--;)if(r=a[e],r.f==t){r.f=s;break}}else delete o[i],delete o[K+n]}};J.Event=Q;var _,G,W,X,Y,nn,tn,en,rn=n.isFunction,on=g+"!",an=function(n,t){n=on+n,t?ln.replace(n):ln.hash=n},fn=function(n,t,e,r,i){n=D(n,t,i),n!=e.srcHash&&an(n,r)},un=function(){var t,e,r=bn().srcHash;n(p).on("hashchange",function(n,i,o){e||(i=bn(),t=i.srcHash,t!=r&&(o=function(){n.p=1,r=t,e=s,an(t),xn()},n={reject:function(){n.p=1,e=s,an(r)},resolve:o,prevent:function(){e=1}},kn.fire("change",n),e||n.p||o()))}),p.onbeforeunload=function(n){n=n||p.event;var t={};if(kn.fire("pageunload",t),t.msg)return n&&(n.returnValue=t.msg),t.msg},xn()},cn="path",sn="view",$n="params",hn=new Z,vn=new Z,ln=p.location,pn={query:{},params:{},href:s},dn=/(?:^.*\/\/[^\/]+|#.*$)/gi,mn=/^[^#]*#?!?/,gn=function(n,t){return t=this[$n],t[n]||s},yn=function(n,t){if(X||(X=S.routes||{},Y=S.unmatchView,tn=S.defaultView,en=S.defaultPath||k,nn=rn(X),nn||X[en]||(X[en]=tn)),!n[sn]){var e=n.hash[cn]||_&&n.query[cn]||en;t=nn?X.call(S,e,n):X[e]||Y||tn,n[cn]=e,n[sn]=t}},wn=function(n,t){var e=n.href,r=t.href,i=e+w+r,o=vn.get(i);if(!o){var a,f,u,c;o={force:!e},o[$n]=c={};var s,$,h=n[$n],v=t[$n],l=[cn,sn].concat(z(h),z(v));for(s=l.length-1;s>=0;s--)$=l[s],1==s&&(h=n,v=t,c=o),f=h[$],u=v[$],f!=u&&(c[$]={from:f,to:u},a=1);vn.set(i,o={a:a,b:o})}return o},bn=function(n){n=n||ln.href;var t,e,r,i,o,a=hn.get(n);return a||(t=n.replace(dn,s),e=n.replace(mn,s),r=B(t),i=B(e),o=E({},r[$n]),E(o,i[$n]),a={get:gn,href:n,srcQuery:t,srcHash:e,query:r,hash:i,params:o},yn(a),hn.set(n,a)),a},xn=function(){var n=bn(),t=wn(pn,pn=n);return t.a&&(W=pn[$n],kn.fire("changed",G=t.b)),G},kn=E({parse:bn,diff:xn,to:function(n,t,e){!t&&a(n)&&(t=n,n=s);var r=B(n),i=r[$n],o=r[cn],f=pn[cn],u=pn.query[$n];if(E(i,t),o){if(!_)for(f in u)M(i,f)||(i[f]=s)}else W&&(o=f,i=E(E({},W),i));fn(o,W=i,pn,e,u)}},Q);J.Router=kn;var qn,Vn,In,An=function(n,t,e){n.$d||n.$h||n.$cc!=n.$rc||(n.$cr||(n.$cr=1,n.$ca=0,n.fire("created")),t=n.id,e=Un[n.pId],e&&!M(e.$r,t)&&(e.$r[t]=1,e.$rc++,An(e)))},Tn=function(n,t,e,r){!n.$ca&&n.$cr&&(n.$cr=0,n.$ca=1,n.fire("alter",t),e=n.id,r=Un[n.pId],r&&M(r.$r,e)&&(r.$rc--,delete r.$r[e],Tn(r,t)))},Sn=function(n,e){return qn||(t=d.body,n=S.rootId,e=j(n),e||(t.id=n),qn=new Mn(n)),qn},Un={},jn=function(n,t){M(Un,n)||(Un[n]=t,Mn.fire("add",{vframe:t}),n=j(n),n&&(n.vframe=t))},Hn=function(n,t,e){for(t=n.$il;t.length;)e=t.shift(),e.r||n.invoke(e.n,e.a),delete t[e.k]},En=function(n,t,e){e=Un[n],e&&(delete Un[n],Mn.fire("remove",{vframe:e,fcc:t}),n=j(n),n&&(n.vframe=l))},On=function(n,t){if(n&&n.$g!=In&&(t=n.$v)&&t.$s>0){var e=kt(t);e&&t.render();for(var r=n.children(),i=r.length,o=0;o<i;)On(Un[r[o++]])}},Cn=function(n){var t,e=Sn();(t=n.view)?e.mountView(t.to):(In=c++,On(e))},Mn=function(n,t,e){e=this,e.id=n,e.$c={},e.$cc=0,e.$rc=0,e.$s=1,e.$r={},e.$il=[],e.pId=t,jn(n,e)};E(Mn,E({all:function(){return Un},get:function(n){return Un[n]}},Q)),E(E(Mn[x],Q),{mountView:function(n,t){var e,i,o,a=this,f=a.id,u=j(f);if(!a.$a&&u&&(a.$a=1,a.$t=u.innerHTML),a.unmountView(),a.$d=0,u&&n){a.path=n,e=B(n),o=e.path,i=++a.$s;var c,s,$=e.params,h=Un[a.pId];if(h=h&&h.$v,h=h&&h.updater,h&&n.indexOf(w)>0)for(c in $)s=$[c],s.charAt(0)==w&&($[c]=h.get(s));E($,t),r(o,function(n){if(i==a.$s){if(!n)return S.error(Error("id:"+f+" cannot load:"+o));bt(n),o=new n({owner:a,id:f},$),a.$v=o,a.$g=In,gt(o),o.init($),o.render(),o.$t||o.$p||o.endUpdate()}})}},unmountView:function(){var n,t,e=this,r=e.$v;e.$il=[],r&&(Vn||(t=1,Vn={id:e.id}),e.$d=1,e.unmountZone(),Tn(e,Vn),e.$v=0,r.$s>0&&(r.$s=0,r.fire("destroy",0,1,1),pt(r,1),gt(r,1)),r.$s--,r.owner=l,n=j(e.id),n&&e.$a&&u(n,e.$t),t&&(Vn=0)),e.$s++},mountVframe:function(n,t,e){var r,i=this;return Tn(i,{id:n}),r=Un[n],r||(M(i.$c,n)||(i.$cl=s,i.$cc++),i.$c[n]=n,r=new Mn(n,i.id)),r.mountView(t,e),r},mountZone:function(t,e){var r,i,o,a=this,f=[];t=t||a.id;var u=n(g+t+" [mx-view]");for(a.$h=1,r=0;r<u.length;r++)i=u[r],o=i.id||(i.id=A()),i.$m||(i.$m=1,f.push([o,i.getAttribute("mx-view")]));for(;f.length;)i=f.shift(),o=i[0],f[o]?S.error(Error("vf.id duplicate:"+o+" at "+a.path)):a.mountVframe(f[o]=o,i[1],e);a.$h=0,An(a)},unmountVframe:function(n,t){var e,r,i,o=this;n=n?o.$c[n]:o.id,e=Un[n],e&&(r=e.$cr,i=e.pId,e.unmountView(),En(n,r),e.id=e.pId=s,e=Un[i],e&&M(e.$c,n)&&(delete e.$c[n],e.$cl=s,e.$cc--,t||An(e)))},unmountZone:function(n){var t,e=this,r=e.$c;for(t in r)(!n||t!=n&&H(t,n))&&e.unmountVframe(t,1)},parent:function(n,t){for(t=this,n=n>>>0||1;t&&n--;)t=Un[t.pId];return t},children:function(n){return n=this,n.$cl||(n.$cl=z(n.$c))},invoke:function(n,t){var e,r,i,o,a,f=this,u=f.$il;return(r=f.$v)&&r.$p?e=(i=r[n])&&C(i,t,r):(o=u[a=w+n],o&&(o.r=t==o.a),o={n:n,a:t,k:a},u.push(o),u[a]=o),e}}),J.Vframe=Mn;var Pn=n.find||n.zepto,Zn=Pn.matchesSelector||Pn.matches,Ln=function(n,t){t=n.data,n.eventTarget=t.e,C(t.f,n,t.v)},Rn=function(t,e,r,i,o){o&&(e+="."+o.i),i?n(t).off(e,r):n(t).on(e,o,r)},Fn="parentNode",Bn=new Z(30,10),Dn=/(?:([\w\-]+)\u001e)?([^\(]+)\(([\s\S]*)?\)/,Nn={},zn={},Jn=function(n,t){var e,r,i,o,a,f,u,c=[],s=n,h=n.getAttribute("mx-"+t),v=[];if(h&&(a=Bn.get(h),a||(a=h.match(Dn)||$,a={v:a[1],n:a[2],i:a[3]},a.p=a.i&&C(Function("return "+a.i)),Bn.set(h,a)),c.push(a={r:h,v:a.v,p:a.p,n:a.n})),a&&!a.v||zn[t]){if(n.$v)u=n.$v;else for(v.push(s);s=s[Fn];){if(Un[r=s.id]||(r=s.$v)){u=r;break}v.push(s)}if(u){for(;h=v.pop();)h.$v=u;do if(e=Un[u],f=e.$v){i=f.$so,o=i[t];for(r in o)Zn(n,r)&&c.push({r:r,v:u,n:r});if(f.$t){a&&!a.v&&(a.v=u);break}}while(u=e.pId)}}return c},Kn=function(n){for(var e,r,i,o,a,f,u,c=n.target,s=n.type,$=[];c!=t&&1==c.nodeType;){if(r=Jn(c,s),r.length)for($=[];e=r.pop();)e.v||S.error(Error("bad "+s+":"+e.r)),o=Un[e.v],a=o&&o.$v,f=e.n+w+s,u=a[f],u&&(n.eventTarget=c,n.params=e.p||{},C(u,n,a));if((i=c.$)&&i[s]||n.isPropagationStopped())break;$.push(c),c=c[Fn]||t}for(;c=$.pop();)i=c.$||(c.$={}),i[s]=1},Qn=function(n,e,r){var i=0|Nn[n],o=r?-1:1;(!i||r&&1==i)&&Rn(t,n,Kn,r),Nn[n]=i+o,e&&(zn[n]=(0|zn[n])+o)},_n=/\\|'/g,Gn=/\r|\n/g,Wn=/<%([@=!])?([\s\S]+?)%>|$/g,Xn=function(n){var t=0,e="$p+='";return n.replace(Wn,function(r,i,o,a){return e+=n.slice(t,a).replace(_n,"\\$&").replace(Gn,"\\n"),t=a+r.length,"@"==i?e+="'\n$s=$i();\n$p+=$s;\n$$[$s]="+o+";\n$p+='":"="==i?e+="'+\n(($t=("+o+"))==null?'':$e($t))+\n'":"!"==i?e+="'+\n(($t=("+o+"))==null?'':$t)+\n'":o&&(e+="';\n"+o+"\n$p+='"),r}),e+="';\n",e="var $t,$p='',$em={'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;','\\'':'&#x27;','`':'&#x60;'},$er=/[&<>\"'`]/g,$ef=function(m){return $em[m]},$e=function(v){return (''+v).replace($er,$ef)},$i=function(){return '"+w+"'+$g++},$s,$eum={'!':'%21','\\'':'%27','(':'%28',')':'%29','*':'%2A'},$euf=function(m){return $eum[m]},$eur=/[!')(*]/g,$eu=function(v){return encodeURIComponent(v).replace($eur,$euf)};\n"+e+"return $p;\n",Function("$g","$$",e)},Yn=new Z,nt=function(n,t){var e=Yn.get(n);return e||(e=Xn(n),Yn.set(n,e)),e(1,t)},tt=/\d+\u001d/g,et=/([\w\-:]+)(?:=(["'])([\s\S]*?)\2)?/g,rt={amp:"&",lt:"<",gt:">",quot:'"',"#x27":"'","#x60":"`"},it=/&([^;]+?);/g,ot=function(n,t){return rt[t]||n},at=function(n){return!n||typeof n!=b},ft=function(n,t,e,r,i,o,a){var f,u,c,s=n.id||(n.id=A());if(i){var $=vt(nt(e.attr,r),a),h={};$.replace(et,function(n,t,e,r){h[t]=r});for(var v,l,p,d,m,g=e.attrs.length-1;g>=0;g--)v=e.attrs[g],l=v.n,m=v.f,v.v?(f=1,u=h[l]):(p=v.p?n[m||l]:n.getAttribute(l),d=v.b?M(h,l):h[l]||"",p!=d&&(v.p?(v.q&&(d=d.replace(it,ot)),n[m||l]=d):d?n.setAttribute(l,d):n.removeAttribute(l)))}f&&(c=Un[s],c&&c[u?"unmountView":"unmountVframe"]()),o&&t.setHTML(s,nt(e.tmpl,r)),f&&u&&t.owner.mountVframe(s,u)},ut=function(t,e,r){var i=Un[t.$i],o=i&&i.$v;if(o){var a=o.tmpl,f=a.html,u=a.subs,c=o.id;if(t.$rd&&e)for(var s,$,h,v,l,p,d,m,g=u.length-1;g>=0;g--){if(h=0,v=0,$=u[g],l=1,d=$.mask,s=$.pKeys)for(p=s.length;--p>=0;)if(M(e,s[p])){l=0;break}if(l){for(s=$.keys,p=s.length,l=0;--p>=0;)if(M(e,s[p])){if(l=1,!d||h&&v){h=$.tmpl,v=$.attr;break}m=d.charAt(p),h=h||1&m,v=v||2&m}if(l){var y=n(vt($.path,c));for(p=0;p<y.length;)ft(y[p++],o,$,r,v,h,c,t)}}}else{var w,b,x=function(n){return w[n].tmpl};if(u){if(!u.$)for(u.$=w={},b=u.length;b>0;){var k=u[--b];k.s&&(w[k.s]=k,k.tmpl=k.tmpl.replace(tt,x),delete k.s)}w=u.$}t.$rd=1;var q=f.replace(tt,x);o.setHTML(t.$t,nt(q,r))}}},ct=function(n){var t=this;t.$i=n,t.$t=n,t.$data={},t.$keys={}},st=ct.prototype;E(st,{to:function(n,t){return t=this,t.$t=n,t},get:function(n){var t=this.$data;return n&&(t=t[n]),t},gain:function(n){for(var t,e=this.$data,r=n.split(".");e&&r.length;)t=r.shift(),e=e[t];return e},set:function(n){var t,e,r=this,i=r.$data,o=r.$keys;for(var a in n)e=n[a],t=i[a],at(e)&&t==e||(o[a]=1),i[a]=e;return r},digest:function(n){var t=this;n&&t.set(n),n=t.$data;var e=t.$keys;return ut(t,e,n),t.$keys={},t},snapshot:function(){var n=this;return n.$ss=y(n.$data),n},altered:function(){var n=this;if(n.$ss)return n.$ss!=y(n.$data)}});var $t=/^(\$?)([^<]+?)<([^>]+)>$/,ht=/\u001f/g,vt=function(n,t){return(n+s).replace(ht,t||this.id)},lt=function(n,t,e){return n.$l?e=n:(e=function(n){C(e.$l,n,this)},e.$l=[n],e.$m=1),e.$l=e.$l.concat(t.$l||t),e},pt=function(n,t){var e,r,i=n.$r;for(e in i)r=i[e],(t||r.x)&&dt(i,e,1)},dt=function(n,t,e,r){var i,o,a=n[t];return a&&a!=r&&(o=a.e,i=o.destroy,i&&e&&C(i,$,o),delete n[t]),o},mt=function(n,t,e){t=n.render,n.render=function(){e=this,e.$s>0&&(e.$s++,e.fire("rendercall"),pt(e),C(t,h.call(arguments),e))}},gt=function(n,t){var e,r,i=n.$eo,o=n.$so;n.id;for(e in i)Qn(e,o[e],t);for(i=n.$el,e=i.length;e--;)r=i[e],Rn(r.e,r.n,Ln,t,{i:n.id,v:n,f:r.f,e:r.e})},yt=[],wt={win:p,doc:d},bt=function(n){if(!n[w]){n[w]=1;var t,e,r,i,o,a,f,u,c,s=n[x],$={},h=[],l={};for(f in s)if(t=s[f],e=f.match($t))for(a=e[1],r=e[2],i=e[3].split(v);u=i.pop();){if(o=wt[r],c=1,a){if(o){h.push({f:t,e:o,n:u});continue}c=2,o=l[u],o||(o=l[u]={}),o[r]=1}$[u]=$[u]|c,u=r+w+u,o=s[u],o?o.$m&&(t.$m?s[u]=lt(o,t):M(s,f)&&(s[u]=t)):s[u]=t}mt(s),s.$eo=$,s.$el=h,s.$so=l,s.$t=!!s.tmpl}},xt=function(n,t,e){for(var r=0;r<n.length&&!(e=M(t,n[r]));r++);return e},kt=function(n){var t,e=n.$l;return e.f&&(e.p&&(t=G[cn]),t||(t=xt(e.k,G[$n]))),t},qt=function(n,t){t=this,E(t,n),t.$l={k:[]},t.$r={},t.$s=1,t.updater=new ct(t.id),C(yt,n,t)},Vt=qt[x];E(qt,{merge:function(n,t){t=n&&n.ctor,t&&yt.push(t),E(Vt,n)},extend:function(n,t){var e=this;n=n||{};var r=n.ctor,i=[];r&&i.push(r);var a=function(n,t){e.call(this,n,t),C(i,t,this)},f=n.mixins;if(f){for(var u,c,s,$,h=f.length,v=0,l={};v<h;){u=f[v++];for(c in u)s=u[c],$=l[c],"ctor"==c?i.push(s):$t.test(c)?($?s=lt($,s):s.$m=1,l[c]=s):$?S.error(Error("mixins duplicate:"+c)):l[c]=s}n=E(l,n)}return a.extend=e.extend,o(a,e,n,t)}}),E(E(Vt,Q),{render:e,init:e,wrapEvent:vt,beginUpdate:function(n,t){t=this,t.$s>0&&t.$p&&(t.owner.unmountZone(n),t.fire("prerender",{id:n}))},endUpdate:function(n,t,e,r){t=this,t.$s>0&&(n=n||t.id,t.fire("rendered",{id:n}),r=t.$p,t.$p=1,e=t.owner,e.mountZone(n),r||setTimeout(t.wrapAsync(function(){Hn(e)}),0))},wrapAsync:function(n,t){var e=this,r=e.$s;return function(){r>0&&r==e.$s&&n&&n.apply(t||e,arguments)}},observe:function(n,t){var e,r,i=this;e=i.$l,e.f=1,r=e.k,a(n)&&(t=n.path,n=n.params),e.p=t,n&&(e.k=r.concat((n+s).split(v)))},capture:function(n,t,e,r,i){return r=this.$r,t?(dt(r,n,1,t),i={e:t,x:e},r[n]=i):(i=r[n],t=i&&i.e||t),t},release:function(n,t){return dt(this.$r,n,t)},leaveTip:function(n,t){var e=this,r=function(i){var o="a",a="b";"change"!=i.type&&(o="b",a="a"),r[o]?(i.prevent(),i.reject()):t()?(i.prevent(),r[a]=1,e.leaveConfirm(n,function(){r[a]=0,i.resolve()},function(){r[a]=0,i.reject()})):i.resolve()},i=function(e){t()&&(e.msg=n)};kn.on("change",r),kn.on("pageunload",i),e.on("unload",r),e.on("destroy",function(){kn.off("change",r),kn.off("pageunload",i)})},share:function(n,t){var e=this;e.$sd||(e.$sd={}),e.$sd[n]=t},getShared:function(n){var t,e=this,r=e.$sd;if(r&&(t=M(r,n)))return r[n];var i=e.owner.parent();return i?i.invoke("getShared",n):void 0},setHTML:function(n,t){var e,r=this;r.beginUpdate(n),r.$s>0&&(e=j(n),e&&u(e,vt(t,r.id))),r.endUpdate(n)}}),J.View=qt;var It=n.type,At=n.proxy,Tt=n.now||Date.now,St=function(){this.id=A("b"),this.$={}};E(St[x],{get:function(n,t,e){var r=this,i=arguments.length,o=i>=2,a=r.$,u=a;if(i){for(var c,$=f(n)?h.call(n):(n+s).split(".");(c=$.shift())&&u;)u=u[c];c&&(u=e)}var v;return o&&(v=It(t))!=It(u)&&(S.error(Error("type neq:"+n+" is not a(n) "+v)),u=t),u},set:function(n,t){var e,r=this;a(n)||(e={},e[n]=t,n=e),E(r.$,n)}});var Ut=1,jt=2,Ht=function(n,t,e){e=this[n],e&&(delete this[n],C(e,t,e.e))},Et=function(n,t,e,r,i,o){var a=[],f=l,u=0;return function(c,s){var $,h=this;u++;var v=h.$m,p=v.k;a[c+1]=h;var d={bag:h,error:s};if(s)f=s,t.fire("fail",d),$=1;else if(!o.has(p)){p&&o.set(p,h),v.t=Tt();var m=v.a;m&&C(m,h,h),v.x&&t.clear(v.x),t.fire("done",d),$=1}if(!e.$o){var g=u==r;g&&(e.$b=0,i==jt&&(a[0]=f,C(n,a,e))),i==Ut&&C(n,[s?s:l,h,g,c],e)}$&&t.fire("end",d)}},Ot=function(n,t,e,r,i){if(n.$o)return n;if(n.$b)return n.enqueue(function(){Ot(this,t,e,r,i)});n.$b=1;var o=n.constructor,a=o.$r;f(t)||(t=[t]);for(var u,c=t.length,s=Et(e,o,n,c,r,o.$c),$=0;$<c;$++)if(u=t[$]){var h,v=o.get(u,i),l=v.e,p=l.$m.k,d=At(s,l,$);p&&a[p]?a[p].push(d):v.u?(p&&(h=[d],h.e=l,a[p]=h,d=At(Ht,a,p)),o.$s(l,d)):d()}return n},Ct=function(){var n=this;n.id=A("s"),n.$q=[]};E(Ct[x],{all:function(n,t){return Ot(this,n,t,jt)},save:function(n,t){return Ot(this,n,t,jt,1)},one:function(n,t){return Ot(this,n,t,Ut)},enqueue:function(n){var t=this;return t.$o||(t.$q.push(n),t.dequeue(t.$a)),t},dequeue:function(){var n=this,t=h.call(arguments);n.$b||n.$o||(n.$b=1,setTimeout(function(){if(n.$b=0,!n.$o){var e=n.$q.shift();e&&C(e,n.$a=t,n)}},0))},destroy:function(n){n=this,n.$o=1,n.$q=0}});var Mt=function(n,t,e){return e=[y(t),y(n)],e.join(w)},Pt=function(n,t,e,r){r=n&&n.$m,r&&t[r.n]&&e.del(r.k)},Zt=E({add:function(n){var t=this,e=t.$m;f(n)||(n=[n]);for(var r,i,o=n.length-1;o>-1;o--)r=n[o],r&&(i=r.name,r.cache=0|r.cache,e[i]=r)},create:function(n){var t=this,e=t.meta(n),r=0|n.cache||e.cache,i=new St;i.set(e),i.$m={n:e.name,a:e.after,x:e.cleans,k:r&&Mt(e,n)},a(n)&&i.set(n);var o=e.before;return o&&C(o,i,i),t.fire("begin",{bag:i}),i},meta:function(n){var t=this,e=t.$m,r=n.name||n,i=e[r];return i||n},get:function(n,t){var e,r,i=this;return t||(e=i.cached(n)),e||(e=i.create(n),r=1),{e:e,u:r}},clear:function(n){this.$c.each(Pt,N((n+s).split(v)))},cached:function(n){var t,e,r=this,i=r.$c,o=r.meta(n),a=0|n.cache||o.cache;if(a&&(e=Mt(o,n)),e){var f=r.$r,u=f[e];u?t=u.e:(t=i.get(e),t&&Tt()-t.$m.t>a&&(i.del(e),t=0))}return t}},Q);Ct.extend=function(n,t,e){var r=this,i=function(){r.call(this)};return i.$s=n,i.$c=new Z(t,e),i.$r={},i.$m={},o(i,r,l,Zt)},J.Service=Ct;var Lt=function(n,t){var e=this,r=n&&n.ctor,i=function(){var n=this,t=arguments;e.apply(n,t),r&&r.apply(n,t)};return i.extend=Lt,o(i,e,n,t)};return E(e[x],Q),e.extend=Lt,J.Base=e,define(T,function(){return qt.extend()}),J});