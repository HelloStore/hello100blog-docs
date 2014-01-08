webpackJsonp([1],{14:function(e,t,o){function n(e){return e.replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&")}function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var i=o(38),l=o(23),a=o(18);e.exports=function(e,t){e=e.replace(/\[\[([a-z0-9 \-_\.]+)\]\]/gi,function(e){var t=/\[\[(.+)\]\]/gi.exec(e),o=l(t[1]);return"["+t[1]+"]("+o+".html)"});var o=new i.Renderer;return o.code=function(e,t){var o=!1;"html"===t&&(t="xml");try{o=t?a.highlight(t,e).value:a.highlightAuto(e).value}catch(n){o=r(e)}return"<pre><code>"+o+"</code></pre>"},o.codespan=function(e){e=n(e);var t=a.highlight("javascript",e).value;return"<code>"+t+"</code>"},o.heading=function(e,o,n){return t?"<h"+o+">"+e+"</h"+o+">\n":"<h"+o+'><a class="anchor" href="#'+n.toLowerCase().trim().replace(/[^\w]+/g,"-")+'" id="'+n.toLowerCase().trim().replace(/[^\w]+/g,"-")+'"><i class="glyphicon glyphicon-link"></i></a>'+e+"</h"+o+">\n"},o.table=function(e,t){return'<table class="table table-bordered table-striped table-hover">\n<thead>\n'+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"},i(e,{renderer:o,gfm:!0,tables:!0,breaks:!1,smartLists:!0,smartypants:!0})}},16:function(e){e.exports=function(e){var t={keyword:"in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",literal:"true false null undefined yes no on off",reserved:"case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf",built_in:"npm require console print module exports global window document"},o="[A-Za-z$_][0-9A-Za-z$_]*",n={className:"title",begin:o},r={className:"subst",begin:"#\\{",end:"}",keywords:t},i=[e.BINARY_NUMBER_MODE,e.inherit(e.C_NUMBER_MODE,{starts:{end:"(\\s*/)?",relevance:0}}),{className:"string",begin:"'''",end:"'''",contains:[e.BACKSLASH_ESCAPE]},{className:"string",begin:"'",end:"'",contains:[e.BACKSLASH_ESCAPE],relevance:0},{className:"string",begin:'"""',end:'"""',contains:[e.BACKSLASH_ESCAPE,r]},{className:"string",begin:'"',end:'"',contains:[e.BACKSLASH_ESCAPE,r],relevance:0},{className:"regexp",begin:"///",end:"///",contains:[e.HASH_COMMENT_MODE]},{className:"regexp",begin:"//[gim]*",relevance:0},{className:"regexp",begin:"/\\S(\\\\.|[^\\n])*?/[gim]*(?=\\s|\\W|$)"},{className:"property",begin:"@"+o},{begin:"`",end:"`",excludeBegin:!0,excludeEnd:!0,subLanguage:"javascript"}];return r.contains=i,{keywords:t,contains:i.concat([{className:"comment",begin:"###",end:"###"},e.HASH_COMMENT_MODE,{className:"function",begin:"("+o+"\\s*=\\s*)?(\\(.*\\))?\\s*[-=]>",end:"[-=]>",returnBegin:!0,contains:[n,{className:"params",begin:"\\(",returnBegin:!0,contains:[{begin:/\(/,end:/\)/,keywords:t,contains:["self"].concat(i)}]}]},{className:"class",beginWithKeyword:!0,keywords:"class",end:"$",illegal:"[:\\[\\]]",contains:[{beginWithKeyword:!0,keywords:"extends",endsWithParent:!0,illegal:":",contains:[n]},n]},{className:"attribute",begin:o+":",end:":",returnBegin:!0,excludeEnd:!0}])}}},17:function(e){e.exports=function(e){var t="[a-zA-Z-][a-zA-Z0-9_-]*",o={className:"function",begin:t+"\\(",end:"\\)",contains:["self",e.NUMBER_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]};return{case_insensitive:!0,illegal:"[=/|']",contains:[e.C_BLOCK_COMMENT_MODE,{className:"id",begin:"\\#[A-Za-z0-9_-]+"},{className:"class",begin:"\\.[A-Za-z0-9_-]+",relevance:0},{className:"attr_selector",begin:"\\[",end:"\\]",illegal:"$"},{className:"pseudo",begin:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"},{className:"at_rule",begin:"@(font-face|page)",lexems:"[a-z-]+",keywords:"font-face page"},{className:"at_rule",begin:"@",end:"[{;]",contains:[{className:"keyword",begin:/\S+/},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,contains:[o,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.NUMBER_MODE]}]},{className:"tag",begin:t,relevance:0},{className:"rules",begin:"{",end:"}",illegal:"[^\\s]",relevance:0,contains:[e.C_BLOCK_COMMENT_MODE,{className:"rule",begin:"[^\\s]",returnBegin:!0,end:";",endsWithParent:!0,contains:[{className:"attribute",begin:"[A-Z\\_\\.\\-]+",end:":",excludeEnd:!0,illegal:"[^\\s]",starts:{className:"value",endsWithParent:!0,excludeEnd:!0,contains:[o,e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,e.C_BLOCK_COMMENT_MODE,{className:"hexcolor",begin:"#[0-9A-Fa-f]+"},{className:"important",begin:"!important"}]}}]}]}]}}},18:function(e,t,o){var n=new function(){function e(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function t(e){for(var t=e.firstChild;t;t=t.nextSibling){if("CODE"==t.nodeName.toUpperCase())return t;if(3!=t.nodeType||!t.nodeValue.match(/\s+/))break}}function o(e,t){return Array.prototype.map.call(e.childNodes,function(e){return 3==e.nodeType?t?e.nodeValue.replace(/\n/g,""):e.nodeValue:"BR"==e.nodeName.toUpperCase()?"\n":o(e,t)}).join("")}function r(e){var t=(e.className+" "+(e.parentNode?e.parentNode.className:"")).split(/\s+/);t=t.map(function(e){return e.replace(/^language-/,"")});for(var o=0;o<t.length;o++)if(m[t[o]]||"no-highlight"==t[o])return t[o]}function i(e){var t=[];return function o(e,n){for(var r=e.firstChild;r;r=r.nextSibling)3==r.nodeType?n+=r.nodeValue.length:"BR"==r.nodeName.toUpperCase()?n+=1:1==r.nodeType&&(t.push({event:"start",offset:n,node:r}),n=o(r,n),t.push({event:"stop",offset:n,node:r}));return n}(e,0),t}function l(t,o,n){function r(){return t.length&&o.length?t[0].offset!=o[0].offset?t[0].offset<o[0].offset?t:o:"start"==o[0].event?t:o:t.length?t:o}function i(t){function o(t){return" "+t.nodeName+'="'+e(t.value)+'"'}d+="<"+t.nodeName.toLowerCase()+Array.prototype.map.call(t.attributes,o).join("")+">"}function l(e){d+="</"+e.nodeName.toLowerCase()+">"}function a(e){("start"==e.event?i:l)(e.node)}for(var s=0,d="",c=[];t.length||o.length;){var h=r();if(d+=e(n.substr(s,h[0].offset-s)),s=h[0].offset,h==t){c.reverse().forEach(l);do a(h.splice(0,1)[0]),h=r();while(h==t&&h.length&&h[0].offset==s);c.reverse().forEach(i)}else"start"==h[0].event?c.push(h[0].node):c.pop(),a(h.splice(0,1)[0])}return d+e(n.substr(s))}function a(e){function t(e){return e&&e.source||e}function o(o,n){return RegExp(t(o),"m"+(e.case_insensitive?"i":"")+(n?"g":""))}function r(i,l){function a(t,o){e.case_insensitive&&(o=o.toLowerCase()),o.split(" ").forEach(function(e){var o=e.split("|");d[o[0]]=[t,o[1]?Number(o[1]):1],s.push(o[0])})}if(!i.compiled){i.compiled=!0;var s=[];if(i.keywords){var d={};if(i.lexemsRe=o(i.lexems||"\\b"+n.IDENT_RE+"\\b(?!\\.)",!0),"string"==typeof i.keywords)a("keyword",i.keywords);else for(var c in i.keywords)i.keywords.hasOwnProperty(c)&&a(c,i.keywords[c]);i.keywords=d}l&&(i.beginWithKeyword&&(i.begin="\\b("+s.join("|")+")\\b(?!\\.)\\s*"),i.beginRe=o(i.begin?i.begin:"\\B|\\b"),i.end||i.endsWithParent||(i.end="\\B|\\b"),i.end&&(i.endRe=o(i.end)),i.terminator_end=t(i.end)||"",i.endsWithParent&&l.terminator_end&&(i.terminator_end+=(i.end?"|":"")+l.terminator_end)),i.illegal&&(i.illegalRe=o(i.illegal)),void 0===i.relevance&&(i.relevance=1),i.contains||(i.contains=[]);for(var h=0;h<i.contains.length;h++)"self"==i.contains[h]&&(i.contains[h]=i),r(i.contains[h],i);i.starts&&r(i.starts,l);for(var p=[],h=0;h<i.contains.length;h++)p.push(t(i.contains[h].begin));i.terminator_end&&p.push(t(i.terminator_end)),i.illegal&&p.push(t(i.illegal)),i.terminators=p.length?o(p.join("|"),!0):{exec:function(){return null}}}}r(e)}function s(t,o,n,r){function i(e,t){for(var o=0;o<t.contains.length;o++){var n=t.contains[o].beginRe.exec(e);if(n&&0==n.index)return t.contains[o]}}function l(e,t){return e.end&&e.endRe.test(t)?e:e.endsWithParent?l(e.parent,t):void 0}function c(e,t){return!n&&t.illegal&&t.illegalRe.test(e)}function h(e,t){var o=x.case_insensitive?t[0].toLowerCase():t[0];return e.keywords.hasOwnProperty(o)&&e.keywords[o]}function p(){var t=e(k);if(!y.keywords)return t;var o="",n=0;y.lexemsRe.lastIndex=0;for(var r=y.lexemsRe.exec(t);r;){o+=t.substr(n,r.index-n);var i=h(y,r);i?(X+=i[1],o+='<span class="'+i[0]+'">'+r[0]+"</span>"):o+=r[0],n=y.lexemsRe.lastIndex,r=y.lexemsRe.exec(t)}return o+t.substr(n)}function g(){if(y.subLanguage&&!m[y.subLanguage])return e(k);var t="continuous"==y.subLanguageMode?y.top:void 0,o=y.subLanguage?s(y.subLanguage,k,!0,t):d(k);return y.relevance>0&&(X+=o.keyword_count,_+=o.relevance),y.top=o.top,'<span class="'+o.language+'">'+o.value+"</span>"}function f(){return void 0!==y.subLanguage?g():p()}function b(t,o){var n=t.className?'<span class="'+t.className+'">':"";t.returnBegin?(w+=n,k=""):t.excludeBegin?(w+=e(o)+n,k=""):(w+=n,k=o),y=Object.create(t,{parent:{value:y}})}function u(t,o){if(k+=t,void 0===o)return w+=f(),0;var n=i(o,y);if(n)return w+=f(),b(n,o),n.returnBegin?0:o.length;var r=l(y,o);if(r){var a=y;a.returnEnd||a.excludeEnd||(k+=o),w+=f();do y.className&&(w+="</span>"),_+=y.relevance,y=y.parent;while(y!=r.parent);return a.excludeEnd&&(w+=e(o)),k="",r.starts&&b(r.starts,""),a.returnEnd?0:o.length}if(c(o,y))throw new Error('Illegal lexem "'+o+'" for mode "'+(y.className||"<unnamed>")+'"');return k+=o,o.length||1}var x=m[t];if(!x)throw new Error('Unknown language: "'+t+'"');a(x);for(var y=r||x,w="",v=y;v!=x;v=v.parent)v.className&&(w='<span class="'+v.className+'">'+w);var k="",_=0,X=0;try{for(var Y,z,E=0;;){if(y.terminators.lastIndex=E,Y=y.terminators.exec(o),!Y)break;z=u(o.substr(E,Y.index-E),Y[0]),E=Y.index+z}u(o.substr(E));for(var v=y;v.parent;v=v.parent)v.className&&(w+="</span>");return{relevance:_,keyword_count:X,value:w,language:t,top:y}}catch(Z){if(-1!=Z.message.indexOf("Illegal"))return{relevance:0,keyword_count:0,value:e(o)};throw Z}}function d(t){var o={keyword_count:0,relevance:0,value:e(t)},n=o;for(var r in m)if(m.hasOwnProperty(r)){var i=s(r,t,!1);i.language=r,i.keyword_count+i.relevance>n.keyword_count+n.relevance&&(n=i),i.keyword_count+i.relevance>o.keyword_count+o.relevance&&(n=o,o=i)}return n.language&&(o.second_best=n),o}function c(e,t,o){return t&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,o){return o.replace(/\t/g,t)})),o&&(e=e.replace(/\n/g,"<br>")),e}function h(e,t,n){var a=o(e,n),h=r(e);if("no-highlight"!=h){var p=h?s(h,a,!0):d(a);h=p.language;var g=i(e);if(g.length){var m=document.createElementNS("http://www.w3.org/1999/xhtml","pre");m.innerHTML=p.value,p.value=l(g,i(m),a)}p.value=c(p.value,t,n);var f=e.className;f.match("(\\s|^)(language-)?"+h+"(\\s|$)")||(f=f?f+" "+h:h),e.innerHTML=p.value,e.className=f,e.result={language:h,kw:p.keyword_count,re:p.relevance},p.second_best&&(e.second_best={language:p.second_best.language,kw:p.second_best.keyword_count,re:p.second_best.relevance})}}function p(){p.called||(p.called=!0,Array.prototype.map.call(document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml","pre"),t).filter(Boolean).forEach(function(e){h(e,n.tabReplace)}))}function g(){window.addEventListener("DOMContentLoaded",p,!1),window.addEventListener("load",p,!1)}var m={};this.LANGUAGES=m,this.highlight=s,this.highlightAuto=d,this.fixMarkup=c,this.highlightBlock=h,this.initHighlighting=p,this.initHighlightingOnLoad=g,this.IDENT_RE="[a-zA-Z][a-zA-Z0-9_]*",this.UNDERSCORE_IDENT_RE="[a-zA-Z_][a-zA-Z0-9_]*",this.NUMBER_RE="\\b\\d+(\\.\\d+)?",this.C_NUMBER_RE="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",this.BINARY_NUMBER_RE="\\b(0b[01]+)",this.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",this.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},this.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[this.BACKSLASH_ESCAPE],relevance:0},this.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[this.BACKSLASH_ESCAPE],relevance:0},this.C_LINE_COMMENT_MODE={className:"comment",begin:"//",end:"$"},this.C_BLOCK_COMMENT_MODE={className:"comment",begin:"/\\*",end:"\\*/"},this.HASH_COMMENT_MODE={className:"comment",begin:"#",end:"$"},this.NUMBER_MODE={className:"number",begin:this.NUMBER_RE,relevance:0},this.C_NUMBER_MODE={className:"number",begin:this.C_NUMBER_RE,relevance:0},this.BINARY_NUMBER_MODE={className:"number",begin:this.BINARY_NUMBER_RE,relevance:0},this.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gim]*/,illegal:/\n/,contains:[this.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[this.BACKSLASH_ESCAPE]}]},this.inherit=function(e,t){var o={};for(var n in e)o[n]=e[n];if(t)for(var n in t)o[n]=t[n];return o}};n.LANGUAGES.coffeescript=o(16)(n),n.LANGUAGES.css=o(17)(n),n.LANGUAGES.javascript=o(19)(n),n.LANGUAGES.json=o(20)(n),n.LANGUAGES.xml=o(21)(n),e.exports=n},19:function(e){e.exports=function(e){return{keywords:{keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const",literal:"true false null undefined NaN Infinity"},contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.C_NUMBER_MODE,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{begin:/</,end:/>;/,subLanguage:"xml"}],relevance:0},{className:"function",beginWithKeyword:!0,end:/{/,keywords:"function",contains:[{className:"title",begin:/[A-Za-z$_][0-9A-Za-z$_]*/},{className:"params",begin:/\(/,end:/\)/,contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],illegal:/["'\(]/}],illegal:/\[|%/}]}}},20:function(e){e.exports=function(e){var t={literal:"true false null"},o=[e.QUOTE_STRING_MODE,e.C_NUMBER_MODE],n={className:"value",end:",",endsWithParent:!0,excludeEnd:!0,contains:o,keywords:t},r={begin:"{",end:"}",contains:[{className:"attribute",begin:'\\s*"',end:'"\\s*:\\s*',excludeBegin:!0,excludeEnd:!0,contains:[e.BACKSLASH_ESCAPE],illegal:"\\n",starts:n}],illegal:"\\S"},i={begin:"\\[",end:"\\]",contains:[e.inherit(n,{className:null})],illegal:"\\S"};return o.splice(o.length,0,r,i),{contains:o,keywords:t,illegal:"\\S"}}},21:function(e){e.exports=function(){var e="[A-Za-z0-9\\._:-]+",t={endsWithParent:!0,relevance:0,contains:[{className:"attribute",begin:e,relevance:0},{begin:'="',returnBegin:!0,end:'"',contains:[{className:"value",begin:'"',endsWithParent:!0}]},{begin:"='",returnBegin:!0,end:"'",contains:[{className:"value",begin:"'",endsWithParent:!0}]},{begin:"=",contains:[{className:"value",begin:"[^\\s/>]+"}]}]};return{case_insensitive:!0,contains:[{className:"pi",begin:"<\\?",end:"\\?>",relevance:10},{className:"doctype",begin:"<!DOCTYPE",end:">",relevance:10,contains:[{begin:"\\[",end:"\\]"}]},{className:"comment",begin:"<!--",end:"-->",relevance:10},{className:"cdata",begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},{className:"tag",begin:"<style(?=\\s|>|$)",end:">",keywords:{title:"style"},contains:[t],starts:{end:"</style>",returnEnd:!0,subLanguage:"css"}},{className:"tag",begin:"<script(?=\\s|>|$)",end:">",keywords:{title:"script"},contains:[t],starts:{end:"</script>",returnEnd:!0,subLanguage:"javascript"}},{begin:"<%",end:"%>",subLanguage:"vbscript"},{className:"tag",begin:"</?",end:"/?>",relevance:0,contains:[{className:"title",begin:"[^ /><]+"},t]}]}}},23:function(e){e.exports=function(e){return e?e.replace(/[ _]/g,"-").toLowerCase():e}},38:function(e,t,o){(function(t,o){(function(){function t(e){this.tokens=[],this.tokens.links={},this.options=e||d.defaults,this.rules=c.normal,this.options.gfm&&(this.rules=this.options.tables?c.tables:c.gfm)}function o(e,t){if(this.options=t||d.defaults,this.links=e,this.rules=h.normal,this.renderer=this.options.renderer||new n,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.rules=this.options.breaks?h.breaks:h.gfm:this.options.pedantic&&(this.rules=h.pedantic)}function n(){}function r(e){this.tokens=[],this.token=null,this.options=e||d.defaults,this.options.renderer=this.options.renderer||new n,this.renderer=this.options.renderer}function i(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function l(e,t){return e=e.source,t=t||"",function o(n,r){return n?(r=r.source||r,r=r.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(n,r),o):new RegExp(e,t)}}function a(){}function s(e){for(var t,o,n=1;n<arguments.length;n++){t=arguments[n];for(o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}function d(e,o,n){if(n||"function"==typeof o){n||(n=o,o=null),o=s({},d.defaults,o||{});var l,a,c=o.highlight,h=0;try{l=t.lex(e,o)}catch(p){return n(p)}a=l.length;var g=function(){var e,t;try{e=r.parse(l,o)}catch(i){t=i}return o.highlight=c,t?n(t):n(null,e)};if(!c||c.length<3)return g();if(delete o.highlight,!a)return g();for(;h<l.length;h++)!function(e){return"code"!==e.type?--a||g():c(e.text,e.lang,function(t,o){return null==o||o===e.text?--a||g():(e.text=o,e.escaped=!0,--a||g(),void 0)})}(l[h])}else try{return o&&(o=s({},d.defaults,o)),r.parse(t.lex(e,o),o)}catch(p){if(p.message+="\nPlease report this to https://github.com/chjj/marked.",(o||d.defaults).silent)return"<p>An error occured:</p><pre>"+i(p.message+"",!0)+"</pre>";throw p}}var c={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:a,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:a,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment|closed|closing) *(?:\n{2,}|\s*$)/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:a,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};c.bullet=/(?:[*+-]|\d+\.)/,c.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,c.item=l(c.item,"gm")(/bull/g,c.bullet)(),c.list=l(c.list)(/bull/g,c.bullet)("hr",/\n+(?=(?: *[-*_]){3,} *(?:\n+|$))/)(),c._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|@)\\b",c.html=l(c.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,c._tag)(),c.paragraph=l(c.paragraph)("hr",c.hr)("heading",c.heading)("lheading",c.lheading)("blockquote",c.blockquote)("tag","<"+c._tag)("def",c.def)(),c.normal=s({},c),c.gfm=s({},c.normal,{fences:/^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,paragraph:/^/}),c.gfm.paragraph=l(c.paragraph)("(?!","(?!"+c.gfm.fences.source.replace("\\1","\\2")+"|"+c.list.source.replace("\\1","\\3")+"|")(),c.tables=s({},c.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),t.rules=c,t.lex=function(e,o){var n=new t(o);return n.lex(e)},t.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},t.prototype.token=function(e,t){for(var o,n,r,i,l,a,s,d,h,e=e.replace(/^ +$/gm,"");e;)if((r=this.rules.newline.exec(e))&&(e=e.substring(r[0].length),r[0].length>1&&this.tokens.push({type:"space"})),r=this.rules.code.exec(e))e=e.substring(r[0].length),r=r[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?r:r.replace(/\n+$/,"")});else if(r=this.rules.fences.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"code",lang:r[2],text:r[3]});else if(r=this.rules.heading.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"heading",depth:r[1].length,text:r[2]});else if(t&&(r=this.rules.nptable.exec(e))){for(e=e.substring(r[0].length),a={type:"table",header:r[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:r[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:r[3].replace(/\n$/,"").split("\n")},d=0;d<a.align.length;d++)a.align[d]=/^ *-+: *$/.test(a.align[d])?"right":/^ *:-+: *$/.test(a.align[d])?"center":/^ *:-+ *$/.test(a.align[d])?"left":null;for(d=0;d<a.cells.length;d++)a.cells[d]=a.cells[d].split(/ *\| */);this.tokens.push(a)}else if(r=this.rules.lheading.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"heading",depth:"="===r[2]?1:2,text:r[1]});else if(r=this.rules.hr.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"hr"});else if(r=this.rules.blockquote.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"blockquote_start"}),r=r[0].replace(/^ *> ?/gm,""),this.token(r,t),this.tokens.push({type:"blockquote_end"});else if(r=this.rules.list.exec(e)){for(e=e.substring(r[0].length),i=r[2],this.tokens.push({type:"list_start",ordered:i.length>1}),r=r[0].match(this.rules.item),o=!1,h=r.length,d=0;h>d;d++)a=r[d],s=a.length,a=a.replace(/^ *([*+-]|\d+\.) +/,""),~a.indexOf("\n ")&&(s-=a.length,a=this.options.pedantic?a.replace(/^ {1,4}/gm,""):a.replace(new RegExp("^ {1,"+s+"}","gm"),"")),this.options.smartLists&&d!==h-1&&(l=c.bullet.exec(r[d+1])[0],i===l||i.length>1&&l.length>1||(e=r.slice(d+1).join("\n")+e,d=h-1)),n=o||/\n\n(?!\s*$)/.test(a),d!==h-1&&(o="\n"===a.charAt(a.length-1),n||(n=o)),this.tokens.push({type:n?"loose_item_start":"list_item_start"}),this.token(a,!1),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(r=this.rules.html.exec(e))e=e.substring(r[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:"pre"===r[1]||"script"===r[1]||"style"===r[1],text:r[0]});else if(t&&(r=this.rules.def.exec(e)))e=e.substring(r[0].length),this.tokens.links[r[1].toLowerCase()]={href:r[2],title:r[3]};else if(t&&(r=this.rules.table.exec(e))){for(e=e.substring(r[0].length),a={type:"table",header:r[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:r[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:r[3].replace(/(?: *\| *)?\n$/,"").split("\n")},d=0;d<a.align.length;d++)a.align[d]=/^ *-+: *$/.test(a.align[d])?"right":/^ *:-+: *$/.test(a.align[d])?"center":/^ *:-+ *$/.test(a.align[d])?"left":null;for(d=0;d<a.cells.length;d++)a.cells[d]=a.cells[d].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(a)}else if(t&&(r=this.rules.paragraph.exec(e)))e=e.substring(r[0].length),this.tokens.push({type:"paragraph",text:"\n"===r[1].charAt(r[1].length-1)?r[1].slice(0,-1):r[1]});else if(r=this.rules.text.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"text",text:r[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var h={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:a,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:a,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};h._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,h._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,h.link=l(h.link)("inside",h._inside)("href",h._href)(),h.reflink=l(h.reflink)("inside",h._inside)(),h.normal=s({},h),h.pedantic=s({},h.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),h.gfm=s({},h.normal,{escape:l(h.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:l(h.text)("]|","~]|")("|","|https?://|")()}),h.breaks=s({},h.gfm,{br:l(h.br)("{2,}","*")(),text:l(h.gfm.text)("{2,}","*")()}),o.rules=h,o.output=function(e,t,n){var r=new o(t,n);return r.output(e)},o.prototype.output=function(e){for(var t,o,n,r,l="";e;)if(r=this.rules.escape.exec(e))e=e.substring(r[0].length),l+=r[1];else if(r=this.rules.autolink.exec(e))e=e.substring(r[0].length),"@"===r[2]?(o=":"===r[1].charAt(6)?this.mangle(r[1].substring(7)):this.mangle(r[1]),n=this.mangle("mailto:")+o):(o=i(r[1]),n=o),l+=this.renderer.link(n,null,o);else if(r=this.rules.url.exec(e))e=e.substring(r[0].length),o=i(r[1]),n=o,l+=this.renderer.link(n,null,o);else if(r=this.rules.tag.exec(e))e=e.substring(r[0].length),l+=this.options.sanitize?i(r[0]):r[0];else if(r=this.rules.link.exec(e))e=e.substring(r[0].length),l+=this.outputLink(r,{href:r[2],title:r[3]});else if((r=this.rules.reflink.exec(e))||(r=this.rules.nolink.exec(e))){if(e=e.substring(r[0].length),t=(r[2]||r[1]).replace(/\s+/g," "),t=this.links[t.toLowerCase()],!t||!t.href){l+=r[0].charAt(0),e=r[0].substring(1)+e;continue}l+=this.outputLink(r,t)}else if(r=this.rules.strong.exec(e))e=e.substring(r[0].length),l+=this.renderer.strong(this.output(r[2]||r[1]));else if(r=this.rules.em.exec(e))e=e.substring(r[0].length),l+=this.renderer.em(this.output(r[2]||r[1]));else if(r=this.rules.code.exec(e))e=e.substring(r[0].length),l+=this.renderer.codespan(i(r[2],!0));else if(r=this.rules.br.exec(e))e=e.substring(r[0].length),l+=this.renderer.br();else if(r=this.rules.del.exec(e))e=e.substring(r[0].length),l+=this.renderer.del(this.output(r[1]));else if(r=this.rules.text.exec(e))e=e.substring(r[0].length),l+=i(this.smartypants(r[0]));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return l},o.prototype.outputLink=function(e,t){var o=i(t.href),n=t.title?i(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(o,n,this.output(e[1])):this.renderer.image(o,n,i(e[1]))},o.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/--/g,"—").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},o.prototype.mangle=function(e){for(var t,o="",n=e.length,r=0;n>r;r++)t=e.charCodeAt(r),Math.random()>.5&&(t="x"+t.toString(16)),o+="&#"+t+";";return o},n.prototype.code=function(e,t,o,n){if(n=n||{},n.highlight){var r=n.highlight(e,t);null!=r&&r!==e&&(o=!0,e=r)}return t?'<pre><code class="'+n.langPrefix+t+'">'+(o?e:i(e))+"\n</code></pre>\n":"<pre><code>"+(o?e:i(e,!0))+"\n</code></pre>"},n.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},n.prototype.html=function(e){return e},n.prototype.heading=function(e,t,o,n){return"<h"+t+' id="'+n.headerPrefix+o.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"},n.prototype.hr=function(){return"<hr>\n"},n.prototype.list=function(e,t){var o=t?"ol":"ul";return"<"+o+">\n"+e+"</"+o+">\n"},n.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},n.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},n.prototype.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"},n.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},n.prototype.tablecell=function(e,t){var o=t.header?"th":"td",n=t.align?"<"+o+' style="text-align:'+t.align+'">':"<"+o+">";return n+e+"</"+o+">\n"},n.prototype.strong=function(e){return"<strong>"+e+"</strong>"},n.prototype.em=function(e){return"<em>"+e+"</em>"},n.prototype.codespan=function(e){return"<code>"+e+"</code>"},n.prototype.br=function(){return"<br>"},n.prototype.del=function(e){return"<del>"+e+"</del>"},n.prototype.link=function(e,t,o){var n='<a href="'+e+'"';return t&&(n+=' title="'+t+'"'),n+=">"+o+"</a>"},n.prototype.image=function(e,t,o){var n='<img src="'+e+'" alt="'+o+'"';return t&&(n+=' title="'+t+'"'),n+=">"},r.parse=function(e,t,o){var n=new r(t,o);return n.parse(e)},r.prototype.parse=function(e){this.inline=new o(e.links,this.options,this.renderer),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},r.prototype.next=function(){return this.token=this.tokens.pop()},r.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},r.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},r.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text,this.options);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped,this.options);case"table":var e,t,o,n,r,i="",l="";for(o="",e=0;e<this.token.header.length;e++)n={header:!0,align:this.token.align[e]},o+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(i+=this.renderer.tablerow(o),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],o="",r=0;r<t.length;r++)o+=this.renderer.tablecell(this.inline.output(t[r]),{header:!1,align:this.token.align[r]});l+=this.renderer.tablerow(o)}return this.renderer.table(i,l);case"blockquote_start":for(var l="";"blockquote_end"!==this.next().type;)l+=this.tok();return this.renderer.blockquote(l);case"list_start":for(var l="",a=this.token.ordered;"list_end"!==this.next().type;)l+=this.tok();return this.renderer.list(l,a);case"list_item_start":for(var l="";"list_item_end"!==this.next().type;)l+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(l);case"loose_item_start":for(var l="";"list_item_end"!==this.next().type;)l+=this.tok();return this.renderer.listitem(l);case"html":var s=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);return this.renderer.html(s);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}},a.exec=a,d.options=d.setOptions=function(e){return s(d.defaults,e),d},d.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new n},d.Parser=r,d.parser=r.parse,d.Renderer=n,d.Lexer=t,d.lexer=t.lex,d.InlineLexer=o,d.inlineLexer=o.output,d.parse=d,e.exports=d}).call(function(){return this||("undefined"!=typeof window?window:o)}())}).call(t,o,function(){return this}())}});