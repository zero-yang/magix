/*3.4.2 Licensed MIT*/KISSY.add("magix",function(n,t,e){var r,i=n.noop,o=n.all,a=function(t,e){n.use(t&&t+h,function(n){e&&e.apply(n,l.call(arguments,1))})},u=n.extend,f=n.isObject,c=n.isArray,s=(n.DOM,function(t,e){n.one(t).html(e),y.fireHandler("htmlchange",{target:t})}),$=0,h="",v=[],l=v.slice,d=",",p=null,m=window,g=document,y=o(g),b="#",w=JSON.stringify,x="\x1e",k="object",V="prototype",q="/",I=/[#?].*$/,A=/([^=&?\/#]+)=?([^&#?]*)/g,S=/(?!^)=|&/,T=function(n){return(n||"mx_")+$++},U=T(),j={rootId:T(),defaultView:U,error:function(n){throw n}},H=j.hasOwnProperty,E=function(n){return typeof n==k?n:g.getElementById(n)},O=function(n,t,e){if(n=E(n),t=E(t),n&&t&&(e=n==t,!e))try{e=t.contains?t.contains(n):16&t.compareDocumentPosition(n)}catch(r){}return e},M=Object.assign||function(n,t,e){for(e in t)n[e]=t[e];return n},C=function(n,t){t&&!C[n]&&(C[n]=1,o("head").append("<style>"+t+"</style>"))},Z=function(n,t,e,r,i,o){for(t=t||v,c(n)||(n=[n]),c(t)||(t=[t]),r=0;o=n[r];r++)try{i=o&&o.apply(e,t)}catch(a){j.error(a)}return i},L=function(n,t){return n&&H.call(n,t)},P=function(n,t){return t.f-n.f||t.t-n.t},R=function(n,t,e,r){r=this,r.c=[],r.b=0|t||5,r.x=r.b+(n||20),r.r=e};M(R[V],{get:function(n){var t=this,e=t.c,r=e[x+n];return r&&(r.f++,r.t=$++,r=r.v),r},each:function(n,t,e,r,i){for(e=this,r=e.c,i=r.length-1;i>-1;i--)n(r[i].v,t,e)},set:function(n,t){var e=this,r=e.c,i=x+n,o=r[i],a=e.b;if(!o){if(r.length>=e.x)for(r.sort(P);a--;)o=r.pop(),o.f>0&&e.del(o.o);o={o:n},r.push(o),r[i]=o}o.v=t,o.f=1,o.t=$++},del:function(n){n=x+n;var t=this.c,e=t[n],r=this.r;e&&(e.f=-1,e.v=h,delete t[n],r&&Z(r,e.o))},has:function(n){return L(this.c,x+n)}});var F,B=new R,D=function(n,t,e){try{e=decodeURIComponent(e)}catch(r){}F[t]=e},K=function(n){var t,e=B.get(n);return e||(F={},t=n.replace(I,h),n==t&&S.test(t)&&(t=h),n.replace(t,h).replace(A,D),B.set(n,e={a:t,b:F})),{path:e.a,params:M({},e.b)}},N=function(n,t,e){var r,i,o,a=[];for(i in t)r=t[i]+h,(!e||r||L(e,i))&&(r=encodeURIComponent(r),a.push(o=i+"="+r));return o&&(n+=(n&&(~n.indexOf("?")?"&":"?"))+a.join("&")),n},J=function(n,t){var e,r,i,o={};if(n&&(i=n.length))for(e=0;e<i;e++)r=n[e],o[t&&r?r[t]:r]=t?r:(0|o[r])+1;return o},Q=Object.keys||function(n,t,e){t=[];for(e in n)L(n,e)&&t.push(e);return t},Y={config:function(n,t){return t=j,n&&(t=f(n)?M(t,n):t[n]),t},boot:function(n){M(j,n),a(j.ini,function(t){M(j,t),M(j,n),a(j.exts,function(){In.on("changed",Ln),$n()})})},toMap:J,toTry:Z,toUrl:N,parseUrl:K,mix:M,has:L,keys:Q,inside:O,node:E,applyStyle:C,guid:T,Cache:R},_="on",z={fire:function(n,t,e,r){var i,o,a,u,f=x+n,c=this,s=c[f];if(t||(t={}),t.type||(t.type=n),s)for(i=s.length,o=i-1;i--;)a=r?i:o-i,u=s[a],u.f?(u.x=1,Z(u.f,t,c),u.x=h):u.x||(s.splice(a,1),o--);s=c[_+n],s&&Z(s,t,c),e&&c.off(n)},on:function(n,t){var e=this,r=x+n,i=e[r]||(e[r]=[]);i.push({f:t})},off:function(n,t){var e,r,i=x+n,o=this,a=o[i];if(t){if(a)for(e=a.length;e--;)if(r=a[e],r.f==t){r.f=h;break}}else delete o[i],delete o[_+n]}};Y.Event=z;var G,W,X,nn,tn,en,rn,on,an=n.isFunction,un=n.one(m),fn=b+"!",cn=function(n,t){n=fn+n,t?mn.replace(n):mn.hash=n},sn=function(n,t,e,r,i){n=N(n,t,i),n!=e.srcHash&&cn(n,r)},$n=function(){var n,t,e=Vn().srcHash;un.on("hashchange",function(r,i){t||(n=Vn().srcHash,n!=e&&(i=function(){r.p=1,e=n,t=h,cn(n),qn()},r={reject:function(){r.p=1,t=h,cn(e)},resolve:i,prevent:function(){t=1}},In.fire("change",r),t||r.p||i()))}),m.onbeforeunload=function(n){n=n||m.event;var t={};if(In.fire("pageunload",t),t.msg)return n&&(n.returnValue=t.msg),t.msg},qn()},hn="path",vn="view",ln="params",dn=new R,pn=new R,mn=m.location,gn={query:{},params:{},href:h},yn=/(?:^.*\/\/[^\/]+|#.*$)/gi,bn=/^[^#]*#?!?/,wn=function(n,t){return t=this[ln],t[n]||h},xn=function(n,t){if(nn||(nn=j.routes||{},tn=j.unmatchView,rn=j.defaultView,on=j.defaultPath||q,en=an(nn),en||nn[on]||(nn[on]=rn)),!n[vn]){var e=n.hash[hn]||G&&n.query[hn]||on;t=en?nn.call(j,e,n):nn[e]||tn||rn,n[hn]=e,n[vn]=t}},kn=function(n,t){var e=n.href,r=t.href,i=e+x+r,o=pn.get(i);if(!o){var a,u,f,c;o={force:!e},o[ln]=c={};var s,$,h=n[ln],v=t[ln],l=[hn,vn].concat(Q(h),Q(v));for(s=l.length-1;s>=0;s--)$=l[s],1==s&&(h=n,v=t,c=o),u=h[$],f=v[$],u!=f&&(c[$]={from:u,to:f},a=1);pn.set(i,o={a:a,b:o})}return o},Vn=function(n){n=n||mn.href;var t,e,r,i,o,a=dn.get(n);return a||(t=n.replace(yn,h),e=n.replace(bn,h),r=K(t),i=K(e),o=M({},r[ln]),M(o,i[ln]),a={get:wn,href:n,srcQuery:t,srcHash:e,query:r,hash:i,params:o},xn(a),dn.set(n,a)),a},qn=function(){var n=Vn(),t=kn(gn,gn=n);return t.a&&(X=gn[ln],In.fire("changed",W=t.b)),W},In=M({parse:Vn,diff:qn,to:function(n,t,e){!t&&f(n)&&(t=n,n=h);var r=K(n),i=r[ln],o=r[hn],a=gn[hn],u=gn.query[ln];if(M(i,t),o){if(!G)for(a in u)L(i,a)||(i[a]=h)}else X&&(o=a,i=M(M({},X),i));sn(o,X=i,gn,e,u)}},z);Y.Router=In;var An,Sn,Tn,Un=function(n,t,e){n.$d||n.$h||n.$cc!=n.$rc||(n.$cr||(n.$cr=1,n.$ca=0,n.fire("created")),t=n.id,e=En[n.pId],e&&!L(e.$r,t)&&(e.$r[t]=1,e.$rc++,Un(e)))},jn=function(n,t,e,r){!n.$ca&&n.$cr&&(n.$cr=0,n.$ca=1,n.fire("alter",t),e=n.id,r=En[n.pId],r&&L(r.$r,e)&&(r.$rc--,delete r.$r[e],jn(r,t)))},Hn=function(n,t){return An||(r=g.body,n=j.rootId,t=E(n),t||(r.id=n),An=new Pn(n)),An},En={},On=function(n,t){L(En,n)||(En[n]=t,Pn.fire("add",{vframe:t}),n=E(n),n&&(n.vframe=t))},Mn=function(n,t,e){for(t=n.$il;t.length;)e=t.shift(),e.r||n.invoke(e.n,e.a),delete t[e.k]},Cn=function(n,t,e){e=En[n],e&&(delete En[n],Pn.fire("remove",{vframe:e,fcc:t}),n=E(n),n&&(n.vframe=p))},Zn=function(n,t){if(n&&n.$g!=Tn&&(t=n.$v)&&t.$s>0){var e=qt(t);e&&t.render();for(var r=n.children(),i=r.length,o=0;o<i;)Zn(En[r[o++]])}},Ln=function(n){var t,e=Hn();(t=n.view)?e.mountView(t.to):(Tn=$++,Zn(e))},Pn=function(n,t,e){e=this,e.id=n,e.$c={},e.$cc=0,e.$rc=0,e.$s=1,e.$r={},e.$il=[],e.pId=t,On(n,e)};M(Pn,M({all:function(){return En},get:function(n){return En[n]}},z)),M(M(Pn[V],z),{mountView:function(n,t){var e,r,i,o=this,u=o.id,f=E(u);if(!o.$a&&f&&(o.$a=1,o.$t=f.innerHTML),o.unmountView(),o.$d=0,f&&n){o.path=n,e=K(n),i=e.path,r=++o.$s;var c,s,$=e.params,h=En[o.pId];if(h=h&&h.$v,h=h&&h.updater,h&&n.indexOf(x)>0)for(c in $)s=$[c],s.charAt(0)==x&&($[c]=h.get(s));M($,t),a(i,function(n){if(r==o.$s){if(!n)return j.error(Error("id:"+u+" cannot load:"+i));kt(n),i=new n({owner:o,id:u},$),o.$v=i,o.$g=Tn,bt(i),i.init($),i.render(),i.$t||i.$p||i.endUpdate()}})}},unmountView:function(){var n,t,e=this,r=e.$v;e.$il=[],r&&(Sn||(t=1,Sn={id:e.id}),e.$d=1,e.unmountZone(),jn(e,Sn),e.$v=0,r.$s>0&&(r.$s=0,r.fire("destroy",0,1,1),mt(r,1),bt(r,1)),r.$s--,r.owner=p,n=E(e.id),n&&e.$a&&s(n,e.$t),t&&(Sn=0)),e.$s++},mountVframe:function(n,t,e){var r,i=this;return jn(i,{id:n}),r=En[n],r||(L(i.$c,n)||(i.$cl=h,i.$cc++),i.$c[n]=n,r=new Pn(n,i.id)),r.mountView(t,e),r},mountZone:function(n,t){var e,r,i,a=this,u=[];n=n||a.id;var f=o(b+n+" [mx-view]");for(a.$h=1,e=0;e<f.length;e++)r=f[e],i=r.id||(r.id=T()),r.$m||(r.$m=1,u.push([i,r.getAttribute("mx-view")]));for(;u.length;)r=u.shift(),i=r[0],u[i]?j.error(Error("vf.id duplicate:"+i+" at "+a.path)):a.mountVframe(u[i]=i,r[1],t);a.$h=0,Un(a)},unmountVframe:function(n,t){var e,r,i,o=this;n=n?o.$c[n]:o.id,e=En[n],e&&(r=e.$cr,i=e.pId,e.unmountView(),Cn(n,r),e.id=e.pId=h,e=En[i],e&&L(e.$c,n)&&(delete e.$c[n],e.$cl=h,e.$cc--,t||Un(e)))},unmountZone:function(n){var t,e=this,r=e.$c;for(t in r)(!n||t!=n&&O(t,n))&&e.unmountVframe(t,1)},parent:function(n,t){for(t=this,n=n>>>0||1;t&&n--;)t=En[t.pId];return t},children:function(n){return n=this,n.$cl||(n.$cl=Q(n.$c))},invoke:function(n,t){var e,r,i,o,a,u=this,f=u.$il;return(r=u.$v)&&r.$p?e=(i=r[n])&&Z(i,t,r):(o=f[a=x+n],o&&(o.r=t==o.a),o={n:n,a:t,k:a},f.push(o),f[a]=o),e}}),Y.Vframe=Pn;var Rn=e.test,Fn=function(n,t){t=this,n.eventTarget=t.e,Z(t.f,n,t.v)},Bn=function(n,e,r,i,o){o?t[(i?"un":h)+"delegate"](n,e,r,o):t[i?"detach":_](n,e,r,o)},Dn="parentNode",Kn=new R(30,10),Nn=/(?:([\w\-]+)\u001e)?([^\(]+)\(([\s\S]*)?\)/,Jn={},Qn={},Yn=function(n,t){var e,r,i,o,a,u,f,c=[],s=n,$=n.getAttribute("mx-"+t),h=[];if($&&(a=Kn.get($),a||(a=$.match(Nn)||v,a={v:a[1],n:a[2],i:a[3]},a.p=a.i&&Z(Function("return "+a.i)),Kn.set($,a)),c.push(a={r:$,v:a.v,p:a.p,n:a.n})),a&&!a.v||Qn[t]){if(n.$v)f=n.$v;else for(h.push(s);s=s[Dn];){if(En[r=s.id]||(r=s.$v)){f=r;break}h.push(s)}if(f){for(;$=h.pop();)$.$v=f;do if(e=En[f],u=e.$v){i=u.$so,o=i[t];for(r in o)Rn(n,r)&&c.push({r:r,v:f,n:r});if(u.$t){a&&!a.v&&(a.v=f);break}}while(f=e.pId)}}return c},_n=function(n){for(var t,e,i,o,a,u,f,c=n.target,s=n.type,$=[];c!=r&&1==c.nodeType;){if(e=Yn(c,s),e.length)for($=[];t=e.pop();)t.v||j.error(Error("bad "+s+":"+t.r)),o=En[t.v],a=o&&o.$v,u=t.n+x+s,f=a[u],f&&(n.eventTarget=c,n.params=t.p||{},Z(f,n,a));if((i=c.$)&&i[s]||n.isPropagationStopped())break;$.push(c),c=c[Dn]||r}for(;c=$.pop();)i=c.$||(c.$={}),i[s]=1},zn=function(n,t,e){var i=0|Jn[n],o=e?-1:1;(!i||e&&1==i)&&Bn(r,n,_n,e),Jn[n]=i+o,t&&(Qn[n]=(0|Qn[n])+o)},Gn=/\\|'/g,Wn=/\r|\n/g,Xn=/<%([@=!])?([\s\S]+?)%>|$/g,nt=function(n){var t=0,e="$p+='";return n.replace(Xn,function(r,i,o,a){return e+=n.slice(t,a).replace(Gn,"\\$&").replace(Wn,"\\n"),t=a+r.length,"@"==i?e+="'\n$s=$i();\n$p+=$s;\n$$[$s]="+o+";\n$p+='":"="==i?e+="'+\n(($t=("+o+"))==null?'':$e($t))+\n'":"!"==i?e+="'+\n(($t=("+o+"))==null?'':$t)+\n'":o&&(e+="';\n"+o+"\n$p+='"),r}),e+="';\n",e="var $t,$p='',$em={'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;','\\'':'&#x27;','`':'&#x60;'},$er=/[&<>\"'`]/g,$ef=function(m){return $em[m]},$e=function(v){return (''+v).replace($er,$ef)},$i=function(){return '"+x+"'+$g++},$s,$eum={'!':'%21','\\'':'%27','(':'%28',')':'%29','*':'%2A'},$euf=function(m){return $eum[m]},$eur=/[!')(*]/g,$eu=function(v){return encodeURIComponent(v).replace($eur,$euf)};\n"+e+"return $p;\n",Function("$g","$$",e)},tt=new R,et=function(n,t){var e=tt.get(n);return e||(e=nt(n),tt.set(n,e)),e(1,t)},rt=/\d+\u001d/g,it=/([\w\-:]+)(?:=(["'])([\s\S]*?)\2)?/g,ot={amp:"&",lt:"<",gt:">",quot:'"',"#x27":"'","#x60":"`"},at=/&([^;]+?);/g,ut=function(n,t){return ot[t]||n},ft=function(n){return!n||typeof n!=k},ct=function(n,t,e,r,i,o,a){var u,f,c,s=n.id||(n.id=T());if(i){var $=dt(et(e.attr,r),a),h={};$.replace(it,function(n,t,e,r){h[t]=r});for(var v,l,d,p,m,g=e.attrs.length-1;g>=0;g--)v=e.attrs[g],l=v.n,m=v.f,v.v?(u=1,f=h[l]):(d=v.p?n[m||l]:n.getAttribute(l),p=v.b?L(h,l):h[l]||"",d!=p&&(v.p?(v.q&&(p=p.replace(at,ut)),n[m||l]=p):p?n.setAttribute(l,p):n.removeAttribute(l)))}u&&(c=En[s],c&&c[f?"unmountView":"unmountVframe"]()),o&&t.setHTML(s,et(e.tmpl,r)),u&&f&&t.owner.mountVframe(s,f)},st=function(n,t,e){var r=En[n.$i],i=r&&r.$v;if(i){var a=i.tmpl,u=a.html,f=a.subs,c=i.id;if(n.$rd&&t)for(var s,$,h,v,l,d,p,m,g=f.length-1;g>=0;g--){if(h=0,v=0,$=f[g],l=1,p=$.mask,s=$.pKeys)for(d=s.length;--d>=0;)if(L(t,s[d])){l=0;break}if(l){for(s=$.keys,d=s.length,l=0;--d>=0;)if(L(t,s[d])){if(l=1,!p||h&&v){h=$.tmpl,v=$.attr;break}m=p.charAt(d),h=h||1&m,v=v||2&m}if(l){var y=o(dt($.path,c));for(d=0;d<y.length;)ct(y[d++],i,$,e,v,h,c,n)}}}else{var b,w,x=function(n){return b[n].tmpl};if(f){if(!f.$)for(f.$=b={},w=f.length;w>0;){var k=f[--w];k.s&&(b[k.s]=k,k.tmpl=k.tmpl.replace(rt,x),delete k.s)}b=f.$}n.$rd=1;var V=u.replace(rt,x);i.setHTML(n.$t,et(V,e))}}},$t=function(n){var t=this;t.$i=n,t.$t=n,t.$data={},t.$keys={}},ht=$t.prototype;M(ht,{to:function(n,t){return t=this,t.$t=n,t},get:function(n){var t=this.$data;return n&&(t=t[n]),t},gain:function(n){for(var t,e=this.$data,r=n.split(".");e&&r.length;)t=r.shift(),e=e[t];return e},set:function(n){var t,e,r=this,i=r.$data,o=r.$keys;for(var a in n)e=n[a],t=i[a],ft(e)&&t==e||(o[a]=1),i[a]=e;return r},digest:function(n){var t=this;n&&t.set(n),n=t.$data;var e=t.$keys;return st(t,e,n),t.$keys={},t},snapshot:function(){var n=this;return n.$ss=w(n.$data),n},altered:function(){var n=this;if(n.$ss)return n.$ss!=w(n.$data)}});var vt=/^(\$?)([^<]+?)<([^>]+)>$/,lt=/\u001f/g,dt=function(n,t){return(n+h).replace(lt,t||this.id)},pt=function(n,t,e){return n.$l?e=n:(e=function(n){Z(e.$l,n,this)},e.$l=[n],e.$m=1),e.$l=e.$l.concat(t.$l||t),e},mt=function(n,t){var e,r,i=n.$r;for(e in i)r=i[e],(t||r.x)&&gt(i,e,1)},gt=function(n,t,e,r){var i,o,a=n[t];return a&&a!=r&&(o=a.e,i=o.destroy,i&&e&&Z(i,v,o),delete n[t]),o},yt=function(n,t,e){t=n.render,n.render=function(){e=this,e.$s>0&&(e.$s++,e.fire("rendercall"),mt(e),Z(t,l.call(arguments),e))}},bt=function(n,t){var e,r,i=n.$eo,o=n.$so;n.id;for(e in i)zn(e,o[e],t);for(i=n.$el,e=i.length;e--;)r=i[e],Bn(r.e,r.n,Fn,t,{i:n.id,v:n,f:r.f,e:r.e})},wt=[],xt={win:m,doc:g},kt=function(n){if(!n[x]){n[x]=1;var t,e,r,i,o,a,u,f,c,s=n[V],$={},h=[],v={};for(u in s)if(t=s[u],e=u.match(vt))for(a=e[1],r=e[2],i=e[3].split(d);f=i.pop();){if(o=xt[r],c=1,a){if(o){h.push({f:t,e:o,n:f});continue}c=2,o=v[f],o||(o=v[f]={}),o[r]=1}$[f]=$[f]|c,f=r+x+f,o=s[f],o?o.$m&&(t.$m?s[f]=pt(o,t):L(s,u)&&(s[f]=t)):s[f]=t}yt(s),s.$eo=$,s.$el=h,s.$so=v,s.$t=!!s.tmpl}},Vt=function(n,t,e){for(var r=0;r<n.length&&!(e=L(t,n[r]));r++);return e},qt=function(n){var t,e=n.$l;return e.f&&(e.p&&(t=W[hn]),t||(t=Vt(e.k,W[ln]))),t},It=function(n,t){t=this,M(t,n),t.$l={k:[]},t.$r={},t.$s=1,t.updater=new $t(t.id),Z(wt,n,t)},At=It[V];M(It,{merge:function(n,t){t=n&&n.ctor,t&&wt.push(t),M(At,n)},extend:function(n,t){var e=this;n=n||{};var r=n.ctor,i=[];r&&i.push(r);var o=function(n,t){e.call(this,n,t),Z(i,t,this)},a=n.mixins;if(a){for(var f,c,s,$,h=a.length,v=0,l={};v<h;){f=a[v++];for(c in f)s=f[c],$=l[c],"ctor"==c?i.push(s):vt.test(c)?($?s=pt($,s):s.$m=1,l[c]=s):$?j.error(Error("mixins duplicate:"+c)):l[c]=s}n=M(l,n)}return o.extend=e.extend,u(o,e,n,t)}}),M(M(At,z),{render:i,init:i,wrapEvent:dt,beginUpdate:function(n,t){t=this,t.$s>0&&t.$p&&(t.owner.unmountZone(n),t.fire("prerender",{id:n}))},endUpdate:function(n,t,e,r){t=this,t.$s>0&&(n=n||t.id,t.fire("rendered",{id:n}),r=t.$p,t.$p=1,e=t.owner,e.mountZone(n),r||setTimeout(t.wrapAsync(function(){Mn(e)}),0))},wrapAsync:function(n,t){var e=this,r=e.$s;return function(){r>0&&r==e.$s&&n&&n.apply(t||e,arguments)}},observe:function(n,t){var e,r,i=this;e=i.$l,e.f=1,r=e.k,f(n)&&(t=n.path,n=n.params),e.p=t,n&&(e.k=r.concat((n+h).split(d)))},capture:function(n,t,e,r,i){return r=this.$r,t?(gt(r,n,1,t),i={e:t,x:e},r[n]=i):(i=r[n],t=i&&i.e||t),t},release:function(n,t){return gt(this.$r,n,t)},leaveTip:function(n,t){var e=this,r=function(i){var o="a",a="b";"change"!=i.type&&(o="b",a="a"),r[o]?(i.prevent(),i.reject()):t()?(i.prevent(),r[a]=1,e.leaveConfirm(n,function(){r[a]=0,i.resolve()},function(){r[a]=0,i.reject()})):i.resolve()},i=function(e){t()&&(e.msg=n)};In.on("change",r),In.on("pageunload",i),e.on("unload",r),e.on("destroy",function(){In.off("change",r),In.off("pageunload",i)})},share:function(n,t){var e=this;e.$sd||(e.$sd={}),e.$sd[n]=t},getShared:function(n){var t,e=this,r=e.$sd;if(r&&(t=L(r,n)))return r[n];var i=e.owner.parent();return i?i.invoke("getShared",n):void 0},setHTML:function(n,t){var e,r=this;r.beginUpdate(n),r.$s>0&&(e=E(n),e&&s(e,dt(t,r.id))),r.endUpdate(n)}}),Y.View=It;var St=n.type,Tt=n.bind,Ut=n.now,jt=function(){this.id=T("b"),this.$={}};M(jt[V],{get:function(n,t,e){var r=this,i=arguments.length,o=i>=2,a=r.$,u=a;if(i){for(var f,s=c(n)?l.call(n):(n+h).split(".");(f=s.shift())&&u;)u=u[f];f&&(u=e)}var $;return o&&($=St(t))!=St(u)&&(j.error(Error("type neq:"+n+" is not a(n) "+$)),u=t),u},set:function(n,t){var e,r=this;f(n)||(e={},e[n]=t,n=e),M(r.$,n)}});var Ht=1,Et=2,Ot=function(n,t,e){e=this[n],e&&(delete this[n],Z(e,t,e.e))},Mt=function(n,t,e,r,i,o){var a=[],u=p,f=0;return function(c,s){var $,h=this;f++;var v=h.$m,l=v.k;a[c+1]=h;var d={bag:h,error:s};if(s)u=s,t.fire("fail",d),$=1;else if(!o.has(l)){l&&o.set(l,h),v.t=Ut();var m=v.a;m&&Z(m,h,h),v.x&&t.clear(v.x),t.fire("done",d),$=1}if(!e.$o){var g=f==r;g&&(e.$b=0,i==Et&&(a[0]=u,Z(n,a,e))),i==Ht&&Z(n,[s?s:p,h,g,c],e)}$&&t.fire("end",d)}},Ct=function(n,t,e,r,i){if(n.$o)return n;if(n.$b)return n.enqueue(function(){Ct(this,t,e,r,i)});n.$b=1;var o=n.constructor,a=o.$r;c(t)||(t=[t]);for(var u,f=t.length,s=Mt(e,o,n,f,r,o.$c),$=0;$<f;$++)if(u=t[$]){var h,v=o.get(u,i),l=v.e,d=l.$m.k,p=Tt(s,l,$);d&&a[d]?a[d].push(p):v.u?(d&&(h=[p],h.e=l,a[d]=h,p=Tt(Ot,a,d)),o.$s(l,p)):p()}return n},Zt=function(){var n=this;n.id=T("s"),n.$q=[]};M(Zt[V],{all:function(n,t){return Ct(this,n,t,Et)},save:function(n,t){return Ct(this,n,t,Et,1)},one:function(n,t){return Ct(this,n,t,Ht)},enqueue:function(n){var t=this;return t.$o||(t.$q.push(n),t.dequeue(t.$a)),t},dequeue:function(){var n=this,t=l.call(arguments);n.$b||n.$o||(n.$b=1,setTimeout(function(){if(n.$b=0,!n.$o){var e=n.$q.shift();e&&Z(e,n.$a=t,n)}},0))},destroy:function(n){n=this,n.$o=1,n.$q=0}});var Lt=function(n,t,e){return e=[w(t),w(n)],e.join(x)},Pt=function(n,t,e,r){r=n&&n.$m,r&&t[r.n]&&e.del(r.k)},Rt=M({add:function(n){var t=this,e=t.$m;c(n)||(n=[n]);for(var r,i,o=n.length-1;o>-1;o--)r=n[o],r&&(i=r.name,r.cache=0|r.cache,e[i]=r)},create:function(n){var t=this,e=t.meta(n),r=0|n.cache||e.cache,i=new jt;i.set(e),i.$m={n:e.name,a:e.after,x:e.cleans,k:r&&Lt(e,n)},f(n)&&i.set(n);var o=e.before;return o&&Z(o,i,i),t.fire("begin",{bag:i}),i},meta:function(n){var t=this,e=t.$m,r=n.name||n,i=e[r];return i||n},get:function(n,t){var e,r,i=this;return t||(e=i.cached(n)),e||(e=i.create(n),r=1),{e:e,u:r}},clear:function(n){this.$c.each(Pt,J((n+h).split(d)))},cached:function(n){var t,e,r=this,i=r.$c,o=r.meta(n),a=0|n.cache||o.cache;if(a&&(e=Lt(o,n)),e){var u=r.$r,f=u[e];f?t=f.e:(t=i.get(e),t&&Ut()-t.$m.t>a&&(i.del(e),t=0))}return t}},z);Zt.extend=function(n,t,e){var r=this,i=function(){r.call(this)};return i.$s=n,i.$c=new R(t,e),i.$r={},i.$m={},u(i,r,p,Rt)},Y.Service=Zt;var Ft=function(n,t){var e=this,r=n&&n.ctor,i=function(){var n=this,t=arguments;e.apply(n,t),r&&r.apply(n,t)};return i.extend=Ft,u(i,e,n,t)};return M(i[V],z),i.extend=Ft,Y.Base=i,n.add(U,function(){return It.extend()}),Y},{requires:["event","node","dom"]});