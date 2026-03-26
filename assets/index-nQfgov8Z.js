var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function te(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ne(e,t){return te(e.type,t,e.props)}function T(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(T(o)&&(o=ne(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=se(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var E=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},D={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!T(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=D,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return te(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return te(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=T,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,E)}catch(e){E(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.4`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,T());else{var t=n(l);t!==null&&ae(x,t.startTime-e)}}var S=!1,C=-1,w=5,ee=-1;function te(){return g?!0:!(e.unstable_now()-ee<w)}function ne(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ae(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?T():S=!1}}}var T;if(typeof y==`function`)T=function(){y(ne)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=ne,T=function(){ie.postMessage(null)}}else T=function(){_(ne,0)};function ae(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ae(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,T()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.4`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),te=Symbol.for(`react.suspense_list`),ne=Symbol.for(`react.memo`),T=Symbol.for(`react.lazy`),re=Symbol.for(`react.activity`),ie=Symbol.for(`react.memo_cache_sentinel`),ae=Symbol.iterator;function oe(e){return typeof e!=`object`||!e?null:(e=ae&&e[ae]||e[`@@iterator`],typeof e==`function`?e:null)}var se=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case te:return`SuspenseList`;case re:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ne:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case T:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var le=Array.isArray,E=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},de=[],O=-1;function fe(e){return{current:e}}function k(e){0>O||(e.current=de[O],de[O]=null,O--)}function A(e,t){O++,de[O]=e.current,e.current=t}var pe=fe(null),me=fe(null),he=fe(null),ge=fe(null);function _e(e,t){switch(A(he,t),A(me,e),A(pe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}k(pe),A(pe,e)}function ve(){k(pe),k(me),k(he)}function ye(e){e.memoizedState!==null&&A(ge,e);var t=pe.current,n=Hd(t,e.type);t!==n&&(A(me,e),A(pe,n))}function be(e){me.current===e&&(k(pe),k(me)),ge.current===e&&(k(ge),Qf._currentValue=ue)}var xe,Se;function Ce(e){if(xe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);xe=t&&t[1]||``,Se=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+xe+e+Se}var we=!1;function Te(e,t){if(!e||we)return``;we=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{we=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ce(n):``}function Ee(e,t){switch(e.tag){case 26:case 27:case 5:return Ce(e.type);case 16:return Ce(`Lazy`);case 13:return e.child!==t&&t!==null?Ce(`Suspense Fallback`):Ce(`Suspense`);case 19:return Ce(`SuspenseList`);case 0:case 15:return Te(e.type,!1);case 11:return Te(e.type.render,!1);case 1:return Te(e.type,!0);case 31:return Ce(`Activity`);default:return``}}function De(e){try{var t=``,n=null;do t+=Ee(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Oe=Object.prototype.hasOwnProperty,ke=t.unstable_scheduleCallback,Ae=t.unstable_cancelCallback,je=t.unstable_shouldYield,Me=t.unstable_requestPaint,Ne=t.unstable_now,Pe=t.unstable_getCurrentPriorityLevel,Fe=t.unstable_ImmediatePriority,Ie=t.unstable_UserBlockingPriority,Le=t.unstable_NormalPriority,Re=t.unstable_LowPriority,ze=t.unstable_IdlePriority,Be=t.log,Ve=t.unstable_setDisableYieldValue,He=null,Ue=null;function We(e){if(typeof Be==`function`&&Ve(e),Ue&&typeof Ue.setStrictMode==`function`)try{Ue.setStrictMode(He,e)}catch{}}var Ge=Math.clz32?Math.clz32:Je,Ke=Math.log,qe=Math.LN2;function Je(e){return e>>>=0,e===0?32:31-(Ke(e)/qe|0)|0}var Ye=256,Xe=262144,Ze=4194304;function Qe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $e(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Qe(n))):i=Qe(o):i=Qe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Qe(n))):i=Qe(o)):i=Qe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function et(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function tt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nt(){var e=Ze;return Ze<<=1,!(Ze&62914560)&&(Ze=4194304),e}function rt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function it(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function at(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ge(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ot(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ot(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ge(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function st(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ge(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ct(e,t){var n=t&-t;return n=n&42?1:lt(n),(n&(e.suspendedLanes|t))===0?n:0}function lt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ut(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function dt(){var e=D.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ft(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var pt=Math.random().toString(36).slice(2),mt=`__reactFiber$`+pt,ht=`__reactProps$`+pt,gt=`__reactContainer$`+pt,_t=`__reactEvents$`+pt,vt=`__reactListeners$`+pt,yt=`__reactHandles$`+pt,bt=`__reactResources$`+pt,xt=`__reactMarker$`+pt;function St(e){delete e[mt],delete e[ht],delete e[_t],delete e[vt],delete e[yt]}function Ct(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[mt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function wt(e){if(e=e[mt]||e[gt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Tt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Et(e){var t=e[bt];return t||=e[bt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Dt(e){e[xt]=!0}var Ot=new Set,kt={};function At(e,t){jt(e,t),jt(e+`Capture`,t)}function jt(e,t){for(kt[e]=t,e=0;e<t.length;e++)Ot.add(t[e])}var Mt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Nt={},Pt={};function Ft(e){return Oe.call(Pt,e)?!0:Oe.call(Nt,e)?!1:Mt.test(e)?Pt[e]=!0:(Nt[e]=!0,!1)}function It(e,t,n){if(Ft(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Lt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Rt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function zt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Bt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Vt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ht(e){if(!e._valueTracker){var t=Bt(e)?`checked`:`value`;e._valueTracker=Vt(e,t,``+e[t])}}function Ut(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Bt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Wt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Gt=/[\n"\\]/g;function Kt(e){return e.replace(Gt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function qt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+zt(t)):e.value!==``+zt(t)&&(e.value=``+zt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Yt(e,o,zt(n)):Yt(e,o,zt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+zt(s):e.removeAttribute(`name`)}function Jt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ht(e);return}n=n==null?``:``+zt(n),t=t==null?n:``+zt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ht(e)}function Yt(e,t,n){t===`number`&&Wt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Xt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Zt(e,t,n){if(t!=null&&(t=``+zt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+zt(n)}function Qt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(le(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=zt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ht(e)}function $t(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var en=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function tn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||en.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function nn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&tn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&tn(e,o,t[o])}function rn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var an=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),on=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sn(e){return on.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function cn(){}var ln=null;function un(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dn=null,fn=null;function pn(e){var t=wt(e);if(t&&(e=t.stateNode)){var n=e[ht]||null;a:switch(e=t.stateNode,t.type){case`input`:if(qt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Kt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ht]||null;if(!a)throw Error(i(90));qt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ut(r)}break a;case`textarea`:Zt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Xt(e,!!n.multiple,t,!1)}}}var mn=!1;function hn(e,t,n){if(mn)return e(t,n);mn=!0;try{return e(t)}finally{if(mn=!1,(dn!==null||fn!==null)&&(bu(),dn&&(t=dn,e=fn,fn=dn=null,pn(t),e)))for(t=0;t<e.length;t++)pn(e[t])}}function gn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ht]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var _n=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),vn=!1;if(_n)try{var yn={};Object.defineProperty(yn,`passive`,{get:function(){vn=!0}}),window.addEventListener(`test`,yn,yn),window.removeEventListener(`test`,yn,yn)}catch{vn=!1}var bn=null,xn=null,Sn=null;function Cn(){if(Sn)return Sn;var e,t=xn,n=t.length,r,i=`value`in bn?bn.value:bn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Sn=i.slice(e,1<r?1-r:void 0)}function wn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tn(){return!0}function En(){return!1}function Dn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Tn:En,this.isPropagationStopped=En,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Tn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Tn)},persist:function(){},isPersistent:Tn}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kn=Dn(On),An=h({},On,{view:0,detail:0}),jn=Dn(An),Mn,Nn,Pn,Fn=h({},An,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Pn&&(Pn&&e.type===`mousemove`?(Mn=e.screenX-Pn.screenX,Nn=e.screenY-Pn.screenY):Nn=Mn=0,Pn=e),Mn)},movementY:function(e){return`movementY`in e?e.movementY:Nn}}),In=Dn(Fn),Ln=Dn(h({},Fn,{dataTransfer:0})),Rn=Dn(h({},An,{relatedTarget:0})),zn=Dn(h({},On,{animationName:0,elapsedTime:0,pseudoElement:0})),Bn=Dn(h({},On,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Vn=Dn(h({},On,{data:0})),Hn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Un={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Wn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Gn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wn[e])?!!t[e]:!1}function Kn(){return Gn}var qn=Dn(h({},An,{key:function(e){if(e.key){var t=Hn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=wn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Un[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kn,charCode:function(e){return e.type===`keypress`?wn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?wn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Jn=Dn(h({},Fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Yn=Dn(h({},An,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kn})),Xn=Dn(h({},On,{propertyName:0,elapsedTime:0,pseudoElement:0})),Zn=Dn(h({},Fn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Qn=Dn(h({},On,{newState:0,oldState:0})),$n=[9,13,27,32],er=_n&&`CompositionEvent`in window,tr=null;_n&&`documentMode`in document&&(tr=document.documentMode);var nr=_n&&`TextEvent`in window&&!tr,rr=_n&&(!er||tr&&8<tr&&11>=tr),ir=` `,ar=!1;function or(e,t){switch(e){case`keyup`:return $n.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function sr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var cr=!1;function lr(e,t){switch(e){case`compositionend`:return sr(t);case`keypress`:return t.which===32?(ar=!0,ir):null;case`textInput`:return e=t.data,e===ir&&ar?null:e;default:return null}}function ur(e,t){if(cr)return e===`compositionend`||!er&&or(e,t)?(e=Cn(),Sn=xn=bn=null,cr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return rr&&t.locale!==`ko`?null:t.data;default:return null}}var dr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!dr[e.type]:t===`textarea`}function pr(e,t,n,r){dn?fn?fn.push(r):fn=[r]:dn=r,t=Ed(t,`onChange`),0<t.length&&(n=new kn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var mr=null,hr=null;function gr(e){yd(e,0)}function _r(e){if(Ut(Tt(e)))return e}function vr(e,t){if(e===`change`)return t}var yr=!1;if(_n){var br;if(_n){var xr=`oninput`in document;if(!xr){var Sr=document.createElement(`div`);Sr.setAttribute(`oninput`,`return;`),xr=typeof Sr.oninput==`function`}br=xr}else br=!1;yr=br&&(!document.documentMode||9<document.documentMode)}function Cr(){mr&&(mr.detachEvent(`onpropertychange`,wr),hr=mr=null)}function wr(e){if(e.propertyName===`value`&&_r(hr)){var t=[];pr(t,hr,e,un(e)),hn(gr,t)}}function Tr(e,t,n){e===`focusin`?(Cr(),mr=t,hr=n,mr.attachEvent(`onpropertychange`,wr)):e===`focusout`&&Cr()}function Er(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return _r(hr)}function Dr(e,t){if(e===`click`)return _r(t)}function Or(e,t){if(e===`input`||e===`change`)return _r(t)}function kr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Ar=typeof Object.is==`function`?Object.is:kr;function jr(e,t){if(Ar(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oe.call(t,i)||!Ar(e[i],t[i]))return!1}return!0}function Mr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nr(e,t){var n=Mr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Mr(n)}}function Pr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wt(e.document)}return t}function Ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Lr=_n&&`documentMode`in document&&11>=document.documentMode,Rr=null,zr=null,Br=null,Vr=!1;function Hr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vr||Rr==null||Rr!==Wt(r)||(r=Rr,`selectionStart`in r&&Ir(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&jr(Br,r)||(Br=r,r=Ed(zr,`onSelect`),0<r.length&&(t=new kn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Rr)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Wr={animationend:Ur(`Animation`,`AnimationEnd`),animationiteration:Ur(`Animation`,`AnimationIteration`),animationstart:Ur(`Animation`,`AnimationStart`),transitionrun:Ur(`Transition`,`TransitionRun`),transitionstart:Ur(`Transition`,`TransitionStart`),transitioncancel:Ur(`Transition`,`TransitionCancel`),transitionend:Ur(`Transition`,`TransitionEnd`)},Gr={},Kr={};_n&&(Kr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),`TransitionEvent`in window||delete Wr.transitionend.transition);function qr(e){if(Gr[e])return Gr[e];if(!Wr[e])return e;var t=Wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kr)return Gr[e]=t[n];return e}var Jr=qr(`animationend`),Yr=qr(`animationiteration`),Xr=qr(`animationstart`),Zr=qr(`transitionrun`),Qr=qr(`transitionstart`),$r=qr(`transitioncancel`),ei=qr(`transitionend`),ti=new Map,ni=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ni.push(`scrollEnd`);function ri(e,t){ti.set(e,t),At(t,[e])}var ii=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ai=[],oi=0,si=0;function ci(){for(var e=oi,t=si=oi=0;t<e;){var n=ai[t];ai[t++]=null;var r=ai[t];ai[t++]=null;var i=ai[t];ai[t++]=null;var a=ai[t];if(ai[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&fi(n,i,a)}}function li(e,t,n,r){ai[oi++]=e,ai[oi++]=t,ai[oi++]=n,ai[oi++]=r,si|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ui(e,t,n,r){return li(e,t,n,r),pi(e)}function di(e,t){return li(e,null,null,t),pi(e)}function fi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ge(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function pi(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var mi={};function hi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(e,t,n,r){return new hi(e,t,n,r)}function _i(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vi(e,t){var n=e.alternate;return n===null?(n=gi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function yi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function bi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)_i(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,pe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case re:return e=gi(31,n,t,a),e.elementType=re,e.lanes=o,e;case y:return xi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=gi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=gi(13,n,t,a),e.elementType=ee,e.lanes=o,e;case te:return e=gi(19,n,t,a),e.elementType=te,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ne:s=14;break a;case T:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=gi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function xi(e,t,n,r){return e=gi(7,e,r,t),e.lanes=n,e}function Si(e,t,n){return e=gi(6,e,null,t),e.lanes=n,e}function Ci(e){var t=gi(18,null,null,0);return t.stateNode=e,t}function wi(e,t,n){return t=gi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ti=new WeakMap;function Ei(e,t){if(typeof e==`object`&&e){var n=Ti.get(e);return n===void 0?(t={value:e,source:t,stack:De(t)},Ti.set(e,t),t):n}return{value:e,source:t,stack:De(t)}}var Di=[],Oi=0,ki=null,Ai=0,ji=[],Mi=0,Ni=null,Pi=1,Fi=``;function Ii(e,t){Di[Oi++]=Ai,Di[Oi++]=ki,ki=e,Ai=t}function Li(e,t,n){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Ni=e;var r=Pi;e=Fi;var i=32-Ge(r)-1;r&=~(1<<i),n+=1;var a=32-Ge(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pi=1<<32-Ge(t)+i|n<<i|r,Fi=a+e}else Pi=1<<a|n<<i|r,Fi=e}function Ri(e){e.return!==null&&(Ii(e,1),Li(e,1,0))}function zi(e){for(;e===ki;)ki=Di[--Oi],Di[Oi]=null,Ai=Di[--Oi],Di[Oi]=null;for(;e===Ni;)Ni=ji[--Mi],ji[Mi]=null,Fi=ji[--Mi],ji[Mi]=null,Pi=ji[--Mi],ji[Mi]=null}function Bi(e,t){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Pi=t.id,Fi=t.overflow,Ni=e}var Vi=null,j=null,M=!1,Hi=null,Ui=!1,Wi=Error(i(519));function Gi(e){throw Zi(Ei(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Wi}function Ki(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[mt]=e,t[ht]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Jt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Qt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=cn),t=!0):t=!1,t||Gi(e,!0)}function qi(e){for(Vi=e.return;Vi;)switch(Vi.tag){case 5:case 31:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:Vi=Vi.return}}function Ji(e){if(e!==Vi)return!1;if(!M)return qi(e),M=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&j&&Gi(e),qi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));j=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));j=uf(e)}else t===27?(t=j,Zd(e.type)?(e=lf,lf=null,j=e):j=t):j=Vi?cf(e.stateNode.nextSibling):null;return!0}function Yi(){j=Vi=null,M=!1}function Xi(){var e=Hi;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Hi=null),e}function Zi(e){Hi===null?Hi=[e]:Hi.push(e)}var Qi=fe(null),$i=null,ea=null;function ta(e,t,n){A(Qi,t._currentValue),t._currentValue=n}function na(e){e._currentValue=Qi.current,k(Qi)}function ra(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ia(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ra(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ra(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function aa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Ar(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ge.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ia(t,e,n,r),t.flags|=262144}function oa(e){for(e=e.firstContext;e!==null;){if(!Ar(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sa(e){$i=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ca(e){return ua($i,e)}function la(e,t){return $i===null&&sa(e),ua(e,t)}function ua(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ea===null){if(e===null)throw Error(i(308));ea=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ea=ea.next=t;return n}var da=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},fa=t.unstable_scheduleCallback,pa=t.unstable_NormalPriority,N={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ma(){return{controller:new da,data:new Map,refCount:0}}function ha(e){e.refCount--,e.refCount===0&&fa(pa,function(){e.controller.abort()})}var ga=null,_a=0,va=0,ya=null;function ba(e,t){if(ga===null){var n=ga=[];_a=0,va=dd(),ya={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return _a++,t.then(xa,xa),t}function xa(){if(--_a===0&&ga!==null){ya!==null&&(ya.status=`fulfilled`);var e=ga;ga=null,va=0,ya=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Sa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ca=E.S;E.S=function(e,t){tu=Ne(),typeof t==`object`&&t&&typeof t.then==`function`&&ba(e,t),Ca!==null&&Ca(e,t)};var wa=fe(null);function Ta(){var e=wa.current;return e===null?G.pooledCache:e}function Ea(e,t){t===null?A(wa,wa.current):A(wa,t.pool)}function Da(){var e=Ta();return e===null?null:{parent:N._currentValue,pool:e}}var Oa=Error(i(460)),ka=Error(i(474)),Aa=Error(i(542)),ja={then:function(){}};function Ma(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Na(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(cn,cn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e;default:if(typeof t.status==`string`)t.then(cn,cn);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e}throw Fa=t,Oa}}function Pa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Fa=e,Oa):e}}var Fa=null;function Ia(){if(Fa===null)throw Error(i(459));var e=Fa;return Fa=null,e}function La(e){if(e===Oa||e===Aa)throw Error(i(483))}var Ra=null,za=0;function Ba(e){var t=za;return za+=1,Ra===null&&(Ra=[]),Na(Ra,e,t)}function Va(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ha(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ua(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=vi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Si(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===T&&Pa(i)===t.type)?(t=a(t,n.props),Va(t,n),t.return=e,t):(t=bi(n.type,n.key,n.props,null,e.mode,r),Va(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=wi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=xi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Si(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=bi(t.type,t.key,t.props,null,e.mode,n),Va(n,t),n.return=e,n;case v:return t=wi(t,e.mode,n),t.return=e,t;case T:return t=Pa(t),f(e,t,n)}if(le(t)||oe(t))return t=xi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ba(t),n);if(t.$$typeof===C)return f(e,la(e,t),n);Ha(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case T:return n=Pa(n),p(e,t,n,r)}if(le(n)||oe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ba(n),r);if(n.$$typeof===C)return p(e,t,la(e,n),r);Ha(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case T:return r=Pa(r),m(e,t,n,r,i)}if(le(r)||oe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ba(r),i);if(r.$$typeof===C)return m(e,t,n,la(t,r),i);Ha(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),M&&Ii(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return M&&Ii(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),M&&Ii(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),M&&Ii(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return M&&Ii(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),M&&Ii(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===T&&Pa(l)===r.type){n(e,r.sibling),c=a(r,o.props),Va(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=xi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=bi(o.type,o.key,o.props,null,e.mode,c),Va(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=wi(o,e.mode,c),c.return=e,e=c}return s(e);case T:return o=Pa(o),b(e,r,o,c)}if(le(o))return h(e,r,o,c);if(oe(o)){if(l=oe(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ba(o),c);if(o.$$typeof===C)return b(e,r,la(e,o),c);Ha(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Si(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{za=0;var i=b(e,t,n,r);return Ra=null,i}catch(t){if(t===Oa||t===Aa)throw t;var a=gi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Wa=Ua(!0),Ga=Ua(!1),Ka=!1;function qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ja(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=pi(e),fi(e,null,n),t}return li(e,r,t,n),pi(e)}function Za(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}function Qa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var $a=!1;function eo(){if($a){var e=ya;if(e!==null)throw e}}function to(e,t,n,r){$a=!1;var i=e.updateQueue;Ka=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===va&&($a=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ka=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function no(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function ro(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)no(n[e],t)}var io=fe(null),ao=fe(0);function oo(e,t){e=Gl,A(ao,e),A(io,t),Gl=e|t.baseLanes}function so(){A(ao,Gl),A(io,io.current)}function co(){Gl=ao.current,k(io),k(ao)}var lo=fe(null),uo=null;function fo(e){var t=e.alternate;A(P,P.current&1),A(lo,e),uo===null&&(t===null||io.current!==null||t.memoizedState!==null)&&(uo=e)}function po(e){A(P,P.current),A(lo,e),uo===null&&(uo=e)}function mo(e){e.tag===22?(A(P,P.current),A(lo,e),uo===null&&(uo=e)):ho(e)}function ho(){A(P,P.current),A(lo,lo.current)}function go(e){k(lo),uo===e&&(uo=null),k(P)}var P=fe(0);function _o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vo=0,F=null,I=null,L=null,yo=!1,bo=!1,xo=!1,So=0,Co=0,wo=null,To=0;function R(){throw Error(i(321))}function Eo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ar(e[n],t[n]))return!1;return!0}function Do(e,t,n,r,i,a){return vo=a,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Us:Ws,xo=!1,a=n(r,i),xo=!1,bo&&(a=ko(t,n,r,i)),Oo(e),a}function Oo(e){E.H=Hs;var t=I!==null&&I.next!==null;if(vo=0,L=I=F=null,yo=!1,Co=0,wo=null,t)throw Error(i(300));e===null||B||(e=e.dependencies,e!==null&&oa(e)&&(B=!0))}function ko(e,t,n,r){F=e;var a=0;do{if(bo&&(wo=null),Co=0,bo=!1,25<=a)throw Error(i(301));if(a+=1,L=I=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}E.H=Gs,o=t(n,r)}while(bo);return o}function Ao(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?Io(t):t,e=e.useState()[0],(I===null?null:I.memoizedState)!==e&&(F.flags|=1024),t}function jo(){var e=So!==0;return So=0,e}function Mo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function No(e){if(yo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yo=!1}vo=0,L=I=F=null,bo=!1,Co=So=0,wo=null}function Po(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return L===null?F.memoizedState=L=e:L=L.next=e,L}function z(){if(I===null){var e=F.alternate;e=e===null?null:e.memoizedState}else e=I.next;var t=L===null?F.memoizedState:L.next;if(t!==null)L=t,I=e;else{if(e===null)throw F.alternate===null?Error(i(467)):Error(i(310));I=e,e={memoizedState:I.memoizedState,baseState:I.baseState,baseQueue:I.baseQueue,queue:I.queue,next:null},L===null?F.memoizedState=L=e:L=L.next=e}return L}function Fo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(e){var t=Co;return Co+=1,wo===null&&(wo=[]),e=Na(wo,e,t),t=F,(L===null?t.memoizedState:L.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Us:Ws),e}function Lo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Io(e);if(e.$$typeof===C)return ca(e)}throw Error(i(438,String(e)))}function Ro(e){var t=null,n=F.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=F.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Fo(),F.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ie;return t.index++,n}function zo(e,t){return typeof t==`function`?t(e):t}function Bo(e){return Vo(z(),I,e)}function Vo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(vo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===va&&(d=!0);else if((vo&p)===p){u=u.next,p===va&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,F.lanes|=p,Kl|=p;f=u.action,xo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,F.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Ar(o,e.memoizedState)&&(B=!0,d&&(n=ya,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ho(e){var t=z(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Ar(o,t.memoizedState)||(B=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Uo(e,t,n){var r=F,a=z(),o=M;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Ar((I||a).memoizedState,n);if(s&&(a.memoizedState=n,B=!0),a=a.queue,ms(Ko.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||L!==null&&L.memoizedState.tag&1){if(r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,a,n,t),null),G===null)throw Error(i(349));o||vo&127||Wo(r,t,n)}return n}function Wo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=F.updateQueue,t===null?(t=Fo(),F.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Go(e,t,n,r){t.value=n,t.getSnapshot=r,qo(t)&&Jo(e)}function Ko(e,t,n){return n(function(){qo(t)&&Jo(e)})}function qo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ar(e,n)}catch{return!0}}function Jo(e){var t=di(e,2);t!==null&&hu(t,e,2)}function Yo(e){var t=Po();if(typeof e==`function`){var n=e;if(e=n(),xo){We(!0);try{n()}finally{We(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:e},t}function Xo(e,t,n,r){return e.baseState=n,Vo(e,I,typeof r==`function`?r:zo)}function Zo(e,t,n,r,a){if(zs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};E.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Qo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Qo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),$o(e,t,s)}catch(n){ts(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),$o(e,t,a)}catch(n){ts(e,t,n)}}function $o(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){es(e,t,n)},function(n){return ts(e,t,n)}):es(e,t,n)}function es(e,t,n){t.status=`fulfilled`,t.value=n,ns(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Qo(e,n)))}function ts(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ns(t),t=t.next;while(t!==r)}e.action=null}function ns(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function rs(e,t){return t}function is(e,t){if(M){var n=G.formState;if(n!==null){a:{var r=F;if(M){if(j){b:{for(var i=j,a=Ui;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){j=cf(i.nextSibling),r=i.data===`F!`;break a}}Gi(r)}r=!1}r&&(t=n[0])}}return n=Po(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:t},n.queue=r,n=Is.bind(null,F,r),r.dispatch=n,r=Yo(!1),a=Rs.bind(null,F,!1,r.queue),r=Po(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Zo.bind(null,F,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function as(e){return os(z(),I,e)}function os(e,t,n){if(t=Vo(e,t,rs)[0],e=Bo(zo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Io(t)}catch(e){throw e===Oa?Aa:e}else r=t;t=z();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(F.flags|=2048,ls(9,{destroy:void 0},ss.bind(null,i,n),null)),[r,a,e]}function ss(e,t){e.action=t}function cs(e){var t=z(),n=I;if(n!==null)return os(t,n,e);z(),t=t.memoizedState,n=z();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ls(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=F.updateQueue,t===null&&(t=Fo(),F.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function us(){return z().memoizedState}function ds(e,t,n,r){var i=Po();F.flags|=e,i.memoizedState=ls(1|t,{destroy:void 0},n,r===void 0?null:r)}function fs(e,t,n,r){var i=z();r=r===void 0?null:r;var a=i.memoizedState.inst;I!==null&&r!==null&&Eo(r,I.memoizedState.deps)?i.memoizedState=ls(t,a,n,r):(F.flags|=e,i.memoizedState=ls(1|t,a,n,r))}function ps(e,t){ds(8390656,8,e,t)}function ms(e,t){fs(2048,8,e,t)}function hs(e){F.flags|=4;var t=F.updateQueue;if(t===null)t=Fo(),F.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function gs(e){var t=z().memoizedState;return hs({ref:t,nextImpl:e}),function(){if(W&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function _s(e,t){return fs(4,2,e,t)}function vs(e,t){return fs(4,4,e,t)}function ys(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bs(e,t,n){n=n==null?null:n.concat([e]),fs(4,4,ys.bind(null,t,e),n)}function xs(){}function Ss(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Eo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cs(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Eo(t,r[1]))return r[0];if(r=e(),xo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r}function ws(e,t,n){return n===void 0||vo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),F.lanes|=e,Kl|=e,n)}function Ts(e,t,n,r){return Ar(n,t)?n:io.current===null?!(vo&42)||vo&1073741824&&!(q&261930)?(B=!0,e.memoizedState=n):(e=mu(),F.lanes|=e,Kl|=e,t):(e=ws(e,n,r),Ar(e,t)||(B=!0),e)}function Es(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};E.T=s,Rs(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ls(e,t,Sa(c,r),pu(e)):Ls(e,t,r,pu(e))}catch(n){Ls(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function Ds(){}function Os(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=ks(e).queue;Es(e,a,t,ue,n===null?Ds:function(){return As(e),n(r)})}function ks(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function As(e){var t=ks(e);t.next===null&&(t=e.alternate.memoizedState),Ls(e,t.next.queue,{},pu())}function js(){return ca(Qf)}function Ms(){return z().memoizedState}function Ns(){return z().memoizedState}function Ps(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ya(n);var r=Xa(t,e,n);r!==null&&(hu(r,t,n),Za(r,t,n)),t={cache:ma()},e.payload=t;return}t=t.return}}function Fs(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},zs(e)?Bs(t,n):(n=ui(e,t,n,r),n!==null&&(hu(n,e,r),Vs(n,t,r)))}function Is(e,t,n){Ls(e,t,n,pu())}function Ls(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(zs(e))Bs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ar(s,o))return li(e,t,i,0),G===null&&ci(),!1}catch{}if(n=ui(e,t,i,r),n!==null)return hu(n,e,r),Vs(n,t,r),!0}return!1}function Rs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},zs(e)){if(t)throw Error(i(479))}else t=ui(e,n,r,2),t!==null&&hu(t,e,2)}function zs(e){var t=e.alternate;return e===F||t!==null&&t===F}function Bs(e,t){bo=yo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}var Hs={readContext:ca,use:Lo,useCallback:R,useContext:R,useEffect:R,useImperativeHandle:R,useLayoutEffect:R,useInsertionEffect:R,useMemo:R,useReducer:R,useRef:R,useState:R,useDebugValue:R,useDeferredValue:R,useTransition:R,useSyncExternalStore:R,useId:R,useHostTransitionStatus:R,useFormState:R,useActionState:R,useOptimistic:R,useMemoCache:R,useCacheRefresh:R};Hs.useEffectEvent=R;var Us={readContext:ca,use:Lo,useCallback:function(e,t){return Po().memoizedState=[e,t===void 0?null:t],e},useContext:ca,useEffect:ps,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ds(4194308,4,ys.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ds(4194308,4,e,t)},useInsertionEffect:function(e,t){ds(4,2,e,t)},useMemo:function(e,t){var n=Po();t=t===void 0?null:t;var r=e();if(xo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Po();if(n!==void 0){var i=n(t);if(xo){We(!0);try{n(t)}finally{We(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Fs.bind(null,F,e),[r.memoizedState,e]},useRef:function(e){var t=Po();return e={current:e},t.memoizedState=e},useState:function(e){e=Yo(e);var t=e.queue,n=Is.bind(null,F,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:xs,useDeferredValue:function(e,t){return ws(Po(),e,t)},useTransition:function(){var e=Yo(!1);return e=Es.bind(null,F,e.queue,!0,!1),Po().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=F,a=Po();if(M){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),G===null)throw Error(i(349));q&127||Wo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ps(Ko.bind(null,r,o,e),[e]),r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,o,n,t),null),n},useId:function(){var e=Po(),t=G.identifierPrefix;if(M){var n=Fi,r=Pi;n=(r&~(1<<32-Ge(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=So++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=To++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:js,useFormState:is,useActionState:is,useOptimistic:function(e){var t=Po();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Rs.bind(null,F,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ro,useCacheRefresh:function(){return Po().memoizedState=Ps.bind(null,F)},useEffectEvent:function(e){var t=Po(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Ws={readContext:ca,use:Lo,useCallback:Ss,useContext:ca,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Bo,useRef:us,useState:function(){return Bo(zo)},useDebugValue:xs,useDeferredValue:function(e,t){return Ts(z(),I.memoizedState,e,t)},useTransition:function(){var e=Bo(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:as,useActionState:as,useOptimistic:function(e,t){return Xo(z(),I,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Ws.useEffectEvent=gs;var Gs={readContext:ca,use:Lo,useCallback:Ss,useContext:ca,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Ho,useRef:us,useState:function(){return Ho(zo)},useDebugValue:xs,useDeferredValue:function(e,t){var n=z();return I===null?ws(n,e,t):Ts(n,I.memoizedState,e,t)},useTransition:function(){var e=Ho(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:cs,useActionState:cs,useOptimistic:function(e,t){var n=z();return I===null?(n.baseState=e,[e,n.queue.dispatch]):Xo(n,I,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Gs.useEffectEvent=gs;function Ks(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ya(r);i.payload=t,n!=null&&(i.callback=n),t=Xa(e,i,r),t!==null&&(hu(t,e,r),Za(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ya(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Xa(e,i,r),t!==null&&(hu(t,e,r),Za(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ya(n);r.tag=2,t!=null&&(r.callback=t),t=Xa(e,r,n),t!==null&&(hu(t,e,n),Za(t,e,n))}};function Js(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(i,a):!0}function Ys(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qs.enqueueReplaceState(t,t.state,null)}function Xs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Zs(e){ii(e)}function Qs(e){console.error(e)}function $s(e){ii(e)}function ec(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){return n=Ya(n),n.tag=3,n.payload={element:null},n.callback=function(){ec(e,t)},n}function rc(e){return e=Ya(e),e.tag=3,e}function ic(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){tc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){tc(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ac(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&aa(t,n,a,!0),n=lo.current,n!==null){switch(n.tag){case 31:case 13:return uo===null?Du():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ja?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===ja?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(M)return t=lo.current,t===null?(r!==Wi&&(t=Error(i(423),{cause:r}),Zi(Ei(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ei(r,n),a=nc(e.stateNode,r,a),Qa(e,a),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Wi&&(e=Error(i(422),{cause:r}),Zi(Ei(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ei(o,n),Zl===null?Zl=[o]:Zl.push(o),Y!==4&&(Y=2),t===null)return!0;r=Ei(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=nc(n.stateNode,r,e),Qa(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(iu===null||!iu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=rc(a),ic(a,e,n,r),Qa(n,a),!1}n=n.return}while(n!==null);return!1}var oc=Error(i(461)),B=!1;function sc(e,t,n,r){t.child=e===null?Ga(t,null,n,r):Wa(t,e.child,n,r)}function cc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return sa(t),r=Do(e,t,n,o,a,i),s=jo(),e!==null&&!B?(Mo(e,t,i),Mc(e,t,i)):(M&&s&&Ri(t),t.flags|=1,sc(e,t,r,i),t.child)}function lc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!_i(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,uc(e,t,a,r,i)):(e=bi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Nc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?jr:n,n(o,r)&&e.ref===t.ref)return Mc(e,t,i)}return t.flags|=1,e=vi(a,r),e.ref=t.ref,e.return=t,t.child=e}function uc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(jr(a,r)&&e.ref===t.ref)if(B=!1,t.pendingProps=r=a,Nc(e,i))e.flags&131072&&(B=!0);else return t.lanes=e.lanes,Mc(e,t,i)}return vc(e,t,n,r,i)}function dc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return pc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ea(t,a===null?null:a.cachePool),a===null?so():oo(t,a),mo(t);else return r=t.lanes=536870912,pc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ea(t,null),so(),ho(t)):(Ea(t,a.cachePool),oo(t,a),ho(t),t.memoizedState=null);return sc(e,t,i,n),t.child}function fc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function pc(e,t,n,r,i){var a=Ta();return a=a===null?null:{parent:N._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ea(t,null),so(),mo(t),e!==null&&aa(e,t,r,!0),t.childLanes=i,null}function mc(e,t){return t=Dc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function hc(e,t,n){return Wa(t,e.child,null,n),e=mc(t,t.pendingProps),e.flags|=2,go(t),t.memoizedState=null,e}function gc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(M){if(r.mode===`hidden`)return e=mc(t,r),t.lanes=536870912,fc(null,e);if(po(t),(e=j)?(e=rf(e,Ui),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Vi=t,j=null)):e=null,e===null)throw Gi(t);return t.lanes=536870912,null}return mc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(po(t),a)if(t.flags&256)t.flags&=-257,t=hc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(B||aa(e,t,n,!1),a=(n&e.childLanes)!==0,B||a){if(r=G,r!==null&&(s=ct(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,di(e,s),hu(r,e,s),oc;Du(),t=hc(e,t,n)}else e=o.treeContext,j=cf(s.nextSibling),Vi=t,M=!0,Hi=null,Ui=!1,e!==null&&Bi(t,e),t=mc(t,r),t.flags|=4096;return t}return e=vi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function _c(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function vc(e,t,n,r,i){return sa(t),n=Do(e,t,n,r,void 0,i),r=jo(),e!==null&&!B?(Mo(e,t,i),Mc(e,t,i)):(M&&r&&Ri(t),t.flags|=1,sc(e,t,n,i),t.child)}function yc(e,t,n,r,i,a){return sa(t),t.updateQueue=null,n=ko(t,r,n,i),Oo(e),r=jo(),e!==null&&!B?(Mo(e,t,a),Mc(e,t,a)):(M&&r&&Ri(t),t.flags|=1,sc(e,t,n,a),t.child)}function bc(e,t,n,r,i){if(sa(t),t.stateNode===null){var a=mi,o=n.contextType;typeof o==`object`&&o&&(a=ca(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=qs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},qa(t),o=n.contextType,a.context=typeof o==`object`&&o?ca(o):mi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ks(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&qs.enqueueReplaceState(a,a.state,null),to(t,r,a,i),eo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Xs(n,s);a.props=c;var l=a.context,u=n.contextType;o=mi,typeof u==`object`&&u&&(o=ca(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ys(t,a,r,o),Ka=!1;var f=t.memoizedState;a.state=f,to(t,r,a,i),eo(),l=t.memoizedState,s||f!==l||Ka?(typeof d==`function`&&(Ks(t,n,d,r),l=t.memoizedState),(c=Ka||Js(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ja(e,t),o=t.memoizedProps,u=Xs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=mi,typeof l==`object`&&l&&(c=ca(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ys(t,a,r,c),Ka=!1,f=t.memoizedState,a.state=f,to(t,r,a,i),eo();var p=t.memoizedState;o!==d||f!==p||Ka||e!==null&&e.dependencies!==null&&oa(e.dependencies)?(typeof s==`function`&&(Ks(t,n,s,r),p=t.memoizedState),(u=Ka||Js(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&oa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,_c(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Wa(t,e.child,null,i),t.child=Wa(t,null,n,i)):sc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Mc(e,t,i),e}function xc(e,t,n,r){return Yi(),t.flags|=256,sc(e,t,n,r),t.child}var Sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cc(e){return{baseLanes:e,cachePool:Da()}}function wc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Tc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(P.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(M){if(a?fo(t):ho(t),(e=j)?(e=rf(e,Ui),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Vi=t,j=null)):e=null,e===null)throw Gi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(ho(t),a=t.mode,c=Dc({mode:`hidden`,children:c},a),r=xi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,s,n),t.memoizedState=Sc,fc(null,r)):(fo(t),Ec(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(fo(t),t.flags&=-257,t=Oc(e,t,n)):t.memoizedState===null?(ho(t),c=r.fallback,a=t.mode,r=Dc({mode:`visible`,children:r.children},a),c=xi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Wa(t,e.child,null,n),r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,s,n),t.memoizedState=Sc,t=fc(null,r)):(ho(t),t.child=e.child,t.flags|=128,t=null);else if(fo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Zi({value:r,source:null,stack:null}),t=Oc(e,t,n)}else if(B||aa(e,t,n,!1),s=(n&e.childLanes)!==0,B||s){if(s=G,s!==null&&(r=ct(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,di(e,r),hu(s,e,r),oc;af(c)||Du(),t=Oc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,j=cf(c.nextSibling),Vi=t,M=!0,Hi=null,Ui=!1,e!==null&&Bi(t,e),t=Ec(t,r.children),t.flags|=4096);return t}return a?(ho(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=vi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=xi(c,a,n,null),c.flags|=2):c=vi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,fc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Cc(n):(a=c.cachePool,a===null?a=Da():(l=N._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=wc(e,s,n),t.memoizedState=Sc,fc(e.child,r)):(fo(t),n=e.child,e=n.sibling,n=vi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Ec(e,t){return t=Dc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Dc(e,t){return e=gi(22,e,null,t),e.lanes=0,e}function Oc(e,t,n){return Wa(t,e.child,null,n),e=Ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ra(e.return,t,n)}function Ac(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function jc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=P.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,A(P,o),sc(e,t,r,n),r=M?Ai:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kc(e,n,t);else if(e.tag===19)kc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_o(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ac(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_o(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ac(t,!0,n,null,a,r);break;case`together`:Ac(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Mc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(aa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=vi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&oa(e))):!0}function Pc(e,t,n){switch(t.tag){case 3:_e(t,t.stateNode.containerInfo),ta(t,N,e.memoizedState.cache),Yi();break;case 27:case 5:ye(t);break;case 4:_e(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,po(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(fo(t),e=Mc(e,t,n),e===null?null:e.sibling):Tc(e,t,n):(fo(t),t.flags|=128,null);fo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(aa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return jc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),A(P,P.current),r)break;return null;case 22:return t.lanes=0,dc(e,t,n,t.pendingProps);case 24:ta(t,N,e.memoizedState.cache)}return Mc(e,t,n)}function Fc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)B=!0;else{if(!Nc(e,n)&&!(t.flags&128))return B=!1,Pc(e,t,n);B=!!(e.flags&131072)}else B=!1,M&&t.flags&1048576&&Li(t,Ai,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Pa(t.elementType),t.type=e,typeof e==`function`)_i(e)?(r=Xs(e,r),t.tag=1,t=bc(null,t,e,r,n)):(t.tag=0,t=vc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=cc(null,t,e,r,n);break a}else if(a===ne){t.tag=14,t=lc(null,t,e,r,n);break a}}throw t=ce(e)||e,Error(i(306,t,``))}}return t;case 0:return vc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Xs(r,t.pendingProps),bc(e,t,r,a,n);case 3:a:{if(_e(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ja(e,t),to(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ta(t,N,r),r!==o.cache&&ia(t,[N],n,!0),eo(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=xc(e,t,r,n);break a}else if(r!==a){a=Ei(Error(i(424)),t),Zi(a),t=xc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(j=cf(e.firstChild),Vi=t,M=!0,Hi=null,Ui=!0,n=Ga(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Yi(),r===a){t=Mc(e,t,n);break a}sc(e,t,r,n)}t=t.child}return t;case 26:return _c(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:M||(n=t.type,e=t.pendingProps,r=Bd(he.current).createElement(n),r[mt]=t,r[ht]=e,Pd(r,n,e),Dt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ye(t),e===null&&M&&(r=t.stateNode=ff(t.type,t.pendingProps,he.current),Vi=t,Ui=!0,a=j,Zd(t.type)?(lf=a,j=cf(r.firstChild)):j=a),sc(e,t,t.pendingProps.children,n),_c(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&M&&((a=r=j)&&(r=tf(r,t.type,t.pendingProps,Ui),r===null?a=!1:(t.stateNode=r,Vi=t,j=cf(r.firstChild),Ui=!1,a=!0)),a||Gi(t)),ye(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Do(e,t,Ao,null,null,n),Qf._currentValue=a),_c(e,t),sc(e,t,r,n),t.child;case 6:return e===null&&M&&((e=n=j)&&(n=nf(n,t.pendingProps,Ui),n===null?e=!1:(t.stateNode=n,Vi=t,j=null,e=!0)),e||Gi(t)),null;case 13:return Tc(e,t,n);case 4:return _e(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wa(t,null,r,n):sc(e,t,r,n),t.child;case 11:return cc(e,t,t.type,t.pendingProps,n);case 7:return sc(e,t,t.pendingProps,n),t.child;case 8:return sc(e,t,t.pendingProps.children,n),t.child;case 12:return sc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ta(t,t.type,r.value),sc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,sa(t),a=ca(a),r=r(a),t.flags|=1,sc(e,t,r,n),t.child;case 14:return lc(e,t,t.type,t.pendingProps,n);case 15:return uc(e,t,t.type,t.pendingProps,n);case 19:return jc(e,t,n);case 31:return gc(e,t,n);case 22:return dc(e,t,n,t.pendingProps);case 24:return sa(t),r=ca(N),e===null?(a=Ta(),a===null&&(a=G,o=ma(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},qa(t),ta(t,N,a)):((e.lanes&n)!==0&&(Ja(e,t),to(t,null,null,n),eo()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ta(t,N,r),r!==a.cache&&ia(t,[N],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ta(t,N,r))),sc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Ic(e){e.flags|=4}function Lc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Fa=ja,ka}else e.flags&=-16777217}function Rc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Fa=ja,ka}function zc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:nt(),e.lanes|=t,Xl|=t)}function Bc(e,t){if(!M)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function V(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vc(e,t,n){var r=t.pendingProps;switch(zi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return V(t),null;case 1:return V(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),na(N),ve(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ji(t)?Ic(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xi())),V(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Ic(t),o===null?(V(t),Lc(t,a,null,r,n)):(V(t),Rc(t,o))):o?o===e.memoizedState?(V(t),t.flags&=-16777217):(Ic(t),V(t),Rc(t,o)):(e=e.memoizedProps,e!==r&&Ic(t),V(t),Lc(t,a,e,r,n)),null;case 27:if(be(t),n=he.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return V(t),null}e=pe.current,Ji(t)?Ki(t,e):(e=ff(a,r,n),t.stateNode=e,Ic(t))}return V(t),null;case 5:if(be(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return V(t),null}if(o=pe.current,Ji(t))Ki(t,o);else{var s=Bd(he.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[mt]=t,o[ht]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Ic(t)}}return V(t),Lc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=he.current,Ji(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Vi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[mt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Gi(t,!0)}else e=Bd(e).createTextNode(r),e[mt]=t,t.stateNode=e}return V(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ji(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[mt]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),e=!1}else n=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(go(t),t):(go(t),null);if(t.flags&128)throw Error(i(558))}return V(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ji(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[mt]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),a=!1}else a=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(go(t),t):(go(t),null)}return go(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),zc(t,t.updateQueue),V(t),null);case 4:return ve(),e===null&&Sd(t.stateNode.containerInfo),V(t),null;case 10:return na(t.type),V(t),null;case 19:if(k(P),r=t.memoizedState,r===null)return V(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Bc(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=_o(e),o!==null){for(t.flags|=128,Bc(r,!1),e=o.updateQueue,t.updateQueue=e,zc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)yi(n,e),n=n.sibling;return A(P,P.current&1|2),M&&Ii(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ne()>nu&&(t.flags|=128,a=!0,Bc(r,!1),t.lanes=4194304)}else{if(!a)if(e=_o(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,zc(t,e),Bc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!M)return V(t),null}else 2*Ne()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,a=!0,Bc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(V(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ne(),e.sibling=null,n=P.current,A(P,a?n&1|2:n&1),M&&Ii(t,r.treeForkCount),e);case 22:case 23:return go(t),co(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(V(t),t.subtreeFlags&6&&(t.flags|=8192)):V(t),n=t.updateQueue,n!==null&&zc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&k(wa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),na(N),V(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Hc(e,t){switch(zi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return na(N),ve(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return be(t),null;case 31:if(t.memoizedState!==null){if(go(t),t.alternate===null)throw Error(i(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(go(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return k(P),null;case 4:return ve(),null;case 10:return na(t.type),null;case 22:case 23:return go(t),co(),e!==null&&k(wa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return na(N),null;case 25:return null;default:return null}}function Uc(e,t){switch(zi(t),t.tag){case 3:na(N),ve();break;case 26:case 27:case 5:be(t);break;case 4:ve();break;case 31:t.memoizedState!==null&&go(t);break;case 13:go(t);break;case 19:k(P);break;case 10:na(t.type);break;case 22:case 23:go(t),co(),e!==null&&k(wa);break;case 24:na(N)}}function Wc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Gc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Kc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ro(t,n)}catch(t){Z(e,e.return,t)}}}function qc(e,t,n){n.props=Xs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Jc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Yc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Xc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Zc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[ht]=t}catch(t){Z(e,e.return,t)}}function Qc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function $c(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[mt]=e,t[ht]=n}catch(t){Z(e,e.return,t)}}var rl=!1,H=!1,il=!1,al=typeof WeakSet==`function`?WeakSet:Set,ol=null;function sl(e,t){if(e=e.containerInfo,Rd=sp,e=Fr(e),Ir(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,ol=t;ol!==null;)if(t=ol,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,ol=e;else for(;ol!==null;){switch(t=ol,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Xs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,ol=e;break}ol=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Wc(5,n);break;case 1:if(Sl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Xs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Kc(n),r&512&&Jc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ro(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&nl(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Xc(n),r&512&&Jc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||rl,!r){t=t!==null&&t.memoizedState!==null||H,i=rl;var a=H;rl=r,(H=t)&&!a?wl(e,n,(n.subtreeFlags&8772)!=0):Sl(e,n),rl=i,H=a}break;case 30:break;default:Sl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&St(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount==`function`)try{Ue.onCommitFiberUnmount(He,n)}catch{}switch(n.tag){case 26:H||Yc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:H||Yc(n,t);var r=U,i=ul;Zd(n.type)&&(U=n.stateNode,ul=!1),dl(e,t,n),pf(n.stateNode),U=r,ul=i;break;case 5:H||Yc(n,t);case 6:if(r=U,i=ul,U=null,dl(e,t,n),U=r,ul=i,U!==null)if(ul)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:U!==null&&(ul?(e=U,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(U,n.stateNode));break;case 4:r=U,i=ul,U=n.stateNode.containerInfo,ul=!0,dl(e,t,n),U=r,ul=i;break;case 0:case 11:case 14:case 15:Gc(2,n,t),H||Gc(4,n,t),dl(e,t,n);break;case 1:H||(Yc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&qc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:H=(r=H)||n.memoizedState!==null,dl(e,t,n),H=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new al),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new al),t;default:throw Error(i(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){U=c.stateNode,ul=!1;break a}break;case 5:U=c.stateNode,ul=!1;break a;case 3:case 4:U=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(U===null)throw Error(i(160));fl(o,s,a),U=null,ul=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Gc(3,e,e.return),Wc(3,e),Gc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),r&64&&rl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=vl;if(_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[xt]||o[mt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[mt]=e,Dt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[mt]=e,Dt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Zc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),n!==null&&r&4&&Zc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),e.flags&32){a=e.stateNode;try{$t(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Zc(e,a,n===null?a:n.memoizedProps)),r&1024&&(il=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=vl,vl=gf(t.containerInfo),_l(t,e),vl=a,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}il&&(il=!1,xl(e));break;case 4:r=vl,vl=gf(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Ne()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=rl,d=H;if(rl=u||a,H=d||l,_l(t,e),H=d,rl=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||rl||H||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Qc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;tl(e,$c(e),a);break;case 5:var o=n.stateNode;n.flags&32&&($t(o,``),n.flags&=-33),tl(e,$c(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;el(e,$c(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Gc(4,t,t.return),Cl(t);break;case 1:Yc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&qc(t,t.return,n),Cl(t);break;case 27:pf(t.stateNode);case 26:case 5:Yc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function wl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:wl(i,a,n),Wc(4,a);break;case 1:if(wl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)no(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Kc(a),Jc(a,a.return);break;case 27:nl(a);case 26:case 5:wl(i,a,n),n&&r===null&&o&4&&Xc(a),Jc(a,a.return);break;case 12:wl(i,a,n);break;case 31:wl(i,a,n),n&&o&4&&pl(i,a);break;case 13:wl(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&wl(i,a,n),Jc(a,a.return);break;case 30:break;default:wl(i,a,n)}t=t.sibling}}function Tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ha(n))}function El(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e))}function Dl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ol(e,t,n,r),t=t.sibling}function Ol(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dl(e,t,n,r),i&2048&&Wc(9,t);break;case 1:Dl(e,t,n,r);break;case 3:Dl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e)));break;case 12:if(i&2048){Dl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Dl(e,t,n,r);break;case 31:Dl(e,t,n,r);break;case 13:Dl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Dl(e,t,n,r):(a._visibility|=2,kl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Dl(e,t,n,r):Al(e,t),i&2048&&Tl(o,t);break;case 24:Dl(e,t,n,r),i&2048&&El(t.alternate,t);break;default:Dl(e,t,n,r)}}function kl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,c,i),Wc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,kl(a,o,s,c,i)):u._visibility&2?kl(a,o,s,c,i):Al(a,o),i&&l&2048&&Tl(o.alternate,o);break;case 24:kl(a,o,s,c,i),i&&l&2048&&El(o.alternate,o);break;default:kl(a,o,s,c,i)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Al(n,r),i&2048&&Tl(r.alternate,r);break;case 24:Al(n,r),i&2048&&El(r.alternate,r);break;default:Al(n,r)}t=t.sibling}}var jl=8192;function Ml(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Nl(e,t,n),e=e.sibling}function Nl(e,t,n){switch(e.tag){case 26:Ml(e,t,n),e.flags&jl&&e.memoizedState!==null&&Gf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,n);break;case 3:case 4:var r=vl;vl=gf(e.stateNode.containerInfo),Ml(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,Ml(e,t,n),jl=r):Ml(e,t,n));break;default:Ml(e,t,n)}}function Pl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Rl(r,e)}Pl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Gc(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Fl(e);break;default:Fl(e)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Rl(r,e)}Pl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Gc(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Rl(e,t){for(;ol!==null;){var n=ol;switch(n.tag){case 0:case 11:case 15:Gc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ha(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ol=r;else a:for(n=e;ol!==null;){r=ol;var i=r.sibling,a=r.return;if(ll(r),r===n){ol=null;break a}if(i!==null){i.return=a,ol=i;break a}ol=a}}}var zl={getCacheForType:function(e){var t=ca(N),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ca(N).controller.signal}},Bl=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Y=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,X=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return W&2&&q!==0?q&-q:E.T===null?dt():dd()}function mu(){if(Yl===0)if(!(q&536870912)||M){var e=Xe;Xe<<=1,!(Xe&3932160)&&(Xe=262144),Yl=e}else Yl=536870912;return e=lo.current,e!==null&&(e.flags|=32),Yl}function hu(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,q,Yl,!1)),it(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(ql|=n),Y===4&&yu(e,q,Yl,!1)),rd(e))}function gu(e,t,n){if(W&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||et(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Ul&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=o,ql|=o,a=4;break a}o=Ql,Ql=a,o!==null&&(Ql===null?Ql=o:Ql.push.apply(Ql,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Yl,!Hl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=eu+300-Ne(),10<a)){if(yu(r,t,Yl,!Hl),$e(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,o,`Throttled`,-0,0),a);break a}_u(r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:cn},Nl(t,a,d);var m=(a&62914560)===a?eu-Ne():(a&4194048)===a?tu-Ne():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ar(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ge(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ot(e,n,t)}function bu(){return W&6?!0:(id(0,!1),!1)}function xu(){if(K!==null){if(J===0)var e=K.return;else e=K,ea=$i=null,No(e),Ra=null,za=0,e=K;for(;e!==null;)Uc(e.alternate,e),e=e.return;K=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),G=e,K=n=vi(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=et(e,t),Wl=!1,Xl=Yl=Jl=ql=Kl=Y=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ge(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,ci(),n}function Cu(e,t){F=null,E.H=Hs,t===Oa||t===Aa?(t=Ia(),J=3):t===ka?(t=Ia(),J=4):J=t===oc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Y=1,ec(e,Ei(t,e.current)))}function wu(){var e=lo.current;return e===null?!0:(q&4194048)===q?uo===null:(q&62914560)===q||q&536870912?e===uo:!1}function Tu(){var e=E.H;return E.H=Hs,e===null?Hs:e}function Eu(){var e=E.A;return E.A=zl,e}function Du(){Y=4,Hl||(q&4194048)!==q&&lo.current!==null||(Ul=!0),!(Kl&134217727)&&!(ql&134217727)||G===null||yu(G,q,Yl,!1)}function Ou(e,t,n){var r=W;W|=2;var i=Tu(),a=Eu();(G!==e||q!==t)&&(ru=null,Su(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:lo.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Pu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Pu(e,s,c,l)}}ku(),o=Y;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,ea=$i=null,W=r,E.H=i,E.A=a,K===null&&(G=null,q=0,ci()),o}function ku(){for(;K!==null;)Mu(K)}function Au(e,t){var n=W;W|=2;var r=Tu(),a=Eu();G!==e||q!==t?(ru=null,nu=Ne()+500,Su(e,t)):Ul=et(e,t);a:do try{if(J!==0&&K!==null){t=K;var o=Vl;b:switch(J){case 1:J=0,Vl=null,Pu(e,t,o,1);break;case 2:case 9:if(Ma(o)){J=0,Vl=null,Nu(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),rd(e)},o.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:Ma(o)?(J=0,Vl=null,Nu(t)):(J=0,Vl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(K.tag){case 26:s=K.memoizedState;case 5:case 27:var c=K;if(s?Wf(s):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Fu(u))}break b}}J=0,Vl=null,Pu(e,t,o,5);break;case 6:J=0,Vl=null,Pu(e,t,o,6);break;case 8:xu(),Y=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return ea=$i=null,E.H=r,E.A=a,W=n,K===null?(G=null,q=0,ci(),Y):0}function ju(){for(;K!==null&&!je();)Mu(K)}function Mu(e){var t=Fc(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=yc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=yc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:No(t);default:Uc(n,t),t=K=yi(t,Gl),t=Fc(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Pu(e,t,n,r){ea=$i=null,No(t),Ra=null,za=0;var i=t.return;try{if(ac(e,i,t,n,q)){Y=1,ec(e,Ei(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,ec(e,Ei(n,e.current)),K=null;return}t.flags&32768?(M||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=lo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Hl);return}e=t.return;var n=Vc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function Iu(e,t){do{var n=Hc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(X!==0);if(W&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=si,at(e,n,o,s,c,l),e===G&&(K=G=null,q=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Le,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=E.T,E.T=null,a=D.p,D.p=2,s=W,W|=4;try{sl(e,t,n)}finally{W=s,D.p=a,E.T=r}}X=1,Ru(),zu(),Bu()}}function Ru(){if(X===1){X=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=W;W|=4;try{yl(t,e);var a=zd,o=Fr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Pr(s.ownerDocument.documentElement,s)){if(c!==null&&Ir(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Nr(s,h),v=Nr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{W=i,D.p=r,E.T=n}}e.current=t,X=2}}function zu(){if(X===2){X=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=W;W|=4;try{cl(e,t.alternate,t)}finally{W=i,D.p=r,E.T=n}}X=3}}function Bu(){if(X===4||X===3){X=0,Me();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?X=5:(X=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),ut(n),t=t.stateNode,Ue&&typeof Ue.onCommitFiberRoot==`function`)try{Ue.onCommitFiberRoot(He,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=E.T,i=D.p,D.p=2,E.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{E.T=t,D.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ha(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(X!==5)return!1;var e=au,t=cu;cu=0;var n=ut(su),r=E.T,a=D.p;try{D.p=32>n?32:n,E.T=null,n=lu,lu=null;var o=au,s=su;if(X=0,ou=au=null,su=0,W&6)throw Error(i(331));var c=W;if(W|=4,Il(o.current),Ol(o,o.current,s,n),W=c,id(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot==`function`)try{Ue.onPostCommitFiberRoot(He,o)}catch{}return!0}finally{D.p=a,E.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ei(n,t),t=nc(e.stateNode,t,2),e=Xa(e,t,2),e!==null&&(it(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Ei(n,e),n=rc(2),r=Xa(t,n,2),r!==null&&(ic(n,r,t,e),it(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>Ne()-eu?!(W&2)&&Su(e,0):Jl|=n,Xl===q&&(Xl=0)),rd(e)}function qu(e,t){t===0&&(t=nt()),e=di(e,t),e!==null&&(it(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return ke(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ge(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=q,a=$e(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||et(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Ne(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}X!==0&&X!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ge(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=tt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=$e(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ae(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||et(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ae(r),ut(n)){case 2:case 8:n=Ie;break;case 32:n=Le;break;case 268435456:n=ze;break;default:n=Le}return r=cd.bind(null,e),n=ke(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ae(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=q;return r=$e(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Ne()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){W&6?ke(Fe,ad):od()})}function dd(){if(nd===0){var e=va;e===0&&(e=Ye,Ye<<=1,!(Ye&261888)&&(Ye=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:sn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[ht]||null).action),o=r.submitter;o&&(t=(t=o[ht]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new kn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Os(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Os(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ni.length;hd++){var gd=ni[hd];ri(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ri(Jr,`onAnimationEnd`),ri(Yr,`onAnimationIteration`),ri(Xr,`onAnimationStart`),ri(`dblclick`,`onDoubleClick`),ri(`focusin`,`onFocus`),ri(`focusout`,`onBlur`),ri(Zr,`onTransitionRun`),ri(Qr,`onTransitionStart`),ri($r,`onTransitionCancel`),ri(ei,`onTransitionEnd`),jt(`onMouseEnter`,[`mouseout`,`mouseover`]),jt(`onMouseLeave`,[`mouseout`,`mouseover`]),jt(`onPointerEnter`,[`pointerout`,`pointerover`]),jt(`onPointerLeave`,[`pointerout`,`pointerover`]),At(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),At(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),At(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),At(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[_t];n===void 0&&(n=t[_t]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Ot.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!vn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Ct(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}hn(function(){var r=a,i=un(n),s=[];a:{var c=ti.get(e);if(c!==void 0){var l=kn,u=e;switch(e){case`keypress`:if(wn(n)===0)break a;case`keydown`:case`keyup`:l=qn;break;case`focusin`:u=`focus`,l=Rn;break;case`focusout`:u=`blur`,l=Rn;break;case`beforeblur`:case`afterblur`:l=Rn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=In;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Ln;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Yn;break;case Jr:case Yr:case Xr:l=zn;break;case ei:l=Xn;break;case`scroll`:case`scrollend`:l=jn;break;case`wheel`:l=Zn;break;case`copy`:case`cut`:case`paste`:l=Bn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Jn;break;case`toggle`:case`beforetoggle`:l=Qn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=gn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==ln&&(u=n.relatedTarget||n.fromElement)&&(Ct(u)||u[gt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Ct(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=In,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Jn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Tt(l),h=u==null?c:Tt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Ct(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Tt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=vr;else if(fr(c))if(yr)v=Or;else{v=Er;var y=Tr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&rn(r.elementType)&&(v=vr):v=Dr;if(v&&=v(e,r)){pr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Yt(c,`number`,c.value)}switch(y=r?Tt(r):window,e){case`focusin`:(fr(y)||y.contentEditable===`true`)&&(Rr=y,zr=r,Br=null);break;case`focusout`:Br=zr=Rr=null;break;case`mousedown`:Vr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Vr=!1,Hr(s,n,i);break;case`selectionchange`:if(Lr)break;case`keydown`:case`keyup`:Hr(s,n,i)}var b;if(er)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else cr?or(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(rr&&n.locale!==`ko`&&(cr||x!==`onCompositionStart`?x===`onCompositionEnd`&&cr&&(b=Cn()):(bn=i,xn=`value`in bn?bn.value:bn.textContent,cr=!0)),y=Ed(r,x),0<y.length&&(x=new Vn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=sr(n),b!==null&&(x.data=b)))),(b=nr?lr(e,n):ur(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Vn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=gn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=gn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=gn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=gn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&$t(e,``+r);break;case`className`:Lt(e,`class`,r);break;case`tabIndex`:Lt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Lt(e,n,r);break;case`style`:nn(e,r,o);break;case`data`:if(t!==`object`){Lt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=sn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),It(e,`popover`,r);break;case`xlinkActuate`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:It(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=an.get(n)||n,It(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:nn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&$t(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!kt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ht]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):It(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Jt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Xt(e,!!r,n,!0):Xt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Qt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(rn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}qt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Xt(e,!!n,n?[]:``,!1):Xt(e,!!n,t,!0)):Xt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Zt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(rn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[xt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),St(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[xt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);St(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=D.d;D.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=wt(e);t!==null&&t.tag===5&&t.type===`form`?As(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Kt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Dt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Kt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Kt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Kt(n.imageSizes)+`"]`)):i+=`[href="`+Kt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Dt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Kt(r)+`"][href="`+Kt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Dt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Et(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Dt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Et(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Dt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Et(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Dt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=he.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Et(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Et(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Et(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Kt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Dt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Kt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Kt(n.href)+`"]`);if(r)return t.instance=r,Dt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Dt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Dt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Dt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Dt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Dt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[xt]||a[mt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Dt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Dt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rt(0),this.hiddenUpdates=rt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=gi(3,null,null,t),e.current=a,a.stateNode=e,t=ma(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},qa(a),e}function tp(e){return e?(e=mi,e):mi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ya(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Xa(e,r,t),n!==null&&(hu(n,e,t),Za(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=di(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=lt(t);var n=di(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,up(e,t,n,r)}finally{D.p=a,E.T=i}}function lp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,up(e,t,n,r)}finally{D.p=a,E.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=wt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Qe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ge(o);s.entanglements[1]|=c,o&=~c}rd(a),!(W&6)&&(nu=Ne()+500,id(0,!1))}}break;case 31:case 13:s=di(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=un(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Ct(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Pe()){case Fe:return 2;case Ie:return 8;case Le:case Re:return 32;case ze:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=wt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Ct(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ft(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ft(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ln=r,n.target.dispatchEvent(r),ln=null}else return t=wt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=wt(n);a!==null&&(e.splice(t,3),t-=3,Os(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ht]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ht]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[gt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=dt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.4`)throw Error(i(527,Lp,`19.2.4`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.4`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.2.4`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{He=zp.inject(Rp),Ue=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Zs,s=Qs,c=$s;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[gt]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u()),v=g(),y=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),b=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),x=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),S=e=>{let t=x(e);return t.charAt(0).toUpperCase()+t.slice(1)},C={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},w=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},ee=(0,_.createContext)({}),te=()=>(0,_.useContext)(ee),ne=(0,_.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=te()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,_.createElement)(`svg`,{ref:c,...C,width:t??l??C.width,height:t??l??C.height,stroke:e??f,strokeWidth:m,className:y(`lucide`,p,i),...!a&&!w(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,_.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),T=(e,t)=>{let n=(0,_.forwardRef)(({className:n,...r},i)=>(0,_.createElement)(ne,{ref:i,iconNode:t,className:y(`lucide-${b(S(e))}`,`lucide-${e}`,n),...r}));return n.displayName=S(e),n},re=T(`book-open`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,key:`ruj8y`}]]),ie=T(`chevron-left`,[[`path`,{d:`m15 18-6-6 6-6`,key:`1wnfg3`}]]),ae=T(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),oe=T(`circle-check-big`,[[`path`,{d:`M21.801 10A10 10 0 1 1 17 3.335`,key:`yps3ct`}],[`path`,{d:`m9 11 3 3L22 4`,key:`1pflzl`}]]),se=T(`circle-x`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]]),ce=T(`list`,[[`path`,{d:`M3 5h.01`,key:`18ugdj`}],[`path`,{d:`M3 12h.01`,key:`nlz23k`}],[`path`,{d:`M3 19h.01`,key:`noohij`}],[`path`,{d:`M8 5h13`,key:`1pao27`}],[`path`,{d:`M8 12h13`,key:`1za7za`}],[`path`,{d:`M8 19h13`,key:`m83p4d`}]]),le=T(`menu`,[[`path`,{d:`M4 5h16`,key:`1tepv9`}],[`path`,{d:`M4 12h16`,key:`1lakjw`}],[`path`,{d:`M4 19h16`,key:`1djgab`}]]),E=T(`play`,[[`path`,{d:`M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,key:`10ikf1`}]]),D=T(`rotate-ccw`,[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}]]),ue=T(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),de=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),O=o(((e,t)=>{t.exports=de()}))(),fe=`
# Computer Networks and Cloud Computing

## 1. Data Communication

1. Data communication is the process of:  
   A) Storing data  
   B) Processing data  
   C) Transmitting data between devices ✓  
   D) Encrypting data

2. The basic components of data communication include sender, receiver, medium, protocol and:  
   A) File  
   B) Message ✓  
   C) Port  
   D) Memory

3. Which transmission mode allows communication in both directions simultaneously?  
   A) Simplex  
   B) Half Duplex  
   C) Full Duplex ✓  
   D) Broadcast

4. The physical path through which data travels is called:  
   A) Protocol  
   B) Node  
   *(Answer not explicitly given; likely "Medium")*

5. Which of the following is an example of guided media?  
   A) Radio waves  
   B) Infrared  
   C) Twisted pair cable ✓  
   D) Microwave

6. Bandwidth refers to:  
   A) Storage capacity  
   B) Amount of data transmitted per second ✓  
   C) Network security  
   D) Data compression

7. Noise in communication systems refers to:  
   A) High speed data  
   B) Unwanted signal interference ✓  
   C) Packet loss  
   D) Data encryption

8. Latency is the:  
   A) Network speed  
   B) Delay in data transmission ✓  
   C) Packet size  
   D) Protocol type

