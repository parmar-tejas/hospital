//------Below this only IE 7 libs
(function(n){function K(p,q){function s(a){if(s[a]!==v)return s[a];var c;if("bug-string-char-index"==a)c="a"!="a"[0];else if("json"==a)c=s("json-stringify")&&s("json-parse");else{var e;if("json-stringify"==a){c=q.stringify;var b="function"==typeof c&&r;if(b){(e=function(){return 1}).toJSON=e;try{b="0"===c(0)&&"0"===c(new A)&&'""'==c(new B)&&c(t)===v&&c(v)===v&&c()===v&&"1"===c(e)&&"[1]"==c([e])&&"[null]"==c([v])&&"null"==c(null)&&"[null,null,null]"==c([v,t,null])&&'{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}'==
c({a:[e,!0,!1,null,"\x00\b\n\f\r\t"]})&&"1"===c(null,e)&&"[\n 1,\n 2\n]"==c([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==c(new D(-864E13))&&'"+275760-09-13T00:00:00.000Z"'==c(new D(864E13))&&'"-000001-01-01T00:00:00.000Z"'==c(new D(-621987552E5))&&'"1969-12-31T23:59:59.999Z"'==c(new D(-1))}catch(f){b=!1}}c=b}if("json-parse"==a){c=q.parse;if("function"==typeof c)try{if(0===c("0")&&!c(!1)){e=c('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');var l=5==e.a.length&&1===e.a[0];if(l){try{l=!c('"\t"')}catch(d){}if(l)try{l=
1!==c("01")}catch(h){}if(l)try{l=1!==c("1.")}catch(m){}}}}catch(X){l=!1}c=l}}return s[a]=!!c}p||(p=n.Object());q||(q=n.Object());var A=p.Number||n.Number,B=p.String||n.String,G=p.Object||n.Object,D=p.Date||n.Date,J=p.SyntaxError||n.SyntaxError,N=p.TypeError||n.TypeError,R=p.Math||n.Math,H=p.JSON||n.JSON;"object"==typeof H&&H&&(q.stringify=H.stringify,q.parse=H.parse);var G=G.prototype,t=G.toString,u,C,v,r=new D(-0xc782b5b800cec);try{r=-109252==r.getUTCFullYear()&&0===r.getUTCMonth()&&1===r.getUTCDate()&&
10==r.getUTCHours()&&37==r.getUTCMinutes()&&6==r.getUTCSeconds()&&708==r.getUTCMilliseconds()}catch(Y){}if(!s("json")){var E=s("bug-string-char-index");if(!r)var w=R.floor,S=[0,31,59,90,120,151,181,212,243,273,304,334],F=function(a,c){return S[c]+365*(a-1970)+w((a-1969+(c=+(1<c)))/4)-w((a-1901+c)/100)+w((a-1601+c)/400)};(u=G.hasOwnProperty)||(u=function(a){var c={},e;(c.__proto__=null,c.__proto__={toString:1},c).toString!=t?u=function(a){var c=this.__proto__;a=a in(this.__proto__=null,this);this.__proto__=
c;return a}:(e=c.constructor,u=function(a){var c=(this.constructor||e).prototype;return a in this&&!(a in c&&this[a]===c[a])});c=null;return u.call(this,a)});var T={"boolean":1,number:1,string:1,undefined:1};C=function(a,c){var e=0,b,f,l;(b=function(){this.valueOf=0}).prototype.valueOf=0;f=new b;for(l in f)u.call(f,l)&&e++;b=f=null;e?C=2==e?function(a,c){var e={},b="[object Function]"==t.call(a),f;for(f in a)b&&"prototype"==f||u.call(e,f)||!(e[f]=1)||!u.call(a,f)||c(f)}:function(a,c){var e="[object Function]"==
t.call(a),b,f;for(b in a)e&&"prototype"==b||!u.call(a,b)||(f="constructor"===b)||c(b);(f||u.call(a,b="constructor"))&&c(b)}:(f="valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "),C=function(a,c){var e="[object Function]"==t.call(a),b,g;if(g=!e)if(g="function"!=typeof a.constructor)g=typeof a.hasOwnProperty,g="object"==g?!!a.hasOwnProperty:!T[g];g=g?a.hasOwnProperty:u;for(b in a)e&&"prototype"==b||!g.call(a,b)||c(b);for(e=f.length;b=f[--e];g.call(a,
b)&&c(b));});return C(a,c)};if(!s("json-stringify")){var U={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},x=function(a,c){return("000000"+(c||0)).slice(-a)},O=function(a){for(var c='"',b=0,g=a.length,f=!E||10<g,l=f&&(E?a.split(""):a);b<g;b++){var d=a.charCodeAt(b);switch(d){case 8:case 9:case 10:case 12:case 13:case 34:case 92:c+=U[d];break;default:if(32>d){c+="\\u00"+x(2,d.toString(16));break}c+=f?l[b]:a.charAt(b)}}return c+'"'},L=function(a,c,b,g,f,l,d){var h,m,k,n,p,q,r,s,y;try{h=
c[a]}catch(z){}if("object"==typeof h&&h)if(m=t.call(h),"[object Date]"!=m||u.call(h,"toJSON"))"function"==typeof h.toJSON&&("[object Number]"!=m&&"[object String]"!=m&&"[object Array]"!=m||u.call(h,"toJSON"))&&(h=h.toJSON(a));else if(h>-1/0&&h<1/0){if(F){n=w(h/864E5);for(m=w(n/365.2425)+1970-1;F(m+1,0)<=n;m++);for(k=w((n-F(m,0))/30.42);F(m,k+1)<=n;k++);n=1+n-F(m,k);p=(h%864E5+864E5)%864E5;q=w(p/36E5)%24;r=w(p/6E4)%60;s=w(p/1E3)%60;p%=1E3}else m=h.getUTCFullYear(),k=h.getUTCMonth(),n=h.getUTCDate(),
q=h.getUTCHours(),r=h.getUTCMinutes(),s=h.getUTCSeconds(),p=h.getUTCMilliseconds();h=(0>=m||1E4<=m?(0>m?"-":"+")+x(6,0>m?-m:m):x(4,m))+"-"+x(2,k+1)+"-"+x(2,n)+"T"+x(2,q)+":"+x(2,r)+":"+x(2,s)+"."+x(3,p)+"Z"}else h=null;b&&(h=b.call(c,a,h));if(null===h)return"null";m=t.call(h);if("[object Boolean]"==m)return""+h;if("[object Number]"==m)return h>-1/0&&h<1/0?""+h:"null";if("[object String]"==m)return O(""+h);if("object"==typeof h){for(a=d.length;a--;)if(d[a]===h)throw N();d.push(h);y=[];c=l;l+=f;if("[object Array]"==
m){k=0;for(a=h.length;k<a;k++)m=L(k,h,b,g,f,l,d),y.push(m===v?"null":m);a=y.length?f?"[\n"+l+y.join(",\n"+l)+"\n"+c+"]":"["+y.join(",")+"]":"[]"}else C(g||h,function(a){var c=L(a,h,b,g,f,l,d);c!==v&&y.push(O(a)+":"+(f?" ":"")+c)}),a=y.length?f?"{\n"+l+y.join(",\n"+l)+"\n"+c+"}":"{"+y.join(",")+"}":"{}";d.pop();return a}};q.stringify=function(a,c,b){var g,f,l,d;if("function"==typeof c||"object"==typeof c&&c)if("[object Function]"==(d=t.call(c)))f=c;else if("[object Array]"==d){l={};for(var h=0,m=c.length,
k;h<m;k=c[h++],(d=t.call(k),"[object String]"==d||"[object Number]"==d)&&(l[k]=1));}if(b)if("[object Number]"==(d=t.call(b))){if(0<(b-=b%1))for(g="",10<b&&(b=10);g.length<b;g+=" ");}else"[object String]"==d&&(g=10>=b.length?b:b.slice(0,10));return L("",(k={},k[""]=a,k),f,l,g,"",[])}}if(!s("json-parse")){var V=B.fromCharCode,W={92:"\\",34:'"',47:"/",98:"\b",116:"\t",110:"\n",102:"\f",114:"\r"},b,I,k=function(){b=I=null;throw J();},z=function(){for(var a=I,c=a.length,e,g,f,l,d;b<c;)switch(d=a.charCodeAt(b),
d){case 9:case 10:case 13:case 32:b++;break;case 123:case 125:case 91:case 93:case 58:case 44:return e=E?a.charAt(b):a[b],b++,e;case 34:e="@";for(b++;b<c;)if(d=a.charCodeAt(b),32>d)k();else if(92==d)switch(d=a.charCodeAt(++b),d){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:e+=W[d];b++;break;case 117:g=++b;for(f=b+4;b<f;b++)d=a.charCodeAt(b),48<=d&&57>=d||97<=d&&102>=d||65<=d&&70>=d||k();e+=V("0x"+a.slice(g,b));break;default:k()}else{if(34==d)break;d=a.charCodeAt(b);for(g=b;32<=
d&&92!=d&&34!=d;)d=a.charCodeAt(++b);e+=a.slice(g,b)}if(34==a.charCodeAt(b))return b++,e;k();default:g=b;45==d&&(l=!0,d=a.charCodeAt(++b));if(48<=d&&57>=d){for(48==d&&(d=a.charCodeAt(b+1),48<=d&&57>=d)&&k();b<c&&(d=a.charCodeAt(b),48<=d&&57>=d);b++);if(46==a.charCodeAt(b)){for(f=++b;f<c&&(d=a.charCodeAt(f),48<=d&&57>=d);f++);f==b&&k();b=f}d=a.charCodeAt(b);if(101==d||69==d){d=a.charCodeAt(++b);43!=d&&45!=d||b++;for(f=b;f<c&&(d=a.charCodeAt(f),48<=d&&57>=d);f++);f==b&&k();b=f}return+a.slice(g,b)}l&&
k();if("true"==a.slice(b,b+4))return b+=4,!0;if("false"==a.slice(b,b+5))return b+=5,!1;if("null"==a.slice(b,b+4))return b+=4,null;k()}return"$"},M=function(a){var c,b;"$"==a&&k();if("string"==typeof a){if("@"==(E?a.charAt(0):a[0]))return a.slice(1);if("["==a){for(c=[];;b||(b=!0)){a=z();if("]"==a)break;b&&(","==a?(a=z(),"]"==a&&k()):k());","==a&&k();c.push(M(a))}return c}if("{"==a){for(c={};;b||(b=!0)){a=z();if("}"==a)break;b&&(","==a?(a=z(),"}"==a&&k()):k());","!=a&&"string"==typeof a&&"@"==(E?a.charAt(0):
a[0])&&":"==z()||k();c[a.slice(1)]=M(z())}return c}k()}return a},Q=function(a,b,e){e=P(a,b,e);e===v?delete a[b]:a[b]=e},P=function(a,b,e){var g=a[b],f;if("object"==typeof g&&g)if("[object Array]"==t.call(g))for(f=g.length;f--;)Q(g,f,e);else C(g,function(a){Q(g,a,e)});return e.call(a,b,g)};q.parse=function(a,c){var e,g;b=0;I=""+a;e=M(z());"$"!=z()&&k();b=I=null;return c&&"[object Function]"==t.call(c)?P((g={},g[""]=e,g),"",c):e}}}q.runInContext=K;return q}var J=typeof define==="function"&&define.amd,
A="object"==typeof global&&global;!A||A.global!==A&&A.window!==A||(n=A);if("object"!=typeof exports||!exports||exports.nodeType||J){var N=n.JSON,B=K(n,n.JSON3={noConflict:function(){n.JSON=N;return B}});n.JSON={parse:B.parse,stringify:B.stringify}}else K(n,exports);J&&define(function(){return B})})(this);

//------------Above this only IE 7 libs-----
projectFolderRoot='emr';tblColorAlpha=1;gmbProp={widthMultiple:1};
Array.prototype.isArray=true;Date.prototype.isDate=true;String.prototype.isString=true;
function isNumber(v){if(v===null)return false;var t=v*1;if(t.toString()=='NaN')return false;if(v.toString().search(/[0-9]/i)<0)return false;return true;}
if(typeof NodeList != "undefined")NodeList.prototype.isNodeList=true;
String.prototype.splice=function(i,d,r){return this.slice(0,i)+(r||'')+this.slice(i+Math.abs(d));};
Array.prototype.distinct=function(f,skip,skipField){
	var g=this,lx=g.length,i=-1,r=[],k={},s=skip||0,v=0,f2=skipField||0;
	if(f){while(++i<lx){v=g[i][f];if(s)if(skip.indexOf(f2?g[i][f2]:v)>=0)continue;k[v]=1;}}
	else {while(++i<lx){v=g[i];if(s)if(skip.indexOf(v)>=0)continue;k[v]=1;}}
	for(x in k)r.push(x);return r;
};
function GDP(p,idp,cl,sdt,f,e){//{s={w:,h:,aw:,ah:} e:{evt:,handler}
	var g=this;
	g.pv=[{r:/\b(today|now)\b/,t:0},{r:/\btomorrow\b/,t:1},{r:/\byesterday\b/,t:-1}];for(var i=0,lx=g.pv.length;i<lx;i++)g.pv[i].r=new RegExp(g.pv[i].r);
	g.td=[{r:/\blate\s(afternoon|afti|noon)\b/,t:14},{r:/\b(afternoon|afti|noon)\b/,t:12},{r:/\blate\s(morning)\b/,t:11},{r:/\b(morning)\b/,t:9},{r:/\blate\sevening\b/,t:19},{r:/\bevening\b/,t:17},{r:/\blate\snight\b/,t:22},{r:/\bnight\b/,t:20}];for(i=0,lx=g.td.length;i<lx;i++)g.td[i].r=new RegExp(g.td[i].r);
	g.pvr=[{r:'day(s)*',t:'d$1'},{r:'hr(s)*|hour(s)*',t:'h$1'},{r:'min(ute)*(s)*',t:'m$1'},{r:'(week|wk)(s)*',t:'d$7'},{r:'(month|mth)(s)*',t:'M$1'},{r:'(weekday|wkday|working\sday)(s)*',t:'wd'},{r:'(year|yr)(s)*',t:'y$1'},{r:'decade(s)*',t:'y$10'},{r:'fortnight(s)*',t:'d$15'},{r:'(quarter|qtr)(s)*',t:'M$3'}];
	g.np=[{r:'(next|nxt)+',v:1,d:1},{r:'(previous|prev)+',v:-1,d:1},{r:'(last)+',v:-1,d:1},{r:'(past)+',v:-1,d:1},{r:'(from)+',v:1,d:0},{r:'(after)+',v:1,d:0},{r:'(before)+',v:-1,d:0},{r:'(later)+',v:1,d:0},{r:'(ago)+',v:-1,d:0},{r:'(this)+',v:0,d:-2}];
	g.tz=[{r:/\bgmt\b/,v:0},{r:/\bist\b/,v:-5.5},{r:/\best\b/,v:5},{r:/\bedt\b/,v:4},{r:/\bpdt\b/,v:7},{r:/\bpst\b/,v:8},{r:/\bsgt\b/,v:-8},{r:/\bcet\b/,v:-1},{r:/\bhkt\b/,v:-8},{r:/\bcst\b/,v:6},{r:/\beat\b/,v:-3},{r:/\bcat\b/,v:-2},{r:/\beet\b/,v:-2},{r:/\bhst\b/,v:10},{r:/\bmst\b/,v:-8},{r:/\btha\b/,v:-7}];for(i=0,lx=g.tz.length;i<lx;i++)g.tz[i].r=new RegExp(g.tz[i].r);
	g.p=p.isString?gi(p):p;if(!g.p)return;g.f=f;g.idp=idp;g.cl=cl;g.e=e?e:[];g.dt=sdt.isArray?sdt:sdt.isDate?[sdt]:[new Date()];g.sdt=g.dt;
	var d1=ce('div','gdpt'+g.idp,g.p);d1.className='gdpt'+g.cl;d1.style.position='relative';g.gdpt=d1;var d2=ce('input','gdp1'+g.idp,d1);d2.className='gdp1'+g.cl;d2.autocomplete='off';d2.type='text';d2.style.position='absolute';d2.style.top=0;d2.style.left=0;g.gdp1=d2;
	d2=ce('input','gdp2'+g.idp,d1);d2.type='text';d2.className='gdp2'+g.cl;d2.style.display='none';d2.style.position='absolute';d2.style.cursor='pointer';g.gdp2=d2;
	g.f1=function(e){return g.focus(e);};g.b1=function(e){return g.blur(e);};g.k1=function(e){return g.ku(e);};g.ts=0;
	aeh(g.gdp1,'focus',g.f1);aeh(g.gdp1,'blur',g.b1);aeh(g.gdp1,'keyup',g.k1);if(g.e.click)aeh(g.gdp2,'click',function(e){g.e.click.apply(g,[g.idp]);});
	g.assign(g.gdp1);
};
GDP.prototype.clean=function(){var g=this;reh(g.gdp1,'focus',g.f1);reh(g.gdp1,'blur',g.b1);reh(g.gdp1,'keyup',g.k1);if(g.e.click)reh(g.gdp2,'click',function(e){g.e.click.apply(g,[g.idp]);});del(gi('gdpt'+g.idp));};
GDP.prototype.assign=function(c){var g=this,s="";g.dm=0;if(!g.dt.length)g.dt=g.sdt;for(var i=0;i<g.dt.length;i++){if(!g.dt[i].isDate)g.dm=1;}for(i=0;i<g.dt.length;i++)s+=(i>0?!g.csv?' to ':', ':'')+(g.dt[i]?(g.dm?g.dt[i]:g.dt[i].format(g.f||(g.time?'h:I A':'d M Y'))):"");c.value=s;};
GDP.prototype.focus=function(e){var g=this;g.gdp2.style.display="block";g.gdp1.value="";g.gdp2.value=new Date().format(g.f);};
GDP.prototype.blur=function(e){var g=this;g.gdp2.style.display="none";g.assign(g.gdp1);};
GDP.prototype.ku=function(e){
	var g=this;g.dt=[];g.time=0;s=g.gdp1.value.toLowerCase();g.csv=!!~s.search(',')?1:0;s=s.split(/(\sto\s|\s-\s|,)+/);
	for(var i=0;i<s.length;i++){if(i%2||!s[i])continue;g.dt.push(g.gd(s[i]));if(g.time)g.time=1.5;}g.assign(g.gdp2);
	if(fkey(e)==13){g.gdp1.blur();if(g.e.enter)g.e.enter.apply(g,[{dt:g.dt,time:g.time}]);}
};
GDP.prototype.procStr=function(s){
	var g=this;g.dt=[];g.time=0;g.csv=!!~s.search(',')?1:0;s=s.split(/(\sto\s|\s-\s)+/);
	for(var i=0;i<s.length;i++){if(i%2||!s[i])continue;g.dt.push(g.gd(s[i]));if(g.time)g.time=1.5;}return {dt:g.dt,time:g.time};
}
GDP.prototype.fn=function(s){
	var r='',x='',c=0,t=s.search(/(~\s*[0-9]+\s*~)/);if(t>-1)for(var i=t+1,lx=s.length;i<=lx;i++){x=s.charAt(i);if(/[0-9]+/.test(x))r=r+x;if(x=='~'){s=s.substring(i);return r==''?false:[s,r];}}
	t=s.search(/([0-9]+\s*~[a-z]*\s*~)/);if(t>-1)for(i=t,lx=s.length;i<=lx;i++){x=s.charAt(i);if(/[0-9]+/.test(x))r=r+x;if(x=='~')c++;if(c==2){s=s.substring(0,t>0?t-1:0)+' '+s.substring(i);return r==''?false:[s,r];}}
	return false;
};
GDP.prototype.shiftTime=function(d,v,t,n){t=t.split('$');
	if(t.length>1)d['add'+t[0]](t[1]*v*(n!==null&&n!==undefined&&n!==false?n:1));
	else {t=t[0];if(t=='wd')d.addd((v==1?[1,1,1,1,1,3,2][d.gd()]:[2,3,1,1,1,1,1][d.gd()])*(n!==null&&n!==undefined&&n!==false?n:1));}
}
GDP.prototype.gd=function(s){var g=this,t=0,m=0,m2=0,d=new Date(),time=0,e=0,am=s.match(/am|pm/i);s=s.toLowerCase();
	if(am){am=am[0].toLowerCase();am=am=='am'?1:-1;t=s.match(/[0-9]*\s*[0-9]*\s*[0-9]+\s*(am|pm)+/);
		if(t&&s.search(':')<0){s=s.replace(t[0],'');t=t[0].replace(/[a-z,A-Z]/g,'').trim();t=t.split(' ');if(t[0]>12)t.splice(0,1);d.setHours(am>0?t[0]*1%12:t[0]*1%12+12,t[1]*1?t[1]*1%60:0,t[2]?t[2]:0);time=1;}
		else{t=s.match(/[0-9]+:+[0-9]+:*[0-9]*\s*(am|pm)+/);if(t){s=s.replace(t[0],'');t=t[0].replace(/\s*[a-z,A-Z,\s*]\s*/g,'').trim();t=t.split(':');if(t[0]>12)t.splice(0,1);d.setHours(am>0?t[0]*1%12:t[0]*1%12+12,t[1]*1?t[1]*1%60:0,t[2]?t[2]%60:0);time=1;}}
		s=s.replace(/(am|pm)/g,'');
	}
	else if(!!~s.search(':')){t=s.match(/[0-9]+:+[0-9]+:*[0-9]*/);if(t){s=s.replace(t[0],'');t=t[0].trim().split(':');if(t[0]>24)t.splice(0,1);d.setHours(t[0]%23,t[1]?t[1]%60:0,t[2]?t[2]%60:0);time=1;}}
	s=s.replace(/[\s\\\/.\-:]+/,' ').trim();if(!s.length)return d;s=s.replace('1st','1');s=s.replace('2nd','2');s=s.replace('3rd','3');for(i=4;i<10;i++)s=s.replace(i+'th',i);s=s.replace('0th','0');
	if(!time)for(i=0,lx=g.td.length;i<lx;i++){m=s.match(g.td[i].r);if(m){m=m[0];s=s.replace(m,' day');d.setHours(g.td[i].t,0,0);time=1;}}
	for(i=0,lx=g.tz.length;i<lx;i++){m=s.match(g.tz[i].r);if(m){m=m[0];s=s.replace(m,'');d.addm(-1*d.getTimezoneOffset()+g.tz[i].v*60);e=1;break;}}
	for(i=0,lx=g.pv.length;i<lx;i++){m=s.match(g.pv[i].r);if(m){d.addd(g.pv[i].t);e=1;s=s.replace(m[0],'');break;}}
	
	
	for(var i=0,a=d.m.concat(d.sm),lx=a.length,M=-1;i<lx;i++){m=s.match(eval('/[0-9,\\s]*\\b'+a[i]+'+\\b[0-9,\s]*/i'));if(m){
		if(!!~m[0].search(/[0-9]+/))s=s.replace(eval('/\\b'+a[i]+'+\\b/gi'),(i%12)+1);
		else if(!!~s.search(eval('/(next|nxt|prev(ious)*|last)+\\s+'+a[i]+'\\b/i'))){t=d.getMonth();d.setMonth(i%12);e=1;if(i%12<t)d.setFullYear(d.gfy()+1);s=s.replace(m[0],i%12<t?'year':'');}
		else s=s.replace(m[0],'');M=i;
	}}
	m=s.match(/[0-9]+[\s,\-,\\,\/,.]+[0-9]+[\s,\-,\\,\/,.]+[0-9]+/);if(!m&&M>=0){m=s.match(/[0-9]+[\s,\-,\\,\/,.]+[0-9]+/);if(m){m=m[0].split(/[\s,\-,\\,\/,.]+/);if(m[0]<31&&m[1]<12)m=[m.join(' ')+' '+d.getFullYear()];else m=[1+' '+m.join(' ')];}}
	if(m){m=m[0].split(/[\s,\-,\\,\/,.]+/g);
		if(m[1]>12&&m[0]<=12){t=m[1];m[1]=m[0];m[0]=t;}if(m[1]>12&&m[2]<=12){t=m[1];m[1]=m[2];m[2]=t;}
		if(m[1]<=12){if(m[0]>31&&m[2]<31){t=m[2];m[2]=m[0];m[0]=t;}if(m[2]<50)m[2]=2000+m[2]*1;if(m[2]<100)m[2]=1900+m[2]*1;if(m[0]<=31)d.setFullYear(m[2],m[1]-1,m[0]);e=1;M=-1;}
	}
	if(M>=0){t=d.getMonth();d.setMonth(M%12);d.setDate(1);if(M%12<t)d.setFullYear(d.gfy()+1);e=1;M=-1;}
	for(i=0,a=d.d.concat(d.sd),lx=a.length;i<lx;i++){m=s.match(eval('/(next|prev(ious)*|nxt|last)*\\s*\\b'+a[i]+'+\\b/i'));if(m){m=m[0];t=d.gd();e=1;if(i%7>=t)d.addd(i%7-t);else d.addd(7+i%7-t);m2=m.match(/(next|prev(ious)*|nxt|last)+/);s=s.replace(m,m2?m2[0]+' week':' day');}}
	m=s.match(/(next|prev(ious)*|nxt|last)*\s*\b(weekend|wkend)\b/);if(m){m=m[0];m2=m.match(/(next|prev(ious)*|nxt|last)+/);s=s.replace(m,m2?m2[0]+' week':' day');t=d.gd();if(t>0&&t<6)d.addd(6-t);e=1;}
	for(i=0,lx=g.pvr.length;i<lx;i++){m=s.match(eval('/\\b'+g.pvr[i].r+'\\b/'));if(m){
		for(var j=0,lx2=g.np.length;j<lx2;j++){
			m2=s.match(eval('/'+g.np[j].r+'\\s*[0-9]*\\s*'+g.pvr[i].r+'\\s*/'));if(m2){m2=m2[0];s=s.replace(m2[0]);var ds=g.np[j].d,n=m2.match(/[0-9]+/);g.shiftTime(d,g.np[j].v,g.pvr[i].t,n);}
			else{m2=s.match(eval('/[0-9]*\\s*'+g.pvr[i].r+'\\s*'+g.np[j].r+'/'));if(m2){m2=m2[0];s=s.replace(m2[0]);var ds=g.np[j].d,n=m2.match(/[0-9]+/);g.shiftTime(d,g.np[j].v,g.pvr[i].t,n);}}
		}
	}}
	if(!time){m=s.match(/at\s+[0-9]+/);if(m){m=parseInt(m[0].replace('at ',''));if(m<12){t=d.getHours();d.setHours(t>=m?m+12:m,0,0);e=1;time=1;}}}
	if(!g.time&&time)g.time=1;if(e||time)d.edited=1;d.remStr=s;
	return d;
};
function AFB(con,idp,cl,u,max,evts,ptext,fs){//u:{url:,fun:,lim:,dpf:[]}
	var g=this;g.con=con.isString?gi(con):con;g.idp=idp;g.cl=cl;g.u=u;g.dp=[];g.cur="";g.dpr=function(r){g.dprs(r);};g.max=(max)?max:7;g.evts=evts;g.ptext=(ptext)?ptext:"Click to enter a value";g.fs=fs||0;
	if(g.con){g.cAFB();g.addEvts();}g.mo=0;g.kufl=0;
}
AFB.prototype.cAFB=function(){
	var g=this,d1=ce('div','tbl'+g.idp,g.con),d2=ce('div');ac(d1,d2);d1.className='tbl'+g.cl;d2.style.position='relative';d1=d2;g.tblaf=d2;
	d2=ce('input','af1'+g.idp,d1);d2.className='af1'+g.cl;d2.spellcheck=false;d2.autocomplete='off';g.af1=d2;d2.style.position='absolute';d2.style.top=0;d2.style.left=0;
	d2=ce('input','af2'+g.idp,d1);d2.className='af2'+g.cl;d2.spellcheck=false;d2.autocomplete='off';d2.style.position='absolute';d2.style.top=0;d2.style.left=0;d2.style.backgroundColor='transparent';d2.style.filter='alpha(opacity=100)';d2.style.zIndex=100;d2.placeholder=g.ptext;g.af2=d2;
	d2=ce('table','aftbl'+g.idp,gt('body')[0]);d2.className='aftbl'+g.cl;d2.style.zIndex=4000;d2.style.position='absolute';if(g.af2.offsetWidth)d2.style.width=g.af2.offsetWidth+'px';d2.style.display='none';g.aftbl=d2;
};
AFB.prototype.addEvts=function(){
	var g=this;
	g.af1o=function(e){g.af1out(e);};aeh(g.af1,"focus",g.af1o);
	g.af2kd=function(e){g.af2kdown(e);};aeh(g.af2,"keydown",g.af2kd);
	g.af2ku=function(e){g.af2kup(e);};aeh(g.af2,"keyup",g.af2ku);
	g.af2o=function(e){g.af2out(e);};aeh(g.af2,"blur",g.af2o);
	g.kph=function(e){g.kp(e);};g.tdb=function(e){g.trblur(e);};g.trcl=function(e){g.trclick(e);};g.afx=function(){g.afxhr();};
	g.tmo=function(e){g.tblmo(e);};g.tom=function(e){g.tblom(e);};
};
AFB.prototype.remEvts=function(){var g=this;reh(g.af1,"focus",g.af1o);reh(g.af2,"keydown",g.af2kd);reh(g.af2,"keyup",g.af2ku);reh(g.af2,"blur",g.af2o);};
AFB.prototype.afxhr=function(){
	var g=this;if(!g.u.url)return;var r=cXHR();r.onreadystatechange=function(e){if(r.readyState==4){if(r.status==200){var res=jp(decodeURIComponent(r.responseText));
	if(!res)return;g.ts=0;g.dp=(res.length==0)?g.dp:res;g.chkdp();g.dpact();}}};
	r.open("POST",g.u.url,true);sXHRh(r);r.setRequestHeader("X-Requested-With","XMLHttpRequest");
	var rs="str="+encodeURIComponent(g.af2.value)+"&fun="+encodeURIComponent(g.u.fun)+"&lim="+g.u.lim;r.send(rs);
};
AFB.prototype.tblmo=function(e){this.mo=1;};AFB.prototype.tblom=function(e){this.mo=0;};
AFB.prototype.cstr=function(s){return s.replace(/(\$\!|<[\/]*[^>]*>)/g,'');};
AFB.prototype.getsel=function(){
	var g=this,dpf=g.u.dpf;if(g.dp.length<1)return;g.sel=g.fs?g.dp[g.fl?g.fl:0]:g.dp[g.fl];g.af2.blur();if(!g.sel)return false;
	if(g.sel){
		var i=0,n=g.sel[dpf[0]].split(/\$\!/g),fce=g.sel.fc||0,fc=fce?g.sel.fc.split('$'):0,id=fce?g.sel.id.split('$'):0,af2=g.cstr(g.af2.value.toLowerCase()),fl=0;
		for(;i<n.length;i++){n[i]=strtags(n[i]).trim();if(!n[i].length)continue;
			if(fl){n.splice(i,1);if(fce){fc.splice(i,1);id.splice(0,1);}i--;continue;}
			var ind=af2.indexOf(n[i].toLowerCase());
			if(ind>=0)af2=af2.substring(ind+n[i].length);
			else {n[i]=encodeURIComponent(af2);if(fce){fc[i]=0;id[i]=-2;}fl=1;continue;}
		}g.sel[dpf[0]]=n.join('$!');if(fc)g.sel.fc=fc.join('$');if(id)g.sel.id=id.join('$');
	}return g.sel;
};
AFB.prototype.trblur=function(e){var g=this;if(g.cfi==getEvtSrc(e)&&g.kufl!=0&&g.mo!=1){g.claf1();g.kufl=0;}};
AFB.prototype.trclick=function(e){var g=this;g.fl=gparent(getEvtSrc(e)).id.substring(String('aftr'+g.idp).length);g.af2.value=g.cstr(g.dp[g.fl][g.u.dpf[0]]);g.claf1();g.mo=0;if(g.evts.click)g.evts.click.apply(g,[g.idp]);};
AFB.prototype.af1out=function(e){this.af2.focus();};
AFB.prototype.af2out=function(e){var g=this;if(g.af2.value=="")g.af2.value='';if(g.kufl!==0||g.mo==1)return;g.claf1();};
AFB.prototype.af2kdown=function(e){
	var g=this, k=fkey(e);g.ht=0;
	if(k==27){prevDefault(e);stopProp(e);g.claf1();return;}
	if(k==39){if(gselend(g.af2)==g.af2.value.length){if(g.dp.length)g.af2.value=g.cstr(g.dp[g.fl][g.u.dpf[0]]);g.cur=g.af2.value;g.claf1();}}
	if(k==13&&g.evts){g.claf1();if(g.fs)g.af2.value=g.dp[g.fl]?g.cstr(g.dp[g.fl][g.u.dpf[0]]):g.af2.value;if(g.evts.enter){g.evts.enter.apply(g,[g.idp]);g.af2.blur();}return;}
	if(k==38||k==40){if(g.aftbl.style.display=="none"){if(g.dp.length){g.aftbl.style.display='table';var ep=epos(g.af2);g.aftbl.style.top=ep.y+g.af2.offsetHeight+'px';g.aftbl.style.left=ep.x+'px';}else return;};var arr=gcs('aftr'+g.cl);if(arr.length<1)return;g.kufl=1;g.af2.blur();aeh(document,'keydown',g.kph);g.ku=-1;}
};
AFB.prototype.kp=function(e){
	var g=this,k=fkey(e);prevDefault(e);
	if((k==39||k==13)&&g.ku>=0){g.af2.value=g.cstr(g.dp[g.ku][g.u.dpf[0]]);g.fl=g.ku;g.cur=g.af2.value;g.claf1();reh(document,'keydown',g.kph);g.kufl=0;g.af2.focus();if(k==13)if(g.evts.enter){g.evts.enter.apply(g,[g.idp]);g.af2.blur();}return;}
	var arr=gcs('aftr'+g.cl);
	if(k==38||k==40){
		var x=(g.ku==-1)?((k==38)?arr.length-1:0):(g.ku+((k==38)?-1:1));
		if(x==-1||x==arr.length){if(g.ku>=0){arr[g.ku].className="aftr"+g.cl;}reh(document,'keydown',g.kph);g.kufl=0;g.af2.focus();}
		else{ if(g.ku>=0){arr[g.ku].className="aftr"+g.cl;}arr[x].className="aftr"+g.cl+"sel";g.cfi=arr[x];arr[x].focus();}
		g.ku=x;
	}
	if(k==27||k==32||k==8||(k>47&&k<58)||(k>64&&k<90)){if(g.ku>=0&&g.ku<arr.length){arr[g.ku].className="aftr"+g.cl;}reh(document,'keydown',g.kph);g.kufl=0;g.af2.focus();if(k==27)g.claf1();}
};
AFB.prototype.af2kup=function(e){
	var k=fkey(e);if(k==38||k==40||k==13||k==27||k==37||k==39)return;
	var g=this;if(g.cur==g.af2.value&&g.cur!="")return;g.chkdp();
	if(g.af2.value.length<1){g.dpact();return;}
	if(g.cnt<g.max||g.fl<0){if(g.ts==1){clearTimeout(g.t);}g.t=setTimeout(g.afx,200);}
	g.dpact();
};
AFB.prototype.dpact=function(e){
	var g=this;g.sel=0;if(g.dp.length==0||g.af2.value==""||g.ht){g.claf1();return;}var arr=gcs('aftr'+g.cl);
	for(var i=0,lx=arr.length;i<lx;i++){reh(arr[i],'blur',g.tdb);del(arr[i]);}
	g.aftbl.style.width=g.af2.offsetWidth+'px';g.aftbl.style.display="table";var ep=epos(g.af2);g.aftbl.style.top=ep.y+g.af2.offsetHeight+'px';g.aftbl.style.left=ep.x+'px';reh(g.aftbl,'mouseover',g.tmo);reh(g.aftbl,'mouseout',g.tom);
	for(var i=0,lx=Math.min(g.max,g.dp.length);i<lx;i++){
		if(g.dp[i].p==-2||g.ind==0){g.af1.value=g.af2.value+g.cstr(g.dp[g.fl][g.u.dpf[0]]).substring(g.ind+g.af2.value.length);}
		var tr=ce('tr');tr.className="aftr"+g.cl;tr.id='aftr'+g.idp+i;
		for(var j=0,lx2=g.u.dpf.length-1;j<lx2;j++){
			var td=ce('td','',tr);td.className="aftd"+g.cl+j;td.innerHTML=g.dp[i][g.u.dpf[j]].replace(/(\$\!|\$\$)+/g,'');
		}
		tr.tabIndex=0;aeh(tr,'blur',g.tdb);aeh(tr,'click',g.trcl);aeh(g.aftbl,'mouseover',g.tmo);aeh(g.aftbl,'mouseout',g.tom);
		ac(g.aftbl,tr);
	}
};
AFB.prototype.claf1=function(){var g=this;g.ht=1;g.af1.value="";g.aftbl.style.display="none";};
AFB.prototype.chkdp=function(){
	var g=this,l=100,dpf=g.u.dpf[0],v=g.af2.value.toLowerCase().trim(),ind=-1;g.fl=-1;g.cnt=0;g.ind=1000;
	for(var i=0,a=g.dp,lx=a.length;i<lx;i++){
		l=leven(g.cstr(a[i][dpf]).toLowerCase(),v);
		ind=g.cstr(a[i][dpf]).toLowerCase().indexOf(v);
		if(ind!=-1&&ind<g.ind){g.cnt++;}
		a[i].p=ind==0?l-2:ind>0?ind*10:-ind*100+l;
		ind=a[i][dpf].indexOf('</span>');if(ind>=0)if(ind>a[i][dpf].length-10)a[i].p+=50;
	}
	a.sort(objsort('p'));g.fl=0;if(a[0]){g.ind=g.cstr(a[0][dpf]).toLowerCase().indexOf(v);}
};
AFB.prototype.deSelect=function(){var g=this;g.af2.value='';g.sel=0;};
AFB.prototype.clean=function(){var g=this;g.remEvts();g.claf1();del(g.af1);del(g.af2);del(g.tblaf);};
function ColHeader(text,colSpan,rowSpan){
	var g=this;g.text=text;g.colSpan=colSpan;g.rowSpan=rowSpan;
}
function TBL(c,dp,idp,ndm,ta,eArr,csa,rsa,ra,clp,colors){ //ta: textArr csa:colSpanArr rsa:rowSpanArr ra:rowArr idp:idPrefix ndm:no data message
	var g=this;	g.c=c.isString?gi(c):c;g.dp=dp;g.ta=ta;g.csa=csa;g.rsa=rsa;g.ra=ra;g.head=[];g.idp=idp;g.clp=clp||'cl'+idp;g.ndm=ce('div','tblNoData'+g.idp);g.ndm.innerHTML=ndm||'There is no data available';g.ndm.className='tblNoData'+g.clp;
	g.eArr=eArr?eArr:[];g.colors=colors||0;g.createHeaders();g.createTbl();
}
TBL.prototype.deleteHeaders=function(){
	var g=this,e=first(g.tbl),t=0;while(e){if(e.nodeName!='THEAD'){e=next(e);continue;}t=e;e=next(e);del(t);}
};
TBL.prototype.resetHeaders=function(){
	var g=this,c=g.tbl;g.deleteHeaders();g.createHeaders();
	for(var i=0,lx=g.head.length;i<lx;i++){var col=0,x=ce('thead');x.id='head'+g.idp+i;ac(c,x);c=x;
	for(var j=0,lx2=g.head[i].length;j<lx2;j++){x=ce('th','head'+g.idp+i+'$'+j,c);x.className='head'+g.clp+i+" headcol"+g.clp+col;x.rowspan=g.head[i][j].rowSpan;x.colspan=g.head[i][j].colSpan;x.innerHTML=g.head[i][j].text;col++;g.attachEvts(x);}}
};
TBL.prototype.createHeaders=function(){
	var g=this;if(!g.csa)g.csa=[1];if(!g.ta)g.ta=[];if(!g.rsa)g.rsa=[1];if(!g.ra)g.ra=[1];var tempMax=-1;g.head=[];
	if(g.ta.length>g.csa.length){for(var i=g.csa.length,lx=g.ta.length;i<lx;i++) g.csa.push(1);}
	if(g.ta.length>g.rsa.length){for(i=g.rsa.length,lx=g.ta.length;i<lx;i++) g.rsa.push(1);}
	for(i=0,lx=g.ta.length;i<lx;i++){
		if(i<g.ra.length)tempMax=((tempMax<g.ra[i])?g.ra[i]:tempMax);
		else g.ra.push(tempMax);
	}
	for(i=0;i<tempMax;i++)g.head.push([]);for(i=0,lx=g.ta.length;i<lx;i++) g.head[g.ra[i]-1].push(new ColHeader(g.ta[i],g.csa[i],g.rsa[i]));
};
TBL.prototype.clean=function(){var g=this;g.deleteRows();g.deleteHeaders();del(g.tbl);if(gparent(g.ndm))del(g.ndm);del(g.tblCon);};
TBL.prototype.createTbl=function(){
	var g=this,c=g.c;
	var x=ce('div');x.id='div'+g.idp;ac(c,x);g.tblCon=x;c=x;
	g.tbl=x=ce('table');x.id='tbl'+g.idp;x.className='tbl'+g.clp;ac(c,x);c=x;
	if(g.head.length>0){
		for(var i=0,lx=g.head.length;i<lx;i++){var col=0;x=ce('thead');x.id='head'+g.idp+i;ac(c,x);c=x;
			for(var j=0,lx2=g.head[i].length;j<lx2;j++){x=ce('th','head'+g.idp+i+'$'+j,c);x.className='head'+g.clp+i+" headcol"+g.clp+col;x.rowspan=g.head[i][j].rowSpan;x.colspan=g.head[i][j].colSpan;x.innerHTML=g.head[i][j].text;col++;g.attachEvts(x);}
	}}g.addRows();
};
TBL.prototype.checkData=function(){
	var g=this;if(!g.dp[0].length){if(!gparent(g.ndm))ac(g.tblCon,g.ndm);g.tbl.style.display='none';}
	if(g.dp[0].length){if(gparent(g.ndm))del(g.ndm);g.tbl.style.display='table';}
};
TBL.prototype.addRows=function(){
	var g=this,con=g.tbl;
	for(var i=0,lx=g.dp[0].length;i<lx;i++)ac(con,g.cRow(g.dp[0][i],g.colors[i]));
	g.setID();
};
TBL.prototype.insRow=function(o,p,color){
	var g=this,t=g.tbl,c=first(t),r=0,tr=g.cRow(o,color);if(p!==undefined&&!g.dp[0].length)p=-1;
	while(c){if(c.nodeName=='TR')break;c=next(c);}
	if(p>=0){while(c&&r<p){if(c.nodeName.toUpperCase()=='TR')r++;c=next(c);}if(!c)return;t.insertBefore(tr,c);g.dp[0].splice(p,1,o);if(color)g.colors.splice(p,1,color);}
	else {ac(t,tr);g.dp[0].push(o);if(color)g.colors.push(color);}g.setID();
};
TBL.prototype.setID=function(){
	var g=this,t=g.tbl,c=first(t),r=0,x=0,j=0;
	while(c){
		if(c.nodeName!="TR"){c=next(c);continue;}
		c.id='row'+g.idp+r;c.className='row'+g.clp+" "+(r%2==0?"even":"odd")+'row'+g.clp;x=first(c);j=0;
		while(x){if(x.nodeName.toUpperCase()!='TD'){x=next(x);continue;}x.id='c'+g.idp+r+'$'+j;x.className='c'+g.clp+" "+((r%2==0)?"even":"odd")+g.clp+" col"+g.clp+j;x=next(x);j++;}
		r++;c=next(c);
	}g.checkData();
};
TBL.prototype.attachEvts=function(e){for(var i=0,g=this,a=g.eArr,lx=a.length;i<lx;i++)if(e.id.indexOf(a[i].val)===0)aeh(e,a[i].evt,a[i].handler);return e;};
TBL.prototype.rmvEvts=function(e){for(var i=0,g=this,a=g.eArr,lx=a.length;i<lx;i++)if(e.id.indexOf(a[i].val)===0)reh(e,a[i].evt,a[i].handler);};
TBL.prototype.cRow=function(o,c){
	var g=this,j=0,tr=ce('tr');tr.id='row'+g.idp;tr.rowDp=o;
	for(j=0,lx=g.dp[1].length;j<lx;j++){var td=ce('td','c'+g.idp+j);if(!o[g.dp[1][j]])o[g.dp[1][j]]='';if(o[g.dp[1][j]].isString||o[g.dp[1][j]].toFixed)td.innerHTML=o[g.dp[1][j]];else{if(gparent(o[g.dp[1][j]]))del(o[g.dp[1][j]]);ac(td,o[g.dp[1][j]]);}if(c)if(c[g.dp[1][j]])g.setColor(td,c[g.dp[1][j]]);ac(tr,td);g.attachEvts(td);}
	return g.attachEvts(tr);
};
TBL.prototype.setColor=function(td,c){td.style.backgroundColor='rgba('+c+',0.4)';};
TBL.prototype.selectHeader=function(){var g=this,tbl=g.tbl;return first(tbl);};
TBL.prototype.selectRows=function(rows){rows=rows?rows.isArray?rows:[rows]:[];
	var g=this,ret=[],e=first(g.tbl),c=0;
	while(e){if(e.nodeName=='TR'&&(rows.indexOf(c++)>=0||!rows.length))ret.push(e);e=next(e);}
	return ret;
};
TBL.prototype.selectCols=function(cols){cols=cols?cols.isArray?cols:[cols]:[];
	var g=this,ret=[],e=first(g.tbl);
	while(e){for(var j=0;j<e.childNodes.length;j++)if(cols.indexOf(j)>=0||!cols.length)ret.push(e.childNodes[j]);e=next(e);}
	return ret;
};
TBL.prototype.selectRowCols=function(rows,cols){
	var ret=[];
	for(var i=rows[0];i<=rows[1];i++)for(var j=cols[0];j<=cols[1];j++) ret.push(gi('c'+this.idp+i+'$'+j));
	return ret;
};
TBL.prototype.deleteRows=function(rows){
	rows=rows?rows.isArray?rows:[rows]:[];var g=this,s=g.selectRows(rows);
	if(rows.length==0)g.dp[0]=[];
	else {rows.sort();for(var j=0,lx=rows.length;j<lx;j++)g.dp[0].splice(rows[j]-j,1);if(g.colors)g.colors.splice(rows[j]-j,1);}
	for(var j=0,lx=s.length;j<lx;j++){g.rmvEvts(s[j]);del(s[j]);}
	g.setID();
};
TBL.prototype.deleteCols=function(cols){
	cols=cols?cols.isArray?cols:[cols]:[];var g=this,s=g.selectCols(cols);
	if(!cols.length){g.dp[1]=[];g.ta=[];}
	else {cols.sort();for(var j=0,lx=cols.length;j<lx;j++)g.dp[1].splice(cols[j]-j,1);g.ta.splice(cols[j]-j,1);}
	for(var j=0,lx=s.length;j<lx;j++){g.rmvEvts(s[j]);del(s[j]);}
};
TBL.prototype.hideRows=function(rows,m){
	var s=this.selectRows(rows);
	for(var j=0,lx=s.length;j<lx;j++){s[j].style.display=m;}
};
TBL.prototype.hideCols=function(cols,m){
	var s=this.selectCols(cols);
	for(var j=0,lx=s.length;j<lx;j++){s[j].style.display=m;}
};
function GMsgBox(tit,msg,opt,w,h,th,z,idp,op,cls,closeImg){//Opt [{val:,evt:,handler:}]
	var g=this;g.con=randomStr(4)+idp||'';g.cls=cls||0;g.f=1;g.con=ce('div',g.con,gt('body')[0]);g.con.className='gmsgCon'+(g.cls||'');g.tit=tit;g.msg=msg;g.opt=((!opt)?[]:opt);g.z=z||998;g.idp=idp||"a";g.bop=0.6;g.w=w||350;g.h=h||200;g.th=th||25;g.op=op||0.9;g.closeImg=closeImg||0;
	g.box();g.kph=function(e){g.kp(e);};g.ub=function(e){g.unbox();};g.mm=function(e){return g.mmove(e);};aeh(document,"keydown",g.kph);aeh(document,'mousemove',g.mm);
	for(var i=0,lx=g.opt.length;i<lx;i++)if(g.opt[i].evt){if(g.opt[i].evt!=='close')aeh(gi('g2btn'+g.idp+i),g.opt[i].evt,g.opt[i].handler);else g.f=g.opt[i].handler;}aeh(g.g1mbb,"click",((g.f===1)?g.ub:g.f));GMsgBox.prototype.gmbHolder.push(g.idp);
};
GMsgBox.prototype.gmbHolder=[];
GMsgBox.prototype.box=function(){
	var d=document.documentElement,g=this,t1=ce('div'),t2=ce('div'),c=g.con,i=0,t3=ce('div');
	t1.id='g1mbb'+g.idp;g.g1mbb=t1;t1.style.backgroundColor="#FFF";t1.style.width=Math.min(d.clientWidth*(gmbProp.widthMultiple||.97),d.scrollWidth*(gmbProp.widthMultiple||.97))+"px";t1.style.height=(Math.max(d.scrollHeight,d.clientHeight))+"px";t1.style.position="absolute";t1.style.zIndex=g.z;t1.style.opacity=g.bop;t1.style.filter="alpha(opacity="+g.bop*100+")";t1.style.top=0;t1.style.left=0;ac(c,t1);t1=ce('div');
	t1.id="g2mbb"+g.idp;t1.className='g2mbb'+(g.cls||'');g.g2mbb=t1;t1.style.width=g.w+"px";t1.style.height=g.h+"px";t1.style.position="absolute";t1.style.left=(d.clientWidth/2-g.w/2)+"px";t1.style.zIndex=g.z;
	if(!g.cls){t1.style.border="1px solid #CCC";t1.style.backgroundColor="#FFF";t1.style.borderRadius='2px';t1.style.mozBoxShadow="2px 2px 23px #AAA";t1.style.webkitBoxShadow="2px 2px 23px #AAA";t1.style.boxShadow="2px 2px 23px #AAA";}t1.style.opacity=g.op;ac(c,t1);g.pos();
	if(g.tit){
		g.g2mtit=t2;t2.id='g2mtit'+g.idp;t2.className='g2mtit'+(g.cls||'');t2.innerHTML=g.tit;if(!g.cls)t2.style.height=(g.th-10)+"px";t2.style.width=(g.w-(g.cls?0:30))+"px";if(!g.cls){t2.style.padding="15px 15px 0px 15px";t2.style.textAlign="left";t2.style.fontSize="14px";t2.style.fontWeight="bold";t2.style.color="#666";t2.style.color='#444';}ac(t1,t2);
		if(g.closeImg){t2=ce('img','g2close'+g.idp,t2);t2.src=g.closeImg;t2.className='g2close'+(g.cls||'');aeh(t2,'click',function(){g.unbox()});}
		t2=ce('div');
	}
	if(g.msg.isArray)ac(t1,g.msg[0]);else {t2.id="g2msg"+g.idp;t2.className='g2msg'+(g.cls||'');if(!g.cls){t2.style.padding="15px 15px 10px 15px";t2.style.fontSize="12px";t2.style.textAlign="left";t2.style.lineHeight="1.75em";t2.style.color="#222";}ac(t1,t2);t2.innerHTML=g.msg;}
	if(g.opt.length){
		t2=ce('div');t2.id='g2tba'+g.idp;t2.className='g2tba'+(g.cls||'');if(!g.cls){t2.style.textAlign="center";t2.style.margin="0 auto";t2.style.padding="0 15px 15px 15px";t2.style.position="absolute";t2.style.bottom="0";}t2.style.width=(g.w-(g.cls?0:30))+"px";ac(t1,t2);
		for(i=0,m=g.opt;i<m.length;i++){if(m[i].evt=='close')continue;t3=ce('button');t3.id='g2btn'+g.idp+i;t3.className='g2btn'+(g.cls||'');t3.innerHTML=m[i].val;ac(t2,t3);if(!i)setTimeout(function(){var t=gi('g2btn'+g.idp+'0');if(t)t.focus();},500);}
	}g.boxed=1;
};
GMsgBox.prototype.unbox=function(e){
	var g=this;
	if(!g.boxed)return;reh(document,"keydown",g.kph);
	for(var i=0,lx=g.opt.length;i<lx;i++)if(g.opt[i].evt)if(g.opt[i].evt!=='close')reh(gi('g2btn'+g.idp+i),g.opt[i].evt,g.opt[i].handler);
	reh(g.g1mbb,"click",((g.f===1)?g.ub:g.f));del(g.g1mbb);del(g.g2mbb);del(g.con);g.boxed=0;var t=GMsgBox.prototype.gmbHolder.indexOf(g.idp);if(t>=0)GMsgBox.prototype.gmbHolder.splice(t,1);
};
GMsgBox.prototype.mmove=function(e){var g=this,t=0,s=window.scrollY||window.scrollYOffset;s=s||0;t=s+window.innerHeight/2-g.h/2;if(!g.g2mbb.style.top)return g.pos();if(Math.abs(getPX(g.g2mbb.style.top)/t-1)>.1)return g.pos();};
GMsgBox.prototype.kp=function(e){var k=fkey(e),g=this;if(g.idp!=GMsgBox.prototype.gmbHolder[GMsgBox.prototype.gmbHolder.length-1])return;if(k==27){if(!g.f||g.f===1)g.unbox();else {g.f.apply(window,[e]);g.f=0;}}g.pos();};
GMsgBox.prototype.pos=function(){var g=this,s=(document.documentElement&&document.documentElement.scrollTop)||document.body.scrollTop;s=s||0;g.g2mbb.style.top=(s+(window.innerHeight||document.documentElement.offsetHeight)/2-g.h/2)+"px";};

function sXHR(){try {return new window.XMLHttpRequest();} catch(e){return false;};}
function aXHR(){try {return new window.ActiveXObject( "Microsoft.XMLHTTP" );} catch(e){return false;};}
function cXHR(){var xhr=window.ActiveXObject?function(){return !this.isLocal && sXHR() || aXHR();} : sXHR;return xhr();}
function sXHRh(r){r.setRequestHeader("Content-type","application/x-www-form-urlencoded");return r;}
function gi(id){return document.getElementById(id);}
function gc(id){
	try{return document.getElementsByClassName(id);} catch(IE){
		var ret=[],t=gt('*');
		for(var i=0,lx=t.length;i<lx;i++)	if(t[i].className.search(id)>=0) ret.push(t[i]);
		return ret;
	}
}
function gis(id){id=id.replace(/[\\$$]+/g,'\\\\$$$$');for(var i=0,t=gt('*'),ret=[],lx=t.length;i<lx;i++) if(t[i].id.search(eval('/'+id+'/g'))>=0) ret.push(t[i]);return ret;}
function gcs(id){id=id.replace(/[\\$$]+/g,'\\\\$$$$');for(var i=0,t=gt('*'),ret=[],lx=t.length;i<lx;i++) if(t[i].className.search(eval('/'+id+'/g'))>=0) ret.push(t[i]);return ret;}
function gt(id){return document.getElementsByTagName(id);}
function ce(type,id,parent){var e=document.createElement(type);if(id)e.id=id;if(parent)ac(parent,e);return e;}
function addCl(id,cl,m){m=((!m)?0:m);var g=((m==0)?"gi":((m==1)?"gc":"gt"));eval((g+"(id).className+=' '+cl"));}
function delCl(id,cl,m){m=((!m)?0:m);var g=((m==0)?"gi":((m==1)?"gc":"gt"));eval((g+"(id).className="+g+"(id).className.replace(eval('/(?:^|\s)'+cl+'(?!\S)/'),'')"));}
function repCl(id,cl1,cl2,m){m=((!m)?0:m);var g=((m==0)?"gi":((m==1)?"gc":"gt"));eval((g+"(id).className="+g+"(id).className.replace(eval('/(?:^|\s)'+cl1+'(?!\S)/'),'+cl2+')"));}
Array.prototype.remove=function(f,t){var g=this,r=g.slice((t||f)+1||g.length);g.length=f<0?g.length + f : f;return g.push.apply(g,r);};//by j resig
if(!Array.prototype.indexOf){Array.prototype.indexOf=function(o,f){var g=this;f=f||0;if(f<0)f=Math.max(0,g.length+f);for(var i=f,j=g.length;i<j;i++)if(g[i]===o)return i;return -1;};}
gEvtsMap={'mousedown':'touchstart','mousemove':'touchmove','mouseup':'touchend','click':'touchstart'};
if('ontouchstart' in window)isIOSAndroid=1;else isIOSAndroid=0;
function aeh(o, evt, handler){
	if(evt=='mousewheel')evt=(/Firefox/i.test(navigator.userAgent))?'DOMMouseScroll':evt;
	var origEvt=evt;
	if(isIOSAndroid)evt=gEvtsMap[evt]||evt;
	
	if(origEvt=='click'&&isIOSAndroid){
		function clickObj(handler){
			this.hStart=function(e){
				self.pStart=mpos(e);self.pStart.touches=e.targetTouches?e.targetTouches.length:0;
				self.eStart=e;
			};
			this.hEnd=function(e){
				if(!self.pMove){callHandler();return;}
				var p1=self.pStart,p2=self.pMove;if(!p1.x&&!p1.y){self.pMove=0;return;}
				if(e.targetTouches&&e.targetTouches.length>1||p1.touches>1){self.pMove=0;return;}
				if(Math.abs(p1.x-p2.x)>15||Math.abs(p1.y-p2.y)>15){self.pMove=0;return;}
				callHandler();self.pMove=0;
			};
			this.hMove=function(e){
				self.pMove=mpos(e);
			}
			this.handler=handler;
			var self=this,callHandler=function(){handler(self.eStart);self.pStart={x:0,y:0};self.pMove=0;}
			this.pStart={x:0,y:0};this.eStart=0;
		};var h=new clickObj(handler);
		document.addEventListener?o.addEventListener('touchstart',function(e){h.hStart(e);}, false):document.attachEvent?o.attachEvent("ontouchstart",function(e){h.hStart(e);}):false;
		document.addEventListener?o.addEventListener('touchmove',function(e){h.hMove(e);}, false):document.attachEvent?o.attachEvent("ontouchmove",function(e){h.hMove(e);}):false;
		document.addEventListener?o.addEventListener('touchend',function(e){h.hEnd(e);}, false):document.attachEvent?o.attachEvent("ontouchend",function(e){h.hEnd(e);}):false;
	}else {
		document.addEventListener?o.addEventListener(evt, handler, false):document.attachEvent?o.attachEvent("on" + evt, handler):false;	
	}
}
function reh(o,evt, handler){
	if(isIOSAndroid)evt=gEvtsMap[evt]||evt;
	document.removeEventListener?o.removeEventListener(evt,handler,false):o.detachEvent?o.detachEvent("on"+evt, handler):false;
}
function getEvtSrc(e){var o;if(!e&&window.event)o=window.event.srcElement;else if(e.srcElement)o=e.srcElement;else o=e.target;return o;}
function fkey(e){return ((e.keycode)?e.keycode:((window.event)?window.event.keyCode:e.which));}
function leven(a,b,cs){
    var l1=a.length,l2=b.length,i=0,j=0,d=[];
    if(Math.min(l1,l2)===0){return Math.max(l1,l2);}if(cs==0){a=a.toLowerCase();b=b.toLowerCase();};
    for(i=0;i<=l1;i++){d[i]=[];d[i][0]=i;}for(j=0;j<=l2;j++)d[0][j]=j;
    for(i=1;i<=l1;i++){for(j=1;j<=l2;j++){d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+(a.charAt(i-1)=== b.charAt(j-1)?0:1));}}return d[l1][l2];
}
Date.prototype.d=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];Date.prototype.sd=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];Date.prototype.m=["January","February","March","April","May","June","July","August","September","October","November","December"];Date.prototype.sm=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
Date.prototype.fdow=0;
Date.prototype.format=function(f){f=f||'d M Y';
	var g=this,gr=["d","D","y","Y","j","m","M","i","I","s","A","z","W","Q","F","u","T","h","H","x"],gf={
			"d":function(){return g.lz(g.gD());},
			"j":function(){return g.gD();},
			"D":function(){return g.sd[g.gd()];},
			"F":function(){return g.m[g.gM()];},
			"n":function(){return g.gM()+1;},
			"m":function(){return g.lz(g.gM()+1);},
			"M":function(){return g.sm[g.gM()];},
			"Y":function(){return g.gfy();},
			"y":function(){return g.gfy().toString().substring(2);},
			"I":function(){return g.lz(g.gm());},
			"i":function(){return g.gm();},
			"s":function(){return g.lz(g.getSeconds());},
			"u":function(){return g.getMilliseconds();},
			"h":function(){h=g.gh();return A?(h<=12?h:h-12):h;},
			"H":function(){h=g.gh();var r=A?(h==0?12:h<=12?g.lz(h):g.lz(h-12)):g.lz(h);return r*1==0?12:r;},
			"A":function(){return h>=0?(h<12?"AM":"PM"):"";},
			"x":function(){var t=g.gD().toString();t=t.charAt(t.length-1);return t==1?"st":t==2?"nd":t==3?"rd":"th";},
			"T":function(){return g.getTimezoneOffset();},
			"W":function(){var t=new Date(g.gfy(),0,7-new Date(g.gfy(),0,7).gd()+g.fdow);return Math.ceil((doy(g)-doy(t)-t.gd()+1)/7);},
			"Q":function(){return Math.ceil((g.gM()+1)/3);},
			"z":function(){return doy(d);}
	},r="",x=false,A=false,h=-1,doy=function(y){return Math.round((y-new Date(y.gfy(),0,1))/3600/1000/24+0.5,0);};
	for(var i=0,lx=f.length;i<lx;i++){var c=f.charAt(i);if(c=='$'){x=!x;continue;}if(x==false&&c=="A"){A=true;break;}};x=false;
	for(i=0;i<lx;i++){c=f.charAt(i);if(c=='$'){x=!x;continue;}if(x==false&&gr.indexOf(c)>=0)r=r+gf[c]();else r=r+c;}return r;
};
Date.prototype.lz=function(s){return s.toString().length==1?"0"+s:s;};
Date.prototype.addms=function(v){var g=this;g.setMilliseconds(g.getMilliseconds()+v);return g;};
Date.prototype.adds=function(v){return this.addms(v*1000);};
Date.prototype.addm=function(v){return this.addms(v*60000);};
Date.prototype.addh=function(v){return this.addms(v*3600000);};
Date.prototype.addd=function(v){return this.addms(v*86400000);};
Date.prototype.addw=function(v){return this.addms(v*604800000);};
Date.prototype.mdim=function(y,m){return [31,(this.chklp(y)?29:28),31,30,31,30,31,31,30,31,30,31][m];};
Date.prototype.addM=function(v){var g=this,n=g.gD();g.setDate(1);g.setMonth(g.gM()+v);g.setDate(Math.min(n,g.mdim(g.gfy(),g.gM())));return g;};
Date.prototype.addy=function(v){return this.addM(v*12);};
Date.prototype.chklp=function(y){var y=this.gfy();return (((y% 4===0)&&(y%100!==0))||(y%400===0));};
Date.prototype.gfy=function(){return this.getFullYear();};
Date.prototype.gD=function(){return this.getDate();};
Date.prototype.gd=function(){return this.getDay();};
Date.prototype.gM=function(){return this.getMonth();};
Date.prototype.gh=function(){return this.getHours();};
Date.prototype.gm=function(){return this.getMinutes();};
Date.prototype.fn=function(s){
	var r='',x='',c=0,t=s.search(/(~\s*[0-9]+\s*~)/);if(t>-1)for(var i=t+1,lx=s.length;i<=lx;i++){x=s.charAt(i);if(/[0-9]+/.test(x))r=r+x;if(x=='~'){s=s.substring(i);return r==''?false:[s,r];}}
	t=s.search(/([0-9]+\s*~[a-z]*\s*~)/);if(t>-1)for(i=t,lx=s.length;i<=lx;i++){x=s.charAt(i);if(/[0-9]+/.test(x))r=r+x;if(x=='~')c++;if(c==2){s=s.substring(0,t>0?t-1:0)+' '+s.substring(i);return r==''?false:[s,r];}}
	return false;
};
Date.prototype.shiftTime=function(d,v,t,n){t=t.split('$');
	if(t.length>1)d['add'+t[0]](t[1]*v*(n!==null&&n!==undefined&&n!==false?n:1));
	else {t=t[0];if(t=='wd')d.addd((v==1?[1,1,1,1,1,3,2][d.gd()]:[2,3,1,1,1,1,1][d.gd()])*(n!==null&&n!==undefined&&n!==false?n:1));}
}
Date.prototype.parseDate=function(s){
	if(s.search(/\dT\d/i)>=0&&s.search(/\.\d+Z/i)>=0)s=s.replace(/T|\.\d+Z/gi,' ').trim();
	var g=this,t=0,m=0,m2=0,d=new Date('1 Jan 1901'),tdt=new Date('1 Jan 1901'),time=0,e=0,am=s.match(/am|pm/i);s=s.toLowerCase();
	g.pv=[{r:/\b(today|now)\b/,t:0},{r:/\btomorrow\b/,t:1},{r:/\byesterday\b/,t:-1}];for(var i=0,lx=g.pv.length;i<lx;i++)g.pv[i].r=new RegExp(g.pv[i].r);
	g.td=[{r:/\blate\s(afternoon|afti|noon)\b/,t:14},{r:/\b(afternoon|afti|noon)\b/,t:12},{r:/\blate\s(morning)\b/,t:11},{r:/\b(morning)\b/,t:9},{r:/\blate\sevening\b/,t:19},{r:/\bevening\b/,t:17},{r:/\blate\snight\b/,t:22},{r:/\bnight\b/,t:20}];for(i=0,lx=g.td.length;i<lx;i++)g.td[i].r=new RegExp(g.td[i].r);
	g.pvr=[{r:'day(s)*',t:'d$1'},{r:'hr(s)*|hour(s)*',t:'h$1'},{r:'min(ute)*(s)*',t:'m$1'},{r:'(week|wk)(s)*',t:'d$7'},{r:'(month|mth)(s)*',t:'M$1'},{r:'(weekday|wkday|working\sday)(s)*',t:'wd'},{r:'(year|yr)(s)*',t:'y$1'},{r:'decade(s)*',t:'y$10'},{r:'fortnight(s)*',t:'d$15'},{r:'(quarter|qtr)(s)*',t:'M$3'}];
	g.np=[{r:'(next|nxt)+',v:1,d:1},{r:'(previous|prev)+',v:-1,d:1},{r:'(last)+',v:-1,d:1},{r:'(past)+',v:-1,d:1},{r:'(from)+',v:1,d:0},{r:'(after)+',v:1,d:0},{r:'(before)+',v:-1,d:0},{r:'(later)+',v:1,d:0},{r:'(ago)+',v:-1,d:0},{r:'(this)+',v:0,d:-2}];
	g.tz=[{r:/\bgmt\b/,v:0},{r:/\bist\b/,v:-5.5},{r:/\best\b/,v:5},{r:/\bedt\b/,v:4},{r:/\bpdt\b/,v:7},{r:/\bpst\b/,v:8},{r:/\bsgt\b/,v:-8},{r:/\bcet\b/,v:-1},{r:/\bhkt\b/,v:-8},{r:/\bcst\b/,v:6},{r:/\beat\b/,v:-3},{r:/\bcat\b/,v:-2},{r:/\beet\b/,v:-2},{r:/\bhst\b/,v:10},{r:/\bmst\b/,v:-8},{r:/\btha\b/,v:-7}];for(i=0,lx=g.tz.length;i<lx;i++)g.tz[i].r=new RegExp(g.tz[i].r);
	if(am){am=am[0].toLowerCase();am=am=='am'?1:-1;t=s.match(/[0-9]*\s*[0-9]*\s*[0-9]+\s*(am|pm)+/);
		if(t&&s.search(':')<0){s=s.replace(t[0],'');t=t[0].replace(/[a-z,A-Z]/g,'').trim();t=t.split(' ');if(t[0]>12)t.splice(0,1);if(d.getTime()==tdt.getTime())d=new Date();d.setHours(am>0?t[0]*1%12:t[0]*1%12+12,t[1]*1?t[1]*1%60:0,t[2]?t[2]:0);time=1;}
		else{t=s.match(/[0-9]+:+[0-9]+:*[0-9]*\s*(am|pm)+/);if(t){s=s.replace(t[0],'');t=t[0].replace(/\s*[a-z,A-Z,\s*]\s*/g,'').trim();t=t.split(':');if(t[0]>12)t.splice(0,1);if(d.getTime()==tdt.getTime())d=new Date();d.setHours(am>0?t[0]*1%12:t[0]*1%12+12,t[1]*1?t[1]*1%60:0,t[2]?t[2]%60:0);time=1;}}
		s=s.replace(/(am|pm)/g,'');
	}
	else if(!!~s.search(':')){t=s.match(/[0-9]+:+[0-9]+:*[0-9]*/);if(t){s=s.replace(t[0],'');t=t[0].trim().split(':');if(t[0]>24)t.splice(0,1);if(d.getTime()==tdt.getTime())d=new Date();d.setHours(t[0]%23,t[1]?t[1]%60:0,t[2]?t[2]%60:0);time=1;}}
	s=s.replace(/[\s\\\/.\-:]+/,' ').trim();if(!s.length)return d.getTime()==tdt.getTime()?false:d;s=s.replace('1st','1');s=s.replace('2nd','2');s=s.replace('3rd','3');for(i=4;i<10;i++)s=s.replace(i+'th',i);s=s.replace('0th','0');
	if(!time){var flag=true;for(i=0,lx=g.td.length;i<lx;i++){m=s.match(g.td[i].r);if(m){flag=false;m=m[0];s=s.replace(m,' day');if(d.getTime()==tdt.getTime())d=new Date();d.setHours(g.td[i].t,0,0);time=1;}}if(flag){d.setHours(0,0,0);}}
	for(i=0,lx=g.tz.length;i<lx;i++){m=s.match(g.tz[i].r);if(m){m=m[0];s=s.replace(m,'');if(d.getTime()==tdt.getTime())d=new Date();d.addm(-1*d.getTimezoneOffset()+g.tz[i].v*60);e=1;break;}}
	for(i=0,lx=g.pv.length;i<lx;i++){m=s.match(g.pv[i].r);if(m){if(d.getTime()==tdt.getTime())d=new Date();d.addd(g.pv[i].t);e=1;s=s.replace(m[0],'');break;}}
	
	
	for(var i=0,a=d.m.concat(d.sm),lx=a.length,M=-1;i<lx;i++){m=s.match(eval('/[0-9,\\s]*\\b'+a[i]+'+\\b[0-9,\s]*/i'));if(m){
		if(!!~m[0].search(/[0-9]+/))s=s.replace(eval('/\\b'+a[i]+'+\\b/gi'),(i%12)+1);
		else if(!!~s.search(eval('/(next|nxt|prev(ious)*|last)+\\s+'+a[i]+'\\b/i'))){t=d.getMonth();if(d.getTime()==tdt.getTime())d=new Date();d.setMonth(i%12);e=1;if(i%12<t)d.setFullYear(d.gfy()+1);s=s.replace(m[0],i%12<t?'year':'');}
		else s=s.replace(m[0],'');M=i;
	}}
	m=s.match(/[0-9]+[\s,\-,\\,\/,.]+[0-9]+[\s,\-,\\,\/,.]+[0-9]+/);if(!m&&M>=0){m=s.match(/[0-9]+[\s,\-,\\,\/,.]+[0-9]+/);if(m){m=m[0].split(/[\s,\-,\\,\/,.]+/);if(m[0]<31&&m[1]<12)m=[m.join(' ')+' '+d.getFullYear()];else m=[1+' '+m.join(' ')];}}
	if(m){m=m[0].split(/[\s,\-,\\,\/,.]+/g);if(d.getTime()==tdt.getTime())d=new Date();
		if(m[1]>12&&m[0]<=12){t=m[1];m[1]=m[0];m[0]=t;}if(m[1]>12&&m[2]<=12){t=m[1];m[1]=m[2];m[2]=t;}
		if(m[1]<=12){if(m[0]>31&&m[2]<31){t=m[2];m[2]=m[0];m[0]=t;}if(m[2]<50)m[2]=2000+m[2]*1;if(m[2]<100)m[2]=1900+m[2]*1;if(m[0]<=31)d.setFullYear(m[2],m[1]-1,m[0]);e=1;M=-1;}
	}
	if(M>=0){t=d.getMonth();if(d.getTime()==tdt.getTime())d=new Date();d.setMonth(M%12);d.setDate(1);if(M%12<t)d.setFullYear(d.gfy()+1);e=1;M=-1;}
	for(i=0,a=d.d.concat(d.sd),lx=a.length;i<lx;i++){m=s.match(eval('/(next|prev(ious)*|nxt|last)*\\s*\\b'+a[i]+'+\\b/i'));if(m){m=m[0];t=d.gd();e=1;if(d.getTime()==tdt.getTime())d=new Date();if(i%7>=t)d.addd(i%7-t);else d.addd(7+i%7-t);m2=m.match(/(next|prev(ious)*|nxt|last)+/);s=s.replace(m,m2?m2[0]+' week':' day');}}
	m=s.match(/(next|prev(ious)*|nxt|last)*\s*\b(weekend|wkend)\b/);if(m){m=m[0];m2=m.match(/(next|prev(ious)*|nxt|last)+/);s=s.replace(m,m2?m2[0]+' week':' day');t=d.gd();if(t>0&&t<6)d.addd(6-t);e=1;}
	for(i=0,lx=g.pvr.length;i<lx;i++){m=s.match(eval('/\\b'+g.pvr[i].r+'\\b/'));if(m){
		for(var j=0,lx2=g.np.length;j<lx2;j++){if(d.getTime()==tdt.getTime())d=new Date();
			m2=s.match(eval('/'+g.np[j].r+'\\s*[0-9]*\\s*'+g.pvr[i].r+'\\s*/'));if(m2){m2=m2[0];s=s.replace(m2[0]);var ds=g.np[j].d,n=m2.match(/[0-9]+/);g.shiftTime(d,g.np[j].v,g.pvr[i].t,n);}
			else{m2=s.match(eval('/[0-9]*\\s*'+g.pvr[i].r+'\\s*'+g.np[j].r+'/'));if(m2){m2=m2[0];s=s.replace(m2[0]);var ds=g.np[j].d,n=m2.match(/[0-9]+/);g.shiftTime(d,g.np[j].v,g.pvr[i].t,n);}}
		}
	}}
	if(!time){m=s.match(/at\s+[0-9]+/);if(m){m=parseInt(m[0].replace('at ',''));if(m<12){if(d.getTime()==tdt.getTime())d=new Date();t=d.getHours();d.setHours(t>=m?m+12:m,0,0);e=1;time=1;}}}
	if(!g.time&&time)g.time=1;if(e||time)d.edited=1;d.remStr=s;
	return d.getTime()==tdt.getTime()?false:d;
}
function isNumber(v){if(v===null)return false;var t=v*1;if(t.toString()=='NaN')return false;if(v.toString().search(/[0-9]/i)<0)return false;return true;}
if(!String.prototype.trim){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,'');};}


