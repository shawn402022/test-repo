import{g as je,c as F}from"./index-0d1a2291.js";function ke(L,_){for(var y=0;y<_.length;y++){const d=_[y];if(typeof d!="string"&&!Array.isArray(d)){for(const v in d)if(v!=="default"&&!(v in L)){const m=Object.getOwnPropertyDescriptor(d,v);m&&Object.defineProperty(L,v,m.get?m:{enumerable:!0,get:()=>d[v]})}}}return Object.freeze(Object.defineProperty(L,Symbol.toStringTag,{value:"Module"}))}var V={exports:{}};(function(L,_){(function(y,d){d(_)})(F,function(y){function d(e,r){e.super_=r,e.prototype=Object.create(r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function v(e,r){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),r&&r.length&&Object.defineProperty(this,"path",{value:r,enumerable:!0})}function m(e,r,t){m.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:r,enumerable:!0}),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function T(e,r){T.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function M(e,r){M.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:r,enumerable:!0})}function G(e,r,t){G.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:r,enumerable:!0}),Object.defineProperty(this,"item",{value:t,enumerable:!0})}function B(e,r,t){var n=e.slice((t||r)+1||e.length);return e.length=r<0?e.length+r:r,e.push.apply(e,n),e}function D(e){var r=typeof e>"u"?"undefined":E(e);return r!=="object"?r:e===Math?"math":e===null?"null":Array.isArray(e)?"array":Object.prototype.toString.call(e)==="[object Date]"?"date":typeof e.toString=="function"&&/^\/.*\//.test(e.toString())?"regexp":"object"}function w(e,r,t,n,o,a,i){o=o||[],i=i||[];var u=o.slice(0);if(typeof a<"u"){if(n){if(typeof n=="function"&&n(u,a))return;if((typeof n>"u"?"undefined":E(n))==="object"){if(n.prefilter&&n.prefilter(u,a))return;if(n.normalize){var g=n.normalize(u,a,e,r);g&&(e=g[0],r=g[1])}}}u.push(a)}D(e)==="regexp"&&D(r)==="regexp"&&(e=e.toString(),r=r.toString());var p=typeof e>"u"?"undefined":E(e),s=typeof r>"u"?"undefined":E(r),c=p!=="undefined"||i&&i[i.length-1].lhs&&i[i.length-1].lhs.hasOwnProperty(a),h=s!=="undefined"||i&&i[i.length-1].rhs&&i[i.length-1].rhs.hasOwnProperty(a);if(!c&&h)t(new T(u,r));else if(!h&&c)t(new M(u,e));else if(D(e)!==D(r))t(new m(u,e,r));else if(D(e)==="date"&&e-r!==0)t(new m(u,e,r));else if(p==="object"&&e!==null&&r!==null)if(i.filter(function(l){return l.lhs===e}).length)e!==r&&t(new m(u,e,r));else{if(i.push({lhs:e,rhs:r}),Array.isArray(e)){var f;for(e.length,f=0;f<e.length;f++)f>=r.length?t(new G(u,f,new M(void 0,e[f]))):w(e[f],r[f],t,n,u,f,i);for(;f<r.length;)t(new G(u,f,new T(void 0,r[f++])))}else{var j=Object.keys(e),x=Object.keys(r);j.forEach(function(l,A){var N=x.indexOf(l);N>=0?(w(e[l],r[l],t,n,u,l,i),x=B(x,N)):w(e[l],void 0,t,n,u,l,i)}),x.forEach(function(l){w(void 0,r[l],t,n,u,l,i)})}i.length=i.length-1}else e!==r&&(p==="number"&&isNaN(e)&&isNaN(r)||t(new m(u,e,r)))}function O(e,r,t,n){return n=n||[],w(e,r,function(o){o&&n.push(o)},t),n.length?n:void 0}function I(e,r,t){if(t.path&&t.path.length){var n,o=e[r],a=t.path.length-1;for(n=0;n<a;n++)o=o[t.path[n]];switch(t.kind){case"A":I(o[t.path[n]],t.index,t.item);break;case"D":delete o[t.path[n]];break;case"E":case"N":o[t.path[n]]=t.rhs}}else switch(t.kind){case"A":I(e[r],t.index,t.item);break;case"D":e=B(e,r);break;case"E":case"N":e[r]=t.rhs}return e}function W(e,r,t){if(e&&r&&t&&t.kind){for(var n=e,o=-1,a=t.path?t.path.length-1:0;++o<a;)typeof n[t.path[o]]>"u"&&(n[t.path[o]]=typeof t.path[o]=="number"?[]:{}),n=n[t.path[o]];switch(t.kind){case"A":I(t.path?n[t.path[o]]:n,t.index,t.item);break;case"D":delete n[t.path[o]];break;case"E":case"N":n[t.path[o]]=t.rhs}}}function K(e,r,t){if(t.path&&t.path.length){var n,o=e[r],a=t.path.length-1;for(n=0;n<a;n++)o=o[t.path[n]];switch(t.kind){case"A":K(o[t.path[n]],t.index,t.item);break;case"D":o[t.path[n]]=t.lhs;break;case"E":o[t.path[n]]=t.lhs;break;case"N":delete o[t.path[n]]}}else switch(t.kind){case"A":K(e[r],t.index,t.item);break;case"D":e[r]=t.lhs;break;case"E":e[r]=t.lhs;break;case"N":e=B(e,r)}return e}function ie(e,r,t){if(e&&r&&t&&t.kind){var n,o,a=e;for(o=t.path.length-1,n=0;n<o;n++)typeof a[t.path[n]]>"u"&&(a[t.path[n]]={}),a=a[t.path[n]];switch(t.kind){case"A":K(a[t.path[n]],t.index,t.item);break;case"D":a[t.path[n]]=t.lhs;break;case"E":a[t.path[n]]=t.lhs;break;case"N":delete a[t.path[n]]}}}function ue(e,r,t){if(e&&r){var n=function(o){t&&!t(e,r,o)||W(e,r,o)};w(e,r,n)}}function fe(e){return"color: "+te[e].color+"; font-weight: bold"}function le(e){var r=e.kind,t=e.path,n=e.lhs,o=e.rhs,a=e.index,i=e.item;switch(r){case"E":return[t.join("."),n,"→",o];case"N":return[t.join("."),o];case"D":return[t.join(".")];case"A":return[t.join(".")+"["+a+"]",i];default:return[]}}function ce(e,r,t,n){var o=O(e,r);try{n?t.groupCollapsed("diff"):t.group("diff")}catch{t.log("diff")}o?o.forEach(function(a){var i=a.kind,u=le(a);t.log.apply(t,["%c "+te[i].text,fe(i)].concat(ee(u)))}):t.log("—— no diff ——");try{t.groupEnd()}catch{t.log("—— diff end —— ")}}function z(e,r,t,n){switch(typeof e>"u"?"undefined":E(e)){case"object":return typeof e[n]=="function"?e[n].apply(e,ee(t)):e[n];case"function":return e(r);default:return e}}function se(e){var r=e.timestamp,t=e.duration;return function(n,o,a){var i=["action"];return i.push("%c"+String(n.type)),r&&i.push("%c@ "+o),t&&i.push("%c(in "+a.toFixed(2)+" ms)"),i.join(" ")}}function de(e,r){var t=r.logger,n=r.actionTransformer,o=r.titleFormatter,a=o===void 0?se(r):o,i=r.collapsed,u=r.colors,g=r.level,p=r.diff,s=typeof r.titleFormatter>"u";e.forEach(function(c,h){var f=c.started,j=c.startedTime,x=c.action,l=c.prevState,A=c.error,N=c.took,k=c.nextState,Y=e[h+1];Y&&(k=Y.prevState,N=Y.started-f);var b=n(x),oe=typeof i=="function"?i(function(){return k},x,c):i,he=pe(j),ye=u.title?"color: "+u.title(b)+";":"",P=["color: gray; font-weight: lighter;"];P.push(ye),r.timestamp&&P.push("color: gray; font-weight: lighter;"),r.duration&&P.push("color: gray; font-weight: lighter;");var C=a(b,he,N);try{oe?u.title&&s?t.groupCollapsed.apply(t,["%c "+C].concat(P)):t.groupCollapsed(C):u.title&&s?t.group.apply(t,["%c "+C].concat(P)):t.group(C)}catch{t.log(C)}var q=z(g,b,[l],"prevState"),J=z(g,b,[b],"action"),Q=z(g,b,[A,l],"error"),U=z(g,b,[k],"nextState");if(q)if(u.prevState){var ve="color: "+u.prevState(l)+"; font-weight: bold";t[q]("%c prev state",ve,l)}else t[q]("prev state",l);if(J)if(u.action){var me="color: "+u.action(b)+"; font-weight: bold";t[J]("%c action    ",me,b)}else t[J]("action    ",b);if(A&&Q)if(u.error){var be="color: "+u.error(A,l)+"; font-weight: bold;";t[Q]("%c error     ",be,A)}else t[Q]("error     ",A);if(U)if(u.nextState){var xe="color: "+u.nextState(k)+"; font-weight: bold";t[U]("%c next state",xe,k)}else t[U]("next state",k);p&&ce(l,k,t,oe);try{t.groupEnd()}catch{t.log("—— log end ——")}})}function X(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=Object.assign({},re,e),t=r.logger,n=r.stateTransformer,o=r.errorTransformer,a=r.predicate,i=r.logErrors,u=r.diffPredicate;if(typeof t>"u")return function(){return function(p){return function(s){return p(s)}}};if(e.getState&&e.dispatch)return console.error(`[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:
// Logger with default options
import { logger } from 'redux-logger'
const store = createStore(
  reducer,
  applyMiddleware(logger)
)
// Or you can create your own logger with custom options http://bit.ly/redux-logger-options
import createLogger from 'redux-logger'
const logger = createLogger({
  // ...options
});
const store = createStore(
  reducer,
  applyMiddleware(logger)
)
`),function(){return function(p){return function(s){return p(s)}}};var g=[];return function(p){var s=p.getState;return function(c){return function(h){if(typeof a=="function"&&!a(s,h))return c(h);var f={};g.push(f),f.started=Z.now(),f.startedTime=new Date,f.prevState=n(s()),f.action=h;var j=void 0;if(i)try{j=c(h)}catch(l){f.error=o(l)}else j=c(h);f.took=Z.now()-f.started,f.nextState=n(s());var x=r.diff&&typeof u=="function"?u(s,h):r.diff;if(de(g,Object.assign({},r,{diff:x})),g.length=0,f.error)throw f.error;return j}}}}var H,S,ge=function(e,r){return new Array(r+1).join(e)},R=function(e,r){return ge("0",r-e.toString().length)+e},pe=function(e){return R(e.getHours(),2)+":"+R(e.getMinutes(),2)+":"+R(e.getSeconds(),2)+"."+R(e.getMilliseconds(),3)},Z=typeof performance<"u"&&performance!==null&&typeof performance.now=="function"?performance:Date,E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ee=function(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r];return t}return Array.from(e)},$=[];H=(typeof F>"u"?"undefined":E(F))==="object"&&F?F:typeof window<"u"?window:{},S=H.DeepDiff,S&&$.push(function(){typeof S<"u"&&H.DeepDiff===O&&(H.DeepDiff=S,S=void 0)}),d(m,v),d(T,v),d(M,v),d(G,v),Object.defineProperties(O,{diff:{value:O,enumerable:!0},observableDiff:{value:w,enumerable:!0},applyDiff:{value:ue,enumerable:!0},applyChange:{value:W,enumerable:!0},revertChange:{value:ie,enumerable:!0},isConflict:{value:function(){return typeof S<"u"},enumerable:!0},noConflict:{value:function(){return $&&($.forEach(function(e){e()}),$=null),O},enumerable:!0}});var te={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},re={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},ne=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=e.dispatch,t=e.getState;return typeof r=="function"||typeof t=="function"?X()({dispatch:r,getState:t}):void console.error(`
[redux-logger v3] BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
`)};y.defaults=re,y.createLogger=X,y.logger=ne,y.default=ne,Object.defineProperty(y,"__esModule",{value:!0})})})(V,V.exports);var ae=V.exports;const Se=je(ae),Ae=ke({__proto__:null,default:Se},[ae]);export{Ae as r};