9. Which device is used to convert digital signals into analog signals?  
   A) Router  
   B) Switch  
   C) Modem ✓  
   D) Repeater

10. Error detection technique commonly used in networks is:  
    A) FTP  
    B) TCP  
    C) CRC ✓  
    D) SMTP

## 2. Computer Networks

11. A computer network is:  
    A) Single computer system  
    B) Collection of interconnected computers ✓  
    C) Internet connection  
    D) Software program

12. LAN stands for:  
    A) Large Area Network  
    B) Local Area Network ✓  
    C) Logical Access Network  
    D) Limited Area Network

13. Which topology connects all devices to a central hub?  
    A) Ring  
    B) Bus  
    C) Star ✓  
    D) Mesh

14. The global system of interconnected networks is called:  
    A) LAN  
    B) WAN  
    *(Answer: Internet, but not listed; likely WAN is closest)*

15. Which device connects different networks together?  
    A) Hub  
    B) Switch  
    C) Router ✓  
    D) Repeater

16. MAN stands for:  
    A) Major Area Network  
    B) Metropolitan Area Network ✓  
    C) Micro Area Network  
    D) Main Access Network

17. Which topology has highest reliability?  
    A) Bus  
    B) Star  
    C) Mesh ✓  
    D) Ring

18. The OSI model has:  
    A) 5 layers  
    B) 6 layers  
    C) 7 layers ✓  
    D) 8 layers