function GTT(e,idp,cl,msg,d,p,m,b,to,fs){ //e:element,d:direct/indirect,p:position (1/-1,2/-2,3/-3) b:buffer distance m:manual/auto(0/1)
	var g=this;g.el=e.isString?gi(e):e;if(!g.el)return;g.idp=idp||randomStr(6);g.cl=cl||0;g.msg=msg||"";g.f=false;g.tt=ce('div','gtt'+g.idp);g.tt.className=cl?'gtt'+g.cl:'';g.tt.style.position='absolute';g.tt.innerHTML=g.msg;g.tt.p=p||2;g.tt.b=b||8;g.d=d!==undefined?d:1;g.r=function(e){return g.render();};g.m=m!==undefined?m:1;g.to=to||2000;g.fs=fs||150;g.ti=0;
	g.el.n='gttajskfn';if(!gi(g.el.n)){g.gt=ce('div');g.gt.style.position='relative';g.gt.style.zIndex=5000;g.gt.id=g.el.n;ib(gt('body')[0],g.gt);}else g.gt=gi(g.el.n);g.ct=function(e){return g.cti();};g.fts=function(e){return g.tsf();};
	g.stt=function(e){return g.m?g.showtt(e):0;};g.mtt=function(e){return g.m?g.movett(e):0;};g.rtt=function(e){return g.m?g.remtt(e):0;};if(g.m)aeh(g.el,'mouseover',g.stt);if(g.m)aeh(g.el,'mousemove',g.mtt);if(g.m)aeh(g.el,'mouseout',g.rtt);
}
GTT.prototype.showtt=function(e){var g=this;if(g.f||!g.el)return;ac(g.gt,g.tt);g.tt.style.opacity=1;g.f=true;g.movett(e);};
GTT.prototype.movett=function(e){var g=this,gtp=GTT.prototype;if(!g.f||!g.el){g.showtt(e);return;}if(g.d==1&&e.target.id!==g.el.id){g.remtt(e);return;} if(gtp.tts.indexOf(g.tt)<0)gtp.tts.push(g.tt);gtp.ev=g.m?mpos(e):e;if(!gtp.ao){gtp.ao=true;g.render();}if(!g.ti&&!g.fo){g.tm=setTimeout(g.ct,g.to);g.ti=1;}else if(g.ti){clearTimeout(g.tm);g.tm=setTimeout(g.ct,g.to);}};
GTT.prototype.remtt=function(e){var g=this;if(g.ti){clearTimeout(g.tm);g.ti=0;}if(!g.f||g.fo)return;del(g.tt);g.f=false;};
GTT.prototype.tsf=function(){var g=this;g.tt.style.opacity=1;g.fo=0;if(g.ti)return;g.remtt();};
GTT.prototype.cti=function(){var g=this;if(g.f&&!g.fo){g.fo=1;setTimeout(g.fts,g.fs);AP(g.tt,'opacity',1,0,g.fs/1000,'',40);}g.ti=0;clearTimeout(g.tm);};
GTT.prototype.clean=function(){var g=this;if(!g.el)return;reh(g.el,'mouseover',g.stt);reh(g.el,'mousemove',g.mtt);reh(g.el,'mouseout',g.rtt);};
GTT.prototype.tts=[];GTT.prototype.ao=false;GTT.prototype.cnt=0;GTT.prototype.mc=0;GTT.prototype.n='gttajskfn';GTT.prototype.pm=0;
GTT.prototype.render=function(){var g=GTT.prototype,m=g.ev;if(g.pm.x==m.x&&g.pm.y==m.y)g.mc++;else g.mc=0;if(!g.tts.length||g.mc==5){g.ao=false;g.tts=[];return;}if(!g.cnt)g.ep=epos(gi(g.n));if(g.cnt++==200)g.cnt=0;
	for(var i=0,a=g.tts,lx=a.length,s={lt:0,rt:0,lb:0,rb:0};i<lx;i++){var e=a[i],ab=e.p>0?1:-1,p=Math.abs(e.p),lr=p==2?1:-1,hp=p==1?0:p==2?1:lx>1?1:0.5;
		if(lx>1){p=ab==1?(s.lt<s.rt?"lt":"rt"):(s.lb<s.rb?"lb":"rb");ab=++s[p];hp=p.substring(0,1)=='l'?1:0;lr=hp?1:-1;}
		e.style.top=((0.5+m.y-g.ep.y-ab*e.b-(ab>0?ab:ab-1)*e.clientHeight)<<0)+'px';
		e.style.left=((0.5+m.x-g.ep.x-lr*e.b/2-hp*e.clientWidth)<<0)+'px';
	}if(!(g.cnt%20))g.tts=[];g.pm=m;requestAnimationFrame?requestAnimationFrame(g.render):setTimeout(g.render,40);
};
function GCM(e,idp,cl,dp,evts,m){  //evts{enter: click: , rcl} m=1 manual dp:{data: ,f: field (optional)}
	var g=this,x=ce('div');
	if(!gi('gcmdiv')){ib(gt('body')[0],x);x.style.position='relative';x.style.zIndex=9000;x.id='gcmdiv';}g.con=gi('gcmdiv');
	if(e.isString){g.e=e;g.el=e.gi(g.e);}else {g.e=e.id;g.el=e;}if(!g.el)return;g.idp=idp;g.clp=cl;g.cm=ce('div');g.cm.id='gcm'+idp;g.cm.className='gcm'+g.clp;g.cm.style.position='absolute';g.o=0;g.man=m||0;
	g.setDP(dp);g.evts=evts||0;g.ccm=-1;g.sm={};g.set();g.tdp=0;g.utdp=[];if(g.evts)g.rClEvt=g.evts.rcl||0;g.si=[];
	g.rc=function(e){return g.rtclick(e);};aeh(g.el,'contextmenu',g.rc);g.e1=function(e){return g.kd(e);};g.e2=function(e){return g.click(e);};
}
GCM.prototype.setDP=function(dp){
	var g=this;if(!dp)return;g.odp=dp.data||dp;g.f=dp.f||g.f;g.dp=dp.data||dp;
};
GCM.prototype.click=function(ev){
	var g=this,e=getEvtSrc(ev);prevDefault(ev);stopProp(ev);
	if(e.id.substring(0,3)!='gcm'||!g.evts){g.close();return;}if(strtags(e.innerHTML).length<1)return;
	var ccm=e.id.split('$')[1]*1;g.si.push(g.dp[ccm]);
	if(ccm>=g.dp.length-1){g.send();return;}if(!g.dp[ccm+1].isArray){g.send();return;}if(g.tdp)g.utdp.push(g.tdp);g.tdp=g.dp;g.tccm=ccm;g.set(g.sm[g.tccm]);g.ccm=-1;
};
GCM.prototype.send=function(){var g=this;g.evts.click(g.si);g.close();};
GCM.prototype.kd=function(e){
	var g=this,k=fkey(e);if(g.o&&(k>=37||k<=40)){stopProp(e);prevDefault(e);}
	if(k==13&&g.evts&&g.ccm>-1){
		var ccm=g.ccm;g.si.push(g.dp[ccm]);
		if(ccm>=g.dp.length-1){g.send();return;}if(!g.dp[ccm+1].isArray){g.send();return;}
		if(g.tdp)g.utdp.push(g.tdp);g.tdp=g.dp;g.tccm=g.ccm;g.set(g.sm[g.tccm]);g.ccm=-1;
	}
	if(k==27){if(g.si.length){g.set(g.tdp);var p=g.si.pop();
		if(g.utdp.length)g.tdp=g.utdp.pop();
		else g.tdp=0;
	}else g.close();}
	if(k==38||k==40){
		if(g.ccm>-1)gi('gcme$'+g.ccm+'$'+g.idp).className='gcme'+g.clp;
		var x=1,ccm=g.ccm;while(x){ccm+=k==38?-1:1;if(g.sm[ccm-1]!==undefined)continue;ccm=ccm<0?g.dp.length-1:ccm==g.dp.length?0:ccm;if(strtags(gi('gcme$'+g.ccm+'$'+g.idp).innerHTML).length<1)x++;else x=0;if(x==25)break;}
		g.ccm=ccm;gi('gcme$'+g.ccm+'$'+g.idp).className='gcmesel'+g.clp;
	}
};
GCM.prototype.close=function(){
	var g=this,t=0;if(!g.o)return;g.o=0;reh(document,'keydown',g.e1);reh(document,'click',g.e2);
	t=gi('gcme$'+g.ccm+'$'+g.idp);if(t)t.className='gcme'+g.clp;if(g.tdp)g.setDP(g.odp);del(g.cm);g.si=[];g.tdp=0;g.utdp=[];g.sm=[];g.ccm=-1;
};
GCM.prototype.set=function(dp,f){
	var g=this;if(dp)g.dp=dp||g.dp;g.f=f!==undefined?f:g.f;g.cm.innerHTML="";
	for(var i=0,x=0;i<g.dp.length;i++){
		if(g.dp[i].isArray){g.sm[i-1]=g.dp[i];continue;}
		x=ce('div','gcme$'+i+'$'+g.idp,g.cm);x.className='gcme'+g.clp;x.innerHTML=g.dp[i].isString?g.dp[i]:g.f?g.dp[i][g.f]:'';
	}
	if(g.m)g.pos(g.m);
};
GCM.prototype.rtclick=function(e,o){
	var g=this,r=isRtClk(e),m=mpos(e),ep=epos(g.con);m.x=m.x-ep.x;m.y=m.y-ep.y;
	if(g.man&&g.rClEvt&&!o)if(!g.rClEvt(e))return;
	if(!g.man)if(!r||!gi(g.e))return;prevDefault(e);g.open(m);
};
GCM.prototype.open=function(m){
	var g=this;if(!g.o){ac(g.con,g.cm);g.o=1;aeh(document,'keydown',g.e1);aeh(document,'click',g.e2);}
	if(g.ccm>-1)gi('gcme$'+g.ccm+'$'+g.idp).className='gcme'+g.clp;g.ccm=-1;g.set();g.pos(m);
};
GCM.prototype.pos=function(m){
	var g=this,b=m.y+5+g.cm.clientHeight,l=m.x-g.cm.clientWidth-5;g.m=m;
	g.cm.style.top=(b-document.body.scrollTop<document.documentElement.scrollHeight*.9?m.y+5:Math.max(m.y-5-g.cm.clientHeight,0))+'px';
	g.cm.style.left=(l>30?l:l+g.cm.clientWidth+10)+'px';
};
GCM.prototype.clean=function(){var g=this;g.close();reh(g.el,'contextmenu',g.rc);if(g.o){reh(document,'keydown',g.e1);reh(document,'click',g.e2);}};
function objsort(p,d,fun){
   var k=function(x){return fun?fun(x[p]):x[p];};
   return function (a,b){return (k(a)<k(b)?-1:(k(a)>k(b)?1:0))*[1,-1][+!!d];};
}
function gselstart(o){if (o.createTextRange){var r=document.selection.createRange().duplicate();r.moveEnd('character', o.value.length);if(r.text=='')return o.value.length;return o.value.lastIndexOf(r.text);}else return o.selectionStart;}
function gselend(o){if(o.createTextRange){var r=document.selection.createRange().duplicate();r.moveStart('character', -o.value.length);return r.text.length;}else return o.selectionEnd;}
function moveToEndofCEDiv(e){var d=document,r,s;
    if(d.createRange){r=d.createRange();r.selectNodeContents(e);r.collapse(false);s = window.getSelection();s.removeAllRanges();s.addRange(r);}
    else if(d.selection){r=d.body.createTextRange();r.moveToElementText(e);r.collapse(false);r.select();}
}
function SCB(cn,idp,clp,w,h){
	var g=this;g.cn=cn.isString?gi(cn):cn;if(!g.cn)return;g.idp=idp;g.cl=clp||'';g.vpDOrig={'w':w||400,'h':h||200};g.frame();g.chkpos();
}
SCB.prototype.frame=function(){
	if(!gparent(this.cn))return;var g=this,d=ce('div','scbvp'+g.idp,gparent(g.cn));del(g.cn);d.className='scbvp'+g.cl;d.style.overflow='hidden';d.style.width=g.vpDOrig.w+'px';d.style.height=g.vpDOrig.h+'px';d.style.position='relative';g.vp=d;
	d=ce('div');d.style.overflow='hidden';ac(g.vp,d);g.vp2=d;ac(d,g.cn);g.cn.style.position='relative';g.e1=function(e){return g.chkpos(e);};aeh(g.cn,'DOMSubtreeModified',g.e1);g.m1=function(e){return g.mwheel(e);};aeh(d,'mousewheel',g.m1);
	if(g.sch)g.sch.clean();if(g.scv)g.scv.clean();
};
SCB.prototype.mwheel=function(e){prevDefault(e);stopProp(e);
	var g=this,d=e.wheelDelta||e.detail*-120;
	if(g.scv){g.scv.s.style.top=clamp(getPX(g.scv.s.style.top)-d/12,0,g.scv.h-getPX(g.scv.s.style.height))+'px';g.scv.pos();}
	else if(g.sch){g.sch.s.style.left=clamp(getPX(g.sch.s.style.left)-d/40,0,g.sch.w-getPX(g.sch.s.style.width))+'px';g.sch.pos();}
};
SCB.prototype.chkpos=function(pos){
	var g=this,t=epos(g.vp2),d=gparent(g.cn);g.vpP=epos(g.vp);
	g.cnP=epos(g.vp);g.vpD={w:g.vp.offsetWidth,h:g.vp.offsetHeight};
	g.cnD={w:g.cn.offsetWidth,h:g.cn.clientHeight*1.03};
	g.vpPad={t:t.y-g.vpP.y-1,r:g.vpD.w-g.vpDOrig.w-t.x+g.vpP.x+1,b:g.vpD.h-g.vpDOrig.h-t.y+g.vpP.y+1,l:t.x-g.vpP.x-1};
	if(g.scv)g.scv.setsc(pos);if(g.sch)g.sch.setsc(pos);
	if(g.cnD.h>g.vpD.h-g.vpPad.t-g.vpPad.b){if(!g.scv){g.scv=new SC(0,g.vpD.h,8,g);}}
	else {if(g.scv){g.scv.clean();g.scv=0;}}
	if(g.cnD.w>g.vpD.w-g.vpPad.l-g.vpPad.r){if(!g.sch){g.sch=new SC(1,8,g.vpD.w-(g.scv?g.vpPad.r:0),g);}}
	else {if(g.sch){g.sch.clean();g.sch=0;}}
};
SCB.prototype.clean=function(){
	var g=this;if(g.sch)g.sch.clean();if(g.scv)g.scv.clean();
};
function SC(hv,h,w,scb){
	var g=this,r=ce('div'),s=ce('div');g.hv=hv||0;g.h=h||200;g.w=w||8;g.idp=scb.idp;g.cl=scb.cl||'';g.scb=scb;
	r.id='scr'+(g.hv?'h':'v')+g.idp;r.className='scr'+(g.hv?'h':'v')+g.cl;r.style.position='absolute';r.style.zIndex=1000;r.style.height=g.h+'px';r.style.width=g.w+'px';ib(scb.vp,r);g.r=r;if(g.hv)r.style.bottom=0+'px';else r.style.top=0+'px';if(g.hv)r.style.left=0+'px';else r.style.right=0+'px';
	s.id='scs'+(g.hv?'h':'v')+g.idp;s.className='scs'+(g.hv?'h':'v')+g.cl;s.style.position='absolute';s.style.zIndex=100;s.style.width=g.w+'px';s.style.height=g.h+'px';ac(r,s);g.s=s;
	g.m1=function(e){return g.md(e);};g.m2=function(e){return g.mm(e);};g.m3=function(e){return g.mu(e);};g.m4=function(e){return g.click(e);};
	aeh(r,'click',g.m4);aeh(s,'mousedown',g.m1);g.setsc();aeh(s,'drag',function(e){prevDefault(e);stopProp(e);});
}
SC.prototype.md=function(e){prevDefault(e);var g=this;if(g.mdflag)return;aeh(document,'mousemove',g.m2);aeh(document,'mouseup',g.m3);g.mdflag=1;g.mdP=mpos(e);g.top=getPX(g.s.style.top);g.left=getPX(g.s.style.left);
	g.temp=gt('body')[0].style.cssText;gt('body')[0].style.cssText+=' -moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;';};
