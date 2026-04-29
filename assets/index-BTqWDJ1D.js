(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yo="169",$i={ROTATE:0,DOLLY:1,PAN:2},Vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wh=0,Zo=1,Eh=2,_c=1,Th=2,An=3,Yn=0,Xe=1,We=2,Pn=0,qi=1,Ca=2,Qo=3,Jo=4,Ah=5,ai=100,Ch=101,Rh=102,Ph=103,Lh=104,Dh=200,Ih=201,Nh=202,Uh=203,Ra=204,Pa=205,Oh=206,Fh=207,zh=208,Bh=209,kh=210,Hh=211,Gh=212,Vh=213,Wh=214,La=0,Da=1,Ia=2,Zi=3,Na=4,Ua=5,Oa=6,Fa=7,xc=0,Xh=1,$h=2,qn=0,yc=1,Mc=2,Sc=3,Mo=4,qh=5,bc=6,wc=7,Ec=300,Qi=301,Ji=302,za=303,Ba=304,Rr=306,ka=1e3,ci=1001,Ha=1002,nn=1003,Yh=1004,Ps=1005,Qe=1006,zr=1007,hi=1008,Un=1009,Tc=1010,Ac=1011,Ms=1012,So=1013,fi=1014,Cn=1015,Ln=1016,bo=1017,wo=1018,ts=1020,Cc=35902,Rc=1021,Pc=1022,dn=1023,Lc=1024,Dc=1025,Yi=1026,es=1027,Ic=1028,Eo=1029,Nc=1030,To=1031,Ao=1033,ur=33776,fr=33777,pr=33778,mr=33779,Ga=35840,Va=35841,Wa=35842,Xa=35843,$a=36196,qa=37492,Ya=37496,ja=37808,Ka=37809,Za=37810,Qa=37811,Ja=37812,to=37813,eo=37814,no=37815,io=37816,so=37817,ro=37818,ao=37819,oo=37820,lo=37821,gr=36492,co=36494,ho=36495,Uc=36283,uo=36284,fo=36285,po=36286,jh=3200,Kh=3201,Oc=0,Zh=1,$n="",cn="srgb",jn="srgb-linear",Co="display-p3",Pr="display-p3-linear",Mr="linear",oe="srgb",Sr="rec709",br="p3",wi=7680,tl=519,Qh=512,Jh=513,td=514,Fc=515,ed=516,nd=517,id=518,sd=519,mo=35044,el="300 es",Rn=2e3,wr=2001;class _i{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nl=1234567;const ji=Math.PI/180,Ss=180/Math.PI;function Dn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function ge(i,t,e){return Math.max(t,Math.min(e,i))}function Ro(i,t){return(i%t+t)%t}function rd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ad(i,t,e){return i!==t?(e-i)/(t-i):0}function xs(i,t,e){return(1-e)*i+e*t}function od(i,t,e,n){return xs(i,t,1-Math.exp(-e*n))}function ld(i,t=1){return t-Math.abs(Ro(i,t*2)-t)}function cd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function hd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function dd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ud(i,t){return i+Math.random()*(t-i)}function fd(i){return i*(.5-Math.random())}function pd(i){i!==void 0&&(nl=i);let t=nl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function md(i){return i*ji}function gd(i){return i*Ss}function vd(i){return(i&i-1)===0&&i!==0}function _d(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function xd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yd(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Jt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const zc={DEG2RAD:ji,RAD2DEG:Ss,generateUUID:Dn,clamp:ge,euclideanModulo:Ro,mapLinear:rd,inverseLerp:ad,lerp:xs,damp:od,pingpong:ld,smoothstep:cd,smootherstep:hd,randInt:dd,randFloat:ud,randFloatSpread:fd,seededRandom:pd,degToRad:md,radToDeg:gd,isPowerOfTwo:vd,ceilPowerOfTwo:_d,floorPowerOfTwo:xd,setQuaternionFromProperEuler:yd,normalize:Jt,denormalize:hn};class ut{constructor(t=0,e=0){ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,s,r,a,o,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],w=s[1],M=s[4],b=s[7],P=s[2],R=s[5],T=s[8];return r[0]=a*_+o*w+l*P,r[3]=a*m+o*M+l*R,r[6]=a*p+o*b+l*T,r[1]=c*_+h*w+d*P,r[4]=c*m+h*M+d*R,r[7]=c*p+h*b+d*T,r[2]=u*_+f*w+g*P,r[5]=u*m+f*M+g*R,r[8]=u*p+f*b+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=u*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Br.makeScale(t,e)),this}rotate(t){return this.premultiply(Br.makeRotation(-t)),this}translate(t,e){return this.premultiply(Br.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Br=new Ot;function Bc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Md(){const i=Er("canvas");return i.style.display="block",i}const il={};function vr(i){i in il||(il[i]=!0,console.warn(i))}function Sd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function bd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function wd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const sl=new Ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),rl=new Ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),os={[jn]:{transfer:Mr,primaries:Sr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[cn]:{transfer:oe,primaries:Sr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Pr]:{transfer:Mr,primaries:br,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(rl),fromReference:i=>i.applyMatrix3(sl)},[Co]:{transfer:oe,primaries:br,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(rl),fromReference:i=>i.applyMatrix3(sl).convertLinearToSRGB()}},Ed=new Set([jn,Pr]),jt={enabled:!0,_workingColorSpace:jn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ed.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=os[t].toReference,s=os[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return os[i].primaries},getTransfer:function(i){return i===$n?Mr:os[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(os[t].luminanceCoefficients)}};function Ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function kr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ei;class Td{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ei===void 0&&(Ei=Er("canvas")),Ei.width=t.width,Ei.height=t.height;const n=Ei.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ei}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Er("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ki(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ki(e[n]/255)*255):e[n]=Ki(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ad=0;class kc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Dn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Hr(s[a].image)):r.push(Hr(s[a]))}else r=Hr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Hr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Td.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cd=0;class Be extends _i{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,n=ci,s=ci,r=Qe,a=hi,o=dn,l=Un,c=Be.DEFAULT_ANISOTROPY,h=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Dn(),this.name="",this.source=new kc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ec)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ka:t.x=t.x-Math.floor(t.x);break;case ci:t.x=t.x<0?0:1;break;case Ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ka:t.y=t.y-Math.floor(t.y);break;case ci:t.y=t.y<0?0:1;break;case Ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=Ec;Be.DEFAULT_ANISOTROPY=1;class Wt{constructor(t=0,e=0,n=0,s=1){Wt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,b=(f+1)/2,P=(p+1)/2,R=(h+u)/4,T=(d+_)/4,A=(g+m)/4;return M>b&&M>P?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=R/n,r=T/n):b>P?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=R/s,r=A/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=T/r,s=A/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-_)/w,this.z=(u-h)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rd extends _i{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Wt(0,0,t,e),this.scissorTest=!1,this.viewport=new Wt(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Be(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new kc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class un extends Rd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Hc extends Be{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pd extends Be{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3];const u=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==u||c!==f||h!==g){let m=1-o;const p=l*u+c*f+h*g+d*_,w=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const P=Math.sqrt(M),R=Math.atan2(P,p*w);m=Math.sin(m*R)/P,o=Math.sin(o*R)/P}const b=o*w;if(l=l*m+u*b,c=c*m+f*b,h=h*m+g*b,d=d*m+_*b,m===1-o){const P=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=P,c*=P,h*=P,d*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(t=0,e=0,n=0){E.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(al.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(al.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Gr.copy(this).projectOnVector(t),this.sub(Gr)}reflect(t){return this.sub(Gr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gr=new E,al=new pi;class Kn{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,an):an.fromBufferAttribute(r,a),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ls.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ls.copy(n.boundingBox)),Ls.applyMatrix4(t.matrixWorld),this.union(Ls)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ls),Ds.subVectors(this.max,ls),Ti.subVectors(t.a,ls),Ai.subVectors(t.b,ls),Ci.subVectors(t.c,ls),zn.subVectors(Ai,Ti),Bn.subVectors(Ci,Ai),Qn.subVectors(Ti,Ci);let e=[0,-zn.z,zn.y,0,-Bn.z,Bn.y,0,-Qn.z,Qn.y,zn.z,0,-zn.x,Bn.z,0,-Bn.x,Qn.z,0,-Qn.x,-zn.y,zn.x,0,-Bn.y,Bn.x,0,-Qn.y,Qn.x,0];return!Vr(e,Ti,Ai,Ci,Ds)||(e=[1,0,0,0,1,0,0,0,1],!Vr(e,Ti,Ai,Ci,Ds))?!1:(Is.crossVectors(zn,Bn),e=[Is.x,Is.y,Is.z],Vr(e,Ti,Ai,Ci,Ds))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Sn=[new E,new E,new E,new E,new E,new E,new E,new E],an=new E,Ls=new Kn,Ti=new E,Ai=new E,Ci=new E,zn=new E,Bn=new E,Qn=new E,ls=new E,Ds=new E,Is=new E,Jn=new E;function Vr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Jn.fromArray(i,r);const o=s.x*Math.abs(Jn.x)+s.y*Math.abs(Jn.y)+s.z*Math.abs(Jn.z),l=t.dot(Jn),c=e.dot(Jn),h=n.dot(Jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ld=new Kn,cs=new E,Wr=new E;class ss{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ld.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cs.subVectors(t,this.center);const e=cs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(cs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cs.copy(t.center).add(Wr)),this.expandByPoint(cs.copy(t.center).sub(Wr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new E,Xr=new E,Ns=new E,kn=new E,$r=new E,Us=new E,qr=new E;class Po{constructor(t=new E,e=new E(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bn.copy(this.origin).addScaledVector(this.direction,e),bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Xr.copy(t).add(e).multiplyScalar(.5),Ns.copy(e).sub(t).normalize(),kn.copy(this.origin).sub(Xr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ns),o=kn.dot(this.direction),l=-kn.dot(Ns),c=kn.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Xr).addScaledVector(Ns,u),f}intersectSphere(t,e){bn.subVectors(t.center,this.origin);const n=bn.dot(this.direction),s=bn.dot(bn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,bn)!==null}intersectTriangle(t,e,n,s,r){$r.subVectors(e,t),Us.subVectors(n,t),qr.crossVectors($r,Us);let a=this.direction.dot(qr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;kn.subVectors(this.origin,t);const l=o*this.direction.dot(Us.crossVectors(kn,Us));if(l<0)return null;const c=o*this.direction.dot($r.cross(kn));if(c<0||l+c>a)return null;const h=-o*kn.dot(qr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,g,_,m){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,_,m)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ri.setFromMatrixColumn(t,0).length(),r=1/Ri.setFromMatrixColumn(t,1).length(),a=1/Ri.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,f=a*d,g=o*h,_=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-_*c,e[9]=-o*l,e[2]=_-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,g=c*h,_=c*d;e[0]=u+_*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,g=c*h,_=c*d;e[0]=u-_*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,f=a*d,g=o*h,_=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Dd,t,Id)}lookAt(t,e,n){const s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),Hn.crossVectors(n,Ke),Hn.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),Hn.crossVectors(n,Ke)),Hn.normalize(),Os.crossVectors(Ke,Hn),s[0]=Hn.x,s[4]=Os.x,s[8]=Ke.x,s[1]=Hn.y,s[5]=Os.y,s[9]=Ke.y,s[2]=Hn.z,s[6]=Os.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],w=n[3],M=n[7],b=n[11],P=n[15],R=s[0],T=s[4],A=s[8],F=s[12],v=s[1],x=s[5],L=s[9],I=s[13],z=s[2],q=s[6],G=s[10],$=s[14],H=s[3],nt=s[7],rt=s[11],pt=s[15];return r[0]=a*R+o*v+l*z+c*H,r[4]=a*T+o*x+l*q+c*nt,r[8]=a*A+o*L+l*G+c*rt,r[12]=a*F+o*I+l*$+c*pt,r[1]=h*R+d*v+u*z+f*H,r[5]=h*T+d*x+u*q+f*nt,r[9]=h*A+d*L+u*G+f*rt,r[13]=h*F+d*I+u*$+f*pt,r[2]=g*R+_*v+m*z+p*H,r[6]=g*T+_*x+m*q+p*nt,r[10]=g*A+_*L+m*G+p*rt,r[14]=g*F+_*I+m*$+p*pt,r[3]=w*R+M*v+b*z+P*H,r[7]=w*T+M*x+b*q+P*nt,r[11]=w*A+M*L+b*G+P*rt,r[15]=w*F+M*I+b*$+P*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*d-s*c*d-r*o*u+n*c*u+s*o*f-n*l*f)+_*(+e*l*f-e*c*u+r*a*u-s*a*f+s*c*h-r*l*h)+m*(+e*c*d-e*o*f-r*a*d+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-e*l*d+e*o*u+s*a*d-n*a*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],w=d*m*c-_*u*c+_*l*f-o*m*f-d*l*p+o*u*p,M=g*u*c-h*m*c-g*l*f+a*m*f+h*l*p-a*u*p,b=h*_*c-g*d*c+g*o*f-a*_*f-h*o*p+a*d*p,P=g*d*l-h*_*l-g*o*u+a*_*u+h*o*m-a*d*m,R=e*w+n*M+s*b+r*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return t[0]=w*T,t[1]=(_*u*r-d*m*r-_*s*f+n*m*f+d*s*p-n*u*p)*T,t[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*p+n*l*p)*T,t[3]=(d*l*r-o*u*r-d*s*c+n*u*c+o*s*f-n*l*f)*T,t[4]=M*T,t[5]=(h*m*r-g*u*r+g*s*f-e*m*f-h*s*p+e*u*p)*T,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*T,t[7]=(a*u*r-h*l*r+h*s*c-e*u*c-a*s*f+e*l*f)*T,t[8]=b*T,t[9]=(g*d*r-h*_*r-g*n*f+e*_*f+h*n*p-e*d*p)*T,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*p+e*o*p)*T,t[11]=(h*o*r-a*d*r-h*n*c+e*d*c+a*n*f-e*o*f)*T,t[12]=P*T,t[13]=(h*_*s-g*d*s+g*n*u-e*_*u-h*n*m+e*d*m)*T,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*m-e*o*m)*T,t[15]=(a*d*s-h*o*s+h*n*l-e*d*l-a*n*u+e*o*u)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,_=a*h,m=a*d,p=o*d,w=l*c,M=l*h,b=l*d,P=n.x,R=n.y,T=n.z;return s[0]=(1-(_+p))*P,s[1]=(f+b)*P,s[2]=(g-M)*P,s[3]=0,s[4]=(f-b)*R,s[5]=(1-(u+p))*R,s[6]=(m+w)*R,s[7]=0,s[8]=(g+M)*T,s[9]=(m-w)*T,s[10]=(1-(u+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ri.set(s[0],s[1],s[2]).length();const a=Ri.set(s[4],s[5],s[6]).length(),o=Ri.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],on.copy(this);const c=1/r,h=1/a,d=1/o;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=d,on.elements[9]*=d,on.elements[10]*=d,e.setFromRotationMatrix(on),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Rn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s);let f,g;if(o===Rn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===wr)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Rn){const l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(a-r),u=(e+t)*c,f=(n+s)*h;let g,_;if(o===Rn)g=(a+r)*d,_=-2*d;else if(o===wr)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ri=new E,on=new re,Dd=new E(0,0,0),Id=new E(1,1,1),Hn=new E,Os=new E,Ke=new E,ol=new re,ll=new pi;class xn{constructor(t=0,e=0,n=0,s=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ol.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ol,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ll.setFromEuler(this),this.setFromQuaternion(ll,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class Gc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Nd=0;const cl=new E,Pi=new pi,wn=new re,Fs=new E,hs=new E,Ud=new E,Od=new pi,hl=new E(1,0,0),dl=new E(0,1,0),ul=new E(0,0,1),fl={type:"added"},Fd={type:"removed"},Li={type:"childadded",child:null},Yr={type:"childremoved",child:null};class ve extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const t=new E,e=new xn,n=new pi,s=new E(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new Ot}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.premultiply(Pi),this}rotateX(t){return this.rotateOnAxis(hl,t)}rotateY(t){return this.rotateOnAxis(dl,t)}rotateZ(t){return this.rotateOnAxis(ul,t)}translateOnAxis(t,e){return cl.copy(t).applyQuaternion(this.quaternion),this.position.add(cl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hl,t)}translateY(t){return this.translateOnAxis(dl,t)}translateZ(t){return this.translateOnAxis(ul,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fs.copy(t):Fs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(hs,Fs,this.up):wn.lookAt(Fs,hs,this.up),this.quaternion.setFromRotationMatrix(wn),s&&(wn.extractRotation(s.matrixWorld),Pi.setFromRotationMatrix(wn),this.quaternion.premultiply(Pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fl),Li.child=t,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fd),Yr.child=t,this.dispatchEvent(Yr),Yr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fl),Li.child=t,this.dispatchEvent(Li),Li.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,t,Ud),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,Od,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ve.DEFAULT_UP=new E(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new E,En=new E,jr=new E,Tn=new E,Di=new E,Ii=new E,pl=new E,Kr=new E,Zr=new E,Qr=new E,Jr=new Wt,ta=new Wt,ea=new Wt;class Je{constructor(t=new E,e=new E,n=new E){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ln.subVectors(t,e),s.cross(ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ln.subVectors(s,e),En.subVectors(n,e),jr.subVectors(t,e);const a=ln.dot(ln),o=ln.dot(En),l=ln.dot(jr),c=En.dot(En),h=En.dot(jr),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Tn.x),l.addScaledVector(a,Tn.y),l.addScaledVector(o,Tn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Jr.setScalar(0),ta.setScalar(0),ea.setScalar(0),Jr.fromBufferAttribute(t,e),ta.fromBufferAttribute(t,n),ea.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Jr,r.x),a.addScaledVector(ta,r.y),a.addScaledVector(ea,r.z),a}static isFrontFacing(t,e,n,s){return ln.subVectors(n,e),En.subVectors(t,e),ln.cross(En).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),En.subVectors(this.a,this.b),ln.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Je.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Di.subVectors(s,n),Ii.subVectors(r,n),Kr.subVectors(t,n);const l=Di.dot(Kr),c=Ii.dot(Kr);if(l<=0&&c<=0)return e.copy(n);Zr.subVectors(t,s);const h=Di.dot(Zr),d=Ii.dot(Zr);if(h>=0&&d<=h)return e.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Di,a);Qr.subVectors(t,r);const f=Di.dot(Qr),g=Ii.dot(Qr);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ii,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return pl.subVectors(r,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(pl,o);const p=1/(m+_+u);return a=_*p,o=u*p,e.copy(n).addScaledVector(Di,a).addScaledVector(Ii,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Vc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},zs={h:0,s:0,l:0};function na(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class lt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=Ro(t,1),e=ge(e,0,1),n=ge(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=na(a,r,t+1/3),this.g=na(a,r,t),this.b=na(a,r,t-1/3)}return jt.toWorkingColorSpace(this,s),this}setStyle(t,e=cn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=cn){const n=Vc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}copyLinearToSRGB(t){return this.r=kr(t.r),this.g=kr(t.g),this.b=kr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=cn){return jt.fromWorkingColorSpace(De.copy(this),t),Math.round(ge(De.r*255,0,255))*65536+Math.round(ge(De.g*255,0,255))*256+Math.round(ge(De.b*255,0,255))}getHexString(t=cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(De.copy(this),e);const n=De.r,s=De.g,r=De.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=cn){jt.fromWorkingColorSpace(De.copy(this),t);const e=De.r,n=De.g,s=De.b;return t!==cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Gn),this.setHSL(Gn.h+t,Gn.s+e,Gn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Gn),t.getHSL(zs);const n=xs(Gn.h,zs.h,e),s=xs(Gn.s,zs.s,e),r=xs(Gn.l,zs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new lt;lt.NAMES=Vc;let zd=0;class xi extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=qi,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ra,this.blendDst=Pa,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ra&&(n.blendSrc=this.blendSrc),this.blendDst!==Pa&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ye extends xi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new E,Bs=new ut;class $e{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=mo,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Bs.fromBufferAttribute(this,e),Bs.applyMatrix3(t),this.setXY(e,Bs.x,Bs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==mo&&(t.usage=this.usage),t}}class Wc extends $e{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Xc extends $e{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ie extends $e{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Bd=0;const en=new re,ia=new ve,Ni=new E,Ze=new Kn,ds=new Kn,Ee=new E;class se extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bc(t)?Xc:Wc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return ia.lookAt(t),ia.updateMatrix(),this.applyMatrix4(ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ie(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(t){const n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Ee.addVectors(Ze.min,ds.min),Ze.expandByPoint(Ee),Ee.addVectors(Ze.max,ds.max),Ze.expandByPoint(Ee)):(Ze.expandByPoint(ds.min),Ze.expandByPoint(ds.max))}Ze.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ee.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ee));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ee.fromBufferAttribute(o,c),l&&(Ni.fromBufferAttribute(t,c),Ee.add(Ni)),s=Math.max(s,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let A=0;A<n.count;A++)o[A]=new E,l[A]=new E;const c=new E,h=new E,d=new E,u=new ut,f=new ut,g=new ut,_=new E,m=new E;function p(A,F,v){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,F),d.fromBufferAttribute(n,v),u.fromBufferAttribute(r,A),f.fromBufferAttribute(r,F),g.fromBufferAttribute(r,v),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const x=1/(f.x*g.y-g.x*f.y);isFinite(x)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(x),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(x),o[A].add(_),o[F].add(_),o[v].add(_),l[A].add(m),l[F].add(m),l[v].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let A=0,F=w.length;A<F;++A){const v=w[A],x=v.start,L=v.count;for(let I=x,z=x+L;I<z;I+=3)p(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const M=new E,b=new E,P=new E,R=new E;function T(A){P.fromBufferAttribute(s,A),R.copy(P);const F=o[A];M.copy(F),M.sub(P.multiplyScalar(P.dot(F))).normalize(),b.crossVectors(R,F);const x=b.dot(l[A])<0?-1:1;a.setXYZW(A,M.x,M.y,M.z,x)}for(let A=0,F=w.length;A<F;++A){const v=w[A],x=v.start,L=v.count;for(let I=x,z=x+L;I<z;I+=3)T(t.getX(I+0)),T(t.getX(I+1)),T(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new E,r=new E,a=new E,o=new E,l=new E,c=new E,h=new E,d=new E;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new $e(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new se,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ml=new re,ti=new Po,ks=new ss,gl=new E,Hs=new E,Gs=new E,Vs=new E,sa=new E,Ws=new E,vl=new E,Xs=new E;class bt extends ve{constructor(t=new se,e=new ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Ws.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(sa.fromBufferAttribute(d,t),a?Ws.addScaledVector(sa,h):Ws.addScaledVector(sa.sub(e),h))}e.add(Ws)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(r),ti.copy(t.ray).recast(t.near),!(ks.containsPoint(ti.origin)===!1&&(ti.intersectSphere(ks,gl)===null||ti.origin.distanceToSquared(gl)>(t.far-t.near)**2))&&(ml.copy(r).invert(),ti.copy(t.ray).applyMatrix4(ml),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ti)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=w,P=M;b<P;b+=3){const R=o.getX(b),T=o.getX(b+1),A=o.getX(b+2);s=$s(this,p,t,n,c,h,d,R,T,A),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=o.getX(m),M=o.getX(m+1),b=o.getX(m+2);s=$s(this,a,t,n,c,h,d,w,M,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=w,P=M;b<P;b+=3){const R=b,T=b+1,A=b+2;s=$s(this,p,t,n,c,h,d,R,T,A),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=m,M=m+1,b=m+2;s=$s(this,a,t,n,c,h,d,w,M,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function kd(i,t,e,n,s,r,a,o){let l;if(t.side===Xe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Yn,o),l===null)return null;Xs.copy(o),Xs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Xs);return c<e.near||c>e.far?null:{distance:c,point:Xs.clone(),object:i}}function $s(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Hs),i.getVertexPosition(l,Gs),i.getVertexPosition(c,Vs);const h=kd(i,t,e,n,Hs,Gs,Vs,vl);if(h){const d=new E;Je.getBarycoord(vl,Hs,Gs,Vs,d),s&&(h.uv=Je.getInterpolatedAttribute(s,o,l,c,d,new ut)),r&&(h.uv1=Je.getInterpolatedAttribute(r,o,l,c,d,new ut)),a&&(h.normal=Je.getInterpolatedAttribute(a,o,l,c,d,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new E,materialIndex:0};Je.getNormal(Hs,Gs,Vs,u.normal),h.face=u,h.barycoord=d}return h}class he extends se{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(d,2));function g(_,m,p,w,M,b,P,R,T,A,F){const v=b/T,x=P/A,L=b/2,I=P/2,z=R/2,q=T+1,G=A+1;let $=0,H=0;const nt=new E;for(let rt=0;rt<G;rt++){const pt=rt*x-I;for(let Ft=0;Ft<q;Ft++){const Ht=Ft*v-L;nt[_]=Ht*w,nt[m]=pt*M,nt[p]=z,c.push(nt.x,nt.y,nt.z),nt[_]=0,nt[m]=0,nt[p]=R>0?1:-1,h.push(nt.x,nt.y,nt.z),d.push(Ft/T),d.push(1-rt/A),$+=1}}for(let rt=0;rt<A;rt++)for(let pt=0;pt<T;pt++){const Ft=u+pt+q*rt,Ht=u+pt+q*(rt+1),Y=u+(pt+1)+q*(rt+1),J=u+(pt+1)+q*rt;l.push(Ft,Ht,J),l.push(Ht,Y,J),H+=6}o.addGroup(f,H,F),f+=H,u+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new he(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ns(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Fe(i){const t={};for(let e=0;e<i.length;e++){const n=ns(i[e]);for(const s in n)t[s]=n[s]}return t}function Hd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function $c(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const mi={clone:ns,merge:Fe};var Gd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ie extends xi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gd,this.fragmentShader=Vd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ns(t.uniforms),this.uniformsGroups=Hd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class qc extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=Rn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vn=new E,_l=new ut,xl=new ut;class Me extends qc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ji*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(ji*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z)}getViewSize(t,e){return this.getViewBounds(t,_l,xl),e.subVectors(xl,_l)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ji*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ui=-90,Oi=1;class Wd extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Me(Ui,Oi,t,e);s.layers=this.layers,this.add(s);const r=new Me(Ui,Oi,t,e);r.layers=this.layers,this.add(r);const a=new Me(Ui,Oi,t,e);a.layers=this.layers,this.add(a);const o=new Me(Ui,Oi,t,e);o.layers=this.layers,this.add(o);const l=new Me(Ui,Oi,t,e);l.layers=this.layers,this.add(l);const c=new Me(Ui,Oi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Yc extends Be{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Qi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Xd extends un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Yc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new he(5,5,5),r=new Ie({name:"CubemapFromEquirect",uniforms:ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:Pn});r.uniforms.tEquirect.value=e;const a=new bt(s,r),o=e.minFilter;return e.minFilter===hi&&(e.minFilter=Qe),new Wd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const ra=new E,$d=new E,qd=new Ot;class Xn{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ra.subVectors(n,e).cross($d.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ra),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||qd.getNormalMatrix(t),s=this.coplanarPoint(ra).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new ss,qs=new E;class Lo{constructor(t=new Xn,e=new Xn,n=new Xn,s=new Xn,r=new Xn,a=new Xn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],w=s[13],M=s[14],b=s[15];if(n[0].setComponents(l-r,u-c,m-f,b-p).normalize(),n[1].setComponents(l+r,u+c,m+f,b+p).normalize(),n[2].setComponents(l+a,u+h,m+g,b+w).normalize(),n[3].setComponents(l-a,u-h,m-g,b-w).normalize(),n[4].setComponents(l-o,u-d,m-_,b-M).normalize(),e===Rn)n[5].setComponents(l+o,u+d,m+_,b+M).normalize();else if(e===wr)n[5].setComponents(o,d,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(t){return ei.center.set(0,0,0),ei.radius=.7071067811865476,ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(qs.x=s.normal.x>0?t.max.x:t.min.x,qs.y=s.normal.y>0?t.max.y:t.min.y,qs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Yd(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class vn extends se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const w=p*u-a;for(let M=0;M<c;M++){const b=M*d-r;g.push(b,-w,0),_.push(0,0,1),m.push(M/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){const M=w+c*p,b=w+c*(p+1),P=w+1+c*(p+1),R=w+1+c*p;f.push(M,b,R),f.push(b,P,R)}this.setIndex(f),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vn(t.width,t.height,t.widthSegments,t.heightSegments)}}var jd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kd=`#ifdef USE_ALPHAHASH
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
#endif`,Zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eu=`#ifdef USE_AOMAP
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
#endif`,nu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iu=`#ifdef USE_BATCHING
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
#endif`,su=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ru=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,au=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ou=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lu=`#ifdef USE_IRIDESCENCE
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
#endif`,cu=`#ifdef USE_BUMPMAP
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
#endif`,hu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,du=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_u=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,xu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yu=`vec3 transformedNormal = objectNormal;
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
#endif`,Mu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Su=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Eu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Au=`#ifdef USE_ENVMAP
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
#endif`,Cu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ru=`#ifdef USE_ENVMAP
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
#endif`,Pu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lu=`#ifdef USE_ENVMAP
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
#endif`,Du=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Iu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ou=`#ifdef USE_GRADIENTMAP
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
}`,Fu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ku=`uniform bool receiveShadow;
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
#endif`,Hu=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,Gu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$u=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,qu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yu=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,ju=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ku=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ju=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ef=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rf=`#if defined( USE_POINTS_UV )
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
#endif`,af=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,of=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,df=`#ifdef USE_MORPHTARGETS
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
#endif`,uf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ff=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_f=`#ifdef USE_NORMALMAP
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
#endif`,xf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ef=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Af=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Df=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,If=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nf=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Uf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Of=`#ifdef USE_SKINNING
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
#endif`,Ff=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zf=`#ifdef USE_SKINNING
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
#endif`,Bf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vf=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wf=`#ifdef USE_TRANSMISSION
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
#endif`,Xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kf=`uniform sampler2D t2D;
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
}`,Zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ep=`#include <common>
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
}`,np=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ip=`#define DISTANCE
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
}`,sp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ap=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,op=`uniform float scale;
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
}`,lp=`uniform vec3 diffuse;
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
}`,cp=`#include <common>
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
}`,hp=`uniform vec3 diffuse;
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
}`,dp=`#define LAMBERT
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
}`,up=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,fp=`#define MATCAP
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
}`,pp=`#define MATCAP
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
}`,mp=`#define NORMAL
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
}`,gp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vp=`#define PHONG
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
}`,_p=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,xp=`#define STANDARD
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
}`,yp=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Mp=`#define TOON
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
}`,Sp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,bp=`uniform float size;
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
}`,wp=`uniform vec3 diffuse;
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
}`,Ep=`#include <common>
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
}`,Tp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Ap=`uniform float rotation;
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
}`,Cp=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:jd,alphahash_pars_fragment:Kd,alphamap_fragment:Zd,alphamap_pars_fragment:Qd,alphatest_fragment:Jd,alphatest_pars_fragment:tu,aomap_fragment:eu,aomap_pars_fragment:nu,batching_pars_vertex:iu,batching_vertex:su,begin_vertex:ru,beginnormal_vertex:au,bsdfs:ou,iridescence_fragment:lu,bumpmap_pars_fragment:cu,clipping_planes_fragment:hu,clipping_planes_pars_fragment:du,clipping_planes_pars_vertex:uu,clipping_planes_vertex:fu,color_fragment:pu,color_pars_fragment:mu,color_pars_vertex:gu,color_vertex:vu,common:_u,cube_uv_reflection_fragment:xu,defaultnormal_vertex:yu,displacementmap_pars_vertex:Mu,displacementmap_vertex:Su,emissivemap_fragment:bu,emissivemap_pars_fragment:wu,colorspace_fragment:Eu,colorspace_pars_fragment:Tu,envmap_fragment:Au,envmap_common_pars_fragment:Cu,envmap_pars_fragment:Ru,envmap_pars_vertex:Pu,envmap_physical_pars_fragment:Hu,envmap_vertex:Lu,fog_vertex:Du,fog_pars_vertex:Iu,fog_fragment:Nu,fog_pars_fragment:Uu,gradientmap_pars_fragment:Ou,lightmap_pars_fragment:Fu,lights_lambert_fragment:zu,lights_lambert_pars_fragment:Bu,lights_pars_begin:ku,lights_toon_fragment:Gu,lights_toon_pars_fragment:Vu,lights_phong_fragment:Wu,lights_phong_pars_fragment:Xu,lights_physical_fragment:$u,lights_physical_pars_fragment:qu,lights_fragment_begin:Yu,lights_fragment_maps:ju,lights_fragment_end:Ku,logdepthbuf_fragment:Zu,logdepthbuf_pars_fragment:Qu,logdepthbuf_pars_vertex:Ju,logdepthbuf_vertex:tf,map_fragment:ef,map_pars_fragment:nf,map_particle_fragment:sf,map_particle_pars_fragment:rf,metalnessmap_fragment:af,metalnessmap_pars_fragment:of,morphinstance_vertex:lf,morphcolor_vertex:cf,morphnormal_vertex:hf,morphtarget_pars_vertex:df,morphtarget_vertex:uf,normal_fragment_begin:ff,normal_fragment_maps:pf,normal_pars_fragment:mf,normal_pars_vertex:gf,normal_vertex:vf,normalmap_pars_fragment:_f,clearcoat_normal_fragment_begin:xf,clearcoat_normal_fragment_maps:yf,clearcoat_pars_fragment:Mf,iridescence_pars_fragment:Sf,opaque_fragment:bf,packing:wf,premultiplied_alpha_fragment:Ef,project_vertex:Tf,dithering_fragment:Af,dithering_pars_fragment:Cf,roughnessmap_fragment:Rf,roughnessmap_pars_fragment:Pf,shadowmap_pars_fragment:Lf,shadowmap_pars_vertex:Df,shadowmap_vertex:If,shadowmask_pars_fragment:Nf,skinbase_vertex:Uf,skinning_pars_vertex:Of,skinning_vertex:Ff,skinnormal_vertex:zf,specularmap_fragment:Bf,specularmap_pars_fragment:kf,tonemapping_fragment:Hf,tonemapping_pars_fragment:Gf,transmission_fragment:Vf,transmission_pars_fragment:Wf,uv_pars_fragment:Xf,uv_pars_vertex:$f,uv_vertex:qf,worldpos_vertex:Yf,background_vert:jf,background_frag:Kf,backgroundCube_vert:Zf,backgroundCube_frag:Qf,cube_vert:Jf,cube_frag:tp,depth_vert:ep,depth_frag:np,distanceRGBA_vert:ip,distanceRGBA_frag:sp,equirect_vert:rp,equirect_frag:ap,linedashed_vert:op,linedashed_frag:lp,meshbasic_vert:cp,meshbasic_frag:hp,meshlambert_vert:dp,meshlambert_frag:up,meshmatcap_vert:fp,meshmatcap_frag:pp,meshnormal_vert:mp,meshnormal_frag:gp,meshphong_vert:vp,meshphong_frag:_p,meshphysical_vert:xp,meshphysical_frag:yp,meshtoon_vert:Mp,meshtoon_frag:Sp,points_vert:bp,points_frag:wp,shadow_vert:Ep,shadow_frag:Tp,sprite_vert:Ap,sprite_frag:Cp},it={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Ve={basic:{uniforms:Fe([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Fe([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new lt(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Fe([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Fe([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Fe([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new lt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Fe([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Fe([it.points,it.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Fe([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Fe([it.common,it.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Fe([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Fe([it.sprite,it.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Fe([it.common,it.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Fe([it.lights,it.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};Ve.physical={uniforms:Fe([Ve.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const Ys={r:0,b:0,g:0},ni=new xn,Rp=new re;function Pp(i,t,e,n,s,r,a){const o=new lt(0);let l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(w){let M=w.isScene===!0?w.background:null;return M&&M.isTexture&&(M=(w.backgroundBlurriness>0?e:t).get(M)),M}function _(w){let M=!1;const b=g(w);b===null?p(o,l):b&&b.isColor&&(p(b,1),M=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,M){const b=g(M);b&&(b.isCubeTexture||b.mapping===Rr)?(h===void 0&&(h=new bt(new he(1,1,1),new Ie({name:"BackgroundCubeMaterial",uniforms:ns(Ve.backgroundCube.uniforms),vertexShader:Ve.backgroundCube.vertexShader,fragmentShader:Ve.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ni.copy(M.backgroundRotation),ni.x*=-1,ni.y*=-1,ni.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Rp.makeRotationFromEuler(ni)),h.material.toneMapped=jt.getTransfer(b.colorSpace)!==oe,(d!==b||u!==b.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=b,u=b.version,f=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new bt(new vn(2,2),new Ie({name:"BackgroundMaterial",uniforms:ns(Ve.background.uniforms),vertexShader:Ve.background.vertexShader,fragmentShader:Ve.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=jt.getTransfer(b.colorSpace)!==oe,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||u!==b.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=b,u=b.version,f=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,M){w.getRGB(Ys,$c(i)),n.buffers.color.setClear(Ys.r,Ys.g,Ys.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(w,M=1){o.set(w),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(o,l)},render:_,addToRenderList:m}}function Lp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(v,x,L,I,z){let q=!1;const G=d(I,L,x);r!==G&&(r=G,c(r.object)),q=f(v,I,L,z),q&&g(v,I,L,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,b(v,x,L,I),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function d(v,x,L){const I=L.wireframe===!0;let z=n[v.id];z===void 0&&(z={},n[v.id]=z);let q=z[x.id];q===void 0&&(q={},z[x.id]=q);let G=q[I];return G===void 0&&(G=u(l()),q[I]=G),G}function u(v){const x=[],L=[],I=[];for(let z=0;z<e;z++)x[z]=0,L[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:L,attributeDivisors:I,object:v,attributes:{},index:null}}function f(v,x,L,I){const z=r.attributes,q=x.attributes;let G=0;const $=L.getAttributes();for(const H in $)if($[H].location>=0){const rt=z[H];let pt=q[H];if(pt===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(pt=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(pt=v.instanceColor)),rt===void 0||rt.attribute!==pt||pt&&rt.data!==pt.data)return!0;G++}return r.attributesNum!==G||r.index!==I}function g(v,x,L,I){const z={},q=x.attributes;let G=0;const $=L.getAttributes();for(const H in $)if($[H].location>=0){let rt=q[H];rt===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(rt=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(rt=v.instanceColor));const pt={};pt.attribute=rt,rt&&rt.data&&(pt.data=rt.data),z[H]=pt,G++}r.attributes=z,r.attributesNum=G,r.index=I}function _(){const v=r.newAttributes;for(let x=0,L=v.length;x<L;x++)v[x]=0}function m(v){p(v,0)}function p(v,x){const L=r.newAttributes,I=r.enabledAttributes,z=r.attributeDivisors;L[v]=1,I[v]===0&&(i.enableVertexAttribArray(v),I[v]=1),z[v]!==x&&(i.vertexAttribDivisor(v,x),z[v]=x)}function w(){const v=r.newAttributes,x=r.enabledAttributes;for(let L=0,I=x.length;L<I;L++)x[L]!==v[L]&&(i.disableVertexAttribArray(L),x[L]=0)}function M(v,x,L,I,z,q,G){G===!0?i.vertexAttribIPointer(v,x,L,z,q):i.vertexAttribPointer(v,x,L,I,z,q)}function b(v,x,L,I){_();const z=I.attributes,q=L.getAttributes(),G=x.defaultAttributeValues;for(const $ in q){const H=q[$];if(H.location>=0){let nt=z[$];if(nt===void 0&&($==="instanceMatrix"&&v.instanceMatrix&&(nt=v.instanceMatrix),$==="instanceColor"&&v.instanceColor&&(nt=v.instanceColor)),nt!==void 0){const rt=nt.normalized,pt=nt.itemSize,Ft=t.get(nt);if(Ft===void 0)continue;const Ht=Ft.buffer,Y=Ft.type,J=Ft.bytesPerElement,vt=Y===i.INT||Y===i.UNSIGNED_INT||nt.gpuType===So;if(nt.isInterleavedBufferAttribute){const dt=nt.data,At=dt.stride,Et=nt.offset;if(dt.isInstancedInterleavedBuffer){for(let zt=0;zt<H.locationSize;zt++)p(H.location+zt,dt.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let zt=0;zt<H.locationSize;zt++)m(H.location+zt);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let zt=0;zt<H.locationSize;zt++)M(H.location+zt,pt/H.locationSize,Y,rt,At*J,(Et+pt/H.locationSize*zt)*J,vt)}else{if(nt.isInstancedBufferAttribute){for(let dt=0;dt<H.locationSize;dt++)p(H.location+dt,nt.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let dt=0;dt<H.locationSize;dt++)m(H.location+dt);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let dt=0;dt<H.locationSize;dt++)M(H.location+dt,pt/H.locationSize,Y,rt,pt*J,pt/H.locationSize*dt*J,vt)}}else if(G!==void 0){const rt=G[$];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(H.location,rt);break;case 3:i.vertexAttrib3fv(H.location,rt);break;case 4:i.vertexAttrib4fv(H.location,rt);break;default:i.vertexAttrib1fv(H.location,rt)}}}}w()}function P(){A();for(const v in n){const x=n[v];for(const L in x){const I=x[L];for(const z in I)h(I[z].object),delete I[z];delete x[L]}delete n[v]}}function R(v){if(n[v.id]===void 0)return;const x=n[v.id];for(const L in x){const I=x[L];for(const z in I)h(I[z].object),delete I[z];delete x[L]}delete n[v.id]}function T(v){for(const x in n){const L=n[x];if(L[v.id]===void 0)continue;const I=L[v.id];for(const z in I)h(I[z].object),delete I[z];delete L[v.id]}}function A(){F(),a=!0,r!==s&&(r=s,c(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:F,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function Dp(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];for(let _=0;_<u.length;_++)e.update(g,n,u[_])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ip(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==dn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const A=T===Ln&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Un&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Cn&&!A)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){const T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:M,maxFragmentUniforms:b,vertexTextures:P,maxSamples:R}}function Np(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Xn,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const w=r?0:n,M=w*4;let b=p.clippingState||null;l.value=b,b=h(g,u,M,f);for(let P=0;P!==M;++P)b[P]=e[P];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,w=u.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,b=f;M!==_;++M,b+=4)a.copy(d[M]).applyMatrix4(w,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Up(i){let t=new WeakMap;function e(a,o){return o===za?a.mapping=Qi:o===Ba&&(a.mapping=Ji),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===za||o===Ba)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Xd(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Do extends qc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Wi=4,yl=[.125,.215,.35,.446,.526,.582],oi=20,aa=new Do,Ml=new lt;let oa=null,la=0,ca=0,ha=!1;const ri=(1+Math.sqrt(5))/2,Fi=1/ri,Sl=[new E(-ri,Fi,0),new E(ri,Fi,0),new E(-Fi,0,ri),new E(Fi,0,ri),new E(0,ri,-Fi),new E(0,ri,Fi),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)];class bl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){oa=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=El(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(oa,la,ca),this._renderer.xr.enabled=ha,t.scissorTest=!1,js(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===Ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),oa=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:Ln,format:dn,colorSpace:jn,depthBuffer:!1},s=wl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Op(r)),this._blurMaterial=Fp(r,t,e)}return s}_compileMaterial(t){const e=new bt(this._lodPlanes[0],t);this._renderer.compile(e,aa)}_sceneToCubeUV(t,e,n,s){const o=new Me(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Ml),h.toneMapping=qn,h.autoClear=!1;const f=new ye({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),g=new bt(new he,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Ml),_=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):w===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const M=this._cubeSize;js(s,w*M,p>2?M:0,M,M),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Qi||t.mapping===Ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=El());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new bt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;js(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,aa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Sl[(s-r-1)%Sl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new bt(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*oi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):oi;m>oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${oi}`);const p=[];let w=0;for(let T=0;T<oi;++T){const A=T/_,F=Math.exp(-A*A/2);p.push(F),T===0?w+=F:T<m&&(w+=2*F)}for(let T=0;T<p.length;T++)p[T]=p[T]/w;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-n;const b=this._sizeLods[s],P=3*b*(s>M-Wi?s-M+Wi:0),R=4*(this._cubeSize-b);js(e,P,R,3*b,2*b),l.setRenderTarget(e),l.render(d,aa)}}function Op(i){const t=[],e=[],n=[];let s=i;const r=i-Wi+1+yl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Wi?l=yl[a-i+Wi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,_=3,m=2,p=1,w=new Float32Array(_*g*f),M=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let R=0;R<f;R++){const T=R%3*2/3-1,A=R>2?0:-1,F=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];w.set(F,_*g*R),M.set(u,m*g*R);const v=[R,R,R,R,R,R];b.set(v,p*g*R)}const P=new se;P.setAttribute("position",new $e(w,_)),P.setAttribute("uv",new $e(M,m)),P.setAttribute("faceIndex",new $e(b,p)),t.push(P),s>Wi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wl(i,t,e){const n=new un(i,t,e);return n.texture.mapping=Rr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function js(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Fp(i,t,e){const n=new Float32Array(oi),s=new E(0,1,0);return new Ie({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Io(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function El(){return new Ie({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Io(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Tl(){return new Ie({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Io(){return`

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
	`}function zp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===za||l===Ba,h=l===Qi||l===Ji;if(c||h){let d=t.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new bl(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new bl(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Bp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&vr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function kp(i,t,e,n){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}u.removeEventListener("dispose",a),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const w=f.array;_=f.version;for(let M=0,b=w.length;M<b;M+=3){const P=w[M+0],R=w[M+1],T=w[M+2];u.push(P,R,R,T,T,P)}}else if(g!==void 0){const w=g.array;_=g.version;for(let M=0,b=w.length/3-1;M<b;M+=3){const P=M+0,R=M+1,T=M+2;u.push(P,R,R,T,T,P)}}else return;const m=new(Bc(u)?Xc:Wc)(u,1);m.version=_;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Hp(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*a),e.update(f,n,1)}function c(u,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,u*a,g),e.update(f,n,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(u,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,_,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w];for(let w=0;w<_.length;w++)e.update(p,n,_[w])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Gp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Vp(i,t,e){const n=new WeakMap,s=new Wt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let v=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var f=v;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),_===!0&&(b=2),m===!0&&(b=3);let P=o.attributes.position.count*b,R=1;P>t.maxTextureSize&&(R=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const T=new Float32Array(P*R*4*d),A=new Hc(T,P,R,d);A.type=Cn,A.needsUpdate=!0;const F=b*4;for(let x=0;x<d;x++){const L=p[x],I=w[x],z=M[x],q=P*R*4*x;for(let G=0;G<L.count;G++){const $=G*F;g===!0&&(s.fromBufferAttribute(L,G),T[q+$+0]=s.x,T[q+$+1]=s.y,T[q+$+2]=s.z,T[q+$+3]=0),_===!0&&(s.fromBufferAttribute(I,G),T[q+$+4]=s.x,T[q+$+5]=s.y,T[q+$+6]=s.z,T[q+$+7]=0),m===!0&&(s.fromBufferAttribute(z,G),T[q+$+8]=s.x,T[q+$+9]=s.y,T[q+$+10]=s.z,T[q+$+11]=z.itemSize===4?s.w:1)}}u={count:d,texture:A,size:new ut(P,R)},n.set(o,u),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Wp(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Kc extends Be{constructor(t,e,n,s,r,a,o,l,c,h=Yi){if(h!==Yi&&h!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Yi&&(n=fi),n===void 0&&h===es&&(n=ts),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Zc=new Be,Al=new Kc(1,1),Qc=new Hc,Jc=new Pd,th=new Yc,Cl=[],Rl=[],Pl=new Float32Array(16),Ll=new Float32Array(9),Dl=new Float32Array(4);function rs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Cl[s];if(r===void 0&&(r=new Float32Array(s),Cl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function we(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Lr(i,t){let e=Rl[t];e===void 0&&(e=new Int32Array(t),Rl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Xp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function $p(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2fv(this.addr,t),we(e,t)}}function qp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;i.uniform3fv(this.addr,t),we(e,t)}}function Yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4fv(this.addr,t),we(e,t)}}function jp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;Dl.set(n),i.uniformMatrix2fv(this.addr,!1,Dl),we(e,n)}}function Kp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;Ll.set(n),i.uniformMatrix3fv(this.addr,!1,Ll),we(e,n)}}function Zp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;Pl.set(n),i.uniformMatrix4fv(this.addr,!1,Pl),we(e,n)}}function Qp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Jp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2iv(this.addr,t),we(e,t)}}function tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3iv(this.addr,t),we(e,t)}}function em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4iv(this.addr,t),we(e,t)}}function nm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2uiv(this.addr,t),we(e,t)}}function sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3uiv(this.addr,t),we(e,t)}}function rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4uiv(this.addr,t),we(e,t)}}function am(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Al.compareFunction=Fc,r=Al):r=Zc,e.setTexture2D(t||r,s)}function om(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Jc,s)}function lm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||th,s)}function cm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Qc,s)}function hm(i){switch(i){case 5126:return Xp;case 35664:return $p;case 35665:return qp;case 35666:return Yp;case 35674:return jp;case 35675:return Kp;case 35676:return Zp;case 5124:case 35670:return Qp;case 35667:case 35671:return Jp;case 35668:case 35672:return tm;case 35669:case 35673:return em;case 5125:return nm;case 36294:return im;case 36295:return sm;case 36296:return rm;case 35678:case 36198:case 36298:case 36306:case 35682:return am;case 35679:case 36299:case 36307:return om;case 35680:case 36300:case 36308:case 36293:return lm;case 36289:case 36303:case 36311:case 36292:return cm}}function dm(i,t){i.uniform1fv(this.addr,t)}function um(i,t){const e=rs(t,this.size,2);i.uniform2fv(this.addr,e)}function fm(i,t){const e=rs(t,this.size,3);i.uniform3fv(this.addr,e)}function pm(i,t){const e=rs(t,this.size,4);i.uniform4fv(this.addr,e)}function mm(i,t){const e=rs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function gm(i,t){const e=rs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function vm(i,t){const e=rs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function _m(i,t){i.uniform1iv(this.addr,t)}function xm(i,t){i.uniform2iv(this.addr,t)}function ym(i,t){i.uniform3iv(this.addr,t)}function Mm(i,t){i.uniform4iv(this.addr,t)}function Sm(i,t){i.uniform1uiv(this.addr,t)}function bm(i,t){i.uniform2uiv(this.addr,t)}function wm(i,t){i.uniform3uiv(this.addr,t)}function Em(i,t){i.uniform4uiv(this.addr,t)}function Tm(i,t,e){const n=this.cache,s=t.length,r=Lr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Zc,r[a])}function Am(i,t,e){const n=this.cache,s=t.length,r=Lr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Jc,r[a])}function Cm(i,t,e){const n=this.cache,s=t.length,r=Lr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||th,r[a])}function Rm(i,t,e){const n=this.cache,s=t.length,r=Lr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Qc,r[a])}function Pm(i){switch(i){case 5126:return dm;case 35664:return um;case 35665:return fm;case 35666:return pm;case 35674:return mm;case 35675:return gm;case 35676:return vm;case 5124:case 35670:return _m;case 35667:case 35671:return xm;case 35668:case 35672:return ym;case 35669:case 35673:return Mm;case 5125:return Sm;case 36294:return bm;case 36295:return wm;case 36296:return Em;case 35678:case 36198:case 36298:case 36306:case 35682:return Tm;case 35679:case 36299:case 36307:return Am;case 35680:case 36300:case 36308:case 36293:return Cm;case 36289:case 36303:case 36311:case 36292:return Rm}}class Lm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=hm(e.type)}}class Dm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Pm(e.type)}}class Im{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const da=/(\w+)(\])?(\[|\.)?/g;function Il(i,t){i.seq.push(t),i.map[t.id]=t}function Nm(i,t,e){const n=i.name,s=n.length;for(da.lastIndex=0;;){const r=da.exec(n),a=da.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Il(e,c===void 0?new Lm(o,i,t):new Dm(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Im(o),Il(e,d)),e=d}}}class _r{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Nm(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Nl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Um=37297;let Om=0;function Fm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function zm(i){const t=jt.getPrimaries(jt.workingColorSpace),e=jt.getPrimaries(i);let n;switch(t===e?n="":t===br&&e===Sr?n="LinearDisplayP3ToLinearSRGB":t===Sr&&e===br&&(n="LinearSRGBToLinearDisplayP3"),i){case jn:case Pr:return[n,"LinearTransferOETF"];case cn:case Co:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ul(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Fm(i.getShaderSource(t),a)}else return s}function Bm(i,t){const e=zm(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function km(i,t){let e;switch(t){case yc:e="Linear";break;case Mc:e="Reinhard";break;case Sc:e="Cineon";break;case Mo:e="ACESFilmic";break;case bc:e="AgX";break;case wc:e="Neutral";break;case qh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ks=new E;function Hm(){jt.getLuminanceCoefficients(Ks);const i=Ks.x.toFixed(4),t=Ks.y.toFixed(4),e=Ks.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_s).join(`
`)}function Vm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Wm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function _s(i){return i!==""}function Ol(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Xm=/^[ \t]*#include +<([\w\d./]+)>/gm;function go(i){return i.replace(Xm,qm)}const $m=new Map;function qm(i,t){let e=Ut[t];if(e===void 0){const n=$m.get(t);if(n!==void 0)e=Ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return go(e)}const Ym=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zl(i){return i.replace(Ym,jm)}function jm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Km(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===_c?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Th?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===An&&(t="SHADOWMAP_TYPE_VSM"),t}function Zm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Qi:case Ji:t="ENVMAP_TYPE_CUBE";break;case Rr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Qm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ji:t="ENVMAP_MODE_REFRACTION";break}return t}function Jm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case xc:t="ENVMAP_BLENDING_MULTIPLY";break;case Xh:t="ENVMAP_BLENDING_MIX";break;case $h:t="ENVMAP_BLENDING_ADD";break}return t}function tg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function eg(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Km(e),c=Zm(e),h=Qm(e),d=Jm(e),u=tg(e),f=Gm(e),g=Vm(r),_=s.createProgram();let m,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(_s).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(_s).join(`
`),p.length>0&&(p+=`
`)):(m=[Bl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_s).join(`
`),p=[Bl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?Ut.tonemapping_pars_fragment:"",e.toneMapping!==qn?km("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,Bm("linearToOutputTexel",e.outputColorSpace),Hm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_s).join(`
`)),a=go(a),a=Ol(a,e),a=Fl(a,e),o=go(o),o=Ol(o,e),o=Fl(o,e),a=zl(a),o=zl(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===el?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===el?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=w+m+a,b=w+p+o,P=Nl(s,s.VERTEX_SHADER,M),R=Nl(s,s.FRAGMENT_SHADER,b);s.attachShader(_,P),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(x){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(_).trim(),I=s.getShaderInfoLog(P).trim(),z=s.getShaderInfoLog(R).trim();let q=!0,G=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,P,R);else{const $=Ul(s,P,"vertex"),H=Ul(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+x.name+`
Material Type: `+x.type+`

Program Info Log: `+L+`
`+$+`
`+H)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(I===""||z==="")&&(G=!1);G&&(x.diagnostics={runnable:q,programLog:L,vertexShader:{log:I,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(P),s.deleteShader(R),A=new _r(s,_),F=Wm(s,_)}let A;this.getUniforms=function(){return A===void 0&&T(this),A};let F;this.getAttributes=function(){return F===void 0&&T(this),F};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,Um)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Om++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=R,this}let ng=0;class ig{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new sg(t),e.set(t,n)),n}}class sg{constructor(t){this.id=ng++,this.code=t,this.usedTimes=0}}function rg(i,t,e,n,s,r,a){const o=new Gc,l=new ig,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,f=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}function p(v,x,L,I,z){const q=I.fog,G=z.geometry,$=v.isMeshStandardMaterial?I.environment:null,H=(v.isMeshStandardMaterial?e:t).get(v.envMap||$),nt=H&&H.mapping===Rr?H.image.height:null,rt=_[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const pt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ft=pt!==void 0?pt.length:0;let Ht=0;G.morphAttributes.position!==void 0&&(Ht=1),G.morphAttributes.normal!==void 0&&(Ht=2),G.morphAttributes.color!==void 0&&(Ht=3);let Y,J,vt,dt;if(rt){const He=Ve[rt];Y=He.vertexShader,J=He.fragmentShader}else Y=v.vertexShader,J=v.fragmentShader,l.update(v),vt=l.getVertexShaderID(v),dt=l.getFragmentShaderID(v);const At=i.getRenderTarget(),Et=z.isInstancedMesh===!0,zt=z.isBatchedMesh===!0,te=!!v.map,Gt=!!v.matcap,D=!!H,qe=!!v.aoMap,Bt=!!v.lightMap,Xt=!!v.bumpMap,Pt=!!v.normalMap,le=!!v.displacementMap,It=!!v.emissiveMap,C=!!v.metalnessMap,y=!!v.roughnessMap,B=v.anisotropy>0,K=v.clearcoat>0,Q=v.dispersion>0,j=v.iridescence>0,Mt=v.sheen>0,st=v.transmission>0,ft=B&&!!v.anisotropyMap,$t=K&&!!v.clearcoatMap,tt=K&&!!v.clearcoatNormalMap,mt=K&&!!v.clearcoatRoughnessMap,Lt=j&&!!v.iridescenceMap,Dt=j&&!!v.iridescenceThicknessMap,gt=Mt&&!!v.sheenColorMap,kt=Mt&&!!v.sheenRoughnessMap,Nt=!!v.specularMap,ae=!!v.specularColorMap,N=!!v.specularIntensityMap,ct=st&&!!v.transmissionMap,X=st&&!!v.thicknessMap,Z=!!v.gradientMap,at=!!v.alphaMap,ht=v.alphaTest>0,Vt=!!v.alphaHash,pe=!!v.extensions;let ke=qn;v.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(ke=i.toneMapping);const Yt={shaderID:rt,shaderType:v.type,shaderName:v.name,vertexShader:Y,fragmentShader:J,defines:v.defines,customVertexShaderID:vt,customFragmentShaderID:dt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:zt,batchingColor:zt&&z._colorsTexture!==null,instancing:Et,instancingColor:Et&&z.instanceColor!==null,instancingMorph:Et&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:At===null?i.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:jn,alphaToCoverage:!!v.alphaToCoverage,map:te,matcap:Gt,envMap:D,envMapMode:D&&H.mapping,envMapCubeUVHeight:nt,aoMap:qe,lightMap:Bt,bumpMap:Xt,normalMap:Pt,displacementMap:f&&le,emissiveMap:It,normalMapObjectSpace:Pt&&v.normalMapType===Zh,normalMapTangentSpace:Pt&&v.normalMapType===Oc,metalnessMap:C,roughnessMap:y,anisotropy:B,anisotropyMap:ft,clearcoat:K,clearcoatMap:$t,clearcoatNormalMap:tt,clearcoatRoughnessMap:mt,dispersion:Q,iridescence:j,iridescenceMap:Lt,iridescenceThicknessMap:Dt,sheen:Mt,sheenColorMap:gt,sheenRoughnessMap:kt,specularMap:Nt,specularColorMap:ae,specularIntensityMap:N,transmission:st,transmissionMap:ct,thicknessMap:X,gradientMap:Z,opaque:v.transparent===!1&&v.blending===qi&&v.alphaToCoverage===!1,alphaMap:at,alphaTest:ht,alphaHash:Vt,combine:v.combine,mapUv:te&&m(v.map.channel),aoMapUv:qe&&m(v.aoMap.channel),lightMapUv:Bt&&m(v.lightMap.channel),bumpMapUv:Xt&&m(v.bumpMap.channel),normalMapUv:Pt&&m(v.normalMap.channel),displacementMapUv:le&&m(v.displacementMap.channel),emissiveMapUv:It&&m(v.emissiveMap.channel),metalnessMapUv:C&&m(v.metalnessMap.channel),roughnessMapUv:y&&m(v.roughnessMap.channel),anisotropyMapUv:ft&&m(v.anisotropyMap.channel),clearcoatMapUv:$t&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:tt&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:kt&&m(v.sheenRoughnessMap.channel),specularMapUv:Nt&&m(v.specularMap.channel),specularColorMapUv:ae&&m(v.specularColorMap.channel),specularIntensityMapUv:N&&m(v.specularIntensityMap.channel),transmissionMapUv:ct&&m(v.transmissionMap.channel),thicknessMapUv:X&&m(v.thicknessMap.channel),alphaMapUv:at&&m(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Pt||B),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!G.attributes.uv&&(te||at),fog:!!q,useFog:v.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:z.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Ft,morphTextureStride:Ht,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ke,decodeVideoTexture:te&&v.map.isVideoTexture===!0&&jt.getTransfer(v.map.colorSpace)===oe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===We,flipSided:v.side===Xe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:pe&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&v.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Yt.vertexUv1s=c.has(1),Yt.vertexUv2s=c.has(2),Yt.vertexUv3s=c.has(3),c.clear(),Yt}function w(v){const x=[];if(v.shaderID?x.push(v.shaderID):(x.push(v.customVertexShaderID),x.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)x.push(L),x.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(M(x,v),b(x,v),x.push(i.outputColorSpace)),x.push(v.customProgramCacheKey),x.join()}function M(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)}function b(v,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.alphaToCoverage&&o.enable(20),v.push(o.mask)}function P(v){const x=_[v.type];let L;if(x){const I=Ve[x];L=mi.clone(I.uniforms)}else L=v.uniforms;return L}function R(v,x){let L;for(let I=0,z=h.length;I<z;I++){const q=h[I];if(q.cacheKey===x){L=q,++L.usedTimes;break}}return L===void 0&&(L=new eg(i,x,v,r),h.push(L)),L}function T(v){if(--v.usedTimes===0){const x=h.indexOf(v);h[x]=h[h.length-1],h.pop(),v.destroy()}}function A(v){l.remove(v)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:w,getUniforms:P,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:F}}function ag(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function og(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function kl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Hl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,u,f,g,_,m){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),t++,p}function o(d,u,f,g,_,m){const p=a(d,u,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(d,u,f,g,_,m){const p=a(d,u,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||og),n.length>1&&n.sort(u||kl),s.length>1&&s.sort(u||kl)}function h(){for(let d=t,u=i.length;d<u;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function lg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Hl,i.set(n,[a])):s>=r.length?(a=new Hl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function cg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new E,color:new lt};break;case"SpotLight":e={position:new E,direction:new E,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":e={color:new lt,position:new E,halfWidth:new E,halfHeight:new E};break}return i[t.id]=e,e}}}function hg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let dg=0;function ug(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function fg(i){const t=new cg,e=hg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new E);const s=new E,r=new re,a=new re;function o(c){let h=0,d=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,w=0,M=0,b=0,P=0,R=0,T=0;c.sort(ug);for(let F=0,v=c.length;F<v;F++){const x=c[F],L=x.color,I=x.intensity,z=x.distance,q=x.shadow&&x.shadow.map?x.shadow.map.texture:null;if(x.isAmbientLight)h+=L.r*I,d+=L.g*I,u+=L.b*I;else if(x.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(x.sh.coefficients[G],I);T++}else if(x.isDirectionalLight){const G=t.get(x);if(G.color.copy(x.color).multiplyScalar(x.intensity),x.castShadow){const $=x.shadow,H=e.get(x);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=x.shadow.matrix,w++}n.directional[f]=G,f++}else if(x.isSpotLight){const G=t.get(x);G.position.setFromMatrixPosition(x.matrixWorld),G.color.copy(L).multiplyScalar(I),G.distance=z,G.coneCos=Math.cos(x.angle),G.penumbraCos=Math.cos(x.angle*(1-x.penumbra)),G.decay=x.decay,n.spot[_]=G;const $=x.shadow;if(x.map&&(n.spotLightMap[P]=x.map,P++,$.updateMatrices(x),x.castShadow&&R++),n.spotLightMatrix[_]=$.matrix,x.castShadow){const H=e.get(x);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=q,b++}_++}else if(x.isRectAreaLight){const G=t.get(x);G.color.copy(L).multiplyScalar(I),G.halfWidth.set(x.width*.5,0,0),G.halfHeight.set(0,x.height*.5,0),n.rectArea[m]=G,m++}else if(x.isPointLight){const G=t.get(x);if(G.color.copy(x.color).multiplyScalar(x.intensity),G.distance=x.distance,G.decay=x.decay,x.castShadow){const $=x.shadow,H=e.get(x);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,H.shadowCameraNear=$.camera.near,H.shadowCameraFar=$.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=x.shadow.matrix,M++}n.point[g]=G,g++}else if(x.isHemisphereLight){const G=t.get(x);G.skyColor.copy(x.color).multiplyScalar(I),G.groundColor.copy(x.groundColor).multiplyScalar(I),n.hemi[p]=G,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const A=n.hash;(A.directionalLength!==f||A.pointLength!==g||A.spotLength!==_||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==w||A.numPointShadows!==M||A.numSpotShadows!==b||A.numSpotMaps!==P||A.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=b+P-R,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=T,A.directionalLength=f,A.pointLength=g,A.spotLength=_,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=w,A.numPointShadows=M,A.numSpotShadows=b,A.numSpotMaps=P,A.numLightProbes=T,n.version=dg++)}function l(c,h){let d=0,u=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const M=c[p];if(M.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),d++}else if(M.isSpotLight){const b=n.spot[f];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const b=n.point[u];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Gl(i){const t=new fg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function pg(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Gl(i),t.set(s,[o])):r>=a.length?(o=new Gl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class mg extends xi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gg extends xi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const vg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_g=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xg(i,t,e){let n=new Lo;const s=new ut,r=new ut,a=new Wt,o=new mg({depthPacking:Kh}),l=new gg,c={},h=e.maxTextureSize,d={[Yn]:Xe,[Xe]:Yn,[We]:We},u=new Ie({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:vg,fragmentShader:_g}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new se;g.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new bt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_c;let p=this.type;this.render=function(R,T,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const F=i.getRenderTarget(),v=i.getActiveCubeFace(),x=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Pn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const I=p!==An&&this.type===An,z=p===An&&this.type!==An;for(let q=0,G=R.length;q<G;q++){const $=R[q],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const nt=H.getFrameExtents();if(s.multiply(nt),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,H.mapSize.y=r.y)),H.map===null||I===!0||z===!0){const pt=this.type!==An?{minFilter:nn,magFilter:nn}:{};H.map!==null&&H.map.dispose(),H.map=new un(s.x,s.y,pt),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const rt=H.getViewportCount();for(let pt=0;pt<rt;pt++){const Ft=H.getViewport(pt);a.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),L.viewport(a),H.updateMatrices($,pt),n=H.getFrustum(),b(T,A,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===An&&w(H,A),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(F,v,x)};function w(R,T){const A=t.update(_);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new un(s.x,s.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(T,null,A,u,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(T,null,A,f,_,null)}function M(R,T,A,F){let v=null;const x=A.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(x!==void 0)v=x;else if(v=A.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const L=v.uuid,I=T.uuid;let z=c[L];z===void 0&&(z={},c[L]=z);let q=z[I];q===void 0&&(q=v.clone(),z[I]=q,T.addEventListener("dispose",P)),v=q}if(v.visible=T.visible,v.wireframe=T.wireframe,F===An?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:d[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,A.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const L=i.properties.get(v);L.light=A}return v}function b(R,T,A,F,v){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===An)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,R.matrixWorld);const I=t.update(R),z=R.material;if(Array.isArray(z)){const q=I.groups;for(let G=0,$=q.length;G<$;G++){const H=q[G],nt=z[H.materialIndex];if(nt&&nt.visible){const rt=M(R,nt,F,v);R.onBeforeShadow(i,R,T,A,I,rt,H),i.renderBufferDirect(A,null,I,rt,R,H),R.onAfterShadow(i,R,T,A,I,rt,H)}}}else if(z.visible){const q=M(R,z,F,v);R.onBeforeShadow(i,R,T,A,I,q,null),i.renderBufferDirect(A,null,I,q,R,null),R.onAfterShadow(i,R,T,A,I,q,null)}}const L=R.children;for(let I=0,z=L.length;I<z;I++)b(L[I],T,A,F,v)}function P(R){R.target.removeEventListener("dispose",P);for(const A in c){const F=c[A],v=R.target.uuid;v in F&&(F[v].dispose(),delete F[v])}}}const yg={[La]:Da,[Ia]:Oa,[Na]:Fa,[Zi]:Ua,[Da]:La,[Oa]:Ia,[Fa]:Na,[Ua]:Zi};function Mg(i){function t(){let N=!1;const ct=new Wt;let X=null;const Z=new Wt(0,0,0,0);return{setMask:function(at){X!==at&&!N&&(i.colorMask(at,at,at,at),X=at)},setLocked:function(at){N=at},setClear:function(at,ht,Vt,pe,ke){ke===!0&&(at*=pe,ht*=pe,Vt*=pe),ct.set(at,ht,Vt,pe),Z.equals(ct)===!1&&(i.clearColor(at,ht,Vt,pe),Z.copy(ct))},reset:function(){N=!1,X=null,Z.set(-1,0,0,0)}}}function e(){let N=!1,ct=!1,X=null,Z=null,at=null;return{setReversed:function(ht){ct=ht},setTest:function(ht){ht?vt(i.DEPTH_TEST):dt(i.DEPTH_TEST)},setMask:function(ht){X!==ht&&!N&&(i.depthMask(ht),X=ht)},setFunc:function(ht){if(ct&&(ht=yg[ht]),Z!==ht){switch(ht){case La:i.depthFunc(i.NEVER);break;case Da:i.depthFunc(i.ALWAYS);break;case Ia:i.depthFunc(i.LESS);break;case Zi:i.depthFunc(i.LEQUAL);break;case Na:i.depthFunc(i.EQUAL);break;case Ua:i.depthFunc(i.GEQUAL);break;case Oa:i.depthFunc(i.GREATER);break;case Fa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ht}},setLocked:function(ht){N=ht},setClear:function(ht){at!==ht&&(i.clearDepth(ht),at=ht)},reset:function(){N=!1,X=null,Z=null,at=null}}}function n(){let N=!1,ct=null,X=null,Z=null,at=null,ht=null,Vt=null,pe=null,ke=null;return{setTest:function(Yt){N||(Yt?vt(i.STENCIL_TEST):dt(i.STENCIL_TEST))},setMask:function(Yt){ct!==Yt&&!N&&(i.stencilMask(Yt),ct=Yt)},setFunc:function(Yt,He,Mn){(X!==Yt||Z!==He||at!==Mn)&&(i.stencilFunc(Yt,He,Mn),X=Yt,Z=He,at=Mn)},setOp:function(Yt,He,Mn){(ht!==Yt||Vt!==He||pe!==Mn)&&(i.stencilOp(Yt,He,Mn),ht=Yt,Vt=He,pe=Mn)},setLocked:function(Yt){N=Yt},setClear:function(Yt){ke!==Yt&&(i.clearStencil(Yt),ke=Yt)},reset:function(){N=!1,ct=null,X=null,Z=null,at=null,ht=null,Vt=null,pe=null,ke=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},d=new WeakMap,u=[],f=null,g=!1,_=null,m=null,p=null,w=null,M=null,b=null,P=null,R=new lt(0,0,0),T=0,A=!1,F=null,v=null,x=null,L=null,I=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,G=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec($)[1]),q=G>=1):$.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),q=G>=2);let H=null,nt={};const rt=i.getParameter(i.SCISSOR_BOX),pt=i.getParameter(i.VIEWPORT),Ft=new Wt().fromArray(rt),Ht=new Wt().fromArray(pt);function Y(N,ct,X,Z){const at=new Uint8Array(4),ht=i.createTexture();i.bindTexture(N,ht),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<X;Vt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,at):i.texImage2D(ct+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,at);return ht}const J={};J[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),vt(i.DEPTH_TEST),r.setFunc(Zi),Bt(!1),Xt(Zo),vt(i.CULL_FACE),D(Pn);function vt(N){c[N]!==!0&&(i.enable(N),c[N]=!0)}function dt(N){c[N]!==!1&&(i.disable(N),c[N]=!1)}function At(N,ct){return h[N]!==ct?(i.bindFramebuffer(N,ct),h[N]=ct,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ct),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function Et(N,ct){let X=u,Z=!1;if(N){X=d.get(ct),X===void 0&&(X=[],d.set(ct,X));const at=N.textures;if(X.length!==at.length||X[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Vt=at.length;ht<Vt;ht++)X[ht]=i.COLOR_ATTACHMENT0+ht;X.length=at.length,Z=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,Z=!0);Z&&i.drawBuffers(X)}function zt(N){return f!==N?(i.useProgram(N),f=N,!0):!1}const te={[ai]:i.FUNC_ADD,[Ch]:i.FUNC_SUBTRACT,[Rh]:i.FUNC_REVERSE_SUBTRACT};te[Ph]=i.MIN,te[Lh]=i.MAX;const Gt={[Dh]:i.ZERO,[Ih]:i.ONE,[Nh]:i.SRC_COLOR,[Ra]:i.SRC_ALPHA,[kh]:i.SRC_ALPHA_SATURATE,[zh]:i.DST_COLOR,[Oh]:i.DST_ALPHA,[Uh]:i.ONE_MINUS_SRC_COLOR,[Pa]:i.ONE_MINUS_SRC_ALPHA,[Bh]:i.ONE_MINUS_DST_COLOR,[Fh]:i.ONE_MINUS_DST_ALPHA,[Hh]:i.CONSTANT_COLOR,[Gh]:i.ONE_MINUS_CONSTANT_COLOR,[Vh]:i.CONSTANT_ALPHA,[Wh]:i.ONE_MINUS_CONSTANT_ALPHA};function D(N,ct,X,Z,at,ht,Vt,pe,ke,Yt){if(N===Pn){g===!0&&(dt(i.BLEND),g=!1);return}if(g===!1&&(vt(i.BLEND),g=!0),N!==Ah){if(N!==_||Yt!==A){if((m!==ai||M!==ai)&&(i.blendEquation(i.FUNC_ADD),m=ai,M=ai),Yt)switch(N){case qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ca:i.blendFunc(i.ONE,i.ONE);break;case Qo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ca:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Qo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}p=null,w=null,b=null,P=null,R.set(0,0,0),T=0,_=N,A=Yt}return}at=at||ct,ht=ht||X,Vt=Vt||Z,(ct!==m||at!==M)&&(i.blendEquationSeparate(te[ct],te[at]),m=ct,M=at),(X!==p||Z!==w||ht!==b||Vt!==P)&&(i.blendFuncSeparate(Gt[X],Gt[Z],Gt[ht],Gt[Vt]),p=X,w=Z,b=ht,P=Vt),(pe.equals(R)===!1||ke!==T)&&(i.blendColor(pe.r,pe.g,pe.b,ke),R.copy(pe),T=ke),_=N,A=!1}function qe(N,ct){N.side===We?dt(i.CULL_FACE):vt(i.CULL_FACE);let X=N.side===Xe;ct&&(X=!X),Bt(X),N.blending===qi&&N.transparent===!1?D(Pn):D(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),s.setMask(N.colorWrite);const Z=N.stencilWrite;a.setTest(Z),Z&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),le(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?vt(i.SAMPLE_ALPHA_TO_COVERAGE):dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(N){F!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),F=N)}function Xt(N){N!==wh?(vt(i.CULL_FACE),N!==v&&(N===Zo?i.cullFace(i.BACK):N===Eh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):dt(i.CULL_FACE),v=N}function Pt(N){N!==x&&(q&&i.lineWidth(N),x=N)}function le(N,ct,X){N?(vt(i.POLYGON_OFFSET_FILL),(L!==ct||I!==X)&&(i.polygonOffset(ct,X),L=ct,I=X)):dt(i.POLYGON_OFFSET_FILL)}function It(N){N?vt(i.SCISSOR_TEST):dt(i.SCISSOR_TEST)}function C(N){N===void 0&&(N=i.TEXTURE0+z-1),H!==N&&(i.activeTexture(N),H=N)}function y(N,ct,X){X===void 0&&(H===null?X=i.TEXTURE0+z-1:X=H);let Z=nt[X];Z===void 0&&(Z={type:void 0,texture:void 0},nt[X]=Z),(Z.type!==N||Z.texture!==ct)&&(H!==X&&(i.activeTexture(X),H=X),i.bindTexture(N,ct||J[N]),Z.type=N,Z.texture=ct)}function B(){const N=nt[H];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Mt(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function st(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $t(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function mt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Lt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Dt(N){Ft.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Ft.copy(N))}function gt(N){Ht.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Ht.copy(N))}function kt(N,ct){let X=l.get(ct);X===void 0&&(X=new WeakMap,l.set(ct,X));let Z=X.get(N);Z===void 0&&(Z=i.getUniformBlockIndex(ct,N.name),X.set(N,Z))}function Nt(N,ct){const Z=l.get(ct).get(N);o.get(ct)!==Z&&(i.uniformBlockBinding(ct,Z,N.__bindingPointIndex),o.set(ct,Z))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},H=null,nt={},h={},d=new WeakMap,u=[],f=null,g=!1,_=null,m=null,p=null,w=null,M=null,b=null,P=null,R=new lt(0,0,0),T=0,A=!1,F=null,v=null,x=null,L=null,I=null,Ft.set(0,0,i.canvas.width,i.canvas.height),Ht.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:vt,disable:dt,bindFramebuffer:At,drawBuffers:Et,useProgram:zt,setBlending:D,setMaterial:qe,setFlipSided:Bt,setCullFace:Xt,setLineWidth:Pt,setPolygonOffset:le,setScissorTest:It,activeTexture:C,bindTexture:y,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:Q,texImage2D:mt,texImage3D:Lt,updateUBOMapping:kt,uniformBlockBinding:Nt,texStorage2D:$t,texStorage3D:tt,texSubImage2D:j,texSubImage3D:Mt,compressedTexSubImage2D:st,compressedTexSubImage3D:ft,scissor:Dt,viewport:gt,reset:ae}}function Vl(i,t,e,n){const s=Sg(n);switch(e){case Rc:return i*t;case Lc:return i*t;case Dc:return i*t*2;case Ic:return i*t/s.components*s.byteLength;case Eo:return i*t/s.components*s.byteLength;case Nc:return i*t*2/s.components*s.byteLength;case To:return i*t*2/s.components*s.byteLength;case Pc:return i*t*3/s.components*s.byteLength;case dn:return i*t*4/s.components*s.byteLength;case Ao:return i*t*4/s.components*s.byteLength;case ur:case fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case pr:case mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Va:case Xa:return Math.max(i,16)*Math.max(t,8)/4;case Ga:case Wa:return Math.max(i,8)*Math.max(t,8)/2;case $a:case qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Za:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case to:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case eo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case no:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case io:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case so:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ro:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ao:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case oo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case lo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case gr:case co:case ho:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Uc:case uo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case fo:case po:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Sg(i){switch(i){case Un:case Tc:return{byteLength:1,components:1};case Ms:case Ac:case Ln:return{byteLength:2,components:1};case bo:case wo:return{byteLength:2,components:4};case fi:case So:case Cn:return{byteLength:4,components:1};case Cc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function bg(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,y){return f?new OffscreenCanvas(C,y):Er("canvas")}function _(C,y,B){let K=1;const Q=It(C);if((Q.width>B||Q.height>B)&&(K=B/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const j=Math.floor(K*Q.width),Mt=Math.floor(K*Q.height);d===void 0&&(d=g(j,Mt));const st=y?g(j,Mt):d;return st.width=j,st.height=Mt,st.getContext("2d").drawImage(C,0,0,j,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+Mt+")."),st}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==nn&&C.minFilter!==Qe}function p(C){i.generateMipmap(C)}function w(C,y,B,K,Q=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let j=y;if(y===i.RED&&(B===i.FLOAT&&(j=i.R32F),B===i.HALF_FLOAT&&(j=i.R16F),B===i.UNSIGNED_BYTE&&(j=i.R8)),y===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.R8UI),B===i.UNSIGNED_SHORT&&(j=i.R16UI),B===i.UNSIGNED_INT&&(j=i.R32UI),B===i.BYTE&&(j=i.R8I),B===i.SHORT&&(j=i.R16I),B===i.INT&&(j=i.R32I)),y===i.RG&&(B===i.FLOAT&&(j=i.RG32F),B===i.HALF_FLOAT&&(j=i.RG16F),B===i.UNSIGNED_BYTE&&(j=i.RG8)),y===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RG8UI),B===i.UNSIGNED_SHORT&&(j=i.RG16UI),B===i.UNSIGNED_INT&&(j=i.RG32UI),B===i.BYTE&&(j=i.RG8I),B===i.SHORT&&(j=i.RG16I),B===i.INT&&(j=i.RG32I)),y===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGB8UI),B===i.UNSIGNED_SHORT&&(j=i.RGB16UI),B===i.UNSIGNED_INT&&(j=i.RGB32UI),B===i.BYTE&&(j=i.RGB8I),B===i.SHORT&&(j=i.RGB16I),B===i.INT&&(j=i.RGB32I)),y===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),B===i.UNSIGNED_INT&&(j=i.RGBA32UI),B===i.BYTE&&(j=i.RGBA8I),B===i.SHORT&&(j=i.RGBA16I),B===i.INT&&(j=i.RGBA32I)),y===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),y===i.RGBA){const Mt=Q?Mr:jt.getTransfer(K);B===i.FLOAT&&(j=i.RGBA32F),B===i.HALF_FLOAT&&(j=i.RGBA16F),B===i.UNSIGNED_BYTE&&(j=Mt===oe?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function M(C,y){let B;return C?y===null||y===fi||y===ts?B=i.DEPTH24_STENCIL8:y===Cn?B=i.DEPTH32F_STENCIL8:y===Ms&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===fi||y===ts?B=i.DEPTH_COMPONENT24:y===Cn?B=i.DEPTH_COMPONENT32F:y===Ms&&(B=i.DEPTH_COMPONENT16),B}function b(C,y){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==nn&&C.minFilter!==Qe?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function P(C){const y=C.target;y.removeEventListener("dispose",P),T(y),y.isVideoTexture&&h.delete(y)}function R(C){const y=C.target;y.removeEventListener("dispose",R),F(y)}function T(C){const y=n.get(C);if(y.__webglInit===void 0)return;const B=C.source,K=u.get(B);if(K){const Q=K[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&A(C),Object.keys(K).length===0&&u.delete(B)}n.remove(C)}function A(C){const y=n.get(C);i.deleteTexture(y.__webglTexture);const B=C.source,K=u.get(B);delete K[y.__cacheKey],a.memory.textures--}function F(C){const y=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let Q=0;Q<y.__webglFramebuffer[K].length;Q++)i.deleteFramebuffer(y.__webglFramebuffer[K][Q]);else i.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)i.deleteFramebuffer(y.__webglFramebuffer[K]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const B=C.textures;for(let K=0,Q=B.length;K<Q;K++){const j=n.get(B[K]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(B[K])}n.remove(C)}let v=0;function x(){v=0}function L(){const C=v;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),v+=1,C}function I(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function z(C,y){const B=n.get(C);if(C.isVideoTexture&&Pt(C),C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){const K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ht(B,C,y);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+y)}function q(C,y){const B=n.get(C);if(C.version>0&&B.__version!==C.version){Ht(B,C,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+y)}function G(C,y){const B=n.get(C);if(C.version>0&&B.__version!==C.version){Ht(B,C,y);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+y)}function $(C,y){const B=n.get(C);if(C.version>0&&B.__version!==C.version){Y(B,C,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+y)}const H={[ka]:i.REPEAT,[ci]:i.CLAMP_TO_EDGE,[Ha]:i.MIRRORED_REPEAT},nt={[nn]:i.NEAREST,[Yh]:i.NEAREST_MIPMAP_NEAREST,[Ps]:i.NEAREST_MIPMAP_LINEAR,[Qe]:i.LINEAR,[zr]:i.LINEAR_MIPMAP_NEAREST,[hi]:i.LINEAR_MIPMAP_LINEAR},rt={[Qh]:i.NEVER,[sd]:i.ALWAYS,[Jh]:i.LESS,[Fc]:i.LEQUAL,[td]:i.EQUAL,[id]:i.GEQUAL,[ed]:i.GREATER,[nd]:i.NOTEQUAL};function pt(C,y){if(y.type===Cn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Qe||y.magFilter===zr||y.magFilter===Ps||y.magFilter===hi||y.minFilter===Qe||y.minFilter===zr||y.minFilter===Ps||y.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,H[y.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,H[y.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,H[y.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,nt[y.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,nt[y.minFilter]),y.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,rt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===nn||y.minFilter!==Ps&&y.minFilter!==hi||y.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ft(C,y){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",P));const K=y.source;let Q=u.get(K);Q===void 0&&(Q={},u.set(K,Q));const j=I(y);if(j!==C.__cacheKey){Q[j]===void 0&&(Q[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Q[j].usedTimes++;const Mt=Q[C.__cacheKey];Mt!==void 0&&(Q[C.__cacheKey].usedTimes--,Mt.usedTimes===0&&A(y)),C.__cacheKey=j,C.__webglTexture=Q[j].texture}return B}function Ht(C,y,B){let K=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=i.TEXTURE_3D);const Q=Ft(C,y),j=y.source;e.bindTexture(K,C.__webglTexture,i.TEXTURE0+B);const Mt=n.get(j);if(j.version!==Mt.__version||Q===!0){e.activeTexture(i.TEXTURE0+B);const st=jt.getPrimaries(jt.workingColorSpace),ft=y.colorSpace===$n?null:jt.getPrimaries(y.colorSpace),$t=y.colorSpace===$n||st===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let tt=_(y.image,!1,s.maxTextureSize);tt=le(y,tt);const mt=r.convert(y.format,y.colorSpace),Lt=r.convert(y.type);let Dt=w(y.internalFormat,mt,Lt,y.colorSpace,y.isVideoTexture);pt(K,y);let gt;const kt=y.mipmaps,Nt=y.isVideoTexture!==!0,ae=Mt.__version===void 0||Q===!0,N=j.dataReady,ct=b(y,tt);if(y.isDepthTexture)Dt=M(y.format===es,y.type),ae&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,Dt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Dt,tt.width,tt.height,0,mt,Lt,null));else if(y.isDataTexture)if(kt.length>0){Nt&&ae&&e.texStorage2D(i.TEXTURE_2D,ct,Dt,kt[0].width,kt[0].height);for(let X=0,Z=kt.length;X<Z;X++)gt=kt[X],Nt?N&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,gt.width,gt.height,mt,Lt,gt.data):e.texImage2D(i.TEXTURE_2D,X,Dt,gt.width,gt.height,0,mt,Lt,gt.data);y.generateMipmaps=!1}else Nt?(ae&&e.texStorage2D(i.TEXTURE_2D,ct,Dt,tt.width,tt.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,mt,Lt,tt.data)):e.texImage2D(i.TEXTURE_2D,0,Dt,tt.width,tt.height,0,mt,Lt,tt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Nt&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Dt,kt[0].width,kt[0].height,tt.depth);for(let X=0,Z=kt.length;X<Z;X++)if(gt=kt[X],y.format!==dn)if(mt!==null)if(Nt){if(N)if(y.layerUpdates.size>0){const at=Vl(gt.width,gt.height,y.format,y.type);for(const ht of y.layerUpdates){const Vt=gt.data.subarray(ht*at/gt.data.BYTES_PER_ELEMENT,(ht+1)*at/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,ht,gt.width,gt.height,1,mt,Vt,0,0)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,gt.width,gt.height,tt.depth,mt,gt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Dt,gt.width,gt.height,tt.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,gt.width,gt.height,tt.depth,mt,Lt,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Dt,gt.width,gt.height,tt.depth,0,mt,Lt,gt.data)}else{Nt&&ae&&e.texStorage2D(i.TEXTURE_2D,ct,Dt,kt[0].width,kt[0].height);for(let X=0,Z=kt.length;X<Z;X++)gt=kt[X],y.format!==dn?mt!==null?Nt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Dt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?N&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,gt.width,gt.height,mt,Lt,gt.data):e.texImage2D(i.TEXTURE_2D,X,Dt,gt.width,gt.height,0,mt,Lt,gt.data)}else if(y.isDataArrayTexture)if(Nt){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Dt,tt.width,tt.height,tt.depth),N)if(y.layerUpdates.size>0){const X=Vl(tt.width,tt.height,y.format,y.type);for(const Z of y.layerUpdates){const at=tt.data.subarray(Z*X/tt.data.BYTES_PER_ELEMENT,(Z+1)*X/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,tt.width,tt.height,1,mt,Lt,at)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,mt,Lt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,tt.width,tt.height,tt.depth,0,mt,Lt,tt.data);else if(y.isData3DTexture)Nt?(ae&&e.texStorage3D(i.TEXTURE_3D,ct,Dt,tt.width,tt.height,tt.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,mt,Lt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,tt.width,tt.height,tt.depth,0,mt,Lt,tt.data);else if(y.isFramebufferTexture){if(ae)if(Nt)e.texStorage2D(i.TEXTURE_2D,ct,Dt,tt.width,tt.height);else{let X=tt.width,Z=tt.height;for(let at=0;at<ct;at++)e.texImage2D(i.TEXTURE_2D,at,Dt,X,Z,0,mt,Lt,null),X>>=1,Z>>=1}}else if(kt.length>0){if(Nt&&ae){const X=It(kt[0]);e.texStorage2D(i.TEXTURE_2D,ct,Dt,X.width,X.height)}for(let X=0,Z=kt.length;X<Z;X++)gt=kt[X],Nt?N&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,mt,Lt,gt):e.texImage2D(i.TEXTURE_2D,X,Dt,mt,Lt,gt);y.generateMipmaps=!1}else if(Nt){if(ae){const X=It(tt);e.texStorage2D(i.TEXTURE_2D,ct,Dt,X.width,X.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Lt,tt)}else e.texImage2D(i.TEXTURE_2D,0,Dt,mt,Lt,tt);m(y)&&p(K),Mt.__version=j.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Y(C,y,B){if(y.image.length!==6)return;const K=Ft(C,y),Q=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+B);const j=n.get(Q);if(Q.version!==j.__version||K===!0){e.activeTexture(i.TEXTURE0+B);const Mt=jt.getPrimaries(jt.workingColorSpace),st=y.colorSpace===$n?null:jt.getPrimaries(y.colorSpace),ft=y.colorSpace===$n||Mt===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const $t=y.isCompressedTexture||y.image[0].isCompressedTexture,tt=y.image[0]&&y.image[0].isDataTexture,mt=[];for(let Z=0;Z<6;Z++)!$t&&!tt?mt[Z]=_(y.image[Z],!0,s.maxCubemapSize):mt[Z]=tt?y.image[Z].image:y.image[Z],mt[Z]=le(y,mt[Z]);const Lt=mt[0],Dt=r.convert(y.format,y.colorSpace),gt=r.convert(y.type),kt=w(y.internalFormat,Dt,gt,y.colorSpace),Nt=y.isVideoTexture!==!0,ae=j.__version===void 0||K===!0,N=Q.dataReady;let ct=b(y,Lt);pt(i.TEXTURE_CUBE_MAP,y);let X;if($t){Nt&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,kt,Lt.width,Lt.height);for(let Z=0;Z<6;Z++){X=mt[Z].mipmaps;for(let at=0;at<X.length;at++){const ht=X[at];y.format!==dn?Dt!==null?Nt?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,at,0,0,ht.width,ht.height,Dt,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,at,kt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,at,0,0,ht.width,ht.height,Dt,gt,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,at,kt,ht.width,ht.height,0,Dt,gt,ht.data)}}}else{if(X=y.mipmaps,Nt&&ae){X.length>0&&ct++;const Z=It(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,kt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(tt){Nt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,mt[Z].width,mt[Z].height,Dt,gt,mt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,kt,mt[Z].width,mt[Z].height,0,Dt,gt,mt[Z].data);for(let at=0;at<X.length;at++){const Vt=X[at].image[Z].image;Nt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,at+1,0,0,Vt.width,Vt.height,Dt,gt,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,at+1,kt,Vt.width,Vt.height,0,Dt,gt,Vt.data)}}else{Nt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Dt,gt,mt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,kt,Dt,gt,mt[Z]);for(let at=0;at<X.length;at++){const ht=X[at];Nt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,at+1,0,0,Dt,gt,ht.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,at+1,kt,Dt,gt,ht.image[Z])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),j.__version=Q.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function J(C,y,B,K,Q,j){const Mt=r.convert(B.format,B.colorSpace),st=r.convert(B.type),ft=w(B.internalFormat,Mt,st,B.colorSpace);if(!n.get(y).__hasExternalTextures){const tt=Math.max(1,y.width>>j),mt=Math.max(1,y.height>>j);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,j,ft,tt,mt,y.depth,0,Mt,st,null):e.texImage2D(Q,j,ft,tt,mt,0,Mt,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Xt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Q,n.get(B).__webglTexture,0,Bt(y)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,Q,n.get(B).__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(C,y,B){if(i.bindRenderbuffer(i.RENDERBUFFER,C),y.depthBuffer){const K=y.depthTexture,Q=K&&K.isDepthTexture?K.type:null,j=M(y.stencilBuffer,Q),Mt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=Bt(y);Xt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,j,y.width,y.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,j,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,j,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,C)}else{const K=y.textures;for(let Q=0;Q<K.length;Q++){const j=K[Q],Mt=r.convert(j.format,j.colorSpace),st=r.convert(j.type),ft=w(j.internalFormat,Mt,st,j.colorSpace),$t=Bt(y);B&&Xt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,ft,y.width,y.height):Xt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t,ft,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ft,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function dt(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),z(y.depthTexture,0);const K=n.get(y.depthTexture).__webglTexture,Q=Bt(y);if(y.depthTexture.format===Yi)Xt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(y.depthTexture.format===es)Xt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function At(C){const y=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=K}if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");dt(y.__webglFramebuffer,C)}else if(B){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=i.createRenderbuffer(),vt(y.__webglDepthbuffer[K],C,!1);else{const Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),vt(y.__webglDepthbuffer,C,!1);else{const K=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(C,y,B){const K=n.get(C);y!==void 0&&J(K.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&At(C)}function zt(C){const y=C.texture,B=n.get(C),K=n.get(y);C.addEventListener("dispose",R);const Q=C.textures,j=C.isWebGLCubeRenderTarget===!0,Mt=Q.length>1;if(Mt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=y.version,a.memory.textures++),j){B.__webglFramebuffer=[];for(let st=0;st<6;st++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[st]=[];for(let ft=0;ft<y.mipmaps.length;ft++)B.__webglFramebuffer[st][ft]=i.createFramebuffer()}else B.__webglFramebuffer[st]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let st=0;st<y.mipmaps.length;st++)B.__webglFramebuffer[st]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let st=0,ft=Q.length;st<ft;st++){const $t=n.get(Q[st]);$t.__webglTexture===void 0&&($t.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Xt(C)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let st=0;st<Q.length;st++){const ft=Q[st];B.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[st]);const $t=r.convert(ft.format,ft.colorSpace),tt=r.convert(ft.type),mt=w(ft.internalFormat,$t,tt,ft.colorSpace,C.isXRRenderTarget===!0),Lt=Bt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,mt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,B.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),vt(B.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),pt(i.TEXTURE_CUBE_MAP,y);for(let st=0;st<6;st++)if(y.mipmaps&&y.mipmaps.length>0)for(let ft=0;ft<y.mipmaps.length;ft++)J(B.__webglFramebuffer[st][ft],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,ft);else J(B.__webglFramebuffer[st],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let st=0,ft=Q.length;st<ft;st++){const $t=Q[st],tt=n.get($t);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),pt(i.TEXTURE_2D,$t),J(B.__webglFramebuffer,C,$t,i.COLOR_ATTACHMENT0+st,i.TEXTURE_2D,0),m($t)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(st=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,K.__webglTexture),pt(st,y),y.mipmaps&&y.mipmaps.length>0)for(let ft=0;ft<y.mipmaps.length;ft++)J(B.__webglFramebuffer[ft],C,y,i.COLOR_ATTACHMENT0,st,ft);else J(B.__webglFramebuffer,C,y,i.COLOR_ATTACHMENT0,st,0);m(y)&&p(st),e.unbindTexture()}C.depthBuffer&&At(C)}function te(C){const y=C.textures;for(let B=0,K=y.length;B<K;B++){const Q=y[B];if(m(Q)){const j=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Mt=n.get(Q).__webglTexture;e.bindTexture(j,Mt),p(j),e.unbindTexture()}}}const Gt=[],D=[];function qe(C){if(C.samples>0){if(Xt(C)===!1){const y=C.textures,B=C.width,K=C.height;let Q=i.COLOR_BUFFER_BIT;const j=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(C),st=y.length>1;if(st)for(let ft=0;ft<y.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let ft=0;ft<y.length;ft++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[ft]);const $t=n.get(y[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$t,0)}i.blitFramebuffer(0,0,B,K,0,0,B,K,Q,i.NEAREST),l===!0&&(Gt.length=0,D.length=0,Gt.push(i.COLOR_ATTACHMENT0+ft),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Gt.push(j),D.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Gt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let ft=0;ft<y.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[ft]);const $t=n.get(y[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,$t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Bt(C){return Math.min(s.maxSamples,C.samples)}function Xt(C){const y=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Pt(C){const y=a.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function le(C,y){const B=C.colorSpace,K=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==jn&&B!==$n&&(jt.getTransfer(B)===oe?(K!==dn||Q!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),y}function It(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=x,this.setTexture2D=z,this.setTexture2DArray=q,this.setTexture3D=G,this.setTextureCube=$,this.rebindTextures=Et,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Xt}function wg(i,t){function e(n,s=$n){let r;const a=jt.getTransfer(s);if(n===Un)return i.UNSIGNED_BYTE;if(n===bo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Tc)return i.BYTE;if(n===Ac)return i.SHORT;if(n===Ms)return i.UNSIGNED_SHORT;if(n===So)return i.INT;if(n===fi)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===Ln)return i.HALF_FLOAT;if(n===Rc)return i.ALPHA;if(n===Pc)return i.RGB;if(n===dn)return i.RGBA;if(n===Lc)return i.LUMINANCE;if(n===Dc)return i.LUMINANCE_ALPHA;if(n===Yi)return i.DEPTH_COMPONENT;if(n===es)return i.DEPTH_STENCIL;if(n===Ic)return i.RED;if(n===Eo)return i.RED_INTEGER;if(n===Nc)return i.RG;if(n===To)return i.RG_INTEGER;if(n===Ao)return i.RGBA_INTEGER;if(n===ur||n===fr||n===pr||n===mr)if(a===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ga||n===Va||n===Wa||n===Xa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Va)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$a||n===qa||n===Ya)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$a||n===qa)return a===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ya)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ja||n===Ka||n===Za||n===Qa||n===Ja||n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ja)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ka)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Za)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ja)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===to)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===eo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===no)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===io)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===so)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ro)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ao)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gr||n===co||n===ho)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===gr)return a===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===co)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ho)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uc||n===uo||n===fo||n===po)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===gr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===po)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Eg extends Me{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class qt extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tg={type:"move"};class ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Ag=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cg=`
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

}`;class Rg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Be,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ie({vertexShader:Ag,fragmentShader:Cg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new bt(new vn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Pg extends _i{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const _=new Rg,m=e.getContextAttributes();let p=null,w=null;const M=[],b=[],P=new ut;let R=null;const T=new Me;T.layers.enable(1),T.viewport=new Wt;const A=new Me;A.layers.enable(2),A.viewport=new Wt;const F=[T,A],v=new Eg;v.layers.enable(1),v.layers.enable(2);let x=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=M[Y];return J===void 0&&(J=new ua,M[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=M[Y];return J===void 0&&(J=new ua,M[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=M[Y];return J===void 0&&(J=new ua,M[Y]=J),J.getHandSpace()};function I(Y){const J=b.indexOf(Y.inputSource);if(J===-1)return;const vt=M[J];vt!==void 0&&(vt.update(Y.inputSource,Y.frame,c||a),vt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function z(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",q);for(let Y=0;Y<M.length;Y++){const J=b[Y];J!==null&&(b[Y]=null,M[Y].disconnect(J))}x=null,L=null,_.reset(),t.setRenderTarget(p),f=null,u=null,d=null,s=null,w=null,Ht.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",z),s.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new un(f.framebufferWidth,f.framebufferHeight,{format:dn,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,vt=null,dt=null;m.depth&&(dt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=m.stencil?es:Yi,vt=m.stencil?ts:fi);const At={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(At),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),w=new un(u.textureWidth,u.textureHeight,{format:dn,type:Un,depthTexture:new Kc(u.textureWidth,u.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ht.setContext(s),Ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(Y){for(let J=0;J<Y.removed.length;J++){const vt=Y.removed[J],dt=b.indexOf(vt);dt>=0&&(b[dt]=null,M[dt].disconnect(vt))}for(let J=0;J<Y.added.length;J++){const vt=Y.added[J];let dt=b.indexOf(vt);if(dt===-1){for(let Et=0;Et<M.length;Et++)if(Et>=b.length){b.push(vt),dt=Et;break}else if(b[Et]===null){b[Et]=vt,dt=Et;break}if(dt===-1)break}const At=M[dt];At&&At.connect(vt)}}const G=new E,$=new E;function H(Y,J,vt){G.setFromMatrixPosition(J.matrixWorld),$.setFromMatrixPosition(vt.matrixWorld);const dt=G.distanceTo($),At=J.projectionMatrix.elements,Et=vt.projectionMatrix.elements,zt=At[14]/(At[10]-1),te=At[14]/(At[10]+1),Gt=(At[9]+1)/At[5],D=(At[9]-1)/At[5],qe=(At[8]-1)/At[0],Bt=(Et[8]+1)/Et[0],Xt=zt*qe,Pt=zt*Bt,le=dt/(-qe+Bt),It=le*-qe;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(It),Y.translateZ(le),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),At[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const C=zt+le,y=te+le,B=Xt-It,K=Pt+(dt-It),Q=Gt*te/y*C,j=D*te/y*C;Y.projectionMatrix.makePerspective(B,K,Q,j,C,y),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function nt(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let J=Y.near,vt=Y.far;_.texture!==null&&(_.depthNear>0&&(J=_.depthNear),_.depthFar>0&&(vt=_.depthFar)),v.near=A.near=T.near=J,v.far=A.far=T.far=vt,(x!==v.near||L!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),x=v.near,L=v.far);const dt=Y.parent,At=v.cameras;nt(v,dt);for(let Et=0;Et<At.length;Et++)nt(At[Et],dt);At.length===2?H(v,T,A):v.projectionMatrix.copy(T.projectionMatrix),rt(Y,v,dt)};function rt(Y,J,vt){vt===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(vt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ss*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let pt=null;function Ft(Y,J){if(h=J.getViewerPose(c||a),g=J,h!==null){const vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(w,f.framebuffer),t.setRenderTarget(w));let dt=!1;vt.length!==v.cameras.length&&(v.cameras.length=0,dt=!0);for(let Et=0;Et<vt.length;Et++){const zt=vt[Et];let te=null;if(f!==null)te=f.getViewport(zt);else{const D=d.getViewSubImage(u,zt);te=D.viewport,Et===0&&(t.setRenderTargetTextures(w,D.colorTexture,u.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(w))}let Gt=F[Et];Gt===void 0&&(Gt=new Me,Gt.layers.enable(Et),Gt.viewport=new Wt,F[Et]=Gt),Gt.matrix.fromArray(zt.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(zt.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(te.x,te.y,te.width,te.height),Et===0&&(v.matrix.copy(Gt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),dt===!0&&v.cameras.push(Gt)}const At=s.enabledFeatures;if(At&&At.includes("depth-sensing")){const Et=d.getDepthInformation(vt[0]);Et&&Et.isValid&&Et.texture&&_.init(t,Et,s.renderState)}}for(let vt=0;vt<M.length;vt++){const dt=b[vt],At=M[vt];dt!==null&&At!==void 0&&At.update(dt,J,c||a)}pt&&pt(Y,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const Ht=new jc;Ht.setAnimationLoop(Ft),this.setAnimationLoop=function(Y){pt=Y},this.dispose=function(){}}}const ii=new xn,Lg=new re;function Dg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,$c(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,M,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=t.get(p),M=w.envMap,b=w.envMapRotation;M&&(m.envMap.value=M,ii.copy(b),ii.x*=-1,ii.y*=-1,ii.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),m.envMapRotation.value.setFromMatrix4(Lg.makeRotationFromEuler(ii)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ig(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,M){const b=M.program;n.uniformBlockBinding(w,b)}function c(w,M){let b=s[w.id];b===void 0&&(g(w),b=h(w),s[w.id]=b,w.addEventListener("dispose",m));const P=M.program;n.updateUBOMapping(w,P);const R=t.render.frame;r[w.id]!==R&&(u(w),r[w.id]=R)}function h(w){const M=d();w.__bindingPointIndex=M;const b=i.createBuffer(),P=w.__size,R=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,P,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,b),b}function d(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){const M=s[w.id],b=w.uniforms,P=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let R=0,T=b.length;R<T;R++){const A=Array.isArray(b[R])?b[R]:[b[R]];for(let F=0,v=A.length;F<v;F++){const x=A[F];if(f(x,R,F,P)===!0){const L=x.__offset,I=Array.isArray(x.value)?x.value:[x.value];let z=0;for(let q=0;q<I.length;q++){const G=I[q],$=_(G);typeof G=="number"||typeof G=="boolean"?(x.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,L+z,x.__data)):G.isMatrix3?(x.__data[0]=G.elements[0],x.__data[1]=G.elements[1],x.__data[2]=G.elements[2],x.__data[3]=0,x.__data[4]=G.elements[3],x.__data[5]=G.elements[4],x.__data[6]=G.elements[5],x.__data[7]=0,x.__data[8]=G.elements[6],x.__data[9]=G.elements[7],x.__data[10]=G.elements[8],x.__data[11]=0):(G.toArray(x.__data,z),z+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,x.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(w,M,b,P){const R=w.value,T=M+"_"+b;if(P[T]===void 0)return typeof R=="number"||typeof R=="boolean"?P[T]=R:P[T]=R.clone(),!0;{const A=P[T];if(typeof R=="number"||typeof R=="boolean"){if(A!==R)return P[T]=R,!0}else if(A.equals(R)===!1)return A.copy(R),!0}return!1}function g(w){const M=w.uniforms;let b=0;const P=16;for(let T=0,A=M.length;T<A;T++){const F=Array.isArray(M[T])?M[T]:[M[T]];for(let v=0,x=F.length;v<x;v++){const L=F[v],I=Array.isArray(L.value)?L.value:[L.value];for(let z=0,q=I.length;z<q;z++){const G=I[z],$=_(G),H=b%P,nt=H%$.boundary,rt=H+nt;b+=nt,rt!==0&&P-rt<$.storage&&(b+=P-rt),L.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=$.storage}}}const R=b%P;return R>0&&(b+=P-R),w.__size=b,w.__cache={},this}function _(w){const M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function m(w){const M=w.target;M.removeEventListener("dispose",m);const b=a.indexOf(M.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Ng{constructor(t={}){const{canvas:e=Md(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=cn,this.toneMapping=qn,this.toneMappingExposure=1;const M=this;let b=!1,P=0,R=0,T=null,A=-1,F=null;const v=new Wt,x=new Wt;let L=null;const I=new lt(0);let z=0,q=e.width,G=e.height,$=1,H=null,nt=null;const rt=new Wt(0,0,q,G),pt=new Wt(0,0,q,G);let Ft=!1;const Ht=new Lo;let Y=!1,J=!1;const vt=new re,dt=new re,At=new E,Et=new Wt,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function Gt(){return T===null?$:1}let D=n;function qe(S,U){return e.getContext(S,U)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yo}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",at,!1),e.addEventListener("webglcontextcreationerror",ht,!1),D===null){const U="webgl2";if(D=qe(U,S),D===null)throw qe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Bt,Xt,Pt,le,It,C,y,B,K,Q,j,Mt,st,ft,$t,tt,mt,Lt,Dt,gt,kt,Nt,ae,N;function ct(){Bt=new Bp(D),Bt.init(),Nt=new wg(D,Bt),Xt=new Ip(D,Bt,t,Nt),Pt=new Mg(D),Xt.reverseDepthBuffer&&Pt.buffers.depth.setReversed(!0),le=new Gp(D),It=new ag,C=new bg(D,Bt,Pt,It,Xt,Nt,le),y=new Up(M),B=new zp(M),K=new Yd(D),ae=new Lp(D,K),Q=new kp(D,K,le,ae),j=new Wp(D,Q,K,le),Dt=new Vp(D,Xt,C),tt=new Np(It),Mt=new rg(M,y,B,Bt,Xt,ae,tt),st=new Dg(M,It),ft=new lg,$t=new pg(Bt),Lt=new Pp(M,y,B,Pt,j,u,l),mt=new xg(M,j,Xt),N=new Ig(D,le,Xt,Pt),gt=new Dp(D,Bt,le),kt=new Hp(D,Bt,le),le.programs=Mt.programs,M.capabilities=Xt,M.extensions=Bt,M.properties=It,M.renderLists=ft,M.shadowMap=mt,M.state=Pt,M.info=le}ct();const X=new Pg(M,D);this.xr=X,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=Bt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Bt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(S){S!==void 0&&($=S,this.setSize(q,G,!1))},this.getSize=function(S){return S.set(q,G)},this.setSize=function(S,U,k=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=S,G=U,e.width=Math.floor(S*$),e.height=Math.floor(U*$),k===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(q*$,G*$).floor()},this.setDrawingBufferSize=function(S,U,k){q=S,G=U,$=k,e.width=Math.floor(S*k),e.height=Math.floor(U*k),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(v)},this.getViewport=function(S){return S.copy(rt)},this.setViewport=function(S,U,k,V){S.isVector4?rt.set(S.x,S.y,S.z,S.w):rt.set(S,U,k,V),Pt.viewport(v.copy(rt).multiplyScalar($).round())},this.getScissor=function(S){return S.copy(pt)},this.setScissor=function(S,U,k,V){S.isVector4?pt.set(S.x,S.y,S.z,S.w):pt.set(S,U,k,V),Pt.scissor(x.copy(pt).multiplyScalar($).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(S){Pt.setScissorTest(Ft=S)},this.setOpaqueSort=function(S){H=S},this.setTransparentSort=function(S){nt=S},this.getClearColor=function(S){return S.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(S=!0,U=!0,k=!0){let V=0;if(S){let O=!1;if(T!==null){const et=T.texture.format;O=et===Ao||et===To||et===Eo}if(O){const et=T.texture.type,ot=et===Un||et===fi||et===Ms||et===ts||et===bo||et===wo,_t=Lt.getClearColor(),xt=Lt.getClearAlpha(),Ct=_t.r,Rt=_t.g,St=_t.b;ot?(f[0]=Ct,f[1]=Rt,f[2]=St,f[3]=xt,D.clearBufferuiv(D.COLOR,0,f)):(g[0]=Ct,g[1]=Rt,g[2]=St,g[3]=xt,D.clearBufferiv(D.COLOR,0,g))}else V|=D.COLOR_BUFFER_BIT}U&&(V|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),k&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",at,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),ft.dispose(),$t.dispose(),It.dispose(),y.dispose(),B.dispose(),j.dispose(),ae.dispose(),N.dispose(),Mt.dispose(),X.dispose(),X.removeEventListener("sessionstart",Vo),X.removeEventListener("sessionend",Wo),Zn.stop()};function Z(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function at(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const S=le.autoReset,U=mt.enabled,k=mt.autoUpdate,V=mt.needsUpdate,O=mt.type;ct(),le.autoReset=S,mt.enabled=U,mt.autoUpdate=k,mt.needsUpdate=V,mt.type=O}function ht(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Vt(S){const U=S.target;U.removeEventListener("dispose",Vt),pe(U)}function pe(S){ke(S),It.remove(S)}function ke(S){const U=It.get(S).programs;U!==void 0&&(U.forEach(function(k){Mt.releaseProgram(k)}),S.isShaderMaterial&&Mt.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,k,V,O,et){U===null&&(U=zt);const ot=O.isMesh&&O.matrixWorld.determinant()<0,_t=yh(S,U,k,V,O);Pt.setMaterial(V,ot);let xt=k.index,Ct=1;if(V.wireframe===!0){if(xt=Q.getWireframeAttribute(k),xt===void 0)return;Ct=2}const Rt=k.drawRange,St=k.attributes.position;let Qt=Rt.start*Ct,ce=(Rt.start+Rt.count)*Ct;et!==null&&(Qt=Math.max(Qt,et.start*Ct),ce=Math.min(ce,(et.start+et.count)*Ct)),xt!==null?(Qt=Math.max(Qt,0),ce=Math.min(ce,xt.count)):St!=null&&(Qt=Math.max(Qt,0),ce=Math.min(ce,St.count));const de=ce-Qt;if(de<0||de===1/0)return;ae.setup(O,V,_t,k,xt);let Ye,Kt=gt;if(xt!==null&&(Ye=K.get(xt),Kt=kt,Kt.setIndex(Ye)),O.isMesh)V.wireframe===!0?(Pt.setLineWidth(V.wireframeLinewidth*Gt()),Kt.setMode(D.LINES)):Kt.setMode(D.TRIANGLES);else if(O.isLine){let wt=V.linewidth;wt===void 0&&(wt=1),Pt.setLineWidth(wt*Gt()),O.isLineSegments?Kt.setMode(D.LINES):O.isLineLoop?Kt.setMode(D.LINE_LOOP):Kt.setMode(D.LINE_STRIP)}else O.isPoints?Kt.setMode(D.POINTS):O.isSprite&&Kt.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Kt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const wt=O._multiDrawStarts,Te=O._multiDrawCounts,Zt=O._multiDrawCount,rn=xt?K.get(xt).bytesPerElement:1,bi=It.get(V).currentProgram.getUniforms();for(let je=0;je<Zt;je++)bi.setValue(D,"_gl_DrawID",je),Kt.render(wt[je]/rn,Te[je])}else if(O.isInstancedMesh)Kt.renderInstances(Qt,de,O.count);else if(k.isInstancedBufferGeometry){const wt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Te=Math.min(k.instanceCount,wt);Kt.renderInstances(Qt,de,Te)}else Kt.render(Qt,de)};function Yt(S,U,k){S.transparent===!0&&S.side===We&&S.forceSinglePass===!1?(S.side=Xe,S.needsUpdate=!0,Rs(S,U,k),S.side=Yn,S.needsUpdate=!0,Rs(S,U,k),S.side=We):Rs(S,U,k)}this.compile=function(S,U,k=null){k===null&&(k=S),m=$t.get(k),m.init(U),w.push(m),k.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),S!==k&&S.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const V=new Set;return S.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const et=O.material;if(et)if(Array.isArray(et))for(let ot=0;ot<et.length;ot++){const _t=et[ot];Yt(_t,k,O),V.add(_t)}else Yt(et,k,O),V.add(et)}),w.pop(),m=null,V},this.compileAsync=function(S,U,k=null){const V=this.compile(S,U,k);return new Promise(O=>{function et(){if(V.forEach(function(ot){It.get(ot).currentProgram.isReady()&&V.delete(ot)}),V.size===0){O(S);return}setTimeout(et,10)}Bt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let He=null;function Mn(S){He&&He(S)}function Vo(){Zn.stop()}function Wo(){Zn.start()}const Zn=new jc;Zn.setAnimationLoop(Mn),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(S){He=S,X.setAnimationLoop(S),S===null?Zn.stop():Zn.start()},X.addEventListener("sessionstart",Vo),X.addEventListener("sessionend",Wo),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,U,T),m=$t.get(S,w.length),m.init(U),w.push(m),dt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ht.setFromProjectionMatrix(dt),J=this.localClippingEnabled,Y=tt.init(this.clippingPlanes,J),_=ft.get(S,p.length),_.init(),p.push(_),X.enabled===!0&&X.isPresenting===!0){const et=M.xr.getDepthSensingMesh();et!==null&&Nr(et,U,-1/0,M.sortObjects)}Nr(S,U,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(H,nt),te=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,te&&Lt.addToRenderList(_,S),this.info.render.frame++,Y===!0&&tt.beginShadows();const k=m.state.shadowsArray;mt.render(k,S,U),Y===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=_.opaque,O=_.transmissive;if(m.setupLights(),U.isArrayCamera){const et=U.cameras;if(O.length>0)for(let ot=0,_t=et.length;ot<_t;ot++){const xt=et[ot];$o(V,O,S,xt)}te&&Lt.render(S);for(let ot=0,_t=et.length;ot<_t;ot++){const xt=et[ot];Xo(_,S,xt,xt.viewport)}}else O.length>0&&$o(V,O,S,U),te&&Lt.render(S),Xo(_,S,U);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),S.isScene===!0&&S.onAfterRender(M,S,U),ae.resetDefaultState(),A=-1,F=null,w.pop(),w.length>0?(m=w[w.length-1],Y===!0&&tt.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Nr(S,U,k,V){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Ht.intersectsSprite(S)){V&&Et.setFromMatrixPosition(S.matrixWorld).applyMatrix4(dt);const ot=j.update(S),_t=S.material;_t.visible&&_.push(S,ot,_t,k,Et.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Ht.intersectsObject(S))){const ot=j.update(S),_t=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Et.copy(S.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),Et.copy(ot.boundingSphere.center)),Et.applyMatrix4(S.matrixWorld).applyMatrix4(dt)),Array.isArray(_t)){const xt=ot.groups;for(let Ct=0,Rt=xt.length;Ct<Rt;Ct++){const St=xt[Ct],Qt=_t[St.materialIndex];Qt&&Qt.visible&&_.push(S,ot,Qt,k,Et.z,St)}}else _t.visible&&_.push(S,ot,_t,k,Et.z,null)}}const et=S.children;for(let ot=0,_t=et.length;ot<_t;ot++)Nr(et[ot],U,k,V)}function Xo(S,U,k,V){const O=S.opaque,et=S.transmissive,ot=S.transparent;m.setupLightsView(k),Y===!0&&tt.setGlobalState(M.clippingPlanes,k),V&&Pt.viewport(v.copy(V)),O.length>0&&Cs(O,U,k),et.length>0&&Cs(et,U,k),ot.length>0&&Cs(ot,U,k),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function $o(S,U,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new un(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?Ln:Un,minFilter:hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const et=m.state.transmissionRenderTarget[V.id],ot=V.viewport||v;et.setSize(ot.z,ot.w);const _t=M.getRenderTarget();M.setRenderTarget(et),M.getClearColor(I),z=M.getClearAlpha(),z<1&&M.setClearColor(16777215,.5),M.clear(),te&&Lt.render(k);const xt=M.toneMapping;M.toneMapping=qn;const Ct=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),Y===!0&&tt.setGlobalState(M.clippingPlanes,V),Cs(S,k,V),C.updateMultisampleRenderTarget(et),C.updateRenderTargetMipmap(et),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let St=0,Qt=U.length;St<Qt;St++){const ce=U[St],de=ce.object,Ye=ce.geometry,Kt=ce.material,wt=ce.group;if(Kt.side===We&&de.layers.test(V.layers)){const Te=Kt.side;Kt.side=Xe,Kt.needsUpdate=!0,qo(de,k,V,Ye,Kt,wt),Kt.side=Te,Kt.needsUpdate=!0,Rt=!0}}Rt===!0&&(C.updateMultisampleRenderTarget(et),C.updateRenderTargetMipmap(et))}M.setRenderTarget(_t),M.setClearColor(I,z),Ct!==void 0&&(V.viewport=Ct),M.toneMapping=xt}function Cs(S,U,k){const V=U.isScene===!0?U.overrideMaterial:null;for(let O=0,et=S.length;O<et;O++){const ot=S[O],_t=ot.object,xt=ot.geometry,Ct=V===null?ot.material:V,Rt=ot.group;_t.layers.test(k.layers)&&qo(_t,U,k,xt,Ct,Rt)}}function qo(S,U,k,V,O,et){S.onBeforeRender(M,U,k,V,O,et),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(M,U,k,V,S,et),O.transparent===!0&&O.side===We&&O.forceSinglePass===!1?(O.side=Xe,O.needsUpdate=!0,M.renderBufferDirect(k,U,V,O,S,et),O.side=Yn,O.needsUpdate=!0,M.renderBufferDirect(k,U,V,O,S,et),O.side=We):M.renderBufferDirect(k,U,V,O,S,et),S.onAfterRender(M,U,k,V,O,et)}function Rs(S,U,k){U.isScene!==!0&&(U=zt);const V=It.get(S),O=m.state.lights,et=m.state.shadowsArray,ot=O.state.version,_t=Mt.getParameters(S,O.state,et,U,k),xt=Mt.getProgramCacheKey(_t);let Ct=V.programs;V.environment=S.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(S.isMeshStandardMaterial?B:y).get(S.envMap||V.environment),V.envMapRotation=V.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Ct===void 0&&(S.addEventListener("dispose",Vt),Ct=new Map,V.programs=Ct);let Rt=Ct.get(xt);if(Rt!==void 0){if(V.currentProgram===Rt&&V.lightsStateVersion===ot)return jo(S,_t),Rt}else _t.uniforms=Mt.getUniforms(S),S.onBeforeCompile(_t,M),Rt=Mt.acquireProgram(_t,xt),Ct.set(xt,Rt),V.uniforms=_t.uniforms;const St=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(St.clippingPlanes=tt.uniform),jo(S,_t),V.needsLights=Sh(S),V.lightsStateVersion=ot,V.needsLights&&(St.ambientLightColor.value=O.state.ambient,St.lightProbe.value=O.state.probe,St.directionalLights.value=O.state.directional,St.directionalLightShadows.value=O.state.directionalShadow,St.spotLights.value=O.state.spot,St.spotLightShadows.value=O.state.spotShadow,St.rectAreaLights.value=O.state.rectArea,St.ltc_1.value=O.state.rectAreaLTC1,St.ltc_2.value=O.state.rectAreaLTC2,St.pointLights.value=O.state.point,St.pointLightShadows.value=O.state.pointShadow,St.hemisphereLights.value=O.state.hemi,St.directionalShadowMap.value=O.state.directionalShadowMap,St.directionalShadowMatrix.value=O.state.directionalShadowMatrix,St.spotShadowMap.value=O.state.spotShadowMap,St.spotLightMatrix.value=O.state.spotLightMatrix,St.spotLightMap.value=O.state.spotLightMap,St.pointShadowMap.value=O.state.pointShadowMap,St.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=Rt,V.uniformsList=null,Rt}function Yo(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=_r.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function jo(S,U){const k=It.get(S);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function yh(S,U,k,V,O){U.isScene!==!0&&(U=zt),C.resetTextureUnits();const et=U.fog,ot=V.isMeshStandardMaterial?U.environment:null,_t=T===null?M.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:jn,xt=(V.isMeshStandardMaterial?B:y).get(V.envMap||ot),Ct=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Rt=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),St=!!k.morphAttributes.position,Qt=!!k.morphAttributes.normal,ce=!!k.morphAttributes.color;let de=qn;V.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(de=M.toneMapping);const Ye=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Kt=Ye!==void 0?Ye.length:0,wt=It.get(V),Te=m.state.lights;if(Y===!0&&(J===!0||S!==F)){const tn=S===F&&V.id===A;tt.setState(V,S,tn)}let Zt=!1;V.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==Te.state.version||wt.outputColorSpace!==_t||O.isBatchedMesh&&wt.batching===!1||!O.isBatchedMesh&&wt.batching===!0||O.isBatchedMesh&&wt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&wt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&wt.instancing===!1||!O.isInstancedMesh&&wt.instancing===!0||O.isSkinnedMesh&&wt.skinning===!1||!O.isSkinnedMesh&&wt.skinning===!0||O.isInstancedMesh&&wt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&wt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&wt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&wt.instancingMorph===!1&&O.morphTexture!==null||wt.envMap!==xt||V.fog===!0&&wt.fog!==et||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==tt.numPlanes||wt.numIntersection!==tt.numIntersection)||wt.vertexAlphas!==Ct||wt.vertexTangents!==Rt||wt.morphTargets!==St||wt.morphNormals!==Qt||wt.morphColors!==ce||wt.toneMapping!==de||wt.morphTargetsCount!==Kt)&&(Zt=!0):(Zt=!0,wt.__version=V.version);let rn=wt.currentProgram;Zt===!0&&(rn=Rs(V,U,O));let bi=!1,je=!1,Ur=!1;const fe=rn.getUniforms(),Fn=wt.uniforms;if(Pt.useProgram(rn.program)&&(bi=!0,je=!0,Ur=!0),V.id!==A&&(A=V.id,je=!0),bi||F!==S){Xt.reverseDepthBuffer?(vt.copy(S.projectionMatrix),bd(vt),wd(vt),fe.setValue(D,"projectionMatrix",vt)):fe.setValue(D,"projectionMatrix",S.projectionMatrix),fe.setValue(D,"viewMatrix",S.matrixWorldInverse);const tn=fe.map.cameraPosition;tn!==void 0&&tn.setValue(D,At.setFromMatrixPosition(S.matrixWorld)),Xt.logarithmicDepthBuffer&&fe.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&fe.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),F!==S&&(F=S,je=!0,Ur=!0)}if(O.isSkinnedMesh){fe.setOptional(D,O,"bindMatrix"),fe.setOptional(D,O,"bindMatrixInverse");const tn=O.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),fe.setValue(D,"boneTexture",tn.boneTexture,C))}O.isBatchedMesh&&(fe.setOptional(D,O,"batchingTexture"),fe.setValue(D,"batchingTexture",O._matricesTexture,C),fe.setOptional(D,O,"batchingIdTexture"),fe.setValue(D,"batchingIdTexture",O._indirectTexture,C),fe.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&fe.setValue(D,"batchingColorTexture",O._colorsTexture,C));const Or=k.morphAttributes;if((Or.position!==void 0||Or.normal!==void 0||Or.color!==void 0)&&Dt.update(O,k,rn),(je||wt.receiveShadow!==O.receiveShadow)&&(wt.receiveShadow=O.receiveShadow,fe.setValue(D,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Fn.envMap.value=xt,Fn.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(Fn.envMapIntensity.value=U.environmentIntensity),je&&(fe.setValue(D,"toneMappingExposure",M.toneMappingExposure),wt.needsLights&&Mh(Fn,Ur),et&&V.fog===!0&&st.refreshFogUniforms(Fn,et),st.refreshMaterialUniforms(Fn,V,$,G,m.state.transmissionRenderTarget[S.id]),_r.upload(D,Yo(wt),Fn,C)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(_r.upload(D,Yo(wt),Fn,C),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&fe.setValue(D,"center",O.center),fe.setValue(D,"modelViewMatrix",O.modelViewMatrix),fe.setValue(D,"normalMatrix",O.normalMatrix),fe.setValue(D,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const tn=V.uniformsGroups;for(let Fr=0,bh=tn.length;Fr<bh;Fr++){const Ko=tn[Fr];N.update(Ko,rn),N.bind(Ko,rn)}}return rn}function Mh(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Sh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(S,U,k){It.get(S.texture).__webglTexture=U,It.get(S.depthTexture).__webglTexture=k;const V=It.get(S);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=k===void 0,V.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){const k=It.get(S);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,k=0){T=S,P=U,R=k;let V=!0,O=null,et=!1,ot=!1;if(S){const xt=It.get(S);if(xt.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(D.FRAMEBUFFER,null),V=!1;else if(xt.__webglFramebuffer===void 0)C.setupRenderTarget(S);else if(xt.__hasExternalTextures)C.rebindTextures(S,It.get(S.texture).__webglTexture,It.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const St=S.depthTexture;if(xt.__boundDepthTexture!==St){if(St!==null&&It.has(St)&&(S.width!==St.image.width||S.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(S)}}const Ct=S.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(ot=!0);const Rt=It.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Rt[U])?O=Rt[U][k]:O=Rt[U],et=!0):S.samples>0&&C.useMultisampledRTT(S)===!1?O=It.get(S).__webglMultisampledFramebuffer:Array.isArray(Rt)?O=Rt[k]:O=Rt,v.copy(S.viewport),x.copy(S.scissor),L=S.scissorTest}else v.copy(rt).multiplyScalar($).floor(),x.copy(pt).multiplyScalar($).floor(),L=Ft;if(Pt.bindFramebuffer(D.FRAMEBUFFER,O)&&V&&Pt.drawBuffers(S,O),Pt.viewport(v),Pt.scissor(x),Pt.setScissorTest(L),et){const xt=It.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,xt.__webglTexture,k)}else if(ot){const xt=It.get(S.texture),Ct=U||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,xt.__webglTexture,k||0,Ct)}A=-1},this.readRenderTargetPixels=function(S,U,k,V,O,et,ot){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=It.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ot!==void 0&&(_t=_t[ot]),_t){Pt.bindFramebuffer(D.FRAMEBUFFER,_t);try{const xt=S.texture,Ct=xt.format,Rt=xt.type;if(!Xt.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-V&&k>=0&&k<=S.height-O&&D.readPixels(U,k,V,O,Nt.convert(Ct),Nt.convert(Rt),et)}finally{const xt=T!==null?It.get(T).__webglFramebuffer:null;Pt.bindFramebuffer(D.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(S,U,k,V,O,et,ot){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=It.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ot!==void 0&&(_t=_t[ot]),_t){const xt=S.texture,Ct=xt.format,Rt=xt.type;if(!Xt.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-V&&k>=0&&k<=S.height-O){Pt.bindFramebuffer(D.FRAMEBUFFER,_t);const St=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,St),D.bufferData(D.PIXEL_PACK_BUFFER,et.byteLength,D.STREAM_READ),D.readPixels(U,k,V,O,Nt.convert(Ct),Nt.convert(Rt),0);const Qt=T!==null?It.get(T).__webglFramebuffer:null;Pt.bindFramebuffer(D.FRAMEBUFFER,Qt);const ce=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Sd(D,ce,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,St),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,et),D.deleteBuffer(St),D.deleteSync(ce),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,U=null,k=0){S.isTexture!==!0&&(vr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);const V=Math.pow(2,-k),O=Math.floor(S.image.width*V),et=Math.floor(S.image.height*V),ot=U!==null?U.x:0,_t=U!==null?U.y:0;C.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,k,0,0,ot,_t,O,et),Pt.unbindTexture()},this.copyTextureToTexture=function(S,U,k=null,V=null,O=0){S.isTexture!==!0&&(vr("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,S=arguments[1],U=arguments[2],O=arguments[3]||0,k=null);let et,ot,_t,xt,Ct,Rt;k!==null?(et=k.max.x-k.min.x,ot=k.max.y-k.min.y,_t=k.min.x,xt=k.min.y):(et=S.image.width,ot=S.image.height,_t=0,xt=0),V!==null?(Ct=V.x,Rt=V.y):(Ct=0,Rt=0);const St=Nt.convert(U.format),Qt=Nt.convert(U.type);C.setTexture2D(U,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const ce=D.getParameter(D.UNPACK_ROW_LENGTH),de=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ye=D.getParameter(D.UNPACK_SKIP_PIXELS),Kt=D.getParameter(D.UNPACK_SKIP_ROWS),wt=D.getParameter(D.UNPACK_SKIP_IMAGES),Te=S.isCompressedTexture?S.mipmaps[O]:S.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Te.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Te.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,_t),D.pixelStorei(D.UNPACK_SKIP_ROWS,xt),S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,O,Ct,Rt,et,ot,St,Qt,Te.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,O,Ct,Rt,Te.width,Te.height,St,Te.data):D.texSubImage2D(D.TEXTURE_2D,O,Ct,Rt,et,ot,St,Qt,Te),D.pixelStorei(D.UNPACK_ROW_LENGTH,ce),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,de),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ye),D.pixelStorei(D.UNPACK_SKIP_ROWS,Kt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,wt),O===0&&U.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Pt.unbindTexture()},this.copyTextureToTexture3D=function(S,U,k=null,V=null,O=0){S.isTexture!==!0&&(vr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,V=arguments[1]||null,S=arguments[2],U=arguments[3],O=arguments[4]||0);let et,ot,_t,xt,Ct,Rt,St,Qt,ce;const de=S.isCompressedTexture?S.mipmaps[O]:S.image;k!==null?(et=k.max.x-k.min.x,ot=k.max.y-k.min.y,_t=k.max.z-k.min.z,xt=k.min.x,Ct=k.min.y,Rt=k.min.z):(et=de.width,ot=de.height,_t=de.depth,xt=0,Ct=0,Rt=0),V!==null?(St=V.x,Qt=V.y,ce=V.z):(St=0,Qt=0,ce=0);const Ye=Nt.convert(U.format),Kt=Nt.convert(U.type);let wt;if(U.isData3DTexture)C.setTexture3D(U,0),wt=D.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)C.setTexture2DArray(U,0),wt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const Te=D.getParameter(D.UNPACK_ROW_LENGTH),Zt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),rn=D.getParameter(D.UNPACK_SKIP_PIXELS),bi=D.getParameter(D.UNPACK_SKIP_ROWS),je=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,de.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,de.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ct),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Rt),S.isDataTexture||S.isData3DTexture?D.texSubImage3D(wt,O,St,Qt,ce,et,ot,_t,Ye,Kt,de.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(wt,O,St,Qt,ce,et,ot,_t,Ye,de.data):D.texSubImage3D(wt,O,St,Qt,ce,et,ot,_t,Ye,Kt,de),D.pixelStorei(D.UNPACK_ROW_LENGTH,Te),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Zt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,rn),D.pixelStorei(D.UNPACK_SKIP_ROWS,bi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,je),O===0&&U.generateMipmaps&&D.generateMipmap(wt),Pt.unbindTexture()},this.initRenderTarget=function(S){It.get(S).__webglFramebuffer===void 0&&C.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?C.setTextureCube(S,0):S.isData3DTexture?C.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?C.setTexture2DArray(S,0):C.setTexture2D(S,0),Pt.unbindTexture()},this.resetState=function(){P=0,R=0,T=null,Pt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Co?"display-p3":"srgb",e.unpackColorSpace=jt.workingColorSpace===Pr?"display-p3":"srgb"}}class On{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new lt(t),this.near=e,this.far=n}clone(){return new On(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class yi extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class eh{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=mo,this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ne=new E;class gn{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=hn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=hn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=hn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=hn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=hn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new $e(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new gn(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class nh extends xi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let zi;const us=new E,Bi=new E,ki=new E,Hi=new ut,fs=new ut,ih=new re,Zs=new E,ps=new E,Qs=new E,Wl=new ut,fa=new ut,Xl=new ut;class Ug extends ve{constructor(t=new nh){if(super(),this.isSprite=!0,this.type="Sprite",zi===void 0){zi=new se;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new eh(e,5);zi.setIndex([0,1,2,0,2,3]),zi.setAttribute("position",new gn(n,3,0,!1)),zi.setAttribute("uv",new gn(n,2,3,!1))}this.geometry=zi,this.material=t,this.center=new ut(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Bi.setFromMatrixScale(this.matrixWorld),ih.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ki.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Bi.multiplyScalar(-ki.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Js(Zs.set(-.5,-.5,0),ki,a,Bi,s,r),Js(ps.set(.5,-.5,0),ki,a,Bi,s,r),Js(Qs.set(.5,.5,0),ki,a,Bi,s,r),Wl.set(0,0),fa.set(1,0),Xl.set(1,1);let o=t.ray.intersectTriangle(Zs,ps,Qs,!1,us);if(o===null&&(Js(ps.set(-.5,.5,0),ki,a,Bi,s,r),fa.set(0,1),o=t.ray.intersectTriangle(Zs,Qs,ps,!1,us),o===null))return;const l=t.ray.origin.distanceTo(us);l<t.near||l>t.far||e.push({distance:l,point:us.clone(),uv:Je.getInterpolation(us,Zs,ps,Qs,Wl,fa,Xl,new ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Js(i,t,e,n,s,r){Hi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(fs.x=r*Hi.x-s*Hi.y,fs.y=s*Hi.x+r*Hi.y):fs.copy(Hi),i.copy(t),i.x+=fs.x,i.y+=fs.y,i.applyMatrix4(ih)}class ue extends xi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Tr=new E,Ar=new E,$l=new re,ms=new Po,tr=new ss,pa=new E,ql=new E;class _n extends ve{constructor(t=new se,e=new ue){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Tr.fromBufferAttribute(e,s-1),Ar.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Tr.distanceTo(Ar);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(s),tr.radius+=r,t.ray.intersectsSphere(tr)===!1)return;$l.copy(s).invert(),ms.copy(t.ray).applyMatrix4($l);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),w=h.getX(_+1),M=er(this,t,ms,l,p,w);M&&e.push(M)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=er(this,t,ms,l,_,m);p&&e.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=er(this,t,ms,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=er(this,t,ms,l,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function er(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(Tr.fromBufferAttribute(a,s),Ar.fromBufferAttribute(a,r),e.distanceSqToSegment(Tr,Ar,pa,ql)>n)return;pa.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(pa);if(!(l<t.near||l>t.far))return{distance:l,point:ql.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Yl=new E,jl=new E;class sn extends _n{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Yl.fromBufferAttribute(e,s),jl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Yl.distanceTo(jl);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Og extends Be{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sh{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ut:new E);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new E,s=[],r=[],a=[],o=new E,l=new re;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new E)}r[0]=new E,a[0]=new E;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ge(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ge(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function Fg(i,t){const e=1-i;return e*e*t}function zg(i,t){return 2*(1-i)*i*t}function Bg(i,t){return i*i*t}function ma(i,t,e,n){return Fg(i,t)+zg(i,e)+Bg(i,n)}function kg(i,t){const e=1-i;return e*e*e*t}function Hg(i,t){const e=1-i;return 3*e*e*i*t}function Gg(i,t){return 3*(1-i)*i*i*t}function Vg(i,t){return i*i*i*t}function ga(i,t,e,n,s){return kg(i,t)+Hg(i,e)+Gg(i,n)+Vg(i,s)}class Wg extends sh{constructor(t=new E,e=new E,n=new E,s=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new E){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ga(t,s.x,r.x,a.x,o.x),ga(t,s.y,r.y,a.y,o.y),ga(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Xg extends sh{constructor(t=new E,e=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new E){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ma(t,s.x,r.x,a.x),ma(t,s.y,r.y,a.y),ma(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ts extends se{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const _=[],m=n/2;let p=0;w(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ie(d,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(f,2));function w(){const b=new E,P=new E;let R=0;const T=(e-t)/n;for(let A=0;A<=r;A++){const F=[],v=A/r,x=v*(e-t)+t;for(let L=0;L<=s;L++){const I=L/s,z=I*l+o,q=Math.sin(z),G=Math.cos(z);P.x=x*q,P.y=-v*n+m,P.z=x*G,d.push(P.x,P.y,P.z),b.set(q,T,G).normalize(),u.push(b.x,b.y,b.z),f.push(I,1-v),F.push(g++)}_.push(F)}for(let A=0;A<s;A++)for(let F=0;F<r;F++){const v=_[F][A],x=_[F+1][A],L=_[F+1][A+1],I=_[F][A+1];t>0&&(h.push(v,x,I),R+=3),e>0&&(h.push(x,L,I),R+=3)}c.addGroup(p,R,0),p+=R}function M(b){const P=g,R=new ut,T=new E;let A=0;const F=b===!0?t:e,v=b===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,m*v,0),u.push(0,v,0),f.push(.5,.5),g++;const x=g;for(let L=0;L<=s;L++){const z=L/s*l+o,q=Math.cos(z),G=Math.sin(z);T.x=F*G,T.y=m*v,T.z=F*q,d.push(T.x,T.y,T.z),u.push(0,v,0),R.x=q*.5+.5,R.y=G*.5*v+.5,f.push(R.x,R.y),g++}for(let L=0;L<s;L++){const I=P+L,z=x+L;b===!0?h.push(z,z+1,I):h.push(z+1,z,I),A+=3}c.addGroup(p,A,b===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ts(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Cr extends Ts{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Cr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const nr=new E,ir=new E,va=new E,sr=new Je;class In extends se{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(ji*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:p}=sr;if(_.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),sr.getNormal(va),d[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let w=0;w<3;w++){const M=(w+1)%3,b=d[w],P=d[M],R=sr[h[w]],T=sr[h[M]],A=`${b}_${P}`,F=`${P}_${b}`;F in u&&u[F]?(va.dot(u[F].normal)<=r&&(f.push(R.x,R.y,R.z),f.push(T.x,T.y,T.z)),u[F]=null):A in u||(u[A]={index0:c[w],index1:c[M],normal:va.clone()})}}for(const g in u)if(u[g]){const{index0:_,index1:m}=u[g];nr.fromBufferAttribute(o,_),ir.fromBufferAttribute(o,m),f.push(nr.x,nr.y,nr.z),f.push(ir.x,ir.y,ir.z)}this.setAttribute("position",new ie(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class ze extends se{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new E,u=new E,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const w=[],M=p/n;let b=0;p===0&&a===0?b=.5/e:p===n&&l===Math.PI&&(b=-.5/e);for(let P=0;P<=e;P++){const R=P/e;d.x=-t*Math.cos(s+R*r)*Math.sin(a+M*o),d.y=t*Math.cos(a+M*o),d.z=t*Math.sin(s+R*r)*Math.sin(a+M*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(R+b,1-M),w.push(c++)}h.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){const M=h[p][w+1],b=h[p][w],P=h[p+1][w],R=h[p+1][w+1];(p!==0||a>0)&&f.push(M,b,R),(p!==n-1||l<Math.PI)&&f.push(b,P,R)}this.setIndex(f),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ze(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class bs extends se{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new E,d=new E,u=new E;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(_),d.y=(t+e*Math.cos(m))*Math.sin(_),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,w=(s+1)*f+g;a.push(_,m,w),a.push(m,p,w)}this.setIndex(a),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class rh extends se{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,s=new E,r=new E;if(t.index!==null){const a=t.attributes.position,o=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const d=l[c],u=d.start,f=d.count;for(let g=u,_=u+f;g<_;g+=3)for(let m=0;m<3;m++){const p=o.getX(g+m),w=o.getX(g+(m+1)%3);s.fromBufferAttribute(a,p),r.fromBufferAttribute(a,w),Kl(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,d=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,d),Kl(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new ie(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Kl(i,t,e){const n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}class $g extends Ie{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ah extends xi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oc,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ee extends ah{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ut(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new lt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new lt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new lt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Dr extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class qg extends Dr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const _a=new re,Zl=new E,Ql=new E;class oh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lo,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Zl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zl),Ql.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ql),e.updateMatrixWorld(),_a.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_a),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_a)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Jl=new re,gs=new E,xa=new E;class Yg extends oh{constructor(){super(new Me(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ut(4,2),this._viewportCount=6,this._viewports=[new Wt(2,1,1,1),new Wt(0,1,1,1),new Wt(3,1,1,1),new Wt(1,1,1,1),new Wt(3,0,1,1),new Wt(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),gs.setFromMatrixPosition(t.matrixWorld),n.position.copy(gs),xa.copy(n.position),xa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(xa),n.updateMatrixWorld(),s.makeTranslation(-gs.x,-gs.y,-gs.z),Jl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jl)}}class tc extends Dr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Yg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class jg extends oh{constructor(){super(new Do(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ec extends Dr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new jg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Kg extends Dr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Zg extends se{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class lh{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=nc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function nc(){return performance.now()}class vo extends eh{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}class ic{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ge(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const sc=new E,rr=new E;class Qg{constructor(t=new E,e=new E){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){sc.subVectors(t,this.start),rr.subVectors(this.end,this.start);const n=rr.dot(rr);let r=rr.dot(sc)/n;return e&&(r=ge(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Jg extends sn{constructor(t=10,e=10,n=4473924,s=8947848){n=new lt(n),s=new lt(s);const r=e/2,a=t/e,o=t/2,l=[],c=[];for(let u=0,f=0,g=-o;u<=e;u++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const _=u===r?n:s;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const h=new se;h.setAttribute("position",new ie(l,3)),h.setAttribute("color",new ie(c,3));const d=new ue({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const rc=new E;let ar,ya;class t0 extends ve{constructor(t=new E(0,0,1),e=new E(0,0,0),n=1,s=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",ar===void 0&&(ar=new se,ar.setAttribute("position",new ie([0,0,0,0,1,0],3)),ya=new Ts(0,.5,1,5,1),ya.translate(0,-.5,0)),this.position.copy(e),this.line=new _n(ar,new ue({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new bt(ya,new ye({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,a)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{rc.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(rc,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class e0 extends _i{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yo);const ac={type:"change"},No={type:"start"},ch={type:"end"},or=new Po,oc=new Xn,n0=Math.cos(70*zc.DEG2RAD),_e=new E,Ge=2*Math.PI,ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ma=1e-6;class i0 extends e0{constructor(t,e=null){super(t,e),this.state=ne.NONE,this.enabled=!0,this.target=new E,this.cursor=new E,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$i.ROTATE,MIDDLE:$i.DOLLY,RIGHT:$i.PAN},this.touches={ONE:Vi.ROTATE,TWO:Vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new E,this._lastQuaternion=new pi,this._lastTargetPosition=new E,this._quat=new pi().setFromUnitVectors(t.up,new E(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ic,this._sphericalDelta=new ic,this._scale=1,this._panOffset=new E,this._rotateStart=new ut,this._rotateEnd=new ut,this._rotateDelta=new ut,this._panStart=new ut,this._panEnd=new ut,this._panDelta=new ut,this._dollyStart=new ut,this._dollyEnd=new ut,this._dollyDelta=new ut,this._dollyDirection=new E,this._mouse=new ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=r0.bind(this),this._onPointerDown=s0.bind(this),this._onPointerUp=a0.bind(this),this._onContextMenu=f0.bind(this),this._onMouseWheel=c0.bind(this),this._onKeyDown=h0.bind(this),this._onTouchStart=d0.bind(this),this._onTouchMove=u0.bind(this),this._onMouseDown=o0.bind(this),this._onMouseMove=l0.bind(this),this._interceptControlDown=p0.bind(this),this._interceptControlUp=m0.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ac),this.update(),this.state=ne.NONE}update(t=null){const e=this.object.position;_e.copy(e).sub(this.target),_e.applyQuaternion(this._quat),this._spherical.setFromVector3(_e),this.autoRotate&&this.state===ne.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ge:n>Math.PI&&(n-=Ge),s<-Math.PI?s+=Ge:s>Math.PI&&(s-=Ge),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(_e.setFromSpherical(this._spherical),_e.applyQuaternion(this._quatInverse),e.copy(this.target).add(_e),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=_e.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new E(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new E(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=_e.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(or.origin.copy(this.object.position),or.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(or.direction))<n0?this.object.lookAt(this.target):(oc.setFromNormalAndCoplanarPoint(this.object.up,this.target),or.intersectPlane(oc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ma||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ma||this._lastTargetPosition.distanceToSquared(this.target)>Ma?(this.dispatchEvent(ac),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ge/60*this.autoRotateSpeed*t:Ge/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){_e.setFromMatrixColumn(e,0),_e.multiplyScalar(-t),this._panOffset.add(_e)}_panUp(t,e){this.screenSpacePanning===!0?_e.setFromMatrixColumn(e,1):(_e.setFromMatrixColumn(e,0),_e.crossVectors(this.object.up,_e)),_e.multiplyScalar(t),this._panOffset.add(_e)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;_e.copy(s).sub(this.target);let r=_e.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ge*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ge*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ge*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ge*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ge*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ge*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ge*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ge*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ut,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function s0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function r0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function a0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ch),this.state=ne.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function o0(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case $i.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ne.DOLLY;break;case $i.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ne.ROTATE}break;case $i.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ne.PAN}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(No)}function l0(i){switch(this.state){case ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function c0(i){this.enabled===!1||this.enableZoom===!1||this.state!==ne.NONE||(i.preventDefault(),this.dispatchEvent(No),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ch))}function h0(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function d0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Vi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ne.TOUCH_ROTATE;break;case Vi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ne.TOUCH_PAN;break;default:this.state=ne.NONE}break;case 2:switch(this.touches.TWO){case Vi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ne.TOUCH_DOLLY_PAN;break;case Vi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ne.TOUCH_DOLLY_ROTATE;break;default:this.state=ne.NONE}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(No)}function u0(i){switch(this._trackPointer(i),this.state){case ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ne.NONE}}function f0(i){this.enabled!==!1&&i.preventDefault()}function p0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function m0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const hh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class as{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const g0=new Do(-1,1,1,-1,0,1);class v0 extends se{constructor(){super(),this.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ie([0,2,0,0,2,0],2))}}const _0=new v0;class Uo{constructor(t){this._mesh=new bt(_0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,g0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class dh extends as{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ie?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=mi.clone(t.uniforms),this.material=new Ie({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Uo(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class lc extends as{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class x0 extends as{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class y0{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new ut);this._width=n.width,this._height=n.height,e=new un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ln}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new dh(hh),this.copyPass.material.blending=Pn,this.clock=new lh}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}lc!==void 0&&(a instanceof lc?n=!0:a instanceof x0&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ut);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class M0 extends as{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new lt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const S0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new lt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class is extends as{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new ut(t.x,t.y):new ut(256,256),this.clearColor=new lt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new un(r,a,{type:Ln}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const u=new un(r,a,{type:Ln});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new un(r,a,{type:Ln});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=S0;this.highPassUniforms=mi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ie({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new ut(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=hh;this.copyUniforms=mi.clone(h.uniforms),this.blendMaterial=new Ie({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ca,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new lt,this.oldClearAlpha=1,this.basic=new ye,this.fsQuad=new Uo(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ut(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=is.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=is.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ie({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ut(.5,.5)},direction:{value:new ut(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Ie({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}is.BlurDirectionX=new ut(1,0);is.BlurDirectionY=new ut(0,1);const b0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class w0 extends as{constructor(){super();const t=b0;this.uniforms=mi.clone(t.uniforms),this.material=new $g({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Uo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},jt.getTransfer(this._outputColorSpace)===oe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===yc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Mc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Sc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Mo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===bc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===wc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const E0={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new ut(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

		//----------------------------------------------------------------------------------
		// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
		// SDK Version: v3.00
		// Email:       gameworks@nvidia.com
		// Site:        http://developer.nvidia.com/
		//
		// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
		//
		// Redistribution and use in source and binary forms, with or without
		// modification, are permitted provided that the following conditions
		// are met:
		//  * Redistributions of source code must retain the above copyright
		//    notice, this list of conditions and the following disclaimer.
		//  * Redistributions in binary form must reproduce the above copyright
		//    notice, this list of conditions and the following disclaimer in the
		//    documentation and/or other materials provided with the distribution.
		//  * Neither the name of NVIDIA CORPORATION nor the names of its
		//    contributors may be used to endorse or promote products derived
		//    from this software without specific prior written permission.
		//
		// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
		// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
		// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
		// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
		// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
		// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
		// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
		// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
		// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
		// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
		// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		//
		//----------------------------------------------------------------------------------

		#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
		#endif

		/*--------------------------------------------------------------------------*/
		#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
		#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
		/*--------------------------------------------------------------------------*/

		#define NUM_SAMPLES 5

		// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
		float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
		}

		/*============================================================================

									FXAA3 QUALITY - PC

		============================================================================*/

		/*--------------------------------------------------------------------------*/
		vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
		) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
				if(earlyExit) FxaaDiscard;
			#else
				if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
				// locate the edge
				vec2 dirToEdge;
				dirToEdge.x = contrastE > contrastW ? 1. : -1.;
				dirToEdge.y = contrastS > contrastN ? 1. : -1.;
				// . 2 .      . 1 .
				// 1 0 2  ~=  0 0 1
				// . 1 .      . 0 .

				// tap 2 pixels and see which ones are "outside" the edge, to
				// determine if the edge is vertical or horizontal

				vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongH = contrast( rgbaM, rgbaAlongH );
				// . 1 .
				// 0 0 1
				// . 0 H

				vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongV = contrast( rgbaM, rgbaAlongV );
				// V 1 .
				// 0 0 1
				// . 0 .

				relativeVContrast = matchAlongV - matchAlongH;
				relativeVContrast *= fxaaQualityinvEdgeThreshold;

				if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
					// 1 1 .
					// 0 0 1
					// . 0 1

					// do a simple blur
					return mix(
						rgbaM,
						(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
						.4
					);
				}

				horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {

				float increment = float(i + 1);

				if(!doneN) {
					nDist += increment;
					posN = posM + offNP * nDist;
					vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
					doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
					iterationsUsedN = i;
				}

				if(!doneP) {
					pDist += increment;
					posP = posM - offNP * pDist;
					vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
					doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
					iterationsUsedP = i;
				}

				if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
				doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
				doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
				rgbaM,
				rgbaN,
				dist * .5
			);
		}

		void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
				vUv,
				tDiffuse,
				resolution,
				edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
				invEdgeDetectionQuality
			);

		}
	`},Sa={input:"#94a3b8",conv:"#ec4899",pool:"#fbbf24",norm:"#c4b5fd",dense:"#22d3ee",output:"#4ade80",flatten:"#f59e0b",token:"#67e8f9",positional:"#fb923c",attention:"#f472b6",ffn:"#6ee7b7",residual:"#d8b4fe",head:"#fb7185"},xr={accent:"#00ea64",accent2:"#22d3ee",bg0:"#060608"},T0=xr.bg0;function ba(i,t,e){const n=parseInt(i.slice(1,3),16),s=parseInt(i.slice(3,5),16),r=parseInt(i.slice(5,7),16),a=parseInt(t.slice(1,3),16),o=parseInt(t.slice(3,5),16),l=parseInt(t.slice(5,7),16),c=Math.round(n+(a-n)*e),h=Math.round(s+(o-s)*e),d=Math.round(r+(l-r)*e);return`#${c.toString(16).padStart(2,"0")}${h.toString(16).padStart(2,"0")}${d.toString(16).padStart(2,"0")}`}class A0{constructor(t){this.domHost=t,this.renderer=new Ng({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(T0,1),this.renderer.outputColorSpace=cn,this.renderer.toneMapping=Mo,this.renderer.toneMappingExposure=1.15,this.renderer.domElement.style.display="block",t.appendChild(this.renderer.domElement),this.activeScene=null,this.scenes=new Map,this.controls=null,this.composer=new y0(this.renderer),this.renderPass=null,this.bloomPass=new is(new ut(1,1),.55,.55,.85),this.fxaaPass=new dh(E0),this.outputPass=new w0,this.clock=new lh,this._loop=this._loop.bind(this),this._resize=this._resize.bind(this),window.addEventListener("resize",this._resize),typeof ResizeObserver<"u"&&(this._ro=new ResizeObserver(this._resize),this._ro.observe(t)),this._resize(),requestAnimationFrame(this._loop)}register(t,e){this.scenes.set(t,e)}setBloom({strength:t,radius:e,threshold:n}={}){typeof t=="number"&&(this.bloomPass.strength=t),typeof e=="number"&&(this.bloomPass.radius=e),typeof n=="number"&&(this.bloomPass.threshold=n)}setBloomEnabled(t){this.bloomPass.enabled=!!t}activate(t){const e=this.scenes.get(t);if(!e){console.warn(`SceneHost: no scene named "${t}"`);return}this.activeScene!==e&&(this.activeScene&&typeof this.activeScene.onDeactivate=="function"&&this.activeScene.onDeactivate(),this.controls&&(this.controls.dispose(),this.controls=null),this.activeScene=e,this._rebuildComposer(),e.camera&&(this.controls=new i0(e.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.minDistance=4,this.controls.maxDistance=120,e.controlsConfig&&Object.assign(this.controls,e.controlsConfig)),typeof e.onActivate=="function"&&e.onActivate(this),this._resize(),requestAnimationFrame(()=>this._resize()),setTimeout(()=>this._resize(),80))}_rebuildComposer(){var t,e;this.composer.passes=[],!(!((t=this.activeScene)!=null&&t.scene)||!((e=this.activeScene)!=null&&e.camera))&&(this.renderPass=new M0(this.activeScene.scene,this.activeScene.camera),this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(this.fxaaPass),this.composer.addPass(this.outputPass))}_resize(){var n,s,r,a,o;const{width:t,height:e}=this.domHost.getBoundingClientRect();if(!(t===0||e===0)){if(this.renderer.setSize(t,e,!1),this.composer.setSize(t,e),(s=(n=this.bloomPass).setSize)==null||s.call(n,t,e),(a=(r=this.fxaaPass.material)==null?void 0:r.uniforms)!=null&&a.resolution){const l=this.renderer.getPixelRatio();this.fxaaPass.material.uniforms.resolution.value.set(1/(t*l),1/(e*l))}if((o=this.activeScene)!=null&&o.camera){const l=this.activeScene.camera;if(l.isPerspectiveCamera)l.aspect=t/e,l.updateProjectionMatrix();else if(l.isOrthographicCamera){const c=(l.userData.frustumSize??10)/2,h=t/e;l.left=-c*h,l.right=c*h,l.top=c,l.bottom=-c,l.updateProjectionMatrix()}}}}_loop(){requestAnimationFrame(this._loop);const t=this.clock.getDelta(),e=this.clock.getElapsedTime();this.activeScene&&(typeof this.activeScene.update=="function"&&this.activeScene.update(t,e),this.controls&&this.controls.update(),this.composer.passes.length>0?this.composer.render():this.renderer.render(this.activeScene.scene,this.activeScene.camera))}}const cc=new Kn,lr=new E;class uh extends Zg{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new ie(t,3)),this.setAttribute("uv",new ie(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new vo(e,6,1);return this.setAttribute("instanceStart",new gn(n,3,0)),this.setAttribute("instanceEnd",new gn(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new vo(e,6,1);return this.setAttribute("instanceColorStart",new gn(n,3,0)),this.setAttribute("instanceColorEnd",new gn(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new rh(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),cc.setFromBufferAttribute(e),this.boundingBox.union(cc))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)lr.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(lr)),lr.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(lr));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}it.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ut(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Ve.line={uniforms:mi.merge([it.common,it.fog,it.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Oo extends Ie{constructor(t){super({type:"LineMaterial",uniforms:mi.clone(Ve.line.uniforms),vertexShader:Ve.line.vertexShader,fragmentShader:Ve.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const wa=new Wt,hc=new E,dc=new E,Ae=new Wt,Ce=new Wt,fn=new Wt,Ea=new E,Ta=new re,Pe=new Qg,uc=new E,cr=new Kn,hr=new ss,pn=new Wt;let mn,di;function fc(i,t,e){return pn.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),pn.multiplyScalar(1/pn.w),pn.x=di/e.width,pn.y=di/e.height,pn.applyMatrix4(i.projectionMatrixInverse),pn.multiplyScalar(1/pn.w),Math.abs(Math.max(pn.x,pn.y))}function C0(i,t){const e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,l=a;o<l;o++){Pe.start.fromBufferAttribute(s,o),Pe.end.fromBufferAttribute(r,o),Pe.applyMatrix4(e);const c=new E,h=new E;mn.distanceSqToSegment(Pe.start,Pe.end,h,c),h.distanceTo(c)<di*.5&&t.push({point:h,pointOnLine:c,distance:mn.origin.distanceTo(h),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function R0(i,t,e){const n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),d=-t.near;mn.at(1,fn),fn.w=1,fn.applyMatrix4(t.matrixWorldInverse),fn.applyMatrix4(n),fn.multiplyScalar(1/fn.w),fn.x*=r.x/2,fn.y*=r.y/2,fn.z=0,Ea.copy(fn),Ta.multiplyMatrices(t.matrixWorldInverse,a);for(let u=0,f=h;u<f;u++){if(Ae.fromBufferAttribute(l,u),Ce.fromBufferAttribute(c,u),Ae.w=1,Ce.w=1,Ae.applyMatrix4(Ta),Ce.applyMatrix4(Ta),Ae.z>d&&Ce.z>d)continue;if(Ae.z>d){const M=Ae.z-Ce.z,b=(Ae.z-d)/M;Ae.lerp(Ce,b)}else if(Ce.z>d){const M=Ce.z-Ae.z,b=(Ce.z-d)/M;Ce.lerp(Ae,b)}Ae.applyMatrix4(n),Ce.applyMatrix4(n),Ae.multiplyScalar(1/Ae.w),Ce.multiplyScalar(1/Ce.w),Ae.x*=r.x/2,Ae.y*=r.y/2,Ce.x*=r.x/2,Ce.y*=r.y/2,Pe.start.copy(Ae),Pe.start.z=0,Pe.end.copy(Ce),Pe.end.z=0;const _=Pe.closestPointToPointParameter(Ea,!0);Pe.at(_,uc);const m=zc.lerp(Ae.z,Ce.z,_),p=m>=-1&&m<=1,w=Ea.distanceTo(uc)<di*.5;if(p&&w){Pe.start.fromBufferAttribute(l,u),Pe.end.fromBufferAttribute(c,u),Pe.start.applyMatrix4(a),Pe.end.applyMatrix4(a);const M=new E,b=new E;mn.distanceSqToSegment(Pe.start,Pe.end,b,M),e.push({point:b,pointOnLine:M,distance:mn.origin.distanceTo(b),object:i,face:null,faceIndex:u,uv:null,uv1:null})}}}class P0 extends bt{constructor(t=new uh,e=new Oo({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)hc.fromBufferAttribute(e,a),dc.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+hc.distanceTo(dc);const r=new vo(s,2,1);return t.setAttribute("instanceDistanceStart",new gn(r,1,0)),t.setAttribute("instanceDistanceEnd",new gn(r,1,1)),this}raycast(t,e){const n=this.material.worldUnits,s=t.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;mn=t.ray;const a=this.matrixWorld,o=this.geometry,l=this.material;di=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),hr.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=di*.5;else{const d=Math.max(s.near,hr.distanceToPoint(mn.origin));c=fc(s,d,l.resolution)}if(hr.radius+=c,mn.intersectsSphere(hr)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),cr.copy(o.boundingBox).applyMatrix4(a);let h;if(n)h=di*.5;else{const d=Math.max(s.near,cr.distanceToPoint(mn.origin));h=fc(s,d,l.resolution)}cr.expandByScalar(h),mn.intersectsBox(cr)!==!1&&(n?C0(this,e):R0(this,s,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(wa),this.material.uniforms.resolution.value.set(wa.z,wa.w))}}class fh extends uh{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setPositions(n),this}setColors(t){const e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setColors(n),this}fromLine(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}}class L0 extends P0{constructor(t=new fh,e=new Oo({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}}function D0(i){i&&(i.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(n=>{for(const s of Object.keys(n)){const r=n[s];r&&typeof r=="object"&&"isTexture"in r&&r.isTexture&&r.dispose()}n.dispose()})}),i.parent&&i.parent.remove(i))}function Nn(i){for(;i.children.length;){const t=i.children[0];D0(t)}}function yt(i,t={}){const{fontSize:e=32,color:n="#e8ecf5",fontWeight:s=600,bgColor:r=null,padding:a=8}=t,o=Math.min(window.devicePixelRatio||1,2),l=document.createElement("canvas").getContext("2d");l.font=`${s} ${e}px Inter, system-ui, sans-serif`;const c=Math.ceil(l.measureText(i).width)+a*2,h=e+a*2,d=document.createElement("canvas");d.width=c*o,d.height=h*o;const u=d.getContext("2d");u.scale(o,o),u.font=`${s} ${e}px Inter, system-ui, sans-serif`,u.textBaseline="middle",r&&(u.fillStyle=r,u.fillRect(0,0,c,h)),u.shadowColor="rgba(0,0,0,0.6)",u.shadowBlur=4,u.fillStyle=n,u.fillText(i,a,h/2);const f=new Og(d);f.minFilter=Qe,f.magFilter=Qe,f.needsUpdate=!0;const g=new nh({map:f,transparent:!0,depthWrite:!1,depthTest:!0}),_=new Ug(g),m=.012;return _.scale.set(c*m,h*m,1),_}function Mi(i){const t=new Kg("#ffffff",.32);i.add(t);const e=new qg("#cbd5f5","#1a0d2e",.5);i.add(e);const n=new ec("#ffffff",1);n.position.set(8,14,14),i.add(n);const s=new ec("#a78bfa",.55);s.position.set(-12,5,-8),i.add(s);const r=new tc("#2dd4bf",.85,60);r.position.set(0,5,8),i.add(r);const a=new tc("#7c3aed",.45,50);return a.position.set(0,-2,12),i.add(a),{ambient:t,hemi:e,key:n,rim:s,fill:r,fill2:a}}function Si(i,t=60,e=30,n=-4){const s=new Jg(t,e,"#3b1d6e","#1a1029");return s.position.y=n,s.material.transparent=!0,s.material.opacity=.55,i.add(s),s}function ph({points:i,color:t="#2dd4bf",width:e=2,opacity:n=.8,resolution:s}){const r=new fh,a=[];for(const c of i)a.push(c.x,c.y,c.z);r.setPositions(a);const o=new Oo({color:new lt(t).getHex(),linewidth:e,transparent:!0,opacity:n,depthTest:!0,dashed:!1});s?o.resolution.copy(s):o.resolution.set(window.innerWidth,window.innerHeight);const l=new L0(r,o);return l.computeLineDistances(),l}function I0({from:i,to:t,color:e,width:n=2,opacity:s=.85,segments:r=32,resolution:a,bend:o=.4}){const l=i.distanceTo(t),c=new E().lerpVectors(i,t,.33),h=new E().lerpVectors(i,t,.66);c.y+=l*o,h.y+=l*o;const u=new Wg(i.clone(),c,h,t.clone()).getPoints(r);return ph({points:u,color:e,width:n,opacity:s,resolution:a})}function N0({fromCenter:i,fromSize:t,toCenter:e,toSize:n,color:s="#2dd4bf",opacity:r=.18,highlightSize:a=null}){const o=new qt,l=new lt(s),c=t.w/2,h=t.h/2,d=n.w/2,u=n.h/2,f=(v,x)=>new E(i.x+v*c,i.y+x*h,i.z),g=(v,x)=>new E(e.x+v*d,e.y+x*u,e.z),_=[f(-1,-1),f(1,-1),f(1,1),f(-1,1),g(-1,-1),g(1,-1),g(1,1),g(-1,1)],m=new Float32Array(_.flatMap(v=>[v.x,v.y,v.z])),p=[0,1,5,0,5,4,1,2,6,1,6,5,2,3,7,2,7,6,3,0,4,3,4,7],w=new se;w.setAttribute("position",new $e(m,3)),w.setIndex(p),w.computeVertexNormals();const M=new ee({color:l,transparent:!0,opacity:r,roughness:.2,metalness:0,transmission:.55,thickness:.6,ior:1.3,side:We,depthWrite:!1,emissive:l,emissiveIntensity:.05}),b=new bt(w,M);o.add(b);const P=[[_[0],_[4]],[_[1],_[5]],[_[2],_[6]],[_[3],_[7]]],R=new se,T=[];for(const[v,x]of P)T.push(v.x,v.y,v.z,x.x,x.y,x.z);R.setAttribute("position",new ie(T,3));const A=new ue({color:l,transparent:!0,opacity:.65}),F=new sn(R,A);if(o.add(F),a){const v=new vn(a.w,a.h),x=new ye({color:"#fbbf24",transparent:!0,opacity:.7,side:We,depthWrite:!1}),L=new bt(v,x);L.position.copy(i),L.position.z+=.01,o.add(L);const I=new sn(new In(v),new ue({color:"#fde68a",transparent:!0,opacity:1}));I.position.copy(L.position),o.add(I),o.userData.kernelHighlight=L,o.userData.kernelEdges=I}return o.userData.frustumMesh=b,o.userData.frustumEdges=F,o}class U0{constructor({style:t}){this.style=t,this.scene=new yi,this.scene.fog=new On("#06060f",30,120),this.camera=new Me(45,1,.1,300),this.camera.position.set(0,4,28),this.lights=Mi(this.scene),this.grid=Si(this.scene,80,40,-4),this.layerGroup=new qt,this.scene.add(this.layerGroup),this.connGroup=new qt,this.scene.add(this.connGroup),this.particleGroup=new qt,this.scene.add(this.particleGroup),this.particles=[],this._spin=0,this._layers=[],this.opts={mode:"cnn",depthScale:1},this._lineResolution=new ut(window.innerWidth,window.innerHeight),window.addEventListener("resize",()=>{this._lineResolution.set(window.innerWidth,window.innerHeight),this.connGroup.children.forEach(e=>{var n;(n=e.material)!=null&&n.resolution&&e.material.resolution.copy(this._lineResolution)})}),this._unsub=t.subscribe(()=>{this._restyle()})}setOptions(t){Object.assign(this.opts,t),("depthScale"in t||"mode"in t)&&this.build(this._layers)}build(t){if(this._layers=t||[],Nn(this.layerGroup),Nn(this.connGroup),Nn(this.particleGroup),this.particles=[],!this._layers.length)return;let e=this._layers;this.opts.mode==="cnn"&&this.style.get("showFlattenLayer")&&(e=this._withFlattenLayer(this._layers)),this._displayLayers=e,this.opts.mode==="nn"?this._buildNN(e):this._buildBlocks(e)}_withFlattenLayer(t){var r,a,o;const e=t.findIndex(l=>l.type==="dense");if(e<=0)return t;const n=t[e-1];if(n.type==="flatten")return t;const s={name:"Flatten",type:"flatten",w:.8,h:Math.max(n.h,3.6),d:.5,params:{units:(((r=n.params)==null?void 0:r.h)||1)*(((a=n.params)==null?void 0:a.w)||1)*(((o=n.params)==null?void 0:o.c)||1)||0}};return[...t.slice(0,e),s,...t.slice(e)]}_buildNN(t){const e=this.style.state,n=e.layerSpacing,s=e.direction,r=t.length,a=-((r-1)*n)/2,o=[];t.forEach((l,c)=>{var R;const h=Sa[l.type]||"#94a3b8",d=Math.max(1,Math.min(64,((R=l.params)==null?void 0:R.neurons)??6)),u=e.showBiasUnits&&l.type!=="output",f=d+(u?1:0),g=a+c*n,_=.55,m=(f-1)*_,p=[],w=new ze(e.nodeDiameter/2,22,16),M=new lt(e.nodeColor),b=new lt(h),P=new qt;s==="horizontal"?P.position.set(g,0,0):P.position.set(0,-g,0),this.layerGroup.add(P);for(let T=0;T<f;T++){const A=u&&T===f-1,F=m/2-T*_,v=A?new lt("#fbbf24"):b.clone().lerp(M,.5),x=new ee({color:v,emissive:v,emissiveIntensity:.5,metalness:.2,roughness:.28,clearcoat:.7,wireframe:e.nodeStyle==="empty"}),L=new bt(w,x);L.position.set(0,F,0),L.userData.baseY=F,L.userData.phase=(c+T)*.4,L.userData.isBias=A,P.add(L);const I=new ye({color:e.nodeBorderColor,transparent:!0,opacity:.65,wireframe:!0}),z=new bt(new ze(e.nodeDiameter/2*1.06,16,12),I);L.add(z),p.push(P.position.clone().add(new E(0,F,0)))}if(e.showLayerLabels){const T=yt(l.name,{fontSize:e.fontSize,color:"#e8ecf5"});T.position.set(0,m/2+.95,0),P.add(T)}o.push(p)});for(let l=0;l<o.length-1;l++){const c=o[l],h=o[l+1],d=Math.min(h.length,14);c.forEach((f,g)=>{for(let _=0;_<d;_++){const m=(g*7+_*5)%h.length,p=h[m],w=Math.sin(l*1.7+g*.6+_*1.3);this._addStyledEdge(f,p,w)}});const u=Sa[this._displayLayers[l+1].type]||"#a78bfa";for(let f=0;f<Math.min(5,c.length);f++){const g=c[f],_=h[f*3%h.length];this._addParticle(g,_,u)}}this._frame(r)}_addStyledEdge(t,e,n){const s=this.style.state,r=s.edgeWidthByWeight?Math.max(.4,s.edgeWidth*(.4+Math.abs(n)*1.4)):s.edgeWidth,a=s.edgeOpacityByWeight?Math.max(.05,Math.min(1,s.edgeOpacity*(.3+Math.abs(n)))):s.edgeOpacity;let o;if(s.edgeColorByWeight){const c=Math.min(1,Math.abs(n));o=n>=0?ba(s.defaultEdgeColor,s.positiveEdgeColor,c):ba(s.defaultEdgeColor,s.negativeEdgeColor,c)}else o=s.defaultEdgeColor;const l=s.useBezierCurves?I0({from:t,to:e,color:o,width:r,opacity:a,resolution:this._lineResolution,bend:.18}):ph({points:[t,e],color:o,width:r,opacity:a,resolution:this._lineResolution});if(l.userData.kind="edge",l.userData.weight=n,this.connGroup.add(l),s.showArrowheads){const c=new E().subVectors(e,t).normalize(),h=new bt(new Cr(.06,.18,10),new ye({color:o,transparent:!0,opacity:a})),d=new E().copy(e).addScaledVector(c,-.1);h.position.copy(d),h.quaternion.setFromUnitVectors(new E(0,1,0),c),h.userData.kind="arrowhead",h.userData.weight=n,this.connGroup.add(h)}}_buildBlocks(t){var l,c;const e=this.style.state,n=e.layerSpacing,s=e.direction,r=t.length,a=-((r-1)*n)/2,o=[];if(t.forEach((h,d)=>{var T;const u=Sa[h.type]||"#94a3b8";let f=(h.d||.6)*this.opts.depthScale;e.logFeatureMapDepthScaling&&(f=Math.log2(1+f)*.9),f*=.3+.07*e.depthSizeScaling;let g=h.w,_=h.h;e.logFeatureMapWidthScaling&&(g=Math.log2(1+g*4)*1.2,_=Math.log2(1+_*4)*1.2),g*=.4+.06*e.widthSizeScaling,_*=.4+.06*e.widthSizeScaling,e.sqrtVectorLengthScaling&&(h.type==="flatten"||h.type==="dense")?_=Math.sqrt(_)*1.6*e.lengthSizeScaling:(h.type==="flatten"||h.type==="dense")&&(_=_*e.lengthSizeScaling);let m=0,p=0,w=0;this.opts.mode==="cnn"?(m=a+d*n,w=-(d*n*.58)):s==="horizontal"?m=a+d*n:p=-(a+d*n);const M=new qt;M.position.set(m,p,w),M.userData.idx=d,M.rotation.y=0,this.layerGroup.add(M);const b=new lt(u);let P=!1;if(h.type==="conv"&&h.params){const A=Math.min(24,Math.max(1,h.params.filters||1)),F=e.spacingBetweenFilters,v=Math.max(.04,f/A),x=A*(v+F)-F,L=-x/2;for(let I=0;I<A;I++){const z=A>1?I/(A-1):.5,q=ba(e.convColor1,e.convColor2,z),G=new lt(q),$=new he(g,_,v),H=new ee({color:G,emissive:G,emissiveIntensity:.18,roughness:.18,metalness:.05,clearcoat:.85,transmission:.18,thickness:v,ior:1.4,transparent:!0,opacity:e.filterOpacity,wireframe:e.wireframe}),nt=new bt($,H);if(nt.position.z=L+I*(v+F)+v/2,M.add(nt),e.borderWidth>0){const rt=new sn(new In($),new ue({color:G,transparent:!0,opacity:.45+.4*(e.borderWidth/3)}));rt.position.copy(nt.position),M.add(rt)}}P=!0,M.userData.frontZ=L+x,M.userData.backZ=L}if(!P){const A=new he(g,_,f),F=new ee({color:b,emissive:b,emissiveIntensity:.16,roughness:.15,metalness:.05,clearcoat:.95,clearcoatRoughness:.08,transmission:.3,thickness:f,ior:1.4,transparent:!0,opacity:e.tensorOpacity,wireframe:e.wireframe}),v=new bt(A,F);if(M.add(v),M.userData.coreMat=F,e.borderWidth>0){const L=new sn(new In(A),new ue({color:b,transparent:!0,opacity:.6+.3*(e.borderWidth/3)}));M.add(L)}const x=4;for(let L=1;L<=x;L++){const I=-f/2+L/(x+1)*f,z=new bt(new vn(g*.96,_*.96),new ye({color:b,transparent:!0,opacity:.04+L/x*.05,side:We,depthWrite:!1}));z.position.z=I,M.add(z)}M.userData.frontZ=f/2,M.userData.backZ=-f/2}if(e.showLayerLabels){const A=h.type==="flatten"?`${h.name}${(T=h.params)!=null&&T.units?`  (${h.params.units})`:""}`:h.name,F=yt(A,{fontSize:e.fontSize,color:"#e8ecf5"});F.position.set(0,_/2+.7,0),M.add(F)}if(e.showTensorDimensions){const A=this._dimDescriptor(h);if(A){const F=yt(A,{fontSize:22,color:"#aeb6c8"});F.position.set(0,-_/2-.55,0),M.add(F)}}const R=M.position.clone();o.push({center:R,front:R.clone().add(new E(0,0,M.userData.frontZ)),back:R.clone().add(new E(0,0,M.userData.backZ)),size:{w:g,h:_},color:b,type:h.type,layer:h})}),this.style.get("showFrustumLinks")||this.style.get("showArrowheads"))for(let h=0;h<o.length-1;h++){const d=o[h],u=o[h+1];let f=null;const g=u.layer.params||{};if(u.type==="conv"||u.type==="pool"){const _=+g.k||3,m=+(((l=d.layer.params)==null?void 0:l.h)||((c=d.layer.params)==null?void 0:c.w))||8,p=d.size.w/Math.max(1,m),w=d.size.h/Math.max(1,m);f={w:Math.min(d.size.w*.9,p*_),h:Math.min(d.size.h*.9,w*_)}}else u.type==="flatten"||u.type==="dense"||u.type==="output"?f={w:d.size.w*.7,h:d.size.h*.7}:f={w:d.size.w*.5,h:d.size.h*.5};if(this.style.get("showFrustumLinks")){const _=N0({fromCenter:d.front,fromSize:d.size,toCenter:u.back,toSize:u.size,color:xr.accent,opacity:.14,highlightSize:f});_.userData.kind="frustum",this.connGroup.add(_)}if(this.style.get("showArrowheads")){const _=new E().subVectors(u.back,d.front).normalize(),m=new bt(new Cr(.13,.32,12),new ye({color:xr.accent,transparent:!0,opacity:.85})),p=new E().lerpVectors(d.front,u.back,.78);m.position.copy(p),m.quaternion.setFromUnitVectors(new E(0,1,0),_),m.userData.kind="arrowhead",this.connGroup.add(m)}this._addParticle(d.front,u.back,xr.accent2)}this._frame(r)}_dimDescriptor(t){const e=t.params||{};if(t.type==="input"){if(e.h&&e.w)return`${e.h}×${e.w}${e.c?`×${e.c}`:""}`;if(e.neurons)return`${e.neurons}`}if(t.type==="conv"){const n=e.filters??"?";return`k=${e.k||3}  s=${e.s||1}  f=${n}`}return t.type==="pool"?`k=${e.k||2}  s=${e.s||2}`:t.type==="flatten"?`${e.units||""} units`:t.type==="dense"?`${e.units||e.neurons||""} units`:t.type==="output"?e.classes?`${e.classes} classes`:"":t.type==="attention"?e.heads?`${e.heads} heads`:"":t.type==="token"?e.dModel?`dModel=${e.dModel}`:"":t.type==="ffn"&&e.hidden?`hidden=${e.hidden}`:""}_addParticle(t,e,n,s=Math.random()){const r=new ze(.07,10,8),a=new ye({color:n,transparent:!0,opacity:0}),o=new bt(r,a);o.position.lerpVectors(t,e,s),this.particleGroup.add(o),this.particles.push({mesh:o,from:t.clone(),to:e.clone(),t:s,speed:.25+Math.random()*.2})}_frame(t){const e=Math.max(20,14+t*1.8);if(this.opts.mode==="cnn"){const n=this.style.state.layerSpacing,s=-((t-1)*n*.29);this.camera.position.set(-e*.05,7,s+e*.92),this.camera.lookAt(0,1,s)}else this.style.get("direction")==="vertical"?(this.camera.position.set(0,0,e),this.camera.lookAt(0,0,0)):(this.camera.position.set(e*.18,4,e),this.camera.lookAt(0,0,0))}_restyle(){this._layers.length&&this.build(this._layers)}update(t,e){const n=this.style.get("pulseSpeed")??1.1;this.layerGroup.children.forEach(s=>{s.userData.coreMat&&(s.userData.coreMat.emissiveIntensity=.1+(Math.sin(e*n+s.userData.idx)+1)*.06),s.children.forEach(r=>{r.userData.phase!==void 0&&(r.position.y=r.userData.baseY+Math.sin(e*1.6+r.userData.phase)*.06)})});for(const s of this.particles){s.t+=s.speed*t,s.t>1&&(s.t-=1),s.mesh.position.lerpVectors(s.from,s.to,s.t),s.mesh.position.y+=Math.sin(s.t*Math.PI)*.08;const r=Math.min(s.t*6,1)*Math.min((1-s.t)*6,1);s.mesh.material.opacity=.85*r}if(this.style.get("autoOrbit")){this._spin+=t*.18;const s=Math.max(20,14+this._layers.length*1.8),r=this.style.state.layerSpacing,a=this.opts.mode==="cnn"?-((this._layers.length-1)*r*.29):0;this.camera.position.x=Math.sin(this._spin)*s*.35,this.camera.position.z=a+Math.cos(this._spin)*s,this.camera.position.y=4+Math.sin(this._spin*.7)*1.5,this.camera.lookAt(0,0,a)}}onActivate(){}onDeactivate(){}}class O0{constructor(){this.scene=new yi,this.scene.fog=new On("#06070d",25,90),this.camera=new Me(45,1,.1,200),this.camera.position.set(12,14,22),this.camera.lookAt(0,0,0),Mi(this.scene),Si(this.scene,50,25,-3.5),this.root=new qt,this.scene.add(this.root),this.opts={inputSize:8,kernelSize:3,stride:1,padding:0,animate:!0,speed:1,showNumbers:!0},this._build()}setOptions(t){const e=Object.keys(t).some(n=>n!=="showNumbers"&&n!=="animate"&&n!=="speed");Object.assign(this.opts,t),e?this._build():"showNumbers"in t&&this._applyNumberVisibility()}_applyNumberVisibility(){const t=this.opts.showNumbers;this.inputCells.forEach(e=>e.forEach(n=>{n.userData.numLabel&&(n.userData.numLabel.visible=t)})),this.outputCells.forEach(e=>e.forEach(n=>{n.userData.numLabel&&(n.userData.numLabel.visible=t)}))}_build(){Nn(this.root),this.kernelGroup=null,this.outputCells=[],this.inputCells=[],this.tickIdx=0,this.tickTimer=0;const{inputSize:t,kernelSize:e,stride:n,padding:s}=this.opts,r=Math.floor((t+2*s-e)/n)+1;if(r<=0)return;this.outSize=r;const a=.55,o=new E(-7.5,0,0),l=new qt;l.position.copy(o),this.root.add(l);const c=[];for(let A=0;A<t;A++){const F=[];for(let v=0;v<t;v++){const x=.5+.4*Math.sin(A*.7)*Math.cos(v*.6)+.1*Math.sin(A*2.3+v*1.7);F.push(Math.max(0,Math.min(1,x)))}c.push(F)}if(this.inputValues=c,s>0){const A=t+2*s;for(let F=0;F<A;F++)for(let v=0;v<A;v++){if(!(F<s||F>=t+s||v<s||v>=t+s))continue;const L=(v-(A-1)/2)*a,I=(F-(A-1)/2)*a,z=new bt(new he(a*.94,.05,a*.94),new ah({color:"#1a1d2b",transparent:!0,opacity:.5,wireframe:!1}));z.position.set(L,.025,I),l.add(z)}}const h=s;for(let A=0;A<t;A++){const F=[];for(let v=0;v<t;v++){const x=t+2*s,L=(v+h-(x-1)/2)*a,I=(A+h-(x-1)/2)*a,z=c[A][v],q=.05+z*1.2,G=new he(a*.92,q,a*.92),$=new ee({color:new lt().setHSL(.55,.7,.3+z*.4),emissive:new lt().setHSL(.55,.7,.15+z*.25),emissiveIntensity:.5,roughness:.35,metalness:.15,clearcoat:.6}),H=new bt(G,$);H.position.set(L,q/2,I),H.userData={i:A,j:v,baseColor:$.color.clone(),baseEmissive:$.emissive.clone()},l.add(H);const nt=yt(z.toFixed(1),{fontSize:32,color:"#e2e8f0",fontWeight:600});nt.position.set(L,q+.3,I),nt.scale.multiplyScalar(.45),nt.visible=this.opts.showNumbers,H.userData.numLabel=nt,l.add(nt),F.push(H)}this.inputCells.push(F)}const d=yt(`Input  ${t}×${t}`,{fontSize:28});d.position.set(0,2.4,(t+2*s)/2*a+.4),l.add(d);const u=new qt;u.position.copy(o),this.root.add(u);const f=new he(e*a,.85,e*a),g=new ee({color:"#ec4899",emissive:"#ec4899",emissiveIntensity:.6,transparent:!0,opacity:.32,transmission:.5,thickness:.85,roughness:.05,clearcoat:1}),_=new bt(f,g);_.position.y=1.2,u.add(_);const m=new sn(new In(f),new ue({color:"#ec4899",transparent:!0,opacity:1}));m.position.y=1.2,u.add(m);const p=new Ts(e*a*.55,e*a*.4,2.4,10,1,!0),w=new ye({color:"#f472b6",transparent:!0,opacity:.08,side:We,depthWrite:!1}),M=new bt(p,w);M.position.y=1.2,u.add(M),this.kernelGroup=u,this.kernelOffset=o.clone();const b=yt(`Kernel  ${e}×${e}`,{fontSize:24,color:"#f9a8d4"});b.position.set(0,3,0),u.add(b);const P=new E(7.5,0,0),R=new qt;R.position.copy(P),this.root.add(R);for(let A=0;A<r;A++){const F=[];for(let v=0;v<r;v++){const x=(v-(r-1)/2)*a,L=(A-(r-1)/2)*a,I=new he(a*.92,.05,a*.92),z=new ee({color:"#1a1d2b",emissive:"#1a1d2b",emissiveIntensity:0,roughness:.4,metalness:.1,transparent:!0,opacity:.7}),q=new bt(I,z);q.position.set(x,.025,L),q.userData={filled:!1,targetH:0},R.add(q),F.push(q)}this.outputCells.push(F)}const T=yt(`Output  ${r}×${r}`,{fontSize:28});T.position.set(0,2.4,r/2*a+.4),R.add(T),this._cellSize=a,this._inputCenter=o,this._outputCenter=P,this._padOffset=h,this._totalInputSize=t+2*s,this._setKernelPosition(0,0)}_setKernelPosition(t,e){if(!this.kernelGroup)return;const{kernelSize:n}=this.opts,s=this._cellSize,r=this._totalInputSize,a=(e+(n-1)/2-(r-1)/2)*s,o=(t+(n-1)/2-(r-1)/2)*s;this.kernelGroup.position.x=this._inputCenter.x+a,this.kernelGroup.position.z=this._inputCenter.z+o,this.kernelGroup.position.y=0;const{padding:l,inputSize:c}=this.opts;for(let h=0;h<c;h++)for(let d=0;d<c;d++){const u=this.inputCells[h][d],f=h+l>=t&&h+l<t+n&&d+l>=e&&d+l<e+n,g=u.material;f?(g.emissive.setHex(15485081),g.emissiveIntensity=1.2):(g.emissive.copy(u.userData.baseEmissive),g.emissiveIntensity=.5)}}_writeOutputCell(t,e,n){var l;const s=(l=this.outputCells[t])==null?void 0:l[e];if(!s)return;const r=Math.max(0,Math.min(1,n)),a=.1+r*1;s.userData.targetH=a,s.userData.targetColor=new lt().setHSL(.92,.7,.3+r*.4),s.userData.filled=!0,s.userData.numLabel&&s.parent.remove(s.userData.numLabel);const o=yt(r.toFixed(2),{fontSize:28,color:"#34d399",fontWeight:600});o.position.set(s.position.x,a+.3,s.position.z),o.scale.multiplyScalar(.45),o.visible=this.opts.showNumbers,s.parent.add(o),s.userData.numLabel=o}_computeConvAt(t,e){const{kernelSize:n,padding:s}=this.opts;let r=0;for(let a=0;a<n;a++)for(let o=0;o<n;o++){const l=t+a-s,c=e+o-s;if(l>=0&&c>=0&&l<this.opts.inputSize&&c<this.opts.inputSize){const h=a===Math.floor(n/2)&&o===Math.floor(n/2)?1:-1/(n*n-1);r+=this.inputValues[l][c]*h}}return Math.abs(r)*1.6}update(t,e){if(!this.opts.animate||!this.kernelGroup)return;if(this.tickTimer+=t*this.opts.speed,this.tickTimer>=.55){this.tickTimer=0;const s=this.outSize*this.outSize,r=Math.floor(this.tickIdx/this.outSize),a=this.tickIdx%this.outSize,o=r*this.opts.stride,l=a*this.opts.stride;this._setKernelPosition(o,l);const c=this._computeConvAt(o,l);this._writeOutputCell(r,a,c),this.tickIdx=(this.tickIdx+1)%s,this.tickIdx===0&&this.outputCells.forEach(h=>h.forEach(d=>{d.userData.targetH=0,d.userData.filled=!1,d.userData.targetColor=new lt("#1a1d2b")}))}this.outputCells.forEach(s=>s.forEach(r=>{const a=r.userData.targetH??.05;this._cellSize,r.scale.y*.05;const o=a/.05,l=r.scale.y+(o-r.scale.y)*Math.min(1,t*6),c=Math.max(.001,l);r.scale.y=c,r.position.y=c*.05/2,r.userData.targetColor&&(r.material.color.lerp(r.userData.targetColor,Math.min(1,t*4)),r.material.emissive.lerp(r.userData.targetColor,Math.min(1,t*4)),r.material.emissiveIntensity=r.userData.filled?.7:.05)})),this.kernelGroup&&(this.kernelGroup.position.y=Math.sin(e*2)*.05)}onActivate(){}onDeactivate(){}}class F0{constructor(){this.scene=new yi,this.scene.fog=new On("#06070d",35,130),this.camera=new Me(45,1,.1,200),this.camera.position.set(8,14,28),this.camera.lookAt(0,2,0),Mi(this.scene),Si(this.scene,60,30,-4),this.root=new qt,this.scene.add(this.root),this.opts={seqLen:6,heads:2,dModel:256,causalMask:!1,showPositionalEncoding:!1,temperature:1,animate:!0,speed:1,showNumbers:!0},this._perHeadCells=[],this._perHeadLabels=[],this.queryTokens=[],this.keyTokens=[],this.valueTokens=[],this.outputTokens=[],this.activeRow=0,this.rowTimer=0,this._build()}setOptions(t){const e=new Set(["seqLen","heads","dModel","causalMask","showPositionalEncoding","temperature"]),n=Object.keys(t).some(s=>e.has(s));Object.assign(this.opts,t),n?this._build():"showNumbers"in t&&this._applyNumberVisibility()}_genWeights(t,e=0,n=1){const s=e*7.31,r=[];for(let a=0;a<t;a++){const o=[];for(let c=0;c<t;c++){const h=Math.abs(a-c);let d;e%3===0?d=-h*.65+Math.sin(a*1.3+c*.7+s)*.45:e%3===1?d=(c===0?1.6:-.35)+Math.sin(a*.9+c*1.4+s)*.3:d=-Math.abs(a-c-1)*.65+Math.sin(a*1.5+c*.85+s)*.35,o.push(Math.exp(d/Math.max(.1,n)))}const l=o.reduce((c,h)=>c+h,0);r.push(o.map(c=>c/l))}return r}_build(){Nn(this.root),this._perHeadCells=[],this._perHeadLabels=[],this.queryTokens=[],this.keyTokens=[],this.valueTokens=[],this.outputTokens=[],this.connLines=[];const t=Math.max(2,Math.min(12,this.opts.seqLen)),e=Math.max(1,Math.min(4,this.opts.heads)),n=.7,s=1.2,r=["#67e8f9","#fb923c","#a78bfa","#34d399"],a=[];for(let A=0;A<e;A++)a.push(this._genWeights(t,A,this.opts.temperature));const o=t*n,l=t*n;for(let A=0;A<e;A++){const F=a[A],v=r[A%r.length],x=new lt(v),L=A*(l+s),I=new qt;I.position.set(0,L,0),this.root.add(I);const z=[],q=[];for(let $=0;$<t;$++){z.push([]);for(let H=0;H<t;H++){const nt=(H-(t-1)/2)*n,rt=($-(t-1)/2)*n,pt=F[$][H],Ft=this.opts.causalMask&&H>$,Ht=Ft?.05:.05+pt*1.6;let Y,J;if(Ft)Y=new lt("#1e293b"),J=new lt("#0f172a");else{const zt=new lt().setHSL(.62-A*.15,.85,.25+pt*.45).clone().lerp(x,.28);Y=zt,J=zt.clone().multiplyScalar(.55)}const vt=new he(n*.88,Ht,n*.88),dt=new ee({color:Y,emissive:J,emissiveIntensity:Ft?0:.55,roughness:.3,metalness:.15,clearcoat:.5,transparent:!0,opacity:Ft?.22:.92}),At=new bt(vt,dt);if(At.position.set(nt,Ht/2,rt),At.userData={i:$,j:H,w:pt,h:A,baseColor:Y.clone(),baseEmissive:J.clone(),isMasked:Ft},I.add(At),z[$].push(At),!Ft&&this.opts.showNumbers){const Et=yt(pt.toFixed(2),{fontSize:22,color:"#f0f9ff",fontWeight:600});Et.position.set(nt,Ht+.18,rt),Et.scale.multiplyScalar(.36),I.add(Et),q.push(Et)}}}this._perHeadCells.push(z),this._perHeadLabels.push(q);const G=yt(`Head ${A+1}  (${A%3===0?"local":A%3===1?"global":"offset"})`,{fontSize:22,color:v});if(G.position.set(-o/2-1.8,l/2,-o/2-.5),I.add(G),A===0){const $=yt("queries →",{fontSize:20,color:"#67e8f9"});$.position.set(-o/2-1,.2,0),I.add($);const H=yt("← keys",{fontSize:20,color:"#fb923c"});H.position.set(0,.2,-o/2-1),I.add(H)}if(this.opts.causalMask&&A===0){const $=yt("▲ masked (causal)",{fontSize:18,color:"#475569"});$.position.set(o/2+.5,l*.7,-o/2-.5),I.add($)}}const c=e*(l+s)-s,h=yt(`Self-Attention  Q·K^T → softmax  |  ${e} head${e>1?"s":""}  d_model=${this.opts.dModel}`,{fontSize:24});h.position.set(0,c+1.5,-o/2-.5),this.root.add(h);const d=Math.round(this.opts.dModel/e),u=yt(`d_k = ${d}  |  scale = 1/√${d} = ${(1/Math.sqrt(d)).toFixed(3)}`,{fontSize:18,color:"#a78bfa"});if(u.position.set(0,c+.5,-o/2-.5),this.root.add(u),this.opts.causalMask){const A=yt("decoder-only  (GPT / autoregressive)",{fontSize:18,color:"#fbbf24"});A.position.set(0,-1.2,-o/2-.5),this.root.add(A)}const f=(e-1)*(l+s)/2,g={q:"#67e8f9",k:"#fb923c",v:"#a78bfa",o:"#4ade80"},_=-o/2-2.8;for(let A=0;A<t;A++){const F=(A-(t-1)/2)*n,v=this._makeTokenSphere(g.q);v.position.set(_,f+.5,F),this.root.add(v),this.queryTokens.push(v),this.opts.showPositionalEncoding&&this._addPEBars(v,A,t,g.q)}const m=yt("Q",{fontSize:36,color:g.q,fontWeight:700});m.position.set(_,f+2.2,-o/2-.5),this.root.add(m);const p=-o/2-2.8;for(let A=0;A<t;A++){const F=(A-(t-1)/2)*n,v=this._makeTokenSphere(g.k);v.position.set(F,f+.5,p),this.root.add(v),this.keyTokens.push(v),this.opts.showPositionalEncoding&&this._addPEBars(v,A,t,g.k)}const w=yt("K",{fontSize:36,color:g.k,fontWeight:700});w.position.set(-o/2-1.4,f+2.2,p),this.root.add(w);const M=o/2+2.2;for(let A=0;A<t;A++){const F=(A-(t-1)/2)*n,v=this._makeTokenSphere(g.v);v.position.set(M,f+.5,F),this.root.add(v),this.valueTokens.push(v)}const b=yt("V",{fontSize:36,color:g.v,fontWeight:700});b.position.set(M,f+2.2,-o/2-.5),this.root.add(b);const P=M+2.6;for(let A=0;A<t;A++){const F=(A-(t-1)/2)*n,v=this._makeTokenSphere(g.o,.65);v.position.set(P,f+.55,F),this.root.add(v),this.outputTokens.push(v)}const R=yt("Output",{fontSize:28,color:g.o});if(R.position.set(P,f+2.2,-o/2-.5),this.root.add(R),this.opts.temperature!==1){const A=yt(`τ = ${this.opts.temperature.toFixed(1)}  (${this.opts.temperature<1?"sharp":"uniform"})`,{fontSize:20,color:"#fbbf24"});A.position.set(P+1.5,f+1,0),this.root.add(A)}const T=18+t*1.6+e*2.2;this.camera.position.set(7,f+10,T),this.camera.lookAt(0,f*.5,0)}_makeTokenSphere(t,e=.5){const n=new ze(e/2,24,18),s=new ee({color:t,emissive:t,emissiveIntensity:.4,metalness:.2,roughness:.25,clearcoat:.8}),r=new bt(n,s);return r.userData.baseEmissiveIntensity=.4,r}_addPEBars(t,e,n,s){for(let a=0;a<5;a++){const o=a%2===0?Math.sin(e/Math.pow(1e4,2*a/(this.opts.dModel||256))):Math.cos(e/Math.pow(1e4,2*a/(this.opts.dModel||256))),l=.04+Math.abs(o)*.28,c=new he(.065,l,.065),h=a/5,d=new ye({color:new lt().setHSL(h,.9,.65),transparent:!0,opacity:.75}),u=new bt(c,d),f=a/5*Math.PI*2;u.position.set(Math.cos(f)*.42,l/2+.28,Math.sin(f)*.42),t.add(u)}}_highlightRow(t){var r,a;const e=Math.max(2,Math.min(12,this.opts.seqLen)),n=Math.max(1,Math.min(4,this.opts.heads));for(let o=0;o<n;o++){const l=this._perHeadCells[o];for(let c=0;c<e;c++)for(let h=0;h<e;h++){const d=(r=l[c])==null?void 0:r[h];!d||d.userData.isMasked||(d.material.color.copy(d.userData.baseColor),d.material.emissive.copy(d.userData.baseEmissive),d.material.emissiveIntensity=.5)}}this.queryTokens.forEach((o,l)=>{o.material.emissiveIntensity=l===t?1.5:.3,o.scale.setScalar(l===t?1.4:1)}),this.outputTokens.forEach((o,l)=>{o.material.emissiveIntensity=l===t?1.5:.3,o.scale.setScalar(l===t?1.4:1)});for(let o=0;o<n;o++){const l=this._perHeadCells[o],c=this._genWeights(e,o,this.opts.temperature);for(let h=0;h<e;h++){const d=(a=l[t])==null?void 0:a[h];if(!d||d.userData.isMasked)continue;const u=c[t][h];d.material.emissiveIntensity=.9+u*1.6}}const s=this._genWeights(e,0,this.opts.temperature)[t];this.keyTokens.forEach((o,l)=>{o.material.emissiveIntensity=.3+s[l]*2.5,o.scale.setScalar(.85+s[l]*.8)}),this.valueTokens.forEach((o,l)=>{o.material.emissiveIntensity=.3+s[l]*2.5,o.scale.setScalar(.85+s[l]*.8)})}_applyNumberVisibility(){const t=this.opts.showNumbers;this._perHeadLabels.forEach(e=>{e.forEach(n=>{n.visible=t})})}update(t,e){if(!this.opts.animate||!this._perHeadCells.length)return;this.rowTimer+=t*this.opts.speed,this.rowTimer>=1.6&&(this.rowTimer=0,this.activeRow=(this.activeRow+1)%Math.max(2,this.opts.seqLen),this._highlightRow(this.activeRow)),[...this.queryTokens,...this.keyTokens,...this.valueTokens,...this.outputTokens].forEach((r,a)=>{var o;r.position.y=((o=r.userData).baseY??(o.baseY=r.position.y))+Math.sin(e*1.5+a*.4)*.04})}onActivate(){this._highlightRow(this.activeRow)}onDeactivate(){}}class z0{constructor(){this.scene=new yi,this.scene.fog=new On("#06070d",25,90),this.camera=new Me(45,1,.1,200),this.camera.position.set(0,13,22),this.camera.lookAt(0,0,0),Mi(this.scene),Si(this.scene,60,30,-4),this.root=new qt,this.scene.add(this.root),this.opts={learningRate:.05,animate:!0,speed:1,gridRes:55,gridSize:14,showNumbers:!0},this._build()}setOptions(t){const e="gridRes"in t||"gridSize"in t;Object.assign(this.opts,t),e&&this._buildSurface(),"learningRate"in t&&this._resetOptimizers(),"showNumbers"in t&&this._applyNumberVisibility()}_loss(t,e){return .6*(Math.sin(t*.6)+Math.cos(e*.6))+.04*(t*t+e*e)+.5*Math.sin(t*.35)*Math.cos(e*.4)}_grad(t,e){const s=(this._loss(t+.001,e)-this._loss(t-.001,e))/.002,r=(this._loss(t,e+.001)-this._loss(t,e-.001))/(2*.001);return[s,r]}_build(){Nn(this.root),this._buildSurface(),this._buildContours(),this._buildOptimizers(),this._buildAxisLabels()}_buildSurface(){this.surfaceMesh&&(this.root.remove(this.surfaceMesh),this.root.remove(this.wireMesh),this.surfaceMesh.geometry.dispose(),this.surfaceMesh.material.dispose(),this.wireMesh.geometry.dispose(),this.wireMesh.material.dispose());const{gridRes:t,gridSize:e}=this.opts,n=new vn(e,e,t,t);n.rotateX(-Math.PI/2);const s=n.attributes.position,r=new Float32Array(s.count*3),a=new lt("#0e7490"),o=new lt("#a78bfa"),l=new lt("#f472b6");let c=1/0,h=-1/0;for(let _=0;_<s.count;_++){const m=this._loss(s.getX(_),s.getZ(_));s.setY(_,m),c=Math.min(c,m),h=Math.max(h,m)}for(let _=0;_<s.count;_++){const m=(s.getY(_)-c)/(h-c||1),p=new lt;m<.5?p.copy(a).lerp(o,m*2):p.copy(o).lerp(l,(m-.5)*2),r[_*3]=p.r,r[_*3+1]=p.g,r[_*3+2]=p.b}n.setAttribute("color",new $e(r,3)),n.computeVertexNormals();const d=new ee({vertexColors:!0,roughness:.55,metalness:.1,clearcoat:.4,transparent:!0,opacity:.88,side:We});this.surfaceMesh=new bt(n,d),this.surfaceMesh.position.y=-1,this.root.add(this.surfaceMesh);const u=new rh(n),f=new ue({color:"#a78bfa",transparent:!0,opacity:.07});this.wireMesh=new sn(u,f),this.wireMesh.position.y=-1+.005,this.root.add(this.wireMesh);const g=yt("Loss  L(θ₁, θ₂)",{fontSize:26});g.position.set(0,4.5,-e/2-.5),this.root.add(g)}_buildContours(){this._contourGroup&&this.root.remove(this._contourGroup);const t=new qt;t.position.y=-1,this.root.add(t),this._contourGroup=t;const{gridSize:e}=this.opts,n=[.3,.6,.9,1.2,1.55],s=["#67e8f9","#a78bfa","#f472b6","#fbbf24","#f87171"],r=180;n.forEach((a,o)=>{const l=[];for(let c=0;c<=r;c++){const h=c/r*Math.PI*2,d=[Math.cos(h),Math.sin(h)];let u=.2,f=null;for(;u<e/2-.3;){const g=this._loss(d[0]*u,d[1]*u);(f===null||Math.abs(g-a)<Math.abs(f.d))&&(f={r:u,d:g-a}),u+=.12}if(f){const g=d[0]*f.r,_=d[1]*f.r;l.push(new E(g,this._loss(g,_)+.04,_))}}if(l.length>2){const c=new se().setFromPoints(l),h=new ue({color:s[o],transparent:!0,opacity:.28});t.add(new _n(c,h))}})}_buildAxisLabels(){const{gridSize:t}=this.opts,e=t/2,n=yt("θ₁",{fontSize:22,color:"#94a3b8"});n.position.set(e+.8,-1,0),this.root.add(n);const s=yt("θ₂",{fontSize:22,color:"#94a3b8"});s.position.set(0,-1,e+.8),this.root.add(s);const r=yt("L↑",{fontSize:22,color:"#f472b6"});r.position.set(-e-.8,2,-e-.8),this.root.add(r),this._axisLabels=[n,s,r]}_buildOptimizers(){this.optimizerMarkers&&(this.optimizerMarkers.forEach(s=>this.root.remove(s.marker)),this.optimizerTrails.forEach(s=>{this.root.remove(s.line),s.line.geometry.dispose(),s.line.material.dispose()})),this.optimizerMarkers=[],this.optimizerTrails=[];const t=-5,e=-5;[{name:"SGD",color:"#38bdf8",kind:"sgd"},{name:"Momentum",color:"#fbbf24",kind:"momentum"},{name:"Adam",color:"#34d399",kind:"adam"}].forEach((s,r)=>{const a=new ze(.28,10,8),o=new ee({color:s.color,emissive:s.color,emissiveIntensity:1,metalness:.3,roughness:.2,clearcoat:.9}),l=new bt(a,o),c=(r-1)*.5,h=t+c,d=e+c;l.position.set(h,this._loss(h,d)-1+.35,d),this.root.add(l);const u=yt(s.name,{fontSize:22,color:s.color});u.position.set(0,.7,0),u.visible=this.opts.showNumbers,l.add(u),l.userData.nameLabel=u;const f=400,g=new se,_=new Float32Array(f*3);g.setAttribute("position",new $e(_,3)),g.setDrawRange(0,0);const m=new ue({color:s.color,transparent:!0,opacity:.85}),p=new _n(g,m);this.root.add(p);const w=new E(0,0,-1),M=new lt(s.color),b=this._loss(h,d)-1+.35,P=new t0(w,new E(h,b,d),1.2,M,.35,.2);this.root.add(P),this.optimizerMarkers.push({marker:l,x:h,z:d,vx:0,vz:0,mx:0,mz:0,vAx:0,vAz:0,step:0,kind:s.kind,color:s.color,name:s.name,active:!0,arrow:P}),this.optimizerTrails.push({line:p,points:[],maxPoints:f})})}_resetOptimizers(){if(!this.optimizerMarkers)return;const t=-5,e=-5;this.optimizerMarkers.forEach((n,s)=>{const r=(s-1)*.5;n.x=t+r,n.z=e+r,n.vx=0,n.vz=0,n.mx=0,n.mz=0,n.vAx=0,n.vAz=0,n.step=0,n.active=!0,n.arrow&&n.arrow.position.set(n.x,this._loss(n.x,n.z)-1+.35,n.z)}),this.optimizerTrails.forEach(n=>{n.points=[],n.line.geometry.setDrawRange(0,0)})}_stepOptimizer(t){const e=this.opts.learningRate,[n,s]=this._grad(t.x,t.z);if(t.kind==="sgd")t.x-=e*n,t.z-=e*s;else if(t.kind==="momentum")t.vx=.9*t.vx+n,t.vz=.9*t.vz+s,t.x-=e*t.vx,t.z-=e*t.vz;else if(t.kind==="adam"){t.step+=1,t.mx=.9*t.mx+(1-.9)*n,t.mz=.9*t.mz+(1-.9)*s,t.vAx=.999*t.vAx+(1-.999)*n*n,t.vAz=.999*t.vAz+(1-.999)*s*s;const c=t.mx/(1-Math.pow(.9,t.step)),h=t.mz/(1-Math.pow(.9,t.step)),d=t.vAx/(1-Math.pow(.999,t.step)),u=t.vAz/(1-Math.pow(.999,t.step));t.x-=e*4*c/(Math.sqrt(d)+1e-8),t.z-=e*4*h/(Math.sqrt(u)+1e-8)}const r=this.opts.gridSize/2-.4;t.x=Math.max(-r,Math.min(r,t.x)),t.z=Math.max(-r,Math.min(r,t.z))}_applyNumberVisibility(){var e;const t=this.opts.showNumbers;(e=this.optimizerMarkers)==null||e.forEach(n=>{n.marker.userData.nameLabel&&(n.marker.userData.nameLabel.visible=t),n.arrow&&(n.arrow.visible=t)})}update(t,e){if(this.opts.animate&&this.optimizerMarkers){this._stepTimer=(this._stepTimer||0)+t*this.opts.speed;const n=.06;for(;this._stepTimer>=n;)this._stepTimer-=n,this.optimizerMarkers.forEach((s,r)=>{if(!s.active)return;this._stepOptimizer(s);const o=this._loss(s.x,s.z)-1+.35;if(s.marker.position.set(s.x,o,s.z),s.arrow){const[d,u]=this._grad(s.x,s.z),f=Math.sqrt(d*d+u*u);if(f>1e-4){const g=new E(-d/f,0,-u/f);s.arrow.position.set(s.x,o,s.z),s.arrow.setDirection(g);const _=Math.min(2,.4+f*.55);s.arrow.setLength(_,_*.28,_*.16)}}const l=this.optimizerTrails[r];l.points.push(s.x,o-.05,s.z),l.points.length>l.maxPoints*3&&l.points.splice(0,3);const c=l.line.geometry.attributes.position.array,h=l.points.length/3;for(let d=0;d<h;d++)c[d*3]=l.points[d*3],c[d*3+1]=l.points[d*3+1],c[d*3+2]=l.points[d*3+2];l.line.geometry.attributes.position.needsUpdate=!0,l.line.geometry.setDrawRange(0,h)});this.optimizerMarkers.forEach((s,r)=>{const a=.85+Math.sin(e*3+r)*.15;s.marker.material.emissiveIntensity=.7+a*.4})}}reset(){this._resetOptimizers()}onActivate(){}onDeactivate(){}}class B0{constructor(){this.scene=new yi,this.scene.fog=new On("#0a0820",25,90),this.camera=new Me(45,1,.1,200),this.camera.position.set(10,13,20),this.camera.lookAt(0,0,0),Mi(this.scene),Si(this.scene,50,25,-3.5),this.root=new qt,this.scene.add(this.root),this.opts={inputSize:4,kernelSize:2,stride:2,mode:"max",animate:!0,speed:1,showNumbers:!0},this._build()}setOptions(t){const e=Object.keys(t).some(n=>n!=="showNumbers"&&n!=="animate"&&n!=="speed");Object.assign(this.opts,t),e?this._build():"showNumbers"in t&&this._applyNumberVisibility()}_applyNumberVisibility(){const t=this.opts.showNumbers;this.inputCells.forEach(e=>e.forEach(n=>{n.userData.label&&(n.userData.label.visible=t)})),this.outputCells.forEach(e=>e.forEach(n=>{n.userData.label&&(n.userData.label.visible=t)}))}_build(){Nn(this.root),this.kernelGroup=null,this.inputCells=[],this.outputCells=[],this.tickIdx=0,this.tickTimer=0;const t=Math.max(2,Math.min(8,this.opts.inputSize)),e=Math.max(1,Math.min(4,this.opts.kernelSize)),n=Math.max(1,Math.min(4,this.opts.stride)),s=Math.floor((t-e)/n)+1;if(s<=0)return;this.outSize=s;const r=[];for(let M=0;M<t;M++){const b=[];for(let P=0;P<t;P++){const R=Math.sin(M*12.9898+P*78.233)*43758.5453,T=R-Math.floor(R);b.push(Math.floor(T*9)+1)}r.push(b)}this.inputValues=r;const a=.95,o=new E(-(t*a)/2-3,0,0),l=new qt;l.position.copy(o),this.root.add(l);for(let M=0;M<t;M++){const b=[];for(let P=0;P<t;P++){const R=(P-(t-1)/2)*a,T=(M-(t-1)/2)*a,A=r[M][P],F=.1+A/9*1.5,v=new he(a*.9,F,a*.9),x=new ee({color:new lt().setHSL(.55,.6,.3+A/9*.35),emissive:new lt().setHSL(.55,.6,.15+A/9*.2),emissiveIntensity:.45,roughness:.35,metalness:.15,clearcoat:.6}),L=new bt(v,x);L.position.set(R,F/2,T),L.userData={i:M,j:P,v:A,baseColor:x.color.clone(),baseEmissive:x.emissive.clone()},l.add(L);const I=yt(`${A}`,{fontSize:56,color:"#ffffff",fontWeight:700});I.position.set(R,F+.45,T),I.scale.multiplyScalar(.55),I.visible=this.opts.showNumbers,L.userData.label=I,l.add(I),b.push(L)}this.inputCells.push(b)}const c=yt(`Input  ${t}×${t}`,{fontSize:28});c.position.set(0,2.7,t/2*a+.8),l.add(c);const h=new qt;h.position.copy(o),this.root.add(h);const d=new he(e*a,.7,e*a),u=new ee({color:"#fbbf24",emissive:"#fbbf24",emissiveIntensity:.8,transparent:!0,opacity:.32,transmission:.5,thickness:.7,roughness:.05,clearcoat:1}),f=new bt(d,u);f.position.y=1.4,h.add(f);const g=new sn(new In(d),new ue({color:"#fde68a",transparent:!0,opacity:1}));g.position.y=1.4,h.add(g),this.kernelGroup=h;const _=yt(`${this.opts.mode==="max"?"MAX":"AVG"} ${e}×${e}`,{fontSize:22,color:"#fde68a",fontWeight:700});_.position.set(0,2.3,0),h.add(_);const m=new E(t*a/2+3,0,0),p=new qt;p.position.copy(m),this.root.add(p);for(let M=0;M<s;M++){const b=[];for(let P=0;P<s;P++){const R=(P-(s-1)/2)*a*1.1,T=(M-(s-1)/2)*a*1.1,A=new he(a*.95,.1,a*.95),F=new ee({color:"#1a1d2b",emissive:"#1a1d2b",roughness:.4,metalness:.1,transparent:!0,opacity:.7}),v=new bt(A,F);v.position.set(R,.05,T),v.userData={i:M,j:P,filled:!1,targetH:0,label:null},p.add(v),b.push(v)}this.outputCells.push(b)}const w=yt(`Output  ${s}×${s}`,{fontSize:28});w.position.set(0,2.7,s/2*a+.8),p.add(w),this._cellSize=a,this._inputCenter=o,this._outputCenter=m,this._setKernelPosition(0,0)}_setKernelPosition(t,e){if(!this.kernelGroup)return;const n=this.opts.inputSize,s=this.opts.kernelSize,r=this._cellSize,a=(e+(s-1)/2-(n-1)/2)*r,o=(t+(s-1)/2-(n-1)/2)*r;this.kernelGroup.position.x=this._inputCenter.x+a,this.kernelGroup.position.z=this._inputCenter.z+o;for(let l=0;l<n;l++)for(let c=0;c<n;c++){const h=this.inputCells[l][c];if(!h)continue;const d=l>=t&&l<t+s&&c>=e&&c<e+s,u=h.material;d?(u.emissive.setHex(16498468),u.emissiveIntensity=1.4):(u.emissive.copy(h.userData.baseEmissive),u.emissiveIntensity=.45)}}_computeAt(t,e){const n=this.opts.kernelSize,s=this.opts.inputSize;let r=-1/0,a=0,o=0;const l=[];for(let c=0;c<n;c++)for(let h=0;h<n;h++){const d=t+c,u=e+h;if(d>=0&&u>=0&&d<s&&u<s){const f=this.inputValues[d][u];l.push(f),f>r&&(r=f),a+=f,o++}}return this.opts.mode==="max"?{value:r,contributing:l}:{value:o>0?a/o:0,contributing:l}}_writeOutputCell(t,e,n){var o;const s=(o=this.outputCells[t])==null?void 0:o[e];if(!s)return;s.userData.targetH=.1+n/9*1.5,s.userData.targetColor=new lt().setHSL(this.opts.mode==="max"?.06:.32,.7,.3+n/9*.4),s.userData.filled=!0,s.userData.value=n,s.userData.label&&s.parent.remove(s.userData.label);const r=this.opts.mode==="max"?`${n}`:n.toFixed(1),a=yt(r,{fontSize:56,color:"#ffffff",fontWeight:700});a.position.set(s.position.x,s.userData.targetH+.45,s.position.z),a.scale.multiplyScalar(.55),a.visible=this.opts.showNumbers,s.parent.add(a),s.userData.label=a}update(t,e){if(!this.opts.animate||!this.kernelGroup)return;if(this.tickTimer+=t*this.opts.speed,this.tickTimer>=.85){this.tickTimer=0;const s=this.outSize*this.outSize,r=Math.floor(this.tickIdx/this.outSize),a=this.tickIdx%this.outSize,o=r*this.opts.stride,l=a*this.opts.stride;this._setKernelPosition(o,l);const{value:c}=this._computeAt(o,l);this._writeOutputCell(r,a,c),this.tickIdx=(this.tickIdx+1)%s,this.tickIdx===0&&this.outputCells.forEach(h=>h.forEach(d=>{d.userData.targetH=.1,d.userData.filled=!1,d.userData.targetColor=new lt("#1a1d2b"),d.userData.label&&(d.parent.remove(d.userData.label),d.userData.label=null)}))}this.outputCells.forEach(s=>s.forEach(r=>{const a=r.userData.targetH??.1,o=r.scale.y+(a/.1-r.scale.y)*Math.min(1,t*6);r.scale.y=o,r.position.y=o*.1/2,r.userData.targetColor&&(r.material.color.lerp(r.userData.targetColor,Math.min(1,t*4)),r.material.emissive.lerp(r.userData.targetColor,Math.min(1,t*4)),r.material.emissiveIntensity=r.userData.filled?.85:.05)})),this.kernelGroup&&(this.kernelGroup.position.y=Math.sin(e*2)*.06)}onActivate(){}onDeactivate(){}}class k0{constructor(){this.scene=new yi,this.scene.fog=new On("#06070d",40,130),this.camera=new Me(42,1,.1,260),this.camera.position.set(0,16,36),this.camera.lookAt(0,0,0),Mi(this.scene),Si(this.scene,100,50,-5),this.root=new qt,this.scene.add(this.root),this.opts={animate:!0,speed:1,showNumbers:!0},this._build()}setOptions(t){Object.assign(this.opts,t),"showNumbers"in t&&this._applyNumberVisibility()}_build(){Nn(this.root),this._nnNodes=[],this._nnEdges=[],this._cnnSlabs=[],this._chainDots=[],this._buildMiniNN(),this._buildLossHint(),this._buildMiniCNN(),this._buildChainConnectors(),this._buildPipelineLabel()}_buildMiniNN(){const t=new qt;t.position.set(-17,0,0),this.root.add(t),this.nnGroup=t;const e=[3,4,4,2],n=2.5,s=.35,r=-((e.length-1)*n)/2;e.forEach((l,c)=>{const h=r+c*n,d=[];for(let u=0;u<l;u++){const f=(u-(l-1)/2)*1.2,g=200+c*35,_=new ze(s,12,8),m=new ee({color:`hsl(${g},70%,55%)`,emissive:`hsl(${g},70%,35%)`,emissiveIntensity:.5,metalness:.2,roughness:.3,clearcoat:.8}),p=new bt(_,m);p.position.set(h,f,0),p.userData.phase=c*.7+u*.3,t.add(p),d.push(p)}this._nnNodes.push(d)});for(let l=0;l<e.length-1;l++){const c=this._nnNodes[l],h=this._nnNodes[l+1];c.forEach(d=>{h.forEach(u=>{const f=new se().setFromPoints([d.position.clone(),u.position.clone()]),g=new ue({color:"#a78bfa",transparent:!0,opacity:.22}),_=new _n(f,g);t.add(_),this._nnEdges.push({line:_,mat:g,phase:Math.random()*Math.PI*2})})})}const a=yt("Neural Net",{fontSize:26,color:"#c4b5fd"});a.position.set(0,3.5,0),t.add(a);const o=yt("Forward pass  →  ∇L  →  θ update",{fontSize:18,color:"#7c6fa0"});o.position.set(0,-3.2,0),o.visible=this.opts.showNumbers,this._nnSubLabel=o,t.add(o)}_buildLossHint(){const t=new ze(.7,18,12),e=new ee({color:"#f472b6",emissive:"#f472b6",emissiveIntensity:1.2,metalness:.1,roughness:.1,clearcoat:1,transparent:!0,opacity:.85});this._lossSphere=new bt(t,e),this._lossSphere.position.set(0,1.5,0),this.root.add(this._lossSphere);const n=new bs(1.6,.04,8,48),s=new ye({color:"#f472b6",transparent:!0,opacity:.35});this._lossRing=new bt(n,s),this._lossRing.position.set(0,1.5,0),this._lossRing.rotation.x=Math.PI/2,this.root.add(this._lossRing);const r=yt("L(θ)  Loss",{fontSize:26,color:"#f9a8d4"});r.position.set(0,4,0),this.root.add(r);const a=yt("min  L = E[ℓ(ŷ, y)]",{fontSize:18,color:"#9d6a8a"});a.position.set(0,-2,0),a.visible=this.opts.showNumbers,this._lossSubLabel=a,this.root.add(a)}_buildMiniCNN(){const t=new qt;t.position.set(17,0,0),this.root.add(t),this.cnnGroup=t;const e=[{w:2.4,h:2.4,d:.5,color:"#ec4899",label:"Input"},{w:2,h:2,d:1,color:"#a78bfa",label:"Conv"},{w:1.4,h:1.4,d:1.4,color:"#22d3ee",label:"Pool"},{w:1,h:1,d:.9,color:"#34d399",label:"Conv"},{w:.4,h:3.2,d:.4,color:"#fbbf24",label:"FC"}],n=2.8,s=-((e.length-1)*n)/2;e.forEach((o,l)=>{const c=s+l*n,h=new he(o.w,o.h,o.d),d=new ee({color:o.color,emissive:o.color,emissiveIntensity:.35,transparent:!0,opacity:.72,roughness:.3,metalness:.1,clearcoat:.6}),u=new bt(h,d);u.position.set(c,0,0),u.userData.baseEmissive=.35,u.userData.phase=l*.5,t.add(u);const f=new sn(new In(h),new ue({color:o.color,transparent:!0,opacity:.55}));if(f.position.set(c,0,0),t.add(f),this._cnnSlabs.push(u),l<e.length-1){const _=s+(l+1)*n,m=[new E(c+o.w/2,0,0),new E(_-e[l+1].w/2,0,0)];t.add(new _n(new se().setFromPoints(m),new ue({color:"#4b5563",transparent:!0,opacity:.5})))}const g=yt(o.label,{fontSize:20,color:o.color});g.position.set(c,-o.h/2-.7,0),g.scale.multiplyScalar(.85),t.add(g)});const r=yt("CNN",{fontSize:26,color:"#f9a8d4"});r.position.set(0,3.5,0),t.add(r);const a=yt("Conv → Pool → FC  →  ∇L",{fontSize:18,color:"#7c6fa0"});a.position.set(0,-3.2,0),a.visible=this.opts.showNumbers,this._cnnSubLabel=a,t.add(a)}_buildChainConnectors(){[{from:new E(-10,1,0),to:new E(-2.5,1.5,0),color:"#a78bfa"},{from:new E(2.5,1.5,0),to:new E(10,1,0),color:"#f472b6"}].forEach((s,r)=>{const a=new E().lerpVectors(s.from,s.to,.5);a.y+=2.5;const o=new Xg(s.from,a,s.to),l=o.getPoints(40),c=new se().setFromPoints(l),h=new ue({color:s.color,transparent:!0,opacity:.4});this.root.add(new _n(c,h));const d=new ze(.18,8,6),u=new ee({color:s.color,emissive:s.color,emissiveIntensity:1.4,metalness:.1,roughness:.1}),f=new bt(d,u);this.root.add(f),this._chainDots.push({curve:o,dot:f,t:r*.5%1});const g=new ee({color:s.color,emissive:s.color,emissiveIntensity:.7,metalness:.1,roughness:.2,transparent:!0,opacity:.6}),_=new bt(new ze(.12,8,6),g);this.root.add(_),this._chainDots.push({curve:o,dot:_,t:(r*.5+.5)%1,forward:!0})});const e=yt("∇ backprop",{fontSize:20,color:"#a78bfa"});e.position.set(-7.5,5.2,0),e.scale.multiplyScalar(.9),e.visible=this.opts.showNumbers,this._bpLabel1=e,this.root.add(e);const n=yt("∇ backprop",{fontSize:20,color:"#f472b6"});n.position.set(7.5,5.2,0),n.scale.multiplyScalar(.9),n.visible=this.opts.showNumbers,this._bpLabel2=n,this.root.add(n)}_buildPipelineLabel(){const t=yt("Training Pipeline:  NN ← Loss ← CNN  (forward →, backprop ←)",{fontSize:22});t.position.set(0,8,0),this.root.add(t)}_applyNumberVisibility(){const t=this.opts.showNumbers;this._nnSubLabel&&(this._nnSubLabel.visible=t),this._cnnSubLabel&&(this._cnnSubLabel.visible=t),this._lossSubLabel&&(this._lossSubLabel.visible=t),this._bpLabel1&&(this._bpLabel1.visible=t),this._bpLabel2&&(this._bpLabel2.visible=t)}update(t,e){if(this.opts.animate){if(this._nnNodes&&(this._nnNodes.forEach(n=>{n.forEach(s=>{const r=Math.sin(e*2.2+s.userData.phase)*.5+.5;s.material.emissiveIntensity=.3+r*.8,s.scale.setScalar(.9+r*.15)})}),this._nnEdges.forEach(n=>{n.mat.opacity=(Math.sin(e*3.5+n.phase)*.5+.5)*.6+.1})),this._cnnSlabs&&this._cnnSlabs.forEach(n=>{const s=Math.sin(e*1.8+n.userData.phase)*.5+.5;n.material.emissiveIntensity=.2+s*.55,n.material.opacity=.55+s*.25}),this._lossSphere){const n=Math.sin(e*2.5)*.5+.5;this._lossSphere.material.emissiveIntensity=.8+n*.7,this._lossRing.rotation.y=e*1.2,this._lossSphere.scale.setScalar(.9+n*.15)}this._chainDots&&this._chainDots.forEach(n=>{n.t=(n.t+t*this.opts.speed*.4)%1;const s=n.forward?n.t:1-n.t,r=n.curve.getPoint(s);n.dot.position.copy(r);const a=.75+Math.sin(e*4)*.25;n.dot.scale.setScalar(a),n.dot.material.emissiveIntensity=.8+a*.7})}}onActivate(){}onDeactivate(){}}const Gi=["#ec4899","#a78bfa","#22d3ee","#fbbf24","#fb923c","#a3e635"];class H0{constructor(){this.scene=new yi,this.scene.fog=new On("#06070d",50,150),this.camera=new Me(44,1,.1,280),this.camera.position.set(2,18,40),this.camera.lookAt(2,0,0),Mi(this.scene),Si(this.scene,110,55,-6),this.root=new qt,this.scene.add(this.root),this.opts={animate:!0,speed:1,showNumbers:!0,numChunks:4,topK:2,showSimilarity:!0,embDim:768},this._flowDots=[],this._embPoints=[],this._dbCells=[],this._dbCols=6,this._chunkMeshes=[],this._labels=[],this._simLabels=[],this._build()}setOptions(t){const e=new Set(["numChunks","embDim"]),n=Object.keys(t).some(s=>e.has(s));Object.assign(this.opts,t),n?this._build():("showNumbers"in t&&this._applyLabelVisibility(),("topK"in t||"showSimilarity"in t)&&(this._applyTopK(),this._buildSimilarityLabels()))}_build(){Nn(this.root),this._flowDots=[],this._embPoints=[],this._dbCells=[],this._chunkMeshes=[],this._labels=[],this._simLabels=[],this._buildDocument(),this._buildChunks(),this._buildEmbeddingSpace(),this._buildVectorDB(),this._buildQuery(),this._buildLLM(),this._buildFlowConnectors(),this._buildPipelineLabel(),this._buildSimilarityLabels()}_buildDocument(){const t=new qt;t.position.set(-18,0,0),this.root.add(t);const e=new he(2.6,3.8,.45),n=new ee({color:"#94a3b8",emissive:"#475569",emissiveIntensity:.5,roughness:.25,metalness:.2,clearcoat:.8,transparent:!0,opacity:.92});this._docMesh=new bt(e,n),t.add(this._docMesh);const s=new sn(new In(e),new ue({color:"#94a3b8",transparent:!0,opacity:.5}));t.add(s);for(let l=0;l<8;l++){const c=.5+Math.random()*1.4,h=new bt(new vn(c,.075),new ye({color:"#cbd5e1",transparent:!0,opacity:.45}));h.position.set(-.6+c/2-1.3,1.55-l*.42,.24),t.add(h)}const r=new bs(2.6,.035,8,48);this._docRing=new bt(r,new ye({color:"#94a3b8",transparent:!0,opacity:.18})),this._docRing.rotation.x=Math.PI/2,t.add(this._docRing);const a=yt("Document",{fontSize:24,color:"#94a3b8"});a.position.set(0,3.2,0),t.add(a),this._labels.push(a);const o=yt("raw text / PDF / HTML",{fontSize:17,color:"#475569"});o.position.set(0,-3.4,0),o.visible=this.opts.showNumbers,this._docSub=o,t.add(o)}_buildChunks(){const t=Math.max(2,Math.min(6,this.opts.numChunks)),e=Gi.slice(0,t),n=new qt;n.position.set(-9,0,0),this.root.add(n),this._chunkMeshes=[];const s=(t-1)*2.1;e.forEach((o,l)=>{const c=(l-(t-1)/2)*2.1,h=new he(2.6,1.3,.42),d=new ee({color:o,emissive:o,emissiveIntensity:.3,transparent:!0,opacity:.8,roughness:.3,metalness:.1,clearcoat:.7}),u=new bt(h,d);u.position.y=c,u.userData.phase=l*.9,n.add(u),this._chunkMeshes.push(u);const f=new sn(new In(h),new ue({color:o,transparent:!0,opacity:.55}));f.position.set(0,c,0),n.add(f);for(let _=0;_<3;_++){const m=.4+Math.random()*1.5,p=new bt(new vn(m,.065),new ye({color:o,transparent:!0,opacity:.38}));p.position.set(-.65+m/2-1.3,c-.25+_*.24,.22),n.add(p)}const g=yt(`C${l+1}`,{fontSize:18,color:o});g.position.set(1.6,c,.3),g.visible=this.opts.showNumbers,n.add(g)});const r=yt(`Chunks  (n=${t})`,{fontSize:24,color:"#c4b5fd"});r.position.set(0,s/2+1.5,0),n.add(r),this._labels.push(r);const a=yt("text splitting → overlap",{fontSize:17,color:"#6d28d9"});a.position.set(0,-s/2-1.4,0),a.visible=this.opts.showNumbers,this._chunkSub=a,n.add(a)}_buildEmbeddingSpace(){const t=Math.max(2,Math.min(6,this.opts.numChunks)),e=Gi.slice(0,t),n=new qt;n.position.set(0,0,0),this.root.add(n);const s=[];for(let o=0;o<t;o++){const l=o/t*Math.PI*2;s.push(new E(Math.cos(l)*1.8,Math.sin(l)*1.4,(Math.random()-.5)*1.6))}this._embPoints=[],e.forEach((o,l)=>{const c=s[l],h=7+Math.round(6/t);for(let d=0;d<h;d++){const u=new ze(.11,6,4),f=new ee({color:o,emissive:o,emissiveIntensity:.9,metalness:.1,roughness:.2}),g=new bt(u,f);g.position.set(c.x+(Math.random()-.5)*2,c.y+(Math.random()-.5)*2,c.z+(Math.random()-.5)*2),g.userData.phase=Math.random()*Math.PI*2,n.add(g),this._embPoints.push(g)}}),[[1,0,0],[0,1,0],[0,0,1]].forEach(o=>{n.add(new _n(new se().setFromPoints([new E(-o[0]*3.8,-o[1]*3.8,-o[2]*3.8),new E(o[0]*3.8,o[1]*3.8,o[2]*3.8)]),new ue({color:"#334155",transparent:!0,opacity:.35})))}),n.add(new bt(new ze(3.4,10,7),new ye({color:"#1e293b",wireframe:!0,transparent:!0,opacity:.07})));const r=yt("Embedding Space",{fontSize:24,color:"#22d3ee"});r.position.set(0,4.6,0),n.add(r),this._labels.push(r);const a=yt(`${this.opts.embDim}-dim → 3D projection`,{fontSize:17,color:"#155e75"});a.position.set(0,-4.3,0),a.visible=this.opts.showNumbers,this._embSub=a,n.add(a)}_buildVectorDB(){const t=Math.max(2,Math.min(6,this.opts.numChunks)),e=Gi.slice(0,t),n=this._dbCols=6,s=t,r=new qt;r.position.set(10,0,0),this.root.add(r),this._dbCells=[],this._dbGroup=r;const a=n*.9+.6,o=s*.9+.6;r.add(new bt(new he(a,o,.25),new ee({color:"#0f172a",emissive:"#1e293b",emissiveIntensity:.4,transparent:!0,opacity:.75,roughness:.6,metalness:.4})));for(let h=0;h<s;h++)for(let d=0;d<n;d++){const u=(d-(n-1)/2)*.9,f=(h-(s-1)/2)*.9,g=e[h],_=.2+Math.random()*.25,m=new ee({color:g,emissive:g,emissiveIntensity:_,roughness:.3,metalness:.4,clearcoat:.9,transparent:!0,opacity:.9}),p=new bt(new he(.74,.74,.16),m);p.position.set(u,f,.22),p.userData.phase=Math.random()*Math.PI*2,p.userData.baseEmissive=_,p.userData.row=h,r.add(p),this._dbCells.push(p)}for(let h=0;h<s;h++){const d=(h-(s-1)/2)*.9,u=yt(`C${h+1}`,{fontSize:16,color:e[h]});u.position.set(-a/2-.5,d,.5),u.visible=this.opts.showNumbers,r.add(u)}const l=yt("Vector Store",{fontSize:24,color:"#34d399"});l.position.set(0,o/2+.9,0),r.add(l),this._labels.push(l);const c=yt("pgvector / Pinecone / FAISS",{fontSize:17,color:"#065f46"});c.position.set(0,-o/2-.9,0),c.visible=this.opts.showNumbers,this._dbSub=c,r.add(c),this._applyTopK()}_applyTopK(){if(!this._dbCells.length)return;const t=Math.max(1,Math.min(this.opts.numChunks,this.opts.topK));this._dbCells.forEach(e=>{const n=e.userData.row<t;e.material.emissiveIntensity=n?Math.min(1.4,e.userData.baseEmissive*3.5):e.userData.baseEmissive*.35,e.material.opacity=n?1:.45})}_buildSimilarityLabels(){if(this._simLabels.forEach(a=>this.root.remove(a)),this._simLabels=[],!this.opts.showSimilarity)return;const t=Math.max(1,Math.min(this.opts.numChunks,this.opts.topK)),e=Math.max(2,Math.min(6,this.opts.numChunks)),n=[.94,.87,.72,.61,.53,.44],s=this._dbCols,r=e;for(let a=0;a<t;a++){const o=n[a]??.4+Math.random()*.2,l=(a-(r-1)/2)*.9,c=yt(`sim=${o.toFixed(2)} ★`,{fontSize:19,color:"#22d3ee"});c.position.set(10+s*.9/2+1.8,l,.5),this.root.add(c),this._simLabels.push(c)}}_buildQuery(){const t=new qt;t.position.set(18,0,0),this.root.add(t);const e=new ze(.62,14,10),n=new ee({color:"#f0f9ff",emissive:"#22d3ee",emissiveIntensity:1.1,metalness:.05,roughness:.08,clearcoat:1,transparent:!0,opacity:.92});this._querySphere=new bt(e,n),t.add(this._querySphere);const s=(c,h,d)=>{const u=new bt(new bs(c,.03,8,48),new ye({color:h,transparent:!0,opacity:d}));return t.add(u),u};this._qRing1=s(1.4,"#22d3ee",.42),this._qRing1.rotation.x=Math.PI/2,this._qRing2=s(1.9,"#22d3ee",.18),this._qRing2.rotation.z=Math.PI/4,this._qRing3=s(2.4,"#22d3ee",.09),this._qRing3.rotation.x=Math.PI/3;const r=Math.max(1,Math.min(this.opts.numChunks,this.opts.topK)),a=this.opts.numChunks;for(let c=0;c<r;c++){const h=(c-(a-1)/2)*.9,d=Gi[c],u=[new E(0,0,0),new E(-8.5,h,0)];t.add(new _n(new se().setFromPoints(u),new ue({color:d,transparent:!0,opacity:.22})))}const o=yt("Query + Retrieve",{fontSize:24,color:"#67e8f9"});o.position.set(0,3.4,0),t.add(o),this._labels.push(o);const l=yt(`Top-${this.opts.topK} cosine neighbours`,{fontSize:17,color:"#164e63"});l.position.set(0,-3,0),l.visible=this.opts.showNumbers,this._querySub=l,t.add(l)}_buildLLM(){const t=new qt;t.position.set(27,0,0),this.root.add(t);const e=new he(3,3.4,.55),n=new ee({color:"#4ade80",emissive:"#00ea64",emissiveIntensity:.4,roughness:.2,metalness:.1,clearcoat:.8,transparent:!0,opacity:.85});this._llmBox=new bt(e,n),t.add(this._llmBox),t.add(new sn(new In(e),new ue({color:"#4ade80",transparent:!0,opacity:.6})));for(let o=0;o<5;o++){const l=.5+Math.random()*1.4,c=new bt(new vn(l,.075),new ye({color:"#4ade80",transparent:!0,opacity:.5}));c.position.set(-.7+l/2-1.5,1.3-o*.45,.29),t.add(c)}const s=Math.max(1,Math.min(this.opts.numChunks,this.opts.topK));for(let o=0;o<s;o++){const l=Gi[o],c=new bt(new he(.55,.35,.08),new ee({color:l,emissive:l,emissiveIntensity:.8,transparent:!0,opacity:.75}));c.position.set(-2,1.2-o*.42,.35),t.add(c)}const r=yt("LLM + Answer",{fontSize:24,color:"#4ade80"});r.position.set(0,3.2,0),t.add(r),this._labels.push(r);const a=yt("context-augmented generation",{fontSize:17,color:"#14532d"});a.position.set(0,-3,0),a.visible=this.opts.showNumbers,this._llmSub=a,t.add(a)}_buildFlowConnectors(){const t=Math.max(2,Math.min(6,this.opts.numChunks)),e=Gi.slice(0,t),n=[{from:new E(-15.7,0,0),to:new E(-11.4,0,0),col:"#94a3b8"},...e.map((s,r)=>{const a=(r-(t-1)/2)*2.1;return{from:new E(-6.6,a,0),to:new E(-2.8,a*.55,0),col:s}}),{from:new E(2.4,0,0),to:new E(7,0,0),col:"#22d3ee"},{from:new E(13,0,0),to:new E(17.2,0,0),col:"#34d399"},{from:new E(19,0,0),to:new E(25.2,0,0),col:"#67e8f9"}];this._flowDots=[],n.forEach((s,r)=>{this.root.add(new _n(new se().setFromPoints([s.from.clone(),s.to.clone()]),new ue({color:s.col,transparent:!0,opacity:.18})));const a=(o,l,c)=>{const h=new ee({color:s.col,emissive:s.col,emissiveIntensity:1.3*c,metalness:.1,roughness:.1,transparent:c<1,opacity:c}),d=new bt(new ze(l,6,4),h);this.root.add(d),this._flowDots.push({from:s.from.clone(),to:s.to.clone(),dot:d,t:(r*.1+o)%1,speed:.28+Math.random()*.18})};a(0,.11,1),a(.5,.08,.5)})}_buildPipelineLabel(){const t=yt("RAG Pipeline:  Ingest → Embed → Index → Retrieve → Generate",{fontSize:21});t.position.set(4.5,8,0),this.root.add(t),this._labels.push(t)}_applyLabelVisibility(){const t=this.opts.showNumbers;[this._docSub,this._chunkSub,this._embSub,this._dbSub,this._querySub,this._llmSub].forEach(e=>{e&&(e.visible=t)})}update(t,e){if(!this.opts.animate)return;const n=this.opts.speed;if(this._docRing&&(this._docRing.rotation.z=e*.55),this._docMesh){const r=Math.sin(e*1.8)*.5+.5;this._docMesh.material.emissiveIntensity=.3+r*.35}this._chunkMeshes.forEach(r=>{const a=Math.sin(e*2.1+r.userData.phase)*.5+.5;r.material.emissiveIntensity=.15+a*.4}),this._embPoints.forEach(r=>{const a=Math.sin(e*2.6+r.userData.phase)*.5+.5;r.material.emissiveIntensity=.55+a*.65,r.scale.setScalar(.82+a*.28)});const s=Math.max(1,Math.min(this.opts.numChunks,this.opts.topK));if(this._dbCells.forEach(r=>{const a=Math.sin(e*2+r.userData.phase)*.5+.5,l=r.userData.row<s?.7+a*1.2:.3+a*.35;r.material.emissiveIntensity=r.userData.baseEmissive*l}),this._querySphere){const r=Math.sin(e*2.4)*.5+.5;this._querySphere.material.emissiveIntensity=.75+r*.65,this._querySphere.scale.setScalar(.9+r*.14),this._qRing1.rotation.y=e*.95,this._qRing2.rotation.x=e*.7,this._qRing3.rotation.z=e*.55}if(this._llmBox){const r=Math.sin(e*1.6)*.5+.5;this._llmBox.material.emissiveIntensity=.28+r*.42}this._flowDots.forEach(r=>{r.t=(r.t+t*n*r.speed)%1,r.dot.position.lerpVectors(r.from,r.to,r.t)})}onActivate(){}onDeactivate(){}}const Aa={edgeWidthByWeight:!0,edgeWidth:2,edgeOpacityByWeight:!0,edgeOpacity:.6,edgeColorByWeight:!0,positiveEdgeColor:"#2dd4bf",negativeEdgeColor:"#fb7185",defaultEdgeColor:"#a78bfa",useBezierCurves:!1,nodeDiameter:.36,nodeColor:"#22d3ee",nodeBorderColor:"#0c0a1a",nodeStyle:"solid",layerSpacing:2.6,direction:"horizontal",showBiasUnits:!1,showLayerLabels:!0,showArrowheads:!0,showFrustumLinks:!0,showFlattenLayer:!0,convColor1:"#7c3aed",convColor2:"#2dd4bf",filterOpacity:.7,borderWidth:1,spacingBetweenFilters:.12,showLayerLabelsConv:!0,sqrtVectorLengthScaling:!1,lengthSizeScaling:1,renderer:"webGL",tensorColor1:"#7c3aed",tensorColor2:"#2dd4bf",tensorColor3:"#f472b6",tensorOpacity:.62,filterOpacityTensor:.7,spacingBetweenLayers:2.6,logFeatureMapDepthScaling:!1,depthSizeScaling:10,logFeatureMapWidthScaling:!1,widthSizeScaling:10,logConvFilterSizeScaling:!1,convolutionalFilterScaling:1,showTensorDimensions:!0,showConvDimensions:!0,fontSize:30,vectorLengthStyle:"linear",cinematicGlow:!0,bloomStrength:.55,autoOrbit:!1,pulseSpeed:1.1,wireframe:!1};class G0{constructor(t={}){this._state={...Aa,...t},this._listeners=new Set}get state(){return this._state}get(t){return this._state[t]}set(t){Object.assign(this._state,t),this._listeners.forEach(e=>e(this._state,t))}reset(t=Aa){this._state={...Aa,...t},this._listeners.forEach(e=>e(this._state,this._state))}subscribe(t){return this._listeners.add(t),()=>this._listeners.delete(t)}}const ws={perceptron:{label:"Perceptron",description:"Single linear neuron — the simplest classifier.",mode:"nn",layers:[{name:"Input",type:"input",w:3,h:3,d:.5,params:{neurons:4}},{name:"Output",type:"output",w:2,h:2,d:.5,params:{neurons:1}}]},mnist:{label:"MNIST Classifier",description:"Three-layer MLP for handwritten digit classification.",mode:"nn",layers:[{name:"Input 784",type:"input",w:4.5,h:4.5,d:.6,params:{neurons:16}},{name:"Hidden 128",type:"dense",w:4,h:4,d:.9,params:{neurons:12,activation:"ReLU"}},{name:"Hidden 64",type:"dense",w:3.2,h:3.2,d:.9,params:{neurons:9,activation:"ReLU"}},{name:"Output 10",type:"output",w:2.4,h:2.4,d:.6,params:{neurons:10,activation:"Softmax"}}]},autoencoder:{label:"Autoencoder",description:"Encoder-decoder with bottleneck for representation learning.",mode:"nn",layers:[{name:"Input",type:"input",w:4,h:4,d:.5,params:{neurons:16}},{name:"Encoder 1",type:"dense",w:3.2,h:3.2,d:.8,params:{neurons:8}},{name:"Latent",type:"attention",w:2,h:2,d:.6,params:{neurons:4}},{name:"Decoder 1",type:"dense",w:3.2,h:3.2,d:.8,params:{neurons:8}},{name:"Output",type:"output",w:4,h:4,d:.5,params:{neurons:16}}]},tinyTransformer:{label:"Tiny Transformer Block",description:"A minimal attention block with FFN for sequence data.",mode:"nn",layers:[{name:"Embedding",type:"token",w:4,h:3,d:.6,params:{neurons:12}},{name:"Attention",type:"attention",w:4,h:3,d:1,params:{neurons:12}},{name:"FFN",type:"ffn",w:4,h:3,d:1,params:{neurons:16}},{name:"Output",type:"output",w:3,h:2,d:.6,params:{neurons:8}}]},resnet:{label:"Deep ResNet (Toy)",description:"Stacked residual blocks — illustrates depth + skip paths.",mode:"nn",layers:[{name:"Input",type:"input",w:4,h:3,d:.5,params:{neurons:12}},{name:"Conv Block",type:"conv",w:4,h:3,d:1,params:{neurons:24}},{name:"Res Block 1",type:"residual",w:4,h:3,d:1,params:{neurons:24}},{name:"Res Block 2",type:"residual",w:4,h:3,d:1,params:{neurons:24}},{name:"Res Block 3",type:"residual",w:4,h:3,d:1,params:{neurons:24}},{name:"Output",type:"output",w:3,h:2,d:.6,params:{neurons:8}}]},cnnLeNet:{label:"LeNet-5",description:"Classic CNN for digit recognition (LeCun, 1998).",mode:"cnn",layers:[{name:"Input 32×32",type:"input",w:4.6,h:4.6,d:.4,params:{h:32,w:32,c:1}},{name:"Conv 5×5, 6",type:"conv",w:4,h:4,d:1.2,params:{k:5,s:1,p:0,filters:6}},{name:"Pool 2×2",type:"pool",w:3.2,h:3.2,d:1,params:{k:2,s:2,p:0}},{name:"Conv 5×5, 16",type:"conv",w:2.6,h:2.6,d:1.6,params:{k:5,s:1,p:0,filters:16}},{name:"Pool 2×2",type:"pool",w:2,h:2,d:1.4,params:{k:2,s:2,p:0}},{name:"Dense 120",type:"dense",w:.8,h:4,d:.8,params:{units:120}},{name:"Dense 84",type:"dense",w:.8,h:3.4,d:.8,params:{units:84}},{name:"Output 10",type:"output",w:.8,h:1.6,d:.8,params:{classes:10}}]},cnnVgg:{label:"VGG-Style",description:"Stacked 3×3 conv blocks — the VGG recipe.",mode:"cnn",layers:[{name:"Input 224×224×3",type:"input",w:5,h:5,d:.5,params:{h:224,w:224,c:3}},{name:"Conv 3×3, 64",type:"conv",w:4.6,h:4.6,d:1.4,params:{k:3,s:1,p:1,filters:16}},{name:"Conv 3×3, 64",type:"conv",w:4.6,h:4.6,d:1.4,params:{k:3,s:1,p:1,filters:16}},{name:"MaxPool 2×2",type:"pool",w:3.6,h:3.6,d:1.2,params:{k:2,s:2,p:0}},{name:"Conv 3×3, 128",type:"conv",w:3,h:3,d:1.8,params:{k:3,s:1,p:1,filters:18}},{name:"Conv 3×3, 128",type:"conv",w:3,h:3,d:1.8,params:{k:3,s:1,p:1,filters:18}},{name:"MaxPool 2×2",type:"pool",w:2.2,h:2.2,d:1.6,params:{k:2,s:2,p:0}},{name:"Dense 1024",type:"dense",w:.8,h:4.4,d:.9,params:{units:1024}},{name:"Output 1000",type:"output",w:.8,h:1.8,d:.9,params:{classes:1e3}}]},cnnResnet:{label:"ResNet (Toy)",description:"Conv blocks with residual skip connections.",mode:"cnn",layers:[{name:"Input 224×224×3",type:"input",w:5,h:5,d:.5,params:{h:224,w:224,c:3}},{name:"Conv 7×7, 64",type:"conv",w:4.4,h:4.4,d:1.4,params:{k:7,s:2,p:3,filters:16}},{name:"Pool 3×3",type:"pool",w:3.6,h:3.6,d:1.2,params:{k:3,s:2,p:1}},{name:"ResBlock ×3",type:"residual",w:3.2,h:3.2,d:1.6,params:{filters:64}},{name:"ResBlock ×4",type:"residual",w:2.6,h:2.6,d:1.8,params:{filters:128}},{name:"ResBlock ×6",type:"residual",w:2,h:2,d:2,params:{filters:256}},{name:"GAP",type:"pool",w:1.4,h:1.4,d:1.6,params:{k:7,s:1,p:0}},{name:"Output 1000",type:"output",w:.8,h:1.8,d:.9,params:{classes:1e3}}]},encoderBlock:{label:"Encoder Block",description:"Pre-LayerNorm encoder block: attention + FFN.",mode:"transformer",layers:[{name:"Token Embedding",type:"token",w:1.6,h:5.2,d:.7,params:{seq:128,dModel:512}},{name:"Positional Encoding",type:"positional",w:1.6,h:5,d:.5,params:{}},{name:"LayerNorm",type:"norm",w:1.6,h:4.8,d:.4,params:{}},{name:"Multi-Head Attention",type:"attention",w:2.6,h:4.8,d:1.4,params:{heads:8}},{name:"Residual Add",type:"residual",w:1.6,h:4.6,d:.4,params:{}},{name:"Feed Forward",type:"ffn",w:2.4,h:4.4,d:1.2,params:{hidden:2048}},{name:"Residual Add",type:"residual",w:1.6,h:4.2,d:.4,params:{}},{name:"Output Tokens",type:"output",w:1.4,h:4,d:.6,params:{classes:10}}]},bertSmall:{label:"BERT-Small",description:"Small BERT encoder stack (4 layers).",mode:"transformer",layers:[{name:"Token Embedding",type:"token",w:1.6,h:5.2,d:.8,params:{seq:128,dModel:512}},{name:"Pos Encoding",type:"positional",w:1.6,h:5,d:.5,params:{}},{name:"Encoder × 4",type:"attention",w:2.6,h:4.8,d:1.6,params:{heads:8}},{name:"LayerNorm",type:"norm",w:1.6,h:4.6,d:.4,params:{}},{name:"Pooler",type:"ffn",w:2.2,h:4.4,d:1,params:{hidden:512}},{name:"Classifier",type:"head",w:1.4,h:3.8,d:.7,params:{classes:2}}]},decoderOnly:{label:"Decoder-Only (GPT)",description:"Causal decoder stack with masked attention.",mode:"transformer",layers:[{name:"Token Embedding",type:"token",w:1.6,h:5.6,d:.8,params:{seq:256,dModel:768}},{name:"Pos Encoding",type:"positional",w:1.6,h:5.4,d:.5,params:{}},{name:"Masked Attn",type:"attention",w:2.8,h:5.2,d:1.6,params:{heads:12}},{name:"FFN",type:"ffn",w:2.6,h:5,d:1.2,params:{hidden:3072}},{name:"Residual",type:"residual",w:1.6,h:4.8,d:.4,params:{}},{name:"LM Head",type:"head",w:1.4,h:4.4,d:.7,params:{classes:5e4}}]}},mh={nn:["perceptron","mnist","autoencoder","tinyTransformer","resnet"],cnn:["cnnLeNet","cnnVgg","cnnResnet"],transformer:["encoderBlock","bertSmall","decoderOnly"]},V0=new Set(["input","conv","pool","norm","dense","flatten","output"]),W0=new Set(["token","positional","norm","attention","ffn","residual","head","output"]),X0=new Set(["input","dense","attention","ffn","residual","conv","output"]);function pc(i){const t={input:{h:224,w:224,c:3,neurons:8},conv:{k:3,s:1,p:1,filters:64},pool:{k:2,s:2,p:0},norm:{},dense:{units:256,neurons:8,activation:"ReLU"},flatten:{units:0},output:{classes:10,neurons:4,activation:"Softmax"},token:{seq:128,dModel:512,neurons:12},positional:{},attention:{heads:8,neurons:8},ffn:{hidden:2048,neurons:12},residual:{neurons:8},head:{classes:10}};return structuredClone(t[i]||{})}function dr(i,t,e,n){return Math.floor((i+2*n-t)/e)+1}function Fo(i,t){const e=[],n=[];let s=null;const r=t==="cnn"?V0:t==="transformer"?W0:X0;for(let o=0;o<i.length;o++){const l=i[o],c=l.params||{};let h="—";if(r.has(l.type)||e.push({level:"warn",text:`Layer ${o+1} "${l.name}" type "${l.type}" is unusual for ${t.toUpperCase()} mode.`}),t==="cnn")if(l.type==="input")s={h:c.h||224,w:c.w||224,c:c.c||3},h=`${s.h}×${s.w}×${s.c}`;else if(!s)e.push({level:"err",text:`Layer ${o+1} needs an input layer first.`});else if(l.type==="conv"){const d=+c.k||3,u=+c.s||1,f=+c.p||0,g=+c.filters||s.c,_=dr(s.h,d,u,f),m=dr(s.w,d,u,f);_<=0||m<=0?e.push({level:"err",text:`Conv at layer ${o+1} produces invalid spatial dims.`}):s={h:_,w:m,c:g},h=`${s.h}×${s.w}×${s.c}`}else if(l.type==="pool"){const d=+c.k||2,u=+c.s||2,f=+c.p||0,g=dr(s.h,d,u,f),_=dr(s.w,d,u,f);g<=0||_<=0?e.push({level:"err",text:`Pooling at layer ${o+1} collapses spatial dims.`}):s={...s,h:g,w:_},h=`${s.h}×${s.w}×${s.c}`}else l.type==="flatten"?(s={h:1,w:1,c:s.h*s.w*s.c},h=`${s.c} units (flat)`):l.type==="dense"?(s={h:1,w:1,c:+c.units||512},h=`${s.c} units`):l.type==="output"?(s={h:1,w:1,c:+c.classes||10},h=`${c.classes||10} classes`):h=s?`${s.h}×${s.w}×${s.c}`:"—";else if(t==="transformer")if(l.type==="token")s={seq:+c.seq||128,dModel:+c.dModel||512},h=`${s.seq}×${s.dModel}`;else if(!s)e.push({level:"err",text:`Layer ${o+1} needs a token embedding first.`});else if(l.type==="attention"){const d=+c.heads||8;s.dModel%d!==0&&e.push({level:"err",text:`Attention layer ${o+1}: dModel (${s.dModel}) must divide by heads (${d}).`}),h=`${s.seq}×${s.dModel}`}else if(l.type==="ffn"){const d=+c.hidden||2048;h=`${s.seq}×${s.dModel} (ffn:${d})`}else if(l.type==="head"||l.type==="output"){const d=+c.classes||10;h=`${s.seq}×${d}`}else h=`${s.seq}×${s.dModel}`;else h=`${c.neurons||0} neurons${c.activation?"  ·  "+c.activation:""}`;n.push({index:o,descriptor:h})}const a=e.some(o=>o.level==="err")?"invalid":e.some(o=>o.level==="warn")?"warn":"valid";return e.length||e.push({level:"ok",text:"No validation errors detected."}),{messages:e,shapes:n,status:a}}function gh(i,t){let e=0,n=3,s=512;return i.forEach(r=>{const a=r.params||{};if(r.type==="input"&&(n=+a.c||3),r.type==="conv"){const o=+a.k||3,l=+a.filters||64;e+=o*o*n*l+l,n=l}if(r.type==="dense"&&(e+=n*(+a.units||512)),r.type==="token"&&(s=+a.dModel||512),r.type==="attention"&&(e+=4*s*s),r.type==="ffn"){const o=+a.hidden||2048;e+=s*o+o*s}if(t==="nn"&&r.type!=="input"){const o=+a.neurons||0;e+=n*o+o,n=o}else t==="nn"&&r.type==="input"&&(n=+a.neurons||0)}),e>1e6?`${(e/1e6).toFixed(1)}M`:e>1e3?`${(e/1e3).toFixed(1)}K`:String(Math.round(e))}const $0={nn:["Each layer applies y = activation(W·x + b). Stacking depth lets the network compose features.","Width (neurons per layer) controls capacity; depth controls hierarchy of abstraction.","Without a non-linear activation, stacked layers collapse into one linear mapping."],cnn:["Convolution depth should generally increase as spatial dimensions shrink.","Early aggressive pooling can collapse details and hurt accuracy.","Most CNN parameters live in the final dense layers, not in the convs.","Flatten is the bridge between spatial feature maps and dense classifiers."],transformer:["dModel must be divisible by the number of attention heads.","FFN hidden size is typically 4× dModel in standard Transformer recipes.","Pre-LN (LayerNorm before attention) trains more stably than Post-LN."]},q0={library:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round"/></svg>',controls:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 8h6M14 8h6M4 16h2M10 16h10" stroke-linecap="round"/><circle cx="12" cy="8" r="2"/><circle cx="8" cy="16" r="2"/></svg>',layers:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 4l8 4-8 4-8-4 8-4z"/><path d="M4 12l8 4 8-4M4 16l8 4 8-4"/></svg>',diagnostics:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3"/></svg>',insight:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2v.3h6v-.3c0-.8.4-1.5 1-2A7 7 0 0 0 12 2z"/></svg>',add:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 5v14M5 12h14" stroke-linecap="round"/></svg>',trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>',reset:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 12a9 9 0 1 0 3-6.7L3 8" stroke-linecap="round"/><path d="M3 3v5h5" stroke-linecap="round"/></svg>',randomize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/><circle cx="15.5" cy="8.5" r="1.5" fill="currentColor"/><circle cx="12"   cy="12"  r="1.5" fill="currentColor"/><circle cx="8.5" cy="15.5" r="1.5" fill="currentColor"/><circle cx="15.5" cy="15.5" r="1.5" fill="currentColor"/></svg>',download:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3v12M7 10l5 5 5-5M5 21h14" stroke-linecap="round"/></svg>',up:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 14l6-6 6 6" stroke-linecap="round"/></svg>',down:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 10l6 6 6-6" stroke-linecap="round"/></svg>',brain:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 4a3 3 0 0 0-3 3v.5A3 3 0 0 0 4 10v2a3 3 0 0 0 1 2.2V16a3 3 0 0 0 3 3h1V4z"/><path d="M15 4a3 3 0 0 1 3 3v.5A3 3 0 0 1 20 10v2a3 3 0 0 1-1 2.2V16a3 3 0 0 1-3 3h-1V4z"/></svg>',reset_play:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 12a9 9 0 1 0 3-6.7L3 8" stroke-linecap="round"/><path d="M3 3v5h5" stroke-linecap="round"/></svg>',style:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l2.4 6.6 6.6.5-5 4.4 1.5 6.5-5.5-3.5-5.5 3.5 1.5-6.5-5-4.4 6.6-.5z"/></svg>',cube:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 7l-9-4-9 4 9 4 9-4z"/><path d="M3 7v10l9 4 9-4V7"/><path d="M12 11v10"/></svg>',flow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="9" width="6" height="6" rx="1"/><rect x="16" y="9" width="6" height="6" rx="1"/><path d="M8 12h8M14 9l2 3-2 3" stroke-linecap="round" stroke-linejoin="round"/></svg>',pool:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="8" height="8" rx="0.5"/><rect x="13" y="3" width="8" height="8" rx="0.5"/><rect x="3" y="13" width="8" height="8" rx="0.5"/><rect x="13" y="13" width="8" height="8" rx="0.5"/></svg>',sparkle:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3l1.5 5L18 9.5l-4.5 1.5L12 16l-1.5-5L6 9.5 10.5 8z"/><path d="M19 16l.7 1.8L21.5 18.5l-1.8.7L19 21l-.7-1.8L16.5 18.5l1.8-.7z" /></svg>',expand:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9V3h6M21 9V3h-6M3 15v6h6M21 15v6h-6" stroke-linecap="round"/></svg>',palette:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22a10 10 0 1 1 10-10c0 2-2 3-4 3h-2a2 2 0 0 0-2 2c0 1 .5 1.5 1 2 .5.5 1 1 1 2a1 1 0 0 1-1 1z"/><circle cx="7.5" cy="10.5" r="1" fill="currentColor"/><circle cx="12" cy="6.5" r="1" fill="currentColor"/><circle cx="16.5" cy="10.5" r="1" fill="currentColor"/></svg>',camera:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>'};function Tt(i){return q0[i]||""}const yn=["nn","cnn","transformer"],zo=["convolution","pooling","attention","gradientDescent","pipeline","rag"],ui={nn:"Neural Net",cnn:"CNN",transformer:"Transformer",convolution:"Convolution",pooling:"Pooling",attention:"Attention",gradientDescent:"Gradient Descent",pipeline:"ML Pipeline",rag:"RAG"},Y0={nn:"Fully-connected MLPs",cnn:"Spatial feature stacks",transformer:"Sequence + attention",convolution:"Kernel · stride · padding",pooling:"Max / Avg over windows",attention:"Q · K · V dot products",gradientDescent:"Loss landscapes",pipeline:"NN → Loss → CNN chain",rag:"Chunk · Embed · Retrieve"},j0={input:"var(--c-input)",conv:"var(--c-conv)",pool:"var(--c-pool)",norm:"var(--c-norm)",dense:"var(--c-dense)",flatten:"var(--c-flatten)",output:"var(--c-output)",token:"var(--c-token)",positional:"var(--c-pos)",attention:"var(--c-attn)",ffn:"var(--c-ffn)",residual:"var(--c-residual)",head:"var(--c-head)"};function K0(i){return j0[i]||"var(--text-3)"}const mc={nn:["input","dense","attention","ffn","residual","output"],cnn:["input","conv","pool","norm","dense","flatten","output"],transformer:["token","positional","norm","attention","ffn","residual","head","output"]},gi=new G0,W={activeTab:"cnn",activePresetId:"cnnLeNet",selectedLayerIdx:0,expandedLayerIdx:0,layers:structuredClone(ws.cnnLeNet.layers),archSidebarSection:"library",theory:{convolution:{kernelSize:3,stride:1,padding:1,inputSize:8,animate:!0,speed:1,showNumbers:!0},pooling:{kernelSize:2,stride:2,inputSize:4,mode:"max",animate:!0,speed:1,showNumbers:!0},attention:{seqLen:6,heads:2,dModel:256,causalMask:!1,temperature:1,showPositionalEncoding:!1,animate:!0,speed:1,showNumbers:!0},gradientDescent:{learningRate:.05,animate:!0,speed:1,showNumbers:!0},pipeline:{animate:!0,speed:1,showNumbers:!0},rag:{animate:!0,speed:1,showNumbers:!0,numChunks:4,topK:2,embDim:768,showSimilarity:!0}}};function Z0(){const i=document.createElement("div");i.id="cursor-ring";const t=document.createElement("div");t.id="cursor-dot",document.body.appendChild(i),document.body.appendChild(t);let e=-100,n=-100,s=-100,r=-100;window.addEventListener("mousemove",o=>{e=o.clientX,n=o.clientY});function a(){requestAnimationFrame(a),s+=(e-s)*.14,r+=(n-r)*.14,i.style.left=s+"px",i.style.top=r+"px",t.style.left=e+"px",t.style.top=n+"px"}a(),document.addEventListener("mouseover",o=>{o.target.closest("button, a, input, select, label, [data-action], .nav-tab, .preset-item, .layer-card")?(i.style.width="48px",i.style.height="48px",i.style.borderColor="rgba(0,255,209,0.9)"):(i.style.width="32px",i.style.height="32px",i.style.borderColor="rgba(0,255,209,0.55)")})}function Q0(){const i=document.createElement("div");i.id="splash",i.className="splash";const t=["Neural Net","CNN","Transformer","Convolution","Pooling","Attention","Gradient Descent","ML Pipeline","RAG"];i.innerHTML=`
    <canvas id="splash-canvas-3d"></canvas>

    <!-- Content layer -->
    <div class="splash-ui">

      <div class="splash-badge" id="splash-badge">
        <span class="splash-badge-dot"></span>
        Interactive 3D Visualizer
      </div>

      <h1 class="splash-title" id="splash-title">
        Neural<em>Forge</em><span class="t-3d">3D</span>
      </h1>

      <p class="splash-sub" id="splash-sub">
        Explore neural networks, CNNs, Transformers and core ML theory
        through real-time interactive 3D — live in your browser.
      </p>

      <div class="splash-pills" id="splash-pills">
        ${t.map(b=>`<span class="splash-pill">${b}</span>`).join("")}
      </div>

      <div class="splash-enter-wrap" id="splash-enter-wrap">
        <button class="splash-enter" id="splash-enter">Explore &rarr;</button>
      </div>

    </div>

    <!-- Bottom stat strip -->
    <div class="splash-stats" id="splash-stats">
      <div class="splash-stat">
        <div class="splash-stat-num">7</div>
        <div class="splash-stat-label">Live<br>Scenes</div>
      </div>
      <div class="splash-stat">
        <div class="splash-stat-num">5</div>
        <div class="splash-stat-label">Theory<br>Modules</div>
      </div>
      <div class="splash-stat">
        <div class="splash-stat-num">3D</div>
        <div class="splash-stat-label">Real-time<br>Render</div>
      </div>
      <div class="splash-stat">
        <div class="splash-stat-num">&infin;</div>
        <div class="splash-stat-label">Free to<br>Explore</div>
      </div>
    </div>
  `,document.body.appendChild(i);const e=document.getElementById("splash-canvas-3d"),n=e.getContext("2d");e.width=window.innerWidth,e.height=window.innerHeight;let s=!1;window.addEventListener("resize",()=>{s=!0});const r=[4,7,9,9,7,4],a=260,o=220,l=90,c=700,h=[],d=[],u=(r.length-1)*a;r.forEach((b,P)=>{const R=P*a-u/2;for(let T=0;T<b;T++){const F=(b===1?0:T/(b-1)-.5)*o,v=Math.sin(T*1.3+P*.7)*.5*l;h.push({x:R,y:F,z:v,r:3.5+Math.random()*2,phase:P*.55+T*.28,li:P,hue:165+P*22})}});let f=0;for(let b=0;b<r.length-1;b++){const P=r[b],R=r[b+1],T=f,A=f+P;for(let F=0;F<P;F++)for(let v=0;v<R;v++)d.push({a:T+F,b:A+v,progress:Math.random(),speed:.004+Math.random()*.006});f+=P}function g(b,P,R,T,A,F){const v=Math.cos(T),x=Math.sin(T),L=b*v-R*x,I=b*x+R*v,z=c/(c+I+400);return{sx:A/2+L*z,sy:F/2+P*z*.85-60,scale:z,depth:(I+500)/1e3}}let _=0,m=0,p;function w(){p=requestAnimationFrame(w),s&&(s=!1,e.width=window.innerWidth,e.height=window.innerHeight),m+=.007,_+=.0028;const b=e.width,P=e.height;n.clearRect(0,0,b,P);const R=n.createRadialGradient(b/2,P/2-40,0,b/2,P/2-40,Math.min(b,P)*.62);R.addColorStop(0,"rgba(0,234,100,0.07)"),R.addColorStop(.45,"rgba(60,30,180,0.06)"),R.addColorStop(1,"rgba(6,6,8,0)"),n.fillStyle=R,n.fillRect(0,0,b,P);const T=n.createRadialGradient(b/2,P/2,Math.min(b,P)*.3,b/2,P/2,Math.min(b,P)*.85);T.addColorStop(0,"rgba(2,2,8,0)"),T.addColorStop(1,"rgba(2,2,8,0.55)"),n.fillStyle=T,n.fillRect(0,0,b,P);const A=h.map(x=>g(x.x,x.y,x.z,_,b,P));[...d].sort((x,L)=>{const I=(A[x.a].depth+A[x.b].depth)/2,z=(A[L.a].depth+A[L.b].depth)/2;return I-z}).forEach(x=>{const L=A[x.a],I=A[x.b],z=(L.depth+I.depth)/2,q=Math.max(0,z*.18-.02);n.beginPath(),n.moveTo(L.sx,L.sy),n.lineTo(I.sx,I.sy),n.strokeStyle=`rgba(0,234,100,${q})`,n.lineWidth=.5,n.stroke(),x.progress=(x.progress+x.speed)%1;const G=3*z;if(G>0){const $=L.sx+(I.sx-L.sx)*x.progress,H=L.sy+(I.sy-L.sy)*x.progress,nt=n.createRadialGradient($,H,0,$,H,G*3);nt.addColorStop(0,`rgba(0,234,100,${z*.85})`),nt.addColorStop(1,"rgba(0,234,100,0)"),n.beginPath(),n.arc($,H,G*3,0,Math.PI*2),n.fillStyle=nt,n.fill()}}),h.map((x,L)=>({n:x,p:A[L],i:L})).sort((x,L)=>x.p.depth-L.p.depth).forEach(({n:x,p:L})=>{if(L.depth<=0)return;const I=Math.sin(m*2.2+x.phase)*.22+.78,z=x.r*L.scale*2.2*I,q=35+L.depth*45,G=.4+L.depth*.6,$=n.createRadialGradient(L.sx,L.sy,0,L.sx,L.sy,z*3.5);$.addColorStop(0,`hsla(${x.hue},90%,${q}%,${G*I*.7})`),$.addColorStop(1,`hsla(${x.hue},90%,${q}%,0)`),n.beginPath(),n.arc(L.sx,L.sy,z*3.5,0,Math.PI*2),n.fillStyle=$,n.fill(),n.beginPath(),n.arc(L.sx,L.sy,z,0,Math.PI*2),n.fillStyle=`hsla(${x.hue},100%,${Math.min(80,q+20)}%,${G})`,n.fill(),n.beginPath(),n.arc(L.sx-z*.25,L.sy-z*.25,z*.3,0,Math.PI*2),n.fillStyle=`rgba(255,255,255,${.4*L.depth})`,n.fill()})}w();const M=(b,P)=>setTimeout(()=>{const R=document.getElementById(b);R&&R.classList.add("in")},P);M("splash-badge",420),M("splash-title",720),M("splash-sub",1020),M("splash-pills",1300),M("splash-enter-wrap",1680),M("splash-stats",2e3),i.querySelector("#splash-enter").addEventListener("click",()=>{cancelAnimationFrame(p),i.classList.add("hidden"),setTimeout(()=>{window.dispatchEvent(new Event("resize")),i.remove()},950)})}Z0();Q0();const J0=document.querySelector("#app");J0.innerHTML=`
  <div class="topbar">
    <div class="brand">
      <div class="brand-mark">
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <circle cx="4" cy="6"  r="2" fill="#060608"/>
          <circle cx="4" cy="14" r="2" fill="#060608"/>
          <circle cx="16" cy="10" r="2" fill="#060608"/>
          <circle cx="10" cy="3"  r="1.4" fill="#060608" opacity=".75"/>
          <circle cx="10" cy="17" r="1.4" fill="#060608" opacity=".75"/>
          <path d="M4 6 L16 10 M4 14 L16 10 M10 3 L16 10 M10 17 L16 10 M4 6 L10 3 M4 14 L10 17" stroke="#060608" stroke-width="1.3" stroke-linecap="round" opacity=".65"/>
        </svg>
      </div>
      <div class="brand-name">Neural<em>Forge</em><span class="brand-3d">3D</span></div>
    </div>

    <nav class="nav-tabs" id="nav-tabs">
      ${yn.map(i=>gc(i)).join("")}
      <div class="nav-tab-divider"></div>
      ${zo.map(i=>gc(i)).join("")}
    </nav>

    <div class="topbar-right" id="topbar-stats"></div>
  </div>

  <div class="workspace">
    <aside class="sidebar" id="sidebar-left"></aside>

    <div class="viewport-wrap">
      <div class="viewport-toolbar" id="viewport-toolbar"></div>
      <div class="canvas-host" id="canvas-host"></div>
      <div class="viewport-corner" id="viewport-corner"></div>
      <div class="viewport-overlay-bottom" id="viewport-legend"></div>
      <div class="theory-overlay" id="theory-overlay" style="display:none"></div>
    </div>

    <aside class="sidebar right" id="sidebar-right"></aside>
  </div>
`;function gc(i){return`
    <button class="nav-tab" data-tab="${i}">
      <span class="nav-tab-dot"></span>
      <span>${ui[i]}</span>
    </button>
  `}const tv=document.querySelector("#canvas-host"),Se=new A0(tv),vi=new U0({style:gi}),Bo=new O0,ko=new F0,As=new z0,Ir=new B0,Ho=new k0,Go=new H0;Se.register("architecture",vi);Se.register("convolution",Bo);Se.register("attention",ko);Se.register("gradientDescent",As);Se.register("pooling",Ir);Se.register("pipeline",Ho);Se.register("rag",Go);gi.subscribe((i,t)=>{"cinematicGlow"in t&&Se.setBloomEnabled(i.cinematicGlow),"bloomStrength"in t&&Se.setBloom({strength:i.bloomStrength})});Se.setBloomEnabled(gi.get("cinematicGlow"));Se.setBloom({strength:gi.get("bloomStrength")});document.querySelector("#nav-tabs").addEventListener("click",i=>{const t=i.target.closest(".nav-tab");if(!t)return;const e=t.dataset.tab;!e||e===W.activeTab||yr(e)});function yr(i){if(W.activeTab=i,yn.includes(i)){const t=mh[i];t.includes(W.activePresetId)||(W.activePresetId=t[0],W.layers=structuredClone(ws[t[0]].layers),W.selectedLayerIdx=0,W.expandedLayerIdx=0),vi.setOptions({mode:i}),vi.build(W.layers),Se.activate("architecture")}else{const t=W.theory[i];i==="convolution"?Bo.setOptions(t):i==="attention"?ko.setOptions(t):i==="gradientDescent"?As.setOptions(t):i==="pooling"?Ir.setOptions(t):i==="pipeline"?Ho.setOptions(t):i==="rag"&&Go.setOptions(t),Se.activate(i)}Es()}function Es(){document.querySelectorAll(".nav-tab").forEach(t=>{t.classList.toggle("active",t.dataset.tab===W.activeTab)});const i=yn.includes(W.activeTab);document.querySelector("#theory-overlay").style.display="none",_o(),xo(),ev(),nv(),i?(vh(),ov()):(ys(),cv())}function _o(){const i=document.querySelector("#topbar-stats");if(yn.includes(W.activeTab)){const t=Fo(W.layers,W.activeTab),e=gh(W.layers,W.activeTab),n=W.layers.length,s=W.layers.reduce((o,l)=>{var c;return o+(((c=l.params)==null?void 0:c.neurons)??0)},0);let r="chip-dot",a="Valid";t.status==="warn"&&(r+=" warn",a="Warnings"),t.status==="invalid"&&(r+=" err",a="Invalid"),i.innerHTML=`
      <div class="chip"><strong>${n}</strong> layers</div>
      <div class="chip"><strong>${s}</strong> neurons</div>
      <div class="chip"><strong>${e}</strong> params</div>
      <div class="chip"><span class="${r}"></span>${a}</div>
    `}else i.innerHTML=`
      <div class="chip"><strong>${ui[W.activeTab]}</strong></div>
      <div class="chip">${Y0[W.activeTab]}</div>
    `}function xo(){const i=document.querySelector("#viewport-toolbar");if(yn.includes(W.activeTab)){const t=Fo(W.layers,W.activeTab),e=gh(W.layers,W.activeTab),n=t.status==="valid"?"ok":t.status==="invalid"?"err":"",s=t.status==="valid"?"Valid":t.status==="invalid"?"Invalid":"Warnings";i.innerHTML=`
      <div class="stat"><span class="stat-label">Tab</span><span class="stat-value">${ui[W.activeTab]}</span></div>
      <div class="stat"><span class="stat-label">Layers</span><span class="stat-value">${W.layers.length}</span></div>
      <div class="stat"><span class="stat-label">Params</span><span class="stat-value">${e}</span></div>
      <div class="stat"><span class="stat-label">Status</span><span class="stat-value ${n}">${s}</span></div>
    `}else{const t=W.theory[W.activeTab];let e="";if(W.activeTab==="convolution")e=`
        <div class="stat"><span class="stat-label">Input</span><span class="stat-value">${t.inputSize}×${t.inputSize}</span></div>
        <div class="stat"><span class="stat-label">Kernel</span><span class="stat-value">${t.kernelSize}×${t.kernelSize}</span></div>
        <div class="stat"><span class="stat-label">Stride</span><span class="stat-value">${t.stride}</span></div>
        <div class="stat"><span class="stat-label">Padding</span><span class="stat-value">${t.padding}</span></div>
      `;else if(W.activeTab==="pooling"){const n=Math.max(0,Math.floor((t.inputSize-t.kernelSize)/t.stride)+1);e=`
        <div class="stat"><span class="stat-label">Input</span><span class="stat-value">${t.inputSize}×${t.inputSize}</span></div>
        <div class="stat"><span class="stat-label">Window</span><span class="stat-value">${t.kernelSize}×${t.kernelSize}</span></div>
        <div class="stat"><span class="stat-label">Stride</span><span class="stat-value">${t.stride}</span></div>
        <div class="stat"><span class="stat-label">Output</span><span class="stat-value">${n}×${n}</span></div>
        <div class="stat"><span class="stat-label">Op</span><span class="stat-value">${t.mode.toUpperCase()}</span></div>
      `}else W.activeTab==="attention"?e=`
        <div class="stat"><span class="stat-label">Tokens</span><span class="stat-value">${t.seqLen}</span></div>
        <div class="stat"><span class="stat-label">Mode</span><span class="stat-value">Self-attention</span></div>
      `:W.activeTab==="gradientDescent"?e=`
        <div class="stat"><span class="stat-label">η</span><span class="stat-value">${t.learningRate.toFixed(3)}</span></div>
        <div class="stat"><span class="stat-label">Optimizers</span><span class="stat-value">SGD · Momentum · Adam</span></div>
      `:W.activeTab==="rag"&&(e=`
        <div class="stat"><span class="stat-label">Stages</span><span class="stat-value">6</span></div>
        <div class="stat"><span class="stat-label">Chunks</span><span class="stat-value">4</span></div>
        <div class="stat"><span class="stat-label">Metric</span><span class="stat-value">cosine sim</span></div>
        <div class="stat"><span class="stat-label">DB</span><span class="stat-value">vector store</span></div>
      `);i.innerHTML=`
      <div class="stat"><span class="stat-label">Theory</span><span class="stat-value">${ui[W.activeTab]}</span></div>
      ${e}
    `}}function ev(){const i=document.querySelector("#viewport-corner");yn.includes(W.activeTab)?i.innerHTML=`
      <button class="btn btn-icon" data-action="screenshot" title="Screenshot">${Tt("camera")}</button>
      <button class="btn btn-icon" data-action="randomize" title="Randomize layout">${Tt("randomize")}</button>
      <button class="btn btn-icon" data-action="reset-view" title="Reset view">${Tt("reset")}</button>
    `:i.innerHTML=`
      <button class="btn btn-icon" data-action="screenshot" title="Screenshot">${Tt("camera")}</button>
      <button class="btn btn-icon" data-action="reset-theory" title="Reset animation">${Tt("reset_play")}</button>
    `,i.onclick=t=>{const e=t.target.closest("button");if(!e)return;const n=e.dataset.action;n==="randomize"?dv():n==="reset-view"?_h():n==="reset-theory"?xh():n==="screenshot"&&uv()}}function nv(){const i=document.querySelector("#viewport-legend");yn.includes(W.activeTab)?W.activeTab==="cnn"?i.innerHTML=`
        <span class="legend-item"><span class="legend-swatch" style="background:var(--c-input);color:var(--c-input)"></span>Input</span>
        <span class="legend-divider"></span>
        <span class="legend-item"><span class="legend-swatch" style="background:var(--c-conv);color:var(--c-conv)"></span>Conv</span>
        <span class="legend-divider"></span>
        <span class="legend-item"><span class="legend-swatch" style="background:var(--c-pool);color:var(--c-pool)"></span>Pool</span>
        <span class="legend-divider"></span>
        <span class="legend-item"><span class="legend-swatch" style="background:var(--c-flatten);color:var(--c-flatten)"></span>Flatten</span>
        <span class="legend-divider"></span>
        <span class="legend-item"><span class="legend-swatch" style="background:var(--c-dense);color:var(--c-dense)"></span>Dense</span>
        <span class="legend-divider"></span>
        <span class="legend-item"><span class="legend-swatch" style="background:var(--c-output);color:var(--c-output)"></span>Output</span>
      `:W.activeTab==="transformer"?i.innerHTML=`
        <span class="legend-item"><span class="legend-swatch" style="background:var(--c-token);color:var(--c-token)"></span>Token</span>
        <span class="legend-divider"></span>
        <span class="legend-item"><span class="legend-swatch" style="background:var(--c-pos);color:var(--c-pos)"></span>Pos</span>
        <span class="legend-divider"></span>
        <span class="legend-item"><span class="legend-swatch" style="background:var(--c-norm);color:var(--c-norm)"></span>Norm</span>
        <span class="legend-divider"></span>
        <span class="legend-item"><span class="legend-swatch" style="background:var(--c-attn);color:var(--c-attn)"></span>Attention</span>
        <span class="legend-divider"></span>
        <span class="legend-item"><span class="legend-swatch" style="background:var(--c-ffn);color:var(--c-ffn)"></span>FFN</span>
        <span class="legend-divider"></span>
        <span class="legend-item"><span class="legend-swatch" style="background:var(--c-residual);color:var(--c-residual)"></span>Residual</span>
      `:i.innerHTML=`
        <span class="legend-item"><span class="legend-swatch" style="background:var(--c-input);color:var(--c-input)"></span>Input</span>
        <span class="legend-divider"></span>
        <span class="legend-item"><span class="legend-swatch" style="background:var(--c-dense);color:var(--c-dense)"></span>Dense</span>
        <span class="legend-divider"></span>
        <span class="legend-item"><span class="legend-swatch" style="background:var(--c-attn);color:var(--c-attn)"></span>Attention</span>
        <span class="legend-divider"></span>
        <span class="legend-item"><span class="legend-swatch" style="background:var(--c-output);color:var(--c-output)"></span>Output</span>
      `:W.activeTab==="convolution"?i.innerHTML=`
      <span class="legend-item"><span class="legend-swatch" style="background:#38bdf8;color:#38bdf8"></span>Input map</span>
      <span class="legend-divider"></span>
      <span class="legend-item"><span class="legend-swatch" style="background:#f472b6;color:#f472b6"></span>Kernel window</span>
      <span class="legend-divider"></span>
      <span class="legend-item"><span class="legend-swatch" style="background:#34d399;color:#34d399"></span>Output activations</span>
    `:W.activeTab==="pooling"?i.innerHTML=`
      <span class="legend-item"><span class="legend-swatch" style="background:#38bdf8;color:#38bdf8"></span>Input cells (numbers)</span>
      <span class="legend-divider"></span>
      <span class="legend-item"><span class="legend-swatch" style="background:#fbbf24;color:#fbbf24"></span>Pooling window</span>
      <span class="legend-divider"></span>
      <span class="legend-item"><span class="legend-swatch" style="background:#fb7185;color:#fb7185"></span>Output (max/avg)</span>
    `:W.activeTab==="attention"?i.innerHTML=`
      <span class="legend-item"><span class="legend-swatch" style="background:#67e8f9;color:#67e8f9"></span>Queries</span>
      <span class="legend-divider"></span>
      <span class="legend-item"><span class="legend-swatch" style="background:#fb923c;color:#fb923c"></span>Keys</span>
      <span class="legend-divider"></span>
      <span class="legend-item"><span class="legend-swatch" style="background:#a78bfa;color:#a78bfa"></span>Values</span>
      <span class="legend-divider"></span>
      <span class="legend-item"><span class="legend-swatch" style="background:#4ade80;color:#4ade80"></span>Output</span>
    `:W.activeTab==="gradientDescent"?i.innerHTML=`
      <span class="legend-item"><span class="legend-swatch" style="background:#38bdf8;color:#38bdf8"></span>SGD</span>
      <span class="legend-divider"></span>
      <span class="legend-item"><span class="legend-swatch" style="background:#fbbf24;color:#fbbf24"></span>Momentum</span>
      <span class="legend-divider"></span>
      <span class="legend-item"><span class="legend-swatch" style="background:#34d399;color:#34d399"></span>Adam</span>
      <span class="legend-divider"></span>
      <span class="legend-item" style="color:var(--text-3);font-size:10.5px;">arrows = -∇L direction</span>
    `:W.activeTab==="rag"&&(i.innerHTML=`
      <span class="legend-item"><span class="legend-swatch" style="background:#94a3b8;color:#94a3b8"></span>Document</span>
      <span class="legend-divider"></span>
      <span class="legend-item"><span class="legend-swatch" style="background:#ec4899;color:#ec4899"></span>Chunk A</span>
      <span class="legend-divider"></span>
      <span class="legend-item"><span class="legend-swatch" style="background:#a78bfa;color:#a78bfa"></span>Chunk B</span>
      <span class="legend-divider"></span>
      <span class="legend-item"><span class="legend-swatch" style="background:#22d3ee;color:#22d3ee"></span>Chunk C · Query</span>
      <span class="legend-divider"></span>
      <span class="legend-item"><span class="legend-swatch" style="background:#4ade80;color:#4ade80"></span>LLM Answer</span>
    `)}function vh(){const i=document.querySelector("#sidebar-left"),t=mh[W.activeTab],e=W.archSidebarSection;i.innerHTML=`
    <div class="seg" style="margin-bottom: 16px; width: 100%;">
      <button class="seg-item ${e==="library"?"active":""}" data-section="library" style="flex:1;">Library</button>
      <button class="seg-item ${e==="style"?"active":""}" data-section="style" style="flex:1;">Style</button>
    </div>
    <div id="sidebar-content"></div>
  `,i.querySelectorAll("[data-section]").forEach(s=>{s.addEventListener("click",()=>{W.archSidebarSection=s.dataset.section,vh()})});const n=i.querySelector("#sidebar-content");e==="library"?(n.innerHTML=iv(t),sv(n)):(n.innerHTML=rv(),av(n))}function iv(i){return`
    <div class="section">
      <div class="section-title">${Tt("library")}<span>Architectures</span></div>
      <div class="preset-list" id="preset-list">
        ${i.map(t=>`
          <button class="preset-item ${t===W.activePresetId?"active":""}" data-preset="${t}">
            <div class="preset-icon"></div>
            <div class="preset-item-content">
              <div class="preset-item-name">${ws[t].label}</div>
              <div class="preset-item-desc">${ws[t].description}</div>
            </div>
          </button>
        `).join("")}
      </div>
    </div>

    <div class="section">
      <div class="section-title">${Tt("insight")}<span>ML Insights</span></div>
      ${$0[W.activeTab].map(t=>`<div class="insight">${t}</div>`).join("")}
    </div>
  `}function sv(i){i.querySelector("#preset-list").addEventListener("click",t=>{const e=t.target.closest(".preset-item");e&&hv(e.dataset.preset)})}function rv(){const i=gi.state,t=W.activeTab==="cnn",e=`
    <div class="section">
      <div class="section-title">${Tt("style")}<span>Edges & Nodes</span></div>
      <div class="card">
        ${Re("Edge width by weight","edgeWidthByWeight",i.edgeWidthByWeight)}
        ${Ue("Edge width (px)","edgeWidth",i.edgeWidth,.5,6,.1)}
        ${Re("Edge opacity by weight","edgeOpacityByWeight",i.edgeOpacityByWeight)}
        ${Ue("Edge opacity","edgeOpacity",i.edgeOpacity,.05,1,.05)}
        ${Re("Edge color by weight","edgeColorByWeight",i.edgeColorByWeight)}
        ${si("Positive edge color","positiveEdgeColor",i.positiveEdgeColor)}
        ${si("Negative edge color","negativeEdgeColor",i.negativeEdgeColor)}
        ${si("Default edge color","defaultEdgeColor",i.defaultEdgeColor)}
        ${Re("Use Bezier curves","useBezierCurves",i.useBezierCurves)}
        ${Re("Show arrowheads","showArrowheads",i.showArrowheads)}
        ${Re("Show frustum links (kernel area)","showFrustumLinks",i.showFrustumLinks)}
      </div>

      <div class="subheader">Nodes</div>
      <div class="card">
        ${Ue("Node diameter","nodeDiameter",i.nodeDiameter,.1,.9,.02)}
        ${si("Node color","nodeColor",i.nodeColor)}
        ${si("Node border color","nodeBorderColor",i.nodeBorderColor)}
        ${vc("Node style","nodeStyle",i.nodeStyle,[["solid","solid"],["empty","empty"]])}
        ${Re("Show bias units","showBiasUnits",i.showBiasUnits)}
      </div>

      <div class="subheader">Layout</div>
      <div class="card">
        ${Ue("Layer spacing","layerSpacing",i.layerSpacing,1.4,6,.1)}
        ${vc("Direction","direction",i.direction,[["horizontal","horizontal"],["vertical","vertical"]])}
        ${Re("Show layer labels","showLayerLabels",i.showLayerLabels)}
        ${Re("Show flatten layer (CNN)","showFlattenLayer",i.showFlattenLayer)}
      </div>
    </div>
  `,n=t?`
    <div class="section">
      <div class="section-title">${Tt("cube")}<span>Conv Filter Style</span></div>
      <div class="card">
        ${si("Filter color 1 (start)","convColor1",i.convColor1)}
        ${si("Filter color 2 (end)","convColor2",i.convColor2)}
        ${Ue("Filter opacity","filterOpacity",i.filterOpacity,.1,1,.02)}
        ${Ue("Border width","borderWidth",i.borderWidth,0,3,.1)}
        ${Ue("Spacing between filters","spacingBetweenFilters",i.spacingBetweenFilters,0,.4,.01)}
        ${Re("√ Vector length scaling","sqrtVectorLengthScaling",i.sqrtVectorLengthScaling)}
        ${Ue("Length size scaling","lengthSizeScaling",i.lengthSizeScaling,.4,2,.05)}
      </div>

      <div class="subheader">Tensor Display</div>
      <div class="card">
        ${Ue("Tensor opacity","tensorOpacity",i.tensorOpacity,.1,1,.02)}
        ${Ue("Spacing between layers","spacingBetweenLayers",i.spacingBetweenLayers,1.4,6,.1,!0)}
        ${Re("Log feature-map depth scaling","logFeatureMapDepthScaling",i.logFeatureMapDepthScaling)}
        ${Ue("Depth size scaling","depthSizeScaling",i.depthSizeScaling,1,20,.5)}
        ${Re("Log feature-map width scaling","logFeatureMapWidthScaling",i.logFeatureMapWidthScaling)}
        ${Ue("Width size scaling","widthSizeScaling",i.widthSizeScaling,1,20,.5)}
        ${Re("Show tensor dimensions","showTensorDimensions",i.showTensorDimensions)}
        ${Re("Show conv dimensions","showConvDimensions",i.showConvDimensions)}
        ${Ue("Font size","fontSize",i.fontSize,16,48,1)}
      </div>
    </div>
  `:"",s=`
    <div class="section">
      <div class="section-title">${Tt("sparkle")}<span>Cinematic</span></div>
      <div class="card">
        ${Re("Cinematic glow (bloom)","cinematicGlow",i.cinematicGlow)}
        ${Ue("Bloom strength","bloomStrength",i.bloomStrength,0,1.5,.05)}
        ${Ue("Pulse speed","pulseSpeed",i.pulseSpeed,0,3,.05)}
        ${Re("Auto orbit","autoOrbit",i.autoOrbit)}
        ${Re("Wireframe blocks","wireframe",i.wireframe)}
      </div>
    </div>
  `;return e+n+s}function av(i){i.querySelectorAll("[data-style-key]").forEach(t=>{const e=t.dataset.styleKey,n=t.type==="checkbox"||t.type==="color"?"change":"input";t.addEventListener(n,()=>{var o;let s;t.type==="checkbox"?s=t.checked:t.type==="range"||t.type==="number"?s=parseFloat(t.value):s=t.value;const r=(o=t.parentElement)==null?void 0:o.querySelector(".control-value");if(r&&(t.type==="range"||t.type==="number")){const l=Math.abs(s)<1?2:Number.isInteger(s)?0:2;r.textContent=s.toFixed(l)}const a={[e]:s};e==="spacingBetweenLayers"&&(a.layerSpacing=s),gi.set(a)})}),i.querySelectorAll(".seg[data-style-seg]").forEach(t=>{const e=t.dataset.styleSeg;t.querySelectorAll(".seg-item").forEach(n=>{n.addEventListener("click",()=>{t.querySelectorAll(".seg-item").forEach(s=>s.classList.remove("active")),n.classList.add("active"),gi.set({[e]:n.dataset.value})})})})}function Ue(i,t,e,n,s,r,a=!1){const o=r>=1?Math.round(e).toString():e.toFixed(2);return`
    <div class="control">
      <div class="control-label">${i}<span class="control-value">${o}</span></div>
      <input type="range" data-style-key="${t}" min="${n}" max="${s}" step="${r}" value="${e}">
    </div>
  `}function Re(i,t,e){return`
    <div class="control" style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:7px 0;">
      <div class="control-label" style="margin-bottom:0;">${i}</div>
      <label class="toggle">
        <input type="checkbox" data-style-key="${t}" ${e?"checked":""}>
        <span class="toggle-track"></span>
      </label>
    </div>
  `}function si(i,t,e){return`
    <div class="color-row">
      <label>${i}</label>
      <input type="color" data-style-key="${t}" value="${e}">
    </div>
  `}function vc(i,t,e,n){return`
    <div class="control" style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:7px 0;">
      <div class="control-label" style="margin-bottom:0;">${i}</div>
      <div class="seg" data-style-seg="${t}">
        ${n.map(([s,r])=>`
          <button class="seg-item ${s===e?"active":""}" data-value="${s}">${r}</button>
        `).join("")}
      </div>
    </div>
  `}function ov(){const i=document.querySelector("#sidebar-right"),t=Fo(W.layers,W.activeTab);i.innerHTML=`
    <div class="section">
      <div class="section-title">${Tt("layers")}<span>Layers</span></div>
      <div class="btn-row" style="margin-bottom:10px;">
        <button class="btn btn-primary btn-compact" id="btn-add-layer">${Tt("add")}<span>Add Layer</span></button>
        <button class="btn btn-danger btn-compact btn-icon" id="btn-clear-layers" title="Clear all">${Tt("trash")}</button>
      </div>
      <div id="layer-list"></div>
    </div>

    <div class="section">
      <div class="section-title">${Tt("diagnostics")}<span>Diagnostics</span></div>
      <div id="diag-list"></div>
    </div>
  `;const e=i.querySelector("#layer-list");e.innerHTML=W.layers.map((s,r)=>{var h;const a=((h=t.shapes[r])==null?void 0:h.descriptor)||"",o=r===W.expandedLayerIdx,l=r===W.selectedLayerIdx,c=mc[W.activeTab];return`
      <div class="layer-card ${l?"selected":""} ${o?"expanded":""}"
           data-idx="${r}" style="--swatch: ${K0(s.type)};">
        <div class="layer-card-head" data-action="toggle">
          <div class="layer-card-num">${r+1}</div>
          <div class="layer-card-title">
            <span>${s.name}</span>
            <span class="layer-card-type">${s.type}</span>
          </div>
          <div class="layer-card-actions">
            <button class="btn btn-icon" data-action="up" title="Move up" ${r===0?"disabled":""}>${Tt("up")}</button>
            <button class="btn btn-icon" data-action="down" title="Move down" ${r===W.layers.length-1?"disabled":""}>${Tt("down")}</button>
            <button class="btn btn-icon" data-action="del" title="Delete" ${W.layers.length===1?"disabled":""}>${Tt("trash")}</button>
          </div>
        </div>
        <div class="layer-card-detail">
          <div class="field-text">
            <label>Name</label>
            <input data-field="name" type="text" value="${s.name}">
          </div>
          <div class="field-text">
            <label>Type</label>
            <select data-field="type">
              ${c.map(d=>`<option value="${d}" ${d===s.type?"selected":""}>${d}</option>`).join("")}
            </select>
          </div>
          ${lv(s)}
          ${a?`<div class="layer-shape">${a}</div>`:""}
        </div>
      </div>
    `}).join(""),e.addEventListener("click",s=>{const r=s.target.closest(".layer-card");if(!r)return;const a=parseInt(r.dataset.idx,10),o=s.target.closest("button[data-action]");if(o){const c=o.dataset.action;c==="up"&&a>0?([W.layers[a-1],W.layers[a]]=[W.layers[a],W.layers[a-1]],W.selectedLayerIdx=a-1,W.expandedLayerIdx=a-1):c==="down"&&a<W.layers.length-1?([W.layers[a+1],W.layers[a]]=[W.layers[a],W.layers[a+1]],W.selectedLayerIdx=a+1,W.expandedLayerIdx=a+1):c==="del"&&W.layers.length>1&&(W.layers.splice(a,1),W.selectedLayerIdx=Math.min(W.selectedLayerIdx,W.layers.length-1),W.expandedLayerIdx=-1),s.stopPropagation(),li();return}s.target.closest('[data-action="toggle"]')&&(W.selectedLayerIdx=a,W.expandedLayerIdx=W.expandedLayerIdx===a?-1:a,Es())}),e.addEventListener("input",s=>{const r=s.target.closest(".layer-card");if(!r)return;const a=parseInt(r.dataset.idx,10),o=s.target.dataset.field,l=s.target.dataset.param;if(o)o==="type"?(W.layers[a].type=s.target.value,W.layers[a].params=pc(s.target.value)):o==="name"&&(W.layers[a].name=s.target.value),li();else if(l){const c=s.target.type==="number"||s.target.type==="range"?parseFloat(s.target.value):s.target.value;W.layers[a].params={...W.layers[a].params||{},[l]:isNaN(c)?s.target.value:c},li()}}),e.addEventListener("change",s=>{s.target.dataset.field==="type"&&Es()}),i.querySelector("#btn-add-layer").addEventListener("click",()=>{const s=mc[W.activeTab],r=W.activeTab==="cnn"?"conv":W.activeTab==="transformer"?"attention":"dense",a=s.includes(r)?r:s[0];W.layers.push({name:a.charAt(0).toUpperCase()+a.slice(1),type:a,w:3,h:3,d:.8,params:pc(a)}),W.selectedLayerIdx=W.layers.length-1,W.expandedLayerIdx=W.layers.length-1,li()}),i.querySelector("#btn-clear-layers").addEventListener("click",()=>{W.layers.length<=1||(W.layers=[W.layers[0]],W.selectedLayerIdx=0,W.expandedLayerIdx=0,li())});const n=i.querySelector("#diag-list");t.messages.length===0||t.messages.length===1&&t.messages[0].level==="ok"?n.innerHTML='<div class="diag ok">No validation issues. Architecture looks healthy.</div>':n.innerHTML=t.messages.map(s=>`<div class="diag ${s.level}">${s.text}</div>`).join("")}function lv(i){const t=i.params||{},e=["neurons","units","k","s","p","filters","h","w","c","classes","heads","hidden","seq","dModel","activation"],n=Object.keys(t).sort((s,r)=>{const a=e.indexOf(s),o=e.indexOf(r);return(a===-1?99:a)-(o===-1?99:o)});return n.length===0?"":`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px;">
      ${n.map(s=>{const r=t[s];return typeof r=="number"?`<div class="field"><label>${s}</label><input type="number" data-param="${s}" value="${r}" min="0" step="1"></div>`:typeof r=="string"?s==="activation"?`<div class="field"><label>${s}</label><select data-param="${s}">${["Linear","ReLU","GELU","Tanh","Sigmoid","Softmax"].map(o=>`<option ${o===r?"selected":""}>${o}</option>`).join("")}</select></div>`:`<div class="field"><label>${s}</label><input type="text" data-param="${s}" value="${r}"></div>`:""}).join("")}
    </div>
  `}function ys(){const i=document.querySelector("#sidebar-left"),t=W.activeTab;if(t==="convolution"){const e=W.theory.convolution;i.innerHTML=`
      <div class="section">
        <div class="section-title">${Tt("controls")}<span>Convolution Controls</span></div>
        <div class="card">
          ${xe("Input size","inputSize",e.inputSize,4,14,1,"convolution")}
          ${xe("Kernel size","kernelSize",e.kernelSize,1,7,2,"convolution")}
          ${xe("Stride","stride",e.stride,1,4,1,"convolution")}
          ${xe("Padding","padding",e.padding,0,3,1,"convolution")}
          ${xe("Speed","speed",e.speed,.2,3,.1,"convolution")}
          ${Oe("Animate","animate",e.animate,"convolution")}
          ${Oe("Show numbers","showNumbers",e.showNumbers,"convolution")}
        </div>
      </div>
      <div class="section">
        <div class="section-title">${Tt("insight")}<span>What to look for</span></div>
        <div class="insight">The kernel slides across the input, computing one weighted-sum activation per position.</div>
        <div class="insight">Larger strides skip positions and shrink the output. Padding lets the kernel reach the edges.</div>
        <div class="insight">Output size = ⌊(N + 2P − K) / S⌋ + 1.</div>
      </div>
    `}else if(t==="pooling"){const e=W.theory.pooling;i.innerHTML=`
      <div class="section">
        <div class="section-title">${Tt("controls")}<span>Pooling Controls</span></div>
        <div class="card">
          ${xe("Input size","inputSize",e.inputSize,2,8,1,"pooling")}
          ${xe("Window size","kernelSize",e.kernelSize,1,4,1,"pooling")}
          ${xe("Stride","stride",e.stride,1,4,1,"pooling")}
          ${xe("Speed","speed",e.speed,.2,3,.1,"pooling")}
          <div class="control" style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:7px 0;">
            <div class="control-label" style="margin-bottom:0;">Mode</div>
            <div class="seg" id="pool-mode-seg">
              <button class="seg-item ${e.mode==="max"?"active":""}" data-mode="max">MAX</button>
              <button class="seg-item ${e.mode==="avg"?"active":""}" data-mode="avg">AVG</button>
            </div>
          </div>
          ${Oe("Animate","animate",e.animate,"pooling")}
          ${Oe("Show numbers","showNumbers",e.showNumbers,"pooling")}
        </div>
      </div>
      <div class="section">
        <div class="section-title">${Tt("insight")}<span>What to look for</span></div>
        <div class="insight">Each input cell shows its value as a tall coloured block. The pooling window slides across them.</div>
        <div class="insight">Max-pool picks the highest number in the window. Avg-pool computes the mean — see how the output cell's number reflects the operation.</div>
        <div class="insight">Output size = ⌊(N − K) / S⌋ + 1. With K=S the windows tile the input without overlap.</div>
      </div>
    `,i.querySelector("#pool-mode-seg").addEventListener("click",n=>{const s=n.target.closest(".seg-item");if(!s)return;const r=s.dataset.mode;W.theory.pooling.mode=r,Ir.setOptions({mode:r}),ys(),xo(),_o()})}else if(t==="attention"){const e=W.theory.attention;i.innerHTML=`
      <div class="section">
        <div class="section-title">${Tt("controls")}<span>Attention Controls</span></div>
        <div class="card">
          ${xe("Sequence length","seqLen",e.seqLen,3,10,1,"attention")}
          ${xe("Heads","heads",e.heads,1,4,1,"attention")}
          <div class="control" style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:7px 0;">
            <div class="control-label" style="margin-bottom:0;">d<sub>model</sub></div>
            <div class="seg" id="attn-dmodel-seg">
              <button class="seg-item ${e.dModel===64?"active":""}" data-dmodel="64">64</button>
              <button class="seg-item ${e.dModel===128?"active":""}" data-dmodel="128">128</button>
              <button class="seg-item ${e.dModel===256?"active":""}" data-dmodel="256">256</button>
              <button class="seg-item ${e.dModel===512?"active":""}" data-dmodel="512">512</button>
            </div>
          </div>
          ${xe("Temperature","temperature",e.temperature,.5,2,.1,"attention")}
          ${Oe("Causal mask (GPT)","causalMask",e.causalMask,"attention")}
          ${Oe("Positional encoding","showPositionalEncoding",e.showPositionalEncoding,"attention")}
          ${xe("Speed","speed",e.speed,.2,3,.1,"attention")}
          ${Oe("Animate","animate",e.animate,"attention")}
          ${Oe("Show numbers","showNumbers",e.showNumbers,"attention")}
        </div>
      </div>
      <div class="section">
        <div class="section-title">${Tt("insight")}<span>What to look for</span></div>
        <div class="insight">Each query token (cyan) compares with every key token (orange) to produce a row of scores.</div>
        <div class="insight">After softmax, those scores become weights that mix the value tokens (purple) into one output (green).</div>
        <div class="insight">The active row highlight shows attention being computed for one query at a time.</div>
      </div>
    `,i.querySelector("#attn-dmodel-seg").addEventListener("click",n=>{const s=n.target.closest(".seg-item");s&&(W.theory.attention.dModel=parseInt(s.dataset.dmodel,10),Xi("attention"),ys())})}else if(t==="gradientDescent"){const e=W.theory.gradientDescent;i.innerHTML=`
      <div class="section">
        <div class="section-title">${Tt("controls")}<span>Optimizer Controls</span></div>
        <div class="card">
          ${xe("Learning rate","learningRate",e.learningRate,.005,.25,.005,"gradientDescent")}
          ${xe("Speed","speed",e.speed,.2,3,.1,"gradientDescent")}
          ${Oe("Animate","animate",e.animate,"gradientDescent")}
          ${Oe("Show numbers","showNumbers",e.showNumbers,"gradientDescent")}
        </div>
        <div class="btn-row" style="margin-top:12px;">
          <button class="btn btn-primary" id="btn-reset-optim">${Tt("reset_play")}<span>Reset optimizers</span></button>
        </div>
      </div>
      <div class="section">
        <div class="section-title">${Tt("insight")}<span>What to look for</span></div>
        <div class="insight">SGD (cyan) follows the steepest descent and gets stuck oscillating in narrow valleys.</div>
        <div class="insight">Momentum (yellow) accumulates velocity, skating past local wiggles.</div>
        <div class="insight">Adam (green) adapts the step per parameter, often the smoothest path to a minimum.</div>
      </div>
    `,i.querySelector("#btn-reset-optim").addEventListener("click",()=>{As.reset()})}else if(t==="pipeline"){const e=W.theory.pipeline;i.innerHTML=`
      <div class="section">
        <div class="section-title">${Tt("controls")}<span>Pipeline Controls</span></div>
        <div class="card">
          ${xe("Speed","speed",e.speed,.2,3,.1,"pipeline")}
          ${Oe("Animate","animate",e.animate,"pipeline")}
          ${Oe("Show labels","showNumbers",e.showNumbers,"pipeline")}
        </div>
      </div>
      <div class="section">
        <div class="section-title">${Tt("insight")}<span>What to look for</span></div>
        <div class="insight">Left: fully-connected NN. Pulsing nodes signal forward propagation through layers.</div>
        <div class="insight">Center: the loss scalar L(θ). All training optimizes this number toward zero.</div>
        <div class="insight">Right: CNN layers (Conv → Pool → FC). Gradient arrows flow backwards — that's backpropagation updating weights.</div>
      </div>
    `}else if(t==="rag"){const e=W.theory.rag;i.innerHTML=`
      <div class="section">
        <div class="section-title">${Tt("controls")}<span>RAG Controls</span></div>
        <div class="card">
          ${xe("Chunks","numChunks",e.numChunks,2,6,1,"rag")}
          ${xe("Top-K","topK",e.topK,1,4,1,"rag")}
          <div class="control" style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:7px 0;">
            <div class="control-label" style="margin-bottom:0;">Emb dim</div>
            <div class="seg" id="rag-embdim-seg">
              <button class="seg-item ${e.embDim===384?"active":""}" data-embdim="384">384</button>
              <button class="seg-item ${e.embDim===768?"active":""}" data-embdim="768">768</button>
              <button class="seg-item ${e.embDim===1536?"active":""}" data-embdim="1536">1536</button>
            </div>
          </div>
          ${Oe("Show similarity","showSimilarity",e.showSimilarity,"rag")}
          ${xe("Speed","speed",e.speed,.2,3,.1,"rag")}
          ${Oe("Animate","animate",e.animate,"rag")}
          ${Oe("Show labels","showNumbers",e.showNumbers,"rag")}
        </div>
      </div>
      <div class="section">
        <div class="section-title">${Tt("insight")}<span>What to look for</span></div>
        <div class="insight">Coloured flow dots travel left→right: each represents a data packet moving through the pipeline stage.</div>
        <div class="insight">The chunk colours persist from splitting all the way into the vector store — each row is one chunk's vectors.</div>
        <div class="insight">The point cloud (Embedding Space) shows distinct clusters — semantically similar chunks end up close together in high-dim space.</div>
        <div class="insight">The query sphere (cyan) represents a user question vectorised by the same embedding model. Nearest neighbours in the DB are the retrieved context.</div>
      </div>
    `,i.querySelector("#rag-embdim-seg").addEventListener("click",n=>{const s=n.target.closest(".seg-item");s&&(W.theory.rag.embDim=parseInt(s.dataset.embdim,10),Xi("rag"),ys())})}i.querySelectorAll('input[type="range"][data-theory-key]').forEach(e=>{e.addEventListener("input",()=>{const n=e.dataset.theoryKey,s=e.dataset.tab,r=parseFloat(e.value);W.theory[s][n]=r,e.parentElement.querySelector(".control-value").textContent=Number.isInteger(r)?r.toString():r.toFixed(n==="learningRate"?3:2),Xi(s),xo(),_o()})}),i.querySelectorAll('input[type="checkbox"][data-theory-key]').forEach(e=>{e.addEventListener("change",()=>{const n=e.dataset.theoryKey,s=e.dataset.tab;W.theory[s][n]=e.checked,Xi(s)})})}function xe(i,t,e,n,s,r,a){const o=Number.isInteger(e)&&r>=1?e.toString():e.toFixed(t==="learningRate"?3:2);return`
    <div class="control">
      <div class="control-label">${i}<span class="control-value">${o}</span></div>
      <input type="range" data-theory-key="${t}" data-tab="${a}" min="${n}" max="${s}" step="${r}" value="${e}">
    </div>
  `}function Oe(i,t,e,n){return`
    <div class="control" style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:7px 0;">
      <div class="control-label" style="margin-bottom:0;">${i}</div>
      <label class="toggle">
        <input type="checkbox" data-theory-key="${t}" data-tab="${n}" ${e?"checked":""}>
        <span class="toggle-track"></span>
      </label>
    </div>
  `}function Xi(i){const t=W.theory[i];i==="convolution"?Bo.setOptions(t):i==="attention"?ko.setOptions(t):i==="gradientDescent"?As.setOptions(t):i==="pooling"?Ir.setOptions(t):i==="pipeline"?Ho.setOptions(t):i==="rag"&&Go.setOptions(t)}function cv(){const i=document.querySelector("#sidebar-right");W.activeTab==="convolution"?i.innerHTML=`
      <div class="section">
        <div class="section-title">${Tt("brain")}<span>Concept</span></div>
        <div class="card">
          <div class="card-title">Convolution</div>
          <p style="color:var(--text-2);font-size:13px;line-height:1.6;margin:0 0 10px;">
            A small weight matrix (the kernel) slides across the input, multiplying its entries with the matching window
            and summing the result into one output cell. The same kernel is reused at every position — that's
            <strong style="color:var(--text);">parameter sharing</strong> — which is why CNNs need so few weights for image data.
          </p>
          <p style="color:var(--text-2);font-size:13px;line-height:1.6;margin:0;">
            Stride controls the step size. Padding adds a border of zeros so the kernel can reach the edges and so the output
            size can be controlled.
          </p>
        </div>
      </div>
      <div class="section">
        <div class="section-title">${Tt("insight")}<span>Why it matters</span></div>
        <div class="insight">Translation equivariance — a feature is detected the same way wherever it appears.</div>
        <div class="insight">Local connectivity captures spatial structure that fully-connected layers miss.</div>
        <div class="insight">Stacking convolutions builds a hierarchy: edges → textures → parts → objects.</div>
      </div>
      <div class="section">
        <div class="section-title">${Tt("diagnostics")}<span>Key Equations</span></div>
        <div class="theory-eq">y[i,j] = &Sigma;<sub>k,l</sub> x[i&middot;s+k&minus;p, j&middot;s+l&minus;p] &middot; w[k,l]</div>
        <div class="theory-eq">outSize = &lfloor;(N + 2P &minus; K) / S&rfloor; + 1</div>
      </div>
    `:W.activeTab==="pooling"?i.innerHTML=`
      <div class="section">
        <div class="section-title">${Tt("brain")}<span>Concept</span></div>
        <div class="card">
          <div class="card-title">Pooling — visually & mathematically</div>
          <p style="color:var(--text-2);font-size:13px;line-height:1.6;margin:0 0 10px;">
            Each input cell is labelled with a number. The pooling window (yellow) slides across the input.
            For every window position the operation collapses K×K cells into one output cell.
          </p>
          <p style="color:var(--text-2);font-size:13px;line-height:1.6;margin:0 0 10px;">
            <strong style="color:var(--text);">Max pool</strong> takes the maximum value in the window —
            picks the strongest activation and is robust to small translations.
          </p>
          <p style="color:var(--text-2);font-size:13px;line-height:1.6;margin:0;">
            <strong style="color:var(--text);">Avg pool</strong> takes the mean — smoother, used at the very end of
            classifiers (Global Average Pooling) to summarize each feature map.
          </p>
        </div>
      </div>
      <div class="section">
        <div class="section-title">${Tt("insight")}<span>Why it matters</span></div>
        <div class="insight">Pooling shrinks spatial dimensions and reduces parameter count for downstream layers.</div>
        <div class="insight">It introduces a small amount of translation invariance — exact pixel position no longer matters.</div>
        <div class="insight">Pooling has no learnable parameters: it's a fixed reduction over a window.</div>
      </div>
      <div class="section">
        <div class="section-title">${Tt("diagnostics")}<span>Key Equations</span></div>
        <div class="theory-eq">${W.theory.pooling.mode==="max"?"y[i,j] = max<sub>k,l</sub> x[i&middot;s+k, j&middot;s+l]":"y[i,j] = (1/K&sup2;) &middot; &Sigma;<sub>k,l</sub> x[i&middot;s+k, j&middot;s+l]"}</div>
        <div class="theory-eq">outSize = &lfloor;(N &minus; K) / S&rfloor; + 1</div>
      </div>
    `:W.activeTab==="attention"?i.innerHTML=`
      <div class="section">
        <div class="section-title">${Tt("brain")}<span>Concept</span></div>
        <div class="card">
          <div class="card-title">Scaled dot-product attention</div>
          <p style="color:var(--text-2);font-size:13px;line-height:1.6;margin:0 0 10px;">
            Each token produces three vectors: a <strong style="color:var(--text);">query</strong>, a
            <strong style="color:var(--text);">key</strong>, and a <strong style="color:var(--text);">value</strong>.
            Queries dot-product against all keys to produce raw scores, scaled by √d to keep the gradient stable, then
            softmaxed into a row of weights.
          </p>
          <p style="color:var(--text-2);font-size:13px;line-height:1.6;margin:0;">
            Those weights mix the value vectors into one output per query. Every token can attend to every other token —
            that's what makes Transformers powerful for long-range structure.
          </p>
        </div>
      </div>
      <div class="section">
        <div class="section-title">${Tt("insight")}<span>Why it matters</span></div>
        <div class="insight">No recurrence — all positions are processed in parallel during training.</div>
        <div class="insight">Multi-head attention lets different heads specialize in different relationships.</div>
        <div class="insight">Self-attention is permutation-equivariant; positional encodings bring order back in.</div>
      </div>
      <div class="section">
        <div class="section-title">${Tt("diagnostics")}<span>Key Equations</span></div>
        <div class="theory-eq">Attention(Q,K,V) = softmax(QK<sup>T</sup> / &radic;d<sub>k</sub>) &middot; V</div>
        <div class="theory-eq">Q = XW<sub>Q</sub> &nbsp; K = XW<sub>K</sub> &nbsp; V = XW<sub>V</sub></div>
      </div>
    `:W.activeTab==="gradientDescent"?i.innerHTML=`
      <div class="section">
        <div class="section-title">${Tt("brain")}<span>Concept</span></div>
        <div class="card">
          <div class="card-title">Optimization on a loss surface</div>
          <p style="color:var(--text-2);font-size:13px;line-height:1.6;margin:0 0 10px;">
            Training a neural net is searching for parameters that minimize a loss. The 3D surface here is one such loss
            in two parameters — colored hot where loss is high, cold where it's low.
          </p>
          <p style="color:var(--text-2);font-size:13px;line-height:1.6;margin:0;">
            The three markers are different optimizers descending the same surface from the same start. Watch how
            momentum and Adam handle valleys and saddles compared to plain SGD.
          </p>
        </div>
      </div>
      <div class="section">
        <div class="section-title">${Tt("insight")}<span>Why it matters</span></div>
        <div class="insight">Learning rate is the single most important hyperparameter — too high diverges, too low crawls.</div>
        <div class="insight">Adaptive optimizers (Adam, RMSProp) help when gradients differ wildly across parameters.</div>
        <div class="insight">Loss surfaces of real networks are extremely high-dimensional, but local geometry still matters.</div>
      </div>
      <div class="section">
        <div class="section-title">${Tt("diagnostics")}<span>Key Equations</span></div>
        <div class="theory-eq">&theta; &larr; &theta; &minus; &eta; &middot; &nabla;<sub>&theta;</sub> L(&theta;)</div>
        <div class="theory-eq">Momentum: v = &beta;v + g &nbsp;&nbsp; &theta; &larr; &theta; &minus; &eta;v</div>
        <div class="theory-eq">Adam: &theta; &larr; &theta; &minus; &eta; &middot; m&#770; / (&radic;v&#770; + &epsilon;)</div>
      </div>
    `:W.activeTab==="pipeline"?i.innerHTML=`
      <div class="section">
        <div class="section-title">${Tt("brain")}<span>Concept</span></div>
        <div class="card">
          <div class="card-title">The ML training loop</div>
          <p style="color:var(--text-2);font-size:13px;line-height:1.6;margin:0 0 10px;">
            Every deep-learning training run follows the same cycle: a <strong style="color:var(--text);">forward pass</strong>
            computes predictions, the <strong style="color:var(--text);">loss</strong> measures how wrong they are, and
            <strong style="color:var(--text);">backpropagation</strong> computes gradients flowing from output back to input layers.
          </p>
          <p style="color:var(--text-2);font-size:13px;line-height:1.6;margin:0;">
            The colored arrows on the arches show this gradient flow — purple traveling right → left from the loss through the NN;
            pink from the loss back through the CNN feature extractor.
          </p>
        </div>
      </div>
      <div class="section">
        <div class="section-title">${Tt("insight")}<span>Why it matters</span></div>
        <div class="insight">NN weights and CNN filters are all updated by the same gradient — one backward pass updates the entire model.</div>
        <div class="insight">The loss is the single number that drives everything. Choosing the right loss function is a design decision.</div>
        <div class="insight">In practice the model is ONE network; the NN and CNN here represent different architectural blocks in the same graph.</div>
      </div>
      <div class="section">
        <div class="section-title">${Tt("diagnostics")}<span>Key Equations</span></div>
        <div class="theory-eq">Forward:  &ycirc; = f(x; &theta;)</div>
        <div class="theory-eq">Loss:     L = &ell;(&ycirc;, y)</div>
        <div class="theory-eq">Backward: &nabla;&theta; = &part;L / &part;&theta;</div>
        <div class="theory-eq">Update:   &theta; &larr; &theta; &minus; &eta; &nabla;&theta;</div>
      </div>
    `:W.activeTab==="rag"&&(i.innerHTML=`
      <div class="section">
        <div class="section-title">${Tt("brain")}<span>Concept</span></div>
        <div class="card">
          <div class="card-title">Retrieval-Augmented Generation</div>
          <p style="color:var(--text-2);font-size:13px;line-height:1.6;margin:0 0 10px;">
            RAG grounds an LLM in external knowledge without fine-tuning. A document is split into
            <strong style="color:var(--text);">chunks</strong>, each chunk is converted to a dense vector
            by an <strong style="color:var(--text);">embedding model</strong>, and all vectors are stored
            in a <strong style="color:var(--text);">vector database</strong>.
          </p>
          <p style="color:var(--text-2);font-size:13px;line-height:1.6;margin:0;">
            At query time, the user question is embedded with the same model, then a
            <strong style="color:var(--text);">nearest-neighbour search</strong> retrieves the top-K
            most semantically similar chunks. Those chunks are injected into the LLM prompt as context
            — giving the model precise, up-to-date facts it would otherwise hallucinate.
          </p>
        </div>
      </div>
      <div class="section">
        <div class="section-title">${Tt("insight")}<span>Why it matters</span></div>
        <div class="insight">RAG separates <em>knowledge</em> (the DB) from <em>reasoning</em> (the LLM) — you can update facts by re-indexing without retraining.</div>
        <div class="insight">Vector similarity search is sub-linear with HNSW / IVF indexes (Pinecone, pgvector, FAISS) — millions of vectors at &lt;100 ms.</div>
        <div class="insight">Chunk size and overlap are the biggest quality levers: too large dilutes relevance, too small loses context.</div>
        <div class="insight">Hybrid search (dense + sparse BM25) often outperforms pure dense retrieval for keyword-heavy queries.</div>
      </div>
      <div class="section">
        <div class="section-title">${Tt("diagnostics")}<span>Key Equations</span></div>
        <div class="theory-eq">sim(q, d) = cos(&theta;) = (q &middot; d) / (|q| |d|)</div>
        <div class="theory-eq">TopK = argsort<sub>d &isin; DB</sub> sim(q, d) [0:K]</div>
        <div class="theory-eq">answer = LLM(prompt + concat(chunk<sub>i</sub> for i in TopK))</div>
        <div class="theory-eq">embed: chunk &rarr; &Ropf;<sup>768</sup>  via SentenceTransformer</div>
      </div>
    `)}function hv(i){const t=ws[i];t&&(W.activePresetId=i,W.layers=structuredClone(t.layers),W.selectedLayerIdx=0,W.expandedLayerIdx=0,li())}function li(){vi.setOptions({mode:W.activeTab}),vi.build(W.layers),Es();try{localStorage.setItem("neuralforge_arch",JSON.stringify({layers:W.layers,activeTab:W.activeTab}))}catch{}}function dv(){W.layers.forEach(i=>{const t=i.params||{};Object.keys(t).forEach(e=>{if(typeof t[e]=="number"&&e!=="s"&&e!=="p"){const n=.7+Math.random()*.6;t[e]=Math.max(1,Math.round(t[e]*n))}}),i.w=Math.max(1,i.w*(.85+Math.random()*.3)),i.h=Math.max(1,i.h*(.85+Math.random()*.3)),i.d=Math.max(.4,i.d*(.85+Math.random()*.3))}),li()}function _h(){Se.controls&&Se.controls.reset()}function xh(){const i=W.activeTab;i==="gradientDescent"?As.reset():Xi(i)}(function(){const t=document.createElement("style");t.textContent=[".kbd-toast{position:fixed;bottom:28px;left:50%;transform:translateX(-50%);","background:rgba(15,15,22,.93);color:#e2e8f0;font:12px/1 Inter,sans-serif;","padding:7px 18px;border-radius:999px;pointer-events:none;z-index:9999;","white-space:nowrap;animation:kbd-fade 1.2s ease forwards;}","@keyframes kbd-fade{0%{opacity:1}70%{opacity:1}100%{opacity:0}}"].join(""),document.head.appendChild(t)})();function vs(i){const t=document.getElementById("kbd-toast");t&&t.remove();const e=document.createElement("div");e.id="kbd-toast",e.className="kbd-toast",e.textContent=i,document.body.appendChild(e),setTimeout(()=>{e.parentNode&&e.remove()},1200)}function uv(){const i=Se.activeScene;if(!i)return;Se.renderer.render(i.scene,i.camera);const t=Se.renderer.domElement.toDataURL("image/png"),e=document.createElement("a");e.href=t,e.download="neuralforge-screenshot.png",e.click()}const Wn=[...yn,...zo];window.addEventListener("keydown",i=>{if(!i.target.matches("input, select, textarea")){if(i.code==="Space")i.preventDefault(),zo.includes(W.activeTab)&&(W.theory[W.activeTab].animate=!W.theory[W.activeTab].animate,Xi(W.activeTab),ys(),vs(W.theory[W.activeTab].animate?"Playing":"Paused"));else if(i.code==="KeyR")yn.includes(W.activeTab)?_h():xh(),vs("Reset");else if(i.code==="ArrowRight"){i.preventDefault();const t=Wn.indexOf(W.activeTab),e=Wn[(t+1)%Wn.length];yr(e),vs(ui[e])}else if(i.code==="ArrowLeft"){i.preventDefault();const t=Wn.indexOf(W.activeTab),e=Wn[(t-1+Wn.length)%Wn.length];yr(e),vs(ui[e])}else if(i.key>="1"&&i.key<="7"){const t=Wn[parseInt(i.key,10)-1];t&&(yr(t),vs(ui[t]))}}});try{const i=JSON.parse(localStorage.getItem("neuralforge_arch")||"null");i&&Array.isArray(i.layers)&&i.layers.length>0&&i.layers.every(t=>t!=null&&typeof t.name=="string"&&typeof t.type=="string"&&"params"in t)&&(W.layers=i.layers,i.activeTab&&yn.includes(i.activeTab)&&(W.activeTab=i.activeTab))}catch{}vi.setOptions({mode:W.activeTab});vi.build(W.layers);Se.activate("architecture");Es();