19. Which network type covers large geographical areas?  
    A) LAN  
    B) WAN ✓  
    C) PAN  
    D) CAN

20. A device that connects multiple devices in a LAN is:  
    A) Router  
    B) Switch ✓  
    C) Modem  
    D) Gateway

## 3. Data Link Layer

21. Data link layer is responsible for:  
    A) Routing  
    B) Node to node delivery ✓  
    C) Encryption  
    D) Application services

22. The unit of data at Data Link Layer is called:  
    A) Packet  
    B) Frame ✓  
    C) Bit  
    D) Segment

23. MAC address operates at:  
    A) Network layer  
    B) Transport layer  
    C) Data Link Layer ✓  
    D) Application layer

24. Ethernet is a protocol of:  
    A) Transport layer  
    B) Data Link Layer ✓

25. Error detection method used in Data Link Layer is:  
    A) HTTP  
    B) CRC ✓  
    C) FTP  
    D) SMTP

26. The MAC address length is:  
    A) 32 bits  
    B) 48 bits ✓  
    C) 64 bits  
    D) 128 bits

27. ARP protocol works between:  
    A) Application & Network layer  
    B) Network & Data Link Layer ✓  
    C) Transport & Application  
    D) Physical & Application

28. Flow control ensures:  
    A) Encryption  
    B) Sender does not overwhelm receiver ✓  
    C) Packet routing  
    D) Addressing

29. Switch mainly operates at:  
    A) Physical layer  
    B) Data Link Layer ✓  
    C) Network layer  
    D) Transport layer

30. Error control includes:  
    A) Encryption  
    B) Detection and correction of errors ✓  
    C) Compression  
    D) Fragmentation

## 4. Network Layer

