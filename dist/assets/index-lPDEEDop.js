(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var oh={exports:{}},Oo={};var Og;function CS(){if(Og)return Oo;Og=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Oo.Fragment=e,Oo.jsx=i,Oo.jsxs=i,Oo}var Pg;function DS(){return Pg||(Pg=1,oh.exports=CS()),oh.exports}var j=DS(),lh={exports:{}},se={};var zg;function US(){if(zg)return se;zg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.iterator;function y(O){return O===null||typeof O!="object"?null:(O=S&&O[S]||O["@@iterator"],typeof O=="function"?O:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function _(O,et,ht){this.props=O,this.context=et,this.refs=M,this.updater=ht||E}_.prototype.isReactComponent={},_.prototype.setState=function(O,et){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,et,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function D(){}D.prototype=_.prototype;function P(O,et,ht){this.props=O,this.context=et,this.refs=M,this.updater=ht||E}var N=P.prototype=new D;N.constructor=P,T(N,_.prototype),N.isPureReactComponent=!0;var z=Array.isArray;function B(){}var I={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function A(O,et,ht){var Et=ht.ref;return{$$typeof:o,type:O,key:et,ref:Et!==void 0?Et:null,props:ht}}function U(O,et){return A(O.type,et,O.props)}function H(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function K(O){var et={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ht){return et[ht]})}var nt=/\/+/g;function ut(O,et){return typeof O=="object"&&O!==null&&O.key!=null?K(""+O.key):et.toString(36)}function Y(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(B,B):(O.status="pending",O.then(function(et){O.status==="pending"&&(O.status="fulfilled",O.value=et)},function(et){O.status==="pending"&&(O.status="rejected",O.reason=et)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function C(O,et,ht,Et,Nt){var st=typeof O;(st==="undefined"||st==="boolean")&&(O=null);var mt=!1;if(O===null)mt=!0;else switch(st){case"bigint":case"string":case"number":mt=!0;break;case"object":switch(O.$$typeof){case o:case e:mt=!0;break;case v:return mt=O._init,C(mt(O._payload),et,ht,Et,Nt)}}if(mt)return Nt=Nt(O),mt=Et===""?"."+ut(O,0):Et,z(Nt)?(ht="",mt!=null&&(ht=mt.replace(nt,"$&/")+"/"),C(Nt,et,ht,"",function(Ht){return Ht})):Nt!=null&&(H(Nt)&&(Nt=U(Nt,ht+(Nt.key==null||O&&O.key===Nt.key?"":(""+Nt.key).replace(nt,"$&/")+"/")+mt)),et.push(Nt)),1;mt=0;var Dt=Et===""?".":Et+":";if(z(O))for(var kt=0;kt<O.length;kt++)Et=O[kt],st=Dt+ut(Et,kt),mt+=C(Et,et,ht,st,Nt);else if(kt=y(O),typeof kt=="function")for(O=kt.call(O),kt=0;!(Et=O.next()).done;)Et=Et.value,st=Dt+ut(Et,kt++),mt+=C(Et,et,ht,st,Nt);else if(st==="object"){if(typeof O.then=="function")return C(Y(O),et,ht,Et,Nt);throw et=String(O),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return mt}function L(O,et,ht){if(O==null)return O;var Et=[],Nt=0;return C(O,Et,"","",function(st){return et.call(ht,st,Nt++)}),Et}function q(O){if(O._status===-1){var et=O._result;et=et(),et.then(function(ht){(O._status===0||O._status===-1)&&(O._status=1,O._result=ht)},function(ht){(O._status===0||O._status===-1)&&(O._status=2,O._result=ht)}),O._status===-1&&(O._status=0,O._result=et)}if(O._status===1)return O._result.default;throw O._result}var ft=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},pt={map:L,forEach:function(O,et,ht){L(O,function(){et.apply(this,arguments)},ht)},count:function(O){var et=0;return L(O,function(){et++}),et},toArray:function(O){return L(O,function(et){return et})||[]},only:function(O){if(!H(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return se.Activity=g,se.Children=pt,se.Component=_,se.Fragment=i,se.Profiler=l,se.PureComponent=P,se.StrictMode=s,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,se.__COMPILER_RUNTIME={__proto__:null,c:function(O){return I.H.useMemoCache(O)}},se.cache=function(O){return function(){return O.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(O,et,ht){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Et=T({},O.props),Nt=O.key;if(et!=null)for(st in et.key!==void 0&&(Nt=""+et.key),et)!X.call(et,st)||st==="key"||st==="__self"||st==="__source"||st==="ref"&&et.ref===void 0||(Et[st]=et[st]);var st=arguments.length-2;if(st===1)Et.children=ht;else if(1<st){for(var mt=Array(st),Dt=0;Dt<st;Dt++)mt[Dt]=arguments[Dt+2];Et.children=mt}return A(O.type,Nt,Et)},se.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},se.createElement=function(O,et,ht){var Et,Nt={},st=null;if(et!=null)for(Et in et.key!==void 0&&(st=""+et.key),et)X.call(et,Et)&&Et!=="key"&&Et!=="__self"&&Et!=="__source"&&(Nt[Et]=et[Et]);var mt=arguments.length-2;if(mt===1)Nt.children=ht;else if(1<mt){for(var Dt=Array(mt),kt=0;kt<mt;kt++)Dt[kt]=arguments[kt+2];Nt.children=Dt}if(O&&O.defaultProps)for(Et in mt=O.defaultProps,mt)Nt[Et]===void 0&&(Nt[Et]=mt[Et]);return A(O,st,Nt)},se.createRef=function(){return{current:null}},se.forwardRef=function(O){return{$$typeof:d,render:O}},se.isValidElement=H,se.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:q}},se.memo=function(O,et){return{$$typeof:p,type:O,compare:et===void 0?null:et}},se.startTransition=function(O){var et=I.T,ht={};I.T=ht;try{var Et=O(),Nt=I.S;Nt!==null&&Nt(ht,Et),typeof Et=="object"&&Et!==null&&typeof Et.then=="function"&&Et.then(B,ft)}catch(st){ft(st)}finally{et!==null&&ht.types!==null&&(et.types=ht.types),I.T=et}},se.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},se.use=function(O){return I.H.use(O)},se.useActionState=function(O,et,ht){return I.H.useActionState(O,et,ht)},se.useCallback=function(O,et){return I.H.useCallback(O,et)},se.useContext=function(O){return I.H.useContext(O)},se.useDebugValue=function(){},se.useDeferredValue=function(O,et){return I.H.useDeferredValue(O,et)},se.useEffect=function(O,et){return I.H.useEffect(O,et)},se.useEffectEvent=function(O){return I.H.useEffectEvent(O)},se.useId=function(){return I.H.useId()},se.useImperativeHandle=function(O,et,ht){return I.H.useImperativeHandle(O,et,ht)},se.useInsertionEffect=function(O,et){return I.H.useInsertionEffect(O,et)},se.useLayoutEffect=function(O,et){return I.H.useLayoutEffect(O,et)},se.useMemo=function(O,et){return I.H.useMemo(O,et)},se.useOptimistic=function(O,et){return I.H.useOptimistic(O,et)},se.useReducer=function(O,et,ht){return I.H.useReducer(O,et,ht)},se.useRef=function(O){return I.H.useRef(O)},se.useState=function(O){return I.H.useState(O)},se.useSyncExternalStore=function(O,et,ht){return I.H.useSyncExternalStore(O,et,ht)},se.useTransition=function(){return I.H.useTransition()},se.version="19.2.3",se}var Fg;function Hd(){return Fg||(Fg=1,lh.exports=US()),lh.exports}var we=Hd(),ch={exports:{}},Po={},uh={exports:{}},fh={};var Ig;function NS(){return Ig||(Ig=1,(function(o){function e(C,L){var q=C.length;C.push(L);t:for(;0<q;){var ft=q-1>>>1,pt=C[ft];if(0<l(pt,L))C[ft]=L,C[q]=pt,q=ft;else break t}}function i(C){return C.length===0?null:C[0]}function s(C){if(C.length===0)return null;var L=C[0],q=C.pop();if(q!==L){C[0]=q;t:for(var ft=0,pt=C.length,O=pt>>>1;ft<O;){var et=2*(ft+1)-1,ht=C[et],Et=et+1,Nt=C[Et];if(0>l(ht,q))Et<pt&&0>l(Nt,ht)?(C[ft]=Nt,C[Et]=q,ft=Et):(C[ft]=ht,C[et]=q,ft=et);else if(Et<pt&&0>l(Nt,q))C[ft]=Nt,C[Et]=q,ft=Et;else break t}}return L}function l(C,L){var q=C.sortIndex-L.sortIndex;return q!==0?q:C.id-L.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],v=1,g=null,S=3,y=!1,E=!1,T=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function N(C){for(var L=i(p);L!==null;){if(L.callback===null)s(p);else if(L.startTime<=C)s(p),L.sortIndex=L.expirationTime,e(m,L);else break;L=i(p)}}function z(C){if(T=!1,N(C),!E)if(i(m)!==null)E=!0,B||(B=!0,K());else{var L=i(p);L!==null&&Y(z,L.startTime-C)}}var B=!1,I=-1,X=5,A=-1;function U(){return M?!0:!(o.unstable_now()-A<X)}function H(){if(M=!1,B){var C=o.unstable_now();A=C;var L=!0;try{t:{E=!1,T&&(T=!1,D(I),I=-1),y=!0;var q=S;try{e:{for(N(C),g=i(m);g!==null&&!(g.expirationTime>C&&U());){var ft=g.callback;if(typeof ft=="function"){g.callback=null,S=g.priorityLevel;var pt=ft(g.expirationTime<=C);if(C=o.unstable_now(),typeof pt=="function"){g.callback=pt,N(C),L=!0;break e}g===i(m)&&s(m),N(C)}else s(m);g=i(m)}if(g!==null)L=!0;else{var O=i(p);O!==null&&Y(z,O.startTime-C),L=!1}}break t}finally{g=null,S=q,y=!1}L=void 0}}finally{L?K():B=!1}}}var K;if(typeof P=="function")K=function(){P(H)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,ut=nt.port2;nt.port1.onmessage=H,K=function(){ut.postMessage(null)}}else K=function(){_(H,0)};function Y(C,L){I=_(function(){C(o.unstable_now())},L)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(C){C.callback=null},o.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<C?Math.floor(1e3/C):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(C){switch(S){case 1:case 2:case 3:var L=3;break;default:L=S}var q=S;S=L;try{return C()}finally{S=q}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(C,L){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var q=S;S=C;try{return L()}finally{S=q}},o.unstable_scheduleCallback=function(C,L,q){var ft=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ft+q:ft):q=ft,C){case 1:var pt=-1;break;case 2:pt=250;break;case 5:pt=1073741823;break;case 4:pt=1e4;break;default:pt=5e3}return pt=q+pt,C={id:v++,callback:L,priorityLevel:C,startTime:q,expirationTime:pt,sortIndex:-1},q>ft?(C.sortIndex=q,e(p,C),i(m)===null&&C===i(p)&&(T?(D(I),I=-1):T=!0,Y(z,q-ft))):(C.sortIndex=pt,e(m,C),E||y||(E=!0,B||(B=!0,K()))),C},o.unstable_shouldYield=U,o.unstable_wrapCallback=function(C){var L=S;return function(){var q=S;S=L;try{return C.apply(this,arguments)}finally{S=q}}}})(fh)),fh}var Bg;function LS(){return Bg||(Bg=1,uh.exports=NS()),uh.exports}var hh={exports:{}},Ln={};var Hg;function OS(){if(Hg)return Ln;Hg=1;var o=Hd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ln.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,v)},Ln.flushSync=function(m){var p=h.T,v=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=v,s.d.f()}},Ln.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Ln.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Ln.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=d(v,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:y}):v==="script"&&s.d.X(m,{crossOrigin:g,integrity:S,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Ln.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=d(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Ln.requestFormReset=function(m){s.d.r(m)},Ln.unstable_batchedUpdates=function(m,p){return m(p)},Ln.useFormState=function(m,p,v){return h.H.useFormState(m,p,v)},Ln.useFormStatus=function(){return h.H.useHostTransitionStatus()},Ln.version="19.2.3",Ln}var Gg;function PS(){if(Gg)return hh.exports;Gg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),hh.exports=OS(),hh.exports}var Vg;function zS(){if(Vg)return Po;Vg=1;var o=LS(),e=Hd(),i=PS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var x=!1,R=u.child;R;){if(R===a){x=!0,a=u,r=f;break}if(R===r){x=!0,r=u,a=f;break}R=R.sibling}if(!x){for(R=f.child;R;){if(R===a){x=!0,a=f,r=u;break}if(R===r){x=!0,r=f,a=u;break}R=R.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),P=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var nt=Symbol.for("react.client.reference");function ut(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===nt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case _:return"Profiler";case M:return"StrictMode";case z:return"Suspense";case B:return"SuspenseList";case A:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case P:return t.displayName||"Context";case D:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:ut(t.type)||"Memo";case X:n=t._payload,t=t._init;try{return ut(t(n))}catch{}}return null}var Y=Array.isArray,C=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},ft=[],pt=-1;function O(t){return{current:t}}function et(t){0>pt||(t.current=ft[pt],ft[pt]=null,pt--)}function ht(t,n){pt++,ft[pt]=t.current,t.current=n}var Et=O(null),Nt=O(null),st=O(null),mt=O(null);function Dt(t,n){switch(ht(st,n),ht(Nt,t),ht(Et,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?ig(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=ig(n),t=ag(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}et(Et),ht(Et,t)}function kt(){et(Et),et(Nt),et(st)}function Ht(t){t.memoizedState!==null&&ht(mt,t);var n=Et.current,a=ag(n,t.type);n!==a&&(ht(Nt,t),ht(Et,a))}function he(t){Nt.current===t&&(et(Et),et(Nt)),mt.current===t&&(et(mt),Do._currentValue=q)}var $e,ge;function de(t){if($e===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);$e=n&&n[1]||"",ge=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$e+t+ge}var De=!1;function re(t,n){if(!t||De)return"";De=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(ct){var ot=ct}Reflect.construct(t,[],xt)}else{try{xt.call()}catch(ct){ot=ct}t.call(xt.prototype)}}else{try{throw Error()}catch(ct){ot=ct}(xt=t())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(ct){if(ct&&ot&&typeof ct.stack=="string")return[ct.stack,ot.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),x=f[0],R=f[1];if(x&&R){var G=x.split(`
`),at=R.split(`
`);for(u=r=0;r<G.length&&!G[r].includes("DetermineComponentFrameRoot");)r++;for(;u<at.length&&!at[u].includes("DetermineComponentFrameRoot");)u++;if(r===G.length||u===at.length)for(r=G.length-1,u=at.length-1;1<=r&&0<=u&&G[r]!==at[u];)u--;for(;1<=r&&0<=u;r--,u--)if(G[r]!==at[u]){if(r!==1||u!==1)do if(r--,u--,0>u||G[r]!==at[u]){var gt=`
`+G[r].replace(" at new "," at ");return t.displayName&&gt.includes("<anonymous>")&&(gt=gt.replace("<anonymous>",t.displayName)),gt}while(1<=r&&0<=u);break}}}finally{De=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?de(a):""}function tn(t,n){switch(t.tag){case 26:case 27:case 5:return de(t.type);case 16:return de("Lazy");case 13:return t.child!==n&&n!==null?de("Suspense Fallback"):de("Suspense");case 19:return de("SuspenseList");case 0:case 15:return re(t.type,!1);case 11:return re(t.type.render,!1);case 1:return re(t.type,!0);case 31:return de("Activity");default:return""}}function V(t){try{var n="",a=null;do n+=tn(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ke=Object.prototype.hasOwnProperty,ye=o.unstable_scheduleCallback,Pe=o.unstable_cancelCallback,Yt=o.unstable_shouldYield,F=o.unstable_requestPaint,b=o.unstable_now,Z=o.unstable_getCurrentPriorityLevel,_t=o.unstable_ImmediatePriority,Mt=o.unstable_UserBlockingPriority,dt=o.unstable_NormalPriority,Zt=o.unstable_LowPriority,wt=o.unstable_IdlePriority,Xt=o.log,ee=o.unstable_setDisableYieldValue,bt=null,Tt=null;function It(t){if(typeof Xt=="function"&&ee(t),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(bt,t)}catch{}}var zt=Math.clz32?Math.clz32:W,Ct=Math.log,le=Math.LN2;function W(t){return t>>>=0,t===0?32:31-(Ct(t)/le|0)|0}var Lt=256,At=262144,Ft=4194304;function yt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function St(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var u=0,f=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var R=r&134217727;return R!==0?(r=R&~f,r!==0?u=yt(r):(x&=R,x!==0?u=yt(x):a||(a=R&~t,a!==0&&(u=yt(a))))):(R=r&~f,R!==0?u=yt(R):x!==0?u=yt(x):a||(a=r&~t,a!==0&&(u=yt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Rt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ne(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fe(){var t=Ft;return Ft<<=1,(Ft&62914560)===0&&(Ft=4194304),t}function be(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Nn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function xi(t,n,a,r,u,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,G=t.expirationTimes,at=t.hiddenUpdates;for(a=x&~a;0<a;){var gt=31-zt(a),xt=1<<gt;R[gt]=0,G[gt]=-1;var ot=at[gt];if(ot!==null)for(at[gt]=null,gt=0;gt<ot.length;gt++){var ct=ot[gt];ct!==null&&(ct.lane&=-536870913)}a&=~xt}r!==0&&ol(t,r,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function ol(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-zt(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Gr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-zt(a),u=1<<r;u&n|t[r]&n&&(t[r]|=n),a&=~u}}function Ps(t,n){var a=n&-n;return a=(a&42)!==0?1:Vr(a),(a&(t.suspendedLanes|n))!==0?0:a}function Vr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function zs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function kr(){var t=L.p;return t!==0?t:(t=window.event,t===void 0?32:Rg(t.type))}function Di(t,n){var a=L.p;try{return L.p=t,n()}finally{L.p=a}}var ri=Math.random().toString(36).slice(2),ln="__reactFiber$"+ri,Sn="__reactProps$"+ri,Si="__reactContainer$"+ri,Fs="__reactEvents$"+ri,Is="__reactListeners$"+ri,ll="__reactHandles$"+ri,Xr="__reactResources$"+ri,as="__reactMarker$"+ri;function Wr(t){delete t[ln],delete t[Sn],delete t[Fs],delete t[Is],delete t[ll]}function Ma(t){var n=t[ln];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Si]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=fg(t);t!==null;){if(a=t[ln])return a;t=fg(t)}return n}t=a,a=t.parentNode}return null}function ya(t){if(t=t[ln]||t[Si]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ss(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function ba(t){var n=t[Xr];return n||(n=t[Xr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function w(t){t[as]=!0}var Q=new Set,lt={};function rt(t,n){$(t,n),$(t+"Capture",n)}function $(t,n){for(lt[t]=n,t=0;t<n.length;t++)Q.add(n[t])}var Ut=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bt={},Ot={};function Gt(t){return Ke.call(Ot,t)?!0:Ke.call(Bt,t)?!1:Ut.test(t)?Ot[t]=!0:(Bt[t]=!0,!1)}function Wt(t,n,a){if(Gt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Jt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function qt(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function $t(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ue(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ye(t){if(!t._valueTracker){var n=Ue(t)?"checked":"value";t._valueTracker=Qe(t,n,""+t[n])}}function ze(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=Ue(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function Kt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ne=/[\n"\\]/g;function ae(t){return t.replace(Ne,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Mn(t,n,a,r,u,f,x,R){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+$t(n)):t.value!==""+$t(n)&&(t.value=""+$t(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?yn(t,x,$t(n)):a!=null?yn(t,x,$t(a)):r!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+$t(R):t.removeAttribute("name")}function qi(t,n,a,r,u,f,x,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ye(t);return}a=a!=null?""+$t(a):"",n=n!=null?""+$t(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=R?t.checked:!!r,t.defaultChecked=!!r,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),Ye(t)}function yn(t,n,a){n==="number"&&Kt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function oi(t,n,a,r){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&r&&(t[a].defaultSelected=!0)}else{for(a=""+$t(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,r&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Ie(t,n,a){if(n!=null&&(n=""+$t(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+$t(a):""}function bn(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(Y(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=$t(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Ye(t)}function pn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var En=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tn(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||En.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Bs(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&Tn(t,u,r)}else for(var f in n)n.hasOwnProperty(f)&&Tn(t,f,n[f])}function Mi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Av=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cl(t){return Av.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Yi(){}var iu=null;function au(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hs=null,Gs=null;function np(t){var n=ya(t);if(n&&(t=n.stateNode)){var a=t[Sn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Mn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ae(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var u=r[Sn]||null;if(!u)throw Error(s(90));Mn(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&ze(r)}break t;case"textarea":Ie(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&oi(t,!!a.multiple,n,!1)}}}var su=!1;function ip(t,n,a){if(su)return t(n,a);su=!0;try{var r=t(n);return r}finally{if(su=!1,(Hs!==null||Gs!==null)&&(Kl(),Hs&&(n=Hs,t=Gs,Gs=Hs=null,np(n),t)))for(n=0;n<t.length;n++)np(t[n])}}function qr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[Sn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ru=!1;if(ji)try{var Yr={};Object.defineProperty(Yr,"passive",{get:function(){ru=!0}}),window.addEventListener("test",Yr,Yr),window.removeEventListener("test",Yr,Yr)}catch{ru=!1}var Ea=null,ou=null,ul=null;function ap(){if(ul)return ul;var t,n=ou,a=n.length,r,u="value"in Ea?Ea.value:Ea.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var x=a-t;for(r=1;r<=x&&n[a-r]===u[f-r];r++);return ul=u.slice(t,1<r?1-r:void 0)}function fl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function hl(){return!0}function sp(){return!1}function kn(t){function n(a,r,u,f,x){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?hl:sp,this.isPropagationStopped=sp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=hl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=hl)},persist:function(){},isPersistent:hl}),n}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dl=kn(rs),jr=g({},rs,{view:0,detail:0}),Rv=kn(jr),lu,cu,Zr,pl=g({},jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zr&&(Zr&&t.type==="mousemove"?(lu=t.screenX-Zr.screenX,cu=t.screenY-Zr.screenY):cu=lu=0,Zr=t),lu)},movementY:function(t){return"movementY"in t?t.movementY:cu}}),rp=kn(pl),wv=g({},pl,{dataTransfer:0}),Cv=kn(wv),Dv=g({},jr,{relatedTarget:0}),uu=kn(Dv),Uv=g({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),Nv=kn(Uv),Lv=g({},rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ov=kn(Lv),Pv=g({},rs,{data:0}),op=kn(Pv),zv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Iv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Iv[t])?!!n[t]:!1}function fu(){return Bv}var Hv=g({},jr,{key:function(t){if(t.key){var n=zv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=fl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Fv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fu,charCode:function(t){return t.type==="keypress"?fl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Gv=kn(Hv),Vv=g({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lp=kn(Vv),kv=g({},jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fu}),Xv=kn(kv),Wv=g({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),qv=kn(Wv),Yv=g({},pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jv=kn(Yv),Zv=g({},rs,{newState:0,oldState:0}),Kv=kn(Zv),Qv=[9,13,27,32],hu=ji&&"CompositionEvent"in window,Kr=null;ji&&"documentMode"in document&&(Kr=document.documentMode);var Jv=ji&&"TextEvent"in window&&!Kr,cp=ji&&(!hu||Kr&&8<Kr&&11>=Kr),up=" ",fp=!1;function hp(t,n){switch(t){case"keyup":return Qv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vs=!1;function $v(t,n){switch(t){case"compositionend":return dp(n);case"keypress":return n.which!==32?null:(fp=!0,up);case"textInput":return t=n.data,t===up&&fp?null:t;default:return null}}function tx(t,n){if(Vs)return t==="compositionend"||!hu&&hp(t,n)?(t=ap(),ul=ou=Ea=null,Vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return cp&&n.locale!=="ko"?null:n.data;default:return null}}var ex={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!ex[t.type]:n==="textarea"}function mp(t,n,a,r){Hs?Gs?Gs.push(r):Gs=[r]:Hs=r,n=ic(n,"onChange"),0<n.length&&(a=new dl("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Qr=null,Jr=null;function nx(t){Q0(t,0)}function ml(t){var n=ss(t);if(ze(n))return t}function gp(t,n){if(t==="change")return n}var _p=!1;if(ji){var du;if(ji){var pu="oninput"in document;if(!pu){var vp=document.createElement("div");vp.setAttribute("oninput","return;"),pu=typeof vp.oninput=="function"}du=pu}else du=!1;_p=du&&(!document.documentMode||9<document.documentMode)}function xp(){Qr&&(Qr.detachEvent("onpropertychange",Sp),Jr=Qr=null)}function Sp(t){if(t.propertyName==="value"&&ml(Jr)){var n=[];mp(n,Jr,t,au(t)),ip(nx,n)}}function ix(t,n,a){t==="focusin"?(xp(),Qr=n,Jr=a,Qr.attachEvent("onpropertychange",Sp)):t==="focusout"&&xp()}function ax(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ml(Jr)}function sx(t,n){if(t==="click")return ml(n)}function rx(t,n){if(t==="input"||t==="change")return ml(n)}function ox(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Qn=typeof Object.is=="function"?Object.is:ox;function $r(t,n){if(Qn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Ke.call(n,u)||!Qn(t[u],n[u]))return!1}return!0}function Mp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function yp(t,n){var a=Mp(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Mp(a)}}function bp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?bp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Ep(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Kt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Kt(t.document)}return n}function mu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var lx=ji&&"documentMode"in document&&11>=document.documentMode,ks=null,gu=null,to=null,_u=!1;function Tp(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_u||ks==null||ks!==Kt(r)||(r=ks,"selectionStart"in r&&mu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),to&&$r(to,r)||(to=r,r=ic(gu,"onSelect"),0<r.length&&(n=new dl("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=ks)))}function os(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Xs={animationend:os("Animation","AnimationEnd"),animationiteration:os("Animation","AnimationIteration"),animationstart:os("Animation","AnimationStart"),transitionrun:os("Transition","TransitionRun"),transitionstart:os("Transition","TransitionStart"),transitioncancel:os("Transition","TransitionCancel"),transitionend:os("Transition","TransitionEnd")},vu={},Ap={};ji&&(Ap=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function ls(t){if(vu[t])return vu[t];if(!Xs[t])return t;var n=Xs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ap)return vu[t]=n[a];return t}var Rp=ls("animationend"),wp=ls("animationiteration"),Cp=ls("animationstart"),cx=ls("transitionrun"),ux=ls("transitionstart"),fx=ls("transitioncancel"),Dp=ls("transitionend"),Up=new Map,xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xu.push("scrollEnd");function yi(t,n){Up.set(t,n),rt(n,[t])}var gl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},li=[],Ws=0,Su=0;function _l(){for(var t=Ws,n=Su=Ws=0;n<t;){var a=li[n];li[n++]=null;var r=li[n];li[n++]=null;var u=li[n];li[n++]=null;var f=li[n];if(li[n++]=null,r!==null&&u!==null){var x=r.pending;x===null?u.next=u:(u.next=x.next,x.next=u),r.pending=u}f!==0&&Np(a,u,f)}}function vl(t,n,a,r){li[Ws++]=t,li[Ws++]=n,li[Ws++]=a,li[Ws++]=r,Su|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Mu(t,n,a,r){return vl(t,n,a,r),xl(t)}function cs(t,n){return vl(t,null,null,n),xl(t)}function Np(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-zt(a),t=f.hiddenUpdates,r=t[u],r===null?t[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function xl(t){if(50<bo)throw bo=0,Uf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var qs={};function hx(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(t,n,a,r){return new hx(t,n,a,r)}function yu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zi(t,n){var a=t.alternate;return a===null?(a=Jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Lp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Sl(t,n,a,r,u,f){var x=0;if(r=t,typeof t=="function")yu(t)&&(x=1);else if(typeof t=="string")x=_S(t,a,Et.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case A:return t=Jn(31,a,n,u),t.elementType=A,t.lanes=f,t;case T:return us(a.children,u,f,n);case M:x=8,u|=24;break;case _:return t=Jn(12,a,n,u|2),t.elementType=_,t.lanes=f,t;case z:return t=Jn(13,a,n,u),t.elementType=z,t.lanes=f,t;case B:return t=Jn(19,a,n,u),t.elementType=B,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:x=10;break t;case D:x=9;break t;case N:x=11;break t;case I:x=14;break t;case X:x=16,r=null;break t}x=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Jn(x,a,n,u),n.elementType=t,n.type=r,n.lanes=f,n}function us(t,n,a,r){return t=Jn(7,t,r,n),t.lanes=a,t}function bu(t,n,a){return t=Jn(6,t,null,n),t.lanes=a,t}function Op(t){var n=Jn(18,null,null,0);return n.stateNode=t,n}function Eu(t,n,a){return n=Jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Pp=new WeakMap;function ci(t,n){if(typeof t=="object"&&t!==null){var a=Pp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:V(n)},Pp.set(t,n),n)}return{value:t,source:n,stack:V(n)}}var Ys=[],js=0,Ml=null,eo=0,ui=[],fi=0,Ta=null,Ui=1,Ni="";function Ki(t,n){Ys[js++]=eo,Ys[js++]=Ml,Ml=t,eo=n}function zp(t,n,a){ui[fi++]=Ui,ui[fi++]=Ni,ui[fi++]=Ta,Ta=t;var r=Ui;t=Ni;var u=32-zt(r)-1;r&=~(1<<u),a+=1;var f=32-zt(n)+u;if(30<f){var x=u-u%5;f=(r&(1<<x)-1).toString(32),r>>=x,u-=x,Ui=1<<32-zt(n)+u|a<<u|r,Ni=f+t}else Ui=1<<f|a<<u|r,Ni=t}function Tu(t){t.return!==null&&(Ki(t,1),zp(t,1,0))}function Au(t){for(;t===Ml;)Ml=Ys[--js],Ys[js]=null,eo=Ys[--js],Ys[js]=null;for(;t===Ta;)Ta=ui[--fi],ui[fi]=null,Ni=ui[--fi],ui[fi]=null,Ui=ui[--fi],ui[fi]=null}function Fp(t,n){ui[fi++]=Ui,ui[fi++]=Ni,ui[fi++]=Ta,Ui=n.id,Ni=n.overflow,Ta=t}var An=null,je=null,xe=!1,Aa=null,hi=!1,Ru=Error(s(519));function Ra(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw no(ci(n,t)),Ru}function Ip(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[ln]=t,n[Sn]=r,a){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(a=0;a<To.length;a++)me(To[a],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":me("invalid",n),qi(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":me("invalid",n);break;case"textarea":me("invalid",n),bn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||eg(n.textContent,a)?(r.popover!=null&&(me("beforetoggle",n),me("toggle",n)),r.onScroll!=null&&me("scroll",n),r.onScrollEnd!=null&&me("scrollend",n),r.onClick!=null&&(n.onclick=Yi),n=!0):n=!1,n||Ra(t,!0)}function Bp(t){for(An=t.return;An;)switch(An.tag){case 5:case 31:case 13:hi=!1;return;case 27:case 3:hi=!0;return;default:An=An.return}}function Zs(t){if(t!==An)return!1;if(!xe)return Bp(t),xe=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||qf(t.type,t.memoizedProps)),a=!a),a&&je&&Ra(t),Bp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));je=ug(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));je=ug(t)}else n===27?(n=je,Ga(t.type)?(t=Qf,Qf=null,je=t):je=n):je=An?pi(t.stateNode.nextSibling):null;return!0}function fs(){je=An=null,xe=!1}function wu(){var t=Aa;return t!==null&&(Yn===null?Yn=t:Yn.push.apply(Yn,t),Aa=null),t}function no(t){Aa===null?Aa=[t]:Aa.push(t)}var Cu=O(null),hs=null,Qi=null;function wa(t,n,a){ht(Cu,n._currentValue),n._currentValue=a}function Ji(t){t._currentValue=Cu.current,et(Cu)}function Du(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function Uu(t,n,a,r){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var x=u.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=u;for(var G=0;G<n.length;G++)if(R.context===n[G]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Du(f.return,a,t),r||(x=null);break t}f=R.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),Du(x,a,t),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===t){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Ks(t,n,a,r){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var R=u.type;Qn(u.pendingProps.value,x.value)||(t!==null?t.push(R):t=[R])}}else if(u===mt.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Do):t=[Do])}u=u.return}t!==null&&Uu(n,t,a,r),n.flags|=262144}function yl(t){for(t=t.firstContext;t!==null;){if(!Qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ds(t){hs=t,Qi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return Hp(hs,t)}function bl(t,n){return hs===null&&ds(t),Hp(t,n)}function Hp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Qi===null){if(t===null)throw Error(s(308));Qi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Qi=Qi.next=n;return a}var dx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},px=o.unstable_scheduleCallback,mx=o.unstable_NormalPriority,cn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Nu(){return{controller:new dx,data:new Map,refCount:0}}function io(t){t.refCount--,t.refCount===0&&px(mx,function(){t.controller.abort()})}var ao=null,Lu=0,Qs=0,Js=null;function gx(t,n){if(ao===null){var a=ao=[];Lu=0,Qs=Ff(),Js={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Lu++,n.then(Gp,Gp),n}function Gp(){if(--Lu===0&&ao!==null){Js!==null&&(Js.status="fulfilled");var t=ao;ao=null,Qs=0,Js=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function _x(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Vp=C.S;C.S=function(t,n){T0=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&gx(t,n),Vp!==null&&Vp(t,n)};var ps=O(null);function Ou(){var t=ps.current;return t!==null?t:qe.pooledCache}function El(t,n){n===null?ht(ps,ps.current):ht(ps,n.pool)}function kp(){var t=Ou();return t===null?null:{parent:cn._currentValue,pool:t}}var $s=Error(s(460)),Pu=Error(s(474)),Tl=Error(s(542)),Al={then:function(){}};function Xp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Wp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Yi,Yi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Yp(t),t;default:if(typeof n.status=="string")n.then(Yi,Yi);else{if(t=qe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Yp(t),t}throw gs=n,$s}}function ms(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(gs=a,$s):a}}var gs=null;function qp(){if(gs===null)throw Error(s(459));var t=gs;return gs=null,t}function Yp(t){if(t===$s||t===Tl)throw Error(s(483))}var tr=null,so=0;function Rl(t){var n=so;return so+=1,tr===null&&(tr=[]),Wp(tr,t,n)}function ro(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function wl(t,n){throw n.$$typeof===S?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function jp(t){function n(J,k){if(t){var it=J.deletions;it===null?(J.deletions=[k],J.flags|=16):it.push(k)}}function a(J,k){if(!t)return null;for(;k!==null;)n(J,k),k=k.sibling;return null}function r(J){for(var k=new Map;J!==null;)J.key!==null?k.set(J.key,J):k.set(J.index,J),J=J.sibling;return k}function u(J,k){return J=Zi(J,k),J.index=0,J.sibling=null,J}function f(J,k,it){return J.index=it,t?(it=J.alternate,it!==null?(it=it.index,it<k?(J.flags|=67108866,k):it):(J.flags|=67108866,k)):(J.flags|=1048576,k)}function x(J){return t&&J.alternate===null&&(J.flags|=67108866),J}function R(J,k,it,vt){return k===null||k.tag!==6?(k=bu(it,J.mode,vt),k.return=J,k):(k=u(k,it),k.return=J,k)}function G(J,k,it,vt){var Qt=it.type;return Qt===T?gt(J,k,it.props.children,vt,it.key):k!==null&&(k.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===X&&ms(Qt)===k.type)?(k=u(k,it.props),ro(k,it),k.return=J,k):(k=Sl(it.type,it.key,it.props,null,J.mode,vt),ro(k,it),k.return=J,k)}function at(J,k,it,vt){return k===null||k.tag!==4||k.stateNode.containerInfo!==it.containerInfo||k.stateNode.implementation!==it.implementation?(k=Eu(it,J.mode,vt),k.return=J,k):(k=u(k,it.children||[]),k.return=J,k)}function gt(J,k,it,vt,Qt){return k===null||k.tag!==7?(k=us(it,J.mode,vt,Qt),k.return=J,k):(k=u(k,it),k.return=J,k)}function xt(J,k,it){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=bu(""+k,J.mode,it),k.return=J,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case y:return it=Sl(k.type,k.key,k.props,null,J.mode,it),ro(it,k),it.return=J,it;case E:return k=Eu(k,J.mode,it),k.return=J,k;case X:return k=ms(k),xt(J,k,it)}if(Y(k)||K(k))return k=us(k,J.mode,it,null),k.return=J,k;if(typeof k.then=="function")return xt(J,Rl(k),it);if(k.$$typeof===P)return xt(J,bl(J,k),it);wl(J,k)}return null}function ot(J,k,it,vt){var Qt=k!==null?k.key:null;if(typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint")return Qt!==null?null:R(J,k,""+it,vt);if(typeof it=="object"&&it!==null){switch(it.$$typeof){case y:return it.key===Qt?G(J,k,it,vt):null;case E:return it.key===Qt?at(J,k,it,vt):null;case X:return it=ms(it),ot(J,k,it,vt)}if(Y(it)||K(it))return Qt!==null?null:gt(J,k,it,vt,null);if(typeof it.then=="function")return ot(J,k,Rl(it),vt);if(it.$$typeof===P)return ot(J,k,bl(J,it),vt);wl(J,it)}return null}function ct(J,k,it,vt,Qt){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return J=J.get(it)||null,R(k,J,""+vt,Qt);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case y:return J=J.get(vt.key===null?it:vt.key)||null,G(k,J,vt,Qt);case E:return J=J.get(vt.key===null?it:vt.key)||null,at(k,J,vt,Qt);case X:return vt=ms(vt),ct(J,k,it,vt,Qt)}if(Y(vt)||K(vt))return J=J.get(it)||null,gt(k,J,vt,Qt,null);if(typeof vt.then=="function")return ct(J,k,it,Rl(vt),Qt);if(vt.$$typeof===P)return ct(J,k,it,bl(k,vt),Qt);wl(k,vt)}return null}function Vt(J,k,it,vt){for(var Qt=null,Te=null,jt=k,ce=k=0,ve=null;jt!==null&&ce<it.length;ce++){jt.index>ce?(ve=jt,jt=null):ve=jt.sibling;var Ae=ot(J,jt,it[ce],vt);if(Ae===null){jt===null&&(jt=ve);break}t&&jt&&Ae.alternate===null&&n(J,jt),k=f(Ae,k,ce),Te===null?Qt=Ae:Te.sibling=Ae,Te=Ae,jt=ve}if(ce===it.length)return a(J,jt),xe&&Ki(J,ce),Qt;if(jt===null){for(;ce<it.length;ce++)jt=xt(J,it[ce],vt),jt!==null&&(k=f(jt,k,ce),Te===null?Qt=jt:Te.sibling=jt,Te=jt);return xe&&Ki(J,ce),Qt}for(jt=r(jt);ce<it.length;ce++)ve=ct(jt,J,ce,it[ce],vt),ve!==null&&(t&&ve.alternate!==null&&jt.delete(ve.key===null?ce:ve.key),k=f(ve,k,ce),Te===null?Qt=ve:Te.sibling=ve,Te=ve);return t&&jt.forEach(function(qa){return n(J,qa)}),xe&&Ki(J,ce),Qt}function te(J,k,it,vt){if(it==null)throw Error(s(151));for(var Qt=null,Te=null,jt=k,ce=k=0,ve=null,Ae=it.next();jt!==null&&!Ae.done;ce++,Ae=it.next()){jt.index>ce?(ve=jt,jt=null):ve=jt.sibling;var qa=ot(J,jt,Ae.value,vt);if(qa===null){jt===null&&(jt=ve);break}t&&jt&&qa.alternate===null&&n(J,jt),k=f(qa,k,ce),Te===null?Qt=qa:Te.sibling=qa,Te=qa,jt=ve}if(Ae.done)return a(J,jt),xe&&Ki(J,ce),Qt;if(jt===null){for(;!Ae.done;ce++,Ae=it.next())Ae=xt(J,Ae.value,vt),Ae!==null&&(k=f(Ae,k,ce),Te===null?Qt=Ae:Te.sibling=Ae,Te=Ae);return xe&&Ki(J,ce),Qt}for(jt=r(jt);!Ae.done;ce++,Ae=it.next())Ae=ct(jt,J,ce,Ae.value,vt),Ae!==null&&(t&&Ae.alternate!==null&&jt.delete(Ae.key===null?ce:Ae.key),k=f(Ae,k,ce),Te===null?Qt=Ae:Te.sibling=Ae,Te=Ae);return t&&jt.forEach(function(wS){return n(J,wS)}),xe&&Ki(J,ce),Qt}function We(J,k,it,vt){if(typeof it=="object"&&it!==null&&it.type===T&&it.key===null&&(it=it.props.children),typeof it=="object"&&it!==null){switch(it.$$typeof){case y:t:{for(var Qt=it.key;k!==null;){if(k.key===Qt){if(Qt=it.type,Qt===T){if(k.tag===7){a(J,k.sibling),vt=u(k,it.props.children),vt.return=J,J=vt;break t}}else if(k.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===X&&ms(Qt)===k.type){a(J,k.sibling),vt=u(k,it.props),ro(vt,it),vt.return=J,J=vt;break t}a(J,k);break}else n(J,k);k=k.sibling}it.type===T?(vt=us(it.props.children,J.mode,vt,it.key),vt.return=J,J=vt):(vt=Sl(it.type,it.key,it.props,null,J.mode,vt),ro(vt,it),vt.return=J,J=vt)}return x(J);case E:t:{for(Qt=it.key;k!==null;){if(k.key===Qt)if(k.tag===4&&k.stateNode.containerInfo===it.containerInfo&&k.stateNode.implementation===it.implementation){a(J,k.sibling),vt=u(k,it.children||[]),vt.return=J,J=vt;break t}else{a(J,k);break}else n(J,k);k=k.sibling}vt=Eu(it,J.mode,vt),vt.return=J,J=vt}return x(J);case X:return it=ms(it),We(J,k,it,vt)}if(Y(it))return Vt(J,k,it,vt);if(K(it)){if(Qt=K(it),typeof Qt!="function")throw Error(s(150));return it=Qt.call(it),te(J,k,it,vt)}if(typeof it.then=="function")return We(J,k,Rl(it),vt);if(it.$$typeof===P)return We(J,k,bl(J,it),vt);wl(J,it)}return typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint"?(it=""+it,k!==null&&k.tag===6?(a(J,k.sibling),vt=u(k,it),vt.return=J,J=vt):(a(J,k),vt=bu(it,J.mode,vt),vt.return=J,J=vt),x(J)):a(J,k)}return function(J,k,it,vt){try{so=0;var Qt=We(J,k,it,vt);return tr=null,Qt}catch(jt){if(jt===$s||jt===Tl)throw jt;var Te=Jn(29,jt,null,J.mode);return Te.lanes=vt,Te.return=J,Te}}}var _s=jp(!0),Zp=jp(!1),Ca=!1;function zu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Da(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ua(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Le&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=xl(t),Np(t,null,a),n}return vl(t,r,n,a),xl(t)}function oo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Gr(t,a)}}function Iu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Bu=!1;function lo(){if(Bu){var t=Js;if(t!==null)throw t}}function co(t,n,a,r){Bu=!1;var u=t.updateQueue;Ca=!1;var f=u.firstBaseUpdate,x=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var G=R,at=G.next;G.next=null,x===null?f=at:x.next=at,x=G;var gt=t.alternate;gt!==null&&(gt=gt.updateQueue,R=gt.lastBaseUpdate,R!==x&&(R===null?gt.firstBaseUpdate=at:R.next=at,gt.lastBaseUpdate=G))}if(f!==null){var xt=u.baseState;x=0,gt=at=G=null,R=f;do{var ot=R.lane&-536870913,ct=ot!==R.lane;if(ct?(_e&ot)===ot:(r&ot)===ot){ot!==0&&ot===Qs&&(Bu=!0),gt!==null&&(gt=gt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Vt=t,te=R;ot=n;var We=a;switch(te.tag){case 1:if(Vt=te.payload,typeof Vt=="function"){xt=Vt.call(We,xt,ot);break t}xt=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=te.payload,ot=typeof Vt=="function"?Vt.call(We,xt,ot):Vt,ot==null)break t;xt=g({},xt,ot);break t;case 2:Ca=!0}}ot=R.callback,ot!==null&&(t.flags|=64,ct&&(t.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[ot]:ct.push(ot))}else ct={lane:ot,tag:R.tag,payload:R.payload,callback:R.callback,next:null},gt===null?(at=gt=ct,G=xt):gt=gt.next=ct,x|=ot;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ct=R,R=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);gt===null&&(G=xt),u.baseState=G,u.firstBaseUpdate=at,u.lastBaseUpdate=gt,f===null&&(u.shared.lanes=0),za|=x,t.lanes=x,t.memoizedState=xt}}function Kp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Qp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Kp(a[t],n)}var er=O(null),Cl=O(0);function Jp(t,n){t=oa,ht(Cl,t),ht(er,n),oa=t|n.baseLanes}function Hu(){ht(Cl,oa),ht(er,er.current)}function Gu(){oa=Cl.current,et(er),et(Cl)}var $n=O(null),di=null;function Na(t){var n=t.alternate;ht(sn,sn.current&1),ht($n,t),di===null&&(n===null||er.current!==null||n.memoizedState!==null)&&(di=t)}function Vu(t){ht(sn,sn.current),ht($n,t),di===null&&(di=t)}function $p(t){t.tag===22?(ht(sn,sn.current),ht($n,t),di===null&&(di=t)):La()}function La(){ht(sn,sn.current),ht($n,$n.current)}function ti(t){et($n),di===t&&(di=null),et(sn)}var sn=O(0);function Dl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Zf(a)||Kf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var $i=0,oe=null,ke=null,un=null,Ul=!1,nr=!1,vs=!1,Nl=0,uo=0,ir=null,vx=0;function en(){throw Error(s(321))}function ku(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Qn(t[a],n[a]))return!1;return!0}function Xu(t,n,a,r,u,f){return $i=f,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,C.H=t===null||t.memoizedState===null?zm:rf,vs=!1,f=a(r,u),vs=!1,nr&&(f=em(n,a,r,u)),tm(t),f}function tm(t){C.H=po;var n=ke!==null&&ke.next!==null;if($i=0,un=ke=oe=null,Ul=!1,uo=0,ir=null,n)throw Error(s(300));t===null||fn||(t=t.dependencies,t!==null&&yl(t)&&(fn=!0))}function em(t,n,a,r){oe=t;var u=0;do{if(nr&&(ir=null),uo=0,nr=!1,25<=u)throw Error(s(301));if(u+=1,un=ke=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}C.H=Fm,f=n(a,r)}while(nr);return f}function xx(){var t=C.H,n=t.useState()[0];return n=typeof n.then=="function"?fo(n):n,t=t.useState()[0],(ke!==null?ke.memoizedState:null)!==t&&(oe.flags|=1024),n}function Wu(){var t=Nl!==0;return Nl=0,t}function qu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Yu(t){if(Ul){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ul=!1}$i=0,un=ke=oe=null,nr=!1,uo=Nl=0,ir=null}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?oe.memoizedState=un=t:un=un.next=t,un}function rn(){if(ke===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=ke.next;var n=un===null?oe.memoizedState:un.next;if(n!==null)un=n,ke=t;else{if(t===null)throw oe.alternate===null?Error(s(467)):Error(s(310));ke=t,t={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},un===null?oe.memoizedState=un=t:un=un.next=t}return un}function Ll(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fo(t){var n=uo;return uo+=1,ir===null&&(ir=[]),t=Wp(ir,t,n),n=oe,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,C.H=n===null||n.memoizedState===null?zm:rf),t}function Ol(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return fo(t);if(t.$$typeof===P)return Rn(t)}throw Error(s(438,String(t)))}function ju(t){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=oe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ll(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=U;return n.index++,a}function ta(t,n){return typeof n=="function"?n(t):n}function Pl(t){var n=rn();return Zu(n,ke,t)}function Zu(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=t.baseQueue,f=r.pending;if(f!==null){if(u!==null){var x=u.next;u.next=f.next,f.next=x}n.baseQueue=u=f,r.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var R=x=null,G=null,at=n,gt=!1;do{var xt=at.lane&-536870913;if(xt!==at.lane?(_e&xt)===xt:($i&xt)===xt){var ot=at.revertLane;if(ot===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null}),xt===Qs&&(gt=!0);else if(($i&ot)===ot){at=at.next,ot===Qs&&(gt=!0);continue}else xt={lane:0,revertLane:at.revertLane,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},G===null?(R=G=xt,x=f):G=G.next=xt,oe.lanes|=ot,za|=ot;xt=at.action,vs&&a(f,xt),f=at.hasEagerState?at.eagerState:a(f,xt)}else ot={lane:xt,revertLane:at.revertLane,gesture:at.gesture,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},G===null?(R=G=ot,x=f):G=G.next=ot,oe.lanes|=xt,za|=xt;at=at.next}while(at!==null&&at!==n);if(G===null?x=f:G.next=R,!Qn(f,t.memoizedState)&&(fn=!0,gt&&(a=Js,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=G,r.lastRenderedState=f}return u===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Ku(t){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do f=t(f,x.action),x=x.next;while(x!==u);Qn(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function nm(t,n,a){var r=oe,u=rn(),f=xe;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!Qn((ke||u).memoizedState,a);if(x&&(u.memoizedState=a,fn=!0),u=u.queue,$u(sm.bind(null,r,u,t),[t]),u.getSnapshot!==n||x||un!==null&&un.memoizedState.tag&1){if(r.flags|=2048,ar(9,{destroy:void 0},am.bind(null,r,u,a,n),null),qe===null)throw Error(s(349));f||($i&127)!==0||im(r,n,a)}return a}function im(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=Ll(),oe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function am(t,n,a,r){n.value=a,n.getSnapshot=r,rm(n)&&om(t)}function sm(t,n,a){return a(function(){rm(n)&&om(t)})}function rm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Qn(t,a)}catch{return!0}}function om(t){var n=cs(t,2);n!==null&&jn(n,t,2)}function Qu(t){var n=Bn();if(typeof t=="function"){var a=t;if(t=a(),vs){It(!0);try{a()}finally{It(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:t},n}function lm(t,n,a,r){return t.baseState=a,Zu(t,ke,typeof r=="function"?r:ta)}function Sx(t,n,a,r,u){if(Il(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};C.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,cm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function cm(t,n){var a=n.action,r=n.payload,u=t.state;if(n.isTransition){var f=C.T,x={};C.T=x;try{var R=a(u,r),G=C.S;G!==null&&G(x,R),um(t,n,R)}catch(at){Ju(t,n,at)}finally{f!==null&&x.types!==null&&(f.types=x.types),C.T=f}}else try{f=a(u,r),um(t,n,f)}catch(at){Ju(t,n,at)}}function um(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){fm(t,n,r)},function(r){return Ju(t,n,r)}):fm(t,n,a)}function fm(t,n,a){n.status="fulfilled",n.value=a,hm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,cm(t,a)))}function Ju(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,hm(n),n=n.next;while(n!==r)}t.action=null}function hm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function dm(t,n){return n}function pm(t,n){if(xe){var a=qe.formState;if(a!==null){t:{var r=oe;if(xe){if(je){e:{for(var u=je,f=hi;u.nodeType!==8;){if(!f){u=null;break e}if(u=pi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){je=pi(u.nextSibling),r=u.data==="F!";break t}}Ra(r)}r=!1}r&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dm,lastRenderedState:n},a.queue=r,a=Lm.bind(null,oe,r),r.dispatch=a,r=Qu(!1),f=sf.bind(null,oe,!1,r.queue),r=Bn(),u={state:n,dispatch:null,action:t,pending:null},r.queue=u,a=Sx.bind(null,oe,u,f,a),u.dispatch=a,r.memoizedState=t,[n,a,!1]}function mm(t){var n=rn();return gm(n,ke,t)}function gm(t,n,a){if(n=Zu(t,n,dm)[0],t=Pl(ta)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=fo(n)}catch(x){throw x===$s?Tl:x}else r=n;n=rn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,ar(9,{destroy:void 0},Mx.bind(null,u,a),null)),[r,f,t]}function Mx(t,n){t.action=n}function _m(t){var n=rn(),a=ke;if(a!==null)return gm(n,a,t);rn(),n=n.memoizedState,a=rn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function ar(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=oe.updateQueue,n===null&&(n=Ll(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function vm(){return rn().memoizedState}function zl(t,n,a,r){var u=Bn();oe.flags|=t,u.memoizedState=ar(1|n,{destroy:void 0},a,r===void 0?null:r)}function Fl(t,n,a,r){var u=rn();r=r===void 0?null:r;var f=u.memoizedState.inst;ke!==null&&r!==null&&ku(r,ke.memoizedState.deps)?u.memoizedState=ar(n,f,a,r):(oe.flags|=t,u.memoizedState=ar(1|n,f,a,r))}function xm(t,n){zl(8390656,8,t,n)}function $u(t,n){Fl(2048,8,t,n)}function yx(t){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=Ll(),oe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Sm(t){var n=rn().memoizedState;return yx({ref:n,nextImpl:t}),function(){if((Le&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Mm(t,n){return Fl(4,2,t,n)}function ym(t,n){return Fl(4,4,t,n)}function bm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Em(t,n,a){a=a!=null?a.concat([t]):null,Fl(4,4,bm.bind(null,n,t),a)}function tf(){}function Tm(t,n){var a=rn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&ku(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function Am(t,n){var a=rn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&ku(n,r[1]))return r[0];if(r=t(),vs){It(!0);try{t()}finally{It(!1)}}return a.memoizedState=[r,n],r}function ef(t,n,a){return a===void 0||($i&1073741824)!==0&&(_e&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=R0(),oe.lanes|=t,za|=t,a)}function Rm(t,n,a,r){return Qn(a,n)?a:er.current!==null?(t=ef(t,a,r),Qn(t,n)||(fn=!0),t):($i&42)===0||($i&1073741824)!==0&&(_e&261930)===0?(fn=!0,t.memoizedState=a):(t=R0(),oe.lanes|=t,za|=t,n)}function wm(t,n,a,r,u){var f=L.p;L.p=f!==0&&8>f?f:8;var x=C.T,R={};C.T=R,sf(t,!1,n,a);try{var G=u(),at=C.S;if(at!==null&&at(R,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var gt=_x(G,r);ho(t,n,gt,ii(t))}else ho(t,n,r,ii(t))}catch(xt){ho(t,n,{then:function(){},status:"rejected",reason:xt},ii())}finally{L.p=f,x!==null&&R.types!==null&&(x.types=R.types),C.T=x}}function bx(){}function nf(t,n,a,r){if(t.tag!==5)throw Error(s(476));var u=Cm(t).queue;wm(t,u,n,q,a===null?bx:function(){return Dm(t),a(r)})}function Cm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Dm(t){var n=Cm(t);n.next===null&&(n=t.alternate.memoizedState),ho(t,n.next.queue,{},ii())}function af(){return Rn(Do)}function Um(){return rn().memoizedState}function Nm(){return rn().memoizedState}function Ex(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ii();t=Da(a);var r=Ua(n,t,a);r!==null&&(jn(r,n,a),oo(r,n,a)),n={cache:Nu()},t.payload=n;return}n=n.return}}function Tx(t,n,a){var r=ii();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Il(t)?Om(n,a):(a=Mu(t,n,a,r),a!==null&&(jn(a,t,r),Pm(a,n,r)))}function Lm(t,n,a){var r=ii();ho(t,n,a,r)}function ho(t,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Il(t))Om(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,R=f(x,a);if(u.hasEagerState=!0,u.eagerState=R,Qn(R,x))return vl(t,n,u,0),qe===null&&_l(),!1}catch{}if(a=Mu(t,n,u,r),a!==null)return jn(a,t,r),Pm(a,n,r),!0}return!1}function sf(t,n,a,r){if(r={lane:2,revertLane:Ff(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Il(t)){if(n)throw Error(s(479))}else n=Mu(t,a,r,2),n!==null&&jn(n,t,2)}function Il(t){var n=t.alternate;return t===oe||n!==null&&n===oe}function Om(t,n){nr=Ul=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Pm(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Gr(t,a)}}var po={readContext:Rn,use:Ol,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};po.useEffectEvent=en;var zm={readContext:Rn,use:Ol,useCallback:function(t,n){return Bn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:xm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,zl(4194308,4,bm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return zl(4194308,4,t,n)},useInsertionEffect:function(t,n){zl(4,2,t,n)},useMemo:function(t,n){var a=Bn();n=n===void 0?null:n;var r=t();if(vs){It(!0);try{t()}finally{It(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Bn();if(a!==void 0){var u=a(n);if(vs){It(!0);try{a(n)}finally{It(!1)}}}else u=n;return r.memoizedState=r.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},r.queue=t,t=t.dispatch=Tx.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var n=Bn();return t={current:t},n.memoizedState=t},useState:function(t){t=Qu(t);var n=t.queue,a=Lm.bind(null,oe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:tf,useDeferredValue:function(t,n){var a=Bn();return ef(a,t,n)},useTransition:function(){var t=Qu(!1);return t=wm.bind(null,oe,t.queue,!0,!1),Bn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=oe,u=Bn();if(xe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),qe===null)throw Error(s(349));(_e&127)!==0||im(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,xm(sm.bind(null,r,f,t),[t]),r.flags|=2048,ar(9,{destroy:void 0},am.bind(null,r,f,a,n),null),a},useId:function(){var t=Bn(),n=qe.identifierPrefix;if(xe){var a=Ni,r=Ui;a=(r&~(1<<32-zt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Nl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=vx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:af,useFormState:pm,useActionState:pm,useOptimistic:function(t){var n=Bn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=sf.bind(null,oe,!0,a),a.dispatch=n,[t,n]},useMemoCache:ju,useCacheRefresh:function(){return Bn().memoizedState=Ex.bind(null,oe)},useEffectEvent:function(t){var n=Bn(),a={impl:t};return n.memoizedState=a,function(){if((Le&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},rf={readContext:Rn,use:Ol,useCallback:Tm,useContext:Rn,useEffect:$u,useImperativeHandle:Em,useInsertionEffect:Mm,useLayoutEffect:ym,useMemo:Am,useReducer:Pl,useRef:vm,useState:function(){return Pl(ta)},useDebugValue:tf,useDeferredValue:function(t,n){var a=rn();return Rm(a,ke.memoizedState,t,n)},useTransition:function(){var t=Pl(ta)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:fo(t),n]},useSyncExternalStore:nm,useId:Um,useHostTransitionStatus:af,useFormState:mm,useActionState:mm,useOptimistic:function(t,n){var a=rn();return lm(a,ke,t,n)},useMemoCache:ju,useCacheRefresh:Nm};rf.useEffectEvent=Sm;var Fm={readContext:Rn,use:Ol,useCallback:Tm,useContext:Rn,useEffect:$u,useImperativeHandle:Em,useInsertionEffect:Mm,useLayoutEffect:ym,useMemo:Am,useReducer:Ku,useRef:vm,useState:function(){return Ku(ta)},useDebugValue:tf,useDeferredValue:function(t,n){var a=rn();return ke===null?ef(a,t,n):Rm(a,ke.memoizedState,t,n)},useTransition:function(){var t=Ku(ta)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:fo(t),n]},useSyncExternalStore:nm,useId:Um,useHostTransitionStatus:af,useFormState:_m,useActionState:_m,useOptimistic:function(t,n){var a=rn();return ke!==null?lm(a,ke,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ju,useCacheRefresh:Nm};Fm.useEffectEvent=Sm;function of(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var lf={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=ii(),u=Da(r);u.payload=n,a!=null&&(u.callback=a),n=Ua(t,u,r),n!==null&&(jn(n,t,r),oo(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=ii(),u=Da(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ua(t,u,r),n!==null&&(jn(n,t,r),oo(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ii(),r=Da(a);r.tag=2,n!=null&&(r.callback=n),n=Ua(t,r,a),n!==null&&(jn(n,t,a),oo(n,t,a))}};function Im(t,n,a,r,u,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,x):n.prototype&&n.prototype.isPureReactComponent?!$r(a,r)||!$r(u,f):!0}function Bm(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&lf.enqueueReplaceState(n,n.state,null)}function xs(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Hm(t){gl(t)}function Gm(t){console.error(t)}function Vm(t){gl(t)}function Bl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function km(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function cf(t,n,a){return a=Da(a),a.tag=3,a.payload={element:null},a.callback=function(){Bl(t,n)},a}function Xm(t){return t=Da(t),t.tag=3,t}function Wm(t,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;t.payload=function(){return u(f)},t.callback=function(){km(n,a,r)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){km(n,a,r),typeof u!="function"&&(Fa===null?Fa=new Set([this]):Fa.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})})}function Ax(t,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ks(n,a,u,!0),a=$n.current,a!==null){switch(a.tag){case 31:case 13:return di===null?Ql():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===Al?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Of(t,r,u)),!1;case 22:return a.flags|=65536,r===Al?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Of(t,r,u)),!1}throw Error(s(435,a.tag))}return Of(t,r,u),Ql(),!1}if(xe)return n=$n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==Ru&&(t=Error(s(422),{cause:r}),no(ci(t,a)))):(r!==Ru&&(n=Error(s(423),{cause:r}),no(ci(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,r=ci(r,a),u=cf(t.stateNode,r,u),Iu(t,u),nn!==4&&(nn=2)),!1;var f=Error(s(520),{cause:r});if(f=ci(f,a),yo===null?yo=[f]:yo.push(f),nn!==4&&(nn=2),n===null)return!0;r=ci(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=cf(a.stateNode,r,t),Iu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Fa===null||!Fa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Xm(u),Wm(u,t,a,r),Iu(a,u),!1}a=a.return}while(a!==null);return!1}var uf=Error(s(461)),fn=!1;function wn(t,n,a,r){n.child=t===null?Zp(n,null,a,r):_s(n,t.child,a,r)}function qm(t,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var x={};for(var R in r)R!=="ref"&&(x[R]=r[R])}else x=r;return ds(n),r=Xu(t,n,a,x,f,u),R=Wu(),t!==null&&!fn?(qu(t,n,u),ea(t,n,u)):(xe&&R&&Tu(n),n.flags|=1,wn(t,n,r,u),n.child)}function Ym(t,n,a,r,u){if(t===null){var f=a.type;return typeof f=="function"&&!yu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,jm(t,n,f,r,u)):(t=Sl(a.type,null,r,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!vf(t,u)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:$r,a(x,r)&&t.ref===n.ref)return ea(t,n,u)}return n.flags|=1,t=Zi(f,r),t.ref=n.ref,t.return=n,n.child=t}function jm(t,n,a,r,u){if(t!==null){var f=t.memoizedProps;if($r(f,r)&&t.ref===n.ref)if(fn=!1,n.pendingProps=r=f,vf(t,u))(t.flags&131072)!==0&&(fn=!0);else return n.lanes=t.lanes,ea(t,n,u)}return ff(t,n,a,r,u)}function Zm(t,n,a,r){var u=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return Km(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&El(n,f!==null?f.cachePool:null),f!==null?Jp(n,f):Hu(),$p(n);else return r=n.lanes=536870912,Km(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(El(n,f.cachePool),Jp(n,f),La(),n.memoizedState=null):(t!==null&&El(n,null),Hu(),La());return wn(t,n,u,a),n.child}function mo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Km(t,n,a,r,u){var f=Ou();return f=f===null?null:{parent:cn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&El(n,null),Hu(),$p(n),t!==null&&Ks(t,n,r,!0),n.childLanes=u,null}function Hl(t,n){return n=Vl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Qm(t,n,a){return _s(n,t.child,null,a),t=Hl(n,n.pendingProps),t.flags|=2,ti(n),n.memoizedState=null,t}function Rx(t,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(xe){if(r.mode==="hidden")return t=Hl(n,r),n.lanes=536870912,mo(null,t);if(Vu(n),(t=je)?(t=cg(t,hi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:Ui,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=Op(t),a.return=n,n.child=a,An=n,je=null)):t=null,t===null)throw Ra(n);return n.lanes=536870912,null}return Hl(n,r)}var f=t.memoizedState;if(f!==null){var x=f.dehydrated;if(Vu(n),u)if(n.flags&256)n.flags&=-257,n=Qm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||Ks(t,n,a,!1),u=(a&t.childLanes)!==0,fn||u){if(r=qe,r!==null&&(x=Ps(r,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,cs(t,x),jn(r,t,x),uf;Ql(),n=Qm(t,n,a)}else t=f.treeContext,je=pi(x.nextSibling),An=n,xe=!0,Aa=null,hi=!1,t!==null&&Fp(n,t),n=Hl(n,r),n.flags|=4096;return n}return t=Zi(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Gl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function ff(t,n,a,r,u){return ds(n),a=Xu(t,n,a,r,void 0,u),r=Wu(),t!==null&&!fn?(qu(t,n,u),ea(t,n,u)):(xe&&r&&Tu(n),n.flags|=1,wn(t,n,a,u),n.child)}function Jm(t,n,a,r,u,f){return ds(n),n.updateQueue=null,a=em(n,r,a,u),tm(t),r=Wu(),t!==null&&!fn?(qu(t,n,f),ea(t,n,f)):(xe&&r&&Tu(n),n.flags|=1,wn(t,n,a,f),n.child)}function $m(t,n,a,r,u){if(ds(n),n.stateNode===null){var f=qs,x=a.contextType;typeof x=="object"&&x!==null&&(f=Rn(x)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=lf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},zu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Rn(x):qs,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(of(n,a,x,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&lf.enqueueReplaceState(f,f.state,null),co(n,r,f,u),lo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,G=xs(a,R);f.props=G;var at=f.context,gt=a.contextType;x=qs,typeof gt=="object"&&gt!==null&&(x=Rn(gt));var xt=a.getDerivedStateFromProps;gt=typeof xt=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,gt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||at!==x)&&Bm(n,f,r,x),Ca=!1;var ot=n.memoizedState;f.state=ot,co(n,r,f,u),lo(),at=n.memoizedState,R||ot!==at||Ca?(typeof xt=="function"&&(of(n,a,xt,r),at=n.memoizedState),(G=Ca||Im(n,a,G,r,ot,at,x))?(gt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=at),f.props=r,f.state=at,f.context=x,r=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Fu(t,n),x=n.memoizedProps,gt=xs(a,x),f.props=gt,xt=n.pendingProps,ot=f.context,at=a.contextType,G=qs,typeof at=="object"&&at!==null&&(G=Rn(at)),R=a.getDerivedStateFromProps,(at=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==xt||ot!==G)&&Bm(n,f,r,G),Ca=!1,ot=n.memoizedState,f.state=ot,co(n,r,f,u),lo();var ct=n.memoizedState;x!==xt||ot!==ct||Ca||t!==null&&t.dependencies!==null&&yl(t.dependencies)?(typeof R=="function"&&(of(n,a,R,r),ct=n.memoizedState),(gt=Ca||Im(n,a,gt,r,ot,ct,G)||t!==null&&t.dependencies!==null&&yl(t.dependencies))?(at||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ct,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ct,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&ot===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&ot===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ct),f.props=r,f.state=ct,f.context=G,r=gt):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&ot===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&ot===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Gl(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=_s(n,t.child,null,u),n.child=_s(n,null,a,u)):wn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ea(t,n,u),t}function t0(t,n,a,r){return fs(),n.flags|=256,wn(t,n,a,r),n.child}var hf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function df(t){return{baseLanes:t,cachePool:kp()}}function pf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ni),t}function e0(t,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(sn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(xe){if(u?Na(n):La(),(t=je)?(t=cg(t,hi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:Ui,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=Op(t),a.return=n,n.child=a,An=n,je=null)):t=null,t===null)throw Ra(n);return Kf(t)?n.lanes=32:n.lanes=536870912,null}var R=r.children;return r=r.fallback,u?(La(),u=n.mode,R=Vl({mode:"hidden",children:R},u),r=us(r,u,a,null),R.return=n,r.return=n,R.sibling=r,n.child=R,r=n.child,r.memoizedState=df(a),r.childLanes=pf(t,x,a),n.memoizedState=hf,mo(null,r)):(Na(n),mf(n,R))}var G=t.memoizedState;if(G!==null&&(R=G.dehydrated,R!==null)){if(f)n.flags&256?(Na(n),n.flags&=-257,n=gf(t,n,a)):n.memoizedState!==null?(La(),n.child=t.child,n.flags|=128,n=null):(La(),R=r.fallback,u=n.mode,r=Vl({mode:"visible",children:r.children},u),R=us(R,u,a,null),R.flags|=2,r.return=n,R.return=n,r.sibling=R,n.child=r,_s(n,t.child,null,a),r=n.child,r.memoizedState=df(a),r.childLanes=pf(t,x,a),n.memoizedState=hf,n=mo(null,r));else if(Na(n),Kf(R)){if(x=R.nextSibling&&R.nextSibling.dataset,x)var at=x.dgst;x=at,r=Error(s(419)),r.stack="",r.digest=x,no({value:r,source:null,stack:null}),n=gf(t,n,a)}else if(fn||Ks(t,n,a,!1),x=(a&t.childLanes)!==0,fn||x){if(x=qe,x!==null&&(r=Ps(x,a),r!==0&&r!==G.retryLane))throw G.retryLane=r,cs(t,r),jn(x,t,r),uf;Zf(R)||Ql(),n=gf(t,n,a)}else Zf(R)?(n.flags|=192,n.child=t.child,n=null):(t=G.treeContext,je=pi(R.nextSibling),An=n,xe=!0,Aa=null,hi=!1,t!==null&&Fp(n,t),n=mf(n,r.children),n.flags|=4096);return n}return u?(La(),R=r.fallback,u=n.mode,G=t.child,at=G.sibling,r=Zi(G,{mode:"hidden",children:r.children}),r.subtreeFlags=G.subtreeFlags&65011712,at!==null?R=Zi(at,R):(R=us(R,u,a,null),R.flags|=2),R.return=n,r.return=n,r.sibling=R,n.child=r,mo(null,r),r=n.child,R=t.child.memoizedState,R===null?R=df(a):(u=R.cachePool,u!==null?(G=cn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=kp(),R={baseLanes:R.baseLanes|a,cachePool:u}),r.memoizedState=R,r.childLanes=pf(t,x,a),n.memoizedState=hf,mo(t.child,r)):(Na(n),a=t.child,t=a.sibling,a=Zi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function mf(t,n){return n=Vl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Vl(t,n){return t=Jn(22,t,null,n),t.lanes=0,t}function gf(t,n,a){return _s(n,t.child,null,a),t=mf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function n0(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Du(t.return,n,a)}function _f(t,n,a,r,u,f){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=r,x.tail=a,x.tailMode=u,x.treeForkCount=f)}function i0(t,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var x=sn.current,R=(x&2)!==0;if(R?(x=x&1|2,n.flags|=128):x&=1,ht(sn,x),wn(t,n,r,a),r=xe?eo:0,!R&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&n0(t,a,n);else if(t.tag===19)n0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Dl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),_f(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Dl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}_f(n,!0,a,null,f,r);break;case"together":_f(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ea(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),za|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ks(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Zi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Zi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function vf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&yl(t)))}function wx(t,n,a){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),wa(n,cn,t.memoizedState.cache),fs();break;case 27:case 5:Ht(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:wa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Vu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Na(n),n.flags|=128,null):(a&n.child.childLanes)!==0?e0(t,n,a):(Na(n),t=ea(t,n,a),t!==null?t.sibling:null);Na(n);break;case 19:var u=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Ks(t,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return i0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ht(sn,sn.current),r)break;return null;case 22:return n.lanes=0,Zm(t,n,a,n.pendingProps);case 24:wa(n,cn,t.memoizedState.cache)}return ea(t,n,a)}function a0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)fn=!0;else{if(!vf(t,a)&&(n.flags&128)===0)return fn=!1,wx(t,n,a);fn=(t.flags&131072)!==0}else fn=!1,xe&&(n.flags&1048576)!==0&&zp(n,eo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=ms(n.elementType),n.type=t,typeof t=="function")yu(t)?(r=xs(t,r),n.tag=1,n=$m(null,n,t,r,a)):(n.tag=0,n=ff(null,n,t,r,a));else{if(t!=null){var u=t.$$typeof;if(u===N){n.tag=11,n=qm(null,n,t,r,a);break t}else if(u===I){n.tag=14,n=Ym(null,n,t,r,a);break t}}throw n=ut(t)||t,Error(s(306,n,""))}}return n;case 0:return ff(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=xs(r,n.pendingProps),$m(t,n,r,u,a);case 3:t:{if(Dt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Fu(t,n),co(n,r,null,a);var x=n.memoizedState;if(r=x.cache,wa(n,cn,r),r!==f.cache&&Uu(n,[cn],a,!0),lo(),r=x.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=t0(t,n,r,a);break t}else if(r!==u){u=ci(Error(s(424)),n),no(u),n=t0(t,n,r,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,je=pi(t.firstChild),An=n,xe=!0,Aa=null,hi=!0,a=Zp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(fs(),r===u){n=ea(t,n,a);break t}wn(t,n,r,a)}n=n.child}return n;case 26:return Gl(t,n),t===null?(a=mg(n.type,null,n.pendingProps,null))?n.memoizedState=a:xe||(a=n.type,t=n.pendingProps,r=ac(st.current).createElement(a),r[ln]=n,r[Sn]=t,Cn(r,a,t),w(r),n.stateNode=r):n.memoizedState=mg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ht(n),t===null&&xe&&(r=n.stateNode=hg(n.type,n.pendingProps,st.current),An=n,hi=!0,u=je,Ga(n.type)?(Qf=u,je=pi(r.firstChild)):je=u),wn(t,n,n.pendingProps.children,a),Gl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&xe&&((u=r=je)&&(r=aS(r,n.type,n.pendingProps,hi),r!==null?(n.stateNode=r,An=n,je=pi(r.firstChild),hi=!1,u=!0):u=!1),u||Ra(n)),Ht(n),u=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,r=f.children,qf(u,f)?r=null:x!==null&&qf(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=Xu(t,n,xx,null,null,a),Do._currentValue=u),Gl(t,n),wn(t,n,r,a),n.child;case 6:return t===null&&xe&&((t=a=je)&&(a=sS(a,n.pendingProps,hi),a!==null?(n.stateNode=a,An=n,je=null,t=!0):t=!1),t||Ra(n)),null;case 13:return e0(t,n,a);case 4:return Dt(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=_s(n,null,r,a):wn(t,n,r,a),n.child;case 11:return qm(t,n,n.type,n.pendingProps,a);case 7:return wn(t,n,n.pendingProps,a),n.child;case 8:return wn(t,n,n.pendingProps.children,a),n.child;case 12:return wn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,wa(n,n.type,r.value),wn(t,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,ds(n),u=Rn(u),r=r(u),n.flags|=1,wn(t,n,r,a),n.child;case 14:return Ym(t,n,n.type,n.pendingProps,a);case 15:return jm(t,n,n.type,n.pendingProps,a);case 19:return i0(t,n,a);case 31:return Rx(t,n,a);case 22:return Zm(t,n,a,n.pendingProps);case 24:return ds(n),r=Rn(cn),t===null?(u=Ou(),u===null&&(u=qe,f=Nu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},zu(n),wa(n,cn,u)):((t.lanes&a)!==0&&(Fu(t,n),co(n,null,null,a),lo()),u=t.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),wa(n,cn,r)):(r=f.cache,wa(n,cn,r),r!==u.cache&&Uu(n,[cn],a,!0))),wn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function na(t){t.flags|=4}function xf(t,n,a,r,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(U0())t.flags|=8192;else throw gs=Al,Pu}else t.flags&=-16777217}function s0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Sg(n))if(U0())t.flags|=8192;else throw gs=Al,Pu}function kl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Fe():536870912,t.lanes|=n,lr|=n)}function go(t,n){if(!xe)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ze(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function Cx(t,n,a){var r=n.pendingProps;switch(Au(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Ji(cn),kt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Zs(n)?na(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,wu())),Ze(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(na(n),f!==null?(Ze(n),s0(n,f)):(Ze(n),xf(n,u,null,r,a))):f?f!==t.memoizedState?(na(n),Ze(n),s0(n,f)):(Ze(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&na(n),Ze(n),xf(n,u,t,r,a)),null;case 27:if(he(n),a=st.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&na(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}t=Et.current,Zs(n)?Ip(n):(t=hg(u,r,a),n.stateNode=t,na(n))}return Ze(n),null;case 5:if(he(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&na(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}if(f=Et.current,Zs(n))Ip(n);else{var x=ac(st.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?x.createElement("select",{is:r.is}):x.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?x.createElement(u,{is:r.is}):x.createElement(u)}}f[ln]=n,f[Sn]=r;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;t:switch(Cn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&na(n)}}return Ze(n),xf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&na(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=st.current,Zs(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,u=An,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}t[ln]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||eg(t.nodeValue,a)),t||Ra(n,!0)}else t=ac(t).createTextNode(r),t[ln]=n,n.stateNode=t}return Ze(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Zs(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[ln]=n}else fs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),t=!1}else a=wu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ze(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Zs(n),r!==null&&r.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else fs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),u=!1}else u=wu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),kl(n,n.updateQueue),Ze(n),null);case 4:return kt(),t===null&&Gf(n.stateNode.containerInfo),Ze(n),null;case 10:return Ji(n.type),Ze(n),null;case 19:if(et(sn),r=n.memoizedState,r===null)return Ze(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)go(r,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Dl(t),f!==null){for(n.flags|=128,go(r,!1),t=f.updateQueue,n.updateQueue=t,kl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Lp(a,t),a=a.sibling;return ht(sn,sn.current&1|2),xe&&Ki(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&b()>jl&&(n.flags|=128,u=!0,go(r,!1),n.lanes=4194304)}else{if(!u)if(t=Dl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,kl(n,t),go(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!xe)return Ze(n),null}else 2*b()-r.renderingStartTime>jl&&a!==536870912&&(n.flags|=128,u=!0,go(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=b(),t.sibling=null,a=sn.current,ht(sn,u?a&1|2:a&1),xe&&Ki(n,r.treeForkCount),t):(Ze(n),null);case 22:case 23:return ti(n),Gu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&kl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&et(ps),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ji(cn),Ze(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Dx(t,n){switch(Au(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ji(cn),kt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return he(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(s(340));fs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ti(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));fs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return et(sn),null;case 4:return kt(),null;case 10:return Ji(n.type),null;case 22:case 23:return ti(n),Gu(),t!==null&&et(ps),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ji(cn),null;case 25:return null;default:return null}}function r0(t,n){switch(Au(n),n.tag){case 3:Ji(cn),kt();break;case 26:case 27:case 5:he(n);break;case 4:kt();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:et(sn);break;case 10:Ji(n.type);break;case 22:case 23:ti(n),Gu(),t!==null&&et(ps);break;case 24:Ji(cn)}}function _o(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&t)===t){r=void 0;var f=a.create,x=a.inst;r=f(),x.destroy=r}a=a.next}while(a!==u)}}catch(R){He(n,n.return,R)}}function Oa(t,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&t)===t){var x=r.inst,R=x.destroy;if(R!==void 0){x.destroy=void 0,u=n;var G=a,at=R;try{at()}catch(gt){He(u,G,gt)}}}r=r.next}while(r!==f)}}catch(gt){He(n,n.return,gt)}}function o0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Qp(n,a)}catch(r){He(t,t.return,r)}}}function l0(t,n,a){a.props=xs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){He(t,n,r)}}function vo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(u){He(t,n,u)}}function Li(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){He(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){He(t,n,u)}else a.current=null}function c0(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){He(t,t.return,u)}}function Sf(t,n,a){try{var r=t.stateNode;Jx(r,t.type,a,n),r[Sn]=n}catch(u){He(t,t.return,u)}}function u0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ga(t.type)||t.tag===4}function Mf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||u0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ga(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yf(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Yi));else if(r!==4&&(r===27&&Ga(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(yf(t,n,a),t=t.sibling;t!==null;)yf(t,n,a),t=t.sibling}function Xl(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Ga(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Xl(t,n,a),t=t.sibling;t!==null;)Xl(t,n,a),t=t.sibling}function f0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,r,a),n[ln]=t,n[Sn]=a}catch(f){He(t,t.return,f)}}var ia=!1,hn=!1,bf=!1,h0=typeof WeakSet=="function"?WeakSet:Set,vn=null;function Ux(t,n){if(t=t.containerInfo,Xf=fc,t=Ep(t),mu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,R=-1,G=-1,at=0,gt=0,xt=t,ot=null;e:for(;;){for(var ct;xt!==a||u!==0&&xt.nodeType!==3||(R=x+u),xt!==f||r!==0&&xt.nodeType!==3||(G=x+r),xt.nodeType===3&&(x+=xt.nodeValue.length),(ct=xt.firstChild)!==null;)ot=xt,xt=ct;for(;;){if(xt===t)break e;if(ot===a&&++at===u&&(R=x),ot===f&&++gt===r&&(G=x),(ct=xt.nextSibling)!==null)break;xt=ot,ot=xt.parentNode}xt=ct}a=R===-1||G===-1?null:{start:R,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Wf={focusedElem:t,selectionRange:a},fc=!1,vn=n;vn!==null;)if(n=vn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,vn=t;else for(;vn!==null;){switch(n=vn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Vt=xs(a.type,u);t=r.getSnapshotBeforeUpdate(Vt,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(te){He(a,a.return,te)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)jf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":jf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,vn=t;break}vn=n.return}}function d0(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:sa(t,a),r&4&&_o(5,a);break;case 1:if(sa(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){He(a,a.return,x)}else{var u=xs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){He(a,a.return,x)}}r&64&&o0(a),r&512&&vo(a,a.return);break;case 3:if(sa(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Qp(t,n)}catch(x){He(a,a.return,x)}}break;case 27:n===null&&r&4&&f0(a);case 26:case 5:sa(t,a),n===null&&r&4&&c0(a),r&512&&vo(a,a.return);break;case 12:sa(t,a);break;case 31:sa(t,a),r&4&&g0(t,a);break;case 13:sa(t,a),r&4&&_0(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Hx.bind(null,a),rS(t,a))));break;case 22:if(r=a.memoizedState!==null||ia,!r){n=n!==null&&n.memoizedState!==null||hn,u=ia;var f=hn;ia=r,(hn=n)&&!f?ra(t,a,(a.subtreeFlags&8772)!==0):sa(t,a),ia=u,hn=f}break;case 30:break;default:sa(t,a)}}function p0(t){var n=t.alternate;n!==null&&(t.alternate=null,p0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Wr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Je=null,Xn=!1;function aa(t,n,a){for(a=a.child;a!==null;)m0(t,n,a),a=a.sibling}function m0(t,n,a){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(bt,a)}catch{}switch(a.tag){case 26:hn||Li(a,n),aa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||Li(a,n);var r=Je,u=Xn;Ga(a.type)&&(Je=a.stateNode,Xn=!1),aa(t,n,a),Ro(a.stateNode),Je=r,Xn=u;break;case 5:hn||Li(a,n);case 6:if(r=Je,u=Xn,Je=null,aa(t,n,a),Je=r,Xn=u,Je!==null)if(Xn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(f){He(a,n,f)}else try{Je.removeChild(a.stateNode)}catch(f){He(a,n,f)}break;case 18:Je!==null&&(Xn?(t=Je,og(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),gr(t)):og(Je,a.stateNode));break;case 4:r=Je,u=Xn,Je=a.stateNode.containerInfo,Xn=!0,aa(t,n,a),Je=r,Xn=u;break;case 0:case 11:case 14:case 15:Oa(2,a,n),hn||Oa(4,a,n),aa(t,n,a);break;case 1:hn||(Li(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&l0(a,n,r)),aa(t,n,a);break;case 21:aa(t,n,a);break;case 22:hn=(r=hn)||a.memoizedState!==null,aa(t,n,a),hn=r;break;default:aa(t,n,a)}}function g0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{gr(t)}catch(a){He(n,n.return,a)}}}function _0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{gr(t)}catch(a){He(n,n.return,a)}}function Nx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new h0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new h0),n;default:throw Error(s(435,t.tag))}}function Wl(t,n){var a=Nx(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=Gx.bind(null,t,r);r.then(u,u)}})}function Wn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=t,x=n,R=x;t:for(;R!==null;){switch(R.tag){case 27:if(Ga(R.type)){Je=R.stateNode,Xn=!1;break t}break;case 5:Je=R.stateNode,Xn=!1;break t;case 3:case 4:Je=R.stateNode.containerInfo,Xn=!0;break t}R=R.return}if(Je===null)throw Error(s(160));m0(f,x,u),Je=null,Xn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)v0(n,t),n=n.sibling}var bi=null;function v0(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Wn(n,t),qn(t),r&4&&(Oa(3,t,t.return),_o(3,t),Oa(5,t,t.return));break;case 1:Wn(n,t),qn(t),r&512&&(hn||a===null||Li(a,a.return)),r&64&&ia&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=bi;if(Wn(n,t),qn(t),r&512&&(hn||a===null||Li(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[as]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),Cn(f,r,a),f[ln]=t,w(f),r=f;break t;case"link":var x=vg("link","href",u).get(r+(a.href||""));if(x){for(var R=0;R<x.length;R++)if(f=x[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(R,1);break e}}f=u.createElement(r),Cn(f,r,a),u.head.appendChild(f);break;case"meta":if(x=vg("meta","content",u).get(r+(a.content||""))){for(R=0;R<x.length;R++)if(f=x[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(R,1);break e}}f=u.createElement(r),Cn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[ln]=t,w(f),r=f}t.stateNode=r}else xg(u,t.type,t.stateNode);else t.stateNode=_g(u,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?xg(u,t.type,t.stateNode):_g(u,r,t.memoizedProps)):r===null&&t.stateNode!==null&&Sf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,t),qn(t),r&512&&(hn||a===null||Li(a,a.return)),a!==null&&r&4&&Sf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,t),qn(t),r&512&&(hn||a===null||Li(a,a.return)),t.flags&32){u=t.stateNode;try{pn(u,"")}catch(Vt){He(t,t.return,Vt)}}r&4&&t.stateNode!=null&&(u=t.memoizedProps,Sf(t,u,a!==null?a.memoizedProps:u)),r&1024&&(bf=!0);break;case 6:if(Wn(n,t),qn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Vt){He(t,t.return,Vt)}}break;case 3:if(oc=null,u=bi,bi=sc(n.containerInfo),Wn(n,t),bi=u,qn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{gr(n.containerInfo)}catch(Vt){He(t,t.return,Vt)}bf&&(bf=!1,x0(t));break;case 4:r=bi,bi=sc(t.stateNode.containerInfo),Wn(n,t),qn(t),bi=r;break;case 12:Wn(n,t),qn(t);break;case 31:Wn(n,t),qn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Wl(t,r)));break;case 13:Wn(n,t),qn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Yl=b()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Wl(t,r)));break;case 22:u=t.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,at=ia,gt=hn;if(ia=at||u,hn=gt||G,Wn(n,t),hn=gt,ia=at,qn(t),r&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||ia||hn||Ss(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,u)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{R=G.stateNode;var xt=G.memoizedProps.style,ot=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;R.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Vt){He(G,G.return,Vt)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Vt){He(G,G.return,Vt)}}}else if(n.tag===18){if(a===null){G=n;try{var ct=G.stateNode;u?lg(ct,!0):lg(G.stateNode,!1)}catch(Vt){He(G,G.return,Vt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Wl(t,a))));break;case 19:Wn(n,t),qn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Wl(t,r)));break;case 30:break;case 21:break;default:Wn(n,t),qn(t)}}function qn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(u0(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Mf(t);Xl(t,f,u);break;case 5:var x=a.stateNode;a.flags&32&&(pn(x,""),a.flags&=-33);var R=Mf(t);Xl(t,R,x);break;case 3:case 4:var G=a.stateNode.containerInfo,at=Mf(t);yf(t,at,G);break;default:throw Error(s(161))}}catch(gt){He(t,t.return,gt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function x0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;x0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function sa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)d0(t,n.alternate,n),n=n.sibling}function Ss(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Oa(4,n,n.return),Ss(n);break;case 1:Li(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&l0(n,n.return,a),Ss(n);break;case 27:Ro(n.stateNode);case 26:case 5:Li(n,n.return),Ss(n);break;case 22:n.memoizedState===null&&Ss(n);break;case 30:Ss(n);break;default:Ss(n)}t=t.sibling}}function ra(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:ra(u,f,a),_o(4,f);break;case 1:if(ra(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(at){He(r,r.return,at)}if(r=f,u=r.updateQueue,u!==null){var R=r.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)Kp(G[u],R)}catch(at){He(r,r.return,at)}}a&&x&64&&o0(f),vo(f,f.return);break;case 27:f0(f);case 26:case 5:ra(u,f,a),a&&r===null&&x&4&&c0(f),vo(f,f.return);break;case 12:ra(u,f,a);break;case 31:ra(u,f,a),a&&x&4&&g0(u,f);break;case 13:ra(u,f,a),a&&x&4&&_0(u,f);break;case 22:f.memoizedState===null&&ra(u,f,a),vo(f,f.return);break;case 30:break;default:ra(u,f,a)}n=n.sibling}}function Ef(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&io(a))}function Tf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&io(t))}function Ei(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)S0(t,n,a,r),n=n.sibling}function S0(t,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(t,n,a,r),u&2048&&_o(9,n);break;case 1:Ei(t,n,a,r);break;case 3:Ei(t,n,a,r),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&io(t)));break;case 12:if(u&2048){Ei(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,R=f.onPostCommit;typeof R=="function"&&R(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){He(n,n.return,G)}}else Ei(t,n,a,r);break;case 31:Ei(t,n,a,r);break;case 13:Ei(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?Ei(t,n,a,r):xo(t,n):f._visibility&2?Ei(t,n,a,r):(f._visibility|=2,sr(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Ef(x,n);break;case 24:Ei(t,n,a,r),u&2048&&Tf(n.alternate,n);break;default:Ei(t,n,a,r)}}function sr(t,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,x=n,R=a,G=r,at=x.flags;switch(x.tag){case 0:case 11:case 15:sr(f,x,R,G,u),_o(8,x);break;case 23:break;case 22:var gt=x.stateNode;x.memoizedState!==null?gt._visibility&2?sr(f,x,R,G,u):xo(f,x):(gt._visibility|=2,sr(f,x,R,G,u)),u&&at&2048&&Ef(x.alternate,x);break;case 24:sr(f,x,R,G,u),u&&at&2048&&Tf(x.alternate,x);break;default:sr(f,x,R,G,u)}n=n.sibling}}function xo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,u=r.flags;switch(r.tag){case 22:xo(a,r),u&2048&&Ef(r.alternate,r);break;case 24:xo(a,r),u&2048&&Tf(r.alternate,r);break;default:xo(a,r)}n=n.sibling}}var So=8192;function rr(t,n,a){if(t.subtreeFlags&So)for(t=t.child;t!==null;)M0(t,n,a),t=t.sibling}function M0(t,n,a){switch(t.tag){case 26:rr(t,n,a),t.flags&So&&t.memoizedState!==null&&vS(a,bi,t.memoizedState,t.memoizedProps);break;case 5:rr(t,n,a);break;case 3:case 4:var r=bi;bi=sc(t.stateNode.containerInfo),rr(t,n,a),bi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=So,So=16777216,rr(t,n,a),So=r):rr(t,n,a));break;default:rr(t,n,a)}}function y0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Mo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];vn=r,E0(r,t)}y0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)b0(t),t=t.sibling}function b0(t){switch(t.tag){case 0:case 11:case 15:Mo(t),t.flags&2048&&Oa(9,t,t.return);break;case 3:Mo(t);break;case 12:Mo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,ql(t)):Mo(t);break;default:Mo(t)}}function ql(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];vn=r,E0(r,t)}y0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Oa(8,n,n.return),ql(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ql(n));break;default:ql(n)}t=t.sibling}}function E0(t,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:Oa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:io(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,vn=r;else t:for(a=t;vn!==null;){r=vn;var u=r.sibling,f=r.return;if(p0(r),r===a){vn=null;break t}if(u!==null){u.return=f,vn=u;break t}vn=f}}}var Lx={getCacheForType:function(t){var n=Rn(cn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Rn(cn).controller.signal}},Ox=typeof WeakMap=="function"?WeakMap:Map,Le=0,qe=null,pe=null,_e=0,Be=0,ei=null,Pa=!1,or=!1,Af=!1,oa=0,nn=0,za=0,Ms=0,Rf=0,ni=0,lr=0,yo=null,Yn=null,wf=!1,Yl=0,T0=0,jl=1/0,Zl=null,Fa=null,mn=0,Ia=null,cr=null,la=0,Cf=0,Df=null,A0=null,bo=0,Uf=null;function ii(){return(Le&2)!==0&&_e!==0?_e&-_e:C.T!==null?Ff():kr()}function R0(){if(ni===0)if((_e&536870912)===0||xe){var t=At;At<<=1,(At&3932160)===0&&(At=262144),ni=t}else ni=536870912;return t=$n.current,t!==null&&(t.flags|=32),ni}function jn(t,n,a){(t===qe&&(Be===2||Be===9)||t.cancelPendingCommit!==null)&&(ur(t,0),Ba(t,_e,ni,!1)),Nn(t,a),((Le&2)===0||t!==qe)&&(t===qe&&((Le&2)===0&&(Ms|=a),nn===4&&Ba(t,_e,ni,!1)),Oi(t))}function w0(t,n,a){if((Le&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Rt(t,n),u=r?Fx(t,n):Lf(t,n,!0),f=r;do{if(u===0){or&&!r&&Ba(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Px(a)){u=Lf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var R=t;u=yo;var G=R.current.memoizedState.isDehydrated;if(G&&(ur(R,x).flags|=256),x=Lf(R,x,!1),x!==2){if(Af&&!G){R.errorRecoveryDisabledLanes|=f,Ms|=f,u=4;break t}f=Yn,Yn=u,f!==null&&(Yn===null?Yn=f:Yn.push.apply(Yn,f))}u=x}if(f=!1,u!==2)continue}}if(u===1){ur(t,0),Ba(t,n,0,!0);break}t:{switch(r=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ba(r,n,ni,!Pa);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Yl+300-b(),10<u)){if(Ba(r,n,ni,!Pa),St(r,0,!0)!==0)break t;la=n,r.timeoutHandle=sg(C0.bind(null,r,a,Yn,Zl,wf,n,ni,Ms,lr,Pa,f,"Throttled",-0,0),u);break t}C0(r,a,Yn,Zl,wf,n,ni,Ms,lr,Pa,f,null,-0,0)}}break}while(!0);Oi(t)}function C0(t,n,a,r,u,f,x,R,G,at,gt,xt,ot,ct){if(t.timeoutHandle=-1,xt=n.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yi},M0(n,f,xt);var Vt=(f&62914560)===f?Yl-b():(f&4194048)===f?T0-b():0;if(Vt=xS(xt,Vt),Vt!==null){la=f,t.cancelPendingCommit=Vt(F0.bind(null,t,n,f,a,r,u,x,R,G,gt,xt,null,ot,ct)),Ba(t,f,x,!at);return}}F0(t,n,f,a,r,u,x,R,G)}function Px(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!Qn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ba(t,n,a,r){n&=~Rf,n&=~Ms,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var u=n;0<u;){var f=31-zt(u),x=1<<f;r[f]=-1,u&=~x}a!==0&&ol(t,a,n)}function Kl(){return(Le&6)===0?(Eo(0),!1):!0}function Nf(){if(pe!==null){if(Be===0)var t=pe.return;else t=pe,Qi=hs=null,Yu(t),tr=null,so=0,t=pe;for(;t!==null;)r0(t.alternate,t),t=t.return;pe=null}}function ur(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,eS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),la=0,Nf(),qe=t,pe=a=Zi(t.current,null),_e=n,Be=0,ei=null,Pa=!1,or=Rt(t,n),Af=!1,lr=ni=Rf=Ms=za=nn=0,Yn=yo=null,wf=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var u=31-zt(r),f=1<<u;n|=t[u],r&=~f}return oa=n,_l(),a}function D0(t,n){oe=null,C.H=po,n===$s||n===Tl?(n=qp(),Be=3):n===Pu?(n=qp(),Be=4):Be=n===uf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ei=n,pe===null&&(nn=1,Bl(t,ci(n,t.current)))}function U0(){var t=$n.current;return t===null?!0:(_e&4194048)===_e?di===null:(_e&62914560)===_e||(_e&536870912)!==0?t===di:!1}function N0(){var t=C.H;return C.H=po,t===null?po:t}function L0(){var t=C.A;return C.A=Lx,t}function Ql(){nn=4,Pa||(_e&4194048)!==_e&&$n.current!==null||(or=!0),(za&134217727)===0&&(Ms&134217727)===0||qe===null||Ba(qe,_e,ni,!1)}function Lf(t,n,a){var r=Le;Le|=2;var u=N0(),f=L0();(qe!==t||_e!==n)&&(Zl=null,ur(t,n)),n=!1;var x=nn;t:do try{if(Be!==0&&pe!==null){var R=pe,G=ei;switch(Be){case 8:Nf(),x=6;break t;case 3:case 2:case 9:case 6:$n.current===null&&(n=!0);var at=Be;if(Be=0,ei=null,fr(t,R,G,at),a&&or){x=0;break t}break;default:at=Be,Be=0,ei=null,fr(t,R,G,at)}}zx(),x=nn;break}catch(gt){D0(t,gt)}while(!0);return n&&t.shellSuspendCounter++,Qi=hs=null,Le=r,C.H=u,C.A=f,pe===null&&(qe=null,_e=0,_l()),x}function zx(){for(;pe!==null;)O0(pe)}function Fx(t,n){var a=Le;Le|=2;var r=N0(),u=L0();qe!==t||_e!==n?(Zl=null,jl=b()+500,ur(t,n)):or=Rt(t,n);t:do try{if(Be!==0&&pe!==null){n=pe;var f=ei;e:switch(Be){case 1:Be=0,ei=null,fr(t,n,f,1);break;case 2:case 9:if(Xp(f)){Be=0,ei=null,P0(n);break}n=function(){Be!==2&&Be!==9||qe!==t||(Be=7),Oi(t)},f.then(n,n);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:Xp(f)?(Be=0,ei=null,P0(n)):(Be=0,ei=null,fr(t,n,f,7));break;case 5:var x=null;switch(pe.tag){case 26:x=pe.memoizedState;case 5:case 27:var R=pe;if(x?Sg(x):R.stateNode.complete){Be=0,ei=null;var G=R.sibling;if(G!==null)pe=G;else{var at=R.return;at!==null?(pe=at,Jl(at)):pe=null}break e}}Be=0,ei=null,fr(t,n,f,5);break;case 6:Be=0,ei=null,fr(t,n,f,6);break;case 8:Nf(),nn=6;break t;default:throw Error(s(462))}}Ix();break}catch(gt){D0(t,gt)}while(!0);return Qi=hs=null,C.H=r,C.A=u,Le=a,pe!==null?0:(qe=null,_e=0,_l(),nn)}function Ix(){for(;pe!==null&&!Yt();)O0(pe)}function O0(t){var n=a0(t.alternate,t,oa);t.memoizedProps=t.pendingProps,n===null?Jl(t):pe=n}function P0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Jm(a,n,n.pendingProps,n.type,void 0,_e);break;case 11:n=Jm(a,n,n.pendingProps,n.type.render,n.ref,_e);break;case 5:Yu(n);default:r0(a,n),n=pe=Lp(n,oa),n=a0(a,n,oa)}t.memoizedProps=t.pendingProps,n===null?Jl(t):pe=n}function fr(t,n,a,r){Qi=hs=null,Yu(n),tr=null,so=0;var u=n.return;try{if(Ax(t,u,n,a,_e)){nn=1,Bl(t,ci(a,t.current)),pe=null;return}}catch(f){if(u!==null)throw pe=u,f;nn=1,Bl(t,ci(a,t.current)),pe=null;return}n.flags&32768?(xe||r===1?t=!0:or||(_e&536870912)!==0?t=!1:(Pa=t=!0,(r===2||r===9||r===3||r===6)&&(r=$n.current,r!==null&&r.tag===13&&(r.flags|=16384))),z0(n,t)):Jl(n)}function Jl(t){var n=t;do{if((n.flags&32768)!==0){z0(n,Pa);return}t=n.return;var a=Cx(n.alternate,n,oa);if(a!==null){pe=a;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=t}while(n!==null);nn===0&&(nn=5)}function z0(t,n){do{var a=Dx(t.alternate,t);if(a!==null){a.flags&=32767,pe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){pe=t;return}pe=t=a}while(t!==null);nn=6,pe=null}function F0(t,n,a,r,u,f,x,R,G){t.cancelPendingCommit=null;do $l();while(mn!==0);if((Le&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Su,xi(t,a,f,x,R,G),t===qe&&(pe=qe=null,_e=0),cr=n,Ia=t,la=a,Cf=f,Df=u,A0=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Vx(dt,function(){return V0(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=C.T,C.T=null,u=L.p,L.p=2,x=Le,Le|=4;try{Ux(t,n,a)}finally{Le=x,L.p=u,C.T=r}}mn=1,I0(),B0(),H0()}}function I0(){if(mn===1){mn=0;var t=Ia,n=cr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=C.T,C.T=null;var r=L.p;L.p=2;var u=Le;Le|=4;try{v0(n,t);var f=Wf,x=Ep(t.containerInfo),R=f.focusedElem,G=f.selectionRange;if(x!==R&&R&&R.ownerDocument&&bp(R.ownerDocument.documentElement,R)){if(G!==null&&mu(R)){var at=G.start,gt=G.end;if(gt===void 0&&(gt=at),"selectionStart"in R)R.selectionStart=at,R.selectionEnd=Math.min(gt,R.value.length);else{var xt=R.ownerDocument||document,ot=xt&&xt.defaultView||window;if(ot.getSelection){var ct=ot.getSelection(),Vt=R.textContent.length,te=Math.min(G.start,Vt),We=G.end===void 0?te:Math.min(G.end,Vt);!ct.extend&&te>We&&(x=We,We=te,te=x);var J=yp(R,te),k=yp(R,We);if(J&&k&&(ct.rangeCount!==1||ct.anchorNode!==J.node||ct.anchorOffset!==J.offset||ct.focusNode!==k.node||ct.focusOffset!==k.offset)){var it=xt.createRange();it.setStart(J.node,J.offset),ct.removeAllRanges(),te>We?(ct.addRange(it),ct.extend(k.node,k.offset)):(it.setEnd(k.node,k.offset),ct.addRange(it))}}}}for(xt=[],ct=R;ct=ct.parentNode;)ct.nodeType===1&&xt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<xt.length;R++){var vt=xt[R];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}fc=!!Xf,Wf=Xf=null}finally{Le=u,L.p=r,C.T=a}}t.current=n,mn=2}}function B0(){if(mn===2){mn=0;var t=Ia,n=cr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=C.T,C.T=null;var r=L.p;L.p=2;var u=Le;Le|=4;try{d0(t,n.alternate,n)}finally{Le=u,L.p=r,C.T=a}}mn=3}}function H0(){if(mn===4||mn===3){mn=0,F();var t=Ia,n=cr,a=la,r=A0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,cr=Ia=null,G0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Fa=null),zs(a),n=n.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(bt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=C.T,u=L.p,L.p=2,C.T=null;try{for(var f=t.onRecoverableError,x=0;x<r.length;x++){var R=r[x];f(R.value,{componentStack:R.stack})}}finally{C.T=n,L.p=u}}(la&3)!==0&&$l(),Oi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Uf?bo++:(bo=0,Uf=t):bo=0,Eo(0)}}function G0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,io(n)))}function $l(){return I0(),B0(),H0(),V0()}function V0(){if(mn!==5)return!1;var t=Ia,n=Cf;Cf=0;var a=zs(la),r=C.T,u=L.p;try{L.p=32>a?32:a,C.T=null,a=Df,Df=null;var f=Ia,x=la;if(mn=0,cr=Ia=null,la=0,(Le&6)!==0)throw Error(s(331));var R=Le;if(Le|=4,b0(f.current),S0(f,f.current,x,a),Le=R,Eo(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(bt,f)}catch{}return!0}finally{L.p=u,C.T=r,G0(t,n)}}function k0(t,n,a){n=ci(a,n),n=cf(t.stateNode,n,2),t=Ua(t,n,2),t!==null&&(Nn(t,2),Oi(t))}function He(t,n,a){if(t.tag===3)k0(t,t,a);else for(;n!==null;){if(n.tag===3){k0(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Fa===null||!Fa.has(r))){t=ci(a,t),a=Xm(2),r=Ua(n,a,2),r!==null&&(Wm(a,r,n,t),Nn(r,2),Oi(r));break}}n=n.return}}function Of(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new Ox;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Af=!0,u.add(a),t=Bx.bind(null,t,n,a),n.then(t,t))}function Bx(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,qe===t&&(_e&a)===a&&(nn===4||nn===3&&(_e&62914560)===_e&&300>b()-Yl?(Le&2)===0&&ur(t,0):Rf|=a,lr===_e&&(lr=0)),Oi(t)}function X0(t,n){n===0&&(n=Fe()),t=cs(t,n),t!==null&&(Nn(t,n),Oi(t))}function Hx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),X0(t,a)}function Gx(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),X0(t,a)}function Vx(t,n){return ye(t,n)}var tc=null,hr=null,Pf=!1,ec=!1,zf=!1,Ha=0;function Oi(t){t!==hr&&t.next===null&&(hr===null?tc=hr=t:hr=hr.next=t),ec=!0,Pf||(Pf=!0,Xx())}function Eo(t,n){if(!zf&&ec){zf=!0;do for(var a=!1,r=tc;r!==null;){if(t!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var x=r.suspendedLanes,R=r.pingedLanes;f=(1<<31-zt(42|t)+1)-1,f&=u&~(x&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,j0(r,f))}else f=_e,f=St(r,r===qe?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Rt(r,f)||(a=!0,j0(r,f));r=r.next}while(a);zf=!1}}function kx(){W0()}function W0(){ec=Pf=!1;var t=0;Ha!==0&&tS()&&(t=Ha);for(var n=b(),a=null,r=tc;r!==null;){var u=r.next,f=q0(r,n);f===0?(r.next=null,a===null?tc=u:a.next=u,u===null&&(hr=a)):(a=r,(t!==0||(f&3)!==0)&&(ec=!0)),r=u}mn!==0&&mn!==5||Eo(t),Ha!==0&&(Ha=0)}function q0(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-zt(f),R=1<<x,G=u[x];G===-1?((R&a)===0||(R&r)!==0)&&(u[x]=ne(R,n)):G<=n&&(t.expiredLanes|=R),f&=~R}if(n=qe,a=_e,a=St(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Be===2||Be===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Pe(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Rt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&Pe(r),zs(a)){case 2:case 8:a=Mt;break;case 32:a=dt;break;case 268435456:a=wt;break;default:a=dt}return r=Y0.bind(null,t),a=ye(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&Pe(r),t.callbackPriority=2,t.callbackNode=null,2}function Y0(t,n){if(mn!==0&&mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if($l()&&t.callbackNode!==a)return null;var r=_e;return r=St(t,t===qe?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(w0(t,r,n),q0(t,b()),t.callbackNode!=null&&t.callbackNode===a?Y0.bind(null,t):null)}function j0(t,n){if($l())return null;w0(t,n,!0)}function Xx(){nS(function(){(Le&6)!==0?ye(_t,kx):W0()})}function Ff(){if(Ha===0){var t=Qs;t===0&&(t=Lt,Lt<<=1,(Lt&261888)===0&&(Lt=256)),Ha=t}return Ha}function Z0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:cl(""+t)}function K0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Wx(t,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=Z0((u[Sn]||null).action),x=r.submitter;x&&(n=(n=x[Sn]||null)?Z0(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var R=new dl("action","action",null,r,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ha!==0){var G=x?K0(u,x):new FormData(u);nf(a,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(R.preventDefault(),G=x?K0(u,x):new FormData(u),nf(a,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var If=0;If<xu.length;If++){var Bf=xu[If],qx=Bf.toLowerCase(),Yx=Bf[0].toUpperCase()+Bf.slice(1);yi(qx,"on"+Yx)}yi(Rp,"onAnimationEnd"),yi(wp,"onAnimationIteration"),yi(Cp,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(cx,"onTransitionRun"),yi(ux,"onTransitionStart"),yi(fx,"onTransitionCancel"),yi(Dp,"onTransitionEnd"),$("onMouseEnter",["mouseout","mouseover"]),$("onMouseLeave",["mouseout","mouseover"]),$("onPointerEnter",["pointerout","pointerover"]),$("onPointerLeave",["pointerout","pointerover"]),rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),rt("onBeforeInput",["compositionend","keypress","textInput","paste"]),rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(To));function Q0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var x=r.length-1;0<=x;x--){var R=r[x],G=R.instance,at=R.currentTarget;if(R=R.listener,G!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=at;try{f(u)}catch(gt){gl(gt)}u.currentTarget=null,f=G}else for(x=0;x<r.length;x++){if(R=r[x],G=R.instance,at=R.currentTarget,R=R.listener,G!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=at;try{f(u)}catch(gt){gl(gt)}u.currentTarget=null,f=G}}}}function me(t,n){var a=n[Fs];a===void 0&&(a=n[Fs]=new Set);var r=t+"__bubble";a.has(r)||(J0(n,t,2,!1),a.add(r))}function Hf(t,n,a){var r=0;n&&(r|=4),J0(a,t,r,n)}var nc="_reactListening"+Math.random().toString(36).slice(2);function Gf(t){if(!t[nc]){t[nc]=!0,Q.forEach(function(a){a!=="selectionchange"&&(jx.has(a)||Hf(a,!1,t),Hf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[nc]||(n[nc]=!0,Hf("selectionchange",!1,n))}}function J0(t,n,a,r){switch(Rg(n)){case 2:var u=yS;break;case 8:u=bS;break;default:u=nh}a=u.bind(null,n,a,t),u=void 0,!ru||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Vf(t,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var x=r.tag;if(x===3||x===4){var R=r.stateNode.containerInfo;if(R===u)break;if(x===4)for(x=r.return;x!==null;){var G=x.tag;if((G===3||G===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;R!==null;){if(x=Ma(R),x===null)return;if(G=x.tag,G===5||G===6||G===26||G===27){r=f=x;continue t}R=R.parentNode}}r=r.return}ip(function(){var at=f,gt=au(a),xt=[];t:{var ot=Up.get(t);if(ot!==void 0){var ct=dl,Vt=t;switch(t){case"keypress":if(fl(a)===0)break t;case"keydown":case"keyup":ct=Gv;break;case"focusin":Vt="focus",ct=uu;break;case"focusout":Vt="blur",ct=uu;break;case"beforeblur":case"afterblur":ct=uu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=rp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=Cv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=Xv;break;case Rp:case wp:case Cp:ct=Nv;break;case Dp:ct=qv;break;case"scroll":case"scrollend":ct=Rv;break;case"wheel":ct=jv;break;case"copy":case"cut":case"paste":ct=Ov;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=lp;break;case"toggle":case"beforetoggle":ct=Kv}var te=(n&4)!==0,We=!te&&(t==="scroll"||t==="scrollend"),J=te?ot!==null?ot+"Capture":null:ot;te=[];for(var k=at,it;k!==null;){var vt=k;if(it=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||it===null||J===null||(vt=qr(k,J),vt!=null&&te.push(Ao(k,vt,it))),We)break;k=k.return}0<te.length&&(ot=new ct(ot,Vt,null,a,gt),xt.push({event:ot,listeners:te}))}}if((n&7)===0){t:{if(ot=t==="mouseover"||t==="pointerover",ct=t==="mouseout"||t==="pointerout",ot&&a!==iu&&(Vt=a.relatedTarget||a.fromElement)&&(Ma(Vt)||Vt[Si]))break t;if((ct||ot)&&(ot=gt.window===gt?gt:(ot=gt.ownerDocument)?ot.defaultView||ot.parentWindow:window,ct?(Vt=a.relatedTarget||a.toElement,ct=at,Vt=Vt?Ma(Vt):null,Vt!==null&&(We=c(Vt),te=Vt.tag,Vt!==We||te!==5&&te!==27&&te!==6)&&(Vt=null)):(ct=null,Vt=at),ct!==Vt)){if(te=rp,vt="onMouseLeave",J="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(te=lp,vt="onPointerLeave",J="onPointerEnter",k="pointer"),We=ct==null?ot:ss(ct),it=Vt==null?ot:ss(Vt),ot=new te(vt,k+"leave",ct,a,gt),ot.target=We,ot.relatedTarget=it,vt=null,Ma(gt)===at&&(te=new te(J,k+"enter",Vt,a,gt),te.target=it,te.relatedTarget=We,vt=te),We=vt,ct&&Vt)e:{for(te=Zx,J=ct,k=Vt,it=0,vt=J;vt;vt=te(vt))it++;vt=0;for(var Qt=k;Qt;Qt=te(Qt))vt++;for(;0<it-vt;)J=te(J),it--;for(;0<vt-it;)k=te(k),vt--;for(;it--;){if(J===k||k!==null&&J===k.alternate){te=J;break e}J=te(J),k=te(k)}te=null}else te=null;ct!==null&&$0(xt,ot,ct,te,!1),Vt!==null&&We!==null&&$0(xt,We,Vt,te,!0)}}t:{if(ot=at?ss(at):window,ct=ot.nodeName&&ot.nodeName.toLowerCase(),ct==="select"||ct==="input"&&ot.type==="file")var Te=gp;else if(pp(ot))if(_p)Te=rx;else{Te=ax;var jt=ix}else ct=ot.nodeName,!ct||ct.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?at&&Mi(at.elementType)&&(Te=gp):Te=sx;if(Te&&(Te=Te(t,at))){mp(xt,Te,a,gt);break t}jt&&jt(t,ot,at),t==="focusout"&&at&&ot.type==="number"&&at.memoizedProps.value!=null&&yn(ot,"number",ot.value)}switch(jt=at?ss(at):window,t){case"focusin":(pp(jt)||jt.contentEditable==="true")&&(ks=jt,gu=at,to=null);break;case"focusout":to=gu=ks=null;break;case"mousedown":_u=!0;break;case"contextmenu":case"mouseup":case"dragend":_u=!1,Tp(xt,a,gt);break;case"selectionchange":if(lx)break;case"keydown":case"keyup":Tp(xt,a,gt)}var ce;if(hu)t:{switch(t){case"compositionstart":var ve="onCompositionStart";break t;case"compositionend":ve="onCompositionEnd";break t;case"compositionupdate":ve="onCompositionUpdate";break t}ve=void 0}else Vs?hp(t,a)&&(ve="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(cp&&a.locale!=="ko"&&(Vs||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Vs&&(ce=ap()):(Ea=gt,ou="value"in Ea?Ea.value:Ea.textContent,Vs=!0)),jt=ic(at,ve),0<jt.length&&(ve=new op(ve,t,null,a,gt),xt.push({event:ve,listeners:jt}),ce?ve.data=ce:(ce=dp(a),ce!==null&&(ve.data=ce)))),(ce=Jv?$v(t,a):tx(t,a))&&(ve=ic(at,"onBeforeInput"),0<ve.length&&(jt=new op("onBeforeInput","beforeinput",null,a,gt),xt.push({event:jt,listeners:ve}),jt.data=ce)),Wx(xt,t,at,a,gt)}Q0(xt,n)})}function Ao(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ic(t,n){for(var a=n+"Capture",r=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=qr(t,a),u!=null&&r.unshift(Ao(t,u,f)),u=qr(t,n),u!=null&&r.push(Ao(t,u,f))),t.tag===3)return r;t=t.return}return[]}function Zx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function $0(t,n,a,r,u){for(var f=n._reactName,x=[];a!==null&&a!==r;){var R=a,G=R.alternate,at=R.stateNode;if(R=R.tag,G!==null&&G===r)break;R!==5&&R!==26&&R!==27||at===null||(G=at,u?(at=qr(a,f),at!=null&&x.unshift(Ao(a,at,G))):u||(at=qr(a,f),at!=null&&x.push(Ao(a,at,G)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var Kx=/\r\n?/g,Qx=/\u0000|\uFFFD/g;function tg(t){return(typeof t=="string"?t:""+t).replace(Kx,`
`).replace(Qx,"")}function eg(t,n){return n=tg(n),tg(t)===n}function Xe(t,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||pn(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&pn(t,""+r);break;case"className":Jt(t,"class",r);break;case"tabIndex":Jt(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Jt(t,a,r);break;case"style":Bs(t,r,f);break;case"data":if(n!=="object"){Jt(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=cl(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xe(t,n,"name",u.name,u,null),Xe(t,n,"formEncType",u.formEncType,u,null),Xe(t,n,"formMethod",u.formMethod,u,null),Xe(t,n,"formTarget",u.formTarget,u,null)):(Xe(t,n,"encType",u.encType,u,null),Xe(t,n,"method",u.method,u,null),Xe(t,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=cl(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Yi);break;case"onScroll":r!=null&&me("scroll",t);break;case"onScrollEnd":r!=null&&me("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=cl(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":me("beforetoggle",t),me("toggle",t),Wt(t,"popover",r);break;case"xlinkActuate":qt(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":qt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":qt(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":qt(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":qt(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":qt(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":qt(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":qt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":qt(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Wt(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Tv.get(a)||a,Wt(t,a,r))}}function kf(t,n,a,r,u,f){switch(a){case"style":Bs(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?pn(t,r):(typeof r=="number"||typeof r=="bigint")&&pn(t,""+r);break;case"onScroll":r!=null&&me("scroll",t);break;case"onScrollEnd":r!=null&&me("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Yi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[Sn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,u);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):Wt(t,a,r)}}}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",t),me("load",t);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(t,n,f,x,a,null)}}u&&Xe(t,n,"srcSet",a.srcSet,a,null),r&&Xe(t,n,"src",a.src,a,null);return;case"input":me("invalid",t);var R=f=x=u=null,G=null,at=null;for(r in a)if(a.hasOwnProperty(r)){var gt=a[r];if(gt!=null)switch(r){case"name":u=gt;break;case"type":x=gt;break;case"checked":G=gt;break;case"defaultChecked":at=gt;break;case"value":f=gt;break;case"defaultValue":R=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(s(137,n));break;default:Xe(t,n,r,gt,a,null)}}qi(t,f,R,G,at,x,u,!1);return;case"select":me("invalid",t),r=x=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":x=R;break;case"multiple":r=R;default:Xe(t,n,u,R,a,null)}n=f,a=x,t.multiple=!!r,n!=null?oi(t,!!r,n,!1):a!=null&&oi(t,!!r,a,!0);return;case"textarea":me("invalid",t),f=u=r=null;for(x in a)if(a.hasOwnProperty(x)&&(R=a[x],R!=null))switch(x){case"value":r=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Xe(t,n,x,R,a,null)}bn(t,r,u,f);return;case"option":for(G in a)a.hasOwnProperty(G)&&(r=a[G],r!=null)&&(G==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":Xe(t,n,G,r,a,null));return;case"dialog":me("beforetoggle",t),me("toggle",t),me("cancel",t),me("close",t);break;case"iframe":case"object":me("load",t);break;case"video":case"audio":for(r=0;r<To.length;r++)me(To[r],t);break;case"image":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"embed":case"source":case"link":me("error",t),me("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(at in a)if(a.hasOwnProperty(at)&&(r=a[at],r!=null))switch(at){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(t,n,at,r,a,null)}return;default:if(Mi(n)){for(gt in a)a.hasOwnProperty(gt)&&(r=a[gt],r!==void 0&&kf(t,n,gt,r,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(r=a[R],r!=null&&Xe(t,n,R,r,a,null))}function Jx(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,x=null,R=null,G=null,at=null,gt=null;for(ct in a){var xt=a[ct];if(a.hasOwnProperty(ct)&&xt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":G=xt;default:r.hasOwnProperty(ct)||Xe(t,n,ct,null,r,xt)}}for(var ot in r){var ct=r[ot];if(xt=a[ot],r.hasOwnProperty(ot)&&(ct!=null||xt!=null))switch(ot){case"type":f=ct;break;case"name":u=ct;break;case"checked":at=ct;break;case"defaultChecked":gt=ct;break;case"value":x=ct;break;case"defaultValue":R=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:ct!==xt&&Xe(t,n,ot,ct,r,xt)}}Mn(t,x,R,G,at,gt,f,u);return;case"select":ct=x=R=ot=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":ct=G;default:r.hasOwnProperty(f)||Xe(t,n,f,null,r,G)}for(u in r)if(f=r[u],G=a[u],r.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":ot=f;break;case"defaultValue":R=f;break;case"multiple":x=f;default:f!==G&&Xe(t,n,u,f,r,G)}n=R,a=x,r=ct,ot!=null?oi(t,!!a,ot,!1):!!r!=!!a&&(n!=null?oi(t,!!a,n,!0):oi(t,!!a,a?[]:"",!1));return;case"textarea":ct=ot=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!r.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Xe(t,n,R,null,r,u)}for(x in r)if(u=r[x],f=a[x],r.hasOwnProperty(x)&&(u!=null||f!=null))switch(x){case"value":ot=u;break;case"defaultValue":ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Xe(t,n,x,u,r,f)}Ie(t,ot,ct);return;case"option":for(var Vt in a)ot=a[Vt],a.hasOwnProperty(Vt)&&ot!=null&&!r.hasOwnProperty(Vt)&&(Vt==="selected"?t.selected=!1:Xe(t,n,Vt,null,r,ot));for(G in r)ot=r[G],ct=a[G],r.hasOwnProperty(G)&&ot!==ct&&(ot!=null||ct!=null)&&(G==="selected"?t.selected=ot&&typeof ot!="function"&&typeof ot!="symbol":Xe(t,n,G,ot,r,ct));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)ot=a[te],a.hasOwnProperty(te)&&ot!=null&&!r.hasOwnProperty(te)&&Xe(t,n,te,null,r,ot);for(at in r)if(ot=r[at],ct=a[at],r.hasOwnProperty(at)&&ot!==ct&&(ot!=null||ct!=null))switch(at){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:Xe(t,n,at,ot,r,ct)}return;default:if(Mi(n)){for(var We in a)ot=a[We],a.hasOwnProperty(We)&&ot!==void 0&&!r.hasOwnProperty(We)&&kf(t,n,We,void 0,r,ot);for(gt in r)ot=r[gt],ct=a[gt],!r.hasOwnProperty(gt)||ot===ct||ot===void 0&&ct===void 0||kf(t,n,gt,ot,r,ct);return}}for(var J in a)ot=a[J],a.hasOwnProperty(J)&&ot!=null&&!r.hasOwnProperty(J)&&Xe(t,n,J,null,r,ot);for(xt in r)ot=r[xt],ct=a[xt],!r.hasOwnProperty(xt)||ot===ct||ot==null&&ct==null||Xe(t,n,xt,ot,r,ct)}function ng(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function $x(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,x=u.initiatorType,R=u.duration;if(f&&R&&ng(x)){for(x=0,R=u.responseEnd,r+=1;r<a.length;r++){var G=a[r],at=G.startTime;if(at>R)break;var gt=G.transferSize,xt=G.initiatorType;gt&&ng(xt)&&(G=G.responseEnd,x+=gt*(G<R?1:(R-at)/(G-at)))}if(--r,n+=8*(f+x)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Xf=null,Wf=null;function ac(t){return t.nodeType===9?t:t.ownerDocument}function ig(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ag(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function qf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Yf=null;function tS(){var t=window.event;return t&&t.type==="popstate"?t===Yf?!1:(Yf=t,!0):(Yf=null,!1)}var sg=typeof setTimeout=="function"?setTimeout:void 0,eS=typeof clearTimeout=="function"?clearTimeout:void 0,rg=typeof Promise=="function"?Promise:void 0,nS=typeof queueMicrotask=="function"?queueMicrotask:typeof rg<"u"?function(t){return rg.resolve(null).then(t).catch(iS)}:sg;function iS(t){setTimeout(function(){throw t})}function Ga(t){return t==="head"}function og(t,n){var a=n,r=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(u),gr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Ro(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Ro(a);for(var f=a.firstChild;f;){var x=f.nextSibling,R=f.nodeName;f[as]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&Ro(t.ownerDocument.body);a=u}while(a);gr(n)}function lg(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function jf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":jf(a),Wr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function aS(t,n,a,r){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[as])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=pi(t.nextSibling),t===null)break}return null}function sS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=pi(t.nextSibling),t===null))return null;return t}function cg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=pi(t.nextSibling),t===null))return null;return t}function Zf(t){return t.data==="$?"||t.data==="$~"}function Kf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function rS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function pi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Qf=null;function ug(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return pi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function fg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function hg(t,n,a){switch(n=ac(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Ro(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Wr(t)}var mi=new Map,dg=new Set;function sc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ca=L.d;L.d={f:oS,r:lS,D:cS,C:uS,L:fS,m:hS,X:pS,S:dS,M:mS};function oS(){var t=ca.f(),n=Kl();return t||n}function lS(t){var n=ya(t);n!==null&&n.tag===5&&n.type==="form"?Dm(n):ca.r(t)}var dr=typeof document>"u"?null:document;function pg(t,n,a){var r=dr;if(r&&typeof n=="string"&&n){var u=ae(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),dg.has(u)||(dg.add(u),t={rel:t,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Cn(n,"link",t),w(n),r.head.appendChild(n)))}}function cS(t){ca.D(t),pg("dns-prefetch",t,null)}function uS(t,n){ca.C(t,n),pg("preconnect",t,n)}function fS(t,n,a){ca.L(t,n,a);var r=dr;if(r&&t&&n){var u='link[rel="preload"][as="'+ae(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ae(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ae(a.imageSizes)+'"]')):u+='[href="'+ae(t)+'"]';var f=u;switch(n){case"style":f=pr(t);break;case"script":f=mr(t)}mi.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),mi.set(f,t),r.querySelector(u)!==null||n==="style"&&r.querySelector(wo(f))||n==="script"&&r.querySelector(Co(f))||(n=r.createElement("link"),Cn(n,"link",t),w(n),r.head.appendChild(n)))}}function hS(t,n){ca.m(t,n);var a=dr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ae(r)+'"][href="'+ae(t)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=mr(t)}if(!mi.has(f)&&(t=g({rel:"modulepreload",href:t},n),mi.set(f,t),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Co(f)))return}r=a.createElement("link"),Cn(r,"link",t),w(r),a.head.appendChild(r)}}}function dS(t,n,a){ca.S(t,n,a);var r=dr;if(r&&t){var u=ba(r).hoistableStyles,f=pr(t);n=n||"default";var x=u.get(f);if(!x){var R={loading:0,preload:null};if(x=r.querySelector(wo(f)))R.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=mi.get(f))&&Jf(t,a);var G=x=r.createElement("link");w(G),Cn(G,"link",t),G._p=new Promise(function(at,gt){G.onload=at,G.onerror=gt}),G.addEventListener("load",function(){R.loading|=1}),G.addEventListener("error",function(){R.loading|=2}),R.loading|=4,rc(x,n,r)}x={type:"stylesheet",instance:x,count:1,state:R},u.set(f,x)}}}function pS(t,n){ca.X(t,n);var a=dr;if(a&&t){var r=ba(a).hoistableScripts,u=mr(t),f=r.get(u);f||(f=a.querySelector(Co(u)),f||(t=g({src:t,async:!0},n),(n=mi.get(u))&&$f(t,n),f=a.createElement("script"),w(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function mS(t,n){ca.M(t,n);var a=dr;if(a&&t){var r=ba(a).hoistableScripts,u=mr(t),f=r.get(u);f||(f=a.querySelector(Co(u)),f||(t=g({src:t,async:!0,type:"module"},n),(n=mi.get(u))&&$f(t,n),f=a.createElement("script"),w(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function mg(t,n,a,r){var u=(u=st.current)?sc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=pr(a.href),a=ba(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=pr(a.href);var f=ba(u).hoistableStyles,x=f.get(t);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=u.querySelector(wo(t)))&&!f._p&&(x.instance=f,x.state.loading=5),mi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},mi.set(t,a),f||gS(u,t,a,x.state))),n&&r===null)throw Error(s(528,""));return x}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=mr(a),a=ba(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function pr(t){return'href="'+ae(t)+'"'}function wo(t){return'link[rel="stylesheet"]['+t+"]"}function gg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function gS(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Cn(n,"link",a),w(n),t.head.appendChild(n))}function mr(t){return'[src="'+ae(t)+'"]'}function Co(t){return"script[async]"+t}function _g(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+ae(a.href)+'"]');if(r)return n.instance=r,w(r),r;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),w(r),Cn(r,"style",u),rc(r,a.precedence,t),n.instance=r;case"stylesheet":u=pr(a.href);var f=t.querySelector(wo(u));if(f)return n.state.loading|=4,n.instance=f,w(f),f;r=gg(a),(u=mi.get(u))&&Jf(r,u),f=(t.ownerDocument||t).createElement("link"),w(f);var x=f;return x._p=new Promise(function(R,G){x.onload=R,x.onerror=G}),Cn(f,"link",r),n.state.loading|=4,rc(f,a.precedence,t),n.instance=f;case"script":return f=mr(a.src),(u=t.querySelector(Co(f)))?(n.instance=u,w(u),u):(r=a,(u=mi.get(f))&&(r=g({},a),$f(r,u)),t=t.ownerDocument||t,u=t.createElement("script"),w(u),Cn(u,"link",r),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,rc(r,a.precedence,t));return n.instance}function rc(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,x=0;x<r.length;x++){var R=r[x];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Jf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function $f(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var oc=null;function vg(t,n,a){if(oc===null){var r=new Map,u=oc=new Map;u.set(a,r)}else u=oc,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[as]||f[ln]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var R=r.get(x);R?R.push(f):r.set(x,[f])}}return r}function xg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function _S(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Sg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function vS(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=pr(r.href),f=n.querySelector(wo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=lc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,w(f);return}f=n.ownerDocument||n,r=gg(r),(u=mi.get(u))&&Jf(r,u),f=f.createElement("link"),w(f);var x=f;x._p=new Promise(function(R,G){x.onload=R,x.onerror=G}),Cn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=lc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var th=0;function xS(t,n){return t.stylesheets&&t.count===0&&uc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&uc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&th===0&&(th=62500*$x());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&uc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>th?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function lc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)uc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var cc=null;function uc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,cc=new Map,n.forEach(SS,t),cc=null,lc.call(t))}function SS(t,n){if(!(n.state.loading&4)){var a=cc.get(t);if(a)var r=a.get(null);else{a=new Map,cc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var x=u[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),r=x)}r&&a.set(null,r)}u=n.instance,x=u.getAttribute("data-precedence"),f=a.get(x)||r,f===r&&a.set(null,u),a.set(x,u),this.count++,r=lc.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Do={$$typeof:P,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function MS(t,n,a,r,u,f,x,R,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=be(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=be(0),this.hiddenUpdates=be(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function Mg(t,n,a,r,u,f,x,R,G,at,gt,xt){return t=new MS(t,n,a,x,G,at,gt,xt,R),n=1,f===!0&&(n|=24),f=Jn(3,null,null,n),t.current=f,f.stateNode=t,n=Nu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},zu(f),t}function yg(t){return t?(t=qs,t):qs}function bg(t,n,a,r,u,f){u=yg(u),r.context===null?r.context=u:r.pendingContext=u,r=Da(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Ua(t,r,n),a!==null&&(jn(a,t,n),oo(a,t,n))}function Eg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function eh(t,n){Eg(t,n),(t=t.alternate)&&Eg(t,n)}function Tg(t){if(t.tag===13||t.tag===31){var n=cs(t,67108864);n!==null&&jn(n,t,67108864),eh(t,67108864)}}function Ag(t){if(t.tag===13||t.tag===31){var n=ii();n=Vr(n);var a=cs(t,n);a!==null&&jn(a,t,n),eh(t,n)}}var fc=!0;function yS(t,n,a,r){var u=C.T;C.T=null;var f=L.p;try{L.p=2,nh(t,n,a,r)}finally{L.p=f,C.T=u}}function bS(t,n,a,r){var u=C.T;C.T=null;var f=L.p;try{L.p=8,nh(t,n,a,r)}finally{L.p=f,C.T=u}}function nh(t,n,a,r){if(fc){var u=ih(r);if(u===null)Vf(t,n,r,hc,a),wg(t,r);else if(TS(u,t,n,a,r))r.stopPropagation();else if(wg(t,r),n&4&&-1<ES.indexOf(t)){for(;u!==null;){var f=ya(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=yt(f.pendingLanes);if(x!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;x;){var G=1<<31-zt(x);R.entanglements[1]|=G,x&=~G}Oi(f),(Le&6)===0&&(jl=b()+500,Eo(0))}}break;case 31:case 13:R=cs(f,2),R!==null&&jn(R,f,2),Kl(),eh(f,2)}if(f=ih(r),f===null&&Vf(t,n,r,hc,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else Vf(t,n,r,null,a)}}function ih(t){return t=au(t),ah(t)}var hc=null;function ah(t){if(hc=null,t=Ma(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return hc=t,null}function Rg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Z()){case _t:return 2;case Mt:return 8;case dt:case Zt:return 32;case wt:return 268435456;default:return 32}default:return 32}}var sh=!1,Va=null,ka=null,Xa=null,Uo=new Map,No=new Map,Wa=[],ES="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function wg(t,n){switch(t){case"focusin":case"focusout":Va=null;break;case"dragenter":case"dragleave":ka=null;break;case"mouseover":case"mouseout":Xa=null;break;case"pointerover":case"pointerout":Uo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(n.pointerId)}}function Lo(t,n,a,r,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ya(n),n!==null&&Tg(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function TS(t,n,a,r,u){switch(n){case"focusin":return Va=Lo(Va,t,n,a,r,u),!0;case"dragenter":return ka=Lo(ka,t,n,a,r,u),!0;case"mouseover":return Xa=Lo(Xa,t,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return Uo.set(f,Lo(Uo.get(f)||null,t,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,No.set(f,Lo(No.get(f)||null,t,n,a,r,u)),!0}return!1}function Cg(t){var n=Ma(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Di(t.priority,function(){Ag(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Di(t.priority,function(){Ag(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function dc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ih(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);iu=r,a.target.dispatchEvent(r),iu=null}else return n=ya(a),n!==null&&Tg(n),t.blockedOn=a,!1;n.shift()}return!0}function Dg(t,n,a){dc(t)&&a.delete(n)}function AS(){sh=!1,Va!==null&&dc(Va)&&(Va=null),ka!==null&&dc(ka)&&(ka=null),Xa!==null&&dc(Xa)&&(Xa=null),Uo.forEach(Dg),No.forEach(Dg)}function pc(t,n){t.blockedOn===n&&(t.blockedOn=null,sh||(sh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,AS)))}var mc=null;function Ug(t){mc!==t&&(mc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){mc===t&&(mc=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],u=t[n+2];if(typeof r!="function"){if(ah(r||a)===null)continue;break}var f=ya(a);f!==null&&(t.splice(n,3),n-=3,nf(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function gr(t){function n(G){return pc(G,t)}Va!==null&&pc(Va,t),ka!==null&&pc(ka,t),Xa!==null&&pc(Xa,t),Uo.forEach(n),No.forEach(n);for(var a=0;a<Wa.length;a++){var r=Wa[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Wa.length&&(a=Wa[0],a.blockedOn===null);)Cg(a),a.blockedOn===null&&Wa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],x=u[Sn]||null;if(typeof f=="function")x||Ug(a);else if(x){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,x=f[Sn]||null)R=x.formAction;else if(ah(u)!==null)continue}else R=x.action;typeof R=="function"?a[r+1]=R:(a.splice(r,3),r-=3),Ug(a)}}}function Ng(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function rh(t){this._internalRoot=t}gc.prototype.render=rh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ii();bg(a,r,t,n,null,null)},gc.prototype.unmount=rh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;bg(t.current,2,null,t,null,null),Kl(),n[Si]=null}};function gc(t){this._internalRoot=t}gc.prototype.unstable_scheduleHydration=function(t){if(t){var n=kr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Wa.length&&n!==0&&n<Wa[a].priority;a++);Wa.splice(a,0,t),a===0&&Cg(t)}};var Lg=e.version;if(Lg!=="19.2.3")throw Error(s(527,Lg,"19.2.3"));L.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var RS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _c=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_c.isDisabled&&_c.supportsFiber)try{bt=_c.inject(RS),Tt=_c}catch{}}return Po.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",u=Hm,f=Gm,x=Vm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Mg(t,1,!1,null,null,a,r,null,u,f,x,Ng),t[Si]=n.current,Gf(t),new rh(n)},Po.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,u="",f=Hm,x=Gm,R=Vm,G=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=Mg(t,1,!0,n,a??null,r,u,G,f,x,R,Ng),n.context=yg(null),a=n.current,r=ii(),r=Vr(r),u=Da(r),u.callback=null,Ua(a,u,r),a=r,n.current.lanes=a,Nn(n,a),Oi(n),t[Si]=n.current,Gf(t),new gc(n)},Po.version="19.2.3",Po}var kg;function FS(){if(kg)return ch.exports;kg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ch.exports=zS(),ch.exports}var IS=FS();const BS=()=>{const[o,e]=we.useState(!1);we.useEffect(()=>{const s=()=>{e(window.scrollY>50)};return window.addEventListener("scroll",s,{passive:!0}),()=>window.removeEventListener("scroll",s)},[]);const i=[{label:"About",href:"#about"},{label:"Strategy",href:"#strategy"},{label:"Innovation",href:"#innovation"},{label:"Presence",href:"#presence"},{label:"ESG",href:"#esg"}];return j.jsx("nav",{"code-path":"src/sections/Navbar.tsx:24:5",className:`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${o?"bg-white/95 backdrop-blur-xl border-b border-black/5 py-4":"bg-transparent py-6"}`,children:j.jsxs("div",{"code-path":"src/sections/Navbar.tsx:31:7",className:"w-full px-6 lg:px-12 flex justify-between items-center",children:[j.jsxs("a",{"code-path":"src/sections/Navbar.tsx:33:9",href:"#",className:"flex items-center gap-3 group",children:[j.jsx("span",{"code-path":"src/sections/Navbar.tsx:34:11",className:"w-10 h-10 relative",children:j.jsxs("svg",{"code-path":"src/sections/Navbar.tsx:35:13",viewBox:"0 0 100 100",className:"w-full h-full fill-current transition-transform group-hover:rotate-12",children:[j.jsx("path",{"code-path":"src/sections/Navbar.tsx:36:15",d:"M50 10 L90 50 L50 90 L50 70 L70 50 L50 30 Z"}),j.jsx("path",{"code-path":"src/sections/Navbar.tsx:37:15",d:"M50 30 L30 50 L50 70 L50 30 Z"})]})}),j.jsx("span",{"code-path":"src/sections/Navbar.tsx:40:11",className:"text-2xl font-extrabold tracking-wider uppercase",children:"BLCFYN"})]}),j.jsx("ul",{"code-path":"src/sections/Navbar.tsx:46:9",className:"hidden lg:flex items-center gap-10",children:i.map(s=>j.jsx("li",{"code-path":"src/sections/Navbar.tsx:48:13",children:j.jsxs("a",{"code-path":"src/sections/Navbar.tsx:49:15",href:s.href,className:"relative text-sm font-semibold uppercase tracking-widest text-gray-600 hover:text-black transition-colors group",children:[s.label,j.jsx("span",{"code-path":"src/sections/Navbar.tsx:54:17",className:"absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"})]})},s.label))}),j.jsx("button",{"code-path":"src/sections/Navbar.tsx:61:9",className:"lg:hidden p-2",children:j.jsx("svg",{"code-path":"src/sections/Navbar.tsx:62:11",className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:j.jsx("path",{"code-path":"src/sections/Navbar.tsx:63:13",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]})})};const Gd="182",HS=0,Xg=1,GS=2,Vc=1,VS=2,Xo=3,es=0,Kn=1,Fi=2,ga=0,Ur=1,Wg=2,qg=3,Yg=4,kS=5,Cs=100,XS=101,WS=102,qS=103,YS=104,jS=200,ZS=201,KS=202,QS=203,Wh=204,qh=205,JS=206,$S=207,tM=208,eM=209,nM=210,iM=211,aM=212,sM=213,rM=214,Yh=0,jh=1,Zh=2,Lr=3,Kh=4,Qh=5,Jh=6,$h=7,W_=0,oM=1,lM=2,Gi=0,q_=1,Y_=2,j_=3,Z_=4,K_=5,Q_=6,J_=7,$_=300,Ls=301,Or=302,td=303,ed=304,$c=306,nd=1e3,ma=1001,id=1002,Dn=1003,cM=1004,vc=1005,Fn=1006,dh=1007,Us=1008,vi=1009,tv=1010,ev=1011,qo=1012,Vd=1013,ki=1014,Ii=1015,va=1016,kd=1017,Xd=1018,Yo=1020,nv=35902,iv=35899,av=1021,sv=1022,Ci=1023,xa=1026,Ns=1027,rv=1028,Wd=1029,Pr=1030,qd=1031,Yd=1033,kc=33776,Xc=33777,Wc=33778,qc=33779,ad=35840,sd=35841,rd=35842,od=35843,ld=36196,cd=37492,ud=37496,fd=37488,hd=37489,dd=37490,pd=37491,md=37808,gd=37809,_d=37810,vd=37811,xd=37812,Sd=37813,Md=37814,yd=37815,bd=37816,Ed=37817,Td=37818,Ad=37819,Rd=37820,wd=37821,Cd=36492,Dd=36494,Ud=36495,Nd=36283,Ld=36284,Od=36285,Pd=36286,uM=3200,fM=0,hM=1,$a="",_i="srgb",zr="srgb-linear",jc="linear",Ge="srgb",_r=7680,jg=519,dM=512,pM=513,mM=514,jd=515,gM=516,_M=517,Zd=518,vM=519,Zg=35044,Kg="300 es",Bi=2e3,Zc=2001;function ov(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Kc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function xM(){const o=Kc("canvas");return o.style.display="block",o}const Qg={};function Jg(...o){const e="THREE."+o.shift();console.log(e,...o)}function ie(...o){const e="THREE."+o.shift();console.warn(e,...o)}function Re(...o){const e="THREE."+o.shift();console.error(e,...o)}function jo(...o){const e=o.join(" ");e in Qg||(Qg[e]=!0,ie(...o))}function SM(o,e,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Ir{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ph=Math.PI/180,zd=180/Math.PI;function Ko(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[o&255]+On[o>>8&255]+On[o>>16&255]+On[o>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function Se(o,e,i){return Math.max(e,Math.min(i,o))}function MM(o,e){return(o%e+e)%e}function mh(o,e,i){return(1-i)*o+i*e}function zo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Zn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ce{constructor(e=0,i=0){Ce.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Se(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*s-h*l+e.x,this.y=c*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qo{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],v=s[l+2],g=s[l+3],S=c[h+0],y=c[h+1],E=c[h+2],T=c[h+3];if(d<=0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g;return}if(d>=1){e[i+0]=S,e[i+1]=y,e[i+2]=E,e[i+3]=T;return}if(g!==T||m!==S||p!==y||v!==E){let M=m*S+p*y+v*E+g*T;M<0&&(S=-S,y=-y,E=-E,T=-T,M=-M);let _=1-d;if(M<.9995){const D=Math.acos(M),P=Math.sin(D);_=Math.sin(_*D)/P,d=Math.sin(d*D)/P,m=m*_+S*d,p=p*_+y*d,v=v*_+E*d,g=g*_+T*d}else{m=m*_+S*d,p=p*_+y*d,v=v*_+E*d,g=g*_+T*d;const D=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=D,p*=D,v*=D,g*=D}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g}static multiplyQuaternionsFlat(e,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],v=s[l+3],g=c[h],S=c[h+1],y=c[h+2],E=c[h+3];return e[i]=d*E+v*g+m*y-p*S,e[i+1]=m*E+v*S+p*g-d*y,e[i+2]=p*E+v*y+d*S-m*g,e[i+3]=v*E-d*g-m*S-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(s/2),v=d(l/2),g=d(c/2),S=m(s/2),y=m(l/2),E=m(c/2);switch(h){case"XYZ":this._x=S*v*g+p*y*E,this._y=p*y*g-S*v*E,this._z=p*v*E+S*y*g,this._w=p*v*g-S*y*E;break;case"YXZ":this._x=S*v*g+p*y*E,this._y=p*y*g-S*v*E,this._z=p*v*E-S*y*g,this._w=p*v*g+S*y*E;break;case"ZXY":this._x=S*v*g-p*y*E,this._y=p*y*g+S*v*E,this._z=p*v*E+S*y*g,this._w=p*v*g-S*y*E;break;case"ZYX":this._x=S*v*g-p*y*E,this._y=p*y*g+S*v*E,this._z=p*v*E-S*y*g,this._w=p*v*g+S*y*E;break;case"YZX":this._x=S*v*g+p*y*E,this._y=p*y*g+S*v*E,this._z=p*v*E-S*y*g,this._w=p*v*g-S*y*E;break;case"XZY":this._x=S*v*g-p*y*E,this._y=p*y*g-S*v*E,this._z=p*v*E+S*y*g,this._w=p*v*g+S*y*E;break;default:ie("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],v=i[6],g=i[10],S=s+d+g;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(v-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(s>d&&s>g){const y=2*Math.sqrt(1+s-d-g);this._w=(v-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(d>g){const y=2*Math.sqrt(1+d-s-g);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+v)/y}else{const y=2*Math.sqrt(1+g-s-d);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Se(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+h*d+l*p-c*m,this._y=l*v+h*m+c*d-s*p,this._z=c*v+h*p+s*m-l*d,this._w=h*v-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let s=e._x,l=e._y,c=e._z,h=e._w,d=this.dot(e);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(e=0,i=0,s=0){tt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion($g.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion($g.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*s),v=2*(d*i-c*l),g=2*(c*s-h*i);return this.x=i+m*p+h*g-d*v,this.y=s+m*v+d*p-c*g,this.z=l+m*g+c*v-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return gh.copy(this).projectOnVector(e),this.sub(gh)}reflect(e){return this.sub(gh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Se(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gh=new tt,$g=new Qo;class ue{constructor(e,i,s,l,c,h,d,m,p){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,m,p)}set(e,i,s,l,c,h,d,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=d,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],v=s[4],g=s[7],S=s[2],y=s[5],E=s[8],T=l[0],M=l[3],_=l[6],D=l[1],P=l[4],N=l[7],z=l[2],B=l[5],I=l[8];return c[0]=h*T+d*D+m*z,c[3]=h*M+d*P+m*B,c[6]=h*_+d*N+m*I,c[1]=p*T+v*D+g*z,c[4]=p*M+v*P+g*B,c[7]=p*_+v*N+g*I,c[2]=S*T+y*D+E*z,c[5]=S*M+y*P+E*B,c[8]=S*_+y*N+E*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8];return i*h*v-i*d*p-s*c*v+s*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8],g=v*h-d*p,S=d*m-v*c,y=p*c-h*m,E=i*g+s*S+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=g*T,e[1]=(l*p-v*s)*T,e[2]=(d*s-l*h)*T,e[3]=S*T,e[4]=(v*i-l*m)*T,e[5]=(l*c-d*i)*T,e[6]=y*T,e[7]=(s*m-p*i)*T,e[8]=(h*i-s*c)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(_h.makeScale(e,i)),this}rotate(e){return this.premultiply(_h.makeRotation(-e)),this}translate(e,i){return this.premultiply(_h.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _h=new ue,t_=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),e_=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yM(){const o={enabled:!0,workingColorSpace:zr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ge&&(l.r=_a(l.r),l.g=_a(l.g),l.b=_a(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ge&&(l.r=Nr(l.r),l.g=Nr(l.g),l.b=Nr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===$a?jc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return jo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return jo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[zr]:{primaries:e,whitePoint:s,transfer:jc,toXYZ:t_,fromXYZ:e_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:e,whitePoint:s,transfer:Ge,toXYZ:t_,fromXYZ:e_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),o}const Ee=yM();function _a(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Nr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let vr;class bM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{vr===void 0&&(vr=Kc("canvas")),vr.width=e.width,vr.height=e.height;const l=vr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=vr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Kc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=_a(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(_a(i[s]/255)*255):i[s]=_a(i[s]);return{data:i,width:e.width,height:e.height}}else return ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let EM=0;class Kd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=Ko(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(vh(l[h].image)):c.push(vh(l[h]))}else c=vh(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function vh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?bM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ie("Texture: Unable to serialize Texture."),{})}let TM=0;const xh=new tt;class Gn extends Ir{constructor(e=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,s=ma,l=ma,c=Fn,h=Us,d=Ci,m=vi,p=Gn.DEFAULT_ANISOTROPY,v=$a){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=Ko(),this.name="",this.source=new Kd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xh).x}get height(){return this.source.getSize(xh).y}get depth(){return this.source.getSize(xh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ie(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ie(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nd:e.x=e.x-Math.floor(e.x);break;case ma:e.x=e.x<0?0:1;break;case id:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nd:e.y=e.y-Math.floor(e.y);break;case ma:e.y=e.y<0?0:1;break;case id:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=$_;Gn.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,i=0,s=0,l=1){on.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],v=m[4],g=m[8],S=m[1],y=m[5],E=m[9],T=m[2],M=m[6],_=m[10];if(Math.abs(v-S)<.01&&Math.abs(g-T)<.01&&Math.abs(E-M)<.01){if(Math.abs(v+S)<.1&&Math.abs(g+T)<.1&&Math.abs(E+M)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(p+1)/2,N=(y+1)/2,z=(_+1)/2,B=(v+S)/4,I=(g+T)/4,X=(E+M)/4;return P>N&&P>z?P<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(P),l=B/s,c=I/s):N>z?N<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),s=B/l,c=X/l):z<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),s=I/c,l=X/c),this.set(s,l,c,i),this}let D=Math.sqrt((M-E)*(M-E)+(g-T)*(g-T)+(S-v)*(S-v));return Math.abs(D)<.001&&(D=1),this.x=(M-E)/D,this.y=(g-T)/D,this.z=(S-v)/D,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this.w=Se(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this.w=Se(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class AM extends Ir{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new on(0,0,e,i),this.scissorTest=!1,this.viewport=new on(0,0,e,i);const l={width:e,height:i,depth:s.depth},c=new Gn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Kd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends AM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class lv extends Gn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class RM extends Gn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jo{constructor(e=new tt(1/0,1/0,1/0),i=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ti.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ti.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ti.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Ti):Ti.fromBufferAttribute(c,h),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),xc.copy(s.boundingBox)),xc.applyMatrix4(e.matrixWorld),this.union(xc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fo),Sc.subVectors(this.max,Fo),xr.subVectors(e.a,Fo),Sr.subVectors(e.b,Fo),Mr.subVectors(e.c,Fo),Ya.subVectors(Sr,xr),ja.subVectors(Mr,Sr),ys.subVectors(xr,Mr);let i=[0,-Ya.z,Ya.y,0,-ja.z,ja.y,0,-ys.z,ys.y,Ya.z,0,-Ya.x,ja.z,0,-ja.x,ys.z,0,-ys.x,-Ya.y,Ya.x,0,-ja.y,ja.x,0,-ys.y,ys.x,0];return!Sh(i,xr,Sr,Mr,Sc)||(i=[1,0,0,0,1,0,0,0,1],!Sh(i,xr,Sr,Mr,Sc))?!1:(Mc.crossVectors(Ya,ja),i=[Mc.x,Mc.y,Mc.z],Sh(i,xr,Sr,Mr,Sc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ua[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ua[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ua[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ua[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ua[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ua[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ua[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ua[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ua),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ua=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],Ti=new tt,xc=new Jo,xr=new tt,Sr=new tt,Mr=new tt,Ya=new tt,ja=new tt,ys=new tt,Fo=new tt,Sc=new tt,Mc=new tt,bs=new tt;function Sh(o,e,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){bs.fromArray(o,c);const d=l.x*Math.abs(bs.x)+l.y*Math.abs(bs.y)+l.z*Math.abs(bs.z),m=e.dot(bs),p=i.dot(bs),v=s.dot(bs);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const wM=new Jo,Io=new tt,Mh=new tt;class $o{constructor(e=new tt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):wM.setFromPoints(e).getCenter(s);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);const i=Io.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Io,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(Mh)),this.expandByPoint(Io.copy(e.center).sub(Mh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const fa=new tt,yh=new tt,yc=new tt,Za=new tt,bh=new tt,bc=new tt,Eh=new tt;class Qd{constructor(e=new tt,i=new tt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=fa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(fa.copy(this.origin).addScaledVector(this.direction,i),fa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){yh.copy(e).add(i).multiplyScalar(.5),yc.copy(i).sub(e).normalize(),Za.copy(this.origin).sub(yh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(yc),d=Za.dot(this.direction),m=-Za.dot(yc),p=Za.lengthSq(),v=Math.abs(1-h*h);let g,S,y,E;if(v>0)if(g=h*m-d,S=h*d-m,E=c*v,g>=0)if(S>=-E)if(S<=E){const T=1/v;g*=T,S*=T,y=g*(g+h*S+2*d)+S*(h*g+S+2*m)+p}else S=c,g=Math.max(0,-(h*S+d)),y=-g*g+S*(S+2*m)+p;else S=-c,g=Math.max(0,-(h*S+d)),y=-g*g+S*(S+2*m)+p;else S<=-E?(g=Math.max(0,-(-h*c+d)),S=g>0?-c:Math.min(Math.max(-c,-m),c),y=-g*g+S*(S+2*m)+p):S<=E?(g=0,S=Math.min(Math.max(-c,-m),c),y=S*(S+2*m)+p):(g=Math.max(0,-(h*c+d)),S=g>0?c:Math.min(Math.max(-c,-m),c),y=-g*g+S*(S+2*m)+p);else S=h>0?-c:c,g=Math.max(0,-(h*S+d)),y=-g*g+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(yh).addScaledVector(yc,S),y}intersectSphere(e,i){fa.subVectors(e.center,this.origin);const s=fa.dot(this.direction),l=fa.dot(fa)-s*s,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,h,d,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,S=this.origin;return p>=0?(s=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(s=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),v>=0?(c=(e.min.y-S.y)*v,h=(e.max.y-S.y)*v):(c=(e.max.y-S.y)*v,h=(e.min.y-S.y)*v),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(e.min.z-S.z)*g,m=(e.max.z-S.z)*g):(d=(e.max.z-S.z)*g,m=(e.min.z-S.z)*g),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,fa)!==null}intersectTriangle(e,i,s,l,c){bh.subVectors(i,e),bc.subVectors(s,e),Eh.crossVectors(bh,bc);let h=this.direction.dot(Eh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Za.subVectors(this.origin,e);const m=d*this.direction.dot(bc.crossVectors(Za,bc));if(m<0)return null;const p=d*this.direction.dot(bh.cross(Za));if(p<0||m+p>h)return null;const v=-d*Za.dot(Eh);return v<0?null:this.at(v/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class an{constructor(e,i,s,l,c,h,d,m,p,v,g,S,y,E,T,M){an.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,m,p,v,g,S,y,E,T,M)}set(e,i,s,l,c,h,d,m,p,v,g,S,y,E,T,M){const _=this.elements;return _[0]=e,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=v,_[10]=g,_[14]=S,_[3]=y,_[7]=E,_[11]=T,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new an().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/yr.setFromMatrixColumn(e,0).length(),c=1/yr.setFromMatrixColumn(e,1).length(),h=1/yr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const S=h*v,y=h*g,E=d*v,T=d*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=y+E*p,i[5]=S-T*p,i[9]=-d*m,i[2]=T-S*p,i[6]=E+y*p,i[10]=h*m}else if(e.order==="YXZ"){const S=m*v,y=m*g,E=p*v,T=p*g;i[0]=S+T*d,i[4]=E*d-y,i[8]=h*p,i[1]=h*g,i[5]=h*v,i[9]=-d,i[2]=y*d-E,i[6]=T+S*d,i[10]=h*m}else if(e.order==="ZXY"){const S=m*v,y=m*g,E=p*v,T=p*g;i[0]=S-T*d,i[4]=-h*g,i[8]=E+y*d,i[1]=y+E*d,i[5]=h*v,i[9]=T-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const S=h*v,y=h*g,E=d*v,T=d*g;i[0]=m*v,i[4]=E*p-y,i[8]=S*p+T,i[1]=m*g,i[5]=T*p+S,i[9]=y*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const S=h*m,y=h*p,E=d*m,T=d*p;i[0]=m*v,i[4]=T-S*g,i[8]=E*g+y,i[1]=g,i[5]=h*v,i[9]=-d*v,i[2]=-p*v,i[6]=y*g+E,i[10]=S-T*g}else if(e.order==="XZY"){const S=h*m,y=h*p,E=d*m,T=d*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=S*g+T,i[5]=h*v,i[9]=y*g-E,i[2]=E*g-y,i[6]=d*v,i[10]=T*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(CM,e,DM)}lookAt(e,i,s){const l=this.elements;return ai.subVectors(e,i),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Ka.crossVectors(s,ai),Ka.lengthSq()===0&&(Math.abs(s.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Ka.crossVectors(s,ai)),Ka.normalize(),Ec.crossVectors(ai,Ka),l[0]=Ka.x,l[4]=Ec.x,l[8]=ai.x,l[1]=Ka.y,l[5]=Ec.y,l[9]=ai.y,l[2]=Ka.z,l[6]=Ec.z,l[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],v=s[1],g=s[5],S=s[9],y=s[13],E=s[2],T=s[6],M=s[10],_=s[14],D=s[3],P=s[7],N=s[11],z=s[15],B=l[0],I=l[4],X=l[8],A=l[12],U=l[1],H=l[5],K=l[9],nt=l[13],ut=l[2],Y=l[6],C=l[10],L=l[14],q=l[3],ft=l[7],pt=l[11],O=l[15];return c[0]=h*B+d*U+m*ut+p*q,c[4]=h*I+d*H+m*Y+p*ft,c[8]=h*X+d*K+m*C+p*pt,c[12]=h*A+d*nt+m*L+p*O,c[1]=v*B+g*U+S*ut+y*q,c[5]=v*I+g*H+S*Y+y*ft,c[9]=v*X+g*K+S*C+y*pt,c[13]=v*A+g*nt+S*L+y*O,c[2]=E*B+T*U+M*ut+_*q,c[6]=E*I+T*H+M*Y+_*ft,c[10]=E*X+T*K+M*C+_*pt,c[14]=E*A+T*nt+M*L+_*O,c[3]=D*B+P*U+N*ut+z*q,c[7]=D*I+P*H+N*Y+z*ft,c[11]=D*X+P*K+N*C+z*pt,c[15]=D*A+P*nt+N*L+z*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],v=e[2],g=e[6],S=e[10],y=e[14],E=e[3],T=e[7],M=e[11],_=e[15],D=m*y-p*S,P=d*y-p*g,N=d*S-m*g,z=h*y-p*v,B=h*S-m*v,I=h*g-d*v;return i*(T*D-M*P+_*N)-s*(E*D-M*z+_*B)+l*(E*P-T*z+_*I)-c*(E*N-T*B+M*I)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8],g=e[9],S=e[10],y=e[11],E=e[12],T=e[13],M=e[14],_=e[15],D=g*M*p-T*S*p+T*m*y-d*M*y-g*m*_+d*S*_,P=E*S*p-v*M*p-E*m*y+h*M*y+v*m*_-h*S*_,N=v*T*p-E*g*p+E*d*y-h*T*y-v*d*_+h*g*_,z=E*g*m-v*T*m-E*d*S+h*T*S+v*d*M-h*g*M,B=i*D+s*P+l*N+c*z;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/B;return e[0]=D*I,e[1]=(T*S*c-g*M*c-T*l*y+s*M*y+g*l*_-s*S*_)*I,e[2]=(d*M*c-T*m*c+T*l*p-s*M*p-d*l*_+s*m*_)*I,e[3]=(g*m*c-d*S*c-g*l*p+s*S*p+d*l*y-s*m*y)*I,e[4]=P*I,e[5]=(v*M*c-E*S*c+E*l*y-i*M*y-v*l*_+i*S*_)*I,e[6]=(E*m*c-h*M*c-E*l*p+i*M*p+h*l*_-i*m*_)*I,e[7]=(h*S*c-v*m*c+v*l*p-i*S*p-h*l*y+i*m*y)*I,e[8]=N*I,e[9]=(E*g*c-v*T*c-E*s*y+i*T*y+v*s*_-i*g*_)*I,e[10]=(h*T*c-E*d*c+E*s*p-i*T*p-h*s*_+i*d*_)*I,e[11]=(v*d*c-h*g*c-v*s*p+i*g*p+h*s*y-i*d*y)*I,e[12]=z*I,e[13]=(v*T*l-E*g*l+E*s*S-i*T*S-v*s*M+i*g*M)*I,e[14]=(E*d*l-h*T*l-E*s*m+i*T*m+h*s*M-i*d*M)*I,e[15]=(h*g*l-v*d*l+v*s*m-i*g*m-h*s*S+i*d*S)*I,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=e.x,d=e.y,m=e.z,p=c*h,v=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+s,v*m-l*h,0,p*m-l*d,v*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,h){return this.set(1,s,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,v=h+h,g=d+d,S=c*p,y=c*v,E=c*g,T=h*v,M=h*g,_=d*g,D=m*p,P=m*v,N=m*g,z=s.x,B=s.y,I=s.z;return l[0]=(1-(T+_))*z,l[1]=(y+N)*z,l[2]=(E-P)*z,l[3]=0,l[4]=(y-N)*B,l[5]=(1-(S+_))*B,l[6]=(M+D)*B,l[7]=0,l[8]=(E+P)*I,l[9]=(M-D)*I,l[10]=(1-(S+T))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=yr.set(l[0],l[1],l[2]).length();const h=yr.set(l[4],l[5],l[6]).length(),d=yr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ai.copy(this);const p=1/c,v=1/h,g=1/d;return Ai.elements[0]*=p,Ai.elements[1]*=p,Ai.elements[2]*=p,Ai.elements[4]*=v,Ai.elements[5]*=v,Ai.elements[6]*=v,Ai.elements[8]*=g,Ai.elements[9]*=g,Ai.elements[10]*=g,i.setFromRotationMatrix(Ai),s.x=c,s.y=h,s.z=d,this}makePerspective(e,i,s,l,c,h,d=Bi,m=!1){const p=this.elements,v=2*c/(i-e),g=2*c/(s-l),S=(i+e)/(i-e),y=(s+l)/(s-l);let E,T;if(m)E=c/(h-c),T=h*c/(h-c);else if(d===Bi)E=-(h+c)/(h-c),T=-2*h*c/(h-c);else if(d===Zc)E=-h/(h-c),T=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,h,d=Bi,m=!1){const p=this.elements,v=2/(i-e),g=2/(s-l),S=-(i+e)/(i-e),y=-(s+l)/(s-l);let E,T;if(m)E=1/(h-c),T=h/(h-c);else if(d===Bi)E=-2/(h-c),T=-(h+c)/(h-c);else if(d===Zc)E=-1/(h-c),T=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const yr=new tt,Ai=new an,CM=new tt(0,0,0),DM=new tt(1,1,1),Ka=new tt,Ec=new tt,ai=new tt,n_=new an,i_=new Qo;class Sa{constructor(e=0,i=0,s=0,l=Sa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],v=l[9],g=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Se(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Se(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,y),this._y=0);break;default:ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return n_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(n_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return i_.setFromEuler(this),this.setFromQuaternion(i_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sa.DEFAULT_ORDER="XYZ";class cv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let UM=0;const a_=new tt,br=new Qo,ha=new an,Tc=new tt,Bo=new tt,NM=new tt,LM=new Qo,s_=new tt(1,0,0),r_=new tt(0,1,0),o_=new tt(0,0,1),l_={type:"added"},OM={type:"removed"},Er={type:"childadded",child:null},Th={type:"childremoved",child:null};class Vn extends Ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=Ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vn.DEFAULT_UP.clone();const e=new tt,i=new Sa,s=new Qo,l=new tt(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new an},normalMatrix:{value:new ue}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=Vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return br.setFromAxisAngle(e,i),this.quaternion.multiply(br),this}rotateOnWorldAxis(e,i){return br.setFromAxisAngle(e,i),this.quaternion.premultiply(br),this}rotateX(e){return this.rotateOnAxis(s_,e)}rotateY(e){return this.rotateOnAxis(r_,e)}rotateZ(e){return this.rotateOnAxis(o_,e)}translateOnAxis(e,i){return a_.copy(e).applyQuaternion(this.quaternion),this.position.add(a_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(s_,e)}translateY(e){return this.translateOnAxis(r_,e)}translateZ(e){return this.translateOnAxis(o_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Tc.copy(e):Tc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt(Bo,Tc,this.up):ha.lookAt(Tc,Bo,this.up),this.quaternion.setFromRotationMatrix(ha),l&&(ha.extractRotation(l.matrixWorld),br.setFromRotationMatrix(ha),this.quaternion.premultiply(br.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Re("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(l_),Er.child=e,this.dispatchEvent(Er),Er.child=null):Re("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(OM),Th.child=e,this.dispatchEvent(Th),Th.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ha.multiply(e.parent.matrixWorld)),e.applyMatrix4(ha),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(l_),Er.child=e,this.dispatchEvent(Er),Er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,NM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,LM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),v=h(e.images),g=h(e.shapes),S=h(e.skeletons),y=h(e.animations),E=h(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),S.length>0&&(s.skeletons=S),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Vn.DEFAULT_UP=new tt(0,1,0);Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new tt,da=new tt,Ah=new tt,pa=new tt,Tr=new tt,Ar=new tt,c_=new tt,Rh=new tt,wh=new tt,Ch=new tt,Dh=new on,Uh=new on,Nh=new on;class wi{constructor(e=new tt,i=new tt,s=new tt){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ri.subVectors(e,i),l.cross(Ri);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ri.subVectors(l,i),da.subVectors(s,i),Ah.subVectors(e,i);const h=Ri.dot(Ri),d=Ri.dot(da),m=Ri.dot(Ah),p=da.dot(da),v=da.dot(Ah),g=h*p-d*d;if(g===0)return c.set(0,0,0),null;const S=1/g,y=(p*m-d*v)*S,E=(h*v-d*m)*S;return c.set(1-y-E,E,y)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(e,i,s,l,c,h,d,m){return this.getBarycoord(e,i,s,l,pa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,pa.x),m.addScaledVector(h,pa.y),m.addScaledVector(d,pa.z),m)}static getInterpolatedAttribute(e,i,s,l,c,h){return Dh.setScalar(0),Uh.setScalar(0),Nh.setScalar(0),Dh.fromBufferAttribute(e,i),Uh.fromBufferAttribute(e,s),Nh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Dh,c.x),h.addScaledVector(Uh,c.y),h.addScaledVector(Nh,c.z),h}static isFrontFacing(e,i,s,l){return Ri.subVectors(s,i),da.subVectors(e,i),Ri.cross(da).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),da.subVectors(this.a,this.b),Ri.cross(da).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return wi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return wi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let h,d;Tr.subVectors(l,s),Ar.subVectors(c,s),Rh.subVectors(e,s);const m=Tr.dot(Rh),p=Ar.dot(Rh);if(m<=0&&p<=0)return i.copy(s);wh.subVectors(e,l);const v=Tr.dot(wh),g=Ar.dot(wh);if(v>=0&&g<=v)return i.copy(l);const S=m*g-v*p;if(S<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(s).addScaledVector(Tr,h);Ch.subVectors(e,c);const y=Tr.dot(Ch),E=Ar.dot(Ch);if(E>=0&&y<=E)return i.copy(c);const T=y*p-m*E;if(T<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(Ar,d);const M=v*E-y*g;if(M<=0&&g-v>=0&&y-E>=0)return c_.subVectors(c,l),d=(g-v)/(g-v+(y-E)),i.copy(l).addScaledVector(c_,d);const _=1/(M+T+S);return h=T*_,d=S*_,i.copy(s).addScaledVector(Tr,h).addScaledVector(Ar,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const uv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qa={h:0,s:0,l:0},Ac={h:0,s:0,l:0};function Lh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Me{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=_i){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ee.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Ee.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ee.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Ee.workingColorSpace){if(e=MM(e,1),i=Se(i,0,1),s=Se(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Lh(h,c,e+1/3),this.g=Lh(h,c,e),this.b=Lh(h,c,e-1/3)}return Ee.colorSpaceToWorking(this,l),this}setStyle(e,i=_i){function s(c){c!==void 0&&parseFloat(c)<1&&ie("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ie("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=_i){const s=uv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}copyLinearToSRGB(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_i){return Ee.workingToColorSpace(Pn.copy(this),e),Math.round(Se(Pn.r*255,0,255))*65536+Math.round(Se(Pn.g*255,0,255))*256+Math.round(Se(Pn.b*255,0,255))}getHexString(e=_i){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ee.workingColorSpace){Ee.workingToColorSpace(Pn.copy(this),i);const s=Pn.r,l=Pn.g,c=Pn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const v=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=v<=.5?g/(h+d):g/(2-h-d),h){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=Ee.workingColorSpace){return Ee.workingToColorSpace(Pn.copy(this),i),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=_i){Ee.workingToColorSpace(Pn.copy(this),e);const i=Pn.r,s=Pn.g,l=Pn.b;return e!==_i?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Qa),this.setHSL(Qa.h+e,Qa.s+i,Qa.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Qa),e.getHSL(Ac);const s=mh(Qa.h,Ac.h,i),l=mh(Qa.s,Ac.s,i),c=mh(Qa.l,Ac.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Me;Me.NAMES=uv;let PM=0;class Br extends Ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=Ko(),this.name="",this.type="Material",this.blending=Ur,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wh,this.blendDst=qh,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_r,this.stencilZFail=_r,this.stencilZPass=_r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ie(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ie(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ur&&(s.blending=this.blending),this.side!==es&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Wh&&(s.blendSrc=this.blendSrc),this.blendDst!==qh&&(s.blendDst=this.blendDst),this.blendEquation!==Cs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Lr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_r&&(s.stencilFail=this.stencilFail),this.stencilZFail!==_r&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==_r&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xi extends Br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sa,this.combine=W_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new tt,Rc=new Ce;let zM=0;class In{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=Zg,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Rc.fromBufferAttribute(this,i),Rc.applyMatrix3(e),this.setXY(i,Rc.x,Rc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=zo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Zn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=zo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=zo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=zo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=zo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),l=Zn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),l=Zn(l,this.array),c=Zn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zg&&(e.usage=this.usage),e}}class fv extends In{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class hv extends In{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Oe extends In{constructor(e,i,s){super(new Float32Array(e),i,s)}}let FM=0;const gi=new an,Oh=new Vn,Rr=new tt,si=new Jo,Ho=new Jo,xn=new tt;class Ve extends Ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=Ko(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ov(e)?hv:fv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ue().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gi.makeRotationFromQuaternion(e),this.applyMatrix4(gi),this}rotateX(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this}rotateY(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this}rotateZ(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this}translate(e,i,s){return gi.makeTranslation(e,i,s),this.applyMatrix4(gi),this}scale(e,i,s){return gi.makeScale(e,i,s),this.applyMatrix4(gi),this}lookAt(e){return Oh.lookAt(e),Oh.updateMatrix(),this.applyMatrix4(Oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rr).negate(),this.translate(Rr.x,Rr.y,Rr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Oe(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];si.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $o);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(e){const s=this.boundingSphere.center;if(si.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Ho.setFromBufferAttribute(d),this.morphTargetsRelative?(xn.addVectors(si.min,Ho.min),si.expandByPoint(xn),xn.addVectors(si.max,Ho.max),si.expandByPoint(xn)):(si.expandByPoint(Ho.min),si.expandByPoint(Ho.max))}si.getCenter(s);let l=0;for(let c=0,h=e.count;c<h;c++)xn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(xn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)xn.fromBufferAttribute(d,p),m&&(Rr.fromBufferAttribute(e,p),xn.add(Rr)),l=Math.max(l,s.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let X=0;X<s.count;X++)d[X]=new tt,m[X]=new tt;const p=new tt,v=new tt,g=new tt,S=new Ce,y=new Ce,E=new Ce,T=new tt,M=new tt;function _(X,A,U){p.fromBufferAttribute(s,X),v.fromBufferAttribute(s,A),g.fromBufferAttribute(s,U),S.fromBufferAttribute(c,X),y.fromBufferAttribute(c,A),E.fromBufferAttribute(c,U),v.sub(p),g.sub(p),y.sub(S),E.sub(S);const H=1/(y.x*E.y-E.x*y.y);isFinite(H)&&(T.copy(v).multiplyScalar(E.y).addScaledVector(g,-y.y).multiplyScalar(H),M.copy(g).multiplyScalar(y.x).addScaledVector(v,-E.x).multiplyScalar(H),d[X].add(T),d[A].add(T),d[U].add(T),m[X].add(M),m[A].add(M),m[U].add(M))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let X=0,A=D.length;X<A;++X){const U=D[X],H=U.start,K=U.count;for(let nt=H,ut=H+K;nt<ut;nt+=3)_(e.getX(nt+0),e.getX(nt+1),e.getX(nt+2))}const P=new tt,N=new tt,z=new tt,B=new tt;function I(X){z.fromBufferAttribute(l,X),B.copy(z);const A=d[X];P.copy(A),P.sub(z.multiplyScalar(z.dot(A))).normalize(),N.crossVectors(B,A);const H=N.dot(m[X])<0?-1:1;h.setXYZW(X,P.x,P.y,P.z,H)}for(let X=0,A=D.length;X<A;++X){const U=D[X],H=U.start,K=U.count;for(let nt=H,ut=H+K;nt<ut;nt+=3)I(e.getX(nt+0)),I(e.getX(nt+1)),I(e.getX(nt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new In(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,y=s.count;S<y;S++)s.setXYZ(S,0,0,0);const l=new tt,c=new tt,h=new tt,d=new tt,m=new tt,p=new tt,v=new tt,g=new tt;if(e)for(let S=0,y=e.count;S<y;S+=3){const E=e.getX(S+0),T=e.getX(S+1),M=e.getX(S+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),h.fromBufferAttribute(i,M),v.subVectors(h,c),g.subVectors(l,c),v.cross(g),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,M),d.add(v),m.add(v),p.add(v),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),v.subVectors(h,c),g.subVectors(l,c),v.cross(g),s.setXYZ(S+0,v.x,v.y,v.z),s.setXYZ(S+1,v.x,v.y,v.z),s.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)xn.fromBufferAttribute(e,i),xn.normalize(),e.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function e(d,m){const p=d.array,v=d.itemSize,g=d.normalized,S=new p.constructor(m.length*v);let y=0,E=0;for(let T=0,M=m.length;T<M;T++){d.isInterleavedBufferAttribute?y=m[T]*d.data.stride+d.offset:y=m[T]*v;for(let _=0;_<v;_++)S[E++]=p[y++]}return new In(S,v,g)}if(this.index===null)return ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ve,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let v=0,g=p.length;v<g;v++){const S=p[v],y=e(S,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,S=p.length;g<S;g++){const y=p[g];v.push(y.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=e.morphAttributes;for(const p in c){const v=[],g=c[p];for(let S=0,y=g.length;S<y;S++)v.push(g[S].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,v=h.length;p<v;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const u_=new an,Es=new Qd,wc=new $o,f_=new tt,Cc=new tt,Dc=new tt,Uc=new tt,Ph=new tt,Nc=new tt,h_=new tt,Lc=new tt;class Un extends Vn{constructor(e=new Ve,i=new Xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Nc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=d[m],g=c[m];v!==0&&(Ph.fromBufferAttribute(g,e),h?Nc.addScaledVector(Ph,v):Nc.addScaledVector(Ph.sub(i),v))}i.add(Nc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),wc.copy(s.boundingSphere),wc.applyMatrix4(c),Es.copy(e.ray).recast(e.near),!(wc.containsPoint(Es.origin)===!1&&(Es.intersectSphere(wc,f_)===null||Es.origin.distanceToSquared(f_)>(e.far-e.near)**2))&&(u_.copy(c).invert(),Es.copy(e.ray).applyMatrix4(u_),!(s.boundingBox!==null&&Es.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Es)))}_computeIntersections(e,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,S=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,T=S.length;E<T;E++){const M=S[E],_=h[M.materialIndex],D=Math.max(M.start,y.start),P=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let N=D,z=P;N<z;N+=3){const B=d.getX(N),I=d.getX(N+1),X=d.getX(N+2);l=Oc(this,_,e,s,p,v,g,B,I,X),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),T=Math.min(d.count,y.start+y.count);for(let M=E,_=T;M<_;M+=3){const D=d.getX(M),P=d.getX(M+1),N=d.getX(M+2);l=Oc(this,h,e,s,p,v,g,D,P,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,T=S.length;E<T;E++){const M=S[E],_=h[M.materialIndex],D=Math.max(M.start,y.start),P=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let N=D,z=P;N<z;N+=3){const B=N,I=N+1,X=N+2;l=Oc(this,_,e,s,p,v,g,B,I,X),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),T=Math.min(m.count,y.start+y.count);for(let M=E,_=T;M<_;M+=3){const D=M,P=M+1,N=M+2;l=Oc(this,h,e,s,p,v,g,D,P,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function IM(o,e,i,s,l,c,h,d){let m;if(e.side===Kn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,e.side===es,d),m===null)return null;Lc.copy(d),Lc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Lc);return p<i.near||p>i.far?null:{distance:p,point:Lc.clone(),object:o}}function Oc(o,e,i,s,l,c,h,d,m,p){o.getVertexPosition(d,Cc),o.getVertexPosition(m,Dc),o.getVertexPosition(p,Uc);const v=IM(o,e,i,s,Cc,Dc,Uc,h_);if(v){const g=new tt;wi.getBarycoord(h_,Cc,Dc,Uc,g),l&&(v.uv=wi.getInterpolatedAttribute(l,d,m,p,g,new Ce)),c&&(v.uv1=wi.getInterpolatedAttribute(c,d,m,p,g,new Ce)),h&&(v.normal=wi.getInterpolatedAttribute(h,d,m,p,g,new tt),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new tt,materialIndex:0};wi.getNormal(Cc,Dc,Uc,S.normal),v.face=S,v.barycoord=g}return v}class tl extends Ve{constructor(e=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],v=[],g=[];let S=0,y=0;E("z","y","x",-1,-1,s,i,e,h,c,0),E("z","y","x",1,-1,s,i,-e,h,c,1),E("x","z","y",1,1,e,s,i,l,h,2),E("x","z","y",1,-1,e,s,-i,l,h,3),E("x","y","z",1,-1,e,i,s,l,c,4),E("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Oe(p,3)),this.setAttribute("normal",new Oe(v,3)),this.setAttribute("uv",new Oe(g,2));function E(T,M,_,D,P,N,z,B,I,X,A){const U=N/I,H=z/X,K=N/2,nt=z/2,ut=B/2,Y=I+1,C=X+1;let L=0,q=0;const ft=new tt;for(let pt=0;pt<C;pt++){const O=pt*H-nt;for(let et=0;et<Y;et++){const ht=et*U-K;ft[T]=ht*D,ft[M]=O*P,ft[_]=ut,p.push(ft.x,ft.y,ft.z),ft[T]=0,ft[M]=0,ft[_]=B>0?1:-1,v.push(ft.x,ft.y,ft.z),g.push(et/I),g.push(1-pt/X),L+=1}}for(let pt=0;pt<X;pt++)for(let O=0;O<I;O++){const et=S+O+Y*pt,ht=S+O+Y*(pt+1),Et=S+(O+1)+Y*(pt+1),Nt=S+(O+1)+Y*pt;m.push(et,ht,Nt),m.push(ht,Et,Nt),q+=6}d.addGroup(y,q,A),y+=q,S+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fr(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Hn(o){const e={};for(let i=0;i<o.length;i++){const s=Fr(o[i]);for(const l in s)e[l]=s[l]}return e}function BM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function dv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ee.workingColorSpace}const HM={clone:Fr,merge:Hn};var GM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends Br{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GM,this.fragmentShader=VM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fr(e.uniforms),this.uniformsGroups=BM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class pv extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ja=new tt,d_=new Ce,p_=new Ce;class zn extends pv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=zd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ph*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zd*2*Math.atan(Math.tan(ph*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z),Ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z)}getViewSize(e,i){return this.getViewBounds(e,d_,p_),i.subVectors(p_,d_)}setViewOffset(e,i,s,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ph*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const wr=-90,Cr=1;class kM extends Vn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new zn(wr,Cr,e,i);l.layers=this.layers,this.add(l);const c=new zn(wr,Cr,e,i);c.layers=this.layers,this.add(c);const h=new zn(wr,Cr,e,i);h.layers=this.layers,this.add(h);const d=new zn(wr,Cr,e,i);d.layers=this.layers,this.add(d);const m=new zn(wr,Cr,e,i);m.layers=this.layers,this.add(m);const p=new zn(wr,Cr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===Bi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Zc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,v]=this.children,g=e.getRenderTarget(),S=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,l),e.render(i,v),e.setRenderTarget(g,S,y),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class mv extends Gn{constructor(e=[],i=Ls,s,l,c,h,d,m,p,v){super(e,i,s,l,c,h,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gv extends Vi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new mv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new tl(5,5,5),c=new Wi({name:"CubemapFromEquirect",uniforms:Fr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:ga});c.uniforms.tEquirect.value=i;const h=new Un(l,c),d=i.minFilter;return i.minFilter===Us&&(i.minFilter=Fn),new kM(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(c)}}class Hi extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XM={type:"move"};class zh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const T of e.hand.values()){const M=i.getJointPose(T,s),_=this._getHandJoint(p,T);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],S=v.position.distanceTo(g.position),y=.02,E=.005;p.inputState.pinching&&S>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(XM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Hi;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class el extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sa,this.environmentIntensity=1,this.environmentRotation=new Sa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class WM extends Gn{constructor(e=null,i=1,s=1,l,c,h,d,m,p=Dn,v=Dn,g,S){super(null,h,d,m,p,v,l,c,g,S),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fh=new tt,qM=new tt,YM=new ue;class ws{constructor(e=new tt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Fh.subVectors(s,i).cross(qM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Fh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||YM.getNormalMatrix(e),l=this.coplanarPoint(Fh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ts=new $o,jM=new Ce(.5,.5),Pc=new tt;class _v{constructor(e=new ws,i=new ws,s=new ws,l=new ws,c=new ws,h=new ws){this.planes=[e,i,s,l,c,h]}set(e,i,s,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Bi,s=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],m=c[2],p=c[3],v=c[4],g=c[5],S=c[6],y=c[7],E=c[8],T=c[9],M=c[10],_=c[11],D=c[12],P=c[13],N=c[14],z=c[15];if(l[0].setComponents(p-h,y-v,_-E,z-D).normalize(),l[1].setComponents(p+h,y+v,_+E,z+D).normalize(),l[2].setComponents(p+d,y+g,_+T,z+P).normalize(),l[3].setComponents(p-d,y-g,_-T,z-P).normalize(),s)l[4].setComponents(m,S,M,N).normalize(),l[5].setComponents(p-m,y-S,_-M,z-N).normalize();else if(l[4].setComponents(p-m,y-S,_-M,z-N).normalize(),i===Bi)l[5].setComponents(p+m,y+S,_+M,z+N).normalize();else if(i===Zc)l[5].setComponents(m,S,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ts.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(e){Ts.center.set(0,0,0);const i=jM.distanceTo(e.center);return Ts.radius=.7071067811865476+i,Ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Pc.x=l.normal.x>0?e.max.x:e.min.x,Pc.y=l.normal.y>0?e.max.y:e.min.y,Pc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Pc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ns extends Br{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qc=new tt,Jc=new tt,m_=new an,Go=new Qd,zc=new $o,Ih=new tt,g_=new tt;class Jd extends Vn{constructor(e=new Ve,i=new ns){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Qc.fromBufferAttribute(i,l-1),Jc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Qc.distanceTo(Jc);e.setAttribute("lineDistance",new Oe(s,1))}else ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),zc.copy(s.boundingSphere),zc.applyMatrix4(l),zc.radius+=c,e.ray.intersectsSphere(zc)===!1)return;m_.copy(l).invert(),Go.copy(e.ray).applyMatrix4(m_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,v=s.index,S=s.attributes.position;if(v!==null){const y=Math.max(0,h.start),E=Math.min(v.count,h.start+h.count);for(let T=y,M=E-1;T<M;T+=p){const _=v.getX(T),D=v.getX(T+1),P=Fc(this,e,Go,m,_,D,T);P&&i.push(P)}if(this.isLineLoop){const T=v.getX(E-1),M=v.getX(y),_=Fc(this,e,Go,m,T,M,E-1);_&&i.push(_)}}else{const y=Math.max(0,h.start),E=Math.min(S.count,h.start+h.count);for(let T=y,M=E-1;T<M;T+=p){const _=Fc(this,e,Go,m,T,T+1,T);_&&i.push(_)}if(this.isLineLoop){const T=Fc(this,e,Go,m,E-1,y,E-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Fc(o,e,i,s,l,c,h){const d=o.geometry.attributes.position;if(Qc.fromBufferAttribute(d,l),Jc.fromBufferAttribute(d,c),i.distanceSqToSegment(Qc,Jc,Ih,g_)>s)return;Ih.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(Ih);if(!(p<e.near||p>e.far))return{distance:p,point:g_.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const __=new tt,v_=new tt;class nl extends Jd{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)__.fromBufferAttribute(i,l),v_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+__.distanceTo(v_);e.setAttribute("lineDistance",new Oe(s,1))}else ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class is extends Br{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const x_=new an,Fd=new Qd,Ic=new $o,Bc=new tt;class Os extends Vn{constructor(e=new Ve,i=new is){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ic.copy(s.boundingSphere),Ic.applyMatrix4(l),Ic.radius+=c,e.ray.intersectsSphere(Ic)===!1)return;x_.copy(l).invert(),Fd.copy(e.ray).applyMatrix4(x_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,g=s.attributes.position;if(p!==null){const S=Math.max(0,h.start),y=Math.min(p.count,h.start+h.count);for(let E=S,T=y;E<T;E++){const M=p.getX(E);Bc.fromBufferAttribute(g,M),S_(Bc,M,m,l,e,i,this)}}else{const S=Math.max(0,h.start),y=Math.min(g.count,h.start+h.count);for(let E=S,T=y;E<T;E++)Bc.fromBufferAttribute(g,E),S_(Bc,E,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function S_(o,e,i,s,l,c,h){const d=Fd.distanceSqToPoint(o);if(d<i){const m=new tt;Fd.closestPointToPoint(o,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class Zo extends Gn{constructor(e,i,s=ki,l,c,h,d=Dn,m=Dn,p,v=xa,g=1){if(v!==xa&&v!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:g};super(S,l,c,h,d,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ZM extends Zo{constructor(e,i=ki,s=Ls,l,c,h=Dn,d=Dn,m,p=xa){const v={width:e,height:e,depth:1},g=[v,v,v,v,v,v];super(e,e,i,s,l,c,h,d,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class vv extends Gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class $d extends Ve{constructor(e=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:l};const c=[],h=[];d(l),p(s),v(),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(c.slice(),3)),this.setAttribute("uv",new Oe(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(D){const P=new tt,N=new tt,z=new tt;for(let B=0;B<i.length;B+=3)y(i[B+0],P),y(i[B+1],N),y(i[B+2],z),m(P,N,z,D)}function m(D,P,N,z){const B=z+1,I=[];for(let X=0;X<=B;X++){I[X]=[];const A=D.clone().lerp(N,X/B),U=P.clone().lerp(N,X/B),H=B-X;for(let K=0;K<=H;K++)K===0&&X===B?I[X][K]=A:I[X][K]=A.clone().lerp(U,K/H)}for(let X=0;X<B;X++)for(let A=0;A<2*(B-X)-1;A++){const U=Math.floor(A/2);A%2===0?(S(I[X][U+1]),S(I[X+1][U]),S(I[X][U])):(S(I[X][U+1]),S(I[X+1][U+1]),S(I[X+1][U]))}}function p(D){const P=new tt;for(let N=0;N<c.length;N+=3)P.x=c[N+0],P.y=c[N+1],P.z=c[N+2],P.normalize().multiplyScalar(D),c[N+0]=P.x,c[N+1]=P.y,c[N+2]=P.z}function v(){const D=new tt;for(let P=0;P<c.length;P+=3){D.x=c[P+0],D.y=c[P+1],D.z=c[P+2];const N=M(D)/2/Math.PI+.5,z=_(D)/Math.PI+.5;h.push(N,1-z)}E(),g()}function g(){for(let D=0;D<h.length;D+=6){const P=h[D+0],N=h[D+2],z=h[D+4],B=Math.max(P,N,z),I=Math.min(P,N,z);B>.9&&I<.1&&(P<.2&&(h[D+0]+=1),N<.2&&(h[D+2]+=1),z<.2&&(h[D+4]+=1))}}function S(D){c.push(D.x,D.y,D.z)}function y(D,P){const N=D*3;P.x=e[N+0],P.y=e[N+1],P.z=e[N+2]}function E(){const D=new tt,P=new tt,N=new tt,z=new tt,B=new Ce,I=new Ce,X=new Ce;for(let A=0,U=0;A<c.length;A+=9,U+=6){D.set(c[A+0],c[A+1],c[A+2]),P.set(c[A+3],c[A+4],c[A+5]),N.set(c[A+6],c[A+7],c[A+8]),B.set(h[U+0],h[U+1]),I.set(h[U+2],h[U+3]),X.set(h[U+4],h[U+5]),z.copy(D).add(P).add(N).divideScalar(3);const H=M(z);T(B,U+0,D,H),T(I,U+2,P,H),T(X,U+4,N,H)}}function T(D,P,N,z){z<0&&D.x===1&&(h[P]=D.x-1),N.x===0&&N.z===0&&(h[P]=z/2/Math.PI+.5)}function M(D){return Math.atan2(D.z,-D.x)}function _(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $d(e.vertices,e.indices,e.radius,e.detail)}}class il extends $d{constructor(e=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new il(e.radius,e.detail)}}class al extends Ve{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,v=m+1,g=e/d,S=i/m,y=[],E=[],T=[],M=[];for(let _=0;_<v;_++){const D=_*S-h;for(let P=0;P<p;P++){const N=P*g-c;E.push(N,-D,0),T.push(0,0,1),M.push(P/d),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let D=0;D<d;D++){const P=D+p*_,N=D+p*(_+1),z=D+1+p*(_+1),B=D+1+p*_;y.push(P,N,B),y.push(N,z,B)}this.setIndex(y),this.setAttribute("position",new Oe(E,3)),this.setAttribute("normal",new Oe(T,3)),this.setAttribute("uv",new Oe(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.width,e.height,e.widthSegments,e.heightSegments)}}class tp extends Ve{constructor(e=.5,i=1,s=32,l=1,c=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const d=[],m=[],p=[],v=[];let g=e;const S=(i-e)/l,y=new tt,E=new Ce;for(let T=0;T<=l;T++){for(let M=0;M<=s;M++){const _=c+M/s*h;y.x=g*Math.cos(_),y.y=g*Math.sin(_),m.push(y.x,y.y,y.z),p.push(0,0,1),E.x=(y.x/i+1)/2,E.y=(y.y/i+1)/2,v.push(E.x,E.y)}g+=S}for(let T=0;T<l;T++){const M=T*(s+1);for(let _=0;_<s;_++){const D=_+M,P=D,N=D+s+1,z=D+s+2,B=D+1;d.push(P,N,B),d.push(N,z,B)}}this.setIndex(d),this.setAttribute("position",new Oe(m,3)),this.setAttribute("normal",new Oe(p,3)),this.setAttribute("uv",new Oe(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class tu extends Ve{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const v=[],g=new tt,S=new tt,y=[],E=[],T=[],M=[];for(let _=0;_<=s;_++){const D=[],P=_/s;let N=0;_===0&&h===0?N=.5/i:_===s&&m===Math.PI&&(N=-.5/i);for(let z=0;z<=i;z++){const B=z/i;g.x=-e*Math.cos(l+B*c)*Math.sin(h+P*d),g.y=e*Math.cos(h+P*d),g.z=e*Math.sin(l+B*c)*Math.sin(h+P*d),E.push(g.x,g.y,g.z),S.copy(g).normalize(),T.push(S.x,S.y,S.z),M.push(B+N,1-P),D.push(p++)}v.push(D)}for(let _=0;_<s;_++)for(let D=0;D<i;D++){const P=v[_][D+1],N=v[_][D],z=v[_+1][D],B=v[_+1][D+1];(_!==0||h>0)&&y.push(P,N,B),(_!==s-1||m<Math.PI)&&y.push(N,z,B)}this.setIndex(y),this.setAttribute("position",new Oe(E,3)),this.setAttribute("normal",new Oe(T,3)),this.setAttribute("uv",new Oe(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ep extends Ve{constructor(e=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const h=[],d=[],m=[],p=[],v=new tt,g=new tt,S=new tt;for(let y=0;y<=s;y++)for(let E=0;E<=l;E++){const T=E/l*c,M=y/s*Math.PI*2;g.x=(e+i*Math.cos(M))*Math.cos(T),g.y=(e+i*Math.cos(M))*Math.sin(T),g.z=i*Math.sin(M),d.push(g.x,g.y,g.z),v.x=e*Math.cos(T),v.y=e*Math.sin(T),S.subVectors(g,v).normalize(),m.push(S.x,S.y,S.z),p.push(E/l),p.push(y/s)}for(let y=1;y<=s;y++)for(let E=1;E<=l;E++){const T=(l+1)*y+E-1,M=(l+1)*(y-1)+E-1,_=(l+1)*(y-1)+E,D=(l+1)*y+E;h.push(T,M,D),h.push(M,_,D)}this.setIndex(h),this.setAttribute("position",new Oe(d,3)),this.setAttribute("normal",new Oe(m,3)),this.setAttribute("uv",new Oe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ep(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class KM extends Wi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class QM extends Br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class JM extends Br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class xv extends pv{constructor(e=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,h=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class $M extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class sl{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function M_(o,e,i,s){const l=ty(s);switch(i){case av:return o*e;case rv:return o*e/l.components*l.byteLength;case Wd:return o*e/l.components*l.byteLength;case Pr:return o*e*2/l.components*l.byteLength;case qd:return o*e*2/l.components*l.byteLength;case sv:return o*e*3/l.components*l.byteLength;case Ci:return o*e*4/l.components*l.byteLength;case Yd:return o*e*4/l.components*l.byteLength;case kc:case Xc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Wc:case qc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case sd:case od:return Math.max(o,16)*Math.max(e,8)/4;case ad:case rd:return Math.max(o,8)*Math.max(e,8)/2;case ld:case cd:case fd:case hd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case ud:case dd:case pd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case md:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case gd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case _d:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case vd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case xd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Sd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Md:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case yd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case bd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Ed:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Td:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Ad:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Rd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case wd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Cd:case Dd:case Ud:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Nd:case Ld:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Od:case Pd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ty(o){switch(o){case vi:case tv:return{byteLength:1,components:1};case qo:case ev:case va:return{byteLength:2,components:1};case kd:case Xd:return{byteLength:2,components:4};case ki:case Vd:case Ii:return{byteLength:4,components:1};case nv:case iv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gd}}));typeof window<"u"&&(window.__THREE__?ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gd);function Sv(){let o=null,e=!1,i=null,s=null;function l(c,h){i(c,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function ey(o){const e=new WeakMap;function i(d,m){const p=d.array,v=d.usage,g=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,v),d.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,m,p){const v=m.array,g=m.updateRanges;if(o.bindBuffer(p,d),g.length===0)o.bufferSubData(p,0,v);else{g.sort((y,E)=>y.start-E.start);let S=0;for(let y=1;y<g.length;y++){const E=g[S],T=g[y];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++S,g[S]=T)}g.length=S+1;for(let y=0,E=g.length;y<E;y++){const T=g[y];o.bufferSubData(p,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var ny=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iy=`#ifdef USE_ALPHAHASH
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
#endif`,ay=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ry=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ly=`#ifdef USE_AOMAP
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
#endif`,cy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,py=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,my=`#ifdef USE_IRIDESCENCE
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
#endif`,gy=`#ifdef USE_BUMPMAP
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
#endif`,_y=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,My=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,by=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ey=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ty=`#define PI 3.141592653589793
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
} // validated`,Ay=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ry=`vec3 transformedNormal = objectNormal;
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
#endif`,wy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ny="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ly=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Oy=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Py=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zy=`#ifdef USE_ENVMAP
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
#endif`,Fy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Iy=`#ifdef USE_ENVMAP
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
#endif`,By=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ky=`#ifdef USE_GRADIENTMAP
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
}`,Xy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yy=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,jy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Zy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$y=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,t1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,e1=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,n1=`#if defined( RE_IndirectDiffuse )
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
#endif`,i1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,s1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,l1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,c1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,f1=`#if defined( USE_POINTS_UV )
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
#endif`,h1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,m1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,v1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,S1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,M1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,E1=`#ifdef USE_NORMALMAP
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
#endif`,T1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,A1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,w1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,C1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,U1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,L1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,F1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,I1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,B1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,H1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,G1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,V1=`#ifdef USE_SKINNING
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
#endif`,k1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X1=`#ifdef USE_SKINNING
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
#endif`,W1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,j1=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Z1=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,K1=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nb=`uniform sampler2D t2D;
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
}`,ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ab=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ob=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,lb=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cb=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,ub=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,db=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pb=`uniform vec3 diffuse;
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
}`,mb=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,gb=`uniform vec3 diffuse;
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
}`,_b=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,vb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,xb=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,Sb=`#define MATCAP
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
}`,Mb=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,yb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bb=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,Eb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
}`,Tb=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,Ab=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Rb=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,wb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Cb=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Db=`uniform vec3 diffuse;
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
}`,Ub=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Nb=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,Lb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Ob=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:ny,alphahash_pars_fragment:iy,alphamap_fragment:ay,alphamap_pars_fragment:sy,alphatest_fragment:ry,alphatest_pars_fragment:oy,aomap_fragment:ly,aomap_pars_fragment:cy,batching_pars_vertex:uy,batching_vertex:fy,begin_vertex:hy,beginnormal_vertex:dy,bsdfs:py,iridescence_fragment:my,bumpmap_pars_fragment:gy,clipping_planes_fragment:_y,clipping_planes_pars_fragment:vy,clipping_planes_pars_vertex:xy,clipping_planes_vertex:Sy,color_fragment:My,color_pars_fragment:yy,color_pars_vertex:by,color_vertex:Ey,common:Ty,cube_uv_reflection_fragment:Ay,defaultnormal_vertex:Ry,displacementmap_pars_vertex:wy,displacementmap_vertex:Cy,emissivemap_fragment:Dy,emissivemap_pars_fragment:Uy,colorspace_fragment:Ny,colorspace_pars_fragment:Ly,envmap_fragment:Oy,envmap_common_pars_fragment:Py,envmap_pars_fragment:zy,envmap_pars_vertex:Fy,envmap_physical_pars_fragment:jy,envmap_vertex:Iy,fog_vertex:By,fog_pars_vertex:Hy,fog_fragment:Gy,fog_pars_fragment:Vy,gradientmap_pars_fragment:ky,lightmap_pars_fragment:Xy,lights_lambert_fragment:Wy,lights_lambert_pars_fragment:qy,lights_pars_begin:Yy,lights_toon_fragment:Zy,lights_toon_pars_fragment:Ky,lights_phong_fragment:Qy,lights_phong_pars_fragment:Jy,lights_physical_fragment:$y,lights_physical_pars_fragment:t1,lights_fragment_begin:e1,lights_fragment_maps:n1,lights_fragment_end:i1,logdepthbuf_fragment:a1,logdepthbuf_pars_fragment:s1,logdepthbuf_pars_vertex:r1,logdepthbuf_vertex:o1,map_fragment:l1,map_pars_fragment:c1,map_particle_fragment:u1,map_particle_pars_fragment:f1,metalnessmap_fragment:h1,metalnessmap_pars_fragment:d1,morphinstance_vertex:p1,morphcolor_vertex:m1,morphnormal_vertex:g1,morphtarget_pars_vertex:_1,morphtarget_vertex:v1,normal_fragment_begin:x1,normal_fragment_maps:S1,normal_pars_fragment:M1,normal_pars_vertex:y1,normal_vertex:b1,normalmap_pars_fragment:E1,clearcoat_normal_fragment_begin:T1,clearcoat_normal_fragment_maps:A1,clearcoat_pars_fragment:R1,iridescence_pars_fragment:w1,opaque_fragment:C1,packing:D1,premultiplied_alpha_fragment:U1,project_vertex:N1,dithering_fragment:L1,dithering_pars_fragment:O1,roughnessmap_fragment:P1,roughnessmap_pars_fragment:z1,shadowmap_pars_fragment:F1,shadowmap_pars_vertex:I1,shadowmap_vertex:B1,shadowmask_pars_fragment:H1,skinbase_vertex:G1,skinning_pars_vertex:V1,skinning_vertex:k1,skinnormal_vertex:X1,specularmap_fragment:W1,specularmap_pars_fragment:q1,tonemapping_fragment:Y1,tonemapping_pars_fragment:j1,transmission_fragment:Z1,transmission_pars_fragment:K1,uv_pars_fragment:Q1,uv_pars_vertex:J1,uv_vertex:$1,worldpos_vertex:tb,background_vert:eb,background_frag:nb,backgroundCube_vert:ib,backgroundCube_frag:ab,cube_vert:sb,cube_frag:rb,depth_vert:ob,depth_frag:lb,distance_vert:cb,distance_frag:ub,equirect_vert:fb,equirect_frag:hb,linedashed_vert:db,linedashed_frag:pb,meshbasic_vert:mb,meshbasic_frag:gb,meshlambert_vert:_b,meshlambert_frag:vb,meshmatcap_vert:xb,meshmatcap_frag:Sb,meshnormal_vert:Mb,meshnormal_frag:yb,meshphong_vert:bb,meshphong_frag:Eb,meshphysical_vert:Tb,meshphysical_frag:Ab,meshtoon_vert:Rb,meshtoon_frag:wb,points_vert:Cb,points_frag:Db,shadow_vert:Ub,shadow_frag:Nb,sprite_vert:Lb,sprite_frag:Ob},Pt={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},zi={basic:{uniforms:Hn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Hn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Me(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Hn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Hn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Hn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Me(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Hn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Hn([Pt.points,Pt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Hn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Hn([Pt.common,Pt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Hn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Hn([Pt.sprite,Pt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:Hn([Pt.common,Pt.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:Hn([Pt.lights,Pt.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};zi.physical={uniforms:Hn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const Hc={r:0,b:0,g:0},As=new Sa,Pb=new an;function zb(o,e,i,s,l,c,h){const d=new Me(0);let m=c===!0?0:1,p,v,g=null,S=0,y=null;function E(P){let N=P.isScene===!0?P.background:null;return N&&N.isTexture&&(N=(P.backgroundBlurriness>0?i:e).get(N)),N}function T(P){let N=!1;const z=E(P);z===null?_(d,m):z&&z.isColor&&(_(z,1),N=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||N)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(P,N){const z=E(N);z&&(z.isCubeTexture||z.mapping===$c)?(v===void 0&&(v=new Un(new tl(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:Fr(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(B,I,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),As.copy(N.backgroundRotation),As.x*=-1,As.y*=-1,As.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),v.material.uniforms.envMap.value=z,v.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(Pb.makeRotationFromEuler(As)),v.material.toneMapped=Ee.getTransfer(z.colorSpace)!==Ge,(g!==z||S!==z.version||y!==o.toneMapping)&&(v.material.needsUpdate=!0,g=z,S=z.version,y=o.toneMapping),v.layers.enableAll(),P.unshift(v,v.geometry,v.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new Un(new al(2,2),new Wi({name:"BackgroundMaterial",uniforms:Fr(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.toneMapped=Ee.getTransfer(z.colorSpace)!==Ge,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(g!==z||S!==z.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,g=z,S=z.version,y=o.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function _(P,N){P.getRGB(Hc,dv(o)),s.buffers.color.setClear(Hc.r,Hc.g,Hc.b,N,h)}function D(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,N=1){d.set(P),m=N,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(P){m=P,_(d,m)},render:T,addToRenderList:M,dispose:D}}function Fb(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let c=l,h=!1;function d(U,H,K,nt,ut){let Y=!1;const C=g(nt,K,H);c!==C&&(c=C,p(c.object)),Y=y(U,nt,K,ut),Y&&E(U,nt,K,ut),ut!==null&&e.update(ut,o.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,N(U,H,K,nt),ut!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ut).buffer))}function m(){return o.createVertexArray()}function p(U){return o.bindVertexArray(U)}function v(U){return o.deleteVertexArray(U)}function g(U,H,K){const nt=K.wireframe===!0;let ut=s[U.id];ut===void 0&&(ut={},s[U.id]=ut);let Y=ut[H.id];Y===void 0&&(Y={},ut[H.id]=Y);let C=Y[nt];return C===void 0&&(C=S(m()),Y[nt]=C),C}function S(U){const H=[],K=[],nt=[];for(let ut=0;ut<i;ut++)H[ut]=0,K[ut]=0,nt[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:K,attributeDivisors:nt,object:U,attributes:{},index:null}}function y(U,H,K,nt){const ut=c.attributes,Y=H.attributes;let C=0;const L=K.getAttributes();for(const q in L)if(L[q].location>=0){const pt=ut[q];let O=Y[q];if(O===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(O=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(O=U.instanceColor)),pt===void 0||pt.attribute!==O||O&&pt.data!==O.data)return!0;C++}return c.attributesNum!==C||c.index!==nt}function E(U,H,K,nt){const ut={},Y=H.attributes;let C=0;const L=K.getAttributes();for(const q in L)if(L[q].location>=0){let pt=Y[q];pt===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(pt=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(pt=U.instanceColor));const O={};O.attribute=pt,pt&&pt.data&&(O.data=pt.data),ut[q]=O,C++}c.attributes=ut,c.attributesNum=C,c.index=nt}function T(){const U=c.newAttributes;for(let H=0,K=U.length;H<K;H++)U[H]=0}function M(U){_(U,0)}function _(U,H){const K=c.newAttributes,nt=c.enabledAttributes,ut=c.attributeDivisors;K[U]=1,nt[U]===0&&(o.enableVertexAttribArray(U),nt[U]=1),ut[U]!==H&&(o.vertexAttribDivisor(U,H),ut[U]=H)}function D(){const U=c.newAttributes,H=c.enabledAttributes;for(let K=0,nt=H.length;K<nt;K++)H[K]!==U[K]&&(o.disableVertexAttribArray(K),H[K]=0)}function P(U,H,K,nt,ut,Y,C){C===!0?o.vertexAttribIPointer(U,H,K,ut,Y):o.vertexAttribPointer(U,H,K,nt,ut,Y)}function N(U,H,K,nt){T();const ut=nt.attributes,Y=K.getAttributes(),C=H.defaultAttributeValues;for(const L in Y){const q=Y[L];if(q.location>=0){let ft=ut[L];if(ft===void 0&&(L==="instanceMatrix"&&U.instanceMatrix&&(ft=U.instanceMatrix),L==="instanceColor"&&U.instanceColor&&(ft=U.instanceColor)),ft!==void 0){const pt=ft.normalized,O=ft.itemSize,et=e.get(ft);if(et===void 0)continue;const ht=et.buffer,Et=et.type,Nt=et.bytesPerElement,st=Et===o.INT||Et===o.UNSIGNED_INT||ft.gpuType===Vd;if(ft.isInterleavedBufferAttribute){const mt=ft.data,Dt=mt.stride,kt=ft.offset;if(mt.isInstancedInterleavedBuffer){for(let Ht=0;Ht<q.locationSize;Ht++)_(q.location+Ht,mt.meshPerAttribute);U.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Ht=0;Ht<q.locationSize;Ht++)M(q.location+Ht);o.bindBuffer(o.ARRAY_BUFFER,ht);for(let Ht=0;Ht<q.locationSize;Ht++)P(q.location+Ht,O/q.locationSize,Et,pt,Dt*Nt,(kt+O/q.locationSize*Ht)*Nt,st)}else{if(ft.isInstancedBufferAttribute){for(let mt=0;mt<q.locationSize;mt++)_(q.location+mt,ft.meshPerAttribute);U.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let mt=0;mt<q.locationSize;mt++)M(q.location+mt);o.bindBuffer(o.ARRAY_BUFFER,ht);for(let mt=0;mt<q.locationSize;mt++)P(q.location+mt,O/q.locationSize,Et,pt,O*Nt,O/q.locationSize*mt*Nt,st)}}else if(C!==void 0){const pt=C[L];if(pt!==void 0)switch(pt.length){case 2:o.vertexAttrib2fv(q.location,pt);break;case 3:o.vertexAttrib3fv(q.location,pt);break;case 4:o.vertexAttrib4fv(q.location,pt);break;default:o.vertexAttrib1fv(q.location,pt)}}}}D()}function z(){X();for(const U in s){const H=s[U];for(const K in H){const nt=H[K];for(const ut in nt)v(nt[ut].object),delete nt[ut];delete H[K]}delete s[U]}}function B(U){if(s[U.id]===void 0)return;const H=s[U.id];for(const K in H){const nt=H[K];for(const ut in nt)v(nt[ut].object),delete nt[ut];delete H[K]}delete s[U.id]}function I(U){for(const H in s){const K=s[H];if(K[U.id]===void 0)continue;const nt=K[U.id];for(const ut in nt)v(nt[ut].object),delete nt[ut];delete K[U.id]}}function X(){A(),h=!0,c!==l&&(c=l,p(c.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:A,dispose:z,releaseStatesOfGeometry:B,releaseStatesOfProgram:I,initAttributes:T,enableAttribute:M,disableUnusedAttributes:D}}function Ib(o,e,i){let s;function l(p){s=p}function c(p,v){o.drawArrays(s,p,v),i.update(v,s,1)}function h(p,v,g){g!==0&&(o.drawArraysInstanced(s,p,v,g),i.update(v,s,g))}function d(p,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,g);let y=0;for(let E=0;E<g;E++)y+=v[E];i.update(y,s,1)}function m(p,v,g,S){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)h(p[E],v[E],S[E]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,v,0,S,0,g);let E=0;for(let T=0;T<g;T++)E+=v[T]*S[T];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function Bb(o,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==Ci&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const X=I===va&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==vi&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Ii&&!X)}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(ie("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),z=o.getParameter(o.MAX_SAMPLES),B=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:y,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:D,maxVaryings:P,maxFragmentUniforms:N,maxSamples:z,samples:B}}function Hb(o){const e=this;let i=null,s=0,l=!1,c=!1;const h=new ws,d=new ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const y=g.length!==0||S||s!==0||l;return l=S,s=g.length,y},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,S){i=v(g,S,0)},this.setState=function(g,S,y){const E=g.clippingPlanes,T=g.clipIntersection,M=g.clipShadows,_=o.get(g);if(!l||E===null||E.length===0||c&&!M)c?v(null):p();else{const D=c?0:s,P=D*4;let N=_.clippingState||null;m.value=N,N=v(E,S,P,y);for(let z=0;z!==P;++z)N[z]=i[z];_.clippingState=N,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(g,S,y,E){const T=g!==null?g.length:0;let M=null;if(T!==0){if(M=m.value,E!==!0||M===null){const _=y+T*4,D=S.matrixWorldInverse;d.getNormalMatrix(D),(M===null||M.length<_)&&(M=new Float32Array(_));for(let P=0,N=y;P!==T;++P,N+=4)h.copy(g[P]).applyMatrix4(D,d),h.normal.toArray(M,N),M[N+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,M}}function Gb(o){let e=new WeakMap;function i(h,d){return d===td?h.mapping=Ls:d===ed&&(h.mapping=Or),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===td||d===ed)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new gv(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const ts=4,y_=[.125,.215,.35,.446,.526,.582],Ds=20,Vb=256,Vo=new xv,b_=new Me;let Bh=null,Hh=0,Gh=0,Vh=!1;const kb=new tt;class E_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=kb}=c;Bh=this._renderer.getRenderTarget(),Hh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=R_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=A_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Bh,Hh,Gh),this._renderer.xr.enabled=Vh,e.scissorTest=!1,Dr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ls||e.mapping===Or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bh=this._renderer.getRenderTarget(),Hh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:va,format:Ci,colorSpace:zr,depthBuffer:!1},l=T_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=T_(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Xb(c)),this._blurMaterial=qb(c,e,i),this._ggxMaterial=Wb(c,e,i)}return l}_compileMaterial(e){const i=new Un(new Ve,e);this._renderer.compile(i,Vo)}_sceneToCubeUV(e,i,s,l,c){const m=new zn(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,y=g.toneMapping;g.getClearColor(b_),g.toneMapping=Gi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Un(new tl,new Xi({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,M=T.material;let _=!1;const D=e.background;D?D.isColor&&(M.color.copy(D),e.background=null,_=!0):(M.color.copy(b_),_=!0);for(let P=0;P<6;P++){const N=P%3;N===0?(m.up.set(0,p[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[P],c.y,c.z)):N===1?(m.up.set(0,0,p[P]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[P],c.z)):(m.up.set(0,p[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[P]));const z=this._cubeSize;Dr(l,N*z,P>2?z:0,z,z),g.setRenderTarget(l),_&&g.render(T,m),g.render(e,m)}g.toneMapping=y,g.autoClear=S,e.background=D}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Ls||e.mapping===Or;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=R_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=A_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Dr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Vo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-v*v),S=0+p*1.25,y=g*S,{_lodMax:E}=this,T=this._sizeLods[s],M=3*T*(s>E-ts?s-E+ts:0),_=4*(this._cubeSize-T);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=E-i,Dr(c,M,_,3*T,2*T),l.setRenderTarget(c),l.render(d,Vo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Dr(e,M,_,3*T,2*T),l.setRenderTarget(e),l.render(d,Vo)}_blur(e,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",c),this._halfBlur(h,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Re("blur direction must be either latitudinal or longitudinal!");const v=3,g=this._lodMeshes[l];g.material=p;const S=p.uniforms,y=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Ds-1),T=c/E,M=isFinite(c)?1+Math.floor(v*T):Ds;M>Ds&&ie(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ds}`);const _=[];let D=0;for(let I=0;I<Ds;++I){const X=I/T,A=Math.exp(-X*X/2);_.push(A),I===0?D+=A:I<M&&(D+=2*A)}for(let I=0;I<_.length;I++)_[I]=_[I]/D;S.envMap.value=e.texture,S.samples.value=M,S.weights.value=_,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:P}=this;S.dTheta.value=E,S.mipInt.value=P-s;const N=this._sizeLods[l],z=3*N*(l>P-ts?l-P+ts:0),B=4*(this._cubeSize-N);Dr(i,z,B,3*N,2*N),m.setRenderTarget(i),m.render(g,Vo)}}function Xb(o){const e=[],i=[],s=[];let l=o;const c=o-ts+1+y_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);e.push(d);let m=1/d;h>o-ts?m=y_[h-o+ts-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),v=-p,g=1+p,S=[v,v,g,v,g,g,v,v,g,g,v,g],y=6,E=6,T=3,M=2,_=1,D=new Float32Array(T*E*y),P=new Float32Array(M*E*y),N=new Float32Array(_*E*y);for(let B=0;B<y;B++){const I=B%3*2/3-1,X=B>2?0:-1,A=[I,X,0,I+2/3,X,0,I+2/3,X+1,0,I,X,0,I+2/3,X+1,0,I,X+1,0];D.set(A,T*E*B),P.set(S,M*E*B);const U=[B,B,B,B,B,B];N.set(U,_*E*B)}const z=new Ve;z.setAttribute("position",new In(D,T)),z.setAttribute("uv",new In(P,M)),z.setAttribute("faceIndex",new In(N,_)),s.push(new Un(z,null)),l>ts&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function T_(o,e,i){const s=new Vi(o,e,i);return s.texture.mapping=$c,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Dr(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function Wb(o,e,i){return new Wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Vb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:eu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function qb(o,e,i){const s=new Float32Array(Ds),l=new tt(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:eu(),fragmentShader:`

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
		`,blending:ga,depthTest:!1,depthWrite:!1})}function A_(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eu(),fragmentShader:`

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
		`,blending:ga,depthTest:!1,depthWrite:!1})}function R_(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function eu(){return`

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
	`}function Yb(o){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===td||m===ed,v=m===Ls||m===Or;if(p||v){let g=e.get(d);const S=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new E_(o)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const y=d.image;return p&&y&&y.height>0||v&&y&&l(y)?(i===null&&(i=new E_(o)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function jb(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=o.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&jo("WebGLRenderer: "+s+" extension not supported."),l}}}function Zb(o,e,i,s){const l={},c=new WeakMap;function h(g){const S=g.target;S.index!==null&&e.remove(S.index);for(const E in S.attributes)e.remove(S.attributes[E]);S.removeEventListener("dispose",h),delete l[S.id];const y=c.get(S);y&&(e.remove(y),c.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(g,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(g){const S=g.attributes;for(const y in S)e.update(S[y],o.ARRAY_BUFFER)}function p(g){const S=[],y=g.index,E=g.attributes.position;let T=0;if(y!==null){const D=y.array;T=y.version;for(let P=0,N=D.length;P<N;P+=3){const z=D[P+0],B=D[P+1],I=D[P+2];S.push(z,B,B,I,I,z)}}else if(E!==void 0){const D=E.array;T=E.version;for(let P=0,N=D.length/3-1;P<N;P+=3){const z=P+0,B=P+1,I=P+2;S.push(z,B,B,I,I,z)}}else return;const M=new(ov(S)?hv:fv)(S,1);M.version=T;const _=c.get(g);_&&e.remove(_),c.set(g,M)}function v(g){const S=c.get(g);if(S){const y=g.index;y!==null&&S.version<y.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:v}}function Kb(o,e,i){let s;function l(S){s=S}let c,h;function d(S){c=S.type,h=S.bytesPerElement}function m(S,y){o.drawElements(s,y,c,S*h),i.update(y,s,1)}function p(S,y,E){E!==0&&(o.drawElementsInstanced(s,y,c,S*h,E),i.update(y,s,E))}function v(S,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,S,0,E);let M=0;for(let _=0;_<E;_++)M+=y[_];i.update(M,s,1)}function g(S,y,E,T){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<S.length;_++)p(S[_]/h,y[_],T[_]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,S,0,T,0,E);let _=0;for(let D=0;D<E;D++)_+=y[D]*T[D];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function Qb(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:Re("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function Jb(o,e,i){const s=new WeakMap,l=new on;function c(h,d,m){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let S=s.get(d);if(S===void 0||S.count!==g){let U=function(){X.dispose(),s.delete(d),d.removeEventListener("dispose",U)};var y=U;S!==void 0&&S.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let N=0;E===!0&&(N=1),T===!0&&(N=2),M===!0&&(N=3);let z=d.attributes.position.count*N,B=1;z>e.maxTextureSize&&(B=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const I=new Float32Array(z*B*4*g),X=new lv(I,z,B,g);X.type=Ii,X.needsUpdate=!0;const A=N*4;for(let H=0;H<g;H++){const K=_[H],nt=D[H],ut=P[H],Y=z*B*4*H;for(let C=0;C<K.count;C++){const L=C*A;E===!0&&(l.fromBufferAttribute(K,C),I[Y+L+0]=l.x,I[Y+L+1]=l.y,I[Y+L+2]=l.z,I[Y+L+3]=0),T===!0&&(l.fromBufferAttribute(nt,C),I[Y+L+4]=l.x,I[Y+L+5]=l.y,I[Y+L+6]=l.z,I[Y+L+7]=0),M===!0&&(l.fromBufferAttribute(ut,C),I[Y+L+8]=l.x,I[Y+L+9]=l.y,I[Y+L+10]=l.z,I[Y+L+11]=ut.itemSize===4?l.w:1)}}S={count:g,texture:X,size:new Ce(z,B)},s.set(d,S),d.addEventListener("dispose",U)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const T=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(o,"morphTargetBaseInfluence",T),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:c}}function $b(o,e,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,v=m.geometry,g=e.get(m,v);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const tE={[q_]:"LINEAR_TONE_MAPPING",[Y_]:"REINHARD_TONE_MAPPING",[j_]:"CINEON_TONE_MAPPING",[Z_]:"ACES_FILMIC_TONE_MAPPING",[Q_]:"AGX_TONE_MAPPING",[J_]:"NEUTRAL_TONE_MAPPING",[K_]:"CUSTOM_TONE_MAPPING"};function eE(o,e,i,s,l){const c=new Vi(e,i,{type:o,depthBuffer:s,stencilBuffer:l}),h=new Vi(e,i,{type:va,depthBuffer:!1,stencilBuffer:!1}),d=new Ve;d.setAttribute("position",new Oe([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Oe([0,2,0,0,2,0],2));const m=new KM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Un(d,m),v=new xv(-1,1,1,-1,0,1);let g=null,S=null,y=!1,E,T=null,M=[],_=!1;this.setSize=function(D,P){c.setSize(D,P),h.setSize(D,P);for(let N=0;N<M.length;N++){const z=M[N];z.setSize&&z.setSize(D,P)}},this.setEffects=function(D){M=D,_=M.length>0&&M[0].isRenderPass===!0;const P=c.width,N=c.height;for(let z=0;z<M.length;z++){const B=M[z];B.setSize&&B.setSize(P,N)}},this.begin=function(D,P){if(y||D.toneMapping===Gi&&M.length===0)return!1;if(T=P,P!==null){const N=P.width,z=P.height;(c.width!==N||c.height!==z)&&this.setSize(N,z)}return _===!1&&D.setRenderTarget(c),E=D.toneMapping,D.toneMapping=Gi,!0},this.hasRenderPass=function(){return _},this.end=function(D,P){D.toneMapping=E,y=!0;let N=c,z=h;for(let B=0;B<M.length;B++){const I=M[B];if(I.enabled!==!1&&(I.render(D,z,N,P),I.needsSwap!==!1)){const X=N;N=z,z=X}}if(g!==D.outputColorSpace||S!==D.toneMapping){g=D.outputColorSpace,S=D.toneMapping,m.defines={},Ee.getTransfer(g)===Ge&&(m.defines.SRGB_TRANSFER="");const B=tE[S];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,D.setRenderTarget(T),D.render(p,v),T=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const Mv=new Gn,Id=new Zo(1,1),yv=new lv,bv=new RM,Ev=new mv,w_=[],C_=[],D_=new Float32Array(16),U_=new Float32Array(9),N_=new Float32Array(4);function Hr(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let c=w_[l];if(c===void 0&&(c=new Float32Array(l),w_[l]=c),e!==0){s.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function gn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function _n(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function nu(o,e){let i=C_[e];i===void 0&&(i=new Int32Array(e),C_[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function nE(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function iE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2fv(this.addr,e),_n(i,e)}}function aE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(gn(i,e))return;o.uniform3fv(this.addr,e),_n(i,e)}}function sE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4fv(this.addr,e),_n(i,e)}}function rE(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,s))return;N_.set(s),o.uniformMatrix2fv(this.addr,!1,N_),_n(i,s)}}function oE(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,s))return;U_.set(s),o.uniformMatrix3fv(this.addr,!1,U_),_n(i,s)}}function lE(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,s))return;D_.set(s),o.uniformMatrix4fv(this.addr,!1,D_),_n(i,s)}}function cE(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function uE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2iv(this.addr,e),_n(i,e)}}function fE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;o.uniform3iv(this.addr,e),_n(i,e)}}function hE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4iv(this.addr,e),_n(i,e)}}function dE(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function pE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2uiv(this.addr,e),_n(i,e)}}function mE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;o.uniform3uiv(this.addr,e),_n(i,e)}}function gE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4uiv(this.addr,e),_n(i,e)}}function _E(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Id.compareFunction=i.isReversedDepthBuffer()?Zd:jd,c=Id):c=Mv,i.setTexture2D(e||c,l)}function vE(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||bv,l)}function xE(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Ev,l)}function SE(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||yv,l)}function ME(o){switch(o){case 5126:return nE;case 35664:return iE;case 35665:return aE;case 35666:return sE;case 35674:return rE;case 35675:return oE;case 35676:return lE;case 5124:case 35670:return cE;case 35667:case 35671:return uE;case 35668:case 35672:return fE;case 35669:case 35673:return hE;case 5125:return dE;case 36294:return pE;case 36295:return mE;case 36296:return gE;case 35678:case 36198:case 36298:case 36306:case 35682:return _E;case 35679:case 36299:case 36307:return vE;case 35680:case 36300:case 36308:case 36293:return xE;case 36289:case 36303:case 36311:case 36292:return SE}}function yE(o,e){o.uniform1fv(this.addr,e)}function bE(o,e){const i=Hr(e,this.size,2);o.uniform2fv(this.addr,i)}function EE(o,e){const i=Hr(e,this.size,3);o.uniform3fv(this.addr,i)}function TE(o,e){const i=Hr(e,this.size,4);o.uniform4fv(this.addr,i)}function AE(o,e){const i=Hr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function RE(o,e){const i=Hr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function wE(o,e){const i=Hr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function CE(o,e){o.uniform1iv(this.addr,e)}function DE(o,e){o.uniform2iv(this.addr,e)}function UE(o,e){o.uniform3iv(this.addr,e)}function NE(o,e){o.uniform4iv(this.addr,e)}function LE(o,e){o.uniform1uiv(this.addr,e)}function OE(o,e){o.uniform2uiv(this.addr,e)}function PE(o,e){o.uniform3uiv(this.addr,e)}function zE(o,e){o.uniform4uiv(this.addr,e)}function FE(o,e,i){const s=this.cache,l=e.length,c=nu(i,l);gn(s,c)||(o.uniform1iv(this.addr,c),_n(s,c));let h;this.type===o.SAMPLER_2D_SHADOW?h=Id:h=Mv;for(let d=0;d!==l;++d)i.setTexture2D(e[d]||h,c[d])}function IE(o,e,i){const s=this.cache,l=e.length,c=nu(i,l);gn(s,c)||(o.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||bv,c[h])}function BE(o,e,i){const s=this.cache,l=e.length,c=nu(i,l);gn(s,c)||(o.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Ev,c[h])}function HE(o,e,i){const s=this.cache,l=e.length,c=nu(i,l);gn(s,c)||(o.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||yv,c[h])}function GE(o){switch(o){case 5126:return yE;case 35664:return bE;case 35665:return EE;case 35666:return TE;case 35674:return AE;case 35675:return RE;case 35676:return wE;case 5124:case 35670:return CE;case 35667:case 35671:return DE;case 35668:case 35672:return UE;case 35669:case 35673:return NE;case 5125:return LE;case 36294:return OE;case 36295:return PE;case 36296:return zE;case 35678:case 36198:case 36298:case 36306:case 35682:return FE;case 35679:case 36299:case 36307:return IE;case 35680:case 36300:case 36308:case 36293:return BE;case 36289:case 36303:case 36311:case 36292:return HE}}class VE{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=ME(i.type)}}class kE{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=GE(i.type)}}class XE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],s)}}}const kh=/(\w+)(\])?(\[|\.)?/g;function L_(o,e){o.seq.push(e),o.map[e.id]=e}function WE(o,e,i){const s=o.name,l=s.length;for(kh.lastIndex=0;;){const c=kh.exec(s),h=kh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){L_(i,p===void 0?new VE(d,o,e):new kE(d,o,e));break}else{let g=i.map[d];g===void 0&&(g=new XE(d),L_(i,g)),i=g}}}class Yc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=e.getActiveUniform(i,h),m=e.getUniformLocation(i,d.name);WE(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function O_(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const qE=37297;let YE=0;function jE(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const P_=new ue;function ZE(o){Ee._getMatrix(P_,Ee.workingColorSpace,o);const e=`mat3( ${P_.elements.map(i=>i.toFixed(4))} )`;switch(Ee.getTransfer(o)){case jc:return[e,"LinearTransferOETF"];case Ge:return[e,"sRGBTransferOETF"];default:return ie("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function z_(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+jE(o.getShaderSource(e),d)}else return c}function KE(o,e){const i=ZE(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const QE={[q_]:"Linear",[Y_]:"Reinhard",[j_]:"Cineon",[Z_]:"ACESFilmic",[Q_]:"AgX",[J_]:"Neutral",[K_]:"Custom"};function JE(o,e){const i=QE[e];return i===void 0?(ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Gc=new tt;function $E(){Ee.getLuminanceCoefficients(Gc);const o=Gc.x.toFixed(4),e=Gc.y.toFixed(4),i=Gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function eT(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function nT(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Wo(o){return o!==""}function F_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function I_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bd(o){return o.replace(iT,sT)}const aT=new Map;function sT(o,e){let i=fe[e];if(i===void 0){const s=aT.get(e);if(s!==void 0)i=fe[s],ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Bd(i)}const rT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function B_(o){return o.replace(rT,oT)}function oT(o,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function H_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const lT={[Vc]:"SHADOWMAP_TYPE_PCF",[Xo]:"SHADOWMAP_TYPE_VSM"};function cT(o){return lT[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const uT={[Ls]:"ENVMAP_TYPE_CUBE",[Or]:"ENVMAP_TYPE_CUBE",[$c]:"ENVMAP_TYPE_CUBE_UV"};function fT(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":uT[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const hT={[Or]:"ENVMAP_MODE_REFRACTION"};function dT(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":hT[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const pT={[W_]:"ENVMAP_BLENDING_MULTIPLY",[oM]:"ENVMAP_BLENDING_MIX",[lM]:"ENVMAP_BLENDING_ADD"};function mT(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":pT[o.combine]||"ENVMAP_BLENDING_NONE"}function gT(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function _T(o,e,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=cT(i),p=fT(i),v=dT(i),g=mT(i),S=gT(i),y=tT(i),E=eT(c),T=l.createProgram();let M,_,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Wo).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Wo).join(`
`),_.length>0&&(_+=`
`)):(M=[H_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),_=[H_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Gi?"#define TONE_MAPPING":"",i.toneMapping!==Gi?fe.tonemapping_pars_fragment:"",i.toneMapping!==Gi?JE("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,KE("linearToOutputTexel",i.outputColorSpace),$E(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Wo).join(`
`)),h=Bd(h),h=F_(h,i),h=I_(h,i),d=Bd(d),d=F_(d,i),d=I_(d,i),h=B_(h),d=B_(d),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===Kg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Kg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const P=D+M+h,N=D+_+d,z=O_(l,l.VERTEX_SHADER,P),B=O_(l,l.FRAGMENT_SHADER,N);l.attachShader(T,z),l.attachShader(T,B),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function I(H){if(o.debug.checkShaderErrors){const K=l.getProgramInfoLog(T)||"",nt=l.getShaderInfoLog(z)||"",ut=l.getShaderInfoLog(B)||"",Y=K.trim(),C=nt.trim(),L=ut.trim();let q=!0,ft=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,T,z,B);else{const pt=z_(l,z,"vertex"),O=z_(l,B,"fragment");Re("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+Y+`
`+pt+`
`+O)}else Y!==""?ie("WebGLProgram: Program Info Log:",Y):(C===""||L==="")&&(ft=!1);ft&&(H.diagnostics={runnable:q,programLog:Y,vertexShader:{log:C,prefix:M},fragmentShader:{log:L,prefix:_}})}l.deleteShader(z),l.deleteShader(B),X=new Yc(l,T),A=nT(l,T)}let X;this.getUniforms=function(){return X===void 0&&I(this),X};let A;this.getAttributes=function(){return A===void 0&&I(this),A};let U=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=l.getProgramParameter(T,qE)),U},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=YE++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=z,this.fragmentShader=B,this}let vT=0;class xT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new ST(e),i.set(e,s)),s}}class ST{constructor(e){this.id=vT++,this.code=e,this.usedTimes=0}}function MT(o,e,i,s,l,c,h){const d=new cv,m=new xT,p=new Set,v=[],g=new Map,S=l.logarithmicDepthBuffer;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return p.add(A),A===0?"uv":`uv${A}`}function M(A,U,H,K,nt){const ut=K.fog,Y=nt.geometry,C=A.isMeshStandardMaterial?K.environment:null,L=(A.isMeshStandardMaterial?i:e).get(A.envMap||C),q=L&&L.mapping===$c?L.image.height:null,ft=E[A.type];A.precision!==null&&(y=l.getMaxPrecision(A.precision),y!==A.precision&&ie("WebGLProgram.getParameters:",A.precision,"not supported, using",y,"instead."));const pt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,O=pt!==void 0?pt.length:0;let et=0;Y.morphAttributes.position!==void 0&&(et=1),Y.morphAttributes.normal!==void 0&&(et=2),Y.morphAttributes.color!==void 0&&(et=3);let ht,Et,Nt,st;if(ft){const be=zi[ft];ht=be.vertexShader,Et=be.fragmentShader}else ht=A.vertexShader,Et=A.fragmentShader,m.update(A),Nt=m.getVertexShaderID(A),st=m.getFragmentShaderID(A);const mt=o.getRenderTarget(),Dt=o.state.buffers.depth.getReversed(),kt=nt.isInstancedMesh===!0,Ht=nt.isBatchedMesh===!0,he=!!A.map,$e=!!A.matcap,ge=!!L,de=!!A.aoMap,De=!!A.lightMap,re=!!A.bumpMap,tn=!!A.normalMap,V=!!A.displacementMap,Ke=!!A.emissiveMap,ye=!!A.metalnessMap,Pe=!!A.roughnessMap,Yt=A.anisotropy>0,F=A.clearcoat>0,b=A.dispersion>0,Z=A.iridescence>0,_t=A.sheen>0,Mt=A.transmission>0,dt=Yt&&!!A.anisotropyMap,Zt=F&&!!A.clearcoatMap,wt=F&&!!A.clearcoatNormalMap,Xt=F&&!!A.clearcoatRoughnessMap,ee=Z&&!!A.iridescenceMap,bt=Z&&!!A.iridescenceThicknessMap,Tt=_t&&!!A.sheenColorMap,It=_t&&!!A.sheenRoughnessMap,zt=!!A.specularMap,Ct=!!A.specularColorMap,le=!!A.specularIntensityMap,W=Mt&&!!A.transmissionMap,Lt=Mt&&!!A.thicknessMap,At=!!A.gradientMap,Ft=!!A.alphaMap,yt=A.alphaTest>0,St=!!A.alphaHash,Rt=!!A.extensions;let ne=Gi;A.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(ne=o.toneMapping);const Fe={shaderID:ft,shaderType:A.type,shaderName:A.name,vertexShader:ht,fragmentShader:Et,defines:A.defines,customVertexShaderID:Nt,customFragmentShaderID:st,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:y,batching:Ht,batchingColor:Ht&&nt._colorsTexture!==null,instancing:kt,instancingColor:kt&&nt.instanceColor!==null,instancingMorph:kt&&nt.morphTexture!==null,outputColorSpace:mt===null?o.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:zr,alphaToCoverage:!!A.alphaToCoverage,map:he,matcap:$e,envMap:ge,envMapMode:ge&&L.mapping,envMapCubeUVHeight:q,aoMap:de,lightMap:De,bumpMap:re,normalMap:tn,displacementMap:V,emissiveMap:Ke,normalMapObjectSpace:tn&&A.normalMapType===hM,normalMapTangentSpace:tn&&A.normalMapType===fM,metalnessMap:ye,roughnessMap:Pe,anisotropy:Yt,anisotropyMap:dt,clearcoat:F,clearcoatMap:Zt,clearcoatNormalMap:wt,clearcoatRoughnessMap:Xt,dispersion:b,iridescence:Z,iridescenceMap:ee,iridescenceThicknessMap:bt,sheen:_t,sheenColorMap:Tt,sheenRoughnessMap:It,specularMap:zt,specularColorMap:Ct,specularIntensityMap:le,transmission:Mt,transmissionMap:W,thicknessMap:Lt,gradientMap:At,opaque:A.transparent===!1&&A.blending===Ur&&A.alphaToCoverage===!1,alphaMap:Ft,alphaTest:yt,alphaHash:St,combine:A.combine,mapUv:he&&T(A.map.channel),aoMapUv:de&&T(A.aoMap.channel),lightMapUv:De&&T(A.lightMap.channel),bumpMapUv:re&&T(A.bumpMap.channel),normalMapUv:tn&&T(A.normalMap.channel),displacementMapUv:V&&T(A.displacementMap.channel),emissiveMapUv:Ke&&T(A.emissiveMap.channel),metalnessMapUv:ye&&T(A.metalnessMap.channel),roughnessMapUv:Pe&&T(A.roughnessMap.channel),anisotropyMapUv:dt&&T(A.anisotropyMap.channel),clearcoatMapUv:Zt&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:wt&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:It&&T(A.sheenRoughnessMap.channel),specularMapUv:zt&&T(A.specularMap.channel),specularColorMapUv:Ct&&T(A.specularColorMap.channel),specularIntensityMapUv:le&&T(A.specularIntensityMap.channel),transmissionMapUv:W&&T(A.transmissionMap.channel),thicknessMapUv:Lt&&T(A.thicknessMap.channel),alphaMapUv:Ft&&T(A.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(tn||Yt),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!Y.attributes.uv&&(he||Ft),fog:!!ut,useFog:A.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Dt,skinning:nt.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:et,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:A.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,decodeVideoTexture:he&&A.map.isVideoTexture===!0&&Ee.getTransfer(A.map.colorSpace)===Ge,decodeVideoTextureEmissive:Ke&&A.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(A.emissiveMap.colorSpace)===Ge,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Fi,flipSided:A.side===Kn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Rt&&A.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&A.extensions.multiDraw===!0||Ht)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Fe.vertexUv1s=p.has(1),Fe.vertexUv2s=p.has(2),Fe.vertexUv3s=p.has(3),p.clear(),Fe}function _(A){const U=[];if(A.shaderID?U.push(A.shaderID):(U.push(A.customVertexShaderID),U.push(A.customFragmentShaderID)),A.defines!==void 0)for(const H in A.defines)U.push(H),U.push(A.defines[H]);return A.isRawShaderMaterial===!1&&(D(U,A),P(U,A),U.push(o.outputColorSpace)),U.push(A.customProgramCacheKey),U.join()}function D(A,U){A.push(U.precision),A.push(U.outputColorSpace),A.push(U.envMapMode),A.push(U.envMapCubeUVHeight),A.push(U.mapUv),A.push(U.alphaMapUv),A.push(U.lightMapUv),A.push(U.aoMapUv),A.push(U.bumpMapUv),A.push(U.normalMapUv),A.push(U.displacementMapUv),A.push(U.emissiveMapUv),A.push(U.metalnessMapUv),A.push(U.roughnessMapUv),A.push(U.anisotropyMapUv),A.push(U.clearcoatMapUv),A.push(U.clearcoatNormalMapUv),A.push(U.clearcoatRoughnessMapUv),A.push(U.iridescenceMapUv),A.push(U.iridescenceThicknessMapUv),A.push(U.sheenColorMapUv),A.push(U.sheenRoughnessMapUv),A.push(U.specularMapUv),A.push(U.specularColorMapUv),A.push(U.specularIntensityMapUv),A.push(U.transmissionMapUv),A.push(U.thicknessMapUv),A.push(U.combine),A.push(U.fogExp2),A.push(U.sizeAttenuation),A.push(U.morphTargetsCount),A.push(U.morphAttributeCount),A.push(U.numDirLights),A.push(U.numPointLights),A.push(U.numSpotLights),A.push(U.numSpotLightMaps),A.push(U.numHemiLights),A.push(U.numRectAreaLights),A.push(U.numDirLightShadows),A.push(U.numPointLightShadows),A.push(U.numSpotLightShadows),A.push(U.numSpotLightShadowsWithMaps),A.push(U.numLightProbes),A.push(U.shadowMapType),A.push(U.toneMapping),A.push(U.numClippingPlanes),A.push(U.numClipIntersection),A.push(U.depthPacking)}function P(A,U){d.disableAll(),U.instancing&&d.enable(0),U.instancingColor&&d.enable(1),U.instancingMorph&&d.enable(2),U.matcap&&d.enable(3),U.envMap&&d.enable(4),U.normalMapObjectSpace&&d.enable(5),U.normalMapTangentSpace&&d.enable(6),U.clearcoat&&d.enable(7),U.iridescence&&d.enable(8),U.alphaTest&&d.enable(9),U.vertexColors&&d.enable(10),U.vertexAlphas&&d.enable(11),U.vertexUv1s&&d.enable(12),U.vertexUv2s&&d.enable(13),U.vertexUv3s&&d.enable(14),U.vertexTangents&&d.enable(15),U.anisotropy&&d.enable(16),U.alphaHash&&d.enable(17),U.batching&&d.enable(18),U.dispersion&&d.enable(19),U.batchingColor&&d.enable(20),U.gradientMap&&d.enable(21),A.push(d.mask),d.disableAll(),U.fog&&d.enable(0),U.useFog&&d.enable(1),U.flatShading&&d.enable(2),U.logarithmicDepthBuffer&&d.enable(3),U.reversedDepthBuffer&&d.enable(4),U.skinning&&d.enable(5),U.morphTargets&&d.enable(6),U.morphNormals&&d.enable(7),U.morphColors&&d.enable(8),U.premultipliedAlpha&&d.enable(9),U.shadowMapEnabled&&d.enable(10),U.doubleSided&&d.enable(11),U.flipSided&&d.enable(12),U.useDepthPacking&&d.enable(13),U.dithering&&d.enable(14),U.transmission&&d.enable(15),U.sheen&&d.enable(16),U.opaque&&d.enable(17),U.pointsUvs&&d.enable(18),U.decodeVideoTexture&&d.enable(19),U.decodeVideoTextureEmissive&&d.enable(20),U.alphaToCoverage&&d.enable(21),A.push(d.mask)}function N(A){const U=E[A.type];let H;if(U){const K=zi[U];H=HM.clone(K.uniforms)}else H=A.uniforms;return H}function z(A,U){let H=g.get(U);return H!==void 0?++H.usedTimes:(H=new _T(o,U,A,c),v.push(H),g.set(U,H)),H}function B(A){if(--A.usedTimes===0){const U=v.indexOf(A);v[U]=v[v.length-1],v.pop(),g.delete(A.cacheKey),A.destroy()}}function I(A){m.remove(A)}function X(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:N,acquireProgram:z,releaseProgram:B,releaseShaderCache:I,programs:v,dispose:X}}function yT(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function bT(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function G_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function V_(){const o=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function h(g,S,y,E,T,M){let _=o[e];return _===void 0?(_={id:g.id,object:g,geometry:S,material:y,groupOrder:E,renderOrder:g.renderOrder,z:T,group:M},o[e]=_):(_.id=g.id,_.object=g,_.geometry=S,_.material=y,_.groupOrder=E,_.renderOrder=g.renderOrder,_.z=T,_.group=M),e++,_}function d(g,S,y,E,T,M){const _=h(g,S,y,E,T,M);y.transmission>0?s.push(_):y.transparent===!0?l.push(_):i.push(_)}function m(g,S,y,E,T,M){const _=h(g,S,y,E,T,M);y.transmission>0?s.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,S){i.length>1&&i.sort(g||bT),s.length>1&&s.sort(S||G_),l.length>1&&l.sort(S||G_)}function v(){for(let g=e,S=o.length;g<S;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:v,sort:p}}function ET(){let o=new WeakMap;function e(s,l){const c=o.get(s);let h;return c===void 0?(h=new V_,o.set(s,[h])):l>=c.length?(h=new V_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function TT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new tt,color:new Me};break;case"SpotLight":i={position:new tt,direction:new tt,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new tt,color:new Me,distance:0,decay:0};break;case"HemisphereLight":i={direction:new tt,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":i={color:new Me,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return o[e.id]=i,i}}}function AT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let RT=0;function wT(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function CT(o){const e=new TT,i=AT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new tt);const l=new tt,c=new an,h=new an;function d(p){let v=0,g=0,S=0;for(let A=0;A<9;A++)s.probe[A].set(0,0,0);let y=0,E=0,T=0,M=0,_=0,D=0,P=0,N=0,z=0,B=0,I=0;p.sort(wT);for(let A=0,U=p.length;A<U;A++){const H=p[A],K=H.color,nt=H.intensity,ut=H.distance;let Y=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Pr?Y=H.shadow.map.texture:Y=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=K.r*nt,g+=K.g*nt,S+=K.b*nt;else if(H.isLightProbe){for(let C=0;C<9;C++)s.probe[C].addScaledVector(H.sh.coefficients[C],nt);I++}else if(H.isDirectionalLight){const C=e.get(H);if(C.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const L=H.shadow,q=i.get(H);q.shadowIntensity=L.intensity,q.shadowBias=L.bias,q.shadowNormalBias=L.normalBias,q.shadowRadius=L.radius,q.shadowMapSize=L.mapSize,s.directionalShadow[y]=q,s.directionalShadowMap[y]=Y,s.directionalShadowMatrix[y]=H.shadow.matrix,D++}s.directional[y]=C,y++}else if(H.isSpotLight){const C=e.get(H);C.position.setFromMatrixPosition(H.matrixWorld),C.color.copy(K).multiplyScalar(nt),C.distance=ut,C.coneCos=Math.cos(H.angle),C.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),C.decay=H.decay,s.spot[T]=C;const L=H.shadow;if(H.map&&(s.spotLightMap[z]=H.map,z++,L.updateMatrices(H),H.castShadow&&B++),s.spotLightMatrix[T]=L.matrix,H.castShadow){const q=i.get(H);q.shadowIntensity=L.intensity,q.shadowBias=L.bias,q.shadowNormalBias=L.normalBias,q.shadowRadius=L.radius,q.shadowMapSize=L.mapSize,s.spotShadow[T]=q,s.spotShadowMap[T]=Y,N++}T++}else if(H.isRectAreaLight){const C=e.get(H);C.color.copy(K).multiplyScalar(nt),C.halfWidth.set(H.width*.5,0,0),C.halfHeight.set(0,H.height*.5,0),s.rectArea[M]=C,M++}else if(H.isPointLight){const C=e.get(H);if(C.color.copy(H.color).multiplyScalar(H.intensity),C.distance=H.distance,C.decay=H.decay,H.castShadow){const L=H.shadow,q=i.get(H);q.shadowIntensity=L.intensity,q.shadowBias=L.bias,q.shadowNormalBias=L.normalBias,q.shadowRadius=L.radius,q.shadowMapSize=L.mapSize,q.shadowCameraNear=L.camera.near,q.shadowCameraFar=L.camera.far,s.pointShadow[E]=q,s.pointShadowMap[E]=Y,s.pointShadowMatrix[E]=H.shadow.matrix,P++}s.point[E]=C,E++}else if(H.isHemisphereLight){const C=e.get(H);C.skyColor.copy(H.color).multiplyScalar(nt),C.groundColor.copy(H.groundColor).multiplyScalar(nt),s.hemi[_]=C,_++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pt.LTC_FLOAT_1,s.rectAreaLTC2=Pt.LTC_FLOAT_2):(s.rectAreaLTC1=Pt.LTC_HALF_1,s.rectAreaLTC2=Pt.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=S;const X=s.hash;(X.directionalLength!==y||X.pointLength!==E||X.spotLength!==T||X.rectAreaLength!==M||X.hemiLength!==_||X.numDirectionalShadows!==D||X.numPointShadows!==P||X.numSpotShadows!==N||X.numSpotMaps!==z||X.numLightProbes!==I)&&(s.directional.length=y,s.spot.length=T,s.rectArea.length=M,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=N+z-B,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=I,X.directionalLength=y,X.pointLength=E,X.spotLength=T,X.rectAreaLength=M,X.hemiLength=_,X.numDirectionalShadows=D,X.numPointShadows=P,X.numSpotShadows=N,X.numSpotMaps=z,X.numLightProbes=I,s.version=RT++)}function m(p,v){let g=0,S=0,y=0,E=0,T=0;const M=v.matrixWorldInverse;for(let _=0,D=p.length;_<D;_++){const P=p[_];if(P.isDirectionalLight){const N=s.directional[g];N.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),g++}else if(P.isSpotLight){const N=s.spot[y];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(M),N.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),y++}else if(P.isRectAreaLight){const N=s.rectArea[E];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(M),h.identity(),c.copy(P.matrixWorld),c.premultiply(M),h.extractRotation(c),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),N.halfWidth.applyMatrix4(h),N.halfHeight.applyMatrix4(h),E++}else if(P.isPointLight){const N=s.point[S];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(M),S++}else if(P.isHemisphereLight){const N=s.hemi[T];N.direction.setFromMatrixPosition(P.matrixWorld),N.direction.transformDirection(M),T++}}}return{setup:d,setupView:m,state:s}}function k_(o){const e=new CT(o),i=[],s=[];function l(v){p.camera=v,i.length=0,s.length=0}function c(v){i.push(v)}function h(v){s.push(v)}function d(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function DT(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new k_(o),e.set(l,[d])):c>=h.length?(d=new k_(o),h.push(d)):d=h[c],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const UT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,LT=[new tt(1,0,0),new tt(-1,0,0),new tt(0,1,0),new tt(0,-1,0),new tt(0,0,1),new tt(0,0,-1)],OT=[new tt(0,-1,0),new tt(0,-1,0),new tt(0,0,1),new tt(0,0,-1),new tt(0,-1,0),new tt(0,-1,0)],X_=new an,ko=new tt,Xh=new tt;function PT(o,e,i){let s=new _v;const l=new Ce,c=new Ce,h=new on,d=new QM,m=new JM,p={},v=i.maxTextureSize,g={[es]:Kn,[Kn]:es,[Fi]:Fi},S=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:UT,fragmentShader:NT}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const E=new Ve;E.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Un(E,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vc;let _=this.type;this.render=function(B,I,X){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;B.type===VS&&(ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=Vc);const A=o.getRenderTarget(),U=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),K=o.state;K.setBlending(ga),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const nt=_!==this.type;nt&&I.traverse(function(ut){ut.material&&(Array.isArray(ut.material)?ut.material.forEach(Y=>Y.needsUpdate=!0):ut.material.needsUpdate=!0)});for(let ut=0,Y=B.length;ut<Y;ut++){const C=B[ut],L=C.shadow;if(L===void 0){ie("WebGLShadowMap:",C,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;l.copy(L.mapSize);const q=L.getFrameExtents();if(l.multiply(q),c.copy(L.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/q.x),l.x=c.x*q.x,L.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/q.y),l.y=c.y*q.y,L.mapSize.y=c.y)),L.map===null||nt===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===Xo){if(C.isPointLight){ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new Vi(l.x,l.y,{format:Pr,type:va,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),L.map.texture.name=C.name+".shadowMap",L.map.depthTexture=new Zo(l.x,l.y,Ii),L.map.depthTexture.name=C.name+".shadowMapDepth",L.map.depthTexture.format=xa,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Dn,L.map.depthTexture.magFilter=Dn}else{C.isPointLight?(L.map=new gv(l.x),L.map.depthTexture=new ZM(l.x,ki)):(L.map=new Vi(l.x,l.y),L.map.depthTexture=new Zo(l.x,l.y,ki)),L.map.depthTexture.name=C.name+".shadowMap",L.map.depthTexture.format=xa;const pt=o.state.buffers.depth.getReversed();this.type===Vc?(L.map.depthTexture.compareFunction=pt?Zd:jd,L.map.depthTexture.minFilter=Fn,L.map.depthTexture.magFilter=Fn):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Dn,L.map.depthTexture.magFilter=Dn)}L.camera.updateProjectionMatrix()}const ft=L.map.isWebGLCubeRenderTarget?6:1;for(let pt=0;pt<ft;pt++){if(L.map.isWebGLCubeRenderTarget)o.setRenderTarget(L.map,pt),o.clear();else{pt===0&&(o.setRenderTarget(L.map),o.clear());const O=L.getViewport(pt);h.set(c.x*O.x,c.y*O.y,c.x*O.z,c.y*O.w),K.viewport(h)}if(C.isPointLight){const O=L.camera,et=L.matrix,ht=C.distance||O.far;ht!==O.far&&(O.far=ht,O.updateProjectionMatrix()),ko.setFromMatrixPosition(C.matrixWorld),O.position.copy(ko),Xh.copy(O.position),Xh.add(LT[pt]),O.up.copy(OT[pt]),O.lookAt(Xh),O.updateMatrixWorld(),et.makeTranslation(-ko.x,-ko.y,-ko.z),X_.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),L._frustum.setFromProjectionMatrix(X_,O.coordinateSystem,O.reversedDepth)}else L.updateMatrices(C);s=L.getFrustum(),N(I,X,L.camera,C,this.type)}L.isPointLightShadow!==!0&&this.type===Xo&&D(L,X),L.needsUpdate=!1}_=this.type,M.needsUpdate=!1,o.setRenderTarget(A,U,H)};function D(B,I){const X=e.update(T);S.defines.VSM_SAMPLES!==B.blurSamples&&(S.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Vi(l.x,l.y,{format:Pr,type:va})),S.uniforms.shadow_pass.value=B.map.depthTexture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(I,null,X,S,T,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(I,null,X,y,T,null)}function P(B,I,X,A){let U=null;const H=X.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(H!==void 0)U=H;else if(U=X.isPointLight===!0?m:d,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const K=U.uuid,nt=I.uuid;let ut=p[K];ut===void 0&&(ut={},p[K]=ut);let Y=ut[nt];Y===void 0&&(Y=U.clone(),ut[nt]=Y,I.addEventListener("dispose",z)),U=Y}if(U.visible=I.visible,U.wireframe=I.wireframe,A===Xo?U.side=I.shadowSide!==null?I.shadowSide:I.side:U.side=I.shadowSide!==null?I.shadowSide:g[I.side],U.alphaMap=I.alphaMap,U.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,U.map=I.map,U.clipShadows=I.clipShadows,U.clippingPlanes=I.clippingPlanes,U.clipIntersection=I.clipIntersection,U.displacementMap=I.displacementMap,U.displacementScale=I.displacementScale,U.displacementBias=I.displacementBias,U.wireframeLinewidth=I.wireframeLinewidth,U.linewidth=I.linewidth,X.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const K=o.properties.get(U);K.light=X}return U}function N(B,I,X,A,U){if(B.visible===!1)return;if(B.layers.test(I.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&U===Xo)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,B.matrixWorld);const nt=e.update(B),ut=B.material;if(Array.isArray(ut)){const Y=nt.groups;for(let C=0,L=Y.length;C<L;C++){const q=Y[C],ft=ut[q.materialIndex];if(ft&&ft.visible){const pt=P(B,ft,A,U);B.onBeforeShadow(o,B,I,X,nt,pt,q),o.renderBufferDirect(X,null,nt,pt,B,q),B.onAfterShadow(o,B,I,X,nt,pt,q)}}}else if(ut.visible){const Y=P(B,ut,A,U);B.onBeforeShadow(o,B,I,X,nt,Y,null),o.renderBufferDirect(X,null,nt,Y,B,null),B.onAfterShadow(o,B,I,X,nt,Y,null)}}const K=B.children;for(let nt=0,ut=K.length;nt<ut;nt++)N(K[nt],I,X,A,U)}function z(B){B.target.removeEventListener("dispose",z);for(const X in p){const A=p[X],U=B.target.uuid;U in A&&(A[U].dispose(),delete A[U])}}}const zT={[Yh]:jh,[Zh]:Jh,[Kh]:$h,[Lr]:Qh,[jh]:Yh,[Jh]:Zh,[$h]:Kh,[Qh]:Lr};function FT(o,e){function i(){let W=!1;const Lt=new on;let At=null;const Ft=new on(0,0,0,0);return{setMask:function(yt){At!==yt&&!W&&(o.colorMask(yt,yt,yt,yt),At=yt)},setLocked:function(yt){W=yt},setClear:function(yt,St,Rt,ne,Fe){Fe===!0&&(yt*=ne,St*=ne,Rt*=ne),Lt.set(yt,St,Rt,ne),Ft.equals(Lt)===!1&&(o.clearColor(yt,St,Rt,ne),Ft.copy(Lt))},reset:function(){W=!1,At=null,Ft.set(-1,0,0,0)}}}function s(){let W=!1,Lt=!1,At=null,Ft=null,yt=null;return{setReversed:function(St){if(Lt!==St){const Rt=e.get("EXT_clip_control");St?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),Lt=St;const ne=yt;yt=null,this.setClear(ne)}},getReversed:function(){return Lt},setTest:function(St){St?mt(o.DEPTH_TEST):Dt(o.DEPTH_TEST)},setMask:function(St){At!==St&&!W&&(o.depthMask(St),At=St)},setFunc:function(St){if(Lt&&(St=zT[St]),Ft!==St){switch(St){case Yh:o.depthFunc(o.NEVER);break;case jh:o.depthFunc(o.ALWAYS);break;case Zh:o.depthFunc(o.LESS);break;case Lr:o.depthFunc(o.LEQUAL);break;case Kh:o.depthFunc(o.EQUAL);break;case Qh:o.depthFunc(o.GEQUAL);break;case Jh:o.depthFunc(o.GREATER);break;case $h:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ft=St}},setLocked:function(St){W=St},setClear:function(St){yt!==St&&(Lt&&(St=1-St),o.clearDepth(St),yt=St)},reset:function(){W=!1,At=null,Ft=null,yt=null,Lt=!1}}}function l(){let W=!1,Lt=null,At=null,Ft=null,yt=null,St=null,Rt=null,ne=null,Fe=null;return{setTest:function(be){W||(be?mt(o.STENCIL_TEST):Dt(o.STENCIL_TEST))},setMask:function(be){Lt!==be&&!W&&(o.stencilMask(be),Lt=be)},setFunc:function(be,Nn,xi){(At!==be||Ft!==Nn||yt!==xi)&&(o.stencilFunc(be,Nn,xi),At=be,Ft=Nn,yt=xi)},setOp:function(be,Nn,xi){(St!==be||Rt!==Nn||ne!==xi)&&(o.stencilOp(be,Nn,xi),St=be,Rt=Nn,ne=xi)},setLocked:function(be){W=be},setClear:function(be){Fe!==be&&(o.clearStencil(be),Fe=be)},reset:function(){W=!1,Lt=null,At=null,Ft=null,yt=null,St=null,Rt=null,ne=null,Fe=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let v={},g={},S=new WeakMap,y=[],E=null,T=!1,M=null,_=null,D=null,P=null,N=null,z=null,B=null,I=new Me(0,0,0),X=0,A=!1,U=null,H=null,K=null,nt=null,ut=null;const Y=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let C=!1,L=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(q)[1]),C=L>=1):q.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),C=L>=2);let ft=null,pt={};const O=o.getParameter(o.SCISSOR_BOX),et=o.getParameter(o.VIEWPORT),ht=new on().fromArray(O),Et=new on().fromArray(et);function Nt(W,Lt,At,Ft){const yt=new Uint8Array(4),St=o.createTexture();o.bindTexture(W,St),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Rt=0;Rt<At;Rt++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Lt,0,o.RGBA,1,1,Ft,0,o.RGBA,o.UNSIGNED_BYTE,yt):o.texImage2D(Lt+Rt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,yt);return St}const st={};st[o.TEXTURE_2D]=Nt(o.TEXTURE_2D,o.TEXTURE_2D,1),st[o.TEXTURE_CUBE_MAP]=Nt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[o.TEXTURE_2D_ARRAY]=Nt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),st[o.TEXTURE_3D]=Nt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),mt(o.DEPTH_TEST),h.setFunc(Lr),re(!1),tn(Xg),mt(o.CULL_FACE),de(ga);function mt(W){v[W]!==!0&&(o.enable(W),v[W]=!0)}function Dt(W){v[W]!==!1&&(o.disable(W),v[W]=!1)}function kt(W,Lt){return g[W]!==Lt?(o.bindFramebuffer(W,Lt),g[W]=Lt,W===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Lt),W===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Ht(W,Lt){let At=y,Ft=!1;if(W){At=S.get(Lt),At===void 0&&(At=[],S.set(Lt,At));const yt=W.textures;if(At.length!==yt.length||At[0]!==o.COLOR_ATTACHMENT0){for(let St=0,Rt=yt.length;St<Rt;St++)At[St]=o.COLOR_ATTACHMENT0+St;At.length=yt.length,Ft=!0}}else At[0]!==o.BACK&&(At[0]=o.BACK,Ft=!0);Ft&&o.drawBuffers(At)}function he(W){return E!==W?(o.useProgram(W),E=W,!0):!1}const $e={[Cs]:o.FUNC_ADD,[XS]:o.FUNC_SUBTRACT,[WS]:o.FUNC_REVERSE_SUBTRACT};$e[qS]=o.MIN,$e[YS]=o.MAX;const ge={[jS]:o.ZERO,[ZS]:o.ONE,[KS]:o.SRC_COLOR,[Wh]:o.SRC_ALPHA,[nM]:o.SRC_ALPHA_SATURATE,[tM]:o.DST_COLOR,[JS]:o.DST_ALPHA,[QS]:o.ONE_MINUS_SRC_COLOR,[qh]:o.ONE_MINUS_SRC_ALPHA,[eM]:o.ONE_MINUS_DST_COLOR,[$S]:o.ONE_MINUS_DST_ALPHA,[iM]:o.CONSTANT_COLOR,[aM]:o.ONE_MINUS_CONSTANT_COLOR,[sM]:o.CONSTANT_ALPHA,[rM]:o.ONE_MINUS_CONSTANT_ALPHA};function de(W,Lt,At,Ft,yt,St,Rt,ne,Fe,be){if(W===ga){T===!0&&(Dt(o.BLEND),T=!1);return}if(T===!1&&(mt(o.BLEND),T=!0),W!==kS){if(W!==M||be!==A){if((_!==Cs||N!==Cs)&&(o.blendEquation(o.FUNC_ADD),_=Cs,N=Cs),be)switch(W){case Ur:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Wg:o.blendFunc(o.ONE,o.ONE);break;case qg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Yg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Re("WebGLState: Invalid blending: ",W);break}else switch(W){case Ur:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Wg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case qg:Re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yg:Re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Re("WebGLState: Invalid blending: ",W);break}D=null,P=null,z=null,B=null,I.set(0,0,0),X=0,M=W,A=be}return}yt=yt||Lt,St=St||At,Rt=Rt||Ft,(Lt!==_||yt!==N)&&(o.blendEquationSeparate($e[Lt],$e[yt]),_=Lt,N=yt),(At!==D||Ft!==P||St!==z||Rt!==B)&&(o.blendFuncSeparate(ge[At],ge[Ft],ge[St],ge[Rt]),D=At,P=Ft,z=St,B=Rt),(ne.equals(I)===!1||Fe!==X)&&(o.blendColor(ne.r,ne.g,ne.b,Fe),I.copy(ne),X=Fe),M=W,A=!1}function De(W,Lt){W.side===Fi?Dt(o.CULL_FACE):mt(o.CULL_FACE);let At=W.side===Kn;Lt&&(At=!At),re(At),W.blending===Ur&&W.transparent===!1?de(ga):de(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ft=W.stencilWrite;d.setTest(Ft),Ft&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ke(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?mt(o.SAMPLE_ALPHA_TO_COVERAGE):Dt(o.SAMPLE_ALPHA_TO_COVERAGE)}function re(W){U!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),U=W)}function tn(W){W!==HS?(mt(o.CULL_FACE),W!==H&&(W===Xg?o.cullFace(o.BACK):W===GS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Dt(o.CULL_FACE),H=W}function V(W){W!==K&&(C&&o.lineWidth(W),K=W)}function Ke(W,Lt,At){W?(mt(o.POLYGON_OFFSET_FILL),(nt!==Lt||ut!==At)&&(o.polygonOffset(Lt,At),nt=Lt,ut=At)):Dt(o.POLYGON_OFFSET_FILL)}function ye(W){W?mt(o.SCISSOR_TEST):Dt(o.SCISSOR_TEST)}function Pe(W){W===void 0&&(W=o.TEXTURE0+Y-1),ft!==W&&(o.activeTexture(W),ft=W)}function Yt(W,Lt,At){At===void 0&&(ft===null?At=o.TEXTURE0+Y-1:At=ft);let Ft=pt[At];Ft===void 0&&(Ft={type:void 0,texture:void 0},pt[At]=Ft),(Ft.type!==W||Ft.texture!==Lt)&&(ft!==At&&(o.activeTexture(At),ft=At),o.bindTexture(W,Lt||st[W]),Ft.type=W,Ft.texture=Lt)}function F(){const W=pt[ft];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(W){Re("WebGLState:",W)}}function Z(){try{o.compressedTexImage3D(...arguments)}catch(W){Re("WebGLState:",W)}}function _t(){try{o.texSubImage2D(...arguments)}catch(W){Re("WebGLState:",W)}}function Mt(){try{o.texSubImage3D(...arguments)}catch(W){Re("WebGLState:",W)}}function dt(){try{o.compressedTexSubImage2D(...arguments)}catch(W){Re("WebGLState:",W)}}function Zt(){try{o.compressedTexSubImage3D(...arguments)}catch(W){Re("WebGLState:",W)}}function wt(){try{o.texStorage2D(...arguments)}catch(W){Re("WebGLState:",W)}}function Xt(){try{o.texStorage3D(...arguments)}catch(W){Re("WebGLState:",W)}}function ee(){try{o.texImage2D(...arguments)}catch(W){Re("WebGLState:",W)}}function bt(){try{o.texImage3D(...arguments)}catch(W){Re("WebGLState:",W)}}function Tt(W){ht.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),ht.copy(W))}function It(W){Et.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),Et.copy(W))}function zt(W,Lt){let At=p.get(Lt);At===void 0&&(At=new WeakMap,p.set(Lt,At));let Ft=At.get(W);Ft===void 0&&(Ft=o.getUniformBlockIndex(Lt,W.name),At.set(W,Ft))}function Ct(W,Lt){const Ft=p.get(Lt).get(W);m.get(Lt)!==Ft&&(o.uniformBlockBinding(Lt,Ft,W.__bindingPointIndex),m.set(Lt,Ft))}function le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},ft=null,pt={},g={},S=new WeakMap,y=[],E=null,T=!1,M=null,_=null,D=null,P=null,N=null,z=null,B=null,I=new Me(0,0,0),X=0,A=!1,U=null,H=null,K=null,nt=null,ut=null,ht.set(0,0,o.canvas.width,o.canvas.height),Et.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:mt,disable:Dt,bindFramebuffer:kt,drawBuffers:Ht,useProgram:he,setBlending:de,setMaterial:De,setFlipSided:re,setCullFace:tn,setLineWidth:V,setPolygonOffset:Ke,setScissorTest:ye,activeTexture:Pe,bindTexture:Yt,unbindTexture:F,compressedTexImage2D:b,compressedTexImage3D:Z,texImage2D:ee,texImage3D:bt,updateUBOMapping:zt,uniformBlockBinding:Ct,texStorage2D:wt,texStorage3D:Xt,texSubImage2D:_t,texSubImage3D:Mt,compressedTexSubImage2D:dt,compressedTexSubImage3D:Zt,scissor:Tt,viewport:It,reset:le}}function IT(o,e,i,s,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ce,v=new WeakMap;let g;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(F,b){return y?new OffscreenCanvas(F,b):Kc("canvas")}function T(F,b,Z){let _t=1;const Mt=Yt(F);if((Mt.width>Z||Mt.height>Z)&&(_t=Z/Math.max(Mt.width,Mt.height)),_t<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const dt=Math.floor(_t*Mt.width),Zt=Math.floor(_t*Mt.height);g===void 0&&(g=E(dt,Zt));const wt=b?E(dt,Zt):g;return wt.width=dt,wt.height=Zt,wt.getContext("2d").drawImage(F,0,0,dt,Zt),ie("WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+dt+"x"+Zt+")."),wt}else return"data"in F&&ie("WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),F;return F}function M(F){return F.generateMipmaps}function _(F){o.generateMipmap(F)}function D(F){return F.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?o.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(F,b,Z,_t,Mt=!1){if(F!==null){if(o[F]!==void 0)return o[F];ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let dt=b;if(b===o.RED&&(Z===o.FLOAT&&(dt=o.R32F),Z===o.HALF_FLOAT&&(dt=o.R16F),Z===o.UNSIGNED_BYTE&&(dt=o.R8)),b===o.RED_INTEGER&&(Z===o.UNSIGNED_BYTE&&(dt=o.R8UI),Z===o.UNSIGNED_SHORT&&(dt=o.R16UI),Z===o.UNSIGNED_INT&&(dt=o.R32UI),Z===o.BYTE&&(dt=o.R8I),Z===o.SHORT&&(dt=o.R16I),Z===o.INT&&(dt=o.R32I)),b===o.RG&&(Z===o.FLOAT&&(dt=o.RG32F),Z===o.HALF_FLOAT&&(dt=o.RG16F),Z===o.UNSIGNED_BYTE&&(dt=o.RG8)),b===o.RG_INTEGER&&(Z===o.UNSIGNED_BYTE&&(dt=o.RG8UI),Z===o.UNSIGNED_SHORT&&(dt=o.RG16UI),Z===o.UNSIGNED_INT&&(dt=o.RG32UI),Z===o.BYTE&&(dt=o.RG8I),Z===o.SHORT&&(dt=o.RG16I),Z===o.INT&&(dt=o.RG32I)),b===o.RGB_INTEGER&&(Z===o.UNSIGNED_BYTE&&(dt=o.RGB8UI),Z===o.UNSIGNED_SHORT&&(dt=o.RGB16UI),Z===o.UNSIGNED_INT&&(dt=o.RGB32UI),Z===o.BYTE&&(dt=o.RGB8I),Z===o.SHORT&&(dt=o.RGB16I),Z===o.INT&&(dt=o.RGB32I)),b===o.RGBA_INTEGER&&(Z===o.UNSIGNED_BYTE&&(dt=o.RGBA8UI),Z===o.UNSIGNED_SHORT&&(dt=o.RGBA16UI),Z===o.UNSIGNED_INT&&(dt=o.RGBA32UI),Z===o.BYTE&&(dt=o.RGBA8I),Z===o.SHORT&&(dt=o.RGBA16I),Z===o.INT&&(dt=o.RGBA32I)),b===o.RGB&&(Z===o.UNSIGNED_INT_5_9_9_9_REV&&(dt=o.RGB9_E5),Z===o.UNSIGNED_INT_10F_11F_11F_REV&&(dt=o.R11F_G11F_B10F)),b===o.RGBA){const Zt=Mt?jc:Ee.getTransfer(_t);Z===o.FLOAT&&(dt=o.RGBA32F),Z===o.HALF_FLOAT&&(dt=o.RGBA16F),Z===o.UNSIGNED_BYTE&&(dt=Zt===Ge?o.SRGB8_ALPHA8:o.RGBA8),Z===o.UNSIGNED_SHORT_4_4_4_4&&(dt=o.RGBA4),Z===o.UNSIGNED_SHORT_5_5_5_1&&(dt=o.RGB5_A1)}return(dt===o.R16F||dt===o.R32F||dt===o.RG16F||dt===o.RG32F||dt===o.RGBA16F||dt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),dt}function N(F,b){let Z;return F?b===null||b===ki||b===Yo?Z=o.DEPTH24_STENCIL8:b===Ii?Z=o.DEPTH32F_STENCIL8:b===qo&&(Z=o.DEPTH24_STENCIL8,ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ki||b===Yo?Z=o.DEPTH_COMPONENT24:b===Ii?Z=o.DEPTH_COMPONENT32F:b===qo&&(Z=o.DEPTH_COMPONENT16),Z}function z(F,b){return M(F)===!0||F.isFramebufferTexture&&F.minFilter!==Dn&&F.minFilter!==Fn?Math.log2(Math.max(b.width,b.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?b.mipmaps.length:1}function B(F){const b=F.target;b.removeEventListener("dispose",B),X(b),b.isVideoTexture&&v.delete(b)}function I(F){const b=F.target;b.removeEventListener("dispose",I),U(b)}function X(F){const b=s.get(F);if(b.__webglInit===void 0)return;const Z=F.source,_t=S.get(Z);if(_t){const Mt=_t[b.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&A(F),Object.keys(_t).length===0&&S.delete(Z)}s.remove(F)}function A(F){const b=s.get(F);o.deleteTexture(b.__webglTexture);const Z=F.source,_t=S.get(Z);delete _t[b.__cacheKey],h.memory.textures--}function U(F){const b=s.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),s.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(b.__webglFramebuffer[_t]))for(let Mt=0;Mt<b.__webglFramebuffer[_t].length;Mt++)o.deleteFramebuffer(b.__webglFramebuffer[_t][Mt]);else o.deleteFramebuffer(b.__webglFramebuffer[_t]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[_t])}else{if(Array.isArray(b.__webglFramebuffer))for(let _t=0;_t<b.__webglFramebuffer.length;_t++)o.deleteFramebuffer(b.__webglFramebuffer[_t]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let _t=0;_t<b.__webglColorRenderbuffer.length;_t++)b.__webglColorRenderbuffer[_t]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[_t]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Z=F.textures;for(let _t=0,Mt=Z.length;_t<Mt;_t++){const dt=s.get(Z[_t]);dt.__webglTexture&&(o.deleteTexture(dt.__webglTexture),h.memory.textures--),s.remove(Z[_t])}s.remove(F)}let H=0;function K(){H=0}function nt(){const F=H;return F>=l.maxTextures&&ie("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+l.maxTextures),H+=1,F}function ut(F){const b=[];return b.push(F.wrapS),b.push(F.wrapT),b.push(F.wrapR||0),b.push(F.magFilter),b.push(F.minFilter),b.push(F.anisotropy),b.push(F.internalFormat),b.push(F.format),b.push(F.type),b.push(F.generateMipmaps),b.push(F.premultiplyAlpha),b.push(F.flipY),b.push(F.unpackAlignment),b.push(F.colorSpace),b.join()}function Y(F,b){const Z=s.get(F);if(F.isVideoTexture&&ye(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&Z.__version!==F.version){const _t=F.image;if(_t===null)ie("WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)ie("WebGLRenderer: Texture marked for update but image is incomplete");else{st(Z,F,b);return}}else F.isExternalTexture&&(Z.__webglTexture=F.sourceTexture?F.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,Z.__webglTexture,o.TEXTURE0+b)}function C(F,b){const Z=s.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Z.__version!==F.version){st(Z,F,b);return}else F.isExternalTexture&&(Z.__webglTexture=F.sourceTexture?F.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,Z.__webglTexture,o.TEXTURE0+b)}function L(F,b){const Z=s.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Z.__version!==F.version){st(Z,F,b);return}i.bindTexture(o.TEXTURE_3D,Z.__webglTexture,o.TEXTURE0+b)}function q(F,b){const Z=s.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&Z.__version!==F.version){mt(Z,F,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,Z.__webglTexture,o.TEXTURE0+b)}const ft={[nd]:o.REPEAT,[ma]:o.CLAMP_TO_EDGE,[id]:o.MIRRORED_REPEAT},pt={[Dn]:o.NEAREST,[cM]:o.NEAREST_MIPMAP_NEAREST,[vc]:o.NEAREST_MIPMAP_LINEAR,[Fn]:o.LINEAR,[dh]:o.LINEAR_MIPMAP_NEAREST,[Us]:o.LINEAR_MIPMAP_LINEAR},O={[dM]:o.NEVER,[vM]:o.ALWAYS,[pM]:o.LESS,[jd]:o.LEQUAL,[mM]:o.EQUAL,[Zd]:o.GEQUAL,[gM]:o.GREATER,[_M]:o.NOTEQUAL};function et(F,b){if(b.type===Ii&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Fn||b.magFilter===dh||b.magFilter===vc||b.magFilter===Us||b.minFilter===Fn||b.minFilter===dh||b.minFilter===vc||b.minFilter===Us)&&ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(F,o.TEXTURE_WRAP_S,ft[b.wrapS]),o.texParameteri(F,o.TEXTURE_WRAP_T,ft[b.wrapT]),(F===o.TEXTURE_3D||F===o.TEXTURE_2D_ARRAY)&&o.texParameteri(F,o.TEXTURE_WRAP_R,ft[b.wrapR]),o.texParameteri(F,o.TEXTURE_MAG_FILTER,pt[b.magFilter]),o.texParameteri(F,o.TEXTURE_MIN_FILTER,pt[b.minFilter]),b.compareFunction&&(o.texParameteri(F,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(F,o.TEXTURE_COMPARE_FUNC,O[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Dn||b.minFilter!==vc&&b.minFilter!==Us||b.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");o.texParameterf(F,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function ht(F,b){let Z=!1;F.__webglInit===void 0&&(F.__webglInit=!0,b.addEventListener("dispose",B));const _t=b.source;let Mt=S.get(_t);Mt===void 0&&(Mt={},S.set(_t,Mt));const dt=ut(b);if(dt!==F.__cacheKey){Mt[dt]===void 0&&(Mt[dt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,Z=!0),Mt[dt].usedTimes++;const Zt=Mt[F.__cacheKey];Zt!==void 0&&(Mt[F.__cacheKey].usedTimes--,Zt.usedTimes===0&&A(b)),F.__cacheKey=dt,F.__webglTexture=Mt[dt].texture}return Z}function Et(F,b,Z){return Math.floor(Math.floor(F/Z)/b)}function Nt(F,b,Z,_t){const dt=F.updateRanges;if(dt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,Z,_t,b.data);else{dt.sort((bt,Tt)=>bt.start-Tt.start);let Zt=0;for(let bt=1;bt<dt.length;bt++){const Tt=dt[Zt],It=dt[bt],zt=Tt.start+Tt.count,Ct=Et(It.start,b.width,4),le=Et(Tt.start,b.width,4);It.start<=zt+1&&Ct===le&&Et(It.start+It.count-1,b.width,4)===Ct?Tt.count=Math.max(Tt.count,It.start+It.count-Tt.start):(++Zt,dt[Zt]=It)}dt.length=Zt+1;const wt=o.getParameter(o.UNPACK_ROW_LENGTH),Xt=o.getParameter(o.UNPACK_SKIP_PIXELS),ee=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let bt=0,Tt=dt.length;bt<Tt;bt++){const It=dt[bt],zt=Math.floor(It.start/4),Ct=Math.ceil(It.count/4),le=zt%b.width,W=Math.floor(zt/b.width),Lt=Ct,At=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,le),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,le,W,Lt,At,Z,_t,b.data)}F.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,wt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Xt),o.pixelStorei(o.UNPACK_SKIP_ROWS,ee)}}function st(F,b,Z){let _t=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(_t=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(_t=o.TEXTURE_3D);const Mt=ht(F,b),dt=b.source;i.bindTexture(_t,F.__webglTexture,o.TEXTURE0+Z);const Zt=s.get(dt);if(dt.version!==Zt.__version||Mt===!0){i.activeTexture(o.TEXTURE0+Z);const wt=Ee.getPrimaries(Ee.workingColorSpace),Xt=b.colorSpace===$a?null:Ee.getPrimaries(b.colorSpace),ee=b.colorSpace===$a||wt===Xt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let bt=T(b.image,!1,l.maxTextureSize);bt=Pe(b,bt);const Tt=c.convert(b.format,b.colorSpace),It=c.convert(b.type);let zt=P(b.internalFormat,Tt,It,b.colorSpace,b.isVideoTexture);et(_t,b);let Ct;const le=b.mipmaps,W=b.isVideoTexture!==!0,Lt=Zt.__version===void 0||Mt===!0,At=dt.dataReady,Ft=z(b,bt);if(b.isDepthTexture)zt=N(b.format===Ns,b.type),Lt&&(W?i.texStorage2D(o.TEXTURE_2D,1,zt,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,zt,bt.width,bt.height,0,Tt,It,null));else if(b.isDataTexture)if(le.length>0){W&&Lt&&i.texStorage2D(o.TEXTURE_2D,Ft,zt,le[0].width,le[0].height);for(let yt=0,St=le.length;yt<St;yt++)Ct=le[yt],W?At&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ct.width,Ct.height,Tt,It,Ct.data):i.texImage2D(o.TEXTURE_2D,yt,zt,Ct.width,Ct.height,0,Tt,It,Ct.data);b.generateMipmaps=!1}else W?(Lt&&i.texStorage2D(o.TEXTURE_2D,Ft,zt,bt.width,bt.height),At&&Nt(b,bt,Tt,It)):i.texImage2D(o.TEXTURE_2D,0,zt,bt.width,bt.height,0,Tt,It,bt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){W&&Lt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ft,zt,le[0].width,le[0].height,bt.depth);for(let yt=0,St=le.length;yt<St;yt++)if(Ct=le[yt],b.format!==Ci)if(Tt!==null)if(W){if(At)if(b.layerUpdates.size>0){const Rt=M_(Ct.width,Ct.height,b.format,b.type);for(const ne of b.layerUpdates){const Fe=Ct.data.subarray(ne*Rt/Ct.data.BYTES_PER_ELEMENT,(ne+1)*Rt/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,ne,Ct.width,Ct.height,1,Tt,Fe)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Ct.width,Ct.height,bt.depth,Tt,Ct.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,yt,zt,Ct.width,Ct.height,bt.depth,0,Ct.data,0,0);else ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?At&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Ct.width,Ct.height,bt.depth,Tt,It,Ct.data):i.texImage3D(o.TEXTURE_2D_ARRAY,yt,zt,Ct.width,Ct.height,bt.depth,0,Tt,It,Ct.data)}else{W&&Lt&&i.texStorage2D(o.TEXTURE_2D,Ft,zt,le[0].width,le[0].height);for(let yt=0,St=le.length;yt<St;yt++)Ct=le[yt],b.format!==Ci?Tt!==null?W?At&&i.compressedTexSubImage2D(o.TEXTURE_2D,yt,0,0,Ct.width,Ct.height,Tt,Ct.data):i.compressedTexImage2D(o.TEXTURE_2D,yt,zt,Ct.width,Ct.height,0,Ct.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?At&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ct.width,Ct.height,Tt,It,Ct.data):i.texImage2D(o.TEXTURE_2D,yt,zt,Ct.width,Ct.height,0,Tt,It,Ct.data)}else if(b.isDataArrayTexture)if(W){if(Lt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ft,zt,bt.width,bt.height,bt.depth),At)if(b.layerUpdates.size>0){const yt=M_(bt.width,bt.height,b.format,b.type);for(const St of b.layerUpdates){const Rt=bt.data.subarray(St*yt/bt.data.BYTES_PER_ELEMENT,(St+1)*yt/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,St,bt.width,bt.height,1,Tt,It,Rt)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Tt,It,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,zt,bt.width,bt.height,bt.depth,0,Tt,It,bt.data);else if(b.isData3DTexture)W?(Lt&&i.texStorage3D(o.TEXTURE_3D,Ft,zt,bt.width,bt.height,bt.depth),At&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Tt,It,bt.data)):i.texImage3D(o.TEXTURE_3D,0,zt,bt.width,bt.height,bt.depth,0,Tt,It,bt.data);else if(b.isFramebufferTexture){if(Lt)if(W)i.texStorage2D(o.TEXTURE_2D,Ft,zt,bt.width,bt.height);else{let yt=bt.width,St=bt.height;for(let Rt=0;Rt<Ft;Rt++)i.texImage2D(o.TEXTURE_2D,Rt,zt,yt,St,0,Tt,It,null),yt>>=1,St>>=1}}else if(le.length>0){if(W&&Lt){const yt=Yt(le[0]);i.texStorage2D(o.TEXTURE_2D,Ft,zt,yt.width,yt.height)}for(let yt=0,St=le.length;yt<St;yt++)Ct=le[yt],W?At&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Tt,It,Ct):i.texImage2D(o.TEXTURE_2D,yt,zt,Tt,It,Ct);b.generateMipmaps=!1}else if(W){if(Lt){const yt=Yt(bt);i.texStorage2D(o.TEXTURE_2D,Ft,zt,yt.width,yt.height)}At&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Tt,It,bt)}else i.texImage2D(o.TEXTURE_2D,0,zt,Tt,It,bt);M(b)&&_(_t),Zt.__version=dt.version,b.onUpdate&&b.onUpdate(b)}F.__version=b.version}function mt(F,b,Z){if(b.image.length!==6)return;const _t=ht(F,b),Mt=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,F.__webglTexture,o.TEXTURE0+Z);const dt=s.get(Mt);if(Mt.version!==dt.__version||_t===!0){i.activeTexture(o.TEXTURE0+Z);const Zt=Ee.getPrimaries(Ee.workingColorSpace),wt=b.colorSpace===$a?null:Ee.getPrimaries(b.colorSpace),Xt=b.colorSpace===$a||Zt===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const ee=b.isCompressedTexture||b.image[0].isCompressedTexture,bt=b.image[0]&&b.image[0].isDataTexture,Tt=[];for(let St=0;St<6;St++)!ee&&!bt?Tt[St]=T(b.image[St],!0,l.maxCubemapSize):Tt[St]=bt?b.image[St].image:b.image[St],Tt[St]=Pe(b,Tt[St]);const It=Tt[0],zt=c.convert(b.format,b.colorSpace),Ct=c.convert(b.type),le=P(b.internalFormat,zt,Ct,b.colorSpace),W=b.isVideoTexture!==!0,Lt=dt.__version===void 0||_t===!0,At=Mt.dataReady;let Ft=z(b,It);et(o.TEXTURE_CUBE_MAP,b);let yt;if(ee){W&&Lt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ft,le,It.width,It.height);for(let St=0;St<6;St++){yt=Tt[St].mipmaps;for(let Rt=0;Rt<yt.length;Rt++){const ne=yt[Rt];b.format!==Ci?zt!==null?W?At&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Rt,0,0,ne.width,ne.height,zt,ne.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Rt,le,ne.width,ne.height,0,ne.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Rt,0,0,ne.width,ne.height,zt,Ct,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Rt,le,ne.width,ne.height,0,zt,Ct,ne.data)}}}else{if(yt=b.mipmaps,W&&Lt){yt.length>0&&Ft++;const St=Yt(Tt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ft,le,St.width,St.height)}for(let St=0;St<6;St++)if(bt){W?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Tt[St].width,Tt[St].height,zt,Ct,Tt[St].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,le,Tt[St].width,Tt[St].height,0,zt,Ct,Tt[St].data);for(let Rt=0;Rt<yt.length;Rt++){const Fe=yt[Rt].image[St].image;W?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Rt+1,0,0,Fe.width,Fe.height,zt,Ct,Fe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Rt+1,le,Fe.width,Fe.height,0,zt,Ct,Fe.data)}}else{W?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,zt,Ct,Tt[St]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,le,zt,Ct,Tt[St]);for(let Rt=0;Rt<yt.length;Rt++){const ne=yt[Rt];W?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Rt+1,0,0,zt,Ct,ne.image[St]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Rt+1,le,zt,Ct,ne.image[St])}}}M(b)&&_(o.TEXTURE_CUBE_MAP),dt.__version=Mt.version,b.onUpdate&&b.onUpdate(b)}F.__version=b.version}function Dt(F,b,Z,_t,Mt,dt){const Zt=c.convert(Z.format,Z.colorSpace),wt=c.convert(Z.type),Xt=P(Z.internalFormat,Zt,wt,Z.colorSpace),ee=s.get(b),bt=s.get(Z);if(bt.__renderTarget=b,!ee.__hasExternalTextures){const Tt=Math.max(1,b.width>>dt),It=Math.max(1,b.height>>dt);Mt===o.TEXTURE_3D||Mt===o.TEXTURE_2D_ARRAY?i.texImage3D(Mt,dt,Xt,Tt,It,b.depth,0,Zt,wt,null):i.texImage2D(Mt,dt,Xt,Tt,It,0,Zt,wt,null)}i.bindFramebuffer(o.FRAMEBUFFER,F),Ke(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_t,Mt,bt.__webglTexture,0,V(b)):(Mt===o.TEXTURE_2D||Mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,_t,Mt,bt.__webglTexture,dt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function kt(F,b,Z){if(o.bindRenderbuffer(o.RENDERBUFFER,F),b.depthBuffer){const _t=b.depthTexture,Mt=_t&&_t.isDepthTexture?_t.type:null,dt=N(b.stencilBuffer,Mt),Zt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Ke(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(b),dt,b.width,b.height):Z?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(b),dt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,dt,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Zt,o.RENDERBUFFER,F)}else{const _t=b.textures;for(let Mt=0;Mt<_t.length;Mt++){const dt=_t[Mt],Zt=c.convert(dt.format,dt.colorSpace),wt=c.convert(dt.type),Xt=P(dt.internalFormat,Zt,wt,dt.colorSpace);Ke(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(b),Xt,b.width,b.height):Z?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(b),Xt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Xt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ht(F,b,Z){const _t=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,F),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Mt=s.get(b.depthTexture);if(Mt.__renderTarget=b,(!Mt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),_t){if(Mt.__webglInit===void 0&&(Mt.__webglInit=!0,b.depthTexture.addEventListener("dispose",B)),Mt.__webglTexture===void 0){Mt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,Mt.__webglTexture),et(o.TEXTURE_CUBE_MAP,b.depthTexture);const ee=c.convert(b.depthTexture.format),bt=c.convert(b.depthTexture.type);let Tt;b.depthTexture.format===xa?Tt=o.DEPTH_COMPONENT24:b.depthTexture.format===Ns&&(Tt=o.DEPTH24_STENCIL8);for(let It=0;It<6;It++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,Tt,b.width,b.height,0,ee,bt,null)}}else Y(b.depthTexture,0);const dt=Mt.__webglTexture,Zt=V(b),wt=_t?o.TEXTURE_CUBE_MAP_POSITIVE_X+Z:o.TEXTURE_2D,Xt=b.depthTexture.format===Ns?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(b.depthTexture.format===xa)Ke(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xt,wt,dt,0,Zt):o.framebufferTexture2D(o.FRAMEBUFFER,Xt,wt,dt,0);else if(b.depthTexture.format===Ns)Ke(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xt,wt,dt,0,Zt):o.framebufferTexture2D(o.FRAMEBUFFER,Xt,wt,dt,0);else throw new Error("Unknown depthTexture format")}function he(F){const b=s.get(F),Z=F.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==F.depthTexture){const _t=F.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),_t){const Mt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,_t.removeEventListener("dispose",Mt)};_t.addEventListener("dispose",Mt),b.__depthDisposeCallback=Mt}b.__boundDepthTexture=_t}if(F.depthTexture&&!b.__autoAllocateDepthBuffer)if(Z)for(let _t=0;_t<6;_t++)Ht(b.__webglFramebuffer[_t],F,_t);else{const _t=F.texture.mipmaps;_t&&_t.length>0?Ht(b.__webglFramebuffer[0],F,0):Ht(b.__webglFramebuffer,F,0)}else if(Z){b.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[_t]),b.__webglDepthbuffer[_t]===void 0)b.__webglDepthbuffer[_t]=o.createRenderbuffer(),kt(b.__webglDepthbuffer[_t],F,!1);else{const Mt=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=b.__webglDepthbuffer[_t];o.bindRenderbuffer(o.RENDERBUFFER,dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,dt)}}else{const _t=F.texture.mipmaps;if(_t&&_t.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),kt(b.__webglDepthbuffer,F,!1);else{const Mt=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,dt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function $e(F,b,Z){const _t=s.get(F);b!==void 0&&Dt(_t.__webglFramebuffer,F,F.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Z!==void 0&&he(F)}function ge(F){const b=F.texture,Z=s.get(F),_t=s.get(b);F.addEventListener("dispose",I);const Mt=F.textures,dt=F.isWebGLCubeRenderTarget===!0,Zt=Mt.length>1;if(Zt||(_t.__webglTexture===void 0&&(_t.__webglTexture=o.createTexture()),_t.__version=b.version,h.memory.textures++),dt){Z.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(b.mipmaps&&b.mipmaps.length>0){Z.__webglFramebuffer[wt]=[];for(let Xt=0;Xt<b.mipmaps.length;Xt++)Z.__webglFramebuffer[wt][Xt]=o.createFramebuffer()}else Z.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Z.__webglFramebuffer=[];for(let wt=0;wt<b.mipmaps.length;wt++)Z.__webglFramebuffer[wt]=o.createFramebuffer()}else Z.__webglFramebuffer=o.createFramebuffer();if(Zt)for(let wt=0,Xt=Mt.length;wt<Xt;wt++){const ee=s.get(Mt[wt]);ee.__webglTexture===void 0&&(ee.__webglTexture=o.createTexture(),h.memory.textures++)}if(F.samples>0&&Ke(F)===!1){Z.__webglMultisampledFramebuffer=o.createFramebuffer(),Z.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let wt=0;wt<Mt.length;wt++){const Xt=Mt[wt];Z.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Z.__webglColorRenderbuffer[wt]);const ee=c.convert(Xt.format,Xt.colorSpace),bt=c.convert(Xt.type),Tt=P(Xt.internalFormat,ee,bt,Xt.colorSpace,F.isXRRenderTarget===!0),It=V(F);o.renderbufferStorageMultisample(o.RENDERBUFFER,It,Tt,F.width,F.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,Z.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),F.depthBuffer&&(Z.__webglDepthRenderbuffer=o.createRenderbuffer(),kt(Z.__webglDepthRenderbuffer,F,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(dt){i.bindTexture(o.TEXTURE_CUBE_MAP,_t.__webglTexture),et(o.TEXTURE_CUBE_MAP,b);for(let wt=0;wt<6;wt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Xt=0;Xt<b.mipmaps.length;Xt++)Dt(Z.__webglFramebuffer[wt][Xt],F,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Xt);else Dt(Z.__webglFramebuffer[wt],F,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);M(b)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Zt){for(let wt=0,Xt=Mt.length;wt<Xt;wt++){const ee=Mt[wt],bt=s.get(ee);let Tt=o.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Tt=F.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Tt,bt.__webglTexture),et(Tt,ee),Dt(Z.__webglFramebuffer,F,ee,o.COLOR_ATTACHMENT0+wt,Tt,0),M(ee)&&_(Tt)}i.unbindTexture()}else{let wt=o.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(wt=F.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,_t.__webglTexture),et(wt,b),b.mipmaps&&b.mipmaps.length>0)for(let Xt=0;Xt<b.mipmaps.length;Xt++)Dt(Z.__webglFramebuffer[Xt],F,b,o.COLOR_ATTACHMENT0,wt,Xt);else Dt(Z.__webglFramebuffer,F,b,o.COLOR_ATTACHMENT0,wt,0);M(b)&&_(wt),i.unbindTexture()}F.depthBuffer&&he(F)}function de(F){const b=F.textures;for(let Z=0,_t=b.length;Z<_t;Z++){const Mt=b[Z];if(M(Mt)){const dt=D(F),Zt=s.get(Mt).__webglTexture;i.bindTexture(dt,Zt),_(dt),i.unbindTexture()}}}const De=[],re=[];function tn(F){if(F.samples>0){if(Ke(F)===!1){const b=F.textures,Z=F.width,_t=F.height;let Mt=o.COLOR_BUFFER_BIT;const dt=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Zt=s.get(F),wt=b.length>1;if(wt)for(let ee=0;ee<b.length;ee++)i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const Xt=F.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let ee=0;ee<b.length;ee++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(Mt|=o.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(Mt|=o.STENCIL_BUFFER_BIT)),wt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[ee]);const bt=s.get(b[ee]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,bt,0)}o.blitFramebuffer(0,0,Z,_t,0,0,Z,_t,Mt,o.NEAREST),m===!0&&(De.length=0,re.length=0,De.push(o.COLOR_ATTACHMENT0+ee),F.depthBuffer&&F.resolveDepthBuffer===!1&&(De.push(dt),re.push(dt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,re)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,De))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let ee=0;ee<b.length;ee++){i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[ee]);const bt=s.get(b[ee]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,bt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&m){const b=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function V(F){return Math.min(l.maxSamples,F.samples)}function Ke(F){const b=s.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ye(F){const b=h.render.frame;v.get(F)!==b&&(v.set(F,b),F.update())}function Pe(F,b){const Z=F.colorSpace,_t=F.format,Mt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||Z!==zr&&Z!==$a&&(Ee.getTransfer(Z)===Ge?(_t!==Ci||Mt!==vi)&&ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Re("WebGLTextures: Unsupported texture color space:",Z)),b}function Yt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(p.width=F.naturalWidth||F.width,p.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(p.width=F.displayWidth,p.height=F.displayHeight):(p.width=F.width,p.height=F.height),p}this.allocateTextureUnit=nt,this.resetTextureUnits=K,this.setTexture2D=Y,this.setTexture2DArray=C,this.setTexture3D=L,this.setTextureCube=q,this.rebindTextures=$e,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Ke,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function BT(o,e){function i(s,l=$a){let c;const h=Ee.getTransfer(l);if(s===vi)return o.UNSIGNED_BYTE;if(s===kd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Xd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===nv)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===iv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===tv)return o.BYTE;if(s===ev)return o.SHORT;if(s===qo)return o.UNSIGNED_SHORT;if(s===Vd)return o.INT;if(s===ki)return o.UNSIGNED_INT;if(s===Ii)return o.FLOAT;if(s===va)return o.HALF_FLOAT;if(s===av)return o.ALPHA;if(s===sv)return o.RGB;if(s===Ci)return o.RGBA;if(s===xa)return o.DEPTH_COMPONENT;if(s===Ns)return o.DEPTH_STENCIL;if(s===rv)return o.RED;if(s===Wd)return o.RED_INTEGER;if(s===Pr)return o.RG;if(s===qd)return o.RG_INTEGER;if(s===Yd)return o.RGBA_INTEGER;if(s===kc||s===Xc||s===Wc||s===qc)if(h===Ge)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===kc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===kc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Xc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Wc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ad||s===sd||s===rd||s===od)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===ad)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===sd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===rd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===od)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ld||s===cd||s===ud||s===fd||s===hd||s===dd||s===pd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===ld||s===cd)return h===Ge?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===ud)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===fd)return c.COMPRESSED_R11_EAC;if(s===hd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===dd)return c.COMPRESSED_RG11_EAC;if(s===pd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===md||s===gd||s===_d||s===vd||s===xd||s===Sd||s===Md||s===yd||s===bd||s===Ed||s===Td||s===Ad||s===Rd||s===wd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===md)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===gd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===_d)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===vd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===xd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Sd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Md)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===yd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===bd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ed)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Td)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ad)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Rd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===wd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Cd||s===Dd||s===Ud)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Cd)return h===Ge?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Dd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ud)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Nd||s===Ld||s===Od||s===Pd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Nd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Ld)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Od)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Pd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Yo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const HT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class VT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new vv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Wi({vertexShader:HT,fragmentShader:GT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Un(new al(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kT extends Ir{constructor(e,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,v=null,g=null,S=null,y=null,E=null;const T=typeof XRWebGLBinding<"u",M=new VT,_={},D=i.getContextAttributes();let P=null,N=null;const z=[],B=[],I=new Ce;let X=null;const A=new zn;A.viewport=new on;const U=new zn;U.viewport=new on;const H=[A,U],K=new $M;let nt=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let mt=z[st];return mt===void 0&&(mt=new zh,z[st]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(st){let mt=z[st];return mt===void 0&&(mt=new zh,z[st]=mt),mt.getGripSpace()},this.getHand=function(st){let mt=z[st];return mt===void 0&&(mt=new zh,z[st]=mt),mt.getHandSpace()};function Y(st){const mt=B.indexOf(st.inputSource);if(mt===-1)return;const Dt=z[mt];Dt!==void 0&&(Dt.update(st.inputSource,st.frame,p||h),Dt.dispatchEvent({type:st.type,data:st.inputSource}))}function C(){l.removeEventListener("select",Y),l.removeEventListener("selectstart",Y),l.removeEventListener("selectend",Y),l.removeEventListener("squeeze",Y),l.removeEventListener("squeezestart",Y),l.removeEventListener("squeezeend",Y),l.removeEventListener("end",C),l.removeEventListener("inputsourceschange",L);for(let st=0;st<z.length;st++){const mt=B[st];mt!==null&&(B[st]=null,z[st].disconnect(mt))}nt=null,ut=null,M.reset();for(const st in _)delete _[st];e.setRenderTarget(P),y=null,S=null,g=null,l=null,N=null,Nt.stop(),s.isPresenting=!1,e.setPixelRatio(X),e.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){c=st,s.isPresenting===!0&&ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){d=st,s.isPresenting===!0&&ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(st){p=st},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(st){if(l=st,l!==null){if(P=e.getRenderTarget(),l.addEventListener("select",Y),l.addEventListener("selectstart",Y),l.addEventListener("selectend",Y),l.addEventListener("squeeze",Y),l.addEventListener("squeezestart",Y),l.addEventListener("squeezeend",Y),l.addEventListener("end",C),l.addEventListener("inputsourceschange",L),D.xrCompatible!==!0&&await i.makeXRCompatible(),X=e.getPixelRatio(),e.getSize(I),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,kt=null,Ht=null;D.depth&&(Ht=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Dt=D.stencil?Ns:xa,kt=D.stencil?Yo:ki);const he={colorFormat:i.RGBA8,depthFormat:Ht,scaleFactor:c};g=this.getBinding(),S=g.createProjectionLayer(he),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),N=new Vi(S.textureWidth,S.textureHeight,{format:Ci,type:vi,depthTexture:new Zo(S.textureWidth,S.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Dt={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Dt),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new Vi(y.framebufferWidth,y.framebufferHeight,{format:Ci,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Nt.setContext(l),Nt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function L(st){for(let mt=0;mt<st.removed.length;mt++){const Dt=st.removed[mt],kt=B.indexOf(Dt);kt>=0&&(B[kt]=null,z[kt].disconnect(Dt))}for(let mt=0;mt<st.added.length;mt++){const Dt=st.added[mt];let kt=B.indexOf(Dt);if(kt===-1){for(let he=0;he<z.length;he++)if(he>=B.length){B.push(Dt),kt=he;break}else if(B[he]===null){B[he]=Dt,kt=he;break}if(kt===-1)break}const Ht=z[kt];Ht&&Ht.connect(Dt)}}const q=new tt,ft=new tt;function pt(st,mt,Dt){q.setFromMatrixPosition(mt.matrixWorld),ft.setFromMatrixPosition(Dt.matrixWorld);const kt=q.distanceTo(ft),Ht=mt.projectionMatrix.elements,he=Dt.projectionMatrix.elements,$e=Ht[14]/(Ht[10]-1),ge=Ht[14]/(Ht[10]+1),de=(Ht[9]+1)/Ht[5],De=(Ht[9]-1)/Ht[5],re=(Ht[8]-1)/Ht[0],tn=(he[8]+1)/he[0],V=$e*re,Ke=$e*tn,ye=kt/(-re+tn),Pe=ye*-re;if(mt.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(Pe),st.translateZ(ye),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),Ht[10]===-1)st.projectionMatrix.copy(mt.projectionMatrix),st.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const Yt=$e+ye,F=ge+ye,b=V-Pe,Z=Ke+(kt-Pe),_t=de*ge/F*Yt,Mt=De*ge/F*Yt;st.projectionMatrix.makePerspective(b,Z,_t,Mt,Yt,F),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function O(st,mt){mt===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(mt.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(l===null)return;let mt=st.near,Dt=st.far;M.texture!==null&&(M.depthNear>0&&(mt=M.depthNear),M.depthFar>0&&(Dt=M.depthFar)),K.near=U.near=A.near=mt,K.far=U.far=A.far=Dt,(nt!==K.near||ut!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),nt=K.near,ut=K.far),K.layers.mask=st.layers.mask|6,A.layers.mask=K.layers.mask&3,U.layers.mask=K.layers.mask&5;const kt=st.parent,Ht=K.cameras;O(K,kt);for(let he=0;he<Ht.length;he++)O(Ht[he],kt);Ht.length===2?pt(K,A,U):K.projectionMatrix.copy(A.projectionMatrix),et(st,K,kt)};function et(st,mt,Dt){Dt===null?st.matrix.copy(mt.matrixWorld):(st.matrix.copy(Dt.matrixWorld),st.matrix.invert(),st.matrix.multiply(mt.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(mt.projectionMatrix),st.projectionMatrixInverse.copy(mt.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=zd*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(S===null&&y===null))return m},this.setFoveation=function(st){m=st,S!==null&&(S.fixedFoveation=st),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=st)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(K)},this.getCameraTexture=function(st){return _[st]};let ht=null;function Et(st,mt){if(v=mt.getViewerPose(p||h),E=mt,v!==null){const Dt=v.views;y!==null&&(e.setRenderTargetFramebuffer(N,y.framebuffer),e.setRenderTarget(N));let kt=!1;Dt.length!==K.cameras.length&&(K.cameras.length=0,kt=!0);for(let ge=0;ge<Dt.length;ge++){const de=Dt[ge];let De=null;if(y!==null)De=y.getViewport(de);else{const tn=g.getViewSubImage(S,de);De=tn.viewport,ge===0&&(e.setRenderTargetTextures(N,tn.colorTexture,tn.depthStencilTexture),e.setRenderTarget(N))}let re=H[ge];re===void 0&&(re=new zn,re.layers.enable(ge),re.viewport=new on,H[ge]=re),re.matrix.fromArray(de.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(de.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(De.x,De.y,De.width,De.height),ge===0&&(K.matrix.copy(re.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),kt===!0&&K.cameras.push(re)}const Ht=l.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){g=s.getBinding();const ge=g.getDepthInformation(Dt[0]);ge&&ge.isValid&&ge.texture&&M.init(ge,l.renderState)}if(Ht&&Ht.includes("camera-access")&&T){e.state.unbindTexture(),g=s.getBinding();for(let ge=0;ge<Dt.length;ge++){const de=Dt[ge].camera;if(de){let De=_[de];De||(De=new vv,_[de]=De);const re=g.getCameraImage(de);De.sourceTexture=re}}}}for(let Dt=0;Dt<z.length;Dt++){const kt=B[Dt],Ht=z[Dt];kt!==null&&Ht!==void 0&&Ht.update(kt,mt,p||h)}ht&&ht(st,mt),mt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:mt}),E=null}const Nt=new Sv;Nt.setAnimationLoop(Et),this.setAnimationLoop=function(st){ht=st},this.dispose=function(){}}}const Rs=new Sa,XT=new an;function WT(o,e){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function s(M,_){_.color.getRGB(M.fogColor.value,dv(o)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,D,P,N){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(M,_):_.isMeshToonMaterial?(c(M,_),g(M,_)):_.isMeshPhongMaterial?(c(M,_),v(M,_)):_.isMeshStandardMaterial?(c(M,_),S(M,_),_.isMeshPhysicalMaterial&&y(M,_,N)):_.isMeshMatcapMaterial?(c(M,_),E(M,_)):_.isMeshDepthMaterial?c(M,_):_.isMeshDistanceMaterial?(c(M,_),T(M,_)):_.isMeshNormalMaterial?c(M,_):_.isLineBasicMaterial?(h(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?m(M,_,D,P):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Kn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Kn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const D=e.get(_),P=D.envMap,N=D.envMapRotation;P&&(M.envMap.value=P,Rs.copy(N),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),M.envMapRotation.value.setFromMatrix4(XT.makeRotationFromEuler(Rs)),M.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function h(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,D,P){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*D,M.scale.value=P*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function v(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function g(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function S(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function y(M,_,D){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Kn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,_){_.matcap&&(M.matcap.value=_.matcap)}function T(M,_){const D=e.get(_).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function qT(o,e,i,s){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,P){const N=P.program;s.uniformBlockBinding(D,N)}function p(D,P){let N=l[D.id];N===void 0&&(E(D),N=v(D),l[D.id]=N,D.addEventListener("dispose",M));const z=P.program;s.updateUBOMapping(D,z);const B=e.render.frame;c[D.id]!==B&&(S(D),c[D.id]=B)}function v(D){const P=g();D.__bindingPointIndex=P;const N=o.createBuffer(),z=D.__size,B=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,z,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,N),N}function g(){for(let D=0;D<d;D++)if(h.indexOf(D)===-1)return h.push(D),D;return Re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(D){const P=l[D.id],N=D.uniforms,z=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let B=0,I=N.length;B<I;B++){const X=Array.isArray(N[B])?N[B]:[N[B]];for(let A=0,U=X.length;A<U;A++){const H=X[A];if(y(H,B,A,z)===!0){const K=H.__offset,nt=Array.isArray(H.value)?H.value:[H.value];let ut=0;for(let Y=0;Y<nt.length;Y++){const C=nt[Y],L=T(C);typeof C=="number"||typeof C=="boolean"?(H.__data[0]=C,o.bufferSubData(o.UNIFORM_BUFFER,K+ut,H.__data)):C.isMatrix3?(H.__data[0]=C.elements[0],H.__data[1]=C.elements[1],H.__data[2]=C.elements[2],H.__data[3]=0,H.__data[4]=C.elements[3],H.__data[5]=C.elements[4],H.__data[6]=C.elements[5],H.__data[7]=0,H.__data[8]=C.elements[6],H.__data[9]=C.elements[7],H.__data[10]=C.elements[8],H.__data[11]=0):(C.toArray(H.__data,ut),ut+=L.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,K,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(D,P,N,z){const B=D.value,I=P+"_"+N;if(z[I]===void 0)return typeof B=="number"||typeof B=="boolean"?z[I]=B:z[I]=B.clone(),!0;{const X=z[I];if(typeof B=="number"||typeof B=="boolean"){if(X!==B)return z[I]=B,!0}else if(X.equals(B)===!1)return X.copy(B),!0}return!1}function E(D){const P=D.uniforms;let N=0;const z=16;for(let I=0,X=P.length;I<X;I++){const A=Array.isArray(P[I])?P[I]:[P[I]];for(let U=0,H=A.length;U<H;U++){const K=A[U],nt=Array.isArray(K.value)?K.value:[K.value];for(let ut=0,Y=nt.length;ut<Y;ut++){const C=nt[ut],L=T(C),q=N%z,ft=q%L.boundary,pt=q+ft;N+=ft,pt!==0&&z-pt<L.storage&&(N+=z-pt),K.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=N,N+=L.storage}}}const B=N%z;return B>0&&(N+=z-B),D.__size=N,D.__cache={},this}function T(D){const P={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(P.boundary=4,P.storage=4):D.isVector2?(P.boundary=8,P.storage=8):D.isVector3||D.isColor?(P.boundary=16,P.storage=12):D.isVector4?(P.boundary=16,P.storage=16):D.isMatrix3?(P.boundary=48,P.storage=48):D.isMatrix4?(P.boundary=64,P.storage=64):D.isTexture?ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ie("WebGLRenderer: Unsupported uniform value type.",D),P}function M(D){const P=D.target;P.removeEventListener("dispose",M);const N=h.indexOf(P.__bindingPointIndex);h.splice(N,1),o.deleteBuffer(l[P.id]),delete l[P.id],delete c[P.id]}function _(){for(const D in l)o.deleteBuffer(l[D]);h=[],l={},c={}}return{bind:m,update:p,dispose:_}}const YT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pi=null;function jT(){return Pi===null&&(Pi=new WM(YT,16,16,Pr,va),Pi.name="DFG_LUT",Pi.minFilter=Fn,Pi.magFilter=Fn,Pi.wrapS=ma,Pi.wrapT=ma,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}class rl{constructor(e={}){const{canvas:i=xM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1,outputBufferType:y=vi}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=h;const T=y,M=new Set([Yd,qd,Wd]),_=new Set([vi,ki,qo,Yo,kd,Xd]),D=new Uint32Array(4),P=new Int32Array(4);let N=null,z=null;const B=[],I=[];let X=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let U=!1;this._outputColorSpace=_i;let H=0,K=0,nt=null,ut=-1,Y=null;const C=new on,L=new on;let q=null;const ft=new Me(0);let pt=0,O=i.width,et=i.height,ht=1,Et=null,Nt=null;const st=new on(0,0,O,et),mt=new on(0,0,O,et);let Dt=!1;const kt=new _v;let Ht=!1,he=!1;const $e=new an,ge=new tt,de=new on,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function tn(){return nt===null?ht:1}let V=s;function Ke(w,Q){return i.getContext(w,Q)}try{const w={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Gd}`),i.addEventListener("webglcontextlost",ne,!1),i.addEventListener("webglcontextrestored",Fe,!1),i.addEventListener("webglcontextcreationerror",be,!1),V===null){const Q="webgl2";if(V=Ke(Q,w),V===null)throw Ke(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Re("WebGLRenderer: "+w.message),w}let ye,Pe,Yt,F,b,Z,_t,Mt,dt,Zt,wt,Xt,ee,bt,Tt,It,zt,Ct,le,W,Lt,At,Ft,yt;function St(){ye=new jb(V),ye.init(),At=new BT(V,ye),Pe=new Bb(V,ye,e,At),Yt=new FT(V,ye),Pe.reversedDepthBuffer&&S&&Yt.buffers.depth.setReversed(!0),F=new Qb(V),b=new yT,Z=new IT(V,ye,Yt,b,Pe,At,F),_t=new Gb(A),Mt=new Yb(A),dt=new ey(V),Ft=new Fb(V,dt),Zt=new Zb(V,dt,F,Ft),wt=new $b(V,Zt,dt,F),le=new Jb(V,Pe,Z),It=new Hb(b),Xt=new MT(A,_t,Mt,ye,Pe,Ft,It),ee=new WT(A,b),bt=new ET,Tt=new DT(ye),Ct=new zb(A,_t,Mt,Yt,wt,E,m),zt=new PT(A,wt,Pe),yt=new qT(V,F,Pe,Yt),W=new Ib(V,ye,F),Lt=new Kb(V,ye,F),F.programs=Xt.programs,A.capabilities=Pe,A.extensions=ye,A.properties=b,A.renderLists=bt,A.shadowMap=zt,A.state=Yt,A.info=F}St(),T!==vi&&(X=new eE(T,i.width,i.height,l,c));const Rt=new kT(A,V);this.xr=Rt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const w=ye.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ye.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(w){w!==void 0&&(ht=w,this.setSize(O,et,!1))},this.getSize=function(w){return w.set(O,et)},this.setSize=function(w,Q,lt=!0){if(Rt.isPresenting){ie("WebGLRenderer: Can't change size while VR device is presenting.");return}O=w,et=Q,i.width=Math.floor(w*ht),i.height=Math.floor(Q*ht),lt===!0&&(i.style.width=w+"px",i.style.height=Q+"px"),X!==null&&X.setSize(i.width,i.height),this.setViewport(0,0,w,Q)},this.getDrawingBufferSize=function(w){return w.set(O*ht,et*ht).floor()},this.setDrawingBufferSize=function(w,Q,lt){O=w,et=Q,ht=lt,i.width=Math.floor(w*lt),i.height=Math.floor(Q*lt),this.setViewport(0,0,w,Q)},this.setEffects=function(w){if(T===vi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let Q=0;Q<w.length;Q++)if(w[Q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}X.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(st)},this.setViewport=function(w,Q,lt,rt){w.isVector4?st.set(w.x,w.y,w.z,w.w):st.set(w,Q,lt,rt),Yt.viewport(C.copy(st).multiplyScalar(ht).round())},this.getScissor=function(w){return w.copy(mt)},this.setScissor=function(w,Q,lt,rt){w.isVector4?mt.set(w.x,w.y,w.z,w.w):mt.set(w,Q,lt,rt),Yt.scissor(L.copy(mt).multiplyScalar(ht).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(w){Yt.setScissorTest(Dt=w)},this.setOpaqueSort=function(w){Et=w},this.setTransparentSort=function(w){Nt=w},this.getClearColor=function(w){return w.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(w=!0,Q=!0,lt=!0){let rt=0;if(w){let $=!1;if(nt!==null){const Ut=nt.texture.format;$=M.has(Ut)}if($){const Ut=nt.texture.type,Bt=_.has(Ut),Ot=Ct.getClearColor(),Gt=Ct.getClearAlpha(),Wt=Ot.r,Jt=Ot.g,qt=Ot.b;Bt?(D[0]=Wt,D[1]=Jt,D[2]=qt,D[3]=Gt,V.clearBufferuiv(V.COLOR,0,D)):(P[0]=Wt,P[1]=Jt,P[2]=qt,P[3]=Gt,V.clearBufferiv(V.COLOR,0,P))}else rt|=V.COLOR_BUFFER_BIT}Q&&(rt|=V.DEPTH_BUFFER_BIT),lt&&(rt|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ne,!1),i.removeEventListener("webglcontextrestored",Fe,!1),i.removeEventListener("webglcontextcreationerror",be,!1),Ct.dispose(),bt.dispose(),Tt.dispose(),b.dispose(),_t.dispose(),Mt.dispose(),wt.dispose(),Ft.dispose(),yt.dispose(),Xt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",zs),Rt.removeEventListener("sessionend",kr),Di.stop()};function ne(w){w.preventDefault(),Jg("WebGLRenderer: Context Lost."),U=!0}function Fe(){Jg("WebGLRenderer: Context Restored."),U=!1;const w=F.autoReset,Q=zt.enabled,lt=zt.autoUpdate,rt=zt.needsUpdate,$=zt.type;St(),F.autoReset=w,zt.enabled=Q,zt.autoUpdate=lt,zt.needsUpdate=rt,zt.type=$}function be(w){Re("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Nn(w){const Q=w.target;Q.removeEventListener("dispose",Nn),xi(Q)}function xi(w){ol(w),b.remove(w)}function ol(w){const Q=b.get(w).programs;Q!==void 0&&(Q.forEach(function(lt){Xt.releaseProgram(lt)}),w.isShaderMaterial&&Xt.releaseShaderCache(w))}this.renderBufferDirect=function(w,Q,lt,rt,$,Ut){Q===null&&(Q=De);const Bt=$.isMesh&&$.matrixWorld.determinant()<0,Ot=as(w,Q,lt,rt,$);Yt.setMaterial(rt,Bt);let Gt=lt.index,Wt=1;if(rt.wireframe===!0){if(Gt=Zt.getWireframeAttribute(lt),Gt===void 0)return;Wt=2}const Jt=lt.drawRange,qt=lt.attributes.position;let $t=Jt.start*Wt,Ue=(Jt.start+Jt.count)*Wt;Ut!==null&&($t=Math.max($t,Ut.start*Wt),Ue=Math.min(Ue,(Ut.start+Ut.count)*Wt)),Gt!==null?($t=Math.max($t,0),Ue=Math.min(Ue,Gt.count)):qt!=null&&($t=Math.max($t,0),Ue=Math.min(Ue,qt.count));const Qe=Ue-$t;if(Qe<0||Qe===1/0)return;Ft.setup($,rt,Ot,lt,Gt);let Ye,ze=W;if(Gt!==null&&(Ye=dt.get(Gt),ze=Lt,ze.setIndex(Ye)),$.isMesh)rt.wireframe===!0?(Yt.setLineWidth(rt.wireframeLinewidth*tn()),ze.setMode(V.LINES)):ze.setMode(V.TRIANGLES);else if($.isLine){let Kt=rt.linewidth;Kt===void 0&&(Kt=1),Yt.setLineWidth(Kt*tn()),$.isLineSegments?ze.setMode(V.LINES):$.isLineLoop?ze.setMode(V.LINE_LOOP):ze.setMode(V.LINE_STRIP)}else $.isPoints?ze.setMode(V.POINTS):$.isSprite&&ze.setMode(V.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)jo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ze.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))ze.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Kt=$._multiDrawStarts,Ne=$._multiDrawCounts,ae=$._multiDrawCount,Mn=Gt?dt.get(Gt).bytesPerElement:1,qi=b.get(rt).currentProgram.getUniforms();for(let yn=0;yn<ae;yn++)qi.setValue(V,"_gl_DrawID",yn),ze.render(Kt[yn]/Mn,Ne[yn])}else if($.isInstancedMesh)ze.renderInstances($t,Qe,$.count);else if(lt.isInstancedBufferGeometry){const Kt=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Ne=Math.min(lt.instanceCount,Kt);ze.renderInstances($t,Qe,Ne)}else ze.render($t,Qe)};function Gr(w,Q,lt){w.transparent===!0&&w.side===Fi&&w.forceSinglePass===!1?(w.side=Kn,w.needsUpdate=!0,Is(w,Q,lt),w.side=es,w.needsUpdate=!0,Is(w,Q,lt),w.side=Fi):Is(w,Q,lt)}this.compile=function(w,Q,lt=null){lt===null&&(lt=w),z=Tt.get(lt),z.init(Q),I.push(z),lt.traverseVisible(function($){$.isLight&&$.layers.test(Q.layers)&&(z.pushLight($),$.castShadow&&z.pushShadow($))}),w!==lt&&w.traverseVisible(function($){$.isLight&&$.layers.test(Q.layers)&&(z.pushLight($),$.castShadow&&z.pushShadow($))}),z.setupLights();const rt=new Set;return w.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ut=$.material;if(Ut)if(Array.isArray(Ut))for(let Bt=0;Bt<Ut.length;Bt++){const Ot=Ut[Bt];Gr(Ot,lt,$),rt.add(Ot)}else Gr(Ut,lt,$),rt.add(Ut)}),z=I.pop(),rt},this.compileAsync=function(w,Q,lt=null){const rt=this.compile(w,Q,lt);return new Promise($=>{function Ut(){if(rt.forEach(function(Bt){b.get(Bt).currentProgram.isReady()&&rt.delete(Bt)}),rt.size===0){$(w);return}setTimeout(Ut,10)}ye.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let Ps=null;function Vr(w){Ps&&Ps(w)}function zs(){Di.stop()}function kr(){Di.start()}const Di=new Sv;Di.setAnimationLoop(Vr),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(w){Ps=w,Rt.setAnimationLoop(w),w===null?Di.stop():Di.start()},Rt.addEventListener("sessionstart",zs),Rt.addEventListener("sessionend",kr),this.render=function(w,Q){if(Q!==void 0&&Q.isCamera!==!0){Re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;const lt=Rt.enabled===!0&&Rt.isPresenting===!0,rt=X!==null&&(nt===null||lt)&&X.begin(A,nt);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(X===null||X.isCompositing()===!1)&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(Q),Q=Rt.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,Q,nt),z=Tt.get(w,I.length),z.init(Q),I.push(z),$e.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),kt.setFromProjectionMatrix($e,Bi,Q.reversedDepth),he=this.localClippingEnabled,Ht=It.init(this.clippingPlanes,he),N=bt.get(w,B.length),N.init(),B.push(N),Rt.enabled===!0&&Rt.isPresenting===!0){const Bt=A.xr.getDepthSensingMesh();Bt!==null&&ri(Bt,Q,-1/0,A.sortObjects)}ri(w,Q,0,A.sortObjects),N.finish(),A.sortObjects===!0&&N.sort(Et,Nt),re=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,re&&Ct.addToRenderList(N,w),this.info.render.frame++,Ht===!0&&It.beginShadows();const $=z.state.shadowsArray;if(zt.render($,w,Q),Ht===!0&&It.endShadows(),this.info.autoReset===!0&&this.info.reset(),(rt&&X.hasRenderPass())===!1){const Bt=N.opaque,Ot=N.transmissive;if(z.setupLights(),Q.isArrayCamera){const Gt=Q.cameras;if(Ot.length>0)for(let Wt=0,Jt=Gt.length;Wt<Jt;Wt++){const qt=Gt[Wt];Sn(Bt,Ot,w,qt)}re&&Ct.render(w);for(let Wt=0,Jt=Gt.length;Wt<Jt;Wt++){const qt=Gt[Wt];ln(N,w,qt,qt.viewport)}}else Ot.length>0&&Sn(Bt,Ot,w,Q),re&&Ct.render(w),ln(N,w,Q)}nt!==null&&K===0&&(Z.updateMultisampleRenderTarget(nt),Z.updateRenderTargetMipmap(nt)),rt&&X.end(A),w.isScene===!0&&w.onAfterRender(A,w,Q),Ft.resetDefaultState(),ut=-1,Y=null,I.pop(),I.length>0?(z=I[I.length-1],Ht===!0&&It.setGlobalState(A.clippingPlanes,z.state.camera)):z=null,B.pop(),B.length>0?N=B[B.length-1]:N=null};function ri(w,Q,lt,rt){if(w.visible===!1)return;if(w.layers.test(Q.layers)){if(w.isGroup)lt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Q);else if(w.isLight)z.pushLight(w),w.castShadow&&z.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||kt.intersectsSprite(w)){rt&&de.setFromMatrixPosition(w.matrixWorld).applyMatrix4($e);const Bt=wt.update(w),Ot=w.material;Ot.visible&&N.push(w,Bt,Ot,lt,de.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||kt.intersectsObject(w))){const Bt=wt.update(w),Ot=w.material;if(rt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),de.copy(w.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),de.copy(Bt.boundingSphere.center)),de.applyMatrix4(w.matrixWorld).applyMatrix4($e)),Array.isArray(Ot)){const Gt=Bt.groups;for(let Wt=0,Jt=Gt.length;Wt<Jt;Wt++){const qt=Gt[Wt],$t=Ot[qt.materialIndex];$t&&$t.visible&&N.push(w,Bt,$t,lt,de.z,qt)}}else Ot.visible&&N.push(w,Bt,Ot,lt,de.z,null)}}const Ut=w.children;for(let Bt=0,Ot=Ut.length;Bt<Ot;Bt++)ri(Ut[Bt],Q,lt,rt)}function ln(w,Q,lt,rt){const{opaque:$,transmissive:Ut,transparent:Bt}=w;z.setupLightsView(lt),Ht===!0&&It.setGlobalState(A.clippingPlanes,lt),rt&&Yt.viewport(C.copy(rt)),$.length>0&&Si($,Q,lt),Ut.length>0&&Si(Ut,Q,lt),Bt.length>0&&Si(Bt,Q,lt),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function Sn(w,Q,lt,rt){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[rt.id]===void 0){const $t=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[rt.id]=new Vi(1,1,{generateMipmaps:!0,type:$t?va:vi,minFilter:Us,samples:Pe.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ee.workingColorSpace})}const Ut=z.state.transmissionRenderTarget[rt.id],Bt=rt.viewport||C;Ut.setSize(Bt.z*A.transmissionResolutionScale,Bt.w*A.transmissionResolutionScale);const Ot=A.getRenderTarget(),Gt=A.getActiveCubeFace(),Wt=A.getActiveMipmapLevel();A.setRenderTarget(Ut),A.getClearColor(ft),pt=A.getClearAlpha(),pt<1&&A.setClearColor(16777215,.5),A.clear(),re&&Ct.render(lt);const Jt=A.toneMapping;A.toneMapping=Gi;const qt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),z.setupLightsView(rt),Ht===!0&&It.setGlobalState(A.clippingPlanes,rt),Si(w,lt,rt),Z.updateMultisampleRenderTarget(Ut),Z.updateRenderTargetMipmap(Ut),ye.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Ue=0,Qe=Q.length;Ue<Qe;Ue++){const Ye=Q[Ue],{object:ze,geometry:Kt,material:Ne,group:ae}=Ye;if(Ne.side===Fi&&ze.layers.test(rt.layers)){const Mn=Ne.side;Ne.side=Kn,Ne.needsUpdate=!0,Fs(ze,lt,rt,Kt,Ne,ae),Ne.side=Mn,Ne.needsUpdate=!0,$t=!0}}$t===!0&&(Z.updateMultisampleRenderTarget(Ut),Z.updateRenderTargetMipmap(Ut))}A.setRenderTarget(Ot,Gt,Wt),A.setClearColor(ft,pt),qt!==void 0&&(rt.viewport=qt),A.toneMapping=Jt}function Si(w,Q,lt){const rt=Q.isScene===!0?Q.overrideMaterial:null;for(let $=0,Ut=w.length;$<Ut;$++){const Bt=w[$],{object:Ot,geometry:Gt,group:Wt}=Bt;let Jt=Bt.material;Jt.allowOverride===!0&&rt!==null&&(Jt=rt),Ot.layers.test(lt.layers)&&Fs(Ot,Q,lt,Gt,Jt,Wt)}}function Fs(w,Q,lt,rt,$,Ut){w.onBeforeRender(A,Q,lt,rt,$,Ut),w.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(A,Q,lt,rt,w,Ut),$.transparent===!0&&$.side===Fi&&$.forceSinglePass===!1?($.side=Kn,$.needsUpdate=!0,A.renderBufferDirect(lt,Q,rt,$,w,Ut),$.side=es,$.needsUpdate=!0,A.renderBufferDirect(lt,Q,rt,$,w,Ut),$.side=Fi):A.renderBufferDirect(lt,Q,rt,$,w,Ut),w.onAfterRender(A,Q,lt,rt,$,Ut)}function Is(w,Q,lt){Q.isScene!==!0&&(Q=De);const rt=b.get(w),$=z.state.lights,Ut=z.state.shadowsArray,Bt=$.state.version,Ot=Xt.getParameters(w,$.state,Ut,Q,lt),Gt=Xt.getProgramCacheKey(Ot);let Wt=rt.programs;rt.environment=w.isMeshStandardMaterial?Q.environment:null,rt.fog=Q.fog,rt.envMap=(w.isMeshStandardMaterial?Mt:_t).get(w.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&w.envMap===null?Q.environmentRotation:w.envMapRotation,Wt===void 0&&(w.addEventListener("dispose",Nn),Wt=new Map,rt.programs=Wt);let Jt=Wt.get(Gt);if(Jt!==void 0){if(rt.currentProgram===Jt&&rt.lightsStateVersion===Bt)return Xr(w,Ot),Jt}else Ot.uniforms=Xt.getUniforms(w),w.onBeforeCompile(Ot,A),Jt=Xt.acquireProgram(Ot,Gt),Wt.set(Gt,Jt),rt.uniforms=Ot.uniforms;const qt=rt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(qt.clippingPlanes=It.uniform),Xr(w,Ot),rt.needsLights=Ma(w),rt.lightsStateVersion=Bt,rt.needsLights&&(qt.ambientLightColor.value=$.state.ambient,qt.lightProbe.value=$.state.probe,qt.directionalLights.value=$.state.directional,qt.directionalLightShadows.value=$.state.directionalShadow,qt.spotLights.value=$.state.spot,qt.spotLightShadows.value=$.state.spotShadow,qt.rectAreaLights.value=$.state.rectArea,qt.ltc_1.value=$.state.rectAreaLTC1,qt.ltc_2.value=$.state.rectAreaLTC2,qt.pointLights.value=$.state.point,qt.pointLightShadows.value=$.state.pointShadow,qt.hemisphereLights.value=$.state.hemi,qt.directionalShadowMap.value=$.state.directionalShadowMap,qt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,qt.spotShadowMap.value=$.state.spotShadowMap,qt.spotLightMatrix.value=$.state.spotLightMatrix,qt.spotLightMap.value=$.state.spotLightMap,qt.pointShadowMap.value=$.state.pointShadowMap,qt.pointShadowMatrix.value=$.state.pointShadowMatrix),rt.currentProgram=Jt,rt.uniformsList=null,Jt}function ll(w){if(w.uniformsList===null){const Q=w.currentProgram.getUniforms();w.uniformsList=Yc.seqWithValue(Q.seq,w.uniforms)}return w.uniformsList}function Xr(w,Q){const lt=b.get(w);lt.outputColorSpace=Q.outputColorSpace,lt.batching=Q.batching,lt.batchingColor=Q.batchingColor,lt.instancing=Q.instancing,lt.instancingColor=Q.instancingColor,lt.instancingMorph=Q.instancingMorph,lt.skinning=Q.skinning,lt.morphTargets=Q.morphTargets,lt.morphNormals=Q.morphNormals,lt.morphColors=Q.morphColors,lt.morphTargetsCount=Q.morphTargetsCount,lt.numClippingPlanes=Q.numClippingPlanes,lt.numIntersection=Q.numClipIntersection,lt.vertexAlphas=Q.vertexAlphas,lt.vertexTangents=Q.vertexTangents,lt.toneMapping=Q.toneMapping}function as(w,Q,lt,rt,$){Q.isScene!==!0&&(Q=De),Z.resetTextureUnits();const Ut=Q.fog,Bt=rt.isMeshStandardMaterial?Q.environment:null,Ot=nt===null?A.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:zr,Gt=(rt.isMeshStandardMaterial?Mt:_t).get(rt.envMap||Bt),Wt=rt.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,Jt=!!lt.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),qt=!!lt.morphAttributes.position,$t=!!lt.morphAttributes.normal,Ue=!!lt.morphAttributes.color;let Qe=Gi;rt.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Qe=A.toneMapping);const Ye=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,ze=Ye!==void 0?Ye.length:0,Kt=b.get(rt),Ne=z.state.lights;if(Ht===!0&&(he===!0||w!==Y)){const En=w===Y&&rt.id===ut;It.setState(rt,w,En)}let ae=!1;rt.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Ne.state.version||Kt.outputColorSpace!==Ot||$.isBatchedMesh&&Kt.batching===!1||!$.isBatchedMesh&&Kt.batching===!0||$.isBatchedMesh&&Kt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Kt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Kt.instancing===!1||!$.isInstancedMesh&&Kt.instancing===!0||$.isSkinnedMesh&&Kt.skinning===!1||!$.isSkinnedMesh&&Kt.skinning===!0||$.isInstancedMesh&&Kt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Kt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Kt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Kt.instancingMorph===!1&&$.morphTexture!==null||Kt.envMap!==Gt||rt.fog===!0&&Kt.fog!==Ut||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==It.numPlanes||Kt.numIntersection!==It.numIntersection)||Kt.vertexAlphas!==Wt||Kt.vertexTangents!==Jt||Kt.morphTargets!==qt||Kt.morphNormals!==$t||Kt.morphColors!==Ue||Kt.toneMapping!==Qe||Kt.morphTargetsCount!==ze)&&(ae=!0):(ae=!0,Kt.__version=rt.version);let Mn=Kt.currentProgram;ae===!0&&(Mn=Is(rt,Q,$));let qi=!1,yn=!1,oi=!1;const Ie=Mn.getUniforms(),bn=Kt.uniforms;if(Yt.useProgram(Mn.program)&&(qi=!0,yn=!0,oi=!0),rt.id!==ut&&(ut=rt.id,yn=!0),qi||Y!==w){Yt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ie.setValue(V,"projectionMatrix",w.projectionMatrix),Ie.setValue(V,"viewMatrix",w.matrixWorldInverse);const Tn=Ie.map.cameraPosition;Tn!==void 0&&Tn.setValue(V,ge.setFromMatrixPosition(w.matrixWorld)),Pe.logarithmicDepthBuffer&&Ie.setValue(V,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Ie.setValue(V,"isOrthographic",w.isOrthographicCamera===!0),Y!==w&&(Y=w,yn=!0,oi=!0)}if(Kt.needsLights&&(Ne.state.directionalShadowMap.length>0&&Ie.setValue(V,"directionalShadowMap",Ne.state.directionalShadowMap,Z),Ne.state.spotShadowMap.length>0&&Ie.setValue(V,"spotShadowMap",Ne.state.spotShadowMap,Z),Ne.state.pointShadowMap.length>0&&Ie.setValue(V,"pointShadowMap",Ne.state.pointShadowMap,Z)),$.isSkinnedMesh){Ie.setOptional(V,$,"bindMatrix"),Ie.setOptional(V,$,"bindMatrixInverse");const En=$.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Ie.setValue(V,"boneTexture",En.boneTexture,Z))}$.isBatchedMesh&&(Ie.setOptional(V,$,"batchingTexture"),Ie.setValue(V,"batchingTexture",$._matricesTexture,Z),Ie.setOptional(V,$,"batchingIdTexture"),Ie.setValue(V,"batchingIdTexture",$._indirectTexture,Z),Ie.setOptional(V,$,"batchingColorTexture"),$._colorsTexture!==null&&Ie.setValue(V,"batchingColorTexture",$._colorsTexture,Z));const pn=lt.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&le.update($,lt,Mn),(yn||Kt.receiveShadow!==$.receiveShadow)&&(Kt.receiveShadow=$.receiveShadow,Ie.setValue(V,"receiveShadow",$.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(bn.envMap.value=Gt,bn.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&Q.environment!==null&&(bn.envMapIntensity.value=Q.environmentIntensity),bn.dfgLUT!==void 0&&(bn.dfgLUT.value=jT()),yn&&(Ie.setValue(V,"toneMappingExposure",A.toneMappingExposure),Kt.needsLights&&Wr(bn,oi),Ut&&rt.fog===!0&&ee.refreshFogUniforms(bn,Ut),ee.refreshMaterialUniforms(bn,rt,ht,et,z.state.transmissionRenderTarget[w.id]),Yc.upload(V,ll(Kt),bn,Z)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Yc.upload(V,ll(Kt),bn,Z),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Ie.setValue(V,"center",$.center),Ie.setValue(V,"modelViewMatrix",$.modelViewMatrix),Ie.setValue(V,"normalMatrix",$.normalMatrix),Ie.setValue(V,"modelMatrix",$.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const En=rt.uniformsGroups;for(let Tn=0,Bs=En.length;Tn<Bs;Tn++){const Mi=En[Tn];yt.update(Mi,Mn),yt.bind(Mi,Mn)}}return Mn}function Wr(w,Q){w.ambientLightColor.needsUpdate=Q,w.lightProbe.needsUpdate=Q,w.directionalLights.needsUpdate=Q,w.directionalLightShadows.needsUpdate=Q,w.pointLights.needsUpdate=Q,w.pointLightShadows.needsUpdate=Q,w.spotLights.needsUpdate=Q,w.spotLightShadows.needsUpdate=Q,w.rectAreaLights.needsUpdate=Q,w.hemisphereLights.needsUpdate=Q}function Ma(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(w,Q,lt){const rt=b.get(w);rt.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),b.get(w.texture).__webglTexture=Q,b.get(w.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:lt,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Q){const lt=b.get(w);lt.__webglFramebuffer=Q,lt.__useDefaultFramebuffer=Q===void 0};const ya=V.createFramebuffer();this.setRenderTarget=function(w,Q=0,lt=0){nt=w,H=Q,K=lt;let rt=null,$=!1,Ut=!1;if(w){const Ot=b.get(w);if(Ot.__useDefaultFramebuffer!==void 0){Yt.bindFramebuffer(V.FRAMEBUFFER,Ot.__webglFramebuffer),C.copy(w.viewport),L.copy(w.scissor),q=w.scissorTest,Yt.viewport(C),Yt.scissor(L),Yt.setScissorTest(q),ut=-1;return}else if(Ot.__webglFramebuffer===void 0)Z.setupRenderTarget(w);else if(Ot.__hasExternalTextures)Z.rebindTextures(w,b.get(w.texture).__webglTexture,b.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Jt=w.depthTexture;if(Ot.__boundDepthTexture!==Jt){if(Jt!==null&&b.has(Jt)&&(w.width!==Jt.image.width||w.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(w)}}const Gt=w.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Ut=!0);const Wt=b.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Wt[Q])?rt=Wt[Q][lt]:rt=Wt[Q],$=!0):w.samples>0&&Z.useMultisampledRTT(w)===!1?rt=b.get(w).__webglMultisampledFramebuffer:Array.isArray(Wt)?rt=Wt[lt]:rt=Wt,C.copy(w.viewport),L.copy(w.scissor),q=w.scissorTest}else C.copy(st).multiplyScalar(ht).floor(),L.copy(mt).multiplyScalar(ht).floor(),q=Dt;if(lt!==0&&(rt=ya),Yt.bindFramebuffer(V.FRAMEBUFFER,rt)&&Yt.drawBuffers(w,rt),Yt.viewport(C),Yt.scissor(L),Yt.setScissorTest(q),$){const Ot=b.get(w.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ot.__webglTexture,lt)}else if(Ut){const Ot=Q;for(let Gt=0;Gt<w.textures.length;Gt++){const Wt=b.get(w.textures[Gt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Gt,Wt.__webglTexture,lt,Ot)}}else if(w!==null&&lt!==0){const Ot=b.get(w.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ot.__webglTexture,lt)}ut=-1},this.readRenderTargetPixels=function(w,Q,lt,rt,$,Ut,Bt,Ot=0){if(!(w&&w.isWebGLRenderTarget)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=b.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Bt!==void 0&&(Gt=Gt[Bt]),Gt){Yt.bindFramebuffer(V.FRAMEBUFFER,Gt);try{const Wt=w.textures[Ot],Jt=Wt.format,qt=Wt.type;if(!Pe.textureFormatReadable(Jt)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(qt)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=w.width-rt&&lt>=0&&lt<=w.height-$&&(w.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ot),V.readPixels(Q,lt,rt,$,At.convert(Jt),At.convert(qt),Ut))}finally{const Wt=nt!==null?b.get(nt).__webglFramebuffer:null;Yt.bindFramebuffer(V.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(w,Q,lt,rt,$,Ut,Bt,Ot=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=b.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Bt!==void 0&&(Gt=Gt[Bt]),Gt)if(Q>=0&&Q<=w.width-rt&&lt>=0&&lt<=w.height-$){Yt.bindFramebuffer(V.FRAMEBUFFER,Gt);const Wt=w.textures[Ot],Jt=Wt.format,qt=Wt.type;if(!Pe.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,$t),V.bufferData(V.PIXEL_PACK_BUFFER,Ut.byteLength,V.STREAM_READ),w.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ot),V.readPixels(Q,lt,rt,$,At.convert(Jt),At.convert(qt),0);const Ue=nt!==null?b.get(nt).__webglFramebuffer:null;Yt.bindFramebuffer(V.FRAMEBUFFER,Ue);const Qe=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await SM(V,Qe,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,$t),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ut),V.deleteBuffer($t),V.deleteSync(Qe),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Q=null,lt=0){const rt=Math.pow(2,-lt),$=Math.floor(w.image.width*rt),Ut=Math.floor(w.image.height*rt),Bt=Q!==null?Q.x:0,Ot=Q!==null?Q.y:0;Z.setTexture2D(w,0),V.copyTexSubImage2D(V.TEXTURE_2D,lt,0,0,Bt,Ot,$,Ut),Yt.unbindTexture()};const ss=V.createFramebuffer(),ba=V.createFramebuffer();this.copyTextureToTexture=function(w,Q,lt=null,rt=null,$=0,Ut=null){Ut===null&&($!==0?(jo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ut=$,$=0):Ut=0);let Bt,Ot,Gt,Wt,Jt,qt,$t,Ue,Qe;const Ye=w.isCompressedTexture?w.mipmaps[Ut]:w.image;if(lt!==null)Bt=lt.max.x-lt.min.x,Ot=lt.max.y-lt.min.y,Gt=lt.isBox3?lt.max.z-lt.min.z:1,Wt=lt.min.x,Jt=lt.min.y,qt=lt.isBox3?lt.min.z:0;else{const pn=Math.pow(2,-$);Bt=Math.floor(Ye.width*pn),Ot=Math.floor(Ye.height*pn),w.isDataArrayTexture?Gt=Ye.depth:w.isData3DTexture?Gt=Math.floor(Ye.depth*pn):Gt=1,Wt=0,Jt=0,qt=0}rt!==null?($t=rt.x,Ue=rt.y,Qe=rt.z):($t=0,Ue=0,Qe=0);const ze=At.convert(Q.format),Kt=At.convert(Q.type);let Ne;Q.isData3DTexture?(Z.setTexture3D(Q,0),Ne=V.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(Z.setTexture2DArray(Q,0),Ne=V.TEXTURE_2D_ARRAY):(Z.setTexture2D(Q,0),Ne=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Q.unpackAlignment);const ae=V.getParameter(V.UNPACK_ROW_LENGTH),Mn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),qi=V.getParameter(V.UNPACK_SKIP_PIXELS),yn=V.getParameter(V.UNPACK_SKIP_ROWS),oi=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ye.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ye.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Wt),V.pixelStorei(V.UNPACK_SKIP_ROWS,Jt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,qt);const Ie=w.isDataArrayTexture||w.isData3DTexture,bn=Q.isDataArrayTexture||Q.isData3DTexture;if(w.isDepthTexture){const pn=b.get(w),En=b.get(Q),Tn=b.get(pn.__renderTarget),Bs=b.get(En.__renderTarget);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Bs.__webglFramebuffer);for(let Mi=0;Mi<Gt;Mi++)Ie&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(w).__webglTexture,$,qt+Mi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(Q).__webglTexture,Ut,Qe+Mi)),V.blitFramebuffer(Wt,Jt,Bt,Ot,$t,Ue,Bt,Ot,V.DEPTH_BUFFER_BIT,V.NEAREST);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if($!==0||w.isRenderTargetTexture||b.has(w)){const pn=b.get(w),En=b.get(Q);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,ss),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,ba);for(let Tn=0;Tn<Gt;Tn++)Ie?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,pn.__webglTexture,$,qt+Tn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,pn.__webglTexture,$),bn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,En.__webglTexture,Ut,Qe+Tn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,En.__webglTexture,Ut),$!==0?V.blitFramebuffer(Wt,Jt,Bt,Ot,$t,Ue,Bt,Ot,V.COLOR_BUFFER_BIT,V.NEAREST):bn?V.copyTexSubImage3D(Ne,Ut,$t,Ue,Qe+Tn,Wt,Jt,Bt,Ot):V.copyTexSubImage2D(Ne,Ut,$t,Ue,Wt,Jt,Bt,Ot);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else bn?w.isDataTexture||w.isData3DTexture?V.texSubImage3D(Ne,Ut,$t,Ue,Qe,Bt,Ot,Gt,ze,Kt,Ye.data):Q.isCompressedArrayTexture?V.compressedTexSubImage3D(Ne,Ut,$t,Ue,Qe,Bt,Ot,Gt,ze,Ye.data):V.texSubImage3D(Ne,Ut,$t,Ue,Qe,Bt,Ot,Gt,ze,Kt,Ye):w.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ut,$t,Ue,Bt,Ot,ze,Kt,Ye.data):w.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ut,$t,Ue,Ye.width,Ye.height,ze,Ye.data):V.texSubImage2D(V.TEXTURE_2D,Ut,$t,Ue,Bt,Ot,ze,Kt,Ye);V.pixelStorei(V.UNPACK_ROW_LENGTH,ae),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Mn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,qi),V.pixelStorei(V.UNPACK_SKIP_ROWS,yn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,oi),Ut===0&&Q.generateMipmaps&&V.generateMipmap(Ne),Yt.unbindTexture()},this.initRenderTarget=function(w){b.get(w).__webglFramebuffer===void 0&&Z.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Z.setTextureCube(w,0):w.isData3DTexture?Z.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Z.setTexture2DArray(w,0):Z.setTexture2D(w,0),Yt.unbindTexture()},this.resetState=function(){H=0,K=0,nt=null,Yt.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ee._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ee._getUnpackColorSpace()}}const ZT=()=>{const o=we.useRef(null),e=we.useRef(null),i=we.useRef(0),s=we.useRef(0);return we.useEffect(()=>{if(!o.current)return;const l=o.current,c=e.current;if(!c)return;const h=new el;h.background=new Me(16777215);const d=new zn(50,c.clientWidth/c.clientHeight,.1,1e3);d.position.set(0,0,12);const m=new rl({canvas:l,antialias:!0,alpha:!0});m.setSize(c.clientWidth,c.clientHeight),m.setPixelRatio(Math.min(window.devicePixelRatio,2));const p=new Hi;h.add(p);const v=3.5,g=new il(v,2),S=new Xi({color:657930,wireframe:!0,transparent:!0,opacity:.5}),y=new Un(g,S);p.add(y);const E=g.attributes.position.array,T=new Ve;T.setAttribute("position",new In(E.slice(),3));const M=new is({color:657930,size:.12,transparent:!0,opacity:.9}),_=new Os(T,M);p.add(_);const D=new Hi;p.add(D);const P=120,N=[];for(let C=0;C<P;C++){const L=Math.random()*Math.PI*2,q=7+Math.random()*5,ft=(Math.random()-.5)*8;N.push(Math.cos(L)*q,ft,Math.sin(L)*q)}const z=new Ve;z.setAttribute("position",new Oe(N,3));const B=new is({color:657930,size:.08,transparent:!0,opacity:.35}),I=new Os(z,B);D.add(I);const X=new Ve,A=[];for(let C=0;C<P;C++)for(let L=C+1;L<P;L++){const q=N[C*3]-N[L*3],ft=N[C*3+1]-N[L*3+1],pt=N[C*3+2]-N[L*3+2];Math.sqrt(q*q+ft*ft+pt*pt)<4&&Math.random()<.04&&A.push(N[C*3],N[C*3+1],N[C*3+2],N[L*3],N[L*3+1],N[L*3+2])}X.setAttribute("position",new Oe(A,3));const U=new ns({color:657930,transparent:!0,opacity:.08}),H=new nl(X,U);D.add(H),p.position.set(5,0,-2),p.rotation.y=-Math.PI/4,p.scale.setScalar(1.3);const K=new sl,nt=()=>{requestAnimationFrame(nt);const C=K.getElapsedTime();i.current+=(s.current-i.current)*.1,y.rotation.y=C*.08,_.rotation.y=C*.08,D.rotation.y=C*.04,B.opacity=.35+Math.sin(C*2)*.1,U.opacity=.08+Math.sin(C*1.5)*.02;const L=Math.min(i.current/800,1),q=1-Math.pow(1-L,3),ft=5,pt=2,O=-2,et=-1;p.position.x=ft+(pt-ft)*q,p.position.z=O+(et-O)*q,p.position.y=Math.sin(C*.4)*.08;const ht=-Math.PI/4,Et=-Math.PI/6;p.rotation.y=ht+(Et-ht)*q;const Nt=1.3;p.scale.setScalar(Nt+(1-Nt)*q),m.render(h,d)},ut=()=>{s.current=window.scrollY};window.addEventListener("scroll",ut,{passive:!0});const Y=()=>{d.aspect=c.clientWidth/c.clientHeight,d.updateProjectionMatrix(),m.setSize(c.clientWidth,c.clientHeight)};return window.addEventListener("resize",Y),nt(),()=>{window.removeEventListener("scroll",ut),window.removeEventListener("resize",Y),m.dispose()}},[]),j.jsxs("section",{"code-path":"src/sections/HeroSection.tsx:205:5",ref:e,id:"about",className:"relative h-screen w-full overflow-hidden bg-white",children:[j.jsx("canvas",{"code-path":"src/sections/HeroSection.tsx:211:7",ref:o,className:"absolute inset-0 w-full h-full",style:{zIndex:1}}),j.jsx("div",{"code-path":"src/sections/HeroSection.tsx:218:7",className:"relative z-10 h-full flex items-center px-6 lg:px-16",children:j.jsxs("div",{"code-path":"src/sections/HeroSection.tsx:219:9",className:"max-w-2xl",children:[j.jsxs("h1",{"code-path":"src/sections/HeroSection.tsx:220:11",className:"heading-xl text-black mb-6",children:["Investors in",j.jsx("br",{"code-path":"src/sections/HeroSection.tsx:222:13"}),"Financial Services"]}),j.jsx("p",{"code-path":"src/sections/HeroSection.tsx:225:11",className:"text-xl lg:text-2xl text-gray-600 mb-8 font-light leading-relaxed",children:"Strategic investments across Europe with operational excellence"}),j.jsxs("div",{"code-path":"src/sections/HeroSection.tsx:228:11",className:"flex flex-wrap gap-6 text-sm uppercase tracking-widest text-gray-500 font-semibold",children:[j.jsxs("span",{"code-path":"src/sections/HeroSection.tsx:229:13",className:"flex items-center gap-2",children:[j.jsx("span",{"code-path":"src/sections/HeroSection.tsx:230:15",className:"w-1.5 h-1.5 bg-black rounded-full"}),"Entrepreneurial"]}),j.jsxs("span",{"code-path":"src/sections/HeroSection.tsx:233:13",className:"flex items-center gap-2",children:[j.jsx("span",{"code-path":"src/sections/HeroSection.tsx:234:15",className:"w-1.5 h-1.5 bg-black rounded-full"}),"Specialized"]}),j.jsxs("span",{"code-path":"src/sections/HeroSection.tsx:237:13",className:"flex items-center gap-2",children:[j.jsx("span",{"code-path":"src/sections/HeroSection.tsx:238:15",className:"w-1.5 h-1.5 bg-black rounded-full"}),"Value Creation"]})]})]})}),j.jsxs("div",{"code-path":"src/sections/HeroSection.tsx:246:7",className:"absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gray-400 animate-bounce",children:[j.jsx("span",{"code-path":"src/sections/HeroSection.tsx:247:9",className:"text-xs uppercase tracking-widest",children:"Scroll"}),j.jsx("svg",{"code-path":"src/sections/HeroSection.tsx:248:9",className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:j.jsx("path",{"code-path":"src/sections/HeroSection.tsx:249:11",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 14l-7 7m0 0l-7-7m7 7V3"})})]})]})},KT=()=>{const o=we.useRef(null),e=we.useRef(null),i=we.useRef(0),s=we.useRef(0);return we.useEffect(()=>{if(!o.current||!e.current)return;const l=o.current,c=e.current,h=new el;h.background=new Me(16777215);const d=new zn(60,c.clientWidth/c.clientHeight,.1,1e3);d.position.set(0,8,12),d.lookAt(0,0,0);const m=new rl({canvas:l,antialias:!0,alpha:!0});m.setSize(c.clientWidth,c.clientHeight),m.setPixelRatio(Math.min(window.devicePixelRatio,2));const p=new Hi;h.add(p);const v=60,g=80,S=new al(v,v,g,g),y=S.attributes.position.array.slice(),E=new Xi({color:657930,wireframe:!0,transparent:!0,opacity:.4}),T=new Un(S,E);T.rotation.x=-Math.PI/2.5,T.position.y=-2,p.add(T);const M=150,_=new Float32Array(M*3),D=[];for(let Y=0;Y<M;Y++)_[Y*3]=(Math.random()-.5)*40,_[Y*3+1]=Math.random()*8,_[Y*3+2]=(Math.random()-.5)*40,D.push(.5+Math.random()*1);const P=new Ve;P.setAttribute("position",new In(_,3));const N=new is({color:657930,size:.15,transparent:!0,opacity:.6}),z=new Os(P,N);p.add(z);const B=new Ve,I=new ns({color:657930,transparent:!0,opacity:.1}),X=new nl(B,I);p.add(X);const A=new sl,U=Y=>{const C=S.attributes.position.array;for(let L=0;L<C.length;L+=3){const q=y[L],ft=y[L+1],pt=Math.sin(q*.3+Y*.8)*.8,O=Math.sin(ft*.2+Y*.6)*.6,et=Math.sin((q+ft)*.15+Y*.4)*.4,ht=Math.sin(Math.sqrt(q*q+ft*ft)*.1-Y*.5)*.5;C[L+2]=pt+O+et+ht}S.attributes.position.needsUpdate=!0},H=(Y,C)=>{const L=P.attributes.position.array;for(let O=0;O<M;O++)L[O*3+1]+=D[O]*C*.5,L[O*3+1]>10&&(L[O*3+1]=-2,L[O*3]=(Math.random()-.5)*40,L[O*3+2]=(Math.random()-.5)*40),L[O*3]+=Math.sin(Y+O)*.01,L[O*3+2]+=Math.cos(Y+O*.5)*.01;P.attributes.position.needsUpdate=!0;const q=[],ft=6,pt=3;for(let O=0;O<M;O++){let et=0;for(let ht=O+1;ht<M&&et<pt;ht++){const Et=L[O*3]-L[ht*3],Nt=L[O*3+1]-L[ht*3+1],st=L[O*3+2]-L[ht*3+2];Math.sqrt(Et*Et+Nt*Nt+st*st)<ft&&(q.push(L[O*3],L[O*3+1],L[O*3+2],L[ht*3],L[ht*3+1],L[ht*3+2]),et++)}}B.setAttribute("position",new Oe(q,3))},K=()=>{requestAnimationFrame(K);const Y=A.getElapsedTime(),C=A.getDelta();i.current+=(s.current-i.current)*.08,U(Y),H(Y,C);const L=i.current;p.rotation.y=L*.3,p.rotation.z=L*.1,d.position.x=Math.sin(L*.5)*2,d.lookAt(0,0,0),m.render(h,d)},nt=new IntersectionObserver(Y=>{Y.forEach(C=>{if(C.isIntersecting){const L=C.intersectionRatio;s.current=L}})},{threshold:Array.from({length:100},(Y,C)=>C/100),rootMargin:"-10% 0px -10% 0px"});nt.observe(c);const ut=()=>{d.aspect=c.clientWidth/c.clientHeight,d.updateProjectionMatrix(),m.setSize(c.clientWidth,c.clientHeight)};return window.addEventListener("resize",ut),K(),()=>{nt.disconnect(),window.removeEventListener("resize",ut),m.dispose()}},[]),j.jsxs("section",{"code-path":"src/sections/WaveSection.tsx:238:5",ref:e,id:"strategy",className:"relative min-h-screen w-full overflow-hidden bg-white",children:[j.jsx("canvas",{"code-path":"src/sections/WaveSection.tsx:244:7",ref:o,className:"absolute inset-0 w-full h-full",style:{zIndex:1}}),j.jsx("div",{"code-path":"src/sections/WaveSection.tsx:251:7",className:"relative z-10 min-h-screen flex items-center px-6 lg:px-16 py-24",children:j.jsx("div",{"code-path":"src/sections/WaveSection.tsx:252:9",className:"w-full max-w-7xl mx-auto",children:j.jsxs("div",{"code-path":"src/sections/WaveSection.tsx:253:11",className:"grid lg:grid-cols-2 gap-16 items-center",children:[j.jsxs("div",{"code-path":"src/sections/WaveSection.tsx:255:13",className:"space-y-8",children:[j.jsxs("div",{"code-path":"src/sections/WaveSection.tsx:256:15",children:[j.jsx("span",{"code-path":"src/sections/WaveSection.tsx:257:17",className:"text-sm uppercase tracking-widest text-gray-500 font-semibold mb-4 block",children:"Our Approach"}),j.jsxs("h2",{"code-path":"src/sections/WaveSection.tsx:260:17",className:"heading-lg text-black mb-6",children:["Strategic",j.jsx("br",{"code-path":"src/sections/WaveSection.tsx:262:19"}),"Investment"]}),j.jsx("p",{"code-path":"src/sections/WaveSection.tsx:265:17",className:"text-body max-w-lg",children:"We combine deep sector expertise with hands-on operational capabilities to transform financial services businesses across Europe."})]}),j.jsxs("div",{"code-path":"src/sections/WaveSection.tsx:272:15",className:"space-y-4",children:[j.jsxs("div",{"code-path":"src/sections/WaveSection.tsx:273:17",className:"group p-6 border-2 border-black hover:bg-black transition-all duration-500 cursor-pointer",children:[j.jsx("h3",{"code-path":"src/sections/WaveSection.tsx:274:19",className:"text-xl font-bold uppercase tracking-wide mb-2 group-hover:text-white transition-colors",children:"Buyout Strategy"}),j.jsx("p",{"code-path":"src/sections/WaveSection.tsx:277:19",className:"text-gray-600 group-hover:text-gray-300 transition-colors",children:"Investing in high-quality financial services companies with proven cash flows and scalable operations."})]}),j.jsxs("div",{"code-path":"src/sections/WaveSection.tsx:283:17",className:"group p-6 border-2 border-black hover:bg-black transition-all duration-500 cursor-pointer",children:[j.jsx("h3",{"code-path":"src/sections/WaveSection.tsx:284:19",className:"text-xl font-bold uppercase tracking-wide mb-2 group-hover:text-white transition-colors",children:"Growth Strategy"}),j.jsx("p",{"code-path":"src/sections/WaveSection.tsx:287:19",className:"text-gray-600 group-hover:text-gray-300 transition-colors",children:"Backing innovative FinTech companies reshaping the future of financial services and digital transformation."})]})]})]}),j.jsx("div",{"code-path":"src/sections/WaveSection.tsx:296:13",className:"lg:pl-12",children:j.jsxs("div",{"code-path":"src/sections/WaveSection.tsx:297:15",className:"grid grid-cols-2 gap-8",children:[j.jsxs("div",{"code-path":"src/sections/WaveSection.tsx:298:17",className:"text-center p-8 border border-gray-200 hover:border-black transition-colors",children:[j.jsx("div",{"code-path":"src/sections/WaveSection.tsx:299:19",className:"text-5xl lg:text-6xl font-extrabold text-black mb-2",children:"€2.5B"}),j.jsx("div",{"code-path":"src/sections/WaveSection.tsx:302:19",className:"text-sm uppercase tracking-widest text-gray-500",children:"Assets Under Management"})]}),j.jsxs("div",{"code-path":"src/sections/WaveSection.tsx:307:17",className:"text-center p-8 border border-gray-200 hover:border-black transition-colors",children:[j.jsx("div",{"code-path":"src/sections/WaveSection.tsx:308:19",className:"text-5xl lg:text-6xl font-extrabold text-black mb-2",children:"15+"}),j.jsx("div",{"code-path":"src/sections/WaveSection.tsx:311:19",className:"text-sm uppercase tracking-widest text-gray-500",children:"Portfolio Companies"})]}),j.jsxs("div",{"code-path":"src/sections/WaveSection.tsx:316:17",className:"text-center p-8 border border-gray-200 hover:border-black transition-colors",children:[j.jsx("div",{"code-path":"src/sections/WaveSection.tsx:317:19",className:"text-5xl lg:text-6xl font-extrabold text-black mb-2",children:"25%"}),j.jsx("div",{"code-path":"src/sections/WaveSection.tsx:320:19",className:"text-sm uppercase tracking-widest text-gray-500",children:"Average IRR"})]}),j.jsxs("div",{"code-path":"src/sections/WaveSection.tsx:325:17",className:"text-center p-8 border border-gray-200 hover:border-black transition-colors",children:[j.jsx("div",{"code-path":"src/sections/WaveSection.tsx:326:19",className:"text-5xl lg:text-6xl font-extrabold text-black mb-2",children:"5"}),j.jsx("div",{"code-path":"src/sections/WaveSection.tsx:329:19",className:"text-sm uppercase tracking-widest text-gray-500",children:"European Offices"})]})]})})]})})})]})},QT=()=>{const o=we.useRef(null),e=we.useRef(null),i=we.useRef(0),s=we.useRef(0);return we.useEffect(()=>{if(!o.current||!e.current)return;const l=o.current,c=e.current,h=new el;h.background=new Me(16777215);const d=new zn(55,c.clientWidth/c.clientHeight,.1,1e3);d.position.set(0,0,18);const m=new rl({canvas:l,antialias:!0,alpha:!0});m.setSize(c.clientWidth,c.clientHeight),m.setPixelRatio(Math.min(window.devicePixelRatio,2));const p=new Hi;h.add(p);const v=[],g=12;for(let Y=0;Y<g;Y++){const C=3+Y*.9,L=64+Y*8,q=new Ve,ft=[];for(let Et=0;Et<=L;Et++){const Nt=Et/L*Math.PI*2;ft.push(Math.cos(Nt)*C,Math.sin(Nt)*C,0)}q.setAttribute("position",new Oe(ft,3));const pt=new ns({color:657930,transparent:!0,opacity:.15+(g-Y)*.03}),O=new Jd(q,pt),et=(Math.random()-.5)*Math.PI*.6,ht=(Math.random()-.5)*Math.PI*.6;O.rotation.x=et,O.rotation.z=ht,p.add(O),v.push({mesh:O,radius:C,speed:(.1+Math.random()*.2)*(Y%2===0?1:-1),tiltX:et,tiltZ:ht,phase:Math.random()*Math.PI*2})}const S=40,y=[],E=new tu(1,8,8);for(let Y=0;Y<S;Y++){const C=Math.floor(Math.random()*g),L=new Xi({color:657930,transparent:!0,opacity:.7+Math.random()*.3}),q=new Un(E,L),ft=.08+Math.random()*.1;q.scale.setScalar(ft),p.add(q),y.push({mesh:q,ringIndex:C,angle:Math.random()*Math.PI*2,speed:(.3+Math.random()*.5)*(Math.random()>.5?1:-1),size:ft})}const T=new il(1.2,1),M=new Xi({color:657930,wireframe:!0,transparent:!0,opacity:.5}),_=new Un(T,M);p.add(_);const D=new Ve,P=T.attributes.position.array.slice();D.setAttribute("position",new In(P,3));const N=new is({color:657930,size:.1,transparent:!0,opacity:.9}),z=new Os(D,N);p.add(z);const B=20,I=new Ve,X=[];for(let Y=0;Y<B;Y++){const C=Y/B*Math.PI*2;X.push(0,0,0),X.push(Math.cos(C)*12,Math.sin(C)*12,0)}I.setAttribute("position",new Oe(X,3));const A=new ns({color:657930,transparent:!0,opacity:.08}),U=new nl(I,A);p.add(U);const H=new sl,K=()=>{requestAnimationFrame(K);const Y=H.getElapsedTime();i.current+=(s.current-i.current)*.08,v.forEach(L=>{L.mesh.rotation.z+=L.speed*.01,L.mesh.rotation.x=L.tiltX+Math.sin(Y*.5+L.phase)*.05,L.mesh.rotation.y=Math.sin(Y*.3+L.phase)*.03}),y.forEach(L=>{const q=v[L.ringIndex];L.angle+=L.speed*.01;const ft=Math.cos(L.angle)*q.radius,pt=Math.sin(L.angle)*q.radius,O=new tt(ft,pt,0);O.applyEuler(q.mesh.rotation),L.mesh.position.copy(O);const et=1+Math.sin(Y*3+L.angle)*.2;L.mesh.scale.setScalar(L.size*et)}),_.rotation.y=Y*.2,_.rotation.x=Math.sin(Y*.3)*.1,z.rotation.y=Y*.2,z.rotation.x=Math.sin(Y*.3)*.1,U.rotation.z=Y*.02;const C=i.current;p.rotation.y=C*.5,p.rotation.x=C*.2,d.position.x=Math.sin(Y*.1)*.5,d.position.y=Math.cos(Y*.15)*.3,d.lookAt(0,0,0),m.render(h,d)},nt=new IntersectionObserver(Y=>{Y.forEach(C=>{C.isIntersecting&&(s.current=C.intersectionRatio)})},{threshold:Array.from({length:100},(Y,C)=>C/100),rootMargin:"-10% 0px -10% 0px"});nt.observe(c);const ut=()=>{d.aspect=c.clientWidth/c.clientHeight,d.updateProjectionMatrix(),m.setSize(c.clientWidth,c.clientHeight)};return window.addEventListener("resize",ut),K(),()=>{nt.disconnect(),window.removeEventListener("resize",ut),m.dispose()}},[]),j.jsxs("section",{"code-path":"src/sections/OrbitSection.tsx:289:5",ref:e,id:"innovation",className:"relative min-h-screen w-full overflow-hidden bg-white",children:[j.jsx("canvas",{"code-path":"src/sections/OrbitSection.tsx:295:7",ref:o,className:"absolute inset-0 w-full h-full",style:{zIndex:1}}),j.jsx("div",{"code-path":"src/sections/OrbitSection.tsx:302:7",className:"relative z-10 min-h-screen flex items-center px-6 lg:px-16 py-24",children:j.jsx("div",{"code-path":"src/sections/OrbitSection.tsx:303:9",className:"w-full max-w-7xl mx-auto",children:j.jsxs("div",{"code-path":"src/sections/OrbitSection.tsx:304:11",className:"grid lg:grid-cols-2 gap-16 items-center",children:[j.jsxs("div",{"code-path":"src/sections/OrbitSection.tsx:306:13",className:"space-y-6 order-2 lg:order-1",children:[j.jsx("div",{"code-path":"src/sections/OrbitSection.tsx:307:15",className:"group p-8 border-2 border-black hover:bg-black transition-all duration-500",children:j.jsxs("div",{"code-path":"src/sections/OrbitSection.tsx:308:17",className:"flex items-start gap-4",children:[j.jsx("div",{"code-path":"src/sections/OrbitSection.tsx:309:19",className:"w-12 h-12 border-2 border-black group-hover:border-white flex items-center justify-center transition-colors",children:j.jsx("svg",{"code-path":"src/sections/OrbitSection.tsx:310:21",className:"w-6 h-6 group-hover:text-white transition-colors",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:j.jsx("path",{"code-path":"src/sections/OrbitSection.tsx:316:23",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),j.jsxs("div",{"code-path":"src/sections/OrbitSection.tsx:324:19",children:[j.jsx("h3",{"code-path":"src/sections/OrbitSection.tsx:325:21",className:"text-xl font-bold uppercase tracking-wide mb-2 group-hover:text-white transition-colors",children:"Digital Transformation"}),j.jsx("p",{"code-path":"src/sections/OrbitSection.tsx:328:21",className:"text-gray-600 group-hover:text-gray-300 transition-colors",children:"Leveraging cutting-edge technology to modernize legacy systems and create seamless digital experiences."})]})]})}),j.jsx("div",{"code-path":"src/sections/OrbitSection.tsx:336:15",className:"group p-8 border-2 border-black hover:bg-black transition-all duration-500",children:j.jsxs("div",{"code-path":"src/sections/OrbitSection.tsx:337:17",className:"flex items-start gap-4",children:[j.jsx("div",{"code-path":"src/sections/OrbitSection.tsx:338:19",className:"w-12 h-12 border-2 border-black group-hover:border-white flex items-center justify-center transition-colors",children:j.jsx("svg",{"code-path":"src/sections/OrbitSection.tsx:339:21",className:"w-6 h-6 group-hover:text-white transition-colors",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:j.jsx("path",{"code-path":"src/sections/OrbitSection.tsx:345:23",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})})}),j.jsxs("div",{"code-path":"src/sections/OrbitSection.tsx:353:19",children:[j.jsx("h3",{"code-path":"src/sections/OrbitSection.tsx:354:21",className:"text-xl font-bold uppercase tracking-wide mb-2 group-hover:text-white transition-colors",children:"Data Analytics"}),j.jsx("p",{"code-path":"src/sections/OrbitSection.tsx:357:21",className:"text-gray-600 group-hover:text-gray-300 transition-colors",children:"Harnessing the power of big data and AI to drive intelligent decision-making and predictive insights."})]})]})}),j.jsx("div",{"code-path":"src/sections/OrbitSection.tsx:365:15",className:"group p-8 border-2 border-black hover:bg-black transition-all duration-500",children:j.jsxs("div",{"code-path":"src/sections/OrbitSection.tsx:366:17",className:"flex items-start gap-4",children:[j.jsx("div",{"code-path":"src/sections/OrbitSection.tsx:367:19",className:"w-12 h-12 border-2 border-black group-hover:border-white flex items-center justify-center transition-colors",children:j.jsx("svg",{"code-path":"src/sections/OrbitSection.tsx:368:21",className:"w-6 h-6 group-hover:text-white transition-colors",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:j.jsx("path",{"code-path":"src/sections/OrbitSection.tsx:374:23",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})})}),j.jsxs("div",{"code-path":"src/sections/OrbitSection.tsx:382:19",children:[j.jsx("h3",{"code-path":"src/sections/OrbitSection.tsx:383:21",className:"text-xl font-bold uppercase tracking-wide mb-2 group-hover:text-white transition-colors",children:"Cybersecurity"}),j.jsx("p",{"code-path":"src/sections/OrbitSection.tsx:386:21",className:"text-gray-600 group-hover:text-gray-300 transition-colors",children:"Implementing robust security frameworks to protect assets and ensure regulatory compliance."})]})]})})]}),j.jsxs("div",{"code-path":"src/sections/OrbitSection.tsx:396:13",className:"order-1 lg:order-2 lg:pl-12",children:[j.jsx("span",{"code-path":"src/sections/OrbitSection.tsx:397:15",className:"text-sm uppercase tracking-widest text-gray-500 font-semibold mb-4 block",children:"Innovation Hub"}),j.jsxs("h2",{"code-path":"src/sections/OrbitSection.tsx:400:15",className:"heading-lg text-black mb-6",children:["Technology",j.jsx("br",{"code-path":"src/sections/OrbitSection.tsx:402:17"}),"& Innovation"]}),j.jsx("p",{"code-path":"src/sections/OrbitSection.tsx:405:15",className:"text-body mb-8",children:"We invest in the future of finance. Our portfolio companies leverage emerging technologies to create competitive advantages and deliver exceptional value to their customers."}),j.jsxs("div",{"code-path":"src/sections/OrbitSection.tsx:411:15",className:"flex flex-wrap gap-4",children:[j.jsx("span",{"code-path":"src/sections/OrbitSection.tsx:412:17",className:"px-4 py-2 border border-gray-300 text-sm uppercase tracking-wider hover:border-black hover:bg-black hover:text-white transition-all cursor-pointer",children:"AI & Machine Learning"}),j.jsx("span",{"code-path":"src/sections/OrbitSection.tsx:415:17",className:"px-4 py-2 border border-gray-300 text-sm uppercase tracking-wider hover:border-black hover:bg-black hover:text-white transition-all cursor-pointer",children:"Blockchain"}),j.jsx("span",{"code-path":"src/sections/OrbitSection.tsx:418:17",className:"px-4 py-2 border border-gray-300 text-sm uppercase tracking-wider hover:border-black hover:bg-black hover:text-white transition-all cursor-pointer",children:"Cloud Infrastructure"}),j.jsx("span",{"code-path":"src/sections/OrbitSection.tsx:421:17",className:"px-4 py-2 border border-gray-300 text-sm uppercase tracking-wider hover:border-black hover:bg-black hover:text-white transition-all cursor-pointer",children:"API-First"})]})]})]})})})]})},JT=[{city:"Paris",address:`2 Place Rio de Janeiro
75008 Paris`},{city:"Amsterdam",address:`43 Roemer Visscherstraat
1054 EW Amsterdam`},{city:"Brussels",address:`106 Avenue Louise
1050 Brussels`},{city:"Frankfurt",address:`Ulmenstrasse 37-39
60325 Frankfurt`},{city:"London",address:`40 Bruton Street
London W1J 6QZ`}],$T=()=>{const o=we.useRef(null),e=we.useRef(null),i=we.useRef(0),s=we.useRef(0);return we.useEffect(()=>{if(!o.current||!e.current)return;const l=o.current,c=e.current,h=new el;h.background=new Me(16777215);const d=new zn(60,c.clientWidth/c.clientHeight,.1,1e3);d.position.set(0,0,15);const m=new rl({canvas:l,antialias:!0,alpha:!0});m.setSize(c.clientWidth,c.clientHeight),m.setPixelRatio(Math.min(window.devicePixelRatio,2));const p=new Hi;h.add(p);const v={Paris:{x:-1,y:1.5,z:0},Amsterdam:{x:-.5,y:2.5,z:0},Brussels:{x:-.8,y:2.2,z:0},Frankfurt:{x:.2,y:2,z:0},London:{x:-1.5,y:2.8,z:0}},g=[];Object.entries(v).forEach(([H,K])=>{const nt=new tu(.15,16,16),ut=new Xi({color:657930,transparent:!0,opacity:.9}),Y=new Un(nt,ut);Y.position.set(K.x*2,K.y*2,K.z),p.add(Y),g.push(Y);const C=new tp(.2,.25,32),L=new Xi({color:657930,transparent:!0,opacity:.4,side:Fi}),q=new Un(C,L);q.position.set(K.x*2,K.y*2,K.z),q.lookAt(0,0,10),p.add(q),H==="Paris"&&Object.entries(v).forEach(([ft,pt])=>{if(ft!==H){const O=new Ve,et=[K.x*2,K.y*2,K.z,pt.x*2,pt.y*2,pt.z];O.setAttribute("position",new Oe(et,3));const ht=new ns({color:657930,transparent:!0,opacity:.15}),Et=new Jd(O,ht);p.add(Et)}})});const S=30,y=20,E=new Ve,T=[];for(let H=0;H<=y;H++){const K=(H/y-.5)*S;T.push(-S/2,K,-5),T.push(S/2,K,-5),T.push(K,-S/2,-5),T.push(K,S/2,-5)}E.setAttribute("position",new Oe(T,3));const M=new ns({color:657930,transparent:!0,opacity:.08}),_=new nl(E,M);p.add(_);const D=80,P=new Ve,N=new Float32Array(D*3);for(let H=0;H<D;H++)N[H*3]=(Math.random()-.5)*25,N[H*3+1]=(Math.random()-.5)*20,N[H*3+2]=(Math.random()-.5)*10;P.setAttribute("position",new In(N,3));const z=new is({color:657930,size:.1,transparent:!0,opacity:.4}),B=new Os(P,z);p.add(B);const I=new sl,X=()=>{requestAnimationFrame(X);const H=I.getElapsedTime();i.current+=(s.current-i.current)*.08,g.forEach((nt,ut)=>{const Y=1+Math.sin(H*2+ut)*.2;nt.scale.setScalar(Y)}),p.rotation.y=Math.sin(H*.1)*.05,p.rotation.x=Math.cos(H*.08)*.03;const K=i.current;p.position.y=K*1,m.render(h,d)},A=new IntersectionObserver(H=>{H.forEach(K=>{K.isIntersecting&&(s.current=K.intersectionRatio)})},{threshold:Array.from({length:100},(H,K)=>K/100),rootMargin:"-10% 0px -10% 0px"});A.observe(c);const U=()=>{d.aspect=c.clientWidth/c.clientHeight,d.updateProjectionMatrix(),m.setSize(c.clientWidth,c.clientHeight)};return window.addEventListener("resize",U),X(),()=>{A.disconnect(),window.removeEventListener("resize",U),m.dispose()}},[]),j.jsxs("section",{"code-path":"src/sections/LocationsSection.tsx:232:5",ref:e,id:"presence",className:"relative min-h-screen w-full overflow-hidden bg-white",children:[j.jsx("canvas",{"code-path":"src/sections/LocationsSection.tsx:238:7",ref:o,className:"absolute inset-0 w-full h-full",style:{zIndex:1}}),j.jsx("div",{"code-path":"src/sections/LocationsSection.tsx:245:7",className:"relative z-10 min-h-screen flex items-center px-6 lg:px-16 py-24",children:j.jsxs("div",{"code-path":"src/sections/LocationsSection.tsx:246:9",className:"w-full max-w-7xl mx-auto",children:[j.jsxs("div",{"code-path":"src/sections/LocationsSection.tsx:248:11",className:"text-center mb-16",children:[j.jsx("span",{"code-path":"src/sections/LocationsSection.tsx:249:13",className:"text-sm uppercase tracking-widest text-gray-500 font-semibold mb-4 block",children:"Our Presence"}),j.jsx("h2",{"code-path":"src/sections/LocationsSection.tsx:252:13",className:"heading-lg text-black mb-4",children:"European Network"}),j.jsx("p",{"code-path":"src/sections/LocationsSection.tsx:255:13",className:"text-xl text-gray-600 italic max-w-2xl mx-auto",children:"Transforming complexity into sustainable value"}),j.jsx("div",{"code-path":"src/sections/LocationsSection.tsx:258:13",className:"w-24 h-0.5 bg-black mx-auto mt-8"})]}),j.jsx("p",{"code-path":"src/sections/LocationsSection.tsx:262:11",className:"text-center text-lg text-gray-600 mb-12",children:"Five strategic locations across Western Europe"}),j.jsx("div",{"code-path":"src/sections/LocationsSection.tsx:267:11",className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6",children:JT.map((l,c)=>j.jsxs("div",{"code-path":"src/sections/LocationsSection.tsx:269:15",className:"group p-6 border-2 border-gray-200 hover:border-black text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-white/80 backdrop-blur-sm",style:{animationDelay:`${c*100}ms`},children:[j.jsx("h3",{"code-path":"src/sections/LocationsSection.tsx:274:17",className:"text-xl font-bold uppercase tracking-wide mb-3 text-black",children:l.city}),j.jsx("p",{"code-path":"src/sections/LocationsSection.tsx:277:17",className:"text-gray-600 text-sm whitespace-pre-line leading-relaxed",children:l.address}),j.jsx("div",{"code-path":"src/sections/LocationsSection.tsx:280:17",className:"w-full h-1 bg-black mt-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"})]},l.city))})]})})]})},tA=()=>{const o=we.useRef(null),e=we.useRef(null),i=we.useRef(0),s=we.useRef(0);return we.useEffect(()=>{if(!o.current||!e.current)return;const l=o.current,c=e.current,h=new el;h.background=new Me(16316922);const d=new zn(60,c.clientWidth/c.clientHeight,.1,1e3);d.position.set(0,0,12);const m=new rl({canvas:l,antialias:!0,alpha:!0});m.setSize(c.clientWidth,c.clientHeight),m.setPixelRatio(Math.min(window.devicePixelRatio,2));const p=new Hi;h.add(p);const v=[{axis:"x",color:657930,radius:3,tube:.08},{axis:"y",color:657930,radius:3,tube:.08},{axis:"z",color:657930,radius:3,tube:.08}],g=[];v.forEach((C,L)=>{const q=new ep(C.radius,C.tube,16,100),ft=new Xi({color:C.color,wireframe:!0,transparent:!0,opacity:.4}),pt=new Un(q,ft);C.axis==="x"?pt.rotation.y=Math.PI/2:C.axis==="z"&&(pt.rotation.x=Math.PI/2),pt.position.x=Math.sin(L*Math.PI*2/3)*.5,pt.position.y=Math.cos(L*Math.PI*2/3)*.5,p.add(pt),g.push(pt)});const S=new il(1,2),y=new Xi({color:657930,wireframe:!0,transparent:!0,opacity:.3}),E=new Un(S,y);p.add(E);const T=new Ve,M=S.attributes.position.array.slice();T.setAttribute("position",new In(M,3));const _=new is({color:657930,size:.08,transparent:!0,opacity:.8}),D=new Os(T,_);p.add(D);const P=100,N=new Ve,z=new Float32Array(P*3);for(let C=0;C<P;C++){const L=Math.random()*Math.PI*2,q=Math.acos(2*Math.random()-1),ft=5+Math.random()*5;z[C*3]=ft*Math.sin(q)*Math.cos(L),z[C*3+1]=ft*Math.sin(q)*Math.sin(L),z[C*3+2]=ft*Math.cos(q)}N.setAttribute("position",new In(z,3));const B=new is({color:657930,size:.06,transparent:!0,opacity:.4}),I=new Os(N,B);p.add(I);const X=new Ve,A=[];for(let C=0;C<P;C++)for(let L=C+1;L<P;L++){const q=z[C*3]-z[L*3],ft=z[C*3+1]-z[L*3+1],pt=z[C*3+2]-z[L*3+2];Math.sqrt(q*q+ft*ft+pt*pt)<3&&Math.random()<.03&&A.push(z[C*3],z[C*3+1],z[C*3+2],z[L*3],z[L*3+1],z[L*3+2])}X.setAttribute("position",new Oe(A,3));const U=new ns({color:657930,transparent:!0,opacity:.08}),H=new nl(X,U);p.add(H);const K=new sl,nt=()=>{requestAnimationFrame(nt);const C=K.getElapsedTime();i.current+=(s.current-i.current)*.08,g[0].rotation.x=C*.15,g[1].rotation.y=C*.2,g[2].rotation.z=C*.1,E.rotation.y=C*.1,E.rotation.x=Math.sin(C*.2)*.1,D.rotation.y=C*.1,D.rotation.x=Math.sin(C*.2)*.1,I.rotation.y=C*.02,H.rotation.y=C*.02;const L=i.current;p.rotation.x=L*.3,p.rotation.y=L*.2,m.render(h,d)},ut=new IntersectionObserver(C=>{C.forEach(L=>{L.isIntersecting&&(s.current=L.intersectionRatio)})},{threshold:Array.from({length:100},(C,L)=>L/100),rootMargin:"-10% 0px -10% 0px"});ut.observe(c);const Y=()=>{d.aspect=c.clientWidth/c.clientHeight,d.updateProjectionMatrix(),m.setSize(c.clientWidth,c.clientHeight)};return window.addEventListener("resize",Y),nt(),()=>{ut.disconnect(),window.removeEventListener("resize",Y),m.dispose()}},[]),j.jsxs("section",{"code-path":"src/sections/ESGSection.tsx:233:5",ref:e,id:"esg",className:"relative min-h-screen w-full overflow-hidden",style:{backgroundColor:"#f8f9fa"},children:[j.jsx("canvas",{"code-path":"src/sections/ESGSection.tsx:240:7",ref:o,className:"absolute inset-0 w-full h-full",style:{zIndex:1}}),j.jsx("div",{"code-path":"src/sections/ESGSection.tsx:247:7",className:"relative z-10 min-h-screen flex items-center px-6 lg:px-16 py-24",children:j.jsxs("div",{"code-path":"src/sections/ESGSection.tsx:248:9",className:"w-full max-w-5xl mx-auto text-center",children:[j.jsx("span",{"code-path":"src/sections/ESGSection.tsx:250:11",className:"text-sm uppercase tracking-[0.3em] text-gray-500 font-bold mb-8 block",children:"Responsible Investment"}),j.jsxs("div",{"code-path":"src/sections/ESGSection.tsx:255:11",className:"flex flex-wrap justify-center gap-12 lg:gap-20 mb-12",children:[j.jsxs("div",{"code-path":"src/sections/ESGSection.tsx:256:13",className:"group cursor-pointer",children:[j.jsx("h3",{"code-path":"src/sections/ESGSection.tsx:257:15",className:"text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-2 group-hover:scale-110 transition-transform",children:"Environmental"}),j.jsx("div",{"code-path":"src/sections/ESGSection.tsx:260:15",className:"w-0 h-0.5 bg-black mx-auto group-hover:w-full transition-all duration-500"})]}),j.jsxs("div",{"code-path":"src/sections/ESGSection.tsx:262:13",className:"group cursor-pointer",children:[j.jsx("h3",{"code-path":"src/sections/ESGSection.tsx:263:15",className:"text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-2 group-hover:scale-110 transition-transform",children:"Social"}),j.jsx("div",{"code-path":"src/sections/ESGSection.tsx:266:15",className:"w-0 h-0.5 bg-black mx-auto group-hover:w-full transition-all duration-500"})]}),j.jsxs("div",{"code-path":"src/sections/ESGSection.tsx:268:13",className:"group cursor-pointer",children:[j.jsx("h3",{"code-path":"src/sections/ESGSection.tsx:269:15",className:"text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-2 group-hover:scale-110 transition-transform",children:"Governance"}),j.jsx("div",{"code-path":"src/sections/ESGSection.tsx:272:15",className:"w-0 h-0.5 bg-black mx-auto group-hover:w-full transition-all duration-500"})]})]}),j.jsx("p",{"code-path":"src/sections/ESGSection.tsx:277:11",className:"text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12",children:"Committed to the highest ethical standards, integrity and transparency — the foundations of our investment philosophy."}),j.jsxs("div",{"code-path":"src/sections/ESGSection.tsx:283:11",className:"grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12",children:[j.jsxs("div",{"code-path":"src/sections/ESGSection.tsx:284:13",className:"p-6 border-2 border-gray-300 hover:border-black transition-colors",children:[j.jsx("div",{"code-path":"src/sections/ESGSection.tsx:285:15",className:"text-3xl font-extrabold mb-1",children:"100%"}),j.jsx("div",{"code-path":"src/sections/ESGSection.tsx:286:15",className:"text-sm uppercase tracking-wider text-gray-500",children:"ESG Integration"})]}),j.jsxs("div",{"code-path":"src/sections/ESGSection.tsx:290:13",className:"p-6 border-2 border-gray-300 hover:border-black transition-colors",children:[j.jsx("div",{"code-path":"src/sections/ESGSection.tsx:291:15",className:"text-3xl font-extrabold mb-1",children:"Carbon"}),j.jsx("div",{"code-path":"src/sections/ESGSection.tsx:292:15",className:"text-sm uppercase tracking-wider text-gray-500",children:"Neutral by 2030"})]}),j.jsxs("div",{"code-path":"src/sections/ESGSection.tsx:296:13",className:"p-6 border-2 border-gray-300 hover:border-black transition-colors",children:[j.jsx("div",{"code-path":"src/sections/ESGSection.tsx:297:15",className:"text-3xl font-extrabold mb-1",children:"UN PRI"}),j.jsx("div",{"code-path":"src/sections/ESGSection.tsx:298:15",className:"text-sm uppercase tracking-wider text-gray-500",children:"Signatory"})]})]}),j.jsx("a",{"code-path":"src/sections/ESGSection.tsx:305:11",href:"#",className:"inline-block px-10 py-4 bg-black text-white text-sm font-bold uppercase tracking-widest border-2 border-black hover:bg-transparent hover:text-black transition-all duration-300",children:"Learn More"})]})})]})},eA=()=>{const o=new Date().getFullYear(),e=[{title:"Company",links:["About","Strategy","Team","Careers"]},{title:"Investments",links:["Portfolio","Case Studies","Performance","Reports"]},{title:"Resources",links:["Insights","News","Events","Contact"]}];return j.jsx("footer",{"code-path":"src/sections/Footer.tsx:20:5",className:"bg-black text-white py-16 px-6 lg:px-16",children:j.jsxs("div",{"code-path":"src/sections/Footer.tsx:21:7",className:"max-w-7xl mx-auto",children:[j.jsxs("div",{"code-path":"src/sections/Footer.tsx:23:9",className:"grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16",children:[j.jsxs("div",{"code-path":"src/sections/Footer.tsx:25:11",className:"lg:col-span-1",children:[j.jsxs("a",{"code-path":"src/sections/Footer.tsx:26:13",href:"#",className:"flex items-center gap-3 mb-6",children:[j.jsx("span",{"code-path":"src/sections/Footer.tsx:27:15",className:"w-10 h-10 relative",children:j.jsxs("svg",{"code-path":"src/sections/Footer.tsx:28:17",viewBox:"0 0 100 100",className:"w-full h-full fill-white",children:[j.jsx("path",{"code-path":"src/sections/Footer.tsx:29:19",d:"M50 10 L90 50 L50 90 L50 70 L70 50 L50 30 Z"}),j.jsx("path",{"code-path":"src/sections/Footer.tsx:30:19",d:"M50 30 L30 50 L50 70 L50 30 Z"})]})}),j.jsx("span",{"code-path":"src/sections/Footer.tsx:33:15",className:"text-2xl font-extrabold tracking-wider uppercase",children:"BLCFYN"})]}),j.jsx("p",{"code-path":"src/sections/Footer.tsx:37:13",className:"text-gray-400 text-sm leading-relaxed",children:"Strategic investors in financial services across Europe, combining deep sector expertise with operational excellence."})]}),e.map(i=>j.jsxs("div",{"code-path":"src/sections/Footer.tsx:45:13",children:[j.jsx("h4",{"code-path":"src/sections/Footer.tsx:46:15",className:"text-sm font-bold uppercase tracking-widest mb-6",children:i.title}),j.jsx("ul",{"code-path":"src/sections/Footer.tsx:49:15",className:"space-y-3",children:i.links.map(s=>j.jsx("li",{"code-path":"src/sections/Footer.tsx:51:19",children:j.jsx("a",{"code-path":"src/sections/Footer.tsx:52:21",href:"#",className:"text-gray-400 hover:text-white transition-colors text-sm",children:s})},s))})]},i.title))]}),j.jsx("div",{"code-path":"src/sections/Footer.tsx:66:9",className:"h-px bg-gray-800 mb-8"}),j.jsxs("div",{"code-path":"src/sections/Footer.tsx:69:9",className:"flex flex-col lg:flex-row justify-between items-center gap-6",children:[j.jsxs("p",{"code-path":"src/sections/Footer.tsx:70:11",className:"text-gray-500 text-sm",children:["© ",o," BLCFYN Capital Partners. All rights reserved."]}),j.jsxs("div",{"code-path":"src/sections/Footer.tsx:74:11",className:"flex items-center gap-6",children:[j.jsx("a",{"code-path":"src/sections/Footer.tsx:75:13",href:"#",className:"text-gray-500 hover:text-white transition-colors text-sm",children:"Privacy Policy"}),j.jsx("a",{"code-path":"src/sections/Footer.tsx:81:13",href:"#",className:"text-gray-500 hover:text-white transition-colors text-sm",children:"Terms of Service"}),j.jsx("a",{"code-path":"src/sections/Footer.tsx:87:13",href:"#",className:"text-gray-500 hover:text-white transition-colors text-sm",children:"Legal Notice"})]}),j.jsxs("div",{"code-path":"src/sections/Footer.tsx:96:11",className:"flex items-center gap-4",children:[j.jsx("a",{"code-path":"src/sections/Footer.tsx:97:13",href:"#",className:"w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-all",children:j.jsx("svg",{"code-path":"src/sections/Footer.tsx:101:15",className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:j.jsx("path",{"code-path":"src/sections/Footer.tsx:102:17",d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})}),j.jsx("a",{"code-path":"src/sections/Footer.tsx:105:13",href:"#",className:"w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-all",children:j.jsx("svg",{"code-path":"src/sections/Footer.tsx:109:15",className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:j.jsx("path",{"code-path":"src/sections/Footer.tsx:110:17",d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"})})})]})]})]})})};function nA(){const o=we.useRef(0),e=we.useRef(0);return we.useEffect(()=>{const i=()=>{e.current=window.scrollY};return window.addEventListener("scroll",i,{passive:!0}),()=>window.removeEventListener("scroll",i)},[]),we.useEffect(()=>{let i;const s=()=>{o.current+=(e.current-o.current)*.1,i=requestAnimationFrame(s)};return i=requestAnimationFrame(s),()=>cancelAnimationFrame(i)},[]),j.jsxs("div",{"code-path":"src/App.tsx:37:5",className:"relative bg-white",children:[j.jsx(BS,{"code-path":"src/App.tsx:38:7"}),j.jsxs("main",{"code-path":"src/App.tsx:39:7",children:[j.jsx(ZT,{"code-path":"src/App.tsx:40:9"}),j.jsx(KT,{"code-path":"src/App.tsx:41:9"}),j.jsx(QT,{"code-path":"src/App.tsx:42:9"}),j.jsx($T,{"code-path":"src/App.tsx:43:9"}),j.jsx(tA,{"code-path":"src/App.tsx:44:9"})]}),j.jsx(eA,{"code-path":"src/App.tsx:46:7"})]})}IS.createRoot(document.getElementById("root")).render(j.jsx(we.StrictMode,{"code-path":"src/main.tsx:7:3",children:j.jsx(nA,{"code-path":"src/main.tsx:8:5"})}));
