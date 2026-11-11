var BlueprintsViewerBundle=(()=>{var ph=Object.defineProperty;var Zy=Object.getOwnPropertyDescriptor;var Ky=Object.getOwnPropertyNames;var Jy=Object.prototype.hasOwnProperty;var jy=(n,e)=>{for(var t in e)ph(n,t,{get:e[t],enumerable:!0})},Qy=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Ky(e))!Jy.call(n,s)&&s!==t&&ph(n,s,{get:()=>e[s],enumerable:!(i=Zy(e,s))||i.enumerable});return n};var e_=n=>Qy(ph({},"__esModule",{value:!0}),n);var _A={};jy(_A,{mountViewer:()=>yA});var Ws={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Xs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rm=0,tf=1,Cm=2;var Ca=1,Pm=2,mo=3,Kn=0,vn=1,Dt=2,si=0,ki=1,nf=2,sf=3,rf=4,Tc=5;var vi=100,Im=101,Lm=102,Dm=103,Nm=104,Pa=200,qs=201,Om=202,Um=203,Ia=204,go=205,Fm=206,La=207,Bm=208,zm=209,km=210,Hm=211,Vm=212,Gm=213,Wm=214,nc=0,ic=1,sc=2,Qr=3,rc=4,oc=5,ac=6,lc=7,Ac=0,Xm=1,qm=2,ri=0,of=1,af=2,lf=3,xo=4,cf=5,uf=6,hf=7,Vh="attached",$m="detached",ff=300,dr=301,yo=302,Rc=303,Cc=304,gi=1e3,ti=1001,eo=1002,Gt=1003,Pc=1004;var pr=1005;var Wt=1006,_o=1007;var oi=1008;var In=1009,df=1010,pf=1011,vo=1012,Ic=1013,bi=1014,kn=1015,qn=1016,Lc=1017,Dc=1018,mr=1020,mf=35902,gf=35899,xf=1021,yf=1022,bn=1023,fs=1026,Ms=1027,Nc=1028,Oc=1029,$s=1030,Uc=1031;var Fc=1033,Da=33776,Na=33777,Oa=33778,Ua=33779,Bc=35840,zc=35841,kc=35842,Hc=35843,Vc=36196,Gc=37492,Wc=37496,Xc=37488,qc=37489,Fa=37490,$c=37491,Yc=37808,Zc=37809,Kc=37810,Jc=37811,jc=37812,Qc=37813,eu=37814,tu=37815,nu=37816,iu=37817,su=37818,ru=37819,ou=37820,au=37821,lu=36492,cu=36494,uu=36495,hu=36283,fu=36284,Ba=36285,du=36286;var ar=2300,lr=2301,ec=2302,Gh=2303,Wh=2400,Xh=2401,qh=2402,Ym=2500;var _f=0,za=1,bo=2,Zm=3200;var ka=0,Km=1,Mi="",At="srgb",Bn="srgb-linear",ta="linear",Lt="srgb";var tc=7680;var Jm=519,jm=512,Qm=513,eg=514,vf=515,tg=516,ng=517,bf=518,Mf=519,Sf=35044;var Ef="300 es",ni=2e3,to=2001;function t_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function n_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function no(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ig(){let n=no("canvas");return n.style.display="block",n}var Up={},io=null;function na(...n){let e="THREE."+n.shift();io?io("log",e,...n):console.log(e,...n)}function sg(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function nt(...n){n=sg(n);let e="THREE."+n.shift();if(io)io("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ct(...n){n=sg(n);let e="THREE."+n.shift();if(io)io("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function or(...n){let e=n.join(" ");e in Up||(Up[e]=!0,nt(...n))}function rg(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var og={[nc]:nc,[sc]:ac,[rc]:rc,[Qr]:oc,[ic]:ic,[ac]:sc,[lc]:lc,[oc]:Qr},xi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fp=1234567,Jr=Math.PI/180,cr=180/Math.PI;function Hi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]).toLowerCase()}function ft(n,e,t){return Math.max(e,Math.min(t,n))}function wf(n,e){return(n%e+e)%e}function i_(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function s_(n,e,t){return n!==e?(t-n)/(e-n):0}function ea(n,e,t){return(1-t)*n+t*e}function r_(n,e,t,i){return ea(n,e,1-Math.exp(-t*i))}function o_(n,e=1){return e-Math.abs(wf(n,e*2)-e)}function a_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function l_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function c_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function u_(n,e){return n+Math.random()*(e-n)}function h_(n){return n*(.5-Math.random())}function f_(n){n!==void 0&&(Fp=n);let e=Fp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function d_(n){return n*Jr}function p_(n){return n*cr}function m_(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function g_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Tf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function x_(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*p,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*p,a*c);break;case"ZYZ":n.set(l*p,l*d,a*u,a*c);break;default:nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function pu(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Af(n,e){if(e.constructor===Float32Array)return n;let t=pu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Rf(n,e){if(e.constructor===Float32Array)return n;let t=pu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Ys={DEG2RAD:Jr,RAD2DEG:cr,generateUUID:Hi,clamp:ft,euclideanModulo:wf,mapLinear:i_,inverseLerp:s_,lerp:ea,damp:r_,pingpong:o_,smoothstep:a_,smootherstep:l_,randInt:c_,randFloat:u_,randFloatSpread:h_,seededRandom:f_,degToRad:d_,radToDeg:p_,isPowerOfTwo:m_,ceilPowerOfTwo:g_,floorPowerOfTwo:Tf,setQuaternionFromProperEuler:x_,normalize:Rf,denormalize:Af},Ye=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(h!==x||l!==f||c!==d||u!==p){let m=l*f+c*d+u*p+h*x;m<0&&(f=-f,d=-d,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let v=Math.acos(m),b=Math.sin(v);g=Math.sin(g*v)/b,a=Math.sin(a*v)/b,l=l*g+f*a,c=c*g+d*a,u=u*g+p*a,h=h*g+x*a}else{l=l*g+f*a,c=c*g+d*a,u=u*g+p*a,h=h*g+x*a;let v=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=v,c*=v,u*=v,h*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+u*h+l*d-c*f,e[t+1]=l*p+u*f+c*h-a*d,e[t+2]=c*p+u*d+a*f-l*h,e[t+3]=u*p-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"YZX":this._x=f*u*h+c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h-f*d*p;break;case"XZY":this._x=f*u*h-c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h+f*d*p;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){let d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return mh.copy(this).projectOnVector(e),this.sub(mh)}reflect(e){return this.sub(mh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},mh=new P,Bp=new qt,ht=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],p=i[8],x=s[0],m=s[3],g=s[6],v=s[1],b=s[4],_=s[7],w=s[2],T=s[5],y=s[8];return r[0]=o*x+a*v+l*w,r[3]=o*m+a*b+l*T,r[6]=o*g+a*_+l*y,r[1]=c*x+u*v+h*w,r[4]=c*m+u*b+h*T,r[7]=c*g+u*_+h*y,r[2]=f*x+d*v+p*w,r[5]=f*m+d*b+p*T,r[8]=f*g+d*_+p*y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,p=t*h+i*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=h*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return or("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(gh.makeScale(e,t)),this}rotate(e){return or("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(gh.makeRotation(-e)),this}translate(e,t){return or("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(gh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},gh=new ht,zp=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kp=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function y_(){let n={enabled:!0,workingColorSpace:Bn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Lt&&(s.r=hs(s.r),s.g=hs(s.g),s.b=hs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Lt&&(s.r=jr(s.r),s.g=jr(s.g),s.b=jr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Mi?ta:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Bn]:{primaries:e,whitePoint:i,transfer:ta,toXYZ:zp,fromXYZ:kp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:e,whitePoint:i,transfer:Lt,toXYZ:zp,fromXYZ:kp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:At}}}),n}var gt=y_();function hs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function jr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ir,cc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ir===void 0&&(Ir=no("canvas")),Ir.width=e.width,Ir.height=e.height;let s=Ir.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ir}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=no("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=hs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(hs(t[i]/255)*255):t[i]=hs(t[i]);return{data:t,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},__=0,so=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=Hi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(xh(s[o].image)):r.push(xh(s[o]))}else r=xh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function xh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?cc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}var v_=0,yh=new P,an=class n extends xi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ti,s=ti,r=Wt,o=oi,a=bn,l=In,c=n.DEFAULT_ANISOTROPY,u=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=Hi(),this.name="",this.source=new so(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(yh).x}get height(){return this.source.getSize(yh).y}get depth(){return this.source.getSize(yh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){nt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){nt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ff)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gi:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gi:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=ff;an.DEFAULT_ANISOTROPY=1;var Mt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,_=(d+1)/2,w=(g+1)/2,T=(u+f)/4,y=(h+x)/4,E=(p+m)/4;return b>_&&b>w?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=T/i,r=y/i):_>w?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=T/s,r=E/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=y/r,s=E/r),this.set(i,s,r,t),this}let v=Math.sqrt((m-p)*(m-p)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(h-x)/v,this.z=(f-u)/v,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},uc=class extends xi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new an({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new so(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},tn=class extends uc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ia=class extends an{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var hc=class extends an{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var at=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,l,c,u,h,f,d,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,d,p,x,m)}set(e,t,i,s,r,o,a,l,c,u,h,f,d,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=f,g[3]=d,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Lr.setFromMatrixColumn(e,0).length(),r=1/Lr.setFromMatrixColumn(e,1).length(),o=1/Lr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,d=o*h,p=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+p*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,p=c*u,x=c*h;t[0]=f+x*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-p,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,p=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,p=a*u,x=a*h;t[0]=l*u,t[4]=p*c-d,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=p*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+p,t[10]=f-x*h}else if(e.order==="XZY"){let f=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=d*h-p,t[2]=p*h-d,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(b_,e,M_)}lookAt(e,t,i){let s=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Ls.crossVectors(i,Yn),Ls.lengthSq()===0&&(Math.abs(i.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Ls.crossVectors(i,Yn)),Ls.normalize(),Ml.crossVectors(Yn,Ls),s[0]=Ls.x,s[4]=Ml.x,s[8]=Yn.x,s[1]=Ls.y,s[5]=Ml.y,s[9]=Yn.y,s[2]=Ls.z,s[6]=Ml.z,s[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],p=i[2],x=i[6],m=i[10],g=i[14],v=i[3],b=i[7],_=i[11],w=i[15],T=s[0],y=s[4],E=s[8],D=s[12],I=s[1],z=s[5],W=s[9],k=s[13],N=s[2],G=s[6],j=s[10],q=s[14],ye=s[3],Y=s[7],V=s[11],Q=s[15];return r[0]=o*T+a*I+l*N+c*ye,r[4]=o*y+a*z+l*G+c*Y,r[8]=o*E+a*W+l*j+c*V,r[12]=o*D+a*k+l*q+c*Q,r[1]=u*T+h*I+f*N+d*ye,r[5]=u*y+h*z+f*G+d*Y,r[9]=u*E+h*W+f*j+d*V,r[13]=u*D+h*k+f*q+d*Q,r[2]=p*T+x*I+m*N+g*ye,r[6]=p*y+x*z+m*G+g*Y,r[10]=p*E+x*W+m*j+g*V,r[14]=p*D+x*k+m*q+g*Q,r[3]=v*T+b*I+_*N+w*ye,r[7]=v*y+b*z+_*G+w*Y,r[11]=v*E+b*W+_*j+w*V,r[15]=v*D+b*k+_*q+w*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],p=e[3],x=e[7],m=e[11],g=e[15],v=l*d-c*f,b=a*d-c*h,_=a*f-l*h,w=o*d-c*u,T=o*f-l*u,y=o*h-a*u;return t*(x*v-m*b+g*_)-i*(p*v-m*w+g*T)+s*(p*b-x*w+g*y)-r*(p*_-x*T+m*y)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],p=e[12],x=e[13],m=e[14],g=e[15],v=t*a-i*o,b=t*l-s*o,_=t*c-r*o,w=i*l-s*a,T=i*c-r*a,y=s*c-r*l,E=u*x-h*p,D=u*m-f*p,I=u*g-d*p,z=h*m-f*x,W=h*g-d*x,k=f*g-d*m,N=v*k-b*W+_*z+w*I-T*D+y*E;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/N;return e[0]=(a*k-l*W+c*z)*G,e[1]=(s*W-i*k-r*z)*G,e[2]=(x*y-m*T+g*w)*G,e[3]=(f*T-h*y-d*w)*G,e[4]=(l*I-o*k-c*D)*G,e[5]=(t*k-s*I+r*D)*G,e[6]=(m*_-p*y-g*b)*G,e[7]=(u*y-f*_+d*b)*G,e[8]=(o*W-a*I+c*E)*G,e[9]=(i*I-t*W-r*E)*G,e[10]=(p*T-x*_+g*v)*G,e[11]=(h*_-u*T-d*v)*G,e[12]=(a*D-o*z-l*E)*G,e[13]=(t*z-i*D+s*E)*G,e[14]=(x*b-p*w-m*v)*G,e[15]=(u*w-h*b+f*v)*G,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,p=r*h,x=o*u,m=o*h,g=a*h,v=l*c,b=l*u,_=l*h,w=i.x,T=i.y,y=i.z;return s[0]=(1-(x+g))*w,s[1]=(d+_)*w,s[2]=(p-b)*w,s[3]=0,s[4]=(d-_)*T,s[5]=(1-(f+g))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(p+b)*y,s[9]=(m-v)*y,s[10]=(1-(f+x))*y,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Lr.set(s[0],s[1],s[2]).length(),a=Lr.set(s[4],s[5],s[6]).length(),l=Lr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),di.copy(this);let c=1/o,u=1/a,h=1/l;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=u,di.elements[5]*=u,di.elements[6]*=u,di.elements[8]*=h,di.elements[9]*=h,di.elements[10]*=h,t.setFromRotationMatrix(di),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=ni,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===ni)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===to)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ni,l=!1){let c=this.elements,u=2/(t-e),h=2/(i-s),f=-(t+e)/(t-e),d=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===ni)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===to)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Lr=new P,di=new at,b_=new P(0,0,0),M_=new P(1,1,1),Ls=new P,Ml=new P,Yn=new P,Hp=new at,Vp=new qt,Ni=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Hp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vp.setFromEuler(this),this.setFromQuaternion(Vp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ni.DEFAULT_ORDER="XYZ";var ro=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},S_=0,Gp=new P,Dr=new qt,rs=new at,Sl=new P,Vo=new P,E_=new P,w_=new qt,Wp=new P(1,0,0),Xp=new P(0,1,0),qp=new P(0,0,1),$p={type:"added"},T_={type:"removed"},Nr={type:"childadded",child:null},_h={type:"childremoved",child:null},Ht=class n extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new P,t=new Ni,i=new qt,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new ht}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.premultiply(Dr),this}rotateX(e){return this.rotateOnAxis(Wp,e)}rotateY(e){return this.rotateOnAxis(Xp,e)}rotateZ(e){return this.rotateOnAxis(qp,e)}translateOnAxis(e,t){return Gp.copy(e).applyQuaternion(this.quaternion),this.position.add(Gp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wp,e)}translateY(e){return this.translateOnAxis(Xp,e)}translateZ(e){return this.translateOnAxis(qp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rs.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Sl.copy(e):Sl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rs.lookAt(Vo,Sl,this.up):rs.lookAt(Sl,Vo,this.up),this.quaternion.setFromRotationMatrix(rs),s&&(rs.extractRotation(s.matrixWorld),Dr.setFromRotationMatrix(rs),this.quaternion.premultiply(Dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($p),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(T_),_h.child=e,this.dispatchEvent(_h),_h.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rs.multiply(e.parent.matrixWorld)),e.applyMatrix4(rs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($p),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,E_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,w_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ht.DEFAULT_UP=new P(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zt=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},A_={type:"move"},oo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(A_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new zt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},ag={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ds={h:0,s:0,l:0},El={h:0,s:0,l:0};function vh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var je=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=gt.workingColorSpace){return this.r=e,this.g=t,this.b=i,gt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=gt.workingColorSpace){if(e=wf(e,1),t=ft(t,0,1),i=ft(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=vh(o,r,e+1/3),this.g=vh(o,r,e),this.b=vh(o,r,e-1/3)}return gt.colorSpaceToWorking(this,s),this}setStyle(e,t=At){function i(r){r!==void 0&&parseFloat(r)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:nt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let i=ag[e.toLowerCase()];return i!==void 0?this.setHex(i,t):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}copyLinearToSRGB(e){return this.r=jr(e.r),this.g=jr(e.g),this.b=jr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return gt.workingToColorSpace(An.copy(this),e),Math.round(ft(An.r*255,0,255))*65536+Math.round(ft(An.g*255,0,255))*256+Math.round(ft(An.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(An.copy(this),t);let i=An.r,s=An.g,r=An.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=At){gt.workingToColorSpace(An.copy(this),e);let t=An.r,i=An.g,s=An.b;return e!==At?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ds),this.setHSL(Ds.h+e,Ds.s+t,Ds.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ds),e.getHSL(El);let i=ea(Ds.h,El.h,t),s=ea(Ds.s,El.s,t),r=ea(Ds.l,El.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},An=new je;je.NAMES=ag;var zn=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},pi=new P,os=new P,bh=new P,as=new P,Or=new P,Ur=new P,Yp=new P,Mh=new P,Sh=new P,Eh=new P,wh=new Mt,Th=new Mt,Ah=new Mt,Li=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),pi.subVectors(e,t),s.cross(pi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){pi.subVectors(s,t),os.subVectors(i,t),bh.subVectors(e,t);let o=pi.dot(pi),a=pi.dot(os),l=pi.dot(bh),c=os.dot(os),u=os.dot(bh),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,p=(o*u-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,as)===null?!1:as.x>=0&&as.y>=0&&as.x+as.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,as)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,as.x),l.addScaledVector(o,as.y),l.addScaledVector(a,as.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return wh.setScalar(0),Th.setScalar(0),Ah.setScalar(0),wh.fromBufferAttribute(e,t),Th.fromBufferAttribute(e,i),Ah.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(wh,r.x),o.addScaledVector(Th,r.y),o.addScaledVector(Ah,r.z),o}static isFrontFacing(e,t,i,s){return pi.subVectors(i,t),os.subVectors(e,t),pi.cross(os).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),os.subVectors(this.a,this.b),pi.cross(os).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Or.subVectors(s,i),Ur.subVectors(r,i),Mh.subVectors(e,i);let l=Or.dot(Mh),c=Ur.dot(Mh);if(l<=0&&c<=0)return t.copy(i);Sh.subVectors(e,s);let u=Or.dot(Sh),h=Ur.dot(Sh);if(u>=0&&h<=u)return t.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(i).addScaledVector(Or,o);Eh.subVectors(e,r);let d=Or.dot(Eh),p=Ur.dot(Eh);if(p>=0&&d<=p)return t.copy(r);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Ur,a);let m=u*p-d*h;if(m<=0&&h-u>=0&&d-p>=0)return Yp.subVectors(r,s),a=(h-u)/(h-u+(d-p)),t.copy(s).addScaledVector(Yp,a);let g=1/(m+x+f);return o=x*g,a=f*g,t.copy(i).addScaledVector(Or,o).addScaledVector(Ur,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Vt=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,mi):mi.fromBufferAttribute(r,o),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wl.copy(i.boundingBox)),wl.applyMatrix4(e.matrixWorld),this.union(wl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Go),Tl.subVectors(this.max,Go),Fr.subVectors(e.a,Go),Br.subVectors(e.b,Go),zr.subVectors(e.c,Go),Ns.subVectors(Br,Fr),Os.subVectors(zr,Br),nr.subVectors(Fr,zr);let t=[0,-Ns.z,Ns.y,0,-Os.z,Os.y,0,-nr.z,nr.y,Ns.z,0,-Ns.x,Os.z,0,-Os.x,nr.z,0,-nr.x,-Ns.y,Ns.x,0,-Os.y,Os.x,0,-nr.y,nr.x,0];return!Rh(t,Fr,Br,zr,Tl)||(t=[1,0,0,0,1,0,0,0,1],!Rh(t,Fr,Br,zr,Tl))?!1:(Al.crossVectors(Ns,Os),t=[Al.x,Al.y,Al.z],Rh(t,Fr,Br,zr,Tl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ls[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ls[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ls[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ls[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ls[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ls[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ls[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ls[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ls),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ls=[new P,new P,new P,new P,new P,new P,new P,new P],mi=new P,wl=new Vt,Fr=new P,Br=new P,zr=new P,Ns=new P,Os=new P,nr=new P,Go=new P,Tl=new P,Al=new P,ir=new P;function Rh(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ir.fromArray(n,r);let a=s.x*Math.abs(ir.x)+s.y*Math.abs(ir.y)+s.z*Math.abs(ir.z),l=e.dot(ir),c=t.dot(ir),u=i.dot(ir);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var en=new P,Rl=new Ye,R_=0,Bt=class extends xi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:R_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Sf,this.updateRanges=[],this.gpuType=kn,this.version=0,this._normalizationScale=e!==void 0?pu(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Rl.fromBufferAttribute(this,t),Rl.applyMatrix3(e),this.setXY(t,Rl.x,Rl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Af(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Rf(e,this.array)}};var sa=class extends Bt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ra=class extends Bt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var kt=class extends Bt{constructor(e,t,i){super(new Float32Array(e),t,i)}},C_=new Vt,Wo=new P,Ch=new P,xn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):C_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wo.subVectors(e,this.center);let t=Wo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Wo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ch.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wo.copy(e.center).add(Ch)),this.expandByPoint(Wo.copy(e.center).sub(Ch))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},P_=0,ei=new at,Ph=new Ht,kr=new P,Zn=new Vt,Xo=new Vt,mn=new P,Ot=class n extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(t_(e)?ra:sa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ht().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,i){return ei.makeTranslation(e,t,i),this.applyMatrix4(ei),this}scale(e,t,i){return ei.makeScale(e,t,i),this.applyMatrix4(ei),this}lookAt(e){return Ph.lookAt(e),Ph.updateMatrix(),this.applyMatrix4(Ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new kt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Zn.setFromBufferAttribute(r),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Xo.setFromBufferAttribute(a),this.morphTargetsRelative?(mn.addVectors(Zn.min,Xo.min),Zn.expandByPoint(mn),mn.addVectors(Zn.max,Xo.max),Zn.expandByPoint(mn)):(Zn.expandByPoint(Xo.min),Zn.expandByPoint(Xo.max))}Zn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)mn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(mn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)mn.fromBufferAttribute(a,c),l&&(kr.fromBufferAttribute(e,c),mn.add(kr)),s=Math.max(s,i.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Bt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let D=0;D<i.count;D++)a[D]=new P,l[D]=new P;let u=new P,h=new P,f=new P,d=new Ye,p=new Ye,x=new Ye,m=new P,g=new P;function v(D,I,z){c[D]=c[I]=c[z]=1,u.fromBufferAttribute(i,D),h.fromBufferAttribute(i,I),f.fromBufferAttribute(i,z),d.fromBufferAttribute(r,D),p.fromBufferAttribute(r,I),x.fromBufferAttribute(r,z),h.sub(u),f.sub(u),p.sub(d),x.sub(d);let W=1/(p.x*x.y-x.x*p.y);isFinite(W)&&(m.copy(h).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(W),g.copy(f).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(W),a[D].add(m),a[I].add(m),a[z].add(m),l[D].add(g),l[I].add(g),l[z].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let D=0,I=b.length;D<I;++D){let z=b[D],W=z.start,k=z.count;for(let N=W,G=W+k;N<G;N+=3)v(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let _=new P,w=new P,T=new P,y=new P;function E(D){T.fromBufferAttribute(s,D),y.copy(T);let I=a[D];_.copy(I),_.sub(T.multiplyScalar(T.dot(I))).normalize(),w.crossVectors(y,I);let W=w.dot(l[D])<0?-1:1;o.setXYZW(D,_.x,_.y,_.z,W)}for(let D=0,I=i.count;D<I;++D)c[D]&&E(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let g=0;g<u;g++)f[p++]=c[d++]}return new Bt(f,u,h)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Sf,this.updateRanges=[],this.version=0,this.uuid=Hi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Zp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Zp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Zp(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=Hi()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var Fn=new P,Rn=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?pu(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Fn.fromBufferAttribute(this,t),Fn.applyMatrix4(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Fn.fromBufferAttribute(this,t),Fn.applyNormalMatrix(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Fn.fromBufferAttribute(this,t),Fn.transformDirection(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){na("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){na("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Af(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Rf(e,this.data.array)}},Ih=new P,I_=new P,L_=new ht,gn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Ih.subVectors(i,t).cross(I_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Ih),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||L_.getNormalMatrix(e),s=this.coplanarPoint(Ih).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},D_=0,Cn=class extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:D_++}),this.uuid=Hi(),this.name="",this.type="Material",this.blending=ki,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ia,this.blendDst=go,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tc,this.stencilZFail=tc,this.stencilZPass=tc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){nt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){nt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new gn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ye().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ye().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ao=class extends Cn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Hr,qo=new P,Vr=new P,Gr=new P,Wr=new Ye,$o=new Ye,lg=new at,Cl=new P,Yo=new P,Pl=new P,Kp=new Ye,Lh=new Ye,Jp=new Ye,oa=class extends Ht{constructor(e=new ao){if(super(),this.isSprite=!0,this.type="Sprite",Hr===void 0){Hr=new Ot;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Bs(t,5);Hr.setIndex([0,1,2,0,2,3]),Hr.setAttribute("position",new Rn(i,3,0,!1)),Hr.setAttribute("uv",new Rn(i,2,3,!1))}this.geometry=Hr,this.material=e,this.center=new Ye(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ct('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vr.setFromMatrixScale(this.matrixWorld),lg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Gr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vr.multiplyScalar(-Gr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Il(Cl.set(-.5,-.5,0),Gr,o,Vr,s,r),Il(Yo.set(.5,-.5,0),Gr,o,Vr,s,r),Il(Pl.set(.5,.5,0),Gr,o,Vr,s,r),Kp.set(0,0),Lh.set(1,0),Jp.set(1,1);let a=e.ray.intersectTriangle(Cl,Yo,Pl,!1,qo);if(a===null&&(Il(Yo.set(-.5,.5,0),Gr,o,Vr,s,r),Lh.set(0,1),a=e.ray.intersectTriangle(Cl,Pl,Yo,!1,qo),a===null))return;let l=e.ray.origin.distanceTo(qo);l<e.near||l>e.far||t.push({distance:l,point:qo.clone(),uv:Li.getInterpolation(qo,Cl,Yo,Pl,Kp,Lh,Jp,new Ye),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Il(n,e,t,i,s,r){Wr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?($o.x=r*Wr.x-s*Wr.y,$o.y=s*Wr.x+r*Wr.y):$o.copy(Wr),n.copy(e),n.x+=$o.x,n.y+=$o.y,n.applyMatrix4(lg)}var cs=new P,Dh=new P,Ll=new P,Dl=new P,Oi=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=cs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cs.copy(this.origin).addScaledVector(this.direction,t),cs.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Dh.copy(e).add(t).multiplyScalar(.5),Ll.copy(t).sub(e).normalize(),Dl.copy(this.origin).sub(Dh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ll),a=Dl.dot(this.direction),l=-Dl.dot(Ll),c=Dl.lengthSq(),u=Math.abs(1-o*o),h,f,d,p;if(u>0)if(h=o*l-a,f=o*a-l,p=r*u,h>=0)if(f>=-p)if(f<=p){let x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-p?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=p?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Dh).addScaledVector(Ll,f),d}intersectSphere(e,t){if(e.radius<0)return null;cs.subVectors(e.center,this.origin);let i=cs.dot(this.direction),s=cs.dot(cs)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,cs)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=e.x-o.x,f=e.y-o.y,d=e.z-o.z,p=t.x-o.x,x=t.y-o.y,m=t.z-o.z,g=i.x-o.x,v=i.y-o.y,b=i.z-o.z,_=Math.abs(l),w=Math.abs(c),T=Math.abs(u),y,E,D,I,z,W,k,N,G,j,q,ye;if(_>=w&&_>=T?(D=l,W=h,G=p,ye=g,l>=0?(y=c,E=u,I=f,z=d,k=x,N=m,j=v,q=b):(y=u,E=c,I=d,z=f,k=m,N=x,j=b,q=v)):w>=T?(D=c,W=f,G=x,ye=v,c>=0?(y=u,E=l,I=d,z=h,k=m,N=p,j=b,q=g):(y=l,E=u,I=h,z=d,k=p,N=m,j=g,q=b)):(D=u,W=d,G=m,ye=b,u>=0?(y=l,E=c,I=h,z=f,k=p,N=x,j=g,q=v):(y=c,E=l,I=f,z=h,k=x,N=p,j=v,q=g)),D===0)return null;let Y=y/D,V=E/D,Q=1/D,be=I-Y*W,Re=z-V*W,K=k-Y*G,ae=N-V*G,B=j-Y*ye,ee=q-V*ye,pe=B*ae-ee*K,Se=be*ee-Re*B,$e=K*Re-ae*be;if(s){if(pe<0||Se<0||$e<0)return null}else if((pe<0||Se<0||$e<0)&&(pe>0||Se>0||$e>0))return null;let Oe=pe+Se+$e;if(Oe===0)return null;let ze=Q*(pe*W+Se*G+$e*ye);return(Oe>0?ze<0:ze>0)?null:this.at(ze/Oe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nn=class extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},jp=new at,sr=new Oi,Nl=new xn,Qp=new P,Ol=new P,Ul=new P,Fl=new P,Nh=new P,Bl=new P,em=new P,zl=new P,pt=class extends Ht{constructor(e=new Ot,t=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Bl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Nh.fromBufferAttribute(h,e),o?Bl.addScaledVector(Nh,u):Bl.addScaledVector(Nh.sub(t),u))}t.add(Bl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Nl.copy(i.boundingSphere),Nl.applyMatrix4(r),sr.copy(e.ray).recast(e.near),!(Nl.containsPoint(sr.origin)===!1&&(sr.intersectSphere(Nl,Qp)===null||sr.origin.distanceToSquared(Qp)>(e.far-e.near)**2))&&(jp.copy(r).invert(),sr.copy(e.ray).applyMatrix4(jp),!(i.boundingBox!==null&&sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,sr)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],v=Math.max(m.start,d.start),b=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=v,w=b;_<w;_+=3){let T=a.getX(_),y=a.getX(_+1),E=a.getX(_+2);s=kl(this,g,e,i,c,u,h,T,y,E),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){let v=a.getX(m),b=a.getX(m+1),_=a.getX(m+2);s=kl(this,o,e,i,c,u,h,v,b,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],v=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=v,w=b;_<w;_+=3){let T=_,y=_+1,E=_+2;s=kl(this,g,e,i,c,u,h,T,y,E),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){let v=m,b=m+1,_=m+2;s=kl(this,o,e,i,c,u,h,v,b,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function N_(n,e,t,i,s,r,o,a){let l;if(e.side===vn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Kn,a),l===null)return null;zl.copy(a),zl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(zl);return c<t.near||c>t.far?null:{distance:c,point:zl.clone(),object:n}}function kl(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ol),n.getVertexPosition(l,Ul),n.getVertexPosition(c,Fl);let u=N_(n,e,t,i,Ol,Ul,Fl,em);if(u){let h=new P;Li.getBarycoord(em,Ol,Ul,Fl,h),s&&(u.uv=Li.getInterpolatedAttribute(s,a,l,c,h,new Ye)),r&&(u.uv1=Li.getInterpolatedAttribute(r,a,l,c,h,new Ye)),o&&(u.normal=Li.getInterpolatedAttribute(o,a,l,c,h,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new P,materialIndex:0};Li.getNormal(Ol,Ul,Fl,f.normal),u.face=f,u.barycoord=h}return u}var Zo=new Mt,tm=new Mt,nm=new Mt,O_=new Mt,im=new at,Hl=new P,Oh=new xn,sm=new at,Uh=new Oi,aa=class extends pt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Vh,this.bindMatrix=new at,this.bindMatrixInverse=new at,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Hl),this.boundingBox.expandByPoint(Hl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new xn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Hl),this.boundingSphere.expandByPoint(Hl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oh.copy(this.boundingSphere),Oh.applyMatrix4(s),e.ray.intersectsSphere(Oh)!==!1&&(sm.copy(s).invert(),Uh.copy(e.ray).applyMatrix4(sm),!(this.boundingBox!==null&&Uh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Uh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Mt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Vh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$m?this.bindMatrixInverse.copy(this.bindMatrix).invert():nt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;tm.fromBufferAttribute(s.attributes.skinIndex,e),nm.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Zo.copy(t),t.set(0,0,0,0)):(Zo.set(t.x,t.y,t.z,1),t.set(0,0,0)),Zo.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=nm.getComponent(r);if(o!==0){let a=tm.getComponent(r);im.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(O_.copy(Zo).applyMatrix4(im),o)}}return t.isVector4&&(t.w=Zo.w),t.applyMatrix4(this.bindMatrixInverse)}},lo=class extends Ht{constructor(){super(),this.isBone=!0,this.type="Bone"}},co=class extends an{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Gt,u=Gt,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},rm=new at,U_=new at,la=class n{constructor(e=[],t=[]){this.uuid=Hi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){nt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new at)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new at;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:U_;rm.multiplyMatrices(a,t[r]),rm.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new co(t,e,e,bn,kn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(nt("Skeleton: No bone found with UUID:",r),o=new lo),this.bones.push(o),this.boneInverses.push(new at().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}},ds=class extends Bt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Xr=new at,om=new at,Vl=[],am=new Vt,F_=new at,Ko=new pt,Jo=new xn,ur=class extends pt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ds(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,F_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Xr),am.copy(e.boundingBox).applyMatrix4(Xr),this.boundingBox.union(am)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Xr),Jo.copy(e.boundingSphere).applyMatrix4(Xr),this.boundingSphere.union(Jo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Ko.geometry=this.geometry,Ko.material=this.material,Ko.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jo.copy(this.boundingSphere),Jo.applyMatrix4(i),e.ray.intersectsSphere(Jo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Xr),om.multiplyMatrices(i,Xr),Ko.matrixWorld=om,Ko.raycast(e,Vl);for(let o=0,a=Vl.length;o<a;o++){let l=Vl[o];l.instanceId=r,l.object=this,t.push(l)}Vl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ds(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new co(new Float32Array(s*this.count),s,this.count,Nc,kn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},rr=new xn,B_=new Ye(.5,.5),Gl=new P,zs=class{constructor(e=new gn,t=new gn,i=new gn,s=new gn,r=new gn,o=new gn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ni,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],p=r[8],x=r[9],m=r[10],g=r[11],v=r[12],b=r[13],_=r[14],w=r[15];if(s[0].setComponents(c-o,d-u,g-p,w-v).normalize(),s[1].setComponents(c+o,d+u,g+p,w+v).normalize(),s[2].setComponents(c+a,d+h,g+x,w+b).normalize(),s[3].setComponents(c-a,d-h,g-x,w-b).normalize(),i)s[4].setComponents(l,f,m,_).normalize(),s[5].setComponents(c-l,d-f,g-m,w-_).normalize();else if(s[4].setComponents(c-l,d-f,g-m,w-_).normalize(),t===ni)s[5].setComponents(c+l,d+f,g+m,w+_).normalize();else if(t===to)s[5].setComponents(l,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){rr.center.set(0,0,0);let t=B_.distanceTo(e.center);return rr.radius=.7071067811865476+t,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Gl.x=s.normal.x>0?e.max.x:e.min.x,Gl.y=s.normal.y>0?e.max.y:e.min.y,Gl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Gl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},lm=new at,fc=class n{constructor(){this.coordinateSystem=ni,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];lm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new zs),i[s].setFromProjectionMatrix(lm,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new zs),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var ps=class extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},dc=new P,pc=new P,cm=new at,jo=new Oi,Wl=new xn,Fh=new P,um=new P,Ui=class extends Ht{constructor(e=new Ot,t=new ps){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)dc.fromBufferAttribute(t,s-1),pc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=dc.distanceTo(pc);e.setAttribute("lineDistance",new kt(i,1))}else nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wl.copy(i.boundingSphere),Wl.applyMatrix4(s),Wl.radius+=r,e.ray.intersectsSphere(Wl)===!1)return;cm.copy(s).invert(),jo.copy(e.ray).applyMatrix4(cm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=d,m=p-1;x<m;x+=c){let g=u.getX(x),v=u.getX(x+1),b=Xl(this,e,jo,l,g,v,x);b&&t.push(b)}if(this.isLineLoop){let x=u.getX(p-1),m=u.getX(d),g=Xl(this,e,jo,l,x,m,p-1);g&&t.push(g)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=d,m=p-1;x<m;x+=c){let g=Xl(this,e,jo,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=Xl(this,e,jo,l,p-1,d,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Xl(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(dc.fromBufferAttribute(a,s),pc.fromBufferAttribute(a,r),t.distanceSqToSegment(dc,pc,Fh,um)>i)return;Fh.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Fh);if(!(c<e.near||c>e.far))return{distance:c,point:um.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var hm=new P,fm=new P,ca=class extends Ui{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)hm.fromBufferAttribute(t,s),fm.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+hm.distanceTo(fm);e.setAttribute("lineDistance",new kt(i,1))}else nt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ua=class extends Ui{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},uo=class extends Cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},dm=new at,$h=new Oi,ql=new xn,$l=new P,ha=class extends Ht{constructor(e=new Ot,t=new uo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ql.copy(i.boundingSphere),ql.applyMatrix4(s),ql.radius+=r,e.ray.intersectsSphere(ql)===!1)return;dm.copy(s).invert(),$h.copy(e.ray).applyMatrix4(dm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,x=d;p<x;p++){let m=c.getX(p);$l.fromBufferAttribute(h,m),pm($l,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let p=f,x=d;p<x;p++)$l.fromBufferAttribute(h,p),pm($l,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function pm(n,e,t,i,s,r,o){let a=$h.distanceSqToPoint(n);if(a<t){let l=new P;$h.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var fa=class extends an{constructor(e=[],t=dr,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ms=class extends an{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var gs=class extends an{constructor(e,t,i=bi,s,r,o,a=Gt,l=Gt,c,u=fs,h=1){if(u!==fs&&u!==Ms)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new so(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},da=class extends gs{constructor(e,t=bi,i=dr,s,r,o=Gt,a=Gt,l,c=fs){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},pa=class extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Fi=class n extends Ot{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(u,3)),this.setAttribute("uv",new kt(h,2));function p(x,m,g,v,b,_,w,T,y,E,D){let I=_/y,z=w/E,W=_/2,k=w/2,N=T/2,G=y+1,j=E+1,q=0,ye=0,Y=new P;for(let V=0;V<j;V++){let Q=V*z-k;for(let be=0;be<G;be++){let Re=be*I-W;Y[x]=Re*v,Y[m]=Q*b,Y[g]=N,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[m]=0,Y[g]=T>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(be/y),h.push(1-V/E),q+=1}}for(let V=0;V<E;V++)for(let Q=0;Q<y;Q++){let be=f+Q+G*V,Re=f+Q+G*(V+1),K=f+(Q+1)+G*(V+1),ae=f+(Q+1)+G*V;l.push(be,Re,ae),l.push(Re,K,ae),ye+=6}a.addGroup(d,ye,D),d+=ye,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Yl=new P,Zl=new P,Bh=new P,Kl=new Li,ma=class extends Ot{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Jr*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f=new Map,d=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:x,b:m,c:g}=Kl;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),Kl.getNormal(Bh),h[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let v=0;v<3;v++){let b=(v+1)%3,_=h[v],w=h[b],T=Kl[u[v]],y=Kl[u[b]],E=`${_}_${w}`,D=`${w}_${_}`,I=f.get(D);I?(Bh.dot(I.normal)<=r&&(d.push(T.x,T.y,T.z),d.push(y.x,y.y,y.z)),f.set(D,null)):f.has(E)||f.set(E,{index0:c[v],index1:c[b],normal:Bh.clone()})}}for(let p of f.values())if(p){let{index0:x,index1:m}=p;Yl.fromBufferAttribute(a,x),Zl.fromBufferAttribute(a,m),d.push(Yl.x,Yl.y,Yl.z),d.push(Zl.x,Zl.y,Zl.z)}this.setAttribute("position",new kt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var ii=class n extends Ot{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],p=[],x=[],m=[];for(let g=0;g<u;g++){let v=g*f-o;for(let b=0;b<c;b++){let _=b*h-r;p.push(_,-v,0),x.push(0,0,1),m.push(b/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let b=v+c*g,_=v+c*(g+1),w=v+1+c*(g+1),T=v+1+c*g;d.push(b,_,T),d.push(_,w,T)}this.setIndex(d),this.setAttribute("position",new kt(p,3)),this.setAttribute("normal",new kt(x,3)),this.setAttribute("uv",new kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var ga=class n extends Ot{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new P,f=new P,d=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){let v=[],b=g/i,_=o+b*a,w=e*Math.cos(_),T=Math.sqrt(e*e-w*w),y=0;g===0&&o===0?y=.5/t:g===i&&l===Math.PI&&(y=-.5/t);for(let E=0;E<=t;E++){let D=E/t,I=s+D*r;h.x=-T*Math.cos(I),h.y=w,h.z=T*Math.sin(I),p.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(D+y,1-b),v.push(c++)}u.push(v)}for(let g=0;g<i;g++)for(let v=0;v<t;v++){let b=u[g][v+1],_=u[g][v],w=u[g+1][v],T=u[g+1][v+1];(g!==0||o>0)&&d.push(b,_,T),(g!==i-1||l<Math.PI)&&d.push(_,w,T)}this.setIndex(d),this.setAttribute("position",new kt(p,3)),this.setAttribute("normal",new kt(x,3)),this.setAttribute("uv",new kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var xa=class extends Ot{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new P,r=new P;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let h=l[c],f=h.start,d=h.count;for(let p=f,x=f+d;p<x;p+=3)for(let m=0;m<3;m++){let g=a.getX(p+m),v=a.getX(p+(m+1)%3);s.fromBufferAttribute(o,g),r.fromBufferAttribute(o,v),mm(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let u=3*a+c,h=3*a+(c+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),mm(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new kt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function mm(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}function gr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(gm(s))s.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(gm(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Ln(n){let e={};for(let t=0;t<n.length;t++){let i=gr(n[t]);for(let s in i)e[s]=i[s]}return e}function gm(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function z_(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Cf(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}var Ha={clone:gr,merge:Ln},k_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yn=class extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=k_,this.fragmentShader=H_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gr(e.uniforms),this.uniformsGroups=z_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new je().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ye().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Mt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ht().fromArray(s.value);break;case"m4":this.uniforms[i].value=new at().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},mc=class extends yn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Pn=class extends Cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ka,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ln=class extends Pn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ye(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return or('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){or('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ya=class extends Cn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ka,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Ac,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},gc=class extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xc=class extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Fs(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Qo(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function V_(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function xm(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function G_(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push(...o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var Bi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},yc=class extends Bi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wh,endingEnd:Wh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Xh:r=e,a=2*t-i;break;case qh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Xh:o=e,l=2*i-t;break;case qh:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(i-t)/(s-t),x=p*p,m=x*p,g=-f*m+2*f*x-f*p,v=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*p+1,b=(-1-d)*m+(1.5+d)*x+.5*p,_=d*m-d*x;for(let w=0;w!==a;++w)r[w]=g*o[u+w]+v*o[c+w]+b*o[l+w]+_*o[h+w];return r}},_c=class extends Bi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},vc=class extends Bi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},bc=class extends Bi{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(i-t)/(s-t),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let f=a*2,d=e-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=d*f+p*2,v=h[g],b=h[g+1],_=e*f+p*2,w=u[_],T=u[_+1],y=X_(i,t,v,w,s);r[p]=cg(y,x,b,T,m)}return r}};function cg(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function W_(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function X_(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=cg(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=W_(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Xn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fs(t,this.TimeBufferType),this.values=Fs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Fs(e.times,Array),values:Fs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Qo(e.settings)&&(i.settings={inTangents:Fs(e.settings.inTangents,Array),outTangents:Fs(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new vc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _c(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new bc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ar:t=this.InterpolantFactoryMethodDiscrete;break;case lr:t=this.InterpolantFactoryMethodLinear;break;case ec:t=this.InterpolantFactoryMethodSmooth;break;case Gh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return nt("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ar;case this.InterpolantFactoryMethodLinear:return lr;case this.InterpolantFactoryMethodSmooth:return ec;case this.InterpolantFactoryMethodBezier:return Gh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;Qo(this.settings)&&(ym(this.settings.inTangents,e),ym(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Qo(this.settings)&&(_m(this.settings.inTangents,e),_m(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ct("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ct("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){ct("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){ct("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&n_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){ct("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ec,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*i,f=h-i,d=h+i;for(let p=0;p!==i;++p){let x=t[h+p];if(x!==t[f+p]||x!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Qo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ym(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function _m(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Xn.prototype.ValueTypeName="";Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=lr;var xs=class extends Xn{constructor(e,t,i){super(e,t,i)}};xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=ar;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var _a=class extends Xn{constructor(e,t,i,s){super(e,t,i,s)}};_a.prototype.ValueTypeName="color";var ys=class extends Xn{constructor(e,t,i,s){super(e,t,i,s)}};ys.prototype.ValueTypeName="number";var Mc=class extends Bi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)qt.slerpFlat(r,0,o,c-a,o,c,l);return r}},_s=class extends Xn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Mc(this.times,this.values,this.getValueSize(),e)}};_s.prototype.ValueTypeName="quaternion";_s.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends Xn{constructor(e,t,i){super(e,t,i)}};vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=ar;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var ks=class extends Xn{constructor(e,t,i,s){super(e,t,i,s)}};ks.prototype.ValueTypeName="vector";var va=class{constructor(e="",t=-1,i=[],s=Ym){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Hi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push($_(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=i.length;r!==o;++r)t.push(Xn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=V_(l);l=xm(l,1,u),c=xm(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ys(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],f=s[h];f||(s[h]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function q_(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ys;case"vector":case"vector2":case"vector3":case"vector4":return ks;case"color":return _a;case"quaternion":return _s;case"bool":case"boolean":return xs;case"string":return vs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function $_(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=q_(n.type);if(n.times===void 0){let i=[],s=[];G_(n.keys,i,s,"value"),n.times=i,n.values=s}let t;return e.parse!==void 0?t=e.parse(n):t=new e(n.name,n.times,n.values,n.interpolation),Qo(n.settings)&&(t.settings={inTangents:Fs(n.settings.inTangents,Float32Array),outTangents:Fs(n.settings.outTangents,Float32Array)}),t}var Di={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(vm(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!vm(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function vm(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Sc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],p=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ug=new Sc,zi=class{constructor(e){this.manager=e!==void 0?e:ug,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};zi.DEFAULT_MATERIAL_NAME="__DEFAULT";var us={},Yh=class extends Error{constructor(e,t){super(e),this.response=t}},ho=class extends zi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Di.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(us[e]!==void 0){us[e].push({onLoad:t,onProgress:i,onError:s});return}us[e]=[],us[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&nt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=us[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0,x=0,m=new ReadableStream({start(g){v();function v(){h.read().then(({done:b,value:_})=>{if(b)g.close();else{x+=_.byteLength;let w=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:d});for(let T=0,y=u.length;T<y;T++){let E=u[T];E.onProgress&&E.onProgress(w)}g.enqueue(_),v()}},b=>{g.error(b)})}}});return new Response(m)}else throw new Yh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{Di.add(`file:${e}`,c);let u=us[e];delete us[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=us[e];if(u===void 0)throw this.manager.itemError(e),c;delete us[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var qr=new WeakMap,Ec=class extends zi{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Di.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=qr.get(o);h===void 0&&(h=[],qr.set(o,h)),h.push({onLoad:t,onError:s})}return o}let a=no("img");function l(){u(),t&&t(this);let h=qr.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}qr.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),Di.remove(`image:${e}`);let f=qr.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(h)}qr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Di.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var ba=class extends zi{constructor(e){super(e)}load(e,t,i,s){let r=new an,o=new Ec(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},hr=class extends Ht{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var zh=new at,bm=new P,Mm=new P,fo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;bm.setFromMatrixPosition(e.matrixWorld),t.position.copy(bm),Mm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){zh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(zh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===to||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(zh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Jl=new P,jl=new qt,Ii=new P,Ma=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Jl,jl,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jl,jl,Ii.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Jl,jl,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jl,jl,Ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Us=new P,Sm=new Ye,Em=new Ye,on=class extends Ma{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cr*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Us.x,Us.y).multiplyScalar(-e/Us.z),Us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Us.x,Us.y).multiplyScalar(-e/Us.z)}getViewSize(e,t){return this.getViewBounds(e,Sm,Em),t.subVectors(Em,Sm)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Jr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Zh=class extends fo{constructor(){super(new on(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=cr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Sa=class extends hr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Zh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Kh=class extends fo{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0}},fr=class extends hr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Kh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},yi=class extends Ma{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Jh=class extends fo{constructor(){super(new yi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hs=class extends hr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Jh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ea=class extends hr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var bs=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},wa=class extends Ot{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var kh=new WeakMap,Ta=class extends zi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&nt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&nt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Di.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{kh.has(o)===!0?(s&&s(kh.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Di.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),kh.set(l,c),Di.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Di.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var $r=-90,Yr=1,po=class extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new on($r,Yr,e,t);s.layers=this.layers,this.add(s);let r=new on($r,Yr,e,t);r.layers=this.layers,this.add(r);let o=new on($r,Yr,e,t);o.layers=this.layers,this.add(o);let a=new on($r,Yr,e,t);a.layers=this.layers,this.add(a);let l=new on($r,Yr,e,t);l.layers=this.layers,this.add(l);let c=new on($r,Yr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ni)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===to)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},wc=class extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Pf="\\[\\]\\.:\\/",Y_=new RegExp("["+Pf+"]","g"),If="[^"+Pf+"]",Z_="[^"+Pf.replace("\\.","")+"]",K_=/((?:WC+[\/:])*)/.source.replace("WC",If),J_=/(WCOD+)?/.source.replace("WCOD",Z_),j_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",If),Q_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",If),ev=new RegExp("^"+K_+J_+j_+Q_+"$"),tv=["material","materials","bones","map"],jh=class{constructor(e,t,i){let s=i||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},It=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Y_,"")}static parseTrackName(e){let t=ev.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);tv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ct("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ct("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ct("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ct("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){ct("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;ct("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=jh;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bA=new Float32Array(1);var Vs=class extends Bs{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var wm=new at,_i=class{constructor(e,t,i=0,s=1/0){this.ray=new Oi(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new ro,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ct("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return wm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wm),this}intersectObject(e,t=!0,i=[]){return Qh(e,this,i,t),i.sort(Tm),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Qh(e[s],this,i,t);return i.sort(Tm),i}};function Tm(n,e){return n.distance-e.distance}function Qh(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Qh(r[o],e,t,!0)}}var Gs=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ft(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ef=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};var Am=new P,Ql=new P,Zr=new P,Kr=new P,Hh=new P,nv=new P,iv=new P,Aa=class{constructor(e=new P,t=new P){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Am.subVectors(e,this.start),Ql.subVectors(this.end,this.start);let i=Ql.dot(Ql);if(i===0)return 0;let r=Ql.dot(Am)/i;return t&&(r=ft(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=nv,i=iv){let s=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,u=e.end;Zr.subVectors(c,a),Kr.subVectors(u,l),Hh.subVectors(a,l);let h=Zr.dot(Zr),f=Kr.dot(Kr),d=Kr.dot(Hh);if(h<=s&&f<=s)return t.copy(a),i.copy(l),t.distanceToSquared(i);if(h<=s)r=0,o=d/f,o=ft(o,0,1);else{let p=Zr.dot(Hh);if(f<=s)o=0,r=ft(-p/h,0,1);else{let x=Zr.dot(Kr),m=h*f-x*x;m!==0?r=ft((x*d-p*f)/m,0,1):r=0,o=(x*r+d)/f,o<0?(o=0,r=ft(-p/h,0,1)):o>1&&(o=1,r=ft((x-p)/h,0,1))}}return t.copy(a).addScaledVector(Zr,r),i.copy(l).addScaledVector(Kr,o),t.distanceToSquared(i)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Ra=class extends xi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Lf(n,e,t,i){let s=sv(i);switch(t){case xf:return n*e;case Nc:return n*e/s.components*s.byteLength;case Oc:return n*e/s.components*s.byteLength;case $s:return n*e*2/s.components*s.byteLength;case Uc:return n*e*2/s.components*s.byteLength;case yf:return n*e*3/s.components*s.byteLength;case bn:return n*e*4/s.components*s.byteLength;case Fc:return n*e*4/s.components*s.byteLength;case Da:case Na:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Oa:case Ua:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zc:case Hc:return Math.max(n,16)*Math.max(e,8)/4;case Bc:case kc:return Math.max(n,8)*Math.max(e,8)/2;case Vc:case Gc:case Xc:case qc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wc:case Fa:case $c:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Kc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case jc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case eu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case tu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case nu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case iu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case su:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ru:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ou:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case au:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case lu:case cu:case uu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case hu:case fu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ba:case du:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sv(n){switch(n){case In:case df:return{byteLength:1,components:1};case vo:case pf:case qn:return{byteLength:2,components:1};case Lc:case Dc:return{byteLength:2,components:4};case bi:case Ic:case kn:return{byteLength:4,components:1};case mf:case gf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Lg(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function ov(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<h.length;d++){let p=h[f],x=h[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,p=h.length;d<p;d++){let x=h[d];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var av=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lv=`#ifdef USE_ALPHAHASH
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
#endif`,cv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dv=`#ifdef USE_AOMAP
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
#endif`,pv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mv=`#ifdef USE_BATCHING
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
#endif`,gv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_v=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vv=`#ifdef USE_IRIDESCENCE
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
#endif`,bv=`#ifdef USE_BUMPMAP
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
#endif`,Mv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ev=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Av=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Pv=`#define PI 3.141592653589793
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
} // validated`,Iv=`vec3 transformedNormal = objectNormal;
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
#endif`,Lv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ov=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bv=`#ifdef USE_ENVMAP
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
#endif`,zv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,kv=`#ifdef USE_ENVMAP
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
#endif`,Hv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vv=`#ifdef USE_ENVMAP
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
#endif`,Gv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$v=`#ifdef USE_GRADIENTMAP
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
}`,Yv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,jv=`#ifdef USE_ENVMAP
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
#endif`,Qv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ib=`PhysicalMaterial material;
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
#endif`,sb=`uniform sampler2D dfgLUT;
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
}`,rb=`
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
#endif`,ob=`#if defined( RE_IndirectDiffuse )
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
#endif`,ab=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lb=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,cb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ub=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,db=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gb=`#if defined( USE_POINTS_UV )
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
#endif`,xb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_b=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vb=`#if defined( USE_MORPHCOLORS )
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
#endif`,bb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mb=`#ifdef USE_MORPHTARGETS
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
#endif`,Sb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ab=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Cb=`#ifdef USE_NORMALMAP
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
#endif`,Pb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ib=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Db=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ob=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ub=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xb=`float getShadowMask() {
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
}`,qb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$b=`#ifdef USE_SKINNING
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
#endif`,Yb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zb=`#ifdef USE_SKINNING
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
#endif`,Kb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qb=`#ifndef saturate
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
}`,yM=`uniform float scale;
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
}`,_M=`uniform vec3 diffuse;
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
}`,bM=`uniform vec3 diffuse;
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
}`,MM=`#define LAMBERT
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
}`,SM=`#define LAMBERT
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
}`,mt={alphahash_fragment:av,alphahash_pars_fragment:lv,alphamap_fragment:cv,alphamap_pars_fragment:uv,alphatest_fragment:hv,alphatest_pars_fragment:fv,aomap_fragment:dv,aomap_pars_fragment:pv,batching_pars_vertex:mv,batching_vertex:gv,begin_vertex:xv,beginnormal_vertex:yv,bsdfs:_v,iridescence_fragment:vv,bumpmap_pars_fragment:bv,clipping_planes_fragment:Mv,clipping_planes_pars_fragment:Sv,clipping_planes_pars_vertex:Ev,clipping_planes_vertex:wv,color_fragment:Tv,color_pars_fragment:Av,color_pars_vertex:Rv,color_vertex:Cv,common:Pv,defaultnormal_vertex:Iv,displacementmap_pars_vertex:Lv,displacementmap_vertex:Dv,emissivemap_fragment:Nv,emissivemap_pars_fragment:Ov,colorspace_fragment:Uv,colorspace_pars_fragment:Fv,envmap_fragment:Bv,envmap_common_pars_fragment:zv,envmap_pars_fragment:kv,envmap_pars_vertex:Hv,envmap_physical_pars_fragment:jv,envmap_vertex:Vv,fog_vertex:Gv,fog_pars_vertex:Wv,fog_fragment:Xv,fog_pars_fragment:qv,gradientmap_pars_fragment:$v,lightmap_pars_fragment:Yv,lights_lambert_fragment:Zv,lights_lambert_pars_fragment:Kv,lights_pars_begin:Jv,lights_toon_fragment:Qv,lights_toon_pars_fragment:eb,lights_phong_fragment:tb,lights_phong_pars_fragment:nb,lights_physical_fragment:ib,lights_physical_pars_fragment:sb,lights_fragment_begin:rb,lights_fragment_maps:ob,lights_fragment_end:ab,lightprobes_pars_fragment:lb,logdepthbuf_fragment:cb,logdepthbuf_pars_fragment:ub,logdepthbuf_pars_vertex:hb,logdepthbuf_vertex:fb,map_fragment:db,map_pars_fragment:pb,map_particle_fragment:mb,map_particle_pars_fragment:gb,metalnessmap_fragment:xb,metalnessmap_pars_fragment:yb,morphinstance_vertex:_b,morphcolor_vertex:vb,morphnormal_vertex:bb,morphtarget_pars_vertex:Mb,morphtarget_vertex:Sb,normal_fragment_begin:Eb,normal_fragment_maps:wb,normal_pars_fragment:Tb,normal_pars_vertex:Ab,normal_vertex:Rb,normalmap_pars_fragment:Cb,clearcoat_normal_fragment_begin:Pb,clearcoat_normal_fragment_maps:Ib,clearcoat_pars_fragment:Lb,iridescence_pars_fragment:Db,opaque_fragment:Nb,packing:Ob,premultiplied_alpha_fragment:Ub,project_vertex:Fb,dithering_fragment:Bb,dithering_pars_fragment:zb,roughnessmap_fragment:kb,roughnessmap_pars_fragment:Hb,shadowmap_pars_fragment:Vb,shadowmap_pars_vertex:Gb,shadowmap_vertex:Wb,shadowmask_pars_fragment:Xb,skinbase_vertex:qb,skinning_pars_vertex:$b,skinning_vertex:Yb,skinnormal_vertex:Zb,specularmap_fragment:Kb,specularmap_pars_fragment:Jb,tonemapping_fragment:jb,tonemapping_pars_fragment:Qb,transmission_fragment:eM,transmission_pars_fragment:tM,uv_pars_fragment:nM,uv_pars_vertex:iM,uv_vertex:sM,worldpos_vertex:rM,background_vert:oM,background_frag:aM,backgroundCube_vert:lM,backgroundCube_frag:cM,cube_vert:uM,cube_frag:hM,depth_vert:fM,depth_frag:dM,distance_vert:pM,distance_frag:mM,equirect_vert:gM,equirect_frag:xM,linedashed_vert:yM,linedashed_frag:_M,meshbasic_vert:vM,meshbasic_frag:bM,meshlambert_vert:MM,meshlambert_frag:SM,meshmatcap_vert:EM,meshmatcap_frag:wM,meshnormal_vert:TM,meshnormal_frag:AM,meshphong_vert:RM,meshphong_frag:CM,meshphysical_vert:PM,meshphysical_frag:IM,meshtoon_vert:LM,meshtoon_frag:DM,points_vert:NM,points_frag:OM,shadow_vert:UM,shadow_frag:FM,sprite_vert:BM,sprite_frag:zM},Xe={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Hn={basic:{uniforms:Ln([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Ln([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Ln([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Ln([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Ln([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new je(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Ln([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Ln([Xe.points,Xe.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Ln([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Ln([Xe.common,Xe.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Ln([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Ln([Xe.sprite,Xe.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Ln([Xe.common,Xe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Ln([Xe.lights,Xe.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Hn.physical={uniforms:Ln([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};var mu={r:0,b:0,g:0},kM=new at,Dg=new ht;Dg.set(-1,0,0,0,1,0,0,0,1);function HM(n,e,t,i,s,r){let o=new je(0),a=s===!0?0:1,l,c,u=null,h=0,f=null;function d(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){let _=v.backgroundBlurriness>0;b=e.get(b,_)}return b}function p(v){let b=!1,_=d(v);_===null?m(o,a):_&&_.isColor&&(m(_,1),b=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(v,b){let _=d(b);_&&_.isCubeTexture?(c===void 0&&(c=new pt(new Fi(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:gr(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(kM.makeRotationFromEuler(b.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Dg),c.material.toneMapped=gt.getTransfer(_.colorSpace)!==Lt,(u!==_||h!==_.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=_,h=_.version,f=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new pt(new ii(2,2),new yn({name:"BackgroundMaterial",uniforms:gr(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=gt.getTransfer(_.colorSpace)!==Lt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||h!==_.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=_,h=_.version,f=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,b){v.getRGB(mu,Cf(n)),t.buffers.color.setClear(mu.r,mu.g,mu.b,b,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,b=1){o.set(v),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:x,dispose:g}}function VM(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(z,W,k,N,G){let j=!1,q=h(z,N,k,W);r!==q&&(r=q,c(r.object)),j=d(z,N,k,G),j&&p(z,N,k,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,_(z,W,k,N),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(z){return n.bindVertexArray(z)}function u(z){return n.deleteVertexArray(z)}function h(z,W,k,N){let G=N.wireframe===!0,j=i[W.id];j===void 0&&(j={},i[W.id]=j);let q=z.isInstancedMesh===!0?z.id:0,ye=j[q];ye===void 0&&(ye={},j[q]=ye);let Y=ye[k.id];Y===void 0&&(Y={},ye[k.id]=Y);let V=Y[G];return V===void 0&&(V=f(l()),Y[G]=V),V}function f(z){let W=[],k=[],N=[];for(let G=0;G<t;G++)W[G]=0,k[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:k,attributeDivisors:N,object:z,attributes:{},index:null}}function d(z,W,k,N){let G=r.attributes,j=W.attributes,q=0,ye=k.getAttributes();for(let Y in ye)if(ye[Y].location>=0){let Q=G[Y],be=j[Y];if(be===void 0&&(Y==="instanceMatrix"&&z.instanceMatrix&&(be=z.instanceMatrix),Y==="instanceColor"&&z.instanceColor&&(be=z.instanceColor)),Q===void 0||Q.attribute!==be||be&&Q.data!==be.data)return!0;q++}return r.attributesNum!==q||r.index!==N}function p(z,W,k,N){let G={},j=W.attributes,q=0,ye=k.getAttributes();for(let Y in ye)if(ye[Y].location>=0){let Q=j[Y];Q===void 0&&(Y==="instanceMatrix"&&z.instanceMatrix&&(Q=z.instanceMatrix),Y==="instanceColor"&&z.instanceColor&&(Q=z.instanceColor));let be={};be.attribute=Q,Q&&Q.data&&(be.data=Q.data),G[Y]=be,q++}r.attributes=G,r.attributesNum=q,r.index=N}function x(){let z=r.newAttributes;for(let W=0,k=z.length;W<k;W++)z[W]=0}function m(z){g(z,0)}function g(z,W){let k=r.newAttributes,N=r.enabledAttributes,G=r.attributeDivisors;k[z]=1,N[z]===0&&(n.enableVertexAttribArray(z),N[z]=1),G[z]!==W&&(n.vertexAttribDivisor(z,W),G[z]=W)}function v(){let z=r.newAttributes,W=r.enabledAttributes;for(let k=0,N=W.length;k<N;k++)W[k]!==z[k]&&(n.disableVertexAttribArray(k),W[k]=0)}function b(z,W,k,N,G,j,q){q===!0?n.vertexAttribIPointer(z,W,k,G,j):n.vertexAttribPointer(z,W,k,N,G,j)}function _(z,W,k,N){x();let G=N.attributes,j=k.getAttributes(),q=W.defaultAttributeValues;for(let ye in j){let Y=j[ye];if(Y.location>=0){let V=G[ye];if(V===void 0&&(ye==="instanceMatrix"&&z.instanceMatrix&&(V=z.instanceMatrix),ye==="instanceColor"&&z.instanceColor&&(V=z.instanceColor)),V!==void 0){let Q=V.normalized,be=V.itemSize,Re=e.get(V);if(Re===void 0)continue;let K=Re.buffer,ae=Re.type,B=Re.bytesPerElement,ee=ae===n.INT||ae===n.UNSIGNED_INT||V.gpuType===Ic;if(V.isInterleavedBufferAttribute){let pe=V.data,Se=pe.isInterleavedBuffer===!0?pe.stride:pe.itemSize,$e=V.offset;if(pe.isInstancedInterleavedBuffer||pe.isInstancedBufferAttribute){for(let Oe=0;Oe<Y.locationSize;Oe++)g(Y.location+Oe,pe.meshPerAttribute);z.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Oe=0;Oe<Y.locationSize;Oe++)m(Y.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,K);for(let Oe=0;Oe<Y.locationSize;Oe++)b(Y.location+Oe,be/Y.locationSize,ae,Q,Se*B,($e+be/Y.locationSize*Oe)*B,ee)}else{if(V.isInstancedBufferAttribute){for(let pe=0;pe<Y.locationSize;pe++)g(Y.location+pe,V.meshPerAttribute);z.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let pe=0;pe<Y.locationSize;pe++)m(Y.location+pe);n.bindBuffer(n.ARRAY_BUFFER,K);for(let pe=0;pe<Y.locationSize;pe++)b(Y.location+pe,be/Y.locationSize,ae,Q,be*B,be/Y.locationSize*pe*B,ee)}}else if(q!==void 0){let Q=q[ye];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(Y.location,Q);break;case 3:n.vertexAttrib3fv(Y.location,Q);break;case 4:n.vertexAttrib4fv(Y.location,Q);break;default:n.vertexAttrib1fv(Y.location,Q)}}}}v()}function w(){D();for(let z in i){let W=i[z];for(let k in W){let N=W[k];for(let G in N){let j=N[G];for(let q in j)u(j[q].object),delete j[q];delete N[G]}}delete i[z]}}function T(z){if(i[z.id]===void 0)return;let W=i[z.id];for(let k in W){let N=W[k];for(let G in N){let j=N[G];for(let q in j)u(j[q].object),delete j[q];delete N[G]}}delete i[z.id]}function y(z){for(let W in i){let k=i[W];for(let N in k){let G=k[N];if(G[z.id]===void 0)continue;let j=G[z.id];for(let q in j)u(j[q].object),delete j[q];delete G[z.id]}}}function E(z){for(let W in i){let k=i[W],N=z.isInstancedMesh===!0?z.id:0,G=k[N];if(G!==void 0){for(let j in G){let q=G[j];for(let ye in q)u(q[ye].object),delete q[ye];delete G[j]}delete k[N],Object.keys(k).length===0&&delete i[W]}}}function D(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:I,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:E,releaseStatesOfProgram:y,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function GM(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];t.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function WM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(y){return!(y!==bn&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){let E=y===qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==In&&y!==kn&&!E&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(nt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&nt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:_,maxSamples:w,samples:T}}function XM(n){let e=this,t=null,i=0,s=!1,r=!1,o=new gn,a=new ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let p=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,g=n.get(h);if(!s||p===null||p.length===0||r&&!m)r?u(null):c();else{let v=r?0:i,b=v*4,_=g.clippingState||null;l.value=_,_=u(p,f,b,d);for(let w=0;w!==b;++w)_[w]=t[w];g.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,p){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=d+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let b=0,_=d;b!==x;++b,_+=4)o.copy(h[b]).applyMatrix4(v,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var Wa=class extends tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new fa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fi(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:si});r.uniforms.tEquirect.value=t;let o=new pt(s,r),a=t.minFilter;return t.minFilter===oi&&(t.minFilter=Wt),new po(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},hg=256,qM=3,$M=20,Ng=256,Og=16,YM=3,ZM=new P,KM=new je,So=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new po(1,10,null),this._boxMesh=new pt(new Fi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=ZM}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let h=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(KM));let m=new po(i,s,u);return m.position.copy(a),m.update(l,e),l.autoClear=h,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=p,e.background=x,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(hg,Tf(e))}_fromTexture(e,t){e.mapping===dr||e.mapping===yo?this._setSize(e.image.length===0?hg:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=fg(e,!1,!1),i=Math.log2(e)-qM;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=fg(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===dr||e.mapping===yo?(this._cubemapMaterial===null&&(this._cubemapMaterial=pg()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=dg()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=JM(),this._integrationMaterial=jM());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Og);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-YM)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(Ng*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=QM());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function fg(n,e,t){return new Wa(n,{minFilter:oi,generateMipmaps:e,type:qn,colorSpace:Bn,depthBuffer:t})}function Xa(n,e,t){return new yn({name:n,uniforms:e,vertexShader:mt.cube_vert,fragmentShader:t,side:vn,blending:si,depthTest:!1,depthWrite:!1})}function JM(){return Xa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ng}u

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
	`)}function jM(){return Xa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Og}},`

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
	`)}function QM(){return Xa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${$M}
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
	`)}function dg(){return Xa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function pg(){return Xa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function eS(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Rc||d===Cc)if(e.has(f)){let p=e.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let x=new Wa(p.height);return x.fromEquirectangularTexture(n,f),e.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,p=d===Rc||d===Cc,x=d===dr||d===yo;if(p||x){let m=t.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return i===null&&(i=new So(n)),m=p?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let v=f.image;return p&&v&&v.height>0||x&&v&&l(v)?(i===null&&(i=new So(n)),m=p?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,d){return d===Rc?f.mapping=dr:d===Cc&&(f.mapping=yo),f}function l(f){let d=0,p=6;for(let x=0;x<p;x++)f[x]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function tS(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&or("WebGLRenderer: "+i+" extension not supported."),s}}}function nS(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let x=r.get(p);x&&(e.remove(x),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function u(p){let x=p.attributes;for(let m in x)e.update(x[m],n.ARRAY_BUFFER)}function h(p){let x=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let v=x!==null?x.array.length:m.array.length/3-1,b=m.count>=65535?ra:sa,_=new b(Math.ceil(v/3)*6,1),w=_.array;if(x!==null){let y=x.array;g=x.version;for(let E=0,D=0;E<v;E+=3){let I=y[E+0],z=y[E+1],W=y[E+2];w[D++]=I,w[D++]=z,w[D++]=z,w[D++]=W,w[D++]=W,w[D++]=I}}else{g=m.version;for(let y=0,E=0;y<v;y+=3){let D=y+0,I=y+1,z=y+2;w[E++]=D,w[E++]=I,w[E++]=I,w[E++]=z,w[E++]=z,w[E++]=D}}_.version=g;let T=r.get(p);T&&e.remove(T),r.set(p,_)}function f(p){let x=r.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&h(p)}else h(p);return r.get(p)}function d(){for(let p in s){let x=s[p].deref();x!==void 0&&l(x)}}return{get:c,update:u,getWireframeAttribute:f,dispose:d}}function iS(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){n.drawElements(i,f,r,h*o),t.update(f,i,1)}function c(h,f,d){d!==0&&(n.drawElementsInstanced(i,f,r,h*o,d),t.update(f,i,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,h,0,d);let x=0;for(let m=0;m<d;m++)x+=f[m];t.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function sS(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:ct("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function rS(n,e,t){let i=new WeakMap,s=new Mt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==h){let D=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",D)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],b=0;d===!0&&(b=1),p===!0&&(b=2),x===!0&&(b=3);let _=a.attributes.position.count*b,w=1;_>e.maxTextureSize&&(w=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let T=new Float32Array(_*w*4*h),y=new ia(T,_,w,h);y.type=kn,y.needsUpdate=!0;let E=b*4;for(let I=0;I<h;I++){let z=m[I],W=g[I],k=v[I],N=_*w*4*I;for(let G=0;G<z.count;G++){let j=G*E;d===!0&&(s.fromBufferAttribute(z,G),T[N+j+0]=s.x,T[N+j+1]=s.y,T[N+j+2]=s.z,T[N+j+3]=0),p===!0&&(s.fromBufferAttribute(W,G),T[N+j+4]=s.x,T[N+j+5]=s.y,T[N+j+6]=s.z,T[N+j+7]=0),x===!0&&(s.fromBufferAttribute(k,G),T[N+j+8]=s.x,T[N+j+9]=s.y,T[N+j+10]=s.z,T[N+j+11]=k.itemSize===4?s.w:1)}}f={count:h,texture:y,size:new Ye(_,w)},i.set(a,f),a.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function oS(n,e,t,i,s){let r=new WeakMap;function o(c){let u=s.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var aS={[of]:"LINEAR_TONE_MAPPING",[af]:"REINHARD_TONE_MAPPING",[lf]:"CINEON_TONE_MAPPING",[xo]:"ACES_FILMIC_TONE_MAPPING",[uf]:"AGX_TONE_MAPPING",[hf]:"NEUTRAL_TONE_MAPPING",[cf]:"CUSTOM_TONE_MAPPING"};function lS(n,e,t,i,s,r){let o=new tn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new Ot;u.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new kt([0,2,0,0,2,0],2));let h=new mc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new pt(u,h),d=new yi(-1,1,1,-1,0,1),p=null,x=null,m=!1,g,v=null,b=[],_=!1;this.setSize=function(w,T){o.setSize(w,T),a!==null&&a.setSize(w,T),l!==null&&l.setSize(w,T);for(let y=0;y<b.length;y++){let E=b[y];E.setSize&&E.setSize(w,T)}},this.setEffects=function(w){b=w,_=b.length>0&&b[0].isRenderPass===!0;let T=o.width,y=o.height;b.length>0&&a===null&&(a=new tn(T,y,{type:qn,depthBuffer:!1,stencilBuffer:!1}),l=new tn(T,y,{type:qn,depthBuffer:!1,stencilBuffer:!1}));let E=s===!0&&b.some(D=>D.needsDepthTexture===!0);E!==(o.depthTexture!==null)&&(E===!0&&c===null&&(c=new gs(T,y),r===!0&&(c.format=Ms,c.type=mr)),o.dispose(),o.depthTexture=E?c:null,o.resolveDepthBuffer=E,o.storeMultisampledDepthBuffer=E);for(let D=0;D<b.length;D++){let I=b[D];I.setSize&&I.setSize(T,y),E&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(w,T){if(m||w.toneMapping===ri&&b.length===0)return!1;if(v=T,T!==null){let y=T.width,E=T.height;(o.width!==y||o.height!==E)&&this.setSize(y,E)}return _===!1&&w.setRenderTarget(o),g=w.toneMapping,w.toneMapping=ri,!0},this.hasRenderPass=function(){return _},this.end=function(w,T){w.toneMapping=g,m=!0;let y=o,E=a;for(let D=0;D<b.length;D++){let I=b[D];I.enabled!==!1&&(I.render(w,E,y,T),I.needsSwap!==!1&&(y=E,E=E===a?l:a))}if(p!==w.outputColorSpace||x!==w.toneMapping){p=w.outputColorSpace,x=w.toneMapping,h.defines={},gt.getTransfer(p)===Lt&&(h.defines.SRGB_TRANSFER="");let D=aS[x];D&&(h.defines[D]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=y.texture,w.setRenderTarget(v),w.render(f,d),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}var Ug=new an,Fg=new gs(1,1),Bg=new da(1),zg=new ia,kg=new hc,Hg=new fa,mg=[],gg=[],xg=new Float32Array(16),yg=new Float32Array(9),_g=new Float32Array(4);function Eo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=mg[s];if(r===void 0&&(r=new Float32Array(s),mg[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function cn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function un(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function yu(n,e){let t=gg[e];t===void 0&&(t=new Int32Array(e),gg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function cS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function uS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;n.uniform2fv(this.addr,e),un(t,e)}}function hS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;n.uniform3fv(this.addr,e),un(t,e)}}function fS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;n.uniform4fv(this.addr,e),un(t,e)}}function dS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(cn(t,i))return;_g.set(i),n.uniformMatrix2fv(this.addr,!1,_g),un(t,i)}}function pS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(cn(t,i))return;yg.set(i),n.uniformMatrix3fv(this.addr,!1,yg),un(t,i)}}function mS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(cn(t,i))return;xg.set(i),n.uniformMatrix4fv(this.addr,!1,xg),un(t,i)}}function gS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;n.uniform2iv(this.addr,e),un(t,e)}}function yS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;n.uniform3iv(this.addr,e),un(t,e)}}function _S(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;n.uniform4iv(this.addr,e),un(t,e)}}function vS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function bS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;n.uniform2uiv(this.addr,e),un(t,e)}}function MS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;n.uniform3uiv(this.addr,e),un(t,e)}}function SS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;n.uniform4uiv(this.addr,e),un(t,e)}}function _u(n){return n.version===0&&(n.compareFunction=Mf,n.needsUpdate=!0),n}function ES(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=_u(Fg):r=Ug,t.setTexture2D(e||r,s)}function wS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||kg,s)}function TS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=_u(Bg):r=Hg,t.setTextureCube(e||r,s)}function AS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||zg,s)}function RS(n){switch(n){case 5126:return cS;case 35664:return uS;case 35665:return hS;case 35666:return fS;case 35674:return dS;case 35675:return pS;case 35676:return mS;case 5124:case 35670:return gS;case 35667:case 35671:return xS;case 35668:case 35672:return yS;case 35669:case 35673:return _S;case 5125:return vS;case 36294:return bS;case 36295:return MS;case 36296:return SS;case 35678:case 36198:case 36298:case 36306:case 35682:return ES;case 35679:case 36299:case 36307:return wS;case 35680:case 36300:case 36308:case 36293:return TS;case 36289:case 36303:case 36311:case 36292:return AS}}function CS(n,e){n.uniform1fv(this.addr,e)}function PS(n,e){let t=Eo(e,this.size,2);n.uniform2fv(this.addr,t)}function IS(n,e){let t=Eo(e,this.size,3);n.uniform3fv(this.addr,t)}function LS(n,e){let t=Eo(e,this.size,4);n.uniform4fv(this.addr,t)}function DS(n,e){let t=Eo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function NS(n,e){let t=Eo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function OS(n,e){let t=Eo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function US(n,e){n.uniform1iv(this.addr,e)}function FS(n,e){n.uniform2iv(this.addr,e)}function BS(n,e){n.uniform3iv(this.addr,e)}function zS(n,e){n.uniform4iv(this.addr,e)}function kS(n,e){n.uniform1uiv(this.addr,e)}function HS(n,e){n.uniform2uiv(this.addr,e)}function VS(n,e){n.uniform3uiv(this.addr,e)}function GS(n,e){n.uniform4uiv(this.addr,e)}function WS(n,e,t){let i=this.cache,s=e.length,r=yu(t,s);cn(i,r)||(n.uniform1iv(this.addr,r),un(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=_u(Fg):o=Ug;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function XS(n,e,t){let i=this.cache,s=e.length,r=yu(t,s);cn(i,r)||(n.uniform1iv(this.addr,r),un(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||kg,r[o])}function qS(n,e,t){let i=this.cache,s=e.length,r=yu(t,s);cn(i,r)||(n.uniform1iv(this.addr,r),un(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=_u(Bg):o=Hg;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function $S(n,e,t){let i=this.cache,s=e.length,r=yu(t,s);cn(i,r)||(n.uniform1iv(this.addr,r),un(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||zg,r[o])}function YS(n){switch(n){case 5126:return CS;case 35664:return PS;case 35665:return IS;case 35666:return LS;case 35674:return DS;case 35675:return NS;case 35676:return OS;case 5124:case 35670:return US;case 35667:case 35671:return FS;case 35668:case 35672:return BS;case 35669:case 35673:return zS;case 5125:return kS;case 36294:return HS;case 36295:return VS;case 36296:return GS;case 35678:case 36198:case 36298:case 36306:case 35682:return WS;case 35679:case 36299:case 36307:return XS;case 35680:case 36300:case 36308:case 36293:return qS;case 36289:case 36303:case 36311:case 36292:return $S}}var Of=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=RS(t.type)}},Uf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=YS(t.type)}},Ff=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Df=/(\w+)(\])?(\[|\.)?/g;function vg(n,e){n.seq.push(e),n.map[e.id]=e}function ZS(n,e,t){let i=n.name,s=i.length;for(Df.lastIndex=0;;){let r=Df.exec(i),o=Df.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){vg(t,c===void 0?new Of(a,n,e):new Uf(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Ff(a),vg(t,h)),t=h}}}var Mo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);ZS(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function bg(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var KS=37297,JS=0;function jS(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Mg=new ht;function QS(n){gt._getMatrix(Mg,gt.workingColorSpace,n);let e=`mat3( ${Mg.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(n)){case ta:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Sg(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+jS(n.getShaderSource(e),a)}else return r}function eE(n,e){let t=QS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var tE={[of]:"Linear",[af]:"Reinhard",[lf]:"Cineon",[xo]:"ACESFilmic",[uf]:"AgX",[hf]:"Neutral",[cf]:"Custom"};function nE(n,e){let t=tE[e];return t===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var gu=new P;function iE(){gt.getLuminanceCoefficients(gu);let n=gu.x.toFixed(4),e=gu.y.toFixed(4),t=gu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ga).join(`
`)}function rE(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function oE(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ga(n){return n!==""}function Eg(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function wg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var aE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bf(n){return n.replace(aE,lE)}function lE(n,e){let t=mt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Bf(t)}var cE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tg(n){return n.replace(cE,uE)}function uE(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ag(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var hE={[Ca]:"SHADOWMAP_TYPE_PCF",[mo]:"SHADOWMAP_TYPE_VSM"};function fE(n){return hE[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var dE={[yo]:"ENVMAP_MODE_REFRACTION"};function pE(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":dE[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var mE={[Ac]:"ENVMAP_BLENDING_MULTIPLY",[Xm]:"ENVMAP_BLENDING_MIX",[qm]:"ENVMAP_BLENDING_ADD"};function gE(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":mE[n.combine]||"ENVMAP_BLENDING_NONE"}function xE(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=fE(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=pE(t),h=gE(t),f=sE(t),d=rE(r),p=s.createProgram(),x,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Ga).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Ga).join(`
`),m.length>0&&(m+=`
`)):(x=[Ag(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ga).join(`
`),m=[Ag(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?mt.tonemapping_pars_fragment:"",t.toneMapping!==ri?nE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,eE("linearToOutputTexel",t.outputColorSpace),iE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ga).join(`
`)),o=Bf(o),o=Eg(o,t),o=wg(o,t),a=Bf(a),a=Eg(a,t),a=wg(a,t),o=Tg(o),a=Tg(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===Ef?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ef?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=g+x+o,b=g+m+a,_=bg(s,s.VERTEX_SHADER,v),w=bg(s,s.FRAGMENT_SHADER,b);s.attachShader(p,_),s.attachShader(p,w),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function T(I){if(n.debug.checkShaderErrors){let z=s.getProgramInfoLog(p)||"",W=s.getShaderInfoLog(_)||"",k=s.getShaderInfoLog(w)||"",N=z.trim(),G=W.trim(),j=k.trim(),q=!0,ye=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,_,w);else{let Y=Sg(s,_,"vertex"),V=Sg(s,w,"fragment");ct("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+Y+`
`+V)}else N!==""?nt("WebGLProgram: Program Info Log:",N):(G===""||j==="")&&(ye=!1);ye&&(I.diagnostics={runnable:q,programLog:N,vertexShader:{log:G,prefix:x},fragmentShader:{log:j,prefix:m}})}s.deleteShader(_),s.deleteShader(w),y=new Mo(s,p),E=oE(s,p)}let y;this.getUniforms=function(){return y===void 0&&T(this),y};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(p,KS)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=JS++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=_,this.fragmentShader=w,this}var yE=0,zf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new kf(e),t.set(e,i)),i}},kf=class{constructor(e){this.id=yE++,this.code=e,this.usedTimes=0}};function _E(n){return n===$s||n===Fa||n===Ba}function vE(n,e,t,i,s,r){let o=new ro,a=new zf,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,E,D,I,z,W){let k=I.fog,N=z.geometry,G=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,j=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,q=e.get(y.envMap||G,j),ye=f[y.type],Y=i.precision;y.precision!==null&&(Y=i.getMaxPrecision(y.precision),Y!==y.precision&&nt("WebGLProgram.getParameters:",y.precision,"not supported, using",Y,"instead."));let V=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Q=V!==void 0?V.length:0,be=0;N.morphAttributes.position!==void 0&&(be=1),N.morphAttributes.normal!==void 0&&(be=2),N.morphAttributes.color!==void 0&&(be=3);let Re,K,ae,B;if(ye){let Ce=Hn[ye];Re=Ce.vertexShader,K=Ce.fragmentShader}else{Re=y.vertexShader,K=y.fragmentShader;let Ce=a.getVertexShaderStage(y),ut=a.getFragmentShaderStage(y);a.update(y,Ce,ut),ae=Ce.id,B=ut.id}let ee=n.getRenderTarget(),pe=n.state.buffers.depth.getReversed(),Se=z.isInstancedMesh===!0,$e=z.isBatchedMesh===!0,Oe=!!y.map,ze=!!y.matcap,oe=!!q,we=oe&&q.isPMREMTexture===!0,ke=!!y.aoMap,He=!!y.lightMap,Ze=!!y.bumpMap&&y.wireframe===!1,De=!!y.normalMap,rt=!!y.displacementMap,ie=!!y.emissiveMap,Ue=!!y.metalnessMap,Ke=!!y.roughnessMap,xe=y.anisotropy>0,A=y.clearcoat>0,J=y.diffuseRoughness>0,ne=y.dispersion>0,Ee=y.retroreflectivity>0,$=y.iridescence>0,me=y.sheen>0,Me=y.transmission>0,Te=xe&&!!y.anisotropyMap,C=A&&!!y.clearcoatMap,S=A&&!!y.clearcoatNormalMap,X=A&&!!y.clearcoatRoughnessMap,ve=J&&!!y.diffuseRoughnessMap,de=$&&!!y.iridescenceMap,he=$&&!!y.iridescenceThicknessMap,_e=me&&!!y.sheenColorMap,re=me&&!!y.sheenRoughnessMap,ce=!!y.specularMap,Ie=!!y.specularColorMap,U=!!y.specularIntensityMap,ge=Me&&!!y.transmissionMap,ue=Me&&!!y.thicknessMap,Ne=!!y.gradientMap,Pe=!!y.alphaMap,Le=y.alphaTest>0,Fe=!!y.alphaHash,it=!!y.extensions,Z=ri;y.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Z=n.toneMapping);let Ae=we?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,st={shaderID:ye,shaderType:y.type,shaderName:y.name,vertexShader:Re,fragmentShader:K,defines:y.defines,customVertexShaderID:ae,customFragmentShaderID:B,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:Y,batching:$e,batchingColor:$e&&z._colorsTexture!==null,instancing:Se,instancingColor:Se&&z.instanceColor!==null,instancingMorph:Se&&z.morphTexture!==null,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:gt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Oe,matcap:ze,envMap:oe,envMapMode:oe&&q.mapping,envMapPMREM:we,envMapMaxLod:we?Ae.length-1:null,envMapSize:we?Ae[0].width:null,aoMap:ke,lightMap:He,bumpMap:Ze,normalMap:De,displacementMap:rt,emissiveMap:ie,normalMapObjectSpace:De&&y.normalMapType===Km,normalMapTangentSpace:De&&y.normalMapType===ka,packedNormalMap:De&&y.normalMapType===ka&&_E(y.normalMap.format),metalnessMap:Ue,roughnessMap:Ke,anisotropy:xe,anisotropyMap:Te,clearcoat:A,clearcoatMap:C,clearcoatNormalMap:S,clearcoatRoughnessMap:X,diffuseRoughness:J,diffuseRoughnessMap:ve,dispersion:ne,retroreflection:Ee,iridescence:$,iridescenceMap:de,iridescenceThicknessMap:he,sheen:me,sheenColorMap:_e,sheenRoughnessMap:re,specularMap:ce,specularColorMap:Ie,specularIntensityMap:U,transmission:Me,transmissionMap:ge,thicknessMap:ue,gradientMap:Ne,opaque:y.transparent===!1&&y.blending===ki&&y.alphaToCoverage===!1,alphaMap:Pe,alphaTest:Le,alphaHash:Fe,combine:y.combine,mapUv:Oe&&d(y.map.channel),aoMapUv:ke&&d(y.aoMap.channel),lightMapUv:He&&d(y.lightMap.channel),bumpMapUv:Ze&&d(y.bumpMap.channel),normalMapUv:De&&d(y.normalMap.channel),displacementMapUv:rt&&d(y.displacementMap.channel),emissiveMapUv:ie&&d(y.emissiveMap.channel),metalnessMapUv:Ue&&d(y.metalnessMap.channel),roughnessMapUv:Ke&&d(y.roughnessMap.channel),anisotropyMapUv:Te&&d(y.anisotropyMap.channel),clearcoatMapUv:C&&d(y.clearcoatMap.channel),clearcoatNormalMapUv:S&&d(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&d(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ve&&d(y.diffuseRoughnessMap.channel),iridescenceMapUv:de&&d(y.iridescenceMap.channel),iridescenceThicknessMapUv:he&&d(y.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&d(y.sheenColorMap.channel),sheenRoughnessMapUv:re&&d(y.sheenRoughnessMap.channel),specularMapUv:ce&&d(y.specularMap.channel),specularColorMapUv:Ie&&d(y.specularColorMap.channel),specularIntensityMapUv:U&&d(y.specularIntensityMap.channel),transmissionMapUv:ge&&d(y.transmissionMap.channel),thicknessMapUv:ue&&d(y.thicknessMap.channel),alphaMapUv:Pe&&d(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(De||xe),vertexNormals:!!N.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!N.attributes.uv&&(Oe||Pe),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||N.attributes.normal===void 0&&De===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:pe,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:be,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:W.filter(Ce=>Ce.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Z,decodeVideoTexture:Oe&&y.map.isVideoTexture===!0&&gt.getTransfer(y.map.colorSpace)===Lt,decodeVideoTextureEmissive:ie&&y.emissiveMap.isVideoTexture===!0&&gt.getTransfer(y.emissiveMap.colorSpace)===Lt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Dt,flipSided:y.side===vn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:it&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&y.extensions.multiDraw===!0||$e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return st.vertexUv1s=l.has(1),st.vertexUv2s=l.has(2),st.vertexUv3s=l.has(3),l.clear(),st}function x(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let D in y.defines)E.push(D),E.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(m(E,y),g(E,y),E.push(n.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function m(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapPMREM),y.push(E.envMapMaxLod),y.push(E.envMapSize),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.diffuseRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.numSunLights),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numSunLightShadows),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.numLightProbeGrids),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function g(y,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.diffuseRoughness&&o.enable(25),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function v(y){let E=f[y.type],D;if(E){let I=Hn[E];D=Ha.clone(I.uniforms)}else D=y.uniforms;return D}function b(y,E){let D=u.get(E);return D!==void 0?++D.usedTimes:(D=new xE(n,E,y,s),c.push(D),u.set(E,D)),D}function _(y){if(--y.usedTimes===0){let E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function w(y){a.remove(y)}function T(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:v,acquireProgram:b,releaseProgram:_,releaseShaderCache:w,programs:c,dispose:T}}function bE(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function ME(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Rg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Cg(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,x,m,g){let v=n[e];return v===void 0?(v={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:g},n[e]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=p,v.materialVariant=o(f),v.groupOrder=x,v.renderOrder=f.renderOrder,v.z=m,v.group=g),e++,v}function l(f,d,p,x,m,g,v){v.reversedDepth===!0&&(m=-m);let b=a(f,d,p,x,m,g);p.transmission>0?i.push(b):p.transparent===!0?s.push(b):t.push(b)}function c(f,d,p,x,m,g){let v=a(f,d,p,x,m,g);p.transmission>0?i.unshift(v):p.transparent===!0?s.unshift(v):t.unshift(v)}function u(f,d){t.length>1&&t.sort(f||ME),i.length>1&&i.sort(d||Rg),s.length>1&&s.sort(d||Rg)}function h(){for(let f=e,d=n.length;f<d;f++){let p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function SE(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Cg,n.set(i,[o])):s>=r.length?(o=new Cg,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function EE(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new je};break;case"SpotLight":t={position:new P,direction:new P,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function wE(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var TE=0;function AE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function RE(n){let e=new EE,t=wE(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,r=new at,o=new at;function a(c){let u=0,h=0,f=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let d=0,p=0,x=0,m=0,g=0,v=0,b=0,_=0,w=0,T=0,y=0,E=0,D=0,I=0;c.sort(AE);for(let W=0,k=c.length;W<k;W++){let N=c[W],G=N.color,j=N.intensity,q=N.distance,ye=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===$s?ye=N.shadow.map.texture:ye=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=G.r*j,h+=G.g*j,f+=G.b*j;else if(N.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(N.sh.coefficients[Y],j);I++}else if(N.isSunLight){let Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let V=N.shadow,Q=t.get(N);Q.shadowIntensity=V.intensity,Q.shadowBias=V.bias,Q.shadowNormalBias=V.normalBias,Q.shadowRadius=V.radius,Q.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),i.sunShadow[p]=Q,i.sunShadowMap[p]=ye;let be=V.getViewportCount();for(let Re=0;Re<be;Re++)i.sunShadowMatrix[x+Re]=V.getMatrix(Re),i.sunShadowCascade[x+Re]=V._cascadeData[Re];x+=be,p++}i.sun[d]=Y,d++}else if(N.isDirectionalLight){let Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let V=N.shadow,Q=t.get(N);Q.shadowIntensity=V.intensity,Q.shadowBias=V.bias,Q.shadowNormalBias=V.normalBias,Q.shadowRadius=V.radius,Q.shadowMapSize=V.mapSize,i.directionalShadow[m]=Q,i.directionalShadowMap[m]=ye,i.directionalShadowMatrix[m]=N.shadow.matrix,w++}i.directional[m]=Y,m++}else if(N.isSpotLight){let Y=e.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(G).multiplyScalar(j),Y.distance=q,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,i.spot[v]=Y;let V=N.shadow;if(N.map&&(i.spotLightMap[E]=N.map,E++,V.updateMatrices(N),N.castShadow&&D++),i.spotLightMatrix[v]=V.matrix,N.castShadow){let Q=t.get(N);Q.shadowIntensity=V.intensity,Q.shadowBias=V.bias,Q.shadowNormalBias=V.normalBias,Q.shadowRadius=V.radius,Q.shadowMapSize=V.mapSize,i.spotShadow[v]=Q,i.spotShadowMap[v]=ye,y++}v++}else if(N.isRectAreaLight){let Y=e.get(N);Y.color.copy(G).multiplyScalar(j),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),i.rectArea[b]=Y,b++}else if(N.isPointLight){let Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){let V=N.shadow,Q=t.get(N);Q.shadowIntensity=V.intensity,Q.shadowBias=V.bias,Q.shadowNormalBias=V.normalBias,Q.shadowRadius=V.radius,Q.shadowMapSize=V.mapSize,Q.shadowCameraNear=V.camera.near,Q.shadowCameraFar=V.camera.far,i.pointShadow[g]=Q,i.pointShadowMap[g]=ye,i.pointShadowMatrix[g]=N.shadow.matrix,T++}i.point[g]=Y,g++}else if(N.isHemisphereLight){let Y=e.get(N);Y.skyColor.copy(N.color).multiplyScalar(j),Y.groundColor.copy(N.groundColor).multiplyScalar(j),i.hemi[_]=Y,_++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Xe.LTC_FLOAT_1,i.rectAreaLTC2=Xe.LTC_FLOAT_2):(i.rectAreaLTC1=Xe.LTC_HALF_1,i.rectAreaLTC2=Xe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let z=i.hash;(z.sunLength!==d||z.directionalLength!==m||z.pointLength!==g||z.spotLength!==v||z.rectAreaLength!==b||z.hemiLength!==_||z.numSunShadows!==p||z.numDirectionalShadows!==w||z.numPointShadows!==T||z.numSpotShadows!==y||z.numSpotMaps!==E||z.numLightProbes!==I)&&(i.sun.length=d,i.directional.length=m,i.spot.length=v,i.rectArea.length=b,i.point.length=g,i.hemi.length=_,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=y,i.spotShadowMap.length=y,i.spotLightMatrix.length=y+E-D,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=I,z.sunLength=d,z.directionalLength=m,z.pointLength=g,z.spotLength=v,z.rectAreaLength=b,z.hemiLength=_,z.numSunShadows=p,z.numDirectionalShadows=w,z.numPointShadows=T,z.numSpotShadows=y,z.numSpotMaps=E,z.numLightProbes=I,i.version=TE++)}function l(c,u){let h=0,f=0,d=0,p=0,x=0,m=0,g=u.matrixWorldInverse;for(let v=0,b=c.length;v<b;v++){let _=c[v];if(_.isSunLight){let w=i.sun[h];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(g),h++}else if(_.isDirectionalLight){let w=i.directional[f];w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),f++}else if(_.isSpotLight){let w=i.spot[p];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),p++}else if(_.isRectAreaLight){let w=i.rectArea[x];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let w=i.point[d];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){let w=i.hemi[m];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function Pg(n){let e=new RE(n),t=[],i=[],s=[];function r(h){u.camera=h,t.length=0,i.length=0,s.length=0}function o(h){h.isLightProbeGrid?s.push(h):t.push(h)}function a(h){i.push(h)}function l(){e.setup(t),s.sort((h,f)=>h.priority-f.priority||h.id-f.id)}function c(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function CE(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Pg(n),e.set(s,[a])):r>=o.length?(a=new Pg(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var PE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IE=`uniform sampler2D shadow_pass;
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
}`,LE=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],DE=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Ig=new at,Va=new P,Nf=new P;function NE(n,e,t){let i=new zs,s=new Ye,r=new Ye,o=new Mt,a=new gc,l=new xc,c={},u=t.maxTextureSize,h={[Kn]:vn,[vn]:Kn,[Dt]:Dt},f=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:PE,fragmentShader:IE}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Ot;p.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new pt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ca;let g=this.type;this.render=function(T,y,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Pm&&(nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ca);let D=n.getRenderTarget(),I=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),W=n.state;W.setBlending(si),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let k=g!==this.type;k&&y.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(G=>G.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,G=T.length;N<G;N++){let j=T[N],q=j.shadow;if(q===void 0){nt("WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let ye=q.getFrameExtents();s.multiply(ye),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ye.x),s.x=r.x*ye.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ye.y),s.y=r.y*ye.y,q.mapSize.y=r.y));let Y=n.state.buffers.depth.getReversed();if(q.camera._reversedDepth=Y,q.map===null||k===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===mo){if(j.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new tn(s.x,s.y,{format:$s,type:qn,minFilter:Wt,magFilter:Wt,generateMipmaps:!1}),q.map.texture.name=j.name+".shadowMap",q.map.depthTexture=new gs(s.x,s.y,kn),q.map.depthTexture.name=j.name+".shadowMapDepth",q.map.depthTexture.format=fs,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Gt,q.map.depthTexture.magFilter=Gt}else j.isPointLight?(q.map=new Wa(s.x),q.map.depthTexture=new da(s.x,bi)):(q.map=new tn(s.x,s.y),q.map.depthTexture=new gs(s.x,s.y,bi)),q.map.depthTexture.name=j.name+".shadowMap",q.map.depthTexture.format=fs,this.type===Ca?(q.map.depthTexture.compareFunction=Y?bf:vf,q.map.depthTexture.minFilter=Wt,q.map.depthTexture.magFilter=Wt):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Gt,q.map.depthTexture.magFilter=Gt);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let V=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();j.isPointLight!==!0&&q.updateMatrices(j,E);let Q=(q.camera.layers.mask&4294967294)!==0?q.camera.layers:E.layers;for(let be=0;be<V;be++){let Re=q.getCamera(be);if(j.isPointLight){let K=q.camera,ae=q.matrix,B=j.distance||K.far;B!==K.far&&(K.far=B,K.updateProjectionMatrix()),Va.setFromMatrixPosition(j.matrixWorld),K.position.copy(Va),Nf.copy(K.position),Nf.add(LE[be]),K.up.copy(DE[be]),K.lookAt(Nf),K.updateMatrixWorld(),ae.makeTranslation(-Va.x,-Va.y,-Va.z),Ig.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Ig,K.coordinateSystem,K.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)n.setRenderTarget(q.map,be),n.clear();else{be===0&&(n.setRenderTarget(q.map),n.clear());let K=q.getViewport(be);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),W.viewport(o)}i=q.getFrustum(be),_(y,E,Re,j,Q,this.type)}q.isPointLightShadow!==!0&&this.type===mo&&v(q,E),q.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(D,I,z)};function v(T,y){let E=e.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new tn(s.x,s.y,{format:$s,type:qn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(y,null,E,f,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(y,null,E,d,x,null)}function b(T,y,E,D){let I=null,z=E.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(z!==void 0)I=z;else if(I=E.isPointLight===!0?l:a,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let W=I.uuid,k=y.uuid,N=c[W];N===void 0&&(N={},c[W]=N);let G=N[k];G===void 0&&(G=I.clone(),N[k]=G,y.addEventListener("dispose",w)),I=G}if(I.visible=y.visible,I.wireframe=y.wireframe,D===mo?I.side=y.shadowSide!==null?y.shadowSide:y.side:I.side=y.shadowSide!==null?y.shadowSide:h[y.side],I.alphaMap=y.alphaMap,I.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,I.map=y.map,I.clipShadows=y.clipShadows,I.clippingPlanes=y.clippingPlanes,I.clipIntersection=y.clipIntersection,I.displacementMap=y.displacementMap,I.displacementScale=y.displacementScale,I.displacementBias=y.displacementBias,I.wireframeLinewidth=y.wireframeLinewidth,I.linewidth=y.linewidth,E.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let W=n.properties.get(I);W.light=E}return I}function _(T,y,E,D,I,z){if(T.visible===!1)return;if(T.layers.test(I)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&z===mo)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,T.matrixWorld);let N=e.update(T),G=T.material;if(Array.isArray(G)){let j=N.groups;for(let q=0,ye=j.length;q<ye;q++){let Y=j[q],V=G[Y.materialIndex];if(V&&V.visible){let Q=b(T,V,D,z);T.onBeforeShadow(n,T,y,E,N,Q,Y),n.renderBufferDirect(E,null,N,Q,T,Y),T.onAfterShadow(n,T,y,E,N,Q,Y)}}}else if(G.visible){let j=b(T,G,D,z);T.onBeforeShadow(n,T,y,E,N,j,null),n.renderBufferDirect(E,null,N,j,T,null),T.onAfterShadow(n,T,y,E,N,j,null)}}let k=T.children;for(let N=0,G=k.length;N<G;N++)_(k[N],y,E,D,I,z)}function w(T){T.target.removeEventListener("dispose",w);for(let E in c){let D=c[E],I=T.target.uuid;I in D&&(D[I].dispose(),delete D[I])}}}function OE(n,e){function t(){let U=!1,ge=new Mt,ue=null,Ne=new Mt(0,0,0,0);return{setMask:function(Pe){ue!==Pe&&!U&&(n.colorMask(Pe,Pe,Pe,Pe),ue=Pe)},setLocked:function(Pe){U=Pe},setClear:function(Pe,Le,Fe,it,Z){Z===!0&&(Pe*=it,Le*=it,Fe*=it),ge.set(Pe,Le,Fe,it),Ne.equals(ge)===!1&&(n.clearColor(Pe,Le,Fe,it),Ne.copy(ge))},reset:function(){U=!1,ue=null,Ne.set(-1,0,0,0)}}}function i(){let U=!1,ge=!1,ue=null,Ne=null,Pe=null;return{setReversed:function(Le){if(ge!==Le){let Fe=e.get("EXT_clip_control");Le?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),ge=Le;let it=Pe;Pe=null,this.setClear(it)}},getReversed:function(){return ge},setTest:function(Le){Le?pe(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(Le){ue!==Le&&!U&&(n.depthMask(Le),ue=Le)},setFunc:function(Le){if(ge&&(Le=og[Le]),Ne!==Le){switch(Le){case nc:n.depthFunc(n.NEVER);break;case ic:n.depthFunc(n.ALWAYS);break;case sc:n.depthFunc(n.LESS);break;case Qr:n.depthFunc(n.LEQUAL);break;case rc:n.depthFunc(n.EQUAL);break;case oc:n.depthFunc(n.GEQUAL);break;case ac:n.depthFunc(n.GREATER);break;case lc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ne=Le}},setLocked:function(Le){U=Le},setClear:function(Le){Pe!==Le&&(Pe=Le,ge&&(Le=1-Le),n.clearDepth(Le))},reset:function(){U=!1,ue=null,Ne=null,Pe=null,ge=!1}}}function s(){let U=!1,ge=null,ue=null,Ne=null,Pe=null,Le=null,Fe=null,it=null,Z=null;return{setTest:function(Ae){U||(Ae?pe(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(Ae){ge!==Ae&&!U&&(n.stencilMask(Ae),ge=Ae)},setFunc:function(Ae,st,Ce){(ue!==Ae||Ne!==st||Pe!==Ce)&&(n.stencilFunc(Ae,st,Ce),ue=Ae,Ne=st,Pe=Ce)},setOp:function(Ae,st,Ce){(Le!==Ae||Fe!==st||it!==Ce)&&(n.stencilOp(Ae,st,Ce),Le=Ae,Fe=st,it=Ce)},setLocked:function(Ae){U=Ae},setClear:function(Ae){Z!==Ae&&(n.clearStencil(Ae),Z=Ae)},reset:function(){U=!1,ge=null,ue=null,Ne=null,Pe=null,Le=null,Fe=null,it=null,Z=null}}}let r=new t,o=new i,a=new s,l={},c=new WeakMap,u={},h={},f={},d=new WeakMap,p=[],x=null,m=!1,g=null,v=null,b=null,_=null,w=null,T=null,y=null,E=new je(0,0,0),D=0,I=!1,z=null,W=null,k=null,N=null,G=null,j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,ye=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(ye=parseFloat(/^WebGL (\d)/.exec(Y)[1]),q=ye>=1):Y.indexOf("OpenGL ES")!==-1&&(ye=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),q=ye>=2);let V=null,Q={},be=n.getParameter(n.SCISSOR_BOX),Re=n.getParameter(n.VIEWPORT),K=new Mt().fromArray(be),ae=new Mt().fromArray(Re);function B(U,ge,ue,Ne){let Pe=new Uint8Array(4),Le=n.createTexture();n.bindTexture(U,Le),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<ue;Fe++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,Ne,0,n.RGBA,n.UNSIGNED_BYTE,Pe):n.texImage2D(ge+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pe);return Le}let ee={};ee[n.TEXTURE_2D]=B(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=B(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[n.TEXTURE_2D_ARRAY]=B(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=B(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(n.DEPTH_TEST),o.setFunc(Qr),Ze(!1),De(tf),pe(n.CULL_FACE),ke(si);function pe(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function Se(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function $e(U,ge){return f[U]!==ge?(n.bindFramebuffer(U,ge),f[U]=ge,U===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ge),U===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function Oe(U,ge){let ue=p,Ne=!1;if(U){ue=d.get(ge),ue===void 0&&(ue=[],d.set(ge,ue));let Pe=U.textures;if(ue.length!==Pe.length||ue[0]!==n.COLOR_ATTACHMENT0){for(let Le=0,Fe=Pe.length;Le<Fe;Le++)ue[Le]=n.COLOR_ATTACHMENT0+Le;ue.length=Pe.length,Ne=!0}}else ue[0]!==n.BACK&&(ue[0]=n.BACK,Ne=!0);Ne&&n.drawBuffers(ue)}function ze(U){return x!==U?(n.useProgram(U),x=U,!0):!1}let oe={[vi]:n.FUNC_ADD,[Im]:n.FUNC_SUBTRACT,[Lm]:n.FUNC_REVERSE_SUBTRACT};oe[Dm]=n.MIN,oe[Nm]=n.MAX;let we={[Pa]:n.ZERO,[qs]:n.ONE,[Om]:n.SRC_COLOR,[Ia]:n.SRC_ALPHA,[km]:n.SRC_ALPHA_SATURATE,[Bm]:n.DST_COLOR,[Fm]:n.DST_ALPHA,[Um]:n.ONE_MINUS_SRC_COLOR,[go]:n.ONE_MINUS_SRC_ALPHA,[zm]:n.ONE_MINUS_DST_COLOR,[La]:n.ONE_MINUS_DST_ALPHA,[Hm]:n.CONSTANT_COLOR,[Vm]:n.ONE_MINUS_CONSTANT_COLOR,[Gm]:n.CONSTANT_ALPHA,[Wm]:n.ONE_MINUS_CONSTANT_ALPHA};function ke(U,ge,ue,Ne,Pe,Le,Fe,it,Z,Ae){if(U===si){m===!0&&(Se(n.BLEND),m=!1);return}if(m===!1&&(pe(n.BLEND),m=!0),U!==Tc){if(U!==g||Ae!==I){if((v!==vi||w!==vi)&&(n.blendEquation(n.FUNC_ADD),v=vi,w=vi),Ae)switch(U){case ki:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nf:n.blendFunc(n.ONE,n.ONE);break;case sf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case rf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ct("WebGLState: Invalid blending: ",U);break}else switch(U){case ki:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nf:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case sf:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rf:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",U);break}b=null,_=null,T=null,y=null,E.set(0,0,0),D=0,g=U,I=Ae}return}Pe=Pe||ge,Le=Le||ue,Fe=Fe||Ne,(ge!==v||Pe!==w)&&(n.blendEquationSeparate(oe[ge],oe[Pe]),v=ge,w=Pe),(ue!==b||Ne!==_||Le!==T||Fe!==y)&&(n.blendFuncSeparate(we[ue],we[Ne],we[Le],we[Fe]),b=ue,_=Ne,T=Le,y=Fe),(it.equals(E)===!1||Z!==D)&&(n.blendColor(it.r,it.g,it.b,Z),E.copy(it),D=Z),g=U,I=!1}function He(U,ge){U.side===Dt?Se(n.CULL_FACE):pe(n.CULL_FACE);let ue=U.side===vn;ge&&(ue=!ue),Ze(ue),U.blending===ki&&U.transparent===!1?ke(si):ke(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let Ne=U.stencilWrite;a.setTest(Ne),Ne&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ie(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(U){z!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),z=U)}function De(U){U!==Rm?(pe(n.CULL_FACE),U!==W&&(U===tf?n.cullFace(n.BACK):U===Cm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),W=U}function rt(U){U!==k&&(q&&n.lineWidth(U),k=U)}function ie(U,ge,ue){U?(pe(n.POLYGON_OFFSET_FILL),(N!==ge||G!==ue)&&(N=ge,G=ue,o.getReversed()&&(ge=-ge,ue=-ue),n.polygonOffset(ge,ue))):Se(n.POLYGON_OFFSET_FILL)}function Ue(U){U?pe(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function Ke(U){U===void 0&&(U=n.TEXTURE0+j-1),V!==U&&(n.activeTexture(U),V=U)}function xe(U,ge,ue){ue===void 0&&(V===null?ue=n.TEXTURE0+j-1:ue=V);let Ne=Q[ue];Ne===void 0&&(Ne={type:void 0,texture:void 0},Q[ue]=Ne),(Ne.type!==U||Ne.texture!==ge)&&(V!==ue&&(n.activeTexture(ue),V=ue),n.bindTexture(U,ge||ee[U]),Ne.type=U,Ne.texture=ge)}function A(){let U=Q[V];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function J(){try{n.compressedTexImage2D(...arguments)}catch(U){ct("WebGLState:",U)}}function ne(){try{n.compressedTexImage3D(...arguments)}catch(U){ct("WebGLState:",U)}}function Ee(){try{n.texSubImage2D(...arguments)}catch(U){ct("WebGLState:",U)}}function $(){try{n.texSubImage3D(...arguments)}catch(U){ct("WebGLState:",U)}}function me(){try{n.compressedTexSubImage2D(...arguments)}catch(U){ct("WebGLState:",U)}}function Me(){try{n.compressedTexSubImage3D(...arguments)}catch(U){ct("WebGLState:",U)}}function Te(){try{n.texStorage2D(...arguments)}catch(U){ct("WebGLState:",U)}}function C(){try{n.texStorage3D(...arguments)}catch(U){ct("WebGLState:",U)}}function S(){try{n.texImage2D(...arguments)}catch(U){ct("WebGLState:",U)}}function X(){try{n.texImage3D(...arguments)}catch(U){ct("WebGLState:",U)}}function ve(U){return h[U]!==void 0?h[U]:n.getParameter(U)}function de(U,ge){h[U]!==ge&&(n.pixelStorei(U,ge),h[U]=ge)}function he(U){K.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),K.copy(U))}function _e(U){ae.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),ae.copy(U))}function re(U,ge){let ue=c.get(ge);ue===void 0&&(ue=new WeakMap,c.set(ge,ue));let Ne=ue.get(U);Ne===void 0&&(Ne=n.getUniformBlockIndex(ge,U.name),n.uniformBlockBinding(ge,Ne,Ne),ue.set(U,Ne))}function ce(U,ge,ue){let Pe=c.get(ge).get(U);l[Pe]!==ue&&(n.bindBufferBase(n.UNIFORM_BUFFER,Pe,ue),l[Pe]=ue)}function Ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},V=null,Q={},f={},l={},d=new WeakMap,p=[],x=null,m=!1,g=null,v=null,b=null,_=null,w=null,T=null,y=null,E=new je(0,0,0),D=0,I=!1,z=null,W=null,k=null,N=null,G=null,K.set(0,0,n.canvas.width,n.canvas.height),ae.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pe,disable:Se,bindFramebuffer:$e,drawBuffers:Oe,useProgram:ze,setBlending:ke,setMaterial:He,setFlipSided:Ze,setCullFace:De,setLineWidth:rt,setPolygonOffset:ie,setScissorTest:Ue,activeTexture:Ke,bindTexture:xe,unbindTexture:A,compressedTexImage2D:J,compressedTexImage3D:ne,texImage2D:S,texImage3D:X,pixelStorei:de,getParameter:ve,updateUBOMapping:re,uniformBlockBinding:ce,texStorage2D:Te,texStorage3D:C,texSubImage2D:Ee,texSubImage3D:$,compressedTexSubImage2D:me,compressedTexSubImage3D:Me,scissor:he,viewport:_e,reset:Ie}}function UE(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ye,u=new WeakMap,h=new Set,f,d=new WeakMap,p=new Set,x=new FinalizationRegistry(C=>p.delete(C)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return m?new OffscreenCanvas(C,S):no("canvas")}function v(C,S,X){let ve=1,de=Te(C);if((de.width>X||de.height>X)&&(ve=X/Math.max(de.width,de.height)),ve<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let he=Math.floor(ve*de.width),_e=Math.floor(ve*de.height);f===void 0&&(f=g(he,_e));let re=S?g(he,_e):f;return re.width=he,re.height=_e,re.getContext("2d").drawImage(C,0,0,he,_e),nt("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+he+"x"+_e+")."),re}else return"data"in C&&nt("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),C;return C}function b(C){return C.generateMipmaps}function _(C){n.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(C,S,X,ve,de,he=!1){if(C!==null){if(n[C]!==void 0)return n[C];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let _e;ve&&(_e=e.get("EXT_texture_norm16"),_e||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let re=S;if(S===n.RED&&(X===n.FLOAT&&(re=n.R32F),X===n.HALF_FLOAT&&(re=n.R16F),X===n.UNSIGNED_BYTE&&(re=n.R8),X===n.UNSIGNED_SHORT&&_e&&(re=_e.R16_EXT),X===n.SHORT&&_e&&(re=_e.R16_SNORM_EXT)),S===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(re=n.R8UI),X===n.UNSIGNED_SHORT&&(re=n.R16UI),X===n.UNSIGNED_INT&&(re=n.R32UI),X===n.BYTE&&(re=n.R8I),X===n.SHORT&&(re=n.R16I),X===n.INT&&(re=n.R32I)),S===n.RG&&(X===n.FLOAT&&(re=n.RG32F),X===n.HALF_FLOAT&&(re=n.RG16F),X===n.UNSIGNED_BYTE&&(re=n.RG8),X===n.UNSIGNED_SHORT&&_e&&(re=_e.RG16_EXT),X===n.SHORT&&_e&&(re=_e.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(re=n.RG8UI),X===n.UNSIGNED_SHORT&&(re=n.RG16UI),X===n.UNSIGNED_INT&&(re=n.RG32UI),X===n.BYTE&&(re=n.RG8I),X===n.SHORT&&(re=n.RG16I),X===n.INT&&(re=n.RG32I)),S===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(re=n.RGB8UI),X===n.UNSIGNED_SHORT&&(re=n.RGB16UI),X===n.UNSIGNED_INT&&(re=n.RGB32UI),X===n.BYTE&&(re=n.RGB8I),X===n.SHORT&&(re=n.RGB16I),X===n.INT&&(re=n.RGB32I)),S===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(re=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(re=n.RGBA16UI),X===n.UNSIGNED_INT&&(re=n.RGBA32UI),X===n.BYTE&&(re=n.RGBA8I),X===n.SHORT&&(re=n.RGBA16I),X===n.INT&&(re=n.RGBA32I)),S===n.RGB&&(X===n.UNSIGNED_SHORT&&_e&&(re=_e.RGB16_EXT),X===n.SHORT&&_e&&(re=_e.RGB16_SNORM_EXT),X===n.UNSIGNED_INT_5_9_9_9_REV&&(re=n.RGB9_E5),X===n.UNSIGNED_INT_10F_11F_11F_REV&&(re=n.R11F_G11F_B10F)),S===n.RGBA){let ce=he?ta:gt.getTransfer(de);X===n.FLOAT&&(re=n.RGBA32F),X===n.HALF_FLOAT&&(re=n.RGBA16F),X===n.UNSIGNED_BYTE&&(re=ce===Lt?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT&&_e&&(re=_e.RGBA16_EXT),X===n.SHORT&&_e&&(re=_e.RGBA16_SNORM_EXT),X===n.UNSIGNED_SHORT_4_4_4_4&&(re=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(re=n.RGB5_A1)}return(re===n.R16F||re===n.R32F||re===n.RG16F||re===n.RG32F||re===n.RGBA16F||re===n.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function y(C,S){let X;return C?S===null||S===bi||S===mr?X=n.DEPTH24_STENCIL8:S===kn?X=n.DEPTH32F_STENCIL8:S===vo&&(X=n.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===bi||S===mr?X=n.DEPTH_COMPONENT24:S===kn?X=n.DEPTH_COMPONENT32F:S===vo&&(X=n.DEPTH_COMPONENT16),X}function E(C,S){return b(C)===!0||C.isFramebufferTexture&&C.minFilter!==Gt&&C.minFilter!==Wt?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function D(C){let S=new WeakRef(C);i.get(C).__ref=S,p.add(S),x.register(C,S,S)}function I(C){let S=i.get(C).__ref;S!==void 0&&(p.delete(S),x.unregister(S))}function z(C){k(C.target)}function W(C){N(C.target)}function k(C){C.removeEventListener("dispose",z),I(C),j(C),C.isVideoTexture&&u.delete(C),C.isHTMLTexture&&h.delete(C)}function N(C){C.removeEventListener("dispose",W),I(C),ye(C)}function G(){for(let C of p){let S=C.deref();S!==void 0&&(S.isRenderTarget===!0?N(S):k(S))}p.clear(),h.clear()}function j(C){let S=i.get(C);if(S.__webglInit===void 0)return;let X=C.source,ve=d.get(X);if(ve){let de=ve[S.__cacheKey];de.usedTimes--,de.usedTimes===0&&q(C),Object.keys(ve).length===0&&d.delete(X)}i.remove(C)}function q(C){let S=i.get(C);n.deleteTexture(S.__webglTexture);let X=C.source,ve=d.get(X);delete ve[S.__cacheKey],o.memory.textures--}function ye(C){let S=i.get(C);S.__depthDisposeCallback&&S.__depthDisposeCallback();let X=C.depthTexture;if(X&&X.renderTarget===C&&k(X),C.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(S.__webglFramebuffer[de]))for(let he=0;he<S.__webglFramebuffer[de].length;he++)n.deleteFramebuffer(S.__webglFramebuffer[de][he]);else n.deleteFramebuffer(S.__webglFramebuffer[de]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[de])}else{if(Array.isArray(S.__webglFramebuffer))for(let de=0;de<S.__webglFramebuffer.length;de++)n.deleteFramebuffer(S.__webglFramebuffer[de]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let de=0;de<S.__webglColorRenderbuffer.length;de++)S.__webglColorRenderbuffer[de]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[de]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let ve=C.textures;for(let de=0,he=ve.length;de<he;de++){let _e=i.get(ve[de]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(ve[de])}i.remove(C)}let Y=0;function V(){Y=0}function Q(){return Y}function be(C){Y=C}function Re(){let C=Y;return C>=s.maxTextures&&nt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,C}function K(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.mipmapsAutoUpdate),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function ae(C,S){let X=i.get(C);if(C.isVideoTexture&&me(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&X.__version!==C.version){let ve=C.image;if(ve===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{He(X,C,S);return}}else C.isExternalTexture&&(X.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+S)}function B(C,S){let X=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){He(X,C,S);return}else C.isExternalTexture&&(X.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+S)}function ee(C,S){let X=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){He(X,C,S);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+S)}function pe(C,S){let X=i.get(C);if(C.version>0&&X.__version!==C.version){Ze(X,C,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+S)}let Se={[gi]:n.REPEAT,[ti]:n.CLAMP_TO_EDGE,[eo]:n.MIRRORED_REPEAT},$e={[Gt]:n.NEAREST,[Pc]:n.NEAREST_MIPMAP_NEAREST,[pr]:n.NEAREST_MIPMAP_LINEAR,[Wt]:n.LINEAR,[_o]:n.LINEAR_MIPMAP_NEAREST,[oi]:n.LINEAR_MIPMAP_LINEAR},Oe={[jm]:n.NEVER,[Mf]:n.ALWAYS,[Qm]:n.LESS,[vf]:n.LEQUAL,[eg]:n.EQUAL,[bf]:n.GEQUAL,[tg]:n.GREATER,[ng]:n.NOTEQUAL};function ze(C,S){if(S.type===kn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Wt||S.magFilter===_o||S.magFilter===pr||S.magFilter===oi||S.minFilter===Wt||S.minFilter===_o||S.minFilter===pr||S.minFilter===oi)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,Se[S.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,Se[S.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,Se[S.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,$e[S.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,$e[S.minFilter]),S.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Oe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Gt||S.minFilter!==pr&&S.minFilter!==oi||S.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function oe(C,S){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",z),D(S));let ve=S.source,de=d.get(ve);de===void 0&&(de={},d.set(ve,de));let he=K(S);if(he!==C.__cacheKey){de[he]===void 0&&(de[he]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),de[he].usedTimes++;let _e=de[C.__cacheKey];_e!==void 0&&(de[C.__cacheKey].usedTimes--,_e.usedTimes===0&&q(S)),C.__cacheKey=he,C.__webglTexture=de[he].texture}return X}function we(C,S,X){return Math.floor(Math.floor(C/X)/S)}function ke(C,S,X,ve){let he=C.updateRanges;if(he.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,X,ve,S.data);else{he.sort((U,ge)=>U.start-ge.start);let _e=0;for(let U=1;U<he.length;U++){let ge=he[_e],ue=he[U],Ne=ge.start+ge.count,Pe=we(ue.start,S.width,4),Le=we(ge.start,S.width,4);ue.start<=Ne+1&&Pe===Le&&we(ue.start+ue.count-1,S.width,4)===Pe?ge.count=Math.max(ge.count,ue.start+ue.count-ge.start):(++_e,he[_e]=ue)}he.length=_e+1;let re=t.getParameter(n.UNPACK_ROW_LENGTH),ce=t.getParameter(n.UNPACK_SKIP_PIXELS),Ie=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let U=0,ge=he.length;U<ge;U++){let ue=he[U],Ne=Math.floor(ue.start/4),Pe=Math.ceil(ue.count/4),Le=Ne%S.width,Fe=Math.floor(Ne/S.width),it=Pe,Z=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Le),t.pixelStorei(n.UNPACK_SKIP_ROWS,Fe),t.texSubImage2D(n.TEXTURE_2D,0,Le,Fe,it,Z,X,ve,S.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,re),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ce),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ie)}}function He(C,S,X){let ve=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ve=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ve=n.TEXTURE_3D);let de=oe(C,S),he=S.source;t.bindTexture(ve,C.__webglTexture,n.TEXTURE0+X);let _e=i.get(he);if(he.version!==_e.__version||de===!0){if(t.activeTexture(n.TEXTURE0+X),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let Z=gt.getPrimaries(gt.workingColorSpace),Ae=S.colorSpace===Mi?null:gt.getPrimaries(S.colorSpace),st=S.colorSpace===Mi||Z===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,st)}t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let ce=v(S.image,!1,s.maxTextureSize);ce=Me(S,ce);let Ie=r.convert(S.format,S.colorSpace),U=r.convert(S.type),ge=T(S.internalFormat,Ie,U,S.normalized,S.colorSpace,S.isVideoTexture);ze(ve,S);let ue,Ne=S.mipmaps,Pe=S.isVideoTexture!==!0,Le=_e.__version===void 0||de===!0,Fe=he.dataReady,it=E(S,ce);if(S.isDepthTexture)ge=y(S.format===Ms,S.type),Le&&(Pe?t.texStorage2D(n.TEXTURE_2D,1,ge,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,ge,ce.width,ce.height,0,Ie,U,null));else if(S.isDataTexture)if(Ne.length>0){Pe&&Le&&t.texStorage2D(n.TEXTURE_2D,it,ge,Ne[0].width,Ne[0].height);for(let Z=0,Ae=Ne.length;Z<Ae;Z++)ue=Ne[Z],Pe?Fe&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,ue.width,ue.height,Ie,U,ue.data):t.texImage2D(n.TEXTURE_2D,Z,ge,ue.width,ue.height,0,Ie,U,ue.data);S.generateMipmaps=!1}else Pe?(Le&&t.texStorage2D(n.TEXTURE_2D,it,ge,ce.width,ce.height),Fe&&ke(S,ce,Ie,U)):t.texImage2D(n.TEXTURE_2D,0,ge,ce.width,ce.height,0,Ie,U,ce.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Pe&&Le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,it,ge,Ne[0].width,Ne[0].height,ce.depth);for(let Z=0,Ae=Ne.length;Z<Ae;Z++)if(ue=Ne[Z],S.format!==bn)if(Ie!==null)if(Pe){if(Fe)if(S.layerUpdates.size>0){let st=Lf(ue.width,ue.height,S.format,S.type);for(let Ce of S.layerUpdates){let ut=ue.data.subarray(Ce*st/ue.data.BYTES_PER_ELEMENT,(Ce+1)*st/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,Ce,ue.width,ue.height,1,Ie,ut)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,ue.width,ue.height,ce.depth,Ie,ue.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,ge,ue.width,ue.height,ce.depth,0,ue.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?Fe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,ue.width,ue.height,ce.depth,Ie,U,ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Z,ge,ue.width,ue.height,ce.depth,0,Ie,U,ue.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Pe&&Le&&t.texStorage2D(n.TEXTURE_2D,it,ge,Ne[0].width,Ne[0].height);for(let Z=0,Ae=Ne.length;Z<Ae;Z++)ue=Ne[Z],S.format!==bn?Ie!==null?Pe?Fe&&t.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,ue.width,ue.height,Ie,ue.data):t.compressedTexImage2D(n.TEXTURE_2D,Z,ge,ue.width,ue.height,0,ue.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?Fe&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,ue.width,ue.height,Ie,U,ue.data):t.texImage2D(n.TEXTURE_2D,Z,ge,ue.width,ue.height,0,Ie,U,ue.data)}else if(S.isDataArrayTexture)if(Pe){if(Le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,it,ge,ce.width,ce.height,ce.depth),Fe)if(S.layerUpdates.size>0){let Z=Lf(ce.width,ce.height,S.format,S.type);for(let Ae of S.layerUpdates){let st=ce.data.subarray(Ae*Z/ce.data.BYTES_PER_ELEMENT,(Ae+1)*Z/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ae,ce.width,ce.height,1,Ie,U,st)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Ie,U,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ge,ce.width,ce.height,ce.depth,0,Ie,U,ce.data);else if(S.isData3DTexture)Pe?(Le&&t.texStorage3D(n.TEXTURE_3D,it,ge,ce.width,ce.height,ce.depth),Fe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Ie,U,ce.data)):t.texImage3D(n.TEXTURE_3D,0,ge,ce.width,ce.height,ce.depth,0,Ie,U,ce.data);else if(S.isFramebufferTexture){if(Le)if(Pe)t.texStorage2D(n.TEXTURE_2D,it,ge,ce.width,ce.height);else{let Z=ce.width,Ae=ce.height;for(let st=0;st<it;st++)t.texImage2D(n.TEXTURE_2D,st,ge,Z,Ae,0,Ie,U,null),Z>>=1,Ae>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){let Z=n.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),ce.parentNode!==Z){Z.appendChild(ce),h.add(S),Z.onpaint=Ae=>{let st=Ae.changedElements;for(let Ce of h)st.includes(Ce.image)&&(Ce.needsUpdate=!0)},Z.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ce);else{let st=n.RGBA,Ce=n.RGBA,ut=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,st,Ce,ut,ce)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(Pe&&Le){let Z=Te(Ne[0]);t.texStorage2D(n.TEXTURE_2D,it,ge,Z.width,Z.height)}for(let Z=0,Ae=Ne.length;Z<Ae;Z++)ue=Ne[Z],Pe?Fe&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,Ie,U,ue):t.texImage2D(n.TEXTURE_2D,Z,ge,Ie,U,ue);S.generateMipmaps=!1}else if(Pe){if(Le){let Z=Te(ce);t.texStorage2D(n.TEXTURE_2D,it,ge,Z.width,Z.height)}Fe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ie,U,ce)}else t.texImage2D(n.TEXTURE_2D,0,ge,Ie,U,ce);b(S)&&S.mipmapsAutoUpdate===!0&&_(ve),_e.__version=he.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Ze(C,S,X){if(S.image.length!==6)return;let ve=oe(C,S),de=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+X);let he=i.get(de);if(de.version!==he.__version||ve===!0){t.activeTexture(n.TEXTURE0+X);let _e=gt.getPrimaries(gt.workingColorSpace),re=S.colorSpace===Mi?null:gt.getPrimaries(S.colorSpace),ce=S.colorSpace===Mi||_e===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let Ie=S.isCompressedTexture||S.image[0].isCompressedTexture,U=S.image[0]&&S.image[0].isDataTexture,ge=[];for(let Ce=0;Ce<6;Ce++)!Ie&&!U?ge[Ce]=v(S.image[Ce],!0,s.maxCubemapSize):ge[Ce]=U?S.image[Ce].image:S.image[Ce],ge[Ce]=Me(S,ge[Ce]);let ue=ge[0],Ne=r.convert(S.format,S.colorSpace),Pe=r.convert(S.type),Le=T(S.internalFormat,Ne,Pe,S.normalized,S.colorSpace),Fe=S.isVideoTexture!==!0,it=he.__version===void 0||ve===!0,Z=de.dataReady,Ae=E(S,ue);ze(n.TEXTURE_CUBE_MAP,S);let st;if(S.isDepthTexture){if(Le=y(S.format===Ms,S.type),it)if(Fe)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,Le,ue.width,ue.height);else for(let Ce=0;Ce<6;Ce++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Le,ue.width,ue.height,0,Ne,Pe,null)}else if(Ie){Fe&&it&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,Le,ue.width,ue.height);for(let Ce=0;Ce<6;Ce++){st=ge[Ce].mipmaps;for(let ut=0;ut<st.length;ut++){let Et=st[ut];S.format!==bn?Ne!==null?Fe?Z&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ut,0,0,Et.width,Et.height,Ne,Et.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ut,Le,Et.width,Et.height,0,Et.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ut,0,0,Et.width,Et.height,Ne,Pe,Et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ut,Le,Et.width,Et.height,0,Ne,Pe,Et.data)}}}else{if(st=S.mipmaps,Fe&&it){st.length>0&&Ae++;let Ce=Te(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,Le,Ce.width,Ce.height)}for(let Ce=0;Ce<6;Ce++)if(U){Fe?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,ge[Ce].width,ge[Ce].height,Ne,Pe,ge[Ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Le,ge[Ce].width,ge[Ce].height,0,Ne,Pe,ge[Ce].data);for(let ut=0;ut<st.length;ut++){let Zt=st[ut].image[Ce].image;Fe?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ut+1,0,0,Zt.width,Zt.height,Ne,Pe,Zt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ut+1,Le,Zt.width,Zt.height,0,Ne,Pe,Zt.data)}}else{Fe?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,Ne,Pe,ge[Ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Le,Ne,Pe,ge[Ce]);for(let ut=0;ut<st.length;ut++){let Et=st[ut];Fe?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ut+1,0,0,Ne,Pe,Et.image[Ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ut+1,Le,Ne,Pe,Et.image[Ce])}}}b(S)&&S.mipmapsAutoUpdate===!0&&_(n.TEXTURE_CUBE_MAP),he.__version=de.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function De(C,S,X,ve,de,he){let _e=r.convert(X.format,X.colorSpace),re=r.convert(X.type),ce=T(X.internalFormat,_e,re,X.normalized,X.colorSpace),Ie=i.get(S),U=i.get(X);if(U.__renderTarget=S,!Ie.__hasExternalTextures){let ge=Math.max(1,S.width>>he),ue=Math.max(1,S.height>>he);de===n.TEXTURE_3D||de===n.TEXTURE_2D_ARRAY?t.texImage3D(de,he,ce,ge,ue,S.depth,0,_e,re,null):t.texImage2D(de,he,ce,ge,ue,0,_e,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),$(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,de,U.__webglTexture,0,Ee(S)):(de===n.TEXTURE_2D||de>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ve,de,U.__webglTexture,he),t.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(C,S,X){if(n.bindRenderbuffer(n.RENDERBUFFER,C),S.depthBuffer){let ve=S.depthTexture,de=ve&&ve.isDepthTexture?ve.type:null,he=y(S.stencilBuffer,de),_e=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;$(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee(S),he,S.width,S.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee(S),he,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,he,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,C)}else{let ve=S.textures;for(let de=0;de<ve.length;de++){let he=ve[de],_e=r.convert(he.format,he.colorSpace),re=r.convert(he.type),ce=T(he.internalFormat,_e,re,he.normalized,he.colorSpace);$(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee(S),ce,S.width,S.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee(S),ce,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ce,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ie(C,S,X){let ve=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let de=i.get(S.depthTexture);de.__renderTarget=S;let he=ve?S.depthTexture.image[0]:S.depthTexture.image;(!de.__webglTexture||he.width!==S.width||he.height!==S.height)&&(he.width=S.width,he.height=S.height,S.depthTexture.needsUpdate=!0),ve?pe(S.depthTexture,0):ae(S.depthTexture,0);let _e=de.__webglTexture,re=Ee(S),ce=ve?n.TEXTURE_CUBE_MAP_POSITIVE_X+X:n.TEXTURE_2D,Ie=S.depthTexture.format===Ms?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===fs)$(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ie,ce,_e,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,Ie,ce,_e,0);else if(S.depthTexture.format===Ms)$(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ie,ce,_e,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,Ie,ce,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ue(C){let S=i.get(C),X=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let ve=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ve){let de=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ve.removeEventListener("dispose",de)};ve.addEventListener("dispose",de),S.__depthDisposeCallback=de}S.__boundDepthTexture=ve}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(X)for(let ve=0;ve<6;ve++)ie(S.__webglFramebuffer[ve],C,ve);else C.texture.mipmaps.length>0?ie(S.__webglFramebuffer[0],C,0):ie(S.__webglFramebuffer,C,0);else if(X){S.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[ve]),S.__webglDepthbuffer[ve]===void 0)S.__webglDepthbuffer[ve]=n.createRenderbuffer(),rt(S.__webglDepthbuffer[ve],C,!1);else{let de=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=S.__webglDepthbuffer[ve];n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,he)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),rt(S.__webglDepthbuffer,C,!1);else{let de=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,he)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ke(C,S,X){let ve=i.get(C);S!==void 0&&De(ve.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&Ue(C)}function xe(C){let S=C.texture,X=i.get(C),ve=i.get(S);C.addEventListener("dispose",W),D(C);let de=C.textures,he=C.isWebGLCubeRenderTarget===!0,_e=de.length>1;if(_e||(ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture()),ve.__version=S.version,o.memory.textures++),he){X.__webglFramebuffer=[];for(let re=0;re<6;re++)if(S.mipmaps.length>0){X.__webglFramebuffer[re]=[];for(let ce=0;ce<S.mipmaps.length;ce++)X.__webglFramebuffer[re][ce]=n.createFramebuffer()}else X.__webglFramebuffer[re]=n.createFramebuffer()}else{if(S.mipmaps.length>0){X.__webglFramebuffer=[];for(let re=0;re<S.mipmaps.length;re++)X.__webglFramebuffer[re]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(_e)for(let re=0,ce=de.length;re<ce;re++){let Ie=i.get(de[re]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&$(C)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let re=0;re<de.length;re++){let ce=de[re];X.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[re]);let Ie=r.convert(ce.format,ce.colorSpace),U=r.convert(ce.type),ge=T(ce.internalFormat,Ie,U,ce.normalized,ce.colorSpace,C.isXRRenderTarget===!0),ue=Ee(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,ge,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,X.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),rt(X.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(he){t.bindTexture(n.TEXTURE_CUBE_MAP,ve.__webglTexture),ze(n.TEXTURE_CUBE_MAP,S);for(let re=0;re<6;re++)if(S.mipmaps.length>0)for(let ce=0;ce<S.mipmaps.length;ce++)De(X.__webglFramebuffer[re][ce],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,ce);else De(X.__webglFramebuffer[re],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);b(S)?_(n.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(_e){for(let re=0,ce=de.length;re<ce;re++){let Ie=de[re],U=i.get(Ie),ge=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ge=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,U.__webglTexture),ze(ge,Ie),De(X.__webglFramebuffer,C,Ie,n.COLOR_ATTACHMENT0+re,ge,0),b(Ie)&&_(ge)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(re=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,ve.__webglTexture),ze(re,S),S.mipmaps.length>0)for(let ce=0;ce<S.mipmaps.length;ce++)De(X.__webglFramebuffer[ce],C,S,n.COLOR_ATTACHMENT0,re,ce);else De(X.__webglFramebuffer,C,S,n.COLOR_ATTACHMENT0,re,0);b(S)?_(re):S.mipmaps.length>0&&n.texParameteri(re,n.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&Ue(C)}function A(C){let S=C.textures;for(let X=0,ve=S.length;X<ve;X++){let de=S[X];if(b(de)&&de.mipmapsAutoUpdate===!0){let he=w(C),_e=i.get(de).__webglTexture;t.bindTexture(he,_e),_(he),t.unbindTexture()}}}let J=[];function ne(C){if(C.samples>0){if($(C)===!1){let S=C.textures,X=C.width,ve=C.height,de=n.COLOR_BUFFER_BIT,he=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(C),re=S.length>1;if(re)for(let Ie=0;Ie<S.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Ie=0;Ie<S.length;Ie++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(de|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(de|=n.STENCIL_BUFFER_BIT)),re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Ie]);let U=i.get(S[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,U,0)}n.blitFramebuffer(0,0,X,ve,0,0,X,ve,de,n.NEAREST),l===!0&&(J.length=0,J.push(n.COLOR_ATTACHMENT0+Ie),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&J.push(he),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let Ie=0;Ie<S.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Ie]);let U=i.get(S[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,U,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let S=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Ee(C){return Math.min(s.maxSamples,C.samples)}function $(C){let S=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function me(C){let S=o.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function Me(C,S){let X=C.colorSpace,ve=C.format,de=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||X!==Bn&&X!==Mi&&(gt.getTransfer(X)===Lt?(ve!==bn||de!==In)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",X)),S}function Te(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Re,this.resetTextureUnits=V,this.getTextureUnits=Q,this.setTextureUnits=be,this.setTexture2D=ae,this.setTexture2DArray=B,this.setTexture3D=ee,this.setTextureCube=pe,this.rebindTextures=Ke,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=De,this.useMultisampledRTT=$,this.dispose=G}function FE(n,e){function t(i,s=Mi){let r,o=gt.getTransfer(s);if(i===In)return n.UNSIGNED_BYTE;if(i===Lc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Dc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===mf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===gf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===df)return n.BYTE;if(i===pf)return n.SHORT;if(i===vo)return n.UNSIGNED_SHORT;if(i===Ic)return n.INT;if(i===bi)return n.UNSIGNED_INT;if(i===kn)return n.FLOAT;if(i===qn)return n.HALF_FLOAT;if(i===xf)return n.ALPHA;if(i===yf)return n.RGB;if(i===bn)return n.RGBA;if(i===fs)return n.DEPTH_COMPONENT;if(i===Ms)return n.DEPTH_STENCIL;if(i===Nc)return n.RED;if(i===Oc)return n.RED_INTEGER;if(i===$s)return n.RG;if(i===Uc)return n.RG_INTEGER;if(i===Fc)return n.RGBA_INTEGER;if(i===Da||i===Na||i===Oa||i===Ua)if(o===Lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bc||i===zc||i===kc||i===Hc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Bc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vc||i===Gc||i===Wc||i===Xc||i===qc||i===Fa||i===$c)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Vc||i===Gc)return o===Lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Wc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Xc)return r.COMPRESSED_R11_EAC;if(i===qc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Fa)return r.COMPRESSED_RG11_EAC;if(i===$c)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Yc||i===Zc||i===Kc||i===Jc||i===jc||i===Qc||i===eu||i===tu||i===nu||i===iu||i===su||i===ru||i===ou||i===au)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Yc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Zc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Kc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===eu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===iu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===su)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ru)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ou)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===au)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lu||i===cu||i===uu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===lu)return o===Lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hu||i===fu||i===Ba||i===du)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===hu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===fu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===du)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===mr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var BE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zE=`
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

}`,Hf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new pa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new yn({vertexShader:BE,fragmentShader:zE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pt(new ii(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vf=class extends xi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,p=null,x=typeof XRWebGLBinding<"u",m=new Hf,g={},v=t.getContextAttributes(),b=null,_=null,w=[],T=[],y=new Ye,E=null,D=null,I=new on;I.viewport=new Mt;let z=new on;z.viewport=new Mt;let W=[I,z],k=new wc,N=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ae=w[K];return ae===void 0&&(ae=new oo,w[K]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(K){let ae=w[K];return ae===void 0&&(ae=new oo,w[K]=ae),ae.getGripSpace()},this.getHand=function(K){let ae=w[K];return ae===void 0&&(ae=new oo,w[K]=ae),ae.getHandSpace()};function j(K){let ae=T.indexOf(K.inputSource);if(ae===-1)return;let B=w[ae];B!==void 0&&(B.update(K.inputSource,K.frame,c||o),B.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",ye);for(let K=0;K<w.length;K++){let ae=T[K];ae!==null&&(T[K]=null,w[K].disconnect(ae))}N=null,G=null,m.reset();for(let K in g)delete g[K];if(e.setRenderTarget(b),d=null,f=null,h=null,s=null,_=null,Re.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(y.width,y.height,!1),D!==null){let K=D.camera;K.fov=D.fov,K.zoom=D.zoom,K.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",q),s.addEventListener("inputsourceschange",ye),v.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(y),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let B=null,ee=null,pe=null;v.depth&&(pe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,B=v.stencil?Ms:fs,ee=v.stencil?mr:bi);let Se={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Se),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new tn(f.textureWidth,f.textureHeight,{format:bn,type:In,depthTexture:new gs(f.textureWidth,f.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let B={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,B),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new tn(d.framebufferWidth,d.framebufferHeight,{format:bn,type:In,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Re.setContext(s),Re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ye(K){for(let ae=0;ae<K.removed.length;ae++){let B=K.removed[ae],ee=T.indexOf(B);ee>=0&&(T[ee]=null,w[ee].disconnect(B))}for(let ae=0;ae<K.added.length;ae++){let B=K.added[ae],ee=T.indexOf(B);if(ee===-1){for(let Se=0;Se<w.length;Se++)if(Se>=T.length){T.push(B),ee=Se;break}else if(T[Se]===null){T[Se]=B,ee=Se;break}if(ee===-1)break}let pe=w[ee];pe&&pe.connect(B)}}function Y(K,ae){ae===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ae.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ae=K.near,B=K.far;m.texture!==null&&(m.depthNear>0&&(ae=m.depthNear),m.depthFar>0&&(B=m.depthFar)),k.near=z.near=I.near=ae,k.far=z.far=I.far=B,(N!==k.near||G!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),N=k.near,G=k.far),k.layers.mask=K.layers.mask|6,I.layers.mask=k.layers.mask&-5,z.layers.mask=k.layers.mask&-3;let ee=K.parent,pe=k.cameras;Y(k,ee);for(let Se=0;Se<pe.length;Se++)Y(pe[Se],ee);k.projectionMatrix.copy(I.projectionMatrix),k.projectionMatrixInverse.copy(I.projectionMatrixInverse),D===null&&K.isPerspectiveCamera&&(D={camera:K,fov:K.fov,zoom:K.zoom}),V(K,k,ee)};function V(K,ae,B){B===null?K.matrix.copy(ae.matrixWorld):(K.matrix.copy(B.matrixWorld),K.matrix.invert(),K.matrix.multiply(ae.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ae.projectionMatrix),K.projectionMatrixInverse.copy(ae.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=cr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(K){return g[K]};let Q=null;function be(K,ae){if(u=ae.getViewerPose(c||o),p=ae,u!==null){let B=u.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let ee=!1;B.length!==k.cameras.length&&(k.cameras.length=0,ee=!0);for(let Oe=0;Oe<B.length;Oe++){let ze=B[Oe],oe=null;if(d!==null)oe=d.getViewport(ze);else{let ke=h.getViewSubImage(f,ze);oe=ke.viewport,Oe===0&&(e.setRenderTargetTextures(_,ke.colorTexture,ke.depthStencilTexture),e.setRenderTarget(_))}let we=W[Oe];we===void 0&&(we=new on,we.layers.enable(Oe),we.viewport=new Mt,W[Oe]=we),we.matrix.fromArray(ze.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(ze.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(oe.x,oe.y,oe.width,oe.height),Oe===0&&(k.matrix.copy(we.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),ee===!0&&k.cameras.push(we)}let pe=s.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=i.getBinding();let Oe=h.getDepthInformation(B[0]);Oe&&Oe.isValid&&Oe.texture&&m.init(Oe,s.renderState)}if(pe&&pe.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let Oe=0;Oe<B.length;Oe++){let ze=B[Oe].camera;if(ze){let oe=g[ze];oe||(oe=new pa,g[ze]=oe);let we=h.getCameraImage(ze);oe.sourceTexture=we}}}}for(let B=0;B<w.length;B++){let ee=T[B],pe=w[B];ee!==null&&pe!==void 0&&pe.update(ee,ae,c||o)}Q&&Q(K,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),p=null}let Re=new Lg;Re.setAnimationLoop(be),this.setAnimationLoop=function(K){Q=K},this.dispose=function(){}}},kE=new at,Vg=new ht;Vg.set(-1,0,0,0,1,0,0,0,1);function HE(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Cf(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,v,b,_){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),h(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,_)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,v,b):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===vn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===vn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=e.get(g),b=v.envMap,_=v.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(kE.makeRotationFromEuler(_)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Vg),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,b){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=b*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,v){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===vn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let v=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function VE(n,e,t,i){let s={},r={};function o(v,b){let _=b.program;i.uniformBlockBinding(v,_,s[v.id])}function a(v,b){let _=s[v.id];_===void 0&&(p(v),_=l(v),s[v.id]=_,v.addEventListener("dispose",m));let w=b.program;i.updateUBOMapping(v,w);let T=e.render.frame;r[v.id]!==T&&(c(v),r[v.id]=T)}function l(v){let b=n.createBuffer(),_=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,_,w),n.bindBuffer(n.UNIFORM_BUFFER,null),b}function c(v){let b=s[v.id],_=v.uniforms,w=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let T=0,y=_.length;T<y;T++){let E=_[T];if(Array.isArray(E))for(let D=0,I=E.length;D<I;D++)u(E[D],T,D,w);else u(E,T,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(v,b,_,w){if(f(v,b,_,w)===!0){let T=v.__offset,y=v.value;if(Array.isArray(y)){let E=0;for(let D=0;D<y.length;D++){let I=y[D],z=x(I,!0);h(I,v.__data,E),E+=z.storage/Float32Array.BYTES_PER_ELEMENT}}else h(y,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,v.__data)}}function h(v,b,_){typeof v=="number"||typeof v=="boolean"?b[_]=v:v.isMatrix3?(b[_]=v.elements[0],b[_+1]=v.elements[1],b[_+2]=v.elements[2],b[_+3]=0,b[_+4]=v.elements[3],b[_+5]=v.elements[4],b[_+6]=v.elements[5],b[_+7]=0,b[_+8]=v.elements[6],b[_+9]=v.elements[7],b[_+10]=v.elements[8],b[_+11]=0):ArrayBuffer.isView(v)?b.set(v.subarray(0,b.length-_),_):v.toArray(b,_)}function f(v,b,_,w){let T=v.value,y=b+"_"+_;if(Array.isArray(T)){w[y]===void 0&&(w[y]=[]);let E=w[y],D=!1;for(let I=0;I<T.length;I++)d(T[I],E,I)===!0&&(D=!0);return D}return d(T,w,y)}function d(v,b,_){if(b[_]===void 0)return typeof v=="number"||typeof v=="boolean"?b[_]=v:ArrayBuffer.isView(v)?b[_]=v.slice():b[_]=v.clone(),!0;{let w=b[_];if(typeof v=="number"||typeof v=="boolean"){if(w!==v)return b[_]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(w.equals(v)===!1)return w.copy(v),!0}}return!1}function p(v){let b=v.uniforms,_=0,w=16;for(let y=0,E=b.length;y<E;y++){let D=Array.isArray(b[y])?b[y]:[b[y]];for(let I=0,z=D.length;I<z;I++){let W=D[I],k=Array.isArray(W.value)?W.value:[W.value],N=Array.isArray(b[y])||Array.isArray(W.value),G=_;for(let q=0,ye=k.length;q<ye;q++){let Y=k[q],V=x(Y,N),Q=_%w,be=Q%V.boundary,Re=Q+be;_+=be,Re!==0&&w-Re<V.storage&&(_+=w-Re),q===0&&(G=_),_+=V.storage}let j=W.type==="int"?Int32Array:W.type==="uint"?Uint32Array:Float32Array;W.__data=new j((_-G)/Float32Array.BYTES_PER_ELEMENT),W.__offset=G}}let T=_%w;return T>0&&(_+=w-T),v.__size=_,v.__cache={},this}function x(v,b){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=16,_.storage=48):v.isMatrix4?(_.boundary=16,_.storage=64):v.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(_.boundary=16,_.storage=v.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",v),b===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function m(v){let b=v.target;b.removeEventListener("dispose",m),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function g(){for(let v in s)n.deleteBuffer(s[v]);s={},r={}}return{bind:o,update:a,dispose:g}}var GE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Vi=null;function WE(){return Vi===null&&(Vi=new co(GE,16,16,$s,qn),Vi.name="DFG_LUT",Vi.minFilter=Wt,Vi.magFilter=Wt,Vi.wrapS=ti,Vi.wrapT=ti,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}var xu=class{constructor(e={}){let{canvas:t=ig(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=In}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let x=d,m=new Set([Fc,Uc,Oc]),g=new Set([In,bi,vo,mr,Lc,Dc]),v=new Uint32Array(4),b=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},w=null,T=null,y=[],E=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,z=!1,W=null,k=null,N=null,G=null;this._outputColorSpace=At;let j=0,q=0,ye=null,Y=-1,V=null,Q=new Mt,be=new Mt,Re=null,K=new je(0),ae=0,B=t.width,ee=t.height,pe=1,Se=null,$e=null,Oe=new Mt(0,0,B,ee),ze=new Mt(0,0,B,ee),oe=!1,we=new zs,ke=new fc,He=!1,Ze=!1,De=new at,rt=new P,ie=new Mt,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ke=!1;function xe(){return ye===null?pe:1}let A=i;function J(R,H){return t.getContext(R,H)}let ne,Ee,$,me,Me,Te,C,S,X,ve,de,he,_e,re,ce,Ie,U,ge,ue,Ne,Pe,Le,Fe;try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),A===null){let H="webgl2";if(A=J(H,R),A===null)throw J(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}it()}catch(R){throw t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),ct("WebGLRenderer: "+R.message),R}function it(){ne=new tS(A),ne.init(),Pe=new FE(A,ne),Ee=new WM(A,ne,e,Pe),$=new OE(A,ne),Ee.reversedDepthBuffer&&f&&$.buffers.depth.setReversed(!0),k=A.createFramebuffer(),N=A.createFramebuffer(),G=A.createFramebuffer(),me=new sS(A),Me=new bE,Te=new UE(A,ne,$,Me,Ee,Pe,me),C=new eS(I),S=new ov(A),Le=new VM(A,S),X=new nS(A,S,me,Le),ve=new oS(A,X,S,Le,me),ge=new rS(A,Ee,Te),ce=new XM(Me),de=new vE(I,C,ne,Ee,Le,ce),he=new HE(I,Me),_e=new SE,re=new CE(ne),U=new HM(I,C,$,ve,p,l),Ie=new NE(I,ve,Ee),Fe=new VE(A,me,Ee,$),ue=new GM(A,ne,me),Ne=new iS(A,ne,me),me.programs=de.programs,I.capabilities=Ee,I.extensions=ne,I.properties=Me,I.renderLists=_e,I.shadowMap=Ie,I.state=$,I.info=me}x!==In&&(D=new lS(x,t.width,t.height,a,s,r));let Z=new Vf(I,A);this.xr=Z,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let R=ne.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=ne.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(R){R!==void 0&&(pe=R,this.setSize(B,ee,!1))},this.getSize=function(R){return R.set(B,ee)},this.setSize=function(R,H,le=!0){if(Z.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,ee=H,t.width=Math.floor(R*pe),t.height=Math.floor(H*pe),le===!0&&(t.style.width=R+"px",t.style.height=H+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(B*pe,ee*pe).floor()},this.setDrawingBufferSize=function(R,H,le){B=R,ee=H,pe=le,t.width=Math.floor(R*le),t.height=Math.floor(H*le),this.setViewport(0,0,R,H)},this.setEffects=function(R){if(x===In){ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let H=0;H<R.length;H++)if(R[H].isOutputPass===!0){nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(Q)},this.getViewport=function(R){return R.copy(Oe)},this.setViewport=function(R,H,le,te){R.isVector4?Oe.set(R.x,R.y,R.z,R.w):Oe.set(R,H,le,te),$.viewport(Q.copy(Oe).multiplyScalar(xe()).round())},this.getScissor=function(R){return R.copy(ze)},this.setScissor=function(R,H,le,te){R.isVector4?ze.set(R.x,R.y,R.z,R.w):ze.set(R,H,le,te),$.scissor(be.copy(ze).multiplyScalar(xe()).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(R){$.setScissorTest(oe=R)},this.setOpaqueSort=function(R){Se=R},this.setTransparentSort=function(R){$e=R},this.getClearColor=function(R){return R.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(R=!0,H=!0,le=!0){let te=0;if(R){let se=!1;if(ye!==null){let We=ye.texture.format;se=m.has(We)}if(se){let We=ye.texture.type,et=g.has(We),Ge=U.getClearColor(),qe=U.getClearAlpha(),tt=Ge.r,lt=Ge.g,dt=Ge.b;et?(v[0]=tt,v[1]=lt,v[2]=dt,v[3]=qe,A.clearBufferuiv(A.COLOR,0,v)):(b[0]=tt,b[1]=lt,b[2]=dt,b[3]=qe,A.clearBufferiv(A.COLOR,0,b))}else te|=A.COLOR_BUFFER_BIT}H&&(te|=A.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),le&&(te|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&A.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),W=R},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),U.dispose(),_e.dispose(),re.dispose(),Te.dispose(),Me.dispose(),C.dispose(),ve.dispose(),X.dispose(),Le.dispose(),Fe.dispose(),de.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Qi),Z.removeEventListener("sessionend",ll),es.stop()};function Ae(R){R.preventDefault(),na("WebGLRenderer: Context Lost."),z=!0}function st(){na("WebGLRenderer: Context Restored."),z=!1;let R=me.autoReset,H=Ie.enabled,le=Ie.autoUpdate,te=Ie.needsUpdate,se=Ie.type;it(),me.autoReset=R,Ie.enabled=H,Ie.autoUpdate=le,Ie.needsUpdate=te,Ie.type=se}function Ce(R){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ut(R){let H=R.target;H.removeEventListener("dispose",ut),Et(H)}function Et(R){Zt(R),Me.remove(R)}function Zt(R){let H=Me.get(R).programs;H!==void 0&&(H.forEach(function(le){de.releaseProgram(le)}),R.isShaderMaterial&&de.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,le,te,se,We){H===null&&(H=Ue);let et=se.isMesh&&se.matrixWorld.determinantAffine()<0,Ge=ul(R,H,le,te,se);$.setMaterial(te,et);let qe=le.index,tt=1;if(te.wireframe===!0){if(qe=X.getWireframeAttribute(le),qe===void 0)return;tt=2}let lt=le.drawRange,dt=le.attributes.position,Je=lt.start*tt,yt=(lt.start+lt.count)*tt;We!==null&&(Je=Math.max(Je,We.start*tt),yt=Math.min(yt,(We.start+We.count)*tt)),qe!==null?(Je=Math.max(Je,0),yt=Math.min(yt,qe.count)):dt!=null&&(Je=Math.max(Je,0),yt=Math.min(yt,dt.count));let Xt=yt-Je;if(Xt<0||Xt===1/0)return;Le.setup(se,te,Ge,le,qe);let Tt,Nt=ue;if(qe!==null&&(Tt=S.get(qe),Nt=Ne,Nt.setIndex(Tt)),se.isMesh)te.wireframe===!0?($.setLineWidth(te.wireframeLinewidth*xe()),Nt.setMode(A.LINES)):Nt.setMode(A.TRIANGLES);else if(se.isLine){let jt=te.linewidth;jt===void 0&&(jt=1),$.setLineWidth(jt*xe()),se.isLineSegments?Nt.setMode(A.LINES):se.isLineLoop?Nt.setMode(A.LINE_LOOP):Nt.setMode(A.LINE_STRIP)}else se.isPoints?Nt.setMode(A.POINTS):se.isSprite&&Nt.setMode(A.TRIANGLES);if(se.isBatchedMesh)if(ne.get("WEBGL_multi_draw"))Nt.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{let jt=se._multiDrawStarts,Qe=se._multiDrawCounts,fn=se._multiDrawCount,St=qe?S.get(qe).bytesPerElement:1,Ci=Me.get(te).currentProgram.getUniforms();for(let Kt=0;Kt<fn;Kt++)Ci.setValue(A,"_gl_DrawID",Kt),Nt.render(jt[Kt]/St,Qe[Kt])}else if(se.isInstancedMesh)Nt.renderInstances(Je,Xt,se.count);else if(le.isInstancedBufferGeometry){let jt=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Qe=Math.min(le.instanceCount,jt);Nt.renderInstances(Je,Xt,Qe)}else Nt.render(Je,Xt)};function Rs(R,H,le,te){W!==null&&R.isNodeMaterial&&W.setObject(te,R),He===!0&&ce.setState(R,le,!1),R.transparent===!0&&R.side===Dt&&R.forceSinglePass===!1?(R.side=vn,R.needsUpdate=!0,ns(R,H,te),R.side=Kn,R.needsUpdate=!0,ns(R,H,te),R.side=Dt):ns(R,H,te)}this.compile=function(R,H,le=null){le===null&&(le=R),W!==null&&W.renderStart(R,H,le),T=re.get(le),T.init(H),E.push(T),le.traverseVisible(function(se){se.isLight&&se.layers.test(H.layers)&&(T.pushLight(se),se.castShadow&&T.pushShadow(se))}),R!==le&&R.traverseVisible(function(se){se.isLight&&se.layers.test(H.layers)&&(T.pushLight(se),se.castShadow&&T.pushShadow(se))}),T.setupLights(),W!==null&&W.updateLights(T.state.lightsArray),Ze=this.localClippingEnabled,He=ce.init(this.clippingPlanes,Ze),He===!0&&ce.setGlobalState(this.clippingPlanes,H),W!==null&&Ie.render(T.state.shadowsArray,le,H);let te=new Set;return R.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;let We=se.material;if(We)if(Array.isArray(We))for(let et=0;et<We.length;et++){let Ge=We[et];Rs(Ge,le,H,se),te.add(Ge)}else Rs(We,le,H,se),te.add(We)}),T=E.pop(),W!==null&&W.renderEnd(),te},this.compileAsync=function(R,H,le=null){let te=this.compile(R,H,le);return new Promise(se=>{function We(){if(te.forEach(function(et){let qe=Me.get(et).currentProgram;(qe===void 0||qe.isReady())&&te.delete(et)}),te.size===0){se(R);return}setTimeout(We,10)}ne.get("KHR_parallel_shader_compile")!==null?We():setTimeout(We,10)})};let Ti=null;function Ai(R){Ti&&Ti(R)}function Qi(){es.stop()}function ll(){es.start()}let es=new Lg;es.setAnimationLoop(Ai),typeof self<"u"&&es.setContext(self),this.setAnimationLoop=function(R){Ti=R,Z.setAnimationLoop(R),R===null?es.stop():es.start()},Z.addEventListener("sessionstart",Qi),Z.addEventListener("sessionend",ll),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;W!==null&&W.renderStart(R,H);let le=Z.enabled===!0&&Z.isPresenting===!0,te=D!==null&&(ye===null||le)&&D.begin(I,ye);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(H),H=Z.getCamera()),R.isScene===!0&&R.onBeforeRender(I,R,H,ye),T=re.get(R,E.length),T.init(H),T.state.textureUnits=Te.getTextureUnits(),E.push(T),De.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),H.isArrayCamera?ke.setFromArrayCamera(H):we.setFromProjectionMatrix(De,ni,H.reversedDepth),Ze=this.localClippingEnabled,He=ce.init(this.clippingPlanes,Ze),w=_e.get(R,y.length),w.init(),y.push(w),this.info.render.frame++,Z.enabled===!0&&Z.isPresenting===!0){let et=I.xr.getDepthSensingMesh();et!==null&&Oo(et,H,-1/0,I.sortObjects)}Oo(R,H,0,I.sortObjects),w.finish(),W!==null&&W.updateLights(T.state.lightsArray),I.sortObjects===!0&&w.sort(Se,$e),Ke=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Ke&&U.addToRenderList(w,R),this.info.autoReset===!0&&this.info.reset(),He===!0&&ce.beginShadows();let se=T.state.shadowsArray;if(Ie.render(se,R,H),He===!0&&ce.endShadows(),(te&&D.hasRenderPass())===!1){let et=w.opaque,Ge=w.transmissive;if(T.setupLights(),H.isArrayCamera){let qe=H.cameras;if(Ge.length>0)for(let tt=0,lt=qe.length;tt<lt;tt++){let dt=qe[tt];Cs(et,Ge,R,dt)}Ke&&U.render(R);for(let tt=0,lt=qe.length;tt<lt;tt++){let dt=qe[tt];Qs(w,R,dt,dt.viewport)}}else Ge.length>0&&Cs(et,Ge,R,H),Ke&&U.render(R),Qs(w,R,H)}ye!==null&&q===0&&(Te.updateMultisampleRenderTarget(ye),Te.updateRenderTargetMipmap(ye)),te&&D.end(I),R.isScene===!0&&R.onAfterRender(I,R,H),Le.resetDefaultState(),Y=-1,V=null,E.pop(),E.length>0?(T=E[E.length-1],Te.setTextureUnits(T.state.textureUnits),He===!0&&ce.setGlobalState(I.clippingPlanes,T.state.camera)):T=null,y.pop(),y.length>0?w=y[y.length-1]:w=null,W!==null&&W.renderEnd()};function Oo(R,H,le,te){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)le=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLight)T.pushLight(R),R.castShadow&&T.pushShadow(R);else if(R.isSprite){let et=H.isArrayCamera?ke:we;if(!R.frustumCulled||R.intersectsFrustum(et)){te&&ie.setFromMatrixPosition(R.matrixWorld).applyMatrix4(De);let Ge=ve.update(R),qe=R.material;qe.visible&&w.push(R,Ge,qe,le,ie.z,null,H)}}else if(R.isMesh||R.isLine||R.isPoints){let et=H.isArrayCamera?ke:we;if(!R.frustumCulled||R.intersectsFrustum(et)){let Ge=ve.update(R),qe=R.material;if(te&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ie.copy(R.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),ie.copy(Ge.boundingSphere.center)),ie.applyMatrix4(R.matrixWorld).applyMatrix4(De)),Array.isArray(qe)){let tt=Ge.groups;for(let lt=0,dt=tt.length;lt<dt;lt++){let Je=tt[lt],yt=qe[Je.materialIndex];yt&&yt.visible&&w.push(R,Ge,yt,le,ie.z,Je,H)}}else qe.visible&&w.push(R,Ge,qe,le,ie.z,null,H)}}}let We=R.children;for(let et=0,Ge=We.length;et<Ge;et++)Oo(We[et],H,le,te)}function Qs(R,H,le,te){let{opaque:se,transmissive:We,transparent:et}=R;T.setupLightsView(le),He===!0&&ce.setGlobalState(I.clippingPlanes,le),te&&$.viewport(Q.copy(te)),se.length>0&&Ri(se,H,le),We.length>0&&Ri(We,H,le),et.length>0&&Ri(et,H,le),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function Cs(R,H,le,te){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[te.id]===void 0){let Je=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[te.id]=new tn(1,1,{generateMipmaps:!0,type:Je?qn:In,minFilter:oi,samples:Math.max(4,Ee.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:gt.workingColorSpace})}let We=T.state.transmissionRenderTarget[te.id],et=te.viewport||Q;We.setSize(et.z*I.transmissionResolutionScale,et.w*I.transmissionResolutionScale);let Ge=I.getRenderTarget(),qe=I.getActiveCubeFace(),tt=I.getActiveMipmapLevel();I.setRenderTarget(We),I.getClearColor(K),ae=I.getClearAlpha(),ae<1&&I.setClearColor(16777215,.5),I.clear(),Ke&&U.render(le);let lt=I.toneMapping;I.toneMapping=ri;let dt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),T.setupLightsView(te),He===!0&&ce.setGlobalState(I.clippingPlanes,te),Ri(R,le,te),Te.updateMultisampleRenderTarget(We),Te.updateRenderTargetMipmap(We),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let yt=0,Xt=H.length;yt<Xt;yt++){let Tt=H[yt],{object:Nt,geometry:jt,material:Qe,group:fn}=Tt;if(Qe.side===Dt&&Nt.layers.test(te.layers)){let St=Qe.side;Qe.side=vn,Qe.needsUpdate=!0,Uo(Nt,le,te,jt,Qe,fn),Qe.side=St,Qe.needsUpdate=!0,Je=!0}}Je===!0&&(Te.updateMultisampleRenderTarget(We),Te.updateRenderTargetMipmap(We))}I.setRenderTarget(Ge,qe,tt),I.setClearColor(K,ae),dt!==void 0&&(te.viewport=dt),I.toneMapping=lt}function Ri(R,H,le){let te=H.isScene===!0?H.overrideMaterial:null;for(let se=0,We=R.length;se<We;se++){let et=R[se],{object:Ge,geometry:qe,group:tt}=et,lt=et.material;lt.allowOverride===!0&&te!==null&&(lt=te),Ge.layers.test(le.layers)&&Uo(Ge,H,le,qe,lt,tt)}}function Uo(R,H,le,te,se,We){W!==null&&se.isNodeMaterial&&W.setObject(R,se),R.onBeforeRender(I,H,le,te,se,We),R.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),se.onBeforeRender(I,H,le,te,R,We),se.transparent===!0&&se.side===Dt&&se.forceSinglePass===!1?(se.side=vn,se.needsUpdate=!0,I.renderBufferDirect(le,H,te,se,R,We),se.side=Kn,se.needsUpdate=!0,I.renderBufferDirect(le,H,te,se,R,We),se.side=Dt):I.renderBufferDirect(le,H,te,se,R,We),R.onAfterRender(I,H,le,te,se,We)}function ts(R){let H=0;for(let le of R)le.texture!==null&&H++;return H}function ns(R,H,le){H.isScene!==!0&&(H=Ue);let te=Me.get(R),se=T.state.lights,We=T.state.shadowsArray,et=se.state.version,Ge=de.getParameters(R,se.state,We,H,le,T.state.lightProbeGridArray),qe=de.getProgramCacheKey(Ge),tt=te.programs;te.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?H.environment:null,te.fog=H.fog;let lt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;te.envMap=C.get(R.envMap||te.environment,lt),te.envMapRotation=te.environment!==null&&R.envMap===null?H.environmentRotation:R.envMapRotation,tt===void 0&&(R.addEventListener("dispose",ut),tt=new Map,te.programs=tt,te.programVariants=new Map);let dt=tt.get(qe);if(dt!==void 0){if(te.currentProgram===dt&&te.lightsStateVersion===et)return Bo(R,Ge),dt}else Ge.uniforms=de.getUniforms(R),W!==null&&R.isNodeMaterial&&W.build(R,le,Ge),R.onBeforeCompile(Ge,I),dt=de.acquireProgram(Ge,qe),tt.set(qe,dt),te.uniforms=Ge.uniforms;let Je=te.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Je.clippingPlanes=ce.uniform),Bo(R,Ge),te.needsLights=fl(R),te.lightsStateVersion=et,te.needsLights&&(Je.ambientLightColor.value=se.state.ambient,Je.lightProbe.value=se.state.probe,Je.sunLights.value=se.state.sun,Je.sunLightShadows.value=se.state.sunShadow,Je.directionalLights.value=se.state.directional,Je.directionalLightShadows.value=se.state.directionalShadow,Je.spotLights.value=se.state.spot,Je.spotLightShadows.value=se.state.spotShadow,Je.rectAreaLights.value=se.state.rectArea,Je.ltc_1.value=se.state.rectAreaLTC1,Je.ltc_2.value=se.state.rectAreaLTC2,Je.pointLights.value=se.state.point,Je.pointLightShadows.value=se.state.pointShadow,Je.hemisphereLights.value=se.state.hemi,Je.sunShadowMatrix.value=se.state.sunShadowMatrix,Je.sunShadowCascade.value=se.state.sunShadowCascade,Je.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Je.spotLightMatrix.value=se.state.spotLightMatrix,Je.spotLightMap.value=se.state.spotLightMap,Je.pointShadowMatrix.value=se.state.pointShadowMatrix),te.numLightProbeGrids=ts(T.state.lightProbeGridArray),te.currentProgram=dt,te.uniformsList=null,dt}function cl(R,H,le,te,se){let We=Me.get(R),et=We.currentProgram.id+","+te+","+se,Ge=We.programVariants.get(et);return Ge===void 0?(Ge=ns(R,H,le),We.programVariants.set(et,Ge)):(We.currentProgram=Ge,We.uniformsList=null,We.outputColorSpace=te,We.toneMapping=se),Ge}function Fo(R){if(R.uniformsList===null){let H=R.currentProgram.getUniforms();R.uniformsList=Mo.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function Bo(R,H){let le=Me.get(R);le.outputColorSpace=H.outputColorSpace,le.batching=H.batching,le.batchingColor=H.batchingColor,le.instancing=H.instancing,le.instancingColor=H.instancingColor,le.instancingMorph=H.instancingMorph,le.skinning=H.skinning,le.morphTargets=H.morphTargets,le.morphNormals=H.morphNormals,le.morphColors=H.morphColors,le.morphTargetsCount=H.morphTargetsCount,le.numClippingPlanes=H.numClippingPlanes,le.numIntersection=H.numClipIntersection,le.vertexAlphas=H.vertexAlphas,le.vertexTangents=H.vertexTangents,le.toneMapping=H.toneMapping}function ul(R,H,le,te,se){H.isScene!==!0&&(H=Ue),Te.resetTextureUnits();let We=H.fog,et=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?H.environment:null,Ge=ye===null?I.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:gt.workingColorSpace,qe=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,tt=C.get(te.envMap||et,qe),lt=te.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,dt=!!le.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Je=!!le.morphAttributes.position,yt=!!le.morphAttributes.normal,Xt=!!le.morphAttributes.color,Tt=ri;te.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Tt=I.toneMapping);let Nt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,jt=Nt!==void 0?Nt.length:0,Qe=Me.get(te),fn=T.state.lights;if(He===!0&&(Ze===!0||R!==V)){let bt=R===V&&te.id===Y;ce.setState(te,R,bt)}let St=!1,Ci=!1;te.version===Qe.__version?Qe.needsLights&&Qe.lightsStateVersion!==fn.state.version||se.isBatchedMesh&&Qe.batching===!1||!se.isBatchedMesh&&Qe.batching===!0||se.isBatchedMesh&&Qe.batchingColor===!0&&se._colorsTexture===null||se.isBatchedMesh&&Qe.batchingColor===!1&&se._colorsTexture!==null||se.isInstancedMesh&&Qe.instancing===!1||!se.isInstancedMesh&&Qe.instancing===!0||se.isSkinnedMesh&&Qe.skinning===!1||!se.isSkinnedMesh&&Qe.skinning===!0||se.isInstancedMesh&&Qe.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&Qe.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&Qe.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&Qe.instancingMorph===!1&&se.morphTexture!==null||Qe.envMap!==tt||te.fog===!0&&Qe.fog!==We||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==ce.numPlanes||Qe.numIntersection!==ce.numIntersection)||Qe.vertexAlphas!==lt||Qe.vertexTangents!==dt||Qe.morphTargets!==Je||Qe.morphNormals!==yt||Qe.morphColors!==Xt||Qe.morphTargetsCount!==jt||Qe.numLightProbeGrids!==ts(T.state.lightProbeGridArray)?St=!0:(Qe.outputColorSpace!==Ge||Qe.toneMapping!==Tt)&&(Ci=!0):(St=!0,Qe.__version=te.version);let Kt=Qe.currentProgram;(St===!0||Ci===!0)&&(Kt=Ci===!0?cl(te,H,se,Ge,Tt):ns(te,H,se),W&&te.isNodeMaterial&&W.onUpdateProgram(te,Kt,Qe));let Qn=!1,Vn=!1,ui=!1,_t=Kt.getUniforms(),Qt=Qe.uniforms;if($.useProgram(Kt.program)&&(Qn=!0,Vn=!0,ui=!0),te.id!==Y&&(Y=te.id,Vn=!0),Qn||V!==R){$.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),_t.setValue(A,"projectionMatrix",R.projectionMatrix),_t.setValue(A,"viewMatrix",R.matrixWorldInverse);let Ft=_t.map.cameraPosition;Ft!==void 0&&Ft.setValue(A,rt.setFromMatrixPosition(R.matrixWorld)),Ee.logarithmicDepthBuffer&&_t.setValue(A,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&_t.setValue(A,"isOrthographic",R.isOrthographicCamera===!0),V!==R&&(V=R,Vn=!0,ui=!0)}if(Qe.needsLights&&(fn.state.sunShadowMap.length>0&&_t.setValue(A,"sunShadowMap",fn.state.sunShadowMap,Te),fn.state.directionalShadowMap.length>0&&_t.setValue(A,"directionalShadowMap",fn.state.directionalShadowMap,Te),fn.state.spotShadowMap.length>0&&_t.setValue(A,"spotShadowMap",fn.state.spotShadowMap,Te),fn.state.pointShadowMap.length>0&&_t.setValue(A,"pointShadowMap",fn.state.pointShadowMap,Te)),se.isSkinnedMesh){_t.setOptional(A,se,"bindMatrix"),_t.setOptional(A,se,"bindMatrixInverse");let bt=se.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),_t.setValue(A,"boneTexture",bt.boneTexture,Te))}se.isBatchedMesh&&(_t.setOptional(A,se,"batchingTexture"),_t.setValue(A,"batchingTexture",se._matricesTexture,Te),_t.setOptional(A,se,"batchingIdTexture"),_t.setValue(A,"batchingIdTexture",se._indirectTexture,Te),_t.setOptional(A,se,"batchingColorTexture"),se._colorsTexture!==null&&_t.setValue(A,"batchingColorTexture",se._colorsTexture,Te));let Gn=le.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&ge.update(se,le,Kt),(Vn||Qe.receiveShadow!==se.receiveShadow)&&(Qe.receiveShadow=se.receiveShadow,_t.setValue(A,"receiveShadow",se.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&H.environment!==null&&(Qt.envMapIntensity.value=H.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=WE()),Vn){if(_t.setValue(A,"toneMappingExposure",I.toneMappingExposure),Qe.needsLights&&hl(Qt,ui),We&&te.fog===!0&&he.refreshFogUniforms(Qt,We),he.refreshMaterialUniforms(Qt,te,pe,ee,T.state.transmissionRenderTarget[R.id]),Qe.needsLights&&Qe.numLightProbeGrids>0){let bt=_,Ft=0;for(let sn of T.state.lightProbeGridArray)sn.texture!==null&&(bt.textures[Ft]=sn.texture,bt.min[Ft]=sn.boundingBox.min,bt.max[Ft]=sn.boundingBox.max,bt.resolution[Ft]=sn.resolution,Ft++);for(let sn in bt)bt[sn].length=Ft;Qt.probesSH.value=bt.textures,Qt.probesMin.value=bt.min,Qt.probesMax.value=bt.max,Qt.probesResolution.value=bt.resolution}Mo.upload(A,Fo(Qe),Qt,Te)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Mo.upload(A,Fo(Qe),Qt,Te),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&_t.setValue(A,"center",se.center),_t.setValue(A,"modelViewMatrix",se.modelViewMatrix),_t.setValue(A,"normalMatrix",se.normalMatrix),_t.setValue(A,"modelMatrix",se.matrixWorld),te.uniformsGroups!==void 0){let bt=te.uniformsGroups;for(let Ft=0,sn=bt.length;Ft<sn;Ft++){let Tr=bt[Ft];Fe.update(Tr,Kt),Fe.bind(Tr,Kt)}}return Kt}function hl(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.sunLights.needsUpdate=H,R.sunLightShadows.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function fl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return ye},this.setRenderTargetTextures=function(R,H,le){let te=Me.get(R);te.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),Me.get(R.texture).__webglTexture=H,Me.get(R.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:le,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,H){let le=Me.get(R);le.__webglFramebuffer=H,le.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,le=0){ye=R,j=H,q=le;let te=null,se=!1,We=!1;if(R){let Ge=Me.get(R);if(Ge.__useDefaultFramebuffer!==void 0){$.bindFramebuffer(A.FRAMEBUFFER,Ge.__webglFramebuffer),Q.copy(R.viewport),be.copy(R.scissor),Re=R.scissorTest,$.viewport(Q),$.scissor(be),$.setScissorTest(Re),Y=-1;return}else if(Ge.__webglFramebuffer===void 0)Te.setupRenderTarget(R);else if(Ge.__hasExternalTextures)Te.rebindTextures(R,Me.get(R.texture).__webglTexture,Me.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let lt=R.depthTexture;if(Ge.__boundDepthTexture!==lt){if(lt!==null&&Me.has(lt)&&(R.width!==lt.image.width||R.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Te.setupDepthRenderbuffer(R)}}let qe=R.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(We=!0);let tt=Me.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(tt[H])?te=tt[H][le]:te=tt[H],se=!0):R.samples>0&&Te.useMultisampledRTT(R)===!1?te=Me.get(R).__webglMultisampledFramebuffer:Array.isArray(tt)?te=tt[le]:te=tt,Q.copy(R.viewport),be.copy(R.scissor),Re=R.scissorTest}else Q.copy(Oe).multiplyScalar(pe).floor(),be.copy(ze).multiplyScalar(pe).floor(),Re=oe;if(le!==0&&(te=k),$.bindFramebuffer(A.FRAMEBUFFER,te)&&$.drawBuffers(R,te),$.viewport(Q),$.scissor(be),$.setScissorTest(Re),se){let Ge=Me.get(R.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ge.__webglTexture,le)}else if(We){let Ge=H;for(let qe=0;qe<R.textures.length;qe++){let tt=Me.get(R.textures[qe]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+qe,tt.__webglTexture,le,Ge)}}else if(R!==null&&le!==0){let Ge=Me.get(R.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ge.__webglTexture,le)}Y=-1};function is(R){let H=Me.get(R);return(H.__readFormat!==R.format||H.__readType!==R.type)&&(H.__readFormat=R.format,H.__readType=R.type,H.__formatReadable=Ee.textureFormatReadable(R.format),H.__typeReadable=Ee.textureTypeReadable(R.type)),H}this.readRenderTargetPixels=function(R,H,le,te,se,We,et,Ge=0){if(!(R&&R.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=Me.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&et!==void 0&&(qe=qe[et],Array.isArray(qe)&&(qe=qe[0])),qe){$.bindFramebuffer(A.FRAMEBUFFER,qe);try{let tt=R.textures[Ge],lt=tt.format,dt=tt.type;R.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ge);let Je=is(tt);if(Je.__formatReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Je.__typeReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-te&&le>=0&&le<=R.height-se&&A.readPixels(H,le,te,se,Pe.convert(lt),Pe.convert(dt),We)}finally{let tt=ye!==null?Me.get(ye).__webglFramebuffer:null;$.bindFramebuffer(A.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(R,H,le,te,se,We,et,Ge=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=Me.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&et!==void 0&&(qe=qe[et],Array.isArray(qe)&&(qe=qe[0])),qe)if(H>=0&&H<=R.width-te&&le>=0&&le<=R.height-se){$.bindFramebuffer(A.FRAMEBUFFER,qe);let tt=R.textures[Ge],lt=tt.format,dt=tt.type;R.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ge);let Je=is(tt);if(Je.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Je.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let yt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,yt),A.bufferData(A.PIXEL_PACK_BUFFER,We.byteLength,A.STREAM_READ),A.readPixels(H,le,te,se,Pe.convert(lt),Pe.convert(dt),0),A.bindBuffer(A.PIXEL_PACK_BUFFER,null);let Xt=ye!==null?Me.get(ye).__webglFramebuffer:null;$.bindFramebuffer(A.FRAMEBUFFER,Xt);let Tt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await rg(A,Tt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,yt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,We),A.bindBuffer(A.PIXEL_PACK_BUFFER,null),A.deleteBuffer(yt),A.deleteSync(Tt),We}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,H=null,le=0){let te=Math.pow(2,-le),se=Math.floor(R.image.width*te),We=Math.floor(R.image.height*te),et=H!==null?H.x:0,Ge=H!==null?H.y:0;Te.setTexture2D(R,0),A.copyTexSubImage2D(A.TEXTURE_2D,le,0,0,et,Ge,se,We),$.unbindTexture()},this.copyTextureToTexture=function(R,H,le=null,te=null,se=0,We=0){let et,Ge,qe,tt,lt,dt,Je,yt,Xt,Tt=R.isCompressedTexture?R.mipmaps[We]:R.image;if(le!==null)et=le.max.x-le.min.x,Ge=le.max.y-le.min.y,qe=le.isBox3?le.max.z-le.min.z:1,tt=le.min.x,lt=le.min.y,dt=le.isBox3?le.min.z:0;else{let _t=Math.pow(2,-se);et=Math.floor(Tt.width*_t),Ge=Math.floor(Tt.height*_t),R.isDataArrayTexture?qe=Tt.depth:R.isData3DTexture?qe=Math.floor(Tt.depth*_t):qe=1,tt=0,lt=0,dt=0}te!==null?(Je=te.x,yt=te.y,Xt=te.z):(Je=0,yt=0,Xt=0);let Nt=Pe.convert(H.format),jt=Pe.convert(H.type),Qe;H.isData3DTexture?(Te.setTexture3D(H,0),Qe=A.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Te.setTexture2DArray(H,0),Qe=A.TEXTURE_2D_ARRAY):(Te.setTexture2D(H,0),Qe=A.TEXTURE_2D),$.activeTexture(A.TEXTURE0),$.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,H.flipY),$.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),$.pixelStorei(A.UNPACK_ALIGNMENT,H.unpackAlignment);let fn=$.getParameter(A.UNPACK_ROW_LENGTH),St=$.getParameter(A.UNPACK_IMAGE_HEIGHT),Ci=$.getParameter(A.UNPACK_SKIP_PIXELS),Kt=$.getParameter(A.UNPACK_SKIP_ROWS),Qn=$.getParameter(A.UNPACK_SKIP_IMAGES);$.pixelStorei(A.UNPACK_ROW_LENGTH,Tt.width),$.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Tt.height),$.pixelStorei(A.UNPACK_SKIP_PIXELS,tt),$.pixelStorei(A.UNPACK_SKIP_ROWS,lt),$.pixelStorei(A.UNPACK_SKIP_IMAGES,dt);let Vn=R.isDataArrayTexture||R.isData3DTexture,ui=H.isDataArrayTexture||H.isData3DTexture;if(R.isDepthTexture){let _t=Me.get(R),Qt=Me.get(H),Gn=Me.get(_t.__renderTarget),bt=Me.get(Qt.__renderTarget);$.bindFramebuffer(A.READ_FRAMEBUFFER,Gn.__webglFramebuffer),$.bindFramebuffer(A.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Ft=0;Ft<qe;Ft++)Vn&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Me.get(R).__webglTexture,se,dt+Ft),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Me.get(H).__webglTexture,We,Xt+Ft)),A.blitFramebuffer(tt,lt,tt+et,lt+Ge,Je,yt,Je+et,yt+Ge,A.DEPTH_BUFFER_BIT,A.NEAREST);$.bindFramebuffer(A.READ_FRAMEBUFFER,null),$.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(se!==0||R.isRenderTargetTexture||Me.has(R)){let _t=Me.get(R),Qt=Me.get(H);$.bindFramebuffer(A.READ_FRAMEBUFFER,N),$.bindFramebuffer(A.DRAW_FRAMEBUFFER,G);for(let Gn=0;Gn<qe;Gn++)Vn?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_t.__webglTexture,se,dt+Gn):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,_t.__webglTexture,se),ui?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Qt.__webglTexture,We,Xt+Gn):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Qt.__webglTexture,We),se!==0?A.blitFramebuffer(tt,lt,tt+et,lt+Ge,Je,yt,Je+et,yt+Ge,A.COLOR_BUFFER_BIT,A.NEAREST):ui?A.copyTexSubImage3D(Qe,We,Je,yt,Xt+Gn,tt,lt,et,Ge):A.copyTexSubImage2D(Qe,We,Je,yt,tt,lt,et,Ge);$.bindFramebuffer(A.READ_FRAMEBUFFER,null),$.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else ui?R.isDataTexture||R.isData3DTexture?A.texSubImage3D(Qe,We,Je,yt,Xt,et,Ge,qe,Nt,jt,Tt.data):H.isCompressedArrayTexture?A.compressedTexSubImage3D(Qe,We,Je,yt,Xt,et,Ge,qe,Nt,Tt.data):A.texSubImage3D(Qe,We,Je,yt,Xt,et,Ge,qe,Nt,jt,Tt):R.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,We,Je,yt,et,Ge,Nt,jt,Tt.data):R.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,We,Je,yt,Tt.width,Tt.height,Nt,Tt.data):A.texSubImage2D(A.TEXTURE_2D,We,Je,yt,et,Ge,Nt,jt,Tt);$.pixelStorei(A.UNPACK_ROW_LENGTH,fn),$.pixelStorei(A.UNPACK_IMAGE_HEIGHT,St),$.pixelStorei(A.UNPACK_SKIP_PIXELS,Ci),$.pixelStorei(A.UNPACK_SKIP_ROWS,Kt),$.pixelStorei(A.UNPACK_SKIP_IMAGES,Qn),We===0&&H.generateMipmaps===!0&&H.mipmapsAutoUpdate===!0&&A.generateMipmap(Qe),$.unbindTexture()},this.initRenderTarget=function(R){Me.get(R).__webglFramebuffer===void 0&&Te.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Te.setTextureCube(R,0):R.isData3DTexture?Te.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Te.setTexture2DArray(R,0):Te.setTexture2D(R,0),$.unbindTexture()},this.resetState=function(){j=0,q=0,ye=null,$.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}};function Wg(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Ot;l.morphTargetsRelative=a;let c=0;for(let u=0;u<n.length;++u){let h=n[u],f=0,d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(h.morphAttributes[p].length!==n[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0,h=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let p=0;p<d.count;++p)h.push(d.getX(p)+u);u+=n[f].attributes.position.count}l.setIndex(h)}for(let u in r){let h=Gg(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let x=0;x<o[u].length;++x)d.push(o[u][x][f]);let p=Gg(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}}return l}function Gg(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new Bt(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let f=0,d=u.count;f<d;f++)for(let p=0;p<t;p++){let x=u.getComponent(f,p);a.setComponent(f+h,p,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function Gf(n,e){if(e===_f)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===bo||e===za){let t=n.getIndex();if(t===null){let r=[],o=n.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);n.setIndex(r),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===bo)for(let r=1;r<=i;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),n.setIndex(s),n.clearGroups(),n}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function Xg(n){let e=new Map,t=new Map,i=n.clone();return qg(n,i,function(s,r){e.set(r,s),t.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),i}function qg(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)qg(n.children[i],e.children[i],t)}var vu=class extends zi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Kf(t)}),this.register(function(t){return new Jf(t)}),this.register(function(t){return new jf(t)}),this.register(function(t){return new ad(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new cd(t)}),this.register(function(t){return new ed(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new nd(t)}),this.register(function(t){return new id(t)}),this.register(function(t){return new Zf(t)}),this.register(function(t){return new sd(t)}),this.register(function(t){return new Qf(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new rd(t)}),this.register(function(t){return new $f(t)}),this.register(function(t){return new bu(t,xt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new bu(t,xt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new ud(t)})}load(e,t,i,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=bs.extractUrlBase(e);o=bs.resolveURL(c,this.path)}else o=bs.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ho(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Jg){try{o[xt.KHR_BINARY_GLTF]=new hd(e)}catch(h){s&&s(h);return}r=JSON.parse(o[xt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new yd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case xt.KHR_MATERIALS_UNLIT:o[h]=new Yf;break;case xt.KHR_DRACO_MESH_COMPRESSION:o[h]=new fd(r,this.dracoLoader);break;case xt.KHR_TEXTURE_TRANSFORM:o[h]=new dd;break;case xt.KHR_MESH_QUANTIZATION:o[h]=new pd;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function XE(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function $t(n,e,t){let i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}var xt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},$f=class{constructor(e){this.parser=e,this.name=xt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new je(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Bn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Hs(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new fr(u),c.distance=h;break;case"spot":c=new Sa(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Gi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}},Yf=class{constructor(){this.name=xt.KHR_MATERIALS_UNLIT}getMaterialType(){return nn}extendParams(e,t,i){let s=[];e.color=new je(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Bn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,At))}return Promise.all(s)}},Zf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=$t(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},Kf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return $t(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let i=$t(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ye(r,r)}return Promise.all(s)}},Jf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return $t(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let i=$t(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return t.diffuseRoughness=i.diffuseRoughnessFactor!==void 0?i.diffuseRoughnessFactor:0,i.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",i.diffuseRoughnessTexture)),Promise.all(s)}},jf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return $t(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let i=$t(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},Qf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return $t(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let i=$t(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(s)}},ed=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SHEEN}getMaterialType(e){return $t(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let i=$t(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(t.sheenColor=new je(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Bn)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,At)),i.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(s)}},td=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return $t(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let i=$t(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(s)}},nd=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_VOLUME}getMaterialType(e){return $t(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let i=$t(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let r=i.attenuationColor||[1,1,1];return t.attenuationColor=new je().setRGB(r[0],r[1],r[2],Bn),Promise.all(s)}},id=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IOR}getMaterialType(e){return $t(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let i=$t(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},sd=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return $t(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let i=$t(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let r=i.specularColorFactor||[1,1,1];return t.specularColor=new je().setRGB(r[0],r[1],r[2],Bn),i.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,At)),Promise.all(s)}},rd=class{constructor(e){this.parser=e,this.name=xt.EXT_MATERIALS_BUMP}getMaterialType(e){return $t(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let i=$t(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(s)}},od=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return $t(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let i=$t(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(s)}},ad=class{constructor(e){this.parser=e,this.name=xt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},ld=class{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}},cd=class{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}},bu=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}},ud=class{constructor(e){this.name=xt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let c of s.primitives)if(c.mode!==ai.TRIANGLES&&c.mode!==ai.TRIANGLE_STRIP&&c.mode!==ai.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(let p of h){let x=new at,m=new P,g=new qt,v=new P(1,1,1),b=new ur(p.geometry,p.material,f);for(let w=0;w<f;w++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,w),l.SCALE&&v.fromBufferAttribute(l.SCALE,w),b.setMatrixAt(w,x.compose(m,g,v));let _=null;for(let w in l)if(w==="_COLOR_0"){let T=l[w];b.instanceColor=new ds(T.array,T.itemSize,T.normalized)}else if(w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"){if(_===null){let y=b.geometry;_=new Ot,_.name=y.name;for(let E in y.attributes)_.setAttribute(E,y.attributes[E]);for(let E in y.morphAttributes)_.morphAttributes[E]=y.morphAttributes[E];y.index!==null&&_.setIndex(y.index),_.morphTargetsRelative=y.morphTargetsRelative;for(let E of y.groups)_.addGroup(E.start,E.count,E.materialIndex);y.boundingBox!==null&&(_.boundingBox=y.boundingBox.clone()),y.boundingSphere!==null&&(_.boundingSphere=y.boundingSphere.clone()),_.drawRange.start=y.drawRange.start,_.drawRange.count=y.drawRange.count,_.userData=Object.assign({},y.userData),b.geometry=_}let T=l[w];_.setAttribute(w,new ds(T.array,T.itemSize,T.normalized))}Ht.prototype.copy.call(b,p),this.parser.assignFinalMaterial(b),d.push(b)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},Jg="glTF",qa=12,$g={JSON:1313821514,BIN:5130562},hd=class{constructor(e){this.name=xt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,qa),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Jg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-qa,r=new DataView(e,qa),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===$g.JSON){let c=new Uint8Array(e,qa+o,a);this.content=i.decode(c)}else if(l===$g.BIN){let c=qa+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},fd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=xt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=gd[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=gd[u]||u.toLowerCase();if(o[u]!==void 0){let f=i.accessors[e.attributes[u]],d=wo[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(let p in d.attributes){let x=d.attributes[p],m=l[p];m!==void 0&&(x.normalized=m)}h(d)},a,c,Bn,f)})})}},dd=class{constructor(){this.name=xt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let i=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},pd=class{constructor(){this.name=xt.KHR_MESH_QUANTIZATION}},Mu=class extends Bi{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(i-t)/u,f=h*h,d=f*h,p=e*c,x=p-c,m=-2*d+3*f,g=d-f,v=1-m,b=g-f+h;for(let _=0;_!==a;_++){let w=o[x+_+a],T=o[x+_+l]*u,y=o[p+_+a],E=o[p+_]*u;r[_]=v*w+b*T+m*y+g*E}return r}},qE=new qt,md=class extends Mu{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return qE.fromArray(r).normalize().toArray(r),r}},ai={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},wo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Yg={9728:Gt,9729:Wt,9984:Pc,9985:_o,9986:pr,9987:oi},Zg={33071:ti,33648:eo,10497:gi},Wf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},gd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Zs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},$E={CUBICSPLINE:void 0,LINEAR:lr,STEP:ar},Xf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function YE(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Pn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Kn})),n.DefaultMaterial}function xr(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Gi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ZE(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(i){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(s){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function KE(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function JE(n){let e,t=n.extensions&&n.extensions[xt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+qf(t.attributes):e=n.indices+":"+qf(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+qf(n.targets[i]);return e}function qf(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function xd(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function jE(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var QE=new at,yd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new XE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?(this.textureLoader=new ba(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Ta(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ho(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return xr(r,a,s),Gi(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[xt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){i.load(bs.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Wf[s.type],a=wo[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Bt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Wf[s.type],c=wo[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,x,m;if(d&&d!==h){let g=Math.floor(f/d),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,b=t.cache.get(v);b||(x=new c(a,g*d,s.count*d/u),b=new Bs(x,d/u),t.cache.add(v,b)),m=new Rn(b,l,f%d/u,p)}else a===null?x=new c(s.count*l):x=new c(a,f,s.count*l),m=new Bt(x,l,p);if(s.sparse!==void 0){let g=Wf.SCALAR,v=wo[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,w=new v(o[1],b,s.sparse.count*g),T=new c(o[2],_,s.sparse.count*l);a!==null&&(m=new Bt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let y=0,E=w.length;y<E;y++){let D=w[y];if(m.setX(D,T[y*l]),l>=2&&m.setY(D,T[y*l+1]),l>=3&&m.setZ(D,T[y*l+2]),l>=4&&m.setW(D,T[y*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return u.magFilter=Yg[f.magFilter]||Wt,u.minFilter=Yg[f.minFilter]||oi,u.wrapS=Zg[f.wrapS]||gi,u.wrapT=Zg[f.wrapT]||gi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Gt&&u.minFilter!==Wt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,u;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)u=i.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(d,p){t.parse(f,d,p)})});else{if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(f){c=!0;let d=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(l).then(function(f){return new Promise(function(d,p){let x=d;t.isImageBitmapLoader===!0&&(x=function(m){let g=new an(m);g.needsUpdate=!0,d(g)}),t.load(bs.resolveURL(f,r.path),x,void 0,p)})})}let h=u.then(function(f){return c===!0&&a.revokeObjectURL(l),Gi(f,o),f.userData.mimeType=o.mimeType||jE(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[xt.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[xt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[xt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new uo,Cn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new ps,Cn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Pn}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],o,a={},l=r.extensions||{},c=[];if(l[xt.KHR_MATERIALS_UNLIT]){let h=s[xt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new je(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Bn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,At)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Dt);let u=r.alphaMode||Xf.OPAQUE;if(u===Xf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Xf.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==nn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ye(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==nn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==nn){let h=r.emissiveFactor;a.emissive=new je().setRGB(h[0],h[1],h[2],Bn)}return r.emissiveTexture!==void 0&&o!==nn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,At)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),Gi(h,r),t.associations.set(h,{materials:e}),r.extensions&&xr(s,h,r),h})}createUniqueName(e){let t=It.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[xt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Kg(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=JE(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[xt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Kg(new Ot,c,t),c.mode===ai.TRIANGLE_STRIP?f=f.then(d=>Gf(d,za)):c.mode===ai.TRIANGLE_FAN&&(f=f.then(d=>Gf(d,bo))),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?YE(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,p=u.length;d<p;d++){let x=u[d],m=o[d],g,v=c[d];if(m.mode===ai.TRIANGLES||m.mode===ai.TRIANGLE_STRIP||m.mode===ai.TRIANGLE_FAN||m.mode===void 0){let b=r.isSkinnedMesh===!0,_=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");b&&_===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=b&&_?new aa(x,v):new pt(x,v),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===ai.LINES)g=new ca(x,v);else if(m.mode===ai.LINE_STRIP)g=new Ui(x,v);else if(m.mode===ai.LINE_LOOP)g=new ua(x,v);else if(m.mode===ai.POINTS)g=new ha(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&KE(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Gi(g,r),m.extensions&&xr(s,g,m),t.assignFinalMaterial(g),h.push(g)}for(let d=0,p=h.length;d<p;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&xr(s,h[0],r),h[0];let f=new zt;r.extensions&&xr(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,p=h.length;d<p;d++)f.add(h[d]);return f})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new on(Ys.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new yi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Gi(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new at;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new la(a,l)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){let d=s.channels[h],p=s.samplers[d.sampler],x=d.target,m=x.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,v=s.parameters!==void 0?s.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",v)),c.push(p),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],p=h[2],x=h[3],m=h[4],g=[];for(let b=0,_=f.length;b<_;b++){let w=f[b],T=d[b],y=p[b],E=x[b],D=m[b];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let I=i._createAnimationTracks(w,T,y,E,D);if(I)for(let z=0;z<I.length;z++)g.push(I[z])}let v=new va(r,void 0,g);return Gi(v,s),v})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,QE)});for(let d=0,p=h.length;d<p;d++)u.add(h[d]);if(u.userData.pivot!==void 0&&h.length>0){let d=u.userData.pivot,p=h[0];u.pivot=new P().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],p.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new lo:c.length>1?u=new zt:c.length===1?u=c[0]:u=new Ht,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Gi(u,r),r.extensions&&xr(i,u,r),r.matrix!==void 0){let h=new at;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new zt;i.name&&(r.name=s.createUniqueName(i.name)),Gi(r,i),i.extensions&&xr(t,r,i);let o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++){let f=l[u];f.parent!==null?r.add(Xg(f)):r.add(f)}let c=u=>{let h=new Map;for(let[f,d]of s.associations)(f instanceof Cn||f instanceof an)&&h.set(f,d);return u.traverse(f=>{let d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}Zs[r.path]===Zs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(Zs[r.path]){case Zs.weights:u=ys;break;case Zs.rotation:u=_s;break;case Zs.translation:case Zs.scale:u=ks;break;default:i.itemSize===1?u=ys:u=ks;break}let h=s.interpolation!==void 0?$E[s.interpolation]:lr,f=this._getArrayFromAccessor(i);for(let d=0,p=l.length;d<p;d++){let x=new u(l[d]+"."+Zs[r.path],t.array,f,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=xd(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof _s?md:Mu;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function ew(n,e,t){let i=e.attributes,s=new Vt;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),a.normalized){let u=xd(wo[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new P,l=new P;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){let x=xd(wo[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;let o=new xn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Kg(n,e,t){let i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(let o in i){let a=gd[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return gt.workingColorSpace!==Bn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${gt.workingColorSpace}" not supported.`),Gi(n,e),ew(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?ZE(n,e.targets,t):n})}var jg={type:"change"},vd={type:"start"},e0={type:"end"},Su=new Oi,Qg=new gn,tw=Math.cos(70*Ys.DEG2RAD),hn=new P,$n=2*Math.PI,Rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_d=1e-6,Eu=class extends Ra{constructor(e,t=null){super(e,t),this.state=Rt.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ws.ROTATE,MIDDLE:Ws.DOLLY,RIGHT:Ws.PAN},this.touches={ONE:Xs.ROTATE,TWO:Xs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new qt,this._lastTargetPosition=new P,this._quat=new qt().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Gs,this._sphericalDelta=new Gs,this._scale=1,this._panOffset=new P,this._rotateStart=new Ye,this._rotateEnd=new Ye,this._rotateDelta=new Ye,this._panStart=new Ye,this._panEnd=new Ye,this._panDelta=new Ye,this._dollyStart=new Ye,this._dollyEnd=new Ye,this._dollyDelta=new Ye,this._dollyDirection=new P,this._mouse=new Ye,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=iw.bind(this),this._onPointerDown=nw.bind(this),this._onPointerUp=sw.bind(this),this._onContextMenu=hw.bind(this),this._onMouseWheel=aw.bind(this),this._onKeyDown=lw.bind(this),this._onTouchStart=cw.bind(this),this._onTouchMove=uw.bind(this),this._onMouseDown=rw.bind(this),this._onMouseMove=ow.bind(this),this._interceptControlDown=fw.bind(this),this._interceptControlUp=dw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Rt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(jg),this.update(),this.state=Rt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;hn.copy(t).sub(this.target),hn.applyQuaternion(this._quat),this._spherical.setFromVector3(hn),this.autoRotate&&this.state===Rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=$n:i>Math.PI&&(i-=$n),s<-Math.PI?s+=$n:s>Math.PI&&(s-=$n),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(hn.setFromSpherical(this._spherical),hn.applyQuaternion(this._quatInverse),t.copy(this.target).add(hn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=hn.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=hn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Su.origin.copy(this.object.position),Su.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Su.direction))<tw?this.object.lookAt(this.target):(Qg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Su.intersectPlane(Qg,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>_d||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_d||this._lastTargetPosition.distanceToSquared(this.target)>_d?(this.dispatchEvent(jg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?$n/60*this.autoRotateSpeed*e:$n/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){hn.setFromMatrixColumn(t,0),hn.multiplyScalar(-e),this._panOffset.add(hn)}_panUp(e,t){this.screenSpacePanning===!0?hn.setFromMatrixColumn(t,1):(hn.setFromMatrixColumn(t,0),hn.crossVectors(this.object.up,hn)),hn.multiplyScalar(e),this._panOffset.add(hn)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;hn.copy(s).sub(this.target);let r=hn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft($n*this._rotateDelta.x/t.clientHeight),this._rotateUp($n*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp($n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-$n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft($n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-$n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft($n*this._rotateDelta.x/t.clientHeight),this._rotateUp($n*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ye,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function nw(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function iw(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function sw(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(e0),this.state=Rt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function rw(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ws.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Rt.DOLLY;break;case Ws.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Rt.ROTATE}break;case Ws.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Rt.PAN}break;default:this.state=Rt.NONE}this.state!==Rt.NONE&&this.dispatchEvent(vd)}function ow(n){switch(this.state){case Rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function aw(n){this.enabled===!1||this.enableZoom===!1||this.state!==Rt.NONE||(n.preventDefault(),this.dispatchEvent(vd),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(e0))}function lw(n){this.enabled!==!1&&this._handleKeyDown(n)}function cw(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Xs.ROTATE:if(this.enableRotate===!1){this.state=Rt.NONE;break}this._handleTouchStartRotate(n),this.state=Rt.TOUCH_ROTATE;break;case Xs.PAN:if(this.enablePan===!1){this.state=Rt.NONE;break}this._handleTouchStartPan(n),this.state=Rt.TOUCH_PAN;break;default:this.state=Rt.NONE}break;case 2:switch(this.touches.TWO){case Xs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Rt.TOUCH_DOLLY_PAN;break;case Xs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Rt.TOUCH_DOLLY_ROTATE;break;default:this.state=Rt.NONE}break;default:this.state=Rt.NONE}this.state!==Rt.NONE&&this.dispatchEvent(vd)}function uw(n){switch(this._trackPointer(n),this.state){case Rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Rt.NONE}}function hw(n){this.enabled!==!1&&n.preventDefault()}function fw(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function dw(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var wu=class extends zn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Fi;e.deleteAttribute("uv");let t=new Pn({side:vn}),i=new Pn,s=new fr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new pt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new ur(e,i,6),a=new Ht;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new pt(e,To(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new pt(e,To(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new pt(e,To(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new pt(e,To(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let f=new pt(e,To(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new pt(e,To(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function To(n){return new ya({color:0,emissive:16777215,emissiveIntensity:n})}var Dn=Uint8Array,Jn=Uint16Array,Td=Int32Array,Ad=new Dn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Rd=new Dn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),t0=new Dn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a0=function(n,e){for(var t=new Jn(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var s=new Td(t[30]),i=1;i<30;++i)for(var r=t[i];r<t[i+1];++r)s[r]=r-t[i]<<5|i;return{b:t,r:s}},l0=a0(Ad,2),pw=l0.b,Md=l0.r;pw[28]=258,Md[258]=28;var c0=a0(Rd,0),TP=c0.b,n0=c0.r,Sd=new Jn(32768);for(Ct=0;Ct<32768;++Ct)Ss=(Ct&43690)>>1|(Ct&21845)<<1,Ss=(Ss&52428)>>2|(Ss&13107)<<2,Ss=(Ss&61680)>>4|(Ss&3855)<<4,Sd[Ct]=((Ss&65280)>>8|(Ss&255)<<8)>>1;var Ss,Ct,Za=(function(n,e,t){for(var i=n.length,s=0,r=new Jn(e);s<i;++s)n[s]&&++r[n[s]-1];var o=new Jn(e);for(s=1;s<e;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(t){a=new Jn(1<<e);var l=15-e;for(s=0;s<i;++s)if(n[s])for(var c=s<<4|n[s],u=e-n[s],h=o[n[s]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[Sd[h]>>l]=c}else for(a=new Jn(i),s=0;s<i;++s)n[s]&&(a[s]=Sd[o[n[s]-1]++]>>15-n[s]);return a}),yr=new Dn(288);for(Ct=0;Ct<144;++Ct)yr[Ct]=8;var Ct;for(Ct=144;Ct<256;++Ct)yr[Ct]=9;var Ct;for(Ct=256;Ct<280;++Ct)yr[Ct]=7;var Ct;for(Ct=280;Ct<288;++Ct)yr[Ct]=8;var Ct,Tu=new Dn(32);for(Ct=0;Ct<32;++Ct)Tu[Ct]=5;var Ct,mw=Za(yr,9,0);var gw=Za(Tu,5,0);var u0=function(n){return(n+7)/8|0},h0=function(n,e,t){return(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length),new Dn(n.subarray(e,t))};var xw=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Au=function(n,e,t){var i=new Error(e||xw[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,Au),!t)throw i;return i};var Es=function(n,e,t){t<<=e&7;var i=e/8|0;n[i]|=t,n[i+1]|=t>>8},$a=function(n,e,t){t<<=e&7;var i=e/8|0;n[i]|=t,n[i+1]|=t>>8,n[i+2]|=t>>16},bd=function(n,e){for(var t=[],i=0;i<n.length;++i)n[i]&&t.push({s:i,f:n[i]});var s=t.length,r=t.slice();if(!s)return{t:d0,l:0};if(s==1){var o=new Dn(t[0].s+1);return o[t[0].s]=1,{t:o,l:1}}t.sort(function(w,T){return w.f-T.f}),t.push({s:-1,f:25001});var a=t[0],l=t[1],c=0,u=1,h=2;for(t[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=s-1;)a=t[t[c].f<t[h].f?c++:h++],l=t[c!=u&&t[c].f<t[h].f?c++:h++],t[u++]={s:-1,f:a.f+l.f,l:a,r:l};for(var f=r[0].s,i=1;i<s;++i)r[i].s>f&&(f=r[i].s);var d=new Jn(f+1),p=Ed(t[u-1],d,0);if(p>e){var i=0,x=0,m=p-e,g=1<<m;for(r.sort(function(T,y){return d[y.s]-d[T.s]||T.f-y.f});i<s;++i){var v=r[i].s;if(d[v]>e)x+=g-(1<<p-d[v]),d[v]=e;else break}for(x>>=m;x>0;){var b=r[i].s;d[b]<e?x-=1<<e-d[b]++-1:++i}for(;i>=0&&x;--i){var _=r[i].s;d[_]==e&&(--d[_],++x)}p=e}return{t:new Dn(d),l:p}},Ed=function(n,e,t){return n.s==-1?Math.max(Ed(n.l,e,t+1),Ed(n.r,e,t+1)):e[n.s]=t},i0=function(n){for(var e=n.length;e&&!n[--e];);for(var t=new Jn(++e),i=0,s=n[0],r=1,o=function(l){t[i++]=l},a=1;a<=e;++a)if(n[a]==s&&a!=e)++r;else{if(!s&&r>2){for(;r>138;r-=138)o(32754);r>2&&(o(r>10?r-11<<5|28690:r-3<<5|12305),r=0)}else if(r>3){for(o(s),--r;r>6;r-=6)o(8304);r>2&&(o(r-3<<5|8208),r=0)}for(;r--;)o(s);r=1,s=n[a]}return{c:t.subarray(0,i),n:e}},Ya=function(n,e){for(var t=0,i=0;i<e.length;++i)t+=n[i]*e[i];return t},f0=function(n,e,t){var i=t.length,s=u0(e+2);n[s]=i&255,n[s+1]=i>>8,n[s+2]=n[s]^255,n[s+3]=n[s+1]^255;for(var r=0;r<i;++r)n[s+r+4]=t[r];return(s+4+i)*8},s0=function(n,e,t,i,s,r,o,a,l,c,u){Es(e,u++,t),++s[256];for(var h=bd(s,15),f=h.t,d=h.l,p=bd(r,15),x=p.t,m=p.l,g=i0(f),v=g.c,b=g.n,_=i0(x),w=_.c,T=_.n,y=new Jn(19),E=0;E<v.length;++E)++y[v[E]&31];for(var E=0;E<w.length;++E)++y[w[E]&31];for(var D=bd(y,7),I=D.t,z=D.l,W=19;W>4&&!I[t0[W-1]];--W);var k=c+5<<3,N=Ya(s,yr)+Ya(r,Tu)+o,G=Ya(s,f)+Ya(r,x)+o+14+3*W+Ya(y,I)+2*y[16]+3*y[17]+7*y[18];if(l>=0&&k<=N&&k<=G)return f0(e,u,n.subarray(l,l+c));var j,q,ye,Y;if(Es(e,u,1+(G<N)),u+=2,G<N){j=Za(f,d,0),q=f,ye=Za(x,m,0),Y=x;var V=Za(I,z,0);Es(e,u,b-257),Es(e,u+5,T-1),Es(e,u+10,W-4),u+=14;for(var E=0;E<W;++E)Es(e,u+3*E,I[t0[E]]);u+=3*W;for(var Q=[v,w],be=0;be<2;++be)for(var Re=Q[be],E=0;E<Re.length;++E){var K=Re[E]&31;Es(e,u,V[K]),u+=I[K],K>15&&(Es(e,u,Re[E]>>5&127),u+=Re[E]>>12)}}else j=mw,q=yr,ye=gw,Y=Tu;for(var E=0;E<a;++E){var ae=i[E];if(ae>255){var K=ae>>18&31;$a(e,u,j[K+257]),u+=q[K+257],K>7&&(Es(e,u,ae>>23&31),u+=Ad[K]);var B=ae&31;$a(e,u,ye[B]),u+=Y[B],B>3&&($a(e,u,ae>>5&8191),u+=Rd[B])}else $a(e,u,j[ae]),u+=q[ae]}return $a(e,u,j[256]),u+q[256]},yw=new Td([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),d0=new Dn(0),_w=function(n,e,t,i,s,r){var o=r.z||n.length,a=new Dn(i+o+5*(1+Math.ceil(o/7e3))+s),l=a.subarray(i,a.length-s),c=r.l,u=(r.r||0)&7;if(e){u&&(l[0]=r.r>>3);for(var h=yw[e-1],f=h>>13,d=h&8191,p=(1<<t)-1,x=r.p||new Jn(32768),m=r.h||new Jn(p+1),g=Math.ceil(t/3),v=2*g,b=function(we){return(n[we]^n[we+1]<<g^n[we+2]<<v)&p},_=new Td(25e3),w=new Jn(288),T=new Jn(32),y=0,E=0,D=r.i||0,I=0,z=r.w||0,W=0;D+2<o;++D){var k=b(D),N=D&32767,G=m[k];if(x[N]=G,m[k]=N,z<=D){var j=o-D;if((y>7e3||I>24576)&&(j>423||!c)){u=s0(n,l,0,_,w,T,E,I,W,D-W,u),I=y=E=0,W=D;for(var q=0;q<286;++q)w[q]=0;for(var q=0;q<30;++q)T[q]=0}var ye=2,Y=0,V=d,Q=N-G&32767;if(j>2&&k==b(D-Q))for(var be=Math.min(f,j)-1,Re=Math.min(32767,D),K=Math.min(258,j);Q<=Re&&--V&&N!=G;){if(n[D+ye]==n[D+ye-Q]){for(var ae=0;ae<K&&n[D+ae]==n[D+ae-Q];++ae);if(ae>ye){if(ye=ae,Y=Q,ae>be)break;for(var B=Math.min(Q,ae-2),ee=0,q=0;q<B;++q){var pe=D-Q+q&32767,Se=x[pe],$e=pe-Se&32767;$e>ee&&(ee=$e,G=pe)}}}N=G,G=x[N],Q+=N-G&32767}if(Y){_[I++]=268435456|Md[ye]<<18|n0[Y];var Oe=Md[ye]&31,ze=n0[Y]&31;E+=Ad[Oe]+Rd[ze],++w[257+Oe],++T[ze],z=D+ye,++y}else _[I++]=n[D],++w[n[D]]}}for(D=Math.max(D,z);D<o;++D)_[I++]=n[D],++w[n[D]];u=s0(n,l,c,_,w,T,E,I,W,D-W,u),c||(r.r=u&7|l[u/8|0]<<3,u-=7,r.h=m,r.p=x,r.i=D,r.w=z)}else{for(var D=r.w||0;D<o+c;D+=65535){var oe=D+65535;oe>=o&&(l[u/8|0]=c,oe=o),u=f0(l,u+1,n.subarray(D,oe))}r.i=o}return h0(a,0,i+u0(u)+s)},vw=(function(){for(var n=new Int32Array(256),e=0;e<256;++e){for(var t=e,i=9;--i;)t=(t&1&&-306674912)^t>>>1;n[e]=t}return n})(),bw=function(){var n=-1;return{p:function(e){for(var t=n,i=0;i<e.length;++i)t=vw[t&255^e[i]]^t>>>8;n=t},d:function(){return~n}}};var Mw=function(n,e,t,i,s){if(!s&&(s={l:1},e.dictionary)){var r=e.dictionary.subarray(-32768),o=new Dn(r.length+n.length);o.set(r),o.set(n,r.length),n=o,s.w=r.length}return _w(n,e.level==null?6:e.level,e.mem==null?s.l?Math.ceil(Math.max(8,Math.min(13,Math.log(n.length)))*1.5):20:12+e.mem,t,i,s)},p0=function(n,e){var t={};for(var i in n)t[i]=n[i];for(var i in e)t[i]=e[i];return t};var Mn=function(n,e,t){for(;t;++e)n[e]=t,t>>>=8};function Sw(n,e){return Mw(n,e||{},0,0)}var m0=function(n,e,t,i){for(var s in n){var r=n[s],o=e+s,a=i;Array.isArray(r)&&(a=p0(i,r[1]),r=r[0]),ArrayBuffer.isView(r)?t[o]=[r,a]:(t[o+="/"]=[new Dn(0),a],m0(r,o,t,i))}},r0=typeof TextEncoder<"u"&&new TextEncoder,Ew=typeof TextDecoder<"u"&&new TextDecoder,ww=0;try{Ew.decode(d0,{stream:!0}),ww=1}catch{}function Ka(n,e){if(e){for(var t=new Dn(n.length),i=0;i<n.length;++i)t[i]=n.charCodeAt(i);return t}if(r0)return r0.encode(n);for(var s=n.length,r=new Dn(n.length+(n.length>>1)),o=0,a=function(u){r[o++]=u},i=0;i<s;++i){if(o+5>r.length){var l=new Dn(o+8+(s-i<<1));l.set(r),r=l}var c=n.charCodeAt(i);c<128||e?a(c):c<2048?(a(192|c>>6),a(128|c&63)):c>55295&&c<57344?(c=65536+(c&1047552)|n.charCodeAt(++i)&1023,a(240|c>>18),a(128|c>>12&63),a(128|c>>6&63),a(128|c&63)):(a(224|c>>12),a(128|c>>6&63),a(128|c&63))}return h0(r,0,o)}var wd=function(n){var e=0;if(n)for(var t in n){var i=n[t].length;i>65535&&Au(9),e+=i+4}return e},o0=function(n,e,t,i,s,r,o,a){var l=i.length,c=t.extra,u=a&&a.length,h=wd(c);Mn(n,e,o!=null?33639248:67324752),e+=4,o!=null&&(n[e++]=20,n[e++]=t.os),n[e]=20,e+=2,n[e++]=t.flag<<1|(r<0&&8),n[e++]=s&&8,n[e++]=t.compression&255,n[e++]=t.compression>>8;var f=new Date(t.mtime==null?Date.now():t.mtime),d=f.getFullYear()-1980;if((d<0||d>119)&&Au(10),Mn(n,e,d<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),e+=4,r!=-1&&(Mn(n,e,t.crc),Mn(n,e+4,r<0?-r-2:r),Mn(n,e+8,t.size)),Mn(n,e+12,l),Mn(n,e+14,h),e+=16,o!=null&&(Mn(n,e,u),Mn(n,e+6,t.attrs),Mn(n,e+10,o),e+=14),n.set(i,e),e+=l,h)for(var p in c){var x=c[p],m=x.length;Mn(n,e,+p),Mn(n,e+2,m),n.set(x,e+4),e+=4+m}return u&&(n.set(a,e),e+=u),e},Tw=function(n,e,t,i,s){Mn(n,e,101010256),Mn(n,e+8,t),Mn(n,e+10,t),Mn(n,e+12,i),Mn(n,e+16,s)};function g0(n,e){e||(e={});var t={},i=[];m0(n,"",t,e);var s=0,r=0;for(var o in t){var a=t[o],l=a[0],c=a[1],u=c.level==0?0:8,h=Ka(o),f=h.length,d=c.comment,p=d&&Ka(d),x=p&&p.length,m=wd(c.extra);f>65535&&Au(11);var g=u?Sw(l,c):l,v=g.length,b=bw();b.p(l),i.push(p0(c,{size:l.length,crc:b.d(),c:g,f:h,m:p,u:f!=o.length||p&&d.length!=x,o:s,compression:u})),s+=30+f+m+v,r+=76+2*(f+m)+(x||0)+v}for(var _=new Dn(r+22),w=s,T=r-s,y=0;y<i.length;++y){var h=i[y];o0(_,h.o,h,h.f,h.u,h.c.length);var E=30+h.f.length+wd(h.extra);_.set(h.c,h.o+E),o0(_,s,h,h.f,h.u,h.c.length,h.o,h.m),s+=16+E+(h.m?h.m.length:0)}return Tw(_,s,i.length,T,w),_}var Nn=class{constructor(e,t="",i=[],s=[]){this.name=e,this.type=t,this.metadata=i,this.properties=s,this.children=[]}addMetadata(e,t){this.metadata.push({key:e,value:t})}addProperty(e,t=[]){this.properties.push({property:e,metadata:t})}addChild(e){this.children.push(e)}toString(e=0){let t="	".repeat(e),i=this.metadata.map(u=>{let h=u.key,f=u.value;if(Array.isArray(f)){let d=[];return d.push(`${h} = {`),f.forEach(p=>{d.push(`${t}		${p}`)}),d.push(`${t}	}`),d.join(`
`)}else return`${h} = ${f}`}),s=i.length?` (
${i.map(u=>`${t}	${u}`).join(`
`)}
${t})`:"",r=this.properties.map(u=>{let h=u.property.replace(/\n/g,`
`+t+"	"),f=u.metadata.length?` (
${u.metadata.map(d=>`${t}		${d}`).join(`
`)}
${t}	)`:"";return`${t}	${h}${f}`}),o=this.children.map(u=>u.toString(e+1)),a=[];if(r.length>0&&a.push(...r),o.length>0){r.length>0&&a.push("");for(let u=0;u<o.length;u++)a.push(o[u]),u<o.length-1&&a.push("")}let l=a.join(`
`),c=this.type?this.type+" ":"";return`${t}def ${c}"${this.name}"${s}
${t}{
${l}
${t}}`}},Cu=class{constructor(){this.textureUtils=null}setTextureUtils(e){this.textureUtils=e}parse(e,t,i,s){this.parseAsync(e,s).then(t).catch(i)}async parseAsync(e,t={}){t=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},includeAnchoringProperties:!0,onlyVisible:!0,quickLookCompatible:!1,maxTextureSize:1024,animations:[],animationFrameRate:60},t);let i=new Set,s={},r="model.usda";s[r]=null;let o=Rw(e,t.animations);t.animationTracks=o;let a=new Nn("Root","Xform"),l=new Nn("Scenes","Scope");l.addMetadata("kind",'"sceneLibrary"'),a.addChild(l);let c="Scene",u=new Nn(c,"Xform");u.addMetadata("customData",["bool preliminary_collidesWithEnvironment = 0",`string sceneName = "${c}"`]),u.addMetadata("sceneName",`"${c}"`),t.includeAnchoringProperties&&(u.addProperty(`token preliminary:anchoring:type = "${t.ar.anchoring.type}"`),u.addProperty(`token preliminary:planeAnchoring:alignment = "${t.ar.planeAnchoring.alignment}"`)),l.addChild(u);let h,f={},d={};e.isScene?S0(e,u,f,i,s,t):E0(e,u,f,i,s,t);let p=Fw(f,d,t.quickLookCompatible),x=o.size>0?{fps:t.animationFrameRate,endTimeCode:Cw(t.animations)*t.animationFrameRate}:null;h=M0(x)+`
`+a.toString()+`

`+p.toString(),s[r]=Ka(h),h=null;for(let g in d){let v=d[g];if(v.isCompressedTexture===!0){if(this.textureUtils===null)throw new Error("THREE.USDZExporter: setTextureUtils() must be called to process compressed textures.");v=await this.textureUtils.decompress(v)}let b=Aw(v.image,v.flipY,t.maxTextureSize),_=v.userData.mimeType==="image/jpeg"?"image/jpeg":"image/png",w=await new Promise(T=>b.toBlob(T,_));s[`textures/Texture_${g}.${b0(v)}`]=new Uint8Array(await w.arrayBuffer())}let m=0;for(let g in s){let v=s[g],b=34+g.length;m+=b;let _=m&63;if(_!==4){let w=64-_,T=new Uint8Array(w);s[g]=[v,{extra:{12345:T}}]}m=v.length}return g0(s,{level:0,mtime:new Date})}};function v0(n,e){let t=n.name;return t=t.replace(/[^A-Za-z0-9_]/g,""),/^[0-9]/.test(t)&&(t="_"+t),t===""&&(n.isCamera?t="Camera":t="Object"),e.has(t)&&(t=t+"_"+n.id),e.add(t),t}function b0(n){return n.userData.mimeType==="image/jpeg"?"jpg":"png"}function Aw(n,e,t){if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&n instanceof ImageBitmap){let i=t/Math.max(n.width,n.height),s=document.createElement("canvas");s.width=n.width*Math.min(1,i),s.height=n.height*Math.min(1,i);let r=s.getContext("2d");return e===!0&&(r.translate(0,s.height),r.scale(1,-1)),r.drawImage(n,0,0,s.width,s.height),s}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}var vt=7;function M0(n=null){return`#usda 1.0
(
	customLayerData = {
		string creator = "Three.js USDZExporter"
	}
	defaultPrim = "Root"
	metersPerUnit = 1
	upAxis = "Y"${n?`
	startTimeCode = 0
	endTimeCode = ${n.endTimeCode}
	timeCodesPerSecond = ${n.fps}
	framesPerSecond = ${n.fps}`:""}
)
`}function Rw(n,e){let t=new Map;for(let i=0;i<e.length;i++){let s=e[i];for(let r=0;r<s.tracks.length;r++){let o=s.tracks[r],a=It.parseTrackName(o.name),l=It.findNode(n,a.nodeName);if(l==null)continue;let c=a.propertyName;if(c!=="position"&&c!=="quaternion"&&c!=="scale")continue;let u=t.get(l);u===void 0&&(u={},t.set(l,u)),u[c]=o}}return t}function Cw(n){let e=0;for(let t=0;t<n.length;t++)n[t].duration>e&&(e=n[t].duration);return e}function x0(n,e,t,i){let s=t.times,r=t.values,o=[];for(let a=0;a<s.length;a++){let l=a*3;o.push(`${(s[a]*i).toPrecision(vt)}: (${r[l].toPrecision(vt)}, ${r[l+1].toPrecision(vt)}, ${r[l+2].toPrecision(vt)})`)}return`${e} ${n}.timeSamples = {
	${o.join(`,
	`)},
}`}function Pw(n,e){let t=n.times,i=n.values,s=[];for(let r=0;r<t.length;r++){let o=r*4;s.push(`${(t[r]*e).toPrecision(vt)}: (${i[o+3].toPrecision(vt)}, ${i[o].toPrecision(vt)}, ${i[o+1].toPrecision(vt)}, ${i[o+2].toPrecision(vt)})`)}return`quatf xformOp:orient.timeSamples = {
	${s.join(`,
	`)},
}`}function S0(n,e,t,i,s,r){for(let o=0,a=n.children.length;o<a;o++)E0(n.children[o],e,t,i,s,r)}function E0(n,e,t,i,s,r){if(n.visible===!1&&r.onlyVisible===!0)return;let o;if(n.isMesh){let a=n.geometry,l=Array.isArray(n.material),c=l?n.material:[n.material];for(let h=0;h<c.length;h++){let f=c[h];f.isMeshStandardMaterial||console.warn("THREE.USDZExporter: Use MeshStandardMaterial for best results."),f.uuid in t||(t[f.uuid]=f)}let u=c.map(h=>t[h.uuid]);if(l===!1){let h=`geometries/Geometry_${a.id}.usda`;if(!(h in s)){let f=Dw(a);s[h]=Ka(M0()+`
`+f.toString())}}o=Iw(n,a,u,i,r)}else n.isCamera?o=kw(n,i,r):o=T0(n,i,r);e.addChild(o),S0(n,o,t,i,s,r)}function w0(n,e,t){let i=t.animationTracks.get(e),s=e.pivot!==null;if(!s&&i===void 0){let c=Lw(e.matrix);n.addProperty(`matrix4d xformOp:transform = ${c}`),n.addProperty('uniform token[] xformOpOrder = ["xformOp:transform"]');return}let r=t.animationFrameRate,o=e.position,a=e.quaternion,l=e.scale;if(i!==void 0&&i.position!==void 0?n.addProperty(x0("xformOp:translate","float3",i.position,r)):n.addProperty(`float3 xformOp:translate = (${o.x.toPrecision(vt)}, ${o.y.toPrecision(vt)}, ${o.z.toPrecision(vt)})`),s){let c=e.pivot;n.addProperty(`float3 xformOp:translate:pivot = (${c.x.toPrecision(vt)}, ${c.y.toPrecision(vt)}, ${c.z.toPrecision(vt)})`)}i!==void 0&&i.quaternion!==void 0?n.addProperty(Pw(i.quaternion,r)):n.addProperty(`quatf xformOp:orient = (${a.w.toPrecision(vt)}, ${a.x.toPrecision(vt)}, ${a.y.toPrecision(vt)}, ${a.z.toPrecision(vt)})`),i!==void 0&&i.scale!==void 0?n.addProperty(x0("xformOp:scale","float3",i.scale,r)):n.addProperty(`float3 xformOp:scale = (${l.x.toPrecision(vt)}, ${l.y.toPrecision(vt)}, ${l.z.toPrecision(vt)})`),s?n.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:translate:pivot", "xformOp:orient", "xformOp:scale", "!invert!xformOp:translate:pivot"]'):n.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:orient", "xformOp:scale"]')}function T0(n,e,t){let i=v0(n,e);n.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",n);let s=new Nn(i,"Xform");return w0(s,n,t),s}function Iw(n,e,t,i,s){let r=T0(n,i,s);return t.length===1?(r.addMetadata("prepend references",`@./geometries/Geometry_${e.id}.usda@</Geometry>`),r.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),r.addProperty(`rel material:binding = </Materials/Material_${t[0].id}>`)):r.addChild(A0(e,t)),r}function Lw(n){let e=n.elements;return`( ${Ru(e,0)}, ${Ru(e,4)}, ${Ru(e,8)}, ${Ru(e,12)} )`}function Ru(n,e){return`(${n[e+0]}, ${n[e+1]}, ${n[e+2]}, ${n[e+3]})`}function Dw(n){let e=new Nn("Geometry"),t=A0(n);return e.addChild(t),e}function A0(n,e=null){let t="Geometry",i=n.attributes,s=i.position.count,r=new Nn(t,"Mesh");r.addProperty(`int[] faceVertexCounts = [${Nw(n)}]`),r.addProperty(`int[] faceVertexIndices = [${Ow(n)}]`),r.addProperty(`normal3f[] normals = [${Cd(i.normal,s)}]`,['interpolation = "vertex"']),r.addProperty(`point3f[] points = [${Cd(i.position,s)}]`);for(let a=0;a<4;a++){let l=a>0?a:"",c=i["uv"+l];c!==void 0&&r.addProperty(`texCoord2f[] primvars:st${l} = [${Uw(c)}]`,['interpolation = "vertex"'])}let o=i.color;if(o!==void 0&&r.addProperty(`color3f[] primvars:displayColor = [${Cd(o,s)}]`,['interpolation = "vertex"']),r.addProperty('uniform token subdivisionScheme = "none"'),e!==null){let a=n.groups,l=(n.index!==null?n.index.count:i.position.count)/3;for(let c=0;c<a.length;c++){let u=a[c],h=e[u.materialIndex];if(h===void 0)continue;let f=Math.floor(u.start/3),d=Math.min(f+Math.floor(u.count/3),l),p=[];for(let m=f;m<d;m++)p.push(m);let x=new Nn(`subset_${c}`,"GeomSubset");x.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),x.addProperty('uniform token elementType = "face"'),x.addProperty('uniform token familyName = "materialBind"'),x.addProperty(`int[] indices = [${p.join(", ")}]`),x.addProperty(`rel material:binding = </Materials/Material_${h.id}>`),r.addChild(x)}}return r}function Nw(n){let e=n.index!==null?n.index.count:n.attributes.position.count;return Array(e/3).fill(3).join(", ")}function Ow(n){let e=n.index,t=[];if(e!==null)for(let i=0;i<e.count;i++)t.push(e.getX(i));else{let i=n.attributes.position.count;for(let s=0;s<i;s++)t.push(s)}return t.join(", ")}function Cd(n,e){if(n===void 0)return console.warn("USDZExporter: Normals missing."),Array(e).fill("(0, 0, 0)").join(", ");let t=[];for(let i=0;i<n.count;i++){let s=n.getX(i),r=n.getY(i),o=n.getZ(i);t.push(`(${s.toPrecision(vt)}, ${r.toPrecision(vt)}, ${o.toPrecision(vt)})`)}return t.join(", ")}function Uw(n){let e=[];for(let t=0;t<n.count;t++){let i=n.getX(t),s=n.getY(t);e.push(`(${i.toPrecision(vt)}, ${1-s.toPrecision(vt)})`)}return e.join(", ")}function Fw(n,e,t=!1){let i=new Nn("Materials");for(let s in n){let r=n[s];i.addChild(Bw(r,e,t))}return i}function Bw(n,e,t=!1){let i=new Nn(`Material_${n.id}`,"Material");function s(o,a,l){let c=o.source.id+"_"+o.flipY;e[c]=o;let u=o.channel>0?"st"+o.channel:"st",h={1e3:"repeat",1001:"clamp",1002:"mirror"},f=o.repeat.clone(),d=o.offset.clone(),p=o.rotation,x=Math.sin(p),m=Math.cos(p);d.y=1-d.y-f.y,t?(d.x=d.x/f.x,d.y=d.y/f.y,d.x+=x/f.x,d.y+=m-1):(d.x+=x*f.x,d.y+=(1-m)*f.y);let g=new Nn(`PrimvarReader_${a}`,"Shader");g.addProperty('uniform token info:id = "UsdPrimvarReader_float2"'),g.addProperty("float2 inputs:fallback = (0.0, 0.0)"),g.addProperty(`string inputs:varname = "${u}"`),g.addProperty("float2 outputs:result");let v=new Nn(`Transform2d_${a}`,"Shader");v.addProperty('uniform token info:id = "UsdTransform2d"'),v.addProperty(`float2 inputs:in.connect = </Materials/Material_${n.id}/PrimvarReader_${a}.outputs:result>`),v.addProperty(`float inputs:rotation = ${(p*(180/Math.PI)).toFixed(vt)}`),v.addProperty(`float2 inputs:scale = ${_0(f)}`),v.addProperty(`float2 inputs:translation = ${_0(d)}`),v.addProperty("float2 outputs:result");let b=new Nn(`Texture_${o.id}_${a}`,"Shader");if(b.addProperty('uniform token info:id = "UsdUVTexture"'),b.addProperty(`asset inputs:file = @textures/Texture_${c}.${b0(o)}@`),b.addProperty(`float2 inputs:st.connect = </Materials/Material_${n.id}/Transform2d_${a}.outputs:result>`),l!==void 0){let _=a==="diffuse"?n.opacity:1;b.addProperty(`float4 inputs:scale = ${zw(l,_)}`)}if(a==="normal"){let _=n.normalScale.x;b.addProperty(`float4 inputs:scale = (${2*_}, ${2*_}, 2, 1)`),b.addProperty(`float4 inputs:bias = (${-_}, ${-_}, -1, 0)`)}return b.addProperty(`token inputs:sourceColorSpace = "${o.colorSpace===Mi?"raw":"sRGB"}"`),b.addProperty(`token inputs:wrapS = "${h[o.wrapS]}"`),b.addProperty(`token inputs:wrapT = "${h[o.wrapT]}"`),b.addProperty("float outputs:r"),b.addProperty("float outputs:g"),b.addProperty("float outputs:b"),b.addProperty("float3 outputs:rgb"),(n.transparent||n.alphaTest>0)&&b.addProperty("float outputs:a"),[g,v,b]}n.side===Dt&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",n);let r=new Nn("PreviewSurface","Shader");if(r.addProperty('uniform token info:id = "UsdPreviewSurface"'),n.map!==null?(r.addProperty(`color3f inputs:diffuseColor.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:rgb>`),n.transparent?r.addProperty(`float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:a>`):n.alphaTest>0&&(r.addProperty(`float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:a>`),r.addProperty(`float inputs:opacityThreshold = ${n.alphaTest}`)),s(n.map,"diffuse",n.color).forEach(a=>i.addChild(a))):r.addProperty(`color3f inputs:diffuseColor = ${y0(n.color)}`),n.emissive){let o=n.emissiveIntensity??1;if(n.emissiveMap){r.addProperty(`color3f inputs:emissiveColor.connect = </Materials/Material_${n.id}/Texture_${n.emissiveMap.id}_emissive.outputs:rgb>`);let a=new je(n.emissive.r*o,n.emissive.g*o,n.emissive.b*o);s(n.emissiveMap,"emissive",a).forEach(c=>i.addChild(c))}else n.emissive.getHex()>0&&r.addProperty(`color3f inputs:emissiveColor = ${y0(n.emissive)}`)}if(n.normalMap&&(r.addProperty(`normal3f inputs:normal.connect = </Materials/Material_${n.id}/Texture_${n.normalMap.id}_normal.outputs:rgb>`),s(n.normalMap,"normal").forEach(a=>i.addChild(a))),n.aoMap){r.addProperty(`float inputs:occlusion.connect = </Materials/Material_${n.id}/Texture_${n.aoMap.id}_occlusion.outputs:r>`);let o=n.aoMapIntensity??1,a=new je(o,o,o);s(n.aoMap,"occlusion",a).forEach(c=>i.addChild(c))}if(n.roughnessMap){r.addProperty(`float inputs:roughness.connect = </Materials/Material_${n.id}/Texture_${n.roughnessMap.id}_roughness.outputs:g>`);let o=new je(n.roughness,n.roughness,n.roughness);s(n.roughnessMap,"roughness",o).forEach(l=>i.addChild(l))}else r.addProperty(`float inputs:roughness = ${n.roughness??1}`);if(n.metalnessMap){r.addProperty(`float inputs:metallic.connect = </Materials/Material_${n.id}/Texture_${n.metalnessMap.id}_metallic.outputs:b>`);let o=new je(n.metalness,n.metalness,n.metalness);s(n.metalnessMap,"metallic",o).forEach(l=>i.addChild(l))}else r.addProperty(`float inputs:metallic = ${n.metalness??0}`);if(n.alphaMap?(r.addProperty(`float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.alphaMap.id}_opacity.outputs:r>`),r.addProperty("float inputs:opacityThreshold = 0.0001"),s(n.alphaMap,"opacity").forEach(a=>i.addChild(a))):r.addProperty(`float inputs:opacity = ${n.opacity}`),n.isMeshPhysicalMaterial){if(n.clearcoatMap!==null){r.addProperty(`float inputs:clearcoat.connect = </Materials/Material_${n.id}/Texture_${n.clearcoatMap.id}_clearcoat.outputs:r>`);let o=new je(n.clearcoat,n.clearcoat,n.clearcoat);s(n.clearcoatMap,"clearcoat",o).forEach(l=>i.addChild(l))}else r.addProperty(`float inputs:clearcoat = ${n.clearcoat}`);if(n.clearcoatRoughnessMap!==null){r.addProperty(`float inputs:clearcoatRoughness.connect = </Materials/Material_${n.id}/Texture_${n.clearcoatRoughnessMap.id}_clearcoatRoughness.outputs:g>`);let o=new je(n.clearcoatRoughness,n.clearcoatRoughness,n.clearcoatRoughness);s(n.clearcoatRoughnessMap,"clearcoatRoughness",o).forEach(l=>i.addChild(l))}else r.addProperty(`float inputs:clearcoatRoughness = ${n.clearcoatRoughness}`);r.addProperty(`float inputs:ior = ${n.ior}`)}return r.addProperty("int inputs:useSpecularWorkflow = 0"),r.addProperty("token outputs:surface"),i.addChild(r),i.addProperty(`token outputs:surface.connect = </Materials/Material_${n.id}/PreviewSurface.outputs:surface>`),i}function y0(n){return`(${n.r}, ${n.g}, ${n.b})`}function zw(n,e=1){return`(${n.r}, ${n.g}, ${n.b}, ${e})`}function _0(n){return`(${n.x}, ${n.y})`}function kw(n,e,t){let i=v0(n,e);n.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",n);let s=new Nn(i,"Camera");w0(s,n,t);let r=n.isOrthographicCamera?"orthographic":"perspective";s.addProperty(`token projection = "${r}"`);let o=`(${n.near.toPrecision(vt)}, ${n.far.toPrecision(vt)})`;s.addProperty(`float2 clippingRange = ${o}`);let a;n.isOrthographicCamera?a=((Math.abs(n.left)+Math.abs(n.right))*10).toPrecision(vt):a=n.getFilmWidth().toPrecision(vt),s.addProperty(`float horizontalAperture = ${a}`);let l;if(n.isOrthographicCamera?l=((Math.abs(n.top)+Math.abs(n.bottom))*10).toPrecision(vt):l=n.getFilmHeight().toPrecision(vt),s.addProperty(`float verticalAperture = ${l}`),n.isPerspectiveCamera){let c=n.getFocalLength().toPrecision(vt);s.addProperty(`float focalLength = ${c}`);let u=n.focus.toPrecision(vt);s.addProperty(`float focusDistance = ${u}`)}return s}var R0=new Vt,Pu=new P,Ei=class extends wa{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new kt(e,3)),this.setAttribute("uv",new kt(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new Vs(t,6,1);return this.setAttribute("instanceStart",new Rn(i,3,0)),this.setAttribute("instanceEnd",new Rn(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new Vs(t,6,1);return this.setAttribute("instanceColorStart",new Rn(i,3,0)),this.setAttribute("instanceColorEnd",new Rn(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new xa(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vt);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),R0.setFromBufferAttribute(t),this.boundingBox.union(R0))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xn),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Pu.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Pu)),Pu.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Pu));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Xe.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ye},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Hn.line={uniforms:Ha.merge([Xe.common,Xe.fog,Xe.line]),vertexShader:`
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
		`};var Wi=class extends yn{constructor(e){super({type:"LineMaterial",uniforms:Ha.clone(Hn.line.uniforms),vertexShader:Hn.line.vertexShader,fragmentShader:Hn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Pd=new Mt,C0=new P,P0=new P,Sn=new Mt,En=new Mt,Xi=new Mt,Id=new P,Ld=new at,wn=new Aa,I0=new P,Iu=new Vt,Lu=new xn,qi=new Mt,$i,_r;function L0(n,e,t){return qi.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),qi.multiplyScalar(1/qi.w),qi.x=_r/t.width,qi.y=_r/t.height,qi.applyMatrix4(n.projectionMatrixInverse),qi.multiplyScalar(1/qi.w),Math.abs(Math.max(qi.x,qi.y))}function Hw(n,e){let t=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,o=Math.min(i.instanceCount,s.count);for(let a=0,l=o;a<l;a++){wn.start.fromBufferAttribute(s,a),wn.end.fromBufferAttribute(r,a),wn.applyMatrix4(t);let c=new P,u=new P;$i.distanceSqToSegment(wn.start,wn.end,u,c),u.distanceTo(c)<_r*.5&&e.push({point:u,pointOnLine:c,distance:$i.origin.distanceTo(u),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function Vw(n,e,t){let i=e.projectionMatrix,r=n.material.resolution,o=n.matrixWorld,a=n.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),h=-e.near;$i.at(1,Xi),Xi.w=1,Xi.applyMatrix4(e.matrixWorldInverse),Xi.applyMatrix4(i),Xi.multiplyScalar(1/Xi.w),Xi.x*=r.x/2,Xi.y*=r.y/2,Xi.z=0,Id.copy(Xi),Ld.multiplyMatrices(e.matrixWorldInverse,o);for(let f=0,d=u;f<d;f++){if(Sn.fromBufferAttribute(l,f),En.fromBufferAttribute(c,f),Sn.w=1,En.w=1,Sn.applyMatrix4(Ld),En.applyMatrix4(Ld),Sn.z>h&&En.z>h)continue;if(Sn.z>h){let b=Sn.z-En.z,_=(Sn.z-h)/b;Sn.lerp(En,_)}else if(En.z>h){let b=En.z-Sn.z,_=(En.z-h)/b;En.lerp(Sn,_)}Sn.applyMatrix4(i),En.applyMatrix4(i),Sn.multiplyScalar(1/Sn.w),En.multiplyScalar(1/En.w),Sn.x*=r.x/2,Sn.y*=r.y/2,En.x*=r.x/2,En.y*=r.y/2,wn.start.copy(Sn),wn.start.z=0,wn.end.copy(En),wn.end.z=0;let x=wn.closestPointToPointParameter(Id,!0);wn.at(x,I0);let m=Ys.lerp(Sn.z,En.z,x),g=m>=-1&&m<=1,v=Id.distanceTo(I0)<_r*.5;if(g&&v){wn.start.fromBufferAttribute(l,f),wn.end.fromBufferAttribute(c,f),wn.start.applyMatrix4(o),wn.end.applyMatrix4(o);let b=new P,_=new P;$i.distanceSqToSegment(wn.start,wn.end,_,b),t.push({point:_,pointOnLine:b,distance:$i.origin.distanceTo(_),object:n,face:null,faceIndex:f,uv:null,uv1:null})}}}var Ks=class extends pt{constructor(e=new Ei,t=new Wi({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)C0.fromBufferAttribute(t,o),P0.fromBufferAttribute(i,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+C0.distanceTo(P0);let r=new Vs(s,2,1);return e.setAttribute("instanceDistanceStart",new Rn(r,1,0)),e.setAttribute("instanceDistanceEnd",new Rn(r,1,1)),this}raycast(e,t){let i=this.material.worldUnits,s=e.camera;if(s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),i===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;$i=e.ray;let o=this.matrixWorld,a=this.geometry,l=this.material;_r=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Lu.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=_r*.5;else{let h=Math.max(s.near,Lu.distanceToPoint($i.origin));c=L0(s,h,l.resolution)}if(Lu.radius+=c,$i.intersectsSphere(Lu)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Iu.copy(a.boundingBox).applyMatrix4(o);let u;if(i)u=_r*.5;else{let h=Math.max(s.near,Iu.distanceToPoint($i.origin));u=L0(s,h,l.resolution)}Iu.expandByScalar(u),$i.intersectsBox(Iu)!==!1&&(i?Hw(this,t):Vw(this,s,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Pd),this.material.uniforms.resolution.value.set(Pd.z,Pd.w))}};var O0="blueprints.edgeMode",Gw="blueprints.edgesEnabled",vr="none",br="transparent",ja="opaque",Ww=20,U0=2.5,F0=0,Nu=35e-5,Nd=2e-6;function Xw(n){let t=(Array.isArray(n?.material)?n.material[0]:n?.material)?.userData?.layerDepthBias??0;return(Number(t)+1)*Nd}var Ja=1,B0=3,qw=.0012,$w=.0036,Yw=.02,Zw=.0035,D0=.012;function N0(n){return n===vr||n===br||n===ja?n:n==="1"||n==="true"?br:n==="0"||n==="false"?vr:null}function z0(){try{let n=N0(localStorage.getItem(O0));if(n)return n;let e=N0(localStorage.getItem(Gw));if(e)return Ud(e),e}catch{}return br}function Ud(n){try{localStorage.setItem(O0,n)}catch{}}function On(n){return!!(n&&n.userData&&n.userData.isEdgeOverlay)}function k0(n){let e=n?.getAttribute?.("position");if(!e||!e.count)return new Float32Array(0);let t=new ma(n,Ww),i=t.getAttribute("position"),s=i&&i.array?i.array instanceof Float32Array?i.array.slice():Float32Array.from(i.array):new Float32Array(0);return t.dispose(),s}function Kw(n,e){if(!e.length)return n;if(!n.length)return e;let t=new Float32Array(n.length+e.length);return t.set(n,0),t.set(e,n.length),t}var Du=new P;function H0(n){let e=[];for(let t=0;t+5<n.length;t+=6){let i=n[t],s=n[t+1],r=n[t+2],o=n[t+3],a=n[t+4],l=n[t+5],c=o-i,u=a-s,h=l-r,f=Math.hypot(c,u,h);f<1e-6||e.push({ax:i,ay:s,az:r,bx:o,by:a,bz:l,dx:c/f,dy:u/f,dz:h/f,len:f})}return e}function Jw(n,e,t,i,s,r){let o=d=>Math.round(d/5e-4),a=o(n),l=o(e),c=o(t),u=o(i),h=o(s),f=o(r);if(a>u||a===u&&l>h||a===u&&l===h&&c>f){let d=a;a=u,u=d;let p=l;l=h,h=p;let x=c;c=f,f=x}return`${a},${l},${c},${u},${h},${f}`}function V0(n){let e=H0(n),t=[],i=new Set;for(let s=0;s<e.length;s++){let r=e[s];for(let o=s+1;o<e.length;o++){let a=e[o];if(Math.abs(r.dx*a.dx+r.dy*a.dy+r.dz*a.dz)<.985)continue;let c=r.ax-a.ax,u=r.ay-a.ay,h=r.az-a.az,f=c*r.dx+u*r.dy+h*r.dz,d=c-f*r.dx,p=u-f*r.dy,x=h-f*r.dz,m=Math.hypot(d,p,x);if(m<qw||m>$w)continue;let g=(a.ax-r.ax)*r.dx+(a.ay-r.ay)*r.dy+(a.az-r.az)*r.dz,v=(a.bx-r.ax)*r.dx+(a.by-r.ay)*r.dy+(a.bz-r.az)*r.dz,b=Math.max(0,Math.min(g,v)),_=Math.min(r.len,Math.max(g,v));if(_-b<Yw)continue;let w=-d/m*(m*.5),T=-p/m*(m*.5),y=-x/m*(m*.5),E=r.ax+r.dx*b+w,D=r.ay+r.dy*b+T,I=r.az+r.dz*b+y,z=r.ax+r.dx*_+w,W=r.ay+r.dy*_+T,k=r.az+r.dz*_+y,N=Jw(E,D,I,z,W,k);i.has(N)||(i.add(N),t.push(E,D,I,z,W,k))}}return new Float32Array(t)}function jw(n){let e=n.getAttribute("position"),t=n.getIndex(),i=0,s=0,r=0,o=t?t.count:e.count,a=c=>{let u=t?t.getX(c):c;return[e.getX(u),e.getY(u),e.getZ(u)]};for(let c=0;c+2<o;c+=3){let u=a(c),h=a(c+1),f=a(c+2),d=h[0]-u[0],p=h[1]-u[1],x=h[2]-u[2],m=f[0]-u[0],g=f[1]-u[1],v=f[2]-u[2];i+=p*v-x*g,s+=x*m-d*v,r+=d*g-p*m}let l=Math.hypot(i,s,r)||1;return{x:i/l,y:s/l,z:r/l}}function Qw(n,e){let t=n.getAttribute("position"),i,s,r;Math.abs(e.z)<.9?(i=-e.y,s=e.x,r=0):(i=0,s=-e.z,r=e.y);let o=Math.hypot(i,s,r)||1;i/=o,s/=o,r/=o;let a=e.y*r-e.z*s,l=e.z*i-e.x*r,c=e.x*s-e.y*i,u=1/0,h=-1/0,f=1/0,d=-1/0;for(let p=0;p<t.count;p++){let x=t.getX(p),m=t.getY(p),g=t.getZ(p),v=x*i+m*s+g*r,b=x*a+m*l+g*c;v<u&&(u=v),v>h&&(h=v),b<f&&(f=b),b>d&&(d=b)}return Math.min(h-u,d-f)}function e1(n){let e=n.getAttribute("position");if(!e||e.count<3)return!1;let t=jw(n),i=Qw(n,t);return t.z>.5?i>D0:t.z<-.5||(n.boundingBox||n.computeBoundingBox(),n.boundingBox.max.z-n.boundingBox.min.z<.05)?!1:i>D0}function G0(n,e){n.updateWorldMatrix(!0,!1);let t=n.matrixWorld,i=new Float32Array(e.length);for(let s=0;s<e.length;s+=3)Du.set(e[s],e[s+1],e[s+2]).applyMatrix4(t),i[s]=Du.x,i[s+1]=Du.y,i[s+2]=Du.z;return i}function t1(n,e,t){if(!t||t.length<6)return n;let i=G0(e,n),s=H0(t),r=[];for(let o=0;o+5<n.length;o+=6){let a=i[o],l=i[o+1],c=i[o+2],u=i[o+3],h=i[o+4],f=i[o+5],d=u-a,p=h-l,x=f-c,m=Math.hypot(d,p,x);if(m<1e-6)continue;let g=d/m,v=p/m,b=x/m,_=!1;for(let w of s){if(Math.abs(g*w.dx+v*w.dy+b*w.dz)<.95)continue;let y=a-w.ax,E=l-w.ay,D=c-w.az,I=y*w.dx+E*w.dy+D*w.dz,z=y-I*w.dx,W=E-I*w.dy,k=D-I*w.dz;if(Math.hypot(z,W,k)>Zw)continue;let N=(a-w.ax)*w.dx+(l-w.ay)*w.dy+(c-w.az)*w.dz,G=(u-w.ax)*w.dx+(h-w.ay)*w.dy+(f-w.az)*w.dz,j=Math.min(N,G),q=Math.max(N,G);if(Math.min(q,w.len)-Math.max(j,0)>.01){_=!0;break}}_||r.push(n[o],n[o+1],n[o+2],n[o+3],n[o+4],n[o+5])}return new Float32Array(r)}function n1(n,e){if(!n)return;let t=Math.max(0,Math.min(1,Number(e)||0));t<1?(n.transparent=!0,n.opacity=t,n.depthWrite=!1):(n.transparent=!1,n.opacity=1),n.needsUpdate=!0}function i1(n){if(!n?.visible)return 0;let e=Array.isArray(n.material)?n.material[0]:n.material;return e&&e.transparent&&typeof e.opacity=="number"?e.opacity:1}function s1(n,e=br){return e===vr?0:e===ja?n?.visible===!1?0:1:i1(n)}function Od(n,e,t=1,i=Nd){let s=Math.max(0,Math.min(1,Number(t)||0)),r=Number.isFinite(i)?i:Nd,o=new Wi({color:F0,linewidth:U0,worldUnits:!1,toneMapped:!1,depthTest:!0,depthWrite:!1,transparent:s<1,opacity:s<1?s:1,clippingPlanes:n,clipIntersection:!1});return o.onBeforeCompile=a=>{a.vertexShader=a.vertexShader.replace(`vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );`,`vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );
			start.z += ${Nu};
			end.z += ${Nu};`),a.fragmentShader=a.fragmentShader.replace("#include <logdepthbuf_fragment>",`#include <logdepthbuf_fragment>
			#if defined( USE_LOGDEPTHBUF )
				gl_FragDepth -= ${r};
			#else
				gl_FragDepth = gl_FragCoord.z - ${r};
			#endif`)},o.customProgramCacheKey=()=>`bp-edge-depth-bias-r${B0}-${r}-${Nu}`,e&&o.resolution.set(e.x,e.y),o}function W0(n,e,t,i){let s=Math.max(0,Math.min(1,Number(e)||0)),r=Od(t,null,s);r.depthTest=!1,r.depthWrite=!1,r.transparent=!0,r.opacity=s;let o=r.onBeforeCompile?.bind(r),a=r.customProgramCacheKey?.bind(r);r.customProgramCacheKey=()=>`${a?a():"edge"}|peelEdge1`,r.onBeforeCompile=(u,h)=>{o?.(u,h),u.uniforms.uPeelStage=i.stage,u.uniforms.tPrevViewZ=i.prevZ,u.uniforms.tPeelViewZ=i.peelZ,u.uniforms.tOpaqueViewZ=i.opaqueZ,u.uniforms.uViewZEps=i.eps,u.uniforms.uBpPeelRes=i.resolution,u.vertexShader=u.vertexShader.replace("void main() {",`varying float vBpEdgeViewZ;
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
			gl_FragColor = vec4( diffuseColor.rgb, alpha );`)},r.needsUpdate=!0;let l=new Ei;l.setPositions(n);let c=new Ks(l,r);return c.frustumCulled=!1,c.matrixAutoUpdate=!1,c.renderOrder=1e3,c.raycast=()=>{},c.userData.isPeeledEdgeBatch=!0,c}function Ou(n){if(!n)return;n.parent?.remove(n),n.geometry?.dispose?.();let e=n.material;if(Array.isArray(e))for(let t of e)t?.dispose?.();else e?.dispose?.()}function X0(n){if(!n)return;let e=[];n.traverse(t=>{On(t)&&e.push(t)});for(let t of e)Ou(t)}function Js(n,e){n&&n.traverse(t=>{On(t)&&(t.visible=e)})}function q0(n,e,t){if(!n)return;let i=Math.max(1,e),s=Math.max(1,t);n.traverse(r=>{if(!On(r)||!r.material)return;let o=Array.isArray(r.material)?r.material:[r.material];for(let a of o)a?.resolution&&a.resolution.set(i,s)})}function Fd(n,e){if(!n)return;let t=e||[];n.traverse(i=>{if(!On(i)||!i.material)return;let s=Array.isArray(i.material)?i.material:[i.material];for(let r of s){if(!r)continue;let o=r.clippingPlanes?r.clippingPlanes.length:0;r.clippingPlanes=t,r.clipIntersection=!1,o!==t.length&&(r.needsUpdate=!0)}})}function r1(n,e,t){let i=n.userData.bpHardEdgePositions;return i instanceof Float32Array||(i=k0(n.geometry),n.userData.bpHardEdgePositions=i),e==="grout"?V0(i):e==="tile"||e==="floor_tile"||e==="wall_tile"?e1(n.geometry)?t1(i,n,t):new Float32Array(0):i}function o1(n,e,t,i,s){n.updateWorldMatrix(!0,!1);let r=r1(n,i,s),o=Uu(t,n.matrixWorld),a=Y0(n.geometry,o),l=Kw(r,a),c=new Ei,u=e.geometry;l.length>=6?(c.setPositions(l),e.geometry=c,e.computeLineDistances()):e.geometry=c,u?.dispose?.()}function a1(n){let e=[],t=n.get("grout")||[];for(let i of t){if(!i||!i.isMesh||!i.geometry)continue;let s=i.userData.bpHardEdgePositions;s instanceof Float32Array||(s=k0(i.geometry),i.userData.bpHardEdgePositions=s);let r=V0(s);if(r.length<6)continue;let o=G0(i,r);for(let a=0;a<o.length;a++)e.push(o[a])}return new Float32Array(e)}function $0(n,e,t={}){let i=t.clippingPlanes??[],s=t.resolution||null,r=t.edgeMode??br,o=e?a1(n):new Float32Array(0);for(let[a,l]of n)for(let c of l){if(!c||!c.isMesh||!c.geometry||On(c))continue;let u=null;for(let d of c.children)if(On(d)){u=d;break}if(!e){u&&Ou(u);continue}u&&!u.isLineSegments2&&(Ou(u),u=null);let h=s1(c,r),f=Xw(c);if(u){let d=u.material,p=d?.customProgramCacheKey?.(),x=`bp-edge-depth-bias-r${B0}-${f}-${Nu}`;if(!d||typeof d.customProgramCacheKey!="function"||p!==x){Ou(u);let m=Od(i,s,h,f),g=new Ei;u=new Ks(g,m),u.name=`${a}__edges`,u.userData.isEdgeOverlay=!0,u.userData.edgeLabel=a,u.raycast=()=>{},u.renderOrder=1e3,u.layers.set(Ja),c.add(u)}else d.color&&d.color.setHex(F0),typeof d.linewidth=="number"&&(d.linewidth=U0),d.clippingPlanes=i,d.clipIntersection=!1,s&&d.resolution&&d.resolution.set(s.x,s.y),n1(d,h),d.needsUpdate=!0}else{let d=Od(i,s,h,f),p=new Ei;u=new Ks(p,d),u.name=`${a}__edges`,u.userData.isEdgeOverlay=!0,u.userData.edgeLabel=a,u.raycast=()=>{},u.renderOrder=1e3,u.layers.set(Ja),c.add(u)}u.layers.set(Ja),o1(c,u,i,a,o)}}function l1(n){if(!n.isMesh||On(n))return!1;let e=Array.isArray(n.material)?n.material[0]:n.material;return!!(e&&e.transparent&&e.opacity<1-1e-4)}function Bd(n,e,t,i,s={}){if(!i)return;let r=!!s.reuseDepth,o=!1;if(i.traverse(x=>{On(x)&&(o=!0)}),!o){Dd(n);return}let a=n.autoClear,l=e.background,c=e.overrideMaterial,u=t.layers.mask;if(e.background=null,n.autoClear=!1,r){Js(i,!0),t.layers.set(Ja),n.render(e,t),t.layers.mask=u,e.background=l,e.overrideMaterial=c,n.autoClear=a,Dd(n);return}Js(i,!1);let h=[];i.traverse(x=>{!l1(x)||x.visible===!1||(h.push(x),x.visible=!1)});let f=[],d=new Set;e.traverse(x=>{if(!x.isMesh||On(x)||x.visible===!1)return;let m=Array.isArray(x.material)?x.material:[x.material];for(let g of m)!g||d.has(g)||(d.add(g),f.push({mat:g,colorWrite:g.colorWrite!==!1,depthWrite:g.depthWrite!==!1}),g.colorWrite=!1,g.depthWrite=!0)}),e.overrideMaterial=null,n.clearDepth();try{n.render(e,t)}finally{for(let x of f)x.mat.colorWrite=x.colorWrite,x.mat.depthWrite=x.depthWrite;for(let x of h)x.visible=!0}Js(i,!0);let p=[];s.opaqueEdgesOnly&&i.traverse(x=>{if(!On(x))return;let m=Array.isArray(x.material)?x.material[0]:x.material;m&&m.transparent&&m.opacity<1-1e-4&&(p.push(x),x.visible=!1)}),t.layers.set(Ja);try{n.render(e,t)}finally{for(let x of p)x.visible=!0}t.layers.mask=u,e.background=l,e.overrideMaterial=c,n.autoClear=a,Dd(n)}function Dd(n){n.state.buffers.color.setMask(!0),n.state.buffers.depth.setMask(!0)}var Z0=!0,K0=5,Hd=12,c1=Hd,j0=.001,u1=.5,h1=1;function J0(n){let e=String(n.length);for(let t of n){let i=Array.isArray(t.material)?"m":t.material?.id??0;e+=`|${t.id}:${i}:${t.geometry?.id??0}`;let s=t.children;if(s)for(let r=0;r<s.length;r++){let o=s[r];o?.userData?.isEdgeOverlay&&(e+=`>${o.id}:${o.geometry?.id??0}`)}}return e}var Fu=1e5,wi={value:0},Jt={tPrevViewZ:{value:null},tPeelViewZ:{value:null},tOpaqueViewZ:{value:null},uViewZEps:{value:j0},uResolution:{value:new Ye(1,1)}};function zd(n){let e=n?.userData?.shader;if(!e?.uniforms)return;let t=e.uniforms;t.uPeelStage&&(t.uPeelStage.value=wi.value),t.tPrevViewZ&&(t.tPrevViewZ.value=Jt.tPrevViewZ.value),t.tPeelViewZ&&(t.tPeelViewZ.value=Jt.tPeelViewZ.value),t.tOpaqueViewZ&&(t.tOpaqueViewZ.value=Jt.tOpaqueViewZ.value),t.uViewZEps&&(t.uViewZEps.value=Jt.uViewZEps.value),t.uResolution&&t.uResolution.value.copy(Jt.uResolution.value)}function Qa(n){if(!n||n.userData.depthPeelPatched)return;n.userData.depthPeelPatched=!0;let e=n.customProgramCacheKey?.bind(n);n.customProgramCacheKey=()=>`${e?e():n.type}|depthPeel11|${n.defines?.USE_BP_PEEL?1:0}`;let t=n.onBeforeCompile?.bind(n);n.onBeforeCompile=(i,s)=>{t?.(i,s),i.uniforms.uPeelStage=wi,i.uniforms.tPrevViewZ=Jt.tPrevViewZ,i.uniforms.tPeelViewZ=Jt.tPeelViewZ,i.uniforms.tOpaqueViewZ=Jt.tOpaqueViewZ,i.uniforms.uViewZEps=Jt.uViewZEps,i.uniforms.uResolution=Jt.uResolution,n.userData.shader=i,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
#ifdef USE_BP_PEEL
varying float vPeelViewZ;
#endif`),i.vertexShader=i.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
#ifdef USE_BP_PEEL
	vPeelViewZ = -mvPosition.z;
#endif`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
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
			if (peelZ > ${(Fu*.5).toFixed(1)}) discard;
			float peelEps = max(uViewZEps, 1e-3 * max(peelZ, 1.0));
			if (vPeelViewZ > peelZ + peelEps) discard;
		}
	}
#endif`,o="#include <alphahash_fragment>";i.fragmentShader.includes(o)&&(i.fragmentShader=i.fragmentShader.replace(o,`${o}
${r}`)),i.fragmentShader=i.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
#ifdef USE_BP_PEEL
	if (uPeelStage > 0.5 && uPeelStage < 1.5) {
		gl_FragColor = vec4(vPeelViewZ, 0.0, 0.0, 1.0);
	}
#endif`)},n.needsUpdate=!0}function kd(n,e){for(let t of n){if(!t)continue;let i=!!(t.defines&&Object.prototype.hasOwnProperty.call(t.defines,"USE_BP_PEEL"));e!==i&&(t.defines||(t.defines={}),e?t.defines.USE_BP_PEEL="1":delete t.defines.USE_BP_PEEL,t.needsUpdate=!0)}}function Q0(n){let e=new Ye,t=new je,i=null,s=null,r=null,o=null,a=null,l=null,c=new yi(-1,1,1,-1,0,1),u=new zn,h=new yn({uniforms:{tOpaque:{value:null},tAccum:{value:null},uBackground:{value:new je(1118481)}},vertexShader:`
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
    `,depthTest:!1,depthWrite:!1,toneMapped:!1}),f=new pt(new ii(2,2),h);u.add(f);let d=new yn({uniforms:{tSrc:{value:null}},vertexShader:`
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
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:Tc,blendSrc:La,blendDst:qs,blendSrcAlpha:La,blendDstAlpha:qs,blendEquation:vi}),p=new pt(new ii(2,2),d),x=new zn;x.add(p);let m=new yn({uniforms:{uValue:{value:0}},vertexShader:`
      void main() {
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      uniform float uValue;
      void main() {
        gl_FragColor = vec4(uValue, 0.0, 0.0, 1.0);
      }
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:si}),g=new pt(new ii(2,2),m),v=new zn;v.add(g);let b=new yn({vertexShader:`
      void main() {
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      void main() {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
      }
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:si}),_=new pt(new ii(2,2),b),w=new zn;w.add(_);function T(){n.state.buffers.color.setMask(!0),n.state.buffers.depth.setMask(!0)}function y(A){T();let J=n.autoClear;n.setRenderTarget(A),n.autoClear=!1,n.render(w,c),n.autoClear=J}let E=new yn({vertexShader:`
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
    `,depthTest:!0,depthWrite:!0,toneMapped:!1,side:Dt,clipping:!0,blending:si});function D(A,J,ne={}){m.uniforms.uValue.value=J;let Ee=n.autoClear;T(),n.setRenderTarget(A),ne.clearDepth&&(n.setClearColor(0,1),n.clear(!1,!0,!1)),n.autoClear=!1,n.render(v,c),n.autoClear=Ee}function I(){i?.dispose(),s?.dispose(),r?.dispose(),o?.dispose(),a?.dispose(),l?.dispose(),i=null,s=null,r=null,o=null,a=null,l=null}let z=0;function W(A,J,ne){let Ee=Math.max(1,Math.floor(A)),$=Math.max(1,Math.floor(J)),me=Math.min(1,Math.max(.25,ne)),Me=Math.max(1,Math.floor(Ee*me)),Te=Math.max(1,Math.floor($*me));if(i&&i.width===Ee&&i.height===$&&r&&r.width===Me&&r.height===Te&&z===me)return;I(),z=me,i=new tn(Ee,$,{format:bn,type:In,colorSpace:At,depthBuffer:!0,stencilBuffer:!1});let C={format:bn,type:kn,depthBuffer:!0,stencilBuffer:!1,magFilter:Gt,minFilter:Gt};s=new tn(Me,Te,C),r=new tn(Me,Te,C),o=new tn(Me,Te,C),a=new tn(Me,Te,{format:bn,type:qn,colorSpace:At,depthBuffer:!1,stencilBuffer:!1,magFilter:Wt,minFilter:Wt}),l=new tn(Me,Te,{format:bn,type:qn,colorSpace:At,depthBuffer:!1,stencilBuffer:!1,magFilter:Wt,minFilter:Wt}),h.uniforms.tOpaque.value=i.texture,h.uniforms.tAccum.value=a.texture,Jt.tOpaqueViewZ.value=s.texture,Jt.uResolution.value.set(Me,Te)}function k(A){let J=[],ne=[];return A?(A.traverse(Ee=>{if(!Ee.isMesh||!Ee.visible||On(Ee))return;let $=Ee,me=Array.isArray($.material)?$.material:[$.material],Me=!1;for(let Te of me)if(Te&&Te.transparent&&Te.opacity<1-1e-4){Me=!0;break}Me?ne.push($):J.push($)}),{opaque:J,transparent:ne}):{opaque:J,transparent:ne}}function N(A,J){for(let ne of A)ne.visible=J}function G(A,J){A.blending=J.blending,A.blendSrc=J.blendSrc,A.blendDst=J.blendDst,A.blendSrcAlpha=J.blendSrcAlpha,A.blendDstAlpha=J.blendDstAlpha,A.blendEquation=J.blendEquation,A.blendEquationAlpha=J.blendEquation}let j={meshes:[],sources:[],key:""},q={meshes:[],sources:[],key:""},ye="",Y="",V=new zn,Q=new zn,be=new zn,Re=[];function K(A){for(let J of A.meshes)J.geometry.dispose();A.meshes=[],A.sources=[],A.key=""}function ae(){for(let A of Re){be.remove(A),A.geometry?.dispose?.();let J=A.material;if(Array.isArray(J))for(let ne of J)ne?.dispose?.();else J?.dispose?.()}Re=[]}function B(){K(j),K(q),ae(),ye="",Y=""}function ee(A){if(ae(),!A.length)return;let J=new Map,ne=new P;for(let $ of A){let me=null;for(let _e of $.children)if(On(_e)){me=_e;break}if(!me?.geometry)continue;let Me=me.material,Te=Me&&Me.transparent&&typeof Me.opacity=="number"?Me.opacity:1;if(!(Te<1-1e-4))continue;let C=me.geometry.getAttribute("instanceStart"),S=me.geometry.getAttribute("instanceEnd");if(!C||!S||!C.count)continue;let X=Te.toFixed(3),ve=J.get(X);ve||(ve={opacity:Te,planes:Me.clippingPlanes||[],chunks:[]},J.set(X,ve)),$.updateWorldMatrix(!0,!1);let de=C.count,he=new Float32Array(de*6);for(let _e=0;_e<de;_e++)ne.fromBufferAttribute(C,_e).applyMatrix4($.matrixWorld),he[_e*6]=ne.x,he[_e*6+1]=ne.y,he[_e*6+2]=ne.z,ne.fromBufferAttribute(S,_e).applyMatrix4($.matrixWorld),he[_e*6+3]=ne.x,he[_e*6+4]=ne.y,he[_e*6+5]=ne.z;ve.chunks.push(he)}let Ee={stage:wi,prevZ:Jt.tPrevViewZ,peelZ:Jt.tPeelViewZ,opaqueZ:Jt.tOpaqueViewZ,eps:Jt.uViewZEps,resolution:Jt.uResolution};for(let $ of J.values()){let me=0;for(let S of $.chunks)me+=S.length;if(me<6)continue;let Me=new Float32Array(me),Te=0;for(let S of $.chunks)Me.set(S,Te),Te+=S.length;let C=W0(Me,$.opacity,$.planes,Ee);be.add(C),Re.push(C)}}function pe(A,J,ne,Ee){if(!ne.length)return;let $=`${J0(ne)}#${J0(J)}`;Ee&&Ee===ye&&$===Y&&j.meshes.length||(Oe(j,A,ne),Oe(q,A,J),j.sources.length===ne.length&&q.sources.length===J.length&&(ee(ne),ye=Ee||"",Y=$))}function Se(A){return Object.keys(A.attributes).sort().join(",")}function $e(A){let J=A.geometry,ne=J.index?J.toNonIndexed():J.clone();return ne.applyMatrix4(A.matrixWorld),ne}function Oe(A,J,ne){let Ee=String(ne.length);for(let me of ne){let Me=Array.isArray(me.material)?"m":me.material?.id||0;Ee+=`.${me.id}:${Me}`}if(Ee===A.key)return;J.updateWorldMatrix(!0,!0),K(A),A.key=Ee;let $=new Map;for(let me of ne){if(!me.geometry||Array.isArray(me.material)||!me.material)continue;let Me=`${me.material.uuid}:${Se(me.geometry)}`,Te=$.get(Me);Te||(Te={mat:me.material,meshes:[]},$.set(Me,Te)),Te.meshes.push(me)}for(let me of $.values()){let Me=[];try{for(let S of me.meshes)Me.push($e(S));let Te=Wg(Me,!1);if(!Te)continue;let C=new pt(Te,me.mat);C.frustumCulled=!1,C.matrixAutoUpdate=!1,C.renderOrder=0,C.userData.isPeelBatch=!0,A.meshes.push(C),A.sources.push(...me.meshes)}catch{}finally{for(let Te of Me)Te.dispose()}}}function ze(A,J,ne,Ee){if(!A.meshes.length||A.sources.length!==J.length)return n.render(ne,Ee),!1;V.environment=ne.environment,V.environmentIntensity=ne.environmentIntensity,V.fog=ne.fog;let $=[];for(let me of ne.children)me.isLight&&$.push(me);for(let me of $)V.add(me);for(let me of A.meshes)V.add(me);n.render(V,Ee);for(let me of A.meshes)V.remove(me);for(let me of $)ne.add(me);return!0}function oe(A,J,ne){ze(j,ne,A,J)}function we(A,J,ne){ne.length&&ze(q,ne,A,J)}function ke(A,J,ne){if(!q.meshes.length||q.sources.length!==J.length)return!1;Q.overrideMaterial=ne;for(let Ee of q.meshes)Q.add(Ee);n.render(Q,A),Q.overrideMaterial=null;for(let Ee of q.meshes)Q.remove(Ee);return!0}function He(A){let J=new Set;for(let ne of A){let Ee=Array.isArray(ne.material)?ne.material:[ne.material];for(let $ of Ee)$&&J.add($)}return[...J]}function Ze(A,J,ne){if(!ne)return;let Ee=ne.visible,$=A.background,me=n.autoClear;ne.visible=!1,A.background=null,n.autoClear=!1,T(),n.clearDepth(),n.render(A,J),ne.visible=Ee,A.background=$,n.autoClear=me}function De(A){return A.children.filter(J=>J.userData?.blueprintAnnotations)}function rt(A,J){for(let ne of A)ne.visible=J}function ie(A,J,ne){De(A).some(Ee=>Ee.visible)&&Ze(A,J,ne)}function Ue(A,J,ne,Ee={}){Js(ne,!1);let $=De(A),me=$.map(Me=>Me.visible);rt($,!1),n.setRenderTarget(null),n.autoClear=!0,n.render(A,J),Ee.skipEdges||Bd(n,A,J,ne,{reuseDepth:!!Ee.reuseDepth}),$.forEach((Me,Te)=>{Me.visible=me[Te]}),ie(A,J,ne)}function Ke(A,J,ne,Ee,$={}){if(!(Z0&&(typeof Ee=="function"?Ee():!!Ee)))return wi.value=0,Ue(A,J,ne,{reuseDepth:!0}),!1;if($.quality!=="high"){wi.value=0,Ue(A,J,ne,{reuseDepth:!0});let Z=$.batchKey||"";if(ne&&!$.deferPrime&&Z!==ye){let Ae=k(ne);pe(ne,Ae.opaque,Ae.transparent,Z)}return!0}let{opaque:Me,transparent:Te}=k(ne);if(!Te.length)return wi.value=0,Ue(A,J,ne,{reuseDepth:!0}),!1;ne&&pe(ne,Me,Te,$.batchKey||"");let C=$.quality==="high",S=C?h1:u1,X=C?Hd:K0;n.getDrawingBufferSize(e),W(e.x,e.y,S);let ve=n.autoClear,de=n.toneMapping,he=A.background;he instanceof je?t.copy(he):t.set(1118481),h.uniforms.uBackground.value.copy(t);let _e=[];for(let Z of[...Me,...Te])_e.push({mesh:Z,visible:Z.visible});let re=He(Te),ce=[];for(let Z of re)Qa(Z),ce.push({mat:Z,snap:{blending:Z.blending,blendSrc:Z.blendSrc,blendDst:Z.blendDst,blendSrcAlpha:Z.blendSrcAlpha,blendDstAlpha:Z.blendDstAlpha,blendEquation:Z.blendEquation,blendEquationAlpha:Z.blendEquationAlpha,depthWrite:Z.depthWrite,depthTest:Z.depthTest,transparent:Z.transparent,opacity:Z.opacity,colorWrite:Z.colorWrite,side:Z.side,forceSinglePass:Z.forceSinglePass}});kd(re,!0);let Ie=new Map;for(let Z of Te)Ie.set(Z,Z.onBeforeRender),Z.onBeforeRender=function(st,Ce,ut,Et,Zt,Rs){let Ti=Array.isArray(Zt)?Zt:[Zt];for(let Qi of Ti)Qi&&zd(Qi);let Ai=Ie.get(Z);typeof Ai=="function"&&Ai.call(this,st,Ce,ut,Et,Zt,Rs)};let U=null;for(let Z of re)if(Z.clippingPlanes?.length){U=Z.clippingPlanes;break}if(!U)for(let Z of Me){let Ae=Array.isArray(Z.material)?Z.material:[Z.material];for(let st of Ae)if(st?.clippingPlanes?.length){U=st.clippingPlanes;break}if(U)break}E.clippingPlanes=U||[],E.clipIntersection=!1,A.background=null,n.autoClear=!0,wi.value=0;let ge=[];for(let Z of A.children)Z!==ne&&(Z.isLight||(ge.push({obj:Z,visible:Z.visible}),Z.visible=!1));function ue(){for(let[Z,Ae]of Ie)Z.onBeforeRender=Ae}function Ne(){for(let{mat:Z,snap:Ae}of ce)G(Z,Ae),Z.blendEquationAlpha=Ae.blendEquationAlpha,Z.depthWrite=Ae.depthWrite,Z.depthTest=Ae.depthTest,Z.transparent=Ae.transparent,Z.opacity=Ae.opacity,Z.colorWrite=Ae.colorWrite!==!1,Z.side=Ae.side,Z.forceSinglePass=Ae.forceSinglePass,Z.needsUpdate=!0;for(let{mesh:Z,visible:Ae}of _e)Z.visible=Ae;for(let{obj:Z,visible:Ae}of ge)Z.visible=Ae;return ue(),kd(re,!1),wi.value=0,A.background=he,A.overrideMaterial=null,n.toneMapping=de,n.setRenderTarget(null),n.autoClear=!0,Ue(A,J,ne),n.autoClear=ve,!1}if(N(Te,!1),N(Me,!0),Js(ne,!1),T(),n.setRenderTarget(i),n.setClearColor(0,0),n.clear(),we(A,J,Me),n.setRenderTarget(s),n.setClearColor(0,1),D(s,Fu,{clearDepth:!0}),C){let Z=new Float32Array(4);try{n.readRenderTargetPixels(s,2,2,1,1,Z)}catch{Z[0]=0}if(!Number.isFinite(Z[0])||Z[0]<Fu*.5)return Ne()}let Pe=A.overrideMaterial;n.setRenderTarget(s),n.autoClear=!1,ke(J,Me,E)||(A.overrideMaterial=E,n.render(A,J),A.overrideMaterial=Pe),n.autoClear=!0,Jt.tOpaqueViewZ.value=s.texture,y(a),D(o,0),Jt.tPrevViewZ.value=o.texture,N(Me,!1),N(Te,!0),Js(ne,!1);let Le=!1;for(let Z=0;Z<X;Z++){Jt.tPrevViewZ.value=o.texture,Jt.tPeelViewZ.value=o.texture,wi.value=1;for(let{mat:Ce}of ce)Ce.depthWrite=!0,Ce.depthTest=!0,Ce.colorWrite=!0,Ce.transparent=!0,Ce.forceSinglePass=!0,G(Ce,{blending:si,blendSrc:qs,blendDst:Pa,blendSrcAlpha:qs,blendDstAlpha:Pa,blendEquation:vi}),zd(Ce);T(),n.setRenderTarget(r),n.setClearColor(0,1),n.clear(!1,!0,!1),D(r,Fu),n.setRenderTarget(r),n.autoClear=!1,oe(A,J,Te),n.autoClear=!0,Jt.tPeelViewZ.value=r.texture,wi.value=2;for(let{mat:Ce}of ce)Ce.depthWrite=!1,Ce.depthTest=!1,Ce.colorWrite=!0,Ce.transparent=!0,Ce.forceSinglePass=!0,G(Ce,{blending:ki,blendSrc:Ia,blendDst:go,blendSrcAlpha:qs,blendDstAlpha:go,blendEquation:vi}),zd(Ce);y(l);let Ae=n.autoClear;if(n.autoClear=!1,n.setRenderTarget(l),oe(A,J,Te),n.autoClear=Ae,Re.length&&l){for(let ut of Re)ut.material?.resolution?.set(l.width,l.height);let Ce=J.layers.mask;J.layers.set(0),n.autoClear=!1,n.render(be,J),J.layers.mask=Ce,n.autoClear=!0}Le=!0,d.uniforms.tSrc.value=l.texture,n.setRenderTarget(a),n.autoClear=!1,n.render(x,c),n.autoClear=!0;let st=o;o=r,r=st}if(!Le)return Ne();for(let{mat:Z,snap:Ae}of ce)G(Z,Ae),Z.blendEquationAlpha=Ae.blendEquationAlpha,Z.depthWrite=Ae.depthWrite,Z.depthTest=Ae.depthTest,Z.transparent=Ae.transparent,Z.opacity=Ae.opacity,Z.colorWrite=Ae.colorWrite!==!1,Z.side=Ae.side,Z.forceSinglePass=Ae.forceSinglePass;for(let{mesh:Z,visible:Ae}of _e)Z.visible=Ae;for(let{obj:Z,visible:Ae}of ge)Z.visible=Ae;ue(),Js(ne,!0),kd(re,!1),wi.value=0,A.background=he,n.toneMapping=de,n.setRenderTarget(null),n.autoClear=!0,n.render(u,c);let Fe=De(A),it=Fe.map(Z=>Z.visible);return rt(Fe,!1),C&&ne&&Bd(n,A,J,ne,{opaqueEdgesOnly:Re.length>0}),Fe.forEach((Z,Ae)=>{Z.visible=it[Ae]}),ie(A,J,ne),n.autoClear=ve,!0}function xe(){B(),I(),h.dispose(),f.geometry.dispose(),d.dispose(),p.geometry.dispose(),m.dispose(),g.geometry.dispose(),b.dispose(),_.geometry.dispose(),E.dispose()}return{render:Ke,dispose:xe,MAX_PEELS:c1,MAX_PEELS_FAST:K0,MAX_PEELS_HIGH:Hd,VIEW_Z_EPSILON:j0,USE_DEPTH_PEEL:Z0}}var tx="blueprints.materialMode",Bu="solid",el="realistic",f1={floor:[230,115,20],eps:[70,230,25],masonry:[225,70,40],column:[225,70,40],venec:[200,55,35],plaster:[255,225,120],furniture:[255,150,0],cabinet:[214,148,40],appliance:[176,190,205],sink:[40,185,195],rug:[150,70,175],light:[255,210,40],door:[210,140,70],wall_plate:[200,85,10],pocket_frame:[235,185,80],wall_gkf:[230,230,235],rafters:[200,85,10],plenum_wool:[0,210,155],racking_strap:[70,70,80],tie_rod:[35,38,44],slope_light:[28,28,30],roofing:[235,15,15],glazing:[140,210,255],slope_naturheld_140:[15,85,245],slope_gkf:[230,230,235],slope_cd:[120,120,130],slope_nonius:[90,90,100],soffit_naturheld_140:[15,85,245],soffit_mineral_wool:[0,210,155],soffit_ud:[120,120,130],soffit_gkf:[230,230,235],soffit_cd:[120,120,130],soffit_nonius:[90,90,100],soffit_duct:[168,176,188],bass_mineral_wool:[0,210,155],bass_gkb:[230,230,235],bass_cd:[120,120,130],bass_wall_hanger:[90,90,100],tile:[222,205,176],grout:[48,46,44],drain:[176,184,190],fixture:[236,236,232],prewall:[196,184,168],screen:[170,210,220],profile:[190,196,200],vanity:[186,140,90]},d1={floor:0,eps:1,masonry:2,column:2,venec:2,plaster:3,pocket_frame:4,wall_gkf:4,bass_gkb:4,slope_gkf:4,soffit_gkf:4,furniture:6,cabinet:6,appliance:7,sink:7,rug:1,light:8,door:6,soffit_ud:8,slope_cd:8,soffit_cd:8,bass_cd:8,slope_nonius:9,soffit_nonius:9,soffit_duct:9,bass_wall_hanger:9,racking_strap:9,tie_rod:9,slope_light:8,wall_plate:9,plenum_wool:10,soffit_mineral_wool:10,bass_mineral_wool:10,rafters:11,roofing:12,slope_naturheld_140:13,soffit_naturheld_140:13,glazing:14,tile:0,grout:0,drain:0,fixture:6,prewall:5,screen:14,profile:7,vanity:6},p1=2e-6,m1=2;function Gd(n,e=0){if(n.userData.layerDepthPatched)return;let t=Math.max(0,Math.round(Number(e)||0));if(n.userData.layerDepthBias=t,!(t>0))return;n.userData.layerDepthPatched=!0;let i=n.onBeforeCompile?.bind(n),s=n.customProgramCacheKey?.bind(n),r=p1.toExponential(8);n.onBeforeCompile=(o,a)=>{i?.(o,a),o.fragmentShader=o.fragmentShader.replace("#include <logdepthbuf_fragment>",`#include <logdepthbuf_fragment>
#if defined( USE_LOGDEPTHBUF )
	{
		float bpFaceBias = ${t}.0 * ${r};
		float bpGraze = min(bpFaceBias, 0.35 * fwidth(gl_FragDepth));
		gl_FragDepth -= bpFaceBias + bpGraze;
	}
#endif`)},n.customProgramCacheKey=()=>`${s?s():n.type}|bpLayerDepth-r${m1}-${t}`,n.needsUpdate=!0}var g1=[];function nx(n,e,t){let i=new Set(n),s=Array.isArray(e)&&e.length?e:g1,r=typeof t=="function"?t:l=>l;function o(l){let c=[];for(let u of l){if(typeof u=="string"){if(!i.has(u))continue;i.delete(u),c.push({type:"leaf",id:u,label:r(u)});continue}let h=o(u.children||[]);h.length&&c.push({type:"group",id:u.id,label:r(u.id),children:h})}return c}let a=o(s);if(i.size){let l=[...i].sort((c,u)=>c.localeCompare(u)).map(c=>({type:"leaf",id:c,label:r(c)}));a.push({type:"group",id:"other",label:r("other"),children:l})}return a}function ix(n,e){if(!n||typeof n!="object")return{};let t=new Map;for(let s of e)s.type==="group"&&t.set(s.id,zu(s));let i={};for(let[s,r]of Object.entries(n)){let o=t.get(s);if(o&&o.length)for(let a of o)i[a]=r;else i[s]=r}return i}function zu(n){if(n.type==="leaf")return[n.id];let e=[];for(let t of n.children)e.push(...zu(t));return e}function x1(n,e,t="transparent"){if(t==="none")return;let i=t==="opaque"?1:Math.max(0,Math.min(1,Number(e)||0));for(let s of n.children||[]){if(!s?.userData?.isEdgeOverlay||!s.material)continue;let r=Array.isArray(s.material)?s.material:[s.material];for(let o of r)o&&(i<1?(o.transparent=!0,o.opacity=i,o.depthWrite=!1):(o.transparent=!1,o.opacity=1),o.needsUpdate=!0)}}function ws(n,e,t={}){let i=Math.max(0,Math.min(1,Number(e)||0)),s=t.edgeMode??"transparent";for(let r of n){if(!r)continue;if(i<=0||r.userData?.bpIfcHidden){r.visible=!1;continue}if(r.visible=!0,!r.isMesh)continue;let o=Array.isArray(r.material)?r.material:[r.material];for(let a of o)a&&(i<1?(a.transparent=!0,a.opacity=i,a.depthWrite=!1,a.depthTest=!0,a.side=Dt,a.forceSinglePass=!0,a.userData.needsDepthPeel=!0):(a.transparent=!1,a.opacity=1,a.depthWrite=!0,a.depthTest=!0,a.side=Dt,a.forceSinglePass=!1,a.blending=ki,a.userData.needsDepthPeel=!1),a.needsUpdate=!0);typeof r.userData.opaqueRenderOrder!="number"&&(r.userData.opaqueRenderOrder=r.renderOrder||0),r.renderOrder=i<1?0:r.userData.opaqueRenderOrder,x1(r,i,s);for(let a of r.children||[]){if(!a?.userData?.isSectionCap||!a.material)continue;a.visible=!0,a.renderOrder=r.renderOrder;let l=Array.isArray(a.material)?a.material:[a.material];for(let c of l)c&&(c.opacity=i,c.transparent=i<1,c.depthWrite=i>=1,c.depthTest=!0,c.forceSinglePass=i<1,c.side=Dt,c.needsUpdate=!0)}}}var y1={floor:{color:[230,115,20],roughness:.68,metalness:0,map:"wood"},eps:{color:[70,230,25],roughness:.94,metalness:0,map:"foam"},masonry:{color:[225,70,40],roughness:.9,metalness:0,map:"masonry"},column:{color:[225,70,40],roughness:.9,metalness:0,map:"masonry"},venec:{color:[200,55,35],roughness:.9,metalness:0,map:"masonry"},plaster:{color:[255,225,120],roughness:.92,metalness:0,map:"plaster"},furniture:{color:[255,150,0],roughness:.38,metalness:0,clearcoat:.35,clearcoatRoughness:.28,map:"wood"},cabinet:{color:[214,148,40],roughness:.4,metalness:0,clearcoat:.3,clearcoatRoughness:.3,map:"wood"},appliance:{color:[176,190,205],roughness:.28,metalness:.65,map:"metal"},sink:{color:[40,185,195],roughness:.22,metalness:.15,map:"none"},rug:{color:[150,70,175],roughness:.92,metalness:0,map:"none"},light:{color:[255,210,40],roughness:.35,metalness:.2,map:"metal"},wall_plate:{color:[200,85,10],roughness:.55,metalness:0,map:"wood"},pocket_frame:{color:[235,185,80],roughness:.7,metalness:0,map:"plaster"},wall_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},rafters:{color:[200,85,10],roughness:.55,metalness:0,map:"wood"},plenum_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},racking_strap:{color:[70,70,80],roughness:.45,metalness:.8,map:"metal"},tie_rod:{color:[35,38,44],roughness:.35,metalness:.9,map:"metal"},slope_light:{color:[28,28,30],roughness:.4,metalness:.6,map:"metal"},roofing:{color:[235,15,15],roughness:.32,metalness:.45,map:"metal"},glazing:{color:[140,210,255],roughness:.08,metalness:.05,map:"none"},slope_naturheld_140:{color:[15,85,245],roughness:.78,metalness:.08,map:"plaster"},slope_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},slope_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},slope_nonius:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},soffit_mineral_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},soffit_naturheld_140:{color:[15,85,245],roughness:.78,metalness:.08,map:"plaster"},soffit_ud:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},soffit_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},soffit_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},soffit_nonius:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},soffit_duct:{color:[168,176,188],roughness:.35,metalness:.85,map:"metal"},bass_mineral_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},bass_gkb:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},bass_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},bass_wall_hanger:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},tile:{color:[222,205,176],roughness:.42,metalness:0,map:"none"},grout:{color:[48,46,44],roughness:.9,metalness:0,map:"none"},drain:{color:[176,184,190],roughness:.28,metalness:.7,map:"metal"},fixture:{color:[236,236,232],roughness:.35,metalness:0,map:"none"},prewall:{color:[196,184,168],roughness:.8,metalness:0,map:"none"},screen:{color:[170,210,220],roughness:.08,metalness:.05,map:"none"},profile:{color:[190,196,200],roughness:.25,metalness:.85,map:"metal"},vanity:{color:[186,140,90],roughness:.55,metalness:0,map:"wood"}},Vd=new Map;function _1(n){if(!n||n==="none")return null;let e=Vd.get(n);if(e)return e;let t=128,i=document.createElement("canvas");i.width=t,i.height=t;let s=i.getContext("2d");if(!s)return null;if(n==="wood"){s.fillStyle="#c49858",s.fillRect(0,0,t,t);for(let o=0;o<t;o++){let a=Math.sin(o*.35)*8+Math.sin(o*.11)*4,l=130+o*17%50;s.strokeStyle=`rgba(${l-40}, ${l-60}, ${l-100}, 0.55)`,s.lineWidth=1.2,s.beginPath(),s.moveTo(0,o+a*.15),s.lineTo(t,o-a*.1),s.stroke()}for(let o=0;o<60;o++){let a=o*37%t,l=o*53%t;s.fillStyle="rgba(70, 40, 15, 0.22)",s.fillRect(a,l,2,7+o%5)}}else if(n==="foam"){s.fillStyle="#9ed468",s.fillRect(0,0,t,t);for(let o=0;o<t;o+=7)for(let a=0;a<t;a+=7){let l=o/7%2*3.5,c=2.4+a*o%5*.2;s.beginPath(),s.arc(a+l+3.5,o+3.5,c,0,Math.PI*2),s.fillStyle="rgba(255,255,255,0.55)",s.fill(),s.strokeStyle="rgba(40,90,30,0.35)",s.stroke()}}else if(n==="plaster"){let o=s.createImageData(t,t);for(let a=0;a<o.data.length;a+=4){let l=200+a*13%45;o.data[a]=l,o.data[a+1]=l-10,o.data[a+2]=l-22,o.data[a+3]=255}s.putImageData(o,0,0)}else if(n==="wool"){s.fillStyle="#88c860",s.fillRect(0,0,t,t);for(let o=0;o<1400;o++){let a=o*47%t,l=o*91%t;s.fillStyle=o%3===0?"rgba(255,255,255,0.4)":"rgba(30,70,20,0.28)",s.fillRect(a,l,1+o%2,2+o%3)}}else if(n==="metal"){let o=s.createLinearGradient(0,0,t,t);o.addColorStop(0,"#a02820"),o.addColorStop(.4,"#f07060"),o.addColorStop(.55,"#701810"),o.addColorStop(1,"#d04838"),s.fillStyle=o,s.fillRect(0,0,t,t);for(let a=0;a<t;a+=9)s.fillStyle="rgba(255,255,255,0.22)",s.fillRect(0,a,t,2),s.fillStyle="rgba(0,0,0,0.28)",s.fillRect(0,a+4,t,2)}else if(n==="masonry"){s.fillStyle="#b88868",s.fillRect(0,0,t,t);let o=16,a=32;for(let l=0;l<t/o;l++){let c=l%2*(a/2);for(let u=-1;u<t/a+1;u++){let h=u*a+c,f=l*o;s.fillStyle=`rgba(${170+(l+u)%3*18}, ${110+l%4*10}, ${70+u%3*12}, 0.75)`,s.fillRect(h+1,f+1,a-2,o-2),s.strokeStyle="rgba(70,45,30,0.55)",s.strokeRect(h+.5,f+.5,a-1,o-1)}}}else return null;let r=new ms(i);return r.colorSpace=At,r.wrapS=gi,r.wrapT=gi,r.repeat.set(2.5,2.5),r.needsUpdate=!0,Vd.set(n,r),r}function ex(n){return new je(n[0]/255,n[1]/255,n[2]/255)}function v1(n){return f1[n]||[160,160,160]}function b1(n,e,t=0){n.side=Dt,t>0?(n.polygonOffset=!0,n.polygonOffsetFactor=-t,n.polygonOffsetUnits=-t*2):(n.polygonOffset=!1,n.polygonOffsetFactor=0,n.polygonOffsetUnits=0),e?(n.clippingPlanes=e,n.clipIntersection=!1):n.clippingPlanes=[],Gd(n,t),Qa(n),n.needsUpdate=!0}function sx(n){n.computeBoundingBox();let e=n.boundingBox,t=new P;e.getSize(t);let i=Math.max(t.x,1e-6),s=Math.max(t.y,1e-6),r=Math.max(t.z,1e-6),o=Math.max(i,s,r);n.getAttribute("normal")||n.computeVertexNormals();let a=n.getAttribute("position"),l=n.getAttribute("normal");if(!a)return o;let c=n.getAttribute("uv");if(c&&c.count===a.count)return o;let u=new Float32Array(a.count*2),h=new P;for(let f=0;f<a.count;f++){h.fromBufferAttribute(a,f);let d=Math.abs(l.getX(f)),p=Math.abs(l.getY(f)),x=Math.abs(l.getZ(f)),m,g;p>=d&&p>=x?(m=(h.x-e.min.x)/i,g=(h.z-e.min.z)/r):d>=x?(m=(h.z-e.min.z)/r,g=(h.y-e.min.y)/s):(m=(h.x-e.min.x)/i,g=(h.y-e.min.y)/s),u[f*2]=m,u[f*2+1]=g}return n.setAttribute("uv",new Bt(u,2)),o}function M1(n,e){let t=_1(n);if(!t)return null;let i=t.clone();i.needsUpdate=!0;let s=Math.max(1.2,Math.min(12,e/400));return i.repeat.set(s,s),i}function rx(n,e,t={}){let i=t.clippingPlanes??null,s=e===el,r=t.opacityByLabel??null,o=t.edgeMode??"transparent";for(let[a,l]of n){let c=v1(a),u=d1[a]??0,h=1e3;if(s)for(let g of l)g.isMesh&&g.geometry&&(h=Math.max(h,sx(g.geometry)));let f=1,d;if(s){let g=y1[a]||{color:c,roughness:.7,metalness:0,map:"none"};f=typeof g.opacity=="number"?g.opacity:1;let v=ex(g.color),b=M1(g.map||"none",h);g.clearcoat?d=new ln({color:v,map:b,roughness:g.roughness,metalness:g.metalness,clearcoat:g.clearcoat,clearcoatRoughness:g.clearcoatRoughness??.3,envMapIntensity:.85}):d=new Pn({color:v,map:b,roughness:g.roughness,metalness:g.metalness,envMapIntensity:g.metalness>.05?1.1:.55})}else d=new nn({color:ex(c)});b1(d,i,u),d.userData.presetOpacity=f;let p=new Set;for(let g of l){if(!g.isMesh)continue;let v=g.material;if(v){let b=Array.isArray(v)?v:[v];for(let _ of b)p.add(_)}g.material=d,g.userData.opaqueRenderOrder=u,g.renderOrder=u}for(let g of p)g!==d&&(g.map&&[...Vd.values()].includes(g.map)?g.map=null:g.map&&(g.map.dispose?.(),g.map=null),g.dispose?.());let x=1;r&&(r instanceof Map?x=r.has(a)?r.get(a):1:typeof r[a]=="number"&&(x=r[a]));let m=Math.max(0,Math.min(1,f*(Number(x)||0)));ws(l,m,{edgeMode:o})}}function ox(n,e){let i=(Array.isArray(n)?n:[n]).map(s=>{if(!s)return new Pn({color:13421772,roughness:.65,metalness:0,side:Kn});let r=s.color?s.color.clone():new je(13421772),o=typeof s.roughness=="number"?s.roughness:.65,a=typeof s.metalness=="number"?s.metalness:0,l=null;s.map&&e&&(sx(e),l=s.map.clone(),l.needsUpdate=!0);let c=new Pn({color:r,map:l,roughness:o,metalness:a,side:Kn,transparent:!!s.transparent,opacity:typeof s.opacity=="number"?s.opacity:1});return c.clippingPlanes=null,c.clipIntersection=!1,c});return Array.isArray(n)?i:i[0]}function ax(){try{let n=localStorage.getItem(tx);if(n===el||n===Bu)return n}catch{}return Bu}function lx(n){try{localStorage.setItem(tx,n)}catch{}}var Yi=1e-5,cx=new WeakMap;function jn(n,e,t,i){let s=t/(t-i);return n.clone().lerp(e,s)}function S1(n,e,t){let[i,s,r]=n,o=e.distanceToPoint(i),a=e.distanceToPoint(s),l=e.distanceToPoint(r),c=o>=-Yi,u=a>=-Yi,h=l>=-Yi,f=(c?1:0)+(u?1:0)+(h?1:0);if(f===3){t.push([i,s,r]);return}if(f===0)return;let d=[i,s,r],p=[o,a,l],x=[c,u,h];if(f===1){let b=x.findIndex(Boolean),_=(b+1)%3,w=(b+2)%3,T=d[b],y=jn(d[b],d[_],p[b],p[_]),E=jn(d[b],d[w],p[b],p[w]);t.push([T,y,E]);return}let m=x.findIndex(b=>!b),g=(m+1)%3,v=(m+2)%3;if(x[g]){let b=d[g],_=d[v],w=jn(d[m],d[g],p[m],p[g]),T=jn(d[m],d[v],p[m],p[v]);t.push([b,_,w]),t.push([_,T,w])}else{let b=d[v],_=jn(d[m],d[g],p[m],p[g]),w=jn(d[m],d[v],p[m],p[v]);t.push([b,_,w])}}function E1(n,e){let[t,i,s]=n,r=e.distanceToPoint(t),o=e.distanceToPoint(i),a=e.distanceToPoint(s),l=r>=-Yi,c=o>=-Yi,u=a>=-Yi,h=(l?1:0)+(c?1:0)+(u?1:0);if(h===0||h===3)return null;let f=[t,i,s],d=[r,o,a],p=[l,c,u];if(h===1){let v=p.findIndex(Boolean),b=(v+1)%3,_=(v+2)%3;return[jn(f[v],f[b],d[v],d[b]),jn(f[v],f[_],d[v],d[_])]}let x=p.findIndex(v=>!v),m=(x+1)%3,g=(x+2)%3;return p[m]?[jn(f[x],f[m],d[x],d[m]),jn(f[x],f[g],d[x],d[g])]:[jn(f[x],f[m],d[x],d[m]),jn(f[x],f[g],d[x],d[g])]}function w1(n,e,t){let i=n.clone(),s=e.clone();for(let r of t){let o=r.distanceToPoint(i),a=r.distanceToPoint(s),l=o>=-Yi,c=a>=-Yi;if(l&&c)continue;if(!l&&!c)return null;let u=jn(i,s,o,a);l?s=u:i=u}return i.distanceToSquared(s)<Yi*Yi?null:[i,s]}function T1(n,e){let t=n;for(let i of e){let s=[];for(let r of t)S1(r,i,s);if(t=s,t.length===0)break}return t}function A1(n,e){let t=n.getAttribute("position");if(!t)return[];let i=new P,s=[],r=n.getIndex();function o(a,l,c){s.push([i.fromBufferAttribute(t,a).applyMatrix4(e).clone(),i.fromBufferAttribute(t,l).applyMatrix4(e).clone(),i.fromBufferAttribute(t,c).applyMatrix4(e).clone()])}if(r)for(let a=0;a<r.count;a+=3)o(r.getX(a),r.getX(a+1),r.getX(a+2));else for(let a=0;a<t.count;a+=3)o(a,a+1,a+2);return s}function R1(n){let e=n.getAttribute("position");if(!e)return[];let t=new P,i=[],s=n.getIndex();function r(o,a,l){i.push([t.fromBufferAttribute(e,o).clone(),t.fromBufferAttribute(e,a).clone(),t.fromBufferAttribute(e,l).clone()])}if(s)for(let o=0;o<s.count;o+=3)r(s.getX(o),s.getX(o+1),s.getX(o+2));else for(let o=0;o<e.count;o+=3)r(o,o+1,o+2);return i}var Mr=1e-6,ux=2e-4,C1=2e-4,hx=new WeakMap;function P1(n){let e="";for(let t of n)e+=`${t.normal.x.toFixed(6)},${t.normal.y.toFixed(6)},${t.normal.z.toFixed(6)},${t.constant.toFixed(6)};`;return e}function fx(n){let e=t=>Math.round(t/Mr);return`${e(n.x)},${e(n.y)},${e(n.z)}`}function mx(n,e){let t=P1(e),i=hx.get(n);if(i&&i.key===t)return i;let s=[],r=[],o=cx.get(n);if(o||(o=R1(n),cx.set(n,o)),o.length&&e?.length)for(let l=0;l<e.length;l++){let c=e[l],u=e.filter((f,d)=>d!==l),h=[];for(let f of o){let d=E1(f,c);if(!d)continue;let p=u.length?w1(d[0],d[1],u):d;p&&(h.push(p),s.push(p[0].x,p[0].y,p[0].z,p[1].x,p[1].y,p[1].z))}r.push(h)}let a={key:t,segments:new Float32Array(s),perPlane:r};return hx.set(n,a),a}function I1(n,e,t){let i=new Map;for(let l of n.keys())i.set(l,l);function s(l){let c=l;for(;i.get(c)!==c;){let u=i.get(i.get(c));i.set(c,u),c=u}return c}function r(l){let c=s(l),u=0;for(let h of t.get(c)||[])e[h].dead||u++;return u}function o(){let l=[];for(let c of n.keys())s(c)===c&&r(c)%2&&l.push(c);return l}let a=ux*ux;for(let l=0;l<e.length+2;l++){let c=o();if(c.length<2)break;let u=-1,h=-1,f=1/0;for(let g=0;g<c.length;g++){let v=n.get(c[g]);for(let b=g+1;b<c.length;b++){let _=n.get(c[b]),w=v.x-_.x,T=v.y-_.y,y=v.z-_.z,E=w*w+T*T+y*y;E<f&&(f=E,u=g,h=b)}}if(f>a)break;let d=c[u],p=c[h],x=n.get(d),m=n.get(p);x.add(m).multiplyScalar(.5);for(let g of t.get(p)||[]){let v=e[g];if(v.dead)continue;let b=s(v.a===p?v.b:v.a);if(b===d){v.dead=!0;continue}v.a=d,v.b=b,t.has(d)||t.set(d,[]),t.get(d).push(g)}i.set(p,d)}}function L1(n){let e=new Map,t=[],i=new Map;for(let[o,a]of n){let l=fx(o),c=fx(a);if(l===c)continue;e.has(l)||e.set(l,o.clone()),e.has(c)||e.set(c,a.clone());let u=t.length;t.push({a:l,b:c,used:!1,dead:!1}),i.has(l)||i.set(l,[]),i.has(c)||i.set(c,[]),i.get(l).push(u),i.get(c).push(u)}I1(e,t,i);function s(o,a){let l=i.get(o)||[],c=-1,u=-1/0,h=e.get(o),f=a?e.get(a):null;for(let d of l){if(t[d].used||t[d].dead)continue;if(!f)return d;let p=t[d],x=p.a===o?p.b:p.a,m=e.get(x),g=h.x-f.x,v=h.y-f.y,b=h.z-f.z,_=m.x-h.x,w=m.y-h.y,T=m.z-h.z,y=g*_+v*w+b*T;y>u&&(u=y,c=d)}return c}let r=[];for(let o=0;o<t.length;o++){if(t[o].used||t[o].dead)continue;let a=[],l=[],c=o,u=t[c].a,h=u,f=null,d=!1,p=t.length+2;for(let x=0;x<p;x++){t[c].used=!0,l.push(c),a.push(e.get(u).clone());let m=t[c].a===u?t[c].b:t[c].a;if(m===h){d=!0;break}let g=s(m,u);if(g<0)break;f=u,u=m,c=g}d&&a.length>=3&&r.push(a)}return r}function D1(n){let e=n.clone().normalize(),t=Math.abs(e.x)<.9?new P(1,0,0):new P(0,1,0),i=new P().crossVectors(t,e).normalize(),s=new P().crossVectors(e,i).normalize();return{u:i,v:s,n:e}}function N1(n,e,t,i){return n.map(s=>{let r=s.clone().sub(e);return{x:r.dot(t),y:r.dot(i),p3:s}})}function O1(n){let e=0;for(let t=0;t<n.length;t++){let i=(t+1)%n.length;e+=n[t].x*n[i].y-n[i].x*n[t].y}return e*.5}function U1(n){return O1(n)<0&&n.reverse(),n}function dx(n,e,t){let i=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){let o=t[s].y,a=t[r].y,l=t[s].x,c=t[r].x;o>e!=a>e&&n<(c-l)*(e-o)/(a-o+0)+l&&(i=!i)}return i}function Ts(n,e,t){return(e.x-n.x)*(t.y-n.y)-(e.y-n.y)*(t.x-n.x)}function F1(n,e,t,i){let s=Ts(n,e,t),r=Ts(n,e,i),o=Ts(t,i,n),a=Ts(t,i,e);return s*r<0&&o*a<0}function px(n,e,t,i){let s=t.length;for(let r=0;r<s;r++){let o=(r+1)%s;if(!(i>=0&&(r===i||o===i))&&F1(n,e,t[r],t[o]))return!0}return!1}function B1(n,e){let t=0;for(let f=1;f<e.length;f++)e[f].x>e[t].x&&(t=f);let i=e[t],s=-1,r=1/0,o=n.length;for(let f=0;f<o;f++){let d=n[f],p=n[(f+1)%o];if(d.y>i.y==p.y>i.y)continue;let x=p.y-d.y;if(Math.abs(x)<1e-15)continue;let m=(i.y-d.y)/x;if(m<-1e-8||m>1+1e-8)continue;let g=d.x+m*(p.x-d.x);g>=i.x-1e-8&&g<r&&(r=g,s=f)}let a=[];s>=0&&a.push(s,(s+1)%o);let l=0,c=1/0;for(let f=0;f<o;f++){let d=(n[f].x-i.x)**2+(n[f].y-i.y)**2;d<c&&(c=d,l=f)}a.push(l);let u=-1;for(let f of a)if(!px(i,n[f],n,f)&&!px(i,n[f],e,t)){u=f;break}if(u<0)return null;let h=[];for(let f=0;f<o;f++)if(h.push(n[f]),f===u){for(let d=0;d<e.length;d++)h.push(e[(t-d+e.length)%e.length]);h.push(e[t]),h.push(n[f])}return h}function Wd(n,e){return(n.x-e.x)**2+(n.y-e.y)**2<=Mr*Mr}function z1(n,e,t,i){if(Wd(n,e)||Wd(n,t)||Wd(n,i))return!1;let s=Ts(e,t,n),r=Ts(t,i,n),o=Ts(i,e,n),a=s<-1e-14||r<-1e-14||o<-1e-14,l=s>1e-14||r>1e-14||o>1e-14;return!(a&&l)}function k1(n){let e=[];for(let s of n){let r=e[e.length-1];r&&(r.x-s.x)**2+(r.y-s.y)**2<Mr*Mr||e.push(s)}if(e.length>=2){let s=e[0],r=e[e.length-1];(s.x-r.x)**2+(s.y-r.y)**2<Mr*Mr&&e.pop()}let t=[],i=e.length*e.length+8;for(;e.length>3&&i-- >0;){let s=!1,r=e.length;for(let o=0;o<r;o++){let a=(o+r-1)%r,l=(o+1)%r,c=e[a],u=e[o],h=e[l],f=Ts(c,u,h);if(f<-1e-14)continue;if(f<=1e-14){e.splice(o,1),s=!0;break}let d=!1;for(let p=0;p<r;p++)if(!(p===o||p===a||p===l)&&z1(e[p],c,u,h)){d=!0;break}if(!d){t.push([c.p3,u.p3,h.p3]),e.splice(o,1),s=!0;break}}if(!s)break}return e.length===3&&Ts(e[0],e[1],e[2])>1e-14&&t.push([e[0].p3,e[1].p3,e[2].p3]),t}function H1(n,e,t){if(!n.length)return[];let{u:i,v:s,n:r}=D1(e.normal),o=n[0][0],a=n.map(u=>U1(N1(u,o,i,s))),l=a.map((u,h)=>{let f=u[0],d=0;for(let p=0;p<a.length;p++)p!==h&&dx(f.x,f.y,a[p])&&d++;return d}),c=[];for(let u=0;u<a.length;u++){if(l[u]%2!==0)continue;let h=a[u].slice();for(let d=0;d<a.length;d++){if(l[d]!==l[u]+1||!dx(a[d][0].x,a[d][0].y,h))continue;let p=B1(h,a[d]);p&&(h=p)}let f=k1(h);for(let d of f)c.push(d.map(p=>p.clone().addScaledVector(r,t)))}return c}function gx(n,e){return!n||!e?.length?[]:mx(n,e).perPlane}function xx(n,e,t=0){if(!n?.length||!e)return new Float32Array(0);let i=L1(n),s=H1(i,e,C1+Math.max(0,t));if(!s.length)return new Float32Array(0);let r=new Float32Array(s.length*9),o=0;for(let[a,l,c]of s)r[o++]=a.x,r[o++]=a.y,r[o++]=a.z,r[o++]=l.x,r[o++]=l.y,r[o++]=l.z,r[o++]=c.x,r[o++]=c.y,r[o++]=c.z;return r}function Y0(n,e){return!n||!e?.length?new Float32Array(0):mx(n,e).segments}function Uu(n,e){if(!n?.length)return[];let t=new at().copy(e).invert();return n.map(i=>i.clone().applyMatrix4(t))}function V1(n){let e=new Float32Array(n.length*9),t=0;for(let[s,r,o]of n)e[t++]=s.x,e[t++]=s.y,e[t++]=s.z,e[t++]=r.x,e[t++]=r.y,e[t++]=r.z,e[t++]=o.x,e[t++]=o.y,e[t++]=o.z;let i=new Ot;return i.setAttribute("position",new Bt(e,3)),i.computeVertexNormals(),i}function yx(n,e){if(!n.visible||!n.geometry)return null;let t=A1(n.geometry,n.matrixWorld);if(t.length===0)return null;let i=e.length?T1(t,e):t;if(i.length===0)return null;let s=V1(i),r=ox(n.material,s),o=new pt(s,r);return o.name=n.name,o}var G1=5e-5;function Hu(n){return!!(n&&n.userData&&n.userData.isSectionCap)}function Xd(n){return n?Array.isArray(n)?n[0]||null:n:null}function vx(n,e){let t;return n.isMeshPhysicalMaterial?t=new ln:n.isMeshStandardMaterial?t=new Pn:t=new nn,n.color&&t.color&&t.color.copy(n.color),n.map&&"map"in t&&(t.map=n.map),typeof n.roughness=="number"&&"roughness"in t&&(t.roughness=n.roughness),typeof n.metalness=="number"&&"metalness"in t&&(t.metalness=n.metalness),typeof n.clearcoat=="number"&&"clearcoat"in t&&(t.clearcoat=n.clearcoat,t.clearcoatRoughness=n.clearcoatRoughness??.3),typeof n.envMapIntensity=="number"&&"envMapIntensity"in t&&(t.envMapIntensity=n.envMapIntensity),t.opacity=typeof n.opacity=="number"?n.opacity:1,t.transparent=!!n.transparent,t.depthWrite=n.depthWrite!==!1,t.depthTest=n.depthTest!==!1,t.side=Dt,t.forceSinglePass=!!n.forceSinglePass,t.toneMapped=n.toneMapped!==!1,t.polygonOffset=!!n.polygonOffset,t.polygonOffsetFactor=n.polygonOffsetFactor||0,t.polygonOffsetUnits=n.polygonOffsetUnits||0,t.clippingPlanes=e,t.clipIntersection=!1,Gd(t,n.userData?.layerDepthBias||0),Qa(t),t.needsUpdate=!0,t}function ku(n){n.parent?.remove(n),n.geometry?.dispose?.();let e=n.material,t=Array.isArray(e)?e:[e];for(let i of t)i&&(i.map=null),i?.dispose?.()}function W1(n){let e="";for(let t of n)e+=`${t.normal.x.toFixed(5)},${t.normal.y.toFixed(5)},${t.normal.z.toFixed(5)},${t.constant.toFixed(5)};`;return e}function X1(n,e){if(!n)return null;for(let t of n.children)if(t.userData?.isSectionCap&&t.userData.capLabel===e)return t;return null}function bx(n,e){let t=new Set;for(let i of n){let s=i.parent;if(!s||t.has(s))continue;t.add(s);let r=X1(s,e);if(r)return r}return null}function _x(n,e,t){n.visible=!0;for(let i of n.children){if(!i.isMesh)continue;let s=Xd(i.material);s&&(e.color&&s.color&&s.color.copy(e.color),s.opacity=typeof e.opacity=="number"?e.opacity:1,s.transparent=!!e.transparent,s.depthWrite=e.depthWrite!==!1,s.depthTest=e.depthTest!==!1,s.forceSinglePass=!!e.forceSinglePass,s.side=Dt,s.needsUpdate=!0,i.visible=!0,i.renderOrder=t)}}function q1(n,e,t,i){let s=e.filter(d=>d?.isMesh&&d.visible&&!Hu(d)&&d.geometry),r=bx(e,n);if(!s.length||!t.length){r&&ku(r);return}let o=s[0],a=o.parent;if(!a)return;r&&r.parent!==a&&ku(r);let l=r&&r.parent===a?r:new zt;for(let d of[...l.children])ku(d);l.parent||(l.name=`${n}__caps`,l.userData.isSectionCap=!0,l.userData.capLabel=n,a.add(l));let c=Xd(o.material);if(!c)return;a.updateWorldMatrix(!0,!0);let u=new at().copy(a.matrixWorld).invert(),h=typeof o.userData.opaqueRenderOrder=="number"?o.userData.opaqueRenderOrder:o.renderOrder||0,f=t.map(()=>[]);for(let d of s){d.updateWorldMatrix(!0,!1);let p=Uu(t,d.matrixWorld),x=gx(d.geometry,p);for(let m=0;m<t.length;m++){let g=x[m]||[];for(let[v,b]of g)f[m].push([v.clone().applyMatrix4(d.matrixWorld),b.clone().applyMatrix4(d.matrixWorld)])}}for(let d=0;d<t.length;d++){let p=xx(f[d],t[d],h*G1);if(p.length<9)continue;for(let v=0;v<p.length;v+=3){let b=new P(p[v],p[v+1],p[v+2]).applyMatrix4(u);p[v]=b.x,p[v+1]=b.y,p[v+2]=b.z}let x=new Ot;x.setAttribute("position",new Bt(p,3)),x.computeVertexNormals();let m=t.filter((v,b)=>b!==d),g=new pt(x,vx(c,m));g.name=`${n}__cap${d}`,g.userData.isSectionCap=!0,g.userData.capPlaneIndex=d,g.userData.capLabel=n,g.renderOrder=o.renderOrder,g.raycast=()=>{},l.add(g)}l.userData.bpCapSig=i,l.userData.bpCapMatUuid=c.uuid,l.visible=l.children.length>0}function qd(n,e){let t=e||[],i=W1(t);for(let[s,r]of n){let o=(r||[]).filter(u=>u&&!Hu(u));if(!o.length)continue;let a=o.filter(u=>u.visible),l=bx(o,s);if(!t.length||!a.length){l&&ku(l);continue}let c=Xd(a[0].material);if(l&&l.userData.bpCapSig===i&&c&&l.userData.bpCapMatUuid===c.uuid&&l.children.length){_x(l,c,a[0].renderOrder||0);continue}if(l&&l.userData.bpCapSig===i&&c&&l.children.length){for(let u of l.children){if(!u.isMesh)continue;let h=u.material,f=u.userData.capPlaneIndex,d=typeof f=="number"?t.filter((x,m)=>m!==f):t;u.material=vx(c,d);let p=Array.isArray(h)?h:[h];for(let x of p)x&&(x.map=null),x?.dispose?.()}l.userData.bpCapMatUuid=c.uuid,_x(l,c,a[0].renderOrder||0);continue}q1(s,o,t,i)}}var $1=2,Y1=.45,Mx=.015;function $d(n){let e=new Vt().setFromObject(n);if(e.isEmpty())return{cx:0,cz:0,minY:0,spanM:0,scale:1,liftM:Mx};let t=new P;e.getSize(t);let i=Math.max(t.x,t.y,t.z,1e-9),s=i>$1?Y1/i:1;return{cx:(e.min.x+e.max.x)/2,cz:(e.min.z+e.max.z)/2,minY:e.min.y,spanM:i,scale:s,liftM:Mx}}function Sx(n,e=$d(n)){let{cx:t,cz:i,minY:s,scale:r,liftM:o}=e;return n.position.set(-t*r,-s*r+o,-i*r),n.scale.setScalar(r),n.updateMatrixWorld(!0),e}var Z1=`
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

.ifc-entry {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 1.1rem 0 0.2rem;
  padding: 0.75rem 0.9rem;
  border: 0;
  border-radius: var(--radius-sm);
  background: var(--fill);
  color: var(--fg);
  font: inherit;
  font-size: 1rem;
  text-align: left;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.ifc-entry:active { background: var(--fill-active); }
.ifc-entry-chevron {
  color: var(--fg-secondary);
  font-size: 1.25rem;
  line-height: 1;
}
.ifc-head {
  position: sticky;
  top: 0;
  z-index: 2;
  margin: 0 -1rem;
  padding: 0 0.85rem 0.2rem;
  background: var(--bg);
}
.ifc-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}
.ifc-back, .ifc-show-all, .ifc-crumb, .ifc-action, .ifc-menu-btn, .ifc-reveal {
  appearance: none;
  border: 0;
  background: transparent;
  color: var(--accent, #0a84ff);
  font: inherit;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.ifc-back {
  min-height: 2.75rem;
  padding: 0.2rem 0.35rem;
  font-size: 1.05rem;
  font-weight: 560;
}
.ifc-show-all {
  min-height: 2.75rem;
  padding: 0.2rem 0.45rem;
  font-size: 0.95rem;
}
.ifc-crumbs {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.15rem 0.2rem;
  color: var(--fg-secondary);
  font-size: 0.78rem;
}
.ifc-crumb {
  max-width: 9rem;
  padding: 0.15rem 0.2rem;
  overflow: hidden;
  color: var(--fg-secondary);
  font-size: 0.78rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ifc-crumb-sep { opacity: 0.6; }
.ifc-list { position: relative; }
.ifc-list-window { position: absolute; left: 0; right: 0; top: 0; }
.ifc-row {
  display: flex;
  align-items: center;
  gap: 0.2rem;
  box-sizing: border-box;
  border-bottom: 1px solid var(--hairline);
  touch-action: manipulation;
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
}
.ifc-row.is-target { background: rgba(10, 132, 255, 0.28); }
.ifc-row.is-hidden .ifc-row-name {
  opacity: 0.4;
  text-decoration: line-through;
}
.ifc-disclosure, .ifc-disclosure-spacer {
  flex: 0 0 1.7rem;
  width: 1.7rem;
  height: 1.7rem;
}
.ifc-disclosure {
  appearance: none;
  border: 0;
  border-radius: 0.4rem;
  background: transparent;
  color: var(--fg-secondary);
  font: inherit;
  font-size: 0.95rem;
  cursor: pointer;
}
.ifc-row-text {
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: 0.05rem;
}
.ifc-row-name {
  overflow: hidden;
  font-size: 0.98rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ifc-row-meta {
  overflow: hidden;
  color: var(--fg-secondary);
  font-size: 0.72rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ifc-popover, .ifc-menu {
  position: fixed;
  z-index: 6;
  box-sizing: border-box;
  max-width: min(20rem, calc(100vw - 1rem));
  max-height: min(70vh, 28rem);
  overflow: auto;
  padding: 0.75rem 0.8rem;
  border: 1px solid var(--glass-border);
  border-radius: var(--radius);
  background: var(--glass);
  color: var(--fg);
  box-shadow: var(--shadow);
  -webkit-backdrop-filter: blur(var(--blur)) saturate(1.7);
  backdrop-filter: blur(var(--blur)) saturate(1.7);
  -webkit-overflow-scrolling: touch;
}
.ifc-popover[hidden], .ifc-menu[hidden] { display: none; }
.ifc-pop-id { display: flex; align-items: flex-start; gap: 0.4rem; }
.ifc-pop-title {
  appearance: none;
  flex: 1;
  min-width: 0;
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}
.ifc-name {
  margin-top: 0.05rem;
  font-size: 1.05rem;
  font-weight: 650;
  overflow-wrap: anywhere;
}
.ifc-kicker {
  color: var(--fg-secondary);
  font-size: 0.68rem;
  font-weight: 650;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.ifc-gid, .ifc-value, .ifc-note {
  margin-top: 0.12rem;
  font-size: 0.92rem;
  overflow-wrap: anywhere;
}
.ifc-gid { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 0.78rem; }
.ifc-note { white-space: pre-wrap; }
.ifc-line { margin-top: 0.55rem; }
.ifc-reveal {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.6rem;
  background: var(--fill);
  color: var(--fg);
}
.ifc-actions, .ifc-menu { display: flex; flex-direction: column; gap: 0.35rem; }
.ifc-popover .ifc-actions { margin-top: 0.75rem; }
.ifc-action, .ifc-menu-btn {
  min-height: 2.75rem;
  padding: 0.45rem 0.7rem;
  border-radius: var(--radius-sm);
  background: var(--fill);
  color: var(--fg);
  font-size: 1rem;
  text-align: center;
}
.ifc-action:active, .ifc-menu-btn:active, .ifc-reveal:active { background: var(--fill-active); }
.ifc-menu { z-index: 8; padding: 0.45rem; touch-action: manipulation; }
.ifc-popover { z-index: 8; }
`,Ex=!1;function K1(){if(Ex)return;Ex=!0;let n=document.createElement("style");n.id="bp-viewer-chrome",n.textContent=Z1,document.head.appendChild(n)}function wx(n){K1();let e=document.getElementById("sheet"),t=document.getElementById("sheet-handle"),i=document.getElementById("sheet-scroll"),s=window.matchMedia("(min-width: 768px)"),r=window.matchMedia("(prefers-color-scheme: dark)"),o=[],a="peek";function l(){return s.matches}function c(){return a}function u(){for(let ie of o)ie(a)}function h(ie){o.push(ie),ie(a)}function f(){if(!e||!i)return;let ie=document.getElementById("sheet-inspector"),Ue=document.getElementById("sheet-main");if(ie&&!ie.hidden&&Ue?.hidden){let C=parseFloat(e.style.getPropertyValue("--sheet-partial-h"));if(Number.isFinite(C)&&C>0)return C}let Ke=document.getElementById("section-view"),xe=document.getElementById("section-cuts"),A=t?.offsetHeight||22,J=16,ne=0;if(Ke&&(ne+=Ke.offsetHeight),xe){let C=xe.querySelector(".sheet-title"),S=xe.querySelector(".cut-row");ne+=32,C&&(ne+=C.offsetHeight+8),S?ne+=S.offsetHeight:ne+=xe.offsetHeight}let Ee=A+ne+J,$=window.innerHeight||640,me=Math.round($*.28),Me=Math.round($*.45),Te=Math.max(me,Math.min(Me,Math.round(Ee)));return e.style.setProperty("--sheet-partial-h",`${Te}px`),Te}function d(){f(),!l()&&a==="partial"&&u()}function p(ie){let Ue=getComputedStyle(document.documentElement).getPropertyValue(`--safe-${ie}`).trim(),Ke=parseFloat(Ue);return Number.isFinite(Ke)?Ke:0}function x(){let ie={top:0,right:0,bottom:0,left:0};if(!e)return ie;if(l()){if(a!=="open")return ie;let Ke=e.offsetWidth||0;return{top:0,right:Math.max(0,Math.round(Ke)),bottom:0,left:0}}if(a!=="partial")return ie;let Ue=Math.round(K()+p("b"));return{top:0,right:0,bottom:Math.max(0,Math.min(window.innerHeight-80,Ue)),left:0}}function m(ie,Ue={}){if(!e)return;(l()?["closed","open"]:["peek","partial","full"]).includes(ie)||(ie=l()?"open":"peek"),a=ie,e.dataset.detent=ie,e.classList.toggle("sheet-open",ie!=="peek"&&ie!=="closed"),document.body.classList.toggle("sheet-open",ie!=="peek"&&ie!=="closed"),_(),Ue.silent||u()}function g(){l()?m("open"):m("peek"),f()}let v=document.getElementById("top-chrome"),b=document.getElementById("sheet-toggle");if(!b&&v){let ie=v.querySelector(".top-chrome-end");ie||(ie=document.createElement("div"),ie.className="top-chrome-end",v.append(ie)),b=document.createElement("button"),b.type="button",b.id="sheet-toggle",b.className="chrome-btn sheet-toggle",ie.append(b)}function _(){if(!b)return;let ie=a==="open";b.setAttribute("aria-expanded",ie?"true":"false"),b.setAttribute("aria-label",ie?"Hide controls":"Show controls"),b.title=ie?"Hide controls":"Show controls",b.textContent=ie?"\u203A":"\u2039"}b?.addEventListener("click",()=>{l()&&m(a==="open"?"closed":"open")});let w=!1,T=null,y=!1,E=!1,D=0,I=0,z=0,W=0,k="peek",N=0,G=0,j=0,q=0,ye=0,Y=null,V=12,Q=28,be='input, button, a, textarea, select, label, .seg, [role="slider"], [data-no-sheet-drag]';function Re(){return Math.max(t?.offsetHeight||34,34)+8}function K(){return f()||window.innerHeight*.38}function ae(){let ie=window.innerHeight||640;return Math.min(ie*.92,ie-72)}function B(){return e?.offsetWidth||0}function ee(ie){return ie instanceof Element?!!ie.closest(be):!1}function pe(){if(l()){m(a==="open"?"closed":"open");return}m(a==="peek"?"partial":a==="partial"?"full":"peek")}function Se(){e&&(e.style.transform="",e.style.opacity="",e.style.pointerEvents="")}function $e(ie,Ue,Ke){if(e){w=!0,y=!1,T=Ue,E=!1,k=a,D=ie.clientY,I=ie.clientX,N=D,G=I,j=performance.now(),q=0,ye=0,W=Ke,Y=ie.pointerId,e.classList.add("is-dragging"),e.style.transform=`translateX(${W}px)`,e.style.pointerEvents="auto";try{e.setPointerCapture(ie.pointerId)}catch{}}}function Oe(ie){if(!(!e||!t)&&!(ie.target!==t&&!t.contains(ie.target)&&ie.target!==e)){w=!0,y=!1,T="narrow",E=!1,k=a,e.classList.add("is-dragging"),D=ie.clientY,I=ie.clientX,N=D,G=I,j=performance.now(),q=0,ye=0,z=e.getBoundingClientRect().height,Y=ie.pointerId;try{t.setPointerCapture(ie.pointerId)}catch{}ie.preventDefault()}}function ze(ie){if(!e||ie.pointerType==="mouse"&&ie.button!==0||ie.target instanceof Element&&ie.target.closest(".chrome-btn"))return;let Ue=B();if(a==="closed"){let Ke=window.innerWidth-Q-p("r");if(ie.clientX<Ke)return;$e(ie,"wide-open",Ue),ie.preventDefault();return}e.contains(ie.target)&&(ee(ie.target)||(w=!0,y=!0,T="wide-close",E=!1,k=a,D=ie.clientY,I=ie.clientX,N=D,G=I,j=performance.now(),q=0,ye=0,W=0,Y=ie.pointerId))}function oe(ie){l()?ze(ie):Oe(ie)}function we(ie){if(!w||!e||Y!=null&&ie.pointerId!==Y)return;let Ue=performance.now(),Ke=Math.max(1,Ue-j),xe=Math.hypot(ie.clientX-I,ie.clientY-D);if(y){if(xe<=V)return;let Ee=ie.clientX-I,$=ie.clientY-D;if(Math.abs(Ee)<Math.abs($)*1.15||Ee<=0){w=!1,y=!1,T=null,Y=null;return}y=!1,E=!0,e.classList.add("is-dragging"),i&&(i.style.overflow="hidden");try{e.setPointerCapture(ie.pointerId)}catch{}ie.preventDefault()}if(xe>V&&(E=!0),T==="narrow"){let Ee=D-ie.clientY;q=(N-ie.clientY)/Ke*1e3,N=ie.clientY,j=Ue;let $=Re(),me=ae(),Me=Math.max($,Math.min(me,z+Ee));e.style.height=`${Me}px`;return}let A=ie.clientX-I;ye=(ie.clientX-G)/Ke*1e3,G=ie.clientX,j=Ue;let J=B(),ne=Math.max(0,Math.min(J,W+A));e.style.transform=`translateX(${ne}px)`}function ke(ie,Ue){let Ke=[{name:"peek",h:Re()},{name:"partial",h:K()},{name:"full",h:ae()}],xe=Math.max(0,Ke.findIndex(me=>me.name===k)),A=Ke[xe].h;if(Math.abs(ie-A)<36&&Math.abs(Ue)<1100)return k;let J=ie+Ue*.05,ne=(Ke[0].h+Ke[1].h)/2,Ee=(Ke[1].h+Ke[2].h)/2,$=J<ne?0:J<Ee?1:2;if($>xe+1&&($=xe+1),$<xe-1&&($=xe-1),$===2&&xe<2){let me=Ee+(Ke[2].h-Ee)*.25;ie<me&&Ue<1400&&($=1)}return Ke[$].name}function He(ie,Ue){let Ke=B();return Ke<=0||Math.abs(ie-(k==="closed"?Ke:0))<28&&Math.abs(Ue)<800?k:Ue>900?"closed":Ue<-900?"open":ie>Ke*.45?"closed":"open"}function Ze(ie){if(!w||!e||Y!=null&&ie.pointerId!==Y)return;let Ue=T,Ke=y;if(w=!1,y=!1,T=null,Y=null,e.classList.remove("is-dragging"),i&&(i.style.overflow=""),Ke&&!E)return;if(!E){Ue==="narrow"?(e.style.height="",pe()):Ue==="wide-open"?(Se(),m("open")):Se();return}if(Ue==="narrow"){let J=e.getBoundingClientRect().height;e.style.height="",m(ke(J,q));return}let xe=/translateX\(([-\d.]+)px\)/.exec(e.style.transform||""),A=xe?parseFloat(xe[1]):0;Se(),m(He(A,ye))}t?.addEventListener("pointerdown",ie=>{l()||oe(ie)}),t?.addEventListener("pointermove",we),t?.addEventListener("pointerup",Ze),t?.addEventListener("pointercancel",Ze),t&&t.setAttribute("aria-label","Sheet handle \u2014 tap to resize, drag to adjust"),document.addEventListener("pointerdown",ie=>{l()&&ze(ie)},{capture:!0}),document.addEventListener("pointermove",we,{capture:!0}),document.addEventListener("pointerup",Ze,{capture:!0}),document.addEventListener("pointercancel",Ze,{capture:!0});let De=()=>{e&&(e.style.height=""),Se(),i&&(i.style.overflow=""),g()};s.addEventListener?s.addEventListener("change",De):s.addListener(De);function rt(){n(r.matches)}return rt(),r.addEventListener?r.addEventListener("change",rt):r.addListener(rt),window.addEventListener("resize",()=>{f(),u()}),g(),_(),{getDetent:c,getSafeInsets:x,onDetentChange:h,refreshPartialHeight:d,setDetent:m}}function Vu(n={}){let e=n.min??0,t=n.max??1,i=n.step??.001,s=!!n.thumbScrubOnly,r=tl(n.value??e,e,t),o=document.createElement("div");o.className="coop-range",o.setAttribute("role","slider"),o.tabIndex=0,n.ariaLabel&&o.setAttribute("aria-label",n.ariaLabel),o.setAttribute("aria-valuemin",String(e)),o.setAttribute("aria-valuemax",String(t));let a=document.createElement("div");a.className="coop-range-track";let l=document.createElement("div");l.className="coop-range-fill";let c=document.createElement("div");c.className="coop-range-thumb",a.append(l,c),o.append(a);let u=10,h=14,f=null,d=0,p=0,x=!1,m=!1,g=!1,v=!0;function b(){let N=`${(t===e?0:(r-e)/(t-e))*100}%`;l.style.width=N,c.style.left=N,o.setAttribute("aria-valuenow",String(r));let G=n.formatAriaValue?.(r)??String(r);o.setAttribute("aria-valuetext",G)}function _(k,N){let G=typeof c.getBoundingClientRect=="function"?c.getBoundingClientRect():null;return!G||!(G.width>0)||!(G.height>0)?!0:k>=G.left-h&&k<=G.right+h&&N>=G.top-h&&N<=G.bottom+h}function w(k,N="input"){let G=J1(tl(k,e,t),e,t,i);if(G===r&&N==="silent"){b();return}r=G,b(),(N==="input"||N==="change")&&n.onInput?.(r),N==="change"&&n.onChange?.(r)}function T(k){let N=a.getBoundingClientRect(),G=Math.max(N.width,1),j=tl((k-N.left)/G,0,1);return e+j*(t-e)}function y(k){if(f==null)return;let N=m;f=null,x=!1,m=!1,v=!0,N&&n.onScrubEnd?.(),k&&N&&n.onChange?.(r)}function E(k){f==null&&(k.pointerType==="mouse"&&k.button!==0||(f=k.pointerId,d=k.clientX,p=k.clientY,g=!1,x=!1,m=!1,v=!s||_(k.clientX,k.clientY)))}function D(k){if(f!==k.pointerId)return;let N=k.clientX-d,G=k.clientY-p;if(!g&&Math.hypot(N,G)>u&&(g=!0),!x){if(!g)return;if(k.pointerType==="touch"&&Math.abs(G)>=Math.abs(N)){y(!1);return}if(!v){y(!1);return}x=!0,m=!0,n.onScrubStart?.();try{o.setPointerCapture(k.pointerId)}catch{}}w(T(k.clientX),"input"),k.preventDefault()}function I(k){if(f===k.pointerId){if(!g&&!m){f=null,x=!1,m=!1,v=!0,n.onTap?.();return}y(!0)}}function z(k){f===k.pointerId&&y(!1)}function W(k){let N=t-e,G=i>0?i:N/100,j=N/10,q=r;switch(k.key){case"ArrowLeft":case"ArrowDown":q=r-G;break;case"ArrowRight":case"ArrowUp":q=r+G;break;case"PageDown":q=r-j;break;case"PageUp":q=r+j;break;case"Home":q=e;break;case"End":q=t;break;case"Enter":case" ":k.preventDefault(),n.onTap?.();return;default:return}k.preventDefault(),w(q,"change")}return o.addEventListener("pointerdown",E),o.addEventListener("pointermove",D),o.addEventListener("pointerup",I),o.addEventListener("pointercancel",z),o.addEventListener("keydown",W),b(),{el:o,get value(){return r},set value(k){w(k,"silent")},refresh(){b()}}}function tl(n,e,t){return Math.min(t,Math.max(e,n))}function J1(n,e,t,i){if(!(i>0))return tl(n,e,t);let s=Math.round((n-e)/i),r=Number((e+s*i).toPrecision(12));return tl(r,e,t)}var Tx="blueprints.locale",j1={shell:"Shell",slopes:"Slopes",soffit:"Soffit",bass_traps:"Bass traps",furniture:"Furniture",interior:"Interior",cabinet:"Cabinets",appliance:"Appliances",sink:"Sink",rug:"Rug",light:"Lights",door:"Door",other:"Other",floor:"Floor",masonry:"Masonry",column:"Column",venec:"Ring beam",eps:"EPS",plaster:"Plaster",wall_plate:"Wall plate",rafters:"Rafters",roofing:"Roofing build-up",plenum_wool:"Mineral wool \u03BB 0.039",racking_strap:"Racking strap",tie_rod:"Tie rod \xD814",slope_light:"Slope spotlight",pocket_frame:"Pocket-door frame",wall_gkf:"GKF plasterboard",glazing:"Glazing",slope_naturheld_140:"NaturHeld 140",slope_gkf:"GKF plasterboard",slope_cd:"CD Rigips 60\xD727",slope_foil:"Jutafol N AL 170 Speci\xE1l",eave_ud:"UD 28/27 on the wall plate",vapour_brake_tape:"Vapour brake bond tape",eave_acrylic:"Acrylic bead (planned cut)",joint_screw:"Screws",slope_direct_hanger:"Direct hanger 200",slope_nonius:"Nonius 440",soffit_naturheld_140:"NaturHeld 140",soffit_mineral_wool:"Mineral wool \u03BB 0.039",soffit_ud:"UD channel",soffit_gkf:"GKF plasterboard",soffit_cd:"CD Rigips 60\xD727",soffit_nonius:"Nonius 440",soffit_duct:"Spiral duct \xD8160",bass_mineral_wool:"Mineral wool \u03BB 0.039",bass_gkb:"GKB plasterboard",bass_cw:"CW stud",bass_uw:"UW track",bass_strut:"CW strut to wall",bass_angle:"Wall angle",bass_anchor:"Anchor into the block",bass_tape:"Sealing tape",bass_acrylic:"Acrylic joint",bathroom:"Bathroom 1.20",tile:"Tiles",grout:"Grout",drain:"Floor drain",fixture:"Sanitary fixture",prewall:"Pre-wall",screen:"Shower screen",profile:"Sloped edge profile",vanity:"Vanity cabinet"},Q1={shell:"Ob\xE1lka",slopes:"\u0160ikminy",soffit:"Podhled",bass_traps:"Basstrapy",furniture:"N\xE1bytek",interior:"Interi\xE9r",cabinet:"Sk\u0159\xED\u0148ky",appliance:"Spot\u0159ebi\u010De",sink:"D\u0159ez",rug:"Koberec",light:"Sv\xEDtidla",door:"Dve\u0159e",other:"Ostatn\xED",floor:"Podlaha",masonry:"Zdivo",column:"Sloup",venec:"V\u011Bnec",eps:"EPS",plaster:"Om\xEDtka",wall_plate:"Pozednice",rafters:"Krokve",roofing:"St\u0159e\u0161n\xED skladba",plenum_wool:"Miner\xE1ln\xED vata \u03BB 0,039",racking_strap:"Zav\u011Btrovac\xED p\xE1ska",tie_rod:"T\xE1hlo \xF814",slope_light:"Bodovka na \u0161ikmin\u011B",pocket_frame:"Pouzdro",wall_gkf:"GKF s\xE1drokarton",glazing:"Zasklen\xED",slope_naturheld_140:"NaturHeld 140",slope_gkf:"GKF s\xE1drokarton",slope_cd:"CD Rigips 60\xD727",slope_foil:"Jutafol N AL 170 Speci\xE1l",eave_ud:"UD 28/27 na pozednici",vapour_brake_tape:"Lepic\xED p\xE1ska paroz\xE1brany",eave_acrylic:"Akrylov\xFD tmel (\u0159ez)",joint_screw:"\u0160rouby",slope_direct_hanger:"P\u0159\xEDm\xFD z\xE1v\u011Bs 200",slope_nonius:"Nonius 440",soffit_naturheld_140:"NaturHeld 140",soffit_mineral_wool:"Miner\xE1ln\xED vata \u03BB 0,039",soffit_ud:"UD profil",soffit_gkf:"GKF s\xE1drokarton",soffit_cd:"CD Rigips 60\xD727",soffit_nonius:"Nonius 440",soffit_duct:"Spiro \xD8160",bass_mineral_wool:"Miner\xE1ln\xED vata \u03BB 0,039",bass_gkb:"GKB s\xE1drokarton",bass_cw:"CW stojka",bass_uw:"UW profil",bass_strut:"CW vzp\u011Bra do zdi",bass_angle:"\xDAheln\xEDk do zdi",bass_anchor:"Hmo\u017Edinka do zdiva",bass_tape:"T\u011Bsnic\xED p\xE1ska",bass_acrylic:"Akrylov\xFD spoj",bathroom:"Koupelna 1.20",tile:"Dla\u017Eba",grout:"Sp\xE1ry",drain:"Podlahov\xE1 vpus\u0165",fixture:"Za\u0159izovac\xED p\u0159edm\u011Bt",prewall:"P\u0159\xEDzd\xEDvka",screen:"Sprchov\xE9 sklo",profile:"Sp\xE1dov\xE1 li\u0161ta",vanity:"Sk\u0159\xED\u0148ka umyvadla"},eT={"ui.view":"View","ui.sections":"Cuts","ui.parts":"Parts","ui.materials":"Materials","ui.edges":"Edges","ui.language":"Language","ui.solid":"Solid","ui.realistic":"Realistic","ui.edgesNone":"None","ui.edgesTransparent":"Transparent","ui.edgesOpaque":"Opaque","ui.iso":"Iso","ui.front":"Front","ui.side":"Side","ui.top":"Top","ui.fov":"FOV","ui.sync":"Sync","ui.measure":"Measure","ui.ar":"AR","ui.cut":"Cut","ui.removeSection":"Remove","ui.hideControls":"Hide controls","ui.showControls":"Show controls","ui.dragSheet":"Drag controls sheet","ui.drawing":"Drawing","ui.labels":"Labels","ui.inspector":"Inspector","ui.menu":"Menu","ui.showAll":"Show all","ui.hideThis":"Hide this","ui.unhideThis":"Unhide this","ui.hideOthers":"Hide all others","ui.unhideOthers":"Unhide all others","ui.expand":"Expand","ui.collapse":"Collapse","ui.globalId":"GlobalId","ui.type":"Type","ui.name":"Name","ui.storey":"Storey","ui.space":"Space","ui.dimensions":"Dimensions","ui.note":"Note","ui.reveal":"Show in inspector","ui.noIfc":"No IFC record","ui.open":"Open","ui.close":"Close","ui.turnOn":"Turn on","ui.turnOff":"Turn off","ui.press":"Press","scene.overview":"Overview","scene.opening":"Door and window","scene.posts":"120 mm posts","scene.soffit":"Podhled","scene.gable":"\u0160t\xEDt","scene.sikmina-lattice":"\u0160ikmina \u2014 ro\u0161t","scene.sikmina-section":"\u0160ikmina \u2014 \u0159ez","scene.bass-kitchen":"Basov\xE1 past \u2014 kuchy\u0148","scene.bass-living":"Basov\xE1 past \u2014 ob\xFDv\xE1k","scene.bass-kitchen-elevation":"Kuchy\u0148 \u2014 pohled","scene.bass-kitchen-section":"Kuchy\u0148 \u2014 \u0159ez","scene.bass-living-elevation":"Ob\xFDv\xE1k \u2014 pohled","scene.bass-living-section":"Ob\xFDv\xE1k \u2014 \u0159ez","scene.ties-front":"T\xE1hla a sv\u011Btla \u2014 pohled","scene.ties-plan":"T\xE1hla a sv\u011Btla \u2014 p\u016Fdorys","scene.ties-section":"T\xE1hlo \u2014 \u0159ez","scene.kitchen-living":"Kuchy\u0148 k ob\xFDv\xE1ku","scene.living-kitchen":"Ob\xFDv\xE1k ke kuchyni","scene.kitchen-run":"Kuchy\u0148sk\xE1 linka","scene.bathroom-floor":"1.20 floor tiles","scene.bathroom":"1.20 room","scene.bathroom-door":"1.20 door and slope"},tT={"ui.view":"Pohled","ui.sections":"\u0158ezy","ui.parts":"D\xEDly","ui.materials":"Materi\xE1ly","ui.edges":"Hrany","ui.language":"Jazyk","ui.solid":"Pln\xE9","ui.realistic":"Realistick\xE9","ui.edgesNone":"\u017D\xE1dn\xE9","ui.edgesTransparent":"Pr\u016Fhledn\xE9","ui.edgesOpaque":"Nepr\u016Fhledn\xE9","ui.iso":"Iso","ui.front":"\u010Celo","ui.side":"Bok","ui.top":"P\u016Fdorys","ui.fov":"FOV","ui.sync":"Sjednotit","ui.measure":"M\u011B\u0159en\xED","ui.ar":"AR","ui.cut":"\u0158ez","ui.removeSection":"Odstranit","ui.hideControls":"Skr\xFDt ovl\xE1d\xE1n\xED","ui.showControls":"Zobrazit ovl\xE1d\xE1n\xED","ui.dragSheet":"P\u0159et\xE1hnout panel","ui.drawing":"V\xFDkres","ui.labels":"Popisky","ui.inspector":"Inspektor","ui.menu":"Nab\xEDdka","ui.showAll":"Zobrazit v\u0161e","ui.hideThis":"Skr\xFDt toto","ui.unhideThis":"Zobrazit toto","ui.hideOthers":"Skr\xFDt ostatn\xED","ui.unhideOthers":"Zobrazit ostatn\xED","ui.expand":"Rozbalit","ui.collapse":"Sbalit","ui.globalId":"GlobalId","ui.type":"Typ","ui.name":"N\xE1zev","ui.storey":"Podla\u017E\xED","ui.space":"M\xEDstnost","ui.dimensions":"Rozm\u011Bry","ui.note":"Pozn\xE1mka","ui.reveal":"Zobrazit v inspektoru","ui.noIfc":"Bez IFC z\xE1znamu","ui.open":"Otev\u0159\xEDt","ui.close":"Zav\u0159\xEDt","ui.turnOn":"Zapnout","ui.turnOff":"Vypnout","ui.press":"Stisknout","scene.overview":"Celkov\u011B","scene.opening":"Dve\u0159e a okno","scene.posts":"Sloupky 120","scene.soffit":"Podhled","scene.gable":"\u0160t\xEDt","scene.sikmina-lattice":"\u0160ikmina \u2014 ro\u0161t","scene.sikmina-section":"\u0160ikmina \u2014 \u0159ez","scene.bass-kitchen":"Basov\xE1 past \u2014 kuchy\u0148","scene.bass-living":"Basov\xE1 past \u2014 ob\xFDv\xE1k","scene.bass-kitchen-elevation":"Kuchy\u0148 \u2014 pohled","scene.bass-kitchen-section":"Kuchy\u0148 \u2014 \u0159ez","scene.bass-living-elevation":"Ob\xFDv\xE1k \u2014 pohled","scene.bass-living-section":"Ob\xFDv\xE1k \u2014 \u0159ez","scene.ties-front":"T\xE1hla a sv\u011Btla \u2014 pohled","scene.ties-plan":"T\xE1hla a sv\u011Btla \u2014 p\u016Fdorys","scene.ties-section":"T\xE1hlo \u2014 \u0159ez","scene.kitchen-living":"Kuchy\u0148 k ob\xFDv\xE1ku","scene.living-kitchen":"Ob\xFDv\xE1k ke kuchyni","scene.kitchen-run":"Kuchy\u0148sk\xE1 linka","scene.bathroom-floor":"1.20 dla\u017Eba","scene.bathroom":"1.20 koupelna","scene.bathroom-door":"1.20 pr\xE1h a sp\xE1d"},Yd={en:{...eT,...j1},cs:{...tT,...Q1}},Ao=Ax(),Zd=new Set;function Ax(){try{let n=typeof navigator<"u"&&navigator.language||"";if(String(n).toLowerCase().startsWith("cs"))return"cs"}catch{}return"en"}function nT(){try{let n=localStorage.getItem(Tx);if(n==="en"||n==="cs")return n}catch{}return Ax()}function iT(n){try{localStorage.setItem(Tx,n)}catch{}}function Gu(){return Ao}function Rx(n){if(!(n!=="en"&&n!=="cs")&&n!==Ao){Ao=n,iT(n);for(let e of Zd)try{e()}catch{}}}function Kd(n){return Zd.add(n),()=>Zd.delete(n)}function Cx(){return Ao=nT(),Ao}function Yt(n){let e=Yd[Ao]||Yd.en;if(Object.prototype.hasOwnProperty.call(e,n))return e[n];let t=Yd.en;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:n.startsWith("scene.")?n.slice(6):n}function Jd(n){let e=n||document;e.querySelectorAll("[data-i18n]").forEach(t=>{let i=t.getAttribute("data-i18n");i&&(t.textContent=Yt(i))}),e.querySelectorAll("[data-i18n-aria]").forEach(t=>{let i=t.getAttribute("data-i18n-aria");i&&t.setAttribute("aria-label",Yt(i))}),e.querySelectorAll("[data-i18n-title]").forEach(t=>{let i=t.getAttribute("data-i18n-title");i&&t.setAttribute("title",Yt(i))})}function Sr(n){return!!(n&&n.userData&&n.userData.bpHitProxy)}function nl(n){if(!n||!n.visible||Sr(n))return!1;let e=n.userData||{};return!(e.bpIfcHidden||e.isEdgeOverlay||e.isSectionCap||e.isPeeledEdgeBatch)}function Px(){let n=[];function e(s){n.push(s),n.sort((r,o)=>(o.priority||0)-(r.priority||0))}function t(s,r,o){let a=[];for(let l of s)o&&!o(l)||a.push(l);for(let l of a)for(let c of n){let u=c.claim?.(l,r);if(u)return u.onTap(),!0}for(let l of n)if(l.fallback?.(a,r))return!0;return!1}function i(s,r,o){let a=[];for(let l of s)o&&!o(l)||a.push(l);for(let l of a)for(let c of n){let u=c.claim?.(l,r);if(u)return Array.isArray(u.actions)?u.actions.slice():[]}return[]}return{register:e,dispatch:t,actionsFor:i,handlers:n}}var Ix=8,sT=56,Lx=14,jd=11,Dx=.5,rT=1e-4,Wu=128,oT=.028,aT=5,lT=.995,cT=.999,Nx=18,uT=22,hT=14,Qd=new Ye,Ox=new _i,li=new P,ci=new P,Ki=new P,Un=new P,Po=new P,Zi=new P,Ro=new P,Co=new P,Ut=new P,Ux=new P,Io=new P,fT=new gn;function ep(n){let e=Math.abs(n)*1e3;return Number.isFinite(e)?Math.abs(e-Math.round(e))<.05?`${Math.round(e)} mm`:e>=100?`${e.toFixed(1)} mm`:`${e.toFixed(2)} mm`:"\u2014 mm"}function tp(n){return n.pointerType==="touch"}function np(n){return n.pointerType==="mouse"||n.pointerType==="pen"}function Fx(){return typeof window<"u"&&window.matchMedia?.("(hover: hover) and (pointer: fine)").matches}function Xx(n){let{scene:e,canvas:t,getCamera:i,controls:s,getRoot:r,getClipPlanes:o,onLiveLength:a,onActiveChange:l}=n,c="idle",u=!1,h=!1,f=0,d=0,p=null,x=null,m=null,g=null,v=null,b=null,_=null,w="mouse",T=0,y=0,E=!1,D=!1,I=new zt;I.name="MeasureOverlay",I.renderOrder=10,e.add(I);let z=new zt;z.name="MeasureDimensions",e.add(z);let W=kx(16766474),k=kx(3458905),N=Hx(16766474,.75),G=xT(16766474);I.add(W,k,N,G),W.visible=!1,k.visible=!1,N.visible=!1,G.visible=!1;let j=mT(t),q=[];function ye(){return u}function Y(xe){let A=!!xe;if(A===u){A&&Q();return}if(u=A,u)if(s.enabled=!1,c="placeFirst",V(),v=null,b=null,Fx()){let J=Math.max(1,t.clientWidth),ne=Math.max(1,t.clientHeight);Re(J*.5,ne*.5,!0)}else be();else s.enabled=!0,c="idle",V(),v=null,b=null,_=null,D=!1,be(),a?.(null);l?.(u),Q(),ae()}function V(){h=!1,p=null,x=null,m=null,g=null}function Q(){c==="placeSecond"&&v&&p?a?.(ep(v.distanceTo(p))):u&&a?.(null)}function be(){j.hidden=!0,W.visible=!1,G.visible=!1}function Re(xe,A,J=!1){f=xe,d=A,h=!0;let ne=Oe(xe,A);if(ne){let Ee=ne.point.clone(),$=ne.kind,me=ne.edgeDir;if(g=null,c==="placeSecond"&&v){let Me=ze(v,b,ne);Me&&(Ee=Me.foot,$="perp",me=Me.edgeDir,g=Me.edgeDir.clone())}p=Ee,x=$,m=me}else J?p||(x=null,m=null,g=null):(p=null,x=null,m=null,g=null);ae(),Q()}function K(xe,A){let J=Se(A)*aT;xe.scale.setScalar(Math.max(J,1e-6))}function ae(){if(!u){be(),k.visible=!1,N.visible=!1,G.visible=!1;return}v?(k.visible=!0,k.position.copy(v),K(k,v)):k.visible=!1,h?(j.hidden=!1,zx(j,t,f,d,x),p?(W.visible=!0,W.position.copy(p),K(W,p),gT(W,x)):W.visible=!1):be(),c==="placeSecond"&&v&&p?(Gx(N,v,p),N.visible=!0):N.visible=!1,c==="placeSecond"&&x==="perp"&&v&&p&&g?(Vx(G,v,p,g,Se),G.visible=!0):G.visible=!1}function B(xe){let A=t.getBoundingClientRect();return{x:xe.clientX-A.left,y:xe.clientY-A.top}}function ee(xe,A,J){return J==="touch"?{x:xe,y:A-sT}:{x:xe,y:A}}function pe(xe){let A=o()||[];for(let J of A)if(J.distanceToPoint(xe)<-rT)return!1;return!0}function Se(xe){let A=i(),J=Math.max(1,t.clientHeight);if(A.isOrthographicCamera)return 2*((A.top-A.bottom)/(2*Math.max(A.zoom,1e-6)))/J;let ne=A.position.distanceTo(xe),Ee=A.fov*Math.PI/180;return 2*Math.tan(Ee/2)*ne/J/Math.max(A.zoom,1e-6)}function $e(xe,A){A.copy(xe).project(i());let J=Math.max(1,t.clientWidth),ne=Math.max(1,t.clientHeight);return A.x=(A.x*.5+.5)*J,A.y=(-A.y*.5+.5)*ne,A}function Oe(xe,A){let J=r();if(!J)return null;let ne=t.getBoundingClientRect();Qd.x=xe/Math.max(1,ne.width)*2-1,Qd.y=-(A/Math.max(1,ne.height))*2+1,Ox.setFromCamera(Qd,i());let Ee=Ox.intersectObject(J,!0),$=null;for(let Fe of Ee)if(!(!Fe.object.visible||Sr(Fe.object))&&pe(Fe.point)){$=Fe;break}if(!$)return null;let me=$.object,Me=me.geometry;if(!Me?.getAttribute("position"))return{point:$.point.clone(),kind:"face",edgeDir:null,mesh:me,triVerts:null,faceNormal:null};me.updateWorldMatrix(!0,!1);let Te=Se($.point),C=Te*Lx,S=Te*jd,X=Me.getAttribute("position"),ve=Me.getIndex(),de=$.faceIndex,he=[];if($.face)li.fromBufferAttribute(X,$.face.a).applyMatrix4(me.matrixWorld),ci.fromBufferAttribute(X,$.face.b).applyMatrix4(me.matrixWorld),Ki.fromBufferAttribute(X,$.face.c).applyMatrix4(me.matrixWorld),he.push(li.clone(),ci.clone(),Ki.clone());else if(typeof de=="number"){let Fe,it,Z;ve?(Fe=ve.getX(de*3),it=ve.getX(de*3+1),Z=ve.getX(de*3+2)):(Fe=de*3,it=de*3+1,Z=de*3+2),li.fromBufferAttribute(X,Fe).applyMatrix4(me.matrixWorld),ci.fromBufferAttribute(X,it).applyMatrix4(me.matrixWorld),Ki.fromBufferAttribute(X,Z).applyMatrix4(me.matrixWorld),he.push(li.clone(),ci.clone(),Ki.clone())}let _e=null;he.length===3&&(_e=new P().subVectors(he[1],he[0]).cross(Un.subVectors(he[2],he[0])).normalize(),_e.lengthSq()<1e-12&&(_e=null));let re=xe,ce=A,Ie=null;function U(Fe){if(!pe(Fe)||Fe.distanceToSquared($.point)>C*C*4)return;$e(Fe,Co);let it=Math.hypot(Co.x-re,Co.y-ce);it>Lx||(!Ie||it<Ie.distPx)&&(Ie={point:Fe.clone(),distPx:it})}for(let Fe of he)U(Fe);let ge=C*C*4,ue=X.count,Ne=ue>8e3?2:1;for(let Fe=0;Fe<ue;Fe+=Ne)Un.fromBufferAttribute(X,Fe).applyMatrix4(me.matrixWorld),!(Un.distanceToSquared($.point)>ge)&&U(Un);if(Ie)return{point:Ie.point,kind:"vertex",edgeDir:null,mesh:me,triVerts:he.length?he:null,faceNormal:_e};let Pe=null;function Le(Fe,it){Ut.copy(it).sub(Fe);let Z=Ut.lengthSq();if(Z<1e-18)return;let Ae=Un.copy($.point).sub(Fe).dot(Ut)/Z;if(Ae=Math.min(1,Math.max(0,Ae)),Po.copy(Fe).addScaledVector(Ut,Ae),!pe(Po)||Po.distanceToSquared($.point)>S*S*4)return;$e(Po,Co);let st=Math.hypot(Co.x-re,Co.y-ce);if(st>jd)return;$e(Fe,Zi),$e(it,Ro);let Ce=Ro.x-Zi.x,ut=Ro.y-Zi.y,Et=Ce*Ce+ut*ut;if(Et>1e-6){let Zt=((re-Zi.x)*Ce+(ce-Zi.y)*ut)/Et;Zt=Math.min(1,Math.max(0,Zt));let Rs=Zi.x+Ce*Zt,Ti=Zi.y+ut*Zt;if(Math.hypot(re-Rs,ce-Ti)>jd)return}(!Pe||st<Pe.distPx)&&(Pe={point:Po.clone(),distPx:st,dir:Ut.clone().normalize()})}return he.length===3&&(Le(he[0],he[1]),Le(he[1],he[2]),Le(he[2],he[0])),Pe?{point:Pe.point,kind:"edge",edgeDir:Pe.dir,mesh:me,triVerts:he.length?he:null,faceNormal:_e}:{point:$.point.clone(),kind:"face",edgeDir:null,mesh:me,triVerts:he.length?he:null,faceNormal:_e}}function ze(xe,A,J){if(!J.mesh||!J.triVerts||J.triVerts.length!==3||!J.faceNormal||J.faceNormal.lengthSq()<1e-12)return null;let ne=Se(xe),Ee=ne*hT,$=Math.max(ne*2,1e-5);if(Math.abs(Xu(xe,J.triVerts[0],J.faceNormal))>$)return null;let me=oe(J.mesh,J.triVerts[0],J.faceNormal,$);if(!me.length)return null;let Me=[];for(let S of me)Bx(xe,S.a,S.b)<=Ee&&Me.push(S.dir.clone());if(A&&A.lengthSq()>1e-12&&Me.push(A.clone().normalize()),!Me.length)return null;let Te=ne*Nx,C=null;for(let S of Me)if(!(S.lengthSq()<1e-12)){S.normalize();for(let X of me){if(Math.abs(X.dir.dot(S))<lT||Bx(xe,X.a,X.b)<=Ee)continue;let ve=dT(xe,X.a,X.b);if(!pe(ve)||xe.distanceTo(ve)*1e3<Dx||(Ut.copy(ve).sub(xe),Ut.lengthSq()<1e-16)||(Ut.normalize(),Math.abs(Ut.dot(S))>.08))continue;let he=J.point.distanceTo(ve);$e(J.point,Zi),$e(ve,Ro);let _e=Math.hypot(Zi.x-Ro.x,Zi.y-Ro.y);if(he>Te*1.35&&_e>Nx)continue;let re=_e+he/Math.max(ne,1e-9);(!C||re<C.score)&&(C={foot:ve.clone(),edgeDir:S.clone(),score:re})}}return C?{foot:C.foot,edgeDir:C.edgeDir}:null}function oe(xe,A,J,ne){let Ee=xe.geometry,$=Ee?.getAttribute("position");if(!$)return[];xe.updateWorldMatrix(!0,!1);let me=Ee.getIndex(),Me=new Map,Te=Math.max(ne*.25,1e-5);function C(he,_e,re){Io.subVectors(_e,he).cross(Un.subVectors(re,he)),!(Io.lengthSq()<1e-16)&&(Io.normalize(),!(Math.abs(Io.dot(J))<cT)&&(Math.abs(Xu(he,A,J))>ne||Math.abs(Xu(_e,A,J))>ne||Math.abs(Xu(re,A,J))>ne||(S(he,_e),S(_e,re),S(re,he))))}function S(he,_e){if(Ut.copy(_e).sub(he),Ut.lengthSq()<1e-16)return;let re=pT(he,_e,Te);Me.has(re)||Me.set(re,{a:he.clone(),b:_e.clone(),dir:Ut.clone().normalize()})}let X=me?me.count/3:$.count/3,ve=12e3,de=X>ve?Math.ceil(X/ve):1;for(let he=0;he<X;he+=de){let _e,re,ce;if(me){let Ie=he*3;_e=me.getX(Ie),re=me.getX(Ie+1),ce=me.getX(Ie+2)}else _e=he*3,re=he*3+1,ce=he*3+2;li.fromBufferAttribute($,_e).applyMatrix4(xe.matrixWorld),ci.fromBufferAttribute($,re).applyMatrix4(xe.matrixWorld),Ki.fromBufferAttribute($,ce).applyMatrix4(xe.matrixWorld),C(li,ci,Ki)}return[...Me.values()]}function we(){if(p){if(c==="placeFirst"){v=p.clone(),b=m?m.clone():null,c="placeSecond",g=null,(tp({pointerType:w})||!Fx())&&(h=!1,p=null,x=null,m=null,be()),ae(),Q();return}if(c==="placeSecond"&&v){if(v.distanceTo(p)*1e3<Dx)return;ke(v,p),Y(!1)}}}function ke(xe,A){let J=new zt;J.name="Dimension";let ne=Hx(16752394,1);Gx(ne,xe,A),ne.visible=!0;let Ee=xe.clone().lerp(A,.5),$=xe.distanceTo(A),me=yT(ep($));me.position.copy(Ee),J.add(ne,me),z.add(J),q.push({group:J,sprite:me,mid:Ee.clone(),span:$}),He(me,xe,A,Ee,$)}function He(xe,A,J,ne,Ee){let $=i();if($.getWorldDirection(Ux),Ut.copy(J).sub(A),Ut.lengthSq()<1e-16){xe.position.copy(ne);return}Ut.normalize(),Un.crossVectors(Ut,Ux),Un.lengthSq()<1e-10&&Un.copy($.up),Un.normalize();let me=Math.max(Ee*oT,Se(ne)*18);xe.position.copy(ne).addScaledVector(Un,me);let Me=Se(xe.position)*56;xe.scale.set(Me*2.2,Me,1)}function Ze(){k.visible&&v&&K(k,v),W.visible&&p&&K(W,p),h&&zx(j,t,f,d,x),G.visible&&v&&p&&g&&x==="perp"&&Vx(G,v,p,g,Se);for(let xe of q){let J=xe.group.children[0].geometry.getAttribute("position");li.fromBufferAttribute(J,0),ci.fromBufferAttribute(J,1),He(xe.sprite,li,ci,xe.mid,xe.span)}}function De(xe){if(!u||c==="idle"||!np(xe)||_!==null)return;let{x:A,y:J}=B(xe),ne=ee(A,J,xe.pointerType);Re(ne.x,ne.y,!0)}function rt(xe){if(!u||c==="idle"||xe.button!==void 0&&xe.button!==0||_!==null)return;_=xe.pointerId,w=xe.pointerType||"mouse";let{x:A,y:J}=B(xe);T=A,y=J,E=!1,D=!1;try{t.setPointerCapture(xe.pointerId)}catch{}if(np(xe)){let ne=ee(A,J,w);Re(ne.x,ne.y,!0)}xe.preventDefault()}function ie(xe){if(!u)return;if(_===null){De(xe);return}if(_!==xe.pointerId)return;let{x:A,y:J}=B(xe);if(Math.hypot(A-T,J-y)>=Ix&&(E=!0,D=!0),tp(xe)){if(!D)return;let Ee=ee(A,J,"touch");Re(Ee.x,Ee.y,!0)}else if(np(xe)){let Ee=ee(A,J,w);Re(Ee.x,Ee.y,!0)}xe.preventDefault()}function Ue(xe){if(!u||_!==xe.pointerId)return;let{x:A,y:J}=B(xe);Math.hypot(A-T,J-y)>=Ix&&(E=!0,D=!0),_=null;try{t.releasePointerCapture(xe.pointerId)}catch{}if(tp(xe)){E?D=!1:(D=!1,h&&p&&we()),xe.preventDefault();return}!E&&p&&we(),D=!1,xe.preventDefault()}function Ke(xe){_===xe.pointerId&&(_=null,D=!1)}return t.addEventListener("pointerdown",rt),t.addEventListener("pointermove",ie),t.addEventListener("pointerup",Ue),t.addEventListener("pointercancel",Ke),{isActive:ye,setActive:Y,update:Ze,formatMm:ep}}function Xu(n,e,t){return fT.setFromNormalAndCoplanarPoint(t,e).distanceToPoint(n)}function Bx(n,e,t){Ut.copy(t).sub(e);let i=Ut.lengthSq();if(i<1e-18)return n.distanceTo(e);let s=Un.copy(n).sub(e).dot(Ut)/i;return s=Math.min(1,Math.max(0,s)),Po.copy(e).addScaledVector(Ut,s).distanceTo(n)}function dT(n,e,t){Ut.copy(t).sub(e);let i=Ut.lengthSq();if(i<1e-18)return e.clone();let s=Un.copy(n).sub(e).dot(Ut)/i;return s=Math.min(1,Math.max(0,s)),e.clone().addScaledVector(Ut,s)}function pT(n,e,t){let i=Math.round(n.x/t),s=Math.round(n.y/t),r=Math.round(n.z/t),o=Math.round(e.x/t),a=Math.round(e.y/t),l=Math.round(e.z/t);return i<o||i===o&&s<a||i===o&&s===a&&r<=l?`${i},${s},${r}|${o},${a},${l}`:`${o},${a},${l}|${i},${s},${r}`}function mT(n){let e=document.getElementById("measure-crosshair");return e||(e=document.createElement("div"),e.id="measure-crosshair",e.className="measure-crosshair",e.hidden=!0,e.setAttribute("aria-hidden","true"),e.innerHTML='<span class="measure-crosshair-h"></span><span class="measure-crosshair-v"></span><span class="measure-crosshair-dot"></span>',(n.parentElement||document.body).appendChild(e),e)}function zx(n,e,t,i,s){let r=e.getBoundingClientRect();n.style.left=`${r.left+t}px`,n.style.top=`${r.top+i}px`,n.dataset.snap=s||"none"}function kx(n){let e=new ga(1,16,12),t=new nn({color:n,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),i=new pt(e,t);return i.renderOrder=20,i.visible=!1,i}function gT(n,e){let t=n.material;e==="vertex"?t.color.setHex(16729402):e==="edge"||e==="perp"?t.color.setHex(16766474):t.color.setHex(6607615)}function Hx(n,e){let t=new Ot,i=new Float32Array(6);t.setAttribute("position",new Bt(i,3));let s=new ps({color:n,transparent:e<1,opacity:e,depthTest:!1,depthWrite:!1}),r=new Ui(t,s);return r.renderOrder=19,r.frustumCulled=!1,r.visible=!1,r}function xT(n){let e=new Ot,t=new Float32Array(9);e.setAttribute("position",new Bt(t,3));let i=new ps({color:n,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),s=new Ui(e,i);return s.renderOrder=22,s.frustumCulled=!1,s.visible=!1,s}function Vx(n,e,t,i,s){let r=s(t)*uT;if(Ut.copy(e).sub(t),Ut.lengthSq()<1e-16){n.visible=!1;return}if(Ut.normalize(),Un.copy(i).normalize(),Io.crossVectors(Un,Ut),Io.lengthSq()<1e-12){n.visible=!1;return}li.copy(t).addScaledVector(Un,r),ci.copy(t),Ki.copy(t).addScaledVector(Ut,r);let o=n.geometry.getAttribute("position");o.setXYZ(0,li.x,li.y,li.z),o.setXYZ(1,ci.x,ci.y,ci.z),o.setXYZ(2,Ki.x,Ki.y,Ki.z),o.needsUpdate=!0,n.geometry.computeBoundingSphere()}function Gx(n,e,t){let i=n.geometry.getAttribute("position");i.setXYZ(0,e.x,e.y,e.z),i.setXYZ(1,t.x,t.y,t.z),i.needsUpdate=!0,n.geometry.computeBoundingSphere()}function yT(n){let e=document.createElement("canvas");e.width=Wu*2,e.height=Wu;let t=e.getContext("2d");if(t){t.clearRect(0,0,e.width,e.height);let o=18,a=14;t.font=`600 ${Math.round(Wu*.42)}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;let l=t.measureText(n),c=Math.ceil(l.width),u=Math.round(Wu*.42),h=c+o*2,f=u+a*2,d=(e.width-h)/2,p=(e.height-f)/2,x=18;t.fillStyle="rgba(28, 28, 30, 0.78)",Wx(t,d,p,h,f,x),t.fill(),t.strokeStyle="rgba(255, 255, 255, 0.22)",t.lineWidth=2,Wx(t,d,p,h,f,x),t.stroke(),t.fillStyle="#f5f5f7",t.textAlign="center",t.textBaseline="middle",t.fillText(n,e.width/2,e.height/2+1)}let i=new ms(e);i.colorSpace=At,i.needsUpdate=!0;let s=new ao({map:i,depthTest:!1,depthWrite:!1,transparent:!0}),r=new oa(s);return r.renderOrder=21,r.center.set(.5,.5),r}function Wx(n,e,t,i,s,r){let o=Math.min(r,i/2,s/2);n.beginPath(),n.moveTo(e+o,t),n.arcTo(e+i,t,e+i,t+s,o),n.arcTo(e+i,t+s,e,t+s,o),n.arcTo(e,t+s,e,t,o),n.arcTo(e,t,e+i,t,o),n.closePath()}function qu(n){if(n.blocked||n.modifiers||n.button!==void 0&&n.button!==0||(n.pointers??1)>1||n.consumed)return"ignore";if(Math.hypot(n.dx??0,n.dy??0)>(n.slop??12))return"drag";let t=n.longPressMs??500;return!n.released&&(n.dt??0)>=t?"longpress":n.released?"tap":"pending"}function Ji(n){let e=String(n||"").replace(/_(\d+)$/,""),t=e.split("__").filter(i=>i.length>0);return t.length>=2?{part:t[0],element:t.slice(1).join("__")}:{part:e||"part",element:null}}function qx(n){let e="part",t=n;for(;t;){let i=t.name||"";if(!(i.endsWith("__edges")||!!t.userData?.isEdgeOverlay)&&i){let r=Ji(i);if(r.part&&(e=r.part),r.element)return{part:r.part,element:r.element}}t=t.parent||null}return{part:e,element:null}}var Yu=12,_T=500,vT=Math.PI/2,bT=.03,$x=.001;function MT(n){let e=Math.min(1,Math.max(0,n));return e<.5?4*e*e*e:1-(-2*e+2)**3/2}function ST(n){return n.blocked||n.modifiers||n.button!==void 0&&n.button!==0||(n.pointers??1)>1?"ignore":Math.hypot(n.dx,n.dy)>Yu?"drag":"tap"}function ET(n,e){return(e>=0?1:-1)*n*vT}function wT(n,e=null){let t=n.length,i=new Map,s=a=>{let l=i.has(a)?i.get(a):a;return l!==a?(l=s(l),i.set(a,l)):i.has(a)||i.set(a,a),l},r=(a,l)=>{let c=s(a),u=s(l);c!==u&&i.set(c,u)};if(e){let a=new Map,l=1e4,c=e.count??n.reduce((u,h)=>Math.max(u,h),0)+1;for(let u=0;u<c;u++){let h=`${Math.round(e.getX(u)*l)},${Math.round(e.getY(u)*l)},${Math.round(e.getZ(u)*l)}`,f=a.get(h);f===void 0?a.set(h,u):r(u,f)}}for(let a=0;a+2<t;a+=3)r(n[a],n[a+1]),r(n[a+1],n[a+2]);let o=new Map;for(let a=0;a+2<t;a+=3){let l=s(n[a]),c=o.get(l);c||(c=[],o.set(l,c)),c.push(a)}return[...o.values()]}function Yx(n){let e=n.geometry,t=e?.getIndex?.(),i=e?.getAttribute?.("position");if(!t||!i||!n.parent)return[n];let s=wT(t.array,i);if(s.length<2)return[n];let r=e.getAttribute("normal"),o=[];for(let a of s){let l=new Map,c=[],u=[],h=[],f=x=>{let m=l.get(x);return m!==void 0||(m=c.length/3,l.set(x,m),c.push(i.getX(x),i.getY(x),i.getZ(x)),r&&u.push(r.getX(x),r.getY(x),r.getZ(x))),m};for(let x of a)h.push(f(t.getX(x)),f(t.getX(x+1)),f(t.getX(x+2)));let d=new Ot;d.setAttribute("position",new kt(c,3)),u.length&&d.setAttribute("normal",new kt(u,3)),d.setIndex(h);let p=new pt(d,n.material);p.name=n.name,p.position.copy(n.position),p.quaternion.copy(n.quaternion),p.scale.copy(n.scale),p.visible=n.visible,n.parent.add(p),o.push(p)}return n.parent.remove(n),e.dispose?.(),o}function TT(n,e=[]){let t=[];n.traverse(r=>{let o=r.name||"";if(Ji(o).part!=="door")return;let a=r.parent?.name||"";Ji(a).part!=="door"&&t.push(r)});let i=new Set((e||[]).filter(r=>r&&r.kind==="drawer"&&r.element).map(r=>String(r.element)));i.size&&n.traverse(r=>{let o=Ji(r.name||"");!o.element||!i.has(o.element)||Ji(r.parent?.name||"").element!==o.element&&t.push(r)});let s=[];for(let r of t){if(r.isMesh){s.push(...Yx(r));continue}let o=[];if(r.traverse(a=>{a.isMesh&&o.push(a)}),o.length===1){let a=Yx(o[0]);if(a.length>1){s.push(...a);continue}}s.push(r)}return s}function AT(n,e,t=bT){let i=[];for(let a of n)for(let l of e){if(!l||!(l.kind==="drawer"&&Array.isArray(l.slide))&&(l.kind!=="hinged"||!l.hinge))continue;let u=l.center;if(!Array.isArray(u)||u.length<3)continue;let h=a.center.x-Number(u[0]),f=a.center.y-Number(u[1]),d=a.center.z-Number(u[2]),p=Math.hypot(h,f,d);p<=t&&i.push({distance:p,entry:a,record:l})}i.sort((a,l)=>a.distance-l.distance);let s=new Set,r=new Set,o=[];for(let a of i)s.has(a.entry)||r.has(a.record.id)||(s.add(a.entry),r.add(a.record.id),o.push({entry:a.entry,record:a.record}));return o}function RT(n){return n.updateWorldMatrix(!0,!0),new Vt().setFromObject(n).getCenter(new P)}function CT(n,e){let t=n.parent;if(!t)return null;if(e.kind==="drawer")return PT(n,e);let i=new zt;i.name=`hinge:${e.id}`,t.add(i),t.updateWorldMatrix(!0,!1);let s=new P(Number(e.hinge[0]),Number(e.hinge[1]),Number(e.hinge[2]));i.position.copy(t.worldToLocal(s)),i.updateWorldMatrix(!0,!1),i.attach(n);let r={id:e.id,pivot:i,host:n,sign:Number(e.sign)>=0?1:-1,goal:0,anim:null},o=a=>{a.userData.bpDoor=r};return o(i),n.traverse(o),r}function PT(n,e){let t=n.parent;if(!t)return null;let i=new zt;i.name=`drawer:${e.id}`,t.add(i),t.updateWorldMatrix(!0,!1);let s=e.center.map(Number),r=e.slide.map(Number),o=t.worldToLocal(new P(s[0],s[1],s[2])),a=t.worldToLocal(new P(s[0]+r[0],s[1]+r[1],s[2]+r[2]));i.updateWorldMatrix(!0,!1),i.attach(n);let l={id:e.id,kind:"drawer",pivot:i,host:n,slideLocal:a.sub(o),sign:1,goal:0,anim:null},c=u=>{u.userData.bpDoor=l};return c(i),n.traverse(c),l}function rl(n,e){let t=n.anim;if(!t)return n.goal;let i=(e-t.t0)/_T;return i>=1?(n.anim=null,n.goal=t.to,t.to):t.from+(t.to-t.from)*MT(i)}var Zx=new qt,il=new P;function IT(n,e){if(n.quaternion.identity(),Math.abs(e)<=1e-8)return;let t=n.parent;il.set(0,1,0),t&&(t.updateWorldMatrix(!0,!1),t.getWorldQuaternion(Zx).invert(),il.applyQuaternion(Zx)),!(il.lengthSq()<1e-12)&&(il.normalize(),n.rotateOnAxis(il,e))}function LT(n,e){let t=rl(n,e);return n.slideLocal?(n.pivot.position.copy(n.slideLocal).multiplyScalar(t),t):(IT(n.pivot,ET(t,n.sign)),t)}function DT(n,e){let t=rl(n,e),i=n.goal>.5?0:1;n.goal=i,n.anim={from:t,to:i,t0:e}}function NT(n,e){let t=rl(n,e);return t<=.001?!1:(n.goal>.5&&(n.goal=0,n.anim={from:t,to:0,t0:e}),!0)}var $u=new P,OT=new nn({side:Dt,transparent:!0,opacity:0,depthWrite:!1});function UT(n){let e=[];if(n.updateWorldMatrix(!0,!0),n.traverse(m=>{m.isMesh&&m.geometry?.getAttribute?.("position")&&e.push(m)}),!e.length)return null;let t=new P,i=new P,s=new P;if(e[0].updateWorldMatrix(!0,!1),e[0].matrixWorld.extractBasis(t,i,s),t.lengthSq()<1e-12||i.lengthSq()<1e-12||s.lengthSq()<1e-12)return null;t.normalize(),i.normalize(),s.normalize();let r=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,u=-1/0;for(let m of e){let g=m.geometry;g.boundingBox||g.computeBoundingBox();let v=g.boundingBox,b=[v.min.x,v.max.x],_=[v.min.y,v.max.y],w=[v.min.z,v.max.z];for(let T of b)for(let y of _)for(let E of w){$u.set(T,y,E).applyMatrix4(m.matrixWorld);let D=$u.dot(t),I=$u.dot(i),z=$u.dot(s);D<r&&(r=D),I<o&&(o=I),z<a&&(a=z),D>l&&(l=D),I>c&&(c=I),z>u&&(u=z)}}let h=[(l-r)/2,(c-o)/2,(u-a)/2];if(h.some(m=>!(m>1e-6)))return null;let f=(r+l)/2,d=(o+c)/2,p=(a+u)/2;return{center:new P(t.x*f+i.x*d+s.x*p,t.y*f+i.y*d+s.y*p,t.z*f+i.z*d+s.z*p),axes:[t,i,s],half:h}}function FT(n,e){let t=new Fi(n.half[0]*2,n.half[1]*2,n.half[2]*2),i=new pt(t,OT);return i.name=e||"opening",i.matrix.makeBasis(n.axes[0],n.axes[1],n.axes[2]),i.matrix.setPosition(n.center),i.matrixAutoUpdate=!1,i.matrixWorld.copy(i.matrix),i.matrixWorldNeedsUpdate=!1,i.visible=!1,i.frustumCulled=!1,i.userData.bpHitProxy=!0,i.raycast=()=>{},i}function BT(n,e){let t=n.origin,i=n.direction,s=0,r=1/0;for(let o=0;o<3;o++){let a=e.axes[o],l=a.x*(e.center.x-t.x)+a.y*(e.center.y-t.y)+a.z*(e.center.z-t.z),c=a.x*i.x+a.y*i.y+a.z*i.z,u=e.half[o];if(Math.abs(c)>1e-8){let h=(l+u)/c,f=(l-u)/c;if(h>f){let d=h;h=f,f=d}if(h>s&&(s=h),f<r&&(r=f),s>r)return null}else if(-l-u>0||-l+u<0)return null}return r<0?null:{tEnter:s,tExit:r}}function zT(n){if(!n.length)return null;let e=n[0];for(let t of n)t.tEnter>e.tEnter&&(e=t);return e.binding}function kT(n){let e=n;for(;e;){if(e.userData?.bpDoor&&!Sr(e))return e.userData.bpDoor;e=e.parent}return null}function HT(n){return nl(n.object)}function VT(n){n.proxy?.geometry?.dispose?.(),n.proxy=null,n.obb=null}function Kx(n){let e=Array.isArray(n.records)?n.records:[],t=n.canvas,i=n.isBlocked||(()=>!1),s=[],r=new _i,o=new Ye,a=null,l=0,c=null;function u(){c&&clearTimeout(c),c=null}let h=Px();h.register({id:"door",priority:100,claim(b,_){let w=kT(b.object);if(!w||w.host?.userData?.bpIfcHidden)return null;let T=_.now??performance.now(),y=rl(w,T)>$x,E=()=>DT(w,_.now??performance.now());return{onTap:E,actions:[{id:"door",labelKey:y?"ui.close":"ui.open",run:E}]}}}),h.register({id:"opening",priority:10,fallback(b,_){let w=[];for(let y of s){if(!y.obb||y.host?.userData?.bpIfcHidden||rl(y,_.now)<=$x)continue;let E=BT(_.raycaster.ray,y.obb);E&&w.push({binding:y,tEnter:E.tEnter})}let T=zT(w);return T?NT(T,_.now):!1}});function f(b){for(let T of s)VT(T);if(s.length=0,!b||!e.length)return 0;b.updateWorldMatrix(!0,!0);let w=TT(b,e).map(T=>({host:T,center:RT(T)}));for(let T of AT(w,e)){let y=CT(T.entry.host,T.record);if(!y)continue;let E=y.kind==="drawer"?null:UT(y.host);y.obb=E,y.proxy=E?FT(E,`opening:${y.id}`):null,s.push(y)}return s.length}function d(b){let _=!1;for(let w of s){let T=!!w.anim;!T&&w.shown===w.goal||(LT(w,b),w.shown=w.anim?null:w.goal,T&&(_=!0))}return _}function p(b){if(!(b.button!==void 0&&b.button!==0)){if(l+=1,l>1){a=null;return}a={id:b.pointerId,x:b.clientX,y:b.clientY,moved:0,pointers:1,modifiers:b.altKey||b.ctrlKey||b.metaKey||b.shiftKey,consumed:!1},u(),c=setTimeout(()=>{c=null,!(!a||a.consumed||qu({dt:500,dx:a.moved,dy:0,pointers:l,button:0,blocked:i(),modifiers:a.modifiers,released:!1})!=="longpress")&&(a.consumed=!0,n.onLongPress?.({clientX:a.x,clientY:a.y,pointerId:a.id}))},500)}}function x(b){if(!a||b.pointerId!==a.id)return;let _=Math.hypot(b.clientX-a.x,b.clientY-a.y);_>a.moved&&(a.moved=_),a.moved>Yu&&u()}function m(b){if(l=Math.max(0,l-1),u(),!a||b.pointerId!==a.id)return;let _=a;if(a=null,_.consumed)return;let w=Math.max(_.moved,Math.hypot(b.clientX-_.x,b.clientY-_.y));ST({dx:w,dy:0,pointers:l>0?2:1,button:b.button,blocked:i(),modifiers:b.altKey||b.ctrlKey||b.metaKey||b.shiftKey})==="tap"&&v(b)}function g(){l=Math.max(0,l-1),a=null}function v(b){let _=n.getCamera();if(!_||!s.length)return;let w=t.getBoundingClientRect(),T=w.width||t.clientWidth||1,y=w.height||t.clientHeight||1;o.x=(b.clientX-w.left)/T*2-1,o.y=-((b.clientY-w.top)/y)*2+1,r.setFromCamera(o,_);let D=s[0]?.pivot?.parent;for(;D?.parent;)D=D.parent;if(!D)return;let I=r.intersectObject(D,!0);h.dispatch(I,{raycaster:r,now:performance.now()},HT)}return t.addEventListener("pointerdown",p,!0),t.addEventListener("pointermove",x,!0),t.addEventListener("pointerup",m,!0),t.addEventListener("pointercancel",g,!0),t.addEventListener("contextmenu",b=>b.preventDefault()),{bind:f,step:d,bindings:s,taps:h}}var GT=[{type:"IfcLightFixture",id:"light",priority:60,labelKey:(n,e)=>e.isOn?.(n)?"ui.turnOff":"ui.turnOn",run:(n,e,t,i)=>i.onLight?.(n,e,t)},{type:"IfcSwitchingDevice",id:"switch",priority:70,labelKey:()=>"ui.press",run:(n,e,t,i)=>i.onSwitch?.(n,e,t)},{type:"IfcWindow",id:"window",priority:50,labelKey:(n,e)=>e.isOpen?.(n)?"ui.close":"ui.open",run:(n,e,t,i)=>i.onWindow?.(n,e,t)}];function Jx(n,e){for(let t of GT)n.register({id:t.id,priority:t.priority,claim(i,s){let r=e.elementOf?.(i.object);if(!r||r.type!==t.type)return null;let o=()=>t.run(r,i,s,e);return{onTap:o,actions:[{id:t.id,labelKey:t.labelKey(r,e),run:o}]}}})}function jx(n){let e=n&&n.elements&&typeof n.elements=="object"?n.elements:{},t=Array.isArray(n?.roots)?n.roots.filter(i=>e[i]):[];return{elements:e,roots:t}}function Zu(n,e){let t=[];for(let i of Object.values(n.elements)){if(!i)continue;let s=i.parentId||null;(s===e||!s&&i.containerId===e)&&t.push(i)}return t.sort((i,s)=>{let r=(i.order??0)-(s.order??0);return r||String(i.name||"").localeCompare(String(s.name||""))}),t.map(i=>i.globalId)}function ip(n,e){let t=[],i=new Set,s=e||null;for(;s&&n.elements[s]&&!i.has(s);){i.add(s),t.push(s);let r=n.elements[s];s=r.parentId||r.containerId||null}return t.reverse(),t}function sp(n,e){return ip(n,e).slice(0,-1)}function rp(n,e){let t=[],i=new Set,s=(r,o)=>{if(!(!r||i.has(r)||!n.elements[r])&&(i.add(r),t.push({id:r,depth:o}),!!e.has(r)))for(let a of Zu(n,r))s(a,o+1)};for(let r of n.roots)s(r,0);return t}function Qx(n){return Math.min(Math.max(0,n),4)*12}function ey(n,e,t,i,s=44,r=4){if(i<=0)return{start:0,end:0};let o=n-t,a=Math.max(0,Math.floor(o/s)-r),l=Math.min(i,Math.ceil((o+e)/s)+r);return{start:a,end:Math.max(a,l)}}function Er(n,e){let t=[],i=[e],s=new Set;for(;i.length;){let r=i.pop();if(!(!r||s.has(r)||!n.elements[r])){s.add(r),t.push(r);for(let o of Zu(n,r))i.push(o)}}return t}function ty(n,e){let t=null,i=null,s=new Set,r=n.elements[e]?.containerId||n.elements[e]?.parentId||null;for(;r&&n.elements[r]&&!s.has(r);){s.add(r);let o=n.elements[r];o.type==="IfcSpace"&&!i&&(i=o),o.type==="IfcBuildingStorey"&&!t&&(t=o),r=o.containerId||o.parentId||null}return{storey:t,space:i}}function ny(n){if(!n)return[];let e=[];n.description&&e.push(String(n.description)),n.role&&e.push(`Role: ${n.role}`),n.objectType&&n.objectType!==n.role&&e.push(`Object type: ${n.objectType}`),n.predefinedType&&n.predefinedType!==n.role&&e.push(`Predefined type: ${n.predefinedType}`),n.tag&&e.push(`Tag: ${n.tag}`);for(let t of n.circuits||[])e.push(`Circuit: ${t}`);for(let t of n.cables||[])e.push(`Cable: ${t}`);for(let t of n.propertySets||[]){let i=Object.entries(t.properties||{}).filter(([s])=>s!=="id");if(i.length){e.push(String(t.name||"Pset"));for(let[s,r]of i)e.push(`${s}: ${iy(r)}`)}}return e}function iy(n){if(typeof n=="number"){if(!Number.isFinite(n))return"";let e=Math.round(n*1e3)/1e3;return String(e)}return typeof n=="boolean"?n?"true":"false":n==null?"":String(n)}function sy(n,e){return n&&n===e?"frame":"pulse"}function ry(n){return n?(n.dimensions||[]).filter(e=>e&&e.value!=null&&e.value!=="").map(e=>`${e.name}: ${iy(e.value)}`):[]}var WT=`<svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" focusable="false">
  <path fill="currentColor" d="M2.5 4.2h8.2v1.35H2.5V4.2zm0 5.1h8.2v1.35H2.5V9.3zm0 5.15h8.2V15.8H2.5v-1.35z"/>
  <path fill="currentColor" d="M13.2 6.15l3.15 3.15-3.15 3.15-1.05-1.05 1.35-1.35H11.2V8.55h2.3L12.15 7.2l1.05-1.05z"/>
</svg>`;function oy(n){let e=document.getElementById("sheet-scroll");if(!e)return{reveal(){},open(){},closePopover(){},refresh(){}};let t=document.createElement("div");for(t.id="sheet-main";e.firstChild;)t.append(e.firstChild);let i=document.createElement("button");i.type="button",i.className="ifc-entry",i.dataset.noSheetDrag="true";let s=document.createElement("span");s.dataset.i18n="ui.inspector",s.textContent=n.t("ui.inspector");let r=document.createElement("span");r.className="ifc-entry-chevron",r.setAttribute("aria-hidden","true"),r.textContent="\u203A",i.append(s,r),t.append(i);let o=document.createElement("div");o.id="sheet-inspector",o.hidden=!0,o.dataset.noSheetDrag="true";let a=document.createElement("div");a.className="ifc-toolbar";let l=document.createElement("button");l.type="button",l.className="ifc-back",l.dataset.noSheetDrag="true";let c=document.createElement("button");c.type="button",c.className="ifc-show-all",c.hidden=!0,c.dataset.noSheetDrag="true",a.append(l,c);let u=document.createElement("div");u.className="ifc-crumbs",u.dataset.noSheetDrag="true";let h=document.createElement("div");h.className="ifc-list";let f=document.createElement("div");f.className="ifc-list-spacer";let d=document.createElement("div");d.className="ifc-list-window",h.append(f,d);let p=document.createElement("div");p.className="ifc-head",p.append(a,u),o.append(p,h),e.append(t,o);let x=document.createElement("div");x.id="ifc-popover",x.hidden=!0,x.className="ifc-popover",document.body.append(x);let m=document.createElement("div");m.id="ifc-row-menu",m.hidden=!0,m.className="ifc-menu",document.body.append(m);let g=new Set,v=null,b=null,_=0;function w(){o.hidden=!0,t.hidden=!1,ae()}function T(){t.hidden=!0,o.hidden=!1,I(),requestAnimationFrame(()=>I())}function y(){n.openSheet(),T(),e.scrollTop=0}i.addEventListener("click",()=>y()),l.addEventListener("click",()=>{w(),e.scrollTop=0}),c.addEventListener("click",()=>{n.visibility.showAll(),n.onVisibility(),I()});function E(oe){let we=n.index.elements[oe];return we&&(we.name||we.id||we.type)||oe}function D(){u.replaceChildren();let oe=v?ip(n.index,v):[];if(!oe.length){u.hidden=!0;return}u.hidden=!1,oe.forEach((we,ke)=>{if(ke){let Ze=document.createElement("span");Ze.className="ifc-crumb-sep",Ze.textContent="\u203A",u.append(Ze)}let He=document.createElement("button");He.type="button",He.className="ifc-crumb",He.textContent=E(we),He.addEventListener("click",()=>{v=we;for(let Ze of sp(n.index,we))g.add(Ze);I(),V(we)}),u.append(He)})}function I(){l.textContent=`\u2039 ${n.t("ui.menu")}`,c.textContent=n.t("ui.showAll"),c.hidden=!n.visibility.anyHidden(),s.textContent=n.t("ui.inspector"),D(),k()}function z(){let oe=e.getBoundingClientRect();return h.getBoundingClientRect().top-oe.top+e.scrollTop}function W(){let oe=e.getBoundingClientRect();return p.getBoundingClientRect().bottom-oe.top+6}function k(){let oe=rp(n.index,g);f.style.height=`${oe.length*44}px`;let we=ey(e.scrollTop,e.clientHeight||320,z(),oe.length,44);d.replaceChildren(),d.style.transform=`translateY(${we.start*44}px)`;for(let ke=we.start;ke<we.end;ke++)d.append(N(oe[ke]))}function N(oe){let we=n.index.elements[oe.id],ke=Zu(n.index,oe.id),He=document.createElement("div");if(He.className="ifc-row",He.dataset.id=oe.id,He.style.paddingLeft=`${Qx(oe.depth)+8}px`,He.style.height=`${44}px`,(oe.id===b||oe.id===v)&&He.classList.add("is-target"),n.visibility.isHidden(oe.id)&&He.classList.add("is-hidden"),ke.length){let ie=document.createElement("button");ie.type="button",ie.className="ifc-disclosure";let Ue=g.has(oe.id);ie.textContent=Ue?"\u25BE":"\u203A",ie.setAttribute("aria-expanded",Ue?"true":"false"),ie.setAttribute("aria-label",Ue?n.t("ui.collapse"):n.t("ui.expand")),ie.addEventListener("click",Ke=>{Ke.stopPropagation(),g.has(oe.id)?g.delete(oe.id):g.add(oe.id),I()}),He.append(ie)}else{let ie=document.createElement("span");ie.className="ifc-disclosure-spacer",He.append(ie)}let Ze=document.createElement("span");Ze.className="ifc-row-text";let De=document.createElement("span");De.className="ifc-row-name",De.textContent=E(oe.id);let rt=document.createElement("span");return rt.className="ifc-row-meta",rt.textContent=we?.type||"",Ze.append(De,rt),He.append(Ze),ye(He,oe.id),He}let G=0;function j(oe){let we=performance.now();if(we-G<40)return;G=we;let ke=sy(v,oe);v=oe,n.onFrame(oe,{move:ke==="frame"}),Y(oe),D()}function q(oe){return oe instanceof Element&&!!oe.closest(".ifc-disclosure")}function ye(oe,we){let ke=null,He=0,Ze=()=>{He&&window.clearTimeout(He),He=0},De=(Ue,Ke,xe)=>{q(xe)||(Ze(),ke={x:Ue,y:Ke,moved:0,consumed:!1},He=window.setTimeout(()=>{He=0,!(!ke||ke.consumed||qu({dt:500,dx:ke.moved,dy:0,released:!1})!=="longpress")&&(ke.consumed=!0,be(we,ke.x,ke.y))},500))},rt=(Ue,Ke)=>{if(!ke)return;let xe=Math.hypot(Ue-ke.x,Ke-ke.y);xe>ke.moved&&(ke.moved=xe),ke.moved>12&&Ze()},ie=(Ue,Ke,xe)=>{Ze();let A=ke;ke=null,!(!A||A.consumed||q(xe)||Math.max(A.moved,Math.hypot(Ue-A.x,Ke-A.y))>12)&&j(we)};oe.addEventListener("pointerdown",Ue=>{Ue.button!==void 0&&Ue.button!==0||De(Ue.clientX,Ue.clientY,Ue.target)}),oe.addEventListener("pointermove",Ue=>rt(Ue.clientX,Ue.clientY)),oe.addEventListener("pointerup",Ue=>{Ue.pointerType!=="touch"&&ie(Ue.clientX,Ue.clientY,Ue.target)}),oe.addEventListener("pointercancel",()=>Ze()),oe.addEventListener("touchend",Ue=>{let Ke=Ue.changedTouches[0];Ke&&ie(Ke.clientX,Ke.clientY,Ue.target)},{passive:!0})}function Y(oe){b=oe,_&&window.clearTimeout(_),_=window.setTimeout(()=>{b===oe&&(b=null),k()},1600),k()}function V(oe){let ke=rp(n.index,g).findIndex(Ze=>Ze.id===oe);if(ke<0)return;let He=z()+ke*44;e.scrollTop=Math.max(0,He-W()),k()}let Q=!1;function be(oe,we,ke){B(),m.replaceChildren(),m.hidden=!1,Q=!1;let He=n.visibility.isHidden(oe);K(He?"ui.unhideThis":"ui.hideThis",()=>{He?n.visibility.unhide(oe):n.visibility.hide(oe),Re()}),K("ui.hideOthers",()=>{n.visibility.hideOthers(oe),Re()}),K("ui.unhideOthers",()=>{n.visibility.unhideOthers(oe),Re()}),ee(m,we,ke)}function Re(){n.onVisibility(),ae(),I()}function K(oe,we){let ke=document.createElement("button");ke.type="button",ke.className="ifc-menu-btn",ke.textContent=n.t(oe);let He=!1,Ze=De=>{De.preventDefault(),De.stopPropagation(),!He&&(He=!0,we())};ke.addEventListener("touchend",Ze),ke.addEventListener("click",Ze),m.append(ke)}function ae(){m.hidden=!0,m.replaceChildren()}function B(){x.hidden=!0,x.replaceChildren()}function ee(oe,we,ke){oe.hidden=!1,oe.style.left="0px",oe.style.top="0px";let He=oe.getBoundingClientRect(),Ze=8,De=Math.max(Ze,window.innerWidth-He.width-Ze),rt=Math.min(Math.max(Ze,we),De),ie=ke+8;ie+He.height>window.innerHeight-Ze&&(ie=Math.max(Ze,ke-He.height-8)),oe.style.left=`${rt}px`,oe.style.top=`${ie}px`}function pe(oe,we,ke,He,Ze){if(ae(),x.replaceChildren(),x.hidden=!1,!oe)Se(n.t("ui.noIfc"),we||"");else{let De=document.createElement("div");De.className="ifc-pop-id";let rt=document.createElement("button");rt.type="button",rt.className="ifc-pop-title";let ie=document.createElement("div");ie.className="ifc-kicker";let Ue=document.createElement("div");Ue.className="ifc-name";let Ke=oe.name||oe.id||"",xe=oe.globalId||"",A=!1,J=0,ne=()=>{ie.hidden=!A,ie.textContent=A?n.t("ui.globalId"):"",Ue.textContent=A?xe:Ke,Ue.className=A?"ifc-gid":"ifc-name",rt.setAttribute("aria-label",A?Ke:n.t("ui.globalId"))},Ee=C=>{C.preventDefault(),C.stopPropagation();let S=performance.now();S-J<80||(J=S,A=!A,ne())};ne(),rt.append(ie,Ue),rt.addEventListener("touchend",Ee),rt.addEventListener("click",Ee);let $=document.createElement("button");$.type="button",$.className="ifc-reveal",$.innerHTML=WT,$.setAttribute("aria-label",n.t("ui.reveal")),$.title=n.t("ui.reveal"),$.addEventListener("click",C=>{C.stopPropagation(),B(),Oe(oe.globalId)}),De.append(rt,$),x.append(De),Se(n.t("ui.type"),oe.type||"");let me=ty(n.index,oe.globalId);me.storey&&Se(n.t("ui.storey"),me.storey.name||me.storey.id),me.space&&Se(n.t("ui.space"),me.space.name||me.space.id);let Me=ry(oe);Me.length&&$e(n.t("ui.dimensions"),Me);let Te=ny(oe);Te.length&&$e(n.t("ui.note"),Te)}if(ke.length){let De=document.createElement("div");De.className="ifc-actions";for(let rt of ke){let ie=document.createElement("button");ie.type="button",ie.className="ifc-action",ie.textContent=n.t(rt.labelKey),ie.addEventListener("click",Ue=>{Ue.stopPropagation(),rt.run(),n.onVisibility()}),De.append(ie)}x.append(De)}ee(x,He,Ze)}function Se(oe,we){let ke=document.createElement("div");ke.className="ifc-line";let He=document.createElement("div");He.className="ifc-kicker",He.textContent=oe;let Ze=document.createElement("div");Ze.className="ifc-value",Ze.textContent=we,ke.append(He,Ze),x.append(ke)}function $e(oe,we){let ke=document.createElement("div");ke.className="ifc-line";let He=document.createElement("div");He.className="ifc-kicker",He.textContent=oe;let Ze=document.createElement("div");Ze.className="ifc-note",Ze.textContent=we.join(`
`),ke.append(He,Ze),x.append(ke)}function Oe(oe){if(n.index.elements[oe]){for(let we of sp(n.index,oe))g.add(we);v=oe,b=oe,n.openSheet(),T(),I(),requestAnimationFrame(()=>V(oe))}}e.addEventListener("scroll",()=>{o.hidden||k()},{passive:!0});let ze=oe=>oe instanceof Node?!(!x.hidden&&x.contains(oe)||!m.hidden&&m.contains(oe)):!0;return document.addEventListener("pointerup",()=>{m.hidden||(Q=!0)},!0),document.addEventListener("pointerdown",oe=>{let we=oe.target;!x.hidden&&ze(we)&&B(),!m.hidden&&Q&&ze(we)&&ae()},!0),{open:y,refresh:I,closePopover:B,openPopover:pe,reveal:Oe,isInspectorOpen:()=>!o.hidden}}function ay(n){let e=new Set;function t(){return Object.keys(n.elements)}return{isHidden(i){return e.has(i)},anyHidden(){return e.size>0},hiddenIds(){return[...e]},hide(i){for(let s of Er(n,i))e.add(s)},unhide(i){for(let s of Er(n,i))e.delete(s)},hideOthers(i){let s=new Set(Er(n,i));for(let r of t())s.has(r)||e.add(r)},unhideOthers(i){let s=new Set(Er(n,i));for(let r of t())s.has(r)||e.delete(r)},showAll(){e.clear()}}}var up=.3,hy=1.5,XT=.5,op=new Ye,qT=new P,eh=new P,ap=new P,Ku=new P,Ju=new P,Lo=new P,ju=new P,lp=new qt,ly=new qt,Qu=new qt,cy=new qt,cp=new Gs,$T=new P(0,1,0),uy=new _i;function YT(n,e,t=up,i=hy){let s=Number.isFinite(e)&&e>0?e:0,r=Number.isFinite(n)&&n>0?n:null;return r!=null&&r>=t?r:r!=null?Math.max(i,t):s>=t?s:Math.max(i,t)}function ZT(n,e,t=up,i=hy){return Number.isFinite(n)&&n>.001?n:e>=t?null:Math.max(i,t)}function KT(n,e,t=up,i=XT){return Number.isFinite(n)&&n>0?!(e>0)||e<t?!0:n<e*i:!1}function JT(n,e,t,i=1){let s=2*Math.PI*i/Math.max(1,t);return{theta:-n*s,phi:-e*s}}function jT(n,e,t,i,s){if(!i&&!s||(Ju.copy(n.position).sub(t),Ju.lengthSq()<1e-12))return!1;Lo.copy(n.up),Lo.lengthSq()<1e-12?Lo.set(0,1,0):Lo.normalize(),cy.setFromUnitVectors(Lo,$T),Ku.copy(Ju).applyQuaternion(cy),cp.setFromVector3(Ku);let r=1e-6;return s=Math.min(Math.PI-r,Math.max(r,cp.phi+s))-cp.phi,lp.setFromAxisAngle(Lo,i),ju.set(1,0,0).applyQuaternion(n.quaternion).applyQuaternion(lp),ju.lengthSq()<1e-12?!1:(ju.normalize(),ly.setFromAxisAngle(ju,s),Qu.copy(ly).multiply(lp),Ku.copy(Ju).applyQuaternion(Qu),n.position.copy(t).add(Ku),e.sub(t).applyQuaternion(Qu).add(t),n.quaternion.premultiply(Qu),!0)}function QT(n,e,t){return!(t>0)||(n.getWorldDirection(eh),ap.copy(n.position).addScaledVector(eh,t),ap.distanceToSquared(e)<1e-12)?!1:(e.copy(ap),!0)}function eA(n,e){let t=n.material,i=Array.isArray(t)?t:[t];for(let s of i){let r=s&&s.clippingPlanes;if(r){for(let o of r)if(o.distanceToPoint(e)<-1e-4)return!1}}return!0}function tA(n,e,t,i,s){if(!e||!t||e.isOrthographicCamera)return null;let r=n.getBoundingClientRect(),o=r.width||n.clientWidth||1,a=r.height||n.clientHeight||1;op.x=(i-r.left)/o*2-1,op.y=-((s-r.top)/a)*2+1,t.updateWorldMatrix(!0,!0),uy.setFromCamera(op,e);let l=uy.intersectObject(t,!0);e.getWorldDirection(eh);for(let c of l){let u=c.object;if(!u.visible||Sr(u))continue;let h=u.userData;if(h&&(h.isEdgeOverlay||h.isSectionCap||h.isPeeledEdgeBatch)||!eA(u,c.point))continue;let f=c.distance;if(!(f>1e-4))continue;let d=qT.copy(c.point).sub(e.position).dot(eh);if(d>1e-4)return{point:c.point.clone(),slant:f,depth:d}}return null}function nA(n){let{canvas:e,controls:t}=n,i=n.isBlocked||(()=>!1),s=new Map,r=null;function o(){return t.enabled!==!1&&!i()}function a(){let _=n.getCamera();return!!(_&&_.isPerspectiveCamera)}function l(_,w){return tA(e,n.getCamera(),n.getRoot(),_,w)}function c(_){let w=n.getCamera();!w||!a()||_==null||QT(w,t.target,_)}function u(_,w){let T=n.getCamera();if(!T||!a())return;let y=l(_,w),E=T.position.distanceTo(t.target);c(YT(y?y.slant:null,E))}function h(_,w){let T=n.getCamera();if(!T||!a())return;let y=l(_,w),E=T.position.distanceTo(t.target);c(ZT(y?y.depth:null,E))}function f(){r=null,t.enableRotate=!0}function d(_){if(s.set(_.pointerId,{x:_.clientX,y:_.clientY}),!o()){f(),t.zoomToCursor=!1;return}if(!a()){f(),t.zoomToCursor=!1;return}if(s.size>=2){f(),t.zoomToCursor=!0;let I=p(_);u(I.x,I.y);return}let w=_.pointerType==="touch",T=_.button??0;if(!w&&T===2){f(),h(_.clientX,_.clientY);return}if(!w&&T===1){f(),u(_.clientX,_.clientY);return}if(!w&&T!==0)return;if(!w&&(_.shiftKey||_.ctrlKey||_.metaKey)){f(),h(_.clientX,_.clientY);return}let y=n.getCamera(),E=l(_.clientX,_.clientY),D=y?y.position.distanceTo(t.target):0;if(!E||!KT(E.slant,D)){f();return}t.enableRotate=!1,r={id:_.pointerId,x:_.clientX,y:_.clientY,lastX:_.clientX,lastY:_.clientY,point:E.point.clone(),dragging:!1},t.dispatchEvent({type:"start"})}function p(_){let w=_.clientX,T=_.clientY,y=1;for(let[E,D]of s)E!==_.pointerId&&(w+=D.x,T+=D.y,y+=1);return{x:w/y,y:T/y}}function x(_){let w=s.get(_.pointerId);if(w&&(w.x=_.clientX,w.y=_.clientY),!r||_.pointerId!==r.id||s.size!==1||!o())return;let T=n.getCamera();if(!T)return;let y=_.clientX-r.lastX,E=_.clientY-r.lastY;if(!r.dragging){if(Math.hypot(_.clientX-r.x,_.clientY-r.y)<=Yu)return;r.dragging=!0}if(!y&&!E)return;let D=JT(y,E,e.clientHeight||1,t.rotateSpeed);jT(T,t.target,r.point,D.theta,D.phi),T.lookAt(t.target),r.lastX=_.clientX,r.lastY=_.clientY}function m(_){s.delete(_.pointerId),r&&r.id===_.pointerId&&f(),s.size<2&&(t.zoomToCursor=!1),s.size===0&&(t.enableRotate=!0)}function g(_){m(_)}function v(_){if(!o()||!a()){t.zoomToCursor=!1;return}if(t.state!==-1||r&&r.dragging){t.zoomToCursor=!1;return}t.zoomToCursor=!0,u(_.clientX,_.clientY)}function b(){s.size<2&&(t.zoomToCursor=!1)}return{onPointerDown:d,onPointerMove:x,onPointerUp:m,onPointerCancel:g,onWheel:v,onWheelDone:b}}function fy(n){let e=nA(n),t={capture:!0};return n.canvas.addEventListener("pointerdown",e.onPointerDown,t),n.canvas.addEventListener("pointermove",e.onPointerMove,t),n.canvas.addEventListener("pointerup",e.onPointerUp,t),n.canvas.addEventListener("pointercancel",e.onPointerCancel,t),n.canvas.addEventListener("wheel",e.onWheel,t),n.canvas.addEventListener("wheel",e.onWheelDone),e}var Do=class extends Ei{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,i=new Float32Array(2*t);for(let s=0;s<t;s+=3)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5];return super.setPositions(i),this}setColors(e){let t=e.length-3,i=new Float32Array(2*t);for(let s=0;s<t;s+=3)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5];return super.setColors(i),this}setFromPoints(e){let t=e.length-1,i=new Float32Array(6*t);for(let s=0;s<t;s++)i[6*s]=e[s].x,i[6*s+1]=e[s].y,i[6*s+2]=e[s].z||0,i[6*s+3]=e[s+1].x,i[6*s+4]=e[s+1].y,i[6*s+5]=e[s+1].z||0;return super.setPositions(i),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}};var th=class extends Ks{constructor(e=new Do,t=new Wi({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}};var iA='-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',sA=420,rA=36,oA=new P,dy=new P,py=new P,hp=new P,wr=new P,js=new P;function pp(n){return new P(n[0]*.001,n[2]*.001,-n[1]*.001)}function fp(n,e){if(typeof n=="number"&&Number.isFinite(n))return n;if(typeof n!="string")return e;let t=n.trim().replace("#","");return/^[0-9a-fA-F]{6}$/.test(t)?Number.parseInt(t,16):e}function my(n){let e=[];if(Array.isArray(n.anchor)&&n.anchor.length>=3&&e.push(n.anchor),Array.isArray(n.tips))for(let t of n.tips)Array.isArray(t)&&t.length>=3&&e.push(t);return e.length?e:[n.anchor]}function aA(n){let e=Math.abs(n)*1e3;return Number.isFinite(e)?Math.abs(e-Math.round(e))<.05?`${Math.round(e)} mm`:e>=100?`${e.toFixed(1)} mm`:`${e.toFixed(2)} mm`:""}function nh(n,e){return n==null?"":typeof n=="string"?n:String(n[e==="cs"?"cs":"en"]||n.en||n.cs||"")}function lA(n){if(!Number.isFinite(n)||n<=0)return"";let e=n*1e3/sA,t=Math.max(1,Math.round(e));return Number.isFinite(t)?`1:${t}`:""}function cA(n,e){if(e==="plate")return rA;let t=Math.min(Math.max(1,n.clientWidth),Math.max(1,n.clientHeight));return Math.round(Math.min(14,Math.max(12,t*.034)))}function No(n,e,t,i="center",s=null,r=1){let o=Number.isFinite(r)&&r>0?r:1,a=Math.max(8,Math.round(t*o)),l=n.map(y=>String(y)).filter(y=>y.length),c=document.createElement("canvas"),u=c.getContext("2d"),h=`600 ${a}px ${iA}`,f=Math.ceil(a*.35),d=Math.ceil(a*.2),p=Math.ceil(a*1.25);u&&(u.font=h);let x=a;if(u)for(let y of l)x=Math.max(x,u.measureText(y).width);let m=Math.ceil(x+f*2),g=Math.ceil(Math.max(l.length,1)*p+d*2),v=2;c.width=m*v,c.height=g*v;let b=c.getContext("2d");if(b){b.scale(v,v),b.clearRect(0,0,m,g);let y=e==="plate";b.font=h,b.textAlign="left",b.textBaseline="middle",b.lineJoin="round",b.miterLimit=2,b.lineWidth=Math.max(2,a*.28),b.strokeStyle=y?"#ffffff":"rgba(0,0,0,0.92)",b.fillStyle=s||(y?"#141414":"#f7f7f8"),l.forEach((E,D)=>{let I=f,z=d+p*D+p*.5;b.strokeText(E,I,z),b.fillText(E,I,z)})}let _=new ms(c);_.colorSpace=At,_.flipY=!0,_.needsUpdate=!0;let w=new nn({map:_,depthTest:!1,depthWrite:!1,transparent:!0,toneMapped:!1,side:Dt}),T=new pt(new ii(1,1),w);return T.renderOrder=30,T.frustumCulled=!1,T.userData.cssWidth=m,T.userData.cssHeight=g,T.userData.anchor=i,T.userData.fill=s,T.userData.fontScale=o,T}function dp(n){return`#${(n>>>0).toString(16).padStart(6,"0")}`}function ji(n,e=!1){let t=new Do;t.setPositions([0,0,0,0,0,0]);let i=new Wi({color:n,linewidth:e?2.4:1.75,depthTest:!1,depthWrite:!1,transparent:!0,toneMapped:!1,worldUnits:!1,dashed:!!e,dashSize:.08,gapSize:.06,dashScale:1});e&&(i.dashed=!0);let s=new th(t,i);return s.renderOrder=25,s.frustumCulled=!1,s.computeLineDistances(),s}function As(n,e,t){n.geometry.setPositions([e.x,e.y,e.z,t.x,t.y,t.z]),n.computeLineDistances()}function gy(n){let{scene:e,getCamera:t,getCanvas:i,getLocale:s,getVisibleWidthM:r,getTarget:o}=n,a=n.getExaggeration||(()=>1),l=new zt;l.name="Annotations",l.userData.blueprintAnnotations=!0,e.add(l);let c=null,u="viewer",h=!0,f=0,d=[],p=null,x=null,m=null;function g(){return u==="plate"?1315860:15921908}function v(V){return V&&V.color!=null?fp(V.color,g()):c&&c.annotationColor!=null?fp(c.annotationColor,g()):g()}function b(V){return dp(v(V))}function _(V){let Q=Number(V&&V.size);return Number.isFinite(Q)&&Q>0?Q:1}function w(V){V.traverse(Q=>{Q.geometry&&Q.geometry.dispose();let be=Q.material;be&&(be.map&&be.map.dispose(),be.dispose())})}function T(){for(let V of[...l.children])l.remove(V),w(V);d=[],p=null,x=null,m=null}function y(){return cA(i(),u)}function E(){l.visible=!!c&&h}function D(){if(T(),f=y(),!c){E();return}let V=s(),Q=g(),be=f,Re=Array.isArray(c.annotations)?c.annotations:[];for(let ee of Re)if(!(!ee||typeof ee!="object")){if(ee.kind==="callout"&&Array.isArray(ee.anchor)){let pe=nh(ee.text,V);if(!pe)continue;let Se=No(pe.split(`
`),u,be,"center",b(ee),_(ee)),$e=(ee.leader===!1?[]:my(ee)).map(()=>ji(v(ee)));l.add(...$e,Se),d.push({kind:"callout",sprite:Se,lines:$e,data:ee})}else if(ee.kind==="dim"&&Array.isArray(ee.a)&&Array.isArray(ee.b)){let pe=v(ee),Se=No(["0"],u,be,"center",dp(pe),_(ee)),$e=ji(pe),Oe=ji(pe),ze=ji(pe),oe=ji(pe),we=ji(pe);l.add($e,Oe,ze,oe,we,Se),d.push({kind:"dim",sprite:Se,lines:[$e,Oe,ze,oe,we],data:ee})}else if(ee.kind==="line"&&Array.isArray(ee.points)&&ee.points.length>=2){let pe=fp(ee.color,g()),$e=[ji(pe,!!ee.dashed)];ee.arrow&&$e.push(ji(pe,!1),ji(pe,!1));let Oe=null,ze=nh(ee.text,V);ze&&(Oe=No(ze.split(`
`),u,be,"center",dp(pe),_(ee))),l.add(...$e),Oe&&l.add(Oe),d.push({kind:"line",sprite:Oe,lines:$e,data:ee})}}let K=nh(c.title,V),ae=c.project?String(c.project):"",B=[...K.split(`
`),ae].filter(Boolean);B.length&&(p=No(B,u,be,"topleft"),l.add(p)),x=No(["1:1"],u,be,"bottomleft"),m=ji(Q),l.add(m,x),E()}function I(V){let Q=pp(V),be=a();return be!==1&&(Q.y*=be),Q}function z(V,Q=oA){return Q.copy(V).project(t())}function W(V,Q,be,Re=new P){return Re.set(V,Q,be).unproject(t())}function k(V){let Q=t(),be=i(),Re=Math.max(1,be.clientHeight);if(Q.isOrthographicCamera){let B=Math.max(Q.zoom,1e-6);return(Q.top-Q.bottom)/B/Re}let K=Math.max(Q.position.distanceTo(V),1e-4),ae=(Q.fov||45)*Math.PI/180;return 2*Math.tan(ae/2)*K/Re}let N=new P,G=new P;function j(V,Q){let be=t(),Re=k(Q),K=Re*V.userData.cssWidth,ae=Re*V.userData.cssHeight;N.set(1,0,0).applyQuaternion(be.quaternion),G.set(0,1,0).applyQuaternion(be.quaternion);let B=V.userData.anchor||"center";V.position.copy(Q),B==="topleft"?(V.position.addScaledVector(N,K*.5),V.position.addScaledVector(G,-ae*.5)):B==="bottomleft"&&(V.position.addScaledVector(N,K*.5),V.position.addScaledVector(G,ae*.5)),V.quaternion.copy(be.quaternion),V.scale.set(K,ae,1)}function q(){let V=i(),Q=Math.max(1,V.width),be=Math.max(1,V.height);l.traverse(Re=>{let K=Re.material;K&&K.resolution&&K.resolution.set(Q,be)})}function ye(V,Q){let be=No(Q,u,f||y(),V.userData.anchor,V.userData.fill,V.userData.fontScale||1);V.material.map?.dispose(),V.material.dispose(),V.material=be.material,V.userData.cssWidth=be.userData.cssWidth,V.userData.cssHeight=be.userData.cssHeight,be.geometry.dispose()}function Y(){if(!c||!h||(y()!==f&&D(),!l.visible))return;q();let Q=s();t().updateMatrixWorld();for(let B of d)if(B.kind==="callout"){let ee=I(B.data.anchor),pe=z(ee,dy),Se=Array.isArray(B.data.offset)?B.data.offset:[.08,.06],$e=pe.x+Number(Se[0]||0)*2,Oe=pe.y+Number(Se[1]||0)*2,ze=W($e,Oe,pe.z,py);j(B.sprite,ze);let oe=k(ze),we=oe*B.sprite.userData.cssWidth*.5,ke=my(B.data);for(let He=0;He<B.lines.length;He+=1){let Ze=I(ke[He]||B.data.anchor);wr.copy(ze).sub(Ze);let De=wr.length();De>we+oe?(wr.setLength(De-we),wr.add(Ze)):wr.copy(ze),As(B.lines[He],Ze,wr)}}else if(B.kind==="dim"){let ee=I(B.data.a),pe=I(B.data.b),Se=z(ee,dy),$e=z(pe,py),Oe=$e.x-Se.x,ze=$e.y-Se.y,oe=Math.hypot(Oe,ze)||1e-6;Oe/=oe,ze/=oe;let we=Number(B.data.offset)||.04,ke=-ze*we*2,He=Oe*we*2,Ze=(Se.z+$e.z)*.5,De=W(Se.x+ke,Se.y+He,Ze,new P),rt=W($e.x+ke,$e.y+He,Ze,new P),ie=k(De),Ue=ie*6,Ke=ie*8;js.copy(De).sub(ee);let xe=js.length()||1;js.multiplyScalar((xe+Ke)/xe);let A=ee.clone().add(js);js.copy(rt).sub(pe);let J=js.length()||1;js.multiplyScalar((J+Ke)/J);let ne=pe.clone().add(js),Ee=ee.clone().lerp(De,Math.min(.85,Ue/xe)),$=pe.clone().lerp(rt,Math.min(.85,Ue/J));As(B.lines[0],Ee,A),As(B.lines[1],$,ne),As(B.lines[2],De,rt);let me=ie*10,Te=W(Se.x+ke-ze*.012,Se.y+He+Oe*.012,Ze,new P).sub(De);Te.lengthSq()<1e-16?Te.set(0,me,0):Te.setLength(me),As(B.lines[3],De.clone().sub(Te),De.clone().add(Te)),As(B.lines[4],rt.clone().sub(Te),rt.clone().add(Te)),hp.copy(De).lerp(rt,.5);let C=W(Se.x+ke-ze*.03,Se.y+He+Oe*.03,Ze,new P).sub(W(Se.x+ke,Se.y+He,Ze,new P));C.lengthSq()>1e-12&&hp.add(C);let X=nh(B.data.text,Q)||aA(ee.distanceTo(pe));B.sprite.userData.labelText!==X&&(ye(B.sprite,[X]),B.sprite.userData.labelText=X),j(B.sprite,hp)}else if(B.kind==="line"){let ee=B.data.points.map(Se=>I(Se)),pe=[];for(let Se of ee)pe.push(Se.x,Se.y,Se.z);if(B.lines[0].geometry.setPositions(pe),B.lines[0].computeLineDistances(),B.data.arrow&&ee.length>=2&&B.lines.length>=3){let Se=ee[ee.length-2],$e=ee[ee.length-1],Oe=$e.clone().sub(Se);if(Oe.lengthSq()>1e-12){Oe.normalize();let ze=k($e),oe=Oe.clone().multiplyScalar(-ze*16),we=new P().crossVectors(Oe,t().up).normalize().multiplyScalar(ze*7);we.lengthSq()<1e-16&&we.set(ze*7,0,0),As(B.lines[1],$e,$e.clone().add(oe).add(we)),As(B.lines[2],$e,$e.clone().add(oe).sub(we))}}if(B.sprite){let Se=ee[0].clone().lerp(ee[ee.length-1],.5);j(B.sprite,Se)}}let Re=z(o(),wr).z;if(p){let B=W(-.94,.9,Re,new P);j(p,B)}let K=r(),ae=lA(K??NaN);if(x&&m){let B=K!=null&&K>8?2:1,ee=W(-.9,-.86,Re,new P),pe=W(-.9+.08,-.86,Re,new P).sub(ee),Se=k(ee),$e=K&&K>0?B/K*Math.max(1,i().clientWidth):80;pe.lengthSq()>1e-12?pe.setLength(Math.max($e*Se,Se*40)):pe.set(Se*80,0,0),As(m,ee,ee.clone().add(pe));let Oe=x.userData.labelText,ze=ae?`${ae}  \xB7  ${Math.round(B*1e3)} mm`:"";Oe!==ze&&(ye(x,ze?[ze]:["\u2014"]),x.userData.labelText=ze);let oe=W(-.9,-.8,Re,new P).sub(ee);j(x,ee.clone().add(oe))}}return{group:l,setSpec(V){c=V&&typeof V=="object"?V:null,D(),Y()},setInk(V){u=V==="plate"?"plate":"viewer",D(),Y()},setVisible(V){h=!!V,E(),l.visible&&Y()},isVisible(){return h},relocalize(){D(),Y()},glyphBoundsNdc(){let V=i(),Q=Math.max(1,V.clientWidth),be=Math.max(1,V.clientHeight),Re=1/0,K=-1/0,ae=1/0,B=-1/0,ee=!1;for(let pe of d){let Se=pe.sprite;if(!Se||Se===p||Se===x||pe.kind!=="callout"&&pe.kind!=="dim"&&pe.kind!=="line")continue;let $e=z(Se.position),Oe=(Se.userData.cssWidth||0)/Q,ze=(Se.userData.cssHeight||0)/be;Re=Math.min(Re,$e.x-Oe),K=Math.max(K,$e.x+Oe),ae=Math.min(ae,$e.y-ze),B=Math.max(B,$e.y+ze),ee=!0}return ee?{minX:Re,maxX:K,minY:ae,maxY:B}:null},update:Y,clear(){c=null,T(),l.visible=!1}}}function xy(n){return n/25.4*72}function mp(n,e){let t=URL.createObjectURL(n),i=document.createElement("a");i.href=t,i.download=e,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(t),3e4)}function uA(n){let e=document.createElement("canvas");e.width=n.width,e.height=n.height;let t=e.getContext("2d");return t?(t.drawImage(n,0,0),new Promise((i,s)=>{e.toBlob(r=>{r?i(r):s(new Error("PNG capture failed"))},"image/png")})):Promise.reject(new Error("2D canvas unavailable"))}async function hA(n){let e=await createImageBitmap(n),t=document.createElement("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d",{willReadFrequently:!0});if(!i)throw new Error("2D canvas unavailable");return i.drawImage(e,0,0),e.close?.(),i.getImageData(0,0,t.width,t.height)}async function fA(n){if(typeof CompressionStream>"u")return{bytes:n,filter:""};let e=new Blob([n]).stream().pipeThrough(new CompressionStream("deflate"));return{bytes:new Uint8Array(await new Response(e).arrayBuffer()),filter:"/Filter /FlateDecode "}}function al(n){return typeof n=="string"?new TextEncoder().encode(n):n}async function dA(n){let e=n.width,t=n.height,i=n.data,s=new Uint8Array(e*t*3);for(let _=0,w=0;_<i.length;_+=4,w+=3){let T=i[_+3]/255;s[w]=Math.round(i[_]*T+255*(1-T)),s[w+1]=Math.round(i[_+1]*T+255*(1-T)),s[w+2]=Math.round(i[_+2]*T+255*(1-T))}let{bytes:r,filter:o}=await fA(s),a=xy(420),l=xy(297),c=`q
${a.toFixed(3)} 0 0 ${l.toFixed(3)} 0 0 cm
/Im0 Do
Q
`,u=new TextEncoder().encode(c),h=[],f=0;function d(_){h.push(_),f+=_.length}let p=[0];function x(_,w){p[_]=f,d(al(`${_} 0 obj
`));for(let T of w)d(al(T));d(al(`
endobj
`))}d(al(`%PDF-1.4
`)),x(1,["<< /Type /Catalog /Pages 2 0 R >>"]),x(2,["<< /Type /Pages /Kids [3 0 R] /Count 1 >>"]),x(3,[`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${a.toFixed(3)} ${l.toFixed(3)}] `,"/Contents 4 0 R /Resources << /XObject << /Im0 5 0 R >> >> >>"]),x(4,[`<< /Length ${u.length} >>
stream
`,u,`
endstream`]),x(5,[`<< /Type /XObject /Subtype /Image /Width ${e} /Height ${t} `,`/ColorSpace /DeviceRGB /BitsPerComponent 8 ${o}/Length ${r.length} >>
stream
`,r,`
endstream`]);let m=f,g=`xref
0 6
0000000000 65535 f 
`;for(let _=1;_<=5;_++)g+=`${String(p[_]).padStart(10,"0")} 00000 n 
`;g+=`trailer
<< /Size 6 /Root 1 0 R >>
startxref
${m}
%%EOF
`,d(al(g));let v=new Uint8Array(f),b=0;for(let _ of h)v.set(_,b),b+=_.length;return new Blob([v],{type:"application/pdf"})}async function yy(n){let e=await uA(n),t=await hA(e),i=await dA(t);return{png:e,pdf:i}}var gp="scene";function xA(){try{return(new URLSearchParams(location.search).get(gp)||"").trim()}catch{return""}}function vy(n){try{let e=new URL(location.href),t=n!=null?String(n).trim():"";t?e.searchParams.set(gp,t):e.searchParams.delete(gp);let i=`${e.pathname}${e.search}${e.hash}`,s=`${location.pathname}${location.search}${location.hash}`;i!==s&&history.replaceState(null,"",i)}catch{}}function yA(n,e,t={}){let i=Array.isArray(t.scenes)?t.scenes:[],s=Array.isArray(t.partGroups)?t.partGroups:[],r=Array.isArray(t.doors)?t.doors:[],o=jx(t.ifc),a=new Map,l=()=>{},c=String(t.scene!=null?t.scene:xA()).trim();Cx(),Jd(document);let u=[],h=null,f=1842206,d=!0,p=ax(),x=z0(),m=new Map,g=new Map,v=new Map,b=new Map,_=new Set,w=new Map,T=new Map,y=new Map,E=new Set,D=null;D=wx(M=>{d=M,f=M?1842206:15263981,h&&(h.background=new je(f)),document.documentElement.style.colorScheme=M?"dark":"light",m.size&&ns()});let I=new xu({canvas:n,antialias:!0,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0,logarithmicDepthBuffer:!0});I.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),I.outputColorSpace=At,I.toneMapping=xo,I.toneMappingExposure=1.05,I.localClippingEnabled=!0;let z=Q0(I);h=new zn,h.background=new je(f);let W=1,k=new zt;k.name="VerticalExaggeration",h.add(k);function N(M){let L=Number(M);W=Number.isFinite(L)&&L>0?L:1,k.scale.set(1,W,1)}let G=30,j=120,q=75,ye=125,Y="perspective",V=q,Q=q,be=1,Re=!1,K=new on(45,1,.01,1e6),ae=new yi(-1,1,1,-1,.01,1e6),B=K,ee=new Eu(B,n);ee.enableDamping=!1,ee.screenSpacePanning=!0;let pe=()=>!1,Se=Kx({canvas:n,getCamera:()=>B,records:r,isBlocked:()=>pe(),onLongPress:M=>l(M)}),$e=new Map,Oe=new Map;Jx(Se.taps,{elementOf:M=>Ap(M),isOn:M=>!!$e.get(M.globalId),isOpen:M=>!!Oe.get(M.globalId),onLight:M=>ky(M),onSwitch:M=>Hy(M),onWindow:M=>Vy(M)});let ze=gy({scene:h,getCamera:()=>B,getCanvas:()=>n,getLocale:Gu,getVisibleWidthM:()=>{if(!B.isOrthographicCamera)return null;let M=Math.max(B.zoom,1e-6);return(B.right-B.left)/M},getTarget:()=>ee.target,getExaggeration:()=>W}),oe=null,we=null;h.add(new Ea(16777215,.45));let ke=new Hs(16777215,1.15);ke.position.set(.6,1,.4),h.add(ke);let He=new Hs(16777215,.4);He.position.set(-.5,.2,-.6),h.add(He);let Ze=new So(I);h.environment=Ze.fromScene(new wu,.04).texture,Ze.dispose();let De=null;fy({canvas:n,controls:ee,getCamera:()=>B,getRoot:()=>De,isBlocked:()=>pe()||ee.enabled===!1});let rt=new Vt,ie=new P,Ue=new P,Ke=new P,xe=new P,A=new P,J=[],ne=1,Ee=!1,$=!1,me=!1;new vu().parse(e,"",M=>{De=M.scene,k.add(De),Se.bind(De),De.traverse(F=>{if(!F.isMesh)return;let O=qx(F);F.userData.bpPart=O.part,F.userData.bpElementKey=O.element,O.element&&(a.has(O.element)||a.set(O.element,[]),a.get(O.element).push(F));let fe=O.part;if(m.has(fe)||m.set(fe,[]),m.get(fe).push(F),F.material){let Ve=Array.isArray(F.material)?F.material:[F.material];for(let Be of Ve)"side"in Be&&(Be.side=Dt)}}),Zt(),cl(),Fo(),fl(),lh();let L=le(c);L&&(is=`scene:${String(L.id).trim()}`),Ge(),Ce(),Je(),Qn(),ns(),L&&Ai(L),te(),D?.refreshPartialHeight(),wy(),Ty(),Cr(),Pr()},M=>{Te(String(M?.message||M))});function Te(M){let L=document.getElementById("err");L&&(L.style.display="block",L.textContent=M)}function C(){De&&(rt.setFromObject(De),rt.getSize(ie),rt.getCenter(Ue))}function S(){let M=Math.max(1,n.clientWidth),L=Math.max(1,n.clientHeight);return M/L}function X(M,L){let F=M*Math.PI/180;return 2*Math.atan(Math.tan(F/2)/Math.max(L,1e-6))}function ve(){let M=S();K.aspect=M,K.fov=X(V,M)*180/Math.PI,K.updateProjectionMatrix()}function de(M,L){let F=S(),O=Math.max(M,1e-6)*Math.tan(L/2),fe=O*F;ae.left=-fe,ae.right=fe,ae.top=O,ae.bottom=-O,ae.updateProjectionMatrix()}function he(){let M=S(),F=Math.max(ae.top,1e-6)*M;ae.left=-F,ae.right=F,ae.updateProjectionMatrix()}function _e(M,L){let F=S(),O=Math.max(M,1e-6),Ve=Math.max(L,1e-6),Be=Ve*F;Be<O&&(Be=O,Ve=Be/Math.max(F,1e-6)),be=1,ae.left=-Be,ae.right=Be,ae.top=Ve,ae.bottom=-Ve,ae.updateProjectionMatrix(),U()}function re(M){let L=Math.max(M,1e-4),F=Ke.copy(B.position).sub(ee.target);F.lengthSq()<1e-12?F.set(0,0,1):F.normalize(),B.position.copy(ee.target).addScaledVector(F,L)}function ce(M){M!==B&&(M.position.copy(B.position),M.quaternion.copy(B.quaternion),M.up.copy(B.up),M.near=B.near,M.far=B.far,B=M,ee.object=B,ee.update())}function Ie(){let M=Math.abs(Ft)>.05||Math.abs(sn)>.05||Math.abs(bt-1)>.001?bt:1;return be*M}function U(){B.zoom=Ie(),B.updateProjectionMatrix()}function ge(){if(Re||$||!B.isOrthographicCamera)return;let M=Math.abs(Ft)>.05||Math.abs(sn)>.05||Math.abs(bt-1)>.001?bt:1;be=Math.max(B.zoom/Math.max(M,1e-6),1e-6)}function ue(){if(Y==="ortho")return;Q=V;let M=B.position.distanceTo(ee.target),L=X(V,S());de(M,L),be=1,Et(()=>{Re=!0,ce(ae),Y="ortho",U(),Re=!1}),Ae()}function Ne(M){if(Y!=="ortho")return;let L=Fe(M??Q),F=Math.max(ae.top,1e-6)/Math.max(be,1e-6),O=X(L,S()),fe=F/Math.max(Math.tan(O/2),1e-8);V=L,Q=L,be=1,Et(()=>{Re=!0,ce(K),Y="perspective",ve(),re(fe),U(),ut(),ee.update(),Re=!1}),Ae()}function Pe(M,L={}){let F=Fe(M);if(Y==="ortho"){Ne(F);return}let O=S(),fe=X(V,O),Ve=X(F,O),Be=B.position.distanceTo(ee.target);V=F,Q=F,Et(()=>{if(ve(),L.reframe!==!1){let ot=Math.tan(fe/2)/Math.max(Math.tan(Ve/2),1e-8);re(Be*ot),ut(),ee.update()}U()}),Ae()}function Le(){Y==="ortho"?Ne(Q):ue()}function Fe(M){return Math.min(j,Math.max(G,M))}function it(){return Y==="ortho"?ye:V}function Z(M){return M>j?"ISO":`${Math.round(M)}\xB0`}function Ae(){oe&&(oe.value=it()),we&&(we.textContent=Y==="ortho"?"ISO":`${Math.round(V)}\xB0`),oe?.refresh()}function st(M){if(M>j){Y!=="ortho"?ue():Ae();return}let L=Fe(M);Y==="ortho"?Ne(L):Pe(L,{reframe:!0})}function Ce(){let M=document.getElementById("fov");if(!M)return;M.replaceChildren();let L=document.createElement("div");L.className="fov-row";let F=document.createElement("span");F.className="fov-label",F.textContent=Yt("ui.fov"),we=document.createElement("span"),we.className="fov-value",we.textContent=`${Math.round(V)}\xB0`,oe=Vu({min:G,max:ye,step:1,value:it(),ariaLabel:"Field of view",formatAriaValue:Z,onInput:Be=>st(Be),onChange:Be=>st(Be),onTap:()=>Le()}),oe.el.classList.add("fov-range");let O=document.createElement("div");O.className="fov-detent",O.setAttribute("aria-hidden","true");let fe=(j-G)/(ye-G);O.style.left=`${fe*100}%`,oe.el.querySelector(".coop-range-track")?.append(O),L.append(F,oe.el,we),M.append(L),Ae()}function ut(){let M=Math.max(ie.x,ie.y,ie.z,.01),L=B.position.distanceTo(ee.target),F=Math.round(Math.min(Math.max(L/200,M/5e3,.001),L/10)*1e4)/1e4,O=Math.round(Math.max(L+M*4,M*8,10)*1e4)/1e4;B.near===F&&B.far===O||(B.near=F,B.far=O,B.updateProjectionMatrix())}function Et(M){$=!0;try{M()}finally{requestAnimationFrame(()=>{$=!1})}}ve();function Zt(){De&&(Et(()=>{C(),ee.target.copy(Ue);let L=Math.max(ie.x,ie.y,ie.z,1)*1.85;B.position.set(Ue.x+L*.75,Ue.y+L*.55,Ue.z+L*.75),ut(),ee.update()}),Tt())}function Rs(){for(let M of m.keys())g.set(M,1),v.set(M,1),ws(m.get(M)||[],1,{edgeMode:x});C(),Cs()}function Ti(M){if(De){if(R=null,ze.clear(),N(1),Rs(),Cr(),Pr(),K.up.set(0,1,0),ae.up.set(0,1,0),B.up.set(0,1,0),M==="iso"){Zt();return}Et(()=>{C();let L=Math.max(ie.x,ie.y,ie.z,1),F=L*1.85,O=Ue;M==="front"?B.position.set(O.x,O.y,O.z+F):M==="top"?B.position.set(O.x,O.y+F,O.z+L*.01):M==="side"&&B.position.set(O.x-F,O.y,O.z),ee.target.copy(O),ut(),ee.update()}),Tt()}}function Ai(M){if(!De||!M)return;R=M,N(M.verticalExaggeration);let L=W;if(M.opacityDefault!=null||M.opacity&&typeof M.opacity=="object"){let Ve=M.opacityDefault!=null?Number(M.opacityDefault):1,Be=M.opacity&&typeof M.opacity=="object"?M.opacity:{},ot=ix(Be,u);for(let wt of m.keys()){let rn=Object.prototype.hasOwnProperty.call(ot,wt)?ot[wt]:Ve;Qi(wt,rn,{skipUi:!0,skipClip:!0})}C(),Cs()}if(Object.prototype.hasOwnProperty.call(M,"cuts")){let Ve=Array.isArray(M.cuts)?M.cuts:[];J.length=0;for(let Be of Ve){let ot=Be?.normal;if(!Array.isArray(ot)||ot.length<3)continue;let wt=new P(Number(ot[0])||0,Number(ot[1])||0,Number(ot[2])||0);if(wt.lengthSq()<1e-12)continue;wt.normalize();let rn=null,pn=Math.min(1,Math.max(0,Number(Be.t)||0));if(Array.isArray(Be.anchor)&&Be.anchor.length>=3){rn=pp(Be.anchor),rn.y*=L;let{near:Is,far:tr}=fn(wt),yl=rn.dot(wt);pn=Math.min(1,Math.max(0,(yl-Is)/Math.max(tr-Is,1e-6)))}J.push({id:ne++,normal:wt,t:pn,anchor:rn,locked:!0,label:tt(wt)})}Ee=!1,Kt(),Je(),Qn(),D?.refreshPartialHeight()}M.projection==="ortho"?Y!=="ortho"?ue():Ae():M.hFovDeg!=null&&Number.isFinite(Number(M.hFovDeg))&&Pe(Number(M.hFovDeg),{reframe:!1});let O=M.camera;O&&Array.isArray(O.target)&&Array.isArray(O.position)&&Et(()=>{Re=!0;let Ve=new P(0,1,0);Array.isArray(O.up)&&O.up.length>=3&&(Ve.set(Number(O.up[0])||0,Number(O.up[1])||0,Number(O.up[2])||0),Ve.lengthSq()<1e-12?Ve.set(0,1,0):Ve.normalize()),K.up.copy(Ve),ae.up.copy(Ve),B.up.copy(Ve),ee.target.set(Number(O.target[0])||0,(Number(O.target[1])||0)*L,Number(O.target[2])||0),B.position.set(Number(O.position[0])||0,(Number(O.position[1])||0)*L,Number(O.position[2])||0),B.lookAt(ee.target),Y==="ortho"&&Array.isArray(O.orthoFit)&&O.orthoFit.length>=2&&_e(Number(O.orthoFit[0])||.1,(Number(O.orthoFit[1])||.1)*L),C(),ut(),ee.update(),Re=!1}),Tt();let fe=M.edges;(fe==="none"||fe==="transparent"||fe==="opaque")&&(x=fe,ts()),ze.setSpec(M),Cr(),Pr()}function Qi(M,L,F={}){let O=Math.max(0,Math.min(1,Number(L)||0));g.set(M,O),O>0&&v.set(M,O),F.detach&&_.add(M),ws(m.get(M)||[],O,{edgeMode:x}),!F.skipClip&&(C(),F.skipUi||Cs())}function ll(M,L,F){let O=Math.max(0,Math.min(1,Number(L)||0));F&&b.set(F,O);for(let fe of M)_.has(fe)||(g.set(fe,O),O>0&&v.set(fe,O),ws(m.get(fe)||[],O,{edgeMode:x}));C(),Cs()}function es(M,L,F){_.delete(M);let O=F.filter(Ve=>!_.has(Ve)),fe=Qs(L,O);g.set(M,fe),fe>0&&v.set(M,fe),ws(m.get(M)||[],fe,{edgeMode:x}),C(),Cs()}function Oo(M){if(!M.length)return 1;let L=g.get(M[0])??1;for(let F=1;F<M.length;F++){let O=g.get(M[F])??1;if(Math.abs(O-L)>1e-4)return NaN}return L}function Qs(M,L){let F=L.filter(fe=>!_.has(fe)),O=Oo(F.length?F:L);return Number.isNaN(O)?b.get(M)??1:O}function Cs(){for(let[M,L]of w)L.value=(g.get(M)??1)*100;for(let[M,L]of T){let F=(L.el.dataset.leaves||"").split(",").map(O=>O.trim()).filter(Boolean);L.value=Qs(M,F)*100}for(let[M,L]of y){let F=_.has(M);L.hidden=!F,L.setAttribute("aria-hidden",F?"false":"true")}}function Ri(){return J.filter(M=>M.locked).map(M=>St(M))}function Uo(){let M=new Ye;return I.getDrawingBufferSize(M),{x:M.x,y:M.y}}function ts(){if(m.size){if(x===vr){X0(De);return}$0(m,!0,{clippingPlanes:Ri(),resolution:Uo(),edgeMode:x})}}function ns(){m.size&&(rx(m,p,{isDark:d,clippingPlanes:Ri(),opacityByLabel:g,edgeMode:x}),p===el?(I.toneMapping=xo,I.toneMappingExposure=1.05):(I.toneMapping=ri,I.toneMappingExposure=1),ts(),qd(m,Ri()))}function cl(){let M=document.getElementById("mats");if(M){M.replaceChildren();for(let[L,F]of[[Bu,"ui.solid"],[el,"ui.realistic"]]){let O=document.createElement("button");O.type="button",O.dataset.mode=L,O.textContent=Yt(F),L===p&&O.classList.add("is-active"),O.addEventListener("click",()=>{p=L,lx(L),M.querySelectorAll("button").forEach(fe=>{fe.classList.toggle("is-active",fe.dataset.mode===L)}),ns()}),M.append(O)}}}function Fo(){let M=document.getElementById("edges");if(M){M.replaceChildren();for(let[L,F]of[[vr,"ui.edgesNone"],[br,"ui.edgesTransparent"],[ja,"ui.edgesOpaque"]]){let O=document.createElement("button");O.type="button",O.dataset.edgeMode=L,O.textContent=Yt(F),L===x&&O.classList.add("is-active"),O.addEventListener("click",()=>{x=L,Ud(L),M.querySelectorAll("button").forEach(fe=>{fe.classList.toggle("is-active",fe.dataset.edgeMode===L)}),ts(),wp()}),M.append(O)}}}function Bo(M,L,F,O){let fe=document.createElement("div");fe.className="part-opacity-wrap";let Ve,Be=()=>{if(Ve.value/100>0)O(0);else{let wt=F();O(wt>0?wt:1)}};return Ve=Vu({min:0,max:100,step:1,value:Math.round(L),ariaLabel:M,formatAriaValue:ot=>`${Math.round(ot)}%`,thumbScrubOnly:!0,onInput:ot=>O(ot/100),onChange:ot=>O(ot/100),onTap:Be}),Ve.el.classList.add("part-opacity"),fe.append(Ve.el),{wrap:fe,range:Ve}}function ul(){let M=document.getElementById("parts");if(!M)return;M.style.removeProperty("--part-name-col");let L=0;for(let F of M.querySelectorAll(".part-name")){if(F.closest(".part-children")?.hidden)continue;let fe=F.style.width;F.style.width="max-content",L=Math.max(L,Math.ceil(F.getBoundingClientRect().width)),F.style.width=fe}L>0&&M.style.setProperty("--part-name-col",`${L}px`)}function hl(M,L,F,O=null){if(M.type==="leaf"){let Pt=document.createElement("div");Pt.className="part-row part-leaf",Pt.style.setProperty("--part-depth",String(F)),Pt.dataset.leaf=M.id;let _l=document.createElement("span");_l.className="part-disclosure-spacer",_l.setAttribute("aria-hidden","true");let vl=document.createElement("span");vl.className="part-name",vl.textContent=M.label;let{wrap:Np,range:Op}=Bo(`${M.label} opacity`,(g.get(M.id)??1)*100,()=>v.get(M.id)??1,bl=>Qi(M.id,bl,{detach:!!O}));Op.el.dataset.leaf=M.id,w.set(M.id,Op);let fi=null;if(O){fi=document.createElement("button"),fi.type="button",fi.className="part-sync",fi.textContent=Yt("ui.sync"),fi.setAttribute("aria-label",`${Yt("ui.sync")} ${M.label}`);let bl=_.has(M.id);fi.hidden=!bl,fi.setAttribute("aria-hidden",bl?"false":"true"),fi.addEventListener("click",Yy=>{Yy.stopPropagation(),es(M.id,O.groupId,O.leafIds)}),y.set(M.id,fi)}fi?Pt.append(_l,vl,Np,fi):Pt.append(_l,vl,Np),L.append(Pt);return}let fe=zu(M),Ve=document.createElement("div");Ve.className="part-group",Ve.dataset.group=M.id;let Be=document.createElement("div");Be.className="part-row part-group-row",Be.style.setProperty("--part-depth",String(F)),Be.setAttribute("role","button"),Be.tabIndex=0;let ot=document.createElement("button");ot.type="button",ot.className="part-disclosure",ot.setAttribute("aria-label",`Expand ${M.label}`),ot.setAttribute("aria-expanded","false");let wt=document.createElement("span");wt.className="part-name",wt.textContent=M.label;let rn=Qs(M.id,fe)||1;rn<=0&&(rn=1);let{wrap:pn,range:Is}=Bo(`${M.label} opacity`,Qs(M.id,fe)*100,()=>rn,Pt=>{Pt>0&&(rn=Pt),ll(fe,Pt,M.id)});Is.el.dataset.group=M.id,Is.el.dataset.leaves=fe.join(","),T.set(M.id,Is),pn.addEventListener("click",Pt=>Pt.stopPropagation()),pn.addEventListener("pointerdown",Pt=>Pt.stopPropagation());let tr=document.createElement("div");tr.className="part-children",tr.hidden=!0;function yl(Pt){Pt?E.add(M.id):E.delete(M.id),tr.hidden=!Pt,Ve.classList.toggle("is-expanded",Pt),ot.setAttribute("aria-expanded",Pt?"true":"false"),ot.setAttribute("aria-label",Pt?`Collapse ${M.label}`:`Expand ${M.label}`),requestAnimationFrame(()=>ul())}function dh(){yl(!E.has(M.id))}ot.addEventListener("click",Pt=>{Pt.stopPropagation(),dh()}),Be.addEventListener("click",Pt=>{pn.contains(Pt.target)||dh()}),Be.addEventListener("keydown",Pt=>{(Pt.key==="Enter"||Pt.key===" ")&&(Pt.preventDefault(),dh())}),Be.append(ot,wt,pn),Ve.append(Be,tr),L.append(Ve);let $y={groupId:M.id,leafIds:fe};for(let Pt of M.children)hl(Pt,tr,F+1,$y);yl(E.has(M.id))}function fl(){let M=document.getElementById("parts");if(!M)return;M.replaceChildren(),w.clear(),T.clear(),y.clear();for(let F of m.keys())g.has(F)||(g.set(F,1),ws(m.get(F)||[],1,{edgeMode:x})),v.has(F)||v.set(F,1);let L=nx(m.keys(),s,Yt);u=L;for(let F of L)hl(F,M,0,null);requestAnimationFrame(()=>ul())}let is="iso",R=null,H=!1;function le(M){let L=String(M||"").trim();if(!L)return null;for(let F of i)if(String(F?.id||"").trim()===L)return F;return null}function te(){let M=is;M&&M.startsWith("scene:")?vy(M.slice(6)):vy(null)}function se(){return document.querySelectorAll("#cams button, #scenes button")}function We(){is!=null&&(is=null,se().forEach(M=>{M.classList.remove("is-active")}),te())}function et(){let M=document.getElementById("scenes");if(!M){let L=document.getElementById("cams");M=document.createElement("div"),M.id="scenes",M.className="scene-list",L?.insertAdjacentElement("afterend",M)}return M}function Ge(){let M=document.getElementById("cams");if(!M)return;M.replaceChildren();let L=et();L.replaceChildren();function F(O,fe,Ve,Be){let ot=document.createElement("button");ot.type="button",ot.dataset.preset=fe,ot.textContent=Ve,fe===is&&ot.classList.add("is-active"),ot.addEventListener("click",()=>{is=fe,se().forEach(wt=>{wt.classList.toggle("is-active",wt.dataset.preset===fe)}),Be(),te()}),O.append(ot)}for(let[O,fe]of[["iso","ui.iso"],["front","ui.front"],["side","ui.side"],["top","ui.top"]])F(M,O,Yt(fe),()=>Ti(O));for(let O of i){let fe=String(O?.id||"").trim();if(!fe)continue;let Ve=Yt(`scene.${fe}`);F(L,`scene:${fe}`,Ve,()=>Ai(O))}L.hidden=L.childElementCount===0}function qe(M=Ke){return M.copy(ee.target).sub(B.position).normalize()}function tt(M){let L=Math.hypot(M.x,M.z),F=(Math.atan2(M.x,M.z)*180/Math.PI+360)%360,O=Math.atan2(M.y,L)*180/Math.PI,fe=Math.abs(O).toFixed(0),Ve=O>=0?"\u2191":"\u2193";return`${F.toFixed(0)}\xB0 / ${fe}\xB0${Ve}`}function lt(){return J.some(M=>!M.locked)}function dt(){return J.filter(M=>M.locked)}function Je(){lt()||!(dt().length===0||Ee)||J.push({id:ne++,normal:new P(0,0,1),t:0,locked:!1,label:Yt("ui.cut")})}function yt(M){let L=document.getElementById("cuts");if(!L)return;let F=L.querySelector(`[data-cut-id="${M.id}"]`);if(!F){Qn();return}let O=F.querySelector(".cut-label");if(O&&(O.textContent=M.locked?M.label:Yt("ui.cut")),M.locked&&!F.querySelector(".cut-remove")){let fe=document.createElement("button");fe.type="button",fe.className="cut-remove",fe.setAttribute("aria-label",Yt("ui.removeSection")),fe.textContent="\xD7",fe.addEventListener("click",()=>Qe(M.id)),F.append(fe)}}function Xt(M){M.locked||(qe(M.normal),M.locked=!0,M.label=tt(M.normal),Ee=!1,Kt(),yt(M))}function Tt(){dt().length!==0&&(lt()||(Ee=!0,!me&&(Je(),Qn())))}function Nt(){Ee&&(lt()||dt().length!==0&&(Je(),Qn()))}function jt(M,L){let F=J.find(O=>O.id===M);if(F){if(F.locked||Xt(F),F.t=Math.min(1,Math.max(0,Number(L))),F.anchor=null,me){Ci();return}Kt()}}function Qe(M){let L=J.findIndex(F=>F.id===M);L<0||(J.splice(L,1),dt().length===0?(Ee=!1,lt()||Je()):Ee&&!lt()&&Je(),Kt(),Qn(),D?.refreshPartialHeight())}function fn(M){if(C(),rt.isEmpty())return{near:-1,far:1};let L=rt.min,F=rt.max,O=1/0,fe=-1/0;for(let ot=0;ot<2;ot++)for(let wt=0;wt<2;wt++)for(let rn=0;rn<2;rn++){A.set(ot?F.x:L.x,wt?F.y:L.y,rn?F.z:L.z);let pn=A.dot(M);pn<O&&(O=pn),pn>fe&&(fe=pn)}let Be=Math.max(fe-O,1e-6)*.02;return{near:O-Be,far:fe+Be}}function St(M){if(M.anchor)return new gn().setFromNormalAndCoplanarPoint(M.normal,M.anchor);let{near:L,far:F}=fn(M.normal),O=L+(F-L)*M.t;return xe.copy(M.normal).multiplyScalar(O),new gn().setFromNormalAndCoplanarPoint(M.normal,xe)}function Ci(){let M=Ri();return De&&(De.traverse(L=>{if(!L.isMesh||!L.material||On(L)||Hu(L))return;let F=Array.isArray(L.material)?L.material:[L.material];for(let O of F){if(!O)continue;let fe=O.clippingPlanes?O.clippingPlanes.length:0;O.clippingPlanes=M,O.clipIntersection=!1,fe!==M.length&&(O.needsUpdate=!0)}}),Fd(De,M)),M}function Kt(){let M=Ci();De&&(qd(m,M),x!==vr?ts():Fd(De,M))}function Qn(){let M=document.getElementById("cuts");if(M){M.replaceChildren();for(let L of J){let F=document.createElement("div");F.className="cut-row",F.dataset.cutId=String(L.id);let O=document.createElement("span");O.className="cut-label",O.textContent=L.locked?L.label:Yt("ui.cut");let fe=()=>{me&&(me=!1,Kt(),Nt())},Ve=Vu({min:0,max:1,step:.001,value:L.t,ariaLabel:L.locked?`Section ${L.label}`:"Section cut",onScrubStart:()=>{me=!0,L.locked||Xt(L)},onScrubEnd:fe,onInput:Be=>jt(L.id,Be),onChange:Be=>{jt(L.id,Be),fe()}});if(F.append(O,Ve.el),L.locked){let Be=document.createElement("button");Be.type="button",Be.className="cut-remove",Be.setAttribute("aria-label",Yt("ui.removeSection")),Be.textContent="\xD7",Be.addEventListener("click",()=>Qe(L.id)),F.append(Be)}M.append(F)}D?.refreshPartialHeight()}}let Vn=!1,ui=new P,_t=new P,Qt=!1;n.addEventListener("pointerdown",()=>{Vn=!0},{capture:!0});let Gn=()=>{Vn=!1};window.addEventListener("pointerup",Gn,{capture:!0}),window.addEventListener("pointercancel",Gn,{capture:!0}),ee.addEventListener("start",()=>{We(),Vn=!0}),ee.addEventListener("change",()=>{ge()}),ee.addEventListener("end",()=>{Vn=!1,!$&&Tt()});let bt=1,Ft=0,sn=0,Tr=1,ih=0,sh=0,rh=1,oh=0,ah=0,er=0,by=280;function My(){let M=Math.max(1,n.clientWidth),L=Math.max(1,n.clientHeight);if(!D)return{zoom:1,offX:0,offY:0,w:M,h:L};let{bottom:F,right:O}=D.getSafeInsets();if(F<=0&&O<=0)return{zoom:1,offX:0,offY:0,w:M,h:L};let fe=Math.max(1,M-O),Ve=Math.max(1,L-F),Be=Math.min(fe/M,Ve/L),ot=O/2,wt=F/2;return{zoom:Be,offX:ot,offY:wt,w:M,h:L}}function xp(M,L){Et(()=>{Re=!0,Math.abs(Ft)>.05||Math.abs(sn)>.05||Math.abs(bt-1)>.001?(B.zoom=be*bt,B.setViewOffset(M,L,Ft,sn,M,L)):(B.clearViewOffset(),B.zoom=be,bt=1,Ft=0,sn=0),B.updateProjectionMatrix(),Re=!1})}function yp(M=!0){let{zoom:L,offX:F,offY:O,w:fe,h:Ve}=My();if(Tr=L,ih=F,sh=O,!M){bt=L,Ft=F,sn=O,er=0,xp(fe,Ve);return}rh=bt,oh=Ft,ah=sn,er=performance.now()}function Sy(M){if(!er)return;let L=Math.min(1,(M-er)/by),F=1-(1-L)**3;bt=rh+(Tr-rh)*F,Ft=oh+(ih-oh)*F,sn=ah+(sh-ah)*F;let O=Math.max(1,n.clientWidth),fe=Math.max(1,n.clientHeight);xp(O,fe),L>=1&&(er=0)}function dl(){let M=Math.max(1,n.clientWidth),L=Math.max(1,n.clientHeight);I.setSize(M,L,!1),Y==="perspective"?ve():he(),yp(!1);let F=Uo();q0(De,F.x,F.y)}dl(),window.addEventListener("resize",dl),D?.onDetentChange(()=>{yp(!0)});let Wn=document.getElementById("ar"),_n=document.getElementById("measure"),zo=!1,pl=()=>Yt("ui.measure");function lh(){let M=document.getElementById("locale");if(M){M.replaceChildren();for(let[L,F]of[["cs","CS"],["en","EN"]]){let O=document.createElement("button");O.type="button",O.dataset.locale=L,O.textContent=F,L===Gu()&&O.classList.add("is-active"),O.addEventListener("click",()=>{Rx(L)}),M.append(O)}}}function Ey(){Jd(document),Wn&&!zo&&(Wn.textContent=Yt("ui.ar")),_n&&(_n.textContent=pl()),Cr(),Pr(),ze.relocalize();try{cl(),Fo(),Ge(),Ce(),fl(),Qn(),lh()}catch(M){console.error("relocalizeUi",M);try{lh()}catch{}}D?.refreshPartialHeight()}Kd(()=>Ey());function wy(){Wn&&(Wn.hidden=!1,zo||(Wn.textContent=Yt("ui.ar")))}function Ty(){_n&&(_n.hidden=!1,_n.textContent=pl())}let Ar=document.getElementById("drawing"),Ps=document.getElementById("labels"),Rr=!0;function Cr(){Ar&&(Ar.hidden=!1,Ar.disabled=!R||ml,Ar.textContent=Yt("ui.drawing"))}function Pr(){if(!Ps)return;let M=!!R;Ps.hidden=!M,Ps.disabled=!M,Ps.setAttribute("aria-pressed",Rr?"true":"false"),Ps.classList.toggle("is-active",M&&Rr),Ps.textContent=Yt("ui.labels")}function Ay(){try{let M=new URLSearchParams(window.location.search).get("m");if(M&&M.trim())return M.trim()}catch{}return"model"}function Ry(){let L=1,F=1.35;for(let O=0;O<6;O+=1){ze.update();let fe=ze.glyphBoundsNdc();if(!fe)return;let Ve=Math.max(-1+.04-fe.minX,fe.maxX-(1-.04),-1+.04-fe.minY,fe.maxY-(1-.04),0);if(Ve<.012||L>=F-.01)return;let Be=Math.min(F/L,Math.max(1.05,1+Ve*1.6));L*=Be,B.isOrthographicCamera?(ae.left*=Be,ae.right*=Be,ae.top*=Be,ae.bottom*=Be,ae.updateProjectionMatrix()):(Ke.copy(B.position).sub(ee.target).multiplyScalar(Be),B.position.copy(ee.target).add(Ke),ut())}}function _p(){er=0,bt=1,Ft=0,sn=0,Tr=1,ih=0,sh=0,B.clearViewOffset(),B.zoom=be,B.updateProjectionMatrix()}let ml=!1;async function vp(){if(ml||!De||!R)return null;ml=!0,Cr(),H=!0;let M=R,L=x,F=h.background,O=I.getPixelRatio(),fe=n.style.width,Ve=n.style.height,Be=D?.getDetent?.()??null,ot=hi?.isActive()??!1,wt=ze.isVisible();try{ot&&hi?.setActive(!1),ze.setVisible(!0),D?.setDetent("closed"),n.style.width=`${2400}px`,n.style.height=`${1697}px`,I.setPixelRatio(1),dl(),_p(),x=ja,ts(),h.background=new je(16777215),ze.setInk("plate"),Ai(M),_p(),Ry(),ze.update(),z.render(h,B,De,Ep,{quality:"high"});let{png:rn,pdf:pn}=await yy(n),Is=`${Ay()}_${String(M.id||"scene")}`;return{png:rn,pdf:pn,stem:Is}}finally{n.style.width=fe,n.style.height=Ve,I.setPixelRatio(O),x=L,h.background=F,ze.setInk("viewer"),ze.setVisible(wt),Be&&D?.setDetent(Be),dl(),ts(),M&&Ai(M),ot&&hi?.setActive(!0),H=!1,ml=!1,Cr(),Pr(),requestAnimationFrame(xl)}}window.blueprintCaptureDrawing=async()=>{let M=await vp();return M?{png:M.png,pdf:M.pdf,stem:M.stem}:null},window.blueprintSetView=(M={})=>{if(!De||!M)return!1;let L=M.projection==="ortho"?"ortho":"perspective",F=Number.isFinite(Number(M.hFovDeg))?Number(M.hFovDeg):V;return L==="perspective"&&Y==="ortho"&&Ne(F),L==="perspective"&&Pe(F,{reframe:!1}),Et(()=>{Re=!0;let O=new P(0,1,0);if(Array.isArray(M.up)&&M.up.length>=3&&(O.set(Number(M.up[0])||0,Number(M.up[1])||0,Number(M.up[2])||0),O.lengthSq()>1e-12?O.normalize():O.set(0,1,0)),K.up.copy(O),ae.up.copy(O),B.up.copy(O),Array.isArray(M.target)&&ee.target.set(Number(M.target[0])||0,Number(M.target[1])||0,Number(M.target[2])||0),Array.isArray(M.position)&&B.position.set(Number(M.position[0])||0,Number(M.position[1])||0,Number(M.position[2])||0),B.lookAt(ee.target),L==="ortho"){let fe=B.position.distanceTo(ee.target),Ve=X(F,S());de(fe,Ve),be=1,Y!=="ortho"&&(ce(ae),Y="ortho"),U(),Ae()}C(),ut(),ee.update(),Re=!1}),dn=!0,!0},Ps&&Ps.addEventListener("click",()=>{Rr=!Rr,ze.setVisible(Rr),Pr()}),Ar&&Ar.addEventListener("click",()=>{(async()=>{let M=await vp();M&&(mp(M.png,`${M.stem}.png`),mp(M.pdf,`${M.stem}.pdf`))})()});let hi=null;h&&(hi=Xx({scene:h,canvas:n,getCamera:()=>B,controls:ee,getRoot:()=>De,getClipPlanes:()=>Ri(),onLiveLength:M=>{_n&&(M?(_n.textContent=M,_n.classList.add("is-live")):(_n.textContent=pl(),_n.classList.remove("is-live")))},onActiveChange:M=>{dn=!0,_n&&(_n.classList.toggle("is-active",M),_n.setAttribute("aria-pressed",M?"true":"false"),M||(_n.textContent=pl(),_n.classList.remove("is-live")))}})),_n&&_n.addEventListener("click",()=>{hi&&hi.setActive(!hi.isActive())}),pe=()=>!!hi?.isActive();function bp(){if(!De)return null;De.updateWorldMatrix(!0,!0);let M=dt().map(fe=>St(fe)),L=new zt;if(L.name="ARContent",De.traverse(fe=>{if(!fe.isMesh||!fe.visible||On(fe))return;let Ve=yx(fe,M);Ve&&L.add(Ve)}),!L.children.length)return null;L.updateMatrixWorld(!0);let F=$d(L),O=new zt;return O.name="ARExport",O.add(L),Sx(L,F),O.userData.arPlacement=F,O}async function Mp(){if(zo||!De)return;zo=!0;let M=Wn?.textContent||"AR";Wn&&(Wn.disabled=!0,Wn.textContent="\u2026");try{let L=bp();if(!L)throw new Error("Nothing visible to export. Show at least one part.");let O=await new Cu().parseAsync(L,{quickLookCompatible:!0,includeAnchoringProperties:!0,ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}}}),fe=new Blob([O],{type:"model/vnd.usdz+zip"}),Ve=URL.createObjectURL(fe),Be=document.createElement("a");Be.rel="ar",Be.href=Ve,Be.download="view.usdz";let ot=document.createElement("img");ot.alt="AR",Be.appendChild(ot),document.body.appendChild(Be),Be.click(),Be.remove(),setTimeout(()=>URL.revokeObjectURL(Ve),6e4)}catch(L){Te(String(L?.message||L))}finally{zo=!1,Wn&&(Wn.disabled=!1,Wn.textContent=M)}}Wn&&Wn.addEventListener("click",()=>{Mp()});let Sp={scene:h,get camera(){return B},controls:ee,parts:m,partOpacity:g,cuts:J,scenes:i,setPartOpacity:Qi,setCameraPreset:Ti,applyScene:Ai,setHFov:Pe,toggleFovIso:Le,get projection(){return Y},get hFovDeg(){return V},setCutT:jt,removeCut:Qe,frameIso:Zt,openArQuickLook:Mp,buildArExportScene:bp,getPeelQuality:()=>Ho};window.BlueprintsViewer=Sp;function Ep(){for(let M of g.values())if(M<1-1e-4)return!0;return!1}function wp(){for(let[M,L]of m){let F=g.get(M)??1;ws(L,F,{edgeMode:x})}}let Tp=!1,dn=!0,ss=null,ch=ay(o),uh=new _i,hh=new Ye,fh=oy({index:o,visibility:ch,t:Yt,openSheet(){let M=window.matchMedia("(min-width: 768px)").matches;D?.setDetent(M?"open":"partial")},onFrame:(M,L)=>{L?.move?Uy(M):Oy(M)},onVisibility:()=>By(),actionsFor:()=>[]});function Ap(M){let L=M;for(;L;){let F=L.userData?.bpElementKey||Ji(L.name||"").element;if(F){for(let O of Object.values(o.elements))if(O.id===F)return O}L=L.parent}return null}function Rp(M){return M?a.get(M)||[]:[]}function ko(M){if(!M)return[];let L=Rp(M.id);if(L.length)return L;let F=[];for(let O of Er(o,M.globalId)){let fe=o.elements[O];fe&&fe!==M&&F.push(...Rp(fe.id))}return F}function Cy(M){let L=new Vt,F=new P;for(let O of M){let fe=O.geometry;if(!fe)continue;fe.boundingBox||fe.computeBoundingBox();let Ve=fe.boundingBox;if(Ve){O.updateWorldMatrix(!0,!1);for(let Be of[Ve.min.x,Ve.max.x])for(let ot of[Ve.min.y,Ve.max.y])for(let wt of[Ve.min.z,Ve.max.z])F.set(Be,ot,wt).applyMatrix4(O.matrixWorld),L.expandByPoint(F)}}return L}let Py=480,Pi=null;function Iy(M){let L=Math.min(1,Math.max(0,M));return L<.5?4*L*L*L:1-(-2*L+2)**3/2}function Ly(M){let L=M.getSize(A),F=Math.max(L.x,L.y,L.z,.2),O=M.getCenter(new P),fe=B.position.clone().sub(ee.target);fe.lengthSq()<1e-8?fe.set(.75,.55,.75):fe.normalize();let Ve;if(B.isOrthographicCamera)Ve=Math.max(B.position.distanceTo(ee.target),F*1.4);else{let Be=(B.fov||45)*Math.PI/180;Ve=Math.max(F*.62/Math.max(Math.tan(Be/2),.001),F*1.25)}return{center:O,position:O.clone().addScaledVector(fe,Ve),span:F}}function Dy(M){Pi={t0:performance.now(),fromPos:B.position.clone(),toPos:M.position,fromTarget:ee.target.clone(),toTarget:M.center,span:M.span},dn=!0}function Ny(M){if(!Pi)return;let L=Math.min(1,(M-Pi.t0)/Py),F=Iy(L);B.position.lerpVectors(Pi.fromPos,Pi.toPos,F),ee.target.lerpVectors(Pi.fromTarget,Pi.toTarget,F),B.isOrthographicCamera&&_e(Pi.span*.62,Pi.span*.62),$=!0,ee.update(),C(),ut(),dn=!0,L>=1&&(Pi=null,requestAnimationFrame(()=>{$=!1}))}function Oy(M){let L=ko(o.elements[M]);L.length&&Cp(L),dn=!0}function Uy(M){let L=o.elements[M],F=ko(L);if(!F.length)return;let O=Cy(F);O.isEmpty()||(Dy(Ly(O)),Cp(F),dn=!0)}function Cp(M){ss&&Pp();let L=[];for(let F of M){if(!F.isMesh||!F.material)continue;let O=Array.isArray(F.material)?F.material:[F.material],fe=O.map(Ve=>{let Be=Ve.clone();return Be.emissive?(Be.emissive.setHex(16756768),Be.emissiveIntensity=0):Be.color&&(Be.userData.bpPulseBase=Be.color.getHex()),L.push(Be),Be});F.userData.bpPulseMaterial=O,F.material=fe.length===1?fe[0]:fe}ss={meshes:M,clones:L,t0:performance.now()}}function Pp(){if(ss){for(let M of ss.meshes){let L=M.userData.bpPulseMaterial;L&&(M.material=L.length===1?L[0]:L),delete M.userData.bpPulseMaterial}for(let M of ss.clones)M.dispose?.();ss=null}}function Fy(M){if(!ss)return;let L=(M-ss.t0)/900;if(L>=1){Pp(),dn=!0;return}let F=Math.sin(Math.min(L,1)*Math.PI);for(let O of ss.clones)O.emissive?O.emissiveIntensity=.85*F:O.color&&O.userData.bpPulseBase!=null&&O.color.setHex(O.userData.bpPulseBase).offsetHSL(.08,.2,.18*F);dn=!0}function By(){let M=new Set;for(let L of Object.values(o.elements))ch.isHidden(L.globalId)&&L.id&&M.add(L.id);for(let[L,F]of a){let O=M.has(L);for(let fe of F){fe.userData.bpIfcHidden=O;for(let Ve of fe.children||[])(Ve?.userData?.isEdgeOverlay||Ve?.userData?.isSectionCap)&&(Ve.visible=!O)}}for(let L of Se.bindings){let F=Ji(L.host?.name||"").element,O=!!(F&&M.has(F));L.host&&(L.host.userData.bpIfcHidden=O)}for(let[L,F]of m)ws(F,g.get(L)??1,{edgeMode:x});dn=!0}function zy(M,L){let O=(Array.isArray(M.material)?M.material:[M.material]).map(fe=>{if(!fe)return fe;if(fe.userData.bpOwned)return L(fe);let Ve=fe.clone();return Ve.userData.bpOwned=!0,L(Ve)});M.material=O.length===1?O[0]:O}function ky(M){let L=!$e.get(M.globalId);$e.set(M.globalId,L);for(let F of ko(M))zy(F,O=>(O.emissive?(O.emissive.setHex(L?16773570:0),O.emissiveIntensity=L?.9:0):O.color&&(O.userData.bpLightBase==null&&(O.userData.bpLightBase=O.color.getHex()),O.color.setHex(L?16774079:O.userData.bpLightBase)),O));dn=!0}function Hy(M){for(let L of ko(M)){if(L.userData.bpPressing)continue;L.userData.bpPressing=!0;let F=L.position.y;L.position.y=F-.004,window.setTimeout(()=>{L.position.y=F,L.userData.bpPressing=!1,dn=!0},160)}dn=!0}function Vy(M){let L=!Oe.get(M.globalId);Oe.set(M.globalId,L);for(let F of ko(M)){F.userData.bpSlideOrigin||(F.userData.bpSlideOrigin=F.position.clone());let O=F.geometry;O&&!O.boundingBox&&O.computeBoundingBox();let fe=O?.boundingBox?O.boundingBox.max.x-O.boundingBox.min.x:.4;F.position.copy(F.userData.bpSlideOrigin),L&&(F.position.x+=fe*.8)}dn=!0}function Gy(M){if(pe())return;let L=B;if(!L||!De)return;let F=n.getBoundingClientRect(),O=F.width||n.clientWidth||1,fe=F.height||n.clientHeight||1;hh.x=(M.clientX-F.left)/O*2-1,hh.y=-((M.clientY-F.top)/fe)*2+1,uh.setFromCamera(hh,L);let Ve=uh.intersectObject(De,!0).filter(pn=>nl(pn.object)),Be=Ve[0];if(!Be){fh.closePopover();return}let ot=Ap(Be.object),wt=Be.object.userData?.bpPart||Ji(Be.object.name||"").part,rn=Se.taps.actionsFor(Ve,{raycaster:uh,now:performance.now()},pn=>nl(pn.object));fh.openPopover(ot,wt,rn,M.clientX,M.clientY)}l=Gy,Kd(()=>fh.refresh());let Ip=null,Lp=null,Ho="fast",Dp=null,gl=!1;n.addEventListener("pointermove",()=>{hi?.isActive()&&(dn=!0)}),n.addEventListener("pointerup",()=>{hi?.isActive()&&(dn=!0)});function Wy(){let M=B.view;return[B.position.x,B.position.y,B.position.z,B.quaternion.x,B.quaternion.y,B.quaternion.z,B.quaternion.w,B.zoom,B.near,B.far,B.fov||0,B.left,B.right,B.top,B.bottom,ee.target.x,ee.target.y,ee.target.z,n.width,n.height,M&&M.enabled?1:0,M?M.offsetX:0,M?M.offsetY:0,M?M.fullWidth:0,M?M.fullHeight:0,Y==="ortho"?1:0]}function Xy(){let M=Wy(),L=Ip,F=!L||L.length!==M.length;if(!F&&L){for(let O=0;O<M.length;O++)if(M[O]!==L[O]){F=!0;break}}return F&&(Ip=M),F}function qy(){let M=[p,x,Gu(),Rr?"1":"0",String(f)],L=h?.background;L&&L.isColor&&M.push(L.getHexString());for(let[O,fe]of g)M.push(O,Number(fe).toFixed(3));for(let O of J)M.push(String(O.id),O.locked?"1":"0",Number(O.t).toFixed(4));let F=ch.hiddenIds();return M.push(F.length?F.slice().sort().join(","):"-"),M.join("|")}function xl(){if(H)return;let M=performance.now();Se.step(M)&&(dn=!0),Fy(M),Ny(M),Sy(M),ee.update(),De&&ut(),Qt||(ui.copy(B.position),_t.copy(ee.target),Qt=!0);let L=B.position.distanceToSquared(ui)>1e-8||ee.target.distanceToSquared(_t)>1e-8;ui.copy(B.position),_t.copy(ee.target);let F=qy(),O=F!==Lp,fe=Xy();if(O&&(gl=!0),Ho=!Vn&&!L&&!O&&!me&&!er&&!gl?"high":"fast",!dn&&!O&&!fe&&!(Ho!==Dp)&&!gl){requestAnimationFrame(xl);return}dn=!1,Lp=F,Dp=Ho,O||(gl=!1),hi?.update(),ze.update();let ot=z.render(h,B,De,Ep,{quality:Ho,batchKey:F,deferPrime:O||me});Tp&&!ot&&wp(),Tp=ot,requestAnimationFrame(xl)}return xl(),Sp}return e_(_A);})();
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