31. Network layer is responsible for:  
    A) Encryption  
    B) Routing packets ✓  
    C) Data formatting  
    D) Email services

32. The unit of data in Network layer is:  
    A) Frame  
    B) Segment  
    C) Packet ✓  
    D) Bit

33. IP stands for:  
    A) Internet Process  
    B) Internet Protocol ✓  
    C) Internal Protocol  
    D) Integrated Packet

34. IPv4 address length is:  
    A) 32 bits ✓  
    B) 64 bits

35. IPv6 address length is:  
    A) 32 bits  
    B) 64 bits  
    C) 128 bits ✓  
    D) 256 bits

36. Router works at:  
    A) Physical layer  
    B) Data link layer  
    C) Network layer ✓  
    D) Transport layer

37. ICMP is used for:  
    A) File transfer  
    B) Error reporting ✓  
    C) Encryption  
    D) Authentication

38. Path determination is done by:  
    A) Hub  
    B) Switch  
    C) Router ✓  
    D) Bridge

39. Packet forwarding is function of:  
    A) Application layer  
    B) Network layer ✓  
    C) Data link layer  
    D) Transport layer

40. IP address uniquely identifies:  
    A) Network cable  
    B) Device on network ✓  
    C) Router port  
    D) Protocol

## 5. Transport Layer

41. Transport layer ensures:  
    A) Routing  
    B) End to end communication ✓  
    C) Switching  
    D) Encryption

42. Two main protocols of transport layer are:  
    A) HTTP & FTP  
    B) TCP & UDP ✓  
    C) ARP & ICMP  
    D) SMTP & POP

43. TCP is:  
    A) Connectionless  
    B) Connection oriented ✓  
    C) Unreliable  
    D) Fastest protocol

44. UDP is:  
    A) Connectionless protocol ✓  
    B) Reliable protocol

45. Data unit at transport layer is:  
    A) Frame  
    B) Packet  
    C) Segment ✓  
    D) Bit

46. Port numbers are used for:  
    A) Routing  
    B) Process identification ✓  
    C) Encryption  
    D) Switching

47. TCP provides:  
    A) No reliability  
    B) Reliable transmission ✓  
    C) No flow control  
    D) No error checking

48. UDP is commonly used for:  
    A) File transfer  
    B) Email  
    C) Streaming and gaming ✓  
    D) Database access

49. Multiplexing occurs at:  
    A) Physical layer  
    B) Transport layer ✓  
    C) Network layer  
    D) Application layer

50. Which layer controls congestion?  
    A) Application  
    B) Network  
    C) Transport ✓  
    D) Data link

## 6. Application Layer

51. Application layer provides services to:  
    A) Network devices  
    B) End users ✓  
    C) Routers  
    D) Switches

52. Which protocol is used for web browsing?  
    A) FTP  
    B) SMTP  
    C) HTTP ✓  
    D) POP3

53. FTP stands for:  
    A) File Transfer Program  
    B) File Transfer Protocol ✓  
    C) Fast Transfer Protocol  
    D) File Transmission Process

54. SMTP is used for:  
    A) File transfer  
    B) Web browsing  
    *(Answer: sending email)*

55. POP3 protocol is used for:  
    A) Sending email  
    B) Receiving email ✓  
    C) Encrypting email  
    D) Routing email

56. DNS stands for:  
    A) Data Name System  
    B) Domain Name System ✓  
    C) Digital Network System  
    D) Domain Network Server

57. DNS converts:  
    A) MAC to IP  
    B) Domain name to IP address ✓  
    C) IP to MAC  
    D) URL to file

58. Telnet is used for:  
    A) File transfer  
    B) Remote login ✓  
    C) Email service  
    D) Encryption

59. HTTP operates at:  
    A) Network layer  
    B) Transport layer  
    C) Application layer ✓  
    D) Data link layer

60. HTTPS provides:  
    A) Faster browsing  
    B) Secure web communication ✓  
    C) Data compression  
    D) Email service

## 7. Wireless Networks

61. Wireless communication uses:  
    A) Cables  
    B) Radio waves ✓  
    C) Fiber optics  
    D) Copper wires

62. Wi-Fi stands for:  
    A) Wireless File  
    B) Wireless Fiber  
    C) Wireless Fidelity ✓  
    D) Wide Fiber

63. Bluetooth is mainly used for:  
    A) Long distance communication  
    B) Short range communication ✓  
    C) Satellite communication  
    D) Internet routing

64. The standard for Wi-Fi is:  
    A) IEEE 802.11 ✓  
    B) IEEE 802.3

65. Cellular networks mainly use:  
    A) Routers  
    B) Base stations ✓  
    C) Switches  
    D) Bridges

66. 5G stands for:  
    A) Fifth Generation mobile network ✓  
    B) Fifth Generation wireless technology  
    C) Fifth Global network  
    D) Fifth Grid network

67. WLAN stands for:  
    A) Wide LAN  
    B) Wireless Local Area Network ✓  
    C) Wireless Logical Area Network  
    D) Wired LAN

68. Access point in Wi-Fi network:  
    A) Stores data  
    B) Connects wireless devices to network ✓  
    C) Encrypts data  
    D) Routes packets

69. Signal interference in wireless networks causes:  
    A) Faster speed  
    B) Reduced performance ✓  
    C) Stronger signals  
    D) More bandwidth

70. NFC is mainly used for:  
    A) Internet routing  
    B) Contactless payments ✓  
    C) Email transfer  
    D) File compression

## 8. Cloud Computing

71. Cloud computing provides:  
    A) Local storage  
    B) Internet-based computing services ✓  
    C) Offline computing  
    D) Hardware devices

72. Which company provides cloud services?  
    A) Microsoft  
    B) Amazon  
    C) Google  
    D) All of these ✓

73. SaaS stands for:  
    A) Software and System  
    B) Software as a Service ✓  
    C) Storage as Service  
    D) System as Service

74. PaaS stands for:  
    A) Platform and Software  
    B) Platform as a Service ✓

75. IaaS stands for:  
    A) Internet as a Service  
    B) Infrastructure as a Service ✓  
    C) Interface as a Service  
    D) Integration as a Service

76. Example of SaaS is:  
    A) AWS  
    B) Google Docs ✓  
    C) Virtual Machine  
    D) Storage server

77. Cloud deployment model accessible to everyone is:  
    A) Private cloud  
    B) Hybrid cloud  
    C) Public cloud ✓  
    D) Local cloud

78. Hybrid cloud combines:  
    A) LAN & WAN  
    B) Public and Private cloud ✓  
    C) SaaS & PaaS  
    D) Web & mobile

79. Main benefit of cloud computing:  
    A) High hardware cost  
    B) Scalability ✓  
    C) Local storage only  
    D) Offline processing

80. Virtualization is used in:  
    A) LAN  
    B) Cloud computing ✓  
    C) FTP  
    D) HTTP

## 9. Network Security (Network Perspective)

81. Network security protects:  
    A) Hardware only  
    B) Software only  
    C) Data and network resources ✓  
    D) Printer devices

82. Firewall is used to:  
    A) Speed up network  
    B) Block unauthorized access ✓  
    C) Store data  
    D) Compress files

83. Encryption converts:  
    A) Data to image  
    B) Plain text to cipher text ✓  
    C) Image to data  
    D) Data to signal

84. Decryption converts:  
    A) Cipher text to image  
    B) Cipher text to plain text ✓

85. SSL stands for:  
    A) Secure System Layer  
    B) Secure Sockets Layer ✓  
    C) Security Server Layer  
    D) Secure Signal Layer

86. Phishing attack aims to:  
    A) Improve network  
    B) Steal user information ✓  
    C) Speed internet  
    D) Encrypt files

87. VPN stands for:  
    A) Virtual Private Node  
    B) Virtual Private Network ✓  
    C) Verified Private Network  
    D) Visual Private Network

88. Antivirus software protects against:  
    A) Hardware failure  
    B) Malware ✓  
    C) Network cables  
    D) Internet speed issues

89. Authentication ensures:  
    A) Data compression  
    B) Identity verification ✓  
    C) Packet routing  
    D) Encryption only

90. IDS stands for:  
    A) Intrusion Detection System ✓  
    B) Internet Data System  
    C) Internal Data Security  
    D) Integrated Detection Service

## 10. Next Generation Networks

91. Next Generation Networks (NGN) are based on:  
    A) Analog systems  
    B) IP-based communication ✓  
    C) Cable networks  
    D) Satellite systems

92. 5G network provides:  
    A) Low speed  
    B) High speed and low latency ✓  
    C) Only voice calls  
    D) Only SMS

93. IoT stands for:  
    A) Internet of Technology  
    B) Internet of Things ✓  
    C) Internal Object Technology  
    D) Integrated Online Technology

94. IoT devices communicate through:  
    A) Manual signals  
    B) Internet connectivity ✓

95. Smart cities use:  
    A) Traditional networks  
    B) IoT and advanced networks ✓  
    C) Dial‑up connection  
    D) Analog communication

96. Edge computing processes data:  
    A) In cloud center only  
    B) Near the data source ✓  
    C) On router only  
    D) In ISP only

97. Software Defined Networking (SDN) separates:  
    A) Hardware & software  
    B) Control plane and data plane ✓  
    C) Router & switch  
    D) LAN & WAN

98. Network Function Virtualization (NFV) replaces:  
    A) Software  
    B) Hardware network devices with virtual ones ✓  
    C) Operating systems  
    D) Databases

99. 6G research focuses on:  
    A) Slower networks  
    B) Ultra-high speed communication ✓  
    C) Analog signals  
    D) Dial-up internet

100. Smart devices in NGN communicate using:  
     A) Offline storage  
     B) Internet protocols ✓  
     C) Paper records  
     D) Analog cables

---

# Programming (C++ / Java / Python)

## 1. Programming Fundamentals

1. A program is:  
   A) Hardware device  
   B) Set of instructions for computer ✓  
   C) Network protocol  
   D) Database

2. Programming language used to write instructions for computers is:  
   A) HTML  
   B) C++ ✓  
   C) HTTP  
   D) DNS

3. The process of finding and fixing errors in a program is called:  
   A) Compiling  
   B) Executing  
   C) Debugging ✓  
   D) Designing

4. Which of the following is a high level language?  
   A) Assembly  
   B) Machine code  
   *(Answer: C++ or Python – not listed, but likely "C++" from context)*

5. Compiler converts:  
   A) Machine code to English  
   B) High level code to machine code ✓  
   C) Binary to decimal  
   D) Data to information

6. Algorithm is:  
   A) Programming language  
   B) Step by step solution to a problem ✓  
   C) Software tool  
   D) Data structure

7. Flowchart is used to:  
   A) Store data  
   B) Represent algorithm graphically ✓  
   C) Execute program  
   D) Compile program

8. Interpreter executes program:  
   A) Whole program at once  
   B) Line by line ✓  
   C) After compilation  
   D) Without code

9. Which language is widely used for AI and ML?  
   A) C  
   B) Java  
   C) Python ✓  
   D) Pascal

10. Syntax error occurs when:  
    A) Program rules are violated ✓  
    B) Hardware fails  
    C) Network disconnects  
    D) Memory is full

## 2. Data Types & Variables

11. Variable is used to:  
    A) Store program  
    B) Store data value ✓  
    C) Connect network  
    D) Execute program

12. Which data type stores integer numbers?  
    A) float  
    B) char  
    C) int ✓  
    D) string

13. Which data type stores decimal numbers?  
    A) int  
    B) char  
    C) float ✓  
    D) bool

14. A variable name cannot start with:  
    A) Letter  
    B) Underscore  
    *(Answer: number)*

15. Boolean data type stores:  
    A) Numbers  
    B) Characters  
    C) True or False ✓  
    D) Strings

16. In C++, character data type is:  
    A) int  
    B) char ✓  
    C) bool  
    D) float

17. In Python, variable declaration requires:  
    A) Data type first  
    B) No explicit data type ✓  
    C) Semicolon  
    D) Pointer

18. Which of the following is valid variable name?  
    A) 1value  
    B) value1 ✓  
    C) #value  
    D) @value

19. String data type stores:  
    A) Integers  
    B) Boolean values  
    C) Text data ✓  
    D) Binary numbers

20. Which symbol is used for assignment in most languages?  
    A) ==  
    B) = ✓  
    C) !=  
    D) <=

## 3. Operators & Expressions

21. Operator is used to:  
    A) Store data  
    B) Perform operations on variables ✓  
    C) Execute program  
    D) Compile code

22. Which operator is used for addition?  
    A) -  
    B) * C) + ✓  
    D) /

23. Which operator is used for equality comparison?  
    A) =  
    B) == ✓  
    C) !=  
    D) <=

24. Logical AND operator is:  
    A) ||  
    B) && ✓

25. Which operator returns remainder?  
    A) /  
    B) * C) % ✓  
    D) +

26. Unary operator works on:  
    A) Two operands  
    B) One operand ✓  
    C) Three operands  
    D) Multiple operands

27. Relational operators are used for:  
    A) Arithmetic calculation  
    B) Comparing values ✓  
    C) Memory allocation  
    D) Input output

28. Expression is:  
    A) Variable name  
    B) Combination of variables and operators ✓  
    C) Programming language  
    D) Flowchart symbol

29. Logical OR operator is:  
    A) &&  
    B) || ✓  
    C) !  
    D) ==

30. Which operator is used for multiplication?  
    A) +  
    B) -  
    C) * ✓  
    D) /

## 4. Control Structures

31. Control structures are used to:  
    A) Store data  
    B) Control flow of program execution ✓  
    C) Connect networks  
    D) Compile code

32. Which statement is used for decision making?  
    A) for  
    B) while  
    C) if ✓  
    D) break

33. Which loop executes at least once?  
    A) for  
    B) while  
    C) do-while ✓  
    D) if

34. Which loop is best when number of iterations is known?  
    A) while  
    B) for ✓

35. Which statement is used to exit a loop?  
    A) continue  
    B) break ✓  
    C) return  
    D) goto

36. The continue statement:  
    A) Stops program  
    B) Skips current iteration ✓  
    C) Ends loop  
    D) Ends program

37. Switch statement is used for:  
    A) Looping  
    B) Multiple selection ✓  
    C) File handling  
    D) Input output

38. Nested loop means:  
    A) Loop inside condition  
    B) Loop inside another loop ✓  
    C) Loop outside function  
    D) Infinite loop

39. Infinite loop means:  
    A) Loop with error  
    B) Loop that never ends ✓  
    C) Loop with condition  
    D) Loop with break

40. Condition in if statement must return:  
    A) Integer  
    B) Character  
    C) Boolean value ✓  
    D) String

## 5. Functions / Methods

41. Function is:  
    A) Variable  
    B) Block of reusable code ✓  
    C) Operator  
    D) Loop

42. Function helps in:  
    A) Increasing errors  
    B) Code reusability ✓  
    C) Slower execution  
    D) Hardware control

43. A function without return value is called:  
    A) Parameter function  
    B) Void function ✓  
    C) Recursive function  
    D) Inline function

44. Parameters are:  
    A) Values passed to function ✓  
    B) Output values

45. Recursion means:  
    A) Loop repetition  
    B) Function calling itself ✓  
    C) Function deletion  
    D) Function compilation

46. Main function is:  
    A) Optional  
    B) Starting point of program ✓  
    C) Ending point  
    D) Loop function

47. Return statement is used to:  
    A) End program  
    B) Send value back to caller ✓  
    C) Repeat function  
    D) Print output

48. Function definition contains:  
    A) Only name  
    B) Actual code of function ✓  
    C) Function call  
    D) Variable

49. Function call means:  
    A) Creating function  
    B) Executing function ✓  
    C) Deleting function  
    D) Storing function

50. Library functions are:  
    A) User created  
    B) Predefined functions ✓  
    C) Hardware functions  
    D) Network functions

## 6. Input / Output Handling

51. Input means:  
    A) Display data  
    B) Receive data from user ✓  
    C) Delete data  
    D) Process data

52. Output means:  
    A) Display result to user ✓  
    B) Receive data  
    C) Store data  
    D) Compile program

53. In C++, input is taken using:  
    A) printf  
    B) cin ✓  
    C) cout  
    D) scanf

54. In C++, output is displayed using:  
    A) cin  
    B) scanf  
    *(Answer: cout)*

55. In Python, input is taken using:  
    A) print()  
    B) input() ✓  
    C) read()  
    D) write()

56. In Python, output is displayed using:  
    A) print() ✓  
    B) input()  
    C) cout  
    D) echo

57. Standard input device is:  
    A) Monitor  
    B) Keyboard ✓  
    C) Printer  
    D) Speaker

58. Standard output device is:  
    A) Keyboard  
    B) Mouse  
    C) Monitor ✓  
    D) Scanner

59. File input means:  
    A) Reading from network  
    B) Reading from file ✓  
    C) Writing to file  
    D) Deleting file

60. File output means:  
    A) Writing data to file ✓  
    B) Reading from file  
    C) Closing file  
    D) Encrypting file

## 7. Arrays & Collections

61. Array stores:  
    A) Different data types  
    B) Multiple values of same type ✓  
    C) Only strings  
    D) Only numbers

62. Array index usually starts from:  
    A) 1  
    B) 0 ✓  
    C) -1  
    D) 2

63. Array size means:  
    A) Memory size  
    B) Number of elements ✓  
    C) Data type  
    D) Index value

64. Accessing array element requires:  
    A) Loop  
    B) Function  
    *(Answer: index)*

65. Multidimensional array means:  
    A) Single list  
    B) Array of arrays ✓  
    C) Character array  
    D) Boolean array

66. In Python, dynamic array structure is:  
    A) Tuple  
    B) Set  
    C) List ✓  
    D) String

67. Collection stores:  
    A) Only numbers  
    B) Group of objects ✓  
    C) Single variable  
    D) Boolean values

68. Linked list is:  
    A) Static structure  
    B) Dynamic data structure ✓  
    C) Array structure  
    D) File structure

69. Array memory allocation is:  
    A) Dynamic  
    B) Static ✓  
    C) Random  
    D) Virtual

70. Array elements are stored in:  
    A) Random locations  
    B) Contiguous memory locations ✓  
    C) Files  
    D) Network

## 8. Object-Oriented Programming (OOP)

71. OOP stands for:  
    A) Object Output Programming  
    B) Object Oriented Programming ✓  
    C) Online Object Programming  
    D) Organized Programming

72. Object is:  
    A) Data type  
    B) Instance of class ✓  
    C) Function  
    D) Operator

73. Class is:  
    A) Blueprint for objects ✓  
    B) Variable  
    C) Function  
    D) Loop

74. Encapsulation means:  
    A) Hiding data  
    B) Binding data and methods together ✓

75. Inheritance allows:  
    A) Data deletion  
    B) Class to inherit properties of another class ✓  
    C) Function creation  
    D) Loop execution

76. Polymorphism means:  
    A) Single form  
    B) Many forms of same function ✓  
    C) Multiple loops  
    D) Multiple variables

77. Abstraction means:  
    A) Data storage  
    B) Hiding implementation details ✓  
    C) Printing data  
    D) Executing code

78. Constructor is:  
    A) Function to destroy object  
    B) Function to initialize object ✓  
    C) Function to print object  
    D) Function to delete object

79. Destructor is used to:  
    A) Create object  
    B) Initialize object  
    C) Destroy object ✓  
    D) Copy object

80. Method is:  
    A) Variable  
    B) Function inside class ✓  
    C) Operator  
    D) Loop

## 9. Exception Handling

81. Exception is:  
    A) Syntax error  
    B) Runtime error ✓  
    C) Logic error  
    D) Network error

82. Exception handling prevents:  
    A) Program execution  
    B) Program crash ✓  
    C) Compilation  
    D) Memory allocation

83. Try block contains:  
    A) Output code  
    B) Code that may cause exception ✓  
    C) Loop code  
    D) Input code

84. Catch block is used to:  
    A) Handle exception ✓  
    B) Print data

85. Finally block executes:  
    A) Sometimes  
    B) Always ✓  
    C) Only on error  
    D) Never

86. Throw keyword is used to:  
    A) Catch exception  
    B) Generate exception ✓  
    C) Ignore exception  
    D) Delete exception

87. Multiple catch blocks handle:  
    A) One error  
    B) Different types of errors ✓  
    C) Input errors  
    D) Network errors

88. Exception handling improves:  
    A) Speed only  
    B) Program reliability ✓  
    C) Memory only  
    D) Network only

89. Runtime errors occur:  
    A) During compilation  
    B) During program execution ✓  
    C) During coding  
    D) During design

90. Exception handling is part of:  
    A) Hardware design  
    B) Programming language features ✓  
    C) Networking  
    D) Database

## 10. Debugging & Testing

91. Debugging means:  
    A) Writing program  
    B) Finding and fixing errors ✓  
    C) Deleting program  
    D) Running program

92. Testing means:  
    A) Writing code  
    B) Checking program correctness ✓  
    C) Designing program  
    D) Compiling program

93. Unit testing tests:  
    A) Whole system  
    B) Individual component ✓  
    C) Network  
    D) Database

94. Integration testing tests:  
    A) Single module  
    B) Combined modules ✓

95. System testing tests:  
    A) Individual function  
    B) Complete system ✓  
    C) Single variable  
    D) Loop

96. Bug means:  
    A) Program feature  
    B) Error in program ✓  
    C) Loop statement  
    D) Data type

97. Test case contains:  
    A) Data only  
    B) Input and expected output ✓  
    C) Program code  
    D) Hardware

98. Logging helps in:  
    A) Data storage  
    B) Debugging program ✓  
    C) File deletion  
    D) Network connection

99. Optimization improves:  
    A) Program errors  
    B) Program performance ✓  
    C) Network speed only  
    D) Memory errors

100. Best practice in programming is:  
     A) No comments  
     B) Clear and readable code ✓  
     C) Long variable names only  
     D) No testing

---

# Data Structures & Algorithms

## 1. Foundations of Data Structures & Algorithms

1. Data structure is:  
   A) Programming language  
   B) Method of organizing data ✓  
   C) Computer network  
   D) Operating system

2. Algorithm is:  
   A) Programming language  
   B) Step-by-step procedure to solve a problem ✓  
   C) Data storage method  
   D) Hardware device

3. Which characteristic is important for a good algorithm?  
   A) Complexity  
   B) Ambiguity  
   C) Efficiency ✓  
   D) Randomness

4. Time complexity measures:  
   A) Memory usage  
   B) Execution time of algorithm ✓

5. Space complexity refers to:  
   A) Execution time  
   B) Memory used by algorithm ✓  
   C) CPU speed  
   D) Input size

6. Which notation is used to represent algorithm complexity?  
   A) Binary notation  
   B) Big O notation ✓  
   C) Hexadecimal notation  
   D) Decimal notation

7. Best case complexity refers to:  
   A) Worst performance  
   B) Minimum time required ✓  
   C) Maximum memory  
   D) Average time

## 2. Linear Data Structures

8. Which is a linear data structure?  
   A) Tree  
   B) Graph  
   C) Array ✓  
   D) Network

9. Array elements are stored in:  
   *(Answer: contiguous memory)*

10. Linked list stores elements using:  
    A) Index  
    B) Pointers ✓  
    C) Arrays  
    D) Hash keys

11. Stack follows:  
    A) FIFO  
    B) LIFO ✓  
    C) Random order  
    D) Circular order

12. Queue follows:  
    A) LIFO  
    B) FIFO ✓  
    C) Random order  
    D) Circular order

13. Push operation is used in:  
    A) Queue  
    B) Stack ✓  
    C) Tree  
    D) Graph

14. Dequeue operation removes element from:  
    A) Stack  
    B) Queue ✓

## 3. Non-Linear Data Structures

15. Which is non-linear data structure?  
    A) Array  
    B) Stack  
    C) Tree ✓  
    D) Queue

16. Tree consists of:  
    A) Nodes only  
    B) Edges only  
    C) Nodes and edges ✓  
    D) Data only

17. Root node is:  
    A) Leaf node  
    B) Topmost node of tree ✓  
    C) Middle node  
    D) Last node

18. Binary tree node has maximum:  
    A) 1 child  
    B) 2 children ✓  
    C) 3 children  
    D) 4 children

