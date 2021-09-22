var e="top",t="bottom",n="right",r="left",o=[e,t,n,r],i=o.reduce((function(e,t){return e.concat([t+"-start",t+"-end"])}),[]),a=[].concat(o,["auto"]).reduce((function(e,t){return e.concat([t,t+"-start",t+"-end"])}),[]),s=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function f(e){return e?(e.nodeName||"").toLowerCase():null}function c(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function p(e){return e instanceof c(e).Element||e instanceof Element}function u(e){return e instanceof c(e).HTMLElement||e instanceof HTMLElement}function l(e){return"undefined"!=typeof ShadowRoot&&(e instanceof c(e).ShadowRoot||e instanceof ShadowRoot)}var d={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];u(o)&&f(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});u(r)&&f(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]};function h(e){return e.split("-")[0]}var m=Math.round;function v(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;if(u(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(r=n.width/a||1),i>0&&(o=n.height/i||1)}return{width:m(n.width/r),height:m(n.height/o),top:m(n.top/o),right:m(n.right/r),bottom:m(n.bottom/o),left:m(n.left/r),x:m(n.left/r),y:m(n.top/o)}}function g(e){var t=v(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function y(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&l(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function b(e){return c(e).getComputedStyle(e)}function w(e){return["table","td","th"].indexOf(f(e))>=0}function x(e){return((p(e)?e.ownerDocument:e.document)||window.document).documentElement}function O(e){return"html"===f(e)?e:e.assignedSlot||e.parentNode||(l(e)?e.host:null)||x(e)}function j(e){return u(e)&&"fixed"!==b(e).position?e.offsetParent:null}function E(e){for(var t=c(e),n=j(e);n&&w(n)&&"static"===b(n).position;)n=j(n);return n&&("html"===f(n)||"body"===f(n)&&"static"===b(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&u(e)&&"fixed"===b(e).position)return null;for(var n=O(e);u(n)&&["html","body"].indexOf(f(n))<0;){var r=b(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function D(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}var k=Math.max,L=Math.min,M=Math.round;function P(e,t,n){return k(e,L(t,n))}function W(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function A(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function B(e){return e.split("-")[1]}var H={top:"auto",right:"auto",bottom:"auto",left:"auto"};function R(o){var i,a=o.popper,s=o.popperRect,f=o.placement,p=o.variation,u=o.offsets,l=o.position,d=o.gpuAcceleration,h=o.adaptive,m=o.roundOffsets,v=!0===m?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:M(M(t*r)/r)||0,y:M(M(n*r)/r)||0}}(u):"function"==typeof m?m(u):u,g=v.x,y=void 0===g?0:g,w=v.y,O=void 0===w?0:w,j=u.hasOwnProperty("x"),D=u.hasOwnProperty("y"),k=r,L=e,P=window;if(h){var W=E(a),A="clientHeight",B="clientWidth";W===c(a)&&"static"!==b(W=x(a)).position&&"absolute"===l&&(A="scrollHeight",B="scrollWidth"),W=W,f!==e&&(f!==r&&f!==n||"end"!==p)||(L=t,O-=W[A]-s.height,O*=d?1:-1),f!==r&&(f!==e&&f!==t||"end"!==p)||(k=n,y-=W[B]-s.width,y*=d?1:-1)}var R,T=Object.assign({position:l},h&&H);return d?Object.assign({},T,((R={})[L]=D?"0":"",R[k]=j?"0":"",R.transform=(P.devicePixelRatio||1)<=1?"translate("+y+"px, "+O+"px)":"translate3d("+y+"px, "+O+"px, 0)",R)):Object.assign({},T,((i={})[L]=D?O+"px":"",i[k]=j?y+"px":"",i.transform="",i))}var T={passive:!0};var S={left:"right",right:"left",bottom:"top",top:"bottom"};function C(e){return e.replace(/left|right|bottom|top/g,(function(e){return S[e]}))}var q={start:"end",end:"start"};function N(e){return e.replace(/start|end/g,(function(e){return q[e]}))}function V(e){var t=c(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function I(e){return v(x(e)).left+V(e).scrollLeft}function U(e){var t=b(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function z(e){return["html","body","#document"].indexOf(f(e))>=0?e.ownerDocument.body:u(e)&&U(e)?e:z(O(e))}function _(e,t){var n;void 0===t&&(t=[]);var r=z(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=c(r),a=o?[i].concat(i.visualViewport||[],U(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(_(O(a)))}function F(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function X(e,t){return"viewport"===t?F(function(e){var t=c(e),n=x(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,s=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,s=r.offsetTop)),{width:o,height:i,x:a+I(e),y:s}}(e)):u(t)?function(e){var t=v(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):F(function(e){var t,n=x(e),r=V(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=k(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=k(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+I(e),f=-r.scrollTop;return"rtl"===b(o||n).direction&&(s+=k(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:f}}(x(e)))}function Y(e,t,n){var r="clippingParents"===t?function(e){var t=_(O(e)),n=["absolute","fixed"].indexOf(b(e).position)>=0&&u(e)?E(e):e;return p(n)?t.filter((function(e){return p(e)&&y(e,n)&&"body"!==f(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=X(e,n);return t.top=k(r.top,t.top),t.right=L(r.right,t.right),t.bottom=L(r.bottom,t.bottom),t.left=k(r.left,t.left),t}),X(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function G(o){var i,a=o.reference,s=o.element,f=o.placement,c=f?h(f):null,p=f?B(f):null,u=a.x+a.width/2-s.width/2,l=a.y+a.height/2-s.height/2;switch(c){case e:i={x:u,y:a.y-s.height};break;case t:i={x:u,y:a.y+a.height};break;case n:i={x:a.x+a.width,y:l};break;case r:i={x:a.x-s.width,y:l};break;default:i={x:a.x,y:a.y}}var d=c?D(c):null;if(null!=d){var m="y"===d?"height":"width";switch(p){case"start":i[d]=i[d]-(a[m]/2-s[m]/2);break;case"end":i[d]=i[d]+(a[m]/2-s[m]/2)}}return i}function J(r,i){void 0===i&&(i={});var a=i,s=a.placement,f=void 0===s?r.placement:s,c=a.boundary,u=void 0===c?"clippingParents":c,l=a.rootBoundary,d=void 0===l?"viewport":l,h=a.elementContext,m=void 0===h?"popper":h,g=a.altBoundary,y=void 0!==g&&g,b=a.padding,w=void 0===b?0:b,O=W("number"!=typeof w?w:A(w,o)),j="popper"===m?"reference":"popper",E=r.rects.popper,D=r.elements[y?j:m],k=Y(p(D)?D:D.contextElement||x(r.elements.popper),u,d),L=v(r.elements.reference),M=G({reference:L,element:E,strategy:"absolute",placement:f}),P=F(Object.assign({},E,M)),B="popper"===m?P:L,H={top:k.top-B.top+O.top,bottom:B.bottom-k.bottom+O.bottom,left:k.left-B.left+O.left,right:B.right-k.right+O.right},R=r.modifiersData.offset;if("popper"===m&&R){var T=R[f];Object.keys(H).forEach((function(r){var o=[n,t].indexOf(r)>=0?1:-1,i=[e,t].indexOf(r)>=0?"y":"x";H[r]+=T[i]*o}))}return H}function K(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Q(o){return[e,n,t,r].some((function(e){return o[e]>=0}))}function Z(e,t,n){void 0===n&&(n=!1);var r,o,i=u(t),a=u(t)&&function(e){var t=e.getBoundingClientRect(),n=t.width/e.offsetWidth||1,r=t.height/e.offsetHeight||1;return 1!==n||1!==r}(t),s=x(t),p=v(e,a),l={scrollLeft:0,scrollTop:0},d={x:0,y:0};return(i||!i&&!n)&&(("body"!==f(t)||U(s))&&(l=(r=t)!==c(r)&&u(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:V(r)),u(t)?((d=v(t,!0)).x+=t.clientLeft,d.y+=t.clientTop):s&&(d.x=I(s))),{x:p.left+l.scrollLeft-d.x,y:p.top+l.scrollTop-d.y,width:p.width,height:p.height}}function $(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var ee={placement:"bottom",modifiers:[],strategy:"absolute"};function te(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function ne(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?ee:o;return function(e,t,n){void 0===n&&(n=i);var o,a,f={placement:"bottom",orderedModifiers:[],options:Object.assign({},ee,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],u=!1,l={state:f,setOptions:function(n){var o="function"==typeof n?n(f.options):n;d(),f.options=Object.assign({},i,f.options,o),f.scrollParents={reference:p(e)?_(e):e.contextElement?_(e.contextElement):[],popper:_(t)};var a,u,h=function(e){var t=$(e);return s.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((a=[].concat(r,f.options.modifiers),u=a.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(u).map((function(e){return u[e]}))));return f.orderedModifiers=h.filter((function(e){return e.enabled})),f.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:f,name:t,instance:l,options:r}),a=function(){};c.push(i||a)}})),l.update()},forceUpdate:function(){if(!u){var e=f.elements,t=e.reference,n=e.popper;if(te(t,n)){f.rects={reference:Z(t,E(n),"fixed"===f.options.strategy),popper:g(n)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach((function(e){return f.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<f.orderedModifiers.length;r++)if(!0!==f.reset){var o=f.orderedModifiers[r],i=o.fn,a=o.options,s=void 0===a?{}:a,c=o.name;"function"==typeof i&&(f=i({state:f,options:s,name:c,instance:l})||f)}else f.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){l.forceUpdate(),e(f)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){d(),u=!0}};if(!te(e,t))return l;function d(){c.forEach((function(e){return e()})),c=[]}return l.setOptions(n).then((function(e){!u&&n.onFirstUpdate&&n.onFirstUpdate(e)})),l}}var re=ne({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,f=c(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&p.forEach((function(e){e.addEventListener("scroll",n.update,T)})),s&&f.addEventListener("resize",n.update,T),function(){i&&p.forEach((function(e){e.removeEventListener("scroll",n.update,T)})),s&&f.removeEventListener("resize",n.update,T)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=G({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:h(t.placement),variation:B(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,R(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,R(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},d,{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var o=t.state,i=t.options,s=t.name,f=i.offset,c=void 0===f?[0,0]:f,p=a.reduce((function(t,i){return t[i]=function(t,o,i){var a=h(t),s=[r,e].indexOf(a)>=0?-1:1,f="function"==typeof i?i(Object.assign({},o,{placement:t})):i,c=f[0],p=f[1];return c=c||0,p=(p||0)*s,[r,n].indexOf(a)>=0?{x:p,y:c}:{x:c,y:p}}(i,o.rects,c),t}),{}),u=p[o.placement],l=u.x,d=u.y;null!=o.modifiersData.popperOffsets&&(o.modifiersData.popperOffsets.x+=l,o.modifiersData.popperOffsets.y+=d),o.modifiersData[s]=p}},{name:"flip",enabled:!0,phase:"main",fn:function(s){var f=s.state,c=s.options,p=s.name;if(!f.modifiersData[p]._skip){for(var u=c.mainAxis,l=void 0===u||u,d=c.altAxis,m=void 0===d||d,v=c.fallbackPlacements,g=c.padding,y=c.boundary,b=c.rootBoundary,w=c.altBoundary,x=c.flipVariations,O=void 0===x||x,j=c.allowedAutoPlacements,E=f.options.placement,D=h(E),k=v||(D===E||!O?[C(E)]:function(e){if("auto"===h(e))return[];var t=C(e);return[N(e),t,N(t)]}(E)),L=[E].concat(k).reduce((function(e,t){return e.concat("auto"===h(t)?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,s=n.boundary,f=n.rootBoundary,c=n.padding,p=n.flipVariations,u=n.allowedAutoPlacements,l=void 0===u?a:u,d=B(r),m=d?p?i:i.filter((function(e){return B(e)===d})):o,v=m.filter((function(e){return l.indexOf(e)>=0}));0===v.length&&(v=m);var g=v.reduce((function(t,n){return t[n]=J(e,{placement:n,boundary:s,rootBoundary:f,padding:c})[h(n)],t}),{});return Object.keys(g).sort((function(e,t){return g[e]-g[t]}))}(f,{placement:t,boundary:y,rootBoundary:b,padding:g,flipVariations:O,allowedAutoPlacements:j}):t)}),[]),M=f.rects.reference,P=f.rects.popper,W=new Map,A=!0,H=L[0],R=0;R<L.length;R++){var T=L[R],S=h(T),q="start"===B(T),V=[e,t].indexOf(S)>=0,I=V?"width":"height",U=J(f,{placement:T,boundary:y,rootBoundary:b,altBoundary:w,padding:g}),z=V?q?n:r:q?t:e;M[I]>P[I]&&(z=C(z));var _=C(z),F=[];if(l&&F.push(U[S]<=0),m&&F.push(U[z]<=0,U[_]<=0),F.every((function(e){return e}))){H=T,A=!1;break}W.set(T,F)}if(A)for(var X=function(e){var t=L.find((function(t){var n=W.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return H=t,"break"},Y=O?3:1;Y>0;Y--){if("break"===X(Y))break}f.placement!==H&&(f.modifiersData[p]._skip=!0,f.placement=H,f.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(o){var i=o.state,a=o.options,s=o.name,f=a.mainAxis,c=void 0===f||f,p=a.altAxis,u=void 0!==p&&p,l=a.boundary,d=a.rootBoundary,m=a.altBoundary,v=a.padding,y=a.tether,b=void 0===y||y,w=a.tetherOffset,x=void 0===w?0:w,O=J(i,{boundary:l,rootBoundary:d,padding:v,altBoundary:m}),j=h(i.placement),M=B(i.placement),W=!M,A=D(j),H="x"===A?"y":"x",R=i.modifiersData.popperOffsets,T=i.rects.reference,S=i.rects.popper,C="function"==typeof x?x(Object.assign({},i.rects,{placement:i.placement})):x,q={x:0,y:0};if(R){if(c||u){var N="y"===A?e:r,V="y"===A?t:n,I="y"===A?"height":"width",U=R[A],z=R[A]+O[N],_=R[A]-O[V],F=b?-S[I]/2:0,X="start"===M?T[I]:S[I],Y="start"===M?-S[I]:-T[I],G=i.elements.arrow,K=b&&G?g(G):{width:0,height:0},Q=i.modifiersData["arrow#persistent"]?i.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Z=Q[N],$=Q[V],ee=P(0,T[I],K[I]),te=W?T[I]/2-F-ee-Z-C:X-ee-Z-C,ne=W?-T[I]/2+F+ee+$+C:Y+ee+$+C,re=i.elements.arrow&&E(i.elements.arrow),oe=re?"y"===A?re.clientTop||0:re.clientLeft||0:0,ie=i.modifiersData.offset?i.modifiersData.offset[i.placement][A]:0,ae=R[A]+te-ie-oe,se=R[A]+ne-ie;if(c){var fe=P(b?L(z,ae):z,U,b?k(_,se):_);R[A]=fe,q[A]=fe-U}if(u){var ce="x"===A?e:r,pe="x"===A?t:n,ue=R[H],le=ue+O[ce],de=ue-O[pe],he=P(b?L(le,ae):le,ue,b?k(de,se):de);R[H]=he,q[H]=he-ue}}i.modifiersData[s]=q}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(i){var a,s=i.state,f=i.name,c=i.options,p=s.elements.arrow,u=s.modifiersData.popperOffsets,l=h(s.placement),d=D(l),m=[r,n].indexOf(l)>=0?"height":"width";if(p&&u){var v=function(e,t){return W("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:A(e,o))}(c.padding,s),y=g(p),b="y"===d?e:r,w="y"===d?t:n,x=s.rects.reference[m]+s.rects.reference[d]-u[d]-s.rects.popper[m],O=u[d]-s.rects.reference[d],j=E(p),k=j?"y"===d?j.clientHeight||0:j.clientWidth||0:0,L=x/2-O/2,M=v[b],B=k-y[m]-v[w],H=k/2-y[m]/2+L,R=P(M,H,B),T=d;s.modifiersData[f]=((a={})[T]=R,a.centerOffset=R-H,a)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&y(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=J(t,{elementContext:"reference"}),s=J(t,{altBoundary:!0}),f=K(a,r),c=K(s,o,i),p=Q(f),u=Q(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":u})}}]});export{re as c};