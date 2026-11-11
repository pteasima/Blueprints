var BlueprintsViewerBundle=(()=>{var Ah=Object.defineProperty;var P_=Object.getOwnPropertyDescriptor;var I_=Object.getOwnPropertyNames;var L_=Object.prototype.hasOwnProperty;var D_=(n,e)=>{for(var t in e)Ah(n,t,{get:e[t],enumerable:!0})},N_=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of I_(e))!L_.call(n,s)&&s!==t&&Ah(n,s,{get:()=>e[s],enumerable:!(i=P_(e,s))||i.enumerable});return n};var O_=n=>N_(Ah({},"__esModule",{value:!0}),n);var aR={};D_(aR,{mountViewer:()=>oR});var Xs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},qs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$m=0,mf=1,Ym=2;var Na=1,Zm=2,vo=3,Kn=0,bn=1,Dt=2,si=0,Hi=1,gf=2,xf=3,yf=4,Dc=5;var Si=100,Km=101,Jm=102,jm=103,Qm=104,Oa=200,$s=201,eg=202,tg=203,Ua=204,bo=205,ng=206,Fa=207,ig=208,sg=209,rg=210,og=211,ag=212,lg=213,cg=214,cc=0,uc=1,hc=2,so=3,fc=4,dc=5,pc=6,mc=7,Nc=0,ug=1,hg=2,ri=0,_f=1,vf=2,bf=3,Mo=4,Mf=5,Sf=6,Ef=7,tf="attached",fg="detached",wf=300,gr=301,So=302,Oc=303,Uc=304,_i=1e3,ti=1001,ro=1002,Xt=1003,Fc=1004;var xr=1005;var qt=1006,Eo=1007;var oi=1008;var Ln=1009,Tf=1010,Af=1011,wo=1012,Bc=1013,Ei=1014,Hn=1015,Xn=1016,zc=1017,kc=1018,yr=1020,Rf=35902,Cf=35899,Pf=1021,If=1022,Mn=1023,ms=1026,ws=1027,Hc=1028,Vc=1029,Ys=1030,Gc=1031;var Wc=1033,Ba=33776,za=33777,ka=33778,Ha=33779,Xc=35840,qc=35841,$c=35842,Yc=35843,Zc=36196,Kc=37492,Jc=37496,jc=37488,Qc=37489,Va=37490,eu=37491,tu=37808,nu=37809,iu=37810,su=37811,ru=37812,ou=37813,au=37814,lu=37815,cu=37816,uu=37817,hu=37818,fu=37819,du=37820,pu=37821,mu=36492,gu=36494,xu=36495,yu=36283,_u=36284,Ga=36285,vu=36286;var ur=2300,hr=2301,ac=2302,nf=2303,sf=2400,rf=2401,of=2402,dg=2500;var Lf=0,Wa=1,To=2,pg=3200;var Xa=0,mg=1,wi="",At="srgb",zn="srgb-linear",oa="linear",Lt="srgb";var lc=7680;var gg=519,xg=512,yg=513,_g=514,Df=515,vg=516,bg=517,Nf=518,Of=519,Uf=35044;var Ff="300 es",ni=2e3,oo=2001;function U_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function F_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ao(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Mg(){let n=ao("canvas");return n.style.display="block",n}var tm={},lo=null;function aa(...n){let e="THREE."+n.shift();lo?lo("log",e,...n):console.log(e,...n)}function Sg(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function it(...n){n=Sg(n);let e="THREE."+n.shift();if(lo)lo("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function lt(...n){n=Sg(n);let e="THREE."+n.shift();if(lo)lo("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function cr(...n){let e=n.join(" ");e in tm||(tm[e]=!0,it(...n))}function Eg(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var wg={[cc]:cc,[hc]:pc,[fc]:fc,[so]:dc,[uc]:uc,[pc]:hc,[mc]:mc,[dc]:so},vi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nm=1234567,no=Math.PI/180,fr=180/Math.PI;function Vi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]).toLowerCase()}function ht(n,e,t){return Math.max(e,Math.min(t,n))}function Bf(n,e){return(n%e+e)%e}function B_(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function z_(n,e,t){return n!==e?(t-n)/(e-n):0}function ra(n,e,t){return(1-t)*n+t*e}function k_(n,e,t,i){return ra(n,e,1-Math.exp(-t*i))}function H_(n,e=1){return e-Math.abs(Bf(n,e*2)-e)}function V_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function G_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function W_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function X_(n,e){return n+Math.random()*(e-n)}function q_(n){return n*(.5-Math.random())}function $_(n){n!==void 0&&(nm=n);let e=nm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Y_(n){return n*no}function Z_(n){return n*fr}function K_(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function J_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function zf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function j_(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*p,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*p,a*c);break;case"ZYZ":n.set(l*p,l*d,a*u,a*c);break;default:it("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function bu(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function kf(n,e){if(e.constructor===Float32Array)return n;let t=bu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Hf(n,e){if(e.constructor===Float32Array)return n;let t=bu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Zs={DEG2RAD:no,RAD2DEG:fr,generateUUID:Vi,clamp:ht,euclideanModulo:Bf,mapLinear:B_,inverseLerp:z_,lerp:ra,damp:k_,pingpong:H_,smoothstep:V_,smootherstep:G_,randInt:W_,randFloat:X_,randFloatSpread:q_,seededRandom:$_,degToRad:Y_,radToDeg:Z_,isPowerOfTwo:K_,ceilPowerOfTwo:J_,floorPowerOfTwo:zf,setQuaternionFromProperEuler:j_,normalize:Hf,denormalize:kf},Ze=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$t=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(h!==x||l!==f||c!==d||u!==p){let m=l*f+c*d+u*p+h*x;m<0&&(f=-f,d=-d,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let b=Math.acos(m),M=Math.sin(b);g=Math.sin(g*b)/M,a=Math.sin(a*b)/M,l=l*g+f*a,c=c*g+d*a,u=u*g+p*a,h=h*g+x*a}else{l=l*g+f*a,c=c*g+d*a,u=u*g+p*a,h=h*g+x*a;let b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+u*h+l*d-c*f,e[t+1]=l*p+u*f+c*h-a*d,e[t+2]=c*p+u*d+a*f-l*h,e[t+3]=u*p-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"YZX":this._x=f*u*h+c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h-f*d*p;break;case"XZY":this._x=f*u*h-c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h+f*d*p;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){let d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(im.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(im.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Rh.copy(this).projectOnVector(e),this.sub(Rh)}reflect(e){return this.sub(Rh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Rh=new I,im=new $t,ut=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],p=i[8],x=s[0],m=s[3],g=s[6],b=s[1],M=s[4],y=s[7],S=s[2],T=s[5],_=s[8];return r[0]=o*x+a*b+l*S,r[3]=o*m+a*M+l*T,r[6]=o*g+a*y+l*_,r[1]=c*x+u*b+h*S,r[4]=c*m+u*M+h*T,r[7]=c*g+u*y+h*_,r[2]=f*x+d*b+p*S,r[5]=f*m+d*M+p*T,r[8]=f*g+d*y+p*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,p=t*h+i*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=h*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return cr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ch.makeScale(e,t)),this}rotate(e){return cr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ch.makeRotation(-e)),this}translate(e,t){return cr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ch.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ch=new ut,sm=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rm=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Q_(){let n={enabled:!0,workingColorSpace:zn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Lt&&(s.r=ps(s.r),s.g=ps(s.g),s.b=ps(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Lt&&(s.r=io(s.r),s.g=io(s.g),s.b=io(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===wi?oa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[zn]:{primaries:e,whitePoint:i,transfer:oa,toXYZ:sm,fromXYZ:rm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:e,whitePoint:i,transfer:Lt,toXYZ:sm,fromXYZ:rm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:At}}}),n}var yt=Q_();function ps(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function io(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ur,gc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ur===void 0&&(Ur=ao("canvas")),Ur.width=e.width,Ur.height=e.height;let s=Ur.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ur}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ao("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ps(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ps(t[i]/255)*255):t[i]=ps(t[i]);return{data:t,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ev=0,co=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=Vi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ph(s[o].image)):r.push(Ph(s[o]))}else r=Ph(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Ph(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}var tv=0,Ih=new I,an=class n extends vi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ti,s=ti,r=qt,o=oi,a=Mn,l=Ln,c=n.DEFAULT_ANISOTROPY,u=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=Vi(),this.name="",this.source=new co(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ih).x}get height(){return this.source.getSize(Ih).y}get depth(){return this.source.getSize(Ih).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){it(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){it(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _i:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _i:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=wf;an.DEFAULT_ANISOTROPY=1;var bt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,y=(d+1)/2,S=(g+1)/2,T=(u+f)/4,_=(h+x)/4,w=(p+m)/4;return M>y&&M>S?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=T/i,r=_/i):y>S?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=T/s,r=w/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=_/r,s=w/r),this.set(i,s,r,t),this}let b=Math.sqrt((m-p)*(m-p)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-p)/b,this.y=(h-x)/b,this.z=(f-u)/b,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xc=class extends vi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new an({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new co(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},tn=class extends xc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},la=class extends an{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var yc=class extends an{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ot=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,l,c,u,h,f,d,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,d,p,x,m)}set(e,t,i,s,r,o,a,l,c,u,h,f,d,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=f,g[3]=d,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Fr.setFromMatrixColumn(e,0).length(),r=1/Fr.setFromMatrixColumn(e,1).length(),o=1/Fr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,d=o*h,p=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+p*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,p=c*u,x=c*h;t[0]=f+x*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-p,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,p=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,p=a*u,x=a*h;t[0]=l*u,t[4]=p*c-d,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=p*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+p,t[10]=f-x*h}else if(e.order==="XZY"){let f=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=d*h-p,t[2]=p*h-d,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nv,e,iv)}lookAt(e,t,i){let s=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Ds.crossVectors(i,Yn),Ds.lengthSq()===0&&(Math.abs(i.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Ds.crossVectors(i,Yn)),Ds.normalize(),Cl.crossVectors(Yn,Ds),s[0]=Ds.x,s[4]=Cl.x,s[8]=Yn.x,s[1]=Ds.y,s[5]=Cl.y,s[9]=Yn.y,s[2]=Ds.z,s[6]=Cl.z,s[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],p=i[2],x=i[6],m=i[10],g=i[14],b=i[3],M=i[7],y=i[11],S=i[15],T=s[0],_=s[4],w=s[8],D=s[12],L=s[1],z=s[5],W=s[9],k=s[13],N=s[2],G=s[6],j=s[10],q=s[14],_e=s[3],Z=s[7],V=s[11],ee=s[15];return r[0]=o*T+a*L+l*N+c*_e,r[4]=o*_+a*z+l*G+c*Z,r[8]=o*w+a*W+l*j+c*V,r[12]=o*D+a*k+l*q+c*ee,r[1]=u*T+h*L+f*N+d*_e,r[5]=u*_+h*z+f*G+d*Z,r[9]=u*w+h*W+f*j+d*V,r[13]=u*D+h*k+f*q+d*ee,r[2]=p*T+x*L+m*N+g*_e,r[6]=p*_+x*z+m*G+g*Z,r[10]=p*w+x*W+m*j+g*V,r[14]=p*D+x*k+m*q+g*ee,r[3]=b*T+M*L+y*N+S*_e,r[7]=b*_+M*z+y*G+S*Z,r[11]=b*w+M*W+y*j+S*V,r[15]=b*D+M*k+y*q+S*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],p=e[3],x=e[7],m=e[11],g=e[15],b=l*d-c*f,M=a*d-c*h,y=a*f-l*h,S=o*d-c*u,T=o*f-l*u,_=o*h-a*u;return t*(x*b-m*M+g*y)-i*(p*b-m*S+g*T)+s*(p*M-x*S+g*_)-r*(p*y-x*T+m*_)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],p=e[12],x=e[13],m=e[14],g=e[15],b=t*a-i*o,M=t*l-s*o,y=t*c-r*o,S=i*l-s*a,T=i*c-r*a,_=s*c-r*l,w=u*x-h*p,D=u*m-f*p,L=u*g-d*p,z=h*m-f*x,W=h*g-d*x,k=f*g-d*m,N=b*k-M*W+y*z+S*L-T*D+_*w;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/N;return e[0]=(a*k-l*W+c*z)*G,e[1]=(s*W-i*k-r*z)*G,e[2]=(x*_-m*T+g*S)*G,e[3]=(f*T-h*_-d*S)*G,e[4]=(l*L-o*k-c*D)*G,e[5]=(t*k-s*L+r*D)*G,e[6]=(m*y-p*_-g*M)*G,e[7]=(u*_-f*y+d*M)*G,e[8]=(o*W-a*L+c*w)*G,e[9]=(i*L-t*W-r*w)*G,e[10]=(p*T-x*y+g*b)*G,e[11]=(h*y-u*T-d*b)*G,e[12]=(a*D-o*z-l*w)*G,e[13]=(t*z-i*D+s*w)*G,e[14]=(x*M-p*S-m*b)*G,e[15]=(u*S-h*M+f*b)*G,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,p=r*h,x=o*u,m=o*h,g=a*h,b=l*c,M=l*u,y=l*h,S=i.x,T=i.y,_=i.z;return s[0]=(1-(x+g))*S,s[1]=(d+y)*S,s[2]=(p-M)*S,s[3]=0,s[4]=(d-y)*T,s[5]=(1-(f+g))*T,s[6]=(m+b)*T,s[7]=0,s[8]=(p+M)*_,s[9]=(m-b)*_,s[10]=(1-(f+x))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Fr.set(s[0],s[1],s[2]).length(),a=Fr.set(s[4],s[5],s[6]).length(),l=Fr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),gi.copy(this);let c=1/o,u=1/a,h=1/l;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=u,gi.elements[5]*=u,gi.elements[6]*=u,gi.elements[8]*=h,gi.elements[9]*=h,gi.elements[10]*=h,t.setFromRotationMatrix(gi),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=ni,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===ni)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===oo)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ni,l=!1){let c=this.elements,u=2/(t-e),h=2/(i-s),f=-(t+e)/(t-e),d=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===ni)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===oo)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Fr=new I,gi=new ot,nv=new I(0,0,0),iv=new I(1,1,1),Ds=new I,Cl=new I,Yn=new I,om=new ot,am=new $t,Oi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return om.makeRotationFromQuaternion(e),this.setFromRotationMatrix(om,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return am.setFromEuler(this),this.setFromQuaternion(am,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Oi.DEFAULT_ORDER="XYZ";var uo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},sv=0,lm=new I,Br=new $t,ls=new ot,Pl=new I,$o=new I,rv=new I,ov=new $t,cm=new I(1,0,0),um=new I(0,1,0),hm=new I(0,0,1),fm={type:"added"},av={type:"removed"},zr={type:"childadded",child:null},Lh={type:"childremoved",child:null},Vt=class n extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sv++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new Oi,i=new $t,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new ut}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.multiply(Br),this}rotateOnWorldAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.premultiply(Br),this}rotateX(e){return this.rotateOnAxis(cm,e)}rotateY(e){return this.rotateOnAxis(um,e)}rotateZ(e){return this.rotateOnAxis(hm,e)}translateOnAxis(e,t){return lm.copy(e).applyQuaternion(this.quaternion),this.position.add(lm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cm,e)}translateY(e){return this.translateOnAxis(um,e)}translateZ(e){return this.translateOnAxis(hm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ls.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Pl.copy(e):Pl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ls.lookAt($o,Pl,this.up):ls.lookAt(Pl,$o,this.up),this.quaternion.setFromRotationMatrix(ls),s&&(ls.extractRotation(s.matrixWorld),Br.setFromRotationMatrix(ls),this.quaternion.premultiply(Br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fm),zr.child=e,this.dispatchEvent(zr),zr.child=null):lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(av),Lh.child=e,this.dispatchEvent(Lh),Lh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ls.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ls.multiply(e.parent.matrixWorld)),e.applyMatrix4(ls),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fm),zr.child=e,this.dispatchEvent(zr),zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,e,rv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,ov,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Vt.DEFAULT_UP=new I(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var kt=class extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},lv={type:"move"},ho=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new kt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Tg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ns={h:0,s:0,l:0},Il={h:0,s:0,l:0};function Dh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ke=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=yt.workingColorSpace){return this.r=e,this.g=t,this.b=i,yt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=yt.workingColorSpace){if(e=Bf(e,1),t=ht(t,0,1),i=ht(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Dh(o,r,e+1/3),this.g=Dh(o,r,e),this.b=Dh(o,r,e-1/3)}return yt.colorSpaceToWorking(this,s),this}setStyle(e,t=At){function i(r){r!==void 0&&parseFloat(r)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:it("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let i=Tg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}copyLinearToSRGB(e){return this.r=io(e.r),this.g=io(e.g),this.b=io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return yt.workingToColorSpace(Rn.copy(this),e),Math.round(ht(Rn.r*255,0,255))*65536+Math.round(ht(Rn.g*255,0,255))*256+Math.round(ht(Rn.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(Rn.copy(this),t);let i=Rn.r,s=Rn.g,r=Rn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(Rn.copy(this),t),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=At){yt.workingToColorSpace(Rn.copy(this),e);let t=Rn.r,i=Rn.g,s=Rn.b;return e!==At?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ns),this.setHSL(Ns.h+e,Ns.s+t,Ns.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ns),e.getHSL(Il);let i=ra(Ns.h,Il.h,t),s=ra(Ns.s,Il.s,t),r=ra(Ns.l,Il.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rn=new Ke;Ke.NAMES=Tg;var kn=class extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},xi=new I,cs=new I,Nh=new I,us=new I,kr=new I,Hr=new I,dm=new I,Oh=new I,Uh=new I,Fh=new I,Bh=new bt,zh=new bt,kh=new bt,Di=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),xi.subVectors(e,t),s.cross(xi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){xi.subVectors(s,t),cs.subVectors(i,t),Nh.subVectors(e,t);let o=xi.dot(xi),a=xi.dot(cs),l=xi.dot(Nh),c=cs.dot(cs),u=cs.dot(Nh),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,p=(o*u-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,us)===null?!1:us.x>=0&&us.y>=0&&us.x+us.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,us)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,us.x),l.addScaledVector(o,us.y),l.addScaledVector(a,us.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Bh.setScalar(0),zh.setScalar(0),kh.setScalar(0),Bh.fromBufferAttribute(e,t),zh.fromBufferAttribute(e,i),kh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Bh,r.x),o.addScaledVector(zh,r.y),o.addScaledVector(kh,r.z),o}static isFrontFacing(e,t,i,s){return xi.subVectors(i,t),cs.subVectors(e,t),xi.cross(cs).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),cs.subVectors(this.a,this.b),xi.cross(cs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;kr.subVectors(s,i),Hr.subVectors(r,i),Oh.subVectors(e,i);let l=kr.dot(Oh),c=Hr.dot(Oh);if(l<=0&&c<=0)return t.copy(i);Uh.subVectors(e,s);let u=kr.dot(Uh),h=Hr.dot(Uh);if(u>=0&&h<=u)return t.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(i).addScaledVector(kr,o);Fh.subVectors(e,r);let d=kr.dot(Fh),p=Hr.dot(Fh);if(p>=0&&d<=p)return t.copy(r);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Hr,a);let m=u*p-d*h;if(m<=0&&h-u>=0&&d-p>=0)return dm.subVectors(r,s),a=(h-u)/(h-u+(d-p)),t.copy(s).addScaledVector(dm,a);let g=1/(m+x+f);return o=x*g,a=f*g,t.copy(i).addScaledVector(kr,o).addScaledVector(Hr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Wt=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,yi):yi.fromBufferAttribute(r,o),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ll.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ll.copy(i.boundingBox)),Ll.applyMatrix4(e.matrixWorld),this.union(Ll)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yo),Dl.subVectors(this.max,Yo),Vr.subVectors(e.a,Yo),Gr.subVectors(e.b,Yo),Wr.subVectors(e.c,Yo),Os.subVectors(Gr,Vr),Us.subVectors(Wr,Gr),rr.subVectors(Vr,Wr);let t=[0,-Os.z,Os.y,0,-Us.z,Us.y,0,-rr.z,rr.y,Os.z,0,-Os.x,Us.z,0,-Us.x,rr.z,0,-rr.x,-Os.y,Os.x,0,-Us.y,Us.x,0,-rr.y,rr.x,0];return!Hh(t,Vr,Gr,Wr,Dl)||(t=[1,0,0,0,1,0,0,0,1],!Hh(t,Vr,Gr,Wr,Dl))?!1:(Nl.crossVectors(Os,Us),t=[Nl.x,Nl.y,Nl.z],Hh(t,Vr,Gr,Wr,Dl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},hs=[new I,new I,new I,new I,new I,new I,new I,new I],yi=new I,Ll=new Wt,Vr=new I,Gr=new I,Wr=new I,Os=new I,Us=new I,rr=new I,Yo=new I,Dl=new I,Nl=new I,or=new I;function Hh(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){or.fromArray(n,r);let a=s.x*Math.abs(or.x)+s.y*Math.abs(or.y)+s.z*Math.abs(or.z),l=e.dot(or),c=t.dot(or),u=i.dot(or);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var en=new I,Ol=new Ze,cv=0,Bt=class extends vi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Uf,this.updateRanges=[],this.gpuType=Hn,this.version=0,this._normalizationScale=e!==void 0?bu(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ol.fromBufferAttribute(this,t),Ol.applyMatrix3(e),this.setXY(t,Ol.x,Ol.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):kf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Hf(e,this.array)}};var ca=class extends Bt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ua=class extends Bt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ht=class extends Bt{constructor(e,t,i){super(new Float32Array(e),t,i)}},uv=new Wt,Zo=new I,Vh=new I,gn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):uv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zo.subVectors(e,this.center);let t=Zo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Zo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zo.copy(e.center).add(Vh)),this.expandByPoint(Zo.copy(e.center).sub(Vh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},hv=0,ei=new ot,Gh=new Vt,Xr=new I,Zn=new Wt,Ko=new Wt,pn=new I,Ot=class n extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(U_(e)?ua:ca)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ut().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,i){return ei.makeTranslation(e,t,i),this.applyMatrix4(ei),this}scale(e,t,i){return ei.makeScale(e,t,i),this.applyMatrix4(ei),this}lookAt(e){return Gh.lookAt(e),Gh.updateMatrix(),this.applyMatrix4(Gh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ht(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Zn.setFromBufferAttribute(r),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ko.setFromBufferAttribute(a),this.morphTargetsRelative?(pn.addVectors(Zn.min,Ko.min),Zn.expandByPoint(pn),pn.addVectors(Zn.max,Ko.max),Zn.expandByPoint(pn)):(Zn.expandByPoint(Ko.min),Zn.expandByPoint(Ko.max))}Zn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)pn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(pn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)pn.fromBufferAttribute(a,c),l&&(Xr.fromBufferAttribute(e,c),pn.add(Xr)),s=Math.max(s,i.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Bt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let D=0;D<i.count;D++)a[D]=new I,l[D]=new I;let u=new I,h=new I,f=new I,d=new Ze,p=new Ze,x=new Ze,m=new I,g=new I;function b(D,L,z){c[D]=c[L]=c[z]=1,u.fromBufferAttribute(i,D),h.fromBufferAttribute(i,L),f.fromBufferAttribute(i,z),d.fromBufferAttribute(r,D),p.fromBufferAttribute(r,L),x.fromBufferAttribute(r,z),h.sub(u),f.sub(u),p.sub(d),x.sub(d);let W=1/(p.x*x.y-x.x*p.y);isFinite(W)&&(m.copy(h).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(W),g.copy(f).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(W),a[D].add(m),a[L].add(m),a[z].add(m),l[D].add(g),l[L].add(g),l[z].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let D=0,L=M.length;D<L;++D){let z=M[D],W=z.start,k=z.count;for(let N=W,G=W+k;N<G;N+=3)b(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let y=new I,S=new I,T=new I,_=new I;function w(D){T.fromBufferAttribute(s,D),_.copy(T);let L=a[D];y.copy(L),y.sub(T.multiplyScalar(T.dot(L))).normalize(),S.crossVectors(_,L);let W=S.dot(l[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,W)}for(let D=0,L=i.count;D<L;++D)c[D]&&w(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)pn.fromBufferAttribute(e,t),pn.normalize(),e.setXYZ(t,pn.x,pn.y,pn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let g=0;g<u;g++)f[p++]=c[d++]}return new Bt(f,u,h)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},zs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Uf,this.updateRanges=[],this.version=0,this.uuid=Vi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=pm(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=pm(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function pm(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=Vi()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var Bn=new I,Cn=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?bu(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Bn.fromBufferAttribute(this,t),Bn.applyMatrix4(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bn.fromBufferAttribute(this,t),Bn.applyNormalMatrix(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bn.fromBufferAttribute(this,t),Bn.transformDirection(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){aa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){aa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):kf(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Hf(e,this.data.array)}},Wh=new I,fv=new I,dv=new ut,mn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Wh.subVectors(i,t).cross(fv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Wh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||dv.getNormalMatrix(e),s=this.coplanarPoint(Wh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},pv=0,Pn=class extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=Hi,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ua,this.blendDst=bo,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lc,this.stencilZFail=lc,this.stencilZPass=lc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){it(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){it(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new mn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ze().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ze().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},fo=class extends Pn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},qr,Jo=new I,$r=new I,Yr=new I,Zr=new Ze,jo=new Ze,Ag=new ot,Ul=new I,Qo=new I,Fl=new I,mm=new Ze,Xh=new Ze,gm=new Ze,ha=class extends Vt{constructor(e=new fo){if(super(),this.isSprite=!0,this.type="Sprite",qr===void 0){qr=new Ot;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new zs(t,5);qr.setIndex([0,1,2,0,2,3]),qr.setAttribute("position",new Cn(i,3,0,!1)),qr.setAttribute("uv",new Cn(i,2,3,!1))}this.geometry=qr,this.material=e,this.center=new Ze(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&lt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$r.setFromMatrixScale(this.matrixWorld),Ag.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Yr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$r.multiplyScalar(-Yr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Bl(Ul.set(-.5,-.5,0),Yr,o,$r,s,r),Bl(Qo.set(.5,-.5,0),Yr,o,$r,s,r),Bl(Fl.set(.5,.5,0),Yr,o,$r,s,r),mm.set(0,0),Xh.set(1,0),gm.set(1,1);let a=e.ray.intersectTriangle(Ul,Qo,Fl,!1,Jo);if(a===null&&(Bl(Qo.set(-.5,.5,0),Yr,o,$r,s,r),Xh.set(0,1),a=e.ray.intersectTriangle(Ul,Fl,Qo,!1,Jo),a===null))return;let l=e.ray.origin.distanceTo(Jo);l<e.near||l>e.far||t.push({distance:l,point:Jo.clone(),uv:Di.getInterpolation(Jo,Ul,Qo,Fl,mm,Xh,gm,new Ze),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Bl(n,e,t,i,s,r){Zr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(jo.x=r*Zr.x-s*Zr.y,jo.y=s*Zr.x+r*Zr.y):jo.copy(Zr),n.copy(e),n.x+=jo.x,n.y+=jo.y,n.applyMatrix4(Ag)}var fs=new I,qh=new I,zl=new I,kl=new I,Ui=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=fs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fs.copy(this.origin).addScaledVector(this.direction,t),fs.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){qh.copy(e).add(t).multiplyScalar(.5),zl.copy(t).sub(e).normalize(),kl.copy(this.origin).sub(qh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(zl),a=kl.dot(this.direction),l=-kl.dot(zl),c=kl.lengthSq(),u=Math.abs(1-o*o),h,f,d,p;if(u>0)if(h=o*l-a,f=o*a-l,p=r*u,h>=0)if(f>=-p)if(f<=p){let x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-p?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=p?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(qh).addScaledVector(zl,f),d}intersectSphere(e,t){if(e.radius<0)return null;fs.subVectors(e.center,this.origin);let i=fs.dot(this.direction),s=fs.dot(fs)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,fs)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=e.x-o.x,f=e.y-o.y,d=e.z-o.z,p=t.x-o.x,x=t.y-o.y,m=t.z-o.z,g=i.x-o.x,b=i.y-o.y,M=i.z-o.z,y=Math.abs(l),S=Math.abs(c),T=Math.abs(u),_,w,D,L,z,W,k,N,G,j,q,_e;if(y>=S&&y>=T?(D=l,W=h,G=p,_e=g,l>=0?(_=c,w=u,L=f,z=d,k=x,N=m,j=b,q=M):(_=u,w=c,L=d,z=f,k=m,N=x,j=M,q=b)):S>=T?(D=c,W=f,G=x,_e=b,c>=0?(_=u,w=l,L=d,z=h,k=m,N=p,j=M,q=g):(_=l,w=u,L=h,z=d,k=p,N=m,j=g,q=M)):(D=u,W=d,G=m,_e=M,u>=0?(_=l,w=c,L=h,z=f,k=p,N=x,j=g,q=b):(_=c,w=l,L=f,z=h,k=x,N=p,j=b,q=g)),D===0)return null;let Z=_/D,V=w/D,ee=1/D,be=L-Z*W,Re=z-V*W,K=k-Z*G,ce=N-V*G,B=j-Z*_e,ne=q-V*_e,ge=B*ce-ne*K,we=be*ne-Re*B,Ye=K*Re-ce*be;if(s){if(ge<0||we<0||Ye<0)return null}else if((ge<0||we<0||Ye<0)&&(ge>0||we>0||Ye>0))return null;let Fe=ge+we+Ye;if(Fe===0)return null;let Xe=ee*(ge*W+we*G+Ye*_e);return(Fe>0?Xe<0:Xe>0)?null:this.at(Xe/Fe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nn=class extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=Nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},xm=new ot,ar=new Ui,Hl=new gn,ym=new I,Vl=new I,Gl=new I,Wl=new I,$h=new I,Xl=new I,_m=new I,ql=new I,ft=class extends Vt{constructor(e=new Ot,t=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Xl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&($h.fromBufferAttribute(h,e),o?Xl.addScaledVector($h,u):Xl.addScaledVector($h.sub(t),u))}t.add(Xl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hl.copy(i.boundingSphere),Hl.applyMatrix4(r),ar.copy(e.ray).recast(e.near),!(Hl.containsPoint(ar.origin)===!1&&(ar.intersectSphere(Hl,ym)===null||ar.origin.distanceToSquared(ym)>(e.far-e.near)**2))&&(xm.copy(r).invert(),ar.copy(e.ray).applyMatrix4(xm),!(i.boundingBox!==null&&ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ar)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],b=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=b,S=M;y<S;y+=3){let T=a.getX(y),_=a.getX(y+1),w=a.getX(y+2);s=$l(this,g,e,i,c,u,h,T,_,w),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){let b=a.getX(m),M=a.getX(m+1),y=a.getX(m+2);s=$l(this,o,e,i,c,u,h,b,M,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],b=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=b,S=M;y<S;y+=3){let T=y,_=y+1,w=y+2;s=$l(this,g,e,i,c,u,h,T,_,w),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){let b=m,M=m+1,y=m+2;s=$l(this,o,e,i,c,u,h,b,M,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function mv(n,e,t,i,s,r,o,a){let l;if(e.side===bn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Kn,a),l===null)return null;ql.copy(a),ql.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ql);return c<t.near||c>t.far?null:{distance:c,point:ql.clone(),object:n}}function $l(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Vl),n.getVertexPosition(l,Gl),n.getVertexPosition(c,Wl);let u=mv(n,e,t,i,Vl,Gl,Wl,_m);if(u){let h=new I;Di.getBarycoord(_m,Vl,Gl,Wl,h),s&&(u.uv=Di.getInterpolatedAttribute(s,a,l,c,h,new Ze)),r&&(u.uv1=Di.getInterpolatedAttribute(r,a,l,c,h,new Ze)),o&&(u.normal=Di.getInterpolatedAttribute(o,a,l,c,h,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new I,materialIndex:0};Di.getNormal(Vl,Gl,Wl,f.normal),u.face=f,u.barycoord=h}return u}var ea=new bt,vm=new bt,bm=new bt,gv=new bt,Mm=new ot,Yl=new I,Yh=new gn,Sm=new ot,Zh=new Ui,fa=class extends ft{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=tf,this.bindMatrix=new ot,this.bindMatrixInverse=new ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Wt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Yl),this.boundingBox.expandByPoint(Yl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Yl),this.boundingSphere.expandByPoint(Yl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yh.copy(this.boundingSphere),Yh.applyMatrix4(s),e.ray.intersectsSphere(Yh)!==!1&&(Sm.copy(s).invert(),Zh.copy(e.ray).applyMatrix4(Sm),!(this.boundingBox!==null&&Zh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Zh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new bt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===tf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===fg?this.bindMatrixInverse.copy(this.bindMatrix).invert():it("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;vm.fromBufferAttribute(s.attributes.skinIndex,e),bm.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(ea.copy(t),t.set(0,0,0,0)):(ea.set(t.x,t.y,t.z,1),t.set(0,0,0)),ea.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=bm.getComponent(r);if(o!==0){let a=vm.getComponent(r);Mm.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(gv.copy(ea).applyMatrix4(Mm),o)}}return t.isVector4&&(t.w=ea.w),t.applyMatrix4(this.bindMatrixInverse)}},po=class extends Vt{constructor(){super(),this.isBone=!0,this.type="Bone"}},mo=class extends an{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Xt,u=Xt,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Em=new ot,xv=new ot,da=class n{constructor(e=[],t=[]){this.uuid=Vi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){it("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new ot)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new ot;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:xv;Em.multiplyMatrices(a,t[r]),Em.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new mo(t,e,e,Mn,Hn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(it("Skeleton: No bone found with UUID:",r),o=new po),this.bones.push(o),this.boneInverses.push(new ot().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}},gs=class extends Bt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Kr=new ot,wm=new ot,Zl=[],Tm=new Wt,yv=new ot,ta=new ft,na=new gn,dr=class extends ft{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new gs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,yv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Kr),Tm.copy(e.boundingBox).applyMatrix4(Kr),this.boundingBox.union(Tm)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Kr),na.copy(e.boundingSphere).applyMatrix4(Kr),this.boundingSphere.union(na)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(ta.geometry=this.geometry,ta.material=this.material,ta.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),na.copy(this.boundingSphere),na.applyMatrix4(i),e.ray.intersectsSphere(na)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Kr),wm.multiplyMatrices(i,Kr),ta.matrixWorld=wm,ta.raycast(e,Zl);for(let o=0,a=Zl.length;o<a;o++){let l=Zl[o];l.instanceId=r,l.object=this,t.push(l)}Zl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new gs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new mo(new Float32Array(s*this.count),s,this.count,Hc,Hn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},lr=new gn,_v=new Ze(.5,.5),Kl=new I,ks=class{constructor(e=new mn,t=new mn,i=new mn,s=new mn,r=new mn,o=new mn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ni,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],p=r[8],x=r[9],m=r[10],g=r[11],b=r[12],M=r[13],y=r[14],S=r[15];if(s[0].setComponents(c-o,d-u,g-p,S-b).normalize(),s[1].setComponents(c+o,d+u,g+p,S+b).normalize(),s[2].setComponents(c+a,d+h,g+x,S+M).normalize(),s[3].setComponents(c-a,d-h,g-x,S-M).normalize(),i)s[4].setComponents(l,f,m,y).normalize(),s[5].setComponents(c-l,d-f,g-m,S-y).normalize();else if(s[4].setComponents(c-l,d-f,g-m,S-y).normalize(),t===ni)s[5].setComponents(c+l,d+f,g+m,S+y).normalize();else if(t===oo)s[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){lr.center.set(0,0,0);let t=_v.distanceTo(e.center);return lr.radius=.7071067811865476+t,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Kl.x=s.normal.x>0?e.max.x:e.min.x,Kl.y=s.normal.y>0?e.max.y:e.min.y,Kl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Kl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Am=new ot,_c=class n{constructor(){this.coordinateSystem=ni,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Am.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new ks),i[s].setFromProjectionMatrix(Am,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ks),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var xs=class extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},vc=new I,bc=new I,Rm=new ot,ia=new Ui,Jl=new gn,Kh=new I,Cm=new I,Fi=class extends Vt{constructor(e=new Ot,t=new xs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)vc.fromBufferAttribute(t,s-1),bc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=vc.distanceTo(bc);e.setAttribute("lineDistance",new Ht(i,1))}else it("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jl.copy(i.boundingSphere),Jl.applyMatrix4(s),Jl.radius+=r,e.ray.intersectsSphere(Jl)===!1)return;Rm.copy(s).invert(),ia.copy(e.ray).applyMatrix4(Rm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=d,m=p-1;x<m;x+=c){let g=u.getX(x),b=u.getX(x+1),M=jl(this,e,ia,l,g,b,x);M&&t.push(M)}if(this.isLineLoop){let x=u.getX(p-1),m=u.getX(d),g=jl(this,e,ia,l,x,m,p-1);g&&t.push(g)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=d,m=p-1;x<m;x+=c){let g=jl(this,e,ia,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=jl(this,e,ia,l,p-1,d,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function jl(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(vc.fromBufferAttribute(a,s),bc.fromBufferAttribute(a,r),t.distanceSqToSegment(vc,bc,Kh,Cm)>i)return;Kh.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Kh);if(!(c<e.near||c>e.far))return{distance:c,point:Cm.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Pm=new I,Im=new I,pa=class extends Fi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Pm.fromBufferAttribute(t,s),Im.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Pm.distanceTo(Im);e.setAttribute("lineDistance",new Ht(i,1))}else it("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ma=class extends Fi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},go=class extends Pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Lm=new ot,af=new Ui,Ql=new gn,ec=new I,ga=class extends Vt{constructor(e=new Ot,t=new go){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ql.copy(i.boundingSphere),Ql.applyMatrix4(s),Ql.radius+=r,e.ray.intersectsSphere(Ql)===!1)return;Lm.copy(s).invert(),af.copy(e.ray).applyMatrix4(Lm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,x=d;p<x;p++){let m=c.getX(p);ec.fromBufferAttribute(h,m),Dm(ec,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let p=f,x=d;p<x;p++)ec.fromBufferAttribute(h,p),Dm(ec,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Dm(n,e,t,i,s,r,o){let a=af.distanceSqToPoint(n);if(a<t){let l=new I;af.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var xa=class extends an{constructor(e=[],t=gr,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ys=class extends an{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var _s=class extends an{constructor(e,t,i=Ei,s,r,o,a=Xt,l=Xt,c,u=ms,h=1){if(u!==ms&&u!==ws)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new co(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ya=class extends _s{constructor(e,t=Ei,i=gr,s,r,o=Xt,a=Xt,l,c=ms){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},_a=class extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Bi=class n extends Ot{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(u,3)),this.setAttribute("uv",new Ht(h,2));function p(x,m,g,b,M,y,S,T,_,w,D){let L=y/_,z=S/w,W=y/2,k=S/2,N=T/2,G=_+1,j=w+1,q=0,_e=0,Z=new I;for(let V=0;V<j;V++){let ee=V*z-k;for(let be=0;be<G;be++){let Re=be*L-W;Z[x]=Re*b,Z[m]=ee*M,Z[g]=N,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[m]=0,Z[g]=T>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(be/_),h.push(1-V/w),q+=1}}for(let V=0;V<w;V++)for(let ee=0;ee<_;ee++){let be=f+ee+G*V,Re=f+ee+G*(V+1),K=f+(ee+1)+G*(V+1),ce=f+(ee+1)+G*V;l.push(be,Re,ce),l.push(Re,K,ce),_e+=6}a.addGroup(d,_e,D),d+=_e,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var tc=new I,nc=new I,Jh=new I,ic=new Di,va=class extends Ot{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(no*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f=new Map,d=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:x,b:m,c:g}=ic;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),ic.getNormal(Jh),h[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let b=0;b<3;b++){let M=(b+1)%3,y=h[b],S=h[M],T=ic[u[b]],_=ic[u[M]],w=`${y}_${S}`,D=`${S}_${y}`,L=f.get(D);L?(Jh.dot(L.normal)<=r&&(d.push(T.x,T.y,T.z),d.push(_.x,_.y,_.z)),f.set(D,null)):f.has(w)||f.set(w,{index0:c[b],index1:c[M],normal:Jh.clone()})}}for(let p of f.values())if(p){let{index0:x,index1:m}=p;tc.fromBufferAttribute(a,x),nc.fromBufferAttribute(a,m),d.push(tc.x,tc.y,tc.z),d.push(nc.x,nc.y,nc.z)}this.setAttribute("position",new Ht(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var ii=class n extends Ot{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],p=[],x=[],m=[];for(let g=0;g<u;g++){let b=g*f-o;for(let M=0;M<c;M++){let y=M*h-r;p.push(y,-b,0),x.push(0,0,1),m.push(M/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<a;b++){let M=b+c*g,y=b+c*(g+1),S=b+1+c*(g+1),T=b+1+c*g;d.push(M,y,T),d.push(y,S,T)}this.setIndex(d),this.setAttribute("position",new Ht(p,3)),this.setAttribute("normal",new Ht(x,3)),this.setAttribute("uv",new Ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var ba=class n extends Ot{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new I,f=new I,d=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){let b=[],M=g/i,y=o+M*a,S=e*Math.cos(y),T=Math.sqrt(e*e-S*S),_=0;g===0&&o===0?_=.5/t:g===i&&l===Math.PI&&(_=-.5/t);for(let w=0;w<=t;w++){let D=w/t,L=s+D*r;h.x=-T*Math.cos(L),h.y=S,h.z=T*Math.sin(L),p.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(D+_,1-M),b.push(c++)}u.push(b)}for(let g=0;g<i;g++)for(let b=0;b<t;b++){let M=u[g][b+1],y=u[g][b],S=u[g+1][b],T=u[g+1][b+1];(g!==0||o>0)&&d.push(M,y,T),(g!==i-1||l<Math.PI)&&d.push(y,S,T)}this.setIndex(d),this.setAttribute("position",new Ht(p,3)),this.setAttribute("normal",new Ht(x,3)),this.setAttribute("uv",new Ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ma=class extends Ot{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new I,r=new I;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let h=l[c],f=h.start,d=h.count;for(let p=f,x=f+d;p<x;p+=3)for(let m=0;m<3;m++){let g=a.getX(p+m),b=a.getX(p+(m+1)%3);s.fromBufferAttribute(o,g),r.fromBufferAttribute(o,b),Nm(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let u=3*a+c,h=3*a+(c+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),Nm(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ht(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Nm(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}function _r(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Om(s))s.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Om(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Dn(n){let e={};for(let t=0;t<n.length;t++){let i=_r(n[t]);for(let s in i)e[s]=i[s]}return e}function Om(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function vv(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Vf(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}var qa={clone:_r,merge:Dn},bv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xn=class extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bv,this.fragmentShader=Mv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_r(e.uniforms),this.uniformsGroups=vv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ke().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ze().fromArray(s.value);break;case"v3":this.uniforms[i].value=new I().fromArray(s.value);break;case"v4":this.uniforms[i].value=new bt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ut().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ot().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Mc=class extends xn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},In=class extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xa,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ln=class extends In{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ze(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return cr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){cr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Sa=class extends Pn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xa,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=Nc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Sc=class extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ec=class extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Bs(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function sa(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function Sv(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Um(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function Ev(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push(...o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var zi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},wc=class extends zi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sf,endingEnd:sf}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case rf:r=e,a=2*t-i;break;case of:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case rf:o=e,l=2*i-t;break;case of:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(i-t)/(s-t),x=p*p,m=x*p,g=-f*m+2*f*x-f*p,b=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*p+1,M=(-1-d)*m+(1.5+d)*x+.5*p,y=d*m-d*x;for(let S=0;S!==a;++S)r[S]=g*o[u+S]+b*o[c+S]+M*o[l+S]+y*o[h+S];return r}},Tc=class extends zi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},Ac=class extends zi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Rc=class extends zi{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(i-t)/(s-t),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let f=a*2,d=e-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=d*f+p*2,b=h[g],M=h[g+1],y=e*f+p*2,S=u[y],T=u[y+1],_=Tv(i,t,b,S,s);r[p]=Rg(_,x,M,T,m)}return r}};function Rg(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function wv(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Tv(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=Rg(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=wv(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Wn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Bs(t,this.TimeBufferType),this.values=Bs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Bs(e.times,Array),values:Bs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),sa(e.settings)&&(i.settings={inTangents:Bs(e.settings.inTangents,Array),outTangents:Bs(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ac(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Rc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ur:t=this.InterpolantFactoryMethodDiscrete;break;case hr:t=this.InterpolantFactoryMethodLinear;break;case ac:t=this.InterpolantFactoryMethodSmooth;break;case nf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return it("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ur;case this.InterpolantFactoryMethodLinear:return hr;case this.InterpolantFactoryMethodSmooth:return ac;case this.InterpolantFactoryMethodBezier:return nf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;sa(this.settings)&&(Fm(this.settings.inTangents,e),Fm(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;sa(this.settings)&&(Bm(this.settings.inTangents,e),Bm(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(lt("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(lt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){lt("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){lt("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&F_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){lt("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ac,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*i,f=h-i,d=h+i;for(let p=0;p!==i;++p){let x=t[h+p];if(x!==t[f+p]||x!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,sa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Fm(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Bm(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Wn.prototype.ValueTypeName="";Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=hr;var vs=class extends Wn{constructor(e,t,i){super(e,t,i)}};vs.prototype.ValueTypeName="bool";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=ur;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ea=class extends Wn{constructor(e,t,i,s){super(e,t,i,s)}};Ea.prototype.ValueTypeName="color";var bs=class extends Wn{constructor(e,t,i,s){super(e,t,i,s)}};bs.prototype.ValueTypeName="number";var Cc=class extends zi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)$t.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ms=class extends Wn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Cc(this.times,this.values,this.getValueSize(),e)}};Ms.prototype.ValueTypeName="quaternion";Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Ss=class extends Wn{constructor(e,t,i){super(e,t,i)}};Ss.prototype.ValueTypeName="string";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=ur;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Hs=class extends Wn{constructor(e,t,i,s){super(e,t,i,s)}};Hs.prototype.ValueTypeName="vector";var wa=class{constructor(e="",t=-1,i=[],s=dg){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Vi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(Rv(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=i.length;r!==o;++r)t.push(Wn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=Sv(l);l=Um(l,1,u),c=Um(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new bs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],f=s[h];f||(s[h]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Av(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return bs;case"vector":case"vector2":case"vector3":case"vector4":return Hs;case"color":return Ea;case"quaternion":return Ms;case"bool":case"boolean":return vs;case"string":return Ss}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Rv(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Av(n.type);if(n.times===void 0){let i=[],s=[];Ev(n.keys,i,s,"value"),n.times=i,n.values=s}let t;return e.parse!==void 0?t=e.parse(n):t=new e(n.name,n.times,n.values,n.interpolation),sa(n.settings)&&(t.settings={inTangents:Bs(n.settings.inTangents,Float32Array),outTangents:Bs(n.settings.outTangents,Float32Array)}),t}var Ni={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(zm(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!zm(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function zm(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Pc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],p=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Cg=new Pc,ki=class{constructor(e){this.manager=e!==void 0?e:Cg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ki.DEFAULT_MATERIAL_NAME="__DEFAULT";var ds={},lf=class extends Error{constructor(e,t){super(e),this.response=t}},xo=class extends ki{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ni.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(ds[e]!==void 0){ds[e].push({onLoad:t,onProgress:i,onError:s});return}ds[e]=[],ds[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&it("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=ds[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0,x=0,m=new ReadableStream({start(g){b();function b(){h.read().then(({done:M,value:y})=>{if(M)g.close();else{x+=y.byteLength;let S=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:d});for(let T=0,_=u.length;T<_;T++){let w=u[T];w.onProgress&&w.onProgress(S)}g.enqueue(y),b()}},M=>{g.error(M)})}}});return new Response(m)}else throw new lf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{Ni.add(`file:${e}`,c);let u=ds[e];delete ds[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=ds[e];if(u===void 0)throw this.manager.itemError(e),c;delete ds[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Jr=new WeakMap,Ic=class extends ki{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ni.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=Jr.get(o);h===void 0&&(h=[],Jr.set(o,h)),h.push({onLoad:t,onError:s})}return o}let a=ao("img");function l(){u(),t&&t(this);let h=Jr.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}Jr.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),Ni.remove(`image:${e}`);let f=Jr.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(h)}Jr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ni.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var Ta=class extends ki{constructor(e){super(e)}load(e,t,i,s){let r=new an,o=new Ic(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},pr=class extends Vt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var jh=new ot,km=new I,Hm=new I,yo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ks,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;km.setFromMatrixPosition(e.matrixWorld),t.position.copy(km),Hm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){jh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(jh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===oo||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(jh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},sc=new I,rc=new $t,Li=new I,Aa=class extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(sc,rc,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sc,rc,Li.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(sc,rc,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sc,rc,Li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Fs=new I,Vm=new Ze,Gm=new Ze,on=class extends Aa{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(no*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fr*2*Math.atan(Math.tan(no*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fs.x,Fs.y).multiplyScalar(-e/Fs.z),Fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fs.x,Fs.y).multiplyScalar(-e/Fs.z)}getViewSize(e,t){return this.getViewBounds(e,Vm,Gm),t.subVectors(Gm,Vm)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(no*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},cf=class extends yo{constructor(){super(new on(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=fr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ra=class extends pr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new cf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},uf=class extends yo{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0}},mr=class extends pr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new uf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},bi=class extends Aa{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},hf=class extends yo{constructor(){super(new bi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vs=class extends pr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new hf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ca=class extends pr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Es=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Pa=class extends Ot{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Qh=new WeakMap,Ia=class extends ki{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&it("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&it("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ni.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{Qh.has(o)===!0?(s&&s(Qh.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ni.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Qh.set(l,c),Ni.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ni.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var jr=-90,Qr=1,_o=class extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new on(jr,Qr,e,t);s.layers=this.layers,this.add(s);let r=new on(jr,Qr,e,t);r.layers=this.layers,this.add(r);let o=new on(jr,Qr,e,t);o.layers=this.layers,this.add(o);let a=new on(jr,Qr,e,t);a.layers=this.layers,this.add(a);let l=new on(jr,Qr,e,t);l.layers=this.layers,this.add(l);let c=new on(jr,Qr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ni)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===oo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Lc=class extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Gf="\\[\\]\\.:\\/",Cv=new RegExp("["+Gf+"]","g"),Wf="[^"+Gf+"]",Pv="[^"+Gf.replace("\\.","")+"]",Iv=/((?:WC+[\/:])*)/.source.replace("WC",Wf),Lv=/(WCOD+)?/.source.replace("WCOD",Pv),Dv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wf),Nv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wf),Ov=new RegExp("^"+Iv+Lv+Dv+Nv+"$"),Uv=["material","materials","bones","map"],ff=class{constructor(e,t,i){let s=i||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},It=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cv,"")}static parseTrackName(e){let t=Ov.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Uv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){it("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){lt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){lt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){lt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){lt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){lt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;lt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=ff;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cR=new Float32Array(1);var Gs=class extends zs{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var Wm=new ot,Mi=class{constructor(e,t,i=0,s=1/0){this.ray=new Ui(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new uo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):lt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Wm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wm),this}intersectObject(e,t=!0,i=[]){return df(e,this,i,t),i.sort(Xm),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)df(e[s],this,i,t);return i.sort(Xm),i}};function Xm(n,e){return n.distance-e.distance}function df(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)df(r[o],e,t,!0)}}var Ws=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ht(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var pf=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};var qm=new I,oc=new I,eo=new I,to=new I,ef=new I,Fv=new I,Bv=new I,La=class{constructor(e=new I,t=new I){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){qm.subVectors(e,this.start),oc.subVectors(this.end,this.start);let i=oc.dot(oc);if(i===0)return 0;let r=oc.dot(qm)/i;return t&&(r=ht(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=Fv,i=Bv){let s=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,u=e.end;eo.subVectors(c,a),to.subVectors(u,l),ef.subVectors(a,l);let h=eo.dot(eo),f=to.dot(to),d=to.dot(ef);if(h<=s&&f<=s)return t.copy(a),i.copy(l),t.distanceToSquared(i);if(h<=s)r=0,o=d/f,o=ht(o,0,1);else{let p=eo.dot(ef);if(f<=s)o=0,r=ht(-p/h,0,1);else{let x=eo.dot(to),m=h*f-x*x;m!==0?r=ht((x*d-p*f)/m,0,1):r=0,o=(x*r+d)/f,o<0?(o=0,r=ht(-p/h,0,1)):o>1&&(o=1,r=ht((x-p)/h,0,1))}}return t.copy(a).addScaledVector(eo,r),i.copy(l).addScaledVector(to,o),t.distanceToSquared(i)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Da=class extends vi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Xf(n,e,t,i){let s=zv(i);switch(t){case Pf:return n*e;case Hc:return n*e/s.components*s.byteLength;case Vc:return n*e/s.components*s.byteLength;case Ys:return n*e*2/s.components*s.byteLength;case Gc:return n*e*2/s.components*s.byteLength;case If:return n*e*3/s.components*s.byteLength;case Mn:return n*e*4/s.components*s.byteLength;case Wc:return n*e*4/s.components*s.byteLength;case Ba:case za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ka:case Ha:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qc:case Yc:return Math.max(n,16)*Math.max(e,8)/4;case Xc:case $c:return Math.max(n,8)*Math.max(e,8)/2;case Zc:case Kc:case jc:case Qc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Jc:case Va:case eu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case iu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case su:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ru:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ou:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case au:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case lu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case cu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case uu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case hu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case fu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case du:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case pu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case mu:case gu:case xu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case yu:case _u:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ga:case vu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zv(n){switch(n){case Ln:case Tf:return{byteLength:1,components:1};case wo:case Af:case Xn:return{byteLength:2,components:1};case zc:case kc:return{byteLength:2,components:4};case Ei:case Bc:case Hn:return{byteLength:4,components:1};case Rf:case Cf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Jg(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Hv(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<h.length;d++){let p=h[f],x=h[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,p=h.length;d<p;d++){let x=h[d];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Vv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gv=`#ifdef USE_ALPHAHASH
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
#endif`,Wv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$v=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yv=`#ifdef USE_AOMAP
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
#endif`,Zv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kv=`#ifdef USE_BATCHING
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
#endif`,Jv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tb=`#ifdef USE_IRIDESCENCE
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
#endif`,nb=`#ifdef USE_BUMPMAP
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
#endif`,ib=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ob=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ab=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ub=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,hb=`#define PI 3.141592653589793
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
} // validated`,fb=`vec3 transformedNormal = objectNormal;
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
#endif`,db=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xb="gl_FragColor = linearToOutputTexel( gl_FragColor );",yb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_b=`#ifdef USE_ENVMAP
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
#endif`,vb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,bb=`#ifdef USE_ENVMAP
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
#endif`,Mb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sb=`#ifdef USE_ENVMAP
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
#endif`,Eb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ab=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rb=`#ifdef USE_GRADIENTMAP
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
}`,Cb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ib=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Db=`#ifdef USE_ENVMAP
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
#endif`,Nb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ob=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ub=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bb=`PhysicalMaterial material;
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
#endif`,zb=`uniform sampler2D dfgLUT;
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
}`,kb=`
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
#endif`,Hb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gb=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Wb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$b=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jb=`#if defined( USE_POINTS_UV )
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
#endif`,jb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tM=`#if defined( USE_MORPHCOLORS )
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
#endif`,nM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iM=`#ifdef USE_MORPHTARGETS
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
#endif`,sM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,oM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,aM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,uM=`#ifdef USE_NORMALMAP
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
#endif`,hM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_M=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,SM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,EM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,TM=`float getShadowMask() {
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
}`,AM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RM=`#ifdef USE_SKINNING
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
#endif`,CM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PM=`#ifdef USE_SKINNING
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
#endif`,IM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,OM=`#ifdef USE_TRANSMISSION
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
#endif`,UM=`#ifdef USE_TRANSMISSION
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
#endif`,FM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,HM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VM=`uniform sampler2D t2D;
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
}`,GM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WM=`uniform float backgroundBlurriness;
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
}`,XM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$M=`#include <common>
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
}`,YM=`#if DEPTH_PACKING == 3200
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
}`,ZM=`#define DISTANCE
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
}`,KM=`#define DISTANCE
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
}`,JM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QM=`uniform float scale;
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
}`,eS=`uniform vec3 diffuse;
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
}`,tS=`#include <common>
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
}`,nS=`uniform vec3 diffuse;
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
}`,iS=`#define LAMBERT
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
}`,sS=`#define LAMBERT
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
}`,rS=`#define MATCAP
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
}`,oS=`#define MATCAP
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
}`,aS=`#define NORMAL
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
}`,lS=`#define NORMAL
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
}`,cS=`#define PHONG
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
}`,uS=`#define PHONG
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
}`,hS=`#define STANDARD
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
}`,fS=`#define STANDARD
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
}`,dS=`#define TOON
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
}`,pS=`#define TOON
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
}`,mS=`uniform float size;
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
}`,gS=`uniform vec3 diffuse;
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
}`,xS=`#include <common>
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
}`,yS=`uniform vec3 color;
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
}`,_S=`uniform float rotation;
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
}`,vS=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:Vv,alphahash_pars_fragment:Gv,alphamap_fragment:Wv,alphamap_pars_fragment:Xv,alphatest_fragment:qv,alphatest_pars_fragment:$v,aomap_fragment:Yv,aomap_pars_fragment:Zv,batching_pars_vertex:Kv,batching_vertex:Jv,begin_vertex:jv,beginnormal_vertex:Qv,bsdfs:eb,iridescence_fragment:tb,bumpmap_pars_fragment:nb,clipping_planes_fragment:ib,clipping_planes_pars_fragment:sb,clipping_planes_pars_vertex:rb,clipping_planes_vertex:ob,color_fragment:ab,color_pars_fragment:lb,color_pars_vertex:cb,color_vertex:ub,common:hb,defaultnormal_vertex:fb,displacementmap_pars_vertex:db,displacementmap_vertex:pb,emissivemap_fragment:mb,emissivemap_pars_fragment:gb,colorspace_fragment:xb,colorspace_pars_fragment:yb,envmap_fragment:_b,envmap_common_pars_fragment:vb,envmap_pars_fragment:bb,envmap_pars_vertex:Mb,envmap_physical_pars_fragment:Db,envmap_vertex:Sb,fog_vertex:Eb,fog_pars_vertex:wb,fog_fragment:Tb,fog_pars_fragment:Ab,gradientmap_pars_fragment:Rb,lightmap_pars_fragment:Cb,lights_lambert_fragment:Pb,lights_lambert_pars_fragment:Ib,lights_pars_begin:Lb,lights_toon_fragment:Nb,lights_toon_pars_fragment:Ob,lights_phong_fragment:Ub,lights_phong_pars_fragment:Fb,lights_physical_fragment:Bb,lights_physical_pars_fragment:zb,lights_fragment_begin:kb,lights_fragment_maps:Hb,lights_fragment_end:Vb,lightprobes_pars_fragment:Gb,logdepthbuf_fragment:Wb,logdepthbuf_pars_fragment:Xb,logdepthbuf_pars_vertex:qb,logdepthbuf_vertex:$b,map_fragment:Yb,map_pars_fragment:Zb,map_particle_fragment:Kb,map_particle_pars_fragment:Jb,metalnessmap_fragment:jb,metalnessmap_pars_fragment:Qb,morphinstance_vertex:eM,morphcolor_vertex:tM,morphnormal_vertex:nM,morphtarget_pars_vertex:iM,morphtarget_vertex:sM,normal_fragment_begin:rM,normal_fragment_maps:oM,normal_pars_fragment:aM,normal_pars_vertex:lM,normal_vertex:cM,normalmap_pars_fragment:uM,clearcoat_normal_fragment_begin:hM,clearcoat_normal_fragment_maps:fM,clearcoat_pars_fragment:dM,iridescence_pars_fragment:pM,opaque_fragment:mM,packing:gM,premultiplied_alpha_fragment:xM,project_vertex:yM,dithering_fragment:_M,dithering_pars_fragment:vM,roughnessmap_fragment:bM,roughnessmap_pars_fragment:MM,shadowmap_pars_fragment:SM,shadowmap_pars_vertex:EM,shadowmap_vertex:wM,shadowmask_pars_fragment:TM,skinbase_vertex:AM,skinning_pars_vertex:RM,skinning_vertex:CM,skinnormal_vertex:PM,specularmap_fragment:IM,specularmap_pars_fragment:LM,tonemapping_fragment:DM,tonemapping_pars_fragment:NM,transmission_fragment:OM,transmission_pars_fragment:UM,uv_pars_fragment:FM,uv_pars_vertex:BM,uv_vertex:zM,worldpos_vertex:kM,background_vert:HM,background_frag:VM,backgroundCube_vert:GM,backgroundCube_frag:WM,cube_vert:XM,cube_frag:qM,depth_vert:$M,depth_frag:YM,distance_vert:ZM,distance_frag:KM,equirect_vert:JM,equirect_frag:jM,linedashed_vert:QM,linedashed_frag:eS,meshbasic_vert:tS,meshbasic_frag:nS,meshlambert_vert:iS,meshlambert_frag:sS,meshmatcap_vert:rS,meshmatcap_frag:oS,meshnormal_vert:aS,meshnormal_frag:lS,meshphong_vert:cS,meshphong_frag:uS,meshphysical_vert:hS,meshphysical_frag:fS,meshtoon_vert:dS,meshtoon_frag:pS,points_vert:mS,points_frag:gS,shadow_vert:xS,shadow_frag:yS,sprite_vert:_S,sprite_frag:vS},We={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Vn={basic:{uniforms:Dn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Dn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Dn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Dn([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Dn([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new Ke(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Dn([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Dn([We.points,We.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Dn([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Dn([We.common,We.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Dn([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Dn([We.sprite,We.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Dn([We.common,We.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Dn([We.lights,We.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Vn.physical={uniforms:Dn([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var Mu={r:0,b:0,g:0},bS=new ot,jg=new ut;jg.set(-1,0,0,0,1,0,0,0,1);function MS(n,e,t,i,s,r){let o=new Ke(0),a=s===!0?0:1,l,c,u=null,h=0,f=null;function d(b){let M=b.isScene===!0?b.background:null;if(M&&M.isTexture){let y=b.backgroundBlurriness>0;M=e.get(M,y)}return M}function p(b){let M=!1,y=d(b);y===null?m(o,a):y&&y.isColor&&(m(y,1),M=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(b,M){let y=d(M);y&&y.isCubeTexture?(c===void 0&&(c=new ft(new Bi(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:_r(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(bS.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(jg),c.material.toneMapped=yt.getTransfer(y.colorSpace)!==Lt,(u!==y||h!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,f=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ft(new ii(2,2),new xn({name:"BackgroundMaterial",uniforms:_r(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=yt.getTransfer(y.colorSpace)!==Lt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,f=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,M){b.getRGB(Mu,Vf(n)),t.buffers.color.setClear(Mu.r,Mu.g,Mu.b,M,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,M=1){o.set(b),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,m(o,a)},render:p,addToRenderList:x,dispose:g}}function SS(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(z,W,k,N,G){let j=!1,q=h(z,N,k,W);r!==q&&(r=q,c(r.object)),j=d(z,N,k,G),j&&p(z,N,k,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,y(z,W,k,N),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(z){return n.bindVertexArray(z)}function u(z){return n.deleteVertexArray(z)}function h(z,W,k,N){let G=N.wireframe===!0,j=i[W.id];j===void 0&&(j={},i[W.id]=j);let q=z.isInstancedMesh===!0?z.id:0,_e=j[q];_e===void 0&&(_e={},j[q]=_e);let Z=_e[k.id];Z===void 0&&(Z={},_e[k.id]=Z);let V=Z[G];return V===void 0&&(V=f(l()),Z[G]=V),V}function f(z){let W=[],k=[],N=[];for(let G=0;G<t;G++)W[G]=0,k[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:k,attributeDivisors:N,object:z,attributes:{},index:null}}function d(z,W,k,N){let G=r.attributes,j=W.attributes,q=0,_e=k.getAttributes();for(let Z in _e)if(_e[Z].location>=0){let ee=G[Z],be=j[Z];if(be===void 0&&(Z==="instanceMatrix"&&z.instanceMatrix&&(be=z.instanceMatrix),Z==="instanceColor"&&z.instanceColor&&(be=z.instanceColor)),ee===void 0||ee.attribute!==be||be&&ee.data!==be.data)return!0;q++}return r.attributesNum!==q||r.index!==N}function p(z,W,k,N){let G={},j=W.attributes,q=0,_e=k.getAttributes();for(let Z in _e)if(_e[Z].location>=0){let ee=j[Z];ee===void 0&&(Z==="instanceMatrix"&&z.instanceMatrix&&(ee=z.instanceMatrix),Z==="instanceColor"&&z.instanceColor&&(ee=z.instanceColor));let be={};be.attribute=ee,ee&&ee.data&&(be.data=ee.data),G[Z]=be,q++}r.attributes=G,r.attributesNum=q,r.index=N}function x(){let z=r.newAttributes;for(let W=0,k=z.length;W<k;W++)z[W]=0}function m(z){g(z,0)}function g(z,W){let k=r.newAttributes,N=r.enabledAttributes,G=r.attributeDivisors;k[z]=1,N[z]===0&&(n.enableVertexAttribArray(z),N[z]=1),G[z]!==W&&(n.vertexAttribDivisor(z,W),G[z]=W)}function b(){let z=r.newAttributes,W=r.enabledAttributes;for(let k=0,N=W.length;k<N;k++)W[k]!==z[k]&&(n.disableVertexAttribArray(k),W[k]=0)}function M(z,W,k,N,G,j,q){q===!0?n.vertexAttribIPointer(z,W,k,G,j):n.vertexAttribPointer(z,W,k,N,G,j)}function y(z,W,k,N){x();let G=N.attributes,j=k.getAttributes(),q=W.defaultAttributeValues;for(let _e in j){let Z=j[_e];if(Z.location>=0){let V=G[_e];if(V===void 0&&(_e==="instanceMatrix"&&z.instanceMatrix&&(V=z.instanceMatrix),_e==="instanceColor"&&z.instanceColor&&(V=z.instanceColor)),V!==void 0){let ee=V.normalized,be=V.itemSize,Re=e.get(V);if(Re===void 0)continue;let K=Re.buffer,ce=Re.type,B=Re.bytesPerElement,ne=ce===n.INT||ce===n.UNSIGNED_INT||V.gpuType===Bc;if(V.isInterleavedBufferAttribute){let ge=V.data,we=ge.isInterleavedBuffer===!0?ge.stride:ge.itemSize,Ye=V.offset;if(ge.isInstancedInterleavedBuffer||ge.isInstancedBufferAttribute){for(let Fe=0;Fe<Z.locationSize;Fe++)g(Z.location+Fe,ge.meshPerAttribute);z.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Fe=0;Fe<Z.locationSize;Fe++)m(Z.location+Fe);n.bindBuffer(n.ARRAY_BUFFER,K);for(let Fe=0;Fe<Z.locationSize;Fe++)M(Z.location+Fe,be/Z.locationSize,ce,ee,we*B,(Ye+be/Z.locationSize*Fe)*B,ne)}else{if(V.isInstancedBufferAttribute){for(let ge=0;ge<Z.locationSize;ge++)g(Z.location+ge,V.meshPerAttribute);z.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ge=0;ge<Z.locationSize;ge++)m(Z.location+ge);n.bindBuffer(n.ARRAY_BUFFER,K);for(let ge=0;ge<Z.locationSize;ge++)M(Z.location+ge,be/Z.locationSize,ce,ee,be*B,be/Z.locationSize*ge*B,ne)}}else if(q!==void 0){let ee=q[_e];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(Z.location,ee);break;case 3:n.vertexAttrib3fv(Z.location,ee);break;case 4:n.vertexAttrib4fv(Z.location,ee);break;default:n.vertexAttrib1fv(Z.location,ee)}}}}b()}function S(){D();for(let z in i){let W=i[z];for(let k in W){let N=W[k];for(let G in N){let j=N[G];for(let q in j)u(j[q].object),delete j[q];delete N[G]}}delete i[z]}}function T(z){if(i[z.id]===void 0)return;let W=i[z.id];for(let k in W){let N=W[k];for(let G in N){let j=N[G];for(let q in j)u(j[q].object),delete j[q];delete N[G]}}delete i[z.id]}function _(z){for(let W in i){let k=i[W];for(let N in k){let G=k[N];if(G[z.id]===void 0)continue;let j=G[z.id];for(let q in j)u(j[q].object),delete j[q];delete G[z.id]}}}function w(z){for(let W in i){let k=i[W],N=z.isInstancedMesh===!0?z.id:0,G=k[N];if(G!==void 0){for(let j in G){let q=G[j];for(let _e in q)u(q[_e].object),delete q[_e];delete G[j]}delete k[N],Object.keys(k).length===0&&delete i[W]}}}function D(){L(),o=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:L,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:w,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function ES(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];t.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function wS(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==Mn&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let w=_===Xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Ln&&_!==Hn&&!w&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(it("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&it("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:y,maxSamples:S,samples:T}}function TS(n){let e=this,t=null,i=0,s=!1,r=!1,o=new mn,a=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let p=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,g=n.get(h);if(!s||p===null||p.length===0||r&&!m)r?u(null):c();else{let b=r?0:i,M=b*4,y=g.clippingState||null;l.value=y,y=u(p,f,M,d);for(let S=0;S!==M;++S)y[S]=t[S];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,p){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=d+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,y=d;M!==x;++M,y+=4)o.copy(h[M]).applyMatrix4(b,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var Za=class extends tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new xa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bi(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:_r(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:si});r.uniforms.tEquirect.value=t;let o=new ft(s,r),a=t.minFilter;return t.minFilter===oi&&(t.minFilter=qt),new _o(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Pg=256,AS=3,RS=20,Qg=256,e0=16,CS=3,PS=new I,IS=new Ke,Ro=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new _o(1,10,null),this._boxMesh=new ft(new Bi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=PS}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let h=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(IS));let m=new _o(i,s,u);return m.position.copy(a),m.update(l,e),l.autoClear=h,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=p,e.background=x,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Pg,zf(e))}_fromTexture(e,t){e.mapping===gr||e.mapping===So?this._setSize(e.image.length===0?Pg:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Ig(e,!1,!1),i=Math.log2(e)-AS;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Ig(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===gr||e.mapping===So?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dg()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Lg()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=LS(),this._integrationMaterial=DS());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/e0);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-CS)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(Qg*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=NS());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function Ig(n,e,t){return new Za(n,{minFilter:oi,generateMipmaps:e,type:Xn,colorSpace:zn,depthBuffer:t})}function Ka(n,e,t){return new xn({name:n,uniforms:e,vertexShader:pt.cube_vert,fragmentShader:t,side:bn,blending:si,depthTest:!1,depthWrite:!1})}function LS(){return Ka("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Qg}u

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
	`)}function DS(){return Ka("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:e0}},`

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
	`)}function NS(){return Ka("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${RS}
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
	`)}function Lg(){return Ka("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Dg(){return Ka("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function OS(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Oc||d===Uc)if(e.has(f)){let p=e.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let x=new Za(p.height);return x.fromEquirectangularTexture(n,f),e.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,p=d===Oc||d===Uc,x=d===gr||d===So;if(p||x){let m=t.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return i===null&&(i=new Ro(n)),m=p?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let b=f.image;return p&&b&&b.height>0||x&&b&&l(b)?(i===null&&(i=new Ro(n)),m=p?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,d){return d===Oc?f.mapping=gr:d===Uc&&(f.mapping=So),f}function l(f){let d=0,p=6;for(let x=0;x<p;x++)f[x]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function US(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&cr("WebGLRenderer: "+i+" extension not supported."),s}}}function FS(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let x=r.get(p);x&&(e.remove(x),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function u(p){let x=p.attributes;for(let m in x)e.update(x[m],n.ARRAY_BUFFER)}function h(p){let x=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let b=x!==null?x.array.length:m.array.length/3-1,M=m.count>=65535?ua:ca,y=new M(Math.ceil(b/3)*6,1),S=y.array;if(x!==null){let _=x.array;g=x.version;for(let w=0,D=0;w<b;w+=3){let L=_[w+0],z=_[w+1],W=_[w+2];S[D++]=L,S[D++]=z,S[D++]=z,S[D++]=W,S[D++]=W,S[D++]=L}}else{g=m.version;for(let _=0,w=0;_<b;_+=3){let D=_+0,L=_+1,z=_+2;S[w++]=D,S[w++]=L,S[w++]=L,S[w++]=z,S[w++]=z,S[w++]=D}}y.version=g;let T=r.get(p);T&&e.remove(T),r.set(p,y)}function f(p){let x=r.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&h(p)}else h(p);return r.get(p)}function d(){for(let p in s){let x=s[p].deref();x!==void 0&&l(x)}}return{get:c,update:u,getWireframeAttribute:f,dispose:d}}function BS(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){n.drawElements(i,f,r,h*o),t.update(f,i,1)}function c(h,f,d){d!==0&&(n.drawElementsInstanced(i,f,r,h*o,d),t.update(f,i,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,h,0,d);let x=0;for(let m=0;m<d;m++)x+=f[m];t.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function zS(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:lt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function kS(n,e,t){let i=new WeakMap,s=new bt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==h){let D=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",D)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],M=0;d===!0&&(M=1),p===!0&&(M=2),x===!0&&(M=3);let y=a.attributes.position.count*M,S=1;y>e.maxTextureSize&&(S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*S*4*h),_=new la(T,y,S,h);_.type=Hn,_.needsUpdate=!0;let w=M*4;for(let L=0;L<h;L++){let z=m[L],W=g[L],k=b[L],N=y*S*4*L;for(let G=0;G<z.count;G++){let j=G*w;d===!0&&(s.fromBufferAttribute(z,G),T[N+j+0]=s.x,T[N+j+1]=s.y,T[N+j+2]=s.z,T[N+j+3]=0),p===!0&&(s.fromBufferAttribute(W,G),T[N+j+4]=s.x,T[N+j+5]=s.y,T[N+j+6]=s.z,T[N+j+7]=0),x===!0&&(s.fromBufferAttribute(k,G),T[N+j+8]=s.x,T[N+j+9]=s.y,T[N+j+10]=s.z,T[N+j+11]=k.itemSize===4?s.w:1)}}f={count:h,texture:_,size:new Ze(y,S)},i.set(a,f),a.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function HS(n,e,t,i,s){let r=new WeakMap;function o(c){let u=s.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var VS={[_f]:"LINEAR_TONE_MAPPING",[vf]:"REINHARD_TONE_MAPPING",[bf]:"CINEON_TONE_MAPPING",[Mo]:"ACES_FILMIC_TONE_MAPPING",[Sf]:"AGX_TONE_MAPPING",[Ef]:"NEUTRAL_TONE_MAPPING",[Mf]:"CUSTOM_TONE_MAPPING"};function GS(n,e,t,i,s,r){let o=new tn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new Ot;u.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Ht([0,2,0,0,2,0],2));let h=new Mc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ft(u,h),d=new bi(-1,1,1,-1,0,1),p=null,x=null,m=!1,g,b=null,M=[],y=!1;this.setSize=function(S,T){o.setSize(S,T),a!==null&&a.setSize(S,T),l!==null&&l.setSize(S,T);for(let _=0;_<M.length;_++){let w=M[_];w.setSize&&w.setSize(S,T)}},this.setEffects=function(S){M=S,y=M.length>0&&M[0].isRenderPass===!0;let T=o.width,_=o.height;M.length>0&&a===null&&(a=new tn(T,_,{type:Xn,depthBuffer:!1,stencilBuffer:!1}),l=new tn(T,_,{type:Xn,depthBuffer:!1,stencilBuffer:!1}));let w=s===!0&&M.some(D=>D.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&c===null&&(c=new _s(T,_),r===!0&&(c.format=ws,c.type=yr)),o.dispose(),o.depthTexture=w?c:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let D=0;D<M.length;D++){let L=M[D];L.setSize&&L.setSize(T,_),w&&L.needsDepthTexture===!0&&L.setDepthTexture&&L.setDepthTexture(c)}},this.begin=function(S,T){if(m||S.toneMapping===ri&&M.length===0)return!1;if(b=T,T!==null){let _=T.width,w=T.height;(o.width!==_||o.height!==w)&&this.setSize(_,w)}return y===!1&&S.setRenderTarget(o),g=S.toneMapping,S.toneMapping=ri,!0},this.hasRenderPass=function(){return y},this.end=function(S,T){S.toneMapping=g,m=!0;let _=o,w=a;for(let D=0;D<M.length;D++){let L=M[D];L.enabled!==!1&&(L.render(S,w,_,T),L.needsSwap!==!1&&(_=w,w=w===a?l:a))}if(p!==S.outputColorSpace||x!==S.toneMapping){p=S.outputColorSpace,x=S.toneMapping,h.defines={},yt.getTransfer(p)===Lt&&(h.defines.SRGB_TRANSFER="");let D=VS[x];D&&(h.defines[D]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=_.texture,S.setRenderTarget(b),S.render(f,d),b=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}var t0=new an,n0=new _s(1,1),i0=new ya(1),s0=new la,r0=new yc,o0=new xa,Ng=[],Og=[],Ug=new Float32Array(16),Fg=new Float32Array(9),Bg=new Float32Array(4);function Co(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Ng[s];if(r===void 0&&(r=new Float32Array(s),Ng[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function cn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function un(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function wu(n,e){let t=Og[e];t===void 0&&(t=new Int32Array(e),Og[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function WS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function XS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;n.uniform2fv(this.addr,e),un(t,e)}}function qS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;n.uniform3fv(this.addr,e),un(t,e)}}function $S(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;n.uniform4fv(this.addr,e),un(t,e)}}function YS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(cn(t,i))return;Bg.set(i),n.uniformMatrix2fv(this.addr,!1,Bg),un(t,i)}}function ZS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(cn(t,i))return;Fg.set(i),n.uniformMatrix3fv(this.addr,!1,Fg),un(t,i)}}function KS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(cn(t,i))return;Ug.set(i),n.uniformMatrix4fv(this.addr,!1,Ug),un(t,i)}}function JS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function jS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;n.uniform2iv(this.addr,e),un(t,e)}}function QS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;n.uniform3iv(this.addr,e),un(t,e)}}function eE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;n.uniform4iv(this.addr,e),un(t,e)}}function tE(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function nE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;n.uniform2uiv(this.addr,e),un(t,e)}}function iE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;n.uniform3uiv(this.addr,e),un(t,e)}}function sE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;n.uniform4uiv(this.addr,e),un(t,e)}}function Tu(n){return n.version===0&&(n.compareFunction=Of,n.needsUpdate=!0),n}function rE(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Tu(n0):r=t0,t.setTexture2D(e||r,s)}function oE(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||r0,s)}function aE(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Tu(i0):r=o0,t.setTextureCube(e||r,s)}function lE(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||s0,s)}function cE(n){switch(n){case 5126:return WS;case 35664:return XS;case 35665:return qS;case 35666:return $S;case 35674:return YS;case 35675:return ZS;case 35676:return KS;case 5124:case 35670:return JS;case 35667:case 35671:return jS;case 35668:case 35672:return QS;case 35669:case 35673:return eE;case 5125:return tE;case 36294:return nE;case 36295:return iE;case 36296:return sE;case 35678:case 36198:case 36298:case 36306:case 35682:return rE;case 35679:case 36299:case 36307:return oE;case 35680:case 36300:case 36308:case 36293:return aE;case 36289:case 36303:case 36311:case 36292:return lE}}function uE(n,e){n.uniform1fv(this.addr,e)}function hE(n,e){let t=Co(e,this.size,2);n.uniform2fv(this.addr,t)}function fE(n,e){let t=Co(e,this.size,3);n.uniform3fv(this.addr,t)}function dE(n,e){let t=Co(e,this.size,4);n.uniform4fv(this.addr,t)}function pE(n,e){let t=Co(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function mE(n,e){let t=Co(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function gE(n,e){let t=Co(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function xE(n,e){n.uniform1iv(this.addr,e)}function yE(n,e){n.uniform2iv(this.addr,e)}function _E(n,e){n.uniform3iv(this.addr,e)}function vE(n,e){n.uniform4iv(this.addr,e)}function bE(n,e){n.uniform1uiv(this.addr,e)}function ME(n,e){n.uniform2uiv(this.addr,e)}function SE(n,e){n.uniform3uiv(this.addr,e)}function EE(n,e){n.uniform4uiv(this.addr,e)}function wE(n,e,t){let i=this.cache,s=e.length,r=wu(t,s);cn(i,r)||(n.uniform1iv(this.addr,r),un(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Tu(n0):o=t0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function TE(n,e,t){let i=this.cache,s=e.length,r=wu(t,s);cn(i,r)||(n.uniform1iv(this.addr,r),un(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||r0,r[o])}function AE(n,e,t){let i=this.cache,s=e.length,r=wu(t,s);cn(i,r)||(n.uniform1iv(this.addr,r),un(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Tu(i0):o=o0;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function RE(n,e,t){let i=this.cache,s=e.length,r=wu(t,s);cn(i,r)||(n.uniform1iv(this.addr,r),un(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||s0,r[o])}function CE(n){switch(n){case 5126:return uE;case 35664:return hE;case 35665:return fE;case 35666:return dE;case 35674:return pE;case 35675:return mE;case 35676:return gE;case 5124:case 35670:return xE;case 35667:case 35671:return yE;case 35668:case 35672:return _E;case 35669:case 35673:return vE;case 5125:return bE;case 36294:return ME;case 36295:return SE;case 36296:return EE;case 35678:case 36198:case 36298:case 36306:case 35682:return wE;case 35679:case 36299:case 36307:return TE;case 35680:case 36300:case 36308:case 36293:return AE;case 36289:case 36303:case 36311:case 36292:return RE}}var Yf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=cE(t.type)}},Zf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=CE(t.type)}},Kf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},qf=/(\w+)(\])?(\[|\.)?/g;function zg(n,e){n.seq.push(e),n.map[e.id]=e}function PE(n,e,t){let i=n.name,s=i.length;for(qf.lastIndex=0;;){let r=qf.exec(i),o=qf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){zg(t,c===void 0?new Yf(a,n,e):new Zf(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Kf(a),zg(t,h)),t=h}}}var Ao=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);PE(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function kg(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var IE=37297,LE=0;function DE(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Hg=new ut;function NE(n){yt._getMatrix(Hg,yt.workingColorSpace,n);let e=`mat3( ${Hg.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(n)){case oa:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Vg(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+DE(n.getShaderSource(e),a)}else return r}function OE(n,e){let t=NE(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var UE={[_f]:"Linear",[vf]:"Reinhard",[bf]:"Cineon",[Mo]:"ACESFilmic",[Sf]:"AgX",[Ef]:"Neutral",[Mf]:"Custom"};function FE(n,e){let t=UE[e];return t===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Su=new I;function BE(){yt.getLuminanceCoefficients(Su);let n=Su.x.toFixed(4),e=Su.y.toFixed(4),t=Su.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ya).join(`
`)}function kE(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function HE(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ya(n){return n!==""}function Gg(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Wg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var VE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jf(n){return n.replace(VE,GE)}function GE(n,e){let t=pt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Jf(t)}var WE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xg(n){return n.replace(WE,XE)}function XE(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qg(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var qE={[Na]:"SHADOWMAP_TYPE_PCF",[vo]:"SHADOWMAP_TYPE_VSM"};function $E(n){return qE[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var YE={[So]:"ENVMAP_MODE_REFRACTION"};function ZE(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":YE[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var KE={[Nc]:"ENVMAP_BLENDING_MULTIPLY",[ug]:"ENVMAP_BLENDING_MIX",[hg]:"ENVMAP_BLENDING_ADD"};function JE(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":KE[n.combine]||"ENVMAP_BLENDING_NONE"}function jE(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=$E(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=ZE(t),h=JE(t),f=zE(t),d=kE(r),p=s.createProgram(),x,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Ya).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Ya).join(`
`),m.length>0&&(m+=`
`)):(x=[qg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ya).join(`
`),m=[qg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?pt.tonemapping_pars_fragment:"",t.toneMapping!==ri?FE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,OE("linearToOutputTexel",t.outputColorSpace),BE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ya).join(`
`)),o=Jf(o),o=Gg(o,t),o=Wg(o,t),a=Jf(a),a=Gg(a,t),a=Wg(a,t),o=Xg(o),a=Xg(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===Ff?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ff?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=g+x+o,M=g+m+a,y=kg(s,s.VERTEX_SHADER,b),S=kg(s,s.FRAGMENT_SHADER,M);s.attachShader(p,y),s.attachShader(p,S),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function T(L){if(n.debug.checkShaderErrors){let z=s.getProgramInfoLog(p)||"",W=s.getShaderInfoLog(y)||"",k=s.getShaderInfoLog(S)||"",N=z.trim(),G=W.trim(),j=k.trim(),q=!0,_e=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,y,S);else{let Z=Vg(s,y,"vertex"),V=Vg(s,S,"fragment");lt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+N+`
`+Z+`
`+V)}else N!==""?it("WebGLProgram: Program Info Log:",N):(G===""||j==="")&&(_e=!1);_e&&(L.diagnostics={runnable:q,programLog:N,vertexShader:{log:G,prefix:x},fragmentShader:{log:j,prefix:m}})}s.deleteShader(y),s.deleteShader(S),_=new Ao(s,p),w=HE(s,p)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(p,IE)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=LE++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=S,this}var QE=0,jf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Qf(e),t.set(e,i)),i}},Qf=class{constructor(e){this.id=QE++,this.code=e,this.usedTimes=0}};function ew(n){return n===Ys||n===Va||n===Ga}function tw(n,e,t,i,s,r){let o=new uo,a=new jf,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,w,D,L,z,W){let k=L.fog,N=z.geometry,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,j=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,q=e.get(_.envMap||G,j),_e=f[_.type],Z=i.precision;_.precision!==null&&(Z=i.getMaxPrecision(_.precision),Z!==_.precision&&it("WebGLProgram.getParameters:",_.precision,"not supported, using",Z,"instead."));let V=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ee=V!==void 0?V.length:0,be=0;N.morphAttributes.position!==void 0&&(be=1),N.morphAttributes.normal!==void 0&&(be=2),N.morphAttributes.color!==void 0&&(be=3);let Re,K,ce,B;if(_e){let Pe=Vn[_e];Re=Pe.vertexShader,K=Pe.fragmentShader}else{Re=_.vertexShader,K=_.fragmentShader;let Pe=a.getVertexShaderStage(_),dt=a.getFragmentShaderStage(_);a.update(_,Pe,dt),ce=Pe.id,B=dt.id}let ne=n.getRenderTarget(),ge=n.state.buffers.depth.getReversed(),we=z.isInstancedMesh===!0,Ye=z.isBatchedMesh===!0,Fe=!!_.map,Xe=!!_.matcap,ue=!!q,Me=ue&&q.isPMREMTexture===!0,Be=!!_.aoMap,Ne=!!_.lightMap,qe=!!_.bumpMap&&_.wireframe===!1,Je=!!_.normalMap,at=!!_.displacementMap,re=!!_.emissiveMap,He=!!_.metalnessMap,Oe=!!_.roughnessMap,me=_.anisotropy>0,A=_.clearcoat>0,J=_.diffuseRoughness>0,te=_.dispersion>0,Ae=_.retroreflectivity>0,$=_.iridescence>0,pe=_.sheen>0,ve=_.transmission>0,Ee=me&&!!_.anisotropyMap,C=A&&!!_.clearcoatMap,E=A&&!!_.clearcoatNormalMap,X=A&&!!_.clearcoatRoughnessMap,Se=J&&!!_.diffuseRoughnessMap,he=$&&!!_.iridescenceMap,ae=$&&!!_.iridescenceThicknessMap,ye=pe&&!!_.sheenColorMap,se=pe&&!!_.sheenRoughnessMap,de=!!_.specularMap,Le=!!_.specularColorMap,F=!!_.specularIntensityMap,xe=ve&&!!_.transmissionMap,fe=ve&&!!_.thicknessMap,ze=!!_.gradientMap,Ce=!!_.alphaMap,Ue=_.alphaTest>0,ke=!!_.alphaHash,nt=!!_.extensions,Y=ri;_.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Y=n.toneMapping);let Ie=Me?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,rt={shaderID:_e,shaderType:_.type,shaderName:_.name,vertexShader:Re,fragmentShader:K,defines:_.defines,customVertexShaderID:ce,customFragmentShaderID:B,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:Z,batching:Ye,batchingColor:Ye&&z._colorsTexture!==null,instancing:we,instancingColor:we&&z.instanceColor!==null,instancingMorph:we&&z.morphTexture!==null,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Fe,matcap:Xe,envMap:ue,envMapMode:ue&&q.mapping,envMapPMREM:Me,envMapMaxLod:Me?Ie.length-1:null,envMapSize:Me?Ie[0].width:null,aoMap:Be,lightMap:Ne,bumpMap:qe,normalMap:Je,displacementMap:at,emissiveMap:re,normalMapObjectSpace:Je&&_.normalMapType===mg,normalMapTangentSpace:Je&&_.normalMapType===Xa,packedNormalMap:Je&&_.normalMapType===Xa&&ew(_.normalMap.format),metalnessMap:He,roughnessMap:Oe,anisotropy:me,anisotropyMap:Ee,clearcoat:A,clearcoatMap:C,clearcoatNormalMap:E,clearcoatRoughnessMap:X,diffuseRoughness:J,diffuseRoughnessMap:Se,dispersion:te,retroreflection:Ae,iridescence:$,iridescenceMap:he,iridescenceThicknessMap:ae,sheen:pe,sheenColorMap:ye,sheenRoughnessMap:se,specularMap:de,specularColorMap:Le,specularIntensityMap:F,transmission:ve,transmissionMap:xe,thicknessMap:fe,gradientMap:ze,opaque:_.transparent===!1&&_.blending===Hi&&_.alphaToCoverage===!1,alphaMap:Ce,alphaTest:Ue,alphaHash:ke,combine:_.combine,mapUv:Fe&&d(_.map.channel),aoMapUv:Be&&d(_.aoMap.channel),lightMapUv:Ne&&d(_.lightMap.channel),bumpMapUv:qe&&d(_.bumpMap.channel),normalMapUv:Je&&d(_.normalMap.channel),displacementMapUv:at&&d(_.displacementMap.channel),emissiveMapUv:re&&d(_.emissiveMap.channel),metalnessMapUv:He&&d(_.metalnessMap.channel),roughnessMapUv:Oe&&d(_.roughnessMap.channel),anisotropyMapUv:Ee&&d(_.anisotropyMap.channel),clearcoatMapUv:C&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:E&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Se&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:he&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:se&&d(_.sheenRoughnessMap.channel),specularMapUv:de&&d(_.specularMap.channel),specularColorMapUv:Le&&d(_.specularColorMap.channel),specularIntensityMapUv:F&&d(_.specularIntensityMap.channel),transmissionMapUv:xe&&d(_.transmissionMap.channel),thicknessMapUv:fe&&d(_.thicknessMap.channel),alphaMapUv:Ce&&d(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Je||me),vertexNormals:!!N.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!N.attributes.uv&&(Fe||Ce),fog:!!k,useFog:_.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||N.attributes.normal===void 0&&Je===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ge,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:be,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:W.filter(Pe=>Pe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Y,decodeVideoTexture:Fe&&_.map.isVideoTexture===!0&&yt.getTransfer(_.map.colorSpace)===Lt,decodeVideoTextureEmissive:re&&_.emissiveMap.isVideoTexture===!0&&yt.getTransfer(_.emissiveMap.colorSpace)===Lt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Dt,flipSided:_.side===bn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:nt&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&_.extensions.multiDraw===!0||Ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function x(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let D in _.defines)w.push(D),w.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(m(w,_),g(w,_),w.push(n.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function m(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapPMREM),_.push(w.envMapMaxLod),_.push(w.envMapSize),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.diffuseRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.numLightProbeGrids),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function g(_,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function b(_){let w=f[_.type],D;if(w){let L=Vn[w];D=qa.clone(L.uniforms)}else D=_.uniforms;return D}function M(_,w){let D=u.get(w);return D!==void 0?++D.usedTimes:(D=new jE(n,w,_,s),c.push(D),u.set(w,D)),D}function y(_){if(--_.usedTimes===0){let w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function S(_){a.remove(_)}function T(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:b,acquireProgram:M,releaseProgram:y,releaseShaderCache:S,programs:c,dispose:T}}function nw(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function iw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function $g(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Yg(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,x,m,g){let b=n[e];return b===void 0?(b={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:g},n[e]=b):(b.id=f.id,b.object=f,b.geometry=d,b.material=p,b.materialVariant=o(f),b.groupOrder=x,b.renderOrder=f.renderOrder,b.z=m,b.group=g),e++,b}function l(f,d,p,x,m,g,b){b.reversedDepth===!0&&(m=-m);let M=a(f,d,p,x,m,g);p.transmission>0?i.push(M):p.transparent===!0?s.push(M):t.push(M)}function c(f,d,p,x,m,g){let b=a(f,d,p,x,m,g);p.transmission>0?i.unshift(b):p.transparent===!0?s.unshift(b):t.unshift(b)}function u(f,d){t.length>1&&t.sort(f||iw),i.length>1&&i.sort(d||$g),s.length>1&&s.sort(d||$g)}function h(){for(let f=e,d=n.length;f<d;f++){let p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function sw(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Yg,n.set(i,[o])):s>=r.length?(o=new Yg,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function rw(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new Ke};break;case"SpotLight":t={position:new I,direction:new I,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function ow(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var aw=0;function lw(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function cw(n){let e=new rw,t=ow(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,r=new ot,o=new ot;function a(c){let u=0,h=0,f=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let d=0,p=0,x=0,m=0,g=0,b=0,M=0,y=0,S=0,T=0,_=0,w=0,D=0,L=0;c.sort(lw);for(let W=0,k=c.length;W<k;W++){let N=c[W],G=N.color,j=N.intensity,q=N.distance,_e=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Ys?_e=N.shadow.map.texture:_e=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=G.r*j,h+=G.g*j,f+=G.b*j;else if(N.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(N.sh.coefficients[Z],j);L++}else if(N.isSunLight){let Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let V=N.shadow,ee=t.get(N);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),i.sunShadow[p]=ee,i.sunShadowMap[p]=_e;let be=V.getViewportCount();for(let Re=0;Re<be;Re++)i.sunShadowMatrix[x+Re]=V.getMatrix(Re),i.sunShadowCascade[x+Re]=V._cascadeData[Re];x+=be,p++}i.sun[d]=Z,d++}else if(N.isDirectionalLight){let Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let V=N.shadow,ee=t.get(N);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,i.directionalShadow[m]=ee,i.directionalShadowMap[m]=_e,i.directionalShadowMatrix[m]=N.shadow.matrix,S++}i.directional[m]=Z,m++}else if(N.isSpotLight){let Z=e.get(N);Z.position.setFromMatrixPosition(N.matrixWorld),Z.color.copy(G).multiplyScalar(j),Z.distance=q,Z.coneCos=Math.cos(N.angle),Z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Z.decay=N.decay,i.spot[b]=Z;let V=N.shadow;if(N.map&&(i.spotLightMap[w]=N.map,w++,V.updateMatrices(N),N.castShadow&&D++),i.spotLightMatrix[b]=V.matrix,N.castShadow){let ee=t.get(N);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,i.spotShadow[b]=ee,i.spotShadowMap[b]=_e,_++}b++}else if(N.isRectAreaLight){let Z=e.get(N);Z.color.copy(G).multiplyScalar(j),Z.halfWidth.set(N.width*.5,0,0),Z.halfHeight.set(0,N.height*.5,0),i.rectArea[M]=Z,M++}else if(N.isPointLight){let Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),Z.distance=N.distance,Z.decay=N.decay,N.castShadow){let V=N.shadow,ee=t.get(N);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,ee.shadowCameraNear=V.camera.near,ee.shadowCameraFar=V.camera.far,i.pointShadow[g]=ee,i.pointShadowMap[g]=_e,i.pointShadowMatrix[g]=N.shadow.matrix,T++}i.point[g]=Z,g++}else if(N.isHemisphereLight){let Z=e.get(N);Z.skyColor.copy(N.color).multiplyScalar(j),Z.groundColor.copy(N.groundColor).multiplyScalar(j),i.hemi[y]=Z,y++}}M>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=We.LTC_FLOAT_1,i.rectAreaLTC2=We.LTC_FLOAT_2):(i.rectAreaLTC1=We.LTC_HALF_1,i.rectAreaLTC2=We.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let z=i.hash;(z.sunLength!==d||z.directionalLength!==m||z.pointLength!==g||z.spotLength!==b||z.rectAreaLength!==M||z.hemiLength!==y||z.numSunShadows!==p||z.numDirectionalShadows!==S||z.numPointShadows!==T||z.numSpotShadows!==_||z.numSpotMaps!==w||z.numLightProbes!==L)&&(i.sun.length=d,i.directional.length=m,i.spot.length=b,i.rectArea.length=M,i.point.length=g,i.hemi.length=y,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+w-D,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=L,z.sunLength=d,z.directionalLength=m,z.pointLength=g,z.spotLength=b,z.rectAreaLength=M,z.hemiLength=y,z.numSunShadows=p,z.numDirectionalShadows=S,z.numPointShadows=T,z.numSpotShadows=_,z.numSpotMaps=w,z.numLightProbes=L,i.version=aw++)}function l(c,u){let h=0,f=0,d=0,p=0,x=0,m=0,g=u.matrixWorldInverse;for(let b=0,M=c.length;b<M;b++){let y=c[b];if(y.isSunLight){let S=i.sun[h];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),h++}else if(y.isDirectionalLight){let S=i.directional[f];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),f++}else if(y.isSpotLight){let S=i.spot[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let S=i.rectArea[x];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let S=i.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let S=i.hemi[m];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function Zg(n){let e=new cw(n),t=[],i=[],s=[];function r(h){u.camera=h,t.length=0,i.length=0,s.length=0}function o(h){h.isLightProbeGrid?s.push(h):t.push(h)}function a(h){i.push(h)}function l(){e.setup(t),s.sort((h,f)=>h.priority-f.priority||h.id-f.id)}function c(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function uw(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Zg(n),e.set(s,[a])):r>=o.length?(a=new Zg(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var hw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fw=`uniform sampler2D shadow_pass;
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
}`,dw=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],pw=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Kg=new ot,$a=new I,$f=new I;function mw(n,e,t){let i=new ks,s=new Ze,r=new Ze,o=new bt,a=new Sc,l=new Ec,c={},u=t.maxTextureSize,h={[Kn]:bn,[bn]:Kn,[Dt]:Dt},f=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:hw,fragmentShader:fw}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Ot;p.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ft(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Na;let g=this.type;this.render=function(T,_,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Zm&&(it("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Na);let D=n.getRenderTarget(),L=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),W=n.state;W.setBlending(si),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let k=g!==this.type;k&&_.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(G=>G.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,G=T.length;N<G;N++){let j=T[N],q=j.shadow;if(q===void 0){it("WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let _e=q.getFrameExtents();s.multiply(_e),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/_e.x),s.x=r.x*_e.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/_e.y),s.y=r.y*_e.y,q.mapSize.y=r.y));let Z=n.state.buffers.depth.getReversed();if(q.camera._reversedDepth=Z,q.map===null||k===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===vo){if(j.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new tn(s.x,s.y,{format:Ys,type:Xn,minFilter:qt,magFilter:qt,generateMipmaps:!1}),q.map.texture.name=j.name+".shadowMap",q.map.depthTexture=new _s(s.x,s.y,Hn),q.map.depthTexture.name=j.name+".shadowMapDepth",q.map.depthTexture.format=ms,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Xt,q.map.depthTexture.magFilter=Xt}else j.isPointLight?(q.map=new Za(s.x),q.map.depthTexture=new ya(s.x,Ei)):(q.map=new tn(s.x,s.y),q.map.depthTexture=new _s(s.x,s.y,Ei)),q.map.depthTexture.name=j.name+".shadowMap",q.map.depthTexture.format=ms,this.type===Na?(q.map.depthTexture.compareFunction=Z?Nf:Df,q.map.depthTexture.minFilter=qt,q.map.depthTexture.magFilter=qt):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Xt,q.map.depthTexture.magFilter=Xt);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let V=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();j.isPointLight!==!0&&q.updateMatrices(j,w);let ee=(q.camera.layers.mask&4294967294)!==0?q.camera.layers:w.layers;for(let be=0;be<V;be++){let Re=q.getCamera(be);if(j.isPointLight){let K=q.camera,ce=q.matrix,B=j.distance||K.far;B!==K.far&&(K.far=B,K.updateProjectionMatrix()),$a.setFromMatrixPosition(j.matrixWorld),K.position.copy($a),$f.copy(K.position),$f.add(dw[be]),K.up.copy(pw[be]),K.lookAt($f),K.updateMatrixWorld(),ce.makeTranslation(-$a.x,-$a.y,-$a.z),Kg.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Kg,K.coordinateSystem,K.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)n.setRenderTarget(q.map,be),n.clear();else{be===0&&(n.setRenderTarget(q.map),n.clear());let K=q.getViewport(be);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),W.viewport(o)}i=q.getFrustum(be),y(_,w,Re,j,ee,this.type)}q.isPointLightShadow!==!0&&this.type===vo&&b(q,w),q.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(D,L,z)};function b(T,_){let w=e.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new tn(s.x,s.y,{format:Ys,type:Xn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(_,null,w,f,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(_,null,w,d,x,null)}function M(T,_,w,D){let L=null,z=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(z!==void 0)L=z;else if(L=w.isPointLight===!0?l:a,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let W=L.uuid,k=_.uuid,N=c[W];N===void 0&&(N={},c[W]=N);let G=N[k];G===void 0&&(G=L.clone(),N[k]=G,_.addEventListener("dispose",S)),L=G}if(L.visible=_.visible,L.wireframe=_.wireframe,D===vo?L.side=_.shadowSide!==null?_.shadowSide:_.side:L.side=_.shadowSide!==null?_.shadowSide:h[_.side],L.alphaMap=_.alphaMap,L.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,L.map=_.map,L.clipShadows=_.clipShadows,L.clippingPlanes=_.clippingPlanes,L.clipIntersection=_.clipIntersection,L.displacementMap=_.displacementMap,L.displacementScale=_.displacementScale,L.displacementBias=_.displacementBias,L.wireframeLinewidth=_.wireframeLinewidth,L.linewidth=_.linewidth,w.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let W=n.properties.get(L);W.light=w}return L}function y(T,_,w,D,L,z){if(T.visible===!1)return;if(T.layers.test(L)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&z===vo)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);let N=e.update(T),G=T.material;if(Array.isArray(G)){let j=N.groups;for(let q=0,_e=j.length;q<_e;q++){let Z=j[q],V=G[Z.materialIndex];if(V&&V.visible){let ee=M(T,V,D,z);T.onBeforeShadow(n,T,_,w,N,ee,Z),n.renderBufferDirect(w,null,N,ee,T,Z),T.onAfterShadow(n,T,_,w,N,ee,Z)}}}else if(G.visible){let j=M(T,G,D,z);T.onBeforeShadow(n,T,_,w,N,j,null),n.renderBufferDirect(w,null,N,j,T,null),T.onAfterShadow(n,T,_,w,N,j,null)}}let k=T.children;for(let N=0,G=k.length;N<G;N++)y(k[N],_,w,D,L,z)}function S(T){T.target.removeEventListener("dispose",S);for(let w in c){let D=c[w],L=T.target.uuid;L in D&&(D[L].dispose(),delete D[L])}}}function gw(n,e){function t(){let F=!1,xe=new bt,fe=null,ze=new bt(0,0,0,0);return{setMask:function(Ce){fe!==Ce&&!F&&(n.colorMask(Ce,Ce,Ce,Ce),fe=Ce)},setLocked:function(Ce){F=Ce},setClear:function(Ce,Ue,ke,nt,Y){Y===!0&&(Ce*=nt,Ue*=nt,ke*=nt),xe.set(Ce,Ue,ke,nt),ze.equals(xe)===!1&&(n.clearColor(Ce,Ue,ke,nt),ze.copy(xe))},reset:function(){F=!1,fe=null,ze.set(-1,0,0,0)}}}function i(){let F=!1,xe=!1,fe=null,ze=null,Ce=null;return{setReversed:function(Ue){if(xe!==Ue){let ke=e.get("EXT_clip_control");Ue?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),xe=Ue;let nt=Ce;Ce=null,this.setClear(nt)}},getReversed:function(){return xe},setTest:function(Ue){Ue?ge(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(Ue){fe!==Ue&&!F&&(n.depthMask(Ue),fe=Ue)},setFunc:function(Ue){if(xe&&(Ue=wg[Ue]),ze!==Ue){switch(Ue){case cc:n.depthFunc(n.NEVER);break;case uc:n.depthFunc(n.ALWAYS);break;case hc:n.depthFunc(n.LESS);break;case so:n.depthFunc(n.LEQUAL);break;case fc:n.depthFunc(n.EQUAL);break;case dc:n.depthFunc(n.GEQUAL);break;case pc:n.depthFunc(n.GREATER);break;case mc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ze=Ue}},setLocked:function(Ue){F=Ue},setClear:function(Ue){Ce!==Ue&&(Ce=Ue,xe&&(Ue=1-Ue),n.clearDepth(Ue))},reset:function(){F=!1,fe=null,ze=null,Ce=null,xe=!1}}}function s(){let F=!1,xe=null,fe=null,ze=null,Ce=null,Ue=null,ke=null,nt=null,Y=null;return{setTest:function(Ie){F||(Ie?ge(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(Ie){xe!==Ie&&!F&&(n.stencilMask(Ie),xe=Ie)},setFunc:function(Ie,rt,Pe){(fe!==Ie||ze!==rt||Ce!==Pe)&&(n.stencilFunc(Ie,rt,Pe),fe=Ie,ze=rt,Ce=Pe)},setOp:function(Ie,rt,Pe){(Ue!==Ie||ke!==rt||nt!==Pe)&&(n.stencilOp(Ie,rt,Pe),Ue=Ie,ke=rt,nt=Pe)},setLocked:function(Ie){F=Ie},setClear:function(Ie){Y!==Ie&&(n.clearStencil(Ie),Y=Ie)},reset:function(){F=!1,xe=null,fe=null,ze=null,Ce=null,Ue=null,ke=null,nt=null,Y=null}}}let r=new t,o=new i,a=new s,l={},c=new WeakMap,u={},h={},f={},d=new WeakMap,p=[],x=null,m=!1,g=null,b=null,M=null,y=null,S=null,T=null,_=null,w=new Ke(0,0,0),D=0,L=!1,z=null,W=null,k=null,N=null,G=null,j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,_e=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(_e=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=_e>=1):Z.indexOf("OpenGL ES")!==-1&&(_e=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=_e>=2);let V=null,ee={},be=n.getParameter(n.SCISSOR_BOX),Re=n.getParameter(n.VIEWPORT),K=new bt().fromArray(be),ce=new bt().fromArray(Re);function B(F,xe,fe,ze){let Ce=new Uint8Array(4),Ue=n.createTexture();n.bindTexture(F,Ue),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<fe;ke++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(xe,0,n.RGBA,1,1,ze,0,n.RGBA,n.UNSIGNED_BYTE,Ce):n.texImage2D(xe+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ce);return Ue}let ne={};ne[n.TEXTURE_2D]=B(n.TEXTURE_2D,n.TEXTURE_2D,1),ne[n.TEXTURE_CUBE_MAP]=B(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[n.TEXTURE_2D_ARRAY]=B(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ne[n.TEXTURE_3D]=B(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ge(n.DEPTH_TEST),o.setFunc(so),qe(!1),Je(mf),ge(n.CULL_FACE),Be(si);function ge(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function we(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Ye(F,xe){return f[F]!==xe?(n.bindFramebuffer(F,xe),f[F]=xe,F===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=xe),F===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=xe),!0):!1}function Fe(F,xe){let fe=p,ze=!1;if(F){fe=d.get(xe),fe===void 0&&(fe=[],d.set(xe,fe));let Ce=F.textures;if(fe.length!==Ce.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let Ue=0,ke=Ce.length;Ue<ke;Ue++)fe[Ue]=n.COLOR_ATTACHMENT0+Ue;fe.length=Ce.length,ze=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,ze=!0);ze&&n.drawBuffers(fe)}function Xe(F){return x!==F?(n.useProgram(F),x=F,!0):!1}let ue={[Si]:n.FUNC_ADD,[Km]:n.FUNC_SUBTRACT,[Jm]:n.FUNC_REVERSE_SUBTRACT};ue[jm]=n.MIN,ue[Qm]=n.MAX;let Me={[Oa]:n.ZERO,[$s]:n.ONE,[eg]:n.SRC_COLOR,[Ua]:n.SRC_ALPHA,[rg]:n.SRC_ALPHA_SATURATE,[ig]:n.DST_COLOR,[ng]:n.DST_ALPHA,[tg]:n.ONE_MINUS_SRC_COLOR,[bo]:n.ONE_MINUS_SRC_ALPHA,[sg]:n.ONE_MINUS_DST_COLOR,[Fa]:n.ONE_MINUS_DST_ALPHA,[og]:n.CONSTANT_COLOR,[ag]:n.ONE_MINUS_CONSTANT_COLOR,[lg]:n.CONSTANT_ALPHA,[cg]:n.ONE_MINUS_CONSTANT_ALPHA};function Be(F,xe,fe,ze,Ce,Ue,ke,nt,Y,Ie){if(F===si){m===!0&&(we(n.BLEND),m=!1);return}if(m===!1&&(ge(n.BLEND),m=!0),F!==Dc){if(F!==g||Ie!==L){if((b!==Si||S!==Si)&&(n.blendEquation(n.FUNC_ADD),b=Si,S=Si),Ie)switch(F){case Hi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gf:n.blendFunc(n.ONE,n.ONE);break;case xf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:lt("WebGLState: Invalid blending: ",F);break}else switch(F){case Hi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gf:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case xf:lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yf:lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:lt("WebGLState: Invalid blending: ",F);break}M=null,y=null,T=null,_=null,w.set(0,0,0),D=0,g=F,L=Ie}return}Ce=Ce||xe,Ue=Ue||fe,ke=ke||ze,(xe!==b||Ce!==S)&&(n.blendEquationSeparate(ue[xe],ue[Ce]),b=xe,S=Ce),(fe!==M||ze!==y||Ue!==T||ke!==_)&&(n.blendFuncSeparate(Me[fe],Me[ze],Me[Ue],Me[ke]),M=fe,y=ze,T=Ue,_=ke),(nt.equals(w)===!1||Y!==D)&&(n.blendColor(nt.r,nt.g,nt.b,Y),w.copy(nt),D=Y),g=F,L=!1}function Ne(F,xe){F.side===Dt?we(n.CULL_FACE):ge(n.CULL_FACE);let fe=F.side===bn;xe&&(fe=!fe),qe(fe),F.blending===Hi&&F.transparent===!1?Be(si):Be(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let ze=F.stencilWrite;a.setTest(ze),ze&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),re(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function qe(F){z!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),z=F)}function Je(F){F!==$m?(ge(n.CULL_FACE),F!==W&&(F===mf?n.cullFace(n.BACK):F===Ym?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),W=F}function at(F){F!==k&&(q&&n.lineWidth(F),k=F)}function re(F,xe,fe){F?(ge(n.POLYGON_OFFSET_FILL),(N!==xe||G!==fe)&&(N=xe,G=fe,o.getReversed()&&(xe=-xe,fe=-fe),n.polygonOffset(xe,fe))):we(n.POLYGON_OFFSET_FILL)}function He(F){F?ge(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function Oe(F){F===void 0&&(F=n.TEXTURE0+j-1),V!==F&&(n.activeTexture(F),V=F)}function me(F,xe,fe){fe===void 0&&(V===null?fe=n.TEXTURE0+j-1:fe=V);let ze=ee[fe];ze===void 0&&(ze={type:void 0,texture:void 0},ee[fe]=ze),(ze.type!==F||ze.texture!==xe)&&(V!==fe&&(n.activeTexture(fe),V=fe),n.bindTexture(F,xe||ne[F]),ze.type=F,ze.texture=xe)}function A(){let F=ee[V];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function J(){try{n.compressedTexImage2D(...arguments)}catch(F){lt("WebGLState:",F)}}function te(){try{n.compressedTexImage3D(...arguments)}catch(F){lt("WebGLState:",F)}}function Ae(){try{n.texSubImage2D(...arguments)}catch(F){lt("WebGLState:",F)}}function $(){try{n.texSubImage3D(...arguments)}catch(F){lt("WebGLState:",F)}}function pe(){try{n.compressedTexSubImage2D(...arguments)}catch(F){lt("WebGLState:",F)}}function ve(){try{n.compressedTexSubImage3D(...arguments)}catch(F){lt("WebGLState:",F)}}function Ee(){try{n.texStorage2D(...arguments)}catch(F){lt("WebGLState:",F)}}function C(){try{n.texStorage3D(...arguments)}catch(F){lt("WebGLState:",F)}}function E(){try{n.texImage2D(...arguments)}catch(F){lt("WebGLState:",F)}}function X(){try{n.texImage3D(...arguments)}catch(F){lt("WebGLState:",F)}}function Se(F){return h[F]!==void 0?h[F]:n.getParameter(F)}function he(F,xe){h[F]!==xe&&(n.pixelStorei(F,xe),h[F]=xe)}function ae(F){K.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),K.copy(F))}function ye(F){ce.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),ce.copy(F))}function se(F,xe){let fe=c.get(xe);fe===void 0&&(fe=new WeakMap,c.set(xe,fe));let ze=fe.get(F);ze===void 0&&(ze=n.getUniformBlockIndex(xe,F.name),n.uniformBlockBinding(xe,ze,ze),fe.set(F,ze))}function de(F,xe,fe){let Ce=c.get(xe).get(F);l[Ce]!==fe&&(n.bindBufferBase(n.UNIFORM_BUFFER,Ce,fe),l[Ce]=fe)}function Le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},V=null,ee={},f={},l={},d=new WeakMap,p=[],x=null,m=!1,g=null,b=null,M=null,y=null,S=null,T=null,_=null,w=new Ke(0,0,0),D=0,L=!1,z=null,W=null,k=null,N=null,G=null,K.set(0,0,n.canvas.width,n.canvas.height),ce.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ge,disable:we,bindFramebuffer:Ye,drawBuffers:Fe,useProgram:Xe,setBlending:Be,setMaterial:Ne,setFlipSided:qe,setCullFace:Je,setLineWidth:at,setPolygonOffset:re,setScissorTest:He,activeTexture:Oe,bindTexture:me,unbindTexture:A,compressedTexImage2D:J,compressedTexImage3D:te,texImage2D:E,texImage3D:X,pixelStorei:he,getParameter:Se,updateUBOMapping:se,uniformBlockBinding:de,texStorage2D:Ee,texStorage3D:C,texSubImage2D:Ae,texSubImage3D:$,compressedTexSubImage2D:pe,compressedTexSubImage3D:ve,scissor:ae,viewport:ye,reset:Le}}function xw(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,u=new WeakMap,h=new Set,f,d=new WeakMap,p=new Set,x=new FinalizationRegistry(C=>p.delete(C)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,E){return m?new OffscreenCanvas(C,E):ao("canvas")}function b(C,E,X){let Se=1,he=Ee(C);if((he.width>X||he.height>X)&&(Se=X/Math.max(he.width,he.height)),Se<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ae=Math.floor(Se*he.width),ye=Math.floor(Se*he.height);f===void 0&&(f=g(ae,ye));let se=E?g(ae,ye):f;return se.width=ae,se.height=ye,se.getContext("2d").drawImage(C,0,0,ae,ye),it("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+ae+"x"+ye+")."),se}else return"data"in C&&it("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),C;return C}function M(C){return C.generateMipmaps}function y(C){n.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(C,E,X,Se,he,ae=!1){if(C!==null){if(n[C]!==void 0)return n[C];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ye;Se&&(ye=e.get("EXT_texture_norm16"),ye||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let se=E;if(E===n.RED&&(X===n.FLOAT&&(se=n.R32F),X===n.HALF_FLOAT&&(se=n.R16F),X===n.UNSIGNED_BYTE&&(se=n.R8),X===n.UNSIGNED_SHORT&&ye&&(se=ye.R16_EXT),X===n.SHORT&&ye&&(se=ye.R16_SNORM_EXT)),E===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(se=n.R8UI),X===n.UNSIGNED_SHORT&&(se=n.R16UI),X===n.UNSIGNED_INT&&(se=n.R32UI),X===n.BYTE&&(se=n.R8I),X===n.SHORT&&(se=n.R16I),X===n.INT&&(se=n.R32I)),E===n.RG&&(X===n.FLOAT&&(se=n.RG32F),X===n.HALF_FLOAT&&(se=n.RG16F),X===n.UNSIGNED_BYTE&&(se=n.RG8),X===n.UNSIGNED_SHORT&&ye&&(se=ye.RG16_EXT),X===n.SHORT&&ye&&(se=ye.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(se=n.RG8UI),X===n.UNSIGNED_SHORT&&(se=n.RG16UI),X===n.UNSIGNED_INT&&(se=n.RG32UI),X===n.BYTE&&(se=n.RG8I),X===n.SHORT&&(se=n.RG16I),X===n.INT&&(se=n.RG32I)),E===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(se=n.RGB8UI),X===n.UNSIGNED_SHORT&&(se=n.RGB16UI),X===n.UNSIGNED_INT&&(se=n.RGB32UI),X===n.BYTE&&(se=n.RGB8I),X===n.SHORT&&(se=n.RGB16I),X===n.INT&&(se=n.RGB32I)),E===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(se=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(se=n.RGBA16UI),X===n.UNSIGNED_INT&&(se=n.RGBA32UI),X===n.BYTE&&(se=n.RGBA8I),X===n.SHORT&&(se=n.RGBA16I),X===n.INT&&(se=n.RGBA32I)),E===n.RGB&&(X===n.UNSIGNED_SHORT&&ye&&(se=ye.RGB16_EXT),X===n.SHORT&&ye&&(se=ye.RGB16_SNORM_EXT),X===n.UNSIGNED_INT_5_9_9_9_REV&&(se=n.RGB9_E5),X===n.UNSIGNED_INT_10F_11F_11F_REV&&(se=n.R11F_G11F_B10F)),E===n.RGBA){let de=ae?oa:yt.getTransfer(he);X===n.FLOAT&&(se=n.RGBA32F),X===n.HALF_FLOAT&&(se=n.RGBA16F),X===n.UNSIGNED_BYTE&&(se=de===Lt?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT&&ye&&(se=ye.RGBA16_EXT),X===n.SHORT&&ye&&(se=ye.RGBA16_SNORM_EXT),X===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)}return(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function _(C,E){let X;return C?E===null||E===Ei||E===yr?X=n.DEPTH24_STENCIL8:E===Hn?X=n.DEPTH32F_STENCIL8:E===wo&&(X=n.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ei||E===yr?X=n.DEPTH_COMPONENT24:E===Hn?X=n.DEPTH_COMPONENT32F:E===wo&&(X=n.DEPTH_COMPONENT16),X}function w(C,E){return M(C)===!0||C.isFramebufferTexture&&C.minFilter!==Xt&&C.minFilter!==qt?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function D(C){let E=new WeakRef(C);i.get(C).__ref=E,p.add(E),x.register(C,E,E)}function L(C){let E=i.get(C).__ref;E!==void 0&&(p.delete(E),x.unregister(E))}function z(C){k(C.target)}function W(C){N(C.target)}function k(C){C.removeEventListener("dispose",z),L(C),j(C),C.isVideoTexture&&u.delete(C),C.isHTMLTexture&&h.delete(C)}function N(C){C.removeEventListener("dispose",W),L(C),_e(C)}function G(){for(let C of p){let E=C.deref();E!==void 0&&(E.isRenderTarget===!0?N(E):k(E))}p.clear(),h.clear()}function j(C){let E=i.get(C);if(E.__webglInit===void 0)return;let X=C.source,Se=d.get(X);if(Se){let he=Se[E.__cacheKey];he.usedTimes--,he.usedTimes===0&&q(C),Object.keys(Se).length===0&&d.delete(X)}i.remove(C)}function q(C){let E=i.get(C);n.deleteTexture(E.__webglTexture);let X=C.source,Se=d.get(X);delete Se[E.__cacheKey],o.memory.textures--}function _e(C){let E=i.get(C);E.__depthDisposeCallback&&E.__depthDisposeCallback();let X=C.depthTexture;if(X&&X.renderTarget===C&&k(X),C.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(E.__webglFramebuffer[he]))for(let ae=0;ae<E.__webglFramebuffer[he].length;ae++)n.deleteFramebuffer(E.__webglFramebuffer[he][ae]);else n.deleteFramebuffer(E.__webglFramebuffer[he]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[he])}else{if(Array.isArray(E.__webglFramebuffer))for(let he=0;he<E.__webglFramebuffer.length;he++)n.deleteFramebuffer(E.__webglFramebuffer[he]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let he=0;he<E.__webglColorRenderbuffer.length;he++)E.__webglColorRenderbuffer[he]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[he]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let Se=C.textures;for(let he=0,ae=Se.length;he<ae;he++){let ye=i.get(Se[he]);ye.__webglTexture&&(n.deleteTexture(ye.__webglTexture),o.memory.textures--),i.remove(Se[he])}i.remove(C)}let Z=0;function V(){Z=0}function ee(){return Z}function be(C){Z=C}function Re(){let C=Z;return C>=s.maxTextures&&it("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),Z+=1,C}function K(C){let E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.mipmapsAutoUpdate),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function ce(C,E){let X=i.get(C);if(C.isVideoTexture&&pe(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&X.__version!==C.version){let Se=C.image;if(Se===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(X,C,E);return}}else C.isExternalTexture&&(X.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+E)}function B(C,E){let X=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){Ne(X,C,E);return}else C.isExternalTexture&&(X.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+E)}function ne(C,E){let X=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){Ne(X,C,E);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+E)}function ge(C,E){let X=i.get(C);if(C.version>0&&X.__version!==C.version){qe(X,C,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+E)}let we={[_i]:n.REPEAT,[ti]:n.CLAMP_TO_EDGE,[ro]:n.MIRRORED_REPEAT},Ye={[Xt]:n.NEAREST,[Fc]:n.NEAREST_MIPMAP_NEAREST,[xr]:n.NEAREST_MIPMAP_LINEAR,[qt]:n.LINEAR,[Eo]:n.LINEAR_MIPMAP_NEAREST,[oi]:n.LINEAR_MIPMAP_LINEAR},Fe={[xg]:n.NEVER,[Of]:n.ALWAYS,[yg]:n.LESS,[Df]:n.LEQUAL,[_g]:n.EQUAL,[Nf]:n.GEQUAL,[vg]:n.GREATER,[bg]:n.NOTEQUAL};function Xe(C,E){if(E.type===Hn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===qt||E.magFilter===Eo||E.magFilter===xr||E.magFilter===oi||E.minFilter===qt||E.minFilter===Eo||E.minFilter===xr||E.minFilter===oi)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,we[E.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,we[E.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,we[E.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Ye[E.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Ye[E.minFilter]),E.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Fe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Xt||E.minFilter!==xr&&E.minFilter!==oi||E.type===Hn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ue(C,E){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",z),D(E));let Se=E.source,he=d.get(Se);he===void 0&&(he={},d.set(Se,he));let ae=K(E);if(ae!==C.__cacheKey){he[ae]===void 0&&(he[ae]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),he[ae].usedTimes++;let ye=he[C.__cacheKey];ye!==void 0&&(he[C.__cacheKey].usedTimes--,ye.usedTimes===0&&q(E)),C.__cacheKey=ae,C.__webglTexture=he[ae].texture}return X}function Me(C,E,X){return Math.floor(Math.floor(C/X)/E)}function Be(C,E,X,Se){let ae=C.updateRanges;if(ae.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,X,Se,E.data);else{ae.sort((F,xe)=>F.start-xe.start);let ye=0;for(let F=1;F<ae.length;F++){let xe=ae[ye],fe=ae[F],ze=xe.start+xe.count,Ce=Me(fe.start,E.width,4),Ue=Me(xe.start,E.width,4);fe.start<=ze+1&&Ce===Ue&&Me(fe.start+fe.count-1,E.width,4)===Ce?xe.count=Math.max(xe.count,fe.start+fe.count-xe.start):(++ye,ae[ye]=fe)}ae.length=ye+1;let se=t.getParameter(n.UNPACK_ROW_LENGTH),de=t.getParameter(n.UNPACK_SKIP_PIXELS),Le=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let F=0,xe=ae.length;F<xe;F++){let fe=ae[F],ze=Math.floor(fe.start/4),Ce=Math.ceil(fe.count/4),Ue=ze%E.width,ke=Math.floor(ze/E.width),nt=Ce,Y=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ue),t.pixelStorei(n.UNPACK_SKIP_ROWS,ke),t.texSubImage2D(n.TEXTURE_2D,0,Ue,ke,nt,Y,X,Se,E.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,se),t.pixelStorei(n.UNPACK_SKIP_PIXELS,de),t.pixelStorei(n.UNPACK_SKIP_ROWS,Le)}}function Ne(C,E,X){let Se=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Se=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Se=n.TEXTURE_3D);let he=ue(C,E),ae=E.source;t.bindTexture(Se,C.__webglTexture,n.TEXTURE0+X);let ye=i.get(ae);if(ae.version!==ye.__version||he===!0){if(t.activeTexture(n.TEXTURE0+X),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let Y=yt.getPrimaries(yt.workingColorSpace),Ie=E.colorSpace===wi?null:yt.getPrimaries(E.colorSpace),rt=E.colorSpace===wi||Y===Ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let de=b(E.image,!1,s.maxTextureSize);de=ve(E,de);let Le=r.convert(E.format,E.colorSpace),F=r.convert(E.type),xe=T(E.internalFormat,Le,F,E.normalized,E.colorSpace,E.isVideoTexture);Xe(Se,E);let fe,ze=E.mipmaps,Ce=E.isVideoTexture!==!0,Ue=ye.__version===void 0||he===!0,ke=ae.dataReady,nt=w(E,de);if(E.isDepthTexture)xe=_(E.format===ws,E.type),Ue&&(Ce?t.texStorage2D(n.TEXTURE_2D,1,xe,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,xe,de.width,de.height,0,Le,F,null));else if(E.isDataTexture)if(ze.length>0){Ce&&Ue&&t.texStorage2D(n.TEXTURE_2D,nt,xe,ze[0].width,ze[0].height);for(let Y=0,Ie=ze.length;Y<Ie;Y++)fe=ze[Y],Ce?ke&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,fe.width,fe.height,Le,F,fe.data):t.texImage2D(n.TEXTURE_2D,Y,xe,fe.width,fe.height,0,Le,F,fe.data);E.generateMipmaps=!1}else Ce?(Ue&&t.texStorage2D(n.TEXTURE_2D,nt,xe,de.width,de.height),ke&&Be(E,de,Le,F)):t.texImage2D(n.TEXTURE_2D,0,xe,de.width,de.height,0,Le,F,de.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ce&&Ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,nt,xe,ze[0].width,ze[0].height,de.depth);for(let Y=0,Ie=ze.length;Y<Ie;Y++)if(fe=ze[Y],E.format!==Mn)if(Le!==null)if(Ce){if(ke)if(E.layerUpdates.size>0){let rt=Xf(fe.width,fe.height,E.format,E.type);for(let Pe of E.layerUpdates){let dt=fe.data.subarray(Pe*rt/fe.data.BYTES_PER_ELEMENT,(Pe+1)*rt/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,Pe,fe.width,fe.height,1,Le,dt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,fe.width,fe.height,de.depth,Le,fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,xe,fe.width,fe.height,de.depth,0,fe.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?ke&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,fe.width,fe.height,de.depth,Le,F,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Y,xe,fe.width,fe.height,de.depth,0,Le,F,fe.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Ce&&Ue&&t.texStorage2D(n.TEXTURE_2D,nt,xe,ze[0].width,ze[0].height);for(let Y=0,Ie=ze.length;Y<Ie;Y++)fe=ze[Y],E.format!==Mn?Le!==null?Ce?ke&&t.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,fe.width,fe.height,Le,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,Y,xe,fe.width,fe.height,0,fe.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?ke&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,fe.width,fe.height,Le,F,fe.data):t.texImage2D(n.TEXTURE_2D,Y,xe,fe.width,fe.height,0,Le,F,fe.data)}else if(E.isDataArrayTexture)if(Ce){if(Ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,nt,xe,de.width,de.height,de.depth),ke)if(E.layerUpdates.size>0){let Y=Xf(de.width,de.height,E.format,E.type);for(let Ie of E.layerUpdates){let rt=de.data.subarray(Ie*Y/de.data.BYTES_PER_ELEMENT,(Ie+1)*Y/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ie,de.width,de.height,1,Le,F,rt)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Le,F,de.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,xe,de.width,de.height,de.depth,0,Le,F,de.data);else if(E.isData3DTexture)Ce?(Ue&&t.texStorage3D(n.TEXTURE_3D,nt,xe,de.width,de.height,de.depth),ke&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Le,F,de.data)):t.texImage3D(n.TEXTURE_3D,0,xe,de.width,de.height,de.depth,0,Le,F,de.data);else if(E.isFramebufferTexture){if(Ue)if(Ce)t.texStorage2D(n.TEXTURE_2D,nt,xe,de.width,de.height);else{let Y=de.width,Ie=de.height;for(let rt=0;rt<nt;rt++)t.texImage2D(n.TEXTURE_2D,rt,xe,Y,Ie,0,Le,F,null),Y>>=1,Ie>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){let Y=n.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),de.parentNode!==Y){Y.appendChild(de),h.add(E),Y.onpaint=Ie=>{let rt=Ie.changedElements;for(let Pe of h)rt.includes(Pe.image)&&(Pe.needsUpdate=!0)},Y.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,de);else{let rt=n.RGBA,Pe=n.RGBA,dt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,rt,Pe,dt,de)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ze.length>0){if(Ce&&Ue){let Y=Ee(ze[0]);t.texStorage2D(n.TEXTURE_2D,nt,xe,Y.width,Y.height)}for(let Y=0,Ie=ze.length;Y<Ie;Y++)fe=ze[Y],Ce?ke&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,Le,F,fe):t.texImage2D(n.TEXTURE_2D,Y,xe,Le,F,fe);E.generateMipmaps=!1}else if(Ce){if(Ue){let Y=Ee(de);t.texStorage2D(n.TEXTURE_2D,nt,xe,Y.width,Y.height)}ke&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Le,F,de)}else t.texImage2D(n.TEXTURE_2D,0,xe,Le,F,de);M(E)&&E.mipmapsAutoUpdate===!0&&y(Se),ye.__version=ae.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function qe(C,E,X){if(E.image.length!==6)return;let Se=ue(C,E),he=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+X);let ae=i.get(he);if(he.version!==ae.__version||Se===!0){t.activeTexture(n.TEXTURE0+X);let ye=yt.getPrimaries(yt.workingColorSpace),se=E.colorSpace===wi?null:yt.getPrimaries(E.colorSpace),de=E.colorSpace===wi||ye===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let Le=E.isCompressedTexture||E.image[0].isCompressedTexture,F=E.image[0]&&E.image[0].isDataTexture,xe=[];for(let Pe=0;Pe<6;Pe++)!Le&&!F?xe[Pe]=b(E.image[Pe],!0,s.maxCubemapSize):xe[Pe]=F?E.image[Pe].image:E.image[Pe],xe[Pe]=ve(E,xe[Pe]);let fe=xe[0],ze=r.convert(E.format,E.colorSpace),Ce=r.convert(E.type),Ue=T(E.internalFormat,ze,Ce,E.normalized,E.colorSpace),ke=E.isVideoTexture!==!0,nt=ae.__version===void 0||Se===!0,Y=he.dataReady,Ie=w(E,fe);Xe(n.TEXTURE_CUBE_MAP,E);let rt;if(E.isDepthTexture){if(Ue=_(E.format===ws,E.type),nt)if(ke)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,Ue,fe.width,fe.height);else for(let Pe=0;Pe<6;Pe++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ue,fe.width,fe.height,0,ze,Ce,null)}else if(Le){ke&&nt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,Ue,fe.width,fe.height);for(let Pe=0;Pe<6;Pe++){rt=xe[Pe].mipmaps;for(let dt=0;dt<rt.length;dt++){let Et=rt[dt];E.format!==Mn?ze!==null?ke?Y&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,dt,0,0,Et.width,Et.height,ze,Et.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,dt,Ue,Et.width,Et.height,0,Et.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,dt,0,0,Et.width,Et.height,ze,Ce,Et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,dt,Ue,Et.width,Et.height,0,ze,Ce,Et.data)}}}else{if(rt=E.mipmaps,ke&&nt){rt.length>0&&Ie++;let Pe=Ee(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,Ue,Pe.width,Pe.height)}for(let Pe=0;Pe<6;Pe++)if(F){ke?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,xe[Pe].width,xe[Pe].height,ze,Ce,xe[Pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ue,xe[Pe].width,xe[Pe].height,0,ze,Ce,xe[Pe].data);for(let dt=0;dt<rt.length;dt++){let Jt=rt[dt].image[Pe].image;ke?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,dt+1,0,0,Jt.width,Jt.height,ze,Ce,Jt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,dt+1,Ue,Jt.width,Jt.height,0,ze,Ce,Jt.data)}}else{ke?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,ze,Ce,xe[Pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ue,ze,Ce,xe[Pe]);for(let dt=0;dt<rt.length;dt++){let Et=rt[dt];ke?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,dt+1,0,0,ze,Ce,Et.image[Pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,dt+1,Ue,ze,Ce,Et.image[Pe])}}}M(E)&&E.mipmapsAutoUpdate===!0&&y(n.TEXTURE_CUBE_MAP),ae.__version=he.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Je(C,E,X,Se,he,ae){let ye=r.convert(X.format,X.colorSpace),se=r.convert(X.type),de=T(X.internalFormat,ye,se,X.normalized,X.colorSpace),Le=i.get(E),F=i.get(X);if(F.__renderTarget=E,!Le.__hasExternalTextures){let xe=Math.max(1,E.width>>ae),fe=Math.max(1,E.height>>ae);he===n.TEXTURE_3D||he===n.TEXTURE_2D_ARRAY?t.texImage3D(he,ae,de,xe,fe,E.depth,0,ye,se,null):t.texImage2D(he,ae,de,xe,fe,0,ye,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),$(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Se,he,F.__webglTexture,0,Ae(E)):(he===n.TEXTURE_2D||he>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Se,he,F.__webglTexture,ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function at(C,E,X){if(n.bindRenderbuffer(n.RENDERBUFFER,C),E.depthBuffer){let Se=E.depthTexture,he=Se&&Se.isDepthTexture?Se.type:null,ae=_(E.stencilBuffer,he),ye=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;$(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae(E),ae,E.width,E.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae(E),ae,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ae,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,C)}else{let Se=E.textures;for(let he=0;he<Se.length;he++){let ae=Se[he],ye=r.convert(ae.format,ae.colorSpace),se=r.convert(ae.type),de=T(ae.internalFormat,ye,se,ae.normalized,ae.colorSpace);$(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae(E),de,E.width,E.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae(E),de,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,de,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function re(C,E,X){let Se=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let he=i.get(E.depthTexture);he.__renderTarget=E;let ae=Se?E.depthTexture.image[0]:E.depthTexture.image;(!he.__webglTexture||ae.width!==E.width||ae.height!==E.height)&&(ae.width=E.width,ae.height=E.height,E.depthTexture.needsUpdate=!0),Se?ge(E.depthTexture,0):ce(E.depthTexture,0);let ye=he.__webglTexture,se=Ae(E),de=Se?n.TEXTURE_CUBE_MAP_POSITIVE_X+X:n.TEXTURE_2D,Le=E.depthTexture.format===ws?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===ms)$(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Le,de,ye,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,Le,de,ye,0);else if(E.depthTexture.format===ws)$(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Le,de,ye,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,Le,de,ye,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function He(C){let E=i.get(C),X=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){let Se=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Se){let he=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Se.removeEventListener("dispose",he)};Se.addEventListener("dispose",he),E.__depthDisposeCallback=he}E.__boundDepthTexture=Se}if(C.depthTexture&&!E.__autoAllocateDepthBuffer)if(X)for(let Se=0;Se<6;Se++)re(E.__webglFramebuffer[Se],C,Se);else C.texture.mipmaps.length>0?re(E.__webglFramebuffer[0],C,0):re(E.__webglFramebuffer,C,0);else if(X){E.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[Se]),E.__webglDepthbuffer[Se]===void 0)E.__webglDepthbuffer[Se]=n.createRenderbuffer(),at(E.__webglDepthbuffer[Se],C,!1);else{let he=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer[Se];n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,ae)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),at(E.__webglDepthbuffer,C,!1);else{let he=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,ae)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(C,E,X){let Se=i.get(C);E!==void 0&&Je(Se.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&He(C)}function me(C){let E=C.texture,X=i.get(C),Se=i.get(E);C.addEventListener("dispose",W),D(C);let he=C.textures,ae=C.isWebGLCubeRenderTarget===!0,ye=he.length>1;if(ye||(Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture()),Se.__version=E.version,o.memory.textures++),ae){X.__webglFramebuffer=[];for(let se=0;se<6;se++)if(E.mipmaps.length>0){X.__webglFramebuffer[se]=[];for(let de=0;de<E.mipmaps.length;de++)X.__webglFramebuffer[se][de]=n.createFramebuffer()}else X.__webglFramebuffer[se]=n.createFramebuffer()}else{if(E.mipmaps.length>0){X.__webglFramebuffer=[];for(let se=0;se<E.mipmaps.length;se++)X.__webglFramebuffer[se]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(ye)for(let se=0,de=he.length;se<de;se++){let Le=i.get(he[se]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&$(C)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let se=0;se<he.length;se++){let de=he[se];X.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[se]);let Le=r.convert(de.format,de.colorSpace),F=r.convert(de.type),xe=T(de.internalFormat,Le,F,de.normalized,de.colorSpace,C.isXRRenderTarget===!0),fe=Ae(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,xe,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,X.__webglColorRenderbuffer[se])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),at(X.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){t.bindTexture(n.TEXTURE_CUBE_MAP,Se.__webglTexture),Xe(n.TEXTURE_CUBE_MAP,E);for(let se=0;se<6;se++)if(E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)Je(X.__webglFramebuffer[se][de],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,de);else Je(X.__webglFramebuffer[se],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);M(E)?y(n.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(ye){for(let se=0,de=he.length;se<de;se++){let Le=he[se],F=i.get(Le),xe=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xe=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(xe,F.__webglTexture),Xe(xe,Le),Je(X.__webglFramebuffer,C,Le,n.COLOR_ATTACHMENT0+se,xe,0),M(Le)&&y(xe)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(se=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,Se.__webglTexture),Xe(se,E),E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)Je(X.__webglFramebuffer[de],C,E,n.COLOR_ATTACHMENT0,se,de);else Je(X.__webglFramebuffer,C,E,n.COLOR_ATTACHMENT0,se,0);M(E)?y(se):E.mipmaps.length>0&&n.texParameteri(se,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&He(C)}function A(C){let E=C.textures;for(let X=0,Se=E.length;X<Se;X++){let he=E[X];if(M(he)&&he.mipmapsAutoUpdate===!0){let ae=S(C),ye=i.get(he).__webglTexture;t.bindTexture(ae,ye),y(ae),t.unbindTexture()}}}let J=[];function te(C){if(C.samples>0){if($(C)===!1){let E=C.textures,X=C.width,Se=C.height,he=n.COLOR_BUFFER_BIT,ae=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(C),se=E.length>1;if(se)for(let Le=0;Le<E.length;Le++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Le=0;Le<E.length;Le++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(he|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(he|=n.STENCIL_BUFFER_BIT)),se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Le]);let F=i.get(E[Le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,F,0)}n.blitFramebuffer(0,0,X,Se,0,0,X,Se,he,n.NEAREST),l===!0&&(J.length=0,J.push(n.COLOR_ATTACHMENT0+Le),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&J.push(ae),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),se)for(let Le=0;Le<E.length;Le++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Le]);let F=i.get(E[Le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,F,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let E=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Ae(C){return Math.min(s.maxSamples,C.samples)}function $(C){let E=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function pe(C){let E=o.render.frame;u.get(C)!==E&&(u.set(C,E),C.update())}function ve(C,E){let X=C.colorSpace,Se=C.format,he=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||X!==zn&&X!==wi&&(yt.getTransfer(X)===Lt?(Se!==Mn||he!==Ln)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):lt("WebGLTextures: Unsupported texture color space:",X)),E}function Ee(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Re,this.resetTextureUnits=V,this.getTextureUnits=ee,this.setTextureUnits=be,this.setTexture2D=ce,this.setTexture2DArray=B,this.setTexture3D=ne,this.setTextureCube=ge,this.rebindTextures=Oe,this.setupRenderTarget=me,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=$,this.dispose=G}function yw(n,e){function t(i,s=wi){let r,o=yt.getTransfer(s);if(i===Ln)return n.UNSIGNED_BYTE;if(i===zc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===kc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Rf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Cf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Tf)return n.BYTE;if(i===Af)return n.SHORT;if(i===wo)return n.UNSIGNED_SHORT;if(i===Bc)return n.INT;if(i===Ei)return n.UNSIGNED_INT;if(i===Hn)return n.FLOAT;if(i===Xn)return n.HALF_FLOAT;if(i===Pf)return n.ALPHA;if(i===If)return n.RGB;if(i===Mn)return n.RGBA;if(i===ms)return n.DEPTH_COMPONENT;if(i===ws)return n.DEPTH_STENCIL;if(i===Hc)return n.RED;if(i===Vc)return n.RED_INTEGER;if(i===Ys)return n.RG;if(i===Gc)return n.RG_INTEGER;if(i===Wc)return n.RGBA_INTEGER;if(i===Ba||i===za||i===ka||i===Ha)if(o===Lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ba)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ba)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xc||i===qc||i===$c||i===Yc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Xc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$c)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Yc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Zc||i===Kc||i===Jc||i===jc||i===Qc||i===Va||i===eu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Zc||i===Kc)return o===Lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Jc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===jc)return r.COMPRESSED_R11_EAC;if(i===Qc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Va)return r.COMPRESSED_RG11_EAC;if(i===eu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===tu||i===nu||i===iu||i===su||i===ru||i===ou||i===au||i===lu||i===cu||i===uu||i===hu||i===fu||i===du||i===pu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===tu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===iu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===su)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ru)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ou)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===au)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===lu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===uu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===du)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mu||i===gu||i===xu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===mu)return o===Lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yu||i===_u||i===Ga||i===vu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===yu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===_u)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ga)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===yr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var _w=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vw=`
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

}`,ed=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new _a(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new xn({vertexShader:_w,fragmentShader:vw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new ii(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},td=class extends vi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,p=null,x=typeof XRWebGLBinding<"u",m=new ed,g={},b=t.getContextAttributes(),M=null,y=null,S=[],T=[],_=new Ze,w=null,D=null,L=new on;L.viewport=new bt;let z=new on;z.viewport=new bt;let W=[L,z],k=new Lc,N=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ce=S[K];return ce===void 0&&(ce=new ho,S[K]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(K){let ce=S[K];return ce===void 0&&(ce=new ho,S[K]=ce),ce.getGripSpace()},this.getHand=function(K){let ce=S[K];return ce===void 0&&(ce=new ho,S[K]=ce),ce.getHandSpace()};function j(K){let ce=T.indexOf(K.inputSource);if(ce===-1)return;let B=S[ce];B!==void 0&&(B.update(K.inputSource,K.frame,c||o),B.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",_e);for(let K=0;K<S.length;K++){let ce=T[K];ce!==null&&(T[K]=null,S[K].disconnect(ce))}N=null,G=null,m.reset();for(let K in g)delete g[K];if(e.setRenderTarget(M),d=null,f=null,h=null,s=null,y=null,Re.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(_.width,_.height,!1),D!==null){let K=D.camera;K.fov=D.fov,K.zoom=D.zoom,K.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",q),s.addEventListener("inputsourceschange",_e),b.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let B=null,ne=null,ge=null;b.depth&&(ge=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,B=b.stencil?ws:ms,ne=b.stencil?yr:Ei);let we={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(we),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new tn(f.textureWidth,f.textureHeight,{format:Mn,type:Ln,depthTexture:new _s(f.textureWidth,f.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let B={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,B),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new tn(d.framebufferWidth,d.framebufferHeight,{format:Mn,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Re.setContext(s),Re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function _e(K){for(let ce=0;ce<K.removed.length;ce++){let B=K.removed[ce],ne=T.indexOf(B);ne>=0&&(T[ne]=null,S[ne].disconnect(B))}for(let ce=0;ce<K.added.length;ce++){let B=K.added[ce],ne=T.indexOf(B);if(ne===-1){for(let we=0;we<S.length;we++)if(we>=T.length){T.push(B),ne=we;break}else if(T[we]===null){T[we]=B,ne=we;break}if(ne===-1)break}let ge=S[ne];ge&&ge.connect(B)}}function Z(K,ce){ce===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ce.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ce=K.near,B=K.far;m.texture!==null&&(m.depthNear>0&&(ce=m.depthNear),m.depthFar>0&&(B=m.depthFar)),k.near=z.near=L.near=ce,k.far=z.far=L.far=B,(N!==k.near||G!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),N=k.near,G=k.far),k.layers.mask=K.layers.mask|6,L.layers.mask=k.layers.mask&-5,z.layers.mask=k.layers.mask&-3;let ne=K.parent,ge=k.cameras;Z(k,ne);for(let we=0;we<ge.length;we++)Z(ge[we],ne);k.projectionMatrix.copy(L.projectionMatrix),k.projectionMatrixInverse.copy(L.projectionMatrixInverse),D===null&&K.isPerspectiveCamera&&(D={camera:K,fov:K.fov,zoom:K.zoom}),V(K,k,ne)};function V(K,ce,B){B===null?K.matrix.copy(ce.matrixWorld):(K.matrix.copy(B.matrixWorld),K.matrix.invert(),K.matrix.multiply(ce.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ce.projectionMatrix),K.projectionMatrixInverse.copy(ce.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=fr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(K){return g[K]};let ee=null;function be(K,ce){if(u=ce.getViewerPose(c||o),p=ce,u!==null){let B=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let ne=!1;B.length!==k.cameras.length&&(k.cameras.length=0,ne=!0);for(let Fe=0;Fe<B.length;Fe++){let Xe=B[Fe],ue=null;if(d!==null)ue=d.getViewport(Xe);else{let Be=h.getViewSubImage(f,Xe);ue=Be.viewport,Fe===0&&(e.setRenderTargetTextures(y,Be.colorTexture,Be.depthStencilTexture),e.setRenderTarget(y))}let Me=W[Fe];Me===void 0&&(Me=new on,Me.layers.enable(Fe),Me.viewport=new bt,W[Fe]=Me),Me.matrix.fromArray(Xe.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(Xe.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(ue.x,ue.y,ue.width,ue.height),Fe===0&&(k.matrix.copy(Me.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),ne===!0&&k.cameras.push(Me)}let ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=i.getBinding();let Fe=h.getDepthInformation(B[0]);Fe&&Fe.isValid&&Fe.texture&&m.init(Fe,s.renderState)}if(ge&&ge.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let Fe=0;Fe<B.length;Fe++){let Xe=B[Fe].camera;if(Xe){let ue=g[Xe];ue||(ue=new _a,g[Xe]=ue);let Me=h.getCameraImage(Xe);ue.sourceTexture=Me}}}}for(let B=0;B<S.length;B++){let ne=T[B],ge=S[B];ne!==null&&ge!==void 0&&ge.update(ne,ce,c||o)}ee&&ee(K,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),p=null}let Re=new Jg;Re.setAnimationLoop(be),this.setAnimationLoop=function(K){ee=K},this.dispose=function(){}}},bw=new ot,a0=new ut;a0.set(-1,0,0,0,1,0,0,0,1);function Mw(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Vf(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,b,M,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),h(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,b,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===bn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===bn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let b=e.get(g),M=b.envMap,y=b.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(bw.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(a0),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,b,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*b,m.scale.value=M*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,b){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===bn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let b=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Sw(n,e,t,i){let s={},r={};function o(b,M){let y=M.program;i.uniformBlockBinding(b,y,s[b.id])}function a(b,M){let y=s[b.id];y===void 0&&(p(b),y=l(b),s[b.id]=y,b.addEventListener("dispose",m));let S=M.program;i.updateUBOMapping(b,S);let T=e.render.frame;r[b.id]!==T&&(c(b),r[b.id]=T)}function l(b){let M=n.createBuffer(),y=b.__size,S=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,y,S),n.bindBuffer(n.UNIFORM_BUFFER,null),M}function c(b){let M=s[b.id],y=b.uniforms,S=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let T=0,_=y.length;T<_;T++){let w=y[T];if(Array.isArray(w))for(let D=0,L=w.length;D<L;D++)u(w[D],T,D,S);else u(w,T,0,S)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(b,M,y,S){if(f(b,M,y,S)===!0){let T=b.__offset,_=b.value;if(Array.isArray(_)){let w=0;for(let D=0;D<_.length;D++){let L=_[D],z=x(L,!0);h(L,b.__data,w),w+=z.storage/Float32Array.BYTES_PER_ELEMENT}}else h(_,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,b.__data)}}function h(b,M,y){typeof b=="number"||typeof b=="boolean"?M[y]=b:b.isMatrix3?(M[y]=b.elements[0],M[y+1]=b.elements[1],M[y+2]=b.elements[2],M[y+3]=0,M[y+4]=b.elements[3],M[y+5]=b.elements[4],M[y+6]=b.elements[5],M[y+7]=0,M[y+8]=b.elements[6],M[y+9]=b.elements[7],M[y+10]=b.elements[8],M[y+11]=0):ArrayBuffer.isView(b)?M.set(b.subarray(0,M.length-y),y):b.toArray(M,y)}function f(b,M,y,S){let T=b.value,_=M+"_"+y;if(Array.isArray(T)){S[_]===void 0&&(S[_]=[]);let w=S[_],D=!1;for(let L=0;L<T.length;L++)d(T[L],w,L)===!0&&(D=!0);return D}return d(T,S,_)}function d(b,M,y){if(M[y]===void 0)return typeof b=="number"||typeof b=="boolean"?M[y]=b:ArrayBuffer.isView(b)?M[y]=b.slice():M[y]=b.clone(),!0;{let S=M[y];if(typeof b=="number"||typeof b=="boolean"){if(S!==b)return M[y]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(S.equals(b)===!1)return S.copy(b),!0}}return!1}function p(b){let M=b.uniforms,y=0,S=16;for(let _=0,w=M.length;_<w;_++){let D=Array.isArray(M[_])?M[_]:[M[_]];for(let L=0,z=D.length;L<z;L++){let W=D[L],k=Array.isArray(W.value)?W.value:[W.value],N=Array.isArray(M[_])||Array.isArray(W.value),G=y;for(let q=0,_e=k.length;q<_e;q++){let Z=k[q],V=x(Z,N),ee=y%S,be=ee%V.boundary,Re=ee+be;y+=be,Re!==0&&S-Re<V.storage&&(y+=S-Re),q===0&&(G=y),y+=V.storage}let j=W.type==="int"?Int32Array:W.type==="uint"?Uint32Array:Float32Array;W.__data=new j((y-G)/Float32Array.BYTES_PER_ELEMENT),W.__offset=G}}let T=y%S;return T>0&&(y+=S-T),b.__size=y,b.__cache={},this}function x(b,M){let y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=16,y.storage=48):b.isMatrix4?(y.boundary=16,y.storage=64):b.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(y.boundary=16,y.storage=b.byteLength):it("WebGLRenderer: Unsupported uniform value type.",b),M===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(b){let M=b.target;M.removeEventListener("dispose",m),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function g(){for(let b in s)n.deleteBuffer(s[b]);s={},r={}}return{bind:o,update:a,dispose:g}}var Ew=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gi=null;function ww(){return Gi===null&&(Gi=new mo(Ew,16,16,Ys,Xn),Gi.name="DFG_LUT",Gi.minFilter=qt,Gi.magFilter=qt,Gi.wrapS=ti,Gi.wrapT=ti,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}var Eu=class{constructor(e={}){let{canvas:t=Mg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Ln}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let x=d,m=new Set([Wc,Gc,Vc]),g=new Set([Ln,Ei,wo,yr,zc,kc]),b=new Uint32Array(4),M=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},S=null,T=null,_=[],w=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,z=!1,W=null,k=null,N=null,G=null;this._outputColorSpace=At;let j=0,q=0,_e=null,Z=-1,V=null,ee=new bt,be=new bt,Re=null,K=new Ke(0),ce=0,B=t.width,ne=t.height,ge=1,we=null,Ye=null,Fe=new bt(0,0,B,ne),Xe=new bt(0,0,B,ne),ue=!1,Me=new ks,Be=new _c,Ne=!1,qe=!1,Je=new ot,at=new I,re=new bt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Oe=!1;function me(){return _e===null?ge:1}let A=i;function J(R,H){return t.getContext(R,H)}let te,Ae,$,pe,ve,Ee,C,E,X,Se,he,ae,ye,se,de,Le,F,xe,fe,ze,Ce,Ue,ke;try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),A===null){let H="webgl2";if(A=J(H,R),A===null)throw J(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}nt()}catch(R){throw t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),lt("WebGLRenderer: "+R.message),R}function nt(){te=new US(A),te.init(),Ce=new yw(A,te),Ae=new wS(A,te,e,Ce),$=new gw(A,te),Ae.reversedDepthBuffer&&f&&$.buffers.depth.setReversed(!0),k=A.createFramebuffer(),N=A.createFramebuffer(),G=A.createFramebuffer(),pe=new zS(A),ve=new nw,Ee=new xw(A,te,$,ve,Ae,Ce,pe),C=new OS(L),E=new Hv(A),Ue=new SS(A,E),X=new FS(A,E,pe,Ue),Se=new HS(A,X,E,Ue,pe),xe=new kS(A,Ae,Ee),de=new TS(ve),he=new tw(L,C,te,Ae,Ue,de),ae=new Mw(L,ve),ye=new sw,se=new uw(te),F=new MS(L,C,$,Se,p,l),Le=new mw(L,Se,Ae),ke=new Sw(A,pe,Ae,$),fe=new ES(A,te,pe),ze=new BS(A,te,pe),pe.programs=he.programs,L.capabilities=Ae,L.extensions=te,L.properties=ve,L.renderLists=ye,L.shadowMap=Le,L.state=$,L.info=pe}x!==Ln&&(D=new GS(x,t.width,t.height,a,s,r));let Y=new td(L,A);this.xr=Y,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let R=te.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=te.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(R){R!==void 0&&(ge=R,this.setSize(B,ne,!1))},this.getSize=function(R){return R.set(B,ne)},this.setSize=function(R,H,le=!0){if(Y.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,ne=H,t.width=Math.floor(R*ge),t.height=Math.floor(H*ge),le===!0&&(t.style.width=R+"px",t.style.height=H+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(B*ge,ne*ge).floor()},this.setDrawingBufferSize=function(R,H,le){B=R,ne=H,ge=le,t.width=Math.floor(R*le),t.height=Math.floor(H*le),this.setViewport(0,0,R,H)},this.setEffects=function(R){if(x===Ln){lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let H=0;H<R.length;H++)if(R[H].isOutputPass===!0){it("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(ee)},this.getViewport=function(R){return R.copy(Fe)},this.setViewport=function(R,H,le,Q){R.isVector4?Fe.set(R.x,R.y,R.z,R.w):Fe.set(R,H,le,Q),$.viewport(ee.copy(Fe).multiplyScalar(me()).round())},this.getScissor=function(R){return R.copy(Xe)},this.setScissor=function(R,H,le,Q){R.isVector4?Xe.set(R.x,R.y,R.z,R.w):Xe.set(R,H,le,Q),$.scissor(be.copy(Xe).multiplyScalar(me()).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(R){$.setScissorTest(ue=R)},this.setOpaqueSort=function(R){we=R},this.setTransparentSort=function(R){Ye=R},this.getClearColor=function(R){return R.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(R=!0,H=!0,le=!0){let Q=0;if(R){let ie=!1;if(_e!==null){let Ge=_e.texture.format;ie=m.has(Ge)}if(ie){let Ge=_e.texture.type,je=g.has(Ge),Ve=F.getClearColor(),$e=F.getClearAlpha(),tt=Ve.r,ct=Ve.g,mt=Ve.b;je?(b[0]=tt,b[1]=ct,b[2]=mt,b[3]=$e,A.clearBufferuiv(A.COLOR,0,b)):(M[0]=tt,M[1]=ct,M[2]=mt,M[3]=$e,A.clearBufferiv(A.COLOR,0,M))}else Q|=A.COLOR_BUFFER_BIT}H&&(Q|=A.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),le&&(Q|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&A.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),W=R},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),F.dispose(),ye.dispose(),se.dispose(),Ee.dispose(),ve.dispose(),C.dispose(),Se.dispose(),X.dispose(),Ue.dispose(),ke.dispose(),he.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",ts),Y.removeEventListener("sessionend",dl),Ci.stop()};function Ie(R){R.preventDefault(),aa("WebGLRenderer: Context Lost."),z=!0}function rt(){aa("WebGLRenderer: Context Restored."),z=!1;let R=pe.autoReset,H=Le.enabled,le=Le.autoUpdate,Q=Le.needsUpdate,ie=Le.type;nt(),pe.autoReset=R,Le.enabled=H,Le.autoUpdate=le,Le.needsUpdate=Q,Le.type=ie}function Pe(R){lt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function dt(R){let H=R.target;H.removeEventListener("dispose",dt),Et(H)}function Et(R){Jt(R),ve.remove(R)}function Jt(R){let H=ve.get(R).programs;H!==void 0&&(H.forEach(function(le){he.releaseProgram(le)}),R.isShaderMaterial&&he.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,le,Q,ie,Ge){H===null&&(H=He);let je=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,Ve=Ho(R,H,le,Q,ie);$.setMaterial(Q,je);let $e=le.index,tt=1;if(Q.wireframe===!0){if($e=X.getWireframeAttribute(le),$e===void 0)return;tt=2}let ct=le.drawRange,mt=le.attributes.position,et=ct.start*tt,gt=(ct.start+ct.count)*tt;Ge!==null&&(et=Math.max(et,Ge.start*tt),gt=Math.min(gt,(Ge.start+Ge.count)*tt)),$e!==null?(et=Math.max(et,0),gt=Math.min(gt,$e.count)):mt!=null&&(et=Math.max(et,0),gt=Math.min(gt,mt.count));let zt=gt-et;if(zt<0||zt===1/0)return;Ue.setup(ie,Q,Ve,le,$e);let wt,Mt=fe;if($e!==null&&(wt=E.get($e),Mt=ze,Mt.setIndex(wt)),ie.isMesh)Q.wireframe===!0?($.setLineWidth(Q.wireframeLinewidth*me()),Mt.setMode(A.LINES)):Mt.setMode(A.TRIANGLES);else if(ie.isLine){let fn=Q.linewidth;fn===void 0&&(fn=1),$.setLineWidth(fn*me()),ie.isLineSegments?Mt.setMode(A.LINES):ie.isLineLoop?Mt.setMode(A.LINE_LOOP):Mt.setMode(A.LINE_STRIP)}else ie.isPoints?Mt.setMode(A.POINTS):ie.isSprite&&Mt.setMode(A.TRIANGLES);if(ie.isBatchedMesh)if(te.get("WEBGL_multi_draw"))Mt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{let fn=ie._multiDrawStarts,Qe=ie._multiDrawCounts,jt=ie._multiDrawCount,St=$e?E.get($e).bytesPerElement:1,hi=ve.get(Q).currentProgram.getUniforms();for(let Qt=0;Qt<jt;Qt++)hi.setValue(A,"_gl_DrawID",Qt),Mt.render(fn[Qt]/St,Qe[Qt])}else if(ie.isInstancedMesh)Mt.renderInstances(et,zt,ie.count);else if(le.isInstancedBufferGeometry){let fn=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Qe=Math.min(le.instanceCount,fn);Mt.renderInstances(et,zt,Qe)}else Mt.render(et,zt)};function es(R,H,le,Q){W!==null&&R.isNodeMaterial&&W.setObject(Q,R),Ne===!0&&de.setState(R,le,!1),R.transparent===!0&&R.side===Dt&&R.forceSinglePass===!1?(R.side=bn,R.needsUpdate=!0,ui(R,H,Q),R.side=Kn,R.needsUpdate=!0,ui(R,H,Q),R.side=Dt):ui(R,H,Q)}this.compile=function(R,H,le=null){le===null&&(le=R),W!==null&&W.renderStart(R,H,le),T=se.get(le),T.init(H),w.push(T),le.traverseVisible(function(ie){ie.isLight&&ie.layers.test(H.layers)&&(T.pushLight(ie),ie.castShadow&&T.pushShadow(ie))}),R!==le&&R.traverseVisible(function(ie){ie.isLight&&ie.layers.test(H.layers)&&(T.pushLight(ie),ie.castShadow&&T.pushShadow(ie))}),T.setupLights(),W!==null&&W.updateLights(T.state.lightsArray),qe=this.localClippingEnabled,Ne=de.init(this.clippingPlanes,qe),Ne===!0&&de.setGlobalState(this.clippingPlanes,H),W!==null&&Le.render(T.state.shadowsArray,le,H);let Q=new Set;return R.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;let Ge=ie.material;if(Ge)if(Array.isArray(Ge))for(let je=0;je<Ge.length;je++){let Ve=Ge[je];es(Ve,le,H,ie),Q.add(Ve)}else es(Ge,le,H,ie),Q.add(Ge)}),T=w.pop(),W!==null&&W.renderEnd(),Q},this.compileAsync=function(R,H,le=null){let Q=this.compile(R,H,le);return new Promise(ie=>{function Ge(){if(Q.forEach(function(je){let $e=ve.get(je).currentProgram;($e===void 0||$e.isReady())&&Q.delete(je)}),Q.size===0){ie(R);return}setTimeout(Ge,10)}te.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let yn=null;function $n(R){yn&&yn(R)}function ts(){Ci.stop()}function dl(){Ci.start()}let Ci=new Jg;Ci.setAnimationLoop($n),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(R){yn=R,Y.setAnimationLoop(R),R===null?Ci.stop():Ci.start()},Y.addEventListener("sessionstart",ts),Y.addEventListener("sessionend",dl),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;W!==null&&W.renderStart(R,H);let le=Y.enabled===!0&&Y.isPresenting===!0,Q=D!==null&&(_e===null||le)&&D.begin(L,_e);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(H),H=Y.getCamera()),R.isScene===!0&&R.onBeforeRender(L,R,H,_e),T=se.get(R,w.length),T.init(H),T.state.textureUnits=Ee.getTextureUnits(),w.push(T),Je.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),H.isArrayCamera?Be.setFromArrayCamera(H):Me.setFromProjectionMatrix(Je,ni,H.reversedDepth),qe=this.localClippingEnabled,Ne=de.init(this.clippingPlanes,qe),S=ye.get(R,_.length),S.init(),_.push(S),this.info.render.frame++,Y.enabled===!0&&Y.isPresenting===!0){let je=L.xr.getDepthSensingMesh();je!==null&&ns(je,H,-1/0,L.sortObjects)}ns(R,H,0,L.sortObjects),S.finish(),W!==null&&W.updateLights(T.state.lightsArray),L.sortObjects===!0&&S.sort(we,Ye),Oe=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Oe&&F.addToRenderList(S,R),this.info.autoReset===!0&&this.info.reset(),Ne===!0&&de.beginShadows();let ie=T.state.shadowsArray;if(Le.render(ie,R,H),Ne===!0&&de.endShadows(),(Q&&D.hasRenderPass())===!1){let je=S.opaque,Ve=S.transmissive;if(T.setupLights(),H.isArrayCamera){let $e=H.cameras;if(Ve.length>0)for(let tt=0,ct=$e.length;tt<ct;tt++){let mt=$e[tt];pl(je,Ve,R,mt)}Oe&&F.render(R);for(let tt=0,ct=$e.length;tt<ct;tt++){let mt=$e[tt];Cr(S,R,mt,mt.viewport)}}else Ve.length>0&&pl(je,Ve,R,H),Oe&&F.render(R),Cr(S,R,H)}_e!==null&&q===0&&(Ee.updateMultisampleRenderTarget(_e),Ee.updateRenderTargetMipmap(_e)),Q&&D.end(L),R.isScene===!0&&R.onAfterRender(L,R,H),Ue.resetDefaultState(),Z=-1,V=null,w.pop(),w.length>0?(T=w[w.length-1],Ee.setTextureUnits(T.state.textureUnits),Ne===!0&&de.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?S=_[_.length-1]:S=null,W!==null&&W.renderEnd()};function ns(R,H,le,Q){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)le=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLight)T.pushLight(R),R.castShadow&&T.pushShadow(R);else if(R.isSprite){let je=H.isArrayCamera?Be:Me;if(!R.frustumCulled||R.intersectsFrustum(je)){Q&&re.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Je);let Ve=Se.update(R),$e=R.material;$e.visible&&S.push(R,Ve,$e,le,re.z,null,H)}}else if(R.isMesh||R.isLine||R.isPoints){let je=H.isArrayCamera?Be:Me;if(!R.frustumCulled||R.intersectsFrustum(je)){let Ve=Se.update(R),$e=R.material;if(Q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),re.copy(R.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),re.copy(Ve.boundingSphere.center)),re.applyMatrix4(R.matrixWorld).applyMatrix4(Je)),Array.isArray($e)){let tt=Ve.groups;for(let ct=0,mt=tt.length;ct<mt;ct++){let et=tt[ct],gt=$e[et.materialIndex];gt&&gt.visible&&S.push(R,Ve,gt,le,re.z,et,H)}}else $e.visible&&S.push(R,Ve,$e,le,re.z,null,H)}}}let Ge=R.children;for(let je=0,Ve=Ge.length;je<Ve;je++)ns(Ge[je],H,le,Q)}function Cr(R,H,le,Q){let{opaque:ie,transmissive:Ge,transparent:je}=R;T.setupLightsView(le),Ne===!0&&de.setGlobalState(L.clippingPlanes,le),Q&&$.viewport(ee.copy(Q)),ie.length>0&&Pr(ie,H,le),Ge.length>0&&Pr(Ge,H,le),je.length>0&&Pr(je,H,le),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function pl(R,H,le,Q){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Q.id]===void 0){let et=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Q.id]=new tn(1,1,{generateMipmaps:!0,type:et?Xn:Ln,minFilter:oi,samples:Math.max(4,Ae.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:yt.workingColorSpace})}let Ge=T.state.transmissionRenderTarget[Q.id],je=Q.viewport||ee;Ge.setSize(je.z*L.transmissionResolutionScale,je.w*L.transmissionResolutionScale);let Ve=L.getRenderTarget(),$e=L.getActiveCubeFace(),tt=L.getActiveMipmapLevel();L.setRenderTarget(Ge),L.getClearColor(K),ce=L.getClearAlpha(),ce<1&&L.setClearColor(16777215,.5),L.clear(),Oe&&F.render(le);let ct=L.toneMapping;L.toneMapping=ri;let mt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),T.setupLightsView(Q),Ne===!0&&de.setGlobalState(L.clippingPlanes,Q),Pr(R,le,Q),Ee.updateMultisampleRenderTarget(Ge),Ee.updateRenderTargetMipmap(Ge),te.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let gt=0,zt=H.length;gt<zt;gt++){let wt=H[gt],{object:Mt,geometry:fn,material:Qe,group:jt}=wt;if(Qe.side===Dt&&Mt.layers.test(Q.layers)){let St=Qe.side;Qe.side=bn,Qe.needsUpdate=!0,ml(Mt,le,Q,fn,Qe,jt),Qe.side=St,Qe.needsUpdate=!0,et=!0}}et===!0&&(Ee.updateMultisampleRenderTarget(Ge),Ee.updateRenderTargetMipmap(Ge))}L.setRenderTarget(Ve,$e,tt),L.setClearColor(K,ce),mt!==void 0&&(Q.viewport=mt),L.toneMapping=ct}function Pr(R,H,le){let Q=H.isScene===!0?H.overrideMaterial:null;for(let ie=0,Ge=R.length;ie<Ge;ie++){let je=R[ie],{object:Ve,geometry:$e,group:tt}=je,ct=je.material;ct.allowOverride===!0&&Q!==null&&(ct=Q),Ve.layers.test(le.layers)&&ml(Ve,H,le,$e,ct,tt)}}function ml(R,H,le,Q,ie,Ge){W!==null&&ie.isNodeMaterial&&W.setObject(R,ie),R.onBeforeRender(L,H,le,Q,ie,Ge),R.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ie.onBeforeRender(L,H,le,Q,R,Ge),ie.transparent===!0&&ie.side===Dt&&ie.forceSinglePass===!1?(ie.side=bn,ie.needsUpdate=!0,L.renderBufferDirect(le,H,Q,ie,R,Ge),ie.side=Kn,ie.needsUpdate=!0,L.renderBufferDirect(le,H,Q,ie,R,Ge),ie.side=Dt):L.renderBufferDirect(le,H,Q,ie,R,Ge),R.onAfterRender(L,H,le,Q,ie,Ge)}function er(R){let H=0;for(let le of R)le.texture!==null&&H++;return H}function ui(R,H,le){H.isScene!==!0&&(H=He);let Q=ve.get(R),ie=T.state.lights,Ge=T.state.shadowsArray,je=ie.state.version,Ve=he.getParameters(R,ie.state,Ge,H,le,T.state.lightProbeGridArray),$e=he.getProgramCacheKey(Ve),tt=Q.programs;Q.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?H.environment:null,Q.fog=H.fog;let ct=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;Q.envMap=C.get(R.envMap||Q.environment,ct),Q.envMapRotation=Q.environment!==null&&R.envMap===null?H.environmentRotation:R.envMapRotation,tt===void 0&&(R.addEventListener("dispose",dt),tt=new Map,Q.programs=tt,Q.programVariants=new Map);let mt=tt.get($e);if(mt!==void 0){if(Q.currentProgram===mt&&Q.lightsStateVersion===je)return is(R,Ve),mt}else Ve.uniforms=he.getUniforms(R),W!==null&&R.isNodeMaterial&&W.build(R,le,Ve),R.onBeforeCompile(Ve,L),mt=he.acquireProgram(Ve,$e),tt.set($e,mt),Q.uniforms=Ve.uniforms;let et=Q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(et.clippingPlanes=de.uniform),is(R,Ve),Q.needsLights=xl(R),Q.lightsStateVersion=je,Q.needsLights&&(et.ambientLightColor.value=ie.state.ambient,et.lightProbe.value=ie.state.probe,et.sunLights.value=ie.state.sun,et.sunLightShadows.value=ie.state.sunShadow,et.directionalLights.value=ie.state.directional,et.directionalLightShadows.value=ie.state.directionalShadow,et.spotLights.value=ie.state.spot,et.spotLightShadows.value=ie.state.spotShadow,et.rectAreaLights.value=ie.state.rectArea,et.ltc_1.value=ie.state.rectAreaLTC1,et.ltc_2.value=ie.state.rectAreaLTC2,et.pointLights.value=ie.state.point,et.pointLightShadows.value=ie.state.pointShadow,et.hemisphereLights.value=ie.state.hemi,et.sunShadowMatrix.value=ie.state.sunShadowMatrix,et.sunShadowCascade.value=ie.state.sunShadowCascade,et.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,et.spotLightMatrix.value=ie.state.spotLightMatrix,et.spotLightMap.value=ie.state.spotLightMap,et.pointShadowMatrix.value=ie.state.pointShadowMatrix),Q.numLightProbeGrids=er(T.state.lightProbeGridArray),Q.currentProgram=mt,Q.uniformsList=null,mt}function tr(R,H,le,Q,ie){let Ge=ve.get(R),je=Ge.currentProgram.id+","+Q+","+ie,Ve=Ge.programVariants.get(je);return Ve===void 0?(Ve=ui(R,H,le),Ge.programVariants.set(je,Ve)):(Ge.currentProgram=Ve,Ge.uniformsList=null,Ge.outputColorSpace=Q,Ge.toneMapping=ie),Ve}function ko(R){if(R.uniformsList===null){let H=R.currentProgram.getUniforms();R.uniformsList=Ao.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function is(R,H){let le=ve.get(R);le.outputColorSpace=H.outputColorSpace,le.batching=H.batching,le.batchingColor=H.batchingColor,le.instancing=H.instancing,le.instancingColor=H.instancingColor,le.instancingMorph=H.instancingMorph,le.skinning=H.skinning,le.morphTargets=H.morphTargets,le.morphNormals=H.morphNormals,le.morphColors=H.morphColors,le.morphTargetsCount=H.morphTargetsCount,le.numClippingPlanes=H.numClippingPlanes,le.numIntersection=H.numClipIntersection,le.vertexAlphas=H.vertexAlphas,le.vertexTangents=H.vertexTangents,le.toneMapping=H.toneMapping}function Ho(R,H,le,Q,ie){H.isScene!==!0&&(H=He),Ee.resetTextureUnits();let Ge=H.fog,je=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?H.environment:null,Ve=_e===null?L.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:yt.workingColorSpace,$e=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,tt=C.get(Q.envMap||je,$e),ct=Q.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,mt=!!le.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),et=!!le.morphAttributes.position,gt=!!le.morphAttributes.normal,zt=!!le.morphAttributes.color,wt=ri;Q.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(wt=L.toneMapping);let Mt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,fn=Mt!==void 0?Mt.length:0,Qe=ve.get(Q),jt=T.state.lights;if(Ne===!0&&(qe===!0||R!==V)){let Ft=R===V&&Q.id===Z;de.setState(Q,R,Ft)}let St=!1,hi=!1;Q.version===Qe.__version?Qe.needsLights&&Qe.lightsStateVersion!==jt.state.version||ie.isBatchedMesh&&Qe.batching===!1||!ie.isBatchedMesh&&Qe.batching===!0||ie.isBatchedMesh&&Qe.batchingColor===!0&&ie._colorsTexture===null||ie.isBatchedMesh&&Qe.batchingColor===!1&&ie._colorsTexture!==null||ie.isInstancedMesh&&Qe.instancing===!1||!ie.isInstancedMesh&&Qe.instancing===!0||ie.isSkinnedMesh&&Qe.skinning===!1||!ie.isSkinnedMesh&&Qe.skinning===!0||ie.isInstancedMesh&&Qe.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Qe.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&Qe.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&Qe.instancingMorph===!1&&ie.morphTexture!==null||Qe.envMap!==tt||Q.fog===!0&&Qe.fog!==Ge||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==de.numPlanes||Qe.numIntersection!==de.numIntersection)||Qe.vertexAlphas!==ct||Qe.vertexTangents!==mt||Qe.morphTargets!==et||Qe.morphNormals!==gt||Qe.morphColors!==zt||Qe.morphTargetsCount!==fn||Qe.numLightProbeGrids!==er(T.state.lightProbeGridArray)?St=!0:(Qe.outputColorSpace!==Ve||Qe.toneMapping!==wt)&&(hi=!0):(St=!0,Qe.__version=Q.version);let Qt=Qe.currentProgram;(St===!0||hi===!0)&&(Qt=hi===!0?tr(Q,H,ie,Ve,wt):ui(Q,H,ie),W&&Q.isNodeMaterial&&W.onUpdateProgram(Q,Qt,Qe));let nr=!1,fi=!1,Pi=!1,xt=Qt.getUniforms(),Gt=Qe.uniforms;if($.useProgram(Qt.program)&&(nr=!0,fi=!0,Pi=!0),Q.id!==Z&&(Z=Q.id,fi=!0),nr||V!==R){$.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),xt.setValue(A,"projectionMatrix",R.projectionMatrix),xt.setValue(A,"viewMatrix",R.matrixWorldInverse);let Zt=xt.map.cameraPosition;Zt!==void 0&&Zt.setValue(A,at.setFromMatrixPosition(R.matrixWorld)),Ae.logarithmicDepthBuffer&&xt.setValue(A,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&xt.setValue(A,"isOrthographic",R.isOrthographicCamera===!0),V!==R&&(V=R,fi=!0,Pi=!0)}if(Qe.needsLights&&(jt.state.sunShadowMap.length>0&&xt.setValue(A,"sunShadowMap",jt.state.sunShadowMap,Ee),jt.state.directionalShadowMap.length>0&&xt.setValue(A,"directionalShadowMap",jt.state.directionalShadowMap,Ee),jt.state.spotShadowMap.length>0&&xt.setValue(A,"spotShadowMap",jt.state.spotShadowMap,Ee),jt.state.pointShadowMap.length>0&&xt.setValue(A,"pointShadowMap",jt.state.pointShadowMap,Ee)),ie.isSkinnedMesh){xt.setOptional(A,ie,"bindMatrix"),xt.setOptional(A,ie,"bindMatrixInverse");let Ft=ie.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),xt.setValue(A,"boneTexture",Ft.boneTexture,Ee))}ie.isBatchedMesh&&(xt.setOptional(A,ie,"batchingTexture"),xt.setValue(A,"batchingTexture",ie._matricesTexture,Ee),xt.setOptional(A,ie,"batchingIdTexture"),xt.setValue(A,"batchingIdTexture",ie._indirectTexture,Ee),xt.setOptional(A,ie,"batchingColorTexture"),ie._colorsTexture!==null&&xt.setValue(A,"batchingColorTexture",ie._colorsTexture,Ee));let _n=le.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&xe.update(ie,le,Qt),(fi||Qe.receiveShadow!==ie.receiveShadow)&&(Qe.receiveShadow=ie.receiveShadow,xt.setValue(A,"receiveShadow",ie.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&H.environment!==null&&(Gt.envMapIntensity.value=H.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=ww()),fi){if(xt.setValue(A,"toneMappingExposure",L.toneMappingExposure),Qe.needsLights&&gl(Gt,Pi),Ge&&Q.fog===!0&&ae.refreshFogUniforms(Gt,Ge),ae.refreshMaterialUniforms(Gt,Q,ge,ne,T.state.transmissionRenderTarget[R.id]),Qe.needsLights&&Qe.numLightProbeGrids>0){let Ft=y,Zt=0;for(let Qn of T.state.lightProbeGridArray)Qn.texture!==null&&(Ft.textures[Zt]=Qn.texture,Ft.min[Zt]=Qn.boundingBox.min,Ft.max[Zt]=Qn.boundingBox.max,Ft.resolution[Zt]=Qn.resolution,Zt++);for(let Qn in Ft)Ft[Qn].length=Zt;Gt.probesSH.value=Ft.textures,Gt.probesMin.value=Ft.min,Gt.probesMax.value=Ft.max,Gt.probesResolution.value=Ft.resolution}Ao.upload(A,ko(Qe),Gt,Ee)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Ao.upload(A,ko(Qe),Gt,Ee),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&xt.setValue(A,"center",ie.center),xt.setValue(A,"modelViewMatrix",ie.modelViewMatrix),xt.setValue(A,"normalMatrix",ie.normalMatrix),xt.setValue(A,"modelMatrix",ie.matrixWorld),Q.uniformsGroups!==void 0){let Ft=Q.uniformsGroups;for(let Zt=0,Qn=Ft.length;Zt<Qn;Zt++){let Go=Ft[Zt];ke.update(Go,Qt),ke.bind(Go,Qt)}}return Qt}function gl(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.sunLights.needsUpdate=H,R.sunLightShadows.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function xl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return _e},this.setRenderTargetTextures=function(R,H,le){let Q=ve.get(R);Q.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),ve.get(R.texture).__webglTexture=H,ve.get(R.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:le,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,H){let le=ve.get(R);le.__webglFramebuffer=H,le.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,le=0){_e=R,j=H,q=le;let Q=null,ie=!1,Ge=!1;if(R){let Ve=ve.get(R);if(Ve.__useDefaultFramebuffer!==void 0){$.bindFramebuffer(A.FRAMEBUFFER,Ve.__webglFramebuffer),ee.copy(R.viewport),be.copy(R.scissor),Re=R.scissorTest,$.viewport(ee),$.scissor(be),$.setScissorTest(Re),Z=-1;return}else if(Ve.__webglFramebuffer===void 0)Ee.setupRenderTarget(R);else if(Ve.__hasExternalTextures)Ee.rebindTextures(R,ve.get(R.texture).__webglTexture,ve.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let ct=R.depthTexture;if(Ve.__boundDepthTexture!==ct){if(ct!==null&&ve.has(ct)&&(R.width!==ct.image.width||R.height!==ct.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ee.setupDepthRenderbuffer(R)}}let $e=R.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ge=!0);let tt=ve.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(tt[H])?Q=tt[H][le]:Q=tt[H],ie=!0):R.samples>0&&Ee.useMultisampledRTT(R)===!1?Q=ve.get(R).__webglMultisampledFramebuffer:Array.isArray(tt)?Q=tt[le]:Q=tt,ee.copy(R.viewport),be.copy(R.scissor),Re=R.scissorTest}else ee.copy(Fe).multiplyScalar(ge).floor(),be.copy(Xe).multiplyScalar(ge).floor(),Re=ue;if(le!==0&&(Q=k),$.bindFramebuffer(A.FRAMEBUFFER,Q)&&$.drawBuffers(R,Q),$.viewport(ee),$.scissor(be),$.setScissorTest(Re),ie){let Ve=ve.get(R.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ve.__webglTexture,le)}else if(Ge){let Ve=H;for(let $e=0;$e<R.textures.length;$e++){let tt=ve.get(R.textures[$e]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+$e,tt.__webglTexture,le,Ve)}}else if(R!==null&&le!==0){let Ve=ve.get(R.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ve.__webglTexture,le)}Z=-1};function Vo(R){let H=ve.get(R);return(H.__readFormat!==R.format||H.__readType!==R.type)&&(H.__readFormat=R.format,H.__readType=R.type,H.__formatReadable=Ae.textureFormatReadable(R.format),H.__typeReadable=Ae.textureTypeReadable(R.type)),H}this.readRenderTargetPixels=function(R,H,le,Q,ie,Ge,je,Ve=0){if(!(R&&R.isWebGLRenderTarget)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&je!==void 0&&($e=$e[je],Array.isArray($e)&&($e=$e[0])),$e){$.bindFramebuffer(A.FRAMEBUFFER,$e);try{let tt=R.textures[Ve],ct=tt.format,mt=tt.type;R.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ve);let et=Vo(tt);if(et.__formatReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(et.__typeReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-Q&&le>=0&&le<=R.height-ie&&A.readPixels(H,le,Q,ie,Ce.convert(ct),Ce.convert(mt),Ge)}finally{let tt=_e!==null?ve.get(_e).__webglFramebuffer:null;$.bindFramebuffer(A.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(R,H,le,Q,ie,Ge,je,Ve=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&je!==void 0&&($e=$e[je],Array.isArray($e)&&($e=$e[0])),$e)if(H>=0&&H<=R.width-Q&&le>=0&&le<=R.height-ie){$.bindFramebuffer(A.FRAMEBUFFER,$e);let tt=R.textures[Ve],ct=tt.format,mt=tt.type;R.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ve);let et=Vo(tt);if(et.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(et.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let gt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,gt),A.bufferData(A.PIXEL_PACK_BUFFER,Ge.byteLength,A.STREAM_READ),A.readPixels(H,le,Q,ie,Ce.convert(ct),Ce.convert(mt),0),A.bindBuffer(A.PIXEL_PACK_BUFFER,null);let zt=_e!==null?ve.get(_e).__webglFramebuffer:null;$.bindFramebuffer(A.FRAMEBUFFER,zt);let wt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Eg(A,wt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,gt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Ge),A.bindBuffer(A.PIXEL_PACK_BUFFER,null),A.deleteBuffer(gt),A.deleteSync(wt),Ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,H=null,le=0){let Q=Math.pow(2,-le),ie=Math.floor(R.image.width*Q),Ge=Math.floor(R.image.height*Q),je=H!==null?H.x:0,Ve=H!==null?H.y:0;Ee.setTexture2D(R,0),A.copyTexSubImage2D(A.TEXTURE_2D,le,0,0,je,Ve,ie,Ge),$.unbindTexture()},this.copyTextureToTexture=function(R,H,le=null,Q=null,ie=0,Ge=0){let je,Ve,$e,tt,ct,mt,et,gt,zt,wt=R.isCompressedTexture?R.mipmaps[Ge]:R.image;if(le!==null)je=le.max.x-le.min.x,Ve=le.max.y-le.min.y,$e=le.isBox3?le.max.z-le.min.z:1,tt=le.min.x,ct=le.min.y,mt=le.isBox3?le.min.z:0;else{let xt=Math.pow(2,-ie);je=Math.floor(wt.width*xt),Ve=Math.floor(wt.height*xt),R.isDataArrayTexture?$e=wt.depth:R.isData3DTexture?$e=Math.floor(wt.depth*xt):$e=1,tt=0,ct=0,mt=0}Q!==null?(et=Q.x,gt=Q.y,zt=Q.z):(et=0,gt=0,zt=0);let Mt=Ce.convert(H.format),fn=Ce.convert(H.type),Qe;H.isData3DTexture?(Ee.setTexture3D(H,0),Qe=A.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Ee.setTexture2DArray(H,0),Qe=A.TEXTURE_2D_ARRAY):(Ee.setTexture2D(H,0),Qe=A.TEXTURE_2D),$.activeTexture(A.TEXTURE0),$.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,H.flipY),$.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),$.pixelStorei(A.UNPACK_ALIGNMENT,H.unpackAlignment);let jt=$.getParameter(A.UNPACK_ROW_LENGTH),St=$.getParameter(A.UNPACK_IMAGE_HEIGHT),hi=$.getParameter(A.UNPACK_SKIP_PIXELS),Qt=$.getParameter(A.UNPACK_SKIP_ROWS),nr=$.getParameter(A.UNPACK_SKIP_IMAGES);$.pixelStorei(A.UNPACK_ROW_LENGTH,wt.width),$.pixelStorei(A.UNPACK_IMAGE_HEIGHT,wt.height),$.pixelStorei(A.UNPACK_SKIP_PIXELS,tt),$.pixelStorei(A.UNPACK_SKIP_ROWS,ct),$.pixelStorei(A.UNPACK_SKIP_IMAGES,mt);let fi=R.isDataArrayTexture||R.isData3DTexture,Pi=H.isDataArrayTexture||H.isData3DTexture;if(R.isDepthTexture){let xt=ve.get(R),Gt=ve.get(H),_n=ve.get(xt.__renderTarget),Ft=ve.get(Gt.__renderTarget);$.bindFramebuffer(A.READ_FRAMEBUFFER,_n.__webglFramebuffer),$.bindFramebuffer(A.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Zt=0;Zt<$e;Zt++)fi&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ve.get(R).__webglTexture,ie,mt+Zt),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ve.get(H).__webglTexture,Ge,zt+Zt)),A.blitFramebuffer(tt,ct,tt+je,ct+Ve,et,gt,et+je,gt+Ve,A.DEPTH_BUFFER_BIT,A.NEAREST);$.bindFramebuffer(A.READ_FRAMEBUFFER,null),$.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(ie!==0||R.isRenderTargetTexture||ve.has(R)){let xt=ve.get(R),Gt=ve.get(H);$.bindFramebuffer(A.READ_FRAMEBUFFER,N),$.bindFramebuffer(A.DRAW_FRAMEBUFFER,G);for(let _n=0;_n<$e;_n++)fi?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,xt.__webglTexture,ie,mt+_n):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,xt.__webglTexture,ie),Pi?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Gt.__webglTexture,Ge,zt+_n):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Gt.__webglTexture,Ge),ie!==0?A.blitFramebuffer(tt,ct,tt+je,ct+Ve,et,gt,et+je,gt+Ve,A.COLOR_BUFFER_BIT,A.NEAREST):Pi?A.copyTexSubImage3D(Qe,Ge,et,gt,zt+_n,tt,ct,je,Ve):A.copyTexSubImage2D(Qe,Ge,et,gt,tt,ct,je,Ve);$.bindFramebuffer(A.READ_FRAMEBUFFER,null),$.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Pi?R.isDataTexture||R.isData3DTexture?A.texSubImage3D(Qe,Ge,et,gt,zt,je,Ve,$e,Mt,fn,wt.data):H.isCompressedArrayTexture?A.compressedTexSubImage3D(Qe,Ge,et,gt,zt,je,Ve,$e,Mt,wt.data):A.texSubImage3D(Qe,Ge,et,gt,zt,je,Ve,$e,Mt,fn,wt):R.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,Ge,et,gt,je,Ve,Mt,fn,wt.data):R.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,Ge,et,gt,wt.width,wt.height,Mt,wt.data):A.texSubImage2D(A.TEXTURE_2D,Ge,et,gt,je,Ve,Mt,fn,wt);$.pixelStorei(A.UNPACK_ROW_LENGTH,jt),$.pixelStorei(A.UNPACK_IMAGE_HEIGHT,St),$.pixelStorei(A.UNPACK_SKIP_PIXELS,hi),$.pixelStorei(A.UNPACK_SKIP_ROWS,Qt),$.pixelStorei(A.UNPACK_SKIP_IMAGES,nr),Ge===0&&H.generateMipmaps===!0&&H.mipmapsAutoUpdate===!0&&A.generateMipmap(Qe),$.unbindTexture()},this.initRenderTarget=function(R){ve.get(R).__webglFramebuffer===void 0&&Ee.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Ee.setTextureCube(R,0):R.isData3DTexture?Ee.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Ee.setTexture2DArray(R,0):Ee.setTexture2D(R,0),$.unbindTexture()},this.resetState=function(){j=0,q=0,_e=null,$.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}};function c0(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Ot;l.morphTargetsRelative=a;let c=0;for(let u=0;u<n.length;++u){let h=n[u],f=0,d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(h.morphAttributes[p].length!==n[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0,h=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let p=0;p<d.count;++p)h.push(d.getX(p)+u);u+=n[f].attributes.position.count}l.setIndex(h)}for(let u in r){let h=l0(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let x=0;x<o[u].length;++x)d.push(o[u][x][f]);let p=l0(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}}return l}function l0(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new Bt(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let f=0,d=u.count;f<d;f++)for(let p=0;p<t;p++){let x=u.getComponent(f,p);a.setComponent(f+h,p,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function nd(n,e){if(e===Lf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===To||e===Wa){let t=n.getIndex();if(t===null){let r=[],o=n.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);n.setIndex(r),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===To)for(let r=1;r<=i;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),n.setIndex(s),n.clearGroups(),n}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function u0(n){let e=new Map,t=new Map,i=n.clone();return h0(n,i,function(s,r){e.set(r,s),t.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),i}function h0(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)h0(n.children[i],e.children[i],t)}var Au=class extends ki{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new cd(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new vd(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new Md(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new yd(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new Ru(t,_t.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ru(t,_t.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Sd(t)})}load(e,t,i,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Es.extractUrlBase(e);o=Es.resolveURL(c,this.path)}else o=Es.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new xo(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===g0){try{o[_t.KHR_BINARY_GLTF]=new Ed(e)}catch(h){s&&s(h);return}r=JSON.parse(o[_t.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Id(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case _t.KHR_MATERIALS_UNLIT:o[h]=new ad;break;case _t.KHR_DRACO_MESH_COMPRESSION:o[h]=new wd(r,this.dracoLoader);break;case _t.KHR_TEXTURE_TRANSFORM:o[h]=new Td;break;case _t.KHR_MESH_QUANTIZATION:o[h]=new Ad;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function Tw(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function Yt(n,e,t){let i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}var _t={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},od=class{constructor(e){this.parser=e,this.name=_t.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Ke(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],zn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Vs(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new mr(u),c.distance=h;break;case"spot":c=new Ra(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Wi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}},ad=class{constructor(){this.name=_t.KHR_MATERIALS_UNLIT}getMaterialType(){return nn}extendParams(e,t,i){let s=[];e.color=new Ke(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],zn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,At))}return Promise.all(s)}},ld=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=Yt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},cd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let i=Yt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ze(r,r)}return Promise.all(s)}},ud=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let i=Yt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return t.diffuseRoughness=i.diffuseRoughnessFactor!==void 0?i.diffuseRoughnessFactor:0,i.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",i.diffuseRoughnessTexture)),Promise.all(s)}},hd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let i=Yt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},fd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let i=Yt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(s)}},dd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SHEEN}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let i=Yt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(t.sheenColor=new Ke(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],zn)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,At)),i.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(s)}},pd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let i=Yt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(s)}},md=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_VOLUME}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let i=Yt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let r=i.attenuationColor||[1,1,1];return t.attenuationColor=new Ke().setRGB(r[0],r[1],r[2],zn),Promise.all(s)}},gd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IOR}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let i=Yt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},xd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let i=Yt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let r=i.specularColorFactor||[1,1,1];return t.specularColor=new Ke().setRGB(r[0],r[1],r[2],zn),i.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,At)),Promise.all(s)}},yd=class{constructor(e){this.parser=e,this.name=_t.EXT_MATERIALS_BUMP}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let i=Yt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(s)}},_d=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let i=Yt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(s)}},vd=class{constructor(e){this.parser=e,this.name=_t.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},bd=class{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}},Md=class{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}},Ru=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}},Sd=class{constructor(e){this.name=_t.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let c of s.primitives)if(c.mode!==ai.TRIANGLES&&c.mode!==ai.TRIANGLE_STRIP&&c.mode!==ai.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(let p of h){let x=new ot,m=new I,g=new $t,b=new I(1,1,1),M=new dr(p.geometry,p.material,f);for(let S=0;S<f;S++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,S),l.SCALE&&b.fromBufferAttribute(l.SCALE,S),M.setMatrixAt(S,x.compose(m,g,b));let y=null;for(let S in l)if(S==="_COLOR_0"){let T=l[S];M.instanceColor=new gs(T.array,T.itemSize,T.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(y===null){let _=M.geometry;y=new Ot,y.name=_.name;for(let w in _.attributes)y.setAttribute(w,_.attributes[w]);for(let w in _.morphAttributes)y.morphAttributes[w]=_.morphAttributes[w];_.index!==null&&y.setIndex(_.index),y.morphTargetsRelative=_.morphTargetsRelative;for(let w of _.groups)y.addGroup(w.start,w.count,w.materialIndex);_.boundingBox!==null&&(y.boundingBox=_.boundingBox.clone()),_.boundingSphere!==null&&(y.boundingSphere=_.boundingSphere.clone()),y.drawRange.start=_.drawRange.start,y.drawRange.count=_.drawRange.count,y.userData=Object.assign({},_.userData),M.geometry=y}let T=l[S];y.setAttribute(S,new gs(T.array,T.itemSize,T.normalized))}Vt.prototype.copy.call(M,p),this.parser.assignFinalMaterial(M),d.push(M)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},g0="glTF",Ja=12,f0={JSON:1313821514,BIN:5130562},Ed=class{constructor(e){this.name=_t.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ja),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==g0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Ja,r=new DataView(e,Ja),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===f0.JSON){let c=new Uint8Array(e,Ja+o,a);this.content=i.decode(c)}else if(l===f0.BIN){let c=Ja+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},wd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=_t.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=Cd[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=Cd[u]||u.toLowerCase();if(o[u]!==void 0){let f=i.accessors[e.attributes[u]],d=Po[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(let p in d.attributes){let x=d.attributes[p],m=l[p];m!==void 0&&(x.normalized=m)}h(d)},a,c,zn,f)})})}},Td=class{constructor(){this.name=_t.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let i=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Ad=class{constructor(){this.name=_t.KHR_MESH_QUANTIZATION}},Cu=class extends zi{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(i-t)/u,f=h*h,d=f*h,p=e*c,x=p-c,m=-2*d+3*f,g=d-f,b=1-m,M=g-f+h;for(let y=0;y!==a;y++){let S=o[x+y+a],T=o[x+y+l]*u,_=o[p+y+a],w=o[p+y]*u;r[y]=b*S+M*T+m*_+g*w}return r}},Aw=new $t,Rd=class extends Cu{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return Aw.fromArray(r).normalize().toArray(r),r}},ai={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Po={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},d0={9728:Xt,9729:qt,9984:Fc,9985:Eo,9986:xr,9987:oi},p0={33071:ti,33648:ro,10497:_i},id={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Cd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ks={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Rw={CUBICSPLINE:void 0,LINEAR:hr,STEP:ur},sd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Cw(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new In({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Kn})),n.DefaultMaterial}function vr(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Wi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Pw(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(i){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(s){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function Iw(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Lw(n){let e,t=n.extensions&&n.extensions[_t.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+rd(t.attributes):e=n.indices+":"+rd(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+rd(n.targets[i]);return e}function rd(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Pd(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Dw(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Nw=new ot,Id=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Tw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?(this.textureLoader=new Ta(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Ia(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new xo(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return vr(r,a,s),Wi(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[_t.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){i.load(Es.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=id[s.type],a=Po[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Bt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=id[s.type],c=Po[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,x,m;if(d&&d!==h){let g=Math.floor(f/d),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,M=t.cache.get(b);M||(x=new c(a,g*d,s.count*d/u),M=new zs(x,d/u),t.cache.add(b,M)),m=new Cn(M,l,f%d/u,p)}else a===null?x=new c(s.count*l):x=new c(a,f,s.count*l),m=new Bt(x,l,p);if(s.sparse!==void 0){let g=id.SCALAR,b=Po[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,S=new b(o[1],M,s.sparse.count*g),T=new c(o[2],y,s.sparse.count*l);a!==null&&(m=new Bt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let _=0,w=S.length;_<w;_++){let D=S[_];if(m.setX(D,T[_*l]),l>=2&&m.setY(D,T[_*l+1]),l>=3&&m.setZ(D,T[_*l+2]),l>=4&&m.setW(D,T[_*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return u.magFilter=d0[f.magFilter]||qt,u.minFilter=d0[f.minFilter]||oi,u.wrapS=p0[f.wrapS]||_i,u.wrapT=p0[f.wrapT]||_i,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Xt&&u.minFilter!==qt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,u;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)u=i.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(d,p){t.parse(f,d,p)})});else{if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(f){c=!0;let d=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(l).then(function(f){return new Promise(function(d,p){let x=d;t.isImageBitmapLoader===!0&&(x=function(m){let g=new an(m);g.needsUpdate=!0,d(g)}),t.load(Es.resolveURL(f,r.path),x,void 0,p)})})}let h=u.then(function(f){return c===!0&&a.revokeObjectURL(l),Wi(f,o),f.userData.mimeType=o.mimeType||Dw(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[_t.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[_t.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[_t.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new go,Pn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new xs,Pn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return In}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],o,a={},l=r.extensions||{},c=[];if(l[_t.KHR_MATERIALS_UNLIT]){let h=s[_t.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new Ke(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],zn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,At)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Dt);let u=r.alphaMode||sd.OPAQUE;if(u===sd.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===sd.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==nn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ze(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==nn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==nn){let h=r.emissiveFactor;a.emissive=new Ke().setRGB(h[0],h[1],h[2],zn)}return r.emissiveTexture!==void 0&&o!==nn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,At)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),Wi(h,r),t.associations.set(h,{materials:e}),r.extensions&&vr(s,h,r),h})}createUniqueName(e){let t=It.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[_t.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return m0(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=Lw(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[_t.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=m0(new Ot,c,t),c.mode===ai.TRIANGLE_STRIP?f=f.then(d=>nd(d,Wa)):c.mode===ai.TRIANGLE_FAN&&(f=f.then(d=>nd(d,To))),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?Cw(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,p=u.length;d<p;d++){let x=u[d],m=o[d],g,b=c[d];if(m.mode===ai.TRIANGLES||m.mode===ai.TRIANGLE_STRIP||m.mode===ai.TRIANGLE_FAN||m.mode===void 0){let M=r.isSkinnedMesh===!0,y=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");M&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=M&&y?new fa(x,b):new ft(x,b),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===ai.LINES)g=new pa(x,b);else if(m.mode===ai.LINE_STRIP)g=new Fi(x,b);else if(m.mode===ai.LINE_LOOP)g=new ma(x,b);else if(m.mode===ai.POINTS)g=new ga(x,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&Iw(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Wi(g,r),m.extensions&&vr(s,g,m),t.assignFinalMaterial(g),h.push(g)}for(let d=0,p=h.length;d<p;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&vr(s,h[0],r),h[0];let f=new kt;r.extensions&&vr(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,p=h.length;d<p;d++)f.add(h[d]);return f})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new on(Zs.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new bi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Wi(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new ot;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new da(a,l)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){let d=s.channels[h],p=s.samplers[d.sampler],x=d.target,m=x.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,b=s.parameters!==void 0?s.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",b)),c.push(p),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],p=h[2],x=h[3],m=h[4],g=[];for(let M=0,y=f.length;M<y;M++){let S=f[M],T=d[M],_=p[M],w=x[M],D=m[M];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let L=i._createAnimationTracks(S,T,_,w,D);if(L)for(let z=0;z<L.length;z++)g.push(L[z])}let b=new wa(r,void 0,g);return Wi(b,s),b})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Nw)});for(let d=0,p=h.length;d<p;d++)u.add(h[d]);if(u.userData.pivot!==void 0&&h.length>0){let d=u.userData.pivot,p=h[0];u.pivot=new I().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],p.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new po:c.length>1?u=new kt:c.length===1?u=c[0]:u=new Vt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Wi(u,r),r.extensions&&vr(i,u,r),r.matrix!==void 0){let h=new ot;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new kt;i.name&&(r.name=s.createUniqueName(i.name)),Wi(r,i),i.extensions&&vr(t,r,i);let o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++){let f=l[u];f.parent!==null?r.add(u0(f)):r.add(f)}let c=u=>{let h=new Map;for(let[f,d]of s.associations)(f instanceof Pn||f instanceof an)&&h.set(f,d);return u.traverse(f=>{let d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}Ks[r.path]===Ks.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(Ks[r.path]){case Ks.weights:u=bs;break;case Ks.rotation:u=Ms;break;case Ks.translation:case Ks.scale:u=Hs;break;default:i.itemSize===1?u=bs:u=Hs;break}let h=s.interpolation!==void 0?Rw[s.interpolation]:hr,f=this._getArrayFromAccessor(i);for(let d=0,p=l.length;d<p;d++){let x=new u(l[d]+"."+Ks[r.path],t.array,f,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Pd(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof Ms?Rd:Cu;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Ow(n,e,t){let i=e.attributes,s=new Wt;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){let u=Pd(Po[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new I,l=new I;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){let x=Pd(Po[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;let o=new gn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function m0(n,e,t){let i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(let o in i){let a=Cd[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return yt.workingColorSpace!==zn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${yt.workingColorSpace}" not supported.`),Wi(n,e),Ow(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Pw(n,e.targets,t):n})}var x0={type:"change"},Dd={type:"start"},_0={type:"end"},Pu=new Ui,y0=new mn,Uw=Math.cos(70*Zs.DEG2RAD),hn=new I,qn=2*Math.PI,Rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ld=1e-6,Iu=class extends Da{constructor(e,t=null){super(e,t),this.state=Rt.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xs.ROTATE,MIDDLE:Xs.DOLLY,RIGHT:Xs.PAN},this.touches={ONE:qs.ROTATE,TWO:qs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new $t,this._lastTargetPosition=new I,this._quat=new $t().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ws,this._sphericalDelta=new Ws,this._scale=1,this._panOffset=new I,this._rotateStart=new Ze,this._rotateEnd=new Ze,this._rotateDelta=new Ze,this._panStart=new Ze,this._panEnd=new Ze,this._panDelta=new Ze,this._dollyStart=new Ze,this._dollyEnd=new Ze,this._dollyDelta=new Ze,this._dollyDirection=new I,this._mouse=new Ze,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Bw.bind(this),this._onPointerDown=Fw.bind(this),this._onPointerUp=zw.bind(this),this._onContextMenu=qw.bind(this),this._onMouseWheel=Vw.bind(this),this._onKeyDown=Gw.bind(this),this._onTouchStart=Ww.bind(this),this._onTouchMove=Xw.bind(this),this._onMouseDown=kw.bind(this),this._onMouseMove=Hw.bind(this),this._interceptControlDown=$w.bind(this),this._interceptControlUp=Yw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Rt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(x0),this.update(),this.state=Rt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;hn.copy(t).sub(this.target),hn.applyQuaternion(this._quat),this._spherical.setFromVector3(hn),this.autoRotate&&this.state===Rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=qn:i>Math.PI&&(i-=qn),s<-Math.PI?s+=qn:s>Math.PI&&(s-=qn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(hn.setFromSpherical(this._spherical),hn.applyQuaternion(this._quatInverse),t.copy(this.target).add(hn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=hn.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=hn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Pu.origin.copy(this.object.position),Pu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Pu.direction))<Uw?this.object.lookAt(this.target):(y0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Pu.intersectPlane(y0,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ld||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ld||this._lastTargetPosition.distanceToSquared(this.target)>Ld?(this.dispatchEvent(x0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?qn/60*this.autoRotateSpeed*e:qn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){hn.setFromMatrixColumn(t,0),hn.multiplyScalar(-e),this._panOffset.add(hn)}_panUp(e,t){this.screenSpacePanning===!0?hn.setFromMatrixColumn(t,1):(hn.setFromMatrixColumn(t,0),hn.crossVectors(this.object.up,hn)),hn.multiplyScalar(e),this._panOffset.add(hn)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;hn.copy(s).sub(this.target);let r=hn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/t.clientHeight),this._rotateUp(qn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/t.clientHeight),this._rotateUp(qn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ze,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Fw(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Bw(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function zw(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(_0),this.state=Rt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function kw(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Xs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Rt.DOLLY;break;case Xs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Rt.ROTATE}break;case Xs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Rt.PAN}break;default:this.state=Rt.NONE}this.state!==Rt.NONE&&this.dispatchEvent(Dd)}function Hw(n){switch(this.state){case Rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Vw(n){this.enabled===!1||this.enableZoom===!1||this.state!==Rt.NONE||(n.preventDefault(),this.dispatchEvent(Dd),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(_0))}function Gw(n){this.enabled!==!1&&this._handleKeyDown(n)}function Ww(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case qs.ROTATE:if(this.enableRotate===!1){this.state=Rt.NONE;break}this._handleTouchStartRotate(n),this.state=Rt.TOUCH_ROTATE;break;case qs.PAN:if(this.enablePan===!1){this.state=Rt.NONE;break}this._handleTouchStartPan(n),this.state=Rt.TOUCH_PAN;break;default:this.state=Rt.NONE}break;case 2:switch(this.touches.TWO){case qs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Rt.TOUCH_DOLLY_PAN;break;case qs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Rt.TOUCH_DOLLY_ROTATE;break;default:this.state=Rt.NONE}break;default:this.state=Rt.NONE}this.state!==Rt.NONE&&this.dispatchEvent(Dd)}function Xw(n){switch(this._trackPointer(n),this.state){case Rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Rt.NONE}}function qw(n){this.enabled!==!1&&n.preventDefault()}function $w(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Yw(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Lu=class extends kn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Bi;e.deleteAttribute("uv");let t=new In({side:bn}),i=new In,s=new mr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ft(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new dr(e,i,6),a=new Vt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new ft(e,Io(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ft(e,Io(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new ft(e,Io(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new ft(e,Io(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let f=new ft(e,Io(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new ft(e,Io(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Io(n){return new Sa({color:0,emissive:16777215,emissiveIntensity:n})}var Nn=Uint8Array,Jn=Uint16Array,zd=Int32Array,kd=new Nn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Hd=new Nn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),v0=new Nn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),T0=function(n,e){for(var t=new Jn(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var s=new zd(t[30]),i=1;i<30;++i)for(var r=t[i];r<t[i+1];++r)s[r]=r-t[i]<<5|i;return{b:t,r:s}},A0=T0(kd,2),Zw=A0.b,Od=A0.r;Zw[28]=258,Od[258]=28;var R0=T0(Hd,0),p2=R0.b,b0=R0.r,Ud=new Jn(32768);for(Ct=0;Ct<32768;++Ct)Ts=(Ct&43690)>>1|(Ct&21845)<<1,Ts=(Ts&52428)>>2|(Ts&13107)<<2,Ts=(Ts&61680)>>4|(Ts&3855)<<4,Ud[Ct]=((Ts&65280)>>8|(Ts&255)<<8)>>1;var Ts,Ct,el=(function(n,e,t){for(var i=n.length,s=0,r=new Jn(e);s<i;++s)n[s]&&++r[n[s]-1];var o=new Jn(e);for(s=1;s<e;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(t){a=new Jn(1<<e);var l=15-e;for(s=0;s<i;++s)if(n[s])for(var c=s<<4|n[s],u=e-n[s],h=o[n[s]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[Ud[h]>>l]=c}else for(a=new Jn(i),s=0;s<i;++s)n[s]&&(a[s]=Ud[o[n[s]-1]++]>>15-n[s]);return a}),br=new Nn(288);for(Ct=0;Ct<144;++Ct)br[Ct]=8;var Ct;for(Ct=144;Ct<256;++Ct)br[Ct]=9;var Ct;for(Ct=256;Ct<280;++Ct)br[Ct]=7;var Ct;for(Ct=280;Ct<288;++Ct)br[Ct]=8;var Ct,Du=new Nn(32);for(Ct=0;Ct<32;++Ct)Du[Ct]=5;var Ct,Kw=el(br,9,0);var Jw=el(Du,5,0);var C0=function(n){return(n+7)/8|0},P0=function(n,e,t){return(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length),new Nn(n.subarray(e,t))};var jw=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Nu=function(n,e,t){var i=new Error(e||jw[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,Nu),!t)throw i;return i};var As=function(n,e,t){t<<=e&7;var i=e/8|0;n[i]|=t,n[i+1]|=t>>8},ja=function(n,e,t){t<<=e&7;var i=e/8|0;n[i]|=t,n[i+1]|=t>>8,n[i+2]|=t>>16},Nd=function(n,e){for(var t=[],i=0;i<n.length;++i)n[i]&&t.push({s:i,f:n[i]});var s=t.length,r=t.slice();if(!s)return{t:L0,l:0};if(s==1){var o=new Nn(t[0].s+1);return o[t[0].s]=1,{t:o,l:1}}t.sort(function(S,T){return S.f-T.f}),t.push({s:-1,f:25001});var a=t[0],l=t[1],c=0,u=1,h=2;for(t[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=s-1;)a=t[t[c].f<t[h].f?c++:h++],l=t[c!=u&&t[c].f<t[h].f?c++:h++],t[u++]={s:-1,f:a.f+l.f,l:a,r:l};for(var f=r[0].s,i=1;i<s;++i)r[i].s>f&&(f=r[i].s);var d=new Jn(f+1),p=Fd(t[u-1],d,0);if(p>e){var i=0,x=0,m=p-e,g=1<<m;for(r.sort(function(T,_){return d[_.s]-d[T.s]||T.f-_.f});i<s;++i){var b=r[i].s;if(d[b]>e)x+=g-(1<<p-d[b]),d[b]=e;else break}for(x>>=m;x>0;){var M=r[i].s;d[M]<e?x-=1<<e-d[M]++-1:++i}for(;i>=0&&x;--i){var y=r[i].s;d[y]==e&&(--d[y],++x)}p=e}return{t:new Nn(d),l:p}},Fd=function(n,e,t){return n.s==-1?Math.max(Fd(n.l,e,t+1),Fd(n.r,e,t+1)):e[n.s]=t},M0=function(n){for(var e=n.length;e&&!n[--e];);for(var t=new Jn(++e),i=0,s=n[0],r=1,o=function(l){t[i++]=l},a=1;a<=e;++a)if(n[a]==s&&a!=e)++r;else{if(!s&&r>2){for(;r>138;r-=138)o(32754);r>2&&(o(r>10?r-11<<5|28690:r-3<<5|12305),r=0)}else if(r>3){for(o(s),--r;r>6;r-=6)o(8304);r>2&&(o(r-3<<5|8208),r=0)}for(;r--;)o(s);r=1,s=n[a]}return{c:t.subarray(0,i),n:e}},Qa=function(n,e){for(var t=0,i=0;i<e.length;++i)t+=n[i]*e[i];return t},I0=function(n,e,t){var i=t.length,s=C0(e+2);n[s]=i&255,n[s+1]=i>>8,n[s+2]=n[s]^255,n[s+3]=n[s+1]^255;for(var r=0;r<i;++r)n[s+r+4]=t[r];return(s+4+i)*8},S0=function(n,e,t,i,s,r,o,a,l,c,u){As(e,u++,t),++s[256];for(var h=Nd(s,15),f=h.t,d=h.l,p=Nd(r,15),x=p.t,m=p.l,g=M0(f),b=g.c,M=g.n,y=M0(x),S=y.c,T=y.n,_=new Jn(19),w=0;w<b.length;++w)++_[b[w]&31];for(var w=0;w<S.length;++w)++_[S[w]&31];for(var D=Nd(_,7),L=D.t,z=D.l,W=19;W>4&&!L[v0[W-1]];--W);var k=c+5<<3,N=Qa(s,br)+Qa(r,Du)+o,G=Qa(s,f)+Qa(r,x)+o+14+3*W+Qa(_,L)+2*_[16]+3*_[17]+7*_[18];if(l>=0&&k<=N&&k<=G)return I0(e,u,n.subarray(l,l+c));var j,q,_e,Z;if(As(e,u,1+(G<N)),u+=2,G<N){j=el(f,d,0),q=f,_e=el(x,m,0),Z=x;var V=el(L,z,0);As(e,u,M-257),As(e,u+5,T-1),As(e,u+10,W-4),u+=14;for(var w=0;w<W;++w)As(e,u+3*w,L[v0[w]]);u+=3*W;for(var ee=[b,S],be=0;be<2;++be)for(var Re=ee[be],w=0;w<Re.length;++w){var K=Re[w]&31;As(e,u,V[K]),u+=L[K],K>15&&(As(e,u,Re[w]>>5&127),u+=Re[w]>>12)}}else j=Kw,q=br,_e=Jw,Z=Du;for(var w=0;w<a;++w){var ce=i[w];if(ce>255){var K=ce>>18&31;ja(e,u,j[K+257]),u+=q[K+257],K>7&&(As(e,u,ce>>23&31),u+=kd[K]);var B=ce&31;ja(e,u,_e[B]),u+=Z[B],B>3&&(ja(e,u,ce>>5&8191),u+=Hd[B])}else ja(e,u,j[ce]),u+=q[ce]}return ja(e,u,j[256]),u+q[256]},Qw=new zd([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),L0=new Nn(0),e1=function(n,e,t,i,s,r){var o=r.z||n.length,a=new Nn(i+o+5*(1+Math.ceil(o/7e3))+s),l=a.subarray(i,a.length-s),c=r.l,u=(r.r||0)&7;if(e){u&&(l[0]=r.r>>3);for(var h=Qw[e-1],f=h>>13,d=h&8191,p=(1<<t)-1,x=r.p||new Jn(32768),m=r.h||new Jn(p+1),g=Math.ceil(t/3),b=2*g,M=function(Me){return(n[Me]^n[Me+1]<<g^n[Me+2]<<b)&p},y=new zd(25e3),S=new Jn(288),T=new Jn(32),_=0,w=0,D=r.i||0,L=0,z=r.w||0,W=0;D+2<o;++D){var k=M(D),N=D&32767,G=m[k];if(x[N]=G,m[k]=N,z<=D){var j=o-D;if((_>7e3||L>24576)&&(j>423||!c)){u=S0(n,l,0,y,S,T,w,L,W,D-W,u),L=_=w=0,W=D;for(var q=0;q<286;++q)S[q]=0;for(var q=0;q<30;++q)T[q]=0}var _e=2,Z=0,V=d,ee=N-G&32767;if(j>2&&k==M(D-ee))for(var be=Math.min(f,j)-1,Re=Math.min(32767,D),K=Math.min(258,j);ee<=Re&&--V&&N!=G;){if(n[D+_e]==n[D+_e-ee]){for(var ce=0;ce<K&&n[D+ce]==n[D+ce-ee];++ce);if(ce>_e){if(_e=ce,Z=ee,ce>be)break;for(var B=Math.min(ee,ce-2),ne=0,q=0;q<B;++q){var ge=D-ee+q&32767,we=x[ge],Ye=ge-we&32767;Ye>ne&&(ne=Ye,G=ge)}}}N=G,G=x[N],ee+=N-G&32767}if(Z){y[L++]=268435456|Od[_e]<<18|b0[Z];var Fe=Od[_e]&31,Xe=b0[Z]&31;w+=kd[Fe]+Hd[Xe],++S[257+Fe],++T[Xe],z=D+_e,++_}else y[L++]=n[D],++S[n[D]]}}for(D=Math.max(D,z);D<o;++D)y[L++]=n[D],++S[n[D]];u=S0(n,l,c,y,S,T,w,L,W,D-W,u),c||(r.r=u&7|l[u/8|0]<<3,u-=7,r.h=m,r.p=x,r.i=D,r.w=z)}else{for(var D=r.w||0;D<o+c;D+=65535){var ue=D+65535;ue>=o&&(l[u/8|0]=c,ue=o),u=I0(l,u+1,n.subarray(D,ue))}r.i=o}return P0(a,0,i+C0(u)+s)},t1=(function(){for(var n=new Int32Array(256),e=0;e<256;++e){for(var t=e,i=9;--i;)t=(t&1&&-306674912)^t>>>1;n[e]=t}return n})(),n1=function(){var n=-1;return{p:function(e){for(var t=n,i=0;i<e.length;++i)t=t1[t&255^e[i]]^t>>>8;n=t},d:function(){return~n}}};var i1=function(n,e,t,i,s){if(!s&&(s={l:1},e.dictionary)){var r=e.dictionary.subarray(-32768),o=new Nn(r.length+n.length);o.set(r),o.set(n,r.length),n=o,s.w=r.length}return e1(n,e.level==null?6:e.level,e.mem==null?s.l?Math.ceil(Math.max(8,Math.min(13,Math.log(n.length)))*1.5):20:12+e.mem,t,i,s)},D0=function(n,e){var t={};for(var i in n)t[i]=n[i];for(var i in e)t[i]=e[i];return t};var Sn=function(n,e,t){for(;t;++e)n[e]=t,t>>>=8};function s1(n,e){return i1(n,e||{},0,0)}var N0=function(n,e,t,i){for(var s in n){var r=n[s],o=e+s,a=i;Array.isArray(r)&&(a=D0(i,r[1]),r=r[0]),ArrayBuffer.isView(r)?t[o]=[r,a]:(t[o+="/"]=[new Nn(0),a],N0(r,o,t,i))}},E0=typeof TextEncoder<"u"&&new TextEncoder,r1=typeof TextDecoder<"u"&&new TextDecoder,o1=0;try{r1.decode(L0,{stream:!0}),o1=1}catch{}function tl(n,e){if(e){for(var t=new Nn(n.length),i=0;i<n.length;++i)t[i]=n.charCodeAt(i);return t}if(E0)return E0.encode(n);for(var s=n.length,r=new Nn(n.length+(n.length>>1)),o=0,a=function(u){r[o++]=u},i=0;i<s;++i){if(o+5>r.length){var l=new Nn(o+8+(s-i<<1));l.set(r),r=l}var c=n.charCodeAt(i);c<128||e?a(c):c<2048?(a(192|c>>6),a(128|c&63)):c>55295&&c<57344?(c=65536+(c&1047552)|n.charCodeAt(++i)&1023,a(240|c>>18),a(128|c>>12&63),a(128|c>>6&63),a(128|c&63)):(a(224|c>>12),a(128|c>>6&63),a(128|c&63))}return P0(r,0,o)}var Bd=function(n){var e=0;if(n)for(var t in n){var i=n[t].length;i>65535&&Nu(9),e+=i+4}return e},w0=function(n,e,t,i,s,r,o,a){var l=i.length,c=t.extra,u=a&&a.length,h=Bd(c);Sn(n,e,o!=null?33639248:67324752),e+=4,o!=null&&(n[e++]=20,n[e++]=t.os),n[e]=20,e+=2,n[e++]=t.flag<<1|(r<0&&8),n[e++]=s&&8,n[e++]=t.compression&255,n[e++]=t.compression>>8;var f=new Date(t.mtime==null?Date.now():t.mtime),d=f.getFullYear()-1980;if((d<0||d>119)&&Nu(10),Sn(n,e,d<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),e+=4,r!=-1&&(Sn(n,e,t.crc),Sn(n,e+4,r<0?-r-2:r),Sn(n,e+8,t.size)),Sn(n,e+12,l),Sn(n,e+14,h),e+=16,o!=null&&(Sn(n,e,u),Sn(n,e+6,t.attrs),Sn(n,e+10,o),e+=14),n.set(i,e),e+=l,h)for(var p in c){var x=c[p],m=x.length;Sn(n,e,+p),Sn(n,e+2,m),n.set(x,e+4),e+=4+m}return u&&(n.set(a,e),e+=u),e},a1=function(n,e,t,i,s){Sn(n,e,101010256),Sn(n,e+8,t),Sn(n,e+10,t),Sn(n,e+12,i),Sn(n,e+16,s)};function O0(n,e){e||(e={});var t={},i=[];N0(n,"",t,e);var s=0,r=0;for(var o in t){var a=t[o],l=a[0],c=a[1],u=c.level==0?0:8,h=tl(o),f=h.length,d=c.comment,p=d&&tl(d),x=p&&p.length,m=Bd(c.extra);f>65535&&Nu(11);var g=u?s1(l,c):l,b=g.length,M=n1();M.p(l),i.push(D0(c,{size:l.length,crc:M.d(),c:g,f:h,m:p,u:f!=o.length||p&&d.length!=x,o:s,compression:u})),s+=30+f+m+b,r+=76+2*(f+m)+(x||0)+b}for(var y=new Nn(r+22),S=s,T=r-s,_=0;_<i.length;++_){var h=i[_];w0(y,h.o,h,h.f,h.u,h.c.length);var w=30+h.f.length+Bd(h.extra);y.set(h.c,h.o+w),w0(y,s,h,h.f,h.u,h.c.length,h.o,h.m),s+=16+w+(h.m?h.m.length:0)}return a1(y,s,i.length,T,S),y}var On=class{constructor(e,t="",i=[],s=[]){this.name=e,this.type=t,this.metadata=i,this.properties=s,this.children=[]}addMetadata(e,t){this.metadata.push({key:e,value:t})}addProperty(e,t=[]){this.properties.push({property:e,metadata:t})}addChild(e){this.children.push(e)}toString(e=0){let t="	".repeat(e),i=this.metadata.map(u=>{let h=u.key,f=u.value;if(Array.isArray(f)){let d=[];return d.push(`${h} = {`),f.forEach(p=>{d.push(`${t}		${p}`)}),d.push(`${t}	}`),d.join(`
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
${t}}`}},Uu=class{constructor(){this.textureUtils=null}setTextureUtils(e){this.textureUtils=e}parse(e,t,i,s){this.parseAsync(e,s).then(t).catch(i)}async parseAsync(e,t={}){t=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},includeAnchoringProperties:!0,onlyVisible:!0,quickLookCompatible:!1,maxTextureSize:1024,animations:[],animationFrameRate:60},t);let i=new Set,s={},r="model.usda";s[r]=null;let o=c1(e,t.animations);t.animationTracks=o;let a=new On("Root","Xform"),l=new On("Scenes","Scope");l.addMetadata("kind",'"sceneLibrary"'),a.addChild(l);let c="Scene",u=new On(c,"Xform");u.addMetadata("customData",["bool preliminary_collidesWithEnvironment = 0",`string sceneName = "${c}"`]),u.addMetadata("sceneName",`"${c}"`),t.includeAnchoringProperties&&(u.addProperty(`token preliminary:anchoring:type = "${t.ar.anchoring.type}"`),u.addProperty(`token preliminary:planeAnchoring:alignment = "${t.ar.planeAnchoring.alignment}"`)),l.addChild(u);let h,f={},d={};e.isScene?V0(e,u,f,i,s,t):G0(e,u,f,i,s,t);let p=y1(f,d,t.quickLookCompatible),x=o.size>0?{fps:t.animationFrameRate,endTimeCode:u1(t.animations)*t.animationFrameRate}:null;h=H0(x)+`
`+a.toString()+`

`+p.toString(),s[r]=tl(h),h=null;for(let g in d){let b=d[g];if(b.isCompressedTexture===!0){if(this.textureUtils===null)throw new Error("THREE.USDZExporter: setTextureUtils() must be called to process compressed textures.");b=await this.textureUtils.decompress(b)}let M=l1(b.image,b.flipY,t.maxTextureSize),y=b.userData.mimeType==="image/jpeg"?"image/jpeg":"image/png",S=await new Promise(T=>M.toBlob(T,y));s[`textures/Texture_${g}.${k0(b)}`]=new Uint8Array(await S.arrayBuffer())}let m=0;for(let g in s){let b=s[g],M=34+g.length;m+=M;let y=m&63;if(y!==4){let S=64-y,T=new Uint8Array(S);s[g]=[b,{extra:{12345:T}}]}m=b.length}return O0(s,{level:0,mtime:new Date})}};function z0(n,e){let t=n.name;return t=t.replace(/[^A-Za-z0-9_]/g,""),/^[0-9]/.test(t)&&(t="_"+t),t===""&&(n.isCamera?t="Camera":t="Object"),e.has(t)&&(t=t+"_"+n.id),e.add(t),t}function k0(n){return n.userData.mimeType==="image/jpeg"?"jpg":"png"}function l1(n,e,t){if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&n instanceof ImageBitmap){let i=t/Math.max(n.width,n.height),s=document.createElement("canvas");s.width=n.width*Math.min(1,i),s.height=n.height*Math.min(1,i);let r=s.getContext("2d");return e===!0&&(r.translate(0,s.height),r.scale(1,-1)),r.drawImage(n,0,0,s.width,s.height),s}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}var vt=7;function H0(n=null){return`#usda 1.0
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
`}function c1(n,e){let t=new Map;for(let i=0;i<e.length;i++){let s=e[i];for(let r=0;r<s.tracks.length;r++){let o=s.tracks[r],a=It.parseTrackName(o.name),l=It.findNode(n,a.nodeName);if(l==null)continue;let c=a.propertyName;if(c!=="position"&&c!=="quaternion"&&c!=="scale")continue;let u=t.get(l);u===void 0&&(u={},t.set(l,u)),u[c]=o}}return t}function u1(n){let e=0;for(let t=0;t<n.length;t++)n[t].duration>e&&(e=n[t].duration);return e}function U0(n,e,t,i){let s=t.times,r=t.values,o=[];for(let a=0;a<s.length;a++){let l=a*3;o.push(`${(s[a]*i).toPrecision(vt)}: (${r[l].toPrecision(vt)}, ${r[l+1].toPrecision(vt)}, ${r[l+2].toPrecision(vt)})`)}return`${e} ${n}.timeSamples = {
	${o.join(`,
	`)},
}`}function h1(n,e){let t=n.times,i=n.values,s=[];for(let r=0;r<t.length;r++){let o=r*4;s.push(`${(t[r]*e).toPrecision(vt)}: (${i[o+3].toPrecision(vt)}, ${i[o].toPrecision(vt)}, ${i[o+1].toPrecision(vt)}, ${i[o+2].toPrecision(vt)})`)}return`quatf xformOp:orient.timeSamples = {
	${s.join(`,
	`)},
}`}function V0(n,e,t,i,s,r){for(let o=0,a=n.children.length;o<a;o++)G0(n.children[o],e,t,i,s,r)}function G0(n,e,t,i,s,r){if(n.visible===!1&&r.onlyVisible===!0)return;let o;if(n.isMesh){let a=n.geometry,l=Array.isArray(n.material),c=l?n.material:[n.material];for(let h=0;h<c.length;h++){let f=c[h];f.isMeshStandardMaterial||console.warn("THREE.USDZExporter: Use MeshStandardMaterial for best results."),f.uuid in t||(t[f.uuid]=f)}let u=c.map(h=>t[h.uuid]);if(l===!1){let h=`geometries/Geometry_${a.id}.usda`;if(!(h in s)){let f=p1(a);s[h]=tl(H0()+`
`+f.toString())}}o=f1(n,a,u,i,r)}else n.isCamera?o=b1(n,i,r):o=X0(n,i,r);e.addChild(o),V0(n,o,t,i,s,r)}function W0(n,e,t){let i=t.animationTracks.get(e),s=e.pivot!==null;if(!s&&i===void 0){let c=d1(e.matrix);n.addProperty(`matrix4d xformOp:transform = ${c}`),n.addProperty('uniform token[] xformOpOrder = ["xformOp:transform"]');return}let r=t.animationFrameRate,o=e.position,a=e.quaternion,l=e.scale;if(i!==void 0&&i.position!==void 0?n.addProperty(U0("xformOp:translate","float3",i.position,r)):n.addProperty(`float3 xformOp:translate = (${o.x.toPrecision(vt)}, ${o.y.toPrecision(vt)}, ${o.z.toPrecision(vt)})`),s){let c=e.pivot;n.addProperty(`float3 xformOp:translate:pivot = (${c.x.toPrecision(vt)}, ${c.y.toPrecision(vt)}, ${c.z.toPrecision(vt)})`)}i!==void 0&&i.quaternion!==void 0?n.addProperty(h1(i.quaternion,r)):n.addProperty(`quatf xformOp:orient = (${a.w.toPrecision(vt)}, ${a.x.toPrecision(vt)}, ${a.y.toPrecision(vt)}, ${a.z.toPrecision(vt)})`),i!==void 0&&i.scale!==void 0?n.addProperty(U0("xformOp:scale","float3",i.scale,r)):n.addProperty(`float3 xformOp:scale = (${l.x.toPrecision(vt)}, ${l.y.toPrecision(vt)}, ${l.z.toPrecision(vt)})`),s?n.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:translate:pivot", "xformOp:orient", "xformOp:scale", "!invert!xformOp:translate:pivot"]'):n.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:orient", "xformOp:scale"]')}function X0(n,e,t){let i=z0(n,e);n.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",n);let s=new On(i,"Xform");return W0(s,n,t),s}function f1(n,e,t,i,s){let r=X0(n,i,s);return t.length===1?(r.addMetadata("prepend references",`@./geometries/Geometry_${e.id}.usda@</Geometry>`),r.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),r.addProperty(`rel material:binding = </Materials/Material_${t[0].id}>`)):r.addChild(q0(e,t)),r}function d1(n){let e=n.elements;return`( ${Ou(e,0)}, ${Ou(e,4)}, ${Ou(e,8)}, ${Ou(e,12)} )`}function Ou(n,e){return`(${n[e+0]}, ${n[e+1]}, ${n[e+2]}, ${n[e+3]})`}function p1(n){let e=new On("Geometry"),t=q0(n);return e.addChild(t),e}function q0(n,e=null){let t="Geometry",i=n.attributes,s=i.position.count,r=new On(t,"Mesh");r.addProperty(`int[] faceVertexCounts = [${m1(n)}]`),r.addProperty(`int[] faceVertexIndices = [${g1(n)}]`),r.addProperty(`normal3f[] normals = [${Vd(i.normal,s)}]`,['interpolation = "vertex"']),r.addProperty(`point3f[] points = [${Vd(i.position,s)}]`);for(let a=0;a<4;a++){let l=a>0?a:"",c=i["uv"+l];c!==void 0&&r.addProperty(`texCoord2f[] primvars:st${l} = [${x1(c)}]`,['interpolation = "vertex"'])}let o=i.color;if(o!==void 0&&r.addProperty(`color3f[] primvars:displayColor = [${Vd(o,s)}]`,['interpolation = "vertex"']),r.addProperty('uniform token subdivisionScheme = "none"'),e!==null){let a=n.groups,l=(n.index!==null?n.index.count:i.position.count)/3;for(let c=0;c<a.length;c++){let u=a[c],h=e[u.materialIndex];if(h===void 0)continue;let f=Math.floor(u.start/3),d=Math.min(f+Math.floor(u.count/3),l),p=[];for(let m=f;m<d;m++)p.push(m);let x=new On(`subset_${c}`,"GeomSubset");x.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),x.addProperty('uniform token elementType = "face"'),x.addProperty('uniform token familyName = "materialBind"'),x.addProperty(`int[] indices = [${p.join(", ")}]`),x.addProperty(`rel material:binding = </Materials/Material_${h.id}>`),r.addChild(x)}}return r}function m1(n){let e=n.index!==null?n.index.count:n.attributes.position.count;return Array(e/3).fill(3).join(", ")}function g1(n){let e=n.index,t=[];if(e!==null)for(let i=0;i<e.count;i++)t.push(e.getX(i));else{let i=n.attributes.position.count;for(let s=0;s<i;s++)t.push(s)}return t.join(", ")}function Vd(n,e){if(n===void 0)return console.warn("USDZExporter: Normals missing."),Array(e).fill("(0, 0, 0)").join(", ");let t=[];for(let i=0;i<n.count;i++){let s=n.getX(i),r=n.getY(i),o=n.getZ(i);t.push(`(${s.toPrecision(vt)}, ${r.toPrecision(vt)}, ${o.toPrecision(vt)})`)}return t.join(", ")}function x1(n){let e=[];for(let t=0;t<n.count;t++){let i=n.getX(t),s=n.getY(t);e.push(`(${i.toPrecision(vt)}, ${1-s.toPrecision(vt)})`)}return e.join(", ")}function y1(n,e,t=!1){let i=new On("Materials");for(let s in n){let r=n[s];i.addChild(_1(r,e,t))}return i}function _1(n,e,t=!1){let i=new On(`Material_${n.id}`,"Material");function s(o,a,l){let c=o.source.id+"_"+o.flipY;e[c]=o;let u=o.channel>0?"st"+o.channel:"st",h={1e3:"repeat",1001:"clamp",1002:"mirror"},f=o.repeat.clone(),d=o.offset.clone(),p=o.rotation,x=Math.sin(p),m=Math.cos(p);d.y=1-d.y-f.y,t?(d.x=d.x/f.x,d.y=d.y/f.y,d.x+=x/f.x,d.y+=m-1):(d.x+=x*f.x,d.y+=(1-m)*f.y);let g=new On(`PrimvarReader_${a}`,"Shader");g.addProperty('uniform token info:id = "UsdPrimvarReader_float2"'),g.addProperty("float2 inputs:fallback = (0.0, 0.0)"),g.addProperty(`string inputs:varname = "${u}"`),g.addProperty("float2 outputs:result");let b=new On(`Transform2d_${a}`,"Shader");b.addProperty('uniform token info:id = "UsdTransform2d"'),b.addProperty(`float2 inputs:in.connect = </Materials/Material_${n.id}/PrimvarReader_${a}.outputs:result>`),b.addProperty(`float inputs:rotation = ${(p*(180/Math.PI)).toFixed(vt)}`),b.addProperty(`float2 inputs:scale = ${B0(f)}`),b.addProperty(`float2 inputs:translation = ${B0(d)}`),b.addProperty("float2 outputs:result");let M=new On(`Texture_${o.id}_${a}`,"Shader");if(M.addProperty('uniform token info:id = "UsdUVTexture"'),M.addProperty(`asset inputs:file = @textures/Texture_${c}.${k0(o)}@`),M.addProperty(`float2 inputs:st.connect = </Materials/Material_${n.id}/Transform2d_${a}.outputs:result>`),l!==void 0){let y=a==="diffuse"?n.opacity:1;M.addProperty(`float4 inputs:scale = ${v1(l,y)}`)}if(a==="normal"){let y=n.normalScale.x;M.addProperty(`float4 inputs:scale = (${2*y}, ${2*y}, 2, 1)`),M.addProperty(`float4 inputs:bias = (${-y}, ${-y}, -1, 0)`)}return M.addProperty(`token inputs:sourceColorSpace = "${o.colorSpace===wi?"raw":"sRGB"}"`),M.addProperty(`token inputs:wrapS = "${h[o.wrapS]}"`),M.addProperty(`token inputs:wrapT = "${h[o.wrapT]}"`),M.addProperty("float outputs:r"),M.addProperty("float outputs:g"),M.addProperty("float outputs:b"),M.addProperty("float3 outputs:rgb"),(n.transparent||n.alphaTest>0)&&M.addProperty("float outputs:a"),[g,b,M]}n.side===Dt&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",n);let r=new On("PreviewSurface","Shader");if(r.addProperty('uniform token info:id = "UsdPreviewSurface"'),n.map!==null?(r.addProperty(`color3f inputs:diffuseColor.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:rgb>`),n.transparent?r.addProperty(`float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:a>`):n.alphaTest>0&&(r.addProperty(`float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:a>`),r.addProperty(`float inputs:opacityThreshold = ${n.alphaTest}`)),s(n.map,"diffuse",n.color).forEach(a=>i.addChild(a))):r.addProperty(`color3f inputs:diffuseColor = ${F0(n.color)}`),n.emissive){let o=n.emissiveIntensity??1;if(n.emissiveMap){r.addProperty(`color3f inputs:emissiveColor.connect = </Materials/Material_${n.id}/Texture_${n.emissiveMap.id}_emissive.outputs:rgb>`);let a=new Ke(n.emissive.r*o,n.emissive.g*o,n.emissive.b*o);s(n.emissiveMap,"emissive",a).forEach(c=>i.addChild(c))}else n.emissive.getHex()>0&&r.addProperty(`color3f inputs:emissiveColor = ${F0(n.emissive)}`)}if(n.normalMap&&(r.addProperty(`normal3f inputs:normal.connect = </Materials/Material_${n.id}/Texture_${n.normalMap.id}_normal.outputs:rgb>`),s(n.normalMap,"normal").forEach(a=>i.addChild(a))),n.aoMap){r.addProperty(`float inputs:occlusion.connect = </Materials/Material_${n.id}/Texture_${n.aoMap.id}_occlusion.outputs:r>`);let o=n.aoMapIntensity??1,a=new Ke(o,o,o);s(n.aoMap,"occlusion",a).forEach(c=>i.addChild(c))}if(n.roughnessMap){r.addProperty(`float inputs:roughness.connect = </Materials/Material_${n.id}/Texture_${n.roughnessMap.id}_roughness.outputs:g>`);let o=new Ke(n.roughness,n.roughness,n.roughness);s(n.roughnessMap,"roughness",o).forEach(l=>i.addChild(l))}else r.addProperty(`float inputs:roughness = ${n.roughness??1}`);if(n.metalnessMap){r.addProperty(`float inputs:metallic.connect = </Materials/Material_${n.id}/Texture_${n.metalnessMap.id}_metallic.outputs:b>`);let o=new Ke(n.metalness,n.metalness,n.metalness);s(n.metalnessMap,"metallic",o).forEach(l=>i.addChild(l))}else r.addProperty(`float inputs:metallic = ${n.metalness??0}`);if(n.alphaMap?(r.addProperty(`float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.alphaMap.id}_opacity.outputs:r>`),r.addProperty("float inputs:opacityThreshold = 0.0001"),s(n.alphaMap,"opacity").forEach(a=>i.addChild(a))):r.addProperty(`float inputs:opacity = ${n.opacity}`),n.isMeshPhysicalMaterial){if(n.clearcoatMap!==null){r.addProperty(`float inputs:clearcoat.connect = </Materials/Material_${n.id}/Texture_${n.clearcoatMap.id}_clearcoat.outputs:r>`);let o=new Ke(n.clearcoat,n.clearcoat,n.clearcoat);s(n.clearcoatMap,"clearcoat",o).forEach(l=>i.addChild(l))}else r.addProperty(`float inputs:clearcoat = ${n.clearcoat}`);if(n.clearcoatRoughnessMap!==null){r.addProperty(`float inputs:clearcoatRoughness.connect = </Materials/Material_${n.id}/Texture_${n.clearcoatRoughnessMap.id}_clearcoatRoughness.outputs:g>`);let o=new Ke(n.clearcoatRoughness,n.clearcoatRoughness,n.clearcoatRoughness);s(n.clearcoatRoughnessMap,"clearcoatRoughness",o).forEach(l=>i.addChild(l))}else r.addProperty(`float inputs:clearcoatRoughness = ${n.clearcoatRoughness}`);r.addProperty(`float inputs:ior = ${n.ior}`)}return r.addProperty("int inputs:useSpecularWorkflow = 0"),r.addProperty("token outputs:surface"),i.addChild(r),i.addProperty(`token outputs:surface.connect = </Materials/Material_${n.id}/PreviewSurface.outputs:surface>`),i}function F0(n){return`(${n.r}, ${n.g}, ${n.b})`}function v1(n,e=1){return`(${n.r}, ${n.g}, ${n.b}, ${e})`}function B0(n){return`(${n.x}, ${n.y})`}function b1(n,e,t){let i=z0(n,e);n.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",n);let s=new On(i,"Camera");W0(s,n,t);let r=n.isOrthographicCamera?"orthographic":"perspective";s.addProperty(`token projection = "${r}"`);let o=`(${n.near.toPrecision(vt)}, ${n.far.toPrecision(vt)})`;s.addProperty(`float2 clippingRange = ${o}`);let a;n.isOrthographicCamera?a=((Math.abs(n.left)+Math.abs(n.right))*10).toPrecision(vt):a=n.getFilmWidth().toPrecision(vt),s.addProperty(`float horizontalAperture = ${a}`);let l;if(n.isOrthographicCamera?l=((Math.abs(n.top)+Math.abs(n.bottom))*10).toPrecision(vt):l=n.getFilmHeight().toPrecision(vt),s.addProperty(`float verticalAperture = ${l}`),n.isPerspectiveCamera){let c=n.getFocalLength().toPrecision(vt);s.addProperty(`float focalLength = ${c}`);let u=n.focus.toPrecision(vt);s.addProperty(`float focusDistance = ${u}`)}return s}var $0=new Wt,Fu=new I,Ai=class extends Pa{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Ht(e,3)),this.setAttribute("uv",new Ht(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new Gs(t,6,1);return this.setAttribute("instanceStart",new Cn(i,3,0)),this.setAttribute("instanceEnd",new Cn(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new Gs(t,6,1);return this.setAttribute("instanceColorStart",new Cn(i,3,0)),this.setAttribute("instanceColorEnd",new Cn(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Ma(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wt);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),$0.setFromBufferAttribute(t),this.boundingBox.union($0))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Fu.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Fu)),Fu.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Fu));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};We.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ze},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Vn.line={uniforms:qa.merge([We.common,We.fog,We.line]),vertexShader:`
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
		`};var Xi=class extends xn{constructor(e){super({type:"LineMaterial",uniforms:qa.clone(Vn.line.uniforms),vertexShader:Vn.line.vertexShader,fragmentShader:Vn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Gd=new bt,Y0=new I,Z0=new I,En=new bt,wn=new bt,qi=new bt,Wd=new I,Xd=new ot,Tn=new La,K0=new I,Bu=new Wt,zu=new gn,$i=new bt,Yi,Mr;function J0(n,e,t){return $i.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),$i.multiplyScalar(1/$i.w),$i.x=Mr/t.width,$i.y=Mr/t.height,$i.applyMatrix4(n.projectionMatrixInverse),$i.multiplyScalar(1/$i.w),Math.abs(Math.max($i.x,$i.y))}function M1(n,e){let t=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,o=Math.min(i.instanceCount,s.count);for(let a=0,l=o;a<l;a++){Tn.start.fromBufferAttribute(s,a),Tn.end.fromBufferAttribute(r,a),Tn.applyMatrix4(t);let c=new I,u=new I;Yi.distanceSqToSegment(Tn.start,Tn.end,u,c),u.distanceTo(c)<Mr*.5&&e.push({point:u,pointOnLine:c,distance:Yi.origin.distanceTo(u),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function S1(n,e,t){let i=e.projectionMatrix,r=n.material.resolution,o=n.matrixWorld,a=n.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),h=-e.near;Yi.at(1,qi),qi.w=1,qi.applyMatrix4(e.matrixWorldInverse),qi.applyMatrix4(i),qi.multiplyScalar(1/qi.w),qi.x*=r.x/2,qi.y*=r.y/2,qi.z=0,Wd.copy(qi),Xd.multiplyMatrices(e.matrixWorldInverse,o);for(let f=0,d=u;f<d;f++){if(En.fromBufferAttribute(l,f),wn.fromBufferAttribute(c,f),En.w=1,wn.w=1,En.applyMatrix4(Xd),wn.applyMatrix4(Xd),En.z>h&&wn.z>h)continue;if(En.z>h){let M=En.z-wn.z,y=(En.z-h)/M;En.lerp(wn,y)}else if(wn.z>h){let M=wn.z-En.z,y=(wn.z-h)/M;wn.lerp(En,y)}En.applyMatrix4(i),wn.applyMatrix4(i),En.multiplyScalar(1/En.w),wn.multiplyScalar(1/wn.w),En.x*=r.x/2,En.y*=r.y/2,wn.x*=r.x/2,wn.y*=r.y/2,Tn.start.copy(En),Tn.start.z=0,Tn.end.copy(wn),Tn.end.z=0;let x=Tn.closestPointToPointParameter(Wd,!0);Tn.at(x,K0);let m=Zs.lerp(En.z,wn.z,x),g=m>=-1&&m<=1,b=Wd.distanceTo(K0)<Mr*.5;if(g&&b){Tn.start.fromBufferAttribute(l,f),Tn.end.fromBufferAttribute(c,f),Tn.start.applyMatrix4(o),Tn.end.applyMatrix4(o);let M=new I,y=new I;Yi.distanceSqToSegment(Tn.start,Tn.end,y,M),t.push({point:y,pointOnLine:M,distance:Yi.origin.distanceTo(y),object:n,face:null,faceIndex:f,uv:null,uv1:null})}}}var Js=class extends ft{constructor(e=new Ai,t=new Xi({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)Y0.fromBufferAttribute(t,o),Z0.fromBufferAttribute(i,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Y0.distanceTo(Z0);let r=new Gs(s,2,1);return e.setAttribute("instanceDistanceStart",new Cn(r,1,0)),e.setAttribute("instanceDistanceEnd",new Cn(r,1,1)),this}raycast(e,t){let i=this.material.worldUnits,s=e.camera;if(s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),i===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Yi=e.ray;let o=this.matrixWorld,a=this.geometry,l=this.material;Mr=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),zu.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=Mr*.5;else{let h=Math.max(s.near,zu.distanceToPoint(Yi.origin));c=J0(s,h,l.resolution)}if(zu.radius+=c,Yi.intersectsSphere(zu)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Bu.copy(a.boundingBox).applyMatrix4(o);let u;if(i)u=Mr*.5;else{let h=Math.max(s.near,Bu.distanceToPoint(Yi.origin));u=J0(s,h,l.resolution)}Bu.expandByScalar(u),Yi.intersectsBox(Bu)!==!1&&(i?M1(this,t):S1(this,s,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Gd),this.material.uniforms.resolution.value.set(Gd.z,Gd.w))}};var ex="blueprints.edgeMode",E1="blueprints.edgesEnabled",Sr="none",Er="transparent",il="opaque",w1=20,tx=2.5,nx=0,Hu=35e-5,$d=2e-6;function T1(n){let t=(Array.isArray(n?.material)?n.material[0]:n?.material)?.userData?.layerDepthBias??0;return(Number(t)+1)*$d}var nl=1,ix=3,A1=.0012,R1=.0036,C1=.02,P1=.0035,j0=.012;function Q0(n){return n===Sr||n===Er||n===il?n:n==="1"||n==="true"?Er:n==="0"||n==="false"?Sr:null}function sx(){try{let n=Q0(localStorage.getItem(ex));if(n)return n;let e=Q0(localStorage.getItem(E1));if(e)return Zd(e),e}catch{}return Er}function Zd(n){try{localStorage.setItem(ex,n)}catch{}}function Un(n){return!!(n&&n.userData&&n.userData.isEdgeOverlay)}function rx(n){let e=n?.getAttribute?.("position");if(!e||!e.count)return new Float32Array(0);let t=new va(n,w1),i=t.getAttribute("position"),s=i&&i.array?i.array instanceof Float32Array?i.array.slice():Float32Array.from(i.array):new Float32Array(0);return t.dispose(),s}function I1(n,e){if(!e.length)return n;if(!n.length)return e;let t=new Float32Array(n.length+e.length);return t.set(n,0),t.set(e,n.length),t}var ku=new I;function ox(n){let e=[];for(let t=0;t+5<n.length;t+=6){let i=n[t],s=n[t+1],r=n[t+2],o=n[t+3],a=n[t+4],l=n[t+5],c=o-i,u=a-s,h=l-r,f=Math.hypot(c,u,h);f<1e-6||e.push({ax:i,ay:s,az:r,bx:o,by:a,bz:l,dx:c/f,dy:u/f,dz:h/f,len:f})}return e}function L1(n,e,t,i,s,r){let o=d=>Math.round(d/5e-4),a=o(n),l=o(e),c=o(t),u=o(i),h=o(s),f=o(r);if(a>u||a===u&&l>h||a===u&&l===h&&c>f){let d=a;a=u,u=d;let p=l;l=h,h=p;let x=c;c=f,f=x}return`${a},${l},${c},${u},${h},${f}`}function ax(n){let e=ox(n),t=[],i=new Set;for(let s=0;s<e.length;s++){let r=e[s];for(let o=s+1;o<e.length;o++){let a=e[o];if(Math.abs(r.dx*a.dx+r.dy*a.dy+r.dz*a.dz)<.985)continue;let c=r.ax-a.ax,u=r.ay-a.ay,h=r.az-a.az,f=c*r.dx+u*r.dy+h*r.dz,d=c-f*r.dx,p=u-f*r.dy,x=h-f*r.dz,m=Math.hypot(d,p,x);if(m<A1||m>R1)continue;let g=(a.ax-r.ax)*r.dx+(a.ay-r.ay)*r.dy+(a.az-r.az)*r.dz,b=(a.bx-r.ax)*r.dx+(a.by-r.ay)*r.dy+(a.bz-r.az)*r.dz,M=Math.max(0,Math.min(g,b)),y=Math.min(r.len,Math.max(g,b));if(y-M<C1)continue;let S=-d/m*(m*.5),T=-p/m*(m*.5),_=-x/m*(m*.5),w=r.ax+r.dx*M+S,D=r.ay+r.dy*M+T,L=r.az+r.dz*M+_,z=r.ax+r.dx*y+S,W=r.ay+r.dy*y+T,k=r.az+r.dz*y+_,N=L1(w,D,L,z,W,k);i.has(N)||(i.add(N),t.push(w,D,L,z,W,k))}}return new Float32Array(t)}function D1(n){let e=n.getAttribute("position"),t=n.getIndex(),i=0,s=0,r=0,o=t?t.count:e.count,a=c=>{let u=t?t.getX(c):c;return[e.getX(u),e.getY(u),e.getZ(u)]};for(let c=0;c+2<o;c+=3){let u=a(c),h=a(c+1),f=a(c+2),d=h[0]-u[0],p=h[1]-u[1],x=h[2]-u[2],m=f[0]-u[0],g=f[1]-u[1],b=f[2]-u[2];i+=p*b-x*g,s+=x*m-d*b,r+=d*g-p*m}let l=Math.hypot(i,s,r)||1;return{x:i/l,y:s/l,z:r/l}}function N1(n,e){let t=n.getAttribute("position"),i,s,r;Math.abs(e.z)<.9?(i=-e.y,s=e.x,r=0):(i=0,s=-e.z,r=e.y);let o=Math.hypot(i,s,r)||1;i/=o,s/=o,r/=o;let a=e.y*r-e.z*s,l=e.z*i-e.x*r,c=e.x*s-e.y*i,u=1/0,h=-1/0,f=1/0,d=-1/0;for(let p=0;p<t.count;p++){let x=t.getX(p),m=t.getY(p),g=t.getZ(p),b=x*i+m*s+g*r,M=x*a+m*l+g*c;b<u&&(u=b),b>h&&(h=b),M<f&&(f=M),M>d&&(d=M)}return Math.min(h-u,d-f)}function O1(n){let e=n.getAttribute("position");if(!e||e.count<3)return!1;let t=D1(n),i=N1(n,t);return t.z>.5?i>j0:t.z<-.5||(n.boundingBox||n.computeBoundingBox(),n.boundingBox.max.z-n.boundingBox.min.z<.05)?!1:i>j0}function lx(n,e){n.updateWorldMatrix(!0,!1);let t=n.matrixWorld,i=new Float32Array(e.length);for(let s=0;s<e.length;s+=3)ku.set(e[s],e[s+1],e[s+2]).applyMatrix4(t),i[s]=ku.x,i[s+1]=ku.y,i[s+2]=ku.z;return i}function U1(n,e,t){if(!t||t.length<6)return n;let i=lx(e,n),s=ox(t),r=[];for(let o=0;o+5<n.length;o+=6){let a=i[o],l=i[o+1],c=i[o+2],u=i[o+3],h=i[o+4],f=i[o+5],d=u-a,p=h-l,x=f-c,m=Math.hypot(d,p,x);if(m<1e-6)continue;let g=d/m,b=p/m,M=x/m,y=!1;for(let S of s){if(Math.abs(g*S.dx+b*S.dy+M*S.dz)<.95)continue;let _=a-S.ax,w=l-S.ay,D=c-S.az,L=_*S.dx+w*S.dy+D*S.dz,z=_-L*S.dx,W=w-L*S.dy,k=D-L*S.dz;if(Math.hypot(z,W,k)>P1)continue;let N=(a-S.ax)*S.dx+(l-S.ay)*S.dy+(c-S.az)*S.dz,G=(u-S.ax)*S.dx+(h-S.ay)*S.dy+(f-S.az)*S.dz,j=Math.min(N,G),q=Math.max(N,G);if(Math.min(q,S.len)-Math.max(j,0)>.01){y=!0;break}}y||r.push(n[o],n[o+1],n[o+2],n[o+3],n[o+4],n[o+5])}return new Float32Array(r)}function F1(n,e){if(!n)return;let t=Math.max(0,Math.min(1,Number(e)||0));t<1?(n.transparent=!0,n.opacity=t,n.depthWrite=!1):(n.transparent=!1,n.opacity=1),n.needsUpdate=!0}function B1(n){if(!n?.visible)return 0;let e=Array.isArray(n.material)?n.material[0]:n.material;return e&&e.transparent&&typeof e.opacity=="number"?e.opacity:1}function z1(n,e=Er){return e===Sr?0:e===il?n?.visible===!1?0:1:B1(n)}function Yd(n,e,t=1,i=$d){let s=Math.max(0,Math.min(1,Number(t)||0)),r=Number.isFinite(i)?i:$d,o=new Xi({color:nx,linewidth:tx,worldUnits:!1,toneMapped:!1,depthTest:!0,depthWrite:!1,transparent:s<1,opacity:s<1?s:1,clippingPlanes:n,clipIntersection:!1});return o.onBeforeCompile=a=>{a.vertexShader=a.vertexShader.replace(`vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );`,`vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );
			start.z += ${Hu};
			end.z += ${Hu};`),a.fragmentShader=a.fragmentShader.replace("#include <logdepthbuf_fragment>",`#include <logdepthbuf_fragment>
			#if defined( USE_LOGDEPTHBUF )
				gl_FragDepth -= ${r};
			#else
				gl_FragDepth = gl_FragCoord.z - ${r};
			#endif`)},o.customProgramCacheKey=()=>`bp-edge-depth-bias-r${ix}-${r}-${Hu}`,e&&o.resolution.set(e.x,e.y),o}function cx(n,e,t,i){let s=Math.max(0,Math.min(1,Number(e)||0)),r=Yd(t,null,s);r.depthTest=!1,r.depthWrite=!1,r.transparent=!0,r.opacity=s;let o=r.onBeforeCompile?.bind(r),a=r.customProgramCacheKey?.bind(r);r.customProgramCacheKey=()=>`${a?a():"edge"}|peelEdge1`,r.onBeforeCompile=(u,h)=>{o?.(u,h),u.uniforms.uPeelStage=i.stage,u.uniforms.tPrevViewZ=i.prevZ,u.uniforms.tPeelViewZ=i.peelZ,u.uniforms.tOpaqueViewZ=i.opaqueZ,u.uniforms.uViewZEps=i.eps,u.uniforms.uBpPeelRes=i.resolution,u.vertexShader=u.vertexShader.replace("void main() {",`varying float vBpEdgeViewZ;
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
			gl_FragColor = vec4( diffuseColor.rgb, alpha );`)},r.needsUpdate=!0;let l=new Ai;l.setPositions(n);let c=new Js(l,r);return c.frustumCulled=!1,c.matrixAutoUpdate=!1,c.renderOrder=1e3,c.raycast=()=>{},c.userData.isPeeledEdgeBatch=!0,c}function Vu(n){if(!n)return;n.parent?.remove(n),n.geometry?.dispose?.();let e=n.material;if(Array.isArray(e))for(let t of e)t?.dispose?.();else e?.dispose?.()}function ux(n){if(!n)return;let e=[];n.traverse(t=>{Un(t)&&e.push(t)});for(let t of e)Vu(t)}function js(n,e){n&&n.traverse(t=>{Un(t)&&(t.visible=e)})}function hx(n,e,t){if(!n)return;let i=Math.max(1,e),s=Math.max(1,t);n.traverse(r=>{if(!Un(r)||!r.material)return;let o=Array.isArray(r.material)?r.material:[r.material];for(let a of o)a?.resolution&&a.resolution.set(i,s)})}function Kd(n,e){if(!n)return;let t=e||[];n.traverse(i=>{if(!Un(i)||!i.material)return;let s=Array.isArray(i.material)?i.material:[i.material];for(let r of s){if(!r)continue;let o=r.clippingPlanes?r.clippingPlanes.length:0;r.clippingPlanes=t,r.clipIntersection=!1,o!==t.length&&(r.needsUpdate=!0)}})}function k1(n,e,t){let i=n.userData.bpHardEdgePositions;return i instanceof Float32Array||(i=rx(n.geometry),n.userData.bpHardEdgePositions=i),e==="grout"?ax(i):e==="tile"||e==="floor_tile"||e==="wall_tile"?O1(n.geometry)?U1(i,n,t):new Float32Array(0):i}function H1(n,e,t,i,s){n.updateWorldMatrix(!0,!1);let r=k1(n,i,s),o=Gu(t,n.matrixWorld),a=dx(n.geometry,o),l=I1(r,a),c=new Ai,u=e.geometry;l.length>=6?(c.setPositions(l),e.geometry=c,e.computeLineDistances()):e.geometry=c,u?.dispose?.()}function V1(n){let e=[],t=n.get("grout")||[];for(let i of t){if(!i||!i.isMesh||!i.geometry)continue;let s=i.userData.bpHardEdgePositions;s instanceof Float32Array||(s=rx(i.geometry),i.userData.bpHardEdgePositions=s);let r=ax(s);if(r.length<6)continue;let o=lx(i,r);for(let a=0;a<o.length;a++)e.push(o[a])}return new Float32Array(e)}function fx(n,e,t={}){let i=t.clippingPlanes??[],s=t.resolution||null,r=t.edgeMode??Er,o=e?V1(n):new Float32Array(0);for(let[a,l]of n)for(let c of l){if(!c||!c.isMesh||!c.geometry||Un(c))continue;let u=null;for(let d of c.children)if(Un(d)){u=d;break}if(!e){u&&Vu(u);continue}u&&!u.isLineSegments2&&(Vu(u),u=null);let h=z1(c,r),f=T1(c);if(u){let d=u.material,p=d?.customProgramCacheKey?.(),x=`bp-edge-depth-bias-r${ix}-${f}-${Hu}`;if(!d||typeof d.customProgramCacheKey!="function"||p!==x){Vu(u);let m=Yd(i,s,h,f),g=new Ai;u=new Js(g,m),u.name=`${a}__edges`,u.userData.isEdgeOverlay=!0,u.userData.edgeLabel=a,u.raycast=()=>{},u.renderOrder=1e3,u.layers.set(nl),c.add(u)}else d.color&&d.color.setHex(nx),typeof d.linewidth=="number"&&(d.linewidth=tx),d.clippingPlanes=i,d.clipIntersection=!1,s&&d.resolution&&d.resolution.set(s.x,s.y),F1(d,h),d.needsUpdate=!0}else{let d=Yd(i,s,h,f),p=new Ai;u=new Js(p,d),u.name=`${a}__edges`,u.userData.isEdgeOverlay=!0,u.userData.edgeLabel=a,u.raycast=()=>{},u.renderOrder=1e3,u.layers.set(nl),c.add(u)}u.layers.set(nl),H1(c,u,i,a,o)}}function G1(n){if(!n.isMesh||Un(n))return!1;let e=Array.isArray(n.material)?n.material[0]:n.material;return!!(e&&e.transparent&&e.opacity<1-1e-4)}function Jd(n,e,t,i,s={}){if(!i)return;let r=!!s.reuseDepth,o=!1;if(i.traverse(x=>{Un(x)&&(o=!0)}),!o){qd(n);return}let a=n.autoClear,l=e.background,c=e.overrideMaterial,u=t.layers.mask;if(e.background=null,n.autoClear=!1,r){js(i,!0),t.layers.set(nl),n.render(e,t),t.layers.mask=u,e.background=l,e.overrideMaterial=c,n.autoClear=a,qd(n);return}js(i,!1);let h=[];i.traverse(x=>{!G1(x)||x.visible===!1||(h.push(x),x.visible=!1)});let f=[],d=new Set;e.traverse(x=>{if(!x.isMesh||Un(x)||x.visible===!1)return;let m=Array.isArray(x.material)?x.material:[x.material];for(let g of m)!g||d.has(g)||(d.add(g),f.push({mat:g,colorWrite:g.colorWrite!==!1,depthWrite:g.depthWrite!==!1}),g.colorWrite=!1,g.depthWrite=!0)}),e.overrideMaterial=null,n.clearDepth();try{n.render(e,t)}finally{for(let x of f)x.mat.colorWrite=x.colorWrite,x.mat.depthWrite=x.depthWrite;for(let x of h)x.visible=!0}js(i,!0);let p=[];s.opaqueEdgesOnly&&i.traverse(x=>{if(!Un(x))return;let m=Array.isArray(x.material)?x.material[0]:x.material;m&&m.transparent&&m.opacity<1-1e-4&&(p.push(x),x.visible=!1)}),t.layers.set(nl);try{n.render(e,t)}finally{for(let x of p)x.visible=!0}t.layers.mask=u,e.background=l,e.overrideMaterial=c,n.autoClear=a,qd(n)}function qd(n){n.state.buffers.color.setMask(!0),n.state.buffers.depth.setMask(!0)}var px=!0,mx=5,ep=12,W1=ep,xx=.001,X1=.5,q1=1;function gx(n){let e=String(n.length);for(let t of n){let i=Array.isArray(t.material)?"m":t.material?.id??0;e+=`|${t.id}:${i}:${t.geometry?.id??0}`;let s=t.children;if(s)for(let r=0;r<s.length;r++){let o=s[r];o?.userData?.isEdgeOverlay&&(e+=`>${o.id}:${o.geometry?.id??0}`)}}return e}var Wu=1e5,Ri={value:0},Kt={tPrevViewZ:{value:null},tPeelViewZ:{value:null},tOpaqueViewZ:{value:null},uViewZEps:{value:xx},uResolution:{value:new Ze(1,1)}};function jd(n){let e=n?.userData?.shader;if(!e?.uniforms)return;let t=e.uniforms;t.uPeelStage&&(t.uPeelStage.value=Ri.value),t.tPrevViewZ&&(t.tPrevViewZ.value=Kt.tPrevViewZ.value),t.tPeelViewZ&&(t.tPeelViewZ.value=Kt.tPeelViewZ.value),t.tOpaqueViewZ&&(t.tOpaqueViewZ.value=Kt.tOpaqueViewZ.value),t.uViewZEps&&(t.uViewZEps.value=Kt.uViewZEps.value),t.uResolution&&t.uResolution.value.copy(Kt.uResolution.value)}function sl(n){if(!n||n.userData.depthPeelPatched)return;n.userData.depthPeelPatched=!0;let e=n.customProgramCacheKey?.bind(n);n.customProgramCacheKey=()=>`${e?e():n.type}|depthPeel11|${n.defines?.USE_BP_PEEL?1:0}`;let t=n.onBeforeCompile?.bind(n);n.onBeforeCompile=(i,s)=>{t?.(i,s),i.uniforms.uPeelStage=Ri,i.uniforms.tPrevViewZ=Kt.tPrevViewZ,i.uniforms.tPeelViewZ=Kt.tPeelViewZ,i.uniforms.tOpaqueViewZ=Kt.tOpaqueViewZ,i.uniforms.uViewZEps=Kt.uViewZEps,i.uniforms.uResolution=Kt.uResolution,n.userData.shader=i,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
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
			if (peelZ > ${(Wu*.5).toFixed(1)}) discard;
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
#endif`)},n.needsUpdate=!0}function Qd(n,e){for(let t of n){if(!t)continue;let i=!!(t.defines&&Object.prototype.hasOwnProperty.call(t.defines,"USE_BP_PEEL"));e!==i&&(t.defines||(t.defines={}),e?t.defines.USE_BP_PEEL="1":delete t.defines.USE_BP_PEEL,t.needsUpdate=!0)}}function yx(n){let e=new Ze,t=new Ke,i=null,s=null,r=null,o=null,a=null,l=null,c=new bi(-1,1,1,-1,0,1),u=new kn,h=new xn({uniforms:{tOpaque:{value:null},tAccum:{value:null},uBackground:{value:new Ke(1118481)}},vertexShader:`
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
    `,depthTest:!1,depthWrite:!1,toneMapped:!1}),f=new ft(new ii(2,2),h);u.add(f);let d=new xn({uniforms:{tSrc:{value:null}},vertexShader:`
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
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:Dc,blendSrc:Fa,blendDst:$s,blendSrcAlpha:Fa,blendDstAlpha:$s,blendEquation:Si}),p=new ft(new ii(2,2),d),x=new kn;x.add(p);let m=new xn({uniforms:{uValue:{value:0}},vertexShader:`
      void main() {
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      uniform float uValue;
      void main() {
        gl_FragColor = vec4(uValue, 0.0, 0.0, 1.0);
      }
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:si}),g=new ft(new ii(2,2),m),b=new kn;b.add(g);let M=new xn({vertexShader:`
      void main() {
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      void main() {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
      }
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:si}),y=new ft(new ii(2,2),M),S=new kn;S.add(y);function T(){n.state.buffers.color.setMask(!0),n.state.buffers.depth.setMask(!0)}function _(A){T();let J=n.autoClear;n.setRenderTarget(A),n.autoClear=!1,n.render(S,c),n.autoClear=J}let w=new xn({vertexShader:`
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
    `,depthTest:!0,depthWrite:!0,toneMapped:!1,side:Dt,clipping:!0,blending:si});function D(A,J,te={}){m.uniforms.uValue.value=J;let Ae=n.autoClear;T(),n.setRenderTarget(A),te.clearDepth&&(n.setClearColor(0,1),n.clear(!1,!0,!1)),n.autoClear=!1,n.render(b,c),n.autoClear=Ae}function L(){i?.dispose(),s?.dispose(),r?.dispose(),o?.dispose(),a?.dispose(),l?.dispose(),i=null,s=null,r=null,o=null,a=null,l=null}let z=0;function W(A,J,te){let Ae=Math.max(1,Math.floor(A)),$=Math.max(1,Math.floor(J)),pe=Math.min(1,Math.max(.25,te)),ve=Math.max(1,Math.floor(Ae*pe)),Ee=Math.max(1,Math.floor($*pe));if(i&&i.width===Ae&&i.height===$&&r&&r.width===ve&&r.height===Ee&&z===pe)return;L(),z=pe,i=new tn(Ae,$,{format:Mn,type:Ln,colorSpace:At,depthBuffer:!0,stencilBuffer:!1});let C={format:Mn,type:Hn,depthBuffer:!0,stencilBuffer:!1,magFilter:Xt,minFilter:Xt};s=new tn(ve,Ee,C),r=new tn(ve,Ee,C),o=new tn(ve,Ee,C),a=new tn(ve,Ee,{format:Mn,type:Xn,colorSpace:At,depthBuffer:!1,stencilBuffer:!1,magFilter:qt,minFilter:qt}),l=new tn(ve,Ee,{format:Mn,type:Xn,colorSpace:At,depthBuffer:!1,stencilBuffer:!1,magFilter:qt,minFilter:qt}),h.uniforms.tOpaque.value=i.texture,h.uniforms.tAccum.value=a.texture,Kt.tOpaqueViewZ.value=s.texture,Kt.uResolution.value.set(ve,Ee)}function k(A){let J=[],te=[];return A?(A.traverse(Ae=>{if(!Ae.isMesh||!Ae.visible||Un(Ae))return;let $=Ae,pe=Array.isArray($.material)?$.material:[$.material],ve=!1;for(let Ee of pe)if(Ee&&Ee.transparent&&Ee.opacity<1-1e-4){ve=!0;break}ve?te.push($):J.push($)}),{opaque:J,transparent:te}):{opaque:J,transparent:te}}function N(A,J){for(let te of A)te.visible=J}function G(A,J){A.blending=J.blending,A.blendSrc=J.blendSrc,A.blendDst=J.blendDst,A.blendSrcAlpha=J.blendSrcAlpha,A.blendDstAlpha=J.blendDstAlpha,A.blendEquation=J.blendEquation,A.blendEquationAlpha=J.blendEquation}let j={meshes:[],sources:[],key:""},q={meshes:[],sources:[],key:""},_e="",Z="",V=new kn,ee=new kn,be=new kn,Re=[];function K(A){for(let J of A.meshes)J.geometry.dispose();A.meshes=[],A.sources=[],A.key=""}function ce(){for(let A of Re){be.remove(A),A.geometry?.dispose?.();let J=A.material;if(Array.isArray(J))for(let te of J)te?.dispose?.();else J?.dispose?.()}Re=[]}function B(){K(j),K(q),ce(),_e="",Z=""}function ne(A){if(ce(),!A.length)return;let J=new Map,te=new I;for(let $ of A){let pe=null;for(let ye of $.children)if(Un(ye)){pe=ye;break}if(!pe?.geometry)continue;let ve=pe.material,Ee=ve&&ve.transparent&&typeof ve.opacity=="number"?ve.opacity:1;if(!(Ee<1-1e-4))continue;let C=pe.geometry.getAttribute("instanceStart"),E=pe.geometry.getAttribute("instanceEnd");if(!C||!E||!C.count)continue;let X=Ee.toFixed(3),Se=J.get(X);Se||(Se={opacity:Ee,planes:ve.clippingPlanes||[],chunks:[]},J.set(X,Se)),$.updateWorldMatrix(!0,!1);let he=C.count,ae=new Float32Array(he*6);for(let ye=0;ye<he;ye++)te.fromBufferAttribute(C,ye).applyMatrix4($.matrixWorld),ae[ye*6]=te.x,ae[ye*6+1]=te.y,ae[ye*6+2]=te.z,te.fromBufferAttribute(E,ye).applyMatrix4($.matrixWorld),ae[ye*6+3]=te.x,ae[ye*6+4]=te.y,ae[ye*6+5]=te.z;Se.chunks.push(ae)}let Ae={stage:Ri,prevZ:Kt.tPrevViewZ,peelZ:Kt.tPeelViewZ,opaqueZ:Kt.tOpaqueViewZ,eps:Kt.uViewZEps,resolution:Kt.uResolution};for(let $ of J.values()){let pe=0;for(let E of $.chunks)pe+=E.length;if(pe<6)continue;let ve=new Float32Array(pe),Ee=0;for(let E of $.chunks)ve.set(E,Ee),Ee+=E.length;let C=cx(ve,$.opacity,$.planes,Ae);be.add(C),Re.push(C)}}function ge(A,J,te,Ae){if(!te.length)return;let $=`${gx(te)}#${gx(J)}`;Ae&&Ae===_e&&$===Z&&j.meshes.length||(Fe(j,A,te),Fe(q,A,J),j.sources.length===te.length&&q.sources.length===J.length&&(ne(te),_e=Ae||"",Z=$))}function we(A){return Object.keys(A.attributes).sort().join(",")}function Ye(A){let J=A.geometry,te=J.index?J.toNonIndexed():J.clone();return te.applyMatrix4(A.matrixWorld),te}function Fe(A,J,te){let Ae=String(te.length);for(let pe of te){let ve=Array.isArray(pe.material)?"m":pe.material?.id||0;Ae+=`.${pe.id}:${ve}`}if(Ae===A.key)return;J.updateWorldMatrix(!0,!0),K(A),A.key=Ae;let $=new Map;for(let pe of te){if(!pe.geometry||Array.isArray(pe.material)||!pe.material)continue;let ve=`${pe.material.uuid}:${we(pe.geometry)}`,Ee=$.get(ve);Ee||(Ee={mat:pe.material,meshes:[]},$.set(ve,Ee)),Ee.meshes.push(pe)}for(let pe of $.values()){let ve=[];try{for(let E of pe.meshes)ve.push(Ye(E));let Ee=c0(ve,!1);if(!Ee)continue;let C=new ft(Ee,pe.mat);C.frustumCulled=!1,C.matrixAutoUpdate=!1,C.renderOrder=0,C.userData.isPeelBatch=!0,A.meshes.push(C),A.sources.push(...pe.meshes)}catch{}finally{for(let Ee of ve)Ee.dispose()}}}function Xe(A,J,te,Ae){if(!A.meshes.length||A.sources.length!==J.length)return n.render(te,Ae),!1;V.environment=te.environment,V.environmentIntensity=te.environmentIntensity,V.fog=te.fog;let $=[];for(let pe of te.children)pe.isLight&&$.push(pe);for(let pe of $)V.add(pe);for(let pe of A.meshes)V.add(pe);n.render(V,Ae);for(let pe of A.meshes)V.remove(pe);for(let pe of $)te.add(pe);return!0}function ue(A,J,te){Xe(j,te,A,J)}function Me(A,J,te){te.length&&Xe(q,te,A,J)}function Be(A,J,te){if(!q.meshes.length||q.sources.length!==J.length)return!1;ee.overrideMaterial=te;for(let Ae of q.meshes)ee.add(Ae);n.render(ee,A),ee.overrideMaterial=null;for(let Ae of q.meshes)ee.remove(Ae);return!0}function Ne(A){let J=new Set;for(let te of A){let Ae=Array.isArray(te.material)?te.material:[te.material];for(let $ of Ae)$&&J.add($)}return[...J]}function qe(A,J,te){if(!te)return;let Ae=te.visible,$=A.background,pe=n.autoClear;te.visible=!1,A.background=null,n.autoClear=!1,T(),n.clearDepth(),n.render(A,J),te.visible=Ae,A.background=$,n.autoClear=pe}function Je(A){return A.children.filter(J=>J.userData?.blueprintAnnotations)}function at(A,J){for(let te of A)te.visible=J}function re(A,J,te){Je(A).some(Ae=>Ae.visible)&&qe(A,J,te)}function He(A,J,te,Ae={}){js(te,!1);let $=Je(A),pe=$.map(ve=>ve.visible);at($,!1),n.setRenderTarget(null),n.autoClear=!0,n.render(A,J),Ae.skipEdges||Jd(n,A,J,te,{reuseDepth:!!Ae.reuseDepth}),$.forEach((ve,Ee)=>{ve.visible=pe[Ee]}),re(A,J,te)}function Oe(A,J,te,Ae,$={}){if(!(px&&(typeof Ae=="function"?Ae():!!Ae)))return Ri.value=0,He(A,J,te,{reuseDepth:!0}),!1;if($.quality!=="high"){Ri.value=0,He(A,J,te,{reuseDepth:!0});let Y=$.batchKey||"";if(te&&!$.deferPrime&&Y!==_e){let Ie=k(te);ge(te,Ie.opaque,Ie.transparent,Y)}return!0}let{opaque:ve,transparent:Ee}=k(te);if(!Ee.length)return Ri.value=0,He(A,J,te,{reuseDepth:!0}),!1;te&&ge(te,ve,Ee,$.batchKey||"");let C=$.quality==="high",E=C?q1:X1,X=C?ep:mx;n.getDrawingBufferSize(e),W(e.x,e.y,E);let Se=n.autoClear,he=n.toneMapping,ae=A.background;ae instanceof Ke?t.copy(ae):t.set(1118481),h.uniforms.uBackground.value.copy(t);let ye=[];for(let Y of[...ve,...Ee])ye.push({mesh:Y,visible:Y.visible});let se=Ne(Ee),de=[];for(let Y of se)sl(Y),de.push({mat:Y,snap:{blending:Y.blending,blendSrc:Y.blendSrc,blendDst:Y.blendDst,blendSrcAlpha:Y.blendSrcAlpha,blendDstAlpha:Y.blendDstAlpha,blendEquation:Y.blendEquation,blendEquationAlpha:Y.blendEquationAlpha,depthWrite:Y.depthWrite,depthTest:Y.depthTest,transparent:Y.transparent,opacity:Y.opacity,colorWrite:Y.colorWrite,side:Y.side,forceSinglePass:Y.forceSinglePass}});Qd(se,!0);let Le=new Map;for(let Y of Ee)Le.set(Y,Y.onBeforeRender),Y.onBeforeRender=function(rt,Pe,dt,Et,Jt,es){let yn=Array.isArray(Jt)?Jt:[Jt];for(let ts of yn)ts&&jd(ts);let $n=Le.get(Y);typeof $n=="function"&&$n.call(this,rt,Pe,dt,Et,Jt,es)};let F=null;for(let Y of se)if(Y.clippingPlanes?.length){F=Y.clippingPlanes;break}if(!F)for(let Y of ve){let Ie=Array.isArray(Y.material)?Y.material:[Y.material];for(let rt of Ie)if(rt?.clippingPlanes?.length){F=rt.clippingPlanes;break}if(F)break}w.clippingPlanes=F||[],w.clipIntersection=!1,A.background=null,n.autoClear=!0,Ri.value=0;let xe=[];for(let Y of A.children)Y!==te&&(Y.isLight||(xe.push({obj:Y,visible:Y.visible}),Y.visible=!1));function fe(){for(let[Y,Ie]of Le)Y.onBeforeRender=Ie}function ze(){for(let{mat:Y,snap:Ie}of de)G(Y,Ie),Y.blendEquationAlpha=Ie.blendEquationAlpha,Y.depthWrite=Ie.depthWrite,Y.depthTest=Ie.depthTest,Y.transparent=Ie.transparent,Y.opacity=Ie.opacity,Y.colorWrite=Ie.colorWrite!==!1,Y.side=Ie.side,Y.forceSinglePass=Ie.forceSinglePass,Y.needsUpdate=!0;for(let{mesh:Y,visible:Ie}of ye)Y.visible=Ie;for(let{obj:Y,visible:Ie}of xe)Y.visible=Ie;return fe(),Qd(se,!1),Ri.value=0,A.background=ae,A.overrideMaterial=null,n.toneMapping=he,n.setRenderTarget(null),n.autoClear=!0,He(A,J,te),n.autoClear=Se,!1}if(N(Ee,!1),N(ve,!0),js(te,!1),T(),n.setRenderTarget(i),n.setClearColor(0,0),n.clear(),Me(A,J,ve),n.setRenderTarget(s),n.setClearColor(0,1),D(s,Wu,{clearDepth:!0}),C){let Y=new Float32Array(4);try{n.readRenderTargetPixels(s,2,2,1,1,Y)}catch{Y[0]=0}if(!Number.isFinite(Y[0])||Y[0]<Wu*.5)return ze()}let Ce=A.overrideMaterial;n.setRenderTarget(s),n.autoClear=!1,Be(J,ve,w)||(A.overrideMaterial=w,n.render(A,J),A.overrideMaterial=Ce),n.autoClear=!0,Kt.tOpaqueViewZ.value=s.texture,_(a),D(o,0),Kt.tPrevViewZ.value=o.texture,N(ve,!1),N(Ee,!0),js(te,!1);let Ue=!1;for(let Y=0;Y<X;Y++){Kt.tPrevViewZ.value=o.texture,Kt.tPeelViewZ.value=o.texture,Ri.value=1;for(let{mat:Pe}of de)Pe.depthWrite=!0,Pe.depthTest=!0,Pe.colorWrite=!0,Pe.transparent=!0,Pe.forceSinglePass=!0,G(Pe,{blending:si,blendSrc:$s,blendDst:Oa,blendSrcAlpha:$s,blendDstAlpha:Oa,blendEquation:Si}),jd(Pe);T(),n.setRenderTarget(r),n.setClearColor(0,1),n.clear(!1,!0,!1),D(r,Wu),n.setRenderTarget(r),n.autoClear=!1,ue(A,J,Ee),n.autoClear=!0,Kt.tPeelViewZ.value=r.texture,Ri.value=2;for(let{mat:Pe}of de)Pe.depthWrite=!1,Pe.depthTest=!1,Pe.colorWrite=!0,Pe.transparent=!0,Pe.forceSinglePass=!0,G(Pe,{blending:Hi,blendSrc:Ua,blendDst:bo,blendSrcAlpha:$s,blendDstAlpha:bo,blendEquation:Si}),jd(Pe);_(l);let Ie=n.autoClear;if(n.autoClear=!1,n.setRenderTarget(l),ue(A,J,Ee),n.autoClear=Ie,Re.length&&l){for(let dt of Re)dt.material?.resolution?.set(l.width,l.height);let Pe=J.layers.mask;J.layers.set(0),n.autoClear=!1,n.render(be,J),J.layers.mask=Pe,n.autoClear=!0}Ue=!0,d.uniforms.tSrc.value=l.texture,n.setRenderTarget(a),n.autoClear=!1,n.render(x,c),n.autoClear=!0;let rt=o;o=r,r=rt}if(!Ue)return ze();for(let{mat:Y,snap:Ie}of de)G(Y,Ie),Y.blendEquationAlpha=Ie.blendEquationAlpha,Y.depthWrite=Ie.depthWrite,Y.depthTest=Ie.depthTest,Y.transparent=Ie.transparent,Y.opacity=Ie.opacity,Y.colorWrite=Ie.colorWrite!==!1,Y.side=Ie.side,Y.forceSinglePass=Ie.forceSinglePass;for(let{mesh:Y,visible:Ie}of ye)Y.visible=Ie;for(let{obj:Y,visible:Ie}of xe)Y.visible=Ie;fe(),js(te,!0),Qd(se,!1),Ri.value=0,A.background=ae,n.toneMapping=he,n.setRenderTarget(null),n.autoClear=!0,n.render(u,c);let ke=Je(A),nt=ke.map(Y=>Y.visible);return at(ke,!1),C&&te&&Jd(n,A,J,te,{opaqueEdgesOnly:Re.length>0}),ke.forEach((Y,Ie)=>{Y.visible=nt[Ie]}),re(A,J,te),n.autoClear=Se,!0}function me(){B(),L(),h.dispose(),f.geometry.dispose(),d.dispose(),p.geometry.dispose(),m.dispose(),g.geometry.dispose(),M.dispose(),y.geometry.dispose(),w.dispose()}return{render:Oe,dispose:me,MAX_PEELS:W1,MAX_PEELS_FAST:mx,MAX_PEELS_HIGH:ep,VIEW_Z_EPSILON:xx,USE_DEPTH_PEEL:px}}var vx="blueprints.materialMode",Xu="solid",rl="realistic",$1={floor:[230,115,20],eps:[70,230,25],masonry:[225,70,40],column:[225,70,40],venec:[200,55,35],plaster:[255,225,120],furniture:[255,150,0],cabinet:[214,148,40],appliance:[176,190,205],sink:[40,185,195],rug:[150,70,175],light:[255,210,40],door:[210,140,70],wall_plate:[200,85,10],pocket_frame:[235,185,80],wall_gkf:[230,230,235],rafters:[200,85,10],plenum_wool:[0,210,155],racking_strap:[70,70,80],tie_rod:[35,38,44],slope_light:[28,28,30],roofing:[235,15,15],glazing:[140,210,255],slope_naturheld_140:[15,85,245],slope_gkf:[230,230,235],slope_cd:[120,120,130],slope_nonius:[90,90,100],soffit_naturheld_140:[15,85,245],soffit_mineral_wool:[0,210,155],soffit_ud:[120,120,130],soffit_gkf:[230,230,235],soffit_cd:[120,120,130],soffit_nonius:[90,90,100],soffit_duct:[168,176,188],bass_mineral_wool:[0,210,155],bass_gkb:[230,230,235],bass_cd:[120,120,130],bass_wall_hanger:[90,90,100],tile:[222,205,176],grout:[48,46,44],drain:[176,184,190],fixture:[236,236,232],prewall:[196,184,168],screen:[170,210,220],profile:[190,196,200],vanity:[186,140,90]},Y1={floor:0,eps:1,masonry:2,column:2,venec:2,plaster:3,pocket_frame:4,wall_gkf:4,bass_gkb:4,slope_gkf:4,soffit_gkf:4,furniture:6,cabinet:6,appliance:7,sink:7,rug:1,light:8,door:6,soffit_ud:8,slope_cd:8,soffit_cd:8,bass_cd:8,slope_nonius:9,soffit_nonius:9,soffit_duct:9,bass_wall_hanger:9,racking_strap:9,tie_rod:9,slope_light:8,wall_plate:9,plenum_wool:10,soffit_mineral_wool:10,bass_mineral_wool:10,rafters:11,roofing:12,slope_naturheld_140:13,soffit_naturheld_140:13,glazing:14,tile:0,grout:0,drain:0,fixture:6,prewall:5,screen:14,profile:7,vanity:6},Z1=2e-6,K1=2;function np(n,e=0){if(n.userData.layerDepthPatched)return;let t=Math.max(0,Math.round(Number(e)||0));if(n.userData.layerDepthBias=t,!(t>0))return;n.userData.layerDepthPatched=!0;let i=n.onBeforeCompile?.bind(n),s=n.customProgramCacheKey?.bind(n),r=Z1.toExponential(8);n.onBeforeCompile=(o,a)=>{i?.(o,a),o.fragmentShader=o.fragmentShader.replace("#include <logdepthbuf_fragment>",`#include <logdepthbuf_fragment>
#if defined( USE_LOGDEPTHBUF )
	{
		float bpFaceBias = ${t}.0 * ${r};
		float bpGraze = min(bpFaceBias, 0.35 * fwidth(gl_FragDepth));
		gl_FragDepth -= bpFaceBias + bpGraze;
	}
#endif`)},n.customProgramCacheKey=()=>`${s?s():n.type}|bpLayerDepth-r${K1}-${t}`,n.needsUpdate=!0}var J1=[];function bx(n,e,t){let i=new Set(n),s=Array.isArray(e)&&e.length?e:J1,r=typeof t=="function"?t:l=>l;function o(l){let c=[];for(let u of l){if(typeof u=="string"){if(!i.has(u))continue;i.delete(u),c.push({type:"leaf",id:u,label:r(u)});continue}let h=o(u.children||[]);h.length&&c.push({type:"group",id:u.id,label:r(u.id),children:h})}return c}let a=o(s);if(i.size){let l=[...i].sort((c,u)=>c.localeCompare(u)).map(c=>({type:"leaf",id:c,label:r(c)}));a.push({type:"group",id:"other",label:r("other"),children:l})}return a}function Mx(n,e){if(!n||typeof n!="object")return{};let t=new Map;for(let s of e)s.type==="group"&&t.set(s.id,qu(s));let i={};for(let[s,r]of Object.entries(n)){let o=t.get(s);if(o&&o.length)for(let a of o)i[a]=r;else i[s]=r}return i}function qu(n){if(n.type==="leaf")return[n.id];let e=[];for(let t of n.children)e.push(...qu(t));return e}function j1(n,e,t="transparent"){if(t==="none")return;let i=t==="opaque"?1:Math.max(0,Math.min(1,Number(e)||0));for(let s of n.children||[]){if(!s?.userData?.isEdgeOverlay||!s.material)continue;let r=Array.isArray(s.material)?s.material:[s.material];for(let o of r)o&&(i<1?(o.transparent=!0,o.opacity=i,o.depthWrite=!1):(o.transparent=!1,o.opacity=1),o.needsUpdate=!0)}}function Rs(n,e,t={}){let i=Math.max(0,Math.min(1,Number(e)||0)),s=t.edgeMode??"transparent";for(let r of n){if(!r)continue;if(i<=0||r.userData?.bpIfcHidden){r.visible=!1;continue}if(r.visible=!0,!r.isMesh)continue;let o=Array.isArray(r.material)?r.material:[r.material];for(let a of o)a&&(i<1?(a.transparent=!0,a.opacity=i,a.depthWrite=!1,a.depthTest=!0,a.side=Dt,a.forceSinglePass=!0,a.userData.needsDepthPeel=!0):(a.transparent=!1,a.opacity=1,a.depthWrite=!0,a.depthTest=!0,a.side=Dt,a.forceSinglePass=!1,a.blending=Hi,a.userData.needsDepthPeel=!1),a.needsUpdate=!0);typeof r.userData.opaqueRenderOrder!="number"&&(r.userData.opaqueRenderOrder=r.renderOrder||0),r.renderOrder=i<1?0:r.userData.opaqueRenderOrder,j1(r,i,s);for(let a of r.children||[]){if(!a?.userData?.isSectionCap||!a.material)continue;a.visible=!0,a.renderOrder=r.renderOrder;let l=Array.isArray(a.material)?a.material:[a.material];for(let c of l)c&&(c.opacity=i,c.transparent=i<1,c.depthWrite=i>=1,c.depthTest=!0,c.forceSinglePass=i<1,c.side=Dt,c.needsUpdate=!0)}}}var Q1={floor:{color:[230,115,20],roughness:.68,metalness:0,map:"wood"},eps:{color:[70,230,25],roughness:.94,metalness:0,map:"foam"},masonry:{color:[225,70,40],roughness:.9,metalness:0,map:"masonry"},column:{color:[225,70,40],roughness:.9,metalness:0,map:"masonry"},venec:{color:[200,55,35],roughness:.9,metalness:0,map:"masonry"},plaster:{color:[255,225,120],roughness:.92,metalness:0,map:"plaster"},furniture:{color:[255,150,0],roughness:.38,metalness:0,clearcoat:.35,clearcoatRoughness:.28,map:"wood"},cabinet:{color:[214,148,40],roughness:.4,metalness:0,clearcoat:.3,clearcoatRoughness:.3,map:"wood"},appliance:{color:[176,190,205],roughness:.28,metalness:.65,map:"metal"},sink:{color:[40,185,195],roughness:.22,metalness:.15,map:"none"},rug:{color:[150,70,175],roughness:.92,metalness:0,map:"none"},light:{color:[255,210,40],roughness:.35,metalness:.2,map:"metal"},wall_plate:{color:[200,85,10],roughness:.55,metalness:0,map:"wood"},pocket_frame:{color:[235,185,80],roughness:.7,metalness:0,map:"plaster"},wall_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},rafters:{color:[200,85,10],roughness:.55,metalness:0,map:"wood"},plenum_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},racking_strap:{color:[70,70,80],roughness:.45,metalness:.8,map:"metal"},tie_rod:{color:[35,38,44],roughness:.35,metalness:.9,map:"metal"},slope_light:{color:[28,28,30],roughness:.4,metalness:.6,map:"metal"},roofing:{color:[235,15,15],roughness:.32,metalness:.45,map:"metal"},glazing:{color:[140,210,255],roughness:.08,metalness:.05,map:"none"},slope_naturheld_140:{color:[15,85,245],roughness:.78,metalness:.08,map:"plaster"},slope_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},slope_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},slope_nonius:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},soffit_mineral_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},soffit_naturheld_140:{color:[15,85,245],roughness:.78,metalness:.08,map:"plaster"},soffit_ud:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},soffit_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},soffit_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},soffit_nonius:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},soffit_duct:{color:[168,176,188],roughness:.35,metalness:.85,map:"metal"},bass_mineral_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},bass_gkb:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},bass_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},bass_wall_hanger:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},tile:{color:[222,205,176],roughness:.42,metalness:0,map:"none"},grout:{color:[48,46,44],roughness:.9,metalness:0,map:"none"},drain:{color:[176,184,190],roughness:.28,metalness:.7,map:"metal"},fixture:{color:[236,236,232],roughness:.35,metalness:0,map:"none"},prewall:{color:[196,184,168],roughness:.8,metalness:0,map:"none"},screen:{color:[170,210,220],roughness:.08,metalness:.05,map:"none"},profile:{color:[190,196,200],roughness:.25,metalness:.85,map:"metal"},vanity:{color:[186,140,90],roughness:.55,metalness:0,map:"wood"}},tp=new Map;function eT(n){if(!n||n==="none")return null;let e=tp.get(n);if(e)return e;let t=128,i=document.createElement("canvas");i.width=t,i.height=t;let s=i.getContext("2d");if(!s)return null;if(n==="wood"){s.fillStyle="#c49858",s.fillRect(0,0,t,t);for(let o=0;o<t;o++){let a=Math.sin(o*.35)*8+Math.sin(o*.11)*4,l=130+o*17%50;s.strokeStyle=`rgba(${l-40}, ${l-60}, ${l-100}, 0.55)`,s.lineWidth=1.2,s.beginPath(),s.moveTo(0,o+a*.15),s.lineTo(t,o-a*.1),s.stroke()}for(let o=0;o<60;o++){let a=o*37%t,l=o*53%t;s.fillStyle="rgba(70, 40, 15, 0.22)",s.fillRect(a,l,2,7+o%5)}}else if(n==="foam"){s.fillStyle="#9ed468",s.fillRect(0,0,t,t);for(let o=0;o<t;o+=7)for(let a=0;a<t;a+=7){let l=o/7%2*3.5,c=2.4+a*o%5*.2;s.beginPath(),s.arc(a+l+3.5,o+3.5,c,0,Math.PI*2),s.fillStyle="rgba(255,255,255,0.55)",s.fill(),s.strokeStyle="rgba(40,90,30,0.35)",s.stroke()}}else if(n==="plaster"){let o=s.createImageData(t,t);for(let a=0;a<o.data.length;a+=4){let l=200+a*13%45;o.data[a]=l,o.data[a+1]=l-10,o.data[a+2]=l-22,o.data[a+3]=255}s.putImageData(o,0,0)}else if(n==="wool"){s.fillStyle="#88c860",s.fillRect(0,0,t,t);for(let o=0;o<1400;o++){let a=o*47%t,l=o*91%t;s.fillStyle=o%3===0?"rgba(255,255,255,0.4)":"rgba(30,70,20,0.28)",s.fillRect(a,l,1+o%2,2+o%3)}}else if(n==="metal"){let o=s.createLinearGradient(0,0,t,t);o.addColorStop(0,"#a02820"),o.addColorStop(.4,"#f07060"),o.addColorStop(.55,"#701810"),o.addColorStop(1,"#d04838"),s.fillStyle=o,s.fillRect(0,0,t,t);for(let a=0;a<t;a+=9)s.fillStyle="rgba(255,255,255,0.22)",s.fillRect(0,a,t,2),s.fillStyle="rgba(0,0,0,0.28)",s.fillRect(0,a+4,t,2)}else if(n==="masonry"){s.fillStyle="#b88868",s.fillRect(0,0,t,t);let o=16,a=32;for(let l=0;l<t/o;l++){let c=l%2*(a/2);for(let u=-1;u<t/a+1;u++){let h=u*a+c,f=l*o;s.fillStyle=`rgba(${170+(l+u)%3*18}, ${110+l%4*10}, ${70+u%3*12}, 0.75)`,s.fillRect(h+1,f+1,a-2,o-2),s.strokeStyle="rgba(70,45,30,0.55)",s.strokeRect(h+.5,f+.5,a-1,o-1)}}}else return null;let r=new ys(i);return r.colorSpace=At,r.wrapS=_i,r.wrapT=_i,r.repeat.set(2.5,2.5),r.needsUpdate=!0,tp.set(n,r),r}function _x(n){return new Ke(n[0]/255,n[1]/255,n[2]/255)}function tT(n){return $1[n]||[160,160,160]}function nT(n,e,t=0){n.side=Dt,t>0?(n.polygonOffset=!0,n.polygonOffsetFactor=-t,n.polygonOffsetUnits=-t*2):(n.polygonOffset=!1,n.polygonOffsetFactor=0,n.polygonOffsetUnits=0),e?(n.clippingPlanes=e,n.clipIntersection=!1):n.clippingPlanes=[],np(n,t),sl(n),n.needsUpdate=!0}function Sx(n){n.computeBoundingBox();let e=n.boundingBox,t=new I;e.getSize(t);let i=Math.max(t.x,1e-6),s=Math.max(t.y,1e-6),r=Math.max(t.z,1e-6),o=Math.max(i,s,r);n.getAttribute("normal")||n.computeVertexNormals();let a=n.getAttribute("position"),l=n.getAttribute("normal");if(!a)return o;let c=n.getAttribute("uv");if(c&&c.count===a.count)return o;let u=new Float32Array(a.count*2),h=new I;for(let f=0;f<a.count;f++){h.fromBufferAttribute(a,f);let d=Math.abs(l.getX(f)),p=Math.abs(l.getY(f)),x=Math.abs(l.getZ(f)),m,g;p>=d&&p>=x?(m=(h.x-e.min.x)/i,g=(h.z-e.min.z)/r):d>=x?(m=(h.z-e.min.z)/r,g=(h.y-e.min.y)/s):(m=(h.x-e.min.x)/i,g=(h.y-e.min.y)/s),u[f*2]=m,u[f*2+1]=g}return n.setAttribute("uv",new Bt(u,2)),o}function iT(n,e){let t=eT(n);if(!t)return null;let i=t.clone();i.needsUpdate=!0;let s=Math.max(1.2,Math.min(12,e/400));return i.repeat.set(s,s),i}function Ex(n,e,t={}){let i=t.clippingPlanes??null,s=e===rl,r=t.opacityByLabel??null,o=t.edgeMode??"transparent";for(let[a,l]of n){let c=tT(a),u=Y1[a]??0,h=1e3;if(s)for(let g of l)g.isMesh&&g.geometry&&(h=Math.max(h,Sx(g.geometry)));let f=1,d;if(s){let g=Q1[a]||{color:c,roughness:.7,metalness:0,map:"none"};f=typeof g.opacity=="number"?g.opacity:1;let b=_x(g.color),M=iT(g.map||"none",h);g.clearcoat?d=new ln({color:b,map:M,roughness:g.roughness,metalness:g.metalness,clearcoat:g.clearcoat,clearcoatRoughness:g.clearcoatRoughness??.3,envMapIntensity:.85}):d=new In({color:b,map:M,roughness:g.roughness,metalness:g.metalness,envMapIntensity:g.metalness>.05?1.1:.55})}else d=new nn({color:_x(c)});nT(d,i,u),d.userData.presetOpacity=f;let p=new Set;for(let g of l){if(!g.isMesh)continue;let b=g.material;if(b){let M=Array.isArray(b)?b:[b];for(let y of M)p.add(y)}g.material=d,g.userData.opaqueRenderOrder=u,g.renderOrder=u}for(let g of p)g!==d&&(g.map&&[...tp.values()].includes(g.map)?g.map=null:g.map&&(g.map.dispose?.(),g.map=null),g.dispose?.());let x=1;r&&(r instanceof Map?x=r.has(a)?r.get(a):1:typeof r[a]=="number"&&(x=r[a]));let m=Math.max(0,Math.min(1,f*(Number(x)||0)));Rs(l,m,{edgeMode:o})}}function wx(n,e){let i=(Array.isArray(n)?n:[n]).map(s=>{if(!s)return new In({color:13421772,roughness:.65,metalness:0,side:Kn});let r=s.color?s.color.clone():new Ke(13421772),o=typeof s.roughness=="number"?s.roughness:.65,a=typeof s.metalness=="number"?s.metalness:0,l=null;s.map&&e&&(Sx(e),l=s.map.clone(),l.needsUpdate=!0);let c=new In({color:r,map:l,roughness:o,metalness:a,side:Kn,transparent:!!s.transparent,opacity:typeof s.opacity=="number"?s.opacity:1});return c.clippingPlanes=null,c.clipIntersection=!1,c});return Array.isArray(n)?i:i[0]}function Tx(){try{let n=localStorage.getItem(vx);if(n===rl||n===Xu)return n}catch{}return Xu}function Ax(n){try{localStorage.setItem(vx,n)}catch{}}var Zi=1e-5,Rx=new WeakMap;function jn(n,e,t,i){let s=t/(t-i);return n.clone().lerp(e,s)}function sT(n,e,t){let[i,s,r]=n,o=e.distanceToPoint(i),a=e.distanceToPoint(s),l=e.distanceToPoint(r),c=o>=-Zi,u=a>=-Zi,h=l>=-Zi,f=(c?1:0)+(u?1:0)+(h?1:0);if(f===3){t.push([i,s,r]);return}if(f===0)return;let d=[i,s,r],p=[o,a,l],x=[c,u,h];if(f===1){let M=x.findIndex(Boolean),y=(M+1)%3,S=(M+2)%3,T=d[M],_=jn(d[M],d[y],p[M],p[y]),w=jn(d[M],d[S],p[M],p[S]);t.push([T,_,w]);return}let m=x.findIndex(M=>!M),g=(m+1)%3,b=(m+2)%3;if(x[g]){let M=d[g],y=d[b],S=jn(d[m],d[g],p[m],p[g]),T=jn(d[m],d[b],p[m],p[b]);t.push([M,y,S]),t.push([y,T,S])}else{let M=d[b],y=jn(d[m],d[g],p[m],p[g]),S=jn(d[m],d[b],p[m],p[b]);t.push([M,y,S])}}function rT(n,e){let[t,i,s]=n,r=e.distanceToPoint(t),o=e.distanceToPoint(i),a=e.distanceToPoint(s),l=r>=-Zi,c=o>=-Zi,u=a>=-Zi,h=(l?1:0)+(c?1:0)+(u?1:0);if(h===0||h===3)return null;let f=[t,i,s],d=[r,o,a],p=[l,c,u];if(h===1){let b=p.findIndex(Boolean),M=(b+1)%3,y=(b+2)%3;return[jn(f[b],f[M],d[b],d[M]),jn(f[b],f[y],d[b],d[y])]}let x=p.findIndex(b=>!b),m=(x+1)%3,g=(x+2)%3;return p[m]?[jn(f[x],f[m],d[x],d[m]),jn(f[x],f[g],d[x],d[g])]:[jn(f[x],f[m],d[x],d[m]),jn(f[x],f[g],d[x],d[g])]}function oT(n,e,t){let i=n.clone(),s=e.clone();for(let r of t){let o=r.distanceToPoint(i),a=r.distanceToPoint(s),l=o>=-Zi,c=a>=-Zi;if(l&&c)continue;if(!l&&!c)return null;let u=jn(i,s,o,a);l?s=u:i=u}return i.distanceToSquared(s)<Zi*Zi?null:[i,s]}function aT(n,e){let t=n;for(let i of e){let s=[];for(let r of t)sT(r,i,s);if(t=s,t.length===0)break}return t}function lT(n,e){let t=n.getAttribute("position");if(!t)return[];let i=new I,s=[],r=n.getIndex();function o(a,l,c){s.push([i.fromBufferAttribute(t,a).applyMatrix4(e).clone(),i.fromBufferAttribute(t,l).applyMatrix4(e).clone(),i.fromBufferAttribute(t,c).applyMatrix4(e).clone()])}if(r)for(let a=0;a<r.count;a+=3)o(r.getX(a),r.getX(a+1),r.getX(a+2));else for(let a=0;a<t.count;a+=3)o(a,a+1,a+2);return s}function cT(n){let e=n.getAttribute("position");if(!e)return[];let t=new I,i=[],s=n.getIndex();function r(o,a,l){i.push([t.fromBufferAttribute(e,o).clone(),t.fromBufferAttribute(e,a).clone(),t.fromBufferAttribute(e,l).clone()])}if(s)for(let o=0;o<s.count;o+=3)r(s.getX(o),s.getX(o+1),s.getX(o+2));else for(let o=0;o<e.count;o+=3)r(o,o+1,o+2);return i}var wr=1e-6,Cx=2e-4,uT=2e-4,Px=new WeakMap;function hT(n){let e="";for(let t of n)e+=`${t.normal.x.toFixed(6)},${t.normal.y.toFixed(6)},${t.normal.z.toFixed(6)},${t.constant.toFixed(6)};`;return e}function Ix(n){let e=t=>Math.round(t/wr);return`${e(n.x)},${e(n.y)},${e(n.z)}`}function Nx(n,e){let t=hT(e),i=Px.get(n);if(i&&i.key===t)return i;let s=[],r=[],o=Rx.get(n);if(o||(o=cT(n),Rx.set(n,o)),o.length&&e?.length)for(let l=0;l<e.length;l++){let c=e[l],u=e.filter((f,d)=>d!==l),h=[];for(let f of o){let d=rT(f,c);if(!d)continue;let p=u.length?oT(d[0],d[1],u):d;p&&(h.push(p),s.push(p[0].x,p[0].y,p[0].z,p[1].x,p[1].y,p[1].z))}r.push(h)}let a={key:t,segments:new Float32Array(s),perPlane:r};return Px.set(n,a),a}function fT(n,e,t){let i=new Map;for(let l of n.keys())i.set(l,l);function s(l){let c=l;for(;i.get(c)!==c;){let u=i.get(i.get(c));i.set(c,u),c=u}return c}function r(l){let c=s(l),u=0;for(let h of t.get(c)||[])e[h].dead||u++;return u}function o(){let l=[];for(let c of n.keys())s(c)===c&&r(c)%2&&l.push(c);return l}let a=Cx*Cx;for(let l=0;l<e.length+2;l++){let c=o();if(c.length<2)break;let u=-1,h=-1,f=1/0;for(let g=0;g<c.length;g++){let b=n.get(c[g]);for(let M=g+1;M<c.length;M++){let y=n.get(c[M]),S=b.x-y.x,T=b.y-y.y,_=b.z-y.z,w=S*S+T*T+_*_;w<f&&(f=w,u=g,h=M)}}if(f>a)break;let d=c[u],p=c[h],x=n.get(d),m=n.get(p);x.add(m).multiplyScalar(.5);for(let g of t.get(p)||[]){let b=e[g];if(b.dead)continue;let M=s(b.a===p?b.b:b.a);if(M===d){b.dead=!0;continue}b.a=d,b.b=M,t.has(d)||t.set(d,[]),t.get(d).push(g)}i.set(p,d)}}function dT(n){let e=new Map,t=[],i=new Map;for(let[o,a]of n){let l=Ix(o),c=Ix(a);if(l===c)continue;e.has(l)||e.set(l,o.clone()),e.has(c)||e.set(c,a.clone());let u=t.length;t.push({a:l,b:c,used:!1,dead:!1}),i.has(l)||i.set(l,[]),i.has(c)||i.set(c,[]),i.get(l).push(u),i.get(c).push(u)}fT(e,t,i);function s(o,a){let l=i.get(o)||[],c=-1,u=-1/0,h=e.get(o),f=a?e.get(a):null;for(let d of l){if(t[d].used||t[d].dead)continue;if(!f)return d;let p=t[d],x=p.a===o?p.b:p.a,m=e.get(x),g=h.x-f.x,b=h.y-f.y,M=h.z-f.z,y=m.x-h.x,S=m.y-h.y,T=m.z-h.z,_=g*y+b*S+M*T;_>u&&(u=_,c=d)}return c}let r=[];for(let o=0;o<t.length;o++){if(t[o].used||t[o].dead)continue;let a=[],l=[],c=o,u=t[c].a,h=u,f=null,d=!1,p=t.length+2;for(let x=0;x<p;x++){t[c].used=!0,l.push(c),a.push(e.get(u).clone());let m=t[c].a===u?t[c].b:t[c].a;if(m===h){d=!0;break}let g=s(m,u);if(g<0)break;f=u,u=m,c=g}d&&a.length>=3&&r.push(a)}return r}function pT(n){let e=n.clone().normalize(),t=Math.abs(e.x)<.9?new I(1,0,0):new I(0,1,0),i=new I().crossVectors(t,e).normalize(),s=new I().crossVectors(e,i).normalize();return{u:i,v:s,n:e}}function mT(n,e,t,i){return n.map(s=>{let r=s.clone().sub(e);return{x:r.dot(t),y:r.dot(i),p3:s}})}function gT(n){let e=0;for(let t=0;t<n.length;t++){let i=(t+1)%n.length;e+=n[t].x*n[i].y-n[i].x*n[t].y}return e*.5}function xT(n){return gT(n)<0&&n.reverse(),n}function Lx(n,e,t){let i=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){let o=t[s].y,a=t[r].y,l=t[s].x,c=t[r].x;o>e!=a>e&&n<(c-l)*(e-o)/(a-o+0)+l&&(i=!i)}return i}function Cs(n,e,t){return(e.x-n.x)*(t.y-n.y)-(e.y-n.y)*(t.x-n.x)}function yT(n,e,t,i){let s=Cs(n,e,t),r=Cs(n,e,i),o=Cs(t,i,n),a=Cs(t,i,e);return s*r<0&&o*a<0}function Dx(n,e,t,i){let s=t.length;for(let r=0;r<s;r++){let o=(r+1)%s;if(!(i>=0&&(r===i||o===i))&&yT(n,e,t[r],t[o]))return!0}return!1}function _T(n,e){let t=0;for(let f=1;f<e.length;f++)e[f].x>e[t].x&&(t=f);let i=e[t],s=-1,r=1/0,o=n.length;for(let f=0;f<o;f++){let d=n[f],p=n[(f+1)%o];if(d.y>i.y==p.y>i.y)continue;let x=p.y-d.y;if(Math.abs(x)<1e-15)continue;let m=(i.y-d.y)/x;if(m<-1e-8||m>1+1e-8)continue;let g=d.x+m*(p.x-d.x);g>=i.x-1e-8&&g<r&&(r=g,s=f)}let a=[];s>=0&&a.push(s,(s+1)%o);let l=0,c=1/0;for(let f=0;f<o;f++){let d=(n[f].x-i.x)**2+(n[f].y-i.y)**2;d<c&&(c=d,l=f)}a.push(l);let u=-1;for(let f of a)if(!Dx(i,n[f],n,f)&&!Dx(i,n[f],e,t)){u=f;break}if(u<0)return null;let h=[];for(let f=0;f<o;f++)if(h.push(n[f]),f===u){for(let d=0;d<e.length;d++)h.push(e[(t-d+e.length)%e.length]);h.push(e[t]),h.push(n[f])}return h}function ip(n,e){return(n.x-e.x)**2+(n.y-e.y)**2<=wr*wr}function vT(n,e,t,i){if(ip(n,e)||ip(n,t)||ip(n,i))return!1;let s=Cs(e,t,n),r=Cs(t,i,n),o=Cs(i,e,n),a=s<-1e-14||r<-1e-14||o<-1e-14,l=s>1e-14||r>1e-14||o>1e-14;return!(a&&l)}function bT(n){let e=[];for(let s of n){let r=e[e.length-1];r&&(r.x-s.x)**2+(r.y-s.y)**2<wr*wr||e.push(s)}if(e.length>=2){let s=e[0],r=e[e.length-1];(s.x-r.x)**2+(s.y-r.y)**2<wr*wr&&e.pop()}let t=[],i=e.length*e.length+8;for(;e.length>3&&i-- >0;){let s=!1,r=e.length;for(let o=0;o<r;o++){let a=(o+r-1)%r,l=(o+1)%r,c=e[a],u=e[o],h=e[l],f=Cs(c,u,h);if(f<-1e-14)continue;if(f<=1e-14){e.splice(o,1),s=!0;break}let d=!1;for(let p=0;p<r;p++)if(!(p===o||p===a||p===l)&&vT(e[p],c,u,h)){d=!0;break}if(!d){t.push([c.p3,u.p3,h.p3]),e.splice(o,1),s=!0;break}}if(!s)break}return e.length===3&&Cs(e[0],e[1],e[2])>1e-14&&t.push([e[0].p3,e[1].p3,e[2].p3]),t}function MT(n,e,t){if(!n.length)return[];let{u:i,v:s,n:r}=pT(e.normal),o=n[0][0],a=n.map(u=>xT(mT(u,o,i,s))),l=a.map((u,h)=>{let f=u[0],d=0;for(let p=0;p<a.length;p++)p!==h&&Lx(f.x,f.y,a[p])&&d++;return d}),c=[];for(let u=0;u<a.length;u++){if(l[u]%2!==0)continue;let h=a[u].slice();for(let d=0;d<a.length;d++){if(l[d]!==l[u]+1||!Lx(a[d][0].x,a[d][0].y,h))continue;let p=_T(h,a[d]);p&&(h=p)}let f=bT(h);for(let d of f)c.push(d.map(p=>p.clone().addScaledVector(r,t)))}return c}function Ox(n,e){return!n||!e?.length?[]:Nx(n,e).perPlane}function Ux(n,e,t=0){if(!n?.length||!e)return new Float32Array(0);let i=dT(n),s=MT(i,e,uT+Math.max(0,t));if(!s.length)return new Float32Array(0);let r=new Float32Array(s.length*9),o=0;for(let[a,l,c]of s)r[o++]=a.x,r[o++]=a.y,r[o++]=a.z,r[o++]=l.x,r[o++]=l.y,r[o++]=l.z,r[o++]=c.x,r[o++]=c.y,r[o++]=c.z;return r}function dx(n,e){return!n||!e?.length?new Float32Array(0):Nx(n,e).segments}function Gu(n,e){if(!n?.length)return[];let t=new ot().copy(e).invert();return n.map(i=>i.clone().applyMatrix4(t))}function ST(n){let e=new Float32Array(n.length*9),t=0;for(let[s,r,o]of n)e[t++]=s.x,e[t++]=s.y,e[t++]=s.z,e[t++]=r.x,e[t++]=r.y,e[t++]=r.z,e[t++]=o.x,e[t++]=o.y,e[t++]=o.z;let i=new Ot;return i.setAttribute("position",new Bt(e,3)),i.computeVertexNormals(),i}function Fx(n,e){if(!n.visible||!n.geometry)return null;let t=lT(n.geometry,n.matrixWorld);if(t.length===0)return null;let i=e.length?aT(t,e):t;if(i.length===0)return null;let s=ST(i),r=wx(n.material,s),o=new ft(s,r);return o.name=n.name,o}var ET=5e-5;function Yu(n){return!!(n&&n.userData&&n.userData.isSectionCap)}function sp(n){return n?Array.isArray(n)?n[0]||null:n:null}function zx(n,e){let t;return n.isMeshPhysicalMaterial?t=new ln:n.isMeshStandardMaterial?t=new In:t=new nn,n.color&&t.color&&t.color.copy(n.color),n.map&&"map"in t&&(t.map=n.map),typeof n.roughness=="number"&&"roughness"in t&&(t.roughness=n.roughness),typeof n.metalness=="number"&&"metalness"in t&&(t.metalness=n.metalness),typeof n.clearcoat=="number"&&"clearcoat"in t&&(t.clearcoat=n.clearcoat,t.clearcoatRoughness=n.clearcoatRoughness??.3),typeof n.envMapIntensity=="number"&&"envMapIntensity"in t&&(t.envMapIntensity=n.envMapIntensity),t.opacity=typeof n.opacity=="number"?n.opacity:1,t.transparent=!!n.transparent,t.depthWrite=n.depthWrite!==!1,t.depthTest=n.depthTest!==!1,t.side=Dt,t.forceSinglePass=!!n.forceSinglePass,t.toneMapped=n.toneMapped!==!1,t.polygonOffset=!!n.polygonOffset,t.polygonOffsetFactor=n.polygonOffsetFactor||0,t.polygonOffsetUnits=n.polygonOffsetUnits||0,t.clippingPlanes=e,t.clipIntersection=!1,np(t,n.userData?.layerDepthBias||0),sl(t),t.needsUpdate=!0,t}function $u(n){n.parent?.remove(n),n.geometry?.dispose?.();let e=n.material,t=Array.isArray(e)?e:[e];for(let i of t)i&&(i.map=null),i?.dispose?.()}function wT(n){let e="";for(let t of n)e+=`${t.normal.x.toFixed(5)},${t.normal.y.toFixed(5)},${t.normal.z.toFixed(5)},${t.constant.toFixed(5)};`;return e}function TT(n,e){if(!n)return null;for(let t of n.children)if(t.userData?.isSectionCap&&t.userData.capLabel===e)return t;return null}function kx(n,e){let t=new Set;for(let i of n){let s=i.parent;if(!s||t.has(s))continue;t.add(s);let r=TT(s,e);if(r)return r}return null}function Bx(n,e,t){n.visible=!0;for(let i of n.children){if(!i.isMesh)continue;let s=sp(i.material);s&&(e.color&&s.color&&s.color.copy(e.color),s.opacity=typeof e.opacity=="number"?e.opacity:1,s.transparent=!!e.transparent,s.depthWrite=e.depthWrite!==!1,s.depthTest=e.depthTest!==!1,s.forceSinglePass=!!e.forceSinglePass,s.side=Dt,s.needsUpdate=!0,i.visible=!0,i.renderOrder=t)}}function AT(n,e,t,i){let s=e.filter(d=>d?.isMesh&&d.visible&&!Yu(d)&&d.geometry),r=kx(e,n);if(!s.length||!t.length){r&&$u(r);return}let o=s[0],a=o.parent;if(!a)return;r&&r.parent!==a&&$u(r);let l=r&&r.parent===a?r:new kt;for(let d of[...l.children])$u(d);l.parent||(l.name=`${n}__caps`,l.userData.isSectionCap=!0,l.userData.capLabel=n,a.add(l));let c=sp(o.material);if(!c)return;a.updateWorldMatrix(!0,!0);let u=new ot().copy(a.matrixWorld).invert(),h=typeof o.userData.opaqueRenderOrder=="number"?o.userData.opaqueRenderOrder:o.renderOrder||0,f=t.map(()=>[]);for(let d of s){d.updateWorldMatrix(!0,!1);let p=Gu(t,d.matrixWorld),x=Ox(d.geometry,p);for(let m=0;m<t.length;m++){let g=x[m]||[];for(let[b,M]of g)f[m].push([b.clone().applyMatrix4(d.matrixWorld),M.clone().applyMatrix4(d.matrixWorld)])}}for(let d=0;d<t.length;d++){let p=Ux(f[d],t[d],h*ET);if(p.length<9)continue;for(let b=0;b<p.length;b+=3){let M=new I(p[b],p[b+1],p[b+2]).applyMatrix4(u);p[b]=M.x,p[b+1]=M.y,p[b+2]=M.z}let x=new Ot;x.setAttribute("position",new Bt(p,3)),x.computeVertexNormals();let m=t.filter((b,M)=>M!==d),g=new ft(x,zx(c,m));g.name=`${n}__cap${d}`,g.userData.isSectionCap=!0,g.userData.capPlaneIndex=d,g.userData.capLabel=n,g.renderOrder=o.renderOrder,g.raycast=()=>{},l.add(g)}l.userData.bpCapSig=i,l.userData.bpCapMatUuid=c.uuid,l.visible=l.children.length>0}function rp(n,e){let t=e||[],i=wT(t);for(let[s,r]of n){let o=(r||[]).filter(u=>u&&!Yu(u));if(!o.length)continue;let a=o.filter(u=>u.visible),l=kx(o,s);if(!t.length||!a.length){l&&$u(l);continue}let c=sp(a[0].material);if(l&&l.userData.bpCapSig===i&&c&&l.userData.bpCapMatUuid===c.uuid&&l.children.length){Bx(l,c,a[0].renderOrder||0);continue}if(l&&l.userData.bpCapSig===i&&c&&l.children.length){for(let u of l.children){if(!u.isMesh)continue;let h=u.material,f=u.userData.capPlaneIndex,d=typeof f=="number"?t.filter((x,m)=>m!==f):t;u.material=zx(c,d);let p=Array.isArray(h)?h:[h];for(let x of p)x&&(x.map=null),x?.dispose?.()}l.userData.bpCapMatUuid=c.uuid,Bx(l,c,a[0].renderOrder||0);continue}AT(s,o,t,i)}}var RT=2,CT=.45,Hx=.015;function op(n){let e=new Wt().setFromObject(n);if(e.isEmpty())return{cx:0,cz:0,minY:0,spanM:0,scale:1,liftM:Hx};let t=new I;e.getSize(t);let i=Math.max(t.x,t.y,t.z,1e-9),s=i>RT?CT/i:1;return{cx:(e.min.x+e.max.x)/2,cz:(e.min.z+e.max.z)/2,minY:e.min.y,spanM:i,scale:s,liftM:Hx}}function Vx(n,e=op(n)){let{cx:t,cz:i,minY:s,scale:r,liftM:o}=e;return n.position.set(-t*r,-s*r+o,-i*r),n.scale.setScalar(r),n.updateMatrixWorld(!0),e}var PT=`
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
`,Gx=!1;function IT(){if(Gx)return;Gx=!0;let n=document.createElement("style");n.id="bp-viewer-chrome",n.textContent=PT,document.head.appendChild(n)}function Wx(n){IT();let e=document.getElementById("sheet"),t=document.getElementById("sheet-handle"),i=document.getElementById("sheet-scroll"),s=window.matchMedia("(min-width: 768px)"),r=window.matchMedia("(prefers-color-scheme: dark)"),o=[],a="peek";function l(){return s.matches}function c(){return a}function u(){for(let re of o)re(a)}function h(re){o.push(re),re(a)}function f(){if(!e||!i)return;let re=document.getElementById("sheet-inspector"),He=document.getElementById("sheet-main");if(re&&!re.hidden&&He?.hidden){let C=parseFloat(e.style.getPropertyValue("--sheet-partial-h"));if(Number.isFinite(C)&&C>0)return C}let Oe=document.getElementById("section-view"),me=document.getElementById("section-cuts"),A=t?.offsetHeight||22,J=16,te=0;if(Oe&&(te+=Oe.offsetHeight),me){let C=me.querySelector(".sheet-title"),E=me.querySelector(".cut-row");te+=32,C&&(te+=C.offsetHeight+8),E?te+=E.offsetHeight:te+=me.offsetHeight}let Ae=A+te+J,$=window.innerHeight||640,pe=Math.round($*.28),ve=Math.round($*.45),Ee=Math.max(pe,Math.min(ve,Math.round(Ae)));return e.style.setProperty("--sheet-partial-h",`${Ee}px`),Ee}function d(){f(),!l()&&a==="partial"&&u()}function p(re){let He=getComputedStyle(document.documentElement).getPropertyValue(`--safe-${re}`).trim(),Oe=parseFloat(He);return Number.isFinite(Oe)?Oe:0}function x(){let re={top:0,right:0,bottom:0,left:0};if(!e)return re;if(l()){if(a!=="open")return re;let Oe=e.offsetWidth||0;return{top:0,right:Math.max(0,Math.round(Oe)),bottom:0,left:0}}if(a!=="partial")return re;let He=Math.round(K()+p("b"));return{top:0,right:0,bottom:Math.max(0,Math.min(window.innerHeight-80,He)),left:0}}function m(re,He={}){if(!e)return;(l()?["closed","open"]:["peek","partial","full"]).includes(re)||(re=l()?"open":"peek"),a=re,e.dataset.detent=re,e.classList.toggle("sheet-open",re!=="peek"&&re!=="closed"),document.body.classList.toggle("sheet-open",re!=="peek"&&re!=="closed"),y(),He.silent||u()}function g(){l()?m("open"):m("peek"),f()}let b=document.getElementById("top-chrome"),M=document.getElementById("sheet-toggle");if(!M&&b){let re=b.querySelector(".top-chrome-end");re||(re=document.createElement("div"),re.className="top-chrome-end",b.append(re)),M=document.createElement("button"),M.type="button",M.id="sheet-toggle",M.className="chrome-btn sheet-toggle",re.append(M)}function y(){if(!M)return;let re=a==="open";M.setAttribute("aria-expanded",re?"true":"false"),M.setAttribute("aria-label",re?"Hide controls":"Show controls"),M.title=re?"Hide controls":"Show controls",M.textContent=re?"\u203A":"\u2039"}M?.addEventListener("click",()=>{l()&&m(a==="open"?"closed":"open")});let S=!1,T=null,_=!1,w=!1,D=0,L=0,z=0,W=0,k="peek",N=0,G=0,j=0,q=0,_e=0,Z=null,V=12,ee=28,be='input, button, a, textarea, select, label, .seg, [role="slider"], [data-no-sheet-drag]';function Re(){return Math.max(t?.offsetHeight||34,34)+8}function K(){return f()||window.innerHeight*.38}function ce(){let re=window.innerHeight||640;return Math.min(re*.92,re-72)}function B(){return e?.offsetWidth||0}function ne(re){return re instanceof Element?!!re.closest(be):!1}function ge(){if(l()){m(a==="open"?"closed":"open");return}m(a==="peek"?"partial":a==="partial"?"full":"peek")}function we(){e&&(e.style.transform="",e.style.opacity="",e.style.pointerEvents="")}function Ye(re,He,Oe){if(e){S=!0,_=!1,T=He,w=!1,k=a,D=re.clientY,L=re.clientX,N=D,G=L,j=performance.now(),q=0,_e=0,W=Oe,Z=re.pointerId,e.classList.add("is-dragging"),e.style.transform=`translateX(${W}px)`,e.style.pointerEvents="auto";try{e.setPointerCapture(re.pointerId)}catch{}}}function Fe(re){if(!(!e||!t)&&!(re.target!==t&&!t.contains(re.target)&&re.target!==e)){S=!0,_=!1,T="narrow",w=!1,k=a,e.classList.add("is-dragging"),D=re.clientY,L=re.clientX,N=D,G=L,j=performance.now(),q=0,_e=0,z=e.getBoundingClientRect().height,Z=re.pointerId;try{t.setPointerCapture(re.pointerId)}catch{}re.preventDefault()}}function Xe(re){if(!e||re.pointerType==="mouse"&&re.button!==0||re.target instanceof Element&&re.target.closest(".chrome-btn"))return;let He=B();if(a==="closed"){let Oe=window.innerWidth-ee-p("r");if(re.clientX<Oe)return;Ye(re,"wide-open",He),re.preventDefault();return}e.contains(re.target)&&(ne(re.target)||(S=!0,_=!0,T="wide-close",w=!1,k=a,D=re.clientY,L=re.clientX,N=D,G=L,j=performance.now(),q=0,_e=0,W=0,Z=re.pointerId))}function ue(re){l()?Xe(re):Fe(re)}function Me(re){if(!S||!e||Z!=null&&re.pointerId!==Z)return;let He=performance.now(),Oe=Math.max(1,He-j),me=Math.hypot(re.clientX-L,re.clientY-D);if(_){if(me<=V)return;let Ae=re.clientX-L,$=re.clientY-D;if(Math.abs(Ae)<Math.abs($)*1.15||Ae<=0){S=!1,_=!1,T=null,Z=null;return}_=!1,w=!0,e.classList.add("is-dragging"),i&&(i.style.overflow="hidden");try{e.setPointerCapture(re.pointerId)}catch{}re.preventDefault()}if(me>V&&(w=!0),T==="narrow"){let Ae=D-re.clientY;q=(N-re.clientY)/Oe*1e3,N=re.clientY,j=He;let $=Re(),pe=ce(),ve=Math.max($,Math.min(pe,z+Ae));e.style.height=`${ve}px`;return}let A=re.clientX-L;_e=(re.clientX-G)/Oe*1e3,G=re.clientX,j=He;let J=B(),te=Math.max(0,Math.min(J,W+A));e.style.transform=`translateX(${te}px)`}function Be(re,He){let Oe=[{name:"peek",h:Re()},{name:"partial",h:K()},{name:"full",h:ce()}],me=Math.max(0,Oe.findIndex(pe=>pe.name===k)),A=Oe[me].h;if(Math.abs(re-A)<36&&Math.abs(He)<1100)return k;let J=re+He*.05,te=(Oe[0].h+Oe[1].h)/2,Ae=(Oe[1].h+Oe[2].h)/2,$=J<te?0:J<Ae?1:2;if($>me+1&&($=me+1),$<me-1&&($=me-1),$===2&&me<2){let pe=Ae+(Oe[2].h-Ae)*.25;re<pe&&He<1400&&($=1)}return Oe[$].name}function Ne(re,He){let Oe=B();return Oe<=0||Math.abs(re-(k==="closed"?Oe:0))<28&&Math.abs(He)<800?k:He>900?"closed":He<-900?"open":re>Oe*.45?"closed":"open"}function qe(re){if(!S||!e||Z!=null&&re.pointerId!==Z)return;let He=T,Oe=_;if(S=!1,_=!1,T=null,Z=null,e.classList.remove("is-dragging"),i&&(i.style.overflow=""),Oe&&!w)return;if(!w){He==="narrow"?(e.style.height="",ge()):He==="wide-open"?(we(),m("open")):we();return}if(He==="narrow"){let J=e.getBoundingClientRect().height;e.style.height="",m(Be(J,q));return}let me=/translateX\(([-\d.]+)px\)/.exec(e.style.transform||""),A=me?parseFloat(me[1]):0;we(),m(Ne(A,_e))}t?.addEventListener("pointerdown",re=>{l()||ue(re)}),t?.addEventListener("pointermove",Me),t?.addEventListener("pointerup",qe),t?.addEventListener("pointercancel",qe),t&&t.setAttribute("aria-label","Sheet handle \u2014 tap to resize, drag to adjust"),document.addEventListener("pointerdown",re=>{l()&&Xe(re)},{capture:!0}),document.addEventListener("pointermove",Me,{capture:!0}),document.addEventListener("pointerup",qe,{capture:!0}),document.addEventListener("pointercancel",qe,{capture:!0});let Je=()=>{e&&(e.style.height=""),we(),i&&(i.style.overflow=""),g()};s.addEventListener?s.addEventListener("change",Je):s.addListener(Je);function at(){n(r.matches)}return at(),r.addEventListener?r.addEventListener("change",at):r.addListener(at),window.addEventListener("resize",()=>{f(),u()}),g(),y(),{getDetent:c,getSafeInsets:x,onDetentChange:h,refreshPartialHeight:d,setDetent:m}}function Zu(n={}){let e=n.min??0,t=n.max??1,i=n.step??.001,s=!!n.thumbScrubOnly,r=ol(n.value??e,e,t),o=document.createElement("div");o.className="coop-range",o.setAttribute("role","slider"),o.tabIndex=0,n.ariaLabel&&o.setAttribute("aria-label",n.ariaLabel),o.setAttribute("aria-valuemin",String(e)),o.setAttribute("aria-valuemax",String(t));let a=document.createElement("div");a.className="coop-range-track";let l=document.createElement("div");l.className="coop-range-fill";let c=document.createElement("div");c.className="coop-range-thumb",a.append(l,c),o.append(a);let u=10,h=14,f=null,d=0,p=0,x=!1,m=!1,g=!1,b=!0;function M(){let N=`${(t===e?0:(r-e)/(t-e))*100}%`;l.style.width=N,c.style.left=N,o.setAttribute("aria-valuenow",String(r));let G=n.formatAriaValue?.(r)??String(r);o.setAttribute("aria-valuetext",G)}function y(k,N){let G=typeof c.getBoundingClientRect=="function"?c.getBoundingClientRect():null;return!G||!(G.width>0)||!(G.height>0)?!0:k>=G.left-h&&k<=G.right+h&&N>=G.top-h&&N<=G.bottom+h}function S(k,N="input"){let G=LT(ol(k,e,t),e,t,i);if(G===r&&N==="silent"){M();return}r=G,M(),(N==="input"||N==="change")&&n.onInput?.(r),N==="change"&&n.onChange?.(r)}function T(k){let N=a.getBoundingClientRect(),G=Math.max(N.width,1),j=ol((k-N.left)/G,0,1);return e+j*(t-e)}function _(k){if(f==null)return;let N=m;f=null,x=!1,m=!1,b=!0,N&&n.onScrubEnd?.(),k&&N&&n.onChange?.(r)}function w(k){f==null&&(k.pointerType==="mouse"&&k.button!==0||(f=k.pointerId,d=k.clientX,p=k.clientY,g=!1,x=!1,m=!1,b=!s||y(k.clientX,k.clientY)))}function D(k){if(f!==k.pointerId)return;let N=k.clientX-d,G=k.clientY-p;if(!g&&Math.hypot(N,G)>u&&(g=!0),!x){if(!g)return;if(k.pointerType==="touch"&&Math.abs(G)>=Math.abs(N)){_(!1);return}if(!b){_(!1);return}x=!0,m=!0,n.onScrubStart?.();try{o.setPointerCapture(k.pointerId)}catch{}}S(T(k.clientX),"input"),k.preventDefault()}function L(k){if(f===k.pointerId){if(!g&&!m){f=null,x=!1,m=!1,b=!0,n.onTap?.();return}_(!0)}}function z(k){f===k.pointerId&&_(!1)}function W(k){let N=t-e,G=i>0?i:N/100,j=N/10,q=r;switch(k.key){case"ArrowLeft":case"ArrowDown":q=r-G;break;case"ArrowRight":case"ArrowUp":q=r+G;break;case"PageDown":q=r-j;break;case"PageUp":q=r+j;break;case"Home":q=e;break;case"End":q=t;break;case"Enter":case" ":k.preventDefault(),n.onTap?.();return;default:return}k.preventDefault(),S(q,"change")}return o.addEventListener("pointerdown",w),o.addEventListener("pointermove",D),o.addEventListener("pointerup",L),o.addEventListener("pointercancel",z),o.addEventListener("keydown",W),M(),{el:o,get value(){return r},set value(k){S(k,"silent")},refresh(){M()}}}function ol(n,e,t){return Math.min(t,Math.max(e,n))}function LT(n,e,t,i){if(!(i>0))return ol(n,e,t);let s=Math.round((n-e)/i),r=Number((e+s*i).toPrecision(12));return ol(r,e,t)}var Xx="blueprints.locale",DT={shell:"Shell",slopes:"Slopes",soffit:"Soffit",bass_traps:"Bass traps",furniture:"Furniture",interior:"Interior",cabinet:"Cabinets",appliance:"Appliances",sink:"Sink",rug:"Rug",light:"Lights",door:"Door",other:"Other",floor:"Floor",masonry:"Masonry",column:"Column",venec:"Ring beam",eps:"EPS",plaster:"Plaster",wall_plate:"Wall plate",rafters:"Rafters",roofing:"Roofing build-up",plenum_wool:"Mineral wool \u03BB 0.039",racking_strap:"Racking strap",tie_rod:"Tie rod \xD814",slope_light:"Slope spotlight",pocket_frame:"Pocket-door frame",wall_gkf:"GKF plasterboard",glazing:"Glazing",slope_naturheld_140:"NaturHeld 140",slope_gkf:"GKF plasterboard",slope_cd:"CD Rigips 60\xD727",slope_foil:"Jutafol N AL 170 Speci\xE1l",eave_ud:"UD 28/27 on the wall plate",vapour_brake_tape:"Vapour brake bond tape",eave_acrylic:"Acrylic bead (planned cut)",joint_screw:"Screws",slope_direct_hanger:"Direct hanger 200",slope_nonius:"Nonius 440",soffit_naturheld_140:"NaturHeld 140",soffit_mineral_wool:"Mineral wool \u03BB 0.039",soffit_ud:"UD channel",soffit_gkf:"GKF plasterboard",soffit_cd:"CD Rigips 60\xD727",soffit_nonius:"Nonius 440",soffit_duct:"Spiral duct \xD8160",bass_mineral_wool:"Mineral wool \u03BB 0.039",bass_gkb:"GKB plasterboard",bass_cw:"CW stud",bass_uw:"UW track",bass_strut:"CW strut to wall",bass_angle:"Wall angle",bass_anchor:"Anchor into the block",bass_tape:"Sealing tape",bass_acrylic:"Acrylic joint",bathroom:"Bathroom 1.20",tile:"Tiles",grout:"Grout",drain:"Floor drain",fixture:"Sanitary fixture",prewall:"Pre-wall",screen:"Shower screen",profile:"Sloped edge profile",vanity:"Vanity cabinet"},NT={shell:"Ob\xE1lka",slopes:"\u0160ikminy",soffit:"Podhled",bass_traps:"Basstrapy",furniture:"N\xE1bytek",interior:"Interi\xE9r",cabinet:"Sk\u0159\xED\u0148ky",appliance:"Spot\u0159ebi\u010De",sink:"D\u0159ez",rug:"Koberec",light:"Sv\xEDtidla",door:"Dve\u0159e",other:"Ostatn\xED",floor:"Podlaha",masonry:"Zdivo",column:"Sloup",venec:"V\u011Bnec",eps:"EPS",plaster:"Om\xEDtka",wall_plate:"Pozednice",rafters:"Krokve",roofing:"St\u0159e\u0161n\xED skladba",plenum_wool:"Miner\xE1ln\xED vata \u03BB 0,039",racking_strap:"Zav\u011Btrovac\xED p\xE1ska",tie_rod:"T\xE1hlo \xF814",slope_light:"Bodovka na \u0161ikmin\u011B",pocket_frame:"Pouzdro",wall_gkf:"GKF s\xE1drokarton",glazing:"Zasklen\xED",slope_naturheld_140:"NaturHeld 140",slope_gkf:"GKF s\xE1drokarton",slope_cd:"CD Rigips 60\xD727",slope_foil:"Jutafol N AL 170 Speci\xE1l",eave_ud:"UD 28/27 na pozednici",vapour_brake_tape:"Lepic\xED p\xE1ska paroz\xE1brany",eave_acrylic:"Akrylov\xFD tmel (\u0159ez)",joint_screw:"\u0160rouby",slope_direct_hanger:"P\u0159\xEDm\xFD z\xE1v\u011Bs 200",slope_nonius:"Nonius 440",soffit_naturheld_140:"NaturHeld 140",soffit_mineral_wool:"Miner\xE1ln\xED vata \u03BB 0,039",soffit_ud:"UD profil",soffit_gkf:"GKF s\xE1drokarton",soffit_cd:"CD Rigips 60\xD727",soffit_nonius:"Nonius 440",soffit_duct:"Spiro \xD8160",bass_mineral_wool:"Miner\xE1ln\xED vata \u03BB 0,039",bass_gkb:"GKB s\xE1drokarton",bass_cw:"CW stojka",bass_uw:"UW profil",bass_strut:"CW vzp\u011Bra do zdi",bass_angle:"\xDAheln\xEDk do zdi",bass_anchor:"Hmo\u017Edinka do zdiva",bass_tape:"T\u011Bsnic\xED p\xE1ska",bass_acrylic:"Akrylov\xFD spoj",bathroom:"Koupelna 1.20",tile:"Dla\u017Eba",grout:"Sp\xE1ry",drain:"Podlahov\xE1 vpus\u0165",fixture:"Za\u0159izovac\xED p\u0159edm\u011Bt",prewall:"P\u0159\xEDzd\xEDvka",screen:"Sprchov\xE9 sklo",profile:"Sp\xE1dov\xE1 li\u0161ta",vanity:"Sk\u0159\xED\u0148ka umyvadla"},OT={"ui.view":"View","ui.sections":"Cuts","ui.parts":"Parts","ui.materials":"Materials","ui.edges":"Edges","ui.language":"Language","ui.solid":"Solid","ui.realistic":"Realistic","ui.edgesNone":"None","ui.edgesTransparent":"Transparent","ui.edgesOpaque":"Opaque","ui.iso":"Iso","ui.front":"Front","ui.side":"Side","ui.top":"Top","ui.fov":"FOV","ui.sync":"Sync","ui.measure":"Measure","ui.ar":"AR","ui.cut":"Cut","ui.removeSection":"Remove","ui.hideControls":"Hide controls","ui.showControls":"Show controls","ui.dragSheet":"Drag controls sheet","ui.drawing":"Drawing","ui.labels":"Labels","ui.inspector":"Inspector","ui.menu":"Menu","ui.showAll":"Show all","ui.hideThis":"Hide this","ui.unhideThis":"Unhide this","ui.hideOthers":"Hide all others","ui.unhideOthers":"Unhide all others","ui.expand":"Expand","ui.collapse":"Collapse","ui.globalId":"GlobalId","ui.type":"Type","ui.name":"Name","ui.storey":"Storey","ui.space":"Space","ui.dimensions":"Dimensions","ui.note":"Note","ui.reveal":"Show in inspector","ui.noIfc":"No IFC record","ui.open":"Open","ui.close":"Close","ui.turnOn":"Turn on","ui.turnOff":"Turn off","ui.press":"Press","home.title":"Home","home.live":"Live","home.off":"Off","home.on":"On","home.statusOff":"Offline model. Taps only change this view.","home.statusConnecting":"Connecting to Home\u2026","home.statusLive":"Live: state from Home. Taps send commands.","home.statusLiveNoSim":"Live: state from Home. Rocker presses are off on this server.","home.statusUnreachable":"Home unreachable. Showing the offline model; retrying.","home.failed":"Home refused the command","home.deviceOffline":"Device offline (last known state)","home.unknown":"Unknown","home.level":"Level","home.warm":"Warm","home.cool":"Cool","home.lastEvent":"Last event","home.noEvents":"No presses yet","home.contactClosed":"Closed (contact)","home.contactOpen":"Open (no contact)","home.occupied":"Occupied","home.vacant":"Vacant","home.closedPct":"Closed","home.up":"Up","home.down":"Down","home.stop":"Stop","scene.overview":"Overview","scene.opening":"Door and window","scene.posts":"120 mm posts","scene.soffit":"Podhled","scene.gable":"\u0160t\xEDt","scene.sikmina-lattice":"\u0160ikmina \u2014 ro\u0161t","scene.sikmina-section":"\u0160ikmina \u2014 \u0159ez","scene.bass-kitchen":"Basov\xE1 past \u2014 kuchy\u0148","scene.bass-living":"Basov\xE1 past \u2014 ob\xFDv\xE1k","scene.bass-kitchen-elevation":"Kuchy\u0148 \u2014 pohled","scene.bass-kitchen-section":"Kuchy\u0148 \u2014 \u0159ez","scene.bass-living-elevation":"Ob\xFDv\xE1k \u2014 pohled","scene.bass-living-section":"Ob\xFDv\xE1k \u2014 \u0159ez","scene.ties-front":"T\xE1hla a sv\u011Btla \u2014 pohled","scene.ties-plan":"T\xE1hla a sv\u011Btla \u2014 p\u016Fdorys","scene.ties-section":"T\xE1hlo \u2014 \u0159ez","scene.kitchen-living":"Kuchy\u0148 k ob\xFDv\xE1ku","scene.living-kitchen":"Ob\xFDv\xE1k ke kuchyni","scene.kitchen-run":"Kuchy\u0148sk\xE1 linka","scene.bathroom-floor":"1.20 floor tiles","scene.bathroom":"1.20 room","scene.bathroom-door":"1.20 door and slope"},UT={"ui.view":"Pohled","ui.sections":"\u0158ezy","ui.parts":"D\xEDly","ui.materials":"Materi\xE1ly","ui.edges":"Hrany","ui.language":"Jazyk","ui.solid":"Pln\xE9","ui.realistic":"Realistick\xE9","ui.edgesNone":"\u017D\xE1dn\xE9","ui.edgesTransparent":"Pr\u016Fhledn\xE9","ui.edgesOpaque":"Nepr\u016Fhledn\xE9","ui.iso":"Iso","ui.front":"\u010Celo","ui.side":"Bok","ui.top":"P\u016Fdorys","ui.fov":"FOV","ui.sync":"Sjednotit","ui.measure":"M\u011B\u0159en\xED","ui.ar":"AR","ui.cut":"\u0158ez","ui.removeSection":"Odstranit","ui.hideControls":"Skr\xFDt ovl\xE1d\xE1n\xED","ui.showControls":"Zobrazit ovl\xE1d\xE1n\xED","ui.dragSheet":"P\u0159et\xE1hnout panel","ui.drawing":"V\xFDkres","ui.labels":"Popisky","ui.inspector":"Inspektor","ui.menu":"Nab\xEDdka","ui.showAll":"Zobrazit v\u0161e","ui.hideThis":"Skr\xFDt toto","ui.unhideThis":"Zobrazit toto","ui.hideOthers":"Skr\xFDt ostatn\xED","ui.unhideOthers":"Zobrazit ostatn\xED","ui.expand":"Rozbalit","ui.collapse":"Sbalit","ui.globalId":"GlobalId","ui.type":"Typ","ui.name":"N\xE1zev","ui.storey":"Podla\u017E\xED","ui.space":"M\xEDstnost","ui.dimensions":"Rozm\u011Bry","ui.note":"Pozn\xE1mka","ui.reveal":"Zobrazit v inspektoru","ui.noIfc":"Bez IFC z\xE1znamu","ui.open":"Otev\u0159\xEDt","ui.close":"Zav\u0159\xEDt","ui.turnOn":"Zapnout","ui.turnOff":"Vypnout","ui.press":"Stisknout","home.title":"D\u016Fm","home.live":"\u017Div\u011B","home.off":"Vyp.","home.on":"Zap.","home.statusOff":"Offline model. Klepnut\xED m\u011Bn\xED jen tento pohled.","home.statusConnecting":"P\u0159ipojuji se k Home\u2026","home.statusLive":"\u017Div\u011B: stav z Home. Klepnut\xED pos\xEDlaj\xED p\u0159\xEDkazy.","home.statusLiveNoSim":"\u017Div\u011B: stav z Home. Stisky vyp\xEDna\u010D\u016F jsou na tomto serveru vypnut\xE9.","home.statusUnreachable":"Home nedostupn\xFD. Zobrazuji offline model a zkou\u0161\xEDm znovu.","home.failed":"Home p\u0159\xEDkaz odm\xEDtl","home.deviceOffline":"Za\u0159\xEDzen\xED offline (posledn\xED zn\xE1m\xFD stav)","home.unknown":"Nezn\xE1m\xFD","home.level":"Jas","home.warm":"Tepl\xE1","home.cool":"Studen\xE1","home.lastEvent":"Posledn\xED ud\xE1lost","home.noEvents":"Zat\xEDm bez stisku","home.contactClosed":"Zav\u0159eno (kontakt)","home.contactOpen":"Otev\u0159eno (bez kontaktu)","home.occupied":"Obsazeno","home.vacant":"Volno","home.closedPct":"Zav\u0159eno","home.up":"Nahoru","home.down":"Dol\u016F","home.stop":"Stop","scene.overview":"Celkov\u011B","scene.opening":"Dve\u0159e a okno","scene.posts":"Sloupky 120","scene.soffit":"Podhled","scene.gable":"\u0160t\xEDt","scene.sikmina-lattice":"\u0160ikmina \u2014 ro\u0161t","scene.sikmina-section":"\u0160ikmina \u2014 \u0159ez","scene.bass-kitchen":"Basov\xE1 past \u2014 kuchy\u0148","scene.bass-living":"Basov\xE1 past \u2014 ob\xFDv\xE1k","scene.bass-kitchen-elevation":"Kuchy\u0148 \u2014 pohled","scene.bass-kitchen-section":"Kuchy\u0148 \u2014 \u0159ez","scene.bass-living-elevation":"Ob\xFDv\xE1k \u2014 pohled","scene.bass-living-section":"Ob\xFDv\xE1k \u2014 \u0159ez","scene.ties-front":"T\xE1hla a sv\u011Btla \u2014 pohled","scene.ties-plan":"T\xE1hla a sv\u011Btla \u2014 p\u016Fdorys","scene.ties-section":"T\xE1hlo \u2014 \u0159ez","scene.kitchen-living":"Kuchy\u0148 k ob\xFDv\xE1ku","scene.living-kitchen":"Ob\xFDv\xE1k ke kuchyni","scene.kitchen-run":"Kuchy\u0148sk\xE1 linka","scene.bathroom-floor":"1.20 dla\u017Eba","scene.bathroom":"1.20 koupelna","scene.bathroom-door":"1.20 pr\xE1h a sp\xE1d"},ap={en:{...OT,...DT},cs:{...UT,...NT}},Lo=qx(),lp=new Set;function qx(){try{let n=typeof navigator<"u"&&navigator.language||"";if(String(n).toLowerCase().startsWith("cs"))return"cs"}catch{}return"en"}function FT(){try{let n=localStorage.getItem(Xx);if(n==="en"||n==="cs")return n}catch{}return qx()}function BT(n){try{localStorage.setItem(Xx,n)}catch{}}function Ku(){return Lo}function $x(n){if(!(n!=="en"&&n!=="cs")&&n!==Lo){Lo=n,BT(n);for(let e of lp)try{e()}catch{}}}function cp(n){return lp.add(n),()=>lp.delete(n)}function Yx(){return Lo=FT(),Lo}function Nt(n){let e=ap[Lo]||ap.en;if(Object.prototype.hasOwnProperty.call(e,n))return e[n];let t=ap.en;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:n.startsWith("scene.")?n.slice(6):n}function up(n){let e=n||document;e.querySelectorAll("[data-i18n]").forEach(t=>{let i=t.getAttribute("data-i18n");i&&(t.textContent=Nt(i))}),e.querySelectorAll("[data-i18n-aria]").forEach(t=>{let i=t.getAttribute("data-i18n-aria");i&&t.setAttribute("aria-label",Nt(i))}),e.querySelectorAll("[data-i18n-title]").forEach(t=>{let i=t.getAttribute("data-i18n-title");i&&t.setAttribute("title",Nt(i))})}function Tr(n){return!!(n&&n.userData&&n.userData.bpHitProxy)}function al(n){if(!n||!n.visible||Tr(n))return!1;let e=n.userData||{};return!(e.bpIfcHidden||e.isEdgeOverlay||e.isSectionCap||e.isPeeledEdgeBatch)}function Zx(){let n=[];function e(s){n.push(s),n.sort((r,o)=>(o.priority||0)-(r.priority||0))}function t(s,r,o){let a=[];for(let l of s)o&&!o(l)||a.push(l);for(let l of a)for(let c of n){let u=c.claim?.(l,r);if(u)return u.onTap(),!0}for(let l of n)if(l.fallback?.(a,r))return!0;return!1}function i(s,r,o){let a=[];for(let l of s)o&&!o(l)||a.push(l);for(let l of a)for(let c of n){let u=c.claim?.(l,r);if(u)return Array.isArray(u.actions)?u.actions.slice():[]}return[]}return{register:e,dispatch:t,actionsFor:i,handlers:n}}var Kx=8,zT=56,Jx=14,hp=11,jx=.5,kT=1e-4,Ju=128,HT=.028,VT=5,GT=.995,WT=.999,Qx=18,XT=22,qT=14,fp=new Ze,ey=new Mi,li=new I,ci=new I,Ji=new I,Fn=new I,Oo=new I,Ki=new I,Do=new I,No=new I,Ut=new I,ty=new I,Uo=new I,$T=new mn;function dp(n){let e=Math.abs(n)*1e3;return Number.isFinite(e)?Math.abs(e-Math.round(e))<.05?`${Math.round(e)} mm`:e>=100?`${e.toFixed(1)} mm`:`${e.toFixed(2)} mm`:"\u2014 mm"}function pp(n){return n.pointerType==="touch"}function mp(n){return n.pointerType==="mouse"||n.pointerType==="pen"}function ny(){return typeof window<"u"&&window.matchMedia?.("(hover: hover) and (pointer: fine)").matches}function uy(n){let{scene:e,canvas:t,getCamera:i,controls:s,getRoot:r,getClipPlanes:o,onLiveLength:a,onActiveChange:l}=n,c="idle",u=!1,h=!1,f=0,d=0,p=null,x=null,m=null,g=null,b=null,M=null,y=null,S="mouse",T=0,_=0,w=!1,D=!1,L=new kt;L.name="MeasureOverlay",L.renderOrder=10,e.add(L);let z=new kt;z.name="MeasureDimensions",e.add(z);let W=ry(16766474),k=ry(3458905),N=oy(16766474,.75),G=jT(16766474);L.add(W,k,N,G),W.visible=!1,k.visible=!1,N.visible=!1,G.visible=!1;let j=KT(t),q=[];function _e(){return u}function Z(me){let A=!!me;if(A===u){A&&ee();return}if(u=A,u)if(s.enabled=!1,c="placeFirst",V(),b=null,M=null,ny()){let J=Math.max(1,t.clientWidth),te=Math.max(1,t.clientHeight);Re(J*.5,te*.5,!0)}else be();else s.enabled=!0,c="idle",V(),b=null,M=null,y=null,D=!1,be(),a?.(null);l?.(u),ee(),ce()}function V(){h=!1,p=null,x=null,m=null,g=null}function ee(){c==="placeSecond"&&b&&p?a?.(dp(b.distanceTo(p))):u&&a?.(null)}function be(){j.hidden=!0,W.visible=!1,G.visible=!1}function Re(me,A,J=!1){f=me,d=A,h=!0;let te=Fe(me,A);if(te){let Ae=te.point.clone(),$=te.kind,pe=te.edgeDir;if(g=null,c==="placeSecond"&&b){let ve=Xe(b,M,te);ve&&(Ae=ve.foot,$="perp",pe=ve.edgeDir,g=ve.edgeDir.clone())}p=Ae,x=$,m=pe}else J?p||(x=null,m=null,g=null):(p=null,x=null,m=null,g=null);ce(),ee()}function K(me,A){let J=we(A)*VT;me.scale.setScalar(Math.max(J,1e-6))}function ce(){if(!u){be(),k.visible=!1,N.visible=!1,G.visible=!1;return}b?(k.visible=!0,k.position.copy(b),K(k,b)):k.visible=!1,h?(j.hidden=!1,sy(j,t,f,d,x),p?(W.visible=!0,W.position.copy(p),K(W,p),JT(W,x)):W.visible=!1):be(),c==="placeSecond"&&b&&p?(ly(N,b,p),N.visible=!0):N.visible=!1,c==="placeSecond"&&x==="perp"&&b&&p&&g?(ay(G,b,p,g,we),G.visible=!0):G.visible=!1}function B(me){let A=t.getBoundingClientRect();return{x:me.clientX-A.left,y:me.clientY-A.top}}function ne(me,A,J){return J==="touch"?{x:me,y:A-zT}:{x:me,y:A}}function ge(me){let A=o()||[];for(let J of A)if(J.distanceToPoint(me)<-kT)return!1;return!0}function we(me){let A=i(),J=Math.max(1,t.clientHeight);if(A.isOrthographicCamera)return 2*((A.top-A.bottom)/(2*Math.max(A.zoom,1e-6)))/J;let te=A.position.distanceTo(me),Ae=A.fov*Math.PI/180;return 2*Math.tan(Ae/2)*te/J/Math.max(A.zoom,1e-6)}function Ye(me,A){A.copy(me).project(i());let J=Math.max(1,t.clientWidth),te=Math.max(1,t.clientHeight);return A.x=(A.x*.5+.5)*J,A.y=(-A.y*.5+.5)*te,A}function Fe(me,A){let J=r();if(!J)return null;let te=t.getBoundingClientRect();fp.x=me/Math.max(1,te.width)*2-1,fp.y=-(A/Math.max(1,te.height))*2+1,ey.setFromCamera(fp,i());let Ae=ey.intersectObject(J,!0),$=null;for(let ke of Ae)if(!(!ke.object.visible||Tr(ke.object))&&ge(ke.point)){$=ke;break}if(!$)return null;let pe=$.object,ve=pe.geometry;if(!ve?.getAttribute("position"))return{point:$.point.clone(),kind:"face",edgeDir:null,mesh:pe,triVerts:null,faceNormal:null};pe.updateWorldMatrix(!0,!1);let Ee=we($.point),C=Ee*Jx,E=Ee*hp,X=ve.getAttribute("position"),Se=ve.getIndex(),he=$.faceIndex,ae=[];if($.face)li.fromBufferAttribute(X,$.face.a).applyMatrix4(pe.matrixWorld),ci.fromBufferAttribute(X,$.face.b).applyMatrix4(pe.matrixWorld),Ji.fromBufferAttribute(X,$.face.c).applyMatrix4(pe.matrixWorld),ae.push(li.clone(),ci.clone(),Ji.clone());else if(typeof he=="number"){let ke,nt,Y;Se?(ke=Se.getX(he*3),nt=Se.getX(he*3+1),Y=Se.getX(he*3+2)):(ke=he*3,nt=he*3+1,Y=he*3+2),li.fromBufferAttribute(X,ke).applyMatrix4(pe.matrixWorld),ci.fromBufferAttribute(X,nt).applyMatrix4(pe.matrixWorld),Ji.fromBufferAttribute(X,Y).applyMatrix4(pe.matrixWorld),ae.push(li.clone(),ci.clone(),Ji.clone())}let ye=null;ae.length===3&&(ye=new I().subVectors(ae[1],ae[0]).cross(Fn.subVectors(ae[2],ae[0])).normalize(),ye.lengthSq()<1e-12&&(ye=null));let se=me,de=A,Le=null;function F(ke){if(!ge(ke)||ke.distanceToSquared($.point)>C*C*4)return;Ye(ke,No);let nt=Math.hypot(No.x-se,No.y-de);nt>Jx||(!Le||nt<Le.distPx)&&(Le={point:ke.clone(),distPx:nt})}for(let ke of ae)F(ke);let xe=C*C*4,fe=X.count,ze=fe>8e3?2:1;for(let ke=0;ke<fe;ke+=ze)Fn.fromBufferAttribute(X,ke).applyMatrix4(pe.matrixWorld),!(Fn.distanceToSquared($.point)>xe)&&F(Fn);if(Le)return{point:Le.point,kind:"vertex",edgeDir:null,mesh:pe,triVerts:ae.length?ae:null,faceNormal:ye};let Ce=null;function Ue(ke,nt){Ut.copy(nt).sub(ke);let Y=Ut.lengthSq();if(Y<1e-18)return;let Ie=Fn.copy($.point).sub(ke).dot(Ut)/Y;if(Ie=Math.min(1,Math.max(0,Ie)),Oo.copy(ke).addScaledVector(Ut,Ie),!ge(Oo)||Oo.distanceToSquared($.point)>E*E*4)return;Ye(Oo,No);let rt=Math.hypot(No.x-se,No.y-de);if(rt>hp)return;Ye(ke,Ki),Ye(nt,Do);let Pe=Do.x-Ki.x,dt=Do.y-Ki.y,Et=Pe*Pe+dt*dt;if(Et>1e-6){let Jt=((se-Ki.x)*Pe+(de-Ki.y)*dt)/Et;Jt=Math.min(1,Math.max(0,Jt));let es=Ki.x+Pe*Jt,yn=Ki.y+dt*Jt;if(Math.hypot(se-es,de-yn)>hp)return}(!Ce||rt<Ce.distPx)&&(Ce={point:Oo.clone(),distPx:rt,dir:Ut.clone().normalize()})}return ae.length===3&&(Ue(ae[0],ae[1]),Ue(ae[1],ae[2]),Ue(ae[2],ae[0])),Ce?{point:Ce.point,kind:"edge",edgeDir:Ce.dir,mesh:pe,triVerts:ae.length?ae:null,faceNormal:ye}:{point:$.point.clone(),kind:"face",edgeDir:null,mesh:pe,triVerts:ae.length?ae:null,faceNormal:ye}}function Xe(me,A,J){if(!J.mesh||!J.triVerts||J.triVerts.length!==3||!J.faceNormal||J.faceNormal.lengthSq()<1e-12)return null;let te=we(me),Ae=te*qT,$=Math.max(te*2,1e-5);if(Math.abs(ju(me,J.triVerts[0],J.faceNormal))>$)return null;let pe=ue(J.mesh,J.triVerts[0],J.faceNormal,$);if(!pe.length)return null;let ve=[];for(let E of pe)iy(me,E.a,E.b)<=Ae&&ve.push(E.dir.clone());if(A&&A.lengthSq()>1e-12&&ve.push(A.clone().normalize()),!ve.length)return null;let Ee=te*Qx,C=null;for(let E of ve)if(!(E.lengthSq()<1e-12)){E.normalize();for(let X of pe){if(Math.abs(X.dir.dot(E))<GT||iy(me,X.a,X.b)<=Ae)continue;let Se=YT(me,X.a,X.b);if(!ge(Se)||me.distanceTo(Se)*1e3<jx||(Ut.copy(Se).sub(me),Ut.lengthSq()<1e-16)||(Ut.normalize(),Math.abs(Ut.dot(E))>.08))continue;let ae=J.point.distanceTo(Se);Ye(J.point,Ki),Ye(Se,Do);let ye=Math.hypot(Ki.x-Do.x,Ki.y-Do.y);if(ae>Ee*1.35&&ye>Qx)continue;let se=ye+ae/Math.max(te,1e-9);(!C||se<C.score)&&(C={foot:Se.clone(),edgeDir:E.clone(),score:se})}}return C?{foot:C.foot,edgeDir:C.edgeDir}:null}function ue(me,A,J,te){let Ae=me.geometry,$=Ae?.getAttribute("position");if(!$)return[];me.updateWorldMatrix(!0,!1);let pe=Ae.getIndex(),ve=new Map,Ee=Math.max(te*.25,1e-5);function C(ae,ye,se){Uo.subVectors(ye,ae).cross(Fn.subVectors(se,ae)),!(Uo.lengthSq()<1e-16)&&(Uo.normalize(),!(Math.abs(Uo.dot(J))<WT)&&(Math.abs(ju(ae,A,J))>te||Math.abs(ju(ye,A,J))>te||Math.abs(ju(se,A,J))>te||(E(ae,ye),E(ye,se),E(se,ae))))}function E(ae,ye){if(Ut.copy(ye).sub(ae),Ut.lengthSq()<1e-16)return;let se=ZT(ae,ye,Ee);ve.has(se)||ve.set(se,{a:ae.clone(),b:ye.clone(),dir:Ut.clone().normalize()})}let X=pe?pe.count/3:$.count/3,Se=12e3,he=X>Se?Math.ceil(X/Se):1;for(let ae=0;ae<X;ae+=he){let ye,se,de;if(pe){let Le=ae*3;ye=pe.getX(Le),se=pe.getX(Le+1),de=pe.getX(Le+2)}else ye=ae*3,se=ae*3+1,de=ae*3+2;li.fromBufferAttribute($,ye).applyMatrix4(me.matrixWorld),ci.fromBufferAttribute($,se).applyMatrix4(me.matrixWorld),Ji.fromBufferAttribute($,de).applyMatrix4(me.matrixWorld),C(li,ci,Ji)}return[...ve.values()]}function Me(){if(p){if(c==="placeFirst"){b=p.clone(),M=m?m.clone():null,c="placeSecond",g=null,(pp({pointerType:S})||!ny())&&(h=!1,p=null,x=null,m=null,be()),ce(),ee();return}if(c==="placeSecond"&&b){if(b.distanceTo(p)*1e3<jx)return;Be(b,p),Z(!1)}}}function Be(me,A){let J=new kt;J.name="Dimension";let te=oy(16752394,1);ly(te,me,A),te.visible=!0;let Ae=me.clone().lerp(A,.5),$=me.distanceTo(A),pe=QT(dp($));pe.position.copy(Ae),J.add(te,pe),z.add(J),q.push({group:J,sprite:pe,mid:Ae.clone(),span:$}),Ne(pe,me,A,Ae,$)}function Ne(me,A,J,te,Ae){let $=i();if($.getWorldDirection(ty),Ut.copy(J).sub(A),Ut.lengthSq()<1e-16){me.position.copy(te);return}Ut.normalize(),Fn.crossVectors(Ut,ty),Fn.lengthSq()<1e-10&&Fn.copy($.up),Fn.normalize();let pe=Math.max(Ae*HT,we(te)*18);me.position.copy(te).addScaledVector(Fn,pe);let ve=we(me.position)*56;me.scale.set(ve*2.2,ve,1)}function qe(){k.visible&&b&&K(k,b),W.visible&&p&&K(W,p),h&&sy(j,t,f,d,x),G.visible&&b&&p&&g&&x==="perp"&&ay(G,b,p,g,we);for(let me of q){let J=me.group.children[0].geometry.getAttribute("position");li.fromBufferAttribute(J,0),ci.fromBufferAttribute(J,1),Ne(me.sprite,li,ci,me.mid,me.span)}}function Je(me){if(!u||c==="idle"||!mp(me)||y!==null)return;let{x:A,y:J}=B(me),te=ne(A,J,me.pointerType);Re(te.x,te.y,!0)}function at(me){if(!u||c==="idle"||me.button!==void 0&&me.button!==0||y!==null)return;y=me.pointerId,S=me.pointerType||"mouse";let{x:A,y:J}=B(me);T=A,_=J,w=!1,D=!1;try{t.setPointerCapture(me.pointerId)}catch{}if(mp(me)){let te=ne(A,J,S);Re(te.x,te.y,!0)}me.preventDefault()}function re(me){if(!u)return;if(y===null){Je(me);return}if(y!==me.pointerId)return;let{x:A,y:J}=B(me);if(Math.hypot(A-T,J-_)>=Kx&&(w=!0,D=!0),pp(me)){if(!D)return;let Ae=ne(A,J,"touch");Re(Ae.x,Ae.y,!0)}else if(mp(me)){let Ae=ne(A,J,S);Re(Ae.x,Ae.y,!0)}me.preventDefault()}function He(me){if(!u||y!==me.pointerId)return;let{x:A,y:J}=B(me);Math.hypot(A-T,J-_)>=Kx&&(w=!0,D=!0),y=null;try{t.releasePointerCapture(me.pointerId)}catch{}if(pp(me)){w?D=!1:(D=!1,h&&p&&Me()),me.preventDefault();return}!w&&p&&Me(),D=!1,me.preventDefault()}function Oe(me){y===me.pointerId&&(y=null,D=!1)}return t.addEventListener("pointerdown",at),t.addEventListener("pointermove",re),t.addEventListener("pointerup",He),t.addEventListener("pointercancel",Oe),{isActive:_e,setActive:Z,update:qe,formatMm:dp}}function ju(n,e,t){return $T.setFromNormalAndCoplanarPoint(t,e).distanceToPoint(n)}function iy(n,e,t){Ut.copy(t).sub(e);let i=Ut.lengthSq();if(i<1e-18)return n.distanceTo(e);let s=Fn.copy(n).sub(e).dot(Ut)/i;return s=Math.min(1,Math.max(0,s)),Oo.copy(e).addScaledVector(Ut,s).distanceTo(n)}function YT(n,e,t){Ut.copy(t).sub(e);let i=Ut.lengthSq();if(i<1e-18)return e.clone();let s=Fn.copy(n).sub(e).dot(Ut)/i;return s=Math.min(1,Math.max(0,s)),e.clone().addScaledVector(Ut,s)}function ZT(n,e,t){let i=Math.round(n.x/t),s=Math.round(n.y/t),r=Math.round(n.z/t),o=Math.round(e.x/t),a=Math.round(e.y/t),l=Math.round(e.z/t);return i<o||i===o&&s<a||i===o&&s===a&&r<=l?`${i},${s},${r}|${o},${a},${l}`:`${o},${a},${l}|${i},${s},${r}`}function KT(n){let e=document.getElementById("measure-crosshair");return e||(e=document.createElement("div"),e.id="measure-crosshair",e.className="measure-crosshair",e.hidden=!0,e.setAttribute("aria-hidden","true"),e.innerHTML='<span class="measure-crosshair-h"></span><span class="measure-crosshair-v"></span><span class="measure-crosshair-dot"></span>',(n.parentElement||document.body).appendChild(e),e)}function sy(n,e,t,i,s){let r=e.getBoundingClientRect();n.style.left=`${r.left+t}px`,n.style.top=`${r.top+i}px`,n.dataset.snap=s||"none"}function ry(n){let e=new ba(1,16,12),t=new nn({color:n,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),i=new ft(e,t);return i.renderOrder=20,i.visible=!1,i}function JT(n,e){let t=n.material;e==="vertex"?t.color.setHex(16729402):e==="edge"||e==="perp"?t.color.setHex(16766474):t.color.setHex(6607615)}function oy(n,e){let t=new Ot,i=new Float32Array(6);t.setAttribute("position",new Bt(i,3));let s=new xs({color:n,transparent:e<1,opacity:e,depthTest:!1,depthWrite:!1}),r=new Fi(t,s);return r.renderOrder=19,r.frustumCulled=!1,r.visible=!1,r}function jT(n){let e=new Ot,t=new Float32Array(9);e.setAttribute("position",new Bt(t,3));let i=new xs({color:n,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),s=new Fi(e,i);return s.renderOrder=22,s.frustumCulled=!1,s.visible=!1,s}function ay(n,e,t,i,s){let r=s(t)*XT;if(Ut.copy(e).sub(t),Ut.lengthSq()<1e-16){n.visible=!1;return}if(Ut.normalize(),Fn.copy(i).normalize(),Uo.crossVectors(Fn,Ut),Uo.lengthSq()<1e-12){n.visible=!1;return}li.copy(t).addScaledVector(Fn,r),ci.copy(t),Ji.copy(t).addScaledVector(Ut,r);let o=n.geometry.getAttribute("position");o.setXYZ(0,li.x,li.y,li.z),o.setXYZ(1,ci.x,ci.y,ci.z),o.setXYZ(2,Ji.x,Ji.y,Ji.z),o.needsUpdate=!0,n.geometry.computeBoundingSphere()}function ly(n,e,t){let i=n.geometry.getAttribute("position");i.setXYZ(0,e.x,e.y,e.z),i.setXYZ(1,t.x,t.y,t.z),i.needsUpdate=!0,n.geometry.computeBoundingSphere()}function QT(n){let e=document.createElement("canvas");e.width=Ju*2,e.height=Ju;let t=e.getContext("2d");if(t){t.clearRect(0,0,e.width,e.height);let o=18,a=14;t.font=`600 ${Math.round(Ju*.42)}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;let l=t.measureText(n),c=Math.ceil(l.width),u=Math.round(Ju*.42),h=c+o*2,f=u+a*2,d=(e.width-h)/2,p=(e.height-f)/2,x=18;t.fillStyle="rgba(28, 28, 30, 0.78)",cy(t,d,p,h,f,x),t.fill(),t.strokeStyle="rgba(255, 255, 255, 0.22)",t.lineWidth=2,cy(t,d,p,h,f,x),t.stroke(),t.fillStyle="#f5f5f7",t.textAlign="center",t.textBaseline="middle",t.fillText(n,e.width/2,e.height/2+1)}let i=new ys(e);i.colorSpace=At,i.needsUpdate=!0;let s=new fo({map:i,depthTest:!1,depthWrite:!1,transparent:!0}),r=new ha(s);return r.renderOrder=21,r.center.set(.5,.5),r}function cy(n,e,t,i,s,r){let o=Math.min(r,i/2,s/2);n.beginPath(),n.moveTo(e+o,t),n.arcTo(e+i,t,e+i,t+s,o),n.arcTo(e+i,t+s,e,t+s,o),n.arcTo(e,t+s,e,t,o),n.arcTo(e,t,e+i,t,o),n.closePath()}function Qu(n){if(n.blocked||n.modifiers||n.button!==void 0&&n.button!==0||(n.pointers??1)>1||n.consumed)return"ignore";if(Math.hypot(n.dx??0,n.dy??0)>(n.slop??12))return"drag";let t=n.longPressMs??500;return!n.released&&(n.dt??0)>=t?"longpress":n.released?"tap":"pending"}function ji(n){let e=String(n||"").replace(/_(\d+)$/,""),t=e.split("__").filter(i=>i.length>0);return t.length>=2?{part:t[0],element:t.slice(1).join("__")}:{part:e||"part",element:null}}function hy(n){let e="part",t=n;for(;t;){let i=t.name||"";if(!(i.endsWith("__edges")||!!t.userData?.isEdgeOverlay)&&i){let r=ji(i);if(r.part&&(e=r.part),r.element)return{part:r.part,element:r.element}}t=t.parent||null}return{part:e,element:null}}var th=12,eA=500,tA=Math.PI/2,nA=.03,fy=.001;function iA(n){let e=Math.min(1,Math.max(0,n));return e<.5?4*e*e*e:1-(-2*e+2)**3/2}function sA(n){return n.blocked||n.modifiers||n.button!==void 0&&n.button!==0||(n.pointers??1)>1?"ignore":Math.hypot(n.dx,n.dy)>th?"drag":"tap"}function rA(n,e){return(e>=0?1:-1)*n*tA}function oA(n,e=null){let t=n.length,i=new Map,s=a=>{let l=i.has(a)?i.get(a):a;return l!==a?(l=s(l),i.set(a,l)):i.has(a)||i.set(a,a),l},r=(a,l)=>{let c=s(a),u=s(l);c!==u&&i.set(c,u)};if(e){let a=new Map,l=1e4,c=e.count??n.reduce((u,h)=>Math.max(u,h),0)+1;for(let u=0;u<c;u++){let h=`${Math.round(e.getX(u)*l)},${Math.round(e.getY(u)*l)},${Math.round(e.getZ(u)*l)}`,f=a.get(h);f===void 0?a.set(h,u):r(u,f)}}for(let a=0;a+2<t;a+=3)r(n[a],n[a+1]),r(n[a+1],n[a+2]);let o=new Map;for(let a=0;a+2<t;a+=3){let l=s(n[a]),c=o.get(l);c||(c=[],o.set(l,c)),c.push(a)}return[...o.values()]}function dy(n){let e=n.geometry,t=e?.getIndex?.(),i=e?.getAttribute?.("position");if(!t||!i||!n.parent)return[n];let s=oA(t.array,i);if(s.length<2)return[n];let r=e.getAttribute("normal"),o=[];for(let a of s){let l=new Map,c=[],u=[],h=[],f=x=>{let m=l.get(x);return m!==void 0||(m=c.length/3,l.set(x,m),c.push(i.getX(x),i.getY(x),i.getZ(x)),r&&u.push(r.getX(x),r.getY(x),r.getZ(x))),m};for(let x of a)h.push(f(t.getX(x)),f(t.getX(x+1)),f(t.getX(x+2)));let d=new Ot;d.setAttribute("position",new Ht(c,3)),u.length&&d.setAttribute("normal",new Ht(u,3)),d.setIndex(h);let p=new ft(d,n.material);p.name=n.name,p.position.copy(n.position),p.quaternion.copy(n.quaternion),p.scale.copy(n.scale),p.visible=n.visible,n.parent.add(p),o.push(p)}return n.parent.remove(n),e.dispose?.(),o}function aA(n,e=[]){let t=[];n.traverse(r=>{let o=r.name||"";if(ji(o).part!=="door")return;let a=r.parent?.name||"";ji(a).part!=="door"&&t.push(r)});let i=new Set((e||[]).filter(r=>r&&r.kind==="drawer"&&r.element).map(r=>String(r.element)));i.size&&n.traverse(r=>{let o=ji(r.name||"");!o.element||!i.has(o.element)||ji(r.parent?.name||"").element!==o.element&&t.push(r)});let s=[];for(let r of t){if(r.isMesh){s.push(...dy(r));continue}let o=[];if(r.traverse(a=>{a.isMesh&&o.push(a)}),o.length===1){let a=dy(o[0]);if(a.length>1){s.push(...a);continue}}s.push(r)}return s}function lA(n,e,t=nA){let i=[];for(let a of n)for(let l of e){if(!l||!(l.kind==="drawer"&&Array.isArray(l.slide))&&(l.kind!=="hinged"||!l.hinge))continue;let u=l.center;if(!Array.isArray(u)||u.length<3)continue;let h=a.center.x-Number(u[0]),f=a.center.y-Number(u[1]),d=a.center.z-Number(u[2]),p=Math.hypot(h,f,d);p<=t&&i.push({distance:p,entry:a,record:l})}i.sort((a,l)=>a.distance-l.distance);let s=new Set,r=new Set,o=[];for(let a of i)s.has(a.entry)||r.has(a.record.id)||(s.add(a.entry),r.add(a.record.id),o.push({entry:a.entry,record:a.record}));return o}function cA(n){return n.updateWorldMatrix(!0,!0),new Wt().setFromObject(n).getCenter(new I)}function uA(n,e){let t=n.parent;if(!t)return null;if(e.kind==="drawer")return hA(n,e);let i=new kt;i.name=`hinge:${e.id}`,t.add(i),t.updateWorldMatrix(!0,!1);let s=new I(Number(e.hinge[0]),Number(e.hinge[1]),Number(e.hinge[2]));i.position.copy(t.worldToLocal(s)),i.updateWorldMatrix(!0,!1),i.attach(n);let r={id:e.id,pivot:i,host:n,sign:Number(e.sign)>=0?1:-1,goal:0,anim:null},o=a=>{a.userData.bpDoor=r};return o(i),n.traverse(o),r}function hA(n,e){let t=n.parent;if(!t)return null;let i=new kt;i.name=`drawer:${e.id}`,t.add(i),t.updateWorldMatrix(!0,!1);let s=e.center.map(Number),r=e.slide.map(Number),o=t.worldToLocal(new I(s[0],s[1],s[2])),a=t.worldToLocal(new I(s[0]+r[0],s[1]+r[1],s[2]+r[2]));i.updateWorldMatrix(!0,!1),i.attach(n);let l={id:e.id,kind:"drawer",pivot:i,host:n,slideLocal:a.sub(o),sign:1,goal:0,anim:null},c=u=>{u.userData.bpDoor=l};return c(i),n.traverse(c),l}function ul(n,e){let t=n.anim;if(!t)return n.goal;let i=(e-t.t0)/eA;return i>=1?(n.anim=null,n.goal=t.to,t.to):t.from+(t.to-t.from)*iA(i)}var py=new $t,ll=new I;function fA(n,e){if(n.quaternion.identity(),Math.abs(e)<=1e-8)return;let t=n.parent;ll.set(0,1,0),t&&(t.updateWorldMatrix(!0,!1),t.getWorldQuaternion(py).invert(),ll.applyQuaternion(py)),!(ll.lengthSq()<1e-12)&&(ll.normalize(),n.rotateOnAxis(ll,e))}function dA(n,e){let t=ul(n,e);return n.slideLocal?(n.pivot.position.copy(n.slideLocal).multiplyScalar(t),t):(fA(n.pivot,rA(t,n.sign)),t)}function pA(n,e){let t=ul(n,e),i=n.goal>.5?0:1;n.goal=i,n.anim={from:t,to:i,t0:e}}function mA(n,e){let t=ul(n,e);return t<=.001?!1:(n.goal>.5&&(n.goal=0,n.anim={from:t,to:0,t0:e}),!0)}var eh=new I,gA=new nn({side:Dt,transparent:!0,opacity:0,depthWrite:!1});function xA(n){let e=[];if(n.updateWorldMatrix(!0,!0),n.traverse(m=>{m.isMesh&&m.geometry?.getAttribute?.("position")&&e.push(m)}),!e.length)return null;let t=new I,i=new I,s=new I;if(e[0].updateWorldMatrix(!0,!1),e[0].matrixWorld.extractBasis(t,i,s),t.lengthSq()<1e-12||i.lengthSq()<1e-12||s.lengthSq()<1e-12)return null;t.normalize(),i.normalize(),s.normalize();let r=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,u=-1/0;for(let m of e){let g=m.geometry;g.boundingBox||g.computeBoundingBox();let b=g.boundingBox,M=[b.min.x,b.max.x],y=[b.min.y,b.max.y],S=[b.min.z,b.max.z];for(let T of M)for(let _ of y)for(let w of S){eh.set(T,_,w).applyMatrix4(m.matrixWorld);let D=eh.dot(t),L=eh.dot(i),z=eh.dot(s);D<r&&(r=D),L<o&&(o=L),z<a&&(a=z),D>l&&(l=D),L>c&&(c=L),z>u&&(u=z)}}let h=[(l-r)/2,(c-o)/2,(u-a)/2];if(h.some(m=>!(m>1e-6)))return null;let f=(r+l)/2,d=(o+c)/2,p=(a+u)/2;return{center:new I(t.x*f+i.x*d+s.x*p,t.y*f+i.y*d+s.y*p,t.z*f+i.z*d+s.z*p),axes:[t,i,s],half:h}}function yA(n,e){let t=new Bi(n.half[0]*2,n.half[1]*2,n.half[2]*2),i=new ft(t,gA);return i.name=e||"opening",i.matrix.makeBasis(n.axes[0],n.axes[1],n.axes[2]),i.matrix.setPosition(n.center),i.matrixAutoUpdate=!1,i.matrixWorld.copy(i.matrix),i.matrixWorldNeedsUpdate=!1,i.visible=!1,i.frustumCulled=!1,i.userData.bpHitProxy=!0,i.raycast=()=>{},i}function _A(n,e){let t=n.origin,i=n.direction,s=0,r=1/0;for(let o=0;o<3;o++){let a=e.axes[o],l=a.x*(e.center.x-t.x)+a.y*(e.center.y-t.y)+a.z*(e.center.z-t.z),c=a.x*i.x+a.y*i.y+a.z*i.z,u=e.half[o];if(Math.abs(c)>1e-8){let h=(l+u)/c,f=(l-u)/c;if(h>f){let d=h;h=f,f=d}if(h>s&&(s=h),f<r&&(r=f),s>r)return null}else if(-l-u>0||-l+u<0)return null}return r<0?null:{tEnter:s,tExit:r}}function vA(n){if(!n.length)return null;let e=n[0];for(let t of n)t.tEnter>e.tEnter&&(e=t);return e.binding}function bA(n){let e=n;for(;e;){if(e.userData?.bpDoor&&!Tr(e))return e.userData.bpDoor;e=e.parent}return null}function MA(n){return al(n.object)}function SA(n){n.proxy?.geometry?.dispose?.(),n.proxy=null,n.obb=null}function my(n){let e=Array.isArray(n.records)?n.records:[],t=n.canvas,i=n.isBlocked||(()=>!1),s=[],r=new Mi,o=new Ze,a=null,l=0,c=null;function u(){c&&clearTimeout(c),c=null}let h=Zx();h.register({id:"door",priority:100,claim(M,y){let S=bA(M.object);if(!S||S.host?.userData?.bpIfcHidden)return null;let T=y.now??performance.now(),_=ul(S,T)>fy,w=()=>pA(S,y.now??performance.now());return{onTap:w,actions:[{id:"door",labelKey:_?"ui.close":"ui.open",run:w}]}}}),h.register({id:"opening",priority:10,fallback(M,y){let S=[];for(let _ of s){if(!_.obb||_.host?.userData?.bpIfcHidden||ul(_,y.now)<=fy)continue;let w=_A(y.raycaster.ray,_.obb);w&&S.push({binding:_,tEnter:w.tEnter})}let T=vA(S);return T?mA(T,y.now):!1}});function f(M){for(let T of s)SA(T);if(s.length=0,!M||!e.length)return 0;M.updateWorldMatrix(!0,!0);let S=aA(M,e).map(T=>({host:T,center:cA(T)}));for(let T of lA(S,e)){let _=uA(T.entry.host,T.record);if(!_)continue;let w=_.kind==="drawer"?null:xA(_.host);_.obb=w,_.proxy=w?yA(w,`opening:${_.id}`):null,s.push(_)}return s.length}function d(M){let y=!1;for(let S of s){let T=!!S.anim;!T&&S.shown===S.goal||(dA(S,M),S.shown=S.anim?null:S.goal,T&&(y=!0))}return y}function p(M){if(!(M.button!==void 0&&M.button!==0)){if(l+=1,l>1){a=null;return}a={id:M.pointerId,x:M.clientX,y:M.clientY,moved:0,pointers:1,modifiers:M.altKey||M.ctrlKey||M.metaKey||M.shiftKey,consumed:!1},u(),c=setTimeout(()=>{c=null,!(!a||a.consumed||Qu({dt:500,dx:a.moved,dy:0,pointers:l,button:0,blocked:i(),modifiers:a.modifiers,released:!1})!=="longpress")&&(a.consumed=!0,n.onLongPress?.({clientX:a.x,clientY:a.y,pointerId:a.id}))},500)}}function x(M){if(!a||M.pointerId!==a.id)return;let y=Math.hypot(M.clientX-a.x,M.clientY-a.y);y>a.moved&&(a.moved=y),a.moved>th&&u()}function m(M){if(l=Math.max(0,l-1),u(),!a||M.pointerId!==a.id)return;let y=a;if(a=null,y.consumed)return;let S=Math.max(y.moved,Math.hypot(M.clientX-y.x,M.clientY-y.y));sA({dx:S,dy:0,pointers:l>0?2:1,button:M.button,blocked:i(),modifiers:M.altKey||M.ctrlKey||M.metaKey||M.shiftKey})==="tap"&&b(M)}function g(){l=Math.max(0,l-1),a=null}function b(M){let y=n.getCamera();if(!y||!s.length)return;let S=t.getBoundingClientRect(),T=S.width||t.clientWidth||1,_=S.height||t.clientHeight||1;o.x=(M.clientX-S.left)/T*2-1,o.y=-((M.clientY-S.top)/_)*2+1,r.setFromCamera(o,y);let D=s[0]?.pivot?.parent;for(;D?.parent;)D=D.parent;if(!D)return;let L=r.intersectObject(D,!0);h.dispatch(L,{raycaster:r,now:performance.now()},MA)}return t.addEventListener("pointerdown",p,!0),t.addEventListener("pointermove",x,!0),t.addEventListener("pointerup",m,!0),t.addEventListener("pointercancel",g,!0),t.addEventListener("contextmenu",M=>M.preventDefault()),{bind:f,step:d,bindings:s,taps:h}}var EA=[{type:"IfcLightFixture",id:"light",priority:60,labelKey:(n,e)=>e.isOn?.(n)?"ui.turnOff":"ui.turnOn",run:(n,e,t,i)=>i.onLight?.(n,e,t)},{type:"IfcSwitchingDevice",id:"switch",priority:70,labelKey:()=>"ui.press",run:(n,e,t,i)=>i.onSwitch?.(n,e,t),actions:(n,e,t,i)=>i.switchActions?.(n,e,t)},{type:"IfcActuator",id:"cover",priority:55,liveOnly:!0,labelKey:(n,e)=>e.isOpen?.(n)?"ui.close":"ui.open",run:(n,e,t,i)=>i.onCover?.(n,e,t),actions:(n,e,t,i)=>i.coverActions?.(n,e,t)},{type:"IfcWindow",id:"window",priority:50,labelKey:(n,e)=>e.isOpen?.(n)?"ui.close":"ui.open",run:(n,e,t,i)=>i.onWindow?.(n,e,t)}];function gy(n,e){for(let t of EA)n.register({id:t.id,priority:t.priority,claim(i,s){let r=e.elementOf?.(i.object);if(!r||r.type!==t.type||t.liveOnly&&!e.isLive?.(r))return null;let o=()=>t.run(r,i,s,e),a=t.actions?.(r,i,s,e);return{onTap:o,actions:Array.isArray(a)&&a.length?a:[{id:t.id,labelKey:t.labelKey(r,e),run:o}]}}})}var wA="https://home-test.tail9f879b.ts.net",yy="blueprints.homeMode",TA=new Set(["IfcLightFixture","IfcSwitchingDevice","IfcSensor","IfcActuator"]),xy=[2e3,5e3,15e3,3e4,6e4],AA=5e3;function _y(n){for(let e of Object.values(n?.elements||{}))if(e&&TA.has(e.type||""))return!0;return!1}function vy(n={}){let e;try{e=new URLSearchParams(n.search||"")}catch{e=new URLSearchParams}let t="live",i=null;try{i=n.storage?.getItem(yy)??null}catch{i=null}(i==="off"||i==="live")&&(t=i);let s=(e.get("home")||"").trim().toLowerCase();(s==="off"||s==="live")&&(t=s);let r=wA,o=(e.get("homeUrl")||"").trim();if(o)try{let a=new URL(o);(a.protocol==="https:"||a.protocol==="http:")&&(r=a.href.replace(/\/+$/,""))}catch{}return{mode:t,baseUrl:r}}function by(n,e){try{n?.setItem(yy,e)}catch{}}function RA(n){let e=new URL(n.replace(/\/+$/,"")+"/events");return e.protocol=e.protocol==="http:"?"ws:":"wss:",e.href}function CA(n,e,t=""){return`${n.replace(/\/+$/,"")}/devices/${encodeURIComponent(e)}${t}`}function PA(n,e){return`${n.replace(/\/+$/,"")}/simulate/devices/${encodeURIComponent(e)}/press`}function IA(n){let e=Math.min(Math.max(n,1e3),4e4)/100,t,i,s;e<=66?(t=255,i=99.4708025861*Math.log(e)-161.1195681661,s=e<=19?0:138.5177312231*Math.log(e-10)-305.0447927307):(t=329.698727446*Math.pow(e-60,-.1332047592),i=288.1221695283*Math.pow(e-60,-.0755148492),s=255);let r=o=>Math.round(Math.min(Math.max(o,0),255));return r(t)<<16|r(i)<<8|r(s)}function gp(n){let e=n?.state||{},t=!!(n?.online&&e.onOff?.onOff===!0),i=e.levelControl?.currentLevel,s=Number.isFinite(i)?Math.min(Math.max(i/254,0),1):1,r=e.colorControl?.colorTemperatureMireds,o=Number.isFinite(r)&&r>0?Math.round(1e6/r):null,a=o?IA(o):16773570;return{on:t,level:s,kelvin:o,color:a}}function xp(n){return n?.objectType==="DoublePushButton"?["rocker-1","rocker-2"]:["rocker"]}function My(n,e){let t=xp(n);return{rocker:t.length>1?t[e.side<0?0:1]:t[0],position:e.dy>=0?"up":"down",kind:"short"}}function Sy(n,e){if(!n)return[];let t=[];n.online||t.push(e("home.deviceOffline"));let i=n.state||{};switch(n.deviceType){case"ColorTemperatureLight":{let s=i.onOff?.onOff;t.push(s==null?e("home.unknown"):e(s?"home.on":"home.off"));let r=gp({...n,online:!0});Number.isFinite(i.levelControl?.currentLevel)&&t.push(`${e("home.level")} ${Math.round(r.level*100)} %`),r.kelvin&&t.push(`${r.kelvin} K`);let o=i.derived?.channels;o&&t.push(`${e("home.warm")} ${Math.round(o.warm)} % \xB7 ${e("home.cool")} ${Math.round(o.cool)} %`);break}case"GenericSwitch":{let s=i.switch?.lastEvent;s?t.push(`${e("home.lastEvent")}: ${s.rocker} ${s.position} ${s.event}`):t.push(e("home.noEvents"));break}case"ContactSensor":{let s=i.booleanState?.stateValue;t.push(s==null?e("home.unknown"):e(s?"home.contactClosed":"home.contactOpen"));break}case"OccupancySensor":{let s=i.occupancySensing?.occupancy;t.push(s==null?e("home.unknown"):s.occupied?e("home.occupied"):e("home.vacant"));break}case"WindowCovering":{let s=i.windowCovering?.currentPositionLiftPercent100ths;t.push(s==null?e("home.unknown"):`${e("home.closedPct")} ${Math.round(s/100)} %`);break}default:break}return t}function Ey(n){let e=n.fetchImpl||globalThis.fetch?.bind(globalThis),t=n.WebSocketImpl||globalThis.WebSocket,i=n.setTimer||((y,S)=>setTimeout(y,S)),s=n.clearTimer||(y=>clearTimeout(y)),r=new Map,o="off",a=!1,l=!1,c=0,u=0,h=null,f=null;function d(y,S){if(!(o===y&&!S)){o=y;try{n.onStatus?.(y,S)}catch(T){console.error("home onStatus",T)}}}function p(y,...S){try{y?.(...S)}catch(T){console.error("home handler",T)}}function x(y){if(!l||y!==u)return;let S=xy[Math.min(c,xy.length-1)];c+=1,f=i(()=>{f=null,l&&y===u&&b(y)},S)}function m(y){if(!y||typeof y.globalId!="string")return;let S=r.get(y.globalId);r.set(y.globalId,y),p(n.onDevice,y,S)}function g(y){let S;try{S=JSON.parse(typeof y=="string"?y:String(y))}catch{return}if(!(!S||typeof S!="object"))if(S.type==="snapshot"&&Array.isArray(S.devices)){c=0;for(let T of S.devices)m(T);d("live"),p(n.onSnapshot,S.devices)}else S.type==="state"&&S.device?m(S.device):S.type==="switch"&&S.event&&p(n.onSwitch,S.event)}async function b(y){if(!e||!t){d("unreachable","no fetch/WebSocket");return}d(o==="live"?"connecting":o==="unreachable"?"unreachable":"connecting");let S=null;try{let _=typeof AbortController=="function"?new AbortController:null,w=i(()=>_?.abort(),AA);try{let D=await e(`${n.baseUrl.replace(/\/+$/,"")}/health`,{signal:_?.signal,cache:"no-store"});D.ok&&(S=await D.json())}finally{s(w)}}catch{S=null}if(!l||y!==u)return;if(!S||S.status!=="ok"){d("unreachable"),x(y);return}a=!!S.simulation;let T;try{T=new t(RA(n.baseUrl))}catch{d("unreachable"),x(y);return}h=T,T.onmessage=_=>{y===u&&g(_.data)},T.onclose=()=>{h===T&&(h=null),!(!l||y!==u)&&(d(o==="live"?"connecting":"unreachable"),x(y))},T.onerror=()=>{}}async function M(y,S){if(!e||o!=="live")return{ok:!1,status:0};try{let T=await e(y,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(S)}),_="";if(!T.ok)try{let w=await T.json();_=w?.error?.message||w?.error?.code||""}catch{}return{ok:T.ok,status:T.status,error:_}}catch(T){return{ok:!1,status:0,error:String(T?.message||T)}}}return{start(){l||(l=!0,c=0,u+=1,b(u))},stop(){l=!1,u+=1,f!=null&&s(f),f=null;let y=h;h=null;try{y?.close()}catch{}r.clear(),a=!1,d("off")},status:()=>o,isLive:()=>o==="live",simulation:()=>a,device:y=>o==="live"?r.get(y):void 0,lastKnown:y=>r.get(y),devices:()=>[...r.values()],command:(y,S)=>M(CA(n.baseUrl,y,"/commands"),S),press:(y,S)=>M(PA(n.baseUrl,y),S)}}function wy(n){let e=n&&n.elements&&typeof n.elements=="object"?n.elements:{},t=Array.isArray(n?.roots)?n.roots.filter(i=>e[i]):[];return{elements:e,roots:t}}function nh(n,e){let t=[];for(let i of Object.values(n.elements)){if(!i)continue;let s=i.parentId||null;(s===e||!s&&i.containerId===e)&&t.push(i)}return t.sort((i,s)=>{let r=(i.order??0)-(s.order??0);return r||String(i.name||"").localeCompare(String(s.name||""))}),t.map(i=>i.globalId)}function yp(n,e){let t=[],i=new Set,s=e||null;for(;s&&n.elements[s]&&!i.has(s);){i.add(s),t.push(s);let r=n.elements[s];s=r.parentId||r.containerId||null}return t.reverse(),t}function _p(n,e){return yp(n,e).slice(0,-1)}function vp(n,e){let t=[],i=new Set,s=(r,o)=>{if(!(!r||i.has(r)||!n.elements[r])&&(i.add(r),t.push({id:r,depth:o}),!!e.has(r)))for(let a of nh(n,r))s(a,o+1)};for(let r of n.roots)s(r,0);return t}function Ty(n){return Math.min(Math.max(0,n),4)*12}function Ay(n,e,t,i,s=44,r=4){if(i<=0)return{start:0,end:0};let o=n-t,a=Math.max(0,Math.floor(o/s)-r),l=Math.min(i,Math.ceil((o+e)/s)+r);return{start:a,end:Math.max(a,l)}}function Ar(n,e){let t=[],i=[e],s=new Set;for(;i.length;){let r=i.pop();if(!(!r||s.has(r)||!n.elements[r])){s.add(r),t.push(r);for(let o of nh(n,r))i.push(o)}}return t}function Ry(n,e){let t=null,i=null,s=new Set,r=n.elements[e]?.containerId||n.elements[e]?.parentId||null;for(;r&&n.elements[r]&&!s.has(r);){s.add(r);let o=n.elements[r];o.type==="IfcSpace"&&!i&&(i=o),o.type==="IfcBuildingStorey"&&!t&&(t=o),r=o.containerId||o.parentId||null}return{storey:t,space:i}}function Cy(n){if(!n)return[];let e=[];n.description&&e.push(String(n.description)),n.role&&e.push(`Role: ${n.role}`),n.objectType&&n.objectType!==n.role&&e.push(`Object type: ${n.objectType}`),n.predefinedType&&n.predefinedType!==n.role&&e.push(`Predefined type: ${n.predefinedType}`),n.tag&&e.push(`Tag: ${n.tag}`);for(let t of n.circuits||[])e.push(`Circuit: ${t}`);for(let t of n.cables||[])e.push(`Cable: ${t}`);for(let t of n.propertySets||[]){let i=Object.entries(t.properties||{}).filter(([s])=>s!=="id");if(i.length){e.push(String(t.name||"Pset"));for(let[s,r]of i)e.push(`${s}: ${Py(r)}`)}}return e}function Py(n){if(typeof n=="number"){if(!Number.isFinite(n))return"";let e=Math.round(n*1e3)/1e3;return String(e)}return typeof n=="boolean"?n?"true":"false":n==null?"":String(n)}function Iy(n,e){return n&&n===e?"frame":"pulse"}function Ly(n){return n?(n.dimensions||[]).filter(e=>e&&e.value!=null&&e.value!=="").map(e=>`${e.name}: ${Py(e.value)}`):[]}var LA=`<svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" focusable="false">
  <path fill="currentColor" d="M2.5 4.2h8.2v1.35H2.5V4.2zm0 5.1h8.2v1.35H2.5V9.3zm0 5.15h8.2V15.8H2.5v-1.35z"/>
  <path fill="currentColor" d="M13.2 6.15l3.15 3.15-3.15 3.15-1.05-1.05 1.35-1.35H11.2V8.55h2.3L12.15 7.2l1.05-1.05z"/>
</svg>`;function Dy(n){let e=document.getElementById("sheet-scroll");if(!e)return{reveal(){},open(){},closePopover(){},refresh(){}};let t=document.createElement("div");for(t.id="sheet-main";e.firstChild;)t.append(e.firstChild);let i=document.createElement("button");i.type="button",i.className="ifc-entry",i.dataset.noSheetDrag="true";let s=document.createElement("span");s.dataset.i18n="ui.inspector",s.textContent=n.t("ui.inspector");let r=document.createElement("span");r.className="ifc-entry-chevron",r.setAttribute("aria-hidden","true"),r.textContent="\u203A",i.append(s,r),t.append(i);let o=document.createElement("div");o.id="sheet-inspector",o.hidden=!0,o.dataset.noSheetDrag="true";let a=document.createElement("div");a.className="ifc-toolbar";let l=document.createElement("button");l.type="button",l.className="ifc-back",l.dataset.noSheetDrag="true";let c=document.createElement("button");c.type="button",c.className="ifc-show-all",c.hidden=!0,c.dataset.noSheetDrag="true",a.append(l,c);let u=document.createElement("div");u.className="ifc-crumbs",u.dataset.noSheetDrag="true";let h=document.createElement("div");h.className="ifc-list";let f=document.createElement("div");f.className="ifc-list-spacer";let d=document.createElement("div");d.className="ifc-list-window",h.append(f,d);let p=document.createElement("div");p.className="ifc-head",p.append(a,u),o.append(p,h),e.append(t,o);let x=document.createElement("div");x.id="ifc-popover",x.hidden=!0,x.className="ifc-popover",document.body.append(x);let m=document.createElement("div");m.id="ifc-row-menu",m.hidden=!0,m.className="ifc-menu",document.body.append(m);let g=new Set,b=null,M=null,y=0;function S(){o.hidden=!0,t.hidden=!1,ce()}function T(){t.hidden=!0,o.hidden=!1,L(),requestAnimationFrame(()=>L())}function _(){n.openSheet(),T(),e.scrollTop=0}i.addEventListener("click",()=>_()),l.addEventListener("click",()=>{S(),e.scrollTop=0}),c.addEventListener("click",()=>{n.visibility.showAll(),n.onVisibility(),L()});function w(ue){let Me=n.index.elements[ue];return Me&&(Me.name||Me.id||Me.type)||ue}function D(){u.replaceChildren();let ue=b?yp(n.index,b):[];if(!ue.length){u.hidden=!0;return}u.hidden=!1,ue.forEach((Me,Be)=>{if(Be){let qe=document.createElement("span");qe.className="ifc-crumb-sep",qe.textContent="\u203A",u.append(qe)}let Ne=document.createElement("button");Ne.type="button",Ne.className="ifc-crumb",Ne.textContent=w(Me),Ne.addEventListener("click",()=>{b=Me;for(let qe of _p(n.index,Me))g.add(qe);L(),V(Me)}),u.append(Ne)})}function L(){l.textContent=`\u2039 ${n.t("ui.menu")}`,c.textContent=n.t("ui.showAll"),c.hidden=!n.visibility.anyHidden(),s.textContent=n.t("ui.inspector"),D(),k()}function z(){let ue=e.getBoundingClientRect();return h.getBoundingClientRect().top-ue.top+e.scrollTop}function W(){let ue=e.getBoundingClientRect();return p.getBoundingClientRect().bottom-ue.top+6}function k(){let ue=vp(n.index,g);f.style.height=`${ue.length*44}px`;let Me=Ay(e.scrollTop,e.clientHeight||320,z(),ue.length,44);d.replaceChildren(),d.style.transform=`translateY(${Me.start*44}px)`;for(let Be=Me.start;Be<Me.end;Be++)d.append(N(ue[Be]))}function N(ue){let Me=n.index.elements[ue.id],Be=nh(n.index,ue.id),Ne=document.createElement("div");if(Ne.className="ifc-row",Ne.dataset.id=ue.id,Ne.style.paddingLeft=`${Ty(ue.depth)+8}px`,Ne.style.height=`${44}px`,(ue.id===M||ue.id===b)&&Ne.classList.add("is-target"),n.visibility.isHidden(ue.id)&&Ne.classList.add("is-hidden"),Be.length){let re=document.createElement("button");re.type="button",re.className="ifc-disclosure";let He=g.has(ue.id);re.textContent=He?"\u25BE":"\u203A",re.setAttribute("aria-expanded",He?"true":"false"),re.setAttribute("aria-label",He?n.t("ui.collapse"):n.t("ui.expand")),re.addEventListener("click",Oe=>{Oe.stopPropagation(),g.has(ue.id)?g.delete(ue.id):g.add(ue.id),L()}),Ne.append(re)}else{let re=document.createElement("span");re.className="ifc-disclosure-spacer",Ne.append(re)}let qe=document.createElement("span");qe.className="ifc-row-text";let Je=document.createElement("span");Je.className="ifc-row-name",Je.textContent=w(ue.id);let at=document.createElement("span");return at.className="ifc-row-meta",at.textContent=Me?.type||"",qe.append(Je,at),Ne.append(qe),_e(Ne,ue.id),Ne}let G=0;function j(ue){let Me=performance.now();if(Me-G<40)return;G=Me;let Be=Iy(b,ue);b=ue,n.onFrame(ue,{move:Be==="frame"}),Z(ue),D()}function q(ue){return ue instanceof Element&&!!ue.closest(".ifc-disclosure")}function _e(ue,Me){let Be=null,Ne=0,qe=()=>{Ne&&window.clearTimeout(Ne),Ne=0},Je=(He,Oe,me)=>{q(me)||(qe(),Be={x:He,y:Oe,moved:0,consumed:!1},Ne=window.setTimeout(()=>{Ne=0,!(!Be||Be.consumed||Qu({dt:500,dx:Be.moved,dy:0,released:!1})!=="longpress")&&(Be.consumed=!0,be(Me,Be.x,Be.y))},500))},at=(He,Oe)=>{if(!Be)return;let me=Math.hypot(He-Be.x,Oe-Be.y);me>Be.moved&&(Be.moved=me),Be.moved>12&&qe()},re=(He,Oe,me)=>{qe();let A=Be;Be=null,!(!A||A.consumed||q(me)||Math.max(A.moved,Math.hypot(He-A.x,Oe-A.y))>12)&&j(Me)};ue.addEventListener("pointerdown",He=>{He.button!==void 0&&He.button!==0||Je(He.clientX,He.clientY,He.target)}),ue.addEventListener("pointermove",He=>at(He.clientX,He.clientY)),ue.addEventListener("pointerup",He=>{He.pointerType!=="touch"&&re(He.clientX,He.clientY,He.target)}),ue.addEventListener("pointercancel",()=>qe()),ue.addEventListener("touchend",He=>{let Oe=He.changedTouches[0];Oe&&re(Oe.clientX,Oe.clientY,He.target)},{passive:!0})}function Z(ue){M=ue,y&&window.clearTimeout(y),y=window.setTimeout(()=>{M===ue&&(M=null),k()},1600),k()}function V(ue){let Be=vp(n.index,g).findIndex(qe=>qe.id===ue);if(Be<0)return;let Ne=z()+Be*44;e.scrollTop=Math.max(0,Ne-W()),k()}let ee=!1;function be(ue,Me,Be){B(),m.replaceChildren(),m.hidden=!1,ee=!1;let Ne=n.visibility.isHidden(ue);K(Ne?"ui.unhideThis":"ui.hideThis",()=>{Ne?n.visibility.unhide(ue):n.visibility.hide(ue),Re()}),K("ui.hideOthers",()=>{n.visibility.hideOthers(ue),Re()}),K("ui.unhideOthers",()=>{n.visibility.unhideOthers(ue),Re()}),ne(m,Me,Be)}function Re(){n.onVisibility(),ce(),L()}function K(ue,Me){let Be=document.createElement("button");Be.type="button",Be.className="ifc-menu-btn",Be.textContent=n.t(ue);let Ne=!1,qe=Je=>{Je.preventDefault(),Je.stopPropagation(),!Ne&&(Ne=!0,Me())};Be.addEventListener("touchend",qe),Be.addEventListener("click",qe),m.append(Be)}function ce(){m.hidden=!0,m.replaceChildren()}function B(){x.hidden=!0,x.replaceChildren()}function ne(ue,Me,Be){ue.hidden=!1,ue.style.left="0px",ue.style.top="0px";let Ne=ue.getBoundingClientRect(),qe=8,Je=Math.max(qe,window.innerWidth-Ne.width-qe),at=Math.min(Math.max(qe,Me),Je),re=Be+8;re+Ne.height>window.innerHeight-qe&&(re=Math.max(qe,Be-Ne.height-8)),ue.style.left=`${at}px`,ue.style.top=`${re}px`}function ge(ue,Me,Be,Ne,qe){if(ce(),x.replaceChildren(),x.hidden=!1,!ue)we(n.t("ui.noIfc"),Me||"");else{let Je=document.createElement("div");Je.className="ifc-pop-id";let at=document.createElement("button");at.type="button",at.className="ifc-pop-title";let re=document.createElement("div");re.className="ifc-kicker";let He=document.createElement("div");He.className="ifc-name";let Oe=ue.name||ue.id||"",me=ue.globalId||"",A=!1,J=0,te=()=>{re.hidden=!A,re.textContent=A?n.t("ui.globalId"):"",He.textContent=A?me:Oe,He.className=A?"ifc-gid":"ifc-name",at.setAttribute("aria-label",A?Oe:n.t("ui.globalId"))},Ae=E=>{E.preventDefault(),E.stopPropagation();let X=performance.now();X-J<80||(J=X,A=!A,te())};te(),at.append(re,He),at.addEventListener("touchend",Ae),at.addEventListener("click",Ae);let $=document.createElement("button");$.type="button",$.className="ifc-reveal",$.innerHTML=LA,$.setAttribute("aria-label",n.t("ui.reveal")),$.title=n.t("ui.reveal"),$.addEventListener("click",E=>{E.stopPropagation(),B(),Fe(ue.globalId)}),Je.append(at,$),x.append(Je),we(n.t("ui.type"),ue.type||"");let pe=Ry(n.index,ue.globalId);pe.storey&&we(n.t("ui.storey"),pe.storey.name||pe.storey.id),pe.space&&we(n.t("ui.space"),pe.space.name||pe.space.id);let ve=Ly(ue);ve.length&&Ye(n.t("ui.dimensions"),ve);let Ee=Cy(ue);Ee.length&&Ye(n.t("ui.note"),Ee);let C=n.liveLines?.(ue)||[];C.length&&Ye(n.t("home.live"),C)}if(Be.length){let Je=document.createElement("div");Je.className="ifc-actions";for(let at of Be){let re=document.createElement("button");re.type="button",re.className="ifc-action",re.textContent=at.label||n.t(at.labelKey),re.addEventListener("click",He=>{He.stopPropagation(),at.run(),n.onVisibility()}),Je.append(re)}x.append(Je)}ne(x,Ne,qe)}function we(ue,Me){let Be=document.createElement("div");Be.className="ifc-line";let Ne=document.createElement("div");Ne.className="ifc-kicker",Ne.textContent=ue;let qe=document.createElement("div");qe.className="ifc-value",qe.textContent=Me,Be.append(Ne,qe),x.append(Be)}function Ye(ue,Me){let Be=document.createElement("div");Be.className="ifc-line";let Ne=document.createElement("div");Ne.className="ifc-kicker",Ne.textContent=ue;let qe=document.createElement("div");qe.className="ifc-note",qe.textContent=Me.join(`
`),Be.append(Ne,qe),x.append(Be)}function Fe(ue){if(n.index.elements[ue]){for(let Me of _p(n.index,ue))g.add(Me);b=ue,M=ue,n.openSheet(),T(),L(),requestAnimationFrame(()=>V(ue))}}e.addEventListener("scroll",()=>{o.hidden||k()},{passive:!0});let Xe=ue=>ue instanceof Node?!(!x.hidden&&x.contains(ue)||!m.hidden&&m.contains(ue)):!0;return document.addEventListener("pointerup",()=>{m.hidden||(ee=!0)},!0),document.addEventListener("pointerdown",ue=>{let Me=ue.target;!x.hidden&&Xe(Me)&&B(),!m.hidden&&ee&&Xe(Me)&&ce()},!0),{open:_,refresh:L,closePopover:B,openPopover:ge,reveal:Fe,isInspectorOpen:()=>!o.hidden}}function Ny(n){let e=new Set;function t(){return Object.keys(n.elements)}return{isHidden(i){return e.has(i)},anyHidden(){return e.size>0},hiddenIds(){return[...e]},hide(i){for(let s of Ar(n,i))e.add(s)},unhide(i){for(let s of Ar(n,i))e.delete(s)},hideOthers(i){let s=new Set(Ar(n,i));for(let r of t())s.has(r)||e.add(r)},unhideOthers(i){let s=new Set(Ar(n,i));for(let r of t())s.has(r)||e.delete(r)},showAll(){e.clear()}}}var wp=.3,By=1.5,DA=.5,bp=new Ze,NA=new I,ah=new I,Mp=new I,ih=new I,sh=new I,Fo=new I,rh=new I,Sp=new $t,Oy=new $t,oh=new $t,Uy=new $t,Ep=new Ws,OA=new I(0,1,0),Fy=new Mi;function UA(n,e,t=wp,i=By){let s=Number.isFinite(e)&&e>0?e:0,r=Number.isFinite(n)&&n>0?n:null;return r!=null&&r>=t?r:r!=null?Math.max(i,t):s>=t?s:Math.max(i,t)}function FA(n,e,t=wp,i=By){return Number.isFinite(n)&&n>.001?n:e>=t?null:Math.max(i,t)}function BA(n,e,t=wp,i=DA){return Number.isFinite(n)&&n>0?!(e>0)||e<t?!0:n<e*i:!1}function zA(n,e,t,i=1){let s=2*Math.PI*i/Math.max(1,t);return{theta:-n*s,phi:-e*s}}function kA(n,e,t,i,s){if(!i&&!s||(sh.copy(n.position).sub(t),sh.lengthSq()<1e-12))return!1;Fo.copy(n.up),Fo.lengthSq()<1e-12?Fo.set(0,1,0):Fo.normalize(),Uy.setFromUnitVectors(Fo,OA),ih.copy(sh).applyQuaternion(Uy),Ep.setFromVector3(ih);let r=1e-6;return s=Math.min(Math.PI-r,Math.max(r,Ep.phi+s))-Ep.phi,Sp.setFromAxisAngle(Fo,i),rh.set(1,0,0).applyQuaternion(n.quaternion).applyQuaternion(Sp),rh.lengthSq()<1e-12?!1:(rh.normalize(),Oy.setFromAxisAngle(rh,s),oh.copy(Oy).multiply(Sp),ih.copy(sh).applyQuaternion(oh),n.position.copy(t).add(ih),e.sub(t).applyQuaternion(oh).add(t),n.quaternion.premultiply(oh),!0)}function HA(n,e,t){return!(t>0)||(n.getWorldDirection(ah),Mp.copy(n.position).addScaledVector(ah,t),Mp.distanceToSquared(e)<1e-12)?!1:(e.copy(Mp),!0)}function VA(n,e){let t=n.material,i=Array.isArray(t)?t:[t];for(let s of i){let r=s&&s.clippingPlanes;if(r){for(let o of r)if(o.distanceToPoint(e)<-1e-4)return!1}}return!0}function GA(n,e,t,i,s){if(!e||!t||e.isOrthographicCamera)return null;let r=n.getBoundingClientRect(),o=r.width||n.clientWidth||1,a=r.height||n.clientHeight||1;bp.x=(i-r.left)/o*2-1,bp.y=-((s-r.top)/a)*2+1,t.updateWorldMatrix(!0,!0),Fy.setFromCamera(bp,e);let l=Fy.intersectObject(t,!0);e.getWorldDirection(ah);for(let c of l){let u=c.object;if(!u.visible||Tr(u))continue;let h=u.userData;if(h&&(h.isEdgeOverlay||h.isSectionCap||h.isPeeledEdgeBatch)||!VA(u,c.point))continue;let f=c.distance;if(!(f>1e-4))continue;let d=NA.copy(c.point).sub(e.position).dot(ah);if(d>1e-4)return{point:c.point.clone(),slant:f,depth:d}}return null}function WA(n){let{canvas:e,controls:t}=n,i=n.isBlocked||(()=>!1),s=new Map,r=null;function o(){return t.enabled!==!1&&!i()}function a(){let y=n.getCamera();return!!(y&&y.isPerspectiveCamera)}function l(y,S){return GA(e,n.getCamera(),n.getRoot(),y,S)}function c(y){let S=n.getCamera();!S||!a()||y==null||HA(S,t.target,y)}function u(y,S){let T=n.getCamera();if(!T||!a())return;let _=l(y,S),w=T.position.distanceTo(t.target);c(UA(_?_.slant:null,w))}function h(y,S){let T=n.getCamera();if(!T||!a())return;let _=l(y,S),w=T.position.distanceTo(t.target);c(FA(_?_.depth:null,w))}function f(){r=null,t.enableRotate=!0}function d(y){if(s.set(y.pointerId,{x:y.clientX,y:y.clientY}),!o()){f(),t.zoomToCursor=!1;return}if(!a()){f(),t.zoomToCursor=!1;return}if(s.size>=2){f(),t.zoomToCursor=!0;let L=p(y);u(L.x,L.y);return}let S=y.pointerType==="touch",T=y.button??0;if(!S&&T===2){f(),h(y.clientX,y.clientY);return}if(!S&&T===1){f(),u(y.clientX,y.clientY);return}if(!S&&T!==0)return;if(!S&&(y.shiftKey||y.ctrlKey||y.metaKey)){f(),h(y.clientX,y.clientY);return}let _=n.getCamera(),w=l(y.clientX,y.clientY),D=_?_.position.distanceTo(t.target):0;if(!w||!BA(w.slant,D)){f();return}t.enableRotate=!1,r={id:y.pointerId,x:y.clientX,y:y.clientY,lastX:y.clientX,lastY:y.clientY,point:w.point.clone(),dragging:!1},t.dispatchEvent({type:"start"})}function p(y){let S=y.clientX,T=y.clientY,_=1;for(let[w,D]of s)w!==y.pointerId&&(S+=D.x,T+=D.y,_+=1);return{x:S/_,y:T/_}}function x(y){let S=s.get(y.pointerId);if(S&&(S.x=y.clientX,S.y=y.clientY),!r||y.pointerId!==r.id||s.size!==1||!o())return;let T=n.getCamera();if(!T)return;let _=y.clientX-r.lastX,w=y.clientY-r.lastY;if(!r.dragging){if(Math.hypot(y.clientX-r.x,y.clientY-r.y)<=th)return;r.dragging=!0}if(!_&&!w)return;let D=zA(_,w,e.clientHeight||1,t.rotateSpeed);kA(T,t.target,r.point,D.theta,D.phi),T.lookAt(t.target),r.lastX=y.clientX,r.lastY=y.clientY}function m(y){s.delete(y.pointerId),r&&r.id===y.pointerId&&f(),s.size<2&&(t.zoomToCursor=!1),s.size===0&&(t.enableRotate=!0)}function g(y){m(y)}function b(y){if(!o()||!a()){t.zoomToCursor=!1;return}if(t.state!==-1||r&&r.dragging){t.zoomToCursor=!1;return}t.zoomToCursor=!0,u(y.clientX,y.clientY)}function M(){s.size<2&&(t.zoomToCursor=!1)}return{onPointerDown:d,onPointerMove:x,onPointerUp:m,onPointerCancel:g,onWheel:b,onWheelDone:M}}function zy(n){let e=WA(n),t={capture:!0};return n.canvas.addEventListener("pointerdown",e.onPointerDown,t),n.canvas.addEventListener("pointermove",e.onPointerMove,t),n.canvas.addEventListener("pointerup",e.onPointerUp,t),n.canvas.addEventListener("pointercancel",e.onPointerCancel,t),n.canvas.addEventListener("wheel",e.onWheel,t),n.canvas.addEventListener("wheel",e.onWheelDone),e}var Bo=class extends Ai{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,i=new Float32Array(2*t);for(let s=0;s<t;s+=3)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5];return super.setPositions(i),this}setColors(e){let t=e.length-3,i=new Float32Array(2*t);for(let s=0;s<t;s+=3)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5];return super.setColors(i),this}setFromPoints(e){let t=e.length-1,i=new Float32Array(6*t);for(let s=0;s<t;s++)i[6*s]=e[s].x,i[6*s+1]=e[s].y,i[6*s+2]=e[s].z||0,i[6*s+3]=e[s+1].x,i[6*s+4]=e[s+1].y,i[6*s+5]=e[s+1].z||0;return super.setPositions(i),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}};var lh=class extends Js{constructor(e=new Bo,t=new Xi({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}};var XA='-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',qA=420,$A=36,YA=new I,ky=new I,Hy=new I,Tp=new I,Rr=new I,Qs=new I;function Cp(n){return new I(n[0]*.001,n[2]*.001,-n[1]*.001)}function Ap(n,e){if(typeof n=="number"&&Number.isFinite(n))return n;if(typeof n!="string")return e;let t=n.trim().replace("#","");return/^[0-9a-fA-F]{6}$/.test(t)?Number.parseInt(t,16):e}function Vy(n){let e=[];if(Array.isArray(n.anchor)&&n.anchor.length>=3&&e.push(n.anchor),Array.isArray(n.tips))for(let t of n.tips)Array.isArray(t)&&t.length>=3&&e.push(t);return e.length?e:[n.anchor]}function ZA(n){let e=Math.abs(n)*1e3;return Number.isFinite(e)?Math.abs(e-Math.round(e))<.05?`${Math.round(e)} mm`:e>=100?`${e.toFixed(1)} mm`:`${e.toFixed(2)} mm`:""}function ch(n,e){return n==null?"":typeof n=="string"?n:String(n[e==="cs"?"cs":"en"]||n.en||n.cs||"")}function KA(n){if(!Number.isFinite(n)||n<=0)return"";let e=n*1e3/qA,t=Math.max(1,Math.round(e));return Number.isFinite(t)?`1:${t}`:""}function JA(n,e){if(e==="plate")return $A;let t=Math.min(Math.max(1,n.clientWidth),Math.max(1,n.clientHeight));return Math.round(Math.min(14,Math.max(12,t*.034)))}function zo(n,e,t,i="center",s=null,r=1){let o=Number.isFinite(r)&&r>0?r:1,a=Math.max(8,Math.round(t*o)),l=n.map(_=>String(_)).filter(_=>_.length),c=document.createElement("canvas"),u=c.getContext("2d"),h=`600 ${a}px ${XA}`,f=Math.ceil(a*.35),d=Math.ceil(a*.2),p=Math.ceil(a*1.25);u&&(u.font=h);let x=a;if(u)for(let _ of l)x=Math.max(x,u.measureText(_).width);let m=Math.ceil(x+f*2),g=Math.ceil(Math.max(l.length,1)*p+d*2),b=2;c.width=m*b,c.height=g*b;let M=c.getContext("2d");if(M){M.scale(b,b),M.clearRect(0,0,m,g);let _=e==="plate";M.font=h,M.textAlign="left",M.textBaseline="middle",M.lineJoin="round",M.miterLimit=2,M.lineWidth=Math.max(2,a*.28),M.strokeStyle=_?"#ffffff":"rgba(0,0,0,0.92)",M.fillStyle=s||(_?"#141414":"#f7f7f8"),l.forEach((w,D)=>{let L=f,z=d+p*D+p*.5;M.strokeText(w,L,z),M.fillText(w,L,z)})}let y=new ys(c);y.colorSpace=At,y.flipY=!0,y.needsUpdate=!0;let S=new nn({map:y,depthTest:!1,depthWrite:!1,transparent:!0,toneMapped:!1,side:Dt}),T=new ft(new ii(1,1),S);return T.renderOrder=30,T.frustumCulled=!1,T.userData.cssWidth=m,T.userData.cssHeight=g,T.userData.anchor=i,T.userData.fill=s,T.userData.fontScale=o,T}function Rp(n){return`#${(n>>>0).toString(16).padStart(6,"0")}`}function Qi(n,e=!1){let t=new Bo;t.setPositions([0,0,0,0,0,0]);let i=new Xi({color:n,linewidth:e?2.4:1.75,depthTest:!1,depthWrite:!1,transparent:!0,toneMapped:!1,worldUnits:!1,dashed:!!e,dashSize:.08,gapSize:.06,dashScale:1});e&&(i.dashed=!0);let s=new lh(t,i);return s.renderOrder=25,s.frustumCulled=!1,s.computeLineDistances(),s}function Ps(n,e,t){n.geometry.setPositions([e.x,e.y,e.z,t.x,t.y,t.z]),n.computeLineDistances()}function Gy(n){let{scene:e,getCamera:t,getCanvas:i,getLocale:s,getVisibleWidthM:r,getTarget:o}=n,a=n.getExaggeration||(()=>1),l=new kt;l.name="Annotations",l.userData.blueprintAnnotations=!0,e.add(l);let c=null,u="viewer",h=!0,f=0,d=[],p=null,x=null,m=null;function g(){return u==="plate"?1315860:15921908}function b(V){return V&&V.color!=null?Ap(V.color,g()):c&&c.annotationColor!=null?Ap(c.annotationColor,g()):g()}function M(V){return Rp(b(V))}function y(V){let ee=Number(V&&V.size);return Number.isFinite(ee)&&ee>0?ee:1}function S(V){V.traverse(ee=>{ee.geometry&&ee.geometry.dispose();let be=ee.material;be&&(be.map&&be.map.dispose(),be.dispose())})}function T(){for(let V of[...l.children])l.remove(V),S(V);d=[],p=null,x=null,m=null}function _(){return JA(i(),u)}function w(){l.visible=!!c&&h}function D(){if(T(),f=_(),!c){w();return}let V=s(),ee=g(),be=f,Re=Array.isArray(c.annotations)?c.annotations:[];for(let ne of Re)if(!(!ne||typeof ne!="object")){if(ne.kind==="callout"&&Array.isArray(ne.anchor)){let ge=ch(ne.text,V);if(!ge)continue;let we=zo(ge.split(`
`),u,be,"center",M(ne),y(ne)),Ye=(ne.leader===!1?[]:Vy(ne)).map(()=>Qi(b(ne)));l.add(...Ye,we),d.push({kind:"callout",sprite:we,lines:Ye,data:ne})}else if(ne.kind==="dim"&&Array.isArray(ne.a)&&Array.isArray(ne.b)){let ge=b(ne),we=zo(["0"],u,be,"center",Rp(ge),y(ne)),Ye=Qi(ge),Fe=Qi(ge),Xe=Qi(ge),ue=Qi(ge),Me=Qi(ge);l.add(Ye,Fe,Xe,ue,Me,we),d.push({kind:"dim",sprite:we,lines:[Ye,Fe,Xe,ue,Me],data:ne})}else if(ne.kind==="line"&&Array.isArray(ne.points)&&ne.points.length>=2){let ge=Ap(ne.color,g()),Ye=[Qi(ge,!!ne.dashed)];ne.arrow&&Ye.push(Qi(ge,!1),Qi(ge,!1));let Fe=null,Xe=ch(ne.text,V);Xe&&(Fe=zo(Xe.split(`
`),u,be,"center",Rp(ge),y(ne))),l.add(...Ye),Fe&&l.add(Fe),d.push({kind:"line",sprite:Fe,lines:Ye,data:ne})}}let K=ch(c.title,V),ce=c.project?String(c.project):"",B=[...K.split(`
`),ce].filter(Boolean);B.length&&(p=zo(B,u,be,"topleft"),l.add(p)),x=zo(["1:1"],u,be,"bottomleft"),m=Qi(ee),l.add(m,x),w()}function L(V){let ee=Cp(V),be=a();return be!==1&&(ee.y*=be),ee}function z(V,ee=YA){return ee.copy(V).project(t())}function W(V,ee,be,Re=new I){return Re.set(V,ee,be).unproject(t())}function k(V){let ee=t(),be=i(),Re=Math.max(1,be.clientHeight);if(ee.isOrthographicCamera){let B=Math.max(ee.zoom,1e-6);return(ee.top-ee.bottom)/B/Re}let K=Math.max(ee.position.distanceTo(V),1e-4),ce=(ee.fov||45)*Math.PI/180;return 2*Math.tan(ce/2)*K/Re}let N=new I,G=new I;function j(V,ee){let be=t(),Re=k(ee),K=Re*V.userData.cssWidth,ce=Re*V.userData.cssHeight;N.set(1,0,0).applyQuaternion(be.quaternion),G.set(0,1,0).applyQuaternion(be.quaternion);let B=V.userData.anchor||"center";V.position.copy(ee),B==="topleft"?(V.position.addScaledVector(N,K*.5),V.position.addScaledVector(G,-ce*.5)):B==="bottomleft"&&(V.position.addScaledVector(N,K*.5),V.position.addScaledVector(G,ce*.5)),V.quaternion.copy(be.quaternion),V.scale.set(K,ce,1)}function q(){let V=i(),ee=Math.max(1,V.width),be=Math.max(1,V.height);l.traverse(Re=>{let K=Re.material;K&&K.resolution&&K.resolution.set(ee,be)})}function _e(V,ee){let be=zo(ee,u,f||_(),V.userData.anchor,V.userData.fill,V.userData.fontScale||1);V.material.map?.dispose(),V.material.dispose(),V.material=be.material,V.userData.cssWidth=be.userData.cssWidth,V.userData.cssHeight=be.userData.cssHeight,be.geometry.dispose()}function Z(){if(!c||!h||(_()!==f&&D(),!l.visible))return;q();let ee=s();t().updateMatrixWorld();for(let B of d)if(B.kind==="callout"){let ne=L(B.data.anchor),ge=z(ne,ky),we=Array.isArray(B.data.offset)?B.data.offset:[.08,.06],Ye=ge.x+Number(we[0]||0)*2,Fe=ge.y+Number(we[1]||0)*2,Xe=W(Ye,Fe,ge.z,Hy);j(B.sprite,Xe);let ue=k(Xe),Me=ue*B.sprite.userData.cssWidth*.5,Be=Vy(B.data);for(let Ne=0;Ne<B.lines.length;Ne+=1){let qe=L(Be[Ne]||B.data.anchor);Rr.copy(Xe).sub(qe);let Je=Rr.length();Je>Me+ue?(Rr.setLength(Je-Me),Rr.add(qe)):Rr.copy(Xe),Ps(B.lines[Ne],qe,Rr)}}else if(B.kind==="dim"){let ne=L(B.data.a),ge=L(B.data.b),we=z(ne,ky),Ye=z(ge,Hy),Fe=Ye.x-we.x,Xe=Ye.y-we.y,ue=Math.hypot(Fe,Xe)||1e-6;Fe/=ue,Xe/=ue;let Me=Number(B.data.offset)||.04,Be=-Xe*Me*2,Ne=Fe*Me*2,qe=(we.z+Ye.z)*.5,Je=W(we.x+Be,we.y+Ne,qe,new I),at=W(Ye.x+Be,Ye.y+Ne,qe,new I),re=k(Je),He=re*6,Oe=re*8;Qs.copy(Je).sub(ne);let me=Qs.length()||1;Qs.multiplyScalar((me+Oe)/me);let A=ne.clone().add(Qs);Qs.copy(at).sub(ge);let J=Qs.length()||1;Qs.multiplyScalar((J+Oe)/J);let te=ge.clone().add(Qs),Ae=ne.clone().lerp(Je,Math.min(.85,He/me)),$=ge.clone().lerp(at,Math.min(.85,He/J));Ps(B.lines[0],Ae,A),Ps(B.lines[1],$,te),Ps(B.lines[2],Je,at);let pe=re*10,Ee=W(we.x+Be-Xe*.012,we.y+Ne+Fe*.012,qe,new I).sub(Je);Ee.lengthSq()<1e-16?Ee.set(0,pe,0):Ee.setLength(pe),Ps(B.lines[3],Je.clone().sub(Ee),Je.clone().add(Ee)),Ps(B.lines[4],at.clone().sub(Ee),at.clone().add(Ee)),Tp.copy(Je).lerp(at,.5);let C=W(we.x+Be-Xe*.03,we.y+Ne+Fe*.03,qe,new I).sub(W(we.x+Be,we.y+Ne,qe,new I));C.lengthSq()>1e-12&&Tp.add(C);let X=ch(B.data.text,ee)||ZA(ne.distanceTo(ge));B.sprite.userData.labelText!==X&&(_e(B.sprite,[X]),B.sprite.userData.labelText=X),j(B.sprite,Tp)}else if(B.kind==="line"){let ne=B.data.points.map(we=>L(we)),ge=[];for(let we of ne)ge.push(we.x,we.y,we.z);if(B.lines[0].geometry.setPositions(ge),B.lines[0].computeLineDistances(),B.data.arrow&&ne.length>=2&&B.lines.length>=3){let we=ne[ne.length-2],Ye=ne[ne.length-1],Fe=Ye.clone().sub(we);if(Fe.lengthSq()>1e-12){Fe.normalize();let Xe=k(Ye),ue=Fe.clone().multiplyScalar(-Xe*16),Me=new I().crossVectors(Fe,t().up).normalize().multiplyScalar(Xe*7);Me.lengthSq()<1e-16&&Me.set(Xe*7,0,0),Ps(B.lines[1],Ye,Ye.clone().add(ue).add(Me)),Ps(B.lines[2],Ye,Ye.clone().add(ue).sub(Me))}}if(B.sprite){let we=ne[0].clone().lerp(ne[ne.length-1],.5);j(B.sprite,we)}}let Re=z(o(),Rr).z;if(p){let B=W(-.94,.9,Re,new I);j(p,B)}let K=r(),ce=KA(K??NaN);if(x&&m){let B=K!=null&&K>8?2:1,ne=W(-.9,-.86,Re,new I),ge=W(-.9+.08,-.86,Re,new I).sub(ne),we=k(ne),Ye=K&&K>0?B/K*Math.max(1,i().clientWidth):80;ge.lengthSq()>1e-12?ge.setLength(Math.max(Ye*we,we*40)):ge.set(we*80,0,0),Ps(m,ne,ne.clone().add(ge));let Fe=x.userData.labelText,Xe=ce?`${ce}  \xB7  ${Math.round(B*1e3)} mm`:"";Fe!==Xe&&(_e(x,Xe?[Xe]:["\u2014"]),x.userData.labelText=Xe);let ue=W(-.9,-.8,Re,new I).sub(ne);j(x,ne.clone().add(ue))}}return{group:l,setSpec(V){c=V&&typeof V=="object"?V:null,D(),Z()},setInk(V){u=V==="plate"?"plate":"viewer",D(),Z()},setVisible(V){h=!!V,w(),l.visible&&Z()},isVisible(){return h},relocalize(){D(),Z()},glyphBoundsNdc(){let V=i(),ee=Math.max(1,V.clientWidth),be=Math.max(1,V.clientHeight),Re=1/0,K=-1/0,ce=1/0,B=-1/0,ne=!1;for(let ge of d){let we=ge.sprite;if(!we||we===p||we===x||ge.kind!=="callout"&&ge.kind!=="dim"&&ge.kind!=="line")continue;let Ye=z(we.position),Fe=(we.userData.cssWidth||0)/ee,Xe=(we.userData.cssHeight||0)/be;Re=Math.min(Re,Ye.x-Fe),K=Math.max(K,Ye.x+Fe),ce=Math.min(ce,Ye.y-Xe),B=Math.max(B,Ye.y+Xe),ne=!0}return ne?{minX:Re,maxX:K,minY:ce,maxY:B}:null},update:Z,clear(){c=null,T(),l.visible=!1}}}function Wy(n){return n/25.4*72}function Pp(n,e){let t=URL.createObjectURL(n),i=document.createElement("a");i.href=t,i.download=e,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(t),3e4)}function jA(n){let e=document.createElement("canvas");e.width=n.width,e.height=n.height;let t=e.getContext("2d");return t?(t.drawImage(n,0,0),new Promise((i,s)=>{e.toBlob(r=>{r?i(r):s(new Error("PNG capture failed"))},"image/png")})):Promise.reject(new Error("2D canvas unavailable"))}async function QA(n){let e=await createImageBitmap(n),t=document.createElement("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d",{willReadFrequently:!0});if(!i)throw new Error("2D canvas unavailable");return i.drawImage(e,0,0),e.close?.(),i.getImageData(0,0,t.width,t.height)}async function eR(n){if(typeof CompressionStream>"u")return{bytes:n,filter:""};let e=new Blob([n]).stream().pipeThrough(new CompressionStream("deflate"));return{bytes:new Uint8Array(await new Response(e).arrayBuffer()),filter:"/Filter /FlateDecode "}}function fl(n){return typeof n=="string"?new TextEncoder().encode(n):n}async function tR(n){let e=n.width,t=n.height,i=n.data,s=new Uint8Array(e*t*3);for(let y=0,S=0;y<i.length;y+=4,S+=3){let T=i[y+3]/255;s[S]=Math.round(i[y]*T+255*(1-T)),s[S+1]=Math.round(i[y+1]*T+255*(1-T)),s[S+2]=Math.round(i[y+2]*T+255*(1-T))}let{bytes:r,filter:o}=await eR(s),a=Wy(420),l=Wy(297),c=`q
${a.toFixed(3)} 0 0 ${l.toFixed(3)} 0 0 cm
/Im0 Do
Q
`,u=new TextEncoder().encode(c),h=[],f=0;function d(y){h.push(y),f+=y.length}let p=[0];function x(y,S){p[y]=f,d(fl(`${y} 0 obj
`));for(let T of S)d(fl(T));d(fl(`
endobj
`))}d(fl(`%PDF-1.4
`)),x(1,["<< /Type /Catalog /Pages 2 0 R >>"]),x(2,["<< /Type /Pages /Kids [3 0 R] /Count 1 >>"]),x(3,[`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${a.toFixed(3)} ${l.toFixed(3)}] `,"/Contents 4 0 R /Resources << /XObject << /Im0 5 0 R >> >> >>"]),x(4,[`<< /Length ${u.length} >>
stream
`,u,`
endstream`]),x(5,[`<< /Type /XObject /Subtype /Image /Width ${e} /Height ${t} `,`/ColorSpace /DeviceRGB /BitsPerComponent 8 ${o}/Length ${r.length} >>
stream
`,r,`
endstream`]);let m=f,g=`xref
0 6
0000000000 65535 f 
`;for(let y=1;y<=5;y++)g+=`${String(p[y]).padStart(10,"0")} 00000 n 
`;g+=`trailer
<< /Size 6 /Root 1 0 R >>
startxref
${m}
%%EOF
`,d(fl(g));let b=new Uint8Array(f),M=0;for(let y of h)b.set(y,M),M+=y.length;return new Blob([b],{type:"application/pdf"})}async function Xy(n){let e=await jA(n),t=await QA(e),i=await tR(t);return{png:e,pdf:i}}var Ip="scene";function rR(){try{return(new URLSearchParams(location.search).get(Ip)||"").trim()}catch{return""}}function $y(n){try{let e=new URL(location.href),t=n!=null?String(n).trim():"";t?e.searchParams.set(Ip,t):e.searchParams.delete(Ip);let i=`${e.pathname}${e.search}${e.hash}`,s=`${location.pathname}${location.search}${location.hash}`;i!==s&&history.replaceState(null,"",i)}catch{}}function oR(n,e,t={}){let i=Array.isArray(t.scenes)?t.scenes:[],s=Array.isArray(t.partGroups)?t.partGroups:[],r=Array.isArray(t.doors)?t.doors:[],o=wy(t.ifc),a=new Map,l=()=>{},c=String(t.scene!=null?t.scene:rR()).trim();Yx(),up(document);let u=[],h=null,f=1842206,d=!0,p=Tx(),x=sx(),m=new Map,g=new Map,b=new Map,M=new Map,y=new Set,S=new Map,T=new Map,_=new Map,w=new Set,D=null;D=Wx(v=>{d=v,f=v?1842206:15263981,h&&(h.background=new Ke(f)),document.documentElement.style.colorScheme=v?"dark":"light",m.size&&Ho()});let L=new Eu({canvas:n,antialias:!0,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0,logarithmicDepthBuffer:!0});L.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),L.outputColorSpace=At,L.toneMapping=Mo,L.toneMappingExposure=1.05,L.localClippingEnabled=!0;let z=yx(L);h=new kn,h.background=new Ke(f);let W=1,k=new kt;k.name="VerticalExaggeration",h.add(k);function N(v){let P=Number(v);W=Number.isFinite(P)&&P>0?P:1,k.scale.set(1,W,1)}let G=30,j=120,q=75,_e=125,Z="perspective",V=q,ee=q,be=1,Re=!1,K=new on(45,1,.01,1e6),ce=new bi(-1,1,1,-1,.01,1e6),B=K,ne=new Iu(B,n);ne.enableDamping=!1,ne.screenSpacePanning=!0;let ge=()=>!1,we=my({canvas:n,getCamera:()=>B,records:r,isBlocked:()=>ge(),onLongPress:v=>l(v)}),Ye=new Map,Fe=new Map,Xe={on:!0,level:1,color:16773570,solid:16774079},ue=new Map,Me=null,Be=v=>v&&Me?Me.device(v.globalId):void 0;gy(we.taps,{elementOf:v=>Vp(v),isOn:v=>!!Ye.get(v.globalId),isOpen:v=>{let P=Be(v);if(P?.deviceType==="WindowCovering"){let O=P.state?.windowCovering?.targetPositionLiftPercent100ths;return O!=null&&O<5e3}return!!Fe.get(v.globalId)},isLive:v=>!!Be(v),onLight:v=>p_(v),onSwitch:(v,P)=>g_(v,P),switchActions:v=>x_(v),onCover:v=>y_(v),coverActions:v=>__(v),onWindow:v=>v_(v)});let Ne=Gy({scene:h,getCamera:()=>B,getCanvas:()=>n,getLocale:Ku,getVisibleWidthM:()=>{if(!B.isOrthographicCamera)return null;let v=Math.max(B.zoom,1e-6);return(B.right-B.left)/v},getTarget:()=>ne.target,getExaggeration:()=>W}),qe=null,Je=null;h.add(new Ca(16777215,.45));let at=new Vs(16777215,1.15);at.position.set(.6,1,.4),h.add(at);let re=new Vs(16777215,.4);re.position.set(-.5,.2,-.6),h.add(re);let He=new Ro(L);h.environment=He.fromScene(new Lu,.04).texture,He.dispose();let Oe=null;zy({canvas:n,controls:ne,getCamera:()=>B,getRoot:()=>Oe,isBlocked:()=>ge()||ne.enabled===!1});let me=new Wt,A=new I,J=new I,te=new I,Ae=new I,$=new I,pe=[],ve=1,Ee=!1,C=!1,E=!1;new Au().parse(e,"",v=>{Oe=v.scene,k.add(Oe),we.bind(Oe),Oe.traverse(O=>{if(!O.isMesh)return;let U=hy(O);O.userData.bpPart=U.part,O.userData.bpElementKey=U.element,U.element&&(a.has(U.element)||a.set(U.element,[]),a.get(U.element).push(O));let oe=U.part;if(m.has(oe)||m.set(oe,[]),m.get(oe).push(O),O.material){let De=Array.isArray(O.material)?O.material:[O.material];for(let Te of De)"side"in Te&&(Te.side=Dt)}}),ts(),gl(),xl(),le(),gh();let P=je(c);P&&(Q=`scene:${String(P.id).trim()}`),mt(),es(),Mt(),Gt(),Ho(),P&&ns(P),Ve(),D?.refreshPartialHeight(),jy(),Qy(),Dr(),Nr()},v=>{Se(String(v?.message||v))});function Se(v){let P=document.getElementById("err");P&&(P.style.display="block",P.textContent=v)}function he(){Oe&&(me.setFromObject(Oe),me.getSize(A),me.getCenter(J))}function ae(){let v=Math.max(1,n.clientWidth),P=Math.max(1,n.clientHeight);return v/P}function ye(v,P){let O=v*Math.PI/180;return 2*Math.atan(Math.tan(O/2)/Math.max(P,1e-6))}function se(){let v=ae();K.aspect=v,K.fov=ye(V,v)*180/Math.PI,K.updateProjectionMatrix()}function de(v,P){let O=ae(),U=Math.max(v,1e-6)*Math.tan(P/2),oe=U*O;ce.left=-oe,ce.right=oe,ce.top=U,ce.bottom=-U,ce.updateProjectionMatrix()}function Le(){let v=ae(),O=Math.max(ce.top,1e-6)*v;ce.left=-O,ce.right=O,ce.updateProjectionMatrix()}function F(v,P){let O=ae(),U=Math.max(v,1e-6),De=Math.max(P,1e-6),Te=De*O;Te<U&&(Te=U,De=Te/Math.max(O,1e-6)),be=1,ce.left=-Te,ce.right=Te,ce.top=De,ce.bottom=-De,ce.updateProjectionMatrix(),Ce()}function xe(v){let P=Math.max(v,1e-4),O=te.copy(B.position).sub(ne.target);O.lengthSq()<1e-12?O.set(0,0,1):O.normalize(),B.position.copy(ne.target).addScaledVector(O,P)}function fe(v){v!==B&&(v.position.copy(B.position),v.quaternion.copy(B.quaternion),v.up.copy(B.up),v.near=B.near,v.far=B.far,B=v,ne.object=B,ne.update())}function ze(){let v=Math.abs(ss)>.05||Math.abs(rs)>.05||Math.abs(di-1)>.001?di:1;return be*v}function Ce(){B.zoom=ze(),B.updateProjectionMatrix()}function Ue(){if(Re||C||!B.isOrthographicCamera)return;let v=Math.abs(ss)>.05||Math.abs(rs)>.05||Math.abs(di-1)>.001?di:1;be=Math.max(B.zoom/Math.max(v,1e-6),1e-6)}function ke(){if(Z==="ortho")return;ee=V;let v=B.position.distanceTo(ne.target),P=ye(V,ae());de(v,P),be=1,$n(()=>{Re=!0,fe(ce),Z="ortho",Ce(),Re=!1}),Et()}function nt(v){if(Z!=="ortho")return;let P=rt(v??ee),O=Math.max(ce.top,1e-6)/Math.max(be,1e-6),U=ye(P,ae()),oe=O/Math.max(Math.tan(U/2),1e-8);V=P,ee=P,be=1,$n(()=>{Re=!0,fe(K),Z="perspective",se(),xe(oe),Ce(),yn(),ne.update(),Re=!1}),Et()}function Y(v,P={}){let O=rt(v);if(Z==="ortho"){nt(O);return}let U=ae(),oe=ye(V,U),De=ye(O,U),Te=B.position.distanceTo(ne.target);V=O,ee=O,$n(()=>{if(se(),P.reframe!==!1){let st=Math.tan(oe/2)/Math.max(Math.tan(De/2),1e-8);xe(Te*st),yn(),ne.update()}Ce()}),Et()}function Ie(){Z==="ortho"?nt(ee):ke()}function rt(v){return Math.min(j,Math.max(G,v))}function Pe(){return Z==="ortho"?_e:V}function dt(v){return v>j?"ISO":`${Math.round(v)}\xB0`}function Et(){qe&&(qe.value=Pe()),Je&&(Je.textContent=Z==="ortho"?"ISO":`${Math.round(V)}\xB0`),qe?.refresh()}function Jt(v){if(v>j){Z!=="ortho"?ke():Et();return}let P=rt(v);Z==="ortho"?nt(P):Y(P,{reframe:!0})}function es(){let v=document.getElementById("fov");if(!v)return;v.replaceChildren();let P=document.createElement("div");P.className="fov-row";let O=document.createElement("span");O.className="fov-label",O.textContent=Nt("ui.fov"),Je=document.createElement("span"),Je.className="fov-value",Je.textContent=`${Math.round(V)}\xB0`,qe=Zu({min:G,max:_e,step:1,value:Pe(),ariaLabel:"Field of view",formatAriaValue:dt,onInput:Te=>Jt(Te),onChange:Te=>Jt(Te),onTap:()=>Ie()}),qe.el.classList.add("fov-range");let U=document.createElement("div");U.className="fov-detent",U.setAttribute("aria-hidden","true");let oe=(j-G)/(_e-G);U.style.left=`${oe*100}%`,qe.el.querySelector(".coop-range-track")?.append(U),P.append(O,qe.el,Je),v.append(P),Et()}function yn(){let v=Math.max(A.x,A.y,A.z,.01),P=B.position.distanceTo(ne.target),O=Math.round(Math.min(Math.max(P/200,v/5e3,.001),P/10)*1e4)/1e4,U=Math.round(Math.max(P+v*4,v*8,10)*1e4)/1e4;B.near===O&&B.far===U||(B.near=O,B.far=U,B.updateProjectionMatrix())}function $n(v){C=!0;try{v()}finally{requestAnimationFrame(()=>{C=!1})}}se();function ts(){Oe&&($n(()=>{he(),ne.target.copy(J);let P=Math.max(A.x,A.y,A.z,1)*1.85;B.position.set(J.x+P*.75,J.y+P*.55,J.z+P*.75),yn(),ne.update()}),jt())}function dl(){for(let v of m.keys())g.set(v,1),b.set(v,1),Rs(m.get(v)||[],1,{edgeMode:x});he(),ui()}function Ci(v){if(Oe){if(ie=null,Ne.clear(),N(1),dl(),Dr(),Nr(),K.up.set(0,1,0),ce.up.set(0,1,0),B.up.set(0,1,0),v==="iso"){ts();return}$n(()=>{he();let P=Math.max(A.x,A.y,A.z,1),O=P*1.85,U=J;v==="front"?B.position.set(U.x,U.y,U.z+O):v==="top"?B.position.set(U.x,U.y+O,U.z+P*.01):v==="side"&&B.position.set(U.x-O,U.y,U.z),ne.target.copy(U),yn(),ne.update()}),jt()}}function ns(v){if(!Oe||!v)return;ie=v,N(v.verticalExaggeration);let P=W;if(v.opacityDefault!=null||v.opacity&&typeof v.opacity=="object"){let De=v.opacityDefault!=null?Number(v.opacityDefault):1,Te=v.opacity&&typeof v.opacity=="object"?v.opacity:{},st=Mx(Te,u);for(let Tt of m.keys()){let rn=Object.prototype.hasOwnProperty.call(st,Tt)?st[Tt]:De;Cr(Tt,rn,{skipUi:!0,skipClip:!0})}he(),ui()}if(Object.prototype.hasOwnProperty.call(v,"cuts")){let De=Array.isArray(v.cuts)?v.cuts:[];pe.length=0;for(let Te of De){let st=Te?.normal;if(!Array.isArray(st)||st.length<3)continue;let Tt=new I(Number(st[0])||0,Number(st[1])||0,Number(st[2])||0);if(Tt.lengthSq()<1e-12)continue;Tt.normalize();let rn=null,dn=Math.min(1,Math.max(0,Number(Te.t)||0));if(Array.isArray(Te.anchor)&&Te.anchor.length>=3){rn=Cp(Te.anchor),rn.y*=P;let{near:Ls,far:sr}=nr(Tt),wl=rn.dot(Tt);dn=Math.min(1,Math.max(0,(wl-Ls)/Math.max(sr-Ls,1e-6)))}pe.push({id:ve++,normal:Tt,t:dn,anchor:rn,locked:!0,label:gt(Tt)})}Ee=!1,xt(),Mt(),Gt(),D?.refreshPartialHeight()}v.projection==="ortho"?Z!=="ortho"?ke():Et():v.hFovDeg!=null&&Number.isFinite(Number(v.hFovDeg))&&Y(Number(v.hFovDeg),{reframe:!1});let U=v.camera;U&&Array.isArray(U.target)&&Array.isArray(U.position)&&$n(()=>{Re=!0;let De=new I(0,1,0);Array.isArray(U.up)&&U.up.length>=3&&(De.set(Number(U.up[0])||0,Number(U.up[1])||0,Number(U.up[2])||0),De.lengthSq()<1e-12?De.set(0,1,0):De.normalize()),K.up.copy(De),ce.up.copy(De),B.up.copy(De),ne.target.set(Number(U.target[0])||0,(Number(U.target[1])||0)*P,Number(U.target[2])||0),B.position.set(Number(U.position[0])||0,(Number(U.position[1])||0)*P,Number(U.position[2])||0),B.lookAt(ne.target),Z==="ortho"&&Array.isArray(U.orthoFit)&&U.orthoFit.length>=2&&F(Number(U.orthoFit[0])||.1,(Number(U.orthoFit[1])||.1)*P),he(),yn(),ne.update(),Re=!1}),jt();let oe=v.edges;(oe==="none"||oe==="transparent"||oe==="opaque")&&(x=oe,is()),Ne.setSpec(v),Dr(),Nr()}function Cr(v,P,O={}){let U=Math.max(0,Math.min(1,Number(P)||0));g.set(v,U),U>0&&b.set(v,U),O.detach&&y.add(v),Rs(m.get(v)||[],U,{edgeMode:x}),!O.skipClip&&(he(),O.skipUi||ui())}function pl(v,P,O){let U=Math.max(0,Math.min(1,Number(P)||0));O&&M.set(O,U);for(let oe of v)y.has(oe)||(g.set(oe,U),U>0&&b.set(oe,U),Rs(m.get(oe)||[],U,{edgeMode:x}));he(),ui()}function Pr(v,P,O){y.delete(v);let U=O.filter(De=>!y.has(De)),oe=er(P,U);g.set(v,oe),oe>0&&b.set(v,oe),Rs(m.get(v)||[],oe,{edgeMode:x}),he(),ui()}function ml(v){if(!v.length)return 1;let P=g.get(v[0])??1;for(let O=1;O<v.length;O++){let U=g.get(v[O])??1;if(Math.abs(U-P)>1e-4)return NaN}return P}function er(v,P){let O=P.filter(oe=>!y.has(oe)),U=ml(O.length?O:P);return Number.isNaN(U)?M.get(v)??1:U}function ui(){for(let[v,P]of S)P.value=(g.get(v)??1)*100;for(let[v,P]of T){let O=(P.el.dataset.leaves||"").split(",").map(U=>U.trim()).filter(Boolean);P.value=er(v,O)*100}for(let[v,P]of _){let O=y.has(v);P.hidden=!O,P.setAttribute("aria-hidden",O?"false":"true")}}function tr(){return pe.filter(v=>v.locked).map(v=>fi(v))}function ko(){let v=new Ze;return L.getDrawingBufferSize(v),{x:v.x,y:v.y}}function is(){if(m.size){if(x===Sr){ux(Oe);return}fx(m,!0,{clippingPlanes:tr(),resolution:ko(),edgeMode:x})}}function Ho(){m.size&&(Ex(m,p,{isDark:d,clippingPlanes:tr(),opacityByLabel:g,edgeMode:x}),p===rl?(L.toneMapping=Mo,L.toneMappingExposure=1.05):(L.toneMapping=ri,L.toneMappingExposure=1),is(),rp(m,tr()),d_())}function gl(){let v=document.getElementById("mats");if(v){v.replaceChildren();for(let[P,O]of[[Xu,"ui.solid"],[rl,"ui.realistic"]]){let U=document.createElement("button");U.type="button",U.dataset.mode=P,U.textContent=Nt(O),P===p&&U.classList.add("is-active"),U.addEventListener("click",()=>{p=P,Ax(P),v.querySelectorAll("button").forEach(oe=>{oe.classList.toggle("is-active",oe.dataset.mode===P)}),Ho()}),v.append(U)}}}function xl(){let v=document.getElementById("edges");if(v){v.replaceChildren();for(let[P,O]of[[Sr,"ui.edgesNone"],[Er,"ui.edgesTransparent"],[il,"ui.edgesOpaque"]]){let U=document.createElement("button");U.type="button",U.dataset.edgeMode=P,U.textContent=Nt(O),P===x&&U.classList.add("is-active"),U.addEventListener("click",()=>{x=P,Zd(P),v.querySelectorAll("button").forEach(oe=>{oe.classList.toggle("is-active",oe.dataset.edgeMode===P)}),is(),kp()}),v.append(U)}}}function Vo(v,P,O,U){let oe=document.createElement("div");oe.className="part-opacity-wrap";let De,Te=()=>{if(De.value/100>0)U(0);else{let Tt=O();U(Tt>0?Tt:1)}};return De=Zu({min:0,max:100,step:1,value:Math.round(P),ariaLabel:v,formatAriaValue:st=>`${Math.round(st)}%`,thumbScrubOnly:!0,onInput:st=>U(st/100),onChange:st=>U(st/100),onTap:Te}),De.el.classList.add("part-opacity"),oe.append(De.el),{wrap:oe,range:De}}function R(){let v=document.getElementById("parts");if(!v)return;v.style.removeProperty("--part-name-col");let P=0;for(let O of v.querySelectorAll(".part-name")){if(O.closest(".part-children")?.hidden)continue;let oe=O.style.width;O.style.width="max-content",P=Math.max(P,Math.ceil(O.getBoundingClientRect().width)),O.style.width=oe}P>0&&v.style.setProperty("--part-name-col",`${P}px`)}function H(v,P,O,U=null){if(v.type==="leaf"){let Pt=document.createElement("div");Pt.className="part-row part-leaf",Pt.style.setProperty("--part-depth",String(O)),Pt.dataset.leaf=v.id;let Tl=document.createElement("span");Tl.className="part-disclosure-spacer",Tl.setAttribute("aria-hidden","true");let Al=document.createElement("span");Al.className="part-name",Al.textContent=v.label;let{wrap:Qp,range:em}=Vo(`${v.label} opacity`,(g.get(v.id)??1)*100,()=>b.get(v.id)??1,Rl=>Cr(v.id,Rl,{detach:!!U}));em.el.dataset.leaf=v.id,S.set(v.id,em);let mi=null;if(U){mi=document.createElement("button"),mi.type="button",mi.className="part-sync",mi.textContent=Nt("ui.sync"),mi.setAttribute("aria-label",`${Nt("ui.sync")} ${v.label}`);let Rl=y.has(v.id);mi.hidden=!Rl,mi.setAttribute("aria-hidden",Rl?"false":"true"),mi.addEventListener("click",C_=>{C_.stopPropagation(),Pr(v.id,U.groupId,U.leafIds)}),_.set(v.id,mi)}mi?Pt.append(Tl,Al,Qp,mi):Pt.append(Tl,Al,Qp),P.append(Pt);return}let oe=qu(v),De=document.createElement("div");De.className="part-group",De.dataset.group=v.id;let Te=document.createElement("div");Te.className="part-row part-group-row",Te.style.setProperty("--part-depth",String(O)),Te.setAttribute("role","button"),Te.tabIndex=0;let st=document.createElement("button");st.type="button",st.className="part-disclosure",st.setAttribute("aria-label",`Expand ${v.label}`),st.setAttribute("aria-expanded","false");let Tt=document.createElement("span");Tt.className="part-name",Tt.textContent=v.label;let rn=er(v.id,oe)||1;rn<=0&&(rn=1);let{wrap:dn,range:Ls}=Vo(`${v.label} opacity`,er(v.id,oe)*100,()=>rn,Pt=>{Pt>0&&(rn=Pt),pl(oe,Pt,v.id)});Ls.el.dataset.group=v.id,Ls.el.dataset.leaves=oe.join(","),T.set(v.id,Ls),dn.addEventListener("click",Pt=>Pt.stopPropagation()),dn.addEventListener("pointerdown",Pt=>Pt.stopPropagation());let sr=document.createElement("div");sr.className="part-children",sr.hidden=!0;function wl(Pt){Pt?w.add(v.id):w.delete(v.id),sr.hidden=!Pt,De.classList.toggle("is-expanded",Pt),st.setAttribute("aria-expanded",Pt?"true":"false"),st.setAttribute("aria-label",Pt?`Collapse ${v.label}`:`Expand ${v.label}`),requestAnimationFrame(()=>R())}function Th(){wl(!w.has(v.id))}st.addEventListener("click",Pt=>{Pt.stopPropagation(),Th()}),Te.addEventListener("click",Pt=>{dn.contains(Pt.target)||Th()}),Te.addEventListener("keydown",Pt=>{(Pt.key==="Enter"||Pt.key===" ")&&(Pt.preventDefault(),Th())}),Te.append(st,Tt,dn),De.append(Te,sr),P.append(De);let R_={groupId:v.id,leafIds:oe};for(let Pt of v.children)H(Pt,sr,O+1,R_);wl(w.has(v.id))}function le(){let v=document.getElementById("parts");if(!v)return;v.replaceChildren(),S.clear(),T.clear(),_.clear();for(let O of m.keys())g.has(O)||(g.set(O,1),Rs(m.get(O)||[],1,{edgeMode:x})),b.has(O)||b.set(O,1);let P=bx(m.keys(),s,Nt);u=P;for(let O of P)H(O,v,0,null);requestAnimationFrame(()=>R())}let Q="iso",ie=null,Ge=!1;function je(v){let P=String(v||"").trim();if(!P)return null;for(let O of i)if(String(O?.id||"").trim()===P)return O;return null}function Ve(){let v=Q;v&&v.startsWith("scene:")?$y(v.slice(6)):$y(null)}function $e(){return document.querySelectorAll("#cams button, #scenes button")}function tt(){Q!=null&&(Q=null,$e().forEach(v=>{v.classList.remove("is-active")}),Ve())}function ct(){let v=document.getElementById("scenes");if(!v){let P=document.getElementById("cams");v=document.createElement("div"),v.id="scenes",v.className="scene-list",P?.insertAdjacentElement("afterend",v)}return v}function mt(){let v=document.getElementById("cams");if(!v)return;v.replaceChildren();let P=ct();P.replaceChildren();function O(U,oe,De,Te){let st=document.createElement("button");st.type="button",st.dataset.preset=oe,st.textContent=De,oe===Q&&st.classList.add("is-active"),st.addEventListener("click",()=>{Q=oe,$e().forEach(Tt=>{Tt.classList.toggle("is-active",Tt.dataset.preset===oe)}),Te(),Ve()}),U.append(st)}for(let[U,oe]of[["iso","ui.iso"],["front","ui.front"],["side","ui.side"],["top","ui.top"]])O(v,U,Nt(oe),()=>Ci(U));for(let U of i){let oe=String(U?.id||"").trim();if(!oe)continue;let De=Nt(`scene.${oe}`);O(P,`scene:${oe}`,De,()=>ns(U))}P.hidden=P.childElementCount===0}function et(v=te){return v.copy(ne.target).sub(B.position).normalize()}function gt(v){let P=Math.hypot(v.x,v.z),O=(Math.atan2(v.x,v.z)*180/Math.PI+360)%360,U=Math.atan2(v.y,P)*180/Math.PI,oe=Math.abs(U).toFixed(0),De=U>=0?"\u2191":"\u2193";return`${O.toFixed(0)}\xB0 / ${oe}\xB0${De}`}function zt(){return pe.some(v=>!v.locked)}function wt(){return pe.filter(v=>v.locked)}function Mt(){zt()||!(wt().length===0||Ee)||pe.push({id:ve++,normal:new I(0,0,1),t:0,locked:!1,label:Nt("ui.cut")})}function fn(v){let P=document.getElementById("cuts");if(!P)return;let O=P.querySelector(`[data-cut-id="${v.id}"]`);if(!O){Gt();return}let U=O.querySelector(".cut-label");if(U&&(U.textContent=v.locked?v.label:Nt("ui.cut")),v.locked&&!O.querySelector(".cut-remove")){let oe=document.createElement("button");oe.type="button",oe.className="cut-remove",oe.setAttribute("aria-label",Nt("ui.removeSection")),oe.textContent="\xD7",oe.addEventListener("click",()=>Qt(v.id)),O.append(oe)}}function Qe(v){v.locked||(et(v.normal),v.locked=!0,v.label=gt(v.normal),Ee=!1,xt(),fn(v))}function jt(){wt().length!==0&&(zt()||(Ee=!0,!E&&(Mt(),Gt())))}function St(){Ee&&(zt()||wt().length!==0&&(Mt(),Gt()))}function hi(v,P){let O=pe.find(U=>U.id===v);if(O){if(O.locked||Qe(O),O.t=Math.min(1,Math.max(0,Number(P))),O.anchor=null,E){Pi();return}xt()}}function Qt(v){let P=pe.findIndex(O=>O.id===v);P<0||(pe.splice(P,1),wt().length===0?(Ee=!1,zt()||Mt()):Ee&&!zt()&&Mt(),xt(),Gt(),D?.refreshPartialHeight())}function nr(v){if(he(),me.isEmpty())return{near:-1,far:1};let P=me.min,O=me.max,U=1/0,oe=-1/0;for(let st=0;st<2;st++)for(let Tt=0;Tt<2;Tt++)for(let rn=0;rn<2;rn++){$.set(st?O.x:P.x,Tt?O.y:P.y,rn?O.z:P.z);let dn=$.dot(v);dn<U&&(U=dn),dn>oe&&(oe=dn)}let Te=Math.max(oe-U,1e-6)*.02;return{near:U-Te,far:oe+Te}}function fi(v){if(v.anchor)return new mn().setFromNormalAndCoplanarPoint(v.normal,v.anchor);let{near:P,far:O}=nr(v.normal),U=P+(O-P)*v.t;return Ae.copy(v.normal).multiplyScalar(U),new mn().setFromNormalAndCoplanarPoint(v.normal,Ae)}function Pi(){let v=tr();return Oe&&(Oe.traverse(P=>{if(!P.isMesh||!P.material||Un(P)||Yu(P))return;let O=Array.isArray(P.material)?P.material:[P.material];for(let U of O){if(!U)continue;let oe=U.clippingPlanes?U.clippingPlanes.length:0;U.clippingPlanes=v,U.clipIntersection=!1,oe!==v.length&&(U.needsUpdate=!0)}}),Kd(Oe,v)),v}function xt(){let v=Pi();Oe&&(rp(m,v),x!==Sr?is():Kd(Oe,v))}function Gt(){let v=document.getElementById("cuts");if(v){v.replaceChildren();for(let P of pe){let O=document.createElement("div");O.className="cut-row",O.dataset.cutId=String(P.id);let U=document.createElement("span");U.className="cut-label",U.textContent=P.locked?P.label:Nt("ui.cut");let oe=()=>{E&&(E=!1,xt(),St())},De=Zu({min:0,max:1,step:.001,value:P.t,ariaLabel:P.locked?`Section ${P.label}`:"Section cut",onScrubStart:()=>{E=!0,P.locked||Qe(P)},onScrubEnd:oe,onInput:Te=>hi(P.id,Te),onChange:Te=>{hi(P.id,Te),oe()}});if(O.append(U,De.el),P.locked){let Te=document.createElement("button");Te.type="button",Te.className="cut-remove",Te.setAttribute("aria-label",Nt("ui.removeSection")),Te.textContent="\xD7",Te.addEventListener("click",()=>Qt(P.id)),O.append(Te)}v.append(O)}D?.refreshPartialHeight()}}let _n=!1,Ft=new I,Zt=new I,Qn=!1;n.addEventListener("pointerdown",()=>{_n=!0},{capture:!0});let Go=()=>{_n=!1};window.addEventListener("pointerup",Go,{capture:!0}),window.addEventListener("pointercancel",Go,{capture:!0}),ne.addEventListener("start",()=>{tt(),_n=!0}),ne.addEventListener("change",()=>{Ue()}),ne.addEventListener("end",()=>{_n=!1,!C&&jt()});let di=1,ss=0,rs=0,uh=1,hh=0,fh=0,dh=1,ph=0,mh=0,ir=0,Yy=280;function Zy(){let v=Math.max(1,n.clientWidth),P=Math.max(1,n.clientHeight);if(!D)return{zoom:1,offX:0,offY:0,w:v,h:P};let{bottom:O,right:U}=D.getSafeInsets();if(O<=0&&U<=0)return{zoom:1,offX:0,offY:0,w:v,h:P};let oe=Math.max(1,v-U),De=Math.max(1,P-O),Te=Math.min(oe/v,De/P),st=U/2,Tt=O/2;return{zoom:Te,offX:st,offY:Tt,w:v,h:P}}function Lp(v,P){$n(()=>{Re=!0,Math.abs(ss)>.05||Math.abs(rs)>.05||Math.abs(di-1)>.001?(B.zoom=be*di,B.setViewOffset(v,P,ss,rs,v,P)):(B.clearViewOffset(),B.zoom=be,di=1,ss=0,rs=0),B.updateProjectionMatrix(),Re=!1})}function Dp(v=!0){let{zoom:P,offX:O,offY:U,w:oe,h:De}=Zy();if(uh=P,hh=O,fh=U,!v){di=P,ss=O,rs=U,ir=0,Lp(oe,De);return}dh=di,ph=ss,mh=rs,ir=performance.now()}function Ky(v){if(!ir)return;let P=Math.min(1,(v-ir)/Yy),O=1-(1-P)**3;di=dh+(uh-dh)*O,ss=ph+(hh-ph)*O,rs=mh+(fh-mh)*O;let U=Math.max(1,n.clientWidth),oe=Math.max(1,n.clientHeight);Lp(U,oe),P>=1&&(ir=0)}function yl(){let v=Math.max(1,n.clientWidth),P=Math.max(1,n.clientHeight);L.setSize(v,P,!1),Z==="perspective"?se():Le(),Dp(!1);let O=ko();hx(Oe,O.x,O.y)}yl(),window.addEventListener("resize",yl),D?.onDetentChange(()=>{Dp(!0)});let Gn=document.getElementById("ar"),vn=document.getElementById("measure"),Wo=!1,_l=()=>Nt("ui.measure");function gh(){let v=document.getElementById("locale");if(v){v.replaceChildren();for(let[P,O]of[["cs","CS"],["en","EN"]]){let U=document.createElement("button");U.type="button",U.dataset.locale=P,U.textContent=O,P===Ku()&&U.classList.add("is-active"),U.addEventListener("click",()=>{$x(P)}),v.append(U)}}}function Jy(){up(document),Gn&&!Wo&&(Gn.textContent=Nt("ui.ar")),vn&&(vn.textContent=_l()),Dr(),Nr(),Ne.relocalize();try{gl(),xl(),mt(),es(),le(),Gt(),gh(),Zp()}catch(v){console.error("relocalizeUi",v);try{gh()}catch{}}D?.refreshPartialHeight()}cp(()=>Jy());function jy(){Gn&&(Gn.hidden=!1,Wo||(Gn.textContent=Nt("ui.ar")))}function Qy(){vn&&(vn.hidden=!1,vn.textContent=_l())}let Ir=document.getElementById("drawing"),Is=document.getElementById("labels"),Lr=!0;function Dr(){Ir&&(Ir.hidden=!1,Ir.disabled=!ie||vl,Ir.textContent=Nt("ui.drawing"))}function Nr(){if(!Is)return;let v=!!ie;Is.hidden=!v,Is.disabled=!v,Is.setAttribute("aria-pressed",Lr?"true":"false"),Is.classList.toggle("is-active",v&&Lr),Is.textContent=Nt("ui.labels")}function e_(){try{let v=new URLSearchParams(window.location.search).get("m");if(v&&v.trim())return v.trim()}catch{}return"model"}function t_(){let P=1,O=1.35;for(let U=0;U<6;U+=1){Ne.update();let oe=Ne.glyphBoundsNdc();if(!oe)return;let De=Math.max(-1+.04-oe.minX,oe.maxX-(1-.04),-1+.04-oe.minY,oe.maxY-(1-.04),0);if(De<.012||P>=O-.01)return;let Te=Math.min(O/P,Math.max(1.05,1+De*1.6));P*=Te,B.isOrthographicCamera?(ce.left*=Te,ce.right*=Te,ce.top*=Te,ce.bottom*=Te,ce.updateProjectionMatrix()):(te.copy(B.position).sub(ne.target).multiplyScalar(Te),B.position.copy(ne.target).add(te),yn())}}function Np(){ir=0,di=1,ss=0,rs=0,uh=1,hh=0,fh=0,B.clearViewOffset(),B.zoom=be,B.updateProjectionMatrix()}let vl=!1;async function Op(){if(vl||!Oe||!ie)return null;vl=!0,Dr(),Ge=!0;let v=ie,P=x,O=h.background,U=L.getPixelRatio(),oe=n.style.width,De=n.style.height,Te=D?.getDetent?.()??null,st=pi?.isActive()??!1,Tt=Ne.isVisible();try{st&&pi?.setActive(!1),Ne.setVisible(!0),D?.setDetent("closed"),n.style.width=`${2400}px`,n.style.height=`${1697}px`,L.setPixelRatio(1),yl(),Np(),x=il,is(),h.background=new Ke(16777215),Ne.setInk("plate"),ns(v),Np(),t_(),Ne.update(),z.render(h,B,Oe,zp,{quality:"high"});let{png:rn,pdf:dn}=await Xy(n),Ls=`${e_()}_${String(v.id||"scene")}`;return{png:rn,pdf:dn,stem:Ls}}finally{n.style.width=oe,n.style.height=De,L.setPixelRatio(U),x=P,h.background=O,Ne.setInk("viewer"),Ne.setVisible(Tt),Te&&D?.setDetent(Te),yl(),is(),v&&ns(v),st&&pi?.setActive(!0),Ge=!1,vl=!1,Dr(),Nr(),requestAnimationFrame(El)}}window.blueprintCaptureDrawing=async()=>{let v=await Op();return v?{png:v.png,pdf:v.pdf,stem:v.stem}:null},window.blueprintSetView=(v={})=>{if(!Oe||!v)return!1;let P=v.projection==="ortho"?"ortho":"perspective",O=Number.isFinite(Number(v.hFovDeg))?Number(v.hFovDeg):V;return P==="perspective"&&Z==="ortho"&&nt(O),P==="perspective"&&Y(O,{reframe:!1}),$n(()=>{Re=!0;let U=new I(0,1,0);if(Array.isArray(v.up)&&v.up.length>=3&&(U.set(Number(v.up[0])||0,Number(v.up[1])||0,Number(v.up[2])||0),U.lengthSq()>1e-12?U.normalize():U.set(0,1,0)),K.up.copy(U),ce.up.copy(U),B.up.copy(U),Array.isArray(v.target)&&ne.target.set(Number(v.target[0])||0,Number(v.target[1])||0,Number(v.target[2])||0),Array.isArray(v.position)&&B.position.set(Number(v.position[0])||0,Number(v.position[1])||0,Number(v.position[2])||0),B.lookAt(ne.target),P==="ortho"){let oe=B.position.distanceTo(ne.target),De=ye(O,ae());de(oe,De),be=1,Z!=="ortho"&&(fe(ce),Z="ortho"),Ce(),Et()}he(),yn(),ne.update(),Re=!1}),sn=!0,!0},Is&&Is.addEventListener("click",()=>{Lr=!Lr,Ne.setVisible(Lr),Nr()}),Ir&&Ir.addEventListener("click",()=>{(async()=>{let v=await Op();v&&(Pp(v.png,`${v.stem}.png`),Pp(v.pdf,`${v.stem}.pdf`))})()});let pi=null;h&&(pi=uy({scene:h,canvas:n,getCamera:()=>B,controls:ne,getRoot:()=>Oe,getClipPlanes:()=>tr(),onLiveLength:v=>{vn&&(v?(vn.textContent=v,vn.classList.add("is-live")):(vn.textContent=_l(),vn.classList.remove("is-live")))},onActiveChange:v=>{sn=!0,vn&&(vn.classList.toggle("is-active",v),vn.setAttribute("aria-pressed",v?"true":"false"),v||(vn.textContent=_l(),vn.classList.remove("is-live")))}})),vn&&vn.addEventListener("click",()=>{pi&&pi.setActive(!pi.isActive())}),ge=()=>!!pi?.isActive();function Up(){if(!Oe)return null;Oe.updateWorldMatrix(!0,!0);let v=wt().map(oe=>fi(oe)),P=new kt;if(P.name="ARContent",Oe.traverse(oe=>{if(!oe.isMesh||!oe.visible||Un(oe))return;let De=Fx(oe,v);De&&P.add(De)}),!P.children.length)return null;P.updateMatrixWorld(!0);let O=op(P),U=new kt;return U.name="ARExport",U.add(P),Vx(P,O),U.userData.arPlacement=O,U}async function Fp(){if(Wo||!Oe)return;Wo=!0;let v=Gn?.textContent||"AR";Gn&&(Gn.disabled=!0,Gn.textContent="\u2026");try{let P=Up();if(!P)throw new Error("Nothing visible to export. Show at least one part.");let U=await new Uu().parseAsync(P,{quickLookCompatible:!0,includeAnchoringProperties:!0,ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}}}),oe=new Blob([U],{type:"model/vnd.usdz+zip"}),De=URL.createObjectURL(oe),Te=document.createElement("a");Te.rel="ar",Te.href=De,Te.download="view.usdz";let st=document.createElement("img");st.alt="AR",Te.appendChild(st),document.body.appendChild(Te),Te.click(),Te.remove(),setTimeout(()=>URL.revokeObjectURL(De),6e4)}catch(P){Se(String(P?.message||P))}finally{Wo=!1,Gn&&(Gn.disabled=!1,Gn.textContent=v)}}Gn&&Gn.addEventListener("click",()=>{Fp()});let Bp={scene:h,get camera(){return B},controls:ne,parts:m,partOpacity:g,cuts:pe,scenes:i,setPartOpacity:Cr,setCameraPreset:Ci,applyScene:ns,setHFov:Y,toggleFovIso:Ie,get projection(){return Z},get hFovDeg(){return V},setCutT:hi,removeCut:Qt,frameIso:ts,openArQuickLook:Fp,buildArExportScene:Up,getPeelQuality:()=>qo};window.BlueprintsViewer=Bp;function zp(){for(let v of g.values())if(v<1-1e-4)return!0;return!1}function kp(){for(let[v,P]of m){let O=g.get(v)??1;Rs(P,O,{edgeMode:x})}}let Hp=!1,sn=!0,os=null,xh=Ny(o),yh=new Mi,_h=new Ze,vh=Dy({index:o,visibility:xh,t:Nt,openSheet(){let v=window.matchMedia("(min-width: 768px)").matches;D?.setDetent(v?"open":"partial")},onFrame:(v,P)=>{P?.move?l_(v):a_(v)},onVisibility:()=>u_(),actionsFor:()=>[],liveLines:v=>{let P=Me?.lastKnown(v.globalId);return P?Sy(P,Nt):[]}});function Vp(v){let P=v;for(;P;){let O=P.userData?.bpElementKey||ji(P.name||"").element;if(O){for(let U of Object.values(o.elements))if(U.id===O)return U}P=P.parent}return null}function Gp(v){return v?a.get(v)||[]:[]}function Or(v){if(!v)return[];let P=Gp(v.id);if(P.length)return P;let O=[];for(let U of Ar(o,v.globalId)){let oe=o.elements[U];oe&&oe!==v&&O.push(...Gp(oe.id))}return O}function Wp(v){let P=new Wt,O=new I;for(let U of v){let oe=U.geometry;if(!oe)continue;oe.boundingBox||oe.computeBoundingBox();let De=oe.boundingBox;if(De){U.updateWorldMatrix(!0,!1);for(let Te of[De.min.x,De.max.x])for(let st of[De.min.y,De.max.y])for(let Tt of[De.min.z,De.max.z])O.set(Te,st,Tt).applyMatrix4(U.matrixWorld),P.expandByPoint(O)}}return P}let n_=480,Ii=null;function i_(v){let P=Math.min(1,Math.max(0,v));return P<.5?4*P*P*P:1-(-2*P+2)**3/2}function s_(v){let P=v.getSize($),O=Math.max(P.x,P.y,P.z,.2),U=v.getCenter(new I),oe=B.position.clone().sub(ne.target);oe.lengthSq()<1e-8?oe.set(.75,.55,.75):oe.normalize();let De;if(B.isOrthographicCamera)De=Math.max(B.position.distanceTo(ne.target),O*1.4);else{let Te=(B.fov||45)*Math.PI/180;De=Math.max(O*.62/Math.max(Math.tan(Te/2),.001),O*1.25)}return{center:U,position:U.clone().addScaledVector(oe,De),span:O}}function r_(v){Ii={t0:performance.now(),fromPos:B.position.clone(),toPos:v.position,fromTarget:ne.target.clone(),toTarget:v.center,span:v.span},sn=!0}function o_(v){if(!Ii)return;let P=Math.min(1,(v-Ii.t0)/n_),O=i_(P);B.position.lerpVectors(Ii.fromPos,Ii.toPos,O),ne.target.lerpVectors(Ii.fromTarget,Ii.toTarget,O),B.isOrthographicCamera&&F(Ii.span*.62,Ii.span*.62),C=!0,ne.update(),he(),yn(),sn=!0,P>=1&&(Ii=null,requestAnimationFrame(()=>{C=!1}))}function a_(v){let P=Or(o.elements[v]);P.length&&Xp(P),sn=!0}function l_(v){let P=o.elements[v],O=Or(P);if(!O.length)return;let U=Wp(O);U.isEmpty()||(r_(s_(U)),Xp(O),sn=!0)}function Xp(v){os&&qp();let P=[];for(let O of v){if(!O.isMesh||!O.material)continue;let U=Array.isArray(O.material)?O.material:[O.material],oe=U.map(De=>{let Te=De.clone();return Te.emissive?(Te.emissive.setHex(16756768),Te.emissiveIntensity=0):Te.color&&(Te.userData.bpPulseBase=Te.color.getHex()),P.push(Te),Te});O.userData.bpPulseMaterial=U,O.material=oe.length===1?oe[0]:oe}os={meshes:v,clones:P,t0:performance.now()}}function qp(){if(os){for(let v of os.meshes){let P=v.userData.bpPulseMaterial;P&&(v.material=P.length===1?P[0]:P),delete v.userData.bpPulseMaterial}for(let v of os.clones)v.dispose?.();os=null}}function c_(v){if(!os)return;let P=(v-os.t0)/900;if(P>=1){qp(),sn=!0;return}let O=Math.sin(Math.min(P,1)*Math.PI);for(let U of os.clones)U.emissive?U.emissiveIntensity=.85*O:U.color&&U.userData.bpPulseBase!=null&&U.color.setHex(U.userData.bpPulseBase).offsetHSL(.08,.2,.18*O);sn=!0}function u_(){let v=new Set;for(let P of Object.values(o.elements))xh.isHidden(P.globalId)&&P.id&&v.add(P.id);for(let[P,O]of a){let U=v.has(P);for(let oe of O){oe.userData.bpIfcHidden=U;for(let De of oe.children||[])(De?.userData?.isEdgeOverlay||De?.userData?.isSectionCap)&&(De.visible=!U)}}for(let P of we.bindings){let O=ji(P.host?.name||"").element,U=!!(O&&v.has(O));P.host&&(P.host.userData.bpIfcHidden=U)}for(let[P,O]of m)Rs(O,g.get(P)??1,{edgeMode:x});sn=!0}function h_(v,P){let U=(Array.isArray(v.material)?v.material:[v.material]).map(oe=>{if(!oe)return oe;if(oe.userData.bpOwned)return P(oe);let De=oe.clone();return De.userData.bpOwned=!0,P(De)});v.material=U.length===1?U[0]:U}function bl(v,P){let O=!!P.on;Ye.set(v.globalId,O),O?ue.set(v.globalId,P):ue.delete(v.globalId);let U=new Ke(P.color??Xe.color),oe=new Ke;for(let De of Or(v))h_(De,Te=>{if(Te.emissive)Te.emissive.copy(O?U:oe.setHex(0)),Te.emissiveIntensity=O?.35+.55*(P.level??1):0;else if(Te.color)if(Te.userData.bpLightBase==null&&(Te.userData.bpLightBase=Te.color.getHex()),O&&P.solid!=null)Te.color.setHex(P.solid);else if(O){let st=U.clone().lerp(new Ke(16777215),.5);oe.setHex(Te.userData.bpLightBase).lerp(st,.35+.65*(P.level??1)),Te.color.copy(oe)}else Te.color.setHex(Te.userData.bpLightBase);return Te});sn=!0}function f_(v){let P=!Ye.get(v.globalId);bl(v,P?Xe:{...Xe,on:!1})}function d_(){for(let[v,P]of[...ue]){let O=o.elements[v];O&&bl(O,P)}}function Ml(v){v?.ok||(console.warn("Home command failed",v),wh=`${Nt("home.failed")}${v?.status?` (${v.status})`:""}${v?.error?`: ${v.error}`:""}`,Xo(),window.setTimeout(()=>{wh="",Xo()},4e3))}function p_(v){if(Be(v)?.deviceType!=="ColorTemperatureLight"){f_(v);return}Me.command(v.globalId,{type:"toggle"}).then(Ml)}function m_(v,P){let O=Or(v);if(!P?.point||!O.length)return{dy:1,side:-1};let oe=Wp(O).getCenter(new I),De=new I().setFromMatrixColumn(B.matrixWorld,0),Te=P.point.clone().sub(oe);return{dy:Te.y,side:Te.dot(De)}}let bh=new Map;function $p(v,P){Mh(v),bh.set(v.globalId,performance.now()),Me.press(v.globalId,P).then(Ml)}function g_(v,P){if(Be(v)?.deviceType!=="GenericSwitch"||!Me.simulation()){Mh(v);return}$p(v,My(v,m_(v,P)))}function x_(v){if(Be(v)?.deviceType!=="GenericSwitch"||!Me.simulation())return null;let O=xp(v),U=[];return O.forEach((oe,De)=>{for(let Te of["up","down"]){let st=Nt(Te==="up"?"home.up":"home.down");U.push({id:`switch-${oe}-${Te}`,labelKey:Te==="up"?"home.up":"home.down",label:O.length>1?`${De+1} ${st}`:st,run:()=>$p(v,{rocker:oe,position:Te,kind:"short"})})}}),U}function y_(v){let P=Be(v);if(P?.deviceType!=="WindowCovering")return;let O=P.state?.windowCovering?.targetPositionLiftPercent100ths,U=O!=null&&O<5e3;Me.command(v.globalId,{type:U?"coverClose":"coverOpen"}).then(Ml)}function __(v){return Be(v)?.deviceType!=="WindowCovering"?null:[["coverOpen","ui.open"],["coverClose","ui.close"],["coverStop","home.stop"]].map(([O,U])=>({id:O,labelKey:U,run:()=>Me.command(v.globalId,{type:O}).then(Ml)}))}function Mh(v){for(let P of Or(v)){if(P.userData.bpPressing)continue;P.userData.bpPressing=!0;let O=P.position.y;P.position.y=O-.004,window.setTimeout(()=>{P.position.y=O,P.userData.bpPressing=!1,sn=!0},160)}sn=!0}function v_(v){let P=!Fe.get(v.globalId);Fe.set(v.globalId,P);for(let O of Or(v)){O.userData.bpSlideOrigin||(O.userData.bpSlideOrigin=O.position.clone());let U=O.geometry;U&&!U.boundingBox&&U.computeBoundingBox();let oe=U?.boundingBox?U.boundingBox.max.x-U.boundingBox.min.x:.4;O.position.copy(O.userData.bpSlideOrigin),P&&(O.position.x+=oe*.8)}sn=!0}function b_(v){if(ge())return;let P=B;if(!P||!Oe)return;let O=n.getBoundingClientRect(),U=O.width||n.clientWidth||1,oe=O.height||n.clientHeight||1;_h.x=(v.clientX-O.left)/U*2-1,_h.y=-((v.clientY-O.top)/oe)*2+1,yh.setFromCamera(_h,P);let De=yh.intersectObject(Oe,!0).filter(dn=>al(dn.object)),Te=De[0];if(!Te){vh.closePopover();return}let st=Vp(Te.object),Tt=Te.object.userData?.bpPart||ji(Te.object.name||"").part,rn=we.taps.actionsFor(De,{raycaster:yh,now:performance.now()},dn=>al(dn.object));vh.openPopover(st,Tt,rn,v.clientX,v.clientY)}l=b_;let Sh=vy({search:typeof location<"u"?location.search:"",storage:typeof localStorage<"u"?localStorage:null}),Yp=_y(o),Eh=Sh.mode,wh="",as=null;function M_(v){let P=o.elements[v.globalId];P&&v.deviceType==="ColorTemperatureLight"&&bl(P,gp(v))}function S_(){for(let v of[...Ye.keys()]){let P=o.elements[v];P&&bl(P,{...Xe,on:!1})}}function Xo(){if(!as)return;let v=Me?Me.status():"off",P=v==="live"?Me.simulation()?"home.statusLive":"home.statusLiveNoSim":v==="connecting"?"home.statusConnecting":v==="unreachable"?"home.statusUnreachable":"home.statusOff";as.textContent=wh||Nt(P),as.dataset.status=v,as.title=v==="off"?"":Sh.baseUrl}function Zp(){if(!Yp)return;let v=document.getElementById("section-home");if(!v){let U=document.getElementById("section-locale");if(!U?.parentNode)return;v=document.createElement("section"),v.className="sheet-section",v.id="section-home",U.parentNode.insertBefore(v,U)}v.replaceChildren();let P=document.createElement("h2");P.className="sheet-title",P.textContent=Nt("home.title");let O=document.createElement("div");O.className="seg",O.id="home-mode",O.setAttribute("role","group"),O.setAttribute("aria-label",Nt("home.title"));for(let[U,oe]of[["live","home.live"],["off","home.off"]]){let De=document.createElement("button");De.type="button",De.dataset.homeMode=U,De.textContent=Nt(oe),U===Eh&&De.classList.add("is-active"),De.addEventListener("click",()=>E_(U)),O.append(De)}as=document.createElement("p"),as.className="home-status",as.setAttribute("aria-live","polite"),as.style.cssText="margin:0.5rem 0 0;font-size:0.76rem;line-height:1.35;color:var(--fg-secondary)",v.append(P,O,as),Xo()}function E_(v){Eh=v,by(typeof localStorage<"u"?localStorage:null,v),document.querySelectorAll("#home-mode button").forEach(P=>{P.classList.toggle("is-active",P.dataset.homeMode===v)}),Me&&(v==="live"?Me.start():(Me.stop(),S_()),Xo())}Yp&&(Me=Ey({baseUrl:Sh.baseUrl,onStatus:()=>{Xo(),sn=!0},onDevice:v=>M_(v),onSwitch:v=>{if(v.event!=="initialPress")return;let P=o.elements[v.globalId],O=performance.now()-(bh.get(v.globalId)??-1/0)<3e3;bh.delete(v.globalId),P&&!O&&Mh(P)}}),Zp(),Eh==="live"&&Me.start(),window.blueprintsHome=Me),cp(()=>vh.refresh());let Kp=null,Jp=null,qo="fast",jp=null,Sl=!1;n.addEventListener("pointermove",()=>{pi?.isActive()&&(sn=!0)}),n.addEventListener("pointerup",()=>{pi?.isActive()&&(sn=!0)});function w_(){let v=B.view;return[B.position.x,B.position.y,B.position.z,B.quaternion.x,B.quaternion.y,B.quaternion.z,B.quaternion.w,B.zoom,B.near,B.far,B.fov||0,B.left,B.right,B.top,B.bottom,ne.target.x,ne.target.y,ne.target.z,n.width,n.height,v&&v.enabled?1:0,v?v.offsetX:0,v?v.offsetY:0,v?v.fullWidth:0,v?v.fullHeight:0,Z==="ortho"?1:0]}function T_(){let v=w_(),P=Kp,O=!P||P.length!==v.length;if(!O&&P){for(let U=0;U<v.length;U++)if(v[U]!==P[U]){O=!0;break}}return O&&(Kp=v),O}function A_(){let v=[p,x,Ku(),Lr?"1":"0",String(f)],P=h?.background;P&&P.isColor&&v.push(P.getHexString());for(let[U,oe]of g)v.push(U,Number(oe).toFixed(3));for(let U of pe)v.push(String(U.id),U.locked?"1":"0",Number(U.t).toFixed(4));let O=xh.hiddenIds();return v.push(O.length?O.slice().sort().join(","):"-"),v.join("|")}function El(){if(Ge)return;let v=performance.now();we.step(v)&&(sn=!0),c_(v),o_(v),Ky(v),ne.update(),Oe&&yn(),Qn||(Ft.copy(B.position),Zt.copy(ne.target),Qn=!0);let P=B.position.distanceToSquared(Ft)>1e-8||ne.target.distanceToSquared(Zt)>1e-8;Ft.copy(B.position),Zt.copy(ne.target);let O=A_(),U=O!==Jp,oe=T_();if(U&&(Sl=!0),qo=!_n&&!P&&!U&&!E&&!ir&&!Sl?"high":"fast",!sn&&!U&&!oe&&!(qo!==jp)&&!Sl){requestAnimationFrame(El);return}sn=!1,Jp=O,jp=qo,U||(Sl=!1),pi?.update(),Ne.update();let st=z.render(h,B,Oe,zp,{quality:qo,batchKey:O,deferPrime:U||E});Hp&&!st&&kp(),Hp=st,requestAnimationFrame(El)}return El(),Bp}return O_(aR);})();
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