19. Leaf node is:  
    A) Root node  
    *(Answer: node with no children)*

20. Graph consists of:  
    A) Nodes only  
    B) Edges only  
    C) Vertices and edges ✓  
    D) Data blocks

## 4. Searching Algorithms

21. Linear search checks:  
    A) Only first element  
    B) Only last element  
    C) Each element sequentially ✓  
    D) Random elements

22. Binary search works on:  
    A) Unsorted array  
    B) Sorted array ✓  
    C) Linked list  
    D) Graph

23. Binary search complexity is:  
    A) O(n)  
    B) O(log n) ✓  
    C) O(n²)  
    D) O(1)

24. Linear search complexity is:  
    A) O(n) ✓  
    B) O(log n)  
    C) O(n²)  
    D) O(1)

25. Binary search repeatedly divides:  
    A) Array into three parts  
    B) Array into two halves ✓  
    C) Array into four parts  
    D) Array into five parts

## 5. Sorting Algorithms

26. Sorting means:  
    A) Searching data  
    B) Arranging data in order ✓  
    C) Deleting data  
    D) Encrypting data

27. Bubble sort compares:  
    A) Random elements  
    B) Adjacent elements ✓  
    C) First and last  
    D) Middle elements

28. Selection sort selects:  
    A) Largest element  
    B) Minimum element in each pass ✓

29. Insertion sort works like:  
    A) Sorting playing cards ✓  
    B) Binary search  
    C) Graph traversal  
    D) Tree traversal

30. Quick sort uses:  
    A) Queue  
    B) Stack  
    C) Divide and conquer ✓  
    D) Greedy method

31. Merge sort complexity is:  
    A) O(n²)  
    B) O(n log n) ✓  
    C) O(n)  
    D) O(log n)

## 6. Hashing

32. Hashing is used for:  
    A) Sorting  
    B) Fast data retrieval ✓  
    C) Graph traversal  
    D) Tree traversal

33. Hash function maps:  
    A) Key to index ✓

34. Collision occurs when:  
    A) Key missing  
    B) Two keys map to same index ✓  
    C) Table empty  
    D) Table full

35. Collision resolution technique:  
    A) Binary search  
    B) Merge sort  
    C) Open addressing ✓  
    D) DFS

## 7. Tree Algorithms

36. Tree traversal means:  
    A) Deleting nodes  
    B) Visiting nodes of tree ✓  
    C) Adding nodes  
    D) Sorting nodes

37. Preorder traversal order is:  
    A) Left Right Root  
    B) Root Left Right ✓  
    C) Left Root Right  
    D) Right Root Left

38. Inorder traversal order is:  
    A) Root Left Right  
    B) Left Root Right ✓  
    C) Right Left Root  
    D) Root Right Left

39. Postorder traversal order is:  
    A) Root Left Right  
    B) Left Root Right  
    C) Left Right Root ✓  
    D) Right Root Left

## 8. Graph Algorithms

40. Graph traversal methods are:  
    A) Sorting methods  
    B) BFS and DFS ✓  
    C) Searching methods  
    D) Hashing methods

41. BFS stands for:  
    A) Binary First Search  
    B) Breadth First Search ✓  
    C) Branch First Search  
    D) Best First Search

42. DFS stands for:  
    A) Data First Search  
    B) Depth First Search ✓

43. BFS uses:  
    A) Stack  
    B) Queue ✓  
    C) Array  
    D) Tree

44. DFS uses:  
    A) Stack ✓  
    B) Queue  
    C) Graph  
    D) Hash table

## 9. Algorithm Design Techniques

45. Divide and conquer technique divides problem into:  
    A) One part  
    B) Smaller subproblems ✓  
    C) Random problems  
    D) Complex problems

46. Greedy algorithm makes:  
    A) Random choice  
    B) Best local choice ✓  
    C) Worst choice  
    D) Slow choice

47. Dynamic programming solves problems using:  
    *(Answer: overlapping subproblems and optimal substructure)*

48. Recursion means:  
    A) Loop execution  
    B) Function calling itself ✓  
    C) Memory allocation  
    D) Data storage

## 10. Advanced Data Structures

49. Heap is used in:  
    A) Graph traversal  
    B) Priority queue ✓  
    C) Linear search  
    D) File system

50. Max heap stores:  
    A) Smallest value at root  
    B) Largest value at root ✓  
    C) Random value  
    D) Middle value

51. Min heap stores:  
    A) Largest value  
    B) Smallest value at root ✓  
    C) Random value  
    D) Last value

## 11. String Algorithms

52. String is:  
    A) Number  
    B) Sequence of characters ✓  
    C) Boolean value  
    D) Integer

53. String searching algorithm:  
    A) BFS  
    B) KMP algorithm ✓  
    C) Merge sort  
    D) Heap sort

54. Pattern matching means:  
    A) Sorting strings  
    B) Finding substring in text ✓  
    C) Deleting string  
    D) Compressing string

## 12. Complexity & Optimization

55. Best case complexity is:  
    A) Maximum time  
    B) Minimum time required ✓  
    C) Average time  
    D) Infinite time

56. Worst case complexity is:  
    A) Minimum time  
    B) Maximum time required ✓

57. Average case complexity is:  
    A) Minimum time  
    B) Maximum time  
    C) Expected time ✓  
    D) Random time

58. O(1) complexity means:  
    A) Linear time  
    B) Logarithmic time  
    C) Constant time ✓  
    D) Quadratic time

59. O(n²) complexity means:  
    A) Constant time  
    B) Linear time  
    C) Quadratic time ✓  
    D) Logarithmic time

60. Algorithm optimization improves:  
    A) Errors  
    B) Efficiency and performance ✓  
    C) Complexity  
    D) Size

61. Stack overflow occurs when:  
    A) Stack empty  
    B) Stack is full ✓  
    C) Queue empty  
    D) Heap empty

62. Queue underflow occurs when:  
    A) Queue full  
    B) Queue empty ✓  
    C) Stack empty  
    D) Heap full

63. Circular queue improves:  
    A) Memory usage  
    B) Queue efficiency ✓  
    C) Sorting speed  
    D) Graph traversal

64. Doubly linked list contains:  
    A) One pointer  
    B) Two pointers ✓  
    C) Three pointers  
    D) No pointer

65. Binary search tree property:  
    A) All nodes equal  
    B) Left < Root < Right ✓  
    C) Root smallest  
    D) Root largest

66. Height of tree means:  
    A) Number of edges  
    B) Longest path from root to leaf ✓  
    C) Number of nodes  
    D) Number of leaves

67. Balanced tree improves:  
    *(Answer: search performance)*

68. Adjacency matrix represents:  
    A) Tree  
    B) Graph ✓  
    C) Stack  
    D) Queue

69. Adjacency list is used to represent:  
    A) Graph efficiently ✓  
    B) Tree  
    C) Stack  
    D) Queue

70. Dijkstra algorithm finds:  
    A) Sorting order  
    B) Shortest path ✓  
    C) Tree traversal  
    D) Graph deletion

71. Minimum spanning tree algorithm:  
    A) BFS  
    B) Kruskal algorithm ✓  
    C) DFS  
    D) Linear search

72. Prim's algorithm is used for:  
    A) Searching  
    B) Sorting  
    *(Answer: Minimum spanning tree)*

73. Topological sorting applies to:  
    A) Tree  
    B) Directed acyclic graph ✓  
    C) Stack  
    D) Queue

74. Greedy algorithms are used in:  
    A) Huffman coding ✓  
    B) Optimal solution problems  
    C) Random search  
    D) Linked list

75. Recursive algorithm uses:  
    A) Queue  
    B) Function calls stack ✓  
    C) Hash table  
    D) Graph

---

# Operating Systems

## 1. Introduction to Operating Systems

1. What is the main purpose of an Operating System?  
   A) Compile programs  
   B) Design applications  
   C) Create databases  
   D) Manage hardware and software resources ✓

2. An operating system acts as:  
   A) Hardware component  
   B) Interface between user and hardware ✓  
   C) Database system  
   D) Programming language

3. Which of the following is an example of an operating system?  
   A) Microsoft Word  
   B) Google Chrome  
   C) Linux ✓  
   D) Adobe Photoshop

4. Which type of OS allows multiple users to use the system simultaneously?  
   A) Batch OS  
   B) Multi-user OS ✓  
   C) Single-user OS  
   D) Embedded OS

5. Which component of the operating system interacts directly with hardware?  
   A) Kernel ✓  
   B) Shell  
   C) Compiler  
   D) Loader

6. Which of the following operating systems is open-source?  
   A) Windows  
   B) macOS  
   C) Linux ✓  
   D) iOS

7. Which feature allows multiple programs to run at the same time?  
   A) Buffering  
   B) Multiprogramming ✓  
   C) Spooling  
   D) Paging

8. Which OS is commonly used for real-time applications?  
   A) Network OS  
   B) Distributed OS  
   C) Real-Time OS (RTOS) ✓  
   D) Batch OS

9. GUI stands for:  
   A) Global User Internet  
   B) Graphical User Interface ✓  
   C) General Utility Interface  
   D) Graphic Universal Internet

10. CLI stands for:  
    A) Control Link Interface  
    B) Command Line Interface ✓  
    C) Computer Logic Interface  
    D) Command Level Internet

## 2. Operating System Structures

11. Which OS structure places all services in one large program?  
    A) Monolithic structure ✓  
    B) Layered structure  
    C) Client-server structure  
    D) Virtual machine structure

12. In a layered OS structure, each layer:  
    A) Works independently  
    B) Uses services of the layer below it ✓  
    C) Directly accesses hardware  
    D) Works only with users

13. Which structure improves modularity and debugging?  
    A) Monolithic structure  
    B) Layered structure ✓  
    C) Simple structure  
    D) Batch structure

14. The shell in an operating system provides:  
    A) Memory management  
    B) Disk management  
    C) User command interface ✓  
    D) Security control

15. Which architecture keeps only minimal functions in the kernel?  
    A) Monolithic  
    B) Microkernel ✓  
    C) Hybrid  
    D) Layered

## 3. Process Management

16. A process is defined as:  
    A) Program stored on disk  
    B) Program in execution ✓  
    C) Program compiled  
    D) Program deleted

17. Which structure stores information about a process?  
    A) Process Table  
    B) Process Control Block (PCB) ✓  
    C) Memory Block  
    D) File Table

18. Which process state means the process is currently executing?  
    A) Ready  
    B) Waiting  
    C) Running ✓  
    D) Suspended

19. When a process waits for I/O it enters:  
    A) Ready state  
    B) Waiting/Blocked state ✓  
    C) Running state  
    D) Terminated state

20. Context switching occurs when:  
    A) CPU switches from one process to another ✓  
    B) Memory increases  
    C) Disk reads a file  
    D) Program compiles

## 4. CPU Scheduling

21. CPU scheduling is used to:  
    A) Manage memory  
    B) Allocate CPU to processes ✓  
    C) Manage files  
    D) Control devices

22. Which scheduling algorithm serves processes in order of arrival?  
    A) FCFS ✓  
    B) SJF  
    C) Round Robin  
    D) Priority

23. Which algorithm selects the process with shortest execution time?  
    A) FCFS  
    B) Shortest Job First (SJF) ✓  
    C) Round Robin  
    D) Priority

24. Round Robin scheduling uses:  
    A) Priority levels  
    B) Time quantum ✓  
    C) FIFO queue  
    D) Memory pages

25. Priority scheduling executes:  
    A) Longest job first  
    B) Highest priority process first ✓  
    C) Smallest memory process  
    D) Random process

## 5. Thread Management

26. A thread is:  
    A) Heavyweight process  
    B) Lightweight process ✓  
    C) Memory unit  
    D) File structure

27. Multithreading allows:  
    A) Multiple CPUs  
    B) Multiple threads within one process ✓  
    C) Multiple disks  
    D) Multiple users

28. Threads share:  
    A) CPU registers only  
    B) Process memory space ✓  
    C) Separate memory  
    D) Disk storage

29. Which library provides thread support in many systems?  
    A) POSIX Threads ✓  
    B) TCP  
    C) HTTP  
    D) SQL

30. Thread creation improves:  
    A) Performance and responsiveness ✓  
    B) Disk storage  
    C) Security  
    D) Graphics

## 6. Concurrency & Synchronization

31. Concurrency means:  
    A) One process running  
    B) Multiple processes executing simultaneously ✓  
    C) Only CPU running  
    D) Only disk running

32. Critical section refers to:  
    A) Shared resource accessing code ✓  
    B) CPU register  
    C) Disk block  
    D) Memory page

33. Race condition occurs when:  
    A) Multiple processes access shared data simultaneously ✓  
    B) CPU fails  
    C) Disk crashes  
    D) Memory increases

34. Semaphore is used for:  
    A) Process synchronization ✓  
    B) File storage  
    C) Memory allocation  
    D) Disk scheduling

35. Mutual exclusion ensures:  
    A) Only one process accesses shared resource at a time ✓  
    B) Multiple CPUs work together  
    C) Multiple users login  
    D) Files are encrypted

## 7. Deadlocks

36. Deadlock occurs when:  
    A) CPU crashes  
    B) Processes wait indefinitely for resources ✓  
    C) Memory is full  
    D) Disk fails

37. Which condition is required for deadlock?  
    A) Mutual exclusion  
    B) Hold and wait  
    C) No preemption  
    D) All of the above ✓

38. Deadlock prevention works by:  
    A) Breaking one necessary condition ✓  
    B) Increasing RAM  
    C) Increasing CPU speed  
    D) Deleting processes

39. Deadlock detection involves:  
    A) Checking circular wait ✓  
    B) Increasing memory  
    C) Formatting disk  
    D) Restarting OS

40. Banker's Algorithm is used for:  
    A) Deadlock avoidance ✓  
    B) Disk scheduling  
    C) Memory allocation  
    D) File management

## 8. Memory Management

41. Memory management is responsible for:  
    A) Allocating memory to processes ✓  
    B) Managing files  
    C) Managing CPU  
    D) Managing printers

42. Paging divides memory into:  
    A) Pages and frames ✓  
    B) Segments only  
    C) Blocks only  
    D) Files

43. Virtual memory allows:  
    A) Programs larger than physical memory ✓  
    B) Faster CPU  
    C) Larger disk  
    D) Faster network

44. LRU page replacement replaces:  
    A) First page  
    B) Least recently used page ✓  
    C) Random page  
    D) Largest page

45. Thrashing occurs when:  
    A) Excessive paging reduces performance ✓  
    B) CPU overheads  
    C) Disk crashes  
    D) Files delete automatically

## 9. File System Management

46. File system is used to:  
    A) Store and organize files ✓  
    B) Manage CPU  
    C) Manage network  
    D) Manage memory

47. Which structure organizes files hierarchically?  
    A) Tree structure ✓  
    B) Circular structure  
    C) Linear structure  
    D) Random structure

48. File attributes include:  
    A) Name  
    B) Size  
    C) Type  
    D) All of the above ✓

49. A directory is used to:  
    A) Organize files ✓  
    B) Compile programs  
    C) Manage CPU  
    D) Encrypt memory

50. Which file access method reads records sequentially?  
    A) Sequential access ✓  
    B) Random access  
    C) Indexed access  
    D) Direct access

## 10. Secondary Storage Management

51. Secondary storage is used for:  
    A) Permanent data storage ✓  
    B) Temporary storage  
    C) CPU operations  
    D) Memory registers

52. Example of secondary storage:  
    A) RAM  
    B) Cache  
    C) Hard Disk ✓  
    D) Register

53. Disk scheduling algorithm that serves nearest request first:  
    A) FCFS  
    B) SSTF ✓  
    C) SCAN  
    D) LOOK

54. SCAN algorithm is also called:  
    A) Elevator algorithm ✓  
    B) Random algorithm  
    C) Priority algorithm  
    D) FIFO algorithm

55. Disk fragmentation causes:  
    A) Slower file access ✓  
    B) Faster processing  
    C) Larger RAM  
    D) Higher CPU speed

## 11. Input / Output Systems

56. I/O system manages:  
    A) Data transfer between devices and memory ✓  
    B) CPU scheduling  
    C) Memory paging  
    D) File deletion

57. Buffering is used to:  
    A) Store temporary data ✓  
    B) Increase CPU speed  
    C) Encrypt data  
    D) Delete files

58. Spooling stands for:  
    A) Simultaneous Peripheral Operations Online ✓  
    B) System Programming Output Line  
    C) Sequential Program Operation Logic  
    D) System Peripheral Online Link

59. Device driver is:  
    A) Software controlling hardware devices ✓  
    B) Hardware device  
    C) CPU component  
    D) Memory unit

60. Interrupt is used to:  
    A) Notify CPU of events ✓  
    B) Store files  
    C) Increase memory  
    D) Schedule processes

## 12. Protection & Security

61. Protection in OS ensures:  
    A) Secure resource access ✓  
    B) Faster CPU  
    C) Larger disk  
    D) Better graphics

62. Authentication verifies:  
    A) User identity ✓  
    B) File type  
    C) Disk size  
    D) CPU speed

63. Authorization determines:  
    A) User permissions ✓  
    B) File size  
    C) Network speed  
    D) CPU usage

64. Encryption is used for:  
    A) Data confidentiality ✓  
    B) Faster processing  
    C) File compression  
    D) Disk formatting

65. Malware refers to:  
    A) Malicious software ✓  
    B) Hardware failure  
    C) Network cable  
    D) CPU instruction

---

# Software Engineering

## 1. Introduction to Software Engineering

1. Software Engineering is defined as:  
   A) Writing programs only  
   B) Applying engineering principles to software development ✓  
   C) Designing hardware  
   D) Installing software

2. The main goal of Software Engineering is:  
   A) Increase hardware cost  
   B) Produce reliable and efficient software ✓  
   C) Reduce RAM  
   D) Increase CPU speed

3. Which of the following is NOT a software characteristic?  
   A) Software is developed  
   B) Software does not wear out  
   C) Software is intangible  
   D) Software rusts like hardware ✓

4. Software crisis refers to:  
   A) Lack of programmers  
   B) Difficulty in developing reliable software ✓  
   C) Lack of computers  
   D) Low internet speed

## 2. Software Process Models

5. The Waterfall model is:  
   A) Linear sequential model ✓  
   B) Circular model  
   C) Random model  
   D) Parallel model

6. Which model focuses on risk analysis?  
   A) Waterfall  
   B) Spiral ✓  
   C) Incremental  
   D) Agile

7. The Incremental model delivers software:  
   A) In one phase  
   B) In small functional parts ✓  
   C) Randomly  
   D) Only at the end

8. Which model is best for large complex projects?  
   A) Spiral model ✓  
   B) Waterfall  
   C) Prototype  
   D) Linear model

## 3. Agile Software Development

9. Agile development emphasizes:  
   A) Documentation only  
   B) Flexibility and customer collaboration ✓  
   C) Hardware design  
   D) Fixed requirements

10. Scrum is a:  
    A) Programming language  
    B) Agile framework ✓  
    C) Database system  
    D) Operating system

11. In Scrum, short development cycles are called:  
    *(Answer: sprints)*

## 4. Software Requirements Engineering

12. Requirement gathering is also called:  
    A) Requirement elicitation ✓  
    B) Requirement coding  
    C) Requirement execution  
    D) Requirement deletion

13. Functional requirements describe:  
    A) System behavior and functions ✓  
    B) Hardware cost  
    C) Team management  
    D) Disk capacity

14. Non-functional requirements describe:  
    A) System performance and quality ✓  
    B) System functions  
    C) Algorithms  
    D) Program code

15. SRS stands for:  
    A) Software Requirement Specification ✓  
    B) Software Runtime System  
    C) Software Resource Service  
    D) System Requirement Software

## 5. Software Project Management

16. Software project management focuses on:  
    A) Planning and controlling software projects ✓  
    B) Hardware installation  
    C) Coding only  
    D) Disk management

17. Gantt chart is used for:  
    A) Scheduling project tasks ✓  
    B) Designing databases  
    C) Testing software  
    D) Writing code

18. Project scope defines:  
    A) Project boundaries and objectives ✓  
    B) Hardware speed  
    C) Memory size  
    D) Disk storage

19. Risk management helps to:  
    A) Identify and reduce project risks ✓  
    B) Increase project cost  
    C) Delay project completion  
    D) Reduce team members

## 6. Software Design

20. Software design converts:  
    A) Code into requirements  
    B) Requirements into design ✓  
    C) Programs into hardware  
    D) Data into memory

21. High-level design focuses on:  
    A) System architecture ✓  
    B) Coding syntax  
    C) Memory allocation  
    D) File storage

22. Low-level design focuses on:  
    A) Detailed module design ✓  
    B) Hardware circuits  
    C) Network cables  
    D) Disk structure

23. Modularity improves:  
    A) Maintainability ✓  
    B) CPU speed  
    C) Disk storage  
    D) Network bandwidth

## 7. Software Architecture

24. Software architecture describes:  
    A) Structure of software components ✓  
    B) Programming syntax  
    C) Hardware circuits  
    D) CPU instructions

25. Client-server architecture includes:  
    A) Client and server systems ✓  
    B) CPU and RAM  
    C) Hardware circuits  
    D) Network cables

26. Layered architecture organizes system into:  
    A) Layers ✓  
    B) Files  
    C) Threads  
    D) Processes

## 8. User Interface Design

27. UI design focuses on:  
    A) User interaction with software ✓  
    B) CPU performance  
    C) Disk storage  
    D) Network protocols

28. Good UI design improves:  
    A) User experience ✓  
    B) Hardware cost  
    C) CPU speed  
    D) Disk capacity

29. GUI stands for:  
    A) Graphical User Interface ✓  
    B) General User Internet  
    C) Global Utility Interface  
    D) Graphic Universal Internet

## 9. Software Implementation & Coding

30. Implementation phase involves:  
    A) Writing program code ✓  
    B) Designing hardware  
    C) Managing memory  
    D) Installing OS

31. Debugging means:  
    A) Removing errors from code ✓  
    B) Writing new programs  
    C) Deleting files  
    D) Testing hardware

32. Source code is:  
    A) Human-readable program code ✓  
    B) Machine code  
    C) Binary code  
    D) Hardware code

## 10. Software Testing

33. Software testing is used to:  
    A) Find errors in software ✓  
    B) Increase RAM  
    C) Reduce disk size  
    D) Design hardware

34. Unit testing tests:  
    A) Individual program modules ✓  
    B) Whole system  
    C) Hardware components  
    D) Network systems

35. Integration testing tests:  
    A) Combined modules ✓  
    B) Single function  
    C) Hardware drivers  
    D) Disk sectors

36. System testing tests:  
    A) Complete system ✓  
    B) Individual module  
    C) CPU only  
    D) Memory only

## 11. Software Maintenance & Evolution

37. Software maintenance occurs:  
    A) After software deployment ✓  
    B) Before coding  
    C) Before testing  
    D) Before design

38. Corrective maintenance fixes:  
    A) Software bugs ✓  
    B) Hardware faults  
    C) Disk failures  
    D) CPU errors

39. Adaptive maintenance updates software for:  
    A) New environments ✓  
    B) New hardware circuits  
    C) Disk storage  
    D) CPU architecture

## 12. Software Quality Assurance

40. SQA ensures:  
    A) Software quality ✓  
    B) CPU speed  
    C) Disk storage  
    D) Network speed

41. Quality assurance focuses on:  
    A) Process improvement ✓  
    B) Hardware performance  
    C) Disk management  
    D) Network protocols

42. ISO standards help in:  
    A) Maintaining quality ✓  
    B) Increasing RAM  
    C) Reducing CPU speed  
    D) Disk formatting

## 13. Software Metrics & Measurement

43. Software metrics measure:  
    A) Software characteristics ✓  
    B) Hardware design  
    C) Network cables  
    D) CPU temperature

44. LOC metric means:  
    A) Lines of Code ✓  
    B) Level of Control  
    C) Line of CPU  
    D) Logical Operation Code

## 14. Software Configuration Management

45. SCM stands for:  
    A) Software Configuration Management ✓  
    B) System Control Method  
    C) Software Control Model  
    D) System Configuration Method

