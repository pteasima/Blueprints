var BlueprintsViewerBundle=(()=>{var Uh=Object.defineProperty;var Z_=Object.getOwnPropertyDescriptor;var K_=Object.getOwnPropertyNames;var J_=Object.prototype.hasOwnProperty;var j_=(n,e)=>{for(var t in e)Uh(n,t,{get:e[t],enumerable:!0})},Q_=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of K_(e))!J_.call(n,s)&&s!==t&&Uh(n,s,{get:()=>e[s],enumerable:!(i=Z_(e,s))||i.enumerable});return n};var ev=n=>Q_(Uh({},"__esModule",{value:!0}),n);var TR={};j_(TR,{mountViewer:()=>wR});var Ks={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Js={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sg=0,Ef=1,rg=2;var Ha=1,og=2,To=3,ti=0,Mn=1,Lt=2,ci=0,Xi=1,wf=2,Tf=3,Af=4,kc=5;var Ti=100,ag=101,lg=102,cg=103,ug=104,Va=200,js=201,hg=202,fg=203,Ga=204,Ao=205,dg=206,Wa=207,pg=208,mg=209,gg=210,xg=211,yg=212,_g=213,vg=214,mc=0,gc=1,xc=2,uo=3,yc=4,_c=5,vc=6,bc=7,zc=0,bg=1,Mg=2,ui=0,Rf=1,Cf=2,Pf=3,Ro=4,If=5,Lf=6,Df=7,hf="attached",Sg="detached",Nf=300,_r=301,Co=302,Hc=303,Vc=304,Si=1e3,oi=1001,ho=1002,Xt=1003,Gc=1004;var vr=1005;var qt=1006,Po=1007;var hi=1008;var Dn=1009,Of=1010,Uf=1011,Io=1012,Wc=1013,Ai=1014,Vn=1015,Yn=1016,Xc=1017,qc=1018,br=1020,Ff=35902,Bf=35899,kf=1021,zf=1022,Sn=1023,xs=1026,As=1027,$c=1028,Yc=1029,Qs=1030,Zc=1031;var Kc=1033,Xa=33776,qa=33777,$a=33778,Ya=33779,Jc=35840,jc=35841,Qc=35842,eu=35843,tu=36196,nu=37492,iu=37496,su=37488,ru=37489,Za=37490,ou=37491,au=37808,lu=37809,cu=37810,uu=37811,hu=37812,fu=37813,du=37814,pu=37815,mu=37816,gu=37817,xu=37818,yu=37819,_u=37820,vu=37821,bu=36492,Mu=36494,Su=36495,Eu=36283,wu=36284,Ka=36285,Tu=36286;var dr=2300,pr=2301,dc=2302,ff=2303,df=2400,pf=2401,mf=2402,Eg=2500;var Hf=0,Ja=1,Lo=2,wg=3200;var ja=0,Tg=1,Ri="",Tt="srgb",zn="srgb-linear",da="linear",It="srgb";var pc=7680;var Ag=519,Rg=512,Cg=513,Pg=514,Vf=515,Ig=516,Lg=517,Gf=518,Wf=519,Xf=35044;var qf="300 es",ai=2e3,fo=2001;function tv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function nv(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function po(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Dg(){let n=po("canvas");return n.style.display="block",n}var fm={},mo=null;function pa(...n){let e="THREE."+n.shift();mo?mo("log",e,...n):console.log(e,...n)}function Ng(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function it(...n){n=Ng(n);let e="THREE."+n.shift();if(mo)mo("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function lt(...n){n=Ng(n);let e="THREE."+n.shift();if(mo)mo("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function fr(...n){let e=n.join(" ");e in fm||(fm[e]=!0,it(...n))}function Og(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Ug={[mc]:mc,[xc]:vc,[yc]:yc,[uo]:_c,[gc]:gc,[vc]:xc,[bc]:bc,[_c]:uo},Ei=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dm=1234567,lo=Math.PI/180,mr=180/Math.PI;function qi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rn[n&255]+Rn[n>>8&255]+Rn[n>>16&255]+Rn[n>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]).toLowerCase()}function ht(n,e,t){return Math.max(e,Math.min(t,n))}function $f(n,e){return(n%e+e)%e}function iv(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function sv(n,e,t){return n!==e?(t-n)/(e-n):0}function fa(n,e,t){return(1-t)*n+t*e}function rv(n,e,t,i){return fa(n,e,1-Math.exp(-t*i))}function ov(n,e=1){return e-Math.abs($f(n,e*2)-e)}function av(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function lv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function cv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function uv(n,e){return n+Math.random()*(e-n)}function hv(n){return n*(.5-Math.random())}function fv(n){n!==void 0&&(dm=n);let e=dm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dv(n){return n*lo}function pv(n){return n*mr}function mv(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function gv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Yf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function xv(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),m=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*m,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*m,a*c);break;case"ZYZ":n.set(l*m,l*d,a*u,a*c);break;default:it("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Au(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Zf(n,e){if(e.constructor===Float32Array)return n;let t=Au(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Kf(n,e){if(e.constructor===Float32Array)return n;let t=Au(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var er={DEG2RAD:lo,RAD2DEG:mr,generateUUID:qi,clamp:ht,euclideanModulo:$f,mapLinear:iv,inverseLerp:sv,lerp:fa,damp:rv,pingpong:ov,smoothstep:av,smootherstep:lv,randInt:cv,randFloat:uv,randFloatSpread:hv,seededRandom:fv,degToRad:dv,radToDeg:pv,isPowerOfTwo:mv,ceilPowerOfTwo:gv,floorPowerOfTwo:Yf,setQuaternionFromProperEuler:xv,normalize:Kf,denormalize:Zf},$e=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Kt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(h!==x||l!==f||c!==d||u!==m){let p=l*f+c*d+u*m+h*x;p<0&&(f=-f,d=-d,m=-m,x=-x,p=-p);let g=1-a;if(p<.9995){let b=Math.acos(p),T=Math.sin(b);g=Math.sin(g*b)/T,a=Math.sin(a*b)/T,l=l*g+f*a,c=c*g+d*a,u=u*g+m*a,h=h*g+x*a}else{l=l*g+f*a,c=c*g+d*a,u=u*g+m*a,h=h*g+x*a;let b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+u*h+l*d-c*f,e[t+1]=l*m+u*f+c*h-a*d,e[t+2]=c*m+u*d+a*f-l*h,e[t+3]=u*m-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){let d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fh.copy(this).projectOnVector(e),this.sub(Fh)}reflect(e){return this.sub(Fh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Fh=new I,pm=new Kt,ut=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],m=i[8],x=s[0],p=s[3],g=s[6],b=s[1],T=s[4],y=s[7],M=s[2],E=s[5],_=s[8];return r[0]=o*x+a*b+l*M,r[3]=o*p+a*T+l*E,r[6]=o*g+a*y+l*_,r[1]=c*x+u*b+h*M,r[4]=c*p+u*T+h*E,r[7]=c*g+u*y+h*_,r[2]=f*x+d*b+m*M,r[5]=f*p+d*T+m*E,r[8]=f*g+d*y+m*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,m=t*h+i*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=h*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return fr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bh.makeScale(e,t)),this}rotate(e){return fr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bh.makeRotation(-e)),this}translate(e,t){return fr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Bh=new ut,mm=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gm=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yv(){let n={enabled:!0,workingColorSpace:zn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===It&&(s.r=gs(s.r),s.g=gs(s.g),s.b=gs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===It&&(s.r=co(s.r),s.g=co(s.g),s.b=co(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ri?da:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[zn]:{primaries:e,whitePoint:i,transfer:da,toXYZ:mm,fromXYZ:gm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:i,transfer:It,toXYZ:mm,fromXYZ:gm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),n}var gt=yv();function gs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function co(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Vr,Mc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Vr===void 0&&(Vr=po("canvas")),Vr.width=e.width,Vr.height=e.height;let s=Vr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Vr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=po("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=gs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(gs(t[i]/255)*255):t[i]=gs(t[i]);return{data:t,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},_v=0,go=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=qi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(kh(s[o].image)):r.push(kh(s[o]))}else r=kh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function kh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Mc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}var vv=0,zh=new I,un=class n extends Ei{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=oi,s=oi,r=qt,o=hi,a=Sn,l=Dn,c=n.DEFAULT_ANISOTROPY,u=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vv++}),this.uuid=qi(),this.name="",this.source=new go(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(zh).x}get height(){return this.source.getSize(zh).y}get depth(){return this.source.getSize(zh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){it(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){it(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Si:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case ho:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Si:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case ho:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Nf;un.DEFAULT_ANISOTROPY=1;var St=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],x=l[2],p=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,y=(d+1)/2,M=(g+1)/2,E=(u+f)/4,_=(h+x)/4,w=(m+p)/4;return T>y&&T>M?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=E/i,r=_/i):y>M?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=E/s,r=w/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=_/r,s=w/r),this.set(i,s,r,t),this}let b=Math.sqrt((p-m)*(p-m)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(p-m)/b,this.y=(h-x)/b,this.z=(f-u)/b,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Sc=class extends Ei{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new un({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new go(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},rn=class extends Sc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ma=class extends un{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ec=class extends un{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var at=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,l,c,u,h,f,d,m,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,d,m,x,p)}set(e,t,i,s,r,o,a,l,c,u,h,f,d,m,x,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=f,g[3]=d,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Gr.setFromMatrixColumn(e,0).length(),r=1/Gr.setFromMatrixColumn(e,1).length(),o=1/Gr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,d=o*h,m=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+m*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,m=c*u,x=c*h;t[0]=f+x*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-m,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,m=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,m=a*u,x=a*h;t[0]=l*u,t[4]=m*c-d,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,m=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=m*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+m,t[10]=f-x*h}else if(e.order==="XZY"){let f=o*l,d=o*c,m=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bv,e,Mv)}lookAt(e,t,i){let s=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Bs.crossVectors(i,jn),Bs.lengthSq()===0&&(Math.abs(i.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Bs.crossVectors(i,jn)),Bs.normalize(),Ol.crossVectors(jn,Bs),s[0]=Bs.x,s[4]=Ol.x,s[8]=jn.x,s[1]=Bs.y,s[5]=Ol.y,s[9]=jn.y,s[2]=Bs.z,s[6]=Ol.z,s[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],m=i[2],x=i[6],p=i[10],g=i[14],b=i[3],T=i[7],y=i[11],M=i[15],E=s[0],_=s[4],w=s[8],D=s[12],L=s[1],k=s[5],X=s[9],z=s[13],N=s[2],W=s[6],j=s[10],q=s[14],_e=s[3],Z=s[7],V=s[11],ee=s[15];return r[0]=o*E+a*L+l*N+c*_e,r[4]=o*_+a*k+l*W+c*Z,r[8]=o*w+a*X+l*j+c*V,r[12]=o*D+a*z+l*q+c*ee,r[1]=u*E+h*L+f*N+d*_e,r[5]=u*_+h*k+f*W+d*Z,r[9]=u*w+h*X+f*j+d*V,r[13]=u*D+h*z+f*q+d*ee,r[2]=m*E+x*L+p*N+g*_e,r[6]=m*_+x*k+p*W+g*Z,r[10]=m*w+x*X+p*j+g*V,r[14]=m*D+x*z+p*q+g*ee,r[3]=b*E+T*L+y*N+M*_e,r[7]=b*_+T*k+y*W+M*Z,r[11]=b*w+T*X+y*j+M*V,r[15]=b*D+T*z+y*q+M*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],x=e[7],p=e[11],g=e[15],b=l*d-c*f,T=a*d-c*h,y=a*f-l*h,M=o*d-c*u,E=o*f-l*u,_=o*h-a*u;return t*(x*b-p*T+g*y)-i*(m*b-p*M+g*E)+s*(m*T-x*M+g*_)-r*(m*y-x*E+p*_)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],x=e[13],p=e[14],g=e[15],b=t*a-i*o,T=t*l-s*o,y=t*c-r*o,M=i*l-s*a,E=i*c-r*a,_=s*c-r*l,w=u*x-h*m,D=u*p-f*m,L=u*g-d*m,k=h*p-f*x,X=h*g-d*x,z=f*g-d*p,N=b*z-T*X+y*k+M*L-E*D+_*w;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/N;return e[0]=(a*z-l*X+c*k)*W,e[1]=(s*X-i*z-r*k)*W,e[2]=(x*_-p*E+g*M)*W,e[3]=(f*E-h*_-d*M)*W,e[4]=(l*L-o*z-c*D)*W,e[5]=(t*z-s*L+r*D)*W,e[6]=(p*y-m*_-g*T)*W,e[7]=(u*_-f*y+d*T)*W,e[8]=(o*X-a*L+c*w)*W,e[9]=(i*L-t*X-r*w)*W,e[10]=(m*E-x*y+g*b)*W,e[11]=(h*y-u*E-d*b)*W,e[12]=(a*D-o*k-l*w)*W,e[13]=(t*k-i*D+s*w)*W,e[14]=(x*T-m*M-p*b)*W,e[15]=(u*M-h*T+f*b)*W,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,m=r*h,x=o*u,p=o*h,g=a*h,b=l*c,T=l*u,y=l*h,M=i.x,E=i.y,_=i.z;return s[0]=(1-(x+g))*M,s[1]=(d+y)*M,s[2]=(m-T)*M,s[3]=0,s[4]=(d-y)*E,s[5]=(1-(f+g))*E,s[6]=(p+b)*E,s[7]=0,s[8]=(m+T)*_,s[9]=(p-b)*_,s[10]=(1-(f+x))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Gr.set(s[0],s[1],s[2]).length(),a=Gr.set(s[4],s[5],s[6]).length(),l=Gr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),vi.copy(this);let c=1/o,u=1/a,h=1/l;return vi.elements[0]*=c,vi.elements[1]*=c,vi.elements[2]*=c,vi.elements[4]*=u,vi.elements[5]*=u,vi.elements[6]*=u,vi.elements[8]*=h,vi.elements[9]*=h,vi.elements[10]*=h,t.setFromRotationMatrix(vi),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=ai,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s),m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===ai)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===fo)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ai,l=!1){let c=this.elements,u=2/(t-e),h=2/(i-s),f=-(t+e)/(t-e),d=-(i+s)/(i-s),m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===ai)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===fo)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Gr=new I,vi=new at,bv=new I(0,0,0),Mv=new I(1,1,1),Bs=new I,Ol=new I,jn=new I,xm=new at,ym=new Kt,ki=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return xm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ym.setFromEuler(this),this.setFromQuaternion(ym,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ki.DEFAULT_ORDER="XYZ";var xo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Sv=0,_m=new I,Wr=new Kt,us=new at,Ul=new I,ea=new I,Ev=new I,wv=new Kt,vm=new I(1,0,0),bm=new I(0,1,0),Mm=new I(0,0,1),Sm={type:"added"},Tv={type:"removed"},Xr={type:"childadded",child:null},Hh={type:"childremoved",child:null},Vt=class n extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new ki,i=new Kt,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new ut}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wr.setFromAxisAngle(e,t),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(e,t){return Wr.setFromAxisAngle(e,t),this.quaternion.premultiply(Wr),this}rotateX(e){return this.rotateOnAxis(vm,e)}rotateY(e){return this.rotateOnAxis(bm,e)}rotateZ(e){return this.rotateOnAxis(Mm,e)}translateOnAxis(e,t){return _m.copy(e).applyQuaternion(this.quaternion),this.position.add(_m.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vm,e)}translateY(e){return this.translateOnAxis(bm,e)}translateZ(e){return this.translateOnAxis(Mm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(us.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ul.copy(e):Ul.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?us.lookAt(ea,Ul,this.up):us.lookAt(Ul,ea,this.up),this.quaternion.setFromRotationMatrix(us),s&&(us.extractRotation(s.matrixWorld),Wr.setFromRotationMatrix(us),this.quaternion.premultiply(Wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sm),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null):lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tv),Hh.child=e,this.dispatchEvent(Hh),Hh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),us.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),us.multiply(e.parent.matrixWorld)),e.applyMatrix4(us),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sm),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,e,Ev),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,wv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Vt.DEFAULT_UP=new I(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zt=class extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Av={type:"move"},yo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,i),g=this._getHandJoint(c,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Av)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new zt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Fg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ks={h:0,s:0,l:0},Fl={h:0,s:0,l:0};function Vh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ke=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=gt.workingColorSpace){return this.r=e,this.g=t,this.b=i,gt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=gt.workingColorSpace){if(e=$f(e,1),t=ht(t,0,1),i=ht(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Vh(o,r,e+1/3),this.g=Vh(o,r,e),this.b=Vh(o,r,e-1/3)}return gt.colorSpaceToWorking(this,s),this}setStyle(e,t=Tt){function i(r){r!==void 0&&parseFloat(r)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:it("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let i=Fg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gs(e.r),this.g=gs(e.g),this.b=gs(e.b),this}copyLinearToSRGB(e){return this.r=co(e.r),this.g=co(e.g),this.b=co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return gt.workingToColorSpace(Cn.copy(this),e),Math.round(ht(Cn.r*255,0,255))*65536+Math.round(ht(Cn.g*255,0,255))*256+Math.round(ht(Cn.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(Cn.copy(this),t);let i=Cn.r,s=Cn.g,r=Cn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=Tt){gt.workingToColorSpace(Cn.copy(this),e);let t=Cn.r,i=Cn.g,s=Cn.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ks),this.setHSL(ks.h+e,ks.s+t,ks.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ks),e.getHSL(Fl);let i=fa(ks.h,Fl.h,t),s=fa(ks.s,Fl.s,t),r=fa(ks.l,Fl.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Cn=new Ke;Ke.NAMES=Fg;var Hn=class extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},bi=new I,hs=new I,Gh=new I,fs=new I,qr=new I,$r=new I,Em=new I,Wh=new I,Xh=new I,qh=new I,$h=new St,Yh=new St,Zh=new St,Fi=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),bi.subVectors(e,t),s.cross(bi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){bi.subVectors(s,t),hs.subVectors(i,t),Gh.subVectors(e,t);let o=bi.dot(bi),a=bi.dot(hs),l=bi.dot(Gh),c=hs.dot(hs),u=hs.dot(Gh),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,m=(o*u-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,fs)===null?!1:fs.x>=0&&fs.y>=0&&fs.x+fs.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,fs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fs.x),l.addScaledVector(o,fs.y),l.addScaledVector(a,fs.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return $h.setScalar(0),Yh.setScalar(0),Zh.setScalar(0),$h.fromBufferAttribute(e,t),Yh.fromBufferAttribute(e,i),Zh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector($h,r.x),o.addScaledVector(Yh,r.y),o.addScaledVector(Zh,r.z),o}static isFrontFacing(e,t,i,s){return bi.subVectors(i,t),hs.subVectors(e,t),bi.cross(hs).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),hs.subVectors(this.a,this.b),bi.cross(hs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;qr.subVectors(s,i),$r.subVectors(r,i),Wh.subVectors(e,i);let l=qr.dot(Wh),c=$r.dot(Wh);if(l<=0&&c<=0)return t.copy(i);Xh.subVectors(e,s);let u=qr.dot(Xh),h=$r.dot(Xh);if(u>=0&&h<=u)return t.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(i).addScaledVector(qr,o);qh.subVectors(e,r);let d=qr.dot(qh),m=$r.dot(qh);if(m>=0&&d<=m)return t.copy(r);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector($r,a);let p=u*m-d*h;if(p<=0&&h-u>=0&&d-m>=0)return Em.subVectors(r,s),a=(h-u)/(h-u+(d-m)),t.copy(s).addScaledVector(Em,a);let g=1/(p+x+f);return o=x*g,a=f*g,t.copy(i).addScaledVector(qr,o).addScaledVector($r,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Gt=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Mi):Mi.fromBufferAttribute(r,o),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Bl.copy(i.boundingBox)),Bl.applyMatrix4(e.matrixWorld),this.union(Bl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ta),kl.subVectors(this.max,ta),Yr.subVectors(e.a,ta),Zr.subVectors(e.b,ta),Kr.subVectors(e.c,ta),zs.subVectors(Zr,Yr),Hs.subVectors(Kr,Zr),lr.subVectors(Yr,Kr);let t=[0,-zs.z,zs.y,0,-Hs.z,Hs.y,0,-lr.z,lr.y,zs.z,0,-zs.x,Hs.z,0,-Hs.x,lr.z,0,-lr.x,-zs.y,zs.x,0,-Hs.y,Hs.x,0,-lr.y,lr.x,0];return!Kh(t,Yr,Zr,Kr,kl)||(t=[1,0,0,0,1,0,0,0,1],!Kh(t,Yr,Zr,Kr,kl))?!1:(zl.crossVectors(zs,Hs),t=[zl.x,zl.y,zl.z],Kh(t,Yr,Zr,Kr,kl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ds[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ds[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ds[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ds[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ds[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ds[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ds[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ds[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ds),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ds=[new I,new I,new I,new I,new I,new I,new I,new I],Mi=new I,Bl=new Gt,Yr=new I,Zr=new I,Kr=new I,zs=new I,Hs=new I,lr=new I,ta=new I,kl=new I,zl=new I,cr=new I;function Kh(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){cr.fromArray(n,r);let a=s.x*Math.abs(cr.x)+s.y*Math.abs(cr.y)+s.z*Math.abs(cr.z),l=e.dot(cr),c=t.dot(cr),u=i.dot(cr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var sn=new I,Hl=new $e,Rv=0,Ft=class extends Ei{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Xf,this.updateRanges=[],this.gpuType=Vn,this.version=0,this._normalizationScale=e!==void 0?Au(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Hl.fromBufferAttribute(this,t),Hl.applyMatrix3(e),this.setXY(t,Hl.x,Hl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Zf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Kf(e,this.array)}};var ga=class extends Ft{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var xa=class extends Ft{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ht=class extends Ft{constructor(e,t,i){super(new Float32Array(e),t,i)}},Cv=new Gt,na=new I,Jh=new I,_n=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Cv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;na.subVectors(e,this.center);let t=na.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(na,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(na.copy(e.center).add(Jh)),this.expandByPoint(na.copy(e.center).sub(Jh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Pv=0,ri=new at,jh=new Vt,Jr=new I,Qn=new Gt,ia=new Gt,xn=new I,Ot=class n extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pv++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tv(e)?xa:ga)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ut().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,i){return ri.makeTranslation(e,t,i),this.applyMatrix4(ri),this}scale(e,t,i){return ri.makeScale(e,t,i),this.applyMatrix4(ri),this}lookAt(e){return jh.lookAt(e),jh.updateMatrix(),this.applyMatrix4(jh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jr).negate(),this.translate(Jr.x,Jr.y,Jr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ht(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Qn.setFromBufferAttribute(r),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ia.setFromBufferAttribute(a),this.morphTargetsRelative?(xn.addVectors(Qn.min,ia.min),Qn.expandByPoint(xn),xn.addVectors(Qn.max,ia.max),Qn.expandByPoint(xn)):(Qn.expandByPoint(ia.min),Qn.expandByPoint(ia.max))}Qn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)xn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(xn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)xn.fromBufferAttribute(a,c),l&&(Jr.fromBufferAttribute(e,c),xn.add(Jr)),s=Math.max(s,i.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ft(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let D=0;D<i.count;D++)a[D]=new I,l[D]=new I;let u=new I,h=new I,f=new I,d=new $e,m=new $e,x=new $e,p=new I,g=new I;function b(D,L,k){c[D]=c[L]=c[k]=1,u.fromBufferAttribute(i,D),h.fromBufferAttribute(i,L),f.fromBufferAttribute(i,k),d.fromBufferAttribute(r,D),m.fromBufferAttribute(r,L),x.fromBufferAttribute(r,k),h.sub(u),f.sub(u),m.sub(d),x.sub(d);let X=1/(m.x*x.y-x.x*m.y);isFinite(X)&&(p.copy(h).multiplyScalar(x.y).addScaledVector(f,-m.y).multiplyScalar(X),g.copy(f).multiplyScalar(m.x).addScaledVector(h,-x.x).multiplyScalar(X),a[D].add(p),a[L].add(p),a[k].add(p),l[D].add(g),l[L].add(g),l[k].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let D=0,L=T.length;D<L;++D){let k=T[D],X=k.start,z=k.count;for(let N=X,W=X+z;N<W;N+=3)b(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let y=new I,M=new I,E=new I,_=new I;function w(D){E.fromBufferAttribute(s,D),_.copy(E);let L=a[D];y.copy(L),y.sub(E.multiplyScalar(E.dot(L))).normalize(),M.crossVectors(_,L);let X=M.dot(l[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,X)}for(let D=0,L=i.count;D<L;++D)c[D]&&w(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,m=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let g=0;g<u;g++)f[m++]=c[d++]}return new Ft(f,u,h)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ws=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xf,this.updateRanges=[],this.version=0,this.uuid=qi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=wm(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=wm(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function wm(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=qi()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var kn=new I,Pn=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?Au(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)kn.fromBufferAttribute(this,t),kn.applyMatrix4(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kn.fromBufferAttribute(this,t),kn.applyNormalMatrix(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kn.fromBufferAttribute(this,t),kn.transformDirection(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){pa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){pa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Zf(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Kf(e,this.data.array)}},Qh=new I,Iv=new I,Lv=new ut,yn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Qh.subVectors(i,t).cross(Iv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Qh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Lv.getNormalMatrix(e),s=this.coplanarPoint(Qh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Dv=0,In=class extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=qi(),this.name="",this.type="Material",this.blending=Xi,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ga,this.blendDst=Ao,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ag,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pc,this.stencilZFail=pc,this.stencilZPass=pc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){it(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){it(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new yn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new $e().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $e().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},_o=class extends In{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},jr,sa=new I,Qr=new I,eo=new I,to=new $e,ra=new $e,Bg=new at,Vl=new I,oa=new I,Gl=new I,Tm=new $e,ef=new $e,Am=new $e,ya=class extends Vt{constructor(e=new _o){if(super(),this.isSprite=!0,this.type="Sprite",jr===void 0){jr=new Ot;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ws(t,5);jr.setIndex([0,1,2,0,2,3]),jr.setAttribute("position",new Pn(i,3,0,!1)),jr.setAttribute("uv",new Pn(i,2,3,!1))}this.geometry=jr,this.material=e,this.center=new $e(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&lt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qr.setFromMatrixScale(this.matrixWorld),Bg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),eo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qr.multiplyScalar(-eo.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Wl(Vl.set(-.5,-.5,0),eo,o,Qr,s,r),Wl(oa.set(.5,-.5,0),eo,o,Qr,s,r),Wl(Gl.set(.5,.5,0),eo,o,Qr,s,r),Tm.set(0,0),ef.set(1,0),Am.set(1,1);let a=e.ray.intersectTriangle(Vl,oa,Gl,!1,sa);if(a===null&&(Wl(oa.set(-.5,.5,0),eo,o,Qr,s,r),ef.set(0,1),a=e.ray.intersectTriangle(Vl,Gl,oa,!1,sa),a===null))return;let l=e.ray.origin.distanceTo(sa);l<e.near||l>e.far||t.push({distance:l,point:sa.clone(),uv:Fi.getInterpolation(sa,Vl,oa,Gl,Tm,ef,Am,new $e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Wl(n,e,t,i,s,r){to.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(ra.x=r*to.x-s*to.y,ra.y=s*to.x+r*to.y):ra.copy(to),n.copy(e),n.x+=ra.x,n.y+=ra.y,n.applyMatrix4(Bg)}var ps=new I,tf=new I,Xl=new I,ql=new I,zi=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ps)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ps.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ps.copy(this.origin).addScaledVector(this.direction,t),ps.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){tf.copy(e).add(t).multiplyScalar(.5),Xl.copy(t).sub(e).normalize(),ql.copy(this.origin).sub(tf);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Xl),a=ql.dot(this.direction),l=-ql.dot(Xl),c=ql.lengthSq(),u=Math.abs(1-o*o),h,f,d,m;if(u>0)if(h=o*l-a,f=o*a-l,m=r*u,h>=0)if(f>=-m)if(f<=m){let x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(tf).addScaledVector(Xl,f),d}intersectSphere(e,t){if(e.radius<0)return null;ps.subVectors(e.center,this.origin);let i=ps.dot(this.direction),s=ps.dot(ps)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ps)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=e.x-o.x,f=e.y-o.y,d=e.z-o.z,m=t.x-o.x,x=t.y-o.y,p=t.z-o.z,g=i.x-o.x,b=i.y-o.y,T=i.z-o.z,y=Math.abs(l),M=Math.abs(c),E=Math.abs(u),_,w,D,L,k,X,z,N,W,j,q,_e;if(y>=M&&y>=E?(D=l,X=h,W=m,_e=g,l>=0?(_=c,w=u,L=f,k=d,z=x,N=p,j=b,q=T):(_=u,w=c,L=d,k=f,z=p,N=x,j=T,q=b)):M>=E?(D=c,X=f,W=x,_e=b,c>=0?(_=u,w=l,L=d,k=h,z=p,N=m,j=T,q=g):(_=l,w=u,L=h,k=d,z=m,N=p,j=g,q=T)):(D=u,X=d,W=p,_e=T,u>=0?(_=l,w=c,L=h,k=f,z=m,N=x,j=g,q=b):(_=c,w=l,L=f,k=h,z=x,N=m,j=b,q=g)),D===0)return null;let Z=_/D,V=w/D,ee=1/D,be=L-Z*X,Re=k-V*X,K=z-Z*W,ue=N-V*W,B=j-Z*_e,te=q-V*_e,ge=B*ue-te*K,Se=be*te-Re*B,qe=K*Re-ue*be;if(s){if(ge<0||Se<0||qe<0)return null}else if((ge<0||Se<0||qe<0)&&(ge>0||Se>0||qe>0))return null;let Ue=ge+Se+qe;if(Ue===0)return null;let Ye=ee*(ge*X+Se*W+qe*_e);return(Ue>0?Ye<0:Ye>0)?null:this.at(Ye/Ue,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},on=class extends In{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Rm=new at,ur=new zi,$l=new _n,Cm=new I,Yl=new I,Zl=new I,Kl=new I,nf=new I,Jl=new I,Pm=new I,jl=new I,dt=class extends Vt{constructor(e=new Ot,t=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Jl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(nf.fromBufferAttribute(h,e),o?Jl.addScaledVector(nf,u):Jl.addScaledVector(nf.sub(t),u))}t.add(Jl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$l.copy(i.boundingSphere),$l.applyMatrix4(r),ur.copy(e.ray).recast(e.near),!($l.containsPoint(ur.origin)===!1&&(ur.intersectSphere($l,Cm)===null||ur.origin.distanceToSquared(Cm)>(e.far-e.near)**2))&&(Rm.copy(r).invert(),ur.copy(e.ray).applyMatrix4(Rm),!(i.boundingBox!==null&&ur.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ur)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let p=f[m],g=o[p.materialIndex],b=Math.max(p.start,d.start),T=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let y=b,M=T;y<M;y+=3){let E=a.getX(y),_=a.getX(y+1),w=a.getX(y+2);s=Ql(this,g,e,i,c,u,h,E,_,w),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let p=m,g=x;p<g;p+=3){let b=a.getX(p),T=a.getX(p+1),y=a.getX(p+2);s=Ql(this,o,e,i,c,u,h,b,T,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let p=f[m],g=o[p.materialIndex],b=Math.max(p.start,d.start),T=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=b,M=T;y<M;y+=3){let E=y,_=y+1,w=y+2;s=Ql(this,g,e,i,c,u,h,E,_,w),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let p=m,g=x;p<g;p+=3){let b=p,T=p+1,y=p+2;s=Ql(this,o,e,i,c,u,h,b,T,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Nv(n,e,t,i,s,r,o,a){let l;if(e.side===Mn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ti,a),l===null)return null;jl.copy(a),jl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(jl);return c<t.near||c>t.far?null:{distance:c,point:jl.clone(),object:n}}function Ql(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Yl),n.getVertexPosition(l,Zl),n.getVertexPosition(c,Kl);let u=Nv(n,e,t,i,Yl,Zl,Kl,Pm);if(u){let h=new I;Fi.getBarycoord(Pm,Yl,Zl,Kl,h),s&&(u.uv=Fi.getInterpolatedAttribute(s,a,l,c,h,new $e)),r&&(u.uv1=Fi.getInterpolatedAttribute(r,a,l,c,h,new $e)),o&&(u.normal=Fi.getInterpolatedAttribute(o,a,l,c,h,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new I,materialIndex:0};Fi.getNormal(Yl,Zl,Kl,f.normal),u.face=f,u.barycoord=h}return u}var aa=new St,Im=new St,Lm=new St,Ov=new St,Dm=new at,ec=new I,sf=new _n,Nm=new at,rf=new zi,_a=class extends dt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=hf,this.bindMatrix=new at,this.bindMatrixInverse=new at,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Gt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ec),this.boundingBox.expandByPoint(ec)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _n),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ec),this.boundingSphere.expandByPoint(ec)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sf.copy(this.boundingSphere),sf.applyMatrix4(s),e.ray.intersectsSphere(sf)!==!1&&(Nm.copy(s).invert(),rf.copy(e.ray).applyMatrix4(Nm),!(this.boundingBox!==null&&rf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,rf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new St,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===hf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Sg?this.bindMatrixInverse.copy(this.bindMatrix).invert():it("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;Im.fromBufferAttribute(s.attributes.skinIndex,e),Lm.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(aa.copy(t),t.set(0,0,0,0)):(aa.set(t.x,t.y,t.z,1),t.set(0,0,0)),aa.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Lm.getComponent(r);if(o!==0){let a=Im.getComponent(r);Dm.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Ov.copy(aa).applyMatrix4(Dm),o)}}return t.isVector4&&(t.w=aa.w),t.applyMatrix4(this.bindMatrixInverse)}},vo=class extends Vt{constructor(){super(),this.isBone=!0,this.type="Bone"}},bo=class extends un{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Xt,u=Xt,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Om=new at,Uv=new at,va=class n{constructor(e=[],t=[]){this.uuid=qi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){it("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new at)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new at;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Uv;Om.multiplyMatrices(a,t[r]),Om.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new bo(t,e,e,Sn,Vn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(it("Skeleton: No bone found with UUID:",r),o=new vo),this.bones.push(o),this.boneInverses.push(new at().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}},ys=class extends Ft{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},no=new at,Um=new at,tc=[],Fm=new Gt,Fv=new at,la=new dt,ca=new _n,gr=class extends dt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ys(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Fv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,no),Fm.copy(e.boundingBox).applyMatrix4(no),this.boundingBox.union(Fm)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,no),ca.copy(e.boundingSphere).applyMatrix4(no),this.boundingSphere.union(ca)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(la.geometry=this.geometry,la.material=this.material,la.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ca.copy(this.boundingSphere),ca.applyMatrix4(i),e.ray.intersectsSphere(ca)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,no),Um.multiplyMatrices(i,no),la.matrixWorld=Um,la.raycast(e,tc);for(let o=0,a=tc.length;o<a;o++){let l=tc[o];l.instanceId=r,l.object=this,t.push(l)}tc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ys(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new bo(new Float32Array(s*this.count),s,this.count,$c,Vn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},hr=new _n,Bv=new $e(.5,.5),nc=new I,Xs=class{constructor(e=new yn,t=new yn,i=new yn,s=new yn,r=new yn,o=new yn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ai,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],m=r[8],x=r[9],p=r[10],g=r[11],b=r[12],T=r[13],y=r[14],M=r[15];if(s[0].setComponents(c-o,d-u,g-m,M-b).normalize(),s[1].setComponents(c+o,d+u,g+m,M+b).normalize(),s[2].setComponents(c+a,d+h,g+x,M+T).normalize(),s[3].setComponents(c-a,d-h,g-x,M-T).normalize(),i)s[4].setComponents(l,f,p,y).normalize(),s[5].setComponents(c-l,d-f,g-p,M-y).normalize();else if(s[4].setComponents(c-l,d-f,g-p,M-y).normalize(),t===ai)s[5].setComponents(c+l,d+f,g+p,M+y).normalize();else if(t===fo)s[5].setComponents(l,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){hr.center.set(0,0,0);let t=Bv.distanceTo(e.center);return hr.radius=.7071067811865476+t,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(nc.x=s.normal.x>0?e.max.x:e.min.x,nc.y=s.normal.y>0?e.max.y:e.min.y,nc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(nc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Bm=new at,wc=class n{constructor(){this.coordinateSystem=ai,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Bm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Xs),i[s].setFromProjectionMatrix(Bm,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Xs),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var _s=class extends In{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Tc=new I,Ac=new I,km=new at,ua=new zi,ic=new _n,of=new I,zm=new I,Hi=class extends Vt{constructor(e=new Ot,t=new _s){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Tc.fromBufferAttribute(t,s-1),Ac.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Tc.distanceTo(Ac);e.setAttribute("lineDistance",new Ht(i,1))}else it("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ic.copy(i.boundingSphere),ic.applyMatrix4(s),ic.radius+=r,e.ray.intersectsSphere(ic)===!1)return;km.copy(s).invert(),ua.copy(e.ray).applyMatrix4(km);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=d,p=m-1;x<p;x+=c){let g=u.getX(x),b=u.getX(x+1),T=sc(this,e,ua,l,g,b,x);T&&t.push(T)}if(this.isLineLoop){let x=u.getX(m-1),p=u.getX(d),g=sc(this,e,ua,l,x,p,m-1);g&&t.push(g)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=d,p=m-1;x<p;x+=c){let g=sc(this,e,ua,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=sc(this,e,ua,l,m-1,d,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function sc(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(Tc.fromBufferAttribute(a,s),Ac.fromBufferAttribute(a,r),t.distanceSqToSegment(Tc,Ac,of,zm)>i)return;of.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(of);if(!(c<e.near||c>e.far))return{distance:c,point:zm.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Hm=new I,Vm=new I,ba=class extends Hi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Hm.fromBufferAttribute(t,s),Vm.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Hm.distanceTo(Vm);e.setAttribute("lineDistance",new Ht(i,1))}else it("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ma=class extends Hi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Mo=class extends In{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Gm=new at,gf=new zi,rc=new _n,oc=new I,Sa=class extends Vt{constructor(e=new Ot,t=new Mo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rc.copy(i.boundingSphere),rc.applyMatrix4(s),rc.radius+=r,e.ray.intersectsSphere(rc)===!1)return;Gm.copy(s).invert(),gf.copy(e.ray).applyMatrix4(Gm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,x=d;m<x;m++){let p=c.getX(m);oc.fromBufferAttribute(h,p),Wm(oc,p,l,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=f,x=d;m<x;m++)oc.fromBufferAttribute(h,m),Wm(oc,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Wm(n,e,t,i,s,r,o){let a=gf.distanceSqToPoint(n);if(a<t){let l=new I;gf.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ea=class extends un{constructor(e=[],t=_r,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},vs=class extends un{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var bs=class extends un{constructor(e,t,i=Ai,s,r,o,a=Xt,l=Xt,c,u=xs,h=1){if(u!==xs&&u!==As)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new go(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},wa=class extends bs{constructor(e,t=Ai,i=_r,s,r,o=Xt,a=Xt,l,c=xs){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ta=class extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Vi=class n extends Ot{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;m("z","y","x",-1,-1,i,t,e,o,r,0),m("z","y","x",1,-1,i,t,-e,o,r,1),m("x","z","y",1,1,e,i,t,s,o,2),m("x","z","y",1,-1,e,i,-t,s,o,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(u,3)),this.setAttribute("uv",new Ht(h,2));function m(x,p,g,b,T,y,M,E,_,w,D){let L=y/_,k=M/w,X=y/2,z=M/2,N=E/2,W=_+1,j=w+1,q=0,_e=0,Z=new I;for(let V=0;V<j;V++){let ee=V*k-z;for(let be=0;be<W;be++){let Re=be*L-X;Z[x]=Re*b,Z[p]=ee*T,Z[g]=N,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[p]=0,Z[g]=E>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(be/_),h.push(1-V/w),q+=1}}for(let V=0;V<w;V++)for(let ee=0;ee<_;ee++){let be=f+ee+W*V,Re=f+ee+W*(V+1),K=f+(ee+1)+W*(V+1),ue=f+(ee+1)+W*V;l.push(be,Re,ue),l.push(Re,K,ue),_e+=6}a.addGroup(d,_e,D),d+=_e,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ac=new I,lc=new I,af=new I,cc=new Fi,Aa=class extends Ot{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(lo*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f=new Map,d=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:x,b:p,c:g}=cc;if(x.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),cc.getNormal(af),h[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,h[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,h[2]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let b=0;b<3;b++){let T=(b+1)%3,y=h[b],M=h[T],E=cc[u[b]],_=cc[u[T]],w=`${y}_${M}`,D=`${M}_${y}`,L=f.get(D);L?(af.dot(L.normal)<=r&&(d.push(E.x,E.y,E.z),d.push(_.x,_.y,_.z)),f.set(D,null)):f.has(w)||f.set(w,{index0:c[b],index1:c[T],normal:af.clone()})}}for(let m of f.values())if(m){let{index0:x,index1:p}=m;ac.fromBufferAttribute(a,x),lc.fromBufferAttribute(a,p),d.push(ac.x,ac.y,ac.z),d.push(lc.x,lc.y,lc.z)}this.setAttribute("position",new Ht(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var li=class n extends Ot{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],m=[],x=[],p=[];for(let g=0;g<u;g++){let b=g*f-o;for(let T=0;T<c;T++){let y=T*h-r;m.push(y,-b,0),x.push(0,0,1),p.push(T/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<a;b++){let T=b+c*g,y=b+c*(g+1),M=b+1+c*(g+1),E=b+1+c*g;d.push(T,y,E),d.push(y,M,E)}this.setIndex(d),this.setAttribute("position",new Ht(m,3)),this.setAttribute("normal",new Ht(x,3)),this.setAttribute("uv",new Ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ra=class n extends Ot{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new I,f=new I,d=[],m=[],x=[],p=[];for(let g=0;g<=i;g++){let b=[],T=g/i,y=o+T*a,M=e*Math.cos(y),E=Math.sqrt(e*e-M*M),_=0;g===0&&o===0?_=.5/t:g===i&&l===Math.PI&&(_=-.5/t);for(let w=0;w<=t;w++){let D=w/t,L=s+D*r;h.x=-E*Math.cos(L),h.y=M,h.z=E*Math.sin(L),m.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),p.push(D+_,1-T),b.push(c++)}u.push(b)}for(let g=0;g<i;g++)for(let b=0;b<t;b++){let T=u[g][b+1],y=u[g][b],M=u[g+1][b],E=u[g+1][b+1];(g!==0||o>0)&&d.push(T,y,E),(g!==i-1||l<Math.PI)&&d.push(y,M,E)}this.setIndex(d),this.setAttribute("position",new Ht(m,3)),this.setAttribute("normal",new Ht(x,3)),this.setAttribute("uv",new Ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ca=class extends Ot{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new I,r=new I;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let h=l[c],f=h.start,d=h.count;for(let m=f,x=f+d;m<x;m+=3)for(let p=0;p<3;p++){let g=a.getX(m+p),b=a.getX(m+(p+1)%3);s.fromBufferAttribute(o,g),r.fromBufferAttribute(o,b),Xm(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let u=3*a+c,h=3*a+(c+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),Xm(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ht(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Xm(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}function Mr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(qm(s))s.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(qm(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Nn(n){let e={};for(let t=0;t<n.length;t++){let i=Mr(n[t]);for(let s in i)e[s]=i[s]}return e}function qm(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function kv(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Jf(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}var Qa={clone:Mr,merge:Nn},zv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vn=class extends In{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zv,this.fragmentShader=Hv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mr(e.uniforms),this.uniformsGroups=kv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ke().setHex(s.value);break;case"v2":this.uniforms[i].value=new $e().fromArray(s.value);break;case"v3":this.uniforms[i].value=new I().fromArray(s.value);break;case"v4":this.uniforms[i].value=new St().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ut().fromArray(s.value);break;case"m4":this.uniforms[i].value=new at().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Rc=class extends vn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ln=class extends In{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ja,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},hn=class extends Ln{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $e(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return fr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){fr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Pa=class extends In{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ja,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=zc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Cc=class extends In{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Pc=class extends In{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Gs(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function ha(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function Vv(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function $m(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function Gv(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push(...o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var Gi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ic=class extends Gi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:df,endingEnd:df}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case pf:r=e,a=2*t-i;break;case mf:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case pf:o=e,l=2*i-t;break;case mf:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(i-t)/(s-t),x=m*m,p=x*m,g=-f*p+2*f*x-f*m,b=(1+f)*p+(-1.5-2*f)*x+(-.5+f)*m+1,T=(-1-d)*p+(1.5+d)*x+.5*m,y=d*p-d*x;for(let M=0;M!==a;++M)r[M]=g*o[u+M]+b*o[c+M]+T*o[l+M]+y*o[h+M];return r}},Lc=class extends Gi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},Dc=class extends Gi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Nc=class extends Gi{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let m=(i-t)/(s-t),x=1-m;for(let p=0;p!==a;++p)r[p]=o[c+p]*x+o[l+p]*m;return r}let f=a*2,d=e-1;for(let m=0;m!==a;++m){let x=o[c+m],p=o[l+m],g=d*f+m*2,b=h[g],T=h[g+1],y=e*f+m*2,M=u[y],E=u[y+1],_=Xv(i,t,b,M,s);r[m]=kg(_,x,T,E,p)}return r}};function kg(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Wv(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Xv(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=kg(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=Wv(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var $n=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Gs(t,this.TimeBufferType),this.values=Gs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Gs(e.times,Array),values:Gs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),ha(e.settings)&&(i.settings={inTangents:Gs(e.settings.inTangents,Array),outTangents:Gs(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Dc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Lc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ic(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Nc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case dr:t=this.InterpolantFactoryMethodDiscrete;break;case pr:t=this.InterpolantFactoryMethodLinear;break;case dc:t=this.InterpolantFactoryMethodSmooth;break;case ff:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return it("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return dr;case this.InterpolantFactoryMethodLinear:return pr;case this.InterpolantFactoryMethodSmooth:return dc;case this.InterpolantFactoryMethodBezier:return ff}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;ha(this.settings)&&(Ym(this.settings.inTangents,e),Ym(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;ha(this.settings)&&(Zm(this.settings.inTangents,e),Zm(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(lt("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(lt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){lt("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){lt("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&nv(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){lt("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===dc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*i,f=h-i,d=h+i;for(let m=0;m!==i;++m){let x=t[h+m];if(x!==t[f+m]||x!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,ha(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ym(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Zm(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}$n.prototype.ValueTypeName="";$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=pr;var Ms=class extends $n{constructor(e,t,i){super(e,t,i)}};Ms.prototype.ValueTypeName="bool";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=dr;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Ia=class extends $n{constructor(e,t,i,s){super(e,t,i,s)}};Ia.prototype.ValueTypeName="color";var Ss=class extends $n{constructor(e,t,i,s){super(e,t,i,s)}};Ss.prototype.ValueTypeName="number";var Oc=class extends Gi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Kt.slerpFlat(r,0,o,c-a,o,c,l);return r}},Es=class extends $n{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Oc(this.times,this.values,this.getValueSize(),e)}};Es.prototype.ValueTypeName="quaternion";Es.prototype.InterpolantFactoryMethodSmooth=void 0;var ws=class extends $n{constructor(e,t,i){super(e,t,i)}};ws.prototype.ValueTypeName="string";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=dr;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;var qs=class extends $n{constructor(e,t,i,s){super(e,t,i,s)}};qs.prototype.ValueTypeName="vector";var La=class{constructor(e="",t=-1,i=[],s=Eg){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=qi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push($v(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=i.length;r!==o;++r)t.push($n.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=Vv(l);l=$m(l,1,u),c=$m(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ss(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],f=s[h];f||(s[h]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function qv(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ss;case"vector":case"vector2":case"vector3":case"vector4":return qs;case"color":return Ia;case"quaternion":return Es;case"bool":case"boolean":return Ms;case"string":return ws}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function $v(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=qv(n.type);if(n.times===void 0){let i=[],s=[];Gv(n.keys,i,s,"value"),n.times=i,n.values=s}let t;return e.parse!==void 0?t=e.parse(n):t=new e(n.name,n.times,n.values,n.interpolation),ha(n.settings)&&(t.settings={inTangents:Gs(n.settings.inTangents,Float32Array),outTangents:Gs(n.settings.outTangents,Float32Array)}),t}var Bi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Km(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Km(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Km(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Uc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},zg=new Uc,Wi=class{constructor(e){this.manager=e!==void 0?e:zg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Wi.DEFAULT_MATERIAL_NAME="__DEFAULT";var ms={},xf=class extends Error{constructor(e,t){super(e),this.response=t}},So=class extends Wi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Bi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(ms[e]!==void 0){ms[e].push({onLoad:t,onProgress:i,onError:s});return}ms[e]=[],ms[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&it("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=ms[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0,x=0,p=new ReadableStream({start(g){b();function b(){h.read().then(({done:T,value:y})=>{if(T)g.close();else{x+=y.byteLength;let M=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:d});for(let E=0,_=u.length;E<_;E++){let w=u[E];w.onProgress&&w.onProgress(M)}g.enqueue(y),b()}},T=>{g.error(T)})}}});return new Response(p)}else throw new xf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{Bi.add(`file:${e}`,c);let u=ms[e];delete ms[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=ms[e];if(u===void 0)throw this.manager.itemError(e),c;delete ms[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var io=new WeakMap,Fc=class extends Wi{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Bi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=io.get(o);h===void 0&&(h=[],io.set(o,h)),h.push({onLoad:t,onError:s})}return o}let a=po("img");function l(){u(),t&&t(this);let h=io.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}io.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),Bi.remove(`image:${e}`);let f=io.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onError&&m.onError(h)}io.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Bi.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var Da=class extends Wi{constructor(e){super(e)}load(e,t,i,s){let r=new un,o=new Fc(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},xr=class extends Vt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var lf=new at,Jm=new I,jm=new I,Eo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xs,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Jm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jm),jm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){lf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(lf,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===fo||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(lf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},uc=new I,hc=new Kt,Ui=new I,Na=class extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(uc,hc,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uc,hc,Ui.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(uc,hc,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uc,hc,Ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Vs=new I,Qm=new $e,eg=new $e,cn=class extends Na{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(lo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mr*2*Math.atan(Math.tan(lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vs.x,Vs.y).multiplyScalar(-e/Vs.z),Vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vs.x,Vs.y).multiplyScalar(-e/Vs.z)}getViewSize(e,t){return this.getViewBounds(e,Qm,eg),t.subVectors(eg,Qm)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(lo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},yf=class extends Eo{constructor(){super(new cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=mr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Oa=class extends xr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new yf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},_f=class extends Eo{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0}},yr=class extends xr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new _f}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},wi=class extends Na{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},vf=class extends Eo{constructor(){super(new wi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$s=class extends xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new vf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ua=class extends xr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ts=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Fa=class extends Ot{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var cf=new WeakMap,Ba=class extends Wi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&it("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&it("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Bi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{cf.has(o)===!0?(s&&s(cf.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Bi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),cf.set(l,c),Bi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Bi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var so=-90,ro=1,wo=class extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new cn(so,ro,e,t);s.layers=this.layers,this.add(s);let r=new cn(so,ro,e,t);r.layers=this.layers,this.add(r);let o=new cn(so,ro,e,t);o.layers=this.layers,this.add(o);let a=new cn(so,ro,e,t);a.layers=this.layers,this.add(a);let l=new cn(so,ro,e,t);l.layers=this.layers,this.add(l);let c=new cn(so,ro,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ai)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Bc=class extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var jf="\\[\\]\\.:\\/",Yv=new RegExp("["+jf+"]","g"),Qf="[^"+jf+"]",Zv="[^"+jf.replace("\\.","")+"]",Kv=/((?:WC+[\/:])*)/.source.replace("WC",Qf),Jv=/(WCOD+)?/.source.replace("WCOD",Zv),jv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qf),Qv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qf),eb=new RegExp("^"+Kv+Jv+jv+Qv+"$"),tb=["material","materials","bones","map"],bf=class{constructor(e,t,i){let s=i||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Pt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Yv,"")}static parseTrackName(e){let t=eb.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);tb.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){it("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){lt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){lt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){lt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){lt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){lt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;lt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=bf;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var RR=new Float32Array(1);var Ys=class extends Ws{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var tg=new at,ei=class{constructor(e,t,i=0,s=1/0){this.ray=new zi(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new xo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):lt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return tg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(tg),this}intersectObject(e,t=!0,i=[]){return Mf(e,this,i,t),i.sort(ng),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Mf(e[s],this,i,t);return i.sort(ng),i}};function ng(n,e){return n.distance-e.distance}function Mf(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Mf(r[o],e,t,!0)}}var Zs=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ht(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Sf=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};var ig=new I,fc=new I,oo=new I,ao=new I,uf=new I,nb=new I,ib=new I,ka=class{constructor(e=new I,t=new I){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){ig.subVectors(e,this.start),fc.subVectors(this.end,this.start);let i=fc.dot(fc);if(i===0)return 0;let r=fc.dot(ig)/i;return t&&(r=ht(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=nb,i=ib){let s=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,u=e.end;oo.subVectors(c,a),ao.subVectors(u,l),uf.subVectors(a,l);let h=oo.dot(oo),f=ao.dot(ao),d=ao.dot(uf);if(h<=s&&f<=s)return t.copy(a),i.copy(l),t.distanceToSquared(i);if(h<=s)r=0,o=d/f,o=ht(o,0,1);else{let m=oo.dot(uf);if(f<=s)o=0,r=ht(-m/h,0,1);else{let x=oo.dot(ao),p=h*f-x*x;p!==0?r=ht((x*d-m*f)/p,0,1):r=0,o=(x*r+d)/f,o<0?(o=0,r=ht(-m/h,0,1)):o>1&&(o=1,r=ht((x-m)/h,0,1))}}return t.copy(a).addScaledVector(oo,r),i.copy(l).addScaledVector(ao,o),t.distanceToSquared(i)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var za=class extends Ei{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function ed(n,e,t,i){let s=sb(i);switch(t){case kf:return n*e;case $c:return n*e/s.components*s.byteLength;case Yc:return n*e/s.components*s.byteLength;case Qs:return n*e*2/s.components*s.byteLength;case Zc:return n*e*2/s.components*s.byteLength;case zf:return n*e*3/s.components*s.byteLength;case Sn:return n*e*4/s.components*s.byteLength;case Kc:return n*e*4/s.components*s.byteLength;case Xa:case qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $a:case Ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jc:case eu:return Math.max(n,16)*Math.max(e,8)/4;case Jc:case Qc:return Math.max(n,8)*Math.max(e,8)/2;case tu:case nu:case su:case ru:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case iu:case Za:case ou:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case au:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case lu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case cu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case uu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case hu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case fu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case du:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case pu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case mu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case gu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case xu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case yu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case _u:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case vu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case bu:case Mu:case Su:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Eu:case wu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ka:case Tu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sb(n){switch(n){case Dn:case Of:return{byteLength:1,components:1};case Io:case Uf:case Yn:return{byteLength:2,components:1};case Xc:case qc:return{byteLength:2,components:4};case Ai:case Wc:case Vn:return{byteLength:4,components:1};case Ff:case Bf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function l0(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function ob(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){let m=h[f],x=h[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){let x=h[d];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ab=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lb=`#ifdef USE_ALPHAHASH
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
#endif`,cb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ub=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,db=`#ifdef USE_AOMAP
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
#endif`,pb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mb=`#ifdef USE_BATCHING
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
#endif`,gb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_b=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vb=`#ifdef USE_IRIDESCENCE
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
#endif`,bb=`#ifdef USE_BUMPMAP
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
#endif`,Mb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Eb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ab=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Pb=`#define PI 3.141592653589793
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
} // validated`,Ib=`vec3 transformedNormal = objectNormal;
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
#endif`,Lb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Db=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ob=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ub="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bb=`#ifdef USE_ENVMAP
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
#endif`,kb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,zb=`#ifdef USE_ENVMAP
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
#endif`,Hb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vb=`#ifdef USE_ENVMAP
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
#endif`,Gb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$b=`#ifdef USE_GRADIENTMAP
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
}`,Yb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,jb=`#ifdef USE_ENVMAP
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
#endif`,Qb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iM=`PhysicalMaterial material;
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
#endif`,sM=`uniform sampler2D dfgLUT;
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
}`,rM=`
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
#endif`,oM=`#if defined( RE_IndirectDiffuse )
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
#endif`,aM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lM=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,cM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gM=`#if defined( USE_POINTS_UV )
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
#endif`,xM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_M=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vM=`#if defined( USE_MORPHCOLORS )
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
#endif`,bM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MM=`#ifdef USE_MORPHTARGETS
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
#endif`,SM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,TM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,CM=`#ifdef USE_NORMALMAP
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
#endif`,PM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,UM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,WM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,XM=`float getShadowMask() {
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
}`,qM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$M=`#ifdef USE_SKINNING
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
#endif`,YM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZM=`#ifdef USE_SKINNING
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
#endif`,KM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eS=`#ifdef USE_TRANSMISSION
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
#endif`,tS=`#ifdef USE_TRANSMISSION
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
#endif`,nS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,oS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aS=`uniform sampler2D t2D;
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
}`,lS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cS=`uniform float backgroundBlurriness;
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
}`,uS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fS=`#include <common>
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
}`,dS=`#if DEPTH_PACKING == 3200
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
}`,pS=`#define DISTANCE
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
}`,mS=`#define DISTANCE
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
}`,gS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yS=`uniform float scale;
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
}`,_S=`uniform vec3 diffuse;
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
}`,vS=`#include <common>
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
}`,bS=`uniform vec3 diffuse;
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
}`,MS=`#define LAMBERT
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
}`,SS=`#define LAMBERT
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
}`,ES=`#define MATCAP
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
}`,wS=`#define MATCAP
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
}`,TS=`#define NORMAL
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
}`,AS=`#define NORMAL
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
}`,RS=`#define PHONG
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
}`,CS=`#define PHONG
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
}`,PS=`#define STANDARD
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
}`,IS=`#define STANDARD
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
}`,LS=`#define TOON
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
}`,DS=`#define TOON
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
}`,NS=`uniform float size;
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
}`,OS=`uniform vec3 diffuse;
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
}`,US=`#include <common>
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
}`,FS=`uniform vec3 color;
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
}`,BS=`uniform float rotation;
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
}`,kS=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:ab,alphahash_pars_fragment:lb,alphamap_fragment:cb,alphamap_pars_fragment:ub,alphatest_fragment:hb,alphatest_pars_fragment:fb,aomap_fragment:db,aomap_pars_fragment:pb,batching_pars_vertex:mb,batching_vertex:gb,begin_vertex:xb,beginnormal_vertex:yb,bsdfs:_b,iridescence_fragment:vb,bumpmap_pars_fragment:bb,clipping_planes_fragment:Mb,clipping_planes_pars_fragment:Sb,clipping_planes_pars_vertex:Eb,clipping_planes_vertex:wb,color_fragment:Tb,color_pars_fragment:Ab,color_pars_vertex:Rb,color_vertex:Cb,common:Pb,defaultnormal_vertex:Ib,displacementmap_pars_vertex:Lb,displacementmap_vertex:Db,emissivemap_fragment:Nb,emissivemap_pars_fragment:Ob,colorspace_fragment:Ub,colorspace_pars_fragment:Fb,envmap_fragment:Bb,envmap_common_pars_fragment:kb,envmap_pars_fragment:zb,envmap_pars_vertex:Hb,envmap_physical_pars_fragment:jb,envmap_vertex:Vb,fog_vertex:Gb,fog_pars_vertex:Wb,fog_fragment:Xb,fog_pars_fragment:qb,gradientmap_pars_fragment:$b,lightmap_pars_fragment:Yb,lights_lambert_fragment:Zb,lights_lambert_pars_fragment:Kb,lights_pars_begin:Jb,lights_toon_fragment:Qb,lights_toon_pars_fragment:eM,lights_phong_fragment:tM,lights_phong_pars_fragment:nM,lights_physical_fragment:iM,lights_physical_pars_fragment:sM,lights_fragment_begin:rM,lights_fragment_maps:oM,lights_fragment_end:aM,lightprobes_pars_fragment:lM,logdepthbuf_fragment:cM,logdepthbuf_pars_fragment:uM,logdepthbuf_pars_vertex:hM,logdepthbuf_vertex:fM,map_fragment:dM,map_pars_fragment:pM,map_particle_fragment:mM,map_particle_pars_fragment:gM,metalnessmap_fragment:xM,metalnessmap_pars_fragment:yM,morphinstance_vertex:_M,morphcolor_vertex:vM,morphnormal_vertex:bM,morphtarget_pars_vertex:MM,morphtarget_vertex:SM,normal_fragment_begin:EM,normal_fragment_maps:wM,normal_pars_fragment:TM,normal_pars_vertex:AM,normal_vertex:RM,normalmap_pars_fragment:CM,clearcoat_normal_fragment_begin:PM,clearcoat_normal_fragment_maps:IM,clearcoat_pars_fragment:LM,iridescence_pars_fragment:DM,opaque_fragment:NM,packing:OM,premultiplied_alpha_fragment:UM,project_vertex:FM,dithering_fragment:BM,dithering_pars_fragment:kM,roughnessmap_fragment:zM,roughnessmap_pars_fragment:HM,shadowmap_pars_fragment:VM,shadowmap_pars_vertex:GM,shadowmap_vertex:WM,shadowmask_pars_fragment:XM,skinbase_vertex:qM,skinning_pars_vertex:$M,skinning_vertex:YM,skinnormal_vertex:ZM,specularmap_fragment:KM,specularmap_pars_fragment:JM,tonemapping_fragment:jM,tonemapping_pars_fragment:QM,transmission_fragment:eS,transmission_pars_fragment:tS,uv_pars_fragment:nS,uv_pars_vertex:iS,uv_vertex:sS,worldpos_vertex:rS,background_vert:oS,background_frag:aS,backgroundCube_vert:lS,backgroundCube_frag:cS,cube_vert:uS,cube_frag:hS,depth_vert:fS,depth_frag:dS,distance_vert:pS,distance_frag:mS,equirect_vert:gS,equirect_frag:xS,linedashed_vert:yS,linedashed_frag:_S,meshbasic_vert:vS,meshbasic_frag:bS,meshlambert_vert:MS,meshlambert_frag:SS,meshmatcap_vert:ES,meshmatcap_frag:wS,meshnormal_vert:TS,meshnormal_frag:AS,meshphong_vert:RS,meshphong_frag:CS,meshphysical_vert:PS,meshphysical_frag:IS,meshtoon_vert:LS,meshtoon_frag:DS,points_vert:NS,points_frag:OS,shadow_vert:US,shadow_frag:FS,sprite_vert:BS,sprite_frag:kS},We={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Gn={basic:{uniforms:Nn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Nn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Nn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Nn([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Nn([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new Ke(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Nn([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Nn([We.points,We.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Nn([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Nn([We.common,We.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Nn([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Nn([We.sprite,We.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Nn([We.common,We.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Nn([We.lights,We.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Gn.physical={uniforms:Nn([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};var Ru={r:0,b:0,g:0},zS=new at,c0=new ut;c0.set(-1,0,0,0,1,0,0,0,1);function HS(n,e,t,i,s,r){let o=new Ke(0),a=s===!0?0:1,l,c,u=null,h=0,f=null;function d(b){let T=b.isScene===!0?b.background:null;if(T&&T.isTexture){let y=b.backgroundBlurriness>0;T=e.get(T,y)}return T}function m(b){let T=!1,y=d(b);y===null?p(o,a):y&&y.isColor&&(p(y,1),T=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(b,T){let y=d(T);y&&y.isCubeTexture?(c===void 0&&(c=new dt(new Vi(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:Mr(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(zS.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(c0),c.material.toneMapped=gt.getTransfer(y.colorSpace)!==It,(u!==y||h!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,f=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new dt(new li(2,2),new vn({name:"BackgroundMaterial",uniforms:Mr(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=gt.getTransfer(y.colorSpace)!==It,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,f=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,T){b.getRGB(Ru,Jf(n)),t.buffers.color.setClear(Ru.r,Ru.g,Ru.b,T,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,T=1){o.set(b),a=T,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,p(o,a)},render:m,addToRenderList:x,dispose:g}}function VS(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(k,X,z,N,W){let j=!1,q=h(k,N,z,X);r!==q&&(r=q,c(r.object)),j=d(k,N,z,W),j&&m(k,N,z,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,y(k,X,z,N),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(k){return n.bindVertexArray(k)}function u(k){return n.deleteVertexArray(k)}function h(k,X,z,N){let W=N.wireframe===!0,j=i[X.id];j===void 0&&(j={},i[X.id]=j);let q=k.isInstancedMesh===!0?k.id:0,_e=j[q];_e===void 0&&(_e={},j[q]=_e);let Z=_e[z.id];Z===void 0&&(Z={},_e[z.id]=Z);let V=Z[W];return V===void 0&&(V=f(l()),Z[W]=V),V}function f(k){let X=[],z=[],N=[];for(let W=0;W<t;W++)X[W]=0,z[W]=0,N[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:z,attributeDivisors:N,object:k,attributes:{},index:null}}function d(k,X,z,N){let W=r.attributes,j=X.attributes,q=0,_e=z.getAttributes();for(let Z in _e)if(_e[Z].location>=0){let ee=W[Z],be=j[Z];if(be===void 0&&(Z==="instanceMatrix"&&k.instanceMatrix&&(be=k.instanceMatrix),Z==="instanceColor"&&k.instanceColor&&(be=k.instanceColor)),ee===void 0||ee.attribute!==be||be&&ee.data!==be.data)return!0;q++}return r.attributesNum!==q||r.index!==N}function m(k,X,z,N){let W={},j=X.attributes,q=0,_e=z.getAttributes();for(let Z in _e)if(_e[Z].location>=0){let ee=j[Z];ee===void 0&&(Z==="instanceMatrix"&&k.instanceMatrix&&(ee=k.instanceMatrix),Z==="instanceColor"&&k.instanceColor&&(ee=k.instanceColor));let be={};be.attribute=ee,ee&&ee.data&&(be.data=ee.data),W[Z]=be,q++}r.attributes=W,r.attributesNum=q,r.index=N}function x(){let k=r.newAttributes;for(let X=0,z=k.length;X<z;X++)k[X]=0}function p(k){g(k,0)}function g(k,X){let z=r.newAttributes,N=r.enabledAttributes,W=r.attributeDivisors;z[k]=1,N[k]===0&&(n.enableVertexAttribArray(k),N[k]=1),W[k]!==X&&(n.vertexAttribDivisor(k,X),W[k]=X)}function b(){let k=r.newAttributes,X=r.enabledAttributes;for(let z=0,N=X.length;z<N;z++)X[z]!==k[z]&&(n.disableVertexAttribArray(z),X[z]=0)}function T(k,X,z,N,W,j,q){q===!0?n.vertexAttribIPointer(k,X,z,W,j):n.vertexAttribPointer(k,X,z,N,W,j)}function y(k,X,z,N){x();let W=N.attributes,j=z.getAttributes(),q=X.defaultAttributeValues;for(let _e in j){let Z=j[_e];if(Z.location>=0){let V=W[_e];if(V===void 0&&(_e==="instanceMatrix"&&k.instanceMatrix&&(V=k.instanceMatrix),_e==="instanceColor"&&k.instanceColor&&(V=k.instanceColor)),V!==void 0){let ee=V.normalized,be=V.itemSize,Re=e.get(V);if(Re===void 0)continue;let K=Re.buffer,ue=Re.type,B=Re.bytesPerElement,te=ue===n.INT||ue===n.UNSIGNED_INT||V.gpuType===Wc;if(V.isInterleavedBufferAttribute){let ge=V.data,Se=ge.isInterleavedBuffer===!0?ge.stride:ge.itemSize,qe=V.offset;if(ge.isInstancedInterleavedBuffer||ge.isInstancedBufferAttribute){for(let Ue=0;Ue<Z.locationSize;Ue++)g(Z.location+Ue,ge.meshPerAttribute);k.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Ue=0;Ue<Z.locationSize;Ue++)p(Z.location+Ue);n.bindBuffer(n.ARRAY_BUFFER,K);for(let Ue=0;Ue<Z.locationSize;Ue++)T(Z.location+Ue,be/Z.locationSize,ue,ee,Se*B,(qe+be/Z.locationSize*Ue)*B,te)}else{if(V.isInstancedBufferAttribute){for(let ge=0;ge<Z.locationSize;ge++)g(Z.location+ge,V.meshPerAttribute);k.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ge=0;ge<Z.locationSize;ge++)p(Z.location+ge);n.bindBuffer(n.ARRAY_BUFFER,K);for(let ge=0;ge<Z.locationSize;ge++)T(Z.location+ge,be/Z.locationSize,ue,ee,be*B,be/Z.locationSize*ge*B,te)}}else if(q!==void 0){let ee=q[_e];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(Z.location,ee);break;case 3:n.vertexAttrib3fv(Z.location,ee);break;case 4:n.vertexAttrib4fv(Z.location,ee);break;default:n.vertexAttrib1fv(Z.location,ee)}}}}b()}function M(){D();for(let k in i){let X=i[k];for(let z in X){let N=X[z];for(let W in N){let j=N[W];for(let q in j)u(j[q].object),delete j[q];delete N[W]}}delete i[k]}}function E(k){if(i[k.id]===void 0)return;let X=i[k.id];for(let z in X){let N=X[z];for(let W in N){let j=N[W];for(let q in j)u(j[q].object),delete j[q];delete N[W]}}delete i[k.id]}function _(k){for(let X in i){let z=i[X];for(let N in z){let W=z[N];if(W[k.id]===void 0)continue;let j=W[k.id];for(let q in j)u(j[q].object),delete j[q];delete W[k.id]}}}function w(k){for(let X in i){let z=i[X],N=k.isInstancedMesh===!0?k.id:0,W=z[N];if(W!==void 0){for(let j in W){let q=W[j];for(let _e in q)u(q[_e].object),delete q[_e];delete W[j]}delete z[N],Object.keys(z).length===0&&delete i[X]}}}function D(){L(),o=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:L,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfObject:w,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:p,disableUnusedAttributes:b}}function GS(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];t.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function WS(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==Sn&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let w=_===Yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Dn&&_!==Vn&&!w&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(it("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&it("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:y,maxSamples:M,samples:E}}function XS(n){let e=this,t=null,i=0,s=!1,r=!1,o=new yn,a=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let m=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,g=n.get(h);if(!s||m===null||m.length===0||r&&!p)r?u(null):c();else{let b=r?0:i,T=b*4,y=g.clippingState||null;l.value=y,y=u(m,f,T,d);for(let M=0;M!==T;++M)y[M]=t[M];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,m){let x=h!==null?h.length:0,p=null;if(x!==0){if(p=l.value,m!==!0||p===null){let g=d+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<g)&&(p=new Float32Array(g));for(let T=0,y=d;T!==x;++T,y+=4)o.copy(h[T]).applyMatrix4(b,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}var nl=class extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ea(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vi(5,5,5),r=new vn({name:"CubemapFromEquirect",uniforms:Mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:ci});r.uniforms.tEquirect.value=t;let o=new dt(s,r),a=t.minFilter;return t.minFilter===hi&&(t.minFilter=qt),new wo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Hg=256,qS=3,$S=20,u0=256,h0=16,YS=3,ZS=new I,KS=new Ke,No=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new wo(1,10,null),this._boxMesh=new dt(new Vi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=ZS}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let h=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,m=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(KS));let p=new wo(i,s,u);return p.position.copy(a),p.update(l,e),l.autoClear=h,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=m,e.background=x,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Hg,Yf(e))}_fromTexture(e,t){e.mapping===_r||e.mapping===Co?this._setSize(e.image.length===0?Hg:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Vg(e,!1,!1),i=Math.log2(e)-qS;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Vg(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===_r||e.mapping===Co?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wg()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Gg()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=JS(),this._integrationMaterial=jS());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/h0);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-YS)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(u0*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=QS());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function Vg(n,e,t){return new nl(n,{minFilter:hi,generateMipmaps:e,type:Yn,colorSpace:zn,depthBuffer:t})}function il(n,e,t){return new vn({name:n,uniforms:e,vertexShader:mt.cube_vert,fragmentShader:t,side:Mn,blending:ci,depthTest:!1,depthWrite:!1})}function JS(){return il("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${u0}u

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
	`)}function jS(){return il("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:h0}},`

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
	`)}function QS(){return il("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${$S}
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
	`)}function Gg(){return il("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Wg(){return il("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function eE(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Hc||d===Vc)if(e.has(f)){let m=e.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let x=new nl(m.height);return x.fromEquirectangularTexture(n,f),e.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,m=d===Hc||d===Vc,x=d===_r||d===Co;if(m||x){let p=t.get(f),g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return i===null&&(i=new No(n)),p=m?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{let b=f.image;return m&&b&&b.height>0||x&&b&&l(b)?(i===null&&(i=new No(n)),p=m?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function a(f,d){return d===Hc?f.mapping=_r:d===Vc&&(f.mapping=Co),f}function l(f){let d=0,m=6;for(let x=0;x<m;x++)f[x]!==void 0&&d++;return d===m}function c(f){let d=f.target;d.removeEventListener("dispose",c);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function tE(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&fr("WebGLRenderer: "+i+" extension not supported."),s}}}function nE(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(m=>delete s[m]);function a(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let p in m.attributes)e.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete s[m.id],o.unregister(m);let x=r.get(m);x&&(e.remove(x),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function u(m){let x=m.attributes;for(let p in x)e.update(x[p],n.ARRAY_BUFFER)}function h(m){let x=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let b=x!==null?x.array.length:p.array.length/3-1,T=p.count>=65535?xa:ga,y=new T(Math.ceil(b/3)*6,1),M=y.array;if(x!==null){let _=x.array;g=x.version;for(let w=0,D=0;w<b;w+=3){let L=_[w+0],k=_[w+1],X=_[w+2];M[D++]=L,M[D++]=k,M[D++]=k,M[D++]=X,M[D++]=X,M[D++]=L}}else{g=p.version;for(let _=0,w=0;_<b;_+=3){let D=_+0,L=_+1,k=_+2;M[w++]=D,M[w++]=L,M[w++]=L,M[w++]=k,M[w++]=k,M[w++]=D}}y.version=g;let E=r.get(m);E&&e.remove(E),r.set(m,y)}function f(m){let x=r.get(m);if(x){let p=m.index;p!==null&&x.version<p.version&&h(m)}else h(m);return r.get(m)}function d(){for(let m in s){let x=s[m].deref();x!==void 0&&l(x)}}return{get:c,update:u,getWireframeAttribute:f,dispose:d}}function iE(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){n.drawElements(i,f,r,h*o),t.update(f,i,1)}function c(h,f,d){d!==0&&(n.drawElementsInstanced(i,f,r,h*o,d),t.update(f,i,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,h,0,d);let x=0;for(let p=0;p<d;p++)x+=f[p];t.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function sE(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:lt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function rE(n,e,t){let i=new WeakMap,s=new St;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==h){let D=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",D)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],T=0;d===!0&&(T=1),m===!0&&(T=2),x===!0&&(T=3);let y=a.attributes.position.count*T,M=1;y>e.maxTextureSize&&(M=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*M*4*h),_=new ma(E,y,M,h);_.type=Vn,_.needsUpdate=!0;let w=T*4;for(let L=0;L<h;L++){let k=p[L],X=g[L],z=b[L],N=y*M*4*L;for(let W=0;W<k.count;W++){let j=W*w;d===!0&&(s.fromBufferAttribute(k,W),E[N+j+0]=s.x,E[N+j+1]=s.y,E[N+j+2]=s.z,E[N+j+3]=0),m===!0&&(s.fromBufferAttribute(X,W),E[N+j+4]=s.x,E[N+j+5]=s.y,E[N+j+6]=s.z,E[N+j+7]=0),x===!0&&(s.fromBufferAttribute(z,W),E[N+j+8]=s.x,E[N+j+9]=s.y,E[N+j+10]=s.z,E[N+j+11]=z.itemSize===4?s.w:1)}}f={count:h,texture:_,size:new $e(y,M)},i.set(a,f),a.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function oE(n,e,t,i,s){let r=new WeakMap;function o(c){let u=s.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var aE={[Rf]:"LINEAR_TONE_MAPPING",[Cf]:"REINHARD_TONE_MAPPING",[Pf]:"CINEON_TONE_MAPPING",[Ro]:"ACES_FILMIC_TONE_MAPPING",[Lf]:"AGX_TONE_MAPPING",[Df]:"NEUTRAL_TONE_MAPPING",[If]:"CUSTOM_TONE_MAPPING"};function lE(n,e,t,i,s,r){let o=new rn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new Ot;u.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Ht([0,2,0,0,2,0],2));let h=new Rc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new dt(u,h),d=new wi(-1,1,1,-1,0,1),m=null,x=null,p=!1,g,b=null,T=[],y=!1;this.setSize=function(M,E){o.setSize(M,E),a!==null&&a.setSize(M,E),l!==null&&l.setSize(M,E);for(let _=0;_<T.length;_++){let w=T[_];w.setSize&&w.setSize(M,E)}},this.setEffects=function(M){T=M,y=T.length>0&&T[0].isRenderPass===!0;let E=o.width,_=o.height;T.length>0&&a===null&&(a=new rn(E,_,{type:Yn,depthBuffer:!1,stencilBuffer:!1}),l=new rn(E,_,{type:Yn,depthBuffer:!1,stencilBuffer:!1}));let w=s===!0&&T.some(D=>D.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&c===null&&(c=new bs(E,_),r===!0&&(c.format=As,c.type=br)),o.dispose(),o.depthTexture=w?c:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let D=0;D<T.length;D++){let L=T[D];L.setSize&&L.setSize(E,_),w&&L.needsDepthTexture===!0&&L.setDepthTexture&&L.setDepthTexture(c)}},this.begin=function(M,E){if(p||M.toneMapping===ui&&T.length===0)return!1;if(b=E,E!==null){let _=E.width,w=E.height;(o.width!==_||o.height!==w)&&this.setSize(_,w)}return y===!1&&M.setRenderTarget(o),g=M.toneMapping,M.toneMapping=ui,!0},this.hasRenderPass=function(){return y},this.end=function(M,E){M.toneMapping=g,p=!0;let _=o,w=a;for(let D=0;D<T.length;D++){let L=T[D];L.enabled!==!1&&(L.render(M,w,_,E),L.needsSwap!==!1&&(_=w,w=w===a?l:a))}if(m!==M.outputColorSpace||x!==M.toneMapping){m=M.outputColorSpace,x=M.toneMapping,h.defines={},gt.getTransfer(m)===It&&(h.defines.SRGB_TRANSFER="");let D=aE[x];D&&(h.defines[D]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=_.texture,M.setRenderTarget(b),M.render(f,d),b=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}var f0=new un,d0=new bs(1,1),p0=new wa(1),m0=new ma,g0=new Ec,x0=new Ea,Xg=[],qg=[],$g=new Float32Array(16),Yg=new Float32Array(9),Zg=new Float32Array(4);function Oo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Xg[s];if(r===void 0&&(r=new Float32Array(s),Xg[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function fn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function dn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Iu(n,e){let t=qg[e];t===void 0&&(t=new Int32Array(e),qg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function cE(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function uE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2fv(this.addr,e),dn(t,e)}}function hE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;n.uniform3fv(this.addr,e),dn(t,e)}}function fE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4fv(this.addr,e),dn(t,e)}}function dE(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,i))return;Zg.set(i),n.uniformMatrix2fv(this.addr,!1,Zg),dn(t,i)}}function pE(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,i))return;Yg.set(i),n.uniformMatrix3fv(this.addr,!1,Yg),dn(t,i)}}function mE(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,i))return;$g.set(i),n.uniformMatrix4fv(this.addr,!1,$g),dn(t,i)}}function gE(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2iv(this.addr,e),dn(t,e)}}function yE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3iv(this.addr,e),dn(t,e)}}function _E(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4iv(this.addr,e),dn(t,e)}}function vE(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function bE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2uiv(this.addr,e),dn(t,e)}}function ME(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3uiv(this.addr,e),dn(t,e)}}function SE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4uiv(this.addr,e),dn(t,e)}}function Lu(n){return n.version===0&&(n.compareFunction=Wf,n.needsUpdate=!0),n}function EE(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Lu(d0):r=f0,t.setTexture2D(e||r,s)}function wE(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||g0,s)}function TE(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Lu(p0):r=x0,t.setTextureCube(e||r,s)}function AE(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||m0,s)}function RE(n){switch(n){case 5126:return cE;case 35664:return uE;case 35665:return hE;case 35666:return fE;case 35674:return dE;case 35675:return pE;case 35676:return mE;case 5124:case 35670:return gE;case 35667:case 35671:return xE;case 35668:case 35672:return yE;case 35669:case 35673:return _E;case 5125:return vE;case 36294:return bE;case 36295:return ME;case 36296:return SE;case 35678:case 36198:case 36298:case 36306:case 35682:return EE;case 35679:case 36299:case 36307:return wE;case 35680:case 36300:case 36308:case 36293:return TE;case 36289:case 36303:case 36311:case 36292:return AE}}function CE(n,e){n.uniform1fv(this.addr,e)}function PE(n,e){let t=Oo(e,this.size,2);n.uniform2fv(this.addr,t)}function IE(n,e){let t=Oo(e,this.size,3);n.uniform3fv(this.addr,t)}function LE(n,e){let t=Oo(e,this.size,4);n.uniform4fv(this.addr,t)}function DE(n,e){let t=Oo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function NE(n,e){let t=Oo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function OE(n,e){let t=Oo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function UE(n,e){n.uniform1iv(this.addr,e)}function FE(n,e){n.uniform2iv(this.addr,e)}function BE(n,e){n.uniform3iv(this.addr,e)}function kE(n,e){n.uniform4iv(this.addr,e)}function zE(n,e){n.uniform1uiv(this.addr,e)}function HE(n,e){n.uniform2uiv(this.addr,e)}function VE(n,e){n.uniform3uiv(this.addr,e)}function GE(n,e){n.uniform4uiv(this.addr,e)}function WE(n,e,t){let i=this.cache,s=e.length,r=Iu(t,s);fn(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Lu(d0):o=f0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function XE(n,e,t){let i=this.cache,s=e.length,r=Iu(t,s);fn(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||g0,r[o])}function qE(n,e,t){let i=this.cache,s=e.length,r=Iu(t,s);fn(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Lu(p0):o=x0;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function $E(n,e,t){let i=this.cache,s=e.length,r=Iu(t,s);fn(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||m0,r[o])}function YE(n){switch(n){case 5126:return CE;case 35664:return PE;case 35665:return IE;case 35666:return LE;case 35674:return DE;case 35675:return NE;case 35676:return OE;case 5124:case 35670:return UE;case 35667:case 35671:return FE;case 35668:case 35672:return BE;case 35669:case 35673:return kE;case 5125:return zE;case 36294:return HE;case 36295:return VE;case 36296:return GE;case 35678:case 36198:case 36298:case 36306:case 35682:return WE;case 35679:case 36299:case 36307:return XE;case 35680:case 36300:case 36308:case 36293:return qE;case 36289:case 36303:case 36311:case 36292:return $E}}var id=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=RE(t.type)}},sd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=YE(t.type)}},rd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},td=/(\w+)(\])?(\[|\.)?/g;function Kg(n,e){n.seq.push(e),n.map[e.id]=e}function ZE(n,e,t){let i=n.name,s=i.length;for(td.lastIndex=0;;){let r=td.exec(i),o=td.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Kg(t,c===void 0?new id(a,n,e):new sd(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new rd(a),Kg(t,h)),t=h}}}var Do=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);ZE(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Jg(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var KE=37297,JE=0;function jE(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var jg=new ut;function QE(n){gt._getMatrix(jg,gt.workingColorSpace,n);let e=`mat3( ${jg.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(n)){case da:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Qg(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+jE(n.getShaderSource(e),a)}else return r}function ew(n,e){let t=QE(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var tw={[Rf]:"Linear",[Cf]:"Reinhard",[Pf]:"Cineon",[Ro]:"ACESFilmic",[Lf]:"AgX",[Df]:"Neutral",[If]:"Custom"};function nw(n,e){let t=tw[e];return t===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Cu=new I;function iw(){gt.getLuminanceCoefficients(Cu);let n=Cu.x.toFixed(4),e=Cu.y.toFixed(4),t=Cu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tl).join(`
`)}function rw(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ow(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function tl(n){return n!==""}function e0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function t0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var aw=/^[ \t]*#include +<([\w\d./]+)>/gm;function od(n){return n.replace(aw,lw)}function lw(n,e){let t=mt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return od(t)}var cw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function n0(n){return n.replace(cw,uw)}function uw(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function i0(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var hw={[Ha]:"SHADOWMAP_TYPE_PCF",[To]:"SHADOWMAP_TYPE_VSM"};function fw(n){return hw[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var dw={[Co]:"ENVMAP_MODE_REFRACTION"};function pw(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":dw[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var mw={[zc]:"ENVMAP_BLENDING_MULTIPLY",[bg]:"ENVMAP_BLENDING_MIX",[Mg]:"ENVMAP_BLENDING_ADD"};function gw(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":mw[n.combine]||"ENVMAP_BLENDING_NONE"}function xw(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=fw(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=pw(t),h=gw(t),f=sw(t),d=rw(r),m=s.createProgram(),x,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(tl).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(tl).join(`
`),p.length>0&&(p+=`
`)):(x=[i0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tl).join(`
`),p=[i0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?mt.tonemapping_pars_fragment:"",t.toneMapping!==ui?nw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,ew("linearToOutputTexel",t.outputColorSpace),iw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(tl).join(`
`)),o=od(o),o=e0(o,t),o=t0(o,t),a=od(a),a=e0(a,t),a=t0(a,t),o=n0(o),a=n0(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===qf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=g+x+o,T=g+p+a,y=Jg(s,s.VERTEX_SHADER,b),M=Jg(s,s.FRAGMENT_SHADER,T);s.attachShader(m,y),s.attachShader(m,M),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function E(L){if(n.debug.checkShaderErrors){let k=s.getProgramInfoLog(m)||"",X=s.getShaderInfoLog(y)||"",z=s.getShaderInfoLog(M)||"",N=k.trim(),W=X.trim(),j=z.trim(),q=!0,_e=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,y,M);else{let Z=Qg(s,y,"vertex"),V=Qg(s,M,"fragment");lt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+N+`
`+Z+`
`+V)}else N!==""?it("WebGLProgram: Program Info Log:",N):(W===""||j==="")&&(_e=!1);_e&&(L.diagnostics={runnable:q,programLog:N,vertexShader:{log:W,prefix:x},fragmentShader:{log:j,prefix:p}})}s.deleteShader(y),s.deleteShader(M),_=new Do(s,m),w=ow(s,m)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(m,KE)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=JE++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=M,this}var yw=0,ad=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ld(e),t.set(e,i)),i}},ld=class{constructor(e){this.id=yw++,this.code=e,this.usedTimes=0}};function _w(n){return n===Qs||n===Za||n===Ka}function vw(n,e,t,i,s,r){let o=new xo,a=new ad,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,w,D,L,k,X){let z=L.fog,N=k.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,j=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,q=e.get(_.envMap||W,j),_e=f[_.type],Z=i.precision;_.precision!==null&&(Z=i.getMaxPrecision(_.precision),Z!==_.precision&&it("WebGLProgram.getParameters:",_.precision,"not supported, using",Z,"instead."));let V=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ee=V!==void 0?V.length:0,be=0;N.morphAttributes.position!==void 0&&(be=1),N.morphAttributes.normal!==void 0&&(be=2),N.morphAttributes.color!==void 0&&(be=3);let Re,K,ue,B;if(_e){let Ce=Gn[_e];Re=Ce.vertexShader,K=Ce.fragmentShader}else{Re=_.vertexShader,K=_.fragmentShader;let Ce=a.getVertexShaderStage(_),pt=a.getFragmentShaderStage(_);a.update(_,Ce,pt),ue=Ce.id,B=pt.id}let te=n.getRenderTarget(),ge=n.state.buffers.depth.getReversed(),Se=k.isInstancedMesh===!0,qe=k.isBatchedMesh===!0,Ue=!!_.map,Ye=!!_.matcap,he=!!q,Ae=he&&q.isPMREMTexture===!0,Le=!!_.aoMap,Be=!!_.lightMap,Ge=!!_.bumpMap&&_.wireframe===!1,Je=!!_.normalMap,ot=!!_.displacementMap,oe=!!_.emissiveMap,ke=!!_.metalnessMap,je=!!_.roughnessMap,re=_.anisotropy>0,A=_.clearcoat>0,J=_.diffuseRoughness>0,Q=_.dispersion>0,Ee=_.retroreflectivity>0,$=_.iridescence>0,ve=_.sheen>0,me=_.transmission>0,we=re&&!!_.anisotropyMap,C=A&&!!_.clearcoatMap,S=A&&!!_.clearcoatNormalMap,G=A&&!!_.clearcoatRoughnessMap,Me=J&&!!_.diffuseRoughnessMap,pe=$&&!!_.iridescenceMap,le=$&&!!_.iridescenceThicknessMap,xe=ve&&!!_.sheenColorMap,se=ve&&!!_.sheenRoughnessMap,fe=!!_.specularMap,De=!!_.specularColorMap,F=!!_.specularIntensityMap,ye=me&&!!_.transmissionMap,de=me&&!!_.thicknessMap,Fe=!!_.gradientMap,Ne=!!_.alphaMap,Oe=_.alphaTest>0,ze=!!_.alphaHash,st=!!_.extensions,Y=ui;_.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Y=n.toneMapping);let Pe=Ae?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,rt={shaderID:_e,shaderType:_.type,shaderName:_.name,vertexShader:Re,fragmentShader:K,defines:_.defines,customVertexShaderID:ue,customFragmentShaderID:B,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:Z,batching:qe,batchingColor:qe&&k._colorsTexture!==null,instancing:Se,instancingColor:Se&&k.instanceColor!==null,instancingMorph:Se&&k.morphTexture!==null,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:gt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ue,matcap:Ye,envMap:he,envMapMode:he&&q.mapping,envMapPMREM:Ae,envMapMaxLod:Ae?Pe.length-1:null,envMapSize:Ae?Pe[0].width:null,aoMap:Le,lightMap:Be,bumpMap:Ge,normalMap:Je,displacementMap:ot,emissiveMap:oe,normalMapObjectSpace:Je&&_.normalMapType===Tg,normalMapTangentSpace:Je&&_.normalMapType===ja,packedNormalMap:Je&&_.normalMapType===ja&&_w(_.normalMap.format),metalnessMap:ke,roughnessMap:je,anisotropy:re,anisotropyMap:we,clearcoat:A,clearcoatMap:C,clearcoatNormalMap:S,clearcoatRoughnessMap:G,diffuseRoughness:J,diffuseRoughnessMap:Me,dispersion:Q,retroreflection:Ee,iridescence:$,iridescenceMap:pe,iridescenceThicknessMap:le,sheen:ve,sheenColorMap:xe,sheenRoughnessMap:se,specularMap:fe,specularColorMap:De,specularIntensityMap:F,transmission:me,transmissionMap:ye,thicknessMap:de,gradientMap:Fe,opaque:_.transparent===!1&&_.blending===Xi&&_.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Oe,alphaHash:ze,combine:_.combine,mapUv:Ue&&d(_.map.channel),aoMapUv:Le&&d(_.aoMap.channel),lightMapUv:Be&&d(_.lightMap.channel),bumpMapUv:Ge&&d(_.bumpMap.channel),normalMapUv:Je&&d(_.normalMap.channel),displacementMapUv:ot&&d(_.displacementMap.channel),emissiveMapUv:oe&&d(_.emissiveMap.channel),metalnessMapUv:ke&&d(_.metalnessMap.channel),roughnessMapUv:je&&d(_.roughnessMap.channel),anisotropyMapUv:we&&d(_.anisotropyMap.channel),clearcoatMapUv:C&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:S&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Me&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:pe&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:le&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:se&&d(_.sheenRoughnessMap.channel),specularMapUv:fe&&d(_.specularMap.channel),specularColorMapUv:De&&d(_.specularColorMap.channel),specularIntensityMapUv:F&&d(_.specularIntensityMap.channel),transmissionMapUv:ye&&d(_.transmissionMap.channel),thicknessMapUv:de&&d(_.thicknessMap.channel),alphaMapUv:Ne&&d(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Je||re),vertexNormals:!!N.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!N.attributes.uv&&(Ue||Ne),fog:!!z,useFog:_.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||N.attributes.normal===void 0&&Je===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ge,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:be,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:X.filter(Ce=>Ce.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Y,decodeVideoTexture:Ue&&_.map.isVideoTexture===!0&&gt.getTransfer(_.map.colorSpace)===It,decodeVideoTextureEmissive:oe&&_.emissiveMap.isVideoTexture===!0&&gt.getTransfer(_.emissiveMap.colorSpace)===It,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Lt,flipSided:_.side===Mn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:st&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&_.extensions.multiDraw===!0||qe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function x(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let D in _.defines)w.push(D),w.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(p(w,_),g(w,_),w.push(n.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function p(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapPMREM),_.push(w.envMapMaxLod),_.push(w.envMapSize),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.diffuseRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.numLightProbeGrids),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function g(_,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function b(_){let w=f[_.type],D;if(w){let L=Gn[w];D=Qa.clone(L.uniforms)}else D=_.uniforms;return D}function T(_,w){let D=u.get(w);return D!==void 0?++D.usedTimes:(D=new xw(n,w,_,s),c.push(D),u.set(w,D)),D}function y(_){if(--_.usedTimes===0){let w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function M(_){a.remove(_)}function E(){a.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:b,acquireProgram:T,releaseProgram:y,releaseShaderCache:M,programs:c,dispose:E}}function bw(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Mw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function s0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function r0(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,x,p,g){let b=n[e];return b===void 0?(b={id:f.id,object:f,geometry:d,material:m,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:p,group:g},n[e]=b):(b.id=f.id,b.object=f,b.geometry=d,b.material=m,b.materialVariant=o(f),b.groupOrder=x,b.renderOrder=f.renderOrder,b.z=p,b.group=g),e++,b}function l(f,d,m,x,p,g,b){b.reversedDepth===!0&&(p=-p);let T=a(f,d,m,x,p,g);m.transmission>0?i.push(T):m.transparent===!0?s.push(T):t.push(T)}function c(f,d,m,x,p,g){let b=a(f,d,m,x,p,g);m.transmission>0?i.unshift(b):m.transparent===!0?s.unshift(b):t.unshift(b)}function u(f,d){t.length>1&&t.sort(f||Mw),i.length>1&&i.sort(d||s0),s.length>1&&s.sort(d||s0)}function h(){for(let f=e,d=n.length;f<d;f++){let m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function Sw(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new r0,n.set(i,[o])):s>=r.length?(o=new r0,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ew(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new Ke};break;case"SpotLight":t={position:new I,direction:new I,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function ww(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Tw=0;function Aw(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Rw(n){let e=new Ew,t=ww(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,r=new at,o=new at;function a(c){let u=0,h=0,f=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let d=0,m=0,x=0,p=0,g=0,b=0,T=0,y=0,M=0,E=0,_=0,w=0,D=0,L=0;c.sort(Aw);for(let X=0,z=c.length;X<z;X++){let N=c[X],W=N.color,j=N.intensity,q=N.distance,_e=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Qs?_e=N.shadow.map.texture:_e=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=W.r*j,h+=W.g*j,f+=W.b*j;else if(N.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(N.sh.coefficients[Z],j);L++}else if(N.isSunLight){let Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let V=N.shadow,ee=t.get(N);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),i.sunShadow[m]=ee,i.sunShadowMap[m]=_e;let be=V.getViewportCount();for(let Re=0;Re<be;Re++)i.sunShadowMatrix[x+Re]=V.getMatrix(Re),i.sunShadowCascade[x+Re]=V._cascadeData[Re];x+=be,m++}i.sun[d]=Z,d++}else if(N.isDirectionalLight){let Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let V=N.shadow,ee=t.get(N);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,i.directionalShadow[p]=ee,i.directionalShadowMap[p]=_e,i.directionalShadowMatrix[p]=N.shadow.matrix,M++}i.directional[p]=Z,p++}else if(N.isSpotLight){let Z=e.get(N);Z.position.setFromMatrixPosition(N.matrixWorld),Z.color.copy(W).multiplyScalar(j),Z.distance=q,Z.coneCos=Math.cos(N.angle),Z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Z.decay=N.decay,i.spot[b]=Z;let V=N.shadow;if(N.map&&(i.spotLightMap[w]=N.map,w++,V.updateMatrices(N),N.castShadow&&D++),i.spotLightMatrix[b]=V.matrix,N.castShadow){let ee=t.get(N);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,i.spotShadow[b]=ee,i.spotShadowMap[b]=_e,_++}b++}else if(N.isRectAreaLight){let Z=e.get(N);Z.color.copy(W).multiplyScalar(j),Z.halfWidth.set(N.width*.5,0,0),Z.halfHeight.set(0,N.height*.5,0),i.rectArea[T]=Z,T++}else if(N.isPointLight){let Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),Z.distance=N.distance,Z.decay=N.decay,N.castShadow){let V=N.shadow,ee=t.get(N);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,ee.shadowCameraNear=V.camera.near,ee.shadowCameraFar=V.camera.far,i.pointShadow[g]=ee,i.pointShadowMap[g]=_e,i.pointShadowMatrix[g]=N.shadow.matrix,E++}i.point[g]=Z,g++}else if(N.isHemisphereLight){let Z=e.get(N);Z.skyColor.copy(N.color).multiplyScalar(j),Z.groundColor.copy(N.groundColor).multiplyScalar(j),i.hemi[y]=Z,y++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=We.LTC_FLOAT_1,i.rectAreaLTC2=We.LTC_FLOAT_2):(i.rectAreaLTC1=We.LTC_HALF_1,i.rectAreaLTC2=We.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let k=i.hash;(k.sunLength!==d||k.directionalLength!==p||k.pointLength!==g||k.spotLength!==b||k.rectAreaLength!==T||k.hemiLength!==y||k.numSunShadows!==m||k.numDirectionalShadows!==M||k.numPointShadows!==E||k.numSpotShadows!==_||k.numSpotMaps!==w||k.numLightProbes!==L)&&(i.sun.length=d,i.directional.length=p,i.spot.length=b,i.rectArea.length=T,i.point.length=g,i.hemi.length=y,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+w-D,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=L,k.sunLength=d,k.directionalLength=p,k.pointLength=g,k.spotLength=b,k.rectAreaLength=T,k.hemiLength=y,k.numSunShadows=m,k.numDirectionalShadows=M,k.numPointShadows=E,k.numSpotShadows=_,k.numSpotMaps=w,k.numLightProbes=L,i.version=Tw++)}function l(c,u){let h=0,f=0,d=0,m=0,x=0,p=0,g=u.matrixWorldInverse;for(let b=0,T=c.length;b<T;b++){let y=c[b];if(y.isSunLight){let M=i.sun[h];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),h++}else if(y.isDirectionalLight){let M=i.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),f++}else if(y.isSpotLight){let M=i.spot[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),m++}else if(y.isRectAreaLight){let M=i.rectArea[x];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let M=i.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let M=i.hemi[p];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:i}}function o0(n){let e=new Rw(n),t=[],i=[],s=[];function r(h){u.camera=h,t.length=0,i.length=0,s.length=0}function o(h){h.isLightProbeGrid?s.push(h):t.push(h)}function a(h){i.push(h)}function l(){e.setup(t),s.sort((h,f)=>h.priority-f.priority||h.id-f.id)}function c(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Cw(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new o0(n),e.set(s,[a])):r>=o.length?(a=new o0(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Pw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Iw=`uniform sampler2D shadow_pass;
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
}`,Lw=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Dw=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],a0=new at,el=new I,nd=new I;function Nw(n,e,t){let i=new Xs,s=new $e,r=new $e,o=new St,a=new Cc,l=new Pc,c={},u=t.maxTextureSize,h={[ti]:Mn,[Mn]:ti,[Lt]:Lt},f=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:Pw,fragmentShader:Iw}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Ot;m.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new dt(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ha;let g=this.type;this.render=function(E,_,w){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===og&&(it("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ha);let D=n.getRenderTarget(),L=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),X=n.state;X.setBlending(ci),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let z=g!==this.type;z&&_.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(W=>W.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,W=E.length;N<W;N++){let j=E[N],q=j.shadow;if(q===void 0){it("WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let _e=q.getFrameExtents();s.multiply(_e),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/_e.x),s.x=r.x*_e.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/_e.y),s.y=r.y*_e.y,q.mapSize.y=r.y));let Z=n.state.buffers.depth.getReversed();if(q.camera._reversedDepth=Z,q.map===null||z===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===To){if(j.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new rn(s.x,s.y,{format:Qs,type:Yn,minFilter:qt,magFilter:qt,generateMipmaps:!1}),q.map.texture.name=j.name+".shadowMap",q.map.depthTexture=new bs(s.x,s.y,Vn),q.map.depthTexture.name=j.name+".shadowMapDepth",q.map.depthTexture.format=xs,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Xt,q.map.depthTexture.magFilter=Xt}else j.isPointLight?(q.map=new nl(s.x),q.map.depthTexture=new wa(s.x,Ai)):(q.map=new rn(s.x,s.y),q.map.depthTexture=new bs(s.x,s.y,Ai)),q.map.depthTexture.name=j.name+".shadowMap",q.map.depthTexture.format=xs,this.type===Ha?(q.map.depthTexture.compareFunction=Z?Gf:Vf,q.map.depthTexture.minFilter=qt,q.map.depthTexture.magFilter=qt):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Xt,q.map.depthTexture.magFilter=Xt);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let V=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();j.isPointLight!==!0&&q.updateMatrices(j,w);let ee=(q.camera.layers.mask&4294967294)!==0?q.camera.layers:w.layers;for(let be=0;be<V;be++){let Re=q.getCamera(be);if(j.isPointLight){let K=q.camera,ue=q.matrix,B=j.distance||K.far;B!==K.far&&(K.far=B,K.updateProjectionMatrix()),el.setFromMatrixPosition(j.matrixWorld),K.position.copy(el),nd.copy(K.position),nd.add(Lw[be]),K.up.copy(Dw[be]),K.lookAt(nd),K.updateMatrixWorld(),ue.makeTranslation(-el.x,-el.y,-el.z),a0.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),q._frustum.setFromProjectionMatrix(a0,K.coordinateSystem,K.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)n.setRenderTarget(q.map,be),n.clear();else{be===0&&(n.setRenderTarget(q.map),n.clear());let K=q.getViewport(be);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),X.viewport(o)}i=q.getFrustum(be),y(_,w,Re,j,ee,this.type)}q.isPointLightShadow!==!0&&this.type===To&&b(q,w),q.needsUpdate=!1}g=this.type,p.needsUpdate=!1,n.setRenderTarget(D,L,k)};function b(E,_){let w=e.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new rn(s.x,s.y,{format:Qs,type:Yn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(_,null,w,f,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(_,null,w,d,x,null)}function T(E,_,w,D){let L=null,k=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(k!==void 0)L=k;else if(L=w.isPointLight===!0?l:a,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let X=L.uuid,z=_.uuid,N=c[X];N===void 0&&(N={},c[X]=N);let W=N[z];W===void 0&&(W=L.clone(),N[z]=W,_.addEventListener("dispose",M)),L=W}if(L.visible=_.visible,L.wireframe=_.wireframe,D===To?L.side=_.shadowSide!==null?_.shadowSide:_.side:L.side=_.shadowSide!==null?_.shadowSide:h[_.side],L.alphaMap=_.alphaMap,L.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,L.map=_.map,L.clipShadows=_.clipShadows,L.clippingPlanes=_.clippingPlanes,L.clipIntersection=_.clipIntersection,L.displacementMap=_.displacementMap,L.displacementScale=_.displacementScale,L.displacementBias=_.displacementBias,L.wireframeLinewidth=_.wireframeLinewidth,L.linewidth=_.linewidth,w.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let X=n.properties.get(L);X.light=w}return L}function y(E,_,w,D,L,k){if(E.visible===!1)return;if(E.layers.test(L)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&k===To)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);let N=e.update(E),W=E.material;if(Array.isArray(W)){let j=N.groups;for(let q=0,_e=j.length;q<_e;q++){let Z=j[q],V=W[Z.materialIndex];if(V&&V.visible){let ee=T(E,V,D,k);E.onBeforeShadow(n,E,_,w,N,ee,Z),n.renderBufferDirect(w,null,N,ee,E,Z),E.onAfterShadow(n,E,_,w,N,ee,Z)}}}else if(W.visible){let j=T(E,W,D,k);E.onBeforeShadow(n,E,_,w,N,j,null),n.renderBufferDirect(w,null,N,j,E,null),E.onAfterShadow(n,E,_,w,N,j,null)}}let z=E.children;for(let N=0,W=z.length;N<W;N++)y(z[N],_,w,D,L,k)}function M(E){E.target.removeEventListener("dispose",M);for(let w in c){let D=c[w],L=E.target.uuid;L in D&&(D[L].dispose(),delete D[L])}}}function Ow(n,e){function t(){let F=!1,ye=new St,de=null,Fe=new St(0,0,0,0);return{setMask:function(Ne){de!==Ne&&!F&&(n.colorMask(Ne,Ne,Ne,Ne),de=Ne)},setLocked:function(Ne){F=Ne},setClear:function(Ne,Oe,ze,st,Y){Y===!0&&(Ne*=st,Oe*=st,ze*=st),ye.set(Ne,Oe,ze,st),Fe.equals(ye)===!1&&(n.clearColor(Ne,Oe,ze,st),Fe.copy(ye))},reset:function(){F=!1,de=null,Fe.set(-1,0,0,0)}}}function i(){let F=!1,ye=!1,de=null,Fe=null,Ne=null;return{setReversed:function(Oe){if(ye!==Oe){let ze=e.get("EXT_clip_control");Oe?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),ye=Oe;let st=Ne;Ne=null,this.setClear(st)}},getReversed:function(){return ye},setTest:function(Oe){Oe?ge(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(Oe){de!==Oe&&!F&&(n.depthMask(Oe),de=Oe)},setFunc:function(Oe){if(ye&&(Oe=Ug[Oe]),Fe!==Oe){switch(Oe){case mc:n.depthFunc(n.NEVER);break;case gc:n.depthFunc(n.ALWAYS);break;case xc:n.depthFunc(n.LESS);break;case uo:n.depthFunc(n.LEQUAL);break;case yc:n.depthFunc(n.EQUAL);break;case _c:n.depthFunc(n.GEQUAL);break;case vc:n.depthFunc(n.GREATER);break;case bc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Fe=Oe}},setLocked:function(Oe){F=Oe},setClear:function(Oe){Ne!==Oe&&(Ne=Oe,ye&&(Oe=1-Oe),n.clearDepth(Oe))},reset:function(){F=!1,de=null,Fe=null,Ne=null,ye=!1}}}function s(){let F=!1,ye=null,de=null,Fe=null,Ne=null,Oe=null,ze=null,st=null,Y=null;return{setTest:function(Pe){F||(Pe?ge(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(Pe){ye!==Pe&&!F&&(n.stencilMask(Pe),ye=Pe)},setFunc:function(Pe,rt,Ce){(de!==Pe||Fe!==rt||Ne!==Ce)&&(n.stencilFunc(Pe,rt,Ce),de=Pe,Fe=rt,Ne=Ce)},setOp:function(Pe,rt,Ce){(Oe!==Pe||ze!==rt||st!==Ce)&&(n.stencilOp(Pe,rt,Ce),Oe=Pe,ze=rt,st=Ce)},setLocked:function(Pe){F=Pe},setClear:function(Pe){Y!==Pe&&(n.clearStencil(Pe),Y=Pe)},reset:function(){F=!1,ye=null,de=null,Fe=null,Ne=null,Oe=null,ze=null,st=null,Y=null}}}let r=new t,o=new i,a=new s,l={},c=new WeakMap,u={},h={},f={},d=new WeakMap,m=[],x=null,p=!1,g=null,b=null,T=null,y=null,M=null,E=null,_=null,w=new Ke(0,0,0),D=0,L=!1,k=null,X=null,z=null,N=null,W=null,j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,_e=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(_e=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=_e>=1):Z.indexOf("OpenGL ES")!==-1&&(_e=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=_e>=2);let V=null,ee={},be=n.getParameter(n.SCISSOR_BOX),Re=n.getParameter(n.VIEWPORT),K=new St().fromArray(be),ue=new St().fromArray(Re);function B(F,ye,de,Fe){let Ne=new Uint8Array(4),Oe=n.createTexture();n.bindTexture(F,Oe),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ze=0;ze<de;ze++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,Fe,0,n.RGBA,n.UNSIGNED_BYTE,Ne):n.texImage2D(ye+ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ne);return Oe}let te={};te[n.TEXTURE_2D]=B(n.TEXTURE_2D,n.TEXTURE_2D,1),te[n.TEXTURE_CUBE_MAP]=B(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[n.TEXTURE_2D_ARRAY]=B(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),te[n.TEXTURE_3D]=B(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ge(n.DEPTH_TEST),o.setFunc(uo),Ge(!1),Je(Ef),ge(n.CULL_FACE),Le(ci);function ge(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function Se(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function qe(F,ye){return f[F]!==ye?(n.bindFramebuffer(F,ye),f[F]=ye,F===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ye),F===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function Ue(F,ye){let de=m,Fe=!1;if(F){de=d.get(ye),de===void 0&&(de=[],d.set(ye,de));let Ne=F.textures;if(de.length!==Ne.length||de[0]!==n.COLOR_ATTACHMENT0){for(let Oe=0,ze=Ne.length;Oe<ze;Oe++)de[Oe]=n.COLOR_ATTACHMENT0+Oe;de.length=Ne.length,Fe=!0}}else de[0]!==n.BACK&&(de[0]=n.BACK,Fe=!0);Fe&&n.drawBuffers(de)}function Ye(F){return x!==F?(n.useProgram(F),x=F,!0):!1}let he={[Ti]:n.FUNC_ADD,[ag]:n.FUNC_SUBTRACT,[lg]:n.FUNC_REVERSE_SUBTRACT};he[cg]=n.MIN,he[ug]=n.MAX;let Ae={[Va]:n.ZERO,[js]:n.ONE,[hg]:n.SRC_COLOR,[Ga]:n.SRC_ALPHA,[gg]:n.SRC_ALPHA_SATURATE,[pg]:n.DST_COLOR,[dg]:n.DST_ALPHA,[fg]:n.ONE_MINUS_SRC_COLOR,[Ao]:n.ONE_MINUS_SRC_ALPHA,[mg]:n.ONE_MINUS_DST_COLOR,[Wa]:n.ONE_MINUS_DST_ALPHA,[xg]:n.CONSTANT_COLOR,[yg]:n.ONE_MINUS_CONSTANT_COLOR,[_g]:n.CONSTANT_ALPHA,[vg]:n.ONE_MINUS_CONSTANT_ALPHA};function Le(F,ye,de,Fe,Ne,Oe,ze,st,Y,Pe){if(F===ci){p===!0&&(Se(n.BLEND),p=!1);return}if(p===!1&&(ge(n.BLEND),p=!0),F!==kc){if(F!==g||Pe!==L){if((b!==Ti||M!==Ti)&&(n.blendEquation(n.FUNC_ADD),b=Ti,M=Ti),Pe)switch(F){case Xi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wf:n.blendFunc(n.ONE,n.ONE);break;case Tf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Af:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:lt("WebGLState: Invalid blending: ",F);break}else switch(F){case Xi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wf:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Tf:lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Af:lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:lt("WebGLState: Invalid blending: ",F);break}T=null,y=null,E=null,_=null,w.set(0,0,0),D=0,g=F,L=Pe}return}Ne=Ne||ye,Oe=Oe||de,ze=ze||Fe,(ye!==b||Ne!==M)&&(n.blendEquationSeparate(he[ye],he[Ne]),b=ye,M=Ne),(de!==T||Fe!==y||Oe!==E||ze!==_)&&(n.blendFuncSeparate(Ae[de],Ae[Fe],Ae[Oe],Ae[ze]),T=de,y=Fe,E=Oe,_=ze),(st.equals(w)===!1||Y!==D)&&(n.blendColor(st.r,st.g,st.b,Y),w.copy(st),D=Y),g=F,L=!1}function Be(F,ye){F.side===Lt?Se(n.CULL_FACE):ge(n.CULL_FACE);let de=F.side===Mn;ye&&(de=!de),Ge(de),F.blending===Xi&&F.transparent===!1?Le(ci):Le(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let Fe=F.stencilWrite;a.setTest(Fe),Fe&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),oe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(F){k!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),k=F)}function Je(F){F!==sg?(ge(n.CULL_FACE),F!==X&&(F===Ef?n.cullFace(n.BACK):F===rg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),X=F}function ot(F){F!==z&&(q&&n.lineWidth(F),z=F)}function oe(F,ye,de){F?(ge(n.POLYGON_OFFSET_FILL),(N!==ye||W!==de)&&(N=ye,W=de,o.getReversed()&&(ye=-ye,de=-de),n.polygonOffset(ye,de))):Se(n.POLYGON_OFFSET_FILL)}function ke(F){F?ge(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function je(F){F===void 0&&(F=n.TEXTURE0+j-1),V!==F&&(n.activeTexture(F),V=F)}function re(F,ye,de){de===void 0&&(V===null?de=n.TEXTURE0+j-1:de=V);let Fe=ee[de];Fe===void 0&&(Fe={type:void 0,texture:void 0},ee[de]=Fe),(Fe.type!==F||Fe.texture!==ye)&&(V!==de&&(n.activeTexture(de),V=de),n.bindTexture(F,ye||te[F]),Fe.type=F,Fe.texture=ye)}function A(){let F=ee[V];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function J(){try{n.compressedTexImage2D(...arguments)}catch(F){lt("WebGLState:",F)}}function Q(){try{n.compressedTexImage3D(...arguments)}catch(F){lt("WebGLState:",F)}}function Ee(){try{n.texSubImage2D(...arguments)}catch(F){lt("WebGLState:",F)}}function $(){try{n.texSubImage3D(...arguments)}catch(F){lt("WebGLState:",F)}}function ve(){try{n.compressedTexSubImage2D(...arguments)}catch(F){lt("WebGLState:",F)}}function me(){try{n.compressedTexSubImage3D(...arguments)}catch(F){lt("WebGLState:",F)}}function we(){try{n.texStorage2D(...arguments)}catch(F){lt("WebGLState:",F)}}function C(){try{n.texStorage3D(...arguments)}catch(F){lt("WebGLState:",F)}}function S(){try{n.texImage2D(...arguments)}catch(F){lt("WebGLState:",F)}}function G(){try{n.texImage3D(...arguments)}catch(F){lt("WebGLState:",F)}}function Me(F){return h[F]!==void 0?h[F]:n.getParameter(F)}function pe(F,ye){h[F]!==ye&&(n.pixelStorei(F,ye),h[F]=ye)}function le(F){K.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),K.copy(F))}function xe(F){ue.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),ue.copy(F))}function se(F,ye){let de=c.get(ye);de===void 0&&(de=new WeakMap,c.set(ye,de));let Fe=de.get(F);Fe===void 0&&(Fe=n.getUniformBlockIndex(ye,F.name),n.uniformBlockBinding(ye,Fe,Fe),de.set(F,Fe))}function fe(F,ye,de){let Ne=c.get(ye).get(F);l[Ne]!==de&&(n.bindBufferBase(n.UNIFORM_BUFFER,Ne,de),l[Ne]=de)}function De(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},V=null,ee={},f={},l={},d=new WeakMap,m=[],x=null,p=!1,g=null,b=null,T=null,y=null,M=null,E=null,_=null,w=new Ke(0,0,0),D=0,L=!1,k=null,X=null,z=null,N=null,W=null,K.set(0,0,n.canvas.width,n.canvas.height),ue.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ge,disable:Se,bindFramebuffer:qe,drawBuffers:Ue,useProgram:Ye,setBlending:Le,setMaterial:Be,setFlipSided:Ge,setCullFace:Je,setLineWidth:ot,setPolygonOffset:oe,setScissorTest:ke,activeTexture:je,bindTexture:re,unbindTexture:A,compressedTexImage2D:J,compressedTexImage3D:Q,texImage2D:S,texImage3D:G,pixelStorei:pe,getParameter:Me,updateUBOMapping:se,uniformBlockBinding:fe,texStorage2D:we,texStorage3D:C,texSubImage2D:Ee,texSubImage3D:$,compressedTexSubImage2D:ve,compressedTexSubImage3D:me,scissor:le,viewport:xe,reset:De}}function Uw(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,u=new WeakMap,h=new Set,f,d=new WeakMap,m=new Set,x=new FinalizationRegistry(C=>m.delete(C)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return p?new OffscreenCanvas(C,S):po("canvas")}function b(C,S,G){let Me=1,pe=we(C);if((pe.width>G||pe.height>G)&&(Me=G/Math.max(pe.width,pe.height)),Me<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let le=Math.floor(Me*pe.width),xe=Math.floor(Me*pe.height);f===void 0&&(f=g(le,xe));let se=S?g(le,xe):f;return se.width=le,se.height=xe,se.getContext("2d").drawImage(C,0,0,le,xe),it("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+le+"x"+xe+")."),se}else return"data"in C&&it("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),C;return C}function T(C){return C.generateMipmaps}function y(C){n.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(C,S,G,Me,pe,le=!1){if(C!==null){if(n[C]!==void 0)return n[C];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let xe;Me&&(xe=e.get("EXT_texture_norm16"),xe||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let se=S;if(S===n.RED&&(G===n.FLOAT&&(se=n.R32F),G===n.HALF_FLOAT&&(se=n.R16F),G===n.UNSIGNED_BYTE&&(se=n.R8),G===n.UNSIGNED_SHORT&&xe&&(se=xe.R16_EXT),G===n.SHORT&&xe&&(se=xe.R16_SNORM_EXT)),S===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(se=n.R8UI),G===n.UNSIGNED_SHORT&&(se=n.R16UI),G===n.UNSIGNED_INT&&(se=n.R32UI),G===n.BYTE&&(se=n.R8I),G===n.SHORT&&(se=n.R16I),G===n.INT&&(se=n.R32I)),S===n.RG&&(G===n.FLOAT&&(se=n.RG32F),G===n.HALF_FLOAT&&(se=n.RG16F),G===n.UNSIGNED_BYTE&&(se=n.RG8),G===n.UNSIGNED_SHORT&&xe&&(se=xe.RG16_EXT),G===n.SHORT&&xe&&(se=xe.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(se=n.RG8UI),G===n.UNSIGNED_SHORT&&(se=n.RG16UI),G===n.UNSIGNED_INT&&(se=n.RG32UI),G===n.BYTE&&(se=n.RG8I),G===n.SHORT&&(se=n.RG16I),G===n.INT&&(se=n.RG32I)),S===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(se=n.RGB8UI),G===n.UNSIGNED_SHORT&&(se=n.RGB16UI),G===n.UNSIGNED_INT&&(se=n.RGB32UI),G===n.BYTE&&(se=n.RGB8I),G===n.SHORT&&(se=n.RGB16I),G===n.INT&&(se=n.RGB32I)),S===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(se=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(se=n.RGBA16UI),G===n.UNSIGNED_INT&&(se=n.RGBA32UI),G===n.BYTE&&(se=n.RGBA8I),G===n.SHORT&&(se=n.RGBA16I),G===n.INT&&(se=n.RGBA32I)),S===n.RGB&&(G===n.UNSIGNED_SHORT&&xe&&(se=xe.RGB16_EXT),G===n.SHORT&&xe&&(se=xe.RGB16_SNORM_EXT),G===n.UNSIGNED_INT_5_9_9_9_REV&&(se=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(se=n.R11F_G11F_B10F)),S===n.RGBA){let fe=le?da:gt.getTransfer(pe);G===n.FLOAT&&(se=n.RGBA32F),G===n.HALF_FLOAT&&(se=n.RGBA16F),G===n.UNSIGNED_BYTE&&(se=fe===It?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT&&xe&&(se=xe.RGBA16_EXT),G===n.SHORT&&xe&&(se=xe.RGBA16_SNORM_EXT),G===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)}return(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function _(C,S){let G;return C?S===null||S===Ai||S===br?G=n.DEPTH24_STENCIL8:S===Vn?G=n.DEPTH32F_STENCIL8:S===Io&&(G=n.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ai||S===br?G=n.DEPTH_COMPONENT24:S===Vn?G=n.DEPTH_COMPONENT32F:S===Io&&(G=n.DEPTH_COMPONENT16),G}function w(C,S){return T(C)===!0||C.isFramebufferTexture&&C.minFilter!==Xt&&C.minFilter!==qt?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function D(C){let S=new WeakRef(C);i.get(C).__ref=S,m.add(S),x.register(C,S,S)}function L(C){let S=i.get(C).__ref;S!==void 0&&(m.delete(S),x.unregister(S))}function k(C){z(C.target)}function X(C){N(C.target)}function z(C){C.removeEventListener("dispose",k),L(C),j(C),C.isVideoTexture&&u.delete(C),C.isHTMLTexture&&h.delete(C)}function N(C){C.removeEventListener("dispose",X),L(C),_e(C)}function W(){for(let C of m){let S=C.deref();S!==void 0&&(S.isRenderTarget===!0?N(S):z(S))}m.clear(),h.clear()}function j(C){let S=i.get(C);if(S.__webglInit===void 0)return;let G=C.source,Me=d.get(G);if(Me){let pe=Me[S.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&q(C),Object.keys(Me).length===0&&d.delete(G)}i.remove(C)}function q(C){let S=i.get(C);n.deleteTexture(S.__webglTexture);let G=C.source,Me=d.get(G);delete Me[S.__cacheKey],o.memory.textures--}function _e(C){let S=i.get(C);S.__depthDisposeCallback&&S.__depthDisposeCallback();let G=C.depthTexture;if(G&&G.renderTarget===C&&z(G),C.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(S.__webglFramebuffer[pe]))for(let le=0;le<S.__webglFramebuffer[pe].length;le++)n.deleteFramebuffer(S.__webglFramebuffer[pe][le]);else n.deleteFramebuffer(S.__webglFramebuffer[pe]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[pe])}else{if(Array.isArray(S.__webglFramebuffer))for(let pe=0;pe<S.__webglFramebuffer.length;pe++)n.deleteFramebuffer(S.__webglFramebuffer[pe]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let pe=0;pe<S.__webglColorRenderbuffer.length;pe++)S.__webglColorRenderbuffer[pe]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[pe]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let Me=C.textures;for(let pe=0,le=Me.length;pe<le;pe++){let xe=i.get(Me[pe]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(Me[pe])}i.remove(C)}let Z=0;function V(){Z=0}function ee(){return Z}function be(C){Z=C}function Re(){let C=Z;return C>=s.maxTextures&&it("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),Z+=1,C}function K(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.mipmapsAutoUpdate),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function ue(C,S){let G=i.get(C);if(C.isVideoTexture&&ve(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){let Me=C.image;if(Me===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(Me.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{Be(G,C,S);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+S)}function B(C,S){let G=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){Be(G,C,S);return}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+S)}function te(C,S){let G=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){Be(G,C,S);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+S)}function ge(C,S){let G=i.get(C);if(C.version>0&&G.__version!==C.version){Ge(G,C,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+S)}let Se={[Si]:n.REPEAT,[oi]:n.CLAMP_TO_EDGE,[ho]:n.MIRRORED_REPEAT},qe={[Xt]:n.NEAREST,[Gc]:n.NEAREST_MIPMAP_NEAREST,[vr]:n.NEAREST_MIPMAP_LINEAR,[qt]:n.LINEAR,[Po]:n.LINEAR_MIPMAP_NEAREST,[hi]:n.LINEAR_MIPMAP_LINEAR},Ue={[Rg]:n.NEVER,[Wf]:n.ALWAYS,[Cg]:n.LESS,[Vf]:n.LEQUAL,[Pg]:n.EQUAL,[Gf]:n.GEQUAL,[Ig]:n.GREATER,[Lg]:n.NOTEQUAL};function Ye(C,S){if(S.type===Vn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===qt||S.magFilter===Po||S.magFilter===vr||S.magFilter===hi||S.minFilter===qt||S.minFilter===Po||S.minFilter===vr||S.minFilter===hi)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,Se[S.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,Se[S.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,Se[S.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,qe[S.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,qe[S.minFilter]),S.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Ue[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Xt||S.minFilter!==vr&&S.minFilter!==hi||S.type===Vn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function he(C,S){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",k),D(S));let Me=S.source,pe=d.get(Me);pe===void 0&&(pe={},d.set(Me,pe));let le=K(S);if(le!==C.__cacheKey){pe[le]===void 0&&(pe[le]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),pe[le].usedTimes++;let xe=pe[C.__cacheKey];xe!==void 0&&(pe[C.__cacheKey].usedTimes--,xe.usedTimes===0&&q(S)),C.__cacheKey=le,C.__webglTexture=pe[le].texture}return G}function Ae(C,S,G){return Math.floor(Math.floor(C/G)/S)}function Le(C,S,G,Me){let le=C.updateRanges;if(le.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,G,Me,S.data);else{le.sort((F,ye)=>F.start-ye.start);let xe=0;for(let F=1;F<le.length;F++){let ye=le[xe],de=le[F],Fe=ye.start+ye.count,Ne=Ae(de.start,S.width,4),Oe=Ae(ye.start,S.width,4);de.start<=Fe+1&&Ne===Oe&&Ae(de.start+de.count-1,S.width,4)===Ne?ye.count=Math.max(ye.count,de.start+de.count-ye.start):(++xe,le[xe]=de)}le.length=xe+1;let se=t.getParameter(n.UNPACK_ROW_LENGTH),fe=t.getParameter(n.UNPACK_SKIP_PIXELS),De=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let F=0,ye=le.length;F<ye;F++){let de=le[F],Fe=Math.floor(de.start/4),Ne=Math.ceil(de.count/4),Oe=Fe%S.width,ze=Math.floor(Fe/S.width),st=Ne,Y=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Oe),t.pixelStorei(n.UNPACK_SKIP_ROWS,ze),t.texSubImage2D(n.TEXTURE_2D,0,Oe,ze,st,Y,G,Me,S.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,se),t.pixelStorei(n.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(n.UNPACK_SKIP_ROWS,De)}}function Be(C,S,G){let Me=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Me=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Me=n.TEXTURE_3D);let pe=he(C,S),le=S.source;t.bindTexture(Me,C.__webglTexture,n.TEXTURE0+G);let xe=i.get(le);if(le.version!==xe.__version||pe===!0){if(t.activeTexture(n.TEXTURE0+G),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let Y=gt.getPrimaries(gt.workingColorSpace),Pe=S.colorSpace===Ri?null:gt.getPrimaries(S.colorSpace),rt=S.colorSpace===Ri||Y===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt)}t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let fe=b(S.image,!1,s.maxTextureSize);fe=me(S,fe);let De=r.convert(S.format,S.colorSpace),F=r.convert(S.type),ye=E(S.internalFormat,De,F,S.normalized,S.colorSpace,S.isVideoTexture);Ye(Me,S);let de,Fe=S.mipmaps,Ne=S.isVideoTexture!==!0,Oe=xe.__version===void 0||pe===!0,ze=le.dataReady,st=w(S,fe);if(S.isDepthTexture)ye=_(S.format===As,S.type),Oe&&(Ne?t.texStorage2D(n.TEXTURE_2D,1,ye,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,ye,fe.width,fe.height,0,De,F,null));else if(S.isDataTexture)if(Fe.length>0){Ne&&Oe&&t.texStorage2D(n.TEXTURE_2D,st,ye,Fe[0].width,Fe[0].height);for(let Y=0,Pe=Fe.length;Y<Pe;Y++)de=Fe[Y],Ne?ze&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,de.width,de.height,De,F,de.data):t.texImage2D(n.TEXTURE_2D,Y,ye,de.width,de.height,0,De,F,de.data);S.generateMipmaps=!1}else Ne?(Oe&&t.texStorage2D(n.TEXTURE_2D,st,ye,fe.width,fe.height),ze&&Le(S,fe,De,F)):t.texImage2D(n.TEXTURE_2D,0,ye,fe.width,fe.height,0,De,F,fe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ne&&Oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,st,ye,Fe[0].width,Fe[0].height,fe.depth);for(let Y=0,Pe=Fe.length;Y<Pe;Y++)if(de=Fe[Y],S.format!==Sn)if(De!==null)if(Ne){if(ze)if(S.layerUpdates.size>0){let rt=ed(de.width,de.height,S.format,S.type);for(let Ce of S.layerUpdates){let pt=de.data.subarray(Ce*rt/de.data.BYTES_PER_ELEMENT,(Ce+1)*rt/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,Ce,de.width,de.height,1,De,pt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,de.width,de.height,fe.depth,De,de.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,ye,de.width,de.height,fe.depth,0,de.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?ze&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,de.width,de.height,fe.depth,De,F,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Y,ye,de.width,de.height,fe.depth,0,De,F,de.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Ne&&Oe&&t.texStorage2D(n.TEXTURE_2D,st,ye,Fe[0].width,Fe[0].height);for(let Y=0,Pe=Fe.length;Y<Pe;Y++)de=Fe[Y],S.format!==Sn?De!==null?Ne?ze&&t.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,de.width,de.height,De,de.data):t.compressedTexImage2D(n.TEXTURE_2D,Y,ye,de.width,de.height,0,de.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?ze&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,de.width,de.height,De,F,de.data):t.texImage2D(n.TEXTURE_2D,Y,ye,de.width,de.height,0,De,F,de.data)}else if(S.isDataArrayTexture)if(Ne){if(Oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,st,ye,fe.width,fe.height,fe.depth),ze)if(S.layerUpdates.size>0){let Y=ed(fe.width,fe.height,S.format,S.type);for(let Pe of S.layerUpdates){let rt=fe.data.subarray(Pe*Y/fe.data.BYTES_PER_ELEMENT,(Pe+1)*Y/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Pe,fe.width,fe.height,1,De,F,rt)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,De,F,fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,fe.width,fe.height,fe.depth,0,De,F,fe.data);else if(S.isData3DTexture)Ne?(Oe&&t.texStorage3D(n.TEXTURE_3D,st,ye,fe.width,fe.height,fe.depth),ze&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,De,F,fe.data)):t.texImage3D(n.TEXTURE_3D,0,ye,fe.width,fe.height,fe.depth,0,De,F,fe.data);else if(S.isFramebufferTexture){if(Oe)if(Ne)t.texStorage2D(n.TEXTURE_2D,st,ye,fe.width,fe.height);else{let Y=fe.width,Pe=fe.height;for(let rt=0;rt<st;rt++)t.texImage2D(n.TEXTURE_2D,rt,ye,Y,Pe,0,De,F,null),Y>>=1,Pe>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){let Y=n.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),fe.parentNode!==Y){Y.appendChild(fe),h.add(S),Y.onpaint=Pe=>{let rt=Pe.changedElements;for(let Ce of h)rt.includes(Ce.image)&&(Ce.needsUpdate=!0)},Y.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,fe);else{let rt=n.RGBA,Ce=n.RGBA,pt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,rt,Ce,pt,fe)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Fe.length>0){if(Ne&&Oe){let Y=we(Fe[0]);t.texStorage2D(n.TEXTURE_2D,st,ye,Y.width,Y.height)}for(let Y=0,Pe=Fe.length;Y<Pe;Y++)de=Fe[Y],Ne?ze&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,De,F,de):t.texImage2D(n.TEXTURE_2D,Y,ye,De,F,de);S.generateMipmaps=!1}else if(Ne){if(Oe){let Y=we(fe);t.texStorage2D(n.TEXTURE_2D,st,ye,Y.width,Y.height)}ze&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,De,F,fe)}else t.texImage2D(n.TEXTURE_2D,0,ye,De,F,fe);T(S)&&S.mipmapsAutoUpdate===!0&&y(Me),xe.__version=le.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Ge(C,S,G){if(S.image.length!==6)return;let Me=he(C,S),pe=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+G);let le=i.get(pe);if(pe.version!==le.__version||Me===!0){t.activeTexture(n.TEXTURE0+G);let xe=gt.getPrimaries(gt.workingColorSpace),se=S.colorSpace===Ri?null:gt.getPrimaries(S.colorSpace),fe=S.colorSpace===Ri||xe===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let De=S.isCompressedTexture||S.image[0].isCompressedTexture,F=S.image[0]&&S.image[0].isDataTexture,ye=[];for(let Ce=0;Ce<6;Ce++)!De&&!F?ye[Ce]=b(S.image[Ce],!0,s.maxCubemapSize):ye[Ce]=F?S.image[Ce].image:S.image[Ce],ye[Ce]=me(S,ye[Ce]);let de=ye[0],Fe=r.convert(S.format,S.colorSpace),Ne=r.convert(S.type),Oe=E(S.internalFormat,Fe,Ne,S.normalized,S.colorSpace),ze=S.isVideoTexture!==!0,st=le.__version===void 0||Me===!0,Y=pe.dataReady,Pe=w(S,de);Ye(n.TEXTURE_CUBE_MAP,S);let rt;if(S.isDepthTexture){if(Oe=_(S.format===As,S.type),st)if(ze)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,Oe,de.width,de.height);else for(let Ce=0;Ce<6;Ce++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Oe,de.width,de.height,0,Fe,Ne,null)}else if(De){ze&&st&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Oe,de.width,de.height);for(let Ce=0;Ce<6;Ce++){rt=ye[Ce].mipmaps;for(let pt=0;pt<rt.length;pt++){let Bt=rt[pt];S.format!==Sn?Fe!==null?ze?Y&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,pt,0,0,Bt.width,Bt.height,Fe,Bt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,pt,Oe,Bt.width,Bt.height,0,Bt.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,pt,0,0,Bt.width,Bt.height,Fe,Ne,Bt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,pt,Oe,Bt.width,Bt.height,0,Fe,Ne,Bt.data)}}}else{if(rt=S.mipmaps,ze&&st){rt.length>0&&Pe++;let Ce=we(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Oe,Ce.width,Ce.height)}for(let Ce=0;Ce<6;Ce++)if(F){ze?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,ye[Ce].width,ye[Ce].height,Fe,Ne,ye[Ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Oe,ye[Ce].width,ye[Ce].height,0,Fe,Ne,ye[Ce].data);for(let pt=0;pt<rt.length;pt++){let kt=rt[pt].image[Ce].image;ze?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,pt+1,0,0,kt.width,kt.height,Fe,Ne,kt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,pt+1,Oe,kt.width,kt.height,0,Fe,Ne,kt.data)}}else{ze?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,Fe,Ne,ye[Ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Oe,Fe,Ne,ye[Ce]);for(let pt=0;pt<rt.length;pt++){let Bt=rt[pt];ze?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,pt+1,0,0,Fe,Ne,Bt.image[Ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,pt+1,Oe,Fe,Ne,Bt.image[Ce])}}}T(S)&&S.mipmapsAutoUpdate===!0&&y(n.TEXTURE_CUBE_MAP),le.__version=pe.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Je(C,S,G,Me,pe,le){let xe=r.convert(G.format,G.colorSpace),se=r.convert(G.type),fe=E(G.internalFormat,xe,se,G.normalized,G.colorSpace),De=i.get(S),F=i.get(G);if(F.__renderTarget=S,!De.__hasExternalTextures){let ye=Math.max(1,S.width>>le),de=Math.max(1,S.height>>le);pe===n.TEXTURE_3D||pe===n.TEXTURE_2D_ARRAY?t.texImage3D(pe,le,fe,ye,de,S.depth,0,xe,se,null):t.texImage2D(pe,le,fe,ye,de,0,xe,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),$(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Me,pe,F.__webglTexture,0,Ee(S)):(pe===n.TEXTURE_2D||pe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Me,pe,F.__webglTexture,le),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(C,S,G){if(n.bindRenderbuffer(n.RENDERBUFFER,C),S.depthBuffer){let Me=S.depthTexture,pe=Me&&Me.isDepthTexture?Me.type:null,le=_(S.stencilBuffer,pe),xe=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;$(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee(S),le,S.width,S.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee(S),le,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,le,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,C)}else{let Me=S.textures;for(let pe=0;pe<Me.length;pe++){let le=Me[pe],xe=r.convert(le.format,le.colorSpace),se=r.convert(le.type),fe=E(le.internalFormat,xe,se,le.normalized,le.colorSpace);$(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee(S),fe,S.width,S.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee(S),fe,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,fe,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function oe(C,S,G){let Me=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let pe=i.get(S.depthTexture);pe.__renderTarget=S;let le=Me?S.depthTexture.image[0]:S.depthTexture.image;(!pe.__webglTexture||le.width!==S.width||le.height!==S.height)&&(le.width=S.width,le.height=S.height,S.depthTexture.needsUpdate=!0),Me?ge(S.depthTexture,0):ue(S.depthTexture,0);let xe=pe.__webglTexture,se=Ee(S),fe=Me?n.TEXTURE_CUBE_MAP_POSITIVE_X+G:n.TEXTURE_2D,De=S.depthTexture.format===As?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===xs)$(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,De,fe,xe,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,De,fe,xe,0);else if(S.depthTexture.format===As)$(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,De,fe,xe,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,De,fe,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ke(C){let S=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let Me=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Me){let pe=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Me.removeEventListener("dispose",pe)};Me.addEventListener("dispose",pe),S.__depthDisposeCallback=pe}S.__boundDepthTexture=Me}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(G)for(let Me=0;Me<6;Me++)oe(S.__webglFramebuffer[Me],C,Me);else C.texture.mipmaps.length>0?oe(S.__webglFramebuffer[0],C,0):oe(S.__webglFramebuffer,C,0);else if(G){S.__webglDepthbuffer=[];for(let Me=0;Me<6;Me++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[Me]),S.__webglDepthbuffer[Me]===void 0)S.__webglDepthbuffer[Me]=n.createRenderbuffer(),ot(S.__webglDepthbuffer[Me],C,!1);else{let pe=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=S.__webglDepthbuffer[Me];n.bindRenderbuffer(n.RENDERBUFFER,le),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,le)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),ot(S.__webglDepthbuffer,C,!1);else{let pe=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,le),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,le)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function je(C,S,G){let Me=i.get(C);S!==void 0&&Je(Me.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&ke(C)}function re(C){let S=C.texture,G=i.get(C),Me=i.get(S);C.addEventListener("dispose",X),D(C);let pe=C.textures,le=C.isWebGLCubeRenderTarget===!0,xe=pe.length>1;if(xe||(Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture()),Me.__version=S.version,o.memory.textures++),le){G.__webglFramebuffer=[];for(let se=0;se<6;se++)if(S.mipmaps.length>0){G.__webglFramebuffer[se]=[];for(let fe=0;fe<S.mipmaps.length;fe++)G.__webglFramebuffer[se][fe]=n.createFramebuffer()}else G.__webglFramebuffer[se]=n.createFramebuffer()}else{if(S.mipmaps.length>0){G.__webglFramebuffer=[];for(let se=0;se<S.mipmaps.length;se++)G.__webglFramebuffer[se]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(xe)for(let se=0,fe=pe.length;se<fe;se++){let De=i.get(pe[se]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&$(C)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let se=0;se<pe.length;se++){let fe=pe[se];G.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[se]);let De=r.convert(fe.format,fe.colorSpace),F=r.convert(fe.type),ye=E(fe.internalFormat,De,F,fe.normalized,fe.colorSpace,C.isXRRenderTarget===!0),de=Ee(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,de,ye,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,G.__webglColorRenderbuffer[se])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),ot(G.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(le){t.bindTexture(n.TEXTURE_CUBE_MAP,Me.__webglTexture),Ye(n.TEXTURE_CUBE_MAP,S);for(let se=0;se<6;se++)if(S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)Je(G.__webglFramebuffer[se][fe],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,fe);else Je(G.__webglFramebuffer[se],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);T(S)?y(n.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(xe){for(let se=0,fe=pe.length;se<fe;se++){let De=pe[se],F=i.get(De),ye=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ye=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ye,F.__webglTexture),Ye(ye,De),Je(G.__webglFramebuffer,C,De,n.COLOR_ATTACHMENT0+se,ye,0),T(De)&&y(ye)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(se=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,Me.__webglTexture),Ye(se,S),S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)Je(G.__webglFramebuffer[fe],C,S,n.COLOR_ATTACHMENT0,se,fe);else Je(G.__webglFramebuffer,C,S,n.COLOR_ATTACHMENT0,se,0);T(S)?y(se):S.mipmaps.length>0&&n.texParameteri(se,n.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&ke(C)}function A(C){let S=C.textures;for(let G=0,Me=S.length;G<Me;G++){let pe=S[G];if(T(pe)&&pe.mipmapsAutoUpdate===!0){let le=M(C),xe=i.get(pe).__webglTexture;t.bindTexture(le,xe),y(le),t.unbindTexture()}}}let J=[];function Q(C){if(C.samples>0){if($(C)===!1){let S=C.textures,G=C.width,Me=C.height,pe=n.COLOR_BUFFER_BIT,le=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(C),se=S.length>1;if(se)for(let De=0;De<S.length;De++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let De=0;De<S.length;De++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(pe|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(pe|=n.STENCIL_BUFFER_BIT)),se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[De]);let F=i.get(S[De]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,F,0)}n.blitFramebuffer(0,0,G,Me,0,0,G,Me,pe,n.NEAREST),l===!0&&(J.length=0,J.push(n.COLOR_ATTACHMENT0+De),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&J.push(le),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),se)for(let De=0;De<S.length;De++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,xe.__webglColorRenderbuffer[De]);let F=i.get(S[De]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,F,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let S=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Ee(C){return Math.min(s.maxSamples,C.samples)}function $(C){let S=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ve(C){let S=o.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function me(C,S){let G=C.colorSpace,Me=C.format,pe=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==zn&&G!==Ri&&(gt.getTransfer(G)===It?(Me!==Sn||pe!==Dn)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):lt("WebGLTextures: Unsupported texture color space:",G)),S}function we(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Re,this.resetTextureUnits=V,this.getTextureUnits=ee,this.setTextureUnits=be,this.setTexture2D=ue,this.setTexture2DArray=B,this.setTexture3D=te,this.setTextureCube=ge,this.rebindTextures=je,this.setupRenderTarget=re,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=$,this.dispose=W}function Fw(n,e){function t(i,s=Ri){let r,o=gt.getTransfer(s);if(i===Dn)return n.UNSIGNED_BYTE;if(i===Xc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===qc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ff)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Bf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Of)return n.BYTE;if(i===Uf)return n.SHORT;if(i===Io)return n.UNSIGNED_SHORT;if(i===Wc)return n.INT;if(i===Ai)return n.UNSIGNED_INT;if(i===Vn)return n.FLOAT;if(i===Yn)return n.HALF_FLOAT;if(i===kf)return n.ALPHA;if(i===zf)return n.RGB;if(i===Sn)return n.RGBA;if(i===xs)return n.DEPTH_COMPONENT;if(i===As)return n.DEPTH_STENCIL;if(i===$c)return n.RED;if(i===Yc)return n.RED_INTEGER;if(i===Qs)return n.RG;if(i===Zc)return n.RG_INTEGER;if(i===Kc)return n.RGBA_INTEGER;if(i===Xa||i===qa||i===$a||i===Ya)if(o===It)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Xa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Xa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$a)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ya)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Jc||i===jc||i===Qc||i===eu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Jc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===eu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===tu||i===nu||i===iu||i===su||i===ru||i===Za||i===ou)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===tu||i===nu)return o===It?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===iu)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===su)return r.COMPRESSED_R11_EAC;if(i===ru)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Za)return r.COMPRESSED_RG11_EAC;if(i===ou)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===au||i===lu||i===cu||i===uu||i===hu||i===fu||i===du||i===pu||i===mu||i===gu||i===xu||i===yu||i===_u||i===vu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===au)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===lu)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===cu)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===uu)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hu)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fu)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===du)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===pu)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===mu)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===gu)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xu)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yu)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_u)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vu)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bu||i===Mu||i===Su)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===bu)return o===It?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Su)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Eu||i===wu||i===Ka||i===Tu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Eu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===wu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Tu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===br?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Bw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kw=`
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

}`,cd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ta(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new vn({vertexShader:Bw,fragmentShader:kw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new li(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ud=class extends Ei{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null,x=typeof XRWebGLBinding<"u",p=new cd,g={},b=t.getContextAttributes(),T=null,y=null,M=[],E=[],_=new $e,w=null,D=null,L=new cn;L.viewport=new St;let k=new cn;k.viewport=new St;let X=[L,k],z=new Bc,N=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ue=M[K];return ue===void 0&&(ue=new yo,M[K]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(K){let ue=M[K];return ue===void 0&&(ue=new yo,M[K]=ue),ue.getGripSpace()},this.getHand=function(K){let ue=M[K];return ue===void 0&&(ue=new yo,M[K]=ue),ue.getHandSpace()};function j(K){let ue=E.indexOf(K.inputSource);if(ue===-1)return;let B=M[ue];B!==void 0&&(B.update(K.inputSource,K.frame,c||o),B.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",_e);for(let K=0;K<M.length;K++){let ue=E[K];ue!==null&&(E[K]=null,M[K].disconnect(ue))}N=null,W=null,p.reset();for(let K in g)delete g[K];if(e.setRenderTarget(T),d=null,f=null,h=null,s=null,y=null,Re.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(_.width,_.height,!1),D!==null){let K=D.camera;K.fov=D.fov,K.zoom=D.zoom,K.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",q),s.addEventListener("inputsourceschange",_e),b.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let B=null,te=null,ge=null;b.depth&&(ge=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,B=b.stencil?As:xs,te=b.stencil?br:Ai);let Se={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Se),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new rn(f.textureWidth,f.textureHeight,{format:Sn,type:Dn,depthTexture:new bs(f.textureWidth,f.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let B={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,B),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new rn(d.framebufferWidth,d.framebufferHeight,{format:Sn,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Re.setContext(s),Re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function _e(K){for(let ue=0;ue<K.removed.length;ue++){let B=K.removed[ue],te=E.indexOf(B);te>=0&&(E[te]=null,M[te].disconnect(B))}for(let ue=0;ue<K.added.length;ue++){let B=K.added[ue],te=E.indexOf(B);if(te===-1){for(let Se=0;Se<M.length;Se++)if(Se>=E.length){E.push(B),te=Se;break}else if(E[Se]===null){E[Se]=B,te=Se;break}if(te===-1)break}let ge=M[te];ge&&ge.connect(B)}}function Z(K,ue){ue===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ue.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ue=K.near,B=K.far;p.texture!==null&&(p.depthNear>0&&(ue=p.depthNear),p.depthFar>0&&(B=p.depthFar)),z.near=k.near=L.near=ue,z.far=k.far=L.far=B,(N!==z.near||W!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),N=z.near,W=z.far),z.layers.mask=K.layers.mask|6,L.layers.mask=z.layers.mask&-5,k.layers.mask=z.layers.mask&-3;let te=K.parent,ge=z.cameras;Z(z,te);for(let Se=0;Se<ge.length;Se++)Z(ge[Se],te);z.projectionMatrix.copy(L.projectionMatrix),z.projectionMatrixInverse.copy(L.projectionMatrixInverse),D===null&&K.isPerspectiveCamera&&(D={camera:K,fov:K.fov,zoom:K.zoom}),V(K,z,te)};function V(K,ue,B){B===null?K.matrix.copy(ue.matrixWorld):(K.matrix.copy(B.matrixWorld),K.matrix.invert(),K.matrix.multiply(ue.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ue.projectionMatrix),K.projectionMatrixInverse.copy(ue.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=mr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(K){return g[K]};let ee=null;function be(K,ue){if(u=ue.getViewerPose(c||o),m=ue,u!==null){let B=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let te=!1;B.length!==z.cameras.length&&(z.cameras.length=0,te=!0);for(let Ue=0;Ue<B.length;Ue++){let Ye=B[Ue],he=null;if(d!==null)he=d.getViewport(Ye);else{let Le=h.getViewSubImage(f,Ye);he=Le.viewport,Ue===0&&(e.setRenderTargetTextures(y,Le.colorTexture,Le.depthStencilTexture),e.setRenderTarget(y))}let Ae=X[Ue];Ae===void 0&&(Ae=new cn,Ae.layers.enable(Ue),Ae.viewport=new St,X[Ue]=Ae),Ae.matrix.fromArray(Ye.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Ye.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(he.x,he.y,he.width,he.height),Ue===0&&(z.matrix.copy(Ae.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),te===!0&&z.cameras.push(Ae)}let ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=i.getBinding();let Ue=h.getDepthInformation(B[0]);Ue&&Ue.isValid&&Ue.texture&&p.init(Ue,s.renderState)}if(ge&&ge.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let Ue=0;Ue<B.length;Ue++){let Ye=B[Ue].camera;if(Ye){let he=g[Ye];he||(he=new Ta,g[Ye]=he);let Ae=h.getCameraImage(Ye);he.sourceTexture=Ae}}}}for(let B=0;B<M.length;B++){let te=E[B],ge=M[B];te!==null&&ge!==void 0&&ge.update(te,ue,c||o)}ee&&ee(K,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),m=null}let Re=new l0;Re.setAnimationLoop(be),this.setAnimationLoop=function(K){ee=K},this.dispose=function(){}}},zw=new at,y0=new ut;y0.set(-1,0,0,0,1,0,0,0,1);function Hw(n,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,Jf(n)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,b,T,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),h(p,g)):g.isMeshPhongMaterial?(r(p,g),u(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&d(p,g,y)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),x(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,b,T):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Mn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Mn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let b=e.get(g),T=b.envMap,y=b.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(zw.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(y0),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,b,T){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*b,p.scale.value=T*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function h(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,b){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Mn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){let b=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Vw(n,e,t,i){let s={},r={};function o(b,T){let y=T.program;i.uniformBlockBinding(b,y,s[b.id])}function a(b,T){let y=s[b.id];y===void 0&&(m(b),y=l(b),s[b.id]=y,b.addEventListener("dispose",p));let M=T.program;i.updateUBOMapping(b,M);let E=e.render.frame;r[b.id]!==E&&(c(b),r[b.id]=E)}function l(b){let T=n.createBuffer(),y=b.__size,M=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,y,M),n.bindBuffer(n.UNIFORM_BUFFER,null),T}function c(b){let T=s[b.id],y=b.uniforms,M=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let E=0,_=y.length;E<_;E++){let w=y[E];if(Array.isArray(w))for(let D=0,L=w.length;D<L;D++)u(w[D],E,D,M);else u(w,E,0,M)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(b,T,y,M){if(f(b,T,y,M)===!0){let E=b.__offset,_=b.value;if(Array.isArray(_)){let w=0;for(let D=0;D<_.length;D++){let L=_[D],k=x(L,!0);h(L,b.__data,w),w+=k.storage/Float32Array.BYTES_PER_ELEMENT}}else h(_,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,E,b.__data)}}function h(b,T,y){typeof b=="number"||typeof b=="boolean"?T[y]=b:b.isMatrix3?(T[y]=b.elements[0],T[y+1]=b.elements[1],T[y+2]=b.elements[2],T[y+3]=0,T[y+4]=b.elements[3],T[y+5]=b.elements[4],T[y+6]=b.elements[5],T[y+7]=0,T[y+8]=b.elements[6],T[y+9]=b.elements[7],T[y+10]=b.elements[8],T[y+11]=0):ArrayBuffer.isView(b)?T.set(b.subarray(0,T.length-y),y):b.toArray(T,y)}function f(b,T,y,M){let E=b.value,_=T+"_"+y;if(Array.isArray(E)){M[_]===void 0&&(M[_]=[]);let w=M[_],D=!1;for(let L=0;L<E.length;L++)d(E[L],w,L)===!0&&(D=!0);return D}return d(E,M,_)}function d(b,T,y){if(T[y]===void 0)return typeof b=="number"||typeof b=="boolean"?T[y]=b:ArrayBuffer.isView(b)?T[y]=b.slice():T[y]=b.clone(),!0;{let M=T[y];if(typeof b=="number"||typeof b=="boolean"){if(M!==b)return T[y]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(M.equals(b)===!1)return M.copy(b),!0}}return!1}function m(b){let T=b.uniforms,y=0,M=16;for(let _=0,w=T.length;_<w;_++){let D=Array.isArray(T[_])?T[_]:[T[_]];for(let L=0,k=D.length;L<k;L++){let X=D[L],z=Array.isArray(X.value)?X.value:[X.value],N=Array.isArray(T[_])||Array.isArray(X.value),W=y;for(let q=0,_e=z.length;q<_e;q++){let Z=z[q],V=x(Z,N),ee=y%M,be=ee%V.boundary,Re=ee+be;y+=be,Re!==0&&M-Re<V.storage&&(y+=M-Re),q===0&&(W=y),y+=V.storage}let j=X.type==="int"?Int32Array:X.type==="uint"?Uint32Array:Float32Array;X.__data=new j((y-W)/Float32Array.BYTES_PER_ELEMENT),X.__offset=W}}let E=y%M;return E>0&&(y+=M-E),b.__size=y,b.__cache={},this}function x(b,T){let y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=16,y.storage=48):b.isMatrix4?(y.boundary=16,y.storage=64):b.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(y.boundary=16,y.storage=b.byteLength):it("WebGLRenderer: Unsupported uniform value type.",b),T===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(b){let T=b.target;T.removeEventListener("dispose",p),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function g(){for(let b in s)n.deleteBuffer(s[b]);s={},r={}}return{bind:o,update:a,dispose:g}}var Gw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),$i=null;function Ww(){return $i===null&&($i=new bo(Gw,16,16,Qs,Yn),$i.name="DFG_LUT",$i.minFilter=qt,$i.magFilter=qt,$i.wrapS=oi,$i.wrapT=oi,$i.generateMipmaps=!1,$i.needsUpdate=!0),$i}var Pu=class{constructor(e={}){let{canvas:t=Dg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Dn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let x=d,p=new Set([Kc,Zc,Yc]),g=new Set([Dn,Ai,Io,br,Xc,qc]),b=new Uint32Array(4),T=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},M=null,E=null,_=[],w=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,k=!1,X=null,z=null,N=null,W=null;this._outputColorSpace=Tt;let j=0,q=0,_e=null,Z=-1,V=null,ee=new St,be=new St,Re=null,K=new Ke(0),ue=0,B=t.width,te=t.height,ge=1,Se=null,qe=null,Ue=new St(0,0,B,te),Ye=new St(0,0,B,te),he=!1,Ae=new Xs,Le=new wc,Be=!1,Ge=!1,Je=new at,ot=new I,oe=new St,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},je=!1;function re(){return _e===null?ge:1}let A=i;function J(R,H){return t.getContext(R,H)}let Q,Ee,$,ve,me,we,C,S,G,Me,pe,le,xe,se,fe,De,F,ye,de,Fe,Ne,Oe,ze;try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),A===null){let H="webgl2";if(A=J(H,R),A===null)throw J(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}st()}catch(R){throw t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),lt("WebGLRenderer: "+R.message),R}function st(){Q=new tE(A),Q.init(),Ne=new Fw(A,Q),Ee=new WS(A,Q,e,Ne),$=new Ow(A,Q),Ee.reversedDepthBuffer&&f&&$.buffers.depth.setReversed(!0),z=A.createFramebuffer(),N=A.createFramebuffer(),W=A.createFramebuffer(),ve=new sE(A),me=new bw,we=new Uw(A,Q,$,me,Ee,Ne,ve),C=new eE(L),S=new ob(A),Oe=new VS(A,S),G=new nE(A,S,ve,Oe),Me=new oE(A,G,S,Oe,ve),ye=new rE(A,Ee,we),fe=new XS(me),pe=new vw(L,C,Q,Ee,Oe,fe),le=new Hw(L,me),xe=new Sw,se=new Cw(Q),F=new HS(L,C,$,Me,m,l),De=new Nw(L,Me,Ee),ze=new Vw(A,ve,Ee,$),de=new GS(A,Q,ve),Fe=new iE(A,Q,ve),ve.programs=pe.programs,L.capabilities=Ee,L.extensions=Q,L.properties=me,L.renderLists=xe,L.shadowMap=De,L.state=$,L.info=ve}x!==Dn&&(D=new lE(x,t.width,t.height,a,s,r));let Y=new ud(L,A);this.xr=Y,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let R=Q.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Q.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(R){R!==void 0&&(ge=R,this.setSize(B,te,!1))},this.getSize=function(R){return R.set(B,te)},this.setSize=function(R,H,ce=!0){if(Y.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,te=H,t.width=Math.floor(R*ge),t.height=Math.floor(H*ge),ce===!0&&(t.style.width=R+"px",t.style.height=H+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(B*ge,te*ge).floor()},this.setDrawingBufferSize=function(R,H,ce){B=R,te=H,ge=ce,t.width=Math.floor(R*ce),t.height=Math.floor(H*ce),this.setViewport(0,0,R,H)},this.setEffects=function(R){if(x===Dn){lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let H=0;H<R.length;H++)if(R[H].isOutputPass===!0){it("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(ee)},this.getViewport=function(R){return R.copy(Ue)},this.setViewport=function(R,H,ce,ne){R.isVector4?Ue.set(R.x,R.y,R.z,R.w):Ue.set(R,H,ce,ne),$.viewport(ee.copy(Ue).multiplyScalar(re()).round())},this.getScissor=function(R){return R.copy(Ye)},this.setScissor=function(R,H,ce,ne){R.isVector4?Ye.set(R.x,R.y,R.z,R.w):Ye.set(R,H,ce,ne),$.scissor(be.copy(Ye).multiplyScalar(re()).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(R){$.setScissorTest(he=R)},this.setOpaqueSort=function(R){Se=R},this.setTransparentSort=function(R){qe=R},this.getClearColor=function(R){return R.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(R=!0,H=!0,ce=!0){let ne=0;if(R){let ie=!1;if(_e!==null){let He=_e.texture.format;ie=p.has(He)}if(ie){let He=_e.texture.type,Qe=g.has(He),Ve=F.getClearColor(),Xe=F.getClearAlpha(),nt=Ve.r,ct=Ve.g,yt=Ve.b;Qe?(b[0]=nt,b[1]=ct,b[2]=yt,b[3]=Xe,A.clearBufferuiv(A.COLOR,0,b)):(T[0]=nt,T[1]=ct,T[2]=yt,T[3]=Xe,A.clearBufferiv(A.COLOR,0,T))}else ne|=A.COLOR_BUFFER_BIT}H&&(ne|=A.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(ne|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&A.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),X=R},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),F.dispose(),xe.dispose(),se.dispose(),we.dispose(),me.dispose(),C.dispose(),Me.dispose(),G.dispose(),Oe.dispose(),ze.dispose(),pe.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Xn),Y.removeEventListener("sessionend",Nr),ss.stop()};function Pe(R){R.preventDefault(),pa("WebGLRenderer: Context Lost."),k=!0}function rt(){pa("WebGLRenderer: Context Restored."),k=!1;let R=ve.autoReset,H=De.enabled,ce=De.autoUpdate,ne=De.needsUpdate,ie=De.type;st(),ve.autoReset=R,De.enabled=H,De.autoUpdate=ce,De.needsUpdate=ne,De.type=ie}function Ce(R){lt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function pt(R){let H=R.target;H.removeEventListener("dispose",pt),Bt(H)}function Bt(R){kt(R),me.remove(R)}function kt(R){let H=me.get(R).programs;H!==void 0&&(H.forEach(function(ce){pe.releaseProgram(ce)}),R.isShaderMaterial&&pe.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,ce,ne,ie,He){H===null&&(H=ke);let Qe=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,Ve=Os(R,H,ce,ne,ie);$.setMaterial(ne,Qe);let Xe=ce.index,nt=1;if(ne.wireframe===!0){if(Xe=G.getWireframeAttribute(ce),Xe===void 0)return;nt=2}let ct=ce.drawRange,yt=ce.attributes.position,et=ct.start*nt,_t=(ct.start+ct.count)*nt;He!==null&&(et=Math.max(et,He.start*nt),_t=Math.min(_t,(He.start+He.count)*nt)),Xe!==null?(et=Math.max(et,0),_t=Math.min(_t,Xe.count)):yt!=null&&(et=Math.max(et,0),_t=Math.min(_t,yt.count));let $t=_t-et;if($t<0||$t===1/0)return;Oe.setup(ie,ne,Ve,ce,Xe);let wt,Et=de;if(Xe!==null&&(wt=S.get(Xe),Et=Fe,Et.setIndex(wt)),ie.isMesh)ne.wireframe===!0?($.setLineWidth(ne.wireframeLinewidth*re()),Et.setMode(A.LINES)):Et.setMode(A.TRIANGLES);else if(ie.isLine){let Yt=ne.linewidth;Yt===void 0&&(Yt=1),$.setLineWidth(Yt*re()),ie.isLineSegments?Et.setMode(A.LINES):ie.isLineLoop?Et.setMode(A.LINE_LOOP):Et.setMode(A.LINE_STRIP)}else ie.isPoints?Et.setMode(A.POINTS):ie.isSprite&&Et.setMode(A.TRIANGLES);if(ie.isBatchedMesh)if(Q.get("WEBGL_multi_draw"))Et.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{let Yt=ie._multiDrawStarts,tt=ie._multiDrawCounts,mn=ie._multiDrawCount,vt=Xe?S.get(Xe).bytesPerElement:1,rs=me.get(ne).currentProgram.getUniforms();for(let tn=0;tn<mn;tn++)rs.setValue(A,"_gl_DrawID",tn),Et.render(Yt[tn]/vt,tt[tn])}else if(ie.isInstancedMesh)Et.renderInstances(et,$t,ie.count);else if(ce.isInstancedBufferGeometry){let Yt=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,tt=Math.min(ce.instanceCount,Yt);Et.renderInstances(et,$t,tt)}else Et.render(et,$t)};function is(R,H,ce,ne){X!==null&&R.isNodeMaterial&&X.setObject(ne,R),Be===!0&&fe.setState(R,ce,!1),R.transparent===!0&&R.side===Lt&&R.forceSinglePass===!1?(R.side=Mn,R.needsUpdate=!0,Di(R,H,ne),R.side=ti,R.needsUpdate=!0,Di(R,H,ne),R.side=Lt):Di(R,H,ne)}this.compile=function(R,H,ce=null){ce===null&&(ce=R),X!==null&&X.renderStart(R,H,ce),E=se.get(ce),E.init(H),w.push(E),ce.traverseVisible(function(ie){ie.isLight&&ie.layers.test(H.layers)&&(E.pushLight(ie),ie.castShadow&&E.pushShadow(ie))}),R!==ce&&R.traverseVisible(function(ie){ie.isLight&&ie.layers.test(H.layers)&&(E.pushLight(ie),ie.castShadow&&E.pushShadow(ie))}),E.setupLights(),X!==null&&X.updateLights(E.state.lightsArray),Ge=this.localClippingEnabled,Be=fe.init(this.clippingPlanes,Ge),Be===!0&&fe.setGlobalState(this.clippingPlanes,H),X!==null&&De.render(E.state.shadowsArray,ce,H);let ne=new Set;return R.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;let He=ie.material;if(He)if(Array.isArray(He))for(let Qe=0;Qe<He.length;Qe++){let Ve=He[Qe];is(Ve,ce,H,ie),ne.add(Ve)}else is(He,ce,H,ie),ne.add(He)}),E=w.pop(),X!==null&&X.renderEnd(),ne},this.compileAsync=function(R,H,ce=null){let ne=this.compile(R,H,ce);return new Promise(ie=>{function He(){if(ne.forEach(function(Qe){let Xe=me.get(Qe).currentProgram;(Xe===void 0||Xe.isReady())&&ne.delete(Qe)}),ne.size===0){ie(R);return}setTimeout(He,10)}Q.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let Li=null;function Wn(R){Li&&Li(R)}function Xn(){ss.stop()}function Nr(){ss.start()}let ss=new l0;ss.setAnimationLoop(Wn),typeof self<"u"&&ss.setContext(self),this.setAnimationLoop=function(R){Li=R,Y.setAnimationLoop(R),R===null?ss.stop():ss.start()},Y.addEventListener("sessionstart",Xn),Y.addEventListener("sessionend",Nr),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;X!==null&&X.renderStart(R,H);let ce=Y.enabled===!0&&Y.isPresenting===!0,ne=D!==null&&(_e===null||ce)&&D.begin(L,_e);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(H),H=Y.getCamera()),R.isScene===!0&&R.onBeforeRender(L,R,H,_e),E=se.get(R,w.length),E.init(H),E.state.textureUnits=we.getTextureUnits(),w.push(E),Je.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),H.isArrayCamera?Le.setFromArrayCamera(H):Ae.setFromProjectionMatrix(Je,ai,H.reversedDepth),Ge=this.localClippingEnabled,Be=fe.init(this.clippingPlanes,Ge),M=xe.get(R,_.length),M.init(),_.push(M),this.info.render.frame++,Y.enabled===!0&&Y.isPresenting===!0){let Qe=L.xr.getDepthSensingMesh();Qe!==null&&Or(Qe,H,-1/0,L.sortObjects)}Or(R,H,0,L.sortObjects),M.finish(),X!==null&&X.updateLights(E.state.lightsArray),L.sortObjects===!0&&M.sort(Se,qe),je=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,je&&F.addToRenderList(M,R),this.info.autoReset===!0&&this.info.reset(),Be===!0&&fe.beginShadows();let ie=E.state.shadowsArray;if(De.render(ie,R,H),Be===!0&&fe.endShadows(),(ne&&D.hasRenderPass())===!1){let Qe=M.opaque,Ve=M.transmissive;if(E.setupLights(),H.isArrayCamera){let Xe=H.cameras;if(Ve.length>0)for(let nt=0,ct=Xe.length;nt<ct;nt++){let yt=Xe[nt];Ur(Qe,Ve,R,yt)}je&&F.render(R);for(let nt=0,ct=Xe.length;nt<ct;nt++){let yt=Xe[nt];Ds(M,R,yt,yt.viewport)}}else Ve.length>0&&Ur(Qe,Ve,R,H),je&&F.render(R),Ds(M,R,H)}_e!==null&&q===0&&(we.updateMultisampleRenderTarget(_e),we.updateRenderTargetMipmap(_e)),ne&&D.end(L),R.isScene===!0&&R.onAfterRender(L,R,H),Oe.resetDefaultState(),Z=-1,V=null,w.pop(),w.length>0?(E=w[w.length-1],we.setTextureUnits(E.state.textureUnits),Be===!0&&fe.setGlobalState(L.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?M=_[_.length-1]:M=null,X!==null&&X.renderEnd()};function Or(R,H,ce,ne){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)ce=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLight)E.pushLight(R),R.castShadow&&E.pushShadow(R);else if(R.isSprite){let Qe=H.isArrayCamera?Le:Ae;if(!R.frustumCulled||R.intersectsFrustum(Qe)){ne&&oe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Je);let Ve=Me.update(R),Xe=R.material;Xe.visible&&M.push(R,Ve,Xe,ce,oe.z,null,H)}}else if(R.isMesh||R.isLine||R.isPoints){let Qe=H.isArrayCamera?Le:Ae;if(!R.frustumCulled||R.intersectsFrustum(Qe)){let Ve=Me.update(R),Xe=R.material;if(ne&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),oe.copy(R.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),oe.copy(Ve.boundingSphere.center)),oe.applyMatrix4(R.matrixWorld).applyMatrix4(Je)),Array.isArray(Xe)){let nt=Ve.groups;for(let ct=0,yt=nt.length;ct<yt;ct++){let et=nt[ct],_t=Xe[et.materialIndex];_t&&_t.visible&&M.push(R,Ve,_t,ce,oe.z,et,H)}}else Xe.visible&&M.push(R,Ve,Xe,ce,oe.z,null,H)}}}let He=R.children;for(let Qe=0,Ve=He.length;Qe<Ve;Qe++)Or(He[Qe],H,ce,ne)}function Ds(R,H,ce,ne){let{opaque:ie,transmissive:He,transparent:Qe}=R;E.setupLightsView(ce),Be===!0&&fe.setGlobalState(L.clippingPlanes,ce),ne&&$.viewport(ee.copy(ne)),ie.length>0&&Fr(ie,H,ce),He.length>0&&Fr(He,H,ce),Qe.length>0&&Fr(Qe,H,ce),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function Ur(R,H,ce,ne){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[ne.id]===void 0){let et=Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[ne.id]=new rn(1,1,{generateMipmaps:!0,type:et?Yn:Dn,minFilter:hi,samples:Math.max(4,Ee.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:gt.workingColorSpace})}let He=E.state.transmissionRenderTarget[ne.id],Qe=ne.viewport||ee;He.setSize(Qe.z*L.transmissionResolutionScale,Qe.w*L.transmissionResolutionScale);let Ve=L.getRenderTarget(),Xe=L.getActiveCubeFace(),nt=L.getActiveMipmapLevel();L.setRenderTarget(He),L.getClearColor(K),ue=L.getClearAlpha(),ue<1&&L.setClearColor(16777215,.5),L.clear(),je&&F.render(ce);let ct=L.toneMapping;L.toneMapping=ui;let yt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),E.setupLightsView(ne),Be===!0&&fe.setGlobalState(L.clippingPlanes,ne),Fr(R,ce,ne),we.updateMultisampleRenderTarget(He),we.updateRenderTargetMipmap(He),Q.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let _t=0,$t=H.length;_t<$t;_t++){let wt=H[_t],{object:Et,geometry:Yt,material:tt,group:mn}=wt;if(tt.side===Lt&&Et.layers.test(ne.layers)){let vt=tt.side;tt.side=Mn,tt.needsUpdate=!0,_l(Et,ce,ne,Yt,tt,mn),tt.side=vt,tt.needsUpdate=!0,et=!0}}et===!0&&(we.updateMultisampleRenderTarget(He),we.updateRenderTargetMipmap(He))}L.setRenderTarget(Ve,Xe,nt),L.setClearColor(K,ue),yt!==void 0&&(ne.viewport=yt),L.toneMapping=ct}function Fr(R,H,ce){let ne=H.isScene===!0?H.overrideMaterial:null;for(let ie=0,He=R.length;ie<He;ie++){let Qe=R[ie],{object:Ve,geometry:Xe,group:nt}=Qe,ct=Qe.material;ct.allowOverride===!0&&ne!==null&&(ct=ne),Ve.layers.test(ce.layers)&&_l(Ve,H,ce,Xe,ct,nt)}}function _l(R,H,ce,ne,ie,He){X!==null&&ie.isNodeMaterial&&X.setObject(R,ie),R.onBeforeRender(L,H,ce,ne,ie,He),R.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ie.onBeforeRender(L,H,ce,ne,R,He),ie.transparent===!0&&ie.side===Lt&&ie.forceSinglePass===!1?(ie.side=Mn,ie.needsUpdate=!0,L.renderBufferDirect(ce,H,ne,ie,R,He),ie.side=ti,ie.needsUpdate=!0,L.renderBufferDirect(ce,H,ne,ie,R,He),ie.side=Lt):L.renderBufferDirect(ce,H,ne,ie,R,He),R.onAfterRender(L,H,ce,ne,ie,He)}function vl(R){let H=0;for(let ce of R)ce.texture!==null&&H++;return H}function Di(R,H,ce){H.isScene!==!0&&(H=ke);let ne=me.get(R),ie=E.state.lights,He=E.state.shadowsArray,Qe=ie.state.version,Ve=pe.getParameters(R,ie.state,He,H,ce,E.state.lightProbeGridArray),Xe=pe.getProgramCacheKey(Ve),nt=ne.programs;ne.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?H.environment:null,ne.fog=H.fog;let ct=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ne.envMap=C.get(R.envMap||ne.environment,ct),ne.envMapRotation=ne.environment!==null&&R.envMap===null?H.environmentRotation:R.envMapRotation,nt===void 0&&(R.addEventListener("dispose",pt),nt=new Map,ne.programs=nt,ne.programVariants=new Map);let yt=nt.get(Xe);if(yt!==void 0){if(ne.currentProgram===yt&&ne.lightsStateVersion===Qe)return qo(R,Ve),yt}else Ve.uniforms=pe.getUniforms(R),X!==null&&R.isNodeMaterial&&X.build(R,ce,Ve),R.onBeforeCompile(Ve,L),yt=pe.acquireProgram(Ve,Xe),nt.set(Xe,yt),ne.uniforms=Ve.uniforms;let et=ne.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(et.clippingPlanes=fe.uniform),qo(R,Ve),ne.needsLights=bl(R),ne.lightsStateVersion=Qe,ne.needsLights&&(et.ambientLightColor.value=ie.state.ambient,et.lightProbe.value=ie.state.probe,et.sunLights.value=ie.state.sun,et.sunLightShadows.value=ie.state.sunShadow,et.directionalLights.value=ie.state.directional,et.directionalLightShadows.value=ie.state.directionalShadow,et.spotLights.value=ie.state.spot,et.spotLightShadows.value=ie.state.spotShadow,et.rectAreaLights.value=ie.state.rectArea,et.ltc_1.value=ie.state.rectAreaLTC1,et.ltc_2.value=ie.state.rectAreaLTC2,et.pointLights.value=ie.state.point,et.pointLightShadows.value=ie.state.pointShadow,et.hemisphereLights.value=ie.state.hemi,et.sunShadowMatrix.value=ie.state.sunShadowMatrix,et.sunShadowCascade.value=ie.state.sunShadowCascade,et.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,et.spotLightMatrix.value=ie.state.spotLightMatrix,et.spotLightMap.value=ie.state.spotLightMap,et.pointShadowMatrix.value=ie.state.pointShadowMatrix),ne.numLightProbeGrids=vl(E.state.lightProbeGridArray),ne.currentProgram=yt,ne.uniformsList=null,yt}function rr(R,H,ce,ne,ie){let He=me.get(R),Qe=He.currentProgram.id+","+ne+","+ie,Ve=He.programVariants.get(Qe);return Ve===void 0?(Ve=Di(R,H,ce),He.programVariants.set(Qe,Ve)):(He.currentProgram=Ve,He.uniformsList=null,He.outputColorSpace=ne,He.toneMapping=ie),Ve}function Ns(R){if(R.uniformsList===null){let H=R.currentProgram.getUniforms();R.uniformsList=Do.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function qo(R,H){let ce=me.get(R);ce.outputColorSpace=H.outputColorSpace,ce.batching=H.batching,ce.batchingColor=H.batchingColor,ce.instancing=H.instancing,ce.instancingColor=H.instancingColor,ce.instancingMorph=H.instancingMorph,ce.skinning=H.skinning,ce.morphTargets=H.morphTargets,ce.morphNormals=H.morphNormals,ce.morphColors=H.morphColors,ce.morphTargetsCount=H.morphTargetsCount,ce.numClippingPlanes=H.numClippingPlanes,ce.numIntersection=H.numClipIntersection,ce.vertexAlphas=H.vertexAlphas,ce.vertexTangents=H.vertexTangents,ce.toneMapping=H.toneMapping}function Os(R,H,ce,ne,ie){H.isScene!==!0&&(H=ke),we.resetTextureUnits();let He=H.fog,Qe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?H.environment:null,Ve=_e===null?L.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:gt.workingColorSpace,Xe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,nt=C.get(ne.envMap||Qe,Xe),ct=ne.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,yt=!!ce.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),et=!!ce.morphAttributes.position,_t=!!ce.morphAttributes.normal,$t=!!ce.morphAttributes.color,wt=ui;ne.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(wt=L.toneMapping);let Et=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Yt=Et!==void 0?Et.length:0,tt=me.get(ne),mn=E.state.lights;if(Be===!0&&(Ge===!0||R!==V)){let Nt=R===V&&ne.id===Z;fe.setState(ne,R,Nt)}let vt=!1,rs=!1;ne.version===tt.__version?tt.needsLights&&tt.lightsStateVersion!==mn.state.version||ie.isBatchedMesh&&tt.batching===!1||!ie.isBatchedMesh&&tt.batching===!0||ie.isBatchedMesh&&tt.batchingColor===!0&&ie._colorsTexture===null||ie.isBatchedMesh&&tt.batchingColor===!1&&ie._colorsTexture!==null||ie.isInstancedMesh&&tt.instancing===!1||!ie.isInstancedMesh&&tt.instancing===!0||ie.isSkinnedMesh&&tt.skinning===!1||!ie.isSkinnedMesh&&tt.skinning===!0||ie.isInstancedMesh&&tt.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&tt.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&tt.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&tt.instancingMorph===!1&&ie.morphTexture!==null||tt.envMap!==nt||ne.fog===!0&&tt.fog!==He||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==fe.numPlanes||tt.numIntersection!==fe.numIntersection)||tt.vertexAlphas!==ct||tt.vertexTangents!==yt||tt.morphTargets!==et||tt.morphNormals!==_t||tt.morphColors!==$t||tt.morphTargetsCount!==Yt||tt.numLightProbeGrids!==vl(E.state.lightProbeGridArray)?vt=!0:(tt.outputColorSpace!==Ve||tt.toneMapping!==wt)&&(rs=!0):(vt=!0,tt.__version=ne.version);let tn=tt.currentProgram;(vt===!0||rs===!0)&&(tn=rs===!0?rr(ne,H,ie,Ve,wt):Di(ne,H,ie),X&&ne.isNodeMaterial&&X.onUpdateProgram(ne,tn,tt));let Us=!1,gi=!1,Ni=!1,bt=tn.getUniforms(),Zt=tt.uniforms;if($.useProgram(tn.program)&&(Us=!0,gi=!0,Ni=!0),ne.id!==Z&&(Z=ne.id,gi=!0),Us||V!==R){$.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),bt.setValue(A,"projectionMatrix",R.projectionMatrix),bt.setValue(A,"viewMatrix",R.matrixWorldInverse);let jt=bt.map.cameraPosition;jt!==void 0&&jt.setValue(A,ot.setFromMatrixPosition(R.matrixWorld)),Ee.logarithmicDepthBuffer&&bt.setValue(A,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&bt.setValue(A,"isOrthographic",R.isOrthographicCamera===!0),V!==R&&(V=R,gi=!0,Ni=!0)}if(tt.needsLights&&(mn.state.sunShadowMap.length>0&&bt.setValue(A,"sunShadowMap",mn.state.sunShadowMap,we),mn.state.directionalShadowMap.length>0&&bt.setValue(A,"directionalShadowMap",mn.state.directionalShadowMap,we),mn.state.spotShadowMap.length>0&&bt.setValue(A,"spotShadowMap",mn.state.spotShadowMap,we),mn.state.pointShadowMap.length>0&&bt.setValue(A,"pointShadowMap",mn.state.pointShadowMap,we)),ie.isSkinnedMesh){bt.setOptional(A,ie,"bindMatrix"),bt.setOptional(A,ie,"bindMatrixInverse");let Nt=ie.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),bt.setValue(A,"boneTexture",Nt.boneTexture,we))}ie.isBatchedMesh&&(bt.setOptional(A,ie,"batchingTexture"),bt.setValue(A,"batchingTexture",ie._matricesTexture,we),bt.setOptional(A,ie,"batchingIdTexture"),bt.setValue(A,"batchingIdTexture",ie._indirectTexture,we),bt.setOptional(A,ie,"batchingColorTexture"),ie._colorsTexture!==null&&bt.setValue(A,"batchingColorTexture",ie._colorsTexture,we));let an=ce.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&ye.update(ie,ce,tn),(gi||tt.receiveShadow!==ie.receiveShadow)&&(tt.receiveShadow=ie.receiveShadow,bt.setValue(A,"receiveShadow",ie.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&H.environment!==null&&(Zt.envMapIntensity.value=H.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=Ww()),gi){if(bt.setValue(A,"toneMappingExposure",L.toneMappingExposure),tt.needsLights&&$o(Zt,Ni),He&&ne.fog===!0&&le.refreshFogUniforms(Zt,He),le.refreshMaterialUniforms(Zt,ne,ge,te,E.state.transmissionRenderTarget[R.id]),tt.needsLights&&tt.numLightProbeGrids>0){let Nt=y,jt=0;for(let Jn of E.state.lightProbeGridArray)Jn.texture!==null&&(Nt.textures[jt]=Jn.texture,Nt.min[jt]=Jn.boundingBox.min,Nt.max[jt]=Jn.boundingBox.max,Nt.resolution[jt]=Jn.resolution,jt++);for(let Jn in Nt)Nt[Jn].length=jt;Zt.probesSH.value=Nt.textures,Zt.probesMin.value=Nt.min,Zt.probesMax.value=Nt.max,Zt.probesResolution.value=Nt.resolution}Do.upload(A,Ns(tt),Zt,we)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Do.upload(A,Ns(tt),Zt,we),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&bt.setValue(A,"center",ie.center),bt.setValue(A,"modelViewMatrix",ie.modelViewMatrix),bt.setValue(A,"normalMatrix",ie.normalMatrix),bt.setValue(A,"modelMatrix",ie.matrixWorld),ne.uniformsGroups!==void 0){let Nt=ne.uniformsGroups;for(let jt=0,Jn=Nt.length;jt<Jn;jt++){let Zo=Nt[jt];ze.update(Zo,tn),ze.bind(Zo,tn)}}return tn}function $o(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.sunLights.needsUpdate=H,R.sunLightShadows.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function bl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return _e},this.setRenderTargetTextures=function(R,H,ce){let ne=me.get(R);ne.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),me.get(R.texture).__webglTexture=H,me.get(R.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ce,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,H){let ce=me.get(R);ce.__webglFramebuffer=H,ce.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,ce=0){_e=R,j=H,q=ce;let ne=null,ie=!1,He=!1;if(R){let Ve=me.get(R);if(Ve.__useDefaultFramebuffer!==void 0){$.bindFramebuffer(A.FRAMEBUFFER,Ve.__webglFramebuffer),ee.copy(R.viewport),be.copy(R.scissor),Re=R.scissorTest,$.viewport(ee),$.scissor(be),$.setScissorTest(Re),Z=-1;return}else if(Ve.__webglFramebuffer===void 0)we.setupRenderTarget(R);else if(Ve.__hasExternalTextures)we.rebindTextures(R,me.get(R.texture).__webglTexture,me.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let ct=R.depthTexture;if(Ve.__boundDepthTexture!==ct){if(ct!==null&&me.has(ct)&&(R.width!==ct.image.width||R.height!==ct.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");we.setupDepthRenderbuffer(R)}}let Xe=R.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(He=!0);let nt=me.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(nt[H])?ne=nt[H][ce]:ne=nt[H],ie=!0):R.samples>0&&we.useMultisampledRTT(R)===!1?ne=me.get(R).__webglMultisampledFramebuffer:Array.isArray(nt)?ne=nt[ce]:ne=nt,ee.copy(R.viewport),be.copy(R.scissor),Re=R.scissorTest}else ee.copy(Ue).multiplyScalar(ge).floor(),be.copy(Ye).multiplyScalar(ge).floor(),Re=he;if(ce!==0&&(ne=z),$.bindFramebuffer(A.FRAMEBUFFER,ne)&&$.drawBuffers(R,ne),$.viewport(ee),$.scissor(be),$.setScissorTest(Re),ie){let Ve=me.get(R.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ve.__webglTexture,ce)}else if(He){let Ve=H;for(let Xe=0;Xe<R.textures.length;Xe++){let nt=me.get(R.textures[Xe]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Xe,nt.__webglTexture,ce,Ve)}}else if(R!==null&&ce!==0){let Ve=me.get(R.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ve.__webglTexture,ce)}Z=-1};function Yo(R){let H=me.get(R);return(H.__readFormat!==R.format||H.__readType!==R.type)&&(H.__readFormat=R.format,H.__readType=R.type,H.__formatReadable=Ee.textureFormatReadable(R.format),H.__typeReadable=Ee.textureTypeReadable(R.type)),H}this.readRenderTargetPixels=function(R,H,ce,ne,ie,He,Qe,Ve=0){if(!(R&&R.isWebGLRenderTarget)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=me.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Qe!==void 0&&(Xe=Xe[Qe],Array.isArray(Xe)&&(Xe=Xe[0])),Xe){$.bindFramebuffer(A.FRAMEBUFFER,Xe);try{let nt=R.textures[Ve],ct=nt.format,yt=nt.type;R.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ve);let et=Yo(nt);if(et.__formatReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(et.__typeReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-ne&&ce>=0&&ce<=R.height-ie&&A.readPixels(H,ce,ne,ie,Ne.convert(ct),Ne.convert(yt),He)}finally{let nt=_e!==null?me.get(_e).__webglFramebuffer:null;$.bindFramebuffer(A.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(R,H,ce,ne,ie,He,Qe,Ve=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=me.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Qe!==void 0&&(Xe=Xe[Qe],Array.isArray(Xe)&&(Xe=Xe[0])),Xe)if(H>=0&&H<=R.width-ne&&ce>=0&&ce<=R.height-ie){$.bindFramebuffer(A.FRAMEBUFFER,Xe);let nt=R.textures[Ve],ct=nt.format,yt=nt.type;R.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ve);let et=Yo(nt);if(et.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(et.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _t=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,_t),A.bufferData(A.PIXEL_PACK_BUFFER,He.byteLength,A.STREAM_READ),A.readPixels(H,ce,ne,ie,Ne.convert(ct),Ne.convert(yt),0),A.bindBuffer(A.PIXEL_PACK_BUFFER,null);let $t=_e!==null?me.get(_e).__webglFramebuffer:null;$.bindFramebuffer(A.FRAMEBUFFER,$t);let wt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Og(A,wt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,_t),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,He),A.bindBuffer(A.PIXEL_PACK_BUFFER,null),A.deleteBuffer(_t),A.deleteSync(wt),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,H=null,ce=0){let ne=Math.pow(2,-ce),ie=Math.floor(R.image.width*ne),He=Math.floor(R.image.height*ne),Qe=H!==null?H.x:0,Ve=H!==null?H.y:0;we.setTexture2D(R,0),A.copyTexSubImage2D(A.TEXTURE_2D,ce,0,0,Qe,Ve,ie,He),$.unbindTexture()},this.copyTextureToTexture=function(R,H,ce=null,ne=null,ie=0,He=0){let Qe,Ve,Xe,nt,ct,yt,et,_t,$t,wt=R.isCompressedTexture?R.mipmaps[He]:R.image;if(ce!==null)Qe=ce.max.x-ce.min.x,Ve=ce.max.y-ce.min.y,Xe=ce.isBox3?ce.max.z-ce.min.z:1,nt=ce.min.x,ct=ce.min.y,yt=ce.isBox3?ce.min.z:0;else{let bt=Math.pow(2,-ie);Qe=Math.floor(wt.width*bt),Ve=Math.floor(wt.height*bt),R.isDataArrayTexture?Xe=wt.depth:R.isData3DTexture?Xe=Math.floor(wt.depth*bt):Xe=1,nt=0,ct=0,yt=0}ne!==null?(et=ne.x,_t=ne.y,$t=ne.z):(et=0,_t=0,$t=0);let Et=Ne.convert(H.format),Yt=Ne.convert(H.type),tt;H.isData3DTexture?(we.setTexture3D(H,0),tt=A.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(we.setTexture2DArray(H,0),tt=A.TEXTURE_2D_ARRAY):(we.setTexture2D(H,0),tt=A.TEXTURE_2D),$.activeTexture(A.TEXTURE0),$.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,H.flipY),$.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),$.pixelStorei(A.UNPACK_ALIGNMENT,H.unpackAlignment);let mn=$.getParameter(A.UNPACK_ROW_LENGTH),vt=$.getParameter(A.UNPACK_IMAGE_HEIGHT),rs=$.getParameter(A.UNPACK_SKIP_PIXELS),tn=$.getParameter(A.UNPACK_SKIP_ROWS),Us=$.getParameter(A.UNPACK_SKIP_IMAGES);$.pixelStorei(A.UNPACK_ROW_LENGTH,wt.width),$.pixelStorei(A.UNPACK_IMAGE_HEIGHT,wt.height),$.pixelStorei(A.UNPACK_SKIP_PIXELS,nt),$.pixelStorei(A.UNPACK_SKIP_ROWS,ct),$.pixelStorei(A.UNPACK_SKIP_IMAGES,yt);let gi=R.isDataArrayTexture||R.isData3DTexture,Ni=H.isDataArrayTexture||H.isData3DTexture;if(R.isDepthTexture){let bt=me.get(R),Zt=me.get(H),an=me.get(bt.__renderTarget),Nt=me.get(Zt.__renderTarget);$.bindFramebuffer(A.READ_FRAMEBUFFER,an.__webglFramebuffer),$.bindFramebuffer(A.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let jt=0;jt<Xe;jt++)gi&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,me.get(R).__webglTexture,ie,yt+jt),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,me.get(H).__webglTexture,He,$t+jt)),A.blitFramebuffer(nt,ct,nt+Qe,ct+Ve,et,_t,et+Qe,_t+Ve,A.DEPTH_BUFFER_BIT,A.NEAREST);$.bindFramebuffer(A.READ_FRAMEBUFFER,null),$.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(ie!==0||R.isRenderTargetTexture||me.has(R)){let bt=me.get(R),Zt=me.get(H);$.bindFramebuffer(A.READ_FRAMEBUFFER,N),$.bindFramebuffer(A.DRAW_FRAMEBUFFER,W);for(let an=0;an<Xe;an++)gi?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,bt.__webglTexture,ie,yt+an):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,bt.__webglTexture,ie),Ni?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Zt.__webglTexture,He,$t+an):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Zt.__webglTexture,He),ie!==0?A.blitFramebuffer(nt,ct,nt+Qe,ct+Ve,et,_t,et+Qe,_t+Ve,A.COLOR_BUFFER_BIT,A.NEAREST):Ni?A.copyTexSubImage3D(tt,He,et,_t,$t+an,nt,ct,Qe,Ve):A.copyTexSubImage2D(tt,He,et,_t,nt,ct,Qe,Ve);$.bindFramebuffer(A.READ_FRAMEBUFFER,null),$.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Ni?R.isDataTexture||R.isData3DTexture?A.texSubImage3D(tt,He,et,_t,$t,Qe,Ve,Xe,Et,Yt,wt.data):H.isCompressedArrayTexture?A.compressedTexSubImage3D(tt,He,et,_t,$t,Qe,Ve,Xe,Et,wt.data):A.texSubImage3D(tt,He,et,_t,$t,Qe,Ve,Xe,Et,Yt,wt):R.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,He,et,_t,Qe,Ve,Et,Yt,wt.data):R.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,He,et,_t,wt.width,wt.height,Et,wt.data):A.texSubImage2D(A.TEXTURE_2D,He,et,_t,Qe,Ve,Et,Yt,wt);$.pixelStorei(A.UNPACK_ROW_LENGTH,mn),$.pixelStorei(A.UNPACK_IMAGE_HEIGHT,vt),$.pixelStorei(A.UNPACK_SKIP_PIXELS,rs),$.pixelStorei(A.UNPACK_SKIP_ROWS,tn),$.pixelStorei(A.UNPACK_SKIP_IMAGES,Us),He===0&&H.generateMipmaps===!0&&H.mipmapsAutoUpdate===!0&&A.generateMipmap(tt),$.unbindTexture()},this.initRenderTarget=function(R){me.get(R).__webglFramebuffer===void 0&&we.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?we.setTextureCube(R,0):R.isData3DTexture?we.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?we.setTexture2DArray(R,0):we.setTexture2D(R,0),$.unbindTexture()},this.resetState=function(){j=0,q=0,_e=null,$.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}};function v0(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Ot;l.morphTargetsRelative=a;let c=0;for(let u=0;u<n.length;++u){let h=n[u],f=0,d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in h.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(h.attributes[m]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in h.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(h.morphAttributes[m].length!==n[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;o[m]===void 0&&(o[m]=[]),o[m].push(h.morphAttributes[m]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(t)m=h.index.count;else if(h.attributes.position!==void 0)m=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,u),c+=m}}if(t){let u=0,h=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let m=0;m<d.count;++m)h.push(d.getX(m)+u);u+=n[f].attributes.position.count}l.setIndex(h)}for(let u in r){let h=_0(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let x=0;x<o[u].length;++x)d.push(o[u][x][f]);let m=_0(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}}return l}function _0(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new Ft(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let f=0,d=u.count;f<d;f++)for(let m=0;m<t;m++){let x=u.getComponent(f,m);a.setComponent(f+h,m,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function hd(n,e){if(e===Hf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Lo||e===Ja){let t=n.getIndex();if(t===null){let r=[],o=n.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);n.setIndex(r),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===Lo)for(let r=1;r<=i;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),n.setIndex(s),n.clearGroups(),n}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function b0(n){let e=new Map,t=new Map,i=n.clone();return M0(n,i,function(s,r){e.set(r,s),t.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),i}function M0(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)M0(n.children[i],e.children[i],t)}var Du=class extends Wi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new yd(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new vd(t)}),this.register(function(t){return new Cd(t)}),this.register(function(t){return new Pd(t)}),this.register(function(t){return new Id(t)}),this.register(function(t){return new Md(t)}),this.register(function(t){return new Sd(t)}),this.register(function(t){return new Ed(t)}),this.register(function(t){return new wd(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new Td(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new Rd(t)}),this.register(function(t){return new Ad(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new Nu(t,xt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Nu(t,xt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ld(t)})}load(e,t,i,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Ts.extractUrlBase(e);o=Ts.resolveURL(c,this.path)}else o=Ts.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new So(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===A0){try{o[xt.KHR_BINARY_GLTF]=new Dd(e)}catch(h){s&&s(h);return}r=JSON.parse(o[xt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new zd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case xt.KHR_MATERIALS_UNLIT:o[h]=new gd;break;case xt.KHR_DRACO_MESH_COMPRESSION:o[h]=new Nd(r,this.dracoLoader);break;case xt.KHR_TEXTURE_TRANSFORM:o[h]=new Od;break;case xt.KHR_MESH_QUANTIZATION:o[h]=new Ud;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function Xw(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function Jt(n,e,t){let i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}var xt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},md=class{constructor(e){this.parser=e,this.name=xt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Ke(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],zn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new $s(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new yr(u),c.distance=h;break;case"spot":c=new Oa(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Yi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}},gd=class{constructor(){this.name=xt.KHR_MATERIALS_UNLIT}getMaterialType(){return on}extendParams(e,t,i){let s=[];e.color=new Ke(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],zn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Tt))}return Promise.all(s)}},xd=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=Jt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},yd=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?hn:null}extendMaterialParams(e,t){let i=Jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new $e(r,r)}return Promise.all(s)}},_d=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?hn:null}extendMaterialParams(e,t){let i=Jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return t.diffuseRoughness=i.diffuseRoughnessFactor!==void 0?i.diffuseRoughnessFactor:0,i.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",i.diffuseRoughnessTexture)),Promise.all(s)}},vd=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?hn:null}extendMaterialParams(e,t){let i=Jt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},bd=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?hn:null}extendMaterialParams(e,t){let i=Jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(s)}},Md=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?hn:null}extendMaterialParams(e,t){let i=Jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(t.sheenColor=new Ke(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],zn)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,Tt)),i.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(s)}},Sd=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?hn:null}extendMaterialParams(e,t){let i=Jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(s)}},Ed=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?hn:null}extendMaterialParams(e,t){let i=Jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let r=i.attenuationColor||[1,1,1];return t.attenuationColor=new Ke().setRGB(r[0],r[1],r[2],zn),Promise.all(s)}},wd=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IOR}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?hn:null}extendMaterialParams(e,t){let i=Jt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Td=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?hn:null}extendMaterialParams(e,t){let i=Jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let r=i.specularColorFactor||[1,1,1];return t.specularColor=new Ke().setRGB(r[0],r[1],r[2],zn),i.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,Tt)),Promise.all(s)}},Ad=class{constructor(e){this.parser=e,this.name=xt.EXT_MATERIALS_BUMP}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?hn:null}extendMaterialParams(e,t){let i=Jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(s)}},Rd=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?hn:null}extendMaterialParams(e,t){let i=Jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(s)}},Cd=class{constructor(e){this.parser=e,this.name=xt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Pd=class{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}},Id=class{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}},Nu=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}},Ld=class{constructor(e){this.name=xt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let c of s.primitives)if(c.mode!==di.TRIANGLES&&c.mode!==di.TRIANGLE_STRIP&&c.mode!==di.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(let m of h){let x=new at,p=new I,g=new Kt,b=new I(1,1,1),T=new gr(m.geometry,m.material,f);for(let M=0;M<f;M++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,M),l.SCALE&&b.fromBufferAttribute(l.SCALE,M),T.setMatrixAt(M,x.compose(p,g,b));let y=null;for(let M in l)if(M==="_COLOR_0"){let E=l[M];T.instanceColor=new ys(E.array,E.itemSize,E.normalized)}else if(M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"){if(y===null){let _=T.geometry;y=new Ot,y.name=_.name;for(let w in _.attributes)y.setAttribute(w,_.attributes[w]);for(let w in _.morphAttributes)y.morphAttributes[w]=_.morphAttributes[w];_.index!==null&&y.setIndex(_.index),y.morphTargetsRelative=_.morphTargetsRelative;for(let w of _.groups)y.addGroup(w.start,w.count,w.materialIndex);_.boundingBox!==null&&(y.boundingBox=_.boundingBox.clone()),_.boundingSphere!==null&&(y.boundingSphere=_.boundingSphere.clone()),y.drawRange.start=_.drawRange.start,y.drawRange.count=_.drawRange.count,y.userData=Object.assign({},_.userData),T.geometry=y}let E=l[M];y.setAttribute(M,new ys(E.array,E.itemSize,E.normalized))}Vt.prototype.copy.call(T,m),this.parser.assignFinalMaterial(T),d.push(T)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},A0="glTF",sl=12,S0={JSON:1313821514,BIN:5130562},Dd=class{constructor(e){this.name=xt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,sl),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==A0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-sl,r=new DataView(e,sl),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===S0.JSON){let c=new Uint8Array(e,sl+o,a);this.content=i.decode(c)}else if(l===S0.BIN){let c=sl+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Nd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=xt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=Bd[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=Bd[u]||u.toLowerCase();if(o[u]!==void 0){let f=i.accessors[e.attributes[u]],d=Uo[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(let m in d.attributes){let x=d.attributes[m],p=l[m];p!==void 0&&(x.normalized=p)}h(d)},a,c,zn,f)})})}},Od=class{constructor(){this.name=xt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let i=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Ud=class{constructor(){this.name=xt.KHR_MESH_QUANTIZATION}},Ou=class extends Gi{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(i-t)/u,f=h*h,d=f*h,m=e*c,x=m-c,p=-2*d+3*f,g=d-f,b=1-p,T=g-f+h;for(let y=0;y!==a;y++){let M=o[x+y+a],E=o[x+y+l]*u,_=o[m+y+a],w=o[m+y]*u;r[y]=b*M+T*E+p*_+g*w}return r}},qw=new Kt,Fd=class extends Ou{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return qw.fromArray(r).normalize().toArray(r),r}},di={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Uo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},E0={9728:Xt,9729:qt,9984:Gc,9985:Po,9986:vr,9987:hi},w0={33071:oi,33648:ho,10497:Si},fd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Bd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},tr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},$w={CUBICSPLINE:void 0,LINEAR:pr,STEP:dr},dd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Yw(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Ln({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ti})),n.DefaultMaterial}function Sr(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Yi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Zw(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(i){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(s){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function Kw(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Jw(n){let e,t=n.extensions&&n.extensions[xt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+pd(t.attributes):e=n.indices+":"+pd(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+pd(n.targets[i]);return e}function pd(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function kd(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function jw(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Qw=new at,zd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Xw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?(this.textureLoader=new Da(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Ba(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new So(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return Sr(r,a,s),Yi(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[xt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){i.load(Ts.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=fd[s.type],a=Uo[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Ft(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=fd[s.type],c=Uo[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,x,p;if(d&&d!==h){let g=Math.floor(f/d),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,T=t.cache.get(b);T||(x=new c(a,g*d,s.count*d/u),T=new Ws(x,d/u),t.cache.add(b,T)),p=new Pn(T,l,f%d/u,m)}else a===null?x=new c(s.count*l):x=new c(a,f,s.count*l),p=new Ft(x,l,m);if(s.sparse!==void 0){let g=fd.SCALAR,b=Uo[s.sparse.indices.componentType],T=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,M=new b(o[1],T,s.sparse.count*g),E=new c(o[2],y,s.sparse.count*l);a!==null&&(p=new Ft(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let _=0,w=M.length;_<w;_++){let D=M[_];if(p.setX(D,E[_*l]),l>=2&&p.setY(D,E[_*l+1]),l>=3&&p.setZ(D,E[_*l+2]),l>=4&&p.setW(D,E[_*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return u.magFilter=E0[f.magFilter]||qt,u.minFilter=E0[f.minFilter]||hi,u.wrapS=w0[f.wrapS]||Si,u.wrapT=w0[f.wrapT]||Si,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Xt&&u.minFilter!==qt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,u;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)u=i.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(d,m){t.parse(f,d,m)})});else{if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(f){c=!0;let d=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(l).then(function(f){return new Promise(function(d,m){let x=d;t.isImageBitmapLoader===!0&&(x=function(p){let g=new un(p);g.needsUpdate=!0,d(g)}),t.load(Ts.resolveURL(f,r.path),x,void 0,m)})})}let h=u.then(function(f){return c===!0&&a.revokeObjectURL(l),Yi(f,o),f.userData.mimeType=o.mimeType||jw(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[xt.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[xt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[xt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new Mo,In.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new _s,In.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Ln}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],o,a={},l=r.extensions||{},c=[];if(l[xt.KHR_MATERIALS_UNLIT]){let h=s[xt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new Ke(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],zn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Tt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Lt);let u=r.alphaMode||dd.OPAQUE;if(u===dd.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===dd.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==on&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new $e(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==on&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==on){let h=r.emissiveFactor;a.emissive=new Ke().setRGB(h[0],h[1],h[2],zn)}return r.emissiveTexture!==void 0&&o!==on&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Tt)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),Yi(h,r),t.associations.set(h,{materials:e}),r.extensions&&Sr(s,h,r),h})}createUniqueName(e){let t=Pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[xt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return T0(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=Jw(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[xt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=T0(new Ot,c,t),c.mode===di.TRIANGLE_STRIP?f=f.then(d=>hd(d,Ja)):c.mode===di.TRIANGLE_FAN&&(f=f.then(d=>hd(d,Lo))),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?Yw(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,m=u.length;d<m;d++){let x=u[d],p=o[d],g,b=c[d];if(p.mode===di.TRIANGLES||p.mode===di.TRIANGLE_STRIP||p.mode===di.TRIANGLE_FAN||p.mode===void 0){let T=r.isSkinnedMesh===!0,y=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");T&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=T&&y?new _a(x,b):new dt(x,b),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(p.mode===di.LINES)g=new ba(x,b);else if(p.mode===di.LINE_STRIP)g=new Hi(x,b);else if(p.mode===di.LINE_LOOP)g=new Ma(x,b);else if(p.mode===di.POINTS)g=new Sa(x,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&Kw(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Yi(g,r),p.extensions&&Sr(s,g,p),t.assignFinalMaterial(g),h.push(g)}for(let d=0,m=h.length;d<m;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&Sr(s,h[0],r),h[0];let f=new zt;r.extensions&&Sr(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,m=h.length;d<m;d++)f.add(h[d]);return f})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new cn(er.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new wi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Yi(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new at;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new va(a,l)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){let d=s.channels[h],m=s.samplers[d.sampler],x=d.target,p=x.node,g=s.parameters!==void 0?s.parameters[m.input]:m.input,b=s.parameters!==void 0?s.parameters[m.output]:m.output;x.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",b)),c.push(m),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],m=h[2],x=h[3],p=h[4],g=[];for(let T=0,y=f.length;T<y;T++){let M=f[T],E=d[T],_=m[T],w=x[T],D=p[T];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let L=i._createAnimationTracks(M,E,_,w,D);if(L)for(let k=0;k<L.length;k++)g.push(L[k])}let b=new La(r,void 0,g);return Yi(b,s),b})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Qw)});for(let d=0,m=h.length;d<m;d++)u.add(h[d]);if(u.userData.pivot!==void 0&&h.length>0){let d=u.userData.pivot,m=h[0];u.pivot=new I().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],m.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new vo:c.length>1?u=new zt:c.length===1?u=c[0]:u=new Vt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Yi(u,r),r.extensions&&Sr(i,u,r),r.matrix!==void 0){let h=new at;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new zt;i.name&&(r.name=s.createUniqueName(i.name)),Yi(r,i),i.extensions&&Sr(t,r,i);let o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++){let f=l[u];f.parent!==null?r.add(b0(f)):r.add(f)}let c=u=>{let h=new Map;for(let[f,d]of s.associations)(f instanceof In||f instanceof un)&&h.set(f,d);return u.traverse(f=>{let d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}tr[r.path]===tr.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(tr[r.path]){case tr.weights:u=Ss;break;case tr.rotation:u=Es;break;case tr.translation:case tr.scale:u=qs;break;default:i.itemSize===1?u=Ss:u=qs;break}let h=s.interpolation!==void 0?$w[s.interpolation]:pr,f=this._getArrayFromAccessor(i);for(let d=0,m=l.length;d<m;d++){let x=new u(l[d]+"."+tr[r.path],t.array,f,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=kd(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof Es?Fd:Ou;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function e1(n,e,t){let i=e.attributes,s=new Gt;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){let u=kd(Uo[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new I,l=new I;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){let x=kd(Uo[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;let o=new _n;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function T0(n,e,t){let i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(let o in i){let a=Bd[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return gt.workingColorSpace!==zn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${gt.workingColorSpace}" not supported.`),Yi(n,e),e1(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Zw(n,e.targets,t):n})}var R0={type:"change"},Vd={type:"start"},P0={type:"end"},Uu=new zi,C0=new yn,t1=Math.cos(70*er.DEG2RAD),pn=new I,Zn=2*Math.PI,At={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Hd=1e-6,Fu=class extends za{constructor(e,t=null){super(e,t),this.state=At.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ks.ROTATE,MIDDLE:Ks.DOLLY,RIGHT:Ks.PAN},this.touches={ONE:Js.ROTATE,TWO:Js.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Kt,this._lastTargetPosition=new I,this._quat=new Kt().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Zs,this._sphericalDelta=new Zs,this._scale=1,this._panOffset=new I,this._rotateStart=new $e,this._rotateEnd=new $e,this._rotateDelta=new $e,this._panStart=new $e,this._panEnd=new $e,this._panDelta=new $e,this._dollyStart=new $e,this._dollyEnd=new $e,this._dollyDelta=new $e,this._dollyDirection=new I,this._mouse=new $e,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=i1.bind(this),this._onPointerDown=n1.bind(this),this._onPointerUp=s1.bind(this),this._onContextMenu=h1.bind(this),this._onMouseWheel=a1.bind(this),this._onKeyDown=l1.bind(this),this._onTouchStart=c1.bind(this),this._onTouchMove=u1.bind(this),this._onMouseDown=r1.bind(this),this._onMouseMove=o1.bind(this),this._interceptControlDown=f1.bind(this),this._interceptControlUp=d1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=At.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(R0),this.update(),this.state=At.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;pn.copy(t).sub(this.target),pn.applyQuaternion(this._quat),this._spherical.setFromVector3(pn),this.autoRotate&&this.state===At.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Zn:i>Math.PI&&(i-=Zn),s<-Math.PI?s+=Zn:s>Math.PI&&(s-=Zn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(pn.setFromSpherical(this._spherical),pn.applyQuaternion(this._quatInverse),t.copy(this.target).add(pn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=pn.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=pn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Uu.origin.copy(this.object.position),Uu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Uu.direction))<t1?this.object.lookAt(this.target):(C0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Uu.intersectPlane(C0,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Hd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Hd||this._lastTargetPosition.distanceToSquared(this.target)>Hd?(this.dispatchEvent(R0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Zn/60*this.autoRotateSpeed*e:Zn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){pn.setFromMatrixColumn(t,0),pn.multiplyScalar(-e),this._panOffset.add(pn)}_panUp(e,t){this.screenSpacePanning===!0?pn.setFromMatrixColumn(t,1):(pn.setFromMatrixColumn(t,0),pn.crossVectors(this.object.up,pn)),pn.multiplyScalar(e),this._panOffset.add(pn)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;pn.copy(s).sub(this.target);let r=pn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new $e,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function n1(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function i1(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function s1(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(P0),this.state=At.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function r1(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ks.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=At.DOLLY;break;case Ks.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=At.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=At.ROTATE}break;case Ks.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=At.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=At.PAN}break;default:this.state=At.NONE}this.state!==At.NONE&&this.dispatchEvent(Vd)}function o1(n){switch(this.state){case At.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case At.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case At.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function a1(n){this.enabled===!1||this.enableZoom===!1||this.state!==At.NONE||(n.preventDefault(),this.dispatchEvent(Vd),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(P0))}function l1(n){this.enabled!==!1&&this._handleKeyDown(n)}function c1(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Js.ROTATE:if(this.enableRotate===!1){this.state=At.NONE;break}this._handleTouchStartRotate(n),this.state=At.TOUCH_ROTATE;break;case Js.PAN:if(this.enablePan===!1){this.state=At.NONE;break}this._handleTouchStartPan(n),this.state=At.TOUCH_PAN;break;default:this.state=At.NONE}break;case 2:switch(this.touches.TWO){case Js.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=At.TOUCH_DOLLY_PAN;break;case Js.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=At.TOUCH_DOLLY_ROTATE;break;default:this.state=At.NONE}break;default:this.state=At.NONE}this.state!==At.NONE&&this.dispatchEvent(Vd)}function u1(n){switch(this._trackPointer(n),this.state){case At.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case At.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case At.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case At.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=At.NONE}}function h1(n){this.enabled!==!1&&n.preventDefault()}function f1(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function d1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Bu=class extends Hn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Vi;e.deleteAttribute("uv");let t=new Ln({side:Mn}),i=new Ln,s=new yr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new dt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new gr(e,i,6),a=new Vt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new dt(e,Fo(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new dt(e,Fo(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new dt(e,Fo(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new dt(e,Fo(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let f=new dt(e,Fo(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new dt(e,Fo(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Fo(n){return new Pa({color:0,emissive:16777215,emissiveIntensity:n})}var On=Uint8Array,ni=Uint16Array,Yd=Int32Array,Zd=new On([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Kd=new On([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),I0=new On([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),F0=function(n,e){for(var t=new ni(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var s=new Yd(t[30]),i=1;i<30;++i)for(var r=t[i];r<t[i+1];++r)s[r]=r-t[i]<<5|i;return{b:t,r:s}},B0=F0(Zd,2),p1=B0.b,Wd=B0.r;p1[28]=258,Wd[258]=28;var k0=F0(Kd,0),D2=k0.b,L0=k0.r,Xd=new ni(32768);for(Rt=0;Rt<32768;++Rt)Rs=(Rt&43690)>>1|(Rt&21845)<<1,Rs=(Rs&52428)>>2|(Rs&13107)<<2,Rs=(Rs&61680)>>4|(Rs&3855)<<4,Xd[Rt]=((Rs&65280)>>8|(Rs&255)<<8)>>1;var Rs,Rt,al=(function(n,e,t){for(var i=n.length,s=0,r=new ni(e);s<i;++s)n[s]&&++r[n[s]-1];var o=new ni(e);for(s=1;s<e;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(t){a=new ni(1<<e);var l=15-e;for(s=0;s<i;++s)if(n[s])for(var c=s<<4|n[s],u=e-n[s],h=o[n[s]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[Xd[h]>>l]=c}else for(a=new ni(i),s=0;s<i;++s)n[s]&&(a[s]=Xd[o[n[s]-1]++]>>15-n[s]);return a}),Er=new On(288);for(Rt=0;Rt<144;++Rt)Er[Rt]=8;var Rt;for(Rt=144;Rt<256;++Rt)Er[Rt]=9;var Rt;for(Rt=256;Rt<280;++Rt)Er[Rt]=7;var Rt;for(Rt=280;Rt<288;++Rt)Er[Rt]=8;var Rt,ku=new On(32);for(Rt=0;Rt<32;++Rt)ku[Rt]=5;var Rt,m1=al(Er,9,0);var g1=al(ku,5,0);var z0=function(n){return(n+7)/8|0},H0=function(n,e,t){return(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length),new On(n.subarray(e,t))};var x1=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],zu=function(n,e,t){var i=new Error(e||x1[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,zu),!t)throw i;return i};var Cs=function(n,e,t){t<<=e&7;var i=e/8|0;n[i]|=t,n[i+1]|=t>>8},rl=function(n,e,t){t<<=e&7;var i=e/8|0;n[i]|=t,n[i+1]|=t>>8,n[i+2]|=t>>16},Gd=function(n,e){for(var t=[],i=0;i<n.length;++i)n[i]&&t.push({s:i,f:n[i]});var s=t.length,r=t.slice();if(!s)return{t:G0,l:0};if(s==1){var o=new On(t[0].s+1);return o[t[0].s]=1,{t:o,l:1}}t.sort(function(M,E){return M.f-E.f}),t.push({s:-1,f:25001});var a=t[0],l=t[1],c=0,u=1,h=2;for(t[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=s-1;)a=t[t[c].f<t[h].f?c++:h++],l=t[c!=u&&t[c].f<t[h].f?c++:h++],t[u++]={s:-1,f:a.f+l.f,l:a,r:l};for(var f=r[0].s,i=1;i<s;++i)r[i].s>f&&(f=r[i].s);var d=new ni(f+1),m=qd(t[u-1],d,0);if(m>e){var i=0,x=0,p=m-e,g=1<<p;for(r.sort(function(E,_){return d[_.s]-d[E.s]||E.f-_.f});i<s;++i){var b=r[i].s;if(d[b]>e)x+=g-(1<<m-d[b]),d[b]=e;else break}for(x>>=p;x>0;){var T=r[i].s;d[T]<e?x-=1<<e-d[T]++-1:++i}for(;i>=0&&x;--i){var y=r[i].s;d[y]==e&&(--d[y],++x)}m=e}return{t:new On(d),l:m}},qd=function(n,e,t){return n.s==-1?Math.max(qd(n.l,e,t+1),qd(n.r,e,t+1)):e[n.s]=t},D0=function(n){for(var e=n.length;e&&!n[--e];);for(var t=new ni(++e),i=0,s=n[0],r=1,o=function(l){t[i++]=l},a=1;a<=e;++a)if(n[a]==s&&a!=e)++r;else{if(!s&&r>2){for(;r>138;r-=138)o(32754);r>2&&(o(r>10?r-11<<5|28690:r-3<<5|12305),r=0)}else if(r>3){for(o(s),--r;r>6;r-=6)o(8304);r>2&&(o(r-3<<5|8208),r=0)}for(;r--;)o(s);r=1,s=n[a]}return{c:t.subarray(0,i),n:e}},ol=function(n,e){for(var t=0,i=0;i<e.length;++i)t+=n[i]*e[i];return t},V0=function(n,e,t){var i=t.length,s=z0(e+2);n[s]=i&255,n[s+1]=i>>8,n[s+2]=n[s]^255,n[s+3]=n[s+1]^255;for(var r=0;r<i;++r)n[s+r+4]=t[r];return(s+4+i)*8},N0=function(n,e,t,i,s,r,o,a,l,c,u){Cs(e,u++,t),++s[256];for(var h=Gd(s,15),f=h.t,d=h.l,m=Gd(r,15),x=m.t,p=m.l,g=D0(f),b=g.c,T=g.n,y=D0(x),M=y.c,E=y.n,_=new ni(19),w=0;w<b.length;++w)++_[b[w]&31];for(var w=0;w<M.length;++w)++_[M[w]&31];for(var D=Gd(_,7),L=D.t,k=D.l,X=19;X>4&&!L[I0[X-1]];--X);var z=c+5<<3,N=ol(s,Er)+ol(r,ku)+o,W=ol(s,f)+ol(r,x)+o+14+3*X+ol(_,L)+2*_[16]+3*_[17]+7*_[18];if(l>=0&&z<=N&&z<=W)return V0(e,u,n.subarray(l,l+c));var j,q,_e,Z;if(Cs(e,u,1+(W<N)),u+=2,W<N){j=al(f,d,0),q=f,_e=al(x,p,0),Z=x;var V=al(L,k,0);Cs(e,u,T-257),Cs(e,u+5,E-1),Cs(e,u+10,X-4),u+=14;for(var w=0;w<X;++w)Cs(e,u+3*w,L[I0[w]]);u+=3*X;for(var ee=[b,M],be=0;be<2;++be)for(var Re=ee[be],w=0;w<Re.length;++w){var K=Re[w]&31;Cs(e,u,V[K]),u+=L[K],K>15&&(Cs(e,u,Re[w]>>5&127),u+=Re[w]>>12)}}else j=m1,q=Er,_e=g1,Z=ku;for(var w=0;w<a;++w){var ue=i[w];if(ue>255){var K=ue>>18&31;rl(e,u,j[K+257]),u+=q[K+257],K>7&&(Cs(e,u,ue>>23&31),u+=Zd[K]);var B=ue&31;rl(e,u,_e[B]),u+=Z[B],B>3&&(rl(e,u,ue>>5&8191),u+=Kd[B])}else rl(e,u,j[ue]),u+=q[ue]}return rl(e,u,j[256]),u+q[256]},y1=new Yd([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),G0=new On(0),_1=function(n,e,t,i,s,r){var o=r.z||n.length,a=new On(i+o+5*(1+Math.ceil(o/7e3))+s),l=a.subarray(i,a.length-s),c=r.l,u=(r.r||0)&7;if(e){u&&(l[0]=r.r>>3);for(var h=y1[e-1],f=h>>13,d=h&8191,m=(1<<t)-1,x=r.p||new ni(32768),p=r.h||new ni(m+1),g=Math.ceil(t/3),b=2*g,T=function(Ae){return(n[Ae]^n[Ae+1]<<g^n[Ae+2]<<b)&m},y=new Yd(25e3),M=new ni(288),E=new ni(32),_=0,w=0,D=r.i||0,L=0,k=r.w||0,X=0;D+2<o;++D){var z=T(D),N=D&32767,W=p[z];if(x[N]=W,p[z]=N,k<=D){var j=o-D;if((_>7e3||L>24576)&&(j>423||!c)){u=N0(n,l,0,y,M,E,w,L,X,D-X,u),L=_=w=0,X=D;for(var q=0;q<286;++q)M[q]=0;for(var q=0;q<30;++q)E[q]=0}var _e=2,Z=0,V=d,ee=N-W&32767;if(j>2&&z==T(D-ee))for(var be=Math.min(f,j)-1,Re=Math.min(32767,D),K=Math.min(258,j);ee<=Re&&--V&&N!=W;){if(n[D+_e]==n[D+_e-ee]){for(var ue=0;ue<K&&n[D+ue]==n[D+ue-ee];++ue);if(ue>_e){if(_e=ue,Z=ee,ue>be)break;for(var B=Math.min(ee,ue-2),te=0,q=0;q<B;++q){var ge=D-ee+q&32767,Se=x[ge],qe=ge-Se&32767;qe>te&&(te=qe,W=ge)}}}N=W,W=x[N],ee+=N-W&32767}if(Z){y[L++]=268435456|Wd[_e]<<18|L0[Z];var Ue=Wd[_e]&31,Ye=L0[Z]&31;w+=Zd[Ue]+Kd[Ye],++M[257+Ue],++E[Ye],k=D+_e,++_}else y[L++]=n[D],++M[n[D]]}}for(D=Math.max(D,k);D<o;++D)y[L++]=n[D],++M[n[D]];u=N0(n,l,c,y,M,E,w,L,X,D-X,u),c||(r.r=u&7|l[u/8|0]<<3,u-=7,r.h=p,r.p=x,r.i=D,r.w=k)}else{for(var D=r.w||0;D<o+c;D+=65535){var he=D+65535;he>=o&&(l[u/8|0]=c,he=o),u=V0(l,u+1,n.subarray(D,he))}r.i=o}return H0(a,0,i+z0(u)+s)},v1=(function(){for(var n=new Int32Array(256),e=0;e<256;++e){for(var t=e,i=9;--i;)t=(t&1&&-306674912)^t>>>1;n[e]=t}return n})(),b1=function(){var n=-1;return{p:function(e){for(var t=n,i=0;i<e.length;++i)t=v1[t&255^e[i]]^t>>>8;n=t},d:function(){return~n}}};var M1=function(n,e,t,i,s){if(!s&&(s={l:1},e.dictionary)){var r=e.dictionary.subarray(-32768),o=new On(r.length+n.length);o.set(r),o.set(n,r.length),n=o,s.w=r.length}return _1(n,e.level==null?6:e.level,e.mem==null?s.l?Math.ceil(Math.max(8,Math.min(13,Math.log(n.length)))*1.5):20:12+e.mem,t,i,s)},W0=function(n,e){var t={};for(var i in n)t[i]=n[i];for(var i in e)t[i]=e[i];return t};var En=function(n,e,t){for(;t;++e)n[e]=t,t>>>=8};function S1(n,e){return M1(n,e||{},0,0)}var X0=function(n,e,t,i){for(var s in n){var r=n[s],o=e+s,a=i;Array.isArray(r)&&(a=W0(i,r[1]),r=r[0]),ArrayBuffer.isView(r)?t[o]=[r,a]:(t[o+="/"]=[new On(0),a],X0(r,o,t,i))}},O0=typeof TextEncoder<"u"&&new TextEncoder,E1=typeof TextDecoder<"u"&&new TextDecoder,w1=0;try{E1.decode(G0,{stream:!0}),w1=1}catch{}function ll(n,e){if(e){for(var t=new On(n.length),i=0;i<n.length;++i)t[i]=n.charCodeAt(i);return t}if(O0)return O0.encode(n);for(var s=n.length,r=new On(n.length+(n.length>>1)),o=0,a=function(u){r[o++]=u},i=0;i<s;++i){if(o+5>r.length){var l=new On(o+8+(s-i<<1));l.set(r),r=l}var c=n.charCodeAt(i);c<128||e?a(c):c<2048?(a(192|c>>6),a(128|c&63)):c>55295&&c<57344?(c=65536+(c&1047552)|n.charCodeAt(++i)&1023,a(240|c>>18),a(128|c>>12&63),a(128|c>>6&63),a(128|c&63)):(a(224|c>>12),a(128|c>>6&63),a(128|c&63))}return H0(r,0,o)}var $d=function(n){var e=0;if(n)for(var t in n){var i=n[t].length;i>65535&&zu(9),e+=i+4}return e},U0=function(n,e,t,i,s,r,o,a){var l=i.length,c=t.extra,u=a&&a.length,h=$d(c);En(n,e,o!=null?33639248:67324752),e+=4,o!=null&&(n[e++]=20,n[e++]=t.os),n[e]=20,e+=2,n[e++]=t.flag<<1|(r<0&&8),n[e++]=s&&8,n[e++]=t.compression&255,n[e++]=t.compression>>8;var f=new Date(t.mtime==null?Date.now():t.mtime),d=f.getFullYear()-1980;if((d<0||d>119)&&zu(10),En(n,e,d<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),e+=4,r!=-1&&(En(n,e,t.crc),En(n,e+4,r<0?-r-2:r),En(n,e+8,t.size)),En(n,e+12,l),En(n,e+14,h),e+=16,o!=null&&(En(n,e,u),En(n,e+6,t.attrs),En(n,e+10,o),e+=14),n.set(i,e),e+=l,h)for(var m in c){var x=c[m],p=x.length;En(n,e,+m),En(n,e+2,p),n.set(x,e+4),e+=4+p}return u&&(n.set(a,e),e+=u),e},T1=function(n,e,t,i,s){En(n,e,101010256),En(n,e+8,t),En(n,e+10,t),En(n,e+12,i),En(n,e+16,s)};function q0(n,e){e||(e={});var t={},i=[];X0(n,"",t,e);var s=0,r=0;for(var o in t){var a=t[o],l=a[0],c=a[1],u=c.level==0?0:8,h=ll(o),f=h.length,d=c.comment,m=d&&ll(d),x=m&&m.length,p=$d(c.extra);f>65535&&zu(11);var g=u?S1(l,c):l,b=g.length,T=b1();T.p(l),i.push(W0(c,{size:l.length,crc:T.d(),c:g,f:h,m,u:f!=o.length||m&&d.length!=x,o:s,compression:u})),s+=30+f+p+b,r+=76+2*(f+p)+(x||0)+b}for(var y=new On(r+22),M=s,E=r-s,_=0;_<i.length;++_){var h=i[_];U0(y,h.o,h,h.f,h.u,h.c.length);var w=30+h.f.length+$d(h.extra);y.set(h.c,h.o+w),U0(y,s,h,h.f,h.u,h.c.length,h.o,h.m),s+=16+w+(h.m?h.m.length:0)}return T1(y,s,i.length,E,M),y}var Un=class{constructor(e,t="",i=[],s=[]){this.name=e,this.type=t,this.metadata=i,this.properties=s,this.children=[]}addMetadata(e,t){this.metadata.push({key:e,value:t})}addProperty(e,t=[]){this.properties.push({property:e,metadata:t})}addChild(e){this.children.push(e)}toString(e=0){let t="	".repeat(e),i=this.metadata.map(u=>{let h=u.key,f=u.value;if(Array.isArray(f)){let d=[];return d.push(`${h} = {`),f.forEach(m=>{d.push(`${t}		${m}`)}),d.push(`${t}	}`),d.join(`
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
${t}}`}},Vu=class{constructor(){this.textureUtils=null}setTextureUtils(e){this.textureUtils=e}parse(e,t,i,s){this.parseAsync(e,s).then(t).catch(i)}async parseAsync(e,t={}){t=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},includeAnchoringProperties:!0,onlyVisible:!0,quickLookCompatible:!1,maxTextureSize:1024,animations:[],animationFrameRate:60},t);let i=new Set,s={},r="model.usda";s[r]=null;let o=R1(e,t.animations);t.animationTracks=o;let a=new Un("Root","Xform"),l=new Un("Scenes","Scope");l.addMetadata("kind",'"sceneLibrary"'),a.addChild(l);let c="Scene",u=new Un(c,"Xform");u.addMetadata("customData",["bool preliminary_collidesWithEnvironment = 0",`string sceneName = "${c}"`]),u.addMetadata("sceneName",`"${c}"`),t.includeAnchoringProperties&&(u.addProperty(`token preliminary:anchoring:type = "${t.ar.anchoring.type}"`),u.addProperty(`token preliminary:planeAnchoring:alignment = "${t.ar.planeAnchoring.alignment}"`)),l.addChild(u);let h,f={},d={};e.isScene?Q0(e,u,f,i,s,t):ex(e,u,f,i,s,t);let m=F1(f,d,t.quickLookCompatible),x=o.size>0?{fps:t.animationFrameRate,endTimeCode:C1(t.animations)*t.animationFrameRate}:null;h=j0(x)+`
`+a.toString()+`

`+m.toString(),s[r]=ll(h),h=null;for(let g in d){let b=d[g];if(b.isCompressedTexture===!0){if(this.textureUtils===null)throw new Error("THREE.USDZExporter: setTextureUtils() must be called to process compressed textures.");b=await this.textureUtils.decompress(b)}let T=A1(b.image,b.flipY,t.maxTextureSize),y=b.userData.mimeType==="image/jpeg"?"image/jpeg":"image/png",M=await new Promise(E=>T.toBlob(E,y));s[`textures/Texture_${g}.${J0(b)}`]=new Uint8Array(await M.arrayBuffer())}let p=0;for(let g in s){let b=s[g],T=34+g.length;p+=T;let y=p&63;if(y!==4){let M=64-y,E=new Uint8Array(M);s[g]=[b,{extra:{12345:E}}]}p=b.length}return q0(s,{level:0,mtime:new Date})}};function K0(n,e){let t=n.name;return t=t.replace(/[^A-Za-z0-9_]/g,""),/^[0-9]/.test(t)&&(t="_"+t),t===""&&(n.isCamera?t="Camera":t="Object"),e.has(t)&&(t=t+"_"+n.id),e.add(t),t}function J0(n){return n.userData.mimeType==="image/jpeg"?"jpg":"png"}function A1(n,e,t){if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&n instanceof ImageBitmap){let i=t/Math.max(n.width,n.height),s=document.createElement("canvas");s.width=n.width*Math.min(1,i),s.height=n.height*Math.min(1,i);let r=s.getContext("2d");return e===!0&&(r.translate(0,s.height),r.scale(1,-1)),r.drawImage(n,0,0,s.width,s.height),s}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}var Mt=7;function j0(n=null){return`#usda 1.0
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
`}function R1(n,e){let t=new Map;for(let i=0;i<e.length;i++){let s=e[i];for(let r=0;r<s.tracks.length;r++){let o=s.tracks[r],a=Pt.parseTrackName(o.name),l=Pt.findNode(n,a.nodeName);if(l==null)continue;let c=a.propertyName;if(c!=="position"&&c!=="quaternion"&&c!=="scale")continue;let u=t.get(l);u===void 0&&(u={},t.set(l,u)),u[c]=o}}return t}function C1(n){let e=0;for(let t=0;t<n.length;t++)n[t].duration>e&&(e=n[t].duration);return e}function $0(n,e,t,i){let s=t.times,r=t.values,o=[];for(let a=0;a<s.length;a++){let l=a*3;o.push(`${(s[a]*i).toPrecision(Mt)}: (${r[l].toPrecision(Mt)}, ${r[l+1].toPrecision(Mt)}, ${r[l+2].toPrecision(Mt)})`)}return`${e} ${n}.timeSamples = {
	${o.join(`,
	`)},
}`}function P1(n,e){let t=n.times,i=n.values,s=[];for(let r=0;r<t.length;r++){let o=r*4;s.push(`${(t[r]*e).toPrecision(Mt)}: (${i[o+3].toPrecision(Mt)}, ${i[o].toPrecision(Mt)}, ${i[o+1].toPrecision(Mt)}, ${i[o+2].toPrecision(Mt)})`)}return`quatf xformOp:orient.timeSamples = {
	${s.join(`,
	`)},
}`}function Q0(n,e,t,i,s,r){for(let o=0,a=n.children.length;o<a;o++)ex(n.children[o],e,t,i,s,r)}function ex(n,e,t,i,s,r){if(n.visible===!1&&r.onlyVisible===!0)return;let o;if(n.isMesh){let a=n.geometry,l=Array.isArray(n.material),c=l?n.material:[n.material];for(let h=0;h<c.length;h++){let f=c[h];f.isMeshStandardMaterial||console.warn("THREE.USDZExporter: Use MeshStandardMaterial for best results."),f.uuid in t||(t[f.uuid]=f)}let u=c.map(h=>t[h.uuid]);if(l===!1){let h=`geometries/Geometry_${a.id}.usda`;if(!(h in s)){let f=D1(a);s[h]=ll(j0()+`
`+f.toString())}}o=I1(n,a,u,i,r)}else n.isCamera?o=z1(n,i,r):o=nx(n,i,r);e.addChild(o),Q0(n,o,t,i,s,r)}function tx(n,e,t){let i=t.animationTracks.get(e),s=e.pivot!==null;if(!s&&i===void 0){let c=L1(e.matrix);n.addProperty(`matrix4d xformOp:transform = ${c}`),n.addProperty('uniform token[] xformOpOrder = ["xformOp:transform"]');return}let r=t.animationFrameRate,o=e.position,a=e.quaternion,l=e.scale;if(i!==void 0&&i.position!==void 0?n.addProperty($0("xformOp:translate","float3",i.position,r)):n.addProperty(`float3 xformOp:translate = (${o.x.toPrecision(Mt)}, ${o.y.toPrecision(Mt)}, ${o.z.toPrecision(Mt)})`),s){let c=e.pivot;n.addProperty(`float3 xformOp:translate:pivot = (${c.x.toPrecision(Mt)}, ${c.y.toPrecision(Mt)}, ${c.z.toPrecision(Mt)})`)}i!==void 0&&i.quaternion!==void 0?n.addProperty(P1(i.quaternion,r)):n.addProperty(`quatf xformOp:orient = (${a.w.toPrecision(Mt)}, ${a.x.toPrecision(Mt)}, ${a.y.toPrecision(Mt)}, ${a.z.toPrecision(Mt)})`),i!==void 0&&i.scale!==void 0?n.addProperty($0("xformOp:scale","float3",i.scale,r)):n.addProperty(`float3 xformOp:scale = (${l.x.toPrecision(Mt)}, ${l.y.toPrecision(Mt)}, ${l.z.toPrecision(Mt)})`),s?n.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:translate:pivot", "xformOp:orient", "xformOp:scale", "!invert!xformOp:translate:pivot"]'):n.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:orient", "xformOp:scale"]')}function nx(n,e,t){let i=K0(n,e);n.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",n);let s=new Un(i,"Xform");return tx(s,n,t),s}function I1(n,e,t,i,s){let r=nx(n,i,s);return t.length===1?(r.addMetadata("prepend references",`@./geometries/Geometry_${e.id}.usda@</Geometry>`),r.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),r.addProperty(`rel material:binding = </Materials/Material_${t[0].id}>`)):r.addChild(ix(e,t)),r}function L1(n){let e=n.elements;return`( ${Hu(e,0)}, ${Hu(e,4)}, ${Hu(e,8)}, ${Hu(e,12)} )`}function Hu(n,e){return`(${n[e+0]}, ${n[e+1]}, ${n[e+2]}, ${n[e+3]})`}function D1(n){let e=new Un("Geometry"),t=ix(n);return e.addChild(t),e}function ix(n,e=null){let t="Geometry",i=n.attributes,s=i.position.count,r=new Un(t,"Mesh");r.addProperty(`int[] faceVertexCounts = [${N1(n)}]`),r.addProperty(`int[] faceVertexIndices = [${O1(n)}]`),r.addProperty(`normal3f[] normals = [${Jd(i.normal,s)}]`,['interpolation = "vertex"']),r.addProperty(`point3f[] points = [${Jd(i.position,s)}]`);for(let a=0;a<4;a++){let l=a>0?a:"",c=i["uv"+l];c!==void 0&&r.addProperty(`texCoord2f[] primvars:st${l} = [${U1(c)}]`,['interpolation = "vertex"'])}let o=i.color;if(o!==void 0&&r.addProperty(`color3f[] primvars:displayColor = [${Jd(o,s)}]`,['interpolation = "vertex"']),r.addProperty('uniform token subdivisionScheme = "none"'),e!==null){let a=n.groups,l=(n.index!==null?n.index.count:i.position.count)/3;for(let c=0;c<a.length;c++){let u=a[c],h=e[u.materialIndex];if(h===void 0)continue;let f=Math.floor(u.start/3),d=Math.min(f+Math.floor(u.count/3),l),m=[];for(let p=f;p<d;p++)m.push(p);let x=new Un(`subset_${c}`,"GeomSubset");x.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),x.addProperty('uniform token elementType = "face"'),x.addProperty('uniform token familyName = "materialBind"'),x.addProperty(`int[] indices = [${m.join(", ")}]`),x.addProperty(`rel material:binding = </Materials/Material_${h.id}>`),r.addChild(x)}}return r}function N1(n){let e=n.index!==null?n.index.count:n.attributes.position.count;return Array(e/3).fill(3).join(", ")}function O1(n){let e=n.index,t=[];if(e!==null)for(let i=0;i<e.count;i++)t.push(e.getX(i));else{let i=n.attributes.position.count;for(let s=0;s<i;s++)t.push(s)}return t.join(", ")}function Jd(n,e){if(n===void 0)return console.warn("USDZExporter: Normals missing."),Array(e).fill("(0, 0, 0)").join(", ");let t=[];for(let i=0;i<n.count;i++){let s=n.getX(i),r=n.getY(i),o=n.getZ(i);t.push(`(${s.toPrecision(Mt)}, ${r.toPrecision(Mt)}, ${o.toPrecision(Mt)})`)}return t.join(", ")}function U1(n){let e=[];for(let t=0;t<n.count;t++){let i=n.getX(t),s=n.getY(t);e.push(`(${i.toPrecision(Mt)}, ${1-s.toPrecision(Mt)})`)}return e.join(", ")}function F1(n,e,t=!1){let i=new Un("Materials");for(let s in n){let r=n[s];i.addChild(B1(r,e,t))}return i}function B1(n,e,t=!1){let i=new Un(`Material_${n.id}`,"Material");function s(o,a,l){let c=o.source.id+"_"+o.flipY;e[c]=o;let u=o.channel>0?"st"+o.channel:"st",h={1e3:"repeat",1001:"clamp",1002:"mirror"},f=o.repeat.clone(),d=o.offset.clone(),m=o.rotation,x=Math.sin(m),p=Math.cos(m);d.y=1-d.y-f.y,t?(d.x=d.x/f.x,d.y=d.y/f.y,d.x+=x/f.x,d.y+=p-1):(d.x+=x*f.x,d.y+=(1-p)*f.y);let g=new Un(`PrimvarReader_${a}`,"Shader");g.addProperty('uniform token info:id = "UsdPrimvarReader_float2"'),g.addProperty("float2 inputs:fallback = (0.0, 0.0)"),g.addProperty(`string inputs:varname = "${u}"`),g.addProperty("float2 outputs:result");let b=new Un(`Transform2d_${a}`,"Shader");b.addProperty('uniform token info:id = "UsdTransform2d"'),b.addProperty(`float2 inputs:in.connect = </Materials/Material_${n.id}/PrimvarReader_${a}.outputs:result>`),b.addProperty(`float inputs:rotation = ${(m*(180/Math.PI)).toFixed(Mt)}`),b.addProperty(`float2 inputs:scale = ${Z0(f)}`),b.addProperty(`float2 inputs:translation = ${Z0(d)}`),b.addProperty("float2 outputs:result");let T=new Un(`Texture_${o.id}_${a}`,"Shader");if(T.addProperty('uniform token info:id = "UsdUVTexture"'),T.addProperty(`asset inputs:file = @textures/Texture_${c}.${J0(o)}@`),T.addProperty(`float2 inputs:st.connect = </Materials/Material_${n.id}/Transform2d_${a}.outputs:result>`),l!==void 0){let y=a==="diffuse"?n.opacity:1;T.addProperty(`float4 inputs:scale = ${k1(l,y)}`)}if(a==="normal"){let y=n.normalScale.x;T.addProperty(`float4 inputs:scale = (${2*y}, ${2*y}, 2, 1)`),T.addProperty(`float4 inputs:bias = (${-y}, ${-y}, -1, 0)`)}return T.addProperty(`token inputs:sourceColorSpace = "${o.colorSpace===Ri?"raw":"sRGB"}"`),T.addProperty(`token inputs:wrapS = "${h[o.wrapS]}"`),T.addProperty(`token inputs:wrapT = "${h[o.wrapT]}"`),T.addProperty("float outputs:r"),T.addProperty("float outputs:g"),T.addProperty("float outputs:b"),T.addProperty("float3 outputs:rgb"),(n.transparent||n.alphaTest>0)&&T.addProperty("float outputs:a"),[g,b,T]}n.side===Lt&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",n);let r=new Un("PreviewSurface","Shader");if(r.addProperty('uniform token info:id = "UsdPreviewSurface"'),n.map!==null?(r.addProperty(`color3f inputs:diffuseColor.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:rgb>`),n.transparent?r.addProperty(`float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:a>`):n.alphaTest>0&&(r.addProperty(`float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:a>`),r.addProperty(`float inputs:opacityThreshold = ${n.alphaTest}`)),s(n.map,"diffuse",n.color).forEach(a=>i.addChild(a))):r.addProperty(`color3f inputs:diffuseColor = ${Y0(n.color)}`),n.emissive){let o=n.emissiveIntensity??1;if(n.emissiveMap){r.addProperty(`color3f inputs:emissiveColor.connect = </Materials/Material_${n.id}/Texture_${n.emissiveMap.id}_emissive.outputs:rgb>`);let a=new Ke(n.emissive.r*o,n.emissive.g*o,n.emissive.b*o);s(n.emissiveMap,"emissive",a).forEach(c=>i.addChild(c))}else n.emissive.getHex()>0&&r.addProperty(`color3f inputs:emissiveColor = ${Y0(n.emissive)}`)}if(n.normalMap&&(r.addProperty(`normal3f inputs:normal.connect = </Materials/Material_${n.id}/Texture_${n.normalMap.id}_normal.outputs:rgb>`),s(n.normalMap,"normal").forEach(a=>i.addChild(a))),n.aoMap){r.addProperty(`float inputs:occlusion.connect = </Materials/Material_${n.id}/Texture_${n.aoMap.id}_occlusion.outputs:r>`);let o=n.aoMapIntensity??1,a=new Ke(o,o,o);s(n.aoMap,"occlusion",a).forEach(c=>i.addChild(c))}if(n.roughnessMap){r.addProperty(`float inputs:roughness.connect = </Materials/Material_${n.id}/Texture_${n.roughnessMap.id}_roughness.outputs:g>`);let o=new Ke(n.roughness,n.roughness,n.roughness);s(n.roughnessMap,"roughness",o).forEach(l=>i.addChild(l))}else r.addProperty(`float inputs:roughness = ${n.roughness??1}`);if(n.metalnessMap){r.addProperty(`float inputs:metallic.connect = </Materials/Material_${n.id}/Texture_${n.metalnessMap.id}_metallic.outputs:b>`);let o=new Ke(n.metalness,n.metalness,n.metalness);s(n.metalnessMap,"metallic",o).forEach(l=>i.addChild(l))}else r.addProperty(`float inputs:metallic = ${n.metalness??0}`);if(n.alphaMap?(r.addProperty(`float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.alphaMap.id}_opacity.outputs:r>`),r.addProperty("float inputs:opacityThreshold = 0.0001"),s(n.alphaMap,"opacity").forEach(a=>i.addChild(a))):r.addProperty(`float inputs:opacity = ${n.opacity}`),n.isMeshPhysicalMaterial){if(n.clearcoatMap!==null){r.addProperty(`float inputs:clearcoat.connect = </Materials/Material_${n.id}/Texture_${n.clearcoatMap.id}_clearcoat.outputs:r>`);let o=new Ke(n.clearcoat,n.clearcoat,n.clearcoat);s(n.clearcoatMap,"clearcoat",o).forEach(l=>i.addChild(l))}else r.addProperty(`float inputs:clearcoat = ${n.clearcoat}`);if(n.clearcoatRoughnessMap!==null){r.addProperty(`float inputs:clearcoatRoughness.connect = </Materials/Material_${n.id}/Texture_${n.clearcoatRoughnessMap.id}_clearcoatRoughness.outputs:g>`);let o=new Ke(n.clearcoatRoughness,n.clearcoatRoughness,n.clearcoatRoughness);s(n.clearcoatRoughnessMap,"clearcoatRoughness",o).forEach(l=>i.addChild(l))}else r.addProperty(`float inputs:clearcoatRoughness = ${n.clearcoatRoughness}`);r.addProperty(`float inputs:ior = ${n.ior}`)}return r.addProperty("int inputs:useSpecularWorkflow = 0"),r.addProperty("token outputs:surface"),i.addChild(r),i.addProperty(`token outputs:surface.connect = </Materials/Material_${n.id}/PreviewSurface.outputs:surface>`),i}function Y0(n){return`(${n.r}, ${n.g}, ${n.b})`}function k1(n,e=1){return`(${n.r}, ${n.g}, ${n.b}, ${e})`}function Z0(n){return`(${n.x}, ${n.y})`}function z1(n,e,t){let i=K0(n,e);n.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",n);let s=new Un(i,"Camera");tx(s,n,t);let r=n.isOrthographicCamera?"orthographic":"perspective";s.addProperty(`token projection = "${r}"`);let o=`(${n.near.toPrecision(Mt)}, ${n.far.toPrecision(Mt)})`;s.addProperty(`float2 clippingRange = ${o}`);let a;n.isOrthographicCamera?a=((Math.abs(n.left)+Math.abs(n.right))*10).toPrecision(Mt):a=n.getFilmWidth().toPrecision(Mt),s.addProperty(`float horizontalAperture = ${a}`);let l;if(n.isOrthographicCamera?l=((Math.abs(n.top)+Math.abs(n.bottom))*10).toPrecision(Mt):l=n.getFilmHeight().toPrecision(Mt),s.addProperty(`float verticalAperture = ${l}`),n.isPerspectiveCamera){let c=n.getFocalLength().toPrecision(Mt);s.addProperty(`float focalLength = ${c}`);let u=n.focus.toPrecision(Mt);s.addProperty(`float focusDistance = ${u}`)}return s}var sx=new Gt,Gu=new I,Ci=class extends Fa{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Ht(e,3)),this.setAttribute("uv",new Ht(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new Ys(t,6,1);return this.setAttribute("instanceStart",new Pn(i,3,0)),this.setAttribute("instanceEnd",new Pn(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new Ys(t,6,1);return this.setAttribute("instanceColorStart",new Pn(i,3,0)),this.setAttribute("instanceColorEnd",new Pn(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Ca(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gt);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),sx.setFromBufferAttribute(t),this.boundingBox.union(sx))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Gu.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Gu)),Gu.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Gu));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};We.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new $e},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Gn.line={uniforms:Qa.merge([We.common,We.fog,We.line]),vertexShader:`
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
		`};var Zi=class extends vn{constructor(e){super({type:"LineMaterial",uniforms:Qa.clone(Gn.line.uniforms),vertexShader:Gn.line.vertexShader,fragmentShader:Gn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var jd=new St,rx=new I,ox=new I,wn=new St,Tn=new St,Ki=new St,Qd=new I,ep=new at,An=new ka,ax=new I,Wu=new Gt,Xu=new _n,Ji=new St,ji,wr;function lx(n,e,t){return Ji.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),Ji.multiplyScalar(1/Ji.w),Ji.x=wr/t.width,Ji.y=wr/t.height,Ji.applyMatrix4(n.projectionMatrixInverse),Ji.multiplyScalar(1/Ji.w),Math.abs(Math.max(Ji.x,Ji.y))}function H1(n,e){let t=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,o=Math.min(i.instanceCount,s.count);for(let a=0,l=o;a<l;a++){An.start.fromBufferAttribute(s,a),An.end.fromBufferAttribute(r,a),An.applyMatrix4(t);let c=new I,u=new I;ji.distanceSqToSegment(An.start,An.end,u,c),u.distanceTo(c)<wr*.5&&e.push({point:u,pointOnLine:c,distance:ji.origin.distanceTo(u),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function V1(n,e,t){let i=e.projectionMatrix,r=n.material.resolution,o=n.matrixWorld,a=n.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),h=-e.near;ji.at(1,Ki),Ki.w=1,Ki.applyMatrix4(e.matrixWorldInverse),Ki.applyMatrix4(i),Ki.multiplyScalar(1/Ki.w),Ki.x*=r.x/2,Ki.y*=r.y/2,Ki.z=0,Qd.copy(Ki),ep.multiplyMatrices(e.matrixWorldInverse,o);for(let f=0,d=u;f<d;f++){if(wn.fromBufferAttribute(l,f),Tn.fromBufferAttribute(c,f),wn.w=1,Tn.w=1,wn.applyMatrix4(ep),Tn.applyMatrix4(ep),wn.z>h&&Tn.z>h)continue;if(wn.z>h){let T=wn.z-Tn.z,y=(wn.z-h)/T;wn.lerp(Tn,y)}else if(Tn.z>h){let T=Tn.z-wn.z,y=(Tn.z-h)/T;Tn.lerp(wn,y)}wn.applyMatrix4(i),Tn.applyMatrix4(i),wn.multiplyScalar(1/wn.w),Tn.multiplyScalar(1/Tn.w),wn.x*=r.x/2,wn.y*=r.y/2,Tn.x*=r.x/2,Tn.y*=r.y/2,An.start.copy(wn),An.start.z=0,An.end.copy(Tn),An.end.z=0;let x=An.closestPointToPointParameter(Qd,!0);An.at(x,ax);let p=er.lerp(wn.z,Tn.z,x),g=p>=-1&&p<=1,b=Qd.distanceTo(ax)<wr*.5;if(g&&b){An.start.fromBufferAttribute(l,f),An.end.fromBufferAttribute(c,f),An.start.applyMatrix4(o),An.end.applyMatrix4(o);let T=new I,y=new I;ji.distanceSqToSegment(An.start,An.end,y,T),t.push({point:y,pointOnLine:T,distance:ji.origin.distanceTo(y),object:n,face:null,faceIndex:f,uv:null,uv1:null})}}}var nr=class extends dt{constructor(e=new Ci,t=new Zi({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)rx.fromBufferAttribute(t,o),ox.fromBufferAttribute(i,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+rx.distanceTo(ox);let r=new Ys(s,2,1);return e.setAttribute("instanceDistanceStart",new Pn(r,1,0)),e.setAttribute("instanceDistanceEnd",new Pn(r,1,1)),this}raycast(e,t){let i=this.material.worldUnits,s=e.camera;if(s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),i===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;ji=e.ray;let o=this.matrixWorld,a=this.geometry,l=this.material;wr=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Xu.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=wr*.5;else{let h=Math.max(s.near,Xu.distanceToPoint(ji.origin));c=lx(s,h,l.resolution)}if(Xu.radius+=c,ji.intersectsSphere(Xu)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Wu.copy(a.boundingBox).applyMatrix4(o);let u;if(i)u=wr*.5;else{let h=Math.max(s.near,Wu.distanceToPoint(ji.origin));u=lx(s,h,l.resolution)}Wu.expandByScalar(u),ji.intersectsBox(Wu)!==!1&&(i?H1(this,t):V1(this,s,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(jd),this.material.uniforms.resolution.value.set(jd.z,jd.w))}};var hx="blueprints.edgeMode",G1="blueprints.edgesEnabled",Tr="none",Ar="transparent",ul="opaque",W1=20,fx=2.5,dx=0,$u=35e-5,np=2e-6;function X1(n){let t=(Array.isArray(n?.material)?n.material[0]:n?.material)?.userData?.layerDepthBias??0;return(Number(t)+1)*np}var cl=1,px=4,q1=.0012,$1=.0036,Y1=.02,Z1=.0035,cx=.012;function ux(n){return n===Tr||n===Ar||n===ul?n:n==="1"||n==="true"?Ar:n==="0"||n==="false"?Tr:null}function mx(){try{let n=ux(localStorage.getItem(hx));if(n)return n;let e=ux(localStorage.getItem(G1));if(e)return sp(e),e}catch{}return Ar}function sp(n){try{localStorage.setItem(hx,n)}catch{}}function Fn(n){return!!(n&&n.userData&&n.userData.isEdgeOverlay)}function gx(n){let e=n?.getAttribute?.("position");if(!e||!e.count)return new Float32Array(0);let t=new Aa(n,W1),i=t.getAttribute("position"),s=i&&i.array?i.array instanceof Float32Array?i.array.slice():Float32Array.from(i.array):new Float32Array(0);return t.dispose(),s}function K1(n,e){if(!e.length)return n;if(!n.length)return e;let t=new Float32Array(n.length+e.length);return t.set(n,0),t.set(e,n.length),t}var qu=new I;function xx(n){let e=[];for(let t=0;t+5<n.length;t+=6){let i=n[t],s=n[t+1],r=n[t+2],o=n[t+3],a=n[t+4],l=n[t+5],c=o-i,u=a-s,h=l-r,f=Math.hypot(c,u,h);f<1e-6||e.push({ax:i,ay:s,az:r,bx:o,by:a,bz:l,dx:c/f,dy:u/f,dz:h/f,len:f})}return e}function J1(n,e,t,i,s,r){let o=d=>Math.round(d/5e-4),a=o(n),l=o(e),c=o(t),u=o(i),h=o(s),f=o(r);if(a>u||a===u&&l>h||a===u&&l===h&&c>f){let d=a;a=u,u=d;let m=l;l=h,h=m;let x=c;c=f,f=x}return`${a},${l},${c},${u},${h},${f}`}function yx(n){let e=xx(n),t=[],i=new Set;for(let s=0;s<e.length;s++){let r=e[s];for(let o=s+1;o<e.length;o++){let a=e[o];if(Math.abs(r.dx*a.dx+r.dy*a.dy+r.dz*a.dz)<.985)continue;let c=r.ax-a.ax,u=r.ay-a.ay,h=r.az-a.az,f=c*r.dx+u*r.dy+h*r.dz,d=c-f*r.dx,m=u-f*r.dy,x=h-f*r.dz,p=Math.hypot(d,m,x);if(p<q1||p>$1)continue;let g=(a.ax-r.ax)*r.dx+(a.ay-r.ay)*r.dy+(a.az-r.az)*r.dz,b=(a.bx-r.ax)*r.dx+(a.by-r.ay)*r.dy+(a.bz-r.az)*r.dz,T=Math.max(0,Math.min(g,b)),y=Math.min(r.len,Math.max(g,b));if(y-T<Y1)continue;let M=-d/p*(p*.5),E=-m/p*(p*.5),_=-x/p*(p*.5),w=r.ax+r.dx*T+M,D=r.ay+r.dy*T+E,L=r.az+r.dz*T+_,k=r.ax+r.dx*y+M,X=r.ay+r.dy*y+E,z=r.az+r.dz*y+_,N=J1(w,D,L,k,X,z);i.has(N)||(i.add(N),t.push(w,D,L,k,X,z))}}return new Float32Array(t)}function j1(n){let e=n.getAttribute("position"),t=n.getIndex(),i=0,s=0,r=0,o=t?t.count:e.count,a=c=>{let u=t?t.getX(c):c;return[e.getX(u),e.getY(u),e.getZ(u)]};for(let c=0;c+2<o;c+=3){let u=a(c),h=a(c+1),f=a(c+2),d=h[0]-u[0],m=h[1]-u[1],x=h[2]-u[2],p=f[0]-u[0],g=f[1]-u[1],b=f[2]-u[2];i+=m*b-x*g,s+=x*p-d*b,r+=d*g-m*p}let l=Math.hypot(i,s,r)||1;return{x:i/l,y:s/l,z:r/l}}function Q1(n,e){let t=n.getAttribute("position"),i,s,r;Math.abs(e.z)<.9?(i=-e.y,s=e.x,r=0):(i=0,s=-e.z,r=e.y);let o=Math.hypot(i,s,r)||1;i/=o,s/=o,r/=o;let a=e.y*r-e.z*s,l=e.z*i-e.x*r,c=e.x*s-e.y*i,u=1/0,h=-1/0,f=1/0,d=-1/0;for(let m=0;m<t.count;m++){let x=t.getX(m),p=t.getY(m),g=t.getZ(m),b=x*i+p*s+g*r,T=x*a+p*l+g*c;b<u&&(u=b),b>h&&(h=b),T<f&&(f=T),T>d&&(d=T)}return Math.min(h-u,d-f)}function eT(n){let e=n.getAttribute("position");if(!e||e.count<3)return!1;let t=j1(n),i=Q1(n,t);return t.z>.5?i>cx:t.z<-.5||(n.boundingBox||n.computeBoundingBox(),n.boundingBox.max.z-n.boundingBox.min.z<.05)?!1:i>cx}function _x(n,e){n.updateWorldMatrix(!0,!1);let t=n.matrixWorld,i=new Float32Array(e.length);for(let s=0;s<e.length;s+=3)qu.set(e[s],e[s+1],e[s+2]).applyMatrix4(t),i[s]=qu.x,i[s+1]=qu.y,i[s+2]=qu.z;return i}function tT(n,e,t){if(!t||t.length<6)return n;let i=_x(e,n),s=xx(t),r=[];for(let o=0;o+5<n.length;o+=6){let a=i[o],l=i[o+1],c=i[o+2],u=i[o+3],h=i[o+4],f=i[o+5],d=u-a,m=h-l,x=f-c,p=Math.hypot(d,m,x);if(p<1e-6)continue;let g=d/p,b=m/p,T=x/p,y=!1;for(let M of s){if(Math.abs(g*M.dx+b*M.dy+T*M.dz)<.95)continue;let _=a-M.ax,w=l-M.ay,D=c-M.az,L=_*M.dx+w*M.dy+D*M.dz,k=_-L*M.dx,X=w-L*M.dy,z=D-L*M.dz;if(Math.hypot(k,X,z)>Z1)continue;let N=(a-M.ax)*M.dx+(l-M.ay)*M.dy+(c-M.az)*M.dz,W=(u-M.ax)*M.dx+(h-M.ay)*M.dy+(f-M.az)*M.dz,j=Math.min(N,W),q=Math.max(N,W);if(Math.min(q,M.len)-Math.max(j,0)>.01){y=!0;break}}y||r.push(n[o],n[o+1],n[o+2],n[o+3],n[o+4],n[o+5])}return new Float32Array(r)}function nT(n,e){if(!n)return;let t=Math.max(0,Math.min(1,Number(e)||0));t<1?(n.transparent=!0,n.opacity=t,n.depthWrite=!1):(n.transparent=!1,n.opacity=1),n.needsUpdate=!0}function iT(n){if(!n?.visible)return 0;let e=Array.isArray(n.material)?n.material[0]:n.material;return e&&e.transparent&&typeof e.opacity=="number"?e.opacity:1}function sT(n,e=Ar){return e===Tr?0:e===ul?n?.visible===!1?0:1:iT(n)}function ip(n,e,t=1,i=np){let s=Math.max(0,Math.min(1,Number(t)||0)),r=Number.isFinite(i)?i:np,o=new Zi({color:dx,linewidth:fx,worldUnits:!1,toneMapped:!1,depthTest:!0,depthWrite:!1,transparent:s<1,opacity:s<1?s:1,clippingPlanes:n,clipIntersection:!1});return o.onBeforeCompile=a=>{a.vertexShader=a.vertexShader.replace(`vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );`,`vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );
			start.z += ${$u};
			end.z += ${$u};`),a.fragmentShader=a.fragmentShader.replace("#include <logdepthbuf_fragment>",`#include <logdepthbuf_fragment>
			#if ${ap}
				gl_FragDepth -= ${r};
			#else
				gl_FragDepth = gl_FragCoord.z - ${r};
			#endif`)},o.customProgramCacheKey=()=>`bp-edge-depth-bias-r${px}-${r}-${$u}`,e&&o.resolution.set(e.x,e.y),o}function vx(n,e,t,i){let s=Math.max(0,Math.min(1,Number(e)||0)),r=ip(t,null,s);r.depthTest=!1,r.depthWrite=!1,r.transparent=!0,r.opacity=s;let o=r.onBeforeCompile?.bind(r),a=r.customProgramCacheKey?.bind(r);r.customProgramCacheKey=()=>`${a?a():"edge"}|peelEdge1`,r.onBeforeCompile=(u,h)=>{o?.(u,h),u.uniforms.uPeelStage=i.stage,u.uniforms.tPrevViewZ=i.prevZ,u.uniforms.tPeelViewZ=i.peelZ,u.uniforms.tOpaqueViewZ=i.opaqueZ,u.uniforms.uViewZEps=i.eps,u.uniforms.uBpPeelRes=i.resolution,u.vertexShader=u.vertexShader.replace("void main() {",`varying float vBpEdgeViewZ;
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
			gl_FragColor = vec4( diffuseColor.rgb, alpha );`)},r.needsUpdate=!0;let l=new Ci;l.setPositions(n);let c=new nr(l,r);return c.frustumCulled=!1,c.matrixAutoUpdate=!1,c.renderOrder=1e3,c.raycast=()=>{},c.userData.isPeeledEdgeBatch=!0,c}function Yu(n){if(!n)return;n.parent?.remove(n),n.geometry?.dispose?.();let e=n.material;if(Array.isArray(e))for(let t of e)t?.dispose?.();else e?.dispose?.()}function bx(n){if(!n)return;let e=[];n.traverse(t=>{Fn(t)&&e.push(t)});for(let t of e)Yu(t)}function ir(n,e){n&&n.traverse(t=>{Fn(t)&&(t.visible=e)})}function Mx(n,e,t){if(!n)return;let i=Math.max(1,e),s=Math.max(1,t);n.traverse(r=>{if(!Fn(r)||!r.material)return;let o=Array.isArray(r.material)?r.material:[r.material];for(let a of o)a?.resolution&&a.resolution.set(i,s)})}function rp(n,e){if(!n)return;let t=e||[];n.traverse(i=>{if(!Fn(i)||!i.material)return;let s=Array.isArray(i.material)?i.material:[i.material];for(let r of s){if(!r)continue;let o=r.clippingPlanes?r.clippingPlanes.length:0;r.clippingPlanes=t,r.clipIntersection=!1,o!==t.length&&(r.needsUpdate=!0)}})}function rT(n,e,t){let i=n.userData.bpHardEdgePositions;return i instanceof Float32Array||(i=gx(n.geometry),n.userData.bpHardEdgePositions=i),e==="grout"?yx(i):e==="tile"||e==="floor_tile"||e==="wall_tile"?eT(n.geometry)?tT(i,n,t):new Float32Array(0):i}function oT(n,e,t,i,s){n.updateWorldMatrix(!0,!1);let r=rT(n,i,s),o=Zu(t,n.matrixWorld),a=Ex(n.geometry,o),l=K1(r,a),c=new Ci,u=e.geometry;l.length>=6?(c.setPositions(l),e.geometry=c,e.computeLineDistances()):e.geometry=c,u?.dispose?.()}function aT(n){let e=[],t=n.get("grout")||[];for(let i of t){if(!i||!i.isMesh||!i.geometry)continue;let s=i.userData.bpHardEdgePositions;s instanceof Float32Array||(s=gx(i.geometry),i.userData.bpHardEdgePositions=s);let r=yx(s);if(r.length<6)continue;let o=_x(i,r);for(let a=0;a<o.length;a++)e.push(o[a])}return new Float32Array(e)}function Sx(n,e,t={}){let i=t.clippingPlanes??[],s=t.resolution||null,r=t.edgeMode??Ar,o=e?aT(n):new Float32Array(0);for(let[a,l]of n)for(let c of l){if(!c||!c.isMesh||!c.geometry||Fn(c))continue;let u=null;for(let d of c.children)if(Fn(d)){u=d;break}if(!e){u&&Yu(u);continue}u&&!u.isLineSegments2&&(Yu(u),u=null);let h=sT(c,r),f=X1(c);if(u){let d=u.material,m=d?.customProgramCacheKey?.(),x=`bp-edge-depth-bias-r${px}-${f}-${$u}`;if(!d||typeof d.customProgramCacheKey!="function"||m!==x){Yu(u);let p=ip(i,s,h,f),g=new Ci;u=new nr(g,p),u.name=`${a}__edges`,u.userData.isEdgeOverlay=!0,u.userData.edgeLabel=a,u.raycast=()=>{},u.renderOrder=1e3,u.layers.set(cl),c.add(u)}else d.color&&d.color.setHex(dx),typeof d.linewidth=="number"&&(d.linewidth=fx),d.clippingPlanes=i,d.clipIntersection=!1,s&&d.resolution&&d.resolution.set(s.x,s.y),nT(d,h),d.needsUpdate=!0}else{let d=ip(i,s,h,f),m=new Ci;u=new nr(m,d),u.name=`${a}__edges`,u.userData.isEdgeOverlay=!0,u.userData.edgeLabel=a,u.raycast=()=>{},u.renderOrder=1e3,u.layers.set(cl),c.add(u)}u.layers.set(cl),oT(c,u,i,a,o)}}function lT(n){if(!n.isMesh||Fn(n))return!1;let e=Array.isArray(n.material)?n.material[0]:n.material;return!!(e&&e.transparent&&e.opacity<1-1e-4)}function op(n,e,t,i,s={}){if(!i)return;let r=!!s.reuseDepth,o=!1;if(i.traverse(x=>{Fn(x)&&(o=!0)}),!o){tp(n);return}let a=n.autoClear,l=e.background,c=e.overrideMaterial,u=t.layers.mask;if(e.background=null,n.autoClear=!1,r){ir(i,!0),t.layers.set(cl),n.render(e,t),t.layers.mask=u,e.background=l,e.overrideMaterial=c,n.autoClear=a,tp(n);return}ir(i,!1);let h=[];i.traverse(x=>{!lT(x)||x.visible===!1||(h.push(x),x.visible=!1)});let f=[],d=new Set;e.traverse(x=>{if(!x.isMesh||Fn(x)||x.visible===!1)return;let p=Array.isArray(x.material)?x.material:[x.material];for(let g of p)!g||d.has(g)||(d.add(g),f.push({mat:g,colorWrite:g.colorWrite!==!1,depthWrite:g.depthWrite!==!1}),g.colorWrite=!1,g.depthWrite=!0)}),e.overrideMaterial=null,n.clearDepth();try{n.render(e,t)}finally{for(let x of f)x.mat.colorWrite=x.colorWrite,x.mat.depthWrite=x.depthWrite;for(let x of h)x.visible=!0}ir(i,!0);let m=[];s.opaqueEdgesOnly&&i.traverse(x=>{if(!Fn(x))return;let p=Array.isArray(x.material)?x.material[0]:x.material;p&&p.transparent&&p.opacity<1-1e-4&&(m.push(x),x.visible=!1)}),t.layers.set(cl);try{n.render(e,t)}finally{for(let x of m)x.visible=!0}t.layers.mask=u,e.background=l,e.overrideMaterial=c,n.autoClear=a,tp(n)}function tp(n){n.state.buffers.color.setMask(!0),n.state.buffers.depth.setMask(!0)}var wx=!0,Tx=5,up=12,cT=up,Rx=.001,uT=.5,hT=1;function Ax(n){let e=String(n.length);for(let t of n){let i=Array.isArray(t.material)?"m":t.material?.id??0;e+=`|${t.id}:${i}:${t.geometry?.id??0}`;let s=t.children;if(s)for(let r=0;r<s.length;r++){let o=s[r];o?.userData?.isEdgeOverlay&&(e+=`>${o.id}:${o.geometry?.id??0}`)}}return e}var Ku=1e5,Pi={value:0},en={tPrevViewZ:{value:null},tPeelViewZ:{value:null},tOpaqueViewZ:{value:null},uViewZEps:{value:Rx},uResolution:{value:new $e(1,1)}};function lp(n){let e=n?.userData?.shader;if(!e?.uniforms)return;let t=e.uniforms;t.uPeelStage&&(t.uPeelStage.value=Pi.value),t.tPrevViewZ&&(t.tPrevViewZ.value=en.tPrevViewZ.value),t.tPeelViewZ&&(t.tPeelViewZ.value=en.tPeelViewZ.value),t.tOpaqueViewZ&&(t.tOpaqueViewZ.value=en.tOpaqueViewZ.value),t.uViewZEps&&(t.uViewZEps.value=en.uViewZEps.value),t.uResolution&&t.uResolution.value.copy(en.uResolution.value)}function hl(n){if(!n||n.userData.depthPeelPatched)return;n.userData.depthPeelPatched=!0;let e=n.customProgramCacheKey?.bind(n);n.customProgramCacheKey=()=>`${e?e():n.type}|depthPeel11|${n.defines?.USE_BP_PEEL?1:0}`;let t=n.onBeforeCompile?.bind(n);n.onBeforeCompile=(i,s)=>{t?.(i,s),i.uniforms.uPeelStage=Pi,i.uniforms.tPrevViewZ=en.tPrevViewZ,i.uniforms.tPeelViewZ=en.tPeelViewZ,i.uniforms.tOpaqueViewZ=en.tOpaqueViewZ,i.uniforms.uViewZEps=en.uViewZEps,i.uniforms.uResolution=en.uResolution,n.userData.shader=i,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
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
			if (peelZ > ${(Ku*.5).toFixed(1)}) discard;
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
#endif`)},n.needsUpdate=!0}function cp(n,e){for(let t of n){if(!t)continue;let i=!!(t.defines&&Object.prototype.hasOwnProperty.call(t.defines,"USE_BP_PEEL"));e!==i&&(t.defines||(t.defines={}),e?t.defines.USE_BP_PEEL="1":delete t.defines.USE_BP_PEEL,t.needsUpdate=!0)}}function Cx(n){let e=new $e,t=new Ke,i=null,s=null,r=null,o=null,a=null,l=null,c=new wi(-1,1,1,-1,0,1),u=new Hn,h=new vn({uniforms:{tOpaque:{value:null},tAccum:{value:null},uBackground:{value:new Ke(1118481)}},vertexShader:`
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
    `,depthTest:!1,depthWrite:!1,toneMapped:!1}),f=new dt(new li(2,2),h);u.add(f);let d=new vn({uniforms:{tSrc:{value:null}},vertexShader:`
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
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:kc,blendSrc:Wa,blendDst:js,blendSrcAlpha:Wa,blendDstAlpha:js,blendEquation:Ti}),m=new dt(new li(2,2),d),x=new Hn;x.add(m);let p=new vn({uniforms:{uValue:{value:0}},vertexShader:`
      void main() {
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      uniform float uValue;
      void main() {
        gl_FragColor = vec4(uValue, 0.0, 0.0, 1.0);
      }
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:ci}),g=new dt(new li(2,2),p),b=new Hn;b.add(g);let T=new vn({vertexShader:`
      void main() {
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      void main() {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
      }
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:ci}),y=new dt(new li(2,2),T),M=new Hn;M.add(y);function E(){n.state.buffers.color.setMask(!0),n.state.buffers.depth.setMask(!0)}function _(A){E();let J=n.autoClear;n.setRenderTarget(A),n.autoClear=!1,n.render(M,c),n.autoClear=J}let w=new vn({vertexShader:`
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
    `,depthTest:!0,depthWrite:!0,toneMapped:!1,side:Lt,clipping:!0,blending:ci});function D(A,J,Q={}){p.uniforms.uValue.value=J;let Ee=n.autoClear;E(),n.setRenderTarget(A),Q.clearDepth&&(n.setClearColor(0,1),n.clear(!1,!0,!1)),n.autoClear=!1,n.render(b,c),n.autoClear=Ee}function L(){i?.dispose(),s?.dispose(),r?.dispose(),o?.dispose(),a?.dispose(),l?.dispose(),i=null,s=null,r=null,o=null,a=null,l=null}let k=0;function X(A,J,Q){let Ee=Math.max(1,Math.floor(A)),$=Math.max(1,Math.floor(J)),ve=Math.min(1,Math.max(.25,Q)),me=Math.max(1,Math.floor(Ee*ve)),we=Math.max(1,Math.floor($*ve));if(i&&i.width===Ee&&i.height===$&&r&&r.width===me&&r.height===we&&k===ve)return;L(),k=ve,i=new rn(Ee,$,{format:Sn,type:Dn,colorSpace:Tt,depthBuffer:!0,stencilBuffer:!1});let C={format:Sn,type:Vn,depthBuffer:!0,stencilBuffer:!1,magFilter:Xt,minFilter:Xt};s=new rn(me,we,C),r=new rn(me,we,C),o=new rn(me,we,C),a=new rn(me,we,{format:Sn,type:Yn,colorSpace:Tt,depthBuffer:!1,stencilBuffer:!1,magFilter:qt,minFilter:qt}),l=new rn(me,we,{format:Sn,type:Yn,colorSpace:Tt,depthBuffer:!1,stencilBuffer:!1,magFilter:qt,minFilter:qt}),h.uniforms.tOpaque.value=i.texture,h.uniforms.tAccum.value=a.texture,en.tOpaqueViewZ.value=s.texture,en.uResolution.value.set(me,we)}function z(A){let J=[],Q=[];return A?(A.traverse(Ee=>{if(!Ee.isMesh||!Ee.visible||Fn(Ee))return;let $=Ee,ve=Array.isArray($.material)?$.material:[$.material],me=!1;for(let we of ve)if(we&&we.transparent&&we.opacity<1-1e-4){me=!0;break}me?Q.push($):J.push($)}),{opaque:J,transparent:Q}):{opaque:J,transparent:Q}}function N(A,J){for(let Q of A)Q.visible=J}function W(A,J){A.blending=J.blending,A.blendSrc=J.blendSrc,A.blendDst=J.blendDst,A.blendSrcAlpha=J.blendSrcAlpha,A.blendDstAlpha=J.blendDstAlpha,A.blendEquation=J.blendEquation,A.blendEquationAlpha=J.blendEquation}let j={meshes:[],sources:[],key:""},q={meshes:[],sources:[],key:""},_e="",Z="",V=new Hn,ee=new Hn,be=new Hn,Re=[];function K(A){for(let J of A.meshes)J.geometry.dispose();A.meshes=[],A.sources=[],A.key=""}function ue(){for(let A of Re){be.remove(A),A.geometry?.dispose?.();let J=A.material;if(Array.isArray(J))for(let Q of J)Q?.dispose?.();else J?.dispose?.()}Re=[]}function B(){K(j),K(q),ue(),_e="",Z=""}function te(A){if(ue(),!A.length)return;let J=new Map,Q=new I;for(let $ of A){let ve=null;for(let xe of $.children)if(Fn(xe)){ve=xe;break}if(!ve?.geometry)continue;let me=ve.material,we=me&&me.transparent&&typeof me.opacity=="number"?me.opacity:1;if(!(we<1-1e-4))continue;let C=ve.geometry.getAttribute("instanceStart"),S=ve.geometry.getAttribute("instanceEnd");if(!C||!S||!C.count)continue;let G=we.toFixed(3),Me=J.get(G);Me||(Me={opacity:we,planes:me.clippingPlanes||[],chunks:[]},J.set(G,Me)),$.updateWorldMatrix(!0,!1);let pe=C.count,le=new Float32Array(pe*6);for(let xe=0;xe<pe;xe++)Q.fromBufferAttribute(C,xe).applyMatrix4($.matrixWorld),le[xe*6]=Q.x,le[xe*6+1]=Q.y,le[xe*6+2]=Q.z,Q.fromBufferAttribute(S,xe).applyMatrix4($.matrixWorld),le[xe*6+3]=Q.x,le[xe*6+4]=Q.y,le[xe*6+5]=Q.z;Me.chunks.push(le)}let Ee={stage:Pi,prevZ:en.tPrevViewZ,peelZ:en.tPeelViewZ,opaqueZ:en.tOpaqueViewZ,eps:en.uViewZEps,resolution:en.uResolution};for(let $ of J.values()){let ve=0;for(let S of $.chunks)ve+=S.length;if(ve<6)continue;let me=new Float32Array(ve),we=0;for(let S of $.chunks)me.set(S,we),we+=S.length;let C=vx(me,$.opacity,$.planes,Ee);be.add(C),Re.push(C)}}function ge(A,J,Q,Ee){if(!Q.length)return;let $=`${Ax(Q)}#${Ax(J)}`;Ee&&Ee===_e&&$===Z&&j.meshes.length||(Ue(j,A,Q),Ue(q,A,J),j.sources.length===Q.length&&q.sources.length===J.length&&(te(Q),_e=Ee||"",Z=$))}function Se(A){return Object.keys(A.attributes).sort().join(",")}function qe(A){let J=A.geometry,Q=J.index?J.toNonIndexed():J.clone();return Q.applyMatrix4(A.matrixWorld),Q}function Ue(A,J,Q){let Ee=String(Q.length);for(let ve of Q){let me=Array.isArray(ve.material)?"m":ve.material?.id||0;Ee+=`.${ve.id}:${me}`}if(Ee===A.key)return;J.updateWorldMatrix(!0,!0),K(A),A.key=Ee;let $=new Map;for(let ve of Q){if(!ve.geometry||Array.isArray(ve.material)||!ve.material)continue;let me=`${ve.material.uuid}:${Se(ve.geometry)}`,we=$.get(me);we||(we={mat:ve.material,meshes:[]},$.set(me,we)),we.meshes.push(ve)}for(let ve of $.values()){let me=[];try{for(let S of ve.meshes)me.push(qe(S));let we=v0(me,!1);if(!we)continue;let C=new dt(we,ve.mat);C.frustumCulled=!1,C.matrixAutoUpdate=!1,C.renderOrder=0,C.userData.isPeelBatch=!0,A.meshes.push(C),A.sources.push(...ve.meshes)}catch{}finally{for(let we of me)we.dispose()}}}function Ye(A,J,Q,Ee){if(!A.meshes.length||A.sources.length!==J.length)return n.render(Q,Ee),!1;V.environment=Q.environment,V.environmentIntensity=Q.environmentIntensity,V.fog=Q.fog;let $=[];for(let ve of Q.children)ve.isLight&&$.push(ve);for(let ve of $)V.add(ve);for(let ve of A.meshes)V.add(ve);n.render(V,Ee);for(let ve of A.meshes)V.remove(ve);for(let ve of $)Q.add(ve);return!0}function he(A,J,Q){Ye(j,Q,A,J)}function Ae(A,J,Q){Q.length&&Ye(q,Q,A,J)}function Le(A,J,Q){if(!q.meshes.length||q.sources.length!==J.length)return!1;ee.overrideMaterial=Q;for(let Ee of q.meshes)ee.add(Ee);n.render(ee,A),ee.overrideMaterial=null;for(let Ee of q.meshes)ee.remove(Ee);return!0}function Be(A){let J=new Set;for(let Q of A){let Ee=Array.isArray(Q.material)?Q.material:[Q.material];for(let $ of Ee)$&&J.add($)}return[...J]}function Ge(A,J,Q){if(!Q)return;let Ee=Q.visible,$=A.background,ve=n.autoClear;Q.visible=!1,A.background=null,n.autoClear=!1,E(),n.clearDepth(),n.render(A,J),Q.visible=Ee,A.background=$,n.autoClear=ve}function Je(A){return A.children.filter(J=>J.userData?.blueprintAnnotations)}function ot(A,J){for(let Q of A)Q.visible=J}function oe(A,J,Q){Je(A).some(Ee=>Ee.visible)&&Ge(A,J,Q)}function ke(A,J,Q,Ee={}){ir(Q,!1);let $=Je(A),ve=$.map(me=>me.visible);ot($,!1),n.setRenderTarget(null),n.autoClear=!0,n.render(A,J),Ee.skipEdges||op(n,A,J,Q,{reuseDepth:!!Ee.reuseDepth}),$.forEach((me,we)=>{me.visible=ve[we]}),oe(A,J,Q)}function je(A,J,Q,Ee,$={}){if(!(wx&&(typeof Ee=="function"?Ee():!!Ee)))return Pi.value=0,ke(A,J,Q,{reuseDepth:!0}),!1;if($.quality!=="high"){Pi.value=0,ke(A,J,Q,{reuseDepth:!0});let Y=$.batchKey||"";if(Q&&!$.deferPrime&&Y!==_e){let Pe=z(Q);ge(Q,Pe.opaque,Pe.transparent,Y)}return!0}let{opaque:me,transparent:we}=z(Q);if(!we.length)return Pi.value=0,ke(A,J,Q,{reuseDepth:!0}),!1;Q&&ge(Q,me,we,$.batchKey||"");let C=$.quality==="high",S=C?hT:uT,G=C?up:Tx;n.getDrawingBufferSize(e),X(e.x,e.y,S);let Me=n.autoClear,pe=n.toneMapping,le=A.background;le instanceof Ke?t.copy(le):t.set(1118481),h.uniforms.uBackground.value.copy(t);let xe=[];for(let Y of[...me,...we])xe.push({mesh:Y,visible:Y.visible});let se=Be(we),fe=[];for(let Y of se)hl(Y),fe.push({mat:Y,snap:{blending:Y.blending,blendSrc:Y.blendSrc,blendDst:Y.blendDst,blendSrcAlpha:Y.blendSrcAlpha,blendDstAlpha:Y.blendDstAlpha,blendEquation:Y.blendEquation,blendEquationAlpha:Y.blendEquationAlpha,depthWrite:Y.depthWrite,depthTest:Y.depthTest,transparent:Y.transparent,opacity:Y.opacity,colorWrite:Y.colorWrite,side:Y.side,forceSinglePass:Y.forceSinglePass}});cp(se,!0);let De=new Map;for(let Y of we)De.set(Y,Y.onBeforeRender),Y.onBeforeRender=function(rt,Ce,pt,Bt,kt,is){let Li=Array.isArray(kt)?kt:[kt];for(let Xn of Li)Xn&&lp(Xn);let Wn=De.get(Y);typeof Wn=="function"&&Wn.call(this,rt,Ce,pt,Bt,kt,is)};let F=null;for(let Y of se)if(Y.clippingPlanes?.length){F=Y.clippingPlanes;break}if(!F)for(let Y of me){let Pe=Array.isArray(Y.material)?Y.material:[Y.material];for(let rt of Pe)if(rt?.clippingPlanes?.length){F=rt.clippingPlanes;break}if(F)break}w.clippingPlanes=F||[],w.clipIntersection=!1,A.background=null,n.autoClear=!0,Pi.value=0;let ye=[];for(let Y of A.children)Y!==Q&&(Y.isLight||(ye.push({obj:Y,visible:Y.visible}),Y.visible=!1));function de(){for(let[Y,Pe]of De)Y.onBeforeRender=Pe}function Fe(){for(let{mat:Y,snap:Pe}of fe)W(Y,Pe),Y.blendEquationAlpha=Pe.blendEquationAlpha,Y.depthWrite=Pe.depthWrite,Y.depthTest=Pe.depthTest,Y.transparent=Pe.transparent,Y.opacity=Pe.opacity,Y.colorWrite=Pe.colorWrite!==!1,Y.side=Pe.side,Y.forceSinglePass=Pe.forceSinglePass,Y.needsUpdate=!0;for(let{mesh:Y,visible:Pe}of xe)Y.visible=Pe;for(let{obj:Y,visible:Pe}of ye)Y.visible=Pe;return de(),cp(se,!1),Pi.value=0,A.background=le,A.overrideMaterial=null,n.toneMapping=pe,n.setRenderTarget(null),n.autoClear=!0,ke(A,J,Q),n.autoClear=Me,!1}if(N(we,!1),N(me,!0),ir(Q,!1),E(),n.setRenderTarget(i),n.setClearColor(0,0),n.clear(),Ae(A,J,me),n.setRenderTarget(s),n.setClearColor(0,1),D(s,Ku,{clearDepth:!0}),C){let Y=new Float32Array(4);try{n.readRenderTargetPixels(s,2,2,1,1,Y)}catch{Y[0]=0}if(!Number.isFinite(Y[0])||Y[0]<Ku*.5)return Fe()}let Ne=A.overrideMaterial;n.setRenderTarget(s),n.autoClear=!1,Le(J,me,w)||(A.overrideMaterial=w,n.render(A,J),A.overrideMaterial=Ne),n.autoClear=!0,en.tOpaqueViewZ.value=s.texture,_(a),D(o,0),en.tPrevViewZ.value=o.texture,N(me,!1),N(we,!0),ir(Q,!1);let Oe=!1;for(let Y=0;Y<G;Y++){en.tPrevViewZ.value=o.texture,en.tPeelViewZ.value=o.texture,Pi.value=1;for(let{mat:Ce}of fe)Ce.depthWrite=!0,Ce.depthTest=!0,Ce.colorWrite=!0,Ce.transparent=!0,Ce.forceSinglePass=!0,W(Ce,{blending:ci,blendSrc:js,blendDst:Va,blendSrcAlpha:js,blendDstAlpha:Va,blendEquation:Ti}),lp(Ce);E(),n.setRenderTarget(r),n.setClearColor(0,1),n.clear(!1,!0,!1),D(r,Ku),n.setRenderTarget(r),n.autoClear=!1,he(A,J,we),n.autoClear=!0,en.tPeelViewZ.value=r.texture,Pi.value=2;for(let{mat:Ce}of fe)Ce.depthWrite=!1,Ce.depthTest=!1,Ce.colorWrite=!0,Ce.transparent=!0,Ce.forceSinglePass=!0,W(Ce,{blending:Xi,blendSrc:Ga,blendDst:Ao,blendSrcAlpha:js,blendDstAlpha:Ao,blendEquation:Ti}),lp(Ce);_(l);let Pe=n.autoClear;if(n.autoClear=!1,n.setRenderTarget(l),he(A,J,we),n.autoClear=Pe,Re.length&&l){for(let pt of Re)pt.material?.resolution?.set(l.width,l.height);let Ce=J.layers.mask;J.layers.set(0),n.autoClear=!1,n.render(be,J),J.layers.mask=Ce,n.autoClear=!0}Oe=!0,d.uniforms.tSrc.value=l.texture,n.setRenderTarget(a),n.autoClear=!1,n.render(x,c),n.autoClear=!0;let rt=o;o=r,r=rt}if(!Oe)return Fe();for(let{mat:Y,snap:Pe}of fe)W(Y,Pe),Y.blendEquationAlpha=Pe.blendEquationAlpha,Y.depthWrite=Pe.depthWrite,Y.depthTest=Pe.depthTest,Y.transparent=Pe.transparent,Y.opacity=Pe.opacity,Y.colorWrite=Pe.colorWrite!==!1,Y.side=Pe.side,Y.forceSinglePass=Pe.forceSinglePass;for(let{mesh:Y,visible:Pe}of xe)Y.visible=Pe;for(let{obj:Y,visible:Pe}of ye)Y.visible=Pe;de(),ir(Q,!0),cp(se,!1),Pi.value=0,A.background=le,n.toneMapping=pe,n.setRenderTarget(null),n.autoClear=!0,n.render(u,c);let ze=Je(A),st=ze.map(Y=>Y.visible);return ot(ze,!1),C&&Q&&op(n,A,J,Q,{opaqueEdgesOnly:Re.length>0}),ze.forEach((Y,Pe)=>{Y.visible=st[Pe]}),oe(A,J,Q),n.autoClear=Me,!0}function re(){B(),L(),h.dispose(),f.geometry.dispose(),d.dispose(),m.geometry.dispose(),p.dispose(),g.geometry.dispose(),T.dispose(),y.geometry.dispose(),w.dispose()}return{render:je,dispose:re,MAX_PEELS:cT,MAX_PEELS_FAST:Tx,MAX_PEELS_HIGH:up,VIEW_Z_EPSILON:Rx,USE_DEPTH_PEEL:wx}}var Ix="blueprints.materialMode",Ju="solid",fl="realistic",fT={floor:[230,115,20],eps:[70,230,25],masonry:[225,70,40],column:[225,70,40],venec:[200,55,35],plaster:[255,225,120],furniture:[255,150,0],cabinet:[214,148,40],appliance:[176,190,205],sink:[40,185,195],rug:[150,70,175],light:[255,210,40],door:[210,140,70],wall_plate:[200,85,10],pocket_frame:[235,185,80],wall_gkf:[230,230,235],rafters:[200,85,10],plenum_wool:[0,210,155],racking_strap:[70,70,80],tie_rod:[35,38,44],slope_light:[28,28,30],roofing:[235,15,15],glazing:[140,210,255],slope_naturheld_140:[15,85,245],slope_gkf:[230,230,235],slope_cd:[120,120,130],slope_nonius:[90,90,100],soffit_naturheld_140:[15,85,245],soffit_mineral_wool:[0,210,155],soffit_ud:[120,120,130],soffit_gkf:[230,230,235],soffit_cd:[120,120,130],soffit_nonius:[90,90,100],soffit_duct:[168,176,188],bass_mineral_wool:[0,210,155],bass_gkb:[230,230,235],bass_cd:[120,120,130],bass_wall_hanger:[90,90,100],tile:[222,205,176],grout:[48,46,44],drain:[176,184,190],fixture:[236,236,232],prewall:[196,184,168],screen:[170,210,220],profile:[190,196,200],vanity:[186,140,90]},dT={floor:0,eps:1,masonry:2,column:2,venec:2,plaster:3,pocket_frame:4,wall_gkf:4,bass_gkb:4,slope_gkf:4,soffit_gkf:4,furniture:6,cabinet:6,appliance:7,sink:7,rug:1,light:8,door:6,soffit_ud:8,slope_cd:8,soffit_cd:8,bass_cd:8,slope_nonius:9,soffit_nonius:9,soffit_duct:9,bass_wall_hanger:9,racking_strap:9,tie_rod:9,slope_light:8,wall_plate:9,plenum_wool:10,soffit_mineral_wool:10,bass_mineral_wool:10,rafters:11,roofing:12,slope_naturheld_140:13,soffit_naturheld_140:13,glazing:14,tile:0,grout:0,drain:0,fixture:6,prewall:5,screen:14,profile:7,vanity:6},pT=2e-6,mT=3,ap="defined( USE_LOGARITHMIC_DEPTH_BUFFER ) || defined( USE_LOGDEPTHBUF )";function fp(n,e=0){if(n.userData.layerDepthPatched)return;let t=Math.max(0,Math.round(Number(e)||0));if(n.userData.layerDepthBias=t,!(t>0))return;n.userData.layerDepthPatched=!0;let i=n.onBeforeCompile?.bind(n),s=n.customProgramCacheKey?.bind(n),r=pT.toExponential(8);n.onBeforeCompile=(o,a)=>{i?.(o,a),o.fragmentShader=o.fragmentShader.replace("#include <logdepthbuf_fragment>",`#include <logdepthbuf_fragment>
#if ${ap}
	{
		float bpFaceBias = ${t}.0 * ${r};
		float bpGraze = min(bpFaceBias, 0.35 * fwidth(gl_FragDepth));
		gl_FragDepth -= bpFaceBias + bpGraze;
	}
#endif`)},n.customProgramCacheKey=()=>`${s?s():n.type}|bpLayerDepth-r${mT}-${t}`,n.needsUpdate=!0}var gT=[];function Lx(n,e,t){let i=new Set(n),s=Array.isArray(e)&&e.length?e:gT,r=typeof t=="function"?t:l=>l;function o(l){let c=[];for(let u of l){if(typeof u=="string"){if(!i.has(u))continue;i.delete(u),c.push({type:"leaf",id:u,label:r(u)});continue}let h=o(u.children||[]);h.length&&c.push({type:"group",id:u.id,label:r(u.id),children:h})}return c}let a=o(s);if(i.size){let l=[...i].sort((c,u)=>c.localeCompare(u)).map(c=>({type:"leaf",id:c,label:r(c)}));a.push({type:"group",id:"other",label:r("other"),children:l})}return a}function Dx(n,e){if(!n||typeof n!="object")return{};let t=new Map;for(let s of e)s.type==="group"&&t.set(s.id,ju(s));let i={};for(let[s,r]of Object.entries(n)){let o=t.get(s);if(o&&o.length)for(let a of o)i[a]=r;else i[s]=r}return i}function ju(n){if(n.type==="leaf")return[n.id];let e=[];for(let t of n.children)e.push(...ju(t));return e}function xT(n,e,t="transparent"){if(t==="none")return;let i=t==="opaque"?1:Math.max(0,Math.min(1,Number(e)||0));for(let s of n.children||[]){if(!s?.userData?.isEdgeOverlay||!s.material)continue;let r=Array.isArray(s.material)?s.material:[s.material];for(let o of r)o&&(i<1?(o.transparent=!0,o.opacity=i,o.depthWrite=!1):(o.transparent=!1,o.opacity=1),o.needsUpdate=!0)}}function Ps(n,e,t={}){let i=Math.max(0,Math.min(1,Number(e)||0)),s=t.edgeMode??"transparent";for(let r of n){if(!r)continue;if(i<=0||r.userData?.bpIfcHidden){r.visible=!1;continue}if(r.visible=!0,!r.isMesh)continue;let o=Array.isArray(r.material)?r.material:[r.material];for(let a of o)a&&(i<1?(a.transparent=!0,a.opacity=i,a.depthWrite=!1,a.depthTest=!0,a.side=Lt,a.forceSinglePass=!0,a.userData.needsDepthPeel=!0):(a.transparent=!1,a.opacity=1,a.depthWrite=!0,a.depthTest=!0,a.side=Lt,a.forceSinglePass=!1,a.blending=Xi,a.userData.needsDepthPeel=!1),a.needsUpdate=!0);typeof r.userData.opaqueRenderOrder!="number"&&(r.userData.opaqueRenderOrder=r.renderOrder||0),r.renderOrder=i<1?0:r.userData.opaqueRenderOrder,xT(r,i,s);for(let a of r.children||[]){if(!a?.userData?.isSectionCap||!a.material)continue;a.visible=!0,a.renderOrder=r.renderOrder;let l=Array.isArray(a.material)?a.material:[a.material];for(let c of l)c&&(c.opacity=i,c.transparent=i<1,c.depthWrite=i>=1,c.depthTest=!0,c.forceSinglePass=i<1,c.side=Lt,c.needsUpdate=!0)}}}var yT={floor:{color:[230,115,20],roughness:.68,metalness:0,map:"wood"},eps:{color:[70,230,25],roughness:.94,metalness:0,map:"foam"},masonry:{color:[225,70,40],roughness:.9,metalness:0,map:"masonry"},column:{color:[225,70,40],roughness:.9,metalness:0,map:"masonry"},venec:{color:[200,55,35],roughness:.9,metalness:0,map:"masonry"},plaster:{color:[255,225,120],roughness:.92,metalness:0,map:"plaster"},furniture:{color:[255,150,0],roughness:.38,metalness:0,clearcoat:.35,clearcoatRoughness:.28,map:"wood"},cabinet:{color:[214,148,40],roughness:.4,metalness:0,clearcoat:.3,clearcoatRoughness:.3,map:"wood"},appliance:{color:[176,190,205],roughness:.28,metalness:.65,map:"metal"},sink:{color:[40,185,195],roughness:.22,metalness:.15,map:"none"},rug:{color:[150,70,175],roughness:.92,metalness:0,map:"none"},light:{color:[255,210,40],roughness:.35,metalness:.2,map:"metal"},wall_plate:{color:[200,85,10],roughness:.55,metalness:0,map:"wood"},pocket_frame:{color:[235,185,80],roughness:.7,metalness:0,map:"plaster"},wall_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},rafters:{color:[200,85,10],roughness:.55,metalness:0,map:"wood"},plenum_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},racking_strap:{color:[70,70,80],roughness:.45,metalness:.8,map:"metal"},tie_rod:{color:[35,38,44],roughness:.35,metalness:.9,map:"metal"},slope_light:{color:[28,28,30],roughness:.4,metalness:.6,map:"metal"},roofing:{color:[235,15,15],roughness:.32,metalness:.45,map:"metal"},glazing:{color:[140,210,255],roughness:.08,metalness:.05,map:"none"},slope_naturheld_140:{color:[15,85,245],roughness:.78,metalness:.08,map:"plaster"},slope_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},slope_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},slope_nonius:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},soffit_mineral_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},soffit_naturheld_140:{color:[15,85,245],roughness:.78,metalness:.08,map:"plaster"},soffit_ud:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},soffit_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},soffit_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},soffit_nonius:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},soffit_duct:{color:[168,176,188],roughness:.35,metalness:.85,map:"metal"},bass_mineral_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},bass_gkb:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},bass_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},bass_wall_hanger:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},tile:{color:[222,205,176],roughness:.42,metalness:0,map:"none"},grout:{color:[48,46,44],roughness:.9,metalness:0,map:"none"},drain:{color:[176,184,190],roughness:.28,metalness:.7,map:"metal"},fixture:{color:[236,236,232],roughness:.35,metalness:0,map:"none"},prewall:{color:[196,184,168],roughness:.8,metalness:0,map:"none"},screen:{color:[170,210,220],roughness:.08,metalness:.05,map:"none"},profile:{color:[190,196,200],roughness:.25,metalness:.85,map:"metal"},vanity:{color:[186,140,90],roughness:.55,metalness:0,map:"wood"}},hp=new Map;function _T(n){if(!n||n==="none")return null;let e=hp.get(n);if(e)return e;let t=128,i=document.createElement("canvas");i.width=t,i.height=t;let s=i.getContext("2d");if(!s)return null;if(n==="wood"){s.fillStyle="#c49858",s.fillRect(0,0,t,t);for(let o=0;o<t;o++){let a=Math.sin(o*.35)*8+Math.sin(o*.11)*4,l=130+o*17%50;s.strokeStyle=`rgba(${l-40}, ${l-60}, ${l-100}, 0.55)`,s.lineWidth=1.2,s.beginPath(),s.moveTo(0,o+a*.15),s.lineTo(t,o-a*.1),s.stroke()}for(let o=0;o<60;o++){let a=o*37%t,l=o*53%t;s.fillStyle="rgba(70, 40, 15, 0.22)",s.fillRect(a,l,2,7+o%5)}}else if(n==="foam"){s.fillStyle="#9ed468",s.fillRect(0,0,t,t);for(let o=0;o<t;o+=7)for(let a=0;a<t;a+=7){let l=o/7%2*3.5,c=2.4+a*o%5*.2;s.beginPath(),s.arc(a+l+3.5,o+3.5,c,0,Math.PI*2),s.fillStyle="rgba(255,255,255,0.55)",s.fill(),s.strokeStyle="rgba(40,90,30,0.35)",s.stroke()}}else if(n==="plaster"){let o=s.createImageData(t,t);for(let a=0;a<o.data.length;a+=4){let l=200+a*13%45;o.data[a]=l,o.data[a+1]=l-10,o.data[a+2]=l-22,o.data[a+3]=255}s.putImageData(o,0,0)}else if(n==="wool"){s.fillStyle="#88c860",s.fillRect(0,0,t,t);for(let o=0;o<1400;o++){let a=o*47%t,l=o*91%t;s.fillStyle=o%3===0?"rgba(255,255,255,0.4)":"rgba(30,70,20,0.28)",s.fillRect(a,l,1+o%2,2+o%3)}}else if(n==="metal"){let o=s.createLinearGradient(0,0,t,t);o.addColorStop(0,"#a02820"),o.addColorStop(.4,"#f07060"),o.addColorStop(.55,"#701810"),o.addColorStop(1,"#d04838"),s.fillStyle=o,s.fillRect(0,0,t,t);for(let a=0;a<t;a+=9)s.fillStyle="rgba(255,255,255,0.22)",s.fillRect(0,a,t,2),s.fillStyle="rgba(0,0,0,0.28)",s.fillRect(0,a+4,t,2)}else if(n==="masonry"){s.fillStyle="#b88868",s.fillRect(0,0,t,t);let o=16,a=32;for(let l=0;l<t/o;l++){let c=l%2*(a/2);for(let u=-1;u<t/a+1;u++){let h=u*a+c,f=l*o;s.fillStyle=`rgba(${170+(l+u)%3*18}, ${110+l%4*10}, ${70+u%3*12}, 0.75)`,s.fillRect(h+1,f+1,a-2,o-2),s.strokeStyle="rgba(70,45,30,0.55)",s.strokeRect(h+.5,f+.5,a-1,o-1)}}}else return null;let r=new vs(i);return r.colorSpace=Tt,r.wrapS=Si,r.wrapT=Si,r.repeat.set(2.5,2.5),r.needsUpdate=!0,hp.set(n,r),r}function Px(n){return new Ke(n[0]/255,n[1]/255,n[2]/255)}function vT(n){return fT[n]||[160,160,160]}function bT(n,e,t=0){n.side=Lt,t>0?(n.polygonOffset=!0,n.polygonOffsetFactor=-t,n.polygonOffsetUnits=-t*2):(n.polygonOffset=!1,n.polygonOffsetFactor=0,n.polygonOffsetUnits=0),e?(n.clippingPlanes=e,n.clipIntersection=!1):n.clippingPlanes=[],fp(n,t),hl(n),n.needsUpdate=!0}function Nx(n){n.computeBoundingBox();let e=n.boundingBox,t=new I;e.getSize(t);let i=Math.max(t.x,1e-6),s=Math.max(t.y,1e-6),r=Math.max(t.z,1e-6),o=Math.max(i,s,r);n.getAttribute("normal")||n.computeVertexNormals();let a=n.getAttribute("position"),l=n.getAttribute("normal");if(!a)return o;let c=n.getAttribute("uv");if(c&&c.count===a.count)return o;let u=new Float32Array(a.count*2),h=new I;for(let f=0;f<a.count;f++){h.fromBufferAttribute(a,f);let d=Math.abs(l.getX(f)),m=Math.abs(l.getY(f)),x=Math.abs(l.getZ(f)),p,g;m>=d&&m>=x?(p=(h.x-e.min.x)/i,g=(h.z-e.min.z)/r):d>=x?(p=(h.z-e.min.z)/r,g=(h.y-e.min.y)/s):(p=(h.x-e.min.x)/i,g=(h.y-e.min.y)/s),u[f*2]=p,u[f*2+1]=g}return n.setAttribute("uv",new Ft(u,2)),o}function MT(n,e){let t=_T(n);if(!t)return null;let i=t.clone();i.needsUpdate=!0;let s=Math.max(1.2,Math.min(12,e/400));return i.repeat.set(s,s),i}function Ox(n,e,t={}){let i=t.clippingPlanes??null,s=e===fl,r=t.opacityByLabel??null,o=t.edgeMode??"transparent";for(let[a,l]of n){let c=vT(a),u=dT[a]??0,h=1e3;if(s)for(let g of l)g.isMesh&&g.geometry&&(h=Math.max(h,Nx(g.geometry)));let f=1,d;if(s){let g=yT[a]||{color:c,roughness:.7,metalness:0,map:"none"};f=typeof g.opacity=="number"?g.opacity:1;let b=Px(g.color),T=MT(g.map||"none",h);g.clearcoat?d=new hn({color:b,map:T,roughness:g.roughness,metalness:g.metalness,clearcoat:g.clearcoat,clearcoatRoughness:g.clearcoatRoughness??.3,envMapIntensity:.85}):d=new Ln({color:b,map:T,roughness:g.roughness,metalness:g.metalness,envMapIntensity:g.metalness>.05?1.1:.55})}else d=new on({color:Px(c)});bT(d,i,u),d.userData.presetOpacity=f;let m=new Set;for(let g of l){if(!g.isMesh)continue;let b=g.material;if(b){let T=Array.isArray(b)?b:[b];for(let y of T)m.add(y)}g.material=d,g.userData.opaqueRenderOrder=u,g.renderOrder=u}for(let g of m)g!==d&&(g.map&&[...hp.values()].includes(g.map)?g.map=null:g.map&&(g.map.dispose?.(),g.map=null),g.dispose?.());let x=1;r&&(r instanceof Map?x=r.has(a)?r.get(a):1:typeof r[a]=="number"&&(x=r[a]));let p=Math.max(0,Math.min(1,f*(Number(x)||0)));Ps(l,p,{edgeMode:o})}}function Ux(n,e){let i=(Array.isArray(n)?n:[n]).map(s=>{if(!s)return new Ln({color:13421772,roughness:.65,metalness:0,side:ti});let r=s.color?s.color.clone():new Ke(13421772),o=typeof s.roughness=="number"?s.roughness:.65,a=typeof s.metalness=="number"?s.metalness:0,l=null;s.map&&e&&(Nx(e),l=s.map.clone(),l.needsUpdate=!0);let c=new Ln({color:r,map:l,roughness:o,metalness:a,side:ti,transparent:!!s.transparent,opacity:typeof s.opacity=="number"?s.opacity:1});return c.clippingPlanes=null,c.clipIntersection=!1,c});return Array.isArray(n)?i:i[0]}function Fx(){try{let n=localStorage.getItem(Ix);if(n===fl||n===Ju)return n}catch{}return Ju}function Bx(n){try{localStorage.setItem(Ix,n)}catch{}}var Qi=1e-5,kx=new WeakMap;function ii(n,e,t,i){let s=t/(t-i);return n.clone().lerp(e,s)}function ST(n,e,t){let[i,s,r]=n,o=e.distanceToPoint(i),a=e.distanceToPoint(s),l=e.distanceToPoint(r),c=o>=-Qi,u=a>=-Qi,h=l>=-Qi,f=(c?1:0)+(u?1:0)+(h?1:0);if(f===3){t.push([i,s,r]);return}if(f===0)return;let d=[i,s,r],m=[o,a,l],x=[c,u,h];if(f===1){let T=x.findIndex(Boolean),y=(T+1)%3,M=(T+2)%3,E=d[T],_=ii(d[T],d[y],m[T],m[y]),w=ii(d[T],d[M],m[T],m[M]);t.push([E,_,w]);return}let p=x.findIndex(T=>!T),g=(p+1)%3,b=(p+2)%3;if(x[g]){let T=d[g],y=d[b],M=ii(d[p],d[g],m[p],m[g]),E=ii(d[p],d[b],m[p],m[b]);t.push([T,y,M]),t.push([y,E,M])}else{let T=d[b],y=ii(d[p],d[g],m[p],m[g]),M=ii(d[p],d[b],m[p],m[b]);t.push([T,y,M])}}function ET(n,e){let[t,i,s]=n,r=e.distanceToPoint(t),o=e.distanceToPoint(i),a=e.distanceToPoint(s),l=r>=-Qi,c=o>=-Qi,u=a>=-Qi,h=(l?1:0)+(c?1:0)+(u?1:0);if(h===0||h===3)return null;let f=[t,i,s],d=[r,o,a],m=[l,c,u];if(h===1){let b=m.findIndex(Boolean),T=(b+1)%3,y=(b+2)%3;return[ii(f[b],f[T],d[b],d[T]),ii(f[b],f[y],d[b],d[y])]}let x=m.findIndex(b=>!b),p=(x+1)%3,g=(x+2)%3;return m[p]?[ii(f[x],f[p],d[x],d[p]),ii(f[x],f[g],d[x],d[g])]:[ii(f[x],f[p],d[x],d[p]),ii(f[x],f[g],d[x],d[g])]}function wT(n,e,t){let i=n.clone(),s=e.clone();for(let r of t){let o=r.distanceToPoint(i),a=r.distanceToPoint(s),l=o>=-Qi,c=a>=-Qi;if(l&&c)continue;if(!l&&!c)return null;let u=ii(i,s,o,a);l?s=u:i=u}return i.distanceToSquared(s)<Qi*Qi?null:[i,s]}function TT(n,e){let t=n;for(let i of e){let s=[];for(let r of t)ST(r,i,s);if(t=s,t.length===0)break}return t}function AT(n,e){let t=n.getAttribute("position");if(!t)return[];let i=new I,s=[],r=n.getIndex();function o(a,l,c){s.push([i.fromBufferAttribute(t,a).applyMatrix4(e).clone(),i.fromBufferAttribute(t,l).applyMatrix4(e).clone(),i.fromBufferAttribute(t,c).applyMatrix4(e).clone()])}if(r)for(let a=0;a<r.count;a+=3)o(r.getX(a),r.getX(a+1),r.getX(a+2));else for(let a=0;a<t.count;a+=3)o(a,a+1,a+2);return s}function RT(n){let e=n.getAttribute("position");if(!e)return[];let t=new I,i=[],s=n.getIndex();function r(o,a,l){i.push([t.fromBufferAttribute(e,o).clone(),t.fromBufferAttribute(e,a).clone(),t.fromBufferAttribute(e,l).clone()])}if(s)for(let o=0;o<s.count;o+=3)r(s.getX(o),s.getX(o+1),s.getX(o+2));else for(let o=0;o<e.count;o+=3)r(o,o+1,o+2);return i}var Rr=1e-6,zx=2e-4,CT=2e-4,Hx=new WeakMap;function PT(n){let e="";for(let t of n)e+=`${t.normal.x.toFixed(6)},${t.normal.y.toFixed(6)},${t.normal.z.toFixed(6)},${t.constant.toFixed(6)};`;return e}function Vx(n){let e=t=>Math.round(t/Rr);return`${e(n.x)},${e(n.y)},${e(n.z)}`}function Xx(n,e){let t=PT(e),i=Hx.get(n);if(i&&i.key===t)return i;let s=[],r=[],o=kx.get(n);if(o||(o=RT(n),kx.set(n,o)),o.length&&e?.length)for(let l=0;l<e.length;l++){let c=e[l],u=e.filter((f,d)=>d!==l),h=[];for(let f of o){let d=ET(f,c);if(!d)continue;let m=u.length?wT(d[0],d[1],u):d;m&&(h.push(m),s.push(m[0].x,m[0].y,m[0].z,m[1].x,m[1].y,m[1].z))}r.push(h)}let a={key:t,segments:new Float32Array(s),perPlane:r};return Hx.set(n,a),a}function IT(n,e,t){let i=new Map;for(let l of n.keys())i.set(l,l);function s(l){let c=l;for(;i.get(c)!==c;){let u=i.get(i.get(c));i.set(c,u),c=u}return c}function r(l){let c=s(l),u=0;for(let h of t.get(c)||[])e[h].dead||u++;return u}function o(){let l=[];for(let c of n.keys())s(c)===c&&r(c)%2&&l.push(c);return l}let a=zx*zx;for(let l=0;l<e.length+2;l++){let c=o();if(c.length<2)break;let u=-1,h=-1,f=1/0;for(let g=0;g<c.length;g++){let b=n.get(c[g]);for(let T=g+1;T<c.length;T++){let y=n.get(c[T]),M=b.x-y.x,E=b.y-y.y,_=b.z-y.z,w=M*M+E*E+_*_;w<f&&(f=w,u=g,h=T)}}if(f>a)break;let d=c[u],m=c[h],x=n.get(d),p=n.get(m);x.add(p).multiplyScalar(.5);for(let g of t.get(m)||[]){let b=e[g];if(b.dead)continue;let T=s(b.a===m?b.b:b.a);if(T===d){b.dead=!0;continue}b.a=d,b.b=T,t.has(d)||t.set(d,[]),t.get(d).push(g)}i.set(m,d)}}function LT(n){let e=new Map,t=[],i=new Map;for(let[o,a]of n){let l=Vx(o),c=Vx(a);if(l===c)continue;e.has(l)||e.set(l,o.clone()),e.has(c)||e.set(c,a.clone());let u=t.length;t.push({a:l,b:c,used:!1,dead:!1}),i.has(l)||i.set(l,[]),i.has(c)||i.set(c,[]),i.get(l).push(u),i.get(c).push(u)}IT(e,t,i);function s(o,a){let l=i.get(o)||[],c=-1,u=-1/0,h=e.get(o),f=a?e.get(a):null;for(let d of l){if(t[d].used||t[d].dead)continue;if(!f)return d;let m=t[d],x=m.a===o?m.b:m.a,p=e.get(x),g=h.x-f.x,b=h.y-f.y,T=h.z-f.z,y=p.x-h.x,M=p.y-h.y,E=p.z-h.z,_=g*y+b*M+T*E;_>u&&(u=_,c=d)}return c}let r=[];for(let o=0;o<t.length;o++){if(t[o].used||t[o].dead)continue;let a=[],l=[],c=o,u=t[c].a,h=u,f=null,d=!1,m=t.length+2;for(let x=0;x<m;x++){t[c].used=!0,l.push(c),a.push(e.get(u).clone());let p=t[c].a===u?t[c].b:t[c].a;if(p===h){d=!0;break}let g=s(p,u);if(g<0)break;f=u,u=p,c=g}d&&a.length>=3&&r.push(a)}return r}function DT(n){let e=n.clone().normalize(),t=Math.abs(e.x)<.9?new I(1,0,0):new I(0,1,0),i=new I().crossVectors(t,e).normalize(),s=new I().crossVectors(e,i).normalize();return{u:i,v:s,n:e}}function NT(n,e,t,i){return n.map(s=>{let r=s.clone().sub(e);return{x:r.dot(t),y:r.dot(i),p3:s}})}function OT(n){let e=0;for(let t=0;t<n.length;t++){let i=(t+1)%n.length;e+=n[t].x*n[i].y-n[i].x*n[t].y}return e*.5}function UT(n){return OT(n)<0&&n.reverse(),n}function Gx(n,e,t){let i=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){let o=t[s].y,a=t[r].y,l=t[s].x,c=t[r].x;o>e!=a>e&&n<(c-l)*(e-o)/(a-o+0)+l&&(i=!i)}return i}function Is(n,e,t){return(e.x-n.x)*(t.y-n.y)-(e.y-n.y)*(t.x-n.x)}function FT(n,e,t,i){let s=Is(n,e,t),r=Is(n,e,i),o=Is(t,i,n),a=Is(t,i,e);return s*r<0&&o*a<0}function Wx(n,e,t,i){let s=t.length;for(let r=0;r<s;r++){let o=(r+1)%s;if(!(i>=0&&(r===i||o===i))&&FT(n,e,t[r],t[o]))return!0}return!1}function BT(n,e){let t=0;for(let f=1;f<e.length;f++)e[f].x>e[t].x&&(t=f);let i=e[t],s=-1,r=1/0,o=n.length;for(let f=0;f<o;f++){let d=n[f],m=n[(f+1)%o];if(d.y>i.y==m.y>i.y)continue;let x=m.y-d.y;if(Math.abs(x)<1e-15)continue;let p=(i.y-d.y)/x;if(p<-1e-8||p>1+1e-8)continue;let g=d.x+p*(m.x-d.x);g>=i.x-1e-8&&g<r&&(r=g,s=f)}let a=[];s>=0&&a.push(s,(s+1)%o);let l=0,c=1/0;for(let f=0;f<o;f++){let d=(n[f].x-i.x)**2+(n[f].y-i.y)**2;d<c&&(c=d,l=f)}a.push(l);let u=-1;for(let f of a)if(!Wx(i,n[f],n,f)&&!Wx(i,n[f],e,t)){u=f;break}if(u<0)return null;let h=[];for(let f=0;f<o;f++)if(h.push(n[f]),f===u){for(let d=0;d<e.length;d++)h.push(e[(t-d+e.length)%e.length]);h.push(e[t]),h.push(n[f])}return h}function dp(n,e){return(n.x-e.x)**2+(n.y-e.y)**2<=Rr*Rr}function kT(n,e,t,i){if(dp(n,e)||dp(n,t)||dp(n,i))return!1;let s=Is(e,t,n),r=Is(t,i,n),o=Is(i,e,n),a=s<-1e-14||r<-1e-14||o<-1e-14,l=s>1e-14||r>1e-14||o>1e-14;return!(a&&l)}function zT(n){let e=[];for(let s of n){let r=e[e.length-1];r&&(r.x-s.x)**2+(r.y-s.y)**2<Rr*Rr||e.push(s)}if(e.length>=2){let s=e[0],r=e[e.length-1];(s.x-r.x)**2+(s.y-r.y)**2<Rr*Rr&&e.pop()}let t=[],i=e.length*e.length+8;for(;e.length>3&&i-- >0;){let s=!1,r=e.length;for(let o=0;o<r;o++){let a=(o+r-1)%r,l=(o+1)%r,c=e[a],u=e[o],h=e[l],f=Is(c,u,h);if(f<-1e-14)continue;if(f<=1e-14){e.splice(o,1),s=!0;break}let d=!1;for(let m=0;m<r;m++)if(!(m===o||m===a||m===l)&&kT(e[m],c,u,h)){d=!0;break}if(!d){t.push([c.p3,u.p3,h.p3]),e.splice(o,1),s=!0;break}}if(!s)break}return e.length===3&&Is(e[0],e[1],e[2])>1e-14&&t.push([e[0].p3,e[1].p3,e[2].p3]),t}function HT(n,e,t){if(!n.length)return[];let{u:i,v:s,n:r}=DT(e.normal),o=n[0][0],a=n.map(u=>UT(NT(u,o,i,s))),l=a.map((u,h)=>{let f=u[0],d=0;for(let m=0;m<a.length;m++)m!==h&&Gx(f.x,f.y,a[m])&&d++;return d}),c=[];for(let u=0;u<a.length;u++){if(l[u]%2!==0)continue;let h=a[u].slice();for(let d=0;d<a.length;d++){if(l[d]!==l[u]+1||!Gx(a[d][0].x,a[d][0].y,h))continue;let m=BT(h,a[d]);m&&(h=m)}let f=zT(h);for(let d of f)c.push(d.map(m=>m.clone().addScaledVector(r,t)))}return c}function qx(n,e){return!n||!e?.length?[]:Xx(n,e).perPlane}function $x(n,e,t=0){if(!n?.length||!e)return new Float32Array(0);let i=LT(n),s=HT(i,e,CT+Math.max(0,t));if(!s.length)return new Float32Array(0);let r=new Float32Array(s.length*9),o=0;for(let[a,l,c]of s)r[o++]=a.x,r[o++]=a.y,r[o++]=a.z,r[o++]=l.x,r[o++]=l.y,r[o++]=l.z,r[o++]=c.x,r[o++]=c.y,r[o++]=c.z;return r}function Ex(n,e){return!n||!e?.length?new Float32Array(0):Xx(n,e).segments}function Zu(n,e){if(!n?.length)return[];let t=new at().copy(e).invert();return n.map(i=>i.clone().applyMatrix4(t))}function VT(n){let e=new Float32Array(n.length*9),t=0;for(let[s,r,o]of n)e[t++]=s.x,e[t++]=s.y,e[t++]=s.z,e[t++]=r.x,e[t++]=r.y,e[t++]=r.z,e[t++]=o.x,e[t++]=o.y,e[t++]=o.z;let i=new Ot;return i.setAttribute("position",new Ft(e,3)),i.computeVertexNormals(),i}function Yx(n,e){if(!n.visible||!n.geometry)return null;let t=AT(n.geometry,n.matrixWorld);if(t.length===0)return null;let i=e.length?TT(t,e):t;if(i.length===0)return null;let s=VT(i),r=Ux(n.material,s),o=new dt(s,r);return o.name=n.name,o}var GT=5e-5;function eh(n){return!!(n&&n.userData&&n.userData.isSectionCap)}function pp(n){return n?Array.isArray(n)?n[0]||null:n:null}function Kx(n,e){let t;return n.isMeshPhysicalMaterial?t=new hn:n.isMeshStandardMaterial?t=new Ln:t=new on,n.color&&t.color&&t.color.copy(n.color),n.map&&"map"in t&&(t.map=n.map),typeof n.roughness=="number"&&"roughness"in t&&(t.roughness=n.roughness),typeof n.metalness=="number"&&"metalness"in t&&(t.metalness=n.metalness),typeof n.clearcoat=="number"&&"clearcoat"in t&&(t.clearcoat=n.clearcoat,t.clearcoatRoughness=n.clearcoatRoughness??.3),typeof n.envMapIntensity=="number"&&"envMapIntensity"in t&&(t.envMapIntensity=n.envMapIntensity),t.opacity=typeof n.opacity=="number"?n.opacity:1,t.transparent=!!n.transparent,t.depthWrite=n.depthWrite!==!1,t.depthTest=n.depthTest!==!1,t.side=Lt,t.forceSinglePass=!!n.forceSinglePass,t.toneMapped=n.toneMapped!==!1,t.polygonOffset=!!n.polygonOffset,t.polygonOffsetFactor=n.polygonOffsetFactor||0,t.polygonOffsetUnits=n.polygonOffsetUnits||0,t.clippingPlanes=e,t.clipIntersection=!1,fp(t,n.userData?.layerDepthBias||0),hl(t),t.needsUpdate=!0,t}function Qu(n){n.parent?.remove(n),n.geometry?.dispose?.();let e=n.material,t=Array.isArray(e)?e:[e];for(let i of t)i&&(i.map=null),i?.dispose?.()}function WT(n){let e="";for(let t of n)e+=`${t.normal.x.toFixed(5)},${t.normal.y.toFixed(5)},${t.normal.z.toFixed(5)},${t.constant.toFixed(5)};`;return e}function XT(n,e){if(!n)return null;for(let t of n.children)if(t.userData?.isSectionCap&&t.userData.capLabel===e)return t;return null}function Jx(n,e){let t=new Set;for(let i of n){let s=i.parent;if(!s||t.has(s))continue;t.add(s);let r=XT(s,e);if(r)return r}return null}function Zx(n,e,t){n.visible=!0;for(let i of n.children){if(!i.isMesh)continue;let s=pp(i.material);s&&(e.color&&s.color&&s.color.copy(e.color),s.opacity=typeof e.opacity=="number"?e.opacity:1,s.transparent=!!e.transparent,s.depthWrite=e.depthWrite!==!1,s.depthTest=e.depthTest!==!1,s.forceSinglePass=!!e.forceSinglePass,s.side=Lt,s.needsUpdate=!0,i.visible=!0,i.renderOrder=t)}}function qT(n,e,t,i){let s=e.filter(d=>d?.isMesh&&d.visible&&!eh(d)&&d.geometry),r=Jx(e,n);if(!s.length||!t.length){r&&Qu(r);return}let o=s[0],a=o.parent;if(!a)return;r&&r.parent!==a&&Qu(r);let l=r&&r.parent===a?r:new zt;for(let d of[...l.children])Qu(d);l.parent||(l.name=`${n}__caps`,l.userData.isSectionCap=!0,l.userData.capLabel=n,a.add(l));let c=pp(o.material);if(!c)return;a.updateWorldMatrix(!0,!0);let u=new at().copy(a.matrixWorld).invert(),h=typeof o.userData.opaqueRenderOrder=="number"?o.userData.opaqueRenderOrder:o.renderOrder||0,f=t.map(()=>[]);for(let d of s){d.updateWorldMatrix(!0,!1);let m=Zu(t,d.matrixWorld),x=qx(d.geometry,m);for(let p=0;p<t.length;p++){let g=x[p]||[];for(let[b,T]of g)f[p].push([b.clone().applyMatrix4(d.matrixWorld),T.clone().applyMatrix4(d.matrixWorld)])}}for(let d=0;d<t.length;d++){let m=$x(f[d],t[d],h*GT);if(m.length<9)continue;for(let b=0;b<m.length;b+=3){let T=new I(m[b],m[b+1],m[b+2]).applyMatrix4(u);m[b]=T.x,m[b+1]=T.y,m[b+2]=T.z}let x=new Ot;x.setAttribute("position",new Ft(m,3)),x.computeVertexNormals();let p=t.filter((b,T)=>T!==d),g=new dt(x,Kx(c,p));g.name=`${n}__cap${d}`,g.userData.isSectionCap=!0,g.userData.capPlaneIndex=d,g.userData.capLabel=n,g.renderOrder=o.renderOrder,g.raycast=()=>{},l.add(g)}l.userData.bpCapSig=i,l.userData.bpCapMatUuid=c.uuid,l.visible=l.children.length>0}function mp(n,e){let t=e||[],i=WT(t);for(let[s,r]of n){let o=(r||[]).filter(u=>u&&!eh(u));if(!o.length)continue;let a=o.filter(u=>u.visible),l=Jx(o,s);if(!t.length||!a.length){l&&Qu(l);continue}let c=pp(a[0].material);if(l&&l.userData.bpCapSig===i&&c&&l.userData.bpCapMatUuid===c.uuid&&l.children.length){Zx(l,c,a[0].renderOrder||0);continue}if(l&&l.userData.bpCapSig===i&&c&&l.children.length){for(let u of l.children){if(!u.isMesh)continue;let h=u.material,f=u.userData.capPlaneIndex,d=typeof f=="number"?t.filter((x,p)=>p!==f):t;u.material=Kx(c,d);let m=Array.isArray(h)?h:[h];for(let x of m)x&&(x.map=null),x?.dispose?.()}l.userData.bpCapMatUuid=c.uuid,Zx(l,c,a[0].renderOrder||0);continue}qT(s,o,t,i)}}var $T=2,YT=.45,jx=.015;function gp(n){let e=new Gt().setFromObject(n);if(e.isEmpty())return{cx:0,cz:0,minY:0,spanM:0,scale:1,liftM:jx};let t=new I;e.getSize(t);let i=Math.max(t.x,t.y,t.z,1e-9),s=i>$T?YT/i:1;return{cx:(e.min.x+e.max.x)/2,cz:(e.min.z+e.max.z)/2,minY:e.min.y,spanM:i,scale:s,liftM:jx}}function Qx(n,e=gp(n)){let{cx:t,cz:i,minY:s,scale:r,liftM:o}=e;return n.position.set(-t*r,-s*r+o,-i*r),n.scale.setScalar(r),n.updateMatrixWorld(!0),e}var ZT=`
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
`,ey=!1;function KT(){if(ey)return;ey=!0;let n=document.createElement("style");n.id="bp-viewer-chrome",n.textContent=ZT,document.head.appendChild(n)}function ty(n){KT();let e=document.getElementById("sheet"),t=document.getElementById("sheet-handle"),i=document.getElementById("sheet-scroll"),s=window.matchMedia("(min-width: 768px)"),r=window.matchMedia("(prefers-color-scheme: dark)"),o=[],a="peek";function l(){return s.matches}function c(){return a}function u(){for(let oe of o)oe(a)}function h(oe){o.push(oe),oe(a)}function f(){if(!e||!i)return;let oe=document.getElementById("sheet-inspector"),ke=document.getElementById("sheet-main");if(oe&&!oe.hidden&&ke?.hidden){let C=parseFloat(e.style.getPropertyValue("--sheet-partial-h"));if(Number.isFinite(C)&&C>0)return C}let je=document.getElementById("section-view"),re=document.getElementById("section-cuts"),A=t?.offsetHeight||22,J=16,Q=0;if(je&&(Q+=je.offsetHeight),re){let C=re.querySelector(".sheet-title"),S=re.querySelector(".cut-row");Q+=32,C&&(Q+=C.offsetHeight+8),S?Q+=S.offsetHeight:Q+=re.offsetHeight}let Ee=A+Q+J,$=window.innerHeight||640,ve=Math.round($*.28),me=Math.round($*.45),we=Math.max(ve,Math.min(me,Math.round(Ee)));return e.style.setProperty("--sheet-partial-h",`${we}px`),we}function d(){f(),!l()&&a==="partial"&&u()}function m(oe){let ke=getComputedStyle(document.documentElement).getPropertyValue(`--safe-${oe}`).trim(),je=parseFloat(ke);return Number.isFinite(je)?je:0}function x(){let oe={top:0,right:0,bottom:0,left:0};if(!e)return oe;if(l()){if(a!=="open")return oe;let je=e.offsetWidth||0;return{top:0,right:Math.max(0,Math.round(je)),bottom:0,left:0}}if(a!=="partial")return oe;let ke=Math.round(K()+m("b"));return{top:0,right:0,bottom:Math.max(0,Math.min(window.innerHeight-80,ke)),left:0}}function p(oe,ke={}){if(!e)return;(l()?["closed","open"]:["peek","partial","full"]).includes(oe)||(oe=l()?"open":"peek"),a=oe,e.dataset.detent=oe,e.classList.toggle("sheet-open",oe!=="peek"&&oe!=="closed"),document.body.classList.toggle("sheet-open",oe!=="peek"&&oe!=="closed"),y(),ke.silent||u()}function g(){l()?p("open"):p("peek"),f()}let b=document.getElementById("top-chrome"),T=document.getElementById("sheet-toggle");if(!T&&b){let oe=b.querySelector(".top-chrome-end");oe||(oe=document.createElement("div"),oe.className="top-chrome-end",b.append(oe)),T=document.createElement("button"),T.type="button",T.id="sheet-toggle",T.className="chrome-btn sheet-toggle",oe.append(T)}function y(){if(!T)return;let oe=a==="open";T.setAttribute("aria-expanded",oe?"true":"false"),T.setAttribute("aria-label",oe?"Hide controls":"Show controls"),T.title=oe?"Hide controls":"Show controls",T.textContent=oe?"\u203A":"\u2039"}T?.addEventListener("click",()=>{l()&&p(a==="open"?"closed":"open")});let M=!1,E=null,_=!1,w=!1,D=0,L=0,k=0,X=0,z="peek",N=0,W=0,j=0,q=0,_e=0,Z=null,V=12,ee=28,be='input, button, a, textarea, select, label, .seg, [role="slider"], [data-no-sheet-drag]';function Re(){return Math.max(t?.offsetHeight||34,34)+8}function K(){return f()||window.innerHeight*.38}function ue(){let oe=window.innerHeight||640;return Math.min(oe*.92,oe-72)}function B(){return e?.offsetWidth||0}function te(oe){return oe instanceof Element?!!oe.closest(be):!1}function ge(){if(l()){p(a==="open"?"closed":"open");return}p(a==="peek"?"partial":a==="partial"?"full":"peek")}function Se(){e&&(e.style.transform="",e.style.opacity="",e.style.pointerEvents="")}function qe(oe,ke,je){if(e){M=!0,_=!1,E=ke,w=!1,z=a,D=oe.clientY,L=oe.clientX,N=D,W=L,j=performance.now(),q=0,_e=0,X=je,Z=oe.pointerId,e.classList.add("is-dragging"),e.style.transform=`translateX(${X}px)`,e.style.pointerEvents="auto";try{e.setPointerCapture(oe.pointerId)}catch{}}}function Ue(oe){if(!(!e||!t)&&!(oe.target!==t&&!t.contains(oe.target)&&oe.target!==e)){M=!0,_=!1,E="narrow",w=!1,z=a,e.classList.add("is-dragging"),D=oe.clientY,L=oe.clientX,N=D,W=L,j=performance.now(),q=0,_e=0,k=e.getBoundingClientRect().height,Z=oe.pointerId;try{t.setPointerCapture(oe.pointerId)}catch{}oe.preventDefault()}}function Ye(oe){if(!e||oe.pointerType==="mouse"&&oe.button!==0||oe.target instanceof Element&&oe.target.closest(".chrome-btn"))return;let ke=B();if(a==="closed"){let je=window.innerWidth-ee-m("r");if(oe.clientX<je)return;qe(oe,"wide-open",ke),oe.preventDefault();return}e.contains(oe.target)&&(te(oe.target)||(M=!0,_=!0,E="wide-close",w=!1,z=a,D=oe.clientY,L=oe.clientX,N=D,W=L,j=performance.now(),q=0,_e=0,X=0,Z=oe.pointerId))}function he(oe){l()?Ye(oe):Ue(oe)}function Ae(oe){if(!M||!e||Z!=null&&oe.pointerId!==Z)return;let ke=performance.now(),je=Math.max(1,ke-j),re=Math.hypot(oe.clientX-L,oe.clientY-D);if(_){if(re<=V)return;let Ee=oe.clientX-L,$=oe.clientY-D;if(Math.abs(Ee)<Math.abs($)*1.15||Ee<=0){M=!1,_=!1,E=null,Z=null;return}_=!1,w=!0,e.classList.add("is-dragging"),i&&(i.style.overflow="hidden");try{e.setPointerCapture(oe.pointerId)}catch{}oe.preventDefault()}if(re>V&&(w=!0),E==="narrow"){let Ee=D-oe.clientY;q=(N-oe.clientY)/je*1e3,N=oe.clientY,j=ke;let $=Re(),ve=ue(),me=Math.max($,Math.min(ve,k+Ee));e.style.height=`${me}px`;return}let A=oe.clientX-L;_e=(oe.clientX-W)/je*1e3,W=oe.clientX,j=ke;let J=B(),Q=Math.max(0,Math.min(J,X+A));e.style.transform=`translateX(${Q}px)`}function Le(oe,ke){let je=[{name:"peek",h:Re()},{name:"partial",h:K()},{name:"full",h:ue()}],re=Math.max(0,je.findIndex(ve=>ve.name===z)),A=je[re].h;if(Math.abs(oe-A)<36&&Math.abs(ke)<1100)return z;let J=oe+ke*.05,Q=(je[0].h+je[1].h)/2,Ee=(je[1].h+je[2].h)/2,$=J<Q?0:J<Ee?1:2;if($>re+1&&($=re+1),$<re-1&&($=re-1),$===2&&re<2){let ve=Ee+(je[2].h-Ee)*.25;oe<ve&&ke<1400&&($=1)}return je[$].name}function Be(oe,ke){let je=B();return je<=0||Math.abs(oe-(z==="closed"?je:0))<28&&Math.abs(ke)<800?z:ke>900?"closed":ke<-900?"open":oe>je*.45?"closed":"open"}function Ge(oe){if(!M||!e||Z!=null&&oe.pointerId!==Z)return;let ke=E,je=_;if(M=!1,_=!1,E=null,Z=null,e.classList.remove("is-dragging"),i&&(i.style.overflow=""),je&&!w)return;if(!w){ke==="narrow"?(e.style.height="",ge()):ke==="wide-open"?(Se(),p("open")):Se();return}if(ke==="narrow"){let J=e.getBoundingClientRect().height;e.style.height="",p(Le(J,q));return}let re=/translateX\(([-\d.]+)px\)/.exec(e.style.transform||""),A=re?parseFloat(re[1]):0;Se(),p(Be(A,_e))}t?.addEventListener("pointerdown",oe=>{l()||he(oe)}),t?.addEventListener("pointermove",Ae),t?.addEventListener("pointerup",Ge),t?.addEventListener("pointercancel",Ge),t&&t.setAttribute("aria-label","Sheet handle \u2014 tap to resize, drag to adjust"),document.addEventListener("pointerdown",oe=>{l()&&Ye(oe)},{capture:!0}),document.addEventListener("pointermove",Ae,{capture:!0}),document.addEventListener("pointerup",Ge,{capture:!0}),document.addEventListener("pointercancel",Ge,{capture:!0});let Je=()=>{e&&(e.style.height=""),Se(),i&&(i.style.overflow=""),g()};s.addEventListener?s.addEventListener("change",Je):s.addListener(Je);function ot(){n(r.matches)}return ot(),r.addEventListener?r.addEventListener("change",ot):r.addListener(ot),window.addEventListener("resize",()=>{f(),u()}),g(),y(),{getDetent:c,getSafeInsets:x,onDetentChange:h,refreshPartialHeight:d,setDetent:p}}function th(n={}){let e=n.min??0,t=n.max??1,i=n.step??.001,s=!!n.thumbScrubOnly,r=dl(n.value??e,e,t),o=document.createElement("div");o.className="coop-range",o.setAttribute("role","slider"),o.tabIndex=0,n.ariaLabel&&o.setAttribute("aria-label",n.ariaLabel),o.setAttribute("aria-valuemin",String(e)),o.setAttribute("aria-valuemax",String(t));let a=document.createElement("div");a.className="coop-range-track";let l=document.createElement("div");l.className="coop-range-fill";let c=document.createElement("div");c.className="coop-range-thumb",a.append(l,c),o.append(a);let u=10,h=14,f=null,d=0,m=0,x=!1,p=!1,g=!1,b=!0;function T(){let N=`${(t===e?0:(r-e)/(t-e))*100}%`;l.style.width=N,c.style.left=N,o.setAttribute("aria-valuenow",String(r));let W=n.formatAriaValue?.(r)??String(r);o.setAttribute("aria-valuetext",W)}function y(z,N){let W=typeof c.getBoundingClientRect=="function"?c.getBoundingClientRect():null;return!W||!(W.width>0)||!(W.height>0)?!0:z>=W.left-h&&z<=W.right+h&&N>=W.top-h&&N<=W.bottom+h}function M(z,N="input"){let W=JT(dl(z,e,t),e,t,i);if(W===r&&N==="silent"){T();return}r=W,T(),(N==="input"||N==="change")&&n.onInput?.(r),N==="change"&&n.onChange?.(r)}function E(z){let N=a.getBoundingClientRect(),W=Math.max(N.width,1),j=dl((z-N.left)/W,0,1);return e+j*(t-e)}function _(z){if(f==null)return;let N=p;f=null,x=!1,p=!1,b=!0,N&&n.onScrubEnd?.(),z&&N&&n.onChange?.(r)}function w(z){f==null&&(z.pointerType==="mouse"&&z.button!==0||(f=z.pointerId,d=z.clientX,m=z.clientY,g=!1,x=!1,p=!1,b=!s||y(z.clientX,z.clientY)))}function D(z){if(f!==z.pointerId)return;let N=z.clientX-d,W=z.clientY-m;if(!g&&Math.hypot(N,W)>u&&(g=!0),!x){if(!g)return;if(z.pointerType==="touch"&&Math.abs(W)>=Math.abs(N)){_(!1);return}if(!b){_(!1);return}x=!0,p=!0,n.onScrubStart?.();try{o.setPointerCapture(z.pointerId)}catch{}}M(E(z.clientX),"input"),z.preventDefault()}function L(z){if(f===z.pointerId){if(!g&&!p){f=null,x=!1,p=!1,b=!0,n.onTap?.();return}_(!0)}}function k(z){f===z.pointerId&&_(!1)}function X(z){let N=t-e,W=i>0?i:N/100,j=N/10,q=r;switch(z.key){case"ArrowLeft":case"ArrowDown":q=r-W;break;case"ArrowRight":case"ArrowUp":q=r+W;break;case"PageDown":q=r-j;break;case"PageUp":q=r+j;break;case"Home":q=e;break;case"End":q=t;break;case"Enter":case" ":z.preventDefault(),n.onTap?.();return;default:return}z.preventDefault(),M(q,"change")}return o.addEventListener("pointerdown",w),o.addEventListener("pointermove",D),o.addEventListener("pointerup",L),o.addEventListener("pointercancel",k),o.addEventListener("keydown",X),T(),{el:o,get value(){return r},set value(z){M(z,"silent")},refresh(){T()}}}function dl(n,e,t){return Math.min(t,Math.max(e,n))}function JT(n,e,t,i){if(!(i>0))return dl(n,e,t);let s=Math.round((n-e)/i),r=Number((e+s*i).toPrecision(12));return dl(r,e,t)}var ny="blueprints.locale",jT={shell:"Shell",slopes:"Slopes",soffit:"Soffit",bass_traps:"Bass traps",furniture:"Furniture",interior:"Interior",cabinet:"Cabinets",appliance:"Appliances",sink:"Sink",rug:"Rug",light:"Lights",door:"Door",other:"Other",floor:"Floor",masonry:"Masonry",column:"Column",venec:"Ring beam",eps:"EPS",plaster:"Plaster",wall_plate:"Wall plate",rafters:"Rafters",roofing:"Roofing build-up",plenum_wool:"Mineral wool \u03BB 0.039",racking_strap:"Racking strap",tie_rod:"Tie rod \xD814",slope_light:"Slope spotlight",pocket_frame:"Pocket-door frame",wall_gkf:"GKF plasterboard",glazing:"Glazing",slope_naturheld_140:"NaturHeld 140",slope_gkf:"GKF plasterboard",slope_cd:"CD Rigips 60\xD727",slope_foil:"Jutafol N AL 170 Speci\xE1l",eave_ud:"UD 28/27 on the wall plate",vapour_brake_tape:"Vapour brake bond tape",eave_acrylic:"Acrylic bead (planned cut)",joint_screw:"Screws",slope_direct_hanger:"Direct hanger 200",slope_nonius:"Nonius 440",soffit_naturheld_140:"NaturHeld 140",soffit_mineral_wool:"Mineral wool \u03BB 0.039",soffit_ud:"UD channel",soffit_gkf:"GKF plasterboard",soffit_cd:"CD Rigips 60\xD727",soffit_nonius:"Nonius 440",soffit_duct:"Spiral duct \xD8160",bass_mineral_wool:"Mineral wool \u03BB 0.039",bass_gkb:"GKB plasterboard",bass_cw:"CW stud",bass_uw:"UW track",bass_strut:"CW strut to wall",bass_angle:"Wall angle",bass_anchor:"Anchor into the block",bass_tape:"Sealing tape",bass_acrylic:"Acrylic joint",bathroom:"Bathroom 1.20",tile:"Tiles",grout:"Grout",drain:"Floor drain",fixture:"Sanitary fixture",prewall:"Pre-wall",screen:"Shower screen",profile:"Sloped edge profile",vanity:"Vanity cabinet"},QT={shell:"Ob\xE1lka",slopes:"\u0160ikminy",soffit:"Podhled",bass_traps:"Basstrapy",furniture:"N\xE1bytek",interior:"Interi\xE9r",cabinet:"Sk\u0159\xED\u0148ky",appliance:"Spot\u0159ebi\u010De",sink:"D\u0159ez",rug:"Koberec",light:"Sv\xEDtidla",door:"Dve\u0159e",other:"Ostatn\xED",floor:"Podlaha",masonry:"Zdivo",column:"Sloup",venec:"V\u011Bnec",eps:"EPS",plaster:"Om\xEDtka",wall_plate:"Pozednice",rafters:"Krokve",roofing:"St\u0159e\u0161n\xED skladba",plenum_wool:"Miner\xE1ln\xED vata \u03BB 0,039",racking_strap:"Zav\u011Btrovac\xED p\xE1ska",tie_rod:"T\xE1hlo \xF814",slope_light:"Bodovka na \u0161ikmin\u011B",pocket_frame:"Pouzdro",wall_gkf:"GKF s\xE1drokarton",glazing:"Zasklen\xED",slope_naturheld_140:"NaturHeld 140",slope_gkf:"GKF s\xE1drokarton",slope_cd:"CD Rigips 60\xD727",slope_foil:"Jutafol N AL 170 Speci\xE1l",eave_ud:"UD 28/27 na pozednici",vapour_brake_tape:"Lepic\xED p\xE1ska paroz\xE1brany",eave_acrylic:"Akrylov\xFD tmel (\u0159ez)",joint_screw:"\u0160rouby",slope_direct_hanger:"P\u0159\xEDm\xFD z\xE1v\u011Bs 200",slope_nonius:"Nonius 440",soffit_naturheld_140:"NaturHeld 140",soffit_mineral_wool:"Miner\xE1ln\xED vata \u03BB 0,039",soffit_ud:"UD profil",soffit_gkf:"GKF s\xE1drokarton",soffit_cd:"CD Rigips 60\xD727",soffit_nonius:"Nonius 440",soffit_duct:"Spiro \xD8160",bass_mineral_wool:"Miner\xE1ln\xED vata \u03BB 0,039",bass_gkb:"GKB s\xE1drokarton",bass_cw:"CW stojka",bass_uw:"UW profil",bass_strut:"CW vzp\u011Bra do zdi",bass_angle:"\xDAheln\xEDk do zdi",bass_anchor:"Hmo\u017Edinka do zdiva",bass_tape:"T\u011Bsnic\xED p\xE1ska",bass_acrylic:"Akrylov\xFD spoj",bathroom:"Koupelna 1.20",tile:"Dla\u017Eba",grout:"Sp\xE1ry",drain:"Podlahov\xE1 vpus\u0165",fixture:"Za\u0159izovac\xED p\u0159edm\u011Bt",prewall:"P\u0159\xEDzd\xEDvka",screen:"Sprchov\xE9 sklo",profile:"Sp\xE1dov\xE1 li\u0161ta",vanity:"Sk\u0159\xED\u0148ka umyvadla"},eA={"ui.view":"View","ui.sections":"Cuts","ui.parts":"Parts","ui.materials":"Materials","ui.edges":"Edges","ui.language":"Language","ui.solid":"Solid","ui.realistic":"Realistic","ui.edgesNone":"None","ui.edgesTransparent":"Transparent","ui.edgesOpaque":"Opaque","ui.iso":"Iso","ui.front":"Front","ui.side":"Side","ui.top":"Top","ui.fov":"FOV","ui.sync":"Sync","ui.measure":"Measure","ui.ar":"AR","ui.cut":"Cut","ui.removeSection":"Remove","ui.hideControls":"Hide controls","ui.showControls":"Show controls","ui.dragSheet":"Drag controls sheet","ui.drawing":"Drawing","ui.labels":"Labels","ui.inspector":"Inspector","ui.menu":"Menu","ui.showAll":"Show all","ui.hideThis":"Hide this","ui.unhideThis":"Unhide this","ui.hideOthers":"Hide all others","ui.unhideOthers":"Unhide all others","ui.expand":"Expand","ui.collapse":"Collapse","ui.globalId":"GlobalId","ui.type":"Type","ui.name":"Name","ui.storey":"Storey","ui.space":"Space","ui.dimensions":"Dimensions","ui.note":"Note","ui.reveal":"Show in inspector","ui.noIfc":"No IFC record","ui.open":"Open","ui.close":"Close","ui.turnOn":"Turn on","ui.turnOff":"Turn off","ui.press":"Press","home.title":"Home","home.live":"Live","home.off":"Off","home.on":"On","home.statusOff":"Offline model. Taps only change this view.","home.statusConnecting":"Connecting to Home\u2026","home.statusLive":"Live: state from Home. Taps send commands.","home.statusLiveNoSim":"Live: state from Home. Rocker presses are off on this server.","home.statusUnreachable":"Home unreachable. Showing the offline model; retrying.","home.failed":"Home refused the command","home.deviceOffline":"Device offline (last known state)","home.unknown":"Unknown","home.level":"Level","home.warm":"Warm","home.cool":"Cool","home.lastEvent":"Last event","home.noEvents":"No presses yet","home.contactClosed":"Closed (contact)","home.contactOpen":"Open (no contact)","home.occupied":"Occupied","home.vacant":"Vacant","home.closedPct":"Closed","home.up":"Up","home.down":"Down","home.stop":"Stop","scene.overview":"Overview","scene.opening":"Door and window","scene.posts":"120 mm posts","scene.soffit":"Podhled","scene.gable":"\u0160t\xEDt","scene.sikmina-lattice":"\u0160ikmina \u2014 ro\u0161t","scene.sikmina-section":"\u0160ikmina \u2014 \u0159ez","scene.bass-kitchen":"Basov\xE1 past \u2014 kuchy\u0148","scene.bass-living":"Basov\xE1 past \u2014 ob\xFDv\xE1k","scene.bass-kitchen-elevation":"Kuchy\u0148 \u2014 pohled","scene.bass-kitchen-section":"Kuchy\u0148 \u2014 \u0159ez","scene.bass-living-elevation":"Ob\xFDv\xE1k \u2014 pohled","scene.bass-living-section":"Ob\xFDv\xE1k \u2014 \u0159ez","scene.ties-front":"T\xE1hla a sv\u011Btla \u2014 pohled","scene.ties-plan":"T\xE1hla a sv\u011Btla \u2014 p\u016Fdorys","scene.ties-section":"T\xE1hlo \u2014 \u0159ez","scene.kitchen-living":"Kuchy\u0148 k ob\xFDv\xE1ku","scene.living-kitchen":"Ob\xFDv\xE1k ke kuchyni","scene.kitchen-run":"Kuchy\u0148sk\xE1 linka","scene.bathroom-floor":"1.20 floor tiles","scene.bathroom":"1.20 room","scene.bathroom-door":"1.20 door and slope"},tA={"ui.view":"Pohled","ui.sections":"\u0158ezy","ui.parts":"D\xEDly","ui.materials":"Materi\xE1ly","ui.edges":"Hrany","ui.language":"Jazyk","ui.solid":"Pln\xE9","ui.realistic":"Realistick\xE9","ui.edgesNone":"\u017D\xE1dn\xE9","ui.edgesTransparent":"Pr\u016Fhledn\xE9","ui.edgesOpaque":"Nepr\u016Fhledn\xE9","ui.iso":"Iso","ui.front":"\u010Celo","ui.side":"Bok","ui.top":"P\u016Fdorys","ui.fov":"FOV","ui.sync":"Sjednotit","ui.measure":"M\u011B\u0159en\xED","ui.ar":"AR","ui.cut":"\u0158ez","ui.removeSection":"Odstranit","ui.hideControls":"Skr\xFDt ovl\xE1d\xE1n\xED","ui.showControls":"Zobrazit ovl\xE1d\xE1n\xED","ui.dragSheet":"P\u0159et\xE1hnout panel","ui.drawing":"V\xFDkres","ui.labels":"Popisky","ui.inspector":"Inspektor","ui.menu":"Nab\xEDdka","ui.showAll":"Zobrazit v\u0161e","ui.hideThis":"Skr\xFDt toto","ui.unhideThis":"Zobrazit toto","ui.hideOthers":"Skr\xFDt ostatn\xED","ui.unhideOthers":"Zobrazit ostatn\xED","ui.expand":"Rozbalit","ui.collapse":"Sbalit","ui.globalId":"GlobalId","ui.type":"Typ","ui.name":"N\xE1zev","ui.storey":"Podla\u017E\xED","ui.space":"M\xEDstnost","ui.dimensions":"Rozm\u011Bry","ui.note":"Pozn\xE1mka","ui.reveal":"Zobrazit v inspektoru","ui.noIfc":"Bez IFC z\xE1znamu","ui.open":"Otev\u0159\xEDt","ui.close":"Zav\u0159\xEDt","ui.turnOn":"Zapnout","ui.turnOff":"Vypnout","ui.press":"Stisknout","home.title":"D\u016Fm","home.live":"\u017Div\u011B","home.off":"Vyp.","home.on":"Zap.","home.statusOff":"Offline model. Klepnut\xED m\u011Bn\xED jen tento pohled.","home.statusConnecting":"P\u0159ipojuji se k Home\u2026","home.statusLive":"\u017Div\u011B: stav z Home. Klepnut\xED pos\xEDlaj\xED p\u0159\xEDkazy.","home.statusLiveNoSim":"\u017Div\u011B: stav z Home. Stisky vyp\xEDna\u010D\u016F jsou na tomto serveru vypnut\xE9.","home.statusUnreachable":"Home nedostupn\xFD. Zobrazuji offline model a zkou\u0161\xEDm znovu.","home.failed":"Home p\u0159\xEDkaz odm\xEDtl","home.deviceOffline":"Za\u0159\xEDzen\xED offline (posledn\xED zn\xE1m\xFD stav)","home.unknown":"Nezn\xE1m\xFD","home.level":"Jas","home.warm":"Tepl\xE1","home.cool":"Studen\xE1","home.lastEvent":"Posledn\xED ud\xE1lost","home.noEvents":"Zat\xEDm bez stisku","home.contactClosed":"Zav\u0159eno (kontakt)","home.contactOpen":"Otev\u0159eno (bez kontaktu)","home.occupied":"Obsazeno","home.vacant":"Volno","home.closedPct":"Zav\u0159eno","home.up":"Nahoru","home.down":"Dol\u016F","home.stop":"Stop","scene.overview":"Celkov\u011B","scene.opening":"Dve\u0159e a okno","scene.posts":"Sloupky 120","scene.soffit":"Podhled","scene.gable":"\u0160t\xEDt","scene.sikmina-lattice":"\u0160ikmina \u2014 ro\u0161t","scene.sikmina-section":"\u0160ikmina \u2014 \u0159ez","scene.bass-kitchen":"Basov\xE1 past \u2014 kuchy\u0148","scene.bass-living":"Basov\xE1 past \u2014 ob\xFDv\xE1k","scene.bass-kitchen-elevation":"Kuchy\u0148 \u2014 pohled","scene.bass-kitchen-section":"Kuchy\u0148 \u2014 \u0159ez","scene.bass-living-elevation":"Ob\xFDv\xE1k \u2014 pohled","scene.bass-living-section":"Ob\xFDv\xE1k \u2014 \u0159ez","scene.ties-front":"T\xE1hla a sv\u011Btla \u2014 pohled","scene.ties-plan":"T\xE1hla a sv\u011Btla \u2014 p\u016Fdorys","scene.ties-section":"T\xE1hlo \u2014 \u0159ez","scene.kitchen-living":"Kuchy\u0148 k ob\xFDv\xE1ku","scene.living-kitchen":"Ob\xFDv\xE1k ke kuchyni","scene.kitchen-run":"Kuchy\u0148sk\xE1 linka","scene.bathroom-floor":"1.20 dla\u017Eba","scene.bathroom":"1.20 koupelna","scene.bathroom-door":"1.20 pr\xE1h a sp\xE1d"},xp={en:{...eA,...jT},cs:{...tA,...QT}},Bo=iy(),yp=new Set;function iy(){try{let n=typeof navigator<"u"&&navigator.language||"";if(String(n).toLowerCase().startsWith("cs"))return"cs"}catch{}return"en"}function nA(){try{let n=localStorage.getItem(ny);if(n==="en"||n==="cs")return n}catch{}return iy()}function iA(n){try{localStorage.setItem(ny,n)}catch{}}function nh(){return Bo}function sy(n){if(!(n!=="en"&&n!=="cs")&&n!==Bo){Bo=n,iA(n);for(let e of yp)try{e()}catch{}}}function _p(n){return yp.add(n),()=>yp.delete(n)}function ry(){return Bo=nA(),Bo}function Dt(n){let e=xp[Bo]||xp.en;if(Object.prototype.hasOwnProperty.call(e,n))return e[n];let t=xp.en;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:n.startsWith("scene.")?n.slice(6):n}function vp(n){let e=n||document;e.querySelectorAll("[data-i18n]").forEach(t=>{let i=t.getAttribute("data-i18n");i&&(t.textContent=Dt(i))}),e.querySelectorAll("[data-i18n-aria]").forEach(t=>{let i=t.getAttribute("data-i18n-aria");i&&t.setAttribute("aria-label",Dt(i))}),e.querySelectorAll("[data-i18n-title]").forEach(t=>{let i=t.getAttribute("data-i18n-title");i&&t.setAttribute("title",Dt(i))})}var bp=44,ih=.05,sA=.05;function sh(n){let e=n&&n.material;if(!e)return!1;let t=Array.isArray(e)?e:[e];return t.length?t.every(i=>i&&i.visible!==!1&&!(i.transparent&&(i.opacity??1)<.99)):!1}function ay(n,e,t={}){let i=t.isOccluder||sh,s=t.tolerance??ih,r=1/0;for(let o of n){let a=Number.isFinite(o.distance)?o.distance:0;if(a>r+s)break;let l=e(o);if(l)return{hit:o,claim:l,wallT:r};r===1/0&&i(o.object)&&(r=a)}return{hit:null,claim:null,wallT:r}}function ly(n,e,t={}){let i=(t.diameterPx??bp)/2,s=t.depthTie??sA,r=[];for(let c of n){if(!c||!Number.isFinite(c.x)||!Number.isFinite(c.y)||!(c.depth>0))continue;let u=Math.hypot(c.x-e.x,c.y-e.y);u>i||r.push({c,dist:u})}let o=t.isOccluded?r.filter(c=>!t.isOccluded(c.c)):r;if(!o.length)return null;let a=o[0];for(let c of o)c.c.depth<a.c.depth&&(a=c);let l=null;for(let c of o)(c.c.depth<=a.c.depth+s||a.c.group!=null&&c.c.group===a.c.group)&&(!l||c.dist<l.dist||c.dist===l.dist&&c.c.depth<l.c.depth)&&(l=c);return l?l.c:null}var Kn=new I;function cy(n,e,t){e.updateMatrixWorld?.(),Kn.copy(n).applyMatrix4(e.matrixWorldInverse);let i=-Kn.z;return!(i>0)||(Kn.copy(n).project(e),!(Math.abs(Kn.x)<=1&&Math.abs(Kn.y)<=1)||!(Kn.z>=-1&&Kn.z<=1))?null:{x:(Kn.x+1)/2*t.w,y:(1-Kn.y)/2*t.h,depth:i}}var Cr=new ei,oy=new $e;function uy(n,e,t,i,s={}){let r=s.keep||(()=>!0),o=s.isOccluder||sh,a=s.tolerance??ih,l;if(e.isOrthographicCamera)Kn.copy(n).project(e),oy.set(Kn.x,Kn.y),Cr.setFromCamera(oy,e),l=Kn.copy(n).sub(Cr.ray.origin).dot(Cr.ray.direction);else{let u=new I().setFromMatrixPosition(e.matrixWorld),h=Kn.copy(n).sub(u);if(l=h.length(),l<1e-9)return!1;Cr.set(u,h.normalize())}Cr.near=0,Cr.far=Math.max(0,l);let c=Cr.intersectObject(t,!0);for(let u of c){if(u.distance>=l-a)break;if(!(!r(u.object)||i(u.object))&&o(u.object))return!0}return!1}function hy(n,e,t){let i=n.getCenter(new I),s=n.getSize(new I),r=s.y/4,o=s.x>=s.z?new I(1,0,0):new I(0,0,1);o.dot(t)<0&&o.negate();let a=Math.max(s.x,s.z)/4,l=[];return e.forEach((c,u)=>{let h=i.clone();e.length>1&&h.addScaledVector(o,u===0?-a:a),l.push({rocker:c,position:"up",center:h.clone().setY(h.y+r)}),l.push({rocker:c,position:"down",center:h.clone().setY(h.y-r)})}),l}function Pr(n){return!!(n&&n.userData&&n.userData.bpHitProxy)}function Ir(n){if(!n||!n.visible||Pr(n))return!1;let e=n.userData||{};return!(e.bpIfcHidden||e.isEdgeOverlay||e.isSectionCap||e.isPeeledEdgeBatch)}function fy(){let n=[];function e(l){n.push(l),n.sort((c,u)=>(u.priority||0)-(c.priority||0))}function t(l,c){for(let u of n){let h=u.claim?.(l,c);if(h)return h}return null}function i(l,c){let u=[];for(let h of l)c&&!c(h)||u.push(h);return u}function s(l){let{camera:c,root:u,tap:h,size:f}=l||{};if(!c||!u||!h||!f)return null;let d=[];for(let b of n){let T=b.targets?.(l);if(Array.isArray(T))for(let y of T){if(!y?.center)continue;let M=cy(y.center,c,f);M&&d.push({...y,...M,handler:b})}}if(!d.length)return null;let m=b=>Ir(b),x=ly(d,h,{diameterPx:l.diameterPx??bp,isOccluded:b=>uy(b.center,c,u,T=>!!b.owns?.(T),{keep:m})});if(!x)return null;let p={...x.hit,point:x.hit?.point??x.center,extended:!0},g=x.handler.claim?.(p,l);return g?{hit:p,claim:g,target:x}:null}function r(l,c,u,h={}){let f=i(l,u),d=ay(f,p=>t(p,c),{isOccluder:p=>sh(p)});if(d.claim)return{kind:"direct",hit:d.hit,claim:d.claim};let m={...c,maxT:d.wallT+ih};for(let p of n)if(h.run?p.fallback?.(f,m):p.probe?.(f,m))return{kind:"fallback"};let x=s(c);if(x)return{kind:"extended",hit:x.hit,claim:x.claim};for(let p of f){let g=t(p,c);if(g)return{kind:"legacy",hit:p,claim:g}}return null}function o(l,c,u){let h=r(l,c,u,{run:!0});if(h?.kind==="fallback")return!0;if(h?.claim)return h.claim.onTap(),!0;let f=i(l,u);for(let d of n)if(d.fallback?.(f,c))return!0;return!1}function a(l,c,u){let h=r(l,c,u);return h?.claim?Array.isArray(h.claim.actions)?h.claim.actions.slice():[]:[]}return{register:e,dispatch:o,actionsFor:a,resolve:r,handlers:n}}var dy=8,rA=56,py=14,Mp=11,my=.5,oA=1e-4,rh=128,aA=.028,lA=5,cA=.995,uA=.999,gy=18,hA=22,fA=14,Sp=new $e,xy=new ei,pi=new I,mi=new I,ts=new I,Bn=new I,Ho=new I,es=new I,ko=new I,zo=new I,Ut=new I,yy=new I,Vo=new I,dA=new yn;function Ep(n){let e=Math.abs(n)*1e3;return Number.isFinite(e)?Math.abs(e-Math.round(e))<.05?`${Math.round(e)} mm`:e>=100?`${e.toFixed(1)} mm`:`${e.toFixed(2)} mm`:"\u2014 mm"}function wp(n){return n.pointerType==="touch"}function Tp(n){return n.pointerType==="mouse"||n.pointerType==="pen"}function _y(){return typeof window<"u"&&window.matchMedia?.("(hover: hover) and (pointer: fine)").matches}function Ay(n){let{scene:e,canvas:t,getCamera:i,controls:s,getRoot:r,getClipPlanes:o,onLiveLength:a,onActiveChange:l}=n,c="idle",u=!1,h=!1,f=0,d=0,m=null,x=null,p=null,g=null,b=null,T=null,y=null,M="mouse",E=0,_=0,w=!1,D=!1,L=new zt;L.name="MeasureOverlay",L.renderOrder=10,e.add(L);let k=new zt;k.name="MeasureDimensions",e.add(k);let X=My(16766474),z=My(3458905),N=Sy(16766474,.75),W=yA(16766474);L.add(X,z,N,W),X.visible=!1,z.visible=!1,N.visible=!1,W.visible=!1;let j=gA(t),q=[];function _e(){return u}function Z(re){let A=!!re;if(A===u){A&&ee();return}if(u=A,u)if(s.enabled=!1,c="placeFirst",V(),b=null,T=null,_y()){let J=Math.max(1,t.clientWidth),Q=Math.max(1,t.clientHeight);Re(J*.5,Q*.5,!0)}else be();else s.enabled=!0,c="idle",V(),b=null,T=null,y=null,D=!1,be(),a?.(null);l?.(u),ee(),ue()}function V(){h=!1,m=null,x=null,p=null,g=null}function ee(){c==="placeSecond"&&b&&m?a?.(Ep(b.distanceTo(m))):u&&a?.(null)}function be(){j.hidden=!0,X.visible=!1,W.visible=!1}function Re(re,A,J=!1){f=re,d=A,h=!0;let Q=Ue(re,A);if(Q){let Ee=Q.point.clone(),$=Q.kind,ve=Q.edgeDir;if(g=null,c==="placeSecond"&&b){let me=Ye(b,T,Q);me&&(Ee=me.foot,$="perp",ve=me.edgeDir,g=me.edgeDir.clone())}m=Ee,x=$,p=ve}else J?m||(x=null,p=null,g=null):(m=null,x=null,p=null,g=null);ue(),ee()}function K(re,A){let J=Se(A)*lA;re.scale.setScalar(Math.max(J,1e-6))}function ue(){if(!u){be(),z.visible=!1,N.visible=!1,W.visible=!1;return}b?(z.visible=!0,z.position.copy(b),K(z,b)):z.visible=!1,h?(j.hidden=!1,by(j,t,f,d,x),m?(X.visible=!0,X.position.copy(m),K(X,m),xA(X,x)):X.visible=!1):be(),c==="placeSecond"&&b&&m?(wy(N,b,m),N.visible=!0):N.visible=!1,c==="placeSecond"&&x==="perp"&&b&&m&&g?(Ey(W,b,m,g,Se),W.visible=!0):W.visible=!1}function B(re){let A=t.getBoundingClientRect();return{x:re.clientX-A.left,y:re.clientY-A.top}}function te(re,A,J){return J==="touch"?{x:re,y:A-rA}:{x:re,y:A}}function ge(re){let A=o()||[];for(let J of A)if(J.distanceToPoint(re)<-oA)return!1;return!0}function Se(re){let A=i(),J=Math.max(1,t.clientHeight);if(A.isOrthographicCamera)return 2*((A.top-A.bottom)/(2*Math.max(A.zoom,1e-6)))/J;let Q=A.position.distanceTo(re),Ee=A.fov*Math.PI/180;return 2*Math.tan(Ee/2)*Q/J/Math.max(A.zoom,1e-6)}function qe(re,A){A.copy(re).project(i());let J=Math.max(1,t.clientWidth),Q=Math.max(1,t.clientHeight);return A.x=(A.x*.5+.5)*J,A.y=(-A.y*.5+.5)*Q,A}function Ue(re,A){let J=r();if(!J)return null;let Q=t.getBoundingClientRect();Sp.x=re/Math.max(1,Q.width)*2-1,Sp.y=-(A/Math.max(1,Q.height))*2+1,xy.setFromCamera(Sp,i());let Ee=xy.intersectObject(J,!0),$=null;for(let ze of Ee)if(!(!ze.object.visible||Pr(ze.object))&&ge(ze.point)){$=ze;break}if(!$)return null;let ve=$.object,me=ve.geometry;if(!me?.getAttribute("position"))return{point:$.point.clone(),kind:"face",edgeDir:null,mesh:ve,triVerts:null,faceNormal:null};ve.updateWorldMatrix(!0,!1);let we=Se($.point),C=we*py,S=we*Mp,G=me.getAttribute("position"),Me=me.getIndex(),pe=$.faceIndex,le=[];if($.face)pi.fromBufferAttribute(G,$.face.a).applyMatrix4(ve.matrixWorld),mi.fromBufferAttribute(G,$.face.b).applyMatrix4(ve.matrixWorld),ts.fromBufferAttribute(G,$.face.c).applyMatrix4(ve.matrixWorld),le.push(pi.clone(),mi.clone(),ts.clone());else if(typeof pe=="number"){let ze,st,Y;Me?(ze=Me.getX(pe*3),st=Me.getX(pe*3+1),Y=Me.getX(pe*3+2)):(ze=pe*3,st=pe*3+1,Y=pe*3+2),pi.fromBufferAttribute(G,ze).applyMatrix4(ve.matrixWorld),mi.fromBufferAttribute(G,st).applyMatrix4(ve.matrixWorld),ts.fromBufferAttribute(G,Y).applyMatrix4(ve.matrixWorld),le.push(pi.clone(),mi.clone(),ts.clone())}let xe=null;le.length===3&&(xe=new I().subVectors(le[1],le[0]).cross(Bn.subVectors(le[2],le[0])).normalize(),xe.lengthSq()<1e-12&&(xe=null));let se=re,fe=A,De=null;function F(ze){if(!ge(ze)||ze.distanceToSquared($.point)>C*C*4)return;qe(ze,zo);let st=Math.hypot(zo.x-se,zo.y-fe);st>py||(!De||st<De.distPx)&&(De={point:ze.clone(),distPx:st})}for(let ze of le)F(ze);let ye=C*C*4,de=G.count,Fe=de>8e3?2:1;for(let ze=0;ze<de;ze+=Fe)Bn.fromBufferAttribute(G,ze).applyMatrix4(ve.matrixWorld),!(Bn.distanceToSquared($.point)>ye)&&F(Bn);if(De)return{point:De.point,kind:"vertex",edgeDir:null,mesh:ve,triVerts:le.length?le:null,faceNormal:xe};let Ne=null;function Oe(ze,st){Ut.copy(st).sub(ze);let Y=Ut.lengthSq();if(Y<1e-18)return;let Pe=Bn.copy($.point).sub(ze).dot(Ut)/Y;if(Pe=Math.min(1,Math.max(0,Pe)),Ho.copy(ze).addScaledVector(Ut,Pe),!ge(Ho)||Ho.distanceToSquared($.point)>S*S*4)return;qe(Ho,zo);let rt=Math.hypot(zo.x-se,zo.y-fe);if(rt>Mp)return;qe(ze,es),qe(st,ko);let Ce=ko.x-es.x,pt=ko.y-es.y,Bt=Ce*Ce+pt*pt;if(Bt>1e-6){let kt=((se-es.x)*Ce+(fe-es.y)*pt)/Bt;kt=Math.min(1,Math.max(0,kt));let is=es.x+Ce*kt,Li=es.y+pt*kt;if(Math.hypot(se-is,fe-Li)>Mp)return}(!Ne||rt<Ne.distPx)&&(Ne={point:Ho.clone(),distPx:rt,dir:Ut.clone().normalize()})}return le.length===3&&(Oe(le[0],le[1]),Oe(le[1],le[2]),Oe(le[2],le[0])),Ne?{point:Ne.point,kind:"edge",edgeDir:Ne.dir,mesh:ve,triVerts:le.length?le:null,faceNormal:xe}:{point:$.point.clone(),kind:"face",edgeDir:null,mesh:ve,triVerts:le.length?le:null,faceNormal:xe}}function Ye(re,A,J){if(!J.mesh||!J.triVerts||J.triVerts.length!==3||!J.faceNormal||J.faceNormal.lengthSq()<1e-12)return null;let Q=Se(re),Ee=Q*fA,$=Math.max(Q*2,1e-5);if(Math.abs(oh(re,J.triVerts[0],J.faceNormal))>$)return null;let ve=he(J.mesh,J.triVerts[0],J.faceNormal,$);if(!ve.length)return null;let me=[];for(let S of ve)vy(re,S.a,S.b)<=Ee&&me.push(S.dir.clone());if(A&&A.lengthSq()>1e-12&&me.push(A.clone().normalize()),!me.length)return null;let we=Q*gy,C=null;for(let S of me)if(!(S.lengthSq()<1e-12)){S.normalize();for(let G of ve){if(Math.abs(G.dir.dot(S))<cA||vy(re,G.a,G.b)<=Ee)continue;let Me=pA(re,G.a,G.b);if(!ge(Me)||re.distanceTo(Me)*1e3<my||(Ut.copy(Me).sub(re),Ut.lengthSq()<1e-16)||(Ut.normalize(),Math.abs(Ut.dot(S))>.08))continue;let le=J.point.distanceTo(Me);qe(J.point,es),qe(Me,ko);let xe=Math.hypot(es.x-ko.x,es.y-ko.y);if(le>we*1.35&&xe>gy)continue;let se=xe+le/Math.max(Q,1e-9);(!C||se<C.score)&&(C={foot:Me.clone(),edgeDir:S.clone(),score:se})}}return C?{foot:C.foot,edgeDir:C.edgeDir}:null}function he(re,A,J,Q){let Ee=re.geometry,$=Ee?.getAttribute("position");if(!$)return[];re.updateWorldMatrix(!0,!1);let ve=Ee.getIndex(),me=new Map,we=Math.max(Q*.25,1e-5);function C(le,xe,se){Vo.subVectors(xe,le).cross(Bn.subVectors(se,le)),!(Vo.lengthSq()<1e-16)&&(Vo.normalize(),!(Math.abs(Vo.dot(J))<uA)&&(Math.abs(oh(le,A,J))>Q||Math.abs(oh(xe,A,J))>Q||Math.abs(oh(se,A,J))>Q||(S(le,xe),S(xe,se),S(se,le))))}function S(le,xe){if(Ut.copy(xe).sub(le),Ut.lengthSq()<1e-16)return;let se=mA(le,xe,we);me.has(se)||me.set(se,{a:le.clone(),b:xe.clone(),dir:Ut.clone().normalize()})}let G=ve?ve.count/3:$.count/3,Me=12e3,pe=G>Me?Math.ceil(G/Me):1;for(let le=0;le<G;le+=pe){let xe,se,fe;if(ve){let De=le*3;xe=ve.getX(De),se=ve.getX(De+1),fe=ve.getX(De+2)}else xe=le*3,se=le*3+1,fe=le*3+2;pi.fromBufferAttribute($,xe).applyMatrix4(re.matrixWorld),mi.fromBufferAttribute($,se).applyMatrix4(re.matrixWorld),ts.fromBufferAttribute($,fe).applyMatrix4(re.matrixWorld),C(pi,mi,ts)}return[...me.values()]}function Ae(){if(m){if(c==="placeFirst"){b=m.clone(),T=p?p.clone():null,c="placeSecond",g=null,(wp({pointerType:M})||!_y())&&(h=!1,m=null,x=null,p=null,be()),ue(),ee();return}if(c==="placeSecond"&&b){if(b.distanceTo(m)*1e3<my)return;Le(b,m),Z(!1)}}}function Le(re,A){let J=new zt;J.name="Dimension";let Q=Sy(16752394,1);wy(Q,re,A),Q.visible=!0;let Ee=re.clone().lerp(A,.5),$=re.distanceTo(A),ve=_A(Ep($));ve.position.copy(Ee),J.add(Q,ve),k.add(J),q.push({group:J,sprite:ve,mid:Ee.clone(),span:$}),Be(ve,re,A,Ee,$)}function Be(re,A,J,Q,Ee){let $=i();if($.getWorldDirection(yy),Ut.copy(J).sub(A),Ut.lengthSq()<1e-16){re.position.copy(Q);return}Ut.normalize(),Bn.crossVectors(Ut,yy),Bn.lengthSq()<1e-10&&Bn.copy($.up),Bn.normalize();let ve=Math.max(Ee*aA,Se(Q)*18);re.position.copy(Q).addScaledVector(Bn,ve);let me=Se(re.position)*56;re.scale.set(me*2.2,me,1)}function Ge(){z.visible&&b&&K(z,b),X.visible&&m&&K(X,m),h&&by(j,t,f,d,x),W.visible&&b&&m&&g&&x==="perp"&&Ey(W,b,m,g,Se);for(let re of q){let J=re.group.children[0].geometry.getAttribute("position");pi.fromBufferAttribute(J,0),mi.fromBufferAttribute(J,1),Be(re.sprite,pi,mi,re.mid,re.span)}}function Je(re){if(!u||c==="idle"||!Tp(re)||y!==null)return;let{x:A,y:J}=B(re),Q=te(A,J,re.pointerType);Re(Q.x,Q.y,!0)}function ot(re){if(!u||c==="idle"||re.button!==void 0&&re.button!==0||y!==null)return;y=re.pointerId,M=re.pointerType||"mouse";let{x:A,y:J}=B(re);E=A,_=J,w=!1,D=!1;try{t.setPointerCapture(re.pointerId)}catch{}if(Tp(re)){let Q=te(A,J,M);Re(Q.x,Q.y,!0)}re.preventDefault()}function oe(re){if(!u)return;if(y===null){Je(re);return}if(y!==re.pointerId)return;let{x:A,y:J}=B(re);if(Math.hypot(A-E,J-_)>=dy&&(w=!0,D=!0),wp(re)){if(!D)return;let Ee=te(A,J,"touch");Re(Ee.x,Ee.y,!0)}else if(Tp(re)){let Ee=te(A,J,M);Re(Ee.x,Ee.y,!0)}re.preventDefault()}function ke(re){if(!u||y!==re.pointerId)return;let{x:A,y:J}=B(re);Math.hypot(A-E,J-_)>=dy&&(w=!0,D=!0),y=null;try{t.releasePointerCapture(re.pointerId)}catch{}if(wp(re)){w?D=!1:(D=!1,h&&m&&Ae()),re.preventDefault();return}!w&&m&&Ae(),D=!1,re.preventDefault()}function je(re){y===re.pointerId&&(y=null,D=!1)}return t.addEventListener("pointerdown",ot),t.addEventListener("pointermove",oe),t.addEventListener("pointerup",ke),t.addEventListener("pointercancel",je),{isActive:_e,setActive:Z,update:Ge,formatMm:Ep}}function oh(n,e,t){return dA.setFromNormalAndCoplanarPoint(t,e).distanceToPoint(n)}function vy(n,e,t){Ut.copy(t).sub(e);let i=Ut.lengthSq();if(i<1e-18)return n.distanceTo(e);let s=Bn.copy(n).sub(e).dot(Ut)/i;return s=Math.min(1,Math.max(0,s)),Ho.copy(e).addScaledVector(Ut,s).distanceTo(n)}function pA(n,e,t){Ut.copy(t).sub(e);let i=Ut.lengthSq();if(i<1e-18)return e.clone();let s=Bn.copy(n).sub(e).dot(Ut)/i;return s=Math.min(1,Math.max(0,s)),e.clone().addScaledVector(Ut,s)}function mA(n,e,t){let i=Math.round(n.x/t),s=Math.round(n.y/t),r=Math.round(n.z/t),o=Math.round(e.x/t),a=Math.round(e.y/t),l=Math.round(e.z/t);return i<o||i===o&&s<a||i===o&&s===a&&r<=l?`${i},${s},${r}|${o},${a},${l}`:`${o},${a},${l}|${i},${s},${r}`}function gA(n){let e=document.getElementById("measure-crosshair");return e||(e=document.createElement("div"),e.id="measure-crosshair",e.className="measure-crosshair",e.hidden=!0,e.setAttribute("aria-hidden","true"),e.innerHTML='<span class="measure-crosshair-h"></span><span class="measure-crosshair-v"></span><span class="measure-crosshair-dot"></span>',(n.parentElement||document.body).appendChild(e),e)}function by(n,e,t,i,s){let r=e.getBoundingClientRect();n.style.left=`${r.left+t}px`,n.style.top=`${r.top+i}px`,n.dataset.snap=s||"none"}function My(n){let e=new Ra(1,16,12),t=new on({color:n,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),i=new dt(e,t);return i.renderOrder=20,i.visible=!1,i}function xA(n,e){let t=n.material;e==="vertex"?t.color.setHex(16729402):e==="edge"||e==="perp"?t.color.setHex(16766474):t.color.setHex(6607615)}function Sy(n,e){let t=new Ot,i=new Float32Array(6);t.setAttribute("position",new Ft(i,3));let s=new _s({color:n,transparent:e<1,opacity:e,depthTest:!1,depthWrite:!1}),r=new Hi(t,s);return r.renderOrder=19,r.frustumCulled=!1,r.visible=!1,r}function yA(n){let e=new Ot,t=new Float32Array(9);e.setAttribute("position",new Ft(t,3));let i=new _s({color:n,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),s=new Hi(e,i);return s.renderOrder=22,s.frustumCulled=!1,s.visible=!1,s}function Ey(n,e,t,i,s){let r=s(t)*hA;if(Ut.copy(e).sub(t),Ut.lengthSq()<1e-16){n.visible=!1;return}if(Ut.normalize(),Bn.copy(i).normalize(),Vo.crossVectors(Bn,Ut),Vo.lengthSq()<1e-12){n.visible=!1;return}pi.copy(t).addScaledVector(Bn,r),mi.copy(t),ts.copy(t).addScaledVector(Ut,r);let o=n.geometry.getAttribute("position");o.setXYZ(0,pi.x,pi.y,pi.z),o.setXYZ(1,mi.x,mi.y,mi.z),o.setXYZ(2,ts.x,ts.y,ts.z),o.needsUpdate=!0,n.geometry.computeBoundingSphere()}function wy(n,e,t){let i=n.geometry.getAttribute("position");i.setXYZ(0,e.x,e.y,e.z),i.setXYZ(1,t.x,t.y,t.z),i.needsUpdate=!0,n.geometry.computeBoundingSphere()}function _A(n){let e=document.createElement("canvas");e.width=rh*2,e.height=rh;let t=e.getContext("2d");if(t){t.clearRect(0,0,e.width,e.height);let o=18,a=14;t.font=`600 ${Math.round(rh*.42)}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;let l=t.measureText(n),c=Math.ceil(l.width),u=Math.round(rh*.42),h=c+o*2,f=u+a*2,d=(e.width-h)/2,m=(e.height-f)/2,x=18;t.fillStyle="rgba(28, 28, 30, 0.78)",Ty(t,d,m,h,f,x),t.fill(),t.strokeStyle="rgba(255, 255, 255, 0.22)",t.lineWidth=2,Ty(t,d,m,h,f,x),t.stroke(),t.fillStyle="#f5f5f7",t.textAlign="center",t.textBaseline="middle",t.fillText(n,e.width/2,e.height/2+1)}let i=new vs(e);i.colorSpace=Tt,i.needsUpdate=!0;let s=new _o({map:i,depthTest:!1,depthWrite:!1,transparent:!0}),r=new ya(s);return r.renderOrder=21,r.center.set(.5,.5),r}function Ty(n,e,t,i,s,r){let o=Math.min(r,i/2,s/2);n.beginPath(),n.moveTo(e+o,t),n.arcTo(e+i,t,e+i,t+s,o),n.arcTo(e+i,t+s,e,t+s,o),n.arcTo(e,t+s,e,t,o),n.arcTo(e,t,e+i,t,o),n.closePath()}function ah(n){if(n.blocked||n.modifiers||n.button!==void 0&&n.button!==0||(n.pointers??1)>1||n.consumed)return"ignore";if(Math.hypot(n.dx??0,n.dy??0)>(n.slop??12))return"drag";let t=n.longPressMs??500;return!n.released&&(n.dt??0)>=t?"longpress":n.released?"tap":"pending"}function Ii(n){let e=String(n||"").replace(/_(\d+)$/,""),t=e.split("__").filter(i=>i.length>0);return t.length>=2?{part:t[0],element:t.slice(1).join("__")}:{part:e||"part",element:null}}function Ry(n){let e="part",t=n;for(;t;){let i=t.name||"";if(!(i.endsWith("__edges")||!!t.userData?.isEdgeOverlay)&&i){let r=Ii(i);if(r.part&&(e=r.part),r.element)return{part:r.part,element:r.element}}t=t.parent||null}return{part:e,element:null}}var ch=12,vA=500,bA=Math.PI/2,MA=.03,Cy=.001;function SA(n){let e=Math.min(1,Math.max(0,n));return e<.5?4*e*e*e:1-(-2*e+2)**3/2}function EA(n){return n.blocked||n.modifiers||n.button!==void 0&&n.button!==0||(n.pointers??1)>1?"ignore":Math.hypot(n.dx,n.dy)>ch?"drag":"tap"}function wA(n,e){return(e>=0?1:-1)*n*bA}function TA(n,e=null){let t=n.length,i=new Map,s=a=>{let l=i.has(a)?i.get(a):a;return l!==a?(l=s(l),i.set(a,l)):i.has(a)||i.set(a,a),l},r=(a,l)=>{let c=s(a),u=s(l);c!==u&&i.set(c,u)};if(e){let a=new Map,l=1e4,c=e.count??n.reduce((u,h)=>Math.max(u,h),0)+1;for(let u=0;u<c;u++){let h=`${Math.round(e.getX(u)*l)},${Math.round(e.getY(u)*l)},${Math.round(e.getZ(u)*l)}`,f=a.get(h);f===void 0?a.set(h,u):r(u,f)}}for(let a=0;a+2<t;a+=3)r(n[a],n[a+1]),r(n[a+1],n[a+2]);let o=new Map;for(let a=0;a+2<t;a+=3){let l=s(n[a]),c=o.get(l);c||(c=[],o.set(l,c)),c.push(a)}return[...o.values()]}function Py(n){let e=n.geometry,t=e?.getIndex?.(),i=e?.getAttribute?.("position");if(!t||!i||!n.parent)return[n];let s=TA(t.array,i);if(s.length<2)return[n];let r=e.getAttribute("normal"),o=[];for(let a of s){let l=new Map,c=[],u=[],h=[],f=x=>{let p=l.get(x);return p!==void 0||(p=c.length/3,l.set(x,p),c.push(i.getX(x),i.getY(x),i.getZ(x)),r&&u.push(r.getX(x),r.getY(x),r.getZ(x))),p};for(let x of a)h.push(f(t.getX(x)),f(t.getX(x+1)),f(t.getX(x+2)));let d=new Ot;d.setAttribute("position",new Ht(c,3)),u.length&&d.setAttribute("normal",new Ht(u,3)),d.setIndex(h);let m=new dt(d,n.material);m.name=n.name,m.position.copy(n.position),m.quaternion.copy(n.quaternion),m.scale.copy(n.scale),m.visible=n.visible,n.parent.add(m),o.push(m)}return n.parent.remove(n),e.dispose?.(),o}function AA(n,e=[]){let t=[];n.traverse(r=>{let o=r.name||"";if(Ii(o).part!=="door")return;let a=r.parent?.name||"";Ii(a).part!=="door"&&t.push(r)});let i=new Set((e||[]).filter(r=>r&&r.kind==="drawer"&&r.element).map(r=>String(r.element)));i.size&&n.traverse(r=>{let o=Ii(r.name||"");!o.element||!i.has(o.element)||Ii(r.parent?.name||"").element!==o.element&&t.push(r)});let s=[];for(let r of t){if(r.isMesh){s.push(...Py(r));continue}let o=[];if(r.traverse(a=>{a.isMesh&&o.push(a)}),o.length===1){let a=Py(o[0]);if(a.length>1){s.push(...a);continue}}s.push(r)}return s}function RA(n,e,t=MA){let i=[];for(let a of n)for(let l of e){if(!l||!(l.kind==="drawer"&&Array.isArray(l.slide))&&(l.kind!=="hinged"||!l.hinge))continue;let u=l.center;if(!Array.isArray(u)||u.length<3)continue;let h=a.center.x-Number(u[0]),f=a.center.y-Number(u[1]),d=a.center.z-Number(u[2]),m=Math.hypot(h,f,d);m<=t&&i.push({distance:m,entry:a,record:l})}i.sort((a,l)=>a.distance-l.distance);let s=new Set,r=new Set,o=[];for(let a of i)s.has(a.entry)||r.has(a.record.id)||(s.add(a.entry),r.add(a.record.id),o.push({entry:a.entry,record:a.record}));return o}function CA(n){return n.updateWorldMatrix(!0,!0),new Gt().setFromObject(n).getCenter(new I)}function PA(n,e){let t=n.parent;if(!t)return null;if(e.kind==="drawer")return IA(n,e);let i=new zt;i.name=`hinge:${e.id}`,t.add(i),t.updateWorldMatrix(!0,!1);let s=new I(Number(e.hinge[0]),Number(e.hinge[1]),Number(e.hinge[2]));i.position.copy(t.worldToLocal(s)),i.updateWorldMatrix(!0,!1),i.attach(n);let r={id:e.id,pivot:i,host:n,sign:Number(e.sign)>=0?1:-1,goal:0,anim:null},o=a=>{a.userData.bpDoor=r};return o(i),n.traverse(o),r}function IA(n,e){let t=n.parent;if(!t)return null;let i=new zt;i.name=`drawer:${e.id}`,t.add(i),t.updateWorldMatrix(!0,!1);let s=e.center.map(Number),r=e.slide.map(Number),o=t.worldToLocal(new I(s[0],s[1],s[2])),a=t.worldToLocal(new I(s[0]+r[0],s[1]+r[1],s[2]+r[2]));i.updateWorldMatrix(!0,!1),i.attach(n);let l={id:e.id,kind:"drawer",pivot:i,host:n,slideLocal:a.sub(o),sign:1,goal:0,anim:null},c=u=>{u.userData.bpDoor=l};return c(i),n.traverse(c),l}function gl(n,e){let t=n.anim;if(!t)return n.goal;let i=(e-t.t0)/vA;return i>=1?(n.anim=null,n.goal=t.to,t.to):t.from+(t.to-t.from)*SA(i)}var Iy=new Kt,pl=new I;function LA(n,e){if(n.quaternion.identity(),Math.abs(e)<=1e-8)return;let t=n.parent;pl.set(0,1,0),t&&(t.updateWorldMatrix(!0,!1),t.getWorldQuaternion(Iy).invert(),pl.applyQuaternion(Iy)),!(pl.lengthSq()<1e-12)&&(pl.normalize(),n.rotateOnAxis(pl,e))}function DA(n,e){let t=gl(n,e);return n.slideLocal?(n.pivot.position.copy(n.slideLocal).multiplyScalar(t),t):(LA(n.pivot,wA(t,n.sign)),t)}function NA(n,e){let t=gl(n,e),i=n.goal>.5?0:1;n.goal=i,n.anim={from:t,to:i,t0:e}}function OA(n,e){let t=gl(n,e);return t<=.001?!1:(n.goal>.5&&(n.goal=0,n.anim={from:t,to:0,t0:e}),!0)}var lh=new I,UA=new on({side:Lt,transparent:!0,opacity:0,depthWrite:!1});function FA(n){let e=[];if(n.updateWorldMatrix(!0,!0),n.traverse(p=>{p.isMesh&&p.geometry?.getAttribute?.("position")&&e.push(p)}),!e.length)return null;let t=new I,i=new I,s=new I;if(e[0].updateWorldMatrix(!0,!1),e[0].matrixWorld.extractBasis(t,i,s),t.lengthSq()<1e-12||i.lengthSq()<1e-12||s.lengthSq()<1e-12)return null;t.normalize(),i.normalize(),s.normalize();let r=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,u=-1/0;for(let p of e){let g=p.geometry;g.boundingBox||g.computeBoundingBox();let b=g.boundingBox,T=[b.min.x,b.max.x],y=[b.min.y,b.max.y],M=[b.min.z,b.max.z];for(let E of T)for(let _ of y)for(let w of M){lh.set(E,_,w).applyMatrix4(p.matrixWorld);let D=lh.dot(t),L=lh.dot(i),k=lh.dot(s);D<r&&(r=D),L<o&&(o=L),k<a&&(a=k),D>l&&(l=D),L>c&&(c=L),k>u&&(u=k)}}let h=[(l-r)/2,(c-o)/2,(u-a)/2];if(h.some(p=>!(p>1e-6)))return null;let f=(r+l)/2,d=(o+c)/2,m=(a+u)/2;return{center:new I(t.x*f+i.x*d+s.x*m,t.y*f+i.y*d+s.y*m,t.z*f+i.z*d+s.z*m),axes:[t,i,s],half:h}}function BA(n,e){let t=new Vi(n.half[0]*2,n.half[1]*2,n.half[2]*2),i=new dt(t,UA);return i.name=e||"opening",i.matrix.makeBasis(n.axes[0],n.axes[1],n.axes[2]),i.matrix.setPosition(n.center),i.matrixAutoUpdate=!1,i.matrixWorld.copy(i.matrix),i.matrixWorldNeedsUpdate=!1,i.visible=!1,i.frustumCulled=!1,i.userData.bpHitProxy=!0,i.raycast=()=>{},i}function kA(n,e){let t=n.origin,i=n.direction,s=0,r=1/0;for(let o=0;o<3;o++){let a=e.axes[o],l=a.x*(e.center.x-t.x)+a.y*(e.center.y-t.y)+a.z*(e.center.z-t.z),c=a.x*i.x+a.y*i.y+a.z*i.z,u=e.half[o];if(Math.abs(c)>1e-8){let h=(l+u)/c,f=(l-u)/c;if(h>f){let d=h;h=f,f=d}if(h>s&&(s=h),f<r&&(r=f),s>r)return null}else if(-l-u>0||-l+u<0)return null}return r<0?null:{tEnter:s,tExit:r}}function zA(n){if(!n.length)return null;let e=n[0];for(let t of n)t.tEnter>e.tEnter&&(e=t);return e.binding}function Ly(n){let e=n;for(;e;){if(e.userData?.bpDoor&&!Pr(e))return e.userData.bpDoor;e=e.parent}return null}function HA(n){for(let e=n;e;e=e.parent)if(!e.visible)return!1;return!0}function VA(n){return Ir(n.object)}function GA(n){n.proxy?.geometry?.dispose?.(),n.proxy=null,n.obb=null}function Dy(n){let e=Array.isArray(n.records)?n.records:[],t=n.canvas,i=n.isBlocked||(()=>!1),s=[],r=new ei,o=new $e,a=null,l=0,c=null;function u(){c&&clearTimeout(c),c=null}let h=fy();h.register({id:"door",priority:100,claim(y,M){let E=Ly(y.object);if(!E||E.host?.userData?.bpIfcHidden)return null;let _=M.now??performance.now(),w=gl(E,_)>Cy,D=()=>NA(E,M.now??performance.now());return{onTap:D,actions:[{id:"door",labelKey:w?"ui.close":"ui.open",run:D}]}},targets(){let y=[];for(let M of s){let E=M.host;if(!E||E.userData?.bpIfcHidden||!HA(E))continue;let _=new Gt().setFromObject(E);if(_.isEmpty())continue;let w=_.getCenter(new I);y.push({center:w,group:`door:${M.id}`,hit:{object:E,point:w},owns:D=>Ly(D)===M})}return y}});function f(y){let M=[],E=Number.isFinite(y.maxT)?y.maxT:1/0;for(let _ of s){if(!_.obb||_.host?.userData?.bpIfcHidden||gl(_,y.now)<=Cy)continue;let w=kA(y.raycaster.ray,_.obb);!w||w.tEnter>E||M.push({binding:_,tEnter:w.tEnter})}return zA(M)}h.register({id:"opening",priority:10,probe:(y,M)=>!!f(M),fallback(y,M){let E=f(M);return E?OA(E,M.now):!1}});function d(y){for(let _ of s)GA(_);if(s.length=0,!y||!e.length)return 0;y.updateWorldMatrix(!0,!0);let E=AA(y,e).map(_=>({host:_,center:CA(_)}));for(let _ of RA(E,e)){let w=PA(_.entry.host,_.record);if(!w)continue;let D=w.kind==="drawer"?null:FA(w.host);w.obb=D,w.proxy=D?BA(D,`opening:${w.id}`):null,s.push(w)}return s.length}function m(y){let M=!1;for(let E of s){let _=!!E.anim;!_&&E.shown===E.goal||(DA(E,y),E.shown=E.anim?null:E.goal,_&&(M=!0))}return M}function x(y){if(!(y.button!==void 0&&y.button!==0)){if(l+=1,l>1){a=null;return}a={id:y.pointerId,x:y.clientX,y:y.clientY,moved:0,pointers:1,modifiers:y.altKey||y.ctrlKey||y.metaKey||y.shiftKey,consumed:!1},u(),c=setTimeout(()=>{c=null,!(!a||a.consumed||ah({dt:500,dx:a.moved,dy:0,pointers:l,button:0,blocked:i(),modifiers:a.modifiers,released:!1})!=="longpress")&&(a.consumed=!0,n.onLongPress?.({clientX:a.x,clientY:a.y,pointerId:a.id}))},500)}}function p(y){if(!a||y.pointerId!==a.id)return;let M=Math.hypot(y.clientX-a.x,y.clientY-a.y);M>a.moved&&(a.moved=M),a.moved>ch&&u()}function g(y){if(l=Math.max(0,l-1),u(),!a||y.pointerId!==a.id)return;let M=a;if(a=null,M.consumed)return;let E=Math.max(M.moved,Math.hypot(y.clientX-M.x,y.clientY-M.y));EA({dx:E,dy:0,pointers:l>0?2:1,button:y.button,blocked:i(),modifiers:y.altKey||y.ctrlKey||y.metaKey||y.shiftKey})==="tap"&&T(y)}function b(){l=Math.max(0,l-1),a=null}function T(y){let M=n.getCamera();if(!M||!s.length)return;let E=t.getBoundingClientRect(),_=E.width||t.clientWidth||1,w=E.height||t.clientHeight||1;o.x=(y.clientX-E.left)/_*2-1,o.y=-((y.clientY-E.top)/w)*2+1,r.setFromCamera(o,M);let L=s[0]?.pivot?.parent;for(;L?.parent;)L=L.parent;if(!L)return;let k=r.intersectObject(L,!0);h.dispatch(k,{raycaster:r,now:performance.now(),camera:M,root:L,tap:{x:y.clientX-E.left,y:y.clientY-E.top},size:{w:_,h:w}},VA)}return t.addEventListener("pointerdown",x,!0),t.addEventListener("pointermove",p,!0),t.addEventListener("pointerup",g,!0),t.addEventListener("pointercancel",b,!0),t.addEventListener("contextmenu",y=>y.preventDefault()),{bind:d,step:m,bindings:s,taps:h}}var WA=[{type:"IfcLightFixture",id:"light",priority:60,labelKey:(n,e)=>e.isOn?.(n)?"ui.turnOff":"ui.turnOn",run:(n,e,t,i)=>i.onLight?.(n,e,t)},{type:"IfcSwitchingDevice",id:"switch",priority:70,labelKey:()=>"ui.press",run:(n,e,t,i)=>i.onSwitch?.(n,e,t),actions:(n,e,t,i)=>i.switchActions?.(n,e,t)},{type:"IfcActuator",id:"cover",priority:55,liveOnly:!0,labelKey:(n,e)=>e.isOpen?.(n)?"ui.close":"ui.open",run:(n,e,t,i)=>i.onCover?.(n,e,t),actions:(n,e,t,i)=>i.coverActions?.(n,e,t)},{type:"IfcWindow",id:"window",priority:50,labelKey:(n,e)=>e.isOpen?.(n)?"ui.close":"ui.open",run:(n,e,t,i)=>i.onWindow?.(n,e,t)}];function Ny(n,e){for(let t of WA)n.register({id:t.id,priority:t.priority,claim(i,s){let r=e.elementOf?.(i.object);if(!r||r.type!==t.type||t.liveOnly&&!e.isLive?.(r))return null;let o=()=>t.run(r,i,s,e),a=t.actions?.(r,i,s,e);return{onTap:o,actions:Array.isArray(a)&&a.length?a:[{id:t.id,labelKey:t.labelKey(r,e),run:o}]}},targets(i){let s=e.targetsFor?.(t.type,i);return Array.isArray(s)?t.liveOnly?s.filter(r=>e.isLive?.(r.element)):s:[]}})}var XA="https://home-test.tail9f879b.ts.net",Uy="blueprints.homeMode",qA=new Set(["IfcLightFixture","IfcSwitchingDevice","IfcSensor","IfcActuator"]),Oy=[2e3,5e3,15e3,3e4,6e4],$A=5e3;function Fy(n){for(let e of Object.values(n?.elements||{}))if(e&&qA.has(e.type||""))return!0;return!1}function By(n={}){let e;try{e=new URLSearchParams(n.search||"")}catch{e=new URLSearchParams}let t="live",i=null;try{i=n.storage?.getItem(Uy)??null}catch{i=null}(i==="off"||i==="live")&&(t=i);let s=(e.get("home")||"").trim().toLowerCase();(s==="off"||s==="live")&&(t=s);let r=XA,o=(e.get("homeUrl")||"").trim();if(o)try{let a=new URL(o);(a.protocol==="https:"||a.protocol==="http:")&&(r=a.href.replace(/\/+$/,""))}catch{}return{mode:t,baseUrl:r}}function ky(n,e){try{n?.setItem(Uy,e)}catch{}}function YA(n){let e=new URL(n.replace(/\/+$/,"")+"/events");return e.protocol=e.protocol==="http:"?"ws:":"wss:",e.href}function ZA(n,e,t=""){return`${n.replace(/\/+$/,"")}/devices/${encodeURIComponent(e)}${t}`}function KA(n,e){return`${n.replace(/\/+$/,"")}/simulate/devices/${encodeURIComponent(e)}/press`}var uh=4868682;function Ap(n){let e=[[2200,16751135],[3e3,16758835],[4e3,16766814],[5e3,16773816],[6500,15266303]],t=Number.isFinite(n)?Math.min(Math.max(n,e[0][0]),e.at(-1)[0]):3e3,i=0;for(;i<e.length-2&&t>e[i+1][0];)i+=1;let[s,r]=e[i],[o,a]=e[i+1],l=(t-s)/(o-s),c=(h,f)=>h>>f&255,u=h=>Math.round(c(r,h)+(c(a,h)-c(r,h))*l);return u(16)<<16|u(8)<<8|u(0)}function Rp(n){let e=n?.state||{},t=!!(n?.online&&e.onOff?.onOff===!0),i=e.levelControl?.currentLevel,s=Number.isFinite(i)?Math.min(Math.max(i/254,0),1):1,r=e.colorControl?.colorTemperatureMireds,o=Number.isFinite(r)&&r>0?Math.round(1e6/r):null,a=t?Ap(o):uh;return{on:t,level:s,kelvin:o,color:a}}function hh(n){return n?.objectType==="DoublePushButton"?["rocker-1","rocker-2"]:["rocker"]}function zy(n,e){let t=hh(n);return{rocker:t.length>1?t[e.side<0?0:1]:t[0],position:e.dy>=0?"up":"down",kind:"short"}}function Hy(n,e){if(!n)return[];let t=[];n.online||t.push(e("home.deviceOffline"));let i=n.state||{};switch(n.deviceType){case"ColorTemperatureLight":{let s=i.onOff?.onOff;t.push(s==null?e("home.unknown"):e(s?"home.on":"home.off"));let r=Rp({...n,online:!0});Number.isFinite(i.levelControl?.currentLevel)&&t.push(`${e("home.level")} ${Math.round(r.level*100)} %`),r.kelvin&&t.push(`${r.kelvin} K`);let o=i.derived?.channels;o&&t.push(`${e("home.warm")} ${Math.round(o.warm)} % \xB7 ${e("home.cool")} ${Math.round(o.cool)} %`);break}case"GenericSwitch":{let s=i.switch?.lastEvent;s?t.push(`${e("home.lastEvent")}: ${s.rocker} ${s.position} ${s.event}`):t.push(e("home.noEvents"));break}case"ContactSensor":{let s=i.booleanState?.stateValue;t.push(s==null?e("home.unknown"):e(s?"home.contactClosed":"home.contactOpen"));break}case"OccupancySensor":{let s=i.occupancySensing?.occupancy;t.push(s==null?e("home.unknown"):s.occupied?e("home.occupied"):e("home.vacant"));break}case"WindowCovering":{let s=i.windowCovering?.currentPositionLiftPercent100ths;t.push(s==null?e("home.unknown"):`${e("home.closedPct")} ${Math.round(s/100)} %`);break}default:break}return t}function Vy(n){let e=n.fetchImpl||globalThis.fetch?.bind(globalThis),t=n.WebSocketImpl||globalThis.WebSocket,i=n.setTimer||((y,M)=>setTimeout(y,M)),s=n.clearTimer||(y=>clearTimeout(y)),r=new Map,o="off",a=!1,l=!1,c=0,u=0,h=null,f=null;function d(y,M){if(!(o===y&&!M)){o=y;try{n.onStatus?.(y,M)}catch(E){console.error("home onStatus",E)}}}function m(y,...M){try{y?.(...M)}catch(E){console.error("home handler",E)}}function x(y){if(!l||y!==u)return;let M=Oy[Math.min(c,Oy.length-1)];c+=1,f=i(()=>{f=null,l&&y===u&&b(y)},M)}function p(y){if(!y||typeof y.globalId!="string")return;let M=r.get(y.globalId);r.set(y.globalId,y),m(n.onDevice,y,M)}function g(y){let M;try{M=JSON.parse(typeof y=="string"?y:String(y))}catch{return}if(!(!M||typeof M!="object"))if(M.type==="snapshot"&&Array.isArray(M.devices)){c=0;for(let E of M.devices)p(E);d("live"),m(n.onSnapshot,M.devices)}else M.type==="state"&&M.device?p(M.device):M.type==="switch"&&M.event&&m(n.onSwitch,M.event)}async function b(y){if(!e||!t){d("unreachable","no fetch/WebSocket");return}d(o==="live"?"connecting":o==="unreachable"?"unreachable":"connecting");let M=null;try{let _=typeof AbortController=="function"?new AbortController:null,w=i(()=>_?.abort(),$A);try{let D=await e(`${n.baseUrl.replace(/\/+$/,"")}/health`,{signal:_?.signal,cache:"no-store"});D.ok&&(M=await D.json())}finally{s(w)}}catch{M=null}if(!l||y!==u)return;if(!M||M.status!=="ok"){d("unreachable"),x(y);return}a=!!M.simulation;let E;try{E=new t(YA(n.baseUrl))}catch{d("unreachable"),x(y);return}h=E,E.onmessage=_=>{y===u&&g(_.data)},E.onclose=()=>{h===E&&(h=null),!(!l||y!==u)&&(d(o==="live"?"connecting":"unreachable"),x(y))},E.onerror=()=>{}}async function T(y,M){if(!e||o!=="live")return{ok:!1,status:0};try{let E=await e(y,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(M)}),_="";if(!E.ok)try{let w=await E.json();_=w?.error?.message||w?.error?.code||""}catch{}return{ok:E.ok,status:E.status,error:_}}catch(E){return{ok:!1,status:0,error:String(E?.message||E)}}}return{start(){l||(l=!0,c=0,u+=1,b(u))},stop(){l=!1,u+=1,f!=null&&s(f),f=null;let y=h;h=null;try{y?.close()}catch{}r.clear(),a=!1,d("off")},status:()=>o,isLive:()=>o==="live",simulation:()=>a,device:y=>o==="live"?r.get(y):void 0,lastKnown:y=>r.get(y),devices:()=>[...r.values()],command:(y,M)=>T(ZA(n.baseUrl,y,"/commands"),M),press:(y,M)=>T(KA(n.baseUrl,y),M)}}function Gy(n){let e=n&&n.elements&&typeof n.elements=="object"?n.elements:{},t=Array.isArray(n?.roots)?n.roots.filter(i=>e[i]):[];return{elements:e,roots:t}}function fh(n,e){let t=[];for(let i of Object.values(n.elements)){if(!i)continue;let s=i.parentId||null;(s===e||!s&&i.containerId===e)&&t.push(i)}return t.sort((i,s)=>{let r=(i.order??0)-(s.order??0);return r||String(i.name||"").localeCompare(String(s.name||""))}),t.map(i=>i.globalId)}function Cp(n,e){let t=[],i=new Set,s=e||null;for(;s&&n.elements[s]&&!i.has(s);){i.add(s),t.push(s);let r=n.elements[s];s=r.parentId||r.containerId||null}return t.reverse(),t}function Pp(n,e){return Cp(n,e).slice(0,-1)}function Ip(n,e){let t=[],i=new Set,s=(r,o)=>{if(!(!r||i.has(r)||!n.elements[r])&&(i.add(r),t.push({id:r,depth:o}),!!e.has(r)))for(let a of fh(n,r))s(a,o+1)};for(let r of n.roots)s(r,0);return t}function Wy(n){return Math.min(Math.max(0,n),4)*12}function Xy(n,e,t,i,s=44,r=4){if(i<=0)return{start:0,end:0};let o=n-t,a=Math.max(0,Math.floor(o/s)-r),l=Math.min(i,Math.ceil((o+e)/s)+r);return{start:a,end:Math.max(a,l)}}function Lr(n,e){let t=[],i=[e],s=new Set;for(;i.length;){let r=i.pop();if(!(!r||s.has(r)||!n.elements[r])){s.add(r),t.push(r);for(let o of fh(n,r))i.push(o)}}return t}function qy(n,e){let t=null,i=null,s=new Set,r=n.elements[e]?.containerId||n.elements[e]?.parentId||null;for(;r&&n.elements[r]&&!s.has(r);){s.add(r);let o=n.elements[r];o.type==="IfcSpace"&&!i&&(i=o),o.type==="IfcBuildingStorey"&&!t&&(t=o),r=o.containerId||o.parentId||null}return{storey:t,space:i}}function $y(n){if(!n)return[];let e=[];n.description&&e.push(String(n.description)),n.role&&e.push(`Role: ${n.role}`),n.objectType&&n.objectType!==n.role&&e.push(`Object type: ${n.objectType}`),n.predefinedType&&n.predefinedType!==n.role&&e.push(`Predefined type: ${n.predefinedType}`),n.tag&&e.push(`Tag: ${n.tag}`);for(let t of n.circuits||[])e.push(`Circuit: ${t}`);for(let t of n.cables||[])e.push(`Cable: ${t}`);for(let t of n.propertySets||[]){let i=Object.entries(t.properties||{}).filter(([s])=>s!=="id");if(i.length){e.push(String(t.name||"Pset"));for(let[s,r]of i)e.push(`${s}: ${Yy(r)}`)}}return e}function Yy(n){if(typeof n=="number"){if(!Number.isFinite(n))return"";let e=Math.round(n*1e3)/1e3;return String(e)}return typeof n=="boolean"?n?"true":"false":n==null?"":String(n)}function Zy(n,e){return n&&n===e?"frame":"pulse"}function Ky(n){return n?(n.dimensions||[]).filter(e=>e&&e.value!=null&&e.value!=="").map(e=>`${e.name}: ${Yy(e.value)}`):[]}var JA=`<svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" focusable="false">
  <path fill="currentColor" d="M2.5 4.2h8.2v1.35H2.5V4.2zm0 5.1h8.2v1.35H2.5V9.3zm0 5.15h8.2V15.8H2.5v-1.35z"/>
  <path fill="currentColor" d="M13.2 6.15l3.15 3.15-3.15 3.15-1.05-1.05 1.35-1.35H11.2V8.55h2.3L12.15 7.2l1.05-1.05z"/>
</svg>`;function Jy(n){let e=document.getElementById("sheet-scroll");if(!e)return{reveal(){},open(){},closePopover(){},refresh(){}};let t=document.createElement("div");for(t.id="sheet-main";e.firstChild;)t.append(e.firstChild);let i=document.createElement("button");i.type="button",i.className="ifc-entry",i.dataset.noSheetDrag="true";let s=document.createElement("span");s.dataset.i18n="ui.inspector",s.textContent=n.t("ui.inspector");let r=document.createElement("span");r.className="ifc-entry-chevron",r.setAttribute("aria-hidden","true"),r.textContent="\u203A",i.append(s,r),t.append(i);let o=document.createElement("div");o.id="sheet-inspector",o.hidden=!0,o.dataset.noSheetDrag="true";let a=document.createElement("div");a.className="ifc-toolbar";let l=document.createElement("button");l.type="button",l.className="ifc-back",l.dataset.noSheetDrag="true";let c=document.createElement("button");c.type="button",c.className="ifc-show-all",c.hidden=!0,c.dataset.noSheetDrag="true",a.append(l,c);let u=document.createElement("div");u.className="ifc-crumbs",u.dataset.noSheetDrag="true";let h=document.createElement("div");h.className="ifc-list";let f=document.createElement("div");f.className="ifc-list-spacer";let d=document.createElement("div");d.className="ifc-list-window",h.append(f,d);let m=document.createElement("div");m.className="ifc-head",m.append(a,u),o.append(m,h),e.append(t,o);let x=document.createElement("div");x.id="ifc-popover",x.hidden=!0,x.className="ifc-popover",document.body.append(x);let p=document.createElement("div");p.id="ifc-row-menu",p.hidden=!0,p.className="ifc-menu",document.body.append(p);let g=new Set,b=null,T=null,y=0;function M(){o.hidden=!0,t.hidden=!1,ue()}function E(){t.hidden=!0,o.hidden=!1,L(),requestAnimationFrame(()=>L())}function _(){n.openSheet(),E(),e.scrollTop=0}i.addEventListener("click",()=>_()),l.addEventListener("click",()=>{M(),e.scrollTop=0}),c.addEventListener("click",()=>{n.visibility.showAll(),n.onVisibility(),L()});function w(he){let Ae=n.index.elements[he];return Ae&&(Ae.name||Ae.id||Ae.type)||he}function D(){u.replaceChildren();let he=b?Cp(n.index,b):[];if(!he.length){u.hidden=!0;return}u.hidden=!1,he.forEach((Ae,Le)=>{if(Le){let Ge=document.createElement("span");Ge.className="ifc-crumb-sep",Ge.textContent="\u203A",u.append(Ge)}let Be=document.createElement("button");Be.type="button",Be.className="ifc-crumb",Be.textContent=w(Ae),Be.addEventListener("click",()=>{b=Ae;for(let Ge of Pp(n.index,Ae))g.add(Ge);L(),V(Ae)}),u.append(Be)})}function L(){l.textContent=`\u2039 ${n.t("ui.menu")}`,c.textContent=n.t("ui.showAll"),c.hidden=!n.visibility.anyHidden(),s.textContent=n.t("ui.inspector"),D(),z()}function k(){let he=e.getBoundingClientRect();return h.getBoundingClientRect().top-he.top+e.scrollTop}function X(){let he=e.getBoundingClientRect();return m.getBoundingClientRect().bottom-he.top+6}function z(){let he=Ip(n.index,g);f.style.height=`${he.length*44}px`;let Ae=Xy(e.scrollTop,e.clientHeight||320,k(),he.length,44);d.replaceChildren(),d.style.transform=`translateY(${Ae.start*44}px)`;for(let Le=Ae.start;Le<Ae.end;Le++)d.append(N(he[Le]))}function N(he){let Ae=n.index.elements[he.id],Le=fh(n.index,he.id),Be=document.createElement("div");if(Be.className="ifc-row",Be.dataset.id=he.id,Be.style.paddingLeft=`${Wy(he.depth)+8}px`,Be.style.height=`${44}px`,(he.id===T||he.id===b)&&Be.classList.add("is-target"),n.visibility.isHidden(he.id)&&Be.classList.add("is-hidden"),Le.length){let oe=document.createElement("button");oe.type="button",oe.className="ifc-disclosure";let ke=g.has(he.id);oe.textContent=ke?"\u25BE":"\u203A",oe.setAttribute("aria-expanded",ke?"true":"false"),oe.setAttribute("aria-label",ke?n.t("ui.collapse"):n.t("ui.expand")),oe.addEventListener("click",je=>{je.stopPropagation(),g.has(he.id)?g.delete(he.id):g.add(he.id),L()}),Be.append(oe)}else{let oe=document.createElement("span");oe.className="ifc-disclosure-spacer",Be.append(oe)}let Ge=document.createElement("span");Ge.className="ifc-row-text";let Je=document.createElement("span");Je.className="ifc-row-name",Je.textContent=w(he.id);let ot=document.createElement("span");return ot.className="ifc-row-meta",ot.textContent=Ae?.type||"",Ge.append(Je,ot),Be.append(Ge),_e(Be,he.id),Be}let W=0;function j(he){let Ae=performance.now();if(Ae-W<40)return;W=Ae;let Le=Zy(b,he);b=he,n.onFrame(he,{move:Le==="frame"}),Z(he),D()}function q(he){return he instanceof Element&&!!he.closest(".ifc-disclosure")}function _e(he,Ae){let Le=null,Be=0,Ge=()=>{Be&&window.clearTimeout(Be),Be=0},Je=(ke,je,re)=>{q(re)||(Ge(),Le={x:ke,y:je,moved:0,consumed:!1},Be=window.setTimeout(()=>{Be=0,!(!Le||Le.consumed||ah({dt:500,dx:Le.moved,dy:0,released:!1})!=="longpress")&&(Le.consumed=!0,be(Ae,Le.x,Le.y))},500))},ot=(ke,je)=>{if(!Le)return;let re=Math.hypot(ke-Le.x,je-Le.y);re>Le.moved&&(Le.moved=re),Le.moved>12&&Ge()},oe=(ke,je,re)=>{Ge();let A=Le;Le=null,!(!A||A.consumed||q(re)||Math.max(A.moved,Math.hypot(ke-A.x,je-A.y))>12)&&j(Ae)};he.addEventListener("pointerdown",ke=>{ke.button!==void 0&&ke.button!==0||Je(ke.clientX,ke.clientY,ke.target)}),he.addEventListener("pointermove",ke=>ot(ke.clientX,ke.clientY)),he.addEventListener("pointerup",ke=>{ke.pointerType!=="touch"&&oe(ke.clientX,ke.clientY,ke.target)}),he.addEventListener("pointercancel",()=>Ge()),he.addEventListener("touchend",ke=>{let je=ke.changedTouches[0];je&&oe(je.clientX,je.clientY,ke.target)},{passive:!0})}function Z(he){T=he,y&&window.clearTimeout(y),y=window.setTimeout(()=>{T===he&&(T=null),z()},1600),z()}function V(he){let Le=Ip(n.index,g).findIndex(Ge=>Ge.id===he);if(Le<0)return;let Be=k()+Le*44;e.scrollTop=Math.max(0,Be-X()),z()}let ee=!1;function be(he,Ae,Le){B(),p.replaceChildren(),p.hidden=!1,ee=!1;let Be=n.visibility.isHidden(he);K(Be?"ui.unhideThis":"ui.hideThis",()=>{Be?n.visibility.unhide(he):n.visibility.hide(he),Re()}),K("ui.hideOthers",()=>{n.visibility.hideOthers(he),Re()}),K("ui.unhideOthers",()=>{n.visibility.unhideOthers(he),Re()}),te(p,Ae,Le)}function Re(){n.onVisibility(),ue(),L()}function K(he,Ae){let Le=document.createElement("button");Le.type="button",Le.className="ifc-menu-btn",Le.textContent=n.t(he);let Be=!1,Ge=Je=>{Je.preventDefault(),Je.stopPropagation(),!Be&&(Be=!0,Ae())};Le.addEventListener("touchend",Ge),Le.addEventListener("click",Ge),p.append(Le)}function ue(){p.hidden=!0,p.replaceChildren()}function B(){x.hidden=!0,x.replaceChildren()}function te(he,Ae,Le){he.hidden=!1,he.style.left="0px",he.style.top="0px";let Be=he.getBoundingClientRect(),Ge=8,Je=Math.max(Ge,window.innerWidth-Be.width-Ge),ot=Math.min(Math.max(Ge,Ae),Je),oe=Le+8;oe+Be.height>window.innerHeight-Ge&&(oe=Math.max(Ge,Le-Be.height-8)),he.style.left=`${ot}px`,he.style.top=`${oe}px`}function ge(he,Ae,Le,Be,Ge){if(ue(),x.replaceChildren(),x.hidden=!1,!he)Se(n.t("ui.noIfc"),Ae||"");else{let Je=document.createElement("div");Je.className="ifc-pop-id";let ot=document.createElement("button");ot.type="button",ot.className="ifc-pop-title";let oe=document.createElement("div");oe.className="ifc-kicker";let ke=document.createElement("div");ke.className="ifc-name";let je=he.name||he.id||"",re=he.globalId||"",A=!1,J=0,Q=()=>{oe.hidden=!A,oe.textContent=A?n.t("ui.globalId"):"",ke.textContent=A?re:je,ke.className=A?"ifc-gid":"ifc-name",ot.setAttribute("aria-label",A?je:n.t("ui.globalId"))},Ee=S=>{S.preventDefault(),S.stopPropagation();let G=performance.now();G-J<80||(J=G,A=!A,Q())};Q(),ot.append(oe,ke),ot.addEventListener("touchend",Ee),ot.addEventListener("click",Ee);let $=document.createElement("button");$.type="button",$.className="ifc-reveal",$.innerHTML=JA,$.setAttribute("aria-label",n.t("ui.reveal")),$.title=n.t("ui.reveal"),$.addEventListener("click",S=>{S.stopPropagation(),B(),Ue(he.globalId)}),Je.append(ot,$),x.append(Je),Se(n.t("ui.type"),he.type||"");let ve=qy(n.index,he.globalId);ve.storey&&Se(n.t("ui.storey"),ve.storey.name||ve.storey.id),ve.space&&Se(n.t("ui.space"),ve.space.name||ve.space.id);let me=Ky(he);me.length&&qe(n.t("ui.dimensions"),me);let we=$y(he);we.length&&qe(n.t("ui.note"),we);let C=n.liveLines?.(he)||[];C.length&&qe(n.t("home.live"),C)}if(Le.length){let Je=document.createElement("div");Je.className="ifc-actions";for(let ot of Le){let oe=document.createElement("button");oe.type="button",oe.className="ifc-action",oe.textContent=ot.label||n.t(ot.labelKey),oe.addEventListener("click",ke=>{ke.stopPropagation(),ot.run(),n.onVisibility()}),Je.append(oe)}x.append(Je)}te(x,Be,Ge)}function Se(he,Ae){let Le=document.createElement("div");Le.className="ifc-line";let Be=document.createElement("div");Be.className="ifc-kicker",Be.textContent=he;let Ge=document.createElement("div");Ge.className="ifc-value",Ge.textContent=Ae,Le.append(Be,Ge),x.append(Le)}function qe(he,Ae){let Le=document.createElement("div");Le.className="ifc-line";let Be=document.createElement("div");Be.className="ifc-kicker",Be.textContent=he;let Ge=document.createElement("div");Ge.className="ifc-note",Ge.textContent=Ae.join(`
`),Le.append(Be,Ge),x.append(Le)}function Ue(he){if(n.index.elements[he]){for(let Ae of Pp(n.index,he))g.add(Ae);b=he,T=he,n.openSheet(),E(),L(),requestAnimationFrame(()=>V(he))}}e.addEventListener("scroll",()=>{o.hidden||z()},{passive:!0});let Ye=he=>he instanceof Node?!(!x.hidden&&x.contains(he)||!p.hidden&&p.contains(he)):!0;return document.addEventListener("pointerup",()=>{p.hidden||(ee=!0)},!0),document.addEventListener("pointerdown",he=>{let Ae=he.target;!x.hidden&&Ye(Ae)&&B(),!p.hidden&&ee&&Ye(Ae)&&ue()},!0),{open:_,refresh:L,closePopover:B,openPopover:ge,reveal:Ue,isInspectorOpen:()=>!o.hidden}}function jy(n){let e=new Set;function t(){return Object.keys(n.elements)}return{isHidden(i){return e.has(i)},anyHidden(){return e.size>0},hiddenIds(){return[...e]},hide(i){for(let s of Lr(n,i))e.add(s)},unhide(i){for(let s of Lr(n,i))e.delete(s)},hideOthers(i){let s=new Set(Lr(n,i));for(let r of t())s.has(r)||e.add(r)},unhideOthers(i){let s=new Set(Lr(n,i));for(let r of t())s.has(r)||e.delete(r)},showAll(){e.clear()}}}var Up=.3,n_=1.5,jA=.5,Lp=new $e,QA=new I,xh=new I,Dp=new I,dh=new I,ph=new I,Go=new I,mh=new I,Np=new Kt,Qy=new Kt,gh=new Kt,e_=new Kt,Op=new Zs,eR=new I(0,1,0),t_=new ei;function tR(n,e,t=Up,i=n_){let s=Number.isFinite(e)&&e>0?e:0,r=Number.isFinite(n)&&n>0?n:null;return r!=null&&r>=t?r:r!=null?Math.max(i,t):s>=t?s:Math.max(i,t)}function nR(n,e,t=Up,i=n_){return Number.isFinite(n)&&n>.001?n:e>=t?null:Math.max(i,t)}function iR(n,e,t=Up,i=jA){return Number.isFinite(n)&&n>0?!(e>0)||e<t?!0:n<e*i:!1}function sR(n,e,t,i=1){let s=2*Math.PI*i/Math.max(1,t);return{theta:-n*s,phi:-e*s}}function rR(n,e,t,i,s){if(!i&&!s||(ph.copy(n.position).sub(t),ph.lengthSq()<1e-12))return!1;Go.copy(n.up),Go.lengthSq()<1e-12?Go.set(0,1,0):Go.normalize(),e_.setFromUnitVectors(Go,eR),dh.copy(ph).applyQuaternion(e_),Op.setFromVector3(dh);let r=1e-6;return s=Math.min(Math.PI-r,Math.max(r,Op.phi+s))-Op.phi,Np.setFromAxisAngle(Go,i),mh.set(1,0,0).applyQuaternion(n.quaternion).applyQuaternion(Np),mh.lengthSq()<1e-12?!1:(mh.normalize(),Qy.setFromAxisAngle(mh,s),gh.copy(Qy).multiply(Np),dh.copy(ph).applyQuaternion(gh),n.position.copy(t).add(dh),e.sub(t).applyQuaternion(gh).add(t),n.quaternion.premultiply(gh),!0)}function oR(n,e,t){return!(t>0)||(n.getWorldDirection(xh),Dp.copy(n.position).addScaledVector(xh,t),Dp.distanceToSquared(e)<1e-12)?!1:(e.copy(Dp),!0)}function aR(n,e){let t=n.material,i=Array.isArray(t)?t:[t];for(let s of i){let r=s&&s.clippingPlanes;if(r){for(let o of r)if(o.distanceToPoint(e)<-1e-4)return!1}}return!0}function lR(n,e,t,i,s){if(!e||!t||e.isOrthographicCamera)return null;let r=n.getBoundingClientRect(),o=r.width||n.clientWidth||1,a=r.height||n.clientHeight||1;Lp.x=(i-r.left)/o*2-1,Lp.y=-((s-r.top)/a)*2+1,t.updateWorldMatrix(!0,!0),t_.setFromCamera(Lp,e);let l=t_.intersectObject(t,!0);e.getWorldDirection(xh);for(let c of l){let u=c.object;if(!u.visible||Pr(u))continue;let h=u.userData;if(h&&(h.isEdgeOverlay||h.isSectionCap||h.isPeeledEdgeBatch)||!aR(u,c.point))continue;let f=c.distance;if(!(f>1e-4))continue;let d=QA.copy(c.point).sub(e.position).dot(xh);if(d>1e-4)return{point:c.point.clone(),slant:f,depth:d}}return null}function cR(n){let{canvas:e,controls:t}=n,i=n.isBlocked||(()=>!1),s=new Map,r=null;function o(){return t.enabled!==!1&&!i()}function a(){let y=n.getCamera();return!!(y&&y.isPerspectiveCamera)}function l(y,M){return lR(e,n.getCamera(),n.getRoot(),y,M)}function c(y){let M=n.getCamera();!M||!a()||y==null||oR(M,t.target,y)}function u(y,M){let E=n.getCamera();if(!E||!a())return;let _=l(y,M),w=E.position.distanceTo(t.target);c(tR(_?_.slant:null,w))}function h(y,M){let E=n.getCamera();if(!E||!a())return;let _=l(y,M),w=E.position.distanceTo(t.target);c(nR(_?_.depth:null,w))}function f(){r=null,t.enableRotate=!0}function d(y){if(s.set(y.pointerId,{x:y.clientX,y:y.clientY}),!o()){f(),t.zoomToCursor=!1;return}if(!a()){f(),t.zoomToCursor=!1;return}if(s.size>=2){f(),t.zoomToCursor=!0;let L=m(y);u(L.x,L.y);return}let M=y.pointerType==="touch",E=y.button??0;if(!M&&E===2){f(),h(y.clientX,y.clientY);return}if(!M&&E===1){f(),u(y.clientX,y.clientY);return}if(!M&&E!==0)return;if(!M&&(y.shiftKey||y.ctrlKey||y.metaKey)){f(),h(y.clientX,y.clientY);return}let _=n.getCamera(),w=l(y.clientX,y.clientY),D=_?_.position.distanceTo(t.target):0;if(!w||!iR(w.slant,D)){f();return}t.enableRotate=!1,r={id:y.pointerId,x:y.clientX,y:y.clientY,lastX:y.clientX,lastY:y.clientY,point:w.point.clone(),dragging:!1},t.dispatchEvent({type:"start"})}function m(y){let M=y.clientX,E=y.clientY,_=1;for(let[w,D]of s)w!==y.pointerId&&(M+=D.x,E+=D.y,_+=1);return{x:M/_,y:E/_}}function x(y){let M=s.get(y.pointerId);if(M&&(M.x=y.clientX,M.y=y.clientY),!r||y.pointerId!==r.id||s.size!==1||!o())return;let E=n.getCamera();if(!E)return;let _=y.clientX-r.lastX,w=y.clientY-r.lastY;if(!r.dragging){if(Math.hypot(y.clientX-r.x,y.clientY-r.y)<=ch)return;r.dragging=!0}if(!_&&!w)return;let D=sR(_,w,e.clientHeight||1,t.rotateSpeed);rR(E,t.target,r.point,D.theta,D.phi),E.lookAt(t.target),r.lastX=y.clientX,r.lastY=y.clientY}function p(y){s.delete(y.pointerId),r&&r.id===y.pointerId&&f(),s.size<2&&(t.zoomToCursor=!1),s.size===0&&(t.enableRotate=!0)}function g(y){p(y)}function b(y){if(!o()||!a()){t.zoomToCursor=!1;return}if(t.state!==-1||r&&r.dragging){t.zoomToCursor=!1;return}t.zoomToCursor=!0,u(y.clientX,y.clientY)}function T(){s.size<2&&(t.zoomToCursor=!1)}return{onPointerDown:d,onPointerMove:x,onPointerUp:p,onPointerCancel:g,onWheel:b,onWheelDone:T}}function i_(n){let e=cR(n),t={capture:!0};return n.canvas.addEventListener("pointerdown",e.onPointerDown,t),n.canvas.addEventListener("pointermove",e.onPointerMove,t),n.canvas.addEventListener("pointerup",e.onPointerUp,t),n.canvas.addEventListener("pointercancel",e.onPointerCancel,t),n.canvas.addEventListener("wheel",e.onWheel,t),n.canvas.addEventListener("wheel",e.onWheelDone),e}var Wo=class extends Ci{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,i=new Float32Array(2*t);for(let s=0;s<t;s+=3)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5];return super.setPositions(i),this}setColors(e){let t=e.length-3,i=new Float32Array(2*t);for(let s=0;s<t;s+=3)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5];return super.setColors(i),this}setFromPoints(e){let t=e.length-1,i=new Float32Array(6*t);for(let s=0;s<t;s++)i[6*s]=e[s].x,i[6*s+1]=e[s].y,i[6*s+2]=e[s].z||0,i[6*s+3]=e[s+1].x,i[6*s+4]=e[s+1].y,i[6*s+5]=e[s+1].z||0;return super.setPositions(i),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}};var yh=class extends nr{constructor(e=new Wo,t=new Zi({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}};var uR='-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',hR=420,fR=36,dR=new I,s_=new I,r_=new I,Fp=new I,Dr=new I,sr=new I;function zp(n){return new I(n[0]*.001,n[2]*.001,-n[1]*.001)}function Bp(n,e){if(typeof n=="number"&&Number.isFinite(n))return n;if(typeof n!="string")return e;let t=n.trim().replace("#","");return/^[0-9a-fA-F]{6}$/.test(t)?Number.parseInt(t,16):e}function o_(n){let e=[];if(Array.isArray(n.anchor)&&n.anchor.length>=3&&e.push(n.anchor),Array.isArray(n.tips))for(let t of n.tips)Array.isArray(t)&&t.length>=3&&e.push(t);return e.length?e:[n.anchor]}function pR(n){let e=Math.abs(n)*1e3;return Number.isFinite(e)?Math.abs(e-Math.round(e))<.05?`${Math.round(e)} mm`:e>=100?`${e.toFixed(1)} mm`:`${e.toFixed(2)} mm`:""}function _h(n,e){return n==null?"":typeof n=="string"?n:String(n[e==="cs"?"cs":"en"]||n.en||n.cs||"")}function mR(n){if(!Number.isFinite(n)||n<=0)return"";let e=n*1e3/hR,t=Math.max(1,Math.round(e));return Number.isFinite(t)?`1:${t}`:""}function gR(n,e){if(e==="plate")return fR;let t=Math.min(Math.max(1,n.clientWidth),Math.max(1,n.clientHeight));return Math.round(Math.min(14,Math.max(12,t*.034)))}function Xo(n,e,t,i="center",s=null,r=1){let o=Number.isFinite(r)&&r>0?r:1,a=Math.max(8,Math.round(t*o)),l=n.map(_=>String(_)).filter(_=>_.length),c=document.createElement("canvas"),u=c.getContext("2d"),h=`600 ${a}px ${uR}`,f=Math.ceil(a*.35),d=Math.ceil(a*.2),m=Math.ceil(a*1.25);u&&(u.font=h);let x=a;if(u)for(let _ of l)x=Math.max(x,u.measureText(_).width);let p=Math.ceil(x+f*2),g=Math.ceil(Math.max(l.length,1)*m+d*2),b=2;c.width=p*b,c.height=g*b;let T=c.getContext("2d");if(T){T.scale(b,b),T.clearRect(0,0,p,g);let _=e==="plate";T.font=h,T.textAlign="left",T.textBaseline="middle",T.lineJoin="round",T.miterLimit=2,T.lineWidth=Math.max(2,a*.28),T.strokeStyle=_?"#ffffff":"rgba(0,0,0,0.92)",T.fillStyle=s||(_?"#141414":"#f7f7f8"),l.forEach((w,D)=>{let L=f,k=d+m*D+m*.5;T.strokeText(w,L,k),T.fillText(w,L,k)})}let y=new vs(c);y.colorSpace=Tt,y.flipY=!0,y.needsUpdate=!0;let M=new on({map:y,depthTest:!1,depthWrite:!1,transparent:!0,toneMapped:!1,side:Lt}),E=new dt(new li(1,1),M);return E.renderOrder=30,E.frustumCulled=!1,E.userData.cssWidth=p,E.userData.cssHeight=g,E.userData.anchor=i,E.userData.fill=s,E.userData.fontScale=o,E}function kp(n){return`#${(n>>>0).toString(16).padStart(6,"0")}`}function ns(n,e=!1){let t=new Wo;t.setPositions([0,0,0,0,0,0]);let i=new Zi({color:n,linewidth:e?2.4:1.75,depthTest:!1,depthWrite:!1,transparent:!0,toneMapped:!1,worldUnits:!1,dashed:!!e,dashSize:.08,gapSize:.06,dashScale:1});e&&(i.dashed=!0);let s=new yh(t,i);return s.renderOrder=25,s.frustumCulled=!1,s.computeLineDistances(),s}function Ls(n,e,t){n.geometry.setPositions([e.x,e.y,e.z,t.x,t.y,t.z]),n.computeLineDistances()}function a_(n){let{scene:e,getCamera:t,getCanvas:i,getLocale:s,getVisibleWidthM:r,getTarget:o}=n,a=n.getExaggeration||(()=>1),l=new zt;l.name="Annotations",l.userData.blueprintAnnotations=!0,e.add(l);let c=null,u="viewer",h=!0,f=0,d=[],m=null,x=null,p=null;function g(){return u==="plate"?1315860:15921908}function b(V){return V&&V.color!=null?Bp(V.color,g()):c&&c.annotationColor!=null?Bp(c.annotationColor,g()):g()}function T(V){return kp(b(V))}function y(V){let ee=Number(V&&V.size);return Number.isFinite(ee)&&ee>0?ee:1}function M(V){V.traverse(ee=>{ee.geometry&&ee.geometry.dispose();let be=ee.material;be&&(be.map&&be.map.dispose(),be.dispose())})}function E(){for(let V of[...l.children])l.remove(V),M(V);d=[],m=null,x=null,p=null}function _(){return gR(i(),u)}function w(){l.visible=!!c&&h}function D(){if(E(),f=_(),!c){w();return}let V=s(),ee=g(),be=f,Re=Array.isArray(c.annotations)?c.annotations:[];for(let te of Re)if(!(!te||typeof te!="object")){if(te.kind==="callout"&&Array.isArray(te.anchor)){let ge=_h(te.text,V);if(!ge)continue;let Se=Xo(ge.split(`
`),u,be,"center",T(te),y(te)),qe=(te.leader===!1?[]:o_(te)).map(()=>ns(b(te)));l.add(...qe,Se),d.push({kind:"callout",sprite:Se,lines:qe,data:te})}else if(te.kind==="dim"&&Array.isArray(te.a)&&Array.isArray(te.b)){let ge=b(te),Se=Xo(["0"],u,be,"center",kp(ge),y(te)),qe=ns(ge),Ue=ns(ge),Ye=ns(ge),he=ns(ge),Ae=ns(ge);l.add(qe,Ue,Ye,he,Ae,Se),d.push({kind:"dim",sprite:Se,lines:[qe,Ue,Ye,he,Ae],data:te})}else if(te.kind==="line"&&Array.isArray(te.points)&&te.points.length>=2){let ge=Bp(te.color,g()),qe=[ns(ge,!!te.dashed)];te.arrow&&qe.push(ns(ge,!1),ns(ge,!1));let Ue=null,Ye=_h(te.text,V);Ye&&(Ue=Xo(Ye.split(`
`),u,be,"center",kp(ge),y(te))),l.add(...qe),Ue&&l.add(Ue),d.push({kind:"line",sprite:Ue,lines:qe,data:te})}}let K=_h(c.title,V),ue=c.project?String(c.project):"",B=[...K.split(`
`),ue].filter(Boolean);B.length&&(m=Xo(B,u,be,"topleft"),l.add(m)),x=Xo(["1:1"],u,be,"bottomleft"),p=ns(ee),l.add(p,x),w()}function L(V){let ee=zp(V),be=a();return be!==1&&(ee.y*=be),ee}function k(V,ee=dR){return ee.copy(V).project(t())}function X(V,ee,be,Re=new I){return Re.set(V,ee,be).unproject(t())}function z(V){let ee=t(),be=i(),Re=Math.max(1,be.clientHeight);if(ee.isOrthographicCamera){let B=Math.max(ee.zoom,1e-6);return(ee.top-ee.bottom)/B/Re}let K=Math.max(ee.position.distanceTo(V),1e-4),ue=(ee.fov||45)*Math.PI/180;return 2*Math.tan(ue/2)*K/Re}let N=new I,W=new I;function j(V,ee){let be=t(),Re=z(ee),K=Re*V.userData.cssWidth,ue=Re*V.userData.cssHeight;N.set(1,0,0).applyQuaternion(be.quaternion),W.set(0,1,0).applyQuaternion(be.quaternion);let B=V.userData.anchor||"center";V.position.copy(ee),B==="topleft"?(V.position.addScaledVector(N,K*.5),V.position.addScaledVector(W,-ue*.5)):B==="bottomleft"&&(V.position.addScaledVector(N,K*.5),V.position.addScaledVector(W,ue*.5)),V.quaternion.copy(be.quaternion),V.scale.set(K,ue,1)}function q(){let V=i(),ee=Math.max(1,V.width),be=Math.max(1,V.height);l.traverse(Re=>{let K=Re.material;K&&K.resolution&&K.resolution.set(ee,be)})}function _e(V,ee){let be=Xo(ee,u,f||_(),V.userData.anchor,V.userData.fill,V.userData.fontScale||1);V.material.map?.dispose(),V.material.dispose(),V.material=be.material,V.userData.cssWidth=be.userData.cssWidth,V.userData.cssHeight=be.userData.cssHeight,be.geometry.dispose()}function Z(){if(!c||!h||(_()!==f&&D(),!l.visible))return;q();let ee=s();t().updateMatrixWorld();for(let B of d)if(B.kind==="callout"){let te=L(B.data.anchor),ge=k(te,s_),Se=Array.isArray(B.data.offset)?B.data.offset:[.08,.06],qe=ge.x+Number(Se[0]||0)*2,Ue=ge.y+Number(Se[1]||0)*2,Ye=X(qe,Ue,ge.z,r_);j(B.sprite,Ye);let he=z(Ye),Ae=he*B.sprite.userData.cssWidth*.5,Le=o_(B.data);for(let Be=0;Be<B.lines.length;Be+=1){let Ge=L(Le[Be]||B.data.anchor);Dr.copy(Ye).sub(Ge);let Je=Dr.length();Je>Ae+he?(Dr.setLength(Je-Ae),Dr.add(Ge)):Dr.copy(Ye),Ls(B.lines[Be],Ge,Dr)}}else if(B.kind==="dim"){let te=L(B.data.a),ge=L(B.data.b),Se=k(te,s_),qe=k(ge,r_),Ue=qe.x-Se.x,Ye=qe.y-Se.y,he=Math.hypot(Ue,Ye)||1e-6;Ue/=he,Ye/=he;let Ae=Number(B.data.offset)||.04,Le=-Ye*Ae*2,Be=Ue*Ae*2,Ge=(Se.z+qe.z)*.5,Je=X(Se.x+Le,Se.y+Be,Ge,new I),ot=X(qe.x+Le,qe.y+Be,Ge,new I),oe=z(Je),ke=oe*6,je=oe*8;sr.copy(Je).sub(te);let re=sr.length()||1;sr.multiplyScalar((re+je)/re);let A=te.clone().add(sr);sr.copy(ot).sub(ge);let J=sr.length()||1;sr.multiplyScalar((J+je)/J);let Q=ge.clone().add(sr),Ee=te.clone().lerp(Je,Math.min(.85,ke/re)),$=ge.clone().lerp(ot,Math.min(.85,ke/J));Ls(B.lines[0],Ee,A),Ls(B.lines[1],$,Q),Ls(B.lines[2],Je,ot);let ve=oe*10,we=X(Se.x+Le-Ye*.012,Se.y+Be+Ue*.012,Ge,new I).sub(Je);we.lengthSq()<1e-16?we.set(0,ve,0):we.setLength(ve),Ls(B.lines[3],Je.clone().sub(we),Je.clone().add(we)),Ls(B.lines[4],ot.clone().sub(we),ot.clone().add(we)),Fp.copy(Je).lerp(ot,.5);let C=X(Se.x+Le-Ye*.03,Se.y+Be+Ue*.03,Ge,new I).sub(X(Se.x+Le,Se.y+Be,Ge,new I));C.lengthSq()>1e-12&&Fp.add(C);let G=_h(B.data.text,ee)||pR(te.distanceTo(ge));B.sprite.userData.labelText!==G&&(_e(B.sprite,[G]),B.sprite.userData.labelText=G),j(B.sprite,Fp)}else if(B.kind==="line"){let te=B.data.points.map(Se=>L(Se)),ge=[];for(let Se of te)ge.push(Se.x,Se.y,Se.z);if(B.lines[0].geometry.setPositions(ge),B.lines[0].computeLineDistances(),B.data.arrow&&te.length>=2&&B.lines.length>=3){let Se=te[te.length-2],qe=te[te.length-1],Ue=qe.clone().sub(Se);if(Ue.lengthSq()>1e-12){Ue.normalize();let Ye=z(qe),he=Ue.clone().multiplyScalar(-Ye*16),Ae=new I().crossVectors(Ue,t().up).normalize().multiplyScalar(Ye*7);Ae.lengthSq()<1e-16&&Ae.set(Ye*7,0,0),Ls(B.lines[1],qe,qe.clone().add(he).add(Ae)),Ls(B.lines[2],qe,qe.clone().add(he).sub(Ae))}}if(B.sprite){let Se=te[0].clone().lerp(te[te.length-1],.5);j(B.sprite,Se)}}let Re=k(o(),Dr).z;if(m){let B=X(-.94,.9,Re,new I);j(m,B)}let K=r(),ue=mR(K??NaN);if(x&&p){let B=K!=null&&K>8?2:1,te=X(-.9,-.86,Re,new I),ge=X(-.9+.08,-.86,Re,new I).sub(te),Se=z(te),qe=K&&K>0?B/K*Math.max(1,i().clientWidth):80;ge.lengthSq()>1e-12?ge.setLength(Math.max(qe*Se,Se*40)):ge.set(Se*80,0,0),Ls(p,te,te.clone().add(ge));let Ue=x.userData.labelText,Ye=ue?`${ue}  \xB7  ${Math.round(B*1e3)} mm`:"";Ue!==Ye&&(_e(x,Ye?[Ye]:["\u2014"]),x.userData.labelText=Ye);let he=X(-.9,-.8,Re,new I).sub(te);j(x,te.clone().add(he))}}return{group:l,setSpec(V){c=V&&typeof V=="object"?V:null,D(),Z()},setInk(V){u=V==="plate"?"plate":"viewer",D(),Z()},setVisible(V){h=!!V,w(),l.visible&&Z()},isVisible(){return h},relocalize(){D(),Z()},glyphBoundsNdc(){let V=i(),ee=Math.max(1,V.clientWidth),be=Math.max(1,V.clientHeight),Re=1/0,K=-1/0,ue=1/0,B=-1/0,te=!1;for(let ge of d){let Se=ge.sprite;if(!Se||Se===m||Se===x||ge.kind!=="callout"&&ge.kind!=="dim"&&ge.kind!=="line")continue;let qe=k(Se.position),Ue=(Se.userData.cssWidth||0)/ee,Ye=(Se.userData.cssHeight||0)/be;Re=Math.min(Re,qe.x-Ue),K=Math.max(K,qe.x+Ue),ue=Math.min(ue,qe.y-Ye),B=Math.max(B,qe.y+Ye),te=!0}return te?{minX:Re,maxX:K,minY:ue,maxY:B}:null},update:Z,clear(){c=null,E(),l.visible=!1}}}function l_(n){return n/25.4*72}function Hp(n,e){let t=URL.createObjectURL(n),i=document.createElement("a");i.href=t,i.download=e,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(t),3e4)}function xR(n){let e=document.createElement("canvas");e.width=n.width,e.height=n.height;let t=e.getContext("2d");return t?(t.drawImage(n,0,0),new Promise((i,s)=>{e.toBlob(r=>{r?i(r):s(new Error("PNG capture failed"))},"image/png")})):Promise.reject(new Error("2D canvas unavailable"))}async function yR(n){let e=await createImageBitmap(n),t=document.createElement("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d",{willReadFrequently:!0});if(!i)throw new Error("2D canvas unavailable");return i.drawImage(e,0,0),e.close?.(),i.getImageData(0,0,t.width,t.height)}async function _R(n){if(typeof CompressionStream>"u")return{bytes:n,filter:""};let e=new Blob([n]).stream().pipeThrough(new CompressionStream("deflate"));return{bytes:new Uint8Array(await new Response(e).arrayBuffer()),filter:"/Filter /FlateDecode "}}function yl(n){return typeof n=="string"?new TextEncoder().encode(n):n}async function vR(n){let e=n.width,t=n.height,i=n.data,s=new Uint8Array(e*t*3);for(let y=0,M=0;y<i.length;y+=4,M+=3){let E=i[y+3]/255;s[M]=Math.round(i[y]*E+255*(1-E)),s[M+1]=Math.round(i[y+1]*E+255*(1-E)),s[M+2]=Math.round(i[y+2]*E+255*(1-E))}let{bytes:r,filter:o}=await _R(s),a=l_(420),l=l_(297),c=`q
${a.toFixed(3)} 0 0 ${l.toFixed(3)} 0 0 cm
/Im0 Do
Q
`,u=new TextEncoder().encode(c),h=[],f=0;function d(y){h.push(y),f+=y.length}let m=[0];function x(y,M){m[y]=f,d(yl(`${y} 0 obj
`));for(let E of M)d(yl(E));d(yl(`
endobj
`))}d(yl(`%PDF-1.4
`)),x(1,["<< /Type /Catalog /Pages 2 0 R >>"]),x(2,["<< /Type /Pages /Kids [3 0 R] /Count 1 >>"]),x(3,[`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${a.toFixed(3)} ${l.toFixed(3)}] `,"/Contents 4 0 R /Resources << /XObject << /Im0 5 0 R >> >> >>"]),x(4,[`<< /Length ${u.length} >>
stream
`,u,`
endstream`]),x(5,[`<< /Type /XObject /Subtype /Image /Width ${e} /Height ${t} `,`/ColorSpace /DeviceRGB /BitsPerComponent 8 ${o}/Length ${r.length} >>
stream
`,r,`
endstream`]);let p=f,g=`xref
0 6
0000000000 65535 f 
`;for(let y=1;y<=5;y++)g+=`${String(m[y]).padStart(10,"0")} 00000 n 
`;g+=`trailer
<< /Size 6 /Root 1 0 R >>
startxref
${p}
%%EOF
`,d(yl(g));let b=new Uint8Array(f),T=0;for(let y of h)b.set(y,T),T+=y.length;return new Blob([b],{type:"application/pdf"})}async function c_(n){let e=await xR(n),t=await yR(e),i=await vR(t);return{png:e,pdf:i}}var Vp="scene";function ER(){try{return(new URLSearchParams(location.search).get(Vp)||"").trim()}catch{return""}}function h_(n){try{let e=new URL(location.href),t=n!=null?String(n).trim():"";t?e.searchParams.set(Vp,t):e.searchParams.delete(Vp);let i=`${e.pathname}${e.search}${e.hash}`,s=`${location.pathname}${location.search}${location.hash}`;i!==s&&history.replaceState(null,"",i)}catch{}}function wR(n,e,t={}){let i=Array.isArray(t.scenes)?t.scenes:[],s=Array.isArray(t.partGroups)?t.partGroups:[],r=Array.isArray(t.doors)?t.doors:[],o=Gy(t.ifc),a=new Map,l=()=>{},c=String(t.scene!=null?t.scene:ER()).trim();ry(),vp(document);let u=[],h=null,f=1842206,d=!0,m=Fx(),x=mx(),p=new Map,g=new Map,b=new Map,T=new Map,y=new Set,M=new Map,E=new Map,_=new Map,w=new Set,D=null;D=ty(v=>{d=v,f=v?1842206:15263981,h&&(h.background=new Ke(f)),document.documentElement.style.colorScheme=v?"dark":"light",p.size&&$o()});let L=new Pu({canvas:n,antialias:!0,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0,logarithmicDepthBuffer:!0});L.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),L.outputColorSpace=Tt,L.toneMapping=Ro,L.toneMappingExposure=1.05,L.localClippingEnabled=!0;let k=Cx(L);h=new Hn,h.background=new Ke(f);let X=1,z=new zt;z.name="VerticalExaggeration",h.add(z);function N(v){let P=Number(v);X=Number.isFinite(P)&&P>0?P:1,z.scale.set(1,X,1)}let W=30,j=120,q=75,_e=125,Z="perspective",V=q,ee=q,be=1,Re=!1,K=new cn(45,1,.01,1e6),ue=new wi(-1,1,1,-1,.01,1e6),B=K,te=new Fu(B,n);te.enableDamping=!1,te.screenSpacePanning=!0;let ge=()=>!1,Se=Dy({canvas:n,getCamera:()=>B,records:r,isBlocked:()=>ge(),onLongPress:v=>l(v)}),qe=new Map,Ue=new Map,Ye={on:!0,level:1,color:Ap(3e3)},he={on:!1,level:1,color:uh},Ae=new Map,Le=null,Be=v=>v&&Le?Le.device(v.globalId):void 0;Ny(Se.taps,{elementOf:v=>Al(v),isOn:v=>!!qe.get(v.globalId),isOpen:v=>{let P=Be(v);if(P?.deviceType==="WindowCovering"){let O=P.state?.windowCovering?.targetPositionLiftPercent100ths;return O!=null&&O<5e3}return!!Ue.get(v.globalId)},isLive:v=>!!Be(v),onLight:v=>L_(v),onSwitch:(v,P)=>U_(v,P),switchActions:v=>F_(v),onCover:v=>B_(v),coverActions:v=>k_(v),onWindow:v=>z_(v),targetsFor:(v,P)=>O_(v,P)});let Ge=a_({scene:h,getCamera:()=>B,getCanvas:()=>n,getLocale:nh,getVisibleWidthM:()=>{if(!B.isOrthographicCamera)return null;let v=Math.max(B.zoom,1e-6);return(B.right-B.left)/v},getTarget:()=>te.target,getExaggeration:()=>X}),Je=null,ot=null;h.add(new Ua(16777215,.45));let oe=new $s(16777215,1.15);oe.position.set(.6,1,.4),h.add(oe);let ke=new $s(16777215,.4);ke.position.set(-.5,.2,-.6),h.add(ke);let je=new No(L);h.environment=je.fromScene(new Bu,.04).texture,je.dispose();let re=null;i_({canvas:n,controls:te,getCamera:()=>B,getRoot:()=>re,isBlocked:()=>ge()||te.enabled===!1});let A=new Gt,J=new I,Q=new I,Ee=new I,$=new I,ve=new I,me=[],we=1,C=!1,S=!1,G=!1;new Du().parse(e,"",v=>{re=v.scene,z.add(re),Se.bind(re),re.traverse(O=>{if(!O.isMesh)return;let U=Ry(O);O.userData.bpPart=U.part,O.userData.bpElementKey=U.element,U.element&&(a.has(U.element)||a.set(U.element,[]),a.get(U.element).push(O));let ae=U.part;if(p.has(ae)||p.set(ae,[]),p.get(ae).push(O),O.material){let Te=Array.isArray(O.material)?O.material:[O.material];for(let Ie of Te)"side"in Ie&&(Ie.side=Lt)}}),Nr(),bl(),Yo(),ne(),Th();let P=Ve(c);P&&(ie=`scene:${String(P.id).trim()}`),et(),Li(),Yt(),an(),$o(),P&&Ds(P),Xe(),D?.refreshPartialHeight(),g_(),x_(),zr(),Hr()},v=>{pe(String(v?.message||v))});function pe(v){let P=document.getElementById("err");P&&(P.style.display="block",P.textContent=v)}function le(){re&&(A.setFromObject(re),A.getSize(J),A.getCenter(Q))}function xe(){let v=Math.max(1,n.clientWidth),P=Math.max(1,n.clientHeight);return v/P}function se(v,P){let O=v*Math.PI/180;return 2*Math.atan(Math.tan(O/2)/Math.max(P,1e-6))}function fe(){let v=xe();K.aspect=v,K.fov=se(V,v)*180/Math.PI,K.updateProjectionMatrix()}function De(v,P){let O=xe(),U=Math.max(v,1e-6)*Math.tan(P/2),ae=U*O;ue.left=-ae,ue.right=ae,ue.top=U,ue.bottom=-U,ue.updateProjectionMatrix()}function F(){let v=xe(),O=Math.max(ue.top,1e-6)*v;ue.left=-O,ue.right=O,ue.updateProjectionMatrix()}function ye(v,P){let O=xe(),U=Math.max(v,1e-6),Te=Math.max(P,1e-6),Ie=Te*O;Ie<U&&(Ie=U,Te=Ie/Math.max(O,1e-6)),be=1,ue.left=-Ie,ue.right=Ie,ue.top=Te,ue.bottom=-Te,ue.updateProjectionMatrix(),Oe()}function de(v){let P=Math.max(v,1e-4),O=Ee.copy(B.position).sub(te.target);O.lengthSq()<1e-12?O.set(0,0,1):O.normalize(),B.position.copy(te.target).addScaledVector(O,P)}function Fe(v){v!==B&&(v.position.copy(B.position),v.quaternion.copy(B.quaternion),v.up.copy(B.up),v.near=B.near,v.far=B.far,B=v,te.object=B,te.update())}function Ne(){let v=Math.abs(os)>.05||Math.abs(as)>.05||Math.abs(xi-1)>.001?xi:1;return be*v}function Oe(){B.zoom=Ne(),B.updateProjectionMatrix()}function ze(){if(Re||S||!B.isOrthographicCamera)return;let v=Math.abs(os)>.05||Math.abs(as)>.05||Math.abs(xi-1)>.001?xi:1;be=Math.max(B.zoom/Math.max(v,1e-6),1e-6)}function st(){if(Z==="ortho")return;ee=V;let v=B.position.distanceTo(te.target),P=se(V,xe());De(v,P),be=1,Xn(()=>{Re=!0,Fe(ue),Z="ortho",Oe(),Re=!1}),kt()}function Y(v){if(Z!=="ortho")return;let P=Ce(v??ee),O=Math.max(ue.top,1e-6)/Math.max(be,1e-6),U=se(P,xe()),ae=O/Math.max(Math.tan(U/2),1e-8);V=P,ee=P,be=1,Xn(()=>{Re=!0,Fe(K),Z="perspective",fe(),de(ae),Oe(),Wn(),te.update(),Re=!1}),kt()}function Pe(v,P={}){let O=Ce(v);if(Z==="ortho"){Y(O);return}let U=xe(),ae=se(V,U),Te=se(O,U),Ie=B.position.distanceTo(te.target);V=O,ee=O,Xn(()=>{if(fe(),P.reframe!==!1){let Ze=Math.tan(ae/2)/Math.max(Math.tan(Te/2),1e-8);de(Ie*Ze),Wn(),te.update()}Oe()}),kt()}function rt(){Z==="ortho"?Y(ee):st()}function Ce(v){return Math.min(j,Math.max(W,v))}function pt(){return Z==="ortho"?_e:V}function Bt(v){return v>j?"ISO":`${Math.round(v)}\xB0`}function kt(){Je&&(Je.value=pt()),ot&&(ot.textContent=Z==="ortho"?"ISO":`${Math.round(V)}\xB0`),Je?.refresh()}function is(v){if(v>j){Z!=="ortho"?st():kt();return}let P=Ce(v);Z==="ortho"?Y(P):Pe(P,{reframe:!0})}function Li(){let v=document.getElementById("fov");if(!v)return;v.replaceChildren();let P=document.createElement("div");P.className="fov-row";let O=document.createElement("span");O.className="fov-label",O.textContent=Dt("ui.fov"),ot=document.createElement("span"),ot.className="fov-value",ot.textContent=`${Math.round(V)}\xB0`,Je=th({min:W,max:_e,step:1,value:pt(),ariaLabel:"Field of view",formatAriaValue:Bt,onInput:Ie=>is(Ie),onChange:Ie=>is(Ie),onTap:()=>rt()}),Je.el.classList.add("fov-range");let U=document.createElement("div");U.className="fov-detent",U.setAttribute("aria-hidden","true");let ae=(j-W)/(_e-W);U.style.left=`${ae*100}%`,Je.el.querySelector(".coop-range-track")?.append(U),P.append(O,Je.el,ot),v.append(P),kt()}function Wn(){let v=Math.max(J.x,J.y,J.z,.01),P=B.position.distanceTo(te.target),O=Math.round(Math.min(Math.max(P/200,v/5e3,.001),P/10)*1e4)/1e4,U=Math.round(Math.max(P+v*4,v*8,10)*1e4)/1e4;B.near===O&&B.far===U||(B.near=O,B.far=U,B.updateProjectionMatrix())}function Xn(v){S=!0;try{v()}finally{requestAnimationFrame(()=>{S=!1})}}fe();function Nr(){re&&(Xn(()=>{le(),te.target.copy(Q);let P=Math.max(J.x,J.y,J.z,1)*1.85;B.position.set(Q.x+P*.75,Q.y+P*.55,Q.z+P*.75),Wn(),te.update()}),vt())}function ss(){for(let v of p.keys())g.set(v,1),b.set(v,1),Ps(p.get(v)||[],1,{edgeMode:x});le(),rr()}function Or(v){if(re){if(He=null,Ge.clear(),N(1),ss(),zr(),Hr(),K.up.set(0,1,0),ue.up.set(0,1,0),B.up.set(0,1,0),v==="iso"){Nr();return}Xn(()=>{le();let P=Math.max(J.x,J.y,J.z,1),O=P*1.85,U=Q;v==="front"?B.position.set(U.x,U.y,U.z+O):v==="top"?B.position.set(U.x,U.y+O,U.z+P*.01):v==="side"&&B.position.set(U.x-O,U.y,U.z),te.target.copy(U),Wn(),te.update()}),vt()}}function Ds(v){if(!re||!v)return;He=v,N(v.verticalExaggeration);let P=X;if(v.opacityDefault!=null||v.opacity&&typeof v.opacity=="object"){let Te=v.opacityDefault!=null?Number(v.opacityDefault):1,Ie=v.opacity&&typeof v.opacity=="object"?v.opacity:{},Ze=Dx(Ie,u);for(let ft of p.keys()){let Wt=Object.prototype.hasOwnProperty.call(Ze,ft)?Ze[ft]:Te;Ur(ft,Wt,{skipUi:!0,skipClip:!0})}le(),rr()}if(Object.prototype.hasOwnProperty.call(v,"cuts")){let Te=Array.isArray(v.cuts)?v.cuts:[];me.length=0;for(let Ie of Te){let Ze=Ie?.normal;if(!Array.isArray(Ze)||Ze.length<3)continue;let ft=new I(Number(Ze[0])||0,Number(Ze[1])||0,Number(Ze[2])||0);if(ft.lengthSq()<1e-12)continue;ft.normalize();let Wt=null,gn=Math.min(1,Math.max(0,Number(Ie.t)||0));if(Array.isArray(Ie.anchor)&&Ie.anchor.length>=3){Wt=zp(Ie.anchor),Wt.y*=P;let{near:si,far:nn}=gi(ft),Qt=Wt.dot(ft);gn=Math.min(1,Math.max(0,(Qt-si)/Math.max(nn-si,1e-6)))}me.push({id:we++,normal:ft,t:gn,anchor:Wt,locked:!0,label:$t(ft)})}C=!1,Zt(),Yt(),an(),D?.refreshPartialHeight()}v.projection==="ortho"?Z!=="ortho"?st():kt():v.hFovDeg!=null&&Number.isFinite(Number(v.hFovDeg))&&Pe(Number(v.hFovDeg),{reframe:!1});let U=v.camera;U&&Array.isArray(U.target)&&Array.isArray(U.position)&&Xn(()=>{Re=!0;let Te=new I(0,1,0);Array.isArray(U.up)&&U.up.length>=3&&(Te.set(Number(U.up[0])||0,Number(U.up[1])||0,Number(U.up[2])||0),Te.lengthSq()<1e-12?Te.set(0,1,0):Te.normalize()),K.up.copy(Te),ue.up.copy(Te),B.up.copy(Te),te.target.set(Number(U.target[0])||0,(Number(U.target[1])||0)*P,Number(U.target[2])||0),B.position.set(Number(U.position[0])||0,(Number(U.position[1])||0)*P,Number(U.position[2])||0),B.lookAt(te.target),Z==="ortho"&&Array.isArray(U.orthoFit)&&U.orthoFit.length>=2&&ye(Number(U.orthoFit[0])||.1,(Number(U.orthoFit[1])||.1)*P),le(),Wn(),te.update(),Re=!1}),vt();let ae=v.edges;(ae==="none"||ae==="transparent"||ae==="opaque")&&(x=ae,Os()),Ge.setSpec(v),zr(),Hr()}function Ur(v,P,O={}){let U=Math.max(0,Math.min(1,Number(P)||0));g.set(v,U),U>0&&b.set(v,U),O.detach&&y.add(v),Ps(p.get(v)||[],U,{edgeMode:x}),!O.skipClip&&(le(),O.skipUi||rr())}function Fr(v,P,O){let U=Math.max(0,Math.min(1,Number(P)||0));O&&T.set(O,U);for(let ae of v)y.has(ae)||(g.set(ae,U),U>0&&b.set(ae,U),Ps(p.get(ae)||[],U,{edgeMode:x}));le(),rr()}function _l(v,P,O){y.delete(v);let U=O.filter(Te=>!y.has(Te)),ae=Di(P,U);g.set(v,ae),ae>0&&b.set(v,ae),Ps(p.get(v)||[],ae,{edgeMode:x}),le(),rr()}function vl(v){if(!v.length)return 1;let P=g.get(v[0])??1;for(let O=1;O<v.length;O++){let U=g.get(v[O])??1;if(Math.abs(U-P)>1e-4)return NaN}return P}function Di(v,P){let O=P.filter(ae=>!y.has(ae)),U=vl(O.length?O:P);return Number.isNaN(U)?T.get(v)??1:U}function rr(){for(let[v,P]of M)P.value=(g.get(v)??1)*100;for(let[v,P]of E){let O=(P.el.dataset.leaves||"").split(",").map(U=>U.trim()).filter(Boolean);P.value=Di(v,O)*100}for(let[v,P]of _){let O=y.has(v);P.hidden=!O,P.setAttribute("aria-hidden",O?"false":"true")}}function Ns(){return me.filter(v=>v.locked).map(v=>Ni(v))}function qo(){let v=new $e;return L.getDrawingBufferSize(v),{x:v.x,y:v.y}}function Os(){if(p.size){if(x===Tr){bx(re);return}Sx(p,!0,{clippingPlanes:Ns(),resolution:qo(),edgeMode:x})}}function $o(){p.size&&(Ox(p,m,{isDark:d,clippingPlanes:Ns(),opacityByLabel:g,edgeMode:x}),m===fl?(L.toneMapping=Ro,L.toneMappingExposure=1.05):(L.toneMapping=ui,L.toneMappingExposure=1),Os(),mp(p,Ns()),I_())}function bl(){let v=document.getElementById("mats");if(v){v.replaceChildren();for(let[P,O]of[[Ju,"ui.solid"],[fl,"ui.realistic"]]){let U=document.createElement("button");U.type="button",U.dataset.mode=P,U.textContent=Dt(O),P===m&&U.classList.add("is-active"),U.addEventListener("click",()=>{m=P,Bx(P),v.querySelectorAll("button").forEach(ae=>{ae.classList.toggle("is-active",ae.dataset.mode===P)}),$o()}),v.append(U)}}}function Yo(){let v=document.getElementById("edges");if(v){v.replaceChildren();for(let[P,O]of[[Tr,"ui.edgesNone"],[Ar,"ui.edgesTransparent"],[ul,"ui.edgesOpaque"]]){let U=document.createElement("button");U.type="button",U.dataset.edgeMode=P,U.textContent=Dt(O),P===x&&U.classList.add("is-active"),U.addEventListener("click",()=>{x=P,sp(P),v.querySelectorAll("button").forEach(ae=>{ae.classList.toggle("is-active",ae.dataset.edgeMode===P)}),Os(),jp()}),v.append(U)}}}function R(v,P,O,U){let ae=document.createElement("div");ae.className="part-opacity-wrap";let Te,Ie=()=>{if(Te.value/100>0)U(0);else{let ft=O();U(ft>0?ft:1)}};return Te=th({min:0,max:100,step:1,value:Math.round(P),ariaLabel:v,formatAriaValue:Ze=>`${Math.round(Ze)}%`,thumbScrubOnly:!0,onInput:Ze=>U(Ze/100),onChange:Ze=>U(Ze/100),onTap:Ie}),Te.el.classList.add("part-opacity"),ae.append(Te.el),{wrap:ae,range:Te}}function H(){let v=document.getElementById("parts");if(!v)return;v.style.removeProperty("--part-name-col");let P=0;for(let O of v.querySelectorAll(".part-name")){if(O.closest(".part-children")?.hidden)continue;let ae=O.style.width;O.style.width="max-content",P=Math.max(P,Math.ceil(O.getBoundingClientRect().width)),O.style.width=ae}P>0&&v.style.setProperty("--part-name-col",`${P}px`)}function ce(v,P,O,U=null){if(v.type==="leaf"){let Ct=document.createElement("div");Ct.className="part-row part-leaf",Ct.style.setProperty("--part-depth",String(O)),Ct.dataset.leaf=v.id;let Ll=document.createElement("span");Ll.className="part-disclosure-spacer",Ll.setAttribute("aria-hidden","true");let Dl=document.createElement("span");Dl.className="part-name",Dl.textContent=v.label;let{wrap:um,range:hm}=R(`${v.label} opacity`,(g.get(v.id)??1)*100,()=>b.get(v.id)??1,Nl=>Ur(v.id,Nl,{detach:!!U}));hm.el.dataset.leaf=v.id,M.set(v.id,hm);let _i=null;if(U){_i=document.createElement("button"),_i.type="button",_i.className="part-sync",_i.textContent=Dt("ui.sync"),_i.setAttribute("aria-label",`${Dt("ui.sync")} ${v.label}`);let Nl=y.has(v.id);_i.hidden=!Nl,_i.setAttribute("aria-hidden",Nl?"false":"true"),_i.addEventListener("click",Y_=>{Y_.stopPropagation(),_l(v.id,U.groupId,U.leafIds)}),_.set(v.id,_i)}_i?Ct.append(Ll,Dl,um,_i):Ct.append(Ll,Dl,um),P.append(Ct);return}let ae=ju(v),Te=document.createElement("div");Te.className="part-group",Te.dataset.group=v.id;let Ie=document.createElement("div");Ie.className="part-row part-group-row",Ie.style.setProperty("--part-depth",String(O)),Ie.setAttribute("role","button"),Ie.tabIndex=0;let Ze=document.createElement("button");Ze.type="button",Ze.className="part-disclosure",Ze.setAttribute("aria-label",`Expand ${v.label}`),Ze.setAttribute("aria-expanded","false");let ft=document.createElement("span");ft.className="part-name",ft.textContent=v.label;let Wt=Di(v.id,ae)||1;Wt<=0&&(Wt=1);let{wrap:gn,range:si}=R(`${v.label} opacity`,Di(v.id,ae)*100,()=>Wt,Ct=>{Ct>0&&(Wt=Ct),Fr(ae,Ct,v.id)});si.el.dataset.group=v.id,si.el.dataset.leaves=ae.join(","),E.set(v.id,si),gn.addEventListener("click",Ct=>Ct.stopPropagation()),gn.addEventListener("pointerdown",Ct=>Ct.stopPropagation());let nn=document.createElement("div");nn.className="part-children",nn.hidden=!0;function Qt(Ct){Ct?w.add(v.id):w.delete(v.id),nn.hidden=!Ct,Te.classList.toggle("is-expanded",Ct),Ze.setAttribute("aria-expanded",Ct?"true":"false"),Ze.setAttribute("aria-label",Ct?`Collapse ${v.label}`:`Expand ${v.label}`),requestAnimationFrame(()=>H())}function Qo(){Qt(!w.has(v.id))}Ze.addEventListener("click",Ct=>{Ct.stopPropagation(),Qo()}),Ie.addEventListener("click",Ct=>{gn.contains(Ct.target)||Qo()}),Ie.addEventListener("keydown",Ct=>{(Ct.key==="Enter"||Ct.key===" ")&&(Ct.preventDefault(),Qo())}),Ie.append(Ze,ft,gn),Te.append(Ie,nn),P.append(Te);let Oh={groupId:v.id,leafIds:ae};for(let Ct of v.children)ce(Ct,nn,O+1,Oh);Qt(w.has(v.id))}function ne(){let v=document.getElementById("parts");if(!v)return;v.replaceChildren(),M.clear(),E.clear(),_.clear();for(let O of p.keys())g.has(O)||(g.set(O,1),Ps(p.get(O)||[],1,{edgeMode:x})),b.has(O)||b.set(O,1);let P=Lx(p.keys(),s,Dt);u=P;for(let O of P)ce(O,v,0,null);requestAnimationFrame(()=>H())}let ie="iso",He=null,Qe=!1;function Ve(v){let P=String(v||"").trim();if(!P)return null;for(let O of i)if(String(O?.id||"").trim()===P)return O;return null}function Xe(){let v=ie;v&&v.startsWith("scene:")?h_(v.slice(6)):h_(null)}function nt(){return document.querySelectorAll("#cams button, #scenes button")}function ct(){ie!=null&&(ie=null,nt().forEach(v=>{v.classList.remove("is-active")}),Xe())}function yt(){let v=document.getElementById("scenes");if(!v){let P=document.getElementById("cams");v=document.createElement("div"),v.id="scenes",v.className="scene-list",P?.insertAdjacentElement("afterend",v)}return v}function et(){let v=document.getElementById("cams");if(!v)return;v.replaceChildren();let P=yt();P.replaceChildren();function O(U,ae,Te,Ie){let Ze=document.createElement("button");Ze.type="button",Ze.dataset.preset=ae,Ze.textContent=Te,ae===ie&&Ze.classList.add("is-active"),Ze.addEventListener("click",()=>{ie=ae,nt().forEach(ft=>{ft.classList.toggle("is-active",ft.dataset.preset===ae)}),Ie(),Xe()}),U.append(Ze)}for(let[U,ae]of[["iso","ui.iso"],["front","ui.front"],["side","ui.side"],["top","ui.top"]])O(v,U,Dt(ae),()=>Or(U));for(let U of i){let ae=String(U?.id||"").trim();if(!ae)continue;let Te=Dt(`scene.${ae}`);O(P,`scene:${ae}`,Te,()=>Ds(U))}P.hidden=P.childElementCount===0}function _t(v=Ee){return v.copy(te.target).sub(B.position).normalize()}function $t(v){let P=Math.hypot(v.x,v.z),O=(Math.atan2(v.x,v.z)*180/Math.PI+360)%360,U=Math.atan2(v.y,P)*180/Math.PI,ae=Math.abs(U).toFixed(0),Te=U>=0?"\u2191":"\u2193";return`${O.toFixed(0)}\xB0 / ${ae}\xB0${Te}`}function wt(){return me.some(v=>!v.locked)}function Et(){return me.filter(v=>v.locked)}function Yt(){wt()||!(Et().length===0||C)||me.push({id:we++,normal:new I(0,0,1),t:0,locked:!1,label:Dt("ui.cut")})}function tt(v){let P=document.getElementById("cuts");if(!P)return;let O=P.querySelector(`[data-cut-id="${v.id}"]`);if(!O){an();return}let U=O.querySelector(".cut-label");if(U&&(U.textContent=v.locked?v.label:Dt("ui.cut")),v.locked&&!O.querySelector(".cut-remove")){let ae=document.createElement("button");ae.type="button",ae.className="cut-remove",ae.setAttribute("aria-label",Dt("ui.removeSection")),ae.textContent="\xD7",ae.addEventListener("click",()=>Us(v.id)),O.append(ae)}}function mn(v){v.locked||(_t(v.normal),v.locked=!0,v.label=$t(v.normal),C=!1,Zt(),tt(v))}function vt(){Et().length!==0&&(wt()||(C=!0,!G&&(Yt(),an())))}function rs(){C&&(wt()||Et().length!==0&&(Yt(),an()))}function tn(v,P){let O=me.find(U=>U.id===v);if(O){if(O.locked||mn(O),O.t=Math.min(1,Math.max(0,Number(P))),O.anchor=null,G){bt();return}Zt()}}function Us(v){let P=me.findIndex(O=>O.id===v);P<0||(me.splice(P,1),Et().length===0?(C=!1,wt()||Yt()):C&&!wt()&&Yt(),Zt(),an(),D?.refreshPartialHeight())}function gi(v){if(le(),A.isEmpty())return{near:-1,far:1};let P=A.min,O=A.max,U=1/0,ae=-1/0;for(let Ze=0;Ze<2;Ze++)for(let ft=0;ft<2;ft++)for(let Wt=0;Wt<2;Wt++){ve.set(Ze?O.x:P.x,ft?O.y:P.y,Wt?O.z:P.z);let gn=ve.dot(v);gn<U&&(U=gn),gn>ae&&(ae=gn)}let Ie=Math.max(ae-U,1e-6)*.02;return{near:U-Ie,far:ae+Ie}}function Ni(v){if(v.anchor)return new yn().setFromNormalAndCoplanarPoint(v.normal,v.anchor);let{near:P,far:O}=gi(v.normal),U=P+(O-P)*v.t;return $.copy(v.normal).multiplyScalar(U),new yn().setFromNormalAndCoplanarPoint(v.normal,$)}function bt(){let v=Ns();return re&&(re.traverse(P=>{if(!P.isMesh||!P.material||Fn(P)||eh(P))return;let O=Array.isArray(P.material)?P.material:[P.material];for(let U of O){if(!U)continue;let ae=U.clippingPlanes?U.clippingPlanes.length:0;U.clippingPlanes=v,U.clipIntersection=!1,ae!==v.length&&(U.needsUpdate=!0)}}),rp(re,v)),v}function Zt(){let v=bt();re&&(mp(p,v),x!==Tr?Os():rp(re,v))}function an(){let v=document.getElementById("cuts");if(v){v.replaceChildren();for(let P of me){let O=document.createElement("div");O.className="cut-row",O.dataset.cutId=String(P.id);let U=document.createElement("span");U.className="cut-label",U.textContent=P.locked?P.label:Dt("ui.cut");let ae=()=>{G&&(G=!1,Zt(),rs())},Te=th({min:0,max:1,step:.001,value:P.t,ariaLabel:P.locked?`Section ${P.label}`:"Section cut",onScrubStart:()=>{G=!0,P.locked||mn(P)},onScrubEnd:ae,onInput:Ie=>tn(P.id,Ie),onChange:Ie=>{tn(P.id,Ie),ae()}});if(O.append(U,Te.el),P.locked){let Ie=document.createElement("button");Ie.type="button",Ie.className="cut-remove",Ie.setAttribute("aria-label",Dt("ui.removeSection")),Ie.textContent="\xD7",Ie.addEventListener("click",()=>Us(P.id)),O.append(Ie)}v.append(O)}D?.refreshPartialHeight()}}let Nt=!1,jt=new I,Jn=new I,Zo=!1;n.addEventListener("pointerdown",()=>{Nt=!0},{capture:!0});let Gp=()=>{Nt=!1};window.addEventListener("pointerup",Gp,{capture:!0}),window.addEventListener("pointercancel",Gp,{capture:!0}),te.addEventListener("start",()=>{ct(),Nt=!0}),te.addEventListener("change",()=>{ze()}),te.addEventListener("end",()=>{Nt=!1,!S&&vt()});let xi=1,os=0,as=0,vh=1,bh=0,Mh=0,Sh=1,Eh=0,wh=0,or=0,f_=280;function d_(){let v=Math.max(1,n.clientWidth),P=Math.max(1,n.clientHeight);if(!D)return{zoom:1,offX:0,offY:0,w:v,h:P};let{bottom:O,right:U}=D.getSafeInsets();if(O<=0&&U<=0)return{zoom:1,offX:0,offY:0,w:v,h:P};let ae=Math.max(1,v-U),Te=Math.max(1,P-O),Ie=Math.min(ae/v,Te/P),Ze=U/2,ft=O/2;return{zoom:Ie,offX:Ze,offY:ft,w:v,h:P}}function Wp(v,P){Xn(()=>{Re=!0,Math.abs(os)>.05||Math.abs(as)>.05||Math.abs(xi-1)>.001?(B.zoom=be*xi,B.setViewOffset(v,P,os,as,v,P)):(B.clearViewOffset(),B.zoom=be,xi=1,os=0,as=0),B.updateProjectionMatrix(),Re=!1})}function Xp(v=!0){let{zoom:P,offX:O,offY:U,w:ae,h:Te}=d_();if(vh=P,bh=O,Mh=U,!v){xi=P,os=O,as=U,or=0,Wp(ae,Te);return}Sh=xi,Eh=os,wh=as,or=performance.now()}function p_(v){if(!or)return;let P=Math.min(1,(v-or)/f_),O=1-(1-P)**3;xi=Sh+(vh-Sh)*O,os=Eh+(bh-Eh)*O,as=wh+(Mh-wh)*O;let U=Math.max(1,n.clientWidth),ae=Math.max(1,n.clientHeight);Wp(U,ae),P>=1&&(or=0)}function Ml(){let v=Math.max(1,n.clientWidth),P=Math.max(1,n.clientHeight);L.setSize(v,P,!1),Z==="perspective"?fe():F(),Xp(!1);let O=qo();Mx(re,O.x,O.y)}Ml(),window.addEventListener("resize",Ml),D?.onDetentChange(()=>{Xp(!0)});let qn=document.getElementById("ar"),bn=document.getElementById("measure"),Ko=!1,Sl=()=>Dt("ui.measure");function Th(){let v=document.getElementById("locale");if(v){v.replaceChildren();for(let[P,O]of[["cs","CS"],["en","EN"]]){let U=document.createElement("button");U.type="button",U.dataset.locale=P,U.textContent=O,P===nh()&&U.classList.add("is-active"),U.addEventListener("click",()=>{sy(P)}),v.append(U)}}}function m_(){vp(document),qn&&!Ko&&(qn.textContent=Dt("ui.ar")),bn&&(bn.textContent=Sl()),zr(),Hr(),Ge.relocalize();try{bl(),Yo(),et(),Li(),ne(),an(),Th(),om()}catch(v){console.error("relocalizeUi",v);try{Th()}catch{}}D?.refreshPartialHeight()}_p(()=>m_());function g_(){qn&&(qn.hidden=!1,Ko||(qn.textContent=Dt("ui.ar")))}function x_(){bn&&(bn.hidden=!1,bn.textContent=Sl())}let Br=document.getElementById("drawing"),Fs=document.getElementById("labels"),kr=!0;function zr(){Br&&(Br.hidden=!1,Br.disabled=!He||El,Br.textContent=Dt("ui.drawing"))}function Hr(){if(!Fs)return;let v=!!He;Fs.hidden=!v,Fs.disabled=!v,Fs.setAttribute("aria-pressed",kr?"true":"false"),Fs.classList.toggle("is-active",v&&kr),Fs.textContent=Dt("ui.labels")}function y_(){try{let v=new URLSearchParams(window.location.search).get("m");if(v&&v.trim())return v.trim()}catch{}return"model"}function __(){let P=1,O=1.35;for(let U=0;U<6;U+=1){Ge.update();let ae=Ge.glyphBoundsNdc();if(!ae)return;let Te=Math.max(-1+.04-ae.minX,ae.maxX-(1-.04),-1+.04-ae.minY,ae.maxY-(1-.04),0);if(Te<.012||P>=O-.01)return;let Ie=Math.min(O/P,Math.max(1.05,1+Te*1.6));P*=Ie,B.isOrthographicCamera?(ue.left*=Ie,ue.right*=Ie,ue.top*=Ie,ue.bottom*=Ie,ue.updateProjectionMatrix()):(Ee.copy(B.position).sub(te.target).multiplyScalar(Ie),B.position.copy(te.target).add(Ee),Wn())}}function qp(){or=0,xi=1,os=0,as=0,vh=1,bh=0,Mh=0,B.clearViewOffset(),B.zoom=be,B.updateProjectionMatrix()}let El=!1;async function $p(){if(El||!re||!He)return null;El=!0,zr(),Qe=!0;let v=He,P=x,O=h.background,U=L.getPixelRatio(),ae=n.style.width,Te=n.style.height,Ie=D?.getDetent?.()??null,Ze=yi?.isActive()??!1,ft=Ge.isVisible();try{Ze&&yi?.setActive(!1),Ge.setVisible(!0),D?.setDetent("closed"),n.style.width=`${2400}px`,n.style.height=`${1697}px`,L.setPixelRatio(1),Ml(),qp(),x=ul,Os(),h.background=new Ke(16777215),Ge.setInk("plate"),Ds(v),qp(),__(),Ge.update(),k.render(h,B,re,Jp,{quality:"high"});let{png:Wt,pdf:gn}=await c_(n),si=`${y_()}_${String(v.id||"scene")}`;return{png:Wt,pdf:gn,stem:si}}finally{n.style.width=ae,n.style.height=Te,L.setPixelRatio(U),x=P,h.background=O,Ge.setInk("viewer"),Ge.setVisible(ft),Ie&&D?.setDetent(Ie),Ml(),Os(),v&&Ds(v),Ze&&yi?.setActive(!0),Qe=!1,El=!1,zr(),Hr(),requestAnimationFrame(Il)}}window.blueprintCaptureDrawing=async()=>{let v=await $p();return v?{png:v.png,pdf:v.pdf,stem:v.stem}:null},window.blueprintSetView=(v={})=>{if(!re||!v)return!1;let P=v.projection==="ortho"?"ortho":"perspective",O=Number.isFinite(Number(v.hFovDeg))?Number(v.hFovDeg):V;return P==="perspective"&&Z==="ortho"&&Y(O),P==="perspective"&&Pe(O,{reframe:!1}),Xn(()=>{Re=!0;let U=new I(0,1,0);if(Array.isArray(v.up)&&v.up.length>=3&&(U.set(Number(v.up[0])||0,Number(v.up[1])||0,Number(v.up[2])||0),U.lengthSq()>1e-12?U.normalize():U.set(0,1,0)),K.up.copy(U),ue.up.copy(U),B.up.copy(U),Array.isArray(v.target)&&te.target.set(Number(v.target[0])||0,Number(v.target[1])||0,Number(v.target[2])||0),Array.isArray(v.position)&&B.position.set(Number(v.position[0])||0,Number(v.position[1])||0,Number(v.position[2])||0),B.lookAt(te.target),P==="ortho"){let ae=B.position.distanceTo(te.target),Te=se(O,xe());De(ae,Te),be=1,Z!=="ortho"&&(Fe(ue),Z="ortho"),Oe(),kt()}le(),Wn(),te.update(),Re=!1}),ln=!0,!0},Fs&&Fs.addEventListener("click",()=>{kr=!kr,Ge.setVisible(kr),Hr()}),Br&&Br.addEventListener("click",()=>{(async()=>{let v=await $p();v&&(Hp(v.png,`${v.stem}.png`),Hp(v.pdf,`${v.stem}.pdf`))})()});let yi=null;h&&(yi=Ay({scene:h,canvas:n,getCamera:()=>B,controls:te,getRoot:()=>re,getClipPlanes:()=>Ns(),onLiveLength:v=>{bn&&(v?(bn.textContent=v,bn.classList.add("is-live")):(bn.textContent=Sl(),bn.classList.remove("is-live")))},onActiveChange:v=>{ln=!0,bn&&(bn.classList.toggle("is-active",v),bn.setAttribute("aria-pressed",v?"true":"false"),v||(bn.textContent=Sl(),bn.classList.remove("is-live")))}})),bn&&bn.addEventListener("click",()=>{yi&&yi.setActive(!yi.isActive())}),ge=()=>!!yi?.isActive();function Yp(){if(!re)return null;re.updateWorldMatrix(!0,!0);let v=Et().map(ae=>Ni(ae)),P=new zt;if(P.name="ARContent",re.traverse(ae=>{if(!ae.isMesh||!ae.visible||Fn(ae))return;let Te=Yx(ae,v);Te&&P.add(Te)}),!P.children.length)return null;P.updateMatrixWorld(!0);let O=gp(P),U=new zt;return U.name="ARExport",U.add(P),Qx(P,O),U.userData.arPlacement=O,U}async function Zp(){if(Ko||!re)return;Ko=!0;let v=qn?.textContent||"AR";qn&&(qn.disabled=!0,qn.textContent="\u2026");try{let P=Yp();if(!P)throw new Error("Nothing visible to export. Show at least one part.");let U=await new Vu().parseAsync(P,{quickLookCompatible:!0,includeAnchoringProperties:!0,ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}}}),ae=new Blob([U],{type:"model/vnd.usdz+zip"}),Te=URL.createObjectURL(ae),Ie=document.createElement("a");Ie.rel="ar",Ie.href=Te,Ie.download="view.usdz";let Ze=document.createElement("img");Ze.alt="AR",Ie.appendChild(Ze),document.body.appendChild(Ie),Ie.click(),Ie.remove(),setTimeout(()=>URL.revokeObjectURL(Te),6e4)}catch(P){pe(String(P?.message||P))}finally{Ko=!1,qn&&(qn.disabled=!1,qn.textContent=v)}}qn&&qn.addEventListener("click",()=>{Zp()});let Kp={scene:h,get camera(){return B},controls:te,parts:p,partOpacity:g,cuts:me,scenes:i,setPartOpacity:Ur,setCameraPreset:Or,applyScene:Ds,setHFov:Pe,toggleFovIso:rt,get projection(){return Z},get hFovDeg(){return V},setCutT:tn,removeCut:Us,frameIso:Nr,openArQuickLook:Zp,buildArExportScene:Yp,getPeelQuality:()=>jo};window.BlueprintsViewer=Kp;function Jp(){for(let v of g.values())if(v<1-1e-4)return!0;return!1}function jp(){for(let[v,P]of p){let O=g.get(v)??1;Ps(P,O,{edgeMode:x})}}let Qp=!1,ln=!0,ls=null,wl=jy(o),Ah=new ei,Rh=new $e,Tl=Jy({index:o,visibility:wl,t:Dt,openSheet(){let v=window.matchMedia("(min-width: 768px)").matches;D?.setDetent(v?"open":"partial")},onFrame:(v,P)=>{P?.move?T_(v):w_(v)},onVisibility:()=>R_(),actionsFor:()=>[],liveLines:v=>{let P=Le?.lastKnown(v.globalId);return P?Hy(P,Dt):[]}});function Al(v){let P=v;for(;P;){let O=P.userData?.bpElementKey||Ii(P.name||"").element;if(O){for(let U of Object.values(o.elements))if(U.id===O)return U}P=P.parent}return null}function em(v){return v?a.get(v)||[]:[]}function ar(v){if(!v)return[];let P=em(v.id);if(P.length)return P;let O=[];for(let U of Lr(o,v.globalId)){let ae=o.elements[U];ae&&ae!==v&&O.push(...em(ae.id))}return O}function Ch(v){let P=new Gt,O=new I;for(let U of v){let ae=U.geometry;if(!ae)continue;ae.boundingBox||ae.computeBoundingBox();let Te=ae.boundingBox;if(Te){U.updateWorldMatrix(!0,!1);for(let Ie of[Te.min.x,Te.max.x])for(let Ze of[Te.min.y,Te.max.y])for(let ft of[Te.min.z,Te.max.z])O.set(Ie,Ze,ft).applyMatrix4(U.matrixWorld),P.expandByPoint(O)}}return P}let v_=480,Oi=null;function b_(v){let P=Math.min(1,Math.max(0,v));return P<.5?4*P*P*P:1-(-2*P+2)**3/2}function M_(v){let P=v.getSize(ve),O=Math.max(P.x,P.y,P.z,.2),U=v.getCenter(new I),ae=B.position.clone().sub(te.target);ae.lengthSq()<1e-8?ae.set(.75,.55,.75):ae.normalize();let Te;if(B.isOrthographicCamera)Te=Math.max(B.position.distanceTo(te.target),O*1.4);else{let Ie=(B.fov||45)*Math.PI/180;Te=Math.max(O*.62/Math.max(Math.tan(Ie/2),.001),O*1.25)}return{center:U,position:U.clone().addScaledVector(ae,Te),span:O}}function S_(v){Oi={t0:performance.now(),fromPos:B.position.clone(),toPos:v.position,fromTarget:te.target.clone(),toTarget:v.center,span:v.span},ln=!0}function E_(v){if(!Oi)return;let P=Math.min(1,(v-Oi.t0)/v_),O=b_(P);B.position.lerpVectors(Oi.fromPos,Oi.toPos,O),te.target.lerpVectors(Oi.fromTarget,Oi.toTarget,O),B.isOrthographicCamera&&ye(Oi.span*.62,Oi.span*.62),S=!0,te.update(),le(),Wn(),ln=!0,P>=1&&(Oi=null,requestAnimationFrame(()=>{S=!1}))}function w_(v){let P=ar(o.elements[v]);P.length&&tm(P),ln=!0}function T_(v){let P=o.elements[v],O=ar(P);if(!O.length)return;let U=Ch(O);U.isEmpty()||(S_(M_(U)),tm(O),ln=!0)}function tm(v){ls&&nm();let P=[];for(let O of v){if(!O.isMesh||!O.material)continue;let U=Array.isArray(O.material)?O.material:[O.material],ae=U.map(Te=>{let Ie=Te.clone();return Ie.emissive?(Ie.emissive.setHex(16756768),Ie.emissiveIntensity=0):Ie.color&&(Ie.userData.bpPulseBase=Ie.color.getHex()),P.push(Ie),Ie});O.userData.bpPulseMaterial=U,O.material=ae.length===1?ae[0]:ae}ls={meshes:v,clones:P,t0:performance.now()}}function nm(){if(ls){for(let v of ls.meshes){let P=v.userData.bpPulseMaterial;P&&(v.material=P.length===1?P[0]:P),delete v.userData.bpPulseMaterial}for(let v of ls.clones)v.dispose?.();ls=null}}function A_(v){if(!ls)return;let P=(v-ls.t0)/900;if(P>=1){nm(),ln=!0;return}let O=Math.sin(Math.min(P,1)*Math.PI);for(let U of ls.clones)U.emissive?U.emissiveIntensity=.85*O:U.color&&U.userData.bpPulseBase!=null&&U.color.setHex(U.userData.bpPulseBase).offsetHSL(.08,.2,.18*O);ln=!0}function R_(){let v=new Set;for(let P of Object.values(o.elements))wl.isHidden(P.globalId)&&P.id&&v.add(P.id);for(let[P,O]of a){let U=v.has(P);for(let ae of O){ae.userData.bpIfcHidden=U;for(let Te of ae.children||[])(Te?.userData?.isEdgeOverlay||Te?.userData?.isSectionCap)&&(Te.visible=!U)}}for(let P of Se.bindings){let O=Ii(P.host?.name||"").element,U=!!(O&&v.has(O));P.host&&(P.host.userData.bpIfcHidden=U)}for(let[P,O]of p)Ps(O,g.get(P)??1,{edgeMode:x});ln=!0}function C_(v,P){let U=(Array.isArray(v.material)?v.material:[v.material]).map(ae=>{if(!ae)return ae;if(ae.userData.bpOwned)return P(ae);let Te=ae.clone();return Te.userData.bpOwned=!0,P(Te)});v.material=U.length===1?U[0]:U}function Rl(v,P){let O="restore"in P&&P.restore,U=!O&&!!P.on;qe.set(v.globalId,U),O?Ae.delete(v.globalId):Ae.set(v.globalId,P);let ae=O?1:Math.min(Math.max(P.level??1,0),1),Te=new Ke(O?0:P.color);U&&Te.lerp(new Ke(uh),.35*(1-ae));for(let Ie of ar(v))C_(Ie,Ze=>(Ze.color&&(Ze.userData.bpLightBase==null&&(Ze.userData.bpLightBase=Ze.color.getHex()),O?Ze.color.setHex(Ze.userData.bpLightBase):Ze.color.copy(Te)),Ze.emissive&&(U?(Ze.emissive.copy(Te),Ze.emissiveIntensity=.3+.35*ae):(Ze.emissive.setHex(0),Ze.emissiveIntensity=0)),Ze));ln=!0}function P_(v){let P=!qe.get(v.globalId);Rl(v,P?Ye:he)}function I_(){for(let[v,P]of[...Ae]){let O=o.elements[v];O&&Rl(O,P)}}function Cl(v){v?.ok||(console.warn("Home command failed",v),Nh=`${Dt("home.failed")}${v?.status?` (${v.status})`:""}${v?.error?`: ${v.error}`:""}`,Jo(),window.setTimeout(()=>{Nh="",Jo()},4e3))}function L_(v){if(Be(v)?.deviceType!=="ColorTemperatureLight"){P_(v);return}Le.command(v.globalId,{type:"toggle"}).then(Cl)}function D_(v,P){let O=ar(v);if(!P?.point||!O.length)return{dy:1,side:-1};let ae=Ch(O).getCenter(new I),Te=new I().setFromMatrixColumn(B.matrixWorld,0),Ie=P.point.clone().sub(ae);return{dy:Ie.y,side:Ie.dot(Te)}}let im=new Map;function N_(v){let P=im.get(v);return P||(P=Object.values(o.elements).filter(O=>O.type===v),im.set(v,P)),P}function O_(v,P){let O=P?.camera||B,U=new I().setFromMatrixColumn(O.matrixWorld,0),ae=[];for(let Te of N_(v)){if(wl.isHidden(Te.globalId))continue;let Ie=ar(Te).filter(nn=>{if(!Ir(nn))return!1;for(let Qt=nn;Qt;Qt=Qt.parent)if(!Qt.visible)return!1;return!0});if(!Ie.length)continue;let Ze=Ch(Ie);if(Ze.isEmpty())continue;let ft=new Set(Ie),Wt=nn=>{for(let Qt=nn;Qt;Qt=Qt.parent)if(ft.has(Qt))return!0;return Al(nn)===Te},gn=Ie[0],si=v==="IfcSwitchingDevice"?hy(Ze,hh(Te),U).map(nn=>nn.center):[Ze.getCenter(new I)];for(let nn of si)ae.push({element:Te,center:nn,group:Te.globalId,hit:{object:gn,point:nn},owns:Wt})}return ae}let Ph=new Map;function sm(v,P){Ih(v),Ph.set(v.globalId,performance.now()),Le.press(v.globalId,P).then(Cl)}function U_(v,P){if(Be(v)?.deviceType!=="GenericSwitch"||!Le.simulation()){Ih(v);return}sm(v,zy(v,D_(v,P)))}function F_(v){if(Be(v)?.deviceType!=="GenericSwitch"||!Le.simulation())return null;let O=hh(v),U=[];return O.forEach((ae,Te)=>{for(let Ie of["up","down"]){let Ze=Dt(Ie==="up"?"home.up":"home.down");U.push({id:`switch-${ae}-${Ie}`,labelKey:Ie==="up"?"home.up":"home.down",label:O.length>1?`${Te+1} ${Ze}`:Ze,run:()=>sm(v,{rocker:ae,position:Ie,kind:"short"})})}}),U}function B_(v){let P=Be(v);if(P?.deviceType!=="WindowCovering")return;let O=P.state?.windowCovering?.targetPositionLiftPercent100ths,U=O!=null&&O<5e3;Le.command(v.globalId,{type:U?"coverClose":"coverOpen"}).then(Cl)}function k_(v){return Be(v)?.deviceType!=="WindowCovering"?null:[["coverOpen","ui.open"],["coverClose","ui.close"],["coverStop","home.stop"]].map(([O,U])=>({id:O,labelKey:U,run:()=>Le.command(v.globalId,{type:O}).then(Cl)}))}function Ih(v){for(let P of ar(v)){if(P.userData.bpPressing)continue;P.userData.bpPressing=!0;let O=P.position.y;P.position.y=O-.004,window.setTimeout(()=>{P.position.y=O,P.userData.bpPressing=!1,ln=!0},160)}ln=!0}function z_(v){let P=!Ue.get(v.globalId);Ue.set(v.globalId,P);for(let O of ar(v)){O.userData.bpSlideOrigin||(O.userData.bpSlideOrigin=O.position.clone());let U=O.geometry;U&&!U.boundingBox&&U.computeBoundingBox();let ae=U?.boundingBox?U.boundingBox.max.x-U.boundingBox.min.x:.4;O.position.copy(O.userData.bpSlideOrigin),P&&(O.position.x+=ae*.8)}ln=!0}function H_(v){if(ge())return;let P=B;if(!P||!re)return;let O=n.getBoundingClientRect(),U=O.width||n.clientWidth||1,ae=O.height||n.clientHeight||1;Rh.x=(v.clientX-O.left)/U*2-1,Rh.y=-((v.clientY-O.top)/ae)*2+1,Ah.setFromCamera(Rh,P);let Te=Ah.intersectObject(re,!0).filter(Qt=>Ir(Qt.object)),Ie=re;for(;Ie.parent;)Ie=Ie.parent;let Ze={raycaster:Ah,now:performance.now(),camera:P,root:Ie,tap:{x:v.clientX-O.left,y:v.clientY-O.top},size:{w:U,h:ae}},ft=Se.taps.resolve(Te,Ze,Qt=>Ir(Qt.object));if(ft&&(ft.kind==="direct"||ft.kind==="extended")&&ft.hit?.object){let Qt=ft.hit.object,Qo=Array.isArray(ft.claim?.actions)?ft.claim.actions.slice():[],Oh=Qt.userData?.bpPart||Ii(Qt.name||"").part;Tl.openPopover(Al(Qt),Oh,Qo,v.clientX,v.clientY);return}let Wt=Te[0];if(!Wt){Tl.closePopover();return}let gn=Al(Wt.object),si=Wt.object.userData?.bpPart||Ii(Wt.object.name||"").part,nn=ft?.kind==="legacy"&&Array.isArray(ft.claim?.actions)?ft.claim.actions.slice():[];Tl.openPopover(gn,si,nn,v.clientX,v.clientY)}l=H_;let Lh=By({search:typeof location<"u"?location.search:"",storage:typeof localStorage<"u"?localStorage:null}),rm=Fy(o),Dh=Lh.mode,Nh="",cs=null;function V_(v){let P=o.elements[v.globalId];P&&v.deviceType==="ColorTemperatureLight"&&Rl(P,Rp(v))}function G_(){for(let v of[...qe.keys()]){let P=o.elements[v];P&&Rl(P,{restore:!0})}}function Jo(){if(!cs)return;let v=Le?Le.status():"off",P=v==="live"?Le.simulation()?"home.statusLive":"home.statusLiveNoSim":v==="connecting"?"home.statusConnecting":v==="unreachable"?"home.statusUnreachable":"home.statusOff";cs.textContent=Nh||Dt(P),cs.dataset.status=v,cs.title=v==="off"?"":Lh.baseUrl}function om(){if(!rm)return;let v=document.getElementById("section-home");if(!v){let U=document.getElementById("section-locale");if(!U?.parentNode)return;v=document.createElement("section"),v.className="sheet-section",v.id="section-home",U.parentNode.insertBefore(v,U)}v.replaceChildren();let P=document.createElement("h2");P.className="sheet-title",P.textContent=Dt("home.title");let O=document.createElement("div");O.className="seg",O.id="home-mode",O.setAttribute("role","group"),O.setAttribute("aria-label",Dt("home.title"));for(let[U,ae]of[["live","home.live"],["off","home.off"]]){let Te=document.createElement("button");Te.type="button",Te.dataset.homeMode=U,Te.textContent=Dt(ae),U===Dh&&Te.classList.add("is-active"),Te.addEventListener("click",()=>W_(U)),O.append(Te)}cs=document.createElement("p"),cs.className="home-status",cs.setAttribute("aria-live","polite"),cs.style.cssText="margin:0.5rem 0 0;font-size:0.76rem;line-height:1.35;color:var(--fg-secondary)",v.append(P,O,cs),Jo()}function W_(v){Dh=v,ky(typeof localStorage<"u"?localStorage:null,v),document.querySelectorAll("#home-mode button").forEach(P=>{P.classList.toggle("is-active",P.dataset.homeMode===v)}),Le&&(v==="live"?Le.start():(Le.stop(),G_()),Jo())}rm&&(Le=Vy({baseUrl:Lh.baseUrl,onStatus:()=>{Jo(),ln=!0},onDevice:v=>V_(v),onSwitch:v=>{if(v.event!=="initialPress")return;let P=o.elements[v.globalId],O=performance.now()-(Ph.get(v.globalId)??-1/0)<3e3;Ph.delete(v.globalId),P&&!O&&Ih(P)}}),om(),Dh==="live"&&Le.start(),window.blueprintsHome=Le),_p(()=>Tl.refresh());let am=null,lm=null,jo="fast",cm=null,Pl=!1;n.addEventListener("pointermove",()=>{yi?.isActive()&&(ln=!0)}),n.addEventListener("pointerup",()=>{yi?.isActive()&&(ln=!0)});function X_(){let v=B.view;return[B.position.x,B.position.y,B.position.z,B.quaternion.x,B.quaternion.y,B.quaternion.z,B.quaternion.w,B.zoom,B.near,B.far,B.fov||0,B.left,B.right,B.top,B.bottom,te.target.x,te.target.y,te.target.z,n.width,n.height,v&&v.enabled?1:0,v?v.offsetX:0,v?v.offsetY:0,v?v.fullWidth:0,v?v.fullHeight:0,Z==="ortho"?1:0]}function q_(){let v=X_(),P=am,O=!P||P.length!==v.length;if(!O&&P){for(let U=0;U<v.length;U++)if(v[U]!==P[U]){O=!0;break}}return O&&(am=v),O}function $_(){let v=[m,x,nh(),kr?"1":"0",String(f)],P=h?.background;P&&P.isColor&&v.push(P.getHexString());for(let[U,ae]of g)v.push(U,Number(ae).toFixed(3));for(let U of me)v.push(String(U.id),U.locked?"1":"0",Number(U.t).toFixed(4));let O=wl.hiddenIds();return v.push(O.length?O.slice().sort().join(","):"-"),v.join("|")}function Il(){if(Qe)return;let v=performance.now();Se.step(v)&&(ln=!0),A_(v),E_(v),p_(v),te.update(),re&&Wn(),Zo||(jt.copy(B.position),Jn.copy(te.target),Zo=!0);let P=B.position.distanceToSquared(jt)>1e-8||te.target.distanceToSquared(Jn)>1e-8;jt.copy(B.position),Jn.copy(te.target);let O=$_(),U=O!==lm,ae=q_();if(U&&(Pl=!0),jo=!Nt&&!P&&!U&&!G&&!or&&!Pl?"high":"fast",!ln&&!U&&!ae&&!(jo!==cm)&&!Pl){requestAnimationFrame(Il);return}ln=!1,lm=O,cm=jo,U||(Pl=!1),yi?.update(),Ge.update();let Ze=k.render(h,B,re,Jp,{quality:jo,batchKey:O,deferPrime:U||G});Qp&&!Ze&&jp(),Qp=Ze,requestAnimationFrame(Il)}return Il(),Kp}return ev(TR);})();
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