SC.prototype.mm=function(e){var g=this,m=mpos(e),t=getPX(g.hv?g.s.style.width:g.s.style.height);
	if(g.hv) g.s.style.left=clamp(g.left*1+m.x-g.mdP.x,0,g.w-t)+'px';
	else g.s.style.top=clamp(g.top*1+m.y-g.mdP.y,0,g.h-t)+'px';
	g.pos();
};
SC.prototype.mu=function(e){stopProp(e);prevDefault(e);var g=this;if(!g.mdflag)return;reh(document,'mousemove',g.m2);reh(document,'mouseup',g.m3);g.mdflag=0;g.muP=mpos(e);gt('body')[0].style.cssText=g.temp;};
SC.prototype.click=function(e){var g=this,m=mpos(e),d=epos(g.r),p={x:m.x-d.x,y:m.y-d.y};if(getEvtSrc(e).id.search('scs')>-1)return;
	if(g.hv)g.s.style.left=clamp(p.x<getPX(g.s.style.left)?p.x:p.x-getPX(g.s.style.width),0,g.w-getPX(g.s.style.width))+'px'; 
	else g.s.style.top=clamp(p.y<getPX(g.s.style.top)?p.y:p.y-getPX(g.s.style.height),0,g.h-getPX(g.s.style.height))+'px';g.pos();
};
SC.prototype.setsc=function(pos){var g=this;if(g.hv)g.s.style.width=((g.w*g.w/g.scb.cnD.w)<<0)+'px';else g.s.style.height=((g.h*g.h/g.scb.cnD.h))+'px';g.pos(pos);};
SC.prototype.pos=function(pos){var g=this;if(pos!==undefined)g.s.style[g.hv?'left':'top']=pos/100*(g.hv?g.w-getPX(g.s.style.width):g.h-getPX(g.s.style.height))+'px';if(g.hv) g.scb.cn.style.left=-((getPX(g.s.style.left)/(g.w-g.scb.vpPad.l-g.scb.vpPad.r)*g.scb.cnD.w)<<0)+'px';else g.scb.cn.style.top=-((getPX(g.s.style.top)/(g.h-g.scb.vpPad.t-g.scb.vpPad.b)*g.scb.cnD.h)<<0)+'px';};
SC.prototype.clean=function(){var g=this;reh(g.r,'click',g.m4);reh(g.s,'mousedown',g.m1);g.setsc();reh(g.s,'drag',function(e){prevDefault(e);stopProp(e);});del(g.s);del(g.r);g.scb.cn.style[g.hv?'left':'top']='0px';};
function writeCk(name,value,days){var expires = "";if(days) {var date = new Date();date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));expires = "; expires=" + date.toGMTString();}document.cookie = name + "=" + value + expires + "; path=/";}
function readCk(n){var s=n+"=",ck=document.cookie.split(';');for(var i=0;i< ck.length; i++){var c=ck[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(s)==0)return c.substring(s.length,c.length);}return null;}
function eraseCk(n) {writeCookie(n,"",-1);}
function randomStr(l){var c="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",s="";for(var i=0;i<l;i++) s=s+c.charAt(Math.floor(Math.random()*c.length));return s;}
function AP(a,p,f,t,d,s,z){if(!a)return;var c=0;d=d*1000;var i=(t-f)*z/d,ti=setInterval(function(){c+=z;if(c>d){clearInterval(ti);a.style[p]=t+s;}f+=i;a.style[p]=f+s;},z);}
Array.prototype.hasField=function(v,p){var g=this;for(var i=0,lx=g.length;i<lx;i++)if(g[i][p]==v)return i;return false;};
function jp(s){try{return JSON.parse(s);} catch(err){return false;}}function js(s){try{return JSON.stringify(s);} catch(err){return false;}}
function del(e){if(e)e.parentNode.removeChild(e);}
function empty(e){while(e.firstChild)del(e.firstChild);}
function next(e){do{e=e.nextSibling;}while(e&&e.nodeType!=1)return e;};
function prev(e){do{e=e.previousSibling;}while(e&&e.nodeType!=1)return e;};
function first(e){e=e.firstChild;return e&&e.nodeType!=1?next(e):e;};
function last(e){e=e.lastChild;return e&&e.nodeType!=1?prev(e):e;};
function gparent(e,n){n=n||1;for(var i=0;i<n;i++)if(e)e=e.parentNode;return e;}
function ac(p,c){if(c)p.appendChild(c);}
function ib(p,c,n){if(!c)return;var s=first(p);while(n){s=next(p);if(n--==0)break;}p.insertBefore(c,s);}//insert before number
function ibe(c,e){if(!c||!e)return;gparent(e).insertBefore(c,e);}//insert before element
function prevDefault(e){if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=false;}
function stopProp(e){if(!e)return;if(e.stopPropagation)e.stopPropagation();else {e=window.event;e.cancelBubble=true;}};
function qsa(s,e){return (e||document).querySelectorAll(s)||[];}
function qs(s){return document.querySelector(s)||[];}
function fchild(e,t,c){var r=first(e),i=0;c=c||1;while(r){if(r.nodeName==t)i++;if(i>=c)break;r=next(r);}return i>0?r:0;}
function fchilds(e,t,c){var r=first(e),ret=[],i=0;c=c?c:1;while(r){if(r.nodeName==t){i++;ret.push(r);}if(i>=c)break;r=next(r);}return ret;}
function strtags(s){return s.replace(/<\/?[^>]+>/gi,'');}
var traverseChildren=function(e){var c = [],q=[];q.push(e);while (q.length>0){var e=q.pop();c.push(e);pushAll(e.children);}function pushAll(a){for(var i=0,lx=a.length;i<lx;i++)q.push(a[i]);}return c;};
function mpos(e){
	var d=document,de=d.documentElement;if(!e)e=window.event;
	if(e.targetTouches)return{"x":e.targetTouches[0].pageX,"y":e.targetTouches[0].pageY};
	else if(e.pageX!==undefined)return {"x":e.pageX,"y":e.pageY};
	else if(e.clientX!==undefined)return {"x":e.clientX+d.body.scrollLeft+de.scrollLeft,"y":e.clientY+d.body.scrollTop+de.scrollTop};
	return false;
};
function getPos(e){
	var vo = e.getBoundingClientRect(),w=window,d=document;
	var left=vo.left+((w.pageXOffset!==undefined)?w.pageXOffset:(d.documentElement||d.body.parentNode||d.body).scrollLeft);
	var top=vo.top+((w.pageYOffset!==undefined)?w.pageYOffset:(d.documentElement||d.body.parentNode||d.body).scrollTop);
	return {left:left,top:top,w:e.clientWidth,h:e.clientHeight}
}
function epos(e){var y=0,x=0;while(e&&e.tagName!="BODY"){y+=e.offsetTop;x+=e.offsetLeft;e=e.offsetParent;}return {"x":x,"y":y};};
requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;
Array.prototype.sum=function(f,opt,skip,skipField){var g=this,lx=g.length,i=lx,v=0,r=0,s=skip||0,sf=skipField||0;if(!lx)return 0;
	if(f&&!opt)while(--i>=0){v=g[i][f];if(s)if(s.indexOf(sf?g[i][sf]:v)>=0)continue;v=isNumber(v*1)?v*1:0;r=r+v;}
	else if(!f&&!opt)while(--i>=0){v=g[i];if(s)if(s.indexOf(sf?g[i][sf]:v)>=0)continue;v=isNumber(v*1)?v*1:0;r=r+v;}
	else if(f&&opt=='abs')while(--i>=0){v=g[i][f];if(s)if(s.indexOf(sf?g[i][sf]:v)>=0)continue;v=isNumber(v*1)?v*1:0;r=r+(v<0?-v:v);}
	else if(!f&&opt=='abs')while(--i>=0){v=g[i];if(s)if(s.indexOf(sf?g[i][sg]:v)>=0)continue;v=isNumber(v*1)?v*1:0;r=r+(v<0?-v:v);}
	else if(f&&opt=='wtd'){f=f.split('$');var f1=f[0],f2=f[1],den=0,num=0,v=0;
		while(--i>=0){v=g[i][f1];
			if(s)if(s.indexOf(sf?g[i][sf]:v)>=0)continue;v=isNumber(v*1)?v*1:0;if(!isNumber(g[i][f2]*1))continue;num+=v*g[i][f2]*1;den+=g[i][f2];
		}r=den?num/den:0;
	}
	return r;
};
Array.prototype.count=function(f,skip,skipField){if(!skip)return this.length;var g=this,lx=g.length,i=lx,s=skip||0,sf=skipField||0;
	if(f)while(--i>=0)if(s.indexOf(sf?g[i][sf]:g[i][f])>=0)lx--;
	if(!f)while(--i>=0)if(s.indexOf(sf?g[i][sf]:g[i])>=0)lx--;
	return lx;
};
function clamp(v,a,b){return Math.max(a,Math.min(v,b));}
function floor(v,fd){fd=Math.pow(10,fd||0);return ((v*fd)<<0)/fd;}
function ceil(v,fd){return floor(v+Math.pow(10,-fd||0),fd);}
function round(v,fd){if(!fd)return Math.round(v);fd=Math.pow(10,fd);return Math.round(v*fd)/fd;}
function isRtClk(e){if(!e)e=window.event;return e.which?e.which==3:e.button?e.button==2:false;}
function getPX(s){return s?s.substring(0,s.length-2)*1:false;}
Array.prototype.objminmax=function(p){if(!this.length)return [0,0];for(var i=0,a=this,m1=m2=a[0][p],lx=a.length;i<lx;i++){m1=m1>a[i][p]?a[i][p]:m1;m2=m2<a[i][p]?a[i][p]:m2;}return [m1,m2];};
Array.prototype.minmax=function(f,skip){if(!this.length)return [0,0];var g=this,i=g.length,v=0,s=skip||0,min=max=f?g[0][f]:g[0];
	if(f){while(--i>=0){v=g[i][f];v*=1;if(s)if(skip.indexOf(v)>=0)continue;if(!isNumber(v))continue;min=min>v?v:min;max=max<v?v:max;}}
	else{while(--i>=0){v=g[i];v*=1;if(s)if(skip.indexOf(v)>=0)continue;if(!isNumber(v))continue;min=min>v?v:min;max=max<v?v:max;}}
	return [min,max];
};
Array.prototype.intersection=function(a2,f){var r=[],a1=this,i=a1.length;while(--i>=0)if(a2.indexOf(f?a1[i][f]:a1[i])>-1)r.push(a1[i]);return r;};
function clone(o){return jp(JSON.stringify(o));}
Array.prototype.clone=function(){return clone(this);};
function addCommas(v){if(v<1000)return v;v=v.toString();var ind=v.indexOf('.');v=v.split('');if(v.length-(ind>=0?ind:0)>6)v.splice(v.length-6-(ind>=0?v.length-ind:0),0,',');v.splice(v.length-3-(ind>=0?v.length-ind:0),0,',');return v.join('');}
function objKeys(o){var k=[];for(var f in o)k.push(f);return k;}
function hash(dp,f){for(var i=0,lx=dp.length,r={};i<lx;i++){for(var j=0,fa=f.isArray,lx2=fa?f.length:1,s='';j<lx2;j++)s+=(j?'$':'')+(fa?dp[i][f[j]]:dp[i][f]);if(!r[s])r[s]=[];r[s].push(dp[i]);}return r;}
function nodeListToArray(nodeList){for(var i=0,nl=nodeList,r=[];i<nl.length;i++)r.push(nl[i]);return r;}
function crossArrays(a1,a2){for(var i=0,r={},ret=[];i<a1.length;i++)for(var j=0;j<a2.length;j++)r[a1[i]+'$'+a2[j]]=1;for(i in r)ret.push(i);return ret;}
function getStyle(e,styleProp) {
  var camel=function(s){return s.replace(/\-(\w)/g, function(str,l){return l.toUpperCase()});};
  if(e.currentStyle)return el.currentStyle[camel(styleProp)];
  if(document.defaultView && document.defaultView.getComputedStyle)return document.defaultView.getComputedStyle(e,null).getPropertyValue(styleProp);
  return el.style[camel(styleProp)]; 
}
function html_entity_decode(s) {
  var t=ce('textarea');t.value=s;var v=t.value;return v;
}
function addInputPlaceholder(d,ph){
	d.gplaceholder=ph;aeh(d,'focus',function(e){var s=getEvtSrc(e);if(s.value==s.gplaceholder)s.value='';});if(!d.value||d.value.length<1)d.value=ph;
	aeh(d,'blur',function(e){var s=getEvtSrc(e);if(s.value=='')s.value=s.gplaceholder;});return d;
}
function addDivPlaceholder(d,ph){ph='<span style="color:#888;font-style:italic">'+ph+'</span>';
	d.gplaceholder=ph;if(strtags(d.innerHTML).length<1)d.innerHTML=ph;
	aeh(d,'focus',function(e){var s=getEvtSrc(e);if(strtags(s.innerHTML)!=strtags(s.gplaceholder))return;
		empty(s);if(document.createRange&&window.getSelection){
			var r=document.createRange();r.selectNodeContents(s);var sel=window.getSelection();sel.removeAllRanges();sel.addRange(r);
		}
	});
	aeh(d,'activate',function(e){var s=getEvtSrc(e);if(strtags(s.innerHTML)!=strtags(s.gplaceholder))return;
		empty(s);if(document.createRange&&window.getSelection){
			var r=document.createRange();r.selectNodeContents(s);var sel=window.getSelection();sel.removeAllRanges();sel.addRange(r);
		}
	});
	aeh(d,'blur',function(e){var s=getEvtSrc(e);if(strtags(s.innerHTML)=='')s.innerHTML=s.gplaceholder;});
	aeh(d,'click',function(e){setTimeout(function(e){getEvtSrc(e).focus(e);},100,e);});return d;
}
function decode64(input) {
     var output="",chr1,chr2,chr3="",enc1,enc2,enc3,enc4="",i=0,keyStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
     input=input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
     do {
		enc1=keyStr.indexOf(input.charAt(i++));
		enc2=keyStr.indexOf(input.charAt(i++));
		enc3=keyStr.indexOf(input.charAt(i++));
		enc4=keyStr.indexOf(input.charAt(i++));
		chr1=(enc1 << 2) | (enc2 >> 4);
		chr2=((enc2 & 15) << 4) | (enc3 >> 2);
		chr3=((enc3 & 3) << 6) | enc4;
		output=output + String.fromCharCode(chr1);
		if (enc3 != 64) {output=output + String.fromCharCode(chr2);}
		if (enc4 != 64) {output=output + String.fromCharCode(chr3);}
		chr1=chr2=chr3=enc1=enc2=enc3=enc4="";
    }while (i < input.length);
    return unescape(output);
}
var formatBytes=function(s){s*=1;if(s===NaN)return '';
	var sx='Bytes';if(s<1024)return s+' '+sx;
	s=s/1024;sx='KB';if(s>100)s=round(s);else s=round(s,1);
	if(s>1024){s=s/1024;sx='MB';if(s>100)s=round(s);else s=round(s,1);}
	if(s>1024){s=s/1024;sx='GB';if(s>100)s=round(s);else s=round(s,1);}
	return s+sx;
};
var formatInterval=function(s){s*=1;if(s===NaN)return '';s=round(s);
	var sx='ms';if(s<1000)return s+sx;
	if(s>1000){s=s/1000;sx='sec';if(s<=60){if(s>10)s=round(s);else s=round(s,1);if(s>1)sx+='s';}}else return s+' '+sx;
	if(s>60){s=s/60;sx='min';if(s<=60){if(s>10)s=round(s);else s=round(s,1);if(s>1)sx+='s';}}else return s+' '+sx;
	if(s>60){s=s/60;sx='hour';if(s<=24){if(s>10)s=round(s);else s=round(s,1);if(s>1)sx+='s';}}else return s+' '+sx;
	if(s>24){s=s/24;sx='day';if(s>10)s=round(s);else s=round(s,1);if(s>1)sx+='s';}else return s+' '+sx;
	if(s>30.5){s=s/30.5;sx='month';if(s>10)s=round(s);else round(s,1);if(s>1)sx+='s';}else return s+' '+sx;
	if(s>12){s=s/12;sx='year';if(s>10)s=round(s);else round(s,1);if(s>1)sx+='s';}else return s+' '+sx;
	return s+' '+sx;
}
var getWindowSize=function(){
	var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth || e.clientWidth || g.clientWidth,y=w.innerHeight|| e.clientHeight|| g.clientHeight;return{w:x,h:y};
}
//------------------Accutils-----------------
gl={unmin:4,unmax:20,reset:0};
var signinenter=function(e){
	if(!gl.opinp){gl.opinp=gi('opinp');gl.npinp=gi('npinp');gl.npcinp=gi('npcinp');}
	var k=e?fkey(e):0,s=e?getEvtSrc(e):0;if(e.type=='click'||s.id=='signin')k=13;
	if(!gl.reset){
		if(k!=13){
			if(s.id=='pw'&&k==27){gi('id').focus();}return;
		}if(k!=13)return;
		if(s.id=='id'){var un=strtags(s.value.trim());
			if(un.length>=gl.unmin&&un.length<=gl.unmax){gi('pw').focus();return;}
			else {var gmb=new GMsgBox('INVALID USER-ID','The length of the username should be between '+gl.unmin+' and '+gl.unmax+' characters.<br /><br />Please try again or <a href="mailto:reports@medanta.org">contact us</a> if this problem persists',[],350,205,25,1000,randomStr(8),0.98,'accOpt','/emr/s3rv1cs/1mg5/close.png');}
			return;
		}
		if(s.id=='pw'){var pat=new RegExp('^.*(?=.{8,})(?=.*[a-z])(?=.*[0-9]).*$','i'),pw=strtags(s.value.trim());
			if(!pat.test(pw)){var gmb=new GMsgBox('INVALID PASSWORD','The length of the password should be more than 8 characters long and contain atleast 1 alphabet and 1 number.<br /><br />Please try again or <a href="mailto:reports@medanta.org">contact us</a> if this problem persists',[],375,210,25,1000,randomStr(8),0.98,'accOpt','/emr/s3rv1cs/1mg5/close.png');return;}
			else accWait(1);
		}
	}
	else if(k!=13)return;
	var r=cXHR();if(gi('id')){var pw=strtags(gi('pw').value.trim()),un=strtags(gi('id').value.trim());}
	r.onreadystatechange=function(){if(r.readyState==4){if(r.status==200){var rt=r.responseText,p=jp(rt);accUnwait();
		if(!p){if(rt=='npw'){changePW();return;}showAccError(rt=='f'?2:rt=='pwm'?7:rt=='pws'?0:rt=='spw'?8:rt=='err'?6:rt=='usf'?9:rt=='pch'?10:2);return;}
		if(gi('id')){genPage(p,0)}else showAccError(10);if(gl.accPWGmb)gl.accPWGmb.unbox();gl.accPWGmb=0;gl.reset=0;
	}}};
	if(gl.reset){var re=new RegExp('^.*(?=.{8,})(?=.*[a-z])(?=.*[0-9]).*$','i');
		if(!re.test(strtags(gl.opinp.value).trim())||!re.test(strtags(gl.npinp.value).trim())){showAccError(0);return}
		if(!(strtags(gl.opinp.value).trim())||!(strtags(gl.npinp.value).trim())||!(strtags(gl.npcinp.value).trim())){showAccError(0);return}
		if(strtags(gl.opinp.value).trim()==strtags(gl.npinp.value).trim()){showAccError(8);return;}
		if(strtags(gl.npinp.value).trim()!=strtags(gl.npcinp.value).trim()){showAccError(7);return}
	}
	var str='fun=login&uid='+(gl.reset?-1:encodeURIComponent(un))+'&pw='+(gl.reset?encodeURIComponent(strtags(gl.opinp.value.trim()))+'&pw1='+encodeURIComponent(strtags(gl.npinp.value.trim()))+'&pw2='+encodeURIComponent(strtags(gl.npcinp.value.trim()))+'&pwChange=1':encodeURIComponent(pw));getEvtSrc(e).blur();
	r.open("POST",window.location.href.split('/'+projectFolderRoot+'/')[0]+"/"+projectFolderRoot+"/public/index.php",true);r=sXHRh(r);r.send(str);gl.reset=0;
};
var showStar=function(){if(gl.accOptGMB){gl.accOptGMB.unbox();gl.accOptGMB=0;}
	var d=gi('pages'),p=jp(d.innerHTML);genPage(p,1);
};
var showAccOpts=function(){
	var msg=ce('div'),d=ce('div');d.innerHTML='Navigate';d.className='accOpt';ac(msg,d);aeh(d,'click',showStar);
	d=ce('div');ac(msg,d);d.innerHTML='Sign out';d.className='accOpt';aeh(d,'click',logout);
	d=ce('div');ac(msg,d);d.innerHTML='Change Password';d.className='accOpt';aeh(d,'click',changePW);
	gl.accOptGMB=new GMsgBox('',[msg],0,220,135,0,9000,'accOpt',0.98,'accOpt');
};
var genPage=function(p,nav){
	if(!p.length)return;if(p.length==1){window.location='https://'+p[0].url;return;}
	msg=ce('div','navl');
	for(var i=0;i<p.length;i++){var d=ce('div','pageNav'+i,msg);d.className='pageNavElement';d.innerHTML=p[i].n;d.url=p[i].url;aeh(d,'click',function(e){window.location="https://"+getEvtSrc(e).url;});}
	var w=window.document.body.clientWidth;w
	new GMsgBox(nav?'NAVIGATION':'WHERE WOULD YOU LIKE TO GO?',[msg],[],w<500?w:500,400,30,1000,'wait',.98,'pm1');
	// new SCB(msg,'lscb','lscb',490,460);	
};
var changePW=function(e,showHint){
	if(gl.accOptGMB){gl.accOptGMB.unbox();gl.accOptGMB=0;}if(!gl.opinp){gl.opinp=gi('opinp');gl.npinp=gi('npinp'),gl.npcinp=gi('npcinp');}
	var msg=ce('div','np'),t1=ce('div');ac(msg,t1);t1.innerHTML=(showHint?'Enter the temporary sent to your email/mobile and set a new password.<br /><br />':'')+'The password needs to have atleast 1 alphabet and 1 number and be atleast 8 characters long';t1.style.marginBottom='10px';
	var optxt=ce('div','optxt',msg),nptxt=ce('div','nptxt',msg),npctxt=ce('div','npctxt',msg);
	del(gl.npinp);del(gl.opinp);del(gl.npcinp);ibe(gl.opinp,nptxt);ibe(gl.npinp,npctxt);ac(msg,gl.npcinp);gl.opinp.style.display='block';gl.npinp.style.display='block';gl.npcinp.style.display='block';
	optxt.innerHTML=showHint?'Temporary password':'Old Password';nptxt.innerHTML='New Password';npctxt.innerHTML='Confirm new password';
	gl.accPWGmb=new GMsgBox('SET NEW PASSWORD',[msg],[{val:'Save password',evt:'click',handler:function(e){signinenter(e);}},{val:'close',evt:'close',handler:function(e){gl.accPWGmb.unbox(e);gl.accPWGmb=0;gl.reset=0;}}],450,showHint?390:330,25,120,'nwp',0.95,'accOpt');gl.reset=1;
	if(gi('pw')&&gi('pw').value&&gi('pw').value.length){gl.opinp.value=gi('pw').value;gl.npinp.focus();gi('optxt').innerHTML='Temporary password';}
};
var logout=function(e){
	var r=cXHR();r.onreadystatechange=function(){if(r.readyState==4){if(r.status==200){window.location.reload();}}};
	r.open("POST",window.location.href.split('/'+projectFolderRoot+'/')[0]+"/"+projectFolderRoot+"/s3rv1cs/n1md/pm1/pm1start.php",true);r=sXHRh(r);r.send('fun=logout');
};
var showAccError=function(errorCode){var t=accErrors[errorCode]||0;if(!t)return;new GMsgBox(t.t,t.m,0,t.w,t.h,20,9000,randomStr(8),0.95,'accOpt','/emr/s3rv1cs/1mg5/close.png');};
accErrors=[
	{t:'INVALID PASSWORD',m:'The length of the password should be more than 8 characters long and contain atleast 1 alphabet and 1 number.<br /><br />Please try again or <a href="mailto:reports@medanta.org">contact us</a> if this problem persists',w:375,h:210},
	{t:'INVALID USER-ID',m:'The length of the username should be between '+gl.unmin+' and '+gl.unmax+' characters.<br /><br />Please try again or <a href="mailto:reports@medanta.org">contact us</a> if this problem persists',w:350,h:205},	
	{t:'INVALID CREDENTIALS',m:'The user-name or password are incorrect or inactive. <br /><br />Please try again with a valid user-name and password or <a href="mailto:reports@medanta.org">contact us</a> if this problem persists',w:350,h:205},
	{t:'INVALID CREDENTIALS',m:'The user ID and mobile no/email address you entered does not exist in our records.<br /><br />Please try again with a valid user ID and mobile no/email address or <a href="mailto:reports@medanta.org">contact us</a> if this problem persists',w:350,h:205},
	{t:'INACTIVE ACCOUNT',m:'Your account is inactive.<br /><br />Please get in touch with your IT Administrator or <a href="mailto:reports@medanta.org">contact us</a> if you think this is an error',w:350,h:205},
	{t:'RESET PASSWORD',m:'You have reset your password only recently. Please set a new password to login to the application.<br /><br />If this problem persists, please <a href="mailto:reports@medanta.org">contact us</a>',w:350,h:205},
	{t:'INTERNAL ERROR',m:'There seems to be an internal error in authenticating your credentials.<br /><br />Please try again or <a href="mailto:reports@medanta.org">contact us</a> if you think this error persists',w:350,h:205},
	{t:'PASSWORD MISMATCH',m:'The "New password" and "Confirm new password" are not the same.<br /><br />Please try again by entering the your new password twice or <a href="mailto:reports@medanta.org">contact us</a> if you think this is an error',w:375,h:220},
	{t:'INVALID PASSWORD',m:'The new password cannot be same as the old password.<br /><br /> Please try again with a different password or <a href="mailto:reports@medanta.org">contact us</a> if this problem persists',w:375,h:220},
	{t:'ACCOUNT LOCKED',m:'This account has been locked due to 3 consecutive failed attempts.<br /><br />Please <a href="mailto:reports@medanta.org">contact us</a> if you think this is an error or click on the <b>forgot</b> button to reset the password',w:375,h:220},
	{t:'DONE',m:'Your password has been successfully changed.',w:270,h:170}
];
var accWait=function(t){
	var src=window.location.href.split('/'+projectFolderRoot+'/')[0]+'/'+projectFolderRoot+'/s3rv1cs/1mg5/wait.gif';
	switch(t){
		case 1:gl.wBox=new GMsgBox('Verifying credentials <img src="'+src+'" style="height:8px; margin-left:5px;" />','Please wait while your credentials are verified. <br /><br />This is likely to take a few seconds',0,315,150,25,1000,'wait',.98,'accOpt');break;
		case 2:gl.wBox=new GMsgBox('Generating temporary password <img src="'+src+'" style="height:8px; margin-left:5px;" />','Please wait while the temporary password is generated and mailed to your registered contact (email/mobile). <br /><br />This is likely to take a few seconds',0,340,175,25,1000,'wait',.98,'accOpt');break;
		case 3:gl.wBox=new GMsgBox('Saving new password <img src="'+src+'" style="height:8px; margin-left:5px;" />','Please wait while the new password is saved. <br /><br />This is likely to take a few seconds',0,315,150,25,1000,'wait',.98,'accOpt');break;
		case 4:gl.wBox=new GMsgBox('Retrieving user ID <img src="'+src+'" style="height:8px; margin-left:5px;" />','Please wait while the user ID is retrieved and sent to your registered contact (email/mobile). <br /><br />This is likely to take a few seconds',0,340,175,25,1000,'wait',.98,'accOpt');break;
	}
};
var accUnwait=function(){if(gl.wBox)gl.wBox.unbox();gl.wBox=0;};