46. Version control is used to:  
    A) Manage code changes ✓  
    B) Increase CPU speed  
    C) Reduce RAM  
    D) Delete files

## 15. Software Risk Management

47. Risk in software project means:  
    A) Potential problem ✓  
    B) Hardware upgrade  
    C) Network connection  
    D) CPU failure

48. Risk mitigation means:  
    A) Reducing risk impact ✓  
    B) Increasing project cost  
    C) Deleting requirements  
    D) Stopping project

## 16. Software Security Engineering

49. Software security focuses on:  
    A) Protecting software from attacks ✓  
    B) Increasing CPU speed  
    C) Increasing disk space  
    D) Hardware design

50. Encryption protects:  
    A) Data confidentiality ✓  
    B) CPU speed  
    C) Disk structure  
    D) Hardware devices

51. Software ethics refers to:  
    A) Professional responsibility ✓  
    B) Hardware management  
    C) Disk maintenance  
    D) Network routing

52. CASE tools help in:  
    A) Automating software development ✓  
    B) Hardware design  
    C) Disk storage  
    D) CPU scheduling

53. Prototype model is used when:  
    A) Requirements are unclear ✓  
    B) Requirements are fixed  
    C) Hardware is limited  
    D) Network is slow

54. Black box testing focuses on:  
    A) Functionality ✓  
    B) Code structure  
    C) Hardware circuits  
    D) Memory blocks

55. White box testing focuses on:  
    A) Internal code structure ✓  
    B) User interface  
    C) Network speed  
    D) Disk storage

56. Refactoring improves:  
    A) Code structure ✓  
    B) Hardware speed  
    C) Disk storage  
    D) CPU frequency

57. Software reuse reduces:  
    A) Development time ✓  
    B) CPU speed  
    C) Disk capacity  
    D) Memory size

58. Requirement validation ensures:  
    A) Correct requirements ✓  
    B) Faster coding  
    C) Hardware performance  
    D) Disk allocation

59. Traceability links:  
    A) Requirements with design and code ✓  
    B) CPU with RAM  
    C) Disk with memory  
    D) Hardware with network

60. Coupling refers to:  
    A) Dependency between modules ✓  
    B) CPU connection  
    C) Disk sectors  
    D) Memory blocks

61. Cohesion refers to:  
    A) Strength within a module ✓  
    B) Network communication  
    C) Hardware links  
    D) Disk speed

62. Software lifecycle includes:  
    A) All development stages ✓  
    B) CPU processes  
    C) Network layers  
    D) Hardware modules

63. Deployment means:  
    A) Releasing software for use ✓  
    B) Writing code  
    C) Testing modules  
    D) Designing UI

64. Maintenance cost is usually:  
    A) Highest in lifecycle ✓  
    B) Lowest in lifecycle  
    C) Zero  
    D) Constant

65. Requirement ambiguity causes:  
    A) Project failures ✓  
    B) CPU overheating  
    C) Disk failure  
    D) Network slowdown

66. Code review helps to:  
    A) Detect errors early ✓  
    B) Increase RAM  
    C) Format disks  
    D) Reduce CPU speed

67. Software documentation helps:  
    A) Understanding system ✓  
    B) Increasing hardware speed  
    C) Reducing disk space  
    D) Deleting files

68. Testing improves:  
    A) Software reliability ✓  
    B) Hardware capacity  
    C) Disk storage  
    D) Network bandwidth

69. Verification ensures:  
    A) Software built correctly ✓  
    B) Software built quickly  
    C) Hardware works  
    D) Network connects

---

# Web Development

## 1. Introduction to Web Development

1. Web development refers to:  
   A) Designing hardware  
   B) Creating websites and web applications ✓  
   C) Managing databases only  
   D) Building networks

2. Which of the following is used to view websites?  
   A) Compiler  
   B) Browser ✓  
   C) Database  
   D) Server

3. Example of a web browser:  
   A) MySQL  
   B) Chrome ✓  
   C) Linux  
   D) Python

4. Web applications run on:  
   A) Web browsers ✓  
   B) CPU registers  
   C) RAM only  
   D) Disk controllers

## 2. Web Architecture & Protocols

5. HTTP stands for:  
   A) Hyper Transfer Text Protocol  
   B) HyperText Transfer Protocol ✓  
   C) High Transfer Text Program  
   D) Hyper Tool Transfer Protocol

6. HTTPS provides:  
   A) Secure communication ✓  
   B) Faster internet  
   C) Larger websites  
   D) Free hosting

7. Client-server architecture means:  
   A) Server requests data  
   B) Client requests services from server ✓  
   C) Client stores all data  
   D) Server runs browser

8. URL stands for:  
   A) Uniform Resource Locator ✓  
   B) Universal Resource Link  
   C) Uniform Routing Link  
   D) User Resource Location

## 3. HTML Fundamentals

9. HTML stands for:  
   A) Hyper Trainer Markup Language  
   B) HyperText Markup Language ✓  
   C) HighText Machine Language  
   D) Hyper Tool Markup Language

10. HTML is used to:  
    A) Style webpages  
    B) Structure webpage content ✓  
    C) Store data  
    D) Manage servers

