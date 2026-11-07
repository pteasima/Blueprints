var BlueprintsViewerBundle=(()=>{var $u=Object.defineProperty;var Zx=Object.getOwnPropertyDescriptor;var Kx=Object.getOwnPropertyNames;var Jx=Object.prototype.hasOwnProperty;var jx=(i,e)=>{for(var t in e)$u(i,t,{get:e[t],enumerable:!0})},Qx=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Kx(e))!Jx.call(i,s)&&s!==t&&$u(i,s,{get:()=>e[s],enumerable:!(n=Zx(e,s))||n.enumerable});return i};var e_=i=>Qx($u({},"__esModule",{value:!0}),i);var xT={};jx(xT,{mountViewer:()=>gT});var Bs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},zs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},tm=0,Oh=1,nm=2;var Aa=1,im=2,ho=3,Kn=0,yn=1,Ct=2,ii=0,Ui=1,Uh=2,Fh=3,Bh=4,gc=5;var yi=100,sm=101,rm=102,om=103,am=104,Ra=200,ks=201,lm=202,cm=203,Ca=204,fo=205,um=206,Pa=207,hm=208,fm=209,dm=210,pm=211,mm=212,gm=213,xm=214,ql=0,Yl=1,$l=2,Kr=3,Zl=4,Kl=5,Jl=6,jl=7,xc=0,_m=1,ym=2,si=0,zh=1,kh=2,Hh=3,po=4,Vh=5,Gh=6,Wh=7,Sh="attached",vm="detached",Xh=300,ur=301,mo=302,_c=303,yc=304,gi=1e3,ei=1001,Jr=1002,Ht=1003,vc=1004;var hr=1005;var Vt=1006,go=1007;var ri=1008;var Pn=1009,qh=1010,Yh=1011,xo=1012,Mc=1013,vi=1014,kn=1015,Xn=1016,Sc=1017,bc=1018,fr=1020,$h=35902,Zh=35899,Kh=1021,Jh=1022,vn=1023,rs=1026,gs=1027,Ec=1028,wc=1029,Hs=1030,Tc=1031;var Ac=1033,Ia=33776,La=33777,Da=33778,Na=33779,Rc=35840,Cc=35841,Pc=35842,Ic=35843,Lc=36196,Dc=37492,Nc=37496,Oc=37488,Uc=37489,Oa=37490,Fc=37491,Bc=37808,zc=37809,kc=37810,Hc=37811,Vc=37812,Gc=37813,Wc=37814,Xc=37815,qc=37816,Yc=37817,$c=37818,Zc=37819,Kc=37820,Jc=37821,jc=36492,Qc=36494,eu=36495,tu=36283,nu=36284,Ua=36285,iu=36286;var sr=2300,rr=2301,Wl=2302,bh=2303,Eh=2400,wh=2401,Th=2402,Mm=2500;var jh=0,Fa=1,_o=2,Sm=3200;var Ba=0,bm=1,Mi="",St="srgb",Bn="srgb-linear",Qo="linear",Rt="srgb";var Xl=7680;var Em=519,wm=512,Tm=513,Am=514,Qh=515,Rm=516,Cm=517,ef=518,tf=519,nf=35044;var sf="300 es",ti=2e3,jr=2001;function t_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function n_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Qr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pm(){let i=Qr("canvas");return i.style.display="block",i}var cp={},eo=null;function ea(...i){let e="THREE."+i.shift();eo?eo("log",e,...i):console.log(e,...i)}function Im(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Je(...i){i=Im(i);let e="THREE."+i.shift();if(eo)eo("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function it(...i){i=Im(i);let e="THREE."+i.shift();if(eo)eo("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ir(...i){let e=i.join(" ");e in cp||(cp[e]=!0,Je(...i))}function Lm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Dm={[ql]:ql,[$l]:Jl,[Zl]:Zl,[Kr]:Kl,[Yl]:Yl,[Jl]:$l,[jl]:jl,[Kl]:Kr},xi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],up=1234567,$r=Math.PI/180,or=180/Math.PI;function Fi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]).toLowerCase()}function at(i,e,t){return Math.max(e,Math.min(t,i))}function rf(i,e){return(i%e+e)%e}function i_(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function s_(i,e,t){return i!==e?(t-i)/(e-i):0}function jo(i,e,t){return(1-t)*i+t*e}function r_(i,e,t,n){return jo(i,e,1-Math.exp(-t*n))}function o_(i,e=1){return e-Math.abs(rf(i,e*2)-e)}function a_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function l_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function c_(i,e){return i+Math.floor(Math.random()*(e-i+1))}function u_(i,e){return i+Math.random()*(e-i)}function h_(i){return i*(.5-Math.random())}function f_(i){i!==void 0&&(up=i);let e=up+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function d_(i){return i*$r}function p_(i){return i*or}function m_(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function g_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function of(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function x_(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),f=r((e-n)/2),h=o((e-n)/2),d=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*p,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*p,a*c);break;case"ZYZ":i.set(l*p,l*d,a*u,a*c);break;default:Je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function su(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function af(i,e){if(e.constructor===Float32Array)return i;let t=su(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function lf(i,e){if(e.constructor===Float32Array)return i;let t=su(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Vs={DEG2RAD:$r,RAD2DEG:or,generateUUID:Fi,clamp:at,euclideanModulo:rf,mapLinear:i_,inverseLerp:s_,lerp:jo,damp:r_,pingpong:o_,smoothstep:a_,smootherstep:l_,randInt:c_,randFloat:u_,randFloatSpread:h_,seededRandom:f_,degToRad:d_,radToDeg:p_,isPowerOfTwo:m_,ceilPowerOfTwo:g_,floorPowerOfTwo:of,setQuaternionFromProperEuler:x_,normalize:lf,denormalize:af},ke=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(f!==x||l!==h||c!==d||u!==p){let g=l*h+c*d+u*p+f*x;g<0&&(h=-h,d=-d,p=-p,x=-x,g=-g);let m=1-a;if(g<.9995){let v=Math.acos(g),M=Math.sin(v);m=Math.sin(m*v)/M,a=Math.sin(a*v)/M,l=l*m+h*a,c=c*m+d*a,u=u*m+p*a,f=f*m+x*a}else{l=l*m+h*a,c=c*m+d*a,u=u*m+p*a,f=f*m+x*a;let v=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=v,c*=v,u*=v,f*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[o],h=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+u*f+l*d-c*h,e[t+1]=l*p+u*h+c*f-a*d,e[t+2]=c*p+u*d+a*h-l*f,e[t+3]=u*p-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),f=a(r/2),h=l(n/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"YXZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"ZXY":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"ZYX":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"YZX":this._x=h*u*f+c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f-h*d*p;break;case"XZY":this._x=h*u*f-c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f+h*d*p;break;default:Je("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zu.copy(this).projectOnVector(e),this.sub(Zu)}reflect(e){return this.sub(Zu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Zu=new P,hp=new Xt,ot=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],p=n[8],x=s[0],g=s[3],m=s[6],v=s[1],M=s[4],y=s[7],E=s[2],w=s[5],_=s[8];return r[0]=o*x+a*v+l*E,r[3]=o*g+a*M+l*w,r[6]=o*m+a*y+l*_,r[1]=c*x+u*v+f*E,r[4]=c*g+u*M+f*w,r[7]=c*m+u*y+f*_,r[2]=h*x+d*v+p*E,r[5]=h*g+d*M+p*w,r[8]=h*m+d*y+p*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,p=t*f+n*h+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=f*x,e[1]=(s*c-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=h*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return ir("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ku.makeScale(e,t)),this}rotate(e){return ir("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ku.makeRotation(-e)),this}translate(e,t){return ir("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ku.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ku=new ot,fp=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dp=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function __(){let i={enabled:!0,workingColorSpace:Bn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Rt&&(s.r=ss(s.r),s.g=ss(s.g),s.b=ss(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Rt&&(s.r=Zr(s.r),s.g=Zr(s.g),s.b=Zr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Mi?Qo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Bn]:{primaries:e,whitePoint:n,transfer:Qo,toXYZ:fp,fromXYZ:dp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:e,whitePoint:n,transfer:Rt,toXYZ:fp,fromXYZ:dp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:St}}}),i}var mt=__();function ss(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Rr,Ql=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Rr===void 0&&(Rr=Qr("canvas")),Rr.width=e.width,Rr.height=e.height;let s=Rr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Rr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Qr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ss(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ss(t[n]/255)*255):t[n]=ss(t[n]);return{data:t,width:e.width,height:e.height}}else return Je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},y_=0,to=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:y_++}),this.uuid=Fi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ju(s[o].image)):r.push(Ju(s[o]))}else r=Ju(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ju(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ql.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Je("Texture: Unable to serialize Texture."),{})}var v_=0,ju=new P,an=class i extends xi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ei,s=ei,r=Vt,o=ri,a=vn,l=Pn,c=i.DEFAULT_ANISOTROPY,u=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=Fi(),this.name="",this.source=new to(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ju).x}get height(){return this.source.getSize(ju).y}get depth(){return this.source.getSize(ju).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Je(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gi:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case Jr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gi:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case Jr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Xh;an.DEFAULT_ANISOTROPY=1;var Mt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,y=(d+1)/2,E=(m+1)/2,w=(u+h)/4,_=(f+x)/4,b=(p+g)/4;return M>y&&M>E?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=w/n,r=_/n):y>E?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=b/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=_/r,s=b/r),this.set(n,s,r,t),this}let v=Math.sqrt((g-p)*(g-p)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(f-x)/v,this.z=(h-u)/v,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ec=class extends xi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new an({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new to(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},nn=class extends ec{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ta=class extends an{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var tc=class extends an{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var tt=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,l,c,u,f,h,d,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,f,h,d,p,x,g)}set(e,t,n,s,r,o,a,l,c,u,f,h,d,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Cr.setFromMatrixColumn(e,0).length(),r=1/Cr.setFromMatrixColumn(e,1).length(),o=1/Cr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let h=o*u,d=o*f,p=a*u,x=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+p*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,d=l*f,p=c*u,x=c*f;t[0]=h+x*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-p,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,d=l*f,p=c*u,x=c*f;t[0]=h-x*a,t[4]=-o*f,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,d=o*f,p=a*u,x=a*f;t[0]=l*u,t[4]=p*c-d,t[8]=h*c+x,t[1]=l*f,t[5]=x*c+h,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=x-h*f,t[8]=p*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+p,t[10]=h-x*f}else if(e.order==="XZY"){let h=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+x,t[5]=o*u,t[9]=d*f-p,t[2]=p*f-d,t[6]=a*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(M_,e,S_)}lookAt(e,t,n){let s=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Ts.crossVectors(n,$n),Ts.lengthSq()===0&&(Math.abs(n.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Ts.crossVectors(n,$n)),Ts.normalize(),fl.crossVectors($n,Ts),s[0]=Ts.x,s[4]=fl.x,s[8]=$n.x,s[1]=Ts.y,s[5]=fl.y,s[9]=$n.y,s[2]=Ts.z,s[6]=fl.z,s[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],p=n[2],x=n[6],g=n[10],m=n[14],v=n[3],M=n[7],y=n[11],E=n[15],w=s[0],_=s[4],b=s[8],D=s[12],L=s[1],O=s[5],V=s[9],B=s[13],I=s[2],G=s[6],Y=s[10],H=s[14],me=s[3],Z=s[7],k=s[11],J=s[15];return r[0]=o*w+a*L+l*I+c*me,r[4]=o*_+a*O+l*G+c*Z,r[8]=o*b+a*V+l*Y+c*k,r[12]=o*D+a*B+l*H+c*J,r[1]=u*w+f*L+h*I+d*me,r[5]=u*_+f*O+h*G+d*Z,r[9]=u*b+f*V+h*Y+d*k,r[13]=u*D+f*B+h*H+d*J,r[2]=p*w+x*L+g*I+m*me,r[6]=p*_+x*O+g*G+m*Z,r[10]=p*b+x*V+g*Y+m*k,r[14]=p*D+x*B+g*H+m*J,r[3]=v*w+M*L+y*I+E*me,r[7]=v*_+M*O+y*G+E*Z,r[11]=v*b+M*V+y*Y+E*k,r[15]=v*D+M*B+y*H+E*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],p=e[3],x=e[7],g=e[11],m=e[15],v=l*d-c*h,M=a*d-c*f,y=a*h-l*f,E=o*d-c*u,w=o*h-l*u,_=o*f-a*u;return t*(x*v-g*M+m*y)-n*(p*v-g*E+m*w)+s*(p*M-x*E+m*_)-r*(p*y-x*w+g*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(r*u-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],p=e[12],x=e[13],g=e[14],m=e[15],v=t*a-n*o,M=t*l-s*o,y=t*c-r*o,E=n*l-s*a,w=n*c-r*a,_=s*c-r*l,b=u*x-f*p,D=u*g-h*p,L=u*m-d*p,O=f*g-h*x,V=f*m-d*x,B=h*m-d*g,I=v*B-M*V+y*O+E*L-w*D+_*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/I;return e[0]=(a*B-l*V+c*O)*G,e[1]=(s*V-n*B-r*O)*G,e[2]=(x*_-g*w+m*E)*G,e[3]=(h*w-f*_-d*E)*G,e[4]=(l*L-o*B-c*D)*G,e[5]=(t*B-s*L+r*D)*G,e[6]=(g*y-p*_-m*M)*G,e[7]=(u*_-h*y+d*M)*G,e[8]=(o*V-a*L+c*b)*G,e[9]=(n*L-t*V-r*b)*G,e[10]=(p*w-x*y+m*v)*G,e[11]=(f*y-u*w-d*v)*G,e[12]=(a*D-o*O-l*b)*G,e[13]=(t*O-n*D+s*b)*G,e[14]=(x*M-p*E-g*v)*G,e[15]=(u*E-f*M+h*v)*G,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,p=r*f,x=o*u,g=o*f,m=a*f,v=l*c,M=l*u,y=l*f,E=n.x,w=n.y,_=n.z;return s[0]=(1-(x+m))*E,s[1]=(d+y)*E,s[2]=(p-M)*E,s[3]=0,s[4]=(d-y)*w,s[5]=(1-(h+m))*w,s[6]=(g+v)*w,s[7]=0,s[8]=(p+M)*_,s[9]=(g-v)*_,s[10]=(1-(h+x))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Cr.set(s[0],s[1],s[2]).length(),a=Cr.set(s[4],s[5],s[6]).length(),l=Cr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),di.copy(this);let c=1/o,u=1/a,f=1/l;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=u,di.elements[5]*=u,di.elements[6]*=u,di.elements[8]*=f,di.elements[9]*=f,di.elements[10]*=f,t.setFromRotationMatrix(di),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=ti,l=!1){let c=this.elements,u=2*r/(t-e),f=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===ti)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===jr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ti,l=!1){let c=this.elements,u=2/(t-e),f=2/(n-s),h=-(t+e)/(t-e),d=-(n+s)/(n-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===ti)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===jr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Cr=new P,di=new tt,M_=new P(0,0,0),S_=new P(1,1,1),Ts=new P,fl=new P,$n=new P,pp=new tt,mp=new Xt,Pi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-at(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mp.setFromEuler(this),this.setFromQuaternion(mp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pi.DEFAULT_ORDER="XYZ";var no=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},b_=0,gp=new P,Pr=new Xt,ji=new tt,dl=new P,ko=new P,E_=new P,w_=new Xt,xp=new P(1,0,0),_p=new P(0,1,0),yp=new P(0,0,1),vp={type:"added"},T_={type:"removed"},Ir={type:"childadded",child:null},Qu={type:"childremoved",child:null},zt=class i extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new Pi,n=new Xt,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new tt},normalMatrix:{value:new ot}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new no,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pr.setFromAxisAngle(e,t),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(e,t){return Pr.setFromAxisAngle(e,t),this.quaternion.premultiply(Pr),this}rotateX(e){return this.rotateOnAxis(xp,e)}rotateY(e){return this.rotateOnAxis(_p,e)}rotateZ(e){return this.rotateOnAxis(yp,e)}translateOnAxis(e,t){return gp.copy(e).applyQuaternion(this.quaternion),this.position.add(gp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xp,e)}translateY(e){return this.translateOnAxis(_p,e)}translateZ(e){return this.translateOnAxis(yp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?dl.copy(e):dl.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(ko,dl,this.up):ji.lookAt(dl,ko,this.up),this.quaternion.setFromRotationMatrix(ji),s&&(ji.extractRotation(s.matrixWorld),Pr.setFromRotationMatrix(ji),this.quaternion.premultiply(Pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vp),Ir.child=e,this.dispatchEvent(Ir),Ir.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(T_),Qu.child=e,this.dispatchEvent(Qu),Qu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vp),Ir.child=e,this.dispatchEvent(Ir),Ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,e,E_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,w_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};zt.DEFAULT_UP=new P(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var kt=class extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},A_={type:"move"},io=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&h>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(A_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new kt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Nm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},As={h:0,s:0,l:0},pl={h:0,s:0,l:0};function eh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var We=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=mt.workingColorSpace){if(e=rf(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=eh(o,r,e+1/3),this.g=eh(o,r,e),this.b=eh(o,r,e-1/3)}return mt.colorSpaceToWorking(this,s),this}setStyle(e,t=St){function n(r){r!==void 0&&parseFloat(r)<1&&Je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){let n=Nm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}copyLinearToSRGB(e){return this.r=Zr(e.r),this.g=Zr(e.g),this.b=Zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return mt.workingToColorSpace(Tn.copy(this),e),Math.round(at(Tn.r*255,0,255))*65536+Math.round(at(Tn.g*255,0,255))*256+Math.round(at(Tn.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(Tn.copy(this),t);let n=Tn.r,s=Tn.g,r=Tn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=St){mt.workingToColorSpace(Tn.copy(this),e);let t=Tn.r,n=Tn.g,s=Tn.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(As),this.setHSL(As.h+e,As.s+t,As.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(As),e.getHSL(pl);let n=jo(As.h,pl.h,t),s=jo(As.s,pl.s,t),r=jo(As.l,pl.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tn=new We;We.NAMES=Nm;var zn=class extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},pi=new P,Qi=new P,th=new P,es=new P,Lr=new P,Dr=new P,Mp=new P,nh=new P,ih=new P,sh=new P,rh=new Mt,oh=new Mt,ah=new Mt,Ri=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),pi.subVectors(e,t),s.cross(pi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){pi.subVectors(s,t),Qi.subVectors(n,t),th.subVectors(e,t);let o=pi.dot(pi),a=pi.dot(Qi),l=pi.dot(th),c=Qi.dot(Qi),u=Qi.dot(th),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(c*l-a*u)*h,p=(o*u-a*l)*h;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,es)===null?!1:es.x>=0&&es.y>=0&&es.x+es.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,es)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,es.x),l.addScaledVector(o,es.y),l.addScaledVector(a,es.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return rh.setScalar(0),oh.setScalar(0),ah.setScalar(0),rh.fromBufferAttribute(e,t),oh.fromBufferAttribute(e,n),ah.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(rh,r.x),o.addScaledVector(oh,r.y),o.addScaledVector(ah,r.z),o}static isFrontFacing(e,t,n,s){return pi.subVectors(n,t),Qi.subVectors(e,t),pi.cross(Qi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),pi.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Lr.subVectors(s,n),Dr.subVectors(r,n),nh.subVectors(e,n);let l=Lr.dot(nh),c=Dr.dot(nh);if(l<=0&&c<=0)return t.copy(n);ih.subVectors(e,s);let u=Lr.dot(ih),f=Dr.dot(ih);if(u>=0&&f<=u)return t.copy(s);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(n).addScaledVector(Lr,o);sh.subVectors(e,r);let d=Lr.dot(sh),p=Dr.dot(sh);if(p>=0&&d<=p)return t.copy(r);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Dr,a);let g=u*p-d*f;if(g<=0&&f-u>=0&&d-p>=0)return Mp.subVectors(r,s),a=(f-u)/(f-u+(d-p)),t.copy(s).addScaledVector(Mp,a);let m=1/(g+x+h);return o=x*m,a=h*m,t.copy(n).addScaledVector(Lr,o).addScaledVector(Dr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Gt=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,mi):mi.fromBufferAttribute(r,o),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ml.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ml.copy(n.boundingBox)),ml.applyMatrix4(e.matrixWorld),this.union(ml)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),gl.subVectors(this.max,Ho),Nr.subVectors(e.a,Ho),Or.subVectors(e.b,Ho),Ur.subVectors(e.c,Ho),Rs.subVectors(Or,Nr),Cs.subVectors(Ur,Or),Qs.subVectors(Nr,Ur);let t=[0,-Rs.z,Rs.y,0,-Cs.z,Cs.y,0,-Qs.z,Qs.y,Rs.z,0,-Rs.x,Cs.z,0,-Cs.x,Qs.z,0,-Qs.x,-Rs.y,Rs.x,0,-Cs.y,Cs.x,0,-Qs.y,Qs.x,0];return!lh(t,Nr,Or,Ur,gl)||(t=[1,0,0,0,1,0,0,0,1],!lh(t,Nr,Or,Ur,gl))?!1:(xl.crossVectors(Rs,Cs),t=[xl.x,xl.y,xl.z],lh(t,Nr,Or,Ur,gl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ts[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ts[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ts[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ts[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ts[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ts[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ts[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ts[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ts),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ts=[new P,new P,new P,new P,new P,new P,new P,new P],mi=new P,ml=new Gt,Nr=new P,Or=new P,Ur=new P,Rs=new P,Cs=new P,Qs=new P,Ho=new P,gl=new P,xl=new P,er=new P;function lh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){er.fromArray(i,r);let a=s.x*Math.abs(er.x)+s.y*Math.abs(er.y)+s.z*Math.abs(er.z),l=e.dot(er),c=t.dot(er),u=n.dot(er);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var tn=new P,_l=new ke,R_=0,Ft=class extends xi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:R_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=nf,this.updateRanges=[],this.gpuType=kn,this.version=0,this._normalizationScale=e!==void 0?su(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_l.fromBufferAttribute(this,t),_l.applyMatrix3(e),this.setXY(t,_l.x,_l.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):af(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):lf(e,this.array)}};var na=class extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ia=class extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Bt=class extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}},C_=new Gt,Vo=new P,ch=new P,pn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):C_.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vo.subVectors(e,this.center);let t=Vo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Vo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ch.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vo.copy(e.center).add(ch)),this.expandByPoint(Vo.copy(e.center).sub(ch))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},P_=0,Qn=new tt,uh=new zt,Fr=new P,Zn=new Gt,Go=new Gt,fn=new P,Lt=class i extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(t_(e)?ia:na)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ot().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,n){return Qn.makeTranslation(e,t,n),this.applyMatrix4(Qn),this}scale(e,t,n){return Qn.makeScale(e,t,n),this.applyMatrix4(Qn),this}lookAt(e){return uh.lookAt(e),uh.updateMatrix(),this.applyMatrix4(uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Bt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Zn.setFromBufferAttribute(r),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Go.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(Zn.min,Go.min),Zn.expandByPoint(fn),fn.addVectors(Zn.max,Go.max),Zn.expandByPoint(fn)):(Zn.expandByPoint(Go.min),Zn.expandByPoint(Go.max))}Zn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)fn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(fn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)fn.fromBufferAttribute(a,c),l&&(Fr.fromBufferAttribute(e,c),fn.add(Fr)),s=Math.max(s,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ft(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let D=0;D<n.count;D++)a[D]=new P,l[D]=new P;let u=new P,f=new P,h=new P,d=new ke,p=new ke,x=new ke,g=new P,m=new P;function v(D,L,O){c[D]=c[L]=c[O]=1,u.fromBufferAttribute(n,D),f.fromBufferAttribute(n,L),h.fromBufferAttribute(n,O),d.fromBufferAttribute(r,D),p.fromBufferAttribute(r,L),x.fromBufferAttribute(r,O),f.sub(u),h.sub(u),p.sub(d),x.sub(d);let V=1/(p.x*x.y-x.x*p.y);isFinite(V)&&(g.copy(f).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(V),m.copy(h).multiplyScalar(p.x).addScaledVector(f,-x.x).multiplyScalar(V),a[D].add(g),a[L].add(g),a[O].add(g),l[D].add(m),l[L].add(m),l[O].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let D=0,L=M.length;D<L;++D){let O=M[D],V=O.start,B=O.count;for(let I=V,G=V+B;I<G;I+=3)v(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let y=new P,E=new P,w=new P,_=new P;function b(D){w.fromBufferAttribute(s,D),_.copy(w);let L=a[D];y.copy(L),y.sub(w.multiplyScalar(w.dot(L))).normalize(),E.crossVectors(_,L);let V=E.dot(l[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,V)}for(let D=0,L=n.count;D<L;++D)c[D]&&b(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,u=new P,f=new P;if(e)for(let h=0,d=e.count;h<d;h+=3){let p=e.getX(h+0),x=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u),d=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let m=0;m<u;m++)h[p++]=c[d++]}return new Ft(h,u,f)}if(this.index===null)return Je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){let h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ls=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=nf,this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Sp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Sp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Sp(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Fi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Fn=new P,An=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?su(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.applyMatrix4(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.applyNormalMatrix(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.transformDirection(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ea("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ea("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):af(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):lf(e,this.data.array)}},hh=new P,I_=new P,L_=new ot,dn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=hh.subVectors(n,t).cross(I_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(hh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||L_.getNormalMatrix(e),s=this.coplanarPoint(hh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},D_=0,Rn=class extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:D_++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=Ui,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ca,this.blendDst=fo,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Em,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xl,this.stencilZFail=Xl,this.stencilZPass=Xl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Je(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new We().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new dn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ke().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ke().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},so=class extends Rn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Br,Wo=new P,zr=new P,kr=new P,Hr=new ke,Xo=new ke,Om=new tt,yl=new P,qo=new P,vl=new P,bp=new ke,fh=new ke,Ep=new ke,sa=class extends zt{constructor(e=new so){if(super(),this.isSprite=!0,this.type="Sprite",Br===void 0){Br=new Lt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ls(t,5);Br.setIndex([0,1,2,0,2,3]),Br.setAttribute("position",new An(n,3,0,!1)),Br.setAttribute("uv",new An(n,2,3,!1))}this.geometry=Br,this.material=e,this.center=new ke(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&it('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zr.setFromMatrixScale(this.matrixWorld),Om.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),kr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zr.multiplyScalar(-kr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Ml(yl.set(-.5,-.5,0),kr,o,zr,s,r),Ml(qo.set(.5,-.5,0),kr,o,zr,s,r),Ml(vl.set(.5,.5,0),kr,o,zr,s,r),bp.set(0,0),fh.set(1,0),Ep.set(1,1);let a=e.ray.intersectTriangle(yl,qo,vl,!1,Wo);if(a===null&&(Ml(qo.set(-.5,.5,0),kr,o,zr,s,r),fh.set(0,1),a=e.ray.intersectTriangle(yl,vl,qo,!1,Wo),a===null))return;let l=e.ray.origin.distanceTo(Wo);l<e.near||l>e.far||t.push({distance:l,point:Wo.clone(),uv:Ri.getInterpolation(Wo,yl,qo,vl,bp,fh,Ep,new ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Ml(i,e,t,n,s,r){Hr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Xo.x=r*Hr.x-s*Hr.y,Xo.y=s*Hr.x+r*Hr.y):Xo.copy(Hr),i.copy(e),i.x+=Xo.x,i.y+=Xo.y,i.applyMatrix4(Om)}var ns=new P,dh=new P,Sl=new P,bl=new P,Ii=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ns)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ns.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ns.copy(this.origin).addScaledVector(this.direction,t),ns.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){dh.copy(e).add(t).multiplyScalar(.5),Sl.copy(t).sub(e).normalize(),bl.copy(this.origin).sub(dh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Sl),a=bl.dot(this.direction),l=-bl.dot(Sl),c=bl.lengthSq(),u=Math.abs(1-o*o),f,h,d,p;if(u>0)if(f=o*l-a,h=o*a-l,p=r*u,f>=0)if(h>=-p)if(h<=p){let x=1/u;f*=x,h*=x,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-p?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=p?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(dh).addScaledVector(Sl,h),d}intersectSphere(e,t){if(e.radius<0)return null;ns.subVectors(e.center,this.origin);let n=ns.dot(this.direction),s=ns.dot(ns)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ns)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,f=e.x-o.x,h=e.y-o.y,d=e.z-o.z,p=t.x-o.x,x=t.y-o.y,g=t.z-o.z,m=n.x-o.x,v=n.y-o.y,M=n.z-o.z,y=Math.abs(l),E=Math.abs(c),w=Math.abs(u),_,b,D,L,O,V,B,I,G,Y,H,me;if(y>=E&&y>=w?(D=l,V=f,G=p,me=m,l>=0?(_=c,b=u,L=h,O=d,B=x,I=g,Y=v,H=M):(_=u,b=c,L=d,O=h,B=g,I=x,Y=M,H=v)):E>=w?(D=c,V=h,G=x,me=v,c>=0?(_=u,b=l,L=d,O=f,B=g,I=p,Y=M,H=m):(_=l,b=u,L=f,O=d,B=p,I=g,Y=m,H=M)):(D=u,V=d,G=g,me=M,u>=0?(_=l,b=c,L=f,O=h,B=p,I=x,Y=m,H=v):(_=c,b=l,L=h,O=f,B=x,I=p,Y=v,H=m)),D===0)return null;let Z=_/D,k=b/D,J=1/D,ce=L-Z*V,j=O-k*V,U=B-Z*G,ve=I-k*G,ue=Y-Z*me,de=H-k*me,fe=ue*ve-de*U,be=ce*de-j*ue,Xe=U*j-ve*ce;if(s){if(fe<0||be<0||Xe<0)return null}else if((fe<0||be<0||Xe<0)&&(fe>0||be>0||Xe>0))return null;let Ne=fe+be+Xe;if(Ne===0)return null;let ze=J*(fe*V+be*G+Xe*me);return(Ne>0?ze<0:ze>0)?null:this.at(ze/Ne,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},sn=class extends Rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},wp=new tt,tr=new Ii,El=new pn,Tp=new P,wl=new P,Tl=new P,Al=new P,ph=new P,Rl=new P,Ap=new P,Cl=new P,ft=class extends zt{constructor(e=new Lt,t=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Rl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],f=r[l];u!==0&&(ph.fromBufferAttribute(f,e),o?Rl.addScaledVector(ph,u):Rl.addScaledVector(ph.sub(t),u))}t.add(Rl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),El.copy(n.boundingSphere),El.applyMatrix4(r),tr.copy(e.ray).recast(e.near),!(El.containsPoint(tr.origin)===!1&&(tr.intersectSphere(El,Tp)===null||tr.origin.distanceToSquared(Tp)>(e.far-e.near)**2))&&(wp.copy(r).invert(),tr.copy(e.ray).applyMatrix4(wp),!(n.boundingBox!==null&&tr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,tr)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=h.length;p<x;p++){let g=h[p],m=o[g.materialIndex],v=Math.max(g.start,d.start),M=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=v,E=M;y<E;y+=3){let w=a.getX(y),_=a.getX(y+1),b=a.getX(y+2);s=Pl(this,m,e,n,c,u,f,w,_,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let v=a.getX(g),M=a.getX(g+1),y=a.getX(g+2);s=Pl(this,o,e,n,c,u,f,v,M,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=h.length;p<x;p++){let g=h[p],m=o[g.materialIndex],v=Math.max(g.start,d.start),M=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=v,E=M;y<E;y+=3){let w=y,_=y+1,b=y+2;s=Pl(this,m,e,n,c,u,f,w,_,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let v=g,M=g+1,y=g+2;s=Pl(this,o,e,n,c,u,f,v,M,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function N_(i,e,t,n,s,r,o,a){let l;if(e.side===yn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Kn,a),l===null)return null;Cl.copy(a),Cl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Cl);return c<t.near||c>t.far?null:{distance:c,point:Cl.clone(),object:i}}function Pl(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,wl),i.getVertexPosition(l,Tl),i.getVertexPosition(c,Al);let u=N_(i,e,t,n,wl,Tl,Al,Ap);if(u){let f=new P;Ri.getBarycoord(Ap,wl,Tl,Al,f),s&&(u.uv=Ri.getInterpolatedAttribute(s,a,l,c,f,new ke)),r&&(u.uv1=Ri.getInterpolatedAttribute(r,a,l,c,f,new ke)),o&&(u.normal=Ri.getInterpolatedAttribute(o,a,l,c,f,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new P,materialIndex:0};Ri.getNormal(wl,Tl,Al,h.normal),u.face=h,u.barycoord=f}return u}var Yo=new Mt,Rp=new Mt,Cp=new Mt,O_=new Mt,Pp=new tt,Il=new P,mh=new pn,Ip=new tt,gh=new Ii,ra=class extends ft{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Sh,this.bindMatrix=new tt,this.bindMatrixInverse=new tt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Gt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Il),this.boundingBox.expandByPoint(Il)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new pn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Il),this.boundingSphere.expandByPoint(Il)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mh.copy(this.boundingSphere),mh.applyMatrix4(s),e.ray.intersectsSphere(mh)!==!1&&(Ip.copy(s).invert(),gh.copy(e.ray).applyMatrix4(Ip),!(this.boundingBox!==null&&gh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,gh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Mt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Sh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===vm?this.bindMatrixInverse.copy(this.bindMatrix).invert():Je("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Rp.fromBufferAttribute(s.attributes.skinIndex,e),Cp.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Yo.copy(t),t.set(0,0,0,0)):(Yo.set(t.x,t.y,t.z,1),t.set(0,0,0)),Yo.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Cp.getComponent(r);if(o!==0){let a=Rp.getComponent(r);Pp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(O_.copy(Yo).applyMatrix4(Pp),o)}}return t.isVector4&&(t.w=Yo.w),t.applyMatrix4(this.bindMatrixInverse)}},ro=class extends zt{constructor(){super(),this.isBone=!0,this.type="Bone"}},oo=class extends an{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Ht,u=Ht,f,h){super(null,o,a,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Lp=new tt,U_=new tt,oa=class i{constructor(e=[],t=[]){this.uuid=Fi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Je("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new tt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new tt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:U_;Lp.multiplyMatrices(a,t[r]),Lp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new oo(t,e,e,vn,kn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(Je("Skeleton: No bone found with UUID:",r),o=new ro),this.bones.push(o),this.boneInverses.push(new tt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},os=class extends Ft{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Vr=new tt,Dp=new tt,Ll=[],Np=new Gt,F_=new tt,$o=new ft,Zo=new pn,ar=class extends ft{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new os(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,F_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vr),Np.copy(e.boundingBox).applyMatrix4(Vr),this.boundingBox.union(Np)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vr),Zo.copy(e.boundingSphere).applyMatrix4(Vr),this.boundingSphere.union(Zo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if($o.geometry=this.geometry,$o.material=this.material,$o.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zo.copy(this.boundingSphere),Zo.applyMatrix4(n),e.ray.intersectsSphere(Zo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Vr),Dp.multiplyMatrices(n,Vr),$o.matrixWorld=Dp,$o.raycast(e,Ll);for(let o=0,a=Ll.length;o<a;o++){let l=Ll[o];l.instanceId=r,l.object=this,t.push(l)}Ll.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new os(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new oo(new Float32Array(s*this.count),s,this.count,Ec,kn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},nr=new pn,B_=new ke(.5,.5),Dl=new P,Ds=class{constructor(e=new dn,t=new dn,n=new dn,s=new dn,r=new dn,o=new dn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ti,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],p=r[8],x=r[9],g=r[10],m=r[11],v=r[12],M=r[13],y=r[14],E=r[15];if(s[0].setComponents(c-o,d-u,m-p,E-v).normalize(),s[1].setComponents(c+o,d+u,m+p,E+v).normalize(),s[2].setComponents(c+a,d+f,m+x,E+M).normalize(),s[3].setComponents(c-a,d-f,m-x,E-M).normalize(),n)s[4].setComponents(l,h,g,y).normalize(),s[5].setComponents(c-l,d-h,m-g,E-y).normalize();else if(s[4].setComponents(c-l,d-h,m-g,E-y).normalize(),t===ti)s[5].setComponents(c+l,d+h,m+g,E+y).normalize();else if(t===jr)s[5].setComponents(l,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),nr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(nr)}intersectsSprite(e){nr.center.set(0,0,0);let t=B_.distanceTo(e.center);return nr.radius=.7071067811865476+t,nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Dl.x=s.normal.x>0?e.max.x:e.min.x,Dl.y=s.normal.y>0?e.max.y:e.min.y,Dl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Dl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Op=new tt,nc=class i{constructor(){this.coordinateSystem=ti,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Op.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ds),n[s].setFromProjectionMatrix(Op,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ds),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var as=class extends Rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ic=new P,sc=new P,Up=new tt,Ko=new Ii,Nl=new pn,xh=new P,Fp=new P,Li=class extends zt{constructor(e=new Lt,t=new as){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ic.fromBufferAttribute(t,s-1),sc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ic.distanceTo(sc);e.setAttribute("lineDistance",new Bt(n,1))}else Je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nl.copy(n.boundingSphere),Nl.applyMatrix4(s),Nl.radius+=r,e.ray.intersectsSphere(Nl)===!1)return;Up.copy(s).invert(),Ko.copy(e.ray).applyMatrix4(Up);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=d,g=p-1;x<g;x+=c){let m=u.getX(x),v=u.getX(x+1),M=Ol(this,e,Ko,l,m,v,x);M&&t.push(M)}if(this.isLineLoop){let x=u.getX(p-1),g=u.getX(d),m=Ol(this,e,Ko,l,x,g,p-1);m&&t.push(m)}}else{let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=d,g=p-1;x<g;x+=c){let m=Ol(this,e,Ko,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=Ol(this,e,Ko,l,p-1,d,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ol(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(ic.fromBufferAttribute(a,s),sc.fromBufferAttribute(a,r),t.distanceSqToSegment(ic,sc,xh,Fp)>n)return;xh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(xh);if(!(c<e.near||c>e.far))return{distance:c,point:Fp.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Bp=new P,zp=new P,aa=class extends Li{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Bp.fromBufferAttribute(t,s),zp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Bp.distanceTo(zp);e.setAttribute("lineDistance",new Bt(n,1))}else Je("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},la=class extends Li{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ao=class extends Rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},kp=new tt,Ah=new Ii,Ul=new pn,Fl=new P,ca=class extends zt{constructor(e=new Lt,t=new ao){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ul.copy(n.boundingSphere),Ul.applyMatrix4(s),Ul.radius+=r,e.ray.intersectsSphere(Ul)===!1)return;kp.copy(s).invert(),Ah.copy(e.ray).applyMatrix4(kp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=h,x=d;p<x;p++){let g=c.getX(p);Fl.fromBufferAttribute(f,g),Hp(Fl,g,l,s,e,t,this)}}else{let h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let p=h,x=d;p<x;p++)Fl.fromBufferAttribute(f,p),Hp(Fl,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Hp(i,e,t,n,s,r,o){let a=Ah.distanceSqToPoint(i);if(a<t){let l=new P;Ah.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ua=class extends an{constructor(e=[],t=ur,n,s,r,o,a,l,c,u){super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ls=class extends an{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var cs=class extends an{constructor(e,t,n=vi,s,r,o,a=Ht,l=Ht,c,u=rs,f=1){if(u!==rs&&u!==gs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:f};super(h,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new to(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ha=class extends cs{constructor(e,t=vi,n=ur,s,r,o=Ht,a=Ht,l,c=rs){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},fa=class extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Di=class i extends Lt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],f=[],h=0,d=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(f,2));function p(x,g,m,v,M,y,E,w,_,b,D){let L=y/_,O=E/b,V=y/2,B=E/2,I=w/2,G=_+1,Y=b+1,H=0,me=0,Z=new P;for(let k=0;k<Y;k++){let J=k*O-B;for(let ce=0;ce<G;ce++){let j=ce*L-V;Z[x]=j*v,Z[g]=J*M,Z[m]=I,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[g]=0,Z[m]=w>0?1:-1,u.push(Z.x,Z.y,Z.z),f.push(ce/_),f.push(1-k/b),H+=1}}for(let k=0;k<b;k++)for(let J=0;J<_;J++){let ce=h+J+G*k,j=h+J+G*(k+1),U=h+(J+1)+G*(k+1),ve=h+(J+1)+G*k;l.push(ce,j,ve),l.push(j,U,ve),me+=6}a.addGroup(d,me,D),d+=me,h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Bl=new P,zl=new P,_h=new P,kl=new Ri,da=class extends Lt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos($r*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),h=new Map,d=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:x,b:g,c:m}=kl;if(x.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),kl.getNormal(_h),f[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,f[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,f[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let v=0;v<3;v++){let M=(v+1)%3,y=f[v],E=f[M],w=kl[u[v]],_=kl[u[M]],b=`${y}_${E}`,D=`${E}_${y}`,L=h.get(D);L?(_h.dot(L.normal)<=r&&(d.push(w.x,w.y,w.z),d.push(_.x,_.y,_.z)),h.set(D,null)):h.has(b)||h.set(b,{index0:c[v],index1:c[M],normal:_h.clone()})}}for(let p of h.values())if(p){let{index0:x,index1:g}=p;Bl.fromBufferAttribute(a,x),zl.fromBufferAttribute(a,g),d.push(Bl.x,Bl.y,Bl.z),d.push(zl.x,zl.y,zl.z)}this.setAttribute("position",new Bt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var ni=class i extends Lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=t/l,d=[],p=[],x=[],g=[];for(let m=0;m<u;m++){let v=m*h-o;for(let M=0;M<c;M++){let y=M*f-r;p.push(y,-v,0),x.push(0,0,1),g.push(M/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){let M=v+c*m,y=v+c*(m+1),E=v+1+c*(m+1),w=v+1+c*m;d.push(M,y,w),d.push(y,E,w)}this.setIndex(d),this.setAttribute("position",new Bt(p,3)),this.setAttribute("normal",new Bt(x,3)),this.setAttribute("uv",new Bt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var pa=class i extends Lt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],f=new P,h=new P,d=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let v=[],M=m/n,y=o+M*a,E=e*Math.cos(y),w=Math.sqrt(e*e-E*E),_=0;m===0&&o===0?_=.5/t:m===n&&l===Math.PI&&(_=-.5/t);for(let b=0;b<=t;b++){let D=b/t,L=s+D*r;f.x=-w*Math.cos(L),f.y=E,f.z=w*Math.sin(L),p.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),g.push(D+_,1-M),v.push(c++)}u.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){let M=u[m][v+1],y=u[m][v],E=u[m+1][v],w=u[m+1][v+1];(m!==0||o>0)&&d.push(M,y,w),(m!==n-1||l<Math.PI)&&d.push(y,E,w)}this.setIndex(d),this.setAttribute("position",new Bt(p,3)),this.setAttribute("normal",new Bt(x,3)),this.setAttribute("uv",new Bt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ma=class extends Lt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,s=new P,r=new P;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let f=l[c],h=f.start,d=f.count;for(let p=h,x=h+d;p<x;p+=3)for(let g=0;g<3;g++){let m=a.getX(p+g),v=a.getX(p+(g+1)%3);s.fromBufferAttribute(o,m),r.fromBufferAttribute(o,v),Vp(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let u=3*a+c,f=3*a+(c+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,f),Vp(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Bt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Vp(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}function dr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Gp(s))s.isRenderTargetTexture?(Je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Gp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function In(i){let e={};for(let t=0;t<i.length;t++){let n=dr(i[t]);for(let s in n)e[s]=n[s]}return e}function Gp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function z_(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function cf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}var za={clone:dr,merge:In},k_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends Rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=k_,this.fragmentShader=H_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=dr(e.uniforms),this.uniformsGroups=z_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new We().setHex(s.value);break;case"v2":this.uniforms[n].value=new ke().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Mt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ot().fromArray(s.value);break;case"m4":this.uniforms[n].value=new tt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},rc=class extends mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Cn=class extends Rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ba,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ln=class extends Cn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ke(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return ir('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){ir('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ga=class extends Rn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ba,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=xc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},oc=class extends Rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ac=class extends Rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Is(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Jo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function V_(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Wp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function G_(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Ni=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},lc=class extends Ni{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Eh,endingEnd:Eh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case wh:r=e,a=2*t-n;break;case Th:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case wh:o=e,l=2*n-t;break;case Th:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,p=(n-t)/(s-t),x=p*p,g=x*p,m=-h*g+2*h*x-h*p,v=(1+h)*g+(-1.5-2*h)*x+(-.5+h)*p+1,M=(-1-d)*g+(1.5+d)*x+.5*p,y=d*g-d*x;for(let E=0;E!==a;++E)r[E]=m*o[u+E]+v*o[c+E]+M*o[l+E]+y*o[f+E];return r}},cc=class extends Ni{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),f=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*f+o[l+h]*u;return r}},uc=class extends Ni{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},hc=class extends Ni{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,f=this.outTangents;if(!u||!f){let p=(n-t)/(s-t),x=1-p;for(let g=0;g!==a;++g)r[g]=o[c+g]*x+o[l+g]*p;return r}let h=a*2,d=e-1;for(let p=0;p!==a;++p){let x=o[c+p],g=o[l+p],m=d*h+p*2,v=f[m],M=f[m+1],y=e*h+p*2,E=u[y],w=u[y+1],_=X_(n,t,v,E,s);r[p]=Um(_,x,M,w,g)}return r}};function Um(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function W_(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function X_(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Um(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=W_(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Wn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Is(t,this.TimeBufferType),this.values=Is(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Is(e.times,Array),values:Is(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Jo(e.settings)&&(n.settings={inTangents:Is(e.settings.inTangents,Array),outTangents:Is(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new uc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new hc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case sr:t=this.InterpolantFactoryMethodDiscrete;break;case rr:t=this.InterpolantFactoryMethodLinear;break;case Wl:t=this.InterpolantFactoryMethodSmooth;break;case bh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Je("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sr;case this.InterpolantFactoryMethodLinear:return rr;case this.InterpolantFactoryMethodSmooth:return Wl;case this.InterpolantFactoryMethodBezier:return bh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Jo(this.settings)&&(Xp(this.settings.inTangents,e),Xp(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Jo(this.settings)&&(qp(this.settings.inTangents,e),qp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(it("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(it("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){it("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){it("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&n_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){it("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Wl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let f=a*n,h=f-n,d=f+n;for(let p=0;p!==n;++p){let x=t[f+p];if(x!==t[h+p]||x!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,h=o*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Jo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Xp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function qp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Wn.prototype.ValueTypeName="";Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=rr;var us=class extends Wn{constructor(e,t,n){super(e,t,n)}};us.prototype.ValueTypeName="bool";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=sr;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends Wn{constructor(e,t,n,s){super(e,t,n,s)}};xa.prototype.ValueTypeName="color";var hs=class extends Wn{constructor(e,t,n,s){super(e,t,n,s)}};hs.prototype.ValueTypeName="number";var fc=class extends Ni{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Xt.slerpFlat(r,0,o,c-a,o,c,l);return r}},fs=class extends Wn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new fc(this.times,this.values,this.getValueSize(),e)}};fs.prototype.ValueTypeName="quaternion";fs.prototype.InterpolantFactoryMethodSmooth=void 0;var ds=class extends Wn{constructor(e,t,n){super(e,t,n)}};ds.prototype.ValueTypeName="string";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=sr;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var Ns=class extends Wn{constructor(e,t,n,s){super(e,t,n,s)}};Ns.prototype.ValueTypeName="vector";var _a=class{constructor(e="",t=-1,n=[],s=Mm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Fi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Y_(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Wn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=V_(l);l=Wp(l,1,u),c=Wp(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new hs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let f=u[1],h=s[f];h||(s[f]=h=[]),h.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function q_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return hs;case"vector":case"vector2":case"vector3":case"vector4":return Ns;case"color":return xa;case"quaternion":return fs;case"bool":case"boolean":return us;case"string":return ds}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Y_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=q_(i.type);if(i.times===void 0){let n=[],s=[];G_(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Jo(i.settings)&&(t.settings={inTangents:Is(i.settings.inTangents,Float32Array),outTangents:Is(i.settings.outTangents,Float32Array)}),t}var Ci={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Yp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Yp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Yp(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var dc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Fm=new dc,Oi=class{constructor(e){this.manager=e!==void 0?e:Fm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Oi.DEFAULT_MATERIAL_NAME="__DEFAULT";var is={},Rh=class extends Error{constructor(e,t){super(e),this.response=t}},lo=class extends Oi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ci.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(is[e]!==void 0){is[e].push({onLoad:t,onProgress:n,onError:s});return}is[e]=[],is[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Je("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=is[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,p=d!==0,x=0,g=new ReadableStream({start(m){v();function v(){f.read().then(({done:M,value:y})=>{if(M)m.close();else{x+=y.byteLength;let E=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:d});for(let w=0,_=u.length;w<_;w++){let b=u[w];b.onProgress&&b.onProgress(E)}m.enqueue(y),v()}},M=>{m.error(M)})}}});return new Response(g)}else throw new Rh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{Ci.add(`file:${e}`,c);let u=is[e];delete is[e];for(let f=0,h=u.length;f<h;f++){let d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=is[e];if(u===void 0)throw this.manager.itemError(e),c;delete is[e];for(let f=0,h=u.length;f<h;f++){let d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Gr=new WeakMap,pc=class extends Oi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ci.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let f=Gr.get(o);f===void 0&&(f=[],Gr.set(o,f)),f.push({onLoad:t,onError:s})}return o}let a=Qr("img");function l(){u(),t&&t(this);let f=Gr.get(this)||[];for(let h=0;h<f.length;h++){let d=f[h];d.onLoad&&d.onLoad(this)}Gr.delete(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),Ci.remove(`image:${e}`);let h=Gr.get(this)||[];for(let d=0;d<h.length;d++){let p=h[d];p.onError&&p.onError(f)}Gr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ci.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var ya=class extends Oi{constructor(e){super(e)}load(e,t,n,s){let r=new an,o=new pc(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},lr=class extends zt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var yh=new tt,$p=new P,Zp=new P,co=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ds,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;$p.setFromMatrixPosition(e.matrixWorld),t.position.copy($p),Zp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){yh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(yh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===jr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(yh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Hl=new P,Vl=new Xt,Ai=new P,va=class extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hl,Vl,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hl,Vl,Ai.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Hl,Vl,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hl,Vl,Ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ps=new P,Kp=new ke,Jp=new ke,on=class extends va{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=or*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return or*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ps.x,Ps.y).multiplyScalar(-e/Ps.z),Ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ps.x,Ps.y).multiplyScalar(-e/Ps.z)}getViewSize(e,t){return this.getViewBounds(e,Kp,Jp),t.subVectors(Jp,Kp)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan($r*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ch=class extends co{constructor(){super(new on(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=or*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ma=class extends lr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ch}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Ph=class extends co{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0}},cr=class extends lr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ph}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},_i=class extends va{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ih=class extends co{constructor(){super(new _i(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Os=class extends lr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new Ih}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Sa=class extends lr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var ps=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},ba=class extends Lt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var vh=new WeakMap,Ea=class extends Oi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Je("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Je("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ci.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{vh.has(o)===!0?(s&&s(vh.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ci.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),vh.set(l,c),Ci.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ci.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Wr=-90,Xr=1,uo=class extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new on(Wr,Xr,e,t);s.layers=this.layers,this.add(s);let r=new on(Wr,Xr,e,t);r.layers=this.layers,this.add(r);let o=new on(Wr,Xr,e,t);o.layers=this.layers,this.add(o);let a=new on(Wr,Xr,e,t);a.layers=this.layers,this.add(a);let l=new on(Wr,Xr,e,t);l.layers=this.layers,this.add(l);let c=new on(Wr,Xr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ti)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===jr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},mc=class extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var uf="\\[\\]\\.:\\/",$_=new RegExp("["+uf+"]","g"),hf="[^"+uf+"]",Z_="[^"+uf.replace("\\.","")+"]",K_=/((?:WC+[\/:])*)/.source.replace("WC",hf),J_=/(WCOD+)?/.source.replace("WCOD",Z_),j_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hf),Q_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hf),ey=new RegExp("^"+K_+J_+j_+Q_+"$"),ty=["material","materials","bones","map"],Lh=class{constructor(e,t,n){let s=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},At=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($_,"")}static parseTrackName(e){let t=ey.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ty.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Je("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){it("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){it("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){it("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){it("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){it("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){it("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){it("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;it("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){it("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){it("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=Lh;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yT=new Float32Array(1);var Us=class extends Ls{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var jp=new tt,ms=class{constructor(e,t,n=0,s=1/0){this.ray=new Ii(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new no,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):it("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return jp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jp),this}intersectObject(e,t=!0,n=[]){return Dh(e,this,n,t),n.sort(Qp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Dh(e[s],this,n,t);return n.sort(Qp),n}};function Qp(i,e){return i.distance-e.distance}function Dh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Dh(r[o],e,t,!0)}}var Fs=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=at(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(at(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Nh=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};var em=new P,Gl=new P,qr=new P,Yr=new P,Mh=new P,ny=new P,iy=new P,wa=class{constructor(e=new P,t=new P){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){em.subVectors(e,this.start),Gl.subVectors(this.end,this.start);let n=Gl.dot(Gl);if(n===0)return 0;let r=Gl.dot(em)/n;return t&&(r=at(r,0,1)),r}closestPointToPoint(e,t,n){let s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=ny,n=iy){let s=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,u=e.end;qr.subVectors(c,a),Yr.subVectors(u,l),Mh.subVectors(a,l);let f=qr.dot(qr),h=Yr.dot(Yr),d=Yr.dot(Mh);if(f<=s&&h<=s)return t.copy(a),n.copy(l),t.distanceToSquared(n);if(f<=s)r=0,o=d/h,o=at(o,0,1);else{let p=qr.dot(Mh);if(h<=s)o=0,r=at(-p/f,0,1);else{let x=qr.dot(Yr),g=f*h-x*x;g!==0?r=at((x*d-p*h)/g,0,1):r=0,o=(x*r+d)/h,o<0?(o=0,r=at(-p/f,0,1)):o>1&&(o=1,r=at((x-p)/f,0,1))}}return t.copy(a).addScaledVector(qr,r),n.copy(l).addScaledVector(Yr,o),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Ta=class extends xi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function ff(i,e,t,n){let s=sy(n);switch(t){case Kh:return i*e;case Ec:return i*e/s.components*s.byteLength;case wc:return i*e/s.components*s.byteLength;case Hs:return i*e*2/s.components*s.byteLength;case Tc:return i*e*2/s.components*s.byteLength;case Jh:return i*e*3/s.components*s.byteLength;case vn:return i*e*4/s.components*s.byteLength;case Ac:return i*e*4/s.components*s.byteLength;case Ia:case La:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Da:case Na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cc:case Ic:return Math.max(i,16)*Math.max(e,8)/4;case Rc:case Pc:return Math.max(i,8)*Math.max(e,8)/2;case Lc:case Dc:case Oc:case Uc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Nc:case Oa:case Fc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case kc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case qc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case $c:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Zc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Kc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Jc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case jc:case Qc:case eu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case tu:case nu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ua:case iu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sy(i){switch(i){case Pn:case qh:return{byteLength:1,components:1};case xo:case Yh:case Xn:return{byteLength:2,components:1};case Sc:case bc:return{byteLength:2,components:4};case vi:case Mc:case kn:return{byteLength:4,components:1};case $h:case Zh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function rg(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function oy(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,p)=>d.start-p.start);let h=0;for(let d=1;d<f.length;d++){let p=f[h],x=f[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++h,f[h]=x)}f.length=h+1;for(let d=0,p=f.length;d<p;d++){let x=f[d];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ay=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ly=`#ifdef USE_ALPHAHASH
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
#endif`,cy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dy=`#ifdef USE_AOMAP
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
#endif`,py=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,my=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,gy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_y=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vy=`#ifdef USE_IRIDESCENCE
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
#endif`,My=`#ifdef USE_BUMPMAP
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
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,by=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ty=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ay=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ry=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Py=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Iy=`vec3 transformedNormal = objectNormal;
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
#endif`,Ly=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ny=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Oy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,By=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,zy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ky=`#ifdef USE_ENVMAP
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
#endif`,Hy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yy=`#ifdef USE_GRADIENTMAP
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
}`,$y=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jy=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,jy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Qy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ev=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,sv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
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
}`,rv=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ov=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,av=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lv=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,cv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gv=`#if defined( USE_POINTS_UV )
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
#endif`,xv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_v=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vv=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sv=`#ifdef USE_MORPHTARGETS
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
#endif`,bv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ev=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Av=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Cv=`#ifdef USE_NORMALMAP
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
#endif`,Pv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Iv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ov=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Uv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Gv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Wv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Xv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,qv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yv=`#ifdef USE_SKINNING
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
#endif`,$v=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zv=`#ifdef USE_SKINNING
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
#endif`,Kv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eM=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tM=`#ifdef USE_TRANSMISSION
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
#endif`,nM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,iM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,sM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,rM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,oM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aM=`uniform sampler2D t2D;
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
}`,lM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cM=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fM=`#include <common>
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
}`,dM=`#if DEPTH_PACKING == 3200
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
}`,pM=`#define DISTANCE
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
}`,mM=`#define DISTANCE
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
void main() {
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
}`,gM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_M=`uniform float scale;
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
}`,yM=`uniform vec3 diffuse;
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
}`,vM=`#include <common>
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
}`,MM=`uniform vec3 diffuse;
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
}`,SM=`#define LAMBERT
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
}`,bM=`#define LAMBERT
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
#include <envmap_physical_pars_fragment>
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
}`,EM=`#define MATCAP
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
}`,wM=`#define MATCAP
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
}`,TM=`#define NORMAL
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
}`,AM=`#define NORMAL
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
}`,RM=`#define PHONG
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
}`,CM=`#define PHONG
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
#include <envmap_physical_pars_fragment>
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
}`,PM=`#define STANDARD
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
}`,IM=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,LM=`#define TOON
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
}`,DM=`#define TOON
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
}`,NM=`uniform float size;
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
}`,OM=`uniform vec3 diffuse;
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
}`,UM=`#include <common>
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
}`,FM=`uniform vec3 color;
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
	#include <premultiplied_alpha_fragment>
}`,BM=`uniform float rotation;
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
}`,zM=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:ay,alphahash_pars_fragment:ly,alphamap_fragment:cy,alphamap_pars_fragment:uy,alphatest_fragment:hy,alphatest_pars_fragment:fy,aomap_fragment:dy,aomap_pars_fragment:py,batching_pars_vertex:my,batching_vertex:gy,begin_vertex:xy,beginnormal_vertex:_y,bsdfs:yy,iridescence_fragment:vy,bumpmap_pars_fragment:My,clipping_planes_fragment:Sy,clipping_planes_pars_fragment:by,clipping_planes_pars_vertex:Ey,clipping_planes_vertex:wy,color_fragment:Ty,color_pars_fragment:Ay,color_pars_vertex:Ry,color_vertex:Cy,common:Py,defaultnormal_vertex:Iy,displacementmap_pars_vertex:Ly,displacementmap_vertex:Dy,emissivemap_fragment:Ny,emissivemap_pars_fragment:Oy,colorspace_fragment:Uy,colorspace_pars_fragment:Fy,envmap_fragment:By,envmap_common_pars_fragment:zy,envmap_pars_fragment:ky,envmap_pars_vertex:Hy,envmap_physical_pars_fragment:jy,envmap_vertex:Vy,fog_vertex:Gy,fog_pars_vertex:Wy,fog_fragment:Xy,fog_pars_fragment:qy,gradientmap_pars_fragment:Yy,lightmap_pars_fragment:$y,lights_lambert_fragment:Zy,lights_lambert_pars_fragment:Ky,lights_pars_begin:Jy,lights_toon_fragment:Qy,lights_toon_pars_fragment:ev,lights_phong_fragment:tv,lights_phong_pars_fragment:nv,lights_physical_fragment:iv,lights_physical_pars_fragment:sv,lights_fragment_begin:rv,lights_fragment_maps:ov,lights_fragment_end:av,lightprobes_pars_fragment:lv,logdepthbuf_fragment:cv,logdepthbuf_pars_fragment:uv,logdepthbuf_pars_vertex:hv,logdepthbuf_vertex:fv,map_fragment:dv,map_pars_fragment:pv,map_particle_fragment:mv,map_particle_pars_fragment:gv,metalnessmap_fragment:xv,metalnessmap_pars_fragment:_v,morphinstance_vertex:yv,morphcolor_vertex:vv,morphnormal_vertex:Mv,morphtarget_pars_vertex:Sv,morphtarget_vertex:bv,normal_fragment_begin:Ev,normal_fragment_maps:wv,normal_pars_fragment:Tv,normal_pars_vertex:Av,normal_vertex:Rv,normalmap_pars_fragment:Cv,clearcoat_normal_fragment_begin:Pv,clearcoat_normal_fragment_maps:Iv,clearcoat_pars_fragment:Lv,iridescence_pars_fragment:Dv,opaque_fragment:Nv,packing:Ov,premultiplied_alpha_fragment:Uv,project_vertex:Fv,dithering_fragment:Bv,dithering_pars_fragment:zv,roughnessmap_fragment:kv,roughnessmap_pars_fragment:Hv,shadowmap_pars_fragment:Vv,shadowmap_pars_vertex:Gv,shadowmap_vertex:Wv,shadowmask_pars_fragment:Xv,skinbase_vertex:qv,skinning_pars_vertex:Yv,skinning_vertex:$v,skinnormal_vertex:Zv,specularmap_fragment:Kv,specularmap_pars_fragment:Jv,tonemapping_fragment:jv,tonemapping_pars_fragment:Qv,transmission_fragment:eM,transmission_pars_fragment:tM,uv_pars_fragment:nM,uv_pars_vertex:iM,uv_vertex:sM,worldpos_vertex:rM,background_vert:oM,background_frag:aM,backgroundCube_vert:lM,backgroundCube_frag:cM,cube_vert:uM,cube_frag:hM,depth_vert:fM,depth_frag:dM,distance_vert:pM,distance_frag:mM,equirect_vert:gM,equirect_frag:xM,linedashed_vert:_M,linedashed_frag:yM,meshbasic_vert:vM,meshbasic_frag:MM,meshlambert_vert:SM,meshlambert_frag:bM,meshmatcap_vert:EM,meshmatcap_frag:wM,meshnormal_vert:TM,meshnormal_frag:AM,meshphong_vert:RM,meshphong_frag:CM,meshphysical_vert:PM,meshphysical_frag:IM,meshtoon_vert:LM,meshtoon_frag:DM,points_vert:NM,points_frag:OM,shadow_vert:UM,shadow_frag:FM,sprite_vert:BM,sprite_frag:zM},Fe={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Hn={basic:{uniforms:In([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:In([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new We(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:In([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:In([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:In([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new We(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:In([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:In([Fe.points,Fe.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:In([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:In([Fe.common,Fe.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:In([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:In([Fe.sprite,Fe.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:In([Fe.common,Fe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:In([Fe.lights,Fe.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Hn.physical={uniforms:In([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var ru={r:0,b:0,g:0},kM=new tt,og=new ot;og.set(-1,0,0,0,1,0,0,0,1);function HM(i,e,t,n,s,r){let o=new We(0),a=s===!0?0:1,l,c,u=null,f=0,h=null;function d(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){let y=v.backgroundBlurriness>0;M=e.get(M,y)}return M}function p(v){let M=!1,y=d(v);y===null?g(o,a):y&&y.isColor&&(g(y,1),M=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,M){let y=d(M);y&&y.isCubeTexture?(c===void 0&&(c=new ft(new Di(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:dr(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(kM.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(og),c.material.toneMapped=mt.getTransfer(y.colorSpace)!==Rt,(u!==y||f!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,h=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ft(new ni(2,2),new mn({name:"BackgroundMaterial",uniforms:dr(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=mt.getTransfer(y.colorSpace)!==Rt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,h=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,M){v.getRGB(ru,cf(i)),t.buffers.color.setClear(ru.r,ru.g,ru.b,M,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,M=1){o.set(v),a=M,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,g(o,a)},render:p,addToRenderList:x,dispose:m}}function VM(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(O,V,B,I,G){let Y=!1,H=f(O,I,B,V);r!==H&&(r=H,c(r.object)),Y=d(O,I,B,G),Y&&p(O,I,B,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,y(O,V,B,I),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(O){return i.bindVertexArray(O)}function u(O){return i.deleteVertexArray(O)}function f(O,V,B,I){let G=I.wireframe===!0,Y=n[V.id];Y===void 0&&(Y={},n[V.id]=Y);let H=O.isInstancedMesh===!0?O.id:0,me=Y[H];me===void 0&&(me={},Y[H]=me);let Z=me[B.id];Z===void 0&&(Z={},me[B.id]=Z);let k=Z[G];return k===void 0&&(k=h(l()),Z[G]=k),k}function h(O){let V=[],B=[],I=[];for(let G=0;G<t;G++)V[G]=0,B[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:B,attributeDivisors:I,object:O,attributes:{},index:null}}function d(O,V,B,I){let G=r.attributes,Y=V.attributes,H=0,me=B.getAttributes();for(let Z in me)if(me[Z].location>=0){let J=G[Z],ce=Y[Z];if(ce===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(ce=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(ce=O.instanceColor)),J===void 0||J.attribute!==ce||ce&&J.data!==ce.data)return!0;H++}return r.attributesNum!==H||r.index!==I}function p(O,V,B,I){let G={},Y=V.attributes,H=0,me=B.getAttributes();for(let Z in me)if(me[Z].location>=0){let J=Y[Z];J===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(J=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(J=O.instanceColor));let ce={};ce.attribute=J,J&&J.data&&(ce.data=J.data),G[Z]=ce,H++}r.attributes=G,r.attributesNum=H,r.index=I}function x(){let O=r.newAttributes;for(let V=0,B=O.length;V<B;V++)O[V]=0}function g(O){m(O,0)}function m(O,V){let B=r.newAttributes,I=r.enabledAttributes,G=r.attributeDivisors;B[O]=1,I[O]===0&&(i.enableVertexAttribArray(O),I[O]=1),G[O]!==V&&(i.vertexAttribDivisor(O,V),G[O]=V)}function v(){let O=r.newAttributes,V=r.enabledAttributes;for(let B=0,I=V.length;B<I;B++)V[B]!==O[B]&&(i.disableVertexAttribArray(B),V[B]=0)}function M(O,V,B,I,G,Y,H){H===!0?i.vertexAttribIPointer(O,V,B,G,Y):i.vertexAttribPointer(O,V,B,I,G,Y)}function y(O,V,B,I){x();let G=I.attributes,Y=B.getAttributes(),H=V.defaultAttributeValues;for(let me in Y){let Z=Y[me];if(Z.location>=0){let k=G[me];if(k===void 0&&(me==="instanceMatrix"&&O.instanceMatrix&&(k=O.instanceMatrix),me==="instanceColor"&&O.instanceColor&&(k=O.instanceColor)),k!==void 0){let J=k.normalized,ce=k.itemSize,j=e.get(k);if(j===void 0)continue;let U=j.buffer,ve=j.type,ue=j.bytesPerElement,de=ve===i.INT||ve===i.UNSIGNED_INT||k.gpuType===Mc;if(k.isInterleavedBufferAttribute){let fe=k.data,be=fe.isInterleavedBuffer===!0?fe.stride:fe.itemSize,Xe=k.offset;if(fe.isInstancedInterleavedBuffer||fe.isInstancedBufferAttribute){for(let Ne=0;Ne<Z.locationSize;Ne++)m(Z.location+Ne,fe.meshPerAttribute);O.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ne=0;Ne<Z.locationSize;Ne++)g(Z.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,U);for(let Ne=0;Ne<Z.locationSize;Ne++)M(Z.location+Ne,ce/Z.locationSize,ve,J,be*ue,(Xe+ce/Z.locationSize*Ne)*ue,de)}else{if(k.isInstancedBufferAttribute){for(let fe=0;fe<Z.locationSize;fe++)m(Z.location+fe,k.meshPerAttribute);O.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let fe=0;fe<Z.locationSize;fe++)g(Z.location+fe);i.bindBuffer(i.ARRAY_BUFFER,U);for(let fe=0;fe<Z.locationSize;fe++)M(Z.location+fe,ce/Z.locationSize,ve,J,ce*ue,ce/Z.locationSize*fe*ue,de)}}else if(H!==void 0){let J=H[me];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(Z.location,J);break;case 3:i.vertexAttrib3fv(Z.location,J);break;case 4:i.vertexAttrib4fv(Z.location,J);break;default:i.vertexAttrib1fv(Z.location,J)}}}}v()}function E(){D();for(let O in n){let V=n[O];for(let B in V){let I=V[B];for(let G in I){let Y=I[G];for(let H in Y)u(Y[H].object),delete Y[H];delete I[G]}}delete n[O]}}function w(O){if(n[O.id]===void 0)return;let V=n[O.id];for(let B in V){let I=V[B];for(let G in I){let Y=I[G];for(let H in Y)u(Y[H].object),delete Y[H];delete I[G]}}delete n[O.id]}function _(O){for(let V in n){let B=n[V];for(let I in B){let G=B[I];if(G[O.id]===void 0)continue;let Y=G[O.id];for(let H in Y)u(Y[H].object),delete Y[H];delete G[O.id]}}}function b(O){for(let V in n){let B=n[V],I=O.isInstancedMesh===!0?O.id:0,G=B[I];if(G!==void 0){for(let Y in G){let H=G[Y];for(let me in H)u(H[me].object),delete H[me];delete G[Y]}delete B[I],Object.keys(B).length===0&&delete n[V]}}}function D(){L(),o=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:L,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function GM(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function WM(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==vn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let b=_===Xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Pn&&_!==kn&&!b&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Je("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Je("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:y,maxSamples:E,samples:w}}function XM(i){let e=this,t=null,n=0,s=!1,r=!1,o=new dn,a=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){let p=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,m=i.get(f);if(!s||p===null||p.length===0||r&&!g)r?u(null):c();else{let v=r?0:n,M=v*4,y=m.clippingState||null;l.value=y,y=u(p,h,M,d);for(let E=0;E!==M;++E)y[E]=t[E];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,p){let x=f!==null?f.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=d+x*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,y=d;M!==x;++M,y+=4)o.copy(f[M]).applyMatrix4(v,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var Va=class extends nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ua(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Di(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:ii});r.uniforms.tEquirect.value=t;let o=new ft(s,r),a=t.minFilter;return t.minFilter===ri&&(t.minFilter=Vt),new uo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Bm=256,qM=3,YM=20,ag=256,lg=16,$M=3,ZM=new P,KM=new We,vo=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new uo(1,10,null),this._boxMesh=new ft(new Di(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=ZM}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,h=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(KM));let g=new uo(n,s,u);return g.position.copy(a),g.update(l,e),l.autoClear=f,l.autoClearColor=h,l.autoClearDepth=d,l.autoClearStencil=p,e.background=x,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=km(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Bm,of(e))}_fromTexture(e,t){e.mapping===ur||e.mapping===mo?this._setSize(e.image.length===0?Bm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=zm(e,!1,!1),n=Math.log2(e)-qM;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=zm(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ur||e.mapping===mo?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=km()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=JM(),this._integrationMaterial=jM());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/lg);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-$M)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(ag*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=QM());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function zm(i,e,t){return new Va(i,{minFilter:ri,generateMipmaps:e,type:Xn,colorSpace:Bn,depthBuffer:t})}function Ga(i,e,t){return new mn({name:i,uniforms:e,vertexShader:pt.cube_vert,fragmentShader:t,side:yn,blending:ii,depthTest:!1,depthWrite:!1})}function JM(){return Ga("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ag}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function jM(){return Ga("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:lg}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function QM(){return Ga("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${YM}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function km(){return Ga("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Hm(){return Ga("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function eS(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?o(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===_c||d===yc)if(e.has(h)){let p=e.get(h).texture;return a(p,h.mapping)}else{let p=h.image;if(p&&p.height>0){let x=new Va(p.height);return x.fromEquirectangularTexture(i,h),e.set(h,x),h.addEventListener("dispose",c),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let d=h.mapping,p=d===_c||d===yc,x=d===ur||d===mo;if(p||x){let g=t.get(h),m=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new vo(i)),g=p?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{let v=h.image;return p&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new vo(i)),g=p?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function a(h,d){return d===_c?h.mapping=ur:d===yc&&(h.mapping=mo),h}function l(h){let d=0,p=6;for(let x=0;x<p;x++)h[x]!==void 0&&d++;return d===p}function c(h){let d=h.target;d.removeEventListener("dispose",c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function tS(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ir("WebGLRenderer: "+n+" extension not supported."),s}}}function nS(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let x=r.get(p);x&&(e.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function u(p){let x=p.attributes;for(let g in x)e.update(x[g],i.ARRAY_BUFFER)}function f(p){let x=p.index,g=p.attributes.position,m=0;if(g===void 0)return;let v=x!==null?x.array.length:g.array.length/3-1,M=g.count>=65535?ia:na,y=new M(Math.ceil(v/3)*6,1),E=y.array;if(x!==null){let _=x.array;m=x.version;for(let b=0,D=0;b<v;b+=3){let L=_[b+0],O=_[b+1],V=_[b+2];E[D++]=L,E[D++]=O,E[D++]=O,E[D++]=V,E[D++]=V,E[D++]=L}}else{m=g.version;for(let _=0,b=0;_<v;_+=3){let D=_+0,L=_+1,O=_+2;E[b++]=D,E[b++]=L,E[b++]=L,E[b++]=O,E[b++]=O,E[b++]=D}}y.version=m;let w=r.get(p);w&&e.remove(w),r.set(p,y)}function h(p){let x=r.get(p);if(x){let g=p.index;g!==null&&x.version<g.version&&f(p)}else f(p);return r.get(p)}function d(){for(let p in s){let x=s[p].deref();x!==void 0&&l(x)}}return{get:c,update:u,getWireframeAttribute:h,dispose:d}}function iS(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*o),t.update(h,n,1)}function c(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,f*o,d),t.update(h,n,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let x=0;for(let g=0;g<d;g++)x+=h[g];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function sS(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:it("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function rS(i,e,t){let n=new WeakMap,s=new Mt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==f){let D=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",D)};h!==void 0&&h.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],M=0;d===!0&&(M=1),p===!0&&(M=2),x===!0&&(M=3);let y=a.attributes.position.count*M,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*E*4*f),_=new ta(w,y,E,f);_.type=kn,_.needsUpdate=!0;let b=M*4;for(let L=0;L<f;L++){let O=g[L],V=m[L],B=v[L],I=y*E*4*L;for(let G=0;G<O.count;G++){let Y=G*b;d===!0&&(s.fromBufferAttribute(O,G),w[I+Y+0]=s.x,w[I+Y+1]=s.y,w[I+Y+2]=s.z,w[I+Y+3]=0),p===!0&&(s.fromBufferAttribute(V,G),w[I+Y+4]=s.x,w[I+Y+5]=s.y,w[I+Y+6]=s.z,w[I+Y+7]=0),x===!0&&(s.fromBufferAttribute(B,G),w[I+Y+8]=s.x,w[I+Y+9]=s.y,w[I+Y+10]=s.z,w[I+Y+11]=B.itemSize===4?s.w:1)}}h={count:f,texture:_,size:new ke(y,E)},n.set(a,h),a.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function oS(i,e,t,n,s){let r=new WeakMap;function o(c){let u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var aS={[zh]:"LINEAR_TONE_MAPPING",[kh]:"REINHARD_TONE_MAPPING",[Hh]:"CINEON_TONE_MAPPING",[po]:"ACES_FILMIC_TONE_MAPPING",[Gh]:"AGX_TONE_MAPPING",[Wh]:"NEUTRAL_TONE_MAPPING",[Vh]:"CUSTOM_TONE_MAPPING"};function lS(i,e,t,n,s,r){let o=new nn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new Lt;u.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Bt([0,2,0,0,2,0],2));let f=new rc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ft(u,f),d=new _i(-1,1,1,-1,0,1),p=null,x=null,g=!1,m,v=null,M=[],y=!1;this.setSize=function(E,w){o.setSize(E,w),a!==null&&a.setSize(E,w),l!==null&&l.setSize(E,w);for(let _=0;_<M.length;_++){let b=M[_];b.setSize&&b.setSize(E,w)}},this.setEffects=function(E){M=E,y=M.length>0&&M[0].isRenderPass===!0;let w=o.width,_=o.height;M.length>0&&a===null&&(a=new nn(w,_,{type:Xn,depthBuffer:!1,stencilBuffer:!1}),l=new nn(w,_,{type:Xn,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&M.some(D=>D.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new cs(w,_),r===!0&&(c.format=gs,c.type=fr)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let D=0;D<M.length;D++){let L=M[D];L.setSize&&L.setSize(w,_),b&&L.needsDepthTexture===!0&&L.setDepthTexture&&L.setDepthTexture(c)}},this.begin=function(E,w){if(g||E.toneMapping===si&&M.length===0)return!1;if(v=w,w!==null){let _=w.width,b=w.height;(o.width!==_||o.height!==b)&&this.setSize(_,b)}return y===!1&&E.setRenderTarget(o),m=E.toneMapping,E.toneMapping=si,!0},this.hasRenderPass=function(){return y},this.end=function(E,w){E.toneMapping=m,g=!0;let _=o,b=a;for(let D=0;D<M.length;D++){let L=M[D];L.enabled!==!1&&(L.render(E,b,_,w),L.needsSwap!==!1&&(_=b,b=b===a?l:a))}if(p!==E.outputColorSpace||x!==E.toneMapping){p=E.outputColorSpace,x=E.toneMapping,f.defines={},mt.getTransfer(p)===Rt&&(f.defines.SRGB_TRANSFER="");let D=aS[x];D&&(f.defines[D]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,E.setRenderTarget(v),E.render(h,d),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),f.dispose()}}var cg=new an,ug=new cs(1,1),hg=new ha(1),fg=new ta,dg=new tc,pg=new ua,Vm=[],Gm=[],Wm=new Float32Array(16),Xm=new Float32Array(9),qm=new Float32Array(4);function Mo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Vm[s];if(r===void 0&&(r=new Float32Array(s),Vm[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function cn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function un(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function lu(i,e){let t=Gm[e];t===void 0&&(t=new Int32Array(e),Gm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function cS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function uS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2fv(this.addr,e),un(t,e)}}function hS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;i.uniform3fv(this.addr,e),un(t,e)}}function fS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4fv(this.addr,e),un(t,e)}}function dS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(cn(t,n))return;qm.set(n),i.uniformMatrix2fv(this.addr,!1,qm),un(t,n)}}function pS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(cn(t,n))return;Xm.set(n),i.uniformMatrix3fv(this.addr,!1,Xm),un(t,n)}}function mS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(cn(t,n))return;Wm.set(n),i.uniformMatrix4fv(this.addr,!1,Wm),un(t,n)}}function gS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function xS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2iv(this.addr,e),un(t,e)}}function _S(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;i.uniform3iv(this.addr,e),un(t,e)}}function yS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4iv(this.addr,e),un(t,e)}}function vS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function MS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2uiv(this.addr,e),un(t,e)}}function SS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;i.uniform3uiv(this.addr,e),un(t,e)}}function bS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4uiv(this.addr,e),un(t,e)}}function cu(i){return i.version===0&&(i.compareFunction=tf,i.needsUpdate=!0),i}function ES(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=cu(ug):r=cg,t.setTexture2D(e||r,s)}function wS(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||dg,s)}function TS(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=cu(hg):r=pg,t.setTextureCube(e||r,s)}function AS(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||fg,s)}function RS(i){switch(i){case 5126:return cS;case 35664:return uS;case 35665:return hS;case 35666:return fS;case 35674:return dS;case 35675:return pS;case 35676:return mS;case 5124:case 35670:return gS;case 35667:case 35671:return xS;case 35668:case 35672:return _S;case 35669:case 35673:return yS;case 5125:return vS;case 36294:return MS;case 36295:return SS;case 36296:return bS;case 35678:case 36198:case 36298:case 36306:case 35682:return ES;case 35679:case 36299:case 36307:return wS;case 35680:case 36300:case 36308:case 36293:return TS;case 36289:case 36303:case 36311:case 36292:return AS}}function CS(i,e){i.uniform1fv(this.addr,e)}function PS(i,e){let t=Mo(e,this.size,2);i.uniform2fv(this.addr,t)}function IS(i,e){let t=Mo(e,this.size,3);i.uniform3fv(this.addr,t)}function LS(i,e){let t=Mo(e,this.size,4);i.uniform4fv(this.addr,t)}function DS(i,e){let t=Mo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function NS(i,e){let t=Mo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function OS(i,e){let t=Mo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function US(i,e){i.uniform1iv(this.addr,e)}function FS(i,e){i.uniform2iv(this.addr,e)}function BS(i,e){i.uniform3iv(this.addr,e)}function zS(i,e){i.uniform4iv(this.addr,e)}function kS(i,e){i.uniform1uiv(this.addr,e)}function HS(i,e){i.uniform2uiv(this.addr,e)}function VS(i,e){i.uniform3uiv(this.addr,e)}function GS(i,e){i.uniform4uiv(this.addr,e)}function WS(i,e,t){let n=this.cache,s=e.length,r=lu(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=cu(ug):o=cg;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function XS(i,e,t){let n=this.cache,s=e.length,r=lu(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||dg,r[o])}function qS(i,e,t){let n=this.cache,s=e.length,r=lu(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=cu(hg):o=pg;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function YS(i,e,t){let n=this.cache,s=e.length,r=lu(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||fg,r[o])}function $S(i){switch(i){case 5126:return CS;case 35664:return PS;case 35665:return IS;case 35666:return LS;case 35674:return DS;case 35675:return NS;case 35676:return OS;case 5124:case 35670:return US;case 35667:case 35671:return FS;case 35668:case 35672:return BS;case 35669:case 35673:return zS;case 5125:return kS;case 36294:return HS;case 36295:return VS;case 36296:return GS;case 35678:case 36198:case 36298:case 36306:case 35682:return WS;case 35679:case 36299:case 36307:return XS;case 35680:case 36300:case 36308:case 36293:return qS;case 36289:case 36303:case 36311:case 36292:return YS}}var mf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=RS(t.type)}},gf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$S(t.type)}},xf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},df=/(\w+)(\])?(\[|\.)?/g;function Ym(i,e){i.seq.push(e),i.map[e.id]=e}function ZS(i,e,t){let n=i.name,s=n.length;for(df.lastIndex=0;;){let r=df.exec(n),o=df.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ym(t,c===void 0?new mf(a,i,e):new gf(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new xf(a),Ym(t,f)),t=f}}}var yo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);ZS(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function $m(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var KS=37297,JS=0;function jS(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Zm=new ot;function QS(i){mt._getMatrix(Zm,mt.workingColorSpace,i);let e=`mat3( ${Zm.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(i)){case Qo:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return Je("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Km(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+jS(i.getShaderSource(e),a)}else return r}function eb(i,e){let t=QS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var tb={[zh]:"Linear",[kh]:"Reinhard",[Hh]:"Cineon",[po]:"ACESFilmic",[Gh]:"AgX",[Wh]:"Neutral",[Vh]:"Custom"};function nb(i,e){let t=tb[e];return t===void 0?(Je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ou=new P;function ib(){mt.getLuminanceCoefficients(ou);let i=ou.x.toFixed(4),e=ou.y.toFixed(4),t=ou.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ha).join(`
`)}function rb(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ob(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ha(i){return i!==""}function Jm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function jm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ab=/^[ \t]*#include +<([\w\d./]+)>/gm;function _f(i){return i.replace(ab,lb)}function lb(i,e){let t=pt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return _f(t)}var cb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qm(i){return i.replace(cb,ub)}function ub(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function eg(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var hb={[Aa]:"SHADOWMAP_TYPE_PCF",[ho]:"SHADOWMAP_TYPE_VSM"};function fb(i){return hb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var db={[mo]:"ENVMAP_MODE_REFRACTION"};function pb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":db[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var mb={[xc]:"ENVMAP_BLENDING_MULTIPLY",[_m]:"ENVMAP_BLENDING_MIX",[ym]:"ENVMAP_BLENDING_ADD"};function gb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":mb[i.combine]||"ENVMAP_BLENDING_NONE"}function xb(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=fb(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=pb(t),f=gb(t),h=sb(t),d=rb(r),p=s.createProgram(),x,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Ha).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Ha).join(`
`),g.length>0&&(g+=`
`)):(x=[eg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ha).join(`
`),g=[eg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?pt.tonemapping_pars_fragment:"",t.toneMapping!==si?nb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,eb("linearToOutputTexel",t.outputColorSpace),ib(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ha).join(`
`)),o=_f(o),o=Jm(o,t),o=jm(o,t),a=_f(a),a=Jm(a,t),a=jm(a,t),o=Qm(o),a=Qm(a),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",t.glslVersion===sf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=m+x+o,M=m+g+a,y=$m(s,s.VERTEX_SHADER,v),E=$m(s,s.FRAGMENT_SHADER,M);s.attachShader(p,y),s.attachShader(p,E),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function w(L){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(p)||"",V=s.getShaderInfoLog(y)||"",B=s.getShaderInfoLog(E)||"",I=O.trim(),G=V.trim(),Y=B.trim(),H=!0,me=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,y,E);else{let Z=Km(s,y,"vertex"),k=Km(s,E,"fragment");it("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+I+`
`+Z+`
`+k)}else I!==""?Je("WebGLProgram: Program Info Log:",I):(G===""||Y==="")&&(me=!1);me&&(L.diagnostics={runnable:H,programLog:I,vertexShader:{log:G,prefix:x},fragmentShader:{log:Y,prefix:g}})}s.deleteShader(y),s.deleteShader(E),_=new yo(s,p),b=ob(s,p)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(p,KS)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=JS++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=E,this}var _b=0,yf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new vf(e),t.set(e,n)),n}},vf=class{constructor(e){this.id=_b++,this.code=e,this.usedTimes=0}};function yb(i){return i===Hs||i===Oa||i===Ua}function vb(i,e,t,n,s,r){let o=new no,a=new yf,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,b,D,L,O,V){let B=L.fog,I=O.geometry,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,H=e.get(_.envMap||G,Y),me=h[_.type],Z=n.precision;_.precision!==null&&(Z=n.getMaxPrecision(_.precision),Z!==_.precision&&Je("WebGLProgram.getParameters:",_.precision,"not supported, using",Z,"instead."));let k=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,J=k!==void 0?k.length:0,ce=0;I.morphAttributes.position!==void 0&&(ce=1),I.morphAttributes.normal!==void 0&&(ce=2),I.morphAttributes.color!==void 0&&(ce=3);let j,U,ve,ue;if(me){let Ae=Hn[me];j=Ae.vertexShader,U=Ae.fragmentShader}else{j=_.vertexShader,U=_.fragmentShader;let Ae=a.getVertexShaderStage(_),ct=a.getFragmentShaderStage(_);a.update(_,Ae,ct),ve=Ae.id,ue=ct.id}let de=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),be=O.isInstancedMesh===!0,Xe=O.isBatchedMesh===!0,Ne=!!_.map,ze=!!_.matcap,Ue=!!H,qe=Ue&&H.isPMREMTexture===!0,ht=!!_.aoMap,lt=!!_.lightMap,xt=!!_.bumpMap&&_.wireframe===!1,rt=!!_.normalMap,Pt=!!_.displacementMap,le=!!_.emissiveMap,je=!!_.metalnessMap,Qe=!!_.roughnessMap,Me=_.anisotropy>0,T=_.clearcoat>0,ee=_.diffuseRoughness>0,ne=_.dispersion>0,Se=_.retroreflectivity>0,q=_.iridescence>0,_e=_.sheen>0,ge=_.transmission>0,Ee=Me&&!!_.anisotropyMap,C=T&&!!_.clearcoatMap,S=T&&!!_.clearcoatNormalMap,W=T&&!!_.clearcoatRoughnessMap,ye=ee&&!!_.diffuseRoughnessMap,he=q&&!!_.iridescenceMap,re=q&&!!_.iridescenceThicknessMap,xe=_e&&!!_.sheenColorMap,ie=_e&&!!_.sheenRoughnessMap,oe=!!_.specularMap,Re=!!_.specularColorMap,N=!!_.specularIntensityMap,pe=ge&&!!_.transmissionMap,ae=ge&&!!_.thicknessMap,Ie=!!_.gradientMap,we=!!_.alphaMap,Pe=_.alphaTest>0,Le=!!_.alphaHash,Ze=!!_.extensions,X=si;_.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(X=i.toneMapping);let Ce=qe?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,et={shaderID:me,shaderType:_.type,shaderName:_.name,vertexShader:j,fragmentShader:U,defines:_.defines,customVertexShaderID:ve,customFragmentShaderID:ue,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:Z,batching:Xe,batchingColor:Xe&&O._colorsTexture!==null,instancing:be,instancingColor:be&&O.instanceColor!==null,instancingMorph:be&&O.morphTexture!==null,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:mt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ne,matcap:ze,envMap:Ue,envMapMode:Ue&&H.mapping,envMapPMREM:qe,envMapMaxLod:qe?Ce.length-1:null,envMapSize:qe?Ce[0].width:null,aoMap:ht,lightMap:lt,bumpMap:xt,normalMap:rt,displacementMap:Pt,emissiveMap:le,normalMapObjectSpace:rt&&_.normalMapType===bm,normalMapTangentSpace:rt&&_.normalMapType===Ba,packedNormalMap:rt&&_.normalMapType===Ba&&yb(_.normalMap.format),metalnessMap:je,roughnessMap:Qe,anisotropy:Me,anisotropyMap:Ee,clearcoat:T,clearcoatMap:C,clearcoatNormalMap:S,clearcoatRoughnessMap:W,diffuseRoughness:ee,diffuseRoughnessMap:ye,dispersion:ne,retroreflection:Se,iridescence:q,iridescenceMap:he,iridescenceThicknessMap:re,sheen:_e,sheenColorMap:xe,sheenRoughnessMap:ie,specularMap:oe,specularColorMap:Re,specularIntensityMap:N,transmission:ge,transmissionMap:pe,thicknessMap:ae,gradientMap:Ie,opaque:_.transparent===!1&&_.blending===Ui&&_.alphaToCoverage===!1,alphaMap:we,alphaTest:Pe,alphaHash:Le,combine:_.combine,mapUv:Ne&&d(_.map.channel),aoMapUv:ht&&d(_.aoMap.channel),lightMapUv:lt&&d(_.lightMap.channel),bumpMapUv:xt&&d(_.bumpMap.channel),normalMapUv:rt&&d(_.normalMap.channel),displacementMapUv:Pt&&d(_.displacementMap.channel),emissiveMapUv:le&&d(_.emissiveMap.channel),metalnessMapUv:je&&d(_.metalnessMap.channel),roughnessMapUv:Qe&&d(_.roughnessMap.channel),anisotropyMapUv:Ee&&d(_.anisotropyMap.channel),clearcoatMapUv:C&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:S&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ye&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:he&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:re&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:ie&&d(_.sheenRoughnessMap.channel),specularMapUv:oe&&d(_.specularMap.channel),specularColorMapUv:Re&&d(_.specularColorMap.channel),specularIntensityMapUv:N&&d(_.specularIntensityMap.channel),transmissionMapUv:pe&&d(_.transmissionMap.channel),thicknessMapUv:ae&&d(_.thicknessMap.channel),alphaMapUv:we&&d(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(rt||Me),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!I.attributes.uv&&(Ne||we),fog:!!B,useFog:_.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&rt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:fe,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ce,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:V.filter(Ae=>Ae.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:X,decodeVideoTexture:Ne&&_.map.isVideoTexture===!0&&mt.getTransfer(_.map.colorSpace)===Rt,decodeVideoTextureEmissive:le&&_.emissiveMap.isVideoTexture===!0&&mt.getTransfer(_.emissiveMap.colorSpace)===Rt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ct,flipSided:_.side===yn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ze&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&_.extensions.multiDraw===!0||Xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return et.vertexUv1s=l.has(1),et.vertexUv2s=l.has(2),et.vertexUv3s=l.has(3),l.clear(),et}function x(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let D in _.defines)b.push(D),b.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(g(b,_),m(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function g(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function m(_,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function v(_){let b=h[_.type],D;if(b){let L=Hn[b];D=za.clone(L.uniforms)}else D=_.uniforms;return D}function M(_,b){let D=u.get(b);return D!==void 0?++D.usedTimes:(D=new xb(i,b,_,s),c.push(D),u.set(b,D)),D}function y(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function E(_){a.remove(_)}function w(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:v,acquireProgram:M,releaseProgram:y,releaseShaderCache:E,programs:c,dispose:w}}function Mb(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Sb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function tg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ng(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,p,x,g,m){let v=i[e];return v===void 0?(v={id:h.id,object:h,geometry:d,material:p,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:g,group:m},i[e]=v):(v.id=h.id,v.object=h,v.geometry=d,v.material=p,v.materialVariant=o(h),v.groupOrder=x,v.renderOrder=h.renderOrder,v.z=g,v.group=m),e++,v}function l(h,d,p,x,g,m,v){v.reversedDepth===!0&&(g=-g);let M=a(h,d,p,x,g,m);p.transmission>0?n.push(M):p.transparent===!0?s.push(M):t.push(M)}function c(h,d,p,x,g,m){let v=a(h,d,p,x,g,m);p.transmission>0?n.unshift(v):p.transparent===!0?s.unshift(v):t.unshift(v)}function u(h,d){t.length>1&&t.sort(h||Sb),n.length>1&&n.sort(d||tg),s.length>1&&s.sort(d||tg)}function f(){for(let h=e,d=i.length;h<d;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function bb(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new ng,i.set(n,[o])):s>=r.length?(o=new ng,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Eb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new We};break;case"SpotLight":t={position:new P,direction:new P,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function wb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Tb=0;function Ab(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Rb(i){let e=new Eb,t=wb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new tt,o=new tt;function a(c){let u=0,f=0,h=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let d=0,p=0,x=0,g=0,m=0,v=0,M=0,y=0,E=0,w=0,_=0,b=0,D=0,L=0;c.sort(Ab);for(let V=0,B=c.length;V<B;V++){let I=c[V],G=I.color,Y=I.intensity,H=I.distance,me=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Hs?me=I.shadow.map.texture:me=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=G.r*Y,f+=G.g*Y,h+=G.b*Y;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(I.sh.coefficients[Z],Y);L++}else if(I.isSunLight){let Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let k=I.shadow,J=t.get(I);J.shadowIntensity=k.intensity,J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),n.sunShadow[p]=J,n.sunShadowMap[p]=me;let ce=k.getViewportCount();for(let j=0;j<ce;j++)n.sunShadowMatrix[x+j]=k.getMatrix(j),n.sunShadowCascade[x+j]=k._cascadeData[j];x+=ce,p++}n.sun[d]=Z,d++}else if(I.isDirectionalLight){let Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let k=I.shadow,J=t.get(I);J.shadowIntensity=k.intensity,J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize=k.mapSize,n.directionalShadow[g]=J,n.directionalShadowMap[g]=me,n.directionalShadowMatrix[g]=I.shadow.matrix,E++}n.directional[g]=Z,g++}else if(I.isSpotLight){let Z=e.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(G).multiplyScalar(Y),Z.distance=H,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,n.spot[v]=Z;let k=I.shadow;if(I.map&&(n.spotLightMap[b]=I.map,b++,k.updateMatrices(I),I.castShadow&&D++),n.spotLightMatrix[v]=k.matrix,I.castShadow){let J=t.get(I);J.shadowIntensity=k.intensity,J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize=k.mapSize,n.spotShadow[v]=J,n.spotShadowMap[v]=me,_++}v++}else if(I.isRectAreaLight){let Z=e.get(I);Z.color.copy(G).multiplyScalar(Y),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),n.rectArea[M]=Z,M++}else if(I.isPointLight){let Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){let k=I.shadow,J=t.get(I);J.shadowIntensity=k.intensity,J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize=k.mapSize,J.shadowCameraNear=k.camera.near,J.shadowCameraFar=k.camera.far,n.pointShadow[m]=J,n.pointShadowMap[m]=me,n.pointShadowMatrix[m]=I.shadow.matrix,w++}n.point[m]=Z,m++}else if(I.isHemisphereLight){let Z=e.get(I);Z.skyColor.copy(I.color).multiplyScalar(Y),Z.groundColor.copy(I.groundColor).multiplyScalar(Y),n.hemi[y]=Z,y++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Fe.LTC_FLOAT_1,n.rectAreaLTC2=Fe.LTC_FLOAT_2):(n.rectAreaLTC1=Fe.LTC_HALF_1,n.rectAreaLTC2=Fe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let O=n.hash;(O.sunLength!==d||O.directionalLength!==g||O.pointLength!==m||O.spotLength!==v||O.rectAreaLength!==M||O.hemiLength!==y||O.numSunShadows!==p||O.numDirectionalShadows!==E||O.numPointShadows!==w||O.numSpotShadows!==_||O.numSpotMaps!==b||O.numLightProbes!==L)&&(n.sun.length=d,n.directional.length=g,n.spot.length=v,n.rectArea.length=M,n.point.length=m,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+b-D,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=L,O.sunLength=d,O.directionalLength=g,O.pointLength=m,O.spotLength=v,O.rectAreaLength=M,O.hemiLength=y,O.numSunShadows=p,O.numDirectionalShadows=E,O.numPointShadows=w,O.numSpotShadows=_,O.numSpotMaps=b,O.numLightProbes=L,n.version=Tb++)}function l(c,u){let f=0,h=0,d=0,p=0,x=0,g=0,m=u.matrixWorldInverse;for(let v=0,M=c.length;v<M;v++){let y=c[v];if(y.isSunLight){let E=n.sun[f];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(m),f++}else if(y.isDirectionalLight){let E=n.directional[h];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),h++}else if(y.isSpotLight){let E=n.spot[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let E=n.rectArea[x];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let E=n.point[d];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let E=n.hemi[g];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function ig(i){let e=new Rb(i),t=[],n=[],s=[];function r(f){u.camera=f,t.length=0,n.length=0,s.length=0}function o(f){f.isLightProbeGrid?s.push(f):t.push(f)}function a(f){n.push(f)}function l(){e.setup(t),s.sort((f,h)=>f.priority-h.priority||f.id-h.id)}function c(f){e.setupView(t,f)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Cb(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new ig(i),e.set(s,[a])):r>=o.length?(a=new ig(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Pb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ib=`uniform sampler2D shadow_pass;
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
}`,Lb=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Db=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],sg=new tt,ka=new P,pf=new P;function Nb(i,e,t){let n=new Ds,s=new ke,r=new ke,o=new Mt,a=new oc,l=new ac,c={},u=t.maxTextureSize,f={[Kn]:yn,[yn]:Kn,[Ct]:Ct},h=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:Pb,fragmentShader:Ib}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let p=new Lt;p.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ft(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Aa;let m=this.type;this.render=function(w,_,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===im&&(Je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Aa);let D=i.getRenderTarget(),L=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),V=i.state;V.setBlending(ii),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let B=m!==this.type;B&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(G=>G.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,G=w.length;I<G;I++){let Y=w[I],H=Y.shadow;if(H===void 0){Je("WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let me=H.getFrameExtents();s.multiply(me),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/me.x),s.x=r.x*me.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/me.y),s.y=r.y*me.y,H.mapSize.y=r.y));let Z=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=Z,H.map===null||B===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ho){if(Y.isPointLight){Je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new nn(s.x,s.y,{format:Hs,type:Xn,minFilter:Vt,magFilter:Vt,generateMipmaps:!1}),H.map.texture.name=Y.name+".shadowMap",H.map.depthTexture=new cs(s.x,s.y,kn),H.map.depthTexture.name=Y.name+".shadowMapDepth",H.map.depthTexture.format=rs,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ht,H.map.depthTexture.magFilter=Ht}else Y.isPointLight?(H.map=new Va(s.x),H.map.depthTexture=new ha(s.x,vi)):(H.map=new nn(s.x,s.y),H.map.depthTexture=new cs(s.x,s.y,vi)),H.map.depthTexture.name=Y.name+".shadowMap",H.map.depthTexture.format=rs,this.type===Aa?(H.map.depthTexture.compareFunction=Z?ef:Qh,H.map.depthTexture.minFilter=Vt,H.map.depthTexture.magFilter=Vt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ht,H.map.depthTexture.magFilter=Ht);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let k=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();Y.isPointLight!==!0&&H.updateMatrices(Y,b);let J=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:b.layers;for(let ce=0;ce<k;ce++){let j=H.getCamera(ce);if(Y.isPointLight){let U=H.camera,ve=H.matrix,ue=Y.distance||U.far;ue!==U.far&&(U.far=ue,U.updateProjectionMatrix()),ka.setFromMatrixPosition(Y.matrixWorld),U.position.copy(ka),pf.copy(U.position),pf.add(Lb[ce]),U.up.copy(Db[ce]),U.lookAt(pf),U.updateMatrixWorld(),ve.makeTranslation(-ka.x,-ka.y,-ka.z),sg.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),H._frustum.setFromProjectionMatrix(sg,U.coordinateSystem,U.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,ce),i.clear();else{ce===0&&(i.setRenderTarget(H.map),i.clear());let U=H.getViewport(ce);o.set(r.x*U.x,r.y*U.y,r.x*U.z,r.y*U.w),V.viewport(o)}n=H.getFrustum(ce),y(_,b,j,Y,J,this.type)}H.isPointLightShadow!==!0&&this.type===ho&&v(H,b),H.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(D,L,O)};function v(w,_){let b=e.update(x);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new nn(s.x,s.y,{format:Hs,type:Xn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(_,null,b,h,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(_,null,b,d,x,null)}function M(w,_,b,D){let L=null,O=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(O!==void 0)L=O;else if(L=b.isPointLight===!0?l:a,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let V=L.uuid,B=_.uuid,I=c[V];I===void 0&&(I={},c[V]=I);let G=I[B];G===void 0&&(G=L.clone(),I[B]=G,_.addEventListener("dispose",E)),L=G}if(L.visible=_.visible,L.wireframe=_.wireframe,D===ho?L.side=_.shadowSide!==null?_.shadowSide:_.side:L.side=_.shadowSide!==null?_.shadowSide:f[_.side],L.alphaMap=_.alphaMap,L.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,L.map=_.map,L.clipShadows=_.clipShadows,L.clippingPlanes=_.clippingPlanes,L.clipIntersection=_.clipIntersection,L.displacementMap=_.displacementMap,L.displacementScale=_.displacementScale,L.displacementBias=_.displacementBias,L.wireframeLinewidth=_.wireframeLinewidth,L.linewidth=_.linewidth,b.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let V=i.properties.get(L);V.light=b}return L}function y(w,_,b,D,L,O){if(w.visible===!1)return;if(w.layers.test(L)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&O===ho)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let I=e.update(w),G=w.material;if(Array.isArray(G)){let Y=I.groups;for(let H=0,me=Y.length;H<me;H++){let Z=Y[H],k=G[Z.materialIndex];if(k&&k.visible){let J=M(w,k,D,O);w.onBeforeShadow(i,w,_,b,I,J,Z),i.renderBufferDirect(b,null,I,J,w,Z),w.onAfterShadow(i,w,_,b,I,J,Z)}}}else if(G.visible){let Y=M(w,G,D,O);w.onBeforeShadow(i,w,_,b,I,Y,null),i.renderBufferDirect(b,null,I,Y,w,null),w.onAfterShadow(i,w,_,b,I,Y,null)}}let B=w.children;for(let I=0,G=B.length;I<G;I++)y(B[I],_,b,D,L,O)}function E(w){w.target.removeEventListener("dispose",E);for(let b in c){let D=c[b],L=w.target.uuid;L in D&&(D[L].dispose(),delete D[L])}}}function Ob(i,e){function t(){let N=!1,pe=new Mt,ae=null,Ie=new Mt(0,0,0,0);return{setMask:function(we){ae!==we&&!N&&(i.colorMask(we,we,we,we),ae=we)},setLocked:function(we){N=we},setClear:function(we,Pe,Le,Ze,X){X===!0&&(we*=Ze,Pe*=Ze,Le*=Ze),pe.set(we,Pe,Le,Ze),Ie.equals(pe)===!1&&(i.clearColor(we,Pe,Le,Ze),Ie.copy(pe))},reset:function(){N=!1,ae=null,Ie.set(-1,0,0,0)}}}function n(){let N=!1,pe=!1,ae=null,Ie=null,we=null;return{setReversed:function(Pe){if(pe!==Pe){let Le=e.get("EXT_clip_control");Pe?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),pe=Pe;let Ze=we;we=null,this.setClear(Ze)}},getReversed:function(){return pe},setTest:function(Pe){Pe?fe(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(Pe){ae!==Pe&&!N&&(i.depthMask(Pe),ae=Pe)},setFunc:function(Pe){if(pe&&(Pe=Dm[Pe]),Ie!==Pe){switch(Pe){case ql:i.depthFunc(i.NEVER);break;case Yl:i.depthFunc(i.ALWAYS);break;case $l:i.depthFunc(i.LESS);break;case Kr:i.depthFunc(i.LEQUAL);break;case Zl:i.depthFunc(i.EQUAL);break;case Kl:i.depthFunc(i.GEQUAL);break;case Jl:i.depthFunc(i.GREATER);break;case jl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ie=Pe}},setLocked:function(Pe){N=Pe},setClear:function(Pe){we!==Pe&&(we=Pe,pe&&(Pe=1-Pe),i.clearDepth(Pe))},reset:function(){N=!1,ae=null,Ie=null,we=null,pe=!1}}}function s(){let N=!1,pe=null,ae=null,Ie=null,we=null,Pe=null,Le=null,Ze=null,X=null;return{setTest:function(Ce){N||(Ce?fe(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(Ce){pe!==Ce&&!N&&(i.stencilMask(Ce),pe=Ce)},setFunc:function(Ce,et,Ae){(ae!==Ce||Ie!==et||we!==Ae)&&(i.stencilFunc(Ce,et,Ae),ae=Ce,Ie=et,we=Ae)},setOp:function(Ce,et,Ae){(Pe!==Ce||Le!==et||Ze!==Ae)&&(i.stencilOp(Ce,et,Ae),Pe=Ce,Le=et,Ze=Ae)},setLocked:function(Ce){N=Ce},setClear:function(Ce){X!==Ce&&(i.clearStencil(Ce),X=Ce)},reset:function(){N=!1,pe=null,ae=null,Ie=null,we=null,Pe=null,Le=null,Ze=null,X=null}}}let r=new t,o=new n,a=new s,l={},c=new WeakMap,u={},f={},h={},d=new WeakMap,p=[],x=null,g=!1,m=null,v=null,M=null,y=null,E=null,w=null,_=null,b=new We(0,0,0),D=0,L=!1,O=null,V=null,B=null,I=null,G=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,me=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(Z)[1]),H=me>=1):Z.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),H=me>=2);let k=null,J={},ce=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),U=new Mt().fromArray(ce),ve=new Mt().fromArray(j);function ue(N,pe,ae,Ie){let we=new Uint8Array(4),Pe=i.createTexture();i.bindTexture(N,Pe),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Le=0;Le<ae;Le++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,Ie,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(pe+Le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return Pe}let de={};de[i.TEXTURE_2D]=ue(i.TEXTURE_2D,i.TEXTURE_2D,1),de[i.TEXTURE_CUBE_MAP]=ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[i.TEXTURE_2D_ARRAY]=ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),de[i.TEXTURE_3D]=ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(i.DEPTH_TEST),o.setFunc(Kr),xt(!1),rt(Oh),fe(i.CULL_FACE),ht(ii);function fe(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function be(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function Xe(N,pe){return h[N]!==pe?(i.bindFramebuffer(N,pe),h[N]=pe,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=pe),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function Ne(N,pe){let ae=p,Ie=!1;if(N){ae=d.get(pe),ae===void 0&&(ae=[],d.set(pe,ae));let we=N.textures;if(ae.length!==we.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let Pe=0,Le=we.length;Pe<Le;Pe++)ae[Pe]=i.COLOR_ATTACHMENT0+Pe;ae.length=we.length,Ie=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,Ie=!0);Ie&&i.drawBuffers(ae)}function ze(N){return x!==N?(i.useProgram(N),x=N,!0):!1}let Ue={[yi]:i.FUNC_ADD,[sm]:i.FUNC_SUBTRACT,[rm]:i.FUNC_REVERSE_SUBTRACT};Ue[om]=i.MIN,Ue[am]=i.MAX;let qe={[Ra]:i.ZERO,[ks]:i.ONE,[lm]:i.SRC_COLOR,[Ca]:i.SRC_ALPHA,[dm]:i.SRC_ALPHA_SATURATE,[hm]:i.DST_COLOR,[um]:i.DST_ALPHA,[cm]:i.ONE_MINUS_SRC_COLOR,[fo]:i.ONE_MINUS_SRC_ALPHA,[fm]:i.ONE_MINUS_DST_COLOR,[Pa]:i.ONE_MINUS_DST_ALPHA,[pm]:i.CONSTANT_COLOR,[mm]:i.ONE_MINUS_CONSTANT_COLOR,[gm]:i.CONSTANT_ALPHA,[xm]:i.ONE_MINUS_CONSTANT_ALPHA};function ht(N,pe,ae,Ie,we,Pe,Le,Ze,X,Ce){if(N===ii){g===!0&&(be(i.BLEND),g=!1);return}if(g===!1&&(fe(i.BLEND),g=!0),N!==gc){if(N!==m||Ce!==L){if((v!==yi||E!==yi)&&(i.blendEquation(i.FUNC_ADD),v=yi,E=yi),Ce)switch(N){case Ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Uh:i.blendFunc(i.ONE,i.ONE);break;case Fh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:it("WebGLState: Invalid blending: ",N);break}else switch(N){case Ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Uh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Fh:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bh:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",N);break}M=null,y=null,w=null,_=null,b.set(0,0,0),D=0,m=N,L=Ce}return}we=we||pe,Pe=Pe||ae,Le=Le||Ie,(pe!==v||we!==E)&&(i.blendEquationSeparate(Ue[pe],Ue[we]),v=pe,E=we),(ae!==M||Ie!==y||Pe!==w||Le!==_)&&(i.blendFuncSeparate(qe[ae],qe[Ie],qe[Pe],qe[Le]),M=ae,y=Ie,w=Pe,_=Le),(Ze.equals(b)===!1||X!==D)&&(i.blendColor(Ze.r,Ze.g,Ze.b,X),b.copy(Ze),D=X),m=N,L=!1}function lt(N,pe){N.side===Ct?be(i.CULL_FACE):fe(i.CULL_FACE);let ae=N.side===yn;pe&&(ae=!ae),xt(ae),N.blending===Ui&&N.transparent===!1?ht(ii):ht(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let Ie=N.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),le(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function xt(N){O!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),O=N)}function rt(N){N!==tm?(fe(i.CULL_FACE),N!==V&&(N===Oh?i.cullFace(i.BACK):N===nm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),V=N}function Pt(N){N!==B&&(H&&i.lineWidth(N),B=N)}function le(N,pe,ae){N?(fe(i.POLYGON_OFFSET_FILL),(I!==pe||G!==ae)&&(I=pe,G=ae,o.getReversed()&&(pe=-pe,ae=-ae),i.polygonOffset(pe,ae))):be(i.POLYGON_OFFSET_FILL)}function je(N){N?fe(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function Qe(N){N===void 0&&(N=i.TEXTURE0+Y-1),k!==N&&(i.activeTexture(N),k=N)}function Me(N,pe,ae){ae===void 0&&(k===null?ae=i.TEXTURE0+Y-1:ae=k);let Ie=J[ae];Ie===void 0&&(Ie={type:void 0,texture:void 0},J[ae]=Ie),(Ie.type!==N||Ie.texture!==pe)&&(k!==ae&&(i.activeTexture(ae),k=ae),i.bindTexture(N,pe||de[N]),Ie.type=N,Ie.texture=pe)}function T(){let N=J[k];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ee(){try{i.compressedTexImage2D(...arguments)}catch(N){it("WebGLState:",N)}}function ne(){try{i.compressedTexImage3D(...arguments)}catch(N){it("WebGLState:",N)}}function Se(){try{i.texSubImage2D(...arguments)}catch(N){it("WebGLState:",N)}}function q(){try{i.texSubImage3D(...arguments)}catch(N){it("WebGLState:",N)}}function _e(){try{i.compressedTexSubImage2D(...arguments)}catch(N){it("WebGLState:",N)}}function ge(){try{i.compressedTexSubImage3D(...arguments)}catch(N){it("WebGLState:",N)}}function Ee(){try{i.texStorage2D(...arguments)}catch(N){it("WebGLState:",N)}}function C(){try{i.texStorage3D(...arguments)}catch(N){it("WebGLState:",N)}}function S(){try{i.texImage2D(...arguments)}catch(N){it("WebGLState:",N)}}function W(){try{i.texImage3D(...arguments)}catch(N){it("WebGLState:",N)}}function ye(N){return f[N]!==void 0?f[N]:i.getParameter(N)}function he(N,pe){f[N]!==pe&&(i.pixelStorei(N,pe),f[N]=pe)}function re(N){U.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),U.copy(N))}function xe(N){ve.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),ve.copy(N))}function ie(N,pe){let ae=c.get(pe);ae===void 0&&(ae=new WeakMap,c.set(pe,ae));let Ie=ae.get(N);Ie===void 0&&(Ie=i.getUniformBlockIndex(pe,N.name),i.uniformBlockBinding(pe,Ie,Ie),ae.set(N,Ie))}function oe(N,pe,ae){let we=c.get(pe).get(N);l[we]!==ae&&(i.bindBufferBase(i.UNIFORM_BUFFER,we,ae),l[we]=ae)}function Re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},k=null,J={},h={},l={},d=new WeakMap,p=[],x=null,g=!1,m=null,v=null,M=null,y=null,E=null,w=null,_=null,b=new We(0,0,0),D=0,L=!1,O=null,V=null,B=null,I=null,G=null,U.set(0,0,i.canvas.width,i.canvas.height),ve.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:fe,disable:be,bindFramebuffer:Xe,drawBuffers:Ne,useProgram:ze,setBlending:ht,setMaterial:lt,setFlipSided:xt,setCullFace:rt,setLineWidth:Pt,setPolygonOffset:le,setScissorTest:je,activeTexture:Qe,bindTexture:Me,unbindTexture:T,compressedTexImage2D:ee,compressedTexImage3D:ne,texImage2D:S,texImage3D:W,pixelStorei:he,getParameter:ye,updateUBOMapping:ie,uniformBlockBinding:oe,texStorage2D:Ee,texStorage3D:C,texSubImage2D:Se,texSubImage3D:q,compressedTexSubImage2D:_e,compressedTexSubImage3D:ge,scissor:re,viewport:xe,reset:Re}}function Ub(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,u=new WeakMap,f=new Set,h,d=new WeakMap,p=new Set,x=new FinalizationRegistry(C=>p.delete(C)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,S){return g?new OffscreenCanvas(C,S):Qr("canvas")}function v(C,S,W){let ye=1,he=Ee(C);if((he.width>W||he.height>W)&&(ye=W/Math.max(he.width,he.height)),ye<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let re=Math.floor(ye*he.width),xe=Math.floor(ye*he.height);h===void 0&&(h=m(re,xe));let ie=S?m(re,xe):h;return ie.width=re,ie.height=xe,ie.getContext("2d").drawImage(C,0,0,re,xe),Je("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+re+"x"+xe+")."),ie}else return"data"in C&&Je("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),C;return C}function M(C){return C.generateMipmaps}function y(C){i.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(C,S,W,ye,he,re=!1){if(C!==null){if(i[C]!==void 0)return i[C];Je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let xe;ye&&(xe=e.get("EXT_texture_norm16"),xe||Je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=S;if(S===i.RED&&(W===i.FLOAT&&(ie=i.R32F),W===i.HALF_FLOAT&&(ie=i.R16F),W===i.UNSIGNED_BYTE&&(ie=i.R8),W===i.UNSIGNED_SHORT&&xe&&(ie=xe.R16_EXT),W===i.SHORT&&xe&&(ie=xe.R16_SNORM_EXT)),S===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(ie=i.R8UI),W===i.UNSIGNED_SHORT&&(ie=i.R16UI),W===i.UNSIGNED_INT&&(ie=i.R32UI),W===i.BYTE&&(ie=i.R8I),W===i.SHORT&&(ie=i.R16I),W===i.INT&&(ie=i.R32I)),S===i.RG&&(W===i.FLOAT&&(ie=i.RG32F),W===i.HALF_FLOAT&&(ie=i.RG16F),W===i.UNSIGNED_BYTE&&(ie=i.RG8),W===i.UNSIGNED_SHORT&&xe&&(ie=xe.RG16_EXT),W===i.SHORT&&xe&&(ie=xe.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(ie=i.RG8UI),W===i.UNSIGNED_SHORT&&(ie=i.RG16UI),W===i.UNSIGNED_INT&&(ie=i.RG32UI),W===i.BYTE&&(ie=i.RG8I),W===i.SHORT&&(ie=i.RG16I),W===i.INT&&(ie=i.RG32I)),S===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),W===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),W===i.UNSIGNED_INT&&(ie=i.RGB32UI),W===i.BYTE&&(ie=i.RGB8I),W===i.SHORT&&(ie=i.RGB16I),W===i.INT&&(ie=i.RGB32I)),S===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),W===i.UNSIGNED_INT&&(ie=i.RGBA32UI),W===i.BYTE&&(ie=i.RGBA8I),W===i.SHORT&&(ie=i.RGBA16I),W===i.INT&&(ie=i.RGBA32I)),S===i.RGB&&(W===i.UNSIGNED_SHORT&&xe&&(ie=xe.RGB16_EXT),W===i.SHORT&&xe&&(ie=xe.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(ie=i.R11F_G11F_B10F)),S===i.RGBA){let oe=re?Qo:mt.getTransfer(he);W===i.FLOAT&&(ie=i.RGBA32F),W===i.HALF_FLOAT&&(ie=i.RGBA16F),W===i.UNSIGNED_BYTE&&(ie=oe===Rt?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&xe&&(ie=xe.RGBA16_EXT),W===i.SHORT&&xe&&(ie=xe.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function _(C,S){let W;return C?S===null||S===vi||S===fr?W=i.DEPTH24_STENCIL8:S===kn?W=i.DEPTH32F_STENCIL8:S===xo&&(W=i.DEPTH24_STENCIL8,Je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===vi||S===fr?W=i.DEPTH_COMPONENT24:S===kn?W=i.DEPTH_COMPONENT32F:S===xo&&(W=i.DEPTH_COMPONENT16),W}function b(C,S){return M(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ht&&C.minFilter!==Vt?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function D(C){let S=new WeakRef(C);n.get(C).__ref=S,p.add(S),x.register(C,S,S)}function L(C){let S=n.get(C).__ref;S!==void 0&&(p.delete(S),x.unregister(S))}function O(C){B(C.target)}function V(C){I(C.target)}function B(C){C.removeEventListener("dispose",O),L(C),Y(C),C.isVideoTexture&&u.delete(C),C.isHTMLTexture&&f.delete(C)}function I(C){C.removeEventListener("dispose",V),L(C),me(C)}function G(){for(let C of p){let S=C.deref();S!==void 0&&(S.isRenderTarget===!0?I(S):B(S))}p.clear(),f.clear()}function Y(C){let S=n.get(C);if(S.__webglInit===void 0)return;let W=C.source,ye=d.get(W);if(ye){let he=ye[S.__cacheKey];he.usedTimes--,he.usedTimes===0&&H(C),Object.keys(ye).length===0&&d.delete(W)}n.remove(C)}function H(C){let S=n.get(C);i.deleteTexture(S.__webglTexture);let W=C.source,ye=d.get(W);delete ye[S.__cacheKey],o.memory.textures--}function me(C){let S=n.get(C);S.__depthDisposeCallback&&S.__depthDisposeCallback();let W=C.depthTexture;if(W&&W.renderTarget===C&&B(W),C.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(S.__webglFramebuffer[he]))for(let re=0;re<S.__webglFramebuffer[he].length;re++)i.deleteFramebuffer(S.__webglFramebuffer[he][re]);else i.deleteFramebuffer(S.__webglFramebuffer[he]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[he])}else{if(Array.isArray(S.__webglFramebuffer))for(let he=0;he<S.__webglFramebuffer.length;he++)i.deleteFramebuffer(S.__webglFramebuffer[he]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let he=0;he<S.__webglColorRenderbuffer.length;he++)S.__webglColorRenderbuffer[he]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[he]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let ye=C.textures;for(let he=0,re=ye.length;he<re;he++){let xe=n.get(ye[he]);xe.__webglTexture&&(i.deleteTexture(xe.__webglTexture),o.memory.textures--),n.remove(ye[he])}n.remove(C)}let Z=0;function k(){Z=0}function J(){return Z}function ce(C){Z=C}function j(){let C=Z;return C>=s.maxTextures&&Je("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),Z+=1,C}function U(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.mipmapsAutoUpdate),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function ve(C,S){let W=n.get(C);if(C.isVideoTexture&&_e(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&W.__version!==C.version){let ye=C.image;if(ye===null)Je("WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)Je("WebGLRenderer: Texture marked for update but image is incomplete");else{lt(W,C,S);return}}else C.isExternalTexture&&(W.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+S)}function ue(C,S){let W=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){lt(W,C,S);return}else C.isExternalTexture&&(W.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+S)}function de(C,S){let W=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){lt(W,C,S);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+S)}function fe(C,S){let W=n.get(C);if(C.version>0&&W.__version!==C.version){xt(W,C,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+S)}let be={[gi]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[Jr]:i.MIRRORED_REPEAT},Xe={[Ht]:i.NEAREST,[vc]:i.NEAREST_MIPMAP_NEAREST,[hr]:i.NEAREST_MIPMAP_LINEAR,[Vt]:i.LINEAR,[go]:i.LINEAR_MIPMAP_NEAREST,[ri]:i.LINEAR_MIPMAP_LINEAR},Ne={[wm]:i.NEVER,[tf]:i.ALWAYS,[Tm]:i.LESS,[Qh]:i.LEQUAL,[Am]:i.EQUAL,[ef]:i.GEQUAL,[Rm]:i.GREATER,[Cm]:i.NOTEQUAL};function ze(C,S){if(S.type===kn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Vt||S.magFilter===go||S.magFilter===hr||S.magFilter===ri||S.minFilter===Vt||S.minFilter===go||S.minFilter===hr||S.minFilter===ri)&&Je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,be[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,be[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,be[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Xe[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Xe[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Ne[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ht||S.minFilter!==hr&&S.minFilter!==ri||S.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ue(C,S){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",O),D(S));let ye=S.source,he=d.get(ye);he===void 0&&(he={},d.set(ye,he));let re=U(S);if(re!==C.__cacheKey){he[re]===void 0&&(he[re]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),he[re].usedTimes++;let xe=he[C.__cacheKey];xe!==void 0&&(he[C.__cacheKey].usedTimes--,xe.usedTimes===0&&H(S)),C.__cacheKey=re,C.__webglTexture=he[re].texture}return W}function qe(C,S,W){return Math.floor(Math.floor(C/W)/S)}function ht(C,S,W,ye){let re=C.updateRanges;if(re.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,W,ye,S.data);else{re.sort((N,pe)=>N.start-pe.start);let xe=0;for(let N=1;N<re.length;N++){let pe=re[xe],ae=re[N],Ie=pe.start+pe.count,we=qe(ae.start,S.width,4),Pe=qe(pe.start,S.width,4);ae.start<=Ie+1&&we===Pe&&qe(ae.start+ae.count-1,S.width,4)===we?pe.count=Math.max(pe.count,ae.start+ae.count-pe.start):(++xe,re[xe]=ae)}re.length=xe+1;let ie=t.getParameter(i.UNPACK_ROW_LENGTH),oe=t.getParameter(i.UNPACK_SKIP_PIXELS),Re=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let N=0,pe=re.length;N<pe;N++){let ae=re[N],Ie=Math.floor(ae.start/4),we=Math.ceil(ae.count/4),Pe=Ie%S.width,Le=Math.floor(Ie/S.width),Ze=we,X=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Pe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Le),t.texSubImage2D(i.TEXTURE_2D,0,Pe,Le,Ze,X,W,ye,S.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ie),t.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Re)}}function lt(C,S,W){let ye=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ye=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ye=i.TEXTURE_3D);let he=Ue(C,S),re=S.source;t.bindTexture(ye,C.__webglTexture,i.TEXTURE0+W);let xe=n.get(re);if(re.version!==xe.__version||he===!0){if(t.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let X=mt.getPrimaries(mt.workingColorSpace),Ce=S.colorSpace===Mi?null:mt.getPrimaries(S.colorSpace),et=S.colorSpace===Mi||X===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let oe=v(S.image,!1,s.maxTextureSize);oe=ge(S,oe);let Re=r.convert(S.format,S.colorSpace),N=r.convert(S.type),pe=w(S.internalFormat,Re,N,S.normalized,S.colorSpace,S.isVideoTexture);ze(ye,S);let ae,Ie=S.mipmaps,we=S.isVideoTexture!==!0,Pe=xe.__version===void 0||he===!0,Le=re.dataReady,Ze=b(S,oe);if(S.isDepthTexture)pe=_(S.format===gs,S.type),Pe&&(we?t.texStorage2D(i.TEXTURE_2D,1,pe,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,pe,oe.width,oe.height,0,Re,N,null));else if(S.isDataTexture)if(Ie.length>0){we&&Pe&&t.texStorage2D(i.TEXTURE_2D,Ze,pe,Ie[0].width,Ie[0].height);for(let X=0,Ce=Ie.length;X<Ce;X++)ae=Ie[X],we?Le&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,ae.width,ae.height,Re,N,ae.data):t.texImage2D(i.TEXTURE_2D,X,pe,ae.width,ae.height,0,Re,N,ae.data);S.generateMipmaps=!1}else we?(Pe&&t.texStorage2D(i.TEXTURE_2D,Ze,pe,oe.width,oe.height),Le&&ht(S,oe,Re,N)):t.texImage2D(i.TEXTURE_2D,0,pe,oe.width,oe.height,0,Re,N,oe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){we&&Pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ze,pe,Ie[0].width,Ie[0].height,oe.depth);for(let X=0,Ce=Ie.length;X<Ce;X++)if(ae=Ie[X],S.format!==vn)if(Re!==null)if(we){if(Le)if(S.layerUpdates.size>0){let et=ff(ae.width,ae.height,S.format,S.type);for(let Ae of S.layerUpdates){let ct=ae.data.subarray(Ae*et/ae.data.BYTES_PER_ELEMENT,(Ae+1)*et/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,Ae,ae.width,ae.height,1,Re,ct)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,ae.width,ae.height,oe.depth,Re,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,pe,ae.width,ae.height,oe.depth,0,ae.data,0,0);else Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?Le&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,ae.width,ae.height,oe.depth,Re,N,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,X,pe,ae.width,ae.height,oe.depth,0,Re,N,ae.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{we&&Pe&&t.texStorage2D(i.TEXTURE_2D,Ze,pe,Ie[0].width,Ie[0].height);for(let X=0,Ce=Ie.length;X<Ce;X++)ae=Ie[X],S.format!==vn?Re!==null?we?Le&&t.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,ae.width,ae.height,Re,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,X,pe,ae.width,ae.height,0,ae.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?Le&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,ae.width,ae.height,Re,N,ae.data):t.texImage2D(i.TEXTURE_2D,X,pe,ae.width,ae.height,0,Re,N,ae.data)}else if(S.isDataArrayTexture)if(we){if(Pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ze,pe,oe.width,oe.height,oe.depth),Le)if(S.layerUpdates.size>0){let X=ff(oe.width,oe.height,S.format,S.type);for(let Ce of S.layerUpdates){let et=oe.data.subarray(Ce*X/oe.data.BYTES_PER_ELEMENT,(Ce+1)*X/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ce,oe.width,oe.height,1,Re,N,et)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Re,N,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,pe,oe.width,oe.height,oe.depth,0,Re,N,oe.data);else if(S.isData3DTexture)we?(Pe&&t.texStorage3D(i.TEXTURE_3D,Ze,pe,oe.width,oe.height,oe.depth),Le&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Re,N,oe.data)):t.texImage3D(i.TEXTURE_3D,0,pe,oe.width,oe.height,oe.depth,0,Re,N,oe.data);else if(S.isFramebufferTexture){if(Pe)if(we)t.texStorage2D(i.TEXTURE_2D,Ze,pe,oe.width,oe.height);else{let X=oe.width,Ce=oe.height;for(let et=0;et<Ze;et++)t.texImage2D(i.TEXTURE_2D,et,pe,X,Ce,0,Re,N,null),X>>=1,Ce>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let X=i.canvas;if(X.hasAttribute("layoutsubtree")||X.setAttribute("layoutsubtree","true"),oe.parentNode!==X){X.appendChild(oe),f.add(S),X.onpaint=Ce=>{let et=Ce.changedElements;for(let Ae of f)et.includes(Ae.image)&&(Ae.needsUpdate=!0)},X.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,oe);else{let et=i.RGBA,Ae=i.RGBA,ct=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,et,Ae,ct,oe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(we&&Pe){let X=Ee(Ie[0]);t.texStorage2D(i.TEXTURE_2D,Ze,pe,X.width,X.height)}for(let X=0,Ce=Ie.length;X<Ce;X++)ae=Ie[X],we?Le&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,Re,N,ae):t.texImage2D(i.TEXTURE_2D,X,pe,Re,N,ae);S.generateMipmaps=!1}else if(we){if(Pe){let X=Ee(oe);t.texStorage2D(i.TEXTURE_2D,Ze,pe,X.width,X.height)}Le&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Re,N,oe)}else t.texImage2D(i.TEXTURE_2D,0,pe,Re,N,oe);M(S)&&S.mipmapsAutoUpdate===!0&&y(ye),xe.__version=re.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function xt(C,S,W){if(S.image.length!==6)return;let ye=Ue(C,S),he=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+W);let re=n.get(he);if(he.version!==re.__version||ye===!0){t.activeTexture(i.TEXTURE0+W);let xe=mt.getPrimaries(mt.workingColorSpace),ie=S.colorSpace===Mi?null:mt.getPrimaries(S.colorSpace),oe=S.colorSpace===Mi||xe===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let Re=S.isCompressedTexture||S.image[0].isCompressedTexture,N=S.image[0]&&S.image[0].isDataTexture,pe=[];for(let Ae=0;Ae<6;Ae++)!Re&&!N?pe[Ae]=v(S.image[Ae],!0,s.maxCubemapSize):pe[Ae]=N?S.image[Ae].image:S.image[Ae],pe[Ae]=ge(S,pe[Ae]);let ae=pe[0],Ie=r.convert(S.format,S.colorSpace),we=r.convert(S.type),Pe=w(S.internalFormat,Ie,we,S.normalized,S.colorSpace),Le=S.isVideoTexture!==!0,Ze=re.__version===void 0||ye===!0,X=he.dataReady,Ce=b(S,ae);ze(i.TEXTURE_CUBE_MAP,S);let et;if(S.isDepthTexture){if(Pe=_(S.format===gs,S.type),Ze)if(Le)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Pe,ae.width,ae.height);else for(let Ae=0;Ae<6;Ae++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Pe,ae.width,ae.height,0,Ie,we,null)}else if(Re){Le&&Ze&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,Pe,ae.width,ae.height);for(let Ae=0;Ae<6;Ae++){et=pe[Ae].mipmaps;for(let ct=0;ct<et.length;ct++){let Nt=et[ct];S.format!==vn?Ie!==null?Le?X&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,ct,0,0,Nt.width,Nt.height,Ie,Nt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,ct,Pe,Nt.width,Nt.height,0,Nt.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,ct,0,0,Nt.width,Nt.height,Ie,we,Nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,ct,Pe,Nt.width,Nt.height,0,Ie,we,Nt.data)}}}else{if(et=S.mipmaps,Le&&Ze){et.length>0&&Ce++;let Ae=Ee(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,Pe,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(N){Le?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,pe[Ae].width,pe[Ae].height,Ie,we,pe[Ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Pe,pe[Ae].width,pe[Ae].height,0,Ie,we,pe[Ae].data);for(let ct=0;ct<et.length;ct++){let Qt=et[ct].image[Ae].image;Le?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,ct+1,0,0,Qt.width,Qt.height,Ie,we,Qt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,ct+1,Pe,Qt.width,Qt.height,0,Ie,we,Qt.data)}}else{Le?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Ie,we,pe[Ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Pe,Ie,we,pe[Ae]);for(let ct=0;ct<et.length;ct++){let Nt=et[ct];Le?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,ct+1,0,0,Ie,we,Nt.image[Ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,ct+1,Pe,Ie,we,Nt.image[Ae])}}}M(S)&&S.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),re.__version=he.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function rt(C,S,W,ye,he,re){let xe=r.convert(W.format,W.colorSpace),ie=r.convert(W.type),oe=w(W.internalFormat,xe,ie,W.normalized,W.colorSpace),Re=n.get(S),N=n.get(W);if(N.__renderTarget=S,!Re.__hasExternalTextures){let pe=Math.max(1,S.width>>re),ae=Math.max(1,S.height>>re);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,re,oe,pe,ae,S.depth,0,xe,ie,null):t.texImage2D(he,re,oe,pe,ae,0,xe,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),q(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,he,N.__webglTexture,0,Se(S)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ye,he,N.__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(C,S,W){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){let ye=S.depthTexture,he=ye&&ye.isDepthTexture?ye.type:null,re=_(S.stencilBuffer,he),xe=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;q(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se(S),re,S.width,S.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se(S),re,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,re,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,C)}else{let ye=S.textures;for(let he=0;he<ye.length;he++){let re=ye[he],xe=r.convert(re.format,re.colorSpace),ie=r.convert(re.type),oe=w(re.internalFormat,xe,ie,re.normalized,re.colorSpace);q(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se(S),oe,S.width,S.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se(S),oe,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,oe,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function le(C,S,W){let ye=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let he=n.get(S.depthTexture);he.__renderTarget=S;let re=ye?S.depthTexture.image[0]:S.depthTexture.image;(!he.__webglTexture||re.width!==S.width||re.height!==S.height)&&(re.width=S.width,re.height=S.height,S.depthTexture.needsUpdate=!0),ye?fe(S.depthTexture,0):ve(S.depthTexture,0);let xe=he.__webglTexture,ie=Se(S),oe=ye?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,Re=S.depthTexture.format===gs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===rs)q(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Re,oe,xe,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,Re,oe,xe,0);else if(S.depthTexture.format===gs)q(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Re,oe,xe,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,Re,oe,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function je(C){let S=n.get(C),W=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let ye=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ye){let he=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ye.removeEventListener("dispose",he)};ye.addEventListener("dispose",he),S.__depthDisposeCallback=he}S.__boundDepthTexture=ye}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(W)for(let ye=0;ye<6;ye++)le(S.__webglFramebuffer[ye],C,ye);else C.texture.mipmaps.length>0?le(S.__webglFramebuffer[0],C,0):le(S.__webglFramebuffer,C,0);else if(W){S.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ye]),S.__webglDepthbuffer[ye]===void 0)S.__webglDepthbuffer[ye]=i.createRenderbuffer(),Pt(S.__webglDepthbuffer[ye],C,!1);else{let he=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=S.__webglDepthbuffer[ye];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,re)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Pt(S.__webglDepthbuffer,C,!1);else{let he=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,re)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(C,S,W){let ye=n.get(C);S!==void 0&&rt(ye.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&je(C)}function Me(C){let S=C.texture,W=n.get(C),ye=n.get(S);C.addEventListener("dispose",V),D(C);let he=C.textures,re=C.isWebGLCubeRenderTarget===!0,xe=he.length>1;if(xe||(ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture()),ye.__version=S.version,o.memory.textures++),re){W.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(S.mipmaps.length>0){W.__webglFramebuffer[ie]=[];for(let oe=0;oe<S.mipmaps.length;oe++)W.__webglFramebuffer[ie][oe]=i.createFramebuffer()}else W.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(S.mipmaps.length>0){W.__webglFramebuffer=[];for(let ie=0;ie<S.mipmaps.length;ie++)W.__webglFramebuffer[ie]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(xe)for(let ie=0,oe=he.length;ie<oe;ie++){let Re=n.get(he[ie]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&q(C)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ie=0;ie<he.length;ie++){let oe=he[ie];W.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[ie]);let Re=r.convert(oe.format,oe.colorSpace),N=r.convert(oe.type),pe=w(oe.internalFormat,Re,N,oe.normalized,oe.colorSpace,C.isXRRenderTarget===!0),ae=Se(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,pe,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,W.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Pt(W.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,ye.__webglTexture),ze(i.TEXTURE_CUBE_MAP,S);for(let ie=0;ie<6;ie++)if(S.mipmaps.length>0)for(let oe=0;oe<S.mipmaps.length;oe++)rt(W.__webglFramebuffer[ie][oe],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe);else rt(W.__webglFramebuffer[ie],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);M(S)?y(i.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(xe){for(let ie=0,oe=he.length;ie<oe;ie++){let Re=he[ie],N=n.get(Re),pe=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,N.__webglTexture),ze(pe,Re),rt(W.__webglFramebuffer,C,Re,i.COLOR_ATTACHMENT0+ie,pe,0),M(Re)&&y(pe)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ie=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,ye.__webglTexture),ze(ie,S),S.mipmaps.length>0)for(let oe=0;oe<S.mipmaps.length;oe++)rt(W.__webglFramebuffer[oe],C,S,i.COLOR_ATTACHMENT0,ie,oe);else rt(W.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,ie,0);M(S)?y(ie):S.mipmaps.length>0&&i.texParameteri(ie,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&je(C)}function T(C){let S=C.textures;for(let W=0,ye=S.length;W<ye;W++){let he=S[W];if(M(he)&&he.mipmapsAutoUpdate===!0){let re=E(C),xe=n.get(he).__webglTexture;t.bindTexture(re,xe),y(re),t.unbindTexture()}}}let ee=[];function ne(C){if(C.samples>0){if(q(C)===!1){let S=C.textures,W=C.width,ye=C.height,he=i.COLOR_BUFFER_BIT,re=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(C),ie=S.length>1;if(ie)for(let Re=0;Re<S.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Re=0;Re<S.length;Re++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[Re]);let N=n.get(S[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,N,0)}i.blitFramebuffer(0,0,W,ye,0,0,W,ye,he,i.NEAREST),l===!0&&(ee.length=0,ee.push(i.COLOR_ATTACHMENT0+Re),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&ee.push(re),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let Re=0;Re<S.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,xe.__webglColorRenderbuffer[Re]);let N=n.get(S[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,N,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Se(C){return Math.min(s.maxSamples,C.samples)}function q(C){let S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function _e(C){let S=o.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function ge(C,S){let W=C.colorSpace,ye=C.format,he=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||W!==Bn&&W!==Mi&&(mt.getTransfer(W)===Rt?(ye!==vn||he!==Pn)&&Je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",W)),S}function Ee(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=k,this.getTextureUnits=J,this.setTextureUnits=ce,this.setTexture2D=ve,this.setTexture2DArray=ue,this.setTexture3D=de,this.setTextureCube=fe,this.rebindTextures=Qe,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=T,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=q,this.dispose=G}function Fb(i,e){function t(n,s=Mi){let r,o=mt.getTransfer(s);if(n===Pn)return i.UNSIGNED_BYTE;if(n===Sc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===bc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$h)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===qh)return i.BYTE;if(n===Yh)return i.SHORT;if(n===xo)return i.UNSIGNED_SHORT;if(n===Mc)return i.INT;if(n===vi)return i.UNSIGNED_INT;if(n===kn)return i.FLOAT;if(n===Xn)return i.HALF_FLOAT;if(n===Kh)return i.ALPHA;if(n===Jh)return i.RGB;if(n===vn)return i.RGBA;if(n===rs)return i.DEPTH_COMPONENT;if(n===gs)return i.DEPTH_STENCIL;if(n===Ec)return i.RED;if(n===wc)return i.RED_INTEGER;if(n===Hs)return i.RG;if(n===Tc)return i.RG_INTEGER;if(n===Ac)return i.RGBA_INTEGER;if(n===Ia||n===La||n===Da||n===Na)if(o===Rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rc||n===Cc||n===Pc||n===Ic)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ic)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lc||n===Dc||n===Nc||n===Oc||n===Uc||n===Oa||n===Fc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Lc||n===Dc)return o===Rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Nc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Oc)return r.COMPRESSED_R11_EAC;if(n===Uc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Oa)return r.COMPRESSED_RG11_EAC;if(n===Fc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Bc||n===zc||n===kc||n===Hc||n===Vc||n===Gc||n===Wc||n===Xc||n===qc||n===Yc||n===$c||n===Zc||n===Kc||n===Jc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===kc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$c)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jc||n===Qc||n===eu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===jc)return o===Rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===eu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tu||n===nu||n===Ua||n===iu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===tu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===nu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ua)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===iu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Bb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zb=`
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

}`,Mf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new fa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new mn({vertexShader:Bb,fragmentShader:zb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new ni(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sf=class extends xi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,p=null,x=typeof XRWebGLBinding<"u",g=new Mf,m={},v=t.getContextAttributes(),M=null,y=null,E=[],w=[],_=new ke,b=null,D=null,L=new on;L.viewport=new Mt;let O=new on;O.viewport=new Mt;let V=[L,O],B=new mc,I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let ve=E[U];return ve===void 0&&(ve=new io,E[U]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(U){let ve=E[U];return ve===void 0&&(ve=new io,E[U]=ve),ve.getGripSpace()},this.getHand=function(U){let ve=E[U];return ve===void 0&&(ve=new io,E[U]=ve),ve.getHandSpace()};function Y(U){let ve=w.indexOf(U.inputSource);if(ve===-1)return;let ue=E[ve];ue!==void 0&&(ue.update(U.inputSource,U.frame,c||o),ue.dispatchEvent({type:U.type,data:U.inputSource}))}function H(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",me);for(let U=0;U<E.length;U++){let ve=w[U];ve!==null&&(w[U]=null,E[U].disconnect(ve))}I=null,G=null,g.reset();for(let U in m)delete m[U];if(e.setRenderTarget(M),d=null,h=null,f=null,s=null,y=null,j.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(_.width,_.height,!1),D!==null){let U=D.camera;U.fov=D.fov,U.zoom=D.zoom,U.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&Je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,n.isPresenting===!0&&Je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",H),s.addEventListener("inputsourceschange",me),v.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,de=null,fe=null;v.depth&&(fe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=v.stencil?gs:rs,de=v.stencil?fr:vi);let be={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(be),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new nn(h.textureWidth,h.textureHeight,{format:vn,type:Pn,depthTexture:new cs(h.textureWidth,h.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ue={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new nn(d.framebufferWidth,d.framebufferHeight,{format:vn,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),j.setContext(s),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function me(U){for(let ve=0;ve<U.removed.length;ve++){let ue=U.removed[ve],de=w.indexOf(ue);de>=0&&(w[de]=null,E[de].disconnect(ue))}for(let ve=0;ve<U.added.length;ve++){let ue=U.added[ve],de=w.indexOf(ue);if(de===-1){for(let be=0;be<E.length;be++)if(be>=w.length){w.push(ue),de=be;break}else if(w[be]===null){w[be]=ue,de=be;break}if(de===-1)break}let fe=E[de];fe&&fe.connect(ue)}}function Z(U,ve){ve===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(ve.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;let ve=U.near,ue=U.far;g.texture!==null&&(g.depthNear>0&&(ve=g.depthNear),g.depthFar>0&&(ue=g.depthFar)),B.near=O.near=L.near=ve,B.far=O.far=L.far=ue,(I!==B.near||G!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),I=B.near,G=B.far),B.layers.mask=U.layers.mask|6,L.layers.mask=B.layers.mask&-5,O.layers.mask=B.layers.mask&-3;let de=U.parent,fe=B.cameras;Z(B,de);for(let be=0;be<fe.length;be++)Z(fe[be],de);B.projectionMatrix.copy(L.projectionMatrix),B.projectionMatrixInverse.copy(L.projectionMatrixInverse),D===null&&U.isPerspectiveCamera&&(D={camera:U,fov:U.fov,zoom:U.zoom}),k(U,B,de)};function k(U,ve,ue){ue===null?U.matrix.copy(ve.matrixWorld):(U.matrix.copy(ue.matrixWorld),U.matrix.invert(),U.matrix.multiply(ve.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(ve.projectionMatrix),U.projectionMatrixInverse.copy(ve.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=or*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(U){l=U,h!==null&&(h.fixedFoveation=U),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=U)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(U){return m[U]};let J=null;function ce(U,ve){if(u=ve.getViewerPose(c||o),p=ve,u!==null){let ue=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let de=!1;ue.length!==B.cameras.length&&(B.cameras.length=0,de=!0);for(let Ne=0;Ne<ue.length;Ne++){let ze=ue[Ne],Ue=null;if(d!==null)Ue=d.getViewport(ze);else{let ht=f.getViewSubImage(h,ze);Ue=ht.viewport,Ne===0&&(e.setRenderTargetTextures(y,ht.colorTexture,ht.depthStencilTexture),e.setRenderTarget(y))}let qe=V[Ne];qe===void 0&&(qe=new on,qe.layers.enable(Ne),qe.viewport=new Mt,V[Ne]=qe),qe.matrix.fromArray(ze.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(ze.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),Ne===0&&(B.matrix.copy(qe.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),de===!0&&B.cameras.push(qe)}let fe=s.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let Ne=f.getDepthInformation(ue[0]);Ne&&Ne.isValid&&Ne.texture&&g.init(Ne,s.renderState)}if(fe&&fe.includes("camera-access")&&x){e.state.unbindTexture(),f=n.getBinding();for(let Ne=0;Ne<ue.length;Ne++){let ze=ue[Ne].camera;if(ze){let Ue=m[ze];Ue||(Ue=new fa,m[ze]=Ue);let qe=f.getCameraImage(ze);Ue.sourceTexture=qe}}}}for(let ue=0;ue<E.length;ue++){let de=w[ue],fe=E[ue];de!==null&&fe!==void 0&&fe.update(de,ve,c||o)}J&&J(U,ve),ve.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ve}),p=null}let j=new rg;j.setAnimationLoop(ce),this.setAnimationLoop=function(U){J=U},this.dispose=function(){}}},kb=new tt,mg=new ot;mg.set(-1,0,0,0,1,0,0,0,1);function Hb(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,cf(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,v,M,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),h(g,m),m.isMeshPhysicalMaterial&&d(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,v,M):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===yn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===yn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let v=e.get(m),M=v.envMap,y=v.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(kb.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(mg),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=M*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,v){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===yn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let v=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vb(i,e,t,n){let s={},r={};function o(v,M){let y=M.program;n.uniformBlockBinding(v,y,s[v.id])}function a(v,M){let y=s[v.id];y===void 0&&(p(v),y=l(v),s[v.id]=y,v.addEventListener("dispose",g));let E=M.program;n.updateUBOMapping(v,E);let w=e.render.frame;r[v.id]!==w&&(c(v),r[v.id]=w)}function l(v){let M=i.createBuffer(),y=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,y,E),i.bindBuffer(i.UNIFORM_BUFFER,null),M}function c(v){let M=s[v.id],y=v.uniforms,E=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let w=0,_=y.length;w<_;w++){let b=y[w];if(Array.isArray(b))for(let D=0,L=b.length;D<L;D++)u(b[D],w,D,E);else u(b,w,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(v,M,y,E){if(h(v,M,y,E)===!0){let w=v.__offset,_=v.value;if(Array.isArray(_)){let b=0;for(let D=0;D<_.length;D++){let L=_[D],O=x(L,!0);f(L,v.__data,b),b+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,v.__data)}}function f(v,M,y){typeof v=="number"||typeof v=="boolean"?M[y]=v:v.isMatrix3?(M[y]=v.elements[0],M[y+1]=v.elements[1],M[y+2]=v.elements[2],M[y+3]=0,M[y+4]=v.elements[3],M[y+5]=v.elements[4],M[y+6]=v.elements[5],M[y+7]=0,M[y+8]=v.elements[6],M[y+9]=v.elements[7],M[y+10]=v.elements[8],M[y+11]=0):ArrayBuffer.isView(v)?M.set(v.subarray(0,M.length-y),y):v.toArray(M,y)}function h(v,M,y,E){let w=v.value,_=M+"_"+y;if(Array.isArray(w)){E[_]===void 0&&(E[_]=[]);let b=E[_],D=!1;for(let L=0;L<w.length;L++)d(w[L],b,L)===!0&&(D=!0);return D}return d(w,E,_)}function d(v,M,y){if(M[y]===void 0)return typeof v=="number"||typeof v=="boolean"?M[y]=v:ArrayBuffer.isView(v)?M[y]=v.slice():M[y]=v.clone(),!0;{let E=M[y];if(typeof v=="number"||typeof v=="boolean"){if(E!==v)return M[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(E.equals(v)===!1)return E.copy(v),!0}}return!1}function p(v){let M=v.uniforms,y=0,E=16;for(let _=0,b=M.length;_<b;_++){let D=Array.isArray(M[_])?M[_]:[M[_]];for(let L=0,O=D.length;L<O;L++){let V=D[L],B=Array.isArray(V.value)?V.value:[V.value],I=Array.isArray(M[_])||Array.isArray(V.value),G=y;for(let H=0,me=B.length;H<me;H++){let Z=B[H],k=x(Z,I),J=y%E,ce=J%k.boundary,j=J+ce;y+=ce,j!==0&&E-j<k.storage&&(y+=E-j),H===0&&(G=y),y+=k.storage}let Y=V.type==="int"?Int32Array:V.type==="uint"?Uint32Array:Float32Array;V.__data=new Y((y-G)/Float32Array.BYTES_PER_ELEMENT),V.__offset=G}}let w=y%E;return w>0&&(y+=E-w),v.__size=y,v.__cache={},this}function x(v,M){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Je("WebGLRenderer: Unsupported uniform value type.",v),M===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function g(v){let M=v.target;M.removeEventListener("dispose",g),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function m(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:o,update:a,dispose:m}}var Gb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bi=null;function Wb(){return Bi===null&&(Bi=new oo(Gb,16,16,Hs,Xn),Bi.name="DFG_LUT",Bi.minFilter=Vt,Bi.magFilter=Vt,Bi.wrapS=ei,Bi.wrapT=ei,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}var au=class{constructor(e={}){let{canvas:t=Pm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Pn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=d,g=new Set([Ac,Tc,wc]),m=new Set([Pn,vi,xo,fr,Sc,bc]),v=new Uint32Array(4),M=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},E=null,w=null,_=[],b=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,O=!1,V=null,B=null,I=null,G=null;this._outputColorSpace=St;let Y=0,H=0,me=null,Z=-1,k=null,J=new Mt,ce=new Mt,j=null,U=new We(0),ve=0,ue=t.width,de=t.height,fe=1,be=null,Xe=null,Ne=new Mt(0,0,ue,de),ze=new Mt(0,0,ue,de),Ue=!1,qe=new Ds,ht=new nc,lt=!1,xt=!1,rt=new tt,Pt=new P,le=new Mt,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qe=!1;function Me(){return me===null?fe:1}let T=n;function ee(A,F){return t.getContext(A,F)}let ne,Se,q,_e,ge,Ee,C,S,W,ye,he,re,xe,ie,oe,Re,N,pe,ae,Ie,we,Pe,Le;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",et,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),T===null){let F="webgl2";if(T=ee(F,A),T===null)throw ee(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ze()}catch(A){throw t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),it("WebGLRenderer: "+A.message),A}function Ze(){ne=new tS(T),ne.init(),we=new Fb(T,ne),Se=new WM(T,ne,e,we),q=new Ob(T,ne),Se.reversedDepthBuffer&&h&&q.buffers.depth.setReversed(!0),B=T.createFramebuffer(),I=T.createFramebuffer(),G=T.createFramebuffer(),_e=new sS(T),ge=new Mb,Ee=new Ub(T,ne,q,ge,Se,we,_e),C=new eS(L),S=new oy(T),Pe=new VM(T,S),W=new nS(T,S,_e,Pe),ye=new oS(T,W,S,Pe,_e),pe=new rS(T,Se,Ee),oe=new XM(ge),he=new vb(L,C,ne,Se,Pe,oe),re=new Hb(L,ge),xe=new bb,ie=new Cb(ne),N=new HM(L,C,q,ye,p,l),Re=new Nb(L,ye,Se),Le=new Vb(T,_e,Se,q),ae=new GM(T,ne,_e),Ie=new iS(T,ne,_e),_e.programs=he.programs,L.capabilities=Se,L.extensions=ne,L.properties=ge,L.renderLists=xe,L.shadowMap=Re,L.state=q,L.info=_e}x!==Pn&&(D=new lS(x,t.width,t.height,a,s,r));let X=new Sf(L,T);this.xr=X,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let A=ne.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ne.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(A){A!==void 0&&(fe=A,this.setSize(ue,de,!1))},this.getSize=function(A){return A.set(ue,de)},this.setSize=function(A,F,se=!0){if(X.isPresenting){Je("WebGLRenderer: Can't change size while VR device is presenting.");return}ue=A,de=F,t.width=Math.floor(A*fe),t.height=Math.floor(F*fe),se===!0&&(t.style.width=A+"px",t.style.height=F+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(ue*fe,de*fe).floor()},this.setDrawingBufferSize=function(A,F,se){ue=A,de=F,fe=se,t.width=Math.floor(A*se),t.height=Math.floor(F*se),this.setViewport(0,0,A,F)},this.setEffects=function(A){if(x===Pn){it("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let F=0;F<A.length;F++)if(A[F].isOutputPass===!0){Je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(J)},this.getViewport=function(A){return A.copy(Ne)},this.setViewport=function(A,F,se,Q){A.isVector4?Ne.set(A.x,A.y,A.z,A.w):Ne.set(A,F,se,Q),q.viewport(J.copy(Ne).multiplyScalar(Me()).round())},this.getScissor=function(A){return A.copy(ze)},this.setScissor=function(A,F,se,Q){A.isVector4?ze.set(A.x,A.y,A.z,A.w):ze.set(A,F,se,Q),q.scissor(ce.copy(ze).multiplyScalar(Me()).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(A){q.setScissorTest(Ue=A)},this.setOpaqueSort=function(A){be=A},this.setTransparentSort=function(A){Xe=A},this.getClearColor=function(A){return A.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(A=!0,F=!0,se=!0){let Q=0;if(A){let te=!1;if(me!==null){let Oe=me.texture.format;te=g.has(Oe)}if(te){let Oe=me.texture.type,Ve=m.has(Oe),De=N.getClearColor(),Be=N.getClearAlpha(),$e=De.r,nt=De.g,_t=De.b;Ve?(v[0]=$e,v[1]=nt,v[2]=_t,v[3]=Be,T.clearBufferuiv(T.COLOR,0,v)):(M[0]=$e,M[1]=nt,M[2]=_t,M[3]=Be,T.clearBufferiv(T.COLOR,0,M))}else Q|=T.COLOR_BUFFER_BIT}F&&(Q|=T.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(Q|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&T.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),V=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),N.dispose(),xe.dispose(),ie.dispose(),Ee.dispose(),ge.dispose(),C.dispose(),ye.dispose(),W.dispose(),Pe.dispose(),Le.dispose(),he.dispose(),X.dispose(),X.removeEventListener("sessionstart",ci),X.removeEventListener("sessionend",Ss),wi.stop()};function Ce(A){A.preventDefault(),ea("WebGLRenderer: Context Lost."),O=!0}function et(){ea("WebGLRenderer: Context Restored."),O=!1;let A=_e.autoReset,F=Re.enabled,se=Re.autoUpdate,Q=Re.needsUpdate,te=Re.type;Ze(),_e.autoReset=A,Re.enabled=F,Re.autoUpdate=se,Re.needsUpdate=Q,Re.type=te}function Ae(A){it("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ct(A){let F=A.target;F.removeEventListener("dispose",ct),Nt(F)}function Nt(A){Qt(A),ge.remove(A)}function Qt(A){let F=ge.get(A).programs;F!==void 0&&(F.forEach(function(se){he.releaseProgram(se)}),A.isShaderMaterial&&he.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,se,Q,te,Oe){F===null&&(F=je);let Ve=te.isMesh&&te.matrixWorld.determinantAffine()<0,De=Oo(A,F,se,Q,te);q.setMaterial(Q,Ve);let Be=se.index,$e=1;if(Q.wireframe===!0){if(Be=W.getWireframeAttribute(se),Be===void 0)return;$e=2}let nt=se.drawRange,_t=se.attributes.position,Ye=nt.start*$e,dt=(nt.start+nt.count)*$e;Oe!==null&&(Ye=Math.max(Ye,Oe.start*$e),dt=Math.min(dt,(Oe.start+Oe.count)*$e)),Be!==null?(Ye=Math.max(Ye,0),dt=Math.min(dt,Be.count)):_t!=null&&(Ye=Math.max(Ye,0),dt=Math.min(dt,_t.count));let Wt=dt-Ye;if(Wt<0||Wt===1/0)return;Pe.setup(te,Q,De,se,Be);let It,wt=ae;if(Be!==null&&(It=S.get(Be),wt=Ie,wt.setIndex(It)),te.isMesh)Q.wireframe===!0?(q.setLineWidth(Q.wireframeLinewidth*Me()),wt.setMode(T.LINES)):wt.setMode(T.TRIANGLES);else if(te.isLine){let Yt=Q.linewidth;Yt===void 0&&(Yt=1),q.setLineWidth(Yt*Me()),te.isLineSegments?wt.setMode(T.LINES):te.isLineLoop?wt.setMode(T.LINE_LOOP):wt.setMode(T.LINE_STRIP)}else te.isPoints?wt.setMode(T.POINTS):te.isSprite&&wt.setMode(T.TRIANGLES);if(te.isBatchedMesh)if(ne.get("WEBGL_multi_draw"))wt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{let Yt=te._multiDrawStarts,He=te._multiDrawCounts,Jt=te._multiDrawCount,vt=Be?S.get(Be).bytesPerElement:1,ui=ge.get(Q).currentProgram.getUniforms();for(let rn=0;rn<Jt;rn++)ui.setValue(T,"_gl_DrawID",rn),wt.render(Yt[rn]/vt,He[rn])}else if(te.isInstancedMesh)wt.renderInstances(Ye,Wt,te.count);else if(se.isInstancedBufferGeometry){let Yt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,He=Math.min(se.instanceCount,Yt);wt.renderInstances(Ye,Wt,He)}else wt.render(Ye,Wt)};function Ms(A,F,se,Q){V!==null&&A.isNodeMaterial&&V.setObject(Q,A),lt===!0&&oe.setState(A,se,!1),A.transparent===!0&&A.side===Ct&&A.forceSinglePass===!1?(A.side=yn,A.needsUpdate=!0,bs(A,F,Q),A.side=Kn,A.needsUpdate=!0,bs(A,F,Q),A.side=Ct):bs(A,F,Q)}this.compile=function(A,F,se=null){se===null&&(se=A),V!==null&&V.renderStart(A,F,se),w=ie.get(se),w.init(F),b.push(w),se.traverseVisible(function(te){te.isLight&&te.layers.test(F.layers)&&(w.pushLight(te),te.castShadow&&w.pushShadow(te))}),A!==se&&A.traverseVisible(function(te){te.isLight&&te.layers.test(F.layers)&&(w.pushLight(te),te.castShadow&&w.pushShadow(te))}),w.setupLights(),V!==null&&V.updateLights(w.state.lightsArray),xt=this.localClippingEnabled,lt=oe.init(this.clippingPlanes,xt),lt===!0&&oe.setGlobalState(this.clippingPlanes,F),V!==null&&Re.render(w.state.shadowsArray,se,F);let Q=new Set;return A.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;let Oe=te.material;if(Oe)if(Array.isArray(Oe))for(let Ve=0;Ve<Oe.length;Ve++){let De=Oe[Ve];Ms(De,se,F,te),Q.add(De)}else Ms(Oe,se,F,te),Q.add(Oe)}),w=b.pop(),V!==null&&V.renderEnd(),Q},this.compileAsync=function(A,F,se=null){let Q=this.compile(A,F,se);return new Promise(te=>{function Oe(){if(Q.forEach(function(Ve){let Be=ge.get(Ve).currentProgram;(Be===void 0||Be.isReady())&&Q.delete(Ve)}),Q.size===0){te(A);return}setTimeout(Oe,10)}ne.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let $i=null;function Zi(A){$i&&$i(A)}function ci(){wi.stop()}function Ss(){wi.start()}let wi=new rg;wi.setAnimationLoop(Zi),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(A){$i=A,X.setAnimationLoop(A),A===null?wi.stop():wi.start()},X.addEventListener("sessionstart",ci),X.addEventListener("sessionend",Ss),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;V!==null&&V.renderStart(A,F);let se=X.enabled===!0&&X.isPresenting===!0,Q=D!==null&&(me===null||se)&&D.begin(L,me);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(X.cameraAutoUpdate===!0&&X.updateCamera(F),F=X.getCamera()),A.isScene===!0&&A.onBeforeRender(L,A,F,me),w=ie.get(A,b.length),w.init(F),w.state.textureUnits=Ee.getTextureUnits(),b.push(w),rt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?ht.setFromArrayCamera(F):qe.setFromProjectionMatrix(rt,ti,F.reversedDepth),xt=this.localClippingEnabled,lt=oe.init(this.clippingPlanes,xt),E=xe.get(A,_.length),E.init(),_.push(E),this.info.render.frame++,X.enabled===!0&&X.isPresenting===!0){let Ve=L.xr.getDepthSensingMesh();Ve!==null&&Ti(Ve,F,-1/0,L.sortObjects)}Ti(A,F,0,L.sortObjects),E.finish(),V!==null&&V.updateLights(w.state.lightsArray),L.sortObjects===!0&&E.sort(be,Xe),Qe=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Qe&&N.addToRenderList(E,A),this.info.autoReset===!0&&this.info.reset(),lt===!0&&oe.beginShadows();let te=w.state.shadowsArray;if(Re.render(te,A,F),lt===!0&&oe.endShadows(),(Q&&D.hasRenderPass())===!1){let Ve=E.opaque,De=E.transmissive;if(w.setupLights(),F.isArrayCamera){let Be=F.cameras;if(De.length>0)for(let $e=0,nt=Be.length;$e<nt;$e++){let _t=Be[$e];Lo(Ve,De,A,_t)}Qe&&N.render(A);for(let $e=0,nt=Be.length;$e<nt;$e++){let _t=Be[$e];Sr(E,A,_t,_t.viewport)}}else De.length>0&&Lo(Ve,De,A,F),Qe&&N.render(A),Sr(E,A,F)}me!==null&&H===0&&(Ee.updateMultisampleRenderTarget(me),Ee.updateRenderTargetMipmap(me)),Q&&D.end(L),A.isScene===!0&&A.onAfterRender(L,A,F),Pe.resetDefaultState(),Z=-1,k=null,b.pop(),b.length>0?(w=b[b.length-1],Ee.setTextureUnits(w.state.textureUnits),lt===!0&&oe.setGlobalState(L.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?E=_[_.length-1]:E=null,V!==null&&V.renderEnd()};function Ti(A,F,se,Q){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){let Ve=F.isArrayCamera?ht:qe;if(!A.frustumCulled||A.intersectsFrustum(Ve)){Q&&le.setFromMatrixPosition(A.matrixWorld).applyMatrix4(rt);let De=ye.update(A),Be=A.material;Be.visible&&E.push(A,De,Be,se,le.z,null,F)}}else if(A.isMesh||A.isLine||A.isPoints){let Ve=F.isArrayCamera?ht:qe;if(!A.frustumCulled||A.intersectsFrustum(Ve)){let De=ye.update(A),Be=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),le.copy(A.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),le.copy(De.boundingSphere.center)),le.applyMatrix4(A.matrixWorld).applyMatrix4(rt)),Array.isArray(Be)){let $e=De.groups;for(let nt=0,_t=$e.length;nt<_t;nt++){let Ye=$e[nt],dt=Be[Ye.materialIndex];dt&&dt.visible&&E.push(A,De,dt,se,le.z,Ye,F)}}else Be.visible&&E.push(A,De,Be,se,le.z,null,F)}}}let Oe=A.children;for(let Ve=0,De=Oe.length;Ve<De;Ve++)Ti(Oe[Ve],F,se,Q)}function Sr(A,F,se,Q){let{opaque:te,transmissive:Oe,transparent:Ve}=A;w.setupLightsView(se),lt===!0&&oe.setGlobalState(L.clippingPlanes,se),Q&&q.viewport(J.copy(Q)),te.length>0&&$s(te,F,se),Oe.length>0&&$s(Oe,F,se),Ve.length>0&&$s(Ve,F,se),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function Lo(A,F,se,Q){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Q.id]===void 0){let Ye=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Q.id]=new nn(1,1,{generateMipmaps:!0,type:Ye?Xn:Pn,minFilter:ri,samples:Math.max(4,Se.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:mt.workingColorSpace})}let Oe=w.state.transmissionRenderTarget[Q.id],Ve=Q.viewport||J;Oe.setSize(Ve.z*L.transmissionResolutionScale,Ve.w*L.transmissionResolutionScale);let De=L.getRenderTarget(),Be=L.getActiveCubeFace(),$e=L.getActiveMipmapLevel();L.setRenderTarget(Oe),L.getClearColor(U),ve=L.getClearAlpha(),ve<1&&L.setClearColor(16777215,.5),L.clear(),Qe&&N.render(se);let nt=L.toneMapping;L.toneMapping=si;let _t=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),w.setupLightsView(Q),lt===!0&&oe.setGlobalState(L.clippingPlanes,Q),$s(A,se,Q),Ee.updateMultisampleRenderTarget(Oe),Ee.updateRenderTargetMipmap(Oe),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let dt=0,Wt=F.length;dt<Wt;dt++){let It=F[dt],{object:wt,geometry:Yt,material:He,group:Jt}=It;if(He.side===Ct&&wt.layers.test(Q.layers)){let vt=He.side;He.side=yn,He.needsUpdate=!0,Do(wt,se,Q,Yt,He,Jt),He.side=vt,He.needsUpdate=!0,Ye=!0}}Ye===!0&&(Ee.updateMultisampleRenderTarget(Oe),Ee.updateRenderTargetMipmap(Oe))}L.setRenderTarget(De,Be,$e),L.setClearColor(U,ve),_t!==void 0&&(Q.viewport=_t),L.toneMapping=nt}function $s(A,F,se){let Q=F.isScene===!0?F.overrideMaterial:null;for(let te=0,Oe=A.length;te<Oe;te++){let Ve=A[te],{object:De,geometry:Be,group:$e}=Ve,nt=Ve.material;nt.allowOverride===!0&&Q!==null&&(nt=Q),De.layers.test(se.layers)&&Do(De,F,se,Be,nt,$e)}}function Do(A,F,se,Q,te,Oe){V!==null&&te.isNodeMaterial&&V.setObject(A,te),A.onBeforeRender(L,F,se,Q,te,Oe),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),te.onBeforeRender(L,F,se,Q,A,Oe),te.transparent===!0&&te.side===Ct&&te.forceSinglePass===!1?(te.side=yn,te.needsUpdate=!0,L.renderBufferDirect(se,F,Q,te,A,Oe),te.side=Kn,te.needsUpdate=!0,L.renderBufferDirect(se,F,Q,te,A,Oe),te.side=Ct):L.renderBufferDirect(se,F,Q,te,A,Oe),A.onAfterRender(L,F,se,Q,te,Oe)}function No(A){let F=0;for(let se of A)se.texture!==null&&F++;return F}function bs(A,F,se){F.isScene!==!0&&(F=je);let Q=ge.get(A),te=w.state.lights,Oe=w.state.shadowsArray,Ve=te.state.version,De=he.getParameters(A,te.state,Oe,F,se,w.state.lightProbeGridArray),Be=he.getProgramCacheKey(De),$e=Q.programs;Q.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?F.environment:null,Q.fog=F.fog;let nt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Q.envMap=C.get(A.envMap||Q.environment,nt),Q.envMapRotation=Q.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,$e===void 0&&(A.addEventListener("dispose",ct),$e=new Map,Q.programs=$e,Q.programVariants=new Map);let _t=$e.get(Be);if(_t!==void 0){if(Q.currentProgram===_t&&Q.lightsStateVersion===Ve)return Ji(A,De),_t}else De.uniforms=he.getUniforms(A),V!==null&&A.isNodeMaterial&&V.build(A,se,De),A.onBeforeCompile(De,L),_t=he.acquireProgram(De,Be),$e.set(Be,_t),Q.uniforms=De.uniforms;let Ye=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ye.clippingPlanes=oe.uniform),Ji(A,De),Q.needsLights=Uo(A),Q.lightsStateVersion=Ve,Q.needsLights&&(Ye.ambientLightColor.value=te.state.ambient,Ye.lightProbe.value=te.state.probe,Ye.sunLights.value=te.state.sun,Ye.sunLightShadows.value=te.state.sunShadow,Ye.directionalLights.value=te.state.directional,Ye.directionalLightShadows.value=te.state.directionalShadow,Ye.spotLights.value=te.state.spot,Ye.spotLightShadows.value=te.state.spotShadow,Ye.rectAreaLights.value=te.state.rectArea,Ye.ltc_1.value=te.state.rectAreaLTC1,Ye.ltc_2.value=te.state.rectAreaLTC2,Ye.pointLights.value=te.state.point,Ye.pointLightShadows.value=te.state.pointShadow,Ye.hemisphereLights.value=te.state.hemi,Ye.sunShadowMatrix.value=te.state.sunShadowMatrix,Ye.sunShadowCascade.value=te.state.sunShadowCascade,Ye.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ye.spotLightMatrix.value=te.state.spotLightMatrix,Ye.spotLightMap.value=te.state.spotLightMap,Ye.pointShadowMatrix.value=te.state.pointShadowMatrix),Q.numLightProbeGrids=No(w.state.lightProbeGridArray),Q.currentProgram=_t,Q.uniformsList=null,_t}function nl(A,F,se,Q,te){let Oe=ge.get(A),Ve=Oe.currentProgram.id+","+Q+","+te,De=Oe.programVariants.get(Ve);return De===void 0?(De=bs(A,F,se),Oe.programVariants.set(Ve,De)):(Oe.currentProgram=De,Oe.uniformsList=null,Oe.outputColorSpace=Q,Oe.toneMapping=te),De}function Ki(A){if(A.uniformsList===null){let F=A.currentProgram.getUniforms();A.uniformsList=yo.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function Ji(A,F){let se=ge.get(A);se.outputColorSpace=F.outputColorSpace,se.batching=F.batching,se.batchingColor=F.batchingColor,se.instancing=F.instancing,se.instancingColor=F.instancingColor,se.instancingMorph=F.instancingMorph,se.skinning=F.skinning,se.morphTargets=F.morphTargets,se.morphNormals=F.morphNormals,se.morphColors=F.morphColors,se.morphTargetsCount=F.morphTargetsCount,se.numClippingPlanes=F.numClippingPlanes,se.numIntersection=F.numClipIntersection,se.vertexAlphas=F.vertexAlphas,se.vertexTangents=F.vertexTangents,se.toneMapping=F.toneMapping}function Oo(A,F,se,Q,te){F.isScene!==!0&&(F=je),Ee.resetTextureUnits();let Oe=F.fog,Ve=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?F.environment:null,De=me===null?L.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:mt.workingColorSpace,Be=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,$e=C.get(Q.envMap||Ve,Be),nt=Q.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,_t=!!se.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ye=!!se.morphAttributes.position,dt=!!se.morphAttributes.normal,Wt=!!se.morphAttributes.color,It=si;Q.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(It=L.toneMapping);let wt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Yt=wt!==void 0?wt.length:0,He=ge.get(Q),Jt=w.state.lights;if(lt===!0&&(xt===!0||A!==k)){let Ut=A===k&&Q.id===Z;oe.setState(Q,A,Ut)}let vt=!1,ui=!1;Q.version===He.__version?He.needsLights&&He.lightsStateVersion!==Jt.state.version||te.isBatchedMesh&&He.batching===!1||!te.isBatchedMesh&&He.batching===!0||te.isBatchedMesh&&He.batchingColor===!0&&te._colorsTexture===null||te.isBatchedMesh&&He.batchingColor===!1&&te._colorsTexture!==null||te.isInstancedMesh&&He.instancing===!1||!te.isInstancedMesh&&He.instancing===!0||te.isSkinnedMesh&&He.skinning===!1||!te.isSkinnedMesh&&He.skinning===!0||te.isInstancedMesh&&He.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&He.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&He.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&He.instancingMorph===!1&&te.morphTexture!==null||He.envMap!==$e||Q.fog===!0&&He.fog!==Oe||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==oe.numPlanes||He.numIntersection!==oe.numIntersection)||He.vertexAlphas!==nt||He.vertexTangents!==_t||He.morphTargets!==Ye||He.morphNormals!==dt||He.morphColors!==Wt||He.morphTargetsCount!==Yt||He.numLightProbeGrids!==No(w.state.lightProbeGridArray)?vt=!0:(He.outputColorSpace!==De||He.toneMapping!==It)&&(ui=!0):(vt=!0,He.__version=Q.version);let rn=He.currentProgram;(vt===!0||ui===!0)&&(rn=ui===!0?nl(Q,F,te,De,It):bs(Q,F,te),V&&Q.isNodeMaterial&&V.onUpdateProgram(Q,rn,He));let Zs=!1,en=!1,gn=!1,ut=rn.getUniforms(),jt=He.uniforms;if(q.useProgram(rn.program)&&(Zs=!0,en=!0,gn=!0),Q.id!==Z&&(Z=Q.id,en=!0),Zs||k!==A){q.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ut.setValue(T,"projectionMatrix",A.projectionMatrix),ut.setValue(T,"viewMatrix",A.matrixWorldInverse);let $t=ut.map.cameraPosition;$t!==void 0&&$t.setValue(T,Pt.setFromMatrixPosition(A.matrixWorld)),Se.logarithmicDepthBuffer&&ut.setValue(T,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&ut.setValue(T,"isOrthographic",A.isOrthographicCamera===!0),k!==A&&(k=A,en=!0,gn=!0)}if(He.needsLights&&(Jt.state.sunShadowMap.length>0&&ut.setValue(T,"sunShadowMap",Jt.state.sunShadowMap,Ee),Jt.state.directionalShadowMap.length>0&&ut.setValue(T,"directionalShadowMap",Jt.state.directionalShadowMap,Ee),Jt.state.spotShadowMap.length>0&&ut.setValue(T,"spotShadowMap",Jt.state.spotShadowMap,Ee),Jt.state.pointShadowMap.length>0&&ut.setValue(T,"pointShadowMap",Jt.state.pointShadowMap,Ee)),te.isSkinnedMesh){ut.setOptional(T,te,"bindMatrix"),ut.setOptional(T,te,"bindMatrixInverse");let Ut=te.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),ut.setValue(T,"boneTexture",Ut.boneTexture,Ee))}te.isBatchedMesh&&(ut.setOptional(T,te,"batchingTexture"),ut.setValue(T,"batchingTexture",te._matricesTexture,Ee),ut.setOptional(T,te,"batchingIdTexture"),ut.setValue(T,"batchingIdTexture",te._indirectTexture,Ee),ut.setOptional(T,te,"batchingColorTexture"),te._colorsTexture!==null&&ut.setValue(T,"batchingColorTexture",te._colorsTexture,Ee));let Un=se.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&pe.update(te,se,rn),(en||He.receiveShadow!==te.receiveShadow)&&(He.receiveShadow=te.receiveShadow,ut.setValue(T,"receiveShadow",te.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&F.environment!==null&&(jt.envMapIntensity.value=F.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=Wb()),en){if(ut.setValue(T,"toneMappingExposure",L.toneMappingExposure),He.needsLights&&Xu(jt,gn),Oe&&Q.fog===!0&&re.refreshFogUniforms(jt,Oe),re.refreshMaterialUniforms(jt,Q,fe,de,w.state.transmissionRenderTarget[A.id]),He.needsLights&&He.numLightProbeGrids>0){let Ut=y,$t=0;for(let Yn of w.state.lightProbeGridArray)Yn.texture!==null&&(Ut.textures[$t]=Yn.texture,Ut.min[$t]=Yn.boundingBox.min,Ut.max[$t]=Yn.boundingBox.max,Ut.resolution[$t]=Yn.resolution,$t++);for(let Yn in Ut)Ut[Yn].length=$t;jt.probesSH.value=Ut.textures,jt.probesMin.value=Ut.min,jt.probesMax.value=Ut.max,jt.probesResolution.value=Ut.resolution}yo.upload(T,Ki(He),jt,Ee)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(yo.upload(T,Ki(He),jt,Ee),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&ut.setValue(T,"center",te.center),ut.setValue(T,"modelViewMatrix",te.modelViewMatrix),ut.setValue(T,"normalMatrix",te.normalMatrix),ut.setValue(T,"modelMatrix",te.matrixWorld),Q.uniformsGroups!==void 0){let Ut=Q.uniformsGroups;for(let $t=0,Yn=Ut.length;$t<Yn;$t++){let br=Ut[$t];Le.update(br,rn),Le.bind(br,rn)}}return rn}function Xu(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.sunLights.needsUpdate=F,A.sunLightShadows.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function Uo(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return me},this.setRenderTargetTextures=function(A,F,se){let Q=ge.get(A);Q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),ge.get(A.texture).__webglTexture=F,ge.get(A.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:se,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,F){let se=ge.get(A);se.__webglFramebuffer=F,se.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,se=0){me=A,Y=F,H=se;let Q=null,te=!1,Oe=!1;if(A){let De=ge.get(A);if(De.__useDefaultFramebuffer!==void 0){q.bindFramebuffer(T.FRAMEBUFFER,De.__webglFramebuffer),J.copy(A.viewport),ce.copy(A.scissor),j=A.scissorTest,q.viewport(J),q.scissor(ce),q.setScissorTest(j),Z=-1;return}else if(De.__webglFramebuffer===void 0)Ee.setupRenderTarget(A);else if(De.__hasExternalTextures)Ee.rebindTextures(A,ge.get(A.texture).__webglTexture,ge.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let nt=A.depthTexture;if(De.__boundDepthTexture!==nt){if(nt!==null&&ge.has(nt)&&(A.width!==nt.image.width||A.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ee.setupDepthRenderbuffer(A)}}let Be=A.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Oe=!0);let $e=ge.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($e[F])?Q=$e[F][se]:Q=$e[F],te=!0):A.samples>0&&Ee.useMultisampledRTT(A)===!1?Q=ge.get(A).__webglMultisampledFramebuffer:Array.isArray($e)?Q=$e[se]:Q=$e,J.copy(A.viewport),ce.copy(A.scissor),j=A.scissorTest}else J.copy(Ne).multiplyScalar(fe).floor(),ce.copy(ze).multiplyScalar(fe).floor(),j=Ue;if(se!==0&&(Q=B),q.bindFramebuffer(T.FRAMEBUFFER,Q)&&q.drawBuffers(A,Q),q.viewport(J),q.scissor(ce),q.setScissorTest(j),te){let De=ge.get(A.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+F,De.__webglTexture,se)}else if(Oe){let De=F;for(let Be=0;Be<A.textures.length;Be++){let $e=ge.get(A.textures[Be]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Be,$e.__webglTexture,se,De)}}else if(A!==null&&se!==0){let De=ge.get(A.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,De.__webglTexture,se)}Z=-1};function Fo(A){let F=ge.get(A);return(F.__readFormat!==A.format||F.__readType!==A.type)&&(F.__readFormat=A.format,F.__readType=A.type,F.__formatReadable=Se.textureFormatReadable(A.format),F.__typeReadable=Se.textureTypeReadable(A.type)),F}this.readRenderTargetPixels=function(A,F,se,Q,te,Oe,Ve,De=0){if(!(A&&A.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(Be=Be[Ve],Array.isArray(Be)&&(Be=Be[0])),Be){q.bindFramebuffer(T.FRAMEBUFFER,Be);try{let $e=A.textures[De],nt=$e.format,_t=$e.type;A.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+De);let Ye=Fo($e);if(Ye.__formatReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ye.__typeReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-Q&&se>=0&&se<=A.height-te&&T.readPixels(F,se,Q,te,we.convert(nt),we.convert(_t),Oe)}finally{let $e=me!==null?ge.get(me).__webglFramebuffer:null;q.bindFramebuffer(T.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(A,F,se,Q,te,Oe,Ve,De=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(Be=Be[Ve],Array.isArray(Be)&&(Be=Be[0])),Be)if(F>=0&&F<=A.width-Q&&se>=0&&se<=A.height-te){q.bindFramebuffer(T.FRAMEBUFFER,Be);let $e=A.textures[De],nt=$e.format,_t=$e.type;A.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+De);let Ye=Fo($e);if(Ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let dt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,dt),T.bufferData(T.PIXEL_PACK_BUFFER,Oe.byteLength,T.STREAM_READ),T.readPixels(F,se,Q,te,we.convert(nt),we.convert(_t),0),T.bindBuffer(T.PIXEL_PACK_BUFFER,null);let Wt=me!==null?ge.get(me).__webglFramebuffer:null;q.bindFramebuffer(T.FRAMEBUFFER,Wt);let It=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Lm(T,It,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,dt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Oe),T.bindBuffer(T.PIXEL_PACK_BUFFER,null),T.deleteBuffer(dt),T.deleteSync(It),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,F=null,se=0){let Q=Math.pow(2,-se),te=Math.floor(A.image.width*Q),Oe=Math.floor(A.image.height*Q),Ve=F!==null?F.x:0,De=F!==null?F.y:0;Ee.setTexture2D(A,0),T.copyTexSubImage2D(T.TEXTURE_2D,se,0,0,Ve,De,te,Oe),q.unbindTexture()},this.copyTextureToTexture=function(A,F,se=null,Q=null,te=0,Oe=0){let Ve,De,Be,$e,nt,_t,Ye,dt,Wt,It=A.isCompressedTexture?A.mipmaps[Oe]:A.image;if(se!==null)Ve=se.max.x-se.min.x,De=se.max.y-se.min.y,Be=se.isBox3?se.max.z-se.min.z:1,$e=se.min.x,nt=se.min.y,_t=se.isBox3?se.min.z:0;else{let ut=Math.pow(2,-te);Ve=Math.floor(It.width*ut),De=Math.floor(It.height*ut),A.isDataArrayTexture?Be=It.depth:A.isData3DTexture?Be=Math.floor(It.depth*ut):Be=1,$e=0,nt=0,_t=0}Q!==null?(Ye=Q.x,dt=Q.y,Wt=Q.z):(Ye=0,dt=0,Wt=0);let wt=we.convert(F.format),Yt=we.convert(F.type),He;F.isData3DTexture?(Ee.setTexture3D(F,0),He=T.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Ee.setTexture2DArray(F,0),He=T.TEXTURE_2D_ARRAY):(Ee.setTexture2D(F,0),He=T.TEXTURE_2D),q.activeTexture(T.TEXTURE0),q.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,F.flipY),q.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),q.pixelStorei(T.UNPACK_ALIGNMENT,F.unpackAlignment);let Jt=q.getParameter(T.UNPACK_ROW_LENGTH),vt=q.getParameter(T.UNPACK_IMAGE_HEIGHT),ui=q.getParameter(T.UNPACK_SKIP_PIXELS),rn=q.getParameter(T.UNPACK_SKIP_ROWS),Zs=q.getParameter(T.UNPACK_SKIP_IMAGES);q.pixelStorei(T.UNPACK_ROW_LENGTH,It.width),q.pixelStorei(T.UNPACK_IMAGE_HEIGHT,It.height),q.pixelStorei(T.UNPACK_SKIP_PIXELS,$e),q.pixelStorei(T.UNPACK_SKIP_ROWS,nt),q.pixelStorei(T.UNPACK_SKIP_IMAGES,_t);let en=A.isDataArrayTexture||A.isData3DTexture,gn=F.isDataArrayTexture||F.isData3DTexture;if(A.isDepthTexture){let ut=ge.get(A),jt=ge.get(F),Un=ge.get(ut.__renderTarget),Ut=ge.get(jt.__renderTarget);q.bindFramebuffer(T.READ_FRAMEBUFFER,Un.__webglFramebuffer),q.bindFramebuffer(T.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let $t=0;$t<Be;$t++)en&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ge.get(A).__webglTexture,te,_t+$t),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ge.get(F).__webglTexture,Oe,Wt+$t)),T.blitFramebuffer($e,nt,$e+Ve,nt+De,Ye,dt,Ye+Ve,dt+De,T.DEPTH_BUFFER_BIT,T.NEAREST);q.bindFramebuffer(T.READ_FRAMEBUFFER,null),q.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(te!==0||A.isRenderTargetTexture||ge.has(A)){let ut=ge.get(A),jt=ge.get(F);q.bindFramebuffer(T.READ_FRAMEBUFFER,I),q.bindFramebuffer(T.DRAW_FRAMEBUFFER,G);for(let Un=0;Un<Be;Un++)en?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ut.__webglTexture,te,_t+Un):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ut.__webglTexture,te),gn?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,jt.__webglTexture,Oe,Wt+Un):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,jt.__webglTexture,Oe),te!==0?T.blitFramebuffer($e,nt,$e+Ve,nt+De,Ye,dt,Ye+Ve,dt+De,T.COLOR_BUFFER_BIT,T.NEAREST):gn?T.copyTexSubImage3D(He,Oe,Ye,dt,Wt+Un,$e,nt,Ve,De):T.copyTexSubImage2D(He,Oe,Ye,dt,$e,nt,Ve,De);q.bindFramebuffer(T.READ_FRAMEBUFFER,null),q.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else gn?A.isDataTexture||A.isData3DTexture?T.texSubImage3D(He,Oe,Ye,dt,Wt,Ve,De,Be,wt,Yt,It.data):F.isCompressedArrayTexture?T.compressedTexSubImage3D(He,Oe,Ye,dt,Wt,Ve,De,Be,wt,It.data):T.texSubImage3D(He,Oe,Ye,dt,Wt,Ve,De,Be,wt,Yt,It):A.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,Oe,Ye,dt,Ve,De,wt,Yt,It.data):A.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,Oe,Ye,dt,It.width,It.height,wt,It.data):T.texSubImage2D(T.TEXTURE_2D,Oe,Ye,dt,Ve,De,wt,Yt,It);q.pixelStorei(T.UNPACK_ROW_LENGTH,Jt),q.pixelStorei(T.UNPACK_IMAGE_HEIGHT,vt),q.pixelStorei(T.UNPACK_SKIP_PIXELS,ui),q.pixelStorei(T.UNPACK_SKIP_ROWS,rn),q.pixelStorei(T.UNPACK_SKIP_IMAGES,Zs),Oe===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&T.generateMipmap(He),q.unbindTexture()},this.initRenderTarget=function(A){ge.get(A).__webglFramebuffer===void 0&&Ee.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Ee.setTextureCube(A,0):A.isData3DTexture?Ee.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ee.setTexture2DArray(A,0):Ee.setTexture2D(A,0),q.unbindTexture()},this.resetState=function(){Y=0,H=0,me=null,q.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}};function xg(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Lt;l.morphTargetsRelative=a;let c=0;for(let u=0;u<i.length;++u){let f=i[u],h=0,d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in f.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(f.attributes[p]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in f.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.morphAttributes[p]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0,f=[];for(let h=0;h<i.length;++h){let d=i[h].index;for(let p=0;p<d.count;++p)f.push(d.getX(p)+u);u+=i[h].attributes.position.count}l.setIndex(f)}for(let u in r){let f=gg(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(let u in o){let f=o[u][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<f;++h){let d=[];for(let x=0;x<o[u].length;++x)d.push(o[u][x][h]);let p=gg(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}}return l}function gg(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new Ft(o,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let f=l/t;for(let h=0,d=u.count;h<d;h++)for(let p=0;p<t;p++){let x=u.getComponent(h,p);a.setComponent(h+f,p,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function bf(i,e){if(e===jh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===_o||e===Fa){let t=i.getIndex();if(t===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===_o)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function _g(i){let e=new Map,t=new Map,n=i.clone();return yg(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function yg(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)yg(i.children[n],e.children[n],t)}var uu=class extends Oi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Pf(t)}),this.register(function(t){return new If(t)}),this.register(function(t){return new Lf(t)}),this.register(function(t){return new Hf(t)}),this.register(function(t){return new Vf(t)}),this.register(function(t){return new Gf(t)}),this.register(function(t){return new Nf(t)}),this.register(function(t){return new Of(t)}),this.register(function(t){return new Uf(t)}),this.register(function(t){return new Ff(t)}),this.register(function(t){return new Cf(t)}),this.register(function(t){return new Bf(t)}),this.register(function(t){return new Df(t)}),this.register(function(t){return new kf(t)}),this.register(function(t){return new zf(t)}),this.register(function(t){return new Af(t)}),this.register(function(t){return new hu(t,gt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new hu(t,gt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Wf(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=ps.extractUrlBase(e);o=ps.resolveURL(c,this.path)}else o=ps.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new lo(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Eg){try{o[gt.KHR_BINARY_GLTF]=new Xf(e)}catch(f){s&&s(f);return}r=JSON.parse(o[gt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new jf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let f=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(f){case gt.KHR_MATERIALS_UNLIT:o[f]=new Rf;break;case gt.KHR_DRACO_MESH_COMPRESSION:o[f]=new qf(r,this.dracoLoader);break;case gt.KHR_TEXTURE_TRANSFORM:o[f]=new Yf;break;case gt.KHR_MESH_QUANTIZATION:o[f]=new $f;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Xb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function qt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var gt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Af=class{constructor(e){this.parser=e,this.name=gt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new We(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Bn);let f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Os(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new cr(u),c.distance=f;break;case"spot":c=new Ma(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),zi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Rf=class{constructor(){this.name=gt.KHR_MATERIALS_UNLIT}getMaterialType(){return sn}extendParams(e,t,n){let s=[];e.color=new We(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Bn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,St))}return Promise.all(s)}},Cf=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=qt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Pf=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return qt(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let n=qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ke(r,r)}return Promise.all(s)}},If=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return qt(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let n=qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},Lf=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return qt(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let n=qt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Df=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return qt(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let n=qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Nf=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SHEEN}getMaterialType(e){return qt(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let n=qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new We(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Bn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,St)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Of=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return qt(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let n=qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Uf=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_VOLUME}getMaterialType(e){return qt(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let n=qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new We().setRGB(r[0],r[1],r[2],Bn),Promise.all(s)}},Ff=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IOR}getMaterialType(e){return qt(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let n=qt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Bf=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return qt(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let n=qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new We().setRGB(r[0],r[1],r[2],Bn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,St)),Promise.all(s)}},zf=class{constructor(e){this.parser=e,this.name=gt.EXT_MATERIALS_BUMP}getMaterialType(e){return qt(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let n=qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},kf=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return qt(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let n=qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Hf=class{constructor(e){this.parser=e,this.name=gt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Vf=class{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Gf=class{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},hu=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,f=s.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(d),u,f,h,s.mode,s.filter),d})})}else return null}},Wf=class{constructor(e){this.name=gt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==oi.TRIANGLES&&c.mode!==oi.TRIANGLE_STRIP&&c.mode!==oi.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,d=[];for(let p of f){let x=new tt,g=new P,m=new Xt,v=new P(1,1,1),M=new ar(p.geometry,p.material,h);for(let E=0;E<h;E++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,E),l.SCALE&&v.fromBufferAttribute(l.SCALE,E),M.setMatrixAt(E,x.compose(g,m,v));let y=null;for(let E in l)if(E==="_COLOR_0"){let w=l[E];M.instanceColor=new os(w.array,w.itemSize,w.normalized)}else if(E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"){if(y===null){let _=M.geometry;y=new Lt,y.name=_.name;for(let b in _.attributes)y.setAttribute(b,_.attributes[b]);for(let b in _.morphAttributes)y.morphAttributes[b]=_.morphAttributes[b];_.index!==null&&y.setIndex(_.index),y.morphTargetsRelative=_.morphTargetsRelative;for(let b of _.groups)y.addGroup(b.start,b.count,b.materialIndex);_.boundingBox!==null&&(y.boundingBox=_.boundingBox.clone()),_.boundingSphere!==null&&(y.boundingSphere=_.boundingSphere.clone()),y.drawRange.start=_.drawRange.start,y.drawRange.count=_.drawRange.count,y.userData=Object.assign({},_.userData),M.geometry=y}let w=l[E];y.setAttribute(E,new os(w.array,w.itemSize,w.normalized))}zt.prototype.copy.call(M,p),this.parser.assignFinalMaterial(M),d.push(M)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},Eg="glTF",Wa=12,vg={JSON:1313821514,BIN:5130562},Xf=class{constructor(e){this.name=gt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Wa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Eg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Wa,r=new DataView(e,Wa),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===vg.JSON){let c=new Uint8Array(e,Wa+o,a);this.content=n.decode(c)}else if(l===vg.BIN){let c=Wa+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},qf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=gt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let f=Kf[u]||u.toLowerCase();a[f]=o[u]}for(let u in e.attributes){let f=Kf[u]||u.toLowerCase();if(o[u]!==void 0){let h=n.accessors[e.attributes[u]],d=So[h.componentType];c[f]=d.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(f,h){s.decodeDracoFile(u,function(d){for(let p in d.attributes){let x=d.attributes[p],g=l[p];g!==void 0&&(x.normalized=g)}f(d)},a,c,Bn,h)})})}},Yf=class{constructor(){this.name=gt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},$f=class{constructor(){this.name=gt.KHR_MESH_QUANTIZATION}},fu=class extends Ni{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,f=(n-t)/u,h=f*f,d=h*f,p=e*c,x=p-c,g=-2*d+3*h,m=d-h,v=1-g,M=m-h+f;for(let y=0;y!==a;y++){let E=o[x+y+a],w=o[x+y+l]*u,_=o[p+y+a],b=o[p+y]*u;r[y]=v*E+M*w+g*_+m*b}return r}},qb=new Xt,Zf=class extends fu{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return qb.fromArray(r).normalize().toArray(r),r}},oi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},So={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Mg={9728:Ht,9729:Vt,9984:vc,9985:go,9986:hr,9987:ri},Sg={33071:ei,33648:Jr,10497:gi},Ef={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Kf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Gs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Yb={CUBICSPLINE:void 0,LINEAR:rr,STEP:sr},wf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function $b(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Cn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Kn})),i.DefaultMaterial}function pr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function zi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Zb(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let f=e[c];if(n){let h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):i.attributes.position;o.push(h)}if(s){let h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):i.attributes.normal;a.push(h)}if(r){let h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):i.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],f=c[1],h=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=f),r&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function Kb(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Jb(i){let e,t=i.extensions&&i.extensions[gt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Tf(t.attributes):e=i.indices+":"+Tf(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Tf(i.targets[n]);return e}function Tf(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Jf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function jb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Qb=new tt,jf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Xb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?(this.textureLoader=new ya(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Ea(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new lo(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return pr(r,a,s),zi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[gt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(ps.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Ef[s.type],a=So[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Ft(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Ef[s.type],c=So[s.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,x,g;if(d&&d!==f){let m=Math.floor(h/d),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,M=t.cache.get(v);M||(x=new c(a,m*d,s.count*d/u),M=new Ls(x,d/u),t.cache.add(v,M)),g=new An(M,l,h%d/u,p)}else a===null?x=new c(s.count*l):x=new c(a,h,s.count*l),g=new Ft(x,l,p);if(s.sparse!==void 0){let m=Ef.SCALAR,v=So[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,E=new v(o[1],M,s.sparse.count*m),w=new c(o[2],y,s.sparse.count*l);a!==null&&(g=new Ft(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let _=0,b=E.length;_<b;_++){let D=E[_];if(g.setX(D,w[_*l]),l>=2&&g.setY(D,w[_*l+1]),l>=3&&g.setZ(D,w[_*l+2]),l>=4&&g.setW(D,w[_*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let h=(r.samplers||{})[o.sampler]||{};return u.magFilter=Mg[h.magFilter]||Vt,u.minFilter=Mg[h.minFilter]||ri,u.wrapS=Sg[h.wrapS]||gi,u.wrapT=Sg[h.wrapT]||gi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Ht&&u.minFilter!==Vt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,u;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)u=n.getDependency("bufferView",o.bufferView).then(function(h){return new Promise(function(d,p){t.parse(h,d,p)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(l).then(function(h){return new Promise(function(d,p){let x=d;t.isImageBitmapLoader===!0&&(x=function(g){let m=new an(g);m.needsUpdate=!0,d(m)}),t.load(ps.resolveURL(h,r.path),x,void 0,p)})})}let f=u.then(function(h){return c===!0&&a.revokeObjectURL(l),zi(h,o),h.userData.mimeType=o.mimeType||jb(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=f,f}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[gt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[gt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[gt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new ao,Rn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new as,Rn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Cn}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[gt.KHR_MATERIALS_UNLIT]){let f=s[gt.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,r,t))}else{let f=r.pbrMetallicRoughness||{};if(a.color=new We(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){let h=f.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],Bn),a.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,St)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ct);let u=r.alphaMode||wf.OPAQUE;if(u===wf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===wf.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==sn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ke(1,1),r.normalTexture.scale!==void 0)){let f=r.normalTexture.scale;a.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&o!==sn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==sn){let f=r.emissiveFactor;a.emissive=new We().setRGB(f[0],f[1],f[2],Bn)}return r.emissiveTexture!==void 0&&o!==sn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,St)),Promise.all(c).then(function(){let f=new o(a);return r.name&&(f.name=r.name),zi(f,r),t.associations.set(f,{materials:e}),r.extensions&&pr(s,f,r),f})}createUniqueName(e){let t=At.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[gt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return bg(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=Jb(c),f=s[u];if(f)o.push(f.promise);else{let h;c.extensions&&c.extensions[gt.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=bg(new Lt,c,t),c.mode===oi.TRIANGLE_STRIP?h=h.then(d=>bf(d,Fa)):c.mode===oi.TRIANGLE_FAN&&(h=h.then(d=>bf(d,_o))),s[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?$b(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let d=0,p=u.length;d<p;d++){let x=u[d],g=o[d],m,v=c[d];if(g.mode===oi.TRIANGLES||g.mode===oi.TRIANGLE_STRIP||g.mode===oi.TRIANGLE_FAN||g.mode===void 0){let M=r.isSkinnedMesh===!0,y=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");M&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=M&&y?new ra(x,v):new ft(x,v),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(g.mode===oi.LINES)m=new aa(x,v);else if(g.mode===oi.LINE_STRIP)m=new Li(x,v);else if(g.mode===oi.LINE_LOOP)m=new la(x,v);else if(g.mode===oi.POINTS)m=new ca(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&Kb(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),zi(m,r),g.extensions&&pr(s,m,g),t.assignFinalMaterial(m),f.push(m)}for(let d=0,p=f.length;d<p;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return r.extensions&&pr(s,f[0],r),f[0];let h=new kt;r.extensions&&pr(s,h,r),t.associations.set(h,{meshes:e});for(let d=0,p=f.length;d<p;d++)h.add(f[d]);return h})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new on(Vs.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new _i(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),zi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let f=o[c];if(f){a.push(f);let h=new tt;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new oa(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,h=s.channels.length;f<h;f++){let d=s.channels[f],p=s.samplers[d.sampler],x=d.target,g=x.node,m=s.parameters!==void 0?s.parameters[p.input]:p.input,v=s.parameters!==void 0?s.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",v)),c.push(p),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){let h=f[0],d=f[1],p=f[2],x=f[3],g=f[4],m=[];for(let M=0,y=h.length;M<y;M++){let E=h[M],w=d[M],_=p[M],b=x[M],D=g[M];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let L=n._createAnimationTracks(E,w,_,b,D);if(L)for(let O=0;O<L.length;O++)m.push(L[O])}let v=new _a(r,void 0,m);return zi(v,s),v})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(h,Qb)});for(let d=0,p=f.length;d<p;d++)u.add(f[d]);if(u.userData.pivot!==void 0&&f.length>0){let d=u.userData.pivot,p=f[0];u.pivot=new P().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],p.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new ro:c.length>1?u=new kt:c.length===1?u=c[0]:u=new zt,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(r.name&&(u.userData.name=r.name,u.name=o),zi(u,r),r.extensions&&pr(n,u,r),r.matrix!==void 0){let f=new tt;f.fromArray(r.matrix),u.applyMatrix4(f)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let f=s.associations.get(u);s.associations.set(u,{...f})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new kt;n.name&&(r.name=s.createUniqueName(n.name)),zi(r,n),n.extensions&&pr(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++){let h=l[u];h.parent!==null?r.add(_g(h)):r.add(h)}let c=u=>{let f=new Map;for(let[h,d]of s.associations)(h instanceof Rn||h instanceof an)&&f.set(h,d);return u.traverse(h=>{let d=s.associations.get(h);d!=null&&f.set(h,d)}),f};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}Gs[r.path]===Gs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(Gs[r.path]){case Gs.weights:u=hs;break;case Gs.rotation:u=fs;break;case Gs.translation:case Gs.scale:u=Ns;break;default:n.itemSize===1?u=hs:u=Ns;break}let f=s.interpolation!==void 0?Yb[s.interpolation]:rr,h=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){let x=new u(l[d]+"."+Gs[r.path],t.array,h,f);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Jf(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof fs?Zf:fu;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function eE(i,e,t){let n=e.attributes,s=new Gt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),a.normalized){let u=Jf(So[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new P,l=new P;for(let c=0,u=r.length;c<u;c++){let f=r[c];if(f.POSITION!==void 0){let h=t.json.accessors[f.POSITION],d=h.min,p=h.max;if(d!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),h.normalized){let x=Jf(So[h.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new pn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function bg(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=Kf[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return mt.workingColorSpace!==Bn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${mt.workingColorSpace}" not supported.`),zi(i,e),eE(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Zb(i,e.targets,t):i})}var wg={type:"change"},ed={type:"start"},Ag={type:"end"},du=new Ii,Tg=new dn,tE=Math.cos(70*Vs.DEG2RAD),hn=new P,qn=2*Math.PI,bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Qf=1e-6,pu=class extends Ta{constructor(e,t=null){super(e,t),this.state=bt.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Bs.ROTATE,MIDDLE:Bs.DOLLY,RIGHT:Bs.PAN},this.touches={ONE:zs.ROTATE,TWO:zs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new Xt,this._lastTargetPosition=new P,this._quat=new Xt().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fs,this._sphericalDelta=new Fs,this._scale=1,this._panOffset=new P,this._rotateStart=new ke,this._rotateEnd=new ke,this._rotateDelta=new ke,this._panStart=new ke,this._panEnd=new ke,this._panDelta=new ke,this._dollyStart=new ke,this._dollyEnd=new ke,this._dollyDelta=new ke,this._dollyDirection=new P,this._mouse=new ke,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=iE.bind(this),this._onPointerDown=nE.bind(this),this._onPointerUp=sE.bind(this),this._onContextMenu=hE.bind(this),this._onMouseWheel=aE.bind(this),this._onKeyDown=lE.bind(this),this._onTouchStart=cE.bind(this),this._onTouchMove=uE.bind(this),this._onMouseDown=rE.bind(this),this._onMouseMove=oE.bind(this),this._interceptControlDown=fE.bind(this),this._interceptControlUp=dE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=bt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(wg),this.update(),this.state=bt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;hn.copy(t).sub(this.target),hn.applyQuaternion(this._quat),this._spherical.setFromVector3(hn),this.autoRotate&&this.state===bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=qn:n>Math.PI&&(n-=qn),s<-Math.PI?s+=qn:s>Math.PI&&(s-=qn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(hn.setFromSpherical(this._spherical),hn.applyQuaternion(this._quatInverse),t.copy(this.target).add(hn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=hn.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=hn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(du.origin.copy(this.object.position),du.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(du.direction))<tE?this.object.lookAt(this.target):(Tg.setFromNormalAndCoplanarPoint(this.object.up,this.target),du.intersectPlane(Tg,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Qf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Qf||this._lastTargetPosition.distanceToSquared(this.target)>Qf?(this.dispatchEvent(wg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?qn/60*this.autoRotateSpeed*e:qn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){hn.setFromMatrixColumn(t,0),hn.multiplyScalar(-e),this._panOffset.add(hn)}_panUp(e,t){this.screenSpacePanning===!0?hn.setFromMatrixColumn(t,1):(hn.setFromMatrixColumn(t,0),hn.crossVectors(this.object.up,hn)),hn.multiplyScalar(e),this._panOffset.add(hn)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;hn.copy(s).sub(this.target);let r=hn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/t.clientHeight),this._rotateUp(qn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/t.clientHeight),this._rotateUp(qn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ke,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function nE(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function iE(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function sE(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ag),this.state=bt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function rE(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Bs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=bt.DOLLY;break;case Bs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=bt.ROTATE}break;case Bs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=bt.PAN}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(ed)}function oE(i){switch(this.state){case bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function aE(i){this.enabled===!1||this.enableZoom===!1||this.state!==bt.NONE||(i.preventDefault(),this.dispatchEvent(ed),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ag))}function lE(i){this.enabled!==!1&&this._handleKeyDown(i)}function cE(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case zs.ROTATE:if(this.enableRotate===!1){this.state=bt.NONE;break}this._handleTouchStartRotate(i),this.state=bt.TOUCH_ROTATE;break;case zs.PAN:if(this.enablePan===!1){this.state=bt.NONE;break}this._handleTouchStartPan(i),this.state=bt.TOUCH_PAN;break;default:this.state=bt.NONE}break;case 2:switch(this.touches.TWO){case zs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=bt.TOUCH_DOLLY_PAN;break;case zs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=bt.TOUCH_DOLLY_ROTATE;break;default:this.state=bt.NONE}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(ed)}function uE(i){switch(this._trackPointer(i),this.state){case bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=bt.NONE}}function hE(i){this.enabled!==!1&&i.preventDefault()}function fE(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function dE(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var mu=class extends zn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Di;e.deleteAttribute("uv");let t=new Cn({side:yn}),n=new Cn,s=new cr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ft(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new ar(e,n,6),a=new zt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new ft(e,bo(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ft(e,bo(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new ft(e,bo(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let f=new ft(e,bo(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let h=new ft(e,bo(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let d=new ft(e,bo(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function bo(i){return new ga({color:0,emissive:16777215,emissiveIntensity:i})}var Ln=Uint8Array,Jn=Uint16Array,od=Int32Array,ad=new Ln([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ld=new Ln([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Rg=new Ln([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ng=function(i,e){for(var t=new Jn(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new od(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return{b:t,r:s}},Og=Ng(ad,2),pE=Og.b,nd=Og.r;pE[28]=258,nd[258]=28;var Ug=Ng(ld,0),EC=Ug.b,Cg=Ug.r,id=new Jn(32768);for(Et=0;Et<32768;++Et)xs=(Et&43690)>>1|(Et&21845)<<1,xs=(xs&52428)>>2|(xs&13107)<<2,xs=(xs&61680)>>4|(xs&3855)<<4,id[Et]=((xs&65280)>>8|(xs&255)<<8)>>1;var xs,Et,Ya=(function(i,e,t){for(var n=i.length,s=0,r=new Jn(e);s<n;++s)i[s]&&++r[i[s]-1];var o=new Jn(e);for(s=1;s<e;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(t){a=new Jn(1<<e);var l=15-e;for(s=0;s<n;++s)if(i[s])for(var c=s<<4|i[s],u=e-i[s],f=o[i[s]-1]++<<u,h=f|(1<<u)-1;f<=h;++f)a[id[f]>>l]=c}else for(a=new Jn(n),s=0;s<n;++s)i[s]&&(a[s]=id[o[i[s]-1]++]>>15-i[s]);return a}),mr=new Ln(288);for(Et=0;Et<144;++Et)mr[Et]=8;var Et;for(Et=144;Et<256;++Et)mr[Et]=9;var Et;for(Et=256;Et<280;++Et)mr[Et]=7;var Et;for(Et=280;Et<288;++Et)mr[Et]=8;var Et,gu=new Ln(32);for(Et=0;Et<32;++Et)gu[Et]=5;var Et,mE=Ya(mr,9,0);var gE=Ya(gu,5,0);var Fg=function(i){return(i+7)/8|0},Bg=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new Ln(i.subarray(e,t))};var xE=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],xu=function(i,e,t){var n=new Error(e||xE[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,xu),!t)throw n;return n};var _s=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8},Xa=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8,i[n+2]|=t>>16},td=function(i,e){for(var t=[],n=0;n<i.length;++n)i[n]&&t.push({s:n,f:i[n]});var s=t.length,r=t.slice();if(!s)return{t:kg,l:0};if(s==1){var o=new Ln(t[0].s+1);return o[t[0].s]=1,{t:o,l:1}}t.sort(function(E,w){return E.f-w.f}),t.push({s:-1,f:25001});var a=t[0],l=t[1],c=0,u=1,f=2;for(t[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=s-1;)a=t[t[c].f<t[f].f?c++:f++],l=t[c!=u&&t[c].f<t[f].f?c++:f++],t[u++]={s:-1,f:a.f+l.f,l:a,r:l};for(var h=r[0].s,n=1;n<s;++n)r[n].s>h&&(h=r[n].s);var d=new Jn(h+1),p=sd(t[u-1],d,0);if(p>e){var n=0,x=0,g=p-e,m=1<<g;for(r.sort(function(w,_){return d[_.s]-d[w.s]||w.f-_.f});n<s;++n){var v=r[n].s;if(d[v]>e)x+=m-(1<<p-d[v]),d[v]=e;else break}for(x>>=g;x>0;){var M=r[n].s;d[M]<e?x-=1<<e-d[M]++-1:++n}for(;n>=0&&x;--n){var y=r[n].s;d[y]==e&&(--d[y],++x)}p=e}return{t:new Ln(d),l:p}},sd=function(i,e,t){return i.s==-1?Math.max(sd(i.l,e,t+1),sd(i.r,e,t+1)):e[i.s]=t},Pg=function(i){for(var e=i.length;e&&!i[--e];);for(var t=new Jn(++e),n=0,s=i[0],r=1,o=function(l){t[n++]=l},a=1;a<=e;++a)if(i[a]==s&&a!=e)++r;else{if(!s&&r>2){for(;r>138;r-=138)o(32754);r>2&&(o(r>10?r-11<<5|28690:r-3<<5|12305),r=0)}else if(r>3){for(o(s),--r;r>6;r-=6)o(8304);r>2&&(o(r-3<<5|8208),r=0)}for(;r--;)o(s);r=1,s=i[a]}return{c:t.subarray(0,n),n:e}},qa=function(i,e){for(var t=0,n=0;n<e.length;++n)t+=i[n]*e[n];return t},zg=function(i,e,t){var n=t.length,s=Fg(e+2);i[s]=n&255,i[s+1]=n>>8,i[s+2]=i[s]^255,i[s+3]=i[s+1]^255;for(var r=0;r<n;++r)i[s+r+4]=t[r];return(s+4+n)*8},Ig=function(i,e,t,n,s,r,o,a,l,c,u){_s(e,u++,t),++s[256];for(var f=td(s,15),h=f.t,d=f.l,p=td(r,15),x=p.t,g=p.l,m=Pg(h),v=m.c,M=m.n,y=Pg(x),E=y.c,w=y.n,_=new Jn(19),b=0;b<v.length;++b)++_[v[b]&31];for(var b=0;b<E.length;++b)++_[E[b]&31];for(var D=td(_,7),L=D.t,O=D.l,V=19;V>4&&!L[Rg[V-1]];--V);var B=c+5<<3,I=qa(s,mr)+qa(r,gu)+o,G=qa(s,h)+qa(r,x)+o+14+3*V+qa(_,L)+2*_[16]+3*_[17]+7*_[18];if(l>=0&&B<=I&&B<=G)return zg(e,u,i.subarray(l,l+c));var Y,H,me,Z;if(_s(e,u,1+(G<I)),u+=2,G<I){Y=Ya(h,d,0),H=h,me=Ya(x,g,0),Z=x;var k=Ya(L,O,0);_s(e,u,M-257),_s(e,u+5,w-1),_s(e,u+10,V-4),u+=14;for(var b=0;b<V;++b)_s(e,u+3*b,L[Rg[b]]);u+=3*V;for(var J=[v,E],ce=0;ce<2;++ce)for(var j=J[ce],b=0;b<j.length;++b){var U=j[b]&31;_s(e,u,k[U]),u+=L[U],U>15&&(_s(e,u,j[b]>>5&127),u+=j[b]>>12)}}else Y=mE,H=mr,me=gE,Z=gu;for(var b=0;b<a;++b){var ve=n[b];if(ve>255){var U=ve>>18&31;Xa(e,u,Y[U+257]),u+=H[U+257],U>7&&(_s(e,u,ve>>23&31),u+=ad[U]);var ue=ve&31;Xa(e,u,me[ue]),u+=Z[ue],ue>3&&(Xa(e,u,ve>>5&8191),u+=ld[ue])}else Xa(e,u,Y[ve]),u+=H[ve]}return Xa(e,u,Y[256]),u+H[256]},_E=new od([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),kg=new Ln(0),yE=function(i,e,t,n,s,r){var o=r.z||i.length,a=new Ln(n+o+5*(1+Math.ceil(o/7e3))+s),l=a.subarray(n,a.length-s),c=r.l,u=(r.r||0)&7;if(e){u&&(l[0]=r.r>>3);for(var f=_E[e-1],h=f>>13,d=f&8191,p=(1<<t)-1,x=r.p||new Jn(32768),g=r.h||new Jn(p+1),m=Math.ceil(t/3),v=2*m,M=function(qe){return(i[qe]^i[qe+1]<<m^i[qe+2]<<v)&p},y=new od(25e3),E=new Jn(288),w=new Jn(32),_=0,b=0,D=r.i||0,L=0,O=r.w||0,V=0;D+2<o;++D){var B=M(D),I=D&32767,G=g[B];if(x[I]=G,g[B]=I,O<=D){var Y=o-D;if((_>7e3||L>24576)&&(Y>423||!c)){u=Ig(i,l,0,y,E,w,b,L,V,D-V,u),L=_=b=0,V=D;for(var H=0;H<286;++H)E[H]=0;for(var H=0;H<30;++H)w[H]=0}var me=2,Z=0,k=d,J=I-G&32767;if(Y>2&&B==M(D-J))for(var ce=Math.min(h,Y)-1,j=Math.min(32767,D),U=Math.min(258,Y);J<=j&&--k&&I!=G;){if(i[D+me]==i[D+me-J]){for(var ve=0;ve<U&&i[D+ve]==i[D+ve-J];++ve);if(ve>me){if(me=ve,Z=J,ve>ce)break;for(var ue=Math.min(J,ve-2),de=0,H=0;H<ue;++H){var fe=D-J+H&32767,be=x[fe],Xe=fe-be&32767;Xe>de&&(de=Xe,G=fe)}}}I=G,G=x[I],J+=I-G&32767}if(Z){y[L++]=268435456|nd[me]<<18|Cg[Z];var Ne=nd[me]&31,ze=Cg[Z]&31;b+=ad[Ne]+ld[ze],++E[257+Ne],++w[ze],O=D+me,++_}else y[L++]=i[D],++E[i[D]]}}for(D=Math.max(D,O);D<o;++D)y[L++]=i[D],++E[i[D]];u=Ig(i,l,c,y,E,w,b,L,V,D-V,u),c||(r.r=u&7|l[u/8|0]<<3,u-=7,r.h=g,r.p=x,r.i=D,r.w=O)}else{for(var D=r.w||0;D<o+c;D+=65535){var Ue=D+65535;Ue>=o&&(l[u/8|0]=c,Ue=o),u=zg(l,u+1,i.subarray(D,Ue))}r.i=o}return Bg(a,0,n+Fg(u)+s)},vE=(function(){for(var i=new Int32Array(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(t&1&&-306674912)^t>>>1;i[e]=t}return i})(),ME=function(){var i=-1;return{p:function(e){for(var t=i,n=0;n<e.length;++n)t=vE[t&255^e[n]]^t>>>8;i=t},d:function(){return~i}}};var SE=function(i,e,t,n,s){if(!s&&(s={l:1},e.dictionary)){var r=e.dictionary.subarray(-32768),o=new Ln(r.length+i.length);o.set(r),o.set(i,r.length),i=o,s.w=r.length}return yE(i,e.level==null?6:e.level,e.mem==null?s.l?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):20:12+e.mem,t,n,s)},Hg=function(i,e){var t={};for(var n in i)t[n]=i[n];for(var n in e)t[n]=e[n];return t};var Mn=function(i,e,t){for(;t;++e)i[e]=t,t>>>=8};function bE(i,e){return SE(i,e||{},0,0)}var Vg=function(i,e,t,n){for(var s in i){var r=i[s],o=e+s,a=n;Array.isArray(r)&&(a=Hg(n,r[1]),r=r[0]),ArrayBuffer.isView(r)?t[o]=[r,a]:(t[o+="/"]=[new Ln(0),a],Vg(r,o,t,n))}},Lg=typeof TextEncoder<"u"&&new TextEncoder,EE=typeof TextDecoder<"u"&&new TextDecoder,wE=0;try{EE.decode(kg,{stream:!0}),wE=1}catch{}function $a(i,e){if(e){for(var t=new Ln(i.length),n=0;n<i.length;++n)t[n]=i.charCodeAt(n);return t}if(Lg)return Lg.encode(i);for(var s=i.length,r=new Ln(i.length+(i.length>>1)),o=0,a=function(u){r[o++]=u},n=0;n<s;++n){if(o+5>r.length){var l=new Ln(o+8+(s-n<<1));l.set(r),r=l}var c=i.charCodeAt(n);c<128||e?a(c):c<2048?(a(192|c>>6),a(128|c&63)):c>55295&&c<57344?(c=65536+(c&1047552)|i.charCodeAt(++n)&1023,a(240|c>>18),a(128|c>>12&63),a(128|c>>6&63),a(128|c&63)):(a(224|c>>12),a(128|c>>6&63),a(128|c&63))}return Bg(r,0,o)}var rd=function(i){var e=0;if(i)for(var t in i){var n=i[t].length;n>65535&&xu(9),e+=n+4}return e},Dg=function(i,e,t,n,s,r,o,a){var l=n.length,c=t.extra,u=a&&a.length,f=rd(c);Mn(i,e,o!=null?33639248:67324752),e+=4,o!=null&&(i[e++]=20,i[e++]=t.os),i[e]=20,e+=2,i[e++]=t.flag<<1|(r<0&&8),i[e++]=s&&8,i[e++]=t.compression&255,i[e++]=t.compression>>8;var h=new Date(t.mtime==null?Date.now():t.mtime),d=h.getFullYear()-1980;if((d<0||d>119)&&xu(10),Mn(i,e,d<<25|h.getMonth()+1<<21|h.getDate()<<16|h.getHours()<<11|h.getMinutes()<<5|h.getSeconds()>>1),e+=4,r!=-1&&(Mn(i,e,t.crc),Mn(i,e+4,r<0?-r-2:r),Mn(i,e+8,t.size)),Mn(i,e+12,l),Mn(i,e+14,f),e+=16,o!=null&&(Mn(i,e,u),Mn(i,e+6,t.attrs),Mn(i,e+10,o),e+=14),i.set(n,e),e+=l,f)for(var p in c){var x=c[p],g=x.length;Mn(i,e,+p),Mn(i,e+2,g),i.set(x,e+4),e+=4+g}return u&&(i.set(a,e),e+=u),e},TE=function(i,e,t,n,s){Mn(i,e,101010256),Mn(i,e+8,t),Mn(i,e+10,t),Mn(i,e+12,n),Mn(i,e+16,s)};function Gg(i,e){e||(e={});var t={},n=[];Vg(i,"",t,e);var s=0,r=0;for(var o in t){var a=t[o],l=a[0],c=a[1],u=c.level==0?0:8,f=$a(o),h=f.length,d=c.comment,p=d&&$a(d),x=p&&p.length,g=rd(c.extra);h>65535&&xu(11);var m=u?bE(l,c):l,v=m.length,M=ME();M.p(l),n.push(Hg(c,{size:l.length,crc:M.d(),c:m,f,m:p,u:h!=o.length||p&&d.length!=x,o:s,compression:u})),s+=30+h+g+v,r+=76+2*(h+g)+(x||0)+v}for(var y=new Ln(r+22),E=s,w=r-s,_=0;_<n.length;++_){var f=n[_];Dg(y,f.o,f,f.f,f.u,f.c.length);var b=30+f.f.length+rd(f.extra);y.set(f.c,f.o+b),Dg(y,s,f,f.f,f.u,f.c.length,f.o,f.m),s+=16+b+(f.m?f.m.length:0)}return TE(y,s,n.length,w,E),y}var Dn=class{constructor(e,t="",n=[],s=[]){this.name=e,this.type=t,this.metadata=n,this.properties=s,this.children=[]}addMetadata(e,t){this.metadata.push({key:e,value:t})}addProperty(e,t=[]){this.properties.push({property:e,metadata:t})}addChild(e){this.children.push(e)}toString(e=0){let t="	".repeat(e),n=this.metadata.map(u=>{let f=u.key,h=u.value;if(Array.isArray(h)){let d=[];return d.push(`${f} = {`),h.forEach(p=>{d.push(`${t}		${p}`)}),d.push(`${t}	}`),d.join(`
`)}else return`${f} = ${h}`}),s=n.length?` (
${n.map(u=>`${t}	${u}`).join(`
`)}
${t})`:"",r=this.properties.map(u=>{let f=u.property.replace(/\n/g,`
`+t+"	"),h=u.metadata.length?` (
${u.metadata.map(d=>`${t}		${d}`).join(`
`)}
${t}	)`:"";return`${t}	${f}${h}`}),o=this.children.map(u=>u.toString(e+1)),a=[];if(r.length>0&&a.push(...r),o.length>0){r.length>0&&a.push("");for(let u=0;u<o.length;u++)a.push(o[u]),u<o.length-1&&a.push("")}let l=a.join(`
`),c=this.type?this.type+" ":"";return`${t}def ${c}"${this.name}"${s}
${t}{
${l}
${t}}`}},yu=class{constructor(){this.textureUtils=null}setTextureUtils(e){this.textureUtils=e}parse(e,t,n,s){this.parseAsync(e,s).then(t).catch(n)}async parseAsync(e,t={}){t=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},includeAnchoringProperties:!0,onlyVisible:!0,quickLookCompatible:!1,maxTextureSize:1024,animations:[],animationFrameRate:60},t);let n=new Set,s={},r="model.usda";s[r]=null;let o=RE(e,t.animations);t.animationTracks=o;let a=new Dn("Root","Xform"),l=new Dn("Scenes","Scope");l.addMetadata("kind",'"sceneLibrary"'),a.addChild(l);let c="Scene",u=new Dn(c,"Xform");u.addMetadata("customData",["bool preliminary_collidesWithEnvironment = 0",`string sceneName = "${c}"`]),u.addMetadata("sceneName",`"${c}"`),t.includeAnchoringProperties&&(u.addProperty(`token preliminary:anchoring:type = "${t.ar.anchoring.type}"`),u.addProperty(`token preliminary:planeAnchoring:alignment = "${t.ar.planeAnchoring.alignment}"`)),l.addChild(u);let f,h={},d={};e.isScene?Kg(e,u,h,n,s,t):Jg(e,u,h,n,s,t);let p=FE(h,d,t.quickLookCompatible),x=o.size>0?{fps:t.animationFrameRate,endTimeCode:CE(t.animations)*t.animationFrameRate}:null;f=Zg(x)+`
`+a.toString()+`

`+p.toString(),s[r]=$a(f),f=null;for(let m in d){let v=d[m];if(v.isCompressedTexture===!0){if(this.textureUtils===null)throw new Error("THREE.USDZExporter: setTextureUtils() must be called to process compressed textures.");v=await this.textureUtils.decompress(v)}let M=AE(v.image,v.flipY,t.maxTextureSize),y=v.userData.mimeType==="image/jpeg"?"image/jpeg":"image/png",E=await new Promise(w=>M.toBlob(w,y));s[`textures/Texture_${m}.${$g(v)}`]=new Uint8Array(await E.arrayBuffer())}let g=0;for(let m in s){let v=s[m],M=34+m.length;g+=M;let y=g&63;if(y!==4){let E=64-y,w=new Uint8Array(E);s[m]=[v,{extra:{12345:w}}]}g=v.length}return Gg(s,{level:0,mtime:new Date})}};function Yg(i,e){let t=i.name;return t=t.replace(/[^A-Za-z0-9_]/g,""),/^[0-9]/.test(t)&&(t="_"+t),t===""&&(i.isCamera?t="Camera":t="Object"),e.has(t)&&(t=t+"_"+i.id),e.add(t),t}function $g(i){return i.userData.mimeType==="image/jpeg"?"jpg":"png"}function AE(i,e,t){if(typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&i instanceof ImageBitmap){let n=t/Math.max(i.width,i.height),s=document.createElement("canvas");s.width=i.width*Math.min(1,n),s.height=i.height*Math.min(1,n);let r=s.getContext("2d");return e===!0&&(r.translate(0,s.height),r.scale(1,-1)),r.drawImage(i,0,0,s.width,s.height),s}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}var yt=7;function Zg(i=null){return`#usda 1.0
(
	customLayerData = {
		string creator = "Three.js USDZExporter"
	}
	defaultPrim = "Root"
	metersPerUnit = 1
	upAxis = "Y"${i?`
	startTimeCode = 0
	endTimeCode = ${i.endTimeCode}
	timeCodesPerSecond = ${i.fps}
	framesPerSecond = ${i.fps}`:""}
)
`}function RE(i,e){let t=new Map;for(let n=0;n<e.length;n++){let s=e[n];for(let r=0;r<s.tracks.length;r++){let o=s.tracks[r],a=At.parseTrackName(o.name),l=At.findNode(i,a.nodeName);if(l==null)continue;let c=a.propertyName;if(c!=="position"&&c!=="quaternion"&&c!=="scale")continue;let u=t.get(l);u===void 0&&(u={},t.set(l,u)),u[c]=o}}return t}function CE(i){let e=0;for(let t=0;t<i.length;t++)i[t].duration>e&&(e=i[t].duration);return e}function Wg(i,e,t,n){let s=t.times,r=t.values,o=[];for(let a=0;a<s.length;a++){let l=a*3;o.push(`${(s[a]*n).toPrecision(yt)}: (${r[l].toPrecision(yt)}, ${r[l+1].toPrecision(yt)}, ${r[l+2].toPrecision(yt)})`)}return`${e} ${i}.timeSamples = {
	${o.join(`,
	`)},
}`}function PE(i,e){let t=i.times,n=i.values,s=[];for(let r=0;r<t.length;r++){let o=r*4;s.push(`${(t[r]*e).toPrecision(yt)}: (${n[o+3].toPrecision(yt)}, ${n[o].toPrecision(yt)}, ${n[o+1].toPrecision(yt)}, ${n[o+2].toPrecision(yt)})`)}return`quatf xformOp:orient.timeSamples = {
	${s.join(`,
	`)},
}`}function Kg(i,e,t,n,s,r){for(let o=0,a=i.children.length;o<a;o++)Jg(i.children[o],e,t,n,s,r)}function Jg(i,e,t,n,s,r){if(i.visible===!1&&r.onlyVisible===!0)return;let o;if(i.isMesh){let a=i.geometry,l=Array.isArray(i.material),c=l?i.material:[i.material];for(let f=0;f<c.length;f++){let h=c[f];h.isMeshStandardMaterial||console.warn("THREE.USDZExporter: Use MeshStandardMaterial for best results."),h.uuid in t||(t[h.uuid]=h)}let u=c.map(f=>t[f.uuid]);if(l===!1){let f=`geometries/Geometry_${a.id}.usda`;if(!(f in s)){let h=DE(a);s[f]=$a(Zg()+`
`+h.toString())}}o=IE(i,a,u,n,r)}else i.isCamera?o=kE(i,n,r):o=Qg(i,n,r);e.addChild(o),Kg(i,o,t,n,s,r)}function jg(i,e,t){let n=t.animationTracks.get(e),s=e.pivot!==null;if(!s&&n===void 0){let c=LE(e.matrix);i.addProperty(`matrix4d xformOp:transform = ${c}`),i.addProperty('uniform token[] xformOpOrder = ["xformOp:transform"]');return}let r=t.animationFrameRate,o=e.position,a=e.quaternion,l=e.scale;if(n!==void 0&&n.position!==void 0?i.addProperty(Wg("xformOp:translate","float3",n.position,r)):i.addProperty(`float3 xformOp:translate = (${o.x.toPrecision(yt)}, ${o.y.toPrecision(yt)}, ${o.z.toPrecision(yt)})`),s){let c=e.pivot;i.addProperty(`float3 xformOp:translate:pivot = (${c.x.toPrecision(yt)}, ${c.y.toPrecision(yt)}, ${c.z.toPrecision(yt)})`)}n!==void 0&&n.quaternion!==void 0?i.addProperty(PE(n.quaternion,r)):i.addProperty(`quatf xformOp:orient = (${a.w.toPrecision(yt)}, ${a.x.toPrecision(yt)}, ${a.y.toPrecision(yt)}, ${a.z.toPrecision(yt)})`),n!==void 0&&n.scale!==void 0?i.addProperty(Wg("xformOp:scale","float3",n.scale,r)):i.addProperty(`float3 xformOp:scale = (${l.x.toPrecision(yt)}, ${l.y.toPrecision(yt)}, ${l.z.toPrecision(yt)})`),s?i.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:translate:pivot", "xformOp:orient", "xformOp:scale", "!invert!xformOp:translate:pivot"]'):i.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:orient", "xformOp:scale"]')}function Qg(i,e,t){let n=Yg(i,e);i.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",i);let s=new Dn(n,"Xform");return jg(s,i,t),s}function IE(i,e,t,n,s){let r=Qg(i,n,s);return t.length===1?(r.addMetadata("prepend references",`@./geometries/Geometry_${e.id}.usda@</Geometry>`),r.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),r.addProperty(`rel material:binding = </Materials/Material_${t[0].id}>`)):r.addChild(e0(e,t)),r}function LE(i){let e=i.elements;return`( ${_u(e,0)}, ${_u(e,4)}, ${_u(e,8)}, ${_u(e,12)} )`}function _u(i,e){return`(${i[e+0]}, ${i[e+1]}, ${i[e+2]}, ${i[e+3]})`}function DE(i){let e=new Dn("Geometry"),t=e0(i);return e.addChild(t),e}function e0(i,e=null){let t="Geometry",n=i.attributes,s=n.position.count,r=new Dn(t,"Mesh");r.addProperty(`int[] faceVertexCounts = [${NE(i)}]`),r.addProperty(`int[] faceVertexIndices = [${OE(i)}]`),r.addProperty(`normal3f[] normals = [${cd(n.normal,s)}]`,['interpolation = "vertex"']),r.addProperty(`point3f[] points = [${cd(n.position,s)}]`);for(let a=0;a<4;a++){let l=a>0?a:"",c=n["uv"+l];c!==void 0&&r.addProperty(`texCoord2f[] primvars:st${l} = [${UE(c)}]`,['interpolation = "vertex"'])}let o=n.color;if(o!==void 0&&r.addProperty(`color3f[] primvars:displayColor = [${cd(o,s)}]`,['interpolation = "vertex"']),r.addProperty('uniform token subdivisionScheme = "none"'),e!==null){let a=i.groups,l=(i.index!==null?i.index.count:n.position.count)/3;for(let c=0;c<a.length;c++){let u=a[c],f=e[u.materialIndex];if(f===void 0)continue;let h=Math.floor(u.start/3),d=Math.min(h+Math.floor(u.count/3),l),p=[];for(let g=h;g<d;g++)p.push(g);let x=new Dn(`subset_${c}`,"GeomSubset");x.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),x.addProperty('uniform token elementType = "face"'),x.addProperty('uniform token familyName = "materialBind"'),x.addProperty(`int[] indices = [${p.join(", ")}]`),x.addProperty(`rel material:binding = </Materials/Material_${f.id}>`),r.addChild(x)}}return r}function NE(i){let e=i.index!==null?i.index.count:i.attributes.position.count;return Array(e/3).fill(3).join(", ")}function OE(i){let e=i.index,t=[];if(e!==null)for(let n=0;n<e.count;n++)t.push(e.getX(n));else{let n=i.attributes.position.count;for(let s=0;s<n;s++)t.push(s)}return t.join(", ")}function cd(i,e){if(i===void 0)return console.warn("USDZExporter: Normals missing."),Array(e).fill("(0, 0, 0)").join(", ");let t=[];for(let n=0;n<i.count;n++){let s=i.getX(n),r=i.getY(n),o=i.getZ(n);t.push(`(${s.toPrecision(yt)}, ${r.toPrecision(yt)}, ${o.toPrecision(yt)})`)}return t.join(", ")}function UE(i){let e=[];for(let t=0;t<i.count;t++){let n=i.getX(t),s=i.getY(t);e.push(`(${n.toPrecision(yt)}, ${1-s.toPrecision(yt)})`)}return e.join(", ")}function FE(i,e,t=!1){let n=new Dn("Materials");for(let s in i){let r=i[s];n.addChild(BE(r,e,t))}return n}function BE(i,e,t=!1){let n=new Dn(`Material_${i.id}`,"Material");function s(o,a,l){let c=o.source.id+"_"+o.flipY;e[c]=o;let u=o.channel>0?"st"+o.channel:"st",f={1e3:"repeat",1001:"clamp",1002:"mirror"},h=o.repeat.clone(),d=o.offset.clone(),p=o.rotation,x=Math.sin(p),g=Math.cos(p);d.y=1-d.y-h.y,t?(d.x=d.x/h.x,d.y=d.y/h.y,d.x+=x/h.x,d.y+=g-1):(d.x+=x*h.x,d.y+=(1-g)*h.y);let m=new Dn(`PrimvarReader_${a}`,"Shader");m.addProperty('uniform token info:id = "UsdPrimvarReader_float2"'),m.addProperty("float2 inputs:fallback = (0.0, 0.0)"),m.addProperty(`string inputs:varname = "${u}"`),m.addProperty("float2 outputs:result");let v=new Dn(`Transform2d_${a}`,"Shader");v.addProperty('uniform token info:id = "UsdTransform2d"'),v.addProperty(`float2 inputs:in.connect = </Materials/Material_${i.id}/PrimvarReader_${a}.outputs:result>`),v.addProperty(`float inputs:rotation = ${(p*(180/Math.PI)).toFixed(yt)}`),v.addProperty(`float2 inputs:scale = ${qg(h)}`),v.addProperty(`float2 inputs:translation = ${qg(d)}`),v.addProperty("float2 outputs:result");let M=new Dn(`Texture_${o.id}_${a}`,"Shader");if(M.addProperty('uniform token info:id = "UsdUVTexture"'),M.addProperty(`asset inputs:file = @textures/Texture_${c}.${$g(o)}@`),M.addProperty(`float2 inputs:st.connect = </Materials/Material_${i.id}/Transform2d_${a}.outputs:result>`),l!==void 0){let y=a==="diffuse"?i.opacity:1;M.addProperty(`float4 inputs:scale = ${zE(l,y)}`)}if(a==="normal"){let y=i.normalScale.x;M.addProperty(`float4 inputs:scale = (${2*y}, ${2*y}, 2, 1)`),M.addProperty(`float4 inputs:bias = (${-y}, ${-y}, -1, 0)`)}return M.addProperty(`token inputs:sourceColorSpace = "${o.colorSpace===Mi?"raw":"sRGB"}"`),M.addProperty(`token inputs:wrapS = "${f[o.wrapS]}"`),M.addProperty(`token inputs:wrapT = "${f[o.wrapT]}"`),M.addProperty("float outputs:r"),M.addProperty("float outputs:g"),M.addProperty("float outputs:b"),M.addProperty("float3 outputs:rgb"),(i.transparent||i.alphaTest>0)&&M.addProperty("float outputs:a"),[m,v,M]}i.side===Ct&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",i);let r=new Dn("PreviewSurface","Shader");if(r.addProperty('uniform token info:id = "UsdPreviewSurface"'),i.map!==null?(r.addProperty(`color3f inputs:diffuseColor.connect = </Materials/Material_${i.id}/Texture_${i.map.id}_diffuse.outputs:rgb>`),i.transparent?r.addProperty(`float inputs:opacity.connect = </Materials/Material_${i.id}/Texture_${i.map.id}_diffuse.outputs:a>`):i.alphaTest>0&&(r.addProperty(`float inputs:opacity.connect = </Materials/Material_${i.id}/Texture_${i.map.id}_diffuse.outputs:a>`),r.addProperty(`float inputs:opacityThreshold = ${i.alphaTest}`)),s(i.map,"diffuse",i.color).forEach(a=>n.addChild(a))):r.addProperty(`color3f inputs:diffuseColor = ${Xg(i.color)}`),i.emissive){let o=i.emissiveIntensity??1;if(i.emissiveMap){r.addProperty(`color3f inputs:emissiveColor.connect = </Materials/Material_${i.id}/Texture_${i.emissiveMap.id}_emissive.outputs:rgb>`);let a=new We(i.emissive.r*o,i.emissive.g*o,i.emissive.b*o);s(i.emissiveMap,"emissive",a).forEach(c=>n.addChild(c))}else i.emissive.getHex()>0&&r.addProperty(`color3f inputs:emissiveColor = ${Xg(i.emissive)}`)}if(i.normalMap&&(r.addProperty(`normal3f inputs:normal.connect = </Materials/Material_${i.id}/Texture_${i.normalMap.id}_normal.outputs:rgb>`),s(i.normalMap,"normal").forEach(a=>n.addChild(a))),i.aoMap){r.addProperty(`float inputs:occlusion.connect = </Materials/Material_${i.id}/Texture_${i.aoMap.id}_occlusion.outputs:r>`);let o=i.aoMapIntensity??1,a=new We(o,o,o);s(i.aoMap,"occlusion",a).forEach(c=>n.addChild(c))}if(i.roughnessMap){r.addProperty(`float inputs:roughness.connect = </Materials/Material_${i.id}/Texture_${i.roughnessMap.id}_roughness.outputs:g>`);let o=new We(i.roughness,i.roughness,i.roughness);s(i.roughnessMap,"roughness",o).forEach(l=>n.addChild(l))}else r.addProperty(`float inputs:roughness = ${i.roughness??1}`);if(i.metalnessMap){r.addProperty(`float inputs:metallic.connect = </Materials/Material_${i.id}/Texture_${i.metalnessMap.id}_metallic.outputs:b>`);let o=new We(i.metalness,i.metalness,i.metalness);s(i.metalnessMap,"metallic",o).forEach(l=>n.addChild(l))}else r.addProperty(`float inputs:metallic = ${i.metalness??0}`);if(i.alphaMap?(r.addProperty(`float inputs:opacity.connect = </Materials/Material_${i.id}/Texture_${i.alphaMap.id}_opacity.outputs:r>`),r.addProperty("float inputs:opacityThreshold = 0.0001"),s(i.alphaMap,"opacity").forEach(a=>n.addChild(a))):r.addProperty(`float inputs:opacity = ${i.opacity}`),i.isMeshPhysicalMaterial){if(i.clearcoatMap!==null){r.addProperty(`float inputs:clearcoat.connect = </Materials/Material_${i.id}/Texture_${i.clearcoatMap.id}_clearcoat.outputs:r>`);let o=new We(i.clearcoat,i.clearcoat,i.clearcoat);s(i.clearcoatMap,"clearcoat",o).forEach(l=>n.addChild(l))}else r.addProperty(`float inputs:clearcoat = ${i.clearcoat}`);if(i.clearcoatRoughnessMap!==null){r.addProperty(`float inputs:clearcoatRoughness.connect = </Materials/Material_${i.id}/Texture_${i.clearcoatRoughnessMap.id}_clearcoatRoughness.outputs:g>`);let o=new We(i.clearcoatRoughness,i.clearcoatRoughness,i.clearcoatRoughness);s(i.clearcoatRoughnessMap,"clearcoatRoughness",o).forEach(l=>n.addChild(l))}else r.addProperty(`float inputs:clearcoatRoughness = ${i.clearcoatRoughness}`);r.addProperty(`float inputs:ior = ${i.ior}`)}return r.addProperty("int inputs:useSpecularWorkflow = 0"),r.addProperty("token outputs:surface"),n.addChild(r),n.addProperty(`token outputs:surface.connect = </Materials/Material_${i.id}/PreviewSurface.outputs:surface>`),n}function Xg(i){return`(${i.r}, ${i.g}, ${i.b})`}function zE(i,e=1){return`(${i.r}, ${i.g}, ${i.b}, ${e})`}function qg(i){return`(${i.x}, ${i.y})`}function kE(i,e,t){let n=Yg(i,e);i.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",i);let s=new Dn(n,"Camera");jg(s,i,t);let r=i.isOrthographicCamera?"orthographic":"perspective";s.addProperty(`token projection = "${r}"`);let o=`(${i.near.toPrecision(yt)}, ${i.far.toPrecision(yt)})`;s.addProperty(`float2 clippingRange = ${o}`);let a;i.isOrthographicCamera?a=((Math.abs(i.left)+Math.abs(i.right))*10).toPrecision(yt):a=i.getFilmWidth().toPrecision(yt),s.addProperty(`float horizontalAperture = ${a}`);let l;if(i.isOrthographicCamera?l=((Math.abs(i.top)+Math.abs(i.bottom))*10).toPrecision(yt):l=i.getFilmHeight().toPrecision(yt),s.addProperty(`float verticalAperture = ${l}`),i.isPerspectiveCamera){let c=i.getFocalLength().toPrecision(yt);s.addProperty(`float focalLength = ${c}`);let u=i.focus.toPrecision(yt);s.addProperty(`float focusDistance = ${u}`)}return s}var t0=new Gt,vu=new P,bi=class extends ba{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Bt(e,3)),this.setAttribute("uv",new Bt(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new Us(t,6,1);return this.setAttribute("instanceStart",new An(n,3,0)),this.setAttribute("instanceEnd",new An(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new Us(t,6,1);return this.setAttribute("instanceColorStart",new An(n,3,0)),this.setAttribute("instanceColorEnd",new An(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new ma(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gt);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),t0.setFromBufferAttribute(t),this.boundingBox.union(t0))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pn),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)vu.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(vu)),vu.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(vu));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Fe.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ke},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Hn.line={uniforms:za.merge([Fe.common,Fe.fog,Fe.line]),vertexShader:`
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

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

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

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

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
				vec3 tmpFwd = perspective ? normalize( mix( start.xyz, end.xyz, 0.5 ) ) : vec3( 0.0, 0.0, - 1.0 );
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

				// only shift the depth of vertices in front of the camera (#35137)
				if ( clip.w > 0.0 ) clip.z = clipPose.z * clip.w;

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

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				float len;

				if ( isOrthographic ) {

					// View rays are parallel to the z axis so the distance reduces to camera-space XY
					vec2 lineDir = worldEnd.xy - worldStart.xy;
					float t = clamp( dot( worldPos.xy - worldStart.xy, lineDir ) / dot( lineDir, lineDir ), 0.0, 1.0 );
					len = length( worldStart.xy + lineDir * t - worldPos.xy );

				} else {

					// Find the closest points on the view ray and the line segment
					vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
					vec3 lineDir = worldEnd - worldStart;
					vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

					vec3 p1 = worldStart + lineDir * params.x;
					vec3 p2 = rayEnd * params.y;
					vec3 delta = p1 - p2;
					len = length( delta );

				}

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

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var ki=class extends mn{constructor(e){super({type:"LineMaterial",uniforms:za.clone(Hn.line.uniforms),vertexShader:Hn.line.vertexShader,fragmentShader:Hn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var ud=new Mt,n0=new P,i0=new P,Sn=new Mt,bn=new Mt,Hi=new Mt,hd=new P,fd=new tt,En=new wa,s0=new P,Mu=new Gt,Su=new pn,Vi=new Mt,Gi,gr;function r0(i,e,t){return Vi.set(0,0,-e,1).applyMatrix4(i.projectionMatrix),Vi.multiplyScalar(1/Vi.w),Vi.x=gr/t.width,Vi.y=gr/t.height,Vi.applyMatrix4(i.projectionMatrixInverse),Vi.multiplyScalar(1/Vi.w),Math.abs(Math.max(Vi.x,Vi.y))}function HE(i,e){let t=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,s.count);for(let a=0,l=o;a<l;a++){En.start.fromBufferAttribute(s,a),En.end.fromBufferAttribute(r,a),En.applyMatrix4(t);let c=new P,u=new P;Gi.distanceSqToSegment(En.start,En.end,u,c),u.distanceTo(c)<gr*.5&&e.push({point:u,pointOnLine:c,distance:Gi.origin.distanceTo(u),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function VE(i,e,t){let n=e.projectionMatrix,r=i.material.resolution,o=i.matrixWorld,a=i.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),f=-e.near;Gi.at(1,Hi),Hi.w=1,Hi.applyMatrix4(e.matrixWorldInverse),Hi.applyMatrix4(n),Hi.multiplyScalar(1/Hi.w),Hi.x*=r.x/2,Hi.y*=r.y/2,Hi.z=0,hd.copy(Hi),fd.multiplyMatrices(e.matrixWorldInverse,o);for(let h=0,d=u;h<d;h++){if(Sn.fromBufferAttribute(l,h),bn.fromBufferAttribute(c,h),Sn.w=1,bn.w=1,Sn.applyMatrix4(fd),bn.applyMatrix4(fd),Sn.z>f&&bn.z>f)continue;if(Sn.z>f){let M=Sn.z-bn.z,y=(Sn.z-f)/M;Sn.lerp(bn,y)}else if(bn.z>f){let M=bn.z-Sn.z,y=(bn.z-f)/M;bn.lerp(Sn,y)}Sn.applyMatrix4(n),bn.applyMatrix4(n),Sn.multiplyScalar(1/Sn.w),bn.multiplyScalar(1/bn.w),Sn.x*=r.x/2,Sn.y*=r.y/2,bn.x*=r.x/2,bn.y*=r.y/2,En.start.copy(Sn),En.start.z=0,En.end.copy(bn),En.end.z=0;let x=En.closestPointToPointParameter(hd,!0);En.at(x,s0);let g=Vs.lerp(Sn.z,bn.z,x),m=g>=-1&&g<=1,v=hd.distanceTo(s0)<gr*.5;if(m&&v){En.start.fromBufferAttribute(l,h),En.end.fromBufferAttribute(c,h),En.start.applyMatrix4(o),En.end.applyMatrix4(o);let M=new P,y=new P;Gi.distanceSqToSegment(En.start,En.end,y,M),t.push({point:y,pointOnLine:M,distance:Gi.origin.distanceTo(y),object:i,face:null,faceIndex:h,uv:null,uv1:null})}}}var Ws=class extends ft{constructor(e=new bi,t=new ki({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)n0.fromBufferAttribute(t,o),i0.fromBufferAttribute(n,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+n0.distanceTo(i0);let r=new Us(s,2,1);return e.setAttribute("instanceDistanceStart",new An(r,1,0)),e.setAttribute("instanceDistanceEnd",new An(r,1,1)),this}raycast(e,t){let n=this.material.worldUnits,s=e.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Gi=e.ray;let o=this.matrixWorld,a=this.geometry,l=this.material;gr=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Su.copy(a.boundingSphere).applyMatrix4(o);let c;if(n)c=gr*.5;else{let f=Math.max(s.near,Su.distanceToPoint(Gi.origin));c=r0(s,f,l.resolution)}if(Su.radius+=c,Gi.intersectsSphere(Su)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Mu.copy(a.boundingBox).applyMatrix4(o);let u;if(n)u=gr*.5;else{let f=Math.max(s.near,Mu.distanceToPoint(Gi.origin));u=r0(s,f,l.resolution)}Mu.expandByScalar(u),Gi.intersectsBox(Mu)!==!1&&(n?HE(this,t):VE(this,s,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(ud),this.material.uniforms.resolution.value.set(ud.z,ud.w))}};var l0="blueprints.edgeMode",GE="blueprints.edgesEnabled",xr="none",_r="transparent",Ka="opaque",WE=20,c0=2.5,u0=0,Eu=35e-5,pd=2e-6;function XE(i){let t=(Array.isArray(i?.material)?i.material[0]:i?.material)?.userData?.layerDepthBias??0;return(Number(t)+1)*pd}var Za=1,h0=3,qE=.0012,YE=.0036,$E=.02,ZE=.0035,o0=.012;function a0(i){return i===xr||i===_r||i===Ka?i:i==="1"||i==="true"?_r:i==="0"||i==="false"?xr:null}function f0(){try{let i=a0(localStorage.getItem(l0));if(i)return i;let e=a0(localStorage.getItem(GE));if(e)return gd(e),e}catch{}return _r}function gd(i){try{localStorage.setItem(l0,i)}catch{}}function Nn(i){return!!(i&&i.userData&&i.userData.isEdgeOverlay)}function d0(i){let e=i?.getAttribute?.("position");if(!e||!e.count)return new Float32Array(0);let t=new da(i,WE),n=t.getAttribute("position"),s=n&&n.array?n.array instanceof Float32Array?n.array.slice():Float32Array.from(n.array):new Float32Array(0);return t.dispose(),s}function KE(i,e){if(!e.length)return i;if(!i.length)return e;let t=new Float32Array(i.length+e.length);return t.set(i,0),t.set(e,i.length),t}var bu=new P;function p0(i){let e=[];for(let t=0;t+5<i.length;t+=6){let n=i[t],s=i[t+1],r=i[t+2],o=i[t+3],a=i[t+4],l=i[t+5],c=o-n,u=a-s,f=l-r,h=Math.hypot(c,u,f);h<1e-6||e.push({ax:n,ay:s,az:r,bx:o,by:a,bz:l,dx:c/h,dy:u/h,dz:f/h,len:h})}return e}function JE(i,e,t,n,s,r){let o=d=>Math.round(d/5e-4),a=o(i),l=o(e),c=o(t),u=o(n),f=o(s),h=o(r);if(a>u||a===u&&l>f||a===u&&l===f&&c>h){let d=a;a=u,u=d;let p=l;l=f,f=p;let x=c;c=h,h=x}return`${a},${l},${c},${u},${f},${h}`}function m0(i){let e=p0(i),t=[],n=new Set;for(let s=0;s<e.length;s++){let r=e[s];for(let o=s+1;o<e.length;o++){let a=e[o];if(Math.abs(r.dx*a.dx+r.dy*a.dy+r.dz*a.dz)<.985)continue;let c=r.ax-a.ax,u=r.ay-a.ay,f=r.az-a.az,h=c*r.dx+u*r.dy+f*r.dz,d=c-h*r.dx,p=u-h*r.dy,x=f-h*r.dz,g=Math.hypot(d,p,x);if(g<qE||g>YE)continue;let m=(a.ax-r.ax)*r.dx+(a.ay-r.ay)*r.dy+(a.az-r.az)*r.dz,v=(a.bx-r.ax)*r.dx+(a.by-r.ay)*r.dy+(a.bz-r.az)*r.dz,M=Math.max(0,Math.min(m,v)),y=Math.min(r.len,Math.max(m,v));if(y-M<$E)continue;let E=-d/g*(g*.5),w=-p/g*(g*.5),_=-x/g*(g*.5),b=r.ax+r.dx*M+E,D=r.ay+r.dy*M+w,L=r.az+r.dz*M+_,O=r.ax+r.dx*y+E,V=r.ay+r.dy*y+w,B=r.az+r.dz*y+_,I=JE(b,D,L,O,V,B);n.has(I)||(n.add(I),t.push(b,D,L,O,V,B))}}return new Float32Array(t)}function jE(i){let e=i.getAttribute("position"),t=i.getIndex(),n=0,s=0,r=0,o=t?t.count:e.count,a=c=>{let u=t?t.getX(c):c;return[e.getX(u),e.getY(u),e.getZ(u)]};for(let c=0;c+2<o;c+=3){let u=a(c),f=a(c+1),h=a(c+2),d=f[0]-u[0],p=f[1]-u[1],x=f[2]-u[2],g=h[0]-u[0],m=h[1]-u[1],v=h[2]-u[2];n+=p*v-x*m,s+=x*g-d*v,r+=d*m-p*g}let l=Math.hypot(n,s,r)||1;return{x:n/l,y:s/l,z:r/l}}function QE(i,e){let t=i.getAttribute("position"),n,s,r;Math.abs(e.z)<.9?(n=-e.y,s=e.x,r=0):(n=0,s=-e.z,r=e.y);let o=Math.hypot(n,s,r)||1;n/=o,s/=o,r/=o;let a=e.y*r-e.z*s,l=e.z*n-e.x*r,c=e.x*s-e.y*n,u=1/0,f=-1/0,h=1/0,d=-1/0;for(let p=0;p<t.count;p++){let x=t.getX(p),g=t.getY(p),m=t.getZ(p),v=x*n+g*s+m*r,M=x*a+g*l+m*c;v<u&&(u=v),v>f&&(f=v),M<h&&(h=M),M>d&&(d=M)}return Math.min(f-u,d-h)}function ew(i){let e=i.getAttribute("position");if(!e||e.count<3)return!1;let t=jE(i),n=QE(i,t);return t.z>.5?n>o0:t.z<-.5||(i.boundingBox||i.computeBoundingBox(),i.boundingBox.max.z-i.boundingBox.min.z<.05)?!1:n>o0}function g0(i,e){i.updateWorldMatrix(!0,!1);let t=i.matrixWorld,n=new Float32Array(e.length);for(let s=0;s<e.length;s+=3)bu.set(e[s],e[s+1],e[s+2]).applyMatrix4(t),n[s]=bu.x,n[s+1]=bu.y,n[s+2]=bu.z;return n}function tw(i,e,t){if(!t||t.length<6)return i;let n=g0(e,i),s=p0(t),r=[];for(let o=0;o+5<i.length;o+=6){let a=n[o],l=n[o+1],c=n[o+2],u=n[o+3],f=n[o+4],h=n[o+5],d=u-a,p=f-l,x=h-c,g=Math.hypot(d,p,x);if(g<1e-6)continue;let m=d/g,v=p/g,M=x/g,y=!1;for(let E of s){if(Math.abs(m*E.dx+v*E.dy+M*E.dz)<.95)continue;let _=a-E.ax,b=l-E.ay,D=c-E.az,L=_*E.dx+b*E.dy+D*E.dz,O=_-L*E.dx,V=b-L*E.dy,B=D-L*E.dz;if(Math.hypot(O,V,B)>ZE)continue;let I=(a-E.ax)*E.dx+(l-E.ay)*E.dy+(c-E.az)*E.dz,G=(u-E.ax)*E.dx+(f-E.ay)*E.dy+(h-E.az)*E.dz,Y=Math.min(I,G),H=Math.max(I,G);if(Math.min(H,E.len)-Math.max(Y,0)>.01){y=!0;break}}y||r.push(i[o],i[o+1],i[o+2],i[o+3],i[o+4],i[o+5])}return new Float32Array(r)}function nw(i,e){if(!i)return;let t=Math.max(0,Math.min(1,Number(e)||0));t<1?(i.transparent=!0,i.opacity=t,i.depthWrite=!1):(i.transparent=!1,i.opacity=1),i.needsUpdate=!0}function iw(i){if(!i?.visible)return 0;let e=Array.isArray(i.material)?i.material[0]:i.material;return e&&e.transparent&&typeof e.opacity=="number"?e.opacity:1}function sw(i,e=_r){return e===xr?0:e===Ka?i?.visible===!1?0:1:iw(i)}function md(i,e,t=1,n=pd){let s=Math.max(0,Math.min(1,Number(t)||0)),r=Number.isFinite(n)?n:pd,o=new ki({color:u0,linewidth:c0,worldUnits:!1,toneMapped:!1,depthTest:!0,depthWrite:!1,transparent:s<1,opacity:s<1?s:1,clippingPlanes:i,clipIntersection:!1});return o.onBeforeCompile=a=>{a.vertexShader=a.vertexShader.replace(`vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );`,`vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );
			start.z += ${Eu};
			end.z += ${Eu};`),a.fragmentShader=a.fragmentShader.replace("#include <logdepthbuf_fragment>",`#include <logdepthbuf_fragment>
			#if defined( USE_LOGDEPTHBUF )
				gl_FragDepth -= ${r};
			#else
				gl_FragDepth = gl_FragCoord.z - ${r};
			#endif`)},o.customProgramCacheKey=()=>`bp-edge-depth-bias-r${h0}-${r}-${Eu}`,e&&o.resolution.set(e.x,e.y),o}function x0(i,e,t,n){let s=Math.max(0,Math.min(1,Number(e)||0)),r=md(t,null,s);r.depthTest=!1,r.depthWrite=!1,r.transparent=!0,r.opacity=s;let o=r.onBeforeCompile?.bind(r),a=r.customProgramCacheKey?.bind(r);r.customProgramCacheKey=()=>`${a?a():"edge"}|peelEdge1`,r.onBeforeCompile=(u,f)=>{o?.(u,f),u.uniforms.uPeelStage=n.stage,u.uniforms.tPrevViewZ=n.prevZ,u.uniforms.tPeelViewZ=n.peelZ,u.uniforms.tOpaqueViewZ=n.opaqueZ,u.uniforms.uViewZEps=n.eps,u.uniforms.uBpPeelRes=n.resolution,u.vertexShader=u.vertexShader.replace("void main() {",`varying float vBpEdgeViewZ;
void main() {`),u.vertexShader=u.vertexShader.replace("vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation",`vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation
			vBpEdgeViewZ = -mvPosition.z;`),u.fragmentShader=u.fragmentShader.replace("void main() {",`uniform float uPeelStage;
			uniform sampler2D tPrevViewZ;
			uniform sampler2D tPeelViewZ;
			uniform sampler2D tOpaqueViewZ;
			uniform float uViewZEps;
			uniform vec2 uBpPeelRes;
			varying float vBpEdgeViewZ;
			void main() {`),u.fragmentShader=u.fragmentShader.replace("gl_FragColor = vec4( diffuseColor.rgb, alpha );",`if (uPeelStage > 0.5) {
				vec2 peelUv = gl_FragCoord.xy / uBpPeelRes;
				float opaqueZ = texture2D(tOpaqueViewZ, peelUv).r;
				float prevZ = texture2D(tPrevViewZ, peelUv).r;
				float edgeZ = vBpEdgeViewZ;
				float eps = max(uViewZEps, 1e-3 * max(edgeZ, 1.0));
				if (opaqueZ > 1e-4 && edgeZ >= opaqueZ - eps) discard;
				if (edgeZ <= prevZ + eps) discard;
				if (uPeelStage >= 1.5) {
					float peelZ = texture2D(tPeelViewZ, peelUv).r;
					if (peelZ > 50000.0) discard;
					float peelEps = max(uViewZEps, 1e-2 * max(peelZ, 1.0));
					if (edgeZ > peelZ + peelEps) discard;
				}
			}
			gl_FragColor = vec4( diffuseColor.rgb, alpha );`)},r.needsUpdate=!0;let l=new bi;l.setPositions(i);let c=new Ws(l,r);return c.frustumCulled=!1,c.matrixAutoUpdate=!1,c.renderOrder=1e3,c.raycast=()=>{},c.userData.isPeeledEdgeBatch=!0,c}function wu(i){if(!i)return;i.parent?.remove(i),i.geometry?.dispose?.();let e=i.material;if(Array.isArray(e))for(let t of e)t?.dispose?.();else e?.dispose?.()}function _0(i){if(!i)return;let e=[];i.traverse(t=>{Nn(t)&&e.push(t)});for(let t of e)wu(t)}function Xs(i,e){i&&i.traverse(t=>{Nn(t)&&(t.visible=e)})}function y0(i,e,t){if(!i)return;let n=Math.max(1,e),s=Math.max(1,t);i.traverse(r=>{if(!Nn(r)||!r.material)return;let o=Array.isArray(r.material)?r.material:[r.material];for(let a of o)a?.resolution&&a.resolution.set(n,s)})}function xd(i,e){if(!i)return;let t=e||[];i.traverse(n=>{if(!Nn(n)||!n.material)return;let s=Array.isArray(n.material)?n.material:[n.material];for(let r of s){if(!r)continue;let o=r.clippingPlanes?r.clippingPlanes.length:0;r.clippingPlanes=t,r.clipIntersection=!1,o!==t.length&&(r.needsUpdate=!0)}})}function rw(i,e,t){let n=i.userData.bpHardEdgePositions;return n instanceof Float32Array||(n=d0(i.geometry),i.userData.bpHardEdgePositions=n),e==="grout"?m0(n):e==="tile"||e==="floor_tile"||e==="wall_tile"?ew(i.geometry)?tw(n,i,t):new Float32Array(0):n}function ow(i,e,t,n,s){i.updateWorldMatrix(!0,!1);let r=rw(i,n,s),o=Tu(t,i.matrixWorld),a=M0(i.geometry,o),l=KE(r,a),c=new bi,u=e.geometry;l.length>=6?(c.setPositions(l),e.geometry=c,e.computeLineDistances()):e.geometry=c,u?.dispose?.()}function aw(i){let e=[],t=i.get("grout")||[];for(let n of t){if(!n||!n.isMesh||!n.geometry)continue;let s=n.userData.bpHardEdgePositions;s instanceof Float32Array||(s=d0(n.geometry),n.userData.bpHardEdgePositions=s);let r=m0(s);if(r.length<6)continue;let o=g0(n,r);for(let a=0;a<o.length;a++)e.push(o[a])}return new Float32Array(e)}function v0(i,e,t={}){let n=t.clippingPlanes??[],s=t.resolution||null,r=t.edgeMode??_r,o=e?aw(i):new Float32Array(0);for(let[a,l]of i)for(let c of l){if(!c||!c.isMesh||!c.geometry||Nn(c))continue;let u=null;for(let d of c.children)if(Nn(d)){u=d;break}if(!e){u&&wu(u);continue}u&&!u.isLineSegments2&&(wu(u),u=null);let f=sw(c,r),h=XE(c);if(u){let d=u.material,p=d?.customProgramCacheKey?.(),x=`bp-edge-depth-bias-r${h0}-${h}-${Eu}`;if(!d||typeof d.customProgramCacheKey!="function"||p!==x){wu(u);let g=md(n,s,f,h),m=new bi;u=new Ws(m,g),u.name=`${a}__edges`,u.userData.isEdgeOverlay=!0,u.userData.edgeLabel=a,u.raycast=()=>{},u.renderOrder=1e3,u.layers.set(Za),c.add(u)}else d.color&&d.color.setHex(u0),typeof d.linewidth=="number"&&(d.linewidth=c0),d.clippingPlanes=n,d.clipIntersection=!1,s&&d.resolution&&d.resolution.set(s.x,s.y),nw(d,f),d.needsUpdate=!0}else{let d=md(n,s,f,h),p=new bi;u=new Ws(p,d),u.name=`${a}__edges`,u.userData.isEdgeOverlay=!0,u.userData.edgeLabel=a,u.raycast=()=>{},u.renderOrder=1e3,u.layers.set(Za),c.add(u)}u.layers.set(Za),ow(c,u,n,a,o)}}function lw(i){if(!i.isMesh||Nn(i))return!1;let e=Array.isArray(i.material)?i.material[0]:i.material;return!!(e&&e.transparent&&e.opacity<1-1e-4)}function _d(i,e,t,n,s={}){if(!n)return;let r=!!s.reuseDepth,o=!1;if(n.traverse(x=>{Nn(x)&&(o=!0)}),!o){dd(i);return}let a=i.autoClear,l=e.background,c=e.overrideMaterial,u=t.layers.mask;if(e.background=null,i.autoClear=!1,r){Xs(n,!0),t.layers.set(Za),i.render(e,t),t.layers.mask=u,e.background=l,e.overrideMaterial=c,i.autoClear=a,dd(i);return}Xs(n,!1);let f=[];n.traverse(x=>{!lw(x)||x.visible===!1||(f.push(x),x.visible=!1)});let h=[],d=new Set;e.traverse(x=>{if(!x.isMesh||Nn(x)||x.visible===!1)return;let g=Array.isArray(x.material)?x.material:[x.material];for(let m of g)!m||d.has(m)||(d.add(m),h.push({mat:m,colorWrite:m.colorWrite!==!1,depthWrite:m.depthWrite!==!1}),m.colorWrite=!1,m.depthWrite=!0)}),e.overrideMaterial=null,i.clearDepth();try{i.render(e,t)}finally{for(let x of h)x.mat.colorWrite=x.colorWrite,x.mat.depthWrite=x.depthWrite;for(let x of f)x.visible=!0}Xs(n,!0);let p=[];s.opaqueEdgesOnly&&n.traverse(x=>{if(!Nn(x))return;let g=Array.isArray(x.material)?x.material[0]:x.material;g&&g.transparent&&g.opacity<1-1e-4&&(p.push(x),x.visible=!1)}),t.layers.set(Za);try{i.render(e,t)}finally{for(let x of p)x.visible=!0}t.layers.mask=u,e.background=l,e.overrideMaterial=c,i.autoClear=a,dd(i)}function dd(i){i.state.buffers.color.setMask(!0),i.state.buffers.depth.setMask(!0)}var S0=!0,b0=5,Md=12,cw=Md,w0=.001,uw=.5,hw=1;function E0(i){let e=String(i.length);for(let t of i){let n=Array.isArray(t.material)?"m":t.material?.id??0;e+=`|${t.id}:${n}:${t.geometry?.id??0}`;let s=t.children;if(s)for(let r=0;r<s.length;r++){let o=s[r];o?.userData?.isEdgeOverlay&&(e+=`>${o.id}:${o.geometry?.id??0}`)}}return e}var Au=1e5,Ei={value:0},Zt={tPrevViewZ:{value:null},tPeelViewZ:{value:null},tOpaqueViewZ:{value:null},uViewZEps:{value:w0},uResolution:{value:new ke(1,1)}};function yd(i){let e=i?.userData?.shader;if(!e?.uniforms)return;let t=e.uniforms;t.uPeelStage&&(t.uPeelStage.value=Ei.value),t.tPrevViewZ&&(t.tPrevViewZ.value=Zt.tPrevViewZ.value),t.tPeelViewZ&&(t.tPeelViewZ.value=Zt.tPeelViewZ.value),t.tOpaqueViewZ&&(t.tOpaqueViewZ.value=Zt.tOpaqueViewZ.value),t.uViewZEps&&(t.uViewZEps.value=Zt.uViewZEps.value),t.uResolution&&t.uResolution.value.copy(Zt.uResolution.value)}function Ja(i){if(!i||i.userData.depthPeelPatched)return;i.userData.depthPeelPatched=!0;let e=i.customProgramCacheKey?.bind(i);i.customProgramCacheKey=()=>`${e?e():i.type}|depthPeel11|${i.defines?.USE_BP_PEEL?1:0}`;let t=i.onBeforeCompile?.bind(i);i.onBeforeCompile=(n,s)=>{t?.(n,s),n.uniforms.uPeelStage=Ei,n.uniforms.tPrevViewZ=Zt.tPrevViewZ,n.uniforms.tPeelViewZ=Zt.tPeelViewZ,n.uniforms.tOpaqueViewZ=Zt.tOpaqueViewZ,n.uniforms.uViewZEps=Zt.uViewZEps,n.uniforms.uResolution=Zt.uResolution,i.userData.shader=n,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
#ifdef USE_BP_PEEL
varying float vPeelViewZ;
#endif`),n.vertexShader=n.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
#ifdef USE_BP_PEEL
	vPeelViewZ = -mvPosition.z;
#endif`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
#ifdef USE_BP_PEEL
uniform float uPeelStage;
uniform sampler2D tPrevViewZ;
uniform sampler2D tPeelViewZ;
uniform sampler2D tOpaqueViewZ;
uniform float uViewZEps;
uniform vec2 uResolution;
varying float vPeelViewZ;
#endif`);let r=`
#ifdef USE_BP_PEEL
	if (uPeelStage > 0.5) {
		vec2 peelUv = gl_FragCoord.xy / uResolution;
		float opaqueZ = texture2D(tOpaqueViewZ, peelUv).r;
		float prevZ = texture2D(tPrevViewZ, peelUv).r;
		float eps = max(uViewZEps, 1e-3 * max(vPeelViewZ, 1.0));
		if (opaqueZ > 1e-4 && vPeelViewZ >= opaqueZ - eps) discard;
		if (vPeelViewZ <= prevZ + eps) discard;
		if (uPeelStage >= 1.5) {
			float peelZ = texture2D(tPeelViewZ, peelUv).r;
			if (peelZ > ${(Au*.5).toFixed(1)}) discard;
			float peelEps = max(uViewZEps, 1e-3 * max(peelZ, 1.0));
			if (vPeelViewZ > peelZ + peelEps) discard;
		}
	}
#endif`,o="#include <alphahash_fragment>";n.fragmentShader.includes(o)&&(n.fragmentShader=n.fragmentShader.replace(o,`${o}
${r}`)),n.fragmentShader=n.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
#ifdef USE_BP_PEEL
	if (uPeelStage > 0.5 && uPeelStage < 1.5) {
		gl_FragColor = vec4(vPeelViewZ, 0.0, 0.0, 1.0);
	}
#endif`)},i.needsUpdate=!0}function vd(i,e){for(let t of i){if(!t)continue;let n=!!(t.defines&&Object.prototype.hasOwnProperty.call(t.defines,"USE_BP_PEEL"));e!==n&&(t.defines||(t.defines={}),e?t.defines.USE_BP_PEEL="1":delete t.defines.USE_BP_PEEL,t.needsUpdate=!0)}}function T0(i){let e=new ke,t=new We,n=null,s=null,r=null,o=null,a=null,l=null,c=new _i(-1,1,1,-1,0,1),u=new zn,f=new mn({uniforms:{tOpaque:{value:null},tAccum:{value:null},uBackground:{value:new We(1118481)}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      uniform sampler2D tOpaque;
      uniform sampler2D tAccum;
      uniform vec3 uBackground;
      varying vec2 vUv;
      void main() {
        vec4 opaque = texture2D(tOpaque, vUv);
        vec4 accum = texture2D(tAccum, vUv);
        vec3 base = mix(uBackground, opaque.rgb, opaque.a > 0.001 ? 1.0 : 0.0);
        vec3 color = accum.rgb + (1.0 - accum.a) * base;
        gl_FragColor = vec4(color, 1.0);
      }
    `,depthTest:!1,depthWrite:!1,toneMapped:!1}),h=new ft(new ni(2,2),f);u.add(h);let d=new mn({uniforms:{tSrc:{value:null}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      uniform sampler2D tSrc;
      varying vec2 vUv;
      void main() {
        vec4 c = texture2D(tSrc, vUv);
        // Colour pass uses NormalBlending into a cleared target, so rgb is
        // already premultiplied. Multiplying by alpha again crushes the tint
        // (a 0.35 wash of the mineral wool landed as muddy grey on the plate).
        gl_FragColor = vec4(c.rgb, c.a);
      }
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:gc,blendSrc:Pa,blendDst:ks,blendSrcAlpha:Pa,blendDstAlpha:ks,blendEquation:yi}),p=new ft(new ni(2,2),d),x=new zn;x.add(p);let g=new mn({uniforms:{uValue:{value:0}},vertexShader:`
      void main() {
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      uniform float uValue;
      void main() {
        gl_FragColor = vec4(uValue, 0.0, 0.0, 1.0);
      }
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:ii}),m=new ft(new ni(2,2),g),v=new zn;v.add(m);let M=new mn({vertexShader:`
      void main() {
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      void main() {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
      }
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:ii}),y=new ft(new ni(2,2),M),E=new zn;E.add(y);function w(){i.state.buffers.color.setMask(!0),i.state.buffers.depth.setMask(!0)}function _(T){w();let ee=i.autoClear;i.setRenderTarget(T),i.autoClear=!1,i.render(E,c),i.autoClear=ee}let b=new mn({vertexShader:`
      #include <common>
      #include <batching_pars_vertex>
      #include <uv_pars_vertex>
      #include <displacementmap_pars_vertex>
      #include <morphtarget_pars_vertex>
      #include <skinning_pars_vertex>
      #include <clipping_planes_pars_vertex>
      varying float vViewZ;
      void main() {
        #include <uv_vertex>
        #include <batching_vertex>
        #include <skinbase_vertex>
        #include <begin_vertex>
        #include <morphtarget_vertex>
        #include <skinning_vertex>
        #include <displacementmap_vertex>
        #include <project_vertex>
        #include <clipping_planes_vertex>
        vViewZ = -mvPosition.z;
      }
    `,fragmentShader:`
      #include <common>
      #include <clipping_planes_pars_fragment>
      varying float vViewZ;
      void main() {
        #include <clipping_planes_fragment>
        gl_FragColor = vec4(vViewZ, 0.0, 0.0, 1.0);
      }
    `,depthTest:!0,depthWrite:!0,toneMapped:!1,side:Ct,clipping:!0,blending:ii});function D(T,ee,ne={}){g.uniforms.uValue.value=ee;let Se=i.autoClear;w(),i.setRenderTarget(T),ne.clearDepth&&(i.setClearColor(0,1),i.clear(!1,!0,!1)),i.autoClear=!1,i.render(v,c),i.autoClear=Se}function L(){n?.dispose(),s?.dispose(),r?.dispose(),o?.dispose(),a?.dispose(),l?.dispose(),n=null,s=null,r=null,o=null,a=null,l=null}let O=0;function V(T,ee,ne){let Se=Math.max(1,Math.floor(T)),q=Math.max(1,Math.floor(ee)),_e=Math.min(1,Math.max(.25,ne)),ge=Math.max(1,Math.floor(Se*_e)),Ee=Math.max(1,Math.floor(q*_e));if(n&&n.width===Se&&n.height===q&&r&&r.width===ge&&r.height===Ee&&O===_e)return;L(),O=_e,n=new nn(Se,q,{format:vn,type:Pn,colorSpace:St,depthBuffer:!0,stencilBuffer:!1});let C={format:vn,type:kn,depthBuffer:!0,stencilBuffer:!1,magFilter:Ht,minFilter:Ht};s=new nn(ge,Ee,C),r=new nn(ge,Ee,C),o=new nn(ge,Ee,C),a=new nn(ge,Ee,{format:vn,type:Xn,colorSpace:St,depthBuffer:!1,stencilBuffer:!1,magFilter:Vt,minFilter:Vt}),l=new nn(ge,Ee,{format:vn,type:Xn,colorSpace:St,depthBuffer:!1,stencilBuffer:!1,magFilter:Vt,minFilter:Vt}),f.uniforms.tOpaque.value=n.texture,f.uniforms.tAccum.value=a.texture,Zt.tOpaqueViewZ.value=s.texture,Zt.uResolution.value.set(ge,Ee)}function B(T){let ee=[],ne=[];return T?(T.traverse(Se=>{if(!Se.isMesh||!Se.visible||Nn(Se))return;let q=Se,_e=Array.isArray(q.material)?q.material:[q.material],ge=!1;for(let Ee of _e)if(Ee&&Ee.transparent&&Ee.opacity<1-1e-4){ge=!0;break}ge?ne.push(q):ee.push(q)}),{opaque:ee,transparent:ne}):{opaque:ee,transparent:ne}}function I(T,ee){for(let ne of T)ne.visible=ee}function G(T,ee){T.blending=ee.blending,T.blendSrc=ee.blendSrc,T.blendDst=ee.blendDst,T.blendSrcAlpha=ee.blendSrcAlpha,T.blendDstAlpha=ee.blendDstAlpha,T.blendEquation=ee.blendEquation,T.blendEquationAlpha=ee.blendEquation}let Y={meshes:[],sources:[],key:""},H={meshes:[],sources:[],key:""},me="",Z="",k=new zn,J=new zn,ce=new zn,j=[];function U(T){for(let ee of T.meshes)ee.geometry.dispose();T.meshes=[],T.sources=[],T.key=""}function ve(){for(let T of j){ce.remove(T),T.geometry?.dispose?.();let ee=T.material;if(Array.isArray(ee))for(let ne of ee)ne?.dispose?.();else ee?.dispose?.()}j=[]}function ue(){U(Y),U(H),ve(),me="",Z=""}function de(T){if(ve(),!T.length)return;let ee=new Map,ne=new P;for(let q of T){let _e=null;for(let xe of q.children)if(Nn(xe)){_e=xe;break}if(!_e?.geometry)continue;let ge=_e.material,Ee=ge&&ge.transparent&&typeof ge.opacity=="number"?ge.opacity:1;if(!(Ee<1-1e-4))continue;let C=_e.geometry.getAttribute("instanceStart"),S=_e.geometry.getAttribute("instanceEnd");if(!C||!S||!C.count)continue;let W=Ee.toFixed(3),ye=ee.get(W);ye||(ye={opacity:Ee,planes:ge.clippingPlanes||[],chunks:[]},ee.set(W,ye)),q.updateWorldMatrix(!0,!1);let he=C.count,re=new Float32Array(he*6);for(let xe=0;xe<he;xe++)ne.fromBufferAttribute(C,xe).applyMatrix4(q.matrixWorld),re[xe*6]=ne.x,re[xe*6+1]=ne.y,re[xe*6+2]=ne.z,ne.fromBufferAttribute(S,xe).applyMatrix4(q.matrixWorld),re[xe*6+3]=ne.x,re[xe*6+4]=ne.y,re[xe*6+5]=ne.z;ye.chunks.push(re)}let Se={stage:Ei,prevZ:Zt.tPrevViewZ,peelZ:Zt.tPeelViewZ,opaqueZ:Zt.tOpaqueViewZ,eps:Zt.uViewZEps,resolution:Zt.uResolution};for(let q of ee.values()){let _e=0;for(let S of q.chunks)_e+=S.length;if(_e<6)continue;let ge=new Float32Array(_e),Ee=0;for(let S of q.chunks)ge.set(S,Ee),Ee+=S.length;let C=x0(ge,q.opacity,q.planes,Se);ce.add(C),j.push(C)}}function fe(T,ee,ne,Se){if(!ne.length)return;let q=`${E0(ne)}#${E0(ee)}`;Se&&Se===me&&q===Z&&Y.meshes.length||(Ne(Y,T,ne),Ne(H,T,ee),Y.sources.length===ne.length&&H.sources.length===ee.length&&(de(ne),me=Se||"",Z=q))}function be(T){return Object.keys(T.attributes).sort().join(",")}function Xe(T){let ee=T.geometry,ne=ee.index?ee.toNonIndexed():ee.clone();return ne.applyMatrix4(T.matrixWorld),ne}function Ne(T,ee,ne){let Se=String(ne.length);for(let _e of ne){let ge=Array.isArray(_e.material)?"m":_e.material?.id||0;Se+=`.${_e.id}:${ge}`}if(Se===T.key)return;ee.updateWorldMatrix(!0,!0),U(T),T.key=Se;let q=new Map;for(let _e of ne){if(!_e.geometry||Array.isArray(_e.material)||!_e.material)continue;let ge=`${_e.material.uuid}:${be(_e.geometry)}`,Ee=q.get(ge);Ee||(Ee={mat:_e.material,meshes:[]},q.set(ge,Ee)),Ee.meshes.push(_e)}for(let _e of q.values()){let ge=[];try{for(let S of _e.meshes)ge.push(Xe(S));let Ee=xg(ge,!1);if(!Ee)continue;let C=new ft(Ee,_e.mat);C.frustumCulled=!1,C.matrixAutoUpdate=!1,C.renderOrder=0,C.userData.isPeelBatch=!0,T.meshes.push(C),T.sources.push(..._e.meshes)}catch{}finally{for(let Ee of ge)Ee.dispose()}}}function ze(T,ee,ne,Se){if(!T.meshes.length||T.sources.length!==ee.length)return i.render(ne,Se),!1;k.environment=ne.environment,k.environmentIntensity=ne.environmentIntensity,k.fog=ne.fog;let q=[];for(let _e of ne.children)_e.isLight&&q.push(_e);for(let _e of q)k.add(_e);for(let _e of T.meshes)k.add(_e);i.render(k,Se);for(let _e of T.meshes)k.remove(_e);for(let _e of q)ne.add(_e);return!0}function Ue(T,ee,ne){ze(Y,ne,T,ee)}function qe(T,ee,ne){ne.length&&ze(H,ne,T,ee)}function ht(T,ee,ne){if(!H.meshes.length||H.sources.length!==ee.length)return!1;J.overrideMaterial=ne;for(let Se of H.meshes)J.add(Se);i.render(J,T),J.overrideMaterial=null;for(let Se of H.meshes)J.remove(Se);return!0}function lt(T){let ee=new Set;for(let ne of T){let Se=Array.isArray(ne.material)?ne.material:[ne.material];for(let q of Se)q&&ee.add(q)}return[...ee]}function xt(T,ee,ne){if(!ne)return;let Se=ne.visible,q=T.background,_e=i.autoClear;ne.visible=!1,T.background=null,i.autoClear=!1,w(),i.clearDepth(),i.render(T,ee),ne.visible=Se,T.background=q,i.autoClear=_e}function rt(T){return T.children.filter(ee=>ee.userData?.blueprintAnnotations)}function Pt(T,ee){for(let ne of T)ne.visible=ee}function le(T,ee,ne){rt(T).some(Se=>Se.visible)&&xt(T,ee,ne)}function je(T,ee,ne,Se={}){Xs(ne,!1);let q=rt(T),_e=q.map(ge=>ge.visible);Pt(q,!1),i.setRenderTarget(null),i.autoClear=!0,i.render(T,ee),Se.skipEdges||_d(i,T,ee,ne,{reuseDepth:!!Se.reuseDepth}),q.forEach((ge,Ee)=>{ge.visible=_e[Ee]}),le(T,ee,ne)}function Qe(T,ee,ne,Se,q={}){if(!(S0&&(typeof Se=="function"?Se():!!Se)))return Ei.value=0,je(T,ee,ne,{reuseDepth:!0}),!1;if(q.quality!=="high"){Ei.value=0,je(T,ee,ne,{reuseDepth:!0});let X=q.batchKey||"";if(ne&&!q.deferPrime&&X!==me){let Ce=B(ne);fe(ne,Ce.opaque,Ce.transparent,X)}return!0}let{opaque:ge,transparent:Ee}=B(ne);if(!Ee.length)return Ei.value=0,je(T,ee,ne,{reuseDepth:!0}),!1;ne&&fe(ne,ge,Ee,q.batchKey||"");let C=q.quality==="high",S=C?hw:uw,W=C?Md:b0;i.getDrawingBufferSize(e),V(e.x,e.y,S);let ye=i.autoClear,he=i.toneMapping,re=T.background;re instanceof We?t.copy(re):t.set(1118481),f.uniforms.uBackground.value.copy(t);let xe=[];for(let X of[...ge,...Ee])xe.push({mesh:X,visible:X.visible});let ie=lt(Ee),oe=[];for(let X of ie)Ja(X),oe.push({mat:X,snap:{blending:X.blending,blendSrc:X.blendSrc,blendDst:X.blendDst,blendSrcAlpha:X.blendSrcAlpha,blendDstAlpha:X.blendDstAlpha,blendEquation:X.blendEquation,blendEquationAlpha:X.blendEquationAlpha,depthWrite:X.depthWrite,depthTest:X.depthTest,transparent:X.transparent,opacity:X.opacity,colorWrite:X.colorWrite,side:X.side,forceSinglePass:X.forceSinglePass}});vd(ie,!0);let Re=new Map;for(let X of Ee)Re.set(X,X.onBeforeRender),X.onBeforeRender=function(et,Ae,ct,Nt,Qt,Ms){let $i=Array.isArray(Qt)?Qt:[Qt];for(let ci of $i)ci&&yd(ci);let Zi=Re.get(X);typeof Zi=="function"&&Zi.call(this,et,Ae,ct,Nt,Qt,Ms)};let N=null;for(let X of ie)if(X.clippingPlanes?.length){N=X.clippingPlanes;break}if(!N)for(let X of ge){let Ce=Array.isArray(X.material)?X.material:[X.material];for(let et of Ce)if(et?.clippingPlanes?.length){N=et.clippingPlanes;break}if(N)break}b.clippingPlanes=N||[],b.clipIntersection=!1,T.background=null,i.autoClear=!0,Ei.value=0;let pe=[];for(let X of T.children)X!==ne&&(X.isLight||(pe.push({obj:X,visible:X.visible}),X.visible=!1));function ae(){for(let[X,Ce]of Re)X.onBeforeRender=Ce}function Ie(){for(let{mat:X,snap:Ce}of oe)G(X,Ce),X.blendEquationAlpha=Ce.blendEquationAlpha,X.depthWrite=Ce.depthWrite,X.depthTest=Ce.depthTest,X.transparent=Ce.transparent,X.opacity=Ce.opacity,X.colorWrite=Ce.colorWrite!==!1,X.side=Ce.side,X.forceSinglePass=Ce.forceSinglePass,X.needsUpdate=!0;for(let{mesh:X,visible:Ce}of xe)X.visible=Ce;for(let{obj:X,visible:Ce}of pe)X.visible=Ce;return ae(),vd(ie,!1),Ei.value=0,T.background=re,T.overrideMaterial=null,i.toneMapping=he,i.setRenderTarget(null),i.autoClear=!0,je(T,ee,ne),i.autoClear=ye,!1}if(I(Ee,!1),I(ge,!0),Xs(ne,!1),w(),i.setRenderTarget(n),i.setClearColor(0,0),i.clear(),qe(T,ee,ge),i.setRenderTarget(s),i.setClearColor(0,1),D(s,Au,{clearDepth:!0}),C){let X=new Float32Array(4);try{i.readRenderTargetPixels(s,2,2,1,1,X)}catch{X[0]=0}if(!Number.isFinite(X[0])||X[0]<Au*.5)return Ie()}let we=T.overrideMaterial;i.setRenderTarget(s),i.autoClear=!1,ht(ee,ge,b)||(T.overrideMaterial=b,i.render(T,ee),T.overrideMaterial=we),i.autoClear=!0,Zt.tOpaqueViewZ.value=s.texture,_(a),D(o,0),Zt.tPrevViewZ.value=o.texture,I(ge,!1),I(Ee,!0),Xs(ne,!1);let Pe=!1;for(let X=0;X<W;X++){Zt.tPrevViewZ.value=o.texture,Zt.tPeelViewZ.value=o.texture,Ei.value=1;for(let{mat:Ae}of oe)Ae.depthWrite=!0,Ae.depthTest=!0,Ae.colorWrite=!0,Ae.transparent=!0,Ae.forceSinglePass=!0,G(Ae,{blending:ii,blendSrc:ks,blendDst:Ra,blendSrcAlpha:ks,blendDstAlpha:Ra,blendEquation:yi}),yd(Ae);w(),i.setRenderTarget(r),i.setClearColor(0,1),i.clear(!1,!0,!1),D(r,Au),i.setRenderTarget(r),i.autoClear=!1,Ue(T,ee,Ee),i.autoClear=!0,Zt.tPeelViewZ.value=r.texture,Ei.value=2;for(let{mat:Ae}of oe)Ae.depthWrite=!1,Ae.depthTest=!1,Ae.colorWrite=!0,Ae.transparent=!0,Ae.forceSinglePass=!0,G(Ae,{blending:Ui,blendSrc:Ca,blendDst:fo,blendSrcAlpha:ks,blendDstAlpha:fo,blendEquation:yi}),yd(Ae);_(l);let Ce=i.autoClear;if(i.autoClear=!1,i.setRenderTarget(l),Ue(T,ee,Ee),i.autoClear=Ce,j.length&&l){for(let ct of j)ct.material?.resolution?.set(l.width,l.height);let Ae=ee.layers.mask;ee.layers.set(0),i.autoClear=!1,i.render(ce,ee),ee.layers.mask=Ae,i.autoClear=!0}Pe=!0,d.uniforms.tSrc.value=l.texture,i.setRenderTarget(a),i.autoClear=!1,i.render(x,c),i.autoClear=!0;let et=o;o=r,r=et}if(!Pe)return Ie();for(let{mat:X,snap:Ce}of oe)G(X,Ce),X.blendEquationAlpha=Ce.blendEquationAlpha,X.depthWrite=Ce.depthWrite,X.depthTest=Ce.depthTest,X.transparent=Ce.transparent,X.opacity=Ce.opacity,X.colorWrite=Ce.colorWrite!==!1,X.side=Ce.side,X.forceSinglePass=Ce.forceSinglePass;for(let{mesh:X,visible:Ce}of xe)X.visible=Ce;for(let{obj:X,visible:Ce}of pe)X.visible=Ce;ae(),Xs(ne,!0),vd(ie,!1),Ei.value=0,T.background=re,i.toneMapping=he,i.setRenderTarget(null),i.autoClear=!0,i.render(u,c);let Le=rt(T),Ze=Le.map(X=>X.visible);return Pt(Le,!1),C&&ne&&_d(i,T,ee,ne,{opaqueEdgesOnly:j.length>0}),Le.forEach((X,Ce)=>{X.visible=Ze[Ce]}),le(T,ee,ne),i.autoClear=ye,!0}function Me(){ue(),L(),f.dispose(),h.geometry.dispose(),d.dispose(),p.geometry.dispose(),g.dispose(),m.geometry.dispose(),M.dispose(),y.geometry.dispose(),b.dispose()}return{render:Qe,dispose:Me,MAX_PEELS:cw,MAX_PEELS_FAST:b0,MAX_PEELS_HIGH:Md,VIEW_Z_EPSILON:w0,USE_DEPTH_PEEL:S0}}var R0="blueprints.materialMode",Ru="solid",ja="realistic",fw={floor:[230,115,20],eps:[70,230,25],masonry:[225,70,40],column:[225,70,40],venec:[200,55,35],plaster:[255,225,120],furniture:[255,150,0],cabinet:[214,148,40],appliance:[176,190,205],sink:[40,185,195],rug:[150,70,175],light:[255,210,40],door:[210,140,70],wall_plate:[200,85,10],pocket_frame:[235,185,80],wall_gkf:[230,230,235],rafters:[200,85,10],plenum_wool:[0,210,155],racking_strap:[70,70,80],tie_rod:[35,38,44],slope_light:[28,28,30],roofing:[235,15,15],glazing:[140,210,255],slope_naturheld_140:[15,85,245],slope_gkf:[230,230,235],slope_cd:[120,120,130],slope_nonius:[90,90,100],soffit_naturheld_140:[15,85,245],soffit_mineral_wool:[0,210,155],soffit_ud:[120,120,130],soffit_gkf:[230,230,235],soffit_cd:[120,120,130],soffit_nonius:[90,90,100],soffit_duct:[168,176,188],bass_mineral_wool:[0,210,155],bass_gkb:[230,230,235],bass_cd:[120,120,130],bass_wall_hanger:[90,90,100],tile:[222,205,176],grout:[48,46,44],drain:[176,184,190],fixture:[236,236,232],prewall:[196,184,168],screen:[170,210,220],profile:[190,196,200],vanity:[186,140,90]},dw={floor:0,eps:1,masonry:2,column:2,venec:2,plaster:3,pocket_frame:4,wall_gkf:4,bass_gkb:4,slope_gkf:4,soffit_gkf:4,furniture:6,cabinet:6,appliance:7,sink:7,rug:1,light:8,door:6,soffit_ud:8,slope_cd:8,soffit_cd:8,bass_cd:8,slope_nonius:9,soffit_nonius:9,soffit_duct:9,bass_wall_hanger:9,racking_strap:9,tie_rod:9,slope_light:8,wall_plate:9,plenum_wool:10,soffit_mineral_wool:10,bass_mineral_wool:10,rafters:11,roofing:12,slope_naturheld_140:13,soffit_naturheld_140:13,glazing:14,tile:0,grout:0,drain:0,fixture:6,prewall:5,screen:14,profile:7,vanity:6},pw=2e-6,mw=2;function bd(i,e=0){if(i.userData.layerDepthPatched)return;let t=Math.max(0,Math.round(Number(e)||0));if(i.userData.layerDepthBias=t,!(t>0))return;i.userData.layerDepthPatched=!0;let n=i.onBeforeCompile?.bind(i),s=i.customProgramCacheKey?.bind(i),r=pw.toExponential(8);i.onBeforeCompile=(o,a)=>{n?.(o,a),o.fragmentShader=o.fragmentShader.replace("#include <logdepthbuf_fragment>",`#include <logdepthbuf_fragment>
#if defined( USE_LOGDEPTHBUF )
	{
		float bpFaceBias = ${t}.0 * ${r};
		float bpGraze = min(bpFaceBias, 0.35 * fwidth(gl_FragDepth));
		gl_FragDepth -= bpFaceBias + bpGraze;
	}
#endif`)},i.customProgramCacheKey=()=>`${s?s():i.type}|bpLayerDepth-r${mw}-${t}`,i.needsUpdate=!0}var gw=[];function C0(i,e,t){let n=new Set(i),s=Array.isArray(e)&&e.length?e:gw,r=typeof t=="function"?t:l=>l;function o(l){let c=[];for(let u of l){if(typeof u=="string"){if(!n.has(u))continue;n.delete(u),c.push({type:"leaf",id:u,label:r(u)});continue}let f=o(u.children||[]);f.length&&c.push({type:"group",id:u.id,label:r(u.id),children:f})}return c}let a=o(s);if(n.size){let l=[...n].sort((c,u)=>c.localeCompare(u)).map(c=>({type:"leaf",id:c,label:r(c)}));a.push({type:"group",id:"other",label:r("other"),children:l})}return a}function P0(i,e){if(!i||typeof i!="object")return{};let t=new Map;for(let s of e)s.type==="group"&&t.set(s.id,Cu(s));let n={};for(let[s,r]of Object.entries(i)){let o=t.get(s);if(o&&o.length)for(let a of o)n[a]=r;else n[s]=r}return n}function Cu(i){if(i.type==="leaf")return[i.id];let e=[];for(let t of i.children)e.push(...Cu(t));return e}function xw(i,e,t="transparent"){if(t==="none")return;let n=t==="opaque"?1:Math.max(0,Math.min(1,Number(e)||0));for(let s of i.children||[]){if(!s?.userData?.isEdgeOverlay||!s.material)continue;let r=Array.isArray(s.material)?s.material:[s.material];for(let o of r)o&&(n<1?(o.transparent=!0,o.opacity=n,o.depthWrite=!1):(o.transparent=!1,o.opacity=1),o.needsUpdate=!0)}}function qs(i,e,t={}){let n=Math.max(0,Math.min(1,Number(e)||0)),s=t.edgeMode??"transparent";for(let r of i){if(!r)continue;if(n<=0){r.visible=!1;continue}if(r.visible=!0,!r.isMesh)continue;let o=Array.isArray(r.material)?r.material:[r.material];for(let a of o)a&&(n<1?(a.transparent=!0,a.opacity=n,a.depthWrite=!1,a.depthTest=!0,a.side=Ct,a.forceSinglePass=!0,a.userData.needsDepthPeel=!0):(a.transparent=!1,a.opacity=1,a.depthWrite=!0,a.depthTest=!0,a.side=Ct,a.forceSinglePass=!1,a.blending=Ui,a.userData.needsDepthPeel=!1),a.needsUpdate=!0);typeof r.userData.opaqueRenderOrder!="number"&&(r.userData.opaqueRenderOrder=r.renderOrder||0),r.renderOrder=n<1?0:r.userData.opaqueRenderOrder,xw(r,n,s);for(let a of r.children||[]){if(!a?.userData?.isSectionCap||!a.material)continue;a.visible=!0,a.renderOrder=r.renderOrder;let l=Array.isArray(a.material)?a.material:[a.material];for(let c of l)c&&(c.opacity=n,c.transparent=n<1,c.depthWrite=n>=1,c.depthTest=!0,c.forceSinglePass=n<1,c.side=Ct,c.needsUpdate=!0)}}}var _w={floor:{color:[230,115,20],roughness:.68,metalness:0,map:"wood"},eps:{color:[70,230,25],roughness:.94,metalness:0,map:"foam"},masonry:{color:[225,70,40],roughness:.9,metalness:0,map:"masonry"},column:{color:[225,70,40],roughness:.9,metalness:0,map:"masonry"},venec:{color:[200,55,35],roughness:.9,metalness:0,map:"masonry"},plaster:{color:[255,225,120],roughness:.92,metalness:0,map:"plaster"},furniture:{color:[255,150,0],roughness:.38,metalness:0,clearcoat:.35,clearcoatRoughness:.28,map:"wood"},cabinet:{color:[214,148,40],roughness:.4,metalness:0,clearcoat:.3,clearcoatRoughness:.3,map:"wood"},appliance:{color:[176,190,205],roughness:.28,metalness:.65,map:"metal"},sink:{color:[40,185,195],roughness:.22,metalness:.15,map:"none"},rug:{color:[150,70,175],roughness:.92,metalness:0,map:"none"},light:{color:[255,210,40],roughness:.35,metalness:.2,map:"metal"},wall_plate:{color:[200,85,10],roughness:.55,metalness:0,map:"wood"},pocket_frame:{color:[235,185,80],roughness:.7,metalness:0,map:"plaster"},wall_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},rafters:{color:[200,85,10],roughness:.55,metalness:0,map:"wood"},plenum_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},racking_strap:{color:[70,70,80],roughness:.45,metalness:.8,map:"metal"},tie_rod:{color:[35,38,44],roughness:.35,metalness:.9,map:"metal"},slope_light:{color:[28,28,30],roughness:.4,metalness:.6,map:"metal"},roofing:{color:[235,15,15],roughness:.32,metalness:.45,map:"metal"},glazing:{color:[140,210,255],roughness:.08,metalness:.05,map:"none"},slope_naturheld_140:{color:[15,85,245],roughness:.78,metalness:.08,map:"plaster"},slope_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},slope_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},slope_nonius:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},soffit_mineral_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},soffit_naturheld_140:{color:[15,85,245],roughness:.78,metalness:.08,map:"plaster"},soffit_ud:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},soffit_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},soffit_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},soffit_nonius:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},soffit_duct:{color:[168,176,188],roughness:.35,metalness:.85,map:"metal"},bass_mineral_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},bass_gkb:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},bass_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},bass_wall_hanger:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},tile:{color:[222,205,176],roughness:.42,metalness:0,map:"none"},grout:{color:[48,46,44],roughness:.9,metalness:0,map:"none"},drain:{color:[176,184,190],roughness:.28,metalness:.7,map:"metal"},fixture:{color:[236,236,232],roughness:.35,metalness:0,map:"none"},prewall:{color:[196,184,168],roughness:.8,metalness:0,map:"none"},screen:{color:[170,210,220],roughness:.08,metalness:.05,map:"none"},profile:{color:[190,196,200],roughness:.25,metalness:.85,map:"metal"},vanity:{color:[186,140,90],roughness:.55,metalness:0,map:"wood"}},Sd=new Map;function yw(i){if(!i||i==="none")return null;let e=Sd.get(i);if(e)return e;let t=128,n=document.createElement("canvas");n.width=t,n.height=t;let s=n.getContext("2d");if(!s)return null;if(i==="wood"){s.fillStyle="#c49858",s.fillRect(0,0,t,t);for(let o=0;o<t;o++){let a=Math.sin(o*.35)*8+Math.sin(o*.11)*4,l=130+o*17%50;s.strokeStyle=`rgba(${l-40}, ${l-60}, ${l-100}, 0.55)`,s.lineWidth=1.2,s.beginPath(),s.moveTo(0,o+a*.15),s.lineTo(t,o-a*.1),s.stroke()}for(let o=0;o<60;o++){let a=o*37%t,l=o*53%t;s.fillStyle="rgba(70, 40, 15, 0.22)",s.fillRect(a,l,2,7+o%5)}}else if(i==="foam"){s.fillStyle="#9ed468",s.fillRect(0,0,t,t);for(let o=0;o<t;o+=7)for(let a=0;a<t;a+=7){let l=o/7%2*3.5,c=2.4+a*o%5*.2;s.beginPath(),s.arc(a+l+3.5,o+3.5,c,0,Math.PI*2),s.fillStyle="rgba(255,255,255,0.55)",s.fill(),s.strokeStyle="rgba(40,90,30,0.35)",s.stroke()}}else if(i==="plaster"){let o=s.createImageData(t,t);for(let a=0;a<o.data.length;a+=4){let l=200+a*13%45;o.data[a]=l,o.data[a+1]=l-10,o.data[a+2]=l-22,o.data[a+3]=255}s.putImageData(o,0,0)}else if(i==="wool"){s.fillStyle="#88c860",s.fillRect(0,0,t,t);for(let o=0;o<1400;o++){let a=o*47%t,l=o*91%t;s.fillStyle=o%3===0?"rgba(255,255,255,0.4)":"rgba(30,70,20,0.28)",s.fillRect(a,l,1+o%2,2+o%3)}}else if(i==="metal"){let o=s.createLinearGradient(0,0,t,t);o.addColorStop(0,"#a02820"),o.addColorStop(.4,"#f07060"),o.addColorStop(.55,"#701810"),o.addColorStop(1,"#d04838"),s.fillStyle=o,s.fillRect(0,0,t,t);for(let a=0;a<t;a+=9)s.fillStyle="rgba(255,255,255,0.22)",s.fillRect(0,a,t,2),s.fillStyle="rgba(0,0,0,0.28)",s.fillRect(0,a+4,t,2)}else if(i==="masonry"){s.fillStyle="#b88868",s.fillRect(0,0,t,t);let o=16,a=32;for(let l=0;l<t/o;l++){let c=l%2*(a/2);for(let u=-1;u<t/a+1;u++){let f=u*a+c,h=l*o;s.fillStyle=`rgba(${170+(l+u)%3*18}, ${110+l%4*10}, ${70+u%3*12}, 0.75)`,s.fillRect(f+1,h+1,a-2,o-2),s.strokeStyle="rgba(70,45,30,0.55)",s.strokeRect(f+.5,h+.5,a-1,o-1)}}}else return null;let r=new ls(n);return r.colorSpace=St,r.wrapS=gi,r.wrapT=gi,r.repeat.set(2.5,2.5),r.needsUpdate=!0,Sd.set(i,r),r}function A0(i){return new We(i[0]/255,i[1]/255,i[2]/255)}function vw(i){return fw[i]||[160,160,160]}function Mw(i,e,t=0){i.side=Ct,t>0?(i.polygonOffset=!0,i.polygonOffsetFactor=-t,i.polygonOffsetUnits=-t*2):(i.polygonOffset=!1,i.polygonOffsetFactor=0,i.polygonOffsetUnits=0),e?(i.clippingPlanes=e,i.clipIntersection=!1):i.clippingPlanes=[],bd(i,t),Ja(i),i.needsUpdate=!0}function I0(i){i.computeBoundingBox();let e=i.boundingBox,t=new P;e.getSize(t);let n=Math.max(t.x,1e-6),s=Math.max(t.y,1e-6),r=Math.max(t.z,1e-6),o=Math.max(n,s,r);i.getAttribute("normal")||i.computeVertexNormals();let a=i.getAttribute("position"),l=i.getAttribute("normal");if(!a)return o;let c=i.getAttribute("uv");if(c&&c.count===a.count)return o;let u=new Float32Array(a.count*2),f=new P;for(let h=0;h<a.count;h++){f.fromBufferAttribute(a,h);let d=Math.abs(l.getX(h)),p=Math.abs(l.getY(h)),x=Math.abs(l.getZ(h)),g,m;p>=d&&p>=x?(g=(f.x-e.min.x)/n,m=(f.z-e.min.z)/r):d>=x?(g=(f.z-e.min.z)/r,m=(f.y-e.min.y)/s):(g=(f.x-e.min.x)/n,m=(f.y-e.min.y)/s),u[h*2]=g,u[h*2+1]=m}return i.setAttribute("uv",new Ft(u,2)),o}function Sw(i,e){let t=yw(i);if(!t)return null;let n=t.clone();n.needsUpdate=!0;let s=Math.max(1.2,Math.min(12,e/400));return n.repeat.set(s,s),n}function L0(i,e,t={}){let n=t.clippingPlanes??null,s=e===ja,r=t.opacityByLabel??null,o=t.edgeMode??"transparent";for(let[a,l]of i){let c=vw(a),u=dw[a]??0,f=1e3;if(s)for(let m of l)m.isMesh&&m.geometry&&(f=Math.max(f,I0(m.geometry)));let h=1,d;if(s){let m=_w[a]||{color:c,roughness:.7,metalness:0,map:"none"};h=typeof m.opacity=="number"?m.opacity:1;let v=A0(m.color),M=Sw(m.map||"none",f);m.clearcoat?d=new ln({color:v,map:M,roughness:m.roughness,metalness:m.metalness,clearcoat:m.clearcoat,clearcoatRoughness:m.clearcoatRoughness??.3,envMapIntensity:.85}):d=new Cn({color:v,map:M,roughness:m.roughness,metalness:m.metalness,envMapIntensity:m.metalness>.05?1.1:.55})}else d=new sn({color:A0(c)});Mw(d,n,u),d.userData.presetOpacity=h;let p=new Set;for(let m of l){if(!m.isMesh)continue;let v=m.material;if(v){let M=Array.isArray(v)?v:[v];for(let y of M)p.add(y)}m.material=d,m.userData.opaqueRenderOrder=u,m.renderOrder=u}for(let m of p)m!==d&&(m.map&&[...Sd.values()].includes(m.map)?m.map=null:m.map&&(m.map.dispose?.(),m.map=null),m.dispose?.());let x=1;r&&(r instanceof Map?x=r.has(a)?r.get(a):1:typeof r[a]=="number"&&(x=r[a]));let g=Math.max(0,Math.min(1,h*(Number(x)||0)));qs(l,g,{edgeMode:o})}}function D0(i,e){let n=(Array.isArray(i)?i:[i]).map(s=>{if(!s)return new Cn({color:13421772,roughness:.65,metalness:0,side:Kn});let r=s.color?s.color.clone():new We(13421772),o=typeof s.roughness=="number"?s.roughness:.65,a=typeof s.metalness=="number"?s.metalness:0,l=null;s.map&&e&&(I0(e),l=s.map.clone(),l.needsUpdate=!0);let c=new Cn({color:r,map:l,roughness:o,metalness:a,side:Kn,transparent:!!s.transparent,opacity:typeof s.opacity=="number"?s.opacity:1});return c.clippingPlanes=null,c.clipIntersection=!1,c});return Array.isArray(i)?n:n[0]}function N0(){try{let i=localStorage.getItem(R0);if(i===ja||i===Ru)return i}catch{}return Ru}function O0(i){try{localStorage.setItem(R0,i)}catch{}}var Wi=1e-5,U0=new WeakMap;function jn(i,e,t,n){let s=t/(t-n);return i.clone().lerp(e,s)}function bw(i,e,t){let[n,s,r]=i,o=e.distanceToPoint(n),a=e.distanceToPoint(s),l=e.distanceToPoint(r),c=o>=-Wi,u=a>=-Wi,f=l>=-Wi,h=(c?1:0)+(u?1:0)+(f?1:0);if(h===3){t.push([n,s,r]);return}if(h===0)return;let d=[n,s,r],p=[o,a,l],x=[c,u,f];if(h===1){let M=x.findIndex(Boolean),y=(M+1)%3,E=(M+2)%3,w=d[M],_=jn(d[M],d[y],p[M],p[y]),b=jn(d[M],d[E],p[M],p[E]);t.push([w,_,b]);return}let g=x.findIndex(M=>!M),m=(g+1)%3,v=(g+2)%3;if(x[m]){let M=d[m],y=d[v],E=jn(d[g],d[m],p[g],p[m]),w=jn(d[g],d[v],p[g],p[v]);t.push([M,y,E]),t.push([y,w,E])}else{let M=d[v],y=jn(d[g],d[m],p[g],p[m]),E=jn(d[g],d[v],p[g],p[v]);t.push([M,y,E])}}function Ew(i,e){let[t,n,s]=i,r=e.distanceToPoint(t),o=e.distanceToPoint(n),a=e.distanceToPoint(s),l=r>=-Wi,c=o>=-Wi,u=a>=-Wi,f=(l?1:0)+(c?1:0)+(u?1:0);if(f===0||f===3)return null;let h=[t,n,s],d=[r,o,a],p=[l,c,u];if(f===1){let v=p.findIndex(Boolean),M=(v+1)%3,y=(v+2)%3;return[jn(h[v],h[M],d[v],d[M]),jn(h[v],h[y],d[v],d[y])]}let x=p.findIndex(v=>!v),g=(x+1)%3,m=(x+2)%3;return p[g]?[jn(h[x],h[g],d[x],d[g]),jn(h[x],h[m],d[x],d[m])]:[jn(h[x],h[g],d[x],d[g]),jn(h[x],h[m],d[x],d[m])]}function ww(i,e,t){let n=i.clone(),s=e.clone();for(let r of t){let o=r.distanceToPoint(n),a=r.distanceToPoint(s),l=o>=-Wi,c=a>=-Wi;if(l&&c)continue;if(!l&&!c)return null;let u=jn(n,s,o,a);l?s=u:n=u}return n.distanceToSquared(s)<Wi*Wi?null:[n,s]}function Tw(i,e){let t=i;for(let n of e){let s=[];for(let r of t)bw(r,n,s);if(t=s,t.length===0)break}return t}function Aw(i,e){let t=i.getAttribute("position");if(!t)return[];let n=new P,s=[],r=i.getIndex();function o(a,l,c){s.push([n.fromBufferAttribute(t,a).applyMatrix4(e).clone(),n.fromBufferAttribute(t,l).applyMatrix4(e).clone(),n.fromBufferAttribute(t,c).applyMatrix4(e).clone()])}if(r)for(let a=0;a<r.count;a+=3)o(r.getX(a),r.getX(a+1),r.getX(a+2));else for(let a=0;a<t.count;a+=3)o(a,a+1,a+2);return s}function Rw(i){let e=i.getAttribute("position");if(!e)return[];let t=new P,n=[],s=i.getIndex();function r(o,a,l){n.push([t.fromBufferAttribute(e,o).clone(),t.fromBufferAttribute(e,a).clone(),t.fromBufferAttribute(e,l).clone()])}if(s)for(let o=0;o<s.count;o+=3)r(s.getX(o),s.getX(o+1),s.getX(o+2));else for(let o=0;o<e.count;o+=3)r(o,o+1,o+2);return n}var yr=1e-6,F0=2e-4,Cw=2e-4,B0=new WeakMap;function Pw(i){let e="";for(let t of i)e+=`${t.normal.x.toFixed(6)},${t.normal.y.toFixed(6)},${t.normal.z.toFixed(6)},${t.constant.toFixed(6)};`;return e}function z0(i){let e=t=>Math.round(t/yr);return`${e(i.x)},${e(i.y)},${e(i.z)}`}function V0(i,e){let t=Pw(e),n=B0.get(i);if(n&&n.key===t)return n;let s=[],r=[],o=U0.get(i);if(o||(o=Rw(i),U0.set(i,o)),o.length&&e?.length)for(let l=0;l<e.length;l++){let c=e[l],u=e.filter((h,d)=>d!==l),f=[];for(let h of o){let d=Ew(h,c);if(!d)continue;let p=u.length?ww(d[0],d[1],u):d;p&&(f.push(p),s.push(p[0].x,p[0].y,p[0].z,p[1].x,p[1].y,p[1].z))}r.push(f)}let a={key:t,segments:new Float32Array(s),perPlane:r};return B0.set(i,a),a}function Iw(i,e,t){let n=new Map;for(let l of i.keys())n.set(l,l);function s(l){let c=l;for(;n.get(c)!==c;){let u=n.get(n.get(c));n.set(c,u),c=u}return c}function r(l){let c=s(l),u=0;for(let f of t.get(c)||[])e[f].dead||u++;return u}function o(){let l=[];for(let c of i.keys())s(c)===c&&r(c)%2&&l.push(c);return l}let a=F0*F0;for(let l=0;l<e.length+2;l++){let c=o();if(c.length<2)break;let u=-1,f=-1,h=1/0;for(let m=0;m<c.length;m++){let v=i.get(c[m]);for(let M=m+1;M<c.length;M++){let y=i.get(c[M]),E=v.x-y.x,w=v.y-y.y,_=v.z-y.z,b=E*E+w*w+_*_;b<h&&(h=b,u=m,f=M)}}if(h>a)break;let d=c[u],p=c[f],x=i.get(d),g=i.get(p);x.add(g).multiplyScalar(.5);for(let m of t.get(p)||[]){let v=e[m];if(v.dead)continue;let M=s(v.a===p?v.b:v.a);if(M===d){v.dead=!0;continue}v.a=d,v.b=M,t.has(d)||t.set(d,[]),t.get(d).push(m)}n.set(p,d)}}function Lw(i){let e=new Map,t=[],n=new Map;for(let[o,a]of i){let l=z0(o),c=z0(a);if(l===c)continue;e.has(l)||e.set(l,o.clone()),e.has(c)||e.set(c,a.clone());let u=t.length;t.push({a:l,b:c,used:!1,dead:!1}),n.has(l)||n.set(l,[]),n.has(c)||n.set(c,[]),n.get(l).push(u),n.get(c).push(u)}Iw(e,t,n);function s(o,a){let l=n.get(o)||[],c=-1,u=-1/0,f=e.get(o),h=a?e.get(a):null;for(let d of l){if(t[d].used||t[d].dead)continue;if(!h)return d;let p=t[d],x=p.a===o?p.b:p.a,g=e.get(x),m=f.x-h.x,v=f.y-h.y,M=f.z-h.z,y=g.x-f.x,E=g.y-f.y,w=g.z-f.z,_=m*y+v*E+M*w;_>u&&(u=_,c=d)}return c}let r=[];for(let o=0;o<t.length;o++){if(t[o].used||t[o].dead)continue;let a=[],l=[],c=o,u=t[c].a,f=u,h=null,d=!1,p=t.length+2;for(let x=0;x<p;x++){t[c].used=!0,l.push(c),a.push(e.get(u).clone());let g=t[c].a===u?t[c].b:t[c].a;if(g===f){d=!0;break}let m=s(g,u);if(m<0)break;h=u,u=g,c=m}d&&a.length>=3&&r.push(a)}return r}function Dw(i){let e=i.clone().normalize(),t=Math.abs(e.x)<.9?new P(1,0,0):new P(0,1,0),n=new P().crossVectors(t,e).normalize(),s=new P().crossVectors(e,n).normalize();return{u:n,v:s,n:e}}function Nw(i,e,t,n){return i.map(s=>{let r=s.clone().sub(e);return{x:r.dot(t),y:r.dot(n),p3:s}})}function Ow(i){let e=0;for(let t=0;t<i.length;t++){let n=(t+1)%i.length;e+=i[t].x*i[n].y-i[n].x*i[t].y}return e*.5}function Uw(i){return Ow(i)<0&&i.reverse(),i}function k0(i,e,t){let n=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){let o=t[s].y,a=t[r].y,l=t[s].x,c=t[r].x;o>e!=a>e&&i<(c-l)*(e-o)/(a-o+0)+l&&(n=!n)}return n}function ys(i,e,t){return(e.x-i.x)*(t.y-i.y)-(e.y-i.y)*(t.x-i.x)}function Fw(i,e,t,n){let s=ys(i,e,t),r=ys(i,e,n),o=ys(t,n,i),a=ys(t,n,e);return s*r<0&&o*a<0}function H0(i,e,t,n){let s=t.length;for(let r=0;r<s;r++){let o=(r+1)%s;if(!(n>=0&&(r===n||o===n))&&Fw(i,e,t[r],t[o]))return!0}return!1}function Bw(i,e){let t=0;for(let h=1;h<e.length;h++)e[h].x>e[t].x&&(t=h);let n=e[t],s=-1,r=1/0,o=i.length;for(let h=0;h<o;h++){let d=i[h],p=i[(h+1)%o];if(d.y>n.y==p.y>n.y)continue;let x=p.y-d.y;if(Math.abs(x)<1e-15)continue;let g=(n.y-d.y)/x;if(g<-1e-8||g>1+1e-8)continue;let m=d.x+g*(p.x-d.x);m>=n.x-1e-8&&m<r&&(r=m,s=h)}let a=[];s>=0&&a.push(s,(s+1)%o);let l=0,c=1/0;for(let h=0;h<o;h++){let d=(i[h].x-n.x)**2+(i[h].y-n.y)**2;d<c&&(c=d,l=h)}a.push(l);let u=-1;for(let h of a)if(!H0(n,i[h],i,h)&&!H0(n,i[h],e,t)){u=h;break}if(u<0)return null;let f=[];for(let h=0;h<o;h++)if(f.push(i[h]),h===u){for(let d=0;d<e.length;d++)f.push(e[(t-d+e.length)%e.length]);f.push(e[t]),f.push(i[h])}return f}function Ed(i,e){return(i.x-e.x)**2+(i.y-e.y)**2<=yr*yr}function zw(i,e,t,n){if(Ed(i,e)||Ed(i,t)||Ed(i,n))return!1;let s=ys(e,t,i),r=ys(t,n,i),o=ys(n,e,i),a=s<-1e-14||r<-1e-14||o<-1e-14,l=s>1e-14||r>1e-14||o>1e-14;return!(a&&l)}function kw(i){let e=[];for(let s of i){let r=e[e.length-1];r&&(r.x-s.x)**2+(r.y-s.y)**2<yr*yr||e.push(s)}if(e.length>=2){let s=e[0],r=e[e.length-1];(s.x-r.x)**2+(s.y-r.y)**2<yr*yr&&e.pop()}let t=[],n=e.length*e.length+8;for(;e.length>3&&n-- >0;){let s=!1,r=e.length;for(let o=0;o<r;o++){let a=(o+r-1)%r,l=(o+1)%r,c=e[a],u=e[o],f=e[l],h=ys(c,u,f);if(h<-1e-14)continue;if(h<=1e-14){e.splice(o,1),s=!0;break}let d=!1;for(let p=0;p<r;p++)if(!(p===o||p===a||p===l)&&zw(e[p],c,u,f)){d=!0;break}if(!d){t.push([c.p3,u.p3,f.p3]),e.splice(o,1),s=!0;break}}if(!s)break}return e.length===3&&ys(e[0],e[1],e[2])>1e-14&&t.push([e[0].p3,e[1].p3,e[2].p3]),t}function Hw(i,e,t){if(!i.length)return[];let{u:n,v:s,n:r}=Dw(e.normal),o=i[0][0],a=i.map(u=>Uw(Nw(u,o,n,s))),l=a.map((u,f)=>{let h=u[0],d=0;for(let p=0;p<a.length;p++)p!==f&&k0(h.x,h.y,a[p])&&d++;return d}),c=[];for(let u=0;u<a.length;u++){if(l[u]%2!==0)continue;let f=a[u].slice();for(let d=0;d<a.length;d++){if(l[d]!==l[u]+1||!k0(a[d][0].x,a[d][0].y,f))continue;let p=Bw(f,a[d]);p&&(f=p)}let h=kw(f);for(let d of h)c.push(d.map(p=>p.clone().addScaledVector(r,t)))}return c}function G0(i,e){return!i||!e?.length?[]:V0(i,e).perPlane}function W0(i,e,t=0){if(!i?.length||!e)return new Float32Array(0);let n=Lw(i),s=Hw(n,e,Cw+Math.max(0,t));if(!s.length)return new Float32Array(0);let r=new Float32Array(s.length*9),o=0;for(let[a,l,c]of s)r[o++]=a.x,r[o++]=a.y,r[o++]=a.z,r[o++]=l.x,r[o++]=l.y,r[o++]=l.z,r[o++]=c.x,r[o++]=c.y,r[o++]=c.z;return r}function M0(i,e){return!i||!e?.length?new Float32Array(0):V0(i,e).segments}function Tu(i,e){if(!i?.length)return[];let t=new tt().copy(e).invert();return i.map(n=>n.clone().applyMatrix4(t))}function Vw(i){let e=new Float32Array(i.length*9),t=0;for(let[s,r,o]of i)e[t++]=s.x,e[t++]=s.y,e[t++]=s.z,e[t++]=r.x,e[t++]=r.y,e[t++]=r.z,e[t++]=o.x,e[t++]=o.y,e[t++]=o.z;let n=new Lt;return n.setAttribute("position",new Ft(e,3)),n.computeVertexNormals(),n}function X0(i,e){if(!i.visible||!i.geometry)return null;let t=Aw(i.geometry,i.matrixWorld);if(t.length===0)return null;let n=e.length?Tw(t,e):t;if(n.length===0)return null;let s=Vw(n),r=D0(i.material,s),o=new ft(s,r);return o.name=i.name,o}var Gw=5e-5;function Iu(i){return!!(i&&i.userData&&i.userData.isSectionCap)}function wd(i){return i?Array.isArray(i)?i[0]||null:i:null}function Y0(i,e){let t;return i.isMeshPhysicalMaterial?t=new ln:i.isMeshStandardMaterial?t=new Cn:t=new sn,i.color&&t.color&&t.color.copy(i.color),i.map&&"map"in t&&(t.map=i.map),typeof i.roughness=="number"&&"roughness"in t&&(t.roughness=i.roughness),typeof i.metalness=="number"&&"metalness"in t&&(t.metalness=i.metalness),typeof i.clearcoat=="number"&&"clearcoat"in t&&(t.clearcoat=i.clearcoat,t.clearcoatRoughness=i.clearcoatRoughness??.3),typeof i.envMapIntensity=="number"&&"envMapIntensity"in t&&(t.envMapIntensity=i.envMapIntensity),t.opacity=typeof i.opacity=="number"?i.opacity:1,t.transparent=!!i.transparent,t.depthWrite=i.depthWrite!==!1,t.depthTest=i.depthTest!==!1,t.side=Ct,t.forceSinglePass=!!i.forceSinglePass,t.toneMapped=i.toneMapped!==!1,t.polygonOffset=!!i.polygonOffset,t.polygonOffsetFactor=i.polygonOffsetFactor||0,t.polygonOffsetUnits=i.polygonOffsetUnits||0,t.clippingPlanes=e,t.clipIntersection=!1,bd(t,i.userData?.layerDepthBias||0),Ja(t),t.needsUpdate=!0,t}function Pu(i){i.parent?.remove(i),i.geometry?.dispose?.();let e=i.material,t=Array.isArray(e)?e:[e];for(let n of t)n&&(n.map=null),n?.dispose?.()}function Ww(i){let e="";for(let t of i)e+=`${t.normal.x.toFixed(5)},${t.normal.y.toFixed(5)},${t.normal.z.toFixed(5)},${t.constant.toFixed(5)};`;return e}function Xw(i,e){if(!i)return null;for(let t of i.children)if(t.userData?.isSectionCap&&t.userData.capLabel===e)return t;return null}function $0(i,e){let t=new Set;for(let n of i){let s=n.parent;if(!s||t.has(s))continue;t.add(s);let r=Xw(s,e);if(r)return r}return null}function q0(i,e,t){i.visible=!0;for(let n of i.children){if(!n.isMesh)continue;let s=wd(n.material);s&&(e.color&&s.color&&s.color.copy(e.color),s.opacity=typeof e.opacity=="number"?e.opacity:1,s.transparent=!!e.transparent,s.depthWrite=e.depthWrite!==!1,s.depthTest=e.depthTest!==!1,s.forceSinglePass=!!e.forceSinglePass,s.side=Ct,s.needsUpdate=!0,n.visible=!0,n.renderOrder=t)}}function qw(i,e,t,n){let s=e.filter(d=>d?.isMesh&&d.visible&&!Iu(d)&&d.geometry),r=$0(e,i);if(!s.length||!t.length){r&&Pu(r);return}let o=s[0],a=o.parent;if(!a)return;r&&r.parent!==a&&Pu(r);let l=r&&r.parent===a?r:new kt;for(let d of[...l.children])Pu(d);l.parent||(l.name=`${i}__caps`,l.userData.isSectionCap=!0,l.userData.capLabel=i,a.add(l));let c=wd(o.material);if(!c)return;a.updateWorldMatrix(!0,!0);let u=new tt().copy(a.matrixWorld).invert(),f=typeof o.userData.opaqueRenderOrder=="number"?o.userData.opaqueRenderOrder:o.renderOrder||0,h=t.map(()=>[]);for(let d of s){d.updateWorldMatrix(!0,!1);let p=Tu(t,d.matrixWorld),x=G0(d.geometry,p);for(let g=0;g<t.length;g++){let m=x[g]||[];for(let[v,M]of m)h[g].push([v.clone().applyMatrix4(d.matrixWorld),M.clone().applyMatrix4(d.matrixWorld)])}}for(let d=0;d<t.length;d++){let p=W0(h[d],t[d],f*Gw);if(p.length<9)continue;for(let v=0;v<p.length;v+=3){let M=new P(p[v],p[v+1],p[v+2]).applyMatrix4(u);p[v]=M.x,p[v+1]=M.y,p[v+2]=M.z}let x=new Lt;x.setAttribute("position",new Ft(p,3)),x.computeVertexNormals();let g=t.filter((v,M)=>M!==d),m=new ft(x,Y0(c,g));m.name=`${i}__cap${d}`,m.userData.isSectionCap=!0,m.userData.capPlaneIndex=d,m.userData.capLabel=i,m.renderOrder=o.renderOrder,m.raycast=()=>{},l.add(m)}l.userData.bpCapSig=n,l.userData.bpCapMatUuid=c.uuid,l.visible=l.children.length>0}function Td(i,e){let t=e||[],n=Ww(t);for(let[s,r]of i){let o=(r||[]).filter(u=>u&&!Iu(u));if(!o.length)continue;let a=o.filter(u=>u.visible),l=$0(o,s);if(!t.length||!a.length){l&&Pu(l);continue}let c=wd(a[0].material);if(l&&l.userData.bpCapSig===n&&c&&l.userData.bpCapMatUuid===c.uuid&&l.children.length){q0(l,c,a[0].renderOrder||0);continue}if(l&&l.userData.bpCapSig===n&&c&&l.children.length){for(let u of l.children){if(!u.isMesh)continue;let f=u.material,h=u.userData.capPlaneIndex,d=typeof h=="number"?t.filter((x,g)=>g!==h):t;u.material=Y0(c,d);let p=Array.isArray(f)?f:[f];for(let x of p)x&&(x.map=null),x?.dispose?.()}l.userData.bpCapMatUuid=c.uuid,q0(l,c,a[0].renderOrder||0);continue}qw(s,o,t,n)}}var Yw=2,$w=.45,Z0=.015;function Ad(i){let e=new Gt().setFromObject(i);if(e.isEmpty())return{cx:0,cz:0,minY:0,spanM:0,scale:1,liftM:Z0};let t=new P;e.getSize(t);let n=Math.max(t.x,t.y,t.z,1e-9),s=n>Yw?$w/n:1;return{cx:(e.min.x+e.max.x)/2,cz:(e.min.z+e.max.z)/2,minY:e.min.y,spanM:n,scale:s,liftM:Z0}}function K0(i,e=Ad(i)){let{cx:t,cz:n,minY:s,scale:r,liftM:o}=e;return i.position.set(-t*r,-s*r+o,-n*r),i.scale.setScalar(r),i.updateMatrixWorld(!0),e}var Zw=`
:root {
  color-scheme: light dark;
  --safe-t: env(safe-area-inset-top, 0px);
  --safe-r: env(safe-area-inset-right, 0px);
  --safe-b: env(safe-area-inset-bottom, 0px);
  --safe-l: env(safe-area-inset-left, 0px);
  --bg: #e8e8ed;
  --fg: #1c1c1e;
  --fg-secondary: rgba(60, 60, 67, 0.78);
  --glass: rgba(255, 255, 255, 0.28);
  --glass-strong: rgba(255, 255, 255, 0.72);
  --glass-border: rgba(255, 255, 255, 0.55);
  --hairline: rgba(60, 60, 67, 0.16);
  --fill: rgba(120, 120, 128, 0.18);
  --fill-active: rgba(120, 120, 128, 0.32);
  --accent: #007aff;
  --accent-fg: #fff;
  --danger-fg: #ff3b30;
  --shadow: 0 10px 36px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.05);
  --radius: 20px;
  --radius-sm: 12px;
  --blur: 40px;
  --sheet-w: min(22rem, 42vw);
  --sheet-partial-h: 40vh;
  --sheet-full-h: calc(100dvh - var(--safe-t) - 3.5rem);
  --sheet-peek-h: 2.15rem;
  --chrome-pad: 12px;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #1c1c1e;
    --fg: #f5f5f7;
    --fg-secondary: rgba(235, 235, 245, 0.68);
    --glass: rgba(28, 28, 30, 0.38);
    --glass-strong: rgba(58, 58, 60, 0.82);
    --glass-border: rgba(255, 255, 255, 0.14);
    --hairline: rgba(84, 84, 88, 0.55);
    --fill: rgba(120, 120, 128, 0.28);
    --fill-active: rgba(120, 120, 128, 0.42);
    --shadow: 0 12px 40px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.28);
  }
}

html, body {
  margin: 0;
  height: 100%;
  overflow: hidden;
  background: var(--bg);
  color: var(--fg);
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif;
  -webkit-font-smoothing: antialiased;
  position: relative;
}

canvas {
  position: absolute;
  inset: 0;
  z-index: 0;
  display: block;
  width: 100%;
  height: 100%;
  touch-action: none;
}

.top-chrome {
  position: fixed;
  z-index: 4;
  top: calc(var(--safe-t) + var(--chrome-pad));
  left: calc(var(--safe-l) + var(--chrome-pad));
  right: calc(var(--safe-r) + var(--chrome-pad));
  display: flex;
  gap: 8px;
  align-items: flex-start;
  justify-content: space-between;
  pointer-events: none;
}

.top-chrome-start,
.top-chrome-end {
  display: flex;
  gap: 8px;
  align-items: center;
  pointer-events: none;
}

.top-chrome-start {
  flex: 1 1 auto;
  flex-wrap: wrap;
  min-width: 0;
}

.top-chrome-end { flex: 0 0 auto; }

.top-chrome-start > *,
.top-chrome-end > * { pointer-events: auto; }

.chrome-btn {
  appearance: none;
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.75rem;
  height: 2.75rem;
  padding: 0 0.95rem;
  border: 1px solid var(--glass-border);
  border-radius: 999px;
  background: var(--glass);
  color: var(--fg);
  font: inherit;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  text-decoration: none;
  cursor: pointer;
  box-shadow: var(--shadow);
  -webkit-backdrop-filter: blur(var(--blur)) saturate(1.6);
  backdrop-filter: blur(var(--blur)) saturate(1.6);
  transition: background 0.15s ease, transform 0.12s ease;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}

.chrome-btn:active { transform: scale(0.96); }
.chrome-btn:disabled { opacity: 0.55; cursor: wait; }
.chrome-btn.is-active {
  background: var(--glass-strong);
  box-shadow: inset 0 0 0 1.5px var(--accent), var(--shadow);
  color: var(--accent);
}
.chrome-btn.is-live {
  min-width: 5.5rem;
  font-variant-numeric: tabular-nums;
  font-feature-settings: "tnum" 1;
  letter-spacing: -0.02em;
}
#ar:not([hidden]),
#measure:not([hidden]),
#labels:not([hidden]),
#drawing:not([hidden]) { min-width: auto; }

@media (max-width: 720px) {
  .chrome-btn {
    height: 2.25rem;
    padding: 0 0.65rem;
    font-size: 0.82rem;
  }
}

.measure-crosshair {
  position: fixed;
  z-index: 2;
  width: 0;
  height: 0;
  pointer-events: none;
  transform: translate(-50%, -50%);
}
.measure-crosshair-h,
.measure-crosshair-v {
  position: absolute;
  left: 50%;
  top: 50%;
  background: rgba(255, 214, 10, 0.95);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.35);
}
.measure-crosshair-h {
  width: 28px;
  height: 2px;
  transform: translate(-50%, -50%);
}
.measure-crosshair-v {
  width: 2px;
  height: 28px;
  transform: translate(-50%, -50%);
}
.measure-crosshair-dot {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #fff;
  border: 1.5px solid rgba(0, 0, 0, 0.45);
  transform: translate(-50%, -50%);
}
.measure-crosshair[data-snap="vertex"] .measure-crosshair-h,
.measure-crosshair[data-snap="vertex"] .measure-crosshair-v {
  background: rgba(255, 69, 58, 0.95);
}
.measure-crosshair[data-snap="edge"] .measure-crosshair-h,
.measure-crosshair[data-snap="edge"] .measure-crosshair-v,
.measure-crosshair[data-snap="perp"] .measure-crosshair-h,
.measure-crosshair[data-snap="perp"] .measure-crosshair-v {
  background: rgba(255, 214, 10, 0.95);
}
.measure-crosshair[data-snap="face"] .measure-crosshair-h,
.measure-crosshair[data-snap="face"] .measure-crosshair-v {
  background: rgba(100, 210, 255, 0.95);
}

/* After .chrome-btn so display:none wins on narrow viewports */
.sheet-toggle { display: none; }

@media (min-width: 768px) {
  .sheet-toggle { display: inline-flex; }
}

.sheet {
  position: fixed;
  z-index: 3;
  display: flex;
  flex-direction: column;
  color: var(--fg);
  background: var(--glass);
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow);
  -webkit-backdrop-filter: blur(var(--blur)) saturate(1.7);
  backdrop-filter: blur(var(--blur)) saturate(1.7);
  transition: transform 0.34s cubic-bezier(0.32, 0.72, 0, 1),
    height 0.34s cubic-bezier(0.32, 0.72, 0, 1),
    max-height 0.34s cubic-bezier(0.32, 0.72, 0, 1),
    opacity 0.24s ease;
  will-change: transform, height;
}

.sheet.is-dragging {
  transition: none;
}

.sheet-handle {
  appearance: none;
  flex: 0 0 auto;
  align-self: center;
  width: 100%;
  max-width: 100%;
  height: 1.35rem;
  margin: 0;
  padding: 0.4rem 0 0.15rem;
  border: 0;
  background: transparent;
  cursor: grab;
  touch-action: none;
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  outline: none;
}

.sheet-handle:active { cursor: grabbing; }

.sheet-handle::after {
  content: "";
  display: block;
  width: 2.35rem;
  height: 0.32rem;
  margin: 0 auto;
  border-radius: 999px;
  background: var(--fg-secondary);
  opacity: 0.55;
  transition: opacity 0.12s ease, background 0.12s ease;
}

.sheet-handle:active::after {
  opacity: 0.95;
  background: var(--fg);
}

.sheet-scroll {
  flex: 1 1 auto;
  min-height: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  padding: 0.15rem 1rem calc(1rem + var(--safe-b));
  overscroll-behavior: contain;
  /* Vertical pans scroll the sheet; children opt into horizontal (sliders). */
  touch-action: pan-y;
}

.sheet[data-detent="peek"]:not(.is-dragging) .sheet-scroll {
  pointer-events: none;
  opacity: 0;
}

.sheet.is-dragging .sheet-scroll {
  opacity: 1;
  pointer-events: none;
}

.sheet-section + .sheet-section {
  margin-top: 1.1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--hairline);
}

.sheet-title {
  margin: 0 0 0.55rem;
  font-size: 0.72rem;
  font-weight: 650;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--fg-secondary);
}

/* Narrow: bottom sheet \u2014 flush to bottom, only top corners rounded */
@media (max-width: 767px) {
  .sheet {
    left: 0;
    right: 0;
    bottom: 0;
    height: var(--sheet-peek-h);
    max-height: var(--sheet-full-h);
    border-radius: var(--radius) var(--radius) 0 0;
    border-bottom: 0;
  }
  .sheet[data-detent="peek"] {
    height: calc(var(--sheet-peek-h) + var(--safe-b));
  }
  .sheet[data-detent="partial"] {
    height: calc(var(--sheet-partial-h) + var(--safe-b));
  }
  .sheet[data-detent="full"] {
    height: var(--sheet-full-h);
  }
}

/* Wide: classic right pane (no grabber) */
@media (min-width: 768px) {
  .sheet {
    top: 0;
    right: 0;
    bottom: 0;
    width: var(--sheet-w);
    border-radius: 0;
    border-right: 0;
    height: auto;
    padding-top: calc(var(--safe-t) + 4.25rem);
  }
  .sheet-handle { display: none; }
  .sheet-scroll {
    padding-top: 0.35rem;
    padding-right: calc(1rem + var(--safe-r));
    padding-bottom: calc(1rem + var(--safe-b));
  }
  .sheet[data-detent="closed"] {
    transform: translateX(100%);
    opacity: 1;
    pointer-events: none;
  }
  .sheet[data-detent="open"] {
    transform: translateX(0);
    opacity: 1;
  }
  .sheet.is-dragging {
    pointer-events: auto;
  }
}

.seg {
  display: flex;
  gap: 2px;
  padding: 3px;
  border-radius: var(--radius-sm);
  background: var(--fill);
}

.seg + .seg {
  margin-top: 0.55rem;
}

.edges-block {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-top: 0.55rem;
}

.edges-label {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--fg-secondary);
}

.seg button {
  appearance: none;
  flex: 1 1 0;
  min-width: 0;
  margin: 0;
  padding: 0.55rem 0.35rem;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: var(--fg);
  font: inherit;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease, box-shadow 0.15s ease;
}

.seg button.is-active,
.seg button:active {
  background: var(--glass-strong);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
}

.scene-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 0.55rem;
}

.scene-list button {
  appearance: none;
  flex: 0 1 auto;
  max-width: 100%;
  margin: 0;
  padding: 0.5rem 0.7rem;
  border: 0;
  border-radius: 10px;
  background: var(--fill);
  color: var(--fg);
  font: inherit;
  font-size: 0.82rem;
  font-weight: 600;
  line-height: 1.25;
  text-align: center;
  cursor: pointer;
}

.scene-list button.is-active,
.scene-list button:active {
  background: var(--glass-strong);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
}

.parts {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.part-group {
  display: flex;
  flex-direction: column;
}

.part-children {
  display: flex;
  flex-direction: column;
}

.part-children[hidden] {
  display: none;
}

.part-row {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  min-height: 2.65rem;
  padding: 0.15rem 0.15rem 0.15rem calc(0.15rem + var(--part-depth, 0) * 0.95rem);
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  user-select: none;
  -webkit-user-select: none;
}

.part-group-row {
  cursor: pointer;
  border-radius: 0.45rem;
}

.part-group-row:active {
  background: var(--fill);
}

.part-disclosure {
  appearance: none;
  flex: 0 0 auto;
  width: 1.35rem;
  height: 1.35rem;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 0.3rem;
  background: transparent;
  color: var(--fg-secondary);
  cursor: pointer;
  position: relative;
}

.part-disclosure::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0.42rem;
  height: 0.42rem;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: translate(-60%, -60%) rotate(-45deg);
  transition: transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.part-group.is-expanded > .part-group-row > .part-disclosure::before {
  transform: translate(-50%, -70%) rotate(45deg);
}

.part-row .part-name {
  flex: 0 0 var(--part-name-col, auto);
  width: var(--part-name-col, auto);
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.part-group-row .part-name {
  font-weight: 600;
}

.part-disclosure-spacer {
  flex: 0 0 auto;
  width: 1.35rem;
  height: 1.35rem;
  pointer-events: none;
}

.part-opacity-wrap {
  flex: 1 1 0;
  min-width: 5rem;
  display: flex;
  align-items: center;
  /* Tall hit area; thumb stays visually moderate. */
  min-height: 2.85rem;
  margin: 0;
}

.part-opacity-wrap .coop-range.part-opacity {
  flex: 1 1 auto;
  width: 100%;
  height: 2.85rem;
}

.part-sync {
  appearance: none;
  flex: 0 0 auto;
  margin: 0 0 0 0.35rem;
  padding: 0.2rem 0.45rem;
  border: 0;
  border-radius: 0.35rem;
  background: var(--fill);
  color: var(--accent);
  font: inherit;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  line-height: 1.2;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.part-sync:active {
  background: var(--fill-active);
}

.part-sync[hidden] {
  display: none !important;
}

.cuts {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.cut-row {
  display: flex;
  gap: 0.55rem;
  align-items: center;
  min-height: 2rem;
}

.cut-label {
  flex: 0 0 auto;
  min-width: 5.5rem;
  font-size: 0.82rem;
  font-variant-numeric: tabular-nums;
  color: var(--fg-secondary);
}

/* Cooperative horizontal slider: UA scrolls vertically (touch-action: pan-y);
   JS only scrubs on horizontal drag (no tap-to-seek). Replaces native range,
   which steals the whole touch on many mobile browsers (esp. iOS). */
.coop-range {
  flex: 1;
  min-width: 0;
  height: 1.75rem;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  touch-action: pan-y;
  cursor: pointer;
  outline: none;
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.coop-range:focus-visible .coop-range-thumb {
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 45%, transparent);
}

.coop-range-track {
  position: relative;
  width: 100%;
  height: 0.28rem;
  border-radius: 999px;
  background: var(--fill-active);
}

.coop-range-fill {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0%;
  border-radius: inherit;
  background: var(--accent);
  pointer-events: none;
}

.coop-range-thumb {
  position: absolute;
  top: 50%;
  left: 0%;
  width: 1.35rem;
  height: 1.35rem;
  margin-top: -0.675rem;
  margin-left: -0.675rem;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.28), 0 0 0 1px rgba(0, 0, 0, 0.06);
  pointer-events: none;
}

.fov {
  margin-top: 0.65rem;
}

.fov-row {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  min-height: 2rem;
}

.fov-label,
.fov-value {
  flex: 0 0 auto;
  font-size: 0.82rem;
  font-variant-numeric: tabular-nums;
  color: var(--fg-secondary);
}

.fov-value {
  min-width: 2.6rem;
  text-align: right;
  color: var(--fg);
}

.fov-range .fov-detent {
  position: absolute;
  top: 50%;
  width: 2px;
  height: 0.55rem;
  margin-top: -0.275rem;
  margin-left: -1px;
  border-radius: 1px;
  background: var(--fg-secondary);
  opacity: 0.55;
  pointer-events: none;
}

.cut-remove {
  appearance: none;
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  padding: 0;
  border: 0;
  border-radius: 999px;
  background: var(--fill);
  color: var(--danger-fg);
  font: inherit;
  font-size: 1.15rem;
  line-height: 1;
  cursor: pointer;
}

.cut-remove:active {
  background: var(--fill-active);
}

#err {
  display: none;
  position: fixed;
  z-index: 5;
  top: calc(var(--safe-t) + 4.25rem);
  left: calc(var(--safe-l) + 12px);
  right: calc(var(--safe-r) + 12px);
  max-width: 28rem;
  margin: 0;
  padding: 0.85rem 1rem;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(255, 59, 48, 0.35);
  background: rgba(255, 59, 48, 0.16);
  color: var(--fg);
  font: inherit;
  font-size: 0.9rem;
  white-space: pre-wrap;
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
}

@media (min-width: 768px) {
  #err { right: auto; }
}
`,J0=!1;function Kw(){if(J0)return;J0=!0;let i=document.createElement("style");i.id="bp-viewer-chrome",i.textContent=Zw,document.head.appendChild(i)}function j0(i){Kw();let e=document.getElementById("sheet"),t=document.getElementById("sheet-handle"),n=document.getElementById("sheet-scroll"),s=window.matchMedia("(min-width: 768px)"),r=window.matchMedia("(prefers-color-scheme: dark)"),o=[],a="peek";function l(){return s.matches}function c(){return a}function u(){for(let le of o)le(a)}function f(le){o.push(le),le(a)}function h(){if(!e||!n)return;let le=document.getElementById("section-view"),je=document.getElementById("section-cuts"),Qe=t?.offsetHeight||22,Me=16,T=0;if(le&&(T+=le.offsetHeight),je){let ge=je.querySelector(".sheet-title"),Ee=je.querySelector(".cut-row");T+=32,ge&&(T+=ge.offsetHeight+8),Ee?T+=Ee.offsetHeight:T+=je.offsetHeight}let ee=Qe+T+Me,ne=window.innerHeight||640,Se=Math.round(ne*.28),q=Math.round(ne*.45),_e=Math.max(Se,Math.min(q,Math.round(ee)));return e.style.setProperty("--sheet-partial-h",`${_e}px`),_e}function d(){h(),!l()&&a==="partial"&&u()}function p(le){let je=getComputedStyle(document.documentElement).getPropertyValue(`--safe-${le}`).trim(),Qe=parseFloat(je);return Number.isFinite(Qe)?Qe:0}function x(){let le={top:0,right:0,bottom:0,left:0};if(!e)return le;if(l()){if(a!=="open")return le;let Qe=e.offsetWidth||0;return{top:0,right:Math.max(0,Math.round(Qe)),bottom:0,left:0}}if(a!=="partial")return le;let je=Math.round(U()+p("b"));return{top:0,right:0,bottom:Math.max(0,Math.min(window.innerHeight-80,je)),left:0}}function g(le,je={}){if(!e)return;(l()?["closed","open"]:["peek","partial","full"]).includes(le)||(le=l()?"open":"peek"),a=le,e.dataset.detent=le,e.classList.toggle("sheet-open",le!=="peek"&&le!=="closed"),document.body.classList.toggle("sheet-open",le!=="peek"&&le!=="closed"),y(),je.silent||u()}function m(){l()?g("open"):g("peek"),h()}let v=document.getElementById("top-chrome"),M=document.getElementById("sheet-toggle");if(!M&&v){let le=v.querySelector(".top-chrome-end");le||(le=document.createElement("div"),le.className="top-chrome-end",v.append(le)),M=document.createElement("button"),M.type="button",M.id="sheet-toggle",M.className="chrome-btn sheet-toggle",le.append(M)}function y(){if(!M)return;let le=a==="open";M.setAttribute("aria-expanded",le?"true":"false"),M.setAttribute("aria-label",le?"Hide controls":"Show controls"),M.title=le?"Hide controls":"Show controls",M.textContent=le?"\u203A":"\u2039"}M?.addEventListener("click",()=>{l()&&g(a==="open"?"closed":"open")});let E=!1,w=null,_=!1,b=!1,D=0,L=0,O=0,V=0,B="peek",I=0,G=0,Y=0,H=0,me=0,Z=null,k=12,J=28,ce='input, button, a, textarea, select, label, .seg, [role="slider"], [data-no-sheet-drag]';function j(){return Math.max(t?.offsetHeight||34,34)+8}function U(){return h()||window.innerHeight*.38}function ve(){let le=window.innerHeight||640;return Math.min(le*.92,le-72)}function ue(){return e?.offsetWidth||0}function de(le){return le instanceof Element?!!le.closest(ce):!1}function fe(){if(l()){g(a==="open"?"closed":"open");return}g(a==="peek"?"partial":a==="partial"?"full":"peek")}function be(){e&&(e.style.transform="",e.style.opacity="",e.style.pointerEvents="")}function Xe(le,je,Qe){if(e){E=!0,_=!1,w=je,b=!1,B=a,D=le.clientY,L=le.clientX,I=D,G=L,Y=performance.now(),H=0,me=0,V=Qe,Z=le.pointerId,e.classList.add("is-dragging"),e.style.transform=`translateX(${V}px)`,e.style.pointerEvents="auto";try{e.setPointerCapture(le.pointerId)}catch{}}}function Ne(le){if(!(!e||!t)&&!(le.target!==t&&!t.contains(le.target)&&le.target!==e)){E=!0,_=!1,w="narrow",b=!1,B=a,e.classList.add("is-dragging"),D=le.clientY,L=le.clientX,I=D,G=L,Y=performance.now(),H=0,me=0,O=e.getBoundingClientRect().height,Z=le.pointerId;try{t.setPointerCapture(le.pointerId)}catch{}le.preventDefault()}}function ze(le){if(!e||le.pointerType==="mouse"&&le.button!==0||le.target instanceof Element&&le.target.closest(".chrome-btn"))return;let je=ue();if(a==="closed"){let Qe=window.innerWidth-J-p("r");if(le.clientX<Qe)return;Xe(le,"wide-open",je),le.preventDefault();return}e.contains(le.target)&&(de(le.target)||(E=!0,_=!0,w="wide-close",b=!1,B=a,D=le.clientY,L=le.clientX,I=D,G=L,Y=performance.now(),H=0,me=0,V=0,Z=le.pointerId))}function Ue(le){l()?ze(le):Ne(le)}function qe(le){if(!E||!e||Z!=null&&le.pointerId!==Z)return;let je=performance.now(),Qe=Math.max(1,je-Y),Me=Math.hypot(le.clientX-L,le.clientY-D);if(_){if(Me<=k)return;let Se=le.clientX-L,q=le.clientY-D;if(Math.abs(Se)<Math.abs(q)*1.15||Se<=0){E=!1,_=!1,w=null,Z=null;return}_=!1,b=!0,e.classList.add("is-dragging"),n&&(n.style.overflow="hidden");try{e.setPointerCapture(le.pointerId)}catch{}le.preventDefault()}if(Me>k&&(b=!0),w==="narrow"){let Se=D-le.clientY;H=(I-le.clientY)/Qe*1e3,I=le.clientY,Y=je;let q=j(),_e=ve(),ge=Math.max(q,Math.min(_e,O+Se));e.style.height=`${ge}px`;return}let T=le.clientX-L;me=(le.clientX-G)/Qe*1e3,G=le.clientX,Y=je;let ee=ue(),ne=Math.max(0,Math.min(ee,V+T));e.style.transform=`translateX(${ne}px)`}function ht(le,je){let Qe=[{name:"peek",h:j()},{name:"partial",h:U()},{name:"full",h:ve()}],Me=Math.max(0,Qe.findIndex(_e=>_e.name===B)),T=Qe[Me].h;if(Math.abs(le-T)<36&&Math.abs(je)<1100)return B;let ee=le+je*.05,ne=(Qe[0].h+Qe[1].h)/2,Se=(Qe[1].h+Qe[2].h)/2,q=ee<ne?0:ee<Se?1:2;if(q>Me+1&&(q=Me+1),q<Me-1&&(q=Me-1),q===2&&Me<2){let _e=Se+(Qe[2].h-Se)*.25;le<_e&&je<1400&&(q=1)}return Qe[q].name}function lt(le,je){let Qe=ue();return Qe<=0||Math.abs(le-(B==="closed"?Qe:0))<28&&Math.abs(je)<800?B:je>900?"closed":je<-900?"open":le>Qe*.45?"closed":"open"}function xt(le){if(!E||!e||Z!=null&&le.pointerId!==Z)return;let je=w,Qe=_;if(E=!1,_=!1,w=null,Z=null,e.classList.remove("is-dragging"),n&&(n.style.overflow=""),Qe&&!b)return;if(!b){je==="narrow"?(e.style.height="",fe()):je==="wide-open"?(be(),g("open")):be();return}if(je==="narrow"){let ee=e.getBoundingClientRect().height;e.style.height="",g(ht(ee,H));return}let Me=/translateX\(([-\d.]+)px\)/.exec(e.style.transform||""),T=Me?parseFloat(Me[1]):0;be(),g(lt(T,me))}t?.addEventListener("pointerdown",le=>{l()||Ue(le)}),t?.addEventListener("pointermove",qe),t?.addEventListener("pointerup",xt),t?.addEventListener("pointercancel",xt),t&&t.setAttribute("aria-label","Sheet handle \u2014 tap to resize, drag to adjust"),document.addEventListener("pointerdown",le=>{l()&&ze(le)},{capture:!0}),document.addEventListener("pointermove",qe,{capture:!0}),document.addEventListener("pointerup",xt,{capture:!0}),document.addEventListener("pointercancel",xt,{capture:!0});let rt=()=>{e&&(e.style.height=""),be(),n&&(n.style.overflow=""),m()};s.addEventListener?s.addEventListener("change",rt):s.addListener(rt);function Pt(){i(r.matches)}return Pt(),r.addEventListener?r.addEventListener("change",Pt):r.addListener(Pt),window.addEventListener("resize",()=>{h(),u()}),m(),y(),{getDetent:c,getSafeInsets:x,onDetentChange:f,refreshPartialHeight:d,setDetent:g}}function Lu(i={}){let e=i.min??0,t=i.max??1,n=i.step??.001,s=!!i.thumbScrubOnly,r=Qa(i.value??e,e,t),o=document.createElement("div");o.className="coop-range",o.setAttribute("role","slider"),o.tabIndex=0,i.ariaLabel&&o.setAttribute("aria-label",i.ariaLabel),o.setAttribute("aria-valuemin",String(e)),o.setAttribute("aria-valuemax",String(t));let a=document.createElement("div");a.className="coop-range-track";let l=document.createElement("div");l.className="coop-range-fill";let c=document.createElement("div");c.className="coop-range-thumb",a.append(l,c),o.append(a);let u=10,f=14,h=null,d=0,p=0,x=!1,g=!1,m=!1,v=!0;function M(){let I=`${(t===e?0:(r-e)/(t-e))*100}%`;l.style.width=I,c.style.left=I,o.setAttribute("aria-valuenow",String(r));let G=i.formatAriaValue?.(r)??String(r);o.setAttribute("aria-valuetext",G)}function y(B,I){let G=typeof c.getBoundingClientRect=="function"?c.getBoundingClientRect():null;return!G||!(G.width>0)||!(G.height>0)?!0:B>=G.left-f&&B<=G.right+f&&I>=G.top-f&&I<=G.bottom+f}function E(B,I="input"){let G=Jw(Qa(B,e,t),e,t,n);if(G===r&&I==="silent"){M();return}r=G,M(),(I==="input"||I==="change")&&i.onInput?.(r),I==="change"&&i.onChange?.(r)}function w(B){let I=a.getBoundingClientRect(),G=Math.max(I.width,1),Y=Qa((B-I.left)/G,0,1);return e+Y*(t-e)}function _(B){if(h==null)return;let I=g;h=null,x=!1,g=!1,v=!0,I&&i.onScrubEnd?.(),B&&I&&i.onChange?.(r)}function b(B){h==null&&(B.pointerType==="mouse"&&B.button!==0||(h=B.pointerId,d=B.clientX,p=B.clientY,m=!1,x=!1,g=!1,v=!s||y(B.clientX,B.clientY)))}function D(B){if(h!==B.pointerId)return;let I=B.clientX-d,G=B.clientY-p;if(!m&&Math.hypot(I,G)>u&&(m=!0),!x){if(!m)return;if(B.pointerType==="touch"&&Math.abs(G)>=Math.abs(I)){_(!1);return}if(!v){_(!1);return}x=!0,g=!0,i.onScrubStart?.();try{o.setPointerCapture(B.pointerId)}catch{}}E(w(B.clientX),"input"),B.preventDefault()}function L(B){if(h===B.pointerId){if(!m&&!g){h=null,x=!1,g=!1,v=!0,i.onTap?.();return}_(!0)}}function O(B){h===B.pointerId&&_(!1)}function V(B){let I=t-e,G=n>0?n:I/100,Y=I/10,H=r;switch(B.key){case"ArrowLeft":case"ArrowDown":H=r-G;break;case"ArrowRight":case"ArrowUp":H=r+G;break;case"PageDown":H=r-Y;break;case"PageUp":H=r+Y;break;case"Home":H=e;break;case"End":H=t;break;case"Enter":case" ":B.preventDefault(),i.onTap?.();return;default:return}B.preventDefault(),E(H,"change")}return o.addEventListener("pointerdown",b),o.addEventListener("pointermove",D),o.addEventListener("pointerup",L),o.addEventListener("pointercancel",O),o.addEventListener("keydown",V),M(),{el:o,get value(){return r},set value(B){E(B,"silent")},refresh(){M()}}}function Qa(i,e,t){return Math.min(t,Math.max(e,i))}function Jw(i,e,t,n){if(!(n>0))return Qa(i,e,t);let s=Math.round((i-e)/n),r=Number((e+s*n).toPrecision(12));return Qa(r,e,t)}var Q0="blueprints.locale",jw={shell:"Shell",slopes:"Slopes",soffit:"Soffit",bass_traps:"Bass traps",furniture:"Furniture",interior:"Interior",cabinet:"Cabinets",appliance:"Appliances",sink:"Sink",rug:"Rug",light:"Lights",door:"Door",other:"Other",floor:"Floor",masonry:"Masonry",column:"Column",venec:"Ring beam",eps:"EPS",plaster:"Plaster",wall_plate:"Wall plate",rafters:"Rafters",roofing:"Roofing build-up",plenum_wool:"Mineral wool \u03BB 0.039",racking_strap:"Racking strap",tie_rod:"Tie rod \xD814",slope_light:"Slope spotlight",pocket_frame:"Pocket-door frame",wall_gkf:"GKF plasterboard",glazing:"Glazing",slope_naturheld_140:"NaturHeld 140",slope_gkf:"GKF plasterboard",slope_cd:"CD Rigips 60\xD727",slope_foil:"Jutafol N AL 170 Speci\xE1l",eave_ud:"UD 28/27 on the wall plate",vapour_brake_tape:"Vapour brake bond tape",eave_acrylic:"Acrylic bead (planned cut)",joint_screw:"Screws",slope_direct_hanger:"Direct hanger 200",slope_nonius:"Nonius 440",soffit_naturheld_140:"NaturHeld 140",soffit_mineral_wool:"Mineral wool \u03BB 0.039",soffit_ud:"UD channel",soffit_gkf:"GKF plasterboard",soffit_cd:"CD Rigips 60\xD727",soffit_nonius:"Nonius 440",soffit_duct:"Spiral duct \xD8160",bass_mineral_wool:"Mineral wool \u03BB 0.039",bass_gkb:"GKB plasterboard",bass_cw:"CW stud",bass_uw:"UW track",bass_strut:"CW strut to wall",bass_angle:"Wall angle",bass_anchor:"Anchor into the block",bass_tape:"Sealing tape",bass_acrylic:"Acrylic joint",bathroom:"Bathroom 1.20",tile:"Tiles",grout:"Grout",drain:"Floor drain",fixture:"Sanitary fixture",prewall:"Pre-wall",screen:"Shower screen",profile:"Sloped edge profile",vanity:"Vanity cabinet"},Qw={shell:"Ob\xE1lka",slopes:"\u0160ikminy",soffit:"Podhled",bass_traps:"Basstrapy",furniture:"N\xE1bytek",interior:"Interi\xE9r",cabinet:"Sk\u0159\xED\u0148ky",appliance:"Spot\u0159ebi\u010De",sink:"D\u0159ez",rug:"Koberec",light:"Sv\xEDtidla",door:"Dve\u0159e",other:"Ostatn\xED",floor:"Podlaha",masonry:"Zdivo",column:"Sloup",venec:"V\u011Bnec",eps:"EPS",plaster:"Om\xEDtka",wall_plate:"Pozednice",rafters:"Krokve",roofing:"St\u0159e\u0161n\xED skladba",plenum_wool:"Miner\xE1ln\xED vata \u03BB 0,039",racking_strap:"Zav\u011Btrovac\xED p\xE1ska",tie_rod:"T\xE1hlo \xF814",slope_light:"Bodovka na \u0161ikmin\u011B",pocket_frame:"Pouzdro",wall_gkf:"GKF s\xE1drokarton",glazing:"Zasklen\xED",slope_naturheld_140:"NaturHeld 140",slope_gkf:"GKF s\xE1drokarton",slope_cd:"CD Rigips 60\xD727",slope_foil:"Jutafol N AL 170 Speci\xE1l",eave_ud:"UD 28/27 na pozednici",vapour_brake_tape:"Lepic\xED p\xE1ska paroz\xE1brany",eave_acrylic:"Akrylov\xFD tmel (\u0159ez)",joint_screw:"\u0160rouby",slope_direct_hanger:"P\u0159\xEDm\xFD z\xE1v\u011Bs 200",slope_nonius:"Nonius 440",soffit_naturheld_140:"NaturHeld 140",soffit_mineral_wool:"Miner\xE1ln\xED vata \u03BB 0,039",soffit_ud:"UD profil",soffit_gkf:"GKF s\xE1drokarton",soffit_cd:"CD Rigips 60\xD727",soffit_nonius:"Nonius 440",soffit_duct:"Spiro \xD8160",bass_mineral_wool:"Miner\xE1ln\xED vata \u03BB 0,039",bass_gkb:"GKB s\xE1drokarton",bass_cw:"CW stojka",bass_uw:"UW profil",bass_strut:"CW vzp\u011Bra do zdi",bass_angle:"\xDAheln\xEDk do zdi",bass_anchor:"Hmo\u017Edinka do zdiva",bass_tape:"T\u011Bsnic\xED p\xE1ska",bass_acrylic:"Akrylov\xFD spoj",bathroom:"Koupelna 1.20",tile:"Dla\u017Eba",grout:"Sp\xE1ry",drain:"Podlahov\xE1 vpus\u0165",fixture:"Za\u0159izovac\xED p\u0159edm\u011Bt",prewall:"P\u0159\xEDzd\xEDvka",screen:"Sprchov\xE9 sklo",profile:"Sp\xE1dov\xE1 li\u0161ta",vanity:"Sk\u0159\xED\u0148ka umyvadla"},e1={"ui.view":"View","ui.sections":"Cuts","ui.parts":"Parts","ui.materials":"Materials","ui.edges":"Edges","ui.language":"Language","ui.solid":"Solid","ui.realistic":"Realistic","ui.edgesNone":"None","ui.edgesTransparent":"Transparent","ui.edgesOpaque":"Opaque","ui.iso":"Iso","ui.front":"Front","ui.side":"Side","ui.top":"Top","ui.fov":"FOV","ui.sync":"Sync","ui.measure":"Measure","ui.ar":"AR","ui.cut":"Cut","ui.removeSection":"Remove","ui.hideControls":"Hide controls","ui.showControls":"Show controls","ui.dragSheet":"Drag controls sheet","ui.drawing":"Drawing","ui.labels":"Labels","scene.overview":"Overview","scene.opening":"Door and window","scene.posts":"120 mm posts","scene.soffit":"Podhled","scene.gable":"\u0160t\xEDt","scene.sikmina-lattice":"\u0160ikmina \u2014 ro\u0161t","scene.sikmina-section":"\u0160ikmina \u2014 \u0159ez","scene.bass-kitchen":"Basov\xE1 past \u2014 kuchy\u0148","scene.bass-living":"Basov\xE1 past \u2014 ob\xFDv\xE1k","scene.bass-kitchen-elevation":"Kuchy\u0148 \u2014 pohled","scene.bass-kitchen-section":"Kuchy\u0148 \u2014 \u0159ez","scene.bass-living-elevation":"Ob\xFDv\xE1k \u2014 pohled","scene.bass-living-section":"Ob\xFDv\xE1k \u2014 \u0159ez","scene.ties-front":"T\xE1hla a sv\u011Btla \u2014 pohled","scene.ties-plan":"T\xE1hla a sv\u011Btla \u2014 p\u016Fdorys","scene.ties-section":"T\xE1hlo \u2014 \u0159ez","scene.kitchen-living":"Kuchy\u0148 k ob\xFDv\xE1ku","scene.living-kitchen":"Ob\xFDv\xE1k ke kuchyni","scene.kitchen-run":"Kuchy\u0148sk\xE1 linka","scene.bathroom-floor":"1.20 floor tiles","scene.bathroom":"1.20 room","scene.bathroom-door":"1.20 door and slope"},t1={"ui.view":"Pohled","ui.sections":"\u0158ezy","ui.parts":"D\xEDly","ui.materials":"Materi\xE1ly","ui.edges":"Hrany","ui.language":"Jazyk","ui.solid":"Pln\xE9","ui.realistic":"Realistick\xE9","ui.edgesNone":"\u017D\xE1dn\xE9","ui.edgesTransparent":"Pr\u016Fhledn\xE9","ui.edgesOpaque":"Nepr\u016Fhledn\xE9","ui.iso":"Iso","ui.front":"\u010Celo","ui.side":"Bok","ui.top":"P\u016Fdorys","ui.fov":"FOV","ui.sync":"Sjednotit","ui.measure":"M\u011B\u0159en\xED","ui.ar":"AR","ui.cut":"\u0158ez","ui.removeSection":"Odstranit","ui.hideControls":"Skr\xFDt ovl\xE1d\xE1n\xED","ui.showControls":"Zobrazit ovl\xE1d\xE1n\xED","ui.dragSheet":"P\u0159et\xE1hnout panel","ui.drawing":"V\xFDkres","ui.labels":"Popisky","scene.overview":"Celkov\u011B","scene.opening":"Dve\u0159e a okno","scene.posts":"Sloupky 120","scene.soffit":"Podhled","scene.gable":"\u0160t\xEDt","scene.sikmina-lattice":"\u0160ikmina \u2014 ro\u0161t","scene.sikmina-section":"\u0160ikmina \u2014 \u0159ez","scene.bass-kitchen":"Basov\xE1 past \u2014 kuchy\u0148","scene.bass-living":"Basov\xE1 past \u2014 ob\xFDv\xE1k","scene.bass-kitchen-elevation":"Kuchy\u0148 \u2014 pohled","scene.bass-kitchen-section":"Kuchy\u0148 \u2014 \u0159ez","scene.bass-living-elevation":"Ob\xFDv\xE1k \u2014 pohled","scene.bass-living-section":"Ob\xFDv\xE1k \u2014 \u0159ez","scene.ties-front":"T\xE1hla a sv\u011Btla \u2014 pohled","scene.ties-plan":"T\xE1hla a sv\u011Btla \u2014 p\u016Fdorys","scene.ties-section":"T\xE1hlo \u2014 \u0159ez","scene.kitchen-living":"Kuchy\u0148 k ob\xFDv\xE1ku","scene.living-kitchen":"Ob\xFDv\xE1k ke kuchyni","scene.kitchen-run":"Kuchy\u0148sk\xE1 linka","scene.bathroom-floor":"1.20 dla\u017Eba","scene.bathroom":"1.20 koupelna","scene.bathroom-door":"1.20 pr\xE1h a sp\xE1d"},Rd={en:{...e1,...jw},cs:{...t1,...Qw}},Eo=ex(),Cd=new Set;function ex(){try{let i=typeof navigator<"u"&&navigator.language||"";if(String(i).toLowerCase().startsWith("cs"))return"cs"}catch{}return"en"}function n1(){try{let i=localStorage.getItem(Q0);if(i==="en"||i==="cs")return i}catch{}return ex()}function i1(i){try{localStorage.setItem(Q0,i)}catch{}}function Du(){return Eo}function tx(i){if(!(i!=="en"&&i!=="cs")&&i!==Eo){Eo=i,i1(i);for(let e of Cd)try{e()}catch{}}}function nx(i){return Cd.add(i),()=>Cd.delete(i)}function ix(){return Eo=n1(),Eo}function Kt(i){let e=Rd[Eo]||Rd.en;if(Object.prototype.hasOwnProperty.call(e,i))return e[i];let t=Rd.en;return Object.prototype.hasOwnProperty.call(t,i)?t[i]:i.startsWith("scene.")?i.slice(6):i}function Pd(i){let e=i||document;e.querySelectorAll("[data-i18n]").forEach(t=>{let n=t.getAttribute("data-i18n");n&&(t.textContent=Kt(n))}),e.querySelectorAll("[data-i18n-aria]").forEach(t=>{let n=t.getAttribute("data-i18n-aria");n&&t.setAttribute("aria-label",Kt(n))}),e.querySelectorAll("[data-i18n-title]").forEach(t=>{let n=t.getAttribute("data-i18n-title");n&&t.setAttribute("title",Kt(n))})}function vr(i){return!!(i&&i.userData&&i.userData.bpHitProxy)}function sx(){let i=[];function e(n){i.push(n),i.sort((s,r)=>(r.priority||0)-(s.priority||0))}function t(n,s,r){let o=[];for(let a of n)r&&!r(a)||o.push(a);for(let a of o)for(let l of i){let c=l.claim?.(a,s);if(c)return c.onTap(),!0}for(let a of i)if(a.fallback?.(o,s))return!0;return!1}return{register:e,dispatch:t,handlers:i}}var rx=8,s1=56,ox=14,Id=11,ax=.5,r1=1e-4,Nu=128,o1=.028,a1=5,l1=.995,c1=.999,lx=18,u1=22,h1=14,Ld=new ke,cx=new ms,ai=new P,li=new P,qi=new P,On=new P,Ao=new P,Xi=new P,wo=new P,To=new P,Dt=new P,ux=new P,Ro=new P,f1=new dn;function Dd(i){let e=Math.abs(i)*1e3;return Number.isFinite(e)?Math.abs(e-Math.round(e))<.05?`${Math.round(e)} mm`:e>=100?`${e.toFixed(1)} mm`:`${e.toFixed(2)} mm`:"\u2014 mm"}function Nd(i){return i.pointerType==="touch"}function Od(i){return i.pointerType==="mouse"||i.pointerType==="pen"}function hx(){return typeof window<"u"&&window.matchMedia?.("(hover: hover) and (pointer: fine)").matches}function yx(i){let{scene:e,canvas:t,getCamera:n,controls:s,getRoot:r,getClipPlanes:o,onLiveLength:a,onActiveChange:l}=i,c="idle",u=!1,f=!1,h=0,d=0,p=null,x=null,g=null,m=null,v=null,M=null,y=null,E="mouse",w=0,_=0,b=!1,D=!1,L=new kt;L.name="MeasureOverlay",L.renderOrder=10,e.add(L);let O=new kt;O.name="MeasureDimensions",e.add(O);let V=px(16766474),B=px(3458905),I=mx(16766474,.75),G=x1(16766474);L.add(V,B,I,G),V.visible=!1,B.visible=!1,I.visible=!1,G.visible=!1;let Y=m1(t),H=[];function me(){return u}function Z(Me){let T=!!Me;if(T===u){T&&J();return}if(u=T,u)if(s.enabled=!1,c="placeFirst",k(),v=null,M=null,hx()){let ee=Math.max(1,t.clientWidth),ne=Math.max(1,t.clientHeight);j(ee*.5,ne*.5,!0)}else ce();else s.enabled=!0,c="idle",k(),v=null,M=null,y=null,D=!1,ce(),a?.(null);l?.(u),J(),ve()}function k(){f=!1,p=null,x=null,g=null,m=null}function J(){c==="placeSecond"&&v&&p?a?.(Dd(v.distanceTo(p))):u&&a?.(null)}function ce(){Y.hidden=!0,V.visible=!1,G.visible=!1}function j(Me,T,ee=!1){h=Me,d=T,f=!0;let ne=Ne(Me,T);if(ne){let Se=ne.point.clone(),q=ne.kind,_e=ne.edgeDir;if(m=null,c==="placeSecond"&&v){let ge=ze(v,M,ne);ge&&(Se=ge.foot,q="perp",_e=ge.edgeDir,m=ge.edgeDir.clone())}p=Se,x=q,g=_e}else ee?p||(x=null,g=null,m=null):(p=null,x=null,g=null,m=null);ve(),J()}function U(Me,T){let ee=be(T)*a1;Me.scale.setScalar(Math.max(ee,1e-6))}function ve(){if(!u){ce(),B.visible=!1,I.visible=!1,G.visible=!1;return}v?(B.visible=!0,B.position.copy(v),U(B,v)):B.visible=!1,f?(Y.hidden=!1,dx(Y,t,h,d,x),p?(V.visible=!0,V.position.copy(p),U(V,p),g1(V,x)):V.visible=!1):ce(),c==="placeSecond"&&v&&p?(xx(I,v,p),I.visible=!0):I.visible=!1,c==="placeSecond"&&x==="perp"&&v&&p&&m?(gx(G,v,p,m,be),G.visible=!0):G.visible=!1}function ue(Me){let T=t.getBoundingClientRect();return{x:Me.clientX-T.left,y:Me.clientY-T.top}}function de(Me,T,ee){return ee==="touch"?{x:Me,y:T-s1}:{x:Me,y:T}}function fe(Me){let T=o()||[];for(let ee of T)if(ee.distanceToPoint(Me)<-r1)return!1;return!0}function be(Me){let T=n(),ee=Math.max(1,t.clientHeight);if(T.isOrthographicCamera)return 2*((T.top-T.bottom)/(2*Math.max(T.zoom,1e-6)))/ee;let ne=T.position.distanceTo(Me),Se=T.fov*Math.PI/180;return 2*Math.tan(Se/2)*ne/ee/Math.max(T.zoom,1e-6)}function Xe(Me,T){T.copy(Me).project(n());let ee=Math.max(1,t.clientWidth),ne=Math.max(1,t.clientHeight);return T.x=(T.x*.5+.5)*ee,T.y=(-T.y*.5+.5)*ne,T}function Ne(Me,T){let ee=r();if(!ee)return null;let ne=t.getBoundingClientRect();Ld.x=Me/Math.max(1,ne.width)*2-1,Ld.y=-(T/Math.max(1,ne.height))*2+1,cx.setFromCamera(Ld,n());let Se=cx.intersectObject(ee,!0),q=null;for(let Le of Se)if(!(!Le.object.visible||vr(Le.object))&&fe(Le.point)){q=Le;break}if(!q)return null;let _e=q.object,ge=_e.geometry;if(!ge?.getAttribute("position"))return{point:q.point.clone(),kind:"face",edgeDir:null,mesh:_e,triVerts:null,faceNormal:null};_e.updateWorldMatrix(!0,!1);let Ee=be(q.point),C=Ee*ox,S=Ee*Id,W=ge.getAttribute("position"),ye=ge.getIndex(),he=q.faceIndex,re=[];if(q.face)ai.fromBufferAttribute(W,q.face.a).applyMatrix4(_e.matrixWorld),li.fromBufferAttribute(W,q.face.b).applyMatrix4(_e.matrixWorld),qi.fromBufferAttribute(W,q.face.c).applyMatrix4(_e.matrixWorld),re.push(ai.clone(),li.clone(),qi.clone());else if(typeof he=="number"){let Le,Ze,X;ye?(Le=ye.getX(he*3),Ze=ye.getX(he*3+1),X=ye.getX(he*3+2)):(Le=he*3,Ze=he*3+1,X=he*3+2),ai.fromBufferAttribute(W,Le).applyMatrix4(_e.matrixWorld),li.fromBufferAttribute(W,Ze).applyMatrix4(_e.matrixWorld),qi.fromBufferAttribute(W,X).applyMatrix4(_e.matrixWorld),re.push(ai.clone(),li.clone(),qi.clone())}let xe=null;re.length===3&&(xe=new P().subVectors(re[1],re[0]).cross(On.subVectors(re[2],re[0])).normalize(),xe.lengthSq()<1e-12&&(xe=null));let ie=Me,oe=T,Re=null;function N(Le){if(!fe(Le)||Le.distanceToSquared(q.point)>C*C*4)return;Xe(Le,To);let Ze=Math.hypot(To.x-ie,To.y-oe);Ze>ox||(!Re||Ze<Re.distPx)&&(Re={point:Le.clone(),distPx:Ze})}for(let Le of re)N(Le);let pe=C*C*4,ae=W.count,Ie=ae>8e3?2:1;for(let Le=0;Le<ae;Le+=Ie)On.fromBufferAttribute(W,Le).applyMatrix4(_e.matrixWorld),!(On.distanceToSquared(q.point)>pe)&&N(On);if(Re)return{point:Re.point,kind:"vertex",edgeDir:null,mesh:_e,triVerts:re.length?re:null,faceNormal:xe};let we=null;function Pe(Le,Ze){Dt.copy(Ze).sub(Le);let X=Dt.lengthSq();if(X<1e-18)return;let Ce=On.copy(q.point).sub(Le).dot(Dt)/X;if(Ce=Math.min(1,Math.max(0,Ce)),Ao.copy(Le).addScaledVector(Dt,Ce),!fe(Ao)||Ao.distanceToSquared(q.point)>S*S*4)return;Xe(Ao,To);let et=Math.hypot(To.x-ie,To.y-oe);if(et>Id)return;Xe(Le,Xi),Xe(Ze,wo);let Ae=wo.x-Xi.x,ct=wo.y-Xi.y,Nt=Ae*Ae+ct*ct;if(Nt>1e-6){let Qt=((ie-Xi.x)*Ae+(oe-Xi.y)*ct)/Nt;Qt=Math.min(1,Math.max(0,Qt));let Ms=Xi.x+Ae*Qt,$i=Xi.y+ct*Qt;if(Math.hypot(ie-Ms,oe-$i)>Id)return}(!we||et<we.distPx)&&(we={point:Ao.clone(),distPx:et,dir:Dt.clone().normalize()})}return re.length===3&&(Pe(re[0],re[1]),Pe(re[1],re[2]),Pe(re[2],re[0])),we?{point:we.point,kind:"edge",edgeDir:we.dir,mesh:_e,triVerts:re.length?re:null,faceNormal:xe}:{point:q.point.clone(),kind:"face",edgeDir:null,mesh:_e,triVerts:re.length?re:null,faceNormal:xe}}function ze(Me,T,ee){if(!ee.mesh||!ee.triVerts||ee.triVerts.length!==3||!ee.faceNormal||ee.faceNormal.lengthSq()<1e-12)return null;let ne=be(Me),Se=ne*h1,q=Math.max(ne*2,1e-5);if(Math.abs(Ou(Me,ee.triVerts[0],ee.faceNormal))>q)return null;let _e=Ue(ee.mesh,ee.triVerts[0],ee.faceNormal,q);if(!_e.length)return null;let ge=[];for(let S of _e)fx(Me,S.a,S.b)<=Se&&ge.push(S.dir.clone());if(T&&T.lengthSq()>1e-12&&ge.push(T.clone().normalize()),!ge.length)return null;let Ee=ne*lx,C=null;for(let S of ge)if(!(S.lengthSq()<1e-12)){S.normalize();for(let W of _e){if(Math.abs(W.dir.dot(S))<l1||fx(Me,W.a,W.b)<=Se)continue;let ye=d1(Me,W.a,W.b);if(!fe(ye)||Me.distanceTo(ye)*1e3<ax||(Dt.copy(ye).sub(Me),Dt.lengthSq()<1e-16)||(Dt.normalize(),Math.abs(Dt.dot(S))>.08))continue;let re=ee.point.distanceTo(ye);Xe(ee.point,Xi),Xe(ye,wo);let xe=Math.hypot(Xi.x-wo.x,Xi.y-wo.y);if(re>Ee*1.35&&xe>lx)continue;let ie=xe+re/Math.max(ne,1e-9);(!C||ie<C.score)&&(C={foot:ye.clone(),edgeDir:S.clone(),score:ie})}}return C?{foot:C.foot,edgeDir:C.edgeDir}:null}function Ue(Me,T,ee,ne){let Se=Me.geometry,q=Se?.getAttribute("position");if(!q)return[];Me.updateWorldMatrix(!0,!1);let _e=Se.getIndex(),ge=new Map,Ee=Math.max(ne*.25,1e-5);function C(re,xe,ie){Ro.subVectors(xe,re).cross(On.subVectors(ie,re)),!(Ro.lengthSq()<1e-16)&&(Ro.normalize(),!(Math.abs(Ro.dot(ee))<c1)&&(Math.abs(Ou(re,T,ee))>ne||Math.abs(Ou(xe,T,ee))>ne||Math.abs(Ou(ie,T,ee))>ne||(S(re,xe),S(xe,ie),S(ie,re))))}function S(re,xe){if(Dt.copy(xe).sub(re),Dt.lengthSq()<1e-16)return;let ie=p1(re,xe,Ee);ge.has(ie)||ge.set(ie,{a:re.clone(),b:xe.clone(),dir:Dt.clone().normalize()})}let W=_e?_e.count/3:q.count/3,ye=12e3,he=W>ye?Math.ceil(W/ye):1;for(let re=0;re<W;re+=he){let xe,ie,oe;if(_e){let Re=re*3;xe=_e.getX(Re),ie=_e.getX(Re+1),oe=_e.getX(Re+2)}else xe=re*3,ie=re*3+1,oe=re*3+2;ai.fromBufferAttribute(q,xe).applyMatrix4(Me.matrixWorld),li.fromBufferAttribute(q,ie).applyMatrix4(Me.matrixWorld),qi.fromBufferAttribute(q,oe).applyMatrix4(Me.matrixWorld),C(ai,li,qi)}return[...ge.values()]}function qe(){if(p){if(c==="placeFirst"){v=p.clone(),M=g?g.clone():null,c="placeSecond",m=null,(Nd({pointerType:E})||!hx())&&(f=!1,p=null,x=null,g=null,ce()),ve(),J();return}if(c==="placeSecond"&&v){if(v.distanceTo(p)*1e3<ax)return;ht(v,p),Z(!1)}}}function ht(Me,T){let ee=new kt;ee.name="Dimension";let ne=mx(16752394,1);xx(ne,Me,T),ne.visible=!0;let Se=Me.clone().lerp(T,.5),q=Me.distanceTo(T),_e=_1(Dd(q));_e.position.copy(Se),ee.add(ne,_e),O.add(ee),H.push({group:ee,sprite:_e,mid:Se.clone(),span:q}),lt(_e,Me,T,Se,q)}function lt(Me,T,ee,ne,Se){let q=n();if(q.getWorldDirection(ux),Dt.copy(ee).sub(T),Dt.lengthSq()<1e-16){Me.position.copy(ne);return}Dt.normalize(),On.crossVectors(Dt,ux),On.lengthSq()<1e-10&&On.copy(q.up),On.normalize();let _e=Math.max(Se*o1,be(ne)*18);Me.position.copy(ne).addScaledVector(On,_e);let ge=be(Me.position)*56;Me.scale.set(ge*2.2,ge,1)}function xt(){B.visible&&v&&U(B,v),V.visible&&p&&U(V,p),f&&dx(Y,t,h,d,x),G.visible&&v&&p&&m&&x==="perp"&&gx(G,v,p,m,be);for(let Me of H){let ee=Me.group.children[0].geometry.getAttribute("position");ai.fromBufferAttribute(ee,0),li.fromBufferAttribute(ee,1),lt(Me.sprite,ai,li,Me.mid,Me.span)}}function rt(Me){if(!u||c==="idle"||!Od(Me)||y!==null)return;let{x:T,y:ee}=ue(Me),ne=de(T,ee,Me.pointerType);j(ne.x,ne.y,!0)}function Pt(Me){if(!u||c==="idle"||Me.button!==void 0&&Me.button!==0||y!==null)return;y=Me.pointerId,E=Me.pointerType||"mouse";let{x:T,y:ee}=ue(Me);w=T,_=ee,b=!1,D=!1;try{t.setPointerCapture(Me.pointerId)}catch{}if(Od(Me)){let ne=de(T,ee,E);j(ne.x,ne.y,!0)}Me.preventDefault()}function le(Me){if(!u)return;if(y===null){rt(Me);return}if(y!==Me.pointerId)return;let{x:T,y:ee}=ue(Me);if(Math.hypot(T-w,ee-_)>=rx&&(b=!0,D=!0),Nd(Me)){if(!D)return;let Se=de(T,ee,"touch");j(Se.x,Se.y,!0)}else if(Od(Me)){let Se=de(T,ee,E);j(Se.x,Se.y,!0)}Me.preventDefault()}function je(Me){if(!u||y!==Me.pointerId)return;let{x:T,y:ee}=ue(Me);Math.hypot(T-w,ee-_)>=rx&&(b=!0,D=!0),y=null;try{t.releasePointerCapture(Me.pointerId)}catch{}if(Nd(Me)){b?D=!1:(D=!1,f&&p&&qe()),Me.preventDefault();return}!b&&p&&qe(),D=!1,Me.preventDefault()}function Qe(Me){y===Me.pointerId&&(y=null,D=!1)}return t.addEventListener("pointerdown",Pt),t.addEventListener("pointermove",le),t.addEventListener("pointerup",je),t.addEventListener("pointercancel",Qe),{isActive:me,setActive:Z,update:xt,formatMm:Dd}}function Ou(i,e,t){return f1.setFromNormalAndCoplanarPoint(t,e).distanceToPoint(i)}function fx(i,e,t){Dt.copy(t).sub(e);let n=Dt.lengthSq();if(n<1e-18)return i.distanceTo(e);let s=On.copy(i).sub(e).dot(Dt)/n;return s=Math.min(1,Math.max(0,s)),Ao.copy(e).addScaledVector(Dt,s).distanceTo(i)}function d1(i,e,t){Dt.copy(t).sub(e);let n=Dt.lengthSq();if(n<1e-18)return e.clone();let s=On.copy(i).sub(e).dot(Dt)/n;return s=Math.min(1,Math.max(0,s)),e.clone().addScaledVector(Dt,s)}function p1(i,e,t){let n=Math.round(i.x/t),s=Math.round(i.y/t),r=Math.round(i.z/t),o=Math.round(e.x/t),a=Math.round(e.y/t),l=Math.round(e.z/t);return n<o||n===o&&s<a||n===o&&s===a&&r<=l?`${n},${s},${r}|${o},${a},${l}`:`${o},${a},${l}|${n},${s},${r}`}function m1(i){let e=document.getElementById("measure-crosshair");return e||(e=document.createElement("div"),e.id="measure-crosshair",e.className="measure-crosshair",e.hidden=!0,e.setAttribute("aria-hidden","true"),e.innerHTML='<span class="measure-crosshair-h"></span><span class="measure-crosshair-v"></span><span class="measure-crosshair-dot"></span>',(i.parentElement||document.body).appendChild(e),e)}function dx(i,e,t,n,s){let r=e.getBoundingClientRect();i.style.left=`${r.left+t}px`,i.style.top=`${r.top+n}px`,i.dataset.snap=s||"none"}function px(i){let e=new pa(1,16,12),t=new sn({color:i,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),n=new ft(e,t);return n.renderOrder=20,n.visible=!1,n}function g1(i,e){let t=i.material;e==="vertex"?t.color.setHex(16729402):e==="edge"||e==="perp"?t.color.setHex(16766474):t.color.setHex(6607615)}function mx(i,e){let t=new Lt,n=new Float32Array(6);t.setAttribute("position",new Ft(n,3));let s=new as({color:i,transparent:e<1,opacity:e,depthTest:!1,depthWrite:!1}),r=new Li(t,s);return r.renderOrder=19,r.frustumCulled=!1,r.visible=!1,r}function x1(i){let e=new Lt,t=new Float32Array(9);e.setAttribute("position",new Ft(t,3));let n=new as({color:i,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),s=new Li(e,n);return s.renderOrder=22,s.frustumCulled=!1,s.visible=!1,s}function gx(i,e,t,n,s){let r=s(t)*u1;if(Dt.copy(e).sub(t),Dt.lengthSq()<1e-16){i.visible=!1;return}if(Dt.normalize(),On.copy(n).normalize(),Ro.crossVectors(On,Dt),Ro.lengthSq()<1e-12){i.visible=!1;return}ai.copy(t).addScaledVector(On,r),li.copy(t),qi.copy(t).addScaledVector(Dt,r);let o=i.geometry.getAttribute("position");o.setXYZ(0,ai.x,ai.y,ai.z),o.setXYZ(1,li.x,li.y,li.z),o.setXYZ(2,qi.x,qi.y,qi.z),o.needsUpdate=!0,i.geometry.computeBoundingSphere()}function xx(i,e,t){let n=i.geometry.getAttribute("position");n.setXYZ(0,e.x,e.y,e.z),n.setXYZ(1,t.x,t.y,t.z),n.needsUpdate=!0,i.geometry.computeBoundingSphere()}function _1(i){let e=document.createElement("canvas");e.width=Nu*2,e.height=Nu;let t=e.getContext("2d");if(t){t.clearRect(0,0,e.width,e.height);let o=18,a=14;t.font=`600 ${Math.round(Nu*.42)}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;let l=t.measureText(i),c=Math.ceil(l.width),u=Math.round(Nu*.42),f=c+o*2,h=u+a*2,d=(e.width-f)/2,p=(e.height-h)/2,x=18;t.fillStyle="rgba(28, 28, 30, 0.78)",_x(t,d,p,f,h,x),t.fill(),t.strokeStyle="rgba(255, 255, 255, 0.22)",t.lineWidth=2,_x(t,d,p,f,h,x),t.stroke(),t.fillStyle="#f5f5f7",t.textAlign="center",t.textBaseline="middle",t.fillText(i,e.width/2,e.height/2+1)}let n=new ls(e);n.colorSpace=St,n.needsUpdate=!0;let s=new so({map:n,depthTest:!1,depthWrite:!1,transparent:!0}),r=new sa(s);return r.renderOrder=21,r.center.set(.5,.5),r}function _x(i,e,t,n,s,r){let o=Math.min(r,n/2,s/2);i.beginPath(),i.moveTo(e+o,t),i.arcTo(e+n,t,e+n,t+s,o),i.arcTo(e+n,t+s,e,t+s,o),i.arcTo(e,t+s,e,t,o),i.arcTo(e,t,e+n,t,o),i.closePath()}var Ud=12,y1=500,v1=Math.PI/2,M1=.03,S1=.001;function b1(i){let e=Math.min(1,Math.max(0,i));return e<.5?4*e*e*e:1-(-2*e+2)**3/2}function E1(i){return i.blocked||i.modifiers||i.button!==void 0&&i.button!==0||(i.pointers??1)>1?"ignore":Math.hypot(i.dx,i.dy)>Ud?"drag":"tap"}function w1(i,e){return(e>=0?1:-1)*i*v1}function T1(i,e=null){let t=i.length,n=new Map,s=a=>{let l=n.has(a)?n.get(a):a;return l!==a?(l=s(l),n.set(a,l)):n.has(a)||n.set(a,a),l},r=(a,l)=>{let c=s(a),u=s(l);c!==u&&n.set(c,u)};if(e){let a=new Map,l=1e4,c=e.count??i.reduce((u,f)=>Math.max(u,f),0)+1;for(let u=0;u<c;u++){let f=`${Math.round(e.getX(u)*l)},${Math.round(e.getY(u)*l)},${Math.round(e.getZ(u)*l)}`,h=a.get(f);h===void 0?a.set(f,u):r(u,h)}}for(let a=0;a+2<t;a+=3)r(i[a],i[a+1]),r(i[a+1],i[a+2]);let o=new Map;for(let a=0;a+2<t;a+=3){let l=s(i[a]),c=o.get(l);c||(c=[],o.set(l,c)),c.push(a)}return[...o.values()]}function vx(i){let e=i.geometry,t=e?.getIndex?.(),n=e?.getAttribute?.("position");if(!t||!n||!i.parent)return[i];let s=T1(t.array,n);if(s.length<2)return[i];let r=e.getAttribute("normal"),o=[];for(let a of s){let l=new Map,c=[],u=[],f=[],h=x=>{let g=l.get(x);return g!==void 0||(g=c.length/3,l.set(x,g),c.push(n.getX(x),n.getY(x),n.getZ(x)),r&&u.push(r.getX(x),r.getY(x),r.getZ(x))),g};for(let x of a)f.push(h(t.getX(x)),h(t.getX(x+1)),h(t.getX(x+2)));let d=new Lt;d.setAttribute("position",new Bt(c,3)),u.length&&d.setAttribute("normal",new Bt(u,3)),d.setIndex(f);let p=new ft(d,i.material);p.name=i.name,p.position.copy(i.position),p.quaternion.copy(i.quaternion),p.scale.copy(i.scale),p.visible=i.visible,i.parent.add(p),o.push(p)}return i.parent.remove(i),e.dispose?.(),o}function A1(i){let e=[];i.traverse(n=>{(n.name||"").replace(/_\d+$/,"")!=="door"||(n.parent?.name||"").replace(/_\d+$/,"")==="door"||e.push(n)});let t=[];for(let n of e){if(n.isMesh){t.push(...vx(n));continue}let s=[];if(n.traverse(r=>{r.isMesh&&s.push(r)}),s.length===1){let r=vx(s[0]);if(r.length>1){t.push(...r);continue}}t.push(n)}return t}function R1(i,e,t=M1){let n=[];for(let a of i)for(let l of e){if(!l||l.kind!=="hinged"||!l.hinge)continue;let c=l.center;if(!Array.isArray(c)||c.length<3)continue;let u=a.center.x-Number(c[0]),f=a.center.y-Number(c[1]),h=a.center.z-Number(c[2]),d=Math.hypot(u,f,h);d<=t&&n.push({distance:d,entry:a,record:l})}n.sort((a,l)=>a.distance-l.distance);let s=new Set,r=new Set,o=[];for(let a of n)s.has(a.entry)||r.has(a.record.id)||(s.add(a.entry),r.add(a.record.id),o.push({entry:a.entry,record:a.record}));return o}function C1(i){return i.updateWorldMatrix(!0,!0),new Gt().setFromObject(i).getCenter(new P)}function P1(i,e){let t=i.parent;if(!t)return null;let n=new kt;n.name=`hinge:${e.id}`,t.add(n),t.updateWorldMatrix(!0,!1);let s=new P(Number(e.hinge[0]),Number(e.hinge[1]),Number(e.hinge[2]));n.position.copy(t.worldToLocal(s)),n.updateWorldMatrix(!0,!1),n.attach(i);let r={id:e.id,pivot:n,host:i,sign:Number(e.sign)>=0?1:-1,goal:0,anim:null},o=a=>{a.userData.bpDoor=r};return o(n),i.traverse(o),r}function Fu(i,e){let t=i.anim;if(!t)return i.goal;let n=(e-t.t0)/y1;return n>=1?(i.anim=null,i.goal=t.to,t.to):t.from+(t.to-t.from)*b1(n)}var Mx=new Xt,el=new P;function I1(i,e){if(i.quaternion.identity(),Math.abs(e)<=1e-8)return;let t=i.parent;el.set(0,1,0),t&&(t.updateWorldMatrix(!0,!1),t.getWorldQuaternion(Mx).invert(),el.applyQuaternion(Mx)),!(el.lengthSq()<1e-12)&&(el.normalize(),i.rotateOnAxis(el,e))}function L1(i,e){let t=Fu(i,e);return I1(i.pivot,w1(t,i.sign)),t}function D1(i,e){let t=Fu(i,e),n=i.goal>.5?0:1;i.goal=n,i.anim={from:t,to:n,t0:e}}function N1(i,e){let t=Fu(i,e);return t<=.001?!1:(i.goal>.5&&(i.goal=0,i.anim={from:t,to:0,t0:e}),!0)}var Uu=new P,O1=new sn({side:Ct,transparent:!0,opacity:0,depthWrite:!1});function U1(i){let e=[];if(i.updateWorldMatrix(!0,!0),i.traverse(g=>{g.isMesh&&g.geometry?.getAttribute?.("position")&&e.push(g)}),!e.length)return null;let t=new P,n=new P,s=new P;if(e[0].updateWorldMatrix(!0,!1),e[0].matrixWorld.extractBasis(t,n,s),t.lengthSq()<1e-12||n.lengthSq()<1e-12||s.lengthSq()<1e-12)return null;t.normalize(),n.normalize(),s.normalize();let r=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,u=-1/0;for(let g of e){let m=g.geometry;m.boundingBox||m.computeBoundingBox();let v=m.boundingBox,M=[v.min.x,v.max.x],y=[v.min.y,v.max.y],E=[v.min.z,v.max.z];for(let w of M)for(let _ of y)for(let b of E){Uu.set(w,_,b).applyMatrix4(g.matrixWorld);let D=Uu.dot(t),L=Uu.dot(n),O=Uu.dot(s);D<r&&(r=D),L<o&&(o=L),O<a&&(a=O),D>l&&(l=D),L>c&&(c=L),O>u&&(u=O)}}let f=[(l-r)/2,(c-o)/2,(u-a)/2];if(f.some(g=>!(g>1e-6)))return null;let h=(r+l)/2,d=(o+c)/2,p=(a+u)/2;return{center:new P(t.x*h+n.x*d+s.x*p,t.y*h+n.y*d+s.y*p,t.z*h+n.z*d+s.z*p),axes:[t,n,s],half:f}}function F1(i,e){let t=new Di(i.half[0]*2,i.half[1]*2,i.half[2]*2),n=new ft(t,O1);return n.name=e||"opening",n.matrix.makeBasis(i.axes[0],i.axes[1],i.axes[2]),n.matrix.setPosition(i.center),n.matrixAutoUpdate=!1,n.matrixWorld.copy(n.matrix),n.matrixWorldNeedsUpdate=!1,n.visible=!1,n.frustumCulled=!1,n.userData.bpHitProxy=!0,n.raycast=()=>{},n}function B1(i,e){let t=i.origin,n=i.direction,s=0,r=1/0;for(let o=0;o<3;o++){let a=e.axes[o],l=a.x*(e.center.x-t.x)+a.y*(e.center.y-t.y)+a.z*(e.center.z-t.z),c=a.x*n.x+a.y*n.y+a.z*n.z,u=e.half[o];if(Math.abs(c)>1e-8){let f=(l+u)/c,h=(l-u)/c;if(f>h){let d=f;f=h,h=d}if(f>s&&(s=f),h<r&&(r=h),s>r)return null}else if(-l-u>0||-l+u<0)return null}return r<0?null:{tEnter:s,tExit:r}}function z1(i){if(!i.length)return null;let e=i[0];for(let t of i)t.tEnter>e.tEnter&&(e=t);return e.binding}function k1(i){let e=i;for(;e;){if(e.userData?.bpDoor&&!vr(e))return e.userData.bpDoor;e=e.parent}return null}function H1(i){let e=i.object;if(!e||!e.visible||vr(e))return!1;let t=e.userData;return!(t&&(t.isEdgeOverlay||t.isSectionCap))}function V1(i){i.proxy?.geometry?.dispose?.(),i.proxy=null,i.obb=null}function Sx(i){let e=Array.isArray(i.records)?i.records:[],t=i.canvas,n=i.isBlocked||(()=>!1),s=[],r=new ms,o=new ke,a=null,l=0,c=sx();c.register({id:"door",priority:100,claim(m,v){let M=k1(m.object);return M?{onTap(){D1(M,v.now)}}:null}}),c.register({id:"opening",priority:10,fallback(m,v){let M=[];for(let E of s){if(!E.obb||Fu(E,v.now)<=S1)continue;let w=B1(v.raycaster.ray,E.obb);w&&M.push({binding:E,tEnter:w.tEnter})}let y=z1(M);return y?N1(y,v.now):!1}});function u(m){for(let y of s)V1(y);if(s.length=0,!m||!e.length)return 0;m.updateWorldMatrix(!0,!0);let M=A1(m).map(y=>({host:y,center:C1(y)}));for(let y of R1(M,e)){let E=P1(y.entry.host,y.record);if(!E)continue;let w=U1(E.host);E.obb=w,E.proxy=w?F1(w,`opening:${E.id}`):null,s.push(E)}return s.length}function f(m){let v=!1;for(let M of s){let y=!!M.anim;!y&&M.shown===M.goal||(L1(M,m),M.shown=M.anim?null:M.goal,y&&(v=!0))}return v}function h(m){if(!(m.button!==void 0&&m.button!==0)){if(l+=1,l>1){a=null;return}a={id:m.pointerId,x:m.clientX,y:m.clientY,moved:0,pointers:1}}}function d(m){if(!a||m.pointerId!==a.id)return;let v=Math.hypot(m.clientX-a.x,m.clientY-a.y);v>a.moved&&(a.moved=v)}function p(m){if(l=Math.max(0,l-1),!a||m.pointerId!==a.id)return;let v=a;a=null;let M=Math.max(v.moved,Math.hypot(m.clientX-v.x,m.clientY-v.y));E1({dx:M,dy:0,pointers:l>0?2:1,button:m.button,blocked:n(),modifiers:m.altKey||m.ctrlKey||m.metaKey||m.shiftKey})==="tap"&&g(m)}function x(){l=Math.max(0,l-1),a=null}function g(m){let v=i.getCamera();if(!v||!s.length)return;let M=t.getBoundingClientRect(),y=M.width||t.clientWidth||1,E=M.height||t.clientHeight||1;o.x=(m.clientX-M.left)/y*2-1,o.y=-((m.clientY-M.top)/E)*2+1,r.setFromCamera(o,v);let _=s[0]?.pivot?.parent;for(;_?.parent;)_=_.parent;if(!_)return;let b=r.intersectObject(_,!0);c.dispatch(b,{raycaster:r,now:performance.now()},H1)}return t.addEventListener("pointerdown",h,!0),t.addEventListener("pointermove",d,!0),t.addEventListener("pointerup",p,!0),t.addEventListener("pointercancel",x,!0),{bind:u,step:f,bindings:s,taps:c}}var Hd=.3,Tx=1.5,G1=.5,Fd=new ke,W1=new P,Vu=new P,Bd=new P,Bu=new P,zu=new P,Co=new P,ku=new P,zd=new Xt,bx=new Xt,Hu=new Xt,Ex=new Xt,kd=new Fs,X1=new P(0,1,0),wx=new ms;function q1(i,e,t=Hd,n=Tx){let s=Number.isFinite(e)&&e>0?e:0,r=Number.isFinite(i)&&i>0?i:null;return r!=null&&r>=t?r:r!=null?Math.max(n,t):s>=t?s:Math.max(n,t)}function Y1(i,e,t=Hd,n=Tx){return Number.isFinite(i)&&i>.001?i:e>=t?null:Math.max(n,t)}function $1(i,e,t=Hd,n=G1){return Number.isFinite(i)&&i>0?!(e>0)||e<t?!0:i<e*n:!1}function Z1(i,e,t,n=1){let s=2*Math.PI*n/Math.max(1,t);return{theta:-i*s,phi:-e*s}}function K1(i,e,t,n,s){if(!n&&!s||(zu.copy(i.position).sub(t),zu.lengthSq()<1e-12))return!1;Co.copy(i.up),Co.lengthSq()<1e-12?Co.set(0,1,0):Co.normalize(),Ex.setFromUnitVectors(Co,X1),Bu.copy(zu).applyQuaternion(Ex),kd.setFromVector3(Bu);let r=1e-6;return s=Math.min(Math.PI-r,Math.max(r,kd.phi+s))-kd.phi,zd.setFromAxisAngle(Co,n),ku.set(1,0,0).applyQuaternion(i.quaternion).applyQuaternion(zd),ku.lengthSq()<1e-12?!1:(ku.normalize(),bx.setFromAxisAngle(ku,s),Hu.copy(bx).multiply(zd),Bu.copy(zu).applyQuaternion(Hu),i.position.copy(t).add(Bu),e.sub(t).applyQuaternion(Hu).add(t),i.quaternion.premultiply(Hu),!0)}function J1(i,e,t){return!(t>0)||(i.getWorldDirection(Vu),Bd.copy(i.position).addScaledVector(Vu,t),Bd.distanceToSquared(e)<1e-12)?!1:(e.copy(Bd),!0)}function j1(i,e){let t=i.material,n=Array.isArray(t)?t:[t];for(let s of n){let r=s&&s.clippingPlanes;if(r){for(let o of r)if(o.distanceToPoint(e)<-1e-4)return!1}}return!0}function Q1(i,e,t,n,s){if(!e||!t||e.isOrthographicCamera)return null;let r=i.getBoundingClientRect(),o=r.width||i.clientWidth||1,a=r.height||i.clientHeight||1;Fd.x=(n-r.left)/o*2-1,Fd.y=-((s-r.top)/a)*2+1,t.updateWorldMatrix(!0,!0),wx.setFromCamera(Fd,e);let l=wx.intersectObject(t,!0);e.getWorldDirection(Vu);for(let c of l){let u=c.object;if(!u.visible||vr(u))continue;let f=u.userData;if(f&&(f.isEdgeOverlay||f.isSectionCap||f.isPeeledEdgeBatch)||!j1(u,c.point))continue;let h=c.distance;if(!(h>1e-4))continue;let d=W1.copy(c.point).sub(e.position).dot(Vu);if(d>1e-4)return{point:c.point.clone(),slant:h,depth:d}}return null}function eT(i){let{canvas:e,controls:t}=i,n=i.isBlocked||(()=>!1),s=new Map,r=null;function o(){return t.enabled!==!1&&!n()}function a(){let y=i.getCamera();return!!(y&&y.isPerspectiveCamera)}function l(y,E){return Q1(e,i.getCamera(),i.getRoot(),y,E)}function c(y){let E=i.getCamera();!E||!a()||y==null||J1(E,t.target,y)}function u(y,E){let w=i.getCamera();if(!w||!a())return;let _=l(y,E),b=w.position.distanceTo(t.target);c(q1(_?_.slant:null,b))}function f(y,E){let w=i.getCamera();if(!w||!a())return;let _=l(y,E),b=w.position.distanceTo(t.target);c(Y1(_?_.depth:null,b))}function h(){r=null,t.enableRotate=!0}function d(y){if(s.set(y.pointerId,{x:y.clientX,y:y.clientY}),!o()){h(),t.zoomToCursor=!1;return}if(!a()){h(),t.zoomToCursor=!1;return}if(s.size>=2){h(),t.zoomToCursor=!0;let L=p(y);u(L.x,L.y);return}let E=y.pointerType==="touch",w=y.button??0;if(!E&&w===2){h(),f(y.clientX,y.clientY);return}if(!E&&w===1){h(),u(y.clientX,y.clientY);return}if(!E&&w!==0)return;if(!E&&(y.shiftKey||y.ctrlKey||y.metaKey)){h(),f(y.clientX,y.clientY);return}let _=i.getCamera(),b=l(y.clientX,y.clientY),D=_?_.position.distanceTo(t.target):0;if(!b||!$1(b.slant,D)){h();return}t.enableRotate=!1,r={id:y.pointerId,x:y.clientX,y:y.clientY,lastX:y.clientX,lastY:y.clientY,point:b.point.clone(),dragging:!1},t.dispatchEvent({type:"start"})}function p(y){let E=y.clientX,w=y.clientY,_=1;for(let[b,D]of s)b!==y.pointerId&&(E+=D.x,w+=D.y,_+=1);return{x:E/_,y:w/_}}function x(y){let E=s.get(y.pointerId);if(E&&(E.x=y.clientX,E.y=y.clientY),!r||y.pointerId!==r.id||s.size!==1||!o())return;let w=i.getCamera();if(!w)return;let _=y.clientX-r.lastX,b=y.clientY-r.lastY;if(!r.dragging){if(Math.hypot(y.clientX-r.x,y.clientY-r.y)<=Ud)return;r.dragging=!0}if(!_&&!b)return;let D=Z1(_,b,e.clientHeight||1,t.rotateSpeed);K1(w,t.target,r.point,D.theta,D.phi),w.lookAt(t.target),r.lastX=y.clientX,r.lastY=y.clientY}function g(y){s.delete(y.pointerId),r&&r.id===y.pointerId&&h(),s.size<2&&(t.zoomToCursor=!1),s.size===0&&(t.enableRotate=!0)}function m(y){g(y)}function v(y){if(!o()||!a()){t.zoomToCursor=!1;return}if(t.state!==-1||r&&r.dragging){t.zoomToCursor=!1;return}t.zoomToCursor=!0,u(y.clientX,y.clientY)}function M(){s.size<2&&(t.zoomToCursor=!1)}return{onPointerDown:d,onPointerMove:x,onPointerUp:g,onPointerCancel:m,onWheel:v,onWheelDone:M}}function Ax(i){let e=eT(i),t={capture:!0};return i.canvas.addEventListener("pointerdown",e.onPointerDown,t),i.canvas.addEventListener("pointermove",e.onPointerMove,t),i.canvas.addEventListener("pointerup",e.onPointerUp,t),i.canvas.addEventListener("pointercancel",e.onPointerCancel,t),i.canvas.addEventListener("wheel",e.onWheel,t),i.canvas.addEventListener("wheel",e.onWheelDone),e}var Po=class extends bi{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let s=0;s<t;s+=3)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];return super.setPositions(n),this}setColors(e){let t=e.length-3,n=new Float32Array(2*t);for(let s=0;s<t;s+=3)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];return super.setColors(n),this}setFromPoints(e){let t=e.length-1,n=new Float32Array(6*t);for(let s=0;s<t;s++)n[6*s]=e[s].x,n[6*s+1]=e[s].y,n[6*s+2]=e[s].z||0,n[6*s+3]=e[s+1].x,n[6*s+4]=e[s+1].y,n[6*s+5]=e[s+1].z||0;return super.setPositions(n),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}};var Gu=class extends Ws{constructor(e=new Po,t=new ki({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}};var tT='-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',nT=420,iT=36,sT=new P,Rx=new P,Cx=new P,Vd=new P,Mr=new P,Ys=new P;function Xd(i){return new P(i[0]*.001,i[2]*.001,-i[1]*.001)}function Gd(i,e){if(typeof i=="number"&&Number.isFinite(i))return i;if(typeof i!="string")return e;let t=i.trim().replace("#","");return/^[0-9a-fA-F]{6}$/.test(t)?Number.parseInt(t,16):e}function Px(i){let e=[];if(Array.isArray(i.anchor)&&i.anchor.length>=3&&e.push(i.anchor),Array.isArray(i.tips))for(let t of i.tips)Array.isArray(t)&&t.length>=3&&e.push(t);return e.length?e:[i.anchor]}function rT(i){let e=Math.abs(i)*1e3;return Number.isFinite(e)?Math.abs(e-Math.round(e))<.05?`${Math.round(e)} mm`:e>=100?`${e.toFixed(1)} mm`:`${e.toFixed(2)} mm`:""}function Wu(i,e){return i==null?"":typeof i=="string"?i:String(i[e==="cs"?"cs":"en"]||i.en||i.cs||"")}function oT(i){if(!Number.isFinite(i)||i<=0)return"";let e=i*1e3/nT,t=Math.max(1,Math.round(e));return Number.isFinite(t)?`1:${t}`:""}function aT(i,e){if(e==="plate")return iT;let t=Math.min(Math.max(1,i.clientWidth),Math.max(1,i.clientHeight));return Math.round(Math.min(14,Math.max(12,t*.034)))}function Io(i,e,t,n="center",s=null,r=1){let o=Number.isFinite(r)&&r>0?r:1,a=Math.max(8,Math.round(t*o)),l=i.map(_=>String(_)).filter(_=>_.length),c=document.createElement("canvas"),u=c.getContext("2d"),f=`600 ${a}px ${tT}`,h=Math.ceil(a*.35),d=Math.ceil(a*.2),p=Math.ceil(a*1.25);u&&(u.font=f);let x=a;if(u)for(let _ of l)x=Math.max(x,u.measureText(_).width);let g=Math.ceil(x+h*2),m=Math.ceil(Math.max(l.length,1)*p+d*2),v=2;c.width=g*v,c.height=m*v;let M=c.getContext("2d");if(M){M.scale(v,v),M.clearRect(0,0,g,m);let _=e==="plate";M.font=f,M.textAlign="left",M.textBaseline="middle",M.lineJoin="round",M.miterLimit=2,M.lineWidth=Math.max(2,a*.28),M.strokeStyle=_?"#ffffff":"rgba(0,0,0,0.92)",M.fillStyle=s||(_?"#141414":"#f7f7f8"),l.forEach((b,D)=>{let L=h,O=d+p*D+p*.5;M.strokeText(b,L,O),M.fillText(b,L,O)})}let y=new ls(c);y.colorSpace=St,y.flipY=!0,y.needsUpdate=!0;let E=new sn({map:y,depthTest:!1,depthWrite:!1,transparent:!0,toneMapped:!1,side:Ct}),w=new ft(new ni(1,1),E);return w.renderOrder=30,w.frustumCulled=!1,w.userData.cssWidth=g,w.userData.cssHeight=m,w.userData.anchor=n,w.userData.fill=s,w.userData.fontScale=o,w}function Wd(i){return`#${(i>>>0).toString(16).padStart(6,"0")}`}function Yi(i,e=!1){let t=new Po;t.setPositions([0,0,0,0,0,0]);let n=new ki({color:i,linewidth:e?2.4:1.75,depthTest:!1,depthWrite:!1,transparent:!0,toneMapped:!1,worldUnits:!1,dashed:!!e,dashSize:.08,gapSize:.06,dashScale:1});e&&(n.dashed=!0);let s=new Gu(t,n);return s.renderOrder=25,s.frustumCulled=!1,s.computeLineDistances(),s}function vs(i,e,t){i.geometry.setPositions([e.x,e.y,e.z,t.x,t.y,t.z]),i.computeLineDistances()}function Ix(i){let{scene:e,getCamera:t,getCanvas:n,getLocale:s,getVisibleWidthM:r,getTarget:o}=i,a=i.getExaggeration||(()=>1),l=new kt;l.name="Annotations",l.userData.blueprintAnnotations=!0,e.add(l);let c=null,u="viewer",f=!0,h=0,d=[],p=null,x=null,g=null;function m(){return u==="plate"?1315860:15921908}function v(k){return k&&k.color!=null?Gd(k.color,m()):c&&c.annotationColor!=null?Gd(c.annotationColor,m()):m()}function M(k){return Wd(v(k))}function y(k){let J=Number(k&&k.size);return Number.isFinite(J)&&J>0?J:1}function E(k){k.traverse(J=>{J.geometry&&J.geometry.dispose();let ce=J.material;ce&&(ce.map&&ce.map.dispose(),ce.dispose())})}function w(){for(let k of[...l.children])l.remove(k),E(k);d=[],p=null,x=null,g=null}function _(){return aT(n(),u)}function b(){l.visible=!!c&&f}function D(){if(w(),h=_(),!c){b();return}let k=s(),J=m(),ce=h,j=Array.isArray(c.annotations)?c.annotations:[];for(let de of j)if(!(!de||typeof de!="object")){if(de.kind==="callout"&&Array.isArray(de.anchor)){let fe=Wu(de.text,k);if(!fe)continue;let be=Io(fe.split(`
`),u,ce,"center",M(de),y(de)),Xe=(de.leader===!1?[]:Px(de)).map(()=>Yi(v(de)));l.add(...Xe,be),d.push({kind:"callout",sprite:be,lines:Xe,data:de})}else if(de.kind==="dim"&&Array.isArray(de.a)&&Array.isArray(de.b)){let fe=v(de),be=Io(["0"],u,ce,"center",Wd(fe),y(de)),Xe=Yi(fe),Ne=Yi(fe),ze=Yi(fe),Ue=Yi(fe),qe=Yi(fe);l.add(Xe,Ne,ze,Ue,qe,be),d.push({kind:"dim",sprite:be,lines:[Xe,Ne,ze,Ue,qe],data:de})}else if(de.kind==="line"&&Array.isArray(de.points)&&de.points.length>=2){let fe=Gd(de.color,m()),Xe=[Yi(fe,!!de.dashed)];de.arrow&&Xe.push(Yi(fe,!1),Yi(fe,!1));let Ne=null,ze=Wu(de.text,k);ze&&(Ne=Io(ze.split(`
`),u,ce,"center",Wd(fe),y(de))),l.add(...Xe),Ne&&l.add(Ne),d.push({kind:"line",sprite:Ne,lines:Xe,data:de})}}let U=Wu(c.title,k),ve=c.project?String(c.project):"",ue=[...U.split(`
`),ve].filter(Boolean);ue.length&&(p=Io(ue,u,ce,"topleft"),l.add(p)),x=Io(["1:1"],u,ce,"bottomleft"),g=Yi(J),l.add(g,x),b()}function L(k){let J=Xd(k),ce=a();return ce!==1&&(J.y*=ce),J}function O(k,J=sT){return J.copy(k).project(t())}function V(k,J,ce,j=new P){return j.set(k,J,ce).unproject(t())}function B(k){let J=t(),ce=n(),j=Math.max(1,ce.clientHeight);if(J.isOrthographicCamera){let ue=Math.max(J.zoom,1e-6);return(J.top-J.bottom)/ue/j}let U=Math.max(J.position.distanceTo(k),1e-4),ve=(J.fov||45)*Math.PI/180;return 2*Math.tan(ve/2)*U/j}let I=new P,G=new P;function Y(k,J){let ce=t(),j=B(J),U=j*k.userData.cssWidth,ve=j*k.userData.cssHeight;I.set(1,0,0).applyQuaternion(ce.quaternion),G.set(0,1,0).applyQuaternion(ce.quaternion);let ue=k.userData.anchor||"center";k.position.copy(J),ue==="topleft"?(k.position.addScaledVector(I,U*.5),k.position.addScaledVector(G,-ve*.5)):ue==="bottomleft"&&(k.position.addScaledVector(I,U*.5),k.position.addScaledVector(G,ve*.5)),k.quaternion.copy(ce.quaternion),k.scale.set(U,ve,1)}function H(){let k=n(),J=Math.max(1,k.width),ce=Math.max(1,k.height);l.traverse(j=>{let U=j.material;U&&U.resolution&&U.resolution.set(J,ce)})}function me(k,J){let ce=Io(J,u,h||_(),k.userData.anchor,k.userData.fill,k.userData.fontScale||1);k.material.map?.dispose(),k.material.dispose(),k.material=ce.material,k.userData.cssWidth=ce.userData.cssWidth,k.userData.cssHeight=ce.userData.cssHeight,ce.geometry.dispose()}function Z(){if(!c||!f||(_()!==h&&D(),!l.visible))return;H();let J=s();t().updateMatrixWorld();for(let ue of d)if(ue.kind==="callout"){let de=L(ue.data.anchor),fe=O(de,Rx),be=Array.isArray(ue.data.offset)?ue.data.offset:[.08,.06],Xe=fe.x+Number(be[0]||0)*2,Ne=fe.y+Number(be[1]||0)*2,ze=V(Xe,Ne,fe.z,Cx);Y(ue.sprite,ze);let Ue=B(ze),qe=Ue*ue.sprite.userData.cssWidth*.5,ht=Px(ue.data);for(let lt=0;lt<ue.lines.length;lt+=1){let xt=L(ht[lt]||ue.data.anchor);Mr.copy(ze).sub(xt);let rt=Mr.length();rt>qe+Ue?(Mr.setLength(rt-qe),Mr.add(xt)):Mr.copy(ze),vs(ue.lines[lt],xt,Mr)}}else if(ue.kind==="dim"){let de=L(ue.data.a),fe=L(ue.data.b),be=O(de,Rx),Xe=O(fe,Cx),Ne=Xe.x-be.x,ze=Xe.y-be.y,Ue=Math.hypot(Ne,ze)||1e-6;Ne/=Ue,ze/=Ue;let qe=Number(ue.data.offset)||.04,ht=-ze*qe*2,lt=Ne*qe*2,xt=(be.z+Xe.z)*.5,rt=V(be.x+ht,be.y+lt,xt,new P),Pt=V(Xe.x+ht,Xe.y+lt,xt,new P),le=B(rt),je=le*6,Qe=le*8;Ys.copy(rt).sub(de);let Me=Ys.length()||1;Ys.multiplyScalar((Me+Qe)/Me);let T=de.clone().add(Ys);Ys.copy(Pt).sub(fe);let ee=Ys.length()||1;Ys.multiplyScalar((ee+Qe)/ee);let ne=fe.clone().add(Ys),Se=de.clone().lerp(rt,Math.min(.85,je/Me)),q=fe.clone().lerp(Pt,Math.min(.85,je/ee));vs(ue.lines[0],Se,T),vs(ue.lines[1],q,ne),vs(ue.lines[2],rt,Pt);let _e=le*10,Ee=V(be.x+ht-ze*.012,be.y+lt+Ne*.012,xt,new P).sub(rt);Ee.lengthSq()<1e-16?Ee.set(0,_e,0):Ee.setLength(_e),vs(ue.lines[3],rt.clone().sub(Ee),rt.clone().add(Ee)),vs(ue.lines[4],Pt.clone().sub(Ee),Pt.clone().add(Ee)),Vd.copy(rt).lerp(Pt,.5);let C=V(be.x+ht-ze*.03,be.y+lt+Ne*.03,xt,new P).sub(V(be.x+ht,be.y+lt,xt,new P));C.lengthSq()>1e-12&&Vd.add(C);let W=Wu(ue.data.text,J)||rT(de.distanceTo(fe));ue.sprite.userData.labelText!==W&&(me(ue.sprite,[W]),ue.sprite.userData.labelText=W),Y(ue.sprite,Vd)}else if(ue.kind==="line"){let de=ue.data.points.map(be=>L(be)),fe=[];for(let be of de)fe.push(be.x,be.y,be.z);if(ue.lines[0].geometry.setPositions(fe),ue.lines[0].computeLineDistances(),ue.data.arrow&&de.length>=2&&ue.lines.length>=3){let be=de[de.length-2],Xe=de[de.length-1],Ne=Xe.clone().sub(be);if(Ne.lengthSq()>1e-12){Ne.normalize();let ze=B(Xe),Ue=Ne.clone().multiplyScalar(-ze*16),qe=new P().crossVectors(Ne,t().up).normalize().multiplyScalar(ze*7);qe.lengthSq()<1e-16&&qe.set(ze*7,0,0),vs(ue.lines[1],Xe,Xe.clone().add(Ue).add(qe)),vs(ue.lines[2],Xe,Xe.clone().add(Ue).sub(qe))}}if(ue.sprite){let be=de[0].clone().lerp(de[de.length-1],.5);Y(ue.sprite,be)}}let j=O(o(),Mr).z;if(p){let ue=V(-.94,.9,j,new P);Y(p,ue)}let U=r(),ve=oT(U??NaN);if(x&&g){let ue=U!=null&&U>8?2:1,de=V(-.9,-.86,j,new P),fe=V(-.9+.08,-.86,j,new P).sub(de),be=B(de),Xe=U&&U>0?ue/U*Math.max(1,n().clientWidth):80;fe.lengthSq()>1e-12?fe.setLength(Math.max(Xe*be,be*40)):fe.set(be*80,0,0),vs(g,de,de.clone().add(fe));let Ne=x.userData.labelText,ze=ve?`${ve}  \xB7  ${Math.round(ue*1e3)} mm`:"";Ne!==ze&&(me(x,ze?[ze]:["\u2014"]),x.userData.labelText=ze);let Ue=V(-.9,-.8,j,new P).sub(de);Y(x,de.clone().add(Ue))}}return{group:l,setSpec(k){c=k&&typeof k=="object"?k:null,D(),Z()},setInk(k){u=k==="plate"?"plate":"viewer",D(),Z()},setVisible(k){f=!!k,b(),l.visible&&Z()},isVisible(){return f},relocalize(){D(),Z()},glyphBoundsNdc(){let k=n(),J=Math.max(1,k.clientWidth),ce=Math.max(1,k.clientHeight),j=1/0,U=-1/0,ve=1/0,ue=-1/0,de=!1;for(let fe of d){let be=fe.sprite;if(!be||be===p||be===x||fe.kind!=="callout"&&fe.kind!=="dim"&&fe.kind!=="line")continue;let Xe=O(be.position),Ne=(be.userData.cssWidth||0)/J,ze=(be.userData.cssHeight||0)/ce;j=Math.min(j,Xe.x-Ne),U=Math.max(U,Xe.x+Ne),ve=Math.min(ve,Xe.y-ze),ue=Math.max(ue,Xe.y+ze),de=!0}return de?{minX:j,maxX:U,minY:ve,maxY:ue}:null},update:Z,clear(){c=null,w(),l.visible=!1}}}function Lx(i){return i/25.4*72}function qd(i,e){let t=URL.createObjectURL(i),n=document.createElement("a");n.href=t,n.download=e,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(t),3e4)}function lT(i){let e=document.createElement("canvas");e.width=i.width,e.height=i.height;let t=e.getContext("2d");return t?(t.drawImage(i,0,0),new Promise((n,s)=>{e.toBlob(r=>{r?n(r):s(new Error("PNG capture failed"))},"image/png")})):Promise.reject(new Error("2D canvas unavailable"))}async function cT(i){let e=await createImageBitmap(i),t=document.createElement("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d",{willReadFrequently:!0});if(!n)throw new Error("2D canvas unavailable");return n.drawImage(e,0,0),e.close?.(),n.getImageData(0,0,t.width,t.height)}async function uT(i){if(typeof CompressionStream>"u")return{bytes:i,filter:""};let e=new Blob([i]).stream().pipeThrough(new CompressionStream("deflate"));return{bytes:new Uint8Array(await new Response(e).arrayBuffer()),filter:"/Filter /FlateDecode "}}function tl(i){return typeof i=="string"?new TextEncoder().encode(i):i}async function hT(i){let e=i.width,t=i.height,n=i.data,s=new Uint8Array(e*t*3);for(let y=0,E=0;y<n.length;y+=4,E+=3){let w=n[y+3]/255;s[E]=Math.round(n[y]*w+255*(1-w)),s[E+1]=Math.round(n[y+1]*w+255*(1-w)),s[E+2]=Math.round(n[y+2]*w+255*(1-w))}let{bytes:r,filter:o}=await uT(s),a=Lx(420),l=Lx(297),c=`q
${a.toFixed(3)} 0 0 ${l.toFixed(3)} 0 0 cm
/Im0 Do
Q
`,u=new TextEncoder().encode(c),f=[],h=0;function d(y){f.push(y),h+=y.length}let p=[0];function x(y,E){p[y]=h,d(tl(`${y} 0 obj
`));for(let w of E)d(tl(w));d(tl(`
endobj
`))}d(tl(`%PDF-1.4
`)),x(1,["<< /Type /Catalog /Pages 2 0 R >>"]),x(2,["<< /Type /Pages /Kids [3 0 R] /Count 1 >>"]),x(3,[`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${a.toFixed(3)} ${l.toFixed(3)}] `,"/Contents 4 0 R /Resources << /XObject << /Im0 5 0 R >> >> >>"]),x(4,[`<< /Length ${u.length} >>
stream
`,u,`
endstream`]),x(5,[`<< /Type /XObject /Subtype /Image /Width ${e} /Height ${t} `,`/ColorSpace /DeviceRGB /BitsPerComponent 8 ${o}/Length ${r.length} >>
stream
`,r,`
endstream`]);let g=h,m=`xref
0 6
0000000000 65535 f 
`;for(let y=1;y<=5;y++)m+=`${String(p[y]).padStart(10,"0")} 00000 n 
`;m+=`trailer
<< /Size 6 /Root 1 0 R >>
startxref
${g}
%%EOF
`,d(tl(m));let v=new Uint8Array(h),M=0;for(let y of f)v.set(y,M),M+=y.length;return new Blob([v],{type:"application/pdf"})}async function Dx(i){let e=await lT(i),t=await cT(e),n=await hT(t);return{png:e,pdf:n}}var Yd="scene";function mT(){try{return(new URLSearchParams(location.search).get(Yd)||"").trim()}catch{return""}}function Ox(i){try{let e=new URL(location.href),t=i!=null?String(i).trim():"";t?e.searchParams.set(Yd,t):e.searchParams.delete(Yd);let n=`${e.pathname}${e.search}${e.hash}`,s=`${location.pathname}${location.search}${location.hash}`;n!==s&&history.replaceState(null,"",n)}catch{}}function gT(i,e,t={}){let n=Array.isArray(t.scenes)?t.scenes:[],s=Array.isArray(t.partGroups)?t.partGroups:[],r=Array.isArray(t.doors)?t.doors:[],o=String(t.scene!=null?t.scene:mT()).trim();ix(),Pd(document);let a=[],l=null,c=1842206,u=!0,f=N0(),h=f0(),d=new Map,p=new Map,x=new Map,g=new Map,m=new Set,v=new Map,M=new Map,y=new Map,E=new Set,w=null;w=j0(R=>{u=R,c=R?1842206:15263981,l&&(l.background=new We(c)),document.documentElement.style.colorScheme=R?"dark":"light",d.size&&Sr()});let _=new au({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0,logarithmicDepthBuffer:!0});_.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),_.outputColorSpace=St,_.toneMapping=po,_.toneMappingExposure=1.05,_.localClippingEnabled=!0;let b=T0(_);l=new zn,l.background=new We(c);let D=1,L=new kt;L.name="VerticalExaggeration",l.add(L);function O(R){let z=Number(R);D=Number.isFinite(z)&&z>0?z:1,L.scale.set(1,D,1)}let V=30,B=120,I=75,G=125,Y="perspective",H=I,me=I,Z=1,k=!1,J=new on(45,1,.01,1e6),ce=new _i(-1,1,1,-1,.01,1e6),j=J,U=new pu(j,i);U.enableDamping=!1,U.screenSpacePanning=!0;let ve=()=>!1,ue=Sx({canvas:i,getCamera:()=>j,records:r,isBlocked:()=>ve()}),de=Ix({scene:l,getCamera:()=>j,getCanvas:()=>i,getLocale:Du,getVisibleWidthM:()=>{if(!j.isOrthographicCamera)return null;let R=Math.max(j.zoom,1e-6);return(j.right-j.left)/R},getTarget:()=>U.target,getExaggeration:()=>D}),fe=null,be=null;l.add(new Sa(16777215,.45));let Xe=new Os(16777215,1.15);Xe.position.set(.6,1,.4),l.add(Xe);let Ne=new Os(16777215,.4);Ne.position.set(-.5,.2,-.6),l.add(Ne);let ze=new vo(_);l.environment=ze.fromScene(new mu,.04).texture,ze.dispose();let Ue=null;Ax({canvas:i,controls:U,getCamera:()=>j,getRoot:()=>Ue,isBlocked:()=>ve()||U.enabled===!1});let qe=new Gt,ht=new P,lt=new P,xt=new P,rt=new P,Pt=new P,le=[],je=1,Qe=!1,Me=!1,T=!1;new uu().parse(e,"",R=>{Ue=R.scene,L.add(Ue),ue.bind(Ue),Ue.traverse(K=>{if(!K.isMesh)return;let $=K.name||K.parent?.name||"part",Te=$.replace(/_\d+$/,"")||$;if(d.has(Te)||d.set(Te,[]),d.get(Te).push(K),K.material){let Ke=Array.isArray(K.material)?K.material:[K.material];for(let Ge of Ke)"side"in Ge&&(Ge.side=Ct)}}),Ce(),Lo(),$s(),nl(),qu();let z=Xu(o);z&&(Ki=`scene:${String(z.id).trim()}`),se(),Le(),De(),He(),Sr(),z&&ct(z),Uo(),w?.refreshPartialHeight(),kx(),Hx(),Tr(),Ar()},R=>{ne(String(R?.message||R))});function ne(R){let z=document.getElementById("err");z&&(z.style.display="block",z.textContent=R)}function Se(){Ue&&(qe.setFromObject(Ue),qe.getSize(ht),qe.getCenter(lt))}function q(){let R=Math.max(1,i.clientWidth),z=Math.max(1,i.clientHeight);return R/z}function _e(R,z){let K=R*Math.PI/180;return 2*Math.atan(Math.tan(K/2)/Math.max(z,1e-6))}function ge(){let R=q();J.aspect=R,J.fov=_e(H,R)*180/Math.PI,J.updateProjectionMatrix()}function Ee(R,z){let K=q(),$=Math.max(R,1e-6)*Math.tan(z/2),Te=$*K;ce.left=-Te,ce.right=Te,ce.top=$,ce.bottom=-$,ce.updateProjectionMatrix()}function C(){let R=q(),K=Math.max(ce.top,1e-6)*R;ce.left=-K,ce.right=K,ce.updateProjectionMatrix()}function S(R,z){let K=q(),$=Math.max(R,1e-6),Ke=Math.max(z,1e-6),Ge=Ke*K;Ge<$&&(Ge=$,Ke=Ge/Math.max(K,1e-6)),Z=1,ce.left=-Ge,ce.right=Ge,ce.top=Ke,ce.bottom=-Ke,ce.updateProjectionMatrix(),re()}function W(R){let z=Math.max(R,1e-4),K=xt.copy(j.position).sub(U.target);K.lengthSq()<1e-12?K.set(0,0,1):K.normalize(),j.position.copy(U.target).addScaledVector(K,z)}function ye(R){R!==j&&(R.position.copy(j.position),R.quaternion.copy(j.quaternion),R.up.copy(j.up),R.near=j.near,R.far=j.far,j=R,U.object=j,U.update())}function he(){let R=Math.abs(gn)>.05||Math.abs(ut)>.05||Math.abs(en-1)>.001?en:1;return Z*R}function re(){j.zoom=he(),j.updateProjectionMatrix()}function xe(){if(k||Me||!j.isOrthographicCamera)return;let R=Math.abs(gn)>.05||Math.abs(ut)>.05||Math.abs(en-1)>.001?en:1;Z=Math.max(j.zoom/Math.max(R,1e-6),1e-6)}function ie(){if(Y==="ortho")return;me=H;let R=j.position.distanceTo(U.target),z=_e(H,q());Ee(R,z),Z=1,X(()=>{k=!0,ye(ce),Y="ortho",re(),k=!1}),we()}function oe(R){if(Y!=="ortho")return;let z=pe(R??me),K=Math.max(ce.top,1e-6)/Math.max(Z,1e-6),$=_e(z,q()),Te=K/Math.max(Math.tan($/2),1e-8);H=z,me=z,Z=1,X(()=>{k=!0,ye(J),Y="perspective",ge(),W(Te),re(),Ze(),U.update(),k=!1}),we()}function Re(R,z={}){let K=pe(R);if(Y==="ortho"){oe(K);return}let $=q(),Te=_e(H,$),Ke=_e(K,$),Ge=j.position.distanceTo(U.target);H=K,me=K,X(()=>{if(ge(),z.reframe!==!1){let st=Math.tan(Te/2)/Math.max(Math.tan(Ke/2),1e-8);W(Ge*st),Ze(),U.update()}re()}),we()}function N(){Y==="ortho"?oe(me):ie()}function pe(R){return Math.min(B,Math.max(V,R))}function ae(){return Y==="ortho"?G:H}function Ie(R){return R>B?"ISO":`${Math.round(R)}\xB0`}function we(){fe&&(fe.value=ae()),be&&(be.textContent=Y==="ortho"?"ISO":`${Math.round(H)}\xB0`),fe?.refresh()}function Pe(R){if(R>B){Y!=="ortho"?ie():we();return}let z=pe(R);Y==="ortho"?oe(z):Re(z,{reframe:!0})}function Le(){let R=document.getElementById("fov");if(!R)return;R.replaceChildren();let z=document.createElement("div");z.className="fov-row";let K=document.createElement("span");K.className="fov-label",K.textContent=Kt("ui.fov"),be=document.createElement("span"),be.className="fov-value",be.textContent=`${Math.round(H)}\xB0`,fe=Lu({min:V,max:G,step:1,value:ae(),ariaLabel:"Field of view",formatAriaValue:Ie,onInput:Ge=>Pe(Ge),onChange:Ge=>Pe(Ge),onTap:()=>N()}),fe.el.classList.add("fov-range");let $=document.createElement("div");$.className="fov-detent",$.setAttribute("aria-hidden","true");let Te=(B-V)/(G-V);$.style.left=`${Te*100}%`,fe.el.querySelector(".coop-range-track")?.append($),z.append(K,fe.el,be),R.append(z),we()}function Ze(){let R=Math.max(ht.x,ht.y,ht.z,.01),z=j.position.distanceTo(U.target),K=Math.round(Math.min(Math.max(z/200,R/5e3,.001),z/10)*1e4)/1e4,$=Math.round(Math.max(z+R*4,R*8,10)*1e4)/1e4;j.near===K&&j.far===$||(j.near=K,j.far=$,j.updateProjectionMatrix())}function X(R){Me=!0;try{R()}finally{requestAnimationFrame(()=>{Me=!1})}}ge();function Ce(){Ue&&(X(()=>{Se(),U.target.copy(lt);let z=Math.max(ht.x,ht.y,ht.z,1)*1.85;j.position.set(lt.x+z*.75,lt.y+z*.55,lt.z+z*.75),Ze(),U.update()}),nt())}function et(){for(let R of d.keys())p.set(R,1),x.set(R,1),qs(d.get(R)||[],1,{edgeMode:h});Se(),ci()}function Ae(R){if(Ue){if(Ji=null,de.clear(),O(1),et(),Tr(),Ar(),J.up.set(0,1,0),ce.up.set(0,1,0),j.up.set(0,1,0),R==="iso"){Ce();return}X(()=>{Se();let z=Math.max(ht.x,ht.y,ht.z,1),K=z*1.85,$=lt;R==="front"?j.position.set($.x,$.y,$.z+K):R==="top"?j.position.set($.x,$.y+K,$.z+z*.01):R==="side"&&j.position.set($.x-K,$.y,$.z),U.target.copy($),Ze(),U.update()}),nt()}}function ct(R){if(!Ue||!R)return;Ji=R,O(R.verticalExaggeration);let z=D;if(R.opacityDefault!=null||R.opacity&&typeof R.opacity=="object"){let Ke=R.opacityDefault!=null?Number(R.opacityDefault):1,Ge=R.opacity&&typeof R.opacity=="object"?R.opacity:{},st=P0(Ge,a);for(let Ot of d.keys()){let _n=Object.prototype.hasOwnProperty.call(st,Ot)?st[Ot]:Ke;Nt(Ot,_n,{skipUi:!0,skipClip:!0})}Se(),ci()}if(Object.prototype.hasOwnProperty.call(R,"cuts")){let Ke=Array.isArray(R.cuts)?R.cuts:[];le.length=0;for(let Ge of Ke){let st=Ge?.normal;if(!Array.isArray(st)||st.length<3)continue;let Ot=new P(Number(st[0])||0,Number(st[1])||0,Number(st[2])||0);if(Ot.lengthSq()<1e-12)continue;Ot.normalize();let _n=null,Gn=Math.min(1,Math.max(0,Number(Ge.t)||0));if(Array.isArray(Ge.anchor)&&Ge.anchor.length>=3){_n=Xd(Ge.anchor),_n.y*=z;let{near:ws,far:js}=Wt(Ot),ll=_n.dot(Ot);Gn=Math.min(1,Math.max(0,(ll-ws)/Math.max(js-ws,1e-6)))}le.push({id:je++,normal:Ot,t:Gn,anchor:_n,locked:!0,label:te(Ot)})}Qe=!1,Yt(),De(),He(),w?.refreshPartialHeight()}R.projection==="ortho"?Y!=="ortho"?ie():we():R.hFovDeg!=null&&Number.isFinite(Number(R.hFovDeg))&&Re(Number(R.hFovDeg),{reframe:!1});let $=R.camera;$&&Array.isArray($.target)&&Array.isArray($.position)&&X(()=>{k=!0;let Ke=new P(0,1,0);Array.isArray($.up)&&$.up.length>=3&&(Ke.set(Number($.up[0])||0,Number($.up[1])||0,Number($.up[2])||0),Ke.lengthSq()<1e-12?Ke.set(0,1,0):Ke.normalize()),J.up.copy(Ke),ce.up.copy(Ke),j.up.copy(Ke),U.target.set(Number($.target[0])||0,(Number($.target[1])||0)*z,Number($.target[2])||0),j.position.set(Number($.position[0])||0,(Number($.position[1])||0)*z,Number($.position[2])||0),j.lookAt(U.target),Y==="ortho"&&Array.isArray($.orthoFit)&&$.orthoFit.length>=2&&S(Number($.orthoFit[0])||.1,(Number($.orthoFit[1])||.1)*z),Se(),Ze(),U.update(),k=!1}),nt();let Te=R.edges;(Te==="none"||Te==="transparent"||Te==="opaque")&&(h=Te,Ti()),de.setSpec(R),Tr(),Ar()}function Nt(R,z,K={}){let $=Math.max(0,Math.min(1,Number(z)||0));p.set(R,$),$>0&&x.set(R,$),K.detach&&m.add(R),qs(d.get(R)||[],$,{edgeMode:h}),!K.skipClip&&(Se(),K.skipUi||ci())}function Qt(R,z,K){let $=Math.max(0,Math.min(1,Number(z)||0));K&&g.set(K,$);for(let Te of R)m.has(Te)||(p.set(Te,$),$>0&&x.set(Te,$),qs(d.get(Te)||[],$,{edgeMode:h}));Se(),ci()}function Ms(R,z,K){m.delete(R);let $=K.filter(Ke=>!m.has(Ke)),Te=Zi(z,$);p.set(R,Te),Te>0&&x.set(R,Te),qs(d.get(R)||[],Te,{edgeMode:h}),Se(),ci()}function $i(R){if(!R.length)return 1;let z=p.get(R[0])??1;for(let K=1;K<R.length;K++){let $=p.get(R[K])??1;if(Math.abs($-z)>1e-4)return NaN}return z}function Zi(R,z){let K=z.filter(Te=>!m.has(Te)),$=$i(K.length?K:z);return Number.isNaN($)?g.get(R)??1:$}function ci(){for(let[R,z]of v)z.value=(p.get(R)??1)*100;for(let[R,z]of M){let K=(z.el.dataset.leaves||"").split(",").map($=>$.trim()).filter(Boolean);z.value=Zi(R,K)*100}for(let[R,z]of y){let K=m.has(R);z.hidden=!K,z.setAttribute("aria-hidden",K?"false":"true")}}function Ss(){return le.filter(R=>R.locked).map(R=>It(R))}function wi(){let R=new ke;return _.getDrawingBufferSize(R),{x:R.x,y:R.y}}function Ti(){if(d.size){if(h===xr){_0(Ue);return}v0(d,!0,{clippingPlanes:Ss(),resolution:wi(),edgeMode:h})}}function Sr(){d.size&&(L0(d,f,{isDark:u,clippingPlanes:Ss(),opacityByLabel:p,edgeMode:h}),f===ja?(_.toneMapping=po,_.toneMappingExposure=1.05):(_.toneMapping=si,_.toneMappingExposure=1),Ti(),Td(d,Ss()))}function Lo(){let R=document.getElementById("mats");if(R){R.replaceChildren();for(let[z,K]of[[Ru,"ui.solid"],[ja,"ui.realistic"]]){let $=document.createElement("button");$.type="button",$.dataset.mode=z,$.textContent=Kt(K),z===f&&$.classList.add("is-active"),$.addEventListener("click",()=>{f=z,O0(z),R.querySelectorAll("button").forEach(Te=>{Te.classList.toggle("is-active",Te.dataset.mode===z)}),Sr()}),R.append($)}}}function $s(){let R=document.getElementById("edges");if(R){R.replaceChildren();for(let[z,K]of[[xr,"ui.edgesNone"],[_r,"ui.edgesTransparent"],[Ka,"ui.edgesOpaque"]]){let $=document.createElement("button");$.type="button",$.dataset.edgeMode=z,$.textContent=Kt(K),z===h&&$.classList.add("is-active"),$.addEventListener("click",()=>{h=z,gd(z),R.querySelectorAll("button").forEach(Te=>{Te.classList.toggle("is-active",Te.dataset.edgeMode===z)}),Ti(),np()}),R.append($)}}}function Do(R,z,K,$){let Te=document.createElement("div");Te.className="part-opacity-wrap";let Ke,Ge=()=>{if(Ke.value/100>0)$(0);else{let Ot=K();$(Ot>0?Ot:1)}};return Ke=Lu({min:0,max:100,step:1,value:Math.round(z),ariaLabel:R,formatAriaValue:st=>`${Math.round(st)}%`,thumbScrubOnly:!0,onInput:st=>$(st/100),onChange:st=>$(st/100),onTap:Ge}),Ke.el.classList.add("part-opacity"),Te.append(Ke.el),{wrap:Te,range:Ke}}function No(){let R=document.getElementById("parts");if(!R)return;R.style.removeProperty("--part-name-col");let z=0;for(let K of R.querySelectorAll(".part-name")){if(K.closest(".part-children")?.hidden)continue;let Te=K.style.width;K.style.width="max-content",z=Math.max(z,Math.ceil(K.getBoundingClientRect().width)),K.style.width=Te}z>0&&R.style.setProperty("--part-name-col",`${z}px`)}function bs(R,z,K,$=null){if(R.type==="leaf"){let Tt=document.createElement("div");Tt.className="part-row part-leaf",Tt.style.setProperty("--part-depth",String(K)),Tt.dataset.leaf=R.id;let cl=document.createElement("span");cl.className="part-disclosure-spacer",cl.setAttribute("aria-hidden","true");let ul=document.createElement("span");ul.className="part-name",ul.textContent=R.label;let{wrap:ap,range:lp}=Do(`${R.label} opacity`,(p.get(R.id)??1)*100,()=>x.get(R.id)??1,hl=>Nt(R.id,hl,{detach:!!$}));lp.el.dataset.leaf=R.id,v.set(R.id,lp);let fi=null;if($){fi=document.createElement("button"),fi.type="button",fi.className="part-sync",fi.textContent=Kt("ui.sync"),fi.setAttribute("aria-label",`${Kt("ui.sync")} ${R.label}`);let hl=m.has(R.id);fi.hidden=!hl,fi.setAttribute("aria-hidden",hl?"false":"true"),fi.addEventListener("click",$x=>{$x.stopPropagation(),Ms(R.id,$.groupId,$.leafIds)}),y.set(R.id,fi)}fi?Tt.append(cl,ul,ap,fi):Tt.append(cl,ul,ap),z.append(Tt);return}let Te=Cu(R),Ke=document.createElement("div");Ke.className="part-group",Ke.dataset.group=R.id;let Ge=document.createElement("div");Ge.className="part-row part-group-row",Ge.style.setProperty("--part-depth",String(K)),Ge.setAttribute("role","button"),Ge.tabIndex=0;let st=document.createElement("button");st.type="button",st.className="part-disclosure",st.setAttribute("aria-label",`Expand ${R.label}`),st.setAttribute("aria-expanded","false");let Ot=document.createElement("span");Ot.className="part-name",Ot.textContent=R.label;let _n=Zi(R.id,Te)||1;_n<=0&&(_n=1);let{wrap:Gn,range:ws}=Do(`${R.label} opacity`,Zi(R.id,Te)*100,()=>_n,Tt=>{Tt>0&&(_n=Tt),Qt(Te,Tt,R.id)});ws.el.dataset.group=R.id,ws.el.dataset.leaves=Te.join(","),M.set(R.id,ws),Gn.addEventListener("click",Tt=>Tt.stopPropagation()),Gn.addEventListener("pointerdown",Tt=>Tt.stopPropagation());let js=document.createElement("div");js.className="part-children",js.hidden=!0;function ll(Tt){Tt?E.add(R.id):E.delete(R.id),js.hidden=!Tt,Ke.classList.toggle("is-expanded",Tt),st.setAttribute("aria-expanded",Tt?"true":"false"),st.setAttribute("aria-label",Tt?`Collapse ${R.label}`:`Expand ${R.label}`),requestAnimationFrame(()=>No())}function Yu(){ll(!E.has(R.id))}st.addEventListener("click",Tt=>{Tt.stopPropagation(),Yu()}),Ge.addEventListener("click",Tt=>{Gn.contains(Tt.target)||Yu()}),Ge.addEventListener("keydown",Tt=>{(Tt.key==="Enter"||Tt.key===" ")&&(Tt.preventDefault(),Yu())}),Ge.append(st,Ot,Gn),Ke.append(Ge,js),z.append(Ke);let Yx={groupId:R.id,leafIds:Te};for(let Tt of R.children)bs(Tt,js,K+1,Yx);ll(E.has(R.id))}function nl(){let R=document.getElementById("parts");if(!R)return;R.replaceChildren(),v.clear(),M.clear(),y.clear();for(let K of d.keys())p.has(K)||(p.set(K,1),qs(d.get(K)||[],1,{edgeMode:h})),x.has(K)||x.set(K,1);let z=C0(d.keys(),s,Kt);a=z;for(let K of z)bs(K,R,0,null);requestAnimationFrame(()=>No())}let Ki="iso",Ji=null,Oo=!1;function Xu(R){let z=String(R||"").trim();if(!z)return null;for(let K of n)if(String(K?.id||"").trim()===z)return K;return null}function Uo(){let R=Ki;R&&R.startsWith("scene:")?Ox(R.slice(6)):Ox(null)}function Fo(){return document.querySelectorAll("#cams button, #scenes button")}function A(){Ki!=null&&(Ki=null,Fo().forEach(R=>{R.classList.remove("is-active")}),Uo())}function F(){let R=document.getElementById("scenes");if(!R){let z=document.getElementById("cams");R=document.createElement("div"),R.id="scenes",R.className="scene-list",z?.insertAdjacentElement("afterend",R)}return R}function se(){let R=document.getElementById("cams");if(!R)return;R.replaceChildren();let z=F();z.replaceChildren();function K($,Te,Ke,Ge){let st=document.createElement("button");st.type="button",st.dataset.preset=Te,st.textContent=Ke,Te===Ki&&st.classList.add("is-active"),st.addEventListener("click",()=>{Ki=Te,Fo().forEach(Ot=>{Ot.classList.toggle("is-active",Ot.dataset.preset===Te)}),Ge(),Uo()}),$.append(st)}for(let[$,Te]of[["iso","ui.iso"],["front","ui.front"],["side","ui.side"],["top","ui.top"]])K(R,$,Kt(Te),()=>Ae($));for(let $ of n){let Te=String($?.id||"").trim();if(!Te)continue;let Ke=Kt(`scene.${Te}`);K(z,`scene:${Te}`,Ke,()=>ct($))}z.hidden=z.childElementCount===0}function Q(R=xt){return R.copy(U.target).sub(j.position).normalize()}function te(R){let z=Math.hypot(R.x,R.z),K=(Math.atan2(R.x,R.z)*180/Math.PI+360)%360,$=Math.atan2(R.y,z)*180/Math.PI,Te=Math.abs($).toFixed(0),Ke=$>=0?"\u2191":"\u2193";return`${K.toFixed(0)}\xB0 / ${Te}\xB0${Ke}`}function Oe(){return le.some(R=>!R.locked)}function Ve(){return le.filter(R=>R.locked)}function De(){Oe()||!(Ve().length===0||Qe)||le.push({id:je++,normal:new P(0,0,1),t:0,locked:!1,label:Kt("ui.cut")})}function Be(R){let z=document.getElementById("cuts");if(!z)return;let K=z.querySelector(`[data-cut-id="${R.id}"]`);if(!K){He();return}let $=K.querySelector(".cut-label");if($&&($.textContent=R.locked?R.label:Kt("ui.cut")),R.locked&&!K.querySelector(".cut-remove")){let Te=document.createElement("button");Te.type="button",Te.className="cut-remove",Te.setAttribute("aria-label",Kt("ui.removeSection")),Te.textContent="\xD7",Te.addEventListener("click",()=>dt(R.id)),K.append(Te)}}function $e(R){R.locked||(Q(R.normal),R.locked=!0,R.label=te(R.normal),Qe=!1,Yt(),Be(R))}function nt(){Ve().length!==0&&(Oe()||(Qe=!0,!T&&(De(),He())))}function _t(){Qe&&(Oe()||Ve().length!==0&&(De(),He()))}function Ye(R,z){let K=le.find($=>$.id===R);if(K){if(K.locked||$e(K),K.t=Math.min(1,Math.max(0,Number(z))),K.anchor=null,T){wt();return}Yt()}}function dt(R){let z=le.findIndex(K=>K.id===R);z<0||(le.splice(z,1),Ve().length===0?(Qe=!1,Oe()||De()):Qe&&!Oe()&&De(),Yt(),He(),w?.refreshPartialHeight())}function Wt(R){if(Se(),qe.isEmpty())return{near:-1,far:1};let z=qe.min,K=qe.max,$=1/0,Te=-1/0;for(let st=0;st<2;st++)for(let Ot=0;Ot<2;Ot++)for(let _n=0;_n<2;_n++){Pt.set(st?K.x:z.x,Ot?K.y:z.y,_n?K.z:z.z);let Gn=Pt.dot(R);Gn<$&&($=Gn),Gn>Te&&(Te=Gn)}let Ge=Math.max(Te-$,1e-6)*.02;return{near:$-Ge,far:Te+Ge}}function It(R){if(R.anchor)return new dn().setFromNormalAndCoplanarPoint(R.normal,R.anchor);let{near:z,far:K}=Wt(R.normal),$=z+(K-z)*R.t;return rt.copy(R.normal).multiplyScalar($),new dn().setFromNormalAndCoplanarPoint(R.normal,rt)}function wt(){let R=Ss();return Ue&&(Ue.traverse(z=>{if(!z.isMesh||!z.material||Nn(z)||Iu(z))return;let K=Array.isArray(z.material)?z.material:[z.material];for(let $ of K){if(!$)continue;let Te=$.clippingPlanes?$.clippingPlanes.length:0;$.clippingPlanes=R,$.clipIntersection=!1,Te!==R.length&&($.needsUpdate=!0)}}),xd(Ue,R)),R}function Yt(){let R=wt();Ue&&(Td(d,R),h!==xr?Ti():xd(Ue,R))}function He(){let R=document.getElementById("cuts");if(R){R.replaceChildren();for(let z of le){let K=document.createElement("div");K.className="cut-row",K.dataset.cutId=String(z.id);let $=document.createElement("span");$.className="cut-label",$.textContent=z.locked?z.label:Kt("ui.cut");let Te=()=>{T&&(T=!1,Yt(),_t())},Ke=Lu({min:0,max:1,step:.001,value:z.t,ariaLabel:z.locked?`Section ${z.label}`:"Section cut",onScrubStart:()=>{T=!0,z.locked||$e(z)},onScrubEnd:Te,onInput:Ge=>Ye(z.id,Ge),onChange:Ge=>{Ye(z.id,Ge),Te()}});if(K.append($,Ke.el),z.locked){let Ge=document.createElement("button");Ge.type="button",Ge.className="cut-remove",Ge.setAttribute("aria-label",Kt("ui.removeSection")),Ge.textContent="\xD7",Ge.addEventListener("click",()=>dt(z.id)),K.append(Ge)}R.append(K)}w?.refreshPartialHeight()}}let Jt=!1,vt=new P,ui=new P,rn=!1;i.addEventListener("pointerdown",()=>{Jt=!0},{capture:!0});let Zs=()=>{Jt=!1};window.addEventListener("pointerup",Zs,{capture:!0}),window.addEventListener("pointercancel",Zs,{capture:!0}),U.addEventListener("start",()=>{A(),Jt=!0}),U.addEventListener("change",()=>{xe()}),U.addEventListener("end",()=>{Jt=!1,!Me&&nt()});let en=1,gn=0,ut=0,jt=1,Un=0,Ut=0,$t=1,Yn=0,br=0,Ks=0,Ux=280;function Fx(){let R=Math.max(1,i.clientWidth),z=Math.max(1,i.clientHeight);if(!w)return{zoom:1,offX:0,offY:0,w:R,h:z};let{bottom:K,right:$}=w.getSafeInsets();if(K<=0&&$<=0)return{zoom:1,offX:0,offY:0,w:R,h:z};let Te=Math.max(1,R-$),Ke=Math.max(1,z-K),Ge=Math.min(Te/R,Ke/z),st=$/2,Ot=K/2;return{zoom:Ge,offX:st,offY:Ot,w:R,h:z}}function $d(R,z){X(()=>{k=!0,Math.abs(gn)>.05||Math.abs(ut)>.05||Math.abs(en-1)>.001?(j.zoom=Z*en,j.setViewOffset(R,z,gn,ut,R,z)):(j.clearViewOffset(),j.zoom=Z,en=1,gn=0,ut=0),j.updateProjectionMatrix(),k=!1})}function Zd(R=!0){let{zoom:z,offX:K,offY:$,w:Te,h:Ke}=Fx();if(jt=z,Un=K,Ut=$,!R){en=z,gn=K,ut=$,Ks=0,$d(Te,Ke);return}$t=en,Yn=gn,br=ut,Ks=performance.now()}function Bx(R){if(!Ks)return;let z=Math.min(1,(R-Ks)/Ux),K=1-(1-z)**3;en=$t+(jt-$t)*K,gn=Yn+(Un-Yn)*K,ut=br+(Ut-br)*K;let $=Math.max(1,i.clientWidth),Te=Math.max(1,i.clientHeight);$d($,Te),z>=1&&(Ks=0)}function il(){let R=Math.max(1,i.clientWidth),z=Math.max(1,i.clientHeight);_.setSize(R,z,!1),Y==="perspective"?ge():C(),Zd(!1);let K=wi();y0(Ue,K.x,K.y)}il(),window.addEventListener("resize",il),w?.onDetentChange(()=>{Zd(!0)});let Vn=document.getElementById("ar"),xn=document.getElementById("measure"),Bo=!1,sl=()=>Kt("ui.measure");function qu(){let R=document.getElementById("locale");if(R){R.replaceChildren();for(let[z,K]of[["cs","CS"],["en","EN"]]){let $=document.createElement("button");$.type="button",$.dataset.locale=z,$.textContent=K,z===Du()&&$.classList.add("is-active"),$.addEventListener("click",()=>{tx(z)}),R.append($)}}}function zx(){Pd(document),Vn&&!Bo&&(Vn.textContent=Kt("ui.ar")),xn&&(xn.textContent=sl()),Tr(),Ar(),de.relocalize();try{Lo(),$s(),se(),Le(),nl(),He(),qu()}catch(R){console.error("relocalizeUi",R);try{qu()}catch{}}w?.refreshPartialHeight()}nx(()=>zx());function kx(){Vn&&(Vn.hidden=!1,Bo||(Vn.textContent=Kt("ui.ar")))}function Hx(){xn&&(xn.hidden=!1,xn.textContent=sl())}let Er=document.getElementById("drawing"),Es=document.getElementById("labels"),wr=!0;function Tr(){Er&&(Er.hidden=!1,Er.disabled=!Ji||rl,Er.textContent=Kt("ui.drawing"))}function Ar(){if(!Es)return;let R=!!Ji;Es.hidden=!R,Es.disabled=!R,Es.setAttribute("aria-pressed",wr?"true":"false"),Es.classList.toggle("is-active",R&&wr),Es.textContent=Kt("ui.labels")}function Vx(){try{let R=new URLSearchParams(window.location.search).get("m");if(R&&R.trim())return R.trim()}catch{}return"model"}function Gx(){let z=1,K=1.35;for(let $=0;$<6;$+=1){de.update();let Te=de.glyphBoundsNdc();if(!Te)return;let Ke=Math.max(-1+.04-Te.minX,Te.maxX-(1-.04),-1+.04-Te.minY,Te.maxY-(1-.04),0);if(Ke<.012||z>=K-.01)return;let Ge=Math.min(K/z,Math.max(1.05,1+Ke*1.6));z*=Ge,j.isOrthographicCamera?(ce.left*=Ge,ce.right*=Ge,ce.top*=Ge,ce.bottom*=Ge,ce.updateProjectionMatrix()):(xt.copy(j.position).sub(U.target).multiplyScalar(Ge),j.position.copy(U.target).add(xt),Ze())}}function Kd(){Ks=0,en=1,gn=0,ut=0,jt=1,Un=0,Ut=0,j.clearViewOffset(),j.zoom=Z,j.updateProjectionMatrix()}let rl=!1;async function Jd(){if(rl||!Ue||!Ji)return null;rl=!0,Tr(),Oo=!0;let R=Ji,z=h,K=l.background,$=_.getPixelRatio(),Te=i.style.width,Ke=i.style.height,Ge=w?.getDetent?.()??null,st=hi?.isActive()??!1,Ot=de.isVisible();try{st&&hi?.setActive(!1),de.setVisible(!0),w?.setDetent("closed"),i.style.width=`${2400}px`,i.style.height=`${1697}px`,_.setPixelRatio(1),il(),Kd(),h=Ka,Ti(),l.background=new We(16777215),de.setInk("plate"),ct(R),Kd(),Gx(),de.update(),b.render(l,j,Ue,tp,{quality:"high"});let{png:_n,pdf:Gn}=await Dx(i),ws=`${Vx()}_${String(R.id||"scene")}`;return{png:_n,pdf:Gn,stem:ws}}finally{i.style.width=Te,i.style.height=Ke,_.setPixelRatio($),h=z,l.background=K,de.setInk("viewer"),de.setVisible(Ot),Ge&&w?.setDetent(Ge),il(),Ti(),R&&ct(R),st&&hi?.setActive(!0),Oo=!1,rl=!1,Tr(),Ar(),requestAnimationFrame(al)}}window.blueprintCaptureDrawing=async()=>{let R=await Jd();return R?{png:R.png,pdf:R.pdf,stem:R.stem}:null},window.blueprintSetView=(R={})=>{if(!Ue||!R)return!1;let z=R.projection==="ortho"?"ortho":"perspective",K=Number.isFinite(Number(R.hFovDeg))?Number(R.hFovDeg):H;return z==="perspective"&&Y==="ortho"&&oe(K),z==="perspective"&&Re(K,{reframe:!1}),X(()=>{k=!0;let $=new P(0,1,0);if(Array.isArray(R.up)&&R.up.length>=3&&($.set(Number(R.up[0])||0,Number(R.up[1])||0,Number(R.up[2])||0),$.lengthSq()>1e-12?$.normalize():$.set(0,1,0)),J.up.copy($),ce.up.copy($),j.up.copy($),Array.isArray(R.target)&&U.target.set(Number(R.target[0])||0,Number(R.target[1])||0,Number(R.target[2])||0),Array.isArray(R.position)&&j.position.set(Number(R.position[0])||0,Number(R.position[1])||0,Number(R.position[2])||0),j.lookAt(U.target),z==="ortho"){let Te=j.position.distanceTo(U.target),Ke=_e(K,q());Ee(Te,Ke),Z=1,Y!=="ortho"&&(ye(ce),Y="ortho"),re(),we()}Se(),Ze(),U.update(),k=!1}),Js=!0,!0},Es&&Es.addEventListener("click",()=>{wr=!wr,de.setVisible(wr),Ar()}),Er&&Er.addEventListener("click",()=>{(async()=>{let R=await Jd();R&&(qd(R.png,`${R.stem}.png`),qd(R.pdf,`${R.stem}.pdf`))})()});let hi=null;l&&(hi=yx({scene:l,canvas:i,getCamera:()=>j,controls:U,getRoot:()=>Ue,getClipPlanes:()=>Ss(),onLiveLength:R=>{xn&&(R?(xn.textContent=R,xn.classList.add("is-live")):(xn.textContent=sl(),xn.classList.remove("is-live")))},onActiveChange:R=>{Js=!0,xn&&(xn.classList.toggle("is-active",R),xn.setAttribute("aria-pressed",R?"true":"false"),R||(xn.textContent=sl(),xn.classList.remove("is-live")))}})),xn&&xn.addEventListener("click",()=>{hi&&hi.setActive(!hi.isActive())}),ve=()=>!!hi?.isActive();function jd(){if(!Ue)return null;Ue.updateWorldMatrix(!0,!0);let R=Ve().map(Te=>It(Te)),z=new kt;if(z.name="ARContent",Ue.traverse(Te=>{if(!Te.isMesh||!Te.visible||Nn(Te))return;let Ke=X0(Te,R);Ke&&z.add(Ke)}),!z.children.length)return null;z.updateMatrixWorld(!0);let K=Ad(z),$=new kt;return $.name="ARExport",$.add(z),K0(z,K),$.userData.arPlacement=K,$}async function Qd(){if(Bo||!Ue)return;Bo=!0;let R=Vn?.textContent||"AR";Vn&&(Vn.disabled=!0,Vn.textContent="\u2026");try{let z=jd();if(!z)throw new Error("Nothing visible to export. Show at least one part.");let $=await new yu().parseAsync(z,{quickLookCompatible:!0,includeAnchoringProperties:!0,ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}}}),Te=new Blob([$],{type:"model/vnd.usdz+zip"}),Ke=URL.createObjectURL(Te),Ge=document.createElement("a");Ge.rel="ar",Ge.href=Ke,Ge.download="view.usdz";let st=document.createElement("img");st.alt="AR",Ge.appendChild(st),document.body.appendChild(Ge),Ge.click(),Ge.remove(),setTimeout(()=>URL.revokeObjectURL(Ke),6e4)}catch(z){ne(String(z?.message||z))}finally{Bo=!1,Vn&&(Vn.disabled=!1,Vn.textContent=R)}}Vn&&Vn.addEventListener("click",()=>{Qd()});let ep={scene:l,get camera(){return j},controls:U,parts:d,partOpacity:p,cuts:le,scenes:n,setPartOpacity:Nt,setCameraPreset:Ae,applyScene:ct,setHFov:Re,toggleFovIso:N,get projection(){return Y},get hFovDeg(){return H},setCutT:Ye,removeCut:dt,frameIso:Ce,openArQuickLook:Qd,buildArExportScene:jd,getPeelQuality:()=>zo};window.BlueprintsViewer=ep;function tp(){for(let R of p.values())if(R<1-1e-4)return!0;return!1}function np(){for(let[R,z]of d){let K=p.get(R)??1;qs(z,K,{edgeMode:h})}}let ip=!1,Js=!0,sp=null,rp=null,zo="fast",op=null,ol=!1;i.addEventListener("pointermove",()=>{hi?.isActive()&&(Js=!0)}),i.addEventListener("pointerup",()=>{hi?.isActive()&&(Js=!0)});function Wx(){let R=j.view;return[j.position.x,j.position.y,j.position.z,j.quaternion.x,j.quaternion.y,j.quaternion.z,j.quaternion.w,j.zoom,j.near,j.far,j.fov||0,j.left,j.right,j.top,j.bottom,U.target.x,U.target.y,U.target.z,i.width,i.height,R&&R.enabled?1:0,R?R.offsetX:0,R?R.offsetY:0,R?R.fullWidth:0,R?R.fullHeight:0,Y==="ortho"?1:0]}function Xx(){let R=Wx(),z=sp,K=!z||z.length!==R.length;if(!K&&z){for(let $=0;$<R.length;$++)if(R[$]!==z[$]){K=!0;break}}return K&&(sp=R),K}function qx(){let R=[f,h,Du(),wr?"1":"0",String(c)],z=l?.background;z&&z.isColor&&R.push(z.getHexString());for(let[K,$]of p)R.push(K,Number($).toFixed(3));for(let K of le)R.push(String(K.id),K.locked?"1":"0",Number(K.t).toFixed(4));return R.join("|")}function al(){if(Oo)return;let R=performance.now();ue.step(R)&&(Js=!0),Bx(R),U.update(),Ue&&Ze(),rn||(vt.copy(j.position),ui.copy(U.target),rn=!0);let z=j.position.distanceToSquared(vt)>1e-8||U.target.distanceToSquared(ui)>1e-8;vt.copy(j.position),ui.copy(U.target);let K=qx(),$=K!==rp,Te=Xx();if($&&(ol=!0),zo=!Jt&&!z&&!$&&!T&&!Ks&&!ol?"high":"fast",!Js&&!$&&!Te&&!(zo!==op)&&!ol){requestAnimationFrame(al);return}Js=!1,rp=K,op=zo,$||(ol=!1),hi?.update(),de.update();let st=b.render(l,j,Ue,tp,{quality:zo,batchKey:K,deferPrime:$||T});ip&&!st&&np(),ip=st,requestAnimationFrame(al)}return al(),ep}return e_(xT);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/examples/jsm/libs/fflate.module.js:
  (*!
  fflate - fast JavaScript compression/decompression
  <https://101arrowz.github.io/fflate>
  Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
  version 0.8.3
  *)
*/
