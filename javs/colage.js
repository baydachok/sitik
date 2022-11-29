/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m="1.11.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(l.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:k&&!k.call("\ufeff\xa0")?function(a){return null==a?"":k.call(a)}:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||n.guid++,e):void 0},now:function(){return+new Date},support:l}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=a.document,A=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,B=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:A.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:z,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=z.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return y.find(a);this.length=1,this[0]=d}return this.context=z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};B.prototype=n.fn,y=n(z);var C=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!n(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function E(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return E(a,"nextSibling")},prev:function(a){return E(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(D[a]||(e=n.unique(e)),C.test(a)&&(e=e.reverse())),this.pushStack(e)}});var F=/\S+/g,G={};function H(a){var b=G[a]={};return n.each(a.match(F)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?G[a]||H(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&n.each(arguments,function(a,c){var d;while((d=n.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){if(a===!0?!--n.readyWait:!n.isReady){if(!z.body)return setTimeout(n.ready);n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(z,[n]),n.fn.trigger&&n(z).trigger("ready").off("ready"))}}});function J(){z.addEventListener?(z.removeEventListener("DOMContentLoaded",K,!1),a.removeEventListener("load",K,!1)):(z.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(z.addEventListener||"load"===event.type||"complete"===z.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===z.readyState)setTimeout(n.ready);else if(z.addEventListener)z.addEventListener("DOMContentLoaded",K,!1),a.addEventListener("load",K,!1);else{z.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&z.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!n.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}J(),n.ready()}}()}return I.promise(b)};var L="undefined",M;for(M in n(l))break;l.ownLast="0"!==M,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c=z.getElementsByTagName("body")[0];c&&(a=z.createElement("div"),a.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",b=z.createElement("div"),c.appendChild(a).appendChild(b),typeof b.style.zoom!==L&&(b.style.cssText="border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",(l.inlineBlockNeedsLayout=3===b.offsetWidth)&&(c.style.zoom=1)),c.removeChild(a),a=b=null)}),function(){var a=z.createElement("div");if(null==l.deleteExpando){l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}}a=null}(),n.acceptData=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(n.acceptData(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f
}}function S(a,b,c){if(n.acceptData(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d]));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},W=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},X=/^(?:checkbox|radio)$/i;!function(){var a=z.createDocumentFragment(),b=z.createElement("div"),c=z.createElement("input");if(b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a>",l.leadingWhitespace=3===b.firstChild.nodeType,l.tbody=!b.getElementsByTagName("tbody").length,l.htmlSerialize=!!b.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==z.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,a.appendChild(c),l.appendChecked=c.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,a.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){l.noCloneEvent=!1}),b.cloneNode(!0).click()),null==l.deleteExpando){l.deleteExpando=!0;try{delete b.test}catch(d){l.deleteExpando=!1}}a=b=c=null}(),function(){var b,c,d=z.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),l[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var Y=/^(?:input|select|textarea)$/i,Z=/^key/,$=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,ab=/^([^.]*)(?:\.(.+)|)$/;function bb(){return!0}function cb(){return!1}function db(){try{return z.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof n===L||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(F)||[""],h=b.length;while(h--)f=ab.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(F)||[""],j=b.length;while(j--)if(h=ab.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,m,o=[d||z],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||z,3!==d.nodeType&&8!==d.nodeType&&!_.test(p+n.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[n.expando]?b:new n.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),k=n.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!n.isWindow(d)){for(i=k.delegateType||p,_.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||z)&&o.push(l.defaultView||l.parentWindow||a)}m=0;while((h=o[m++])&&!b.isPropagationStopped())b.type=m>1?i:k.bindType||p,f=(n._data(h,"events")||{})[b.type]&&n._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&n.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&n.acceptData(d)&&g&&d[p]&&!n.isWindow(d)){l=d[g],l&&(d[g]=null),n.event.triggered=p;try{d[p]()}catch(r){}n.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((n.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?n(c,this).index(i)>=0:n.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=$.test(e)?this.mouseHooks:Z.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||z),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||z,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==db()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===db()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=z.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===L&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&(a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault())?bb:cb):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:cb,isPropagationStopped:cb,isImmediatePropagationStopped:cb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=bb,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=bb,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submitBubbles||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?b.form:void 0;c&&!n._data(c,"submitBubbles")&&(n.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),n._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.changeBubbles||(n.event.special.change={setup:function(){return Y.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),n.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),n.event.simulate("change",this,a,!0)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;Y.test(b.nodeName)&&!n._data(b,"changeBubbles")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a,!0)}),n._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!Y.test(this.nodeName)}}),l.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=cb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return n().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=cb),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});function eb(a){var b=fb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var fb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gb=/ jQuery\d+="(?:null|\d+)"/g,hb=new RegExp("<(?:"+fb+")[\\s/>]","i"),ib=/^\s+/,jb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,kb=/<([\w:]+)/,lb=/<tbody/i,mb=/<|&#?\w+;/,nb=/<(?:script|style|link)/i,ob=/checked\s*(?:[^=]|=\s*.checked.)/i,pb=/^$|\/(?:java|ecma)script/i,qb=/^true\/(.*)/,rb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,sb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},tb=eb(z),ub=tb.appendChild(z.createElement("div"));sb.optgroup=sb.option,sb.tbody=sb.tfoot=sb.colgroup=sb.caption=sb.thead,sb.th=sb.td;function vb(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==L?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==L?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,vb(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function wb(a){X.test(a.type)&&(a.defaultChecked=a.checked)}function xb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function yb(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function zb(a){var b=qb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ab(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}function Bb(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Cb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(yb(b).text=a.text,zb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&X.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}n.extend({clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!hb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ub.innerHTML=a.outerHTML,ub.removeChild(f=ub.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=vb(f),h=vb(a),g=0;null!=(e=h[g]);++g)d[g]&&Cb(e,d[g]);if(b)if(c)for(h=h||vb(a),d=d||vb(f),g=0;null!=(e=h[g]);g++)Bb(e,d[g]);else Bb(a,f);return d=vb(f,"script"),d.length>0&&Ab(d,!i&&vb(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k,m=a.length,o=eb(b),p=[],q=0;m>q;q++)if(f=a[q],f||0===f)if("object"===n.type(f))n.merge(p,f.nodeType?[f]:f);else if(mb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(kb.exec(f)||["",""])[1].toLowerCase(),k=sb[i]||sb._default,h.innerHTML=k[1]+f.replace(jb,"<$1></$2>")+k[2],e=k[0];while(e--)h=h.lastChild;if(!l.leadingWhitespace&&ib.test(f)&&p.push(b.createTextNode(ib.exec(f)[0])),!l.tbody){f="table"!==i||lb.test(f)?"<table>"!==k[1]||lb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)n.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}n.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),l.appendChecked||n.grep(vb(p,"input"),wb),q=0;while(f=p[q++])if((!d||-1===n.inArray(f,d))&&(g=n.contains(f.ownerDocument,f),h=vb(o.appendChild(f),"script"),g&&Ab(h),c)){e=0;while(f=h[e++])pb.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.deleteExpando,m=n.event.special;null!=(d=a[h]);h++)if((b||n.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k?delete d[i]:typeof d.removeAttribute!==L?d.removeAttribute(i):d[i]=null,c.push(f))}}}),n.fn.extend({text:function(a){return W(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||z).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(vb(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&Ab(vb(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(vb(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return W(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(gb,""):void 0;if(!("string"!=typeof a||nb.test(a)||!l.htmlSerialize&&hb.test(a)||!l.leadingWhitespace&&ib.test(a)||sb[(kb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(jb,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(vb(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(vb(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,o=k-1,p=a[0],q=n.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&ob.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(i=n.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=n.map(vb(i,"script"),yb),f=g.length;k>j;j++)d=i,j!==o&&(d=n.clone(d,!0,!0),f&&n.merge(g,vb(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,n.map(g,zb),j=0;f>j;j++)d=g[j],pb.test(d.type||"")&&!n._data(d,"globalEval")&&n.contains(h,d)&&(d.src?n._evalUrl&&n._evalUrl(d.src):n.globalEval((d.text||d.textContent||d.innerHTML||"").replace(rb,"")));i=c=null}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],g=n(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Db,Eb={};function Fb(b,c){var d=n(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:n.css(d[0],"display");return d.detach(),e}function Gb(a){var b=z,c=Eb[a];return c||(c=Fb(a,b),"none"!==c&&c||(Db=(Db||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Db[0].contentWindow||Db[0].contentDocument).document,b.write(),b.close(),c=Fb(a,b),Db.detach()),Eb[a]=c),c}!function(){var a,b,c=z.createElement("div"),d="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],a.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(a.style.opacity),l.cssFloat=!!a.style.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===c.style.backgroundClip,a=c=null,l.shrinkWrapBlocks=function(){var a,c,e,f;if(null==b){if(a=z.getElementsByTagName("body")[0],!a)return;f="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",c=z.createElement("div"),e=z.createElement("div"),a.appendChild(c).appendChild(e),b=!1,typeof e.style.zoom!==L&&(e.style.cssText=d+";width:1px;padding:1px;zoom:1",e.innerHTML="<div></div>",e.firstChild.style.width="5px",b=3!==e.offsetWidth),a.removeChild(c),a=c=e=null}return b}}();var Hb=/^margin/,Ib=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Jb,Kb,Lb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Jb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),Ib.test(g)&&Hb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):z.documentElement.currentStyle&&(Jb=function(a){return a.currentStyle},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ib.test(g)&&!Lb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Mb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h=z.createElement("div"),i="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",j="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";h.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",b=h.getElementsByTagName("a")[0],b.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(b.style.opacity),l.cssFloat=!!b.style.cssFloat,h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,b=h=null,n.extend(l,{reliableHiddenOffsets:function(){if(null!=c)return c;var a,b,d,e=z.createElement("div"),f=z.getElementsByTagName("body")[0];if(f)return e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=z.createElement("div"),a.style.cssText=i,f.appendChild(a).appendChild(e),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",b=e.getElementsByTagName("td"),b[0].style.cssText="padding:0;margin:0;border:0;display:none",d=0===b[0].offsetHeight,b[0].style.display="",b[1].style.display="none",c=d&&0===b[0].offsetHeight,f.removeChild(a),e=f=null,c},boxSizing:function(){return null==d&&k(),d},boxSizingReliable:function(){return null==e&&k(),e},pixelPosition:function(){return null==f&&k(),f},reliableMarginRight:function(){var b,c,d,e;if(null==g&&a.getComputedStyle){if(b=z.getElementsByTagName("body")[0],!b)return;c=z.createElement("div"),d=z.createElement("div"),c.style.cssText=i,b.appendChild(c).appendChild(d),e=d.appendChild(z.createElement("div")),e.style.cssText=d.style.cssText=j,e.style.marginRight=e.style.width="0",d.style.width="1px",g=!parseFloat((a.getComputedStyle(e,null)||{}).marginRight),b.removeChild(c)}return g}});function k(){var b,c,h=z.getElementsByTagName("body")[0];h&&(b=z.createElement("div"),c=z.createElement("div"),b.style.cssText=i,h.appendChild(b).appendChild(c),c.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",n.swap(h,null!=h.style.zoom?{zoom:1}:{},function(){d=4===c.offsetWidth}),e=!0,f=!1,g=!0,a.getComputedStyle&&(f="1%"!==(a.getComputedStyle(c,null)||{}).top,e="4px"===(a.getComputedStyle(c,null)||{width:"4px"}).width),h.removeChild(b),c=h=null)}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Nb=/alpha\([^)]*\)/i,Ob=/opacity\s*=\s*([^)]*)/,Pb=/^(none|table(?!-c[ea]).+)/,Qb=new RegExp("^("+T+")(.*)$","i"),Rb=new RegExp("^([+-])=("+T+")","i"),Sb={position:"absolute",visibility:"hidden",display:"block"},Tb={letterSpacing:0,fontWeight:400},Ub=["Webkit","O","Moz","ms"];function Vb(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ub.length;while(e--)if(b=Ub[e]+c,b in a)return b;return d}function Wb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=n._data(d,"olddisplay",Gb(d.nodeName)))):f[g]||(e=V(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Xb(a,b,c){var d=Qb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Yb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Zb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Jb(a),g=l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Kb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ib.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Yb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Kb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=Vb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Rb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]="",i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Vb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Kb(a,b,d)),"normal"===f&&b in Tb&&(f=Tb[b]),""===c||c?(e=parseFloat(f),c===!0||n.isNumeric(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&Pb.test(n.css(a,"display"))?n.swap(a,Sb,function(){return Zb(a,b,d)}):Zb(a,b,d):void 0},set:function(a,c,d){var e=d&&Jb(a);return Xb(a,c,d?Yb(a,b,d,l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Ob.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Nb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Nb.test(f)?f.replace(Nb,e):f+" "+e)}}),n.cssHooks.marginRight=Mb(l.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},Kb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Hb.test(a)||(n.cssHooks[a+b].set=Xb)}),n.fn.extend({css:function(a,b){return W(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Jb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)
},a,b,arguments.length>1)},show:function(){return Wb(this,!0)},hide:function(){return Wb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function $b(a,b,c,d,e){return new $b.prototype.init(a,b,c,d,e)}n.Tween=$b,$b.prototype={constructor:$b,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=$b.propHooks[this.prop];return a&&a.get?a.get(this):$b.propHooks._default.get(this)},run:function(a){var b,c=$b.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):$b.propHooks._default.set(this),this}},$b.prototype.init.prototype=$b.prototype,$b.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},$b.propHooks.scrollTop=$b.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=$b.prototype.init,n.fx.step={};var _b,ac,bc=/^(?:toggle|show|hide)$/,cc=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),dc=/queueHooks$/,ec=[jc],fc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=cc.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&cc.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function gc(){return setTimeout(function(){_b=void 0}),_b=n.now()}function hc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=U[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function ic(a,b,c){for(var d,e=(fc[b]||[]).concat(fc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function jc(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&V(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k=Gb(a.nodeName),"none"===j&&(j=k),"inline"===j&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==k?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],bc.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}if(!n.isEmptyObject(o)){r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=ic(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function kc(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function lc(a,b,c){var d,e,f=0,g=ec.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=_b||gc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:_b||gc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(kc(k,j.opts.specialEasing);g>f;f++)if(d=ec[f].call(j,a,k,j.opts))return d;return n.map(k,ic,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(lc,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],fc[c]=fc[c]||[],fc[c].unshift(b)},prefilter:function(a,b){b?ec.unshift(a):ec.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=lc(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&dc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(hc(b,!0),a,d,e)}}),n.each({slideDown:hc("show"),slideUp:hc("hide"),slideToggle:hc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(_b=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),_b=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ac||(ac=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(ac),ac=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e=z.createElement("div");e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=e.getElementsByTagName("a")[0],c=z.createElement("select"),d=c.appendChild(z.createElement("option")),b=e.getElementsByTagName("input")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==e.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=d.selected,l.enctype=!!z.createElement("form").enctype,c.disabled=!0,l.optDisabled=!d.disabled,b=z.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value,a=b=c=d=e=null}();var mc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(mc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.text(a)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var nc,oc,pc=n.expr.attrHandle,qc=/^(?:checked|selected)$/i,rc=l.getSetAttribute,sc=l.input;n.fn.extend({attr:function(a,b){return W(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===L?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?oc:nc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(F);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?sc&&rc||!qc.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(rc?c:d)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),oc={set:function(a,b,c){return b===!1?n.removeAttr(a,c):sc&&rc||!qc.test(c)?a.setAttribute(!rc&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=pc[b]||n.find.attr;pc[b]=sc&&rc||!qc.test(b)?function(a,b,d){var e,f;return d||(f=pc[b],pc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,pc[b]=f),e}:function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),sc&&rc||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):nc&&nc.set(a,b,c)}}),rc||(nc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},pc.id=pc.name=pc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:nc.set},n.attrHooks.contenteditable={set:function(a,b,c){nc.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var tc=/^(?:input|select|textarea|button|object)$/i,uc=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return W(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):tc.test(a.nodeName)||uc.test(a.nodeName)&&a.href?0:-1}}}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var vc=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(F)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===L||"boolean"===c)&&(this.className&&n._data(this,"__className__",this.className),this.className=this.className||a===!1?"":n._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(vc," ").indexOf(b)>=0)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var wc=n.now(),xc=/\?/,yc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(yc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var zc,Ac,Bc=/#.*$/,Cc=/([?&])_=[^&]*/,Dc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ec=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Fc=/^(?:GET|HEAD)$/,Gc=/^\/\//,Hc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ic={},Jc={},Kc="*/".concat("*");try{Ac=location.href}catch(Lc){Ac=z.createElement("a"),Ac.href="",Ac=Ac.href}zc=Hc.exec(Ac.toLowerCase())||[];function Mc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(F)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nc(a,b,c,d){var e={},f=a===Jc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Oc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Pc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Qc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ac,type:"GET",isLocal:Ec.test(zc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Oc(Oc(a,n.ajaxSettings),b):Oc(n.ajaxSettings,a)},ajaxPrefilter:Mc(Ic),ajaxTransport:Mc(Jc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Dc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||Ac)+"").replace(Bc,"").replace(Gc,zc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(F)||[""],null==k.crossDomain&&(c=Hc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===zc[1]&&c[2]===zc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(zc[3]||("http:"===zc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),Nc(Ic,k,b,v),2===t)return v;h=k.global,h&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Fc.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(xc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Cc.test(e)?e.replace(Cc,"$1_="+wc++):e+(xc.test(e)?"&":"?")+"_="+wc++)),k.ifModified&&(n.lastModified[e]&&v.setRequestHeader("If-Modified-Since",n.lastModified[e]),n.etag[e]&&v.setRequestHeader("If-None-Match",n.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Kc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Nc(Jc,k,b,v)){v.readyState=1,h&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Pc(k,v,c)),u=Qc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(n.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!l.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||n.css(a,"display"))},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Rc=/%20/g,Sc=/\[\]$/,Tc=/\r?\n/g,Uc=/^(?:submit|button|image|reset|file)$/i,Vc=/^(?:input|select|textarea|keygen)/i;function Wc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Sc.test(a)?d(a,e):Wc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Wc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Wc(c,a[c],b,e);return d.join("&").replace(Rc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Vc.test(this.nodeName)&&!Uc.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Tc,"\r\n")}}):{name:b.name,value:c.replace(Tc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&$c()||_c()}:$c;var Xc=0,Yc={},Zc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Yc)Yc[a](void 0,!0)}),l.cors=!!Zc&&"withCredentials"in Zc,Zc=l.ajax=!!Zc,Zc&&n.ajaxTransport(function(a){if(!a.crossDomain||l.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Xc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Yc[g],b=void 0,f.onreadystatechange=n.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Yc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function $c(){try{return new a.XMLHttpRequest}catch(b){}}function _c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=z.head||n("head")[0]||z.documentElement;return{send:function(d,e){b=z.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ad=[],bd=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ad.pop()||n.expando+"_"+wc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(bd.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&bd.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(bd,"$1"+e):b.jsonp!==!1&&(b.url+=(xc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ad.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||z;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var cd=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&cd)return cd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h,a.length),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&n.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var dd=a.document.documentElement;function ed(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?(typeof e.getBoundingClientRect!==L&&(d=e.getBoundingClientRect()),c=ed(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||dd;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||dd})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return W(this,function(a,d,e){var f=ed(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Mb(l.pixelPosition,function(a,c){return c?(c=Kb(a,b),Ib.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return W(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var fd=a.jQuery,gd=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=gd),b&&a.jQuery===n&&(a.jQuery=fd),n},typeof b===L&&(a.jQuery=a.$=n),n});

!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function(e){function t(t){var s=t||window.event,a=h.call(arguments,1),u=0,r=0,d=0,f=0;if(t=e.event.fix(s),t.type="mousewheel","detail"in s&&(d=-1*s.detail),"wheelDelta"in s&&(d=s.wheelDelta),"wheelDeltaY"in s&&(d=s.wheelDeltaY),"wheelDeltaX"in s&&(r=-1*s.wheelDeltaX),"axis"in s&&s.axis===s.HORIZONTAL_AXIS&&(r=-1*d,d=0),u=0===d?r:d,"deltaY"in s&&(d=-1*s.deltaY,u=d),"deltaX"in s&&(r=s.deltaX,0===d&&(u=-1*r)),0!==d||0!==r){if(1===s.deltaMode){var c=e.data(this,"mousewheel-line-height");u*=c,d*=c,r*=c}else if(2===s.deltaMode){var m=e.data(this,"mousewheel-page-height");u*=m,d*=m,r*=m}return f=Math.max(Math.abs(d),Math.abs(r)),(!l||l>f)&&(l=f,i(s,f)&&(l/=40)),i(s,f)&&(u/=40,r/=40,d/=40),u=Math[u>=1?"floor":"ceil"](u/l),r=Math[r>=1?"floor":"ceil"](r/l),d=Math[d>=1?"floor":"ceil"](d/l),t.deltaX=r,t.deltaY=d,t.deltaFactor=l,t.deltaMode=0,a.unshift(t,u,r,d),o&&clearTimeout(o),o=setTimeout(n,200),(e.event.dispatch||e.event.handle).apply(this,a)}}function n(){l=null}function i(e,t){return r.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120===0}var o,l,s=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],a="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],h=Array.prototype.slice;if(e.event.fixHooks)for(var u=s.length;u;)e.event.fixHooks[s[--u]]=e.event.mouseHooks;var r=e.event.special.mousewheel={version:"3.1.9",setup:function(){if(this.addEventListener)for(var n=a.length;n;)this.addEventListener(a[--n],t,!1);else this.onmousewheel=t;e.data(this,"mousewheel-line-height",r.getLineHeight(this)),e.data(this,"mousewheel-page-height",r.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var e=a.length;e;)this.removeEventListener(a[--e],t,!1);else this.onmousewheel=null},getLineHeight:function(t){return parseInt(e(t)["offsetParent"in e.fn?"offsetParent":"parent"]().css("fontSize"),10)},getPageHeight:function(t){return e(t).height()},settings:{adjustOldDeltas:!0}};e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})});

jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(n,e,t,u,a){return jQuery.easing[jQuery.easing.def](n,e,t,u,a)},easeInQuad:function(n,e,t,u,a){return u*(e/=a)*e+t},easeOutQuad:function(n,e,t,u,a){return-u*(e/=a)*(e-2)+t},easeInOutQuad:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e+t:-u/2*(--e*(e-2)-1)+t},easeInCubic:function(n,e,t,u,a){return u*(e/=a)*e*e+t},easeOutCubic:function(n,e,t,u,a){return u*((e=e/a-1)*e*e+1)+t},easeInOutCubic:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e+t:u/2*((e-=2)*e*e+2)+t},easeInQuart:function(n,e,t,u,a){return u*(e/=a)*e*e*e+t},easeOutQuart:function(n,e,t,u,a){return-u*((e=e/a-1)*e*e*e-1)+t},easeInOutQuart:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e*e+t:-u/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(n,e,t,u,a){return u*(e/=a)*e*e*e*e+t},easeOutQuint:function(n,e,t,u,a){return u*((e=e/a-1)*e*e*e*e+1)+t},easeInOutQuint:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e*e*e+t:u/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(n,e,t,u,a){return-u*Math.cos(e/a*(Math.PI/2))+u+t},easeOutSine:function(n,e,t,u,a){return u*Math.sin(e/a*(Math.PI/2))+t},easeInOutSine:function(n,e,t,u,a){return-u/2*(Math.cos(Math.PI*e/a)-1)+t},easeInExpo:function(n,e,t,u,a){return 0==e?t:u*Math.pow(2,10*(e/a-1))+t},easeOutExpo:function(n,e,t,u,a){return e==a?t+u:u*(-Math.pow(2,-10*e/a)+1)+t},easeInOutExpo:function(n,e,t,u,a){return 0==e?t:e==a?t+u:(e/=a/2)<1?u/2*Math.pow(2,10*(e-1))+t:u/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(n,e,t,u,a){return-u*(Math.sqrt(1-(e/=a)*e)-1)+t},easeOutCirc:function(n,e,t,u,a){return u*Math.sqrt(1-(e=e/a-1)*e)+t},easeInOutCirc:function(n,e,t,u,a){return(e/=a/2)<1?-u/2*(Math.sqrt(1-e*e)-1)+t:u/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(1==(e/=a))return t+u;if(i||(i=.3*a),s<Math.abs(u)){s=u;var r=i/4}else var r=i/(2*Math.PI)*Math.asin(u/s);return-(s*Math.pow(2,10*(e-=1))*Math.sin(2*(e*a-r)*Math.PI/i))+t},easeOutElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(1==(e/=a))return t+u;if(i||(i=.3*a),s<Math.abs(u)){s=u;var r=i/4}else var r=i/(2*Math.PI)*Math.asin(u/s);return s*Math.pow(2,-10*e)*Math.sin(2*(e*a-r)*Math.PI/i)+u+t},easeInOutElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(2==(e/=a/2))return t+u;if(i||(i=.3*a*1.5),s<Math.abs(u)){s=u;var r=i/4}else var r=i/(2*Math.PI)*Math.asin(u/s);return 1>e?-.5*s*Math.pow(2,10*(e-=1))*Math.sin(2*(e*a-r)*Math.PI/i)+t:s*Math.pow(2,-10*(e-=1))*Math.sin(2*(e*a-r)*Math.PI/i)*.5+u+t},easeInBack:function(n,e,t,u,a,r){return void 0==r&&(r=1.70158),u*(e/=a)*e*((r+1)*e-r)+t},easeOutBack:function(n,e,t,u,a,r){return void 0==r&&(r=1.70158),u*((e=e/a-1)*e*((r+1)*e+r)+1)+t},easeInOutBack:function(n,e,t,u,a,r){return void 0==r&&(r=1.70158),(e/=a/2)<1?u/2*e*e*(((r*=1.525)+1)*e-r)+t:u/2*((e-=2)*e*(((r*=1.525)+1)*e+r)+2)+t},easeInBounce:function(n,e,t,u,a){return u-jQuery.easing.easeOutBounce(n,a-e,0,u,a)+t},easeOutBounce:function(n,e,t,u,a){return(e/=a)<1/2.75?7.5625*u*e*e+t:2/2.75>e?u*(7.5625*(e-=1.5/2.75)*e+.75)+t:2.5/2.75>e?u*(7.5625*(e-=2.25/2.75)*e+.9375)+t:u*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(n,e,t,u,a){return a/2>e?.5*jQuery.easing.easeInBounce(n,2*e,0,u,a)+t:.5*jQuery.easing.easeOutBounce(n,2*e-a,0,u,a)+.5*u+t}});

/** -------------- JQuery Color Animations ---------------------*/

!function(r,n){function t(r,n,t){var e=f[n.type]||{};return null==r?t||!n.def?null:n.def:(r=e.floor?~~r:parseFloat(r),isNaN(r)?n.def:e.mod?(r+e.mod)%e.mod:0>r?0:e.max<r?e.max:r)}function e(n){var t=l(),e=t._rgba=[];return n=n.toLowerCase(),h(u,function(r,o){var a,s=o.re.exec(n),i=s&&o.parse(s),u=o.space||"rgba";return i?(a=t[u](i),t[c[u].cache]=a[c[u].cache],e=t._rgba=a._rgba,!1):void 0}),e.length?("0,0,0,0"===e.join()&&r.extend(e,a.transparent),t):a[n]}function o(r,n,t){return t=(t+1)%1,1>6*t?r+(n-r)*t*6:1>2*t?n:2>3*t?r+(n-r)*(2/3-t)*6:r}var a,s="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",i=/^([\-+])=\s*(\d+\.?\d*)/,u=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(r){return[r[1],r[2],r[3],r[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(r){return[2.55*r[1],2.55*r[2],2.55*r[3],r[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(r){return[parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(r){return[parseInt(r[1]+r[1],16),parseInt(r[2]+r[2],16),parseInt(r[3]+r[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(r){return[r[1],r[2]/100,r[3]/100,r[4]]}}],l=r.Color=function(n,t,e,o){return new r.Color.fn.parse(n,t,e,o)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},f={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},p=l.support={},d=r("<p>")[0],h=r.each;d.style.cssText="background-color:rgba(1,1,1,.5)",p.rgba=d.style.backgroundColor.indexOf("rgba")>-1,h(c,function(r,n){n.cache="_"+r,n.props.alpha={idx:3,type:"percent",def:1}}),l.fn=r.extend(l.prototype,{parse:function(o,s,i,u){if(o===n)return this._rgba=[null,null,null,null],this;(o.jquery||o.nodeType)&&(o=r(o).css(s),s=n);var f=this,p=r.type(o),d=this._rgba=[];return s!==n&&(o=[o,s,i,u],p="array"),"string"===p?this.parse(e(o)||a._default):"array"===p?(h(c.rgba.props,function(r,n){d[n.idx]=t(o[n.idx],n)}),this):"object"===p?(o instanceof l?h(c,function(r,n){o[n.cache]&&(f[n.cache]=o[n.cache].slice())}):h(c,function(n,e){var a=e.cache;h(e.props,function(r,n){if(!f[a]&&e.to){if("alpha"===r||null==o[r])return;f[a]=e.to(f._rgba)}f[a][n.idx]=t(o[r],n,!0)}),f[a]&&r.inArray(null,f[a].slice(0,3))<0&&(f[a][3]=1,e.from&&(f._rgba=e.from(f[a])))}),this):void 0},is:function(r){var n=l(r),t=!0,e=this;return h(c,function(r,o){var a,s=n[o.cache];return s&&(a=e[o.cache]||o.to&&o.to(e._rgba)||[],h(o.props,function(r,n){return null!=s[n.idx]?t=s[n.idx]===a[n.idx]:void 0})),t}),t},_space:function(){var r=[],n=this;return h(c,function(t,e){n[e.cache]&&r.push(t)}),r.pop()},transition:function(r,n){var e=l(r),o=e._space(),a=c[o],s=0===this.alpha()?l("transparent"):this,i=s[a.cache]||a.to(s._rgba),u=i.slice();return e=e[a.cache],h(a.props,function(r,o){var a=o.idx,s=i[a],l=e[a],c=f[o.type]||{};null!==l&&(null===s?u[a]=l:(c.mod&&(l-s>c.mod/2?s+=c.mod:s-l>c.mod/2&&(s-=c.mod)),u[a]=t((l-s)*n+s,o)))}),this[o](u)},blend:function(n){if(1===this._rgba[3])return this;var t=this._rgba.slice(),e=t.pop(),o=l(n)._rgba;return l(r.map(t,function(r,n){return(1-e)*o[n]+e*r}))},toRgbaString:function(){var n="rgba(",t=r.map(this._rgba,function(r,n){return null==r?n>2?1:0:r});return 1===t[3]&&(t.pop(),n="rgb("),n+t.join()+")"},toHslaString:function(){var n="hsla(",t=r.map(this.hsla(),function(r,n){return null==r&&(r=n>2?1:0),n&&3>n&&(r=Math.round(100*r)+"%"),r});return 1===t[3]&&(t.pop(),n="hsl("),n+t.join()+")"},toHexString:function(n){var t=this._rgba.slice(),e=t.pop();return n&&t.push(~~(255*e)),"#"+r.map(t,function(r){return r=(r||0).toString(16),1===r.length?"0"+r:r}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,c.hsla.to=function(r){if(null==r[0]||null==r[1]||null==r[2])return[null,null,null,r[3]];var n,t,e=r[0]/255,o=r[1]/255,a=r[2]/255,s=r[3],i=Math.max(e,o,a),u=Math.min(e,o,a),l=i-u,c=i+u,f=.5*c;return n=u===i?0:e===i?60*(o-a)/l+360:o===i?60*(a-e)/l+120:60*(e-o)/l+240,t=0===l?0:.5>=f?l/c:l/(2-c),[Math.round(n)%360,t,f,null==s?1:s]},c.hsla.from=function(r){if(null==r[0]||null==r[1]||null==r[2])return[null,null,null,r[3]];var n=r[0]/360,t=r[1],e=r[2],a=r[3],s=.5>=e?e*(1+t):e+t-e*t,i=2*e-s;return[Math.round(255*o(i,s,n+1/3)),Math.round(255*o(i,s,n)),Math.round(255*o(i,s,n-1/3)),a]},h(c,function(e,o){var a=o.props,s=o.cache,u=o.to,c=o.from;l.fn[e]=function(e){if(u&&!this[s]&&(this[s]=u(this._rgba)),e===n)return this[s].slice();var o,i=r.type(e),f="array"===i||"object"===i?e:arguments,p=this[s].slice();return h(a,function(r,n){var e=f["object"===i?r:n.idx];null==e&&(e=p[n.idx]),p[n.idx]=t(e,n)}),c?(o=l(c(p)),o[s]=p,o):l(p)},h(a,function(n,t){l.fn[n]||(l.fn[n]=function(o){var a,s=r.type(o),u="alpha"===n?this._hsla?"hsla":"rgba":e,l=this[u](),c=l[t.idx];return"undefined"===s?c:("function"===s&&(o=o.call(this,c),s=r.type(o)),null==o&&t.empty?this:("string"===s&&(a=i.exec(o),a&&(o=c+parseFloat(a[2])*("+"===a[1]?1:-1))),l[t.idx]=o,this[u](l)))})})}),l.hook=function(n){var t=n.split(" ");h(t,function(n,t){r.cssHooks[t]={set:function(n,o){var a,s,i="";if("transparent"!==o&&("string"!==r.type(o)||(a=e(o)))){if(o=l(a||o),!p.rgba&&1!==o._rgba[3]){for(s="backgroundColor"===t?n.parentNode:n;(""===i||"transparent"===i)&&s&&s.style;)try{i=r.css(s,"backgroundColor"),s=s.parentNode}catch(u){}o=o.blend(i&&"transparent"!==i?i:"_default")}o=o.toRgbaString()}try{n.style[t]=o}catch(u){}}},r.fx.step[t]=function(n){n.colorInit||(n.start=l(n.elem,t),n.end=l(n.end),n.colorInit=!0),r.cssHooks[t].set(n.elem,n.start.transition(n.end,n.pos))}})},l.hook(s),r.cssHooks.borderColor={expand:function(r){var n={};return h(["Top","Right","Bottom","Left"],function(t,e){n["border"+e+"Color"]=r}),n}},a=r.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery);


!function(t){function e(){var i=this===document?t(this):t(this).contents();i.mousemove(function(e){t.mlp={x:e.pageX,y:e.pageY}}),i.find("iframe").load(e)}t.mlp={x:0,y:0},t(e),t.fn.ismouseover=function(){var e=!1;return this.eq(0).each(function(){var i=t(this).is("iframe")?t(this).contents().find("body"):t(this),n=i.offset();e=n.left<=t.mlp.x&&n.left+i.outerWidth()>t.mlp.x&&n.top<=t.mlp.y&&n.top+i.outerHeight()>t.mlp.y}),e}}(jQuery);


function debugLine(html,addRandom, addHtml){
	
	if(html === true)
		html = "true";
	
	if(html === false)
		html = "false";		
	
	var output = html;
	
	if(typeof html == "object"){
		output = "";
		for(name in html){
			var value = html[name];
			output += " " + name + ": " + value;
		}
	}
	
	if(addRandom == true && !addHtml)
		output += " " + Math.random();	
	
	if(addHtml == true){
		var objLine = jQuery("#debug_line");
		objLine.width(200);
		
		if(objLine.height() >= 500)
			objLine.html("");
		
		var currentHtml = objLine.html();
		output = currentHtml + "<br> -------------- <br>" + output;		
	}
	
	jQuery("#debug_line").show().html(output);		
		
}

function debugSide(obj){
	
	var html = "";
	for(name in obj){
		var value = obj[name];
		html += name+" : " + value + "<br>";		
	}
	
	jQuery("#debug_side").show().html(html);

}

function trace(str){
	
	if(typeof console != "undefined")
		console.log(str);
}

function UGFunctions(){
	
	var g_browserPrefix = null;	
	var t = this;
	var g_temp = {
		starTime:0,
		arrThemes:[],
		isTouchDevice:-1,
		timeCache:{},
		dataCache:{},
		lastEventType:"",	
		lastEventTime:0,
		handle: null
	};

	this.z__________FULL_SCREEN___________ = function(){}

	this.normalizePercent = function(percent){
		
		if(percent < 0)
			percent = 0;
		
		if(percent > 1)
			percent = 1;
		
		return(percent);
	}
	
	this.toFullscreen = function(element) {
		
		  if(element.requestFullscreen) {
		    element.requestFullscreen();
		  } else if(element.mozRequestFullScreen) {
		    element.mozRequestFullScreen();
		  } else if(element.webkitRequestFullscreen) {
		    element.webkitRequestFullscreen(); 
		  }
		  else{
			  return(false);
		  }
		  
		  return(true);
	}	

	this.exitFullscreen = function() {
		  if(t.isFullScreen() == false)
			  return(false);
			  
		  if(document.exitFullscreen) {
		    document.exitFullscreen();
		  } else if(document.mozCancelFullScreen) {
		    document.mozCancelFullScreen();
		  } else if(document.webkitExitFullscreen) {
		    document.webkitExitFullscreen();
		  }else{
			  return(false);
		  }
		  
		  return(true);
	}	

	function addEvent(evnt, elem, func) {
		   if (elem.addEventListener)  // W3C DOM
		      elem.addEventListener(evnt,func,false);
		   else if (elem.attachEvent) { // IE DOM
		      elem.attachEvent("on"+evnt, func);
		   }
		   else { // No much to do
		      elem[evnt] = func;
		   }
	}

	this.addFullScreenChangeEvent = function(func){
				
		addEvent("fullscreenchange",document,func);		 
		addEvent("mozfullscreenchange",document,func);
		addEvent("webkitfullscreenchange",document,func);
		addEvent("msfullscreenchange",document,func);
	}
	
	this.getFullScreenElement = function(){
		
		var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
		
		return(fullscreenElement);
	}

	this.isFullScreen = function(){
		
		var isFullScreen = document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement;

		if(!isFullScreen)
			isFullScreen = false;
		
		return(isFullScreen);
	}
	
	this.z__________END_FULL_SCREEN___________ = function(){}
	
	this.z__________GET_PROPS___________ = function(){}

	this.getBrowserPrefix = function(){
		
	   if(g_browserPrefix !== null)
		   return g_browserPrefix;
				
	   var arrayOfPrefixes = ['webkit','Moz','ms','O'];
	   
	   var div = document.createElement("div");
	   
	   for(var index in arrayOfPrefixes){
		   var prefix = arrayOfPrefixes[index];
		   
		   if(prefix+"Transform" in div.style){
			   prefix = prefix.toLowerCase();
			   g_browserPrefix = prefix;
			   return(prefix);
		   }
	   }
	   
	   g_browserPrefix = "";
	   return "";
	}

	this.getImageInsideParentDataByImage = function(objImage, scaleMode, objPadding){
		
		var objParent = objImage.parent();
		
		var objOrgSize = t.getImageOriginalSize(objImage);
		
		var objData = t.getImageInsideParentData(objParent, objOrgSize.width, objOrgSize.height, scaleMode, objPadding);
		
		return(objData);
	}
	
	this.getImageInsideParentData = function(objParent, originalWidth, originalHeight, scaleMode, objPadding){
		
		if(!objPadding)
			var objPadding = {};

		var objOutput = {};
				
		var maxWidth = objParent.width();
		var maxHeight = objParent.height();
		
		if(objPadding.padding_left)
			maxWidth -= objPadding.padding_left;
		
		if(objPadding.padding_right)
			maxWidth -= objPadding.padding_right;
		
		if(objPadding.padding_top)
			maxHeight -= objPadding.padding_top;
		
		if(objPadding.padding_bottom)
			maxHeight -= objPadding.padding_bottom;
		
		var imageWidth = null;
		var imageHeight = "100%";
		var imageTop = null;
		var imageLeft = null;		
		var style = "display:block;margin:0px auto;";
		
		if(originalWidth > 0 && originalHeight > 0){

			if(scaleMode == "down" && originalWidth < maxWidth && originalHeight < maxHeight){				
			
				imageHeight = originalHeight;
				imageWidth = originalWidth;
				imageLeft = (maxWidth - imageWidth) / 2;
				imageTop = (maxHeight - imageHeight) / 2;
				
			}else if(scaleMode == "fill"){
				var ratio = originalWidth / originalHeight;
				
				imageHeight = maxHeight;
				imageWidth = imageHeight * ratio;
								
				if(imageWidth < maxWidth){
					imageWidth = maxWidth;
					imageHeight = imageWidth / ratio;

					imageLeft = 0;
					imageTop = Math.round((imageHeight - maxHeight) / 2 * -1);
				}else{	
					imageTop = 0;
					imageLeft = Math.round((imageWidth - maxWidth) / 2 * -1);
				}
								
			}
			else{	
				var ratio = originalWidth / originalHeight;
				imageHeight = maxHeight;
				imageWidth = imageHeight * ratio;
				imageTop = 0;
				imageLeft = (maxWidth - imageWidth) / 2;
				
				if(imageWidth > maxWidth){
					imageWidth = maxWidth;
					imageHeight = imageWidth / ratio;
					imageLeft = 0;
					imageTop = (maxHeight - imageHeight) / 2;
				}
				
			}
			
			imageWidth = Math.floor(imageWidth);
			imageHeight = Math.floor(imageHeight);
			
			imageTop = Math.floor(imageTop);
			imageLeft = Math.floor(imageLeft);
			
			style="position:absolute;";
		}
		
		if(objPadding.padding_top)
			imageTop += objPadding.padding_top;
		
		if(objPadding.padding_left)
			imageLeft += objPadding.padding_left;
		
		objOutput.imageWidth = imageWidth;
		objOutput.imageHeight = imageHeight;
		objOutput.imageTop = imageTop;
		objOutput.imageLeft = imageLeft;
		objOutput.imageRight = imageLeft + imageWidth;
		if(imageTop == 0 || imageHeight == "100%")
			objOutput.imageBottom = null;
		else
			objOutput.imageBottom = imageTop + imageHeight;
		
		objOutput.style = style;
		
		return(objOutput);		
	}

	this.getElementCenterPosition = function(element, objPadding){
		
		var parent = element.parent();
		var objSize = t.getElementSize(element);
		var objSizeParent = t.getElementSize(parent);
		
		var parentWidth = objSizeParent.width;
		var parentHeight = objSizeParent.height;
		
		if(objPadding && objPadding.padding_top !== undefined)
			parentHeight -= objPadding.padding_top;
		
		if(objPadding && objPadding.padding_bottom !== undefined)
			parentHeight -= objPadding.padding_bottom;
		
		if(objPadding && objPadding.padding_left !== undefined)
			parentWidth -= objPadding.padding_left;
		
		if(objPadding && objPadding.padding_right !== undefined)
			parentWidth -= objPadding.padding_right;
		
		
		var output = {};
		output.left = Math.round((parentWidth - objSize.width) / 2);
		output.top = Math.round((parentHeight - objSize.height) / 2);
		
		if(objPadding && objPadding.padding_top !== undefined)
			output.top += objPadding.padding_top;
		
		if(objPadding && objPadding.padding_left !== undefined)
			output.left += objPadding.padding_left;
		
		
		return(output);
	}

	this.getElementCenterPoint = function(element, includeParent){
		
		if(!includeParent)
			var includeParent = false;
		
		var objSize = t.getElementSize(element);
		var output = {};
		
		output.x =  objSize.width / 2;
		output.y =  objSize.height / 2;
		
		if(includeParent == true){
			output.x += objSize.left;
			output.y += objSize.top;
		}
		
		output.x = Math.round(output.x);
		output.y = Math.round(output.y);
		
		return(output);
	}
	
	this.getMousePosition = function(event, element){
		
		var output = {
			pageX: 	event.pageX,
			pageY: 	event.pageY
		};
		
		if(event.originalEvent && event.originalEvent.touches && event.originalEvent.touches.length > 0){
			output.pageX = event.originalEvent.touches[0].pageX;
			output.pageY = event.originalEvent.touches[0].pageY;
		}

		if(element){
			var elementPos = element.offset();
						
			output.mouseX = output.pageX - elementPos.left;
			output.mouseY = output.pageY - elementPos.top;
		}
		
		return(output);
	}

	this.getMouseElementPoint = function(point, element){

		var newPoint = {x: point.pageX, y: point.pageY};
		
		var elementPoint = t.getElementLocalPoint(newPoint, element);
		
		return(elementPoint);
	}

	this.getElementLocalPoint = function(point, element){
		
		var elementPoint = {};
		var elementPos = element.offset();
		
		elementPoint.x = Math.round(point.x - elementPos.left);
		elementPoint.y = Math.round(point.y - elementPos.top);
		
		return(elementPoint);
	}

	this.getImageOriginalSize = function(objImage){
		
		var htmlImage = objImage[0];
		
		var output = {};
		output.width = htmlImage.naturalWidth;
		output.height = htmlImage.naturalHeight;
		
		return(output);
	}

	this.getimageRatio = function(objImage){
		
		var originalSize = t.getImageOriginalSize(objImage);
		var size = t.getElementSize(objImage);
		var ratio = size.width / originalSize.width;
		
		return(ratio);
	}

	this.isImageFitParent = function(objImage){
		var objParent = objImage.parent();
		var sizeImage = t.getElementSize(objImage);
		var sizeParent = t.getElementSize(objParent);
		
		if(sizeImage.width <= sizeParent.width && sizeImage.height <= sizeParent.height)
			return(true);
		
		return(false);
	}

	this.getElementSize = function(element){
				
		var obj = element.position();
		
		if(obj == undefined){
			throw new Error("Can't get size, empty element");
		}
				
		obj.height = element.outerHeight();
		obj.width = element.outerWidth();
		
		obj.left = Math.round(obj.left);
		obj.top = Math.round(obj.top);
		
		obj.right = obj.left + obj.width;
		obj.bottom = obj.top + obj.height;
		
		return(obj);		
	}

	this.isElementBiggerThenParent = function(element){
		
		var objParent = element.parent();
		var objSizeElement = t.getElementSize(element);
		var objSizeParent = t.getElementSize(objParent);
		
		if(objSizeElement.width > objSizeParent.width || objSizeElement.height > objSizeParent.height)
			return(true);
		
		return(false);
	}

	this.isPointInsideElement = function(point, objSize){
		
		var isMouseXInside = (point.x >= 0 && point.x < objSize.width);
		if(isMouseXInside == false)
			return(false);
		
		var isMouseYInside = (point.y >= 0 && point.y < objSize.height);
		if(isMouseYInside == false)
			return(false);
		
		return(true);
	}

	this.getElementRelativePos = function(element, pos, offset, objParent){
		
		if(!objParent)
			var objParent = element.parent();
		
		var elementSize = t.getElementSize(element);
		var parentSize = t.getElementSize(objParent);
		
		switch(pos){
			case "top":
			case "left":
				pos = 0;
				if(offset)
					pos += offset;
			break;
			case "center":
				pos = Math.round((parentSize.width - elementSize.width) / 2);
				if(offset)
					pos += offset;
			break;
			case "right":
				pos = parentSize.width - elementSize.width;
				if(offset)
					pos -= offset;
			break;
			case "middle":
				pos = Math.round((parentSize.height - elementSize.height) / 2);
				if(offset)
					pos += offset;
			break;
			case "bottom":
				pos = parentSize.height - elementSize.height;
				if(offset)
					pos -= offset;
			break;
		}
		
		return(pos);
	}
	
	
	this.z__________END_GET_PROPS___________ = function(){}
	
	
	this.z_________SET_ELEMENT_PROPS_______ = function(){}

	this.zoomImageInsideParent = function(objImage, zoomIn, step, point, scaleMode, maxZoomRatio, objPadding){
		
		if(!step)
			var step = 1.2;
		
		if(!scaleMode)
			var scaleMode = "fit";
		
		var zoomRatio = step;
		
		var objParent = objImage.parent();		
		
		var objSize = t.getElementSize(objImage);
		var objOriginalSize = t.getImageOriginalSize(objImage);
		
		
		var isMouseInside = false;
		var newHeight,newWidth, panX = 0, panY = 0, newX, newY,panOrientX = 0, panOrientY = 0;
		
		if(!point){
			isMouseInside = false;
		}else{
			var pointImg = t.getMouseElementPoint(point, objImage);				
			isMouseInside = t.isPointInsideElement(pointImg, objSize);

			panOrientX = pointImg.x;
			panOrientY = pointImg.y;
		}
				
		if(isMouseInside == false){
			var imgCenterPoint = t.getElementCenterPoint(objImage);
			panOrientX = imgCenterPoint.x;
			panOrientY = imgCenterPoint.y;
		}

		if(zoomIn == true){	
			
			newHeight = objSize.height * zoomRatio;
			newWidth =  objSize.width * zoomRatio;
			
			if(panOrientX != 0)
				panX = -(panOrientX * zoomRatio - panOrientX);
			
			if(panOrientY != 0)
				panY = -(panOrientY * zoomRatio - panOrientY);
			
			
		}else{	
			
			newHeight = objSize.height / zoomRatio;
			newWidth =  objSize.width / zoomRatio;
			
			var objScaleData = t.getImageInsideParentData(objParent, objOriginalSize.width, objOriginalSize.height, scaleMode, objPadding);

			if(newWidth < objScaleData.imageWidth){
				
				t.scaleImageFitParent(objImage, objOriginalSize.width, objOriginalSize.height, scaleMode, objPadding);
				return(true);
			}
			
			if(isMouseInside == true){
				if(panOrientX != 0)
					panX = -(panOrientX / zoomRatio - panOrientX);
				
				if(panOrientY != 0)			
					panY = -(panOrientY / zoomRatio - panOrientY);
			}
			
		}

		if(maxZoomRatio){
			var expectedZoomRatio = 1;
			if(objOriginalSize.width != 0)
				expectedZoomRatio = newWidth / objOriginalSize.width;
			
			if(expectedZoomRatio > maxZoomRatio)
				return(false);
		}

		t.setElementSize(objImage, newWidth, newHeight);

		if(zoomIn == false && isMouseInside == false){
			var posCenter = t.getElementCenterPosition(objImage);
			newX = posCenter.left;
			newY = posCenter.top;
		}else{
			
			newX = objSize.left + panX;
			newY = objSize.top + panY;
		}
		
		t.placeElement(objImage, newX, newY);
		
		return(true);
	}
	
	this.placeElement = function(element, left, top, offsetLeft, offsetTop, objParent){
		
		
		if(jQuery.isNumeric(left) == false || jQuery.isNumeric(top) == false){
			
			if(!objParent)
				var objParent = element.parent();
			
			var elementSize = t.getElementSize(element);
			var parentSize = t.getElementSize(objParent);
		}

		if(jQuery.isNumeric(left) == false){
			
			switch(left){
				case "left":
					left = 0;
					if(offsetLeft)
						left += offsetLeft;
				break;
				case "center":
					left = Math.round((parentSize.width - elementSize.width) / 2);
					if(offsetLeft)
						left += offsetLeft;
				break;
				case "right":
					left = parentSize.width - elementSize.width;
					if(offsetLeft)
						left -= offsetLeft;
				break;
			}
		}

		if(jQuery.isNumeric(top) == false){
			
			switch(top){
				case "top":
					top = 0;
					if(offsetTop)
						top += offsetTop;
				break;
				case "middle":
				case "center":
					top = Math.round((parentSize.height - elementSize.height) / 2);
					if(offsetTop)
						top += offsetTop;
				break;
				case "bottom":
					top = parentSize.height - elementSize.height;
					if(offsetTop)
						top -= offsetTop;
				break;
			}
			
		}
		
		
		var objCss = {
				"position":"absolute",
				"margin":"0px"				
		};
		
		if(left !== null)
			objCss.left = left;
		
		if(top !== null)
			objCss.top = top;
				
		element.css(objCss);		
	}

	this.placeElementInParentCenter = function(element){
				
		t.placeElement(element, "center", "middle");
	}

	this.setElementSizeAndPosition = function(element,left,top,width,height){
		
		var objCss = {
			"width":width+"px",
			"height":height+"px",
			"left":left+"px",
			"top":top+"px",
			"position":"absolute",
			"margin":"0px"
		}
		
		element.css(objCss);
	}

	this.setElementSize = function(element, width, height){
			
	    var objCss = {
			"width":width+"px",
			"height":height+"px"
		}
		
		element.css(objCss);	
	
	}

	this.cloneElementSizeAndPos = function(objSource, objTarget, isOuter, offsetX, offsetY){
		
		var objSize = objSource.position();
		
		if(objSize == undefined){
			throw new Error("Can't get size, empty element");
		}
		
		if(isOuter === true){
			objSize.height = objSource.outerHeight();
			objSize.width = objSource.outerWidth();
		}else{
			objSize.height = objSource.height();
			objSize.width = objSource.width();
		}
		
		objSize.left = Math.round(objSize.left);
		objSize.top = Math.round(objSize.top);
		
		if(offsetX)
			objSize.left += offsetX;
		
		if(offsetY)
			objSize.top += offsetY;
		
		t.setElementSizeAndPosition(objTarget, objSize.left, objSize.top, objSize.width, objSize.height);
	}
	
	this.placeImageInsideParent = function(urlImage, objParent, originalWidth, originalHeight, scaleMode, objPadding){
		var obj = t.getImageInsideParentData(objParent, originalWidth, originalHeight, scaleMode, objPadding);

		var htmlImage = "<img";
		
		if(obj.imageWidth !== null){
			htmlImage += " width = '" + obj.imageWidth + "'";
			obj.style += "width:" + obj.imageWidth + ";";
		}
		
		if(obj.imageHeight != null){
			
			if(obj.imageHeight == "100%"){
				htmlImage += " height = '" + obj.imageHeight+"'";
				obj.style += "height:" + obj.imageHeight+";";				
			}else{
				htmlImage += " height = '" + obj.imageHeight + "'";
				obj.style += "height:" + obj.imageHeight + "px;";				
			}
			
		}
		
		if(obj.imageTop !== null)
			obj.style += "top:"+obj.imageTop+"px;";
		
		if(obj.imageLeft !== null){
			obj.style += "left:"+obj.imageLeft+"px;";
		}
				
		htmlImage += " style='"+obj.style+"'";
		htmlImage += " src='"+urlImage+"'";
		htmlImage += ">";
				
		objParent.html(htmlImage);

		var objImage = objParent.children("img");
		return(objImage);
	}

	this.scaleImageCoverParent = function(objImage, objParent){
	
		var parentWidth = objParent.outerWidth();
		var parentHeight = objParent.outerHeight();
		
		var objOriginalSize = t.getImageOriginalSize(objImage);
		
		var imageWidth = objOriginalSize.width;
		var imageHeight = objOriginalSize.height;
		
		var ratio = imageWidth / imageHeight;
		
		var fitHeight = parentHeight;
		var fitWidth = fitHeight * ratio;
		var posy = 0, posx = 0;
		
		if(fitWidth < parentWidth){
			fitWidth = parentWidth;
			fitHeight = fitWidth / ratio;

			posx = 0;
			posy = Math.round((fitHeight - parentHeight) / 2 * -1);
		}else{	
			posy = 0;
			posx = Math.round((fitWidth - parentWidth) / 2 * -1);
		}
		
		fitWidth = Math.round(fitWidth);
		fitHeight = Math.round(fitHeight);
		
		objImage.css({"width":fitWidth+"px",
					  "height":fitHeight+"px",
					  "left":posx+"px",
					  "top":posy+"px"});		
	}

	this.scaleImageFitParent = function(objImage, originalWidth, originalHeight, scaleMode, objPadding){
		
		var objParent = objImage.parent();
		
		var obj = t.getImageInsideParentData(objParent, originalWidth, originalHeight, scaleMode, objPadding);
		
		var updateCss = false;
		
		var objCss = {};
		
		if(obj.imageWidth !== null){
			updateCss == true
			objImage.removeAttr("width");
			objCss["width"] = obj.imageWidth+"px";
		}
		
		if(obj.imageHeight != null){
			updateCss == true
			objImage.removeAttr("height");
			objCss["height"] = obj.imageHeight+"px";
		}
		
		if(obj.imageTop !== null){
			updateCss = true;			
			objCss.top = obj.imageTop+"px";
		}
		
		if(obj.imageLeft !== null){
			updateCss = true;		
			objCss.left = obj.imageLeft+"px";
		}
		
		if(updateCss == true){
			
			objCss.position = "absolute";
			objCss.margin = "0px 0px";
			
			objImage.css(objCss);			
		}
				
	}

	this.showElement = function(element, element2, element3){
		
		element.show().fadeTo(0,1);
		
		if(element2)
			element2.show().fadeTo(0,1);
			
		if(element3)
				element3.show().fadeTo(0,1);
			
	}
	
	
	this.z_________END_SET_ELEMENT_PROPS_______ = function(){}
	
	this.z_________GALLERY_RELATED_FUNCTIONS_______ = function(){}

	this.disableButton = function(objButton, className){
		if(!className)
			var className = "ug-button-disabled";
		
		if(t.isButtonDisabled(objButton, className) == false)		
			objButton.addClass(className);		
	}


	this.convertCustomPrefixOptions = function(objOptions, prefix, base){
			
		if(!prefix)
			return(objOptions);
		
		var modifiedOptions = {};
		
		jQuery.each(objOptions, function(key, option){
			
			if(key.indexOf(prefix + "_"+base+"_") === 0){
				var newKey = key.replace(prefix+"_"+base+"_", base+"_");
				modifiedOptions[newKey] = option;
			}else{
				modifiedOptions[key] = option;
			}
			
		});
		
		return(modifiedOptions);
	}

	this.enableButton = function(objButton, className){
		if(!className)
			var className = "ug-button-disabled";
		
		if(t.isButtonDisabled(objButton, className) == true)		
			objButton.removeClass(className);
	}

	this.isButtonDisabled = function(objButton, className){
		if(!className)
			var className = "ug-button-disabled";
		
		if(objButton.hasClass(className))
			return(true);
		
		return(false);
	}
	
	
	this.z_________END_GALLERY_RELATED_FUNCTIONS_______ = function(){}

	this.z_________MATH_FUNCTIONS_______ = function(){}

	this.normalizeSetting = function(realMin, realMax, settingMin, settingMax, value, fixBounds){
		if(!fixBounds)
			var fixBounds = false;
		
		var ratio = (value - settingMin)  / (settingMax - settingMin);
		value = realMin + (realMax - realMin) * ratio;
		
		if(fixBounds == true){
			if(value < realMin)
				value = realMin;
			
			if(value > realMax)
				value = realMax;
		}
		
		return(value);
	}

	this.getNormalizedValue = function(realMin, realMax, settingMin, settingMax, realValue){
		
		var ratio = (realValue - realMin)  / (realMax - realMin);
		realValue = realMin + (settingMax - settingMin) * ratio;
		
		return(realValue);
	}

	this.getDistance = function(x1,y1,x2,y2) {
		
		var distance = Math.round(Math.sqrt(Math.abs(((x2-x1)*(x2-x1)) + ((y2-y1)*(y2-y1)))));
		
		return distance;
	}

	this.getMiddlePoint = function(x1,y1,x2,y2){
		var output = {}
		output.x = x1 + Math.round((x2 - x1) / 2);
		output.y = y1 + Math.round((y2 - y1) / 2);
		
		return(output);
	}

	this.getNumItemsInSpace = function(spaceSize, itemsSize, gapSize){
		var numItems = Math.floor((spaceSize + gapSize) / (itemsSize + gapSize));
		return(numItems);
	}

	this.getSpaceByNumItems = function(numItems, itemSize, gapSize){
		var space = numItems * itemSize + (numItems-1) * gapSize;
		return(space);
	}

	this.getColX = function(col, colWidth, colGap){
		
		var posx = col * (colWidth + colGap);
		
		return posx;
	}

	this.getColByIndex = function(numCols, index){
		var col = index % numCols;
		return(col);
	}
	
	this.z_________END_MATH_FUNCTIONS_______ = function(){}

	this.storeEventData = function(event, id, addData){
		
		var mousePos = t.getMousePosition(event);
		var time = jQuery.now();
			
		var obj = {
				startTime: time,
				lastTime: time,
				startMouseX: mousePos.pageX,
				startMouseY: mousePos.pageY,
				lastMouseX: mousePos.pageX,
				lastMouseY: mousePos.pageY,
				scrollTop: jQuery(document).scrollTop()
		};
		
		if(addData)
			obj = jQuery.extend(obj, addData);
		
		g_temp.dataCache[id] = obj;
		
	}

	this.updateStoredEventData = function(event, id, addData){
		
		if(!g_temp.dataCache[id])
			throw new Error("updateEventData error: must have stored cache object");
		
		var obj = g_temp.dataCache[id];
		
		var mousePos = t.getMousePosition(event);
		obj.lastTime = jQuery.now();
		
		if(mousePos.pageX !== undefined){
			obj.lastMouseX = mousePos.pageX;
			obj.lastMouseY = mousePos.pageY;
		}
		
		if(addData)
			obj = jQuery.extend(obj, addData);
		
		g_temp.dataCache[id] = obj;
	}

	this.getStoredEventData = function(id, isVertical){
		if(!g_temp.dataCache[id])
			throw new Error("updateEventData error: must have stored cache object");
		
		var obj = g_temp.dataCache[id];
		
		obj.diffMouseX = obj.lastMouseX - obj.startMouseX;
		obj.diffMouseY = obj.lastMouseY - obj.startMouseY;
		obj.diffTime = obj.lastTime - obj.startTime;

		if(isVertical === true){
			obj.startMousePos = obj.lastMouseY;
			obj.lastMousePos = obj.lastMouseY;
			obj.diffMousePos = obj.diffMouseY;
		}else{
			obj.startMousePos = obj.lastMouseX;
			obj.lastMousePos = obj.lastMouseX;
			obj.diffMousePos = obj.diffMouseX;			
		}
		
		return(obj);
	}

	this.isApproveStoredEventClick = function(id, isVertical){
		
		if(!g_temp.dataCache[id])
			return(true);
		
		var objData = t.getStoredEventData(id, isVertical);
		
		var passedDistanceAbs = Math.abs(objData.diffMousePos);
		
		if(objData.diffTime > 400)
			return(false);
		
		if(passedDistanceAbs > 30)
			return(false);
		
		return(true);
		
	}

	this.clearStoredEventData = function(id){
		g_temp.dataCache[id] = null;
	}
	
	this.z_________GENERAL_FUNCTIONS_______ = function(){}

	this.getCssSizeParam = function(sizeParam){
		if(jQuery.isNumeric(sizeParam))
			return(sizeParam + "px");
			
		return(sizeParam);
	}

	this.convertHexToRGB = function(hex, opacity){
	    hex = hex.replace('#','');
	    r = parseInt(hex.substring(0,2), 16);
	    g = parseInt(hex.substring(2,4), 16);
	    b = parseInt(hex.substring(4,6), 16);
	    result = 'rgba('+r+','+g+','+b+','+opacity+')';
	    return result;
	}	
	
	this.timestampToString = function(stamp){
		
		var d = new Date(stamp);
		var str = d.getDate() + "/" + d.getMonth();
		str += " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + ":" + d.getMilliseconds();
		
		return(str);
	}

	this.getArrTouches = function(event){
		
		var arrTouches = [];
				
		if(event.originalEvent && event.originalEvent.touches && event.originalEvent.touches.length > 0){			
			arrTouches = event.originalEvent.touches;
		}
		
		return(arrTouches);
	}

	this.getArrTouchPositions = function(arrTouches){
		
		var arrOutput = [];
		
		for(var i=0;i<arrTouches.length;i++){
			
			var point = {
				pageX:arrTouches[i].pageX,
				pageY:arrTouches[i].pageY
			};
			
			arrOutput.push(point);
		}
		
		return(arrOutput);
	}

	this.startTimeDebug = function(){
		g_temp.starTime = jQuery.now();
	}

	this.showTimeDebug = function(){
		
		var endTime = jQuery.now();
		var diffTime = endTime - g_temp.starTime;
		
		debugLine({"Time Passed": diffTime},true);
	}

	this.isCanvasExists = function(){
		
		var canvas = jQuery('<canvas width="500" height="500" > </canvas>')[0];
		
		if(typeof canvas.getContext == "function")
			return(true);
		
		return(false);
	}

	this.isScrollbarExists = function(){
		var hasScrollbar = window.innerWidth > document.documentElement.clientWidth;
		return(hasScrollbar);
	}

	this.initProgressIndicator = function(type, options, objParent){
		
		if(type != "bar" && t.isCanvasExists() == false)
			type = "bar";
		
		switch(type){
			case "bar":
				var g_objProgress = new UGProgressBar();		
				g_objProgress.putHidden(objParent, options);
			break;
			default:
			case "pie":
				var g_objProgress = new UGProgressPie();		
				g_objProgress.putHidden(objParent, options);
			break;			
			case "pie2":
				options.type_fill = true;
				
				var g_objProgress = new UGProgressPie();				
				g_objProgress.putHidden(objParent, options);
			break;			
		}
		
		return(g_objProgress);
	}

	this.setButtonMobileReady = function(objButton){
		
		objButton.on("touchstart",function(event){
			jQuery(this).addClass("ug-nohover");
		});
		
		objButton.on("mousedown touchend",function(event){
			event.stopPropagation();
			event.stopImmediatePropagation();
			return(false);
		});
		
	}
	this.registerTheme = function(themeName){
		g_temp.arrThemes.push(themeName);
	}
	this.getArrThemes = function(){
		
		return(g_temp.arrThemes);
	}

	this.isThemeRegistered = function(theme){
	
		if(jQuery.inArray(theme, g_temp.arrThemes) !== -1)
			return(true);
		
		return(false);
	}

	this.getFirstRegisteredTheme = function(){
		if(g_temp.arrThemes.length == 0)
			return("");
		var themeName = g_temp.arrThemes[0];
		
		return(themeName);
	}

	this.isTouchDevice = function(){

		  if(g_temp.isTouchDevice !== -1)
			  return(g_temp.isTouchDevice);
		  
		  try{ 
			  document.createEvent("TouchEvent"); 
			  g_temp.isTouchDevice = true; 
		  }
		  catch(e){ 
			  g_temp.isTouchDevice = false; 
		  }
		  
		  return(g_temp.isTouchDevice);
	}

	this.isDesktopDevice = function(){
		
		var isDesktop = typeof window.screenX !== undefined && !t.isTouchDevice() ? true : false;		
		
		return(isDesktop);
	}

	this.isTimePassed = function(handlerName, timeLimit){
		
		if(!timeLimit)
			var timeLimit = 100;
		
		var currentTime = jQuery.now();
		if(g_temp.timeCache.hasOwnProperty(handlerName) == false)
			lastTime = 0;
		else
			lastTime = g_temp.timeCache[handlerName];
		
		var diffTime = currentTime - lastTime;
		
		g_temp.timeCache[handlerName] = currentTime;
		if(diffTime <= timeLimit)
			return(false);
				
		return(true);
	}

	this.whenContiniousEventOver = function(handlerName, onEventOver, timeLimit){
		
		if(!timeLimit)
			var timeLimit = 300;
		
		
		if(g_temp.timeCache.hasOwnProperty(handlerName) == true && g_temp.timeCache[handlerName] != null){
			clearTimeout(g_temp.timeCache[handlerName]);
			g_temp.timeCache[handlerName] = null;			
		}
		
		g_temp.timeCache[handlerName] = setTimeout(onEventOver, timeLimit);
	}

	this.validateClickTouchstartEvent = function(eventType){
		
		var returnVal = true;
		
		var diff = jQuery.now() - g_temp.lastEventTime;
		if(eventType == "click" && g_temp.lastEventType == "touchstart" && diff < 1000)
			returnVal = false;
		
		g_temp.lastEventTime = jQuery.now();
		g_temp.lastEventType = eventType;
		
		return(returnVal);
	}

	this.addClassOnHover = function(element,className){
		if(!className)
			var className = "ug-button-hover";
		
		element.hover(function(){
			jQuery(this).addClass(className);
		},function(){				
			jQuery(this).removeClass(className);
		});
		
	}

	this.destroyButton = function(element){
		element.off("mouseenter");
		element.off("mouseleave");
		element.off("click");
		element.off("touchstart");
		element.off("touchend");
		element.off("mousedown");
	}

	this.setButtonOnClick = function(objButton, onClickFunction){
		
		t.setButtonMobileReady(objButton);
		
		objButton.on("click touchstart", function(event){
			
			objThis = jQuery(this);
						
			event.stopPropagation();
			event.stopImmediatePropagation();
			
			if(t.validateClickTouchstartEvent(event.type) == false)
				return(true);
			
			onClickFunction(objThis, event);
		});
		
	}

	this.loadJs = function(url, addProtocol){
		
		if(addProtocol === true)
			url = location.protocol + "//" + url;
		
		var tag = document.createElement('script');
		tag.src = url;
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);		
	}

	this.loadCss = function(url, addProtocol){
		if(addProtocol === true)
			url = location.protocol + "//" + url;
		
		var tag=document.createElement("link");
		  tag.setAttribute("rel", "stylesheet");
		  tag.setAttribute("type", "text/css");
		  tag.setAttribute("href", url);
		  
		document.getElementsByTagName("head")[0].appendChild(tag);
	}

	 this.addEvent = function(elem, event, func ) {
		 
		 if (typeof (elem.addEventListener) != "undefined") {
			 elem.addEventListener(event, func, false);
		    } else if (elem.attachEvent) {
		    	elem.attachEvent('on' + event, func);
		  }
		 
	  }	

	this.checkImagesLoaded = function(objImages, onComplete, onProgress){
		
		var arrImages = [];
		var counter = 0;
		var numImages = objImages.length;

		if(numImages == 0 && onComplete){
			onComplete();
			return(false);
		}
		function checkComplete(image, isError){
			counter++;
						
			if(typeof onProgress == "function"){
				
				setTimeout(function(){
					onProgress(image, isError);
				});
			}
			
			if(counter == numImages && typeof onComplete == "function"){
				setTimeout(function(){
					onComplete();
				});
			}
			
		}

		setTimeout(function(){

			for(var index=0;index < numImages; index++){
				var image = objImages[index];
				if(image.naturalWidth !== undefined && image.naturalWidth !== 0){
					checkComplete(objImages[index], false);
				}
				else{
					var proxyImage = jQuery('<img/>');
					proxyImage.data("index", index);
					
					proxyImage.on("load", function(){
						var index = jQuery(this).data("index");
						checkComplete(objImages[index], false);
					});
					proxyImage.on("error", function(){
						var index = jQuery(this).data("index");
						checkComplete(objImages[index], true);
					});
					proxyImage.attr("src", image.src);			
				}
			}
			
		});
		
		
	}
	this.waitForWidth = function(element, func){
		var width = element.width();
		if(width != 0){
			func();
			return(false);
		}

		g_temp.handle = setInterval(function(){
			width = element.width();
			if(width != 0){
				clearInterval(g_temp.handle);
				func();				
			}

		}, 300);
		
	}
	
	this.z_________END_GENERAL_FUNCTIONS_______ = function(){}
	
}

var g_ugFunctions = new UGFunctions();

function UGThumbsGeneral(){
	
	var t = this, g_objThis = jQuery(t);
	
	var g_gallery = new UniteGalleryMain(), g_objGallery, g_objects, g_objWrapper; 
	var g_arrItems, g_objStrip, g_objParent;
	var g_functions = new UGFunctions();

	this.events = {		
		SETOVERSTYLE: "thumbmouseover",
		SETNORMALSTYLE: "thumbmouseout",
		PLACEIMAGE: "thumbplaceimage",
		IMAGELOADERROR: "thumbimageloaderror",
	};
	
	var g_options = {
			thumb_width:88,	
			thumb_height:50,	
			thumb_border_effect:true,	
			thumb_border_width: 0,	
			thumb_border_color: "#000000",	
			thumb_over_border_width: 0,		
			thumb_over_border_color: "#d9d9d9",			
			thumb_selected_border_width: 1,		
			thumb_selected_border_color: "#d9d9d9",	
			thumb_round_corners_radius:0,	
			thumb_color_overlay_effect: true,	
			thumb_overlay_color: "#000000",	
			thumb_overlay_opacity: 0.4,		
			thumb_overlay_reverse:false,			
			
			thumb_image_overlay_effect: false,			
			thumb_image_overlay_type: "bw",		
			
			thumb_text_overlay: false,		
			
			thumb_transition_duration: 200,			
			thumb_transition_easing: "easeOutQuad",	
			thumb_show_loader: true,
			thumb_loader_type: "dark",	
			thumb_wrapper_as_link: false,
			thumb_link_newpage: false	
		}
	
		var g_temp = {
			touchEnabled: false,
			num_thumbs_checking:0,
			customThumbs:false,
			funcSetCustomThumbHtml:null,
			isEffectBorder: false,
			isEffectOverlay: false,
			isEffectImage: false
		};
		
		var g_serviceParams = {		
			timeout_thumb_check:100,
			thumb_max_check_times:600,
			eventSizeChange: "thumb_size_change"
		};
		

		this.init = function(gallery, customOptions){
			
			g_objects = gallery.getObjects();
			g_gallery = gallery;
			g_objGallery = jQuery(gallery);
			g_objWrapper = g_objects.g_objWrapper;
			g_arrItems = g_objects.g_arrItems;
			
			g_options = jQuery.extend(g_options, customOptions);

			g_temp.isEffectBorder = g_options.thumb_border_effect;
			g_temp.isEffectOverlay = g_options.thumb_color_overlay_effect;
			g_temp.isEffectImage = g_options.thumb_image_overlay_effect;
						
		}

		this.setHtmlThumbs = function(objParent){
					
			g_objParent = objParent;
			
			var numItems = g_gallery.getNumItems();

			if(g_temp.isEffectImage == true){
				var imageEffectClass = getImageEffectsClass();
			}

			 for(var i=0;i<numItems;i++){
				 
				 var objItem = g_arrItems[i];
				 
				 var classAddition = "";
				 if(g_temp.customThumbs == false)
					 classAddition = " sovthumb-generated";
				 
				 var htmlThumb = "<div class='thumbwrap"+classAddition+"'></div>";
				 if(g_options.thumb_wrapper_as_link == true){
					 var urlLink = objItem.link;
					 if(objItem.link == "")
						 urlLink = "javascript:void(0)";
					
					 var linkTarget = "";
						if(g_options.thumb_link_newpage == true && objItem.link)
							linkTarget = " target='_blank'";
					 
					 var htmlThumb = "<a href='" + urlLink + "'"+linkTarget+" class='thumbwrap"+classAddition+"'></a>";
				 }
				 
				 var objThumbWrapper = jQuery(htmlThumb);
				 
				 var objImage = objItem.objThumbImage;
				 
				 if(g_temp.customThumbs == false){
 				 
					 if(g_options.thumb_show_loader == true && objImage){
						 
						 var loaderClass = "sovthumb-loader-dark";
						 if(g_options.thumb_loader_type == "bright")
							 loaderClass = "sovthumb-loader-bright";
						 
						 objThumbWrapper.append("<div class='sovthumb-loader " + loaderClass + "'></div>");
						 objThumbWrapper.append("<div class='sovthumb-error' style='display:none'></div>");
					 }
					 					 
					 if(objImage){
						 objImage.addClass("sovthumb-image");

						 if(g_options.thumb_image_overlay_effect == true){
							var objImageOverlay = objImage.clone().appendTo(objThumbWrapper);
							
							objImageOverlay.addClass("sovthumb-image-overlay " + imageEffectClass).removeClass("sovthumb-image");
							objImageOverlay.fadeTo(0,0);
							objItem.objImageOverlay = objImageOverlay;
						 }
								 
						 objThumbWrapper.append(objImage);
					 }
					 
				 }
				 
				 if(g_temp.isEffectBorder)
					 objThumbWrapper.append("<div class='sovthumb-border-overlay'></div>");
				 
				 if(g_temp.isEffectOverlay)
					 objThumbWrapper.append("<div class='sovthumb-overlay'></div>");
				 				 
				 g_objParent.append(objThumbWrapper);

				 if(g_temp.customThumbs){
					 
					 g_temp.funcSetCustomThumbHtml(objThumbWrapper, objItem);
					 
				 }
				 g_arrItems[i].objThumbWrapper = objThumbWrapper;
				 
			 }
		}

		this.setHtmlProperties = function(){

			if(g_temp.customThumbs == false){
				var objThumbCss = {};
				 objThumbCss["width"] = g_options.thumb_width+"px";
				 objThumbCss["height"] = g_options.thumb_height+"px";
				 		 
				 g_objParent.children(".thumbwrap").css(objThumbCss);
				 
				 setThumbsBorderRadius();		 				
			} 

			 g_objParent.children(".thumbwrap").each(function(){
				 var objThumb = jQuery(this);
				 t.setThumbNormalStyle(objThumb, true);
			 });

			if(g_temp.customThumbs == false){
				 var objThumbsLoaderCss = {};
				 objThumbsLoaderCss["width"] = g_options.thumb_width+"px";
				 objThumbsLoaderCss["height"] = g_options.thumb_height+"px";			 
				 g_objParent.find(".sovthumb-loader, .sovthumb-error, .sovthumb-border-overlay, .sovthumb-overlay").css(objThumbsLoaderCss);
			}

			if(g_temp.isEffectOverlay){
				
				if(g_options.thumb_overlay_color){
										
					var objCss = {};
					var colorRGB = g_functions.convertHexToRGB(g_options.thumb_overlay_color, g_options.thumb_overlay_opacity);
					
					objCss["background-color"] = colorRGB;										
					g_objParent.find(".thumbwrap .sovthumb-overlay").css(objCss);
				}
				
			}
			
		}
		

		function getImageEffectsClass(){
			
			var imageEffectClass = "";
			var arrEffects = g_options.thumb_image_overlay_type.split(",");
			
			for(var index in arrEffects){
				var effect = arrEffects[index];
				
				switch(effect){
					case "bw":
						imageEffectClass += " ug-bw-effect";
					break;
					case "blur":
						imageEffectClass += " ug-blur-effect";
					break; 
					case "sepia":
						imageEffectClass += " ug-sepia-effect";
					break;
				}
			}
					
			return(imageEffectClass);
		}

		function animateThumb(objThumb, objThumbCss){
			
			objThumb.stop(true).animate(objThumbCss ,{
				duration: g_options.thumb_transition_duration,
				easing: g_options.thumb_transition_easing,
				queue: false
			});
					
		}

		function setThumbBorderEffect(objThumb, borderWidth, borderColor, noAnimation){
						
			if(!noAnimation)
				var noAnimation = false;
			
			if(g_gallery.isFakeFullscreen())
				noAnimation = true;
			
			var objBorderOverlay = objThumb.children(".sovthumb-border-overlay");

			var objCss = {};
			
			objCss["border-width"] = borderWidth + "px";
			
			if(borderWidth != 0)
				objCss["border-color"] = borderColor;
			
			if(noAnimation && noAnimation === true){
				objBorderOverlay.css(objCss);
				
				if(borderWidth == 0)
					objBorderOverlay.hide();
				else
					objBorderOverlay.show();
			}
			else{
				
				if(borderWidth == 0)
					objBorderOverlay.stop().fadeOut(g_options.thumb_transition_duration);
				else
					objBorderOverlay.show().stop().fadeIn(g_options.thumb_transition_duration);
				
				animateThumb(objBorderOverlay, objCss);
			}
		
		}

		function setThumbColorOverlayEffect(objThumb, isActive, noAnimation){
			
			var objOverlay = objThumb.children(".sovthumb-overlay");
						
			var animationDuration = g_options.thumb_transition_duration;
			if(noAnimation && noAnimation === true)
				animationDuration = 0;
						
			if(isActive){
				objOverlay.stop(true).fadeTo(animationDuration, 1);
			}else{
				objOverlay.stop(true).fadeTo(animationDuration, 0);
			}
			
		}

		function setThumbImageOverlayEffect(objThumb, isActive, noAnimation){
			
			var objImage = objThumb.children("img.sovthumb-image");
			var objImageOverlay = objThumb.children("img.sovthumb-image-overlay");
					
			var animationDuration = g_options.thumb_transition_duration;
			if(noAnimation && noAnimation === true)
				animationDuration = 0;
						
			if(isActive){
				objImageOverlay.stop(true).fadeTo(animationDuration,1);
			}else{
				objImage.fadeTo(0,1);
				objImageOverlay.stop(true).fadeTo(animationDuration,0);
			}
			
		}

		this.setThumbNormalStyle = function(objThumb, noAnimation){
			
			if(g_temp.customThumbs == true){
				objThumb.removeClass("sovthumb-over");
			}
			
			if(g_temp.isEffectBorder)
			  setThumbBorderEffect(objThumb, g_options.thumb_border_width, g_options.thumb_border_color, noAnimation);
			
			if(g_temp.isEffectOverlay){
				var isSet = (g_options.thumb_overlay_reverse == true)?false:true;
				setThumbColorOverlayEffect(objThumb, isSet, noAnimation);
			}
						
			if(g_temp.isEffectImage){
				setThumbImageOverlayEffect(objThumb, true, noAnimation);
			}
			
			g_objThis.trigger(t.events.SETNORMALSTYLE, objThumb);
		}

		this.setThumbOverStyle = function(objThumb){
			
			if(g_temp.customThumbs == true){
				objThumb.addClass("sovthumb-over");
			}
			if(g_temp.isEffectBorder)
				setThumbBorderEffect(objThumb, g_options.thumb_over_border_width, g_options.thumb_over_border_color);
			
			if(g_temp.isEffectOverlay){
				var isSet = (g_options.thumb_overlay_reverse == true)?true:false;
				setThumbColorOverlayEffect(objThumb, isSet);
			}

			if(g_temp.isEffectImage == true){
				setThumbImageOverlayEffect(objThumb, false);
			}

			g_objThis.trigger(t.events.SETOVERSTYLE, objThumb);
		}

		function setThumbSelectedStyle(objThumb, noAnimation){
						
			if(g_temp.isEffectBorder)			
				setThumbBorderEffect(objThumb, g_options.thumb_selected_border_width, g_options.thumb_selected_border_color, noAnimation);
			
			if(g_temp.isEffectOverlay){
				var isSet = (g_options.thumb_overlay_reverse == true)?true:false;
				setThumbColorOverlayEffect(objThumb, isSet, noAnimation);
			}

			if(g_temp.isEffectImage)
				setThumbImageOverlayEffect(objThumb, false, noAnimation);
			
		}

		function isThumbSelected(objThumbWrapper){
			
			if(objThumbWrapper.hasClass("sovthumb-selected"))
				return(true);
			
			return(false);
		}

		this.getItemByThumb = function(objThumb){
			var index = objThumb.data("index");
			
			if(index === undefined)
				index = objThumb.index();
			
			var arrItem = g_arrItems[index];
			return(arrItem);
		}

		this.setThumbSelected = function(objThumbWrapper){
			
			if(g_temp.customThumbs == true)
				objThumbWrapper.removeClass("sovthumb-over");
			
			if(isThumbSelected(objThumbWrapper) == true)
				return(true);
			
			objThumbWrapper.addClass("sovthumb-selected");

			setThumbSelectedStyle(objThumbWrapper);
		}

		function redrawThumbStyle(objThumb){
			
			if(isThumbSelected(objThumb) == true)
				setThumbSelectedStyle(objThumb, true);
			else
				t.setThumbNormalStyle(objThumb, true);
		}

		function setThumbsBorderRadius(){
			
			if(g_options.thumb_round_corners_radius <= 0)
				return(false);

			var objCss = {
				"border-radius":g_options.thumb_round_corners_radius + "px"
			};
			
			g_objParent.find(".thumbwrap, .thumbwrap .sovthumb-border-overlay").css(objCss);
			
		}

		function onThumbSizeChange(temp, objThumb){
						
			objThumb = jQuery(objThumb);
			var objItem = t.getItemByThumb(objThumb);

			var objSize = g_functions.getElementSize(objThumb);
			
			var objSizeCss = {
					width: objSize.width+"px",
					height: objSize.height+"px"
			};

			if(g_temp.isEffectBorder == true)
				objThumb.children(".sovthumb-border-overlay").css(objSizeCss);
			
			if(g_temp.isEffectOverlay == true)
				objThumb.children(".sovthumb-overlay").css(objSizeCss);
			
			t.setThumbNormalStyle(objThumb, true);
		}

		function onMouseOver(objThumb){

			if(g_temp.touchEnabled == true){
				objThumbs.off("mouseenter").off("mouseleave");
				return(true);
			}
			
			if(isThumbSelected(objThumb) == false)
				t.setThumbOverStyle(objThumb);
			
		}

		function onMouseOut(objThumb){
			
			if(g_temp.touchEnabled == true)
				return(true);
							
			if(isThumbSelected(objThumb) == false)
				t.setThumbNormalStyle(objThumb);
		}

		this.initEvents = function(){
			
			var objThumbs = g_objParent.find(".thumbwrap");
			
			objThumbs.on("touchstart",function(){
				g_temp.touchEnabled = true;
				objThumbs.off("mouseenter").off("mouseleave");
			});
			
			g_objWrapper.on(g_serviceParams.eventSizeChange, onThumbSizeChange);
			
			
			objThumbs.hover(function(event){		
				var objThumb = jQuery(this);
				onMouseOver(objThumb);
			}, function(event){	
				var objThumb = jQuery(this);
				onMouseOut(objThumb);
			});
				
		}

		this.destroy = function(){
			var objThumbs = g_objParent.find(".thumbwrap");
			objThumbs.off("touchstart");
			g_objWrapper.off(g_serviceParams.eventSizeChange);
			objThumbs.off("mouseenter");
			objThumbs.off("mouseleave");
			
		}

		this.setThumbUnselected = function(objThumbWrapper){
			
			objThumbWrapper.removeClass("sovthumb-selected");
			
			t.setThumbNormalStyle(objThumbWrapper);
		}

		this.loadThumbsImages = function(){
			
			var objImages = g_objParent.find(".sovthumb-image");
			g_functions.checkImagesLoaded(objImages, null, function(objImage,isError){
				
				if(isError == false)
					placeThumbImage(objImage, true);
				else{
					var objItem = jQuery(objImage).parent();
					setItemThumbLoadedError(objItem);										
				}
					
			});

		}

		function placeThumbImage(image, isForce){
			if(!isForce)
				var isForce = false;
						
			var objImage = jQuery(image);
			var objThumb = objImage.parent();
			
			if(objThumb.parent().length == 0)	
				return(false);
						
			objItem = t.getItemByThumb(objThumb);
			
			if(objItem.isLoaded == true && isForce === false)
				return(false);
						
			objItem.isLoaded = true;
			objItem.isThumbImageLoaded = true;
			
			if(g_temp.customThumbs == true){
				g_objThis.trigger(t.events.PLACEIMAGE, [objThumb, objImage]);
				return(true);
			}
			
			g_functions.scaleImageCoverParent(objImage, objThumb);
			
			objThumb.children(".sovthumb-loader").hide();

			objImage.show();

			if(g_options.thumb_image_overlay_effect == false){
				objImage.fadeTo(0,1);
			}
			else{

				if(g_options.thumb_image_overlay_effect == true){
					copyPositionToThumbOverlayImage(objImage);
				}

				objImage.fadeTo(0,0);
				
				var objThumb = objImage.parent();

				redrawThumbStyle(objThumb);
			}
				
		}

		function copyPositionToThumbOverlayImage(objImage){
						
			var objImageBW = objImage.siblings(".sovthumb-image-overlay");
			if(objImageBW.length == 0)
				return(false);
			
			var objSize = g_functions.getElementSize(objImage);
				
			var objCss = {
					"width":objSize.width+"px",
					"height":objSize.height+"px",
					"left":objSize.left+"px",
					"top":objSize.top+"px"
				}
				
			objImageBW.css(objCss);

			if(g_temp.customThumbs == false)
				objImageBW.fadeTo(0,1);
			
		}

		function setItemThumbLoadedError(objThumb){
			
			var objItem = t.getItemByThumb(objThumb);
			
			objItem.isLoaded = true;
			objItem.isThumbImageLoaded = false;		
			
			if(g_temp.customThumbs == true){
				
				g_objThis.trigger(t.events.IMAGELOADERROR, objThumb);
				return(true);
			
			}
			
			objThumb.children(".sovthumb-loader").hide();
			objThumb.children(".sovthumb-error").show();		
		}

		this.setOptions = function(objOptions){
			
			g_options = jQuery.extend(g_options, objOptions);
			
		}

		this.setCustomThumbs = function(funcSetHtml, arrAlowedEffects){
			g_temp.customThumbs = true;
						
			if(typeof funcSetHtml != "function")
				throw new Error("The argument should be function");
				
			g_temp.funcSetCustomThumbHtml = funcSetHtml;
			
			
			if(jQuery.inArray("overlay", arrAlowedEffects) == -1)
				g_temp.isEffectOverlay = false;				
			
			if(jQuery.inArray("border", arrAlowedEffects) == -1)
				g_temp.isEffectBorder = false;
			
			g_temp.isEffectImage = false;	
			
		}

		this.getOptions = function(){
			
			return(g_options);
		}
		
		this.getNumThumbs = function(){
			var numThumbs = g_arrItems.length;
			return(numThumbs);
		}

		this.getThumbs = function(){
			return(g_objParent.children(".thumbwrap"));
		}
}
/**
 * thumbs class
 * addon to strip gallery
 */
function UGThumbsStrip() {

    var t = this;
    var g_gallery = new UniteGalleryMain(),
        g_objGallery, g_objects, g_objWrapper;
    var g_arrItems, g_objStrip, g_objStripInner;
    var g_aviaControl, g_touchThumbsControl, g_functions = new UGFunctions();
    var g_isVertical = false,
        g_thumbs = new UGThumbsGeneral();
    var g_functions = new UGFunctions();

    var g_options = {
        strip_vertical_type: false,
        strip_thumbs_align: "left", //left, center, right, top, middle, bottom - the align of the thumbs when they smaller then the strip size.
        strip_space_between_thumbs: 6, //space between thumbs
        strip_thumb_touch_sensetivity: 15, //from 1-100, 1 - most sensetive, 100 - most unsensetive
        strip_scroll_to_thumb_duration: 500, //duration of scrolling to thumb
        strip_scroll_to_thumb_easing: "easeOutCubic", //easing of scrolling to thumb animation
        strip_control_avia: true, //avia control - move the strip according strip moseover position
        strip_control_touch: true //touch control - move the strip by dragging it
    }

    var g_temp = {
        isRunOnce: false,
        is_placed: false
    };

    var g_sizes = {
        stripSize: 0, //set after position thumbs
        stripInnerSize: 0,
        thumbSize: 0,
        thumbSecondSize: 0, //size of the height and width of the strip			
    }

    this.events = { //events variables
        STRIP_MOVE: "stripmove"
    }

    //the defaults for vertical align
    var g_defaultsVertical = {
        strip_thumbs_align: "top"
    }

    this.setHtml = function (objParent) {

        if (!objParent) {
            var objParent = g_objWrapper;
            if (g_options.parent_container != null)
                objParent = g_options.parent_container;
        }

        objParent.append("<div class='sovthumbs-strip'><div class='sovthumbs-strip-inner'></div></div>");
        g_objStrip = objParent.children(".sovthumbs-strip");

        g_objStripInner = g_objStrip.children(".sovthumbs-strip-inner");

        g_thumbs.setHtmlThumbs(g_objStripInner);

    }

    function ___________GENERAL___________() {};

    function initStrip(gallery, customOptions) {

        g_objects = gallery.getObjects();
        g_gallery = gallery;
        g_objGallery = jQuery(gallery);
        g_objWrapper = g_objects.g_objWrapper;
        g_arrItems = g_objects.g_arrItems;

        g_options = jQuery.extend(g_options, customOptions);

        g_isVertical = g_options.strip_vertical_type;

        //set vertical defaults
        if (g_isVertical == true) {
            g_options = jQuery.extend(g_options, g_defaultsVertical);
            g_options = jQuery.extend(g_options, customOptions);
        }

        g_thumbs.init(gallery, customOptions);

    }


    /**
     * run the strip
     */
    function runStrip() {

        g_thumbs.setHtmlProperties();

        initSizeParams();

        fixSize();

        positionThumbs();

        //run only once
        if (g_temp.isRunOnce == false) {

            //init thumbs strip touch 
            if (g_options.strip_control_touch == true) {
                g_touchThumbsControl = new UGTouchThumbsControl();
                g_touchThumbsControl.init(t);
            }

            //init thumbs strip avia control
            if (g_options.strip_control_avia == true) {
                g_aviaControl = new UGAviaControl();
                g_aviaControl.init(t);
            }

            checkControlsEnableDisable();

            g_thumbs.loadThumbsImages();

            initEvents();
        }


        g_temp.isRunOnce = true;

    }


    /**
     * init some size parameters, before size init and after position thumbs
     */
    function initSizeParams() {

        //set thumb outer size:
        var arrThumbs = g_objStripInner.children(".thumbwrap");
        var firstThumb = jQuery(arrThumbs[0]);
        var thumbsRealWidth = firstThumb.outerWidth();
        var thumbsRealHeight = firstThumb.outerHeight();

        if (g_isVertical == false) { //horizontal
            g_sizes.thumbSize = thumbsRealWidth;
            g_sizes.thumbSecondSize = thumbsRealHeight;
            g_sizes.stripSize = g_objStrip.width();
            g_sizes.stripInnerSize = g_objStripInner.width();
        } else { //vertical
            g_sizes.thumbSize = thumbsRealHeight;
            g_sizes.thumbSecondSize = thumbsRealWidth;
            g_sizes.stripSize = g_objStrip.height();;
            g_sizes.stripInnerSize = g_objStripInner.height();
        }

    }



    /**
     * position thumbnails in the thumbs panel horizontally
     */
    function positionThumbs_horizontal() {
        var arrThumbs = g_objStripInner.children(".thumbwrap");

        var posx = 0;
        var posy = 0;

        for (i = 0; i < arrThumbs.length; i++) {
            var objThumb = jQuery(arrThumbs[i]);
            g_functions.placeElement(objThumb, posx, posy);

            posx += objThumb.outerWidth() + g_options.strip_space_between_thumbs;
        }

        //set inner strip width
        var innerStripWidth = posx - g_options.strip_space_between_thumbs;

        g_objStripInner.width(innerStripWidth);

        g_sizes.stripInnerSize = innerStripWidth;
    }


    /**
     * position the thumbnails vertically
     */
    function positionThumbs_vertical() {

        var arrThumbs = g_objStripInner.children(".thumbwrap");

        var posy = 0;
        var posx = 0;

        for (i = 0; i < arrThumbs.length; i++) {
            var objThumb = jQuery(arrThumbs[i]);
            g_functions.placeElement(objThumb, posx, posy);

            posy += objThumb.outerHeight() + g_options.strip_space_between_thumbs;
        }

        //set inner strip width
        var innerStripHeight = posy - g_options.strip_space_between_thumbs;

        g_objStripInner.height(innerStripHeight);

        g_sizes.stripInnerSize = innerStripHeight;
    }


    /**
     * position thumbnails in the thumbs panel
     */
    function positionThumbs() {

        if (g_isVertical == false)
            positionThumbs_horizontal();
        else
            positionThumbs_vertical();

    }


    /**
     * fix strip and inner size
     */
    function fixSize() {

        if (g_isVertical == false) { //fix horizontal

            var height = g_sizes.thumbSecondSize;

            var objCssStrip = {};
            objCssStrip["height"] = height + "px";

            //set inner strip params
            var objCssInner = {};
            objCssInner["height"] = height + "px";

        } else { //fix vertical

            var width = g_sizes.thumbSecondSize;

            var objCssStrip = {};
            objCssStrip["width"] = width + "px";

            //set inner strip params
            var objCssInner = {};
            objCssInner["width"] = width + "px";

        }

        g_objStrip.css(objCssStrip);
        g_objStripInner.css(objCssInner);
    }



    /**
     * scroll by some number
     * .
     */
    function scrollBy(scrollStep) {

        var innerPos = t.getInnerStripPos();
        var finalPos = innerPos + scrollStep;

        finalPos = t.fixInnerStripLimits(finalPos);

        t.positionInnerStrip(finalPos, true);
    }


    /**
     * scroll to thumb from min. (left or top) position
     */
    function scrollToThumbMin(objThumb) {

        var objThumbPos = getThumbPos(objThumb);

        var scrollPos = objThumbPos.min * -1;
        scrollPos = t.fixInnerStripLimits(scrollPos);

        t.positionInnerStrip(scrollPos, true);
    }


    /**
     * scroll to thumb from max. (right or bottom) position
     */
    function scrollToThumbMax(objThumb) {

        var objThumbPos = getThumbPos(objThumb);

        var scrollPos = objThumbPos.max * -1 + g_sizes.stripSize;
        scrollPos = t.fixInnerStripLimits(scrollPos);

        t.positionInnerStrip(scrollPos, true);
    }


    /**
     * scroll to some thumbnail
     */
    function scrollToThumb(objThumb) {

        if (isStripMovingEnabled() == false)
            return (false);

        var objBounds = getThumbsInsideBounds();
        var objThumbPos = getThumbPos(objThumb);

        if (objThumbPos.min < objBounds.minPosThumbs) {

            var prevThumb = objThumb.prev();
            if (prevThumb.length)
                scrollToThumbMin(prevThumb);
            else
                scrollToThumbMin(objThumb);

        } else if (objThumbPos.max > objBounds.maxPosThumbs) {

            var nextThumb = objThumb.next();
            if (nextThumb.length)
                scrollToThumbMax(nextThumb);
            else
                scrollToThumbMax(objThumb);

        }

    }

    /**
     * scroll to selected thumb
     */
    function scrollToSelectedThumb() {

        var selectedItem = g_gallery.getSelectedItem();
        if (selectedItem == null)
            return (true);

        var objThumb = selectedItem.objThumbWrapper;
        if (objThumb)
            scrollToThumb(objThumb);

    }



    /**
     * check that the inner strip off the limits position, and reposition it if there is a need
     */
    function checkAndRepositionInnerStrip() {

        if (isStripMovingEnabled() == false)
            return (false);

        var pos = t.getInnerStripPos();

        var posFixed = t.fixInnerStripLimits(pos);

        if (pos != posFixed)
            t.positionInnerStrip(posFixed, true);
    }


    /**
     * enable / disable controls according inner width (move enabled).
     */
    function checkControlsEnableDisable() {

        if (isStripMovingEnabled() == true) {

            if (g_aviaControl)
                g_aviaControl.enable();

            if (g_touchThumbsControl)
                g_touchThumbsControl.enable();

        } else {

            if (g_aviaControl)
                g_aviaControl.disable();

            if (g_touchThumbsControl)
                g_touchThumbsControl.disable();

        }

    }

    /**
     * align inner strip according the options
     */
    function alignInnerStrip() {

        if (isStripMovingEnabled())
            return (false);

        if (g_isVertical == false)
            g_functions.placeElement(g_objStripInner, g_options.strip_thumbs_align, 0);
        else
            g_functions.placeElement(g_objStripInner, 0, g_options.strip_thumbs_align);

    }


    function ___________EVENTS___________() {};

    /**
     * on thumb click event. Select the thumb
     */
    function onThumbClick(objThumb) {

        //cancel click event only if passed significant movement
        if (t.isTouchMotionActive()) {

            var isSignificantPassed = g_touchThumbsControl.isSignificantPassed();
            if (isSignificantPassed == true)
                return (true);
        }

        //run select item operation
        var objItem = g_thumbs.getItemByThumb(objThumb);

        g_gallery.selectItem(objItem);
    }


    /**
     * init panel events
     */
    function initEvents() {

        g_thumbs.initEvents();

        var objThumbs = g_objStrip.find(".thumbwrap");

        objThumbs.on("click touchend", function (event) {

            var clickedThumb = jQuery(this);
            onThumbClick(clickedThumb);
        });

        //on item change, make the thumb selected
        g_objGallery.on(g_gallery.events.ITEM_CHANGE, function () {
            var objItem = g_gallery.getSelectedItem();
            g_thumbs.setThumbSelected(objItem.objThumbWrapper);
            scrollToThumb(objItem.objThumbWrapper);
        });

    }

    /**
     * destroy the strip panel events
     */
    this.destroy = function () {

        var objThumbs = g_objStrip.find(".thumbwrap");

        objThumbs.off("click");
        objThumbs.off("touchend");
        g_objGallery.off(g_gallery.events.ITEM_CHANGE);

        if (g_touchThumbsControl)
            g_touchThumbsControl.destroy();

        if (g_aviaControl)
            g_aviaControl.destroy();

        g_thumbs.destroy();
    }


    function ____________GETTERS___________() {};


    /**
     * check if the inner width is more then strip width
     */
    function isStripMovingEnabled() {

        if (g_isVertical == false) { //for horizontal

            if (g_objStripInner.width() > g_objStrip.width())
                return (true);
            return (false);

        } else { //for vertical

            if (g_objStripInner.height() > g_objStrip.height())
                return (true);
            return (false);

        }

    }


    /**
     * get bounds, if the thumb not in them, it need to be scrolled
     * minPosThumbs, maxPosThumbs - the min and max position that the thumbs should be located to be visible
     */
    function getThumbsInsideBounds() {
        var obj = {};
        var innerPos = t.getInnerStripPos();

        //the 1 is gap that avoid exact bounds
        obj.minPosThumbs = innerPos * -1 + 1;
        obj.maxPosThumbs = innerPos * -1 + g_sizes.stripSize - 1;

        return (obj);
    }


    /**
     * get thumb position according the orientation in the inner strip
     */
    function getThumbPos(objThumb) {
        var objReturn = {};

        var objPos = objThumb.position();

        if (g_isVertical == false) {
            objReturn.min = objPos.left;
            objReturn.max = objPos.left + g_sizes.thumbSize;
        } else {
            objReturn.min = objPos.top;
            objReturn.max = objPos.top + g_sizes.thumbSize;
        }

        return (objReturn);
    }




    this.________EXTERNAL_GENERAL___________ = function () {};

    /**
     * init function for avia controls
     */
    this.init = function (gallery, customOptions) {

        initStrip(gallery, customOptions);
    }


    /**
     * set html and properties
     */
    this.run = function () {
        runStrip();
    }


    /**
     * fix inner position by check boundaries limit
     */
    this.fixInnerStripLimits = function (distPos) {

        var maxPos = 0,
            minPos;
        if (g_isVertical == false)
            minPos = -(g_objStripInner.width() - g_objStrip.width());
        else
            minPos = -(g_objStripInner.height() - g_objStrip.height());

        if (distPos > maxPos)
            distPos = maxPos;

        if (distPos < minPos)
            distPos = minPos;

        return (distPos);
    }


    /**
     * position inner strip on some pos according the orientation
     */
    this.positionInnerStrip = function (pos, isAnimate) {

        if (isAnimate === undefined)
            var isAnimate = false;

        if (g_isVertical == false)
            var objPosition = {
                "left": pos + "px"
            };
        else
            var objPosition = {
                "top": pos + "px"
            };

        if (isAnimate == false) { //normal position

            g_objStripInner.css(objPosition);
            t.triggerStripMoveEvent();
        } else { //position with animation

            t.triggerStripMoveEvent();

            g_objStripInner.stop(true).animate(objPosition, {
                duration: g_options.strip_scroll_to_thumb_duration,
                easing: g_options.strip_scroll_to_thumb_easing,
                queue: false,
                progress: function () {
                    t.triggerStripMoveEvent()
                },
                always: function () {
                    t.triggerStripMoveEvent()
                }
            });

        }

    }


    /**
     * trigger event - on strip move
     */
    this.triggerStripMoveEvent = function () {

        //trigger onstripmove event
        jQuery(t).trigger(t.events.STRIP_MOVE);

    }



    /**
     * return true if the touch animation or dragging is active
     */
    this.isTouchMotionActive = function () {
        if (!g_touchThumbsControl)
            return (false);

        var isActive = g_touchThumbsControl.isTouchActive();

        return (isActive);
    }


    /**
     * check if thmb item visible, means inside the visible part of the inner strip
     */
    this.isItemThumbVisible = function (objItem) {

        var objThumb = objItem.objThumbWrapper;
        var thumbPos = objThumb.position();

        var posMin = t.getInnerStripPos() * -1;

        if (g_isVertical == false) {
            var posMax = posMin + g_objStrip.width();
            var thumbPosMin = thumbPos.left;
            var thumbPosMax = thumbPos.left + objThumb.width();
        } else {
            var posMax = posMin + g_objStrip.height();
            var thumbPosMin = thumbPos.top;
            var thumbPosMax = thumbPos.top + objThumb.height();
        }

        var isVisible = false;
        if (thumbPosMax >= posMin && thumbPosMin <= posMax)
            isVisible = true;

        return (isVisible);
    }

    /**
     * get inner strip position according the orientation
     */
    this.getInnerStripPos = function () {

        if (g_isVertical == false)
            return g_objStripInner.position().left;
        else
            return g_objStripInner.position().top;
    }


    /**
     * get inner strip limits
     */
    this.getInnerStripLimits = function () {

        var output = {};
        output.maxPos = 0;

        if (g_isVertical == false)
            output.minPos = -(g_objStripInner.width() - g_objStrip.width());
        else
            output.minPos = -(g_objStripInner.height() - g_objStrip.height());

        return (output);
    }


    /**
     * scroll left or down
     */
    this.scrollForeward = function () {

        scrollBy(-g_sizes.stripSize);
    }


    /**
     * scroll left or down
     */
    this.scrollBack = function () {

        scrollBy(g_sizes.stripSize);
    }


    this.________EXTERNAL_SETTERS___________ = function () {};


    /**
     * set the options of the strip
     */
    this.setOptions = function (objOptions) {

        g_options = jQuery.extend(g_options, objOptions);

        g_thumbs.setOptions(objOptions);
    }


    /**
     * set size of the strip
     * the height size is set automatically from options
     */
    this.setSizeVertical = function (height) {

        if (g_isVertical == false) {
            throw new Error("setSizeVertical error, the strip size is not vertical");
            return (false);
        }

        var width = g_sizes.thumbSecondSize;

        var objCssStrip = {};
        objCssStrip["width"] = width + "px";
        objCssStrip["height"] = height + "px";

        g_objStrip.css(objCssStrip);

        //set inner strip params
        var objCssInner = {};
        objCssInner["width"] = width + "px";
        objCssInner["left"] = "0px";
        objCssInner["top"] = "0px";

        g_objStripInner.css(objCssInner);

        g_temp.is_placed = true;

        checkControlsEnableDisable();
    }


    /**
     * set size of the strip
     * the height size is set automatically from options
     */
    this.setSizeHorizontal = function (width) {

        if (g_isVertical == false) {
            throw new Error("setSizeHorizontal error, the strip size is not horizontal");
            return (false);
        }

        var height = g_sizes.thumbSecondSize;

        var objCssStrip = {};
        objCssStrip["width"] = width + "px";
        objCssStrip["height"] = height + "px";

        g_objStrip.css(objCssStrip);

        //set inner strip params
        var objCssInner = {};
        objCssInner["height"] = height + "px";
        objCssInner["left"] = "0px";
        objCssInner["top"] = "0px";

        g_objStripInner.css(objCssInner);

        g_temp.is_placed = true;

        checkControlsEnableDisable();
    }


    /**
     * set position of the strip
     */
    this.setPosition = function (left, top, offsetLeft, offsetTop) {
        g_functions.placeElement(g_objStrip, left, top, offsetLeft, offsetTop);
    }


    /**
     * resize the panel according the orientation
     */
    this.resize = function (newSize) {

        if (g_isVertical == false) {

            g_objStrip.width(newSize);

        } else {

            g_objStrip.height(newSize);
        }

        g_sizes.stripSize = newSize;

        checkControlsEnableDisable();

        checkAndRepositionInnerStrip();

        alignInnerStrip();

        scrollToSelectedThumb();
    }


    /**
     * set the thumb unselected state
     */
    this.setThumbUnselected = function (objThumbWrapper) {

        g_thumbs.setThumbUnselected(objThumbWrapper);

    }


    /**
     * set custom thumbs
     */
    this.setCustomThumbs = function (funcSetHtml) {

        g_thumbs.setCustomThumbs(funcSetHtml);

    }


    this.________EXTERNAL_GETTERS___________ = function () {};

    /**
     * get objects
     */
    this.getObjects = function () {

        var thumbsOptions = g_thumbs.getOptions();
        var commonOpitions = jQuery.extend(g_options, thumbsOptions);

        var obj = {
            g_gallery: g_gallery,
            g_objGallery: g_objGallery,
            g_objWrapper: g_objWrapper,
            g_arrItems: g_arrItems,
            g_objStrip: g_objStrip,
            g_objStripInner: g_objStripInner,
            g_aviaControl: g_aviaControl,
            g_touchThumbsControl: g_touchThumbsControl,
            isVertical: g_isVertical,
            g_options: commonOpitions
        };

        return (obj);
    }



    /**
     * get strip size and position object
     */
    this.getSizeAndPosition = function () {

        var obj = g_functions.getElementSize(g_objStrip);

        return (obj);
    }

    /**
     * get thumbs strip height
     */
    this.getHeight = function () {

        var stripHeight = g_objStrip.outerHeight();

        return (stripHeight)
    }


    /**
     * get thumbs strip width
     */
    this.getWidth = function () {

        var stripWidth = g_objStrip.outerWidth();

        return (stripWidth);
    }



    /**
     * get all stored sizes object
     */
    this.getSizes = function () {

        return (g_sizes);
    }


    /**
     * return if vertical orientation or not
     */
    this.isVertical = function () {
        return (g_isVertical);
    }


    /**
     * return if the strip is placed or not
     */
    this.isPlaced = function () {

        return (g_temp.is_placed);
    }

    /**
     * return if the strip moving enabled or not
     */
    this.isMoveEnabled = function () {
        var isEnabled = isStripMovingEnabled();
        return (isEnabled);
    }

}

function UGTouchThumbsControl(){
	
	var g_parent, g_gallery, g_objGallery, g_objects;
	var g_objStrip, g_objStripInner, g_options, g_isVertical;
	var g_functions = new UGFunctions();

	var g_serviceParams = {			
		touch_portion_time:200,		
		thumb_touch_slowFactor:0,	
		minDeltaTime: 70,				
		minPath: 10,					
		limitsBreakAddition: 30,		
		returnAnimateSpeed: 500,			
		animationEasing: "easeOutCubic",		
		returnAnimationEasing: "easeOutCubic"	
	};
	
	
	var g_temp = {					//temp variables
		touch_active:false,
		loop_active:false,
		mousePos:0,
		innerPos:0,
		startPos:0,
		startTime:0,		
		lastTime:0,
		buttonReleaseTime:0,
		lastPos:0,
		lastPortionPos:0,
		lastDeltaTime:0,
		lastDeltaPos:0,
		speed:0,
		handle:"",
		touchEnabled: false, 
		isControlEnabled: true
	};


	/**
	 * enable the control
	 */
	this.enable = function(){
		g_temp.isControlEnabled = true;
	}
	
	
	/**
	 * disable the control
	 */
	this.disable = function(){
		g_temp.isControlEnabled = false;		
	}
	
	/**
	 * init function for avia controls
	 */
	this.init = function(objStrip){
		
		g_parent = objStrip;
		g_objects = objStrip.getObjects();
		
		g_gallery = g_objects.g_gallery;
		g_objGallery = g_objects.g_objGallery;	//jquery object
				
		g_objStrip = g_objects.g_objStrip;
		g_objStripInner = g_objects.g_objStripInner;
		g_options = g_objects.g_options;
		g_isVertical = g_objects.isVertical;
		
		setServiceParams();
		
		initEvents();
	}
	
	/**
	 * get action related variables
	 */
	function getActionVars(){
		
		var currentTime = jQuery.now();

		var obj = {};
		obj.passedTime = g_temp.lastTime - g_temp.startTime;
		obj.lastActiveTime = currentTime - g_temp.buttonReleaseTime;
		obj.passedDistance = g_temp.lastPos - g_temp.startPos;
		obj.passedDistanceAbs = Math.abs(obj.passedDistance);
				
		return(obj);
	}
	
	/**
	 * return if passed some significant movement
	 */
	this.isSignificantPassed = function(){
		var objVars = getActionVars();
		if(objVars.passedTime > 300)
			return(true);
		
		if(objVars.passedDistanceAbs > 30)
			return(true);
		
		return(false);		
	}
	
	
	/**
	 * return true if the touch dragging or animate motion is active
	 */
	this.isTouchActive = function(){
		
		if(g_temp.touch_active == true)
			return(true);
			
		//check if still animating
		if(g_objStripInner.is(":animated") == true)
			return(true);
		
		//check if just ended, the touch active continue for a few moments.
		var objVars = getActionVars();
		if(objVars.lastActiveTime < 50) 
			return(true);
				
		return(false);
	}
	
	/**
	 * set service parameters from user parameters
	 */
	function setServiceParams(){
				
		//set slow factor by sensetivity of touch motion		
		g_serviceParams.thumb_touch_slowFactor = g_functions.normalizeSetting(0.00005, 0.01, 1, 100, g_options.strip_thumb_touch_sensetivity, true);
				
		//debugLine("slowfactor "+ g_serviceParams.thumb_touch_slowFactor);
	}
	
	
	/**
	 * get mouse position based on orientation
	 */
	function getMouseOrientPosition(event){
		
		if(g_isVertical == false)
			return(g_functions.getMousePosition(event).pageX);
		else
			return(g_functions.getMousePosition(event).pageY);			
	}
	
	/**
	 * position the strip according the touch drag diff
	 */
	function handleStripDrag(mousePos){
		var diff = g_temp.mousePos - mousePos;
		var distPos = g_temp.innerPos - diff;
		
		//make harder to drag the limits
		var objLimits = g_parent.getInnerStripLimits();
		
		if(distPos > objLimits.maxPos){
			var path = distPos - objLimits.maxPos;
			distPos = objLimits.maxPos + path/3;			
		}
		
		if(distPos < objLimits.minPos){
			var path = objLimits.minPos - distPos;
			distPos = objLimits.minPos - path/3;						
		}
		
		g_parent.positionInnerStrip(distPos);
	}
	
	
	/**
	 * store initial touch values
	 */
	function storeInitTouchValues(pagePos){
		var currentInnerPos = g_parent.getInnerStripPos();
		
		//remember current mouse position and inner strip position
		g_temp.mousePos = pagePos;
		g_temp.innerPos = currentInnerPos;
		g_temp.lastPortionPos = currentInnerPos;
		g_temp.lastDeltaTime = 0;
		g_temp.lastDeltaPos = 0;
		
		//init position and time related variables
		g_temp.startTime = jQuery.now();
		g_temp.startPos = g_temp.innerPos;
		
		g_temp.lastTime = g_temp.startTime;
		g_temp.lastPos = g_temp.startPos;
		g_temp.speed = 0;
	}
	
	
	/**
	 * store touch portion data
	 */
	function storeTouchPortionData(){
				
		//calc speed
		var currentTime = jQuery.now();
		var deltaTime = currentTime - g_temp.lastTime;
		
		if(deltaTime >= g_serviceParams.touch_portion_time){
			g_temp.lastDeltaTime = currentTime - g_temp.lastTime;
			if(g_temp.lastDeltaTime > g_serviceParams.touch_portion_time)
				g_temp.lastDeltaTime = g_serviceParams.touch_portion_time;
				
			g_temp.lastDeltaPos = g_temp.lastPos - g_temp.lastPortionPos;
						
			g_temp.lastPortionPos = g_temp.lastPos;
			g_temp.lastTime = currentTime;
			
		}
		
	}
	
	
	/**
	 * continue touch motion - touch motion ending.
	 */
	function continueTouchMotion(){
				
		var slowFactor = g_serviceParams.thumb_touch_slowFactor;
		
		//don't alow portion less then the minTime
		var minDeltaTime = g_serviceParams.minDeltaTime;
		
		//if less then this path, dont' continue motion
		var minPath = g_serviceParams.minPath;	
		
		var currentInnerPos = g_parent.getInnerStripPos();
		
		var currentTime = jQuery.now();
		var deltaTime = currentTime - g_temp.lastTime;
		var deltaPos = currentInnerPos - g_temp.lastPortionPos;
		
		//if time too fast, take last portion values
		if(deltaTime < minDeltaTime && g_temp.lastDeltaTime > 0){
			deltaTime = g_temp.lastDeltaTime;
			deltaPos = g_temp.lastDeltaPos + deltaPos;
		}
		
		//fix delta time
		if(deltaTime < minDeltaTime)
			deltaTime = minDeltaTime;
					
		var dir = (deltaPos > 0)?1:-1;
		
		var speed = 0;
		if(deltaTime > 0)
			speed = deltaPos / deltaTime;	
		
		var path = (speed * speed) / (slowFactor * 2) * dir;
		
		//disable path for very slow motions
		if(Math.abs(path) <= minPath)
			path = 0;
		
		
		var innerStripPos = g_parent.getInnerStripPos();
		var newPos = innerStripPos + path;		
		var correctPos = g_parent.fixInnerStripLimits(newPos);
		var objLimits = g_parent.getInnerStripLimits();
		
		//check the off the limits and return (second animation)
		var limitsBreakAddition = g_serviceParams.limitsBreakAddition;
		var doQueue = false;
		var returnPos = correctPos;
		
		
		//fix the first animation position (off the limits)
		if(newPos > objLimits.maxPos){
			doQueue = true;
			correctPos = limitsBreakAddition;
			if(newPos < limitsBreakAddition)
				correctPos = newPos;			
		}
				
		if(newPos < objLimits.minPos){
			doQueue = true;
			var maxStopPos = objLimits.minPos - limitsBreakAddition;
			correctPos = maxStopPos;
			if(newPos > maxStopPos)
				correctPos = newPos;
		}
				
		var correctPath = correctPos - innerStripPos;
		
		//set animation speed		
		var animateSpeed =  Math.abs(Math.round(speed / slowFactor));
		
		//fix animation speed according the paths difference
		if(path != 0)
			animateSpeed = animateSpeed * correctPath / path;		
		
		
		//Do first animation
		if(innerStripPos != correctPos){
			
			var animateProps = {"left":correctPos+"px"};
			if(g_isVertical == true)
				animateProps = {"top":correctPos+"px"};		
			
			g_objStripInner.animate(animateProps ,{
					duration: animateSpeed,
					easing: g_serviceParams.animationEasing,
					queue: true,
					progress:onAnimateProgress 
			});
						
		}
		
				
		//do second animation if off limits
		if(doQueue == true){
			var returnAnimateSpeed = g_serviceParams.returnAnimateSpeed;
			
			var returnAnimateProps = {"left":returnPos+"px"};
			if(g_isVertical == true)
				returnAnimateProps = {"top":returnPos+"px"};		
			
			
			g_objStripInner.animate(returnAnimateProps,{				
				duration: returnAnimateSpeed,
				easing: g_serviceParams.returnAnimationEasing,
				queue: true,
				progress:onAnimateProgress 
			});
		}
		
	}
	
	/**
	 * on animate progress event. store position and trigger event to gallery
	 */
	function onAnimateProgress(){
		g_temp.lastPos = g_parent.getInnerStripPos();
		g_parent.triggerStripMoveEvent();
	}
	
	/**
	 * start loop while touching strip
	 */
	function startStripTouchLoop(){
		
		if(g_temp.loop_active == true)
			return(true);
			
		g_temp.loop_active = true;
		g_temp.handle = setInterval(storeTouchPortionData,10);
	}
	
	
	/**
	 * end loop when not touching
	 */
	function endStripTouchLoop(event){
		
		if(g_temp.loop_active == false)
			return(true);
		
		if(event){
			var pagePos = getMouseOrientPosition(event);
			continueTouchMotion(pagePos);
		}
		
		g_temp.loop_active = false;
		g_temp.handle = clearInterval(g_temp.handle);
	}
	
	
	/**
	 * on tuch end event
	 */
	function onTouchEnd(event){
		
		if(g_temp.isControlEnabled == false)
			return(true);
				
		g_temp.buttonReleaseTime = jQuery.now();
		
		if(g_temp.touch_active == false){
			endStripTouchLoop(event);
			return(true);
		}
		
		event.preventDefault();
			
		g_temp.touch_active = false;
		
		endStripTouchLoop(event);
		
		g_objStrip.removeClass("ug-dragging");
		
	}
	
	
	/**
	 * on touch start - start the motion
	 * @param event
	 */
	function onTouchStart(event){
		
		if(g_temp.isControlEnabled == false)
			return(true);
		
		event.preventDefault();
		
		g_temp.touch_active = true;		//don't move this up
		
		var pagePos = getMouseOrientPosition(event);
					
		//stop inner animation if exist
		g_objStripInner.stop(true);
		
		//store initial touch values
		storeInitTouchValues(pagePos);
		startStripTouchLoop();
		
		g_objStrip.addClass("ug-dragging");
	}
	
	
	/**
	 * on touch move event, move the strip
	 */
	function onTouchMove(event){
		
		if(g_temp.isControlEnabled == false)
			return(true);		
		
		if(g_temp.touch_active == false)
			return(true);
		
		event.preventDefault();
		
		//detect moving without button press
		if(event.buttons == 0){
			g_temp.touch_active = false;
			
			endStripTouchLoop(event);
			return(true);
		}
	
		//store current position
		var pagePos = getMouseOrientPosition(event);
		g_temp.lastPos = g_parent.getInnerStripPos();
		
		handleStripDrag(pagePos);
		
		storeTouchPortionData();
		
	}
	
	
	/**
	 * init strip touch events
	 */
	function initEvents(){
		
		//strip mouse down - drag start
		g_objStrip.bind("mousedown touchstart",onTouchStart);

		
		//on body mouse up - drag end
		jQuery(window).add("body").bind("mouseup touchend",onTouchEnd);
				
		//on body move
		jQuery("body").bind("mousemove touchmove", onTouchMove);
		
	}
	
	
	/**
	 * destroy the touch events
	 */
	this.destroy = function(){
		g_objStrip.unbind("mousedown");
		g_objStrip.unbind("touchstart");
		jQuery(window).add("body").unbind("mouseup").unbind("touchend");
		jQuery("body").unbind("mousemove").unbind("touchmove");
	}
}
/** -------------- Panel Base Functions ---------------------*/

function UGPanelsBase(){
	
	var g_temp, g_panel, g_objPanel, g_options, g_objThis;
	var g_gallery = new UniteGalleryMain();
	var t = this, g_objHandle, g_objGallery;
	var g_functions = new UGFunctions();
	
	
	/**
	 * init the base panel
	 */
	this.init = function(gallery, g_tempArg, g_panelArg, options, g_objThisArg){
		g_temp = g_tempArg; 
		g_panel = g_panelArg;
		g_gallery = gallery;
		g_options = options;
		g_objThis = g_objThisArg;
		
		g_objGallery = jQuery(g_gallery);
	}

	/**
	 * set common panels html
	 */
	this.setHtml = function(g_objPanelArg){
		
		g_objPanel = g_objPanelArg;
		
		if(g_temp.panelType == "strip")
			var enable_handle = g_options.strippanel_enable_handle;
		else
			var enable_handle = g_options.gridpanel_enable_handle;
		
		// add handle
		if (enable_handle == true) {
			g_objHandle = new UGPanelHandle();
			g_objHandle.init(g_panel, g_objPanel, g_options, g_temp.panelType, g_gallery);
			g_objHandle.setHtml();
		}
		
		
		//set disabled at start if exists
		if(g_temp.isDisabledAtStart === true){
			var html = "<div class='ug-panel-disabled-overlay'></div>";
			g_objPanel.append(html);
			
			setTimeout(function(){
				g_objPanel.children(".ug-panel-disabled-overlay").hide();
			}, g_temp.disabledAtStartTimeout);
		
		}
		
	}
	
	
	/**
	 * place common elements
	 */
	this.placeElements = function(){
		
		// place handle
		if (g_objHandle)
			g_objHandle.placeHandle();		
	}
	
	
	/**
	 * init common events
	 */
	this.initEvents = function(){
		
		// set handle events
		if (g_objHandle){
			g_objHandle.initEvents();
			
			//set on slider action events
			g_objGallery.on(g_gallery.events.SLIDER_ACTION_START, function(){			
				g_objHandle.hideHandle();
			});
			
			g_objGallery.on(g_gallery.events.SLIDER_ACTION_END, function(){			
				g_objHandle.showHandle();
			});
			
		}
		
	}
	
	/**
	 * destroy the panel events
	 */
	this.destroy = function(){
		
		if(g_objHandle){
			g_objHandle.destroy();
			g_objGallery.off(g_gallery.events.SLIDER_ACTION_START);
			g_objGallery.off(g_gallery.events.SLIDER_ACTION_END);
		}
		
	}
	
	/**
	 * place panel with some animation
	 */
	function placePanelAnimation(panelDest, functionOnComplete) {

		switch (g_temp.orientation) {
		case "right": // vertical
		case "left":
			var objCss = {
				left : panelDest + "px"
			};
			break;
		case "top":
		case "bottom":
			var objCss = {
				top : panelDest + "px"
			};
			break;
		}

		g_objPanel.stop(true).animate(objCss, {
			duration : 300,
			easing : "easeInOutQuad",
			queue : false,
			complete : function() {
				if (functionOnComplete)
					functionOnComplete();
			}
		});

	}
	
	
	/**
	 * place the panel without animation
	 * 
	 * @param panelDest
	 */
	function placePanelNoAnimation(panelDest) {

		switch (g_temp.orientation) {
		case "right": // vertical
		case "left":
			g_functions.placeElement(g_objPanel, panelDest, null);
			break;
		case "top":
		case "bottom":
			g_functions.placeElement(g_objPanel, null, panelDest);
			break;
		}
	}
	
	/**
	 * event on panel slide finish
	 */
	function onPanelSlideFinish() {

		g_objThis.trigger(g_panel.events.FINISH_MOVE);

	}
	
	
	/**
	 * open the panel
	 */
	this.openPanel = function(noAnimation) {

		if (!noAnimation)
			var noAnimation = false;

		if (g_objPanel.is(":animated"))
			return (false);

		if (g_temp.isClosed == false)
			return (false);

		g_temp.isClosed = false;

		g_objThis.trigger(g_panel.events.OPEN_PANEL);

		if (noAnimation === false)
			placePanelAnimation(g_temp.originalPos, onPanelSlideFinish);
		else {

			placePanelNoAnimation(g_temp.originalPos);
			onPanelSlideFinish();
		}

	}

	
	/**
	 * close the panel (slide in)
	 */
	this.closePanel = function(noAnimation) {

		if (!noAnimation)
			var noAnimation = false;

		if (g_objPanel.is(":animated"))
			return (false);

		if (g_temp.isClosed == true)
			return (false);

		var panelDest = t.getClosedPanelDest();

		g_temp.isClosed = true;

		g_objThis.trigger(g_panel.events.CLOSE_PANEL);

		if (noAnimation === false)
			placePanelAnimation(panelDest, onPanelSlideFinish);
		else {
			placePanelNoAnimation(panelDest);
			onPanelSlideFinish();
		}

	}
	
	/**
	 * set the panel that it's in closed state, and set original pos for opening
	 * later
	 */
	this.setClosedState = function(originalPos) {
		
		g_temp.originalPos = originalPos;
		g_objThis.trigger(g_panel.events.CLOSE_PANEL);

		g_temp.isClosed = true;
	}

	/**
	 * set the panel opened state
	 */
	this.setOpenedState = function(originalPos) {
		g_objThis.trigger(g_panel.events.OPEN_PANEL);

		g_temp.isClosed = false;
	}

	/**
	 * get closed panel destanation
	 */
	this.getClosedPanelDest = function() {

		var objPanelSize = g_functions.getElementSize(g_objPanel), panelDest;

		switch (g_temp.orientation) {
		case "left":
			g_temp.originalPos = objPanelSize.left;
			panelDest = -g_temp.panelWidth;
			break;
		case "right":
			g_temp.originalPos = objPanelSize.left;
			var gallerySize = g_gallery.getSize();
			panelDest = gallerySize.width;
			break;
		case "top":
			g_temp.originalPos = objPanelSize.top;
			panelDest = -g_temp.panelHeight;
			break;
		case "bottom":
			g_temp.originalPos = objPanelSize.top;
			var gallerySize = g_gallery.getSize();
			panelDest = gallerySize.height;
			break;
		}

		return (panelDest);
	}


	/**
	 * tells if the panel is closed
	 */
	this.isPanelClosed = function() {

		return (g_temp.isClosed);
	}
	
	
	/**
	 * set the panel disabled at start, called after init before setHtml
	 * it's enabled again after timeout end
	 */
	this.setDisabledAtStart = function(timeout){
		
		if(timeout <= 0)
			return(false);
			
		g_temp.isDisabledAtStart = true;
		g_temp.disabledAtStartTimeout = timeout;
		
	}
	
	
}


/** -------------- Panel Handle object ---------------------*/

function UGPanelHandle(){
	
	var t = this, g_objPanel, g_panel, g_objHandleTip, g_panelOptions = {};
	var g_functions = new UGFunctions();
	
	var g_options = {
			panel_handle_align: "top",		//top, middle, bottom , left, right, center - close handle tip align on the handle bar according panel orientation
			panel_handle_offset: 0,			//offset of handle bar according the valign
			panel_handle_skin: 0			//skin of the handle, if empty inherit from gallery skin
	};
	
	
	/**
	 * init the handle
	 */
	this.init = function(panel, objPanel, panelOptions, panelType, gallery){
		g_panel = panel;
		g_objPanel = objPanel;
		
		//set needed options
		switch(panelType){		
			case "grid":
				g_options.panel_handle_align = panelOptions.gridpanel_handle_align;
				g_options.panel_handle_offset = panelOptions.gridpanel_handle_offset;
				g_options.panel_handle_skin = panelOptions.gridpanel_handle_skin;
			break;
			case "strip":
				g_options.panel_handle_align = panelOptions.strippanel_handle_align;
				g_options.panel_handle_offset = panelOptions.strippanel_handle_offset;
				g_options.panel_handle_skin = panelOptions.strippanel_handle_skin;
			break;
			default:
				throw new Error("Panel handle error: wrong panel type: " + panelType);			
			break;
		}
		
		//set arrows skin:
		var galleryOptions = gallery.getOptions();
		var globalSkin = galleryOptions.gallery_skin;		
		if(g_options.panel_handle_skin == "")
			g_options.panel_handle_skin = globalSkin;
		
		
	}
	
	
	/**
	 * set handle html
	 */
	this.setHtml = function(){
		
		var orientation = g_panel.getOrientation();
				
		var classTip = "ug-panel-handle-tip";
		
		switch(orientation){
			case "right":
				classTip += " ug-handle-tip-left";				
			break;
			case "left":
				classTip += " ug-handle-tip-right";
			break;
			case "bottom":
				classTip += " ug-handle-tip-top";				
			break;
			case "top":
				classTip += " ug-handle-tip-bottom";
			break;
		}
		
		g_objPanel.append("<div class='"+classTip+" skins'></div>");
		g_objHandleTip = g_objPanel.children(".ug-panel-handle-tip");
	}
	
	
	/**
	 * remove hover state of the tip
	 */
	function removeHoverState(){
				
		g_objHandleTip.removeClass("ug-button-hover");
	}
	
	/**
	 * add closed state class
	 */
	function setClosedState(){
				
		g_objHandleTip.addClass("ug-button-closed");		
	}
	
	/**
	 * add closed state class
	 */
	function removeClosedState(){
		g_objHandleTip.removeClass("ug-button-closed");		
	}

	/**
	 * on handle click, close or open panel
	 */
	function onHandleClick(event){
		
		event.stopPropagation();
		event.stopImmediatePropagation();
		
		if(g_functions.validateClickTouchstartEvent(event.type) == false)
			return(true);
		
		if(g_panel.isPanelClosed())
			g_panel.openPanel();
		else
			g_panel.closePanel();
	}
	
	/**
	 * init events
	 */
	this.initEvents = function(){
		g_functions.addClassOnHover(g_objHandleTip);
		g_objHandleTip.bind("click touchstart", onHandleClick);
		
		//on panel open
		jQuery(g_panel).on(g_panel.events.OPEN_PANEL, function(){
			removeHoverState();
			removeClosedState();
		});
		
		//one panel close
		jQuery(g_panel).on(g_panel.events.CLOSE_PANEL, function(){
			removeHoverState();
			setClosedState();
		});
		
	}
	
	/**
	 * destroy the handle panel events
	 */
	this.destroy = function(){
		g_functions.destroyButton(g_objHandleTip);
		jQuery(g_panel).off(g_panel.events.OPEN_PANEL);
		jQuery(g_panel).off(g_panel.events.CLOSE_PANEL);
	}
	
	
	
	/**
	 * check and fix align option, set write direction
	 */
	function checkAndFixAlign(){
		var orientation = g_panel.getOrientation();
		
		switch(orientation){
			case "right":
			case "left":
				if(g_options.panel_handle_align != "top" && g_options.panel_handle_align != "bottom")
					g_options.panel_handle_align = "top";
			break;
			case "bottom":
				if(g_options.panel_handle_align != "left" && g_options.panel_handle_align != "right")
					g_options.panel_handle_align = "left";
			break;
			case "top":
				if(g_options.panel_handle_align != "left" && g_options.panel_handle_align != "right")
					g_options.panel_handle_align = "right";				
			break;
		}		
		
	}
	
	
	/**
	 * place the panel
	 */
	this.placeHandle = function(){
		var handleSize = g_functions.getElementSize(g_objHandleTip);
		
		checkAndFixAlign();
				
		var orientation = g_panel.getOrientation();
		
		switch(orientation){
			case "left":
				g_functions.placeElement(g_objHandleTip, "right", g_options.panel_handle_align, -handleSize.width);
			break;
			case "right":
				g_functions.placeElement(g_objHandleTip, -handleSize.width, g_options.panel_handle_align, 0 ,g_options.panel_handle_offset);
			break;
			case "top":
				g_functions.placeElement(g_objHandleTip, g_options.panel_handle_align, "bottom", g_options.panel_handle_offset, -handleSize.height);
			break;
			case "bottom":
				g_functions.placeElement(g_objHandleTip, g_options.panel_handle_align, "top", g_options.panel_handle_offset, -handleSize.height);
			break;
			default:
				throw new Error("Wrong panel orientation: " + orientation);
			break;
		}
		
	}
	
	/**
	 * hide the handle
	 */
	this.hideHandle = function(){
		
		if(g_objHandleTip.is(":visible") == true)
			g_objHandleTip.hide();
	
	}
	
	/**
	 * show the handle
	 */
	this.showHandle = function(){
		
		if(g_objHandleTip.is(":visible") == false)
			g_objHandleTip.show();
		
	}
	
	
}
/**
 * grid panel class addon to grid gallery
 */
function UGStripPanel() {

	var t = this, g_objThis = jQuery(this);
	var g_gallery = new UniteGalleryMain(), g_objGallery, g_objWrapper, g_objPanel;
	var g_functions = new UGFunctions(), g_objStrip = new UGThumbsStrip(), g_panelBase = new UGPanelsBase();
	var g_objButtonNext, g_objButtonPrev;

	this.events = {
		FINISH_MOVE : "gridpanel_move_finish", // called after close or open panel (slide finish).
		OPEN_PANEL : "open_panel", 			   // called before opening the panel.
		CLOSE_PANEL : "close_panel" 		   // called before closing the panel.
	};

	var g_options = {

		strippanel_vertical_type : false, // true, false - specify if the panel is vertical or horizonatal type

		strippanel_padding_top : 8,       // space from top of the panel
		strippanel_padding_bottom : 8,    // space from bottom of the panel

		strippanel_padding_left : 0,      // space from left of the panel
		strippanel_padding_right : 0,     // space from right of the panel

		strippanel_enable_buttons : true, // enable buttons from the sides of the panel
		strippanel_buttons_skin : "",     // skin of the buttons, if empty inherit from gallery skin
										  
		strippanel_padding_buttons : 2,   // padding between the buttons and the panel

		strippanel_buttons_role : "scroll_strip",   // scroll_strip, advance_item - the role of the side buttons
		
		strippanel_enable_handle : true,  // enable grid handle
		strippanel_handle_align : "top",  // top, middle, bottom , left, right, center - close handle tip align on the handle bar according panel orientation
		strippanel_handle_offset : 0, 	  // offset of handle bar according the valign
										
		strippanel_handle_skin : "", 	  // skin of the handle, if empty inherit  from gallery skin

		strippanel_background_color : ""  // background color of the strip wrapper, if not set, it will be taken from the css
		
	};

	var g_defaults_vertical = {
		strip_vertical_type : true,
		strippanel_padding_left : 8,
		strippanel_padding_right : 8,
		strippanel_padding_top : 0,
		strippanel_padding_bottom : 0
	};

	var g_defaults_no_buttons = {
		strippanel_padding_left : 8,
		strippanel_padding_right : 8,
		strippanel_padding_top : 8,
		strippanel_padding_bottom : 8
	};

	var g_temp = {
		panelType: "strip",
		panelWidth : 0,
		panelHeight : 0,
		isEventsInited : false,
		isClosed : false,
		orientation : null,
		originalPos : null,
		isFirstRun : true
	};

	/**
	 * init the panel
	 */
	function initPanel(gallery, customOptions) {
		g_gallery = gallery;

		g_objGallery = jQuery(g_gallery);

		g_options = jQuery.extend(g_options, customOptions);

		var repeatCustomOptions = false;

		if (g_options.strippanel_vertical_type == true) {
			g_options = jQuery.extend(g_options, g_defaults_vertical);
			repeatCustomOptions = true;
		}

		if (g_options.strippanel_enable_buttons == false) {
			g_options = jQuery.extend(g_options, g_defaults_no_buttons);
			repeatCustomOptions = true;
		}

		if (repeatCustomOptions == true)
			g_options = jQuery.extend(g_options, customOptions); // do the
		
		
		// set arrows skin:
		var galleryOptions = g_gallery.getOptions();
		var globalSkin = galleryOptions.gallery_skin;
		if (g_options.strippanel_buttons_skin == "")
			g_options.strippanel_buttons_skin = globalSkin;

		g_objWrapper = g_gallery.getElement();
		
		//init the base panel object:
		g_panelBase.init(g_gallery, g_temp, t, g_options, g_objThis);
		
		//init thumbs strip
		g_gallery.initThumbsPanel("strip", g_options);

		// get the grid object
		var objects = g_gallery.getObjects();
		g_objStrip = objects.g_objThumbs;
		
	}

	
	/**
	 * validate panel before run
	 */
	function validatePanelBeforeRun() {
				
		if (g_options.strippanel_vertical_type == false) { // horizontal
															// validate
			if (g_temp.panelWidth == 0) {
				throw new Error(
						"Strip panel error: The width not set, please set width");
				return (false);
			}

		} else { // vertical validate

			if (g_temp.panelHeight == 0) {
				throw new Error(
						"Strip panel error: The height not set, please set height");
				return (false);
			}

		}

		// validate orientation
		if (g_temp.orientation == null) {
			throw new Error(
					"Wrong orientation, please set panel orientation before run");
			return (false);
		}

		return (true);
	}

	/**
	 * run the panel
	 */
	function runPanel() {

		// validation
		if (g_temp.isFirstRun == true && validatePanelBeforeRun() == false)
			return (false);

		g_objStrip.run();
		
		setElementsSize();
		placeElements();
				
		initEvents();

		g_temp.isFirstRun = false;

		checkSideButtons();
	}

	/**
	 * set panel html
	 */
	function setPanelHtml(parentContainer) {
		
		if (!parentContainer)
			var parentContainer = g_objWrapper;

		// add panel wrapper
		parentContainer.append("<div class='stpanel'></div>");

		g_objPanel = parentContainer.children('.stpanel');

		// add arrows:
		if (g_options.strippanel_enable_buttons == true) {

			var arrowPrevClass = "arrowl";
			var arrowNextClass = "arrowr";
			if (g_options.strippanel_vertical_type == true) {
				arrowPrevClass = "ug-strip-arrow-up";
				arrowNextClass = "ug-strip-arrow-down";
			}

			g_objPanel.append("<div class='ug-strip-arrow " + arrowPrevClass + " skins'><div class='arrowdown'></div></div>");
			g_objPanel.append("<div class='ug-strip-arrow " + arrowNextClass + " skins'><div class='arrowdown'></div></div>");

		}
		
		g_panelBase.setHtml(g_objPanel);
		
		g_objStrip.setHtml(g_objPanel);
		
		if (g_options.strippanel_enable_buttons == true) {
			g_objButtonPrev = g_objPanel.children("." + arrowPrevClass);
			g_objButtonNext = g_objPanel.children("." + arrowNextClass);
		}

		setHtmlProperties();
	}

	/**
	 * set html properties according the options
	 */
	function setHtmlProperties() {

		// set panel background color
		if (g_options.strippanel_background_color != "")
			g_objPanel.css("background-color",
					g_options.strippanel_background_color);

	}

	/**
	 * set elements size horizontal type
	 */
	function setElementsSize_hor() {
		
		// get strip height
		var stripHeight = g_objStrip.getHeight();
		var panelWidth = g_temp.panelWidth;

		// set buttons height
		if (g_objButtonNext) {
			g_objButtonPrev.height(stripHeight);
			g_objButtonNext.height(stripHeight);

			// arrange buttons tip
			var prevTip = g_objButtonPrev.children(".arrowdown");
			g_functions.placeElement(prevTip, "center", "middle");

			var nextTip = g_objButtonNext.children(".arrowdown");
			g_functions.placeElement(nextTip, "center", "middle");
		}

		// set panel height
		var panelHeight = stripHeight + g_options.strippanel_padding_top
				+ g_options.strippanel_padding_bottom;

		// set panel size
		g_objPanel.width(panelWidth);
		g_objPanel.height(panelHeight);

		g_temp.panelHeight = panelHeight;

		// set strip size
		var stripWidth = panelWidth - g_options.strippanel_padding_left
				- g_options.strippanel_padding_right;

		if (g_objButtonNext) {
			var buttonWidth = g_objButtonNext.outerWidth();
			stripWidth = stripWidth - buttonWidth * 2
					- g_options.strippanel_padding_buttons * 2;
		}

		g_objStrip.resize(stripWidth);
	}

	/**
	 * set elements size vertical type
	 */
	function setElementsSize_vert() {
				
		// get strip width
		var stripWidth = g_objStrip.getWidth();
		var panelHeight = g_temp.panelHeight;
		
		// set buttons height
		if (g_objButtonNext) {
			g_objButtonPrev.width(stripWidth);
			g_objButtonNext.width(stripWidth);

			// arrange buttons tip
			var prevTip = g_objButtonPrev.children(".arrowdown");
			g_functions.placeElement(prevTip, "center", "middle");

			var nextTip = g_objButtonNext.children(".arrowdown");
			g_functions.placeElement(nextTip, "center", "middle");
		}

		// set panel width
		var panelWidth = stripWidth + g_options.strippanel_padding_left
				+ g_options.strippanel_padding_right;

		// set panel size
		g_objPanel.width(panelWidth);
		g_objPanel.height(panelHeight);

		g_temp.panelWidth = panelWidth;

		// set strip size
		var stripHeight = panelHeight - g_options.strippanel_padding_top
				- g_options.strippanel_padding_bottom;

		if (g_objButtonNext) {
			var buttonHeight = g_objButtonNext.outerHeight();
			stripHeight = stripHeight - buttonHeight * 2
					- g_options.strippanel_padding_buttons * 2;
		}

		g_objStrip.resize(stripHeight);
	}

	/**
	 * set elements size and place the elements
	 */
	function setElementsSize() {

		if (g_options.strippanel_vertical_type == false)
			setElementsSize_hor();
		else
			setElementsSize_vert();
	}

	/**
	 * place elements horizontally
	 */
	function placeElements_hor() {

		// place buttons
		if (g_objButtonNext) {
			g_functions.placeElement(g_objButtonPrev, "left", "top",
					g_options.strippanel_padding_left,
					g_options.strippanel_padding_top);
			g_functions.placeElement(g_objButtonNext, "right", "top",
					g_options.strippanel_padding_right,
					g_options.strippanel_padding_top);
		}

		var stripX = g_options.strippanel_padding_left;
		if (g_objButtonNext)
			stripX += g_objButtonNext.outerWidth()
					+ g_options.strippanel_padding_buttons;

		g_objStrip.setPosition(stripX, g_options.strippanel_padding_top);

	}

	/**
	 * place elements vertically
	 */
	function placeElements_vert() {

		// place buttons
		if (g_objButtonNext) {
			g_functions.placeElement(g_objButtonPrev, "left", "top",
					g_options.strippanel_padding_left,
					g_options.strippanel_padding_top);
			g_functions.placeElement(g_objButtonNext, "left", "bottom",
					g_options.strippanel_padding_left,
					g_options.strippanel_padding_bottom);
		}

		var stripY = g_options.strippanel_padding_top;
		if (g_objButtonNext)
			stripY += g_objButtonNext.outerHeight()
					+ g_options.strippanel_padding_buttons;

		g_objStrip.setPosition(g_options.strippanel_padding_left, stripY);
	}

	/**
	 * place elements
	 */
	function placeElements() {

		if (g_options.strippanel_vertical_type == false)
			placeElements_hor();
		else
			placeElements_vert();

		g_panelBase.placeElements();

	}



	function __________EVENTS___________() {
	}
	;

	/**
	 * on next button click
	 */
	function onNextButtonClick(objButton) {

		if (g_functions.isButtonDisabled(objButton))
			return (true);

		if (g_options.strippanel_buttons_role == "advance_item")
			g_gallery.nextItem();
		else
			g_objStrip.scrollForeward();
	}

	/**
	 * on previous button click
	 */
	function onPrevButtonClick(objButton) {

		if (g_functions.isButtonDisabled(objButton))
			return (true);

		if (g_options.strippanel_buttons_role == "advance_item")
			g_gallery.prevItem();
		else
			g_objStrip.scrollBack();
	}

	/**
	 * check buttons if they need to be disabled or not
	 */
	function checkSideButtons() {

		if (!g_objButtonNext)
			return (true);

		// if the strip not movable - disable both buttons
		if (g_objStrip.isMoveEnabled() == false) {
			g_functions.disableButton(g_objButtonPrev);
			g_functions.disableButton(g_objButtonNext);
			return (true);
		}

		// check the limits
		var limits = g_objStrip.getInnerStripLimits();
		var pos = g_objStrip.getInnerStripPos();

		if (pos >= limits.maxPos) {
			g_functions.disableButton(g_objButtonPrev);
		} else {
			g_functions.enableButton(g_objButtonPrev);
		}

		if (pos <= limits.minPos)
			g_functions.disableButton(g_objButtonNext);
		else
			g_functions.enableButton(g_objButtonNext);

	}

	/**
	 * on strip move event
	 */
	function onStripMove() {
		checkSideButtons();
	}

	/**
	 * on item change event, disable or enable buttons according the images
	 * position
	 */
	function onItemChange() {

		if (g_gallery.isLastItem())
			g_functions.disableButton(g_objButtonNext);
		else
			g_functions.enableButton(g_objButtonNext);

		if (g_gallery.isFirstItem())
			g_functions.disableButton(g_objButtonPrev);
		else
			g_functions.enableButton(g_objButtonPrev);

	}


	/**
	 * init panel events
	 */
	function initEvents() {

		if (g_temp.isEventsInited == true)
			return (false);
		
		g_temp.isEventsInited = true;
				
		// buttons events
		if (g_objButtonNext) {

			// add hove class
			g_functions.addClassOnHover(g_objButtonNext, "ug-button-hover");
			g_functions.addClassOnHover(g_objButtonPrev, "ug-button-hover");

			// add click events
			g_functions.setButtonOnClick(g_objButtonPrev, onPrevButtonClick);
			g_functions.setButtonOnClick(g_objButtonNext, onNextButtonClick);

			// add disable / enable buttons on strip move event
			if (g_options.strippanel_buttons_role != "advance_item") {
				jQuery(g_objStrip)
						.on(g_objStrip.events.STRIP_MOVE, onStripMove);
				g_objGallery.on(g_gallery.events.SIZE_CHANGE, checkSideButtons);
			} else {
				var galleryOptions = g_gallery.getOptions();
				if (galleryOptions.gallery_carousel == false)
					jQuery(g_gallery).on(g_gallery.events.ITEM_CHANGE,
							onItemChange);
			}

		}

		g_panelBase.initEvents();
	}
	
	/**
	 * destroy the strip panel events
	 */
	this.destroy = function(){
		
		if(g_objButtonNext){
			g_functions.destroyButton(g_objButtonNext);
			g_functions.destroyButton(g_objButtonPrev);
			jQuery(g_objStrip).off(g_objStrip.events.STRIP_MOVE);
			jQuery(g_gallery).off(g_gallery.events.ITEM_CHANGE);
			jQuery(g_gallery).off(g_gallery.events.SIZE_CHANGE);
		}
		
		g_panelBase.destroy();
		g_objStrip.destroy();
	}
	
	
	/**
	 * get panel orientation
	 */
	this.getOrientation = function() {

		return (g_temp.orientation);
	}

	/**
	 * set panel orientation (left, right, top, bottom)
	 */
	this.setOrientation = function(orientation) {

		g_temp.orientation = orientation;
	}

	
	/**
	 * init the panel
	 */
	this.init = function(gallery, customOptions) {
		initPanel(gallery, customOptions);
	}

	/**
	 * run the panel
	 */
	this.run = function() {
		runPanel();
	}

	/**
	 * place panel html
	 */
	this.setHtml = function(parentContainer) {
		setPanelHtml(parentContainer);
	}

	/**
	 * get the panel element
	 */
	this.getElement = function() {
		return (g_objPanel);
	}

	/**
	 * get panel size object
	 */
	this.getSize = function() {

		var objSize = g_functions.getElementSize(g_objPanel);

		return (objSize);
	}

	/**
	 * set panel width (for horizonal type)
	 */
	this.setWidth = function(width) {

		g_temp.panelWidth = width;

	}

	/**
	 * set panel height (for vertical type)
	 */
	this.setHeight = function(height) {

		g_temp.panelHeight = height;

	}

	/**
	 * resize the panel
	 */
	this.resize = function(newWidth) {
		t.setWidth(newWidth);
		setElementsSize();
		placeElements();
	}
	
	this.__________Functions_From_Base_____ = function() {}
	
	/**
	 * tells if the panel is closed
	 */
	this.isPanelClosed = function() {		
		return (g_panelBase.isPanelClosed());
	}

	/**
	 * get closed panel destanation
	 */
	this.getClosedPanelDest = function() {
		return g_panelBase.getClosedPanelDest();
	}	
		
	/**
	 * open the panel
	 */	
	this.openPanel = function(noAnimation) {
		g_panelBase.openPanel(noAnimation);
	}
	
	
	/**
	 * close the panel (slide in)
	 */
	this.closePanel = function(noAnimation) {
		g_panelBase.closePanel(noAnimation);		
	}	
	
	/**
	 * set the panel opened state
	 */
	this.setOpenedState = function(originalPos) {
		g_panelBase.setOpenedState(originalPos);
	}

	/**
	 * set the panel that it's in closed state, and set original pos for opening later
	 */
	this.setClosedState = function(originalPos) {
		g_panelBase.setClosedState(originalPos);	
	}
	
	/**
	 * set custom thumbs of the strip
	 */
	this.setCustomThumbs = function(funcSetHtml){
		
		g_objStrip.setCustomThumbs(funcSetHtml);
	
	}
	
	/**
	 * set panel disabled at start
	 */
	this.setDisabledAtStart = function(timeout){
		
		g_panelBase.setDisabledAtStart(timeout);
		
	}
	
}

/**
 * thumbs class
 * addon to strip gallery
 */
function UGThumbsGrid(){

	var t = this, g_objThis = jQuery(this);
	var g_gallery = new UniteGalleryMain(), g_objGallery, g_objects, g_objWrapper;
	var g_functions = new UGFunctions(), g_arrItems, g_objGrid, g_objInner;
	var g_thumbs = new UGThumbsGeneral(), g_tilesDesign = new UGTileDesign();
	
	var g_options = {
		grid_panes_direction: "left",				//where panes will move -> left, bottom
		grid_num_cols: 2,							//number of grid columns
		grid_num_rows: 2,							//number of grid rows (for horizontal type)
		grid_space_between_cols: 10,				//space between columns
		grid_space_between_rows: 10,				//space between rows
		grid_transition_duration: 300,				//transition of the panes change duration 
		grid_transition_easing: "easeInOutQuad",	//transition of the panes change easing function
		grid_carousel: false,						//next pane goes to first when last
		grid_padding: 0,							//set padding to the grid
		grid_vertical_scroll_ondrag: false			//scroll the gallery on vertical drag
	};
	
	this.events = {
		PANE_CHANGE: "pane_change"
	};
	
	var g_temp = {
			eventSizeChange: "thumb_size_change",
			isHorizontal: false,
			isMaxHeight:false,		//set if the height that set is max height. In that case need a height correction
			isMaxWidth:false,		//set if the height that set is max height. In that case need a height correction
			gridHeight: 0,
			gridWidth: 0,
			innerWidth: 0,
			innerHeight:0,
			numPanes:0,
			arrPanes:0,
			numThumbs:0,
			currentPane:0,
			numThumbsInPane:0,
			isNavigationVertical:false,
			touchActive: false,
			startScrollPos:0,
			isFirstTimeRun:true,
			isTilesMode: false,
			storedEventID: "thumbsgrid"
		};
	
	
	function __________GENERAL_________(){};
	
	/**
	 * init the gallery
	 */
	function init(gallery, customOptions, isTilesMode){
				
		g_objects = gallery.getObjects();
		g_gallery = gallery;
		g_objGallery = jQuery(gallery);
		g_objWrapper = g_objects.g_objWrapper;
		g_arrItems = g_objects.g_arrItems;
				
		if(isTilesMode === true)
			g_temp.isTilesMode = true;
		
		g_temp.numThumbs = g_arrItems.length;
		
		setOptions(customOptions);
		
		//set vertical or horizon
		g_temp.isNavigationVertical = (g_options.grid_panes_direction == "top" || g_options.grid_panes_direction == "bottom")
		
		if(g_temp.isTilesMode == true){
			
			g_tilesDesign.setFixedMode();
			g_tilesDesign.setApproveClickFunction(isApproveTileClick);
			g_tilesDesign.init(gallery, g_options);
			
			g_thumbs = g_tilesDesign.getObjThumbs();
		}else{
			g_thumbs.init(gallery);
		}
		
	}
	
	
	/**
	 * set the grid panel html
	 */
	function setHtml(parentContainer){
		
		var objParent = g_objWrapper;
		
		if(parentContainer)
			objParent = parentContainer;
		
		objParent.append("<div class='sovthumbs-grid'><div class='sovthumbs-grid-inner'></div></div>");		 
		g_objGrid = objParent.children(".sovthumbs-grid");
		g_objInner = g_objGrid.children(".sovthumbs-grid-inner");		
		
		//put the thumbs to inner strip
		
		if(g_temp.isTilesMode == true)
			g_tilesDesign.setHtml(g_objInner);
		else
			g_thumbs.setHtmlThumbs(g_objInner);
		
	}
	
	
	/**
	 * validate before running the grid
	 */
	function validateBeforeRun(){
		
		if(g_temp.isHorizontal == false){	//vertical type			
			if(g_temp.gridHeight == 0)
				throw new Error("You must set height before run.");		
		}else{
			if(g_temp.gridWidth == 0)
				throw new Error("You must set width before run.");					
		}
		
	}
	
	
	/**
	 * run the gallery after init and set html
	 */
	function run(){
		
		var selectedItem = g_gallery.getSelectedItem();
		
		validateBeforeRun();
		
		if(g_temp.isFirstTimeRun == true){
						
			if(g_temp.isTilesMode == true){
				
				initSizeParams();							
				g_tilesDesign.run();
				
			}else{
				g_thumbs.setHtmlProperties();
				initSizeParams();			
				g_thumbs.loadThumbsImages();
			}
			
			initEvents();
		}
				
		positionThumbs();
		
		if(g_temp.isFirstTimeRun == true && g_temp.isTilesMode){
			
			var objTiles = g_thumbs.getThumbs();
			
			//fire size change event
			objTiles.each(function(index, tile){
				
				g_objWrapper.trigger(g_temp.eventSizeChange, jQuery(tile));
			});
			
			objTiles.fadeTo(0,1);
		}
			
		if(selectedItem != null)
			scrollToThumb(selectedItem.index);
		
		//trigger pane change event on the start
		g_objThis.trigger(t.events.PANE_CHANGE, g_temp.currentPane);
		
		g_temp.isFirstTimeRun = false;
	}
	
	
	/**
	 * init grid size horizontal
	 * get height param
	 */
	function initSizeParamsHor(){
		
		var arrThumbs = g_objInner.children(".thumbwrap");
		var firstThumb = jQuery(arrThumbs[0]);
		var thumbsRealHeight = firstThumb.outerHeight();

		//set grid size
		var gridWidth = g_temp.gridWidth;
		var gridHeight = g_options.grid_num_rows * thumbsRealHeight + (g_options.grid_num_rows-1) * g_options.grid_space_between_rows + g_options.grid_padding*2;
		
		g_temp.gridHeight = gridHeight;
		
		g_functions.setElementSize(g_objGrid, gridWidth, gridHeight);
	
		//set inner size (as grid size, will be corrected after placing thumbs
		g_functions.setElementSize(g_objInner, gridWidth, gridHeight);
		
		//set initial inner size params
		g_temp.innerWidth = gridWidth;
		g_temp.innerHeight = gridHeight;
	}
	
	
	/**
	 * init size params vertical
	 */
	function initSizeParamsVert(){
		
		//set thumb outer size:
		var arrThumbs = g_objInner.children(".thumbwrap");
		var firstThumb = jQuery(arrThumbs[0]);
		var thumbsRealWidth = firstThumb.outerWidth();
		
		//set grid size
		var gridWidth = g_options.grid_num_cols * thumbsRealWidth + (g_options.grid_num_cols-1) * g_options.grid_space_between_cols + g_options.grid_padding*2;
		var gridHeight = g_temp.gridHeight;
		
		g_temp.gridWidth = gridWidth;
		
		g_functions.setElementSize(g_objGrid, gridWidth, gridHeight);
	
		//set inner size (as grid size, will be corrected after placing thumbs
		g_functions.setElementSize(g_objInner, gridWidth, gridHeight);
		
		//set initial inner size params
		g_temp.innerWidth = gridWidth;
		g_temp.innerHeight = gridHeight;
		
	}
	
	/**
	 * init grid size
	 */
	function initSizeParams(){
		
		if(g_temp.isHorizontal == false)
			initSizeParamsVert();
		else
			initSizeParamsHor();
		
	}

	

	/**
	 * goto pane by index
	 */
	function scrollToThumb(thumbIndex){
		
		var paneIndex = getPaneIndexByThumbIndex(thumbIndex);
		if(paneIndex == -1)
			return(false);
				
		t.gotoPane(paneIndex, "scroll");
				
	}
	
	/**
	 * set the options of the strip
	 */
	function setOptions(objOptions){
		
		g_options = jQuery.extend(g_options, objOptions);
		
		g_thumbs.setOptions(objOptions);
	}
	
	
	/**
	 * position the thumbs and init panes horizontally
	 */
	function positionThumb_hor(){
				
		var arrThumbs = g_objInner.children(".thumbwrap");
		
		var posx = 0;
		var posy = 0;
		var counter = 0;
		var baseX = 0;
		var maxx = 0, maxy = 0;
		g_temp.innerWidth = 0;
		g_temp.numPanes = 1;
		g_temp.arrPanes = [];
		g_temp.numThumbsInPane = 0;
		
		//set first pane position
		g_temp.arrPanes.push(baseX);	
		
		var numThumbs = arrThumbs.length;
			
		for(i=0;i < numThumbs; i++){
			var objThumb = jQuery(arrThumbs[i]);
			g_functions.placeElement(objThumb, posx, posy);
			
			var thumbWidth = objThumb.outerWidth();
			var thumbHeight = objThumb.outerHeight();
			
			//count maxx
			if(posx > maxx)
				maxx = posx;
			
			//count maxy
			var endY = posy + thumbHeight;
			if(endY > maxy)
				maxy = endY;
			
			//count maxx end
			var endX = maxx + thumbWidth;
			if(endX > g_temp.innerWidth)
				g_temp.innerWidth = endX;
						
			posx += thumbWidth + g_options.grid_space_between_cols;
			
			//next row
			counter++;
			if(counter >= g_options.grid_num_cols){
				posy += thumbHeight + g_options.grid_space_between_rows;
				posx = baseX;
				counter = 0;
			}
			
			//count number thumbs in pane
			if(g_temp.numPanes == 1)
				g_temp.numThumbsInPane++;
			
			//prepare next pane
			if((posy + thumbHeight) > g_temp.gridHeight){
				posy = 0;
				baseX = g_temp.innerWidth + g_options.grid_space_between_cols;
				posx = baseX;
				counter = 0;
								
				//correct max height size (do it once only)
				if(g_temp.isMaxHeight == true && g_temp.numPanes == 1){
					g_temp.gridHeight = maxy;
					g_objGrid.height(g_temp.gridHeight);
				}
				
				//save next pane props (if exists)
				if(i < (numThumbs - 1)){
					g_temp.numPanes++;
					
					//set next pane position
					g_temp.arrPanes.push(baseX);	
										
				}
			}
		}
		
		//set inner strip width and height
		g_objInner.width(g_temp.innerWidth);
		
		//set grid height
		if(g_temp.isMaxHeight == true && g_temp.numPanes == 1){
			g_temp.gridHeight = maxy;
			g_objGrid.height(maxy);
		}
		
	}
	
	
	/**
	 * position the thumbs and init panes vertically
	 */
	function positionThumb_vert(){
		var arrThumbs = g_objInner.children(".thumbwrap");
		
		var posx = 0;
		var posy = 0;
		var maxy = 0;
		var counter = 0;
		var baseX = 0;
		var paneStartY = 0;
		
		g_temp.innerWidth = 0;
		g_temp.numPanes = 1;
		g_temp.arrPanes = [];
		g_temp.numThumbsInPane = 0;
		
		//set first pane position
		g_temp.arrPanes.push(baseX);
		
		var numThumbs = arrThumbs.length;
			
		for(i=0;i < numThumbs; i++){
			var objThumb = jQuery(arrThumbs[i]);
			g_functions.placeElement(objThumb, posx, posy);
			
			var thumbWidth = objThumb.outerWidth();
			var thumbHeight = objThumb.outerHeight();
									
			posx += thumbWidth + g_options.grid_space_between_cols;
			
			var endy = (posy + thumbHeight);
			if(endy > maxy)
				maxy = endy;
			
			//next row
			counter++;
			if(counter >= g_options.grid_num_cols){
				posy += thumbHeight + g_options.grid_space_between_rows;
				posx = baseX;
				counter = 0;
			}
			
			//count number thumbs in pane
			if(g_temp.numPanes == 1)
				g_temp.numThumbsInPane++;
						
			//prepare next pane
			endy = (posy + thumbHeight);
			var paneMaxY = paneStartY + g_temp.gridHeight;
			
			//advance next pane
			if(endy > paneMaxY){
				
				//correct max height size (do it once only)
				if(g_temp.isMaxHeight == true && g_temp.numPanes == 1){
					g_temp.gridHeight = maxy;
					g_objGrid.height(g_temp.gridHeight);
					paneMaxY = g_temp.gridHeight;
				}
				
				posy = paneMaxY + g_options.grid_space_between_rows;					
				paneStartY = posy;
				baseX = 0;
				posx = baseX;
				counter = 0;
				
				//save next pane props (if exists)
				if(i < (numThumbs - 1)){
					g_temp.numPanes++;
					
					//set next pane position
					g_temp.arrPanes.push(posy);	
									
				}
			}
			
		}//for
				
		//set inner height 
		g_objInner.height(maxy);
		g_temp.innerHeight = maxy;
		
		//set grid height
		if(g_temp.isMaxHeight == true && g_temp.numPanes == 1){
			g_temp.gridHeight = maxy;
			g_objGrid.height(maxy);
		}
		
	}

	/**
	 * position the thumbs horizontal type
	 */	
	function positionThumb_hortype(){
				
		var arrThumbs = g_objInner.children(".thumbwrap");
		
		var baseX = g_options.grid_padding;
		var baseY = g_options.grid_padding;
		var posy = baseY;
		var posx = baseX;
		var maxx = 0, maxy = 0, paneMaxY = 0;
		var rowsCounter = 0;
		
		g_temp.innerWidth = 0;
		g_temp.numPanes = 1;
		g_temp.arrPanes = [];
		g_temp.numThumbsInPane = 0;
		
		//set first pane position
		g_temp.arrPanes.push(baseX-g_options.grid_padding);	
		
		var numThumbs = arrThumbs.length;
				
		for(i=0;i < numThumbs; i++){
			var objThumb = jQuery(arrThumbs[i]);
			
			var thumbWidth = objThumb.outerWidth();
			var thumbHeight = objThumb.outerHeight();
			
			//check end of the size, start a new row
			if((posx - baseX + thumbWidth) > g_temp.gridWidth){
				rowsCounter++;
				posy = 0;
				
				if(rowsCounter >= g_options.grid_num_rows){
					
					//change to a new pane					
					rowsCounter = 0;
					baseX = posx;
					paneMaxY = 0;
					posy = baseY;
					
					//change grid width to max width
					if(g_temp.numPanes == 1){
						g_temp.gridWidth = maxx+g_options.grid_padding;
						g_objGrid.width(g_temp.gridWidth);
					}
					
					g_temp.numPanes++;
					g_temp.arrPanes.push(baseX-g_options.grid_padding);
					
				}else{			//start new line in existing pane
					posx = baseX;
					posy = paneMaxY + g_options.grid_space_between_rows;
				}
			}
			
			//place the thumb
			g_functions.placeElement(objThumb, posx, posy);
			
			//count maxx
			var endX = posx + thumbWidth;
			if(endX > maxx)
				maxx = endX;
			
			//count maxy
			var endY = posy + thumbHeight;
			
			if(endY > paneMaxY)
				paneMaxY = endY;
				
			if(endY > maxy)
				maxy = endY;
			
			//count maxx end
			var endX = maxx + thumbWidth;
			if(endX > g_temp.innerWidth)
				g_temp.innerWidth = endX;
						
			posx += thumbWidth + g_options.grid_space_between_cols;
						
			//count number thumbs in pane
			if(g_temp.numPanes == 1)
				g_temp.numThumbsInPane++;
			
			
		}//end for
		
		//set inner strip width and height
		g_temp.innerWidth = maxx;
		g_temp.innerHeight = paneMaxY;
		
		g_objInner.width(g_temp.innerWidth);
		g_objInner.height(g_temp.innerHeight);
		
		//set grid height
		if(g_temp.numPanes == 1){
			g_temp.gridWidth = maxx + g_options.grid_padding;
			g_temp.gridHeight = maxy + g_options.grid_padding;
			
			g_objGrid.width(g_temp.gridWidth);
			g_objGrid.height(g_temp.gridHeight);
		}
			
	}
	
	
	/**
	 * position the thumbs and init panes related and width related vars
	 */
	function positionThumbs(){
		
		if(g_temp.isHorizontal == false){		//position vertical type
			
			if(g_temp.isNavigationVertical)
				positionThumb_vert();
			else
				positionThumb_hor();
			
		}else{
			positionThumb_hortype();
		}
		
	}
	
	
	/**
	 * validate thumb index
	 */
	function validateThumbIndex(thumbIndex){
		
		if(thumbIndex < 0 || thumbIndex >= g_temp.numThumbs){
			throw new Error("Thumb not exists: " + thumbIndex);
			return(false);
		}
		
		return(true);
	}
	
	
	/**
	 * 
	 * validate that the pane index exists
	 */
	function validatePaneIndex(paneIndex){
		
		if(paneIndex >= g_temp.numPanes || paneIndex < 0){
			throw new Error("Pane " + index + " doesn't exists.");
			return(false);
		}
		
		return(true);
	}
	
	/**
	 * validate inner position
	 */
	function validateInnerPos(pos){
				
		var absPos = Math.abs(pos);
		
		if(g_temp.isNavigationVertical == false){
			
			if(absPos < 0 || absPos >= g_temp.innerWidth){
				throw new Error("wrong inner x position: " + pos);
				return(false);
			}
			
		}else{
			
			if(absPos < 0 || absPos >= g_temp.innerHeight){
				throw new Error("wrong inner y position: " + pos);
				return(false);
			}
			
		}
		
		return(true);
	}
	
	
	
	
	/**
	 * 
	 * set inner strip position
	 */
	function setInnerPos(pos){
		
		var objCss = getInnerPosObj(pos);
		if(objCss == false)
			return(false);
		
		g_objInner.css(objCss);
	}
	
	
	/**
	 * animate inner to some position
	 */
	function animateInnerTo(pos){
		
		var objCss = getInnerPosObj(pos);
		if(objCss == false)
			return(false);
		
		g_objInner.stop(true).animate(objCss ,{
			duration: g_options.grid_transition_duration,
			easing: g_options.grid_transition_easing,
			queue: false
		});
		
	}
	
	/**
	 * animate back to current pane
	 */
	function animateToCurrentPane(){
		
		var innerPos = -g_temp.arrPanes[g_temp.currentPane];
		animateInnerTo(innerPos);
	}
	
		
	
	function __________GETTERS_________(){};
	
	/**
	 * get inner object size according the orientation
	 */
	function getInnerSize(){
		
		if(g_temp.isNavigationVertical == true)
			return(g_temp.innerHeight);
		else
			return(g_temp.innerWidth);
	}
	
	
	/**
	 * get pane width or height according the orientation
	 */
	function getPaneSize(){
		
		if(g_temp.isNavigationVertical == true)
			return(g_temp.gridHeight);
		else
			return(g_temp.gridWidth);
	}
	
	
	/**
	 * get object of iner position move
	 */
	function getInnerPosObj(pos){
				
		var obj = {};
		if(g_temp.isNavigationVertical == true)
			obj.top = pos + "px";
		else
			obj.left = pos + "px";
	
		return(obj);
	}
	
	
	/**
	 * get mouse position according the orientation
	 */
	function getMousePos(event){
		
		var mousePos = g_functions.getMousePosition(event);
		
		if(g_temp.isNavigationVertical == true)
			return(mousePos.pageY);
		else
			return(mousePos.pageX);
		
	}
	
	
	/**
	 * get inner position according the orientation
	 */
	function getInnerPos(){
		
		var objSize = g_functions.getElementSize(g_objInner);
		
		if(g_temp.isNavigationVertical == true)
			return(objSize.top);
		else
			return(objSize.left);
	
	}
	
	/**
	 * get pane by thumb index
	 */
	function getPaneIndexByThumbIndex(thumbIndex){
		
		//validate thumb index
		if(validateThumbIndex(thumbIndex) == false)
			return(-1);
		
		var numPane = Math.floor(thumbIndex / g_temp.numThumbsInPane);
		
		return(numPane);
	}
	
	/**
	 * get position of some pane
	 */
	function getPanePosition(index){
								
		var pos = g_temp.arrPanes[index];
		return(pos);
	}
	
	
	/**
	 * return if passed some significant movement, for thumb click
	 */
	function isSignificantPassed(){
		
		if(g_temp.numPanes == 1)
			return(false);
		
		var objData = g_functions.getStoredEventData(g_temp.storedEventID);
		
		var passedTime = objData.diffTime;
		
		var currentInnerPos = getInnerPos();
		var passedDistanceAbs = Math.abs(currentInnerPos - objData.startInnerPos);
		
		if(passedDistanceAbs > 30)
			return(true);
		
		if(passedDistanceAbs > 5 && passedTime > 300)
			return(true);
				
		return(false);
	}
	
	
	
	/**
	 * check if the movement that was held is valid for pane change
	 */
	function isMovementValidForChange(){
		
		var objData = g_functions.getStoredEventData(g_temp.storedEventID);
		
		//check position, if more then half, move
		var currentInnerPos = getInnerPos();
		diffPos = Math.abs(objData.startInnerPos - currentInnerPos);
				
		var paneSize = getPaneSize();
		var breakSize = Math.round(paneSize * 3 / 8);
		
		if(diffPos >= breakSize)
			return(true);
		
		if(objData.diffTime < 300 && diffPos > 25)
			return(true);
						
		return(false);
	}
	
	
	/**
	 * return if passed some significant movement
	 */
	function isApproveTileClick(){
		
		if(g_temp.numPanes == 1)
			return(true);
			
		var isApprove = g_functions.isApproveStoredEventClick(g_temp.storedEventID, g_temp.isNavigationVertical);
		
		return(isApprove);
	}
	
	
	function __________EVENTS_______(){};
	
	
	/**
	 * on thumb click event
	 */
	function onThumbClick(event){
		
		//event.preventDefault();
		if(isSignificantPassed() == true)
			return(true);
		
		//run select item operation
		var objThumb = jQuery(this);
		var objItem = g_thumbs.getItemByThumb(objThumb);
		
		g_gallery.selectItem(objItem);
	}
	
	
	/**
	 * on touch start
	 */
	function onTouchStart(event){
				
		if(g_temp.numPanes == 1)
			return(true);
		
		if(g_temp.touchActive == true)
			return(true);
		
		if(g_temp.isTilesMode == false)
			event.preventDefault();
		
		g_temp.touchActive = true;
		
		var addData = {
				startInnerPos: getInnerPos()
		};
		
		g_functions.storeEventData(event, g_temp.storedEventID, addData);
		
	}
	
	/**
	 * handle scroll top, return if scroll mode or not
	 */
	function handleScrollTop(objData){
		
		if(g_temp.isNavigationVertical == true)
			return(false);
		
		if(Math.abs(objData.diffMouseY) < Math.abs(objData.diffMouseX))
			return(false);
		
		var currentScrollTop = jQuery(document).scrollTop();
		
		var toScroll = objData.diffMouseY - currentScrollTop;
		var scrollPos = objData.scrollTop - toScroll;
		if(scrollPos > 0)
			jQuery(document).scrollTop(scrollPos);
		
		return(true);
	}
	
	
	/**
	 * on touch move
	 */
	function onTouchMove(event){
				
		if(g_temp.touchActive == false)
			return(true);
		
		event.preventDefault();
		
		g_functions.updateStoredEventData(event, g_temp.storedEventID);
		
		var objData = g_functions.getStoredEventData(g_temp.storedEventID, g_temp.isNavigationVertical);
		
		if(g_options.grid_vertical_scroll_ondrag == true){
			var isScroll = handleScrollTop(objData);
			if(isScroll)
				return(true);
		}
		
		var diff = objData.diffMousePos;
		var innerPos = objData.startInnerPos + diff;
		var direction = (diff > 0) ? "prev":"next";
		var lastPaneSize = g_temp.arrPanes[g_temp.numPanes-1];
		
		//slow down when off limits
		if(g_options.grid_carousel == false && innerPos > 0 && direction == "prev"){
			innerPos = innerPos / 3;
		}
		
		//debugLine({lastSize:lastPaneSize,innerPos: innerPos});
		
		if(g_options.grid_carousel == false && innerPos < -lastPaneSize && direction == "next"){
			innerPos = objData.startInnerPos + diff / 3;
		}
		
		setInnerPos(innerPos);
			
	}
	
	
	/**
	 * on touch end
	 * change panes or return to current pane
	 */
	function onTouchEnd(event){
		
		if(g_temp.touchActive == false)
			return(true);
		
		g_functions.updateStoredEventData(event, g_temp.storedEventID);
		var objData = g_functions.getStoredEventData(g_temp.storedEventID, g_temp.isNavigationVertical);
		
		//event.preventDefault();
		g_temp.touchActive = false;
		
		if(isMovementValidForChange() == false){
			animateToCurrentPane();
			return(true);
		}
		
		//move pane or return back
		var innerPos = getInnerPos();
		var diff = innerPos - objData.startInnerPos;
		var direction = (diff > 0) ? "prev":"next";
		
		if(direction == "next"){
						
			if(g_options.grid_carousel == false && t.isLastPane())
				animateToCurrentPane();
			else
				t.nextPane();			
		}
		else{
						
			if(g_options.grid_carousel == false && t.isFirstPane()){
				animateToCurrentPane();
			}
			else
				t.prevPane();
		}
		
	}
	
	
	/**
	 * on item change
	 */
	function onItemChange(){
			
		var objItem = g_gallery.getSelectedItem();
		g_thumbs.setThumbSelected(objItem.objThumbWrapper);
		
		scrollToThumb(objItem.index);
		
	}
	
	
	/**
	 * init panel events
	 */
	function initEvents(){
		
		if(g_temp.isTilesMode == false){
			
			g_thumbs.initEvents();		
			var objThumbs = g_objGrid.find(".thumbwrap");
			objThumbs.on("click touchend",onThumbClick);
			
			g_objGallery.on(g_gallery.events.ITEM_CHANGE, onItemChange);
			
		}else{
			g_tilesDesign.initEvents();
		}
		
		//touch drag events
		
		//slider mouse down - drag start
		g_objGrid.bind("mousedown touchstart",onTouchStart);
		
		//on body move
		jQuery("body").bind("mousemove touchmove",onTouchMove);
		
		//on body mouse up - drag end
		jQuery(window).add("body").bind("mouseup touchend", onTouchEnd);
		
	}
	
	
	/**
	 * destroy the events
	 */
	this.destroy = function(){
		
		if(g_temp.isTilesMode == false){
			
			var objThumbs = g_objGrid.find(".thumbwrap");
			objThumbs.off("click");
			objThumbs.off("touchend");
			g_objGallery.on(g_gallery.events.ITEM_CHANGE);
			g_thumbs.destroy();		
						
		}else{
			g_tilesDesign.destroy();
		}
		
		g_objGrid.unbind("mousedown");
		g_objGrid.unbind("touchstart");
		jQuery("body").unbind("mousemove");
		jQuery("body").unbind("touchmove");
		
		jQuery(window).add("body").unbind("touchend");
		jQuery(window).add("body").unbind("mouseup");
		
		g_objThis.off(t.events.PANE_CHANGE);
		
	}
	
	
	
	this.__________EXTERNAL_GENERAL_________ = function(){};
	
	/**
	 * set the thumb unselected state
	 */
	this.setThumbUnselected = function(objThumbWrapper){
		
		g_thumbs.setThumbUnselected(objThumbWrapper);
		
	}
	
	/**
	 * check if thmb item visible, means inside the visible part of the inner strip
	 */
	this.isItemThumbVisible = function(objItem){
		var itemIndex = objItem.index;
		var paneIndex = getPaneIndexByThumbIndex(itemIndex);
		
		if(paneIndex == g_temp.currentPane)
			return(true);
		
		return(false);
	}
	
	
	this.__________EXTERNAL_API_________ = function(){};
	
	/**
	 * get estimation of number of panes by the height of the grid.
	 */
	this.getNumPanesEstimationByHeight = function(gridHeight){
		
		if(g_temp.isTilesMode == true){
			
			var thumbHeight = g_options.tile_height;
			
		}else{
			var thumbsOptions = g_thumbs.getOptions();		
			var thumbHeight = thumbsOptions.thumb_height;
		}
		
		var numThumbs = g_thumbs.getNumThumbs();
		var numRows = Math.ceil(numThumbs / g_options.grid_num_cols);
		
		var totalHeight = numRows * thumbHeight + (numRows-1) * g_options.grid_space_between_rows;
			
		var numPanes = Math.ceil(totalHeight / gridHeight);
		
		return(numPanes);
	}
	
	/**
	 * get estimation of number of panes by the width of the grid.
	 */
	this.getNumPanesEstimationByWidth = function(gridWidth){
		
		if(g_temp.isTilesMode){
			var thumbWidth = g_options.tile_width;			
		}else{
			var thumbsOptions = g_thumbs.getOptions();		
			var thumbWidth = thumbsOptions.thumb_width;
		}
		
		var numThumbs = g_thumbs.getNumThumbs();
		var numCols = Math.ceil(numThumbs / g_options.grid_num_rows);
		
		var totalWidth = numCols * thumbWidth + (numCols-1) * g_options.grid_space_between_cols;
		
		var numPanes = Math.ceil(totalWidth / gridWidth);
				
		return(numPanes);
	}
	
	
	/**
	 * get height estimation by width, works only in tiles mode
	 */
	this.getHeightEstimationByWidth = function(width){
		
		if(g_temp.isTilesMode == false)
			throw new Error("This function works only with tiles mode");
		
		var numThumbs = g_thumbs.getNumThumbs();
		var numCols = g_functions.getNumItemsInSpace(width, g_options.tile_width, g_options.grid_space_between_cols);
		var numRows = Math.ceil(numThumbs / numCols);
		
		if(numRows > g_options.grid_num_rows)
			numRows = g_options.grid_num_rows;
		
		var gridHeight = g_functions.getSpaceByNumItems(numRows, g_options.tile_height, g_options.grid_space_between_rows);
		gridHeight += g_options.grid_padding * 2;
		
		return(gridHeight);
	}
	
	/**
	 * get the grid element
	 */
	this.getElement = function(){
		return(g_objGrid);
	}
	
	/**
	 * get element size and position
	 */
	this.getSize = function(){
		
		var objSize = g_functions.getElementSize(g_objGrid);
		return(objSize);
		
	}
	
	/**
	 * get number of panes
	 */
	this.getNumPanes = function(){
		
		return(g_temp.numPanes);
	}
	
	/**
	 * get if the current pane is first
	 */
	this.isFirstPane = function(){
		
		if(g_temp.currentPane == 0)
			return(true);
		
		return(false);
	}
	
	
	/**
	 * get if the current pane is last
	 */
	this.isLastPane = function(){
		
		if(g_temp.currentPane == (g_temp.numPanes -1) )
			return(true);
		
		return(false);
	}
	
	
	/**
	 * get pane number, and num panes
	 */
	this.getPaneInfo = function(){
		
		var obj = {
			pane: g_temp.currentPane,
			total: g_temp.numPanes
		};
		
		return(obj);
	}
	
	
	/**
	 * get current pane
	 */
	this.getPane = function(){
		
		return(g_temp.currentPane);
	}
	
	
	/**
	 * set grid width (horizontal type)
	 */
	this.setWidth = function(gridWidth){
		g_temp.gridWidth = gridWidth;
		g_temp.isHorizontal = true;
	}
	
	/**
	 * set max width, the width will be corrected by the number of items
	 * set vertical type
	 */
	this.setMaxWidth = function(maxWidth){
		g_temp.gridWidth = maxWidth;
		g_temp.isMaxWidth = true;
		g_temp.isHorizontal = true;
	}
	
	
	/**
	 * set grid height (vertical type)
	 */
	this.setHeight = function(gridHeight){
		g_temp.gridHeight = gridHeight;
		g_temp.isHorizontal = false;
		
	}
	
	/**
	 * set max height, the height will be corrected by the number of items
	 * set the vertical type
	 */
	this.setMaxHeight = function(maxHeight){
		g_temp.gridHeight = maxHeight;
		g_temp.isMaxHeight = true;
		g_temp.isHorizontal = false;
	}
	
	
	/**
	 * goto some pane
	 * force skip current pane checks
	 */
	this.gotoPane = function(index, fromWhere){
		
		if(validatePaneIndex(index) == false)
			return(false);
		
		if(index == g_temp.currentPane)
			return(false);
		
		var innerPos = -g_temp.arrPanes[index];
		
		g_temp.currentPane = index;
		animateInnerTo(innerPos);
		
		//trigger pane change event
		g_objThis.trigger(t.events.PANE_CHANGE, index);
	}
	
	
	/**
	 * foreward to the next pane
	 */
	this.nextPane = function(){
				
		var nextPaneIndex = g_temp.currentPane+1;
		
		if(nextPaneIndex >= g_temp.numPanes){
			
			if(g_options.grid_carousel == false)
				return(true);
			
			nextPaneIndex = 0;
		}
		
		t.gotoPane(nextPaneIndex, "next");
	}
	
	
	/**
	 * foreward to the next pane
	 */
	this.prevPane = function(){
		
		var prevPaneIndex = g_temp.currentPane-1;
		if(prevPaneIndex < 0){
			prevPaneIndex = g_temp.numPanes-1;
			
			if(g_options.grid_carousel == false)
				return(false);
		}
		
		t.gotoPane(prevPaneIndex, "prev");
	}
	
	
	/**
	 * set next pane button
	 */
	this.attachNextPaneButton = function(objButton){
		
		g_functions.setButtonOnClick(objButton, t.nextPane);

		if(g_options.grid_carousel == true)		
			return(true);
		
		if(t.isLastPane())
			objButton.addClass("ug-button-disabled");
		
		//set disabled button class if first pane
		g_objThis.on(t.events.PANE_CHANGE, function(){
			
			if(t.isLastPane())
				objButton.addClass("ug-button-disabled");
			else
				objButton.removeClass("ug-button-disabled");
	
		});
		
	}
	
	
	/**
	 * set prev pane button
	 */
	this.attachPrevPaneButton = function(objButton){
				
		g_functions.setButtonOnClick(objButton, t.prevPane);
		
		if(g_options.grid_carousel == true)		
			return(true);
		
		if(t.isFirstPane())
			objButton.addClass("ug-button-disabled");
		
		//set disabled button class if first pane
		g_objThis.on(t.events.PANE_CHANGE, function(){
			
			if(t.isFirstPane())
				objButton.addClass("ug-button-disabled");
			else
				objButton.removeClass("ug-button-disabled");
	
		});
		
	}
	
	
	/**
	 * attach bullets object
	 */
	this.attachBullets = function(objBullets){
		
		objBullets.setActive(g_temp.currentPane);
		
		jQuery(objBullets).on(objBullets.events.BULLET_CLICK, function(data, numBullet){
			t.gotoPane(numBullet, "theme");
			objBullets.setActive(numBullet);				
		});
		
		jQuery(t).on(t.events.PANE_CHANGE, function(data, numPane){
			objBullets.setActive(numPane);
		});
		
	}
	
	
	/**
	 * get tile design object
	 */
	this.getObjTileDesign = function(){
		return g_tilesDesign;
	}
	
	
	/**
	 * init function 
	 */
	this.init = function(gallery, customOptions, isTilesMode){
		
		init(gallery, customOptions, isTilesMode);
	}
	
		
	
	/**
	 * set html and properties
	 */	
	this.run = function(){
		run();
	}

	
	/**
	 * set html 
	 */
	this.setHtml = function(parentContainer){
		
		setHtml(parentContainer);
	}
	
}
/**
 * tiles class
 */
function UGTiles(){

	var t = this, g_objThis = jQuery(this);
	var g_gallery = new UniteGalleryMain(), g_objGallery, g_objWrapper, g_objParent;	
	var g_functions = new UGFunctions(), g_arrItems, g_objTileDesign = new UGTileDesign();
	var g_thumbs = new UGThumbsGeneral(), g_vars = {};
	
	var g_options = {
		 tiles_type: "columns",				//columns / justified - tiles layout type
		 tiles_col_width: 250,				//column width
		 tiles_space_between_cols: 3,		//space between images
		 tiles_justified_row_height: 150,	//base row height of the justified type
		 tiles_justified_space_between: 3,	//space between the tiles justified type

		 tiles_set_initial_height: true,	//set some estimated height before images show
		 tiles_enable_transition: true		//enable transition when screen width change
	};
	
	this.events = {
			THUMB_SIZE_CHANGE: "thumb_size_change",
			TILES_FIRST_PLACED: "tiles_first_placed"		//only in case of justified
	};
	
	var g_temp = {
			isFirstTimeRun:true,  //if run once
			handle:null		//interval handle
	};
	
	
	function __________GENERAL_________(){};
	
	/**
	 * init the gallery
	 */
	function init(gallery, customOptions){
		
		g_objects = gallery.getObjects();
		g_gallery = gallery;
		g_objGallery = jQuery(gallery);
		g_objWrapper = g_objects.g_objWrapper;
		g_arrItems = g_objects.g_arrItems;
		
		g_options = jQuery.extend(g_options, customOptions);
				
		g_objTileDesign.init(gallery, g_options);
		
		g_thumbs = g_objTileDesign.getObjThumbs();
	}
	
	
	/**
	 * set the grid panel html
	 */
	function setHtml(objParent){
		
		if(!objParent)
			var objParent = g_objWrapper;
		
		g_objParent = objParent;
		
		var tilesType = g_options.tiles_type;
		objParent.addClass("ug-tiletype-"+tilesType);
		
		g_objTileDesign.setHtml(objParent);
		
		objParent.children(".thumbwrap").hide();
	}
	
	/**
	 * set class that enables transition
	 */
	function setTransition(){
		
		//add css tansition
		if(g_options.tiles_enable_transition == true)
			g_objParent.addClass("ug-tiles-transit");
		
	}
	
	
	/**
	 * get parent width
	 */
	function getParentWidth(){
		return g_functions.getElementSize(g_objParent).width;
	}
	
	function __________COLUMN_TYPE_RELATED_________(){};
	
	
	/**
	 * fill common tiles vars
	 */
	function fillTilesVars(){
		
		g_vars.colWidth = g_options.tiles_col_width;
		g_vars.colGap = g_options.tiles_space_between_cols;		
		
		g_vars.galleryWidth = getParentWidth();
		
		g_vars.numCols = g_functions.getNumItemsInSpace(g_vars.galleryWidth, g_vars.colWidth, g_vars.colGap);
		g_vars.totalWidth = g_vars.numCols*(g_vars.colWidth + g_vars.colGap) - g_vars.colGap;
		g_vars.addX = Math.round( (g_vars.galleryWidth - g_vars.totalWidth) / 2 );	//add x to center point
		g_vars.maxColHeight = 0;
		
		
		//get posx array (constact to all columns)
		g_vars.arrPosx = [];		
		for(col = 0; col < g_vars.numCols; col++){
			var colX = g_functions.getColX(col, g_vars.colWidth, g_vars.colGap);
		//	trace(colX);
			g_vars.arrPosx[col] = colX + g_vars.addX;
		}
		
		//trace(g_vars.arrPosx);
		
		//empty heights array
		g_vars.colHeights = [0];		
	}
	
	
	/**
	 * place the tiles
	 */
	function placeTiles(toShow){
		
		if(!toShow)
			toShow = false;
		
		fillTilesVars();
		
		var objThumbs = g_thumbs.getThumbs();
			
		//place elements
		for(index = 0; index < objThumbs.length; index++){
			var objTile = jQuery(objThumbs[index]);
			placeTile(objTile, toShow, false);
		}
		
		//set gallery height, according the transition
		var galleryHeight = g_objParent.height();
		
		if(g_options.tiles_enable_transition == true && galleryHeight > g_vars.maxColHeight)
			setTimeout(function(){
				g_objParent.height(g_vars.maxColHeight);
			},700);
		else
			g_objParent.height(g_vars.maxColHeight);
		
	}
	
	
	/**
	 * get column with minimal height
	 */
	function getTilesMinCol(){
		var numCol = 0;
		
		var minHeight = 999999999;
		
		for(col = 0; col < g_vars.numCols; col++){
			
			if(g_vars.colHeights[col] == undefined || g_vars.colHeights[col] == 0)
				return col;
			
			if(g_vars.colHeights[col] < minHeight){
				numCol = col;
				minHeight = g_vars.colHeights[col];
			}
		
		}
		
		return(numCol);
	}
	
	
	/**
	 * place tile as it loads
	 */
	function placeTile(objTile, toShow, setGalleryHeight){
				
		var index = objTile.index();
		
		var numCol = getTilesMinCol();
		
		//set posy
		var posy = 0;
		if(g_vars.colHeights[numCol] !== undefined)
			posy = g_vars.colHeights[numCol];
		
		var objSize = g_functions.getElementSize(objTile);
		var itemHeight = objSize.height;
		
		var posx = g_vars.arrPosx[numCol];
		
		g_functions.placeElement(objTile, posx, posy);
		
		g_vars.colHeights[numCol] = posy + itemHeight + g_vars.colGap;
		
		//set max height
		if(g_vars.maxColHeight < g_vars.colHeights[numCol])
			g_vars.maxColHeight = g_vars.colHeights[numCol];
		
		if(toShow == true)
			objTile.show();
				
		if(setGalleryHeight == true){
			g_objParent.height(g_vars.maxColHeight);			
		}
		
	}
	
		
	/**
	 * on single image load
	 */
	function onSingleImageLoad(objImage, isError){
		
		if(isError == true)
			return(false);
				
		objImage = jQuery(objImage);
		var objTile = jQuery(objImage).parent();
		
		placeTile(objTile, true, true);
		objTile.fadeTo(0,1);
		
		g_objWrapper.trigger(t.events.THUMB_SIZE_CHANGE, objTile);
		
	}
	
	
	/**
	 * run columns type
	 */
	function runColumnsType(){
		
		//set column width
		var objThumbs = g_thumbs.getThumbs();
		objThumbs.css("width",g_options.tiles_col_width + "px");
		objThumbs.fadeTo(0,0);
		
		fillTilesVars();
		
		var diffWidth = Math.abs(g_vars.galleryWidth - g_vars.totalWidth);
		
		//set initial height of the parent by estimation
		if(g_options.tiles_set_initial_height == true && g_functions.isScrollbarExists() == false && diffWidth < 25){
			var numThumbs = objThumbs.length;
			var numRows = Math.ceil(objThumbs.length / g_vars.numCols);
			var estimateHeight = numRows * g_options.tiles_col_width * 0.75;
			g_objParent.height(estimateHeight);
			fillTilesVars();
		}
					
		var initNumCols = g_vars.numCols;
		var initWidth = g_vars.galleryWidth;
		var objImages = jQuery(g_objParent).find("img.sovthumb-image");
		
		var isFirstPlace = false;
		
		//on place the tile as it loads. After all tiles loaded,check position again.
		g_functions.checkImagesLoaded(objImages, function(){
						
			fillTilesVars();
			
			if(initNumCols != g_vars.numCols || initWidth != g_vars.galleryWidth)
				placeTiles(false);
			
			setTransition();
			
		} ,function(objImage, isError){
			
			if(isFirstPlace == false)
				g_objThis.trigger(t.events.TILES_FIRST_PLACED);
			
			isFirstPlace = true;
			
			onSingleImageLoad(objImage, isError);
		
		});
	}
	
	
	function __________JUSTIFIED_TYPE_RELATED_________(){};

	/**
	 * ------------ JUSTIFIED TYPE RELATED FUNCTIONS ----------------
	 */
	
	function getJustifiedData(){
		
		var galleryWidth = getParentWidth();
		
		var objTiles = g_thumbs.getThumbs();
		var rowHeightOpt = g_options.tiles_justified_row_height;
		var arrWidths = [];
		var totalWidth = 0;
		var gap = g_options.tiles_justified_space_between;
		
		//get arr widths and total width
		jQuery.each(objTiles, function(index, objTile){
			objTile = jQuery(objTile);
			var objSize = g_functions.getElementSize(objTile);
						
			var tileWidth = objSize.width;
			var tileHeight = objSize.height;
			
			//cache size to take always original
			if(objTile.data("originalWidth") !== undefined){
				tileWidth = objTile.data("originalWidth");
				tileHeight = objTile.data("originalHeight");
			}else{
				objTile.data("originalWidth", tileWidth);
				objTile.data("originalHeight", tileHeight);				
			}
			            
			
			if (tileHeight !== rowHeightOpt) 
				tileWidth = Math.floor(tileWidth / tileHeight * rowHeightOpt);
			
			arrWidths[index] = tileWidth;
			
			totalWidth += tileWidth;
		});

		
		var numRows = Math.ceil(totalWidth / galleryWidth);
		var finalRowWidth = totalWidth / numRows;

		
		//fill rows array, break tiles to rows
		var arrRows = [], eachRowWidth = 0;
		var rowsWidths = [], rowsTiles = [], row = [];
		var progressWidth = 0, numRow = 0;
		
		jQuery.each(objTiles, function(index, objTile){
			var tileWidth = arrWidths[index];
						
			if( (progressWidth + tileWidth / 2) > (numRow+1) * finalRowWidth){
				
				rowsWidths[arrRows.length] = eachRowWidth;				
				arrRows.push(row);
				row = [];
				eachRowWidth = 0;
				numRow++;
			}
			
			progressWidth += tileWidth;
			eachRowWidth += tileWidth;
			
			row.push(objTile);
		});
		
		rowsWidths[arrRows.length] = eachRowWidth;
		arrRows.push(row);
				
		
		//set heights and position images:	
		var arrRowWidths = [];
		var arrRowHeights = [];
		var totalHeight = 0;
		
		jQuery.each(arrRows, function(index, row){
			
			var numTiles = row.length;
			var rowWidth = rowsWidths[index];
			
			var gapWidth = (row.length-1) * gap;

			var ratio = (galleryWidth - gapWidth) / rowWidth;
			var rowHeight = Math.round(rowHeightOpt * ratio);
			
			//count total height
			totalHeight += rowHeight;
			if(index > 0)
				totalHeight += gap;
			
			arrRowHeights.push(rowHeight);
			
			//ratio between 2 heights for fixing image width:
            var ratioHeights = rowHeight / rowHeightOpt;
			
            //set tiles sizes:
            var arrRowTileWidths = [];
            var actualRowWidth = gapWidth;
            
            jQuery.each(row, function(indexInRow, tile){
            	var objTile = jQuery(tile);
            	var tileIndex = objTile.index();
            	var tileWidth = arrWidths[tileIndex];
            	var newWidth = Math.round(tileWidth * ratioHeights);
            	
            	arrRowTileWidths[indexInRow] = newWidth;
            	actualRowWidth += newWidth;            	
            });
        	
            //fix images widths by adding or reducing 1 pixel
            var diff = actualRowWidth - galleryWidth;
            
            var newTotal = 0;
            jQuery.each(arrRowTileWidths, function(indexInRow, width){
            	
            	if(diff == 0)            		
            		return(false);
            	
            	if(diff < 0){
            		arrRowTileWidths[indexInRow] = width + 1;
            		diff++;
            	}else{
            		arrRowTileWidths[indexInRow] = width - 1;
            		diff--;
            	}
            	
            	//if at last item diff stays, add all diff
            	if(indexInRow == (arrRowTileWidths.length-1) && diff != 0)
            		arrRowTileWidths[indexInRow] -= diff;
            });
            
            arrRowWidths[index] = arrRowTileWidths;
		});
		
		
		var objData = {
				arrRows: arrRows,
				arrRowWidths: arrRowWidths,
				arrRowHeights: arrRowHeights,
				gap: gap,
				totalHeight: totalHeight
		};
		
		return(objData);
	}

	
	/**
	 * put justified images
	 */
	function placeJustified(toShow){
		
		if(!toShow)
			var toShow = false;
		
		var parentWidth = getParentWidth();

		var objData = getJustifiedData();
		
		//if the width changed after height change (because of scrollbar), recalculate		
		g_objParent.height(objData.totalHeight);
	
		var parentWidthAfter = getParentWidth();
		if(parentWidthAfter != parentWidth)
			objData = getJustifiedData();
		
		var posy = 0;
		var totalWidth = 0;		//just count total widht for check / print
		jQuery.each(objData.arrRows, function(index, row){
        	
			var arrRowTileWidths = objData.arrRowWidths[index];
			var rowHeight = objData.arrRowHeights[index];
			
			//resize and place tiles
            var posx = 0;
            jQuery.each(row, function(indexInRow, tile){
            	            	            	
            	var objTile = jQuery(tile);
            	var tileHeight = rowHeight;
            	var tileWidth = arrRowTileWidths[indexInRow];
            	
            	g_functions.setElementSizeAndPosition(objTile, posx, posy, tileWidth, tileHeight);
            	 
            	posx += tileWidth;
            	
            	if(posx > totalWidth)
            		totalWidth = posx;
            	
            	posx += objData.gap;
            	
            	if(toShow == true)
            		jQuery(tile).show();
            	
        			g_objWrapper.trigger(t.events.THUMB_SIZE_CHANGE, objTile);
            });
            
            posy += (rowHeight + objData.gap);
            
		});
		
	}
	
	
	
	
	/**
	 * run justified type gallery
	 */
	function runJustifiedType(){
		
		var objImages = jQuery(g_objWrapper).find("img.sovthumb-image");
		var objTiles = g_thumbs.getThumbs();
		
		objTiles.fadeTo(0,0);				
		
		g_functions.checkImagesLoaded(objImages, function(){
			
			setTimeout(function(){
				placeJustified(true);
				objTiles.fadeTo(0,1);
				g_objThis.trigger(t.events.TILES_FIRST_PLACED);
				setTransition();
			});
			
		});
				
	}
	

	/**
	 * run the gallery after init and set html
	 */
	function run(){
		
		//show tiles
		g_objWrapper.children(".ug-tile").show();
		
		g_objTileDesign.run();
				
		switch(g_options.tiles_type){
			default:
			case "columns":
				runColumnsType();
			break;
			case "justified":
				runJustifiedType();
			break;
		}
		
		if(g_temp.isFirstTimeRun == true){
			initEvents();
		}
		
		g_temp.isFirstTimeRun = false;
	}
	
		
	
	function __________EVENTS_______(){};
	
	/**
	 * on resize event
	 */
	function onResize(){
		
		if(g_temp.isFirstTimeRun == true)
			return(true);
			
		switch(g_options.tiles_type){
			case "columns":
				placeTiles(false);
			break;
			case "justified":
				placeJustified(false);
			break;
		}
		
	}

	
	/**
	 * init panel events
	 */
	function initEvents(){
		
		g_objGallery.on(g_gallery.events.SIZE_CHANGE, onResize);
		
		g_objTileDesign.initEvents();
				
	}
	
	/**
	 * destroy the events
	 */
	this.destroy = function(){
		
		g_objGallery.off(g_gallery.events.SIZE_CHANGE);
		g_objTileDesign.destroy();
	}
	
	
	/**
	 * init function for avia controls
	 */
	this.init = function(gallery, customOptions){
		
		init(gallery, customOptions);
	}

	
	/**
	 * set html
	 */
	this.setHtml = function(objParent){
		setHtml(objParent);
	}
	
	/**
	 * get tile design object
	 */
	this.getObjTileDesign = function(){
		return(g_objTileDesign);
	}
	
	/**
	 * set html and properties
	 */	
	this.run = function(){
		run();
	}
	
	
}
/**
 * tiles design class
 */
function UGTileDesign(){
	
	var t = this, g_objThis = jQuery(this);	
	var g_gallery = new UniteGalleryMain(), g_objGallery;
	var g_functions = new UGFunctions(), g_objParentWrapper, g_objWrapper;
	var g_thumbs = new UGThumbsGeneral(), g_items;


	this.events = {
			TILE_CLICK: "tile_click"
	};
	
	var g_options = {
						
			tile_width: 250,						//in case of fixed size: tile width
			tile_height: 200,						//in case of fixed size: tile height
			
			tile_enable_border:false,				//enable border of the tile
			tile_border_width:3,					//tile border width
			tile_border_color:"#F0F0F0",			//tile border color
			tile_border_radius:0,					//tile border radius (applied to border only, not to outline)
			
			tile_enable_outline: false,				//enable outline of the tile (works only together with the border)
			tile_outline_color: "#8B8B8B",			//tile outline color
			
			tile_enable_shadow:false,				//enable shadow of the tile
			tile_shadow_h:1,						//position of horizontal shadow
			tile_shadow_v:1,						//position of vertical shadow
			tile_shadow_blur:3,						//shadow blur
			tile_shadow_spread:2,					//shadow spread
			tile_shadow_color:"#8B8B8B",			//shadow color
			
			tile_enable_action:	true,				//enable tile action on click like lightbox
			tile_as_link: false,					//act the tile as link, no lightbox will appear
			tile_link_newpage: true,				//open the tile link in new page

			tile_enable_overlay: true,				//enable tile color overlay (on mouseover)
			tile_overlay_opacity: 0.4,				//tile overlay opacity
			tile_overlay_color: "#000000",			//tile overlay color
			
			tile_enable_icons: true,				//enable icons in mouseover mode
			tile_show_link_icon: false,				//show link icon (if the tile has a link). In case of tile_as_link this option not enabled
			tile_space_between_icons: 26,			//initial space between icons, (on small tiles it may change)
			
			tile_enable_image_effect:false,			//enable tile image effect
			tile_image_effect_type: "bw",			//bw, blur, sepia - tile effect type
			tile_image_effect_reverse: false,		//reverce the image, set only on mouseover state
			
			tile_enable_textpanel: false,			//enable textpanel
			tile_textpanel_source: "title",			//title,desc,desc_title. source of the textpanel. desc_title - if description empty, put title
			tile_textpanel_always_on: false,		//textpanel always visible
			tile_textpanel_appear_type: "slide"		//slide, fade - appear type of the textpanel on mouseover
	};
	
	var g_defaults = {
			thumb_color_overlay_effect: true,
			thumb_overlay_reverse: true,
			thumb_image_overlay_effect: false,
			thumb_text_overlay:true,
			tile_textpanel_enable_description: false,
			tile_textpanel_bg_opacity: 0.6,
			tile_textpanel_padding_top:8,
			tile_textpanel_padding_bottom: 8
	};
	
	var g_temp = {
		isFixedMode:false,
		eventSizeChange: "thumb_size_change",
		funcParentApproveClick: null
	};
	
	
	
	/**
	 * init the tile object
	 */
	function init(gallery, customOptions){
		
		g_gallery = gallery;
		
		g_objGallery = jQuery(gallery);		
		
		var objects = g_gallery.getObjects();
		g_objWrapper = objects.g_objWrapper;
		
		g_items = g_gallery.getArrItems();
				
		g_options = jQuery.extend(g_options, g_defaults);
		
		g_options = jQuery.extend(g_options, customOptions);
				
		modifyOptions();
				
		g_thumbs.init(gallery, g_options);	
		
		var objCustomOptions = {};	
				
		g_thumbs.setCustomThumbs(setHtmlThumb,["overlay"], objCustomOptions);
		
		//get thumb default options too:
		var thumbOptions = g_thumbs.getOptions();
		g_options = jQuery.extend(g_options, thumbOptions);
	}
	
	
	/**
	 * set thumb and textpanel options according tile options
	 */
	function modifyOptions(){
		
		//set overlay related options
		if(g_options.tile_enable_overlay == true){
			
			g_options.thumb_overlay_opacity = g_options.tile_overlay_opacity;
			g_options.thumb_overlay_color = g_options.tile_overlay_color;
			
		}else if(g_options.tile_enable_icons == false){		//if nothing on overlay - turn it off
			g_options.thumb_color_overlay_effect = false;		
		}else{											//if icons enabled - make it transparent
			g_options.thumb_overlay_opacity = 0;
		}
		
		//set item as link
		if(g_options.tile_as_link){
			g_options.thumb_wrapper_as_link = true;
			g_options.thumb_link_newpage = g_options.tile_link_newpage;
		}
		
		//outline cannot appear without border
		if(g_options.tile_enable_outline == true && g_options.tile_enable_border == false)
			g_options.tile_enable_outline = false;
		
	}
	
	
	
	/**
	 * set thumb html
	 */
	function setHtmlThumb(objThumbWrapper, objItem){
				
		var html = "<img src='"+objItem.urlThumb+"' alt='"+objItem.title+"' class='sovthumb-image'>";
		objThumbWrapper.append(html);
		objThumbWrapper.addClass("ug-tile");
		
		var objThumbImage = objThumbWrapper.children(".sovthumb-image");
		
		if(g_temp.isFixedMode == true){
			objThumbWrapper.fadeTo(0,0);		//turn on in thumbsGeneral
			g_functions.setElementSize(objThumbWrapper, g_options.tile_width, g_options.tile_height);
			objThumbWrapper.addClass("ug-tile-fixed");
		}
		
		//---- set thumb styles ---- 
		
		//set border:
		var objCss = {};
		
		if(g_options.tile_enable_border == true){
			objCss["border-width"] = g_options.tile_border_width+"px";
			objCss["border-style"] = "solid";
			objCss["border-color"] = g_options.tile_border_color;
			
			if(g_options.tile_border_radius)
				objCss["border-radius"] = g_options.tile_border_radius+"px";
		}
		
		//set outline:
		if(g_options.tile_enable_outline == true){
			objCss["outline"] = "1px solid " + g_options.tile_outline_color;
		}
		
		//set shadow
		if(g_options.tile_enable_shadow == true){
			var htmlShadow = g_options.tile_shadow_h+"px ";
			htmlShadow += g_options.tile_shadow_v+"px ";
			htmlShadow += g_options.tile_shadow_blur+"px ";
			htmlShadow += g_options.tile_shadow_spread+"px ";
			htmlShadow += g_options.tile_shadow_color;
			
			objCss["box-shadow"] = htmlShadow;
		}
		
		objThumbWrapper.css(objCss);
		
		
		//----- add icons
		
		var htmlAdd = "";
		
		if(g_options.tile_enable_icons){
			
			//add zoom icon
			if(g_options.tile_as_link == false && g_options.tile_enable_action == true){
				var iconPlayClass = "ug-button-play ug-icon-zoom";
				if(objItem.type != "image")
					iconPlayClass = "ug-button-play ug-icon-play";
				
				htmlAdd += "<div class='ug-tile-icon " + iconPlayClass + "'></div>";
			}
			
			//add link icon
			if(objItem.link && g_options.tile_show_link_icon == true || g_options.tile_as_link == true){
				
				if(g_options.tile_as_link == false){
					var linkTarget = "";
					if(g_options.tile_link_newpage == true)
						linkTarget = " target='_blank'";
					
					htmlAdd += "<a href='"+objItem.link+"'"+linkTarget+" class='ug-tile-icon ug-icon-link'></a>";					
				}else{
					htmlAdd += "<div class='ug-tile-icon ug-icon-link'></div>";					
				}
				
			}
						
		var objOverlay = objThumbWrapper.children(".sovthumb-overlay");
		
		objOverlay.append(htmlAdd);		
		
		var objButtonZoom = objOverlay.children("." + iconPlayClass);
		
		if(objButtonZoom.length == 0)
			objButtonZoom = null;
		else
			objButtonZoom.hide();
		
		var objButtonLink = objOverlay.children(".ug-icon-link");
		
		if(objButtonLink.length == 0)
			objButtonLink = null;
		else
			objButtonLink.hide();
		
		//if only zoom icon, make the tile clickable for lightbox open
		if(!objButtonLink && g_options.tile_enable_action == true)
			objThumbWrapper.addClass("ug-tile-clickable");
		
		}  //if icons enabled
		else{		//if the icons don't enabled, set the tile clickable
			
			if(g_options.tile_enable_action == true)
				objThumbWrapper.addClass("ug-tile-clickable");
		
		}
		
		//add image overlay
		if(g_options.tile_enable_image_effect == true){
			var imageOverlayHtml = "<div class='ug-tile-image-overlay' style='display:none'>";
			var imageEffectClass = " ug-"+g_options.tile_image_effect_type+"-effect";
			
			imageOverlayHtml += "<img src='"+objItem.urlThumb+"' alt='"+objItem.title+"' class='"+imageEffectClass+"'>";
			imageOverlayHtml += "</div>";
			
			objThumbWrapper.append(imageOverlayHtml);
			
		}
		
		
		//add text panel
		if(g_options.tile_enable_textpanel == true){
			
			var objTextPanel = new UGTextPanel();			 
			objTextPanel.init(g_gallery, g_options, "tile");
			
			objTextPanel.appendHTML(objThumbWrapper);				
			
			var panelText = objItem.title;
			switch(g_options.tile_textpanel_source){
				case "desc":
				case "description":
					panelText = objItem.description;
				break;
				case "desc_title":
					if(objItem.description != "")
						panelText = objItem.description;
				break;
			}
			
			
			objTextPanel.setTextPlain(panelText, "");
			
			if(g_options.tile_textpanel_always_on == false)
				objTextPanel.getElement().fadeTo(0,0);
						
			objThumbWrapper.data("objTextPanel", objTextPanel);
		}
		
	}
	
	
	/**
	 * get item from tile
	 */
	this.getItemByTile = function(objTile){
		return g_thumbs.getItemByThumb(objTile);
	}
	
	
	/**
	 * load tile image, place the image on load
	 */
	this.loadTileImage = function(objTile){
		
		var objImage = getTileImage(objTile);
			
		g_functions.checkImagesLoaded(objImage, null, function(objImage,isError){
			onPlaceImage(null, objTile, jQuery(objImage));
		});
		
	}
	
	function _________________GETTERS________________(){};
	
	/**
	 * get tile image
	 */
	function getTileImage(objTile){
		var objImage = objTile.children("img.sovthumb-image");
		return(objImage);
	}
	
	
	/**
	 * get image overlay
	 */
	function getTileOverlayImage(objTile){
		var objOverlayImage = objTile.children(".ug-tile-image-overlay");
		return(objOverlayImage);
	}
	
	/**
	 * get tile color overlay
	 */
	function getTileOverlay(objTile){
		var objOverlay = objTile.children(".sovthumb-overlay");
		return(objOverlay);		
	}
	
	
	/**
	 * get image effect
	 */
	function getTileImageEffect(objTile){		
		var objImageEffect = objTile.find(".ug-tile-image-overlay img");			
		return(objImageEffect);
	}

	
	/**
	 * get text panel
	 */
	function getTextPanel(objTile){
		var objTextPanel = objTile.data("objTextPanel");
		
		return(objTextPanel);
	}
	
	/**
	 * get text panel element from the tile
	 */
	function getTextPanelElement(objTile){
		var objTextPanel = objTile.find(".sovtextpanel");
		
		return(objTextPanel);
	}
	
	
	/**
	 * get button link
	 */
	function getButtonLink(objTile){
		var objButton = objTile.find(".ug-icon-link");
		if(objButton.length == 0)
			return(null);
		
		return objButton;
	}
	
	/**
	 * get button zoom
	 */
	function getButtonZoom(objTile){
		var objButton = objTile.find(".ug-button-play");
		
		if(objButton.length == 0)
			return(null);
		
		return objButton;
	}
	
	
	/**
	 * tells if the tile is over style
	 */
	function isOverStyle(objTile){
		
		if(objTile.hasClass("sovthumb-over"))
			return(true);
		
		return(false);
	}
	
	
	/**
	 * check if the tile is clickable
	 */
	function isTileClickable(objTile){
		
		return objTile.hasClass("ug-tile-clickable");
	}
	
	
	function _________________SETTERS________________(){};
	
	
	/**
	 * position the elements
	 */
	function positionElements(objTile){
				
		var objItem = t.getItemByTile(objTile);
		var objButtonZoom = getButtonZoom(objTile);
		var objButtonLink = getButtonLink(objTile);
		var sizeTile = g_functions.getElementSize(objTile);
		
		var objImageOverlay = getTileOverlayImage(objTile)
		var objThumbImage = getTileImage(objTile);
		var objImageEffect = getTileImageEffect(objTile);
		
		//set image overlay size
		if(g_options.tile_enable_image_effect == true){
				
			g_functions.setElementSize(objImageOverlay, sizeTile.width, sizeTile.height);
			g_functions.cloneElementSizeAndPos(objThumbImage, objImageEffect);
		}
		
		
		//scale images
		if(g_temp.isFixedMode){
						
			if(g_options.tile_enable_image_effect == false){
				
				g_functions.scaleImageCoverParent(objThumbImage, objTile);					
				
			}else{	//width the effect
				
				g_functions.scaleImageCoverParent(objImageEffect, objImageOverlay);									
				
				g_functions.cloneElementSizeAndPos(objImageEffect, objThumbImage);
				setTimeout(function(){
					g_functions.cloneElementSizeAndPos(objImageEffect, objThumbImage);
				},500);
				
			}
			
		}
		
		var objTextPanel = getTextPanel(objTile);
		
		
		//set text panel:
		if(g_options.tile_enable_textpanel == true){
			objTextPanel.refresh();
		}
		

		//set vertical gap for icons
		if(objButtonZoom || objButtonLink){
						
			var gapVert = 0;
			if(g_options.tile_enable_textpanel == true){
				var texPanelSize = g_functions.getElementSize(objTextPanel.getElement());
				if(texPanelSize.height > 0)
					gapVert = Math.floor((texPanelSize.height / 2) * -1);  
			}
			
		}
		
		if(objButtonZoom && objButtonLink){
			var sizeZoom = g_functions.getElementSize(objButtonZoom);
			var sizeLink = g_functions.getElementSize(objButtonLink);
			var spaceBetween = g_options.tile_space_between_icons;
			
			var buttonsWidth = sizeZoom.width + spaceBetween + sizeLink.width;
			var buttonsX = Math.floor((sizeTile.width - buttonsWidth) / 2); 
			
			//trace("X: "+buttonsX+" "+"space: " + spaceBetween);
			
			//if space more then padding, calc even space.
			if(buttonsX < spaceBetween){
				spaceBetween = Math.floor((sizeTile.width - sizeZoom.width - sizeLink.width) / 3);
				buttonsWidth = sizeZoom.width + spaceBetween + sizeLink.width;
				buttonsX = Math.floor((sizeTile.width - buttonsWidth) / 2);
			}
			
			g_functions.placeElement(objButtonZoom, buttonsX, "middle", 0 ,gapVert);
			g_functions.placeElement(objButtonLink, buttonsX + sizeZoom.width + spaceBetween, "middle", 0, gapVert);
						
		}else{
			
			if(objButtonZoom)
				g_functions.placeElement(objButtonZoom, "center", "middle", 0, gapVert);
			
			if(objButtonLink)
				g_functions.placeElement(objButtonLink, "center", "middle", 0, gapVert);
				
		}
		
		if(objButtonZoom)
			objButtonZoom.show();
		
		if(objButtonLink)
			objButtonLink.show();
		
	}
	
	
	/**
	 * set tiles htmls
	 */
	this.setHtml = function(objParent){
		g_objParentWrapper = objParent;
		g_thumbs.setHtmlThumbs(objParent);
	}
	
	
	/**
	 * set the overlay effect
	 */
	function setImageOverlayEffect(objTile, isActive){
		var objItem = t.getItemByTile(objTile);
		var objOverlayImage = getTileOverlayImage(objTile);
		
		var animationDuration = g_options.thumb_transition_duration;
		
		if(g_options.tile_image_effect_reverse == false){
			
			var objThumbImage = getTileImage(objTile);
			
			if(isActive){
				objThumbImage.fadeTo(1,1);			
				objOverlayImage.stop(true).fadeTo(animationDuration, 0);
			}
			else
				objOverlayImage.stop(true).fadeTo(animationDuration, 1);
			
		}else{
			
			if(isActive){
				objOverlayImage.stop(true).fadeTo(animationDuration, 1);
			}
			else{
				objOverlayImage.stop(true).fadeTo(animationDuration, 0);
			}
		}

	}
	
	
	/**
	 * set textpanel effect
	 */
	function setTextpanelEffect(objTile, isActive){
						
		var animationDuration = g_options.thumb_transition_duration;
		
		var objTextPanel = getTextPanelElement(objTile);
		if(!objTextPanel)
			return(true);
		
		if(g_options.tile_textpanel_appear_type == "slide"){
			
			var panelSize = g_functions.getElementSize(objTextPanel);
			if(panelSize.width == 0)
				return(false);
			
			var startPos = -panelSize.height;
			var endPos = 0;
						
			if(isActive == true){
								
				objTextPanel.fadeTo(0,1);
				
				if(objTextPanel.is(":animated") == false)
					objTextPanel.css("bottom",startPos+"px");
					
				objTextPanel.stop(true).animate({"bottom":endPos+"px"}, animationDuration);
				
			}else{
				
				objTextPanel.stop(true).animate({"bottom":startPos+"px"}, animationDuration);
				
			}
			
			
		}else{		//fade effect
			
			if(isActive == true){
				objTextPanel.stop(true).fadeTo(animationDuration, 1);
			}else{
				objTextPanel.stop(true).fadeTo(animationDuration, 0);
			}
			
		}
		
	}
	
	
	/**
	 * set tile over style
	 */
	function setOverStyle(data, objTile){
		
		objTile = jQuery(objTile);
				
		if(g_options.tile_enable_image_effect)
			setImageOverlayEffect(objTile, true);
		
		var objImageOverlay = objTile.children(".ug-tile-image-overlay");			
		objImageOverlay.show();

		if(g_options.tile_enable_textpanel == true && g_options.tile_textpanel_always_on == false)
			setTextpanelEffect(objTile, true);
		
	}
	
	
	/**
	 * set normal style
	 */
	function setNormalStyle(data, objTile){
				
		objTile = jQuery(objTile);
				
		if(g_options.tile_enable_image_effect)
			setImageOverlayEffect(objTile, false);
				
		if(g_options.tile_enable_textpanel == true && g_options.tile_textpanel_always_on == false)
			setTextpanelEffect(objTile, false);
		
	}
	
	
	/**
	 * set all tiles normal style
	 */
	function setAllTilesNormalStyle(objTileExcept){
		
		var objTiles = g_thumbs.getThumbs().not(objTileExcept);
		objTiles.each(function(index, objTile){
			g_thumbs.setThumbNormalStyle(jQuery(objTile));
		});
		
	}
	
	
	
	/**
	 * on tile size change, place elements
	 */
	function onSizeChange(data, objTile, forcePosition){
		
		objTile = jQuery(objTile);
				
		if(g_temp.isFixedMode == true && objTile.data("image_placed") !== true && forcePosition !== true)
			return(true);
		
		positionElements(objTile);			
	}
	
	
	/**
	 * on place image event after images loaded
	 */
	function onPlaceImage(data, objTile, objImage){
				
		positionElements(objTile);
		objImage.fadeTo(0,1);
		
		objTile.data("image_placed", true);
	}
	
	
	/**
	 * on tile click on mobile devices on normal state
	 * set the tile over state
	 */
	function onMobileClick(objTile){

		if(isTileClickable(objTile) == true){
			g_objThis.trigger(t.events.TILE_CLICK, objTile);
			return(true);
		}
		
		if(isOverStyle(objTile) == false){
			setAllTilesNormalStyle(objTile);			
			g_thumbs.setThumbOverStyle(objTile);
		}
		
	}
	
	
	/**
	 * on tile click event
	 */
	function onTileClick(event){
				
		var objTile = jQuery(this);
		
		var tagname = objTile.prop("tagName").toLowerCase();
		var isApproved = true;
		if(g_temp.funcParentApproveClick && g_temp.funcParentApproveClick() == false)
			isApproved = false;
				
		if(tagname == "a"){
			
			if(isApproved == false)
				event.preventDefault();
							
		}else{		//in case of div
			
			if(isOverStyle(objTile) == false){	//mobile click version
				
				if(isApproved == true)
					onMobileClick(objTile);
								
			}else{
				if(isTileClickable(objTile) == false)
					return(true);
				
				if(isApproved == true)
					g_objThis.trigger(t.events.TILE_CLICK, objTile);
			}
			
			
		}
		
	}
	
	
	/**
	 * click on zoom button (as tile click)
	 */
	function onZoomButtonClick(event){
				
		event.stopPropagation();
		
		var objTile = jQuery(this).parents(".ug-tile");
		
		var isApproved = true;
		
		if(g_temp.funcParentApproveClick && g_temp.funcParentApproveClick() == false)
			isApproved = false;
		
		if(isOverStyle(objTile) == false){
			onMobileClick(objTile);
			return(true);
		}
			
		if(isApproved == true){
			g_objThis.trigger(t.events.TILE_CLICK, objTile);
			return(false);
		}
		
	}
	
	
	/**
	 * on link icon click
	 */
	function onLinkButtonClick(event){
		var objTile = jQuery(this).parents(".ug-tile");
				
		if(g_temp.funcParentApproveClick && g_temp.funcParentApproveClick() == false)
			event.preventDefault();
		
		//allow click only from over style
		if(isOverStyle(objTile) == false && g_options.tile_as_link == false){
			event.preventDefault();
			onMobileClick(objTile);
		}
		
	}
	
	
	
	/**
	 * init events
	 */
	this.initEvents = function(){
		
		g_thumbs.initEvents();
		
		//connect the over and normal style of the regular thumbs
		jQuery(g_thumbs).on(g_thumbs.events.SETOVERSTYLE, setOverStyle);
		jQuery(g_thumbs).on(g_thumbs.events.SETNORMALSTYLE, setNormalStyle);
		jQuery(g_thumbs).on(g_thumbs.events.PLACEIMAGE, onPlaceImage);
		
		g_objWrapper.on(g_temp.eventSizeChange, onSizeChange);
		
		g_objParentWrapper.delegate(".ug-tile .ug-button-play", "click", onZoomButtonClick);
		
		g_objParentWrapper.delegate(".ug-tile", "click", onTileClick);
		
		g_objParentWrapper.delegate(".ug-tile .ug-icon-link", "click", onLinkButtonClick);
	}
	
	/**
	 * destroy the element events
	 */
	this.destroy = function(){
				
		jQuery(g_thumbs).off(g_thumbs.events.SETOVERSTYLE);
		jQuery(g_thumbs).off(g_thumbs.events.SETNORMALSTYLE);
		jQuery(g_thumbs).off(g_thumbs.events.PLACEIMAGE);
		g_objWrapper.off(g_temp.eventSizeChange);
		
		
		if(g_options.tile_enable_textpanel == true){
			var objThumbs = g_thumbs.getThumbs();
			jQuery.each(objThumbs, function(index, thumb){
				var textPanel = getTextPanel(jQuery(thumb));
				textPanel.destroy();
			});
		}
		
		g_thumbs.destroy();
					
	}
	
	
	/**
	 * external init
	 */
	this.init = function(gallery, g_thumbs, customOptions){
		
		init(gallery, g_thumbs, customOptions);
	}
	
	/**
	 * set fixed mode
	 */
	this.setFixedMode = function(){
		
		g_temp.isFixedMode = true;
	
	}
	
	/**
	 * set parent approve click function
	 */
	this.setApproveClickFunction = function(funcApprove){
		g_temp.funcParentApproveClick = funcApprove;
	}
	
	/**
	 * run the tile design
	 */
	this.run = function(){
		
		//return(false);
		
		var objThumbs = g_thumbs.getThumbs();
		
		//hide original image if image effect active
		if(g_options.tile_enable_image_effect == true && g_options.tile_image_effect_reverse == false)
			objThumbs.children(".sovthumb-image").fadeTo(0,0);
		
		g_thumbs.setHtmlProperties();
		
		if(g_temp.isFixedMode == true){
			objThumbs.children(".sovthumb-image").fadeTo(0,0);			
			g_thumbs.loadThumbsImages();
		}
	}
	
	/**
	 * get thumbs general option
	 */
	this.getObjThumbs = function(){
		return g_thumbs;
	}
	
	/**
	 * get options
	 */
	this.getOptions = function(){
		return g_options;
	}
	
}


function UGAviaControl(){

	var g_parent, g_gallery, g_objects, g_objStrip, g_objStripInner, g_options;
	var g_isVertical;
	
	var g_temp = {
		touchEnabled:false,			//variable that tells if touch event was before move event
		isMouseInsideStrip: false,
		strip_finalPos:0,
		handle_timeout:"",
		isStripMoving:false,
		isControlEnabled: true
	};
	
	
	/**
	 * enable the control
	 */
	this.enable = function(){
		g_temp.isControlEnabled = true;
	}
	
	/**
	 * disable the control
	 */
	this.disable = function(){
		g_temp.isControlEnabled = false;		
	}
	
	/**
	 * init function for avia controls
	 */
	this.init = function(objParent){
		g_parent = objParent;
		
		g_objects = objParent.getObjects();
				
		g_gallery = g_objects.g_gallery;
		
		g_objStrip = g_objects.g_objStrip;
		g_objStripInner = g_objects.g_objStripInner;
		g_options = g_objects.g_options;
		g_isVertical = g_objects.isVertical;		
				
		initEvents();
	}
	
	/**
	 * get mouse position from event according the orientation
	 */
	function getMousePos(event){
		
		if(g_isVertical == false)
			return(event.pageX);
		
		return(event.pageY);
	}
	
	/**
	 * handle avia strip control event on body mouse move
	 */
	function initEvents(event){
		
		//make sure that the avia control will not work on touch devices
		jQuery("body").on("touchstart", function(event){
			
			if(g_temp.isControlEnabled == false)
				return(true);
			
			g_temp.touchEnabled = true;
			
		});
		
		//on body move
		jQuery("body").mousemove(function(event){
			
			if(g_temp.isControlEnabled == false)
				return(true);
									
			//protection for touch devices, disable the avia events
			if(g_temp.touchEnabled == true){
				jQuery("body").off("mousemove");
				return(true);
			}
			
			g_temp.isMouseInsideStrip = g_objStrip.ismouseover();
			var strip_touch_active = g_parent.isTouchMotionActive();
			
			if(g_temp.isMouseInsideStrip == true && strip_touch_active == false){
				
				var mousePos = getMousePos(event);
				
				moveStripToMousePosition(mousePos);
			}else{
				stopStripMovingLoop();
			}
			
		});
						
	}
	
	
	/**
	 * destroy the avia control events
	 */
	this.destroy = function(){
		
		jQuery("body").off("touchstart");
		jQuery("body").off("mousemove");

	}
	
	
	/**
	 * get inner y position according mouse y position on the strip
	 */
	function getInnerPosY(mouseY){
		
		var stripHeight = g_objStrip.height();
		var innerHeight = g_objStripInner.height();		
		
		
		//if all thumbs visible, no need to move
		if(stripHeight > innerHeight)
			return(false);
		
		//find y position inside the strip
		var stripOffset = g_objStrip.offset();		
		var offsetY = stripOffset.top;
		var posy = mouseY - offsetY;
		
		//set measure line parameters
		var mlineStart = g_options.thumb_height;
		var mlineEnd = stripHeight - g_options.thumb_height;
		var mLineSize = mlineEnd - mlineStart;
				
		//fix position borders on the measure line
		if(posy < mlineStart)
			posy = mlineStart;
		
		if(posy > mlineEnd)
			posy = mlineEnd;
		
		//count the ratio of the position on the measure line
		var ratio = (posy - mlineStart) / mLineSize;
		var innerPosY = (innerHeight - stripHeight) * ratio;
		innerPosY = Math.round(innerPosY);
		innerPosY = innerPosY * -1;
				
		return(innerPosY);
	}

	
	/**
	 * get inner x position according mouse x position on the strip
	 */
	function getInnerPosX(mouseX){
		
		var stripWidth = g_objStrip.width();
		var innerWidth = g_objStripInner.width();		
		
		//if all thumbs visible, no need to move
		if(stripWidth > innerWidth)
			return(false);
		
		var stripOffset = g_objStrip.offset();
		var offsetX = stripOffset.left;
		var posx = mouseX - offsetX;
		
		//set measure line parameters
		var mlineStart = g_options.thumb_width;
		var mlineEnd = stripWidth - g_options.thumb_width;
		var mLineSize = mlineEnd - mlineStart;
				
		//fix position borders on the measure line
		if(posx < mlineStart)
			posx = mlineStart;
		
		if(posx > mlineEnd)
			posx = mlineEnd;
		
		//count the ratio of the position on the measure line
		var ratio = (posx - mlineStart) / mLineSize;
		var innerPosX = (innerWidth - stripWidth) * ratio;
		innerPosX = Math.round(innerPosX);
				
		innerPosX = innerPosX * -1;
		
		return(innerPosX);
	}
		
		
	/**
	 * move strip stap to final position
	 */
	function moveStripStep(){
		
		if(g_temp.is_strip_moving == false){
			return(false);
		}
		
		var innerPos = g_parent.getInnerStripPos();
		
		if(Math.floor(innerPos) == Math.floor(g_temp.strip_finalPos)){
			stopStripMovingLoop();
		}
		
		//calc step
		var diff = Math.abs(Math.abs(g_temp.strip_finalPos) - Math.abs(innerPos));
		
		var dpos;
		if(diff < 1){
			dpos = diff;
		}
		else{
		
			dpos = diff / 4;
			if(dpos > 0 && dpos < 1)
				dpos = 1;
		}		
		
		if(g_temp.strip_finalPos < innerPos)
			dpos = dpos * -1;
			
		var newPos = innerPos + dpos;
		
		g_parent.positionInnerStrip(newPos);
		
	}
	
	
	/**
	 * start loop of strip moving
	 */
	function startStripMovingLoop(){
		
		if(g_temp.isStripMoving == true)
			return(false);
			
		g_temp.isStripMoving = true;
		g_temp.handle_timeout = setInterval(moveStripStep,10);
	}
	
	/**
	 * stop loop of strip moving
	 */
	function stopStripMovingLoop(){
		
		if(g_temp.isStripMoving == false)
			return(false);
			
		g_temp.isStripMoving = false;
		g_temp.handle_timeout = clearInterval(g_temp.handle_timeout);
	}

	/**
	 * get inner position according the orientation
	 * taken by the mouse position
	 */
	function getInnerPos(mousePos){
		
		if(g_isVertical == false)
			return getInnerPosX(mousePos);
		else
			return getInnerPosY(mousePos);
		
	}
	
	
	/**
	 * move the strip to mouse position on it
	 * mousex - mouse position relative to the document
	 */
	function moveStripToMousePosition(mousePos){		
		
		var innerPos = getInnerPos(mousePos);
		g_temp.is_strip_moving = true;
		g_temp.strip_finalPos = innerPos;
				
		startStripMovingLoop();
	}
	
}

function UGSlider(){
	
	var t = this, g_objThis = jQuery(t);
	var g_gallery = new UniteGalleryMain(), g_objGallery, g_objWrapper, g_objThumbs;	
	//the video arrows is independent arrows that is not sitting on the controls
	var g_objSlider, g_objInner, g_objSlide1, g_objSlide2, g_objSlide3, g_objArrowLeft, g_objArrowRight;
	var g_objTouchSlider, g_objZoomSlider, g_objZoomPanel, g_objButtonPlay = null, g_objButtonFullscreen = null, g_objBullets = null;
	var g_objVideoPlayer = new UGVideoPlayer(), g_optionsPrefix;
	var g_functions = new UGFunctions(), g_objProgress = null, g_objTextPanel = null;
	
	
	this.events = {		
		ITEM_CHANGED: "item_changed",				//on item changed
		BEFORE_SWITCH_SLIDES: "before_switch",		//before slides switching
		BEFORE_RETURN: "before_return",				//before return from pan or from zoom
		AFTER_RETURN: "after_return",				//after return from pan or from zoom
		ZOOM_START: "slider_zoom_start",			//on zoom start 
		ZOOM_END: "slider_zoom_end",				//on zoom move 
		ZOOMING: "slider_zooming",					//on zooming
		ZOOM_CHANGE: "slider_zoom_change",			//on slide image image zoom change	
		START_DRAG: "start_drag",					//on slider drag start
		AFTER_DRAG_CHANGE: "after_drag_change",		//after finish drag chagne transition
		ACTION_START: "action_start",				//on slide action start
		ACTION_END: "action_end",					//on slide action stop
		CLICK: "click",								//on click event
		TRANSITION_START:"slider_transition_start",	//before transition start event
		TRANSITION_END:"slider_transition_end",		//on transition end event
		AFTER_PUT_IMAGE: "after_put_image",			//after put slide image
		IMAGE_MOUSEENTER: "slider_image_mouseenter", //on slide image mouseonter
		IMAGE_MOUSELEAVE: "slider_image_mouseleave"	 //on slide image mouseleave
	}
	
	var g_options = {
		  slider_scale_mode: "fill",					//fit: scale down and up the image to always fit the slider
		  												//down: scale down only, smaller images will be shown, don't enlarge images (scale up)
		  												//fill: fill the entire slider space by scaling, cropping and centering the image
		  slider_scale_mode_media: "fill",				//fit, down, full scale mode on media items
		  slider_scale_mode_fullscreen: "down",			//fit, down, full scale mode on fullscreen.
		  		  
		  slider_item_padding_top: 0,					//padding top of the slider item
		  slider_item_padding_bottom: 0,				//padding bottom of the slider item
		  slider_item_padding_left: 0,					//padding left of the slider item
		  slider_item_padding_right: 0,					//padding right of the slider item
		  slider_background_color: "",					//slider background color, set if you want to change default
		  
		  slider_image_padding_top: 0,					//padding top of the image inside the item
		  slider_image_padding_bottom: 0,				//padding bottom of the image inside the item
		  slider_image_padding_left: 0,					//padding left of the image inside the item
		  slider_image_padding_right: 0,				//padding right of the image inside the item

		  slider_image_border: false,					//enable border around the image
		  slider_image_border_width: 10,				//image border width
		  slider_image_border_color: "#ffffff",			//image border color
		  slider_image_border_radius: 0,				//image border radius
		  slider_image_shadow: false,					//enable border shadow the image
		  
		  slider_video_padding_top: 0,					//padding top of the video player inside the item
		  slider_video_padding_bottom: 0,				//padding bottom of the video player inside the item
		  slider_video_padding_left: 0,					//padding left of the video player inside the item
		  slider_video_padding_right: 0,				//padding right of the video player inside the item
		  slider_video_enable_closebutton: true,		//enable video close button
		  
		  slider_transition: "slide",					//fade, slide - the transition of the slide change
		  slider_transition_speed:300,				 	//transition duration of slide change
		  slider_transition_easing: "easeInOutQuad",	//transition easing function of slide change
		  
		  slider_control_swipe:true,					//true,false - enable swiping control
		  slider_control_zoom:true,						//true, false - enable zooming control
		  slider_loader_type: 1,						//shape of the loader (1-7)
		  slider_loader_color:"white",					//color of the loader: (black , white)
		  
		  slider_enable_bullets: false,					//enable the bullets onslider element
		  slider_bullets_skin: "",						//skin of the bullets, if empty inherit from gallery skin
		  slider_bullets_space_between: -1,				//set the space between bullets. If -1 then will be set default space from the skins
		  slider_bullets_align_hor:"center",			//left, center, right - bullets horizontal align
		  slider_bullets_align_vert:"bottom",			//top, middle, bottom - bullets vertical algin
		  slider_bullets_offset_hor:0,					//bullets horizontal offset 
		  slider_bullets_offset_vert:10,				//bullets vertical offset
		  
		  slider_enable_arrows: true,					//enable arrows onslider element
		  slider_arrows_skin: "",						//skin of the slider arrows, if empty inherit from gallery skin
		  
		  slider_arrow_left_align_hor:"left",	  		//left, center, right - left arrow horizonal align
		  slider_arrow_left_align_vert:"middle", 		//top, middle, bottom - left arrow vertical align
		  slider_arrow_left_offset_hor:20,		  		//left arrow horizontal offset
		  slider_arrow_left_offset_vert:0,		  		//left arrow vertical offset
		  
		  slider_arrow_right_align_hor:"right",   		//left, center, right - right arrow horizontal algin
		  slider_arrow_right_align_vert:"middle", 		//top, middle, bottom - right arrow vertical align
		  slider_arrow_right_offset_hor:20,	   			//right arrow horizontal offset 
		  slider_arrow_right_offset_vert:0,	   			//right arrow vertical offset
		  
		  slider_enable_progress_indicator: true,		 //enable progress indicator element
		  slider_progress_indicator_type: "pie",		 //pie, pie2, bar (if pie not supported, it will switch to bar automatically)
		  slider_progress_indicator_align_hor:"right",   //left, center, right - progress indicator horizontal align
		  slider_progress_indicator_align_vert:"top",    //top, middle, bottom - progress indicator vertical align
		  slider_progress_indicator_offset_hor:10,	     //progress indicator horizontal offset 
		  slider_progress_indicator_offset_vert:10,	     //progress indicator vertical offset
		  
		  slider_enable_play_button: true,				 //true,false - enable play / pause button onslider element
		  slider_play_button_skin: "",					 //skin of the slider play button, if empty inherit from gallery skin
		  slider_play_button_align_hor:"left",    		 //left, center, right - play button horizontal align
		  slider_play_button_align_vert:"top",     		 //top, middle, bottom - play button vertical align
		  slider_play_button_offset_hor:40,	       		 //play button horizontal offset 
		  slider_play_button_offset_vert:8,	   			 //play button vertical offset
		  slider_play_button_mobilehide:false,		 	 //hide the play button on mobile
		  
		  slider_enable_fullscreen_button: true,		 //true,false - enable fullscreen button onslider element
		  slider_fullscreen_button_skin: "",			 //skin of the slider fullscreen button, if empty inherit from gallery skin
		  slider_fullscreen_button_align_hor:"left",     //left, center, right	- fullscreen button horizonatal align
		  slider_fullscreen_button_align_vert:"top",     //top, middle, bottom - fullscreen button vertical align
		  slider_fullscreen_button_offset_hor:11,	     //fullscreen button horizontal offset 
		  slider_fullscreen_button_offset_vert:9,	   	 //fullscreen button vertical offset
		  slider_fullscreen_button_mobilehide:false,	 //hide the button on mobile
		  
		  slider_enable_zoom_panel: true,				 //true,false - enable the zoom buttons, works together with zoom control.
		  slider_zoompanel_skin: "",					 //skin of the slider zoom panel, if empty inherit from gallery skin		  
		  slider_zoompanel_align_hor:"left",    		 //left, center, right - zoom panel horizontal align
		  slider_zoompanel_align_vert:"top",     	 	 //top, middle, bottom - zoom panel vertical align
		  slider_zoompanel_offset_hor:12,	       		 //zoom panel horizontal offset 
		  slider_zoompanel_offset_vert:92,	   			 //zoom panel vertical offset
		  slider_zoompanel_mobilehide:false,		     //hide the zoom panel on mobile
		  
		  slider_controls_always_on: false,				//true,false - controls are always on, false - show only on mouseover
		  slider_controls_appear_ontap: true,			//true,false - appear controls on tap event on touch devices
		  slider_controls_appear_duration: 300,			//the duration of appearing controls
		  
		  slider_enable_text_panel: true,				//true,false - enable the text panel
		  slider_textpanel_always_on: true,				//true,false - text panel are always on, false - show only on mouseover
		  
		  slider_videoplay_button_type: "square"		//square, round - the videoplay button type, square or round	
	};
	
	
	//default options for bar progress incicator
	var g_defaultsProgressBar = {
		  slider_progress_indicator_align_hor:"left",    	//left, center, right
		  slider_progress_indicator_align_vert:"bottom",    //top, middle, bottom
		  slider_progress_indicator_offset_hor:0,	       	//horizontal offset 
		  slider_progress_indicator_offset_vert:0	   		//vertical offset
	};
	
	var g_temp = {
		isRunOnce: false,
		isTextPanelSaparateHover: false,					//if the panel need to be appeared without the controls object on mouseover
		numPrev:1,
		numCurrent:2,
		numNext: 3,
		isControlsVisible: true,
		currentControlsMode: "image"
	};
	
	function __________GENERAL___________(){};
	
	
	/**
	 * init the slider
	 */
	function initSlider(objGallery, objOptions, optionsPrefix){
		g_gallery = objGallery;
		
		//change options by prefix
		if(optionsPrefix){
			g_optionsPrefix = optionsPrefix;
			objOptions = g_functions.convertCustomPrefixOptions(objOptions, g_optionsPrefix, "slider");
		}
		
		g_objGallery = jQuery(objGallery);
		
		var objects = g_gallery.getObjects();		
		g_objWrapper = objects.g_objWrapper;
		g_objThumbs = objects.g_objThumbs;
		
		//set progress indicator bar defaults if type bar
		if(objOptions.hasOwnProperty("slider_progress_indicator_type"))
			g_options.slider_progress_indicator_type = objOptions.slider_progress_indicator_type;
		
		if(g_options.slider_progress_indicator_type == "bar"){
			g_options = jQuery.extend(g_options, g_defaultsProgressBar);
		}
		
		if(objOptions)
			t.setOptions(objOptions);
		
		processOptions();
		
		//init bullets:
		if(g_options.slider_enable_bullets == true){
			g_objBullets = new UGBullets();
			var bulletsOptions = {
					bullets_skin: g_options.slider_bullets_skin,
					bullets_space_between: g_options.slider_bullets_space_between
			}
			g_objBullets.init(g_gallery, bulletsOptions);
		}
		
		//init text panel
		if(g_options.slider_enable_text_panel){
			g_objTextPanel = new UGTextPanel();
			g_objTextPanel.init(g_gallery, g_options, "slider");
		}
		
		if(g_options.slider_enable_zoom_panel){
			g_objZoomPanel = new UGZoomButtonsPanel();
			g_objZoomPanel.init(t, g_options);
		}
		
		var galleryID = g_gallery.getGalleryID();
		
		//init video player
		g_objVideoPlayer.init(g_options, false, galleryID);		
	}
	
	
	/**
	 * run the slider functionality
	 */
	function runSlider(){
		
		if(g_temp.isRunOnce == true)
			return(false);
		
		g_temp.isRunOnce = true;
		
		//set background color
	   if(g_options.slider_background_color)		   		
		   g_objSlider.css("background-color", g_options.slider_background_color);
		
		//init touch slider control
		if(g_options.slider_control_swipe == true){
			g_objTouchSlider = new UGTouchSliderControl();
			g_objTouchSlider.init(t, g_options);
		}

		//init zoom slider control
		if(g_options.slider_control_zoom == true){
			g_objZoomSlider = new UGZoomSliderControl();
			g_objZoomSlider.init(t, g_options);
		}
		
		//run the text panel
		if(g_objTextPanel)
			g_objTextPanel.run();
		
		initEvents();		
	}
	
	
	/**
	 * process the options
	 */
	function processOptions(){
		var galleryOptions = g_gallery.getOptions();
		
		//set skins:
		var globalSkin = galleryOptions.gallery_skin;
		
		if(g_options.slider_bullets_skin == "")
			g_options.slider_bullets_skin = globalSkin;
		
		if(g_options.slider_arrows_skin == "")
			g_options.slider_arrows_skin = globalSkin;
		
		if(g_options.slider_zoompanel_skin == "")
			g_options.slider_zoompanel_skin = globalSkin;
		
		if(g_options.slider_play_button_skin == "")
			g_options.slider_play_button_skin = globalSkin;
		
		if(g_options.slider_fullscreen_button_skin == "")
			g_options.slider_fullscreen_button_skin = globalSkin;
		
		g_options.video_enable_closebutton = g_options.slider_video_enable_closebutton;
		
	}
	
	/**
	 * 
	 * get html slide
	 */
	function getHtmlSlide(loaderClass, numSlide){
		
		var classVideoplay = "ug-type-square";
		if(g_options.slider_videoplay_button_type == "round")
			classVideoplay = "ug-type-round";
		
		html = "";
		html += "<div class='sovslide-wrapper ug-slide"+numSlide+"'>";
		html += "<div class='sovitem-wrapper'></div>";
		html += "<div class='ug-slider-preloader "+loaderClass+"'></div>";
		html += "<div class='ug-button-videoplay "+classVideoplay+"' style='display:none'></div>";
		html += "</div>";
		
		return(html);
	}
	
	
	/**
	 * set the slider html
	 */
	function setHtmlSlider(objParent){
		
		if(objParent)
			g_objWrapper = objParent;
		
		//get if the slide has controls
		var loaderClass = getLoaderClass();
		var galleryOptions = g_gallery.getOptions();
		
		var html = "<div class='sovslider-wrapper'>";
		
		html += "<div class='sovslider-inn'>";
		html += getHtmlSlide(loaderClass,1);
		html += getHtmlSlide(loaderClass,2);
		html += getHtmlSlide(loaderClass,3);
				
		html += "</div>";	//end inner
		
		//----------------
				
		//add arrows
		if(g_options.slider_enable_arrows == true){
			html += "<div class='ug-slider-control arrowll skins'></div>";
			html += "<div class='ug-slider-control arrowrr skins'></div>";
		}
		
		//add play button
		if(g_options.slider_enable_play_button == true){
			html += "<div class='ug-slider-control ug-button-play skins'></div>";
		}
		
		//add fullscreen button
		if(g_options.slider_enable_fullscreen_button == true){
			html += "<div class='ug-slider-control ug-button-fullscreen skins'></div>";
		}	
		html +=	"</div>";	//end slider		
		g_objWrapper.append(html);

		//set objects
		g_objSlider = g_objWrapper.children(".sovslider-wrapper");
		g_objInner = g_objSlider.children(".sovslider-inn");
		
		
		g_objSlide1 = g_objInner.children(".ug-slide1");
		g_objSlide2 = g_objInner.children(".ug-slide2");
		g_objSlide3 = g_objInner.children(".ug-slide3");
		
		//set slides data
		g_objSlide1.data("slidenum",1);
		g_objSlide2.data("slidenum",2);
		g_objSlide3.data("slidenum",3);
				
		//add bullets
		if(g_objBullets)
			g_objBullets.appendHTML(g_objSlider);
		//get arrows object
		if(g_options.slider_enable_arrows == true){
			g_objArrowLeft = g_objSlider.children(".arrowll");
			g_objArrowRight = g_objSlider.children(".arrowrr");
		}
				
		//get play button
		if(g_options.slider_enable_play_button == true){
			g_objButtonPlay = g_objSlider.children(".ug-button-play");
		}
		
		//get fullscreen button
		if(g_options.slider_enable_fullscreen_button == true){
			g_objButtonFullscreen = g_objSlider.children(".ug-button-fullscreen");
		}
		//add progress indicator
		if(g_options.slider_enable_progress_indicator == true){
			
			g_objProgress = g_functions.initProgressIndicator(g_options.slider_progress_indicator_type, g_options, g_objSlider);
			
			var finalType = g_objProgress.getType();
			
			//change options in case of type change
			if(finalType == "bar" && g_options.slider_progress_indicator_type == "pie"){
				g_options.slider_progress_indicator_type = "bar";
				g_options = jQuery.extend(g_options, g_defaultsProgressBar);
			}	
			
			g_gallery.setProgressIndicator(g_objProgress);
		}
		//add text panel (hidden)
		if(g_options.slider_enable_text_panel == true){
			
			
			//add panel to controls:
			if(g_options.slider_textpanel_always_on == false && g_options.slider_controls_always_on == false)
				g_objTextPanel.appendHTML(g_objSlider);
			else{	//add panel to slider
				
				g_objTextPanel.appendHTML(g_objSlider);
								
				//hide panel saparatelly from the controls object
				if(g_options.slider_textpanel_always_on == false){
					
					//hide the panel
					var panelElement = g_objTextPanel.getElement();
					panelElement.hide().data("isHidden", true);

					g_temp.isTextPanelSaparateHover = true;
				}
				
			}
			
		}
			
		//----------------
		
		//add zoom buttons panel:
		if(g_options.slider_enable_zoom_panel == true){
			g_objZoomPanel.appendHTML(g_objSlider);
		}
	
		
		//add video player
		g_objVideoPlayer.setHtml(g_objSlider);
	}

	function positionSlideElements(objSlide){
		
		//position preloader
		var objPreloader = getSlidePreloader(objSlide);
		g_functions.placeElementInParentCenter(objPreloader);
		
		//position video play button
		var objVideoPlayButton = getSlideVideoPlayButton(objSlide);
		g_functions.placeElementInParentCenter(objVideoPlayButton);		
	}

	function positionElements(){
				
		//place bullets
		if(g_objBullets){
			objBullets = g_objBullets.getElement();
			g_functions.placeElement(objBullets, g_options.slider_bullets_align_hor, g_options.slider_bullets_align_vert, g_options.slider_bullets_offset_hor, g_options.slider_bullets_offset_vert);
		}
		
		//place arrows
		if(g_options.slider_enable_arrows == true){
			g_functions.placeElement(g_objArrowLeft, g_options.slider_arrow_left_align_hor, g_options.slider_arrow_left_align_vert, g_options.slider_arrow_left_offset_hor, g_options.slider_arrow_left_offset_vert);
			g_functions.placeElement(g_objArrowRight, g_options.slider_arrow_right_align_hor, g_options.slider_arrow_left_align_vert, g_options.slider_arrow_right_offset_hor, g_options.slider_arrow_right_offset_vert);
		}
		
		//hide controls
		if(g_options.slider_controls_always_on == false)
			hideControls(true);
		
		//place progress indicator
		if(g_objProgress){
			
			var objProgressElement = g_objProgress.getElement();
			
			if(g_options.slider_progress_indicator_type == "bar"){
				var sliderWidth = g_objSlider.width();				
				g_objProgress.setSize(sliderWidth);
				g_functions.placeElement(objProgressElement, "left", g_options.slider_progress_indicator_align_vert, 0, g_options.slider_progress_indicator_offset_vert);				
				
			}else{
				g_functions.placeElement(objProgressElement, g_options.slider_progress_indicator_align_hor, g_options.slider_progress_indicator_align_vert, g_options.slider_progress_indicator_offset_hor, g_options.slider_progress_indicator_offset_vert);				
				
			}			
		}
				
		//position text panel
		if(g_objTextPanel)
			g_objTextPanel.positionPanel();
		
		//position controls elements
		placeControlsElements();
		
		//place slide elements
		positionSlideElements(g_objSlide1);
		positionSlideElements(g_objSlide2);
		positionSlideElements(g_objSlide3);
		
		checkMobileModify();
		
	}
	
	
	/**
	 * place elements that located on "controls" div
	 */
	function placeControlsElements(){
		
		if(g_objButtonPlay)			
			g_functions.placeElement(g_objButtonPlay, g_options.slider_play_button_align_hor, g_options.slider_play_button_align_vert, g_options.slider_play_button_offset_hor, g_options.slider_play_button_offset_vert);			
		
		//position fullscreen button
		if(g_objButtonFullscreen)			
			g_functions.placeElement(g_objButtonFullscreen, g_options.slider_fullscreen_button_align_hor, g_options.slider_fullscreen_button_align_vert, g_options.slider_fullscreen_button_offset_hor, g_options.slider_fullscreen_button_offset_vert);
		
		//position zoom panel
		if(g_objZoomPanel){
			var zoomPanelElement = g_objZoomPanel.getElement();
			g_functions.placeElement(zoomPanelElement, g_options.slider_zoompanel_align_hor, g_options.slider_zoompanel_align_vert, g_options.slider_zoompanel_offset_hor, g_options.slider_zoompanel_offset_vert);
		}
	}
	
	
	/**
	 * 
	 * animate opacity in and out
	 */
	function animateOpacity(objItem, opacity, completeFunction){
		
		if(completeFunction)
			objItem.fadeTo(g_options.slider_transition_speed, opacity, completeFunction);
		else
			objItem.fadeTo(g_options.slider_transition_speed, opacity);
	}
	
		
	/**
	 * position slides by their order
	 */
	function positionSlides(){
		
		var slides = t.getSlidesReference();
		var posX = 0, posY = 0, innerWidth;
		var posXPrev=0, posXCurrent = 0, posXNext, nextHasItem, prevHasItem;
				
		nextHasItem = t.isSlideHasItem(slides.objNextSlide);
		prevHasItem = t.isSlideHasItem(slides.objPrevSlide);
		
		if(prevHasItem){
			posXCurrent = slides.objPrevSlide.outerWidth();
			slides.objPrevSlide.css("z-index",1);
		}else
			slides.objPrevSlide.hide();			
		
		posXNext = posXCurrent + slides.objCurrentSlide.outerWidth();
		
		innerWidth = posXNext;
		if(nextHasItem){
			innerWidth = posXNext + slides.objNextSlide.outerWidth();
			slides.objPrevSlide.css("z-index",2);		
		}else
			slides.objNextSlide.hide();
		
		slides.objCurrentSlide.css("z-index",3);
		
		//set inner size and position
		g_functions.placeElement(slides.objCurrentSlide, posXCurrent, posY);		
		g_objInner.css({"left":-posXCurrent+"px", width:innerWidth+"px"});

		//position prev
		if(prevHasItem){
			g_functions.placeElement(slides.objPrevSlide, posXPrev, posY);
			g_functions.showElement(slides.objPrevSlide);
		}
		
		if(nextHasItem){
			g_functions.showElement(slides.objNextSlide);
			g_functions.placeElement(slides.objNextSlide, posXNext, posY);
		}
		
	}
	
	
	
	/**
	 * do the transition between the current and the next
	 */
	function doTransition(direction, objItem, forceTransition){
		
		g_objThis.trigger(t.events.TRANSITION_START);
		
		var transition = g_options.slider_transition;
		if(forceTransition)
			transition = forceTransition;
		
		switch(transition){
			default:
			case "fade":
				transitionFade(objItem);
			break;
			case "slide":				
				transitionSlide(direction, objItem);
			break;
			case "lightbox_open":		//fade transition without animation
				transitionFade(objItem, true);
			break;
		}
		
	}
	
	/**
	 * do slide transition
	 */
	function transitionSlide(direction, objItem){
		
		var animating = t.isAnimating();

		if(animating == true){
			g_temp.itemWaiting = objItem;
			return(true);
		}
		
		//always clear next item on transition start
		// next item can be only in the middle of the transition.
		if(g_temp.itemWaiting != null)
			g_temp.itemWaiting = null;
		
		var slides = t.getSlidesReference();
		
		//trace(slides.objNextSlide.find("img").attr("src"));
		//trace(objItem);
		
		switch(direction){
			case "right":	//change to prev item
				setItemToSlide(slides.objPrevSlide, objItem);
				positionSlides();
				
				var posPrev = g_functions.getElementSize(slides.objPrevSlide);
				var destX = -posPrev.left;
				
				t.switchSlideNums("right");
				
			break;	
			case "left":		//change to next item
				setItemToSlide(slides.objNextSlide, objItem);
				positionSlides();
				
				var posNext = g_functions.getElementSize(slides.objNextSlide);
				var destX = -posNext.left;
				
				t.switchSlideNums("left");
				
			break;
			default:
				throw new Error("wrong direction: "+direction);
			break;
		}
				
		var transSpeed = g_options.slider_transition_speed;
		var transEasing = g_options.slider_transition_easing;
				
		g_objInner.animate({left:destX+"px"},{
			duration: transSpeed,
			easing: transEasing,
			queue: false,
			always:function(){
								
					//transit next item if waiting
					if(g_temp.itemWaiting != null){
						var direction = getSlideDirection(g_temp.itemWaiting);
						transitionSlide(direction, g_temp.itemWaiting);
					}else{
						//if no item waiting, please neighbour items in places
						t.placeNabourItems();
						g_objThis.trigger(t.events.TRANSITION_END);
					}
				
			}
		});
			
	}
	
	
	/**
	 * do fade transition
	 */
	function transitionFade(objItem, noAnimation){
		
		if(!noAnimation)
			var noAnimation = false;
		
		var slides = t.getSlidesReference();
		 
		setItemToSlide(slides.objNextSlide, objItem);
		
		var objCurrentPos = g_functions.getElementSize(slides.objCurrentSlide);
				
		g_functions.placeElement(slides.objNextSlide,objCurrentPos.left,objCurrentPos.top);
		
		var currentNum = g_temp.numCurrent;
		g_temp.numCurrent = g_temp.numNext;
		g_temp.numNext = currentNum;
		
		g_objThis.trigger(t.events.ITEM_CHANGED);
		
		slides.objNextSlide.stop(true);		
		slides.objCurrentSlide.stop(true);
		
		if(noAnimation == true){
			
			slides.objCurrentSlide.fadeTo(0, 0);
			slides.objNextSlide.fadeTo(0, 1);	
			t.placeNabourItems();
		
		}else{
			slides.objNextSlide.fadeTo(0,0);	
			
			animateOpacity(slides.objCurrentSlide,0,function(){
				t.placeNabourItems();
				g_objThis.trigger(t.events.TRANSITION_END);
			});
			
			//animate to next show next
			animateOpacity(slides.objNextSlide,1);			
		}
		
	}
	
		
	
	/**
	 * resize the slide image inside item
	 */
	function resizeSlideItem(objSlide){
		var index = objSlide.data("index");
		if(index === undefined || index == null)
			return(false);
		
		var objItem = g_gallery.getItem(index);
		
		if(!objItem)
			return(false);
		
		setItemToSlide(objSlide, objItem);
	}
	
	
	/**
	 * show the preloader
	 * show the index, so only the current index load will hide.
	 */	
	function showPreloader(objPreloader){
		
		objPreloader.stop(true).show(100);
	
	}
	
	/**
	 * hide the preloader
	 */
	function hidePreloader(objPreloader){
		
		objPreloader.stop(true).hide(100);
	}
	
	
	/**
	 * set slider image css design according the settings
	 */
	function setImageDesign(objImage){
		
		var css = {};
		if(g_options.slider_image_border == true){
			css["border-style"] = "solid";
			css["border-width"] = g_options.slider_image_border_width+"px";
			css["border-color"] = g_options.slider_image_border_color;
			css["border-radius"] = g_options.slider_image_border_radius;
		}
		
		if(g_options.slider_image_shadow == true){
			css["box-shadow"] = "3px 3px 10px 0px #353535";
		}
		
		objImage.css(css);
		
	}
	
	
	/**
	 * 
	 * set item to slide
	 */
	function setImageToSlide(objSlide, objItem, isForce){
		
		var objItemWrapper = objSlide.children(".sovitem-wrapper");
		
		var objPreloader = getSlidePreloader(objSlide);
		
		var urlImage = objItem.urlImage;
		
		var currentImage = objSlide.data("urlImage");
				
		objSlide.data("urlImage",urlImage);
		
		var scaleMode = t.getScaleMode(objSlide);
		
		objPadding = t.getObjImagePadding();
		
		if(currentImage == urlImage && isForce !== true){
			
			var objImage = objItemWrapper.children("img");
			
			if(objItem.imageWidth == 0 || objItem.imageHeight == 0){
				g_gallery.checkFillImageSize(objImage, objItem);
			}
			
			g_functions.scaleImageFitParent(objImage, objItem.imageWidth, objItem.imageHeight, scaleMode, objPadding);
						
			g_objThis.trigger(t.events.AFTER_PUT_IMAGE, objSlide);
			
		}
		else{		//place the image inside parent first time
						
			objImage = g_functions.placeImageInsideParent(urlImage, objItemWrapper, objItem.imageWidth, objItem.imageHeight, scaleMode, objPadding);
			
			//set image loaded on load:
			if(objItem.isBigImageLoaded == true){
				objImage.fadeTo(0,1);
				hidePreloader(objPreloader);
				g_objThis.trigger(t.events.AFTER_PUT_IMAGE, objSlide);
			}
			else{		//if the image not loaded, load the image and show it after.
				objImage.fadeTo(0,0);
				showPreloader(objPreloader);
				
				objImage.data("itemIndex", objItem.index);
				objImage.on("load",function(){
					
					//place the image normally with coordinates
					var objImage = jQuery(this);
					var itemIndex = objImage.data("itemIndex");
					
					objImage.fadeTo(0,1);
					
					//get and hide preloader
					var objSlide = objImage.parent().parent();
					var objPreloader = getSlidePreloader(objSlide);
					var objPadding = t.getObjImagePadding();
					var scaleMode = t.getScaleMode(objSlide);
					
					hidePreloader(objPreloader);
					
					g_gallery.onItemBigImageLoaded(null, objImage);
					
					var objItem = g_gallery.getItem(itemIndex);
									
					g_functions.scaleImageFitParent(objImage, objItem.imageWidth, objItem.imageHeight, scaleMode, objPadding);
					
					objImage.fadeTo(0,1);
					
					g_objThis.trigger(t.events.AFTER_PUT_IMAGE, objSlide);
				});
			}
			
		}
		
		if(objImage)
			setImageDesign(objImage);
		
	}
	
		
	
	/**
	 * set slider image by url
	 * if item not set, get current slide item
	 */
	function setItemToSlide(objSlide, objItem){
		
		try{

			var objItemWrapper = objSlide.children(".sovitem-wrapper");
					
			//if the item is empty, remove the image from slide
			if(objItem == null){
				objItemWrapper.html("");
				objSlide.removeData("index");
				objSlide.removeData("type");
				objSlide.removeData("urlImage");
				return(false);
			}
			
			var currentIndex = objSlide.data("index");
			
			objSlide.data("index",objItem.index);
			objSlide.data("type", objItem.type);
			
			setImageToSlide(objSlide, objItem);
			
			//show type related elements
			var objVideoPlayButton = getSlideVideoPlayButton(objSlide);
			switch(objItem.type){
				case "image":
					objVideoPlayButton.hide();
				break;
				default:		//video
					objVideoPlayButton.show();					
				break;
			}
			
		}catch(error){
			objItemWrapper.html("");
			throw new Error(error);
			return(true);
		}
		
	}	
	
	
	
	/**
	 * hide the panel
	 */
	function hideTextPanel(){
		
		if(!g_objTextPanel)
			return(false);
		
		if(isTextPanelHidden() == true)
			return(false);
		
		var panelElement = g_objTextPanel.getElement();
	
		var animationTime = 0;
		if(g_temp.isTextPanelSaparateHover == true || g_options.slider_textpanel_always_on == true){
			animationTime = g_options.slider_controls_appear_duration;
		}
		
		panelElement.stop().fadeTo(animationTime, 0);
		
		panelElement.data("isHidden", true);
	}
	
	
	/**
	 * show the text panel
	 */
	function showTextPanel(){
		
		if(!g_objTextPanel)
			return(false);
		
		if(isTextPanelHidden() == false)
			return(false);
		
		var panelElement = g_objTextPanel.getElement();
		
		var animationTime = 0;
		
		if(g_temp.isTextPanelSaparateHover == true || g_options.slider_textpanel_always_on == true){
			
			panelElement.show();
			g_objTextPanel.positionElements();
			
			animationTime = g_options.slider_controls_appear_duration;
		}
		
		panelElement.stop().show().fadeTo(animationTime,1);
		
		panelElement.data("isHidden", false);
				
	}
	
	
	/**
	 * check if the text panel is hidden or not
	 */
	function isTextPanelHidden(){

		var panelElement = g_objTextPanel.getElement();

		var isHidden = panelElement.data("isHidden");
		if(isHidden === false)
			return(false);
		
		return(true);		
	}	
	
	
	/**
	 * validate that the slide is certain type, if not, throw error
	 */
	function validateSlideType(type, objSlide){
		if(objSlide == undefined)
			var objSlide = t.getCurrentSlide();
		
		var slideType = t.getSlideType(objSlide);
				
		if(slideType != type){
			throw new Error("Wrong slide type: "+ slideType +", should be: "+type);
			return(false);
		}
		
		return(true);
	}
	


	
	
	function __________CONTROLS_OBJECT_______(){};
	
	/**
	 * modify the slider for mobile
	 */
	function modifyForMobile(){
		
		if(g_options.slider_fullscreen_button_mobilehide == true && g_objButtonFullscreen)
			g_objButtonFullscreen.hide();
		
		if(g_options.slider_play_button_mobilehide == true && g_objButtonPlay)
			g_objButtonPlay.hide();
		
		if(g_options.slider_zoompanel_mobilehide == true && g_objZoomPanel)
			g_objZoomPanel.getElement().hide();
		
	}
	
	
	/**
	 * modify for no mobile
	 */
	function modifyForDesctop(){
		
		if(g_options.slider_fullscreen_button_mobilehide == true && g_objButtonFullscreen)
			g_objButtonFullscreen.show();

		if(g_options.slider_play_button_mobilehide == true && g_objButtonPlay)
			g_objButtonPlay.show();
		
		if(g_options.slider_zoompanel_mobilehide == true && g_objZoomPanel)
			g_objZoomPanel.getElement().show();
		
	}
	
	
	/**
	 * check and modify for mobile or desctop
	 */
	function checkMobileModify(){
		
		var isMobile = g_gallery.isMobileMode();
		
		if(isMobile)
			modifyForMobile();
		else
			modifyForDesctop();
				
	}
	
	
	/**
	 * get a jquery set of the controls objects
	 */
	function getControlsObjects(){
		
		var objControl = g_objSlider.children(".ug-slider-control");
		
		return(objControl);
	}
	
	
	/**
	 * hide the controls
	 */
	function hideControls(noAnimation){
				
		if(g_functions.isTimePassed("sliderControlsToggle") == false)
			return(false);
		
		if(g_temp.isControlsVisible == false)
			return(false);
				
		if(!noAnimation)
			var noAnimation = false;
		
		var objControls = getControlsObjects();
		
		if(noAnimation === true)
			objControls.stop().hide();
		else{
			objControls.stop().hide(300);
		}
		
		g_temp.isControlsVisible = false;
	}
	
	
	/**
	 * show controls only if they meaned to be shown
	 * @param noAnimation
	 */
	function checkAndShowControls(noAnimation){
		
		if(g_options.slider_controls_always_on == true)
			showControls(noAnimation);		
	}
	
	
	/**
	 * hide the controls
	 */
	function showControls(noAnimation){
				
		//validate for short time pass
		if(g_functions.isTimePassed("sliderControlsToggle") == false)
			return(false);
		
		if(g_temp.isControlsVisible == true)
			return(true);
		
		
		if(!noAnimation)
			var noAnimation = false;
		
		var objControls = getControlsObjects();
				
		if(noAnimation === true)
			objControls.stop().show();
		else{
			objControls.stop().show(g_options.slider_controls_appear_duration);
		}
		
		g_temp.isControlsVisible = true;
		
	}
	
	
	
	/**
	 * toggle the controls (show, hide)
	 */
	function toggleControls(){
								
		if(g_temp.isControlsVisible == false)
			showControls();
		else
			hideControls();
	}
	
	
	/**
	 * set controls mode
	 * modes: image, video
	 */
	function setControlsMode(mode){
				
		if(mode == g_temp.currentControlsMode)
			return(false);
		
		switch(mode){
			case "image":
				if(g_objZoomPanel)
					g_objZoomPanel.getElement().show();			
			break;
			case "video":
				if(g_objZoomPanel)
					g_objZoomPanel.getElement().hide();	
			break;
			default:
				throw new Error("wrong controld mode: " + mode);
			break;
		}
		
		g_temp.currentControlsMode = mode;
			
	}
	
	
	
	function __________EVENTS___________(){};

	/**
	 * on item change event
	 */
	function onItemChange(){
		
		//trace("slider on change");
		
		var objItem = g_gallery.getSelectedItem();
				
		t.setItem(objItem);
		
		var itemIndex = objItem.index;
		
		//set active bullet
		if(g_objBullets)
			g_objBullets.setActive(itemIndex);
		
		//handle text panel
		if(g_objTextPanel){			
			if(g_temp.isTextPanelSaparateHover == false)
				showTextPanel();
		}
				
		if(objItem.type == "image"){
			setControlsMode("image");
			//placeControlsElements();
		}
		else{
			setControlsMode("video");
		}
				
	}
	
	
	/**
	 * on bullet click - change the item to selected
	 */
	function onBulletClick(event, bulletIndex){
		g_gallery.selectItem(bulletIndex);		
	}
	
	//function isP
	
	/**
	 * on touch end
	 * toggle controls
	 */
	function onClick(event){
		
		//TODO: prevent double touch end
		//debugLine("slider touchend",true,true);
				
		if(!g_objTouchSlider || g_objTouchSlider.isTapEventOccured(event) == true){
						
			g_objThis.trigger(t.events.CLICK, event);
			
			if(g_options.slider_controls_always_on == false && 
			   g_options.slider_controls_appear_ontap == true && t.isCurrentSlideType("image") == false){
				
				toggleControls();
				
				//show text panel if hidden
				if(g_objTextPanel && g_options.slider_textpanel_always_on == true && t.isCurrentSlideType("image") && t.isCurrentSlideImageFit())
					showTextPanel();
				
			}
						
			
		}
		
	}
	
	
	/**
	 * on zoom start event
	 */
	function onZoomChange(event){
		
		if(g_objTextPanel && t.isCurrentSlideType("image") && t.isCurrentSlideImageFit() == false)
			hideTextPanel();
	}
	
	
	/**
	 * on mouse enter
	 */
	function onMouseEnter(){
		
		showControls();
	
	}
	
	
	/**
	 * on mouse leave
	 */
	function onMouseLeave(){

		hideControls();
		
	}
	
	/**
	 * event before switching slide numbers
	 */
	function onBeforeSwitchingSlides(){
		
		g_objVideoPlayer.hide();
		
	}
	
	
	/**
	 * on slide video play button click
	 */
	function objVideoPlayClick(objButton){
		var objSlide = objButton.parent();
		t.startSlideAction(objSlide);
	}

	/**
	 * on video player show event
	 */
	function onVideoPlayerShow(){
		
		if(g_gallery.isPlayMode()){
			g_gallery.pausePlaying();
		}
		
		g_objThis.trigger(t.events.ACTION_START);
	}
	
	
	/**
	 * on video player hide event
	 */
	function onVideoPlayerHide(){
		
		if(g_gallery.isPlayMode()){
			g_gallery.continuePlaying();
		}
		
		g_objThis.trigger(t.events.ACTION_END);		
	}
	
	
	/**
	 * on item image update, update the image inside the slider if relevant
	 */
	function onItemImageUpdate(event, index, urlImage){
				
		if(g_objSlide1.data("index") == index){
			objItem = g_gallery.getItem(index);
			setImageToSlide(g_objSlide1, objItem, true);	//force
		}
		
		if(g_objSlide2.data("index") == index){
			objItem = g_gallery.getItem(index);
			setImageToSlide(g_objSlide2, objItem, true);
		}
		
		if(g_objSlide3.data("index") == index){
			objItem = g_gallery.getItem(index);
			setImageToSlide(g_objSlide3, objItem, true);
		}
		
	}
	
	
	/**
	 * after image loaded. position video play button
	 */
	function onSlideImageLoaded(data, objSlide){
		
		objSlide = jQuery(objSlide);
		var objImage = t.getSlideImage(objSlide);
		var objButtonVideoPlay = getSlideVideoPlayButton(objSlide);
		var objSize = g_functions.getElementSize(objImage);
		
		g_functions.placeElement(objButtonVideoPlay, "center", "middle", objSize.left, objSize.top, objImage);
	}
	
	
	/**
	 * init event of current slide
	 */
	function initSlideEvents(objSlide){
		
		//set video player events
		var objVideoPlayButton = getSlideVideoPlayButton(objSlide);
		g_functions.addClassOnHover(objVideoPlayButton);
		
		g_functions.setButtonOnClick(objVideoPlayButton, objVideoPlayClick);
		
	}
	
	
	/**
	 * init events
	 */
	function initEvents(){
		
		//on item image update, update the image inside the slider if relevant
		g_objGallery.on(g_gallery.events.ITEM_IMAGE_UPDATED, onItemImageUpdate);
		
		
		//on item change, change the item in the slider.
		g_objGallery.on(g_gallery.events.ITEM_CHANGE, onItemChange);
		
		if(g_objBullets)
			jQuery(g_objBullets).on(g_objBullets.events.BULLET_CLICK,onBulletClick);
		
		//arrows events
		if(g_options.slider_enable_arrows == true){
			
			g_functions.addClassOnHover(g_objArrowRight, "sovarrhover");
			g_functions.addClassOnHover(g_objArrowLeft, "sovarrhover");
			
			g_gallery.setNextButton(g_objArrowRight);
			g_gallery.setPrevButton(g_objArrowLeft);
		}
		
		
		//show / hide controls
		if(g_options.slider_controls_always_on == false){
			
			//assign hover evens only if no touch device
			g_objSlider.hover(onMouseEnter, onMouseLeave);
			
		}
		
		//touch events appear on tap event
		//if(g_options.slider_controls_appear_ontap == true)
		
		g_objSlider.on("touchend click", onClick);

		//show / hide text panel, if it's saparate from controls
		if(g_objTextPanel && g_temp.isTextPanelSaparateHover == true){
			g_objSlider.hover(showTextPanel, hideTextPanel);
		}
		
		//init play / pause button
		if(g_objButtonPlay){
			g_functions.addClassOnHover(g_objButtonPlay, "ug-button-hover");
			g_gallery.setPlayButton(g_objButtonPlay);
		}
		
		//init fullscreen button
		if(g_objButtonFullscreen){
			g_functions.addClassOnHover(g_objButtonFullscreen, "ug-button-hover");
			g_gallery.setFullScreenToggleButton(g_objButtonFullscreen);
		}
		
		//on zoom start / end events
		if(g_objZoomSlider){
			g_objThis.on(t.events.ZOOM_CHANGE, onZoomChange);
		}
		
		if(g_objZoomPanel)
			g_objZoomPanel.initEvents();
				
		//init video player related events
		g_objVideoPlayer.initEvents();
		
		g_objThis.on(t.events.BEFORE_SWITCH_SLIDES, onBeforeSwitchingSlides);
		
		//video API events
		jQuery(g_objVideoPlayer).on(g_objVideoPlayer.events.SHOW, onVideoPlayerShow);		
		jQuery(g_objVideoPlayer).on(g_objVideoPlayer.events.HIDE, onVideoPlayerHide);
		
		//add slide events
		initSlideEvents(g_objSlide1);
		initSlideEvents(g_objSlide2);
		initSlideEvents(g_objSlide3);
		
		//on image loaded
		g_objThis.on(t.events.AFTER_PUT_IMAGE, onSlideImageLoaded);
		
		//image mouseenter / mouseleave event
		
		//set mouseover events on the images
		g_objSlider.delegate(".sovitem-wrapper img","mouseenter",function(event){
			g_objThis.trigger(t.events.IMAGE_MOUSEENTER);
		});

		g_objSlider.delegate(".sovitem-wrapper img","mouseleave",function(event){
			var isMouseOver = t.isMouseInsideSlideImage(event);
			
			if(isMouseOver == false)
				g_objThis.trigger(t.events.IMAGE_MOUSELEAVE);
		});
		
	}
	
	
	/**
	 * destroy slider events
	 */
	this.destroy = function(){
		
		g_objThis.off(t.events.AFTER_PUT_IMAGE);
				
		g_objGallery.off(g_gallery.events.ITEM_IMAGE_UPDATED);
		g_objGallery.off(g_gallery.events.ITEM_CHANGE);
		
		if(g_objBullets)
			jQuery(g_objBullets).on(g_objBullets.events.BULLET_CLICK);
		
		g_objSlider.off("mouseenter");
		g_objSlider.off("mouseleave");
		
		g_objSlider.off("touchend");
		g_objSlider.off("click");
		
		if(g_objZoomSlider)
			g_objThis.off(t.events.ZOOM_CHANGE);
		
		g_objThis.off(t.events.BEFORE_SWITCH_SLIDES);
		jQuery(g_objVideoPlayer).off(g_objVideoPlayer.events.SHOW);		
		jQuery(g_objVideoPlayer).off(g_objVideoPlayer.events.HIDE);
		
		g_objVideoPlayer.destroy();
		
		g_objSlider.undelegate(".sovitem-wrapper img","mouseenter");
		g_objSlider.undelegate(".sovitem-wrapper img","mouseleave");
	}
	
	
	function __________GETTERS___________(){};
	
	/**
	 * get loader class by loader type
	 */
	function getLoaderClass(){
		var loaderClass;
		switch(g_options.slider_loader_type){
			default:
			case 1: loaderClass = "ug-loader1";break;
			case 2: loaderClass = "ug-loader2";break;
			case 3: loaderClass = "ug-loader3";break;
			case 4: loaderClass = "ug-loader4";break;
			case 5: loaderClass = "ug-loader5";break;
			case 6: loaderClass = "ug-loader6";break;
			case 7: loaderClass = "ug-loader7";break;
			case 8: loaderClass = "ug-loader8";break;
			case 9: loaderClass = "ug-loader9";break;
		}
				
		if(g_options.slider_loader_color == "black")
			loaderClass += " ug-loader-black";
		
		return(loaderClass);
	}
	
	
	
	/**
	 * 
	 * get slide by number
	 */
	function getSlideByNum(num){
				
		switch(num){
			case 1:
				return(g_objSlide1);
			break;
			case 2:
				return(g_objSlide2);
			break;
			case 3:
				return(g_objSlide3);
			break;
			default:
				throw new Error("wrong num: " + num);
			break;
		}
	}
	
	
	/**
	 * 
	 * get slide direction of current item
	 */
	function getSlideDirection(objItem){
		
		var slides = t.getSlidesReference();
		
		//validate if the item is not selected already
		var currentIndex = slides.objCurrentSlide.data("index");
		var nextIndex = objItem.index;
		
		var direction = "left";
		if(currentIndex > nextIndex)
			direction = "right";
				
		return(direction);
	}
	
	
	/**
	 * get slide preloader
	 */
	function getSlidePreloader(objSlide){
		
		if(!objSlide)
			var objSlide = t.getCurrentSlide();
		
		var objPreloader = objSlide.children(".ug-slider-preloader");
		return(objPreloader);
	}
	
	/**
	 * get slide videoplay button
	 */
	function getSlideVideoPlayButton(objSlide){
		var objButton = objSlide.children(".ug-button-videoplay");
		return(objButton);
	}
	
	
	
	/**
	 * get slide item
	 */
	function getSlideItem(objSlide){
		if(!objSlide)
			var objSlide = t.getCurrentSlide();
			
		var index = objSlide.data("index");
		if(index == undefined)
			return(null);
		
		var objItem = g_gallery.getItem(index);
		return(objItem);
	}
	
	
	/**
	 * get slide number
	 */
	function getNumSlide(objSlide){
		var numSlide = objSlide.data("slidenum");
		return(numSlide);
	}
	
	
	
	this.________EXTERNAL_GENERAL___________ = function(){};
	
	
	/**
	 * init function for avia controls
	 * options: width / height
	 */
	this.init = function(objGallery, objOptions, optionsPrefix){
		
		initSlider(objGallery, objOptions, optionsPrefix);
	}

	/**
	 * get slide image
	 */
	this.getSlideImage = function(objSlide){
		
		if(!objSlide)
			var objSlide = t.getCurrentSlide();
		
		var objImage = objSlide.find(".sovitem-wrapper img");
		return(objImage);
	}
	
	
	/**
	 * set slider html
	 */
	this.setHtml = function(objParent){
		
		setHtmlSlider(objParent);
	}
	
	
	/**
	 * run the slider
	 */
	this.run = function(){
		
		runSlider();
	}
	
	
	/**
	 * check if the inner object in place, for panning znd zooming posibility check
	 */
	this.isInnerInPlace = function(){
		
		var slides = t.getSlidesReference();
		
		var posCurrent = g_functions.getElementSize(slides.objCurrentSlide);
		var inPlaceX = -posCurrent.left;
		var objInnerSize = g_functions.getElementSize(g_objInner);
		
		if(inPlaceX == objInnerSize.left)
			return(true);
		else
			return(false);
	}
	
	/**
	 * is animating
	 */
	this.isAnimating = function(){
		
		var isAnimated = g_objInner.is(":animated");
		
		return(isAnimated);
	}
	
	/**
	 * check if the slide is current
	 */
	this.isSlideCurrent = function(objSlide){
		var numSlide = objSlide.data("slidenum");
		if(g_temp.numCurrent == numSlide)
			return(true);
		
		return(false);
	}
	
	
	/**
	 * 
	 * tells if the slide has item
	 */
	this.isSlideHasItem = function(objSlide){
		var index = objSlide.data("index");
		if(index === undefined || index === null)
			return(false);
		
		return(true);
	}
	
	
	/**
	 * get image padding object for scaling the image
	 */
	this.getObjImagePadding = function(){
		
		var objPadding = {
				padding_top: g_options.slider_image_padding_top,
				padding_bottom: g_options.slider_image_padding_bottom,
				padding_left: g_options.slider_image_padding_left,
				padding_right: g_options.slider_image_padding_right
		};
		
		return(objPadding);
	}
			
	
	/**
	 * get items reference by their order
	 */
	this.getSlidesReference = function(){
		
		var obj = {
				objPrevSlide: getSlideByNum(g_temp.numPrev),
				objNextSlide: getSlideByNum(g_temp.numNext),
				objCurrentSlide: getSlideByNum(g_temp.numCurrent)
		};
		
		return(obj);
	}
	
	
	/**
	 * get current slide
	 */
	this.getCurrentSlide = function(){
		
		var slides = t.getSlidesReference();
		
		return(slides.objCurrentSlide);
	}
	
	
	/**
	 * get index of current item
	 */
	this.getCurrentItemIndex = function(){
		
		var slides = t.getSlidesReference();
		
		var currentIndex = slides.objCurrentSlide.data("index");
		if(currentIndex === null || currentIndex === undefined)
			currentIndex = -1;
		
		return(currentIndex);
	}
	
	
	/**
	 * get current slide item
	 */
	this.getCurrentItem = function(){
		var currentIndex = t.getCurrentItemIndex();
		if(currentIndex == -1)
			return(null);
		
		var objItem = g_gallery.getItem(currentIndex);
		
		return(objItem);
	}
		
	
	/**
	 * get type of some slide
	 */
	this.getSlideType = function(objSlide){
		
		if(objSlide == undefined)
			objSlide = t.getCurrentSlide();
			
		var type = objSlide.data("type");
		return(type);		
	}

	
	/**
	 * is mouse inside slide image
	 * get mouse position from event
	 */
	this.isMouseInsideSlideImage = function(event){
		
		var objImage = t.getSlideImage();
		
		var point = g_functions.getMousePosition(event);
		if(point.pageX === undefined)
			point = g_objTouchSlider.getLastMousePos();
		
		var pointImg = g_functions.getMouseElementPoint(point, objImage);
		var objSize = g_functions.getElementSize(objImage);
		isMouseInside = g_functions.isPointInsideElement(pointImg, objSize);
		
		return(isMouseInside);
	}
	
	
	/**
	 * check if current slide type is certain type
	 */
	this.isCurrentSlideType = function(type){
		var currentSlideType = t.getSlideType();
		if(currentSlideType == type)
			return(true);
		
		return(false);
	}
	
	/**
	 * change the slider to some item content
	 */
	this.setItem = function(objItem, forseTransition){
		
		var slides = t.getSlidesReference();
		
		//validate if the item is not selected already
		var currentIndex = slides.objCurrentSlide.data("index");
		var nextIndex = objItem.index;
		
		if(nextIndex == currentIndex){
			return(true);
		}
		
		var isFirstSlide = (currentIndex == undefined);
		
		if(isFirstSlide){			
			setItemToSlide(slides.objCurrentSlide, objItem);
			t.placeNabourItems();
			
		}else{
			
			var direction = "left";		//move foreward
			
			var numItems = g_gallery.getNumItems();
			
			if(currentIndex == (numItems-1) && nextIndex == 0)
				direction = "left";
			else
				if(currentIndex == 0 && nextIndex == (numItems-1))
					direction = "right";
			else
				if(currentIndex > nextIndex)
					direction = "right";
						
			doTransition(direction, objItem, forseTransition);
		}
					
	}
	
	
	/**
	 * when the transition complete, put the next / prev items at their place
	 */
	this.placeNabourItems = function(){
				
		var slides = t.getSlidesReference();
		var currentIndex = slides.objCurrentSlide.data("index");
				
		var itemPrev = g_gallery.getPrevItem(currentIndex);
		var itemNext = g_gallery.getNextItem(currentIndex);
		
		//trace(itemPrev);
		//trace(itemNext);
		
		//trace("place " + currentIndex, "next: "+);
		
		setItemToSlide(slides.objNextSlide, itemNext);
		setItemToSlide(slides.objPrevSlide, itemPrev);
		
		positionSlides();
	}
	
	
	/**
	 * switch slide numbers after transition (by direction)
	 * 
	 */
	this.switchSlideNums = function(direction){
		
		//trigger item changed effect
		g_objThis.trigger(t.events.BEFORE_SWITCH_SLIDES);
		
		switch(direction){
			case "left":
				var currentNum = g_temp.numCurrent;
				g_temp.numCurrent = g_temp.numNext;
				g_temp.numNext = g_temp.numPrev;
				g_temp.numPrev = currentNum;
			break;
			case "right":
				var currentNum = g_temp.numCurrent;
				g_temp.numCurrent = g_temp.numPrev;
				g_temp.numPrev = g_temp.numNext;
				g_temp.numNext = currentNum;				
			break;
			default:
				throw new Error("wrong direction: "+ direction);
			break;
		}
		
		//trace(g_temp.numCurrent);
		
		//trigger item changed effect
		g_objThis.trigger(t.events.ITEM_CHANGED);
	}
	
	
	this.________EXTERNAL_API___________ = function(){};
	
	
	/**
	 * stop some slide action if active
	 */
	this.stopSlideAction = function(objSlide){
		
		if(!objSlide)
			objSlide = t.getCurrentSlide();
		
		var slideType = t.getSlideType(objSlide);
		
		switch(slideType){
			default:
				g_objVideoPlayer.hide();
			break;
		}
	}
	
	
	/**
	 * start some slide action if exists
	 */
	this.startSlideAction = function(objSlide){
		
		if(!objSlide)
			objSlide = t.getCurrentSlide();
		
		var objItem = getSlideItem(objSlide);
		
		if(objItem.type == "image")
			return(true)
				
		g_objVideoPlayer.show();
		
		switch(objItem.type){
			case "youtube":
				g_objVideoPlayer.playYoutube(objItem.videoid);
			break;
			case "vimeo":
				g_objVideoPlayer.playVimeo(objItem.videoid);
			break;
			case "html5video":
				g_objVideoPlayer.playHtml5Video(objItem.videoogv, objItem.videowebm, objItem.videomp4, objItem.urlImage);
			break;
			case "soundcloud":
				g_objVideoPlayer.playSoundCloud(objItem.trackid);
			break;			
			case "wistia":
				g_objVideoPlayer.playWistia(objItem.videoid);
			break;			
		}
		
	}

	this.getScaleMode = function(objSlide){
		
		if(!objSlide)
			var objSlide = t.getCurrentSlide();
		
		var slideType = t.getSlideType(objSlide);
				
		//return media scale mode
		if(slideType != "image")
			return(g_options.slider_scale_mode_media);
		
		if(g_options.slider_scale_mode == g_options.slider_scale_mode_fullscreen)
			return(g_options.slider_scale_mode);
		
		if(g_gallery.isFullScreen() == true)
			return(g_options.slider_scale_mode_fullscreen);
		else
			return(g_options.slider_scale_mode);
		
	}
	
	
	/**
	 * get slider objects
	 */
	this.getObjects = function(){
		
		var obj = {
				g_objSlider: g_objSlider,
				g_objInner: g_objInner,
				g_options: g_options,
				g_objZoomSlider: g_objZoomSlider
		};
				
		return(obj);
	}
	
	
	/**
	 * get zoom object
	 */
	this.getObjZoom = function(){
		
		return(g_objZoomSlider);
	}
	
	
	
	/**
	 * get slider options
	 */
	this.getOptions = function(){
		
		return(g_options);
	}
	
	
	/**
	 * get slider element
	 */
	this.getElement = function(){
		
		return(g_objSlider);
	}

	this.getVideoObject = function(){
		return(g_objVideoPlayer);
	}

	this.isCurrentSlideImageFit = function(){
		var objSlide = t.getCurrentSlide();

		var slideType = t.getSlideType(objSlide);
		
		validateSlideType("image", objSlide);
		
		var objImage = t.getSlideImage(objSlide);
		
		//if image don't yet added to dom, return false
		if(objImage.length == 0)
			return(false);
		
		var isFit = g_functions.isImageFitParent(objImage);
		
		return(isFit);
	}
	
	
	/**
	 * check if current image in place
	 */
	this.isCurrentImageInPlace = function(){
		var objImage = t.getSlideImage();
		if(objImage.length == 0)
			return(false);

		var scaleMode = t.getScaleMode();
		var objPadding = t.getObjImagePadding();
		var objItem = getSlideItem();
		
		var objParent = objImage.parent();
		
		var objFitSize = g_functions.getImageInsideParentData(objParent, objItem.imageWidth, objItem.imageHeight, scaleMode, objPadding);
		var objSize = g_functions.getElementSize(objImage);
		
		if(objFitSize.imageWidth == objSize.width)
			return(true);
		
		return(false);
	}

	this.isSlideActionActive = function(){
		
		return g_objVideoPlayer.isVisible();
	}

	this.isSwiping = function(){
		if(!g_objTouchSlider)
			return(false);
		
		var isActive = g_objTouchSlider.isTouchActive();
		
		return(isActive);
	}
	

	this.isPreloading = function(){
		
		var objPreloader = getSlidePreloader();
		if(objPreloader.is(":visible"))
			return(true);
		
		return(false);
	}
	
	/**
	 * set the options
	 */
	this.setOptions = function(objOptions){

		//change options by prefix
		if(g_optionsPrefix)
			objOptions = g_functions.convertCustomPrefixOptions(objOptions, g_optionsPrefix, "slider");
		
		g_options = jQuery.extend(g_options, objOptions);
		
	}
	
	
	/**
	 * set the slider size
	 * works well on resize too.
	 */
	this.setSize = function(width, height){
		 
		 if(width < 0 || height < 0)
			 return(true);
		
		 var objCssSlider = {};
		 objCssSlider["width"] = width + "px";
		 objCssSlider["height"] = height + "px";
		 g_objSlider.css(objCssSlider);
		 		 
		 //set inner:
		 var objCssInner = {};
		 objCssInner["height"] = height + "px";
		 objCssInner["top"] = "0px";
		 objCssInner["left"] = "0px";
		 g_objInner.css(objCssInner);
		 
		//set slide wrapper
		 var objCssSlide = {};
		 objCssSlide["height"] = height + "px";
		 objCssSlide["width"] = width + "px";
		 
		 g_objSlide1.css(objCssSlide);
		 g_objSlide2.css(objCssSlide);
		 g_objSlide3.css(objCssSlide);
		 
		 var itemWidth = width - g_options.slider_item_padding_left - g_options.slider_item_padding_right;
		 var itemHeight = height - g_options.slider_item_padding_top - g_options.slider_item_padding_bottom;
		 	
		 //set item wrapper
		 var objCssItemWrapper = {};
		 objCssItemWrapper["width"] = itemWidth + "px";
		 objCssItemWrapper["height"] = itemHeight + "px";
		 objCssItemWrapper["top"] = g_options.slider_item_padding_top + "px";
		 objCssItemWrapper["left"] = g_options.slider_item_padding_left + "px";
		 
		 g_objSlider.find(".sovitem-wrapper").css(objCssItemWrapper);		 
		 
		 //set text panel size
		 if(g_objTextPanel){
			 g_objTextPanel.setSizeByParent();
		 }
		 
		 var videoWidth = width - g_options.slider_video_padding_left - g_options.slider_video_padding_right;
		 var videoHeight = height - g_options.slider_video_padding_top - g_options.slider_video_padding_bottom;
		 
		 //set video player size
		 g_objVideoPlayer.setSize(videoWidth, videoHeight);
		 g_objVideoPlayer.setPosition(g_options.slider_video_padding_left, g_options.slider_video_padding_top);
		 
		 positionElements();
		 
		 //set image to slides
		 resizeSlideItem(g_objSlide1);
		 resizeSlideItem(g_objSlide2);
		 resizeSlideItem(g_objSlide3);
		 
		 positionSlides();
	}

	this.refreshSlideItems = function(){
		 
		if(t.isAnimating() == true)
			return(true);
		
		 resizeSlideItem(g_objSlide1);
		 resizeSlideItem(g_objSlide2);
		 resizeSlideItem(g_objSlide3);
		 positionSlides();
		 
	}
	
	
	/**
	 * is mouse over the slider
	 */
	this.isMouseOver = function(){
		
		return g_objSlider.ismouseover();
	}
	
	/**
	 * set slider position
	 */
	this.setPosition = function(left, top){
		
		g_functions.placeElement(g_objSlider, left, top);
			
	}
	
	
	/**
	 * zoom in
	 */
	this.zoomIn = function(){
		if(!g_objZoomSlider)
			return(true);
		
		g_objZoomSlider.zoomIn();
	}
	
	/**
	 * zoom out
	 */
	this.zoomOut = function(){
		
		if(!g_objZoomSlider)
			return(true);
		
		g_objZoomSlider.zoomOut();
			
	}
	
	/**
	 * zoom back to original
	 */
	this.zoomBack = function(){
		
		if(!g_objZoomSlider)
			return(true);
		
		g_objZoomSlider.zoomBack();	
	}
	
	
}

function UGTextPanel(){
	
	var t = this;
	var g_objPanel, g_objParent, g_objTitle, g_objDesc;
	var g_objBG, g_objTextWrapper, g_gallery;
	var g_functions = new UGFunctions(), g_optionsPrefix = "";
	
	var g_options = {
			textpanel_align:"bottom",	
			textpanel_margin:0,		
			textpanel_text_valign:"middle",	
			textpanel_padding_top:10,	
			textpanel_padding_bottom:10,	
			textpanel_height: null,			
			textpanel_padding_title_description: 5,	
			textpanel_padding_right: 11,	
			textpanel_padding_left: 11,	
			textpanel_fade_duration: 200,	
			textpanel_enable_title: true,	
			textpanel_enable_description: true,	
			textpanel_enable_bg: true,		
			textpanel_bg_color:"#000000",	
			textpanel_bg_opacity: 0.4,	
			textpanel_title_color:null,		
			textpanel_title_font_family:null,	
			textpanel_title_text_align:null,	
			textpanel_title_font_size:null,	
			textpanel_title_bold:null,	
			textpanel_css_title:{},		
			textpanel_desc_color:null,		
			textpanel_desc_font_family:null,	
			textpanel_desc_text_align:null,	
			textpanel_desc_font_size:null,	
			textpanel_desc_bold:null,	
			textpanel_css_description:{},	
			textpanel_bg_css:{},
	};
	
	var g_temp = {
			isFirstTime: true
	};

	function positionElementsTop(animateHeight, startY){
	
		if(!startY)
			var startY = g_options.textpanel_padding_top;

		var maxy = startY;

		if(g_objTitle){
			var titleY = maxy;
			g_functions.placeElement(g_objTitle, 0, titleY);
			
			var objTitleSize = g_functions.getElementSize(g_objTitle);		
						
			var maxy = objTitleSize.bottom;			
		}

		var textDesc = "";
		if(g_objDesc)
			textDesc = jQuery.trim(g_objDesc.text());
		
		if(textDesc != ""){
			
			var descY = maxy;
						
			if(g_objTitle)
				descY += g_options.textpanel_padding_title_description;
			
			g_functions.placeElement(g_objDesc, 0, descY);
			var objDescSize = g_functions.getElementSize(g_objDesc);		
			maxy = objDescSize.bottom;
		}
		
		
		//change panel height
		if(!g_options.textpanel_height){
											
			var panelHeight = maxy + g_options.textpanel_padding_bottom;		
			
			setHeight(panelHeight, animateHeight);
		}
		
	}

	function getTotalTextHeight(){
		var totalHeight = 0;
		
		if(g_objTitle)
			totalHeight += g_objTitle.outerHeight();
		
		if(g_objDesc){
			var textDesc = "";
			if(g_objDesc)
				textDesc = jQuery.trim(g_objDesc.text());
			
			if(textDesc != ""){
				if(g_objTitle)
					totalHeight += g_options.textpanel_padding_title_description;
				
				totalHeight += g_objDesc.outerHeight();
			}
		
		}
		
		
		return(totalHeight);
	}

	function positionElementsMiddle(){
		
		var totalTextHeight = getTotalTextHeight();
		var startY = (g_objTextWrapper.height() - totalTextHeight) / 2;
		
		positionElementsTop(false, startY);
	}

	function positionElementBottom(){
		
		var totalTextHeight = getTotalTextHeight();
		var startY = g_objTextWrapper.height() - totalTextHeight - g_options.textpanel_padding_bottom;
		
		positionElementsTop(false, startY);
	}

	this.positionElements = function(animateHeight){

		if(!g_options.textpanel_height || g_options.textpanel_text_valign == "top"){
			positionElementsTop(animateHeight);
			return(false);
		}
				
		switch(g_options.textpanel_text_valign){
			default:
			case "top":
				positionElementsTop(false);		
			break;
			case "bottom":
				positionElementBottom();
			break;
			case "center":
			case "middle":
				positionElementsMiddle();
			break;
		}
		
	}

	function setHeight(height, animateHeight){
		
		if(!animateHeight)
			var animateHeight = false;
		
		if(animateHeight == true){
			
			if(g_objBG){
				
				//avoid background jumps
				var currentHeight = g_objBG.height();
				if(height > currentHeight)
					g_objBG.height(height);				
			}
			
			var objCss = {height: height+"px"};
			g_objPanel.add(g_objTextWrapper).animate(objCss, g_options.textpanel_fade_duration);
			
		}else{
			
			if(g_objBG)
				g_objBG.height(height);		
			
			g_objPanel.add(g_objTextWrapper).height(height);
		}
		
	}

	this.init = function(objGallery, customOptions, optionsPrefix){
				
		g_gallery = objGallery;
		
		//change options by prefix
		if(optionsPrefix){
			g_optionsPrefix = optionsPrefix;
			customOptions = g_functions.convertCustomPrefixOptions(customOptions,g_optionsPrefix,"textpanel");			
			
		}
		
		if(customOptions)
			g_options = jQuery.extend(g_options, customOptions);
		
		
		//validation:
		if(g_options.textpanel_enable_title == false && g_options.textpanel_enable_description == false)
			throw new Error("Textpanel Error: The title or description must be enabled");
		
		if(g_options.textpanel_height && g_options.textpanel_height < 0)
			g_options.textpanel_height = null;

	}

	this.appendHTML = function(objParent){
		g_objParent = objParent;
			
		var html = "<div class='sovtextpanel'>";
		
		if(g_options.textpanel_enable_bg == true)
			html += "<div class='sovtextpanel-bg'></div>";
		
		html += "<div class='sovtextpanel-textwrapper'>";
		
		if(g_options.textpanel_enable_title == true)
			html += "<div class='sovtextpanel-title'></div>";
		
		if(g_options.textpanel_enable_description == true)
			html += "<div class='sovtextpanel-description'></div>";
		
		html += "</div></div>";
		
		objParent.append(html);
		
		g_objPanel = objParent.children(".sovtextpanel");
		g_objTextWrapper = g_objPanel.children(".sovtextpanel-textwrapper");
		
		setCss();
		
	}

	function setCss(){
				
		//set background css		
		if(g_options.textpanel_enable_bg == true){
			g_objBG = g_objPanel.children(".sovtextpanel-bg");
			g_objBG.fadeTo(0,g_options.textpanel_bg_opacity);
			
			var objCssBG = {"background-color":g_options.textpanel_bg_color};
			objCssBG = jQuery.extend(objCssBG, g_options.textpanel_bg_css);
			
			g_objBG.css(objCssBG);
		}
		if(g_options.textpanel_enable_title == true){
			g_objTitle = g_objTextWrapper.children(".sovtextpanel-title");
			var objCssTitle = {};
			
			if(g_options.textpanel_title_color !== null)
				objCssTitle["color"] = g_options.textpanel_title_color;
			
			if(g_options.textpanel_title_font_family !== null)
				objCssTitle["font-family"] = g_options.textpanel_title_font_family;
			
			if(g_options.textpanel_title_text_align !== null)
				objCssTitle["text-align"] = g_options.textpanel_title_text_align;
			
			if(g_options.textpanel_title_font_size !== null)
				objCssTitle["font-size"] = g_options.textpanel_title_font_size+"px";
			
			if(g_options.textpanel_title_bold !== null){
				
				if(g_options.textpanel_title_bold === true)
					objCssTitle["font-weight"] = "bold";
				else
					objCssTitle["font-weight"] = "normal";
			
			}
			
			//set additional css
			if(g_options.textpanel_css_title)
				objCssTitle = jQuery.extend(objCssTitle, g_options.textpanel_css_title);
			
			g_objTitle.css(objCssTitle);
		}
		
		//set description css
		if(g_options.textpanel_enable_description == true){
			g_objDesc = g_objTextWrapper.children(".sovtextpanel-description");
			
			var objCssDesc = {};
			
			if(g_options.textpanel_desc_color !== null)
				objCssDesc["color"] = g_options.textpanel_desc_color;
			
			if(g_options.textpanel_desc_font_family !== null)
				objCssDesc["font-family"] = g_options.textpanel_desc_font_family;
			
			if(g_options.textpanel_desc_text_align !== null)
				objCssDesc["text-align"] = g_options.textpanel_desc_text_align;
			
			if(g_options.textpanel_desc_font_size !== null)
				objCssDesc["font-size"] = g_options.textpanel_desc_font_size+"px";
			
			if(g_options.textpanel_desc_bold !== null){
				
				if(g_options.textpanel_desc_bold === true)
					objCssDesc["font-weight"] = "bold";
				else
					objCssDesc["font-weight"] = "normal";
			
			}
			
			//set additional css
			if(g_options.textpanel_css_title)
				objCssDesc = jQuery.extend(objCssDesc, g_options.textpanel_css_description);
				
			g_objDesc.css(objCssDesc);
		}
		
	}

	function onItemChange(){
		var objItem = g_gallery.getSelectedItem();
		t.setText(objItem.title, objItem.description);
	}

	function initEvents(){
		
		//on item change, set the text in the slider.
		jQuery(g_gallery).on(g_gallery.events.ITEM_CHANGE, onItemChange);
	}

	this.destroy = function(){
		jQuery(g_gallery).off(g_gallery.events.ITEM_CHANGE);
	}
	
	/**
	 * run the text panel
	 */
	this.run = function(){
		
		t.setSizeByParent();
		
		initEvents();
	}

	this.setPanelSize = function(panelWidth){
	
		var panelHeight = 80;		//some default number
		
		if(g_options.textpanel_height)	
			panelHeight = g_options.textpanel_height;
		
		g_objPanel.width(panelWidth);
		g_objPanel.height(panelHeight);
		
		
		//set background size
		if(g_objBG){
			g_objBG.width(panelWidth);
			g_objBG.height(panelHeight);
		}
		
		//set textwrapper size and position
		var textWrapperWidth = panelWidth - g_options.textpanel_padding_left - g_options.textpanel_padding_right;
		var textWrapperLeft = g_options.textpanel_padding_left;
		
		g_functions.setElementSizeAndPosition(g_objTextWrapper, textWrapperLeft, 0, textWrapperWidth, panelHeight);
		
		//set text width
		if(g_objTitle)
			g_objTitle.width(textWrapperWidth);
		
		//set description height
		if(g_objDesc)
			g_objDesc.width(textWrapperWidth);
		
		if(g_temp.isFirstTime == false)
			t.positionElements(false);
	}

	this.setSizeByParent = function(){
				
		var objSize = g_functions.getElementSize(g_objParent);
		t.setPanelSize(objSize.width);
	}

	this.setTextPlain = function(title, description){

		if(g_objTitle)
			g_objTitle.html(title);
		
		if(g_objDesc)
			g_objDesc.html(description);
		
	}
	

	this.setText = function(title, description){
		
		if(g_temp.isFirstTime == true){
			
			t.setTextPlain(title, description);
			
			g_temp.isFirstTime = false;
			
			t.positionElements(false);
		
		}else{		//width animation
			
			g_objTextWrapper.stop().fadeTo(g_options.textpanel_fade_duration,0,function(){
				
				t.setTextPlain(title, description);
				
				t.positionElements(true);
				
				jQuery(this).fadeTo(g_options.textpanel_fade_duration,1);
			});
			
		}
		
	}

	this.positionPanel = function(customTop, customLeft){
		
		var objCss = {};
		
		if(customTop !== undefined && customTop !== null){
			objCss.top = customTop;
		}else{
			
			switch(g_options.textpanel_align){
				case "top":
					objCss.top = g_options.textpanel_margin + "px";
				break;
				case "bottom":
					objCss.top = "auto";
					objCss.bottom = g_options.textpanel_margin + "px";
				break;
				case "middle":
					objCss.top = g_functions.getElementRelativePos(g_objPanel, "middle", g_options.textpanel_margin);
				break;
			}
			
		}
		
		if(customLeft !== undefined && customLeft !== null)
			objCss.left = customLeft;
			
		g_objPanel.css(objCss);
	}

	this.setOptions = function(objOptions){
		
		if(g_optionsPrefix)
			objOptions = g_functions.convertCustomPrefixOptions(objOptions, g_optionsPrefix, "textpanel");
		
		g_options = jQuery.extend(g_options, objOptions);
				
	}
	

	this.getElement = function(){
		
		return(g_objPanel);
	}

	this.getSize = function(){
		
		var objSize = g_functions.getElementSize(g_objPanel);
		return(objSize);
	}

	this.refresh = function(toShow, noPosition, panelWidth){
		
		setCss();
		
		if(!panelWidth)
			t.setSizeByParent();
		else
			t.setPanelSize(panelWidth);
		
		t.positionElements(false);
		
		if(noPosition !== true)
			t.positionPanel();				
		
		if(toShow === true)
			t.show();		
	}

	this.hide = function(){
		g_objPanel.hide();
	}

	this.show = function(){
		g_objPanel.show();
	}

	this.getOptions = function(){
		return(g_options);
	}

	this.getOption = function(optionName){
		
		if(g_options.hasOwnProperty(optionName) == false)
			return(null);
		
		return(g_options[optionName]);
	}
	
	
}

function UGZoomButtonsPanel(){
	
	var t = this;
	var g_objPanel, g_objParent, g_objButtonPlus, g_objButtonMinus, g_objButtonReturn;
	var g_slider = new UGSlider;
	var g_functions = new UGFunctions();
	
	var g_options = {
		slider_zoompanel_skin: ""	
	};
	
	var g_temp = {
		
	};

	this.init = function(objSlider, customOptions){
		
		g_slider = objSlider;
		
		if(customOptions)
			g_options = jQuery.extend(g_options, customOptions);		
	}

	this.appendHTML = function(objParent){
		g_objParent = objParent;
		
		var html = "<div class='ug-slider-control ug-zoompanel skins'>";
		
			html += "<div class='ug-zoompanel-button ug-zoompanel-plus'></div>";
			html += "<div class='ug-zoompanel-button ug-zoompanel-minus ug-zoompanel-button-disabled'></div>";
			html += "<div class='ug-zoompanel-button ug-zoompanel-return ug-zoompanel-button-disabled'></div>";
		
		html += "</div>";
		
		objParent.append(html);
		
		g_objPanel = objParent.children(".ug-zoompanel");
		g_objButtonPlus = g_objPanel.children(".ug-zoompanel-plus");
		g_objButtonMinus = g_objPanel.children(".ug-zoompanel-minus");
		g_objButtonReturn = g_objPanel.children(".ug-zoompanel-return");
		
	}

	this.getElement = function(){
		
		return(g_objPanel);
	}

	function isButtonDisabled(objButton){
		
		if(objButton.hasClass("ug-zoompanel-button-disabled"))
			return(true);
		
		return(false);
	}

	function disableButton(objButton){
		objButton.addClass("ug-zoompanel-button-disabled");
	}
	
	/**
	 * enable some button
	 */
	function enableButton(objButton){
				
		objButton.removeClass("ug-zoompanel-button-disabled");		
	}

	function onZoomChange(){
		
		//skip not image types
		if(g_slider.isCurrentSlideType("image") == false)
			return(true);
				
		var isFit = g_slider.isCurrentSlideImageFit();
		
		if(isFit == true){		//if fit, disable buttons
			
			if(isButtonDisabled(g_objButtonMinus) == false){			
				disableButton(g_objButtonMinus);
				disableButton(g_objButtonReturn);
			}
			
		}else{	//if not fit, enable minus buttons
			
			if(isButtonDisabled(g_objButtonMinus) == true){
				enableButton(g_objButtonMinus);
				enableButton(g_objButtonReturn);				
			}
			
		}
			
	}

	t.initEvents = function(){
		
		//add hover class on buttons
		g_functions.addClassOnHover(g_objButtonPlus, "ug-button-hover");
		g_functions.addClassOnHover(g_objButtonMinus, "ug-button-hover");
		g_functions.addClassOnHover(g_objButtonReturn, "ug-button-hover");
		
		//set buttons click events
		
		g_functions.setButtonOnClick(g_objButtonPlus, function(){
			
			if(isButtonDisabled(g_objButtonPlus) == true)
				return(true);
			
			g_slider.zoomIn();
		});
		
		g_functions.setButtonOnClick(g_objButtonMinus, function(){
			
			if(isButtonDisabled(g_objButtonMinus) == true)
				return(true);
			
			g_slider.zoomOut();
		});
		
		g_functions.setButtonOnClick(g_objButtonReturn, function(){
			
			if(isButtonDisabled(g_objButtonReturn) == true)
				return(true);
			
			g_slider.zoomBack();
		});
				
		//on zoom change event
		jQuery(g_slider).on(g_slider.events.ZOOM_CHANGE,onZoomChange);
		jQuery(g_slider).on(g_slider.events.ITEM_CHANGED,onZoomChange);
	
	}
	
	
}


function UGBullets(){
	
	var t = this, g_numBullets = 0, g_gallery = new UniteGalleryMain();
	var g_objBullets, g_objParent, g_activeIndex = -1;
	var g_functions = new UGFunctions();
	
	var g_temp = {
		isInited:false
	};
	
	var g_options = {
		bullets_skin: "",			
		bullets_addclass: "",		
		bullets_space_between:-1	
	}
	
	
	/**
	 * the events
	 */
	this.events = {
		BULLET_CLICK : "bullet_click"
	};
	
	/**
	 * init the bullets
	 */
	this.init = function(gallery, customOptions, numBullets){
		g_gallery = gallery;
		
		if(numBullets)
			g_numBullets = numBullets;
		else			
			g_numBullets = g_gallery.getNumItems();
		
		g_temp.isInited = true;
		g_options = jQuery.extend(g_options, customOptions);
		
		if(g_options.bullets_skin == "")
			g_options.bullets_skin = g_options.gallery_skin;
		
	}

	function setHtmlBullets(){
		var html = "";
		
		var addHtml = "";
		if(g_options.bullets_space_between != -1)
			addHtml = " style='margin-left:" + g_options.bullets_space_between + "px'";
		
		for(var i=0; i< g_numBullets; i++){
			if(i == 0)
				html += "<div class='ug-bullet'></div>";
			else
				html += "<div class='ug-bullet'"+addHtml+"></div>";
		}
		
		g_objBullets.html(html);
	}

	this.appendHTML = function(objParent){
		g_objParent = objParent;
		
		validateInited();
		var addClass = "";
		if(g_options.bullets_addclass != "")
			addClass = " " + g_options.bullets_addclass;
			
		var html = "<div class='ug-slider-control ug-bullets skins'>";
		
		html += "</div>";
		
		g_objBullets = jQuery(html);
		
		objParent.append(g_objBullets);
		
		setHtmlBullets();
		
		initEvents();
	}	

	this.updateNumBullets = function(numBullets){
		
		g_numBullets = numBullets;
		setHtmlBullets();
		initEvents();
	}

	function onBulletClick(objBullet){
				
		//filter not active only
		if(t.isActive(objBullet) == true)
			return(true);
		
		var index = objBullet.index();
			
		jQuery(t).trigger(t.events.BULLET_CLICK, index);
	}

	function initEvents(){
		
		var objBullets = g_objBullets.children(".ug-bullet");
		
		g_functions.setButtonOnClick(objBullets, onBulletClick);
		
		objBullets.on("mousedown mouseup",function(event){
			//event.preventDefault();
			return(false);
		});
		
	}
	
	
	/**
	 * get the bullets element
	 */
	this.getElement = function(){
		return g_objBullets;
	}
	
	
	/**
	 * set some item active
	 */
	this.setActive = function(index){
		validateInited();
		validateIndex(index);
		
		var children = g_objBullets.children(".ug-bullet");
		children.removeClass("ug-bullet-active");
		
		var bullet = jQuery(children[index]);
		bullet.addClass("ug-bullet-active");
		
		g_activeIndex = index;
	}

	this.isActive = function(index){
		validateIndex(index);
		
		if(typeof index != "number")
			var objBullet = index;
		else{
			var objBullet = g_objBullets.children(".ug-bullet")[index];			
		}
		
		if(objBullet.hasClass("ug-bullet-active"))
				return(true);
		
		return(false);
	}
	
	
	/**
	 * validate bullets index
	 */
	function validateIndex(index){
		if(index < 0 || index >= g_numBullets)
			throw new Error("wrong bullet index: " + index);
	}
	
	function validateInited(){
		
		if(g_temp.isInited == true)
			return(true);
		
		throw new Error("The bullets are not inited!");
	}
	
	
	
}

function UGProgressBar(){
	
	var t = this, g_isInited = false;
	var g_percent = 0, g_objBar, g_objInner, g_functions = new UGFunctions();
	
	var g_options = {
		slider_progressbar_color:"#ffffff",	
		slider_progressbar_opacity: 0.6,
		slider_progressbar_line_width: 5	
	}
	

	this.put = function(g_objWrapper, userOptions){
		
		if(userOptions)
			g_options = jQuery.extend(g_options, userOptions);
		
		g_objWrapper.append("<div class='sovprog'><div class='sovprog-inn'></div></div>");
		g_objBar = g_objWrapper.children(".sovprog");
		g_objInner = g_objBar.children(".sovprog-inn");
		
		//init the objects
		g_objInner.css("background-color", g_options.slider_progressbar_color);
		g_objBar.height(g_options.slider_progressbar_line_width);
		g_objInner.height(g_options.slider_progressbar_line_width);
		g_objInner.width("0%");
		
		//set opacity old way (because ie bug)
		var opacity = g_options.slider_progressbar_opacity;
		
		var objInnerHTML = g_objInner[0];
		objInnerHTML.style.opacity = opacity;
		objInnerHTML.style.filter = 'alpha(opacity=' + opacity*100 + ')';
	}
	
	
	/**
	 * put the pie hidden
	 */
	this.putHidden = function(g_objWrapper, userOptions){
		t.put(g_objWrapper, userOptions);
		g_objBar.hide();
	}
	
	/**
	 * get the bar object
	 */
	this.getElement = function(){
		
		return(g_objBar);
	}
	
	/**
	 * set progress bar size
	 */
	this.setSize = function(width){
		
		g_objBar.width(width);
		g_objInner.width(width);
		t.draw();
	}
	
	
	/**
	 * set position
	 */
	this.setPosition = function(left, top, offsetLeft, offsetTop){
		
		g_functions.placeElement(g_objBar, left, top, offsetLeft, offsetTop);
	}

	this.draw = function(){
		var innerWidth = g_percent * 100;
		
		g_objInner.width(innerWidth + "%");
	}

	this.setProgress = function(percent){
		
		g_percent = g_functions.normalizePercent(percent);
		
		//debugLine(g_percent, true);
		
		t.draw();
	}
	
	/**
	 * get type string
	 */
	this.getType = function(){
		return("bar");
	}
	
}

function UGProgressPie(){
	
	var t = this, g_isInited = false;
	var g_percent, g_objPie, g_functions = new UGFunctions();
	
	var g_options = {
		slider_progresspie_type_fill: false,	
		slider_progresspie_color1: "#B5B5B5", 	
		slider_progresspie_color2: "#E5E5E5",	
		slider_progresspie_stroke_width: 6,	
		slider_progresspie_width: 30,	
		slider_progresspie_height:30		
	}
	
	
	/**
	 * put progress pie to some wrapper
	 */
	this.put = function(g_objWrapper, userOptions){
		
		if(userOptions)
			g_options = jQuery.extend(g_options, userOptions);
			
		g_objWrapper.append("<canvas class='sovcanvas' width='"+g_options.slider_progresspie_width+"' height='"+g_options.slider_progresspie_height+"'></canvas>");
		g_objPie = g_objWrapper.children(".sovcanvas");
	}
	
	
	/**
	 * put the pie hidden
	 */
	this.putHidden = function(g_objWrapper, userOptions){
		t.put(g_objWrapper, userOptions);
		draw(0.1);
		g_objPie.hide();
	}
	

	this.getElement = function(){
		return(g_objPie);
	}

	this.setPosition = function(left, top){
		
		g_functions.placeElement(g_objPie, left, top);
		
	}

	this.getSize = function(){
		
		var obj = {
			width: g_options.slider_progresspie_width,
			height: g_options.slider_progresspie_height
		};
		
		return(obj);
	}	

	function draw(percent){
		
		if(!percent)
			var percent = 0;
		
		var radius = Math.min(g_options.slider_progresspie_width, g_options.slider_progresspie_height) / 2;
		
		var ctx = g_objPie[0].getContext('2d');
		
		//init the context
		if(g_isInited == false){
			
			g_isInited = true;
			
			ctx.rotate(Math.PI*(3/2));
			ctx.translate(-2 * radius,0);
		}		
		
		ctx.clearRect(0,0,g_options.slider_progresspie_width, g_options.slider_progresspie_height);
		
		var centerX = g_options.slider_progresspie_width / 2;
		var centerY = g_options.slider_progresspie_height / 2;

		var startPoint = 0;
		var endPoint = percent * Math.PI * 2;
				
	    
		if(g_options.slider_progresspie_type_fill == true){		//fill
			
			ctx.beginPath();
				ctx.moveTo(centerX, centerY); 
			    ctx.arc(centerX,centerY,radius,startPoint, endPoint);
			    ctx.lineTo(centerX, centerY); 
			    
			    ctx.fillStyle = g_options.slider_progresspie_color1;
			    ctx.fill();
		    ctx.closePath();
		    
		}else{		//stroke
		    ctx.globalCompositeOperation = "source-over";
			
			ctx.beginPath();
				ctx.moveTo(centerX, centerY); 
			    ctx.arc(centerX,centerY,radius,startPoint, endPoint);
			    ctx.lineTo(centerX, centerY); 
			    
			    ctx.fillStyle = g_options.slider_progresspie_color1;
			    ctx.fill();
			ctx.closePath();
		    
		    ctx.globalCompositeOperation = "destination-out";
			
			var radius2 = radius - g_options.slider_progresspie_stroke_width;
		    
			ctx.beginPath();
								
				ctx.moveTo(centerX, centerY); 
			    ctx.arc(centerX,centerY,radius2,startPoint, endPoint);
			    ctx.lineTo(centerX, centerY); 
			    
			    ctx.fillStyle = g_options.slider_progresspie_color1;
			    ctx.fill();
			    
			ctx.closePath();
		}

	    if(g_options.slider_progresspie_type_fill == true){
			startPoint = endPoint;
			endPoint = Math.PI * 2;
			ctx.beginPath();
			    ctx.arc(centerX,centerY,radius,startPoint, endPoint);
			    ctx.lineTo(centerX, centerY); 
		    ctx.fillStyle = g_options.slider_progresspie_color2;
		    ctx.fill();
		    ctx.closePath();	    	
	    }
	    
	}
	

	this.setProgress = function(percent){
		
		percent = g_functions.normalizePercent(percent);
		
		g_percent = percent;
		draw(percent);
	}

	this.getType = function(){
		return("pie");
	}
	
}

function UGTouchSliderControl(){
	
	var g_objSlider, g_objInner, g_parent = new UGSlider();
	var g_objParent, g_options, t=this;
	
	var g_functions = new UGFunctions();
	
	this.events = {
		CLICK:"click"
	};
	
	var g_options = {
		  slider_transition_continuedrag_speed: 250,		
		  slider_transition_continuedrag_easing: "linear",	
		  slider_transition_return_speed: 300,	
		  slider_transition_return_easing: "easeInOutQuad"	
	};
	
	var g_temp = {
		touch_active: false,		
		startMouseX: 0,		
		startMouseY: 0,
		lastMouseX: 0,
		lastMouseY: 0,
		startPosx:0, 
		startTime:0,
		isInitDataValid:false,
		slides: null,
		lastNumTouches:0,
		isDragging: false
	};
	
	
	/**
	 * get diff inner object position from current item pos
	 */
	function getDiffPosFromCurrentItem(slides){
		
		if(!slides)
			var slides = g_parent.getSlidesReference();
		
		var posCurrent = g_functions.getElementSize(slides.objCurrentSlide);
		var inPlaceX = -posCurrent.left;
		var objInnerSize = g_functions.getElementSize(g_objInner);
		var diffPos = inPlaceX - objInnerSize.left;
		
		return(diffPos);
	}
	
	/**
	 * check if the movement that was held is valid for slide change
	 */
	function isMovementValidForChange(){
		
		var slides = g_parent.getSlidesReference();

		//check position, if more then half, move
		var diffPos = getDiffPosFromCurrentItem(slides);
		
		var breakSize = Math.round(slides.objCurrentSlide.width() * 3 / 8);
				
		if(Math.abs(diffPos) >= breakSize)
			return(true);
				
		//check gesture, if vertical mostly then not move
		var diffX = Math.abs(g_temp.lastMouseX - g_temp.startMouseX);
		var diffY = Math.abs(g_temp.lastMouseY - g_temp.startMouseY);
		
		//debugLine("diffx: " + diffX, true, true);
		
		if(diffX < 20)
			return(false);
		
		//if(diffY >= diffX)
			//return(false);
				
		//check time. Short time always move
		var endTime = jQuery.now();
		var diffTime = endTime - g_temp.startTime;
		
		//debugLine("time: " + diffTime, true);
		
		if(diffTime < 500)
			return(true);
		
					
		return(false);
	}

	/**
	 * check tab event occured
	 * invokes on touchend event on the slider object
	 */
	this.isTapEventOccured = function(event){
		
		//validate one touch
		var arrTouches = g_functions.getArrTouches(event);
		var numTouches = arrTouches.length;
			
		if(numTouches != 0 || g_temp.lastNumTouches != 0){
			g_temp.lastNumTouches = numTouches;
			return(false);
		}
			
		g_temp.lastNumTouches = numTouches;
				
		var slides = g_parent.getSlidesReference();

		//check position, if more then half, move
		var diffPos = getDiffPosFromCurrentItem(slides);
		
		//check gesture, if vertical mostly then not move
		var diffX = Math.abs(g_temp.lastMouseX - g_temp.startMouseX);
		var diffY = Math.abs(g_temp.lastMouseY - g_temp.startMouseY);
		
		//check by time
		var endTime = jQuery.now();
		var diffTime = endTime - g_temp.startTime;
		
		//combine move and time
		if(diffX < 20 && diffY < 50 && diffTime < 500)
			return(true);
		
		return(false);
	}
	
	/**
	 * return the item to place
	 */
	function returnToPlace(slides){
		
		if(g_parent.isInnerInPlace() == true)
			return(false);
						
		//trigger before return event
		g_objParent.trigger(g_parent.events.BEFORE_RETURN);
				
		if(!slides)
			var slides = g_parent.getSlidesReference();
		
		var posCurrent = g_functions.getElementSize(slides.objCurrentSlide);
		var destX = -posCurrent.left;
				
		//animate objects		
		g_objInner.animate({left:destX+"px"},{
			duration: g_options.slider_transition_return_speed,
			easing: g_options.slider_transition_continuedrag_easing,
			queue: false,
			complete: function(){
				g_objParent.trigger(g_parent.events.AFTER_RETURN);
			}
		});
		
	}
	
	
	/**
	 * 
	 * change the item to given direction
	 */
	function changeItem(direction){
		
		g_parent.switchSlideNums(direction);
		g_parent.placeNabourItems();

	}

	function continueSlideDragChange(){
		
		//get data
		var slides = g_parent.getSlidesReference();
		
		var diffPos = getDiffPosFromCurrentItem(slides);
		
		if(diffPos == 0)
			return(false);
		
		var direction = (diffPos > 0) ? "left" : "right";
			
		var isReturn = false;
			
		switch(direction){
			case "right":	//change to prev item
				
				if( g_parent.isSlideHasItem(slides.objPrevSlide) ){
					
					var posPrev = g_functions.getElementSize(slides.objPrevSlide);
					var destX = -posPrev.left;
					
				}else	//return current item
					isReturn = true;
				
			break;	
			case "left":		//change to next item
				
				if( g_parent.isSlideHasItem(slides.objNextSlide) ){
					
					var posNext = g_functions.getElementSize(slides.objNextSlide);
					var destX = -posNext.left;
					
				}else					
					isReturn = true;				
			break;
	   }
		
		
		if(isReturn == true){
			returnToPlace(slides);
			
		}else{
			
			//animate objects
			g_objInner.stop().animate({left:destX+"px"},{
				duration: g_options.slider_transition_continuedrag_speed,
				easing: g_options.slider_transition_continuedrag_easing,
				queue: false,
				always:function(){
					changeItem(direction);
					g_objParent.trigger(g_parent.events.AFTER_DRAG_CHANGE);
				}
			});
			
		}
				
		
	}

	function handleSliderDrag(event){
		
		var diff = g_temp.lastMouseX - g_temp.startMouseX;
		
		if(diff == 0)
			return(true);
		
		var direction = (diff < 0) ? "left":"right";
		
		var objZoomSlider = g_parent.getObjZoom();

		if(objZoomSlider){
			
			var isPanEnabled = objZoomSlider.isPanEnabled(event,direction);
						
			if(isPanEnabled == true){
				g_temp.isInitDataValid = false;
				return(true);				
			}else{
				
				if(g_temp.isInitDataValid == false){
					storeInitTouchData(event);
					return(true);
				}
				
			}
		}
							
		//set inner div position
		var currentPosx = g_temp.startPosx + diff;
		
		//check out of borders and slow down the motion:
		if(diff > 0 && currentPosx > 0)
			currentPosx = currentPosx / 3;		
		
		else if(diff < 0 ){
			
			var innerEnd = currentPosx + g_objInner.width();
			var sliderWidth = g_objSlider.width();
			
			if( innerEnd <  sliderWidth ){
				currentPosx = g_temp.startPosx + diff/3;
			}
		}
		
		if(g_temp.isDragging == false){
			g_temp.isDragging = true;
			g_objParent.trigger(g_parent.events.START_DRAG);
		}
		
		g_objInner.css("left", currentPosx+"px");
	}

	function storeInitTouchData(event){
		
		var mousePos = g_functions.getMousePosition(event);
		
		g_temp.startMouseX = mousePos.pageX;
		
		//debugLine("startx:" + g_temp.startMouseX, true, true);
		
		g_temp.startMouseY = mousePos.pageY;
		
		g_temp.lastMouseX = g_temp.startMouseX;
		g_temp.lastMouseY = g_temp.startMouseY;
		g_temp.startTime = jQuery.now();
		
		var arrTouches = g_functions.getArrTouches(event);		
		g_temp.startArrTouches = g_functions.getArrTouchPositions(arrTouches);
		
		var objPos = g_functions.getElementSize(g_objInner);
		
		g_temp.startPosx = objPos.left;
		
		g_temp.isInitDataValid = true;
	}

	function disableTouchActive(who){
		
		g_temp.touch_active = false;

	}

	function enableTouchActive(who, event){
		
		g_temp.touch_active = true;
		storeInitTouchData(event);

	}

	function onTouchStart(event){
		
		event.preventDefault();
		
		g_temp.isDragging = false;

		if(g_parent.isAnimating() == true){
			g_objInner.stop(true, true);
		}
		
		//check num touches
		var arrTouches = g_functions.getArrTouches(event);
		if(arrTouches.length > 1){
			
			if(g_temp.touch_active == true){
				disableTouchActive("1");
			}
			
			return(true);
		}
						
		if(g_temp.touch_active == true){
			return(true);
		}
		
		enableTouchActive("1", event);
	}
	
	
	/**
	 * 
	 * on touch move event
	 */
	function onTouchMove(event){
		
		if(g_temp.touch_active == false)
			return(true);
		
		//detect moving without button press
		if(event.buttons == 0){
			disableTouchActive("2");
			
			continueSlideDragChange();
						
			return(true);
		}
		
		event.preventDefault();
		
		var mousePos = g_functions.getMousePosition(event);
		g_temp.lastMouseX = mousePos.pageX;
		g_temp.lastMouseY = mousePos.pageY;
				
		//debugLine("lastX:" + g_temp.lastMouseX, true, true);
		
		handleSliderDrag(event);
	}
	
	/**
	 * on touch end event
	 */
	function onTouchEnd(event){
		
		//debugLine("touchend", true, true);
				
		var arrTouches = g_functions.getArrTouches(event);
		var numTouches = arrTouches.length;
		var isParentInPlace = g_parent.isInnerInPlace();
		
		if(isParentInPlace == true && g_temp.touch_active == false && numTouches == 0){
			
			return(true);
		}
				
		if(numTouches == 0 && g_temp.touch_active == true){
			
			//trigger click event
			if(isParentInPlace == true)
				jQuery(t).trigger(t.events.CLICK);
									
			disableTouchActive("3");
			
			var isValid = isMovementValidForChange();
						
			if(isValid == true)
				continueSlideDragChange();	
			else
				returnToPlace();
			
		}else{
			
			if(numTouches == 1 && g_temp.touch_active == false){
								
				enableTouchActive("2",event);				
			}
				
		}
					
	}


	/**
	 * init touch events
	 */
	function initEvents(){
				
		//slider mouse down - drag start
		g_objSlider.bind("mousedown touchstart",onTouchStart);
		
		//on body move
		jQuery("body").bind("mousemove touchmove",onTouchMove);
		
		//on body mouse up - drag end
		jQuery(window).add("body").bind("mouseup touchend", onTouchEnd);
		
	}
	
	
	
	/**
	 * init function for avia controls
	 */
	this.init = function(objSlider, customOptions){
		
		g_parent = objSlider;
		g_objParent = jQuery(g_parent);
		g_objects = objSlider.getObjects();
				
		g_objSlider = g_objects.g_objSlider;
		g_objInner = g_objects.g_objInner;

		g_options = jQuery.extend(g_options, customOptions);
				
		initEvents();
	}
	
	
	/**
	 * get last mouse position
	 */
	this.getLastMousePos = function(){
		var obj = {
			pageX: g_temp.lastMouseX,
			pageY: g_temp.lastMouseY
		};
		
		return(obj);
	}
	
	
	/**
	 * is touch active
	 */
	this.isTouchActive = function(){
		
		return(g_temp.touch_active);
		
	}	
}

function UGZoomSliderControl(){
	
	var g_objSlider, g_objInner, g_parent = new UGSlider(), g_objParent;
	
	var g_functions = new UGFunctions();
	
	var t = this;
	
	var g_options = {
		slider_zoom_step: 1.2,			
		slider_zoom_max_ratio: 6,		
		slider_zoom_return_pan_duration: 400,	
		slider_zoom_return_pan_easing: "easeOutCubic"	
	};
	
	var g_temp = {
		isPanActive:false,
		startMouseX:0,
		startMouseY:0,
		lastMouseX:0,
		lastMouseY:0,
		startImageX:0,
		startImageY:0,
		panXActive:false,
		panYActive:false,
		objImage:null,
		objImageSize:null,
		objParent:null,
		objParentSize:null,
		objSlide:null,
		storeImageLastTime:0,
		
		isZoomActive: false,
		startDistance:0,
		startMiddlePoint:null,
		imageOrientPoint:null,
		objFitImageSize:null,
		isZoomedOnce:false
	};

	
	/**
	 * init the object
	 */
	function initObject(objSlider, customOptions){
		
		g_parent = objSlider;
		g_objParent = jQuery(g_parent);
		g_objects = objSlider.getObjects();
		g_objSlider = g_objects.g_objSlider;
		g_objInner = g_objects.g_objInner;
		
		g_options = jQuery.extend(g_options, customOptions);
				
		initEvents();
	}

	function getFitScaleMode(){
		
		var scaleMode = g_parent.getScaleMode();
		
		if(scaleMode == "fill")
			scaleMode = "fit";
		
		return(scaleMode);
	}
	
	
	/**
	 * cache current slide and image
	 */
	function storeCurrentImage(){		
		
		//prevent continious image storring
		var currentTime = jQuery.now();
		var diff = currentTime - g_temp.storeImageLastTime;
		
		if(diff < 20)
			return(false);
		
		var slides = g_parent.getSlidesReference();
		g_temp.objSlide = slides.objCurrentSlide;
		g_temp.objImage = slides.objCurrentSlide.find("img");
		
		if(g_temp.objImage.length == 0)
			return(false);
			
		g_temp.objImageSize = g_functions.getElementSize(g_temp.objImage);
		g_temp.objParent = g_temp.objImage.parent();
		g_temp.objParentSize = g_functions.getElementSize(g_temp.objParent);
		
		var scaleMode = getFitScaleMode();
		
		objPadding = g_parent.getObjImagePadding();
		
		g_temp.objFitImageSize = g_functions.getImageInsideParentDataByImage(g_temp.objImage, scaleMode, objPadding);
		
		var currentTime = jQuery.now();
		g_temp.storeImageLastTime = currentTime;
		
		return(true);
	}

	function zoomCurrentImage(mode, mousePos){
		
		var slides = g_parent.getSlidesReference();
		var objImage = slides.objCurrentSlide.find("img");
		var scaleMode = getFitScaleMode();
		
		g_objParent.trigger(g_parent.events.ZOOM_START);
		
		//flag if the images zoomed
		var isZoomed = true;
		
		var objPadding = g_parent.getObjImagePadding();
				
		if(mode == "back"){	
			var objOriginalSize = g_functions.getImageOriginalSize(objImage);
			g_functions.scaleImageFitParent(objImage, objOriginalSize.width, objOriginalSize.height, scaleMode, objPadding);
		}
		else{			
			var zoomIn = (mode == "in")?true:false;
			
			isZoomed = g_functions.zoomImageInsideParent(objImage, zoomIn, g_options.slider_zoom_step, mousePos, scaleMode, g_options.slider_zoom_max_ratio, objPadding);
		}
		
		if(isZoomed == true){
			g_objParent.trigger(g_parent.events.ZOOMING);
			g_objParent.trigger(g_parent.events.ZOOM_CHANGE);
			g_objParent.trigger(g_parent.events.ZOOM_END);
		}
		
	}
	
	
	function ____________PAN_____________(){};

	function isPanPosible(objImage, event, stictTouchesCheck){
		
		//check num touches, strict means that even if 0 - pan not posible
		var arrTouches = g_functions.getArrTouches(event);
		
		if(stictTouchesCheck === true){
			
			if(arrTouches.length != 1)
				return(false);			
		}else{
			if(arrTouches.length > 1)
				return(false);			
		}
		
		if(g_functions.isElementBiggerThenParent(objImage))
			return(true);
		
		return(false);
	}
	
	
	/**
	 * store pan values
	 */
	function storePanInitValues(event){
		
		var mousePos = g_functions.getMousePosition(event);
		
		g_temp.startMouseX = mousePos.pageX;
		g_temp.startMouseY = mousePos.pageY;
		
		g_temp.lastMouseX = g_temp.startMouseX;
		g_temp.lastMouseY = g_temp.startMouseY;
		
		g_temp.startImageX = g_temp.objImageSize.left;
		g_temp.startImageY = g_temp.objImageSize.top;
		
		g_temp.panXActive = (g_temp.objImageSize.width > g_temp.objParentSize.width);
		g_temp.panYActive = (g_temp.objImageSize.height > g_temp.objParentSize.height);
		
	}

	function startPan(event){
				
		g_temp.isPanActive = true;
		storePanInitValues(event);
		
	}
	
	
	/**
	 * pan the image
	 */
	function panImage(event){
		
		if(g_temp.objImage == undefined || g_temp.objImage.length == 0)
			return(true);
		
		var mousePos = g_functions.getMousePosition(event);
		
		var diffX = mousePos.pageX - g_temp.startMouseX;
		var diffY = mousePos.pageY - g_temp.startMouseY;
		
		//get active direction
		var diffLastX = mousePos.pageX - g_temp.lastMouseX;
		var diffLastY = mousePos.pageY - g_temp.lastMouseY;
		
		var directionX = (diffLastX < 0) ? "left":"right";
		var directionY = (diffLastY < 0) ? "up":"down";
		
		g_temp.lastMouseX = mousePos.pageX;
		g_temp.lastMouseY = mousePos.pageY;
		
		var posImage = g_functions.getElementSize(g_temp.objImage);

		if(g_temp.panYActive == false){
			
			diffLastY = 0;
			
		}else{		//zoom enabled
			
			if(directionY == "down" && posImage.top > 0){			
				
				diffLastY = diffLastY / 3;				
				
			}else if(directionY == "up" && posImage.bottom < g_temp.objParentSize.height){
				
				diffLastY = diffLastY / 3;				
				
			}
		}
		
		//slow down x (only if the pan enabled)
		if(g_temp.panXActive == false || g_parent.isInnerInPlace() == false){
			
			diffLastX = 0;
		
		}else{	//zoom enabled
			
			if(directionX == "right" && posImage.left > 0){				
				diffLastX = diffLastX / 3;				
			}
			else if(directionX == "left" && posImage.right < g_temp.objParentSize.width){
				diffLastX = diffLastX / 3;
			}
	    }
		
		var imageX = posImage.left + diffLastX;
		var imageY = posImage.top + diffLastY;
		
		
		g_functions.placeElement(g_temp.objImage, imageX, imageY);
		
	}

	function checkReturnAfterPan(){
				
		var isReturnX = false, isReturnY = false, newX = 0, newY = 0;
		var objSize = g_functions.getElementSize(g_temp.objImage);
		var objImagePadding = g_parent.getObjImagePadding();
				
		var objCenterPos = g_functions.getElementCenterPosition(g_temp.objImage, objImagePadding);
		
		g_temp.panXActive = (g_temp.objImageSize.width > g_temp.objParentSize.width);
		g_temp.panYActive = (g_temp.objImageSize.height > g_temp.objParentSize.height);
				
		
		if(g_temp.panYActive == true){
			
			if(objSize.top > 0){		//off limit top
				
				newY = 0;
				isReturnY = true;
				
			}else if(objSize.bottom < g_temp.objParentSize.height){		//off limit bottom
				
				newY = g_temp.objParentSize.height - objSize.height;
				isReturnY = true;
				
			}
			
		}else{		//pan not active y - return to center
			
			if(objSize.top != objCenterPos.top){
				isReturnY = true;
				newY = objCenterPos.top;
			}
			
		}
		
		
		//check return x to place
		if(g_temp.panXActive == true){
			
			if(objSize.left > 0){		//off limit left
				
				newX = 0;
				isReturnX = true;
				
			}else if(objSize.right < g_temp.objParentSize.width){		//off limit right
								
				newX = g_temp.objParentSize.width - objSize.width;
				isReturnX = true;
				
			}
			
		}else{	
			if(objSize.left != objCenterPos.left){
				isReturnX = true;
				newX = objCenterPos.left;
			}
		}
		
		
		//do the animation
		var objCss = {};
		if(isReturnY == true)
			objCss.top = newY + "px";
		
		if(isReturnX == true)
			objCss.left = newX + "px";
		
		
		if(isReturnY == true || isReturnX == true){
						
			g_temp.objImage.animate(objCss,{
				duration: g_options.slider_zoom_return_pan_duration,
				easing: g_options.slider_zoom_return_pan_easing,
				queue: false
			});

		}
		
	}
	
	/**
	 * check if the image animating or not
	 */
	function isImageAnimating(){
		
		if(g_temp.objImage && g_temp.objImage.is(":animated"))
			return(true);
		
		return(false);
	}
	
	function ____________END_PAN_____________(){};
	
	function ________TOUCH_ZOOM_____________(){};

	function startTouchZoom(arrTouches){
				
		g_temp.isZoomActive = true;
		
		//store init diff
		g_temp.startDistance = g_functions.getDistance(arrTouches[0].pageX, arrTouches[0].pageY, arrTouches[1].pageX, arrTouches[1].pageY);
		if(g_temp.startDistance == 0)
			g_temp.startDistance = 1;
		
		
		//store init positions
		g_temp.startMiddlePoint = g_functions.getMiddlePoint(arrTouches[0].pageX, arrTouches[0].pageY, arrTouches[1].pageX, arrTouches[1].pageY);
				
		g_temp.objImageSize = g_functions.getElementSize(g_temp.objImage);
			
		g_temp.startImageX = g_temp.objImageSize.left;
		g_temp.startImageY = g_temp.objImageSize.top;
		
		//set orient point
		g_temp.imageOrientPoint = g_functions.getElementLocalPoint(g_temp.startMiddlePoint, g_temp.objImage);
		
		var isInsideImage = g_functions.isPointInsideElement(g_temp.imageOrientPoint, g_temp.objImageSize);
		if(isInsideImage == false){
			g_temp.imageOrientPoint = g_functions.getElementCenterPoint(g_temp.objImage);
		}
		
		//trigger start zoom event
		g_objParent.trigger(g_parent.events.ZOOM_START);
	}
	
	
	/**
	 * check num touches, if not 2 - end zoom
	 */
	function checkTouchZoomEnd(event){
				
		if(g_temp.isZoomActive == false)
			return(false);
		
		var arrTouches = g_functions.getArrTouches(event);			
		if(arrTouches.length != 2){		//end touch zoom
			
			g_temp.isZoomActive = false;
			
			//trigger end zoom event
			g_objParent.trigger(g_parent.events.ZOOM_END);			
		}	
		
	}
	
	
	/**
	 * check start touch zoom
	 */
	function checkTouchZoomStart(event){
				
		if(g_temp.isZoomActive == true)
			return(true);


		var arrTouches = g_functions.getArrTouches(event);
				
		if(arrTouches.length != 2)
			return(true);
					
		startTouchZoom(arrTouches);		
	}
	
	
	/**
	 * do touch zoom on touch devices
	 */
	function doTouchZoom(event){
				
		var arrTouches = g_functions.getArrTouches(event);
				
		var distance = g_functions.getDistance(arrTouches[0].pageX, arrTouches[0].pageY, arrTouches[1].pageX, arrTouches[1].pageY);		
		var zoomRatio = distance / g_temp.startDistance;
		
		var middlePoint = g_functions.getMiddlePoint(arrTouches[0].pageX, arrTouches[0].pageY, arrTouches[1].pageX, arrTouches[1].pageY);
		
		//set zoom data:
		var newWidth = g_temp.objImageSize.width * zoomRatio;
		var newHeight = g_temp.objImageSize.height * zoomRatio;
		
		//check max zoom ratio:
		var objOriginalSize = g_functions.getImageOriginalSize(g_temp.objImage);
		var expectedZoomRatio = 1;		
		if(objOriginalSize.width > 0)
			expectedZoomRatio = newWidth / objOriginalSize.width;
		
		if(expectedZoomRatio > g_options.slider_zoom_max_ratio)
			return(true);
		
		//set pan data:
		panX = -(g_temp.imageOrientPoint.x * zoomRatio - g_temp.imageOrientPoint.x);
		panY = -(g_temp.imageOrientPoint.y * zoomRatio - g_temp.imageOrientPoint.y);
		
		var diffMiddleX = (middlePoint.x - g_temp.startMiddlePoint.x);
	    var diffMiddleY = (middlePoint.y - g_temp.startMiddlePoint.y);
		
	    var posx = g_temp.startImageX + panX + diffMiddleX;
		var posy = g_temp.startImageY + panY + diffMiddleY;		
				
		
		//resize and place:
		g_functions.setElementSizeAndPosition(g_temp.objImage, posx, posy, newWidth, newHeight);
		
		//trigger zooming event
		g_objParent.trigger(g_parent.events.ZOOMING);			
		g_objParent.trigger(g_parent.events.ZOOM_CHANGE);			

	}
	
	
	/**
	 * check return the image from zoom
	 */
	function checkReturnFromZoom(){
				
		if(g_temp.objImage == undefined || g_temp.objImage.length == 0)
			return(true);
		
		var objSize = g_functions.getElementSize(g_temp.objImage);
		
		if(objSize.width < g_temp.objFitImageSize.imageWidth){
			
			g_temp.objImage.css({
				position:"absolute",
				margin:"none"
			});
			
			var objCss = {
				top: g_temp.objFitImageSize.imageTop + "px",
				left: g_temp.objFitImageSize.imageLeft + "px",
				width: g_temp.objFitImageSize.imageWidth + "px",
				height: g_temp.objFitImageSize.imageHeight + "px"
			};
			
			g_temp.objImage.animate(objCss,{
				duration: g_options.slider_zoom_return_pan_duration,
				easing: g_options.slider_zoom_return_pan_easing,
				queue: false
			});
			
		}else{			
			checkReturnAfterPan();
		}
		
	}
	
	
	function ________END_TOUCH_ZOOM_____________(){};
	
	
	/**
	 * 
	 * touch start event - start pan, remember start pan data
	 */
	function onTouchStart(event){
		
		//if no image type, exit
		if(g_parent.isCurrentSlideType("image") == false)
			return(true);
		
		var isStored = storeCurrentImage();
		
		if(g_temp.objImage == undefined || g_temp.objImage.length == 0)
			return(true);
		
		event.preventDefault();
						
		//stop animation if exists
		if(isImageAnimating() == true){			
			g_temp.objImage.stop(true);
		}
		
		if(g_temp.isZoomActive == true){
			
			checkTouchZoomEnd(event);
			
		}else{
			
			checkTouchZoomStart(event);
			
		}
		
		//if zoom started stop panning, if not, start panning
		if(g_temp.isZoomActive == true){
			
			g_temp.isPanActive = false;
		
		}else if(isPanPosible(g_temp.objImage, event) == true && g_temp.isZoomedOnce == true){
			
			startPan(event);
		}
		
		/*
		debugLine({
				pan: g_temp.isPanActive,
				zoom: g_temp.isZoomActive,
				event: "start"
			}, true);
		*/
		
	}
	
	
	/**
	 * touch end event - bring the image to place
	 */
	function onTouchEnd(event){
		
		if(g_parent.isCurrentSlideType("image") == false)
			return(true);
		
		//check if some gallery button clicked
		var objTarget = jQuery(event.target);
		if(objTarget.data("ug-button") == true){
			//event.preventDefault();
			return(false);
		}
		
		var isStored = storeCurrentImage();

		if(g_temp.objImage == undefined || g_temp.objImage.length == 0)
			return(true);
				
		var panWasActive = g_temp.isPanActive;
		var zoomWasActive = g_temp.isZoomActive;
		
		//if the inner not in place, don't return noting, let the slide change
		if(g_parent.isInnerInPlace() == false){
			g_temp.isZoomActive = false;
			g_temp.isPanActive = false;
			return(true);
		}
		
		//check end zoom
		if(g_temp.isZoomActive == true){
			checkTouchZoomEnd(event);
		}else{
			checkTouchZoomStart(event);
		}
		
		
		if(g_temp.isZoomActive == true){
			
			g_temp.isPanActive == false;
			
		}else{
			
			var panPosible = isPanPosible(g_temp.objImage, event, true);
			
			if(g_temp.isPanActive == true ){
						
				g_temp.isPanActive = false;
				
			}else if(panPosible == true){
				
				startPan(event);
			}
			
		}
		
		if((panWasActive || zoomWasActive) && g_temp.isZoomActive == false && g_temp.isPanActive == false){
			checkReturnFromZoom();
		}
		
		
	}
	
	
	/**
	 * 
	 * touch move event - pan
	 */
	function onTouchMove(event){
		
		if(g_parent.isCurrentSlideType("image") == false)
			return(true);
				
		//check touch zoom (pinch gesture)
		if(g_temp.isZoomActive == true){
			
			doTouchZoom(event);
			
		}else if(g_temp.isPanActive == true){
			
			panImage(event);
			
		}
		
		
	}
	
	
	/**
	 * on slider mousewheel event
	 */
	function onSliderMouseWheel(event, delta, deltaX, deltaY){
		
		if(g_parent.isCurrentSlideType("image") == false)
			return(true);
		
		event.preventDefault();
		
		//prevent default only if needed
		//if(zoomIn == true || zoomIn == false && g_functions.isElementBiggerThenParent(objImage))
		//event.preventDefault();
		
		
		var zoomIn = (delta > 0);
		var mousePos = g_functions.getMousePosition(event);
		var	mode = (zoomIn == true) ? "in":"out";
		
		zoomCurrentImage(mode, mousePos);
	}
	
	
	/**
	 * init touch events
	 */
	function initEvents(){
		
		//debugLine("init");
		g_objSlider.on("mousewheel",onSliderMouseWheel);
		
		//slider mouse down - pan start
		g_objSlider.bind("mousedown touchstart",onTouchStart);
		
		//on body move
		jQuery("body").bind("mousemove touchmove",onTouchMove);
		
		//on body mouse up - pan end
		jQuery(window).add("body").bind("mouseup touchend", onTouchEnd);
		
		//event before image returned to init position
		g_objParent.bind(g_parent.events.BEFORE_RETURN, function(){
			
			checkReturnFromZoom();
		});
				
		//on item change update isZoomedOnce event. Allow panning only if zoomed once
		g_objParent.bind(g_parent.events.ITEM_CHANGED, function(){
			g_temp.isZoomedOnce = false;
		});
		
		g_objParent.bind(g_parent.events.ZOOM_CHANGE, function(){
			g_temp.isZoomedOnce = true;
		});
		
	}
	
	this.________EXTERNAL_____________ = function(){};
	
	/**
	 * check if the image is zoomed, and there is a place for left panning
	 */
	this.isPanEnabled = function(event, direction){
		
		storeCurrentImage();
		
		if(g_temp.objImage == undefined || g_temp.objImage.length == 0)
			return(false);
		
		if(g_temp.isZoomedOnce == false)
			return(false);
		
		if(isPanPosible(g_temp.objImage, event) == false)
			return(false);
		
		if(g_parent.isInnerInPlace() == false)
			return(false);
		
		if(direction == "left"){
			
			if(g_temp.objImageSize.right <= g_temp.objParentSize.width)
				return(false);
			
		}else{	//right direction
			
			if(g_temp.objImageSize.left >= 0)
				return(false);
		}
		
		return(true);
	}
	
	
	/**
	 * init function for avia controls
	 */
	this.init = function(objSlider, customOptions){
		
		initObject(objSlider, customOptions);
	}
	
	/**
	 * zoom in
	 */
	this.zoomIn = function(){		
		zoomCurrentImage("in");	
	}
	
	/**
	 * zoom out
	 */
	this.zoomOut = function(){		
		zoomCurrentImage("out");		
	}
	
	/**
	 * zoom back
	 */
	this.zoomBack = function(){
		
		zoomCurrentImage("back");		
	}
}
/** -------------- Wistia API ---------------------*/

function UGWistiaAPI(){
	
	this.isAPILoaded = false;
	var t = this, g_objThis = jQuery(this), g_intHandle;
	var g_player, g_isPlayerReady = false;
	
	this.events = {
			START_PLAYING: "start_playing",
			STOP_PLAYING: "stop_playing"
	};


	/**
	 * check if sound cloud active
	 */
	function isWistiaActive(){
		
		return(typeof Wistia != "undefined");	
	}
	
	/**
	 * load vimeo API
	 */
	this.loadAPI = function(){
		
		if(g_ugWistiaAPI.isAPILoaded == true)
			return(true);

		if(isWistiaActive()){
			g_ugWistiaAPI.isAPILoaded = true;
			return(true);
		}
		
		g_ugFunctions.loadJs("fast.wistia.com/assets/external/E-v1.js", true);
		
		g_ugWistiaAPI.isAPILoaded = true;		
	}

	
	/**
	 * actually put the video
	 */
	function putVideoActually(divID, videoID, width, height, isAutoplay){
		
		g_player = null;
		g_isPlayerReady = false;
		
		var htmlID = divID + "_video";
		
		var html = "<div id='"+htmlID+"' class='wistia_embed' style='width:"+width+";height:"+height+";' data-video-width='"+width+"' data-video-height='"+height+"'>&nbsp;</div>";
				
		jQuery("#"+divID).html(html);
		
		g_player = Wistia.embed(videoID, {
			  version: "v1",
			  videoWidth: width,
			  videoHeight: height,
			  container: htmlID,
			  autoPlay: isAutoplay
		});
				
		g_isPlayerReady = true;
				
		initEvents();
	}
	
	
	/**
	 * init events
	 */
	function initEvents(){
		
		//set "play" event
		
		g_player.bind('play', function(){
			g_objThis.trigger(t.events.START_PLAYING);
		});
		
		//set "pause event"
		g_player.bind('pause', function(){
			g_objThis.trigger(t.events.STOP_PLAYING);
		});
		
		g_player.bind('end', function(){
			g_objThis.trigger(t.events.STOP_PLAYING);
		});
		
		
	}
	
	
	/**
	 * do some command
	 */
	this.doCommand = function(command){
		
		if(g_player == null)
			return(false);
		
		if(g_isPlayerReady == false)
			return(false);
		
		switch(command){
			case "play":
				g_player.play();
			break;
			case "pause":
				g_player.pause();
			break;		
		}
		
	}
	
	/**
	 * do pause command
	 */
	this.pause = function(){
		t.doCommand("pause");
	}
	
	/**
	 * do play command
	 */
	this.play = function(){
		t.doCommand("play");
	}
	
	
	/**
	 * put the vimeo video
	 */
	this.putVideo = function(divID, videoID, width, height, isAutoplay){
		
		if(isWistiaActive()){
			putVideoActually(divID, videoID, width, height, isAutoplay);
			return(true);
		}
		
		
		//if no API present, wait for the API being ready
		this.loadAPI();
		g_intHandle = setInterval(function(){
			
			if(isWistiaActive()){
				putVideoActually(divID, videoID, width, height, isAutoplay);
				clearInterval(g_intHandle);
			}
			
		}, 500);
		
	}
	
	
	/**
	 * get if the player is ready
	 */
	this.isPlayerReady = function(){
				
		if(g_isPlayerReady && g_player)
			return(true);
	
		return(false);
	}	
	
	
}

/** -------------- Sound Cloud API ---------------------*/

function UGSoundCloudAPI(){
	
	this.isAPILoaded = false;
	var t = this, g_objThis = jQuery(this), g_intHandle;
	var g_player, g_lastContainerID;
	
	this.events = {
			START_PLAYING: "start_playing",
			STOP_PLAYING: "stop_playing"
	};

	/**
	 * check if sound cloud active
	 */
	function isSCActive(){
		
		return(typeof SC != "undefined");	
	}
	
	/**
	 * load vimeo API
	 */
	this.loadAPI = function(){
		
		if(g_ugSoundCloudAPI.isAPILoaded == true)
			return(true);
				
		if(isSCActive()){
			g_ugSoundCloudAPI.isAPILoaded = true;
			return(true);
		}
		
		g_ugFunctions.loadJs("w.soundcloud.com/player/api.js", true);
		
		g_ugSoundCloudAPI.isAPILoaded = true;		
	}
	
	/**
	 * actually put the video
	 */
	function putSoundActually(divID, trackID, width, height, isAutoplay){
		
		g_player = null;
		g_isPlayerReady = false;
		
		var iframeID = divID+"_iframe";
		
		var url = location.protocol+"//w.soundcloud.com/player/?url=http://api.soundcloud.com/tracks/"+trackID;
		url += "&amp;buying=false&amp;liking=false&amp;download=false&amp;sharing=false&amp;show_artwork=true&show_comments=false&amp;show_playcount=true&amp;show_user=false&amp;hide_related=true&amp;visual=true&amp;start_track=0&amp;callback=true";
		
		if(isAutoplay === true)
			url += "&amp;auto_play=true";
		else
			url += "&amp;auto_play=false";
		
		var html = "<iframe id='"+iframeID+"' src="+url+" width='"+width+"' height='"+height+"' frameborder='0' scrolling='no' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
		
		jQuery("#"+divID).html(html);
		
		//get the player object
		g_player = SC.Widget(iframeID);
		
		g_player.bind(SC.Widget.Events.READY, function() {
			
			if(g_player){
				g_isPlayerReady = true;
				initEvents();
			}
			
		});
		
		g_lastContainerID = divID;
	}

	
	/**
	 * init events
	 */
	function initEvents(){
		
		
		//set "play" event
		g_player.bind(SC.Widget.Events.PLAY, function(){
			g_objThis.trigger(t.events.START_PLAYING);
		});
		
		//set "pause event"
		g_player.bind(SC.Widget.Events.PAUSE, function(){
			g_objThis.trigger(t.events.STOP_PLAYING);
		});
		
		g_player.bind(SC.Widget.Events.FINISH, function(){
			g_objThis.trigger(t.events.STOP_PLAYING);
		});
		
		
	}
		
	
	/**
	 * put the youtube video
	 */
	this.putSound = function(divID, trackID, width, height, isAutoplay){
		
		if(isSCActive()){
			putSoundActually(divID, trackID, width, height, isAutoplay);
			return(true);
		}
		
		
		//if no API present, wait for the API being ready
		this.loadAPI();
		g_intHandle = setInterval(function(){
			
			if(isSCActive()){
				putSoundActually(divID, trackID, width, height, isAutoplay);
				clearInterval(g_intHandle);
			}
			
		}, 500);
		
	}
	

	/**
	 * do some command
	 */
	this.doCommand = function(command){
		
		if(g_player == null)
			return(false);
		
		if(g_isPlayerReady == false)
			return(false);
		
		switch(command){
			case "play":
				g_player.play();
			break;
			case "pause":
				g_player.pause();
			break;
		}
		
	}	
	
	
	/**
	 * pause video
	 */
	this.pause = function(){
		t.doCommand("pause");
	}
	
	
	/**
	 * play video
	 */
	this.play = function(){
		t.doCommand("play");
	}
	
	/**
	 * destroy the player
	 */
	this.destroy = function(){
		g_isPlayerReady = false;
		g_player = null;
		
		if(g_lastContainerID){
			jQuery("#" + g_lastContainerID).html("");
			g_lastContainerID = null;
		}
		
	}
	
}

/** -------------- html5 Video API ---------------------*/

function UGHtml5MediaAPI(){
	
	this.isAPILoaded = false;
	var t = this, g_objThis = jQuery(this), g_intHandle;
	var g_player;
	
	this.events = {
			START_PLAYING: "start_playing",
			STOP_PLAYING: "stop_playing"
	};
	
	/**
	 * load vimeo API
	 */
	this.loadAPI = function(){
		
		if(g_ugHtml5MediaAPI.isAPILoaded == true)
			return(true);
		
		
		if(isMediaElementActive()){
			g_ugHtml5MediaAPI.isAPILoaded = true;
			return(true);
		}
		
		g_ugFunctions.loadJs("cdnjs.cloudflare.com/ajax/libs/mediaelement/2.13.2/js/mediaelement.js", true);
		g_ugFunctions.loadCss("cdnjs.cloudflare.com/ajax/libs/mediaelement/2.13.2/css/mediaelementplayer.min.css", true);
		
		g_ugHtml5MediaAPI.isAPILoaded = true;		
	}
	
	/**
	 * return true if the mediaelement is active
	 */
	function isMediaElementActive(){
				
		return(typeof mejs != "undefined");
	}
	
	
	/**
	 * actually put the video
	 */
	function putVideoActually(divID, data, width, height, isAutoplay){
		
		g_player = null;
		g_isPlayerReady = false;
		
		var urlFlash = location.protocol + "//cdnjs.cloudflare.com/ajax/libs/mediaelement/2.13.2/js/flashmediaelement-cdn.swf";
		var urlSilverlight = location.protocol + "//cdnjs.cloudflare.com/ajax/libs/mediaelement/2.13.2/js/silverlightmediaelement.xap";

		var htmlID = divID + "_video";
		var htmlAutoplay = "";
		if(isAutoplay && isAutoplay === true)
			htmlAutoplay = "autoplay='autoplay'"
		
		var htmlPoster = "";
		if(data.posterImage)
			htmlPoster = "poster='"+data.posterImage+"'";
		
		var html = "<video id='"+htmlID+"' width='"+width+"' height='"+height+"'  controls='controls' preload='none' "+htmlAutoplay+" "+htmlPoster+">";
				
		if(data.mp4 != "")
			html += "<source type='video/mp4' src='"+data.mp4+"' />";
		
		if(data.webm != "")
			html += "<source type='video/webm' src='"+data.webm+"' />";

		if(data.ogv != "")
			html += "<source type='video/ogg' src='"+data.ogv+"' />";
		 
		html +=  "<object width='"+width+"' height='"+height+"' type='application/x-shockwave-flash' data='"+urlFlash+"'>";
		html +=  "<param name='movie' value='"+urlFlash+"' />";
		html +=  "<param name='flashvars' value='controls=true&file="+data.mp4+"' />";
		html +=  "</object>";
		
		html += "</video>";
		
		jQuery("#"+divID).html(html);
		
		new MediaElement(htmlID, {			
		    enablePluginDebug: false,
		    flashName: urlFlash,
		    silverlightName: urlSilverlight,
		    success: function (mediaElement, domObject) { 
		    	g_isPlayerReady = true;
		    	g_player = mediaElement;
		    			    	
		    	if(isAutoplay == false)
		    		g_player.pause();
		    	
		    	initEvents();
		    },
		    error: function (objError) { 
		    	trace(objError);
		    }
		});		
		
	}
	
	
	/**
	 * init player events function
	 */
	function initEvents(){
		
		g_ugFunctions.addEvent(g_player, "play", function(){
			g_objThis.trigger(t.events.START_PLAYING);
		});
		
		g_ugFunctions.addEvent(g_player, "pause", function(){
			g_objThis.trigger(t.events.STOP_PLAYING);
		});
		
		g_ugFunctions.addEvent(g_player, "ended", function(){
			g_objThis.trigger(t.events.STOP_PLAYING);
		});
						
		
	}
	
	
	/**
	 * put the vimeo video
	 */
	this.putVideo = function(divID, data, width, height, isAutoplay){
		
		if(isMediaElementActive()){
			putVideoActually(divID, data, width, height, isAutoplay);
			return(true);
		}
		
		
		//if no API present, wait for the API being ready
		this.loadAPI();
		g_intHandle = setInterval(function(){
			
			if(isMediaElementActive()){
				putVideoActually(divID, data, width, height, isAutoplay);
				clearInterval(g_intHandle);
			}
			
		}, 500);
		
	}

	/**
	 * do some command
	 */
	this.doCommand = function(command){
				
		if(g_player == null)
			return(false);
		
		if(g_isPlayerReady == false)
			return(false);
		
		switch(command){
			case "play":
				g_player.play();
			break;
			case "pause":
				g_player.pause();
			break;
		}
		
	}	
	
	
	/**
	 * pause video
	 */
	this.pause = function(){
		t.doCommand("pause");
	}
	
	
	/**
	 * play video
	 */
	this.play = function(){
		t.doCommand("play");
	}
	
}


/** -------------- Vimeo API class ---------------------*/

function UGVimeoAPI(){
	
	this.isAPILoaded = false;
	
	var t = this, g_objThis = jQuery(this), g_intHandle;
	var g_player = null, g_isPlayerReady = false, g_lastCotnainerID, g_cueChangeAutoplay = false;
	
	
	this.events = {
			START_PLAYING: "start_playing",
			STOP_PLAYING: "stop_playing"
	};
	
	/**
	 * load vimeo API
	 */
	this.loadAPI = function(){
		
		if(g_ugVimeoAPI.isAPILoaded == true)
			return(true);
		
		if(isFroogaloopActive()){
			g_ugVimeoAPI.isAPILoaded = true;
			return(true);
		}

		g_ugFunctions.loadJs("f.vimeocdn.com/js/froogaloop2.min.js", true);
		
		g_ugVimeoAPI.isAPILoaded = true;		
	}
	
	
	
	/**
	 * tells if the froogaloop library active
	 */
	function isFroogaloopActive(){
		
		return(typeof Froogaloop != "undefined");
	}
	
	
	/**
	 * actually put the video
	 */
	function putVideoActually(divID, videoID, width, height, isAutoplay){
		
		g_player = null;
		g_isPlayerReady = false;
		
		var url = location.protocol+"//player.vimeo.com/video/"+videoID+"?api=1";
		
		if(isAutoplay === true)
		   url += "&amp;byline=0&amp;autoplay=1&amp;title=0&amp;portrait=0";
		
		var html = "<iframe src="+url+" width='"+width+"' height='"+height+"' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
		
		jQuery("#"+divID).html(html);
		
		//get the player object
		var iframe = jQuery("#"+divID + " iframe")[0];
		
		g_player = Froogaloop(iframe);

		g_player.addEvent('ready', function(){
			
			if(g_player){
				g_isPlayerReady = true;
				initEvents();
			}
			
		});
		
		g_lastCotnainerID = divID;		
	}
	
	/**
	 * init events
	 */
	function initEvents(){
		
		if(!g_player)
			return(false);
				
		//set "cuechange" event
		g_player.addEvent('cuechange', function(){
			
			if(g_cueChangeAutoplay == true)			
				t.play();
			
		});
		
		//set "play" event
		g_player.addEvent('play', function(){
			g_objThis.trigger(t.events.START_PLAYING);
		});
		
		//set "pause event"
		g_player.addEvent('pause', function(){
			g_objThis.trigger(t.events.STOP_PLAYING);
		});
		
		g_player.addEvent('finish', function(){
			g_objThis.trigger(t.events.STOP_PLAYING);
		});
		
		
	}
	
	
	/**
	 * do some command
	 */
	this.doCommand = function(command){
		
		if(g_player == null)
			return(false);
		
		if(g_isPlayerReady == false)
			return(false);
		
		switch(command){
			default:
				g_player.api(command);
			break;
		}
		
	}
	
	/**
	 * do pause command
	 */
	this.pause = function(){
		t.doCommand("pause");
	}
	
	/**
	 * do play command
	 */
	this.play = function(){
		t.doCommand("play");
	}
	
	/**
	 * desrtoy the player and empty the div
	 */
	this.destroy = function(){
		
		if(g_player){
			g_player.api("unload");
			g_player = null;
			g_isPlayerReady = false;
		}
		
		if(g_lastCotnainerID){
			jQuery("#" + g_lastCotnainerID).html("");			
		}
	
	}
	
	/**
	 * put the vimeo video
	 */
	this.putVideo = function(divID, videoID, width, height, isAutoplay){
		
		if(isFroogaloopActive()){
			putVideoActually(divID, videoID, width, height, isAutoplay);
			return(true);
		}
		
		
		//if no API present, wait for the API being ready
		this.loadAPI();
		g_intHandle = setInterval(function(){
			
			if(isFroogaloopActive()){
				putVideoActually(divID, videoID, width, height, isAutoplay);
				clearInterval(g_intHandle);
			}
			
		}, 500);
		
	}
	
	
	/**
	 * get if the player is ready
	 */
	this.isPlayerReady = function(){
		
		if(g_isPlayerReady && g_player)
			return(true);
	
		return(false);
	}	
	
	/**
	 * change the video
	 */
	this.changeVideo = function(videoID, isAutoplay){
		
		if(t.isPlayerReady() == false)
			return(false);
		
		g_cueChangeAutoplay = isAutoplay;
		
		g_player.api("loadVideo", videoID);
	}
	
	
	/**
	 * get video images
	 */
	this.getVideoImages = function(videoID, itemIndex, onSuccessFunction){
		
		var url = location.protocol+"//vimeo.com/api/v2/video/"+videoID+".json";
		jQuery.get(url, {}, function(data){
			var obj = {};
			obj.preview = data[0].thumbnail_large;
			obj.thumb = data[0].thumbnail_medium;
			onSuccessFunction(itemIndex, obj);
		});
	}
	
	
}


/** -------------- Youtube API class ---------------------*/

function UGYoutubeAPI(){
	
	this.isAPILoaded = false;	
	var t = this, g_player = null, g_intHandle, g_isPlayerReady = false;
	var g_objThis = jQuery(this), g_prevState = -1, g_lastContainerID;	//unstarted
	
	var g_options = {
			video_youtube_showinfo: true
	}
	
	this.events = {
		START_PLAYING: "start_playing",
		STOP_PLAYING: "stop_playing"
	};
	
	
	/**
	 * actually put the video
	 */
	function putVideoActually(divID, videoID, width, height, isAutoplay){
				
		if(g_player && g_isPlayerReady){			
			g_player.destroy();
		}
		
		var playerVars = {
			controls:2,
			showinfo:g_options.video_youtube_showinfo, 
			rel:0
		};
		
		if(isAutoplay === true)
			playerVars.autoplay = 1;
			
		g_isPlayerReady = false;

		g_player = new YT.Player(divID, {
		      height: height,
		      width: width,
		      videoId: videoID,
		      playerVars: playerVars,
		      events: {
		        'onReady': onPlayerReady,
		        'onStateChange': onPlayerStateChange
		      }
		 });
		
		g_lastContainerID = divID;
	}
	
	
	/**
	 * check if YT active
	 */
	function isYTActive(){
		
		if(typeof YT != "undefined" && typeof YT.Player != "undefined")
			return(true);
		
		return(false);
	}
	
	
	/**
	 * set options
	 */
	this.setOptions = function(objOptions){
		g_options = jQuery.extend(g_options, objOptions);
	}
	
	
	/**
	 * put the youtube video
	 */
	this.putVideo = function(divID, videoID, width, height, isAutoplay){
		
		if(isYTActive()){
			putVideoActually(divID, videoID, width, height, isAutoplay);
			return(true);
		}
		
		//if no API present, wait for the API being ready
		this.loadAPI();
		g_intHandle = setInterval(function(){
			
			if(isYTActive()){
				putVideoActually(divID, videoID, width, height, isAutoplay);
				clearInterval(g_intHandle);
			}
			
		}, 500);
		
	}
	
	
	/**
	 * on player ready event
	 */
	function onPlayerReady(){
		g_isPlayerReady = true;
		
	}
	
	
	/**
	 * on player state change event
	 * trigger events
	 */
	function onPlayerStateChange(){
		
		if(typeof g_player.getPlayerState != "function"){
			trace("Youtube API error: can't get player state");
			return(false);
		}
		
		var state = g_player.getPlayerState();
				
		switch(state){
			case YT.PlayerState.PLAYING:
				g_objThis.trigger(t.events.START_PLAYING);
			break;
			default:
				if(g_prevState == YT.PlayerState.PLAYING)
					g_objThis.trigger(t.events.STOP_PLAYING);					
			break;
		}
		
		g_prevState = state;
	}
	
	
	/**
	 * load youtube API
	 */
	this.loadAPI = function(){
		
		if(g_ugYoutubeAPI.isAPILoaded == true)
			return(true);
		
		if(typeof YT != "undefined"){
			g_ugYoutubeAPI.isAPILoaded = true;
			return(true);
		}
		
		g_ugFunctions.loadJs("www.youtube.com/player_api", true);
				
		g_ugYoutubeAPI.isAPILoaded = true;	
		
	}
	
	
	/**
	 * do some command
	 */
	this.doCommand = function(command, opt1){
		
		if(!g_player)
			return(true);
		
		if(g_isPlayerReady == false)
			return(false);
		
		switch(command){
			case "play":
				if(typeof g_player.playVideo != "function")
					return(false);
				
				g_player.playVideo();
			break;
			case "pause":
				if(typeof g_player.pauseVideo != "function")
					return(false);
				
				g_player.pauseVideo();
			break;
			case "seek":
				if(typeof g_player.seekTo != "function")
					return(false);

				g_player.seekTo(opt1);
			break;
			case "stopToBeginning":
				var state = g_player.getPlayerState();
				
				g_player.pauseVideo();
				
				switch(state){
					case YT.PlayerState.PLAYING:
					case YT.PlayerState.ENDED:
					case YT.PlayerState.PAUSED:
						g_player.seekTo(0);
					break;
				}
			break;
		}
	}
	
	/**
	 * play video
	 */
	this.play = function(){
		t.doCommand("play");		
	}
	
	/**
	 * stop the video
	 */
	this.pause = function(){
		t.doCommand("pause");
	}
	
	/**
	 * destroy player
	 */
	this.destroy = function(){
		if(g_player){
			g_isPlayerReady = false;		
			g_player.destroy();
		}
	}
	
	/**
	 * stop the video and seek to start
	 */
	this.stopToBeginning = function(){
		t.doCommand("stopToBeginning");
	}
	
	/**
	 * change the video
	 */
	this.changeVideo = function(videoID, isAutoplay){
		
		if(t.isPlayerReady() == false)
			return(false);
		
		if(isAutoplay && isAutoplay == true)
			g_player.loadVideoById(videoID, 0, "default");
		else
			g_player.cueVideoById(videoID, 0, "default");
	}
	
	
	/**
	 * get if the player is ready
	 */
	this.isPlayerReady = function(){
		
		if(g_isPlayerReady && g_player)
			return(true);
	
		return(false);
	}
	
		
	
	/**
	 * get preview and thumbs images according the ID
	 */
	this.getVideoImages = function(videoID){
		var obj = {};
		obj.preview = "https://i.ytimg.com/vi/"+videoID+"/sddefault.jpg";
		obj.thumb = "https://i.ytimg.com/vi/"+videoID+"/default.jpg";
		return(obj);
	}
	
	
}

/** -------------- Video Playe Class ---------------------*/

function UGVideoPlayer(){
	
	var t = this, g_galleryID, g_objThis = jQuery(this), g_functions = new UGFunctions();
	var g_youtubeAPI = new UGYoutubeAPI(), g_vimeoAPI = new UGVimeoAPI();
	var g_html5API = new UGHtml5MediaAPI(), g_soundCloudAPI = new UGSoundCloudAPI(), g_wistiaAPI = new UGWistiaAPI();
	var g_objPlayer, g_objYoutube, g_objVimeo, g_objHtml5, g_objButtonClose, g_objSoundCloud, g_objWistia;
	
	var g_options = {
			video_enable_closebutton: true
	};
	
	this.events = {
			SHOW: "video_show",
			HIDE: "video_hide",
			PLAY_START: "video_play_start",
			PLAY_STOP: "video_play_stop"
	};
	
	var g_temp = {
			standAloneMode: false,
			youtubeInnerID:"",
			vimeoPlayerID:"",
			html5PlayerID:"",
			wistiaPlayerID:"",
			soundCloudPlayerID:""
	};
	
	
	/**
	 * init the object
	 */
	this.init = function(optOptions, isStandAloneMode, galleryID){
		g_galleryID = galleryID;
		
		if(!g_galleryID)
			throw new Error("missing gallery ID for video player, it's a must!");
			
		g_options =  jQuery.extend(g_options, optOptions);
		
		g_youtubeAPI.setOptions(g_options);
		
		if(isStandAloneMode && isStandAloneMode == true)
			g_temp.standAloneMode = true;
		
	}
	
	
	/**
	 * set the player html
	 */
	this.setHtml = function(objParent){
		
		g_temp.youtubeInnerID = g_galleryID + "_youtube_inner";
		g_temp.vimeoPlayerID = g_galleryID + "_videoplayer_vimeo";
		g_temp.html5PlayerID = g_galleryID + "_videoplayer_html5";
		g_temp.wistiaPlayerID = g_galleryID + "_videoplayer_wistia";
		g_temp.soundCloudPlayerID = g_galleryID + "_videoplayer_soundcloud";
		
		
		var html = "<div class='ug-videoplayer' style='display:none'>";
		html += "<div class='ug-videoplayer-wrapper ug-videoplayer-youtube' style='display:none'><div id='"+g_temp.youtubeInnerID+"'></div></div>";
		html += "<div id='"+g_temp.vimeoPlayerID+"' class='ug-videoplayer-wrapper ug-videoplayer-vimeo' style='display:none'></div>";
		html += "<div id='"+g_temp.html5PlayerID+"' class='ug-videoplayer-wrapper ug-videoplayer-html5'></div>";
		html += "<div id='"+g_temp.soundCloudPlayerID+"' class='ug-videoplayer-wrapper ug-videoplayer-soundcloud'></div>";
		html += "<div id='"+g_temp.wistiaPlayerID+"' class='ug-videoplayer-wrapper ug-videoplayer-wistia'></div>";
		
		if(g_temp.standAloneMode == false && g_options.video_enable_closebutton == true)
			html += "<div class='ug-videoplayer-button-close'></div>";
		
		html += "</div>";
		
		objParent.append(html);
		
		g_objPlayer = objParent.children(".ug-videoplayer");
		g_objYoutube = g_objPlayer.children(".ug-videoplayer-youtube");
		g_objVimeo = g_objPlayer.children(".ug-videoplayer-vimeo");
		g_objHtml5 = g_objPlayer.children(".ug-videoplayer-html5");
		g_objSoundCloud = g_objPlayer.children(".ug-videoplayer-soundcloud");
		g_objWistia = g_objPlayer.children(".ug-videoplayer-wistia");
		
		if(g_temp.standAloneMode == false && g_options.video_enable_closebutton == true)
			g_objButtonClose = g_objPlayer.children(".ug-videoplayer-button-close")
	}

	
	function __________EVENTS___________(){};	
	
	/**
	 * on close button click event
	 */
	function onCloseButtonClick(){
		t.hide();
	}
	
	/**
	 * on some video play start
	 */
	function onPlayStart(){
		
		g_objThis.trigger(t.events.PLAY_START);
		
		if(g_objButtonClose)
			g_objButtonClose.hide();
	}
	
	
	/**
	 * on some video play stop
	 */
	function onPlayStop(){
		
		g_objThis.trigger(t.events.PLAY_STOP);
		
		if(g_objButtonClose)
			g_objButtonClose.show();
	}
	
	
	/**
	 * init events
	 */
	function initEvents(){
		
		//close button events
		if(g_objButtonClose){
			g_functions.setButtonMobileReady(g_objButtonClose);		
			g_functions.setButtonOnClick(g_objButtonClose, onCloseButtonClick);					
		}
		
		//youtube events
		jQuery(g_youtubeAPI).on(g_youtubeAPI.events.START_PLAYING, onPlayStart);
		jQuery(g_youtubeAPI).on(g_youtubeAPI.events.STOP_PLAYING, onPlayStop);
		
		//vimeo events
		jQuery(g_vimeoAPI).on(g_vimeoAPI.events.START_PLAYING, onPlayStart);
		jQuery(g_vimeoAPI).on(g_vimeoAPI.events.STOP_PLAYING, onPlayStop);
		
		//html5 video events
		jQuery(g_html5API).on(g_html5API.events.START_PLAYING, onPlayStart);
		jQuery(g_html5API).on(g_html5API.events.STOP_PLAYING, onPlayStop);
		
		jQuery(g_soundCloudAPI).on(g_soundCloudAPI.events.START_PLAYING, onPlayStart);
		jQuery(g_soundCloudAPI).on(g_soundCloudAPI.events.STOP_PLAYING, onPlayStop);
		
		jQuery(g_wistiaAPI).on(g_wistiaAPI.events.START_PLAYING, onPlayStart);
		jQuery(g_wistiaAPI).on(g_wistiaAPI.events.STOP_PLAYING, onPlayStop);
		
	}
	
	
	/**
	 * destroy the video player events
	 */
	this.destroy = function(){
		
		if(g_objButtonClose){
			g_objButtonClose.off("click");
			g_objButtonClose.off("touchend");
		}
		
		//youtube events
		jQuery(g_youtubeAPI).off(g_youtubeAPI.events.START_PLAYING);
		jQuery(g_youtubeAPI).off(g_youtubeAPI.events.STOP_PLAYING);
		
		//vimeo events
		jQuery(g_vimeoAPI).off(g_vimeoAPI.events.START_PLAYING);
		jQuery(g_vimeoAPI).off(g_vimeoAPI.events.STOP_PLAYING);
		
		//html5 video events
		jQuery(g_html5API).off(g_html5API.events.START_PLAYING);
		jQuery(g_html5API).off(g_html5API.events.STOP_PLAYING);
		
		jQuery(g_soundCloudAPI).off(g_soundCloudAPI.events.START_PLAYING, onPlayStart);
		jQuery(g_soundCloudAPI).off(g_soundCloudAPI.events.STOP_PLAYING, onPlayStop);
		
		jQuery(g_wistiaAPI).off(g_wistiaAPI.events.START_PLAYING, onPlayStart);
		jQuery(g_wistiaAPI).off(g_wistiaAPI.events.STOP_PLAYING, onPlayStop);
		
	}
	
	
	/**
	 * init events
	 */
	this.initEvents = function(){
		
		initEvents();
	}
	
	
	/**
	 * set element size and position the button
	 */
	this.setSize = function(width, height){
				
		g_objPlayer.height(height);
		g_objPlayer.width(width);
		
		if(g_objButtonClose)
			g_functions.placeElement(g_objButtonClose, "right", "top");
		
	}
	
	/**
	 * set video player position
	 */
	this.setPosition = function(left, top){
		g_functions.placeElement(g_objPlayer, left, top);
	}
	
	/**
	 * get video player object for placing
	 */
	this.getObject = function(){
		return(g_objPlayer);
	}
	
	
	/**
	 * show the player
	 */
	this.show = function(){		
		
		if(t.isVisible() == true)
			return(true);
		
		g_objPlayer.show();
		
		if(g_objButtonClose)
			g_objButtonClose.show();
				
		g_objThis.trigger(t.events.SHOW);
	}
		
	
	/**
	 * hide the player
	 */
	this.hide = function(){
		
		if(t.isVisible() == false)
			return(true);
		
		//pause all players
		stopAndHidePlayers();
		g_objPlayer.hide();
		
		g_objThis.trigger(t.events.HIDE);
	}

	
	/**
	 * return if the player is visible
	 */
	this.isVisible = function(){
		
		return g_objPlayer.is(":visible");
	}
	
	/**
	 * stop and hide other elements except some
	 */
	function stopAndHidePlayers(except){
		
		var arrPlayers = ["youtube", "vimeo", "html5", "soundcloud", "wistia"];
		for(var index in arrPlayers){
			var player = arrPlayers[index];
			if(player == except)
				continue;
			switch(player){
				case "youtube":					
					g_youtubeAPI.pause();
					g_objYoutube.hide();
				break;
				case "vimeo":
					g_vimeoAPI.pause();
					g_vimeoAPI.destroy();
					g_objVimeo.hide();
				break;
				case "html5":
					g_html5API.pause();
					g_objHtml5.hide();
				break;
				case "soundcloud":
					g_soundCloudAPI.pause();
					g_soundCloudAPI.destroy();
					g_objSoundCloud.hide();
				break;
				case "wistia":
					g_wistiaAPI.pause();
					g_objWistia.hide();
				break;
			}
		}
		
	}

	this.playYoutube = function(videoID, isAutoplay){
			
		if(typeof isAutoplay == "undefined")
			var isAutoplay = true;
		
		stopAndHidePlayers("youtube");
		
		g_objYoutube.show();
		
		var objYoutubeInner = g_objYoutube.children("#"+g_temp.youtubeInnerID);
		if(objYoutubeInner.length == 0)
			g_objYoutube.append("<div id='"+g_temp.youtubeInnerID+"'></div>");
			
		
		if(g_youtubeAPI.isPlayerReady() == true && g_temp.standAloneMode == true)
			g_youtubeAPI.changeVideo(videoID, isAutoplay);
		else{
			g_youtubeAPI.putVideo(g_temp.youtubeInnerID, videoID, "100%", "100%", isAutoplay);
		}
	}
	
	
	/**
	 * play vimeo
	 */
	this.playVimeo = function(videoID, isAutoplay){
		
		if(typeof isAutoplay == "undefined")
			var isAutoplay = true;
		
		stopAndHidePlayers("vimeo");
		
		g_objVimeo.show();
		
		if(g_vimeoAPI.isPlayerReady() && g_temp.standAloneMode == true)
			g_vimeoAPI.changeVideo(videoID, isAutoplay);
		else
			g_vimeoAPI.putVideo(g_temp.vimeoPlayerID, videoID, "100%", "100%", isAutoplay);

	}
	
	
	/**
	 * play html5 video
	 */
	this.playHtml5Video = function(ogv, webm, mp4, posterImage, isAutoplay){
		
		if(typeof isAutoplay == "undefined")
			var isAutoplay = true;
				
		stopAndHidePlayers("html5");
		
		g_objHtml5.show();
		
		//trace(posterImage);
		
		var data = {
				ogv: ogv, 
				webm: webm, 
				mp4: mp4, 
				posterImage: posterImage 
			};
		
		g_html5API.putVideo(g_temp.html5PlayerID, data, "100%", "100%", isAutoplay);
		
	}

	/**
	 * play sound cloud
	 */
	this.playSoundCloud = function(trackID, isAutoplay){
		
		if(typeof isAutoplay == "undefined")
			var isAutoplay = true;
		
		stopAndHidePlayers("soundcloud");
		
		g_objSoundCloud.show();
		
		g_soundCloudAPI.putSound(g_temp.soundCloudPlayerID, trackID, "100%", "100%", isAutoplay);
	}
	
	
	/**
	 * play sound cloud
	 */
	this.playWistia = function(videoID, isAutoplay){
		
		if(typeof isAutoplay == "undefined")
			var isAutoplay = true;
		
		stopAndHidePlayers("wistia");
		
		g_objWistia.show();
		
		g_wistiaAPI.putVideo(g_temp.wistiaPlayerID, videoID, "100%", "100%", isAutoplay);
	
	}
	
}


var g_ugYoutubeAPI = new UGYoutubeAPI();
var g_ugVimeoAPI = new UGVimeoAPI();
var g_ugHtml5MediaAPI = new UGHtml5MediaAPI();
var g_ugSoundCloudAPI = new UGSoundCloudAPI();
var g_ugWistiaAPI = new UGWistiaAPI();

	jQuery.fn.unitegallery = function(options){
		var element = jQuery(this);
		var galleryID = "#" + element.attr("id");
		
		if(!options)
			var options = {};
		
		var objGallery = new UniteGalleryMain();
		objGallery.run(galleryID, options);
		
		var api = new UG_API(objGallery);
		return(api);
	}


	/**
	 * check for errors function
	 */
	function ugCheckForErrors(galleryID, type){
		
		if(typeof jQuery.fn.unitegallery == "function")
			return(true);
		
		var errorMessage = "Unite Gallery Error: You have some jquery.js library include that comes after the gallery files js include.";
		errorMessage += "<br> This include eliminates the gallery libraries, and make it not work.";
		
		if(type == "cms"){
			errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Gallery Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
			errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
		}else{
			errorMessage += "<br><br> Please find and remove this jquery.js include and the gallery will work. <br> * There should be only one jquery.js include before all other js includes in the page.";			
		}
		
		errorMessage = "<div style='font-size:16px;color:#BC0C06;max-width:900px;border:1px solid red;padding:10px;'>" + errorMessage + "</div>"
		
		jQuery(galleryID).show().html(errorMessage);
		
		return(false);
	}

	
function UniteGalleryMain(){
	
	var t = this;
	var g_galleryID;
	var g_objGallery = jQuery(t), g_objWrapper;
	var g_objThumbs, g_objSlider, g_functions = new UGFunctions();
	var g_arrItems = [], g_numItems, g_selectedItem = null, g_selectedItemIndex = -1;
	var g_objTheme;
	
	this.events = {
			ITEM_CHANGE: "item_change",
			SIZE_CHANGE: "size_change",
			ENTER_FULLSCREEN: "enter_fullscreen",
			EXIT_FULLSCREEN: "exit_fullscreen",
			START_PLAY: "start_play",
			STOP_PLAY: "stop_play",
			PAUSE_PLAYING: "pause_playing",
			CONTINUE_PLAYING: "continue_playing",
			SLIDER_ACTION_START: "slider_action_start",
			SLIDER_ACTION_END: "slider_action_end",
			ITEM_IMAGE_UPDATED: "item_image_updated",
			GALLERY_KEYPRESS: "gallery_keypress"
	};
	
	//set the default gallery options
	var g_options = {				
			gallery_width:900,	
			gallery_height:500,						
			gallery_min_width: 150,		
			gallery_min_height: 100,					
			gallery_theme:"default",					
			gallery_skin:"default",						
			gallery_images_preload_type:"minimal",		
			gallery_autoplay:false,			
			gallery_play_interval: 3000,			
			gallery_pause_on_mouseover: true,		
			gallery_control_thumbs_mousewheel:false,	
			gallery_control_keyboard: true,				
			gallery_carousel:true,					
			gallery_preserve_ratio: true,	
			gallery_debug_errors:false,			
			gallery_background_color: ""	
	};
	
	
	var g_temp = {			
		objCustomOptions:{},
		isAllItemsPreloaded:false,	
		isFreestyleMode:false,	
		lastWidth:0,
		lastHeigh:0,
		handleResize: null,
		isInited: false,
		isPlayMode: false,
		isPlayModePaused: false,
		playTimePassed: 0,
		playTimeLastStep: 0,
		playHandle: "",
		playStepInterval: 33,
		objProgress: null,
		isFakeFullscreen: false,
		thumbsType:null,
		isYoutubePresent:false,	
		isVimeoPresent:false,	
		isHtml5VideoPresent:false,	
		isSoundCloudPresent:false,	
		isWistiaPresent: false,		
		resizeDelay: 100,
		isRunFirstTime: true,
		originalOptions: {}
	};
	
	
	
	function __________INIT_GALLERY_______(){};
	
	/**
	 * get theme function from theme name
	 */
	function getThemeFunction(themeName){
		 var themeFunction = themeName;
		if(themeFunction.indexOf("UGTheme_") == -1)
			 themeFunction = "UGTheme_" + themeFunction;
		
		return(themeFunction);
	}

	/**
	 * init the theme
	 */
	function initTheme(objParams){
		 		
		//set theme function:
		 if(objParams.hasOwnProperty("gallery_theme"))
			 g_options.gallery_theme = objParams.gallery_theme;
		 else{
			 var defaultTheme = g_options.gallery_theme;
			 if(g_ugFunctions.isThemeRegistered(defaultTheme) == false)
				 g_options.gallery_theme = g_ugFunctions.getFirstRegisteredTheme();
		 }
		 
		 var themeFunction = getThemeFunction(g_options.gallery_theme);
		 
		 try{
			 g_options.gallery_theme = eval(themeFunction);
		 }catch(e){
			 //check registered themes
		 };
		 
		 g_options.gallery_theme = eval(themeFunction);
		 
		 //init the theme
		 
		 //destroy last theme if exists
		 if(g_objTheme && typeof g_objTheme.destroy == "function"){
			
			 g_objTheme.destroy();
	    	 g_objWrapper.html("");
		 }
		 
		// trace(g_options.tile_enable_textpanel);
		 
		 g_objTheme = new g_options.gallery_theme();
		 g_objTheme.init(t, g_temp.objCustomOptions);
		 
	}
	
	
	/**
	 * reset all the options for the second time run
	 */
	function resetOptions(){
	   	 
		 g_options = jQuery.extend({}, g_temp.originalOptions);
		 
		 g_selectedItemIndex = -1;
		 g_selectedItem = null;
		 g_objSlider = undefined;
		 g_objThumbs = undefined;
		 g_objSlider = undefined; 
	}
	
	
	/**
	 *  the gallery
	 */
	function runGallery(galleryID, objCustomOptions){
			 
		     g_temp.objCustomOptions = objCustomOptions;
			 
		     if(g_temp.isRunFirstTime == true){
		    	 
		    	 g_galleryID = galleryID;
				 g_objWrapper = jQuery(g_galleryID);
				 if(g_objWrapper.length == 0){
					 trace("div with id: "+g_galleryID+" not found");
					 return(false);
				 }
				 
				 g_temp.originalOptions = jQuery.extend({}, g_options);
				 
				 //fill arrItems
				 var arrItems = g_objWrapper.children();
				 
				 fillItemsArray(arrItems);
				 			 
				 loadAPIs();
				 
				 //hide images:
				 g_objWrapper.children("img").fadeTo(0,0).hide();
				 g_objWrapper.show();
		
				 clearInitData();
		    	 
		     }else{		//reset options
		    	 resetOptions();
		     }
			 
		     //extend params with defaults from user
			 g_options = jQuery.extend(g_options, objCustomOptions);
			 
			 //modify and verify the params
			 modifyInitParams(objCustomOptions);
			 validateParams();

			 //init the theme
			 initTheme(objCustomOptions);
			 			 				 
			 //set gallery html elements
			 setGalleryHtml();

			 //set html properties to all elements
			 setHtmlObjectsProperties();
			 
			 var galleryWidth = g_objWrapper.width();
			 if(galleryWidth == 0){
				 g_functions.waitForWidth(g_objWrapper, runGalleryActually);
			 }else
				 runGalleryActually();
			 
	}

	function runGalleryActually(){
		
		if(g_temp.isFreestyleMode == false){
			 	
			 if(g_options.gallery_preserve_ratio == true)
				 setHeightByOriginalRatio();
		 }
		 
		 g_objTheme.run();
		 	 
		 preloadBigImages();
		 
		 initEvents();
		 		 
		 //select first item
		 if(g_numItems > 0) 
			 t.selectItem(0);
		 
		 //set autoplay
		 if(g_options.gallery_autoplay == true)
			 t.startPlayMode();
		 
		 g_temp.isRunFirstTime = false;
		
	}
	
	
	/**
	 * 
	 * show error message
	 */
	function showErrorMessage(message){
		
		message = "<b>Gallery Error: </b>" + message;
		
		var html = "<div class='ug-error-message'>" + message + "</div>";
		
		g_objWrapper.children().remove();
		
		g_objWrapper.width(g_options.gallery_width);
		g_objWrapper.height(g_options.gallery_height);
		
		g_objWrapper.css("border","1px solid black");
		
		g_objWrapper.html(html);
		g_objWrapper.show();		
	}
	
	
	/**
	 * 
	 * @param objParams
	 */
	 function modifyInitParams(inputParams){
		 
		 //set default for preloading
		 if(!g_options.gallery_images_preload_type)
			 g_options.gallery_images_preload_type = "minimal";
		 
		 //normalize gallery min height and width
		 if(inputParams.gallery_min_height == undefined && g_options.gallery_height < g_options.gallery_min_height){
			 g_options.gallery_min_height = 0;
		 }
		 
		 if(inputParams.gallery_min_width == undefined && g_options.gallery_width < g_options.gallery_min_width){
			 g_options.gallery_min_width = 0;
		 }
		 
			 
	 }

	
	/**
	 * validate the init parameters
	 */
	 function validateParams(){
		 
		 //validate theme:
		 if(!g_options.gallery_theme)
			 throw new Error("The gallery can't run without theme");
		 		 
		 //if(typeof g_options.theme != "function")
			 //throw new Error("Wrong theme function: " + g_options.theme.toString());
		 
		 //validate height and width
		 if(g_options.gallery_height < g_options.gallery_min_height)
			 throw new Error("The <b>gallery_height</b> option must be bigger then <b>gallery_min_height option</b>");
		 
		 if(g_options.gallery_width < g_options.gallery_min_width)
			 throw new Error("The <b>gallery_width</b> option must be bigger then <b>gallery_min_width option</b>");
		 
		 
	 }
	 
	 
	 /**
	 * set gallery html
	 */
	function setGalleryHtml(){
		
		 //add classes and divs
		 g_objWrapper.addClass("sovgallery-wrapper");
		 
		 t.setSizeClass();
	}
	
	/**
	 * if the thumbs panel don't exists, delete initial images from dom
	 */
	function clearInitData(){
		
		var objItems = g_objWrapper.children().remove();
	}
	
	
	/**
	 * store last gallery size
	 */
	function storeLastSize(){
		var objSize = t.getSize();
		
		g_temp.lastWidth = objSize.width;
		g_temp.lastHeight = objSize.height;
	}
	
	
	/**
	 * set gallery height by original ratio
	 */
	function setHeightByOriginalRatio(){
		
		var objSize = t.getSize();
				
		var ratio = objSize.width / objSize.height;
		
		if(ratio != objSize.orig_ratio){
			
			var newHeight = objSize.width / objSize.orig_ratio;
			newHeight = Math.round(newHeight);
			
			if(newHeight < g_options.gallery_min_height)
				newHeight = g_options.gallery_min_height;
			
			g_objWrapper.height(newHeight);
		}
	
	}

	
	/**
	 * set properties of the html objects
	 */
	function setHtmlObjectsProperties(){
		   
			var optionWidth = g_functions.getCssSizeParam(g_options.gallery_width);
			
		   //set size		
		   var objCss = {
				    //"width":optionWidth,		//make it work within tabs
				    "max-width":optionWidth,
					"min-width":g_functions.getCssSizeParam(g_options.gallery_min_width),
			};
		   
		   if(g_temp.isFreestyleMode == false){
			   objCss["height"] = g_options.gallery_height+"px";			   
		   }else{
			   objCss["overflow"] = "visible";			   
		   }
		   
		   //set background color
		   if(g_options.gallery_background_color)
			   objCss["background-color"] = g_options.gallery_background_color;
		   
		   
		   g_objWrapper.css(objCss);
		   
	}

	
	/**
	 * fill items array from images object
	 */
	function fillItemsArray(arrChildren){
		
		 
		 var numIndex = 0;
		 
		 for(var i=0;i<arrChildren.length;i++){
			 var objChild = jQuery(arrChildren[i]);
			 
			 var tagname = objChild.prop("tagName").toLowerCase();
			 
			 //handle link wrapper
			 var itemLink = "";
			 if(tagname == "a"){
				 itemLink = objChild.attr("href");
				 objChild = objChild.children();
				 var tagname = objChild.prop("tagName").toLowerCase();				 
			 }
			 
			 var itemType = objChild.data("type");
			 if(itemType == undefined)
				 itemType = "image";
			 
			 var objItem = {};
			 objItem.type = itemType;
			 
			 if(tagname == "img"){
				 objItem.urlThumb = objChild.attr("src");
				 objItem.title = objChild.attr("alt");
				 objItem.objThumbImage = objChild;
			 }else{
				 
				 if(itemType == "image")
					 throw new Error("The item should not be image type");
				 
				 objItem.urlThumb = objChild.data("thumb");
				 objItem.title = objChild.data("title");
				 objItem.objThumbImage = null;
			 }
			 
			 objItem.link = itemLink;
			 objItem.description = objChild.data("description");
			 
			 if(!objItem.description)
				 objItem.description = "";
			 
			 objItem.isLoaded = false;
			 objItem.isThumbImageLoaded = false;	//if the image loaded or error load
			 objItem.objPreloadImage = null;
			 objItem.urlImage = objChild.data("image");
			 objItem.isBigImageLoadStarted = false;
			 objItem.isBigImageLoaded = false;
			 objItem.isBigImageLoadError = false;			 
			 objItem.imageWidth = 0;
			 objItem.imageHeight = 0;
			 
			 var isImageMissing = (objItem.urlImage == undefined || objItem.urlImage == "");
			 var isThumbMissing = (objItem.urlThumb == undefined || objItem.urlThumb == "");
			 
			 switch(objItem.type){
			 	case "youtube":			 		
					 objItem.videoid = objChild.data("videoid");
			 		 
					 if(isImageMissing || isThumbMissing){
						 
						 var objImages = g_ugYoutubeAPI.getVideoImages(objItem.videoid);
					 		
				 		 //set preview image
				 		 if(isImageMissing)
				 			objItem.urlImage = objImages.preview;
				 		
				 		 //set thumb image
				 		 if(isThumbMissing){
				 			 	objItem.urlThumb = objImages.thumb;
				 				
				 			 	 if(tagname == "img")
				 					 objChild.attr("src",objItem.urlThumb);
				 		 }
						 
					 }
					 
					 g_temp.isYoutubePresent = true;
				break;
			 	case "vimeo":
			 		
					objItem.videoid = objChild.data("videoid");
										
					g_temp.isVimeoPresent = true;
			 	break;
			 	case "html5video":
			 		objItem.videoogv = objChild.data("videoogv");
			 		objItem.videowebm = objChild.data("videowebm");
			 		objItem.videomp4 = objChild.data("videomp4");
			 		
			 		g_temp.isHtml5VideoPresent = true;
			 	break;
			 	case "soundcloud":
			 		objItem.trackid = objChild.data("trackid");
			 		g_temp.isSoundCloudPresent = true;
			 	break;
			 	case "wistia":
					 objItem.videoid = objChild.data("videoid");
					 g_temp.isWistiaPresent = true;
			 	break;
			 }
			
			 //clear not needed attributes
			 if(objItem.objThumbImage){
				 objItem.objThumbImage.removeAttr("data-description", "");
				 objItem.objThumbImage.removeAttr("data-image", "");				 
			 }
			 
			 if(objItem.urlThumb && objItem.urlThumb !== undefined && objItem.urlThumb != ""){
				 objItem.index = numIndex;
				 g_arrItems.push(objItem);
				 numIndex++;
			 }
			 
		 }
		 
		 g_numItems = g_arrItems.length;
		 
	}
	
	
	/**
	 * load api's according presented item types
	 */
	function loadAPIs(){
		
		//load youtube api
		if(g_temp.isYoutubePresent)
			g_ugYoutubeAPI.loadAPI();
		
		if(g_temp.isVimeoPresent)
			g_ugVimeoAPI.loadAPI();
		
		if(g_temp.isHtml5VideoPresent)
			g_ugHtml5MediaAPI.loadAPI();
		
		if(g_temp.isSoundCloudPresent)
			g_ugSoundCloudAPI.loadAPI();
		
		if(g_temp.isWistiaPresent)
			g_ugWistiaAPI.loadAPI();
		
	}
	
	
	/**
	 * preload big images
	 */
	function preloadBigImages(){
		
		//check and fix preload type
		if(g_options.gallery_images_preload_type == "visible" && !g_objThumbs)
			g_options.gallery_images_preload_type = "minimal";
		
		if(g_temp.isAllItemsPreloaded == true)
			return(true);
		
		switch(g_options.gallery_images_preload_type){
			default:
			case "minimal":
			break;
			case "all":
				
				jQuery(g_arrItems).each(function(){	
					preloadItemImage(this);			
				});			
				
			break;
			case "visible":
				jQuery(g_arrItems).each(function(){		
					var objItem = this;
					var isVisible = g_objThumbs.isItemThumbVisible(objItem);
					
					if(isVisible == true)
						preloadItemImage(objItem);
				});
				
			break;
		}
				
	}
	
	/**
	 * check if item needed to preload and preload it
	 */
	function checkPreloadItemImage(objItem){
		
		if(objItem.isBigImageLoadStarted == true ||
				   objItem.isBigImageLoaded == true || 
				   objItem.isBigImageLoadError == true){
					return(false);			
		}
		
		switch(g_options.gallery_images_preload_type){
			default:
			case "minimal":
			break;
			case "all":			
					preloadItemImage(objItem);							
			break;
			case "visible":
				var isVisible = g_objThumbs.isItemThumbVisible(objItem);					
					if(isVisible == true)
						preloadItemImage(objItem);				
			break;
		}
		
	}
	
	/**
	 * preload item image
	 */
	function preloadItemImage(objItem){
		
		if(objItem.isBigImageLoadStarted == true ||
		   objItem.isBigImageLoaded == true || 
		   objItem.isBigImageLoadError == true){
			return(true);			
		}
		
		var imageUrl = objItem.urlImage;
		if(imageUrl == "" || imageUrl == undefined){
			objItem.isBigImageLoadError = true;
			return(false);
		}
		
		objItem.isBigImageLoadStarted = true;
				
		objItem.objPreloadImage = jQuery('<img/>').attr("src", imageUrl);
		objItem.objPreloadImage.data("itemIndex", objItem.index);
		
		//set image load event (not that reliable)
		objItem.objPreloadImage.on("load", t.onItemBigImageLoaded);
		
		//set load error event
		objItem.objPreloadImage.on( "error", function(){
			var objImage = jQuery(this);
			var itemIndex = objImage.data("itemIndex");
			var objItem = g_arrItems[itemIndex];
			
			//update error:
			objItem.isBigImageLoadError = true;
			objItem.isBigImageLoaded = false;
			
			//print error
			var imageUrl = jQuery(this).attr("src");
			console.log("Can't load image: "+ imageUrl);
			
			//try to load the image again
			g_objGallery.trigger(t.events.ITEM_IMAGE_UPDATED, [itemIndex, objItem.urlImage]);
			objItem.objThumbImage.attr("src", objItem.urlThumb);
			
		});
		
		//check the all items started preloading flag
		checkAllItemsStartedPreloading();
		
	}

	this.onItemBigImageLoaded = function(event, objImage){
				
		if(!objImage)
			var objImage = jQuery(this);
		
		var itemIndex = objImage.data("itemIndex");
		
		var objItem = g_arrItems[itemIndex];
		
		objItem.isBigImageLoaded = true;
		
		var objSize = g_functions.getImageOriginalSize(objImage);
		
		objItem.imageWidth = objSize.width;
		objItem.imageHeight = objSize.height;		
	}
	
	/**
	 * check and fill image size in item object
	 */
	this.checkFillImageSize = function(objImage, objItem){
		
		if(!objItem){
			var itemIndex = objImage.data("itemIndex");
			if(itemIndex === undefined)
				throw new Error("Wrong image given to gallery.checkFillImageSize");
			
			var objItem = g_arrItems[itemIndex];
		}
		
		var objSize = g_functions.getImageOriginalSize(objImage);
		
		objItem.imageWidth = objSize.width;
		objItem.imageHeight = objSize.height;		
	}
	
	
	/**
	 * preload next images near current item
	 */
	function preloadNearBigImages(objItem){
		
		if(g_temp.isAllItemsPreloaded == true)
			return(false);
		
		if(!objItem)
			var objItem = g_selectedItem;
		
		if(!objItem)
			return(true);
			
		var currentIndex = objItem.index;
		var lastItemIndex = currentIndex - 1;
		var nextItemIndex = currentIndex + 1;
		
		if(lastItemIndex > 0)
			preloadItemImage(g_arrItems[lastItemIndex]);
		
		if(nextItemIndex < g_numItems)
			preloadItemImage(g_arrItems[nextItemIndex]);
			
	}
	
	
	/**
	 * check that all items started preloading, if do, set 
	 * flag g_temp.isAllItemsPreloaded to true
	 */
	function checkAllItemsStartedPreloading(){
		
		if(g_temp.isAllItemsPreloaded == true)
			return(false);
		
		//if some of the items not started, exit function:
		for(var index in g_arrItems){
			if(g_arrItems[index].isBigImageLoadStarted == false)
				return(false);
		}
		
		//if all started, set flag to true
		g_temp.isAllItemsPreloaded = true;	
	}
	
	
	/**
	 * set freestyle mode
	 */
	this.setFreestyleMode = function(){
		
		g_temp.isFreestyleMode = true;
	
	}
	
	/**
	 * init the thumbs panel object
	 * type - strip / grid
	 */	
	this.initThumbsPanel = function(type, options){
		
		if(!options)
			var options = {};

		if(!type)
			var type = "strip";
		
		g_temp.thumbsType = type;
		
		switch(type){
			case "strip":
				 g_objThumbs = new UGThumbsStrip();				
			break;
			case "grid":
				 g_objThumbs = new UGThumbsGrid();				
			break;
			default:
				throw new Error("Wrong thumbs type: " + type);
			break;
		}
		
		options = jQuery.extend(options, g_temp.objCustomOptions);
		
		g_objThumbs.init(t, options);
	}

	this.initSlider = function(customOptions, optionsPrefix){
		 
		 //mix options with user options
		 if(!customOptions)
			 var customOptions = {};
		 
		 customOptions = jQuery.extend(customOptions, g_temp.objCustomOptions);
		 
		 g_objSlider = new UGSlider();		 
		 g_objSlider.init(t, customOptions, optionsPrefix);
	}
	
	
	function __________END_INIT_GALLERY_______(){};
	
	function __________EVENTS_____________(){};

	/**
	 * on gallery mousewheel event handler, advance the thumbs
	 */
	function onGalleryMouseWheel(event, delta, deltaX, deltaY){
		
		event.preventDefault();
		
		if(delta > 0)
			t.prevItem();
		else
			t.nextItem();
			
	}
	
	/**
	 * on mouse enter event
	 */
	function onSliderMouseEnter(event){
		
		if(g_options.gallery_pause_on_mouseover == true && g_temp.isPlayMode == true && g_objSlider && g_objSlider.isSlideActionActive() == false)
			t.pausePlaying();
	}
	
	
	/**
	 * on mouse move event
	 */
	function onSliderMouseLeave(event){
		
		if(g_options.gallery_pause_on_mouseover == true && g_temp.isPlayMode == true && g_objSlider && g_objSlider.isSlideActionActive() == false)
			t.continuePlaying();
		
	}
	
	
	/**
	 * on keypress - keyboard control
	 */
	function onKeyPress(event){
						 		 
		 var keyCode = (event.charCode) ? event.charCode :((event.keyCode) ? event.keyCode :((event.which) ? event.which : 0));
		 
		 switch(keyCode){
			 case 39:	//right key
				 t.nextItem();
				 event.preventDefault();
			 break;
			 case 37:	//left key
				 t.prevItem();
				 event.preventDefault();
			 break;
		 }
		 
			g_objGallery.trigger(t.events.GALLERY_KEYPRESS, keyCode);
	}
	
	
	/**
	 * check that the gallery resized, if do, trigger onresize event
	 */
	function onGalleryResized(){
		
		t.setSizeClass();
		
		var objSize = t.getSize();
				
		if(objSize.width != g_temp.lastWidth || objSize.height != g_temp.lastHeight){
			
			if(g_options.gallery_preserve_ratio == true && g_temp.isFreestyleMode == false)
				setHeightByOriginalRatio();
			
			storeLastSize();
			g_objGallery.trigger(t.events.SIZE_CHANGE);
		}
		
	}

	
	/**
	 * on strip move event
	 * preload visible images if that option selected
	 */
	function onThumbsChange(event){
		
		//preload visible images 
		if(g_options.gallery_images_preload_type == "visible" && g_temp.isAllItemsPreloaded == false){
			preloadBigImages();
		}
		
	}
	
	
	/**
	 * on full screen change event
	 */
	function onFullScreenChange(){
		 
		var isFullscreen = g_functions.isFullScreen();
		 var event = isFullscreen ? t.events.ENTER_FULLSCREEN:t.events.EXIT_FULLSCREEN; 
		 
		 //add classes for the gallery
		 if(isFullscreen){
			 g_objWrapper.addClass("ug-fullscreen");
		 }else{
			 g_objWrapper.removeClass("ug-fullscreen");
		 }

		 g_objGallery.trigger(event);
		 
		 onGalleryResized();
	}
	
	/**
	 * on big image updated, if needed - preload this item image
	 */
	function onItemImageUpdated(event, index){
		
		var objItem = t.getItem(index);		
		checkPreloadItemImage(objItem);		
	}
	
	
	/**
	 * init all events
	 */
	function initEvents(){
		
		//avoid annoyong firefox image dragging
		g_objWrapper.on("dragstart",function(event){
			event.preventDefault();
		});
		
		//on big image updated, if needed - preload this item image
		g_objGallery.on(t.events.ITEM_IMAGE_UPDATED, onItemImageUpdated);
		
		//init custom event on strip moving
		if(g_objThumbs){
			switch(g_temp.thumbsType){
				case "strip":
					jQuery(g_objThumbs).on(g_objThumbs.events.STRIP_MOVE, onThumbsChange);
				break;
				case "grid":
					jQuery(g_objThumbs).on(g_objThumbs.events.PANE_CHANGE, onThumbsChange);
				break;
			}
		}
				
		//init mouse wheel
		if(g_options.gallery_control_thumbs_mousewheel == true)
			g_objWrapper.on("mousewheel",onGalleryMouseWheel);
		
		 //on resize event
		 storeLastSize();
		 
		 jQuery(window).resize(function(){
			 g_objWrapper.css("width","auto");
			 g_functions.whenContiniousEventOver("gallery_resize", onGalleryResized, g_temp.resizeDelay);
		 });
		 
		 //fullscreen:
		 g_functions.addFullScreenChangeEvent(onFullScreenChange);
		 
		 //on slider item changed event
		 if(g_objSlider){
			 
			 jQuery(g_objSlider).on(g_objSlider.events.ITEM_CHANGED, function(){
				 var sliderIndex = g_objSlider.getCurrentItemIndex();
				 				 
				 if(sliderIndex != -1)
					 t.selectItem(sliderIndex);
			 });
			 
			 //add slider onmousemove event
			 if(g_options.gallery_pause_on_mouseover == true){
				 var sliderElement = g_objSlider.getElement();
				 sliderElement.hover(onSliderMouseEnter, onSliderMouseLeave);			 
			 }
			 
			 //retrigger slider events
			 retriggerEvent(g_objSlider, g_objSlider.events.ACTION_START, t.events.SLIDER_ACTION_START);
			 retriggerEvent(g_objSlider, g_objSlider.events.ACTION_END, t.events.SLIDER_ACTION_END);
			 
		 }
		 		 
		 //add keyboard events
		 if(g_options.gallery_control_keyboard == true)
			 jQuery(document).keydown(onKeyPress);
		 		 
		 
			 
	}
		
	
	function __________GENERAL_______(){};
	
	/**
	 * get items array
	 */
	this.getArrItems = function(){
		return g_arrItems;
	}
	
	/**
	 * get gallery objects
	 */
	this.getObjects = function(){
			
		var objects = {
			g_galleryID:g_galleryID,
			g_objWrapper:g_objWrapper,
			g_objThumbs:g_objThumbs,
			g_objSlider:g_objSlider,
			g_options:g_options,
			g_arrItems:g_arrItems,
			g_numItems:g_numItems
		};
		
		return(objects);
	}
	
	/**
	 * get slider object
	 */
	this.getObjSlider = function(){
		
		return(g_objSlider);
	}
	
	
	/**
	 * 
	 * get item by index, if the index don't fit, trace error
	 */
	this.getItem = function(index){
		if(index < 0){
			throw new Error("item with index: " + index + " not found");
			return(null);
		}
		if(index >= g_numItems){
			throw new Error("item with index: " + index + " not found");
			return(null);			
		}
		
		return(g_arrItems[index]);
	}
	
	
	/**
	 * get gallery width
	 */
	this.getWidth = function(){
		
		var objSize = t.getSize();
				
		return(objSize.width);
	}
	
	/**
	 * get gallery height
	 */
	this.getHeight = function(){
		
		var objSize = t.getSize();
		
		return(objSize.height);
	}
	
	
	/**
	 * get gallery size
	 */
	this.getSize = function(){
		
		var objSize = g_functions.getElementSize(g_objWrapper);
		
		objSize.orig_width = g_options.gallery_width;
		objSize.orig_height = g_options.gallery_height;
		objSize.orig_ratio = objSize.orig_width / objSize.orig_height;
		
		return(objSize);
	}
	
	/**
	 * get gallery ID
	 */
	this.getGalleryID = function(){
		
		var id = g_galleryID.replace("#","");
			
		return(id);
	}
	
	/**
	 * get next item by current index (or current object)
	 */
	this.getNextItem = function(index, forceCarousel){
		
		if(typeof index == "object")
			index = index.index;
		
		var nextIndex = index + 1;
		
		if(forceCarousel !== true && g_numItems == 1)
			return(null);
		
		if(nextIndex >= g_numItems){
			
			if(g_options.gallery_carousel == true || forceCarousel === true)
				nextIndex = 0;
			else
				return(null);
		}
		
		var objItem = g_arrItems[nextIndex];
		
		return(objItem);			
	}
	
	
	/**
	 * get previous item by index (or item object)
	 */
	this.getPrevItem = function(index){
		
		if(typeof index == "object")
			index = index.index;
		
		var prevIndex = index - 1;
		
		if(prevIndex < 0){
			if(g_options.gallery_carousel == true || forceCarousel === true)
				prevIndex = g_numItems - 1;
			else
				return(null);
		}
		
		var objItem = g_arrItems[prevIndex];
		
		return(objItem);
	}
	
	
	
	/**
	 * get selected item
	 */
	this.getSelectedItem = function(){
		
		return(g_selectedItem);
	}
	
	
	/**
	 * get number of items
	 */
	this.getNumItems = function(){
		return g_numItems;
	}
	
	/**
	 * get true if the current item is last
	 */
	this.isLastItem = function(){
		if(g_selectedItemIndex == g_numItems - 1)
			return(true);
		
		return(false);
	}
	
	
	/**
	 * get true if the current item is first
	 */
	this.isFirstItem = function(){
		if(g_selectedItemIndex == 0)
			return(true);
		return(false);
	}
	
	
	/**
	 * get gallery options
	 */
	this.getOptions = function(){
		return g_options;
	}
	
	
	/**
	 * get the gallery wrapper element
	 */
	this.getElement = function(){
		return(g_objWrapper);
	}
	
	
	this.___________SET_CONTROLS___________ = function(){}
	
	/**
	 * set next button element
	 * set onclick event
	 */
	this.setNextButton = function(objButton){
		
		//register button as a unite gallery belong
		objButton.data("ug-button", true);
		
		g_functions.setButtonOnClick(objButton, t.nextItem);
		
	}
	
	
	/**
	 * set prev button element
	 * set onclick event
	 */
	this.setPrevButton = function(objButton){
		
		//register button as a unite gallery belong
		objButton.data("ug-button", true);
		
		g_functions.setButtonOnClick(objButton, t.prevItem);
				
	}

	this.setFullScreenToggleButton = function(objButton){
		
		//register button as a unite gallery belong
		objButton.data("ug-button", true);

		g_functions.setButtonOnClick(objButton, t.toggleFullscreen);
		
		g_objGallery.on(t.events.ENTER_FULLSCREEN,function(){
			objButton.addClass("ug-fullscreenmode");
		});
		
		g_objGallery.on(t.events.EXIT_FULLSCREEN,function(){
			objButton.removeClass("ug-fullscreenmode");
		});
				
	}
	
	
	/**
	 * destroy full screen button
	 */
	this.destroyFullscreenButton = function(objButton){
		
		g_functions.destroyButton(objButton);
		
		g_objGallery.off(t.events.ENTER_FULLSCREEN);
		g_objGallery.off(t.events.EXIT_FULLSCREEN);
	}
	
	
	/**
	 * set play button event
	 */
	this.setPlayButton = function(objButton){
		
		//register button as a unite gallery belong
		objButton.data("ug-button", true);
		
		g_functions.setButtonOnClick(objButton, t.togglePlayMode);
		
		g_objGallery.on(t.events.START_PLAY,function(){
			objButton.addClass("ug-stop-mode");			
		});
		
		g_objGallery.on(t.events.STOP_PLAY, function(){
			objButton.removeClass("ug-stop-mode");
		});
		
	}
	
	/**
	 * destroy the play button
	 */
	this.destroyPlayButton = function(objButton){
		g_functions.destroyButton(objButton);
		g_objGallery.off(t.events.START_PLAY);
		g_objGallery.off(t.events.STOP_PLAY);
	}
	
	/**
	 * set playing progress indicator
	 */
	this.setProgressIndicator = function(objProgress){
		
		g_temp.objProgress = objProgress;		
	}
	
	
	/**
	 * set title and descreiption containers
	 */
	this.setTextContainers = function(objTitle, objDescription){
		
		g_objGallery.on(t.events.ITEM_CHANGE, function(){
			
			var objItem = t.getSelectedItem();			
			objTitle.html(objItem.title);
			objDescription.html(objItem.description);
			
		});
		
	}
	
	
	this.___________END_SET_CONTROLS___________ = function(){}
	
	
	/**
	 * remove all size classes
	 */
	function removeAllSizeClasses(objWrapper){
		
		if(!objWrapper)
			objWrapper = g_objWrapper;
		
		objWrapper.removeClass("ug-under-480");
		objWrapper.removeClass("ug-under-780");
		objWrapper.removeClass("ug-under-960");
	}

	function retriggerEvent(object, originalEvent, newEvent){
		
		jQuery(object).on(originalEvent, function(event){
			g_objGallery.trigger(newEvent, [this]);
		});
	
	}
	
	
	/**
	 * advance next play step
	 */
	function advanceNextStep(){
				
		var timeNow = jQuery.now();
		var timeDiff = timeNow - g_temp.playTimeLastStep;
		g_temp.playTimePassed += timeDiff;
		g_temp.playTimeLastStep = timeNow;
		
		//set the progress
		if(g_temp.objProgress){
			var percent = g_temp.playTimePassed / g_options.gallery_play_interval;
			g_temp.objProgress.setProgress(percent);
		}
		
		//if interval passed - proceed to next item
		if(g_temp.playTimePassed >= g_options.gallery_play_interval){
			
			t.nextItem();
			g_temp.playTimePassed = 0;			
		}
		
		
	}
	
	this.___________PLAY_MODE___________ = function(){}
	
	/**
	 * start play mode
	 */
	this.startPlayMode = function(){
		g_temp.isPlayMode = true;
		g_temp.isPlayModePaused = false;
		
		g_temp.playTimePassed = 0;
		g_temp.playTimeLastStep = jQuery.now();
		
		g_temp.playHandle = setInterval(advanceNextStep, g_temp.playStepInterval);
		
		//show and reset progress indicator
		if(g_temp.objProgress){
			var objElement = g_temp.objProgress.getElement();
			g_temp.objProgress.setProgress(0);
			objElement.show();
		}
		
		g_objGallery.trigger(t.events.START_PLAY);
	}
	
	
	/**
	 * reset playing - set the timer to 0
	 */
	this.resetPlaying = function(){
		
		if(g_temp.isPlayMode == false)
			return(true);
		
		g_temp.playTimePassed = 0;
		g_temp.playTimeLastStep = jQuery.now();
	}
	
	
	/**
	 * pause playing slideshow
	 */
	this.pausePlaying = function(){
		
		if(g_temp.isPlayModePaused == true)
			return(true);
		
		g_temp.isPlayModePaused = true;
		clearInterval(g_temp.playHandle);
		
		g_objGallery.trigger(t.events.PAUSE_PLAYING);
	}
	
	
	/**
	 * continue playing slideshow
	 */
	this.continuePlaying = function(){
		
		if(g_temp.isPlayModePaused == false)
			return(true);
		
		g_temp.isPlayModePaused = false;
		g_temp.playTimeLastStep = jQuery.now();
		g_temp.playHandle = setInterval(advanceNextStep, g_temp.playStepInterval);
		
	}
	
	
	/**
	 * stop play mode
	 */
	this.stopPlayMode = function(){
		g_temp.isPlayMode = false;
		clearInterval(g_temp.playHandle);
			
		g_temp.playTimePassed = 0;
		
		//hide progress indicator
		if(g_temp.objProgress){
			var objElement = g_temp.objProgress.getElement();
			objElement.hide();
		}
		
		g_objGallery.trigger(t.events.STOP_PLAY);
	}

	this.isPlayMode = function(){
		
		return(g_temp.isPlayMode);
	}
	
	
	/**
	 * start / stop play mode
	 */
	this.togglePlayMode = function(){
		
		if(t.isPlayMode() == false)
			t.startPlayMode();
		else
			t.stopPlayMode();
	}
	
	this.___________END_PLAY_MODE___________ = function(){}
	
	
	/**
	 * unselect all items
	 */
	function unselectSeletedItem(){
		
		if(g_selectedItem == null)
			return(true);
		
		if(g_objThumbs)
			g_objThumbs.setThumbUnselected(g_selectedItem.objThumbWrapper);
		
		g_selectedItem = null;
		g_selectedItemIndex = -1;
	}	

	
	/**
	 * set main gallery params, extend current params
	 */
	this.setOptions = function(customOptions){
		
		g_options = jQuery.extend(g_options, customOptions);		
	}
	
	
	/**
	 * select some item
	 * the input can be index or object
	 */
	this.selectItem = function(objItem){
		
		if(typeof objItem == "number")
			objItem = t.getItem(objItem);
		
		var itemIndex = objItem.index;
		if(itemIndex == g_selectedItemIndex)
			return(true);
				
		unselectSeletedItem();
				
		//set selected item
		g_selectedItem = objItem;		
		g_selectedItemIndex = itemIndex;
		
		//reset playback, if playing
		if(g_temp.isPlayMode == true)
			t.resetPlaying();
		
		g_objGallery.trigger(t.events.ITEM_CHANGE, objItem);
				
	}
	
	
	/**
	 * go to next item
	 */
	this.nextItem = function(){
		
		var newItemIndex = g_selectedItemIndex + 1;
		
		if(g_numItems == 0)
			return(true);		
		
		if(g_options.gallery_carousel == false && newItemIndex >= g_numItems)
			return(true);
		
		if(newItemIndex >= g_numItems)
			newItemIndex = 0;
		
		//debugLine(newItemIndex,true);
		
		t.selectItem(newItemIndex);
	}
	
	
	/**
	 * go to previous item
	 */
	this.prevItem = function(){
		
		var newItemIndex = g_selectedItemIndex - 1;
		
		if(g_selectedItemIndex == -1)
			newItemIndex = 0;
		
		if(g_numItems == 0)
			return(true);
		
		if(g_options.gallery_carousel == false && newItemIndex < 0)
			return(true);
		
		if(newItemIndex < 0)
			newItemIndex = g_numItems - 1;
		
		t.selectItem(newItemIndex);
		
	}
	
	
	/**
	 * expand gallery to body size
	 */
	function toFakeFullScreen(){
		
		jQuery("body").addClass("ug-body-fullscreen");
		g_objWrapper.addClass("ug-fake-fullscreen");
		
		g_temp.isFakeFullscreen = true;
		
		g_objGallery.trigger(t.events.ENTER_FULLSCREEN);
		g_objGallery.trigger(t.events.SIZE_CHANGE);
	}
	
	
	/**
	 * exit fake fullscreen
	 */
	function exitFakeFullscreen(){
		
		jQuery("body").removeClass("ug-body-fullscreen");
		g_objWrapper.removeClass("ug-fake-fullscreen");
		
		g_temp.isFakeFullscreen = false;
		
		g_objGallery.trigger(t.events.EXIT_FULLSCREEN);
		g_objGallery.trigger(t.events.SIZE_CHANGE);
		
	}
	
	/**
	 * return if the fullscreen mode is available
	 */
	this.isFullScreen = function(){
		
		if(g_temp.isFakeFullscreen == true)
			return(true);
		
		if(g_functions.isFullScreen() == true)
			return(true);
		
		return(false);		
	}
	
	
	/**
	 * tells if it's fake fullscreen
	 */
	this.isFakeFullscreen = function(){
		
		return(g_temp.isFakeFullscreen);
	}
	
	
	/**
	 * go to fullscreen mode
	 */
	this.toFullScreen = function(){
				
		var divGallery = g_objWrapper.get(0);
		
		var isSupported = g_functions.toFullscreen(divGallery);
		
		//trace(isSupported);
		if(isSupported == false)
			toFakeFullScreen();
		
	}
	
	
	/**
	 * exit full screen
	 */
	this.exitFullScreen = function(){
		
		if(g_temp.isFakeFullscreen == true)
			exitFakeFullscreen();
		else
			g_functions.exitFullscreen();
						
	}
	
	/**
	 * toggle fullscreen
	 */
	this.toggleFullscreen = function(){
		
		if(t.isFullScreen() == false){
			t.toFullScreen();
		}else{
			t.exitFullScreen();
		}
		
	}

	this.resize = function(newWidth, newHeight, noevent){
		
		g_objWrapper.css("width", "auto");
		g_objWrapper.css("max-width",newWidth+"px");
		
		if(newHeight)
			g_objWrapper.height(newHeight);
		
		if(!noevent && noevent !== true)
			onGalleryResized();
		
	}

	this.setSizeClass = function(objWrapper, width){
		
		if(!objWrapper)
			var objWrapper = g_objWrapper;
		
		if(!width){
			var objSize = t.getSize();
			var width = objSize.width;			
		}
				
		var addClass = "";
		
		if(width <= 480){
			addClass = "ug-under-480";			
		}else
		if(width <= 780){
			addClass = "ug-under-780";			
		}else
		if(width < 960){
			addClass = "ug-under-960";
		}
		
		removeAllSizeClasses(objWrapper);
		if(addClass != "")
			objWrapper.addClass(addClass);
	}
	
	
	/**
	 * return if the size is suited for mobile
	 */
	this.isMobileMode = function(){
		
		if(g_objWrapper.hasClass("ug-under-480"))
			return(true);
		
		return(false);
	}
	
	
	function __________END_GENERAL_______(){};
		
	
	/**
	 * run the gallery
	 */
	 this.run = function(galleryID, objParams){
		 
		 var debug_errors = g_options.gallery_debug_errors;
		 if(objParams && objParams.hasOwnProperty("gallery_debug_errors"))
			 g_options.gallery_debug_errors = objParams.gallery_debug_errors;

		 
		 if(g_options.gallery_debug_errors == true){
			 
			 try{
				 
				 runGallery(galleryID, objParams);
				 
				 
			 }catch(objError){
				 if(typeof objError == "object"){
					 
					 var message = objError;
					 var lineNumber = objError.lineNumber;
					 var fileName = objError.fileName;
					 var stack = objError.stack;
					 
					 message += " <br><br> in file: "+fileName;
					 message += " <b> line " + lineNumber + "</b>";
					 
					 trace(objError);
					 
				 }else{
					 var message = objError;
				 }
				 
				 //remove double "error:" text
				 message = message.replace("Error:","");
				 
				 showErrorMessage(message);
			 }
			 
		 }else{
			 runGallery(galleryID, objParams);
		 }
		 
		 		 
		 
	 }
	 	 	 
}	//unitegallery object end

/**
 * tiles class
 */
function UGLightbox(){

	var t = this, g_objThis = jQuery(this);
	var g_gallery = new UniteGalleryMain(), g_objGallery, g_objWrapper;
	var g_objSlider = new UGSlider(), g_objOverlay, g_objArrowLeft, g_objArrowRight, g_objButtonClose;
	var g_functions = new UGFunctions(), g_objTextPanel = new UGTextPanel(), g_objNumbers;
	var g_objTopPanel;
	
	var g_options = {
			lightbox_type: "wide",			
			lightbox_show_textpanel: true,	
			lightbox_textpanel_width: 550,			
			lightbox_hide_arrows_onvideoplay: true,	
			lightbox_arrows_position: "sides",			
			lightbox_arrows_offset: 10,		
			lightbox_arrows_inside_offset: 10,			
			lightbox_arrows_inside_alwayson: false,		
			lightbox_overlay_color:null,			
			lightbox_overlay_opacity:1,			
			lightbox_top_panel_opacity: null,		
			lightbox_show_numbers: true,		
			lightbox_numbers_size: null,		
			lightbox_numbers_color: null,		
			lightbox_numbers_padding_top:null,		
			lightbox_numbers_padding_right:null,			
			lightbox_compact_closebutton_offsetx: 1,		
			lightbox_compact_closebutton_offsety: 1		
			
	};
	
	this.events = {
	};
	
	var g_temp = {
			topPanelHeight: 44,
			initTextPanelHeight: 26,		
			isOpened: false, 
			putSlider: true,
			isCompact: false,
			fadeDuration: 300,
			positionFrom: null,
			textPanelTop: null,
			textPanelLeft: null,
			isArrowsInside: false,
			isArrowsOnHoverMode: false,
			lastMouseX: null,
			lastMouseY: null
	};
	
	var g_defaults = {
			lightbox_slider_controls_always_on: true,
			lightbox_slider_enable_bullets: false,
			lightbox_slider_enable_arrows: false,
			lightbox_slider_enable_progress_indicator: false,
			lightbox_slider_enable_play_button: false,
			lightbox_slider_enable_fullscreen_button: false,
			lightbox_slider_enable_zoom_panel: false,
			lightbox_slider_enable_text_panel: false,
			lightbox_slider_scale_mode_media: "down",
			lightbox_slider_scale_mode: "down",
			lightbox_slider_loader_type: 3,
			lightbox_slider_loader_color: "black",
			
			lightbox_slider_image_padding_top: g_temp.topPanelHeight,
			lightbox_slider_image_padding_bottom: 10,
			
			lightbox_slider_video_padding_top: g_temp.topPanelHeight,
			lightbox_slider_video_padding_bottom: 0,
			
			lightbox_textpanel_align: "middle",
			lightbox_textpanel_padding_top: 5,
			lightbox_textpanel_padding_bottom: 5,
			
			lightbox_textpanel_enable_title: true,
			lightbox_textpanel_enable_description: false,
			
			lightbox_textpanel_enable_bg:false,
			
			video_enable_closebutton: false,
			slider_video_enable_closebutton: false,
			video_youtube_showinfo: false
	};
	
	var g_defaultsCompact = {
			lightbox_slider_image_border: true,
			lightbox_slider_image_shadow:true,
			lightbox_overlay_opacity:0.6,
			
			lightbox_slider_image_padding_top: 30,
			lightbox_slider_image_padding_bottom: 30,
			lightbox_slider_video_padding_top: 0,
			lightbox_slider_video_padding_bottom: 0,
			
			lightbox_textpanel_align: "bottom",
			lightbox_textpanel_title_text_align: "left",
			lightbox_textpanel_desc_text_align: "left",
			lightbox_textpanel_padding_left: 10,			//the padding left of the textpanel
			lightbox_textpanel_padding_right: 10
	};
	
	
	function __________GENERAL_________(){};
	
	
	/**
	 * init the gallery
	 */
	function initLightbox(gallery, customOptions){
		
		g_gallery = gallery;
		g_objGallery = jQuery(gallery);
		
		g_options = jQuery.extend(g_options, g_defaults);
		g_options = jQuery.extend(g_options, customOptions);
		
		if(g_options.lightbox_type == "compact"){
			g_temp.isCompact = true;
			g_options = jQuery.extend(g_options, g_defaultsCompact);
			g_options = jQuery.extend(g_options, customOptions);
		}
		
		//modify some options
		modifyOptions();
		
		if(g_temp.putSlider == true){
			
			g_gallery.initSlider(g_options, "lightbox");
			g_objects = gallery.getObjects();
			g_objSlider = g_objects.g_objSlider;			
		
		}else{
			g_objSlider = null;
		}
		
			
		if(g_options.lightbox_show_textpanel == true){
			g_objTextPanel.init(g_gallery, g_options, "lightbox");
		}
		else
			g_objTextPanel = null;
		
	}
	
	
	/**
	 * modify some options according user options
	 */
	function modifyOptions(){
		
		if(g_temp.isCompact == true && g_options.lightbox_show_textpanel == true){
			g_options.lightbox_slider_image_padding_bottom = g_temp.initTextPanelHeight;
		}
		
		if(g_temp.isCompact == true && g_options.lightbox_arrows_position == "inside"){
			g_temp.isArrowsInside = true;
		}

		if(g_temp.isArrowsInside == true && g_options.lightbox_arrows_inside_alwayson == false)
			g_temp.isArrowsOnHoverMode = true;
		
		
	}
	
	
	/**
	 * put the lightbox html
	 */
	function putLightboxHtml(){
		
		var html = "";
		var classAddition = "";
		if(g_temp.isCompact == true){
			classAddition = " ug-lightbox-compact";
		}
		
		html += "<div class='ug-gallery-wrapper ug-lightbox"+classAddition+"'>";
		html += "<div class='ug-lightbox-overlay'></div>";
		
		//set top panel only on wide mode
		if(g_temp.isCompact == false)
			html += "<div class='ug-lightbox-top-panel'>";
				
		html += 	"<div class='ug-lightbox-button-close'></div>";
		
		if(g_options.lightbox_show_numbers)
			html += 	"<div class='ug-lightbox-numbers'></div>";
		
		if(g_temp.isCompact == false)
			html += "</div>";	//top panel
		
		html += "<div class='ug-lightbox-arrow-left'></div>";		
		html += "<div class='ug-lightbox-arrow-right'></div>";
		
		html += "</div>";
		
		g_objWrapper = jQuery(html);
		
		jQuery("body").append(g_objWrapper);
		
		if(g_objSlider)
			g_objSlider.setHtml(g_objWrapper);
		
		g_objOverlay = g_objWrapper.children(".ug-lightbox-overlay");
		
		if(g_temp.isCompact == false)
			g_objTopPanel = g_objWrapper.children(".ug-lightbox-top-panel");
		
		g_objButtonClose = g_objWrapper.find(".ug-lightbox-button-close");
		
		if(g_options.lightbox_show_numbers)
			g_objNumbers = g_objWrapper.find(".ug-lightbox-numbers");
		
		g_objArrowLeft = g_objWrapper.children(".ug-lightbox-arrow-left");
		g_objArrowRight = g_objWrapper.children(".ug-lightbox-arrow-right");
		
		if(g_objTextPanel){
			if(g_objTopPanel)
				g_objTextPanel.appendHTML(g_objTopPanel);
			else
				g_objTextPanel.appendHTML(g_objWrapper);
		}

	}
	
	
	/**
	 * set lightbox properties
	 */
	function setProperties(){
		
		if(g_options.lightbox_overlay_color !== null)
			g_objOverlay.css("background-color", g_options.lightbox_overlay_color);
		
		if(g_options.lightbox_overlay_opacity !== null)
			g_objOverlay.fadeTo(0, g_options.lightbox_overlay_opacity);
		
		if(g_objTopPanel && g_options.lightbox_top_panel_opacity !== null)
			g_objTopPanel.css("background-color","rgb(0,0,0,"+g_options.lightbox_top_panel_opacity+")");
		
		//set numbers properties
		if(g_objNumbers){
			var cssNumbers = {};
			
			if(g_options.lightbox_numbers_size !== null)
				cssNumbers["font-size"] = g_options.lightbox_numbers_size+"px";
			
			if(g_options.lightbox_numbers_color)
				cssNumbers["color"] = g_options.lightbox_numbers_color;
			
			if(g_options.lightbox_numbers_padding_right !== null)
				cssNumbers["padding-right"] = g_options.lightbox_numbers_padding_right + "px";
			
			if(g_options.lightbox_numbers_padding_top !== null)
				cssNumbers["padding-top"] = g_options.lightbox_numbers_padding_top + "px";
			
			
			g_objNumbers.css(cssNumbers);
		}
		
	}
	
	
	/**
	 * refresh slider item with new height
	 */
	function refreshSliderItem(newHeight){
		
		if(!g_objSlider)
			return(true);
		
		//set slider new image position
		var objOptions = {
				slider_image_padding_top: newHeight,
				slider_video_padding_top: newHeight
		};
		
		g_objSlider.setOptions(objOptions);
		g_objSlider.refreshSlideItems();
	
	}
	
	
	/**
	 * handle panel height according text height
	 */
	function handlePanelHeight(){
		
		if(!g_objTopPanel)
			return(false);
			
		if(!g_objTextPanel)
			return(false);
		
		//check text panel size, get the panel bigger then
		var panelHeight = g_objTopPanel.height();
		if(panelHeight == 0)
			return(false);
		
		var newPanelHeight = panelHeight;
		
		var textPanelHeight = g_objTextPanel.getSize().height;
		
		if(panelHeight != g_temp.topPanelHeight)
			newPanelHeight = g_temp.topPanelHeight;
		
		if(textPanelHeight > newPanelHeight)
			newPanelHeight = textPanelHeight;
		
		if(panelHeight != newPanelHeight){
			g_objTopPanel.height(newPanelHeight);
						
			if(g_objSlider && g_objSlider.isAnimating() == false)
				refreshSliderItem(newPanelHeight);
			
		}
				
	}
	function handleCompactHeight(objImageSize){
		
		if(g_temp.isOpened == false)
			return(false);
		
		if(!g_objTextPanel)
			return(false);
		
		if(!g_objSlider)
			return(false);
		
		var wrapperSize = g_functions.getElementSize(g_objWrapper);
		var textPanelSize = g_objTextPanel.getSize();
		
		if(textPanelSize.width == 0 || textPanelSize.height > 120)
			return(false);
		
		if(!objImageSize){
			var objImage = g_objSlider.getSlideImage();
			var objImageSize = g_functions.getElementSize(objImage);
		}
		
		if(objImageSize.height == 0 || objImageSize.width == 0)
			return(false);
		
		//check elements end size
		var totalBottom = objImageSize.bottom + textPanelSize.height;
		
		if(totalBottom < wrapperSize.height)
			return(false);
		
		var sliderOptions = g_objSlider.getOptions();
		
		var imagePaddingBottom = textPanelSize.height;
		
		if(imagePaddingBottom != sliderOptions.slider_image_padding_bottom){
			
			var objOptions = {
					slider_image_padding_bottom: imagePaddingBottom
			};
			
			if(g_objSlider.isAnimating() == false){
				g_objSlider.setOptions(objOptions);
				g_objSlider.refreshSlideItems();
				return(true);
			}
			
		}
		
		return(false);
	}
	
	/**
	 * set text panel top of compact mode
	 */
	function setCompactTextpanelTop(objImageSize, positionPanel){
		
		if(!objImageSize){
			var objImage = g_objSlider.getSlideImage();
			var objImageSize = g_functions.getElementSize(objImage);
		}
		
		g_temp.textPanelTop = objImageSize.bottom;
		
		if(positionPanel === true)
			g_objTextPanel.positionPanel(g_temp.textPanelTop, g_temp.textPanelLeft);
	}

	function handleCompactTextpanelSizes(showTextpanel){
		
		var isActionActive = g_objSlider.isSlideActionActive();
		if(isActionActive)
			return(false);
		
		var wrapperSize = g_functions.getElementSize(g_objWrapper);
		var objImage = g_objSlider.getSlideImage();
		var objImageSize = g_functions.getElementSize(objImage);
		
		if(objImageSize.width == 0)
			return(false);
		
		g_temp.textPanelLeft = objImageSize.left;
		g_temp.textPanelTop = objImageSize.bottom;
		
		var textPanelWidth = objImageSize.width;
		
		if(g_objNumbers){
			
			var objNumbersSize = g_functions.getElementSize(g_objNumbers);
			textPanelWidth -= objNumbersSize.width;
			
			//place numbers object
			var numbersLeft = objImageSize.right - objNumbersSize.width;
			g_functions.placeElement(g_objNumbers, numbersLeft, g_temp.textPanelTop);
		}
			
		if(g_objTextPanel){
			g_objTextPanel.refresh(true, true, textPanelWidth);
			setCompactTextpanelTop(objImageSize);
		}
		
		var isChanged = handleCompactHeight(objImageSize);
		
		if(isChanged == false){
			
			g_temp.positionFrom = "handleCompactTextpanelSizes";
			
			if(g_objTextPanel){
				g_objTextPanel.positionPanel(g_temp.textPanelTop, g_temp.textPanelLeft);
				if(showTextpanel === true){
					showTextpanel();
					showNumbers();
				}
			}
			
		}
		
	}
	
	/**
	 * return that current slider image is in place
	 */
	function isSliderImageInPlace(){
		
		var isImageInPlace = (g_objSlider.isCurrentImageInPlace() == true);
		if(g_objSlider.isCurrentSlideType("image") == false && g_objSlider.isSlideActionActive() == true)
			isImageInPlace = false;
		
		return(isImageInPlace);
	}
	
	
	/**
	 * position the arrows inside mode
	 */
	function positionArrowsInside(toShow, isAnimation){
		
		if(g_temp.isArrowsInside == false)
			return(false);
		
		if(!g_objArrowLeft)
			return(false);
		
		var isImageInPlace = isSliderImageInPlace();
		
		g_objArrowLeft.show();
		g_objArrowRight.show();
		
		g_temp.positionFrom = "positionArrowsInside";
		
		if(g_temp.isArrowsOnHoverMode == true && isImageInPlace == true && isMouseInsideImage() == false)
			hideArrows(true);
		
		if(isImageInPlace == false){
			var leftArrowLeft = g_functions.getElementRelativePos(g_objArrowLeft, "left", g_options.lightbox_arrows_offset);
			var leftArrowTop = g_functions.getElementRelativePos(g_objArrowLeft, "middle");
						
			var rightArrowLeft = g_functions.getElementRelativePos(g_objArrowRight, "right", g_options.lightbox_arrows_offset);
			var rightArrowTop = leftArrowTop;

		}else{
			
			var objImage = g_objSlider.getSlideImage();
			var objImageSize = g_functions.getElementSize(objImage);
			var objSliderSize = g_functions.getElementSize(g_objSlider.getElement());
						
			var leftArrowLeft = g_functions.getElementRelativePos(g_objArrowLeft, "left", 0, objImage) + objImageSize.left + g_options.lightbox_arrows_inside_offset;
			var leftArrowTop = g_functions.getElementRelativePos(g_objArrowLeft, "middle", 0, objImage) + objImageSize.top;
			var rightArrowLeft = g_functions.getElementRelativePos(g_objArrowLeft, "right", 0, objImage) + objImageSize.left - g_options.lightbox_arrows_inside_offset;
			var rightArrowTop = leftArrowTop;
						
		}
		
		
		//place the image with animation or not
		if(isAnimation === true){

			var objCssLeft = {
					left: leftArrowLeft,
					top: leftArrowTop
			};
			
			var objCssRight = {
					left: rightArrowLeft,
					top: rightArrowTop
			};
			
			g_objArrowLeft.stop().animate(objCssLeft,{
				duration: g_temp.fadeDuration,
			});
			
			g_objArrowRight.stop().animate(objCssRight,{
				duration: g_temp.fadeDuration,
			});
			
			
		}else{
			g_objArrowLeft.stop();
			g_objArrowRight.stop();
			
			g_functions.placeElement(g_objArrowLeft, leftArrowLeft, leftArrowTop);
			g_functions.placeElement(g_objArrowRight, rightArrowLeft, rightArrowTop);
		}
		
		if(toShow == true)
			showArrows(isAnimation);
		
	}
	
	
	
	/**
	 * position close button for compact type
	 */
	function positionCloseButton(toShow, isAnimation){
		
		g_temp.positionFrom = null;
		
		var isImageInPlace = isSliderImageInPlace();
		
		if(isImageInPlace == false){	//put image to corner
			
			var closeButtonTop = 2;
			var closeButtonLeft = g_functions.getElementRelativePos(g_objButtonClose, "right", 2, g_objWrapper);
			
		}else{
			var objImage = g_objSlider.getSlideImage();
			var objImageSize = g_functions.getElementSize(objImage);
			var objSliderSize = g_functions.getElementSize(g_objSlider.getElement());
			var objButtonSize = g_functions.getElementSize(g_objButtonClose);
			
			//some strange bug
			if(objSliderSize.top == objSliderSize.height)	
				objSliderSize.top = 0;
			
			var closeButtonLeft = objSliderSize.left + objImageSize.right - objButtonSize.width / 2 + g_options.lightbox_compact_closebutton_offsetx;
			var closeButtonTop = objSliderSize.top + objImageSize.top - objButtonSize.height / 2 - g_options.lightbox_compact_closebutton_offsety;
		}
		
		//place the image with animation or not
		if(isAnimation === true){
			var objCss = {
					left: closeButtonLeft,
					top: closeButtonTop
			};
			
			g_objButtonClose.stop().animate(objCss,{
				duration: g_temp.fadeDuration,
			});
			
		}else{
			g_objButtonClose.stop();
			g_functions.placeElement(g_objButtonClose, closeButtonLeft, closeButtonTop);
		}
		
		if(toShow === true)
			showCloseButton(isAnimation);
		
	}

	function positionTextPanelWide(size){

		var objOptions = {};
		
		var textWidth = g_options.lightbox_textpanel_width;
		var minPaddingLeft = 47;
		var minPaddingRight = 40;
		var maxTextPanelWidth = size.width - minPaddingLeft - minPaddingRight;
		
		if(textWidth > maxTextPanelWidth){		//mobile mode
			
			objOptions.textpanel_padding_left = minPaddingLeft;
			objOptions.textpanel_padding_right = minPaddingRight;
			
			objOptions.textpanel_title_text_align = "center";
			objOptions.textpanel_desc_text_align = "center";			
		}else{
			objOptions.textpanel_padding_left = Math.floor((size.width - textWidth) / 2);
			objOptions.textpanel_padding_right = objOptions.textpanel_padding_left;
			objOptions.textpanel_title_text_align = "left";
			objOptions.textpanel_desc_text_align = "left";
			
			if(g_options.lightbox_textpanel_title_text_align)
					objOptions.textpanel_title_text_align = g_options.lightbox_textpanel_desc_text_align;
			
			if(g_options.lightbox_textpanel_desc_text_align)
				objOptions.textpanel_desc_text_align = g_options.lightbox_textpanel_desc_text_align;
			
		}
				
		g_objTextPanel.setOptions(objOptions);
		
		g_objTextPanel.refresh(true, true);
		
		handlePanelHeight();
		g_objTextPanel.positionPanel();
	}
	
	
	
	
	/**
	 * position the elements
	 */
	function positionElements(){
						
		var size = g_functions.getElementSize(g_objWrapper);
		
		//position top panel:
		if(g_objTopPanel)
			g_functions.setElementSizeAndPosition(g_objTopPanel, 0, 0, size.width, g_temp.topPanelHeight);
		
		//position arrows
		if(g_objArrowLeft && g_temp.isArrowsInside == false){
			
			if(g_options.lightbox_hide_arrows_onvideoplay == true){
				g_objArrowLeft.show();
				g_objArrowRight.show();
			}
			
			g_functions.placeElement(g_objArrowLeft, "left", "middle", g_options.lightbox_arrows_offset);
			g_functions.placeElement(g_objArrowRight, "right", "middle", g_options.lightbox_arrows_offset);
		}		
		
		if(g_temp.isCompact == false)
			g_functions.placeElement(g_objButtonClose, "right", "top", 2, 2);
		
		//place text panel
		if(g_objTextPanel){
			
			g_temp.positionFrom = "positionElements";
			
			if(g_temp.isCompact == false)
				positionTextPanelWide(size);
			else{
				showTextPanel();
				showNumbers();
			}
			
		}
		
		var sliderWidth = size.width;
		var sliderHeight = size.height;	
		var sliderTop = 0;
		var sliderLeft = 0;
		
		if(g_objSlider){
			
			if(g_objTopPanel){
				var topPanelHeight = g_objTopPanel.height();
				var objOptions = {
						slider_image_padding_top: topPanelHeight,
						slider_video_padding_top: topPanelHeight
				};
				g_objSlider.setOptions(objOptions);
			}
			
			g_objSlider.setSize(sliderWidth, sliderHeight);
			g_objSlider.setPosition(sliderLeft, sliderTop);
		}
		
	}
	
	
	/**
	 * hide the text panel
	 */
	function hideTextPanel(){
		
		if(g_objTextPanel)
			g_objTextPanel.getElement().stop().fadeTo(g_temp.fadeDuration, 0);
		
	}
	
	
	/**
	 * hide the numbers text
	 */
	function hideNumbers(){
		
		if(g_objNumbers)
			g_objNumbers.stop().fadeTo(g_temp.fadeDuration, 0);
	}
	
	
	/**
	 * is mouse inside image
	 */
	function isMouseInsideImage(){
		if(!g_temp.lastMouseX)
			return(true);
		var obj = {
				pageX: g_temp.lastMouseX, 
				pageY: g_temp.lastMouseY
			};
	
		var isMouseInside = g_objSlider.isMouseInsideSlideImage(obj);
		
		return(isMouseInside);
	}
	
	
	/**
	 * hide the arrows
	 */
	function hideArrows(noAnimation, isForce){
		
		if(!g_objArrowLeft)
			return(false);
				
		//don't hide the arrows if mouse inside image
		if(g_temp.isArrowsOnHoverMode == true && isForce === false){
			if(isMouseInsideImage() == true);
				return(true);
		}
		
		if(noAnimation === true){
			g_objArrowLeft.stop().fadeTo(0, 0);
			g_objArrowRight.stop().fadeTo(0, 0);
		}else{
			g_objArrowLeft.stop().fadeTo(g_temp.fadeDuration, 0);
			g_objArrowRight.stop().fadeTo(g_temp.fadeDuration, 0);
		}
				
	}
	
	/**
	 * get if the arrows are hidden
	 */
	function isArrowsHidden(){
		
		if(!g_objArrowLeft)
			return(true);
		if(g_objArrowLeft.is(":visible") == false)
			return(true);
		
		var opacity = g_objArrowLeft.css("opacity");
		if(opacity != 1)
			return(true);
		
		return(false);
	}
	
	/**
	 * show the arrows
	 */
	function showArrows(noStop, fromHover){
		
		if(!g_objArrowLeft)
			return(false);
		
		//don't show every time on arrowsonhover mode
		if(g_temp.isArrowsOnHoverMode == true && fromHover !== true && isSliderImageInPlace() == true)
			return(true);
		
		//don't show if swiping
		if(g_objSlider.isSwiping() == true)
			return(true);
			
		if(noStop !== true){
			g_objArrowLeft.stop();
			g_objArrowRight.stop();
		}
		
		g_objArrowLeft.fadeTo(g_temp.fadeDuration, 1);
		g_objArrowRight.fadeTo(g_temp.fadeDuration, 1);
		
	}

	
	
	/**
	 * hide close button
	 */
	function hideCompactElements(){
		
		if(g_objButtonClose)
			g_objButtonClose.stop().fadeTo(g_temp.fadeDuration, 0);
		
		hideTextPanel();
		
		hideNumbers();
		
		g_temp.positionFrom = "hideCompactElements";
		if(g_temp.isArrowsInside == true)
			hideArrows();
	}
	
	
	/**
	 * show close button
	 */
	function showCloseButton(noStop){
		
		if(noStop !== true)
			g_objButtonClose.stop();
		
		g_objButtonClose.fadeTo(g_temp.fadeDuration, 1);
	}
	
	
	/**
	 * update text panel text of the curren item
	 */
	function updateTextPanelText(currentItem){
		
		if(!g_objTextPanel)
			return(false);
		
		if(!currentItem)
			var currentItem = g_objSlider.getCurrentItem();
		
		g_objTextPanel.setTextPlain(currentItem.title, currentItem.description);
	}

	
	/**
	 * update numbers text
	 */
	function updateNumbersText(currentItem){
		
		if(!g_objNumbers)
			return(false);
		
		if(!currentItem)
			var currentItem = g_objSlider.getCurrentItem();
		
		var numItems = g_gallery.getNumItems();
		var numCurrentItem = currentItem.index + 1;
		g_objNumbers.html(numCurrentItem + " / " + numItems);
	}
	
	
	/**
	 * show the text panel
	 */
	function showTextPanel(){
		
		if(!g_objTextPanel)
			return(false);
		
		g_objTextPanel.getElement().show().stop().fadeTo(g_temp.fadeDuration, 1);
		
	}

	
	/**
	 * Show the numbers object
	 */
	function showNumbers(){
		
		if(g_objNumbers)
			g_objNumbers.stop().fadeTo(g_temp.fadeDuration, 1);
	}
	
	
	function __________EVENTS_________(){};
	
	
	/**
	 * on start dragging slider item event. hide the elements
	 */
	function onSliderDragStart(){
		if(g_temp.isCompact == false)
			return(true);
		
		hideCompactElements();
	}

	
	/**
	 * on zoom change
	 * move the assets of compact to their places
	 */
	function onZoomChange(){
		if(g_temp.isCompact == false)
			return(true);
		
		g_temp.positionFrom = "onZoomChange";
	
		positionCloseButton(false, true);
		positionArrowsInside(false, true);
		
		//handle compact text panel mode
		if(g_temp.isCompact == true){
			var isImageInPlace = (g_objSlider.isCurrentSlideType("image") && g_objSlider.isCurrentImageInPlace() == true);
			if(isImageInPlace == false){
				hideTextPanel();
				hideNumbers();
			}
			else{
				g_temp.positionFrom = "onZoomChange";
				showTextPanel();
				showNumbers();
			}
		}
		
	}

	function onSliderAfterReturn(){
		
		if(g_temp.isCompact == false)
			return(true);
		
		g_temp.positionFrom = "onSliderAfterReturn";
		
		positionCloseButton(true);
		positionArrowsInside(true);
		
		var isChanged = handleCompactHeight();
		if(isChanged == false)
			handleCompactTextpanelSizes();
		
		showTextPanel();
		showNumbers();
	}
	
	
	/**
	 * after put image to the slide
	 * position compact elements
	 */
	function onSliderAfterPutImage(data, objSlide){
				
		objSlide = jQuery(objSlide);
				
		if(g_temp.isCompact == false)
			return(true);

		if(g_objSlider.isSlideCurrent(objSlide) == false)
			return(true);
				
		g_temp.positionFrom = "onSliderAfterPutImage";
		
		positionCloseButton(true);
		
		positionArrowsInside(true);
		
		handleCompactTextpanelSizes();
	}
	
	
	/**
	 * on slider transition end, handle panel height
	 */
	function onSliderTransitionEnd(){
		
		var sliderOptions = g_objSlider.getOptions();
		var imagePaddingTop = sliderOptions.slider_image_padding_top;
		
		//handle wide
		if(g_objTopPanel){
			var panelHeight = g_objTopPanel.height();
			
			if(panelHeight != imagePaddingTop)
				refreshSliderItem(panelHeight);
		}
		
		//handle compact
		if(g_temp.isCompact == true){
			
			updateTextPanelText();
			updateNumbersText();
			
			g_temp.positionFrom = "onSliderTransitionEnd";
			
			positionCloseButton(true);
			positionArrowsInside(true);
			
			if(g_objSlider.isSlideActionActive() == false){
				var isChanged = handleCompactHeight();
				if(isChanged == false)
					handleCompactTextpanelSizes();
				
				showTextPanel();
				showNumbers();
			}
			
		}
		
	}

	function onItemChange(data, currentItem){
		
			
		if(g_temp.isCompact == false){	//wide mode
			
			if(g_objNumbers)
				updateNumbersText(currentItem);
			
			if(g_objTextPanel){
				updateTextPanelText(currentItem);
				
				g_objTextPanel.positionElements(false);
				handlePanelHeight();
				g_objTextPanel.positionPanel();
			}
			
		}else{
			
			if(g_objSlider.isAnimating() == false){
				
				if(g_objTextPanel)
					updateTextPanelText(currentItem);
				
				if(g_objNumbers)
					updateNumbersText(currentItem);
			}
		
		}
		
	}
	
	
	/**
	 * on slider click
	 */
	function onSliderClick(data, event){
		
		var slideType = g_objSlider.getSlideType();
		if(slideType != "image")
			return(true);
		
		var isPreloading = g_objSlider.isPreloading();
		if(isPreloading == true){
			t.close("slider");
			return(true);
		}
		
		var isInside = g_objSlider.isMouseInsideSlideImage(event);
		
		if(isInside == false)
			t.close("slider_inside");
	}
	
	
	/**
	 * on lightbox resize
	 */
	function onResize(){
		
		positionElements();
	}
	
	
	/**
	 * on slider action start. remove extras
	 */
	function onSliderActionStart(){
		
		if(g_temp.isCompact == false)
			return(true);
		
		positionCloseButton(true);
		positionArrowsInside(true);
		
		if(g_objTextPanel)
			g_objTextPanel.getElement().hide();
		
		if(g_objNumbers)
			g_objNumbers.hide();
		
	}

	
	//show extras
	function onSliderActionEnd(){
		
		if(g_temp.isCompact == false)
			return(true);
		
		positionCloseButton(true);
		positionArrowsInside(true);
		
		if(g_objTextPanel)
			g_objTextPanel.getElement().show();
		
		if(g_objNumbers)
			g_objNumbers.show();
		
	}
	
	
	/**
	 * on start play - hide the side buttons
	 */
	function onPlayVideo(){
		
		if(g_objArrowLeft && g_options.lightbox_hide_arrows_onvideoplay == true){
			g_objArrowLeft.hide();			
			g_objArrowRight.hide();			
		}
		
	}
	
	
	/**
	 * on stop video - show the side buttons
	 */
	function onStopVideo(){
		
		if(g_objArrowLeft && g_options.lightbox_hide_arrows_onvideoplay == true){
			g_objArrowLeft.show();
			g_objArrowRight.show();			
		}
		
	}
	
	/**
	 * on gallery keypres, do operations
	 */
	function onKeyPress(data, key){
		
		switch(key){
			case 27:		//escape - close lightbox
				if(g_temp.isOpened == true)
					t.close("keypress");
			break;
		}
		
	}
	
	/**
	 * on image mouse enter event
	 */
	function onImageMouseEnter(){
		
		if(g_temp.isArrowsOnHoverMode == true)
			showArrows(false, true);
		
	}
	
	/**
	 * on image mouse leave
	 */
	function onImageMouseLeave(event){
		
		g_temp.positionFrom = "hideCompactElements";
		
		if(g_temp.isArrowsOnHoverMode == true && isSliderImageInPlace() == true)
			hideArrows(false, true);
		
	}

	function onMouseMove(event){
		 g_temp.lastMouseX = event.pageX;
		 g_temp.lastMouseY = event.pageY;
		
		 var isHidden = isArrowsHidden()
		 
		 
		 if(isHidden == true && isMouseInsideImage() && g_objSlider.isAnimating() == false){
			 g_temp.positionFrom = "onMouseMove";
			 if(g_objArrowLeft && g_objArrowLeft.is(":animated") == false)
				 showArrows(false, true);
		 }
		 
	}

	function initEvents(){

		g_objOverlay.on("touchstart", function(event){
			event.preventDefault();
		});
		
		g_objOverlay.on("touchend", function(event){
			t.close("overlay");
		});
		
		
		g_functions.addClassOnHover(g_objArrowRight, "sovarrhover");
		g_functions.addClassOnHover(g_objArrowLeft, "sovarrhover");
		
		g_functions.addClassOnHover(g_objButtonClose);
		
		g_gallery.setNextButton(g_objArrowRight);
		g_gallery.setPrevButton(g_objArrowLeft);
		
		g_objButtonClose.click(function(){
			t.close("button");
		});
		
		g_objGallery.on(g_gallery.events.ITEM_CHANGE, onItemChange);
		
		if(g_objSlider){
			jQuery(g_objSlider).on(g_objSlider.events.TRANSITION_END, onSliderTransitionEnd);
			
			//on slider click event
			jQuery(g_objSlider).on(g_objSlider.events.CLICK, onSliderClick);
			
			jQuery(g_objSlider).on(g_objSlider.events.ACTION_START, onSliderActionStart);
			jQuery(g_objSlider).on(g_objSlider.events.ACTION_END, onSliderActionEnd);

			//on slider video 
			var objVideo = g_objSlider.getVideoObject();
					
			jQuery(objVideo).on(objVideo.events.PLAY_START, onPlayVideo);
			jQuery(objVideo).on(objVideo.events.PLAY_STOP, onStopVideo);
			
			//handle close button hide / appear
			jQuery(g_objSlider).on(g_objSlider.events.START_DRAG, onSliderDragStart);
			jQuery(g_objSlider).on(g_objSlider.events.TRANSITION_START, onSliderDragStart);
			
			jQuery(g_objSlider).on(g_objSlider.events.AFTER_DRAG_CHANGE, onSliderAfterReturn);
			jQuery(g_objSlider).on(g_objSlider.events.AFTER_RETURN, onSliderAfterReturn);
			jQuery(g_objSlider).on(g_objSlider.events.AFTER_PUT_IMAGE, onSliderAfterPutImage);
			
			jQuery(g_objSlider).on(g_objSlider.events.ZOOM_CHANGE, onZoomChange);
			
			jQuery(g_objSlider).on(g_objSlider.events.IMAGE_MOUSEENTER, onImageMouseEnter);
			jQuery(g_objSlider).on(g_objSlider.events.IMAGE_MOUSELEAVE, onImageMouseLeave);

		}
		
		//on resize
		 jQuery(window).resize(function(){
			 
			 if(g_temp.isOpened == false)
				 return(true);
			 
			 g_functions.whenContiniousEventOver("lightbox_resize", onResize, 100);
		 });
		 
		 g_objGallery.on(g_gallery.events.GALLERY_KEYPRESS, onKeyPress);
		 
		 //store last mouse x and y
		 if(g_temp.isArrowsOnHoverMode == true){
			 
			 jQuery(document).bind('mousemove', onMouseMove);
		 
		 }
			 
	}

	this.destroy = function(){
		
		jQuery(document).unbind("mousemove");
		
		g_objOverlay.off("touchstart");
		g_objOverlay.off("touchend");
		g_objButtonClose.off("click");
		g_objGallery.off(g_gallery.events.ITEM_CHANGE);
		
		if(g_objSlider){
			jQuery(g_objSlider).off(g_objSlider.events.ACTION_START);
			jQuery(g_objSlider).off(g_objSlider.events.ACTION_END);
			jQuery(g_objSlider).off(g_objSlider.events.TRANSITION_END);
			jQuery(g_objSlider).off(g_objSlider.events.CLICK);
			jQuery(g_objSlider).off(g_objSlider.events.START_DRAG);
			jQuery(g_objSlider).off(g_objSlider.events.TRANSITION_START);
			jQuery(g_objSlider).off(g_objSlider.events.AFTER_DRAG_CHANGE);
			jQuery(g_objSlider).off(g_objSlider.events.AFTER_RETURN);
			
			var objVideo = g_objSlider.getVideoObject();
			jQuery(objVideo).off(objVideo.events.PLAY_START);
			jQuery(objVideo).off(objVideo.events.PLAY_STOP);

			jQuery(g_objSlider).on(g_objSlider.events.IMAGE_MOUSEENTER, onImageMouseEnter);
			jQuery(g_objSlider).on(g_objSlider.events.IMAGE_MOUSELEAVE, onImageMouseLeave);
			
			g_objSlider.destroy();
		}
		
		jQuery(window).unbind("resize");
		g_objGallery.off(g_gallery.events.GALLERY_KEYPRESS, onKeyPress);

	}
	
	
	/**
	 * actual hide all compacy type elements
	 */
	function actualHideCompactElements(){
		
		if(g_objButtonClose)
			g_objButtonClose.hide();
		
		if(g_objArrowLeft && g_temp.isArrowsInside == true){
			g_objArrowLeft.hide();
			g_objArrowRight.hide();
		}
		
		if(g_objNumbers)
			g_objNumbers.hide();
		
		if(g_objTextPanel)
			g_objTextPanel.hide();
		
	}

	
	/**
	 * open the lightbox with some item index
	 */
	this.open = function(index){
		
		var objItem = g_gallery.getItem(index);
		
		g_temp.isOpened = true;
		
		if(g_objSlider){
			g_objSlider.setItem(objItem, "fade");
		}
		
		if(g_objTextPanel)
			g_objTextPanel.setTextPlain(objItem.title, objItem.description);
		
		g_objOverlay.stop().fadeTo(0,0);
		g_objWrapper.show();
		g_objWrapper.fadeTo(0,1);
		
		g_objOverlay.stop().fadeTo(g_temp.fadeDuration, g_options.lightbox_overlay_opacity);
		
		positionElements();
				
		if(g_temp.isCompact == true){
			
			var isPreloading = g_objSlider.isPreloading();
			if(isPreloading == true){
				
				actualHideCompactElements();
				
			}else{
				
				//hide only arrows if they are inside
				if(g_temp.isArrowsInside == true){
					g_objArrowLeft.hide();
					g_objArrowRight.hide();
				}
				
			}
				
		}
				
		if(g_objSlider)
			g_objSlider.startSlideAction();
		
	}
	
	
	/**
	 * close the lightbox
	 */
	this.close = function(fromWhere){
				
		g_temp.isOpened = false;
		
		if(g_temp.isCompact == true)
			hideCompactElements();
		
		if(g_objSlider)
			g_objSlider.stopSlideAction();
		
		var slideType = g_objSlider.getSlideType();
				
		if(slideType != "image")
			g_objWrapper.hide();
		else{
			g_objWrapper.fadeTo(g_temp.fadeDuration,0,function(){
				g_objWrapper.hide();
			});
		}
		
	}
	

	this.init = function(gallery, customOptions){
		
		initLightbox(gallery, customOptions);
	}

	this.putHtml = function(){
		
		putLightboxHtml();
		
	}
	
	/**
	 * run lightbox elements
	 */
	this.run = function(){
		
		setProperties();
		
		if(g_objSlider)
			g_objSlider.run();
		
		initEvents();
	}
}

/**
 * carousel class
 */
function UGCarousel(){

	var t = this, g_objThis = jQuery(this);
	var g_gallery = new UniteGalleryMain(), g_objGallery, g_objWrapper;	
	var g_functions = new UGFunctions(), g_arrItems, g_objTileDesign = new UGTileDesign();
	var g_thumbs = new UGThumbsGeneral(), g_objCarouselWrapper, g_objInner, arrOrigTiles = [];
	
	var g_options = {
			carousel_padding: 8,			
			carousel_space_between_tiles: 20,	
			carousel_navigation_numtiles:3,		
			carousel_scroll_duration:500,	
			carousel_scroll_easing:"easeOutCubic",	
			carousel_autoplay: true,				
			carousel_autoplay_timeout: 3000,		
			carousel_autoplay_direction: "right",		
			carousel_autoplay_pause_onhover: true	
	};
	
	this.events = {
			START_PLAY: "carousel_start_play",
			PAUSE_PLAY: "carousel_pause_play",
			STOP_PLAY: "carousel_stop_play"
	};
	
	var g_temp = {
			eventSizeChange: "thumb_size_change",
			isFirstTimeRun:true,  //if run once
			carouselMaxWidth: null,
			tileWidth:0,
			sideSpace:1500,				//the space that must be filled with items
			spaceActionSize:500,
			numCurrent:0,
			touchActive: false,
			startInnerPos: 0,
			lastTime:0,
			startTime:0,
			startMousePos:0,
			lastMousePos:0,
			scrollShortDuration: 200,
			scrollShortEasing: "easeOutQuad",
			handle:null,
			isPlayMode: false,
			isPaused: false
	};

	
	function __________GENERAL_________(){};
	
	/**
	 * init the gallery
	 */
	function init(gallery, customOptions){
		
		g_objects = gallery.getObjects();
		g_gallery = gallery;
		g_objGallery = jQuery(gallery);
		g_objWrapper = g_objects.g_objWrapper;
		g_arrItems = g_objects.g_arrItems;
		
		g_options = jQuery.extend(g_options, customOptions);
		
		g_objTileDesign.setFixedMode();		
		g_objTileDesign.setApproveClickFunction(isApproveTileClick);
		g_objTileDesign.init(gallery, g_options);
		
		g_thumbs = g_objTileDesign.getObjThumbs();
		g_options = g_objTileDesign.getOptions();
		
		g_temp.tileWidth = g_options.tile_width;
	}
	
	
	/**
	 * set the grid panel html
	 */
	function setHtml(objParent){
		
		if(!objParent)
			var objParent = g_objWrapper;
		
		var html = "<div class='ug-carousel-wrapper'><div class='ug-carousel-inner'></div></div>";
		g_objWrapper.append(html);
		
		g_objCarouselWrapper = g_objWrapper.children(".ug-carousel-wrapper");
		g_objInner = g_objCarouselWrapper.children(".ug-carousel-inner");
		
		g_objTileDesign.setHtml(g_objInner);
		
		g_thumbs.getThumbs().fadeTo(0,1);
		
	}

	function run(){
		
		//validation
		if(g_temp.carouselMaxWidth === null){
			throw new Error("The carousel width not set");
			return(false);
		}
		
		//set wrapper width
		var numTiles = g_functions.getNumItemsInSpace(g_temp.carouselMaxWidth, g_temp.tileWidth, g_options.carousel_space_between_tiles);
		var realWidth = g_functions.getSpaceByNumItems(numTiles, g_temp.tileWidth, g_options.carousel_space_between_tiles);
		realWidth += g_options.carousel_padding * 2;
		
		g_objCarouselWrapper.width(realWidth);
		
		if(g_temp.isFirstTimeRun == true){
			
			initEvents();
			
			g_objTileDesign.run();
			
			//set data indexes to tiles
			jQuery.each(g_arrItems, function(index, item){
				item.objThumbWrapper.data("index", index);
				g_objWrapper.trigger(g_temp.eventSizeChange, [item.objThumbWrapper,true]);
				item.objTileOriginal = item.objThumbWrapper.clone(true, true);
			});
						
			positionTiles(true);		//set heights at first time
			
			if(g_options.carousel_autoplay == true)
				startAutoplay();
		}else{
			
			if(g_options.carousel_autoplay == true)
				pauseAutoplay();
			
			scrollToTile(0, false);
			
			if(g_options.carousel_autoplay == true)
				startAutoplay();
		}
		
		positionElements();
		
		g_temp.isFirstTimeRun = false;
	}
	
	
	
	function __________GETTERS_______(){};
	
	/**
	 * get inner position
	 */
	function getInnerPos(){
		return g_functions.getElementSize(g_objInner).left;
	}
	
	/**
	 * get mouse position
	 */
	function getMousePos(event){
		return g_functions.getMousePosition(event).pageX;
	}
	
	
	/**
	 * get all tiles
	 */
	function getTiles(){
		
		var objTiles = g_objInner.children(".thumbwrap");
		return(objTiles);
	}
	
	
	/**
	 * get num tiles in some space
	 */
	function getNumTilesInSpace(space){
		
		var numItems = g_functions.getNumItemsInSpace(space, g_temp.tileWidth, g_options.carousel_space_between_tiles)
		
		return(numItems);
	}
	
	/**
	 * get all tiles in the inner object
	 */
	function getTiles(){
		return g_objInner.children(".thumbwrap");
	}
	
	
	/**
	 * get num tiles
	 */
	function getNumTiles(){
		return getTiles().length;
	}
	
	
	/**
	 * get tile
	 */
	function getTile(numTile){
		validateTileNum(numTile);
		var objTiles = getTiles();
		var objTile = jQuery(objTiles[numTile]);
		
		return(objTile);
	}
	
	
	/**
	 * get first tile in the inner object
	 */
	function getFirstTile(){
				
		return g_objInner.children(".thumbwrap").first();
	}
	
	/**
	 * get last tile in the inner object
	 */
	function getLastTile(){
		
		return g_objInner.children(".thumbwrap").last();		
	}
	
	
	
	/**
	 * get clone of the time next or prev the given
	 */
	function getTileClones(objTile, numClones, dir){
		
		var index = objTile.data("index");
		if(index == undefined){
			throw new Error("every tile should have index!");			
		}
		
		var arrClonedItems = [];
		
		for(var i=0;i<numClones;i++){			
			
			if(dir == "prev")
				var itemToAdd = g_gallery.getPrevItem(index, true);
			else
				var itemToAdd = g_gallery.getNextItem(index, true);
			
			if(!itemToAdd){
				throw new Error("the item to add is empty");
			}
			
			var clonedTile = itemToAdd.objTileOriginal.clone(true, true);
			
			
			index = itemToAdd.index;	
			
			clonedTile.addClass("cloned");
			arrClonedItems.push(clonedTile);
		}
		
		return(arrClonedItems);
	}
	
	
	/**
	 * get space left from the right
	 */
	function getRemainSpaceRight(){
		var wrapperSize = g_functions.getElementSize(g_objCarouselWrapper);
		var innerSize = g_functions.getElementSize(g_objInner);
		
		var spaceTaken = innerSize.width - wrapperSize.width + innerSize.left;
		var spaceRemain = g_temp.sideSpace - spaceTaken;
		
		return(spaceRemain);
	}
	
	
	/**
	 * get remain space on the left
	 */
	function getRemainSpaceLeft(){
		var spaceTaken = -getInnerPos();
		var spaceRemain = g_temp.sideSpace - spaceTaken;
		return(spaceRemain);
	}
	
	/**
	 * get carousel width
	 */
	function getCarouselWidth(){
		
		var objSize = g_functions.getElementSize(g_objCarouselWrapper);
		return(objSize.width);
	}
	
	/**
	 * get num tiles in the carousel
	 */
	function getNumTilesInCarousel(){
		
		var width = getCarouselWidth();
		
		var numTiles = getNumTilesInSpace(width);
		
		return(numTiles);
	}
	
	
	function __________OTHER_METHODS_______(){};
	
	
	/**
	 * position existing tiles
	 */
	function positionTiles(setHeight){
		
		if(!setHeight)
			var setHeight = false;
		
		var objTiles = getTiles();
		
		var posx = 0;
		var maxHeight = 0, totalWidth;
		
		jQuery.each(objTiles, function(index, objTile){
			objTile = jQuery(objTile);
			g_functions.placeElement(objTile, posx, 0);
			var tileSize = g_functions.getElementSize(objTile);
			posx += tileSize.width + g_options.carousel_space_between_tiles;
			maxHeight = Math.max(maxHeight, tileSize.height);
			if(index == (objTiles.length-1))
				totalWidth = tileSize.right;
		});
		
		
		//set heights and widths
		g_objInner.width(totalWidth);
		
		maxHeight += g_options.carousel_padding * 2;
		
		if(setHeight === true){
			g_objInner.height(maxHeight);
			g_objCarouselWrapper.height(maxHeight);
		}
		
		scrollToTile(g_temp.numCurrent, false);

		return(totalWidth);
	}
	
	function validateTileNum(numTile){

		if(numTile > (getTiles().length-1))
			throw new Error("Wrogn tile number: " + numTile);
	}
	
	
	/**
	 * add tile to left
	 */
	function addTiles(numTiles, dir){
		
		if(dir == "left")
			var anchorTile = getFirstTile();
		else
			var anchorTile = getLastTile();
		
		var clonesType = (dir == "left")?"prev":"next";
		
		var arrNewTiles = getTileClones(anchorTile, numTiles, clonesType);
				
		jQuery.each(arrNewTiles, function(index, objTile){		
			
			if(dir == "left")
				g_objInner.prepend(objTile);
			else
				g_objInner.append(objTile);
			
			g_objWrapper.trigger(g_temp.eventSizeChange, objTile);
			g_objTileDesign.loadTileImage(objTile);
			
		});
		
		
	}
	
	/**
	 * remove some tiles
	 */
	function removeTiles(numTilesToRemove, direction){
		
		validateTileNum(numTiles);
		
		var arrTiles = getTiles();
		var numTiles = arrTiles.length;
		
		for(var i=0; i<numTilesToRemove; i++){
			
			if(direction == "left")
				jQuery(arrTiles[i]).remove();
			else{
				jQuery(arrTiles[numTiles-1-i]).remove();
			}
		}
	}

	
	/**
	 * set inner strip position
	 */
	function setInnerPos(pos){
		var objCss = {
				"left":pos+"px"
		};
		
		g_objInner.css(objCss);
	}
	
	
	/**
	 * scroll to tile by number
	 */
	function scrollToTile(numTile, isAnimation, isShort){
		
		if(isAnimation === undefined){
			var isAnimation = true;
			if(g_objInner.is(":animated"))
				return(true);
		}
		
		var objTile = getTile(numTile);
		var objSize = g_functions.getElementSize(objTile);
		var posScroll = -objSize.left + g_options.carousel_padding;
		
		var objCss = {
				"left":posScroll+"px"
		};
						
		if(isAnimation === true){
			
			var duration = g_options.carousel_scroll_duration;
			var easing = g_options.carousel_scroll_easing;
			
			if(isShort === true){
				duration = g_temp.scrollShortDuration;
				easing = g_temp.scrollShortEasing;
			}
			
			g_objInner.stop(true).animate(objCss ,{
				duration: duration,
				easing: easing,
				queue: false,
				complete: function(){
					g_temp.numCurrent = numTile;
					
					fillSidesWithTiles(true);
				}
			});					
			
		}else{
			g_temp.numCurrent = numTile;
						
			g_objInner.css(objCss);
		}
		
	}
	
	
	/**
	 * get number of neerest tile
	 */
	function getNeerestTileNum(){
		var innerPos = -getInnerPos();
		var numTiles = getNumTilesInSpace(innerPos);
		var tile1Pos = g_functions.getElementSize(getTile(numTiles)).left;
		var tile2Pos = g_functions.getElementSize(getTile(numTiles+1)).left;
				
		if(Math.abs(tile1Pos - innerPos) < Math.abs(tile2Pos - innerPos))
			return(numTiles);
		else			
			return(numTiles+1);
	}
	
	
	/**
	 * get neerest tile to inner position
	 */
	function scrollToNeerestTile(){
		
		var tileNum = getNeerestTileNum();
		scrollToTile(tileNum, true, true);
	}
	
	
	function fillSidesWithTiles(){
		
		var spaceLeft = getRemainSpaceLeft();
		var spaceRight = getRemainSpaceRight();
		var numItemsLeft = 0, numItemsRight = 0, numItemsRemoveLeft = 0, numItemsRemoveRight = 0;

		if(spaceLeft > g_temp.spaceActionSize){
			numItemsLeft = getNumTilesInSpace(spaceLeft);		
			addTiles(numItemsLeft, "left");
			
			g_temp.numCurrent += numItemsLeft;
			
		}else if(spaceLeft < -g_temp.spaceActionSize){
			var numItemsRemoveLeft = getNumTilesInSpace(Math.abs(spaceLeft));
			removeTiles(numItemsRemoveLeft, "left");
			g_temp.numCurrent -= numItemsRemoveLeft;
		}
		
		//add tiles to right
		if(spaceRight > g_temp.spaceActionSize){
			numItemsRight = getNumTilesInSpace(spaceRight);
			addTiles(numItemsRight, "right");			
		}else if(spaceRight < -g_temp.spaceActionSize){
			numItemsRemoveRight = getNumTilesInSpace(Math.abs(spaceRight));
			removeTiles(numItemsRemoveRight, "right");			
		}

		var isPositioned = false;
		if(numItemsLeft || numItemsRight || numItemsRemoveLeft || numItemsRemoveRight){

			positionTiles();			
			isPositioned = true
		}
		
		return(isPositioned);
	}

	function positionElements(isFirstTime){
		
		//position inner strip
		g_functions.placeElement(g_objInner, 0, g_options.carousel_padding);
		
		//position sides
		fillSidesWithTiles();
		
	}
	
	
	
	function __________AUTOPLAY_______(){};

	/**
	 * start autoplay
	 */
	function startAutoplay(){
		
		g_temp.isPlayMode = true;
		g_temp.isPaused = false;
		
		g_objThis.trigger(t.events.START_PLAY);
		
		if(g_temp.handle)
			clearInterval(g_temp.handle);
		
		g_temp.handle = setInterval(autoplayStep, g_options.carousel_autoplay_timeout);
		
	}
	
	/**
	 * unpause autoplay after pause
	 */
	function unpauseAutoplay(){
		
		if(g_temp.isPlayMode == false)
			return(true);
		
		if(g_temp.isPaused == false)
			return(true);
		
		startAutoplay();
	}
	
	/**
	 * pause the autoplay
	 */
	function pauseAutoplay(){

		if(g_temp.isPlayMode == false)
			return(true);
		
		g_temp.isPaused = true;
		
		if(g_temp.handle)
			clearInterval(g_temp.handle);
		
		g_objThis.trigger(t.events.PAUSE_PLAY);
		
	}

	
	/**
	 * stop autoplay
	 */
	function stopAutoplay(){
		if(g_temp.isPlayMode == false)
			return(true);
		
		g_temp.isPaused = false;
		g_temp.isPlayMode = false;
		
		if(g_temp.handle)
			clearInterval(g_temp.handle);
		
		g_objThis.trigger(t.events.STOP_PLAY);
	}
	
	
	/**
	 * autoplay step, advance the carousel by 1
	 */
	function autoplayStep(){
		
		if(g_options.carousel_autoplay_direction == "left"){
			t.scrollRight(1);
		}else{
			t.scrollLeft(1);
		}
		
	}
	
	function __________EVENTS_______(){};
		
	
	/**
	 * on touch start
	 */
	function onTouchStart(event){
		
		if(g_temp.touchActive == true)
			return(true);
		
		g_temp.touchActive = true;
		
		pauseAutoplay();
		
		g_temp.startTime = jQuery.now();		
		g_temp.startMousePos = getMousePos(event);
		g_temp.startInnerPos = getInnerPos();
		g_temp.lastTime = g_temp.startTime;
		g_temp.lastMousePos = g_temp.startMousePos;
	}

	
	/**
	 * on touch move
	 */
	function onTouchMove(event){
				
		if(g_temp.touchActive == false)
			return(true);
		
		event.preventDefault();
		
		g_temp.lastMousePos = getMousePos(event);
		
		var diff = g_temp.lastMousePos - g_temp.startMousePos;
		var innerPos = g_temp.startInnerPos + diff;
		var direction = (diff > 0) ? "prev":"next";
		var innerSize = g_functions.getElementSize(g_objInner).width;
		
		//slow down when off limits
		if(innerPos > 0 && direction == "prev"){
			innerPos = innerPos / 3;
		}
		
		if(innerPos < -innerSize && direction == "next"){
			innerPos = g_temp.startInnerPos + diff / 3;
		}
		
		setInnerPos(innerPos);
	}
	
	
	/**
	 * on touch end
	 * change panes or return to current pane
	 */
	function onTouchEnd(event){
		
		if(g_temp.touchActive == false)
			return(true);
		
		//event.preventDefault();
		g_temp.touchActive = false;
		
		scrollToNeerestTile();
		
		unpauseAutoplay();
	}
	
	/**
	 * pause the playing
	 */
	function onMouseEnter(event){
		
		if(g_options.carousel_autoplay_pause_onhover == false)
			return(true);
		
		if(g_temp.isPlayMode == true && g_temp.isPaused == false)
			pauseAutoplay();
	}
	
	/**
	 * start the playing again
	 */
	function onMouseLeave(event){
		
		if(g_options.carousel_autoplay_pause_onhover == false)
			return(true);
		
		unpauseAutoplay();
	}
	
	
	/**
	 * init panel events
	 */
	function initEvents(){
			
		g_objTileDesign.initEvents();
		
		//touch drag events
		
		//slider mouse down - drag start
		g_objCarouselWrapper.bind("mousedown touchstart",onTouchStart);
		
		//on body move
		jQuery("body").bind("mousemove touchmove",onTouchMove);
		
		//on body mouse up - drag end
		jQuery(window).add("body").bind("mouseup touchend", onTouchEnd);
		
		g_objCarouselWrapper.hover(onMouseEnter, onMouseLeave);
		
	}
	
	
	/**
	 * destroy the carousel events
	 */
	this.destroy = function(){
		
		if(g_temp.handle)
			clearInterval(g_temp.handle);
		
		g_objThis.off(t.events.START_PLAY);		
		g_objThis.off(t.events.STOP_PLAY);		
		
		//touch drag events
		//slider mouse down - drag start
		g_objCarouselWrapper.unbind("mousedown");
		g_objCarouselWrapper.unbind("touchstart");
		
		//on body move
		jQuery("body").unbind("mousemove");
		jQuery("body").unbind("touchmove");
		
		//on body mouse up - drag end
		jQuery(window).add("body").unbind("mouseup").unbind("touchend");
		
		g_objCarouselWrapper.off("mouseenter").off("mouseleave");
		
		g_objTileDesign.destroy();
	}


	this.init = function(gallery, customOptions, width){
		if(width)
			this.setMaxWidth(width);
		
		init(gallery, customOptions);
	}

	
	/**
	 * set the width
	 */
	this.setMaxWidth = function(width){
		
		g_temp.carouselMaxWidth = width;
	}
	
	
	/**
	 * set html
	 */
	this.setHtml = function(objParent){
		setHtml(objParent);
	}
	
	this.getElement = function(){
		return g_objCarouselWrapper;
	}
	
	/**
	 * get tile design object
	 */
	this.getObjTileDesign = function(){
		return(g_objTileDesign);
	}
	
	
	/**
	 * get estimated height
	 */
	this.getEstimatedHeight = function(){
		var height = g_options.tile_height + g_options.carousel_padding * 2;
		return(height);
	}
	
	
	/**
	 * set html and properties
	 */	
	this.run = function(){
		run();
	}
	
	
	/**
	 * scroll to right
	 */
	this.scrollRight = function(tilesToScroll){
		
		if(!tilesToScroll || typeof tilesToScroll == "object")
			var tilesToScroll = g_options.carousel_navigation_numtiles;

		var numTilesInCarousel = getNumTilesInCarousel();
		if(tilesToScroll > numTilesInCarousel)
			tilesToScroll = numTilesInCarousel;
		
		var numPrev = g_temp.numCurrent - tilesToScroll;
		if(numPrev <=0)
			numPrev = 0;
		
		scrollToTile(numPrev);
	}
	
	
	/**
	 * scroll to left
	 */
	this.scrollLeft = function(tilesToScroll){
				
		if(!tilesToScroll || typeof tilesToScroll == "object")
			var tilesToScroll = g_options.carousel_navigation_numtiles;
		
		var numTilesInCarousel = getNumTilesInCarousel();
		if(tilesToScroll > numTilesInCarousel)
			tilesToScroll = numTilesInCarousel;
		
		var numTiles = getNumTiles();
		
		var numNext = g_temp.numCurrent + tilesToScroll;
		if(numNext >= numTiles)
			numNext = numTiles-1;
	
		scrollToTile(numNext);
	}
	
	/**
	 * set scroll left button
	 */
	this.setScrollLeftButton = function(objButton){
		g_functions.setButtonMobileReady(objButton);
		g_functions.setButtonOnClick(objButton, t.scrollLeft);
	}
	
	
	/**
	 * set scroll right button
	 */
	this.setScrollRightButton = function(objButton){
		g_functions.setButtonMobileReady(objButton);
		g_functions.setButtonOnClick(objButton, t.scrollRight);
	}
	
	
	/**
	 * set scroll right button
	 */
	this.setPlayPauseButton = function(objButton){
		g_functions.setButtonMobileReady(objButton);
		
		if(g_temp.isPlayMode == true && g_temp.isPaused == false){
			objButton.addClass("ug-pause-icon");			
		}
		
		g_objThis.on(t.events.START_PLAY, function(){
			objButton.addClass("ug-pause-icon");
		});
		
		g_objThis.on(t.events.STOP_PLAY, function(){
			objButton.removeClass("ug-pause-icon");
		});
		
		g_functions.setButtonOnClick(objButton, function(){
				
				if(g_temp.isPlayMode == false || g_temp.isPaused == true)					
					startAutoplay();
				else
					stopAutoplay();
				
		});
	}
	
	
	/**
	 * return if passed some significant movement
	 */
	function isApproveTileClick(){
		
		var passedTime = g_temp.lastTime - g_temp.startTime;		
		var passedDistanceAbs = Math.abs(g_temp.lastMousePos - g_temp.startMousePos);
		
		if(passedTime > 300)
			return(false);
		
		if(passedDistanceAbs > 30)
			return(false);
		
		return(true);
	}
	
	
}


/**
 * API Class
 * addon to Unite gallery
 */
function UG_API(gallery){
	
	var t = this, g_objThis = jQuery(t);
	var g_gallery = new UniteGalleryMain(), g_objGallery;
	g_gallery = gallery;
	g_objGallery = jQuery(gallery);
	
	
	/**
	 * get item data for output
	 */
	function convertItemDataForOutput(item){
		
		var output = {
				index: item.index,
				title: item.title,
				description: item.description,
				urlImage: item.urlImage,
				urlThumb: item.urlThumb
			};
			
			//add aditional variables to the output
			var addData = item.objThumbImage.data();
			
			for(var key in addData){
				switch(key){
					case "image":
					case "description":
						continue;
					break;
				}
				output[key] = addData[key];
			}
			
			return(output);
	}
	
	
	/**
	 * event handling function
	 */
	this.on = function(event, handlerFunction){
		
		switch(event){
			case "item_change":
				
				g_objGallery.on(g_gallery.events.ITEM_CHANGE, function(){
						var currentItem = g_gallery.getSelectedItem();
						var output = convertItemDataForOutput(currentItem);
						handlerFunction(output.index, output);
				});
				
			break;
			case "resize":
				g_objGallery.on(g_gallery.events.SIZE_CHANGE, handlerFunction);
			break;
			case "enter_fullscreen":
				g_objGallery.on(g_gallery.events.ENTER_FULLSCREEN, handlerFunction);				
			break;
			case "exit_fullscreen":
				g_objGallery.on(g_gallery.events.EXIT_FULLSCREEN, handlerFunction);				
			break;
			case "play":
				g_objGallery.on(g_gallery.events.START_PLAY, handlerFunction);				
			break;
			case "stop":
				g_objGallery.on(g_gallery.events.STOP_PLAY, handlerFunction);				
			break;
			case "pause":
				g_objGallery.on(g_gallery.events.PAUSE_PLAYING, handlerFunction);				
			break;
			case "continue":
				g_objGallery.on(g_gallery.events.CONTINUE_PLAYING, handlerFunction);				
			break;
			default:
				if(console)
					console.log("wrong api event: " + event);
			break;
		}
		
	}
	
	/**
	 * start playing 
	 */
	this.play = function(){		
		g_gallery.startPlayMode();		
	}
	
	/**
	 * stop playing
	 */
	this.stop = function(){
		g_gallery.stopPlayMode();
	}
	
	
	/**
	 * toggle playing
	 */
	this.togglePlay = function(){
		g_gallery.togglePlayMode();
	}
	
	
	/**
	 * enter fullscreen
	 */
	this.enterFullscreen = function(){
		g_gallery.toFullScreen();
	}
	
	/**
	 * exit fullscreen
	 */
	this.exitFullscreen = function(){
		g_gallery.exitFullScreen();
	}
	
	/**
	 * toggle fullscreen
	 */
	this.toggleFullscreen = function(){
		
		g_gallery.toggleFullscreen();		
	}
	
	this.resetZoom = function(){
		var objSlider = g_gallery.getObjSlider();
		if(!objSlider)
			return(false);
		
		objSlider.zoomBack();
	}
	
	
	/**
	 * zoom in
	 */
	this.zoomIn = function(){
		
		var objSlider = g_gallery.getObjSlider();
		if(!objSlider)
			return(false);
		
		objSlider.zoomIn();		
	}

	/**
	 * zoom in
	 */
	this.zoomOut = function(){
		
		var objSlider = g_gallery.getObjSlider();
		if(!objSlider)
			return(false);
		
		objSlider.zoomOut();		
	}
	
	/**
	 * next item
	 */
	this.nextItem = function(){
		g_gallery.nextItem();
	}
	
	
	/**
	 * prev item
	 */
	this.prevItem = function(){
		g_gallery.prevItem();
	}

	this.selectItem = function(numItem){
		
		g_gallery.selectItem(numItem);
	
	}

	this.resize = function(width, height){
		
		if(height)
			g_gallery.resize(width, height);
		else
			g_gallery.resize(width);
	}

	this.getItem = function(numItem){
		
		var data = g_gallery.getItem(numItem);
		var output = convertItemDataForOutput(data);
		
		return(output);
	}
	
	this.getNumItems = function(){
		var numItems = g_gallery.getNumItems();
		return(numItems);
	}

	this.reloadGallery = function(customOptions){
		if(!customOptions)
			var customOptions = {};
		
		g_gallery.run(null, customOptions);
	}
	
	
}


if(g_ugFunctions)
	g_ugFunctions.registerTheme("default");


/**
 * Default gallery theme
 */
function UGTheme_default(){

	var t = this;
	var g_gallery = new UniteGalleryMain(), g_objGallery, g_objects, g_objWrapper; 
	var g_objButtonFullscreen, g_objButtonPlay, g_objButtonHidePanel;
	var g_objSlider, g_objPanel, g_objStripPanel, g_objTextPanel;
	var g_functions = new UGFunctions();

	var g_options = {
			theme_load_slider:true,					
			theme_load_panel:true,					
				
			theme_enable_fullscreen_button: true,	
			theme_enable_play_button: true,			
			theme_enable_hidepanel_button: true,
			theme_enable_text_panel: true,		
			theme_text_padding_left: 20,	
			theme_text_padding_right: 5,	
			theme_text_align: "left",			
			theme_text_type: "title",		
			
			theme_hide_panel_under_width: 480	
	};
	
	
	//default item options:
	var g_defaults = {
		
		//slider options:
		slider_controls_always_on: true,
		slider_zoompanel_align_vert: "top",
		slider_zoompanel_offset_vert: 12,
		
		//textpanel options: 
		slider_textpanel_padding_top: 0,
		slider_textpanel_enable_title: false,
		slider_textpanel_enable_description: true,
		
		//strippanel options
		strippanel_background_color:"#232323",
		strippanel_padding_top:10
	};
	
		
	//options that could not be changed by user
	var g_mustOptions = {
		
		slider_enable_text_panel: false,
		slider_enable_play_button:false,
		slider_enable_fullscreen_button: false,
		
		//text panel options
		slider_enable_text_panel: false,		
		slider_textpanel_height: 50,
		slider_textpanel_align:"top",
	};
	
	
	var g_temp = {
		isPanelHidden: false
	};
	
	
	/**
	 * init the theme
	 */
	function initTheme(gallery, customOptions){
		
		g_gallery = gallery;
		
		g_options = jQuery.extend(g_options, g_defaults);
		g_options = jQuery.extend(g_options, customOptions);
		g_options = jQuery.extend(g_options, g_mustOptions);
		
		modifyOptions();
		
		//set gallery options
		g_gallery.setOptions(g_options);
		
		//include gallery elements
		if(g_options.theme_load_panel == true){
			g_objStripPanel = new UGStripPanel();
			g_objStripPanel.init(gallery, g_options);
		}
		
		if(g_options.theme_load_slider == true)
			g_gallery.initSlider(g_options);
		
		g_objects = gallery.getObjects();
				
		//get some objects for local use
		g_objGallery = jQuery(gallery);		
		g_objWrapper = g_objects.g_objWrapper;
		
		if(g_options.theme_load_slider == true)
			g_objSlider = g_objects.g_objSlider;
		
		//init text panel
		if(g_options.theme_enable_text_panel == true){
			g_objTextPanel = new UGTextPanel();
			g_objTextPanel.init(g_gallery, g_options, "slider");
		}
		
	}
	

	function runTheme(){
		
		setHtml();
		
		initAndPlaceElements();
				
		initEvents();
	}

	function modifyOptions(){
		
		var moreOptions = {
				slider_textpanel_css_title:{},				
				slider_textpanel_css_description:{}		
		};
		
		g_options = jQuery.extend(moreOptions, g_options);
		
		g_options.slider_textpanel_css_title["text-align"] = g_options.theme_text_align;
		g_options.slider_textpanel_css_description["text-align"] = g_options.theme_text_align;
	}
	

	
	/**
	 * set gallery html elements
	 */
	function setHtml(){
		
		//add html elements
		g_objWrapper.addClass("ug-theme-default");
		
		var htmlAdd = "";
		
		//add panel
		htmlAdd += "<div class='ug-theme-panel'>";
		
		var classButtonFullscreen = 'ug-default-button-fullscreen';
		var classButtonPlay = 'ug-default-button-play';
		var classCaptureButtonFullscreen = '.ug-default-button-fullscreen';
		var classCaptureButtonPlay = '.ug-default-button-play';
		
		
		if(!g_objTextPanel){	//take the buttons from default theme
			classButtonFullscreen = 'ug-default-button-fullscreen-single';
			classButtonPlay = 'ug-default-button-play-single';
			classCaptureButtonFullscreen = '.ug-default-button-fullscreen-single';
			classCaptureButtonPlay = '.ug-default-button-play-single';
		}
		
		//add fullscreen button to the panel
		if(g_options.theme_enable_fullscreen_button == true)
			htmlAdd += "<div class='"+classButtonFullscreen+"'></div>";
		
		//add play button to the panel
		if(g_options.theme_enable_play_button == true)
			htmlAdd += "<div class='"+classButtonPlay+"'></div>";
		
		//add hide panel button
		if(g_options.theme_enable_hidepanel_button)
			htmlAdd += "<div class='ug-default-button-hidepanel'><div class='ug-default-button-hidepanel-bg'></div> <div class='ug-default-button-hidepanel-tip'></div></div>";
		
		htmlAdd += "</div>";
		
		g_objWrapper.append(htmlAdd);
		
		//set elements
		g_objPanel = g_objWrapper.children(".ug-theme-panel");
		
		if(g_options.theme_enable_fullscreen_button == true)
			g_objButtonFullscreen = g_objPanel.children(classCaptureButtonFullscreen);
		
		if(g_options.theme_enable_play_button == true)
			g_objButtonPlay = g_objPanel.children(classCaptureButtonPlay);

		if(g_options.theme_enable_hidepanel_button == true)
			g_objButtonHidePanel = g_objPanel.children(".ug-default-button-hidepanel");
		
		//set html strip panel to the panel
		g_objStripPanel.setHtml(g_objPanel);
		
		//set text panel html to the panel
		if(g_objTextPanel)
			g_objTextPanel.appendHTML(g_objPanel);
		
		//set slider html
		if(g_objSlider)
			g_objSlider.setHtml();
		
	}

	function initAndPlaceElements(){
		
		//create and place thumbs panel:
		if(g_options.theme_load_panel){
			initPanel();
			placePanel();
		}
		
		//place the slider
		if(g_objSlider){	
			placeSlider();
			g_objSlider.run();
		}
		
	}
	
	
	/**
	 * init size of the thumbs panel
	 */
	function initPanel(){
		
		var objGallerySize = g_gallery.getSize();
		var galleryWidth = objGallerySize.width;	
		
		//init srip panel width
		g_objStripPanel.setOrientation("bottom");
		g_objStripPanel.setWidth(galleryWidth);
		g_objStripPanel.run();
		
		//set panel size
		var objStripPanelSize = g_objStripPanel.getSize();		
		var panelHeight = objStripPanelSize.height;
		
		if(g_objTextPanel){
			panelHeight += g_mustOptions.slider_textpanel_height;
			
			if(g_objButtonHidePanel){
				var hideButtonHeight = g_objButtonHidePanel.outerHeight();
				panelHeight += hideButtonHeight;
			}		
		}
		else{	
			var maxButtonsHeight = 0;
			
			if(g_objButtonHidePanel)
				maxButtonsHeight = Math.max(g_objButtonHidePanel.outerHeight(), maxButtonsHeight);
			
			if(g_objButtonFullscreen)
				maxButtonsHeight = Math.max(g_objButtonFullscreen.outerHeight(), maxButtonsHeight);
			
			if(g_objButtonPlay)
				maxButtonsHeight = Math.max(g_objButtonPlay.outerHeight(), maxButtonsHeight);
			
			panelHeight += maxButtonsHeight;
		
		}
		
		g_functions.setElementSize(g_objPanel, galleryWidth, panelHeight);
		
		//position strip panel
		var stripPanelElement = g_objStripPanel.getElement();
			g_functions.placeElement(stripPanelElement, "left", "bottom");
		
		//init hide panel button
		if(g_objButtonHidePanel){
			var buttonTip = g_objButtonHidePanel.children(".ug-default-button-hidepanel-tip");
			g_functions.placeElement(buttonTip, "center", "middle");
			
			//set opacity and bg color from the text panel			
			if(g_objTextPanel){				
				var objHideButtonBG = g_objButtonHidePanel.children(".ug-default-button-hidepanel-bg");
				
				var hidePanelOpacity = g_objTextPanel.getOption("textpanel_bg_opacity");				
				objHideButtonBG.fadeTo(0, hidePanelOpacity);

				var bgColor = g_objTextPanel.getOption("textpanel_bg_color");				
				objHideButtonBG.css({"background-color":bgColor});
			}
			
		}
		
		//position buttons on the text panel:
		var paddingPlayButton = 0;
		var panelButtonsOffsetY = 0;
		if(g_objButtonHidePanel){
			panelButtonsOffsetY = hideButtonHeight;
		}
		
		if(g_objButtonFullscreen){
			g_functions.placeElement(g_objButtonFullscreen, "right", "top",0 , panelButtonsOffsetY);
			paddingPlayButton = g_objButtonFullscreen.outerWidth();
		}
		
		if(g_objButtonPlay){
			var buttonPlayOffsetY = panelButtonsOffsetY;
			if(!g_objTextPanel)
				buttonPlayOffsetY++; 
				
			g_functions.placeElement(g_objButtonPlay, "right", "top", paddingPlayButton, buttonPlayOffsetY);			
			paddingPlayButton += g_objButtonPlay.outerWidth();
		}
		
		//run the text panel
		if(g_objTextPanel){
			
			var textPanelOptions = {};
			textPanelOptions.slider_textpanel_padding_right = g_options.theme_text_padding_right + paddingPlayButton;
			textPanelOptions.slider_textpanel_padding_left = g_options.theme_text_padding_left;					
			
			if(g_objButtonHidePanel){
				textPanelOptions.slider_textpanel_margin = hideButtonHeight;
			}
			
			g_objTextPanel.setOptions(textPanelOptions);
			
			g_objTextPanel.positionPanel();			
			g_objTextPanel.run();
		}

		if(g_objButtonHidePanel){
						
			if(g_objTextPanel)		//place at the beginning of hte panel
				g_functions.placeElement(g_objButtonHidePanel,"left", "top");
			
			else{		//place above the strip panel
				var stripPanelHeight = stripPanelElement.outerHeight();
				g_functions.placeElement(g_objButtonHidePanel,"left", "bottom", 0, stripPanelHeight);
			}
		}
		
	}
	function placePanel(){
		
		if(g_temp.isPanelHidden || isPanelNeedToHide() == true){
			
			//place panel hidden			
			var newPanelPosY = getHiddenPanelPosition();
			g_functions.placeElement(g_objPanel, 0, newPanelPosY);
			g_temp.isPanelHidden = true;
		
		}else		//place panel normal
			g_functions.placeElement(g_objPanel, 0, "bottom");
	
		
	} 
	function placeSlider(){
		
		 var sliderTop = 0;
		 var sliderLeft = 0;
		 var galleryHeight = g_gallery.getHeight();
		 var sliderHeight = galleryHeight;
		 
		 if(g_objStripPanel && isPanelHidden() == false){
			 var panelSize = g_objStripPanel.getSize();
			 sliderHeight = galleryHeight - panelSize.height;
		 }
		 
		 var sliderWidth = g_gallery.getWidth();

		 g_objSlider.setSize(sliderWidth, sliderHeight);
		 g_objSlider.setPosition(sliderLeft, sliderTop);		
	}
	
	function isPanelNeedToHide(){
		
		if(!g_options.theme_hide_panel_under_width)
			return(false);
		
		var windowWidth = jQuery(window).width();
		var hidePanelValue = g_options.theme_hide_panel_under_width;
		
		if(windowWidth <= hidePanelValue)
			return(true);
			
		return(false);
	}

	function checkHidePanel(){
		
		//check hide panel:
		if(!g_options.theme_hide_panel_under_width)
			return(false);
		
			var needToHide = isPanelNeedToHide();
			
			if(needToHide == true)
				hidePanel(true);
			else
				showPanel(true);
	}
	

	function onSizeChange(){
		
		initAndPlaceElements();
		
		checkHidePanel();
		
	}
	
	function isPanelHidden(){
		
		return(g_temp.isPanelHidden);
	}

	function placePanelAnimation(panelY, functionOnComplete){
		
		var objCss  = {top: panelY + "px"};
		
		g_objPanel.stop(true).animate(objCss ,{
			duration: 300,
			easing: "easeInOutQuad",
			queue: false,
			complete: function(){
				if(functionOnComplete)
					functionOnComplete();
			}
		});
		
	}

	function getHiddenPanelPosition(){
		
		var galleryHeight = g_objWrapper.height();
		var newPanelPosY = galleryHeight;
		if(g_objButtonHidePanel){
			var objButtonSize = g_functions.getElementSize(g_objButtonHidePanel);
			newPanelPosY -= objButtonSize.bottom;
		}
		
		return(newPanelPosY);
	}
	
	
	/**
	 * hide the panel
	 */
	function hidePanel(noAnimation){
		
		if(!noAnimation)
			var noAnimation = false;
		
		if(isPanelHidden() == true)
			return(false);
				
		var newPanelPosY = getHiddenPanelPosition();
		
		if(noAnimation == true)
			g_functions.placeElement(g_objPanel, 0, newPanelPosY);
		else
			placePanelAnimation(newPanelPosY, placeSlider); 
		
		if(g_objButtonHidePanel)
			g_objButtonHidePanel.addClass("ug-button-hidden-mode");
		
		g_temp.isPanelHidden = true;
		
	}

	function showPanel(noAnimation){
		
		if(!noAnimation)
			var noAnimation = false;
		
		if(isPanelHidden() == false)
			return(false);
		
		var galleryHeight = g_objWrapper.height();
		var panelHeight = g_objPanel.outerHeight();
		
		var newPanelPosY = galleryHeight - panelHeight;
		
		if(noAnimation == true)
			g_functions.placeElement(g_objPanel, 0, newPanelPosY);
		else
			placePanelAnimation(newPanelPosY, placeSlider);
		
		if(g_objButtonHidePanel)
			g_objButtonHidePanel.removeClass("ug-button-hidden-mode");
		
		g_temp.isPanelHidden = false;
	}
	
	function onHidePanelClick(event){
		
		event.stopPropagation();
		event.stopImmediatePropagation();
		
		if(g_functions.validateClickTouchstartEvent(event.type) == false)
			return(true);
		
		if(isPanelHidden() == true)
			showPanel();
		else
			hidePanel();
	}

	function initEvents(){
						
		g_objGallery.on(g_gallery.events.SIZE_CHANGE,onSizeChange);
		
		//set the panel buttons
		if(g_objButtonPlay){
			g_functions.addClassOnHover(g_objButtonPlay, "ug-button-hover");
			g_gallery.setPlayButton(g_objButtonPlay);
		}
		
		//init fullscreen button
		if(g_objButtonFullscreen){
			g_functions.addClassOnHover(g_objButtonFullscreen, "ug-button-hover");
			g_gallery.setFullScreenToggleButton(g_objButtonFullscreen);
		}
		
		//init hide panel button
		if(g_objButtonHidePanel){
			g_functions.setButtonMobileReady(g_objButtonHidePanel);
			g_functions.addClassOnHover(g_objButtonHidePanel, "ug-button-hover");
			g_objButtonHidePanel.on("click touchstart", onHidePanelClick);
		}
		
		//on gallery media player events, bring the element to front
		g_objGallery.on(g_gallery.events.SLIDER_ACTION_START, function(){
			
			//set slider to front
			g_objPanel.css("z-index","1");
			g_objSlider.getElement().css("z-index","11");
		});
		
		g_objGallery.on(g_gallery.events.SLIDER_ACTION_END, function(){
			
			//set the panel to front
			g_objPanel.css("z-index","11");
			g_objSlider.getElement().css("z-index","1");
		});
		
	}

	this.destroy = function(){
		
		g_objGallery.off(g_gallery.events.SIZE_CHANGE);
		
		//set the panel buttons
		if(g_objButtonPlay)
			g_gallery.destroyPlayButton(g_objButtonPlay);
		
		//init fullscreen button
		if(g_objButtonFullscreen)
			g_gallery.destroyFullscreenButton(g_objButtonFullscreen);
			
		//init hide panel button
		if(g_objButtonHidePanel)
			g_functions.destroyButton(g_objButtonHidePanel);
		
		g_objGallery.off(g_gallery.events.SLIDER_ACTION_START);
		g_objGallery.off(g_gallery.events.SLIDER_ACTION_END);
		
		if(g_objSlider)
			g_objSlider.destroy();
		
		if(g_objStripPanel)
			g_objStripPanel.destroy();
		
		if(g_objTextPanel)
			g_objTextPanel.destroy();
		
	}

	this.run = function(){
		
		runTheme();
	}

	this.init = function(gallery, customOptions){
		initTheme(gallery, customOptions);
	}
	
}
jQuery(document).ready(function(){jQuery("#gallery").unitegallery();});