11. Which HTML tag defines a paragraph?  
    A) \`<p>\` ✓  
    B) \`<h1>\`  
    C) \`<div>\`  
    D) \`<span>\`

12. Which tag is used to create a hyperlink?  
    A) \`<img>\`  
    B) \`<link>\`  
    C) \`<a>\` ✓  
    D) \`<href>\`

## 4. CSS Fundamentals

13. CSS stands for:  
    A) Computer Style Sheets  
    B) Cascading Style Sheets ✓  
    C) Creative Style System  
    D) Color Style System

14. CSS is used to:  
    A) Structure web pages  
    B) Style web pages ✓  
    C) Store data  
    D) Manage servers

15. Which property changes text color?  
    A) font-style  
    B) text-color  
    C) color ✓  
    D) font-weight

16. Which CSS property controls text size?  
    A) font-size ✓  
    B) text-size  
    C) font-weight  
    D) size

## 5. Advanced CSS & Responsive Design

17. Responsive design means:  
    A) Websites adapt to different screen sizes ✓  
    B) Websites load faster  
    C) Websites store data  
    D) Websites run offline

18. Which CSS layout system uses rows and columns?  
    A) Grid ✓  
    B) Inline  
    C) Block  
    D) Static

19. Media queries are used for:  
    A) Responsive design ✓  
    B) Database queries  
    C) Server requests  
    D) API calls

## 6. JavaScript Fundamentals

20. JavaScript is used to:  
    A) Add interactivity to websites ✓  
    B) Manage hardware  
    C) Design circuits  
    D) Store data

21. JavaScript runs in:  
    A) Browser ✓  
    B) CPU  
    C) Hard disk  
    D) BIOS

22. Which keyword declares a variable in JavaScript?  
    *(Answer: var, let, const)*

## 7. Advanced JavaScript

23. Function in JavaScript is:  
    A) Block of reusable code ✓  
    B) CSS style  
    C) HTML tag  
    D) Database query

24. Arrow functions were introduced in:  
    *(Answer: ES6)*

## 8. Frontend Frameworks & Libraries

25. Which is a popular JavaScript library?  
    A) React ✓  
    B) MySQL  
    C) Linux  
    D) Apache

26. Angular is a:  
    A) Frontend framework ✓  
    B) Database  
    C) Server  
    D) Operating system

27. Vue.js is used for:  
    A) Building user interfaces ✓  
    B) Managing databases  
    C) Creating hardware  
    D) Network security

## 9. Backend Development Fundamentals

28. Backend development handles:  
    A) Server-side logic ✓  
    B) Webpage styling  
    C) Browser display  
    D) HTML tags

29. Backend languages include:  
    A) JavaScript  
    B) Python  
    C) PHP  
    D) All of the above ✓

## 10. Server-Side Programming

30. Server-side code runs on:  
    A) Web server ✓  
    B) Browser  
    C) CPU register  
    D) Hard disk

31. Example of server-side language:  
    A) PHP ✓  
    B) HTML  
    C) CSS  
    D) XML

## 11. Databases for Web Applications

32. Database stores:  
    A) Structured data ✓  
    B) Images only  
    C) Programs only  
    D) Hardware components

33. MySQL is a:  
    A) Database management system ✓  
    B) Programming language  
    C) Web browser  
    D) Operating system

34. SQL is used to:  
    A) Query databases ✓  
    B) Style webpages  
    C) Design UI  
    D) Control CPU

## 12. Web Security

35. HTTPS protects:  
    A) Data transmission ✓  
    B) CPU speed  
    C) Disk storage  
    D) Browser memory

36. XSS stands for:  
    A) Cross Site Scripting ✓  
    B) Cross System Security  
    C) Extended Security System  
    D) XML Secure Script

37. SQL Injection attacks:  
    A) Databases ✓  
    B) CPU  
    C) Disk drives  
    D) Network cables

## 13. Web Performance & Optimization

38. Website performance depends on:  
    A) Loading speed ✓  
    B) CPU temperature  
    C) Disk color  
    D) Monitor size

39. Caching helps to:  
    A) Improve loading speed ✓  
    B) Increase RAM size  
    C) Reduce network cables  
    D) Delete files

## 14. Web Testing & Debugging

40. Web testing checks:  
    A) Website functionality ✓  
    B) Hardware design  
    C) CPU frequency  
    D) Disk storage

41. Debugging means:  
    A) Removing errors ✓  
    B) Creating database  
    C) Designing UI  
    D) Installing OS

## 15. Deployment & Hosting

42. Web hosting stores websites on:  
    A) Server ✓  
    B) Browser  
    C) CPU register  
    D) RAM

43. Domain name identifies:  
    A) Website address ✓  
    B) CPU speed  
    C) Disk storage  
    D) Database size

## 16. Web APIs & Integration

44. API stands for:  
    A) Application Programming Interface ✓  
    B) Advanced Program Integration  
    C) Application Process Integration  
    D) Automatic Programming Interface

45. APIs allow:  
    A) Communication between applications ✓  
    B) Faster CPU speed  
    C) Disk formatting  
    D) Hardware installation

## 17. Modern Web Development Practices

46. Version control example:  
    A) Git ✓  
    B) HTML  
    C) CSS  
    D) HTTP

47. DevOps focuses on:  
    A) Development and operations collaboration ✓  
    B) Hardware manufacturing  
    C) Disk management  
    D) CPU scheduling

48. GET request is used to:  
    A) Retrieve data ✓  
    B) Delete data  
    C) Update data  
    D) Encrypt data

49. POST request is used to:  
    A) Send data to server ✓  
    B) Delete files  
    C) Read files  
    D) Run scripts

50. Cookies store:  
    A) User data ✓  
    B) CPU instructions  
    C) Disk sectors  
    D) RAM blocks

51. Local storage is used to:  
    A) Store data in browser ✓  
    B) Store data in CPU  
    C) Store data in RAM only  
    D) Store data in BIOS

52. DOM stands for:  
    A) Document Object Model ✓  
    B) Data Object Method  
    C) Document Online Method  
    D) Data Operation Model

53. DOM allows JavaScript to:  
    A) Modify webpage content ✓  
    B) Control CPU  
    C) Format disk  
    D) Encrypt data

54. CDN stands for:  
    A) Content Delivery Network ✓  
    B) Computer Data Network  
    C) Central Data Node  
    D) Content Data Node

55. CDN improves:  
    A) Website speed ✓  
    B) CPU temperature  
    C) Disk errors  
    D) RAM size

56. Frontend development focuses on:  
    A) User interface ✓  
    B) Server logic  
    C) Database queries  
    D) Network routing

---

# AI / Machine Learning and Data Analytics

## 1. Introduction to AI, ML & Data Analytics

1. Artificial Intelligence (AI) refers to:  
   A) Human intelligence  
   B) Machine ability to perform intelligent tasks ✓  
   C) Hardware design  
   D) Database management

2. Machine Learning is a subset of:  
   A) Networking  
   B) Artificial Intelligence ✓  
   C) Operating Systems  
   D) Cyber Security

3. Data analytics is used to:  
   A) Analyze data for insights ✓  
   B) Build hardware  
   C) Design networks  
   D) Increase RAM

4. AI systems are designed to:  
   A) Mimic human intelligence ✓  
   B) Increase disk size  
   C) Reduce memory  
   D) Format computers

## 2. Mathematical Foundations

5. Which field is essential for Machine Learning?  
   A) Linear Algebra ✓  
   B) Chemistry  
   C) Biology  
   D) Geography

6. Probability is used to:  
   A) Measure uncertainty ✓  
   B) Increase CPU speed  
   C) Store files  
   D) Create networks

7. Statistics helps in:  
   A) Data analysis ✓  
   B) Hardware installation  
   C) Disk formatting  
   D) CPU scheduling

## 3. Python for AI & Data Analytics

8. Python is commonly used for:  
   A) AI and data analysis ✓  
   B) Hardware design  
   C) Disk management  
   D) Network cables

9. NumPy library is used for:  
   A) Numerical computing ✓  
   B) Web browsing  
   C) Image editing  
   D) Network routing

10. Pandas library is used for:  
    A) Data analysis ✓  
    B) Game development  
    C) CPU design  
    D) Disk storage

11. Matplotlib is used for:  
    A) Data visualization ✓  
    B) Database management  
    C) Operating systems  
    D) Encryption

## 4. Data Collection & Pre-processing

12. Data preprocessing involves:  
    A) Cleaning and transforming data ✓  
    B) Designing hardware  
    C) Installing software  
    D) Network configuration

13. Missing data handling is part of:  
    A) Data preprocessing ✓  
    B) Database creation  
    C) Coding  
    D) Deployment

14. Normalization is used to:  
    A) Scale data values ✓  
    B) Increase RAM  
    C) Store data  
    D) Encrypt files

## 5. Exploratory Data Analysis (EDA)

15. EDA helps to:  
    A) Understand dataset patterns ✓  
    B) Increase CPU speed  
    C) Design hardware  
    D) Format disks

16. Histogram is used to:  
    A) Show data distribution ✓  
    B) Store files  
    C) Execute programs  
    D) Manage networks

## 6. Supervised Learning

17. Supervised learning uses:  
    A) Labeled data ✓  
    B) Unlabeled data  
    C) Random data  
    D) No data

18. Classification predicts:  
    A) Categories ✓  
    B) Continuous values  
    C) Hardware faults  
    D) Network traffic

19. Regression predicts:  
    A) Continuous values ✓  
    B) Classes only  
    C) Hardware speed  
    D) Disk capacity

20. Example of supervised algorithm:  
    A) Decision Tree ✓  
    B) K-Means  
    C) PCA  
    D) Apriori

## 7. Ensemble Learning

21. Ensemble learning combines:  
    A) Multiple models ✓  
    B) Multiple CPUs  
    C) Multiple disks  
    D) Multiple users

22. Random Forest is:  
    A) Ensemble algorithm ✓  
    B) Database system  
    C) Programming language  
    D) Web framework

## 8. Unsupervised Learning

23. Unsupervised learning uses:  
    A) Unlabeled data ✓  
    B) Labeled data  
    C) Hardware devices  
    D) Network cables

24. Clustering groups:  
    A) Similar data points ✓  
    B) CPUs  
    C) Files  
    D) Users

25. K-Means is a:  
    A) Clustering algorithm ✓  
    B) Regression algorithm  
    C) Encryption algorithm  
    D) Sorting algorithm

## 9. Model Evaluation & Validation

26. Model evaluation measures:  
    A) Model performance ✓  
    B) Disk capacity  
    C) CPU temperature  
    D) Network speed

27. Accuracy measures:  
    A) Correct predictions ✓  
    B) Disk storage  
    C) Memory usage  
    D) CPU power

28. Cross-validation is used to:  
    A) Evaluate model reliability ✓  
    B) Increase RAM  
    C) Manage networks  
    D) Store files

## 10. Feature Engineering & Selection

29. Feature engineering means:  
    A) Creating useful features ✓  
    B) Designing hardware  
    C) Formatting disks  
    D) Writing programs

30. Feature selection helps to:  
    A) Reduce irrelevant data ✓  
    B) Increase RAM  
    C) Store files  
    D) Increase CPU speed

## 11. Deep Learning Fundamentals

31. Deep learning uses:  
    A) Neural networks ✓  
    B) Disk storage  
    C) CPU scheduling  
    D) Network cables

32. Neural networks are inspired by:  
    A) Human brain ✓  
    B) Hard disks  
    C) Databases  
    D) Servers

## 12. Advanced Deep Learning

33. CNN is used mainly for:  
    A) Image processing ✓  
    B) Database queries  
    C) Network routing  
    D) Disk management

34. RNN is used for:  
    A) Sequential data ✓  
    B) Static data  
    C) Disk storage  
    D) CPU scheduling

## 13. Natural Language Processing (NLP)

35. NLP deals with:  
    A) Human language processing ✓  
    B) Hardware design  
    C) Disk formatting  
    D) CPU registers

36. Chatbots use:  
    A) NLP ✓  
    B) Networking  
    C) Hardware  
    D) Operating systems

## 14. Computer Vision

37. Computer vision focuses on:  
    A) Image understanding ✓  
    B) Disk reading  
    C) CPU design  
    D) Network routing

38. Face recognition uses:  
    A) Computer vision ✓  
    B) Databases  
    C) Operating systems  
    D) Networking

## 15. Big Data Analytics (Introductory)

39. Big data refers to:  
    A) Very large datasets ✓  
    B) Large monitors  
    C) High CPU speed  
    D) Big hardware

40. Hadoop is used for:  
    A) Big data processing ✓  
    B) CPU scheduling  
    C) Disk formatting  
    D) UI design

## 16. Model Deployment & MLOps Basics

41. Model deployment means:  
    A) Making model available for use ✓  
    B) Training model  
    C) Cleaning data  
    D) Designing UI

42. MLOps focuses on:  
    A) Managing ML lifecycle ✓  
    B) Managing disks  
    C) Managing CPUs  
    D) Managing networks

## 17. AI Ethics, Security & Privacy

43. AI ethics focuses on:  
    A) Responsible AI use ✓  
    B) Faster CPU  
    C) Disk storage  
    D) Network speed

44. Bias in AI means:  
    A) Unfair predictions ✓  
    B) Faster predictions  
    C) Larger models  
    D) Smaller datasets

45. Overfitting occurs when:  
    A) Model learns training data too well ✓  
    B) Model learns nothing  
    C) Model runs faster  
    D) Model uses less RAM

46. Underfitting occurs when:  
    A) Model fails to learn patterns ✓  
    B) Model learns everything  
    C) Model runs faster  
    D) Model stores data

47. Training data is used to:  
    A) Train ML model ✓  
    B) Test model  
    C) Deploy model  
    D) Delete model

48. Test data is used to:  
    A) Evaluate model ✓  
    B) Train model  
    C) Build model  
    D) Store model

49. Precision measures:  
    A) Correct positive predictions ✓  
    B) Disk usage  
    C) CPU load  
    D) Memory speed

50. Recall measures:  
    A) Correctly identified positives ✓  
    B) Disk errors  
    C) CPU cycles  
    D) Network traffic

51. Gradient descent is used for:  
    A) Optimization ✓  
    B) Networking  
    C) Disk scheduling  
    D) UI design

52. Dataset consists of:  
    A) Data samples ✓  
    B) Hardware components  
    C) Network cables  
    D) CPU registers

53. Label in dataset represents:  
    A) Output variable ✓  
    B) Input feature  
    C) Disk sector  
    D) CPU instruction

54. Feature represents:  
    A) Input variable ✓  
    B) Output result  
    C) CPU speed  
    D) Disk storage

55. Model training adjusts:  
    A) Model parameters ✓  
    B) Disk capacity  
    C) CPU frequency  
    D) Network speed

56. Neural network layers include:  
    A) Input, hidden, output ✓  
    B) Disk, CPU, RAM  
    C) Server, client  
    D) File, directory

57. Activation function introduces:  
    A) Non-linearity ✓  
    B) Disk speed  
    C) CPU cycles  
    D) Network delay

58. Data visualization helps:  
    A) Understand data ✓  
    B) Increase RAM  
    C) Increase CPU speed  
    D) Reduce storage

59. AI applications include:  
    A) Speech recognition ✓  
    B) Hardware repair  
    C) Disk formatting  
    D) Network cables

60. Autonomous cars use:  
    A) AI ✓  
    B) Databases  
    C) Operating systems  
    D) Networking

---

# Cyber Security

## 1. Introduction to Cyber Security

1. What is the primary goal of cyber security?  
   a) Speeding up network traffic  
   b) Protecting systems and data from attacks ✓  
   c) Installing software updates  
   d) Improving battery life

2. Which of the following is considered a cyber threat?  
   a) Firewall  
   b) Malware ✓  
   c) VPN  
   d) Backup

3. Cybersecurity attacks can be classified as:  
   a) Physical and Logical ✓  
   b) Digital and Analog  
   c) Hardware only  
   d) None of the above

4. Which of the following is an example of a social engineering attack?  
   a) Phishing ✓  
   b) SQL Injection  
   c) Cross-site scripting  
   d) Man-in-the-middle

5. Confidentiality, Integrity, and Availability (CIA) are part of:  
   a) Cyber Laws  
   b) Security Principles ✓  
   c) Operating Systems  
   d) Database Models

## 2. Security Fundamentals & Principles

6. The principle of least privilege means:  
   a) Giving all access to all users  
   b) Providing minimum access necessary to perform a task ✓  
   c) Sharing passwords  
   d) Disabling security

7. Defense-in-depth is:  
   a) Using a single security layer  
   b) Using multiple layers of security ✓  
   c) Ignoring minor threats  
   d) Encrypting only emails

8. Authentication ensures:  
   a) User identity verification ✓  
   b) Data recovery  
   c) Malware detection  
   d) Network speed

9. Integrity in security ensures:  
   a) Data is not altered unauthorizedly ✓  
   b) Data is encrypted  
   c) Data is always backed up  
   d) Password complexity

10. Availability in security principles means:  
    a) Data can be accessed when needed ✓  
    b) Data is hidden from everyone  
    c) Data is never stored  
    d) Data is encrypted

## 3. Cryptography Basics

11. Which of the following is symmetric encryption?  
    a) AES ✓  
    b) RSA  
    c) ECC  
    d) SHA-256

12. Public key cryptography is also known as:  
    a) Symmetric key  
    b) Asymmetric key ✓  
    c) Hashing  
    d) Encoding

13. Which algorithm is used for hashing?  
    a) SHA-256 ✓  
    b) AES  
    c) RSA  
    d) DES

14. Digital signatures ensure:  
    b) Authenticity and integrity ✓  
    a) Confidentiality only  
    c) Faster data transmission  
    d) Password protection

15. Which of the following is an example of asymmetric encryption?  
    a) DES  
    b) RSA ✓  
    c) AES  
    d) 3DES

## 4. Network Security

16. A firewall is used to:  
    a) Filter incoming and outgoing traffic ✓  
    b) Store passwords  
    c) Encrypt emails  
    d) Backup files

17. VPN stands for:  
    a) Virtual Private Network ✓  
    b) Verified Public Network  
    c) Virtual Public Node  
    d) Visual Private Node

18. What is the main purpose of IDS (Intrusion Detection System)?  
    a) Detect unauthorized network activity ✓  
    b) Encrypt traffic  
    c) Block websites  
    d) Backup data

19. HTTPS ensures:  
    a) Data is encrypted during transmission ✓  
    b) Faster internet speed  
    c) Malware scanning  
    d) Server backup

20. Which attack involves intercepting communication between two parties?  
    a) Phishing  
    b) Man-in-the-middle ✓  
    c) SQL Injection  
    d) DoS

## 5. Operating System Security

21. Which OS feature restricts unauthorized access to resources?  
    a) File permissions ✓  
    b) Disk formatting  
    c) Screen saver  
    d) Task scheduler

22. Patch management in OS security refers to:  
    a) Updating software to fix vulnerabilities ✓  
    b) Deleting old files  
    c) Encrypting user data  
    d) Monitoring traffic

23. User authentication in OS is implemented by:  
    a) Username and password ✓  
    b) File compression  
    c) Disk partitioning  
    d) CPU scheduling

24. Antivirus software protects OS by:  
    a) Detecting and removing malware ✓  
    b) Encrypting the OS  
    c) Optimizing memory  
    d) Increasing CPU speed

25. OS hardening means:  
    a) Reducing vulnerabilities and configuring securely ✓  
    b) Upgrading hardware  
    c) Installing more applications  
    d) Increasing system speed

## 6. Web Application Security

26. SQL Injection attacks target:  
    a) Databases through input fields ✓  
    b) Network routers  
    c) Operating systems  
    d) Web servers physically

27. Cross-Site Scripting (XSS) allows attackers to:  
    a) Inject malicious scripts into web pages ✓  
    b) Encrypt web traffic  
    c) Backup databases  
    d) Authenticate users

28. HTTPS ensures:  
    a) Faster website loading  
    b) Secure communication between browser and server ✓  
    c) Web server optimization  
    d) SQL injection prevention

29. Which header helps prevent clickjacking?  
    a) X-Frame-Options ✓  
    b) Content-Type  
    c) User-Agent  
    d) Accept-Encoding

30. Input validation in web applications helps:  
    a) Prevent injection attacks ✓  
    b) Improve server speed  
    c) Encrypt user data  
    d) Increase browser cache

## 7. Malware & Attack Techniques

31. Which of the following is malware that demands ransom?  
    a) Virus  
    b) Worm  
    c) Ransomware ✓  
    d) Spyware

32. A worm differs from a virus because it:  
    a) Requires human action  
    b) Self-replicates without user intervention ✓  
    c) Only encrypts files  
    d) Is harmless

33. Trojans are malicious programs that:  
    a) Appear legitimate but contain harmful code ✓  
    b) Encrypt files automatically  
    c) Spread only via email  
    d) Monitor network traffic

34. DoS attack stands for:  
    a) Data on Security  
    b) Denial of Service ✓  
    c) Direct Operating System  
    d) Distributed OS

35. Phishing attacks usually aim to:  
    a) Steal sensitive information ✓  
    b) Delete malware  
    c) Update antivirus  
    d) Encrypt network traffic

## 8. Authentication & Access Control

36. Multi-factor authentication requires:  
    a) Two or more verification methods ✓  
    b) Only username  
    c) Only password  
    d) CAPTCHA only

37. Which is an example of biometric authentication?  
    a) Password  
    b) Fingerprint ✓  
    c) PIN  
    d) Security question

38. Role-Based Access Control (RBAC) assigns permissions based on:  
    a) User role ✓  
    b) IP address  
    c) Time of access  
    d) Hardware type

39. A session token is used to:  
    a) Maintain user authentication state ✓  
    b) Encrypt emails  
    c) Detect malware  
    d) Block network attacks

40. Which of the following is a preventive control in access management?  
    a) Audit log  
    b) Alert system  
    c) Strong password policy ✓  
    d) Malware scanner

## 9. Secure Software Development

41. Secure coding practices help prevent:  
    a) Vulnerabilities and exploits ✓  
    b) Faster CPU performance  
    c) Disk fragmentation  
    d) Software updates

42. Input validation prevents:  
    a) SQL injection and XSS ✓  
    b) Faster compilation  
    c) Memory leaks  
    d) Disk errors

43. Code reviews primarily aim to:  
    a) Identify security flaws ✓  
    b) Increase memory usage  
    c) Speed up deployment  
    d) Optimize CPU usage

44. Threat modeling is used to:  
    a) Identify potential security risks ✓  
    b) Design database schema  
    c) Encrypt network traffic  
    d) Backup files

45. Which of the following is part of the SDLC security phase?  
    a) UI design  
    b) Security testing ✓  
    c) Disk partitioning  
    d) VPN setup

## 10. Wireless & Mobile Security

46. WPA3 is used for:  
    *(Answer: securing Wi-Fi networks)*

47. Mobile device management (MDM) primarily ensures:  
    a) Security and policy enforcement on devices ✓  
    b) Faster mobile network  
    c) Better camera quality  
    d) Battery optimization

48. A rogue access point is:  
    a) An unauthorized Wi-Fi hotspot ✓  
    b) A secure VPN  
    c) Firewall configuration  
    d) Mobile antivirus

49. SIM card swapping attacks target:  
    a) Mobile authentication and OTPs ✓  
    b) Wi-Fi encryption  
    c) Mobile GPS  
    d) OS patch updates

## 11. Cloud & Virtualization Security

50. Shared responsibility model means:  
    a) Both provider and customer share security duties ✓  
    b) Provider only is responsible  
    c) Customer only is responsible  
    d) No one is responsible

51. Virtual machines improve security by:  
    a) Isolating workloads ✓  
    b) Encrypting all emails  
    c) Faster CPU processing  
    d) Disk compression

52. Cloud access security broker (CASB) is used for:  
    a) Monitoring and enforcing security policies ✓  
    b) Encrypting hard drives  
    c) Backing up OS  
    d) Faster networking

53. Multi-tenancy in cloud requires:  
    a) Strong isolation between users ✓  
    b) Faster CPU  
    c) Firewall on laptops  
    d) Antivirus updates

54. Which is a common cloud security threat?  
    a) Password expiration  
    b) Data breaches ✓  
    c) Printer malfunction  
    d) Monitor flickering

## 12. Digital Forensics

55. Digital forensics focuses on:  
    a) Investigating cybercrimes using digital evidence ✓  
    b) Encrypting emails  
    c) Software patching  
    d) Network monitoring

56. Chain of custody ensures:  
    a) Evidence integrity is maintained ✓  
    b) Faster disk access  
    c) Malware removal  
    d) Firewall updates

57. Which tool is commonly used in forensic analysis?  
    a) MS Word  
    b) EnCase ✓  
    c) Photoshop  
    d) VLC Player

58. Live forensics is performed on:  
    a) Systems that are powered on ✓  
    b) Printed documents  
    c) Archived backups only  
    d) Network routers

59. The main goal of forensic imaging is:  
    a) Create an exact copy of digital media ✓  
    b) Encrypt files  
    c) Delete malware  
    d) Update OS

## 13. Incident Response & Management

60. First step in incident response is:  
    a) Identification of the incident ✓  
    b) Recovery  
    c) Reporting  
    d) Root cause analysis

61. Containment in incident response means:  
    a) Limiting the impact of an incident ✓  
    b) Updating antivirus  
    c) Encrypting data  
    d) Installing patches

62. Lessons learned phase aims to:  
    a) Improve future response ✓  
    b) Encrypt logs  
    c) Increase bandwidth  
    d) Delete evidence

63. Which team handles incidents in organizations?  
    a) CSIRT (Computer Security Incident Response Team) ✓  
    b) HR team  
    c) Marketing team  
    d) IT helpdesk

64. A post-incident report includes:  
    a) Impact, cause, and mitigation steps ✓  
    b) Only passwords  
    c) Hardware specs  
    d) Printer logs

## 14. Security Monitoring & Auditing

65. Security monitoring helps in:  
    a) Detecting suspicious activity ✓  
    b) Encrypting data  
    c) Optimizing CPU  
    d) Backing up files

66. SIEM stands for:  
    a) Security Information and Event Management ✓  
    b) Secure Internet Email Management  
    c) System Integration Event Model  
    d) Security Internal Encryption Method

67. Audit trails are important for:  
    a) Tracking user and system activity ✓  
    b) Disk defragmentation  
    c) Encrypting emails  
    d) Installing updates

68. Log analysis helps to:  
    a) Identify patterns and anomalies ✓  
    b) Speed up internet  
    c) Encrypt hard drives  
    d) Backup databases

69. Which of the following is preventive monitoring?  
    a) Reviewing logs after an attack  
    b) Implementing real-time intrusion alerts ✓  
    c) Deleting old files  
    d) Disk formatting

## 15. Cyber Laws & Ethics

70. GDPR is concerned with:  
    a) Data privacy and protection ✓  
    b) CPU optimization  
    c) Firewall configuration  
    d) Malware detection

71. Intellectual property protection in cyberspace ensures:  
    a) Legal rights for digital content ✓  
    b) Faster downloads  
    c) Network backup  
    d) VPN access

72. Unauthorized hacking is classified as:  
    a) Illegal activity ✓  
    b) Ethical practice  
    c) System upgrade  
    d) Security testing

73. Cyber ethics includes:  
    a) Responsible and legal online behavior ✓  
    b) Encrypting all files  
    c) Ignoring user privacy  
    d) Installing malware

74. Which law governs electronic transactions in India?  
    a) IT Act 1999  
    b) Information Technology Act 2000 ✓  
    c) Cyber Crime Act 2010  
    d) Digital Security Act 2005

## 16. Emerging Trends in Cyber Security

75. AI in cybersecurity is used for:  
    a) Threat detection and anomaly analysis ✓  
    b) Disk defragmentation  
    c) Printer management  
    d) Speeding up browsers

76. Blockchain can enhance security by:  
    a) Providing tamper-proof transactions ✓  
    b) Encrypting passwords only  
    c) Speeding network traffic  
    d) Defragmenting disks

77. Zero Trust Security principle means:  
    a) Never trust, always verify ✓  
    b) Trust all internal users  
    c) Encrypt only emails  
    d) Use firewall only

78. Quantum cryptography is emerging for:  
    a) Highly secure communication ✓  
    b) Faster CPU processing  
    c) Mobile device management  
    d) Disk backup

79. Threat intelligence platforms provide:  
    a) Data on emerging threats and attack patterns ✓  
    b) Antivirus updates only  
    c) OS hardening  
    d) Wi-Fi optimization

---

# Databases

## 1. Introduction to Database Systems

1. A database is:  
   a) A collection of organized data ✓  
   b) A single file  
   c) A type of operating system  
   d) A computer virus

2. DBMS stands for:  
   a) Database Management System ✓  
   b) Data Backup Management System  
   c) Digital Binary Management Software  
   d) Database Memory Storage

3. Which of the following is a benefit of using a database?  
   a) Requires manual data entry  
   b) Avoids data redundancy ✓  
   c) Slower data retrieval  
   d) More hardware usage

4. In databases, CRUD stands for:  
   a) Create, Delete, Update, Deploy  
   b) Create, Read, Update, Delete ✓  
   c) Copy, Run, Upload, Delete  
   d) Calculate, Read, Use, Drop

5. A flat file database is:  
   a) Non-relational and simple ✓  
   b) Highly normalized  
   c) Distributed  
   d) Cloud-based

## 2. Database System Architecture

6. The three-tier architecture includes:  
   a) Client, Server, Firewall  
   b) Presentation, Logic, Data ✓  
   c) Input, Output, Storage  
   d) Application, OS, Hardware

7. In DBMS architecture, the internal level is responsible for:  
   a) Physical storage of data ✓  
   b) User interface  
   c) Application logic  
   d) Data validation

8. The external level of DBMS shows:  
   a) User views of the data ✓  
   b) Disk structure  
   c) SQL syntax  
   d) Memory allocation

9. Conceptual schema defines:  
   a) Logical structure of the entire database ✓  
   b) Physical memory  
   c) User interface  
   d) Indexing method

10. DBMS architecture helps in:  
    a) Data abstraction and independence ✓  
    b) Encrypting passwords  
    c) Optimizing CPU only

## 3. Data Models

11. Which of the following is a common data model?  
    a) Relational ✓

12. Hierarchical data model organizes data as:  
    a) Tree structure ✓  
    b) Table format  
    c) Graph network  
    d) Flat file

13. Network data model represents data using:  
    a) Tables only  
    b) Nodes and edges ✓  
    c) Arrays  
    d) XML

14. Object-oriented data models store data as:  
    a) Objects ✓  
    b) Rows only  
    c) Columns only  
    d) Files only

## 4. Relational Database Concepts

15. In a relational database, data is stored in:  
    a) Tables ✓  
    b) Files  
    c) Trees  
    d) Graphs

16. Each row in a table is called:  
    a) Tuple ✓  
    b) Column  
    c) Schema  
    d) Key

17. A column in a table is called:  
    a) Attribute ✓  
    b) Record  
    c) Tuple  
    d) Table

18. Primary key ensures:  
    a) Uniquely identifies each row ✓  
    b) Data is encrypted  
    c) Data is redundant  
    d) Disk is optimized

19. Foreign key is used to:  
    a) Maintain referential integrity ✓  
    b) Encrypt data

## 5. Relational Algebra & Calculus

20. Which operation is not part of relational algebra?  
    a) Select  
    b) Project  
    c) Join  
    d) Encrypt ✓

21. The SELECT operation is used to:  
    a) Retrieve rows based on condition ✓  
    b) Delete tables  
    c) Create schema  
    d) Encrypt data

22. The PROJECT operation retrieves:  
    a) Specific columns from a table ✓  
    b) Rows only  
    c) Full database  
    d) Index entries

23. Join operation combines:  
    a) Two or more tables based on a related attribute ✓  
    b) Two indexes  
    c) Columns only  
    d) Databases physically

24. Relational calculus is:  
    a) Non-procedural query language ✓  
    b) Physical storage method  
    c) Indexing technique  
    d) Transaction method

## 6. Structured Query Language (SQL)

25. Which SQL statement retrieves data from a table?  
    a) SELECT ✓  
    b) INSERT  
    c) UPDATE  
    d) DELETE

26. To remove all records from a table, we use:  
    a) DROP  
    b) TRUNCATE  
    c) DELETE ✓  
    d) ALTER

27. To add a new row in a table, we use:  
    a) INSERT INTO ✓  
    b) SELECT  
    c) UPDATE  
    d) ALTER

28. To change existing data, we use:  
    a) SELECT  
    b) UPDATE ✓  
    c) DELETE  
    d) DROP

29. SQL WHERE clause is used to:  
    a) Filter records based on a condition ✓

## 7. Advanced SQL

30. A subquery is:  
    a) A query inside another query ✓  
    b) A query that deletes all tables  
    c) An index  
    d) A database view

31. SQL JOIN is used to:  
    a) Combine rows from two or more tables ✓  
    b) Encrypt data  
    c) Backup tables  
    d) Delete rows

32. Which of the following is a type of JOIN?  
    a) INNER JOIN ✓  
    b) SELECT JOIN  
    c) TABLE JOIN  
    d) DROP JOIN

33. Aggregate functions in SQL include:  
    a) SUM, COUNT, AVG ✓  
    b) SELECT, DELETE  
    c) INSERT, UPDATE  
    d) JOIN, MERGE

34. A view in SQL is:  
    a) Virtual table derived from a query ✓  
    b) Physical table only  
    c) Index  
    d) Stored procedure

## 8. Database Design & Normalization

35. The main goal of normalization is:  
    a) Reduce data redundancy ✓  
    b) Increase disk space  
    c) Slow down queries  
    d) Encrypt tables

36. First Normal Form (1NF) requires:  
    a) No repeating groups in a table ✓  
    b) No null values  
    c) Foreign keys only  
    d) Backup of tables

37. Second Normal Form (2NF) eliminates:  
    a) Redundant tables  
    b) Partial dependencies ✓  
    c) Duplicate databases  
    d) Disk fragmentation

38. Third Normal Form (3NF) removes:  
    a) Partial dependencies  
    b) Transitive dependencies ✓  
    c) Primary keys  
    d) Foreign keys

39. A functional dependency is:  
    a) Relationship where one attribute determines another ✓  
    b) Relationship between databases  
    c) Disk allocation  
    d) Query optimization

## 9. Transaction Management

40. A database transaction is:  
    a) A unit of work performed on the database ✓  
    b) Disk allocation method  
    c) SQL query only  
    d) User authentication

41. ACID property 'A' stands for:  
    a) Atomicity ✓  
    b) Accessibility  
    c) Accuracy  
    d) Authorization

42. Atomicity ensures:  
    a) All steps in a transaction succeed or none ✓  
    b) Data is encrypted  
    c) Indexes are maintained  
    d) Queries are optimized

43. Consistency in transactions ensures:  
    a) Database moves from one valid state to another ✓  
    b) Disk is defragmented  
    c) CPU is optimized  
    d) Network traffic reduced

44. Durability ensures:  
    a) Changes are permanent after commit ✓  
    b) Changes are temporary  
    c) Data is deleted  
    d) Transactions are rolled back

## 10. Concurrency Control

45. Concurrency control prevents:  
    a) Conflicts from simultaneous transactions ✓  
    b) Data encryption  
    c) Disk failure  
    d) Network attacks

46. Which technique is used for concurrency control?  
    *(Answer: locking, timestamping, etc.)*

47. Optimistic concurrency control assumes:  
    a) Conflicts are rare ✓  
    b) Conflicts happen frequently  
    c) Disk is fragmented

## 11. Recovery Management

48. Database recovery is needed after:  
    a) System crash or failure ✓  
    b) Normal query  
    c) Table creation  
    d) Data retrieval

49. A log file records:  
    a) Changes made by transactions ✓  
    b) Disk layout  
    c) Index order  
    d) Network traffic

50. Checkpointing helps:  
    a) Reduce recovery time ✓  
    b) Encrypt database  
    c) Backup queries  
    d) Optimize CPU

51. Rollback restores:  
    a) Database to previous consistent state ✓  
    b) Network speed  
    c) Disk space  
    d) Passwords

52. Recovery techniques include:  
    a) Encryption  
    b) Rollback, Rollforward ✓  
    c) Indexing  
    d) SQL queries

## 12. Indexing & File Organization

53. Indexing in databases helps:  
    a) Speed up data retrieval ✓  
    b) Reduce disk space  
    c) Encrypt data  
    d) Backup database

54. Which of the following is a type of index?  
    a) Primary file  
    b) B-Tree ✓  
    c) Flat file  
    d) Hash table only

55. Clustered index:  
    a) Determines physical order of data ✓  
    b) Only encrypts columns  
    c) Compresses data  
    d) Backups table

56. Hashing helps in:  
    a) Direct access to records ✓  
    b) Encrypting files  
    c) Transaction rollback  
    d) Disk defragmentation

57. File organization impacts:  
    a) Query performance ✓  
    b) CPU speed only  
    c) Network latency  
    d) Password security

## 13. Query Processing & Optimization

58. Query optimization aims to:  
    a) Minimize resource usage ✓  
    b) Encrypt database  
    c) Backup tables  
    d) Increase table size

59. Execution plan in DBMS shows:  
    a) How a query will be executed ✓  
    b) Disk fragmentation  
    c) Network traffic  
    d) CPU scheduling

60. Which operator retrieves rows from tables in a query?  
    a) SELECT ✓  
    b) INSERT  
    c) UPDATE  
    d) DELETE

61. Indexing improves:  
    a) Query performance ✓  
    b) Disk backup speed  
    c) Password encryption  
    d) CPU temperature

62. Cost-based optimization considers:  
    a) Estimated resource usage of query ✓  
    b) Disk location only  
    c) CPU cores  
    d) Network latency

## 14. Database Security

63. Which of the following is a database security threat?  
    a) SQL Injection ✓  
    b) Disk defragmentation  
    c) Network backup  
    d) Memory optimization

64. Role-based access control (RBAC) helps:  
    a) Grant permissions based on user role ✓  
    b) Encrypt passwords only  
    c) Backup tables  
    d) Optimize CPU

65. Encryption in databases secures:  
    a) Data at rest and in transit ✓  
    b) Only table names  
    c) Only queries  
    d) CPU performance

66. Auditing in DBMS helps:  
    a) Track database activity ✓  
    b) Encrypt queries  
    c) Backup disk  
    d) Network speed

67. SQL injection can be prevented using:  
    a) Prepared statements and input validation ✓  
    b) Backup  
    c) Disk defragmentation  
    d) Indexing

## 15. Distributed Databases

68. Distributed database stores data:  
    a) Across multiple sites ✓  
    b) In a single table  
    c) Only in cloud  
    d) Only in memory

69. A replica in distributed databases:  
    a) Copy of data at another site ✓  
    b) Backup software  
    c) Index only  
    d) Transaction log

70. Data fragmentation improves:  
    a) Query performance ✓  
    b) CPU usage  
    c) Encryption  
    d) Disk formatting

71. Consistency in distributed databases ensures:  
    a) All replicas have the same data ✓  
    b) Faster queries only  
    c) CPU optimization  
    d) Disk backup

72. CAP theorem stands for:  
    a) Consistency, Availability, Partition tolerance ✓  
    b) Cache, Access, Performance  
    c) Compute, Archive, Process  
    d) Control, Authentication, Policy

## 16. NoSQL & Modern Databases

73. NoSQL databases are suitable for:  
    a) Large-scale, unstructured data ✓  
    b) Only relational data  
    c) Encryption only  
    d) Disk formatting

74. Which of the following is a document-based NoSQL database?  
    a) MySQL  
    b) MongoDB ✓  
    c) Oracle  
    d) PostgreSQL

75. Key-value stores store data as:  
    a) Key-value pairs ✓  
    b) Tables only  
    c) Objects only  
    d) SQL queries

76. Column-family databases include:  
    a) Cassandra ✓  
    b) MySQL  
    c) SQLite  
    d) Access

77. NoSQL databases are:  
    a) Schema-less or flexible schema ✓  
    b) Always relational  
    c) Only for SQL queries  
    d) Disk-only

## 17. Data Warehousing & Data Mining (Introductory)

78. Data warehouse stores:  
    a) Historical and integrated data for analysis ✓  
    b) Only real-time data  
    c) Only encrypted data  
    d) Only indexes

79. ETL process stands for:  
    a) Extract, Transform, Load ✓  
    b) Encrypt, Transfer, Lock  
    c) Execute, Test, Launch  
    d) Enter, Track, Log

80. Data mining is used to:  
    a) Discover patterns and insights ✓  
    b) Encrypt tables  
    c) Backup databases  
    d) Disk defragmentation

81. OLAP is used for:  
    a) Multidimensional analysis ✓  
    b) Data entry  
    c) Disk management  
    d) Query logs

82. Dimensional modeling uses:  
    a) Fact and dimension tables ✓  
    b) Only SQL views  
    c) No indexing  
    d) Flat files

---

# Problem Solving And Analytical Skills

## 1. Introduction to Problem Solving

1. Problem solving primarily involves:  
   a) Finding a solution to a challenge ✓  
   b) Writing code only  
   c) Memorizing data  
   d) Optimizing hardware

2. A well-defined problem has:  
   a) Clear goals and constraints ✓  
   b) Random outcomes  
   c) No solution  
   d) Undefined input

3. Which is a key step in problem solving?  
   a) Ignoring the problem  
   b) Analyzing the problem ✓  
   c) Using a single guess  
   d) Memorizing answers

4. Problem-solving skills are important for:  
   a) Decision-making and innovation ✓  
   b) Formatting disks  
   c) Installing OS only  
   d) Encrypting data

5. Effective problem-solving often starts with:  
   a) Understanding the problem ✓  
   b) Writing code immediately  
   c) Ignoring constraints  
   d) Random trial and error

## 2. Problem Understanding & Analysis

6. Analyzing a problem helps in:  
   a) Identifying root causes ✓  
   b) Encrypting solutions  
   c) Formatting disks  
   d) Ignoring constraints

7. Problem decomposition involves:  
   a) Breaking a problem into smaller parts ✓  
   b) Deleting files  
   c) Encrypting data  
   d) Compressing memory

8. Defining inputs and outputs helps in:  
   a) Understanding problem requirements ✓  
   b) Installing software  
   c) Formatting database  
   d) Running malware

9. Identifying constraints ensures:  
   a) Solutions are feasible ✓  
   b) CPU runs faster  
   c) Network is optimized  
   d) Disk space is increased

10. Flowcharts are used to:  
    a) Visualize problem steps ✓

## 3. Logical Reasoning Fundamentals

11. Deductive reasoning moves from:  
    a) General principles to specific cases ✓  
    b) Specific to general  
    c) Random trial  
    d) Disk defragmentation

12. Inductive reasoning involves:  
    a) Random guessing  
    b) Generalizing from specific cases ✓  
    c) Encrypting data  
    d) Formatting memory

13. Syllogisms are used in:  
    a) Logical reasoning ✓  
    b) Database indexing  
    c) CPU scheduling  
    d) Network routing

14. Logical operators include:  
    a) AND, OR, NOT ✓  
    b) SELECT, INSERT  
    c) Encrypt, Decrypt  
    d) Backup, Restore

15. Logical reasoning helps in:  
    a) Making valid conclusions ✓  
    b) Formatting disks  
    c) Installing OS  
    d) Encrypting files

## 4. Algorithms & Flow Control

16. An algorithm is:  
    a) Step-by-step procedure to solve a problem ✓  
    b) Random guess  
    c) Backup plan  
    d) Disk format method

17. Flowcharts represent:  
    a) Algorithmic steps visually ✓  
    b) Disk structure  
    c) SQL queries  
    d) CPU scheduling

18. Which control structure repeats a set of instructions?  
    a) Sequence  
    b) Decision  
    c) Loop ✓  
    d) Function

19. Conditional statements use:  
    a) IF-ELSE structures ✓  
    b) Disk blocks  
    c) SQL joins  
    d) Indexes

20. Pseudocode is used to:  
    *(Answer: design algorithms in plain language)*

## 5. Data Representation & Abstraction

21. Binary representation is used because:  
    a) Computers operate using 0s and 1s ✓  
    b) Easier to read for humans  
    c) Encrypts data  
    d) Backups files

22. Abstraction helps in:  
    a) Hiding complex details ✓  
    b) Encrypting network  
    c) Formatting memory  
    d) Installing OS

23. High-level programming languages provide:  
    a) Abstraction from hardware ✓  
    b) CPU optimization  
    c) Disk compression  
    d) SQL queries

24. Data types include:  
    a) Integer, Float, String ✓  
    b) Tables, Columns  
    c) Indexes  
    d) Networks

25. Representing information visually is:  
    a) Data visualization ✓  
    b) Encryption  
    c) Disk defragmentation  
    d) SQL query

## 6. Pattern Recognition & Generalization

26. Pattern recognition helps in:  
    a) Identifying regularities in data ✓  
    b) Encrypting data  
    c) Formatting disks  
    d) Query optimization

27. Generalization involves:  
    a) Applying known patterns to new problems ✓  
    b) Encrypting passwords  
    c) Disk backup  
    d) Network speed

28. Sequences and series are examples of:  
    a) Patterns ✓  
    b) Disk blocks  
    c) CPU registers  
    d) SQL statements

29. Recognizing trends in data is:  
    a) Pattern analysis ✓  
    b) SQL query  
    c) Disk indexing  
    d) Memory allocation

30. Pattern recognition is crucial in:  
    a) Machine learning and AI ✓  
    b) Disk formatting  
    c) CPU overclocking  
    d) Firewall rules

## 7. Mathematical & Quantitative Reasoning

31. Ratio and proportion help in:  
    a) Solving quantitative problems ✓  
    b) Encrypting data  
    c) Formatting memory  
    d) Disk indexing

32. Percentages are used for:  
    a) Comparing values quantitatively ✓  
    b) Encrypting files  
    c) Query optimization  
    d) CPU allocation

33. Probability measures:  
    a) Likelihood of an event ✓  
    b) Disk space usage  
    c) Memory speed  
    d) SQL queries

34. Algebra helps in:  
    a) Solving equations ✓  
    b) Encrypting data  
    c) Disk backup  
    d) CPU optimization

35. Quantitative reasoning aids in:  
    a) Making numerical decisions ✓  
    b) Formatting disks  
    c) Encrypting network  
    d) Indexing tables

## 8. Algorithmic Thinking

36. Algorithmic thinking focuses on:  
    a) Step-by-step problem solving ✓  
    b) Disk formatting  
    c) Encrypting files  
    d) Network setup

37. Breaking down a problem is:  
    a) Decomposition ✓  
    b) Abstraction  
    c) Encryption  
    d) Indexing

38. Reusing solutions in new problems is:  
    a) Generalization ✓  
    b) Backup  
    c) CPU scheduling  
    d) Query optimization

39. Optimization in algorithmic thinking aims to:  
    a) Improve efficiency ✓  
    b) Encrypt data  
    c) Format disks  
    d) Backup files

## 9. Critical Thinking & Decision Making

40. Critical thinking involves:  
    a) Evaluating information logically ✓  
    b) Encrypting data  
    c) Disk backup  
    d) CPU scheduling

41. Decision making requires:  
    a) Choosing the best solution ✓  
    b) Formatting disks  
    c) SQL queries  
    d) Network setup

42. Considering pros and cons helps in:  
    a) Informed decisions ✓  
    b) Encrypting files  
    c) Disk indexing  
    d) CPU optimization

43. Logical evaluation supports:  
    a) Critical thinking ✓  
    b) SQL queries  
    c) Disk formatting  
    d) Encryption

44. Risk assessment is part of:  
    a) Decision making ✓  
    b) Disk backup  
    c) CPU cooling  
    d) Network routing

## 10. Debugging & Error Analysis

45. Debugging helps to:  
    a) Identify and fix errors ✓  
    b) Encrypt data  
    c) Format disks  
    d) Backup files

46. Syntax errors are:  
    a) Violations of language rules ✓  
    b) Disk errors  
    c) CPU errors  
    d) Firewall errors

47. Logical errors occur when:  
    a) Program does not behave as intended ✓  
    b) Disk fails  
    c) Network crashes  
    d) Encryption fails

48. Runtime errors appear:  
    a) During program execution ✓  
    b) Before compilation  
    c) After formatting  
    d) During encryption

49. Testing helps to:  
    a) Identify defects and verify correctness ✓  
    b) Encrypt files  
    c) Optimize CPU  
    d) Backup data

## 11. Complexity & Efficiency Awareness

50. Time complexity measures:  
    a) Execution time of an algorithm ✓  
    b) Disk usage  
    c) Memory encryption  
    d) Network speed

51. Space complexity measures:  
    a) Memory required by an algorithm ✓  
    b) Disk speed  
    c) CPU temperature  
    d) Network latency

52. Big O notation represents:  
    a) Upper bound of algorithm complexity ✓  
    b) Encryption strength  
    c) Disk allocation  
    d) CPU usage

53. Efficient algorithms:  
    a) Use minimal resources ✓  
    b) Encrypt data  
    c) Backup files  
    d) Format disks

54. Optimizing algorithms reduces:  
    a) Time and memory usage ✓  
    b) Disk size  
    c) Network speed  
    d) SQL queries

## 12. Problem Solving Using Programming

55. Programming helps to:  
    a) Automate problem solving ✓  
    b) Format disks  
    c) Encrypt network  
    d) Backup database

56. Loops in programming help to:  
    a) Repeat instructions efficiently ✓  
    b) Encrypt files  
    c) Backup data  
    d) Format disks

57. Functions support:  
    a) Modular and reusable code ✓  
    b) Disk formatting  
    c) Encrypt data  
    d) CPU scheduling

58. Conditional statements enable:  
    a) Decision-making in programs ✓  
    b) Disk optimization  
    c) Network routing  
    d) Backup

59. Debugging code ensures:  
    a) Correct program behavior ✓  
    b) Disk backup  
    c) Encryption  
    d) CPU overclocking

## 13. Data-Driven Problem Solving

60. Data-driven decisions rely on:  
    a) Analyzing data patterns ✓  
    b) Guesswork  
    c) Disk speed  
    d) CPU temperature

61. Data visualization helps in:  
    a) Interpreting patterns ✓  
    b) Encrypting files  
    c) Disk defragmentation  
    d) CPU optimization

62. Metrics and KPIs support:  
    a) Measuring performance ✓  
    b) Backup  
    c) Encryption  
    d) Network speed

63. Using past data for predictions is:  
    a) Data-driven analysis ✓  
    b) Disk indexing  
    c) SQL queries  
    d) CPU usage

64. Insights from data help to:  
    a) Make informed decisions ✓  
    b) Encrypt data  
    c) Format disks  
    d) Backup files

## 14. Creative & Innovative Thinking

65. Creativity in problem solving involves:  
    a) Generating new ideas ✓  
    b) Formatting disks  
    c) Encrypting files  
    d) Backup

66. Brainstorming sessions are used for:  
    a) Idea generation ✓  
    b) Disk optimization  
    c) SQL queries  
    d) CPU scheduling

67. Innovation is:  
    a) Applying creative ideas effectively ✓  
    b) Formatting memory  
    c) Encrypting network  
    d) Disk backup

68. Thinking outside the box encourages:  
    a) Novel solutions ✓  
    b) Disk defragmentation  
    c) CPU optimization  
    d) SQL queries

69. Combining ideas leads to:  
    a) Innovative solutions ✓  
    b) Disk formatting  
    c) Encryption  
    d) Backup

## 15. Real-World Problem Solving

70. Real-world problems are often:  
    a) Complex and multi-faceted ✓  
    b) Simple and linear  
    c) Always solved by SQL  
    d) Only CPU related

71. Context analysis helps to:  
    a) Understand real-world constraints ✓  
    b) Encrypt files  
    c) Format disks  
    d) Backup

72. Prioritizing solutions ensures:  
    a) Most effective outcomes ✓  
    b) Disk optimization  
    c) CPU speed  
    d) SQL queries

73. Testing solutions in practice helps:  
    a) Verify effectiveness ✓  
    b) Encrypt data  
    c) Format disks  
    d) Backup

74. Real-world problem solving requires:  
    a) Adaptability and critical thinking ✓  
    b) Disk formatting  
    c) Network optimization  
    d) SQL queries

## 16. Communication & Documentation of Solutions

75. Documentation helps to:  
    a) Share solutions with others ✓  
    b) Encrypt files  
    c) Format disks  
    d) Backup database

76. Clear explanation ensures:  
    a) Solutions are understood ✓  
    b) Disk optimization  
    c) CPU scheduling  
    d) SQL query

77. Visual diagrams help to:  
    a) Represent ideas clearly ✓  
    b) Encrypt data  
    c) Backup files  
    d) Disk formatting

78. Comments in code help:  
    a) Explain logic for future readers ✓  
    b) Encrypt database  
    c) Format memory  
    d) Optimize CPU

79. Reporting outcomes is essential for:  
    a) Evaluation and improvement ✓  
    b) Disk backup  
    c) CPU speed  
    d) SQL queries
`,k=e=>{let t=e.split(`
`),n=[],r=null,i=null,a=null;for(let e=0;e<t.length;e++){let o=t[e].trim();if(!(!o||o===`---`))if(o.startsWith(`# `))r={title:o.replace(`# `,``).trim(),subcategories:[]},n.push(r),i=null,a=null;else if(o.startsWith(`## `))i={title:o.replace(`## `,``).trim(),questions:[]},r&&r.subcategories.push(i),a=null;else if(/^\d+\./.test(o))a={id:o.split(`.`)[0],text:o.replace(/^\d+\.\s*/,``),options:[],correctAnswerIndex:null,explanation:null},i&&i.questions.push(a);else if(/^[A-Za-z]\)/.test(o)){if(a){let e=o.includes(`✓`),t=o.replace(/^[A-Za-z]\)\s*/,``).replace(`✓`,``).trim();a.options.push(t),e&&(a.correctAnswerIndex=a.options.length-1)}}else o.startsWith(`*(`)||o.startsWith(`*(Answer:`)?a&&(a.explanation=o.replace(/^\*\(/,``).replace(/\)\*$/,``).trim()):a&&a.options.length===0&&(a.text+=`
`+o)}return n};function A(){let[e,t]=(0,_.useState)([]),[n,r]=(0,_.useState)(null),[i,a]=(0,_.useState)(null),[o,s]=(0,_.useState)(`idle`),[c,l]=(0,_.useState)(0),[u,d]=(0,_.useState)({}),[f,p]=(0,_.useState)(!0);(0,_.useEffect)(()=>{let e=()=>{window.innerWidth<1024?p(!1):p(!0)};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,_.useEffect)(()=>{t(k(fe))},[]);let m=(e,t)=>{r(e),a(t),s(`idle`),d({}),l(0),window.innerWidth<1024&&p(!1)},h=()=>s(`playing`),g=e=>{o===`playing`&&d(t=>({...t,[c]:e}))},v=()=>{c<S.questions.length-1?l(e=>e+1):s(`results`)},y=()=>{c>0&&l(e=>e-1)},b=()=>{d({}),l(0),s(`idle`)},x=n===null?null:e[n],S=i!==null&&x?x.subcategories[i]:null,C=S&&o===`playing`?S.questions[c]:null,w=(0,_.useMemo)(()=>{if(o!==`results`||!S)return 0;let e=0;return S.questions.forEach((t,n)=>{u[n]===t.correctAnswerIndex&&u[n]!==void 0&&e++}),e},[o,S,u]);return(0,O.jsxs)(`div`,{className:`flex h-[100dvh] bg-slate-50 font-sans text-slate-800`,children:[!f&&(0,O.jsx)(`button`,{onClick:()=>p(!0),className:`lg:hidden fixed top-4 left-4 z-50 p-2 bg-indigo-600 text-white rounded-lg shadow-md`,children:(0,O.jsx)(le,{size:20})}),f&&(0,O.jsx)(`div`,{onClick:()=>p(!1),className:`lg:hidden fixed inset-0 bg-slate-900/50 z-30 transition-opacity`}),(0,O.jsx)(`div`,{className:`fixed inset-y-0 left-0 z-40 w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${f?`translate-x-0`:`-translate-x-full`}`,children:(0,O.jsxs)(`div`,{className:`flex flex-col h-full`,children:[(0,O.jsxs)(`div`,{className:`p-4 border-b border-slate-200 flex justify-between items-center bg-indigo-50`,children:[(0,O.jsxs)(`h1`,{className:`text-lg font-bold text-indigo-900 flex items-center gap-2`,children:[(0,O.jsx)(re,{size:20,className:`text-indigo-600`}),`IT Quiz Explorer`]}),(0,O.jsx)(`button`,{onClick:()=>p(!1),className:`lg:hidden p-1 text-slate-500 hover:bg-indigo-100 rounded`,children:(0,O.jsx)(ue,{size:20})})]}),(0,O.jsx)(`div`,{className:`flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar`,children:e.map((e,t)=>(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`h2`,{className:`text-xs font-bold uppercase tracking-wider text-slate-400 mb-2`,children:e.title}),(0,O.jsx)(`ul`,{className:`space-y-1`,children:e.subcategories.map((e,r)=>{let a=n===t&&i===r;return(0,O.jsx)(`li`,{children:(0,O.jsxs)(`button`,{onClick:()=>m(t,r),className:`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors duration-150 flex items-center gap-2 ${a?`bg-indigo-600 text-white font-medium shadow-sm`:`text-slate-600 hover:bg-indigo-50 hover:text-indigo-700`}`,children:[(0,O.jsx)(`div`,{className:`w-1.5 h-1.5 rounded-full ${a?`bg-white`:`bg-transparent`}`}),(0,O.jsx)(`span`,{className:`truncate`,children:e.title})]})},r)})})]},t))})]})}),(0,O.jsx)(`div`,{className:`flex-1 flex flex-col h-[100dvh] overflow-hidden bg-slate-50`,children:S?(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(`div`,{className:`bg-white border-b border-slate-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm z-10 lg:pl-6 pl-16`,children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`p`,{className:`text-xs font-semibold text-indigo-500 uppercase tracking-wide`,children:x.title}),(0,O.jsx)(`h2`,{className:`text-xl font-bold text-slate-800 mt-0.5`,children:S.title})]}),(0,O.jsxs)(`div`,{className:`text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full inline-flex items-center gap-2 w-fit`,children:[S.questions.length,` Questions`]})]}),(0,O.jsx)(`div`,{className:`flex-1 overflow-y-auto p-4 sm:p-8 flex justify-center`,children:(0,O.jsxs)(`div`,{className:`w-full max-w-3xl`,children:[o===`idle`&&(0,O.jsxs)(`div`,{className:`bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center mt-12 animate-in fade-in slide-in-from-bottom-4 duration-500`,children:[(0,O.jsx)(`div`,{className:`w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6`,children:(0,O.jsx)(re,{size:40,className:`text-indigo-600`})}),(0,O.jsx)(`h3`,{className:`text-2xl font-bold mb-4`,children:`Ready to test your knowledge?`}),(0,O.jsxs)(`p`,{className:`text-slate-600 mb-8 max-w-lg mx-auto`,children:[`This quiz contains `,S.questions.length,` multiple-choice questions focusing on `,S.title,`.`]}),(0,O.jsxs)(`button`,{onClick:h,className:`inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 hover:shadow-lg transition-all active:scale-95`,children:[(0,O.jsx)(E,{size:20,fill:`currentColor`}),`Start Quiz`]})]}),o===`playing`&&C&&(0,O.jsxs)(`div`,{className:`animate-in fade-in duration-300`,children:[(0,O.jsxs)(`div`,{className:`mb-8`,children:[(0,O.jsxs)(`div`,{className:`flex justify-between text-sm font-semibold text-slate-500 mb-2`,children:[(0,O.jsxs)(`span`,{children:[`Question `,c+1,` of `,S.questions.length]}),(0,O.jsxs)(`span`,{children:[Math.round((c+1)/S.questions.length*100),`%`]})]}),(0,O.jsx)(`div`,{className:`h-2.5 w-full bg-slate-200 rounded-full overflow-hidden`,children:(0,O.jsx)(`div`,{className:`h-full bg-indigo-600 transition-all duration-500 ease-out`,style:{width:`${(c+1)/S.questions.length*100}%`}})})]}),(0,O.jsxs)(`div`,{className:`bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 mb-6`,children:[(0,O.jsx)(`h3`,{className:`text-lg sm:text-xl font-medium text-slate-800 mb-8 leading-relaxed whitespace-pre-wrap`,children:C.text}),C.options.length>0?(0,O.jsx)(`div`,{className:`space-y-3`,children:C.options.map((e,t)=>{let n=u[c]===t;return(0,O.jsxs)(`button`,{onClick:()=>g(t),className:`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 group ${n?`border-indigo-600 bg-indigo-50 text-indigo-900 shadow-sm`:`border-slate-200 hover:border-indigo-300 hover:bg-slate-50`}`,children:[(0,O.jsx)(`div`,{className:`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${n?`border-indigo-600 bg-indigo-600`:`border-slate-300 group-hover:border-indigo-400`}`,children:n&&(0,O.jsx)(`div`,{className:`w-2 h-2 bg-white rounded-full`})}),(0,O.jsx)(`span`,{className:`text-base sm:text-lg`,children:e})]},t)})}):(0,O.jsxs)(`div`,{className:`p-6 bg-amber-50 border border-amber-200 rounded-xl text-amber-800`,children:[(0,O.jsx)(`p`,{className:`font-medium mb-2`,children:`Note on this question:`}),(0,O.jsx)(`p`,{className:`italic`,children:C.explanation}),(0,O.jsx)(`p`,{className:`text-sm mt-4 text-amber-600`,children:`(This question doesn't have standard multiple choice options in the source text. Click Next to continue).`})]})]}),(0,O.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,O.jsxs)(`button`,{onClick:y,disabled:c===0,className:`px-6 py-3 rounded-xl font-medium text-slate-600 hover:bg-white hover:shadow-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2`,children:[(0,O.jsx)(ie,{size:20}),` Previous`]}),(0,O.jsxs)(`button`,{onClick:v,className:`px-6 py-3 rounded-xl font-bold bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-md transition-all flex items-center gap-2`,children:[c===S.questions.length-1?`Finish Quiz`:`Next Question`,` `,(0,O.jsx)(ae,{size:20})]})]})]}),o===`results`&&(0,O.jsxs)(`div`,{className:`animate-in fade-in slide-in-from-bottom-8 duration-500 pb-12`,children:[(0,O.jsxs)(`div`,{className:`bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center mb-8 relative overflow-hidden`,children:[(0,O.jsx)(`div`,{className:`absolute top-0 left-0 w-full h-2 bg-indigo-600`}),(0,O.jsx)(`h3`,{className:`text-2xl font-bold text-slate-800 mb-2`,children:`Quiz Completed!`}),(0,O.jsx)(`p`,{className:`text-slate-500 mb-8`,children:S.title}),(0,O.jsxs)(`div`,{className:`flex justify-center items-center gap-4 mb-8`,children:[(0,O.jsx)(`div`,{className:`text-6xl font-black text-indigo-600`,children:w}),(0,O.jsx)(`div`,{className:`text-3xl text-slate-300 font-light`,children:`/`}),(0,O.jsx)(`div`,{className:`text-4xl font-bold text-slate-400`,children:S.questions.length})]}),(0,O.jsxs)(`button`,{onClick:b,className:`inline-flex items-center gap-2 bg-slate-100 text-slate-700 hover:bg-slate-200 px-6 py-3 rounded-xl font-bold transition-colors`,children:[(0,O.jsx)(D,{size:18}),` Retake Quiz`]})]}),(0,O.jsxs)(`h4`,{className:`text-xl font-bold text-slate-800 mb-6 flex items-center gap-2`,children:[(0,O.jsx)(oe,{className:`text-emerald-500`}),` Detailed Review`]}),(0,O.jsx)(`div`,{className:`space-y-6`,children:S.questions.map((e,t)=>{let n=u[t],r=n===e.correctAnswerIndex,i=e.options.length===0,a=n===void 0;return(0,O.jsx)(`div`,{className:`bg-white rounded-xl shadow-sm border p-6 ${i?`border-slate-200`:r?`border-emerald-200`:`border-rose-200`}`,children:(0,O.jsxs)(`div`,{className:`flex gap-4`,children:[(0,O.jsx)(`div`,{className:`mt-1`,children:i?(0,O.jsx)(re,{className:`text-slate-400`,size:24}):r?(0,O.jsx)(oe,{className:`text-emerald-500`,size:24}):(0,O.jsx)(se,{className:`text-rose-500`,size:24})}),(0,O.jsxs)(`div`,{className:`flex-1`,children:[(0,O.jsxs)(`p`,{className:`font-semibold text-slate-800 mb-4 whitespace-pre-wrap`,children:[t+1,`. `,e.text]}),e.options.length>0&&(0,O.jsx)(`div`,{className:`space-y-2 mb-4`,children:e.options.map((t,i)=>{let a=n===i,o=e.correctAnswerIndex===i,s=`bg-slate-50 border-slate-100 text-slate-600`;return o?s=`bg-emerald-50 border-emerald-200 text-emerald-800 font-medium`:a&&!r&&(s=`bg-rose-50 border-rose-200 text-rose-800`),(0,O.jsxs)(`div`,{className:`p-3 rounded-lg border ${s} flex items-center justify-between`,children:[(0,O.jsx)(`span`,{children:t}),o&&(0,O.jsx)(oe,{size:16,className:`text-emerald-500`}),a&&!r&&(0,O.jsx)(se,{size:16,className:`text-rose-500`})]},i)})}),a&&!i&&(0,O.jsx)(`p`,{className:`text-sm font-medium text-amber-600 mb-2`,children:`You skipped this question.`}),e.explanation&&(0,O.jsxs)(`div`,{className:`mt-4 p-4 bg-indigo-50 rounded-lg text-sm text-indigo-900 border border-indigo-100 flex gap-3`,children:[(0,O.jsx)(re,{size:18,className:`text-indigo-500 flex-shrink-0 mt-0.5`}),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`span`,{className:`font-semibold block mb-1`,children:`Source Note:`}),e.explanation]})]})]})]})},t)})})]})]})})]}):(0,O.jsxs)(`div`,{className:`flex-1 flex flex-col items-center justify-center p-8 text-center`,children:[(0,O.jsx)(`div`,{className:`w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full flex items-center justify-center mb-6 shadow-sm`,children:(0,O.jsx)(ce,{size:48})}),(0,O.jsx)(`h2`,{className:`text-2xl font-bold text-slate-800 mb-2`,children:`Select a Topic to Begin`}),(0,O.jsx)(`p`,{className:`text-slate-500 max-w-md`,children:`Choose a category from the sidebar to test your knowledge on various IT and programming competencies.`})]})})]})}(0,v.createRoot)(document.getElementById(`root`)).render((0,O.jsx)(_.StrictMode,{children:(0,O.jsx)(A,{})}));