/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});

(function() {


}).call(this);

(function() {
  "use strict";
  var $, ATTRIBUTE_NODE, CDATA_SECTION_NODE, COMMENT_NODE, DOCUMENT_FRAGMENT_NODE, DOCUMENT_NODE, DOCUMENT_TYPE_NODE, ELEMENT_NODE, ENTITY_NODE, ENTITY_REFERENCE_NODE, ENV, Environment, LIB_CONFIG, NOTATION_NODE, PROCESSING_INSTRUCTION_NODE, REG_NAMESPACE, Storage, TEXT_NODE, __proc, __util, filterElement, isFunc, isNumber, isObject, isString, objKeys, ref,
    slice = [].slice;

  LIB_CONFIG = {
    name: "YouYu"
  };

  ELEMENT_NODE = 1;

  ATTRIBUTE_NODE = 2;

  TEXT_NODE = 3;

  CDATA_SECTION_NODE = 4;

  ENTITY_REFERENCE_NODE = 5;

  ENTITY_NODE = 6;

  PROCESSING_INSTRUCTION_NODE = 7;

  COMMENT_NODE = 8;

  DOCUMENT_NODE = 9;

  DOCUMENT_TYPE_NODE = 10;

  DOCUMENT_FRAGMENT_NODE = 11;

  NOTATION_NODE = 12;

  REG_NAMESPACE = /^[0-9A-Z_.]+[^_.]?$/i;

  ENV = {
    lang: document.documentElement.lang || document.documentElement.getAttribute("lang") || navigator.language || navigator.browserLanguage
  };

  $ = jQuery;

  isString = function(target) {
    return $.type(target) === "string";
  };

  isNumber = function(target) {
    if (isNaN(target)) {
      return false;
    } else {
      return $.type(target) === "number";
    }
  };

  isObject = function(target) {
    return $.type(target) === "object";
  };

  isFunc = $.isFunction;

  objKeys = (ref = Object.keys) != null ? ref : function(obj) {
    "use strict";
    var keys;
    keys = [];
    if ((obj != null) && !$.isArray(obj) && $.inArray(typeof obj, ["object", "function"]) > -1) {
      $.each(obj, function(k, v) {
        return keys.push(k);
      });
    }
    return keys;
  };


  /*
   * Filter elements in a set.
   * 
   * @private
   * @method  filterElement
   * @param   target {Array/Object/String}    operated object
   * @param   callback {Function}             callback to change unit's value
   * @param   context {Mixed}                 context of callback
   * @return  {Array/Object/String}           与被过滤的目标相同类型
   */

  filterElement = function(target, callback, context) {
    var method, result;
    result = [];
    if (isFunc(callback)) {
      if (context == null) {
        context = window;
      }
      method = Array.prototype.filter;
      if (isFunc(method)) {
        result = method.apply(target, [callback, context]);
      } else {
        $.each(target, function(idx, ele) {
          var cbVal;
          cbVal = callback.apply(context, [ele, idx, target]);
          if (cbVal) {
            result.push(ele);
          }
          return true;
        });
      }
    }
    return result;
  };

  __proc = (function(window) {
    var attach, batch, hasOwnProp, methods, settings;
    settings = {
      validator: function() {
        return true;
      }
    };

    /*
     * 判断某个对象是否有自己的指定属性
    #
     * !!! 不能用 object.hasOwnProperty(prop) 这种方式，低版本 IE 不支持。
    #
     * @private
     * @method   hasOwnProp
     * @param    obj {Object}    Target object
     * @param    prop {String}   Property to be tested
     * @return   {Boolean}
     */
    hasOwnProp = function(obj, prop) {
      if (obj == null) {
        return false;
      } else {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }
    };

    /*
     * 批量添加 method
    #
     * @private
     * @method  batch
     * @param   handlers {Object}   data of a method
     * @param   data {Object}       data of a module
     * @param   host {Object}       the host of methods to be added
     * @return
     */
    batch = function(handlers, data, host) {
      if ($.isArray(data) || ($.isPlainObject(data) && !$.isArray(data.handlers))) {
        $.each(data, function(i, d) {
          return batch(d != null ? d.handlers : void 0, d, host);
        });
      } else if ($.isPlainObject(data) && $.isArray(data.handlers)) {
        $.each(handlers, function(i, info) {
          return attach(info, data, host);
        });
      }
      return host;
    };

    /*
     * 构造 method
    #
     * @private
     * @method  attach
     * @param   set {Object}        data of a method
     * @param   data {Object}       data of a module
     * @param   host {Object}       the host of methods to be added
     * @return
     */
    attach = function(set, data, host) {
      var handler, j, len1, method, name, validator, validators, value;
      name = set.name;
      if (set.expose !== false && !isFunc(host[name])) {
        handler = set.handler;
        value = hasOwnProp(set, "value") ? set.value : data.value;
        validators = [
          set.validator, data.validator, settings.validator, function() {
            return true;
          }
        ];
        for (j = 0, len1 = validators.length; j < len1; j++) {
          validator = validators[j];
          if (isFunc(validator)) {
            break;
          }
        }
        method = function() {
          if (isFunc(handler) && validator.apply(host, arguments) === true) {
            return handler.apply(host, arguments);
          } else {
            return value;
          }
        };
        host[name] = method;
      }
      return host;
    };
    methods = {

      /*
       * 扩展指定对象
       * 
       * @method  mixin
       * @param   unspecified {Mixed}
       * @return  {Object}
       */
      mixin: function() {
        var args, clone, copy, copyIsArray, deep, i, length, name, opts, src, target;
        args = arguments;
        length = args.length;
        target = args[0] || {};
        i = 1;
        deep = false;
        if ($.type(target) === "boolean") {
          deep = target;
          target = args[1] || {};
          i = 2;
        }
        if (typeof target !== "object" && !isFunc(target)) {
          target = {};
        }
        if (length === 1) {
          target = this;
          i--;
        }
        while (i < length) {
          opts = args[i];
          if (opts != null) {
            for (name in opts) {
              copy = opts[name];
              src = target[name];
              if (copy === target) {
                continue;
              }
              if (deep && copy && ($.isPlainObject(copy) || (copyIsArray = $.isArray(copy)))) {
                if (copyIsArray) {
                  copyIsArray = false;
                  clone = src && $.isArray(src) ? src : [];
                } else {
                  clone = src && $.isPlainObject(src) ? src : {};
                }
                target[name] = this.mixin(deep, clone, copy);
              } else if (copy !== void 0) {
                target[name] = copy;
              }
            }
          }
          i++;
        }
        return target;
      },

      /*
       * 切割 Array-Like Object 片段
      #
       * @method   slice
       * @param    target {Array-Like}
       * @param    begin {Integer}
       * @param    end {Integer}
       * @return
       */
      slice: function(target, begin, end) {
        var args, result;
        if (target == null) {
          result = [];
        } else {
          end = Number(end);
          args = [Number(begin) || 0];
          if (arguments.length > 2 && !isNaN(end)) {
            args.push(end);
          }
          result = [].slice.apply(target, args);
        }
        return result;
      },

      /*
       * 判断某个对象是否有自己的指定属性
      #
       * @method   hasProp
       * @param    prop {String}   Property to be tested
       * @param    obj {Object}    Target object
       * @return   {Boolean}
       */
      hasProp: function(prop, obj) {
        return hasOwnProp.apply(this, [(arguments.length < 2 ? this : obj), prop]);
      },

      /*
       * 判断是否为 DOM 对象
       * 
       * @method  isElement
       * @param   object {Mixed}
       * @return  {Boolean}
       */
      isElement: function(object) {
        return object && isObject(object) && object.nodeType === 1;
      },

      /*
       * Determine whether a number is an integer.
      #
       * @method  isInteger
       * @param   object {Mixed}
       * @return  {Boolean}
       */
      isInteger: function(object) {
        return $.isNumeric(object) && /^-?[1-9]\d*$/.test(object);
      },

      /*
       * Determin whether a variable is considered to be empty.
      #
       * A variable is considered empty if its value is or like:
       *  - null
       *  - undefined
       *  - ""
       *  - []
       *  - {}
      #
       * @method  isEmpty
       * @param   object {Mixed}
       * @return  {Boolean}
      #
       * refer: http://www.php.net/manual/en/function.empty.php
       */
      isEmpty: function(object) {
        var name, result;
        result = false;
        if ((object == null) || object === "") {
          result = true;
        } else if (($.isArray(object) || this.isArrayLike(object)) && object.length === 0) {
          result = true;
        } else if (isObject(object)) {
          result = true;
          for (name in object) {
            result = false;
            break;
          }
        }
        return result;
      },

      /*
       * 是否为类数组对象
      #
       * 类数组对象（Array-Like Object）是指具备以下特征的对象：
       * -
       * 1. 不是数组（Array）
       * 2. 有自动增长的 length 属性
       * 3. 以从 0 开始的数字做属性名
      #
       * @method  isArrayLike
       * @param   object {Mixed}
       * @return  {Boolean}
       */
      isArrayLike: function(object) {
        var length, result;
        result = false;
        if (isObject(object) && !$.isWindow(object)) {
          length = object.length;
          if (object.nodeType === 1 && length || !$.isArray(object) && !isFunc(object) && (length === 0 || isNumber(length) && length > 0 && (length - 1) in object)) {
            result = true;
          }
        }
        return result;
      }
    };
    __proc = function(data, host) {
      return batch(data != null ? data.handlers : void 0, data, host != null ? host : {});
    };
    $.each(methods, function(name, handler) {
      return __proc[name] = handler;
    });
    return __proc;
  })(window);

  Storage = (function(__proc) {
    var getData, hasProp, isNamespaceStr, isPlainObj, storage, str2obj;
    hasProp = __proc.hasProp;
    isPlainObj = $.isPlainObject;
    storage = {};
    isNamespaceStr = function(str) {
      return /^[0-9a-z_.]+[^_.]?$/i.test(str);
    };
    str2obj = function(str) {
      var obj;
      obj = storage;
      $.each(str.split("."), function(idx, part) {
        if (!hasProp(part, obj)) {
          obj[part] = {};
        }
        return obj = obj[part];
      });
      return obj;
    };
    getData = function(host, key, map) {
      var keys, regexp, result, s;
      $.each(key.split("."), function(idx, part) {
        var r;
        r = hasProp(part, host);
        host = host[part];
        return r;
      });
      s = this.settings;
      if (!isPlainObj(map)) {
        map = {};
      }
      keys = isPlainObj(s.keys) ? s.keys : {};
      regexp = s.formatRegExp;
      result = s.value(host, key);
      if ($.type(regexp) === "regexp") {
        result = result.replace(regexp, (function(_this) {
          return function(m, k) {
            var r;
            if (hasProp(k, map)) {
              r = map[k];
            } else if (hasProp(k, keys)) {
              r = keys[k];
            } else {
              r = m;
            }
            if (isFunc(r)) {
              return r();
            } else {
              return r;
            }
          };
        })(this));
      }
      return result;
    };
    Storage = (function() {
      function Storage(namespace) {
        this.settings = {
          formatRegExp: null,
          allowKeys: false,
          keys: {},
          value: function(v, k) {
            return v != null ? v : "";
          }
        };
        this.storage = isNamespaceStr(namespace) ? str2obj("" + namespace) : storage;
      }

      Storage.prototype.set = function(data) {
        return __proc.mixin(true, this.storage, data);
      };

      Storage.prototype.get = function(key, map) {
        var data;
        if (isString(key)) {
          data = getData.apply(this, [this.storage, key, map]);
        } else if (this.settings.allowKeys === true) {
          data = objKeys(this.storage);
        }
        return data != null ? data : null;
      };

      Storage.prototype.config = function(settings) {
        return __proc.mixin(this.settings, settings);
      };

      return Storage;

    })();
    return Storage;
  })(__proc);

  Environment = (function(__proc) {
    var PDFReader, createAXO, detectBrowser, detectPlatform, hasGeneric, hasReader, hasReaderActiveX, jQueryBrowser, nav, platformName, platformVersion, suffix, ua;
    nav = navigator;
    ua = nav.userAgent.toLowerCase();
    suffix = {
      windows: {
        "5.1": "XP",
        "5.2": "XP x64 Edition",
        "6.0": "Vista",
        "6.1": "7",
        "6.2": "8",
        "6.3": "8.1"
      }
    };
    platformName = function() {
      var name;
      name = /^[\w.\/]+ \(([^;]+?)[;)]/.exec(ua)[1].split(" ").shift();
      if (name === "compatible") {
        return "windows";
      } else {
        return name;
      }
    };
    platformVersion = function() {
      var ref1;
      return (ref1 = (/windows nt ([\w.]+)/.exec(ua) || /os ([\w]+) like mac/.exec(ua) || /mac os(?: [a-z]*)? ([\w.]+)/.exec(ua) || [])[1]) != null ? ref1.replace(/_/g, ".") : void 0;
    };
    detectPlatform = function() {
      var platform;
      platform = {
        touchable: false,
        version: platformVersion()
      };
      platform[platformName()] = true;
      if (platform.windows) {
        platform.version = suffix.windows[platform.version];
        platform.touchable = /trident[ \/][\w.]+; touch/.test(ua);
      } else if (platform.ipod || platform.iphone || platform.ipad) {
        platform.touchable = platform.ios = true;
      }
      return platform;
    };
    jQueryBrowser = function() {
      var browser, match, result;
      browser = {};
      match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
      result = {
        browser: match[1] || "",
        version: match[2] || "0"
      };
      if (result.browser) {
        browser[result.browser] = true;
        browser.version = result.version;
      }
      if (browser.chrome) {
        browser.webkit = true;
      } else if (browser.webkit) {
        browser.safari = true;
      }
      return browser;
    };
    detectBrowser = function() {
      var browser, match;
      match = /trident.*? rv:([\w.]+)/.exec(ua);
      if (match) {
        browser = {
          msie: true,
          version: match[1]
        };
      } else {
        browser = jQueryBrowser();
        if (browser.mozilla) {
          browser.firefox = true;
          match = /firefox[ \/]([\w.]+)/.exec(ua);
          if (match) {
            browser.version = match[1];
          }
        }
      }
      browser.language = navigator.language || navigator.browserLanguage;
      return browser;
    };
    createAXO = function(type) {
      var axo, e;
      try {
        axo = new ActiveXObject(type);
      } catch (_error) {
        e = _error;
        axo = null;
      }
      return axo;
    };
    hasReaderActiveX = function() {
      var axo;
      if (__proc.hasProp("ActiveXObject", window)) {
        axo = createAXO("AcroPDF.PDF");
        if (!axo) {
          axo = createAXO("PDF.PdfCtrl");
        }
      }
      return axo != null;
    };
    hasReader = function() {
      var result;
      result = false;
      $.each(nav.plugins, function(i, plugin) {
        result = /Adobe Reader|Adobe PDF|Acrobat/gi.test(plugin.name);
        return !result;
      });
      return result;
    };
    hasGeneric = function() {
      var ref1;
      return ((ref1 = nav.mimeTypes["application/pdf"]) != null ? ref1.enabledPlugin : void 0) != null;
    };
    PDFReader = function() {
      return hasReader() || hasReaderActiveX() || hasGeneric();
    };
    Environment = (function() {
      function Environment() {
        this.platform = detectPlatform();
        this.browser = detectBrowser();
        this.plugins = {
          pdf: PDFReader()
        };
      }

      return Environment;

    })();
    return Environment;
  })(__proc);

  __util = (function(window, __proc) {
    var API, DateTimeFormats, DateTimeNames, HTMLtmpl, HTMLtmplHandler, ISOstr2date, UTCstr2date, addHandlers, apiHandler, apiVer, asset, assetHandler, bindHandler, clone, compareObjects, constructDatasetByAttributes, constructDatasetByHTML, counter, currentPage, currentPageFlag, dateStr2obj, deleteHandler, dtwz, exposeUtilProp, formatDate, getStorageData, handlerArgs, handlerExists, handlerName, initialize, initializer, isExisted, isLimited, last, limit, limiter, pageHandlers, pageViaAJAX, pushSeq, ref1, removeHandler, request, resetConfig, resolvePathname, route, routeHandler, runAllHandlers, runFlowHandlers, runHandler, runHandlers, runPageHandlers, sequence, setData, setStorageData, setup, storage, storageHandler, str2obj, stringifyCollection, support, timezoneOffset, toNS, turbolinksEnabled;
    support = {
      storage: !!window.localStorage
    };
    storage = {

      /*
       * 沙盒运行状态
      #
       * @property  sandboxStarted
       * @type      {Boolean}
       */
      sandboxStarted: false,

      /*
       * 配置
      #
       * @property  config
       * @type      {Object}
       */
      config: {
        debug: true,
        platform: "YouYu",
        version: "",
        locale: ENV.lang,
        lang: ENV.lang.split("-")[0]
      },
      modules: {
        Core: {},
        Project: {}
      },
      regexps: {
        date: {
          iso8601: /^(\d{4})\-(\d{2})\-(\d{2})(?:T(\d{2})\:(\d{2})\:(\d{2})(?:(?:\.)(\d{3}))?(Z|[+-]\d{2}\:\d{2})?)?$/
        },
        object: {
          array: /\[(.*)\]/,
          number: /(-?[0-9]+)/
        }
      },

      /*
       * 函数
      #
       * @property  fn
       * @type      {Object}
       */
      fn: {
        prepare: [],
        ready: [],
        init: {
          ajaxHandler: function(succeed, fail) {
            var _this;
            _this = this;
            return {
              success: function(data, textStatus, jqXHR) {
                var args;
                args = __proc.slice(arguments);

                /*
                 * 服务端在返回请求结果时必须是个 JSON，如下：
                 *    {
                 *      "code": {Integer}       # 处理结果代码，code > 0 为成功，否则为失败
                 *      "message": {String}     # 请求失败时的提示信息
                 *    }
                 */
                if (data.code > 0) {
                  if (isFunc(succeed)) {
                    return succeed.apply($, args);
                  }
                } else {
                  if (isFunc(fail)) {
                    return fail.apply($, args);
                  }
                }
              },
              error: $.noop
            };
          }
        },
        handler: {}
      },

      /*
       * 缓冲区，存储临时数据
      #
       * @property  buffer
       * @type      {Object}
       */
      buffer: {},

      /*
       * 对象池
       * 
       * @property  pool
       * @type      {Object}
       */
      pool: {}
    };
    limiter = {

      /*
       * 键
      #
       * @property  key
       * @type      {Object}
       */
      key: {
        storage: objKeys(storage)
      }
    };
    storage.modules.Core.BuiltIn = {
      handlers: (function() {
        var func, name, stack;
        stack = [];
        for (name in __proc) {
          func = __proc[name];
          stack.push({
            name: name,
            handler: func
          });
        }
        return stack;
      })()
    };

    /*
     * Compare objects' values or references.
     * 
     * @private
     * @method  compareObjects
     * @param   base {Array/Object}
     * @param   target {Array/Object}
     * @param   strict {Boolean}
     * @param   connate {Boolean}
     * @return  {Boolean}
     */
    compareObjects = function(base, target, strict, connate) {
      var isRun, plain, result;
      result = false;
      plain = $.isPlainObject(base);
      if ((plain || connate) && strict) {
        result = target === base;
      } else {
        if (plain) {
          isRun = compareObjects.apply(this, [this.keys(base), this.keys(target), false, true]);
        } else {
          isRun = target.length === base.length;
        }
        if (isRun) {
          $.each(base, (function(_this) {
            return function(i, n) {
              var illegalNums, n_str, t, t_str, t_type, type;
              type = $.type(n);
              t = target[i];
              if ($.inArray(type, ["string", "number", "boolean"] > -1)) {
                n_str = n + "";
                t_str = t + "";
                t_type = $.type(t);
                illegalNums = ["NaN", "Infinity", "-Infinity"];
                if (type === "number" && ($.inArray(n_str, illegalNums) > -1 || $.inArray(t_str, illegalNums) > -1)) {
                  return result = false;
                } else {
                  return result = strict === true ? t === n : t_str === n_str;
                }
              } else if ($.inArray(type, ["null", "undefined"]) > -1) {
                return result = t === n;
              } else if ($.inArray(type, ["date", "regexp", "function"]) > -1) {
                return result = strict ? t === n : t.toString() === n.toString();
              } else if ($.inArray(type, ["array", "object"]) > -1) {
                return result = compareObjects.apply(_this, [n, t, strict, connate]);
              }
            };
          })(this));
        }
      }
      return result;
    };

    /*
     * 将 Array、Object 转化为字符串
     * 
     * @private
     * @method  stringifyCollection
     * @param   collection {Array/Plain Object}
     * @return  {String}
     */
    stringifyCollection = function(collection) {
      var ele, key, stack, val;
      if ($.isArray(collection)) {
        stack = (function() {
          var j, len1, results;
          results = [];
          for (j = 0, len1 = collection.length; j < len1; j++) {
            ele = collection[j];
            results.push(this.stringify(ele));
          }
          return results;
        }).call(this);
      } else {
        stack = (function() {
          var results;
          results = [];
          for (key in collection) {
            val = collection[key];
            results.push("\"" + key + "\":" + (this.stringify(val)));
          }
          return results;
        }).call(this);
      }
      return stack.join(",");
    };
    storage.modules.Core.Global = {
      handlers: [
        {

          /*
           * 扩充对象
           * 
           * @method   extend
           * @param    data {Plain Object/Array}
           * @param    host {Object}
           * @return   {Object}
           */
          name: "extend",
          handler: function(data, host) {
            return __proc(data, host != null ? host : this);
          }
        }, {

          /*
           * 别名
           * 
           * @method  alias
           * @param   name {String}
           * @return
           */
          name: "alias",
          handler: function(name) {
            if (isString(name)) {
              if (window[name] === void 0) {
                window[name] = this;
              }
            }
            return window[String(name)];
          }
        }, {

          /*
           * 更改 LIB_CONFIG.name
           * 
           * @method   mask
           * @param    guise {String}    New name for library
           * @return   {Boolean}
           */
          name: "mask",
          handler: function(guise) {
            var error, lib_name, result;
            if (this.hasProp(guise, window)) {
              if (window.console) {
                console.error("'" + guise + "' has existed as a property of Window object.");
              }
            } else {
              lib_name = this.__meta__.name;
              window[guise] = window[lib_name];
              try {
                result = delete window[lib_name];
              } catch (_error) {
                error = _error;
                window[lib_name] = void 0;
                result = true;
              }
              this.__meta__.name = guise;
            }
            return result;
          },
          validator: function(guise) {
            return isString(guise);
          },
          value: false
        }, {

          /*
           * Returns the namespace specified and creates it if it doesn't exist.
           * Be careful when naming packages.
           * Reserved words may work in some browsers and not others.
          #
           * @method  namespace
           * @param   [hostObj] {Object}      Host object namespace will be added to
           * @param   [ns_str_1] {String}     The first namespace string
           * @param   [ns_str_2] {String}     The second namespace string
           * @param   [ns_str_*] {String}     Numerous namespace string
           * @param   [isGlobal] {Boolean}    Whether set window as the host object
           * @return  {Object}                A reference to the last namespace object created
           */
          name: "namespace",
          handler: function() {
            var args, hostObj, ns;
            args = arguments;
            ns = {};
            hostObj = args[0];
            if (!$.isPlainObject(hostObj)) {
              hostObj = args[args.length - 1] === true ? window : this;
            }
            $.each(args, (function(_this) {
              return function(i, arg) {
                var obj, parts;
                if (isString(arg) && REG_NAMESPACE.test(arg)) {
                  obj = hostObj;
                  parts = arg.split(".");
                  $.each(parts, function(idx, part) {
                    if (obj == null) {
                      return false;
                    }
                    if (!_this.hasProp(part, obj)) {
                      obj[part] = idx === parts.length - 1 ? null : {};
                    }
                    obj = obj[part];
                    return true;
                  });
                  ns = obj;
                }
                return true;
              };
            })(this));
            return ns;
          }
        }, {

          /*
           * Compares two objects for equality.
          #
           * @method  equal
           * @param   base {Mixed}
           * @param   target {Mixed}
           * @param   strict {Boolean}    whether compares the two objects' references
           * @return  {Boolean}
           */
          name: "equal",
          handler: function(base, target, strict) {
            var baseType, connate, plain_b, result;
            result = false;
            baseType = $.type(base);
            if ($.type(target) === baseType) {
              plain_b = $.isPlainObject(base);
              if (plain_b && $.isPlainObject(target) || baseType !== "object") {
                connate = $.isArray(base);
                if (!plain_b && !connate) {
                  base = [base];
                  target = [target];
                }
                if (!($.type(strict) === "boolean")) {
                  strict = false;
                }
                result = compareObjects.apply(this, [base, target, strict, connate]);
              }
            }
            return result;
          },
          validator: function() {
            return arguments.length > 1;
          },
          value: false
        }, {

          /*
           * 字符串化
          #
           * @method  stringify
           * @param   target {Variant}
           * @return  {String}
           */
          name: "stringify",
          handler: function(target) {
            var e, result;
            switch ($.type(target)) {
              case "object":
                result = $.isPlainObject(target) ? "{" + (stringifyCollection.call(this, target)) + "}" : result = "";
                break;
              case "array":
                result = "[" + (stringifyCollection.call(this, target)) + "]";
                break;
              case "function":
              case "date":
              case "regexp":
                result = target.toString();
                break;
              case "string":
                result = "\"" + target + "\"";
                break;
              default:
                try {
                  result = String(target);
                } catch (_error) {
                  e = _error;
                  result = "";
                }
            }
            return result;
          }
        }
      ]
    };
    storage.modules.Core.Object = {
      handlers: [
        {

          /*
           * Get a set of keys/indexes.
           * It will return a key or an index when pass the 'value' parameter.
          #
           * @method  keys
           * @param   object {Object/Function}    被操作的目标
           * @param   value {Mixed}               指定值
           * @return  {Array/String}
          #
           * refer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
           */
          name: "keys",
          handler: function(object, value) {
            var keys;
            keys = [];
            $.each(object, function(k, v) {
              if (v === value) {
                keys = k;
                return false;
              } else {
                return keys.push(k);
              }
            });
            if ($.isArray(keys)) {
              return keys.sort();
            } else {
              return keys;
            }
          },
          validator: function(object) {
            var ref1;
            return object !== null && !(object instanceof Array) && ((ref1 = typeof object) === "object" || ref1 === "function");
          },
          value: []
        }
      ]
    };
    storage.modules.Core.String = {
      value: "",
      validator: function(object) {
        return isString(object);
      },
      handlers: [
        {

          /*
           * 用指定占位符填补字符串
           * 
           * @method  pad
           * @param   string {String}         源字符串
           * @param   length {Integer}        生成字符串的长度，正数为在后面补充，负数则在前面补充
           * @param   placeholder {String}    占位符
           * @return  {String}
           */
          name: "pad",
          handler: function(string, length, placeholder) {
            var index, len, unit;
            if (isString(placeholder) === false || placeholder.length !== 1) {
              placeholder = "\x20";
            }
            if (!this.isInteger(length)) {
              length = 0;
            }
            string = String(string);
            index = 1;
            unit = String(placeholder);
            len = Math.abs(length) - string.length;
            if (len > 0) {
              while (index < len) {
                placeholder += unit;
                index++;
              }
              string = length > 0 ? string + placeholder : placeholder + string;
            }
            return string;
          },
          validator: function(string) {
            var ref1;
            return (ref1 = typeof string) === "string" || ref1 === "number";
          }
        }
      ]
    };

    /*
     * 将日期字符串转化为日期对象
    #
     * @private
     * @method   dateStr2obj
     * @param    date_str {String}
     * @return   {Date}
     */
    dateStr2obj = function(date_str) {
      var date, date_parts;
      date_str = $.trim(date_str);
      date = new Date(date_str);
      if (isNaN(date.getTime())) {
        date_parts = date_str.match(storage.regexps.date.iso8601);
        date = date_parts != null ? ISOstr2date.call(this, date_parts) : new Date;
      }
      return date;
    };

    /*
     * ISO 8601 日期字符串转化为日期对象
    #
     * @private
     * @method   ISOstr2date
     * @param    date_parts {Array}
     * @return   {Date}
     */
    ISOstr2date = function(date_parts) {
      var date, tz_offset;
      date_parts.shift();
      date = UTCstr2date.call(this, date_parts);
      tz_offset = timezoneOffset(date_parts.slice(-1)[0]);
      if (tz_offset !== 0) {
        date.setTime(date.getTime() - tz_offset);
      }
      return date;
    };

    /*
     * 转化为 UTC 日期对象
    #
     * @private
     * @method   UTCstr2date
     * @param    date_parts {Array}
     * @return   {Date}
     */
    UTCstr2date = function(date_parts) {
      var date, handlers;
      handlers = ["FullYear", "Month", "Date", "Hours", "Minutes", "Seconds", "Milliseconds"];
      date = new Date;
      $.each(date_parts, function(i, ele) {
        var handler;
        if ((ele != null) && ele !== "") {
          handler = handlers[i];
          if (handler != null) {
            return date["setUTC" + handler](ele * 1 + (handler === "Month" ? -1 : 0));
          }
        }
      });
      return date;
    };

    /*
     * 相对于 UTC 的偏移值
    #
     * @private
     * @method   timezoneOffset
     * @param    timezone {String}
     * @return   {Integer}
     */
    timezoneOffset = function(timezone) {
      var cap, offset;
      offset = 0;
      if (/^(Z|[+-]\d{2}\:\d{2})$/.test(timezone)) {
        cap = timezone.charAt(0);
        if (cap !== "Z") {
          offset = timezone.substring(1).split(":");
          offset = (cap + (offset[0] * 60 + offset[1] * 1)) * 60 * 1000;
        }
      }
      return offset;
    };
    DateTimeNames = {
      month: {
        long: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      },
      week: {
        long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"],
        short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      }
    };
    DateTimeFormats = {
      "d": function(date) {
        return dtwz.call(this, date.getDate());
      },
      "D": function(date) {
        return DateTimeNames.week.short[date.getDay()];
      },
      "j": function(date) {
        return date.getDate();
      },
      "l": function(date) {
        return DateTimeNames.week.long[date.getDay()];
      },
      "N": function(date) {
        var day;
        day = date.getDay();
        if (day === 0) {
          day = 7;
        }
        return day;
      },
      "S": function(date) {
        var suffix;
        switch (String(date.getDate()).slice(-1)) {
          case "1":
            suffix = "st";
            break;
          case "2":
            suffix = "nd";
            break;
          case "3":
            suffix = "rd";
            break;
          default:
            suffix = "th";
        }
        return suffix;
      },
      "w": function(date) {
        return date.getDay();
      },
      "F": function(date) {
        return DateTimeNames.month.long[date.getMonth()];
      },
      "m": function(date) {
        return dtwz.call(this, DateTimeFormats.n.call(this, date));
      },
      "M": function(date) {
        return DateTimeNames.month.short[date.getMonth()];
      },
      "n": function(date) {
        return date.getMonth() + 1;
      },
      "Y": function(date) {
        return date.getFullYear();
      },
      "y": function(date) {
        return String(date.getFullYear()).slice(-2);
      },
      "a": function(date) {
        var h;
        h = date.getHours();
        if ((0 < h && h < 12)) {
          return "am";
        } else {
          return "pm";
        }
      },
      "A": function(date) {
        return DateTimeFormats.a.call(this, date).toUpperCase();
      },
      "g": function(date) {
        var h;
        h = date.getHours();
        if (h === 0) {
          h = 24;
        }
        if (h > 12) {
          return h - 12;
        } else {
          return h;
        }
      },
      "G": function(date) {
        return date.getHours();
      },
      "h": function(date) {
        return dtwz.call(this, DateTimeFormats.g.call(this, date));
      },
      "H": function(date) {
        return dtwz.call(this, DateTimeFormats.G.call(this, date));
      },
      "i": function(date) {
        return dtwz.call(this, date.getMinutes());
      },
      "s": function(date) {
        return dtwz.call(this, date.getSeconds());
      }
    };

    /*
     * 添加前导“0”
    #
     * @private
     * @method   dtwz
     * @param    datetime {Integer}
     * @return   {String}
     */
    dtwz = function(datetime) {
      return this.pad(datetime, -2, "0");
    };

    /*
     * 格式化日期
    #
     * @private
     * @method   formatDate
     * @param    format {String}
     * @param    date {Date}
     * @return   {String}
     */
    formatDate = function(format, date) {
      var context, formatted;
      if (!($.type(date) === "date") || isNaN(date.getTime())) {
        date = new Date;
      }
      context = this;
      formatted = format.replace(new RegExp("([a-z]|\\\\)", "gi"), function() {
        var handler, j, m, o, p, s;
        m = arguments[0], p = 4 <= arguments.length ? slice.call(arguments, 1, j = arguments.length - 2) : (j = 1, []), o = arguments[j++], s = arguments[j++];
        if (m === "\\") {
          return "";
        } else {
          if (s.charAt(o - 1) !== "\\") {
            handler = DateTimeFormats[m];
          }
        }
        if (handler != null) {
          return handler.call(context, date);
        } else {
          return m;
        }
      });
      return formatted;
    };
    storage.modules.Core.Date = {
      handlers: [
        {

          /*
           * 格式化日期对象/字符串
          #
           * format 参照 PHP：
           *   http://www.php.net/manual/en/function.date.php
           * 
           * @method  date
           * @param   format {String}
           * @param   [date] {Date/String}
           * @return  {String}
           */
          name: "date",
          handler: function(format, date) {
            if (isString(date)) {
              date = dateStr2obj.call(this, date);
            }
            return formatDate.apply(this, [format, date]);
          },
          value: "",
          validator: function(format) {
            return isString(format);
          }
        }, {

          /*
           * 取得当前时间
          #
           * @method   now
           * @param    [is_object] {Boolean}
           * @return   {Integer/Date}
           */
          name: "now",
          handler: function(is_object) {
            var date;
            date = new Date;
            if (is_object === true) {
              return date;
            } else {
              return date.getTime();
            }
          }
        }
      ]
    };

    /*
     * 取得数组或类数组对象中最后一个元素
    #
     * @private
     * @method  last
     * @return
     */
    last = function(array) {
      return __proc.slice(array, -1)[0];
    };

    /*
     * 全局配置
     * 
     * @private
     * @method    setup
     */
    setup = function() {
      $.ajaxSetup({
        type: "post",
        dataType: "json"
      });
      return $(document).ajaxError(function(event, jqXHR, ajaxSettings, thrownError) {
        var response;
        response = jqXHR.responseText;
        return false;
      });
    };

    /*
     * 将处理函数绑定到内部命名空间
     * 
     * @private
     * @method  bindHandler
     * @return
     */
    bindHandler = function() {
      var args, fnList, handler, name;
      args = arguments;
      name = args[0];
      handler = args[1];
      fnList = storage.fn.handler;
      if (args.length === 0) {
        handler = clone(fnList);
      } else if (isString(name)) {
        if (isFunc(handler)) {
          fnList[name] = handler;
        } else {
          handler = fnList[name];
        }
      } else if ($.isPlainObject(name)) {
        handler = {};
        $.each(name, function(funcName, func) {
          if (isFunc(func)) {
            return handler[funcName] = fnList[funcName] = func;
          }
        });
      }
      return handler;
    };

    /*
     * 将处理函数从内部命名空间删除
     * 
     * @private
     * @method  removeHandler
     * @return
     */
    removeHandler = function(name) {
      var e, fnList, result;
      fnList = storage.fn.handler;
      if (isString(name)) {
        if (__proc.hasProp(name, fnList)) {
          try {
            result = delete fnList[name];
          } catch (_error) {
            e = _error;
            fnList[name] = void 0;
            result = true;
          }
        } else {
          result = false;
        }
      } else {
        $.each(name, function(i, n) {
          return result = removeHandler(n);
        });
      }
      return result;
    };

    /*
     * 执行指定函数
     * 
     * @private
     * @method  runHandler
     * @param   name {String}         函数名
     * @param   [args, ...] {List}    函数的参数
     * @return  {Variant}
     */
    runHandler = function(name) {
      var func, j, len1, result;
      result = void 0;
      if ($.isArray(name)) {
        for (j = 0, len1 = name.length; j < len1; j++) {
          func = name[j];
          if (isFunc(func) || isFunc(func = storage.fn.handler[func])) {
            func.call(window);
          }
        }
      } else if (isString(name)) {
        func = storage.fn.handler[name];
        if (isFunc(func)) {
          result = func.apply(window, __proc.slice(arguments, 1));
        }
      }
      return result;
    };

    /*
     * 克隆对象并返回副本
     * 
     * @private
     * @method  clone
     * @param   source {Object}       源对象，只能为数组或者纯对象
     * @return  {Object}
     */
    clone = function(source) {
      var result;
      result = null;
      if ($.isArray(source) || source.length !== void 0) {
        result = [].concat([], __proc.slice(source));
      } else if ($.isPlainObject(source)) {
        result = $.extend(true, {}, source);
      }
      return result;
    };

    /*
     * 获取初始化函数
     * 
     * @private
     * @method  initializer
     * @return  {Function}
     */
    initializer = function(key) {
      return storage.fn.init[key];
    };

    /*
     * Get data from internal storage
    #
     * @private
     * @method  getStorageData
     * @param   ns_str {String}   Namespace string
     * @param   ignore {Boolean}  忽略对 storage key 的限制
     * @return  {String}
     */
    getStorageData = function(ns_str, ignore) {
      var parts, result;
      parts = ns_str.split(".");
      result = null;
      if (ignore || !isLimited(parts[0], limiter.key.storage)) {
        result = storage;
        $.each(parts, function(idx, part) {
          var rv;
          rv = __proc.hasProp(part, result);
          result = result[part];
          return rv;
        });
      }
      return result;
    };

    /*
     * Set data into internal storage
    #
     * @private
     * @method  setStorageData
     * @param   ns_str {String}   Namespace string
     * @param   data {Variant}    
     * @return  {Variant}
     */
    setStorageData = function(ns_str, data) {
      var isObj, key, length, parts, result;
      parts = ns_str.split(".");
      length = parts.length;
      isObj = $.isPlainObject(data);
      if (length === 1) {
        key = parts[0];
        result = setData(storage, key, data, __proc.hasProp(key, storage));
      } else {
        result = storage;
        $.each(parts, function(i, n) {
          if (i < length - 1) {
            if (!__proc.hasProp(n, result)) {
              result[n] = {};
            }
          } else {
            result[n] = setData(result, n, data, $.isPlainObject(result[n]));
          }
          result = result[n];
          return true;
        });
      }
      return result;
    };
    setData = function(target, key, data, condition) {
      if (condition && $.isPlainObject(data)) {
        $.extend(true, target[key], data);
      } else {
        target[key] = data;
      }
      return target[key];
    };

    /*
     * Determines whether a propery belongs an object
    #
     * @private
     * @method  isExisted
     * @param   host {Object}   A collection of properties
     * @param   prop {String}   The property to be determined
     * @param   type {String}   Limits property's variable type
     * @return  {Boolean}
     */
    isExisted = function(host, prop, type) {
      return isObject(host) && isString(prop) && __proc.hasProp(prop, host) && $.type(host[prop]) === type;
    };

    /*
     * Determines whether a key in a limited key list
    #
     * @private
     * @method  isLimited
     * @param   key {String}   Key to be determined
     * @param   list {Array}   Limited key list
     * @return  {Boolean}
     */
    isLimited = function(key, list) {
      return $.inArray(key, list) > -1;
    };

    /*
     * 添加到内部存储对象的访问 key 限制列表中
    #
     * @private
     * @method  limit
     * @param   key {String}  Key to be limited
     * @return
     */
    limit = function(key) {
      return limiter.key.storage.push(key);
    };
    storage.modules.Project.Handler = {
      handlers: [
        {

          /*
           * 将外部处理函数引入到沙盒中
           * 
           * @method  queue
           * @return
           */
          name: "queue",
          handler: function() {
            return bindHandler.apply(window, this.slice(arguments));
          }
        }, {

          /*
           * 将指定处理函数从沙盒中删除
           * 
           * @method  dequeue
           * @return
           */
          name: "dequeue",
          handler: removeHandler,
          validator: function(name) {
            return isString(name) || $.isArray(name);
          },
          value: false
        }, {

          /*
           * 执行指定函数
           * 
           * @method  run
           * @return  {Variant}
           */
          name: "run",
          handler: function() {
            return runHandler.apply(window, this.slice(arguments));
          }
        }, {

          /*
           * 用于 widget 中执行指定函数
          #
           * @method   runInWidget
           * @return
           */
          name: "runInWidget",
          handler: function() {
            var args, callback, funcName, handler;
            args = this.slice(arguments);
            funcName = args[0];
            if (isFunc(funcName)) {
              callback = funcName;
              args = this.slice(args, 1);
              funcName = args[0];
            }
            if (this.functionExists(funcName)) {
              return this.run.apply(this, args);
            } else {
              handler = (function(_this) {
                return function() {
                  if (callback) {
                    callback();
                  }
                  return _this.run.apply(_this, args);
                };
              })(this);
              handler.id = funcName;
              return this.ready(handler, $("body").data("page"), true);
            }
          }
        }, {

          /*
           * Determines whether a function has been defined
          #
           * @method  functionExists
           * @param   funcName {String}
           * @param   isWindow {Boolean}
           * @return  {Boolean}
           */
          name: "functionExists",
          handler: function(funcName, isWindow) {
            return isExisted((isWindow === true ? window : storage.fn.handler), funcName, "function");
          }
        }, {

          /*
           * 只有一个参数并且是字符串时判断当前页面是否为指定页面
           * 否则添加指定页面的执行函数
           * 
           * @method   inPage
           * @param    page {String/Array/Object}    指定页面的标记
           * @param    [func] {Function}             回调函数
           * @param    [stack] {Boolean}             将回调函数加入函数队列
           * @return   {Boolean}
           */
          name: "inPage",
          handler: function(page, func, stack) {
            var args, isObj, result;
            isObj = $.isPlainObject(page);
            if (arguments.length === 1 && !isObj) {
              if (!$.isArray(page)) {
                page = [page];
              }
              result = $.inArray(currentPageFlag(), page) > -1;
            } else {
              if (isString(page)) {
                page = [page];
              }
              args = [page, func];
              if (stack === true || (document.body == null)) {
                args.unshift("init");
                addHandlers.apply(this, args);
              } else {
                args.push(isObj);
                runPageHandlers.apply(this, args);
              }
            }
            return result || false;
          },
          validator: function(page, handler) {
            return isString(page) || $.isArray(page) || $.isPlainObject(page);
          },
          value: false
        }
      ]
    };
    pageHandlers = new Storage("pageHandlers");
    sequence = {};
    counter = {};
    currentPage = void 0;
    turbolinksEnabled = ((ref1 = window.Turbolinks) != null ? ref1.supported : void 0) === true;
    pageViaAJAX = false;
    toNS = function(str) {
      return str.replace(/\-/g, "_");
    };
    handlerExists = function(host, page, func, name) {
      var exists, handlers;
      handlers = pageHandlers.get(page + "." + host + "." + name);
      exists = false;
      if (handlers != null) {
        $.each(handlers, function(n, h) {
          if (__util.hasProp("id", h) || __util.hasProp("id", func)) {
            exists = func.id === h.id;
          } else {
            exists = __util.equal(func, h);
          }
          return !exists;
        });
      }
      return exists;
    };
    handlerName = function(host, page, func) {
      var key, name, ref2;
      key = (func.id != null ? func.id + "_" : "") + func.toString().length.toString(16);
      __util.namespace(counter, key);
      if (!handlerExists(host, page, func, key)) {
        counter[key] = ((ref2 = counter[key]) != null ? ref2 : 0) + 1;
        name = key + "." + counter[key];
      }
      return name;
    };
    pushSeq = function(page, type, name) {
      var seq;
      seq = __util.namespace(sequence, page + "." + type);
      if (seq == null) {
        seq = sequence[page][type] = [];
      }
      return seq.push(name);
    };
    deleteHandler = function(page, type, name) {
      var error, host, part;
      host = pageHandlers.storage[page][type];
      part = name.split(".");
      try {
        delete host[part[0]][part[1]];
      } catch (_error) {
        error = _error;
        host[part[0]][part[1]] = void 0;
      }
      sequence[page][type] = filterElement(sequence[page][type], function(handlerName) {
        return handlerName !== name;
      });
    };
    handlerArgs = function(type, args) {
      var once, page;
      page = args[1];
      once = $.type(page) === "boolean" ? page : args[2];
      page = (page != null) && isString(page) ? toNS(page) : currentPage;
      return [type, [page], args[0], once];
    };
    addHandlers = function(host, page, func, once) {
      var handlers, isPlain;
      isPlain = $.isPlainObject(page);
      handlers = {};
      $.each(page, function(idx, flag) {
        var name, part;
        if (isPlain) {
          func = flag;
          flag = idx;
        }
        if (once) {
          func.execOnce = true;
        }
        if (flag == null) {
          flag = "unspecified";
        }
        flag = toNS(flag);
        name = handlerName(host, flag, func);
        if (name != null) {
          __util.namespace(handlers, flag + "." + host + "." + name);
          part = name.split(".");
          handlers[flag][host][part[0]][part[1]] = func;
          pushSeq(flag, host, name);
        }
        return true;
      });
      return pageHandlers.set(handlers);
    };
    runHandlers = function(page, type, callback) {
      var handlers, ref2;
      handlers = (ref2 = pageHandlers.storage[page]) != null ? ref2[type] : void 0;
      if (handlers) {
        return $.each(sequence[page][type], function(idx, handlerName) {
          var handler, part;
          part = handlerName.split(".");
          handler = handlers[part[0]][part[1]];
          if (callback) {
            callback();
          }
          handler();
          if (handler.execOnce) {
            return deleteHandler(page, type, handlerName);
          }
        });
      }
    };
    runFlowHandlers = function(type) {
      var flag, pages, scripts;
      pages = ["unspecified"];
      flag = currentPageFlag(true);
      scripts = $("body script[data-inside]:not([data-turbolinks-eval='false'][data-loaded='true'])");
      if (type === "prepare" || !turbolinksEnabled || !pageViaAJAX || scripts.size() === 0) {
        pages.push(flag);
      }
      return $.each(pages, function(idx, page) {
        return runHandlers(page, type);
      });
    };
    runPageHandlers = function(page, func, isPlain) {
      return $.each(page, function(idx, flag) {
        if (isPlain) {
          func = flag;
          flag = idx;
        }
        if ($("body").is("[data-page='" + flag + "']")) {
          func();
          return false;
        }
      });
    };
    runAllHandlers = function() {
      var page;
      page = currentPageFlag(true);
      runHandlers(page, "init", function() {
        return currentPage = page;
      });
      runFlowHandlers("prepare");
      return runFlowHandlers("ready");
    };
    currentPageFlag = function(convert) {
      var page;
      page = $("body").data("page");
      if (convert === true) {
        return toNS(page);
      } else {
        return page;
      }
    };

    /*
     * 重新配置系统参数
     * 
     * @private
     * @method  resetConfig
     * @param   setting {Object}      配置参数
     * @return  {Object}              （修改后的）系统配置信息
     */
    resetConfig = function(setting) {
      return clone($.isPlainObject(setting) ? $.extend(storage.config, setting) : storage.config);
    };
    if (turbolinksEnabled) {
      (function() {
        var loaded, method, onload, scripts;
        method = Node.prototype.insertBefore;
        loaded = 0;
        scripts = 0;
        onload = function() {
          loaded++;
          this.setAttribute("data-loaded", true);
          if (loaded === scripts) {
            return runHandlers(currentPageFlag(true), "ready");
          }
        };
        return Node.prototype.insertBefore = function(node) {
          if (node.nodeType === 1 && node.tagName.toLowerCase() === "script" && __util.data(node)["inside"]) {
            scripts++;
            node.async = false;
            node.onload = onload;
          }
          return method.apply(this, arguments);
        };
      })();
    }
    storage.modules.Project.Execution = {
      handlers: [
        {

          /*
           * 沙盒
          #
           * 封闭运行环境的开关，每个页面只能运行一次
           * 
           * @method  sandbox
           * @param   setting {Object}      系统环境配置
           * @return  {Object/Boolean}      （修改后的）系统环境配置
           */
          name: "sandbox",
          handler: function(setting) {
            var result;
            result = resetConfig(setting);
            $(document).on({
              "page:fetch": function() {
                pageViaAJAX = true;
                return __util.destroySystemDialogs();
              },
              "page:load": function() {
                return pageViaAJAX = false;
              }
            });
            $(document).ready(function() {
              return runAllHandlers();
            });
            storage.sandboxStarted = true;
            return result || false;
          },
          value: false,
          validator: function() {
            return storage.sandboxStarted !== true;
          }
        }, {

          /*
           * DOM 未加载完时调用的处理函数
           * 主要进行事件委派等与 DOM 加载进程无关的操作
          #
           * @method  prepare
           * @param   handler {Function}
           * @return
           */
          name: "prepare",
          handler: function(handler) {
            return addHandlers.apply(this, handlerArgs("prepare", arguments));
          }
        }, {

          /*
           * DOM 加载完成时调用的处理函数
          #
           * @method  ready
           * @param   handler {Function}
           * @return
           */
          name: "ready",
          handler: function(handler) {
            return addHandlers.apply(this, handlerArgs("ready", arguments));
          }
        }
      ]
    };

    /*
     * 设置初始化函数
     * 
     * @private
     * @method   initialize
     * @return
     */
    initialize = function() {
      var args, func, key;
      args = arguments;
      key = args[0];
      func = args[1];
      if ($.isPlainObject(key)) {
        return $.each(key, initialize);
      } else if (isString(key) && __proc.hasProp(key, storage.fn.init) && isFunc(func)) {
        return storage.fn.init[key] = func;
      }
    };
    storage.web_api = {};
    storage.config.api = "v1";
    storage.fn.init.apiNS = function(key) {};
    API = new Storage("Web_API");
    API.config({
      formatRegExp: /\:([a-z_]+)/g,
      value: function(val) {
        var ref2;
        return (ref2 = apiVer() + val) != null ? ref2 : "";
      }
    });
    route = new Storage("route");
    route.config({
      formatRegExp: /\:([a-z_]+)/g
    });
    asset = new Storage("asset");
    HTMLtmpl = new Storage("html_template");
    HTMLtmpl.config({
      value: function(val) {
        var ref2;
        return (ref2 = "templates/" + val) != null ? ref2 : "";
      }
    });

    /*
     * 获取 Web API 版本
     * 
     * @private
     * @method   apiVer
     * @return   {String}
     */
    apiVer = function() {
      var ver;
      ver = __util.config("api");
      if (isString(ver) && $.trim(ver) !== "") {
        return "/" + ver;
      } else {
        return "";
      }
    };
    storageHandler = function(type, key, map) {
      var getKey, obj, result;
      switch (type) {
        case "api":
          obj = API;
          getKey = function(k) {
            var ref2;
            return (ref2 = initializer("apiNS")(k)) != null ? ref2 : k;
          };
          break;
        case "route":
          obj = route;
          break;
        case "asset":
          obj = asset;
          break;
        case "template":
          obj = HTMLtmpl;
      }
      if ($.isPlainObject(key)) {
        obj.set(key);
      } else if (isString(key)) {
        result = obj.get((getKey != null ? getKey(key) : key), map);
        if (type === "template") {
          result = JST[result];
          if (map !== void 0) {
            result = result(map);
          }
        }
      }
      return result != null ? result : null;
    };
    apiHandler = function(key, map) {
      return storageHandler("api", key, map);
    };
    routeHandler = function(key, map) {
      return storageHandler("route", key, map);
    };
    assetHandler = function(key) {
      return storageHandler("asset", key);
    };
    HTMLtmplHandler = function(key, data) {
      return storageHandler("template", key, data);
    };
    storage.modules.Project.Setting = {
      handlers: [
        {

          /*
           * 获取系统信息
           * 
           * @method  config
           * @param   [key] {String}
           * @return  {Object}
           */
          name: "config",
          handler: function(key) {
            if (isString(key)) {
              return storage.config[key];
            } else {
              return clone(storage.config);
            }
          }
        }, {

          /*
           * 设置初始化信息
           * 
           * @method  init
           * @return
           */
          name: "init",
          handler: function() {
            return initialize.apply(window, this.slice(arguments));
          }
        }, {

          /*
           * 设置及获取 Web API
           * 
           * @method   api
           * @param    key {String}
           * @param    [map] {Plain Object}
           * @return   {String}
           */
          name: "api",
          handler: apiHandler
        }, {

          /*
           * 设置及获取页面 URL
           * 
           * @method   route
           * @param    key {String}
           * @param    [map] {Plain Object}
           * @return   {String}
           */
          name: "route",
          handler: routeHandler
        }, {

          /*
           * 设置及获取资源 URL
           * 
           * @method   asset
           * @param    key {String}
           * @return   {String}
           */
          name: "asset",
          handler: assetHandler
        }, {

          /*
           * 设置及获取 HTML 模板
          #
           * @method   tmpl
           * @param    key {String}
           * @param    [data] {Plain Object}
           * @return   {String}
           */
          name: "tmpl",
          handler: HTMLtmplHandler
        }
      ]
    };

    /*
     * 通过 HTML 构建 dataset
     * 
     * @private
     * @method  constructDatasetByHTML
     * @param   html {HTML}   Node's outer html string
     * @return  {JSON}
     */
    constructDatasetByHTML = function(html) {
      var dataset, fragment;
      dataset = {};
      fragment = html.match(/<[a-z]+[^>]*>/i);
      if (fragment !== null) {
        $.each(fragment[0].match(/(data(-[a-z]+)+=[^\s>]*)/ig) || [], function(i, attr) {
          attr = attr.match(/data-(.*)="([^\s"]*)"/i);
          dataset[$.camelCase(attr[1])] = attr[2];
          return true;
        });
      }
      return dataset;
    };

    /*
     * 通过属性列表构建 dataset
     * 
     * @private
     * @method  constructDatasetByAttributes
     * @param   attributes {NodeList}   Attribute node list
     * @return  {JSON}
     */
    constructDatasetByAttributes = function(attributes) {
      var dataset;
      dataset = {};
      $.each(attributes, function(i, attr) {
        var match;
        if (attr.nodeType === ATTRIBUTE_NODE && (match = attr.nodeName.match(/^data-(.*)$/i))) {
          dataset[$.camelCase(match(1))] = attr.nodeValue;
        }
        return true;
      });
      return dataset;
    };
    storage.modules.Project.Storage = {
      handlers: [
        {

          /*
           * 获取 DOM 的「data-*」属性集或存储数据到内部/从内部获取数据
           * 
           * @method  data
           * @return  {Object}
           */
          name: "data",
          handler: function() {
            var args, error, length, node, result, target;
            args = arguments;
            length = args.length;
            if (length > 0) {
              target = args[0];
              try {
                node = $(target).get(0);
              } catch (_error) {
                error = _error;
                node = target;
              }
              if (node && node.nodeType === ELEMENT_NODE) {
                result = {};
                if (node.dataset) {
                  result = node.dataset;
                } else if (node.outerHTML) {
                  result = constructDatasetByHTML(node.outerHTML);
                } else if (node.attributes && $.isNumeric(node.attributes.length)) {
                  result = constructDatasetByAttributes(node.attributes);
                }
              } else {
                if (isString(target) && REG_NAMESPACE.test(target)) {
                  result = length === 1 ? getStorageData(target) : setStorageData(target, args[1]);
                  if (length > 1 && last(args) === true) {
                    limit(target.split(".")[0]);
                  }
                }
              }
            }
            return result != null ? result : null;
          }
        }, {

          /*
           * Save data
           */
          name: "save",
          handler: function() {
            var args, key, oldVal, val;
            args = arguments;
            key = args[0];
            val = args[1];
            if (support.storage) {
              if (isString(key)) {
                oldVal = this.access(key);
                localStorage.setItem(key, escape(this.stringify($.isPlainObject(oldVal) && $.isPlainObject(val) ? this.mixin(true, oldVal, val) : val)));
              }
            }
          },
          validator: function() {
            return arguments.length > 1;
          }
        }, {

          /*
           * Access data
           */
          name: "access",
          handler: function() {
            var error, key, result;
            key = arguments[0];
            if (support.storage) {
              result = localStorage.getItem(key);
              if (result != null) {
                if (result === "undefined") {
                  result = void 0;
                } else if (result === "null") {
                  result = null;
                } else {
                  result = unescape(result);
                  try {
                    result = JSON.parse(result);
                  } catch (_error) {
                    error = _error;
                    result = result;
                  }
                }
              } else {
                result = void 0;
              }
            }
            return result;
          },
          value: void 0,
          validator: function(key) {
            return isString(key);
          }
        }
      ]
    };

    /*
     * AJAX & SJAX 请求处理
     * 
     * @private
     * @method  request
     * @param   options {Object/String}   请求参数列表/请求地址
     * @param   succeed {Function}        请求成功时的回调函数
     * @param   fail {Function}           请求失败时的回调函数
     * @param   synch {Boolean}           是否为同步，默认为异步
     * @return  {Object}
     */
    request = function(options, succeed, fail, synch) {
      var handlers;
      if (arguments.length === 0) {
        return;
      }
      if ($.isPlainObject(options) === false) {
        options = {
          url: options
        };
      }
      handlers = initializer("ajaxHandler").apply(this, [succeed, fail]);
      if (!isFunc(options.success)) {
        options.success = handlers.success;
      }
      if (!isFunc(options.error)) {
        options.error = handlers.error;
      }
      return $.ajax($.extend(options, {
        async: synch !== true
      }));
    };
    storage.modules.Project.Request = {
      handlers: [
        {

          /*
           * Asynchronous JavaScript and XML
           * 
           * @method  ajax
           * @param   options {Object/String}   请求参数列表/请求地址
           * @param   succeed {Function}        请求成功时的回调函数
           * @param   fail {Function}           请求失败时的回调函数
           * @return
           */
          name: "ajax",
          handler: function(options, succeed, fail) {
            return request.apply(this, [options, succeed, fail]);
          }
        }, {

          /*
           * Synchronous JavaScript and XML
           * 
           * @method  sjax
           * @param   options {Object/String}   请求参数列表/请求地址
           * @param   succeed {Function}        请求成功时的回调函数
           * @param   fail {Function}           请求失败时的回调函数
           * @return
           */
          name: "sjax",
          handler: function(options, succeed, fail) {
            return request.apply(this, [options, succeed, fail, true]);
          }
        }
      ]
    };
    resolvePathname = function(pathname) {
      if (pathname.charAt(0) === "\/") {
        return pathname;
      } else {
        return "\/" + pathname;
      }
    };
    str2obj = function(kvStr) {
      var obj;
      obj = {};
      $.each(kvStr.split("&"), function(i, str) {
        str = str.split("=");
        if ($.trim(str[0]) !== "") {
          return obj[str[0]] = str[1];
        }
      });
      return obj;
    };
    storage.modules.Project.URL = {
      handlers: [
        {

          /*
           * 获取 URL 的 pathname
          #
           * @method   pathname
           * @param    url {String}
           * @return   {String}
           */
          name: "pathname",
          handler: function(url) {
            return resolvePathname(isString(url) ? url : location.pathname);
          }
        }, {
          name: "url",
          handler: function() {
            var hash, loc, search;
            loc = window.location;
            search = loc.search.slice(1);
            hash = loc.hash.slice(1);
            return {
              search: search,
              hash: hash,
              query: str2obj(search),
              hashMap: str2obj(hash)
            };
          }
        }
      ]
    };
    __util = __proc(storage.modules);
    __util.api.formatList = function(map) {
      if ($.isPlainObject(map)) {
        return API.config({
          keys: map
        });
      }
    };
    __util.api.getValue = function(func) {
      if ($.isFunction(func)) {
        return API.config({
          value: func
        });
      }
    };
    __util.route.formatList = function(map) {
      if ($.isPlainObject(map)) {
        return route.config({
          keys: map
        });
      }
    };
    __util.mixin(new Environment);
    __util.mixin({
      rails: {
        turbolinks: {
          enabled: turbolinksEnabled,
          handlers: pageHandlers.storage,
          sequence: sequence,
          counter: counter
        }
      }
    });
    exposeUtilProp = function() {
      var error;
      try {
        return Object.defineProperty(__util, "__meta__", {
          __proto__: null,
          value: {
            name: "",
            version: ""
          }
        });
      } catch (_error) {
        error = _error;
        return __util.mixin({
          __meta__: {
            name: "",
            version: ""
          }
        });
      }
    };
    exposeUtilProp();
    return __util;
  })(window, __proc);

  __util.mixin(__util.__meta__, LIB_CONFIG);

  __util.alias("CM");

  window[LIB_CONFIG.name] = __util;

}).call(this);

(function() {
  "use strict";
  var $, LIB_CONFIG, _H, eventName, getStorageData, hasOwnProp, hook, needFix, storage;

  LIB_CONFIG = {
    name: "YouYu_Component"
  };

  _H = YouYu;

  $ = jQuery;

  storage = {

    /*
     * 模块
    #
     * @property   modules
     * @type       {Object}
     */
    modules: {},

    /*
     * 已注册组件
    #
     * @property   components
     * @type       {Object}
     */
    components: {},

    /*
     * JavaScript 钩子
    #
     * @property   hook
     * @type       {Object}
     */
    hook: {
      tabs: {
        component: "tabs",
        trigger: "trigger--tab",
        content: "tabs-content"
      },
      score: {
        trigger: "trigger--score"
      },
      dropdown: {
        trigger: "trigger--dropdown"
      },
      uploader: {
        trigger: "trigger--uploader",
        label: "label--uploader"
      }
    }
  };


  /*
   * 判断某个对象是否有自己的指定属性
  #
   * !!! 不能用 object.hasOwnProperty(prop) 这种方式，低版本 IE 不支持。
  #
   * @private
   * @method   hasOwnProp
   * @return   {Boolean}
   */

  hasOwnProp = function(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  };


  /*
   * 获取指定钩子
  #
   * @private
   * @method   hook
   * @param    name {String}     Hook's name
   * @param    no_dot {Boolean}  Return class when true, default is selector
   * @return   {String}
   */

  hook = function(name, no_dot) {
    return (no_dot === true ? "" : ".") + "js-" + getStorageData("hook." + name);
  };


  /*
   * 获取事件名称
   */

  eventName = function(event_name) {
    return (event_name + "." + LIB_CONFIG.name).toLowerCase();
  };


  /*
   * Get data from internal storage
  #
   * @private
   * @method   getStorageData
   * @param    ns_str {String}   Namespace string
   * @return   {String}
   */

  getStorageData = function(ns_str) {
    var parts, result;
    parts = ns_str.split(".");
    result = storage;
    $.each(parts, function(idx, part) {
      var rv;
      rv = hasOwnProp(result, part);
      result = result[part];
      return rv;
    });
    return result;
  };


  /*
   * Whether to need to fix IE
  #
   * @private
   * @method   needFix
   * @param    version {Integer}
   * @return   {Boolean}
   */

  needFix = function(version) {
    return _H.browser.msie && _H.browser.version * 1 < version;
  };

  storage.modules.Component = (function() {
    var Component, isSaved, saveComp, savedComps;
    savedComps = storage.components;
    isSaved = function(compName) {
      return false;
    };
    saveComp = function(compName, compConstructor) {
      return savedComps[compName] = compConstructor;
    };
    Component = (function() {
      function Component(name, func) {
        if (isSaved(name)) {
          throw "The component " + name + " has existed.";
        } else {
          this.name = name;
          saveComp(name, func);
        }
      }

      Component.prototype.register = function() {
        var result;
        result = this.registered !== true;
        if (result) {
          _H[this.name] = savedComps[this.name];
          this.registered = true;
        }
        return result;
      };

      return Component;

    })();
    return Component;
  })();

  _H.addComponent = function(name, func) {
    (new storage.modules.Component(name, func)).register();
    return func;
  };

  (function(_H) {
    return $(function() {
      return $("select.DropList").each(function() {
        var ddl, idx, lst, sel, selected;
        sel = $(this);
        selected = $(":selected", sel);
        idx = $("option", sel).index(selected);
        sel.attr("tabindex", -1).removeClass("DropList").addClass("DropList--dummy");
        ddl = $("<div>", {
          "class": "DropList"
        });
        ddl.append("<div class=\"DropList-selected\"><span class=\"DropList-label\">" + (selected.text()) + "</span></div>\n<div class=\"DropList-dropdown\"><ul class=\"DropList-list\"></ul></div>");
        lst = $(".DropList-list", ddl);
        $("option", sel).each(function() {
          return lst.append("<li class=\"" + (hook("dropdown.trigger", true)) + "\">" + ($(this).text()) + "</li>");
        });
        $("li:eq(" + idx + ")", lst).addClass("is-selected");
        sel.after(ddl);
        return ddl.data(LIB_CONFIG.name + ".DropListDummy", sel);
      });
    });
  })(_H);

  $(document).on("click", hook("dropdown.trigger"), function() {
    var cls, ddl, idx, lst, sel, t;
    t = $(this);
    ddl = t.closest(".DropList");
    lst = t.closest(".DropList-list");
    idx = $("li", lst).index(t);
    cls = "is-selected";
    $("." + cls, lst).removeClass(cls);
    t.addClass(cls);
    $(".DropList-label", ddl).text(t.text());
    sel = ddl.data(LIB_CONFIG.name + ".DropListDummy");
    $(":selected", sel).attr("selected", false);
    $("option:eq(" + idx + ")", sel).attr("selected", true);
    return sel.trigger("change");
  });

  (function(_H) {

    /*
     * Construct HTML string for score
    #
     * @private
     * @method   scoreHtml
     * @param    data {Object}
     * @return   {String}
     */
    var scoreHtml;
    scoreHtml = function(data) {
      var id, score;
      score = data.score;
      id = data.name + "-" + score;
      return "<input id=\"" + id + "\" class=\"Score-storage Score-storage-" + score + "\" type=\"radio\" name=\"" + data.name + "\" value=\"" + score + "\">\n<a class=\"Score-level Score-level-" + score + "\" href=\"http://www.baidu.com/\">\n  <label for=\"" + id + "\">" + score + "</label>\n</a>";
    };
    return $(function() {
      $(".Score--selectable[data-highest]").each(function() {
        var __e, data, highest, lowest;
        __e = $(this);
        highest = Number(__e.data("highest"));
        lowest = 1;
        data = {};
        __e.width(highest * 16);
        data.name = __e.data("name") || ("Score-" + ($(".Score--selectable").index(__e) + 1));
        if (isNaN(highest)) {
          highest = 0;
        } else {
          highest += 1;
        }
        while (lowest < highest) {
          data.score = lowest++;
          __e.append(scoreHtml(data));
        }
        return true;
      });
      if (needFix(9)) {
        return $(".Score--selectable .Score-level").addClass(hook("score.trigger", true));
      }
    });
  })(_H);

  $(document).on("click", hook("score.trigger"), function() {
    var cls, t;
    t = $(this);
    cls = "is-selected";
    t.siblings("." + cls).removeClass(cls);
    t.addClass(cls);
    t.siblings("[checked]").attr("checked", false);
    t.prev(":radio").attr("checked", true);
    t.triggerHandler(eventName("select"));
    return false;
  });

  (function(_H) {
    return $(function() {
      $(".Tabs[data-setdefault!='false'] > .Tabs-triggers").each(function() {
        var group, selector;
        group = $(this);
        selector = ".Tabs-trigger";
        if ($(selector + ".is-selected", group).size() === 0) {
          return $(selector + ":first", group).trigger("click");
        }
      });
      return $(".Tabs-trigger.is-selected").trigger("click");
    });
  })(_H);

  $(document).on("click", hook("tabs.trigger"), function() {
    var tabs, trigger, type;
    trigger = $(this);
    tabs = trigger.closest(".Tabs");
    type = trigger.data("flag");
    $(".Tabs-trigger.is-selected, .Tabs-content.is-selected", tabs).removeClass("is-selected");
    $(".Tabs-content[data-flag='" + type + "']", tabs).add(trigger).addClass("is-selected");
    trigger.triggerHandler(eventName("change"), [type]);
    return false;
  });

  $(document).on("change", hook("uploader.trigger"), function() {
    var files, ipt, label, text, val;
    ipt = $(this);
    label = $(hook("uploader.label"), ipt.closest(".Uploader"));
    files = this.files;
    text = "No files selected";
    val = ipt.val();
    if (files != null) {
      label.text(files.length ? files[0].name : text);
    } else {
      label.text(val === "" ? text : val);
    }
    return false;
  });

}).call(this);

(function() {
  var _P, activityAction, activityDescription, activityGroup, activityItem, changeTriggerState, current_user, generateActivities, getDate, now, num2month, validate;

  _P = CM;

  _P.activities = function() {
    var opts;
    opts = {
      url: _P.api("activities")
    };
    if ($.isPlainObject(arguments[0])) {
      opts.data = arguments[0];
    }
    changeTriggerState(true);
    return _P.ajax(opts, function(data) {
      var length;
      data = validate(data);
      length = data.length;
      if (length) {
        _P.data("cimu", {
          activity: {
            data: {
              filter_id: data[length - 1].id
            }
          }
        });
        generateActivities(data);
        return changeTriggerState();
      }
    });
  };


  /*
   * 检验数据及动态
   */

  validate = function(data) {
    var container, length;
    container = $(".timeline_wrapper");
    length = data.length;
    if (length < _P.data("cimu.activity.limit")) {
      $(".load_activities", container).fadeOut();
    }
    if (_P.inPage("home-index") && $(".activities", container).size() === 0) {
      if (length) {
        if (getDate(data[0].created_at) !== getDate(now())) {
          data.unshift({
            created_at: now(),
            author: current_user(),
            type: "empty",
            target: {
              description: I18n.t("p.activity.find_thing", {
                link: "<a class=\"LG_Button_warn\" href=\"courses\">" + (I18n.t('p.activity.find_button')) + "</a>"
              })
            }
          });
        }
      } else if (_P.data("cimu.activity.loadTime") === 0) {
        data.push({
          created_at: now(),
          author: current_user(),
          type: "no_data",
          target: {
            description: I18n.t("p.activity.no_data_desc", {
              link: "<a class=\"LG_Button_warn\" href=\"courses\">" + (I18n.t('p.activity.no_data_button')) + "</a>"
            })
          }
        });
      }
    }
    return data;
  };


  /*
   * 当前时间
   */

  now = function() {
    return (new Date()).toString();
  };


  /*
   * 当前用户
   */

  current_user = function() {
    return _P.currentUser();
  };


  /*
   * 生成动态列表
   */

  generateActivities = function(data) {
    var container;
    container = $(".timeline_wrapper");
    $.each(data, function(idx, activity) {
      var item;
      item = activityItem(_P.tmpl("activity.item"), activity);
      activityGroup(container, activity.created_at).append(item);
      if (item.siblings("dd").size() === 0) {
        item.addClass("first");
      }
      return item.addClass("last").prev("dd").removeClass("last");
    });
    return $(".activities:first", container).addClass("first");
  };


  /*
   * 生成动态条目组（同一天为一组）
   */

  activityGroup = function(container, date) {
    var group, groupDate;
    groupDate = getDate(date);
    group = $(".activities:last", container);
    if ($("[data-group='" + groupDate + "']", container).size() === 0) {
      group.removeClass("last");
      group = $("<dl />", {
        "class": "activities last",
        "data-group": groupDate
      });
      group.append($("<dt />", {
        "class": "activity-date",
        text: getDate(date, _P.config("lang"))
      }));
      $(".load_activities", container).before(group);
    }
    return group;
  };


  /*
   * 生成动态条目
   */

  activityItem = function(template, data) {
    var activity;
    if (data.target === null) {
      data.type = null;
    }
    activity = $(template({
      activity: data
    }));
    if (data.author.id * 1 === current_user().id * 1) {
      activity.addClass("current_user");
    }
    $(".meta", activity).html($(".meta", activity).html() + activityAction(data.author, data.target, data.type, data.verb));
    $(".description", activity).append($("<div>" + (activityDescription(data.target, data.type)) + "</div>"));
    return activity;
  };

  getDate = function(dateString, format) {
    var across, d, date, match, month, result, year;
    match = dateString.match(/(\d{4})-(\d{2})-(\d{2})/);
    if (match) {
      year = match[1] * 1;
      month = match[2] * 1;
      date = match[3] * 1;
    } else {
      d = new Date(dateString);
      year = d.getFullYear();
      month = d.getMonth() + 1;
      date = d.getDate();
    }
    if (format) {
      across = year !== (new Date()).getFullYear();
      switch (format) {
        case "zh":
          result = (across ? year + "年" : "") + (month + "月" + date + "日");
          break;
        case "en":
          result = ((num2month(month)) + " " + date) + (across ? ", " + year : "");
      }
    } else {
      result = year + "-" + month + "-" + date;
    }
    return result;
  };

  num2month = function(month) {
    var monthMap;
    monthMap = {
      "1": "Jan",
      "2": "Feb",
      "3": "Mar",
      "4": "Apr",
      "5": "May",
      "6": "Jun",
      "7": "Jul",
      "8": "Aug",
      "9": "Sep",
      "10": "Oct",
      "11": "Nov",
      "12": "Dec"
    };
    return monthMap[month];
  };

  activityAction = function(author, target, type, operation) {
    var result;
    switch (type) {
      case "CourseLearningShip":
        result = I18n.t("p.activity.course_" + operation, {
          link: "<a href=\"" + (_P.route("course", {
            id: target.id
          })) + "\">" + target.name + "</a>"
        });
        break;
      case "EpisodeLearningShip":
        result = I18n.t("p.activity.episode_" + operation, {
          link: "<a href=\"" + (_P.route("episode", {
            id: target.id
          })) + "\">" + target.name + "</a>"
        });
        break;
      case "UserMedal":
        result = I18n.t("p.activity.medal", {
          medal: "<b>" + target.name + "</b>"
        });
        break;
      case "empty":
        result = I18n.t("p.activity.look_around");
        break;
      case "no_data":
        result = I18n.t("p.activity.arrived_pool");
        break;
      default:
        result = I18n.t("p.activity.obsolete");
    }
    return "<a href=\"" + (_P.route("user", {
      id: author.slug
    })) + "\" class=\"student_link\" data-role=\"tooltip\" data-user=\"" + author.slug + "\">" + author.name + "</a> " + result;
  };

  activityDescription = function(target, type) {
    if (type === null) {
      return "";
    } else {
      return target.description;
    }
  };


  /*
   * 改变加载动态按钮的动态
   */

  changeTriggerState = function(loading) {
    var trigger;
    trigger = $(".load_activities");
    if (loading) {
      $(".load_more", trigger).hide();
      $(".loading", trigger).show();
      trigger.attr("disabled", true);
    } else {
      $(".loading", trigger).hide();
      $(".load_more", trigger).show();
      trigger.removeAttr("disabled", true);
    }
    return void 0;
  };

}).call(this);

(function() {
  var _dialogs, _i18n, systemDialog, systemDialogHandler;

  _dialogs = {};

  _i18n = function(key) {
    return I18n.t("_SystemDialog." + key);
  };


  /*
   * 生成自定义系统对话框
  #
   * @private
   * @method  systemDialog
   * @param   type {String}
   * @param   message {String}
   * @param   okHandler {Function}
   * @param   cancelHandler {Function}
   * @return  {Boolean}
   */

  systemDialog = function(type, message, okHandler, cancelHandler) {
    var dlg, result;
    result = false;
    if ($.type(type) === "string") {
      type = type.toLowerCase();
      dlg = _dialogs[type];
      if (!dlg) {
        _dialogs[type] = $(this.tmpl("dialog.system")({
          type: type
        })).appendTo($("body"));
      }
      result = systemDialogHandler.apply(this, [type, message, okHandler, cancelHandler]);
    }
    return result;
  };


  /*
   * 系统对话框的提示信息以及按钮处理
  #
   * @private
   * @method  systemDialogHandler
   * @param   type {String}             对话框类型
   * @param   message {String}          提示信息内容
   * @param   okHandler {Function}      确定按钮
   * @param   cancelHandler {Function}  取消按钮
   * @return
   */

  systemDialogHandler = function(type, message, okHandler, cancelHandler) {
    var dlg, dlgContent, handler;
    dlg = _dialogs[type];
    dlgContent = $(".modal-body", dlg);
    handler = function(cb, rv) {
      $(this).modal("hide");
      if ($.isFunction(cb)) {
        cb();
      }
      return rv;
    };
    if (dlgContent.size() === 0) {
      dlgContent = dlg;
    }
    dlgContent.html(message || "");
    if (type === "confirm") {
      $(".YY-button--ok").off("click.YY_SystemDialog").on("click.YY_SystemDialog", function() {
        handler.apply(dlg, [okHandler, true]);
        return true;
      });
      $(".YY-button--cancel").off("click.YY_SystemDialog").on("click.YY_SystemDialog", function() {
        handler.apply(dlg, [cancelHandler, false]);
        return true;
      });
    } else if (type === "confirmex") {
      $(".YY-button--yes").off("click.YY_SystemDialog").on("click.YY_SystemDialog", function() {
        handler.apply(dlg, [okHandler, true]);
        return true;
      });
      $(".YY-button--no").off("click.YY_SystemDialog").on("click.YY_SystemDialog", function() {
        handler.apply(dlg, [cancelHandler, false]);
        return true;
      });
      $(".YY-button--cancel").off("click.YY_SystemDialog").on("click.YY_SystemDialog", function() {
        handler.apply(dlg, [null, false]);
        return true;
      });
    } else {
      $(".YY-button--ok").off("click.YY_SystemDialog").on("click.YY_SystemDialog", function() {
        handler.apply(dlg, [okHandler != null ? okHandler : null, true]);
        return true;
      });
    }
    dlg.modal("show");
    return dlg;
  };

  YouYu.extend({
    handlers: [
      {

        /*
         * 自定义警告提示框
        #
         * @method  alert
         * @param   message {String}
         * @param   [callback] {Function}
         * @return  {Boolean}
         */
        name: "alert",
        handler: function(message, callback) {
          return systemDialog.apply(this, ["alert", message, callback]);
        }
      }, {

        /*
         * 自定义确认提示框（两个按钮）
        #
         * @method  confirm
         * @param   message {String}
         * @param   [ok] {Function}       Callback for 'OK' button
         * @param   [cancel] {Function}   Callback for 'CANCEL' button
         * @return  {Boolean}
         */
        name: "confirm",
        handler: function(message, ok, cancel) {
          return systemDialog.apply(this, ["confirm", message, ok, cancel]);
        }
      }, {

        /*
         * 自定义确认提示框（两个按钮）
        #
         * @method  confirm
         * @param   message {String}
         * @param   [ok] {Function}       Callback for 'OK' button
         * @param   [cancel] {Function}   Callback for 'CANCEL' button
         * @return  {Boolean}
         */
        name: "confirmEX",
        handler: function(message, ok, cancel) {
          return systemDialog.apply(this, ["confirmEX", message, ok, cancel]);
        }
      }, {

        /*
         * 销毁系统对话框
        #
         * @method   destroySystemDialogs
         * @return   {Boolean}
         */
        name: "destroySystemDialogs",
        handler: function() {
          if ($.isPlainObject(_dialogs)) {
            $.each(_dialogs, function(idx, dlg) {
              return dlg.remove();
            });
            _dialogs = {};
          }
          return this.isEmpty(_dialogs);
        }
      }
    ]
  });

}).call(this);

(function() {
  var _P, prefixList, rewrap, supportCSS3Property;

  _P = CM;

  prefixList = ["webkit", "moz", ""];

  supportCSS3Property = function(prop, value) {
    var supported;
    supported = false;
    if ((typeof CSS !== "undefined" && CSS !== null ? CSS.supports : void 0) != null) {
      $.each(prefixList, function(idx, prefix) {
        if (prefix) {
          prefix = "-" + prefix + "-";
        }
        return !(supported = CSS.supports("" + prefix + prop, value));
      });
    }
    return supported;
  };

  rewrap = function(ele, type) {
    var eles, text;
    text = ele.text();
    if (text.length) {
      eles = [];
      $.each(text.split(""), function(idx, chr) {
        return eles.push("<span class=\"punc-" + type + "\">" + chr + "</span>");
      });
      ele.removeClass("punc-" + type).html("");
      ele.append($(eles.join("")));
      return ele.children().unwrap();
    }
  };

  _P.punctuate = function() {
    return $(".punc-emphasis, .punc-guillemet").each(function() {
      var ele;
      ele = $(this);
      if (ele.hasClass("punc-emphasis")) {
        if (!(supportCSS3Property("text-emphasis-style", "dot") && supportCSS3Property("text-emphasis-position", "under"))) {
          return rewrap(ele, "emphasis");
        }
      } else if (ele.hasClass("punc-guillemet")) {
        if (!(supportCSS3Property("text-decoration-style", "wavy") && supportCSS3Property("text-decoration-line", "underline"))) {
          return rewrap(ele, "guillemet");
        }
      }
    });
  };

}).call(this);

(function() {
  var _P, convertQuestionType, generateQuestion, generateQuestions, highlightQuestion, setLoadingFlag, submitAnswer;

  _P = CM;


  /*
   * 生成问题列表
   */

  generateQuestions = function(data, start_index) {
    var container;
    container = $("[data-role='quiz']");
    return $.each(data.test_questions, function(idx, q) {
      var item;
      q.no = start_index + idx + 1;
      item = $(generateQuestion(q, data.quiz_type, container.attr("data-done") === "true", data.exam_time != null));
      return container.append(item);
    });
  };


  /*
   * 生成问题条目
   */

  generateQuestion = function(data, quiz_type, is_finished, is_exam) {
    var params;
    params = {
      question: data,
      code2type: convertQuestionType,
      question_template: generateQuestion,
      answer_template: _P.tmpl("quiz.answer"),
      quiz_type: quiz_type,
      is_finished: is_finished,
      is_exam: is_exam
    };
    return _P.tmpl("quiz.question", params);
  };


  /*
   * 根据问题类型代码转换为文本
   */

  convertQuestionType = function(type_code) {
    var type;
    switch (type_code * 1) {
      case 1:
        type = I18n.t("w.n.single_choice");
        break;
      case 2:
        type = I18n.t("w.n.multiple_choice");
        break;
      case 3:
        type = I18n.t("w.n.fill_in_blank");
        break;
      case 4:
        type = I18n.t("w.n.comprehensive");
        break;
      case 5:
        type = I18n.t("w.n.group_question");
        break;
      case 6:
        type = I18n.t("w.n.true_or_false");
    }
    return type;
  };


  /*
   * 提交问题答案
   */

  submitAnswer = function(e) {
    var answer, data, ipt, key, question, question_type, separator, type;
    ipt = $(this);
    question = ipt.closest(".quiz_question");
    question_type = question.attr("data-type");
    data = {};
    type = ipt.attr("type");
    separator = "";
    switch (question_type * 1) {
      case 2:
        separator = "-";
        key = "answer_list";
        break;
      case 3:
      case 6:
        separator = "!=-=-=-=-=!";
        key = "answer_contents";
    }
    if (question_type === "1") {
      data.answer_index = ipt.val();
    } else {
      answer = [];
      $((type === "text" ? "input" : ":checked"), ipt.closest(".quiz_answer")).each(function() {
        return answer.push($(this).val());
      });
      data[key] = answer.join(separator);
    }
    return $.post(_P.api("front_submit_test_question", {
      id: question.attr("data-question")
    }), data);
  };


  /*
   * 高亮试题
   */

  highlightQuestion = function() {
    if ($("body").data("highlight") === true) {
      return $("[data-answered='false']", $(".quiz_list")).each(function() {
        return $(this).closest(".question").addClass("highlight");
      });
    }
  };

  setLoadingFlag = function(loading) {
    return _P.quiz.loadingData = loading;
  };

  _P.quiz = function() {
    var opts;
    opts = {
      url: _P.api("quiz_test_questions", {
        id: $("[data-quiz]").attr("data-quiz")
      })
    };
    if ($.isPlainObject(arguments[0])) {
      opts.data = $.extend(true, {}, arguments[0]);
    }
    setLoadingFlag(true);
    $("[data-role='quiz']").append("<li class=\"quiz_question quiz_loading\">" + (I18n.t("YouYu.quiz.loading")) + "</li>");
    return _P.ajax(opts, function(data) {
      var ref;
      if (data.test_questions.length < _P.data("cimu.quiz.limit")) {
        _P.data("cimu.quiz", {
          loaded: true
        });
      }
      generateQuestions(data, (opts.data.page - 1) * opts.data.per_page);
      _P.punctuate();
      $(':radio, :checkbox').iCheck({
        checkboxClass: 'icheckbox_flat-green',
        radioClass: 'iradio_flat-green'
      });
      if (typeof MathJax !== "undefined" && MathJax !== null) {
        if ((ref = MathJax.Hub) != null) {
          ref.Queue(["Typeset", MathJax.Hub]);
        }
      }
      setLoadingFlag(false);
      return $(".quiz_loading").remove();
    });
  };

  $(document).on("ifChecked", ".quiz_answer :radio, .quiz_answer :checkbox", submitAnswer);

  $(document).on("change", ".quiz_answer input:not(:radio, :checkbox)", submitAnswer);

  $(document).on("click", ".quiz_ctrl button", function() {
    var btn, container, targetHeight;
    btn = $(this);
    container = btn.closest(".quiz_question");
    if (btn.hasClass("trigger_collapse")) {
      container.data("original-height", container.height()).addClass("expanded");
      targetHeight = parseFloat(container.css("line-height"));
    } else {
      container.removeClass("expanded");
      targetHeight = container.data("original-height");
    }
    container.animate({
      height: targetHeight + "px"
    }, "fast", function() {
      var quizContainer, set;
      quizContainer = btn.closest(".quiz_container");
      set = quizContainer.children(":not(.quiz_desc, .quiz_ctrl)").add(quizContainer.siblings("div"));
      btn.hide();
      btn.siblings("button").show();
      if (btn.hasClass("trigger_expand")) {
        set.css("visibility", "visible");
        if (btn.closest(".quiz_child_list").size() === 0) {
          return container.css("height", "auto");
        }
      } else {
        return set.css("visibility", "hidden");
      }
    });
    return false;
  });

  $(document).on("click", ".quiz_choiceset > a", function() {
    var choice, is_true, q_id, question;
    choice = $(this);
    question = choice.closest(".quiz_question");
    q_id = question.attr("data-question");
    is_true = choice.hasClass("quiz_choice_right");
    $.post(_P.api("front_submit_test_question", {
      id: q_id
    }), {
      is_true: is_true
    }, function() {
      question.attr("data-mark", is_true);
      return $(".quiz_choiceset_label", question).text(I18n.t("p.quiz.retry"));
    });
    return false;
  });

  $(document).on("click", ".quiz_explain > a", function() {
    var attr, is_need, question, trigger;
    trigger = $(this);
    attr = "disabled";
    if (!trigger.attr(attr) && trigger.data("remote") !== true) {
      question = trigger.closest(".quiz_question");
      is_need = trigger.hasClass("quiz_explain_need");
      trigger.attr(attr, true);
      $.post(_P.api("front_submit_test_question", {
        id: question.attr("data-question")
      }), {
        need_explanation: is_need
      }, function() {
        var master;
        if (is_need) {
          trigger.removeClass("quiz_explain_need").removeClass("btn-success").addClass("quiz_explain_needless").addClass("btn-default").attr("title", I18n.t("p.quiz.explain_rollback")).text(I18n.t("p.quiz.explain_rollback"));
        } else {
          trigger.removeClass("quiz_explain_needless").removeClass("btn-default").addClass("quiz_explain_need").addClass("btn-success").attr("title", I18n.t("p.quiz.explain_askfor")).text(I18n.t("p.quiz.explain_askfor"));
        }
        if ((master = $(".quiz_mastered")).size()) {
          master.text(master.text() * 1 + (is_need ? 1 : -1));
        }
        return trigger.removeAttr(attr);
      });
    }
    return false;
  });

  $(document).on("comptabchange", "[data-role='quiz'] .quiz_extra .comp_tab_trigger", function() {
    return $(this).closest(".quiz_question").height("auto");
  });

  _P.ready(function() {
    var is_online, quiz_obj;
    quiz_obj = $("[data-role='quiz']");
    is_online = quiz_obj.is("[data-online='true']");
    return $("#quizSubmit").click(function() {
      var btn, flag, quizArea, quizId;
      btn = $(this);
      quizArea = $(".quizlist_container");
      quizId = quizArea.attr("data-quiz");
      if (is_online) {
        flag = "submit_allowed";
        if (btn.attr("data-recreate") !== "true" && btn.data(flag) !== true) {
          _P.sjax({
            url: _P.api("front_is_quiz_done", {
              id: quiz_obj.attr("data-quiz")
            }),
            type: "get"
          }, function(data) {
            if (data.result) {
              return btn.data(flag, true).click();
            } else {
              return _P.confirm(I18n.t("p.quiz.unfinished_confirm"), function() {
                return btn.data(flag, true).click();
              }, function() {
                $("body").data("highlight", true);
                return highlightQuestion();
              });
            }
          });
          return false;
        } else {
          return $.post(_P.api((btn.attr("data-recreate") === "true" ? "front_recreate_quiz" : "front_submit_quiz"), {
            id: quizId
          }), function() {
            return location.reload();
          });
        }
      } else {
        if (quiz_obj.is("[data-done='true']")) {
          $.post(_P.api("front_recreate_quiz", {
            id: quizId
          }), {
            index: quizArea.attr("data-resindex")
          }, function(data) {
            return location.reload();
          });
        } else {
          $.post(_P.api("front_submit_quiz", {
            id: quizId
          }), function() {
            return location.reload();
          });
        }
        return false;
      }
    });
  });

}).call(this);

(function() {
  var _P, cardButton, cardPosition, cardWrapper, changeBtnStatus, couldBeFriend, fillUserInfo, getUserInfo, initCard, initProfile, initProfileHTML, initSelfHTML, initTooltip, resetTimer;

  _P = CM;


  /*
   * 自定义提示信息卡片
  #
   * @method  tooltip
   * @return
   */

  _P.tooltip = function() {
    if (!_P.browser.msie || _P.browser.version > 7) {
      if (this.signedIn()) {
        initProfile();
      }
      initSelfHTML();
    }
    return void 0;
  };


  /*
   * 卡片通用 HTML 外套
   */

  cardWrapper = function() {
    var card;
    card = $("<div class=\"CM-tooltip\" />");
    card.append("<div class=\"card_wrapper\" />").appendTo($("body"));
    return card;
  };


  /*
   * 卡片显示位置
   */

  cardPosition = function(trigger, card) {
    var card_h, card_w, offset, pos;
    card.css({
      "visibility": "hidden",
      "display": "block",
      "z-index": "-99999"
    });
    pos = {
      x: 0,
      y: 0
    };
    offset = trigger.offset();
    card_h = card.outerHeight(true);
    card_w = card.outerWidth(true);
    if (offset.top < card_h) {
      pos.y = offset.top + trigger.outerHeight(true);
      card.addClass("dir-t");
    } else {
      pos.y = offset.top - card_h;
      card.removeClass("dir-t");
    }
    pos.x = offset.left - parseFloat(card.css("padding-left"));
    card.css({
      "display": "none",
      "visibility": "visible",
      "z-index": "99999"
    });
    return pos;
  };


  /*
   * 初始化卡片
   */

  initCard = function(wrap_cls, cnt_cls) {
    if ($("." + wrap_cls).size() === 0) {
      $(".card_wrapper", cardWrapper().addClass(wrap_cls)).append("<div class=\"" + cnt_cls + "\" />");
    }
    return void 0;
  };


  /*
   * 初始化提示信息
   */

  initTooltip = function() {
    initCard("comp_tooltip", "card_tooltip");
    $(document).on({
      mouseover: function() {
        var container, position, text, tooltip, trigger;
        trigger = $(this);
        text = trigger.attr("title");
        trigger.removeAttr("title");
        if (trigger.is("[data-role='tooltip']") && !trigger.is("[data-types='title']")) {
          return false;
        }
        tooltip = $(".comp_tooltip");
        container = $(".card_tooltip", tooltip);
        position = cardPosition(trigger, tooltip);
        trigger.attr("data-hover", true);
        setTimeout(function() {
          if (trigger.attr("data-hover")) {
            if (text === void 0) {
              container.text(trigger.data("tooltip_title"));
            } else {
              container.text(text);
              trigger.data("tooltip_title", text).attr({
                "data-role": "tooltip",
                "data-types": "title"
              });
            }
            tooltip.css({
              top: position.y + "px",
              left: position.x + "px"
            }).fadeIn();
          }
          return void 0;
        }, 300);
        return void 0;
      },
      mouseout: function() {
        $(this).removeAttr("data-hover");
        $(".comp_tooltip").fadeOut();
        return void 0;
      }
    }, "[data-role='tooltip'][data-types='title'], [title]");
    return void 0;
  };


  /*
   * 初始化人物卡片
   */

  initProfile = function() {
    initProfileHTML();
    return void 0;
  };

  $(document).on({
    mouseenter: function() {
      var card;
      card = $(".comp_profile");
      CM.data("cimu.tooltip.trigger", $(this));
      return card.trigger("tooltipshow");
    },
    mouseleave: function() {
      CM.data("cimu.tooltip.trigger", null);
      return $(".comp_profile").trigger("tooltiphide");
    }
  }, "[data-role='tooltip'][data-user]");

  resetTimer = function() {
    clearTimeout(window.profile_timer);
    return window.profile_timer = void 0;
  };

  $(document).on({
    mouseenter: function() {
      resetTimer();
      return CM.data("cimu.tooltip.entered", "true");
    },
    mouseleave: function() {
      CM.data("cimu.tooltip.entered", "false");
      return $(this).trigger("tooltiphide");
    },
    tooltipshow: function() {
      var card, left, position, top, trigger;
      resetTimer();
      card = $(this);
      trigger = CM.data("cimu.tooltip.trigger");
      if ((trigger != null) && fillUserInfo(card, getUserInfo(trigger.attr("data-user")))) {
        position = cardPosition(trigger, card);
        top = position.y - 10 + "px";
        left = position.x - 35 + "px";
        if (card.is(":hidden")) {
          return card.css({
            top: top,
            left: left
          }).fadeIn();
        } else {
          return card.animate({
            top: top,
            left: left
          });
        }
      }
    },
    tooltiphide: function() {
      return window.profile_timer = setTimeout((function(_this) {
        return function() {
          if (CM.data("cimu.tooltip.entered") !== "true") {
            return $(_this).fadeOut(400, function() {
              return window.profile_timer = void 0;
            });
          }
        };
      })(this), 300);
    }
  }, ".comp_profile");

  $(document).on("click", ".comp_profile button", function() {
    var action, api, btn;
    btn = $(this);
    if (btn.hasClass("CM-btn-remove")) {
      action = "delete";
      api = "delete_friend";
    } else if (btn.hasClass("CM-btn-agree")) {
      action = "confirm";
      api = "confirm_friend_request";
    } else if (btn.hasClass("CM-btn-apply")) {
      action = "add";
      api = "add_friend";
    }
    btn.attr("disabled", true);
    if (action) {
      _P.ajax({
        url: _P.api("front_" + api),
        data: {
          user_id: btn.data("user_id")
        },
        type: "post"
      }, function(data) {
        var relationship, status, users;
        switch (action) {
          case "confirm":
            status = "delete";
            relationship = 0;
            break;
          case "add":
            status = "requested";
            relationship = 2;
            break;
          default:
            status = "add";
            relationship = 3;
        }
        changeBtnStatus(btn, status);
        users = $("body").data("users");
        users[btn.data("user_slug")].relationship = relationship;
        return $("body").data("users", users);
      }, function() {
        if (!btn.hasClass("CM-btn-wait")) {
          return btn.removeAttr("disabled");
        }
      });
    }
    return false;
  });

  initProfileHTML = function() {
    var areaInfo, card, cls;
    cls = "comp_profile";
    card = $("." + cls);
    if (card.size() === 0) {
      card = cardWrapper().addClass(cls);
      $(".card_wrapper", card).append("<div class=\"card_profile\" /><div class=\"card_operation\" />");
      areaInfo = $(".card_profile", card);
      areaInfo.append("<span class=\"YY-label--userLevel\"></span>\n<a class=\"avatar_link\"><img class=\"avatar\"></a>\n<a class=\"name_link\"></a>\n<div class=\"class_info\">\n  <span class=\"profile_class\"></span>\n  <span class=\"profile_id\"></span>\n</div>");
      $(".card_operation", card).append("<button class=\"btn btn-primary btn-xs\" type=\"button\"><span>Follow</span></button>");
    }
    return void 0;
  };


  /*
   * 自定义 HTML
   */

  initSelfHTML = function() {
    initCard("comp_selfhtml", "card_html");
    $(document).on({
      mousemove: function(e) {
        var card, position, srcEle, trigger;
        srcEle = $(e.target);
        trigger = srcEle.closest("[data-role='tooltip'][data-html]");
        card = $(".comp_selfhtml");
        if (trigger.size()) {
          if (card.css("display") === "none" && (srcEle.is(trigger) || $.contains(trigger[0], srcEle[0]))) {
            $(".card_html", card).html(trigger.attr("data-html"));
            position = cardPosition(trigger, card);
            card.css({
              top: position.y - 10 + "px",
              left: position.x - 35 + "px"
            }).fadeIn();
          }
        } else if (card.css("display") !== "none") {
          if (window.selfhtml_timer === void 0 || $.contains(card[0], e.target)) {
            if ($.contains(card[0], e.target)) {
              clearTimeout(window.selfhtml_timer);
              window.selfhtml_timer = void 0;
            } else {
              window.selfhtml_timer = setTimeout(function() {
                if ($.contains(card[0], e.target)) {
                  return window.selfhtml_timer = void 0;
                } else {
                  return card.fadeOut(400, function() {
                    return window.selfhtml_timer = void 0;
                  });
                }
              }, 300);
            }
          }
        }
        return void 0;
      }
    });
    return void 0;
  };


  /*
   * 获取用户信息
   */

  getUserInfo = function(user_slug) {
    var info, users;
    users = $("body").data("users");
    if (!users) {
      users = {};
      $("body").data("users", users);
    }
    info = users[user_slug];
    if (!info) {
      info = _P.user(user_slug);
      users[user_slug] = info;
      $("body").data("users", users);
    }
    if ($.isEmptyObject(info)) {
      return null;
    } else {
      return info;
    }
  };


  /*
   * 填充用户卡片的信息
   */

  fillUserInfo = function(card, user_info) {
    var result;
    result = false;
    if (user_info) {
      $(".avatar_link, .name_link", card).attr("href", user_info.home_page);
      $(".name_link", card).text(user_info.name);
      if (user_info.level_name != null) {
        $(".YY-label--userLevel", card).css("background-color", user_info.level_color).show().text(user_info.level_name);
      } else {
        $(".YY-label--userLevel", card).hide();
      }
      $.each({
        profile_class: "class_grade.name",
        profile_id: "serial_number"
      }, function(k, v) {
        var text;
        text = _P.namespace(user_info, v);
        $("." + k, card).text(text != null ? text : "");
        return void 0;
      });
      $(".avatar", card).attr({
        src: user_info.avatar,
        srcset: (CM.img2hd(user_info.avatar)) + " 2x",
        alt: user_info.name
      });
      cardButton(card, user_info);
      result = true;
    }
    return result;
  };

  couldBeFriend = function(user) {
    var ref;
    return user.user_type === "student" && !((ref = user.relationship) === null || ref === (-1));
  };

  cardButton = function(card, user_info) {
    var btn, status;
    btn = $(":button", card);
    if (couldBeFriend(user_info)) {
      btn.data("user_slug", user_info.slug);
      btn.data("user_id", user_info.id);
      switch (user_info.relationship) {
        case 0:
          status = "delete";
          break;
        case 1:
          status = "confirm";
          break;
        case 2:
          status = "requested";
          break;
        default:
          status = "add";
      }
      changeBtnStatus(btn, status);
      card.removeClass("CM-nobutton");
    } else {
      card.addClass("CM-nobutton");
      btn.removeData("user_slug");
      btn.removeData("user_id");
    }
    return void 0;
  };

  changeBtnStatus = function(btn, status) {
    var cls, i, len, ref;
    ref = ["CM-btn-remove", "CM-btn-agree", "CM-btn-apply", "CM-btn-wait"];
    for (i = 0, len = ref.length; i < len; i++) {
      cls = ref[i];
      btn.removeClass(cls);
    }
    btn.removeAttr("disabled");
    switch (status) {
      case "delete":
        $("span", btn).text(I18n.t("p.friend.remove"));
        btn.addClass("CM-btn-remove");
        break;
      case "confirm":
        $("span", btn).text(I18n.t("p.friend.agree"));
        btn.addClass("CM-btn-agree");
        break;
      case "add":
        $("span", btn).text(I18n.t("p.friend.apply"));
        btn.addClass("CM-btn-apply");
        break;
      case "requested":
        $("span", btn).text(I18n.t("p.friend.wait"));
        btn.addClass("CM-btn-wait").attr("disabled", true);
    }
    return void 0;
  };

}).call(this);

(function() {
  var _P, buttonSet, deleteFile, errorCodes, getQiniuData, getQiniuUrl, httpError, initUploader, initUploaderUI, parseJSON, previewArea, progressBar, qiniuSettings, temp, updateSetting, updateUIState;

  _P = CM;

  temp = {};

  _P.uploader = function(settings) {
    if ($.isArray(settings)) {
      return this.each(settings, (function(_this) {
        return function(s) {
          return _this.uploader(s);
        };
      })(this));
    } else if ($.isPlainObject(settings)) {
      temp.cancel_upload = settings.cancel_upload;
      return initUploader(settings);
    }
  };

  parseJSON = function(json_str) {
    if ((typeof JSON !== "undefined" && JSON !== null ? JSON.parse : void 0) != null) {
      return JSON.parse(json_str);
    } else {
      return eval("json=" + json_str);
    }
  };

  errorCodes = function(up, err, uploader) {
    var errTip, key, max_file_size;
    switch (err.code) {
      case plupload.FAILED:
        key = "p.message.upload_failed";
        break;
      case plupload.FILE_SIZE_ERROR:
        max_file_size = up.getOption && up.getOption("max_file_size");
        max_file_size = max_file_size || (up.settings && up.settings.max_file_size);
        errTip = I18n.t("p.message.filesize_less", {
          filesize: max_file_size
        });
        break;
      case plupload.FILE_EXTENSION_ERROR:
        key = "p.qiniu.validate_failed";
        break;
      case plupload.HTTP_ERROR:
        key = httpError(err);
        break;
      case plupload.SECURITY_ERROR:
        key = "p.qiniu.security_error";
        break;
      case plupload.GENERIC_ERROR:
        key = "p.message.upload_failed";
        break;
      case plupload.IO_ERROR:
        key = "p.message.upload_failed";
        break;
      case plupload.INIT_ERROR:
        key = "p.qiniu.init_error";
        uploader.destroy();
        break;
      default:
        errTip = err.message + err.details;
    }
    if (key != null) {
      return I18n.t(key);
    } else {
      return errTip;
    }
  };

  httpError = function(err) {
    var key;
    switch (err.status) {
      case 400:
        key = "request_error";
        break;
      case 401:
        key = "authorize_failed";
        break;
      case 405:
        key = "client_error";
        break;
      case 579:
        key = "callback_failed";
        break;
      case 599:
        key = "network_error";
        break;
      case 614:
        key = "file_exists";
        break;
      case 631:
        key = "bucket_not_exists";
        break;
      case 701:
        key = "data_validate_failed";
        break;
      default:
        key = "unknown_error";
    }
    return "p.qiniu." + key;
  };


  /*
   * 初始化上传文件控件
   */

  initUploader = function(settings) {
    var key, target, target_id, uploader;
    target_id = settings.id;
    target = $("#" + target_id);
    target.attr("data-original-storage-id", target.val());
    key = "uploader-inited";
    if (target.data(key) !== true) {
      initUploaderUI(settings.id);
      target.data(key, true);
      if (_P.spaceOverflow()) {
        return $("#" + target_id + "-trigger").on("click", function() {
          return _P.alert(I18n.t("p.message.overflow"));
        });
      } else {
        uploader = Qiniu.uploader(qiniuSettings(settings));
        uploader.unbind("Error");
        return uploader.bind("Error", (function(uploader) {
          return function(up, err) {
            var e, info;
            if (err.file) {
              info = parseJSON(err.response).error;
              try {
                _P.log(parseJSON(info));
              } catch (_error) {
                e = _error;
                _P.log(info);
              }
              if (typeof settings.callback_failed === 'function') {
                settings.callback_failed(errorCodes(up, err, uploader));
              } else {
                _P.alert(errorCodes(up, err, uploader));
              }
              $(".Uploader-button--cancel", up.getOption("container")).trigger("click");
            }
            return up.refresh();
          };
        })(uploader));
      }
    }
  };


  /*
   * 初始化控件 UI
   */

  initUploaderUI = function(id) {
    var target, type, val;
    target = $("#" + id);
    type = target.data("uploader-type");
    val = target.data("uploader-value");
    return target.wrap("<div id=\"" + id + "-uploader\" class=\"comp_uploader Uploader\" />").before(previewArea(type, val)).after(buttonSet(id, target.data("uploader-required") != null)).after(progressBar()).hide();
  };


  /*
   * 目标预览区
   */

  previewArea = function(type, value) {
    var area;
    if (type === "image") {
      area = $("<img class=\"comp_uploader-thumbnail\" src=\"" + value + "\">");
    } else {
      if ((value == null) || value === "") {
        value = I18n.t("p.message.no_files_selected");
      }
      area = $("<span class=\"comp_uploader-label\">" + value + "</span>");
    }
    return area;
  };


  /*
   * 初始化控件按钮组
   */

  buttonSet = function(target_id, is_required) {
    var buttons, classes;
    classes = [];
    buttons = $("<div />", {
      "class": "Uploader-buttonset"
    }).append($("<button />", {
      "type": "button",
      "id": target_id + "-trigger",
      "class": "Uploader-button Uploader-button--file",
      text: I18n.t("w.v.upload_files")
    })).append($("<button />", {
      "type": "button",
      "id": target_id + "-cancel",
      "class": "Uploader-button Uploader-button--cancel temple",
      text: I18n.t("w.v.cancel")
    }));
    if ($("#" + target_id).data("uploader-small") != null) {
      $(".Uploader-button", buttons).addClass("Uploader-button--small");
    }
    if (!is_required) {
      buttons.append($("<button />", {
        "type": "button",
        "id": target_id + "-delete",
        "class": "Uploader-button Uploader-button--delete",
        text: I18n.t("w.v.delete")
      }));
    }
    return buttons;
  };


  /*
   * 初始化控件进度条
   */

  progressBar = function() {
    return $("<div />", {
      "class": "Uploader-progressbar temple"
    }).append("<div class=\"Uploader-progress\"><div class=\"Uploader-bar\"></div></div>");
  };


  /*
   * 更改按钮的显示状态
   */

  updateUIState = function(container, state) {
    var cancelBtn, form, notUploading, otherBtns, templeSet, uploaders;
    cancelBtn = $(".Uploader-buttonset .Uploader-button--cancel", container);
    otherBtns = cancelBtn.siblings(".Uploader-button");
    templeSet = cancelBtn.add($(".Uploader-progressbar", container));
    form = container.closest("form");
    $(".Uploader-bar", container).width(0);
    if (state === "start") {
      templeSet.removeClass("temple");
      otherBtns.addClass("temple");
      return $(":submit", form).attr("disabled", true);
    } else if (state === "stop") {
      templeSet.addClass("temple");
      otherBtns.removeClass("temple");
      notUploading = 0;
      uploaders = $(".comp_uploader", form);
      uploaders.each(function() {
        var t, u;
        u = $(this);
        t = u.data("uploader-target");
        if ((t.data("uploader-instance") == null) && (t.data("uploader-file") == null)) {
          notUploading++;
        }
        $(".moxie-shim-flash", u).attr("style", t.data("uploader-flash"));
        return t.removeData("uploader-flash");
      });
      if (notUploading === uploaders.size()) {
        return $(":submit", container.closest("form")).removeAttr("disabled");
      }
    }
  };

  getQiniuUrl = function(type) {
    return "/qiniu_direct_storage/qiniu_storages/" + type;
  };

  getQiniuData = function(uploader_type) {
    var result;
    result = void 0;
    _P.sjax({
      url: getQiniuUrl("builder"),
      type: "get",
      data: {
        uploader: uploader_type,
        owner_type: "User",
        owner_id: _P.currentUser().id
      }
    }, function(data) {
      return result = data;
    });
    return result;
  };

  updateSetting = function(uploader, type) {
    var data;
    data = getQiniuData(type);
    return uploader.setOption({
      qiniu_key: data.full_key,
      uptoken: data.upload_token,
      x_vars: {
        youyu_token: data.youyu_token,
        custom_fields: _P.stringify(data.custom_fields)
      }
    });
  };


  /*
   * 构造 qiniu-js-sdk 所需配置
   */

  qiniuSettings = function(uploader_settings) {
    var before_send, container, extensions, qiniu_data, settings, target, target_id, uploader_type;
    uploader_type = uploader_settings.uploader;
    qiniu_data = getQiniuData(uploader_type);
    target_id = uploader_settings.id;
    target = $("#" + target_id);
    container = $("#" + target_id + "-uploader");
    target.data("uploader-name", uploader_type);
    container.data("uploader-target", target);
    before_send = uploader_settings.before_send;
    settings = {
      cimu_settings: uploader_settings,
      qiniu_key: qiniu_data.full_key,
      runtimes: "html5,flash,html4",
      multi_selection: false,
      browse_button: target_id + "-trigger",
      container: container.get(0),
      uptoken: qiniu_data.upload_token,
      domain: "http://" + qiniu_data.bucket_domain + "/",
      auto_start: true,
      x_vars: {
        youyu_token: qiniu_data.youyu_token,
        custom_fields: _P.stringify(qiniu_data.custom_fields)
      },
      init: {
        BeforeUpload: function(up, file) {
          target.data("uploader-instance", up);
          target.data("uploader-file", file);
          target.data("uploader-original", target.val());
          target.data("uploader-flash", $(".moxie-shim-flash", container).attr("style"));
          if (!_.isUndefined(before_send)) {
            before_send(container);
          }
          return updateUIState(container, "start");
        },
        UploadProgress: function(up, file) {
          return $(".Uploader-bar", container).css("width", file.percent + "%");
        },
        FileUploaded: function(up, file, info) {
          var callback;
          if ($.type(info) === "string") {
            info = parseJSON(info);
          }
          if (target.val() !== "" && target.val() !== target.data("original-storage-id").toString()) {
            deleteFile(target);
          }
          target.val(info.id);
          if (target.data("uploader-type") === "image") {
            $(".comp_uploader-thumbnail", container).attr("src", "" + info.url);
          } else {
            $(".comp_uploader-label", container).text(info.filename);
          }
          target.removeData("uploader-instance");
          target.removeData("uploader-file");
          updateUIState(container, "stop");
          updateSetting(up, target.data("uploader-name"));
          callback = up.getOption("cimu_settings").uploaded;
          if ($.isFunction(callback)) {
            return callback(target, container);
          }
        },
        Key: function(up, file) {
          return (up.getOption("qiniu_key")) + "." + (file.name.split(".").pop());
        }
      }
    };
    if (qiniu_data.white_list.length) {
      extensions = qiniu_data.white_list.join(", ");
      settings.filters = {
        mime_types: [
          {
            title: extensions,
            extensions: extensions.replace(/\s*/g, "")
          }
        ]
      };
    }
    return settings;
  };


  /*
   * 删除文件
   */

  deleteFile = function(target) {
    var file_id;
    file_id = target.val();
    if (file_id !== "") {
      return _P.ajax({
        url: getQiniuUrl("delete"),
        type: "delete",
        data: {
          storage_id: file_id
        },
        error: function() {
          return target.val("");
        }
      });
    }
  };

  $(document).on("click", ".Uploader-button--delete", function() {
    deleteFile($(this).closest(".comp_uploader").data("uploader-target"));
    return false;
  });

  $(document).on("click", ".Uploader-button--cancel", function() {
    var container, inst, ref, target;
    target = $(this).closest(".comp_uploader").data("uploader-target");
    inst = target.data("uploader-instance");
    inst.stop();
    inst.removeFile(target.data("uploader-file"));
    target.val((ref = target.data("uploader-original")) != null ? ref : "").removeData("uploader-instance").removeData("uploader-file").removeData("uploader-original");
    updateUIState($("#" + (target.get(0).id) + "-uploader"), "stop");
    container = $("#" + (target.get(0).id) + "-uploader").get(0);
    if (!_.isUndefined(temp.cancel_upload)) {
      temp.cancel_upload($(container));
    }
    return false;
  });

}).call(this);

//! moment.js
//! version : 2.10.6
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, function () { 'use strict';

    var hookCallback;

    function utils_hooks__hooks () {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback (callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return Object.prototype.toString.call(input) === '[object Array]';
    }

    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function create_utc__createUTC (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty           : false,
            unusedTokens    : [],
            unusedInput     : [],
            overflow        : -2,
            charsLeftOver   : 0,
            nullInput       : false,
            invalidMonth    : null,
            invalidFormat   : false,
            userInvalidated : false,
            iso             : false
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    function valid__isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            m._isValid = !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated;

            if (m._strict) {
                m._isValid = m._isValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }
        }
        return m._isValid;
    }

    function valid__createInvalid (flags) {
        var m = create_utc__createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        }
        else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    var momentProperties = utils_hooks__hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;

        if (typeof from._isAMomentObject !== 'undefined') {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (typeof from._i !== 'undefined') {
            to._i = from._i;
        }
        if (typeof from._f !== 'undefined') {
            to._f = from._f;
        }
        if (typeof from._l !== 'undefined') {
            to._l = from._l;
        }
        if (typeof from._strict !== 'undefined') {
            to._strict = from._strict;
        }
        if (typeof from._tzm !== 'undefined') {
            to._tzm = from._tzm;
        }
        if (typeof from._isUTC !== 'undefined') {
            to._isUTC = from._isUTC;
        }
        if (typeof from._offset !== 'undefined') {
            to._offset = from._offset;
        }
        if (typeof from._pf !== 'undefined') {
            to._pf = getParsingFlags(from);
        }
        if (typeof from._locale !== 'undefined') {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i in momentProperties) {
                prop = momentProperties[i];
                val = from[prop];
                if (typeof val !== 'undefined') {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            utils_hooks__hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment (obj) {
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }

    function absFloor (number) {
        if (number < 0) {
            return Math.ceil(number);
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function Locale() {
    }

    var locales = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return null;
    }

    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && typeof module !== 'undefined' &&
                module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                require('./locale/' + name);
                // because defineLocale currently also sets the global locale, we
                // want to undo that for lazy loaded locales
                locale_locales__getSetGlobalLocale(oldLocale);
            } catch (e) { }
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function locale_locales__getSetGlobalLocale (key, values) {
        var data;
        if (key) {
            if (typeof values === 'undefined') {
                data = locale_locales__getLocale(key);
            }
            else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale (name, values) {
        if (values !== null) {
            values.abbr = name;
            locales[name] = locales[name] || new Locale();
            locales[name].set(values);

            // backwards compat for now: also set the locale
            locale_locales__getSetGlobalLocale(name);

            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    // returns locale data
    function locale_locales__getLocale (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    var aliases = {};

    function addUnitAlias (unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    function makeGetSet (unit, keepTime) {
        return function (value) {
            if (value != null) {
                get_set__set(this, unit, value);
                utils_hooks__hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get_set__get(this, unit);
            }
        };
    }

    function get_set__get (mom, unit) {
        return mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]();
    }

    function get_set__set (mom, unit, value) {
        return mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
    }

    // MOMENTS

    function getSet (units, value) {
        var unit;
        if (typeof units === 'object') {
            for (unit in units) {
                this.set(unit, units[unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (typeof this[units] === 'function') {
                return this[units](value);
            }
        }
        return this;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken (token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '';
            for (i = 0; i < length; i++) {
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1         = /\d/;            //       0 - 9
    var match2         = /\d\d/;          //      00 - 99
    var match3         = /\d{3}/;         //     000 - 999
    var match4         = /\d{4}/;         //    0000 - 9999
    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
    var match1to2      = /\d\d?/;         //       0 - 99
    var match1to3      = /\d{1,3}/;       //       0 - 999
    var match1to4      = /\d{1,4}/;       //       0 - 9999
    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

    var matchUnsigned  = /\d+/;           //       0 - inf
    var matchSigned    = /[+-]?\d+/;      //    -inf - inf

    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // any word (or two) characters or numbers including two/three word month in arabic.
    var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;

    var regexes = {};

    function isFunction (sth) {
        // https://github.com/moment/moment/issues/2325
        return typeof sth === 'function' &&
            Object.prototype.toString.call(sth) === '[object Function]';
    }


    function addRegexToken (token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }

    function getParseRegexForToken (token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken (token, callback) {
        var i, func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (typeof callback === 'number') {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken (token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;

    function daysInMonth(year, month) {
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PARSING

    addRegexToken('M',    match1to2);
    addRegexToken('MM',   match1to2, match2);
    addRegexToken('MMM',  matchWord);
    addRegexToken('MMMM', matchWord);

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m) {
        return this._months[m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort (m) {
        return this._monthsShort[m.month()];
    }

    function localeMonthsParse (monthName, format, strict) {
        var i, mom, regex;

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = create_utc__createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth (mom, value) {
        var dayOfMonth;

        // TODO: Move this out of here!
        if (typeof value === 'string') {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (typeof value !== 'number') {
                return mom;
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth (value) {
        if (value != null) {
            setMonth(this, value);
            utils_hooks__hooks.updateOffset(this, true);
            return this;
        } else {
            return get_set__get(this, 'Month');
        }
    }

    function getDaysInMonth () {
        return daysInMonth(this.year(), this.month());
    }

    function checkOverflow (m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    function warn(msg) {
        if (utils_hooks__hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (firstTime) {
                warn(msg + '\n' + (new Error()).stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    utils_hooks__hooks.suppressDeprecationWarnings = false;

    var from_string__isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

    var isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/],
        ['YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/],
        ['GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d{2}/],
        ['YYYY-DDD', /\d{4}-\d{3}/]
    ];

    // iso time formats and regexes
    var isoTimes = [
        ['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
        ['HH:mm', /(T| )\d\d:\d\d/],
        ['HH', /(T| )\d\d/]
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
        var i, l,
            string = config._i,
            match = from_string__isoRegex.exec(string);

        if (match) {
            getParsingFlags(config).iso = true;
            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(string)) {
                    config._f = isoDates[i][0];
                    break;
                }
            }
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(string)) {
                    // match[6] should be 'T' or space
                    config._f += (match[6] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (string.match(matchOffset)) {
                config._f += 'Z';
            }
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
            utils_hooks__hooks.createFromInputFallback(config);
        }
    }

    utils_hooks__hooks.createFromInputFallback = deprecate(
        'moment construction falls back to js Date. This is ' +
        'discouraged and will be removed in upcoming major ' +
        'release. Please refer to ' +
        'https://github.com/moment/moment/issues/1407 for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    function createDate (y, m, d, h, M, s, ms) {
        //can't just apply() to create a date:
        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var date = new Date(y, m, d, h, M, s, ms);

        //the date constructor doesn't accept years < 1970
        if (y < 1970) {
            date.setFullYear(y);
        }
        return date;
    }

    function createUTCDate (y) {
        var date = new Date(Date.UTC.apply(null, arguments));
        if (y < 1970) {
            date.setUTCFullYear(y);
        }
        return date;
    }

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY',   4],       0, 'year');
    addFormatToken(0, ['YYYYY',  5],       0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PARSING

    addRegexToken('Y',      matchSigned);
    addRegexToken('YY',     match1to2, match2);
    addRegexToken('YYYY',   match1to4, match4);
    addRegexToken('YYYYY',  match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? utils_hooks__hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // HOOKS

    utils_hooks__hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', false);

    function getIsLeapYear () {
        return isLeapYear(this.year());
    }

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PARSING

    addRegexToken('w',  match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W',  match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // firstDayOfWeek       0 = sun, 6 = sat
    //                      the day of the week that starts the week
    //                      (usually sunday or monday)
    // firstDayOfWeekOfYear 0 = sun, 6 = sat
    //                      the first week is the week that contains the first
    //                      of this day of the week
    //                      (eg. ISO weeks use thursday (4))
    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
        var end = firstDayOfWeekOfYear - firstDayOfWeek,
            daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
            adjustedMoment;


        if (daysToDayOfWeek > end) {
            daysToDayOfWeek -= 7;
        }

        if (daysToDayOfWeek < end - 7) {
            daysToDayOfWeek += 7;
        }

        adjustedMoment = local__createLocal(mom).add(daysToDayOfWeek, 'd');
        return {
            week: Math.ceil(adjustedMoment.dayOfYear() / 7),
            year: adjustedMoment.year()
        };
    }

    // LOCALES

    function localeWeek (mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    };

    function localeFirstDayOfWeek () {
        return this._week.dow;
    }

    function localeFirstDayOfYear () {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek (input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek (input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PARSING

    addRegexToken('DDD',  match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
        var week1Jan = 6 + firstDayOfWeek - firstDayOfWeekOfYear, janX = createUTCDate(year, 0, 1 + week1Jan), d = janX.getUTCDay(), dayOfYear;
        if (d < firstDayOfWeek) {
            d += 7;
        }

        weekday = weekday != null ? 1 * weekday : firstDayOfWeek;

        dayOfYear = 1 + week1Jan + 7 * (week - 1) - d + weekday;

        return {
            year: dayOfYear > 0 ? year : year - 1,
            dayOfYear: dayOfYear > 0 ?  dayOfYear : daysInYear(year - 1) + dayOfYear
        };
    }

    // MOMENTS

    function getSetDayOfYear (input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        var now = new Date();
        if (config._useUTC) {
            return [now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()];
        }
        return [now.getFullYear(), now.getMonth(), now.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray (config) {
        var i, date, input = [], currentDate, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse)) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year);
            week = defaults(w.w, 1);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < dow) {
                    ++week;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from begining of week
                weekday = w.e + dow;
            } else {
                // default to begining of week
                weekday = dow;
            }
        }
        temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow);

        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }

    utils_hooks__hooks.ISO_8601 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === utils_hooks__hooks.ISO_8601) {
            configFromISO(config);
            return;
        }

        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (getParsingFlags(config).bigHour === true &&
                config._a[HOUR] <= 12 &&
                config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }


    function meridiemFixWrap (locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!valid__isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = [i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond];

        configFromArray(config);
    }

    function createFromConfig (config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig (config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || locale_locales__getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return valid__createInvalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        } else if (isDate(input)) {
            config._d = input;
        } else {
            configFromInput(config);
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (input === undefined) {
            config._d = new Date();
        } else if (isDate(input)) {
            config._d = new Date(+input);
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (typeof(input) === 'object') {
            configFromObject(config);
        } else if (typeof(input) === 'number') {
            // from milliseconds
            config._d = new Date(input);
        } else {
            utils_hooks__hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC (input, format, locale, strict, isUTC) {
        var c = {};

        if (typeof(locale) === 'boolean') {
            strict = locale;
            locale = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function local__createLocal (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
         'moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',
         function () {
             var other = local__createLocal.apply(null, arguments);
             return other < this ? this : other;
         }
     );

    var prototypeMax = deprecate(
        'moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',
        function () {
            var other = local__createLocal.apply(null, arguments);
            return other > this ? this : other;
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return local__createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    function Duration (duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 36e5; // 1000 * 60 * 60
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = locale_locales__getLocale();

        this._bubble();
    }

    function isDuration (obj) {
        return obj instanceof Duration;
    }

    function offset (token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z',  matchOffset);
    addRegexToken('ZZ', matchOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(string) {
        var matches = ((string || '').match(matchOffset) || []);
        var chunk   = matches[matches.length - 1] || [];
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? +input : +local__createLocal(input)) - (+res);
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(+res._d + diff);
            utils_hooks__hooks.updateOffset(res, false);
            return res;
        } else {
            return local__createLocal(input).local();
        }
    }

    function getDateOffset (m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    utils_hooks__hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset (input, keepLocalTime) {
        var offset = this._offset || 0,
            localAdjust;
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(input);
            }
            if (Math.abs(input) < 16) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    add_subtract__addSubtract(this, create__createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    utils_hooks__hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone (input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC (keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal (keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset () {
        if (this._tzm) {
            this.utcOffset(this._tzm);
        } else if (typeof this._i === 'string') {
            this.utcOffset(offsetFromString(this._i));
        }
        return this;
    }

    function hasAlignedHourOffset (input) {
        input = input ? local__createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime () {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted () {
        if (typeof this._isDSTShifted !== 'undefined') {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? create_utc__createUTC(c._a) : local__createLocal(c._a);
            this._isDSTShifted = this.isValid() &&
                compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal () {
        return !this._isUTC;
    }

    function isUtcOffset () {
        return this._isUTC;
    }

    function isUtc () {
        return this._isUTC && this._offset === 0;
    }

    var aspNetRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    var create__isoRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;

    function create__createDuration (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms : input._milliseconds,
                d  : input._days,
                M  : input._months
            };
        } else if (typeof input === 'number') {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y  : 0,
                d  : toInt(match[DATE])        * sign,
                h  : toInt(match[HOUR])        * sign,
                m  : toInt(match[MINUTE])      * sign,
                s  : toInt(match[SECOND])      * sign,
                ms : toInt(match[MILLISECOND]) * sign
            };
        } else if (!!(match = create__isoRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y : parseIso(match[2], sign),
                M : parseIso(match[3], sign),
                d : parseIso(match[4], sign),
                h : parseIso(match[5], sign),
                m : parseIso(match[6], sign),
                s : parseIso(match[7], sign),
                w : parseIso(match[8], sign)
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    create__createDuration.fn = Duration.prototype;

    function parseIso (inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {milliseconds: 0, months: 0};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = create__createDuration(val, period);
            add_subtract__addSubtract(this, dur, direction);
            return this;
        };
    }

    function add_subtract__addSubtract (mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = duration._days,
            months = duration._months;
        updateOffset = updateOffset == null ? true : updateOffset;

        if (milliseconds) {
            mom._d.setTime(+mom._d + milliseconds * isAdding);
        }
        if (days) {
            get_set__set(mom, 'Date', get_set__get(mom, 'Date') + days * isAdding);
        }
        if (months) {
            setMonth(mom, get_set__get(mom, 'Month') + months * isAdding);
        }
        if (updateOffset) {
            utils_hooks__hooks.updateOffset(mom, days || months);
        }
    }

    var add_subtract__add      = createAdder(1, 'add');
    var add_subtract__subtract = createAdder(-1, 'subtract');

    function moment_calendar__calendar (time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || local__createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            diff = this.diff(sod, 'days', true),
            format = diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';
        return this.format(formats && formats[format] || this.localeData().calendar(format, this, local__createLocal(now)));
    }

    function clone () {
        return new Moment(this);
    }

    function isAfter (input, units) {
        var inputMs;
        units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
        if (units === 'millisecond') {
            input = isMoment(input) ? input : local__createLocal(input);
            return +this > +input;
        } else {
            inputMs = isMoment(input) ? +input : +local__createLocal(input);
            return inputMs < +this.clone().startOf(units);
        }
    }

    function isBefore (input, units) {
        var inputMs;
        units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
        if (units === 'millisecond') {
            input = isMoment(input) ? input : local__createLocal(input);
            return +this < +input;
        } else {
            inputMs = isMoment(input) ? +input : +local__createLocal(input);
            return +this.clone().endOf(units) < inputMs;
        }
    }

    function isBetween (from, to, units) {
        return this.isAfter(from, units) && this.isBefore(to, units);
    }

    function isSame (input, units) {
        var inputMs;
        units = normalizeUnits(units || 'millisecond');
        if (units === 'millisecond') {
            input = isMoment(input) ? input : local__createLocal(input);
            return +this === +input;
        } else {
            inputMs = +local__createLocal(input);
            return +(this.clone().startOf(units)) <= inputMs && inputMs <= +(this.clone().endOf(units));
        }
    }

    function diff (input, units, asFloat) {
        var that = cloneWithOffset(input, this),
            zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4,
            delta, output;

        units = normalizeUnits(units);

        if (units === 'year' || units === 'month' || units === 'quarter') {
            output = monthDiff(this, that);
            if (units === 'quarter') {
                output = output / 3;
            } else if (units === 'year') {
                output = output / 12;
            }
        } else {
            delta = this - that;
            output = units === 'second' ? delta / 1e3 : // 1000
                units === 'minute' ? delta / 6e4 : // 1000 * 60
                units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
                units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
                units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
                delta;
        }
        return asFloat ? output : absFloor(output);
    }

    function monthDiff (a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        return -(wholeMonthDiff + adjust);
    }

    utils_hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';

    function toString () {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function moment_format__toISOString () {
        var m = this.clone().utc();
        if (0 < m.year() && m.year() <= 9999) {
            if ('function' === typeof Date.prototype.toISOString) {
                // native implementation is ~50x faster, use it when we can
                return this.toDate().toISOString();
            } else {
                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            }
        } else {
            return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        }
    }

    function format (inputString) {
        var output = formatMoment(this, inputString || utils_hooks__hooks.defaultFormat);
        return this.localeData().postformat(output);
    }

    function from (time, withoutSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }
        return create__createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
    }

    function fromNow (withoutSuffix) {
        return this.from(local__createLocal(), withoutSuffix);
    }

    function to (time, withoutSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }
        return create__createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
    }

    function toNow (withoutSuffix) {
        return this.to(local__createLocal(), withoutSuffix);
    }

    function locale (key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = locale_locales__getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData () {
        return this._locale;
    }

    function startOf (units) {
        units = normalizeUnits(units);
        // the following switch intentionally omits break keywords
        // to utilize falling through the cases.
        switch (units) {
        case 'year':
            this.month(0);
            /* falls through */
        case 'quarter':
        case 'month':
            this.date(1);
            /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
            this.hours(0);
            /* falls through */
        case 'hour':
            this.minutes(0);
            /* falls through */
        case 'minute':
            this.seconds(0);
            /* falls through */
        case 'second':
            this.milliseconds(0);
        }

        // weeks are a special case
        if (units === 'week') {
            this.weekday(0);
        }
        if (units === 'isoWeek') {
            this.isoWeekday(1);
        }

        // quarters are also special
        if (units === 'quarter') {
            this.month(Math.floor(this.month() / 3) * 3);
        }

        return this;
    }

    function endOf (units) {
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond') {
            return this;
        }
        return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
    }

    function to_type__valueOf () {
        return +this._d - ((this._offset || 0) * 60000);
    }

    function unix () {
        return Math.floor(+this / 1000);
    }

    function toDate () {
        return this._offset ? new Date(+this) : this._d;
    }

    function toArray () {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject () {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function moment_valid__isValid () {
        return valid__isValid(this);
    }

    function parsingFlags () {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt () {
        return getParsingFlags(this).overflow;
    }

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken (token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg',     'weekYear');
    addWeekYearFormatToken('ggggg',    'weekYear');
    addWeekYearFormatToken('GGGG',  'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PARSING

    addRegexToken('G',      matchSigned);
    addRegexToken('g',      matchSigned);
    addRegexToken('GG',     match1to2, match2);
    addRegexToken('gg',     match1to2, match2);
    addRegexToken('GGGG',   match1to4, match4);
    addRegexToken('gggg',   match1to4, match4);
    addRegexToken('GGGGG',  match1to6, match6);
    addRegexToken('ggggg',  match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = utils_hooks__hooks.parseTwoDigitYear(input);
    });

    // HELPERS

    function weeksInYear(year, dow, doy) {
        return weekOfYear(local__createLocal([year, 11, 31 + dow - doy]), dow, doy).week;
    }

    // MOMENTS

    function getSetWeekYear (input) {
        var year = weekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
        return input == null ? year : this.add((input - year), 'y');
    }

    function getSetISOWeekYear (input) {
        var year = weekOfYear(this, 1, 4).year;
        return input == null ? year : this.add((input - year), 'y');
    }

    function getISOWeeksInYear () {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear () {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    addFormatToken('Q', 0, 0, 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter (input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PARSING

    addRegexToken('D',  match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0], 10);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PARSING

    addRegexToken('d',    match1to2);
    addRegexToken('e',    match1to2);
    addRegexToken('E',    match1to2);
    addRegexToken('dd',   matchWord);
    addRegexToken('ddd',  matchWord);
    addRegexToken('dddd', matchWord);

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config) {
        var weekday = config._locale.weekdaysParse(input);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    // LOCALES

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays (m) {
        return this._weekdays[m.day()];
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort (m) {
        return this._weekdaysShort[m.day()];
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin (m) {
        return this._weekdaysMin[m.day()];
    }

    function localeWeekdaysParse (weekdayName) {
        var i, mom, regex;

        this._weekdaysParse = this._weekdaysParse || [];

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            if (!this._weekdaysParse[i]) {
                mom = local__createLocal([2000, 1]).day(i);
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek (input) {
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek (input) {
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek (input) {
        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.
        return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, function () {
        return this.hours() % 12 || 12;
    });

    function meridiem (token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PARSING

    function matchMeridiem (isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a',  matchMeridiem);
    addRegexToken('A',  matchMeridiem);
    addRegexToken('H',  match1to2);
    addRegexToken('h',  match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });

    // LOCALES

    function localeIsPM (input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return ((input + '').toLowerCase().charAt(0) === 'p');
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }


    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour he wants. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PARSING

    addRegexToken('m',  match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PARSING

    addRegexToken('s',  match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });


    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PARSING

    addRegexToken('S',    match1to3, match1);
    addRegexToken('SS',   match1to3, match2);
    addRegexToken('SSS',  match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    addFormatToken('z',  0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr () {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName () {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var momentPrototype__proto = Moment.prototype;

    momentPrototype__proto.add          = add_subtract__add;
    momentPrototype__proto.calendar     = moment_calendar__calendar;
    momentPrototype__proto.clone        = clone;
    momentPrototype__proto.diff         = diff;
    momentPrototype__proto.endOf        = endOf;
    momentPrototype__proto.format       = format;
    momentPrototype__proto.from         = from;
    momentPrototype__proto.fromNow      = fromNow;
    momentPrototype__proto.to           = to;
    momentPrototype__proto.toNow        = toNow;
    momentPrototype__proto.get          = getSet;
    momentPrototype__proto.invalidAt    = invalidAt;
    momentPrototype__proto.isAfter      = isAfter;
    momentPrototype__proto.isBefore     = isBefore;
    momentPrototype__proto.isBetween    = isBetween;
    momentPrototype__proto.isSame       = isSame;
    momentPrototype__proto.isValid      = moment_valid__isValid;
    momentPrototype__proto.lang         = lang;
    momentPrototype__proto.locale       = locale;
    momentPrototype__proto.localeData   = localeData;
    momentPrototype__proto.max          = prototypeMax;
    momentPrototype__proto.min          = prototypeMin;
    momentPrototype__proto.parsingFlags = parsingFlags;
    momentPrototype__proto.set          = getSet;
    momentPrototype__proto.startOf      = startOf;
    momentPrototype__proto.subtract     = add_subtract__subtract;
    momentPrototype__proto.toArray      = toArray;
    momentPrototype__proto.toObject     = toObject;
    momentPrototype__proto.toDate       = toDate;
    momentPrototype__proto.toISOString  = moment_format__toISOString;
    momentPrototype__proto.toJSON       = moment_format__toISOString;
    momentPrototype__proto.toString     = toString;
    momentPrototype__proto.unix         = unix;
    momentPrototype__proto.valueOf      = to_type__valueOf;

    // Year
    momentPrototype__proto.year       = getSetYear;
    momentPrototype__proto.isLeapYear = getIsLeapYear;

    // Week Year
    momentPrototype__proto.weekYear    = getSetWeekYear;
    momentPrototype__proto.isoWeekYear = getSetISOWeekYear;

    // Quarter
    momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;

    // Month
    momentPrototype__proto.month       = getSetMonth;
    momentPrototype__proto.daysInMonth = getDaysInMonth;

    // Week
    momentPrototype__proto.week           = momentPrototype__proto.weeks        = getSetWeek;
    momentPrototype__proto.isoWeek        = momentPrototype__proto.isoWeeks     = getSetISOWeek;
    momentPrototype__proto.weeksInYear    = getWeeksInYear;
    momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;

    // Day
    momentPrototype__proto.date       = getSetDayOfMonth;
    momentPrototype__proto.day        = momentPrototype__proto.days             = getSetDayOfWeek;
    momentPrototype__proto.weekday    = getSetLocaleDayOfWeek;
    momentPrototype__proto.isoWeekday = getSetISODayOfWeek;
    momentPrototype__proto.dayOfYear  = getSetDayOfYear;

    // Hour
    momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;

    // Minute
    momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;

    // Second
    momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;

    // Millisecond
    momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;

    // Offset
    momentPrototype__proto.utcOffset            = getSetOffset;
    momentPrototype__proto.utc                  = setOffsetToUTC;
    momentPrototype__proto.local                = setOffsetToLocal;
    momentPrototype__proto.parseZone            = setOffsetToParsedOffset;
    momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;
    momentPrototype__proto.isDST                = isDaylightSavingTime;
    momentPrototype__proto.isDSTShifted         = isDaylightSavingTimeShifted;
    momentPrototype__proto.isLocal              = isLocal;
    momentPrototype__proto.isUtcOffset          = isUtcOffset;
    momentPrototype__proto.isUtc                = isUtc;
    momentPrototype__proto.isUTC                = isUtc;

    // Timezone
    momentPrototype__proto.zoneAbbr = getZoneAbbr;
    momentPrototype__proto.zoneName = getZoneName;

    // Deprecations
    momentPrototype__proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    momentPrototype__proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    momentPrototype__proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    momentPrototype__proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779', getSetZone);

    var momentPrototype = momentPrototype__proto;

    function moment__createUnix (input) {
        return local__createLocal(input * 1000);
    }

    function moment__createInZone () {
        return local__createLocal.apply(null, arguments).parseZone();
    }

    var defaultCalendar = {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    };

    function locale_calendar__calendar (key, mom, now) {
        var output = this._calendar[key];
        return typeof output === 'function' ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS  : 'h:mm:ss A',
        LT   : 'h:mm A',
        L    : 'MM/DD/YYYY',
        LL   : 'MMMM D, YYYY',
        LLL  : 'MMMM D, YYYY h:mm A',
        LLLL : 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat (key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate () {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultOrdinalParse = /\d{1,2}/;

    function ordinal (number) {
        return this._ordinal.replace('%d', number);
    }

    function preParsePostFormat (string) {
        return string;
    }

    var defaultRelativeTime = {
        future : 'in %s',
        past   : '%s ago',
        s  : 'a few seconds',
        m  : 'a minute',
        mm : '%d minutes',
        h  : 'an hour',
        hh : '%d hours',
        d  : 'a day',
        dd : '%d days',
        M  : 'a month',
        MM : '%d months',
        y  : 'a year',
        yy : '%d years'
    };

    function relative__relativeTime (number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return (typeof output === 'function') ?
            output(number, withoutSuffix, string, isFuture) :
            output.replace(/%d/i, number);
    }

    function pastFuture (diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
    }

    function locale_set__set (config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (typeof prop === 'function') {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _ordinalParseLenient.
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
    }

    var prototype__proto = Locale.prototype;

    prototype__proto._calendar       = defaultCalendar;
    prototype__proto.calendar        = locale_calendar__calendar;
    prototype__proto._longDateFormat = defaultLongDateFormat;
    prototype__proto.longDateFormat  = longDateFormat;
    prototype__proto._invalidDate    = defaultInvalidDate;
    prototype__proto.invalidDate     = invalidDate;
    prototype__proto._ordinal        = defaultOrdinal;
    prototype__proto.ordinal         = ordinal;
    prototype__proto._ordinalParse   = defaultOrdinalParse;
    prototype__proto.preparse        = preParsePostFormat;
    prototype__proto.postformat      = preParsePostFormat;
    prototype__proto._relativeTime   = defaultRelativeTime;
    prototype__proto.relativeTime    = relative__relativeTime;
    prototype__proto.pastFuture      = pastFuture;
    prototype__proto.set             = locale_set__set;

    // Month
    prototype__proto.months       =        localeMonths;
    prototype__proto._months      = defaultLocaleMonths;
    prototype__proto.monthsShort  =        localeMonthsShort;
    prototype__proto._monthsShort = defaultLocaleMonthsShort;
    prototype__proto.monthsParse  =        localeMonthsParse;

    // Week
    prototype__proto.week = localeWeek;
    prototype__proto._week = defaultLocaleWeek;
    prototype__proto.firstDayOfYear = localeFirstDayOfYear;
    prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;

    // Day of Week
    prototype__proto.weekdays       =        localeWeekdays;
    prototype__proto._weekdays      = defaultLocaleWeekdays;
    prototype__proto.weekdaysMin    =        localeWeekdaysMin;
    prototype__proto._weekdaysMin   = defaultLocaleWeekdaysMin;
    prototype__proto.weekdaysShort  =        localeWeekdaysShort;
    prototype__proto._weekdaysShort = defaultLocaleWeekdaysShort;
    prototype__proto.weekdaysParse  =        localeWeekdaysParse;

    // Hours
    prototype__proto.isPM = localeIsPM;
    prototype__proto._meridiemParse = defaultLocaleMeridiemParse;
    prototype__proto.meridiem = localeMeridiem;

    function lists__get (format, index, field, setter) {
        var locale = locale_locales__getLocale();
        var utc = create_utc__createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function list (format, index, field, count, setter) {
        if (typeof format === 'number') {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return lists__get(format, index, field, setter);
        }

        var i;
        var out = [];
        for (i = 0; i < count; i++) {
            out[i] = lists__get(format, i, field, setter);
        }
        return out;
    }

    function lists__listMonths (format, index) {
        return list(format, index, 'months', 12, 'month');
    }

    function lists__listMonthsShort (format, index) {
        return list(format, index, 'monthsShort', 12, 'month');
    }

    function lists__listWeekdays (format, index) {
        return list(format, index, 'weekdays', 7, 'day');
    }

    function lists__listWeekdaysShort (format, index) {
        return list(format, index, 'weekdaysShort', 7, 'day');
    }

    function lists__listWeekdaysMin (format, index) {
        return list(format, index, 'weekdaysMin', 7, 'day');
    }

    locale_locales__getSetGlobalLocale('en', {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    // Side effect imports
    utils_hooks__hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', locale_locales__getSetGlobalLocale);
    utils_hooks__hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', locale_locales__getLocale);

    var mathAbs = Math.abs;

    function duration_abs__abs () {
        var data           = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days         = mathAbs(this._days);
        this._months       = mathAbs(this._months);

        data.milliseconds  = mathAbs(data.milliseconds);
        data.seconds       = mathAbs(data.seconds);
        data.minutes       = mathAbs(data.minutes);
        data.hours         = mathAbs(data.hours);
        data.months        = mathAbs(data.months);
        data.years         = mathAbs(data.years);

        return this;
    }

    function duration_add_subtract__addSubtract (duration, input, value, direction) {
        var other = create__createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days         += direction * other._days;
        duration._months       += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function duration_add_subtract__add (input, value) {
        return duration_add_subtract__addSubtract(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function duration_add_subtract__subtract (input, value) {
        return duration_add_subtract__addSubtract(this, input, value, -1);
    }

    function absCeil (number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble () {
        var milliseconds = this._milliseconds;
        var days         = this._days;
        var months       = this._months;
        var data         = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds           = absFloor(milliseconds / 1000);
        data.seconds      = seconds % 60;

        minutes           = absFloor(seconds / 60);
        data.minutes      = minutes % 60;

        hours             = absFloor(minutes / 60);
        data.hours        = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days   = days;
        data.months = months;
        data.years  = years;

        return this;
    }

    function daysToMonths (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }

    function monthsToDays (months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }

    function as (units) {
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'year') {
            days   = this._days   + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            return units === 'month' ? months : months / 12;
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week'   : return days / 7     + milliseconds / 6048e5;
                case 'day'    : return days         + milliseconds / 864e5;
                case 'hour'   : return days * 24    + milliseconds / 36e5;
                case 'minute' : return days * 1440  + milliseconds / 6e4;
                case 'second' : return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
                default: throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function duration_as__valueOf () {
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs (alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds      = makeAs('s');
    var asMinutes      = makeAs('m');
    var asHours        = makeAs('h');
    var asDays         = makeAs('d');
    var asWeeks        = makeAs('w');
    var asMonths       = makeAs('M');
    var asYears        = makeAs('y');

    function duration_get__get (units) {
        units = normalizeUnits(units);
        return this[units + 's']();
    }

    function makeGetter(name) {
        return function () {
            return this._data[name];
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds      = makeGetter('seconds');
    var minutes      = makeGetter('minutes');
    var hours        = makeGetter('hours');
    var days         = makeGetter('days');
    var months       = makeGetter('months');
    var years        = makeGetter('years');

    function weeks () {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        s: 45,  // seconds to minute
        m: 45,  // minutes to hour
        h: 22,  // hours to day
        d: 26,  // days to month
        M: 11   // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function duration_humanize__relativeTime (posNegDuration, withoutSuffix, locale) {
        var duration = create__createDuration(posNegDuration).abs();
        var seconds  = round(duration.as('s'));
        var minutes  = round(duration.as('m'));
        var hours    = round(duration.as('h'));
        var days     = round(duration.as('d'));
        var months   = round(duration.as('M'));
        var years    = round(duration.as('y'));

        var a = seconds < thresholds.s && ['s', seconds]  ||
                minutes === 1          && ['m']           ||
                minutes < thresholds.m && ['mm', minutes] ||
                hours   === 1          && ['h']           ||
                hours   < thresholds.h && ['hh', hours]   ||
                days    === 1          && ['d']           ||
                days    < thresholds.d && ['dd', days]    ||
                months  === 1          && ['M']           ||
                months  < thresholds.M && ['MM', months]  ||
                years   === 1          && ['y']           || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set a threshold for relative time strings
    function duration_humanize__getSetRelativeTimeThreshold (threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        return true;
    }

    function humanize (withSuffix) {
        var locale = this.localeData();
        var output = duration_humanize__relativeTime(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var iso_string__abs = Math.abs;

    function iso_string__toISOString() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        var seconds = iso_string__abs(this._milliseconds) / 1000;
        var days         = iso_string__abs(this._days);
        var months       = iso_string__abs(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes           = absFloor(seconds / 60);
        hours             = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years  = absFloor(months / 12);
        months %= 12;


        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds;
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        return (total < 0 ? '-' : '') +
            'P' +
            (Y ? Y + 'Y' : '') +
            (M ? M + 'M' : '') +
            (D ? D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? h + 'H' : '') +
            (m ? m + 'M' : '') +
            (s ? s + 'S' : '');
    }

    var duration_prototype__proto = Duration.prototype;

    duration_prototype__proto.abs            = duration_abs__abs;
    duration_prototype__proto.add            = duration_add_subtract__add;
    duration_prototype__proto.subtract       = duration_add_subtract__subtract;
    duration_prototype__proto.as             = as;
    duration_prototype__proto.asMilliseconds = asMilliseconds;
    duration_prototype__proto.asSeconds      = asSeconds;
    duration_prototype__proto.asMinutes      = asMinutes;
    duration_prototype__proto.asHours        = asHours;
    duration_prototype__proto.asDays         = asDays;
    duration_prototype__proto.asWeeks        = asWeeks;
    duration_prototype__proto.asMonths       = asMonths;
    duration_prototype__proto.asYears        = asYears;
    duration_prototype__proto.valueOf        = duration_as__valueOf;
    duration_prototype__proto._bubble        = bubble;
    duration_prototype__proto.get            = duration_get__get;
    duration_prototype__proto.milliseconds   = milliseconds;
    duration_prototype__proto.seconds        = seconds;
    duration_prototype__proto.minutes        = minutes;
    duration_prototype__proto.hours          = hours;
    duration_prototype__proto.days           = days;
    duration_prototype__proto.weeks          = weeks;
    duration_prototype__proto.months         = months;
    duration_prototype__proto.years          = years;
    duration_prototype__proto.humanize       = humanize;
    duration_prototype__proto.toISOString    = iso_string__toISOString;
    duration_prototype__proto.toString       = iso_string__toISOString;
    duration_prototype__proto.toJSON         = iso_string__toISOString;
    duration_prototype__proto.locale         = locale;
    duration_prototype__proto.localeData     = localeData;

    // Deprecations
    duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', iso_string__toISOString);
    duration_prototype__proto.lang = lang;

    // Side effect imports

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports


    utils_hooks__hooks.version = '2.10.6';

    setHookCallback(local__createLocal);

    utils_hooks__hooks.fn                    = momentPrototype;
    utils_hooks__hooks.min                   = min;
    utils_hooks__hooks.max                   = max;
    utils_hooks__hooks.utc                   = create_utc__createUTC;
    utils_hooks__hooks.unix                  = moment__createUnix;
    utils_hooks__hooks.months                = lists__listMonths;
    utils_hooks__hooks.isDate                = isDate;
    utils_hooks__hooks.locale                = locale_locales__getSetGlobalLocale;
    utils_hooks__hooks.invalid               = valid__createInvalid;
    utils_hooks__hooks.duration              = create__createDuration;
    utils_hooks__hooks.isMoment              = isMoment;
    utils_hooks__hooks.weekdays              = lists__listWeekdays;
    utils_hooks__hooks.parseZone             = moment__createInZone;
    utils_hooks__hooks.localeData            = locale_locales__getLocale;
    utils_hooks__hooks.isDuration            = isDuration;
    utils_hooks__hooks.monthsShort           = lists__listMonthsShort;
    utils_hooks__hooks.weekdaysMin           = lists__listWeekdaysMin;
    utils_hooks__hooks.defineLocale          = defineLocale;
    utils_hooks__hooks.weekdaysShort         = lists__listWeekdaysShort;
    utils_hooks__hooks.normalizeUnits        = normalizeUnits;
    utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;

    var _moment = utils_hooks__hooks;

    return _moment;

}));
//! moment.js locale configuration
//! locale : chinese (zh-cn)
//! author : suupic : https://github.com/suupic
//! author : Zeno Zeng : https://github.com/zenozeng

(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var zh_cn = moment.defineLocale('zh-cn', {
        months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort : '周日_周一_周二_周三_周四_周五_周六'.split('_'),
        weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
        longDateFormat : {
            LT : 'Ah点mm分',
            LTS : 'Ah点m分s秒',
            L : 'YYYY-MM-DD',
            LL : 'YYYY年MMMD日',
            LLL : 'YYYY年MMMD日Ah点mm分',
            LLLL : 'YYYY年MMMD日ddddAh点mm分',
            l : 'YYYY-MM-DD',
            ll : 'YYYY年MMMD日',
            lll : 'YYYY年MMMD日Ah点mm分',
            llll : 'YYYY年MMMD日ddddAh点mm分'
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === '凌晨' || meridiem === '早上' ||
                    meridiem === '上午') {
                return hour;
            } else if (meridiem === '下午' || meridiem === '晚上') {
                return hour + 12;
            } else {
                // '中午'
                return hour >= 11 ? hour : hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            var hm = hour * 100 + minute;
            if (hm < 600) {
                return '凌晨';
            } else if (hm < 900) {
                return '早上';
            } else if (hm < 1130) {
                return '上午';
            } else if (hm < 1230) {
                return '中午';
            } else if (hm < 1800) {
                return '下午';
            } else {
                return '晚上';
            }
        },
        calendar : {
            sameDay : function () {
                return this.minutes() === 0 ? '[今天]Ah[点整]' : '[今天]LT';
            },
            nextDay : function () {
                return this.minutes() === 0 ? '[明天]Ah[点整]' : '[明天]LT';
            },
            lastDay : function () {
                return this.minutes() === 0 ? '[昨天]Ah[点整]' : '[昨天]LT';
            },
            nextWeek : function () {
                var startOfWeek, prefix;
                startOfWeek = moment().startOf('week');
                prefix = this.unix() - startOfWeek.unix() >= 7 * 24 * 3600 ? '[下]' : '[本]';
                return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
            },
            lastWeek : function () {
                var startOfWeek, prefix;
                startOfWeek = moment().startOf('week');
                prefix = this.unix() < startOfWeek.unix()  ? '[上]' : '[本]';
                return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
            },
            sameElse : 'LL'
        },
        ordinalParse: /\d{1,2}(日|月|周)/,
        ordinal : function (number, period) {
            switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return number + '日';
            case 'M':
                return number + '月';
            case 'w':
            case 'W':
                return number + '周';
            default:
                return number;
            }
        },
        relativeTime : {
            future : '%s内',
            past : '%s前',
            s : '几秒',
            m : '1 分钟',
            mm : '%d 分钟',
            h : '1 小时',
            hh : '%d 小时',
            d : '1 天',
            dd : '%d 天',
            M : '1 个月',
            MM : '%d 个月',
            y : '1 年',
            yy : '%d 年'
        },
        week : {
            // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return zh_cn;

}));
/*
//! version : 3.1.3
=========================================================
bootstrap-datetimepicker.js
https://github.com/Eonasdan/bootstrap-datetimepicker
=========================================================
The MIT License (MIT)

Copyright (c) 2014 Jonathan Peterson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
;(function (root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD is used - Register as an anonymous module.
        define(['jquery', 'moment'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'), require('moment'));
    }
    else {
        // Neither AMD or CommonJS used. Use global variables.
        if (!jQuery) {
            throw new Error('bootstrap-datetimepicker requires jQuery to be loaded first');
        }
        if (!moment) {
            throw new Error('bootstrap-datetimepicker requires moment.js to be loaded first');
        }
        factory(root.jQuery, moment);
    }
}(this, function ($, moment) {
    'use strict';
    if (typeof moment === 'undefined') {
        throw new Error('momentjs is required');
    }

    var dpgId = 0,

    DateTimePicker = function (element, options) {
        var defaults = $.fn.datetimepicker.defaults,

            icons = {
                time: 'glyphicon glyphicon-time',
                date: 'glyphicon glyphicon-calendar',
                up: 'glyphicon glyphicon-chevron-up',
                down: 'glyphicon glyphicon-chevron-down'
            },

            picker = this,
            errored = false,
            dDate,

        init = function () {
            var icon = false, localeData, rInterval;
            picker.options = $.extend({}, defaults, options);
            picker.options.icons = $.extend({}, icons, picker.options.icons);

            picker.element = $(element);

            dataToOptions();

            if (!(picker.options.pickTime || picker.options.pickDate)) {
                throw new Error('Must choose at least one picker');
            }

            picker.id = dpgId++;
            moment.locale(picker.options.language);
            picker.date = moment();
            picker.unset = false;
            picker.isInput = picker.element.is('input');
            picker.component = false;

            if (picker.element.hasClass('input-group')) {
                if (picker.element.find('.datepickerbutton').size() === 0) {//in case there is more then one 'input-group-addon' Issue #48
                    picker.component = picker.element.find('[class^="input-group-"]');
                }
                else {
                    picker.component = picker.element.find('.datepickerbutton');
                }
            }
            picker.format = picker.options.format;

            localeData = moment().localeData();

            if (!picker.format) {
                picker.format = (picker.options.pickDate ? localeData.longDateFormat('L') : '');
                if (picker.options.pickDate && picker.options.pickTime) {
                    picker.format += ' ';
                }
                picker.format += (picker.options.pickTime ? localeData.longDateFormat('LT') : '');
                if (picker.options.useSeconds) {
                    if (localeData.longDateFormat('LT').indexOf(' A') !== -1) {
                        picker.format = picker.format.split(' A')[0] + ':ss A';
                    }
                    else {
                        picker.format += ':ss';
                    }
                }
            }
            picker.use24hours = (picker.format.toLowerCase().indexOf('a') < 0 && picker.format.indexOf('h') < 0);

            if (picker.component) {
                icon = picker.component.find('span');
            }

            if (picker.options.pickTime) {
                if (icon) {
                    icon.addClass(picker.options.icons.time);
                }
            }
            if (picker.options.pickDate) {
                if (icon) {
                    icon.removeClass(picker.options.icons.time);
                    icon.addClass(picker.options.icons.date);
                }
            }

            picker.options.widgetParent =
                typeof picker.options.widgetParent === 'string' && picker.options.widgetParent ||
                picker.element.parents().filter(function () {
                    return 'scroll' === $(this).css('overflow-y');
                }).get(0) ||
                'body';

            picker.widget = $(getTemplate()).appendTo(picker.options.widgetParent);

            picker.minViewMode = picker.options.minViewMode || 0;
            if (typeof picker.minViewMode === 'string') {
                switch (picker.minViewMode) {
                    case 'months':
                        picker.minViewMode = 1;
                        break;
                    case 'years':
                        picker.minViewMode = 2;
                        break;
                    default:
                        picker.minViewMode = 0;
                        break;
                }
            }
            picker.viewMode = picker.options.viewMode || 0;
            if (typeof picker.viewMode === 'string') {
                switch (picker.viewMode) {
                    case 'months':
                        picker.viewMode = 1;
                        break;
                    case 'years':
                        picker.viewMode = 2;
                        break;
                    default:
                        picker.viewMode = 0;
                        break;
                }
            }

            picker.viewMode = Math.max(picker.viewMode, picker.minViewMode);

            picker.options.disabledDates = indexGivenDates(picker.options.disabledDates);
            picker.options.enabledDates = indexGivenDates(picker.options.enabledDates);

            picker.startViewMode = picker.viewMode;
            picker.setMinDate(picker.options.minDate);
            picker.setMaxDate(picker.options.maxDate);
            fillDow();
            fillMonths();
            fillHours();
            fillMinutes();
            fillSeconds();
            update();
            showMode();
            if (!getPickerInput().prop('disabled')) {
                attachDatePickerEvents();
            }
            if (picker.options.defaultDate !== '' && getPickerInput().val() === '') {
                picker.setValue(picker.options.defaultDate);
            }
            if (picker.options.minuteStepping !== 1) {
                rInterval = picker.options.minuteStepping;
                picker.date.minutes((Math.round(picker.date.minutes() / rInterval) * rInterval) % 60).seconds(0);
            }
        },

        getPickerInput = function () {
            var input;

            if (picker.isInput) {
                return picker.element;
            }
            input = picker.element.find('.datepickerinput');
            if (input.size() === 0) {
                input = picker.element.find('input');
            }
            else if (!input.is('input')) {
                throw new Error('CSS class "datepickerinput" cannot be applied to non input element');
            }
            return input;
        },

        dataToOptions = function () {
            var eData;
            if (picker.element.is('input')) {
                eData = picker.element.data();
            }
            else {
                eData = picker.element.find('input').data();
            }
            if (eData.dateFormat !== undefined) {
                picker.options.format = eData.dateFormat;
            }
            if (eData.datePickdate !== undefined) {
                picker.options.pickDate = eData.datePickdate;
            }
            if (eData.datePicktime !== undefined) {
                picker.options.pickTime = eData.datePicktime;
            }
            if (eData.dateUseminutes !== undefined) {
                picker.options.useMinutes = eData.dateUseminutes;
            }
            if (eData.dateUseseconds !== undefined) {
                picker.options.useSeconds = eData.dateUseseconds;
            }
            if (eData.dateUsecurrent !== undefined) {
                picker.options.useCurrent = eData.dateUsecurrent;
            }
            if (eData.calendarWeeks !== undefined) {
                picker.options.calendarWeeks = eData.calendarWeeks;
            }
            if (eData.dateMinutestepping !== undefined) {
                picker.options.minuteStepping = eData.dateMinutestepping;
            }
            if (eData.dateMindate !== undefined) {
                picker.options.minDate = eData.dateMindate;
            }
            if (eData.dateMaxdate !== undefined) {
                picker.options.maxDate = eData.dateMaxdate;
            }
            if (eData.dateShowtoday !== undefined) {
                picker.options.showToday = eData.dateShowtoday;
            }
            if (eData.dateCollapse !== undefined) {
                picker.options.collapse = eData.dateCollapse;
            }
            if (eData.dateLanguage !== undefined) {
                picker.options.language = eData.dateLanguage;
            }
            if (eData.dateDefaultdate !== undefined) {
                picker.options.defaultDate = eData.dateDefaultdate;
            }
            if (eData.dateDisableddates !== undefined) {
                picker.options.disabledDates = eData.dateDisableddates;
            }
            if (eData.dateEnableddates !== undefined) {
                picker.options.enabledDates = eData.dateEnableddates;
            }
            if (eData.dateIcons !== undefined) {
                picker.options.icons = eData.dateIcons;
            }
            if (eData.dateUsestrict !== undefined) {
                picker.options.useStrict = eData.dateUsestrict;
            }
            if (eData.dateDirection !== undefined) {
                picker.options.direction = eData.dateDirection;
            }
            if (eData.dateSidebyside !== undefined) {
                picker.options.sideBySide = eData.dateSidebyside;
            }
            if (eData.dateDaysofweekdisabled !== undefined) {
                picker.options.daysOfWeekDisabled = eData.dateDaysofweekdisabled;
            }
        },

        place = function () {
            var position = 'absolute',
                offset = picker.component ? picker.component.offset() : picker.element.offset(),
                $window = $(window),
                placePosition;

            picker.width = picker.component ? picker.component.outerWidth() : picker.element.outerWidth();
            offset.top = offset.top + picker.element.outerHeight();

            if (picker.options.direction === 'up') {
                placePosition = 'top';
            } else if (picker.options.direction === 'bottom') {
                placePosition = 'bottom';
            } else if (picker.options.direction === 'auto') {
                if (offset.top + picker.widget.height() > $window.height() + $window.scrollTop() && picker.widget.height() + picker.element.outerHeight() < offset.top) {
                    placePosition = 'top';
                } else {
                    placePosition = 'bottom';
                }
            }
            if (placePosition === 'top') {
                offset.bottom = $window.height() - offset.top + picker.element.outerHeight() + 3;
                picker.widget.addClass('top').removeClass('bottom');
            } else {
                offset.top += 1;
                picker.widget.addClass('bottom').removeClass('top');
            }

            if (picker.options.width !== undefined) {
                picker.widget.width(picker.options.width);
            }

            if (picker.options.orientation === 'left') {
                picker.widget.addClass('left-oriented');
                offset.left = offset.left - picker.widget.width() + 20;
            }

            if (isInFixed()) {
                position = 'fixed';
                offset.top -= $window.scrollTop();
                offset.left -= $window.scrollLeft();
            }

            if ($window.width() < offset.left + picker.widget.outerWidth()) {
                offset.right = $window.width() - offset.left - picker.width;
                offset.left = 'auto';
                picker.widget.addClass('pull-right');
            } else {
                offset.right = 'auto';
                picker.widget.removeClass('pull-right');
            }

            if (placePosition === 'top') {
                picker.widget.css({
                    position: position,
                    bottom: offset.bottom,
                    top: 'auto',
                    left: offset.left,
                    right: offset.right
                });
            } else {
                picker.widget.css({
                    position: position,
                    top: offset.top,
                    bottom: 'auto',
                    left: offset.left,
                    right: offset.right
                });
            }
        },

        notifyChange = function (oldDate, eventType) {
            if (moment(picker.date).isSame(moment(oldDate)) && !errored) {
                return;
            }
            errored = false;
            picker.element.trigger({
                type: 'dp.change',
                date: moment(picker.date),
                oldDate: moment(oldDate)
            });

            if (eventType !== 'change') {
                picker.element.change();
            }
        },

        notifyError = function (date) {
            errored = true;
            picker.element.trigger({
                type: 'dp.error',
                date: moment(date, picker.format, picker.options.useStrict)
            });
        },

        update = function (newDate) {
            moment.locale(picker.options.language);
            var dateStr = newDate;
            if (!dateStr) {
                dateStr = getPickerInput().val();
                if (dateStr) {
                    picker.date = moment(dateStr, picker.format, picker.options.useStrict);
                }
                if (!picker.date) {
                    picker.date = moment();
                }
            }
            picker.viewDate = moment(picker.date).startOf('month');
            fillDate();
            fillTime();
        },

        fillDow = function () {
            moment.locale(picker.options.language);
            var html = $('<tr>'), weekdaysMin = moment.weekdaysMin(), i;
            if (picker.options.calendarWeeks === true) {
                html.append('<th class="cw">#</th>');
            }
            if (moment().localeData()._week.dow === 0) { // starts on Sunday
                for (i = 0; i < 7; i++) {
                    html.append('<th class="dow">' + weekdaysMin[i] + '</th>');
                }
            } else {
                for (i = 1; i < 8; i++) {
                    if (i === 7) {
                        html.append('<th class="dow">' + weekdaysMin[0] + '</th>');
                    } else {
                        html.append('<th class="dow">' + weekdaysMin[i] + '</th>');
                    }
                }
            }
            picker.widget.find('.datepicker-days thead').append(html);
        },

        fillMonths = function () {
            moment.locale(picker.options.language);
            var html = '', i, monthsShort = moment.monthsShort();
            for (i = 0; i < 12; i++) {
                html += '<span class="month">' + monthsShort[i] + '</span>';
            }
            picker.widget.find('.datepicker-months td').append(html);
        },

        fillDate = function () {
            if (!picker.options.pickDate) {
                return;
            }
            moment.locale(picker.options.language);
            var year = picker.viewDate.year(),
                month = picker.viewDate.month(),
                startYear = picker.options.minDate.year(),
                startMonth = picker.options.minDate.month(),
                endYear = picker.options.maxDate.year(),
                endMonth = picker.options.maxDate.month(),
                currentDate,
                prevMonth, nextMonth, html = [], row, clsName, i, days, yearCont, currentYear, months = moment.months();

            picker.widget.find('.datepicker-days').find('.disabled').removeClass('disabled');
            picker.widget.find('.datepicker-months').find('.disabled').removeClass('disabled');
            picker.widget.find('.datepicker-years').find('.disabled').removeClass('disabled');

            picker.widget.find('.datepicker-days th:eq(1)').text(
                months[month] + ' ' + year);

            prevMonth = moment(picker.viewDate, picker.format, picker.options.useStrict).subtract(1, 'months');
            days = prevMonth.daysInMonth();
            prevMonth.date(days).startOf('week');
            if ((year === startYear && month <= startMonth) || year < startYear) {
                picker.widget.find('.datepicker-days th:eq(0)').addClass('disabled');
            }
            if ((year === endYear && month >= endMonth) || year > endYear) {
                picker.widget.find('.datepicker-days th:eq(2)').addClass('disabled');
            }

            nextMonth = moment(prevMonth).add(42, 'd');
            while (prevMonth.isBefore(nextMonth)) {
                if (prevMonth.weekday() === moment().startOf('week').weekday()) {
                    row = $('<tr>');
                    html.push(row);
                    if (picker.options.calendarWeeks === true) {
                        row.append('<td class="cw">' + prevMonth.week() + '</td>');
                    }
                }
                clsName = '';
                if (prevMonth.year() < year || (prevMonth.year() === year && prevMonth.month() < month)) {
                    clsName += ' old';
                } else if (prevMonth.year() > year || (prevMonth.year() === year && prevMonth.month() > month)) {
                    clsName += ' new';
                }
                if (prevMonth.isSame(moment({y: picker.date.year(), M: picker.date.month(), d: picker.date.date()}))) {
                    clsName += ' active';
                }
                if (isInDisableDates(prevMonth, 'day') || !isInEnableDates(prevMonth)) {
                    clsName += ' disabled';
                }
                if (picker.options.showToday === true) {
                    if (prevMonth.isSame(moment(), 'day')) {
                        clsName += ' today';
                    }
                }
                if (picker.options.daysOfWeekDisabled) {
                    for (i = 0; i < picker.options.daysOfWeekDisabled.length; i++) {
                        if (prevMonth.day() === picker.options.daysOfWeekDisabled[i]) {
                            clsName += ' disabled';
                            break;
                        }
                    }
                }
                row.append('<td class="day' + clsName + '">' + prevMonth.date() + '</td>');

                currentDate = prevMonth.date();
                prevMonth.add(1, 'd');

                if (currentDate === prevMonth.date()) {
                    prevMonth.add(1, 'd');
                }
            }
            picker.widget.find('.datepicker-days tbody').empty().append(html);
            currentYear = picker.date.year();
            months = picker.widget.find('.datepicker-months').find('th:eq(1)').text(year).end().find('span').removeClass('active');
            if (currentYear === year) {
                months.eq(picker.date.month()).addClass('active');
            }
            if (year - 1 < startYear) {
                picker.widget.find('.datepicker-months th:eq(0)').addClass('disabled');
            }
            if (year + 1 > endYear) {
                picker.widget.find('.datepicker-months th:eq(2)').addClass('disabled');
            }
            for (i = 0; i < 12; i++) {
                if ((year === startYear && startMonth > i) || (year < startYear)) {
                    $(months[i]).addClass('disabled');
                } else if ((year === endYear && endMonth < i) || (year > endYear)) {
                    $(months[i]).addClass('disabled');
                }
            }

            html = '';
            year = parseInt(year / 10, 10) * 10;
            yearCont = picker.widget.find('.datepicker-years').find(
                'th:eq(1)').text(year + '-' + (year + 9)).parents('table').find('td');
            picker.widget.find('.datepicker-years').find('th').removeClass('disabled');
            if (startYear > year) {
                picker.widget.find('.datepicker-years').find('th:eq(0)').addClass('disabled');
            }
            if (endYear < year + 9) {
                picker.widget.find('.datepicker-years').find('th:eq(2)').addClass('disabled');
            }
            year -= 1;
            for (i = -1; i < 11; i++) {
                html += '<span class="year' + (i === -1 || i === 10 ? ' old' : '') + (currentYear === year ? ' active' : '') + ((year < startYear || year > endYear) ? ' disabled' : '') + '">' + year + '</span>';
                year += 1;
            }
            yearCont.html(html);
        },

        fillHours = function () {
            moment.locale(picker.options.language);
            var table = picker.widget.find('.timepicker .timepicker-hours table'), html = '', current, i, j;
            table.parent().hide();
            if (picker.use24hours) {
                current = 0;
                for (i = 0; i < 6; i += 1) {
                    html += '<tr>';
                    for (j = 0; j < 4; j += 1) {
                        html += '<td class="hour">' + padLeft(current.toString()) + '</td>';
                        current++;
                    }
                    html += '</tr>';
                }
            }
            else {
                current = 1;
                for (i = 0; i < 3; i += 1) {
                    html += '<tr>';
                    for (j = 0; j < 4; j += 1) {
                        html += '<td class="hour">' + padLeft(current.toString()) + '</td>';
                        current++;
                    }
                    html += '</tr>';
                }
            }
            table.html(html);
        },

        fillMinutes = function () {
            var table = picker.widget.find('.timepicker .timepicker-minutes table'), html = '', current = 0, i, j, step = picker.options.minuteStepping;
            table.parent().hide();
            if (step === 1)  {
                step = 5;
            }
            for (i = 0; i < Math.ceil(60 / step / 4) ; i++) {
                html += '<tr>';
                for (j = 0; j < 4; j += 1) {
                    if (current < 60) {
                        html += '<td class="minute">' + padLeft(current.toString()) + '</td>';
                        current += step;
                    } else {
                        html += '<td></td>';
                    }
                }
                html += '</tr>';
            }
            table.html(html);
        },

        fillSeconds = function () {
            var table = picker.widget.find('.timepicker .timepicker-seconds table'), html = '', current = 0, i, j;
            table.parent().hide();
            for (i = 0; i < 3; i++) {
                html += '<tr>';
                for (j = 0; j < 4; j += 1) {
                    html += '<td class="second">' + padLeft(current.toString()) + '</td>';
                    current += 5;
                }
                html += '</tr>';
            }
            table.html(html);
        },

        fillTime = function () {
            if (!picker.date) {
                return;
            }
            var timeComponents = picker.widget.find('.timepicker span[data-time-component]'),
                hour = picker.date.hours(),
                period = picker.date.format('A');
            if (!picker.use24hours) {
                if (hour === 0) {
                    hour = 12;
                } else if (hour !== 12) {
                    hour = hour % 12;
                }
                picker.widget.find('.timepicker [data-action=togglePeriod]').text(period);
            }
            timeComponents.filter('[data-time-component=hours]').text(padLeft(hour));
            timeComponents.filter('[data-time-component=minutes]').text(padLeft(picker.date.minutes()));
            timeComponents.filter('[data-time-component=seconds]').text(padLeft(picker.date.second()));
        },

        click = function (e) {
            e.stopPropagation();
            e.preventDefault();
            picker.unset = false;
            var target = $(e.target).closest('span, td, th'), month, year, step, day, oldDate = moment(picker.date);
            if (target.length === 1) {
                if (!target.is('.disabled')) {
                    switch (target[0].nodeName.toLowerCase()) {
                        case 'th':
                            switch (target[0].className) {
                                case 'picker-switch':
                                    showMode(1);
                                    break;
                                case 'prev':
                                case 'next':
                                    step = dpGlobal.modes[picker.viewMode].navStep;
                                    if (target[0].className === 'prev') {
                                        step = step * -1;
                                    }
                                    picker.viewDate.add(step, dpGlobal.modes[picker.viewMode].navFnc);
                                    fillDate();
                                    break;
                            }
                            break;
                        case 'span':
                            if (target.is('.month')) {
                                month = target.parent().find('span').index(target);
                                picker.viewDate.month(month);
                            } else {
                                year = parseInt(target.text(), 10) || 0;
                                picker.viewDate.year(year);
                            }
                            if (picker.viewMode === picker.minViewMode) {
                                picker.date = moment({
                                    y: picker.viewDate.year(),
                                    M: picker.viewDate.month(),
                                    d: picker.viewDate.date(),
                                    h: picker.date.hours(),
                                    m: picker.date.minutes(),
                                    s: picker.date.seconds()
                                });
                                set();
                                notifyChange(oldDate, e.type);
                            }
                            showMode(-1);
                            fillDate();
                            break;
                        case 'td':
                            if (target.is('.day')) {
                                day = parseInt(target.text(), 10) || 1;
                                month = picker.viewDate.month();
                                year = picker.viewDate.year();
                                if (target.is('.old')) {
                                    if (month === 0) {
                                        month = 11;
                                        year -= 1;
                                    } else {
                                        month -= 1;
                                    }
                                } else if (target.is('.new')) {
                                    if (month === 11) {
                                        month = 0;
                                        year += 1;
                                    } else {
                                        month += 1;
                                    }
                                }
                                picker.date = moment({
                                    y: year,
                                    M: month,
                                    d: day,
                                    h: picker.date.hours(),
                                    m: picker.date.minutes(),
                                    s: picker.date.seconds()
                                }
                                );
                                picker.viewDate = moment({
                                    y: year, M: month, d: Math.min(28, day)
                                });
                                fillDate();
                                set();
                                notifyChange(oldDate, e.type);
                            }
                            break;
                    }
                }
            }
        },

        actions = {
            incrementHours: function () {
                checkDate('add', 'hours', 1);
            },

            incrementMinutes: function () {
                checkDate('add', 'minutes', picker.options.minuteStepping);
            },

            incrementSeconds: function () {
                checkDate('add', 'seconds', 1);
            },

            decrementHours: function () {
                checkDate('subtract', 'hours', 1);
            },

            decrementMinutes: function () {
                checkDate('subtract', 'minutes', picker.options.minuteStepping);
            },

            decrementSeconds: function () {
                checkDate('subtract', 'seconds', 1);
            },

            togglePeriod: function () {
                var hour = picker.date.hours();
                if (hour >= 12) {
                    hour -= 12;
                } else {
                    hour += 12;
                }
                picker.date.hours(hour);
            },

            showPicker: function () {
                picker.widget.find('.timepicker > div:not(.timepicker-picker)').hide();
                picker.widget.find('.timepicker .timepicker-picker').show();
            },

            showHours: function () {
                picker.widget.find('.timepicker .timepicker-picker').hide();
                picker.widget.find('.timepicker .timepicker-hours').show();
            },

            showMinutes: function () {
                picker.widget.find('.timepicker .timepicker-picker').hide();
                picker.widget.find('.timepicker .timepicker-minutes').show();
            },

            showSeconds: function () {
                picker.widget.find('.timepicker .timepicker-picker').hide();
                picker.widget.find('.timepicker .timepicker-seconds').show();
            },

            selectHour: function (e) {
                var hour = parseInt($(e.target).text(), 10);
                if (!picker.use24hours) {
                    if (picker.date.hours() >= 12) {
                        if (hour !== 12) {
                            hour += 12;
                        }
                    } else {
                        if (hour === 12) {
                            hour = 0;
                        }
                    }
                }
                picker.date.hours(hour);
                actions.showPicker.call(picker);
            },

            selectMinute: function (e) {
                picker.date.minutes(parseInt($(e.target).text(), 10));
                actions.showPicker.call(picker);
            },

            selectSecond: function (e) {
                picker.date.seconds(parseInt($(e.target).text(), 10));
                actions.showPicker.call(picker);
            }
        },

        doAction = function (e) {
            var oldDate = moment(picker.date),
                action = $(e.currentTarget).data('action'),
                rv = actions[action].apply(picker, arguments);
            stopEvent(e);
            if (!picker.date) {
                picker.date = moment({y: 1970});
            }
            set();
            fillTime();
            notifyChange(oldDate, e.type);
            return rv;
        },

        stopEvent = function (e) {
            e.stopPropagation();
            e.preventDefault();
        },

        keydown = function (e) {
            if (e.keyCode === 27) { // allow escape to hide picker
                picker.hide();
            }
        },

        change = function (e) {
            moment.locale(picker.options.language);
            var input = $(e.target), oldDate = moment(picker.date), newDate = moment(input.val(), picker.format, picker.options.useStrict);
            if (newDate.isValid() && !isInDisableDates(newDate) && isInEnableDates(newDate)) {
                update();
                picker.setValue(newDate);
                notifyChange(oldDate, e.type);
                set();
            }
            else {
                picker.viewDate = oldDate;
                picker.unset = true;
                notifyChange(oldDate, e.type);
                notifyError(newDate);
            }
        },

        showMode = function (dir) {
            if (dir) {
                picker.viewMode = Math.max(picker.minViewMode, Math.min(2, picker.viewMode + dir));
            }
            picker.widget.find('.datepicker > div').hide().filter('.datepicker-' + dpGlobal.modes[picker.viewMode].clsName).show();
        },

        attachDatePickerEvents = function () {
            var $this, $parent, expanded, closed, collapseData;
            picker.widget.on('click', '.datepicker *', $.proxy(click, this)); // this handles date picker clicks
            picker.widget.on('click', '[data-action]', $.proxy(doAction, this)); // this handles time picker clicks
            picker.widget.on('mousedown', $.proxy(stopEvent, this));
            picker.element.on('keydown', $.proxy(keydown, this));
            if (picker.options.pickDate && picker.options.pickTime) {
                picker.widget.on('click.togglePicker', '.accordion-toggle', function (e) {
                    e.stopPropagation();
                    $this = $(this);
                    $parent = $this.closest('ul');
                    expanded = $parent.find('.in');
                    closed = $parent.find('.collapse:not(.in)');

                    if (expanded && expanded.length) {
                        collapseData = expanded.data('collapse');
                        if (collapseData && collapseData.transitioning) {
                            return;
                        }
                        expanded.collapse('hide');
                        closed.collapse('show');
                        $this.find('span').toggleClass(picker.options.icons.time + ' ' + picker.options.icons.date);
                        if (picker.component) {
                            picker.component.find('span').toggleClass(picker.options.icons.time + ' ' + picker.options.icons.date);
                        }
                    }
                });
            }
            if (picker.isInput) {
                picker.element.on({
                    'click': $.proxy(picker.show, this),
                    'focus': $.proxy(picker.show, this),
                    'change': $.proxy(change, this),
                    'blur': $.proxy(picker.hide, this)
                });
            } else {
                picker.element.on({
                    'change': $.proxy(change, this)
                }, 'input');
                if (picker.component) {
                    picker.component.on('click', $.proxy(picker.show, this));
                    picker.component.on('mousedown', $.proxy(stopEvent, this));
                } else {
                    picker.element.on('click', $.proxy(picker.show, this));
                }
            }
        },

        attachDatePickerGlobalEvents = function () {
            $(window).on(
                'resize.datetimepicker' + picker.id, $.proxy(place, this));
            if (!picker.isInput) {
                $(document).on(
                    'mousedown.datetimepicker' + picker.id, $.proxy(picker.hide, this));
            }
        },

        detachDatePickerEvents = function () {
            picker.widget.off('click', '.datepicker *', picker.click);
            picker.widget.off('click', '[data-action]');
            picker.widget.off('mousedown', picker.stopEvent);
            if (picker.options.pickDate && picker.options.pickTime) {
                picker.widget.off('click.togglePicker');
            }
            if (picker.isInput) {
                picker.element.off({
                    'focus': picker.show,
                    'change': change,
                    'click': picker.show,
                    'blur' : picker.hide
                });
            } else {
                picker.element.off({
                    'change': change
                }, 'input');
                if (picker.component) {
                    picker.component.off('click', picker.show);
                    picker.component.off('mousedown', picker.stopEvent);
                } else {
                    picker.element.off('click', picker.show);
                }
            }
        },

        detachDatePickerGlobalEvents = function () {
            $(window).off('resize.datetimepicker' + picker.id);
            if (!picker.isInput) {
                $(document).off('mousedown.datetimepicker' + picker.id);
            }
        },

        isInFixed = function () {
            if (picker.element) {
                var parents = picker.element.parents(), inFixed = false, i;
                for (i = 0; i < parents.length; i++) {
                    if ($(parents[i]).css('position') === 'fixed') {
                        inFixed = true;
                        break;
                    }
                }
                return inFixed;
            } else {
                return false;
            }
        },

        set = function () {
            moment.locale(picker.options.language);
            var formatted = '';
            if (!picker.unset) {
                formatted = moment(picker.date).format(picker.format);
            }
            getPickerInput().val(formatted);
            picker.element.data('date', formatted);
            if (!picker.options.pickTime) {
                picker.hide();
            }
        },

        checkDate = function (direction, unit, amount) {
            moment.locale(picker.options.language);
            var newDate;
            if (direction === 'add') {
                newDate = moment(picker.date);
                if (newDate.hours() === 23) {
                    newDate.add(amount, unit);
                }
                newDate.add(amount, unit);
            }
            else {
                newDate = moment(picker.date).subtract(amount, unit);
            }
            if (isInDisableDates(moment(newDate.subtract(amount, unit))) || isInDisableDates(newDate)) {
                notifyError(newDate.format(picker.format));
                return;
            }

            if (direction === 'add') {
                picker.date.add(amount, unit);
            }
            else {
                picker.date.subtract(amount, unit);
            }
            picker.unset = false;
        },

        isInDisableDates = function (date, timeUnit) {
            moment.locale(picker.options.language);
            var maxDate = moment(picker.options.maxDate, picker.format, picker.options.useStrict),
                minDate = moment(picker.options.minDate, picker.format, picker.options.useStrict);

            if (timeUnit) {
                maxDate = maxDate.endOf(timeUnit);
                minDate = minDate.startOf(timeUnit);
            }

            if (date.isAfter(maxDate) || date.isBefore(minDate)) {
                return true;
            }
            if (picker.options.disabledDates === false) {
                return false;
            }
            return picker.options.disabledDates[date.format('YYYY-MM-DD')] === true;
        },
        isInEnableDates = function (date) {
            moment.locale(picker.options.language);
            if (picker.options.enabledDates === false) {
                return true;
            }
            return picker.options.enabledDates[date.format('YYYY-MM-DD')] === true;
        },

        indexGivenDates = function (givenDatesArray) {
            // Store given enabledDates and disabledDates as keys.
            // This way we can check their existence in O(1) time instead of looping through whole array.
            // (for example: picker.options.enabledDates['2014-02-27'] === true)
            var givenDatesIndexed = {}, givenDatesCount = 0, i;
            for (i = 0; i < givenDatesArray.length; i++) {
                if (moment.isMoment(givenDatesArray[i]) || givenDatesArray[i] instanceof Date) {
                    dDate = moment(givenDatesArray[i]);
                } else {
                    dDate = moment(givenDatesArray[i], picker.format, picker.options.useStrict);
                }
                if (dDate.isValid()) {
                    givenDatesIndexed[dDate.format('YYYY-MM-DD')] = true;
                    givenDatesCount++;
                }
            }
            if (givenDatesCount > 0) {
                return givenDatesIndexed;
            }
            return false;
        },

        padLeft = function (string) {
            string = string.toString();
            if (string.length >= 2) {
                return string;
            }
            return '0' + string;
        },

        getTemplate = function () {
            var
                headTemplate =
                        '<thead>' +
                            '<tr>' +
                                '<th class="prev">&lsaquo;</th><th colspan="' + (picker.options.calendarWeeks ? '6' : '5') + '" class="picker-switch"></th><th class="next">&rsaquo;</th>' +
                            '</tr>' +
                        '</thead>',
                contTemplate =
                        '<tbody><tr><td colspan="' + (picker.options.calendarWeeks ? '8' : '7') + '"></td></tr></tbody>',
                template = '<div class="datepicker-days">' +
                    '<table class="table-condensed">' + headTemplate + '<tbody></tbody></table>' +
                '</div>' +
                '<div class="datepicker-months">' +
                    '<table class="table-condensed">' + headTemplate + contTemplate + '</table>' +
                '</div>' +
                '<div class="datepicker-years">' +
                    '<table class="table-condensed">' + headTemplate + contTemplate + '</table>' +
                '</div>',
                ret = '';
            if (picker.options.pickDate && picker.options.pickTime) {
                ret = '<div class="bootstrap-datetimepicker-widget' + (picker.options.sideBySide ? ' timepicker-sbs' : '') + (picker.use24hours ? ' usetwentyfour' : '') + ' dropdown-menu" style="z-index:9999 !important;">';
                if (picker.options.sideBySide) {
                    ret += '<div class="row">' +
                       '<div class="col-sm-6 datepicker">' + template + '</div>' +
                       '<div class="col-sm-6 timepicker">' + tpGlobal.getTemplate() + '</div>' +
                     '</div>';
                } else {
                    ret += '<ul class="list-unstyled">' +
                        '<li' + (picker.options.collapse ? ' class="collapse in"' : '') + '>' +
                            '<div class="datepicker">' + template + '</div>' +
                        '</li>' +
                        '<li class="picker-switch accordion-toggle"><a class="btn" style="width:100%"><span class="' + picker.options.icons.time + '"></span></a></li>' +
                        '<li' + (picker.options.collapse ? ' class="collapse"' : '') + '>' +
                            '<div class="timepicker">' + tpGlobal.getTemplate() + '</div>' +
                        '</li>' +
                   '</ul>';
                }
                ret += '</div>';
                return ret;
            }
            if (picker.options.pickTime) {
                return (
                    '<div class="bootstrap-datetimepicker-widget dropdown-menu">' +
                        '<div class="timepicker">' + tpGlobal.getTemplate() + '</div>' +
                    '</div>'
                );
            }
            return (
                '<div class="bootstrap-datetimepicker-widget dropdown-menu">' +
                    '<div class="datepicker">' + template + '</div>' +
                '</div>'
            );
        },

        dpGlobal = {
            modes: [
                {
                    clsName: 'days',
                    navFnc: 'month',
                    navStep: 1
                },
                {
                    clsName: 'months',
                    navFnc: 'year',
                    navStep: 1
                },
                {
                    clsName: 'years',
                    navFnc: 'year',
                    navStep: 10
                }
            ]
        },

        tpGlobal = {
            hourTemplate: '<span data-action="showHours"   data-time-component="hours"   class="timepicker-hour"></span>',
            minuteTemplate: '<span data-action="showMinutes" data-time-component="minutes" class="timepicker-minute"></span>',
            secondTemplate: '<span data-action="showSeconds"  data-time-component="seconds" class="timepicker-second"></span>'
        };

        tpGlobal.getTemplate = function () {
            return (
                '<div class="timepicker-picker">' +
                    '<table class="table-condensed">' +
                        '<tr>' +
                            '<td><a href="#" class="btn" data-action="incrementHours"><span class="' + picker.options.icons.up + '"></span></a></td>' +
                            '<td class="separator"></td>' +
                            '<td>' + (picker.options.useMinutes ? '<a href="#" class="btn" data-action="incrementMinutes"><span class="' + picker.options.icons.up + '"></span></a>' : '') + '</td>' +
                            (picker.options.useSeconds ?
                                '<td class="separator"></td><td><a href="#" class="btn" data-action="incrementSeconds"><span class="' + picker.options.icons.up + '"></span></a></td>' : '') +
                            (picker.use24hours ? '' : '<td class="separator"></td>') +
                        '</tr>' +
                        '<tr>' +
                            '<td>' + tpGlobal.hourTemplate + '</td> ' +
                            '<td class="separator">:</td>' +
                            '<td>' + (picker.options.useMinutes ? tpGlobal.minuteTemplate : '<span class="timepicker-minute">00</span>') + '</td> ' +
                            (picker.options.useSeconds ?
                                '<td class="separator">:</td><td>' + tpGlobal.secondTemplate + '</td>' : '') +
                            (picker.use24hours ? '' : '<td class="separator"></td>' +
                            '<td><button type="button" class="btn btn-primary" data-action="togglePeriod"></button></td>') +
                        '</tr>' +
                        '<tr>' +
                            '<td><a href="#" class="btn" data-action="decrementHours"><span class="' + picker.options.icons.down + '"></span></a></td>' +
                            '<td class="separator"></td>' +
                            '<td>' + (picker.options.useMinutes ? '<a href="#" class="btn" data-action="decrementMinutes"><span class="' + picker.options.icons.down + '"></span></a>' : '') + '</td>' +
                            (picker.options.useSeconds ?
                                '<td class="separator"></td><td><a href="#" class="btn" data-action="decrementSeconds"><span class="' + picker.options.icons.down + '"></span></a></td>' : '') +
                            (picker.use24hours ? '' : '<td class="separator"></td>') +
                        '</tr>' +
                    '</table>' +
                '</div>' +
                '<div class="timepicker-hours" data-action="selectHour">' +
                    '<table class="table-condensed"></table>' +
                '</div>' +
                '<div class="timepicker-minutes" data-action="selectMinute">' +
                    '<table class="table-condensed"></table>' +
                '</div>' +
                (picker.options.useSeconds ?
                    '<div class="timepicker-seconds" data-action="selectSecond"><table class="table-condensed"></table></div>' : '')
            );
        };

        picker.destroy = function () {
            detachDatePickerEvents();
            detachDatePickerGlobalEvents();
            picker.widget.remove();
            picker.element.removeData('DateTimePicker');
            if (picker.component) {
                picker.component.removeData('DateTimePicker');
            }
        };

        picker.show = function (e) {
            if (getPickerInput().prop('disabled')) {
                return;
            }
            if (picker.options.useCurrent) {
                if (getPickerInput().val() === '') {
                    if (picker.options.minuteStepping !== 1) {
                        var mDate = moment(),
                        rInterval = picker.options.minuteStepping;
                        mDate.minutes((Math.round(mDate.minutes() / rInterval) * rInterval) % 60).seconds(0);
                        picker.setValue(mDate.format(picker.format));
                    } else {
                        picker.setValue(moment().format(picker.format));
                    }
                    notifyChange('', e.type);
                }
            }
            // if this is a click event on the input field and picker is already open don't hide it
            if (e && e.type === 'click' && picker.isInput && picker.widget.hasClass('picker-open')) {
                return;
            }
            if (picker.widget.hasClass('picker-open')) {
                picker.widget.hide();
                picker.widget.removeClass('picker-open');
            }
            else {
                picker.widget.show();
                picker.widget.addClass('picker-open');
            }
            picker.height = picker.component ? picker.component.outerHeight() : picker.element.outerHeight();
            place();
            picker.element.trigger({
                type: 'dp.show',
                date: moment(picker.date)
            });
            attachDatePickerGlobalEvents();
            if (e) {
                stopEvent(e);
            }
        };

        picker.disable = function () {
            var input = getPickerInput();
            if (input.prop('disabled')) {
                return;
            }
            input.prop('disabled', true);
            detachDatePickerEvents();
        };

        picker.enable = function () {
            var input = getPickerInput();
            if (!input.prop('disabled')) {
                return;
            }
            input.prop('disabled', false);
            attachDatePickerEvents();
        };

        picker.hide = function () {
            // Ignore event if in the middle of a picker transition
            var collapse = picker.widget.find('.collapse'), i, collapseData;
            for (i = 0; i < collapse.length; i++) {
                collapseData = collapse.eq(i).data('collapse');
                if (collapseData && collapseData.transitioning) {
                    return;
                }
            }
            picker.widget.hide();
            picker.widget.removeClass('picker-open');
            picker.viewMode = picker.startViewMode;
            showMode();
            picker.element.trigger({
                type: 'dp.hide',
                date: moment(picker.date)
            });
            detachDatePickerGlobalEvents();
        };

        picker.setValue = function (newDate) {
            moment.locale(picker.options.language);
            if (!newDate) {
                picker.unset = true;
                set();
            } else {
                picker.unset = false;
            }
            if (!moment.isMoment(newDate)) {
                newDate = (newDate instanceof Date) ? moment(newDate) : moment(newDate, picker.format, picker.options.useStrict);
            } else {
                newDate = newDate.locale(picker.options.language);
            }
            if (newDate.isValid()) {
                picker.date = newDate;
                set();
                picker.viewDate = moment({y: picker.date.year(), M: picker.date.month()});
                fillDate();
                fillTime();
            }
            else {
                notifyError(newDate);
            }
        };

        picker.getDate = function () {
            if (picker.unset) {
                return null;
            }
            return moment(picker.date);
        };

        picker.setDate = function (date) {
            var oldDate = moment(picker.date);
            if (!date) {
                picker.setValue(null);
            } else {
                picker.setValue(date);
            }
            notifyChange(oldDate, 'function');
        };

        picker.setDisabledDates = function (dates) {
            picker.options.disabledDates = indexGivenDates(dates);
            if (picker.viewDate) {
                update();
            }
        };

        picker.setEnabledDates = function (dates) {
            picker.options.enabledDates = indexGivenDates(dates);
            if (picker.viewDate) {
                update();
            }
        };

        picker.setMaxDate = function (date) {
            if (date === undefined) {
                return;
            }
            if (moment.isMoment(date) || date instanceof Date) {
                picker.options.maxDate = moment(date);
            } else {
                picker.options.maxDate = moment(date, picker.format, picker.options.useStrict);
            }
            if (picker.viewDate) {
                update();
            }
        };

        picker.setMinDate = function (date) {
            if (date === undefined) {
                return;
            }
            if (moment.isMoment(date) || date instanceof Date) {
                picker.options.minDate = moment(date);
            } else {
                picker.options.minDate = moment(date, picker.format, picker.options.useStrict);
            }
            if (picker.viewDate) {
                update();
            }
        };

        init();
    };

    $.fn.datetimepicker = function (options) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data('DateTimePicker');
            if (!data) {
                $this.data('DateTimePicker', new DateTimePicker(this, options));
            }
        });
    };

    $.fn.datetimepicker.defaults = {
        format: false,
        pickDate: true,
        pickTime: true,
        useMinutes: true,
        useSeconds: false,
        useCurrent: true,
        calendarWeeks: false,
        minuteStepping: 1,
        minDate: moment({y: 1900}),
        maxDate: moment().add(100, 'y'),
        showToday: true,
        collapse: true,
        language: moment.locale(),
        defaultDate: '',
        disabledDates: false,
        enabledDates: false,
        icons: {},
        useStrict: false,
        direction: 'auto',
        sideBySide: false,
        daysOfWeekDisabled: [],
        widgetParent: false
    };
}));

/*!
 * iCheck v1.0.2, http://git.io/arlzeA
 * ===================================
 * Powerful jQuery and Zepto plugin for checkboxes and radio buttons customization
 *
 * (c) 2013 Damir Sultanov, http://fronteed.com
 * MIT Licensed
 */

(function($) {

  // Cached vars
  var _iCheck = 'iCheck',
    _iCheckHelper = _iCheck + '-helper',
    _checkbox = 'checkbox',
    _radio = 'radio',
    _checked = 'checked',
    _unchecked = 'un' + _checked,
    _disabled = 'disabled',a
    _determinate = 'determinate',
    _indeterminate = 'in' + _determinate,
    _update = 'update',
    _type = 'type',
    _click = 'click',
    _touch = 'touchbegin.i touchend.i',
    _add = 'addClass',
    _remove = 'removeClass',
    _callback = 'trigger',
    _label = 'label',
    _cursor = 'cursor',
    _mobile = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);

  // Plugin init
  $.fn[_iCheck] = function(options, fire) {

    // Walker
    var handle = 'input[type="' + _checkbox + '"], input[type="' + _radio + '"]',
      stack = $(),
      walker = function(object) {
        object.each(function() {
          var self = $(this);

          if (self.is(handle)) {
            stack = stack.add(self);
          } else {
            stack = stack.add(self.find(handle));
          }
        });
      };

    // Check if we should operate with some method
    if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(options)) {

      // Normalize method's name
      options = options.toLowerCase();

      // Find checkboxes and radio buttons
      walker(this);

      return stack.each(function() {
        var self = $(this);

        if (options == 'destroy') {
          tidy(self, 'ifDestroyed');
        } else {
          operate(self, true, options);
        }

        // Fire method's callback
        if ($.isFunction(fire)) {
          fire();
        }
      });

    // Customization
    } else if (typeof options == 'object' || !options) {

      // Check if any options were passed
      var settings = $.extend({
          checkedClass: _checked,
          disabledClass: _disabled,
          indeterminateClass: _indeterminate,
          labelHover: true
        }, options),

        selector = settings.handle,
        hoverClass = settings.hoverClass || 'hover',
        focusClass = settings.focusClass || 'focus',
        activeClass = settings.activeClass || 'active',
        labelHover = !!settings.labelHover,
        labelHoverClass = settings.labelHoverClass || 'hover',

        // Setup clickable area
        area = ('' + settings.increaseArea).replace('%', '') | 0;

      // Selector limit
      if (selector == _checkbox || selector == _radio) {
        handle = 'input[type="' + selector + '"]';
      }

      // Clickable area limit
      if (area < -50) {
        area = -50;
      }

      // Walk around the selector
      walker(this);

      return stack.each(function() {
        var self = $(this);

        // If already customized
        tidy(self);

        var node = this,
          id = node.id,

          // Layer styles
          offset = -area + '%',
          size = 100 + (area * 2) + '%',
          layer = {
            position: 'absolute',
            top: offset,
            left: offset,
            display: 'block',
            width: size,
            height: size,
            margin: 0,
            padding: 0,
            background: '#fff',
            border: 0,
            opacity: 0
          },

          // Choose how to hide input
          hide = _mobile ? {
            position: 'absolute',
            visibility: 'hidden'
          } : area ? layer : {
            position: 'absolute',
            opacity: 0
          },

          // Get proper class
          className = node[_type] == _checkbox ? settings.checkboxClass || 'i' + _checkbox : settings.radioClass || 'i' + _radio,

          // Find assigned labels
          label = $(_label + '[for="' + id + '"]').add(self.closest(_label)),

          // Check ARIA option
          aria = !!settings.aria,

          // Set ARIA placeholder
          ariaID = _iCheck + '-' + Math.random().toString(36).substr(2,6),

          // Parent & helper
          parent = '<div class="' + className + '" ' + (aria ? 'role="' + node[_type] + '" ' : ''),
          helper;

        // Set ARIA "labelledby"
        if (aria) {
          label.each(function() {
            parent += 'aria-labelledby="';

            if (this.id) {
              parent += this.id;
            } else {
              this.id = ariaID;
              parent += ariaID;
            }

            parent += '"';
          });
        }

        // Wrap input
        parent = self.wrap(parent + '/>')[_callback]('ifCreated').parent().append(settings.insert);

        // Layer addition
        helper = $('<ins class="' + _iCheckHelper + '"/>').css(layer).appendTo(parent);

        // Finalize customization
        self.data(_iCheck, {o: settings, s: self.attr('style')}).css(hide);
        !!settings.inheritClass && parent[_add](node.className || '');
        !!settings.inheritID && id && parent.attr('id', _iCheck + '-' + id);
        parent.css('position') == 'static' && parent.css('position', 'relative');
        operate(self, true, _update);

        // Label events
        if (label.length) {
          label.on(_click + '.i mouseover.i mouseout.i ' + _touch, function(event) {
            var type = event[_type],
              item = $(this);

            // Do nothing if input is disabled
            if (!node[_disabled]) {

              // Click
              if (type == _click) {
                if ($(event.target).is('a')) {
                  return;
                }
                operate(self, false, true);

              // Hover state
              } else if (labelHover) {

                // mouseout|touchend
                if (/ut|nd/.test(type)) {
                  parent[_remove](hoverClass);
                  item[_remove](labelHoverClass);
                } else {
                  parent[_add](hoverClass);
                  item[_add](labelHoverClass);
                }
              }

              if (_mobile) {
                event.stopPropagation();
              } else {
                return false;
              }
            }
          });
        }

        // Input events
        self.on(_click + '.i focus.i blur.i keyup.i keydown.i keypress.i', function(event) {
          var type = event[_type],
            key = event.keyCode;

          // Click
          if (type == _click) {
            return false;

          // Keydown
          } else if (type == 'keydown' && key == 32) {
            if (!(node[_type] == _radio && node[_checked])) {
              if (node[_checked]) {
                off(self, _checked);
              } else {
                on(self, _checked);
              }
            }

            return false;

          // Keyup
          } else if (type == 'keyup' && node[_type] == _radio) {
            !node[_checked] && on(self, _checked);

          // Focus/blur
          } else if (/us|ur/.test(type)) {
            parent[type == 'blur' ? _remove : _add](focusClass);
          }
        });

        // Helper events
        helper.on(_click + ' mousedown mouseup mouseover mouseout ' + _touch, function(event) {
          var type = event[_type],

            // mousedown|mouseup
            toggle = /wn|up/.test(type) ? activeClass : hoverClass;

          // Do nothing if input is disabled
          if (!node[_disabled]) {

            // Click
            if (type == _click) {
              operate(self, false, true);

            // Active and hover states
            } else {

              // State is on
              if (/wn|er|in/.test(type)) {

                // mousedown|mouseover|touchbegin
                parent[_add](toggle);

              // State is off
              } else {
                parent[_remove](toggle + ' ' + activeClass);
              }

              // Label hover
              if (label.length && labelHover && toggle == hoverClass) {

                // mouseout|touchend
                label[/ut|nd/.test(type) ? _remove : _add](labelHoverClass);
              }
            }

            if (_mobile) {
              event.stopPropagation();
            } else {
              return false;
            }
          }
        });
      });
    } else {
      return this;
    }
  };

  // Do something with inputs
  function operate(input, direct, method) {
    var node = input[0],
      state = /er/.test(method) ? _indeterminate : /bl/.test(method) ? _disabled : _checked,
      active = method == _update ? {
        checked: node[_checked],
        disabled: node[_disabled],
        indeterminate: input.attr(_indeterminate) == 'true' || input.attr(_determinate) == 'false'
      } : node[state];

    // Check, disable or indeterminate
    if (/^(ch|di|in)/.test(method) && !active) {
      on(input, state);

    // Uncheck, enable or determinate
    } else if (/^(un|en|de)/.test(method) && active) {
      off(input, state);

    // Update
    } else if (method == _update) {

      // Handle states
      for (var each in active) {
        if (active[each]) {
          on(input, each, true);
        } else {
          off(input, each, true);
        }
      }

    } else if (!direct || method == 'toggle') {

      // Helper or label was clicked
      if (!direct) {
        input[_callback]('ifClicked');
      }

      // Toggle checked state
      if (active) {
        if (node[_type] !== _radio) {
          off(input, state);
        }
      } else {
        on(input, state);
      }
    }
  }

  // Add checked, disabled or indeterminate state
  function on(input, state, keep) {
    var node = input[0],
      parent = input.parent(),
      checked = state == _checked,
      indeterminate = state == _indeterminate,
      disabled = state == _disabled,
      callback = indeterminate ? _determinate : checked ? _unchecked : 'enabled',
      regular = option(input, callback + capitalize(node[_type])),
      specific = option(input, state + capitalize(node[_type]));

    // Prevent unnecessary actions
    if (node[state] !== true) {

      // Toggle assigned radio buttons
      if (!keep && state == _checked && node[_type] == _radio && node.name) {
        var form = input.closest('form'),
          inputs = 'input[name="' + node.name + '"]';

        inputs = form.length ? form.find(inputs) : $(inputs);

        inputs.each(function() {
          if (this !== node && $(this).data(_iCheck)) {
            off($(this), state);
          }
        });
      }

      // Indeterminate state
      if (indeterminate) {

        // Add indeterminate state
        node[state] = true;

        // Remove checked state
        if (node[_checked]) {
          off(input, _checked, 'force');
        }

      // Checked or disabled state
      } else {

        // Add checked or disabled state
        if (!keep) {
          node[state] = true;
        }

        // Remove indeterminate state
        if (checked && node[_indeterminate]) {
          off(input, _indeterminate, false);
        }
      }

      // Trigger callbacks
      callbacks(input, checked, state, keep);
    }

    // Add proper cursor
    if (node[_disabled] && !!option(input, _cursor, true)) {
      parent.find('.' + _iCheckHelper).css(_cursor, 'default');
    }

    // Add state class
    parent[_add](specific || option(input, state) || '');

    // Set ARIA attribute
    if (!!parent.attr('role') && !indeterminate) {
      parent.attr('aria-' + (disabled ? _disabled : _checked), 'true');
    }

    // Remove regular state class
    parent[_remove](regular || option(input, callback) || '');
  }

  // Remove checked, disabled or indeterminate state
  function off(input, state, keep) {
    var node = input[0],
      parent = input.parent(),
      checked = state == _checked,
      indeterminate = state == _indeterminate,
      disabled = state == _disabled,
      callback = indeterminate ? _determinate : checked ? _unchecked : 'enabled',
      regular = option(input, callback + capitalize(node[_type])),
      specific = option(input, state + capitalize(node[_type]));

    // Prevent unnecessary actions
    if (node[state] !== false) {

      // Toggle state
      if (indeterminate || !keep || keep == 'force') {
        node[state] = false;
      }

      // Trigger callbacks
      callbacks(input, checked, callback, keep);
    }

    // Add proper cursor
    if (!node[_disabled] && !!option(input, _cursor, true)) {
      parent.find('.' + _iCheckHelper).css(_cursor, 'pointer');
    }

    // Remove state class
    parent[_remove](specific || option(input, state) || '');

    // Set ARIA attribute
    if (!!parent.attr('role') && !indeterminate) {
      parent.attr('aria-' + (disabled ? _disabled : _checked), 'false');
    }

    // Add regular state class
    parent[_add](regular || option(input, callback) || '');
  }

  // Remove all traces
  function tidy(input, callback) {
    if (input.data(_iCheck)) {

      // Remove everything except input
      input.parent().html(input.attr('style', input.data(_iCheck).s || ''));

      // Callback
      if (callback) {
        input[_callback](callback);
      }

      // Unbind events
      input.off('.i').unwrap();
      $(_label + '[for="' + input[0].id + '"]').add(input.closest(_label)).off('.i');
    }
  }

  // Get some option
  function option(input, state, regular) {
    if (input.data(_iCheck)) {
      return input.data(_iCheck).o[state + (regular ? '' : 'Class')];
    }
  }

  // Capitalize some string
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Executable handlers
  function callbacks(input, checked, callback, keep) {
    if (!keep) {
      if (checked) {
        input[_callback]('ifToggled');
      }

      input[_callback]('ifChanged')[_callback]('if' + capitalize(callback));
    }
  }
})(window.jQuery || window.Zepto);

/*
 * bootstrap-filestyle
 * doc: http://markusslima.github.io/bootstrap-filestyle/
 * github: https://github.com/markusslima/bootstrap-filestyle
 *
 * Copyright (c) 2014 Markus Vinicius da Silva Lima
 * Version 1.1.2
 * Licensed under the MIT license.
 */
(function($) {"use strict";

	var Filestyle = function(element, options) {
		this.options = options;
		this.$elementFilestyle = [];
		this.$element = $(element);
	};

	Filestyle.prototype = {
		clear : function() {
			this.$element.val('');
			this.$elementFilestyle.find(':text').val('');
			this.$elementFilestyle.find('.badge').remove();
		},

		destroy : function() {
			this.$element.removeAttr('style').removeData('filestyle').val('');
			this.$elementFilestyle.remove();
		},

		disabled : function(value) {
			if (value === true) {
				if (!this.options.disabled) {
					this.$element.attr('disabled', 'true');
					this.$elementFilestyle.find('label').attr('disabled', 'true');
					this.options.disabled = true;
				}
			} else if (value === false) {
				if (this.options.disabled) {
					this.$element.removeAttr('disabled');
					this.$elementFilestyle.find('label').removeAttr('disabled');
					this.options.disabled = false;
				}
			} else {
				return this.options.disabled;
			}
		},

		buttonBefore : function(value) {
			if (value === true) {
				if (!this.options.buttonBefore) {
					this.options.buttonBefore = true;
					if (this.options.input) {
						this.$elementFilestyle.remove();
						this.constructor();
						this.pushNameFiles();
					}
				}
			} else if (value === false) {
				if (this.options.buttonBefore) {
					this.options.buttonBefore = false;
					if (this.options.input) {
						this.$elementFilestyle.remove();
						this.constructor();
						this.pushNameFiles();
					}
				}
			} else {
				return this.options.buttonBefore;
			}
		},

		icon : function(value) {
			if (value === true) {
				if (!this.options.icon) {
					this.options.icon = true;
					this.$elementFilestyle.find('label').prepend(this.htmlIcon());
				}
			} else if (value === false) {
				if (this.options.icon) {
					this.options.icon = false;
					this.$elementFilestyle.find('.glyphicon').remove();
				}
			} else {
				return this.options.icon;
			}
		},

		input : function(value) {
			if (value === true) {
				if (!this.options.input) {
					this.options.input = true;

					if (this.options.buttonBefore) {
						this.$elementFilestyle.append(this.htmlInput());
					} else {
						this.$elementFilestyle.prepend(this.htmlInput());
					}

					this.$elementFilestyle.find('.badge').remove();

					this.pushNameFiles();

					this.$elementFilestyle.find('.group-span-filestyle').addClass('input-group-btn');
				}
			} else if (value === false) {
				if (this.options.input) {
					this.options.input = false;
					this.$elementFilestyle.find(':text').remove();
					var files = this.pushNameFiles();
					if (files.length > 0 && this.options.badge) {
						this.$elementFilestyle.find('label').append(' <span class="badge">' + files.length + '</span>');
					}
					this.$elementFilestyle.find('.group-span-filestyle').removeClass('input-group-btn');
				}
			} else {
				return this.options.input;
			}
		},

		size : function(value) {
			if (value !== undefined) {
				var btn = this.$elementFilestyle.find('label'), input = this.$elementFilestyle.find('input');

				btn.removeClass('btn-lg btn-sm');
				input.removeClass('input-lg input-sm');
				if (value != 'nr') {
					btn.addClass('btn-' + value);
					input.addClass('input-' + value);
				}
			} else {
				return this.options.size;
			}
		},

		buttonText : function(value) {
			if (value !== undefined) {
				this.options.buttonText = value;
				this.$elementFilestyle.find('label span').html(this.options.buttonText);
			} else {
				return this.options.buttonText;
			}
		},

		buttonName : function(value) {
			if (value !== undefined) {
				this.options.buttonName = value;
				this.$elementFilestyle.find('label').attr({
					'class' : 'btn ' + this.options.buttonName
				});
			} else {
				return this.options.buttonName;
			}
		},

		iconName : function(value) {
			if (value !== undefined) {
				this.$elementFilestyle.find('.glyphicon').attr({
					'class' : '.glyphicon ' + this.options.iconName
				});
			} else {
				return this.options.iconName;
			}
		},

		htmlIcon : function() {
			if (this.options.icon) {
				return '<span class="glyphicon ' + this.options.iconName + '"></span> ';
			} else {
				return '';
			}
		},

		htmlInput : function() {
			if (this.options.input) {
				return '<input type="text" class="form-control ' + (this.options.size == 'nr' ? '' : 'input-' + this.options.size) + '" disabled> ';
			} else {
				return '';
			}
		},

		// puts the name of the input files
		// return files
		pushNameFiles : function() {
			var content = '', files = [];
			if (this.$element[0].files === undefined) {
				files[0] = {
					'name' : this.$element[0] && this.$element[0].value
				};
			} else {
				files = this.$element[0].files;
			}

			for (var i = 0; i < files.length; i++) {
				content += files[i].name.split("\\").pop() + ', ';
			}

			if (content !== '') {
				this.$elementFilestyle.find(':text').val(content.replace(/\, $/g, ''));
			} else {
				this.$elementFilestyle.find(':text').val('');
			}
			
			return files;
		},

		constructor : function() {
			var _self = this, 
				html = '', 
				id = _self.$element.attr('id'), 
				files = [], 
				btn = '', 
				$label;

			if (id === '' || !id) {
				id = 'filestyle-' + $('.bootstrap-filestyle').length;
				_self.$element.attr({
					'id' : id
				});
			}

			btn = '<span class="group-span-filestyle ' + (_self.options.input ? 'input-group-btn' : '') + '">' + 
				  '<label for="' + id + '" class="btn ' + _self.options.buttonName + ' ' + 
				  	(_self.options.size == 'nr' ? '' : 'btn-' + _self.options.size) + '" ' + 
				  	(_self.options.disabled ? 'disabled="true"' : '') + '>' + 
				  		_self.htmlIcon() + _self.options.buttonText + 
				  '</label>' + 
				  '</span>';

			html = _self.options.buttonBefore ? btn + _self.htmlInput() : _self.htmlInput() + btn;

			_self.$elementFilestyle = $('<div class="bootstrap-filestyle input-group">' + html + '</div>');
			_self.$elementFilestyle.find('.group-span-filestyle').attr('tabindex', "0").keypress(function(e) {
				if (e.keyCode === 13 || e.charCode === 32) {
					_self.$elementFilestyle.find('label').click();
					return false;
				}
			});

			// hidding input file and add filestyle
			_self.$element.css({
				'position' : 'absolute',
				'clip' : 'rect(0px 0px 0px 0px)' // using 0px for work in IE8
			}).attr('tabindex', "-1").after(_self.$elementFilestyle);

			if (_self.options.disabled) {
				_self.$element.attr('disabled', 'true');
			}

			// Getting input file value
			_self.$element.change(function() {
				var files = _self.pushNameFiles();

				if (_self.options.input == false && _self.options.badge) {
					if (_self.$elementFilestyle.find('.badge').length == 0) {
						_self.$elementFilestyle.find('label').append(' <span class="badge">' + files.length + '</span>');
					} else if (files.length == 0) {
						_self.$elementFilestyle.find('.badge').remove();
					} else {
						_self.$elementFilestyle.find('.badge').html(files.length);
					}
				} else {
					_self.$elementFilestyle.find('.badge').remove();
				}
			});

			// Check if browser is Firefox
			if (window.navigator.userAgent.search(/firefox/i) > -1) {
				// Simulating choose file for firefox
				_self.$elementFilestyle.find('label').click(function() {
					_self.$element.click();
					return false;
				});
			}
		}
	};

	var old = $.fn.filestyle;

	$.fn.filestyle = function(option, value) {
		var get = '', element = this.each(function() {
			if ($(this).attr('type') === 'file') {
				var $this = $(this), data = $this.data('filestyle'), options = $.extend({}, $.fn.filestyle.defaults, option, typeof option === 'object' && option);

				if (!data) {
					$this.data('filestyle', ( data = new Filestyle(this, options)));
					data.constructor();
				}

				if ( typeof option === 'string') {
					get = data[option](value);
				}
			}
		});

		if ( typeof get !== undefined) {
			return get;
		} else {
			return element;
		}
	};

	$.fn.filestyle.defaults = {
		'buttonText' : 'Choose file',
		'iconName' : 'glyphicon-folder-open',
		'buttonName' : 'btn-default',
		'size' : 'nr',
		'input' : true,
		'badge' : true,
		'icon' : true,
		'buttonBefore' : false,
		'disabled' : false
	};

	$.fn.filestyle.noConflict = function() {
		$.fn.filestyle = old;
		return this;
	};

	// Data attributes register
	$(function() {
		$('.filestyle').each(function() {
			var $this = $(this), options = {

				'input' : $this.attr('data-input') === 'false' ? false : true,
				'icon' : $this.attr('data-icon') === 'false' ? false : true,
				'buttonBefore' : $this.attr('data-buttonBefore') === 'true' ? true : false,
				'disabled' : $this.attr('data-disabled') === 'true' ? true : false,
				'size' : $this.attr('data-size'),
				'buttonText' : $this.attr('data-buttonText'),
				'buttonName' : $this.attr('data-buttonName'),
				'iconName' : $this.attr('data-iconName'),
				'badge' : $this.attr('data-badge') === 'false' ? false : true
			};

			$this.filestyle(options);
		});
	});
})(window.jQuery);

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define('simple-module', ["jquery"], function ($) {
      return (root.returnExportsGlobal = factory($));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"));
  } else {
    root['SimpleModule'] = factory(jQuery);
  }
}(this, function ($) {

var Module,
  __slice = [].slice;

Module = (function() {
  Module.extend = function(obj) {
    var key, val, _ref;
    if (!((obj != null) && typeof obj === 'object')) {
      return;
    }
    for (key in obj) {
      val = obj[key];
      if (key !== 'included' && key !== 'extended') {
        this[key] = val;
      }
    }
    return (_ref = obj.extended) != null ? _ref.call(this) : void 0;
  };

  Module.include = function(obj) {
    var key, val, _ref;
    if (!((obj != null) && typeof obj === 'object')) {
      return;
    }
    for (key in obj) {
      val = obj[key];
      if (key !== 'included' && key !== 'extended') {
        this.prototype[key] = val;
      }
    }
    return (_ref = obj.included) != null ? _ref.call(this) : void 0;
  };

  Module.connect = function(cls) {
    if (typeof cls !== 'function') {
      return;
    }
    if (!cls.pluginName) {
      throw new Error('Module.connect: cannot connect plugin without pluginName');
      return;
    }
    cls.prototype._connected = true;
    if (!this._connectedClasses) {
      this._connectedClasses = [];
    }
    this._connectedClasses.push(cls);
    if (cls.pluginName) {
      return this[cls.pluginName] = cls;
    }
  };

  Module.prototype.opts = {};

  function Module(opts) {
    var cls, instance, instances, name, _base, _i, _len;
    this.opts = $.extend({}, this.opts, opts);
    (_base = this.constructor)._connectedClasses || (_base._connectedClasses = []);
    instances = (function() {
      var _i, _len, _ref, _results;
      _ref = this.constructor._connectedClasses;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        cls = _ref[_i];
        name = cls.pluginName.charAt(0).toLowerCase() + cls.pluginName.slice(1);
        if (cls.prototype._connected) {
          cls.prototype._module = this;
        }
        _results.push(this[name] = new cls());
      }
      return _results;
    }).call(this);
    if (this._connected) {
      this.opts = $.extend({}, this.opts, this._module.opts);
    } else {
      this._init();
      for (_i = 0, _len = instances.length; _i < _len; _i++) {
        instance = instances[_i];
        if (typeof instance._init === "function") {
          instance._init();
        }
      }
    }
    this.trigger('initialized');
  }

  Module.prototype._init = function() {};

  Module.prototype.on = function() {
    var args, _ref;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    (_ref = $(this)).on.apply(_ref, args);
    return this;
  };

  Module.prototype.one = function() {
    var args, _ref;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    (_ref = $(this)).one.apply(_ref, args);
    return this;
  };

  Module.prototype.off = function() {
    var args, _ref;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    (_ref = $(this)).off.apply(_ref, args);
    return this;
  };

  Module.prototype.trigger = function() {
    var args, _ref;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    (_ref = $(this)).trigger.apply(_ref, args);
    return this;
  };

  Module.prototype.triggerHandler = function() {
    var args, _ref;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return (_ref = $(this)).triggerHandler.apply(_ref, args);
  };

  Module.prototype._t = function() {
    var args, _ref;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return (_ref = this.constructor)._t.apply(_ref, args);
  };

  Module._t = function() {
    var args, key, result, _ref;
    key = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    result = ((_ref = this.i18n[this.locale]) != null ? _ref[key] : void 0) || '';
    if (!(args.length > 0)) {
      return result;
    }
    result = result.replace(/([^%]|^)%(?:(\d+)\$)?s/g, function(p0, p, position) {
      if (position) {
        return p + args[parseInt(position) - 1];
      } else {
        return p + args.shift();
      }
    });
    return result.replace(/%%s/g, '%s');
  };

  Module.i18n = {
    'zh-CN': {}
  };

  Module.locale = 'zh-CN';

  return Module;

})();


return Module;


}));

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define('simple-hotkeys', ["jquery",
      "simple-module"], function ($, SimpleModule) {
      return (root.returnExportsGlobal = factory($, SimpleModule));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"),
      require("simple-module"));
  } else {
    root.simple = root.simple || {};
    root.simple['hotkeys'] = factory(jQuery,
      SimpleModule);
  }
}(this, function ($, SimpleModule) {

var Hotkeys, hotkeys,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Hotkeys = (function(_super) {
  __extends(Hotkeys, _super);

  function Hotkeys() {
    return Hotkeys.__super__.constructor.apply(this, arguments);
  }

  Hotkeys.count = 0;

  Hotkeys.keyNameMap = {
    8: "Backspace",
    9: "Tab",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Esc",
    32: "Spacebar",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "Left",
    38: "Up",
    39: "Right",
    40: "Down",
    45: "Insert",
    46: "Del",
    91: "Meta",
    93: "Meta",
    48: "0",
    49: "1",
    50: "2",
    51: "3",
    52: "4",
    53: "5",
    54: "6",
    55: "7",
    56: "8",
    57: "9",
    65: "A",
    66: "B",
    67: "C",
    68: "D",
    69: "E",
    70: "F",
    71: "G",
    72: "H",
    73: "I",
    74: "J",
    75: "K",
    76: "L",
    77: "M",
    78: "N",
    79: "O",
    80: "P",
    81: "Q",
    82: "R",
    83: "S",
    84: "T",
    85: "U",
    86: "V",
    87: "W",
    88: "X",
    89: "Y",
    90: "Z",
    96: "0",
    97: "1",
    98: "2",
    99: "3",
    100: "4",
    101: "5",
    102: "6",
    103: "7",
    104: "8",
    105: "9",
    106: "Multiply",
    107: "Add",
    109: "Subtract",
    110: "Decimal",
    111: "Divide",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    124: "F13",
    125: "F14",
    126: "F15",
    127: "F16",
    128: "F17",
    129: "F18",
    130: "F19",
    131: "F20",
    132: "F21",
    133: "F22",
    134: "F23",
    135: "F24",
    59: ";",
    61: "=",
    186: ";",
    187: "=",
    188: ",",
    190: ".",
    191: "/",
    192: "`",
    219: "[",
    220: "\\",
    221: "]",
    222: "'"
  };

  Hotkeys.aliases = {
    "escape": "esc",
    "delete": "del",
    "return": "enter",
    "ctrl": "control",
    "space": "spacebar",
    "ins": "insert",
    "cmd": "meta",
    "command": "meta",
    "wins": "meta",
    "windows": "meta"
  };

  Hotkeys.normalize = function(shortcut) {
    var i, key, keyname, keys, _i, _len;
    keys = shortcut.toLowerCase().replace(/\s+/gi, "").split("+");
    for (i = _i = 0, _len = keys.length; _i < _len; i = ++_i) {
      key = keys[i];
      keys[i] = this.aliases[key] || key;
    }
    keyname = keys.pop();
    keys.sort().push(keyname);
    return keys.join("_");
  };

  Hotkeys.prototype.opts = {
    el: document
  };

  Hotkeys.prototype._init = function() {
    this.id = ++this.constructor.count;
    this._map = {};
    this._delegate = typeof this.opts.el === "string" ? document : this.opts.el;
    return $(this._delegate).on("keydown.simple-hotkeys-" + this.id, this.opts.el, (function(_this) {
      return function(e) {
        var _ref;
        return (_ref = _this._getHander(e)) != null ? _ref.call(_this, e) : void 0;
      };
    })(this));
  };

  Hotkeys.prototype._getHander = function(e) {
    var keyname, shortcut;
    if (!(keyname = this.constructor.keyNameMap[e.which])) {
      return;
    }
    shortcut = "";
    if (e.altKey) {
      shortcut += "alt_";
    }
    if (e.ctrlKey) {
      shortcut += "control_";
    }
    if (e.metaKey) {
      shortcut += "meta_";
    }
    if (e.shiftKey) {
      shortcut += "shift_";
    }
    shortcut += keyname.toLowerCase();
    return this._map[shortcut];
  };

  Hotkeys.prototype.respondTo = function(subject) {
    if (typeof subject === 'string') {
      return this._map[this.constructor.normalize(subject)] != null;
    } else {
      return this._getHander(subject) != null;
    }
  };

  Hotkeys.prototype.add = function(shortcut, handler) {
    this._map[this.constructor.normalize(shortcut)] = handler;
    return this;
  };

  Hotkeys.prototype.remove = function(shortcut) {
    delete this._map[this.constructor.normalize(shortcut)];
    return this;
  };

  Hotkeys.prototype.destroy = function() {
    $(this._delegate).off(".simple-hotkeys-" + this.id);
    this._map = {};
    return this;
  };

  return Hotkeys;

})(SimpleModule);

hotkeys = function(opts) {
  return new Hotkeys(opts);
};


return hotkeys;


}));


(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define('simple-uploader', ["jquery",
      "simple-module"], function ($, SimpleModule) {
      return (root.returnExportsGlobal = factory($, SimpleModule));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"),
      require("simple-module"));
  } else {
    root.simple = root.simple || {};
    root.simple['uploader'] = factory(jQuery,
      SimpleModule);
  }
}(this, function ($, SimpleModule) {

var Uploader, uploader,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Uploader = (function(_super) {
  __extends(Uploader, _super);

  function Uploader() {
    return Uploader.__super__.constructor.apply(this, arguments);
  }

  Uploader.count = 0;

  Uploader.prototype.opts = {
    url: '',
    params: null,
    fileKey: 'upload_file',
    connectionCount: 3
  };

  Uploader.prototype._init = function() {
    this.files = [];
    this.queue = [];
    this.id = ++Uploader.count;
    this.on('uploadcomplete', (function(_this) {
      return function(e, file) {
        _this.files.splice($.inArray(file, _this.files), 1);
        if (_this.queue.length > 0 && _this.files.length < _this.opts.connectionCount) {
          return _this.upload(_this.queue.shift());
        } else {
          return _this.uploading = false;
        }
      };
    })(this));
    return $(window).on('beforeunload.uploader-' + this.id, (function(_this) {
      return function(e) {
        if (!_this.uploading) {
          return;
        }
        e.originalEvent.returnValue = _this._t('leaveConfirm');
        return _this._t('leaveConfirm');
      };
    })(this));
  };

  Uploader.prototype.generateId = (function() {
    var id;
    id = 0;
    return function() {
      return id += 1;
    };
  })();

  Uploader.prototype.upload = function(file, opts) {
    var f, key, _i, _len;
    if (opts == null) {
      opts = {};
    }
    if (file == null) {
      return;
    }
    if ($.isArray(file) || file instanceof FileList) {
      for (_i = 0, _len = file.length; _i < _len; _i++) {
        f = file[_i];
        this.upload(f, opts);
      }
    } else if ($(file).is('input:file')) {
      key = $(file).attr('name');
      if (key) {
        opts.fileKey = key;
      }
      this.upload($.makeArray($(file)[0].files), opts);
    } else if (!file.id || !file.obj) {
      file = this.getFile(file);
    }
    if (!(file && file.obj)) {
      return;
    }
    $.extend(file, opts);
    if (this.files.length >= this.opts.connectionCount) {
      this.queue.push(file);
      return;
    }
    if (this.triggerHandler('beforeupload', [file]) === false) {
      return;
    }
    this.files.push(file);
    this._xhrUpload(file);
    return this.uploading = true;
  };

  Uploader.prototype.getFile = function(fileObj) {
    var name, _ref, _ref1;
    if (fileObj instanceof window.File || fileObj instanceof window.Blob) {
      name = (_ref = fileObj.fileName) != null ? _ref : fileObj.name;
    } else {
      return null;
    }
    return {
      id: this.generateId(),
      url: this.opts.url,
      params: this.opts.params,
      fileKey: this.opts.fileKey,
      name: name,
      size: (_ref1 = fileObj.fileSize) != null ? _ref1 : fileObj.size,
      ext: name ? name.split('.').pop().toLowerCase() : '',
      obj: fileObj
    };
  };

  Uploader.prototype._xhrUpload = function(file) {
    var formData, k, v, _ref;
    formData = new FormData();
    formData.append(file.fileKey, file.obj);
    formData.append("original_filename", file.name);
    if (file.params) {
      _ref = file.params;
      for (k in _ref) {
        v = _ref[k];
        formData.append(k, v);
      }
    }
    return file.xhr = $.ajax({
      url: file.url,
      data: formData,
      processData: false,
      contentType: false,
      type: 'POST',
      headers: {
        'X-File-Name': encodeURIComponent(file.name)
      },
      xhr: function() {
        var req;
        req = $.ajaxSettings.xhr();
        if (req) {
          req.upload.onprogress = (function(_this) {
            return function(e) {
              return _this.progress(e);
            };
          })(this);
        }
        return req;
      },
      progress: (function(_this) {
        return function(e) {
          if (!e.lengthComputable) {
            return;
          }
          return _this.trigger('uploadprogress', [file, e.loaded, e.total]);
        };
      })(this),
      error: (function(_this) {
        return function(xhr, status, err) {
          return _this.trigger('uploaderror', [file, xhr, status]);
        };
      })(this),
      success: (function(_this) {
        return function(result) {
          _this.trigger('uploadprogress', [file, file.size, file.size]);
          _this.trigger('uploadsuccess', [file, result]);
          return $(document).trigger('uploadsuccess', [file, result, _this]);
        };
      })(this),
      complete: (function(_this) {
        return function(xhr, status) {
          return _this.trigger('uploadcomplete', [file, xhr.responseText]);
        };
      })(this)
    });
  };

  Uploader.prototype.cancel = function(file) {
    var f, _i, _len, _ref;
    if (!file.id) {
      _ref = this.files;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        f = _ref[_i];
        if (f.id === file * 1) {
          file = f;
          break;
        }
      }
    }
    this.trigger('uploadcancel', [file]);
    if (file.xhr) {
      file.xhr.abort();
    }
    return file.xhr = null;
  };

  Uploader.prototype.readImageFile = function(fileObj, callback) {
    var fileReader, img;
    if (!$.isFunction(callback)) {
      return;
    }
    img = new Image();
    img.onload = function() {
      return callback(img);
    };
    img.onerror = function() {
      return callback();
    };
    if (window.FileReader && FileReader.prototype.readAsDataURL && /^image/.test(fileObj.type)) {
      fileReader = new FileReader();
      fileReader.onload = function(e) {
        return img.src = e.target.result;
      };
      return fileReader.readAsDataURL(fileObj);
    } else {
      return callback();
    }
  };

  Uploader.prototype.destroy = function() {
    var file, _i, _len, _ref;
    this.queue.length = 0;
    _ref = this.files;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      file = _ref[_i];
      this.cancel(file);
    }
    $(window).off('.uploader-' + this.id);
    return $(document).off('.uploader-' + this.id);
  };

  Uploader.i18n = {
    'zh-CN': {
      leaveConfirm: '正在上传文件，如果离开上传会自动取消'
    }
  };

  Uploader.locale = 'zh-CN';

  return Uploader;

})(SimpleModule);

uploader = function(opts) {
  return new Uploader(opts);
};

return uploader;

}));



/*!
* Simditor v2.1.8
* http://simditor.tower.im/
* 2015-20-04
*/
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define('simditor', ["jquery","simple-module","simple-hotkeys","simple-uploader"], function ($, SimpleModule, simpleHotkeys, simpleUploader) {
      return (root['Simditor'] = factory($, SimpleModule, simpleHotkeys, simpleUploader));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"),require("simple-module"),require("simple-hotkeys"),require("simple-uploader"));
  } else {
    root['Simditor'] = factory(jQuery,SimpleModule,simple.hotkeys,simple.uploader);
  }
}(this, function ($, SimpleModule, simpleHotkeys, simpleUploader) {

var BlockquoteButton, BoldButton, Button, CodeButton, CodePopover, ColorButton, Formatter, HrButton, ImageButton, ImagePopover, IndentButton, Indentation, InputManager, ItalicButton, Keystroke, LinkButton, LinkPopover, ListButton, OrderListButton, OutdentButton, Popover, Selection, Simditor, SourceButton, StrikethroughButton, TableButton, TitleButton, Toolbar, UnderlineButton, UndoManager, UnorderListButton, Util,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
  slice = [].slice;

Selection = (function(superClass) {
  extend(Selection, superClass);

  function Selection() {
    return Selection.__super__.constructor.apply(this, arguments);
  }

  Selection.pluginName = 'Selection';

  Selection.prototype._init = function() {
    this.editor = this._module;
    return this.sel = document.getSelection();
  };

  Selection.prototype.clear = function() {
    var e;
    try {
      return this.sel.removeAllRanges();
    } catch (_error) {
      e = _error;
    }
  };

  Selection.prototype.getRange = function() {
    if (!this.editor.inputManager.focused || !this.sel.rangeCount) {
      return null;
    }
    return this.sel.getRangeAt(0);
  };

  Selection.prototype.selectRange = function(range) {
    this.clear();
    this.sel.addRange(range);
    if (!this.editor.inputManager.focused && (this.editor.util.browser.firefox || this.editor.util.browser.msie)) {
      this.editor.body.focus();
    }
    return range;
  };

  Selection.prototype.rangeAtEndOf = function(node, range) {
    var endNode, endNodeLength, result;
    if (range == null) {
      range = this.getRange();
    }
    if (!((range != null) && range.collapsed)) {
      return;
    }
    node = $(node)[0];
    endNode = range.endContainer;
    endNodeLength = this.editor.util.getNodeLength(endNode);
    if (!(range.endOffset === endNodeLength - 1 && $(endNode).contents().last().is('br')) && range.endOffset !== endNodeLength) {
      return false;
    }
    if (node === endNode) {
      return true;
    } else if (!$.contains(node, endNode)) {
      return false;
    }
    result = true;
    $(endNode).parentsUntil(node).addBack().each((function(_this) {
      return function(i, n) {
        var $lastChild, nodes;
        nodes = $(n).parent().contents().filter(function() {
          return !(this !== n && this.nodeType === 3 && !this.nodeValue);
        });
        $lastChild = nodes.last();
        if (!($lastChild.get(0) === n || ($lastChild.is('br') && $lastChild.prev().get(0) === n))) {
          result = false;
          return false;
        }
      };
    })(this));
    return result;
  };

  Selection.prototype.rangeAtStartOf = function(node, range) {
    var result, startNode;
    if (range == null) {
      range = this.getRange();
    }
    if (!((range != null) && range.collapsed)) {
      return;
    }
    node = $(node)[0];
    startNode = range.startContainer;
    if (range.startOffset !== 0) {
      return false;
    }
    if (node === startNode) {
      return true;
    } else if (!$.contains(node, startNode)) {
      return false;
    }
    result = true;
    $(startNode).parentsUntil(node).addBack().each((function(_this) {
      return function(i, n) {
        var nodes;
        nodes = $(n).parent().contents().filter(function() {
          return !(this !== n && this.nodeType === 3 && !this.nodeValue);
        });
        if (nodes.first().get(0) !== n) {
          return result = false;
        }
      };
    })(this));
    return result;
  };

  Selection.prototype.insertNode = function(node, range) {
    if (range == null) {
      range = this.getRange();
    }
    if (range == null) {
      return;
    }
    node = $(node)[0];
    range.insertNode(node);
    return this.setRangeAfter(node, range);
  };

  Selection.prototype.setRangeAfter = function(node, range) {
    if (range == null) {
      range = this.getRange();
    }
    if (range == null) {
      return;
    }
    node = $(node)[0];
    range.setEndAfter(node);
    range.collapse(false);
    return this.selectRange(range);
  };

  Selection.prototype.setRangeBefore = function(node, range) {
    if (range == null) {
      range = this.getRange();
    }
    if (range == null) {
      return;
    }
    node = $(node)[0];
    range.setEndBefore(node);
    range.collapse(false);
    return this.selectRange(range);
  };

  Selection.prototype.setRangeAtStartOf = function(node, range) {
    if (range == null) {
      range = this.getRange();
    }
    node = $(node).get(0);
    range.setEnd(node, 0);
    range.collapse(false);
    return this.selectRange(range);
  };

  Selection.prototype.setRangeAtEndOf = function(node, range) {
    var $lastNode, $node, contents, lastChild, lastText, nodeLength;
    if (range == null) {
      range = this.getRange();
    }
    $node = $(node);
    node = $node.get(0);
    if ($node.is('pre')) {
      contents = $node.contents();
      if (contents.length > 0) {
        lastChild = contents.last();
        lastText = lastChild.text();
        if (lastText.charAt(lastText.length - 1) === '\n') {
          range.setEnd(lastChild[0], this.editor.util.getNodeLength(lastChild[0]) - 1);
        } else {
          range.setEnd(lastChild[0], this.editor.util.getNodeLength(lastChild[0]));
        }
      } else {
        range.setEnd(node, 0);
      }
    } else {
      nodeLength = this.editor.util.getNodeLength(node);
      if (node.nodeType !== 3 && nodeLength > 0) {
        $lastNode = $(node).contents().last();
        if ($lastNode.is('br')) {
          nodeLength -= 1;
        } else if ($lastNode[0].nodeType !== 3 && this.editor.util.isEmptyNode($lastNode)) {
          $lastNode.append(this.editor.util.phBr);
          node = $lastNode[0];
          nodeLength = 0;
        }
      }
      range.setEnd(node, nodeLength);
    }
    range.collapse(false);
    return this.selectRange(range);
  };

  Selection.prototype.deleteRangeContents = function(range) {
    var endRange, startRange;
    if (range == null) {
      range = this.getRange();
    }
    startRange = range.cloneRange();
    endRange = range.cloneRange();
    startRange.collapse(true);
    endRange.collapse(false);
    if (!range.collapsed && this.rangeAtStartOf(this.editor.body, startRange) && this.rangeAtEndOf(this.editor.body, endRange)) {
      this.editor.body.empty();
      range.setStart(this.editor.body[0], 0);
      range.collapse(true);
      this.selectRange(range);
    } else {
      range.deleteContents();
    }
    return range;
  };

  Selection.prototype.breakBlockEl = function(el, range) {
    var $el;
    if (range == null) {
      range = this.getRange();
    }
    $el = $(el);
    if (!range.collapsed) {
      return $el;
    }
    range.setStartBefore($el.get(0));
    if (range.collapsed) {
      return $el;
    }
    return $el.before(range.extractContents());
  };

  Selection.prototype.save = function(range) {
    var endCaret, endRange, startCaret;
    if (range == null) {
      range = this.getRange();
    }
    if (this._selectionSaved) {
      return;
    }
    endRange = range.cloneRange();
    endRange.collapse(false);
    startCaret = $('<span/>').addClass('simditor-caret-start');
    endCaret = $('<span/>').addClass('simditor-caret-end');
    endRange.insertNode(endCaret[0]);
    range.insertNode(startCaret[0]);
    this.clear();
    return this._selectionSaved = true;
  };

  Selection.prototype.restore = function() {
    var endCaret, endContainer, endOffset, range, startCaret, startContainer, startOffset;
    if (!this._selectionSaved) {
      return false;
    }
    startCaret = this.editor.body.find('.simditor-caret-start');
    endCaret = this.editor.body.find('.simditor-caret-end');
    if (startCaret.length && endCaret.length) {
      startContainer = startCaret.parent();
      startOffset = startContainer.contents().index(startCaret);
      endContainer = endCaret.parent();
      endOffset = endContainer.contents().index(endCaret);
      if (startContainer[0] === endContainer[0]) {
        endOffset -= 1;
      }
      range = document.createRange();
      range.setStart(startContainer.get(0), startOffset);
      range.setEnd(endContainer.get(0), endOffset);
      startCaret.remove();
      endCaret.remove();
      this.selectRange(range);
    } else {
      startCaret.remove();
      endCaret.remove();
    }
    this._selectionSaved = false;
    return range;
  };

  return Selection;

})(SimpleModule);

Formatter = (function(superClass) {
  extend(Formatter, superClass);

  function Formatter() {
    return Formatter.__super__.constructor.apply(this, arguments);
  }

  Formatter.pluginName = 'Formatter';

  Formatter.prototype.opts = {
    allowedTags: null,
    allowedAttributes: null
  };

  Formatter.prototype._init = function() {
    this.editor = this._module;
    this._allowedTags = this.opts.allowedTags || ['br', 'a', 'img', 'b', 'strong', 'i', 'u', 'font', 'p', 'ul', 'ol', 'li', 'blockquote', 'pre', 'h1', 'h2', 'h3', 'h4', 'hr'];
    this._allowedAttributes = this.opts.allowedAttributes || {
      img: ['src', 'alt', 'width', 'height', 'data-image-src', 'data-image-size', 'data-image-name', 'data-non-image'],
      a: ['href', 'target'],
      font: ['color'],
      pre: ['data-lang', 'class'],
      p: ['data-indent'],
      h1: ['data-indent'],
      h2: ['data-indent'],
      h3: ['data-indent'],
      h4: ['data-indent']
    };
    return this.editor.body.on('click', 'a', (function(_this) {
      return function(e) {
        return false;
      };
    })(this));
  };

  Formatter.prototype.decorate = function($el) {
    if ($el == null) {
      $el = this.editor.body;
    }
    return this.editor.trigger('decorate', [$el]);
  };

  Formatter.prototype.undecorate = function($el) {
    if ($el == null) {
      $el = this.editor.body.clone();
    }
    this.editor.trigger('undecorate', [$el]);
    return $.trim($el.html());
  };

  Formatter.prototype.autolink = function($el) {
    var $node, findLinkNode, j, lastIndex, len, linkNodes, match, re, replaceEls, text, uri;
    if ($el == null) {
      $el = this.editor.body;
    }
    linkNodes = [];
    findLinkNode = function($parentNode) {
      return $parentNode.contents().each(function(i, node) {
        var $node, text;
        $node = $(node);
        if ($node.is('a') || $node.closest('a, pre', $el).length) {
          return;
        }
        if ($node.contents().length) {
          return findLinkNode($node);
        } else if ((text = $node.text()) && /https?:\/\/|www\./ig.test(text)) {
          return linkNodes.push($node);
        }
      });
    };
    findLinkNode($el);
    re = /(https?:\/\/|www\.)[\w\-\.\?&=\/#%:,@\!\+]+/ig;
    for (j = 0, len = linkNodes.length; j < len; j++) {
      $node = linkNodes[j];
      text = $node.text();
      replaceEls = [];
      match = null;
      lastIndex = 0;
      while ((match = re.exec(text)) !== null) {
        replaceEls.push(document.createTextNode(text.substring(lastIndex, match.index)));
        lastIndex = re.lastIndex;
        uri = /^(http(s)?:\/\/|\/)/.test(match[0]) ? match[0] : 'http://' + match[0];
        replaceEls.push($('<a href="' + uri + '" rel="nofollow"></a>').text(match[0])[0]);
      }
      replaceEls.push(document.createTextNode(text.substring(lastIndex)));
      $node.replaceWith($(replaceEls));
    }
    return $el;
  };

  Formatter.prototype.format = function($el) {
    var $node, blockNode, j, k, len, len1, n, node, ref, ref1;
    if ($el == null) {
      $el = this.editor.body;
    }
    if ($el.is(':empty')) {
      $el.append('<p>' + this.editor.util.phBr + '</p>');
      return $el;
    }
    ref = $el.contents();
    for (j = 0, len = ref.length; j < len; j++) {
      n = ref[j];
      this.cleanNode(n, true);
    }
    ref1 = $el.contents();
    for (k = 0, len1 = ref1.length; k < len1; k++) {
      node = ref1[k];
      $node = $(node);
      if ($node.is('br')) {
        if (typeof blockNode !== "undefined" && blockNode !== null) {
          blockNode = null;
        }
        $node.remove();
      } else if (this.editor.util.isBlockNode(node)) {
        if ($node.is('li')) {
          if (blockNode && blockNode.is('ul, ol')) {
            blockNode.append(node);
          } else {
            blockNode = $('<ul/>').insertBefore(node);
            blockNode.append(node);
          }
        } else {
          blockNode = null;
        }
      } else {
        if (!blockNode || blockNode.is('ul, ol')) {
          blockNode = $('<p/>').insertBefore(node);
        }
        blockNode.append(node);
      }
    }
    return $el;
  };

  Formatter.prototype.cleanNode = function(node, recursive) {
    var $childImg, $node, $p, $td, allowedAttributes, attr, contents, isDecoration, j, k, len, len1, n, ref, ref1, text, textNode;
    $node = $(node);
    if (!($node.length > 0)) {
      return;
    }
    if ($node[0].nodeType === 3) {
      text = $node.text().replace(/(\r\n|\n|\r)/gm, '');
      if (text) {
        textNode = document.createTextNode(text);
        $node.replaceWith(textNode);
      } else {
        $node.remove();
      }
      return;
    }
    contents = $node.contents();
    isDecoration = $node.is('[class^="simditor-"]');
    if ($node.is(this._allowedTags.join(',')) || isDecoration) {
      if ($node.is('a') && ($childImg = $node.find('img')).length > 0) {
        $node.replaceWith($childImg);
        $node = $childImg;
        contents = null;
      }
      if ($node.is('img') && $node.hasClass('uploading')) {
        $node.remove();
      }
      if (!isDecoration) {
        allowedAttributes = this._allowedAttributes[$node[0].tagName.toLowerCase()];
        ref = $.makeArray($node[0].attributes);
        for (j = 0, len = ref.length; j < len; j++) {
          attr = ref[j];
          if (!((allowedAttributes != null) && (ref1 = attr.name, indexOf.call(allowedAttributes, ref1) >= 0))) {
            $node.removeAttr(attr.name);
          }
        }
      }
    } else if ($node[0].nodeType === 1 && !$node.is(':empty')) {
      if ($node.is('div, article, dl, header, footer, tr')) {
        $node.append('<br/>');
        contents.first().unwrap();
      } else if ($node.is('table')) {
        $p = $('<p/>');
        $node.find('tr').each((function(_this) {
          return function(i, tr) {
            return $p.append($(tr).text() + '<br/>');
          };
        })(this));
        $node.replaceWith($p);
        contents = null;
      } else if ($node.is('thead, tfoot')) {
        $node.remove();
        contents = null;
      } else if ($node.is('th')) {
        $td = $('<td/>').append($node.contents());
        $node.replaceWith($td);
      } else {
        contents.first().unwrap();
      }
    } else {
      $node.remove();
      contents = null;
    }
    if (recursive && (contents != null) && !$node.is('pre')) {
      for (k = 0, len1 = contents.length; k < len1; k++) {
        n = contents[k];
        this.cleanNode(n, true);
      }
    }
    return null;
  };

  Formatter.prototype.clearHtml = function(html, lineBreak) {
    var container, contents, result;
    if (lineBreak == null) {
      lineBreak = true;
    }
    container = $('<div/>').append(html);
    contents = container.contents();
    result = '';
    contents.each((function(_this) {
      return function(i, node) {
        var $node, children;
        if (node.nodeType === 3) {
          return result += node.nodeValue;
        } else if (node.nodeType === 1) {
          $node = $(node);
          children = $node.contents();
          if (children.length > 0) {
            result += _this.clearHtml(children);
          }
          if (lineBreak && i < contents.length - 1 && $node.is('br, p, div, li, tr, pre, address, artticle, aside, dl, figcaption, footer, h1, h2, h3, h4, header')) {
            return result += '\n';
          }
        }
      };
    })(this));
    return result;
  };

  Formatter.prototype.beautify = function($contents) {
    var uselessP;
    uselessP = function($el) {
      return !!($el.is('p') && !$el.text() && $el.children(':not(br)').length < 1);
    };
    return $contents.each((function(_this) {
      return function(i, el) {
        var $el;
        $el = $(el);
        if ($el.is(':not(img, br, col, td, hr, [class^="simditor-"]):empty')) {
          $el.remove();
        }
        if (uselessP($el)) {
          $el.remove();
        }
        return $el.find(':not(img, br, col, td, hr, [class^="simditor-"]):empty').remove();
      };
    })(this));
  };

  return Formatter;

})(SimpleModule);

InputManager = (function(superClass) {
  extend(InputManager, superClass);

  function InputManager() {
    return InputManager.__super__.constructor.apply(this, arguments);
  }

  InputManager.pluginName = 'InputManager';

  InputManager.prototype.opts = {
    pasteImage: false
  };

  InputManager.prototype._modifierKeys = [16, 17, 18, 91, 93, 224];

  InputManager.prototype._arrowKeys = [37, 38, 39, 40];

  InputManager.prototype._init = function() {
    var submitKey;
    this.editor = this._module;
    this.throttledTrigger = this.editor.util.throttle((function(_this) {
      return function() {
        var args;
        args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
        return setTimeout(function() {
          var ref;
          return (ref = _this.editor).trigger.apply(ref, args);
        }, 10);
      };
    })(this), 300);
    if (this.opts.pasteImage && typeof this.opts.pasteImage !== 'string') {
      this.opts.pasteImage = 'inline';
    }
    this._keystrokeHandlers = {};
    this.hotkeys = simpleHotkeys({
      el: this.editor.body
    });
    this._pasteArea = $('<div/>').css({
      width: '1px',
      height: '1px',
      overflow: 'hidden',
      position: 'fixed',
      right: '0',
      bottom: '100px'
    }).attr({
      tabIndex: '-1',
      contentEditable: true
    }).addClass('simditor-paste-area').appendTo(this.editor.el);
    $(document).on('selectionchange.simditor' + this.editor.id, (function(_this) {
      return function(e) {
        if (!_this.focused) {
          return;
        }
        if (_this._selectionTimer) {
          clearTimeout(_this._selectionTimer);
          _this._selectionTimer = null;
        }
        return _this._selectionTimer = setTimeout(function() {
          return _this.editor.trigger('selectionchanged');
        }, 20);
      };
    })(this));
    this.editor.on('valuechanged', (function(_this) {
      return function() {
        if (!_this.editor.util.closestBlockEl() && _this.focused) {
          _this.editor.selection.save();
          _this.editor.formatter.format();
          _this.editor.selection.restore();
        }
        _this.editor.body.find('hr, pre, .simditor-table').each(function(i, el) {
          var $el, formatted;
          $el = $(el);
          if ($el.parent().is('blockquote') || $el.parent()[0] === _this.editor.body[0]) {
            formatted = false;
            if ($el.next().length === 0) {
              $('<p/>').append(_this.editor.util.phBr).insertAfter($el);
              formatted = true;
            }
            if ($el.prev().length === 0) {
              $('<p/>').append(_this.editor.util.phBr).insertBefore($el);
              formatted = true;
            }
            if (formatted) {
              return setTimeout(function() {
                return _this.editor.trigger('valuechanged');
              }, 10);
            }
          }
        });
        _this.editor.body.find('pre:empty').append(_this.editor.util.phBr);
        if (!_this.editor.util.support.onselectionchange && _this.focused) {
          return _this.editor.trigger('selectionchanged');
        }
      };
    })(this));
    this.editor.on('selectionchanged', (function(_this) {
      return function(e) {
        return _this.editor.undoManager.update();
      };
    })(this));
    this.editor.body.on('keydown', $.proxy(this._onKeyDown, this)).on('keypress', $.proxy(this._onKeyPress, this)).on('keyup', $.proxy(this._onKeyUp, this)).on('mouseup', $.proxy(this._onMouseUp, this)).on('focus', $.proxy(this._onFocus, this)).on('blur', $.proxy(this._onBlur, this)).on('paste', $.proxy(this._onPaste, this)).on('drop', $.proxy(this._onDrop, this)).on('input', $.proxy(this._onInput, this));
    if (this.editor.util.browser.firefox) {
      this.addShortcut('cmd+left', (function(_this) {
        return function(e) {
          e.preventDefault();
          _this.editor.selection.sel.modify('move', 'backward', 'lineboundary');
          return false;
        };
      })(this));
      this.addShortcut('cmd+right', (function(_this) {
        return function(e) {
          e.preventDefault();
          _this.editor.selection.sel.modify('move', 'forward', 'lineboundary');
          return false;
        };
      })(this));
      this.addShortcut('cmd+a', (function(_this) {
        return function(e) {
          var $children, firstBlock, lastBlock, range;
          $children = _this.editor.body.children();
          if (!($children.length > 0)) {
            return;
          }
          firstBlock = $children.first().get(0);
          lastBlock = $children.last().get(0);
          range = document.createRange();
          range.setStart(firstBlock, 0);
          range.setEnd(lastBlock, _this.editor.util.getNodeLength(lastBlock));
          _this.editor.selection.selectRange(range);
          return false;
        };
      })(this));
    }
    submitKey = this.editor.util.os.mac ? 'cmd+enter' : 'ctrl+enter';
    this.addShortcut(submitKey, (function(_this) {
      return function(e) {
        _this.editor.el.closest('form').find('button:submit').click();
        return false;
      };
    })(this));
    if (this.editor.textarea.attr('autofocus')) {
      return setTimeout((function(_this) {
        return function() {
          return _this.editor.focus();
        };
      })(this), 0);
    }
  };

  InputManager.prototype._onFocus = function(e) {
    this.editor.el.addClass('focus').removeClass('error');
    this.focused = true;
    this.lastCaretPosition = null;
    return setTimeout((function(_this) {
      return function() {
        _this.editor.triggerHandler('focus');
        return _this.editor.trigger('selectionchanged');
      };
    })(this), 0);
  };

  InputManager.prototype._onBlur = function(e) {
    var ref;
    this.editor.el.removeClass('focus');
    this.editor.sync();
    this.focused = false;
    this.lastCaretPosition = (ref = this.editor.undoManager.currentState()) != null ? ref.caret : void 0;
    return this.editor.triggerHandler('blur');
  };

  InputManager.prototype._onMouseUp = function(e) {
    if (!this.editor.util.support.onselectionchange) {
      return setTimeout((function(_this) {
        return function() {
          return _this.editor.trigger('selectionchanged');
        };
      })(this), 0);
    }
  };

  InputManager.prototype._onKeyDown = function(e) {
    var base, ref, ref1, result;
    if (this.editor.triggerHandler(e) === false) {
      return false;
    }
    if (this.hotkeys.respondTo(e)) {
      return;
    }
    if (e.which in this._keystrokeHandlers) {
      result = typeof (base = this._keystrokeHandlers[e.which])['*'] === "function" ? base['*'](e) : void 0;
      if (result) {
        this.editor.trigger('valuechanged');
        return false;
      }
      this.editor.util.traverseUp((function(_this) {
        return function(node) {
          var handler, ref;
          if (node.nodeType !== document.ELEMENT_NODE) {
            return;
          }
          handler = (ref = _this._keystrokeHandlers[e.which]) != null ? ref[node.tagName.toLowerCase()] : void 0;
          result = typeof handler === "function" ? handler(e, $(node)) : void 0;
          if (result === true || result === false) {
            return false;
          }
        };
      })(this));
      if (result) {
        this.editor.trigger('valuechanged');
        return false;
      }
    }
    if ((ref = e.which, indexOf.call(this._modifierKeys, ref) >= 0) || (ref1 = e.which, indexOf.call(this._arrowKeys, ref1) >= 0)) {
      return;
    }
    if (this.editor.util.metaKey(e) && e.which === 86) {
      return;
    }
    if (!this.editor.util.support.oninput) {
      this.throttledTrigger('valuechanged', ['typing']);
    }
    return null;
  };

  InputManager.prototype._onKeyPress = function(e) {
    if (this.editor.triggerHandler(e) === false) {
      return false;
    }
  };

  InputManager.prototype._onKeyUp = function(e) {
    var p, ref;
    if (this.editor.triggerHandler(e) === false) {
      return false;
    }
    if (!this.editor.util.support.onselectionchange && (ref = e.which, indexOf.call(this._arrowKeys, ref) >= 0)) {
      this.editor.trigger('selectionchanged');
      return;
    }
    if ((e.which === 8 || e.which === 46) && this.editor.util.isEmptyNode(this.editor.body)) {
      this.editor.body.empty();
      p = $('<p/>').append(this.editor.util.phBr).appendTo(this.editor.body);
      this.editor.selection.setRangeAtStartOf(p);
    }
  };

  InputManager.prototype._onPaste = function(e) {
    var $blockEl, cleanPaste, imageFile, pasteContent, pasteItem, processPasteContent, range, ref, uploadOpt;
    if (this.editor.triggerHandler(e) === false) {
      return false;
    }
    range = this.editor.selection.deleteRangeContents();
    if (!range.collapsed) {
      range.collapse(true);
    }
    $blockEl = this.editor.util.closestBlockEl();
    cleanPaste = $blockEl.is('pre, table');
    if (e.originalEvent.clipboardData && e.originalEvent.clipboardData.items && e.originalEvent.clipboardData.items.length > 0) {
      pasteItem = e.originalEvent.clipboardData.items[0];
      if (/^image\//.test(pasteItem.type) && !cleanPaste) {
        imageFile = pasteItem.getAsFile();
        if (!((imageFile != null) && this.opts.pasteImage)) {
          return;
        }
        if (!imageFile.name) {
          imageFile.name = "Clipboard Image.png";
        }
        uploadOpt = {};
        uploadOpt[this.opts.pasteImage] = true;
        if ((ref = this.editor.uploader) != null) {
          ref.upload(imageFile, uploadOpt);
        }
        return false;
      }
    }
    processPasteContent = (function(_this) {
      return function(pasteContent) {
        var $img, blob, children, insertPosition, j, k, l, lastLine, len, len1, len2, len3, len4, line, lines, m, node, o, ref1, ref2, ref3;
        if (_this.editor.triggerHandler('pasting', [pasteContent]) === false) {
          return;
        }
        if (!pasteContent) {
          return;
        } else if (cleanPaste) {
          if ($blockEl.is('table')) {
            lines = pasteContent.split('\n');
            lastLine = lines.pop();
            for (j = 0, len = lines.length; j < len; j++) {
              line = lines[j];
              _this.editor.selection.insertNode(document.createTextNode(line));
              _this.editor.selection.insertNode($('<br/>'));
            }
            _this.editor.selection.insertNode(document.createTextNode(lastLine));
          } else {
            pasteContent = $('<div/>').text(pasteContent);
            ref1 = pasteContent.contents();
            for (k = 0, len1 = ref1.length; k < len1; k++) {
              node = ref1[k];
              _this.editor.selection.insertNode($(node)[0], range);
            }
          }
        } else if ($blockEl.is(_this.editor.body)) {
          for (l = 0, len2 = pasteContent.length; l < len2; l++) {
            node = pasteContent[l];
            _this.editor.selection.insertNode(node, range);
          }
        } else if (pasteContent.length < 1) {
          return;
        } else if (pasteContent.length === 1) {
          if (pasteContent.is('p')) {
            children = pasteContent.contents();
            if (children.length === 1 && children.is('img')) {
              $img = children;
              if (/^data:image/.test($img.attr('src'))) {
                if (!_this.opts.pasteImage) {
                  return;
                }
                blob = _this.editor.util.dataURLtoBlob($img.attr("src"));
                blob.name = "Clipboard Image.png";
                uploadOpt = {};
                uploadOpt[_this.opts.pasteImage] = true;
                if ((ref2 = _this.editor.uploader) != null) {
                  ref2.upload(blob, uploadOpt);
                }
                return;
              } else if ($img.is('img[src^="webkit-fake-url://"]')) {
                return;
              }
            }
            for (m = 0, len3 = children.length; m < len3; m++) {
              node = children[m];
              _this.editor.selection.insertNode(node, range);
            }
          } else if ($blockEl.is('p') && _this.editor.util.isEmptyNode($blockEl)) {
            $blockEl.replaceWith(pasteContent);
            _this.editor.selection.setRangeAtEndOf(pasteContent, range);
          } else if (pasteContent.is('ul, ol')) {
            if (pasteContent.find('li').length === 1) {
              pasteContent = $('<div/>').text(pasteContent.text());
              ref3 = pasteContent.contents();
              for (o = 0, len4 = ref3.length; o < len4; o++) {
                node = ref3[o];
                _this.editor.selection.insertNode($(node)[0], range);
              }
            } else if ($blockEl.is('li')) {
              $blockEl.parent().after(pasteContent);
              _this.editor.selection.setRangeAtEndOf(pasteContent, range);
            } else {
              $blockEl.after(pasteContent);
              _this.editor.selection.setRangeAtEndOf(pasteContent, range);
            }
          } else {
            $blockEl.after(pasteContent);
            _this.editor.selection.setRangeAtEndOf(pasteContent, range);
          }
        } else {
          if ($blockEl.is('li')) {
            $blockEl = $blockEl.parent();
          }
          if (_this.editor.selection.rangeAtStartOf($blockEl, range)) {
            insertPosition = 'before';
          } else if (_this.editor.selection.rangeAtEndOf($blockEl, range)) {
            insertPosition = 'after';
          } else {
            _this.editor.selection.breakBlockEl($blockEl, range);
            insertPosition = 'before';
          }
          $blockEl[insertPosition](pasteContent);
          _this.editor.selection.setRangeAtEndOf(pasteContent.last(), range);
        }
        return _this.editor.trigger('valuechanged');
      };
    })(this);
    if (cleanPaste) {
      e.preventDefault();
      if (this.editor.util.browser.msie) {
        pasteContent = window.clipboardData.getData('Text');
      } else {
        pasteContent = e.originalEvent.clipboardData.getData('text/plain');
      }
      return processPasteContent(pasteContent);
    } else {
      this.editor.selection.save(range);
      this._pasteArea.focus();
      if (this.editor.util.browser.msie && this.editor.util.browser.version === 10) {
        e.preventDefault();
        this._pasteArea.html(window.clipboardData.getData('Text'));
      }
      return setTimeout((function(_this) {
        return function() {
          if (_this._pasteArea.is(':empty')) {
            pasteContent = null;
          } else {
            pasteContent = $('<div/>').append(_this._pasteArea.contents());
            pasteContent.find('table colgroup').remove();
            _this.editor.formatter.format(pasteContent);
            _this.editor.formatter.decorate(pasteContent);
            _this.editor.formatter.beautify(pasteContent.children());
            pasteContent = pasteContent.contents();
          }
          _this._pasteArea.empty();
          range = _this.editor.selection.restore();
          return processPasteContent(pasteContent);
        };
      })(this), 10);
    }
  };

  InputManager.prototype._onDrop = function(e) {
    if (this.editor.triggerHandler(e) === false) {
      return false;
    }
    return setTimeout((function(_this) {
      return function() {
        return _this.editor.trigger('valuechanged');
      };
    })(this), 0);
  };

  InputManager.prototype._onInput = function(e) {
    return this.throttledTrigger('valuechanged', ['oninput']);
  };

  InputManager.prototype.addKeystrokeHandler = function(key, node, handler) {
    if (!this._keystrokeHandlers[key]) {
      this._keystrokeHandlers[key] = {};
    }
    return this._keystrokeHandlers[key][node] = handler;
  };

  InputManager.prototype.addShortcut = function(keys, handler) {
    return this.hotkeys.add(keys, $.proxy(handler, this));
  };

  return InputManager;

})(SimpleModule);

Keystroke = (function(superClass) {
  extend(Keystroke, superClass);

  function Keystroke() {
    return Keystroke.__super__.constructor.apply(this, arguments);
  }

  Keystroke.pluginName = 'Keystroke';

  Keystroke.prototype._init = function() {
    var titleEnterHandler;
    this.editor = this._module;
    if (this.editor.util.browser.safari) {
      this.editor.inputManager.addKeystrokeHandler('13', '*', (function(_this) {
        return function(e) {
          var $blockEl, $br;
          if (!e.shiftKey) {
            return;
          }
          $blockEl = _this.editor.util.closestBlockEl();
          if ($blockEl.is('pre')) {
            return;
          }
          $br = $('<br/>');
          if (_this.editor.selection.rangeAtEndOf($blockEl)) {
            _this.editor.selection.insertNode($br);
            _this.editor.selection.insertNode($('<br/>'));
            _this.editor.selection.setRangeBefore($br);
          } else {
            _this.editor.selection.insertNode($br);
          }
          return true;
        };
      })(this));
    }
    if (this.editor.util.browser.webkit || this.editor.util.browser.msie) {
      titleEnterHandler = (function(_this) {
        return function(e, $node) {
          var $p;
          if (!_this.editor.selection.rangeAtEndOf($node)) {
            return;
          }
          $p = $('<p/>').append(_this.editor.util.phBr).insertAfter($node);
          _this.editor.selection.setRangeAtStartOf($p);
          return true;
        };
      })(this);
      this.editor.inputManager.addKeystrokeHandler('13', 'h1', titleEnterHandler);
      this.editor.inputManager.addKeystrokeHandler('13', 'h2', titleEnterHandler);
      this.editor.inputManager.addKeystrokeHandler('13', 'h3', titleEnterHandler);
      this.editor.inputManager.addKeystrokeHandler('13', 'h4', titleEnterHandler);
      this.editor.inputManager.addKeystrokeHandler('13', 'h5', titleEnterHandler);
      this.editor.inputManager.addKeystrokeHandler('13', 'h6', titleEnterHandler);
    }
    this.editor.inputManager.addKeystrokeHandler('8', '*', (function(_this) {
      return function(e) {
        var $blockEl, $prevBlockEl, $rootBlock;
        $rootBlock = _this.editor.util.furthestBlockEl();
        $prevBlockEl = $rootBlock.prev();
        if ($prevBlockEl.is('hr') && _this.editor.selection.rangeAtStartOf($rootBlock)) {
          _this.editor.selection.save();
          $prevBlockEl.remove();
          _this.editor.selection.restore();
          return true;
        }
        $blockEl = _this.editor.util.closestBlockEl();
        if (_this.editor.util.browser.webkit && _this.editor.selection.rangeAtStartOf($blockEl)) {
          _this.editor.selection.save();
          _this.editor.formatter.cleanNode($blockEl, true);
          _this.editor.selection.restore();
          return null;
        }
      };
    })(this));
    this.editor.inputManager.addKeystrokeHandler('13', 'li', (function(_this) {
      return function(e, $node) {
        var $cloneNode, listEl, newBlockEl, newListEl;
        $cloneNode = $node.clone();
        $cloneNode.find('ul, ol').remove();
        if (!(_this.editor.util.isEmptyNode($cloneNode) && $node.is(_this.editor.util.closestBlockEl()))) {
          return;
        }
        listEl = $node.parent();
        if ($node.next('li').length > 0) {
          if (!_this.editor.util.isEmptyNode($node)) {
            return;
          }
          if (listEl.parent('li').length > 0) {
            newBlockEl = $('<li/>').append(_this.editor.util.phBr).insertAfter(listEl.parent('li'));
            newListEl = $('<' + listEl[0].tagName + '/>').append($node.nextAll('li'));
            newBlockEl.append(newListEl);
          } else {
            newBlockEl = $('<p/>').append(_this.editor.util.phBr).insertAfter(listEl);
            newListEl = $('<' + listEl[0].tagName + '/>').append($node.nextAll('li'));
            newBlockEl.after(newListEl);
          }
        } else {
          if (listEl.parent('li').length > 0) {
            newBlockEl = $('<li/>').insertAfter(listEl.parent('li'));
            if ($node.contents().length > 0) {
              newBlockEl.append($node.contents());
            } else {
              newBlockEl.append(_this.editor.util.phBr);
            }
          } else {
            newBlockEl = $('<p/>').append(_this.editor.util.phBr).insertAfter(listEl);
            if ($node.children('ul, ol').length > 0) {
              newBlockEl.after($node.children('ul, ol'));
            }
          }
        }
        if ($node.prev('li').length) {
          $node.remove();
        } else {
          listEl.remove();
        }
        _this.editor.selection.setRangeAtStartOf(newBlockEl);
        return true;
      };
    })(this));
    this.editor.inputManager.addKeystrokeHandler('13', 'pre', (function(_this) {
      return function(e, $node) {
        var $p, breakNode, range;
        e.preventDefault();
        if (e.shiftKey) {
          $p = $('<p/>').append(_this.editor.util.phBr).insertAfter($node);
          _this.editor.selection.setRangeAtStartOf($p);
          return true;
        }
        range = _this.editor.selection.getRange();
        breakNode = null;
        range.deleteContents();
        if (!_this.editor.util.browser.msie && _this.editor.selection.rangeAtEndOf($node)) {
          breakNode = document.createTextNode('\n\n');
          range.insertNode(breakNode);
          range.setEnd(breakNode, 1);
        } else {
          breakNode = document.createTextNode('\n');
          range.insertNode(breakNode);
          range.setStartAfter(breakNode);
        }
        range.collapse(false);
        _this.editor.selection.selectRange(range);
        return true;
      };
    })(this));
    this.editor.inputManager.addKeystrokeHandler('13', 'blockquote', (function(_this) {
      return function(e, $node) {
        var $closestBlock, range;
        $closestBlock = _this.editor.util.closestBlockEl();
        if (!($closestBlock.is('p') && !$closestBlock.next().length && _this.editor.util.isEmptyNode($closestBlock))) {
          return;
        }
        $node.after($closestBlock);
        range = document.createRange();
        _this.editor.selection.setRangeAtStartOf($closestBlock, range);
        return true;
      };
    })(this));
    this.editor.inputManager.addKeystrokeHandler('8', 'li', (function(_this) {
      return function(e, $node) {
        var $br, $childList, $newLi, $prevChildList, $prevNode, $textNode, range, text;
        $childList = $node.children('ul, ol');
        $prevNode = $node.prev('li');
        if (!($childList.length > 0 && $prevNode.length > 0)) {
          return false;
        }
        text = '';
        $textNode = null;
        $node.contents().each(function(i, n) {
          if (n.nodeType === 1 && /UL|OL/.test(n.nodeName)) {
            return false;
          }
          if (n.nodeType === 1 && /BR/.test(n.nodeName)) {
            return;
          }
          if (n.nodeType === 3 && n.nodeValue) {
            text += n.nodeValue;
          } else if (n.nodeType === 1) {
            text += $(n).text();
          }
          return $textNode = $(n);
        });
        if ($textNode && text.length === 1 && _this.editor.util.browser.firefox && !$textNode.next('br').length) {
          $br = $(_this.editor.util.phBr).insertAfter($textNode);
          $textNode.remove();
          _this.editor.selection.setRangeBefore($br);
          return true;
        } else if (text.length > 0) {
          return false;
        }
        range = document.createRange();
        $prevChildList = $prevNode.children('ul, ol');
        if ($prevChildList.length > 0) {
          $newLi = $('<li/>').append(_this.editor.util.phBr).appendTo($prevChildList);
          $prevChildList.append($childList.children('li'));
          $node.remove();
          _this.editor.selection.setRangeAtEndOf($newLi, range);
        } else {
          _this.editor.selection.setRangeAtEndOf($prevNode, range);
          $prevNode.append($childList);
          $node.remove();
          _this.editor.selection.selectRange(range);
        }
        return true;
      };
    })(this));
    this.editor.inputManager.addKeystrokeHandler('8', 'pre', (function(_this) {
      return function(e, $node) {
        var $newNode, codeStr, range;
        if (!_this.editor.selection.rangeAtStartOf($node)) {
          return;
        }
        codeStr = $node.html().replace('\n', '<br/>');
        $newNode = $('<p/>').append(codeStr || _this.editor.util.phBr).insertAfter($node);
        $node.remove();
        range = document.createRange();
        _this.editor.selection.setRangeAtStartOf($newNode, range);
        return true;
      };
    })(this));
    return this.editor.inputManager.addKeystrokeHandler('8', 'blockquote', (function(_this) {
      return function(e, $node) {
        var $firstChild, range;
        if (!_this.editor.selection.rangeAtStartOf($node)) {
          return;
        }
        $firstChild = $node.children().first().unwrap();
        range = document.createRange();
        _this.editor.selection.setRangeAtStartOf($firstChild, range);
        return true;
      };
    })(this));
  };

  return Keystroke;

})(SimpleModule);

UndoManager = (function(superClass) {
  extend(UndoManager, superClass);

  function UndoManager() {
    return UndoManager.__super__.constructor.apply(this, arguments);
  }

  UndoManager.pluginName = 'UndoManager';

  UndoManager.prototype._index = -1;

  UndoManager.prototype._capacity = 50;

  UndoManager.prototype._timer = null;

  UndoManager.prototype._init = function() {
    var redoShortcut, undoShortcut;
    this.editor = this._module;
    this._stack = [];
    if (this.editor.util.os.mac) {
      undoShortcut = 'cmd+z';
      redoShortcut = 'shift+cmd+z';
    } else if (this.editor.util.os.win) {
      undoShortcut = 'ctrl+z';
      redoShortcut = 'ctrl+y';
    } else {
      undoShortcut = 'ctrl+z';
      redoShortcut = 'shift+ctrl+z';
    }
    this.editor.inputManager.addShortcut(undoShortcut, (function(_this) {
      return function(e) {
        e.preventDefault();
        _this.undo();
        return false;
      };
    })(this));
    this.editor.inputManager.addShortcut(redoShortcut, (function(_this) {
      return function(e) {
        e.preventDefault();
        _this.redo();
        return false;
      };
    })(this));
    return this.editor.on('valuechanged', (function(_this) {
      return function(e, src) {
        if (src === 'undo' || src === 'redo') {
          return;
        }
        if (_this._timer) {
          clearTimeout(_this._timer);
          _this._timer = null;
        }
        return _this._timer = setTimeout(function() {
          _this._pushUndoState();
          return _this._timer = null;
        }, 200);
      };
    })(this));
  };

  UndoManager.prototype._pushUndoState = function() {
    var currentState, html;
    if (this.editor.triggerHandler('pushundostate') === false) {
      return;
    }
    currentState = this.currentState();
    html = this.editor.body.html();
    if (currentState && currentState.html === html) {
      return;
    }
    this._index += 1;
    this._stack.length = this._index;
    this._stack.push({
      html: html,
      caret: this.caretPosition()
    });
    if (this._stack.length > this._capacity) {
      this._stack.shift();
      return this._index -= 1;
    }
  };

  UndoManager.prototype.currentState = function() {
    if (this._stack.length && this._index > -1) {
      return this._stack[this._index];
    } else {
      return null;
    }
  };

  UndoManager.prototype.undo = function() {
    var state;
    if (this._index < 1 || this._stack.length < 2) {
      return;
    }
    this.editor.hidePopover();
    this._index -= 1;
    state = this._stack[this._index];
    this.editor.body.html(state.html);
    this.caretPosition(state.caret);
    this.editor.body.find('.selected').removeClass('selected');
    this.editor.sync();
    return this.editor.trigger('valuechanged', ['undo']);
  };

  UndoManager.prototype.redo = function() {
    var state;
    if (this._index < 0 || this._stack.length < this._index + 2) {
      return;
    }
    this.editor.hidePopover();
    this._index += 1;
    state = this._stack[this._index];
    this.editor.body.html(state.html);
    this.caretPosition(state.caret);
    this.editor.body.find('.selected').removeClass('selected');
    this.editor.sync();
    return this.editor.trigger('valuechanged', ['redo']);
  };

  UndoManager.prototype.update = function() {
    var currentState, html;
    if (this._timer) {
      return;
    }
    currentState = this.currentState();
    if (!currentState) {
      return;
    }
    html = this.editor.body.html();
    currentState.html = html;
    return currentState.caret = this.caretPosition();
  };

  UndoManager.prototype._getNodeOffset = function(node, index) {
    var $parent, merging, offset;
    if (index) {
      $parent = $(node);
    } else {
      $parent = $(node).parent();
    }
    offset = 0;
    merging = false;
    $parent.contents().each((function(_this) {
      return function(i, child) {
        if (index === i || node === child) {
          return false;
        }
        if (child.nodeType === 3) {
          if (!merging) {
            offset += 1;
            merging = true;
          }
        } else {
          offset += 1;
          merging = false;
        }
        return null;
      };
    })(this));
    return offset;
  };

  UndoManager.prototype._getNodePosition = function(node, offset) {
    var position, prevNode;
    if (node.nodeType === 3) {
      prevNode = node.previousSibling;
      while (prevNode && prevNode.nodeType === 3) {
        node = prevNode;
        offset += this.editor.util.getNodeLength(prevNode);
        prevNode = prevNode.previousSibling;
      }
    } else {
      offset = this._getNodeOffset(node, offset);
    }
    position = [];
    position.unshift(offset);
    this.editor.util.traverseUp((function(_this) {
      return function(n) {
        return position.unshift(_this._getNodeOffset(n));
      };
    })(this), node);
    return position;
  };

  UndoManager.prototype._getNodeByPosition = function(position) {
    var child, childNodes, i, j, len, node, offset, ref;
    node = this.editor.body[0];
    ref = position.slice(0, position.length - 1);
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      offset = ref[i];
      childNodes = node.childNodes;
      if (offset > childNodes.length - 1) {
        if (i === position.length - 2 && $(node).is('pre')) {
          child = document.createTextNode('');
          node.appendChild(child);
          childNodes = node.childNodes;
        } else {
          node = null;
          break;
        }
      }
      node = childNodes[offset];
    }
    return node;
  };

  UndoManager.prototype.caretPosition = function(caret) {
    var endContainer, endOffset, range, startContainer, startOffset;
    if (!caret) {
      range = this.editor.selection.getRange();
      if (!(this.editor.inputManager.focused && (range != null))) {
        return {};
      }
      caret = {
        start: [],
        end: null,
        collapsed: true
      };
      caret.start = this._getNodePosition(range.startContainer, range.startOffset);
      if (!range.collapsed) {
        caret.end = this._getNodePosition(range.endContainer, range.endOffset);
        caret.collapsed = false;
      }
      return caret;
    } else {
      if (!this.editor.inputManager.focused) {
        this.editor.body.focus();
      }
      if (!caret.start) {
        this.editor.body.blur();
        return;
      }
      startContainer = this._getNodeByPosition(caret.start);
      startOffset = caret.start[caret.start.length - 1];
      if (caret.collapsed) {
        endContainer = startContainer;
        endOffset = startOffset;
      } else {
        endContainer = this._getNodeByPosition(caret.end);
        endOffset = caret.start[caret.start.length - 1];
      }
      if (!startContainer || !endContainer) {
        throw new Error('simditor: invalid caret state');
        return;
      }
      range = document.createRange();
      range.setStart(startContainer, startOffset);
      range.setEnd(endContainer, endOffset);
      return this.editor.selection.selectRange(range);
    }
  };

  return UndoManager;

})(SimpleModule);

Util = (function(superClass) {
  extend(Util, superClass);

  function Util() {
    return Util.__super__.constructor.apply(this, arguments);
  }

  Util.pluginName = 'Util';

  Util.prototype._init = function() {
    this.editor = this._module;
    if (this.browser.msie && this.browser.version < 11) {
      return this.phBr = '';
    }
  };

  Util.prototype.phBr = '<br/>';

  Util.prototype.os = (function() {
    var os;
    os = {};
    if (/Mac/.test(navigator.appVersion)) {
      os.mac = true;
    } else if (/Linux/.test(navigator.appVersion)) {
      os.linux = true;
    } else if (/Win/.test(navigator.appVersion)) {
      os.win = true;
    } else if (/X11/.test(navigator.appVersion)) {
      os.unix = true;
    }
    if (/Mobi/.test(navigator.appVersion)) {
      os.mobile = true;
    }
    return os;
  })();

  Util.prototype.browser = (function() {
    var chrome, firefox, ie, ref, ref1, ref2, ref3, safari, ua;
    ua = navigator.userAgent;
    ie = /(msie|trident)/i.test(ua);
    chrome = /chrome|crios/i.test(ua);
    safari = /safari/i.test(ua) && !chrome;
    firefox = /firefox/i.test(ua);
    if (ie) {
      return {
        msie: true,
        version: ((ref = ua.match(/(msie |rv:)(\d+(\.\d+)?)/i)) != null ? ref[2] : void 0) * 1
      };
    } else if (chrome) {
      return {
        webkit: true,
        chrome: true,
        version: ((ref1 = ua.match(/(?:chrome|crios)\/(\d+(\.\d+)?)/i)) != null ? ref1[1] : void 0) * 1
      };
    } else if (safari) {
      return {
        webkit: true,
        safari: true,
        version: ((ref2 = ua.match(/version\/(\d+(\.\d+)?)/i)) != null ? ref2[1] : void 0) * 1
      };
    } else if (firefox) {
      return {
        mozilla: true,
        firefox: true,
        version: ((ref3 = ua.match(/firefox\/(\d+(\.\d+)?)/i)) != null ? ref3[1] : void 0) * 1
      };
    } else {
      return {};
    }
  })();

  Util.prototype.support = (function() {
    return {
      onselectionchange: (function() {
        var e, onselectionchange;
        onselectionchange = document.onselectionchange;
        if (onselectionchange !== void 0) {
          try {
            document.onselectionchange = 0;
            return document.onselectionchange === null;
          } catch (_error) {
            e = _error;
          } finally {
            document.onselectionchange = onselectionchange;
          }
        }
        return false;
      })(),
      oninput: (function() {
        return !/(msie|trident)/i.test(navigator.userAgent);
      })()
    };
  })();

  Util.prototype.reflow = function(el) {
    if (el == null) {
      el = document;
    }
    return $(el)[0].offsetHeight;
  };

  Util.prototype.metaKey = function(e) {
    var isMac;
    isMac = /Mac/.test(navigator.userAgent);
    if (isMac) {
      return e.metaKey;
    } else {
      return e.ctrlKey;
    }
  };

  Util.prototype.isEmptyNode = function(node) {
    var $node;
    $node = $(node);
    return $node.is(':empty') || (!$node.text() && !$node.find(':not(br, span, div)').length);
  };

  Util.prototype.blockNodes = ["div", "p", "ul", "ol", "li", "blockquote", "hr", "pre", "h1", "h2", "h3", "h4", "table"];

  Util.prototype.isBlockNode = function(node) {
    node = $(node)[0];
    if (!node || node.nodeType === 3) {
      return false;
    }
    return new RegExp("^(" + (this.blockNodes.join('|')) + ")$").test(node.nodeName.toLowerCase());
  };

  Util.prototype.closestBlockEl = function(node) {
    var $node, blockEl, range;
    if (node == null) {
      range = this.editor.selection.getRange();
      node = range != null ? range.commonAncestorContainer : void 0;
    }
    $node = $(node);
    if (!$node.length) {
      return null;
    }
    blockEl = $node.parentsUntil(this.editor.body).addBack();
    blockEl = blockEl.filter((function(_this) {
      return function(i) {
        return _this.isBlockNode(blockEl.eq(i));
      };
    })(this));
    if (blockEl.length) {
      return blockEl.last();
    } else {
      return null;
    }
  };

  Util.prototype.furthestNode = function(node, filter) {
    var $node, blockEl, range;
    if (node == null) {
      range = this.editor.selection.getRange();
      node = range != null ? range.commonAncestorContainer : void 0;
    }
    $node = $(node);
    if (!$node.length) {
      return null;
    }
    blockEl = $node.parentsUntil(this.editor.body).addBack();
    blockEl = blockEl.filter((function(_this) {
      return function(i) {
        var $n;
        $n = blockEl.eq(i);
        if ($.isFunction(filter)) {
          return filter($n);
        } else {
          return $n.is(filter);
        }
      };
    })(this));
    if (blockEl.length) {
      return blockEl.first();
    } else {
      return null;
    }
  };

  Util.prototype.furthestBlockEl = function(node) {
    return this.furthestNode(node, $.proxy(this.isBlockNode, this));
  };

  Util.prototype.getNodeLength = function(node) {
    switch (node.nodeType) {
      case 7:
      case 10:
        return 0;
      case 3:
      case 8:
        return node.length;
      default:
        return node.childNodes.length;
    }
  };

  Util.prototype.traverseUp = function(callback, node) {
    var j, len, n, nodes, range, result, results1;
    if (node == null) {
      range = this.editor.selection.getRange();
      node = range != null ? range.commonAncestorContainer : void 0;
    }
    if ((node == null) || !$.contains(this.editor.body[0], node)) {
      return false;
    }
    nodes = $(node).parentsUntil(this.editor.body).get();
    nodes.unshift(node);
    results1 = [];
    for (j = 0, len = nodes.length; j < len; j++) {
      n = nodes[j];
      result = callback(n);
      if (result === false) {
        break;
      } else {
        results1.push(void 0);
      }
    }
    return results1;
  };

  Util.prototype.dataURLtoBlob = function(dataURL) {
    var BlobBuilder, arrayBuffer, bb, byteString, hasArrayBufferViewSupport, hasBlobConstructor, i, intArray, j, mimeString, ref;
    hasBlobConstructor = window.Blob && (function() {
      var e;
      try {
        return Boolean(new Blob());
      } catch (_error) {
        e = _error;
        return false;
      }
    })();
    hasArrayBufferViewSupport = hasBlobConstructor && window.Uint8Array && (function() {
      var e;
      try {
        return new Blob([new Uint8Array(100)]).size === 100;
      } catch (_error) {
        e = _error;
        return false;
      }
    })();
    BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
    if (!((hasBlobConstructor || BlobBuilder) && window.atob && window.ArrayBuffer && window.Uint8Array)) {
      return false;
    }
    if (dataURL.split(',')[0].indexOf('base64') >= 0) {
      byteString = atob(dataURL.split(',')[1]);
    } else {
      byteString = decodeURIComponent(dataURL.split(',')[1]);
    }
    arrayBuffer = new ArrayBuffer(byteString.length);
    intArray = new Uint8Array(arrayBuffer);
    for (i = j = 0, ref = byteString.length; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
      intArray[i] = byteString.charCodeAt(i);
    }
    mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];
    if (hasBlobConstructor) {
      return new Blob([hasArrayBufferViewSupport ? intArray : arrayBuffer], {
        type: mimeString
      });
    }
    bb = new BlobBuilder();
    bb.append(arrayBuffer);
    return bb.getBlob(mimeString);
  };

  Util.prototype.throttle = function(func, wait) {
    var delayedCallTimeout, previousCallTime, stopDelayedCall;
    delayedCallTimeout = null;
    previousCallTime = 0;
    stopDelayedCall = function() {
      if (delayedCallTimeout) {
        clearTimeout(delayedCallTimeout);
        return delayedCallTimeout = null;
      }
    };
    return function() {
      var args, now, remaining, result;
      now = Date.now();
      previousCallTime || (previousCallTime = now);
      remaining = wait - (now - previousCallTime);
      result = null;
      if ((0 < remaining && remaining < wait)) {
        previousCallTime = now;
        stopDelayedCall();
        args = arguments;
        delayedCallTimeout = setTimeout(function() {
          previousCallTime = 0;
          delayedCallTimeout = null;
          return result = func.apply(null, args);
        }, wait);
      } else {
        stopDelayedCall();
        if (previousCallTime !== now) {
          previousCallTime = 0;
        }
        result = func.apply(null, arguments);
      }
      return result;
    };
  };

  Util.prototype.formatHTML = function(html) {
    var cursor, indentString, lastMatch, level, match, re, repeatString, result, str;
    re = /<(\/?)(.+?)(\/?)>/g;
    result = '';
    level = 0;
    lastMatch = null;
    indentString = '  ';
    repeatString = function(str, n) {
      return new Array(n + 1).join(str);
    };
    while ((match = re.exec(html)) !== null) {
      match.isBlockNode = $.inArray(match[2], this.blockNodes) > -1;
      match.isStartTag = match[1] !== '/' && match[3] !== '/';
      match.isEndTag = match[1] === '/' || match[3] === '/';
      cursor = lastMatch ? lastMatch.index + lastMatch[0].length : 0;
      if ((str = html.substring(cursor, match.index)).length > 0 && $.trim(str)) {
        result += str;
      }
      if (match.isBlockNode && match.isEndTag && !match.isStartTag) {
        level -= 1;
      }
      if (match.isBlockNode && match.isStartTag) {
        if (!(lastMatch && lastMatch.isBlockNode && lastMatch.isEndTag)) {
          result += '\n';
        }
        result += repeatString(indentString, level);
      }
      result += match[0];
      if (match.isBlockNode && match.isEndTag) {
        result += '\n';
      }
      if (match.isBlockNode && match.isStartTag) {
        level += 1;
      }
      lastMatch = match;
    }
    return $.trim(result);
  };

  return Util;

})(SimpleModule);

Toolbar = (function(superClass) {
  extend(Toolbar, superClass);

  function Toolbar() {
    return Toolbar.__super__.constructor.apply(this, arguments);
  }

  Toolbar.pluginName = 'Toolbar';

  Toolbar.prototype.opts = {
    toolbar: true,
    toolbarFloat: true,
    toolbarHidden: false,
    toolbarFloatOffset: 0
  };

  Toolbar.prototype._tpl = {
    wrapper: '<div class="simditor-toolbar"><ul></ul></div>',
    separator: '<li><span class="separator"></span></li>'
  };

  Toolbar.prototype._init = function() {
    var toolbarHeight;
    this.editor = this._module;
    if (!this.opts.toolbar) {
      return;
    }
    if (!$.isArray(this.opts.toolbar)) {
      this.opts.toolbar = ['bold', 'italic', 'underline', 'strikethrough', '|', 'ol', 'ul', 'blockquote', 'code', '|', 'link', 'image', '|', 'indent', 'outdent'];
    }
    this._render();
    this.list.on('click', (function(_this) {
      return function(e) {
        return false;
      };
    })(this));
    this.wrapper.on('mousedown', (function(_this) {
      return function(e) {
        return _this.list.find('.menu-on').removeClass('.menu-on');
      };
    })(this));
    $(document).on('mousedown.simditor' + this.editor.id, (function(_this) {
      return function(e) {
        return _this.list.find('.menu-on').removeClass('.menu-on');
      };
    })(this));
    if (!this.opts.toolbarHidden && this.opts.toolbarFloat) {
      this.wrapper.width(this.wrapper.outerWidth());
      this.wrapper.css('top', this.opts.toolbarFloatOffset);
      toolbarHeight = this.wrapper.outerHeight();
      if (!this.editor.util.os.mobile) {
        $(window).on('resize.simditor-' + this.editor.id, (function(_this) {
          return function(e) {
            _this.wrapper.css('position', 'static');
            _this.editor.util.reflow(_this.wrapper);
            _this.wrapper.css('left', _this.wrapper.offset().left);
            return _this.wrapper.css('position', '');
          };
        })(this)).resize();
      }
      $(window).on('scroll.simditor-' + this.editor.id, (function(_this) {
        return function(e) {
          var bottomEdge, scrollTop, topEdge;
          topEdge = _this.editor.wrapper.offset().top;
          bottomEdge = topEdge + _this.editor.wrapper.outerHeight() - 80;
          scrollTop = $(document).scrollTop() + _this.opts.toolbarFloatOffset;
          if (scrollTop <= topEdge || scrollTop >= bottomEdge) {
            _this.editor.wrapper.removeClass('toolbar-floating').css('padding-top', '');
            if (_this.editor.util.os.mobile) {
              return _this.wrapper.css('top', _this.opts.toolbarFloatOffset);
            }
          } else {
            _this.editor.wrapper.addClass('toolbar-floating').css('padding-top', toolbarHeight);
            if (_this.editor.util.os.mobile) {
              return _this.wrapper.css('top', scrollTop - topEdge + _this.opts.toolbarFloatOffset);
            }
          }
        };
      })(this));
    }
    this.editor.on('selectionchanged', (function(_this) {
      return function() {
        return _this.toolbarStatus();
      };
    })(this));
    this.editor.on('destroy', (function(_this) {
      return function() {
        return _this.buttons.length = 0;
      };
    })(this));
    return $(document).on('mousedown.simditor-' + this.editor.id, (function(_this) {
      return function(e) {
        return _this.list.find('li.menu-on').removeClass('menu-on');
      };
    })(this));
  };

  Toolbar.prototype._render = function() {
    var j, len, name, ref;
    this.buttons = [];
    this.wrapper = $(this._tpl.wrapper).prependTo(this.editor.wrapper);
    this.list = this.wrapper.find('ul');
    ref = this.opts.toolbar;
    for (j = 0, len = ref.length; j < len; j++) {
      name = ref[j];
      if (name === '|') {
        $(this._tpl.separator).appendTo(this.list);
        continue;
      }
      if (!this.constructor.buttons[name]) {
        throw new Error('simditor: invalid toolbar button "' + name + '"');
        continue;
      }
      this.buttons.push(new this.constructor.buttons[name]({
        editor: this.editor
      }));
    }
    if (this.opts.toolbarHidden) {
      return this.wrapper.hide();
    } else {
      return this.editor.placeholderEl.css('top', this.wrapper.outerHeight());
    }
  };

  Toolbar.prototype.toolbarStatus = function(name) {
    var buttons;
    if (!this.editor.inputManager.focused) {
      return;
    }
    buttons = this.buttons.slice(0);
    return this.editor.util.traverseUp((function(_this) {
      return function(node) {
        var button, i, j, k, len, len1, removeButtons;
        removeButtons = [];
        for (i = j = 0, len = buttons.length; j < len; i = ++j) {
          button = buttons[i];
          if ((name != null) && button.name !== name) {
            continue;
          }
          if (!button.status || button.status($(node)) === true) {
            removeButtons.push(button);
          }
        }
        for (k = 0, len1 = removeButtons.length; k < len1; k++) {
          button = removeButtons[k];
          i = $.inArray(button, buttons);
          buttons.splice(i, 1);
        }
        if (buttons.length === 0) {
          return false;
        }
      };
    })(this));
  };

  Toolbar.prototype.findButton = function(name) {
    var button;
    button = this.list.find('.toolbar-item-' + name).data('button');
    return button != null ? button : null;
  };

  Toolbar.addButton = function(btn) {
    return this.buttons[btn.prototype.name] = btn;
  };

  Toolbar.buttons = {};

  return Toolbar;

})(SimpleModule);

Indentation = (function(superClass) {
  extend(Indentation, superClass);

  function Indentation() {
    return Indentation.__super__.constructor.apply(this, arguments);
  }

  Indentation.pluginName = 'Indentation';

  Indentation.prototype.opts = {
    tabIndent: true
  };

  Indentation.prototype._init = function() {
    this.editor = this._module;
    return this.editor.inputManager.addKeystrokeHandler('9', '*', (function(_this) {
      return function(e) {
        var codeButton;
        codeButton = _this.editor.toolbar.findButton('code');
        if (!(_this.opts.tabIndent || (codeButton && codeButton.active))) {
          return;
        }
        return _this.indent(e.shiftKey);
      };
    })(this));
  };

  Indentation.prototype.indent = function(isBackward) {
    var $blockEls, $endBlock, $startBlock, range, result;
    range = this.editor.selection.getRange();
    if (!range) {
      return;
    }
    $startBlock = this.editor.util.closestBlockEl(range.startContainer);
    $endBlock = this.editor.util.closestBlockEl(range.endContainer);
    if (!($startBlock.is('li') && $endBlock.is('li') && $startBlock.parent().is($endBlock.parent()))) {
      $startBlock = this.editor.util.furthestBlockEl($startBlock);
      $endBlock = this.editor.util.furthestBlockEl($endBlock);
    }
    if ($startBlock.is($endBlock)) {
      $blockEls = $startBlock;
    } else {
      $blockEls = $startBlock.nextUntil($endBlock).add($startBlock).add($endBlock);
    }
    result = false;
    $blockEls.each((function(_this) {
      return function(i, blockEl) {
        return result = isBackward ? _this.outdentBlock(blockEl) : _this.indentBlock(blockEl);
      };
    })(this));
    return result;
  };

  Indentation.prototype.indentBlock = function(blockEl) {
    var $blockEl, $childList, $nextTd, $parentLi, $pre, $td, indentLevel, range, tagName;
    $blockEl = $(blockEl);
    if (!$blockEl.length) {
      return;
    }
    if ($blockEl.is('pre')) {
      range = this.editor.selection.getRange();
      $pre = $(range.commonAncestorContainer);
      if (!($pre.is($blockEl) || $pre.closest('pre').is($blockEl))) {
        return;
      }
      this.indentText(range);
    } else if ($blockEl.is('li')) {
      $parentLi = $blockEl.prev('li');
      if ($parentLi.length < 1) {
        return;
      }
      this.editor.selection.save();
      tagName = $blockEl.parent()[0].tagName;
      $childList = $parentLi.children('ul, ol');
      if ($childList.length > 0) {
        $childList.append($blockEl);
      } else {
        $('<' + tagName + '/>').append($blockEl).appendTo($parentLi);
      }
      this.editor.selection.restore();
    } else if ($blockEl.is('p, h1, h2, h3, h4')) {
      indentLevel = $blockEl.attr('data-indent') || 0;
      indentLevel = Math.min(indentLevel * 1 + 1, 10);
      $blockEl.attr('data-indent', indentLevel);
    } else if ($blockEl.is('table') || $blockEl.is('.simditor-table')) {
      range = this.editor.selection.getRange();
      $td = $(range.commonAncestorContainer).closest('td');
      $nextTd = $td.next('td');
      if (!($nextTd.length > 0)) {
        $nextTd = $td.parent('tr').next('tr').find('td:first');
      }
      if (!($td.length > 0 && $nextTd.length > 0)) {
        return false;
      }
      this.editor.selection.setRangeAtEndOf($nextTd);
    }
    return true;
  };

  Indentation.prototype.indentText = function(range) {
    var text, textNode;
    text = range.toString().replace(/^(?=.+)/mg, '\u00A0\u00A0');
    textNode = document.createTextNode(text || '\u00A0\u00A0');
    range.deleteContents();
    range.insertNode(textNode);
    if (text) {
      range.selectNode(textNode);
      return this.editor.selection.selectRange(range);
    } else {
      return this.editor.selection.setRangeAfter(textNode);
    }
  };

  Indentation.prototype.outdentBlock = function(blockEl) {
    var $blockEl, $parent, $parentLi, $pre, $prevTd, $td, button, indentLevel, range, ref;
    $blockEl = $(blockEl);
    if (!($blockEl && $blockEl.length > 0)) {
      return;
    }
    if ($blockEl.is('pre')) {
      range = this.editor.selection.getRange();
      $pre = $(range.commonAncestorContainer);
      if (!($pre.is($blockEl) || $pre.closest('pre').is($blockEl))) {
        return;
      }
      this.outdentText(range);
    } else if ($blockEl.is('li')) {
      $parent = $blockEl.parent();
      $parentLi = $parent.parent('li');
      if ($parentLi.length < 1) {
        button = this.editor.toolbar.findButton($parent[0].tagName.toLowerCase());
        if (button != null) {
          button.command();
        }
        return;
      }
      this.editor.selection.save();
      if ($blockEl.next('li').length > 0) {
        $('<' + $parent[0].tagName + '/>').append($blockEl.nextAll('li')).appendTo($blockEl);
      }
      $blockEl.insertAfter($parentLi);
      if ($parent.children('li').length < 1) {
        $parent.remove();
      }
      this.editor.selection.restore();
    } else if ($blockEl.is('p, h1, h2, h3, h4')) {
      indentLevel = (ref = $blockEl.attr('data-indent')) != null ? ref : 0;
      indentLevel = indentLevel * 1 - 1;
      if (indentLevel < 0) {
        indentLevel = 0;
      }
      $blockEl.attr('data-indent', indentLevel);
    } else if ($blockEl.is('table') || $blockEl.is('.simditor-table')) {
      range = this.editor.selection.getRange();
      $td = $(range.commonAncestorContainer).closest('td');
      $prevTd = $td.prev('td');
      if (!($prevTd.length > 0)) {
        $prevTd = $td.parent('tr').prev('tr').find('td:last');
      }
      if (!($td.length > 0 && $prevTd.length > 0)) {
        return;
      }
      this.editor.selection.setRangeAtEndOf($prevTd);
    }
    return true;
  };

  Indentation.prototype.outdentText = function(range) {};

  return Indentation;

})(SimpleModule);

Simditor = (function(superClass) {
  extend(Simditor, superClass);

  function Simditor() {
    return Simditor.__super__.constructor.apply(this, arguments);
  }

  Simditor.connect(Util);

  Simditor.connect(InputManager);

  Simditor.connect(UndoManager);

  Simditor.connect(Keystroke);

  Simditor.connect(Formatter);

  Simditor.connect(Selection);

  Simditor.connect(Toolbar);

  Simditor.connect(Indentation);

  Simditor.count = 0;

  Simditor.prototype.opts = {
    textarea: null,
    placeholder: '',
    defaultImage: 'images/image.png',
    params: {},
    upload: false
  };

  Simditor.prototype._init = function() {
    var e, editor, form, uploadOpts;
    this.textarea = $(this.opts.textarea);
    this.opts.placeholder = this.opts.placeholder || this.textarea.attr('placeholder');
    if (!this.textarea.length) {
      throw new Error('simditor: param textarea is required.');
      return;
    }
    editor = this.textarea.data('simditor');
    if (editor != null) {
      editor.destroy();
    }
    this.id = ++Simditor.count;
    this._render();
    if (this.opts.upload && simpleUploader) {
      uploadOpts = typeof this.opts.upload === 'object' ? this.opts.upload : {};
      this.uploader = simpleUploader(uploadOpts);
    }
    form = this.textarea.closest('form');
    if (form.length) {
      form.on('submit.simditor-' + this.id, (function(_this) {
        return function() {
          return _this.sync();
        };
      })(this));
      form.on('reset.simditor-' + this.id, (function(_this) {
        return function() {
          return _this.setValue('');
        };
      })(this));
    }
    this.on('initialized', (function(_this) {
      return function() {
        if (_this.opts.placeholder) {
          _this.on('valuechanged', function() {
            return _this._placeholder();
          });
        }
        return _this.setValue(_this.textarea.val().trim() || '');
      };
    })(this));
    if (this.util.browser.mozilla) {
      this.util.reflow();
      try {
        document.execCommand("enableObjectResizing", false, false);
        return document.execCommand("enableInlineTableEditing", false, false);
      } catch (_error) {
        e = _error;
      }
    }
  };

  Simditor.prototype._tpl = "<div class=\"simditor\">\n  <div class=\"simditor-wrapper\">\n    <div class=\"simditor-placeholder\"></div>\n    <div class=\"simditor-body\" contenteditable=\"true\">\n    </div>\n  </div>\n</div>";

  Simditor.prototype._render = function() {
    var key, ref, results1, val;
    this.el = $(this._tpl).insertBefore(this.textarea);
    this.wrapper = this.el.find('.simditor-wrapper');
    this.body = this.wrapper.find('.simditor-body');
    this.placeholderEl = this.wrapper.find('.simditor-placeholder').append(this.opts.placeholder);
    this.el.data('simditor', this);
    this.wrapper.append(this.textarea);
    this.textarea.data('simditor', this).blur();
    this.body.attr('tabindex', this.textarea.attr('tabindex'));
    if (this.util.os.mac) {
      this.el.addClass('simditor-mac');
    } else if (this.util.os.linux) {
      this.el.addClass('simditor-linux');
    }
    if (this.util.os.mobile) {
      this.el.addClass('simditor-mobile');
    }
    if (this.opts.params) {
      ref = this.opts.params;
      results1 = [];
      for (key in ref) {
        val = ref[key];
        results1.push($('<input/>', {
          type: 'hidden',
          name: key,
          value: val
        }).insertAfter(this.textarea));
      }
      return results1;
    }
  };

  Simditor.prototype._placeholder = function() {
    var children, ref;
    children = this.body.children();
    if (children.length === 0 || (children.length === 1 && this.util.isEmptyNode(children) && ((ref = children.data('indent')) != null ? ref : 0) < 1)) {
      return this.placeholderEl.show();
    } else {
      return this.placeholderEl.hide();
    }
  };

  Simditor.prototype.setValue = function(val) {
    this.hidePopover();
    this.textarea.val(val);
    this.body.html(val);
    this.formatter.format();
    this.formatter.decorate();
    this.util.reflow(this.body);
    this.inputManager.lastCaretPosition = null;
    return this.trigger('valuechanged');
  };

  Simditor.prototype.getValue = function() {
    return this.sync();
  };

  Simditor.prototype.sync = function() {
    var children, cloneBody, emptyP, firstP, lastP, val;
    cloneBody = this.body.clone();
    this.formatter.undecorate(cloneBody);
    this.formatter.format(cloneBody);
    this.formatter.autolink(cloneBody);
    children = cloneBody.children();
    lastP = children.last('p');
    firstP = children.first('p');
    while (lastP.is('p') && this.util.isEmptyNode(lastP)) {
      emptyP = lastP;
      lastP = lastP.prev('p');
      emptyP.remove();
    }
    while (firstP.is('p') && this.util.isEmptyNode(firstP)) {
      emptyP = firstP;
      firstP = lastP.next('p');
      emptyP.remove();
    }
    cloneBody.find('img.uploading').remove();
    val = $.trim(cloneBody.html());
    this.textarea.val(val);
    return val;
  };

  Simditor.prototype.focus = function() {
    var $blockEl, range;
    if (this.sourceMode) {
      this.textarea.focus();
      return;
    }
    if (this.inputManager.lastCaretPosition) {
      return this.undoManager.caretPosition(this.inputManager.lastCaretPosition);
    } else {
      $blockEl = this.body.find('p').last();
      if (!($blockEl.length > 0)) {
        $blockEl = $('<p/>').append(this.util.phBr).appendTo(this.body);
      }
      range = document.createRange();
      this.selection.setRangeAtEndOf($blockEl, range);
      return this.body.focus();
    }
  };

  Simditor.prototype.blur = function() {
    if (this.sourceMode) {
      return this.textarea.blur();
    } else {
      return this.body.blur();
    }
  };

  Simditor.prototype.hidePopover = function() {
    return this.el.find('.simditor-popover').each((function(_this) {
      return function(i, popover) {
        popover = $(popover).data('popover');
        if (popover.active) {
          return popover.hide();
        }
      };
    })(this));
  };

  Simditor.prototype.destroy = function() {
    this.triggerHandler('destroy');
    this.textarea.closest('form').off('.simditor .simditor-' + this.id);
    this.selection.clear();
    this.inputManager.focused = false;
    this.textarea.insertBefore(this.el).hide().val('').removeData('simditor');
    this.el.remove();
    $(document).off('.simditor-' + this.id);
    $(window).off('.simditor-' + this.id);
    return this.off();
  };

  return Simditor;

})(SimpleModule);

Simditor.i18n = {
  'zh-CN': {
    'blockquote': '引用',
    'bold': '加粗文字',
    'code': '插入代码',
    'color': '文字颜色',
    'hr': '分隔线',
    'image': '插入图片',
    'externalImage': '外链图片',
    'uploadImage': '上传图片',
    'uploadFailed': '上传失败了',
    'uploadError': '上传出错了',
    'imageUrl': '图片地址',
    'imageSize': '图片尺寸',
    'imageAlt': '图片描述',
    'restoreImageSize': '还原图片尺寸',
    'uploading': '正在上传',
    'indent': '向右缩进',
    'outdent': '向左缩进',
    'italic': '斜体文字',
    'link': '插入链接',
    'text': '文本',
    'linkText': '链接文字',
    'linkUrl': '地址',
    'removeLink': '移除链接',
    'ol': '有序列表',
    'ul': '无序列表',
    'strikethrough': '删除线文字',
    'table': '表格',
    'deleteRow': '删除行',
    'insertRowAbove': '在上面插入行',
    'insertRowBelow': '在下面插入行',
    'deleteColumn': '删除列',
    'insertColumnLeft': '在左边插入列',
    'insertColumnRight': '在右边插入列',
    'deleteTable': '删除表格',
    'title': '标题',
    'source': 'HTML源代码',
    'normalText': '普通文本',
    'underline': '下划线文字'
  }
};

Button = (function(superClass) {
  extend(Button, superClass);

  Button.prototype._tpl = {
    item: '<li><a tabindex="-1" unselectable="on" class="toolbar-item" href="javascript:;"><span></span></a></li>',
    menuWrapper: '<div class="toolbar-menu"></div>',
    menuItem: '<li><a tabindex="-1" unselectable="on" class="menu-item" href="javascript:;"><span></span></a></li>',
    separator: '<li><span class="separator"></span></li>'
  };

  Button.prototype.name = '';

  Button.prototype.icon = '';

  Button.prototype.title = '';

  Button.prototype.text = '';

  Button.prototype.htmlTag = '';

  Button.prototype.disableTag = '';

  Button.prototype.menu = false;

  Button.prototype.active = false;

  Button.prototype.disabled = false;

  Button.prototype.needFocus = true;

  Button.prototype.shortcut = null;

  function Button(opts) {
    this.editor = opts.editor;
    this.title = this._t(this.name);
    Button.__super__.constructor.call(this, opts);
  }

  Button.prototype._init = function() {
    var j, len, ref, results1, tag;
    this.render();
    this.el.on('mousedown', (function(_this) {
      return function(e) {
        var exceed, param;
        e.preventDefault();
        if (_this.el.hasClass('disabled') || (_this.needFocus && !_this.editor.inputManager.focused)) {
          return false;
        }
        if (_this.menu) {
          _this.wrapper.toggleClass('menu-on').siblings('li').removeClass('menu-on');
          if (_this.wrapper.is('.menu-on')) {
            exceed = _this.menuWrapper.offset().left + _this.menuWrapper.outerWidth() + 5 - _this.editor.wrapper.offset().left - _this.editor.wrapper.outerWidth();
            if (exceed > 0) {
              _this.menuWrapper.css({
                'left': 'auto',
                'right': 0
              });
            }
            _this.trigger('menuexpand');
          }
          return false;
        }
        param = _this.el.data('param');
        _this.command(param);
        return false;
      };
    })(this));
    this.wrapper.on('click', 'a.menu-item', (function(_this) {
      return function(e) {
        var btn, param;
        e.preventDefault();
        btn = $(e.currentTarget);
        _this.wrapper.removeClass('menu-on');
        if (btn.hasClass('disabled') || (_this.needFocus && !_this.editor.inputManager.focused)) {
          return false;
        }
        _this.editor.toolbar.wrapper.removeClass('menu-on');
        param = btn.data('param');
        _this.command(param);
        return false;
      };
    })(this));
    this.wrapper.on('mousedown', 'a.menu-item', (function(_this) {
      return function(e) {
        return false;
      };
    })(this));
    this.editor.on('blur', (function(_this) {
      return function() {
        if (_this.editor.sourceMode) {
          return;
        }
        _this.setActive(false);
        return _this.setDisabled(false);
      };
    })(this));
    if (this.shortcut != null) {
      this.editor.inputManager.addShortcut(this.shortcut, (function(_this) {
        return function(e) {
          _this.el.mousedown();
          return false;
        };
      })(this));
    }
    ref = this.htmlTag.split(',');
    results1 = [];
    for (j = 0, len = ref.length; j < len; j++) {
      tag = ref[j];
      tag = $.trim(tag);
      if (tag && $.inArray(tag, this.editor.formatter._allowedTags) < 0) {
        results1.push(this.editor.formatter._allowedTags.push(tag));
      } else {
        results1.push(void 0);
      }
    }
    return results1;
  };

  Button.prototype.render = function() {
    this.wrapper = $(this._tpl.item).appendTo(this.editor.toolbar.list);
    this.el = this.wrapper.find('a.toolbar-item');
    this.el.attr('title', this.title).addClass("toolbar-item-" + this.name).data('button', this);
    this.el.find('span').addClass(this.icon ? "simditor-icon simditor-icon-" + this.icon : '').text(this.text);
    if (!this.menu) {
      return;
    }
    this.menuWrapper = $(this._tpl.menuWrapper).appendTo(this.wrapper);
    this.menuWrapper.addClass("toolbar-menu-" + this.name);
    return this.renderMenu();
  };

  Button.prototype.renderMenu = function() {
    var $menuBtntnEl, $menuItemEl, j, len, menuItem, ref, ref1, results1;
    if (!$.isArray(this.menu)) {
      return;
    }
    this.menuEl = $('<ul/>').appendTo(this.menuWrapper);
    ref = this.menu;
    results1 = [];
    for (j = 0, len = ref.length; j < len; j++) {
      menuItem = ref[j];
      if (menuItem === '|') {
        $(this._tpl.separator).appendTo(this.menuEl);
        continue;
      }
      $menuItemEl = $(this._tpl.menuItem).appendTo(this.menuEl);
      results1.push($menuBtntnEl = $menuItemEl.find('a.menu-item').attr({
        'title': (ref1 = menuItem.title) != null ? ref1 : menuItem.text,
        'data-param': menuItem.param
      }).addClass('menu-item-' + menuItem.name).find('span').text(menuItem.text));
    }
    return results1;
  };

  Button.prototype.setActive = function(active) {
    if (active === this.active) {
      return;
    }
    this.active = active;
    this.el.toggleClass('active', this.active);
    return this.editor.toolbar.trigger('buttonstatus', [this]);
  };

  Button.prototype.setDisabled = function(disabled) {
    if (disabled === this.disabled) {
      return;
    }
    this.disabled = disabled;
    this.el.toggleClass('disabled', this.disabled);
    return this.editor.toolbar.trigger('buttonstatus', [this]);
  };

  Button.prototype.status = function($node) {
    if ($node != null) {
      this.setDisabled($node.is(this.disableTag));
    }
    if (this.disabled) {
      return true;
    }
    if ($node != null) {
      this.setActive($node.is(this.htmlTag));
    }
    return this.active;
  };

  Button.prototype.command = function(param) {};

  Button.prototype._t = function() {
    var args, ref, result;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    result = Button.__super__._t.apply(this, args);
    if (!result) {
      result = (ref = this.editor)._t.apply(ref, args);
    }
    return result;
  };

  return Button;

})(SimpleModule);

Simditor.Button = Button;

Popover = (function(superClass) {
  extend(Popover, superClass);

  Popover.prototype.offset = {
    top: 4,
    left: 0
  };

  Popover.prototype.target = null;

  Popover.prototype.active = false;

  function Popover(opts) {
    this.button = opts.button;
    this.editor = opts.button.editor;
    Popover.__super__.constructor.call(this, opts);
  }

  Popover.prototype._init = function() {
    this.el = $('<div class="simditor-popover"></div>').appendTo(this.editor.el).data('popover', this);
    this.render();
    this.el.on('mouseenter', (function(_this) {
      return function(e) {
        return _this.el.addClass('hover');
      };
    })(this));
    return this.el.on('mouseleave', (function(_this) {
      return function(e) {
        return _this.el.removeClass('hover');
      };
    })(this));
  };

  Popover.prototype.render = function() {};

  Popover.prototype.show = function($target, position) {
    if (position == null) {
      position = 'bottom';
    }
    if ($target == null) {
      return;
    }
    this.el.siblings('.simditor-popover').each((function(_this) {
      return function(i, popover) {
        popover = $(popover).data('popover');
        if (popover.active) {
          return popover.hide();
        }
      };
    })(this));
    this.target = $target.addClass('selected');
    if (this.active) {
      this.refresh(position);
      return this.trigger('popovershow');
    } else {
      this.active = true;
      this.el.css({
        left: -9999
      }).show();
      return setTimeout((function(_this) {
        return function() {
          _this.refresh(position);
          return _this.trigger('popovershow');
        };
      })(this), 0);
    }
  };

  Popover.prototype.hide = function() {
    if (!this.active) {
      return;
    }
    if (this.target) {
      this.target.removeClass('selected');
    }
    this.target = null;
    this.active = false;
    this.el.hide();
    return this.trigger('popoverhide');
  };

  Popover.prototype.refresh = function(position) {
    var editorOffset, left, targetH, targetOffset, top;
    if (position == null) {
      position = 'bottom';
    }
    if (!this.active) {
      return;
    }
    editorOffset = this.editor.el.offset();
    targetOffset = this.target.offset();
    targetH = this.target.outerHeight();
    if (position === 'bottom') {
      top = targetOffset.top - editorOffset.top + targetH;
    } else if (position === 'top') {
      top = targetOffset.top - editorOffset.top - this.el.height();
    }
    left = Math.min(targetOffset.left - editorOffset.left, this.editor.wrapper.width() - this.el.outerWidth() - 10);
    return this.el.css({
      top: top + this.offset.top,
      left: left + this.offset.left
    });
  };

  Popover.prototype.destroy = function() {
    this.target = null;
    this.active = false;
    this.editor.off('.linkpopover');
    return this.el.remove();
  };

  Popover.prototype._t = function() {
    var args, ref, result;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    result = Popover.__super__._t.apply(this, args);
    if (!result) {
      result = (ref = this.button)._t.apply(ref, args);
    }
    return result;
  };

  return Popover;

})(SimpleModule);

Simditor.Popover = Popover;

SourceButton = (function(superClass) {
  extend(SourceButton, superClass);

  function SourceButton() {
    return SourceButton.__super__.constructor.apply(this, arguments);
  }

  SourceButton.prototype.name = 'source';

  SourceButton.prototype.icon = 'html5';

  SourceButton.prototype.needFocus = false;

  SourceButton.prototype._init = function() {
    SourceButton.__super__._init.call(this);
    this.editor.textarea.on('focus', (function(_this) {
      return function(e) {
        return _this.editor.el.addClass('focus').removeClass('error');
      };
    })(this));
    this.editor.textarea.on('blur', (function(_this) {
      return function(e) {
        _this.editor.el.removeClass('focus');
        return _this.editor.setValue(_this.editor.textarea.val());
      };
    })(this));
    return this.editor.textarea.on('input', (function(_this) {
      return function(e) {
        return _this._resizeTextarea();
      };
    })(this));
  };

  SourceButton.prototype.status = function($node) {
    return true;
  };

  SourceButton.prototype.command = function() {
    var button, j, len, ref;
    this.editor.blur();
    this.editor.el.toggleClass('simditor-source-mode');
    this.editor.sourceMode = this.editor.el.hasClass('simditor-source-mode');
    if (this.editor.sourceMode) {
      this.editor.hidePopover();
      this.editor.textarea.val(this.editor.util.formatHTML(this.editor.textarea.val()));
      this._resizeTextarea();
    }
    ref = this.editor.toolbar.buttons;
    for (j = 0, len = ref.length; j < len; j++) {
      button = ref[j];
      if (button.name === 'source') {
        button.setActive(this.editor.sourceMode);
      } else {
        button.setDisabled(this.editor.sourceMode);
      }
    }
    return null;
  };

  SourceButton.prototype._resizeTextarea = function() {
    this._textareaPadding || (this._textareaPadding = this.editor.textarea.innerHeight() - this.editor.textarea.height());
    return this.editor.textarea.height(0).height(this.editor.textarea[0].scrollHeight - this._textareaPadding);
  };

  return SourceButton;

})(Button);

Simditor.Toolbar.addButton(SourceButton);

TitleButton = (function(superClass) {
  extend(TitleButton, superClass);

  function TitleButton() {
    return TitleButton.__super__.constructor.apply(this, arguments);
  }

  TitleButton.prototype.name = 'title';

  TitleButton.prototype.htmlTag = 'h1, h2, h3, h4';

  TitleButton.prototype.disableTag = 'pre, table';

  TitleButton.prototype._init = function() {
    this.menu = [
      {
        name: 'normal',
        text: this._t('normalText'),
        param: 'p'
      }, '|', {
        name: 'h1',
        text: this._t('title') + ' 1',
        param: 'h1'
      }, {
        name: 'h2',
        text: this._t('title') + ' 2',
        param: 'h2'
      }, {
        name: 'h3',
        text: this._t('title') + ' 3',
        param: 'h3'
      }, {
        name: 'h4',
        text: this._t('title') + ' 4',
        param: 'h4'
      }, {
        name: 'h5',
        text: this._t('title') + ' 5',
        param: 'h5'
      }
    ];
    return TitleButton.__super__._init.call(this);
  };

  TitleButton.prototype.setActive = function(active, param) {
    TitleButton.__super__.setActive.call(this, active);
    this.el.removeClass('active-p active-h1 active-h2 active-h3');
    if (active) {
      return this.el.addClass('active active-' + param);
    }
  };

  TitleButton.prototype.status = function($node) {
    var param, ref;
    if ($node != null) {
      this.setDisabled($node.is(this.disableTag));
    }
    if (this.disabled) {
      return true;
    }
    if ($node != null) {
      param = (ref = $node[0].tagName) != null ? ref.toLowerCase() : void 0;
      this.setActive($node.is(this.htmlTag), param);
    }
    return this.active;
  };

  TitleButton.prototype.command = function(param) {
    var $contents, $endBlock, $startBlock, endNode, j, len, node, range, ref, results, startNode;
    range = this.editor.selection.getRange();
    startNode = range.startContainer;
    endNode = range.endContainer;
    $startBlock = this.editor.util.closestBlockEl(startNode);
    $endBlock = this.editor.util.closestBlockEl(endNode);
    this.editor.selection.save();
    range.setStartBefore($startBlock[0]);
    range.setEndAfter($endBlock[0]);
    $contents = $(range.extractContents());
    results = [];
    $contents.children().each((function(_this) {
      return function(i, el) {
        var c, converted, j, len, results1;
        converted = _this._convertEl(el, param);
        results1 = [];
        for (j = 0, len = converted.length; j < len; j++) {
          c = converted[j];
          results1.push(results.push(c));
        }
        return results1;
      };
    })(this));
    ref = results.reverse();
    for (j = 0, len = ref.length; j < len; j++) {
      node = ref[j];
      range.insertNode(node[0]);
    }
    this.editor.selection.restore();
    return this.editor.trigger('valuechanged');
  };

  TitleButton.prototype._convertEl = function(el, param) {
    var $block, $el, results;
    $el = $(el);
    results = [];
    if ($el.is(param)) {
      results.push($el);
    } else {
      $block = $('<' + param + '/>').append($el.contents());
      results.push($block);
    }
    return results;
  };

  return TitleButton;

})(Button);

Simditor.Toolbar.addButton(TitleButton);

BoldButton = (function(superClass) {
  extend(BoldButton, superClass);

  function BoldButton() {
    return BoldButton.__super__.constructor.apply(this, arguments);
  }

  BoldButton.prototype.name = 'bold';

  BoldButton.prototype.icon = 'bold';

  BoldButton.prototype.htmlTag = 'b, strong';

  BoldButton.prototype.disableTag = 'pre';

  BoldButton.prototype.shortcut = 'cmd+b';

  BoldButton.prototype._init = function() {
    if (this.editor.util.os.mac) {
      this.title = this.title + ' ( Cmd + b )';
    } else {
      this.title = this.title + ' ( Ctrl + b )';
      this.shortcut = 'ctrl+b';
    }
    return BoldButton.__super__._init.call(this);
  };

  BoldButton.prototype.status = function($node) {
    var active;
    if ($node != null) {
      this.setDisabled($node.is(this.disableTag));
    }
    if (this.disabled) {
      return true;
    }
    active = document.queryCommandState('bold') === true;
    this.setActive(active);
    return active;
  };

  BoldButton.prototype.command = function() {
    document.execCommand('bold');
    if (!this.editor.util.support.oninput) {
      this.editor.trigger('valuechanged');
    }
    return $(document).trigger('selectionchange');
  };

  return BoldButton;

})(Button);

Simditor.Toolbar.addButton(BoldButton);

ItalicButton = (function(superClass) {
  extend(ItalicButton, superClass);

  function ItalicButton() {
    return ItalicButton.__super__.constructor.apply(this, arguments);
  }

  ItalicButton.prototype.name = 'italic';

  ItalicButton.prototype.icon = 'italic';

  ItalicButton.prototype.htmlTag = 'i';

  ItalicButton.prototype.disableTag = 'pre';

  ItalicButton.prototype.shortcut = 'cmd+i';

  ItalicButton.prototype._init = function() {
    if (this.editor.util.os.mac) {
      this.title = this.title + ' ( Cmd + i )';
    } else {
      this.title = this.title + ' ( Ctrl + i )';
      this.shortcut = 'ctrl+i';
    }
    return ItalicButton.__super__._init.call(this);
  };

  ItalicButton.prototype.status = function($node) {
    var active;
    if ($node != null) {
      this.setDisabled($node.is(this.disableTag));
    }
    if (this.disabled) {
      return this.disabled;
    }
    active = document.queryCommandState('italic') === true;
    this.setActive(active);
    return active;
  };

  ItalicButton.prototype.command = function() {
    document.execCommand('italic');
    if (!this.editor.util.support.oninput) {
      this.editor.trigger('valuechanged');
    }
    return $(document).trigger('selectionchange');
  };

  return ItalicButton;

})(Button);

Simditor.Toolbar.addButton(ItalicButton);

UnderlineButton = (function(superClass) {
  extend(UnderlineButton, superClass);

  function UnderlineButton() {
    return UnderlineButton.__super__.constructor.apply(this, arguments);
  }

  UnderlineButton.prototype.name = 'underline';

  UnderlineButton.prototype.icon = 'underline';

  UnderlineButton.prototype.htmlTag = 'u';

  UnderlineButton.prototype.disableTag = 'pre';

  UnderlineButton.prototype.shortcut = 'cmd+u';

  UnderlineButton.prototype.render = function() {
    if (this.editor.util.os.mac) {
      this.title = this.title + ' ( Cmd + u )';
    } else {
      this.title = this.title + ' ( Ctrl + u )';
      this.shortcut = 'ctrl+u';
    }
    return UnderlineButton.__super__.render.call(this);
  };

  UnderlineButton.prototype.status = function($node) {
    var active;
    if ($node != null) {
      this.setDisabled($node.is(this.disableTag));
    }
    if (this.disabled) {
      return this.disabled;
    }
    active = document.queryCommandState('underline') === true;
    this.setActive(active);
    return active;
  };

  UnderlineButton.prototype.command = function() {
    document.execCommand('underline');
    if (!this.editor.util.support.oninput) {
      this.editor.trigger('valuechanged');
    }
    return $(document).trigger('selectionchange');
  };

  return UnderlineButton;

})(Button);

Simditor.Toolbar.addButton(UnderlineButton);

ColorButton = (function(superClass) {
  extend(ColorButton, superClass);

  function ColorButton() {
    return ColorButton.__super__.constructor.apply(this, arguments);
  }

  ColorButton.prototype.name = 'color';

  ColorButton.prototype.icon = 'tint';

  ColorButton.prototype.disableTag = 'pre';

  ColorButton.prototype.menu = true;

  ColorButton.prototype.render = function() {
    var args;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    return ColorButton.__super__.render.apply(this, args);
  };

  ColorButton.prototype.renderMenu = function() {
    $('<ul class="color-list">\n  <li><a href="javascript:;" class="font-color font-color-1" data-color=""></a></li>\n  <li><a href="javascript:;" class="font-color font-color-2" data-color=""></a></li>\n  <li><a href="javascript:;" class="font-color font-color-3" data-color=""></a></li>\n  <li><a href="javascript:;" class="font-color font-color-4" data-color=""></a></li>\n  <li><a href="javascript:;" class="font-color font-color-5" data-color=""></a></li>\n  <li><a href="javascript:;" class="font-color font-color-6" data-color=""></a></li>\n  <li><a href="javascript:;" class="font-color font-color-7" data-color=""></a></li>\n  <li><a href="javascript:;" class="font-color font-color-default" data-color=""></a></li>\n</ul>').appendTo(this.menuWrapper);
    this.menuWrapper.on('mousedown', '.color-list', function(e) {
      return false;
    });
    return this.menuWrapper.on('click', '.font-color', (function(_this) {
      return function(e) {
        var $link, $p, hex, rgb;
        _this.wrapper.removeClass('menu-on');
        $link = $(e.currentTarget);
        if ($link.hasClass('font-color-default')) {
          $p = _this.editor.body.find('p, li');
          if (!($p.length > 0)) {
            return;
          }
          rgb = window.getComputedStyle($p[0], null).getPropertyValue('color');
          hex = _this._convertRgbToHex(rgb);
        } else {
          rgb = window.getComputedStyle($link[0], null).getPropertyValue('background-color');
          hex = _this._convertRgbToHex(rgb);
        }
        if (!hex) {
          return;
        }
        document.execCommand('foreColor', false, hex);
        if (!_this.editor.util.support.oninput) {
          return _this.editor.trigger('valuechanged');
        }
      };
    })(this));
  };

  ColorButton.prototype._convertRgbToHex = function(rgb) {
    var match, re, rgbToHex;
    re = /rgb\((\d+),\s?(\d+),\s?(\d+)\)/g;
    match = re.exec(rgb);
    if (!match) {
      return '';
    }
    rgbToHex = function(r, g, b) {
      var componentToHex;
      componentToHex = function(c) {
        var hex;
        hex = c.toString(16);
        if (hex.length === 1) {
          return '0' + hex;
        } else {
          return hex;
        }
      };
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    };
    return rgbToHex(match[1] * 1, match[2] * 1, match[3] * 1);
  };

  return ColorButton;

})(Button);

Simditor.Toolbar.addButton(ColorButton);

ListButton = (function(superClass) {
  extend(ListButton, superClass);

  function ListButton() {
    return ListButton.__super__.constructor.apply(this, arguments);
  }

  ListButton.prototype.type = '';

  ListButton.prototype.disableTag = 'pre, table';

  ListButton.prototype.status = function($node) {
    var anotherType;
    if ($node != null) {
      this.setDisabled($node.is(this.disableTag));
    }
    if (this.disabled) {
      return true;
    }
    if ($node == null) {
      return this.active;
    }
    anotherType = this.type === 'ul' ? 'ol' : 'ul';
    if ($node.is(anotherType)) {
      this.setActive(false);
      return true;
    } else {
      this.setActive($node.is(this.htmlTag));
      return this.active;
    }
  };

  ListButton.prototype.command = function(param) {
    var $contents, $endBlock, $furthestEnd, $furthestStart, $parent, $startBlock, endLevel, endNode, getListLevel, j, len, node, range, ref, results, startLevel, startNode;
    range = this.editor.selection.getRange();
    startNode = range.startContainer;
    endNode = range.endContainer;
    $startBlock = this.editor.util.closestBlockEl(startNode);
    $endBlock = this.editor.util.closestBlockEl(endNode);
    this.editor.selection.save();
    range.setStartBefore($startBlock[0]);
    range.setEndAfter($endBlock[0]);
    if ($startBlock.is('li') && $endBlock.is('li')) {
      $furthestStart = this.editor.util.furthestNode($startBlock, 'ul, ol');
      $furthestEnd = this.editor.util.furthestNode($endBlock, 'ul, ol');
      if ($furthestStart.is($furthestEnd)) {
        getListLevel = function($li) {
          var lvl;
          lvl = 1;
          while (!$li.parent().is($furthestStart)) {
            lvl += 1;
            $li = $li.parent();
          }
          return lvl;
        };
        startLevel = getListLevel($startBlock);
        endLevel = getListLevel($endBlock);
        if (startLevel > endLevel) {
          $parent = $endBlock.parent();
        } else {
          $parent = $startBlock.parent();
        }
        range.setStartBefore($parent[0]);
        range.setEndAfter($parent[0]);
      } else {
        range.setStartBefore($furthestStart[0]);
        range.setEndAfter($furthestEnd[0]);
      }
    }
    $contents = $(range.extractContents());
    results = [];
    $contents.children().each((function(_this) {
      return function(i, el) {
        var c, converted, j, len, results1;
        converted = _this._convertEl(el);
        results1 = [];
        for (j = 0, len = converted.length; j < len; j++) {
          c = converted[j];
          if (results.length && results[results.length - 1].is(_this.type) && c.is(_this.type)) {
            results1.push(results[results.length - 1].append(c.children()));
          } else {
            results1.push(results.push(c));
          }
        }
        return results1;
      };
    })(this));
    ref = results.reverse();
    for (j = 0, len = ref.length; j < len; j++) {
      node = ref[j];
      range.insertNode(node[0]);
    }
    this.editor.selection.restore();
    return this.editor.trigger('valuechanged');
  };

  ListButton.prototype._convertEl = function(el) {
    var $el, anotherType, block, child, children, j, len, ref, results;
    $el = $(el);
    results = [];
    anotherType = this.type === 'ul' ? 'ol' : 'ul';
    if ($el.is(this.type)) {
      $el.children('li').each((function(_this) {
        return function(i, li) {
          var $childList, $li, block;
          $li = $(li);
          $childList = $li.children('ul, ol').remove();
          block = $('<p/>').append($(li).html() || _this.editor.util.phBr);
          results.push(block);
          if ($childList.length > 0) {
            return results.push($childList);
          }
        };
      })(this));
    } else if ($el.is(anotherType)) {
      block = $('<' + this.type + '/>').append($el.html());
      results.push(block);
    } else if ($el.is('blockquote')) {
      ref = $el.children().get();
      for (j = 0, len = ref.length; j < len; j++) {
        child = ref[j];
        children = this._convertEl(child);
      }
      $.merge(results, children);
    } else if ($el.is('table')) {

    } else {
      block = $('<' + this.type + '><li></li></' + this.type + '>');
      block.find('li').append($el.html() || this.editor.util.phBr);
      results.push(block);
    }
    return results;
  };

  return ListButton;

})(Button);

OrderListButton = (function(superClass) {
  extend(OrderListButton, superClass);

  function OrderListButton() {
    return OrderListButton.__super__.constructor.apply(this, arguments);
  }

  OrderListButton.prototype.type = 'ol';

  OrderListButton.prototype.name = 'ol';

  OrderListButton.prototype.icon = 'list-ol';

  OrderListButton.prototype.htmlTag = 'ol';

  OrderListButton.prototype.shortcut = 'cmd+/';

  OrderListButton.prototype._init = function() {
    if (this.editor.util.os.mac) {
      this.title = this.title + ' ( Cmd + / )';
    } else {
      this.title = this.title + ' ( ctrl + / )';
      this.shortcut = 'ctrl+/';
    }
    return OrderListButton.__super__._init.call(this);
  };

  return OrderListButton;

})(ListButton);

UnorderListButton = (function(superClass) {
  extend(UnorderListButton, superClass);

  function UnorderListButton() {
    return UnorderListButton.__super__.constructor.apply(this, arguments);
  }

  UnorderListButton.prototype.type = 'ul';

  UnorderListButton.prototype.name = 'ul';

  UnorderListButton.prototype.icon = 'list-ul';

  UnorderListButton.prototype.htmlTag = 'ul';

  UnorderListButton.prototype.shortcut = 'cmd+.';

  UnorderListButton.prototype._init = function() {
    if (this.editor.util.os.mac) {
      this.title = this.title + ' ( Cmd + . )';
    } else {
      this.title = this.title + ' ( Ctrl + . )';
      this.shortcut = 'ctrl+.';
    }
    return UnorderListButton.__super__._init.call(this);
  };

  return UnorderListButton;

})(ListButton);

Simditor.Toolbar.addButton(OrderListButton);

Simditor.Toolbar.addButton(UnorderListButton);

BlockquoteButton = (function(superClass) {
  extend(BlockquoteButton, superClass);

  function BlockquoteButton() {
    return BlockquoteButton.__super__.constructor.apply(this, arguments);
  }

  BlockquoteButton.prototype.name = 'blockquote';

  BlockquoteButton.prototype.icon = 'quote-left';

  BlockquoteButton.prototype.htmlTag = 'blockquote';

  BlockquoteButton.prototype.disableTag = 'pre, table';

  BlockquoteButton.prototype.command = function() {
    var $contents, $endBlock, $startBlock, endNode, j, len, node, range, ref, results, startNode;
    range = this.editor.selection.getRange();
    startNode = range.startContainer;
    endNode = range.endContainer;
    $startBlock = this.editor.util.furthestBlockEl(startNode);
    $endBlock = this.editor.util.furthestBlockEl(endNode);
    this.editor.selection.save();
    range.setStartBefore($startBlock[0]);
    range.setEndAfter($endBlock[0]);
    $contents = $(range.extractContents());
    results = [];
    $contents.children().each((function(_this) {
      return function(i, el) {
        var c, converted, j, len, results1;
        converted = _this._convertEl(el);
        results1 = [];
        for (j = 0, len = converted.length; j < len; j++) {
          c = converted[j];
          if (results.length && results[results.length - 1].is(_this.htmlTag) && c.is(_this.htmlTag)) {
            results1.push(results[results.length - 1].append(c.children()));
          } else {
            results1.push(results.push(c));
          }
        }
        return results1;
      };
    })(this));
    ref = results.reverse();
    for (j = 0, len = ref.length; j < len; j++) {
      node = ref[j];
      range.insertNode(node[0]);
    }
    this.editor.selection.restore();
    return this.editor.trigger('valuechanged');
  };

  BlockquoteButton.prototype._convertEl = function(el) {
    var $el, block, results;
    $el = $(el);
    results = [];
    if ($el.is(this.htmlTag)) {
      $el.children().each((function(_this) {
        return function(i, node) {
          return results.push($(node));
        };
      })(this));
    } else {
      block = $('<' + this.htmlTag + '/>').append($el);
      results.push(block);
    }
    return results;
  };

  return BlockquoteButton;

})(Button);

Simditor.Toolbar.addButton(BlockquoteButton);

CodeButton = (function(superClass) {
  extend(CodeButton, superClass);

  function CodeButton() {
    return CodeButton.__super__.constructor.apply(this, arguments);
  }

  CodeButton.prototype.name = 'code';

  CodeButton.prototype.icon = 'code';

  CodeButton.prototype.htmlTag = 'pre';

  CodeButton.prototype.disableTag = 'li, table';

  CodeButton.prototype._init = function() {
    CodeButton.__super__._init.call(this);
    this.editor.on('decorate', (function(_this) {
      return function(e, $el) {
        return $el.find('pre').each(function(i, pre) {
          return _this.decorate($(pre));
        });
      };
    })(this));
    return this.editor.on('undecorate', (function(_this) {
      return function(e, $el) {
        return $el.find('pre').each(function(i, pre) {
          return _this.undecorate($(pre));
        });
      };
    })(this));
  };

  CodeButton.prototype.render = function() {
    var args;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    CodeButton.__super__.render.apply(this, args);
    return this.popover = new CodePopover({
      button: this
    });
  };

  CodeButton.prototype.status = function($node) {
    var result;
    result = CodeButton.__super__.status.call(this, $node);
    if (this.active) {
      this.popover.show($node);
    } else if (this.editor.util.isBlockNode($node)) {
      this.popover.hide();
    }
    return result;
  };

  CodeButton.prototype.decorate = function($pre) {
    var lang;
    lang = $pre.attr('data-lang');
    $pre.removeClass();
    if (lang && lang !== -1) {
      return $pre.addClass('lang-' + lang);
    }
  };

  CodeButton.prototype.undecorate = function($pre) {
    var lang;
    lang = $pre.attr('data-lang');
    $pre.removeClass();
    if (lang && lang !== -1) {
      return $pre.addClass('lang-' + lang);
    }
  };

  CodeButton.prototype.command = function() {
    var $contents, $endBlock, $startBlock, endNode, j, len, node, range, ref, results, startNode;
    range = this.editor.selection.getRange();
    startNode = range.startContainer;
    endNode = range.endContainer;
    $startBlock = this.editor.util.closestBlockEl(startNode);
    $endBlock = this.editor.util.closestBlockEl(endNode);
    range.setStartBefore($startBlock[0]);
    range.setEndAfter($endBlock[0]);
    $contents = $(range.extractContents());
    results = [];
    $contents.children().each((function(_this) {
      return function(i, el) {
        var c, converted, j, len, results1;
        converted = _this._convertEl(el);
        results1 = [];
        for (j = 0, len = converted.length; j < len; j++) {
          c = converted[j];
          if (results.length && results[results.length - 1].is(_this.htmlTag) && c.is(_this.htmlTag)) {
            results1.push(results[results.length - 1].append(c.contents()));
          } else {
            results1.push(results.push(c));
          }
        }
        return results1;
      };
    })(this));
    ref = results.reverse();
    for (j = 0, len = ref.length; j < len; j++) {
      node = ref[j];
      range.insertNode(node[0]);
    }
    this.editor.selection.setRangeAtEndOf(results[0]);
    return this.editor.trigger('valuechanged');
  };

  CodeButton.prototype._convertEl = function(el) {
    var $el, block, codeStr, results;
    $el = $(el);
    results = [];
    if ($el.is(this.htmlTag)) {
      block = $('<p/>').append($el.html().replace('\n', '<br/>'));
      results.push(block);
    } else {
      if (!$el.text() && $el.children().length === 1 && $el.children().is('br')) {
        codeStr = '\n';
      } else {
        codeStr = this.editor.formatter.clearHtml($el);
      }
      block = $('<' + this.htmlTag + '/>').text(codeStr);
      results.push(block);
    }
    return results;
  };

  return CodeButton;

})(Button);

CodePopover = (function(superClass) {
  extend(CodePopover, superClass);

  function CodePopover() {
    return CodePopover.__super__.constructor.apply(this, arguments);
  }

  CodePopover.prototype._tpl = "<div class=\"code-settings\">\n  <div class=\"settings-field\">\n    <select class=\"select-lang\">\n      <option value=\"-1\">选择程序语言</option>\n      <option value=\"bash\">Bash</option>\n      <option value=\"c++\">C++</option>\n      <option value=\"cs\">C#</option>\n      <option value=\"css\">CSS</option>\n      <option value=\"erlang\">Erlang</option>\n      <option value=\"less\">Less</option>\n      <option value=\"scss\">Sass</option>\n      <option value=\"diff\">Diff</option>\n      <option value=\"coffeeScript\">CoffeeScript</option>\n      <option value=\"html\">Html,XML</option>\n      <option value=\"json\">JSON</option>\n      <option value=\"java\">Java</option>\n      <option value=\"js\">JavaScript</option>\n      <option value=\"markdown\">Markdown</option>\n      <option value=\"oc\">Objective C</option>\n      <option value=\"php\">PHP</option>\n      <option value=\"perl\">Perl</option>\n      <option value=\"python\">Python</option>\n      <option value=\"ruby\">Ruby</option>\n      <option value=\"sql\">SQL</option>\n    </select>\n  </div>\n</div>";

  CodePopover.prototype.render = function() {
    this.el.addClass('code-popover').append(this._tpl);
    this.selectEl = this.el.find('.select-lang');
    this.selectEl.on('change', (function(_this) {
      return function(e) {
        var selected;
        _this.lang = _this.selectEl.val();
        selected = _this.target.hasClass('selected');
        _this.target.removeClass().removeAttr('data-lang');
        if (_this.lang !== -1) {
          _this.target.addClass('lang-' + _this.lang);
          _this.target.attr('data-lang', _this.lang);
        }
        if (selected) {
          return _this.target.addClass('selected');
        }
      };
    })(this));
    return this.editor.on('valuechanged', (function(_this) {
      return function(e) {
        if (_this.active) {
          return _this.refresh();
        }
      };
    })(this));
  };

  CodePopover.prototype.show = function() {
    var args;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    CodePopover.__super__.show.apply(this, args);
    this.lang = this.target.attr('data-lang');
    if (this.lang != null) {
      return this.selectEl.val(this.lang);
    } else {
      return this.selectEl.val(-1);
    }
  };

  return CodePopover;

})(Popover);

Simditor.Toolbar.addButton(CodeButton);

LinkButton = (function(superClass) {
  extend(LinkButton, superClass);

  function LinkButton() {
    return LinkButton.__super__.constructor.apply(this, arguments);
  }

  LinkButton.prototype.name = 'link';

  LinkButton.prototype.icon = 'link';

  LinkButton.prototype.htmlTag = 'a';

  LinkButton.prototype.disableTag = 'pre';

  LinkButton.prototype.render = function() {
    var args;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    LinkButton.__super__.render.apply(this, args);
    return this.popover = new LinkPopover({
      button: this
    });
  };

  LinkButton.prototype.status = function($node) {
    var showPopover;
    if ($node != null) {
      this.setDisabled($node.is(this.disableTag));
    }
    if (this.disabled) {
      return true;
    }
    if ($node == null) {
      return this.active;
    }
    showPopover = true;
    if (!$node.is(this.htmlTag) || $node.is('[class^="simditor-"]')) {
      this.setActive(false);
      showPopover = false;
    } else if (this.editor.selection.rangeAtEndOf($node)) {
      this.setActive(true);
      showPopover = false;
    } else {
      this.setActive(true);
    }
    if (showPopover) {
      this.popover.show($node);
    } else if (this.editor.util.isBlockNode($node)) {
      this.popover.hide();
    }
    return this.active;
  };

  LinkButton.prototype.command = function() {
    var $contents, $endBlock, $link, $newBlock, $startBlock, endNode, linkText, range, startNode, txtNode;
    range = this.editor.selection.getRange();
    if (this.active) {
      $link = $(range.commonAncestorContainer).closest('a');
      txtNode = document.createTextNode($link.text());
      $link.replaceWith(txtNode);
      range.selectNode(txtNode);
    } else {
      startNode = range.startContainer;
      endNode = range.endContainer;
      $startBlock = this.editor.util.closestBlockEl(startNode);
      $endBlock = this.editor.util.closestBlockEl(endNode);
      $contents = $(range.extractContents());
      linkText = this.editor.formatter.clearHtml($contents.contents(), false);
      $link = $('<a/>', {
        href: 'http://www.example.com',
        target: '_blank',
        text: linkText || this._t('linkText')
      });
      if ($startBlock[0] === $endBlock[0]) {
        range.insertNode($link[0]);
      } else {
        $newBlock = $('<p/>').append($link);
        range.insertNode($newBlock[0]);
      }
      range.selectNodeContents($link[0]);
      this.popover.one('popovershow', (function(_this) {
        return function() {
          if (linkText) {
            _this.popover.urlEl.focus();
            return _this.popover.urlEl[0].select();
          } else {
            _this.popover.textEl.focus();
            return _this.popover.textEl[0].select();
          }
        };
      })(this));
    }
    this.editor.selection.selectRange(range);
    return this.editor.trigger('valuechanged');
  };

  return LinkButton;

})(Button);

LinkPopover = (function(superClass) {
  extend(LinkPopover, superClass);

  function LinkPopover() {
    return LinkPopover.__super__.constructor.apply(this, arguments);
  }

  LinkPopover.prototype.render = function() {
    var tpl;
    tpl = "<div class=\"link-settings\">\n  <div class=\"settings-field\">\n    <label>" + (this._t('text')) + "</label>\n    <input class=\"link-text\" type=\"text\"/>\n    <a class=\"btn-unlink\" href=\"javascript:;\" title=\"" + (this._t('removeLink')) + "\" tabindex=\"-1\"><span class=\"simditor-icon simditor-icon-unlink\"></span></a>\n  </div>\n  <div class=\"settings-field\">\n    <label>" + (this._t('linkUrl')) + "</label>\n    <input class=\"link-url\" type=\"text\"/>\n  </div>\n</div>";
    this.el.addClass('link-popover').append(tpl);
    this.textEl = this.el.find('.link-text');
    this.urlEl = this.el.find('.link-url');
    this.unlinkEl = this.el.find('.btn-unlink');
    this.textEl.on('keyup', (function(_this) {
      return function(e) {
        if (e.which === 13) {
          return;
        }
        return _this.target.text(_this.textEl.val());
      };
    })(this));
    this.urlEl.on('keyup', (function(_this) {
      return function(e) {
        var val;
        if (e.which === 13) {
          return;
        }
        val = _this.urlEl.val();
        if (!(/https?:\/\/|^\//ig.test(val) || !val)) {
          val = 'http://' + val;
        }
        return _this.target.attr('href', val);
      };
    })(this));
    $([this.urlEl[0], this.textEl[0]]).on('keydown', (function(_this) {
      return function(e) {
        if (e.which === 13 || e.which === 27 || (!e.shiftKey && e.which === 9 && $(e.target).hasClass('link-url'))) {
          e.preventDefault();
          return setTimeout(function() {
            var range;
            range = document.createRange();
            _this.editor.selection.setRangeAfter(_this.target, range);
            _this.hide();
            return _this.editor.trigger('valuechanged');
          }, 0);
        }
      };
    })(this));
    return this.unlinkEl.on('click', (function(_this) {
      return function(e) {
        var range, txtNode;
        txtNode = document.createTextNode(_this.target.text());
        _this.target.replaceWith(txtNode);
        _this.hide();
        range = document.createRange();
        _this.editor.selection.setRangeAfter(txtNode, range);
        return _this.editor.trigger('valuechanged');
      };
    })(this));
  };

  LinkPopover.prototype.show = function() {
    var args;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    LinkPopover.__super__.show.apply(this, args);
    this.textEl.val(this.target.text());
    return this.urlEl.val(this.target.attr('href'));
  };

  return LinkPopover;

})(Popover);

Simditor.Toolbar.addButton(LinkButton);

ImageButton = (function(superClass) {
  extend(ImageButton, superClass);

  function ImageButton() {
    return ImageButton.__super__.constructor.apply(this, arguments);
  }

  ImageButton.prototype.name = 'image';

  ImageButton.prototype.icon = 'picture-o';

  ImageButton.prototype.htmlTag = 'img';

  ImageButton.prototype.disableTag = 'pre, table';

  ImageButton.prototype.defaultImage = '';

  ImageButton.prototype.needFocus = false;

  ImageButton.prototype._init = function() {
    var item, j, len, ref;
    if (this.editor.opts.imageButton) {
      if (Array.isArray(this.editor.opts.imageButton)) {
        this.menu = [];
        ref = this.editor.opts.imageButton;
        for (j = 0, len = ref.length; j < len; j++) {
          item = ref[j];
          this.menu.push({
            name: item + '-image',
            text: this._t(item + 'Image')
          });
        }
      } else {
        this.menu = false;
      }
    } else {
      if (this.editor.uploader != null) {
        this.menu = [
          {
            name: 'upload-image',
            text: this._t('uploadImage')
          }, {
            name: 'external-image',
            text: this._t('externalImage')
          }
        ];
      } else {
        this.menu = false;
      }
    }
    this.defaultImage = this.editor.opts.defaultImage;
    this.editor.body.on('click', 'img:not([data-non-image])', (function(_this) {
      return function(e) {
        var $img, range;
        $img = $(e.currentTarget);
        range = document.createRange();
        range.selectNode($img[0]);
        _this.editor.selection.selectRange(range);
        if (!_this.editor.util.support.onselectionchange) {
          _this.editor.trigger('selectionchanged');
        }
        return false;
      };
    })(this));
    this.editor.body.on('mouseup', 'img:not([data-non-image])', (function(_this) {
      return function(e) {
        return false;
      };
    })(this));
    this.editor.on('selectionchanged.image', (function(_this) {
      return function() {
        var $contents, $img, range;
        range = _this.editor.selection.getRange();
        if (range == null) {
          return;
        }
        $contents = $(range.cloneContents()).contents();
        if ($contents.length === 1 && $contents.is('img:not([data-non-image])')) {
          $img = $(range.startContainer).contents().eq(range.startOffset);
          return _this.popover.show($img);
        } else {
          return _this.popover.hide();
        }
      };
    })(this));
    this.editor.on('valuechanged.image', (function(_this) {
      return function() {
        var $masks;
        $masks = _this.editor.wrapper.find('.simditor-image-loading');
        if (!($masks.length > 0)) {
          return;
        }
        return $masks.each(function(i, mask) {
          var $img, $mask, file;
          $mask = $(mask);
          $img = $mask.data('img');
          if (!($img && $img.parent().length > 0)) {
            $mask.remove();
            if ($img) {
              file = $img.data('file');
              if (file) {
                _this.editor.uploader.cancel(file);
                if (_this.editor.body.find('img.uploading').length < 1) {
                  return _this.editor.uploader.trigger('uploadready', [file]);
                }
              }
            }
          }
        });
      };
    })(this));
    return ImageButton.__super__._init.call(this);
  };

  ImageButton.prototype.render = function() {
    var args;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    ImageButton.__super__.render.apply(this, args);
    this.popover = new ImagePopover({
      button: this
    });
    if (this.editor.opts.imageButton === 'upload') {
      return this._initUploader(this.el);
    }
  };

  ImageButton.prototype.renderMenu = function() {
    ImageButton.__super__.renderMenu.call(this);
    return this._initUploader();
  };

  ImageButton.prototype._initUploader = function($uploadItem) {
    var $input, createInput;
    if ($uploadItem == null) {
      $uploadItem = this.menuEl.find('.menu-item-upload-image');
    }
    if (this.editor.uploader == null) {
      this.el.find('.btn-upload').remove();
      return;
    }
    $input = null;
    createInput = (function(_this) {
      return function() {
        if ($input) {
          $input.remove();
        }
        return $input = $('<input type="file" title="' + _this._t('uploadImage') + '" accept="image/*">').appendTo($uploadItem);
      };
    })(this);
    createInput();
    $uploadItem.on('click mousedown', 'input[type=file]', (function(_this) {
      return function(e) {
        return e.stopPropagation();
      };
    })(this));
    $uploadItem.on('change', 'input[type=file]', (function(_this) {
      return function(e) {
        if (_this.editor.inputManager.focused) {
          _this.editor.uploader.upload($input, {
            inline: true
          });
          createInput();
        } else {
          _this.editor.one('focus', function(e) {
            _this.editor.uploader.upload($input, {
              inline: true
            });
            return createInput();
          });
          _this.editor.focus();
        }
        return _this.wrapper.removeClass('menu-on');
      };
    })(this));
    this.editor.uploader.on('beforeupload', (function(_this) {
      return function(e, file) {
        var $img;
        if (!file.inline) {
          return;
        }
        if (file.img) {
          $img = $(file.img);
        } else {
          $img = _this.createImage(file.name);
          file.img = $img;
        }
        $img.addClass('uploading');
        $img.data('file', file);
        return _this.editor.uploader.readImageFile(file.obj, function(img) {
          var src;
          if (!$img.hasClass('uploading')) {
            return;
          }
          src = img ? img.src : _this.defaultImage;
          return _this.loadImage($img, src, function() {
            if (_this.popover.active) {
              _this.popover.refresh();
              return _this.popover.srcEl.val(_this._t('uploading')).prop('disabled', true);
            }
          });
        });
      };
    })(this));
    this.editor.uploader.on('uploadprogress', $.proxy(this.editor.util.throttle(function(e, file, loaded, total) {
      var $img, $mask, percent;
      if (!file.inline) {
        return;
      }
      $mask = file.img.data('mask');
      if (!$mask) {
        return;
      }
      $img = $mask.data('img');
      if (!($img.hasClass('uploading') && $img.parent().length > 0)) {
        $mask.remove();
        return;
      }
      percent = loaded / total;
      percent = (percent * 100).toFixed(0);
      if (percent > 99) {
        percent = 99;
      }
      return $mask.find('.progress').height((100 - percent) + "%");
    }, 500), this));
    this.editor.uploader.on('uploadsuccess', (function(_this) {
      return function(e, file, result) {
        var $img, $mask, msg;
        if (!file.inline) {
          return;
        }
        $img = file.img;
        if (!($img.hasClass('uploading') && $img.parent().length > 0)) {
          return;
        }
        $img.removeData('file');
        $img.removeClass('uploading').removeClass('loading');
        $mask = $img.data('mask');
        if ($mask) {
          $mask.remove();
        }
        $img.removeData('mask');
        if (typeof result !== 'object') {
          try {
            result = $.parseJSON(result);
          } catch (_error) {
            e = _error;
            result = {
              success: false
            };
          }
        }
        if (result.success === false) {
          msg = result.msg || _this._t('uploadFailed');
          alert(msg);
          $img.attr('src', _this.defaultImage);
        } else {
          $img.attr('src', result.file_path);
        }
        if (_this.popover.active) {
          _this.popover.srcEl.prop('disabled', false);
          _this.popover.srcEl.val(result.file_path);
        }
        _this.editor.trigger('valuechanged');
        if (_this.editor.body.find('img.uploading').length < 1) {
          return _this.editor.uploader.trigger('uploadready', [file, result]);
        }
      };
    })(this));
    return this.editor.uploader.on('uploaderror', (function(_this) {
      return function(e, file, xhr) {
        var $img, $mask, msg, result;
        if (!file.inline) {
          return;
        }
        if (xhr.statusText === 'abort') {
          return;
        }
        if (xhr.responseText) {
          try {
            result = $.parseJSON(xhr.responseText);
            msg = result.msg;
          } catch (_error) {
            e = _error;
            msg = _this._t('uploadError');
          }
          alert(msg);
        }
        $img = file.img;
        if (!($img.hasClass('uploading') && $img.parent().length > 0)) {
          return;
        }
        $img.removeData('file');
        $img.removeClass('uploading').removeClass('loading');
        $mask = $img.data('mask');
        if ($mask) {
          $mask.remove();
        }
        $img.removeData('mask');
        $img.attr('src', _this.defaultImage);
        if (_this.popover.active) {
          _this.popover.srcEl.prop('disabled', false);
          _this.popover.srcEl.val(_this.defaultImage);
        }
        _this.editor.trigger('valuechanged');
        if (_this.editor.body.find('img.uploading').length < 1) {
          return _this.editor.uploader.trigger('uploadready', [file, result]);
        }
      };
    })(this));
  };

  ImageButton.prototype.status = function($node) {
    if ($node != null) {
      this.setDisabled($node.is(this.disableTag));
    }
    if (this.disabled) {
      return true;
    }
  };

  ImageButton.prototype.loadImage = function($img, src, callback) {
    var $mask, img, positionMask;
    positionMask = (function(_this) {
      return function() {
        var imgOffset, wrapperOffset;
        imgOffset = $img.offset();
        wrapperOffset = _this.editor.wrapper.offset();
        return $mask.css({
          top: imgOffset.top - wrapperOffset.top,
          left: imgOffset.left - wrapperOffset.left,
          width: $img.width(),
          height: $img.height()
        }).show();
      };
    })(this);
    $img.addClass('loading');
    $mask = $img.data('mask');
    if (!$mask) {
      $mask = $('<div class="simditor-image-loading"><div class="progress"></div></div>').hide().appendTo(this.editor.wrapper);
      positionMask();
      $img.data('mask', $mask);
      $mask.data('img', $img);
    }
    img = new Image();
    img.onload = (function(_this) {
      return function() {
        var height, width;
        if (!$img.hasClass('loading') && !$img.hasClass('uploading')) {
          return;
        }
        width = img.width;
        height = img.height;
        $img.attr({
          src: src,
          'data-image-size': width + ',' + height
        }).removeClass('loading');
        if ($img.hasClass('uploading')) {
          _this.editor.util.reflow(_this.editor.body);
          positionMask();
        } else {
          $mask.remove();
          $img.removeData('mask');
        }
        return callback(img);
      };
    })(this);
    img.onerror = (function(_this) {
      return function() {
        callback(false);
        $mask.remove();
        return $img.removeData('mask').removeClass('loading');
      };
    })(this);
    return img.src = src;
  };

  ImageButton.prototype.createImage = function(name) {
    var $block, $img, $nextBlock, range;
    if (name == null) {
      name = 'Image';
    }
    if (!this.editor.inputManager.focused) {
      this.editor.focus();
    }
    range = this.editor.selection.getRange();
    range.deleteContents();
    $block = this.editor.util.closestBlockEl();
    if ($block.is('p') && !this.editor.util.isEmptyNode($block)) {
      $block = $('<p/>').append(this.editor.util.phBr).insertAfter($block);
      this.editor.selection.setRangeAtStartOf($block, range);
    }
    $img = $('<img/>').attr('alt', name);
    range.insertNode($img[0]);
    $nextBlock = $block.next('p');
    if (!($nextBlock.length > 0)) {
      $nextBlock = $('<p/>').append(this.editor.util.phBr).insertAfter($block);
    }
    this.editor.selection.setRangeAtStartOf($nextBlock);
    return $img;
  };

  ImageButton.prototype.command = function(src) {
    var $img;
    $img = this.createImage();
    return this.loadImage($img, src || this.defaultImage, (function(_this) {
      return function() {
        _this.editor.trigger('valuechanged');
        _this.editor.util.reflow($img);
        $img.click();
        return _this.popover.one('popovershow', function() {
          _this.popover.srcEl.focus();
          return _this.popover.srcEl[0].select();
        });
      };
    })(this));
  };

  return ImageButton;

})(Button);

ImagePopover = (function(superClass) {
  extend(ImagePopover, superClass);

  function ImagePopover() {
    return ImagePopover.__super__.constructor.apply(this, arguments);
  }

  ImagePopover.prototype.offset = {
    top: 6,
    left: -4
  };

  ImagePopover.prototype.render = function() {
    var tpl;
    tpl = "<div class=\"link-settings\">\n  <div class=\"settings-field\">\n    <label>" + (this._t('imageUrl')) + "</label>\n    <input class=\"image-src\" type=\"text\" tabindex=\"1\" />\n    <a class=\"btn-upload\" href=\"javascript:;\" title=\"" + (this._t('uploadImage')) + "\" tabindex=\"-1\">\n      <span class=\"simditor-icon simditor-icon-upload\"></span>\n    </a>\n  </div>\n  <div class='settings-field'>\n    <label>" + (this._t('imageAlt')) + "</label>\n    <input class=\"image-alt\" id=\"image-alt\" type=\"text\" tabindex=\"1\" />\n  </div>\n  <div class=\"settings-field\">\n    <label>" + (this._t('imageSize')) + "</label>\n    <input class=\"image-size\" id=\"image-width\" type=\"text\" tabindex=\"2\" />\n    <span class=\"times\">×</span>\n    <input class=\"image-size\" id=\"image-height\" type=\"text\" tabindex=\"3\" />\n    <a class=\"btn-restore\" href=\"javascript:;\" title=\"" + (this._t('restoreImageSize')) + "\" tabindex=\"-1\">\n      <span class=\"simditor-icon simditor-icon-undo\"></span>\n    </a>\n  </div>\n</div>";
    this.el.addClass('image-popover').append(tpl);
    this.srcEl = this.el.find('.image-src');
    this.widthEl = this.el.find('#image-width');
    this.heightEl = this.el.find('#image-height');
    this.altEl = this.el.find('#image-alt');
    this.srcEl.on('keydown', (function(_this) {
      return function(e) {
        if (!(e.which === 13 && !_this.target.hasClass('uploading'))) {
          return;
        }
        e.preventDefault();
        _this.button.editor.body.focus();
        _this.button.editor.selection.setRangeAfter(_this.target);
        return _this.hide();
      };
    })(this));
    this.srcEl.on('blur', (function(_this) {
      return function(e) {
        return _this._loadImage(_this.srcEl.val());
      };
    })(this));
    this.el.find('.image-size').on('blur', (function(_this) {
      return function(e) {
        _this._resizeImg($(e.currentTarget));
        return _this.el.data('popover').refresh();
      };
    })(this));
    this.el.find('.image-size').on('keyup', (function(_this) {
      return function(e) {
        var inputEl;
        inputEl = $(e.currentTarget);
        if (!(e.which === 13 || e.which === 27 || e.which === 9)) {
          return _this._resizeImg(inputEl, true);
        }
      };
    })(this));
    this.el.find('.image-size').on('keydown', (function(_this) {
      return function(e) {
        var inputEl;
        inputEl = $(e.currentTarget);
        if (e.which === 13 || e.which === 27) {
          e.preventDefault();
          if (e.which === 13) {
            _this._resizeImg(inputEl);
          } else {
            _this._restoreImg();
          }
          _this.button.editor.body.focus();
          _this.button.editor.selection.setRangeAfter(_this.target);
          return _this.hide();
        } else if (e.which === 9) {
          return _this.el.data('popover').refresh();
        }
      };
    })(this));
    this.altEl.on('keydown', (function(_this) {
      return function(e) {
        if (e.which === 13) {
          e.preventDefault();
          _this.button.editor.body.focus();
          _this.button.editor.selection.setRangeAfter(_this.target);
          return _this.hide();
        }
      };
    })(this));
    this.altEl.on('keyup', (function(_this) {
      return function(e) {
        if (e.which === 13 || e.which === 27 || e.which === 9) {
          return;
        }
        _this.alt = _this.altEl.val();
        return _this.target.attr('alt', _this.alt);
      };
    })(this));
    this.el.find('.btn-restore').on('click', (function(_this) {
      return function(e) {
        _this._restoreImg();
        return _this.el.data('popover').refresh();
      };
    })(this));
    this.editor.on('valuechanged', (function(_this) {
      return function(e) {
        if (_this.active) {
          return _this.refresh();
        }
      };
    })(this));
    return this._initUploader();
  };

  ImagePopover.prototype._initUploader = function() {
    var $uploadBtn, createInput;
    $uploadBtn = this.el.find('.btn-upload');
    if (this.editor.uploader == null) {
      $uploadBtn.remove();
      return;
    }
    createInput = (function(_this) {
      return function() {
        if (_this.input) {
          _this.input.remove();
        }
        return _this.input = $('<input type="file" title="' + _this._t('uploadImage') + '" accept="image/*">').appendTo($uploadBtn);
      };
    })(this);
    createInput();
    this.el.on('click mousedown', 'input[type=file]', (function(_this) {
      return function(e) {
        return e.stopPropagation();
      };
    })(this));
    return this.el.on('change', 'input[type=file]', (function(_this) {
      return function(e) {
        _this.editor.uploader.upload(_this.input, {
          inline: true,
          img: _this.target
        });
        return createInput();
      };
    })(this));
  };

  ImagePopover.prototype._resizeImg = function(inputEl, onlySetVal) {
    var height, value, width;
    if (onlySetVal == null) {
      onlySetVal = false;
    }
    value = inputEl.val() * 1;
    if (!($.isNumeric(value) || value < 0)) {
      return;
    }
    if (inputEl.is(this.widthEl)) {
      height = this.height * value / this.width;
      this.heightEl.val(height);
    } else {
      width = this.width * value / this.height;
      this.widthEl.val(width);
    }
    if (!onlySetVal) {
      this.target.attr({
        width: width || value,
        height: height || value
      });
    }
    return this.editor.trigger('valuechanged');
  };

  ImagePopover.prototype._restoreImg = function() {
    var ref, size;
    size = ((ref = this.target.data('image-size')) != null ? ref.split(",") : void 0) || [this.width, this.height];
    this.target.attr({
      width: size[0] * 1,
      height: size[1] * 1
    });
    this.widthEl.val(size[0]);
    this.heightEl.val(size[1]);
    return this.editor.trigger('valuechanged');
  };

  ImagePopover.prototype._loadImage = function(src, callback) {
    if (/^data:image/.test(src) && !this.editor.uploader) {
      if (callback) {
        callback(false);
      }
      return;
    }
    return this.button.loadImage(this.target, src, (function(_this) {
      return function(img) {
        var blob;
        if (!img) {
          return;
        }
        if (_this.active) {
          _this.width = img.width;
          _this.height = img.height;
          _this.widthEl.val(_this.width);
          _this.heightEl.val(_this.height);
          _this.target.removeAttr('width').removeAttr('height');
        }
        if (/^data:image/.test(src)) {
          blob = _this.editor.util.dataURLtoBlob(src);
          blob.name = "Base64 Image.png";
          _this.editor.uploader.upload(blob, {
            inline: true,
            img: _this.target
          });
        } else {
          _this.editor.trigger('valuechanged');
        }
        if (callback) {
          return callback(img);
        }
      };
    })(this));
  };

  ImagePopover.prototype.show = function() {
    var $img, args;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    ImagePopover.__super__.show.apply(this, args);
    $img = this.target;
    this.width = $img.width();
    this.height = $img.height();
    this.alt = $img.attr('alt');
    if ($img.hasClass('uploading')) {
      return this.srcEl.val(this._t('uploading')).prop('disabled', true);
    } else {
      this.srcEl.val($img.attr('src')).prop('disabled', false);
      this.widthEl.val(this.width);
      this.heightEl.val(this.height);
      return this.altEl.val(this.alt);
    }
  };

  return ImagePopover;

})(Popover);

Simditor.Toolbar.addButton(ImageButton);

IndentButton = (function(superClass) {
  extend(IndentButton, superClass);

  function IndentButton() {
    return IndentButton.__super__.constructor.apply(this, arguments);
  }

  IndentButton.prototype.name = 'indent';

  IndentButton.prototype.icon = 'indent';

  IndentButton.prototype._init = function() {
    this.title = this._t(this.name) + ' (Tab)';
    return IndentButton.__super__._init.call(this);
  };

  IndentButton.prototype.status = function($node) {
    return true;
  };

  IndentButton.prototype.command = function() {
    return this.editor.indentation.indent();
  };

  return IndentButton;

})(Button);

Simditor.Toolbar.addButton(IndentButton);

OutdentButton = (function(superClass) {
  extend(OutdentButton, superClass);

  function OutdentButton() {
    return OutdentButton.__super__.constructor.apply(this, arguments);
  }

  OutdentButton.prototype.name = 'outdent';

  OutdentButton.prototype.icon = 'outdent';

  OutdentButton.prototype._init = function() {
    this.title = this._t(this.name) + ' (Shift + Tab)';
    return OutdentButton.__super__._init.call(this);
  };

  OutdentButton.prototype.status = function($node) {
    return true;
  };

  OutdentButton.prototype.command = function() {
    return this.editor.indentation.indent(true);
  };

  return OutdentButton;

})(Button);

Simditor.Toolbar.addButton(OutdentButton);

HrButton = (function(superClass) {
  extend(HrButton, superClass);

  function HrButton() {
    return HrButton.__super__.constructor.apply(this, arguments);
  }

  HrButton.prototype.name = 'hr';

  HrButton.prototype.icon = 'minus';

  HrButton.prototype.htmlTag = 'hr';

  HrButton.prototype.status = function($node) {
    return true;
  };

  HrButton.prototype.command = function() {
    var $hr, $newBlock, $nextBlock, $rootBlock;
    $rootBlock = this.editor.util.furthestBlockEl();
    $nextBlock = $rootBlock.next();
    if ($nextBlock.length > 0) {
      this.editor.selection.save();
    } else {
      $newBlock = $('<p/>').append(this.editor.util.phBr);
    }
    $hr = $('<hr/>').insertAfter($rootBlock);
    if ($newBlock) {
      $newBlock.insertAfter($hr);
      this.editor.selection.setRangeAtStartOf($newBlock);
    } else {
      this.editor.selection.restore();
    }
    return this.editor.trigger('valuechanged');
  };

  return HrButton;

})(Button);

Simditor.Toolbar.addButton(HrButton);

TableButton = (function(superClass) {
  extend(TableButton, superClass);

  function TableButton() {
    return TableButton.__super__.constructor.apply(this, arguments);
  }

  TableButton.prototype.name = 'table';

  TableButton.prototype.icon = 'table';

  TableButton.prototype.htmlTag = 'table';

  TableButton.prototype.disableTag = 'pre, li, blockquote';

  TableButton.prototype.menu = true;

  TableButton.prototype._init = function() {
    TableButton.__super__._init.call(this);
    $.merge(this.editor.formatter._allowedTags, ['tbody', 'tr', 'td', 'colgroup', 'col']);
    $.extend(this.editor.formatter._allowedAttributes, {
      td: ['rowspan', 'colspan'],
      col: ['width']
    });
    this._initShortcuts();
    this.editor.on('decorate', (function(_this) {
      return function(e, $el) {
        return $el.find('table').each(function(i, table) {
          return _this.decorate($(table));
        });
      };
    })(this));
    this.editor.on('undecorate', (function(_this) {
      return function(e, $el) {
        return $el.find('table').each(function(i, table) {
          return _this.undecorate($(table));
        });
      };
    })(this));
    this.editor.on('selectionchanged.table', (function(_this) {
      return function(e) {
        var $container, range;
        _this.editor.body.find('.simditor-table td').removeClass('active');
        range = _this.editor.selection.getRange();
        if (range == null) {
          return;
        }
        $container = $(range.commonAncestorContainer);
        if (range.collapsed && $container.is('.simditor-table')) {
          if (_this.editor.selection.rangeAtStartOf($container)) {
            $container = $container.find('td:first');
          } else {
            $container = $container.find('td:last');
          }
          _this.editor.selection.setRangeAtEndOf($container);
        }
        return $container.closest('td', _this.editor.body).addClass('active');
      };
    })(this));
    this.editor.on('blur.table', (function(_this) {
      return function(e) {
        return _this.editor.body.find('.simditor-table td').removeClass('active');
      };
    })(this));
    this.editor.inputManager.addKeystrokeHandler('38', 'td', (function(_this) {
      return function(e, $node) {
        var $prevTr, $tr, index;
        $tr = $node.parent('tr');
        $prevTr = $tr.prev('tr');
        if (!($prevTr.length > 0)) {
          return true;
        }
        index = $tr.find('td').index($node);
        _this.editor.selection.setRangeAtEndOf($prevTr.find('td').eq(index));
        return true;
      };
    })(this));
    return this.editor.inputManager.addKeystrokeHandler('40', 'td', (function(_this) {
      return function(e, $node) {
        var $nextTr, $tr, index;
        $tr = $node.parent('tr');
        $nextTr = $tr.next('tr');
        if (!($nextTr.length > 0)) {
          return true;
        }
        index = $tr.find('td').index($node);
        _this.editor.selection.setRangeAtEndOf($nextTr.find('td').eq(index));
        return true;
      };
    })(this));
  };

  TableButton.prototype.initResize = function($table) {
    var $colgroup, $resizeHandle, $wrapper;
    $wrapper = $table.parent('.simditor-table');
    $colgroup = $table.find('colgroup');
    if ($colgroup.length < 1) {
      $colgroup = $('<colgroup/>').prependTo($table);
      $table.find('tr:first td').each((function(_this) {
        return function(i, td) {
          var $col;
          return $col = $('<col/>').appendTo($colgroup);
        };
      })(this));
      this.refreshTableWidth($table);
    }
    $resizeHandle = $('<div class="simditor-resize-handle" contenteditable="false"></div>').appendTo($wrapper);
    $wrapper.on('mousemove', 'td', (function(_this) {
      return function(e) {
        var $col, $td, index, ref, ref1, x;
        if ($wrapper.hasClass('resizing')) {
          return;
        }
        $td = $(e.currentTarget);
        x = e.pageX - $(e.currentTarget).offset().left;
        if (x < 5 && $td.prev().length > 0) {
          $td = $td.prev();
        }
        if ($td.next('td').length < 1) {
          $resizeHandle.hide();
          return;
        }
        if ((ref = $resizeHandle.data('td')) != null ? ref.is($td) : void 0) {
          $resizeHandle.show();
          return;
        }
        index = $td.parent().find('td').index($td);
        $col = $colgroup.find('col').eq(index);
        if ((ref1 = $resizeHandle.data('col')) != null ? ref1.is($col) : void 0) {
          $resizeHandle.show();
          return;
        }
        return $resizeHandle.css('left', $td.position().left + $td.outerWidth() - 5).data('td', $td).data('col', $col).show();
      };
    })(this));
    $wrapper.on('mouseleave', (function(_this) {
      return function(e) {
        return $resizeHandle.hide();
      };
    })(this));
    return $wrapper.on('mousedown', '.simditor-resize-handle', (function(_this) {
      return function(e) {
        var $handle, $leftCol, $leftTd, $rightCol, $rightTd, minWidth, startHandleLeft, startLeftWidth, startRightWidth, startX, tableWidth;
        $handle = $(e.currentTarget);
        $leftTd = $handle.data('td');
        $leftCol = $handle.data('col');
        $rightTd = $leftTd.next('td');
        $rightCol = $leftCol.next('col');
        startX = e.pageX;
        startLeftWidth = $leftTd.outerWidth() * 1;
        startRightWidth = $rightTd.outerWidth() * 1;
        startHandleLeft = parseFloat($handle.css('left'));
        tableWidth = $leftTd.closest('table').width();
        minWidth = 50;
        $(document).on('mousemove.simditor-resize-table', function(e) {
          var deltaX, leftWidth, rightWidth;
          deltaX = e.pageX - startX;
          leftWidth = startLeftWidth + deltaX;
          rightWidth = startRightWidth - deltaX;
          if (leftWidth < minWidth) {
            leftWidth = minWidth;
            deltaX = minWidth - startLeftWidth;
            rightWidth = startRightWidth - deltaX;
          } else if (rightWidth < minWidth) {
            rightWidth = minWidth;
            deltaX = startRightWidth - minWidth;
            leftWidth = startLeftWidth + deltaX;
          }
          $leftCol.attr('width', (leftWidth / tableWidth * 100) + '%');
          $rightCol.attr('width', (rightWidth / tableWidth * 100) + '%');
          return $handle.css('left', startHandleLeft + deltaX);
        });
        $(document).one('mouseup.simditor-resize-table', function(e) {
          $(document).off('.simditor-resize-table');
          return $wrapper.removeClass('resizing');
        });
        $wrapper.addClass('resizing');
        return false;
      };
    })(this));
  };

  TableButton.prototype._initShortcuts = function() {
    this.editor.inputManager.addShortcut('ctrl+alt+up', (function(_this) {
      return function(e) {
        _this.editMenu.find('.menu-item[data-param=insertRowAbove]').click();
        return false;
      };
    })(this));
    this.editor.inputManager.addShortcut('ctrl+alt+down', (function(_this) {
      return function(e) {
        _this.editMenu.find('.menu-item[data-param=insertRowBelow]').click();
        return false;
      };
    })(this));
    this.editor.inputManager.addShortcut('ctrl+alt+left', (function(_this) {
      return function(e) {
        _this.editMenu.find('.menu-item[data-param=insertColLeft]').click();
        return false;
      };
    })(this));
    return this.editor.inputManager.addShortcut('ctrl+alt+right', (function(_this) {
      return function(e) {
        _this.editMenu.find('.menu-item[data-param=insertColRight]').click();
        return false;
      };
    })(this));
  };

  TableButton.prototype.decorate = function($table) {
    if ($table.parent('.simditor-table').length > 0) {
      this.undecorate($table);
    }
    $table.wrap('<div class="simditor-table"></div>');
    this.initResize($table);
    return $table.parent();
  };

  TableButton.prototype.undecorate = function($table) {
    if (!($table.parent('.simditor-table').length > 0)) {
      return;
    }
    return $table.parent().replaceWith($table);
  };

  TableButton.prototype.renderMenu = function() {
    $("<div class=\"menu-create-table\">\n</div>\n<div class=\"menu-edit-table\">\n  <ul>\n    <li><a tabindex=\"-1\" unselectable=\"on\" class=\"menu-item\" href=\"javascript:;\" data-param=\"deleteRow\"><span>" + (this._t('deleteRow')) + "</span></a></li>\n    <li><a tabindex=\"-1\" unselectable=\"on\" class=\"menu-item\" href=\"javascript:;\" data-param=\"insertRowAbove\"><span>" + (this._t('insertRowAbove')) + " ( Ctrl + Alt + ↑ )</span></a></li>\n    <li><a tabindex=\"-1\" unselectable=\"on\" class=\"menu-item\" href=\"javascript:;\" data-param=\"insertRowBelow\"><span>" + (this._t('insertRowBelow')) + " ( Ctrl + Alt + ↓ )</span></a></li>\n    <li><span class=\"separator\"></span></li>\n    <li><a tabindex=\"-1\" unselectable=\"on\" class=\"menu-item\" href=\"javascript:;\" data-param=\"deleteCol\"><span>" + (this._t('deleteColumn')) + "</span></a></li>\n    <li><a tabindex=\"-1\" unselectable=\"on\" class=\"menu-item\" href=\"javascript:;\" data-param=\"insertColLeft\"><span>" + (this._t('insertColumnLeft')) + " ( Ctrl + Alt + ← )</span></a></li>\n    <li><a tabindex=\"-1\" unselectable=\"on\" class=\"menu-item\" href=\"javascript:;\" data-param=\"insertColRight\"><span>" + (this._t('insertColumnRight')) + " ( Ctrl + Alt + → )</span></a></li>\n    <li><span class=\"separator\"></span></li>\n    <li><a tabindex=\"-1\" unselectable=\"on\" class=\"menu-item\" href=\"javascript:;\" data-param=\"deleteTable\"><span>" + (this._t('deleteTable')) + "</span></a></li>\n  </ul>\n</div>").appendTo(this.menuWrapper);
    this.createMenu = this.menuWrapper.find('.menu-create-table');
    this.editMenu = this.menuWrapper.find('.menu-edit-table');
    this.createTable(6, 6).appendTo(this.createMenu);
    this.createMenu.on('mouseenter', 'td', (function(_this) {
      return function(e) {
        var $td, $tr, num;
        _this.createMenu.find('td').removeClass('selected');
        $td = $(e.currentTarget);
        $tr = $td.parent();
        num = $tr.find('td').index($td) + 1;
        return $tr.prevAll('tr').addBack().find('td:lt(' + num + ')').addClass('selected');
      };
    })(this));
    this.createMenu.on('mouseleave', (function(_this) {
      return function(e) {
        return $(e.currentTarget).find('td').removeClass('selected');
      };
    })(this));
    return this.createMenu.on('mousedown', 'td', (function(_this) {
      return function(e) {
        var $closestBlock, $table, $td, $tr, colNum, rowNum;
        _this.wrapper.removeClass('menu-on');
        if (!_this.editor.inputManager.focused) {
          return;
        }
        $td = $(e.currentTarget);
        $tr = $td.parent();
        colNum = $tr.find('td').index($td) + 1;
        rowNum = $tr.prevAll('tr').length + 1;
        $table = _this.createTable(rowNum, colNum, true);
        $closestBlock = _this.editor.util.closestBlockEl();
        if (_this.editor.util.isEmptyNode($closestBlock)) {
          $closestBlock.replaceWith($table);
        } else {
          $closestBlock.after($table);
        }
        _this.decorate($table);
        _this.editor.selection.setRangeAtStartOf($table.find('td:first'));
        _this.editor.trigger('valuechanged');
        return false;
      };
    })(this));
  };

  TableButton.prototype.createTable = function(row, col, phBr) {
    var $table, $tbody, $td, $tr, c, j, k, r, ref, ref1;
    $table = $('<table/>');
    $tbody = $('<tbody/>').appendTo($table);
    for (r = j = 0, ref = row; 0 <= ref ? j < ref : j > ref; r = 0 <= ref ? ++j : --j) {
      $tr = $('<tr/>').appendTo($tbody);
      for (c = k = 0, ref1 = col; 0 <= ref1 ? k < ref1 : k > ref1; c = 0 <= ref1 ? ++k : --k) {
        $td = $('<td/>').appendTo($tr);
        if (phBr) {
          $td.append(this.editor.util.phBr);
        }
      }
    }
    return $table;
  };

  TableButton.prototype.refreshTableWidth = function($table) {
    var cols, tableWidth;
    tableWidth = $table.width();
    cols = $table.find('col');
    return $table.find('tr:first td').each((function(_this) {
      return function(i, td) {
        var $col;
        $col = cols.eq(i);
        return $col.attr('width', ($(td).outerWidth() / tableWidth * 100) + '%');
      };
    })(this));
  };

  TableButton.prototype.setActive = function(active) {
    TableButton.__super__.setActive.call(this, active);
    if (active) {
      this.createMenu.hide();
      return this.editMenu.show();
    } else {
      this.createMenu.show();
      return this.editMenu.hide();
    }
  };

  TableButton.prototype.deleteRow = function($td) {
    var $newTr, $tr, index;
    $tr = $td.parent('tr');
    if ($tr.siblings('tr').length < 1) {
      return this.deleteTable($td);
    } else {
      $newTr = $tr.next('tr');
      if (!($newTr.length > 0)) {
        $newTr = $tr.prev('tr');
      }
      index = $tr.find('td').index($td);
      $tr.remove();
      return this.editor.selection.setRangeAtEndOf($newTr.find('td').eq(index));
    }
  };

  TableButton.prototype.insertRow = function($td, direction) {
    var $newTr, $table, $tr, colNum, i, index, j, ref;
    if (direction == null) {
      direction = 'after';
    }
    $tr = $td.parent('tr');
    $table = $tr.closest('table');
    colNum = 0;
    $table.find('tr').each((function(_this) {
      return function(i, tr) {
        return colNum = Math.max(colNum, $(tr).find('td').length);
      };
    })(this));
    $newTr = $('<tr/>');
    for (i = j = 1, ref = colNum; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
      $('<td/>').append(this.editor.util.phBr).appendTo($newTr);
    }
    $tr[direction]($newTr);
    index = $tr.find('td').index($td);
    return this.editor.selection.setRangeAtStartOf($newTr.find('td').eq(index));
  };

  TableButton.prototype.deleteCol = function($td) {
    var $newTd, $table, $tr, index;
    $tr = $td.parent('tr');
    if ($tr.siblings('tr').length < 1 && $td.siblings('td').length < 1) {
      return this.deleteTable($td);
    } else {
      index = $tr.find('td').index($td);
      $newTd = $td.next('td');
      if (!($newTd.length > 0)) {
        $newTd = $tr.prev('td');
      }
      $table = $tr.closest('table');
      $table.find('col').eq(index).remove();
      $table.find('tr').each((function(_this) {
        return function(i, tr) {
          return $(tr).find('td').eq(index).remove();
        };
      })(this));
      this.refreshTableWidth($table);
      return this.editor.selection.setRangeAtEndOf($newTd);
    }
  };

  TableButton.prototype.insertCol = function($td, direction) {
    var $col, $newCol, $newTd, $table, $tr, index, tableWidth, width;
    if (direction == null) {
      direction = 'after';
    }
    $tr = $td.parent('tr');
    index = $tr.find('td').index($td);
    $table = $td.closest('table');
    $col = $table.find('col').eq(index);
    $table.find('tr').each((function(_this) {
      return function(i, tr) {
        var $newTd;
        $newTd = $('<td/>').append(_this.editor.util.phBr);
        return $(tr).find('td').eq(index)[direction]($newTd);
      };
    })(this));
    $newCol = $('<col/>');
    $col[direction]($newCol);
    tableWidth = $table.width();
    width = Math.max(parseFloat($col.attr('width')) / 2, 50 / tableWidth * 100);
    $col.attr('width', width + '%');
    $newCol.attr('width', width + '%');
    this.refreshTableWidth($table);
    $newTd = direction === 'after' ? $td.next('td') : $td.prev('td');
    return this.editor.selection.setRangeAtStartOf($newTd);
  };

  TableButton.prototype.deleteTable = function($td) {
    var $block, $table;
    $table = $td.closest('.simditor-table');
    $block = $table.next('p');
    $table.remove();
    if ($block.length > 0) {
      return this.editor.selection.setRangeAtStartOf($block);
    }
  };

  TableButton.prototype.command = function(param) {
    var $td, range;
    range = this.editor.selection.getRange();
    $td = $(range.commonAncestorContainer).closest('td');
    if (!($td.length > 0)) {
      return;
    }
    if (param === 'deleteRow') {
      this.deleteRow($td);
    } else if (param === 'insertRowAbove') {
      this.insertRow($td, 'before');
    } else if (param === 'insertRowBelow') {
      this.insertRow($td);
    } else if (param === 'deleteCol') {
      this.deleteCol($td);
    } else if (param === 'insertColLeft') {
      this.insertCol($td, 'before');
    } else if (param === 'insertColRight') {
      this.insertCol($td);
    } else if (param === 'deleteTable') {
      this.deleteTable($td);
    } else {
      return;
    }
    return this.editor.trigger('valuechanged');
  };

  return TableButton;

})(Button);

Simditor.Toolbar.addButton(TableButton);

StrikethroughButton = (function(superClass) {
  extend(StrikethroughButton, superClass);

  function StrikethroughButton() {
    return StrikethroughButton.__super__.constructor.apply(this, arguments);
  }

  StrikethroughButton.prototype.name = 'strikethrough';

  StrikethroughButton.prototype.icon = 'strikethrough';

  StrikethroughButton.prototype.htmlTag = 'strike';

  StrikethroughButton.prototype.disableTag = 'pre';

  StrikethroughButton.prototype.status = function($node) {
    var active;
    if ($node != null) {
      this.setDisabled($node.is(this.disableTag));
    }
    if (this.disabled) {
      return true;
    }
    active = document.queryCommandState('strikethrough') === true;
    this.setActive(active);
    return active;
  };

  StrikethroughButton.prototype.command = function() {
    document.execCommand('strikethrough');
    if (!this.editor.util.support.oninput) {
      this.editor.trigger('valuechanged');
    }
    return $(document).trigger('selectionchange');
  };

  return StrikethroughButton;

})(Button);

Simditor.Toolbar.addButton(StrikethroughButton);

return Simditor;

}));

(function() {
  var getSubItems, getTocItems, thirdPartys, toc;

  getSubItems = function(collection) {
    var items;
    items = [];
    collection.each(function() {
      return items.push("<li><a href=\"#" + this.id + "\">" + ($(this).text()) + "</a></li>");
    });
    return items.join("");
  };

  getTocItems = function() {
    var items;
    items = [];
    $("section", $(".layout-main")).each(function() {
      var item, subItems;
      item = $("h1", $(this).children("header"));
      subItems = $(this).children("h2");
      subItems = subItems.size() > 0 ? "<ul>" + (getSubItems(subItems)) + "</ul>" : "";
      return items.push("<li><a href=\"#" + (item.attr("id")) + "\">" + (item.text()) + "</a>" + subItems + "</li>");
    });
    return items.join("");
  };

  toc = function() {
    $(".layout-main").after("<div class=\"layout-sub col-md-3\"><nav class=\"docs-toc-wrapper hidden-xs hidden-sm\"><ul class=\"docs-toc\" /></nav></div>");
    return $(".docs-toc").html(getTocItems());
  };

  thirdPartys = function() {
    $("[data-role='datetimepicker']").datetimepicker();
    $("[data-role='icheck']").iCheck({
      checkboxClass: "icheckbox_flat-green",
      radioClass: "iradio_flat-green"
    });
    $("[data-role='select2']").select2();
    if ($("[data-role='simditor']").size() !== 0) {
      return new Simditor({
        textarea: $("[data-role='simditor']")
      });
    }
  };

  $(document).ready(function() {
    toc();
    thirdPartys();
    return $(".layout-sub nav").affix({
      offset: {
        top: $(".layout-sub nav").offset().top
      }
    });
  });

}).call(this);
